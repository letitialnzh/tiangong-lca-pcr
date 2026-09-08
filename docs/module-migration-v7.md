# Module framework migration to v7

The v7 workspace now contains the framework-first module design developed in v6.

Migrated assets:

- canonical activity modules in `library/modules/activities/`
- canonical technology modules in `library/modules/technologies/`
- canonical system-condition modules in `library/modules/system-conditions/`
- the reusable module schema at `packages/pcr-core/schemas/module.schema.json`
- the architecture explanation in `docs/module-architecture.md`
- the CPC 0 design draft in `docs/module-architecture/cpc-0-module-draft.yaml`

This migration carries the module idea and its first canonical examples. It does not copy the v6 product PCR catalogue or silently convert legacy product-specific module labels. PCR integration remains a separate step: a PCR must select modules from the production route, then add product-specific evidence, parameters, flows, boundary choices, and validation decisions.
