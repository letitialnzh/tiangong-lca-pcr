# Lossless search wire v5 — historical pre-integration validation

This receipt describes commit `aef4c6ae9` against the earlier `58cb897e4` sync baseline. The target branch subsequently advanced to `9b347a173`; its combined-corpus validation supersedes these transport statistics and bounds. The 63 PCR source files remain unchanged.

The documentation job for commit `68228caa9` reached search generation after the translation-state repair, then rejected the Chinese index at 4,009,879 gzip bytes against its unchanged 4,000,000-byte budget. V5 removes redundant JSON framing from term columns while retaining exact engine data.

A term column without literal ASCII spaces is transported as one space-separated string. Native arrays remain for columns containing spaces and for empty columns. Decoding preserves empty terms, Unicode, term order, every score slot and the original posting arrays; header counts bound splitting. The Worker retains v1–v4 readers and rejects malformed or incompatible v5 metadata with a clean retry. No source PCR, tokenizer, ranking rule, result record or provider/search size gate was changed. A separate bounded native-download packing change is described below.

| Language | V4 gzip bytes | V5 gzip bytes | Remaining budget |
| --- | ---: | ---: | ---: |
| en-US | 3,751,865 | 3,692,305 | 307,695 |
| zh-CN | 4,009,879 | 3,938,335 | 61,665 |

All 82 exported shards and 164 native exports passed exact roundtrip and native-fingerprint comparison with the original corpus; 820 sampled real-engine query comparisons preserved hit ordering. All 3,288 full result-record fingerprints also match the pre-v5 corpus and are retained in the JSON receipt. The repeatable audit reads the actual static export, checks manifest byte/gzip counts and SHA-256, restores exports, and re-encodes the identical shipped bytes.

The next full-build gate rejected the original 20,852-file export against the unchanged provider limit of fewer than 20,000 files. Required-language Markdown for unpublished authored candidates may now use the existing native inline download transport up to 49,152 original bytes (previously 32,768); the inline manifest download limit remains 16,384 bytes. Complete byte/filename preservation, same-directory manifest binding, release exclusions, duplicate fallback and all Next navigation payloads remain intact. The verified export has 19,849 files, 1003 fewer. Total physical export bytes changed from 3,051,810,170 to 4,000,028,721; this is a measured file-count/HTML-navigation-size tradeoff, not an aggregate-byte reduction. Synthetic maximum-size native downloads passed in Chromium and Firefox with JavaScript disabled. Local WebKit qualification stalled and is not a pass; final three-engine Linux qualification remains required.

Validation passed: 123 related tests, complete authored-source type checking, the full local production documentation pipeline (generation, Next static export and exported-site verification), and the complete shared SEO artifact check. All 252 recorded file hashes for the 63 PCRs still match the input review; classifications also have no new diff. README and architecture remain accurate and were reviewed.

The separate local `npm run validate` attempt passed runtime, migration, types and lint, but its full test phase encountered unsupported macOS secure-report traversal and missing `pdftotext`. That process tree was stopped after failures: 1,995 passed, 107 failed, 61 cancelled, 74 skipped. This is not a full repository pass or a sealed-release qualification. The final Linux CI remains required.

Reproduce with the pinned toolchain: `npm run docs:build`, then `node docs/reviews/cpc54-sync-20261020/search-v5-audit.mjs`. Detailed metrics, commands, source hashes and limitations are in [search-v5-review.json](search-v5-review.json).
