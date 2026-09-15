---
name: flow-set-builder
description: >
  Create, apply, or refresh TianGong Flow Sets that let PCRs defer flow UUID
  binding until foreground data production. Use when a PCR should reference
  a functional flow group, when a dataset needs to select a concrete flow
  from that group, or when an existing generated Flow Set needs a reviewed
  database refresh. Do not use this skill to migrate or repair legacy Flow
  Sets, define PCR methodology, or replace flow-hybrid-search.
---

# Flow Set Builder

Create new Flow Sets from approved functional requirements. A Flow Set is a
versioned candidate registry used by PCRs for deferred flow selection; it is
not a second flow database and it is not a replacement for a real TIDAS flow
UUID in a final process dataset.

## Structural coordinate comes first

Before choosing a functional group, assign the exchange one structural
coordinate:

    flow_type: product | waste | elementary
    direction: input | output

The coordinate is a hard boundary. One registry must not mix coordinates.
Only after the coordinate is fixed may the registry classify the exchange by
function. If the same function is needed at another coordinate, create a
separate coordinate-specific Flow Set (or an explicitly separate variant);
do not put both kinds of rows in one candidate list. For example, a product
input treatment-service flow and a waste input delivered to a treatment
process are different contracts.

The coordinate itself is not a Flow Set and is never a PCR reference. Values
such as `product-input` or `elementary-output` are scan constraints only.
PCRs may cite only a real versioned `flow-set.<id>` and optional group.

For elementary coordinates, preserve the exposed ILCD elementary-flow
classification as a first-class gate. Environmental-output sets should retain
the receiving medium and partition pollutant functions only where the current
V2 taxonomy has a sufficiently populated or explicitly high-importance group.
Resource-input sets should similarly separate the current V2 water-resource,
land-occupation, and land-transformation categories. A name match alone never
overrides the classification boundary.

## Binding priority

Use the narrowest applicable reviewed Flow Set group first. Only when no group
covers the exchange may the PCR resolve an exact verified platform UUID
(`fixed`). A PCR cites a specific group rather than a bare set. Candidate UUIDs
support group review but never determine the PCR category. Final process data
still resolves a parameterized group to one concrete UUID.

## Non-negotiable boundaries

- Start from a new Flow Set identity. Do not read, migrate, merge, or repair
  an existing Flow Set unless the user explicitly names that set for refresh.
- Do not invent a functional taxonomy. If the user has not supplied or
  approved the functional groups, produce a classification proposal and stop
  before generating the candidate registry.
- For a complete registry, use deterministic flow list --all pagination as
  the population source. flow-hybrid-search is an optional recall aid for
  discovering semantic terms and missed candidates; its ranking is never an
  exhaustiveness guarantee or an acceptance decision.
- One deterministic scan may feed multiple Flow Sets that share the same
  structural coordinate. Partition that shared pool locally by each set's
  functional rules. Never use one scan to mix product, waste, and elementary
  coordinates; those require separate scans and separate registries.
- A flow's name is not its function. Record the intended use and exclusion
  conditions for every group.
- Do not silently replace, delete, or publish a flow UUID. Changes require a
  review report and explicit approval.
- A PCR may defer binding to a Flow Set, but a final TIDAS process exchange
  must contain a verified flow UUID. A placeholder such as `energy` is not a
  final flow.

## Choose the task mode

Infer the mode from the request; the user does not need to provide a command.

### Build a new Flow Set

Use when the user asks to create or generate a Flow Set from scratch.

1. Confirm the new set identity and its structural coordinate (flow_type plus
   exchange direction).
2. Confirm the functional purpose, groups, and their include/exclude
   conditions. If
   they are unresolved, output a short proposal with open decisions and do
   not search or write a candidate registry.
3. Enumerate all visible flow rows for the structural coordinate with
   flow list --all and save the page/order/filter contract and source
   fingerprint. Do not treat a page limit as a complete registry.
4. Optionally call flow-hybrid-search with a query derived from the
   function to identify recall gaps; merge those hits into the same review
   pool, deduplicated by UUID and version.
5. Apply deterministic include/exclude rules locally and review candidates
   for flow type, direction, property, unit, geography, classification, and
   intended use. Exclude incompatible candidates with a reason.
6. If provider processes are in scope, record provider-selection criteria;
   do not pretend that a flow search alone proves a provider link.
6. Write a new draft Flow Set and a review report. Never overwrite an
   existing path as part of build mode.

### Apply a Flow Set

Use when the user asks which group and concrete flow should be used for a
particular PCR or foreground exchange.

1. Identify the exchange's actual function, direction, and TIDAS flow type
   (`product`, `waste`, or `elementary`).
2. Select the narrowest applicable reviewed V2 Flow Set group first. The PCR
   records the functional category and receiving medium where relevant; it does
   not resolve a UUID at PCR authoring time.
3. Only when no V2 group covers the exchange, refine its evidence-supported
   identity and perform an exact UUID lookup. If that lookup is not verified,
   retain unmapped coverage.
4. Check property, unit, location, classification, and intended use.
   Treat property and classification as a combined compatibility gate: the
   property must measure the requested exchange and any exposed
   classification must describe the requested function. If classification is
   absent or unresolved, do not auto-select; route the candidate to review or
   resolve the platform detail first.
5. Return the recommended UUID, alternatives, excluded candidates, provider
   implications, confidence, and unresolved questions.
6. If the use is ambiguous, return `needs_review`; do not guess from the
   name. If approved, the downstream dataset writer may bind the UUID and
   must retain the Flow Set version and group as selection evidence.

### Refresh a named Flow Set

Use only when the user names an existing generated Flow Set to refresh.

1. Read the set's saved enumeration contract and V2 functional rules.
2. Re-run flow list --all with the saved filters, order, and page size.
3. Optionally re-run the saved hybrid searches as recall checks.
4. Compare current candidates with the saved candidates and report additions,
   changes, missing records, and deprecated records.
5. Re-apply the functional include/exclude rules; a newly found record is not
   automatically accepted.
6. Write a proposed next version and review report only after confirming the
   target path. Do not mutate the current version or silently rebind PCRs.

## Minimal Flow Set shape

Use this shape for a new draft. The concrete taxonomy and groups are supplied
by the user or a separately approved project rule; do not fill them with
generic categories by assumption.

```yaml
schema_version: 1
identity:
  id: flow-set.<semantic-id>
  version: 0.2.0
  status: draft
  title: "<functional set title>"

scope:
  flow_type: product
  direction: input
  coordinate: product-input
  function: "<what the exchange does in the process>"

groups:
  - id: <functional-group-id>
    purpose: "<specific function>"
    include_when: []
    exclude_when: []
    required_project_data: []
    selection_constraints:
      properties: []
      units: []
      geography_policy: prefer_process_location
    candidates: []

sync:
  population_mode: deterministic_full_scan
  enumeration_backend: tiangong-lca flow list --all
  discovery_backend: flow-hybrid-search
  complete_registry: false
  last_checked_at: null
  source_query_fingerprint: null
  source_snapshot_fingerprint: null
```

Each candidate should preserve the identity evidence needed for later
selection, including `uuid`, `name`, `flow_type`, `property`, `unit`,
`classification`, `location`, and an applicability note. A candidate may be
listed in more than one functional group only when each membership has an
explicit applicability reason.

## Output contract

Build and refresh produce two artifacts:

1. `flow-set.yaml`: the draft or proposed next-version registry.
2. `review-report.md`: queries used, candidates accepted, candidates
   excluded with reasons, unresolved ambiguities, and required approvals.

Apply mode produces a selection report and does not edit the Flow Set or PCR.
At minimum report:

- selected functional group;
- binding status (`fixed`, `parameterized`, or `needs_review`);
- recommended flow UUID and provider implications;
- property, unit, location, and classification checks;
- alternatives and exclusion reasons;
- Flow Set id/version used;
- unresolved questions and confidence.

## Review gate

Before a draft or refresh is considered publishable, verify:

- every group has a functional purpose and explicit exclusions;
- no group mixes incompatible TIDAS flow types or directions;
- every accepted candidate has a verified UUID and property/unit evidence;
- ambiguous dual-use flows are not silently accepted;
- additions and removals have been reviewed;
- the final process will bind real UUIDs at data-production time.

Do not publish, replace, or delete generated Flow Set content without an
explicit user request and a completed review report.

## Semantic acceptance test

For the repository's function-oriented sets, run:

```bash
npm run flow-set:semantic-test
```

The test evaluates each candidate against structural and group-specific
positive/exclusion rules. A passing row receives `semantic_status: accepted`;
an ambiguous or failing row receives `semantic_status: needs_review`. The
command intentionally keeps `review_status: needs_review` until property, unit,
provider, geography, and final UUID checks are complete. Semantic acceptance
therefore never bypasses production-readiness review.
