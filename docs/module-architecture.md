# Module Architecture Draft

Status: draft design. This document defines the work needed before new reusable methodology modules are authored.

## Purpose

Modules are reusable, conditional methodology rule packages used before and during PCR generation. A module tells the
PCR authoring process what must be considered, what evidence must be collected, what calculations are required, and
what validation must pass when a defined modelling condition is present.

Modules do not replace the PCR contract or the `create-pcr` workflow. They do not contain product-specific facts,
site observations, final quantitative values, reference-flow UUIDs, or conclusions copied from one product PCR to
another.

## Design direction

The architecture is forward-defined. It must be designed from modelling objects and reusable method responsibilities
before CPC products are mapped into it. CPC categories are coverage inputs and validation cases; they are not the
module taxonomy.

The first design vocabulary contains three candidate module kinds:

- `activity`: an independent process node with stable input and output roles, collection requirements, calculations, or
  validation rules.
- `technology`: an alternative route for carrying out a parent activity. A technology has a declared parent activity
  and explicit coexistence or mutual-exclusion rules.
- `system_condition`: a cross-process production condition that activates rules across more than one activity, such as
  perennial production or multi-output production.

Rules already owned by the PCR contract or the `create-pcr` workflow remain there. They are not copied into modules.
Product identity, classification references, product-specific evidence, local measurements, concrete flow UUIDs, and
final PCR choices remain in the PCR or foreground dataset.

## Abstraction tests

A candidate rule package can become a module only when all of the following are clear:

1. Its activation condition is explicit.
2. Its modelling responsibility is distinct from the PCR contract and workflow.
3. Its process interface or cross-process effect is stable across intended uses.
4. Its required data, calculations, and validation checks are identifiable.
5. Differences between products or sites can be supplied as parameters, conditions, or explicit technology choices.
6. Its exclusions and conflicts are explicit.
7. Its method rules are supported by durable sources.

If the candidate is only a product name, CPC leaf, local value, UUID, or one-off conclusion, it remains PCR-specific.

## Module design record

Before a canonical YAML module is authored, its design record must contain:

```yaml
candidate_id: M-000
working_name: example-name
kind: activity | technology | system_condition
parent_activity: null
activation_condition: []
purpose: ""
owns: []
does_not_own: []
parameters: []
dependencies: []
conflicts: []
test_cases: []
evidence_basis: []
status: candidate
decision_reason: ""
```

The design record is not itself a material module. It is the reviewable basis for deciding whether a canonical YAML
module should be created.

## Module content contract

When a candidate is approved, its canonical YAML must express the reusable rule package through the existing module
schema surfaces:

- applicability and exclusions;
- parameter interfaces;
- boundary rules;
- inventory patterns;
- collection protocols;
- calculation rules;
- allocation rules;
- validation rules;
- data-quality rules;
- durable sources.

The module may provide required or conditional process and flow patterns, but it must not bind a class-level pattern to
a concrete UUID. Concrete specific-flow identities remain a PCR or foreground selection decision.

## PCR generation use

The intended generation sequence is:

```text
PCR scope and route
  -> select applicable modules
  -> resolve dependencies and conflicts
  -> activate required and conditional rules
  -> produce evidence questions and data requirements
  -> retrieve current-product evidence
  -> supply PCR parameters and flow bindings
  -> compose PCR Markdown and structured projection
  -> validate module and PCR requirements
```

The module supplies obligations and checks. The current PCR supplies the product-specific answers.

Contract rules have structural authority. Module rules add conditional method requirements. PCR decisions must be
explicit and evidence-backed; no conflicting module rule may be silently overwritten.

## Candidate implementation after the first pilot

The first candidate modules now implement the three-way separation without using CPC as module identity:

| Module kind | Candidate module | Responsibility |
| --- | --- | --- |
| activity | `module.activities.primary-biological-production` | managed biological production node and its input/output evidence |
| activity | `module.activities.harvest-or-capture` | removal, landing, felling, or capture transfer node |
| activity | `module.activities.primary-conditioning` | sorting, grading, cleaning, cooling, drying, or stabilisation before downstream transformation |
| technology | `module.technologies.protected-cultivation` | protected or controlled-environment implementation of primary production |
| system condition | `module.system-conditions.multi-period-production` | cross-period phase, output, replacement, and termination questions |

These are `candidate` framework modules. They identify process slots, stable interfaces, and evidence questions; they do
not provide product-specific practices, quantities, factors, flow identities, or conclusions. A consuming PCR selects
the applicable activity, then activates a technology or system condition only when its route and current-product evidence
satisfy the module applicability rules.

The current schema has no dedicated `kind` or `parent_activity` fields. The kind is therefore expressed by the module
group directory and identifier (`activities`, `technologies`, or `system-conditions`), while the technology dependency
expresses its parent activity. Adding machine-readable kind fields would be a separate schema and builder change.

The candidate modules are framework-first. Their reusable content is limited to process slots, interfaces, activation
conditions, evidence questions, and checks that prevent copying one product's methodology into another. Product-specific
practices, values, factors, flow identities, and source conclusions remain to be researched and written in the consuming
PCR. A successful composition therefore provides a structured evidence agenda; it does not replace current-product
evidence work.

## First pilot

The first pilot will use representative CPC section 0 cases only after the architecture is defined. The pilot should
test whether the same forward vocabulary can represent crop production, animal production, forestry production,
capture fishery, and aquaculture without inventing a product-name taxonomy.

The pilot must record:

- the product family and production route;
- selected activities;
- selected technologies;
- selected system conditions;
- unresolved or ambiguous mappings;
- rules that belong in the PCR rather than a module;
- conflicts or missing abstractions.

The pilot is a test of the architecture. A CPC case that does not fit should trigger an architecture review before a
new product-specific module is created.

## Acceptance criteria before authoring modules

No new canonical module should be authored until:

- the three module kinds and their boundaries are accepted;
- the design-record fields are stable;
- contract-owned rules have been excluded from the module inventory;
- module selection, dependency, and conflict behavior are defined;
- the CPC section 0 pilot has exposed and resolved the first architecture gaps.
