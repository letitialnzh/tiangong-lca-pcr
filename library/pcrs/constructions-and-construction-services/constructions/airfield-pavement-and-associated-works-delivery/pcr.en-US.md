---
pcr_id: pcr.constructions-and-construction-services.constructions.airfield-pavement-and-associated-works-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Airfield pavement and associated works construction delivery

## 1. Scope and Applicability

This rule concerns physical delivered runways, taxiways, aprons and related non-building airport structures at the actual site, rather than construction services, aircraft operation or a bundle of materials. It includes actual flexible asphalt, rigid cement-concrete, aggregate/turf and mixed pavement routes; none is a default. Every package binds the whole declared construction and the accepted area of a consistent use and structure, documenting actual drainage, marking, grooving, lighting and other associated works. Terminal buildings, hangars and standalone equipment manufacture are outside this entity.

Construction foreground begins with the recorded initial site and delivered supply products, includes actual clearance/initial removal, earthworks, layers, installation, tests and corrections, and ends at physical acceptance. Distinguish material production, inbound transport, site work, actual maintenance/renewal, operation, final demolition and destinations. Post-handover stages are excluded. A site inventory alone establishes neither complete cradle-to-delivery nor whole-life coverage. FAA items support process evidence; project-specific specifications and applicability govern actual acceptance, without regulatory approval conferred here.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.airfield-pavement-and-associated-works-delivery |
| classification_refs | CPC 3.0 53213 |
| covered_products | Runways, taxiways, aprons and related non-building airport structures; actual paved/unpaved routes and handover scope |
| excluded_products | Airport buildings; standalone material/equipment manufacture; general construction services; operational maintenance services; aircraft and airport transport operation |
| representative_product | Airfield pavement works with surveyed area, actual use and signed handover condition |
| production_route | Actual earthworks/compaction, subgrade and layers, corresponding surface construction, specified associated works, inspection/corrections and acceptance |
| market_state | Immovable constructed civil entity at the site and declared delivery condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide physical airfield pavement and attributable associated works for the declared aircraft landing/take-off, taxiing or standing use |
| How much | 1 m2 accepted horizontal plan area; declare whole package area, use zones, lengths/widths, thickness of each layer and associated work quantities |
| How well | Actual structure, subgrade, load/aircraft-use requirements, surface, drainage and installed configuration; retain design and lot tests for smoothness, thickness, compaction or strength, joints and applicable acceptance specifications |
| How long or cycle | One actual construction-to-handover cycle; no assumed service life. Service-period comparisons need separately supported use, maintenance and renewal scenarios |
| reference_flow_link | reference_airfield |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Delivered airfield pavement assembly with associated non-building works |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | site/package; runway/taxiway/apron use; actual pavement route; accepted-area survey method and length/width; layer thickness and material state; subgrade and climate; design aircraft/load requirements; associated works and attribution; actual tests and delivery completeness; construction dates; upstream/transport gates; gaps and later stages |

The reference includes its share of the complete construction, not an isolated square metre of surfacing. Areas of different use or structure are collected separately; intersections cannot expand output by double counting. Retain whole-project totals and actual areas; cost, assumed mass and nominal area cannot establish a conversion. Missing required qualifiers preclude comparability.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_area | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Use cp_handover to measure accepted plan area; collect every inventory row per declared reference flow. Divide attributable work totals by accepted area of the same scope, preserving totals, attribution and denominator; never sum layer areas as extra output. |
| energy_units | cn_lv; cn_mv | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the public Net calorific value property and energy unit group. Convert metered kWh using the unit-group relation 3.6 MJ/kWh; never relabel this property as Mass. |
| material_state | fresh_concrete; topsoil; supplied_water; washout_liquid | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record physical state and measured volume. Volume-to-mass conversion needs measured density of the same material state and batch; excavated, loose and compacted soil volumes are not equal by assumption. |
| asset_area | auxiliary installed/deployed geometry linked to plywood_form; pp_geotextile; grass_sod | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Measure installed/deployed geometry, thickness, composition and areal mass as auxiliary records; it does not replace the native inventory numerator. Purchased fabric/sod uses actual attributable consumed area including losses, reconciled to receipts, returns and stock. Reusable formwork manufacture uses panel stock area times the conserved manufacture share under cp_formwork_assets, not repeated deployed area as new manufacture. Never change a public Mass property to Area by name similarity. |
| transport_units | road_freight | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | t*km | Preserve public mass*distance with group reference kg*km; 1 t*km = 1000 kg*km. Use actual consignment mass and distance without assumed distance or load. |

| Field | Value |
| --- | --- |
| mass_unit_group | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| volume_unit_group | `93a60a57-a3c8-12da-a746-0800200c9a66` |
| energy_unit_group | `93a60a57-a3c8-11da-a746-0800200c9a66` |
| item_unit_group | `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| transport_unit_group | `3620148f-c5db-48ce-9065-a10092089aca` |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual pre-construction site, retained assets and external supply product gates |
| starting_condition_role | foreground_start |
| product_classification_scope | Airfield pavement and related non-building entity; use and delivery scope explicitly declared |
| recursive_input_rule | Retained same-category pavement is an existing asset input with condition/burden records; do not recursively duplicate its whole construction history |
| upstream_dataset_requirement | Link each actual supplied product to compatible state, technology, geography and unit manufacture data; onsite mixing separately expands actual ingredients, heating, fuel and releases without duplicating finished-product manufacture |
| disclosure | Upstream coverage, actual transport/site work, initial removal, retained assets, associated facilities, subcontracting, tests, gaps and post-handover stages |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_delivery | dataset | Record actual earthworks, layers, drainage, marking/grooving, lighting and tests/handover by process. Listed materials are not a universal complete recipe; individually add every additional actual material, packaging, lubricant, planting input, ancillary and temporary work exchange, documenting absent processes. | faa-airport-construction-2018 |
| boundary_consumed_inputs | purchased consumable/permanently supplied product inputs in all selected or actually attempted construction routes; reusable-asset manufacture excluded | Input amounts include all actual attributable consumption, including pre-installation damage, rejected loads, cutting/application losses and replacements before handover. This is an explicit exception to local installed/applied/used wording: that wording identifies the intended route and configuration, not a successful-installation-only numerator. Reconcile native-unit input = gross attributable receipts + opening stock - verified returns/transfers - closing reusable stock; retain installed accepted quantities and actual waste separately. Keep supplied identity/state and assembly boundaries exact; do not duplicate internal constituents or reusable-asset manufacture.  This stock-consumption equation does not apply to reusable equipment or plywood-panel manufacturing shares under cp_assets/cp_formwork_assets. Those rows retain their supported cumulative-use manufacture attribution under allocation_assets/asset_share even if the physical asset is returned, transferred or held in reusable closing stock; physical stock movements remain separate and cannot cancel the current use share. | |
| boundary_stages | dataset | Link manufacture and transport separately; paving does not represent material production. Operating electricity, aircraft, post-handover maintenance/replacement, final demolition and destinations are excluded; separately model those stages only with real scenarios and redeclared scope. | fhwa-pavement-lca-2016 |
| boundary_environment | utilities; waste | Include actual utilities and evidenced direct releases, distinguishing fuel supply/combustion, purchased water/resource abstraction, dewatering transfer/discharge, liquid waste/settled solids. Retain actual equipment, duration, location and measurements for noise without inventing default sound-energy exchanges; any evidenced emissions are separate exact substances and media. | epa-construction-dust-1995; epa-concrete-washout-2012 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| site | Site survey, clearance and earthworks | required | Actual site starting condition and all attributable works; excavation, grading, embankment and compaction as required | foreground_production | per declared reference flow |
| base | Subgrade, subbase and base construction | required | Inspect actual pavement design; only installed layers and specified treatment routes | foreground_production | per declared reference flow |
| flexible | Flexible asphalt pavement placing and rolling | conditional | Actual asphalt layers or asphalt-treated base | foreground_production | per declared reference flow |
| rigid | Rigid concrete placing, joints and curing | conditional | Actual cement-concrete layers or concrete associated structures | foreground_production | per declared reference flow |
| unpaved | Aggregate/turf surface establishment | conditional | Actual unpaved aggregate/turf route; aggregate is accounted under base without duplication | foreground_production | per declared reference flow |
| drainage | Drainage and associated civil works | conditional | Actual drains, culverts, outfalls or ancillary non-building structures | foreground_production | per declared reference flow |
| finish | Marking, grooving and airfield lighting installation | conditional | Actual specified marking, grooving or installed systems; no universal requirement | foreground_production | per declared reference flow |
| utilities | Site plant, construction utilities and direct releases | required | All actual contractors, including pumping, compaction, paving, saw cutting, curing, dust control and commissioning | foreground_production | per declared reference flow |
| transport | Inbound and construction-waste transport | required | All actual supply and waste export legs through handover | foreground_production | per declared reference flow |
| waste | Construction waste segregation and routing | required | All actually generated streams through acceptance; absence requires records | foreground_production | per declared reference flow |
| handover | Testing, corrections and physical acceptance | required | Accepted actual area and declared associated works; include tests and rejected work corrections | foreground_production | per declared reference flow |

### Process: Site survey, clearance and earthworks (`site`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

###### Imported mineral soil fill (`mineral_fill`)

Only actual imported engineered fill; retain composition, contamination status and compacted versus loose quantities. Internal excavated soil reuse is a transfer, not a new purchased input.

- Selected flow: Imported mineral soil fill
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_site to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site`
- Sources: `faa-airport-construction-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Subgrade, subbase and base construction (`base`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

###### Crushed stone pavement base aggregate (`crushed_base`)

Actual specified crushed aggregate layer, with grading, layer thickness, moisture and compaction records. A rounded gravel or soil-remediation identity is not automatically this material.

- Selected flow: Crushed stone pavement base aggregate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_base to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_base`
- Sources: `faa-airport-construction-2018`

###### Cement, portland cement (`portland_cement`)

Only Portland cement actually used in soil/base stabilization or site batching. No default binder fraction; do not add cement separately when it is already inside purchased concrete.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_base to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_base`
- Sources: `faa-airport-construction-2018`

###### Hydrated lime for subgrade stabilization (`hydrated_lime`)

Only an actual hydrated-lime treatment specified for the site; distinguish quicklime and kiln dust and record dosage from weighed work records.

- Selected flow: Hydrated lime for subgrade stabilization
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_base to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_base`
- Sources: `faa-airport-construction-2018`

###### Polypropylene geotextile separation sheet (`pp_geotextile`)

Actual supplied polypropylene separation fabric consumed for the declared route, including pre-installation damage and rejected/cut material; preserve exact function, supplied state, grade and areal mass. Record supplied/consumed area and installed footprint separately.

- Selected flow: Polypropylene geotextile separation sheet
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Use cp_base to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain m2 and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_base`
- Sources: `faa-airport-construction-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Flexible asphalt pavement placing and rolling (`flexible`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

###### Asphalt mixture (`asphalt_mix`)

Only an actual supplied asphalt mix, with binder type, job mix formula, temperature, recycled content and intended layer. Meter laying, rolling and corrections separately; manufacture remains upstream unless site plant is explicitly inventoried.

- Selected flow: Asphalt mixture `ad29a865-2fd6-41da-99d2-9669b9c7984d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_flexible to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flexible`
- Sources: `faa-airport-construction-2018`

###### Bitumen emulsion for pavement tack coat (`asphalt_emulsion`)

Only actual tack coat emulsion; weigh the delivered formulation and record residual binder concentration, water and supplier. Do not identify the whole emulsion as neat asphalt.

- Selected flow: Bitumen emulsion for pavement tack coat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_flexible to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_flexible`
- Sources: `faa-airport-construction-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Rigid concrete placing, joints and curing (`rigid`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

###### Fresh cement concrete delivered before paving (`fresh_concrete`)

Only actual fresh cement concrete for rigid pavement or lean-concrete layer; use batch tickets, delivered volume, measured density if converting and rejected loads. Neither hardened cast-in-place concrete nor a generic binder description proves this fresh state.

- Selected flow: Fresh cement concrete delivered before paving
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use cp_rigid to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain m3 and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rigid`
- Sources: `faa-airport-construction-2018`

###### Steel pavement joint dowel bar (`steel_dowel`)

Actual supplied dowel bars consumed for the declared route, including pre-installation damaged/rejected replacements; record steel grade, coating, geometry, consumed count and supplier mass, with installed accepted count separate. Reinforcement and tie bars, if used, require separate actual rows.

- Selected flow: Steel pavement joint dowel bar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_rigid to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rigid`
- Sources: `faa-airport-construction-2018`

###### Polysulfide, sealing compound (`polysulfide_seal`)

Only if the actual joint design specifies this polysulfide formulation; record joint dimensions, formulation and applied mass. Other chemistries require separate identities, never substitution.

- Selected flow: Polysulfide, sealing compound `e533bf45-bf2b-47ee-88ff-fc67ba2cac05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_rigid to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rigid`
- Sources: `faa-airport-construction-2018`

###### Paraffin-wax emulsion concrete curing compound (`wax_curing`)

Only if this membrane-curing formulation is applied; retain concentration, application records and container residues. Wet curing water is recorded under site water without a mandatory curing recipe.

- Selected flow: Paraffin-wax emulsion concrete curing compound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_rigid to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_rigid`
- Sources: `faa-airport-construction-2018`

###### Plywood concrete formwork panel (`plywood_form`)

Only actual reusable plywood forms. Record panel thickness, composition, deployment area and reuse ledger; count manufacturing burden once across uses through cp_formwork_assets, not once per pour.

- Selected flow: Plywood concrete formwork panel
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Use cp_formwork_assets to collect attributable panel manufacture area from cp_rigid deployment/stock records and the supported cumulative manufacture share; normalize by measured accepted package area, retaining m2 and original records. Deployment area alone is not new panel manufacture.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_formwork_assets`
- Sources: `faa-airport-construction-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Aggregate/turf surface establishment (`unpaved`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

###### Screened topsoil for turf pavement (`topsoil`)

Only actual turf route or related graded strip planting; record soil characteristics, layer depth and source, with measured placed volume.

- Selected flow: Screened topsoil for turf pavement
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use cp_unpaved to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain m3 and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_unpaved`
- Sources: `faa-airport-construction-2018`

###### Cultivated grass sod with rooting soil (`grass_sod`)

Only actual supplied turf sod. Record species composition, rooting-soil thickness, installed area and establishment acceptance. Seeded establishment must instead enumerate actual seed and any nutrients as separate physical rows.

- Selected flow: Cultivated grass sod with rooting soil
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Use cp_unpaved to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain m2 and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_unpaved`
- Sources: `faa-airport-construction-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Drainage and associated civil works (`drainage`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

###### Precast cement-concrete storm-drain pipe (`concrete_pipe`)

Actual concrete drainage pipe consumed for the declared route, including damage/rejection before installation and replacement; retain diameter, length, class, reinforcement and measured supplier mass, with installed accepted quantity separate. Include actual bedding, headwalls and outfall work as distinct products and processes.

- Selected flow: Precast cement-concrete storm-drain pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_drainage to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drainage`
- Sources: `faa-airport-construction-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Marking, grooving and airfield lighting installation (`finish`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

###### White waterborne acrylic pavement marking paint (`white_paint`)

Only actual white acrylic waterborne marking paint. Weigh supplied formulation, declared solids and installed markings; repainting before acceptance is included, operational repainting excluded.

- Selected flow: White waterborne acrylic pavement marking paint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_finish to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish`
- Sources: `faa-airport-construction-2018`

###### Yellow waterborne acrylic pavement marking paint (`yellow_paint`)

Only actual yellow acrylic waterborne marking paint; retain colour, formulation, used mass and actual marking layout.

- Selected flow: Yellow waterborne acrylic pavement marking paint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_finish to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish`
- Sources: `faa-airport-construction-2018`

###### Glass retroreflective beads for pavement markings (`glass_beads`)

Actual glass beads consumed for the declared marking route, including attributable application losses and damaged/rejected material; weigh separately from paint, retain grading and supplier treatment, and distinguish consumed from successfully applied quantity.

- Selected flow: Glass retroreflective beads for pavement markings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_finish to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish`
- Sources: `faa-airport-construction-2018`

###### Complete inset airfield LED luminaire (`airfield_light`)

Actual complete fixtures of this model and function consumed for the declared route, including failed/rejected replacements before installation or acceptance; keep consumed and installed accepted counts separate. Edge lights, isolating transformers, regulators, conduits and bases, when installed, need distinct product rows; no whole lighting system row.

- Selected flow: Complete inset airfield LED luminaire
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Use cp_finish to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain item and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish`
- Sources: `faa-airport-construction-2018`

###### Insulated copper airfield lighting cable (`copper_cable`)

Actual copper cable consumed for the declared route, including cutting, damage and rejected/replaced lengths before acceptance; retain conductor cross-section, insulation, voltage rating, consumed length and measured mass, with installed length separate. Supplier kg-per-metre needs verified cable-specific evidence.

- Selected flow: Insulated copper airfield lighting cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_finish to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish`
- Sources: `faa-airport-construction-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Site plant, construction utilities and direct releases (`utilities`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

###### Complete hydraulic excavator (`excavator_asset`)

Only an actually used asset manufacture contribution. Retain asset identity/configuration and original manufacture data; cp_assets supplies a conserved project share across its evidenced cumulative use. Deployment time is not consumption of a new whole machine. No complete manufacture burden is reset for each project.

- Selected flow: Complete hydraulic excavator
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Use actual asset-manufacture share records in cp_assets, normalized per declared reference flow, preserving Number of items without treating deployment time as new-machine count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

###### Complete self-propelled road roller (`roller_asset`)

Only an actually used asset manufacture contribution. Retain asset identity/configuration and original manufacture data; cp_assets supplies a conserved project share across its evidenced cumulative use. Deployment time is not consumption of a new whole machine. No complete manufacture burden is reset for each project.

- Selected flow: Complete self-propelled road roller
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Use actual asset-manufacture share records in cp_assets, normalized per declared reference flow, preserving Number of items without treating deployment time as new-machine count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

###### Complete asphalt paving machine (`paver_asset`)

Only an actually used asset manufacture contribution. Retain asset identity/configuration and original manufacture data; cp_assets supplies a conserved project share across its evidenced cumulative use. Deployment time is not consumption of a new whole machine. No complete manufacture burden is reset for each project.

- Selected flow: Complete asphalt paving machine
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Use actual asset-manufacture share records in cp_assets, normalized per declared reference flow, preserving Number of items without treating deployment time as new-machine count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

###### Complete cement-concrete pump (`pump_asset`)

Only an actually used asset manufacture contribution. Retain asset identity/configuration and original manufacture data; cp_assets supplies a conserved project share across its evidenced cumulative use. Deployment time is not consumption of a new whole machine. No complete manufacture burden is reset for each project.

- Selected flow: Complete cement-concrete pump
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Use actual asset-manufacture share records in cp_assets, normalized per declared reference flow, preserving Number of items without treating deployment time as new-machine count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

###### Diesel fuel (`site_diesel`)

Actual supplied diesel consumed by excavators, graders, rollers, pavers, pumps or generators; record equipment/task and batch fuel grade, fossil fraction, density and net calorific value. This is a fuel supply identity, not combustion already included in a service.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Alternating current (`cn_lv`)

Only site consumption on a Chinese grid supply below 1 kV; supplier, voltage, site geography and metered dates must match. Other geography or voltage requires another verified row.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain MJ and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Alternating current (`cn_mv`)

Only site consumption on a Chinese grid supply of 1–35 kV; do not duplicate the same metered supply at low voltage or count generated power again.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain MJ and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Treated mains water delivered to construction site (`supplied_water`)

Meter actual purchased water used for compaction, dust control, saw cutting, cleaning or curing by task. Do not impose a density or substitute Hong Kong supply for an unspecified site.

- Selected flow: Treated mains water delivered to construction site
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain m3 and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

##### Waste flows

##### Elementary flows

###### river water (`river_water`)

Only direct site abstraction from a river, as a resource input with location, dates and actual volume. Purchased water is a technosphere input; dewatering and returns are separately reconciled.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain m3 and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### ground water (`ground_water`)

Only direct groundwater extraction with source and volume; distinguish construction-use abstraction from dewatering transfer, document destination and returned volume. No unsupported net consumption or scarcity claim.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain m3 and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only measured or fuel-carbon-derived actual fossil CO2 released during site combustion to air, unspecified subcompartment, immediate release. Exclude biogenic carbon and upstream emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### carbon monoxide (fossil) (`fossil_co`)

Only evidenced actual fossil CO emitted to air, unspecified subcompartment; measurement or equipment-specific factors must match fuel and controls.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### nitrogen monoxide (`nitric_oxide`)

Only measured or valid separately speciated NO emitted to air, unspecified subcompartment. Total NOx as NO2-equivalent cannot be silently treated as NO.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### nitrogen dioxide (`nitrogen_dioxide`)

Only evidenced separate NO2 emissions to air, unspecified subcompartment; distinguish NO, nitrite and N2O; no default NOx split.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### Particulate matter, particle size unspecified (`dust_unspecified`)

Only quantified site dust to air with unspecified size fraction and subcompartment. Retain source activity, moisture, controls and uncertainty. Never add its total again to separately inventoried fractions from the same source.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### particles (PM2.5 - PM10) (`coarse_pm`)

Only a separately quantified 2.5–10 micrometre fraction released to air, unspecified subcompartment; exclude PM2.5 and avoid overlap with a PM10 total or unspeciated dust.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

###### particles (PM10) (`pm10_total`)

Only measured or validly quantified total PM10 to air, unspecified subcompartment. For the same emission source use either this total or its separately measured size fractions, never both; neither TSP nor PM2.5 is automatically PM10.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_utilities to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`

### Process: Inbound and construction-waste transport (`transport`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

###### freight transport (`road_freight`)

Actual road delivery and waste export legs; record consignment mass, distance, vehicle/load and empty return allocation. This service excludes site plant operation; use separate measured fuel if the service is not linked, never both for the same leg.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t*km
- Amount rule: Use cp_transport to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain t*km and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `fhwa-pavement-lca-2016`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Construction waste segregation and routing (`waste`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Non-contaminated excavated mineral soil for off-site disposal (`soil_export`)

Only soil exported as waste; retain measured mass, moisture, contamination tests, disposal destination and whether reused rather than discarded.

- Selected flow: Non-contaminated excavated mineral soil for off-site disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_waste to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Removed asphalt pavement milling waste (`asphalt_waste`)

Only actual previously laid asphalt pavement removed or milled during clearance or correction in this construction cycle; record laid state, source and recovery route. Unlaid rejected or surplus supplied mix is not pavement milling waste: record it separately with its actual unlaid state, measured mass and receiver under cp_waste before inventory completeness, retaining its attributable upstream manufacture and transport. Verified returns and internal reuse are separately reconciled, not relabelled as milling waste. Post-handover removal is excluded.

- Selected flow: Removed asphalt pavement milling waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_waste to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Hardened cement-concrete construction waste (`concrete_waste`)

Only actual segregated hardened cement-concrete debris or acceptance-test cores discarded; wet washout is distinct.

- Selected flow: Hardened cement-concrete construction waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_waste to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain kg and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Cement-concrete equipment washout slurry (`washout_liquid`)

Only liquid/slurry exported to treatment, with measured volume, solids content and destination. Do not represent it as water resource or assume discharge to soil/water. Retain settled solids separately.

- Selected flow: Cement-concrete equipment washout slurry
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use cp_waste to collect the actual exchange amount, normalized by measured accepted area of the same scope; retain m3 and original work totals.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-concrete-washout-2012`

##### Elementary flows

### Process: Testing, corrections and physical acceptance (`handover`)

Apply this process to actual design and site records. Attribute equipment, water, fuel, corrections and waste by task to this process and reconcile with utility/waste ledgers without duplicate exchanges. Individually add omitted actual exchanges; an empty UUID or a process heading cannot imply a complete inventory.

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Delivered airfield pavement assembly with associated non-building works (`reference_airfield`)

One square metre of accepted plan area linked to the entire declared runway, taxiway, apron or airfield construction package; includes its attributable underlying layers and specified associated works, not an isolated surface-material sheet.

- Selected flow: Delivered airfield pavement assembly with associated non-building works
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: 1 m2
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_handover`
- Sources: `faa-airport-construction-2018`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_project | all inventory rows | First partition airport work using submeters, weights, equipment time, actual zones and lots; direct attribution precedes allocation. Shared activities use measured causal physical drivers, preserving all beneficiary projects and denominator with shares summing to one. Area normalizes the reference within a consistent use/structure package; it is not a default allocation among heterogeneous works. |  |
| allocation_assets | plywood_form; utilities | Use cp_assets / cp_formwork_assets to record each asset/component manufacture burden, project/period activity and supported cumulative service. Across projects, periods and repeated uses, total manufacture shares of the same asset cannot exceed one. Unknown life/cumulative activity remains a review and completeness gap, never reset per project. |  |
| allocation_recovery | waste | Construction waste, reused pavement and exported millings do not automatically earn credits. Document actual treatment/recovery gates, quality and receiver. Any substitution benefit or recycling allocation needs a declared sourced method and sensitivity, without simultaneously claiming avoided manufacture and zero burden. | fhwa-pavement-lca-2016 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_site | site | row-specific exchange | foreground_records | Pre/post survey; soil strata; cut/fill volumes; imported mass; contamination and destinations | Use surveyed cross-sections, calibrated weighbridge and earthwork logs; retain loose/compacted states and measured density when converting | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_base | base | row-specific exchange | foreground_records | Layer area/depth; grading; each binder issue/return; treatment, moisture, roller passes and compaction tests | Reconcile measured deliveries and installed geometry against site tests; record actual treatment without assumed dosage | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_flexible | flexible | row-specific exchange | foreground_records | Mix batch and job formula; delivered/returned/rejected mass; temperature; laid area, thickness; roller and paver time; cores/smoothness | Retain batch tickets, scale records, trial areas and lot test/correction records; isolate upstream mix plant and onsite activity | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_rigid | rigid | row-specific exchange | foreground_records | Concrete batch; fresh volume and density; mix composition; joint layout; dowels; curing; test strength/thickness; rejected loads | Use batch and delivery tickets, measured geometry and mass records, plant/task meters, joint/curing logs and acceptance tests | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_unpaved | unpaved | row-specific exchange | foreground_records | Surface route; topsoil volume; turf composition, thickness and area; establishment tests | Survey accepted aggregate/turf footprint, retain actual planting deliveries and pre-handover irrigation/establishment work | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_drainage | drainage | row-specific exchange | foreground_records | Pipe grade, diameter, length, mass; bedding; excavation; headwalls; hydraulic route and tests | Reconcile as-built drainage layout, supplier weighing and installation/inspection logs including outfalls | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_finish | finish | row-specific exchange | foreground_records | Marking colour/formulation; actual paint/bead mass; groove length/depth; luminaire model/count; cable mass/length; commissioning | Retain calibrated issue/return records, as-built markings/grooves, equipment meters, installation schedules and tests | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_utilities | utilities | row-specific exchange | foreground_records | Fuel stock/receipts; plant/task time; electricity meters/geography/voltage; supplied/abstracted water, dewatering and returns; emission species, medium and control | Submeter by work package; reconcile fuel consumed with stocks and contractors; retain batch density/carbon/NCV, source-specific validated emission method and uncertainty | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_transport | transport | row-specific exchange | foreground_records | Consignment kg; actual km each leg; vehicle/load; returns; included service gates | Use waybills, weighing, routes and vehicle logs; convert actual kg to tonnes for t*km; partition project deliveries and background inclusion | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_waste | waste | row-specific exchange | foreground_records | Stream identity/state; weight/volume; water/solids; treatment, recycling or disposal destination; transfer date; asphalt laid/unlaid state; separate unlaid rejects and pavement milling; verified returns/reuse | Use segregated containers, calibrated weights/meters, analysis and licensed receiver tickets; document containment, settling and actual water routing | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_handover | handover | row-specific exchange | foreground_records | Project/package boundary; accepted plan area in m2; runway/taxiway/apron length and widths; layers; capacity/load-use requirements; associated works; tests and signed date | Survey as-built accepted horizontal surface polygons without overlapping intersections; trace lot acceptance, geometry, actual function, finish and related structures to signed handover | row-specific kg, m3, m2, MJ, item, t*km | Each delivery, lot, task/meter interval and acceptance event | Complete actual start-to-handover period; disclose unmetered intervals | Declared package and all attributable subcontractors | per declared reference flow | Calibration, original tickets, as-built surveys, lot tests, corrections, attribution and uncertainty |
| cp_assets | utilities | equipment manufacture shares | asset_ledger | Asset id; original manufacture burden; each project activity; prior shares; cumulative-service evidence; retirement/transfers | Read manufacture, lease and plant/formwork deployment ledgers; reconcile cumulative shares across projects; unknowns remain gaps; retain actual process ID utilities and the common asset ledger shared with cp_formwork_assets, preventing duplicate shares across the two protocols | dimensionless shares and source units | Each deployment and period closure | All prior usage periods and supported service total | All projects using the same asset | per declared reference flow | Traceable asset records; independent share reconciliation |
| cp_formwork_assets | rigid | reusable plywood-panel manufacture shares | asset_ledger | Asset id; original manufacture burden; each project activity; prior shares; cumulative-service evidence; retirement/transfers; panel stock area; deployed area by pour; panel thickness/composition; link to cp_rigid | Read panel manufacture and deployment/stock ledgers with cp_rigid; distinguish actual panel stock area from repeated deployed area, apply supported cumulative-use shares to stock manufacture area, and reconcile the same asset ledger with cp_assets. Retain actual process ID rigid; unknown life or stock remains a gap, not a default share. | dimensionless shares and source units | Each deployment and period closure | All prior usage periods and supported service total | All projects using the same asset | per declared reference flow | Traceable asset records; independent share reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_area | all inventory rows | Divide each attributable exchange total of the consistent use/structure package by actual accepted plan area in m2 from cp_handover, yielding amounts per declared reference flow; output is fixed at 1 m2. Preserve original totals and survey denominator, never substituting layer area or cost. | cp_handover; project exchange records | Exchange amounts per declared reference flow |  |
| preserve_units | all inventory rows | Convert same-dimension units using declared unit groups; mass/volume conversion uses actual same-batch density only, and electricity kWh to MJ multiplies by 3.6. Preserve raw measurements and uncertainty. | cp_utilities; cp_transport; supplier records | Row-unit quantities |  |
| direct_emissions | utilities | Calculate each species release from actual measurement or validated methods applicable to the particular plant/fuel/controls, preserving original method units and attribution. Fossil carbon balance uses actual fuel carbon and combustion evidence; no default factors or NOx split, and no addition of dust totals to their fractions. | cp_utilities; site measurements; applicable method evidence | kg of each exact species | epa-construction-dust-1995 |
| asset_share | plywood_form; utilities | Apply the actual project share of supported cumulative activity to manufacturing burden, then normalize by the same package area. The cumulative ledger proves all assigned shares are no greater than one; unknown denominators remain review without a numeric result. | cp_assets / cp_formwork_assets; cp_handover | Attributable manufacture burden per declared reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | dataset | Preserve surveyed area and complete configuration by use, layer structure and acceptance scope; equal area does not establish equal load/use function. | cp_handover; faa-airport-construction-2018 |
| quality_records | all inventory rows | Retain whole-period records, calibration, rejections/corrections and subcontracting; reconcile net receipts, installed work and waste. Missing records preclude complete data claims; no default losses fill gaps. | cp_site; cp_base; cp_flexible; cp_rigid; cp_waste |
| quality_environment | utilities; waste | Require evidence for water routes, particle fractions, release media and fossil origin. Historical AP-42 aggregate factors are not airport-site defaults; ambient monitoring concentrations do not directly establish project emission mass. | cp_utilities; epa-construction-dust-1995; epa-concrete-washout-2012 |
| quality_gaps | dataset | Disclose unresolved UUIDs, missing upstream coverage, unmetered intervals, asset-manufacture share gaps, method applicability and scientific review status. | cp_assets / cp_formwork_assets; supplier records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_airfield | Check 1 m2 output, Area property, surveyed area, delivery completeness and qualifiers; all rows/protocols share the same package denominator. Missing survey/attribution evidence or overlapping area makes data incomplete. | un-cpc3-2025 |
| validate_route | dataset | Reconcile earthworks, subgrade, aggregate, asphalt/concrete/turf layers and specified associated works with actual design, documenting applicability/absence and corrections. An empty UUID does not imply absence; collection labels cannot complete the inventory. | faa-airport-construction-2018 |
| validate_identities | all inventory rows | Verify each public identity substance, state, route, geography/voltage, environmental medium and reference property; unsupported mass/area/volume relationships remain unresolved. Align bilingual row_id, rule_id, UUID and official Chinese names. |  |
| validate_coverage | dataset | Check no overlap between site combustion, transport, upstream manufacture and treatment. Reconcile water/waste destinations, exact emission species and cumulative asset shares. Gaps prevent complete environmental-inventory claims; site delivery confers neither whole-life coverage nor scientific/regulatory approval. | fhwa-pavement-lca-2016; epa-concrete-washout-2012 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Per-square-metre construction delivery inventory for declared airfield use/structure; use verified upstream links at declared gates; compare only matching function, load, structure, climate and boundary |
| excluded_use | Whole-life claims; aircraft operation; general construction service; automatic functional equivalence per area; default life/recipe/mass; regulatory approval |
| required_metadata | All reference qualifiers; surveyed total area/zones; layer structure; delivered associated facilities; stage totals, attribution and units; signed acceptance; source gates and update date |
| required_quality_disclosure | Missing identities/data/upstream; actual measurement/calculation methods; emission applicability; unmetered intervals; reused-asset cumulative shares; all later-stage omissions |
| update_trigger | Changes to use, geometry, structure, load requirements, site, delivery configuration, supply, construction measurements or evidence/identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, p. 279. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 53213 entity boundary including taxiways, aprons and related non-building structures; classification scope only |
| faa-airport-construction-2018 | official_guidance | FAA AC 150/5370-10H, Standard Specifications for Construction of Airports, 21 December 2018, updated errata 19 August 2020. https://www.faa.gov/documentLibrary/media/Advisory_Circular/150-5370-10H.pdf | P-152 pp.103–116 earthworks; P-154 pp.121–128 subbase; P-209 pp.173–182 crushed base; P-217 pp.207–214 aggregate/turf; P-401 pp.263–293 asphalt; P-501 pp.347–390 concrete; P-605 p.499 onward joints; P-620 p.521 onward markings; P-621 p.537 onward grooves; D-701 p.575 onward drains; L-125 p.713 onward lighting; T-901 p.613 onward seeding, T-904 p.627 onward sodding, T-905 p.633 onward topsoiling. US qualitative construction/acceptance evidence, without importing numeric limits, recipes, load thresholds or compliance requirements |
| fhwa-pavement-lca-2016 | official_guidance | FHWA-HIF-16-014, Pavement Life-Cycle Assessment Framework, July 2016, §1.2 p.1-4; §3.2.3; Chapter 4. https://rosap.ntl.bts.gov/view/dot/38470/dot_38470_DS1.pdf | Road-framework stage distinctions and boundary disclosure for production/construction/use/maintenance/end-of-life; no road-vehicle impacts or airport service-life values transferred |
| epa-construction-dust-1995 | official_guidance | US EPA AP-42 §13.2.3 Heavy Construction Operations, January 1995, pp.13.2.3-1–2. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | Historical qualitative construction-dust mechanisms and site conditions only; no old aggregate TSP factor or inferred PM fractions adopted |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice: Concrete Washout, EPA 833-F-11-006, February 2012, pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Concrete washout liquid, settled solids, containment and actual water-route distinction; no assumed soil/water discharge or default pH/concentration |
