# Current sync-base integration

The fork target advanced to `9b347a173` while this PR was being repaired. This integration preserves its CPC 04 records and all 1,250 accepted mappings, plus the unchanged 63 CPC 54 records and mappings. All 252 CPC 54 source hashes and selected target checks pass.

Search v5 now shares a language dictionary and packs physical search files while preserving the original logical indexes, scores, IDs, records, per-index candidate limits and ranking. Current-base Markdown downloads remain bounded at 64 KiB. Candidate manifest downloads use a 48 KiB bound, and inspector packs target 4 MB with the unchanged 32-record/per-file limits. Full combined-corpus validation is pending; prior transport statistics in `search-v5-review.*` are historical.
