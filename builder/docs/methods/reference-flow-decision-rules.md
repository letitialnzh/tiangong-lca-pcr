# Reference Flow Decision Rules

Reference flow guidance belongs in PCR records and reusable modules. Deterministic tooling should validate consistency with the selected PCR; it should not silently invent category methodology.

Material PCRs should define one reference flow object rather than separate free-text and UUID-backed alternatives. Use a `Field` / `Value` table for reference amount, product flow identity, flow property UUID, unit group UUID, reference unit, and category-specific required qualifiers.

Flow identity uses this strict priority:

1. **Declared Product-flow Flow Set binding** — apply the selected set's binding policy. Cite one narrowest applicable group when group-level is selected; cite only the set id/version when set-level is selected. `energy-supply` defaults to set-level and permits group-level only when the PCR method requires a specific energy function.
2. **Deferred group-only scope** — a conditional umbrella card for a group-only set may temporarily omit the group until foreground records determine the concrete exchange scope.
3. **Exact verified UUID** — use `fixed` for an uncovered Product flow or an Elementary flow already connected to a verified platform UUID whose flow type, direction, property/unit, classification, geography, and technology/provider qualifiers are compatible. Copy the UUID without a dataset version.
4. **Unique fixed-flow match** — when the UUID is not yet recorded, perform an identity lookup using the same qualifiers. If exactly one flow is supported, resolve and record its UUID as `fixed`. This is an authoring/search state, not a third binding enum.

Never use a broader group when a narrower declared Product-flow group is required and supported by the set's policy. Never encode multiple group ids as one group value; use an allowed set-level binding or retain deferred scope. The current draft taxonomy provides provisional parameterized scope only and does not authorize automatic UUID selection or publication. Elementary flows never cite a Flow Set. Flow Set references are deferred selection evidence and must be resolved to a real UUID before a final TIDAS process dataset is published.

If the exchange is a structural product output and no applicable Flow Set or verified UUID applies, omit the binding and retain the selected flow name and process-role context as unmapped coverage for later foreground resolution. This is valid in a PCR Flow Card; an explicit `fixed` binding without a UUID remains invalid.

`product-input`, `product-output`, `elementary-input`, and `elementary-output` are structural coordinates, not Flow Set identities. They constrain the candidate scan and exchange shape only; they must never be written as `flow_set_ref.id` or cited as a selectable set.
