import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { classifyTestFiles, discoverSuites, discoverTestFiles, REPOSITORY_ROOT, selectSuite, SUITE_NAMES, validateRegisteredTests } from "./suites.ts";
import type { SuiteRunResult } from "./suites.ts";

const toolUrl = new URL(`./suites${path.extname(fileURLToPath(import.meta.url))}`, import.meta.url);
const toolFile = fileURLToPath(toolUrl);

function fixture(t: test.TestContext): string {
  const root = mkdtempSync(path.join(realpathSync(tmpdir()), "pcr suite fixture with spaces "));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  return root;
}

function writeFixture(root: string, name: string, content = ""): void {
  const file = path.join(root, name);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, content);
}

function runFixture(root: string, selector: string, environment: NodeJS.ProcessEnv = {}) {
  const source = `
    const { runSuite } = await import(${JSON.stringify(toolUrl.href)});
    const result = await runSuite(process.argv[1], process.argv[2]);
    console.log("SUITE_RESULT " + JSON.stringify(result));
    process.exitCode = result.exitCode ?? 1;
  `;
  return spawnSync(process.execPath, ["--input-type=module", "-e", source, root, selector], {
    encoding: "utf8", env: { ...process.env, ...environment }, timeout: 20_000,
  });
}

function runEmittedFixture(root: string, selector = "engineering") {
  const source = `
    const { main } = await import(${JSON.stringify(toolUrl.href)});
    const result = await main(["run-emitted", process.argv[2]], process.argv[1]);
    console.log("SUITE_RESULT " + JSON.stringify(result));
    process.exitCode = result.exitCode ?? 1;
  `;
  return spawnSync(process.execPath, ["--input-type=module", "-e", source, root, selector], {
    encoding: "utf8", env: process.env, timeout: 20_000,
  });
}

function readRunResult(stdout: string): SuiteRunResult {
  const line = stdout.split("\n").find(value => value.startsWith("SUITE_RESULT "));
  assert.ok(line, stdout);
  // JSON crosses a subprocess boundary; assertions below validate the observed fields.
  return JSON.parse(line.slice("SUITE_RESULT ".length)) as SuiteRunResult;
}

test("all/root retain 89 existing root tests, nine docs tests, and every engineering test exactly once", () => {
  const inventory = discoverSuites(REPOSITORY_ROOT);
  const roots = ["builder/cli", "builder/goal-harness", "builder/lib", "builder/scripts", "packages/pcr-core", "packages/tiangong-pcr-cli", "packages/pcr-viewer"];
  const priorRootTests = roots.flatMap(directory =>
    readdirSync(path.join(REPOSITORY_ROOT, directory))
      .filter(name => /\.test\.(?:mjs|ts)$/.test(name))
      .map(name => `${directory}/${name}`));
  assert.ok(priorRootTests.length >= 89);
  assert.ok(inventory.docs.length >= 9);
  assert.ok(inventory.engineering.some(file => file.endsWith("suites.test.ts")));
  const all = selectSuite(inventory, "all");
  assert.deepEqual(all, selectSuite(inventory, "root"));
  assert.equal(new Set(all).size, all.length);
  assert.deepEqual(all, [...all].sort());
  assert.deepEqual(all, discoverTestFiles(REPOSITORY_ROOT));
  for (const file of priorRootTests) assert.ok(all.includes(file), file);
  assert.ok(inventory.unit.includes("builder/lib/markdown-table.test.ts"));
  assert.ok(inventory.integration.includes("builder/cli/goal.test.ts"));
  assert.ok(inventory.recovery.includes("builder/lib/pcr-directory-transaction.test.ts"));
  assert.ok(inventory.offline.includes("packages/pcr-core/offline-library.test.ts"));
  assert.ok(Object.isFrozen(inventory));
  for (const suite of SUITE_NAMES) assert.ok(Object.isFrozen(inventory[suite]));
});

test("registered baseline tests cannot disappear silently, while explicitly classified additions remain valid", () => {
  const files = discoverTestFiles(REPOSITORY_ROOT);
  assert.doesNotThrow(() => validateRegisteredTests(files));
  for (const missing of ["builder/lib/markdown-table.test.ts", "packages/pcr-docs/scripts/markdown.test.ts", "packages/pcr-core/full-corpus.offline.test.ts"]) {
    assert.throws(() => validateRegisteredTests(files.filter(file => file !== missing)), /Registered tests are missing/);
  }
  const expanded = [...files, "builder/lib/new.unit.test.ts"];
  assert.doesNotThrow(() => validateRegisteredTests(expanded));
  assert.ok(classifyTestFiles(expanded).unit.includes("builder/lib/new.unit.test.ts"));
});

test("discovery is read-only, recursive, sorted, and excludes dependency and generated copies", t => {
  const root = fixture(t);
  const retained = ["z/new.unit.test.ts", "packages/pcr-docs/deep/a.test.mjs", "scripts/engineering/new tool.test.ts"];
  for (const file of retained) writeFixture(root, file);
  for (const file of ["node_modules/vendor/x.test.js", "dist/test-engineering/x.test.js", "packages/pcr-docs/.generated/x.test.ts", "packages/pcr-docs/public/generated/x.test.ts", "library/.pcr-builder-state/x.test.mjs"]) {
    writeFixture(root, file);
  }
  writeFixture(root, "tsconfig.test.json", "{}");
  const before = readdirSync(root);
  assert.deepEqual(discoverTestFiles(root), retained.sort());
  const inventory = discoverSuites(root);
  assert.deepEqual(inventory.unit, ["z/new.unit.test.ts"]);
  assert.deepEqual(selectSuite(inventory, "all"), retained);
  assert.deepEqual(readdirSync(root), before);
});

test("introduced tests fail closed for unclassified names, unsupported extensions, and ambiguous suites", () => {
  assert.throws(() => classifyTestFiles(["builder/lib/new.test.ts"]), /Unclassified test/);
  assert.throws(() => classifyTestFiles(["new-dir/new.test.mjs"]), /Unclassified test/);
  assert.throws(() => classifyTestFiles(["scripts/engineering/new.test.tsx"]), /Unsupported test extension/);
  assert.throws(() => classifyTestFiles(["scripts/engineering/new.test.ts", "scripts/engineering/new.test.ts"]), /Duplicate test path/);
  assert.throws(() => classifyTestFiles(["scripts/engineering/new.test.ts", "scripts/engineering/new.test.mjs"]), /Duplicate test implementations/);
  assert.throws(() => classifyTestFiles(["packages/pcr-docs/new.unit.test.ts"]), /Multiple suites/);
  assert.throws(() => classifyTestFiles(["../new.unit.test.ts"]), /repository-relative/);
  assert.throws(() => selectSuite(classifyTestFiles([]), "typo"), /Unknown suite/);
});

test("test symlinks are rejected instead of executed or silently omitted", t => {
  const root = fixture(t);
  writeFixture(root, "target.mjs");
  symlinkSync(path.join(root, "target.mjs"), path.join(root, "new.unit.test.mjs"));
  assert.throws(() => discoverSuites(root), /regular file/);
});

test("symlinked source directories cannot hide tests, while dependency directory links stay excluded", t => {
  const root = fixture(t);
  const outside = fixture(t);
  writeFixture(outside, "hidden.unit.test.ts");
  symlinkSync(outside, path.join(root, "node_modules"), "dir");
  assert.deepEqual(discoverTestFiles(root), []);
  symlinkSync(outside, path.join(root, "source"), "dir");
  assert.throws(() => discoverTestFiles(root), /Source directory must not be a symbolic link/);
});

test("real Node subprocess receives a spaced filename, repository cwd, and native TypeScript", t => {
  const root = fixture(t);
  writeFixture(root, "scripts/engineering/passing test with spaces.test.ts", `
    import assert from "node:assert/strict";
    import test from "node:test";
    const expectedRoot: string = ${JSON.stringify(root)};
    test("native TS and spaced path", () => assert.equal(process.cwd(), expectedRoot));
  `);
  const result = runFixture(root, "all");
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.deepEqual(readRunResult(result.stdout), { exitCode: 0, signal: null });
  assert.match(result.stdout, /native TS and spaced path/);
});

test("real failing tests propagate failure and runner-owned canonical temporary files are removed", t => {
  const root = fixture(t);
  const temporaryFixture = fixture(t);
  const parentTemporaryRoot = path.join(temporaryFixture, "actual temp directory");
  const alias = path.join(temporaryFixture, "temp alias");
  mkdirSync(parentTemporaryRoot);
  symlinkSync(parentTemporaryRoot, alias, "dir");
  const observation = path.join(root, "temp observation.json");
  writeFixture(root, "scripts/engineering/failing.test.ts", `
    import assert from "node:assert/strict";
    import { writeFileSync, realpathSync } from "node:fs";
    import { tmpdir } from "node:os";
    import path from "node:path";
    import test from "node:test";
    const temporaryRoot = tmpdir();
    writeFileSync(${JSON.stringify(observation)}, JSON.stringify({ temporaryRoot, canonical: realpathSync(temporaryRoot), env: [process.env.TMPDIR, process.env.TEMP, process.env.TMP] }));
    writeFileSync(path.join(temporaryRoot, "owned evidence.txt"), "test output");
    test("observable failure", () => assert.fail("runner failure fixture"));
  `);
  const result = runFixture(root, "engineering", { TMPDIR: alias, TEMP: alias, TMP: alias });
  assert.ifError(result.error);
  assert.equal(result.status, 1, result.stderr + result.stdout);
  assert.deepEqual(readRunResult(result.stdout), { exitCode: 1, signal: null });
  const observed = JSON.parse(readFileSync(observation, "utf8")) as { temporaryRoot: string; canonical: string; env: string[] };
  assert.equal(observed.temporaryRoot, observed.canonical);
  assert.equal(path.dirname(observed.temporaryRoot), realpathSync(parentTemporaryRoot));
  assert.deepEqual(observed.env, Array<string>(3).fill(observed.temporaryRoot));
  assert.equal(existsSync(observed.temporaryRoot), false);
  assert.equal(existsSync(alias), true);
  assert.equal(existsSync(parentTemporaryRoot), true);
});

test("CLI validates exact arguments and gives unknown suite exit 2 without launching tests", () => {
  for (const argv of [[], ["unknown"], ["run"], ["run", "typo"], ["run", "unit", "--unknown"], ["list", "--json", "extra"], ["list", "--unknown"]]) {
    const result = spawnSync(process.execPath, [toolFile, ...argv], { encoding: "utf8", timeout: 10_000 });
    assert.ifError(result.error);
    assert.equal(result.status, 2, JSON.stringify(argv));
    assert.equal(result.stdout, "");
    assert.match(result.stderr, /Usage:|Unknown suite/);
  }
  const listed = spawnSync(process.execPath, [toolFile, "list", "--json"], { encoding: "utf8", timeout: 10_000 });
  assert.ifError(listed.error);
  assert.equal(listed.status, 0, listed.stderr);
  const value = JSON.parse(listed.stdout) as { suites: Record<string, string[]>; aliases: Record<string, string[]> };
  assert.deepEqual(Object.keys(value.suites), [...SUITE_NAMES]);
  assert.deepEqual(value.aliases["root"], [...SUITE_NAMES]);
  const help = spawnSync(process.execPath, [toolFile, "--help"], { encoding: "utf8", timeout: 10_000 });
  assert.equal(help.status, 0);
  assert.match(help.stdout, /including docs and engineering/);
});

test("POSIX SIGTERM is forwarded to the real test process and owned temporary files are cleaned", {
  timeout: 15_000,
  // Windows process.kill(SIGTERM) force-terminates the target without invoking
  // its handler. It cannot exercise this cooperative POSIX cleanup contract.
  skip: process.platform === "win32" ? "Windows SIGTERM is non-cooperative; ordinary child failure/cleanup is tested separately." : false,
}, async t => {
  // Own this fixture until its entire subprocess group and pipes have closed.
  const root = mkdtempSync(path.join(realpathSync(tmpdir()), "pcr signal fixture with spaces "));
  const ready = path.join(root, "ready.json");
  writeFixture(root, "scripts/engineering/waiting.test.ts", `
    import { writeFileSync, renameSync } from "node:fs";
    import { tmpdir } from "node:os";
    import test from "node:test";
    test("waiting for signal", async () => {
      const stagedReady = ${JSON.stringify(ready + ".tmp")};
      writeFileSync(stagedReady, JSON.stringify({ temporaryRoot: tmpdir() }));
      renameSync(stagedReady, ${JSON.stringify(ready)});
      await new Promise(() => setInterval(() => {}, 1000));
    });
  `);
  const source = `
    const { runSuite } = await import(${JSON.stringify(toolUrl.href)});
    const result = await runSuite(process.argv[1], "engineering");
    console.log("SUITE_RESULT " + JSON.stringify(result));
  `;
  const child = spawn(process.execPath, ["--input-type=module", "-e", source, root], {
    stdio: ["ignore", "pipe", "pipe"], detached: true,
  });
  let stdout = "", stderr = "";
  child.stdout.on("data", (data: Buffer) => { stdout += data.toString(); });
  child.stderr.on("data", (data: Buffer) => { stderr += data.toString(); });
  let closed = false;
  const completion = new Promise<SuiteRunResult>((resolve, reject) => {
    child.once("error", reject);
    child.once("close", (exitCode, signal) => { closed = true; resolve({ exitCode, signal }); });
  });
  t.after(async () => {
    try {
      // A failed readiness assertion must not orphan node --test or its worker,
      // whose inherited pipes otherwise keep this test file alive indefinitely.
      if (!closed && child.pid !== undefined) {
        try { process.kill(-child.pid, "SIGKILL"); }
        catch (error) {
          if (!(error instanceof Error) || !("code" in error) || error.code !== "ESRCH") throw error;
        }
      }
      await completion;
    } finally {
      child.stdout.destroy(); child.stderr.destroy();
      rmSync(root, { recursive: true, force: true });
    }
  }, { timeout: 5_000 });
  const deadline = Date.now() + 10_000;
  while (!existsSync(ready)) {
    assert.equal(child.exitCode, null, stdout + stderr);
    assert.equal(child.signalCode, null, stdout + stderr);
    assert.ok(Date.now() < deadline, "test subprocess did not become ready\n" + stdout + stderr);
    await new Promise(resolve => setTimeout(resolve, 25));
  }
  const { temporaryRoot } = JSON.parse(readFileSync(ready, "utf8")) as { temporaryRoot: string };
  assert.equal(child.kill("SIGTERM"), true);
  assert.deepEqual(await completion, { exitCode: 0, signal: null }, stdout + stderr);
  assert.deepEqual(readRunResult(stdout), { exitCode: null, signal: "SIGTERM" });
  assert.equal(existsSync(temporaryRoot), false);
});


test("browser contracts remain explicit members of all/root and use their own base suite", () => {
  const filename = "tests/browser/viewer.browser.test.ts";
  const inventory = classifyTestFiles([filename, "sample.unit.test.ts"]);
  assert.deepEqual(inventory.browser, [filename]);
  assert.deepEqual(selectSuite(inventory, "browser"), [filename]);
  assert.deepEqual(selectSuite(inventory, "all"), ["sample.unit.test.ts", filename]);
  assert.deepEqual(selectSuite(inventory, "root"), selectSuite(inventory, "all"));
});


test("emitted engineering runs exactly current authored members with no type stripping and ignores stale output", t => {
  const root = fixture(t);
  writeFixture(root, "scripts/engineering/current with spaces.test.ts", 'throw new Error("Authored source must not execute in the emitted lane.");');
  writeFixture(root, "dist/test-engineering/scripts/engineering/current with spaces.test.js", `
    import assert from "node:assert/strict";
    import test from "node:test";
    test("current emitted engineering", () => {
      assert.ok(process.execArgv.includes("--no-strip-types"));
      assert.equal(process.cwd(), ${JSON.stringify(root)});
    });
  `);
  writeFixture(root, "dist/test-engineering/scripts/engineering/stale.test.js", 'throw new Error("Stale emitted output must not execute.");');
  const result = runEmittedFixture(root);
  assert.ifError(result.error);assert.equal(result.status, 0, result.stderr + result.stdout);
  assert.deepEqual(readRunResult(result.stdout), { exitCode: 0, signal: null });
  assert.match(result.stdout, /current emitted engineering/);
  assert.equal(existsSync(path.join(root, "dist/test-engineering/scripts/engineering/stale.test.js")), true);
});

test("emitted engineering requires every current output and rejects unsupported suite selection before launching", t => {
  const root = fixture(t);
  writeFixture(root, "scripts/engineering/current.test.ts");
  writeFixture(root, "dist/test-engineering/scripts/engineering/stale.test.js", 'throw new Error("Must not run stale tests in place of missing output.");');
  const missing = runEmittedFixture(root);
  assert.ifError(missing.error);assert.equal(missing.status, 2, missing.stderr + missing.stdout);
  assert.match(missing.stderr, /Required emitted test is missing or not regular/);
  assert.deepEqual(readRunResult(missing.stdout), { exitCode: 2, signal: null });
  const unsupported = runEmittedFixture(root, "all");
  assert.ifError(unsupported.error);assert.equal(unsupported.status, 2);
  assert.match(unsupported.stderr, /supports engineering only/);
});

test("emitted child failure propagates and removes only its owned temporary evidence", t => {
  const root = fixture(t), observation = path.join(root, "emitted-temp-observation.json");
  writeFixture(root, "scripts/engineering/failing.test.ts");
  writeFixture(root, "dist/test-engineering/scripts/engineering/failing.test.js", `
    import assert from "node:assert/strict";
    import { writeFileSync } from "node:fs";
    import { tmpdir } from "node:os";
    import path from "node:path";
    import test from "node:test";
    const temporaryRoot = tmpdir();
    writeFileSync(${JSON.stringify(observation)}, JSON.stringify({ temporaryRoot }));
    writeFileSync(path.join(temporaryRoot, "owned evidence"), "emitted subprocess output");
    test("emitted observable failure", () => assert.fail("emitted failure fixture"));
  `);
  const result = runEmittedFixture(root);
  assert.ifError(result.error);assert.equal(result.status, 1, result.stderr + result.stdout);
  assert.deepEqual(readRunResult(result.stdout), { exitCode: 1, signal: null });
  const observed: unknown = JSON.parse(readFileSync(observation, "utf8"));
  assert.ok(observed !== null && typeof observed === "object" && "temporaryRoot" in observed && typeof observed.temporaryRoot === "string");
  assert.equal(existsSync(observed.temporaryRoot), false);
  assert.equal(existsSync(path.join(root, "dist/test-engineering/scripts/engineering/failing.test.js")), true);
});

test("portable offline selection excludes only the exact full corpus and preserves full membership", () => {
  const corpus = "packages/pcr-core/full-corpus.offline.test.ts";
  const fixtures = ["packages/pcr-core/offline-library.test.ts", "packages/pcr-core/new.offline.test.ts"];
  const inventory = classifyTestFiles([...fixtures, corpus]);
  assert.deepEqual(selectSuite(inventory, "portable-offline"), fixtures.sort());
  assert.deepEqual(selectSuite(inventory, "offline"), [...fixtures, corpus].sort());
  assert.deepEqual(selectSuite(inventory, "all"), [...fixtures, corpus].sort());
  assert.deepEqual(selectSuite(inventory, "root"), [...fixtures, corpus].sort());
});
