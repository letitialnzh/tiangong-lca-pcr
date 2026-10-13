---
pcr_id: pcr.constructions-and-construction-services.constructions.water-supply-aqueduct-and-nonpipeline-conduit-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Water-supply aqueduct and nonpipeline conduit construction delivery

## 1. Scope and Applicability

This PCR applies to the complete, geographically bounded physical water-supply aqueduct, open channel, flume, covered conduit or nonpipeline underground conveyance work delivered through actual construction and acceptance. It is a civil-engineering entity, not a construction service or a materials package. Supply purpose, structure, route and owner-defined interfaces determine applicability; classification alone never creates an identity. The UN explanatory notes exclude irrigation/flood-control works and local or long-distance pipelines (un-cpc3-2025, printed pp. 279–280). LADWP's actual supply system demonstrates open channels, covered conduit and tunnels alongside separately excluded pipes (ladwp-wip-2024, p. 10).

Include the complete declared new or fully rebuilt reach and integral foundations, support piers, lining, roof, transitions, joints and controls. Do not narrow an elevated, covered or underground project to its easiest lining material. Exclude irrigation/flood control, navigation canals, dams and reservoirs delivered as separate assets, road/rail bridges and tunnels, water-treatment plants, pipeline components and construction services. Integral water-conveyance tunnels remain in scope; unrelated transport/mining tunnels do not. Mixed-purpose or mixed pipe/nonpipe projects require an explicit asset/interface decision and separate quantities before use. This construction dataset stops at handover; later conveyed water, operating pumping, maintenance, renewal and final demolition are separate stages with no invented lifetime.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.water-supply-aqueduct-and-nonpipeline-conduit-delivery |
| classification_refs | CPC 3.0 53231 |
| covered_products | Complete supply-purpose aqueducts, open channels, flumes, covered conduits and nonpipeline underground conveyance entities with integral structures |
| excluded_products | Irrigation/flood control; navigation canals; pipelines; standalone dams/reservoirs; transport bridges/tunnels; treatment plants; materials/equipment; construction services |
| representative_product | One complete accepted conveyance work with defined interfaces, measured geometry and hydraulic conditions |
| production_route | Actual earthworks, earth/concrete/membrane/masonry lining, flume erection or underground excavation/lining; integral joints/controls; testing, correction and handover |
| market_state | Installed accepted physical civil work at site; not conveyed water output |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the supply-water conveyance passage between declared inlet/outlet under declared hydraulic conditions; assess its construction delivery |
| How much | One complete accepted work; declare surveyed chainage/length, section width/height, slope, invert/cover/support dimensions, actual conveyance capacity and test head. These qualify the same work and are not alternative denominators. |
| How well | Constrain with actual contract specification, structural/lining/joint configuration, supply purpose and seepage/hydraulic acceptance records; no default load, strength or approval |
| How long or cycle | One actual construction-to-complete-acceptance cycle; no operational lifespan or yearly water-delivery service is established |
| reference_flow_link | `finished_conduit` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete nonpipeline water-supply aqueduct or conduit work |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site/asset id; supply purpose; interfaces and perimeter; surveyed length/sections/slopes/volumes; structure/lining/support/cover/joints; hydraulic capacity and head/test conditions; component list; supply state; construction/acceptance dates and evidence; starting condition; stage exclusions |

`item` is the display alias of public Item(s), counting one complete configured work. Different geometries or functions are not equivalent. Declare all qualifiers in the data package; partial handover is not a complete output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items | item | Reference output is 1 item for the same complete accepted work, collected using cp_delivery. All inventories and collection aggregates use per declared reference flow. No assumed per-metre or per-work mass. |
| actual_quantities | all inventory rows | Mass; Volume; Energy; Mass*distance; Number of items | kg; m3; MJ; kg*km; item | Preserve each verified identity primary property/unit. Weigh mass and survey geometry/volume; area/length/volume-to-mass requires measured areal mass or density in the same lot/state. Never default to 1000 kg/m3. Match the property to each exchange: mass/kg, volume/m3, energy/MJ, mass-distance/kg*km, and Number of items/item for the complete delivered conduit and counted excavator manufacture share. Their auxiliary physical records do not replace native item exchanges; unknown equipment lifetime or total activity still requires review. |
| electricity_conversion | electricity_cn_lv | Net calorific value | MJ | Convert meter kWh using 1 kWh = 3.6 MJ; preserve public Net calorific value, not Mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Recorded preconstruction site, retained existing entity, inlet interfaces and actual supplier-gate material state |
| starting_condition_role | foreground_start |
| product_classification_scope | Complete supply-purpose nonpipeline conveyance work; classification only informs scope |
| recursive_input_rule | Retained existing conduit is starting stock, not newly produced output; purchased same-category works need distinct upstream boundaries without recursive double counting |
| upstream_dataset_requirement | Separately verify and link material, equipment and utility route/geography/property and production/transport boundary; supplier-gate data do not prove complete upstream coverage |
| disclosure | Construction foreground through acceptance, with linked upstream module completeness reported separately; not an unqualified full-life or complete cradle-to-gate result |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| b_build | Include actual preparation, cut/fill, support, foundations, lining, covers, flume erection, integral controls, curing, tests/correction/cleanup and temporary works. Record equipment/utilities once by task; underground routes must include actual support and muck handling. | usbr-construction; ladwp-wip-2024 |
| b_supplied | Separate supplied component/mixture manufacture, delivery and onsite installation. Actual onsite mixing, precasting or fabrication needs separate real atomic inputs; never count mixtures and embedded ingredients simultaneously. Upstream production is not silently merged into construction. | usbr-construction; epa-washout-2012 |
| b_consumed_inputs | For every supplied material or assembly input, construction/installation applicability identifies the intended work, not only successfully installed quantities. In each native unit use attributable gross receipts + opening stock - verified returns/transfers - closing reusable stock; include pre-acceptance spillage, damage, rejected-but-consumed items and replacements. Verified returns and reusable carryover are excluded from consumed input, while any attributable handling, transport or rework remains. Reconcile installed acceptance and waste separately; do not cancel consumed manufacture. Reusable temporary assets retain their conserved manufacturing share under the asset-allocation rules. |  |
| b_stages | Exclude later operation/conveyed-water pumping, maintenance/renewal and final demolition. Actual existing-asset removal at site preparation is construction input. Disclose land/hydrology/ecology, noise and traffic disturbance gaps without declaring zero impact; operational water supply is not construction water. | ladwp-wip-2024; un-cpc3-2025 |
| b_complete_route | Conditional cards do not authorize scope deletion. Actual other polymers, metal/timber flumes, prestressing, rock bolts, steel ribs, blasting, onsite batching, coatings or controls require additional atomic cards, original project method, collection and identity checks before project completeness can be claimed. | usbr-construction; usbr-canals-2017 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| earthworks | Site preparation, excavation and formation | conditional | Actual clearing, excavation, embankment, foundations or existing obstruction removal | foreground_process | per declared reference flow |
| earth_lining | Compacted-earth lining | conditional | Actual compacted clay lining | foreground_process | per declared reference flow |
| concrete | Concrete channel, cover and support construction | conditional | Actual concrete invert, sides, covers, piers or foundations | foreground_process | per declared reference flow |
| membrane | Membrane lining and anchorage | conditional | Actual geomembrane system | foreground_process | per declared reference flow |
| masonry | Masonry conduit construction | conditional | Actual masonry route | foreground_process | per declared reference flow |
| flume | Trough installation and elevated aqueduct erection | conditional | Actual prefabricated or steel flume and supports | foreground_process | per declared reference flow |
| underground | Nonpipeline underground water-conduit excavation and lining | conditional | Actual water-conveyance tunnel or gallery; not a transport tunnel or pipeline | foreground_process | per declared reference flow |
| joints_controls | Joints and integral hydraulic control installation | conditional | Actual joints, waterstops or integral controls | foreground_process | per declared reference flow |
| support | Equipment operation, water control and site utilities | required | All actual construction tasks; each exchange conditional on occurrence | foreground_process | per declared reference flow |
| assets | Reusable formwork and construction-equipment manufacture attribution | conditional | Actual included reusable assets; documented shared manufacture basis | foreground_process | per declared reference flow |
| transport | Construction logistics and waste transport | conditional | Actual movements outside separately accounted supply/onsite operations | foreground_process | per declared reference flow |
| handover | Testing, correction, cleanup and complete acceptance | required | All work through complete handover; rework inputs assigned to original task | reference_process | per declared reference flow |

Select conditional processes from as-built structure and actual construction records; no default route. Use the actual excavator/compactor/crane/pump/concrete-vibration/tunnel-drive/ventilation equipment ledger. Energy/water/emissions in support are attributed once by task. Test/rework materials belong to the corresponding task. Reusable manufacture is in assets and operating consumption in support.

### Process: Site preparation, excavation and formation (`earthworks`)

Actual clearing, excavation, embankment, foundations or existing obstruction removal.

#### Inputs

##### Product flows

###### Selected uncontaminated mineral soil for embankment fill (`fill_soil`)

Only imported suitable fill; survey excavation, compaction and moisture. Internal cut-to-fill is an internal transfer, not a second purchased input.

- Selected flow: Selected uncontaminated mineral soil for embankment fill
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

#### Outputs

##### Waste flows

###### Surplus uncontaminated excavated mineral soil (`spoil_soil`)

Only actual surplus transferred as waste; record analysis, wet/dry basis and destination; distinguish reused soil.

- Selected flow: Surplus uncontaminated excavated mineral soil
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_waste; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-construction`

###### Surplus excavated rock (`spoil_rock`)

Actual rock excavation or tunnel spoil transferred as waste; do not combine with soil or drilling slurry.

- Selected flow: Surplus excavated rock
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_waste; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-construction`

### Process: Compacted-earth lining (`earth_lining`)

Actual compacted clay lining.

#### Inputs

##### Product flows

###### Selected compactable clay for canal lining (`lining_clay`)

Only an actual compacted-clay lining; record mineralogy, moisture, borrow source and placed geometry. No default clay fraction or seepage reduction.

- Selected flow: Selected compactable clay for canal lining
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

#### Outputs

### Process: Concrete channel, cover and support construction (`concrete`)

Actual concrete invert, sides, covers, piers or foundations.

#### Inputs

##### Product flows

###### Fresh concrete mixture delivered for channel placement (`fresh_concrete`)

Actual fresh mixture for invert, sides, cover, pier or foundation; reconcile dispatch ticket and poured geometry with measured lot density. Supplied mix is not a completed channel. For actual onsite batching, separately model every cement, aggregate, water and admixture input from batch records instead of counting purchased mix again.

- Selected flow: Fresh concrete mixture delivered for channel placement
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

###### Hot rolled rebar steel (`rebar`)

Only actual low-alloy hot-rolled rebar with C≤0.2% matching supplied mill state; require certificates. Not mandatory for unreinforced lining. Other grade or fabrication state needs its own identity; cutting/bending and scrap are onsite.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

###### crushed stone 16/32 (`stone_drain`)

Use actual 16/32 crushed stone supplied for this work's drainage or bedding layer; include attributable spillage and pre-acceptance replacement consumption under b_consumed_inputs, and record installed quantity separately. Do not substitute for other concrete aggregate gradings.

- Selected flow: crushed stone 16/32 `4f197bee-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

#### Outputs

##### Waste flows

###### Hardened waste concrete (`concrete_waste`)

Actual hardened excess or rejected concrete; separate from fresh returns, slurry and reinforcement; waste transfer without automatic recycling credit.

- Selected flow: Hardened waste concrete
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_waste; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `epa-washout-2012`

###### Steel reinforcing-bar offcuts (`steel_offcut`)

Only actual offcuts; distinguish traded secondary product from waste through transfer records, and change flow type only with verified identity.

- Selected flow: Steel reinforcing-bar offcuts
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_waste; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-construction`

### Process: Membrane lining and anchorage (`membrane`)

Actual geomembrane system.

#### Inputs

##### Product flows

###### HDPE geomembrane canal liner (`hdpe_liner`)

Only actual HDPE liner; measure thickness, density or weighed mass, welds, overlaps and losses. Clay, PVC and other polymers are distinct routes requiring distinct cards.

- Selected flow: HDPE geomembrane canal liner
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

###### Polypropylene geotextile fabric (`pp_geotextile`)

Only actual polypropylene protective geotextile specified in the installed liner system, using measured areal mass and installed/received areas.

- Selected flow: Polypropylene geotextile fabric
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

#### Outputs

### Process: Masonry conduit construction (`masonry`)

Actual masonry route.

#### Inputs

##### Product flows

###### Natural stone masonry block (`stone_block`)

Only actual masonry conduit or protection work; record stone species, dimensions, delivered mass and installed location.

- Selected flow: Natural stone masonry block
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

###### Fresh Portland-cement masonry mortar (`mortar`)

Only actual supplied cementitious mortar; record recipe and source. Site-mixed mortar requires separate measured cement, sand and water inputs without double-counting supplied mortar.

- Selected flow: Fresh Portland-cement masonry mortar
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

#### Outputs

### Process: Trough installation and elevated aqueduct erection (`flume`)

Actual prefabricated or steel flume and supports.

#### Inputs

##### Product flows

###### Precast concrete water-conveyance trough (`precast_trough`)

Use actual trough units supplied for this work with measured configuration and mass; include attributable units damaged or consumed before acceptance under b_consumed_inputs, and record accepted installation separately. Count supplier-defined embedded reinforcement once; do not substitute generic wall panels.

- Selected flow: Precast concrete water-conveyance trough
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

###### Fabricated steel water-conveyance trough (`steel_trough`)

Only actual steel flume route; capture supplied surface treatment, mounting, supports, joints and lifting tasks. Raw steel is not a fabricated trough.

- Selected flow: Fabricated steel water-conveyance trough
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

#### Outputs

### Process: Nonpipeline underground water-conduit excavation and lining (`underground`)

Actual water-conveyance tunnel or gallery; not a transport tunnel or pipeline.

#### Inputs

##### Product flows

###### Fresh shotcrete mixture (`shotcrete`)

Only actual sprayed concrete support or lining in a nonpipeline water-conveyance tunnel. Identify supplied state, rebound, support system and sprayed thickness from original project methods. Never substitute tunnel geometry from another project.

- Selected flow: Fresh shotcrete mixture
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

###### Precast concrete tunnel-lining segment (`lining_segment`)

Only actual segmental structural lining, not a water pipeline; record ring geometry, embedded reinforcement, gaskets and supplier scope, avoiding duplication of bundled components.

- Selected flow: Precast concrete tunnel-lining segment
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

###### Cementitious tunnel backfill grout (`cement_grout`)

Only actual supplied grout; measured composition and injection records. Onsite formulation needs separate ingredients, additives, mixing and pumping; do not assume a pressure, ratio or injection volume.

- Selected flow: Cementitious tunnel backfill grout
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

#### Outputs

##### Waste flows

###### Spent aqueous bentonite drilling slurry (`bentonite_slurry`)

Only if a verified bentonite slurry tunneling/drilling method actually generates it; record solids fraction, additives, contamination and treatment. Blasting, rock bolts, steel ribs or other actual support require added atomic rows before project completeness is claimed.

- Selected flow: Spent aqueous bentonite drilling slurry
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_waste; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usbr-construction`

### Process: Joints and integral hydraulic control installation (`joints_controls`)

Actual joints, waterstops or integral controls.

#### Inputs

##### Product flows

###### EPDM rubber waterstop strip (`epdm_waterstop`)

Only the actual finished EPDM waterstop at measured joints; supplied raw rubber is not a finished waterstop. Other joint materials need separate identification.

- Selected flow: EPDM rubber waterstop strip
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

###### Fabricated steel canal-control gate (`steel_gate`)

Only an integral actual channel-control gate with supplied dimensions, coating and operator scope. Include actual installed actuator and sensors as distinct verified components if not bundled. Standalone dams are excluded.

- Selected flow: Fabricated steel canal-control gate
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_material; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usbr-construction`

#### Outputs

### Process: Equipment operation, water control and site utilities (`support`)

All actual construction tasks; each exchange conditional on occurrence.

#### Inputs

##### Product flows

###### Diesel fuel for construction equipment (`diesel`)

The public diesel identity leaves grade, formulation, density, heating value, refinery and supply geography unspecified; declare these from the actual source and do not treat it as a combustion dataset. Actual fuel consumed by excavator, roller, pump, crane or other logged machine; fuel delivery/storage inventory reconciled with mass or measured density. Combustion emissions are distinct; upstream diesel datasets must not also include the same combustion.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_utilities; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `usbr-construction`

###### Alternating current (`electricity_cn_lv`)

Only grid-average supply to a CN user at <1 kV with actual site/voltage evidence. Preserve the public Net calorific value reference; kWh meters convert with 1 kWh = 3.6 MJ. Other geography, voltage or generation needs a distinct identity, never restrict the project to China to fit this row.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_utilities; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `usbr-construction`

###### Alternating-current electricity supplied to the construction site (`electricity_other`)

Actual site supply not covered by the CN low-voltage row; record geography, voltage, supplier boundary and primary property of the subsequently verified public identity; no simultaneous double count.

- Selected flow: Alternating-current electricity supplied to the construction site
- Flow property / unit: Energy / MJ
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_utilities; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `usbr-construction`

###### Tap water supplied for construction (`supplied_water`)

Only actual utility-supplied water for curing, cleaning, dust suppression or test filling; submeter each task and exclude embedded water already in purchased mixtures. HK plant-gate water is not a universal onsite identity; no assumed density.

- Selected flow: Tap water supplied for construction
- Flow property / unit: Volume / m3
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_water; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usbr-construction`

##### Elementary flows

###### River water withdrawn for construction (`river_withdrawal`)

The public river-water flow is a renewable resource from water, Volume, not supplied water or wastewater; keep actual extraction country in unit-process location for country-specific characterization. Only actual direct river abstraction for construction/test activity, not future conveyed water. Verify source catchment, metered withdrawal, permit evidence and actual return. Supplier water and resource extraction must not duplicate each other.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_water; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usbr-construction`

#### Outputs

##### Waste flows

###### Construction dewatering effluent with mineral suspended solids (`drainage_liquid`)

Actual pit/tunnel dewatering transferred to treatment; record dissolved substances, solids and destination. It is a liquid waste transfer, not automatically a freshwater elementary release; pure diverted river flow is not a consumptive withdrawal.

- Selected flow: Construction dewatering effluent with mineral suspended solids
- Flow property / unit: Volume / m3
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_water; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usbr-construction`

###### Concrete washout water with cementitious suspended solids (`washout_water`)

Actual contained washout sent for treatment; separate recovered hardened concrete. No default pH, metals concentration or universal release. Offsite truck drum washout belongs to its actual operator boundary.

- Selected flow: Concrete washout water with cementitious suspended solids
- Flow property / unit: Volume / m3
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_water; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-washout-2012`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fossil`)

Only supported immediate fossil-fuel combustion release to air with unspecified air subcompartment; document any finer available location. Measure or use a cited equipment/fuel-specific factor and oxidation basis. Separate biogenic carbon and land-use change.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_emissions; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `usbr-construction`

###### nitrogen monoxide (`no_air`)

Only separately measured or supported NO release to unspecified air, immediate. An aggregate NOx-as-NO2 factor cannot populate this NO mass row without verified speciation.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_emissions; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `usbr-construction`

###### Nitrogen dioxide emitted to air (`no2_air`)

Only molecular NO2 (CAS 10102-44-0) measured separately or calculated from a supported species-specific factor for actual equipment/site, released immediately to unspecified air. Aggregate NOx reported as NO2-equivalent is not measured molecular NO2. NO, N2O, nitrogen, nitrite and N2O4 are different exchanges; public N2O4 synonyms do not change the defined molecular identity. Other media or long-term releases require another verified identity.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_emissions; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `usbr-construction`

###### particles (PM10) (`pm10_air`)

Only actual PM10 mass released to unspecified air from supported earth handling or exhaust; record measured/modelled source separation and control efficiency. Do not copy total dust or PM2.5 mass into PM10, or assume dust from every task.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_emissions; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `usbr-construction`

###### Water discharged to fresh surface water (`water_release`)

Only actual permitted/disclosed direct freshwater discharge after treatment or test drainage, with measured recipient and pollutant concentrations. Split each quantified chemical into its own elementary row; no generic wastewater identity or unsupported pollutant.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_water; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `usbr-construction`

### Process: Reusable formwork and construction-equipment manufacture attribution (`assets`)

Actual included reusable assets; documented shared manufacture basis.

#### Inputs

##### Product flows

###### Plywood (`plywood`)

Only actual glued/pressed veneer plywood formwork. Measure board volume and ledger the manufacturing share attributed across all projects/reuses; sum of shares for the same physical boards must not exceed one. Do not allocate the full manufacture to each project.

- Selected flow: Plywood `8b239d58-5fc2-40a5-8003-33f4082bc995`
- Flow property / unit: Volume / m3
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_assets; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `usbr-construction`

###### Complete hydraulic excavator manufacturing share (`excavator_share`)

Only the attributable manufacturing burden of an actual identified excavator with a supported activity/life basis and conserved cumulative share across projects. Operational diesel is separately metered. Unknown total activity/life is a review gap, not a default lifetime. Actual crane, TBM or other equipment needs its own card when included.

- Selected flow: Complete hydraulic excavator manufacturing share
- Flow property / unit: Number of items / item
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_assets; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `usbr-construction`

#### Outputs

### Process: Construction logistics and waste transport (`transport`)

Actual movements outside separately accounted supply/onsite operations.

#### Inputs

##### Product flows

###### Road freight transport of construction inputs and waste (`road_freight`)

Actual loaded mass and route distance by trip and material; include attributable empty returns only with evidence. Verify whether upstream supply already includes delivery; dedicated onsite haul diesel is not counted again as freight service.

- Selected flow: Road freight transport of construction inputs and waste
- Flow property / unit: Mass*distance / kg*km
- Amount rule: Collect and attribute the actual exchange for this complete work using cp_transport; preserve task, lot, original physical unit and applicability conditions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`
- Sources: `usbr-construction`

#### Outputs

### Process: Testing, correction, cleanup and complete acceptance (`handover`)

All work through complete handover; rework inputs assigned to original task.

#### Inputs

#### Outputs

##### Product flows

###### Accepted complete nonpipeline water-supply aqueduct or conduit work (`finished_conduit`)

Only the same complete configured engineering entity that passes the documented actual acceptance checks; measured geometry, inlet/outlet, structural system, hydraulic conditions and excluded adjoining assets must be recorded.

- Selected flow: Accepted complete nonpipeline water-supply aqueduct or conduit work
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_delivery`
- Sources: `un-cpc3-2025`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| a_task | Avoid allocation with work/task submeters and subcontract physical ledgers. Unavoidable shared utilities use measured equipment hours, pumping or other physically causal activity; list all beneficiaries and conserved shares. Unknown relationships require review; cost is not a default. | |
| a_asset | Manufacturing attribution shares for the same physical equipment/reusable component must sum to no more than one across projects, periods and reuses. Derive a dimensionless share from supported total activity and project activity, multiplying measured count/mass/volume. Unknown life/total activity remains review; operating burdens are actual separately measured consumption. | |
| a_waste | Reused excavated soil/rock is an internal transfer; waste follows actual destination. No automatic substitution credit for steel/concrete waste. A traded co-product requires evidence of status/use and a separately declared allocation/system-expansion method and factor sources; disposal payment does not create output. | epa-washout-2012 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | all applicable construction processes | material | delivery_and_placement | lot; material state; source gate; accepted receipt; return; installed geometry; measured density where converted; waste ; opening and closing reusable stock; verified transfers; pre-acceptance damage/rejection/replacement; separate consumed and accepted installed quantities |Weigh receipts and returns, reconcile tickets with surveyed installed dimensions; use actual tested density only for the same state/lot. Record embedded component supplier scope. Aggregation detail: Sum attributable physical exchanges per declared reference flow  Apply b_consumed_inputs in the row native unit: gross attributable receipts + opening stock - verified returns/transfers - closing reusable stock; include consumed losses and replacements, with accepted installation and waste reconciled separately. | kg | each task, lot, trip or acceptance event | actual start through complete acceptance, including correction | same declared work perimeter, including subcontractors | per declared reference flow | calibration, raw ledgers, tests, revisions and handover records |
| cp_utilities | support | energy | meter_and_fuel_ledger | equipment id; task; hours; receipts; opening/closing stock; fuel density; voltage; supply geography; meter readings |Read calibrated task meters and fuel ledger; reconcile subcontractor records; preserve actual fuel property and meter energy unit. Aggregation detail: Sum attributable use per declared reference flow, once by task | kg; MJ | each task, lot, trip or acceptance event | actual start through complete acceptance, including correction | same declared work perimeter, including subcontractors | per declared reference flow | calibration, raw ledgers, tests, revisions and handover records |
| cp_water | support | water | meter_and_transfer | source; catchment; supplied/abstracted volume; curing/test use; dewatering; washout; recycle; recipient; concentration; discharge permission |Meter distinct supply, river withdrawal, dewatering, washout and actual discharge; record reuse as internal transfer. Separate treatment waste transfer from measured direct environmental release. Aggregation detail: Sum each distinct water exchange per declared reference flow; never net away withdrawals/returns silently | m3 | each task, lot, trip or acceptance event | actual start through complete acceptance, including correction | same declared work perimeter, including subcontractors | per declared reference flow | calibration, raw ledgers, tests, revisions and handover records |
| cp_waste | all applicable construction processes | waste | weighbridge_transfer | row_id; task; composition; wet/dry state; moisture; mass; receiver; treatment/reuse evidence |Use calibrated scales or weighbridge transfers; sample composition/moisture and reconcile with site mass balance; do not assume recycling. Aggregation detail: Sum each waste row per declared reference flow | kg | each task, lot, trip or acceptance event | actual start through complete acceptance, including correction | same declared work perimeter, including subcontractors | per declared reference flow | calibration, raw ledgers, tests, revisions and handover records |
| cp_emissions | support | elementary_emission | measurement_or_supported_factor | substance; CAS; source equipment/task; air subcompartment; sample/factor; fuel activity; chemical basis; control; uncertainty |Measure the specified species or retain primary published equipment/fuel-specific factor with its original conditions and activity records. Missing factor/speciation stays an assessment gap, not zero. Aggregation detail: Sum supported species releases per declared reference flow | kg | each task, lot, trip or acceptance event | actual start through complete acceptance, including correction | same declared work perimeter, including subcontractors | per declared reference flow | calibration, raw ledgers, tests, revisions and handover records |
| cp_assets | assets | reusable_asset | asset_share_ledger | physical asset id; configuration; measured count/volume/mass; manufacture dataset; supported cumulative activity; project activity; prior shares; remaining share |Measure actual boards or identify actual equipment and keep a cross-project ledger; evidence must support lifetime/activity denominator and attribution. Unknown denominator requires review before an asset-burden result. Aggregation detail: Attributable manufacture share per declared reference flow; same asset cumulative share ≤1 | item; m3; kg | each task, lot, trip or acceptance event | actual start through complete acceptance, including correction | same declared work perimeter, including subcontractors | per declared reference flow | calibration, raw ledgers, tests, revisions and handover records |
| cp_transport | transport | transport | trip_ledger | trip; material; loaded mass; actual route km; delivery inclusion; empty return attribution |Reconcile weighbridge, dispatch and route logs; separate trip legs and check supplier datasets to avoid duplicate delivery. Aggregation detail: Sum attributable transport activity per declared reference flow | kg*km | each task, lot, trip or acceptance event | actual start through complete acceptance, including correction | same declared work perimeter, including subcontractors | per declared reference flow | calibration, raw ledgers, tests, revisions and handover records |
| cp_delivery | handover | reference_product | survey_and_acceptance | asset/site id; start/end chainage; inlet/outlet; surveyed length; sections; slopes; invert/cover/support dimensions; flow rate and head conditions; installed controls; acceptance tests; nonconformities; date |Reconcile as-built survey and complete asset list with actual dimensional, structural, joint/seepage and hydraulic acceptance evidence and owner handover; no assumed approvals. Aggregation detail: One complete accepted configured work per declared reference flow | item | each task, lot, trip or acceptance event | actual start through complete acceptance, including correction | same declared work perimeter, including subcontractors | per declared reference flow | calibration, raw ledgers, tests, revisions and handover records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| inventory_aggregation | all inventory rows | Sum actual attributable task exchanges for the same complete work per declared reference flow; reconcile receipts, returns, surplus and installation separately, excluding internal transfers from external exchange.  Apply b_consumed_inputs to supplied inputs, including pre-acceptance consumed losses and replacements; accepted installed amounts are not the input quantity. | cp_material; cp_utilities; cp_water; cp_waste; cp_delivery | row amount on the same basis | usbr-construction |
| physical_conversion | all inventory rows | Measured volume × measured same-lot/state density = mass; measured area × same-lot areal mass = mass. Retain raw value/state/factor/uncertainty; secondary screening ratios are not universal densities. | measured volume/area; tested density/areal mass; cp_material | actual quantity in the original property | |
| energy_meter | electricity_cn_lv | Meter kWh × 3.6 = MJ; count same-work user consumption once. | meter kWh; cp_utilities | MJ |  |
| transport_activity | road_freight | Sum attributable trip loaded mass kg × actual distance km; if the identity uses t*km, 1 t*km = 1000 kg*km. | trip mass; km; cp_transport | kg*km |  |
| asset_attribution | plywood; excavator_share | Manufacturing-equivalent physical amount = measured same-configuration physical amount × dimensionless project activity share; cumulative shares across all projects/periods ≤1 with remaining balance. No calculation with unsupported denominator. | physical quantity; project activity; supported total activity; prior shares; cp_assets | work manufacture share in the original physical unit | |
| emission_evidence | co2_fossil; no_air; no2_air; pm10_air | Use measured specified-species mass or matched actual activity × cited species factor, retaining fuel/technology/control/chemical basis/compartment. Aggregate NOx is not automatically speciated; a gap is not zero. | measurement or primary factor; activity; cp_emissions | kg |  |
| water_balance | supplied_water; river_withdrawal; drainage_liquid; washout_water; water_release | Reconcile supply, direct withdrawal, embodied water, reuse, waste transfer and measured discharge separately. Dewatering has separate groundwater ingress/outflow and is not forced to equal construction abstraction. Concentration × compatible liquid amount applies only to identified species with consistent units. | meters; samples; receivers; cp_water | separate water exchanges and identified species quantities | epa-washout-2012 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_configuration | finished_conduit | Same asset interfaces, surveyed geometry, structure and hydraulic conditions with actual tests/nonconformities. Length alone does not establish equivalence. | cp_delivery; ladwp-wip-2024 |
| dq_sources | all inventory rows | Use actual lots, full-cycle and all-subcontract records; material grade/lining/supply state/geography/voltage/compartment/public property must match. | cp_material; cp_utilities; cp_water |
| dq_completeness | all processes | Reconcile complete quantity schedule with processes, atomic inventories, temporary works and wastes. Missing process/scope/identity/factor or unrepresentative sample remains explicit, not zero. | cp_delivery; cp_waste |
| dq_ranges | all quantities | No universal recipe, energy/loss/lifetime/geometry or per-work mass range. Site evidence supplies measured factors/uncertainty; future cross-project benchmarks need independent boundary-compatible evidence. | cp_material; cp_delivery |
| dq_environment | support | Confirm each direct-release substance, air subcompartment and receiving water; disclose uncovered noise/ecology/land/hydrology impacts without inventing mass exchanges. | cp_emissions; cp_water |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| v_reference | Reject a materials bundle, construction service, partial lining or unaccepted task substituted for the same complete reference work. Check 1 item, surveyed geometry/hydraulic conditions and finished_conduit consistency; missing qualifiers invalidate the data package. | un-cpc3-2025; ladwp-wip-2024 |
| v_route | Check every necessary process/condition against as-built methods; onsite mixture production, blasting or specialty support without separate exchanges prevents a completeness claim. Resolve mixed purpose/category/interfaces first. | usbr-construction |
| v_identity | Verify public substance/state/route/geography/compartment/reference property/unit for every UUID. NO, NO2 and N2O are distinct; wastewater transfer is not resource water or environmental water discharge. Keep specific blank identities and review where unmatched. | epa-washout-2012 |
| v_balance | Reconcile quantity schedule, stocks, waste/water ledger, energy, transport boundaries and cumulative asset shares. Correct double counts, incompatible units, default density/lifetime or unsupported factors. A candidate structural check without real project measurements establishes neither performance nor scientific approval. | usbr-canals-2017; usbr-construction |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supply-water conveyance construction module with matching boundary/configuration and preserved qualifiers |
| allowed_use | Modelling within matched supply function, structural geometry, hydraulics and construction stage; declare linked upstream completeness |
| excluded_use | Length-only comparison across different capacity/configuration; operational water supply; irrigation/flood control; pipelines; whole life or unsupported lifetime comparison |
| required_metadata | All reference qualifiers, surveyed quantities, methods, supply interfaces, task/subcontracts, test/handover records, electricity/water conditions and stage boundaries |
| required_quality_disclosure | Identity/process/factor gaps, upstream completeness, sample representativeness, uncertainty, shared allocation/asset shares, applicability warnings and unmeasured environmental impacts |
| update_trigger | Changes in as-built configuration, supply conditions, route, geography/gate, method, acceptance, emission factors or boundary |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed pp. 279–280. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Supply-purpose nonpipeline entity and adjacent category boundary; not a manufacture/quantity factor |
| ladwp-wip-2024 | official_guidance | LADWP, Water Infrastructure Plan 2024-25, p. 10. https://www.ladwp.com/sites/default/files/2025-01/2024_BOOKLETS_WIP_Digital%20Final.pdf | Actual supply-system open channels/covered conduits/tunnels and separate upkeep; configuration/stage evidence only, not copied mileage/lifetime/maintenance schedule |
| usbr-construction | official_guidance | USBR, Crow Irrigation Project – Construction Activity Descriptions, Structures (Flumes; Replacing/Rehabilitating) and Canals (Cleaning/Shaping; Lining). https://www.usbr.gov/gp/nepa/cip/activity_descriptions.html | Transferable excavation/shaping/compaction, concrete flume/elevated supports and membrane operations only. Original irrigation purpose is outside this category; no default cost/dimensions/emissions/equipment rates |
| usbr-canals-2017 | official_guidance | USBR, Canal Operation and Maintenance: Concrete Lining and Structures, November 2017, printed p. 3 (construction/curing), p. 10 (support/voids), Section 5.8 Shotcrete (printed p. 22). https://www.usbr.gov/assetmanagement/docs/Canal_Concrete.pdf | Concrete placement/curing/support state and shotcrete, qualitative physical operations only. Irrigation O&M context is not supply whole-life evidence; historic temperatures/strengths/recipes are not project constraints |
| epa-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice: Concrete Washout, EPA 833-F-11-006, February 2012, pp. 1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Historical qualitative washout liquid/solids, containment and transfer boundaries; no copied pH/metals concentration or current compliance approval |
