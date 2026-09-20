---
title: PCR Classification Policy
docType: policy
scope: repo
status: draft
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when importing classification sources
  - when mapping external classification codes to canonical PCR ids
  - when adding a new classification system
whenToUpdate:
  - when source retention rules change
  - when classification import or legacy compatibility mode changes
  - when mapping relation types change
  - when classification systems are added or removed
checkPaths:
  - docs/classification-policy.md
  - AGENTS.md
  - .docpact/config.yaml
  - builder/**
  - classifications/**
lastReviewedAt: 2026-07-14
lastReviewedCommit: 41e00bafd03530af7871e4620e59862dd779473e
---

# Classification Policy

Classification systems are maintained as external indexing layers. A classification leaf is coverage input, not
canonical PCR identity, and must not automatically create a PCR record. A canonical PCR is created only when a
semantic product boundary and material methodology require a reviewed record that can be mapped from one or more
classification leaves.

Accepted positive mapping relation types are:

- `exact`
- `broader`
- `narrower`
- `proxy`

`manual_review` is a coverage-assessment state, not an accepted positive edge.

## Source Handling

Classification imports should keep the official source artifact under `classifications/systems/<system>/<version>/raw/`
with source metadata and checksum. Normalized files under the same system/version directory may be regenerated from
the raw source. `import-cpc` is the canonical CPC entry point and requires an explicit `--source` every time. Its
default classification-only mode writes raw/metadata/normalized artifacts, creates zero PCR records, creates a
zero-edge current mapping document when the mapping is absent, and validates then preserves the exact bytes of an existing
mapping. A non-3.0 version must have a coverage descriptor registered before import.

A retained raw filename is evidence identity, not a replaceable cache key. If an import supplies different bytes under
that name, it fails closed; use a distinct source artifact name and review the regenerated source metadata instead.

One CPC import owns the system/version coordinate lock. Managed sources and baselines are read without following
symlinks, the baseline is compared again before installation, and each file replacement or complete legacy directory
is staged before installation. Mapping is the last committed artifact, so a failed or concurrent import cannot leave
a dangling new edge; classification-only projections installed earlier remain deterministic regeneration outputs.

The `scaffold-cpc` name is a fail-fast compatibility alias and requires explicit `--legacy-scaffolds`. That
migration/test-only mode is forbidden for new imports and may operate only on retained v1/scaffold mapping fixtures.
A current v2 mapping makes it fail before mutation, so it cannot append an unaccepted edge or rehydrate a retired
leaf-derived PCR directory. On a v1 fixture, it may create a complete four-file PCR scaffold only if the target is
absent; an existing target must be complete and match the expected deterministic legacy template byte-for-byte.
Partial or divergent targets fail closed. The mode must not overwrite an accepted edge or PCR content.

Mappings under `classifications/mappings/` are the maintained edge input from external codes to canonical PCR ids.
Repository current mappings use `schema_version: 2` and `status: current`; they contain accepted positive edges only.
Every edge points to a material PCR and carries `acceptance.status: accepted`, `decided_by`, a strict UTC
`decided_at_utc`, and a durable `decision_ref`. CPC 3.0 contains exactly three accepted edges (`01111`, `04412`, and
`04911`); CPC 2.1 is empty v2. Adding another classification system always adds source and coverage inputs; add
mapping edges only for reviewed semantic matches, never by copying a PCR tree or manufacturing one edge per leaf.

External classification codes must not become PCR directory names. If two classification leaves resolve to the same semantic PCR, map both leaves to that PCR id. If two different PCRs would otherwise share the same semantic slug, disambiguate with a short stable hash or a clearer semantic qualifier, not with the classification code.

## Coverage Read Model

Classification coverage and the PCR catalog answer different questions:

- the material PCR catalog lists canonical methodology records;
- a classification coverage index accounts for every normalized leaf and records its current mapping/readiness state.

Coverage indexes under `classifications/indexes/` are deterministic derived read models. They combine normalized
classification leaves, mapping input, PCR lifecycle state, and explicit migration/assessment state for consumption by
`pcr-core` and the public CLI. Their source descriptors bind the generator contract and the exact bytes of
both inputs. They do not replace the normalized source or mapping files as authoring truth and must be regenerated when
those inputs change.

Each known leaf has one coverage status: `mapped`, `unmapped`, `candidate_suggestion`, `manual_review`, or `unknown`.
Only `mapped` selects a canonical PCR, and it requires a schema-valid accepted v2 edge whose target is a material
lifecycle pair. The coverage entry projects the acceptance decision, and runtime resolution compares that evidence
with the canonical mapping before selection. Candidate suggestions and manual-review targets are evidence, not
accepted identity edges, and must never be selected automatically. CPC 3.0 coverage remains complete at 2,877
leaves: 3 mapped, 2,874 unmapped, and 0 unknown.

Use the public CLI to inspect coverage without loading the methodology catalog:

```bash
npm --silent run tiangong-pcr -- coverage summary --classification cpc:3.0 --format json
npm --silent run tiangong-pcr -- coverage list --classification cpc:3.0 --page 1 --page-size 10 --format json
```

`coverage list` is paginated. `resolve` requires exactly one selector. With
`--classification <system>:<version>:<code>` it performs an exact lookup: a known leaf with no accepted mapping is a
successful result with `mapping: null` and `pcr: null`; an unknown coordinate or inconsistent index is an error. With
`--pcr <pcr-id>` it resolves a current identity or returns a retired-id locator without auto-following it.

## Retired PCR Identity Aliases

`classifications/aliases/pcr-id-aliases.yaml` is a deterministic generated registry, not a mapping file and not a PCR
catalog. Its current 2,874 aliases preserve old CPC leaf-derived ids as terminal `classification_coverage` locators.
Every source id and historical source path is unique; aliases may not collide with material ids, chain, cycle, or
point at an unknown coverage leaf. Rebuild with `npm run aliases:build` and verify with `npm run aliases:check`; do not
hand-edit the registry. `library/catalog.yaml` pins its canonical path, exact-byte SHA-256, and entry count; runtime
reads reject a missing declaration, missing file, extra registry, digest mismatch, or count mismatch.

Alias lookup occurs before catalog lookup, including while a legacy directory still exists. `resolve --pcr` returns
`legacy_id_redirect`, the locator, its decision reference, and a copyable next command. It does not follow the target
or infer a usable PCR. Content commands fail with `PCR_LEGACY_ID_REDIRECT` so retirement is not confused with
ordinary not-found. Classification resolution independently requires the derived coverage index and fails closed
when it is absent instead of selecting directly from mapping.

## Material-First Migration

Catalog `list` and `tree` default to material PCRs. Their explicit compatibility scopes are
`--scope material|legacy|all`. Surviving legacy empty scaffolds are not methodology and have no positive mapping.
Explicit legacy/all catalog browsing can still inventory them, but an exact old id is alias-first and returns a
redirect locator; guidance and validation reject it.

Phase 2 is complete: ordinary CPC imports create zero PCR records, current mapping v2 retains accepted material edges
only, and the alias-first redirect contract preserves retired ids. The first Phase 3 pilot removes only CPC `99000`:
that code is known-unmapped and the old PCR id redirects. The repository now contains 2,876 PCR directories—3
material and 2,873 surviving legacy scaffolds—while the alias count remains 2,874. CPC `98000` and bulk physical
migration are still pending; do not describe the pilot as completion of physical migration.
