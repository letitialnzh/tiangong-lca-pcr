# Reference Flow Decision Rules

Reference flow guidance belongs in PCR records and reusable modules. Deterministic tooling should validate consistency with the selected PCR; it should not silently invent category methodology.

Material PCRs should define one reference flow object rather than separate free-text and UUID-backed alternatives. Use a `Field` / `Value` table for reference amount, product flow identity, flow property UUID, unit group UUID, reference unit, and category-specific required qualifiers.

Flow identity uses this strict priority, from most specific to least specific:

1. **Flow Set group** — when a versioned Flow Set has an applicable functional group, cite its narrowest applicable group and use `parameterized`.
2. **Flow Set fallback** — use the versioned Flow Set without a group only when the function is known but no narrower group can be defended.
3. **Exact verified UUID** — use `fixed` only when no applicable Flow Set covers the exchange and it is already connected to a verified platform UUID whose flow type, direction, property/unit, classification, geography, and technology/provider qualifiers are compatible. Copy the UUID without a dataset version.
4. **Unique fixed-flow match** — when no applicable Flow Set covers the exchange and the UUID is not yet recorded, perform an identity lookup using the same qualifiers. If exactly one flow is supported, resolve and record its UUID as `fixed`. This is an authoring/search state, not a third binding enum.

Never use a broader group when a narrower reviewed group covers the exchange. A PCR uses the applicable Flow Set group before any UUID lookup; only an uncovered exchange may use a fixed UUID. Flow Set references are deferred selection evidence and must be resolved to a real UUID before a final TIDAS process dataset is published.

If the exchange is a structural product output and no applicable Flow Set or verified UUID applies, omit the binding and retain the process-role context as unmapped coverage for later foreground resolution.

For a candidate PCR whose reference product has no exact UUID and no applicable Flow Set, retain the semantic reference-product name, leave `product_flow_ref.uuid` and `binding` blank, and set `reference_identity_status: unresolved`. This keeps the methodology available for review without inventing an identity; the unresolved reference identity is carried for later foreground resolution.

`product-input`, `product-output`, `elementary-input`, and `elementary-output` are structural coordinates, not Flow Set identities. They constrain the candidate scan and exchange shape only; they must never be written as `flow_set_ref.id` or cited as a selectable set.
