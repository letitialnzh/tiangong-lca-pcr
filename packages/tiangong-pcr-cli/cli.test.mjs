import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { parsePcrMarkdownToStructured } from "../../builder/lib/markdown-projection.mjs";
import { structuredProjectionYaml } from "../../builder/lib/structured-yaml-projection.mjs";

const cliPath = path.resolve("packages/tiangong-pcr-cli/bin/tiangong-pcr.mjs");
const repoRoot = path.resolve(".");
const wheatSeedPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const scaffoldPcrId =
  "pcr.community-social-and-personal-services.education-services.primary-education-services";

function runCli(args) {
  return execFileSync(process.execPath, [cliPath, "--root", repoRoot, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function runCliFailure(args) {
  return execFileSync(process.execPath, [cliPath, "--root", repoRoot, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function runCliAtRoot(root, args) {
  return execFileSync(process.execPath, [cliPath, "--root", root, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function installEmptyPcrAliasBinding(root) {
  const registryPath = path.join(
    root,
    "classifications/aliases/pcr-id-aliases.yaml",
  );
  const registry = `schema_version: 1
registry_kind: legacy-pcr-id-aliases
status: current
aliases: []
`;
  mkdirSync(path.dirname(registryPath), { recursive: true });
  writeFileSync(registryPath, registry);

  const digest = createHash("sha256").update(registry).digest("hex");
  const catalogPath = path.join(root, "library/catalog.yaml");
  mkdirSync(path.dirname(catalogPath), { recursive: true });
  writeFileSync(
    catalogPath,
    `schema_version: 1
catalog_status: current
pcr_id_aliases:
  path: classifications/aliases/pcr-id-aliases.yaml
  hash_mode: exact_bytes
  sha256: sha256:${digest}
  entry_count: 0
`,
  );
}

test("list prints PCR records as JSON", () => {
  const output = runCli(["list", "--status", "candidate", "--format", "json"]);
  const page = JSON.parse(output);

  assert.equal(page.page, 1);
  assert.equal(page.page_size, 10);
  assert.ok(page.items.length > 0);
  assert.ok(page.items.every((entry) => entry.status === "candidate"));
});

test("list defaults to material scope and derives legacy scope for scaffold filters", () => {
  const material = JSON.parse(runCli(["list", "--format", "json"]));
  const legacy = JSON.parse(runCli([
    "list",
    "--status",
    "scaffold",
    "--page-size",
    "2",
    "--format",
    "json",
  ]));

  assert.equal(material.requested_scope, null);
  assert.equal(material.effective_scope, "material");
  assert.equal(material.scope_source, "default");
  assert.equal(material.filters.scope, "material");
  assert.ok(material.items.every((entry) => entry.record_kind === "methodology"));

  assert.equal(legacy.requested_scope, null);
  assert.equal(legacy.effective_scope, "legacy");
  assert.equal(legacy.scope_source, "derived_from_status");
  assert.equal(legacy.filters.scope, "legacy");
  assert.ok(legacy.items.every((entry) => entry.record_kind === "legacy_scaffold_reference"));
});

test("list paginates to 10 records by default and suggests the next page", () => {
  const output = runCli(["list", "--scope", "all"]);

  assert.match(output, /PCR id \| Status \| Readiness \| Title/);
  assert.match(output, /Showing 1-10 of /);
  assert.match(output, /Next page:/);
  assert.match(output, /npm --silent run tiangong-pcr -- list --scope all --page 2/);
  assert.match(output, /--root /);
  assert.match(output, /usable_for_guidance/);
});

test("list next commands preserve custom root and output format", () => {
  const page = JSON.parse(runCli(["list", "--scope", "all", "--format", "json"]));

  assert.match(page.next_command, /--root /);
  assert.match(page.next_command, /--format json/);
  assert.match(page.next_command, /--page 2/);
});

test("list path-prefix filters the catalog and survives pagination", () => {
  const pathPrefix =
    "agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening";
  const page = JSON.parse(runCli([
    "list",
    "--scope",
    "all",
    "--path-prefix",
    pathPrefix,
    "--page-size",
    "1",
    "--format",
    "json",
  ]));

  assert.equal(page.page_size, 1);
  assert.ok(page.total_count > 1);
  assert.ok(page.items.every((entry) => entry.path.includes(pathPrefix)));
  assert.deepEqual(page.filters, {
    scope: "all",
    status: null,
    content_maturity: null,
    path_prefix: pathPrefix,
  });
  assert.equal(page.has_more, true);
  assert.match(page.next_command, /npm --silent run tiangong-pcr -- list/);
  assert.match(page.next_command, new RegExp(`--path-prefix ${pathPrefix}`));
});

test("help explains the Agent selection workflow", () => {
  const output = runCli(["--help"]);

  assert.match(output, /Usage:/);
  assert.match(output, /Agent workflow/);
  assert.match(output, /resolve --classification/);
  assert.match(output, /tree\/list/);
  assert.match(output, /guidance --pcr/);
  assert.match(output, /validate-model/);
  assert.match(output, /validate-dataset/);
});

test("list help explains pagination and JSON output", () => {
  const output = runCli(["list", "--help"]);

  assert.match(output, /Usage: tiangong-pcr list/);
  assert.match(output, /Defaults to 10 records per page/);
  assert.match(output, /JSON output/);
  assert.match(output, /next_command/);
});

test("resolve help explains deterministic mapping usage", () => {
  const output = runCli(["resolve", "--help"]);

  assert.match(output, /Usage: tiangong-pcr resolve/);
  assert.match(output, /deterministic contracts/);
  assert.match(output, /cpc:3.0:01111/);
  assert.match(output, /--pcr <pcr-id>/);
  assert.match(output, /never silently follows/);
  assert.match(output, /does not prove that the methodology is usable/);
});

test("coverage help exposes bounded deterministic browsing and no auto-selection", () => {
  const parentHelp = runCli(["coverage", "--help"]);
  const summaryHelp = runCli(["coverage", "summary", "--help"]);
  const listHelp = runCli(["coverage", "list", "--help"]);

  assert.match(parentHelp, /Usage: tiangong-pcr coverage <summary\|list>/);
  assert.match(parentHelp, /coverage summary --classification <system>:<version>/);
  assert.match(parentHelp, /coverage list --classification <system>:<version>/);
  assert.match(parentHelp, /summary and list support json\|table/);
  assert.match(parentHelp, /npm --silent run tiangong-pcr -- coverage summary --classification cpc:3\.0 --format json/);
  assert.match(summaryHelp, /bounded aggregate coverage/);
  assert.match(summaryHelp, /cpc:3\.0/);
  assert.match(listHelp, /not fuzzy search/);
  assert.match(listHelp, /never selected as accepted PCR mappings/);
  assert.match(listHelp, /previous_command/);
});

test("coverage parent errors name both valid subcommands", () => {
  for (const args of [["coverage"], ["coverage", "nope"]]) {
    assert.throws(
      () => runCliFailure(args),
      (error) => {
        const stderr = String(error.stderr);
        assert.match(stderr, /coverage summary --classification <system>:<version>/);
        assert.match(stderr, /coverage list --classification <system>:<version>/);
        return true;
      },
    );
  }

  assert.throws(
    () => runCliFailure(["coverage", "--format", "json"]),
    (error) => {
      assert.equal(String(error.stdout), "");
      const envelope = JSON.parse(String(error.stderr));
      assert.equal(envelope.error.code, "PCR_CLI_MISSING_SUBCOMMAND");
      assert.deepEqual(envelope.error.details.valid_subcommands, ["summary", "list"]);
      return true;
    },
  );
});

test("coverage summary is bounded and coverage list exposes stable pagination context", () => {
  const summary = JSON.parse(runCli([
    "coverage",
    "summary",
    "--classification",
    "cpc:3.0",
    "--format",
    "json",
  ]));
  const page = JSON.parse(runCli([
    "coverage",
    "list",
    "--classification",
    "cpc:3.0",
    "--status",
    "unmapped",
    "--page-size",
    "2",
    "--format",
    "json",
  ]));

  assert.equal(summary.summary.total, 2877);
  assert.equal(
    summary.summary.mapped
      + summary.summary.unmapped
      + summary.summary.candidate_suggestion
      + summary.summary.manual_review
      + summary.summary.unknown,
    summary.summary.total,
  );
  assert.equal(summary.completeness.bounded, true);
  assert.equal(summary.completeness.entry_details_included, false);
  assert.equal(Object.hasOwn(summary, "entries"), false);
  assert.match(summary.next_command, /coverage list --classification cpc:3\.0/);

  assert.deepEqual(page.filters, { status: "unmapped" });
  assert.equal(page.completeness.page, 1);
  assert.equal(page.completeness.page_size, 2);
  assert.equal(page.completeness.returned_count, 2);
  assert.equal(page.completeness.total_count, summary.summary.unmapped);
  assert.equal(page.completeness.has_more, true);
  assert.ok(page.items.every((entry) => entry.coverage_status === "unmapped"));
  assert.ok(page.items.every((entry) => entry.mapping === null));
  assert.match(page.next_command, /--status unmapped/);
  assert.match(page.next_command, /--page 2/);
  assert.match(page.next_command, /--root /);
  assert.match(page.next_command, /--format json/);
});

test("guidance help keeps foreground dataset production as the primary workflow", () => {
  const output = runCli(["guidance", "--help"]);

  assert.match(output, /foreground data package/);
  assert.match(output, /validate-dataset/);
  assert.match(output, /process or lifecyclemodel.*downstream projection/);
});

test("feedback draft help lists feedback types", () => {
  const output = runCli(["feedback", "draft", "--help"]);

  assert.match(output, /Usage: tiangong-pcr feedback draft/);
  assert.match(output, /range_evidence_update/);
  assert.match(output, /translation_mismatch/);
});

test("validate-dataset help documents input, coverage, and exit semantics", () => {
  const output = runCli(["validate-dataset", "--help"]);

  assert.match(output, /Usage: tiangong-pcr validate-dataset/);
  assert.match(output, /foreground data package JSON/);
  assert.match(output, /validation_status/);
  assert.match(output, /check_coverage/);
  assert.match(output, /--fail-on never\|error\|warning/);
  assert.match(output, /Defaults to error/);
  assert.match(output, /Exit codes:/);
  assert.match(output, /inconclusive/);
});

test("resolve prints deterministic classification mapping as JSON", () => {
  const output = runCli(["resolve", "--classification", "cpc:3.0:01111", "--format", "json"]);
  const result = JSON.parse(output);

  assert.equal(result.mapping.pcr_id, wheatSeedPcrId);
  assert.equal(result.mapping.mapping_type, "exact");
  assert.equal(result.resolution_status, "mapped");
  assert.equal(result.coverage_status, "mapped");
  assert.equal(result.coverage.code, "01111");
  assert.match(result.next_command, /--root /);
  assert.match(result.next_command, /--format json/);
});

test("resolve returns the accepted wheat-other classification mapping", () => {
  const result = JSON.parse(runCli([
    "resolve",
    "--classification",
    "cpc:3.0:01112",
    "--format",
    "json",
  ]));

  assert.equal(result.resolution_status, "mapped");
  assert.equal(result.coverage_status, "mapped");
  assert.equal(result.mapping.mapping_type, "exact");
  assert.match(result.pcr.id, /wheat-other$/u);
});

test("resolve accepts exactly one selector and does not auto-follow retired PCR ids", () => {
  const redirected = JSON.parse(runCli([
    "resolve",
    "--pcr",
    scaffoldPcrId,
    "--format",
    "json",
  ]));
  assert.equal(redirected.resolution_status, "legacy_id_redirect");
  assert.equal(redirected.requested_pcr_id, scaffoldPcrId);
  assert.equal(redirected.pcr, null);
  assert.equal(redirected.redirect.source_pcr_id, scaffoldPcrId);
  assert.equal(redirected.redirect.target.kind, "classification_coverage");
  assert.match(redirected.next_command, /resolve --classification cpc:3\.0:92200/);
  assert.match(redirected.next_command, /--root /);
  assert.equal(redirected.redirect.next_command, redirected.next_command);
  assert.ok(redirected.next_steps.some((step) => step.includes("not automatically selected")));

  const canonical = JSON.parse(runCli([
    "resolve",
    "--pcr",
    wheatSeedPcrId,
    "--format",
    "json",
  ]));
  assert.equal(canonical.resolution_status, "canonical");
  assert.equal(canonical.pcr.id, wheatSeedPcrId);
  assert.equal(canonical.pcr.readiness.usable_for_guidance, true);
  assert.match(canonical.next_command, /guidance --pcr/);

  for (const args of [
    ["resolve", "--format", "json"],
    [
      "resolve",
      "--classification",
      "cpc:3.0:01111",
      "--pcr",
      wheatSeedPcrId,
      "--format",
      "json",
    ],
  ]) {
    assert.throws(
      () => runCliFailure(args),
      (error) => {
        assert.equal(String(error.stdout), "");
        const envelope = JSON.parse(String(error.stderr));
        assert.equal(envelope.error.code, "PCR_CLI_EXACTLY_ONE_SELECTOR_REQUIRED");
        return true;
      },
    );
  }
});

test("resolve returns known non-mapped coverage as success and rejects only unknown codes", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-cli-unmapped-"));
  try {
    writeKnownUnmappedCoverage(root);
    const known = JSON.parse(runCliAtRoot(root, [
      "resolve",
      "--classification",
      "cpc:3.0:X-1",
      "--format",
      "json",
    ]));
    assert.equal(known.resolution_status, "unmapped");
    assert.equal(known.coverage_status, "unknown");
    assert.equal(known.mapping, null);
    assert.equal(known.pcr, null);
    assert.match(known.next_command, /coverage list/);

    assert.throws(
      () => runCliAtRoot(root, [
        "resolve",
        "--classification",
        "cpc:3.0:NOT-THERE",
        "--format",
        "json",
      ]),
      (error) => {
        assert.equal(String(error.stdout), "");
        const envelope = JSON.parse(String(error.stderr));
        assert.equal(envelope.error.code, "PCR_CLASSIFICATION_CODE_UNKNOWN");
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("guidance prints Agent-facing data-production PCR rules", () => {
  const output = runCli(["guidance", "--pcr", wheatSeedPcrId, "--format", "json"]);
  const guidance = JSON.parse(output);

  assert.equal(guidance.reference_flow.reference_unit, "kg");
  assert.ok(guidance.system_boundary.rules.length > 0);
  assert.equal(guidance.boundary_abstraction.declared_starting_condition, "source_seed_lot");
  assert.ok(guidance.process_map.length > 0);
  assert.ok(guidance.production_guidance.collection_protocols.length > 0);
  assert.ok(guidance.allocation_rules.length > 0);
  assert.ok(guidance.validation_rules.length > 0);
  assert.equal(guidance.published_dataset_profile.downstream_use.includes("secondary_dataset"), true);
  assert.equal(guidance.readiness.usable_for_guidance, true);
});

test("guidance redirects a retired scaffold id with no JSON stdout", () => {
  assert.throws(
    () => runCliFailure(["guidance", "--pcr", scaffoldPcrId, "--format", "json"]),
    (error) => {
      assert.equal(String(error.stdout), "");
      const envelope = JSON.parse(String(error.stderr));
      assert.equal(envelope.error.code, "PCR_LEGACY_ID_REDIRECT");
      assert.equal(envelope.error.details.source_pcr_id, scaffoldPcrId);
      assert.match(envelope.error.details.next_command, /resolve --classification/);
      assert.match(envelope.error.details.next_command, /--root /);
      return true;
    },
  );
});

test("show returns the stable retired-id redirect code before content lookup", () => {
  assert.throws(
    () => runCliFailure(["show", "--pcr", scaffoldPcrId]),
    (error) => {
      assert.equal(String(error.stdout), "");
      assert.match(String(error.stderr), /\[PCR_LEGACY_ID_REDIRECT\]/);
      assert.match(String(error.stderr), /resolve --classification cpc:3\.0:92200/);
      assert.match(String(error.stderr), /--root /);
      return true;
    },
  );
});

test("validate-dataset reports missing collection protocol records", () => {
  const tempDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-dataset-"));
  try {
    const inputPath = path.join(tempDir, "dataset.json");
    writeFileSync(inputPath, JSON.stringify({ collection_records: [{ protocol_id: "cp_source_seed_lot_mass" }] }));

    const output = runCli([
      "validate-dataset",
      "--pcr",
      wheatSeedPcrId,
      "--input",
      inputPath,
      "--format",
      "json",
      "--fail-on",
      "never",
    ]);
    const result = JSON.parse(output);

    assert.equal(result.validation_status, "failed");
    assert.equal(result.completeness, "partial");
    assert.equal(result.input.accepted, true);
    assert.ok(result.check_coverage.checks_performed.length > 0);
    assert.ok(result.findings.some((finding) => finding.code === "missing_collection_protocol_record"));
    assert.ok(result.findings.some((finding) => finding.message.includes("cp_harvested_seed_mass")));
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});

test("validate-dataset rejects malformed JSON with a non-zero exit and clean stdout", () => {
  const tempDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-invalid-dataset-"));
  try {
    const inputPath = path.join(tempDir, "dataset.json");
    writeFileSync(inputPath, "{ definitely not json");

    assert.throws(
      () => runCliFailure(["validate-dataset", "--pcr", wheatSeedPcrId, "--input", inputPath, "--format", "json"]),
      (error) => {
        assert.equal(String(error.stdout), "");
        assert.match(String(error.stderr), /Malformed dataset JSON/);
        return true;
      },
    );
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});

test("validate-dataset defaults to an error gate and supports explicit report-only mode", () => {
  const tempDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-fail-on-"));
  try {
    const inputPath = path.join(tempDir, "dataset.json");
    writeFileSync(inputPath, JSON.stringify({ collection_records: [] }));

    assert.throws(
      () => runCliFailure([
        "validate-dataset",
        "--pcr",
        wheatSeedPcrId,
        "--input",
        inputPath,
        "--format",
        "json",
      ]),
      (error) => {
        assert.equal(error.status, 2);
        assert.equal(JSON.parse(String(error.stdout)).validation_status, "failed");
        assert.equal(String(error.stderr), "");
        return true;
      },
    );

    const reportOnly = JSON.parse(runCli([
      "validate-dataset",
      "--pcr",
      wheatSeedPcrId,
      "--input",
      inputPath,
      "--format",
      "json",
      "--fail-on",
      "never",
    ]));
    assert.equal(reportOnly.validation_status, "failed");
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});

test("validation treats an inconclusive report as non-zero unless report-only mode is explicit", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-inconclusive-"));
  const relativePcrPath =
    "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed";
  const pcrDir = path.join(root, relativePcrPath);
  const inputPath = path.join(root, "dataset.json");
  try {
    installEmptyPcrAliasBinding(root);
    mkdirSync(path.dirname(pcrDir), { recursive: true });
    cpSync(path.join(repoRoot, relativePcrPath), pcrDir, { recursive: true });
    const markdown = readFileSync(path.join(pcrDir, "pcr.en-US.md"), "utf8");
    const projection = parsePcrMarkdownToStructured(markdown);
    projection.collectionProtocols = [];
    writeFileSync(
      path.join(pcrDir, "structured.yaml"),
      structuredProjectionYaml(projection, { sourceMarkdown: markdown }),
    );
    writeFileSync(inputPath, "{}\n");

    const args = [
      cliPath,
      "--root",
      root,
      "validate-dataset",
      "--pcr",
      wheatSeedPcrId,
      "--input",
      inputPath,
      "--format",
      "json",
    ];
    assert.throws(
      () => execFileSync(process.execPath, args, { encoding: "utf8" }),
      (error) => {
        assert.equal(error.status, 2);
        assert.equal(JSON.parse(String(error.stdout)).validation_status, "inconclusive");
        assert.equal(String(error.stderr), "");
        return true;
      },
    );

    const reportOnly = JSON.parse(execFileSync(
      process.execPath,
      [...args, "--fail-on", "never"],
      { encoding: "utf8" },
    ));
    assert.equal(reportOnly.validation_status, "inconclusive");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("feedback draft prints issue-ready Markdown", () => {
  const output = runCli([
    "feedback",
    "draft",
    "--pcr",
    wheatSeedPcrId,
    "--type",
    "translation_mismatch",
    "--summary",
    "Chinese and English process names diverge.",
  ]);

  assert.match(output, /PCR feedback: translation_mismatch/);
  assert.match(output, /Chinese and English process names diverge/);
});

test("unknown command fails explicitly", () => {
  assert.throws(
    () => runCliFailure(["nope"]),
    (error) => {
      assert.notEqual(error.status, 0);
      assert.match(String(error.stderr), /Unknown command: nope/);
      return true;
    },
  );
});

test("invalid output format fails explicitly", () => {
  assert.throws(
    () => runCliFailure(["list", "--format", "xml"]),
    (error) => {
      assert.notEqual(error.status, 0);
      assert.match(String(error.stderr), /Invalid --format "xml"/);
      return true;
    },
  );
});

test("invalid numeric options fail explicitly", () => {
  assert.throws(
    () => runCliFailure(["tree", "--depth", "abc"]),
    (error) => {
      assert.notEqual(error.status, 0);
      assert.match(String(error.stderr), /Invalid --depth "abc"/);
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["list", "--page-size", "0"]),
    (error) => {
      assert.notEqual(error.status, 0);
      assert.match(String(error.stderr), /Invalid --page-size "0"/);
      return true;
    },
  );
});

test("unknown options and out-of-range pages fail explicitly", () => {
  assert.throws(
    () => runCliFailure(["list", "--wat", "yes"]),
    (error) => {
      assert.match(String(error.stderr), /Unknown option --wat/);
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["list", "--status", "candidate", "--page", "999"]),
    (error) => {
      assert.match(String(error.stderr), /--page 999 is out of range/);
      return true;
    },
  );
});

test("commands enforce their own output formats and defaults", async (t) => {
  const invalidCases = [
    {
      name: "show rejects json",
      args: ["show", "--pcr", wheatSeedPcrId, "--format", "json"],
      jsonError: true,
    },
    {
      name: "guidance rejects markdown",
      args: ["guidance", "--pcr", wheatSeedPcrId, "--format", "markdown"],
      jsonError: false,
    },
    {
      name: "feedback draft rejects table",
      args: ["feedback", "draft", "--type", "translation_mismatch", "--format", "table"],
      jsonError: false,
    },
  ];

  for (const testCase of invalidCases) {
    await t.test(testCase.name, () => {
      assert.throws(
        () => runCliFailure(testCase.args),
        (error) => {
          if (testCase.jsonError) {
            const envelope = JSON.parse(String(error.stderr));
            assert.equal(envelope.error.code, "PCR_CLI_INVALID_CHOICE");
            assert.equal(envelope.error.details.option, "format");
          } else {
            assert.match(String(error.stderr), /PCR_CLI_INVALID_CHOICE/);
          }
          return true;
        },
      );
    });
  }

  assert.equal(
    JSON.parse(runCli(["resolve", "--classification", "cpc:3.0:01111"])).mapping.pcr_id,
    wheatSeedPcrId,
  );
  assert.equal(JSON.parse(runCli(["guidance", "--pcr", wheatSeedPcrId])).pcr.id, wheatSeedPcrId);
});

test("tree defaults to depth 2 and reports readiness on rendered PCR leaves", () => {
  const defaultTree = runCli(["tree"]);
  assert.doesNotMatch(defaultTree, new RegExp(wheatSeedPcrId.replaceAll(".", "\\.")));
  assert.match(defaultTree, /partial at depth 2/);
  assert.match(defaultTree, /list --path-prefix <visible-path>/);

  const jsonTree = JSON.parse(runCli(["tree", "--format", "json"]));
  assert.equal(jsonTree.scope, "library/pcrs");
  assert.equal(jsonTree.depth, 2);
  assert.equal(jsonTree.completeness, "partial");
  assert.ok(jsonTree.tree);
  assert.ok(jsonTree.next_steps.some((step) => step.includes("--path-prefix")));

  const leafTree = runCli(["tree", "--depth", "3"]);
  assert.match(leafTree, new RegExp(wheatSeedPcrId.replaceAll(".", "\\.")));
  assert.match(leafTree, /readiness: [a-z_]+; usable_for_guidance: (?:true|false)/);
});

test("classification, language, vocabulary filters, and validation policy are strict", async (t) => {
  const cases = [
    {
      name: "classification has exactly three segments",
      args: ["resolve", "--classification", "cpc:3.0:01111:extra", "--format", "json"],
      code: "PCR_CLI_INVALID_CLASSIFICATION",
    },
    {
      name: "language is controlled",
      args: ["show", "--pcr", wheatSeedPcrId, "--lang", "fr-FR", "--format", "markdown"],
      code: "PCR_CLI_INVALID_CHOICE",
    },
    {
      name: "status is controlled",
      args: ["list", "--status", "canddiate", "--format", "json"],
      code: "PCR_CLI_INVALID_CHOICE",
    },
    {
      name: "content maturity is controlled",
      args: ["list", "--content-maturity", "reviewd", "--format", "json"],
      code: "PCR_CLI_INVALID_CHOICE",
    },
    {
      name: "catalog scope is controlled",
      args: ["list", "--scope", "everything", "--format", "json"],
      code: "PCR_CLI_INVALID_CHOICE",
    },
    {
      name: "coverage classification has exactly two segments",
      args: [
        "coverage",
        "summary",
        "--classification",
        "cpc:3.0:01111",
        "--format",
        "json",
      ],
      code: "PCR_CLI_INVALID_CLASSIFICATION",
    },
    {
      name: "coverage status is controlled",
      args: [
        "coverage",
        "list",
        "--classification",
        "cpc:3.0",
        "--status",
        "maybe",
        "--format",
        "json",
      ],
      code: "PCR_CLI_INVALID_CHOICE",
    },
    {
      name: "fail-on is checked before reading input",
      args: [
        "validate-dataset",
        "--pcr",
        wheatSeedPcrId,
        "--input",
        "/definitely/missing.json",
        "--fail-on",
        "sometimes",
        "--format",
        "json",
      ],
      code: "PCR_CLI_INVALID_CHOICE",
    },
  ];

  for (const testCase of cases) {
    await t.test(testCase.name, () => {
      assert.throws(
        () => runCliFailure(testCase.args),
        (error) => {
          const stderr = String(error.stderr);
          if (testCase.args.at(-1) === "json") {
            assert.equal(JSON.parse(stderr).error.code, testCase.code);
          } else {
            assert.match(stderr, new RegExp(testCase.code));
          }
          return true;
        },
      );
    });
  }
});

test("pagination accepts only bounded positive safe integer tokens", async (t) => {
  const cases = [
    ["--page", "1.5"],
    ["--page", "9007199254740992"],
    ["--page-size", "101"],
    ["--page-size", "1e2"],
  ];

  for (const args of cases) {
    await t.test(args.join(" "), () => {
      assert.throws(
        () => runCliFailure(["list", ...args, "--format", "json"]),
        (error) => {
          assert.equal(JSON.parse(String(error.stderr)).error.code, "PCR_CLI_INVALID_INTEGER_OPTION");
          return true;
        },
      );
    });
  }

  assert.throws(
    () => runCliFailure(["list", "--limit", "5", "--format", "json"]),
    (error) => {
      assert.equal(JSON.parse(String(error.stderr)).error.code, "PCR_CLI_UNKNOWN_OPTION");
      return true;
    },
  );
});

test("JSON error envelopes retain stable retired-id redirect details", () => {
  assert.throws(
    () => runCliFailure(["guidance", "--pcr", scaffoldPcrId, "--format", "json"]),
    (error) => {
      assert.equal(String(error.stdout), "");
      const envelope = JSON.parse(String(error.stderr));
      assert.equal(envelope.error.code, "PCR_LEGACY_ID_REDIRECT");
      assert.equal(envelope.error.exit_code, 1);
      assert.equal(envelope.error.details.source_pcr_id, scaffoldPcrId);
      assert.equal(envelope.error.details.target.kind, "classification_coverage");
      assert.equal(envelope.error.details.reason, "empty_scaffold_migration");
      assert.ok(envelope.error.details.decision_ref);
      assert.match(envelope.error.details.next_command, /resolve --classification/);
      assert.match(envelope.error.details.next_command, /--root /);
      return true;
    },
  );
});

test("JSON errors retain fail-closed missing-coverage details", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-invalid-mapping-cli-"));
  try {
    const mappingDir = path.join(root, "classifications/mappings");
    mkdirSync(mappingDir, { recursive: true });
    writeFileSync(
      path.join(mappingDir, "cpc-3.0-to-pcr.yaml"),
      `schema_version: 2
classification_system: cpc
classification_version: "3.0"
status: current
mappings:
  - code: "01111"
    label: Example
    pcr_id: pcr.example
    mapping_type: ambiguous
    confidence: reviewed
    acceptance:
      status: accepted
      decided_by: test-maintainer
      decided_at_utc: "2026-07-14T00:00:00Z"
      decision_ref: docs/test-decision.md
`,
    );

    assert.throws(
      () => execFileSync(
        process.execPath,
        [
          cliPath,
          "--root",
          root,
          "resolve",
          "--classification",
          "cpc:3.0:01111",
          "--format",
          "json",
        ],
        { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] },
      ),
      (error) => {
        assert.equal(String(error.stdout), "");
        const envelope = JSON.parse(String(error.stderr));
        assert.equal(envelope.error.code, "PCR_CLASSIFICATION_COVERAGE_NOT_FOUND");
        assert.deepEqual(envelope.error.details, {
          classification: "cpc:3.0",
          coverage_index: "classifications/indexes/cpc-3.0-coverage.json",
        });
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("feedback type and malformed global invocations fail with actionable JSON", () => {
  assert.throws(
    () => runCliFailure(["feedback", "draft", "--type", "bogus", "--format", "json"]),
    (error) => {
      const envelope = JSON.parse(String(error.stderr));
      assert.equal(envelope.error.code, "PCR_CLI_INVALID_CHOICE");
      assert.equal(envelope.error.details.option, "type");
      assert.ok(envelope.error.details.choices.includes("translation_mismatch"));
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["--format", "json"]),
    (error) => {
      assert.equal(JSON.parse(String(error.stderr)).error.code, "PCR_CLI_UNKNOWN_OPTION");
      return true;
    },
  );

  assert.throws(
    () => runCliFailure(["list", "--format", "json", "--format", "markdown"]),
    (error) => {
      assert.equal(JSON.parse(String(error.stderr)).error.code, "PCR_CLI_DUPLICATE_OPTION");
      return true;
    },
  );
});

function writeKnownUnmappedCoverage(root) {
  const leavesPath = path.join(
    root,
    "classifications/systems/cpc/3.0/normalized/leaves.json",
  );
  mkdirSync(path.dirname(leavesPath), { recursive: true });
  writeFileSync(
    leavesPath,
    `${JSON.stringify({
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [
        {
          code: "X-1",
          title: "Known code without mapping",
          path_codes: ["X", "X-1"],
          path_titles: ["Fixture", "Known code without mapping"],
        },
      ],
    }, null, 2)}\n`,
  );
  const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
  mkdirSync(path.dirname(mappingPath), { recursive: true });
  writeFileSync(
    mappingPath,
    `schema_version: 2
classification_system: CPC
classification_version: "3.0"
status: current
mappings:
  []
`,
  );
  const indexDir = path.join(root, "classifications/indexes");
  mkdirSync(indexDir, { recursive: true });
  writeFileSync(
    path.join(indexDir, "cpc-3.0-coverage.json"),
    `${JSON.stringify({
      schema_version: 1,
      index_kind: "classification-pcr-coverage",
      classification_system: "CPC",
      classification_version: "3.0",
      source: {
        contract_version: "2",
        generator: "builder/scripts/build-catalog.mjs",
        generator_version: "2",
        normalized_leaves: {
          path: "classifications/systems/cpc/3.0/normalized/leaves.json",
          hash_mode: "exact_bytes",
          sha256: exactFileSha256(leavesPath),
        },
        mapping: {
          path: "classifications/mappings/cpc-3.0-to-pcr.yaml",
          hash_mode: "exact_bytes",
          sha256: exactFileSha256(mappingPath),
        },
      },
      summary: {
        total: 1,
        mapped: 0,
        unmapped: 0,
        candidate_suggestion: 0,
        manual_review: 0,
        unknown: 1,
      },
      entries: [
        {
          code: "X-1",
          label: "Known code without mapping",
          path_codes: ["X", "X-1"],
          path_titles: ["Fixture", "Known code without mapping"],
          coverage_status: "unknown",
          mapping: null,
          legacy_reference: null,
        },
      ],
    }, null, 2)}\n`,
  );
}

function exactFileSha256(filePath) {
  return `sha256:${createHash("sha256").update(readFileSync(filePath)).digest("hex")}`;
}
