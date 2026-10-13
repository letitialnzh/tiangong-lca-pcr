---
pcr_id: pcr.constructions-and-construction-services.constructions.long-distance-line-infrastructure-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Long-distance communication and power-line infrastructure delivery

## 1. Scope and Applicability

This PCR defines the foreground methodology for a complete accepted long-distance communication or high-tension power-line construction object. It covers overland, underground and submarine transmission lines, long-distance railway electricity lines, and transformer stations/pylons belonging to that delivery, including separately accepted stations/supports where their complete physical interface is declared. The functional product is the delivered civil/electrical/communication entity, not installation labour or a bag of materials. CPC 3.0 53242 supplies scope context only ([UNSD explanatory notes, p.280](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf)).

Exclude low-tension/local distribution (53252), fluid/gas pipelines, isolated factory cable/transformer manufacture, whole railway track infrastructure outside its line-power interface, and operational energy/telecom transmission service. Select every actual design branch and explicitly record its beginning/ending state, site, geometry, complete configuration, acceptance criteria and included/excluded lifecycle stages. The default is construction-to-accepted-delivery foreground, with upstream products and transport linked separately; it does not by itself establish complete cradle-to-gate or whole-life coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.long-distance-line-infrastructure-delivery |
| classification_refs | CPC 3.0 53242 — Long-distance communication and power lines (cables); context, not accepted mapping |
| covered_products | Accepted complete line object/defined section, transmission station or pylon with explicit endpoints and support/ancillary interface |
| excluded_products | Local low-tension distribution; pipelines; standalone component manufacture; construction-service contract; operation service |
| representative_product | One actual documented long-distance transmission/communication object, not an assumed kilometre or mass |
| production_route | Actual civil preparation → design-specific overhead/land/submarine/station works → tests and restoration → signed delivery |
| market_state | Installed, configured, tested and accepted at declared site/interface; required energised/optical/civil state evidenced |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted long-distance communication or power-line infrastructure delivery |
| How much | 1 item |
| How well | Meets the actual declared transmission/communication function and signed configuration/test requirements; disclose rated voltage/capacity or optical configuration, physical interfaces, geometry and limits |
| How long or cycle | One actual construction-and-acceptance event with real start/end/acceptance dates; future life, repair and operation are not part of this reference cycle |
| reference_flow_link | `reference_line` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted long-distance communication or power-line infrastructure delivery |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | object ID; actual site/country; start/end/acceptance dates; long-distance function; endpoints/chainage and actual route length; physical cable/conductor lengths and counts; rated voltage/capacity or fibre/type/system configuration; installed support/civil/station/terminal interfaces; actual dimensions and ground/seabed conditions; new/retained/replaced assets; supply state; applicable test results and signed acceptance; foreground/upstream/transport/operation/demolition coverage; applicability evidence under boundary_qualifiers for genuinely absent route/cable/rating attributes |

`item` is the display alias of public `Item(s)`; Chinese 件 denotes exactly the same Number of items unit. Each object is uniquely identified; no reference mass M or default per-item/per-km mass is defined. Optional results per actual route metre require an explicitly declared measured compatible route length and unchanged complete object burden; physical cable length must never silently replace route length. Required qualifiers belong in dataset metadata, process notes and reference-flow description; missing qualifiers make the concrete reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference` | Accepted long-distance communication or power-line infrastructure delivery | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | The fixed reference output is 1 item, one complete declared accepted object; cp_delivery verifies configuration and count. No mass conversion is implied. |
| `measurement_components` | material, component and waste rows whose native properties are mass, length, volume or count | Mass; Length; Volume; Number of items | kg; m; m3; item | Retain each actual primary property/state. Measure component mass, physical cable length, wet concrete volume and device count separately; component conversion requires actual same-design/state records in cp_materials; waste conversion uses cp_waste with its measured same-state volume, bulk density, moisture and provenance. Do not use public secondary screening factors. Exchanges declared in energy, transport and land units retain Net calorific value/MJ, Goods transport (mass*distance)/t*km and area-time/m2*a under their specific rules. This does not impose MJ on a mass-based fuel: marine_fuel retains Mass/kg under cp_marine, with batch density for any volume conversion; component-specific cp_materials requirements do not apply to that separately collected fuel. No conversion of those quantities into material mass is implied. |
| `measurement_energy` | electricity and diesel rows declared with the native Net calorific value/MJ; excludes marine_fuel | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain public primary property; actual meter/batch data in cp_energy support kWh or mass/volume to MJ, with no assigned demand/density/heating value. The separately supplied marine_fuel retains its declared Mass/kg and cp_marine tank/bunker balance; volume conversion requires actual same-batch density. Auxiliary heating-value data do not create a second fuel input or replace that native kg exchange. |
| `measurement_resources` | Water and land | Mass; Volume; Area; Area*time | kg; m3; m2; m2*a | Keep resource input, wastewater and receptor release distinct; sea-water resource is Mass/kg with actual mass or volume and same-salinity/temperature evidenced density, never an assumed density. Preserve original volume balance separately. m2*a uses actual measured area/dates with 365-day conversion only, not asset life. |

Public property and unit-group bindings used in these rows:

| Flow property | Property UUID | Unit group UUID | Units and conversions |
| --- | --- | --- | --- |
| Mass | `93a60a56-a3c8-11da-a746-0800200b9a66` | `93a60a57-a4c8-11da-a746-0800200c9a66` | kg = 1.0 kg; t = 1000.0 kg |
| Net calorific value | `93a60a56-a3c8-11da-a746-0800200c9a66` | `93a60a57-a3c8-11da-a746-0800200c9a66` | MJ = 1.0 MJ; kWh = 3.6 MJ |
| Volume | `93a60a56-a3c8-22da-a746-0800200c9a66` | `93a60a57-a3c8-12da-a746-0800200c9a66` | m3 = 1.0 m3 |
| Length | `838aaa23-0117-11db-92e3-0800200c9a66` | `838aaa22-0117-11db-92e3-0800200c9a66` | m = 1.0 m; km = 1000.0 m |
| Number of items | `01846770-4cfe-4a25-8ad9-919d8d378345` | `5beb6eed-33a9-47b8-9ede-1dfe8f679159` | Item(s) = 1.0 Item(s); Dozen(s) = 12.0 Item(s) |
| Area*time | `93a60a56-a3c8-21da-a746-0800200c9a66` | `93a60a57-a3c8-20da-a746-0800200c9a66` | m2*a = 1.0 m2*a; m2*d = 0.002739726 m2*a |
| mass*distance | `118f2a40-50ec-457c-aa60-9bc6b6af9931` | `3620148f-c5db-48ce-9065-a10092089aca` | kg*km = 1 kg*km; t*km = 1000 kg*km |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented actual site/route baseline and existing assets before this delivery work, with separately supplied completed materials/equipment received at their stated gates |
| starting_condition_role | Construction foreground start; existing condition and upstream receipts are not assumed burden-free |
| product_classification_scope | Complete delivered long-distance communication/high-tension/railway-power lines and transmission stations/pylons; excludes local low-tension distribution |
| recursive_input_rule | Record any in-category purchased/reused line section or station once with its source/interface and attributed prior burden; no recursive duplication of its construction |
| upstream_dataset_requirement | Link each actual material/component production gate, packaging, external transport and waste treatment separately with representative records; retain unlinked gaps |
| disclosure | Declare route branches, site, period, new/retained/replaced geometry, supply gate, actual work stages and tests, restoration, temporary/capital assets, allocation, environmental and lifecycle coverage, cutoffs and missing links |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_delivery` | Foreground stages | Include actual receiving/unloading, project survey/preparation, civil works, relevant line/station installation, site tests/commissioning, temporary removal and restoration through the signed delivery interface. Map all real branches; an absent branch needs documented not_applicable, not guessed zero. | `national-grid-overhead-2025`; `eirgrid-underground-2026`; `itu-submarine-g971-2024` |
| `boundary_qualifiers` | all reference qualifiers, cp_delivery geometry/fields, dq_geometry and publication metadata | Every object requires its identity, site/country, real dates, long-distance function, delivered physical interfaces, applicable dimensions and signed acceptance. Line sections require actual endpoints/chainage/route length and all delivered cable/conductor lengths/counts. For separately delivered stations or supports, measure the actual station/support geometry and interfaces; attributes of genuinely absent route/cable/rating branches are explicitly not_applicable with drawings/scope evidence, not zero or missing measurements. This exception applies to the required-qualifier list, all collection fields, geometry requirements and required_metadata. Unknown applicable values remain gaps; do not borrow an adjacent line or invent length/capacity. | |
| `boundary_upstream` | Purchased materials, equipment and logistics | Manufacturing, quarrying/refining and supplier packaging are upstream. Link complete supplied components at their declared gate and actual transport legs; prevent counting embedded copper, steel, insulation, oil or gas again. A service dataset containing construction must not be added on top of this same foreground construction. Missing links must be disclosed before any expanded cradle-to-gate claim. | `eirgrid-underground-2026`; `national-grid-overhead-2025` |
| `boundary_existing` | Existing line assets and shared interfaces | Document pre-existing retained assets separately from new/replaced work. A purchased or reused in-category line section is one input with its source burden and interface; do not recursively re-create its installation or count it again in railway, station, wind farm or adjacent line datasets. Brownfield demolition needed before this delivery is identified separately; future demolition is outside. | `rdso-rail-ohe-2020`; `cpc3-explanatory-notes-2025` |
| `boundary_later_stages` | Operation, maintenance and end of life | Network transmission losses, delivered energy/traffic service, vegetation maintenance, leakage during use, repairs, replacements and end-of-life demolition/recycling are outside the default delivery inventory. Any extension declares actual scenario, dates, evidenced life/activity, replaced quantities and destinations separately; no default lifetime, salvage credit or full-life claim follows from acceptance. | `itu-submarine-g971-2024`; `ifc-power-ehs-2007` |
| `boundary_environment` | Environmental coverage | Separate technosphere water, direct freshwater/groundwater abstraction, contained waste liquids and actual direct receiving-medium releases. Inventory only evidenced chemical species/particle fractions with matching media and timing. Add actual route-specific contaminants, land changes, marine transfers and noise/habitat observations; unresolved identities or unmeasured potentially relevant releases are explicit gaps, not assumed absence. | `ifc-power-ehs-2007`; `eirgrid-submarine-2022` |

## 6. Process Inventory Structure

Use the following atomic cards only when their individual physical conditions apply. The complete inventory is derived from the actual drawings/BOM and task ledger: retain required work for that design, document absent rows as not_applicable, and add each real missing component/chemical/waste/release as a specific atomic row with property/unit, collection and identity review. A blank UUID is a disclosed identity gap, not an instruction to substitute a broader flow. Direct releases are never presumed from equipment/fuel existence.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `logistics` | Component receipt and external transport | required | Every declared delivery; model actual modes and interfaces | construction foreground | `reference_line` |
| `site_civil` | Survey, access, excavation, foundations and reinstatement | conditional | Actual terrestrial support, buried route, station or shore civil work | construction foreground | `reference_line` |
| `overhead_install` | Overhead line and railway-power installation | conditional | Actual overhead/railway-power branch or separately accepted support | construction foreground | `reference_line` |
| `land_cable` | Land power/communication cable laying and jointing | conditional | Actual land underground or installed land cable | construction foreground | `reference_line` |
| `marine_install` | Submarine route preparation, laying and protection | conditional | Actual submarine communication or power branch | construction foreground | `reference_line` |
| `station_install` | Transmission/communication station assembly and tests | conditional | Station or terminal equipment inside declared accepted object | construction foreground | `reference_line` |
| `site_operation` | Construction equipment, utilities and environmental transfers | required | All actual construction tasks; individual exchanges remain conditional | construction foreground | `reference_line` |
| `handover` | Acceptance, temporary-work removal and delivery | required | Every complete declared construction object | construction foreground | `reference_line` |

### Process: Component receipt and external transport (`logistics`)

Check delivery tickets, supplier gates, actual transport legs and unloading. Road freight is one conditional mode card. Rail/sea freight, abnormal-load transport and returns require their own measured atomic service rows. Do not add direct truck emissions if already included in the linked transport service.

#### Inputs

##### Product flows

###### Articulated Truck (`road_freight`)

When this actual vehicle mode delivers components or removes construction waste, collect each actual load, route distance and vehicle specification; record background service separately from site machinery fuel. Other modes need distinct actual rows. Adopt only the public diesel HDV cargo service with total vehicle weight 35.0–40.0 t, consumption mix to consumer. Payload, not gross vehicle weight, determines transport work; t*km is 1000 kg*km in its public unit group.

- Selected flow: Articulated Truck `e3fa17aa-88cc-49cf-97ae-a56794acd47a`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / t*km
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_logistics`
- Sources: `national-grid-overhead-2025`

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

#### Outputs

##### Product flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

### Process: Survey, access, excavation, foundations and reinstatement (`site_civil`)

Collect topographic/geotechnical survey and utility clearance; actual vegetation removal, topsoil stripping/storage, temporary access/pads, excavation/dewatering, foundation reinforcement/formwork/concrete placement/curing, joint chambers and drainage. Record HDD only at an actual trenchless crossing/shore approach. Distinguish retained excavated soil, imported fill and waste export. Restore topsoil, drains, roads and habitats actually disturbed; remove temporary crossing protection and works. Use actual dimensions and recipes, not generic trench depth or concrete per tower. Site batching, piling, asphalt reinstatement or coatings require their separate actual constituent/process rows; purchased wet concrete and its constituent manufacture cannot both be counted.

#### Inputs

##### Product flows

###### Crushed stone aggregate for construction access (`fill_aggregate`)

Conditional imported granular material for actual access tracks, working pads or substation platform. Record mineralogy, grading and supply state; retained on-site excavated material is an internal transfer.

- Selected flow: Crushed stone aggregate for construction access
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`; `eirgrid-underground-2026`

###### Fresh ready-mixed concrete for line foundations (`ready_mix`)

Only delivered wet ready-mix used for actual tower, pole, gantry, joint-bay or station foundations; record each approved batch recipe, strength/exposure specification, tickets and returned concrete. A site-cast cured concrete identity does not describe this purchased wet input.

- Selected flow: Fresh ready-mixed concrete for line foundations
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`; `eirgrid-underground-2026`

###### Hot rolled rebar steel (`rebar`)

Only actual hot-rolled low-alloy reinforcing steel with C≤0.2%, factory-gate supply, matching the public identity. Reconcile installed bars, offcuts, receipts and returns; neither mixed structural-steel stock nor tower steel is this row.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`; `eirgrid-underground-2026`

###### Reusable steel concrete formwork (`steel_formwork`)

When steel formwork is used, attribute manufacture by the same identified formwork asset and measured mass, documented cumulative service and this project share. Sum of manufacture shares across all projects and periods must not exceed one; uncertain service denominator remains review.

- Selected flow: Reusable steel concrete formwork
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reuse`
- Sources: `national-grid-overhead-2025`

###### Bentonite water-based horizontal-directional-drilling fluid (`hdd_mud`)

Only actual trenchless crossing or shore approach using this measured formulation; identify solids concentration, additives individually and recovered recirculation. Do not require drilling for every route or use injection-well remediation mud as its identity.

- Selected flow: Bentonite water-based horizontal-directional-drilling fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-submarine-2022`; `eirgrid-underground-2026`

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

#### Outputs

##### Product flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Waste flows

###### Uncontaminated surplus mineral excavation soil (`excavated_soil`)

Actual surplus soil exported as waste; retain contamination tests and actual destination/compliance evidence. Missing testing or destination evidence remains a disclosed gap, not a reason to omit actual exported quantity or assume uncontaminated soil. Survey excavated/reused/exported volumes separately; mass requires weighbridge tickets or measured same-state bulk density. Contaminated soil needs its own row.

- Selected flow: Uncontaminated surplus mineral excavation soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `national-grid-overhead-2025`; `eirgrid-underground-2026`; `ifc-power-ehs-2007`

###### Alkaline cementitious concrete-washout water (`washout`)

When actual concrete tools or vehicles are washed on site, record contained liquid leaving for treatment; specify pH, suspended solids and destination. Captured slurry is not an emission to freshwater; dried solids need a separate row.

- Selected flow: Alkaline cementitious concrete-washout water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eirgrid-underground-2026`; `ifc-power-ehs-2007`

###### Sediment-bearing excavation dewatering water sent to treatment (`dewatering_wastewater`)

Only pumped water actually transferred to off-site or separately modelled treatment; record composition and volume. Keep this distinct from direct permitted environmental discharge, purchased water and abstracted resource water; each parcel has one destination.

- Selected flow: Sediment-bearing excavation dewatering water sent to treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `national-grid-overhead-2025`; `eirgrid-underground-2026`; `ifc-power-ehs-2007`

###### Spent bentonite drilling slurry with mineral cuttings (`hdd_spoil`)

Only actual HDD residues exported after separation; measure wet mass and water/solids content, contamination and treatment route. Reused drilling fluid stays internal and is not exported twice.

- Selected flow: Spent bentonite drilling slurry with mineral cuttings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eirgrid-submarine-2022`; `eirgrid-underground-2026`

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

### Process: Overhead line and railway-power installation (`overhead_install`)

For an actual line: receive/layout/erect supports by cranes and work platforms, torque/bond fittings, install insulators, string/sag/tension conductors and earth wire, install actual OPGW/ADSS and optical splices, and record temporary earthing/crossing protection removal. Pure aluminium, ACSR, ordinary steel earth wire, optical ground wire and railway contact/catenary wires are distinct. Actual railway feeders, masts/portals, droppers, tensioners, return conductors and traction-substation interfaces require complete measured configuration; the track/civil railway itself is a separate entity. Apply current project electrical/mechanical tests and actual wire geometry; no historical RDSO tension, alloy, span or speed default is imposed.

#### Inputs

##### Product flows

###### Fabricated hot-dip-galvanized steel lattice transmission tower (`tower_steel`)

Only actual lattice-tower construction: factory-complete coated steel sections with fasteners as declared by the supplier. Preserve coating and connection scope; erection cranes/bolting/stringing energy are site foreground, steelmaking/fabrication/galvanizing are upstream.

- Selected flow: Fabricated hot-dip-galvanized steel lattice transmission tower
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`

###### Precast reinforced-concrete line pole (`precast_pole`)

Only a design with this actual support; supplier complete pole already includes its concrete and embedded reinforcement. Do not add pole manufacture concrete/rebar again in site foundations. Other support materials require their own rows.

- Selected flow: Precast reinforced-concrete line pole
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`; `itu-optical-installation-2009`

###### Bare aluminium conductor steel reinforced (`acsr`)

Only actual ACSR, with aluminium strands and steel core recorded as one complete purchased conductor. Use drum length and traceable same-design linear mass or weighing; do not identify it with pure aluminium cable or unreinforced aluminium wire.

- Selected flow: Bare aluminium conductor steel reinforced
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`

###### Aluminium Cable (`aluminium_conductor`)

Only actual bare stranded aluminium cable at factory gate, without steel reinforcement or insulation, consistent with the public uninsulated cable classification. Supplier alloy/composition and section must match; not an ACSR substitute.

- Selected flow: Aluminium Cable `6017686d-e8e6-459d-92c2-39c41a05cb26`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`

###### High Tension Electrical Porcelain Insulator (`porcelain_insulator`)

Only actual high-tension porcelain insulator assemblies matching the public product, including declared galvanized connection hardware. Record ceramic/mechanical/electrical rating and measured complete scope; polymeric or glass insulators require distinct identities.

- Selected flow: High Tension Electrical Porcelain Insulator `25b53989-7f68-42e3-9281-9f83febbfa51`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`

###### Optical fibre composite overhead ground wire (`opgw`)

When actual OPGW is installed, record complete optical/metallic wire length, fibre count, metallic construction, joints and installation tension. It is not bare fibre, ACSR phase conductor or a generic electric cable.

- Selected flow: Optical fibre composite overhead ground wire
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`; `itu-optical-installation-2009`

###### Galvanized-steel conductor suspension clamp (`clamp`)

Only actual separately supplied clamp of this material and duty; identify count and certified mass. Do not duplicate hardware already included in an insulator or support supply. Other fitting designs require separate rows.

- Selected flow: Galvanized-steel conductor suspension clamp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`

###### Silver-bearing grooved copper railway contact wire (`rail_contact`)

Only actual Cu-Ag contact wire; retain supplier alloy, section and complete physical wire length, measured linear mass if converting. The historical RDSO scheme supplies a configuration example, not a universal alloy or size.

- Selected flow: Silver-bearing grooved copper railway contact wire
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `rdso-rail-ohe-2020`

###### Copper-cadmium railway catenary wire (`rail_catenary`)

Only actual Cu-Cd catenary; identify alloy and length independently of the contact wire. Other alloys need their own specific rows and actual occupational/environmental evidence.

- Selected flow: Copper-cadmium railway catenary wire
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `rdso-rail-ohe-2020`

###### Galvanized-steel line earth conductor (`steel_earth`)

Actual separately supplied steel earth conductor consumed for the declared work, including cutting, damage and rejected/replaced material before acceptance; retain measured section, consumed and installed lengths separately, including railway buried earth conductor when present. Not copper wire, optical ground wire or bare aluminium phase conductor.

- Selected flow: Galvanized-steel line earth conductor
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `rdso-rail-ohe-2020`

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

#### Outputs

##### Product flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

### Process: Land power/communication cable laying and jointing (`land_cable`)

Record drums, storage/handling, actual trench/duct/HDD interfaces, bedding, cable pulling or air blowing, winch/compressor demand, separately installed joints/terminations/link boxes, fibre splicing and actual thermal backfill/reinstatement. Cable length is physical cable length, not trench/route length; record cable count, phases/circuits, slack and spare loops. Joint bays/C2 communication chambers, marker boards/tape, LV auxiliary/control cables and actual accessories absent from baseline cards must be added separately from the design BOM. Verify real duct proofing, sheath/insulation/bonding and optical OTDR/loss tests. EirGrid fully ducted arrangements are not mandatory for direct burial or other jurisdictions.

#### Inputs

##### Product flows

###### High-voltage cable (`hv_cable`)

Only actual factory-gate high-voltage cross-linked extruded-insulation power cable matching CN GB/T 11017.1-2024 or GB/T 18890.1-2015 and its real voltage, conductor, cross-section and layers. Public Length is retained; cable length is summed over physical cables, not route length. Identity excludes accessories, installation and operating losses. Other specifications need separate identity review.

- Selected flow: High-voltage cable `7ecda87e-bf67-4910-8fbe-c5f5e84549ca`
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-underground-2026`

###### Land optical fibre transmission cable (`fibre_land`)

Actual duct-pulled, air-blown, directly buried or aerial telecom cable, selected by actual sheath, fibre type/count, armour and installation environment; record each complete cable length and mass only if separately measured. Electric copper cables are not this identity.

- Selected flow: Land optical fibre transmission cable
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-optical-installation-2009`

###### High-density polyethylene cable duct (`hdpe_duct`)

Only actual ducted installation with measured diameter, wall thickness, grade and length. Record trench, duct laying, cleaning/proving and cable pulling/blowing; ducts are not mandatory for direct burial or overhead routes.

- Selected flow: High-density polyethylene cable duct
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-underground-2026`; `itu-optical-installation-2009`

###### XLPE high-voltage cable straight-joint assembly (`power_joint`)

Actual separately supplied complete compatible joint assembly; declare voltage, conductor size, screen bonding and component supply scope. Jointing consumables not included in that assembly need individual atomic rows from the actual kit list.

- Selected flow: XLPE high-voltage cable straight-joint assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-underground-2026`

###### XLPE high-voltage cable outdoor termination assembly (`power_termination`)

Only actual complete outdoor termination matching the cable and interface; indoor GIS interfaces require separate records. Test/energisation and site labour are outside the component manufacture dataset.

- Selected flow: XLPE high-voltage cable outdoor termination assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-underground-2026`

###### silica sand (`silica_backfill`)

Only actual silica-sand bedding/backfill matching the public 0.020–3.350 mm supply and actual mineral composition. The bilingual original differs in wash/magnetic separation wording, so supplier production-route compatibility must be independently resolved before linking a production dataset. This is not a fixed thermal-resistivity or composition prescription.

- Selected flow: silica sand `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-underground-2026`

###### High-voltage cable sheath-bonding link box (`link_box`)

Only separately supplied complete bonding box in the real cable design; declare bonding scheme, voltage limiter and connector scope. Do not replace it by generic enclosure steel.

- Selected flow: High-voltage cable sheath-bonding link box
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-underground-2026`

###### Precast reinforced-concrete cable joint-bay chamber (`precast_joint_bay`)

Only actual factory-complete chamber matching joint layout and load class; on-site cast chambers instead use their actual constituent deliveries and site work, not this complete upstream assembly.

- Selected flow: Precast reinforced-concrete cable joint-bay chamber
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-underground-2026`

###### Sealed optical-fibre splice closure (`fibre_closure`)

Actual separately purchased closure with port count, fibre capacity, sealing and environmental rating. Splicing, blowing/pulling and optical testing are collected as actual foreground work; not an electric power joint.

- Selected flow: Sealed optical-fibre splice closure
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-optical-installation-2009`

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

#### Outputs

##### Product flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

### Process: Submarine route preparation, laying and protection (`marine_install`)

Collect seabed/route survey, actual clearance/pre-lay grapnel work, shore landing/HDD, load-out, vessel mobilisation and survey/laying/trenching/support voyages, lay/bury/protect, joint/repeater/branch-unit installation, as-laid position/depth and in/post-lay tests. Burial and rock/mattress protection follow the actual risk-based project design; there is no universal requirement. Vessel fuel covers real task days/transits, weather delays and standby with a declared sharing basis. Distinguish DC/AC power and optical cable acceptance methods. Actual exposed seabed disturbance, dredged sediment, direct marine emissions/noise and water use require receptor-specific evidence and individual rows; absent quantification stays incomplete.

#### Inputs

##### Product flows

###### Marine gas oil for cable-laying vessel (`marine_fuel`)

Only actual vessel gas-oil combustion during route survey, loading, laying, trenching, protection and acceptance voyages; identify vessel, fuel certificate and task dates. Exclude separately linked freight fuel and later repair voyages.

- Selected flow: Marine gas oil for cable-laying vessel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_marine`
- Sources: `eirgrid-submarine-2022`; `itu-submarine-g971-2024`

###### direct current cable (`dc_submarine_cable`)

Only actual factory-gate HVDC submarine export cable linking an offshore wind farm to land as the public record specifies; preserve copper/aluminium core, insulation, armour and voltage from supplier evidence. It does not cover generic submarine AC, telecom, non-wind interconnectors or laying. EirGrid AC test limits cannot validate this DC branch; use the actual DC supplier/project test programme.

- Selected flow: direct current cable `c94b6a7b-8148-45eb-95e0-be5aaef0ad9d`
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-submarine-2022`

###### Armoured submarine alternating-current power cable (`ac_submarine_cable`)

Actual completed AC cable with rated voltage, core count, section, insulation and armour from the real design; sum each cable length including measured slack. EirGrid source applies specifically to 220 kV AC offshore connections; other AC designs need their own applicable specification. That source covers fixed/static XLPE three-phase 50 Hz systems up to 200 m water depth, excluding inter-array and floating systems and land cable beyond the shore transition joint.

- Selected flow: Armoured submarine alternating-current power cable
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-submarine-2022`

###### Armoured submarine optical fibre transmission cable (`fibre_submarine`)

Actual complete submarine telecom cable; declare armouring, fibre count, repeatered/unrepeatered design and water depth. Survey, route clearance if required, shore landing, laying, conditional burial/protection and in-process/post-lay tests belong to this foreground.

- Selected flow: Armoured submarine optical fibre transmission cable
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-submarine-g971-2024`

###### Submarine optical repeater (`repeater`)

Only actual repeatered communication system; record separately supplied completed devices and joints. Factory cable assemblies may already contain repeaters; reconcile supplier scope to prevent duplicate embedded inputs.

- Selected flow: Submarine optical repeater
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-submarine-g971-2024`

###### Precast concrete submarine cable protection mattress (`concrete_mattress`)

Only actual non-burial protection or crossing design selecting this completed mattress; measure each unit scope and deployment. Do not impose rock/mattress protection or the EirGrid burial preference on every submarine cable.

- Selected flow: Precast concrete submarine cable protection mattress
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-submarine-2022`

###### Quarried crushed rock for submarine cable protection (`protection_rock`)

Only actual rock placement design with real grading, source and placement tickets; separate its transport vessel service and offshore placement fuel. Geological excavation sediment is not purchased protection rock.

- Selected flow: Quarried crushed rock for submarine cable protection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `eirgrid-submarine-2022`

###### Submarine optical branching unit (`branch_unit`)

Only a branched communication system actually containing this unit; reconcile its complete supply scope with cable/repeater packages. It is not required in a point-to-point unrepeatered system.

- Selected flow: Submarine optical branching unit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-submarine-g971-2024`

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

###### sea water (`sea_water_resource`)

Only actual direct seawater abstraction crossing the environment/foreground boundary, for example evidenced seawater jetting/fluidisation. Public CAS 7732-18-5 resource identity has primary Mass/kg, not Volume. Collect actual seawater mass or measured volume times evidenced density at the same actual salinity/temperature; unknown density remains review. Keep original volume parcels and return/treatment/retention balanced separately. No consumption or abstraction is presumed from a submarine route.

- Selected flow: sea water `172a3db9-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eirgrid-submarine-2022`

#### Outputs

##### Product flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

###### Water (`water_to_sea`)

Only actual evidenced liquid molecular water discharged directly to sea water, immediate receiving-medium transfer, CAS 7732-18-5, Volume/m3. Keep suspended/dissolved contaminants as separately identified atomic emissions with real sampling. This is not sea-water resource input, freshwater discharge or wastewater sent to treatment. Reconcile the same water parcel once with measured abstraction/retention/reuse; no generic sea-water density is assigned.

- Selected flow: Water `631ecf13-0e51-4e35-8235-c6f80c60d72c`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eirgrid-submarine-2022`

### Process: Transmission/communication station assembly and tests (`station_install`)

Record station platform/buildings/drainage/oil containment, foundations/gantries, actual HV/LV equipment, transformers, switching, earthing/control cables and auxiliary systems. Delivered complete transformer/breaker packages retain embedded oil/gas/material scope; only site-added quantities enter separate charge rows. AIS, GIS, vacuum and other technologies are distinguished. Capture filling, connections, commissioning power, oil/gas reconciliation and actual environmental incidents. Telecom terminal power-feed, transponder and other actual equipment is mapped by real supply scope; later network operation stays separate.

#### Inputs

##### Product flows

###### Factory-completed oil-immersed power transformer (`power_transformer`)

Actual transformer station within delivery, with specific rating, voltage ratio, equipment mass/configuration and factory oil scope from supplier records. Generic product UUID remains unresolved; do not select a 400 kVA distribution transformer for a transmission station.

- Selected flow: Factory-completed oil-immersed power transformer
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`; `ifc-power-ehs-2007`

###### Interconnecting autotransformer (`autotransformer`)

Only actual ODFPSZ-120000/500 interconnecting autotransformer with rated capacity 120/120/21 MVA, factory-gate state exactly matching the public record. Preserve Number of items; do not use it for another model or count again in power_transformer. Declare oil, bushings and auxiliaries included by supplier.

- Selected flow: Interconnecting autotransformer `149ef172-b895-4fb6-b19b-f974542caa7c`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`

###### High-voltage SF6 circuit-breaker assembly (`circuit_breaker`)

Only actual SF6 breaker in the accepted station design, with rated voltage/current, interrupting duty and factory gas charge declared. Other air/vacuum/gas technologies need separate equipment rows; SF6 is never mandatory because a station exists.

- Selected flow: High-voltage SF6 circuit-breaker assembly
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`; `ifc-power-ehs-2007`

###### copper wire (`earth_wire`)

Only actual separately supplied bare copper earthing wire matching the factory-gate public copper-wire semifinished product; record copper purity, cross-section and bare state. Insulated wire/cable and completed grounding connectors need distinct finished identities; insulation/connectors must not enter this bare-copper kg. Equipment-embedded wire must not be counted again.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `national-grid-overhead-2025`; `eirgrid-underground-2026`

###### Transformer insulating oil (`insulating_oil`)

Only separately charged pure inhibited mineral transformer oil conforming to IEC 60296, at refinery gate, GLO screening identity. Exclude factory oil already included in transformer supply; ester/silicone/mixed oils need separate identities. The associated refinery screening dataset is not automatically a representative upstream production inventory.

- Selected flow: Transformer insulating oil `252efad6-76d5-55f4-a338-0ed8d03cf335`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ifc-power-ehs-2007`

###### Sulfur hexafluoride gas for circuit-breaker filling (`sf6_charge`)

Only actual separately supplied SF6 charge measured by cylinder/equipment mass balance, purity and humidity stated. Factory precharge is already embedded in supplied equipment; retrieved elementary air-emission flows cannot identify the product gas.

- Selected flow: Sulfur hexafluoride gas for circuit-breaker filling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `ifc-power-ehs-2007`

###### Submarine optical terminal transponder (`terminal_transponder`)

Actual complete terminal equipment consumed within the declared project interface includes failed/rejected units replaced before acceptance. Reconcile gross receipts, opening/closing reusable stock and verified returns/transfers under cp_materials; keep accepted installed count, model, fibre/wavelength configuration and supply boundary separately. Other power feeding and terminal devices require separate actual rows; exclude subsequent telecom service energy.

- Selected flow: Submarine optical terminal transponder
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `itu-submarine-g971-2024`

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

#### Outputs

##### Product flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

###### sulphur hexafluoride (`sf6_air`)

Only measured or verified mass-balanced molecular SF6 actually released during site filling/testing to outdoor air, unspecified subcompartment, immediate release, CAS 2551-62-4. Retained charge and recovered gas are not emissions; indoor or delayed flows are different identities. A merely unexplained balance residual is not proof of leakage.

- Selected flow: sulphur hexafluoride `fe0acd60-3ddc-11dd-ac51-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `ifc-power-ehs-2007`

###### Petroleum mineral transformer oil released to soil (`oil_to_soil`)

Only an actual documented spill crossing to soil, identified by the real mineral oil and receiving soil compartment. Collected oil remains waste; no spill is presumed from oil presence. Do not substitute unspecified hydrocarbons or a product oil UUID for this elementary release.

- Selected flow: Petroleum mineral transformer oil released to soil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incident`
- Sources: `ifc-power-ehs-2007`

### Process: Construction equipment, utilities and environmental transfers (`site_operation`)

Assign each measured site utility, plant fuel, water parcel, waste and direct release once to the actual task/route; this common ledger supports the branch processes and is not an extra copy of their fuel. Record crane, excavator, pump, winch, air-blower/compressor, concrete vibrator, testing equipment and actual vessel separately by equipment ID/activity. Additional fuels/lubricants or utilities need their own specific rows. Retain actual land transformation pairs, restoration, fugitive releases and spill evidence. Noise (airborne/underwater), vibration and habitat effects use location/time/spectrum/receptor observations; no invented sound-energy exchange or universal LCIA factor is assigned. Report unquantified environmental coverage.

#### Inputs

##### Product flows

###### Alternating current (`electricity_lv`)

Only actual CN user-side grid-average AC supply below 1 kV matching this public identity. Meter separate tasks including pumps, cranes, winches, cable blowing/jointing and acceptance equipment. Other geography, voltage or generation needs another identity; exclude embedded upstream and later network operating electricity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eirgrid-underground-2026`; `ifc-power-ehs-2007`

###### Alternating current (`electricity_mv`)

Only actual CN user-side 1–35 kV grid-average AC supply at a distinct measured supply interface. Do not count the same energy at both MV and LV meters; reconcile temporary transformers and site losses. The finished line rating does not determine construction supply voltage.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eirgrid-underground-2026`; `ifc-power-ehs-2007`

###### Diesel (`diesel`)

Only actual distillation/refinement petroleum diesel supply matching the public product; preserve its primary Net calorific value property, not its secondary Mass screening field. Measure actual diesel mass (or volume with batch density) and batch net calorific value to obtain MJ. Blend composition and fossil/biogenic carbon must be evidenced; no default density, heating value or engine demand is assigned.

- Selected flow: Diesel `fbd79004-188c-47a4-900b-96005d994690`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `national-grid-overhead-2025`; `ifc-power-ehs-2007`

###### Potable water supplied at the construction-site meter (`site_water`)

Only actual purchased mains/tanker water at the stated site interface, geography and quality, metered separately from direct resource abstraction and reused water. Public Hong Kong treatment-plant-gate water does not identify unqualified site supply; preserve upstream supply and transport gaps.

- Selected flow: Potable water supplied at the construction-site meter
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eirgrid-underground-2026`; `ifc-power-ehs-2007`

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

###### river water (`river_water`)

Only direct freshwater river abstraction from environment into the declared site boundary, CAS 7732-18-5, with actual extraction country/location and gross meter record. Public resource identity and Volume do not describe tap water, wastewater, sea water or water consumption net of returns.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ifc-power-ehs-2007`

###### ground water (`ground_water`)

Only actual groundwater abstraction including metered excavation dewatering crossing the environment/site interface; state actual country/location and whether diverted or consumed. Distinguish wastewater treatment, return and reuse; do not relabel a river resource as groundwater.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `national-grid-overhead-2025`; `ifc-power-ehs-2007`

###### construction site (`site_occupation`)

Actual construction-site land occupation only, measured nonoverlapping working areas and actual occupation dates; use the public m2*a basis with a approximated as 365 days. Existing overhead easement area is not all disturbed land; underwater seabed is not this land occupation. Record transformation origin/destination separately in actual land-class rows where changes occur.

- Selected flow: construction site `2de36d9f-313b-4fb1-8060-676eecbfec29`
- Flow property / unit: Area*time `93a60a56-a3c8-21da-a746-0800200c9a66` / m2*a
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land`
- Sources: `national-grid-overhead-2025`; `ifc-power-ehs-2007`

#### Outputs

##### Product flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Waste flows

###### Discarded solid-wood cable drum (`wood_drum_waste`)

Only actual drums discarded during the included delivery/construction cycle, including pre-installation damage; distinguish supplier take-back/reuse from waste. Do not add another packaging manufacture input when the supplied cable inventory already includes that drum. Keep the actual discarded drum quantity and its collection, transport and treatment burdens. Any subtraction is limited to an evidenced duplicate input in the identified overlapping supply ledger, never the actual waste quantity. Metal drum fittings and plastic film leaving separately require separate waste rows. A broad wood packaging product cannot identify this waste.

- Selected flow: Discarded solid-wood cable drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eirgrid-underground-2026`; `itu-optical-installation-2009`

###### XLPE-insulated copper power-cable offcut (`cable_scrap`)

Only actual copper-core XLPE cable offcuts leaving the site; record complete composite wet/dry state, armour and screen, destination and recycling treatment gate. Aluminium-core, fibre and bare-wire scraps need distinct rows; no avoided-metal credit is automatic.

- Selected flow: XLPE-insulated copper power-cable offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eirgrid-underground-2026`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fossil`)

Only evidenced molecular fossil CO2, CAS 124-38-9, immediate release to outdoor air/unspecified from actual site or separately foregrounded vessel combustion. Fuel presence alone does not quantify emission; measure or use a documented matching carbon/oxidation method. Exclude biogenic CO2 and purchased-electricity upstream emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-power-ehs-2007`

###### nitrogen monoxide (`no_air`)

Only measured/speciated molecular NO, CAS 10102-43-9, immediate outdoor air/unspecified release from actual equipment. Do not convert aggregate NOx-as-NO2 into NO without reviewed speciation; N2O and NO2 are different substances.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-power-ehs-2007`

###### nitrogen dioxide (`no2_air`)

Only measured/speciated molecular NO2, CAS 10102-44-0, immediate outdoor air/unspecified release. A NOx-as-NO2 factor is not proof of molecular NO2; an erroneous N2O4 synonym cannot change the flow definition.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-power-ehs-2007`

###### particles (PM2.5) (`pm_fine`)

Only actual externally released fine particle mass up to 2.5 µm to outdoor air/unspecified, immediate release, supported by size-resolved measurement or a matching actual-control method. Collected dust and internal air are not this release.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-power-ehs-2007`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Only actual externally released 2.5–10 µm particle fraction, immediate outdoor air/unspecified. Avoid overlap with PM2.5 or PM10 totals; source-matched PM10 minus PM2.5 requires the same sample/control/basis and nonnegative result.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-power-ehs-2007`

###### Particulate matter, particle size unspecified (`pm_unspecified`)

Only verified actual external air/unspecified immediate particulate release with genuinely unmeasured size distribution. Keep characterization coverage explicit; never substitute factory-product fume or water suspended solids. Do not add this total to already represented size fractions.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `ifc-power-ehs-2007`

###### Water (`water_to_freshwater`)

All actual direct discharge to an identified freshwater receptor, including unpermitted or incident releases; record permit/compliance status separately without excluding a physical release. separately quantify specific dissolved/suspended contaminants as atomic releases from sampling. Do not count the same parcel as treatment wastewater; water resource input is not a discharge identity. Marine discharge needs another compartment row. Public identity is molecular water CAS 7732-18-5, immediate emissions to fresh water, Volume/m3; it does not identify any dissolved pollutant.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual measured quantity attributable to the declared accepted object, in the stated unit, reconciled by the linked collection protocol; include only when the row condition is evidenced
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `national-grid-overhead-2025`; `eirgrid-underground-2026`; `ifc-power-ehs-2007`

### Process: Acceptance, temporary-work removal and delivery (`handover`)

Close punch lists and tests, reconcile installed geometry and all component/waste/return records, remove temporary works actually used and complete real reinstatement. Retain dated as-built drawings and signed acceptance covering every declared interface. Energisation, optical commissioning or mechanical/civil acceptance follow the real asset type; acceptance is evidenced, not granted by this PCR. Later maintenance/replacement/repair and demolition are separate dated scenarios with their own inputs, recovered products, wastes and direct releases.

#### Inputs

##### Product flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

#### Outputs

##### Product flows

###### Accepted long-distance communication or power-line infrastructure delivery (`reference_line`)

One complete uniquely identified accepted construction object, possibly a defined line section or separately accepted transmission transformer station/pylon. Its full declared physical interface and supporting works define the item; not one kg of cable, a construction-service contract or an arbitrary work stage.

- Selected flow: Accepted long-distance communication or power-line infrastructure delivery
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `cpc3-explanatory-notes-2025`; `national-grid-overhead-2025`; `eirgrid-underground-2026`; `itu-submarine-g971-2024`

##### Waste flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

##### Elementary flows

No separate exchange is declared here. Actual transfers of this type require their own measured atomic rows if present.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | Tasks and delivered objects | Use direct task/component metering first. If a campaign serves distinct objects, separate their measured quantities; allocate only irreducible shared work by a documented causal physical driver such as actual lift-hours, pulling time, vessel task-hours or serviced work volume. Shares are nonnegative and sum to one over all beneficiaries; explain standby/empty return. Route length alone is not an automatic allocator for dissimilar civil conditions or conductor configurations. | `national-grid-overhead-2025`; `eirgrid-submarine-2022` |
| `allocation_reuse` | Reusable machinery, formwork and temporary components | Keep one asset identity and manufacture boundary. When manufacture is included, attribute measured same-configuration mass/count multiplied by an evidenced dimensionless project share of total service; retain the public property. Maintain a cross-project/period/reuse ledger whose cumulative manufacture shares never exceed one. Unknown life or total service remains review; do not reset complete manufacture to every project. Site fuel/maintenance activities are separate and never reduced by the manufacture share. |  |
| `allocation_waste` | Scrap, excavated soil and recovered components | Waste export, supplier returns, internal reuse and a qualified recovered product have distinct gates. No automatic avoided-metal, avoided-fill or energy credit is applied. Keep collection/transport/treatment burdens and destination evidence; any separately justified recycling/substitution scenario states actual quality, recovery yield and counterfactual with independent review. | `eirgrid-underground-2026`; `ifc-power-ehs-2007` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collection aggregation applies to each stated exchange unit: reconcile receipts, stocks, installed amounts, returns, waste and actual task measurements, then total once for the complete declared accepted object. Each collection record carries its actual process/task ID. Shared ledger protocols are anchored in site_operation and support the branch cards without repeating any amount. A homogeneous batch of N separately identified equivalent accepted objects may divide its measured aggregate by an evidenced positive N only under calc_reference; no heterogeneous average is inferred.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_delivery` | handover | reference_line and delivered geometry | actual measured records | object ID; site/endpoints; as-built chainage/length; cable/circuit/fibre counts; actual dimensions; ratings; component interfaces; acceptance date/tests; retained existing assets; qualifier applicability and absent-branch drawing evidence | Survey/measure actual delivered scope and cross-check signed drawings, test records and handover inventory; no invented mass or design data; apply boundary_qualifiers to standalone station/support fields as well as line sections; absent attributes require evidenced not_applicable, never fabricated geometry | item; m; m2; kV; MVA; fibre count | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | survey calibration; signed acceptance and complete interface list |
| `cp_materials` | site_operation | each actual purchased component | actual measured records | supplier; batch/model/specification; complete supply scope; received/installed/returned/offcut count/length/volume/mass; moisture; actual density/linear mass; tests; pre-acceptance failed/replaced components; opening/closing reusable stocks; verified transfers | Match design BOM, weighbridge/drum/ticket/meter records and installed survey; separately measure conversion support and embedded materials; native-unit inputs include attributable consumed failures/replacements: gross receipts + opening stock - verified returns/transfers - closing reusable stock; accepted installed configuration and actual waste are separate, without cancelling input manufacture | kg; m; m3; item | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | supplier certificates; calibrated weighing/length/volume instruments; batch reconciliation |
| `cp_energy` | site_operation | electricity and each actual site fuel | actual measured records | task/equipment ID; geography; supply voltage; meter readings; dates; fuel batch mass/volume; actual density and net heating value; blend/carbon origin; idle time | Submeter each real task or reconcile fuel issue/return/tank stock; metered kWh to MJ and actual measured mass with batch heating value | kWh; MJ; kg; m3; kg/m3; MJ/kg | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | meter calibration; fuel certificate; distinct grid/generator/transport interfaces |
| `cp_water` | site_operation | supply, abstraction, dewatering and receiving water | actual measured records | source/location; intake/output meters; actual seawater mass; actual salinity/temperature and evidenced density; original volume parcel records; tank stocks; water parcel ID; reuse; treatment/discharge destination; sampling composition; permission | Meter actual separate water parcels and seawater mass, or volume with evidenced density at the same salinity/temperature; unknown density remains review. Reconcile original volume stocks/reuse and returns separately; specific sampled pollutants are separate atomic emissions, not whole wastewater as water | m3; kg seawater; kg/m3 measured density or identified constituent concentration; salinity; temperature | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | meter and laboratory uncertainty; destination/permit and sample-chain records |
| `cp_waste` | site_operation | each actual exported waste | actual measured records | atomic waste composition; wet/dry state; tare/gross/net mass or volume; contamination; load/date; receiver/treatment; returns/reuse; same-state measured volume and bulk density; moisture; conversion measurement/provenance and uncertainty | Weigh/meter each actual waste load and reconcile material tickets and receiver records; do not combine unrelated waste materials; for native-mass waste measured volumetrically, retain same-lot/state volume and independently measured bulk density with moisture and units; unknown density requires review, never a default. Waste conversion evidence belongs here, not solely to purchased-component cp_materials. | kg; m3; kg/m3 | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | weighbridge calibration; composition analyses; manifests and receiver receipts |
| `cp_logistics` | logistics | each actual transport leg | actual measured records | mode/vehicle; supplier/treatment/site gates; load cargo mass; actual route distance; vehicle total weight/class; empty return/shared loads | Match vehicle/load tickets and route logs; calculate cargo tonnes times loaded km for compatible service, disclose actual empty return treatment | kg; t; km; t*km | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | weighbridge; actual distance logs; supplier dataset service boundary |
| `cp_marine` | marine_install | each actual vessel task and fuel | actual measured records | vessel ID; fuel grade/batch; bunker/stock/return; voyage/task/date; route distance; hours; mobilisation/standby/weather delays; all beneficiaries | Reconcile tank measurements/bunker certificates and task logs; direct fuel use first, documented causal sharing only for inseparable campaigns | kg; m3 with actual density; h; km | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | fuel certificate; calibrated tanks/flowmeters; survey/lay logs and sharing ledger |
| `cp_gas` | station_install | SF6 site charge/recovery/release | actual measured records | gas species/purity; cylinder/equipment IDs; tare/filled/final/recovered masses; factory embedded charge; measured leak/release; location/time | Calibrated cylinder/equipment weighing and verified leak measurement; unexplained residual remains investigation, not assigned release | kg | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | scale calibration; gas certificates; recovery receipts and uncertainty reconciliation |
| `cp_emissions` | site_operation | each actual molecular/particle air release | actual measured records | source/task; substance/CAS; fossil/biogenic carbon; compartment/time; measured concentration/size fraction; flow/time; equipment/control; matching method and uncertainty | Integrate actual matched concentration with exhaust flow and duration on a common wet/dry/state basis, or use independently supported equipment/control/fuel-specific method; no universal factor | kg; measured concentration; exhaust volume; h | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | laboratory/instrument calibration; actual method reference; speciation/particle separation evidence |
| `cp_incident` | site_operation | actual mineral-oil spill to soil | actual measured records | incident ID/date; actual oil species/composition; spill/recovered/retained masses; receptor soil; sampling; remediation destination | Use incident measurements and sampled receiving soil, subtract verified captured oil without treating unknown loss as proof of soil release | kg | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | incident report; laboratory chain of custody; containment/recovery records |
| `cp_land` | site_operation | land occupation and actual transformations | actual measured records | nonoverlapping polygon area; original/changed/restored land classes; use start/end dates; existing easement; marine disturbance separately | Survey actual disturbed/use polygons and dated site records; area multiplied by actual days/365 for m2*a; paired actual transformation rows use Area | m2; day; m2*a | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | survey accuracy; dated access/restoration logs; no polygon/time double counting |
| `cp_reuse` | site_operation | manufacture share of each reusable asset | actual measured records | unique asset ID; same-configuration measured mass/count; manufacture scope; all prior/current/planned evidenced service; project activity; beneficiary/share history | Retain manufacture once, document the dimensionless causal service share and check cumulative shares across all projects/periods <=1; unknown denominator stays review | kg; item; dimensionless share; actual service unit | Each task/load/batch/meter event; delivery close-out | All actual work from baseline to acceptance/restoration; recorded real dates | One declared object and linked actual work sites/voyages; shared beneficiaries explicit | per declared reference flow | asset register; measured mass/count; supported service denominator; globally conserved share ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference` | All exchanges | q_ref = Q_object for the one declared accepted object. Only a homogeneous measured batch of N separately identified equivalent objects permits q_ref = Q_batch / N; N is positive and evidenced. Do not divide by guessed mass or unqualified route length. | actual Q in each row unit; cp_delivery object IDs and count | each row amount per declared reference flow |  |
| `calc_material` | Materials, lengths and components | Use actual input crossing the declared gate; installed + exported offcut + verified residual/return reconciliation must equal receipt adjusted for opening/closing stock within measured uncertainty. Keep returns upstream and waste destinations distinct. If weighing is unavailable, mass_kg = measured volume_m3 × same-state measured density_kg/m3 or measured length_m × same-design verified linear mass_kg/m; never a generic density/linear-mass default. | cp_materials received/installed/stock/return records and conversion measurements | actual net input and separate waste in their declared units | `eirgrid-underground-2026` |
| `calc_energy` | Site electricity and diesel | Metered electricity_MJ = electricity_kWh × 3.6. Diesel_MJ = actual diesel_mass_kg × batch net_calorific_value_MJ/kg; where measured by volume, mass_kg = actual volume_m3 × actual batch density_kg/m3. Preserve public Net calorific value and its MJ unit group; the secondary screening Mass value is not a density or heating-value conversion. | cp_energy calibrated meters and actual batch certificates | MJ per declared reference flow |  |
| `calc_transport` | road_freight | transport_tkm = sum(actual cargo_mass_kg / 1000 × actual leg_distance_km); 1 t*km = 1000 kg*km. Match actual vehicle/class/loaded and empty-trip scope of the service dataset, and record separate other modes. | cp_logistics cargo mass, distance and scope | t*km per declared reference flow |  |
| `calc_occupation` | site_occupation | occupation_m2a = sum(nonoverlapping actual area_m2 × actual occupation_days / 365). This public unit definition supplies a time conversion only, never a service life. Record actual land transformation pairs separately in m2. | cp_land actual polygons/dates and public unit definition | m2*a per declared reference flow |  |
| `calc_gas_water` | SF6 and water parcels | For seawater resource mass_kg = actual volume_m3 × evidenced same-salinity/temperature density_kg/m3, or direct measured mass; density unknown remains review. Maintain volume parcel conservation separately and never subtract kg resource directly from m3 discharge. Reconcile receipts/opening stock against retained final stock, verified returns/recovery, exported treatment waste and evidenced direct release on the same composition/state basis. Do not equate unexplained residual with leakage or water consumption; no water parcel may enter both treatment waste and direct discharge. | cp_gas/cp_water metering, stock and destination evidence | actual separate kg or m3 amounts | `ifc-power-ehs-2007` |
| `calc_reused_manufacture` | Included reusable assets | attributed_asset_quantity = measured same-configuration asset mass/count × documented dimensionless manufacture share. Record both factors, actual service denominator and project numerator in cp_reuse; cumulative manufacture shares across projects/periods <=1. Unknown denominator remains review; this is not a conversion of the line reference product to 1 kg. | cp_reuse asset evidence and conservation ledger | kg or item of attributed manufacture, separately from fuel |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_geometry` | Delivered configuration | Declare actual route versus cable/conductor length, branch endpoints, each cable/circuit/fibre count, voltage/rating/function, support/foundation/duct/shore/station dimensions, soil/seabed conditions and included assets. No design load, size, component mass or life is supplied by this PCR. Apply boundary_qualifiers: measure actual delivered object attributes, and record genuinely absent station/support route or cable attributes as evidenced not_applicable; unknown applicable values remain gaps. | cp_delivery drawings/surveys, actual design and signed acceptance |
| `dq_coverage` | Complete actual foreground | Map each actual task and specific BOM item to a record/row. Separate necessary work for that actual configuration from documented absent and optional stages. Preserve measurement coverage, missing data and uncertainty; no arbitrary mass/energy cutoff removes important control gas, leakage, habitat or noise. | task/BOM reconciliation and bounded gap register |
| `dq_representativeness` | Supply and background links | Use actual supplier geography, period, technology, material grades, state and complete component boundary. Selected identity conditions are binding on every UUID row; a CN factory cable/grid or GLO oil screening identity cannot justify a generic cross-region inventory. Report unavailable production/transport/treatment links. | supplier original certificates and dataset metadata |
| `dq_uncertainty` | Measurement and calculation | Retain instrument accuracy/calibration, detection limits, sampling/speciation, moisture/density/heating-value state and allocation sensitivity. Derive QA tolerances from actual instruments and applicable project specifications. No default numeric intensity, mixture, loss or emission factor is assigned. | calibration, certificates, tests and explicit sensitivity |
| `dq_source_limits` | Source applicability | CPC defines entity scope, not recipe or methodology approval. EirGrid/NG documents support bounded route decomposition; their numerical designs/tests stay local. ITU 2009, IFC 2007 and RDSO 2020 provide explicitly historical qualitative examples. Current project evidence controls every quantity, specification and acceptance decision; unsupported transfers remain review. | source version/page and actual applicability record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_object` | Reference object | Reject missing object ID, signed delivery state, defined endpoints/interfaces, actual geometry, configuration or relevant functional tests. One item is one complete declared object; do not use a service fee, cable mass or arbitrary work stage as its output. Different objects may not be compared without compatible function/configuration/boundary. | `cpc3-explanatory-notes-2025`; `eirgrid-underground-2026` |
| `validation_completeness` | Actual route/process inventory | Reconcile every actual drawing/BOM/work/utility/waste item to an atomic row and supplier/process boundary, including support, chambers/boxes, station structures, auxiliaries, railway/optical devices, temporary crossings and reinstatement. Baseline cards are conditional examples, never a universal complete BOM. Missing actual rows, unmeasured significant tasks, unknown shared denominators or unavailable upstream/treatment links remain incomplete/review; do not assert complete expanded lifecycle coverage. | `eirgrid-underground-2026`; `itu-submarine-g971-2024`; `rdso-rail-ohe-2020` |
| `validation_units` | Quantities and bases | All amounts must be finite, nonnegative and linked to real records for the same declared reference flow. Verify physical cable versus route length, count scope, same-state density/linear mass, fuel heating value, meter boundaries and gas/water/soil destination reconciliation. Do not infer fixed project mass, per-km intensity, concrete recipe, losses, demand or life. Record justified tolerances from actual instruments/specifications, not fabricated universal QA ranges. | `eirgrid-underground-2026`; `eirgrid-submarine-2022` |
| `validation_identity` | Selected public flow identities | Verify substance/material, fossil/biogenic origin, product/waste/elementary role, geography, route/state, primary property/unit group and compartment/subcompartment/timing before linking. Preserve exact public Chinese names and shared UUID/row IDs. A blank product reference identity remains the precise declared reference_line gap for this candidate; actual data must disclose every missing identity and dataset link. Neither an identity UUID nor a passed builder check approves methodology. |  |
| `validation_emissions` | Measured releases and environmental evidence | Reject inferred mandatory spill, SF6 leak or emission quantity from fuel/equipment presence. Molecular NO, NO2 and N2O and NOx-as-NO2 are different; immediate/outdoor and long-term/indoor are different; particle fractions must not overlap. Captured dust/slurry and treatment water are not direct environmental emissions. Missing quantified noise/habitat/marine coverage must be disclosed. | `ifc-power-ehs-2007` |
| `validation_acceptance` | Engineering and environmental acceptance | Use the actual applicable authority, project specification revision and test programme for this geography/AC-DC/optical/railway branch, with measured results and independent acceptance records. Sources here support process/method scope and give bounded examples; historic IFC/ITU/RDSO and another operator's numerical criteria are not current legal approval or automatic design compliance. | `national-grid-overhead-2025`; `eirgrid-underground-2026`; `eirgrid-submarine-2022`; `itu-submarine-g971-2024`; `rdso-rail-ohe-2020` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site/project-specific foreground construction-to-accepted-delivery process, linked to actual upstream/logistics/treatment only where verified |
| downstream_use | Transparent assembly of a declared line/station/railway or other infrastructure study with one-count asset interfaces |
| allowed_use | The documented site/configuration/period and verified functional object; compatible comparison only after function and stage alignment |
| excluded_use | Generic per-km/per-kg default; local distribution; component manufacture replacement; operational transmission service; unqualified whole-life or methodology/compliance approval |
| required_metadata | All section 3 qualifiers; supplier/component gates and geography; actual drawings/BOM; stage/route task records; field units/conversions; allocation/asset history; direct-release media; waste/treatment routes; source versions and test acceptance; documented applicability under boundary_qualifiers |
| required_quality_disclosure | Measurement/certificate coverage and uncertainty, actual missing atomic rows/UUIDs/upstream links, environmental/noise/habitat gaps, retained/reused assets, historic/local-source applicability and excluded lifecycle stages |
| update_trigger | Changed design/geometry/route, voltage/fibre/capacity, actual materials/supplier, installation equipment/process, accepted scope/tests, incident or new verified flow/evidence |

This profile specifies how a completed dataset must be described; it does not state that this candidate PCR or any dataset is published or scientifically approved.

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc3-explanatory-notes-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, p.280 (53242), p.281 (53252): [official PDF](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Scope: long-distance telecom overland/underground/submarine, high-tension and railway power lines, transformer stations/pylons; low-tension distribution excluded. Classification context only, no accepted mapping or engineering recipe. |
| `national-grid-overhead-2025` | official_guidance | National Grid, Grimsby to Walpole PEIR, Vol.3 Part C Chapter 5 appendices, June 2025, §5A.3.26 and §5A.3.28, printed 5A-35–36 (PDF pp.41–42): [official PDF](https://www.nationalgrid.com/document/561291/download) | Proposed UK 400 kV overhead/AIS route process example: access, foundations, erection/stringing, station installation/tests and reinstatement. Qualitative process sequence only; no assumed span, foundation quantity, lifetime or project approval. |
| `eirgrid-underground-2026` | standard | EirGrid, 110/220/400 kV Underground Cable Functional Specification, CDS-GFS-00-001-R2.1, 27 March 2026, §2 p.8, §4.12 pp.25–27, §6 pp.52–65, §7 pp.66–78, Appendix C pp.88–90; Addenda A/B pp.79–84: [official PDF](https://cms.eirgrid.ie/sites/default/files/publications/CDS-GFS-00-001-R2-110kV-220kV-400kV-Cable-Specification.pdf) | Ireland EirGrid fully ducted 110/220/400 kV systems: complete components, civil/handling/pulling/jointing and as-built/test records. §7.9.2 replaced by Addendum A; §4.7 by B. No local numerical criteria, all-duct requirement, warranty or test approval transferred to other designs. |
| `eirgrid-submarine-2022` | standard | EirGrid, 220 kV Submarine Cable Functional Specification, OFS-CAB-100-R3, 21 December 2022, scope p.3, §6.4–6.5 pp.28–31, §10–12 pp.57–66: [official PDF](https://cms.eirgrid.ie/sites/default/files/publications/OFS-CAB-100-R3-220-kV-Submarine-Cables.pdf) | Fixed/static 220 kV XLPE three-phase 50 Hz AC offshore systems, depth≤200 m; excludes inter-array/floating and land cable after shore transition joint. Route/lay/burial/protection/records examples only; other AC/DC/deeper/dynamic systems need own evidence and tests. |
| `itu-submarine-g971-2024` | standard | ITU-T G.971, General features of optical fibre submarine cable systems, December 2024, Annex A.2–A.4, printed pp.7–9 (PDF pp.13–15): [official PDF](https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-G.971-202412-I!!PDF-E&type=items); Cor.1 November 2025: [official PDF](https://www.itu.int/rec/dologin.asp?lang=e&id=T-REC-G.971-202511-I!Cor1!PDF-E&type=items) | Optical submarine survey/conditional clearance, laying, optional burial, repeaters/branching, terminal tests and commissioning. Cor.1 updates Appendix I equipment information, not Annex A. A.5 later maintenance excluded. Not electric-power cable tests or default vessel fuel/life. |
| `itu-optical-installation-2009` | handbook | ITU-T, Optical fibres, cables and systems, 2009, Chapter 3 §§1.1,1.5,1.6,1.8,1.9,1.11, printed pp.61–66,74–80,84–90 (PDF pp.83–88,96–102,106–112): [official handbook](https://www.itu.int/dms_pub/itu-t/opb/hdb/t-hdb-out.10-2009-1-pdf-e.pdf) | Historical qualitative distinction of duct pulling/blowing, direct burial, aerial/OPGW, railway telecom and submarine techniques. Actual modern product specification/tests control; no old numerical limits or lifetime adopted. |
| `ifc-power-ehs-2007` | official_guidance | IFC, Environmental, Health, and Safety Guidelines: Electric Power Transmission and Distribution, 30 April 2007, pp.2,7: [official PDF](https://www.ifc.org/content/dam/ifc/doc/2000/2007-electric-transmission-distribution-ehs-guidelines-en.pdf) | Historical qualitative screen for erosion/dust, wastes/water, traffic/noise, habitat, potential oil spills and SF6. No presumed release, emission factor, present legal approval or all-life boundary. Actual contemporary permits and measurements required. |
| `rdso-rail-ohe-2020` | official_guidance | Indian Ministry of Railways/RDSO, TI/IN/0042, OHE guidelines for increasing speed potential to 160 kmph on NDLS–HWH & NDLS–BCT routes, October 2020, §§1.1–1.3, PDF/printed pp.3–11: [official PDF](https://rdso.indianrailways.gov.in/uploads/files/TI-IN-0042.pdf) | Historical named railway example distinguishing mast/foundation, feeder, contact/catenary wire and earth conductors, with existing-asset suitability. No speed, alloy, size, tension, wind loading, spacing or lifetime is imposed on this category; actual project evidence controls. |
