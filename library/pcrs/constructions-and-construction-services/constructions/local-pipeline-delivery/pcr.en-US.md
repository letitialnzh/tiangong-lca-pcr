---
pcr_id: pcr.constructions-and-construction-services.constructions.local-pipeline-delivery
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Local pipeline construction delivery

## 1. Scope and Applicability

This PCR concerns the actual installed local gas pipelines, local water and sewer mains, and local hot-water and steam pipelines, delivered as complete physical civil entities (un-cpc3-2025, printed/PDF p.280). Local water/sewer mains are distinct from treatment plants (p.281). The method is needed for medium-specific joints, network interfaces, chambers, thermal protection and actual acceptance construction; classification alone does not establish identity. Manufactured pipe methods can supply upstream evidence, but do not replace this installed entity. Long-distance transmission, nonpipeline aqueducts, treatment/generating plants, internal building plumbing and separately purchased construction services are outside this category.

Use the entire owner-defined main/network between surveyed interfaces, including actually delivered junctions, chambers, valves, supports, branch connections, condensate return where applicable and contracted reinstatement. An independently accepted reach is permissible only when its physical scope and complete interfaces are documented; never omit inconvenient crossings or thermal/acceptance work by choosing a smaller material route. A data package for a genuinely partial delivery remains explicitly incomplete.

The foreground is construction from recorded preconstruction site and supplied-material states through actual inspection, tests, corrections and acceptance. Supplier manufacture is separately linked upstream; ordinary conveyance, heating/pumping after handover, maintenance, replacement and eventual dismantling/fates are separate stages. This is neither automatically complete cradle-to-gate nor a full-life method. No default lifetime, capacity, pipe mass per metre, mix ratio, loss or energy rate is supplied. HK mainlaying/civil specifications and the US heat guide/report inform their stated routes, not global compliance or default numeric requirements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.local-pipeline-delivery |
| classification_refs | CPC 3.0 53251; scope context only |
| covered_products | Complete accepted local gas pipelines; water/sewer mains; hot-water/steam pipelines with integral declared works |
| excluded_products | Long-distance lines; aqueducts without pipelines; treatment/generating plants; building plumbing; manufactured pipe/components; services |
| representative_product | Accepted complete local pipeline delivery unit |
| production_route | Actual logistics → surveyed site preparation → open-cut/trenchless installation and route-specific joints/chambers → thermal protection where applicable → backfill/restoration → medium-specific testing/rework → acceptance; retain actual ordering and interleaving |
| market_state | Installed complete civil entity at its declared site, actually accepted for the specified duty and interface configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver the complete local main/network passage for its specified gas, water, sewage, hot-water or steam duty and actual integral connections |
| How much | One complete accepted delivery unit. Survey centreline length of each carrier/branch/return separately, bore/wall, burial/gradient, chamber dimensions, supports and restored area. Record actual hydraulic/thermal capacity, pressure and temperature conditions; lengths/areas/capacities qualify this same entity, not interchangeable reference denominators. |
| How well | Actual certified material/joint/protection configuration, applicable project acceptance criteria and signed inspection/test results; gravity sewer gradient and leakage, pressure-main duty, gas compatibility, and heat expansion/insulation are route-specific |
| How long or cycle | One actual construction-to-acceptance cycle including rework/retest; service duration for later lifecycle stages requires separate evidence |
| reference_flow_link | `finished_pipeline` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete local pipeline delivery unit |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | asset/site/country; main/network interfaces and integral-work scope; conveyed medium; actual as-built carrier/branch/return lengths and bore/wall/burial/gradient; chamber/support/restoration geometry; actual capacity/duty/pressure/temperature; material grade/lining/coating/joint/insulation/casing and factory-assembly boundary; route and preconstruction/retained state; supplier interfaces; acceptance specification/date/tests/corrections; boundary extensions and unresolved coverage |

`item` is the display alias of the public Item(s) count unit for this one complete configured civil entity. It does not imply equal lengths, capacities or performance across entities. Mass, monetary cost and an arbitrary kilometre are not substitutes; no entire-network mass is invented.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items | item | Output is 1 item of the same complete accepted configuration, established through cp_delivery. All inventory and protocol aggregation is per declared reference flow. |
| preserve_physical_units | inventory rows with native Mass, Volume or Length properties | Mass; Volume; Length | kg; m3; m | Preserve the actual primary property. Weigh net quantities; survey actual lengths; meter liquid/gas volume at declared conditions. Convert using same-lot measured density/linear mass and calibration evidence only; do not rewrite public properties or use screening density. Electricity follows electricity_basis with Net calorific value/MJ and the measured kWh-to-MJ conversion. The complete accepted network reference output follows Number of items/item. These energy and counted output exchanges are excluded from this material-unit rule and retain their own numerator and reference roles. |
| electricity_basis | cn_lv_power; cn_mv_power | Net calorific value | MJ | Keep the verified energy property/group; measured kWh × 3.6 = MJ. Separate user-voltage interfaces and exclude double counting of transformations/generators. |
| asset_share | shoring_steel; excavator_share; wood_pallet | Mass | kg | Measured same-configuration asset mass multiplied by a supported dimensionless manufacture share is an attributable input, not reference-product mass. Across all beneficiaries/reuses cumulative shares must be <=1; unknown life/activity requires review. |
| chemical_fraction | hypochlorite_solution; no_air; no2_air; pm25_air; pm_coarse_air | Mass | kg | Keep solution mass separate from active chlorine; keep molecular species and nonoverlapping particle fractions separate. Total NOx, total dust or a single concentration cannot establish these exchanges without a supported conversion and actual flow/time. |

| Property | UUID | Unit group | Reference unit |
| --- | --- | --- | --- |
| Mass | 93a60a56-a3c8-11da-a746-0800200b9a66 | 93a60a57-a4c8-11da-a746-0800200c9a66 | kg |
| Volume | 93a60a56-a3c8-22da-a746-0800200c9a66 | 93a60a57-a3c8-12da-a746-0800200c9a66 | m3 |
| Length | 838aaa23-0117-11db-92e3-0800200c9a66 | 838aaa22-0117-11db-92e3-0800200c9a66 | m |
| Net calorific value | 93a60a56-a3c8-11da-a746-0800200c9a66 | 93a60a57-a3c8-11da-a746-0800200c9a66 | MJ |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed existing site/retained network state and identified supplier-gate material/assembly interfaces before the construction cycle |
| starting_condition_role | foreground_start |
| product_classification_scope | Actual installed local gas/water/sewer/hot-water/steam pipelines with integral declared construction, CPC3.0 53251 as scope context |
| recursive_input_rule | A pre-existing or purchased complete local-pipeline entity is a separately identified retained/input asset with provenance and interface; do not recursively regenerate all earlier construction. New measured work remains distinct and may not re-charge retained manufacture. |
| upstream_dataset_requirement | Link route/geography/year-compatible material/component manufacture, supply energy, actual transport and treatment datasets; disclose unavailable links and included boundaries. Site assembly and field tests stay foreground. |
| disclosure | State supplier interfaces, actual construction/acceptance limits, retained assets, excluded operation/end-of-life and all additional included stages. The site-only inventory is not complete upstream or full life. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| b_integral | Include actual integral main/branch connections, chambers, support/thermal/return works, testing/rework and restoration to the declared acceptance interface; do not turn the entity into a pipe-manufacturing or service record. | `un-cpc3-2025` |
| b_supplied | Document whether inputs are bare pipe, lined pipe, complete preinsulated assembly, precast chamber or individual products. Embedded materials are counted once; unresolved supplier boundaries prevent completeness. | `wsd-mainlaying-2023`; `ufgs-heat-2024` |
| b_stage | Measure construction and actual pre-handover tests separately from later conveyed product, pumping/heating, maintenance/replacement, demolition and disposal. A complete-life claim requires separately evidenced stages and duration. |  |
| b_water | Separate purchased water, actual natural withdrawal, liquid waste to treatment, recovered external condensate and final direct receiver release. Internal recirculation is not repeated withdrawal or external output. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| logistics | Construction logistics | required | Actual material/plant deliveries and exported waste trips within the declared construction account; preserve supplier transport interfaces. | foreground_construction | per declared reference flow |
| earthworks | Site preparation, excavation and bedding | required | Always assess site/retained-asset survey; apply actual open-cut trenches or trenchless pits, shoring and dewatering only where present. | foreground_construction | per declared reference flow |
| pipe_assembly | Main installation, joints and integral chambers | required | Install the actual declared gas/water/sewer main with route-specific materials and components; for a heat-only unit its carrier installation is in heat_protection. | foreground_construction | per declared reference flow |
| trenchless | Trenchless crossing and annular filling | conditional | Actual jacking, directional drilling or other evidenced non-open-cut method; record drilling/pit/spoil/water route without assuming one method. | foreground_construction | per declared reference flow |
| heat_protection | Hot-water/steam carrier, return, insulation and support installation | conditional | Actual local hot-water or steam system; retain chosen certified system, actual condensate-return scope and factory-vs-field assembly boundary. | foreground_construction | per declared reference flow |
| restoration | Backfill, compaction and surface reinstatement | required | Actual disturbed site and contracted surface restoration through acceptance; internal reusable soil stays in the balance. | foreground_construction | per declared reference flow |
| commissioning | Inspection, medium-specific testing and acceptance handover | required | Actual complete delivery interfaces and applicable inspection/test/repair/retest records; medium and criteria follow the real project specification. | foreground_construction | per declared reference flow |
| construction_support | Operation-resolved construction utilities, plant and releases | required | Accounts record actual operation/task meters and releases across the site processes; utility rows do not imply every fuel or emission occurs. | foreground_construction | per declared reference flow |

The stages are physically operation-resolved: survey/utility location → actual surface removal and excavation/pits/shoring/dewatering → bedding/pipe lowering → actual material-specific cutting, mechanical jointing, steel welding, PE fusion or specified solvent bonding → integral chamber/thrust/support/heat-protection works → interleaved inspection, backfill/compaction, testing/corrections → surface reinstatement and signed handover. Record the actual order; testing may precede final backfill. Site_support quantities retain the operation_id, equipment and meter and are allocated once to these actual stages. No card makes its flow mandatory: document evidenced absence for inapplicable routes, and add each actual unlisted chemical/component/waste/release as a separate atomic row before calling the data package complete. Marine transmission, plant treatment and building service routes are not used to fill local-main evidence gaps.

### Process: Construction logistics (`logistics`)

#### Inputs

##### Product flows

###### Diesel fuel (`haul_diesel`)

Only actual diesel consumed on recorded construction delivery/waste-haul trips. This is a mass-based foreground fuel identity with grade, formulation, refinery and provider unspecified; retain actual supplier, fossil fraction and route separately. A transport service including fuel/emissions replaces this account rather than adding to it.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_logistics`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Site preparation, excavation and bedding (`earthworks`)

#### Inputs

##### Product flows

###### Reusable steel sheet-pile shoring (`shoring_steel`)

When actual trench/pit shoring uses steel sheet piles. Record actual installation/removal energy separately; the input is the supported manufacture share of the same measured steel component, with cumulative shares conserved across all projects.

- Selected flow: Reusable steel sheet-pile shoring
- Flow property / unit: Mass / kg
- Amount rule: Measured configured net asset mass multiplied by its supported dimensionless manufacture share, with conservation ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

###### sand 0/2 (`bedding_sand`)

Only actual undried natural quarry sand of 0/2 grading supplied at plant for the specified bedding. Record moisture and grading certificate; no universal bedding thickness or kg/m is supplied. Other grades need their own atomic row and identity.

- Selected flow: sand 0/2 `4f1a182d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `cedd-civil-2026`; `ufgs-heat-2024`

###### crushed stone 16/32 (`bedding_stone`)

Only the actually specified 16/32 crushed-stone fraction for bedding or drainage. This is not a generic granular backfill, sand or concrete aggregate selector; other actual fractions are separate rows.

- Selected flow: crushed stone 16/32 `4f197bee-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `cedd-civil-2026`

##### Waste flows

##### Elementary flows

###### Fresh groundwater withdrawn from the natural groundwater resource (`groundwater_intake`)

Conditional actual trench/pit dewatering or direct site abstraction from fresh groundwater. Identify aquifer, salinity, location and external intake meter. Purchased treated water is a product input; contaminated groundwater is not silently mapped to fresh water.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

#### Outputs

##### Product flows

##### Waste flows

###### Uncontaminated excavated mineral soil for off-site disposal (`soil_export`)

Record only soil actually exported as waste after documented contamination screening and destination classification. Soil moved and reused within the declared site boundary is an internal balance, not a second external exchange. Contaminated soil needs its own identified waste row.

- Selected flow: Uncontaminated excavated mineral soil for off-site disposal
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `cedd-civil-2026`

###### Sediment-bearing trench dewatering water sent to treatment (`dewatering_wastewater`)

Conditional actual external transfer to treatment. Record suspended-solids state and any measured contamination; this liquid waste is neither natural resource intake nor a direct environmental discharge. Internal settling/reuse remains internal.

- Selected flow: Sediment-bearing trench dewatering water sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

##### Elementary flows

###### Water (`dewatering_freshwater_return`)

Only actual trench/pit dewatering liquid water, CAS7732-18-5, discharged directly to an identified freshwater receiver after any actual site treatment. Match Emissions to fresh water and Volume/m3, retaining operation-specific metering, chemistry and receiver. This is alternative to transfer of the same water as dewatering_wastewater to external treatment; it is not sea return, resource abstraction or a test-water release. Add each actual measured contaminant as a distinct elemental exchange.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

### Process: Main installation, joints and integral chambers (`pipe_assembly`)

#### Inputs

##### Product flows

###### Cement-mortar-lined ductile-iron water-main pipe (`di_water_pipe`)

Actual DI water-main route only: document grade, bore, wall, lining, coating, joint and actual supplied net mass. Include factory lining/coating within the supplied pipe boundary; do not add its constituents again. Cast-steel and generic iron families do not establish this configured pipe identity.

- Selected flow: Cement-mortar-lined ductile-iron water-main pipe
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`

###### PE100 water-pressure pipe (`pe_water_pipe`)

When the actual accepted water route uses certified PE100 pressure pipe, with diameter, SDR/wall, resin and joint procedure recorded. This water-grade row does not substitute for gas-grade or an unspecified plastic pipe.

- Selected flow: PE100 water-pressure pipe
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`

###### Gas-grade polyethylene distribution-main pipe (`pe_gas_pipe`)

Actual PE gas-main route only, using the specific certified gas grade, dimensions, joining qualification and operating conditions. Do not infer material grade, pressure rating or gas approval from water-pipe identity.

- Selected flow: Gas-grade polyethylene distribution-main pipe
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `phmsa-distribution-2024`

###### Line pipe of a kind used for oil or gas pipelines, welded, of steel (`steel_gas_pipe`)

Only actual purchased welded steel gas line pipe at the manufacturing-plant interface. Supplier certificates must establish the same gas duty, grade, dimensions and supplied coating/lining boundary; factory manufacture is upstream, field joints are foreground. This identity is not a water/sewer/steam or installed-network proxy.

- Selected flow: Line pipe of a kind used for oil or gas pipelines, welded, of steel `e505f1de-c307-4319-a6b6-371b34e7b1ed`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `phmsa-distribution-2024`

###### Steel Pipe (`steel_water_carrier`)

Only actual circular welded steel water carrier supplied at plant and matching the welding route of this identity, with certified water duty, grade/bore/wall and included coating/lining recorded. Hollow structural profiles, seamless pipe and oil/gas-only products require other identities.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`

###### Precast reinforced-concrete sewer-main pipe (`concrete_sewer_pipe`)

Actual precast reinforced-concrete sewer route, including declared reinforcement and factory joint components. Capture net measured mass/geometry and joint method; do not count embedded reinforcement again.

- Selected flow: Precast reinforced-concrete sewer-main pipe
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `cedd-civil-2026`

###### Vitrified-clay sewer-main pipe (`clay_sewer_pipe`)

Actual vitrified-clay sewer route, with bore, wall, supplied joint state and measured net quantity; this fired pipe is distinct from loose clay feedstock or concrete pipe.

- Selected flow: Vitrified-clay sewer-main pipe
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `cedd-civil-2026`

###### UPVC tube (`pvc_sewer_pipe`)

Only actual CN plant-gate supplied unplasticized PVC construction pipe compatible with this identity; establish sewer use, dimensions, grade and joint configuration from lot certificates. Other countries or unverified formulations need another identity; the manufacturing label alone is not sewer acceptance.

- Selected flow: UPVC tube `a343bef6-8d18-4594-b1aa-99bc47172684`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `cedd-civil-2026`

###### Ductile-iron water-main elbow (`di_elbow`)

Actual discrete DI elbow with angle, bore, lining/coating and supplied boundary; exclude any elbow already included in a purchased assembly.

- Selected flow: Ductile-iron water-main elbow
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`

###### Ductile-iron water-main tee (`di_tee`)

Actual discrete DI tee; identify each branch diameter and supplied coating/lining.

- Selected flow: Ductile-iron water-main tee
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`

###### Ductile-iron water-main gate-valve assembly (`gate_valve`)

Actual complete gate valve with bore, pressure class, actuator and supplied internal component boundary. Other valve types, gas regulators, steam traps or hydrants require their own discrete rows.

- Selected flow: Ductile-iron water-main gate-valve assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`

###### EPDM pipe-joint gasket (`epdm_gasket`)

Only a separately supplied actual EPDM gasket with confirmed elastomer formulation and fluid/temperature compatibility. Do not default to EPDM for every pipe route or duplicate a gasket included in the supplied pipe/valve.

- Selected flow: EPDM pipe-joint gasket
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`; `cedd-civil-2026`

###### Gas-grade polyethylene electrofusion coupling (`pe_coupler`)

Actual separately supplied gas-grade PE electrofusion coupling; retain dimensions and joining record. Butt fusion without a supplied coupling does not create this exchange.

- Selected flow: Gas-grade polyethylene electrofusion coupling
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `phmsa-distribution-2024`

###### Carbon-steel covered welding electrode (`welding_electrode`)

Actual covered-electrode field welding only; retain classification, coating and issued-minus-returned mass. MIG wire, flux and shielding gases each need separate actual rows.

- Selected flow: Carbon-steel covered welding electrode
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`; `ufgs-heat-2024`

###### Epoxy-resin field-joint coating formulation (`epoxy_joint_coating`)

Actual prepared epoxy formulation applied to field joints, with composition, mixing state, curing and solvent content declared. Record its constituents separately only if mixed from individual purchased products, replacing the formulated-product row. Actual VOC species require separate supported releases.

- Selected flow: Epoxy-resin field-joint coating formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`; `ufgs-heat-2024`

###### PVC solvent-cement formulation (`pvc_solvent_cement`)

Actual solvent-cement joint route only, with supplier formulation and issued/returned quantity. Socket-ring routes without solvent adhesive do not use this row.

- Selected flow: PVC solvent-cement formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `cedd-civil-2026`

###### Fresh ready-mixed concrete for pipeline chamber and thrust block (`chamber_concrete`)

Only actual separately delivered fresh mix for included chamber/base/thrust works; retain grade, mix certificate, density, placement volume, rejects and curing. Precast chamber assemblies replace their embedded materials; on-site mixing requires separate cement, each aggregate, water and each admixture plus actual mixing energy.

- Selected flow: Fresh ready-mixed concrete for pipeline chamber and thrust block
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`; `cedd-civil-2026`; `ufgs-heat-2024`

###### Carbon-steel reinforcing bar for pipeline chamber (`chamber_rebar`)

Actual separately supplied rebar installed in declared civil works; retain grade, cut lengths and weights. Embedded reinforcement of precast components is excluded from this separate row.

- Selected flow: Carbon-steel reinforcing bar for pipeline chamber
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `cedd-civil-2026`; `ufgs-heat-2024`

###### Polyethylene pipeline identification tape (`warning_tape`)

Actual separately installed polyethylene identification tape; retain tape material and measured length/linear mass. Conductive detectable tape with metal content requires its own component identity.

- Selected flow: Polyethylene pipeline identification tape
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Uncoated carbon-steel pipe offcut waste (`steel_offcut`)

Only actual uncoated steel offcuts exported as waste; coated/contaminated offcuts and spent electrodes are separate waste identities. No recycling credit is inferred.

- Selected flow: Uncoated carbon-steel pipe offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Unwashed polyethylene pipe offcut waste (`pe_offcut`)

Actual PE cut/rejected pipe waste at the site handoff before washing/recycling; cleaned polymer at a recycling plant is a different interface.

- Selected flow: Unwashed polyethylene pipe offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Unplasticized-PVC pipe offcut waste (`pvc_offcut`)

Actual uPVC offcuts exported with contamination and destination declared; do not combine with polyethylene scrap.

- Selected flow: Unplasticized-PVC pipe offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Ductile-iron pipe offcut waste (`di_offcut`)

Actual DI offcuts with lining/coating state and destination documented. Steel scrap is not automatically this waste.

- Selected flow: Ductile-iron pipe offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

##### Elementary flows

### Process: Trenchless crossing and annular filling (`trenchless`)

#### Inputs

##### Product flows

###### Dry bentonite powder for water-based drilling fluid (`bentonite_powder`)

Actual trenchless drilling/lubrication route using separately supplied bentonite. Retain real mud recipe and each separately purchased additive; injection-well bentonite/cellulose mixture is not pure powder. Purchased complete slurry instead replaces its included powder and water rows.

- Selected flow: Dry bentonite powder for water-based drilling fluid
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`

###### Prepared Portland-cement grout (`grout`)

Only actual complete supplied cement grout for annular void filling; record composition and wet state. Site-mixed grout requires each measured constituent and mixing energy instead of double-counting the complete grout.

- Selected flow: Prepared Portland-cement grout
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `wsd-mainlaying-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent bentonite drilling slurry with mineral cuttings (`drilling_slurry_waste`)

Actual spent slurry transferred out after measured recovery/reuse; retain bentonite concentration, mineral solids, contamination and wet volume. Oilfield-specific drilling waste is not a default local-pipeline waste.

- Selected flow: Spent bentonite drilling slurry with mineral cuttings
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `wsd-mainlaying-2023`

##### Elementary flows

### Process: Hot-water/steam carrier, return, insulation and support installation (`heat_protection`)

#### Inputs

##### Product flows

###### Steel Pipe (`heat_steel_carrier`)

Only actual circular welded steel hot-water/steam carrier matching this plant-gate welded identity, with temperature/pressure duty, grade and wall established by supplier certificates. Account separately for the actual condensate-return line geometry and quantities within this same physical material; factory preinsulated assemblies require an assembly identity instead of repeating embedded pipe/insulation/casing.

- Selected flow: Steel Pipe `370d14a6-55f3-4fdd-90b2-84751125ff00`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ufgs-heat-2024`

###### High-temperature calcium-silicate pipe insulation section (`calcium_silicate`)

Actual separately supplied high-temperature calcium-silicate sections in the specified heat system. UFGS WSL steam systems distinguish an inner high-temperature layer from outer foam; do not infer generic thickness, density or suitability from a mineral feedstock.

- Selected flow: High-temperature calcium-silicate pipe insulation section
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ufgs-heat-2024`

###### Mineral-rock-wool pipe insulation section (`rockwool_section`)

When actual certified rock-wool pipe sections suit the recorded operating temperature and system design. A generic loose mineral wool identity does not alone confirm binder/form, temperature duty or thickness.

- Selected flow: Mineral-rock-wool pipe insulation section
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ufgs-heat-2024`

###### Rigid polyurethane outer-layer pipe insulation (`pu_outer_insulation`)

Only an actual separately supplied outer PU layer with composition and thermal duty documented. In the cited WSL steam arrangement this surrounds the calcium-silicate layer; never treat PU directly on every steam carrier as a universal route. Count factory-embedded foam only inside its purchased assembly.

- Selected flow: Rigid polyurethane outer-layer pipe insulation
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ufgs-heat-2024`

###### Coated carbon-steel heat-pipeline outer casing (`steel_heat_casing`)

Actual separately supplied DDT-system steel casing with declared coating, vent/drain and field-connection boundary; it is not the fluid carrier and not a default WSL or HDPE casing.

- Selected flow: Coated carbon-steel heat-pipeline outer casing
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ufgs-heat-2024`

###### Glass-fibre-reinforced polyester heat-pipeline outer casing (`grp_heat_casing`)

Actual separately supplied WSL glass-fibre/polyester casing, with construction and resin documented. Complete supplied casing is one physical component; do not separately add its embedded resin and glass fibres.

- Selected flow: Glass-fibre-reinforced polyester heat-pipeline outer casing
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ufgs-heat-2024`

###### Carbon-steel heat-pipeline anchor support (`heat_anchor`)

Actual separately supplied anchor/support with geometry and load/configuration evidence; concrete block is accounted in its concrete row. Other expansion joints or steam traps require their own specific supplied-component rows.

- Selected flow: Carbon-steel heat-pipeline anchor support
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `ufgs-heat-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Backfill, compaction and surface reinstatement (`restoration`)

#### Inputs

##### Product flows

###### Hot-mix asphalt pavement mixture for trench reinstatement (`restoration_asphalt`)

Actual reinstatement of disturbed asphalt pavement before acceptance, with mix type, binder, reclaimed content, layer dimensions and measured quantity. Do not attribute undisturbed roads or future maintenance to this construction.

- Selected flow: Hot-mix asphalt pavement mixture for trench reinstatement
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `cedd-civil-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Removed asphalt pavement waste (`asphalt_waste`)

Only actual removed pavement exported during this construction/restoration; retain tar screening, contamination and destination. Coal-tar waste or concrete rubble need different rows.

- Selected flow: Removed asphalt pavement waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

##### Elementary flows

### Process: Inspection, medium-specific testing and acceptance handover (`commissioning`)

#### Inputs

##### Product flows

###### Tap water (`hk_test_water`)

Only actual treated water supplied from the Hong Kong water-treatment-plant gate matching this public identity. Verify the real distribution/transport link separately and retain that link; it is not unrestricted site water. Keep Volume/m3; the secondary screening 1000 kg/m3 is not a default density.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `wsd-mainlaying-2023`

###### Treated freshwater supplied for pipeline testing and flushing (`other_test_water`)

Actual supply outside the verified HK interface requires its own provider/geography/treatment identity. Record all fills, flushes, drain-down and repeat tests; use this row instead of, not in addition to, the same hk_test_water quantity. Pneumatic-only tests do not require invented water.

- Selected flow: Treated freshwater supplied for pipeline testing and flushing
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `wsd-mainlaying-2023`; `cedd-civil-2026`; `ufgs-heat-2024`

###### Aqueous sodium-hypochlorite disinfectant formulation (`hypochlorite_solution`)

Only actual potable-water commissioning that uses this disinfectant, with solution composition, active-chlorine assay, density and issued dose measured. The WSD concentrations/contact times are HK specification context, not global default recipes. Sewer/gas/heat lines do not automatically use disinfection.

- Selected flow: Aqueous sodium-hypochlorite disinfectant formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `wsd-mainlaying-2023`

###### Nitrogen gas (`nitrogen_testing`)

Only actual industrial gaseous nitrogen supplied at a CN plant for purging/leak testing, with actual purity, temperature and pressure declared and the plant-to-site link verified. This public property is Volume, not Normal Volume; do not label uncorrected cylinder volume as Nm3 or impose nitrogen purging on all gas lines.

- Selected flow: Nitrogen gas `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `wsd-mainlaying-2023`; `phmsa-distribution-2024`

###### Compressed dry air for pipeline pneumatic testing (`compressed_air`)

Only actual pneumatic tests; declare moisture, pressure, temperature and supply boundary. Purchased compressed air and on-site compression electricity are alternative production boundaries; avoid counting both as complete supplied utilities.

- Selected flow: Compressed dry air for pipeline pneumatic testing
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `cedd-civil-2026`; `ufgs-heat-2024`; `phmsa-distribution-2024`

###### Natural gas mixture admitted during gas-main commissioning (`commissioning_gas`)

Conditional actual gas connection/test charge before acceptance, with composition, fossil/biogenic fractions, state and measured mass/volume conversion. Retained line pack at handover is distinguished from consumed/vented gas; subsequent distributed gas and routine operating loss are outside construction.

- Selected flow: Natural gas mixture admitted during gas-main commissioning
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `phmsa-distribution-2024`

###### Hot water supplied for pre-handover operational testing (`test_hot_water`)

Only actual external hot-water supply for the specified pre-handover heat-main operational test. Record real inlet/return temperature, pressure, flow/time, water state and supplier interface. A complete purchased heated-water input includes its upstream heating; do not add that same heat again. An internally circulating or on-site heated circuit does not create this external exchange: record actual separately supplied make-up water, each real fuel/electricity and supported releases instead. No universal temperature, duration or heat rate is provided.

- Selected flow: Hot water supplied for pre-handover operational testing
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `ufgs-heat-2024`

###### Steam supplied for heat-main operational acceptance testing (`test_steam`)

Only actual pre-handover operational tests: collect supplier pressure, temperature, steam quality and actual supply/condensate interface. Neither 0.45 MPaG nor 11 MPaG is assumed. Boiler production is linked upstream unless actually on site, where each real fuel/water/emission must be inventoried.

- Selected flow: Steam supplied for heat-main operational acceptance testing
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `ufgs-heat-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered test-steam condensate returned to supplier (`condensate_return`)

Actual external return of recovered pre-handover test condensate, with temperature/chemistry/interface and metered quantity. Internal circulation is not an external product output; discarded condensate needs its actual waste/release route instead.

- Selected flow: Recovered test-steam condensate returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `ufgs-heat-2024`

###### Operational-test hot water returned externally to supplier (`test_hot_water_return`)

Only actual external return of test hot water to the identified supplier with separately metered quantity and actual temperature, pressure and chemistry. Internal recirculation is an internal balance; discharged test water uses its actual treatment or environmental-release route. Separate this return from steam condensate and from retained water at handover.

- Selected flow: Operational-test hot water returned externally to supplier
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `ufgs-heat-2024`

###### Accepted complete local pipeline delivery unit (`finished_pipeline`)

The same entire actually accepted local main/network between the declared interfaces, with integral junctions/chambers/supports, completed applicable tests and contracted reinstatement. Partial or failed delivery cannot be counted as complete output.

- Selected flow: Accepted complete local pipeline delivery unit
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `source_rule`
- Collection protocol: `cp_delivery`
- Sources: `un-cpc3-2025`

##### Waste flows

###### Sediment-bearing pipeline pressure-test wastewater to treatment (`test_wastewater`)

Actual collected test/flush water sent to external treatment; retain contact materials, chemistry and treatment route. Do not use a silicon-wafer or manganese-slag washing wastewater merely because its name is Wastewater.

- Selected flow: Sediment-bearing pipeline pressure-test wastewater to treatment
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `wsd-mainlaying-2023`; `cedd-civil-2026`; `ufgs-heat-2024`

###### Residual-chlorine potable-main disinfection wastewater to treatment (`chlorinated_wastewater`)

Actual disinfection drain-down sent to treatment; retain residual chlorine and dechlorination records. Distinct from uncontaminated pressure-test water and direct analyte discharge; do not count the same volume twice.

- Selected flow: Residual-chlorine potable-main disinfection wastewater to treatment
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_testing`
- Sources: `wsd-mainlaying-2023`

##### Elementary flows

###### Water (`freshwater_discharge`)

Actual pre-handover test/flush water only. Only actual liquid water, CAS7732-18-5, finally released directly to an identified freshwater receiver, in the public Emissions to fresh water compartment and Volume/m3 property. Meter the actual liquid volume at its recorded state. Resource abstraction, supplied water, water vapour, seawater return and liquid waste transferred to treatment are different exchanges. Record each actual pollutant separately; unresolved chemistry or receiver prevents completeness.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### chloride (`chloride_freshwater`)

Only actual measured chloride ion, CAS16887-00-6, immediately released to the identified freshwater receiver, matching public Emissions to fresh water and Mass/kg. Calculate the ion mass from same-interval concentration and final discharged liquid volume with explicit unit conversion. Free chlorine, hypochlorite, total chlorine, chloride-containing formulations, sea release and long-term/unspecified compartments are different exchanges. Disclose background concentration; neither disinfection nor dechlorination implies a default chloride load.

- Selected flow: chloride `08a91e70-3ddc-11dd-9508-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

### Process: Operation-resolved construction utilities, plant and releases (`construction_support`)

#### Inputs

##### Product flows

###### Diesel fuel (`site_diesel`)

Actual on-site diesel for excavation, lifting, compaction, trenchless work and generators, resolved by operation/equipment; no fixed consumption rate. Preserve this generic mass-based fuel identity and independently verify actual grade, provider, formulation and fossil fraction. Exclude logistics fuel already recorded in haul_diesel.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Alternating current (`cn_lv_power`)

Only actual CN grid-average electricity supplied to the user at <1 kV. Allocate real meter readings to welding/fusion, pumping, tests, lighting and actual tasks without overlap; supplier country/year/voltage must match. Generators and other regions require their own boundaries/identities. Preserve Net calorific value and the energy group.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Attributable metered kWh multiplied by 3.6, retaining operation and meter balance in cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

###### Alternating current (`cn_mv_power`)

Only actual CN grid-average user supply at 1–35 kV, on its separate meter/interface; do not add the same energy again at the transformed low-voltage user interface. Other voltage or geography needs a different identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Attributable metered kWh multiplied by 3.6, retaining operation and meter balance in cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

###### Configured hydraulic crawler excavator manufacture share (`excavator_share`)

When the actual crawler excavator is used, collect its configured net mass and independently supported dimensionless manufacture share. The broad revolving-machinery family alone does not confirm crawler/hydraulic configuration. Include actual operation fuel separately; never charge complete manufacture anew at each project.

- Selected flow: Configured hydraulic crawler excavator manufacture share
- Flow property / unit: Mass / kg
- Amount rule: Measured configured net asset mass multiplied by its supported dimensionless manufacture share, with conservation ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

###### Treated freshwater supplied for construction and dust suppression (`site_water`)

Actual separate purchased/supplied site water with provider, location and treatment state declared. Do not use the HK plant-gate UUID outside its geography/interface. All curing, mud preparation and suppression uses are recorded by operation; exclude test water already counted.

- Selected flow: Treated freshwater supplied for construction and dust suppression
- Flow property / unit: Volume / m3
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

###### Polyethylene protective packaging film (`wrap_film`)

Actual separately delivered protective PE film that crosses the site boundary; include incoming packaging tare separately from installed product.

- Selected flow: Polyethylene protective packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Reusable softwood transport pallet (`wood_pallet`)

Actual reusable pallet with measured material/state and conservative supported manufacture share; reusable pallets returned externally are recorded in the physical return ledger. Unknown lifetime/reuse denominator remains review.

- Selected flow: Reusable softwood transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured configured net asset mass multiplied by its supported dimensionless manufacture share, with conservation ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Used polyethylene protective packaging film waste (`wrap_waste`)

Actual discarded film, separate from PE pipe offcuts and with contamination/recycling destination declared.

- Selected flow: Used polyethylene protective packaging film waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Only actual measured/supported oxidized fossil-carbon release to air, unspecified subcompartment, during this construction and its separately recorded haul trips. Fuel existence does not establish an amount or complete oxidation; do not repeat tailpipe emissions already included in a linked transport/combustion dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### carbon monoxide (fossil) (`co_air`)

Only actually quantified molecular CO released immediately to air, unspecified; an applicable measured activity/factor or species monitoring is required, never a default per-litre diesel value.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### nitrogen monoxide (`no_air`)

Only molecular NO, CAS 10102-43-9, actual immediate air/unspecified release. NOx as NO2-equivalent does not establish NO, NO2 or N2O separately.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### nitrogen dioxide (`no2_air`)

Only molecular NO2, CAS 10102-44-0, actual immediate air/unspecified release. The incorrect tetroxide synonym does not change the molecular identity; NOx-as-NO2 and N2O are not this exchange.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### particles (PM2.5) (`pm25_air`)

Only quantified externally released PM2.5 during real exhaust/dust activities, immediate air/unspecified. Indoor dust, total dust and PM0.2 do not establish this fraction; do not overlap the coarse fraction.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### particles (PM2.5 - PM10) (`pm_coarse_air`)

Only the quantified nonoverlapping PM2.5–PM10 fraction released externally, immediate air/unspecified. PM10 total is not the coarse fraction; other actual subcompartments need their own identities.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

###### methane (fossil) (`methane_air`)

Only actual measured/supported fossil CH4 released immediately to air, unspecified, before acceptance from gas admission/venting/leaks or combustion. Keep actual composition and retained line pack; no default vent or leak fraction, no biogenic or long-term proxy.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured net attributable exchange quantity in the declared physical state; retain original operation records and reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| a_direct | Assign material, utility, transport, test and waste quantities directly to recorded tasks/interfaces where possible. Shared site meter quantities require actual submeter/task evidence and a conserved ledger over all beneficiaries; do not invent allocation by cost, diameter or an assumed kilometre. |  |
| a_assets | For each reusable plant/shoring/pallet retain same-configuration measured mass, supported total service/activity basis and documented dimensionless manufacture shares. Across projects, periods and reuse cumulative shares <=1. Unknown total activity/life is unresolved review, not full burden per project. Do not also include this manufacture in a rental/service dataset. |  |
| a_waste | The declared pipeline is the single delivery output. Returned usable material/pallet/condensate is separately identified by actual state and receiver; waste is not a co-product by default. Declare actual off-site recycling/treatment boundaries and do not add assumed avoided virgin production. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | commissioning | finished_pipeline | As-built and acceptance register | site/asset/interfaces; medium; surveyed carrier/branch/return length, bore/wall/burial/gradient; chamber/support/restored-area geometry; actual duty/capacity/pressure/temperature; material/system/BOM; test/repair/retest; date; accepted count | Survey traceable as-built dimensions with calibrated instruments; reconcile complete scope and all integral work with signed handover and applicable test records. Record actual duty from the accepted design/test evidence rather than assuming values. | item | each delivery/correction | entire construction through acceptance | same entire delivery entity | per declared reference flow | survey/calibration; signed scope and test acceptance |
| cp_materials | earthworks; pipe_assembly; trenchless; heat_protection; restoration; construction_support | each specific supplied material/component | lot/receipt/issue/return/stock ledger | operation_id; row_id; supplier/interface/country; lot/grade/formulation; lining/coating/assembly inclusion; net mass/volume/length; moisture/density/linear mass; issued/returned/stocks; installed geometry | Weigh net material with calibrated scales/traceable lot weights; meter wet deliveries and survey installed lengths/geometry. Reconcile stocks, returns, installed quantities, rejects and actual rework; exclude packaging tare and embedded components counted in supplied assemblies. | kg; m3; m | each receipt/issue/return | all construction/rework lots | same entity, assigned actual operation | per declared reference flow | weigh slips; certificates; actual BOM; stock balance |
| cp_logistics | logistics | haul_diesel | trip/fuel ledger | vehicle; consignment; route; payload; distance; empty returns; fuel meters/stocks; grade/provider/fossil fraction; transport dataset inclusions | Use actual dispatch/vehicle refuelling and fuel-meter records; include evidenced returns and disposal journeys. Fuel volume-to-mass uses same-fuel measured/supplier density at recorded conditions. Remove fuel/emissions already present in a linked complete service. | kg; km | each trip/refuelling | all actual construction logistics | same entity actual origin/destination | per declared reference flow | meter and vehicle/dispatch records; supplied boundaries |
| cp_energy | construction_support | each site fuel and voltage-specific electricity | meter/task ledger | operation_id; equipment; meter/interface; country/provider/year/voltage; readings; working/idle hours; diesel grade/fossil fraction/density; generator fuel/output; attribution beneficiaries | Read calibrated user electricity meters and weighed/metered fuel issues; assign actual welding/fusion/pump/compressor/compaction/test/lighting tasks. Reconcile shared meter periods and generator accounts without duplicated utility output. | kg; kWh; MJ | each shift/read/issue | full construction/retest period | same entity and explicit shared beneficiaries | per declared reference flow | calibration; meter/time logs; fuel certificate; conserved shares |
| cp_assets | earthworks; construction_support | each reusable physical plant/component | asset manufacture-attribution ledger | asset id/configuration; measured net mass; weighing evidence; actual task activity; supported total lifetime/cumulative activity; beneficiary list; prior/current shares | Use calibrated same-configuration weighing or traceable manufacturer net-mass records, excluding transport packaging; retain actual task and independently supported total-activity records. Audit cumulative shares across all projects/reuses; missing denominator remains unresolved review. | kg | each asset/task/reuse | whole attribution history relevant to this share | same assets across all beneficiary sites | per declared reference flow | configuration/weighing; total activity evidence; conserved ledger |
| cp_water | earthworks; commissioning; construction_support | each supply/resource/waste/direct water exchange and measured analyte | meter/chemistry/receiver register | operation_id; source/provider/aquifer; salinity; meter; volume/temperature/pressure; storage/reuse; waste vs direct route; treatment; receiver; analyte concentration/time; density when needed | Meter each actual external intake/return and destination independently; sample actual final discharge using a recorded method and matched flow interval. Distinguish resource abstraction, purchased treatment water, treatment waste and environmental release; preserve internal recirculation balances. | m3; kg | each intake/batch/discharge interval | entire actual construction/testing water account | same entity and identified receivers | per declared reference flow | meter calibration; sampling/analysis; receiver and route records |
| cp_testing | commissioning | each actual test medium/chemical/waste/condensate | test/charge/flush/analysis ledger | main/reach/material/medium; specification/criteria; test type; pressure/temperature/hold; results/repairs; fill/flush/retest volumes; solution concentration/density; nitrogen gas T/P/purity; gas composition/line pack/vent; steam state/condensate fate; hot-water supply/return temperature, pressure, flow/time; actual heating interface; measured delivered heat and state-property evidence | Use signed test/commissioning records and actual medium meters/weighing. Water-pressure, gravity-sewer air/water/infiltration, gas-compatible pressure tests and heat carrier/casing/operational tests follow actual material/system specifications. Collect actual thermal-test supply/return state and flow/time, or on-site heating fuel/water/electricity separately; preserve the actual supplier-vs-site heating boundary. Collect only real potable disinfection and actual dosing; do not infer doses or test media from another route. | kg; m3 | each test/fill/flush/retest | all pre-handover tests and corrections | same accepted interfaces | per declared reference flow | signed criteria/results; media meters; assay and composition certificates |
| cp_waste | earthworks; pipe_assembly; trenchless; restoration; construction_support | each specific external waste | weighbridge/container/transfer ledger | row_id; operation; chemical/material state; wet/dry basis; contamination; measured mass/volume; reuse/recovery; destination/treatment; manifest | Weigh or meter each separately identified exported waste; retain composition and destination evidence, exclude actual internal reuse and document rejected/reworked materials. Never turn an unknown waste mixture into a generic elementary flow. | kg; m3 | each transfer | all construction/rework transfers | same entity, actual receiver | per declared reference flow | weigh/meter slips; screening; destination manifests |
| cp_air | construction_support | each molecular species or particle fraction | emission measurement/activity ledger | operation_id; source; species/CAS; fossil/biogenic fraction; particle fraction; air subcompartment; release time; matched concentration/gas-flow/time; real fuel/activity; applicable factor/source/uncertainty; included transport boundary | Integrate actual substance-resolved monitoring at the same dry/wet/temperature/pressure basis, or apply a documented compatible factor to measured actual activity. For dust use evidenced size-specific emission measurement/model and external receiver; occupational or collected indoor dust is not an environmental release. No generic factor or NOx species split is supplied. | kg | each source/operating interval | construction/actual admission through acceptance | same entity with actual source/receiver | per declared reference flow | calibration; concentration/flow/time; factor applicability; raw uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_materials | supplied materials/components and their corresponding stocks, installed quantities and wastes | Per declared reference flow reconcile opening stocks + actual receipts − returns − closing stocks against installed amount, waste and internal reuse for each same material/state; retain rework. This balance does not create a total reference mass. | cp_materials; cp_waste | net attributable kg, m3 or m per declared reference flow |  |
| calc_power | cn_lv_power; cn_mv_power | MJ = measured attributable kWh × 3.6 | cp_energy | MJ per declared reference flow |  |
| calc_fuel | haul_diesel; site_diesel | Per declared reference flow conserve fuel issue/stock/refuelling balances. Convert volume to kg only with actual same-state density; LHV conversion requires its actual source and does not modify the mass-based adopted diesel identity. | cp_energy; cp_logistics | kg per declared reference flow |  |
| calc_assets | shoring_steel; excavator_share; wood_pallet | Per declared reference flow attributable manufacture kg = measured configured net asset kg × supported dimensionless share. Across all projects/periods/reuses sum of shares <=1; do not invent lifetime or reset the denominator. | cp_assets | attributable kg per declared reference flow |  |
| calc_water | all water and test-medium rows | Per declared reference flow reconcile each external intake/supply, actual reuse, retained storage/line pack, return, waste transfer and final release. Convert density/gas-condition quantities only using actual recorded compatible state; Volume is not automatically Normal Volume. | cp_water; cp_testing | distinct m3 or kg per declared reference flow |  |
| calc_analytes | chloride_freshwater | Per declared reference flow sum measured chloride-ion concentration × matched actual final effluent volume after explicit concentration-to-kg conversion; report gross release and any supported background correction separately. Do not convert free chlorine to chloride by assumption. | cp_water | chloride kg per declared reference flow |  |
| calc_air | all elementary air emission rows | Per declared reference flow integrate matched species/fraction concentration × gas volume on the same conditions, or documented applicable factor × measured actual activity, with unit conversion to kg. Measured fossil CO2 from carbon balance requires actual fossil-carbon content and oxidation evidence; no fixed rate, complete oxidation or unsupported species split is provided. | cp_air | separate actual-species kg per declared reference flow |  |
| calc_thermal_test | test_hot_water; test_hot_water_return; test_steam; condensate_return | Per declared reference flow derive delivered test heat from actual same-circuit mass flow/time, measured supply/return states and supported applicable enthalpy difference; volume-to-mass requires actual same-state density. Reconcile hot-water supply/return temperature, steam quality and recovery route. Explicitly convert the derived heat to MJ. Unknown properties, quantities or supply boundary remain review; this heat ledger does not add the heating already included in a complete purchased heated-fluid input. | cp_testing; cp_energy; cp_water | measured states and supported test-heat MJ ledger per declared reference flow | `ufgs-heat-2024` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_entity | finished_pipeline | Same real complete configuration/interfaces and physical geometry must agree across reference, installed inventory, test register and accepted output. No default per-main mass/capacity/life. | cp_delivery |
| dq_routes | all inventory rows | Retain material/fluid/system-specific selection and actual process activity. Unknown supplied assemblies, quantities or test medium prevent a completeness claim; absence has evidence, not an assumed zero. | cp_materials; cp_testing |
| dq_time | all inventory rows | Cover all actual construction, idle support, corrections, rejects, tests/retests and restoration through the actual acceptance date; source year/region/technology and uncertainty are disclosed. | cp_energy; cp_delivery |
| dq_environment | all elementary rows | Verify chemistry, fossil/biogenic origin, environment/subcompartment, release time and size fraction. Record actual noise/vibration with receiver/time/frequency/instrument units separately; these impacts, land occupation and ecological disturbance remain explicitly uncovered where no compatible quantified model is provided, not zero. | cp_air; cp_water |
| dq_assets | all reusable assets | Audit total activity evidence and cumulative conserved manufacture shares independently; unknown life/usage or rental manufacture boundary cannot be called complete. | cp_assets |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| v_delivery | Require all reference qualifiers, 1 item of complete actual accepted output, actual geometry/capacity/duty conditions and matching cp_delivery. Failed/partial handover remains incomplete; a classification match is not methodology approval. | `un-cpc3-2025` |
| v_medium | Check water/pressure, gravity-sewer, gas and heat test/inspection routes against the actual specification and supplied material state. HK and US source numeric requirements are not default inventory or universal approvals; include actual repair/retest. | `wsd-mainlaying-2023`; `cedd-civil-2026`; `ufgs-heat-2024`; `phmsa-distribution-2024` |
| v_identity | Verify each selected flow against its real primary property, state, route, geography, chemistry, compartment and unit group; unresolved identities keep exact atomic rows and review gaps. CN power voltage, HK water gate, gas pressure/volume and factory-assembly inclusions remain explicit. |  |
| v_balance | All inventory/protocol bases are per declared reference flow. Conserve task/meter/material/water balances, trace actual density/linear-mass conversions and cumulative asset shares. Unproved mathematical relationships require review. |  |
| v_release | Reject NO/NO2/N2O, NOx-equivalent, particle-size, fossil/biogenic, immediate/long-term, water-resource/wastewater and receiver mismatches. Missing direct release quantities are explicitly unresolved, never invented from equipment/fuel presence. |  |
| v_completeness | Check all required/applicable stages and actual additional atomic exchanges, upstream links, internal assembly exclusions, bilingual row/rule/UUID consistency, noise/land/ecology coverage and lifecycle exclusions. Structural checks do not verify actual engineering acceptance, scientific approval or full-life completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Construction foreground data package for a configured complete accepted local-pipeline entity |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Explicitly qualified construction comparison or component of a separately evidenced lifecycle model, matching medium/interface/duty/geometry and supplier boundaries |
| excluded_use | Unqualified cross-medium/per-kg/per-km comparison; pipe-mill or service substitution; automatic full life, future losses/lifetime, compliance or scientific approval claims |
| required_metadata | All reference qualifiers, actual process/route/assembly/BOM/measurement/acceptance records, attribution, source dates and upstream IDs/interfaces |
| required_quality_disclosure | Unresolved flow/reference identities; unmeasured exchanges/conditional tasks; unknown asset shares; source regional/edition limits; missing upstream/lifecycle/noise/land/ecology coverage; uncertainty |
| update_trigger | Changed medium/configuration/material/joint/thermal system/interface/site geometry, acceptance specification, measured activities, asset attribution or compatible identity/source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF pp.280–281. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Local gas, water/sewer and heat-main scope; distinction from long-distance pipes and treatment plants; classification is not methodology approval |
| wsd-mainlaying-2023 | official_guidance | Hong Kong Water Supplies Department, Manual of Mainlaying Practice, 2012 edition with incorporated amendments through Amendment No.1/2023. §§2–3; §3.10 printed p.25/PDF32; §3.11 p.26/PDF33; §4.4.1 printed p.36/PDF43 (water-main replacement trenchless context). https://www.wsd.gov.hk/filemanager/en/content_1456/Manual_of_Mainlaying_Practice_Amendment_1_2023(finalized).pdf | HK supplied-pipe/field installation, testing, potable disinfection and replacement-main trenchless context; retained dated context, not global dosage, lifetime or current approval |
| cedd-civil-2026 | official_guidance | Hong Kong Civil Engineering and Development Department, General Specification for Civil Engineering Works, 2020 edition, Volume1 Rev8 including Amendment No.3/2026 dated23July2026. §§5.11–5.16A; 5.53–5.55 printed5.20–5.21/PDF167–168; 5.102–5.107 printed5.37–5.39/PDF184–186; Appendix5.4. https://www.cedd.gov.hk/filemanager/eng/content_978/GS%202020%20Vol%201%20Rev%208_clean.pdf | HK drainage pipe materials, bedding/field assembly and gravity/pressure test distinction; project-specific specification controls, no default trench widths or quantities |
| ufgs-heat-2024 | official_guidance | USACE/NAVFAC/AFCEC, UFGS33 61 13 Pre-Engineered Underground Heat Distribution System, August2024, retained version referencing UMRL July2026. §1.2.3 p9; §§2.2.3–2.2.5 p16; §§2.3.3–2.3.6 pp18–20; §2.5/Table1 p28; §2.6 p31; §§3.5–3.6 pp37–40, including §3.6.2.3 operational testing p40. https://www.wbdg.org/FFC/DOD/UFGS/UFGS%2033%2061%2013.pdf | Distinct actual steam/hot-water carrier, return, high-temperature insulation/casing, field installation and carrier/casing/operational tests. Guide requires project editing; do not impose every system or numeric design value |
| phmsa-distribution-2024 | official_guidance | Oak Ridge National Laboratory/Blade Energy Partners for PHMSA, Integrity Assessment of Distribution Pipelines, ORNL/SPR-2023/3188, January2024, official transmittal30August2024. §3.2 printedpp6–7/PDF18–19; §4.1 printedp10/PDF22. https://www.phmsa.dot.gov/sites/phmsa.dot.gov/files/2024-09/Report%20to%20Congress%20-%20Integrity%20Assessments%20of%20Distribution%20Pipelines.pdf | Gas distribution material/joint distinction and new-line testing context; historical inventory shares and in-service integrity-assessment difficulty are not new-build recipes or universal hydrotest requirements |
