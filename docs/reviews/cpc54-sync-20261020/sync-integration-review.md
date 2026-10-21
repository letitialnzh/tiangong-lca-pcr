# Current sync-base integration and lossless v5 review

Latest content review: [fresh per-PCR assessment of all twelve principles for63 PCRs](full-twelve-principle-recheck.md). Its756 records distinguish reviewed judgments, unresolved identities, source-confirmation gaps and repairs; they are not756 unconditional passes. One additional material emission-applicability ambiguity in54740 is repaired, while four specified source confirmations remain inconclusive. Earlier review conclusions and transport/build measurements below are historical and pinned to their stated commits.

The fork target advanced to `9b347a173` during this repair. Merge `09ade4746` preserves the target's CPC 04 contents and all 1,250 accepted mapping edges, together with this PR's then-unchanged 63 CPC 54 PCRs and mapping edges. That integration verified its 252 source-file hashes and 63 selected target checks; current fingerprints and later repairs are in the twelve-principle review. Coverage reads back 1,313 mapped and 1,564 unmapped of 2,877 leaves.

## Lossless transport

Search v5 uses one first-encounter dictionary and one physical index pack per language. Its original logical indexes, tokenization, every score slot and posting ID, complete result records, thirty candidates per index and final ranking remain intact. Producer-side pre-encoding hashes and the independent corpus audit verify exact native export and record restoration for every logical shard; engine query comparisons match reconstructed v4 data. Legacy v1–v4 and ungrouped v5 remain readable.

| Language | Logical indexes | Physical packs | v4 gzip bytes | v5 gzip bytes, including manifest | Reduction |
| --- | ---: | ---: | ---: | ---: | ---: |
| en-US | 48 | 1 | 3,963,825 | 3,770,967 | 4.87% |
| zh-CN | 42 | 1 | 4,216,959 | 3,898,324 | 7.56% |

The v4 comparison uses the same current corpus, logical boundaries and complete records. Its total is the sum of original per-index gzip payloads; v5 charges its physical pack once plus the entire dictionary-bearing manifest. This is a search-transfer reduction, not a claim that restored engine memory or the entire deployment shrinks.

Native required-language Markdown downloads retain the sync baseline's 64 KiB bound. Eligible candidate manifests now allow 48 KiB; inspector packs target 4 MB with the unchanged 32-record bound. All original source bytes, eligibility/source binding, filenames, historical/structured physical downloads and native Next navigation payloads remain required. This packaging reduces physical file count at the cost of larger inline page/navigation payloads. Provider limits are unchanged.

## Verification

Full `npm run docs:build` at `09ade4746` passed: 1455 PCRs, 3497 pages, 19,976 files and 5,252,316,747 deployment bytes; largest file 13,426,808 bytes. Peak measured process-tree RSS was 3,040,509,952 bytes; build duration 52057.6 seconds (wall-clock time spanning an overnight wall-clock gap, not a continuous CPU benchmark). The original fewer-than-20,000-file, less-than-25-MB-file, 6-GB-memory and per-language 20-MB-raw/4-MB-gzip gates all pass.

All 140 focused tests and strict types for 419 authored files passed. Shared SEO checked 3482 sitemap URLs with zero findings. Chromium and Firefox, with JavaScript disabled, downloaded a 48-KiB manifest and both 64-KiB required-language Markdown files with exact bytes and filenames. The prior local WebKit runtime did not qualify; complete Linux CI and sealed browser qualification remain required. Earlier full local repository validation was failed/incomplete because of unsupported secure no-follow traversal and missing `pdftotext`; it is not reported as a pass.

Only this fork's PR branch is updated. No upstream branch or publication is changed. Detailed measurements, code hashes and limitations are in `sync-integration-review.json`. The older `search-v5-review.*` measurements describe the pre-integration corpus and remain historical.

## Contract-check repair

Run #40 failed `migration:check` with `UNINVENTORIED_JAVASCRIPT`: the newly committed audit was an authored `.mjs` file. It is now `packages/pcr-docs/scripts/cpc54-search-v5-audit.ts`, covered by the existing strict web-tools project. Parsed external data is narrowed and the pinned typed engine import replaces untyped module loading. No legacy exception or checking suppression is added.

Runtime, migration (zero authored JavaScript; 420 TypeScript files), complete strict types, whole-library lint (zero problems; existing nonblocking warnings retained), all 63 selected content checks and canonical-source projection byte comparisons pass locally. Emitted engineering tests report 142 passed, zero failed and one native-Windows-only skip on macOS. Re-running the converted audit against the existing real export reproduces all prior measurements and hashes exactly. No PCR content or production transport code changed; the full-build measurements above remain bound to `09ade4746`. New Linux CI remains required.

Reproduce the current corpus audit from the repository root with the pinned runtime: `node packages/pcr-docs/scripts/cpc54-search-v5-audit.ts`.

## Twelve-principle follow-up

The subsequent review of `e343452d70599cfaeb0172c13ba5bf9e7a702d9d` records 756 individual criteria, repairs five substantive defects/ambiguities and two wording references in eight PCRs, and retains all 497 atomic cards, 1021 conditional obligations and source entries. Fresh selected checks pass 63/63 with 2674 measurement checks and no skips. Five reused flows and all 63 reference support chains were reread; reference product identities remain unresolved. Mappings remain the exact union of 1250 base and 63 narrower accepted edges. Local aggregate validation passed static stages but failed/incomplete on macOS after Goal safe-traversal failures; no complete test-suite pass is claimed. Workflow41 for the prior input finished successfully; the new commit needs its own CI. Production v5 transport is unchanged by this follow-up.

## Second principle recheck

The recheck of `768391b8a` finds one additional calculation error and two material ambiguities: sampler-caught mass used as event emission in 54652, incomplete source-coverage definitions in 54710, and potential duplicate capture correction in 54222. All three are repaired in both languages and official projections; existing cards, conditional obligations, ranges and UUID bindings are preserved. All 63 targets pass again. The required aggregate invocation reaches full-library lint but is bounded at 240 seconds, so no full lint/test-suite pass is claimed. See [the current bounded recheck and remaining limitations](principle-recheck-2.md); earlier review receipts and build measurements above are historical, not fingerprints or fresh builds of these latest files. This review does not establish the absence of all principle errors.

## Third principle dependency recheck

The recheck of `a18de4eb1` finds two further material applicability gaps: 54710 allowed a whole-build IGU mass factor without explicit complete-constituent/current-state coverage of the actual waste stream; 54652 allowed installed geometry times same-grade density without an explicit matching compression/physical state. Both are repaired in English, Chinese, raw collection contracts and official projections. These are counterexample-supported risks, not asserted observed site miscalculations or new empirical factors. The other 61 PCRs remain byte-identical to the input. All 63 target checks pass again (2674 performed, zero skipped, 267 nonblocking range warnings); 497 cards, 1021 conditional requirements, ranges, UUIDs and mappings remain unchanged. Prior repairs are retained. Required root validation passes static stages but is bounded at 240 seconds during full-library lint; full lint/test-suite/build success is not claimed. See [the third review](principle-recheck-3.md) for per-PCR anchors, fresh fingerprints, source-acquisition and identity limits. No upstream write, merge or publication.

## Fresh complete twelve-principle recheck

All63 PCRs at input `9efb3065d` were separately assessed against all twelve user principles, with current facts, bilingual anchors, dispositions and input/final fingerprints for each of756 criterion records. One additional material ambiguity in54740 could allow a sampler/partial-source mass to stand for whole-event release, or an air-exhaust carrier basis to be misapplied to a different receiving medium. The repaired rule and five node protocols require full source/event coverage, representative background-corrected air concentration and compatible full source flow/time or independently supported total mass; other media require a validated actual method with its original operands. English, Chinese, validation and official projection agree. The added EPA reference supports only the sample/source distinction; no installation emission factor or numerical default is adopted.

All63 selected target checks pass (2674 performed, zero skipped,267 existing nonblocking range warnings). The other62 PCRs remain byte-identical to the input. All497 atomic cards,1021 conditional obligations, existing ranges, UUID bindings, reference definitions, nodes, allocation and old source entries are preserved. Five used flow identities and63 support chains were freshly reread; reference product identities remain explicitly unresolved. Bounded original/source passage checks include newly read retained PERI2.2 pages and the exact Ecophon IG402 original. Four specified source confirmations remain inconclusive (54290,54320,54330,54341); receipt, search snippet or checker success is not substituted for confirmation. Root validation passed static stages and was bounded at240 seconds during full-library lint; full lint, test-suite, new site build or new-head CI success is not claimed. No upstream write, release or merge. See the [full review](full-twelve-principle-recheck.md) and its JSON for actual evidence, scope and limits.
