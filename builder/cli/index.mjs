#!/usr/bin/env node
import { init } from "../lib/builder-operations.mjs";
import { importCpc } from "../lib/cpc-scaffold.mjs";
import { lint } from "../lib/lint-rules.mjs";
import { moduleChecklistCommand } from "../lib/module-checklist.mjs";
import {
  bump,
  lifecycle,
  publish,
  recover,
  revise,
  syncStructured,
} from "../lib/manifest-lifecycle.mjs";

const COMMAND_OPTIONS = Object.freeze({
  init: Object.freeze({
    values: ["root", "sample-pcr", "pcr-id", "title-en", "title-zh-CN"],
    booleans: ["help"],
  }),
  lint: Object.freeze({ values: ["root", "pcr"], booleans: ["help"] }),
  "module-checklist": Object.freeze({
    values: ["root", "pcr", "format"],
    booleans: ["help"],
  }),
  "import-cpc": Object.freeze({
    values: ["root", "source", "classification-version", "source-url"],
    booleans: ["help", "legacy-scaffolds"],
  }),
  "scaffold-cpc": Object.freeze({
    values: ["root", "source", "classification-version", "source-url"],
    booleans: ["help", "legacy-scaffolds"],
  }),
  "sync-structured": Object.freeze({
    values: ["root", "pcr", "workspace"],
    booleans: ["help"],
  }),
  lifecycle: Object.freeze({
    values: ["root", "pcr", "workspace", "status", "content-maturity", "translation"],
    booleans: ["help"],
  }),
  bump: Object.freeze({
    values: ["root", "pcr", "workspace", "level"],
    booleans: ["help"],
  }),
  revise: Object.freeze({
    values: ["root", "pcr", "version"],
    booleans: ["help"],
  }),
  publish: Object.freeze({
    values: ["root", "pcr", "workspace", "version"],
    booleans: ["help"],
  }),
  recover: Object.freeze({
    values: ["root", "pcr"],
    booleans: ["help", "force-stale-lock"],
  }),
});

function parseArgs(argv) {
  const [command, ...rest] = argv;
  const options = { _: [] };

  if (command === undefined || command === "help" || command === "--help") {
    if (rest.length > 0) {
      throw new Error(`Unexpected argument for ${command ?? "help"}: ${rest[0]}`);
    }
    return { command, options };
  }

  const specification = COMMAND_OPTIONS[command];
  if (!specification) {
    throw new Error(`Unknown command: ${command}`);
  }
  const valueOptions = new Set(specification.values);
  const booleanOptions = new Set(specification.booleans);
  const allowedOptions = new Set([...valueOptions, ...booleanOptions]);
  const seenOptions = new Set();

  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    if (!token.startsWith("--") || token === "--") {
      throw new Error(`Unexpected positional argument for ${command}: ${token}`);
    }

    const separatorIndex = token.indexOf("=");
    const key = token.slice(2, separatorIndex < 0 ? undefined : separatorIndex);
    const inlineValue = separatorIndex < 0 ? undefined : token.slice(separatorIndex + 1);
    if (!key || !allowedOptions.has(key)) {
      const allowed = [...allowedOptions].sort().map((entry) => `--${entry}`).join(", ");
      throw new Error(
        `Unknown option for ${command}: --${key || "(empty)"}. Allowed options: ${allowed}`,
      );
    }
    const repeatable = command === "lint" && key === "pcr";
    if (seenOptions.has(key) && !repeatable) {
      throw new Error(`Duplicate option for ${command}: --${key}`);
    }
    seenOptions.add(key);

    if (booleanOptions.has(key)) {
      const next = rest[index + 1];
      if (inlineValue !== undefined || (next !== undefined && !next.startsWith("--"))) {
        throw new Error(`--${key} is a boolean flag and does not accept a value`);
      }
      options[key] = true;
      continue;
    }

    if (inlineValue !== undefined) {
      if (inlineValue.length === 0) {
        throw new Error(`--${key} requires a non-empty value`);
      }
      options[key] = repeatable ? [...(options[key] ?? []), inlineValue] : inlineValue;
      continue;
    }

    const next = rest[index + 1];
    if (next === undefined || next.startsWith("--")) {
      throw new Error(`--${key} requires a value`);
    }
    options[key] = repeatable ? [...(options[key] ?? []), next] : next;
    index += 1;
  }

  return { command, options };
}

function printHelp() {
  return `PCR Library Builder CLI

Usage:
  node builder/cli/index.mjs init [--root <path>] [--sample-pcr <domain/path/slug>]
  node builder/cli/index.mjs lint [--root <path>] [--pcr <library/pcrs/domain/subdomain/slug>]...
  node builder/cli/index.mjs module-checklist --pcr <library/pcrs/...> [--format json|yaml|markdown] [--root <path>]
  node builder/cli/index.mjs import-cpc --source <csv> [--classification-version 3.0] [--legacy-scaffolds]
  node builder/cli/index.mjs scaffold-cpc --legacy-scaffolds --source <csv>  # compatibility alias
  node builder/cli/index.mjs sync-structured --pcr <library/pcrs/...> [--workspace current|revision] [--root <path>]
  node builder/cli/index.mjs lifecycle --pcr <library/pcrs/...> [--workspace current|revision] [--status <status>] [--content-maturity <state>] [--translation <lang=status>] [--root <path>]
  node builder/cli/index.mjs bump --pcr <library/pcrs/...> [--level patch|minor|major] [--root <path>]
  node builder/cli/index.mjs revise --pcr <library/pcrs/...> --version <semver> [--root <path>]
  node builder/cli/index.mjs publish --pcr <library/pcrs/...> --workspace current --version <semver> [--root <path>]
  node builder/cli/index.mjs publish --pcr <library/pcrs/...> --workspace revision [--root <path>]
  node builder/cli/index.mjs recover --pcr <library/pcrs/...> [--force-stale-lock] [--root <path>]

Workspace rules:
  current   The canonical top-level authoring/current-release files (default).
  revision  The explicit revision/ workspace of an already published PCR.

Publication rules:
  First release: publish --workspace current --version <semver>
  Later release: publish --workspace revision (the version is locked by revise)

CPC import rules:
  import-cpc creates zero PCR records by default and preserves existing mapping bytes.
  scaffold-cpc is a fail-fast compatibility alias that requires explicit --legacy-scaffolds.
`;
}

function printCpcImportHelp() {
  return `Import a CPC classification source without coupling leaves to PCR identity.

Usage:
  node builder/cli/index.mjs import-cpc --source <csv> [options]

Options:
  --root <path>                  Target PCR repository.
  --classification-version <v>  CPC version written to normalized artifacts (default: 3.0).
  --source-url <url>             Official source URL recorded in source metadata.
  --legacy-scaffolds             Explicit compatibility mode: append missing legacy mapping/identity entries and
                                 create missing empty PCR directories. Do not use for new classification imports.

Default output:
  Writes raw source metadata plus normalized hierarchy, leaves, and paths. Creates an empty mapping file only when
  one is absent. Existing mappings are validated and preserved byte-for-byte. Creates no PCR records.

Compatibility alias:
  scaffold-cpc requires --legacy-scaffolds. Without it, the command fails and points to import-cpc so existing
  automation cannot silently change meaning.

Next:
  Review accepted mappings, then run npm run catalog:build in the target repository.
`;
}

function runCommand(command, options) {
  if (!command || command === "help" || command === "--help") {
    return { messages: [printHelp()], exitCode: 0 };
  }
  if (options.help === true && command !== "import-cpc" && command !== "scaffold-cpc") {
    return { messages: [printHelp()], exitCode: 0 };
  }
  if (command === "init") {
    return { messages: init(options), exitCode: 0 };
  }
  if (command === "lint") {
    return { messages: lint(options), exitCode: 0 };
  }
  if (command === "module-checklist") {
    return { messages: moduleChecklistCommand(options), exitCode: 0 };
  }
  if (command === "import-cpc" || command === "scaffold-cpc") {
    if (options.help === true) {
      return { messages: [printCpcImportHelp()], exitCode: 0 };
    }
    if (command === "scaffold-cpc" && options["legacy-scaffolds"] !== true) {
      throw new Error(
        "scaffold-cpc is a compatibility alias and requires --legacy-scaffolds; use import-cpc for classification-only imports",
      );
    }
    return { messages: importCpc(options), exitCode: 0 };
  }
  if (command === "sync-structured") {
    return { messages: syncStructured(options), exitCode: 0 };
  }
  if (command === "bump") {
    return { messages: bump(options), exitCode: 0 };
  }
  if (command === "lifecycle") {
    return { messages: lifecycle(options), exitCode: 0 };
  }
  if (command === "publish") {
    return { messages: publish(options), exitCode: 0 };
  }
  if (command === "revise") {
    return { messages: revise(options), exitCode: 0 };
  }
  if (command === "recover") {
    return { messages: recover(options), exitCode: 0 };
  }
  throw new Error(`Unknown command: ${command}`);
}

function main(argv) {
  try {
    const { command, options } = parseArgs(argv);
    const { messages, exitCode } = runCommand(command, options);
    if (messages.length > 0) {
      process.stdout.write(`${messages.join("\n")}\n`);
    }
    process.exitCode = exitCode;
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  }
}

main(process.argv.slice(2));
