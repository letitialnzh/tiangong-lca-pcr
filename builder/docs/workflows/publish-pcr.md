# Publish PCR Workflow

Use this workflow when preparing a PCR for published consumption by agents, CLI, or downstream systems.

## Preconditions

- Manifest status is `active` and content maturity is `reviewed_methodology`.
- The required manifest identity contract is complete, and manifest `id` matches English `canonical_pcr_id`.
- English and Chinese Markdown have been reviewed and `translation_status.zh-CN` is `reviewed`.
- Canonical English Markdown is non-empty and its frontmatter declares the manifest PCR id, `language: en-US`, and `sync_with: pcr.zh-CN.md`.
- Chinese Markdown is non-empty and its frontmatter declares the manifest PCR id, `language: zh-CN`, and `sync_with: pcr.en-US.md`.
- English and Chinese ordered rule ids match for system boundary, allocation, and validation, and each group contains at least one rule.
- The requested version is valid semantic versioning.
- `review_metadata` contains no non-empty unresolved or blocking fields.
- `structured.yaml` has been regenerated from canonical Markdown and matches the deterministic projection.
- UUID references do not include dataset versions.
- The [binding review gate](../contracts/flow-binding-contract.md#6-review-gate) has been completed in the selected workspace.
- Data Sources only include external or non-default evidence.
- Validation passes.
- Important flows have range blocks; reviewed or published PCRs must not rely on missing important-flow ranges.

## Steps

Choose the branch that matches the record state.

### First Publication

1. Run `npm run pcr:sync-structured -- --pcr <library/pcrs/...> --workspace current`.
2. Inspect `manifest.yaml` lifecycle and review metadata.
3. If review or translation state must change, run `npm run pcr:lifecycle -- --pcr <library/pcrs/...> --workspace current --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed`.
4. Run `npm run validate`.
5. Choose the first version explicitly.
6. Run `npm run pcr:publish -- --pcr <library/pcrs/...> --workspace current --version <semver>`.
7. Re-run `npm run validate`.
8. Commit the top-level files, `release-history.yaml`, and `releases/<semver>/` together.

### Publishing a Revision

1. Confirm the target was opened with `npm run pcr:revise -- --pcr <library/pcrs/...> --version <target-semver>`.
2. Edit only `revision/pcr.en-US.md`, `revision/pcr.zh-CN.md`, and permitted revision metadata; do not edit the top-level current release.
3. Run `npm run pcr:sync-structured -- --pcr <library/pcrs/...> --workspace revision`.
4. Review the revision with `npm run pcr:lifecycle -- --pcr <library/pcrs/...> --workspace revision --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed`.
5. Run `npm run validate`.
6. Run `npm run pcr:publish -- --pcr <library/pcrs/...> --workspace revision`. Do not pass `--version`; the target is locked in `revision/revision.yaml`.
7. Re-run `npm run validate`.
8. Commit the promoted top-level files, appended history, and new release snapshot together. The successful transaction removes `revision/`.

## Publication Rule

`pcr:publish` runs publication checks before replacing the PCR directory. A failed preflight leaves the managed PCR
unchanged and prints every blocking condition plus the next validation action. A successful publication sets
`status: published`, `content_maturity: published_methodology`, the selected version, publication timestamps, exact
current-artifact hashes, and a freshly generated `structured.yaml`.

Every publication also creates an immutable `releases/<semver>/` directory containing `release.yaml`,
`manifest.snapshot.yaml`, both published Markdown files, and the published projection. It creates or appends
`release-history.yaml`, whose predecessor chain and exact-byte hashes are validated by lint. Never edit a release
snapshot or history entry after publication; corrections require another version.

Publication is a recoverable whole-directory transaction. The builder stages and validates the complete next PCR
tree, records old/new tree digests and a journal under `library/.pcr-builder-state/`, replaces the leaf with
same-filesystem renames, and validates the installed tree. If the command reports incomplete committed-state cleanup,
run:

```bash
npm run pcr:recover -- --pcr <library/pcrs/...>
npm run validate
```

Use `--force-stale-lock` only when ordinary recovery explicitly requires it and no active writer owns the lock.

Publication is an audited lifecycle fact. It does not make unresolved methodology questions acceptable inside PCR content.

Do not use `pcr:bump` on a published or deprecated PCR. Reopening an audited record for a new revision requires the
`pcr:revise` workflow and the storage and transaction rules in
`../contracts/published-revision-contract.md`. Published current files remain immutable while the revision is open.
A deprecated PCR cannot be reopened. Do not create or edit `revision/`, `releases/`, or `release-history.yaml`
manually.
