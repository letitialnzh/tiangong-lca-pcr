# Reusable methodology modules

This directory contains the candidate module catalogue used by the PCR builder's pre-generation plan and
post-generation checklist. Modules describe reusable, conditional modelling responsibilities. They are not product
records, product-evidence caches, or compiled public guidance.

## Catalogue

- `activities/` (16): process responsibilities that may become nodes, such as managed production, harvest,
  conditioning, and material treatment.
- `technologies/` (2): alternative implementations selected only when evidence shows a change to topology, inventory,
  calculation, or validation.
- `system-conditions/` (7): conditions that affect multiple nodes, periods, outputs, or shared assets.

All 25 records use `schema_version: 0`, `version: 0.1.0`, and `status: candidate`. Their contract is
`builder/schemas/module-candidate.schema.json`; repository lint validates every candidate and checks that its id matches
its group and filename.

The candidate format supplies activation questions and evidence prompts, owned responsibilities, exclusions,
interfaces, authoring targets, obligations, validation prompts, composition hints, and cross-domain scenario labels.
The current builder selects modules from activation signals and turns obligations into writing questions. It does not
resolve dependency graphs or conflicts, execute the `tests` labels, or compile modules into public runtime guidance.

## Responsibility boundary

Modules prevent omitted process nodes, interfaces, evidence questions, collection prompts, and conditional checks.
The current PCR supplies the product-specific answers and evidence. A module must not define product identity,
classification mapping, local practice, quantities, factors, concrete flow UUIDs, or a final PCR boundary.

Universal PCR requirements remain in the PCR contracts, builder workflow, methods, and schemas. Do not copy
functional-unit, reference-flow, inventory-format, source-record, lifecycle, or projection requirements into a
conditional module when an always-on contract already owns them.

## Authoring workflow

Research the current product route and create the route-signal context described in
`builder/docs/contracts/module-authoring-plan-contract.md`:

```bash
npm run pcr:module-plan -- --context <route-context.yaml> --format markdown
```

Read only the selected module YAML files. Copy the selected ids into the existing `manifest.modules` groups, then use
each returned obligation as a mandatory question in its target English PCR sections. Answer the questions with
current-product evidence.

After writing both language renderings, regenerate the projection and inspect the advisory checklist:

```bash
npm run pcr:sync-structured -- --pcr library/pcrs/<domain>/<subdomain>/<pcr-slug>
npm run pcr:module-checklist -- --pcr library/pcrs/<domain>/<subdomain>/<pcr-slug> --format markdown
```

The checklist infers applicable and unresolved obligations from the completed projection for manual comparison with
the PCR. It does not determine whether obligations have been satisfied and does not modify the PCR. Unresolved
route-plan decisions remain in the plan output; the manifest records selected module ids.

## Adding a candidate

Add a module only when it owns an independent reusable responsibility, has an explicit activation question and
evidence basis, provides a stable process/interface slot or cross-system effect, and does not duplicate an always-on
PCR rule. A classification leaf, product name, existing PCR answer, or one-off conclusion is not sufficient.

Candidate records use:

```text
library/modules/<group>/<module-slug>.yaml
id: module.<group>.<module-slug>
```

Update the Module section in `docs/architecture.md` when the taxonomy or shared ownership boundary changes. Use
`builder/docs/contracts/module-authoring-plan-contract.md` as the authoritative PCR authoring procedure.
