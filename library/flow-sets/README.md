# TianGong Flow Sets

This directory owns newly generated, function-oriented Flow Set artifacts.
It is intentionally separate from `skills/flow-set-builder/`, which defines
the creation and refresh workflow, and from `flow-hybrid-search`, which
retrieves database candidates.

## Contract boundary

- A Flow Set is a versioned candidate registry for deferred PCR flow binding.
- Current registries cover Product-flow inputs only. Flow type and direction
  remain hard exchange constraints.
- Because all current sets share that coordinate, `taxonomy-v2.yaml` declares
  `product-input` once in its root `scope`. A set may override it when the
  taxonomy later gains another coordinate; every standalone registry still
  repeats its effective coordinate explicitly.
- A structural coordinate is not a Flow Set identity. It is only a hard scan
  and exchange constraint; PCRs may cite `flow-set.<id>` identities, never
  `product-input`, `product-output`, `elementary-input`, or `elementary-output`.
- Groups describe what an exchange does in a process, not merely what a flow
  is called or which product category it resembles.
- `product`, `waste`, and `elementary` flow types and input/output direction
  remain hard structural constraints.
- Candidate UUIDs are generated only after the functional taxonomy and group
  rules have been approved.
- A complete Set is populated by deterministic full-scan enumeration
  (flow list --all) followed by local functional filtering. Hybrid search is
  optional discovery support, not a completeness mechanism.
- One registry never mixes flow types or directions.
- Existing or legacy Flow Sets are not migrated, merged, or repaired here.
- A final TIDAS process still binds a verified flow UUID; a Flow Set reference
  is not itself a process exchange.

## Current state

The current taxonomy and registries are draft authoring surfaces. A PCR Flow Set reference expresses provisional
parameterized scope; it does not mean that the taxonomy, candidate UUIDs, or registry are approved for publication or
automatic selection.

`taxonomy-v2.yaml` is the current PCR-first taxonomy. It requires each covered
Product-flow input to apply the selected Flow Set's declared binding policy before a fixed UUID is looked up.
Group-only sets cite one narrowest applicable group. Set-level bindings omit the group. `energy-supply` defaults to
set-level when foreground records determine the actual carrier and also permits one exact group when the PCR method
requires a specific energy function.
Elementary flows use an exact verified UUID as `fixed`; otherwise their PCR rows
remain unmapped until identity review. Groups with
fewer than five candidate flows are omitted unless marked as high-importance
PCR concepts.

The eight current V2 registries cover Product-flow inputs. The former
Elementary-flow resource-withdrawal and environmental-emission registries were
removed; their candidate UUIDs were not reviewed as exact identities for PCR
exchanges.

No legacy V1 registry, taxonomy proposal, or migration overlay is part of the
current Flow Set surface. PCR references use each set's declared version. Group-level sets currently use V2 group ids and version `0.2.0`;
`agricultural-nutrient-supply` uses set-only binding at version `0.3.0`, with one consolidated fertilizer card per process and no PCR group;
uncovered PCR exchanges remain without a Flow Set binding for later UUID
resolution.

No registry permits automatic UUID selection or publication: candidate rows
remain subject to functional, property/unit, geography, version, and final
UUID review. The refresh updates local draft artifacts only; it does not alter
the database or bind UUIDs into PCRs.

There is deliberately no generic `material-input/` registry. Material rows
must resolve to a concrete UUID or to a more specific functional set; if that
cannot be justified, they remain unresolved for review rather than using a
catch-all set.

## Generated layout

Each approved set will use its own semantic directory, for example:

```text
library/flow-sets/<set-id>/
  manifest.yaml
  flow-set.yaml
  review-report.md
```

PCR binding semantic aliases are maintained in `binding-rules.yaml`. A PCR may
cite a whole set for a conditional card and defer the concrete group until
foreground data are available. The generic audit reads existing Flow Card
identity labels, checks resolved group bindings, and reports deferred or
ambiguous conditional groups without changing the cards:

```bash
npm run flow-set:binding-test
```

The generated `flow-set.yaml` records groups, candidate identity evidence,
selection constraints, and source-query metadata. The review report records
what was accepted, excluded, or left unresolved.
