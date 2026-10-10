---
title: TypeScript Migration and Test Engineering
docType: contract
scope: repo
status: active
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when writing or migrating implementation, tests, build scripts or release scripts
  - when selecting the local or CI validation entrypoint
whenToUpdate:
  - when TypeScript migration boundaries, runtime pins or test qualification change
checkPaths:
  - .nvmrc
  - tsconfig*.json
  - package.json
  - package-lock.json
  - config/typescript-migration.json
  - config/coverage.json
  - tests/agent/**
  - scripts/engineering/**
  - .github/workflows/**
lastReviewedAt: 2026-10-09
lastReviewedCommit: e9b91252307d0345defcb709e819799d1aa6ba42
lastReviewedNote: "Reviewed PCR #107/#108 latest browser failure: explicit manual language switches load the verified exported HTML document directly, preserving counterpart, query/fragment, preference and storage-denial behavior; neutral detection remains unchanged. Guide browser acceptance additionally requires exact main-frame HTTP 200 HTML navigation. Unmarked RSC failures remain blocking; no classifier exemptions, dependency or methodology changes. Fresh full CI and updated independent review remain required."
related:
  - repository-coding-guidelines.md
  - offline-distribution.md
  - pcr-documentation-site-contract.md
---

# TypeScript migration and test engineering

The approved [refactor](https://github.com/tiangong-lca/pcr/issues/69) finishes only
after semantic correctness, complete TypeScript source migration, real artifact
qualification, production publication and exact workspace integration are verified.
[Foundation #70](https://github.com/tiangong-lca/pcr/issues/70) supplies the first
engineering boundary; it does not claim that existing JavaScript has been migrated
or that final coverage targets are already met. [Semantic repair #63](https://github.com/tiangong-lca/pcr/issues/63)
has priority over performance work. Its known missing conditions/actions are not
accepted golden output merely because the old generator reproduces them.

## Source and runtime

New first-party implementation and tests use TypeScript or TSX. Runtime outputs
may contain generated JavaScript and type declarations. Canonical methodology
remains Markdown; schemas/configuration remain JSON/YAML. The existing
`scripts/vendor/workspace-seo/check.py` is an explicitly approved Python exception,
still bound to its upstream manifest. Do not rewrite that vendor snapshot locally.

`.nvmrc` selects exact Node 24.19.0 for `nvm install && nvm use`. The product
manifest must agree; product version and npm 12.2.0 remain owned by
`product-release.json`. `runtime:check` validates the exact development runtime and
supported platform; `runtime:release` additionally requires npm's actual invoking
version to match the release pin. Local package-manager defaults do not establish
release qualification. Windows can provision the same exact runtime without the
POSIX nvm shell; CI uses `setup-node` with `.nvmrc`.

EdgeOne's prebuilt-artifact importer is a separate deployment runtime. Its
`edgeone.json` pins the provider-preinstalled Node 24.18.0; it only verifies and
imports bytes built and qualified with the product's Node 24.19.0 toolchain.
The provider-importer CI lane executes the real import contracts on that exact
runtime, including a manifest produced under the different construction pin.
Do not copy a newer development pin into provider configuration without checking
the provider's available runtimes and a real deployment log. The v0.4.0 attempt
failed before any importer code because the provider could not select 24.19.0.
This separation does not permit rebuilding or changing a sealed artifact.

Native/local targets follow the workspace contract: Linux x64/arm64, Windows x64
and macOS ARM64. macOS Intel is unsupported. CI asserts the actual architecture,
rather than inferring it from a runner label. This does not restrict public web
browsers by CPU.

The root strict TypeScript project covers `scripts/engineering/**`. Separate strict projects cover the remaining runtime boundaries. `tsconfig.core.json` checks the migrated YAML boundary, vocabulary registry, offline-tool builder and their typed contract tests. The site has its own Next TypeScript project. `typecheck:all` generates route types, checks every project with the exact pinned compiler and all strict subflags explicitly enabled, then compares successful compiler file inventories with every tracked and nonignored untracked TypeScript source. Unimported subprocess fixtures and new files cannot silently escape the gate.
`typecheck:node` checks portable Node/Viewer projects using only root dependencies;
web tools and Worker checks additionally use the locked site dependency graph.
Do not use `allowJs`, broad explicit `any`, `@ts-ignore` or `@ts-nocheck` to declare
an implementation migrated. Unknown external data must be validated and narrowed.

Engineering scripts run directly under Node's erasable-TypeScript support; `tsc`
remains a separate mandatory check. `build:engineering` emits the scripts and
declarations; `build:tests` emits both source and tests for compiled-output checks.
The emitted engineering runner selects only the current authored test inventory,
requires each compiled file and disables type stripping. Stale emitted tests are
never discovered by glob, and the schema staging helper is not a test entrypoint.
Relative imports retain `.ts` in source and are rewritten by the compiler. Public-package qualification must test the actual compiled tarballs, including bins,
schemas, workers, relocation and asset paths. Consumers do not need a compiler.

## Migration inventory

`config/typescript-migration.json` records exact legacy source, generated output
and retained Python paths against a reviewed Git baseline. `migration:check` is
read-only and inspects tracked plus untracked nonignored source. New unaccounted
legacy code, missing/stale entries, invalid generated provenance, duplicate paths
and TypeScript escape expansion fail. Do not regenerate the manifest during a
check to accept new legacy code automatically. Remove an entry only with the
corresponding reviewed migration or retirement.

The pinned baseline commit must be available in the checkout; qualification
fetches full history. The checker uses TypeScript 7.0.2's pinned parser API solely
as development tooling. Its unstable API is not a public PCR dependency. Compiler
upgrades must rerun parser-boundary and negative fixtures before changing the pin.

Ignored build/review artifacts are not authored source. The source gate requires
zero remaining authored JS/MJS/CJS entries. Generated assets and the Python SEO
exception remain explicitly classified. An existing generated search Worker is
checked against fresh pinned-compiler output without modifying the artifact.

## Validation commands

Full validation currently requires Linux: existing Goal Harness artifact operations use descriptor-anchored `/proc/self/fd` traversal and intentionally fail closed on other hosts. The Harness retains this qualified platform capability boundary. Portable engineering, documentation and installed-package suites are separately available on the supported consumer platforms. Do not silently skip Linux-required tests and report a complete local run.

From a clean Linux source checkout install both currently separate dependency graphs:

```sh
nvm install
nvm use
npm install --global npm@12.2.0
npm ci
npm --prefix packages/pcr-docs ci
node node_modules/playwright/cli.js install --with-deps chromium firefox webkit
npm run validate
```

Root `validate` checks runtime, migration inventory, all scoped TypeScript projects,
whole-library lint and the complete test selection. Root `npm test` includes the
site transformation tests previously invoked separately. `test:list` reports
deterministic suite membership; every discovered test belongs to exactly one base
suite, and unclassified tests fail discovery. Aggregate `all`/`root` selections do not duplicate
test files and still include the full-corpus test. `test:offline:portable` explicitly
selects the compact offline tests; it does not claim complete corpus qualification.
New test placement/names must satisfy the suite contract.

| Command | Scope |
| --- | --- |
| `test:unit`, `test:contracts` | Pure operations and externally visible contracts |
| `test:integration`, `test:recovery` | Storage/process boundaries, transactions and failure recovery |
| `test:docs` | Site transformation, completeness and build-storage cases |
| `test:offline` | Complete offline suite, including independent full-corpus qualification |
| `test:offline:portable` | Compact real-builder SQLite, reader, packing and network-free installation contracts |
| `test:product` | Product sealing, publication and importer contracts |
| `test:engineering` | Runtime, migration and test-discovery boundaries |
| `test:browser` | Compiled Viewer interaction in Chromium, Firefox and WebKit |
| `test:engineering:compiled` | Complete emitted engineering tests with type stripping disabled |
| `test:coverage` | Fresh full test/build collection and complete source-accounted coverage gate |
| `docs:build` | Full static export/source/provider validation |
| `docs:browser -- --root <export> --report <new-dir>` | Actual full export in three browsers at desktop/mobile widths |

The test runner gives subprocesses one owned canonical temporary root and cleans
it after completion or failure. This avoids macOS `/var` aliases confusing
no-follow and source-identity tests; it never relaxes production path checks or
canonicalizes user-supplied artifact paths on their behalf. Preserve useful test
logs separately from disposable fixtures.

Cooperative POSIX signal forwarding has a real subprocess test. Windows
`process.kill(SIGTERM)` terminates its target without invoking that handler, so
that specific case is explicitly reported as unsupported there. Ordinary child
failure/status propagation and temporary-root cleanup still run on Windows.
Forced termination on any platform can prevent cleanup; preserve the owned path
for explicit recovery instead of claiming that a finally block always ran.

The complete source-accounted coverage command inventories every first-party
runtime TS/TSX module through `config/coverage.json`. Tests, generated vocabulary
and parser-proven type-only modules have explicit exclusions; unknown authored
extensions fail discovery. Ordinary Node execution and actual compiled package
execution receive credit only when executed bytes, source maps and canonical
source hashes agree. Unknown or modified relocated fixtures receive no credit
and remain in the rejection ledger; a claimed canonical source mismatch fails.
Unobserved browser/Next/TSX modules stay in the denominator at zero.

The gate uses pinned c8/v8-to-Istanbul/Istanbul semantics: lines/functions 90%,
branches 85%, and every declared critical compiler/integrity/transaction file 95%
branches. These are runtime named-function and block-range metrics, not a census
of every source-level conditional or anonymous callback. Unobserved modules use
the standard zero-hit empty-report function/root-branch placeholder. An AST
function census is reported separately, never mixed into the gate denominator.
Type/comment-only lines are filtered through a reviewed parser/emission census.
Authenticated V8 process ranges are merged before conversion. Converting each
process first lets an import-only module's positive enclosing range inflate
nested branch hits during Istanbul merging. Each file uses one authenticated
measurement surface, preferring native TS when present; separately verified
emitted execution remains functional evidence, not a second merged branch score.
All declared critical semantic and recovery scenarios remain mandatory regardless
of percentages. A passing metric does not certify methodology or all product
behavior.

The collector retains script bytes/maps before temporary fixtures are deleted,
and leaves its inspector session attached until Node's native coverage flush.
Disconnecting in an exit handler loses detailed untaken branches on pinned Node24;
a real one-branch execution regression must reject a false 100% result. Reports
bind source commit, content inventory, configuration and runtime before and after
the run. Collect only from a frozen clean checkout. `test:coverage` requires fresh
`.reports/coverage/tests` and `.reports/coverage/docs` paths; use explicit
`coverage:collect`/`coverage:report` paths when retaining previous runs. `inspect` preserves incomplete
results without claiming threshold success; `report` enforces the gates. Keep raw
V8/capture evidence and the explicit rejection/unobserved-file ledgers.

PR and formal release qualification build one sealed product bundle in the
documentation job. Four platform jobs download that same immutable artifact ID,
verify its identity and checksums, install both tarballs with an empty cache and
no network, then execute compiled bins with type stripping disabled against the
pinned SQLite. A separate job extracts the same sealed web archive and runs the
three-browser desktop/mobile matrix. Neither helper rebuilds or repacks its
inputs. Candidate bundles carry the exact tested source commit; only the guarded
formal tag workflow may publish. Artifact qualification is separate from live
npm/EdgeOne acceptance.

`qualify:sealed` and `qualify:web` require `--bundle <existing-dir>`,
`--expected-source <full-commit>` and `--report <new-external-directory>`.
Their receipts preserve source/artifact identities, observed checks and cleanup;
failed checks never replace prior evidence. The sealed-consumer report also records
actual Node/npm/platform/architecture and command timing/bytes. An explicitly
expected CI architecture must match the actual process, not just its runner label.

Bounded agent workflow scenarios live in `tests/agent/scenarios.json`. The retained
`evaluation-5ce04eae.json` records one installed development-candidate trial and
independent source-span review: authoring, conditional allocation, unmapped
classification and complete batch/failure output. Fourteen actual CLI calls
include failures/retries; saved complete output avoids truncation. This is neither
a blind model evaluation nor a statistical accuracy or general speedup claim.
Formal sealed artifact and live publication evidence remain separate.

## CI qualification lanes

`.github/workflows/validate.yml` freezes an exact-source CI decision with
`scripts/engineering/ci-plan.ts`. The stable `validate` job is the aggregate gate:
`scripts/engineering/ci-gate.ts` requires every job selected by that decision to
succeed and rejects unexpected skips, missing jobs and failed jobs. Local
`npm run validate`, `npm test` and `all`/`root` remain complete entrypoints.

Full qualification partitions the entire discovered test inventory into eight
fixed shards: `harness`, `core`, `builder`, `consumer`, `docs`, `engineering`,
`corpus` and `general`. `scripts/engineering/qualification-plan.ts` records test
paths and hashes, source HEAD and content hash, configuration hash, Node version,
plan hash and a fresh qualification ID. Each shard verifies the frozen plan
before and after execution and produces a successful receipt for its exact
membership; an empty shard still requires an explicit receipt. Missing,
duplicate, changed or foreign-invocation receipts fail verification. New tests
must be classified and included exactly once.

The `corpus` shard runs `packages/pcr-core/full-corpus.offline.test.ts` without
coverage instrumentation. It independently builds the complete current corpus
twice, compares SQLite and sidecar bytes, and verifies record membership,
required modules and classification artifacts, alias identity, stored source
bytes, checksums and SQLite integrity. Its mandatory successful receipt proves
functional qualification and contributes no CI coverage numerator. Compact
behavioral tests use real catalog/SQLite builders and compiled packages against
a bounded representative source; the full-mode portable matrix uses
`npm run test:offline:portable` on Linux x64/ARM64, Windows x64 and macOS ARM64.

The other seven shards and the complete documentation build produce fresh raw
measurements. `coverage:collect` binds each planned measurement explicitly with
`--qualification-plan <plan.json> --selection <shard|documentation>` before the
normal `-- <command...>` argument. `scripts/engineering/coverage-ci.ts` verifies
all eight execution receipts and the exact isolated set of measurement artifacts,
then the coverage engine checks the qualification ID, plan hash and selection
alongside source/configuration/runtime identity and authenticated bytes/maps.
Keep shard raw/capture directories separate; flattening them can collide on
process identities. Complete source denominator, critical scenarios and existing
thresholds remain mandatory. A receipt or an instrumentation request alone is
not raw coverage evidence.

The reduced `data` lane is available only for a proven nonempty PR/main-push diff
containing changed canonical PCR records. Its allowlist covers the four current
files (`manifest.yaml`, `structured.yaml`, `pcr.en-US.md`, `pcr.zh-CN.md`), with
supported associated catalog/material index, CPC 3.0 mapping/coverage, alias
registry and `docs/adr/NNNN-<slug>.md` decision evidence. An ADR-only or derived-only
change selects full mode. Unknown paths, shared modules, classification-system
sources, code, schemas, vocabularies, dependencies, workflows, release history,
revision workspaces and optional language files select full mode. Missing,
unproven or non-ancestral base history also selects full mode. Reusable invocation
or declared reusable inputs always select full mode, including an empty
`product_tag`; a tag's truthiness never reduces formal release qualification.

Both modes run runtime/migration/strict type checks and complete global lint,
alias/catalog/chain freshness and source-history invariants. Changed current PCRs
also pass `pcr:check` and exact deterministic canonical-Markdown projection
comparison through `scripts/engineering/ci-content.ts`; removals are recorded
explicitly and still require the global invariants. Both modes build the full
real website and sealed tool/SQLite/web product from the current source, run SEO
verification, install the exact seal on all four platforms and qualify its
extracted web bytes in the three-browser desktop/mobile matrix. These checks
retain scientific, translation and immutable-history boundaries.

The data lane omits full code-test/coverage qualification and reports
`not-measured-data-only-lane`. It does not claim a passing full source coverage
gate or reuse previous receipts. Manual `npm run test:coverage` still collects
complete `all`/`root` test execution and the documentation build; it is a separate
complete measurement, not the CI policy that leaves corpus execution
uninstrumented. Use the plan/run/verify and explicitly bound collection helpers
when reproducing CI qualification.

Coverage artifact discovery is bound to the current run and attempt. After a
failed shard, start a fresh complete qualification attempt with its own plan,
all receipts and all required measurements. Rerunning only failed shards cannot
combine previous-attempt artifacts into a complete qualification. Publisher-only
retry or resume of an already qualified immutable bundle remains governed by
the existing publication contract and is a separate operation.

## Delivery and scientific boundaries

Each source phase targets PCR `main`, receives independent review and required CI,
then integrates its exact eligible commit into root. First-party language changes
do not change canonical PCR readiness, translation review or immutable release
history. Existing receipt, lock and recovery state compatibility is explicit in
each affected phase. The final unified product release builds once and publishes
the same verified artifacts through the existing npm/EdgeOne workflow; no product
version is bumped merely to establish this foundation.

## Compiled runtime transition

The first runtime migration replaces the core YAML parser, vocabulary registry
and offline-tool builder with TypeScript. The foundation initially used an explicit legacy transport bridge; the consumer
cutover removes it. `tsconfig.runtime.json` now emits only strict TypeScript into
an owned package stage. The core, semantic and consumer projects check their
implementation and tests independently. Final refactor completion still requires
zero authored legacy entries across the remaining repository surfaces.

Relative TS imports are rewritten to emitted JavaScript; the
public tool has executable bins, original schemas/Skill/licenses, runtime-only
locked dependencies and deterministic source maps with embedded source content rooted at `pcr://source/`.
No caller needs TypeScript in `node_modules`, and installed tests explicitly disable
Node's type stripping. Compiler/staging failure removes only owned staging files.
The Git-connected provider importer retains its dependency-free module graph;
a clean dependency-absent import probe verifies that boundary.

## YAML boundary

`packages/pcr-core/src/yaml-lite.ts` retains the API names but uses pinned `yaml`
2.9.1 to read one complete YAML 1.2 document into JSON-compatible data, with one explicit PCR compatibility rule: untagged leading-zero scalar spellings remain identifier strings; explicit numeric tags opt into numeric conversion. Folded
plain continuations, quoted escapes/newlines, block scalars and collections are
preserved. Duplicate keys, unresolved/unsupported tags, multiple documents,
complex keys and nonfinite values fail with positioned diagnostics; no partial
mapping is returned. UTF-8 file decoding is strict. Empty documents retain the
legacy empty-object result; explicit null remains null.

Acyclic aliases become independent JSON value copies. Cycles, more than 100
expanded alias visits and collection nesting beyond 100 are rejected at a source
position. These are parser expansion guards, not aggregate build-size budgets.
Existing anchored manifests require no source rewrite. Prototype-related keys
are data properties and cannot change an object's prototype.

The renderer preserves existing deterministic formatting for ordinary data,
including legacy undefined-to-null encoding. Nested empty collections and unusual
keys roundtrip correctly. Functions, exotic objects, accessors, symbols, sparse
arrays, cycles and nonfinite output values fail instead of silently losing data.
The vocabulary registry retains its richer filename/key-path duplicate report
and aggregates parser failures; valid registry data remains deeply frozen.

## Normative migration boundary

The typed Markdown parser, serializer, projection integrity, source-context compiler and guidance selection replace their inventoried legacy modules. `tsconfig.semantic.json` checks these implementations and their independent contracts. The consumer phase replaces the remaining core APIs and removes the fixed-URL legacy selection adapter. `tsconfig.consumer.json` checks the complete consumer, CLI, offline-library builder and their TypeScript tests. New generated source context is governed by [the semantic contract](semantic-projection-contract.md).

## Consumer runtime cutover

The consumer core, SQLite reader, CLI and offline-library builder use strict TypeScript. The runtime compiler now includes only TypeScript sources and no longer enables the legacy `allowJs` transport bridge. Generated npm bins are `.js`; consumers run them without a compiler or Node type stripping. Site, Viewer and release sources have also migrated; the inventory now contains zero authored JavaScript entries.

Read sessions own their source scope and handles. Repository sessions bind selected current-artifact bytes and recheck before returning; SQLite sessions retain one readonly transaction. Bounded caches belong to one synchronous callback and cannot escape as reusable validation receipts. Session tests cover source isolation, mutated inputs, eviction, closure, and ordered all-or-error batches.


## Browser source and interaction qualification

Browser entrypoints use TypeScript under separate DOM and Web Worker projects;
Node release/importer tooling remains in its own runtime type environment.
`tsconfig.viewer-browser.json` and `tsconfig.docs-worker.json` emit reviewed browser
assets with the pinned repository compiler. HTML/worker URLs retain their existing
JavaScript filenames. Browsers receive emitted JavaScript, never TypeScript source.

The `browser` suite is an explicit part of `all`/`root`, using the existing Node
test runner and pinned Playwright library rather than a second test-runner contract.
Install its exact matching engines with `npm run browser:install`; Linux CI uses
Playwright's `install --with-deps` so missing system libraries fail qualification.
Tests exercise the actual compiled Viewer assets in Chromium, Firefox and WebKit:
lazy detail fetch, literal filtering, language selection, escaped Markdown,
keyboard tabs, retained snapshot links, mobile overflow and stale selection races.
Fixture servers bind only loopback ephemeral ports and are closed together with
browser processes; compiled temporary assets are removed. Diagnostic screenshots
and request/error logs remain in `.reports/browser` and are uploaded by CI.
These deterministic transport fixtures do not replace final browser acceptance of
the exact extracted production web artifact.


## Builder and Goal runtime cutover

Builder and Goal implementations, command entrypoints, fixtures and tests now use
strict TypeScript. `tsconfig.builder.json` covers the complete Builder graph and
the retained synthetic recovery replay. Package commands invoke `.ts` source;
Node type stripping does not replace the mandatory compiler gate. The generated
controlled vocabulary is `.ts`, checked against the same authored YAML and JSON
schema. Stable serialized generator identities remain unchanged even where the
physical command filename changed.

Persisted Goal records keep their original hashes, optional fields and legal null
absence markers. In particular, cleared failure/model metadata and failed review
nodes must remain readable without turning a content or measurement failure into
a generic error. A null review node never certifies a passed check. Historical
unavailable telemetry remains unavailable; it is not converted to zero. Trial
control fingerprints follow the executing TypeScript/emitted format, so changed
runtime bytes require normal protocol-drift review before further dispatch.

Whole Harness qualification remains Linux because evidence sealing requires
its descriptor-anchored filesystem operations. Portable Git planning, report
assembly, CLI and recovery subsets also run on supported developer hosts; ADR
allocation uses Node filesystem enumeration instead of GNU-specific `find`.
The synthetic recovery replay compares a fixed archived pre-recovery runtime to
the current runtime without production tasks or network evidence, writing a new
owned report rather than replacing the retained historical receipt.

## Site and release runtime cutover

The documentation generator, verifier, resource/storage checks, Viewer publisher,
unified release publisher and dependency-free provider importer are TypeScript.
The provider executes erasable TypeScript on pinned Node 24 and imports the sealed
archive; it never installs a compiler or rebuilds the frontend. Browser entrypoints
are compiled before export. PostCSS uses declarative JSON configuration.

Pinned Goal Viewer publication resolves one coherent module pair from its captured
source. New captures declare `.ts` in `scripts/publisher-source.json`; that
validated marker selects exactly one pair and never falls back on a missing pair.
Historical captures without a marker prefer `.mjs` over a coexisting typed port,
preserving their original producer bytes; TS-only/emitted captures remain readable.
It never mixes formats.
Historical source remains executable without rewriting its captured commit. Runtime
overlays include the pinned compiler configuration and dependency lock. Publisher
attempt receipts preserve existing additional audit fields while rejecting identity
conflicts.

Chinese search handles Han text even when a browser segmenter marks it non-wordlike;
other punctuation/non-word segments keep their previous exclusion. Ordered tokens
for the complete existing Node-built index remain unchanged. Browser acceptance
must use a freshly built export with exact source provenance; a worker-only diagnostic
overlay is not release evidence.

`docs:browser` reads an existing export and never rebuilds it. Its new evidence
directory must be outside the export. The receipt records exact file-tree hashes,
source identity, browser versions, all selected routes and screenshots, and checks
that export bytes remain unchanged. Page-route assertion failures are recorded
while subsequent route cases continue; missing engines or required input fail rather than skip.
The final CI uses this browser engine through `qualify:web` on the extracted sealed archive, after verifying the exact candidate tree.
The Chinese and English getting-started guides are planned routes in that same
desktop/mobile matrix. Checks cover language-matched home entry, verified guide
counterpart switching, one main navigation entry per section, localized copying
of displayed prompt text, clipboard-denial feedback and guide search/navigation.
Counterpart switching must observe a main-frame document navigation to the exact
target URL, HTTP 200 and HTML before checking the target language and authored
guide content. An eventual successful page does not excuse an unmarked failed RSC request.
Clipboard transport is mocked for repeatable cross-browser acceptance; no host
clipboard permission or live website publication is claimed by those checks.


The same browser/viewport matrix checks neutral-entry language negotiation,
manual preference persistence, explicit localized URLs, document counterparts,
query/fragment retention and denied storage. Probes called unsupported are selected
against the actual emitted language registry; bounded probe exhaustion tests absent
browser language information instead. Regional expectations and HTML language
assertions use the emitted route/code mapping, including optional translations.
Language-preference failures fail qualification and are retained in the receipt;
completed matrices preserve their checks and specifically classified prefetch aborts.

Browser request receipts retain engine, viewport, exact URL, method, resource
kind, navigation flag, observed HTTP status, start/failure timestamps and phases,
actual page URL, and an allowlist of routing/prefetch headers. Cookies and
credentials are not collected. Partial language-preference evidence survives
failure. Diagnostic capture copies only the explicit scalar context fields; it
never retains an evidence object or its request-failure array, so the complete
partial receipt remains serializable. The classifier accepts only the pinned engine's exact cancellation
reason (`net::ERR_ABORTED`, `NS_BINDING_ABORTED`, or WebKit `cancelled` /
`Load request cancelled`), a non-navigation GET/HEAD fetch/xhr/other request,
no failed observed HTTP response, and explicit prefetch metadata. A successful
HEAD probe additionally may use an observed explicit same-origin/path segment
prefetch companion. An RSC URL or header alone is insufficient. Unknown reasons,
missing metadata, document/asset/navigation failures and failed HTTP responses
remain blocking; case counts and functional assertions are unchanged.

The Playwright [Request contract](https://playwright.dev/docs/api/class-request)
and pinned [Firefox network implementation](https://github.com/microsoft/playwright/blob/v1.63.0/packages/playwright-core/src/server/firefox/ffNetworkManager.ts)
provide request identity and engine cancellation semantics. Exact WebKit strings
and prefetch evidence were also reproduced against the pinned browser runtime in
[PCR #106](https://github.com/tiangong-lca/pcr/issues/106#issuecomment-6064168510).
Historical failed receipts lacking those fields are not retroactively qualified.

Successive Goal runtime overlays compare both the original Goal baseline and the
actual receiving runtime tree. They retain the original receipt behavior while
restoring unchanged source-format markers and deleting legacy modules introduced
by an intervening runtime; canonical PCR content remains outside the allowlist.
