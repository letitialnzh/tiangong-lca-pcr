# Reusable methodology modules

This directory contains the v7 framework-first module catalogue.

A module describes a reusable modelling structure before a product-specific PCR is written. It does not define a product identity, CPC mapping, local practice, numeric value, concrete flow UUID, or final PCR boundary.

## Module kinds

- `activities/`: process roles that may become process nodes, such as primary biological production, harvest or capture, and primary conditioning.
- `technologies/`: alternative implementations of a selected activity, such as protected cultivation. A technology is selected only when evidence shows that the route changes topology, inventory, calculation, or validation.
- `system-conditions/`: cross-process conditions that activate rules in more than one activity, such as multi-period production.

The module catalogue is intentionally abstract. Product-specific evidence is collected when a PCR is generated. A module supplies questions, interfaces, reusable inventory patterns, and conditional checks; the PCR supplies the answers for its product and route.

Canonical module files use the path and identity convention:

```text
library/modules/<group>/<module-slug>.yaml
id: module.<group>.<module-slug>
```

The CPC 0 architecture draft under `docs/module-architecture/` is a design test and is not itself a canonical module.
