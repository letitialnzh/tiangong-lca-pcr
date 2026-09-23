---
title: Module Authoring Plan Contract
docType: contract
scope: builder
status: draft
authoritative: true
owner: tiangong-lca-pcr
language: en
---

# Module Authoring Plan Contract

Use this contract before writing `pcr.en-US.md`. Its purpose is to turn independently designed methodology modules
into mandatory writing questions for the current product and route.

## Authoring context

Create a temporary YAML context from current-product route research. It is authoring input, not a fifth canonical PCR
file and not classification truth.

```yaml
schema_version: 1
type: module-authoring-context
target:
  product_category: apples
  classification_ref: cpc:3.0:01341
route_evidence:
  signals:
    biological_route: true
    harvest_capture_route: true
    co_product_attribution_required: unresolved
    cross_period_attribution_required: true
```

Each signal is `true`, `false`, or `unresolved`. Omitted signals are also unresolved. Set a signal only from evidence
about the current product and route; do not infer it from the desired module or from an existing PCR answer.

Run:

```bash
npm run pcr:module-plan -- --context <route-context.yaml> --format markdown
```

## Required use

1. Resolve every material unresolved signal through current-product research.
2. Read only the selected module YAML files.
3. Copy the selected module ids into the existing `manifest.modules` groups before writing the PCR. This records the
   pre-generation selection; it does not add a new manifest field.
4. Treat every selected module requirement as a mandatory question for its declared English PCR sections.
5. Answer those questions using current-product evidence, Tiangong UUID lookup, or a declared foreground collection
   protocol.
6. Do not copy product facts, quantities, factors, UUIDs, or final route decisions from a module.
7. Write `pcr.en-US.md`, align `pcr.zh-CN.md`, and regenerate `structured.yaml`. Sync preserves the selected
   `manifest.modules` groups and mirrors them into `structured.yaml`.
8. Run `pcr:module-checklist` after generation. It infers applicable and unresolved obligations from the projection
   for manual comparison with the PCR. It does not determine whether obligations are satisfied, modify the PCR, or
   replace the pre-generation plan.

No manual module approval is required. The authoring agent owns the evidence-based signal decisions and must report
unresolved evidence as a PCR review blocker rather than silently guessing.
