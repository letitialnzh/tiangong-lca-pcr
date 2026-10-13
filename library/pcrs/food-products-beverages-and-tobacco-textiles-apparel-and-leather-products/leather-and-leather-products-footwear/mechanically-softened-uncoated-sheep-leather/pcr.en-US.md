---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.mechanically-softened-uncoated-sheep-leather
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Mechanically softened uncoated sheep leather from dyed crust


## 1. Scope and Applicability

This PCR covers a bounded dry mechanical finishing route for hairless sheep or lamb leather: receive already chromium-tanned, retanned, dyed, fat-liquored and dried crust leather at a documented moisture condition suitable for mechanical softening; stake, optionally dry-mill without added chemicals, trim, grade and accept uncoated leather for further garment or glove fabrication. The representative product is dyed sheep nappa without a surface coating. The process sequence and acceptance specification are site and product specific [assomac-finishing; goldpanel-production]. The route begins after upstream wet processing and drying. It excludes raw skins, wet-blue inputs, on-site wet retanning/dyeing/fat-liquoring, deliberate water addition, further thermal drying, coating, buffed suede/nubuck, patent, metallized, composition leather, goats and other species, and manufacture/use of leather articles. Any such operation requires a separately reviewed route expansion with its individual exchanges. CPC 29130 also includes other skins and composition leather; this PCR does not establish coverage of that whole subclass [un-cpc-2025].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.mechanically-softened-uncoated-sheep-leather |
| classification_refs | CPC 3.0:29130; narrower scope; classification context only |
| covered_products | Uncoated hairless chrome-tanned dyed sheep/lamb leather from received conditioned crust |
| excluded_products | Goat/kid leather; composition leather; wet processing; coatings; synthetic leather; fabricated articles |
| representative_product | Mechanically softened uncoated dyed sheep nappa for garment fabrication |
| production_route | Conditioned dyed crust reception → staking → dry milling when used → trimming/grading → net mass acceptance and pack-out |
| market_state | Dry saleable leather at declared equilibrium moisture; no fabricated article or lifetime claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply uncoated mechanically softened sheep leather for further fabrication |
| How much | 1 kg net accepted leather at declared conditioning state |
| How well | Declared sheep/lamb origin, chrome tannage, pre-existing dye/fat-liquor, thickness, softness and purchaser acceptance specification; no assumed quality equivalence to another route |
| How long or cycle | One declared homogeneous factory reporting pool covering included lots, failed work and rework; no consumer service duration assigned |
| reference_flow_link | finished_leather |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Uncoated chrome-tanned dyed sheep leather |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; supplier and lot; incoming processing state; chrome tannage; dye/fat-liquor composition evidence; incoming and output moisture; uncoated surface; thickness and softness acceptance; process sequence; geography and meter voltage; waste destination; upstream gaps |

Declare every required qualifier in the foreground dataset metadata or process description.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use cp_mass to weigh accepted net leather at the declared conditioning state, excluding packaging, waste and lower-grade output. Every inventory denominator is the same 1 kg reference flow. |
| area_conversion | dyed_sheep_crust; finished_leather | Mass | kg | Retain supplier area or piece counts as auxiliary records. Obtain traceable same-lot paired mass and area/count measurements at the declared moisture and thickness; only these observations support a mass conversion. Never impose a generic kg/m2 or kg/skin coefficient or change a public flow property to Mass. |
| electricity_units | electricity_lv; electricity_mv | Net calorific value | MJ | Preserve referenced property `93a60a56-a3c8-11da-a746-0800200c9a66` and energy unit group `93a60a57-a3c8-11da-a746-0800200c9a66`. Collect kWh then use exactly 1 kWh = 3.6 MJ; no fuel mass or heating-value surrogate. |
| moisture_state | reference product | Mass | kg | Reference mass includes moisture at declared acceptance condition; it is not oven-dry collagen mass. Record moisture fractions separately and reconcile evaporation; no automatic dry-mass redefinition. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | foreground | Include reception, storage, handling, all mechanical softening passes, trimming, quality grading, rework, pack-out, extraction and attributable site electricity. Mechanical finishing is distinct from upstream wet crust production [assomac-finishing; goldpanel-production]. | assomac-finishing; goldpanel-production |
| boundary_upstream | upstream | Link purchased crust to a compatible supplier dataset including its actual animal production, slaughter/skin recovery, preservation, unhairing, tanning, retanning, dyeing, fat-liquoring and drying scope; disclose any upstream gap. Do not repeat those burdens in the finishing foreground or claim complete cradle-to-gate from this foreground alone. | goldpanel-production |
| boundary_water | water and releases | No deliberate water input, wet washing or wet wastewater generation belongs to the defined dry route. Disclose moisture entering in crust, moisture retained in accepted leather, and measured evaporative loss; distinguish it from liquid effluent. Actual wet cleaning or conditioning makes a route extension necessary, with separate technosphere water, effluent and measured direct-release rows; never replace effluent by water-resource elementary flows. | assomac-finishing |
| boundary_release | air and waste | Collected chrome-bearing leather fibre dust and trimmings are technosphere waste transfers. Airborne particulate and evaporated water are separate conditional environmental exchanges, only supported by measurement or an independently closed moisture balance; no mandatory chromium, solvent or combustion emission is inferred. Declare actual receiving subcompartment and downstream treatment. | assomac-finishing |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased already conditioned, dyed, fat-liquored, chrome-tanned dry sheep crust; no on-site wet processing |
| starting_condition_role | Foreground manufacturing input after upstream crust preparation |
| product_classification_scope | A narrower dry mechanical sheep-leather route within CPC 29130 |
| recursive_input_rule | Already finished same-category leather rework must retain the previous production dataset and separate rework demand; do not count it as virgin crust or recurse indefinitely |
| upstream_dataset_requirement | Compatible conditioned sheep crust, electricity and actual packaging supply; matched waste treatment; disclose missing animal and tannery stages |
| disclosure | Species, tannage, dye/fat-liquor, moisture, partial boundary, on-site passes, direct emissions, voltage, treatment and supplier upstream scope |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| reception | Dyed crust reception and handling | required | All covered lots | foreground manufacturing | per 1 kg reference flow |
| softening | Staking and dry mechanical softening | required | Staking required by selected route; dry milling only when actually used, without added chemicals | foreground manufacturing | per 1 kg reference flow |
| acceptance | Trimming, grading, acceptance and pack-out | required | All covered lots; record carton only when used | foreground manufacturing | per 1 kg reference flow |
| utilities | Attributable electricity and extraction service | required | All covered lots; choose voltage-specific supply row by actual meter boundary | foreground manufacturing | per 1 kg reference flow |

### Process: Dyed crust reception and handling (`reception`)

#### Inputs

##### Product flows

###### Chrome-tanned dyed fat-liquored dry sheep crust leather (`dyed_sheep_crust`)

Weigh received net sheep crust for the lot; document species, tanning chemistry, dye/fat-liquor already present, moisture and thickness. Raw sheep skin, wet blue and unspecified animal leather are not equivalent incoming states.

- Selected flow: Chrome-tanned dyed fat-liquored dry sheep crust leather
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the actual attributable lot quantity using cp_material; after declared allocation, sum attributable quantities over the same homogeneous reporting pool, including wholly rejected lots and rework, then divide once by that pool’s positive accepted net reference-product kg from cp_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `goldpanel-production`

#### Outputs


### Process: Staking and dry mechanical softening (`softening`)

#### Inputs

#### Outputs

##### Waste flows

###### Collected chrome-tanned dyed sheep leather fibre dust (`captured_leather_dust`)

Conditional: actual dust extracted during dry milling, staking or handling. Weigh collector discharge at declared moisture and record chromium-bearing status and licensed destination; do not treat captured dust as an air release.

- Selected flow: Collected chrome-tanned dyed sheep leather fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the actual attributable lot quantity using cp_waste; after declared allocation, sum attributable quantities over the same homogeneous reporting pool, including wholly rejected lots and rework, then divide once by that pool’s positive accepted net reference-product kg from cp_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `assomac-finishing`

##### Elementary flows

###### Particulate matter, particle size unspecified (`particulate_air`)

Conditional: a measured total particle mass release to air with unspecified particle size and air subcompartment. Document sampling method, flow rate and duration after capture. If size fractions or urban/high-stack location are established, choose separately verified compatible identities; do not label total dust PM10 or add overlapping fractions.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the actual attributable lot quantity using cp_air; after declared allocation, sum attributable quantities over the same homogeneous reporting pool, including wholly rejected lots and rework, then divide once by that pool’s positive accepted net reference-product kg from cp_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `assomac-finishing`

###### water vapour (`water_vapour_air`)

Conditional: positive water evaporation from received leather supported by exhaust measurement or closed lot moisture balance. Identity is emission to air, unspecified subcompartment, not freshwater discharge or water extraction. No default evaporation percentage applies.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the actual attributable lot quantity using cp_moisture; after declared allocation, sum attributable quantities over the same homogeneous reporting pool, including wholly rejected lots and rework, then divide once by that pool’s positive accepted net reference-product kg from cp_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_moisture`
- Sources: `assomac-finishing`


### Process: Trimming, grading, acceptance and pack-out (`acceptance`)

#### Inputs

##### Product flows

###### Paper box (`paper_box`)

Conditional: actual cut, folded and laminated paper box used for delivery. Weigh net box mass and disclose construction; other packaging components require their own atomic rows. Keep all packaging mass outside the leather reference mass.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the actual attributable lot quantity using cp_material_acceptance; after declared allocation, sum attributable quantities over the same homogeneous reporting pool, including wholly rejected lots and rework, then divide once by that pool’s positive accepted net reference-product kg from cp_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material_acceptance`
- Sources: `goldpanel-production`

#### Outputs

##### Product flows

###### Uncoated chrome-tanned dyed sheep leather (`finished_leather`)

Accept the uncoated dyed sheep leather against the declared purchaser specification. Weigh net accepted output at documented conditioning/moisture state, excluding packaging and rejected lots.

- Selected flow: Uncoated chrome-tanned dyed sheep leather
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `goldpanel-production`

###### Downgraded uncoated chrome-tanned dyed sheep leather (`downgraded_sheep_leather`)

Conditional: a distinct saleable lower grade leaving the boundary. Record its actual quality, mass, moisture, price and buyer; internal rework is not an additional saleable output.

- Selected flow: Downgraded uncoated chrome-tanned dyed sheep leather
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the actual attributable lot quantity using cp_products; after declared allocation, sum attributable quantities over the same homogeneous reporting pool, including wholly rejected lots and rework, then divide once by that pool’s positive accepted net reference-product kg from cp_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_products`
- Sources: `goldpanel-production`

##### Waste flows

###### Chrome-tanned dyed sheep leather trimmings (`leather_trimmings`)

Conditional: actual cut-off leather transferred as waste. Weigh net mass and document composition, chromium content evidence, moisture and destination. Material sold as a co-product must be declared and allocated rather than silently assigned zero burden.

- Selected flow: Chrome-tanned dyed sheep leather trimmings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect the actual attributable lot quantity using cp_waste_acceptance; after declared allocation, sum attributable quantities over the same homogeneous reporting pool, including wholly rejected lots and rework, then divide once by that pool’s positive accepted net reference-product kg from cp_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_acceptance`
- Sources: `goldpanel-production`


### Process: Attributable electricity and extraction service (`utilities`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_lv`)

Conditional: only CN grid-average consumption mix delivered to the user at <1 kV. Meter staking, milling, handling, extraction and attributable storage/packing electricity; exclude supply already counted by the medium-voltage row. Other geography or supply requires another verified flow.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect the actual attributable lot quantity using cp_energy; after declared allocation, sum attributable quantities over the same homogeneous reporting pool, including wholly rejected lots and rework, then divide once by that pool’s positive accepted net reference-product kg from cp_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `assomac-finishing`

###### Alternating current (`electricity_mv`)

Conditional: only CN grid-average consumption mix delivered to the user at 1–35 kV. Retain the actual purchased meter boundary and allocate attributable demand. Do not count the same transformer feed again as low-voltage grid supply.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect the actual attributable lot quantity using cp_energy; after declared allocation, sum attributable quantities over the same homogeneous reporting pool, including wholly rejected lots and rework, then divide once by that pool’s positive accepted net reference-product kg from cp_mass.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `assomac-finishing`

#### Outputs


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared foreground | First segregate lots, metered equipment time and rework. Allocate shared electrical demand by measured causal equipment consumption/time and retain idle demand consistently; never use unsupported standard percentages. |  |
| allocation_products | saleable grades | Record every saleable grade and its measured mass. Prefer process subdivision or justified physical relationships; if no defensible physical relationship explains economic grading, use same-period net sales values for residual joint burdens, disclose basis and test mass allocation sensitivity. This is a declared foreground modelling choice, not a tannery-wide default or source-derived factor. |  |
| allocation_waste | leather residues | Waste status follows actual disposal/sale contract. Include waste handover and matched treatment; do not grant avoided virgin leather or energy credits inside this attributional foreground. Reworked pieces stay inside the lot until final acceptance; count their processing once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_leather | weighing and acceptance | lot; net accepted leather mass; tare; moisture; thickness; softness; grade; calibrated scale; acceptance record; reporting-pool ID; all included lot IDs; wholly rejected lots; rework links; grade-allocation ledger | Weigh accepted net leather on a calibrated scale after declared conditioning; exclude all packaging, waste and lower grades. Retain raw lot quantities, allocate genuine co-product burdens as declared, and include reference-product-attributable failed-lot quantities in the same homogeneous pool before division by its positive accepted reference-grade kg; if that total is zero, preserve absolute records and require review. | kg | each lot and relevant operating interval | declared representative production period including idle time and rework; disclose dates and exclusions | covered finishing site and matched lot | per 1 kg reference flow | calibration; lot reconciliation; raw records; uncertainty; supplier and transfer evidence |
| cp_material | reception | dyed_sheep_crust | input issue and net weighing | lot; supplier; species; incoming processing state; tannage; dye/fat-liquor evidence; material name; issued/returned mass; moisture; optional area/count; reporting-pool ID; all included lot IDs; wholly rejected lots; rework links; grade-allocation ledger | Reconcile calibrated net weighing, store issues, returns and supplier records for each atomic material; paired same-lot measurements support any area/count conversion. Retain raw lot quantities, allocate genuine co-product burdens as declared, and include reference-product-attributable failed-lot quantities in the same homogeneous pool before division by its positive accepted reference-grade kg; if that total is zero, preserve absolute records and require review. | kg | each lot and relevant operating interval | declared representative production period including idle time and rework; disclose dates and exclusions | covered finishing site and matched lot | per 1 kg reference flow | calibration; lot reconciliation; raw records; uncertainty; supplier and transfer evidence |
| cp_material_acceptance | acceptance | paper_box | input issue and net weighing | lot; supplier; material name; paper/board and packaging construction; supplied state; issued/returned net mass; moisture; box count; tare; reporting-pool ID; all included lot IDs; wholly rejected lots; rework links; grade-allocation ledger | Reconcile calibrated net weighing, store issues, returns and supplier records for each atomic material; paired same-lot measurements support any area/count conversion. Retain raw lot quantities, allocate genuine co-product burdens as declared, and include reference-product-attributable failed-lot quantities in the same homogeneous pool before division by its positive accepted reference-grade kg; if that total is zero, preserve absolute records and require review. | kg | each lot and relevant operating interval | declared representative production period including idle time and rework; disclose dates and exclusions | covered finishing site and matched lot | per 1 kg reference flow | calibration; lot reconciliation; raw records; uncertainty; supplier and transfer evidence |
| cp_energy | utilities | electricity_lv; electricity_mv | electricity metering | lot; geography; purchased voltage; meter boundary; kWh opening/closing; operating/idle time; route; equipment; rework; allocation basis; reporting-pool ID; all included lot IDs; wholly rejected lots; rework links; grade-allocation ledger | Read calibrated submeter or reconcile site meter to actual equipment load/time; retain losses inside the purchased boundary without double counting. Convert kWh to MJ at 3.6. Retain raw lot quantities, allocate genuine co-product burdens as declared, and include reference-product-attributable failed-lot quantities in the same homogeneous pool before division by its positive accepted reference-grade kg; if that total is zero, preserve absolute records and require review. | MJ | each lot and relevant operating interval | declared representative production period including idle time and rework; disclose dates and exclusions | covered finishing site and matched lot | per 1 kg reference flow | calibration; lot reconciliation; raw records; uncertainty; supplier and transfer evidence |
| cp_waste | softening | captured_leather_dust | waste weighing and transfer | lot; separate dust/trimming mass; moisture; chromium evidence; container tare; transfer date; receiver; treatment; reporting-pool ID; all included lot IDs; wholly rejected lots; rework links; grade-allocation ledger | Weigh each waste separately on calibrated scale, reconcile collector/trimming logs and actual transfer records; prohibit mixing with liquid effluent. Retain raw lot quantities, allocate genuine co-product burdens as declared, and include reference-product-attributable failed-lot quantities in the same homogeneous pool before division by its positive accepted reference-grade kg; if that total is zero, preserve absolute records and require review. | kg | each lot and relevant operating interval | declared representative production period including idle time and rework; disclose dates and exclusions | covered finishing site and matched lot | per 1 kg reference flow | calibration; lot reconciliation; raw records; uncertainty; supplier and transfer evidence |
| cp_waste_acceptance | acceptance | leather_trimmings | waste weighing and transfer | lot; separate dust/trimming mass; moisture; chromium evidence; container tare; transfer date; receiver; treatment; reporting-pool ID; all included lot IDs; wholly rejected lots; rework links; grade-allocation ledger | Weigh each waste separately on calibrated scale, reconcile collector/trimming logs and actual transfer records; prohibit mixing with liquid effluent. Retain raw lot quantities, allocate genuine co-product burdens as declared, and include reference-product-attributable failed-lot quantities in the same homogeneous pool before division by its positive accepted reference-grade kg; if that total is zero, preserve absolute records and require review. | kg | each lot and relevant operating interval | declared representative production period including idle time and rework; disclose dates and exclusions | covered finishing site and matched lot | per 1 kg reference flow | calibration; lot reconciliation; raw records; uncertainty; supplier and transfer evidence |
| cp_air | softening | particulate_air | measured release | lot; sampling method; particulate size scope; concentration; exhaust flow; duration; capture state; air subcompartment; uncertainty; reporting-pool ID; all included lot IDs; wholly rejected lots; rework links; grade-allocation ledger | Measure concentration and matched exhaust flow/time after dust capture; integrate actual release and document location. No particulate identity implies a mandatory release. Retain raw lot quantities, allocate genuine co-product burdens as declared, and include reference-product-attributable failed-lot quantities in the same homogeneous pool before division by its positive accepted reference-grade kg; if that total is zero, preserve absolute records and require review. | kg | each lot and relevant operating interval | declared representative production period including idle time and rework; disclose dates and exclusions | covered finishing site and matched lot | per 1 kg reference flow | calibration; lot reconciliation; raw records; uncertainty; supplier and transfer evidence |
| cp_moisture | softening | water_vapour_air | moisture balance or exhaust measurement | lot; received wet mass; accepted mass; lower-grade mass; dust/trimming mass; respective moisture fractions; stock change; exhaust vapour measurement; uncertainty; reporting-pool ID; all included lot IDs; wholly rejected lots; rework links; grade-allocation ledger | Measure mass and moisture separately for all lot outputs and stocks; independently reconcile the moisture balance or use calibrated exhaust vapour measurement. Unclosed moisture cannot be assumed evaporation. Retain raw lot quantities, allocate genuine co-product burdens as declared, and include reference-product-attributable failed-lot quantities in the same homogeneous pool before division by its positive accepted reference-grade kg; if that total is zero, preserve absolute records and require review. | kg | each lot and relevant operating interval | declared representative production period including idle time and rework; disclose dates and exclusions | covered finishing site and matched lot | per 1 kg reference flow | calibration; lot reconciliation; raw records; uncertainty; supplier and transfer evidence |
| cp_products | acceptance | downgraded_sheep_leather | saleable grade and valuation | lot; grade; net mass; moisture; actual sales value; buyer; rework history; reporting-pool ID; all included lot IDs; wholly rejected lots; rework links; grade-allocation ledger | Weigh each saleable lower grade and reconcile same-period sales invoices; separate internal rework from actual outgoing products. Retain raw lot quantities, allocate genuine co-product burdens as declared, and include reference-product-attributable failed-lot quantities in the same homogeneous pool before division by its positive accepted reference-grade kg; if that total is zero, preserve absolute records and require review. | kg | each lot and relevant operating interval | declared representative production period including idle time and rework; disclose dates and exclusions | covered finishing site and matched lot | per 1 kg reference flow | calibration; lot reconciliation; raw records; uncertainty; supplier and transfer evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_normalization | all inventory rows | Define a homogeneous reporting pool by site, period, species, incoming processing state, conditioning and reference-grade specification; retain individual lot records and use allocation_subdivide/allocation_products for genuinely distinct saleable grades. For each row, sum the reference product’s attributable measured or calculated quantities across all included lots, including wholly rejected lots, idle activity and rework, in its native unit; divide once by the same pool’s accepted reference-grade net kg from cp_mass. Count finally accepted reworked output once; lower grades, packaging and waste never enter that denominator. Never divide a zero-output lot separately or discard its attributable burdens. The pool denominator must be positive; if the whole pool has no accepted reference product, retain absolute inventories and any evidenced co-product allocation, report reference-product normalization unavailable and require review, with no fabricated mass or zero burden. | cp_mass; applicable collection protocol | exchange per 1 kg reference flow |  |
| meter_conversion | electricity_lv; electricity_mv | Convert allocated kWh readings to MJ using the exact unit identity 1 kWh = 3.6 MJ, then aggregate all included lots and divide by the same positive accepted reference-grade kg of the declared reporting pool, retaining wholly rejected-lot and rework electricity. | cp_energy; cp_mass | MJ per 1 kg reference flow |  |
| release_integration | particulate_air | Integrate matched measured concentration × exhaust volume over the sampled operating period, convert to kg with explicit units, and reconcile unsampled periods before normalization. | cp_air; cp_mass | kg particulate per 1 kg reference flow |  |
| moisture_reconciliation | water_vapour_air | Subtract measured retained-output moisture and net stock moisture increase from received moisture; require independent closure and no other liquid exits before assigning the positive remainder to atmospheric vapour. Otherwise use direct exhaust measurement or retain a disclosed data gap. | cp_moisture; cp_mass | kg evaporated water per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Verify species, processing state, chemical composition, public UUID reference property and official Chinese flow name; no rawhide/crust/finished-leather substitution. | Supplier declarations; direct flow/property/unit records |
| quality_measurement | foreground | Use actual recipes and conditions from supplier/site records; no invented tanning recipe, energy, loss, net yield, quality or service life. Confirm temporal representativeness and material/dry-solids/moisture reconciliation. | Calibration; acceptance tests; mass balances; raw dates; uncertainty |
| quality_completeness | boundary | Record all actual auxiliaries and packaging as additional atomic exchanges. Distinguish absent activity from unmeasured activity; disclosed gaps do not become zero. Wet/coated routes invalidate applicability. | Route audit; procurement ledger; waste/air records; missing-data register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | Confirm sheep/lamb origin, received dyed fat-liquored chrome crust, no deliberate water addition, no new wet processing, thermal drying or coating; otherwise this PCR is not applicable. | un-cpc-2025; goldpanel-production |
| validate_reference | finished_leather | Require exact reference-product/output-row name match, positive measured accepted reference-grade net kg for the same reporting pool, declared moisture and all qualifiers; zero-output lots remain included in the numerator. Check the same 1 kg reference basis in both languages and all collection protocols. If the entire pool has zero reference-grade output, retain absolute quantities and report normalization unavailable for review. |  |
| validate_balance | foreground | Reconcile received solids and water with accepted output, lower grades, residues, evaporation and stock changes, using measured uncertainty. No invented universal yield or tolerance; unexplained imbalance remains a finding. |  |
| validate_identity | UUID rows | Recheck published state-100 identity, reference property/unit group, voltage/geography and air subcompartment. Blank UUIDs remain explicit identity gaps; neither candidate check nor identity verification grants scientific approval. |  |
| validate_completeness | dataset | Require actual quantities and protocols for applicable rows, evidence for non-applicable rows, allocation basis and uncertainty disclosure, matched upstream datasets and treatment destinations. Never call this partial foreground complete cradle-to-gate. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground dry mechanical sheep-leather finishing process |
| downstream_use | secondary_dataset; background_dataset, after independent review and supplier linking |
| allowed_use | Matching uncoated dyed chrome-tanned sheep leather finishing, with actual moisture and upstream state |
| excluded_use | Whole CPC coverage; integrated tanning; composition leather; coated or other-species leather; product comparison or consumer lifetime without further review |
| required_metadata | All reference qualifiers; lot dates; net output; route; voltage; supplier upstream stages; allocation; moisture; waste and release compartments |
| required_quality_disclosure | Partial foreground boundary; data gaps and blank identities; actual collection coverage; uncertainty; missing upstream animal/tannery stages; review state |
| update_trigger | Species, supplier state, tannage, formulation, moisture, route, coating, voltage or significant collection changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, printed p. 134. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification boundary only; subclass has a title without further process explanation |
| assomac-finishing | handbook | Assomac, A03 - Finishing machinery, undated publisher page, A03.01–A03.03, A03.08. https://assomac.it/en/technological-guide/tanning-machinery/a03-finishing-machinery/ | Qualitative mechanical softening, controlled moisture and extraction options; no universal sequence or numeric performance; dry route is a declared subset |
| goldpanel-production | handbook | GoldPanel Group, Leather Tannery Department Production Process, undated publisher page; Dry Crusting, Finishing, Quality Inspection, Types of Leather. https://goldpanelgroup.com/page/site-page/leather-tannery-department-production-process.html | Sheep nappa manufacturing context, upstream dyed-crust state and product-dependent finishing/grade/rework; manufacturer-specific evidence, not industry default |
