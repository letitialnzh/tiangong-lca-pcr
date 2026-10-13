---
pcr_id: pcr.constructions-and-construction-services.constructions.long-distance-pipeline-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Long-distance pipeline construction delivery

## 1. Scope and Applicability

This PCR governs construction and acceptance delivery of the geographically defined physical long-distance pipeline entity conveying petroleum products, gas, water or other products, including overland, underground and submarine routes and pumping stations or similar related structures. Urban gas/water distribution mains are outside scope (un-cpc3-2025, printed/PDF p. 280). A classification coordinate is scope evidence, not a reason to create identity. This is installed civil work, not a bag of building materials, pipe manufacture, construction service or transport operation.

Use the complete owner-defined delivery system, or an independently accepted related station whose interfaces and relationship to the trunk line are explicit. A separately contracted reach qualifies only with independently testable, actually accepted interfaces and all its integral works; never cut a full project down to an easy pipe material or omit its stations/crossings. The representative steel route does not remove water, other pipe materials, trenchless or submarine applicability. Actual routes needing further consumables, coatings, fittings, support steel, marine anchorage, wet excavation or station auxiliaries require additional atomic exchanges and project evidence before completeness.

The foreground starts at documented preconstruction site/retained-asset conditions and actual supplied material interfaces and ends at completed installation, corrections, accepted testing, restoration included in handover and physical delivery. Supplier manufacture and its transports are separate linked upstream modules; routine operation, conveyed product, pumping/compression energy after handover, maintenance, replacement and final demolition are separate stages. This construction cycle sets no default lifetime, pipe mass per kilometre, capacity, fuel rate, loss fraction, recipe or approval. FERC 2013/2017 documents inform explicitly dated gas-project construction/data practices, not globally current regulatory compliance; PHMSA testing guidance is for gas/hazardous liquids, while water and other products require their actual acceptance specification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.long-distance-pipeline-delivery |
| classification_refs | CPC 3.0 53241; scope context only, no accepted mapping created |
| covered_products | Complete accepted long-distance overland, underground or submarine pipeline systems for petroleum, gas, water or other products; identified related pumping/compressor/valve structures |
| excluded_products | Urban/local distribution mains; separately delivered water-treatment plants, nonpipeline aqueducts and navigation works; manufactured pipe/components; construction services; operational transport service |
| representative_product | One configured complete accepted pipeline delivery unit with surveyed line and declared integral station/crossing interfaces |
| production_route | Actual logistics and site preparation, supplied-pipe jointing/protection, open-cut/trenchless/submarine installation, applicable station civil and equipment installation, pressure/conditioning tests, reinstatement and handover |
| market_state | Installed, inspected and actually accepted physical construction at the declared site; no routine transported-product output |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver the complete installed pipeline passage and declared related structures between the actual interfaces, capable of the declared conveyance duty under recorded acceptance conditions |
| How much | One complete accepted delivery unit. For a line-bearing unit survey actual installed centreline length, each bore/wall/section, burial/support/seabed geometry and crossings. For every included station survey its layout, foundations and equipment configuration. A genuinely independent station-only delivery declares its trunk-line interfaces and actual station geometry/duty; nonincluded line or station attributes are explicitly not_applicable with scope evidence, never fabricated. Declare actual hydraulic flow and pressure conditions. These qualify the same entity, not alternative denominators. |
| How well | Actual material grades, lining/coating/joint system, design and operating-fluid constraints, test medium, pressure/temperature, hold/leak criteria and test/inspection records for the declared jurisdiction/specification; no generic compliance conclusion |
| How long or cycle | One recorded construction-to-acceptance cycle, including actual rework and retest; later service duration is outside this reference and must be evidenced for any lifecycle extension |
| reference_flow_link | `finished_pipeline` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete long-distance pipeline delivery unit |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | asset/site id and country; conveyed product; start/end interfaces and related station scope; entity type and applicability of each qualifier; applicable as-built length/bore/wall/geometric survey; pipe material/grade/lining/coating/joint state; overland/underground/submarine and crossing methods; actual capacity and pressure/temperature conditions; supports/burial/protection; installed equipment and station configuration; preconstruction/retained state; supplier interfaces; test/inspection/repair/restoration records and acceptance date; boundary and completeness exclusions |

`item` is the display alias of public Item(s), counting this one complete configured civil delivery unit. It does not make different lengths, capacities or configurations equivalent. Do not substitute cost, transported tonnes or manufactured pipe mass for this reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items | item | Output is 1 item of the same complete accepted construction, verified using cp_delivery. All inventory and collection aggregates are per declared reference flow; no invented per-project/per-kilometre mass. |
| measured_physical_basis | all inventory rows | Mass; Volume; Length; Net calorific value; Number of items | kg; m3; m; MJ; item | Preserve each direct-read reference property and unit group. Weigh same-lot net masses; meter volume at recorded temperature/pressure; survey cable/pipe lengths and geometry. Volume-to-mass or length-to-mass needs independently measured density or linear mass for that exact state; never change a public property to Mass or use a default density. Use Number of items/item for one complete accepted pipeline entity under reference_count and cp_delivery. The listed property/unit pairs apply to their respective exchanges; auxiliary quantities do not replace the reference output count. |
| electricity_units | cn_lv_power; cn_mv_power | Net calorific value | MJ | Public electricity retains Net calorific value and Units of energy. Convert metered kWh using the defined identity 1 kWh = 3.6 MJ; record which user-voltage interface is present. |
| asset_share_basis | timber_mat; crawler_excavator; pipelay_vessel | Mass | kg | Collect actual same-configuration net asset mass and an independently supported dimensionless manufacture share in cp_assets. Lifetime or cumulative activity unknown requires explicit review; no full manufacture burden is reset per project. |

| Property | UUID | Unit group | Reference unit |
| --- | --- | --- | --- |
| Mass | 93a60a56-a3c8-11da-a746-0800200b9a66 | 93a60a57-a4c8-11da-a746-0800200c9a66 | kg |
| Volume | 93a60a56-a3c8-22da-a746-0800200c9a66 | 93a60a57-a3c8-12da-a746-0800200c9a66 | m3 |
| Net calorific value | 93a60a56-a3c8-11da-a746-0800200c9a66 | 93a60a57-a3c8-11da-a746-0800200c9a66 | MJ |
| Length | 838aaa23-0117-11db-92e3-0800200c9a66 | 838aaa22-0117-11db-92e3-0800200c9a66 | m |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented site, existing retained line/station/interfaces and actual supplier-gate delivered material/assembly state before construction |
| starting_condition_role | foreground_start |
| product_classification_scope | Complete long-distance pipeline physical delivery and identified related structures, excluding local distribution |
| recursive_input_rule | Retained line/station is starting stock, not new reference output. A purchased same-category accepted work is linked once at its own delivery boundary, never recursively regenerated as onsite pipe manufacture. |
| upstream_dataset_requirement | Verify supplier product/state, route/geography/period, primary property, transport interface and module coverage. Link separate material, equipment, utility and actual waste-management datasets; no automatic complete upstream coverage. |
| disclosure | Construction foreground through actual acceptance; report every linked upstream module and omission independently. Do not claim complete cradle-to-gate or whole-life coverage from a construction account. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| b_complete_delivery | Include actual mobilisation, route/working-area preparation, topsoil segregation, trench or support works, pipe receipt/stringing/bending, jointing and NDT, applicable coating repair, lowering/laying/anchorage, backfill, station civil/equipment installation, testing/retest, tie-in, required handover restoration and cleanup. Shared utility/emission records are task tagged and counted once. | ferc-construction-2017; ferc-upland-2013; saipem-subsea |
| b_routes | Derive open-cut/HDD/tunnel/overland-supported/submarine and station requirements from actual design/as-built records. Include actual water control, drilling-fluid management, lay/support vessels, trench/protection works and shore approach. Missing route materials or processes must be added as atomic rows before a complete project dataset; conditional cards cannot delete actual scope. | ferc-wetland-2013; saipem-subsea; un-cpc3-2025 |
| b_supplied_state | Separate supplied-pipe/coating/assembly manufacture from field joining, protection, transport and installation. Supplier factory testing is upstream; actual construction tests are foreground. Record actual onsite fabrication/batching as distinct inputs/processes; never duplicate embedded steel/concrete/water or coating ingredients. | ferc-construction-2017; nwpipe-steel-water-2019; phmsa-hydrotest |
| b_consumed_inputs | For every supplied material or assembly input, construction/installation applicability identifies the intended work, not only successfully installed quantities. In each native unit use attributable gross receipts + opening stock - verified returns/transfers - closing reusable stock; include pre-acceptance spillage, damage, rejected-but-consumed items and replacements. Verified returns and reusable carryover are excluded from consumed input, while any attributable handling, transport or rework remains. Reconcile installed acceptance and waste separately; do not cancel consumed manufacture. Reusable temporary assets retain their conserved manufacturing share under the asset-allocation rules. |  |
| b_stages | Include removal of existing obstructions and temporary works actually needed for construction, without pretending it is future final demolition. Exclude posthandover transport operation, routine pumping/compression, maintenance/renewal and final demolition; extend separately with actual activity/duration/fate evidence. | ferc-construction-2017; phmsa-hydrotest |
| b_environment | Direct water-resource inputs, purchased technosphere water, wastewater to treatment and elemental discharge are different interfaces. Record emissions only for actual substance/media and evidenced occurrence. Noise, vibration, land/ecology, waterbody disturbance and drainage are surveyed impact context; lack of an applicable quantified flow is an explicit coverage gap, not zero impact. | ferc-construction-2017; ferc-wetland-2013; ferc-upland-2013 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| logistics | Construction logistics | required | All actual materials/equipment/waste movements not already covered by verified suppliers | foreground_process | per declared reference flow |
| earthworks | Route preparation, excavation and bedding | conditional | Actual overland/underground preparation, open cut, supports or site removal | foreground_process | per declared reference flow |
| pipe_installation | Pipe receipt, jointing, protection and installation | conditional | Declared delivery includes a pipeline reach; execute actual welding/fusion/gasket route | foreground_process | per declared reference flow |
| crossings | Trenchless and waterbody crossings | conditional | Actual HDD, boring, tunnelling or water crossing with its recorded method | foreground_process | per declared reference flow |
| offshore | Submarine pipelay and protection | conditional | Actual submarine route; record S/J/reel-lay, support vessels, burial/protection and shore approach | foreground_process | per declared reference flow |
| station | Related pumping/compressor/valve station construction | conditional | Integral declared station or independently accepted related station; actual civil/equipment/control scope | foreground_process | per declared reference flow |
| commissioning | Pressure tests, conditioning and tie-in | required | All actual acceptance tests, cleaning, repair/retest and tie-in; individual water/gas media conditional | foreground_process | per declared reference flow |
| restoration | Backfill, reinstatement and cleanup | conditional | Actual construction disturbance, temporary works removal and required handover restoration | foreground_process | per declared reference flow |
| assets | Reusable construction asset manufacture attribution | conditional | Actual included reusable assets with conserved and supported manufacture shares | foreground_process | per declared reference flow |
| site_support | Task-specific equipment operation, water and site emissions | required | All included tasks; each exchange requires actual occurrence and applicable identity | foreground_process | per declared reference flow |
| handover | Final inspection and complete delivery | required | All declared physical works and acceptance interfaces | reference_process | per declared reference flow |

Each material applies only to its actual route. Equipment/task ledgers cover excavation, lifting, bending, welding, pumping, testing, drilling, vessel positioning and station construction. site_support attributes utilities/emissions by task once; assets contains supported manufacture shares separately from operation. Add exact rows for other actual additives, fuels, coatings and wastes before project completeness.

### Process: Construction logistics (`logistics`)

All actual materials/equipment/waste movements not already covered by verified suppliers.

#### Inputs

##### Product flows

###### Diesel fuel (`transport_diesel`)

Only actual diesel burned in separately recorded road haulage and mobilisation. Generic fuel identity has unspecified grade, density, heating value, refinery and provider; document the actual supplier and composition. Include actual distance, payload, empty return and fuel use; do not also add a transport service containing that fuel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_logistics`
- Sources: `ferc-construction-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Route preparation, excavation and bedding (`earthworks`)

Actual overland/underground preparation, open cut, supports or site removal.

#### Inputs

##### Product flows

###### Graded natural sand for pipeline bedding (`bedding_sand`)

Only actual imported natural sand bedding; record grading, moisture, contamination status and supplier boundary. Internal reused excavated sand is a tracked internal transfer, not a new purchased sand input.

- Selected flow: Graded natural sand for pipeline bedding
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Uncontaminated excavated mineral subsoil sent off site (`mineral_spoil`)

Only segregated mineral subsoil crossing to documented offsite management after subtracting same-site reuse. Exclude topsoil, vegetation, concrete and contaminated soil; create separate atomic rows for them when present. Waste treatment is separately linked to its measured destination.

- Selected flow: Uncontaminated excavated mineral subsoil sent off site
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ferc-upland-2013`

##### Elementary flows

### Process: Pipe receipt, jointing, protection and installation (`pipe_installation`)

Declared delivery includes a pipeline reach; execute actual welding/fusion/gasket route.

#### Inputs

##### Product flows

###### Line pipe of a kind used for oil or gas pipelines, welded, of steel (`oilgas_welded_pipe`)

Only actual manufactured welded steel line pipe for petroleum or gas matching the public factory-gate identity; record grade, diameter, wall, lengths and supplied coating/lining. This UUID does not establish water pipe, seamless pipe or installed pipeline. Pipe-mill manufacture and factory hydrotest remain upstream.

- Selected flow: Line pipe of a kind used for oil or gas pipelines, welded, of steel `e505f1de-c307-4319-a6b6-371b34e7b1ed`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

###### Manufactured welded steel water-transmission pipe (`water_steel_pipe`)

Only an actual water-transmission steel pipe, with actual factory-applied lining/coating and joint preparation recorded. The oil/gas-only identity cannot replace it.

- Selected flow: Manufactured welded steel water-transmission pipe
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `nwpipe-steel-water-2019`

###### Manufactured seamless steel transmission pipe (`seamless_pipe`)

Only actual seamless transmission pipe; retain hot/cold route, grade, dimensions and delivered protection.

- Selected flow: Manufactured seamless steel transmission pipe
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

###### Manufactured polyethylene pressure pipe (`pe_pressure_pipe`)

Only actual PE pressure pipe with resin designation, pressure rating, SDR/dimensions, potable-water suitability where applicable and fusion method from the project. No default PE grade is implied.

- Selected flow: Manufactured polyethylene pressure pipe
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `un-cpc3-2025`

###### Manufactured ductile-iron pressure pipe (`ductile_pressure_pipe`)

Only actual ductile-iron pressure pipe, with joint, lining, coating and pressure class recorded; not grey-iron casting feedstock.

- Selected flow: Manufactured ductile-iron pressure pipe
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `un-cpc3-2025`

###### Prestressed concrete cylinder pressure pipe (`pccp`)

Only actual supplied complete PCCP of documented dimensions, cylinder, prestress and lining condition. Do not also count its embedded cement, wire and steel cylinder as purchased site inputs.

- Selected flow: Prestressed concrete cylinder pressure pipe
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `un-cpc3-2025`

###### Flux Cored Wire (`flux_wire`)

Only actual all-position single-pass self-shielded carbon-steel flux-cored wire consistent with the public record and approved project welding procedure. Other electrode/wire/flux/shielding-gas routes require distinct rows, not this UUID. Record consumed wire and rejected/repaired welds.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

###### Solid carbon-steel welding wire (`solid_weld_wire`)

Only actual solid carbon-steel field-joint welding wire, with composition and welding procedure. Public Solid Wire refers to building electrical conductor and cannot be used.

- Selected flow: Solid carbon-steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

###### Formulated fusion-bonded epoxy coating powder (`fbe_powder`)

Only actual field-applied FBE powder of recorded formulation/solids and lot; raw DGEBA resin is not the supplied formulated powder. Exclude factory coating already included in the pipe input. Capture coating inspection and repair quantities.

- Selected flow: Formulated fusion-bonded epoxy coating powder
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

###### Manufactured polyethylene heat-shrink pipeline joint sleeve (`heatshrink_sleeve`)

Only an actual manufactured PE heat-shrink sleeve with its integral adhesive declared; not PE film, bag or resin. Extra separately supplied primer is a separate material row if used.

- Selected flow: Manufactured polyethylene heat-shrink pipeline joint sleeve
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `nwpipe-steel-water-2019`

###### Manufactured EPDM pipe-joint gasket (`epdm_gasket`)

Only actual EPDM gasket in a gasketed pipe joint; record elastomer formulation and size. Other elastomers and flanged steel joints are separate routes.

- Selected flow: Manufactured EPDM pipe-joint gasket
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `nwpipe-steel-water-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Uncoated steel pipe-cutting offcut (`pipe_steel_offcut`)

Only segregated bare steel offcuts from field cutting; coated pipe waste needs a separate state-specific row. Record weighed destination with no assumed recycling credit.

- Selected flow: Uncoated steel pipe-cutting offcut
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ferc-construction-2017`

##### Elementary flows

### Process: Trenchless and waterbody crossings (`crossings`)

Actual HDD, boring, tunnelling or water crossing with its recorded method.

#### Inputs

##### Product flows

###### Dry sodium-bentonite drilling powder (`dry_bentonite`)

Only actual dry sodium-bentonite supplied for trenchless construction. Mix-water and each actual separate additive are separately recorded; packaged formulated drilling fluid is an alternative with composition/interface, not additional embedded powder.

- Selected flow: Dry sodium-bentonite drilling powder
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-wetland-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Separated mineral drilling cuttings (`drill_cuttings`)

Only actual separated mineral drilling cuttings from HDD/boring; record geology, retained fluid/moisture and contamination tests. Other spoil and spent fluid are distinct.

- Selected flow: Separated mineral drilling cuttings
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ferc-wetland-2013`

###### Spent aqueous bentonite drilling slurry (`spent_bentonite_slurry`)

Only spent bentonite slurry actually sent for treatment, with solids fraction and additives recorded. Internal recycling is tracked separately; inadvertent return to the environment requires substance- and receiving-medium-specific elementary rows and incident records.

- Selected flow: Spent aqueous bentonite drilling slurry
- Flow property / unit: Volume / m3
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ferc-wetland-2013`

##### Elementary flows

### Process: Submarine pipelay and protection (`offshore`)

Actual submarine route; record S/J/reel-lay, support vessels, burial/protection and shore approach.

#### Inputs

##### Product flows

###### Marine gas oil supplied to pipelay vessel (`marine_gasoil`)

Only actual marine gas oil for the pipelay/construction vessel, allocated from bunker and engine/task logs. Fishing-vessel burned-diesel records are incompatible. Other actual vessel fuels need separate exact rows.

- Selected flow: Marine gas oil supplied to pipelay vessel
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `saipem-subsea`

###### Precast concrete pipeline ballast block (`ballast_concrete`)

Only actual supplied complete concrete ballast blocks; factory concrete-weight coating included in supplied pipe is not counted here. Record block geometry, mass and placement.

- Selected flow: Precast concrete pipeline ballast block
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `saipem-subsea`

###### Manufactured zinc-alloy sacrificial pipeline anode (`zinc_anode`)

Only actual zinc-alloy sacrificial anode installation of recorded alloy and mass. Aluminium anodes and impressed-current systems need distinct actual exchanges and connection records.

- Selected flow: Manufactured zinc-alloy sacrificial pipeline anode
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `saipem-subsea`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Related pumping/compressor/valve station construction (`station`)

Integral declared station or independently accepted related station; actual civil/equipment/control scope.

#### Inputs

##### Product flows

###### Fresh ready-mixed concrete supplied for station foundations (`fresh_concrete`)

Only actual delivered fresh ready-mix of documented composition, strength class, moisture and density. Pumping, placing, compaction, curing and washout remain site tasks. Cast-In-Place Concrete identity already describes onsite mixing/placing and is not the purchased mixture. Actual site batching requires separate cement, aggregate fractions, water and admixture rows.

- Selected flow: Fresh ready-mixed concrete supplied for station foundations
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

###### Hot rolled rebar steel (`lowalloy_rebar`)

Only actual hot-rolled low-alloy rebar with carbon <=0.2% matching the factory-gate public specification; require mill certificate and weighed issued mass. Other carbon/alloy classes use a distinct exact row.

- Selected flow: Hot rolled rebar steel `43050e3b-42be-465c-a021-17f606484151`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

###### Non-alloy carbon-steel reinforcing bar (`carbon_rebar`)

Only actual non-alloy carbon-steel rebar; record grade and delivered state. Do not use low-alloy C<=0.2% identity or a wind-farm-only rebar record without matching evidence.

- Selected flow: Non-alloy carbon-steel reinforcing bar
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

###### Pump (`liquid_pump`)

Use actual complete factory-supplied liquid pumps supplied for the related long-distance pumping station, including attributable pre-acceptance damage and replacement consumption under b_consumed_inputs; accepted installed pumps are recorded separately. Record fluid, model, duty, casing/impeller, delivered assembly and measured net mass; define whether drive is included so a separate motor is not duplicated. This is not operational pumping electricity.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `un-cpc3-2025`

###### Manufactured natural-gas compressor package (`gas_compressor`)

Only actual supplied natural-gas compressor package at a related station; declare included driver, ancillary skids, seals, pressure/duty and net mass. Separate station civil works, installation, prehandover testing and later compressor operation.

- Selected flow: Manufactured natural-gas compressor package
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

###### Steel valve (`steel_valve`)

Only actual supplied steel isolation valve matching the purchased plant-delivery identity. Record valve type, bore, pressure class, actuator inclusion and net mass; supplier-to-site transport and installation are separately measured. Other alloy/body materials need distinct identities.

- Selected flow: Steel valve `3cb88a81-618f-4fa5-814e-46399b121622`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

###### Low-voltage cable (`lv_cable`)

Only actual CN factory-gate cable of matching GB/T 12706.1-2020 specification, voltage <=1000 V and recorded conductor, section, insulation/sheath and installed length. Preserve Length, not Mass; internal copper/polymer contents are not extra purchased inputs. Other origin/voltage/specification requires another identity.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-construction-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Concrete-equipment alkaline washwater (`concrete_washwater`)

Only actual separately captured concrete-equipment washwater delivered for treatment; record pH, suspended solids, volume and destination. It is not a direct freshwater release and not electrolytic-manganese washing wastewater.

- Selected flow: Concrete-equipment alkaline washwater
- Flow property / unit: Volume / m3
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `ferc-upland-2013`

##### Elementary flows

### Process: Pressure tests, conditioning and tie-in (`commissioning`)

All actual acceptance tests, cleaning, repair/retest and tie-in; individual water/gas media conditional.

#### Inputs

##### Product flows

###### Compressed gaseous nitrogen for pipeline purging (`nitrogen_purge`)

Only actual nitrogen purging/drying/inerting specified by the project, with actual purity, pressure/temperature, delivered mass and method. Not mandatory for every water/liquid line. CN plant Volume identity lacks the actual compressed state basis; bottling inerting is a different process.

- Selected flow: Compressed gaseous nitrogen for pipeline purging
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing`
- Sources: `phmsa-hydrotest`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent pipeline hydrostatic-test water sent for treatment (`test_wastewater`)

Only actual post-test water sent across a technosphere treatment interface; record initial source, additives, contamination analyses, reused volume and actual destination. Exclude recirculation and direct discharge recorded in separate elementary rows.

- Selected flow: Spent pipeline hydrostatic-test water sent for treatment
- Flow property / unit: Volume / m3
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing`
- Sources: `phmsa-hydrotest`; `ferc-wetland-2013`

##### Elementary flows

###### Water directly released to fresh water (`freshwater_discharge`)

Only actual measured direct release of the water substance to an identified freshwater receiving body. If foreground treatment occurs, measure the release after that treatment; if no treatment occurs, retain the actual direct release. Pollutant substances are additional exact elementary rows based on analysis. This is not waste sent to sewer/treatment, marine release, withdrawal or consumed water; do not infer harmlessness from this row.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_testing`
- Sources: `ferc-wetland-2013`

###### methane (fossil) (`fossil_methane_vent`)

Only actual prehandover vent/leak of identified fossil methane to external air/unspecified, immediate release. Determine methane component mass from measured gas quantity/composition; not total natural gas, not flared methane, not a routine operating emission and not a mandatory construction release.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ferc-construction-2017`

###### dinitrogen (`nitrogen_release`)

Only measured molecular nitrogen, CAS 7727-37-9, actually vented from the declared prehandover nitrogen-purge task to external air/unspecified immediately. Reconcile delivered, retained and recovered nitrogen; this is neither NO, NO2 nor N2O and is not inferred as compulsory from a nitrogen input.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `phmsa-hydrotest`

### Process: Backfill, reinstatement and cleanup (`restoration`)

Actual construction disturbance, temporary works removal and required handover restoration.

#### Inputs

##### Product flows

###### Uncontaminated imported topsoil (`topsoil`)

Only actual imported topsoil for final reinstatement; record provenance, soil condition, quantity and reuse separately. Original site topsoil stripped/stored/replaced is internal stock and must not carry a second production burden.

- Selected flow: Uncontaminated imported topsoil
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `ferc-upland-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Reusable construction asset manufacture attribution (`assets`)

Actual included reusable assets with conserved and supported manufacture shares.

#### Inputs

##### Product flows

###### Manufactured hardwood access mat (`timber_mat`)

Only actual reusable manufactured hardwood mat included in the construction account. Record same-configuration net mass, moisture, cumulative actual uses and a conserved attributable manufacture share; generic lumber does not identify a complete mat.

- Selected flow: Manufactured hardwood access mat
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ferc-wetland-2013`

###### Manufactured diesel crawler excavator (`crawler_excavator`)

Only actual included equipment-manufacture attribution, using measured same-configuration net mass and supported cumulative actual activity/share. Dismantling/recycling excavator identity and a default 10 L/h are not construction-manufacture evidence. Actual operating fuel is in site_support.

- Selected flow: Manufactured diesel crawler excavator
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `ferc-construction-2017`

###### Manufactured pipelay construction vessel (`pipelay_vessel`)

Only actual included vessel-manufacture share with traceable lightship configuration mass and supported cumulative construction activity. Operating bunkers are offshore input; do not reset the full manufacture burden per project.

- Selected flow: Manufactured pipelay construction vessel
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `saipem-subsea`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Task-specific equipment operation, water and site emissions (`site_support`)

All included tasks; each exchange requires actual occurrence and applicable identity.

#### Inputs

##### Product flows

###### Diesel fuel (`site_diesel`)

Only measured diesel supplied and burned for actual excavating, bending, welding generators, cranes, pumps, station civil works, testing and restoration tasks; assign each fuel batch once to task/equipment. Generic public identity leaves fuel grade/refinery/provider unspecified; actual fossil/biogenic fraction is collected, not inferred.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ferc-construction-2017`

###### Alternating current (`cn_lv_power`)

Only actual CN grid-average user supply below 1 kV at the construction user meter, matching region/year/provider and delivered voltage. Preserve the public Net calorific value property and energy group; other regions or generator output require separate identities.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ferc-construction-2017`

###### Alternating current (`cn_mv_power`)

Only actual CN grid-average user supply at 1–35 kV matching the construction delivery point and source region/year; do not substitute low-voltage identity or add generation losses already in the user-supply dataset.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `ferc-construction-2017`

###### Process Water (`treated_process_water`)

Only actual treated technosphere water supplied for site mixing, dust control, cooling, curing or hydrotest, with each use separately metered. Preserve public Mass/kg; volume conversion needs measured batch density at temperature. No default water treatment or upstream coverage follows from this generic identity. Raw river/groundwater withdrawal is separately represented and not also counted for purchased water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ferc-construction-2017`; `ferc-wetland-2013`

##### Waste flows

##### Elementary flows

###### river water (`river_withdrawal`)

Only actual direct river-water resource withdrawal into the foreground, not purchased treated water; preserve Volume/m3, extraction coordinates/country, dates, permit and actual return/disposal. Water scarcity interpretation must use the actual process location; withdrawal is not consumption.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ferc-wetland-2013`

###### ground water (`groundwater_withdrawal`)

Only actual direct groundwater resource withdrawal into the construction boundary, including dewatering even when bypassed immediately to disposal. Meter gross extraction and each actual return/disposal separately with source/location, rather than deleting extraction because it is nonconsumptive. Do not treat bypass dewatering as treated supply or net consumption; background withdrawal embedded in purchased water is not duplicated.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume / m3
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ferc-construction-2017`

#### Outputs

##### Product flows

##### Waste flows

###### Groundwater-dewatering water sent for treatment (`dewatering_wastewater`)

Only actual construction groundwater-dewatering water transferred to a technosphere treatment receiver, with chemistry, volume, contamination and destination recorded. Do not also record that volume as a direct environmental return; actual treatment outputs belong to the correct treatment boundary.

- Selected flow: Groundwater-dewatering water sent for treatment
- Flow property / unit: Volume / m3
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ferc-construction-2017`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only evidenced fossil-carbon dioxide directly emitted by included site/transport/vessel fuel combustion to external air/unspecified, immediately. Use measured fossil carbon balance or an applicable source-bound factor; fuel presence alone supplies no amount. Separate biogenic carbon, upstream emissions and land-use-change carbon.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ferc-construction-2017`

###### nitrogen monoxide (`molecular_no`)

Only measured or specifically modelled molecular NO from actual included activity to external air/unspecified, immediate. Require NO speciation and applicable equipment/fuel/control evidence. NOx-as-NO2, NO2, nitrite and N2O cannot replace NO.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ferc-construction-2017`

###### nitrogen dioxide (`molecular_no2`)

Only actual molecular NO2, CAS 10102-44-0, emitted to external air/unspecified, immediately. Do not reinterpret NOx expressed as NO2-equivalent or the database synonym N2O4 as measured molecular NO2.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ferc-construction-2017`

###### particles (PM2.5 - PM10) (`pm_2_5_10`)

Only evidenced external-air release of the 2.5–10 micrometre fraction from actual exhaust, earth handling or cutting. Exclude internal workplace exposure and captured dust. Do not add total PM10 to this fraction without removing overlap.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ferc-construction-2017`

###### Airborne particles smaller than 2.5 micrometres (`pm_under_2_5`)

Only evidenced entire <2.5 micrometre fraction released to external air/unspecified; partial 0.2–2.5 micrometre non-urban/stack identities and soot mixtures do not represent this full fraction. Do not infer a particle-size distribution.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ferc-construction-2017`

###### Particulate matter, particle size unspecified (`unsized_dust`)

Only actual exterior fugitive dust release for which particle size is genuinely unspecified. Public identity explicitly does not impose its historical clinker case factor or chemical composition on this use. Quantify from applicable site evidence; never sum this total with overlapping resolved fractions.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `ferc-construction-2017`

###### Liquid groundwater-dewatering water directly returned to fresh water (`dewatering_freshwater_return`)

Only actual measured liquid water returned from construction dewatering to an identified freshwater receiver after any foreground treatment. It reconciles gross groundwater extraction without assuming zero consumption, clean discharge or equal input/output. Analyse separately released contaminants and add exact substance rows; wastewater to treatment and return to sea/soil require their distinct rows.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the measured, reconciled attributable quantity from the linked protocol; aggregate per declared reference flow; no default amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `ferc-construction-2017`; `ferc-wetland-2013`

### Process: Final inspection and complete delivery (`handover`)

All declared physical works and acceptance interfaces.

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete long-distance pipeline delivery unit (`finished_pipeline`)

One complete as-built and accepted pipeline system or explicitly identified independently delivered related station, with all declared integral works and tests accounted for. A pipe bundle, construction service, unaccepted reach or selected easy subtask is not this output.

- Selected flow: Accepted complete long-distance pipeline delivery unit
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`
- Sources: `un-cpc3-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| a_direct | Measure direct attribution by unit/reach/station/task. Separate shared equipment, water and logistics meters/activities first; any remaining allocation follows actual load/activity and conserves totals. Cost, default length or design load is not an arbitrary allocation key. | ferc-construction-2017 |
| a_stock | Same-site soil, water and drilling-fluid reuse is an internal transfer: retain balances without repeatedly counting external purchases/withdrawals. Material manufacture and downstream waste treatment are separate; scrap labels grant no automatic substitution credit. | ferc-wetland-2013; ferc-upland-2013 |
| a_reuse | Attribute asset/component manufacture from actual same-configuration net mass and supported dimensionless beneficiary shares, each share in [0,1] and cumulatively <=1 across all projects/periods/reuses. Record actual activity denominator and evidence; unknown lifetime/beneficiaries require review, never full manufacture reset per project. | ferc-construction-2017 |
| a_product | The reference output is only the declared complete entity. Retained existing assets and transferred equipment are not newly manufactured co-products. Actual independently delivered co-products require process/measurement separation first, followed by physically evidenced allocation and review. | un-cpc3-2025 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | handover | finished_pipeline | Acceptance and as-built register | asset/site/interface ids; country; fluid; actual applicable line length/bore/wall/route/pressure/duty; included station geometry/equipment/BOM; not_applicable scope evidence; test medium/criteria/results; weld/coating inspection; rework; restoration; complete accepted count | Survey from traceable as-built geometry and calibrated instruments, reconcile contract scope/BOM with signed acceptance and test records; verify entire delivery state before counting output. | item | each delivery and correction | whole actual construction through acceptance | same declared unit/interfaces | per declared reference flow | survey/calibration files; acceptance and inspection records |
| cp_materials | pipe_installation; earthworks; crossings; offshore; station; restoration | each supplied atomic material/assembly | Receipts, issue/return, stock and supplier records | row_id; lot/grade/specification; material/formulation/lining/coating; supplier country/interface; issued/returned/stock; measured net mass/length/volume; temperature; density or linear mass; station assembly inclusion ; opening and closing reusable stock; verified transfers; pre-acceptance damage/rejection/replacement; separate consumed and accepted installed quantities | Weigh net delivered/issued material with calibrated scale or traceable lot certificates; reconcile start/end stocks and returns against installed geometry and actual BOM. Measure density/linear mass only for the same lot/state; exclude packaging tare and embedded items counted within complete supplied assemblies.  Apply b_consumed_inputs in the row native unit: gross attributable receipts + opening stock - verified returns/transfers - closing reusable stock; include consumed losses and replacements, with accepted installation and waste reconciled separately. | kg; m; m3 | each delivery/issue/return | all lots of construction/rework | same unit; tagged task/station/reach | per declared reference flow | weigh tickets; mill certificates; formulations; actual BOM/stock reconciliation |
| cp_logistics | logistics | transport_diesel | Vehicle and consignment ledger | vehicle/task; origin/destination; actual distance; payload; empty return; diesel grade/fossil fraction; supplied/burned fuel; opening/closing fuel stock; supplier transport coverage | Use fuel meter/refuelling and dispatch records; reconcile loading quantities and included outbound/return trips; subtract no distance by assumption. If using linked transport-service datasets instead of fuel, declare exact activity and remove included fuel and emissions from this account. | kg; km | each trip and refuelling | all actual construction deliveries and waste trips | unit-specific route ledger | per declared reference flow | fuel meter calibration; dispatch and trip logs; supplier boundaries |
| cp_energy | site_support; offshore | each fuel or delivered-voltage electricity | Meter, fuel and equipment/task logs | row_id; meter/voltage; country/year/provider; task/equipment; start/end readings; actual activity/idle hours; fuel quantity/grade/fossil fraction; density; heating-value evidence; vessel bunker/task; attribution shares | Read calibrated user meters, weighed fuel issues or traceable refuelling; reconcile onsite generators and marine tasks separately. Attribute shared meter quantities using actual metered task demand or supported activity, with full-period quantities conserved. Convert kWh to MJ using 3.6; mass-to-fuel-energy needs actual applicable LHV, not an assumed flow secondary property. | kg; kWh; MJ | each shift, fuel issue and meter period | entire site/vessel construction and retest | declared unit/tasks plus separately identified shared beneficiaries | per declared reference flow | meter calibration; fuel certificates; time/task and conserved attribution ledger |
| cp_water | site_support | treated_process_water; river_withdrawal; groundwater_withdrawal; dewatering_freshwater_return; dewatering_wastewater | Supply, intake, use, recycle and dewatering meters | source/type/country/location; treatment/interface; use/task; mass/volume/temperature/density; intake; recycle; discharge; stock; dewatering; permits | Meter each actual external source and destination. Weigh treated Mass-reference water or convert metered volume with same-state measured density. Track internal recirculation without counting it as a fresh external input each pass; retain separate groundwater dewatering bypass volumes and receiving interface. | kg; m3 | each intake/use/discharge event | whole construction including hydrotest | same unit, identified water bodies and supplier | per declared reference flow | calibrated meters; water balance; actual source quality and permits |
| cp_testing | commissioning | nitrogen_purge; test_wastewater; freshwater_discharge | Test-medium and commissioning ledger | test section/interface; fluid; pressure/temperature/hold/leak specification; pump/compressor activity; source medium purity/state; delivered and recovered mass/volume; water additives; reuse; discharge destination and analyses; repairs/retests | Use approved actual project specification and calibrated pressure, temperature, flow and gas/volume measurements; retain test results, leakage repairs and repeats. Establish nitrogen density from applicable state/composition evidence if converting volume; never equate unspecified compressed volume with normal volume. Separate wastewater sent to treatment from direct discharge and measure each analysed substance separately. | kg; m3; pressure/temperature/time | each test, repair, retest and conditioning event | actual postconstruction prehandover tests only | same pipeline unit and receiving interface | per declared reference flow | calibration; test/inspection and chemical analysis; actual approval documents, not PCR compliance |
| cp_waste | earthworks; pipe_installation; crossings; station | each segregated waste | Waste weighbridge, composition and destination register | row_id; source task; substance/material/state; net mass/volume/moisture/solids; contamination; onsite reuse; storage; actual carrier/treatment/discharge destination | Measure segregated streams with calibrated scales/meters and representative state/composition analyses. Reconcile generation, reuse, stocks and actual outbound quantities. Treatment/transport modules must match actual destination and cannot be inferred from generic recycling or landfill labels. | kg; m3 | each stream transfer and stock record | all actual construction and rework | same unit and real destination | per declared reference flow | weigh tickets; laboratory analyses; waste/transport/treatment acceptance receipts |
| cp_assets | assets | each reusable asset manufacture share | Asset serial/configuration and cumulative beneficiary ledger | asset id/configuration; measured net mass; manufacturing boundary; project actual activity; prior/later beneficiaries; supported total life activity or actual cumulative allocation basis; dimensionless attributed shares; uncertainties | Use calibrated same-configuration net mass weighing or traceable manufacturer weighing records, exclude transport packaging. Retain evidence for total manufacture allocation activity and actual project share; track cumulative shares across all projects/periods/uses and ensure their sum <=1. Unknown lifetime/activity is a review gap; never reset a complete manufacturing burden per project. | kg; dimensionless share; actual activity unit | each asset/use and cumulative ledger update | construction project plus documented cross-project beneficiary horizon | asset serial tied to unit and other beneficiaries | per declared reference flow | weighing records; supported life/activity evidence; cumulative conserved share ledger |
| cp_air | site_support; commissioning | each elementary air emission | Measured species/size/compartment and activity record | row_id; equipment/task/date; actual substance/CAS; fossil/biogenic component; external medium/subcompartment/time; controls; measured release or applicable factor/source; activity basis; gas composition; particle-size fraction; uncertainty; receiver noise/vibration measurements | Use calibrated emission/speciation measurements or explicitly supported equipment/fuel/control-specific factors with real activity. Record factor provenance/basis and do not turn NOx equivalents into molecular NO/NO2. Fuel carbon balance separates fossil/biogenic carbon; purge/vent calculations use measured composition/state and remove flared portions. Distinguish emitted external dust from captured dust and workplace measurements. Keep noise/vibration as measured receiver/event context unless an applicable quantified flow and assessment method are independently established. | kg; separate noise dB/time/context | each actual activity/measurement interval | all included construction/preacceptance releases | same unit and true external receiving compartment | per declared reference flow | calibration; species/size and fuel analyses; applicable model/factor evidence; uncertainty and uncovered effects |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_reference | finished_pipeline | Record 1 item only when every interface, physical work and required test for the same complete unit is actually accepted; purchased pipe length is not accepted-entity count. | cp_delivery | reference output per declared reference flow | un-cpc3-2025 |
| calc_stock | all material and waste rows | Per declared reference flow reconcile opening stock, receipts, closing stock, returns, installed amount, waste and internal reuse by lot; conserve the same substance/state and include rework. Total input mass is not construction-reference mass.  Apply b_consumed_inputs to supplied inputs, including pre-acceptance consumed losses and replacements; accepted installed amounts are not the input quantity. | cp_materials; cp_waste | net attributable amount of each substance per declared reference flow | ferc-construction-2017 |
| calc_utilities | transport_diesel; site_diesel; marine_gasoil; cn_lv_power; cn_mv_power | Per declared reference flow sum measured attributable quantities; multiply kWh by 3.6 to obtain MJ. Fuel volume-to-mass uses measured same-state density; energy conversion uses supported actual LHV. Shared task amounts cannot exceed the complete corresponding meter-period total. | cp_energy; cp_logistics | kg or MJ per declared reference flow | ferc-construction-2017 |
| calc_water | treated_process_water; river_withdrawal; groundwater_withdrawal; dewatering_freshwater_return; dewatering_wastewater; test_wastewater; freshwater_discharge | Per declared reference flow reconcile each external intake/supply, storage, actual reuse and external destination. Convert Mass-reference water volume with same-state measured density. Withdrawal, consumption, wastewater to treatment and direct discharge are separate quantities; internal recycle is not repeated external withdrawal. | cp_water; cp_testing | separate kg or m3 per declared reference flow | ferc-wetland-2013 |
| calc_emission | all elementary air emission rows | Per declared reference flow use measured substance release, or document applicable factor times real activity with its units. Fossil CO2 uses measured oxidized fossil carbon multiplied by molecular mass ratio 44/12; assume neither all-fossil nor complete oxidation. NOx equivalents, total PM or generic factors do not establish actual species/fraction. | cp_air | substance-specific kg per declared reference flow | ferc-construction-2017 |
| calc_assets | timber_mat; crawler_excavator; pipelay_vessel | Per declared reference flow attributable manufacture amount = measured same-configuration net asset mass times supported dimensionless manufacture share. Across all beneficiary projects/reuses cumulative shares <=1. Unknown activity denominator/lifetime remains review, with no default share. | cp_assets | attributable manufacture kg per declared reference flow | ferc-construction-2017 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_entity | all inventory rows | The same actual interfaces/configuration/complete delivery state must agree with geometry and testing evidence; omit neither actually included pipeline nor station works. Partial delivery is explicitly incomplete. | cp_delivery; cp_materials |
| dq_measure | all inventory rows | Retain calibration, units, lots, temperature/pressure, density and formulation evidence. Same-lot net amounts, rework/retest, stocks and attribution balances are traceable; no default recipes/losses/energy. | cp_materials; cp_energy; cp_water; cp_testing |
| dq_environment | all elementary rows | Identify substance, fossil/biogenic origin, receiving medium/subcompartment, particle size and release time; retain uncovered substances and method uncertainty. Noise/vibration uses real receiver location/frequency/time/instrument records; never convert arbitrarily to mass or claim zero from a missing identity. | cp_air; cp_water |
| dq_scope | whole dataset | Disclose separate manufacture, transport, construction, operation/maintenance and final demolition coverage/gaps. Historical guidance is not current law; supplied state and project specification need actual evidence. | module coverage register; actual specifications |
| dq_uuid | all UUID-bearing rows | Check public primary property and every applicability limitation individually, with official Chinese names. Unresolved identity remains review, never forced matching or publication readiness. | direct identity and supplier evidence |
| dq_assets | assets | Independently review actual manufacture shares and cumulative beneficiary basis; unknown lifecycle activity cannot establish manufacturing completeness. | cp_assets |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| v_complete | All required and actually applicable conditional processes, complete reference delivery, bilingual row_id/rule_id sequences, correct basis and protocols must be present. Missing actually applicable measured line/station geometry or testing information makes the dataset incomplete; require evidenced not_applicable for genuinely nonincluded entity attributes. | un-cpc3-2025 |
| v_boundary | Check supplied/site state, upstream/construction and pre/posthandover boundaries; prevent duplicate embedded materials, utilities, transport fuel, emissions and internal recycles. | ferc-construction-2017; ferc-wetland-2013 |
| v_identity | Every adopted identity must meet public substance, route, geography, voltage, primary property/unit and environmental compartment limits. Exact empty-UUID rows remain review; do not claim complete flow identity. | ferc-construction-2017 |
| v_tests | Check actual medium/state, test sections, results and repair/retest. Mill testing does not replace site acceptance; a passed test is not a PCR guarantee of no defects or regulatory approval. | phmsa-hydrotest |
| v_balance | Measured material/energy/water/waste and shared activities conserve totals; each asset cumulative manufacture share <=1. Unknown lifetime/activity/relationships remain disclosed review, not default-filled balances. | ferc-construction-2017 |
| v_emissions | Quantify only actual substance/compartment with applicable evidence. NO, NO2, NOx equivalents, particle fractions, fossil/biogenic carbon, liquid water/wastewater/resource water are not interchangeable; unsupported amounts remain unknown. | ferc-construction-2017 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground physical construction-delivery dataset |
| downstream_use | secondary_dataset; background_dataset after applicable scope/identity and independent review |
| allowed_use | Same-configured/interface/region/period/actual-route long-distance pipeline delivery modelling; stage-explicit downstream lifecycle extension |
| excluded_use | Generic per-kilometre emission factor; urban distribution mains; pipe manufacture; construction service; transport operation/whole-life result; automatic compliance/approval |
| required_metadata | All reference qualifiers; geography/time; as-built quantities/configuration; tests/acceptance; supply states; actual processes/equipment; factor/unit provenance; material/transport upstream links; manufacture shares; internal reuse and destinations |
| required_quality_disclosure | Candidate methodology review state; unresolved identities/additional rows; upstream-module coverage; measurement/factor/allocation uncertainty; excluded operation/maintenance/demolition and uncovered noise/ecology; dated source limitations |
| update_trigger | Actual material/fluid/bore/length/wall/station/method/supplier-voltage/geography/acceptance-specification/activity change, or reviewed new evidence/identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.280. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Entity/related station scope and urban-distribution exclusion; classification boundary only |
| ferc-construction-2017 | official_guidance | FERC, Guidance Manual for Environmental Report Preparation, Volume I, February 2017: §4.1.3.1 pp.4-28–4-32 (PDF58–62); §4.1.3.2/4.1.4 p.4-33 (PDF63); §4.2.2 pp.4-45–4-46 (PDF75–76); §4.2.2.4 pp.4-48–4-49 (PDF78–79); §4.9.1–4.9.2. https://www.ferc.gov/sites/default/files/2020-04/guidance-manual-volume-1.pdf | Gas-project processes, station construction/operation distinction, crossings, water and air/noise evidence needs; dated US scope, no universal amounts/current legal approval |
| ferc-upland-2013 | official_guidance | FERC, Upland Erosion Control, Revegetation, and Maintenance Plan, May 2013: III.E p.5 (PDF7), IV.B/IV.F pp.8–11 (PDF10–13), V pp.12–16 (PDF14–18). https://www.ferc.gov/sites/default/files/2020-04/upland-erosion-control-revegetation-maintenance-plan.pdf | Dated gas-project topsoil, residual management and restoration processes; no default timing/seeding/erosion values |
| ferc-wetland-2013 | official_guidance | FERC, Wetland and Waterbody Construction and Mitigation Procedures, May 2013, §VII pp.19–20 (PDF21–22), official GovInfo preserved copy. https://www.govinfo.gov/content/pkg/GOVPUB-E2-PURL-gpo83806/pdf/GOVPUB-E2-PURL-gpo83806.pdf | Verified original test-water intake/discharge pages; historical gas-project scope, no global distances/flow-rate limits; preserved copy is not proof of current policy |
| phmsa-hydrotest | official_guidance | PHMSA, Fact Sheet: Hydrostatic Pressure Testing, Overview and Hydrostatic Testing; displayed Date of Revision 12012011. https://primis.phmsa.dot.gov/stakeholder-comms/factsheets/fshydrostatictesting/ | Postconstruction/operating test distinction, medium, pressurising, repair/retest; historical gas/hazardous-liquid scope, no universal test pressure/duration or no-defect guarantee |
| saipem-subsea | handbook | Saipem, Subsea pipelines: offshore in deep waters, Deep water pipelines section, undated manufacturer page. https://www.saipem.com/en/solutions-energy-transition/offshore/subsea-pipelines | Existence of offshore oil/gas S-Lay/J-Lay routes; not every submarine method or fuel recipe, other actual methods need project evidence |
| nwpipe-steel-water-2019 | handbook | Northwest Pipe Company, Engineered Steel Water Pipe brochure, July 2019, PDF p.1 (unpaginated folded brochure), Suggested Specification of Steel Pipe for Water Transmission; joint/supply/inspection paragraphs. https://www.nwpipe.com/app/uploads/2020/08/NWP-Engineered-Steel-Water-Pipe-Brochure-July-2019.pdf | Historical manufacturer steel-water-pipe supply, joint, lining/coating and inspection states; actual water-project specifications independently verified, not every material/latest standard |
