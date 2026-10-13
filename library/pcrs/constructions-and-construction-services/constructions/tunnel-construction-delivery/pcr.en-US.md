---
pcr_id: pcr.constructions-and-construction-services.constructions.tunnel-construction-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Tunnel construction delivery

## 1. Scope and Applicability

Applies to physical highway, road and railway tunnels and related underground constructions for underground railway traffic. Excludes ordinary vehicular/pedestrian underpasses, underground rail lines as such, mining tunnels, water conduits, construction services and tunnel operation services. The reference is an actually defined completed asset, not a materials bundle or a construction-service transaction (`un-cpc`).

Retain actual cut-and-cover, mined/SEM, mechanical bored/shield, immersed and box-jacked routes, singly or combined. Ground conditions and accepted design determine applicability; no mandatory explosive, foam, grout, lining type or universal structural recipe. Underground stations/caverns, shafts, cross-passages and portals are included only as identified related construction in the same delivery. Separate road surfacing and rail track/electrification packages by agreed interfaces to avoid overlap with road/rail PCRs. Civil-method context comes from the historical FHWA manual; it is not current design or safety approval (`fhwa-tunnel`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.tunnel-construction-delivery |
| classification_refs | CPC 3.0 53222 — Tunnels |
| covered_products | Accepted physical transport tunnel entities and explicitly related underground railway constructions |
| excluded_products | Underpasses; rail lines; mining tunnels; aqueducts; services; standalone machinery/materials |
| representative_product | One specified and measured complete tunnel delivery unit |
| production_route | Actual project excavation/support/lining/installation route, including mixed-route interfaces |
| market_state | Completed and accepted asset at its declared site; not an assumed operational-service output |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | An enclosed road/rail transport passage and declared related underground structures |
| How much | One complete delivery unit with measured tunnel length, bore count, clear cross-sections, component extents and capacity configuration |
| How well | As-built geometry, ground/structural/waterproofing and installed-system specifications reconciled with actual acceptance records |
| How long or cycle | Actual construction start through acceptance; operation duration and service life are excluded unless separately evidenced and modelled |
| reference_flow_link | reference_tunnel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed tunnel construction delivery unit |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | site and coordinates; acceptance/contract ID and date; transport function; measured length and bore count; clear/excavated sections; ground and groundwater; excavation routes; lining/material state; portals/shafts/cross-passages/caverns; drainage/ventilation/fire/lighting/control system scope; road/rail interfaces; complete delivery and temporary-work restoration; boundary stages |

Here item is the same count unit as public Item(s); 件 is its Chinese display. Geometry qualifies the physical delivery and does not create a universal per-metre result. Product UUID remains unresolved; use this candidate only with that limitation disclosed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| delivery_count | reference product | Number of items | item | Use 1 item for one complete accepted declared tunnel entity; collect using cp_delivery. Every exchange uses the same delivery boundary. |
| geometry | reference product | Length; Area; Volume | m; m2; m3 | Collect measured as-built centreline lengths, sections and installed extents; preserve bore/route segmentation. Do not convert an asset count to mass or length without actual scope and measurement evidence. |
| numerator_units | all inventory rows | Actual selected reference property | row-specific unit | Keep mass, volume, length, count and energy distinct. Density, linear mass, concentration and heating value must come from actual matching batches and state/temperature; no nominal 1000 kg/m3 water density or generic concrete density. Preserve public flow reference properties. |
| energy_conversion | power_lv; power_mv | Net calorific value | MJ | 1 kWh = 3.6 MJ; preserve the original energy-property identity, not Mass. Diesel is separately measured in kg and fuel heat does not imply electricity output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared site and actual existing ground/structures before the recorded construction works; supplied materials/components cross at the stated site gate |
| starting_condition_role | user_defined_foreground_boundary |
| product_classification_scope | CPC 3.0 53222 |
| recursive_input_rule | Existing/reused tunnel parts require explicit inherited condition and prior burdens; do not recurse into another unbounded tunnel or treat an existing asset as burden-free |
| upstream_dataset_requirement | Match manufacture and delivery transport separately by material/component state, region, date and gate; do not add constituent burdens already in purchased segments/elements |
| disclosure | Site construction-to-acceptance foreground; disclose every added upstream, transport, treatment and downstream stage. Not complete cradle-to-gate or whole life by default |

| rule_id | rule | source_ids |
| --- | --- | --- |
| boundary_work | Include actual access/launch shafts, excavation and muck haul, ground improvement, support, lining, portals, dewatering, installation, testing, rework and temporary-work restoration attributable to delivery. Each actual work package needs its atomic inventory; examples below are not a universal exhaustive recipe. | fhwa-tunnel |
| boundary_stage | Separate purchased-material/equipment manufacture, external transport, site works, off-site treatment, later operation, actual maintenance/replacement, demolition and destination. Excluded/unmeasured stages retain coverage gaps; do not claim full-life results or avoided-burden credits. |  |
| boundary_interfaces | Record road/rail track and station interfaces from actual acceptance scope; related underground construction belongs here only when explicitly included. Public highway manual supports civil route context, not railway system design or regulatory compliance. | un-cpc; fhwa-tunnel |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cut_cover | Cut-and-cover excavation and support | conditional | Where actual top-down or bottom-up tunnel works | foreground | per declared reference flow |
| mined | Mined excavation and initial ground support | conditional | Where drill-and-blast or sequential/mechanical excavation | foreground | per declared reference flow |
| bored | Bored excavation, muck transfer and conditioning | conditional | Where TBM, EPB or slurry shield is actually used | foreground | per declared reference flow |
| immersed | Immersed trench preparation, towing, placement and joining | conditional | Where actual immersed-tube construction | foreground | per declared reference flow |
| jacked | Box jacking, excavation and joint completion | conditional | Where actual jacked-box tunnel construction | foreground | per declared reference flow |
| lining | Permanent structure, lining, waterproofing and portals | conditional | Actual specified structural and waterproofing work; no assumed universal lining | foreground | per declared reference flow |
| systems | Permanent drainage and specified installed systems | conditional | Actual delivery scope; record every specified component | foreground | per declared reference flow |
| site_operation | Cross-work-package energy, water, logistics, waste and releases | required | All actual site work including access, shafts, temporary works and restoration | foreground | per declared reference flow |
| acceptance | Inspection, testing, completion and physical delivery | required | All accepted tunnel deliveries | foreground | per declared reference flow |

Attribute shared site-operation exchanges to actual work packages using meters/logs; their central listing does not imply omission from excavation or lining. Immersed-element prefabrication outside the site is upstream; a project casting basin inside the boundary instead requires its measured constituent and fabrication process inventory. Mechanical shield work distinguishes excavation, face conditioning, slurry separation, muck transport, segment assembly and annular injection. Top-down and bottom-up work retain their actual sequence. Safety/geotechnical observation and acceptance records remain required context, with no invented design loads (`fhwa-tunnel`).

### Process: Cut-and-cover excavation and support (`cut_cover`)

#### Inputs

##### Product flows

###### Fabricated steel sheet pile for excavation support (`support_pile`)

Where actual cut-and-cover excavation uses sheet piles; distinguish retained piles from reusable support. Allocate reusable pile manufacture through the same-asset ledger; never charge full manufacture at each project.

- Selected flow: Fabricated steel sheet pile for excavation support
- Flow property / unit: Mass / kg
- Amount rule: Separate new supplied piles permanently incorporated or consumed from reusable or previously used piles. For the new-consumed portion use measured attributable gross receipts + opening stock - verified returns/transfers - closing reusable stock, retaining consumed losses, with cp_materials. For reusable or previously used piles use measured asset net mass multiplied by the evidenced dimensionless manufacturing share under the section 8 same-asset manufacturing calculation and cp_assets; returning the physical pile does not cancel its use share. Prior manufacture already assigned is never charged again, including if a previously used pile is finally retained or lost. Keep physical delivery/return/incorporation/loss movements separate and do not count the same pile in both branches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

###### Imported uncontaminated mineral soil for tunnel backfill (`backfill`)

Only imported soil actually used above/around the completed cut-and-cover structure; record moisture, compaction and provenance. Site soil reused internally is not an external input.

- Selected flow: Imported uncontaminated mineral soil for tunnel backfill
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Mined excavation and initial ground support (`mined`)

#### Inputs

##### Product flows

###### Emulsion Explosive (`explosive`)

Only drill-and-blast using sensitized ammonium-nitrate water-in-oil emulsion explosive; not ANFO or blasting-service identity. Separate actual detonator and fuse inputs by their specifications. Mechanical excavation does not require explosives.

- Selected flow: Emulsion Explosive `eb58ee82-ee46-4306-baef-51dfef1d1ccc`
- Flow property / unit: Mass / kg
- Amount rule: Record actual charged mass, returned stock, misfires and controlled disposal from blast records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blasting`

###### Finished steel rock bolt (`rock_bolt`)

Where the actual ground support uses steel rock bolts; record grade, profile, dimensions, embedded length and coating. Grout and resin are separate supplies.

- Selected flow: Finished steel rock bolt
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Fabricated steel tunnel support rib (`steel_rib`)

When installed for staged excavation; count and weigh the supplied configuration, distinguishing initial support from final lining reinforcement.

- Selected flow: Fabricated steel tunnel support rib
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Wet-mix shotcrete before spraying (`wet_shotcrete`)

Only actual wet-mix supply, with declared mix, fibres, strength specification and included additives. Record rebound and overspray separately; dry-mix route requires its separate actual constituent rows and measured water.

- Selected flow: Wet-mix shotcrete before spraying
- Flow property / unit: Volume / m3
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Bored excavation, muck transfer and conditioning (`bored`)

#### Inputs

##### Product flows

###### Bentonite powder for tunnel slurry (`bentonite`)

Only slurry-shield or ground-treatment use confirmed by the actual recipe; distinguish purchased powder from carrier water and internally recirculated slurry. EPB excavation does not automatically require bentonite.

- Selected flow: Bentonite powder for tunnel slurry
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Aqueous sodium alkyl ether sulfate soil-conditioning concentrate (`conditioning`)

Conditional on actual EPB conditioning with this chemically identified concentrate. Collect supplier composition, concentration and dilution; other surfactants/polymers need distinct atomic rows, without inventing a universal foam recipe.

- Selected flow: Aqueous sodium alkyl ether sulfate soil-conditioning concentrate
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Complete tunnel boring machine manufacturing share (`tbm_share`)

Where equipment manufacture is included: use the actual configured machine count multiplied by a dimensionless project share based on supported cumulative activity. Retain cross-project ledger and cumulative shares ≤1. Unknown lifetime activity keeps this contribution under review; no default service life.

- Selected flow: Complete tunnel boring machine manufacturing share
- Flow property / unit: Number of items / item
- Amount rule: Record attributed machine count and supported manufacturing share separately; disclose missing denominator rather than resetting manufacture per tunnel.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Immersed trench preparation, towing, placement and joining (`immersed`)

#### Inputs

##### Product flows

###### Prefabricated reinforced-concrete immersed tunnel element (`immersed_element`)

For concrete immersed tubes fabricated outside the foreground gate: record complete element dimensions, bulkhead/configuration and included components. Do not duplicate its embodied concrete/rebar; steel-shell tube routes require a separate actual shell element row.

- Selected flow: Prefabricated reinforced-concrete immersed tunnel element
- Flow property / unit: Number of items / item
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Rubber immersion-joint sealing gasket (`seal`)

Only supplied separately from the prefabricated element; record actual rubber formulation, profile, joint count and installed mass.

- Selected flow: Rubber immersion-joint sealing gasket
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Crushed granite foundation bedding aggregate (`bed_stone`)

Where this lithology is actually placed in the prepared trench/foundation; state grading, moisture, bed geometry and protective fill distinction. Other bedding materials need separate rows.

- Selected flow: Crushed granite foundation bedding aggregate
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Dredged mineral sediment sent for disposal (`dredged_sediment`)

Only trench sediment leaving as waste; record sampling/contamination status, moisture and receiving site. In-site moved or sold reusable sediment is not this disposal flow.

- Selected flow: Dredged mineral sediment sent for disposal
- Flow property / unit: Mass / kg
- Amount rule: Use dispatch weighbridge quantities and reconcile dredging, reuse, stock and disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

##### Elementary flows

### Process: Box jacking, excavation and joint completion (`jacked`)

#### Inputs

##### Product flows

###### Prefabricated reinforced-concrete jacked tunnel box (`jacked_box`)

Only jacked-box tunnel construction within CPC tunnel scope, not ordinary vehicular/pedestrian underpass. Record box geometry, joining, jacking supports, lubrication and included components independently.

- Selected flow: Prefabricated reinforced-concrete jacked tunnel box
- Flow property / unit: Number of items / item
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Permanent structure, lining, waterproofing and portals (`lining`)

#### Inputs

##### Product flows

###### Ready-mixed concrete before tunnel placement (`concrete`)

For site-cast lining, invert, portals, cut-and-cover structure or related underground works: collect grade, recipe, fresh state and included admixtures. Installed concrete and prefabricated-component identities cannot substitute for delivered fresh mix. Site mixing must replace the mix row with separate actual ingredients and mixing energy.

- Selected flow: Ready-mixed concrete before tunnel placement
- Flow property / unit: Volume / m3
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Finished reinforcing steel bar for tunnel concrete (`rebar`)

Record actual alloy, grade, straight/coil/cut/bent supply, mesh distinction and installed schedule; steel inside purchased segments or elements is not added again.

- Selected flow: Finished reinforcing steel bar for tunnel concrete
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Precast reinforced-concrete tunnel lining segment (`segment`)

For segmental bored-tunnel lining; record geometry, ring assembly, reinforcement, gaskets and bolts included in supply. Separate site assembly energy, annular grout and only separately supplied components.

- Selected flow: Precast reinforced-concrete tunnel lining segment
- Flow property / unit: Number of items / item
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Cementitious tunnel annulus grout before injection (`grout`)

Only actual injected cementitious annulus grout; record recipe, concentration, injected volume and returned slurry. Rock-bolt anchoring grout and ground treatment differ and require separate rows when used.

- Selected flow: Cementitious tunnel annulus grout before injection
- Flow property / unit: Volume / m3
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Finished PVC tunnel waterproofing membrane (`membrane`)

Where actual lining design uses PVC sheet; record thickness, reinforcement, installed area and supplier mass per area. Other polymers are different rows; overlap and offcuts are measured, not a default loss factor.

- Selected flow: Finished PVC tunnel waterproofing membrane
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Permanent drainage and specified installed systems (`systems`)

#### Inputs

##### Product flows

###### Perforated HDPE tunnel drainage pipe (`drainpipe`)

Only where actual permanent drainage uses perforated HDPE pipe; record bore, wall, length, fittings and mass per length. Other drainage pipe materials require separate rows.

- Selected flow: Perforated HDPE tunnel drainage pipe
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Complete tunnel jet ventilation fan (`fan`)

Where specified for the accepted asset; record model, thrust, power, control and installed count. Construction ventilation consumption is separate from installed equipment and later operation.

- Selected flow: Complete tunnel jet ventilation fan
- Flow property / unit: Number of items / item
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Complete tunnel drainage pump (`pump`)

Only installed permanent pump; record duty, head, flow rate and actual configuration. Temporary pumping fuel/electricity belongs to site operation. Public mass-based generic pump does not imply a count-to-mass conversion.

- Selected flow: Complete tunnel drainage pump
- Flow property / unit: Number of items / item
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Low-voltage cable (`cable`)

Only actual CN-supplied GB/T 12706.1-2020 low-voltage cable matching the public product specification. Preserve Length and metres; collect conductor, section, insulation, voltage and cut loss. Other origin/specification cables need another identity without restricting tunnel geography.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Complete LED tunnel luminaire (`light`)

Conditional on installed LED lighting; record model, power, housing and controls included. Other luminaires, fire equipment and controls require individually specified rows in the actual project inventory.

- Selected flow: Complete LED tunnel luminaire
- Flow property / unit: Number of items / item
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Cross-work-package energy, water, logistics, waste and releases (`site_operation`)

#### Inputs

##### Product flows

###### Diesel fuel (`diesel`)

For actual diesel-fired excavation, haulage, generator, crane, tow or construction equipment inside the foreground boundary. Public identity leaves fuel grade/refinery/provider unspecified; dataset must collect grade, blend and supply. Fuel production burden and combustion are separate.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Use tank/delivery/return balance or calibrated equipment consumption; volume-to-mass uses actual batch density and temperature, never a default.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Alternating current (`power_lv`)

Only actual CN user-end supply at <1 kV; separate meter and provider. This row is not universal electricity, plant generation or a different voltage. Other actual supplies require their own identity. Includes attributable pumping, excavation, ventilation, assembly and acceptance tests without double-counting submeter totals.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter actual attributable consumption; 1 kWh = 3.6 MJ; retain the public Net calorific value property and energy unit group.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Alternating current (`power_mv`)

Only actual CN user-end supply at 1–35 kV; separate meter and provider. This row is not universal electricity, plant generation or a different voltage. Other actual supplies require their own identity. Includes attributable pumping, excavation, ventilation, assembly and acceptance tests without double-counting submeter totals.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Meter actual attributable consumption; 1 kWh = 3.6 MJ; retain the public Net calorific value property and energy unit group.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Treated mains water supplied to tunnel construction site (`mains_water`)

Actual drilling, concrete curing, washing, mixing or dust suppression supply; record location, provider and delivery gate. Internal reuse is not fresh input.

- Selected flow: Treated mains water supplied to tunnel construction site
- Flow property / unit: Volume / m3
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

###### lubricating oil (`pao`)

Only actual fully synthetic PAO (poly alpha olefin) lubricant supply; generic comment does not override this route. Mineral oil, grease and different formulations need separate identities.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Record actual attributable deliveries less returns and stock changes; separate incorporation from loss.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

##### Waste flows

##### Elementary flows

###### ground water (`groundwater`)

Only actual fresh-groundwater withdrawal from the environment, public resource-from-water identity; collect aquifer, salinity, extraction country, pumping purpose and abstraction volume. Country-specific scarcity characterization uses the actual process country, never an assumed scarcity class. Dewatering, purchased water and discharged water are separately balanced; do not label water-resource abstraction as wastewater.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume / m3
- Amount rule: Measure actual abstraction volume; keep rainwater, natural ingress and recirculation distinct.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

#### Outputs

##### Product flows

##### Waste flows

###### Uncontaminated excavated mineral soil sent for disposal (`soil_waste`)

Only actual soil waste crossing the site gate. Determine composition, moisture/contamination, legal waste/product status and receiver. Do not merge with other excavated streams or discharges.

- Selected flow: Uncontaminated excavated mineral soil sent for disposal
- Flow property / unit: Mass / kg
- Amount rule: Use actual dispatched quantities and destination records; reconcile with measured supply, incorporation, reuse and stocks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Excavated rock sent for disposal (`rock_waste`)

Only actual rock waste crossing the site gate. Determine composition, moisture/contamination, legal waste/product status and receiver. Do not merge with other excavated streams or discharges.

- Selected flow: Excavated rock sent for disposal
- Flow property / unit: Mass / kg
- Amount rule: Use actual dispatched quantities and destination records; reconcile with measured supply, incorporation, reuse and stocks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Spent bentonite tunnel excavation slurry sent for treatment (`slurry_waste`)

Only actual bentonite slurry waste crossing the site gate. Determine composition, moisture/contamination, legal waste/product status and receiver. Do not merge with other excavated streams or discharges.

- Selected flow: Spent bentonite tunnel excavation slurry sent for treatment
- Flow property / unit: Mass / kg
- Amount rule: Use actual dispatched quantities and destination records; reconcile with measured supply, incorporation, reuse and stocks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Hardened concrete construction offcut (`concrete_waste`)

Only actual hardened concrete waste crossing the site gate. Determine composition, moisture/contamination, legal waste/product status and receiver. Do not merge with other excavated streams or discharges.

- Selected flow: Hardened concrete construction offcut
- Flow property / unit: Mass / kg
- Amount rule: Use actual dispatched quantities and destination records; reconcile with measured supply, incorporation, reuse and stocks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Contained concrete washout liquid sent for treatment (`washout`)

Only actual concrete washout liquid waste crossing the site gate. Determine composition, moisture/contamination, legal waste/product status and receiver. Do not merge with other excavated streams or discharges.

- Selected flow: Contained concrete washout liquid sent for treatment
- Flow property / unit: Mass / kg
- Amount rule: Use actual dispatched quantities and destination records; reconcile with measured supply, incorporation, reuse and stocks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Spent PAO lubricating oil sent for treatment (`oil_waste`)

Only actual spent pao oil waste crossing the site gate. Determine composition, moisture/contamination, legal waste/product status and receiver. Do not merge with other excavated streams or discharges.

- Selected flow: Spent PAO lubricating oil sent for treatment
- Flow property / unit: Mass / kg
- Amount rule: Use actual dispatched quantities and destination records; reconcile with measured supply, incorporation, reuse and stocks.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

##### Elementary flows

###### Construction drainage water discharged to river (`water_return`)

Only actual release to the receiving freshwater river; record treatment and actual composition, suspended solids and dissolved constituents as separate measured rows. A contained treatment-bound waste is not this release.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measure actual discharge, reconcile ingress/abstraction/reuse and water retained or exported.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

###### carbon dioxide (fossil) (`co2`)

Conditional on fossil-fuel combustion. Immediate emission to air, unspecified subcompartment only where finer receptor compartment is unavailable and disclosed; use a more specific public identity when location supports it. Underground workplace concentration is not automatically an external emission: resolve tunnel ventilation, portal release and captured fractions. Do not infer mandatory emission or species from fuel alone.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use representative site measurement or traceable equipment/process model with actual activity, species, control efficiency and source uncertainty; never invent a factor or split total NOx without speciation evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`

###### nitrogen monoxide (`no`)

Conditional on measured/modelled NO from actual combustion or blasting. Immediate emission to air, unspecified subcompartment only where finer receptor compartment is unavailable and disclosed; use a more specific public identity when location supports it. Underground workplace concentration is not automatically an external emission: resolve tunnel ventilation, portal release and captured fractions. Do not infer mandatory emission or species from fuel alone.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use representative site measurement or traceable equipment/process model with actual activity, species, control efficiency and source uncertainty; never invent a factor or split total NOx without speciation evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`

###### nitrogen dioxide (`no2`)

Conditional on measured/modelled NO₂ from actual combustion or blasting. Immediate emission to air, unspecified subcompartment only where finer receptor compartment is unavailable and disclosed; use a more specific public identity when location supports it. Underground workplace concentration is not automatically an external emission: resolve tunnel ventilation, portal release and captured fractions. Do not infer mandatory emission or species from fuel alone.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use representative site measurement or traceable equipment/process model with actual activity, species, control efficiency and source uncertainty; never invent a factor or split total NOx without speciation evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`

###### particles (PM10) (`pm10`)

Conditional on actual measured/modelled PM10 from excavation, transfer or exhaust. Immediate emission to air, unspecified subcompartment only where finer receptor compartment is unavailable and disclosed; use a more specific public identity when location supports it. Underground workplace concentration is not automatically an external emission: resolve tunnel ventilation, portal release and captured fractions. Do not infer mandatory emission or species from fuel alone.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use representative site measurement or traceable equipment/process model with actual activity, species, control efficiency and source uncertainty; never invent a factor or split total NOx without speciation evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`

### Process: Inspection, testing, completion and physical delivery (`acceptance`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed tunnel construction delivery unit (`reference_tunnel`)

One complete declared and accepted physical tunnel entity, with actual measured geometry and component schedule; testing, rework and temporary-work removal within the agreed delivery boundary are included. No hypothetical asset mass or service lifetime.

- Selected flow: Completed tunnel construction delivery unit
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | rule | source_ids |
| --- | --- | --- |
| allocation_subdivide | First subdivide records by work package, bore, route and delivery. Attribute shared electricity, haul and pumping by causal metered energy, measured transported mass-distance or actual pumping activity. Collect the real activity and all beneficiaries; no allocation by arbitrary project cost or default tunnel length. Retain formula, physical units and uncertainty. |  |
| allocation_reuse | For machines and reusable piles/formwork, use supported cumulative activity or reuse history of the same asset to assign a dimensionless share of manufacturing burdens. Sum of prior, current and future assigned shares must not exceed one; never reset the full burden per project. Actual machine mass/count, net configuration and ledger are collected separately; missing lifespan/activity denominator stays review, not assumed zero. Keep maintenance and consumption separate. |  |
| allocation_excavation | Reconcile excavation volume/mass, internal reuse, off-site reuse/sale, disposal and stock by material and moisture. Excavated rock/soil is not automatically a co-product or a credit. If real co-production remains after subdivision, justify a physical causal allocation with receiving-product evidence; economic fallback needs actual values and sensitivity review. No default avoided landfill or virgin aggregate credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | acceptance | accepted physical tunnel | foreground_record | contract/site; as-built length, bores, sections, routes, quantities, systems; inspection and acceptance; start/end dates; interfaces | Reconcile signed completion/acceptance, measured as-built survey and component schedule for the same complete delivery; no assumed geometry or lifespan | item; m; m2; m3 | each task, batch or event and delivery reconciliation | actual construction start through acceptance including rework | same declared site/delivery boundary | per declared reference flow | calibration, raw tickets, as-built survey, certificates and scope reconciliation |
| cp_materials | all foreground processes | each separate supplied material/component | foreground_record | row_id; supply identity/state/composition; quantity; batch; concentration; grade; included components; receipt/return/stock; unit; density/linear mass where used | Use calibrated delivery measurements and supplier certificates; reconcile installed quantities and losses; each actual chemical/component is independent, including additional actual site-mixed constituents | kg; m3; item; m | each task, batch or event and delivery reconciliation | actual construction start through acceptance including rework | same declared site/delivery boundary | per declared reference flow | calibration, raw tickets, as-built survey, certificates and scope reconciliation |
| cp_blasting | mined | emulsion explosive | foreground_record | charge kg; blast ID; holes; explosive specification; returns; misfire; detonator/fuse specification; ventilation and fume control | Reconcile actual authorized blast logs and stock balance; no presumed charge per metre or universal emission factor | kg | each task, batch or event and delivery reconciliation | actual construction start through acceptance including rework | same declared site/delivery boundary | per declared reference flow | calibration, raw tickets, as-built survey, certificates and scope reconciliation |
| cp_energy | site_operation | diesel; electricity and actual additional carriers | foreground_record | row_id; equipment/task; tank/meter ID; energy/fuel; region; voltage; provider; dates; returns/stocks; activity; density/heating value basis | Use calibrated meter and fuel records per task, including standby, ventilation, slurry separation, towing and tests; reconcile submeter totals without double counting | kg; MJ | each task, batch or event and delivery reconciliation | actual construction start through acceptance including rework | same declared site/delivery boundary | per declared reference flow | calibration, raw tickets, as-built survey, certificates and scope reconciliation |
| cp_water | site_operation | supply; abstraction; drainage; contained liquid | foreground_record | row_id; origin; aquifer/recipient; salinity; meter; volume; reuse; ingress/rain; treatment; sampling; concentration; exports | Meter supply, abstraction and discharge separately; use actual representative sampling for released species and separate contained waste; do not assume all ingress is resource consumption or clean drainage | m3; kg | each task, batch or event and delivery reconciliation | actual construction start through acceptance including rework | same declared site/delivery boundary | per declared reference flow | calibration, raw tickets, as-built survey, certificates and scope reconciliation |
| cp_waste | site_operation; immersed | each separate physical waste stream | foreground_record | row_id; process; classification; composition; moisture; calibrated weight; destination; receiver; internal reuse; stock | Reconcile weighbridge/receiver evidence per stream; distinguish contaminated soil, sediment, hardened concrete and liquid slurry; no mixed waste label substitutes for actual exchanges | kg | each task, batch or event and delivery reconciliation | actual construction start through acceptance including rework | same declared site/delivery boundary | per declared reference flow | calibration, raw tickets, as-built survey, certificates and scope reconciliation |
| cp_emissions | site_operation | each actual elementary substance | foreground_record | row_id; species/CAS; fossil/biogenic; medium/submedium; timing; concentration; flow/duration; actual activity; control; model/factor source; uncertainty | Use representative actual measurements or traceable site/equipment-specific models; distinguish portal/environment release from indoor exposure, captured fractions and total NOx; retain missing scope | kg | each task, batch or event and delivery reconciliation | actual construction start through acceptance including rework | same declared site/delivery boundary | per declared reference flow | calibration, raw tickets, as-built survey, certificates and scope reconciliation |
| cp_assets | all foreground processes | reusable machine/component manufacturing shares | foreground_record | asset ID; actual count/net mass and configuration; manufacturing scope; project activity; supported cumulative activity/use history; prior/current shares; remaining shares; repair ; support_pile new/previously-used status; permanent/consumed versus reusable portion; physical receipts/returns/closing stock/incorporation/loss; prior assigned manufacture | Reconcile same-asset cross-project ledger and supplier records; audit cumulative shares ≤1; unknown denominator or physical conversion requires review without resetting full manufacture  For support_pile, reconcile new-consumed material through cp_materials separately from reusable/previously-used asset mass times its conserved share; a returned reusable pile retains this project manufacturing share. A formerly used pile retained or lost may receive only a justified remaining share, never fresh full manufacture. Prevent duplicate attribution between branches and retain physical movements separately. | item; kg; h | each task, batch or event and delivery reconciliation | actual construction start through acceptance including rework | same declared site/delivery boundary | per declared reference flow | calibration, raw tickets, as-built survey, certificates and scope reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| delivery_basis | all inventory rows | Aggregate each atomic exchange attributable to the same accepted delivery; report per declared reference flow, preserving each numerator unit. No arbitrary division by mass, kilometre or lifetime. | cp_delivery; cp_materials; cp_blasting; cp_energy; cp_water; cp_waste; cp_emissions | exchange quantity per declared reference flow |  |
| complete_output | reference_tunnel | One complete accepted declared entity = 1 item; incomplete/rejected work is not accepted output, but its attributable burden is retained. | cp_delivery | reference_tunnel |  |
| physical_conversion | all inventory rows | Use section 4 with actual matching-batch physical records; retain source quantity, units, measured density/linear mass/concentration and temperature, formula and uncertainty. Unsupported relationships remain review. | cp_materials; cp_energy; cp_water; cp_emissions | traceable numerator quantities |  |
| asset_attribution | support_pile; tbm_share | Apply section 7 same-asset manufacturing shares to tbm_share and the reusable or previously used portion of support_pile: measured asset count or net mass × evidenced dimensionless share based on supported cumulative activity. Conserve cumulative assigned manufacture ≤1 across all projects/periods; physical return does not set the share to zero, and later retention/loss never resets full manufacture. The new permanently incorporated/consumed support_pile portion follows its separate cp_materials stock balance, not this asset-use formula. Do not replace an unknown denominator or prior ledger with a default. | cp_assets | attributed manufacturing contribution and limitations |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Verify substance, composition, route, geography, voltage, gate, physical state, compartment and original reference property/unit; UUID name alone is insufficient. | supplier certificates and public identity originals |
| coverage | all foreground processes | Reconcile every actual work package and installed component, temporary construction and removal, energy, water, loss, waste and release. Add actual atomic rows not in these conditional examples; distinguish absent, excluded and unmeasured. | bill of quantities and gap ledger |
| time_ground | all inventory rows | Match actual construction dates, ground/hydrogeology and site supply; historical manual is qualitative process context only, not a current statutory specification or generic factor. | ground records, dates and certificates |
| noise | site_operation | Collect actual construction noise/vibration monitoring, location and duration separately. dB is not an additive physical mass or sound-energy exchange; without supported property relationship disclose non-LCI evidence and coverage. | environmental monitoring and site records |
| uncertainty | all inventory rows | Keep measurement, conversion, allocation and background-link uncertainty; no missing-data-to-zero substitution. Retain unresolved identities and unsupported shares for independent review. | calibration, sensitivity and evidence ledger |

## 9. Validation Rules

| rule_id | rule |
| --- | --- |
| validate_reference | Reference product name equals reference_tunnel selected flow; 1 item represents the same complete accepted delivery in cp_delivery and all inventory bases; geometry and system interfaces are explicit. |
| validate_routes | Actual construction records determine all route conditions; do not replace tunnel scope with a smaller material or easier geography to match identity. Ground improvement, dry/wet spraying, lining and jacking differences retain complete actual inventories. |
| validate_balance | Reconcile excavation, reuse, import, disposal, moisture and stock; supplied materials, installed quantities and losses; pump water balance and energy meters; same-asset shares across projects ≤1. |
| validate_emission | NO, NO₂ and N₂O, PM10 and larger particles, fossil and biogenic carbon, environmental abstraction and waste/discharge are distinct. Verify actual release and medium; no presumed emission factors or indoor-to-environment conversion. |
| validate_completeness | Missing identity, measurement, tasks, unsupported conversions/shares and separately excluded lifecycle stages remain explicit gaps. Mechanical check success does not approve methodology or engineering acceptance. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific tunnel construction-to-acceptance foreground data package |
| downstream_use | Explicitly configured tunnel asset comparison or linkage to separately matched upstream/downstream datasets |
| allowed_use | Declared physical delivery with measured geometry, actual route and transparent stage coverage |
| excluded_use | Default whole-life/cradle-to-gate claim; operational transport service; universal per-km value; default lifespan, mass, recipe or compliance approval |
| required_metadata | PCR/version; qualifiers; acceptance/as-built scope; route/ground; start/end; quantities; source units; allocation; supply gates; installed and excluded systems |
| required_quality_disclosure | Missing identity/measurements/tasks; background manufacture/transport/treatment coverage; real equipment shares; uncertainty; actual maintenance/demolition coverage; scientific review pending |
| update_trigger | Design, route, ground, geometry, delivery interfaces, material state, supply, installed systems, construction/testing or lifecycle coverage change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.279. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Transport tunnel inclusion and explicit adjacent-class exclusions; classification only, no quantities |
| fhwa-tunnel | handbook | FHWA, Technical Manual for Design and Construction of Road Tunnels — Civil Elements, FHWA-NHI-09-010, March 2009. Ch.1 p.1-1 (PDF35), Ch.5 p.5-1 (PDF121), Ch.7 p.7-1 (PDF211), Ch.10 p.10-1 (PDF317), Ch.11 p.11-1 (PDF349). https://www.fhwa.dot.gov/bridge/tunnel/pubs/nhi09010/tunnel_manual.pdf | Historical qualitative civil-route, excavation support, lining and immersed-element process context; no adopted design loads, quantities, service life or emission factors; actual project specifications control applicability |
