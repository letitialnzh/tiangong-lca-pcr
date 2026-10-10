import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";

import { text, jsonRecord, errorCode, type UnknownRecord } from "./domain.ts";
import type { ChildProcess } from "node:child_process";
import { withGoalLock } from "./lock.ts";

const lockModuleUrl = pathToFileURL(path.join(process.cwd(), "builder/goal-harness/lock.ts")).href;

function spawnLockProcess(source: string): Promise<{code: number | null; stdout: string; stderr: string}> {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("close", (code) => resolve({ code, stdout, stderr }));
  });
}

function runContenders(stateDir: string, count = 6): Promise<UnknownRecord[]> {
  const attemptedDir = path.join(stateDir, "contender-attempts");
  mkdirSync(attemptedDir);
  return Promise.all(Array.from({ length: count }, (_, index) =>
    spawnLockProcess(`import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
let entered = null;
try {
  const value = withGoalLock(${JSON.stringify(stateDir)}, "race", () => {
    entered = { contender: ${index}, pid: process.pid, at: Date.now(), owner: JSON.parse(readFileSync(${JSON.stringify(path.join(stateDir, "goal.lock"))}, "utf8")) };
    try {
    // Keep the winner's lease until every other process has attempted acquisition.
    // A fixed sleep can expire before a slow child starts, allowing a valid second owner.
    const deadline = Date.now() + 10000;
    while (readdirSync(${JSON.stringify(attemptedDir)}).length < ${count - 1}) {
      if (Date.now() >= deadline) throw new Error("Concurrent contenders did not finish while the winner held its lease; completed: " + readdirSync(${JSON.stringify(attemptedDir)}).join(","));
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 5);
    }
    return "entered";
    } finally { entered.exited_at = Date.now(); }
  });
  process.stdout.write(JSON.stringify({ ok: true, value, entered }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, code: error.code, message: error.message, entered }));
  process.exitCode = 1;
} finally {
  writeFileSync(${JSON.stringify(path.join(attemptedDir, `${index}.done`))}, "done");
}`).then(({ stdout, stderr }) => {
      assert.equal(stderr, "");
      assert.notEqual(stdout, "");
      return jsonRecord(stdout);
    }),
  ));
}

function deadLease(token = "stale-token") {
  return { schema_version: 1, token, pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
}

test("pre-coordinator archived JSON leases remain immutable history and do not block acquisition", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-legacy-lock-history-"));
  try {
    mkdirSync(path.join(stateDir, "lock-history"));
    const token = "60b98354-6e72-4d47-a0f9-dd74757aca65";
    const archive = path.join(stateDir, "lock-history", `goal-lock-stale-2147483647-${token}.json`);
    const bytes = JSON.stringify(deadLease(token));
    writeFileSync(archive, bytes);
    assert.equal(withGoalLock(stateDir, "after-upgrade", () => "entered"), "entered");
    assert.equal(readFileSync(archive, "utf8"), bytes);
    writeFileSync(archive, JSON.stringify(deadLease("substituted")));
    assert.throws(() => withGoalLock(stateDir, "reject-forged-history", () => {}), e => errorCode(e) === "GOAL_LOCKED");
  } finally { rmSync(stateDir, { recursive: true, force: true }); }
});

test("a paused stale reclaimer cannot unlink a successor's live lease after its final comparison", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-final-unlink-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const marker = (name: string) => path.join(stateDir, name);
  const children: {child: ChildProcess; finished: boolean; stdout: string; stderr: string; code: number | null; closed: Promise<void>}[] = [];
  const start = (source: string) => {
    const child = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
    const result = { child, finished: false, stdout: "", stderr: "", code: null as number | null, closed: Promise.resolve() };
    child.stdout.on("data", data => { result.stdout += data; });
    child.stderr.on("data", data => { result.stderr += data; });
    result.closed = new Promise(resolve => child.on("close", code => { result.finished = true; result.code = code; resolve(); }));
    children.push(result);
    return result;
  };
  const waitUntil = async (condition: () => boolean, description: string) => {
    const deadline = Date.now() + 10000;
    while (!condition()) {
      if (Date.now() >= deadline) throw new Error(`Timed out waiting for ${description}: ${JSON.stringify(children.map(({ stdout, stderr, finished }) => ({ stdout, stderr, finished })))}`);
      await new Promise(resolve => setTimeout(resolve, 5));
    }
  };
  try {
    writeFileSync(lockPath, `${JSON.stringify(deadLease())}\n`);
    const first = start(`import fs from "node:fs";
import { syncBuiltinESMExports } from "node:module";
import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
const unlink = fs.unlinkSync;
let paused = false;
fs.unlinkSync = function(file) {
  if (file === ${JSON.stringify(lockPath)} && !paused) {
    paused = true;
    fs.writeFileSync(${JSON.stringify(marker("paused"))}, "ready");
    const deadline = Date.now() + 10000;
    while (!fs.existsSync(${JSON.stringify(marker("resume-first"))})) {
      if (Date.now() >= deadline) throw new Error("parent did not release paused unlink");
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 5);
    }
  }
  return unlink(file);
};
syncBuiltinESMExports();
try { withGoalLock(${JSON.stringify(stateDir)}, "first", () => fs.writeFileSync(${JSON.stringify(marker("first-entered"))}, "entered")); }
catch (error) { if (error.code !== "GOAL_LOCKED") throw error; }
`);
    await waitUntil(() => existsSync(marker("paused")) || first.finished, "first reclaimer's final unlink");
    assert.equal(first.finished, false, first.stderr);
    const second = start(`import fs from "node:fs";
import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
try {
  withGoalLock(${JSON.stringify(stateDir)}, "second", () => {
    fs.writeFileSync(${JSON.stringify(marker("second-entered"))}, fs.readFileSync(${JSON.stringify(lockPath)}));
    const deadline = Date.now() + 10000;
    while (!fs.existsSync(${JSON.stringify(marker("release-second"))})) {
      if (Date.now() >= deadline) throw new Error("parent did not release second owner");
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 5);
    }
  });
} catch (error) { if (error.code !== "GOAL_LOCKED") throw error; }
`);
    await waitUntil(() => existsSync(marker("second-entered")) || second.finished, "successor acquisition result");
    writeFileSync(marker("resume-first"), "resume");
    await waitUntil(() => first.finished, "paused reclaimer completion");
    assert.equal(first.code, 0, first.stderr);
    assert.equal(Number(existsSync(marker("first-entered"))) + Number(existsSync(marker("second-entered"))), 1,
      "Both callbacks entered while the successor retained its lease");
    if (existsSync(marker("second-entered"))) {
      assert.deepEqual(readFileSync(lockPath), readFileSync(marker("second-entered")));
    }
    writeFileSync(marker("release-second"), "release");
    await waitUntil(() => second.finished, "successor completion");
    assert.equal(second.code, 0, second.stderr);
  } finally {
    for (const result of children) if (!result.finished) result.child.kill("SIGTERM");
    await Promise.all(children.map(result => result.closed));
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("a dead process lock is archived and recovered without weakening live lock exclusion", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.equal(withGoalLock(stateDir, "integrate", () => "recovered"), "recovered");
    assert.equal(existsSync(lockPath), false);
    const archived = readdirSync(path.join(stateDir, "lock-history"));
    assert.equal(archived.length, 1);
    const archivedOwner = path.join(stateDir, "lock-history", first(archived), "owner.json");
    assert.deepEqual(jsonRecord(readFileSync(archivedOwner, "utf8")), stale);

    writeFileSync(lockPath, `${JSON.stringify({ ...stale, token: "live-token", pid: process.pid })}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "integrate", () => "must not run"),
      (error) => errorCode(error) === "GOAL_LOCKED",
    );
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("retirement ownership survives claim publication crashes and releases without reusing claim slots", async () => {
  for (const phase of ["after_retirement_claim_write_chunk", "after_retirement_claim_published", "after_retirement_claim_released"]) {
    const stateDir = mkdtempSync(path.join(tmpdir(), "goal-retirement-claim-crash-"));
    try {
      const stale = deadLease(phase);
      writeFileSync(path.join(stateDir, "goal.lock"), `${JSON.stringify(stale)}\n`);
      const crashed = await spawnLockProcess(`import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
let chunks = 0;
withGoalLock(${JSON.stringify(stateDir)}, "claim-crash", () => { throw new Error("crash hook not reached"); }, {
  faultInjector(actual) {
    if (actual === "before_retirement_claim_write_chunk") return { max_bytes: 1 };
    if (actual === ${JSON.stringify(phase)} && (actual !== "after_retirement_claim_write_chunk" || ++chunks === 5)) process.exit(86);
  },
});`);
      assert.equal(crashed.code, 86, `${phase}: ${crashed.stderr}`);
      const [retired] = readdirSync(path.join(stateDir, "lock-history"));
      const retiredDir = path.join(stateDir, "lock-history", text(retired));
      const claimsBefore = readdirSync(retiredDir).filter(name => /^claim-\d+\.json$/.test(name));
      const retained = Object.fromEntries(claimsBefore.map(name => [name, readFileSync(path.join(retiredDir, name))]));
      for (const bytes of Object.values(retained)) assert.ok(Number(jsonRecord(Buffer.isBuffer(bytes) ? bytes.toString("utf8") : text(bytes)).pid) > 0);
      const results = await runContenders(stateDir);
      assert.equal(results.filter(entry => entry.ok).length, 1, `${phase}: ${JSON.stringify(results)}`);
      assert.ok(results.filter(entry => !entry.ok).every(entry => entry.code === "GOAL_LOCKED"), `${phase}: ${JSON.stringify(results)}`);
      for (const [name, bytes] of Object.entries(retained)) assert.deepEqual(readFileSync(path.join(retiredDir, name)), bytes);
      if (phase === "after_retirement_claim_published") {
        assert.ok(readdirSync(retiredDir).filter(name => /^claim-\d+\.json$/.test(name)).length >= 2);
      }
      assert.deepEqual(jsonRecord(readFileSync(path.join(retiredDir, "owner.json"), "utf8")), stale);
    } finally {
      rmSync(stateDir, { recursive: true, force: true });
    }
  }
});

test("multiple concurrent stale-lock reclaimers retire one exact owner and only one enters", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-race-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    const results = await runContenders(stateDir, 8);
    assert.equal(results.filter((entry) => entry.ok).length, 1);
    assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"));
    const archives = readdirSync(path.join(stateDir, "lock-history"));
    assert.equal(archives.length, 1);
    assert.deepEqual(jsonRecord(readFileSync(path.join(stateDir, "lock-history", first(archives), "owner.json"), "utf8")), stale);
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("concurrent reclaimers recover a crash after the retirement directory was created", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-claim-crash-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "crash", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => errorCode(error) === "TEST_CRASH",
    );
    const [incompleteClaim] = readdirSync(path.join(stateDir, "lock-history"));
    assert.deepEqual(readdirSync(path.join(stateDir, "lock-history", text(incompleteClaim))), []);
    assert.deepEqual(jsonRecord(readFileSync(lockPath, "utf8")), stale);

    const results = await runContenders(stateDir, 8);
    assert.equal(results.filter((entry) => entry.ok).length, 1);
    assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"));
    assert.deepEqual(jsonRecord(readFileSync(path.join(stateDir, "lock-history", text(incompleteClaim), "owner.json"), "utf8")), stale);
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("retirement never removes a replacement live lease", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-replaced-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  const live = { ...stale, token: "live-token", pid: process.pid, acquired_at: new Date().toISOString() };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "race", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") writeFileSync(lockPath, `${JSON.stringify(live)}\n`);
        },
      }),
      (error) => errorCode(error) === "GOAL_LOCKED",
    );
    assert.deepEqual(jsonRecord(readFileSync(lockPath, "utf8")), live);
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    assert.deepEqual(readdirSync(path.join(stateDir, "lock-history", text(retired))), []);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("concurrent reclaimers recover a process death after stale owner capture", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-owner-capture-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  const moduleUrl = pathToFileURL(path.join(process.cwd(), "builder/goal-harness/lock.ts")).href;
  const spawnRun = (source: string) => new Promise<{code: number | null; stdout: string}>((resolve) => {
    const child = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.on("close", (code) => resolve({ code, stdout }));
  });
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    const crashing = await spawnRun(`import { withGoalLock } from ${JSON.stringify(moduleUrl)};
withGoalLock(${JSON.stringify(stateDir)}, "capture-crash", () => "must not run", {
  faultInjector(phase) {
    if (phase === "after_stale_owner_captured") process.exit(86);
  },
});`);
    assert.equal(crashing.code, 86);
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    const retiredDir = path.join(stateDir, "lock-history", text(retired));
    assert.deepEqual(JSON.parse(readFileSync(path.join(retiredDir, "owner.json"), "utf8")), stale);
    assert.deepEqual(jsonRecord(readFileSync(lockPath, "utf8")), stale);

    const results = await runContenders(stateDir, 8);
    assert.equal(results.filter((entry) => entry.ok).length, 1);
    assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"));
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("every durable retirement boundary is crash-recoverable by concurrent successors", async () => {
  for (const phase of [
    "after_retirement_directory_created",
    "after_stale_owner_captured",
    "after_stale_lock_unlinked",
    "after_stale_retirement_completed",
  ]) {
    const stateDir = mkdtempSync(path.join(tmpdir(), `goal-stale-boundary-${phase}-`));
    const lockPath = path.join(stateDir, "goal.lock");
    const stale = deadLease(phase);
    try {
      writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
      const crashing = await spawnLockProcess(`import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
withGoalLock(${JSON.stringify(stateDir)}, "boundary-crash", () => "must not run", {
  faultInjector(currentPhase) {
    if (currentPhase === ${JSON.stringify(phase)}) process.exit(86);
  },
});`);
      assert.equal(crashing.code, 86, `${phase} was not reached`);

      const results = await runContenders(stateDir);
      assert.equal(results.filter((entry) => entry.ok).length, 1, `${phase}: ${JSON.stringify(results)}`);
      assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"), `${phase}: ${JSON.stringify(results)}`);
      assert.equal(existsSync(lockPath), false, phase);
      const [retired] = readdirSync(path.join(stateDir, "lock-history"));
      assert.deepEqual(jsonRecord(readFileSync(path.join(stateDir, "lock-history", text(retired), "owner.json"), "utf8")), stale, phase);
    } finally {
      rmSync(stateDir, { recursive: true, force: true });
    }
  }
});

test("a successor adopts an already captured dead recovery lease", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-recovery-captured-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = deadLease();
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "prepare", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => errorCode(error) === "TEST_CRASH",
    );
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    const retiredDir = path.join(stateDir, "lock-history", text(retired));
    const recoveryPath = path.join(retiredDir, "recovery.lock");
    const recovery = Buffer.from(`${JSON.stringify({ schema_version: 1, pid: 2147483647, token: "dead-reclaimer", acquired_at: "2026-09-04T00:00:00.000Z" })}\n`);
    writeFileSync(recoveryPath, recovery);
    const archivePath = path.join(retiredDir, `recovery-dead-${createHash("sha256").update(recovery).digest("hex")}.json`);
    const crashing = await spawnLockProcess(`import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
withGoalLock(${JSON.stringify(stateDir)}, "capture-dead-recovery", () => "must not run", {
  faultInjector(phase) {
    if (phase === "after_legacy_recovery_claim_captured") process.exit(86);
  },
});`);
    assert.equal(crashing.code, 86);
    assert.equal(existsSync(recoveryPath), true);
    assert.deepEqual(readFileSync(archivePath), recovery);

    const results = await runContenders(stateDir);
    assert.equal(results.filter((entry) => entry.ok).length, 1);
    assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"));
    assert.equal(existsSync(recoveryPath), false);
    assert.deepEqual(readFileSync(archivePath), recovery);
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("a torn legacy recovery claim is quarantined instead of wedging retirement", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-recovery-torn-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = deadLease();
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "prepare", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => errorCode(error) === "TEST_CRASH",
    );
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    const retiredDir = path.join(stateDir, "lock-history", text(retired));
    const torn = Buffer.from('{"schema_version":1,"pid":');
    writeFileSync(path.join(retiredDir, "recovery.lock"), torn);

    assert.equal(withGoalLock(stateDir, "recover", () => "entered"), "entered");
    const tornArchives = readdirSync(retiredDir).filter((name) => name.startsWith("recovery-torn-"));
    assert.equal(tornArchives.length, 1);
    assert.deepEqual(readFileSync(path.join(retiredDir, first(tornArchives))), torn);
    assert.equal(existsSync(path.join(retiredDir, "recovery.lock")), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("recovery claim disappearance at every inspection boundary never escapes as a raw error", () => {
  for (const injectedPhase of [
    "before_legacy_recovery_claim_read",
    "after_legacy_recovery_claim_read",
    "after_legacy_recovery_claim_captured",
  ]) {
    const stateDir = mkdtempSync(path.join(tmpdir(), `goal-recovery-disappear-${injectedPhase}-`));
    const lockPath = path.join(stateDir, "goal.lock");
    const stale = deadLease(injectedPhase);
    let injected = false;
    try {
      writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
      assert.throws(
        () => withGoalLock(stateDir, "prepare", () => "must not run", {
          faultInjector(phase) {
            if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
          },
        }),
        (error) => errorCode(error) === "TEST_CRASH",
      );
      const [retired] = readdirSync(path.join(stateDir, "lock-history"));
      const claimPath = path.join(stateDir, "lock-history", text(retired), "recovery.lock");
      writeFileSync(claimPath, `${JSON.stringify({ schema_version: 1, pid: 2147483647, token: "dead", acquired_at: "2026-09-04T00:00:00.000Z" })}\n`);

      const outcome = (() => {
        try {
          return withGoalLock(stateDir, "recover", () => "entered", {
            faultInjector(phase) {
              if (phase === injectedPhase) {
                injected = true;
                try { unlinkSync(claimPath); } catch (error) { if (errorCode(error) !== "ENOENT") throw error; }
              }
            },
          });
        } catch (error) {
          assert.equal(errorCode(error), "GOAL_LOCKED", injectedPhase);
          return "locked";
        }
      })();
      assert.equal(injected, true, injectedPhase);
      assert.ok(outcome === "entered" || outcome === "locked", injectedPhase);
    } finally {
      rmSync(stateDir, { recursive: true, force: true });
    }
  }
});

test("a replacement live recovery lease is never removed after dead-lease capture", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-recovery-replaced-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = deadLease();
  const live = Buffer.from(`${JSON.stringify({ schema_version: 1, pid: process.pid, token: "live-reclaimer", acquired_at: new Date().toISOString() })}\n`);
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "prepare", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => errorCode(error) === "TEST_CRASH",
    );
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    const claimPath = path.join(stateDir, "lock-history", text(retired), "recovery.lock");
    writeFileSync(claimPath, `${JSON.stringify({ schema_version: 1, pid: 2147483647, token: "dead-reclaimer", acquired_at: "2026-09-04T00:00:00.000Z" })}\n`);

    assert.throws(
      () => withGoalLock(stateDir, "recover", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_legacy_recovery_claim_captured") {
            unlinkSync(claimPath);
            writeFileSync(claimPath, live);
          }
        },
      }),
      (error) => errorCode(error) === "GOAL_LOCKED",
    );
    assert.deepEqual(readFileSync(claimPath), live);
    assert.deepEqual(jsonRecord(readFileSync(lockPath, "utf8")), stale);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("repeated concurrent stale retirement returns only stable lock outcomes", async () => {
  for (let round = 0; round < 12; round += 1) {
    const stateDir = mkdtempSync(path.join(tmpdir(), `goal-stale-stress-${round}-`));
    try {
      writeFileSync(path.join(stateDir, "goal.lock"), `${JSON.stringify(deadLease(`stress-${round}`))}\n`);
      const results = await runContenders(stateDir);
      assert.equal(results.filter((entry) => entry.ok).length, 1, `round ${round}`);
      assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"), `round ${round}`);
    } finally {
      rmSync(stateDir, { recursive: true, force: true });
    }
  }
});

test("a newly published lock is withdrawn when a retirement barrier appears concurrently", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-retirement-barrier-race-"));
  let callbackEntered = false;
  try {
    assert.throws(
      () => withGoalLock(stateDir, "race", () => { callbackEntered = true; }, {
        faultInjector(phase) {
          if (phase === "after_goal_lock_published") {
            mkdirSync(path.join(stateDir, "lock-history", `goal-lock-stale-2147483647-${"0".repeat(64)}`), { recursive: true });
          }
        },
      }),
      (error) => errorCode(error) === "GOAL_LOCKED",
    );
    assert.equal(callbackEntered, false);
    assert.equal(existsSync(path.join(stateDir, "goal.lock")), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("goal-lock publication crashes never expose an empty or truncated authoritative lease", async () => {
  const phases = [
    "before_goal_lock_stage_write",
    "after_goal_lock_stage_write",
    "before_goal_lock_stage_fsync",
    "after_goal_lock_stage_fsync",
    "before_goal_lock_publish_link",
    "after_goal_lock_publish_link",
  ];
  for (const phase of phases) {
    const stateDir = mkdtempSync(path.join(tmpdir(), `goal-lock-publish-${phase}-`));
    const lockPath = path.join(stateDir, "goal.lock");
    try {
      const crashing = await spawnLockProcess(`import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
withGoalLock(${JSON.stringify(stateDir)}, "publish-crash", () => "must not run", {
  faultInjector(currentPhase) {
    if (currentPhase === ${JSON.stringify(phase)}) process.exit(86);
  },
});`);
      assert.equal(crashing.code, 86, `${phase} was not reached`);

      if (existsSync(lockPath)) {
        const bytes = readFileSync(lockPath);
        assert.ok(bytes.length > 0, phase);
        const owner = jsonRecord(bytes.toString("utf8"));
        assert.equal(owner.schema_version, 1, phase);
        assert.equal(owner.operation, "publish-crash", phase);
        assert.equal(typeof owner.token, "string", phase);
        assert.ok(text(owner.token).length > 0, phase);
      }
      assert.ok(readdirSync(stateDir).some((name) => name.startsWith(".goal-lock-acquire-")), `${phase} did not retain crash evidence`);

      const results = await runContenders(stateDir);
      assert.equal(results.filter((entry) => entry.ok).length, 1, `${phase}: ${JSON.stringify(results)}`);
      assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"), `${phase}: ${JSON.stringify(results)}`);
      assert.equal(existsSync(lockPath), false, phase);
    } finally {
      rmSync(stateDir, { recursive: true, force: true });
    }
  }
});

test("normal goal-lock publication removes its owned staging file and excludes a live lease", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-lock-stage-clean-"));
  try {
    assert.equal(withGoalLock(stateDir, "normal", () => "entered"), "entered");
    assert.deepEqual(readdirSync(stateDir).filter((name) => name.startsWith(".goal-lock-acquire-")), []);

    const markerPath = path.join(stateDir, "holder-entered");
    const holder = spawnLockProcess(`import { writeFileSync } from "node:fs";
import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
const value = withGoalLock(${JSON.stringify(stateDir)}, "holder", () => {
  writeFileSync(${JSON.stringify(markerPath)}, "held");
  process.stdout.write("held\\n");
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500);
  return "released";
});
process.stdout.write(value);`);
    await new Promise<void>((resolve, reject) => {
      const deadline = Date.now() + 2_000;
      const poll = () => {
        if (existsSync(markerPath)) return resolve();
        if (Date.now() >= deadline) return reject(new Error("live holder did not enter"));
        setTimeout(poll, 10);
      };
      poll();
    });
    assert.throws(
      () => withGoalLock(stateDir, "contender", () => "must not enter"),
      (error) => errorCode(error) === "GOAL_LOCKED",
    );
    const held = await holder;
    assert.equal(held.code, 0);
    assert.equal(held.stdout, "held\nreleased");
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("short completion-marker writes are either unpublished or assembled in full", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-complete-short-write-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = deadLease("short-complete-write");
  const staleBytes = Buffer.from(`${JSON.stringify(stale)}\n`);
  try {
    writeFileSync(lockPath, staleBytes);
    const crashing = await spawnLockProcess(`import { withGoalLock } from ${JSON.stringify(lockModuleUrl)};
let chunks = 0;
withGoalLock(${JSON.stringify(stateDir)}, "partial-complete", () => "must not run", {
  faultInjector(phase) {
    if (phase === "before_retirement_complete_write_chunk") return { max_bytes: 1 };
    if (phase === "after_retirement_complete_write_chunk" && ++chunks === 5) process.exit(86);
  },
});`);
    assert.equal(crashing.code, 86);
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    const retiredDir = path.join(stateDir, "lock-history", text(retired));
    assert.equal(existsSync(path.join(retiredDir, "complete.json")), false);
    const partialStages = readdirSync(retiredDir).filter((name) => name.startsWith(".complete-"));
    assert.equal(partialStages.length, 1);
    assert.equal(readFileSync(path.join(retiredDir, first(partialStages))).length, 5);

    let recoveryWrites = 0;
    assert.equal(withGoalLock(stateDir, "recover-short-complete", () => "entered", {
      faultInjector(phase) {
        if (phase === "before_retirement_complete_write_chunk") {
          recoveryWrites += 1;
          return { max_bytes: 1 };
        }
        return undefined;
      },
    }), "entered");
    assert.ok(recoveryWrites > 1);
    const expected = Buffer.from(`${JSON.stringify({ schema_version: 1, stale_lease_sha256: createHash("sha256").update(staleBytes).digest("hex") })}\n`);
    assert.deepEqual(readFileSync(path.join(retiredDir, "complete.json")), expected);
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

function first<T>(values: readonly T[]): T { const value=values[0]; assert.ok(value !== undefined); return value; }
