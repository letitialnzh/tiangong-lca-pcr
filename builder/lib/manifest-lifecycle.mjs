import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  realpathSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  CONTENT_MATURITY_VALUES,
  PCR_STATUS_VALUES,
  TRANSLATION_STATUS_VALUES,
  formatOneOf,
} from "./lifecycle-vocab.mjs";
import { inspectPcrDirectory } from "./lint-rules.mjs";
import {
  compareSemver,
  isValidSemver,
  lifecycleTransitionProblems,
  manifestLifecycleProblems,
  manifestReviewBlockers,
} from "./lifecycle-policy.mjs";
import { parsePcrMarkdownToStructured, structuredProjectionYaml } from "./markdown-projection.mjs";
import { moduleReferencesFromManifest } from "./module-checklist.mjs";
import {
  recoverPcrDirectoryTransaction,
  runPcrDirectoryTransaction,
} from "./pcr-directory-transaction.mjs";
import {
  PCR_WORKSPACES,
  repoRelativePcrPath,
  resolvePcrWorkspacePaths,
} from "./pcr-paths.mjs";
import {
  buildReleaseRecord,
  inspectPublishedRevisionState,
  manifestReleaseArtifacts,
} from "./published-revision-state.mjs";
import { PCR_EN_FILE, PCR_ZH_FILE } from "./scaffold-templates.mjs";
import { validateManifest, validateStructured } from "./schema-contracts.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(__dirname, "../..");
const UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });

function rootFromOptions(options) {
  return path.resolve(String(options.root ?? defaultRoot));
}

function toRepoRelative(root, absolutePath) {
  return path.relative(root, absolutePath).replaceAll(path.sep, "/");
}

function isStrictDescendant(parent, candidate) {
  const relative = path.relative(parent, candidate);
  return relative !== "" && relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

// Preserve the established actionable errors, then apply the stricter canonical-leaf resolver.
function pcrDirectoryFromOptions(root, options) {
  const pcr = options.pcr ? String(options.pcr).trim() : null;
  if (!pcr) {
    throw new Error("Missing required --pcr <library/pcrs/...> option.");
  }
  const candidate = path.resolve(root, pcr);
  const pcrRoot = path.resolve(root, "library/pcrs");
  const lexicallyContained = isStrictDescendant(pcrRoot, candidate);
  if (!existsSync(candidate)) {
    if (!lexicallyContained) {
      throw new Error(
        `PCR path must be inside ${toRepoRelative(root, pcrRoot)}/; received ${pcr}.`,
      );
    }
    throw new Error(`PCR directory not found: ${candidate}`);
  }
  if (!statSync(candidate).isDirectory()) {
    throw new Error(`PCR path is not a directory: ${candidate}`);
  }
  const realRoot = realpathSync(root);
  const realPcrRoot = realpathSync(pcrRoot);
  if (!isStrictDescendant(realRoot, realPcrRoot)) {
    throw new Error(
      `PCR root must resolve inside repository root; ${toRepoRelative(root, pcrRoot)} resolves to ${realPcrRoot}.`,
    );
  }
  const realCandidate = realpathSync(candidate);
  if (!isStrictDescendant(realPcrRoot, realCandidate)) {
    if (!lexicallyContained) {
      throw new Error(
        `PCR path must be inside ${toRepoRelative(root, pcrRoot)}/; received ${pcr}.`,
      );
    }
    throw new Error(`PCR directory resolves outside ${toRepoRelative(root, pcrRoot)}/: ${candidate}`);
  }
  return candidate;
}

function workspaceFromOptions(options) {
  const workspace = String(options.workspace ?? "current");
  if (!PCR_WORKSPACES.includes(workspace)) {
    throw new Error(`--workspace must be one of ${formatOneOf(PCR_WORKSPACES)}.`);
  }
  return workspace;
}

function workspacePathsFromOptions(root, options, workspace = workspaceFromOptions(options)) {
  const pcrDir = pcrDirectoryFromOptions(root, options);
  return resolvePcrWorkspacePaths({ root, pcr: pcrDir, workspace });
}

function publicationPreflightError(root, pcrDir, problems) {
  return new Error(
    [
      `PCR publication preflight failed for ${toRepoRelative(root, pcrDir)}.`,
      ...[...new Set(problems)].map((problem) => `- ${problem}`),
      "",
      "Next:",
      "- Resolve every finding, run `npm run validate`, then retry the publish command.",
    ].join("\n"),
  );
}

function operationError(label, root, pcrDir, problems, next = []) {
  return new Error(
    [
      `${label} for ${toRepoRelative(root, pcrDir)}.`,
      ...[...new Set(problems)].map((problem) => `- ${problem}`),
      ...(next.length > 0 ? ["", "Next:", ...next.map((entry) => `- ${entry}`)] : []),
    ].join("\n"),
  );
}

function readRequiredText(filePath, label) {
  if (!existsSync(filePath)) {
    throw new Error(`Missing ${label}: ${filePath}`);
  }
  const stats = lstatSync(filePath);
  if (stats.isSymbolicLink() || !stats.isFile()) {
    throw new Error(`${label} must be a regular file and must not be a symbolic link: ${filePath}`);
  }
  const descriptor = openSync(
    filePath,
    fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0),
  );
  try {
    if (!fstatSync(descriptor).isFile()) {
      throw new Error(`${label} must be a regular file: ${filePath}`);
    }
    const bytes = readFileSync(descriptor);
    try {
      return UTF8_DECODER.decode(bytes);
    } catch {
      throw new Error(`${label} must contain valid UTF-8: ${filePath}`);
    }
  } finally {
    closeSync(descriptor);
  }
}

function requireAllowedOption(options, key, values) {
  const value = options[key];
  if (value === undefined) {
    return null;
  }
  const normalized = String(value);
  if (!values.includes(normalized)) {
    throw new Error(`--${key} must be one of ${formatOneOf(values)}.`);
  }
  return normalized;
}

function parseTranslationOption(value) {
  if (value === undefined) {
    return null;
  }
  const raw = String(value);
  const separatorIndex = raw.indexOf("=");
  if (separatorIndex <= 0 || separatorIndex === raw.length - 1) {
    throw new Error("--translation must use <language>=<status>, for example zh-CN=aligned.");
  }
  const language = raw.slice(0, separatorIndex).trim();
  const status = raw.slice(separatorIndex + 1).trim();
  if (!language) {
    throw new Error("--translation language must not be empty.");
  }
  if (!TRANSLATION_STATUS_VALUES.includes(status)) {
    throw new Error(`--translation status must be one of ${formatOneOf(TRANSLATION_STATUS_VALUES)}.`);
  }
  return { language, status };
}

function translationTargetProblems(manifest, translation) {
  if (!translation) {
    return [];
  }
  const canonical = manifest.languages?.canonical;
  const available = Array.isArray(manifest.languages?.available)
    ? manifest.languages.available
    : [];
  const problems = [];
  if (translation.language === canonical) {
    problems.push(
      `--translation cannot target canonical language ${translation.language}; update canonical Markdown instead`,
    );
  }
  if (!available.includes(translation.language)) {
    problems.push(
      `--translation language ${translation.language} is not declared in manifest.languages.available`,
    );
  }
  return problems;
}

function incrementVersion(current, level) {
  if (current !== null && current !== undefined && !isValidSemver(current)) {
    throw new Error(
      `Cannot bump invalid manifest version "${current}"; use a valid semver version before retrying.`,
    );
  }
  const match = String(current ?? "0.0.0").match(/^(\d+)\.(\d+)\.(\d+)/u);
  const [majorValue, minorValue, patchValue] = match.slice(1).map(BigInt);
  let [major, minor, patch] = [majorValue, minorValue, patchValue];
  if (level === "major") {
    major += 1n;
    minor = 0n;
    patch = 0n;
  } else if (level === "minor") {
    minor += 1n;
    patch = 0n;
  } else {
    patch += 1n;
  }
  return `${major}.${minor}.${patch}`;
}

function updateMarkdownFrontmatter(markdown, updates) {
  const lines = String(markdown).replace(/^\uFEFF/u, "").split(/\r?\n/u);
  if (lines[0]?.trim() !== "---") {
    throw new Error("PCR Markdown must start with YAML frontmatter.");
  }
  const closingIndex = lines.findIndex((line, index) => index > 0 && line.trim() === "---");
  if (closingIndex < 0) {
    throw new Error("PCR Markdown has unclosed YAML frontmatter.");
  }
  const frontmatter = parseYaml(lines.slice(1, closingIndex).join("\n"));
  for (const [key, value] of Object.entries(updates)) {
    if (value === undefined) {
      delete frontmatter[key];
    } else {
      frontmatter[key] = value;
    }
  }
  return `---\n${renderYaml(frontmatter)}---\n${lines.slice(closingIndex + 1).join("\n")}`;
}

function manifestSchemaProblems(manifest, context) {
  return validateManifest(manifest).errors.map(
    (error) => `${context} schema ${error.instance_path} ${error.message}`,
  );
}

function structuredSchemaProblems(structuredText, context) {
  return validateStructured(parseYaml(structuredText)).errors.map(
    (error) => `${context} schema ${error.instance_path} ${error.message}`,
  );
}

function inspectManagedState(root, pcrDir) {
  return inspectPublishedRevisionState({ root, pcrDir });
}

function completeInspectionProblems(root, pcrDir) {
  const problems = [];
  const primary = inspectPcrDirectory({ root, pcrDir });
  problems.push(...primary.problems);
  const state = inspectManagedState(root, pcrDir);
  problems.push(...state.problems);
  if (state.revision) {
    const revision = inspectPcrDirectory({
      root,
      pcrDir: state.revision.revisionDir,
      manifestFileName: "manifest.next.yaml",
    });
    problems.push(...revision.problems);
  }
  return [...new Set(problems)];
}

function transactionMessages(result, relativePcrPath) {
  if (result.warnings.length === 0) {
    return [];
  }
  return [
    "",
    "Warnings:",
    ...result.warnings.map((warning) => `- ${warning}`),
    "",
    "Next:",
    `- Run \`npm run pcr:recover -- --pcr ${relativePcrPath}\` to finish committed-state cleanup.`,
  ];
}

function publicationPlan({ root, workspaceDir, manifestFileName, version, now }) {
  const manifestPath = path.join(workspaceDir, manifestFileName);
  const currentManifestText = readRequiredText(manifestPath, "PCR manifest");
  const currentManifest = parseYaml(currentManifestText);
  const problems = [];
  if (!isValidSemver(version)) {
    problems.push(
      `--version must be valid semver (for example 1.0.0); received "${version || "(missing)"}"`,
    );
  }
  for (const blocker of manifestReviewBlockers(currentManifest)) {
    problems.push(`unresolved review blocker at ${blocker}`);
  }

  const englishPath = path.join(workspaceDir, PCR_EN_FILE);
  const chinesePath = path.join(workspaceDir, PCR_ZH_FILE);
  let sourceEnglishText = "";
  let sourceChineseText = "";
  try {
    sourceEnglishText = readRequiredText(englishPath, "canonical Markdown file");
    sourceChineseText = readRequiredText(chinesePath, "Chinese Markdown file");
  } catch (error) {
    problems.push(error.message);
  }

  const proposedManifest = {
    ...currentManifest,
    status: "published",
    content_maturity: "published_methodology",
    version,
    published_at_utc: now,
    updated_at_utc: now,
  };
  delete proposedManifest.release_artifacts;
  problems.push(...lifecycleTransitionProblems(currentManifest, proposedManifest, "publish"));
  if (problems.length > 0) {
    return { problems };
  }

  let englishText;
  let chineseText;
  let structuredText;
  try {
    englishText = updateMarkdownFrontmatter(sourceEnglishText, {
      status: "published",
      content_maturity: "published_methodology",
      translation_status: "canonical",
    });
    chineseText = updateMarkdownFrontmatter(sourceChineseText, {
      status: "published",
      content_maturity: "published_methodology",
      translation_status: "reviewed",
    });
    const projection = parsePcrMarkdownToStructured(englishText);
    const moduleSelection = moduleReferencesFromManifest({ root, manifest: proposedManifest });
    proposedManifest.modules = moduleSelection.manifestModules;
    structuredText = structuredProjectionYaml(projection, {
      sourceMarkdown: englishText,
      moduleReferences: moduleSelection.moduleReferences,
    });
  } catch (error) {
    problems.push(error.message);
    return { problems };
  }

  const nextManifest = {
    ...proposedManifest,
    release_artifacts: manifestReleaseArtifacts({ englishText, chineseText, structuredText }),
  };
  problems.push(...manifestSchemaProblems(nextManifest, "published manifest"));
  return {
    problems,
    currentManifest,
    nextManifest,
    nextManifestText: renderYaml(nextManifest),
    englishText,
    chineseText,
    structuredText,
    version,
    now,
  };
}

function assertPublicationPlan(root, pcrDir, plan) {
  if (plan.problems.length > 0) {
    throw publicationPreflightError(root, pcrDir, plan.problems);
  }
}

function writePublishedRelease({ stageDir, sourceWorkspaceDir, plan, predecessorVersion, history }) {
  const releaseRoot = path.join(stageDir, "releases");
  if (!existsSync(releaseRoot)) {
    mkdirSync(releaseRoot);
  }
  const releaseDir = path.join(releaseRoot, plan.version);
  if (existsSync(releaseDir)) {
    throw new Error(`Release directory already exists: ${releaseDir}`);
  }
  mkdirSync(releaseDir);

  const releaseRecord = buildReleaseRecord({
    pcrId: plan.nextManifest.id,
    version: plan.version,
    publishedAtUtc: plan.now,
    predecessorVersion,
    manifestText: plan.nextManifestText,
    englishText: plan.englishText,
    chineseText: plan.chineseText,
    structuredText: plan.structuredText,
  });

  writeFileSync(path.join(releaseDir, "manifest.snapshot.yaml"), plan.nextManifestText);
  writeFileSync(path.join(releaseDir, PCR_EN_FILE), plan.englishText);
  writeFileSync(path.join(releaseDir, PCR_ZH_FILE), plan.chineseText);
  writeFileSync(path.join(releaseDir, "structured.yaml"), plan.structuredText);
  writeFileSync(path.join(releaseDir, "release.yaml"), releaseRecord.releaseText);

  const nextHistory = history
    ? {
        ...history,
        current_version: plan.version,
        releases: [...history.releases, releaseRecord.historyEntry],
      }
    : {
        schema_version: 1,
        pcr_id: plan.nextManifest.id,
        current_version: plan.version,
        releases: [releaseRecord.historyEntry],
      };

  writeFileSync(path.join(stageDir, "manifest.yaml"), plan.nextManifestText);
  writeFileSync(path.join(stageDir, PCR_EN_FILE), plan.englishText);
  writeFileSync(path.join(stageDir, PCR_ZH_FILE), plan.chineseText);
  writeFileSync(path.join(stageDir, "structured.yaml"), plan.structuredText);
  writeFileSync(path.join(stageDir, "release-history.yaml"), renderYaml(nextHistory));

  if (sourceWorkspaceDir !== stageDir) {
    rmSync(sourceWorkspaceDir, { recursive: true, force: false });
  }
}

function revisionWorkspaceAt(rootDir) {
  return path.join(rootDir, "revision");
}

export function syncStructured(options) {
  const root = rootFromOptions(options);
  const workspace = workspaceFromOptions(options);
  const paths = workspacePathsFromOptions(root, options, workspace);
  function assertSyncPreflight() {
    const state = inspectManagedState(root, paths.pcrDir);
    if (state.problems.length > 0) {
      throw operationError("PCR sync preflight failed", root, paths.pcrDir, state.problems);
    }
    const selectedManifest = parseYaml(readRequiredText(paths.manifestPath, "PCR manifest"));
    if (workspace === "current" && ["published", "deprecated"].includes(selectedManifest.status)) {
      throw operationError(
        "PCR sync rejected",
        root,
        paths.pcrDir,
        [`current ${selectedManifest.status} PCR content is immutable`],
        ["Open a new revision with `npm run pcr:revise -- --pcr <path> --version <semver>`."],
      );
    }
  }
  assertSyncPreflight();

  let syncedMarkdownPath;
  const result = runPcrDirectoryTransaction({
    root,
    pcr: paths.pcrDir,
    command: `sync-structured:${workspace}`,
    preflight: assertSyncPreflight,
    prepareStage({ stageDir }) {
      const workspaceDir = workspace === "current" ? stageDir : revisionWorkspaceAt(stageDir);
      const manifestName = workspace === "current" ? "manifest.yaml" : "manifest.next.yaml";
      const manifest = parseYaml(
        readRequiredText(path.join(workspaceDir, manifestName), "PCR manifest"),
      );
      if (workspace === "current" && ["published", "deprecated"].includes(manifest.status)) {
        throw new Error(`Cannot sync immutable current ${manifest.status} PCR content.`);
      }
      const markdownPath = path.join(workspaceDir, PCR_EN_FILE);
      const markdown = readRequiredText(markdownPath, "canonical Markdown file");
      const projection = parsePcrMarkdownToStructured(markdown);
      const moduleSelection = moduleReferencesFromManifest({ root, manifest });
      manifest.modules = moduleSelection.manifestModules;
      writeFileSync(path.join(workspaceDir, manifestName), renderYaml(manifest));
      const structuredText = structuredProjectionYaml(projection, {
        sourceMarkdown: markdown,
        moduleReferences: moduleSelection.moduleReferences,
      });
      const schemaProblems = structuredSchemaProblems(structuredText, "generated structured projection");
      if (schemaProblems.length > 0) {
        throw operationError(
          "PCR sync generated projection validation failed",
          root,
          paths.pcrDir,
          schemaProblems,
        );
      }
      writeFileSync(path.join(workspaceDir, "structured.yaml"), structuredText);
      syncedMarkdownPath = workspace === "current"
        ? path.join(paths.pcrDir, PCR_EN_FILE)
        : path.join(paths.pcrDir, "revision", PCR_EN_FILE);
    },
    validateStage({ stageDir }) {
      const managed = inspectManagedState(root, stageDir);
      if (managed.problems.length > 0) {
        throw operationError("PCR sync staged-state validation failed", root, paths.pcrDir, managed.problems);
      }
      const workspaceDir = workspace === "current" ? stageDir : revisionWorkspaceAt(stageDir);
      const inspection = inspectPcrDirectory({
        root,
        pcrDir: workspaceDir,
        manifestFileName: workspace === "current" ? "manifest.yaml" : "manifest.next.yaml",
      });
      if (!inspection.managedInputsSafe) {
        throw operationError(
          "PCR sync staged managed-input validation failed",
          root,
          paths.pcrDir,
          inspection.problems,
        );
      }
      const staleOnlyProblems = inspection.problems.filter((problem) => /stale structured projection/u.test(problem));
      if (staleOnlyProblems.length > 0) {
        throw operationError("PCR sync staged projection validation failed", root, paths.pcrDir, staleOnlyProblems);
      }
    },
  });

  return [
    `Synced structured PCR from ${toRepoRelative(root, syncedMarkdownPath)}.`,
    ...transactionMessages(result, repoRelativePcrPath(paths)),
  ];
}

export function bump(options) {
  const level = String(options.level ?? "patch");
  if (!["major", "minor", "patch"].includes(level)) {
    throw new Error("--level must be one of major, minor, or patch.");
  }
  if (options.workspace !== undefined && String(options.workspace) !== "current") {
    throw new Error("pcr:bump operates only on unpublished current workspaces; revision target versions are locked.");
  }
  const root = rootFromOptions(options);
  const paths = workspacePathsFromOptions(root, options, "current");
  const state = inspectManagedState(root, paths.pcrDir);
  if (state.problems.length > 0) {
    throw operationError("PCR bump managed-state preflight failed", root, paths.pcrDir, state.problems);
  }
  const current = parseYaml(readRequiredText(paths.manifestPath, "PCR manifest"));
  if (
    ["published", "deprecated"].includes(current.status) ||
    ["published_methodology", "deprecated_methodology"].includes(current.content_maturity)
  ) {
    throw new Error(
      [
        `Cannot bump ${current.status}/${current.content_maturity} PCR in place at ${toRepoRelative(root, paths.manifestPath)}.`,
        "",
        "Next:",
        "- Open a published PCR revision with `npm run pcr:revise -- --pcr <path> --version <semver>`.",
        "- The revision target version is fixed when the workspace opens.",
      ].join("\n"),
    );
  }
  if (state.revision || existsSync(path.join(paths.pcrDir, "revision"))) {
    throw new Error("Cannot bump current PCR while a revision workspace is open.");
  }

  let nextVersion;
  const result = runPcrDirectoryTransaction({
    root,
    pcr: paths.pcrDir,
    command: `bump:${level}`,
    preflight() {
      const lockedState = inspectManagedState(root, paths.pcrDir);
      if (lockedState.problems.length > 0) {
        throw operationError(
          "PCR bump managed-state preflight failed",
          root,
          paths.pcrDir,
          lockedState.problems,
        );
      }
      const locked = parseYaml(readRequiredText(paths.manifestPath, "PCR manifest"));
      if (
        ["published", "deprecated"].includes(locked.status) ||
        ["published_methodology", "deprecated_methodology"].includes(locked.content_maturity)
      ) {
        throw new Error(`Cannot bump ${locked.status}/${locked.content_maturity} PCR in place.`);
      }
      if (lockedState.revision || existsSync(path.join(paths.pcrDir, "revision"))) {
        throw new Error("Cannot bump current PCR while a revision workspace is open.");
      }
      incrementVersion(locked.version, level);
    },
    prepareStage({ stageDir }) {
      const manifestPath = path.join(stageDir, "manifest.yaml");
      const manifest = parseYaml(readRequiredText(manifestPath, "PCR manifest"));
      if (["published", "deprecated"].includes(manifest.status)) {
        throw new Error(`Cannot bump ${manifest.status} PCR in place.`);
      }
      nextVersion = incrementVersion(manifest.version, level);
      manifest.version = nextVersion;
      manifest.updated_at_utc = new Date().toISOString();
      writeFileSync(manifestPath, renderYaml(manifest));
    },
    validateStage({ stageDir }) {
      const manifest = parseYaml(
        readRequiredText(path.join(stageDir, "manifest.yaml"), "PCR manifest"),
      );
      const managed = inspectManagedState(root, stageDir);
      const problems = [
        ...manifestSchemaProblems(manifest, "PCR manifest"),
        ...manifestLifecycleProblems(manifest),
        ...managed.problems,
      ];
      if (problems.length > 0) {
        throw operationError("PCR bump staged-state validation failed", root, paths.pcrDir, problems);
      }
    },
  });
  return [
    `Updated PCR manifest version at ${toRepoRelative(root, paths.manifestPath)} (new version: ${nextVersion}).`,
    ...transactionMessages(result, repoRelativePcrPath(paths)),
  ];
}

export function lifecycle(options) {
  const status = requireAllowedOption(options, "status", PCR_STATUS_VALUES);
  const contentMaturity = requireAllowedOption(options, "content-maturity", CONTENT_MATURITY_VALUES);
  const translation = parseTranslationOption(options.translation);
  if (!status && !contentMaturity && !translation) {
    throw new Error("Provide at least one lifecycle change: --status, --content-maturity, or --translation.");
  }

  const root = rootFromOptions(options);
  const workspace = workspaceFromOptions(options);
  const paths = workspacePathsFromOptions(root, options, workspace);
  const state = inspectManagedState(root, paths.pcrDir);
  if (state.problems.length > 0) {
    throw operationError("PCR lifecycle state preflight failed", root, paths.pcrDir, state.problems);
  }
  if (workspace === "current" && state.revision) {
    throw new Error("Cannot change current lifecycle while a revision workspace is open.");
  }

  const currentManifest = parseYaml(readRequiredText(paths.manifestPath, "PCR manifest"));
  const translationProblems = translationTargetProblems(currentManifest, translation);
  if (translationProblems.length > 0) {
    throw operationError("PCR lifecycle translation target rejected", root, paths.pcrDir, translationProblems);
  }
  if (workspace === "current" && currentManifest.status === "published") {
    const exactDeprecation = status === "deprecated" && contentMaturity === "deprecated_methodology" && !translation;
    if (!exactDeprecation) {
      throw new Error(
        "Published current state is immutable; lifecycle may only apply status=deprecated and content_maturity=deprecated_methodology together.",
      );
    }
  }
  if (workspace === "current" && currentManifest.status === "deprecated") {
    throw new Error("Deprecated current state is immutable.");
  }
  if (workspace === "revision" && status && !["candidate", "active"].includes(status)) {
    throw new Error("Revision lifecycle status must remain candidate or active until pcr:publish promotes it.");
  }

  const changed = [];
  let now;
  const result = runPcrDirectoryTransaction({
    root,
    pcr: paths.pcrDir,
    command: `lifecycle:${workspace}`,
    preflight() {
      const lockedState = inspectManagedState(root, paths.pcrDir);
      if (lockedState.problems.length > 0) {
        throw operationError("PCR lifecycle state preflight failed", root, paths.pcrDir, lockedState.problems);
      }
      if (workspace === "current" && lockedState.revision) {
        throw new Error("Cannot change current lifecycle while a revision workspace is open.");
      }
      const locked = parseYaml(readRequiredText(paths.manifestPath, "PCR manifest"));
      if (workspace === "current" && locked.status === "published") {
        const exactDeprecation = status === "deprecated" && contentMaturity === "deprecated_methodology" && !translation;
        if (!exactDeprecation) {
          throw new Error(
            "Published current state is immutable; lifecycle may only apply status=deprecated and content_maturity=deprecated_methodology together.",
          );
        }
      }
      if (workspace === "current" && locked.status === "deprecated") {
        throw new Error("Deprecated current state is immutable.");
      }
      if (workspace === "revision" && status && !["candidate", "active"].includes(status)) {
        throw new Error("Revision lifecycle status must remain candidate or active until pcr:publish promotes it.");
      }
      const lockedTranslationProblems = translationTargetProblems(locked, translation);
      if (lockedTranslationProblems.length > 0) {
        throw operationError(
          "PCR lifecycle translation target rejected",
          root,
          paths.pcrDir,
          lockedTranslationProblems,
        );
      }
      const proposed = structuredClone(locked);
      if (status) proposed.status = status;
      if (contentMaturity) proposed.content_maturity = contentMaturity;
      if (translation) {
        proposed.translation_status = proposed.translation_status && typeof proposed.translation_status === "object"
          ? proposed.translation_status
          : {};
        proposed.translation_status[translation.language] = translation.status;
      }
      const problems = lifecycleTransitionProblems(locked, proposed);
      if (problems.length > 0) {
        throw operationError("PCR lifecycle update rejected", root, paths.pcrDir, problems);
      }
    },
    prepareStage({ stageDir }) {
      const workspaceDir = workspace === "current" ? stageDir : revisionWorkspaceAt(stageDir);
      const manifestName = workspace === "current" ? "manifest.yaml" : "manifest.next.yaml";
      const manifestPath = path.join(workspaceDir, manifestName);
      const current = parseYaml(readRequiredText(manifestPath, "PCR manifest"));
      const stagedTranslationProblems = translationTargetProblems(current, translation);
      if (stagedTranslationProblems.length > 0) {
        throw operationError(
          "PCR lifecycle translation target rejected",
          root,
          paths.pcrDir,
          stagedTranslationProblems,
        );
      }
      const next = structuredClone(current);
      changed.length = 0;
      if (status) {
        next.status = status;
        changed.push(`status: ${status}`);
      }
      if (contentMaturity) {
        next.content_maturity = contentMaturity;
        changed.push(`content_maturity: ${contentMaturity}`);
      }
      if (translation) {
        next.translation_status = next.translation_status && typeof next.translation_status === "object"
          ? next.translation_status
          : {};
        next.translation_status[translation.language] = translation.status;
        changed.push(`translation_status.${translation.language}: ${translation.status}`);
      }
      now = new Date().toISOString();
      next.updated_at_utc = now;
      const problems = lifecycleTransitionProblems(current, next);
      if (problems.length > 0) {
        throw operationError("PCR lifecycle update rejected", root, paths.pcrDir, problems);
      }
      writeFileSync(manifestPath, renderYaml(next));
    },
    validateStage({ stageDir }) {
      const workspaceDir = workspace === "current" ? stageDir : revisionWorkspaceAt(stageDir);
      const manifestName = workspace === "current" ? "manifest.yaml" : "manifest.next.yaml";
      const manifestPath = path.join(workspaceDir, manifestName);
      const manifest = parseYaml(readRequiredText(manifestPath, "PCR manifest"));
      const schemaProblems = manifestSchemaProblems(manifest, "PCR manifest");
      if (schemaProblems.length > 0) {
        throw operationError("PCR lifecycle staged-state validation failed", root, paths.pcrDir, schemaProblems);
      }
      if (manifest.status === "active") {
        const inspection = inspectPcrDirectory({
          root,
          pcrDir: workspaceDir,
          manifestFileName: manifestName,
        });
        if (inspection.problems.length > 0) {
          throw operationError(
            "PCR lifecycle review preflight failed",
            root,
            paths.pcrDir,
            inspection.problems,
            ["Resolve every finding and sync structured.yaml before marking the PCR active."],
          );
        }
      }
      const managed = inspectManagedState(root, stageDir);
      if (managed.problems.length > 0) {
        throw operationError("PCR lifecycle managed-state validation failed", root, paths.pcrDir, managed.problems);
      }
    },
  });

  const manifestPath = workspace === "current"
    ? paths.currentManifestPath
    : path.join(paths.pcrDir, "revision", "manifest.next.yaml");
  const publishCommand = workspace === "revision"
    ? `npm run pcr:publish -- --pcr ${repoRelativePcrPath(paths)} --workspace revision`
    : `npm run pcr:publish -- --pcr ${repoRelativePcrPath(paths)} --version <semver>`;
  return [
    `Updated PCR lifecycle at ${toRepoRelative(root, manifestPath)}.`,
    "",
    "Summary:",
    ...changed.map((entry) => `- ${entry}`),
    `- updated_at_utc: ${now}`,
    "",
    "Next:",
    "- Run `npm run validate` before committing lifecycle changes.",
    `- If publication-ready, run \`${publishCommand}\`.`,
    ...transactionMessages(result, repoRelativePcrPath(paths)),
  ];
}

export function revise(options) {
  const root = rootFromOptions(options);
  const paths = workspacePathsFromOptions(root, options, "current");
  const targetVersion = String(options.version ?? "");
  const now = new Date().toISOString();
  const state = inspectManagedState(root, paths.pcrDir);
  const problems = [...state.problems];
  const currentManifest = parseYaml(readRequiredText(paths.manifestPath, "PCR manifest"));
  if (currentManifest.status !== "published") {
    problems.push(`pcr:revise requires current status published; found ${currentManifest.status}`);
  }
  if (!state.history) {
    problems.push("pcr:revise requires managed release-history.yaml; legacy publication must be adopted explicitly");
  }
  if (state.revision || existsSync(path.join(paths.pcrDir, "revision"))) {
    problems.push("a revision workspace is already open");
  }
  if (!isValidSemver(targetVersion)) {
    problems.push(`--version must be valid semver; received "${targetVersion || "(missing)"}"`);
  } else if (isValidSemver(currentManifest.version) && compareSemver(targetVersion, currentManifest.version) <= 0) {
    problems.push(`target version ${targetVersion} must be greater than current ${currentManifest.version}`);
  }
  if (state.history?.releases?.some((entry) => entry.version === targetVersion)) {
    problems.push(`target version ${targetVersion} already exists in release history`);
  }
  if (existsSync(path.join(paths.pcrDir, "releases", targetVersion))) {
    problems.push(`target release directory already exists for ${targetVersion}`);
  }
  if (problems.length > 0) {
    throw operationError("PCR revision preflight failed", root, paths.pcrDir, problems);
  }

  const result = runPcrDirectoryTransaction({
    root,
    pcr: paths.pcrDir,
    command: `revise:${targetVersion}`,
    preflight() {
      const lockedState = inspectManagedState(root, paths.pcrDir);
      const lockedProblems = [...lockedState.problems];
      const lockedManifest = parseYaml(readRequiredText(paths.manifestPath, "PCR manifest"));
      if (lockedManifest.status !== "published") {
        lockedProblems.push(`pcr:revise requires current status published; found ${lockedManifest.status}`);
      }
      if (!lockedState.history) {
        lockedProblems.push("pcr:revise requires managed release-history.yaml; legacy publication must be adopted explicitly");
      }
      if (lockedState.revision || existsSync(path.join(paths.pcrDir, "revision"))) {
        lockedProblems.push("a revision workspace is already open");
      }
      if (!isValidSemver(targetVersion)) {
        lockedProblems.push(`--version must be valid semver; received "${targetVersion || "(missing)"}"`);
      } else if (isValidSemver(lockedManifest.version) && compareSemver(targetVersion, lockedManifest.version) <= 0) {
        lockedProblems.push(`target version ${targetVersion} must be greater than current ${lockedManifest.version}`);
      }
      if (lockedState.history?.releases?.some((entry) => entry.version === targetVersion)) {
        lockedProblems.push(`target version ${targetVersion} already exists in release history`);
      }
      if (existsSync(path.join(paths.pcrDir, "releases", targetVersion))) {
        lockedProblems.push(`target release directory already exists for ${targetVersion}`);
      }
      if (lockedProblems.length > 0) {
        throw operationError("PCR revision preflight failed", root, paths.pcrDir, lockedProblems);
      }
    },
    prepareStage({ stageDir }) {
      const stageState = inspectManagedState(root, stageDir);
      if (stageState.problems.length > 0 || stageState.revision) {
        throw operationError(
          "PCR revision staged-source validation failed",
          root,
          paths.pcrDir,
          [...stageState.problems, ...(stageState.revision ? ["a revision workspace is already open"] : [])],
        );
      }
      const manifest = parseYaml(
        readRequiredText(path.join(stageDir, "manifest.yaml"), "PCR manifest"),
      );
      if (manifest.status !== "published" || manifest.version !== currentManifest.version) {
        throw new Error("Published current state changed before the revision transaction acquired its lock.");
      }
      const revisionDir = path.join(stageDir, "revision");
      mkdirSync(revisionDir);
      const nextManifest = structuredClone(manifest);
      nextManifest.version = targetVersion;
      nextManifest.status = "candidate";
      nextManifest.content_maturity = "authored_methodology";
      nextManifest.translation_status = {
        ...(nextManifest.translation_status ?? {}),
        "zh-CN": "out_of_sync",
      };
      nextManifest.updated_at_utc = now;
      delete nextManifest.published_at_utc;
      delete nextManifest.release_artifacts;

      const englishText = updateMarkdownFrontmatter(
        readRequiredText(path.join(stageDir, PCR_EN_FILE), "canonical Markdown file"),
        {
          status: "candidate",
          content_maturity: "authored_methodology",
          translation_status: "canonical",
        },
      );
      const chineseText = updateMarkdownFrontmatter(
        readRequiredText(path.join(stageDir, PCR_ZH_FILE), "translated Markdown file"),
        {
          status: "candidate",
          content_maturity: "authored_methodology",
          translation_status: "out_of_sync",
        },
      );
      const projection = parsePcrMarkdownToStructured(englishText);
      const moduleSelection = moduleReferencesFromManifest({ root, manifest: nextManifest });
      nextManifest.modules = moduleSelection.manifestModules;
      writeFileSync(path.join(revisionDir, "manifest.next.yaml"), renderYaml(nextManifest));
      writeFileSync(path.join(revisionDir, PCR_EN_FILE), englishText);
      writeFileSync(path.join(revisionDir, PCR_ZH_FILE), chineseText);
      writeFileSync(
        path.join(revisionDir, "structured.yaml"),
        structuredProjectionYaml(projection, {
          sourceMarkdown: englishText,
          moduleReferences: moduleSelection.moduleReferences,
        }),
      );
      writeFileSync(
        path.join(revisionDir, "revision.yaml"),
        renderYaml({
          schema_version: 1,
          pcr_id: manifest.id,
          base_version: manifest.version,
          target_version: targetVersion,
          opened_at_utc: now,
        }),
      );
    },
    validateStage({ stageDir }) {
      const stagedProblems = completeInspectionProblems(root, stageDir);
      if (stagedProblems.length > 0) {
        throw operationError("PCR revision staged-state validation failed", root, paths.pcrDir, stagedProblems);
      }
    },
    postValidate({ pcrDir }) {
      const installedProblems = completeInspectionProblems(root, pcrDir);
      if (installedProblems.length > 0) {
        throw operationError("PCR revision installed-state validation failed", root, paths.pcrDir, installedProblems);
      }
    },
  });

  return [
    `Opened PCR revision ${currentManifest.version} -> ${targetVersion} at ${toRepoRelative(root, path.join(paths.pcrDir, "revision"))}.`,
    "",
    "Next:",
    `- Edit revision files, then run \`npm run pcr:sync-structured -- --pcr ${repoRelativePcrPath(paths)} --workspace revision\`.`,
    `- Review with \`npm run pcr:lifecycle -- --pcr ${repoRelativePcrPath(paths)} --workspace revision --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed\`.`,
    ...transactionMessages(result, repoRelativePcrPath(paths)),
  ];
}

export function publish(options) {
  const root = rootFromOptions(options);
  const workspace = workspaceFromOptions(options);
  const paths = workspacePathsFromOptions(root, options, workspace);
  const now = new Date().toISOString();
  const state = inspectManagedState(root, paths.pcrDir);
  if (state.problems.length > 0) {
    throw publicationPreflightError(root, paths.pcrDir, state.problems);
  }

  let version;
  let history = null;
  let predecessorVersion = null;
  const sourceWorkspace = paths.workspaceDir;
  if (workspace === "current") {
    if (options.version === undefined) {
      throw publicationPreflightError(root, paths.pcrDir, [
        "first publication requires an explicit --version <semver>; manifest.version is not used implicitly",
      ]);
    }
    if (state.history || state.revision || existsSync(path.join(paths.pcrDir, "releases"))) {
      throw publicationPreflightError(root, paths.pcrDir, [
        "current publication is only for the first managed release; use --workspace revision for later versions",
      ]);
    }
    version = String(options.version ?? "");
  } else {
    if (options.version !== undefined) {
      throw publicationPreflightError(root, paths.pcrDir, [
        "revision publication uses the target version locked in revision.yaml; omit --version",
      ]);
    }
    if (!state.history || !state.revision) {
      throw publicationPreflightError(root, paths.pcrDir, ["no managed revision workspace is open"]);
    }
    version = String(state.revision.revision.target_version);
    predecessorVersion = String(state.history.current_version);
    history = state.history;
  }

  const initialPlan = publicationPlan({
    root,
    workspaceDir: sourceWorkspace,
    manifestFileName: workspace === "current" ? "manifest.yaml" : "manifest.next.yaml",
    version,
    now,
  });
  assertPublicationPlan(root, paths.pcrDir, initialPlan);
  const sourceMarkdown = readRequiredText(
    path.join(sourceWorkspace, PCR_EN_FILE),
    "canonical Markdown file",
  );
  const sourceManifest = parseYaml(
    readRequiredText(
      path.join(sourceWorkspace, workspace === "current" ? "manifest.yaml" : "manifest.next.yaml"),
      "PCR manifest",
    ),
  );
  const sourceModuleSelection = moduleReferencesFromManifest({ root, manifest: sourceManifest });
  const sourceInspection = inspectPcrDirectory({
    root,
    pcrDir: sourceWorkspace,
    manifestFileName: workspace === "current" ? "manifest.yaml" : "manifest.next.yaml",
    structuredText: structuredProjectionYaml(
      parsePcrMarkdownToStructured(sourceMarkdown),
      { sourceMarkdown, moduleReferences: sourceModuleSelection.moduleReferences },
    ),
    checkBilingualRuleAlignment: true,
  });
  if (sourceInspection.problems.length > 0) {
    throw publicationPreflightError(root, paths.pcrDir, sourceInspection.problems);
  }

  let publishedPlan;
  const result = runPcrDirectoryTransaction({
    root,
    pcr: paths.pcrDir,
    command: `publish:${workspace}:${version}`,
    preflight() {
      const lockedState = inspectManagedState(root, paths.pcrDir);
      if (lockedState.problems.length > 0) {
        throw publicationPreflightError(root, paths.pcrDir, lockedState.problems);
      }
      if (
        workspace === "current" &&
        (lockedState.history || lockedState.revision || existsSync(path.join(paths.pcrDir, "releases")))
      ) {
        throw publicationPreflightError(root, paths.pcrDir, [
          "current publication is only for the first managed release; use --workspace revision for later versions",
        ]);
      }
      if (workspace === "revision") {
        if (!lockedState.history || !lockedState.revision) {
          throw publicationPreflightError(root, paths.pcrDir, ["no managed revision workspace is open"]);
        }
        if (
          lockedState.history.current_version !== predecessorVersion ||
          lockedState.revision.revision.target_version !== version
        ) {
          throw publicationPreflightError(root, paths.pcrDir, [
            "revision lineage changed before publication acquired its lock",
          ]);
        }
      }
      const lockedWorkspace = workspace === "current"
        ? paths.pcrDir
        : revisionWorkspaceAt(paths.pcrDir);
      const lockedPlan = publicationPlan({
        root,
        workspaceDir: lockedWorkspace,
        manifestFileName: workspace === "current" ? "manifest.yaml" : "manifest.next.yaml",
        version,
        now,
      });
      assertPublicationPlan(root, paths.pcrDir, lockedPlan);
      const lockedMarkdown = readRequiredText(
        path.join(lockedWorkspace, PCR_EN_FILE),
        "canonical Markdown file",
      );
      const lockedManifest = parseYaml(
        readRequiredText(
          path.join(lockedWorkspace, workspace === "current" ? "manifest.yaml" : "manifest.next.yaml"),
          "PCR manifest",
        ),
      );
      const lockedModuleSelection = moduleReferencesFromManifest({ root, manifest: lockedManifest });
      const lockedInspection = inspectPcrDirectory({
        root,
        pcrDir: lockedWorkspace,
        manifestFileName: workspace === "current" ? "manifest.yaml" : "manifest.next.yaml",
        structuredText: structuredProjectionYaml(
          parsePcrMarkdownToStructured(lockedMarkdown),
          { sourceMarkdown: lockedMarkdown, moduleReferences: lockedModuleSelection.moduleReferences },
        ),
        checkBilingualRuleAlignment: true,
      });
      if (lockedInspection.problems.length > 0) {
        throw publicationPreflightError(root, paths.pcrDir, lockedInspection.problems);
      }
    },
    prepareStage({ stageDir }) {
      const stageState = inspectManagedState(root, stageDir);
      if (stageState.problems.length > 0) {
        throw publicationPreflightError(root, paths.pcrDir, stageState.problems);
      }
      const stageWorkspace = workspace === "current" ? stageDir : revisionWorkspaceAt(stageDir);
      if (workspace === "current" && (stageState.history || stageState.revision)) {
        throw publicationPreflightError(root, paths.pcrDir, ["managed release state appeared before first publication"]);
      }
      if (workspace === "revision") {
        if (!stageState.history || !stageState.revision) {
          throw publicationPreflightError(root, paths.pcrDir, ["revision state disappeared before publication"]);
        }
        if (
          stageState.history.current_version !== predecessorVersion ||
          stageState.revision.revision.target_version !== version
        ) {
          throw publicationPreflightError(root, paths.pcrDir, ["revision lineage changed before publication"]);
        }
        history = stageState.history;
      }
      publishedPlan = publicationPlan({
        root,
        workspaceDir: stageWorkspace,
        manifestFileName: workspace === "current" ? "manifest.yaml" : "manifest.next.yaml",
        version,
        now,
      });
      assertPublicationPlan(root, paths.pcrDir, publishedPlan);
      writePublishedRelease({
        stageDir,
        sourceWorkspaceDir: stageWorkspace,
        plan: publishedPlan,
        predecessorVersion,
        history,
      });
    },
    validateStage({ stageDir }) {
      const problems = completeInspectionProblems(root, stageDir);
      if (problems.length > 0) {
        throw publicationPreflightError(root, paths.pcrDir, problems);
      }
    },
    postValidate({ pcrDir }) {
      const problems = completeInspectionProblems(root, pcrDir);
      if (problems.length > 0) {
        throw publicationPreflightError(root, paths.pcrDir, problems);
      }
    },
  });

  return [
    `Published PCR manifest at ${toRepoRelative(root, path.join(paths.pcrDir, "manifest.yaml"))} (version ${version}).`,
    `Archived immutable release at ${toRepoRelative(root, path.join(paths.pcrDir, "releases", version))}.`,
    ...transactionMessages(result, repoRelativePcrPath(paths)),
  ];
}

export function recover(options) {
  const root = rootFromOptions(options);
  const pcr = options.pcr ? String(options.pcr).trim() : "";
  if (!pcr) {
    throw new Error("Missing required --pcr <library/pcrs/...> option.");
  }
  const result = recoverPcrDirectoryTransaction({
    root,
    pcr,
    command: "pcr:recover",
    force: options["force-stale-lock"] === true,
    validateRecovered({ pcrDir }) {
      const problems = completeInspectionProblems(root, pcrDir);
      if (problems.length > 0) {
        throw operationError(
          "PCR recovered-tree validation failed",
          root,
          pcrDir,
          problems,
          ["Recovery state was preserved; resolve the validation findings before retrying pcr:recover."],
        );
      }
    },
  });
  return [
    `PCR transaction recovery result: ${result.action}.`,
    ...(result.phase ? [`Recovered recorded phase: ${result.phase}.`] : []),
    ...(result.forced ? ["Recovery used explicit stale-state force."] : []),
    "",
    "Next:",
    "- Run `npm run validate` before continuing PCR mutation work.",
  ];
}
