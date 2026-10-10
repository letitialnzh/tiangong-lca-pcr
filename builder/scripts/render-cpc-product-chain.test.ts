import {isUnknownRecord,unknownField,errorCode,type UnknownRecord} from "../../packages/pcr-core/src/types.ts";
import assert from "node:assert/strict";
import { createHash, type Hash } from "node:crypto";
import {
  chmodSync,
  cpSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readlinkSync,
  readdirSync,
  rmSync,
  symlinkSync,
  statSync,
  writeFileSync,
} from "node:fs";
import http from "node:http";
import https from "node:https";
import net from "node:net";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { renderYaml } from "../../packages/pcr-core/src/yaml-lite.ts";
import {
  DEFAULT_REPORT_PATH,
  DEFAULT_SOURCE_PATH,
  __test,
  buildOrCheckCpcProductChain,
  createCpcProductChainResolvers,
  resolveCpcProductChainLocator,
} from "./render-cpc-product-chain.ts";

const repoRoot = path.resolve(".");
const wheatSeedPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const abalonePcrId =
  "pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-abalone-live-fresh-or-chilled";
const wheatSeedPath =
  "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed";
const abalonePath =
  "library/pcrs/agriculture-forestry-and-fishery-products/fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products/farmed-abalone-live-fresh-or-chilled";
const temporaryReportPath = "builder/planning/.cpc-product-chain-pilot.md.tmp";
const reportLockPath = "builder/planning/.cpc-product-chain-pilot.md.lock";

function planningDocument(locator: UnknownRecord = {
  kind: "field",
  field_path: "boundary_abstraction.upstream_dataset_requirement",
}) {
  return {
    schema_version: 1,
    artifact_kind: "cpc_product_chain_pilot",
    status: "draft",
    classification_system: "CPC",
    classification_version: "3.0",
    official_sources: [] as UnknownRecord[],
    chains: [{
      id: "wheat-seed-chain",
      title: "Wheat product chain",
      description: "A self-contained adapter fixture using real CPC and PCR records.",
      nodes: [
        {
          id: "source-seed-lot",
          code: "01111",
          label: "Wheat, seed",
          stage: "source seed production",
          role: "upstream source seed lot",
        },
        {
          id: "wheat-seed",
          code: "01111",
          label: "Wheat, seed",
          stage: "seed production",
          role: "downstream product",
        },
      ],
      edges: [{
        id: "grain-to-seed",
        from: "source-seed-lot",
        to: "wheat-seed",
        relationship_type: "primary_feedstock",
        evidence_status: "supported_by_pcr",
        boundary_assessment: "aligned",
        interface: {
          upstream_output_condition: "source wheat seed lot",
          downstream_starting_condition: "source seed lot",
          fit_summary: "Fixture interface for exercising the verified adapter.",
        },
        route_conditions: ["Fixture route only."],
        evidence: [{
          kind: "pcr_projection",
          pcr_id: wheatSeedPcrId,
          supports: "Verified downstream PCR evidence.",
          locator,
        }],
        review_notes: [],
      }],
    }],
  };
}

function createRealRepositoryFixture(prefix = "tiangong-cpc-chain-adapter-") {
  const root = mkdtempSync(path.join(tmpdir(), prefix));
  const files = [
    "classifications/systems/cpc/3.0/normalized/hierarchy.json",
    "classifications/systems/cpc/3.0/normalized/leaves.json",
    "classifications/systems/cpc/3.0/normalized/paths.json",
    "classifications/systems/cpc/3.0/normalized/leaf-slugs.json",
    "classifications/indexes/cpc-3.0-coverage.json",
    "classifications/mappings/cpc-3.0-to-pcr.yaml",
    "classifications/aliases/pcr-id-aliases.yaml",
    "library/catalog.yaml",
    "docs/adr/0003-retire-cpc-leaf-derived-pcr-identities.md",
  ];
  for (const relativePath of files) {
    const target = path.join(root, relativePath);
    mkdirSync(path.dirname(target), { recursive: true });
    cpSync(path.join(repoRoot, relativePath), target);
  }
  for (const relativePath of [wheatSeedPath, abalonePath]) {
    const target = path.join(root, relativePath);
    mkdirSync(path.dirname(target), { recursive: true });
    cpSync(path.join(repoRoot, relativePath), target, { recursive: true });
  }
  mkdirSync(path.join(root, "builder/planning"), { recursive: true });
  writePlanning(root);
  return root;
}

function writePlanning(root: string, document = planningDocument()) {
  writeFileSync(path.join(root, DEFAULT_SOURCE_PATH), renderYaml(document));
}

function protectedDigest(root: string) {
  const hash = createHash("sha256");
  for (const relativeRoot of ["classifications", "library/pcrs"]) {
    hashTree(hash, path.join(root, relativeRoot), relativeRoot);
  }
  return hash.digest("hex");
}

function hashTree(hash: Hash, absoluteRoot: string, relativeRoot: string) {
  for (const entry of readdirSync(absoluteRoot, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name))) {
    const absolutePath = path.join(absoluteRoot, entry.name);
    const relativePath = path.posix.join(relativeRoot, entry.name);
    if (entry.isDirectory()) {
      hash.update(`D\0${relativePath}\0`);
      hashTree(hash, absolutePath, relativePath);
    } else if (entry.isSymbolicLink()) {
      hash.update(`L\0${relativePath}\0${readlinkSync(absolutePath)}\0`);
    } else if (entry.isFile()) {
      hash.update(`F\0${relativePath}\0`);
      hash.update(readFileSync(absolutePath));
      hash.update("\0");
    } else {
      hash.update(`O\0${relativePath}\0`);
    }
  }
}

function assertNoTemporaryReport(root: string) {
  assert.throws(
    () => lstatSync(path.join(root, temporaryReportPath)),
    (error) => errorCode(error) === "ENOENT",
  );
}

function assertNoReportLock(root: string) {
  assert.throws(
    () => lstatSync(path.join(root, reportLockPath)),
    (error) => errorCode(error) === "ENOENT",
  );
}

function withNetworkTraps<T>(callback:()=>T):T {
  const originalFetch = globalThis.fetch;
  const originalHttpRequest = http.request;
  const originalHttpsRequest = https.request;
  const originalNetConnect = net.connect;
  const rejectNetwork = () => {
    throw new Error("network access is forbidden in CPC product-chain rendering");
  };
  globalThis.fetch = rejectNetwork;
  http.request = rejectNetwork;
  https.request = rejectNetwork;
  net.connect = rejectNetwork;
  try {
    return callback();
  } finally {
    globalThis.fetch = originalFetch;
    http.request = originalHttpRequest;
    https.request = originalHttpsRequest;
    net.connect = originalNetConnect;
  }
}

test("exports stable default paths and builds/checks an exact report offline", () => {
  assert.equal(DEFAULT_SOURCE_PATH, "builder/planning/cpc-product-chain-pilot.yaml");
  assert.equal(DEFAULT_REPORT_PATH, "builder/planning/cpc-product-chain-pilot.md");
  const root = createRealRepositoryFixture();
  try {
    const before = protectedDigest(root);
    const built = withNetworkTraps(() => buildOrCheckCpcProductChain(root));
    assert.equal(protectedDigest(root), before);
    assert.equal(built.check_only, false);
    assert.equal(built.analysis.summary.ready_edge_count, 1);
    assert.equal(built.analysis.chains[0]!.nodes[1]!.resolved.coverage_status, "mapped");
    assert.equal(
      built.analysis.chains[0]!.nodes[1]!.resolved.pcr!.readiness.usable_for_guidance,
      true,
    );
    const report = readFileSync(path.join(root, DEFAULT_REPORT_PATH), "utf8");
    assert.equal(report, built.report);
    assert.match(report, /1 ready, 0 blocked/u);
    assertNoTemporaryReport(root);
    assertNoReportLock(root);

    const checked = withNetworkTraps(() =>
      buildOrCheckCpcProductChain(root, { checkOnly: true }));
    assert.equal(checked.check_only, true);
    assert.equal(checked.report, report);
    assert.equal(readFileSync(path.join(root, DEFAULT_REPORT_PATH), "utf8"), report);
    assert.equal(protectedDigest(root), before);
    assertNoTemporaryReport(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("build publishes new and replacement reports as 0644 while check mode preserves mode", () => {
  const root = createRealRepositoryFixture();
  const reportPath = path.join(root, DEFAULT_REPORT_PATH);
  try {
    withNetworkTraps(() => buildOrCheckCpcProductChain(root));
    assert.equal(statSync(reportPath).mode & 0o777, 0o644);

    chmodSync(reportPath, 0o600);
    withNetworkTraps(() => buildOrCheckCpcProductChain(root, { checkOnly: true }));
    assert.equal(statSync(reportPath).mode & 0o777, 0o600);

    withNetworkTraps(() => buildOrCheckCpcProductChain(root));
    assert.equal(statSync(reportPath).mode & 0o777, 0o644);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resolver preserves classification identity and caches one verified snapshot per PCR", () => {
  const calls: {root:string;pcrId:string}[] = [];
  const classificationPcr = {
    id: wheatSeedPcrId,
    path: wheatSeedPath,
    title: { "en-US": "classification identity" },
    readiness: { status: "untrusted", usable_for_guidance: false },
  };
  const snapshot = {
    pcr: {
      id: wheatSeedPcrId,
      path: wheatSeedPath,
      title: { "en-US": "snapshot metadata must not replace classification identity" },
      readiness: { status: "ready", usable_for_guidance: true },
    },
    readiness: {
      status: "ready",
      usable_for_guidance: true,
      projection_fingerprint: { status: "current" },
    },
    source_structured: `${wheatSeedPath}/structured.yaml`,
    structured: {
      product_category_identity: {
        covered_products: "verified products",
        production_route: "verified route",
      },
    },
  };
  const resolveClassificationFn = ({ code }: {code:string}) => ({
    coverage_status: "mapped",
    coverage: { code, label: "Wheat, seed" },
    mapping: { pcr_id: wheatSeedPcrId },
    pcr: structuredClone(classificationPcr),
  });
  const resolvers = createCpcProductChainResolvers("/fixture", {
    resolveClassificationFn,
    getVerifiedPcrProjectionFn(args) {
      calls.push(args);
      return structuredClone(snapshot);
    },
  });

  const firstNode = resolvers.resolveNode({ node: { code: "01111" } });
  const secondNode = resolvers.resolveNode({ node: { code: "01111" } });
  const firstLocator = {
    kind: "field",
    field_path: "product_category_identity.covered_products",
  };
  const secondLocator = {
    kind: "field",
    field_path: "product_category_identity.production_route",
  };
  const firstEvidence = resolvers.resolvePcrEvidence({
    evidence: { pcr_id: wheatSeedPcrId, locator: firstLocator },
  });
  const secondEvidence = resolvers.resolvePcrEvidence({
    evidence: { pcr_id: wheatSeedPcrId, locator: secondLocator },
  });

  assert.equal(calls.length, 1);
  assert.deepEqual(calls[0], { root: "/fixture", pcrId: wheatSeedPcrId });
  assert.equal(firstNode.pcr!.id, classificationPcr.id);
  assert.equal(firstNode.pcr!.path, classificationPcr.path);
  assert.equal(unknownField(firstNode.pcr!.title,"en-US"), "classification identity");
  assert.deepEqual(firstNode.pcr!.readiness, snapshot.readiness);
  assert.deepEqual(secondNode.pcr!, firstNode.pcr);
  assert.equal(firstEvidence.value, "verified products");
  assert.equal(secondEvidence.value, "verified route");
  assert.deepEqual(firstEvidence.locator, firstLocator);
  assert.deepEqual(secondEvidence.locator, secondLocator);

  const mismatched = createCpcProductChainResolvers("/fixture", {
    resolveClassificationFn,
    getVerifiedPcrProjectionFn() {
      return {
        ...structuredClone(snapshot),
        pcr: { ...structuredClone(snapshot.pcr), path: "library/pcrs/substituted" },
      };
    },
  });
  assert.throws(
    () => mismatched.resolveNode({ node: { code: "01111" } }),
    /Verified PCR identity .*path.*does not match classification resolution/u,
  );
});

test("locator helper reports a selected inventory field absent from a supplied projection", () => {
  const locator = {
    kind: "inventory_row",
    process_id: "process-a",
    direction: "inputs",
    flow_type: "product",
    row_id: "row-a",
    field: "description",
  };
  const structured = {
    process_inventory: [{
      id: "process-a",
      inputs: { product: [{ row_id: "row-a", name: "Flow A" }] },
    }],
  };

  assert.throws(
    () => resolveCpcProductChainLocator(structured, locator),
    /process_inventory\.process-a\.inputs\.product\.row-a\.description/u,
  );
});

test("resolves every allowed field locator and both inventory fields from verified bytes", () => {
  const root = createRealRepositoryFixture();
  const cases: readonly (readonly [UnknownRecord, RegExp])[] = [
    [
      { kind: "field", field_path: "product_category_identity.covered_products" },
      /cleaned wheat seed intended for sowing/u,
    ],
    [
      { kind: "field", field_path: "product_category_identity.production_route" },
      /seed multiplication field/u,
    ],
    [
      { kind: "field", field_path: "boundary_abstraction.declared_starting_condition" },
      /^source_seed_lot$/u,
    ],
    [
      { kind: "field", field_path: "boundary_abstraction.upstream_dataset_requirement" },
      /source seed lot disclosure/u,
    ],
    [
      {
        kind: "inventory_row",
        process_id: "field_seed_multiplication",
        direction: "inputs",
        flow_type: "product",
        row_id: "source_seed_lot_used_for_multiplication",
        field: "name",
      },
      /^Wheat$/u,
    ],
    [
      {
        kind: "inventory_row",
        process_id: "field_seed_multiplication",
        direction: "inputs",
        flow_type: "product",
        row_id: "source_seed_lot_used_for_multiplication",
        field: "description",
      },
      /recorded as an input product flow/u,
    ],
  ];
  try {
    const protectedBefore = protectedDigest(root);
    for (const [locator, expected] of cases) {
      writePlanning(root, planningDocument(locator));
      const result = withNetworkTraps(() => buildOrCheckCpcProductChain(root));
      const evidence = result.analysis.chains[0]!.edges[0]!.resolved_evidence[0]!;
      assert.deepEqual(evidence.locator, locator);
      assert.equal(evidence.pcr_id, wheatSeedPcrId);
      assert.equal(evidence.source_path, `${wheatSeedPath}/structured.yaml`);
      assert.match(evidence.value, expected);
      assert.equal(protectedDigest(root), protectedBefore);
      assertNoTemporaryReport(root);
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("locator failures are path-aware and preserve an existing report", () => {
  const scenarios = [
    {
      name: "missing process",
      locator: {
        kind: "inventory_row",
        process_id: "missing_process",
        direction: "inputs",
        flow_type: "product",
        row_id: "source_seed_lot_used_for_multiplication",
        field: "name",
      },
      expected: /process_inventory.*missing_process/u,
    },
    {
      name: "missing row",
      locator: {
        kind: "inventory_row",
        process_id: "field_seed_multiplication",
        direction: "inputs",
        flow_type: "product",
        row_id: "missing_row",
        field: "name",
      },
      expected: /process_inventory.*field_seed_multiplication.*inputs.*product.*missing_row/u,
    },
    {
      name: "missing locator field",
      locator: {
        kind: "inventory_row",
        process_id: "field_seed_multiplication",
        direction: "inputs",
        flow_type: "product",
        row_id: "source_seed_lot_used_for_multiplication",
      },
      expected: /chains\/0\/edges\/0\/evidence\/0\/locator/u,
    },
    {
      name: "downstream PCR mismatch",
      mutate(document: ReturnType<typeof planningDocument>) {
        document.chains[0]!.edges[0]!.evidence[0]!.pcr_id = abalonePcrId;
      },
      expected: /names PCR .*farmed-abalone.*downstream node wheat-seed resolves to .*wheat-seed/u,
    },
  ];
  for (const scenario of scenarios) {
    const root = createRealRepositoryFixture();
    try {
      const sentinel = `sentinel:${scenario.name}\n`;
      writeFileSync(path.join(root, DEFAULT_REPORT_PATH), sentinel);
      const document = planningDocument(scenario.locator);
      scenario.mutate?.(document);
      writePlanning(root, document);
      const protectedBefore = protectedDigest(root);

      assert.throws(
        () => withNetworkTraps(() => buildOrCheckCpcProductChain(root)),
        scenario.expected,
        scenario.name,
      );
      assert.equal(readFileSync(path.join(root, DEFAULT_REPORT_PATH), "utf8"), sentinel);
      assert.equal(protectedDigest(root), protectedBefore);
      assertNoTemporaryReport(root);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  }
});

test("stale coverage errors propagate without report or protected-source mutation", () => {
  const root = createRealRepositoryFixture();
  try {
    const reportPath = path.join(root, DEFAULT_REPORT_PATH);
    writeFileSync(reportPath, "sentinel\n");
    const leavesPath = path.join(root, "classifications/systems/cpc/3.0/normalized/leaves.json");
    writeFileSync(leavesPath, `${readFileSync(leavesPath, "utf8")} `);
    const protectedBefore = protectedDigest(root);

    assert.throws(
      () => withNetworkTraps(() => buildOrCheckCpcProductChain(root)),
      /source normalized_leaves exact-byte SHA-256 mismatch/u,
    );
    assert.equal(readFileSync(reportPath, "utf8"), "sentinel\n");
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("render failures leave the report byte-identical and create no temporary file", () => {
  const root = createRealRepositoryFixture();
  const originalToWellFormed = String.prototype.toWellFormed;
  try {
    const document = planningDocument();
    document.official_sources.push({
      id: "official-fixture",
      title: "Official fixture",
      publisher: "Fixture publisher",
      url: "https://example.test/source",
      locator: "fixture locator",
      supports: "render failure coverage",
      accessed_at: "2026-09-02",
    });
    writePlanning(root, document);
    const reportPath = path.join(root, DEFAULT_REPORT_PATH);
    writeFileSync(reportPath, "sentinel render bytes\n");
    const protectedBefore = protectedDigest(root);
    String.prototype.toWellFormed = () => {
      throw new Error("injected render failure");
    };

    assert.throws(
      () => withNetworkTraps(() => buildOrCheckCpcProductChain(root)),
      /injected render failure/u,
    );
    assert.equal(readFileSync(reportPath, "utf8"), "sentinel render bytes\n");
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);
  } finally {
    String.prototype.toWellFormed = originalToWellFormed;
    rmSync(root, { recursive: true, force: true });
  }
});

test("check mode never writes and rejects missing or stale output", () => {
  const root = createRealRepositoryFixture();
  try {
    const protectedBefore = protectedDigest(root);
    assert.throws(
      () => withNetworkTraps(() =>
        buildOrCheckCpcProductChain(root, { checkOnly: true })),
      /report is missing/u,
    );
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);

    const reportPath = path.join(root, DEFAULT_REPORT_PATH);
    writeFileSync(reportPath, "stale report\n");
    assert.throws(
      () => withNetworkTraps(() =>
        buildOrCheckCpcProductChain(root, { checkOnly: true })),
      /report is stale/u,
    );
    assert.equal(readFileSync(reportPath, "utf8"), "stale report\n");
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("rejects symlink and non-regular managed paths without mutation", () => {
  const scenarios = [
    {
      name: "source symlink",
      arrange(root: string, outsideRoot: string) {
        const sourcePath = path.join(root, DEFAULT_SOURCE_PATH);
        const outsidePath = path.join(outsideRoot, "source.yaml");
        cpSync(sourcePath, outsidePath);
        rmSync(sourcePath);
        symlinkSync(outsidePath, sourcePath);
      },
      expected: /source.*symbolic link/u,
    },
    {
      name: "source directory",
      arrange(root: string) {
        const sourcePath = path.join(root, DEFAULT_SOURCE_PATH);
        rmSync(sourcePath);
        mkdirSync(sourcePath);
      },
      expected: /source.*regular file/u,
    },
    {
      name: "structured symlink",
      arrange(root: string, outsideRoot: string) {
        const structuredPath = path.join(root, wheatSeedPath, "structured.yaml");
        const outsidePath = path.join(outsideRoot, "structured.yaml");
        cpSync(structuredPath, outsidePath);
        rmSync(structuredPath);
        symlinkSync(outsidePath, structuredPath);
      },
      expected: /symbolic link.*structured\.yaml/u,
    },
    {
      name: "structured directory",
      arrange(root: string) {
        const structuredPath = path.join(root, wheatSeedPath, "structured.yaml");
        rmSync(structuredPath);
        mkdirSync(structuredPath);
      },
      expected: /not usable for guidance.*structured_projection_unreadable/u,
    },
    {
      name: "temporary symlink",
      arrange(root: string, outsideRoot: string) {
        symlinkSync(path.join(outsideRoot, "temp"), path.join(root, temporaryReportPath));
      },
      expected: /temporary.*symbolic link/u,
      leavesTemporary: true,
    },
    {
      name: "temporary directory",
      arrange(root: string) {
        mkdirSync(path.join(root, temporaryReportPath));
      },
      expected: /temporary.*regular file/u,
      leavesTemporary: true,
    },
    {
      name: "report symlink",
      arrange(root: string, outsideRoot: string) {
        const outsidePath = path.join(outsideRoot, "report.md");
        writeFileSync(outsidePath, "outside\n");
        symlinkSync(outsidePath, path.join(root, DEFAULT_REPORT_PATH));
      },
      expected: /report.*symbolic link/u,
    },
    {
      name: "report directory",
      arrange(root: string) {
        mkdirSync(path.join(root, DEFAULT_REPORT_PATH));
      },
      expected: /report.*regular file/u,
    },
    {
      name: "lock symlink",
      arrange(root: string, outsideRoot: string) {
        symlinkSync(path.join(outsideRoot, "lock"), path.join(root, reportLockPath));
      },
      expected: /lock.*symbolic link/u,
      leavesLock: true,
    },
    {
      name: "lock directory",
      arrange(root: string) {
        mkdirSync(path.join(root, reportLockPath));
      },
      expected: /lock.*regular file/u,
      leavesLock: true,
    },
  ];
  for (const scenario of scenarios) {
    const root = createRealRepositoryFixture();
    const outsideRoot = mkdtempSync(path.join(tmpdir(), "tiangong-cpc-chain-outside-"));
    try {
      scenario.arrange(root, outsideRoot);
      const protectedBefore = protectedDigest(root);
      assert.throws(
        () => withNetworkTraps(() => buildOrCheckCpcProductChain(root)),
        scenario.expected,
        scenario.name,
      );
      assert.equal(protectedDigest(root), protectedBefore);
      if (!scenario.leavesTemporary) assertNoTemporaryReport(root);
      if (!scenario.leavesLock) assertNoReportLock(root);
    } finally {
      rmSync(root, { recursive: true, force: true });
      rmSync(outsideRoot, { recursive: true, force: true });
    }
  }
});

test("writer lock rejects a competing writer and compare-and-swap preserves changed output", () => {
  const root = createRealRepositoryFixture();
  try {
    const reportPath = path.join(root, DEFAULT_REPORT_PATH);
    const lockPath = path.join(root, reportLockPath);
    writeFileSync(reportPath, "baseline\n");
    writeFileSync(lockPath, "competing writer\n");
    const protectedBefore = protectedDigest(root);

    assert.throws(
      () => withNetworkTraps(() => buildOrCheckCpcProductChain(root)),
      /report lock already exists/u,
    );
    assert.equal(readFileSync(reportPath, "utf8"), "baseline\n");
    assert.equal(readFileSync(lockPath, "utf8"), "competing writer\n");
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);

    rmSync(lockPath);
    assert.throws(
      () => withNetworkTraps(() =>
        __test.writeReportAtomically(root, "managed output\n", {
          beforeFinalCheck() {
            writeFileSync(reportPath, "concurrent output\n");
          },
        })),
      /report changed before publication/u,
    );
    assert.equal(readFileSync(reportPath, "utf8"), "concurrent output\n");
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);
    assertNoReportLock(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("CLI builds and checks successfully from a temporary fixture working directory", () => {
  const root = createRealRepositoryFixture();
  const scriptPath = path.join(repoRoot, "builder/scripts/render-cpc-product-chain.ts");
  try {
    const protectedBefore = protectedDigest(root);
    const built = spawnSync(process.execPath, [scriptPath], {
      cwd: root,
      encoding: "utf8",
    });
    assert.equal(built.status, 0, built.stderr);
    assert.match(built.stdout, /was rebuilt/u);
    const report = readFileSync(path.join(root, DEFAULT_REPORT_PATH), "utf8");
    assert.match(report, /CPC Product-Chain Pilot Report/u);

    const checked = spawnSync(process.execPath, [scriptPath, "--check"], {
      cwd: root,
      encoding: "utf8",
    });
    assert.equal(checked.status, 0, checked.stderr);
    assert.match(checked.stdout, /is current/u);
    assert.equal(readFileSync(path.join(root, DEFAULT_REPORT_PATH), "utf8"), report);
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);
    assertNoReportLock(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("CLI rejects every argument vector except no args and exactly --check", () => {
  for (const args of [["unexpected"], ["--check", "--check"], ["--check", "unexpected"]]) {
    const result = spawnSync(
      process.execPath,
      [path.join(repoRoot, "builder/scripts/render-cpc-product-chain.ts"), ...args],
      { cwd: repoRoot, encoding: "utf8" },
    );
    assert.notEqual(result.status, 0, args.join(" "));
    assert.match(result.stderr, /Unexpected CPC product-chain argument/u);
    assert.equal(result.stdout, "");
  }
});

test("package scripts expose CPC chain build/check and lint checks the report before builder lint", () => {
  const rawPackage:unknown = JSON.parse(
    readFileSync(path.join(repoRoot, "package.json"), "utf8"),
  );

  assert.ok(isUnknownRecord(rawPackage));
  const packageJson=rawPackage;
  assert.equal(
    unknownField(packageJson.scripts,"cpc-chains:build"),
    "node builder/scripts/render-cpc-product-chain.ts",
  );
  assert.equal(
    unknownField(packageJson.scripts,"cpc-chains:check"),
    "node builder/scripts/render-cpc-product-chain.ts --check",
  );
  assert.match(
    String(unknownField(packageJson.scripts,"lint")),
    /npm run cpc-chains:check.*node builder\/cli\/index\.ts lint/u,
  );
});

test("checked-in three-chain pilot derives the exact execution and review plan", () => {
  const result = withNetworkTraps(() =>
    buildOrCheckCpcProductChain(repoRoot, { checkOnly: true }));

  assert.deepEqual(result.analysis.summary, {
    chain_count: 3,
    node_count: 13,
    edge_count: 9,
    ready_edge_count: 3,
    blocked_edge_count: 6,
  });

  const chains = Object.fromEntries(
    result.analysis.chains.map((chain) => [chain.id, chain]),
  );
  assert.deepEqual(chains["grain-food"]!.executable_waves, [
    ["wheat-grain"],
    ["wheat-flour"],
    ["bread-and-bakers-wares"],
  ]);
  assert.deepEqual(chains["cotton-textile"]!.executable_waves, [
    ["cotton-yarn"],
    ["woven-cotton-fabric"],
  ]);
  assert.deepEqual(chains["forestry-pulp-paper"]!.executable_waves, []);
  assert.deepEqual(chains["grain-food"]!.review_only_node_ids, []);
  assert.deepEqual(chains["cotton-textile"]!.review_only_node_ids, [
    "raw-cotton",
    "carded-or-combed-cotton",
  ]);
  assert.deepEqual(chains["forestry-pulp-paper"]!.review_only_node_ids, [
    "coniferous-pulpwood",
    "mechanical-pulp",
    "newsprint",
    "nonconiferous-pulpwood",
    "chemical-pulp",
    "wood-free-paper",
  ]);
  assert.equal(
    result.analysis.chains.reduce(
      (count, chain) => count + chain.review_only_node_ids.length,
      0,
    ),
    8,
  );

  const cottonPreparationEdge = chains["cotton-textile"]!.edges.find(
    (edge) => edge.id === "carded-or-combed-cotton-to-cotton-yarn",
  );
  assert.ok(cottonPreparationEdge);
  assert.equal(cottonPreparationEdge.boundary_assessment, "overlap");
  assert.equal(cottonPreparationEdge.scheduling_status, "blocked");
  assert.deepEqual(cottonPreparationEdge.blockers, ["boundary_not_aligned"]);
  assert.match(
    String(unknownField(cottonPreparationEdge.interface,"fit_summary")),
    /opening, cleaning, carding, drawing and optional combing/u,
  );

  assert.match(
    result.report,
    /CPC is a product classification, not a process graph; arrows express scoped pilot relationships, not universal production routes\./u,
  );
  assert.ok(result.report.includes(
    "### Caveat\n\n" +
      "`semantic_candidate` and official-only (`supported_by_official_source`) edges " +
      "do not change accepted mappings and do not trigger PCR generation.",
  ));
});
