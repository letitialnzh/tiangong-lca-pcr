import test from "node:test";
import assert from "node:assert/strict";
import { validateV2 } from "./semantic-test-v2.mjs";

test("materialized Flow Sets satisfy the V2 taxonomy and candidate thresholds", () => {
  const result = validateV2();
  assert.deepEqual(result.errors, []);
  assert.equal(result.sets, 8);
  assert.equal(result.groups, 25);
});
