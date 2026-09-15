# Reusable methodology modules

This directory is reserved for the v7 framework-first module catalogue. The catalogue is a candidate methodology
surface; it is not a compiled runtime or an evidence cache.

A module describes a reusable, conditional modelling responsibility before a product-specific PCR is written. Its main
purpose is to prevent omitted process nodes, interfaces, evidence questions, collection prompts, or validation checks.
It does not define a product identity, CPC mapping, local practice, numeric value, concrete flow UUID, or final PCR
boundary. A module may contain a durable source-supported conditional method rule, but it cannot replace current-product
evidence or silently provide a product answer.

## Module kinds

- `activities/`: process roles that may become process nodes, such as primary biological production, harvest or capture, and primary conditioning.
- `technologies/`: alternative implementations of a selected activity, such as protected cultivation. A technology is selected only when evidence shows that the route changes topology, inventory, calculation, or validation.
- `system-conditions/`: cross-process conditions that activate rules in more than one activity, such as multi-period production.

The module catalogue is intentionally abstract. Product-specific evidence is collected when a PCR is generated. A module supplies questions, interfaces, reusable inventory patterns, and conditional checks; the PCR supplies the answers for its product and route.

Universal PCR rules belong to the PCR contract, builder workflow, methods, and schemas. Do not copy functional-unit,
reference-flow, inventory-format, source-record, lifecycle, or projection rules into a conditional module when those
rules already have an authoritative contract elsewhere.

## Current status

- The previous `core/*.md` scaffold files and five YAML candidates were removed during the framework reset. Their design
  history remains in Git and in the architecture/ADR records; they are not being treated as reusable evidence.
- New module ideas must first live as design records under `docs/module-architecture/` and pass the forward abstraction
  rules and cross-domain fixtures before a candidate file is added here.
- The catalogue now contains twenty-six YAML-only `candidate` files from the forward-design slices. They are visible
  authoring drafts, not active runtime methodology:
  - `activities/independent-process-node.yaml`
  - `activities/managed-biological-production.yaml`
  - `activities/resource-removal-node.yaml`
  - `activities/material-treatment-node.yaml`
  - `activities/energy-conversion-node.yaml`
  - `activities/forming-fabrication-node.yaml`
  - `activities/assembly-integration-node.yaml`
  - `activities/surface-finishing-node.yaml`
  - `activities/recovery-reprocessing-node.yaml`
  - `activities/grading-sorting-node.yaml`
  - `activities/formulation-blending-node.yaml`
  - `activities/preservation-stabilization-node.yaml`
  - `activities/packaging-presentation-node.yaml`
  - `activities/chemical-reaction-node.yaml`
  - `activities/harvest-capture-node.yaml`
  - `activities/primary-conditioning-node.yaml`
  - `activities/filling-dosing-node.yaml`
  - `technologies/alternative-technology-route.yaml`
  - `technologies/alternative-production-route.yaml`
  - `system-conditions/multi-output-attribution.yaml`
  - `system-conditions/multi-period-attribution.yaml`
  - `system-conditions/shared-infrastructure-attribution.yaml`
  - `system-conditions/batch-continuous-production.yaml`
  - `system-conditions/rework-reject-routing.yaml`
  - `system-conditions/secondary-material-attribution.yaml`
  - `system-conditions/multi-site-aggregation.yaml`
- These files use `schema_version: 0` as the lightweight draft format. They are not validated by the legacy v1 module
  Schema and are not loaded by a resolver.
- No resolver currently expands dependencies, evaluates activation evidence, detects conflicts, or compiles module rules
  into guidance.
- Existing PCR manifest references are legacy authoring metadata and are not evidence that a module is active or
  validated.

## Using modules during PCR authoring

The builder automatically selects applicable modules when it regenerates `structured.yaml`:

```bash
npm run pcr:sync-structured -- --pcr library/pcrs/<domain>/<subdomain>/<pcr-slug>
```

For inspection without modifying the PCR, run the checklist:

```bash
node builder/cli/index.mjs module-checklist \
  --pcr library/pcrs/<domain>/<subdomain>/<pcr-slug> \
  --format markdown
```

The sync command reads the generated PCR projection and candidate module YAML files, then writes the applicable module
ids into the manifest and selected/unresolved references into `structured.yaml`. The checklist command reads the same
inputs and reports which obligations are applicable, unresolved, or not applicable without modifying the PCR. Neither
path chooses product-specific values or flow identities.

## Before adding a module

Create a design record and answer all of the following:

- What explicit activation question selects it?
- What independent responsibility does it own?
- Why does that responsibility not belong to the always-on PCR contract?
- What stable process/interface slot or cross-system effect does it provide?
- What evidence must the current PCR collect before activation?
- What dependencies, conflicts, or coexistence rules apply?
- Which content is deliberately left to the current PCR?
- Which durable sources support the reusable method rule?

Do not create a module only because a CPC leaf, product name, prior PCR, or one-off conclusion appears repeatedly.

After a candidate is accepted for canonical authoring, module files use the path and identity convention:

```text
library/modules/<group>/<module-slug>.yaml
id: module.<group>.<module-slug>
```

The CPC 0 architecture draft under `docs/module-architecture/` is a design test and is not itself a canonical module.
