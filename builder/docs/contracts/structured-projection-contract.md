# Structured Projection Contract

`structured.yaml` is a generated projection from canonical `pcr.en-US.md`.

## Rules

- Regenerate `structured.yaml` with `npm run pcr:sync-structured -- --pcr <library/pcrs/...>` during PCR authoring.
- Commit Markdown and generated structured projection together.
- Keep the projection limited to PCR facts, rules, UUID references, data production rules, dataset profile fields, and source references.
- Do not hand-edit `structured.yaml`. Repository lint validates every material projection against
  `packages/pcr-core/schemas/structured-projection.schema.json`, compares it with a fresh deterministic
  projection, and rejects schema-invalid or stale output.
- The strict structured-projection contract applies to material PCRs. Empty scaffold projections remain
  authoring placeholders and do not require a material projection fingerprint.
- JSON Schema owns the stable machine shape. Material methodology completeness is a separate semantic
  contract shared by builder preflight and runtime readiness: required identity, functional-unit,
  reference-flow, measurement, boundary, inventory, allocation, validation, and published-profile content
  must be non-empty before guidance or validation is usable.

## Projection Fields

Expected generated fields include:

- `schema_version`
- `generated_from`
- `source_markdown`
- `product_category_identity`
- `functional_unit`
- `system_boundary.rules`
- `boundary_abstraction`
- `reference_flow_definition`
- `reference_flows`
- `measurement_rules`
- `process_map`
- `process_inventory`
- `allocation_rules`
- `dataset_production.collection_protocols`
- `dataset_production.calculation_rules`
- `dataset_production.data_quality_requirements`
- `validation_rules`
- `published_dataset_profile`
- `data_sources`
- `projection_metadata`

## Projection Metadata and Fingerprint

Every material projection ends with one final top-level `projection_metadata` block:

```yaml
projection_metadata:
  contract_version: "1"
  generator: "tiangong-pcr-builder/markdown-projection"
  canonical_markdown:
    path: "pcr.en-US.md"
    normalization: "utf8-lf-v1"
    hash_algorithm: "sha256"
    sha256: "sha256:<64 lowercase hexadecimal characters>"
  generated_content_sha256: "sha256:<64 lowercase hexadecimal characters>"
```

`canonical_markdown.sha256` fingerprints canonical `pcr.en-US.md`. Before hashing, the fingerprint
normalization removes a leading UTF-8 BOM and converts CRLF and bare CR line endings to LF. It does not add
a build timestamp, trim whitespace, normalize Unicode, or rewrite the final newline.
`generated_content_sha256` fingerprints the generated projection content before the `projection_metadata`
block, using the same normalization. The metadata block must be last so the generated content boundary is
deterministic.

The metadata is integrity evidence, not a second source of PCR truth. At consumption time, `pcr-core`
validates the material projection Schema and recomputes both hashes. Missing metadata, unsupported contract
versions, source mismatches, generated-content mismatches, and schema failures make readiness unavailable
for guidance and validation. A current, Schema-valid fingerprint is necessary but not sufficient: runtime
readiness also applies the material completeness contract so an `authored_methodology` label cannot turn an
empty-but-well-shaped projection into usable guidance.

## Normative Rule Shape

System-boundary, allocation, and validation rules use the same machine-addressable shape:

```yaml
- rule_id: allocation_rule_1
  applies_to: foreground_burden_allocation
  rule: Avoid allocation by subdividing independently measured processes.
  source_ids: []
```

An explicit Markdown rule table may assign `rule_id`, `applies_to`, and `source_ids`. Existing numbered lists,
bullets, and normative paragraphs receive deterministic section-local fallback ids. Reordering fallback rules changes
their ids, so use explicit ids once another tool or review record needs a durable rule reference.

Material English and Chinese PCR renderings must project the same ordered rule ids for system boundary, allocation,
and validation. Repository tests enforce this structural bilingual alignment even though `structured.yaml` is generated
from canonical English Markdown only.

## Flow Binding Shape

Generated `process_inventory` flow rows may include a simple `binding` value. It is either `fixed` or `parameterized`:

```yaml
# Concrete functional binding
binding: parameterized
flow_set_ref:
  id: flow-set.energy-supply
  version: 0.2.0
  group: purchased-process-heat

# Set-level binding; internal registry groups are not PCR references
binding: parameterized
flow_set_ref:
  id: flow-set.agricultural-nutrient-supply
  version: 0.3.0
```

The [Flow Identity Binding Contract](flow-binding-contract.md) owns the authoring order, Flow Set selection policy,
UUID verification, deferred/unmapped coverage, lifecycle identity requirements, and downstream UUID resolution.

This projection records the resulting shape: `parameterized` uses `flow_set_ref`; `fixed` uses the row's `flow_ref`
(or the reference flow's `product_flow_ref`). Unmapped cards may retain a selected name without binding or UUID.
Omit `group` for set-level or permitted deferred scope; when present it is one exact group id. Lookup and review
traces remain outside the projection.

## Process Inventory Amount Shape

Generated `process_inventory` rows use stable `row_id` plus a nested `amount` object:

```yaml
amount:
  expression: measured water use
  value_mode: foreground_record
  specificity: site_specific
  basis:
    text: per 1,000 kg cleaned product output
    kind: process_output
  evidence:
    kind: collected_record
    collection_protocol_id: cp_washing_water_records
    source_ids: []
  ranges:
    - role: qa_guardrail
      lower: "0.5"
      upper: "3.0"
      unit: m3
      basis: per 1,000 kg cleaned product output
      basis_kind: process_output
      evidence_kind: external_source
      source_ids:
        - source-id
```

`ranges` are optional amount metadata. They must not be collapsed into `value_mode`.
