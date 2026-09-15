# Module Architecture Draft

Status: draft design. This document defines the work needed before new reusable methodology modules are authored.

## Purpose

Modules are reusable, conditional methodology rule packages used before and during PCR generation. Their primary
purpose is completeness control: a module tells the PCR authoring process what must be considered, what evidence must
be collected, what interfaces must be declared, and what validation must pass when a defined modelling condition is
present.

Modules do not replace the PCR contract or the `create-pcr` workflow. They do not contain product-specific facts,
site observations, final quantitative values, reference-flow UUIDs, or conclusions copied from one product PCR to
another.

Modules are not evidence caches and are not a substitute for current-product research. A module may contain a durable,
source-supported conditional method rule, but the consuming PCR must still establish whether the rule applies and supply
the current-product answer and evidence.

## Design direction

The architecture is forward-defined. It must be designed from modelling objects and reusable method responsibilities
before CPC products are mapped into it. CPC categories are coverage inputs and validation cases; they are not the
module taxonomy.

The first design vocabulary contains three candidate module kinds. These are working taxonomy hypotheses and must be
tested across agriculture, mining, electricity, and other routes before they are treated as final:

- `activity`: an independent process node with stable input and output roles, collection requirements, calculations, or
  validation rules.
- `technology`: an alternative route for carrying out a parent activity. A technology has a declared parent activity
  and explicit coexistence or mutual-exclusion rules.
- `system_condition`: a condition that applies across multiple process nodes, periods, outputs, or shared assets, such
  as multi-period production or multi-output production.

Rules already owned by the PCR contract or the `create-pcr` workflow remain there. They are not copied into modules.
Product identity, classification references, product-specific evidence, local measurements, concrete flow UUIDs, and
final PCR choices remain in the PCR or foreground dataset.

The responsibility hierarchy is:

```text
always-on PCR contract
  -> conditional framework modules
  -> product-specific PCR
  -> foreground data and resolved flow choices
```

The contract is the only authority for rules that apply to every PCR, such as required document structure, functional
unit/reference-flow fields, inventory representation, source-record shape, projection integrity, and lifecycle state.
Modules add conditional obligations; they do not create a second copy of those universal rules.

## Abstraction tests

A candidate rule package can become a module only when all of the following abstraction rules are satisfied. These are
the current proposed rules; a cross-domain pilot must test them before a candidate becomes an active module.

### General rules

1. **Model responsibility, not product identity.** The candidate must describe a reusable modelling responsibility,
   not a product name, CPC leaf, industry folder, geographic practice, or source conclusion.
2. **One responsibility per module.** A module must have one primary responsibility. Do not combine an independent
   process node, an alternative technology, and a cross-process condition merely because they occur in the same product
   route.
3. **Stable invariant, variable parameters.** The candidate must identify what remains invariant across intended uses.
   Product-, site-, period-, and route-specific differences must be supplied as explicit parameters or activation
   evidence, not hidden in the module prose.
4. **Distinct ownership.** If the rule applies to every PCR, it belongs to the PCR contract, builder workflow, method
   contract, or Schema. A module may add only conditional obligations and may not create a second normative copy.
5. **Explicit activation.** The module must state an activation question, the evidence needed to answer it, and the
   possible result `applicable`, `not_applicable`, or `unresolved`.
6. **Stable interface or effect.** An activity or technology must expose a stable process/interface slot. A system
   condition must expose a stable cross-node, cross-period, cross-output, or shared-asset effect.
7. **Evidence remains current-product specific.** The module may define evidence types and collection prompts, but every
   active PCR must collect and cite evidence for its own route, site, period, and product.
8. **Negative boundary is explicit.** The module must state what it does not cover and how it differs from adjacent
   modules or PCR-owned rules.
9. **Composition is deterministic.** Dependencies, conflicts, coexistence, and precedence must be explicit. A later
   module or PCR cannot silently overwrite an earlier obligation.
10. **Durable method basis.** Reusable conditional rules must have durable sources. Repeated use of a source is not by
    itself evidence that a product-specific conclusion is reusable.
11. **Cross-domain test before activation.** Before a candidate is promoted, its responsibility must be demonstrated in
    at least two materially different routes, including one route outside the domain that motivated the candidate. A
    candidate that fits only one product family remains a design record or PCR-specific rule.
12. **No automatic answer generation.** A module must produce obligations, slots, questions, or checks. It must not
    silently provide a product fact, quantity, factor, UUID, or final boundary choice.

### Type-specific rules

- `activity` is valid only when the responsibility can be represented as an independent process node with its own input
  or service roles, output state, and measurement or hand-off point. If it only describes a condition applied to another
  node, it is not an activity.
- `technology` is valid only when it declares one parent activity and an evidenced delta from that parent. The delta
  must change process topology, inventory categories, calculation treatment, data requirements, or validation. A label
  such as “open field” or “protected” without a stable delta is not a technology module.
- `system_condition` is valid only when it does not own an independent product interface and instead constrains two or
  more process instances, periods, outputs, or shared assets. Its rules should add indexing, attribution, linkage, or
  conflict checks to existing slots.

### Decision outcomes

The abstraction review has four possible outcomes:

- `canonical_candidate`: the responsibility passes the rules but still needs implementation or review;
- `active_module`: the responsibility passes cross-domain tests and its composition contract is executable;
- `design_record_only`: the idea is useful for testing but its invariant or interface is not stable enough;
- `pcr_specific`: the rule depends on a product, site, source conclusion, or one-off decision.

The candidate must not be promoted merely because it can be written in the module Schema.

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
a concrete UUID. It may also provide durable, source-supported conditional method rules, provided that the rule is
activated by current-product evidence. Concrete specific-flow identities remain a PCR, flowset, resolver, or foreground
selection decision.

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

The first executable authoring helper is the read-only `module-checklist` command:

```bash
node builder/cli/index.mjs module-checklist \
  --pcr library/pcrs/<domain>/<subdomain>/<pcr-slug> \
  --format markdown
```

It reads the PCR projection and candidate YAML modules, evaluates the modules' declared activation signals, and emits
an advisory checklist containing applicable, unresolved, and not-applicable results. It never edits the PCR and it does
not invent quantities, factors, UUIDs, or final method choices. The checklist is the first step of the generation chain;
automatic PCR composition is intentionally not part of this first implementation.

Contract rules have structural authority. Module rules add conditional method requirements. PCR decisions must be
explicit and evidence-backed; no conflicting module rule may be silently overwritten.

The manifest `modules` field is currently a declaration of intended module references. It does not by itself prove that
activation evidence, dependencies, composition, PCR answers, or validation requirements are complete. A future resolver
must compile the declaration together with module definitions and PCR evidence before guidance can treat a module rule as
active.

## Framework reset and first forward tests

The previous five YAML candidates and the legacy `core/*.md` scaffold files have been removed from the active catalogue.
They were useful as design history, but they were not promoted as a validated taxonomy and must not be treated as
canonical methodology.

The new workflow starts with forward design records and cross-domain tests:

- `docs/module-architecture/design-record-template.yaml` defines the review fields;
- `docs/module-architecture/abstraction-test-cases.yaml` tests modelling responsibilities across agriculture, mining,
  electricity, multi-output, and multi-period route classes;
- `docs/module-architecture/abstraction-review.yaml` records provisional outcomes and rejected module shapes.

No canonical module is generated until a candidate passes the abstraction rules and has a stable responsibility,
activation condition, interface/effect, evidence obligation, and composition boundary. The first review candidates are
independent process nodes, alternative technology routes, multi-output attribution, and multi-period attribution; none
is yet an active module.

## Current implementation status

The catalogue contains six YAML-only candidate files while the forward tests are reviewed; it remains empty of
canonical active modules:

- the previous five YAML candidates and legacy `library/modules/core/*.md` scaffold files are removed from the active
  catalogue;
- the current candidate files are lightweight `schema_version: 0` drafts and are not loaded by a resolver;
- `docs/module-architecture/abstraction-test-cases.yaml` and `abstraction-review.yaml` are design evidence, not
  methodology modules;
- the builder's read-only `module-checklist` helper now reads candidate YAML files and produces an advisory checklist;
- `pcr-core` and the public PCR CLI do not yet resolve, compose, or conflict-check modules into guidance;
- the current module Schema does not yet express all activation, ownership, or conflict semantics.

Until a resolver exists, module references in a manifest are authoring metadata, not compiled guidance.

## First pilot

The first pilot uses route classes across agriculture, mining, and electricity before any product classification is
selected. CPC section 0 remains a later coverage test, not the source of module identity.

The pilot must record:

- the domain and route class;
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
- the CPC section 0 pilot has exposed and resolved the first architecture gaps;
- a module cannot satisfy current-product evidence, quantity, or UUID requirements by itself;
- no universal contract rule has a duplicated normative copy in a conditional module.
