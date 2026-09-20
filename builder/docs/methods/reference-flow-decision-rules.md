# Reference Flow Decision Rules

Reference flow guidance belongs in PCR records and reusable modules. Deterministic tooling should validate consistency with the selected PCR; it should not silently invent category methodology.

Material PCRs should define one reference flow object rather than separate free-text and UUID-backed alternatives. Use a `Field` / `Value` table for reference amount, product flow identity, flow property UUID, unit group UUID, reference unit, and category-specific required qualifiers.

For binding order, Flow Set coverage, fixed UUID verification, and unresolved identity handling, follow the
[Flow Identity Binding Contract](../contracts/flow-binding-contract.md). Apply it to the reference product as well as
inventory cards; the current Product-input Flow Sets do not provide a reference-product output fallback.
