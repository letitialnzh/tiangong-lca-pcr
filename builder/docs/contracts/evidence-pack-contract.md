# PCR Research Evidence Pack Contract

An evidence pack is a research-time artifact for answering product-specific PCR questions before a candidate PCR is
promoted into the canonical PCR directory. It is not PCR truth, a classification mapping, or a publication record.

Store packs outside `library/pcrs/**`, for example under `builder/research-sessions/<session-id>/evidence-pack.yaml`.
The pack is append-oriented: sources and claims may be added, while unresolved conflicts and gaps remain explicit.

## Required shape

The machine contract is `builder/schemas/evidence-pack.schema.json`.

- `target` freezes the PCR identity and a SHA-256 digest of the research scope.
- `sources` records stable source ids, source type, and a durable reference.
- `claims` records one answerable conclusion, the PCR sections it affects, and precise source locations.
- `identity_bindings` records candidate or verified TianGong flow, flow-property, unit-group, process, or dataset UUIDs;
  these are platform identity evidence, not external methodological claims.
- `conflicts` records competing evidence and whether it remains unresolved.
- `gaps` records missing evidence, unresolved identity, or ambiguous scope.

`supported` and `partially_supported` claims require at least one supporting source. `contradicted` claims require a
contradicting source. `provisional` and `inconclusive` claims are visible research output and must not be silently
promoted to normative PCR rules.

Run the read-only check with:

```bash
npm run pcr:research:check -- --evidence-pack builder/fixtures/evidence-pack.sample.yaml
```

The checker validates both the JSON Schema and cross-references between claims, sources, and conflicts. It does not
edit the evidence pack or any PCR files. A later promotion workflow may require all material gaps and conflicts to be
resolved, but this first contract intentionally supports incomplete research sessions.
