---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.nylon-six-cotton-weft-greige-tyre-cord-fabric
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Nylon 6 cotton-weft greige tyre cord fabric manufacture


## 1. Scope and Applicability

This method covers undipped greige tyre reinforcement fabric made on site from already manufactured high-tenacity nylon 6 multifilament yarn, plied/cabled into cord warp and interlaced with sparse, undyed unsized 100% cotton weft. The representative product is a buyer-specified roll of greige fabric supplied for later adhesion treatment. Cording, cord placement and the undipped endpoint distinguish it from ordinary high-tenacity woven PET fabric. Sources: `un-cpc-2025`; `century-nylon-cord`.

Exclude nylon 66 and other polyamides, PET, rayon, aramid, steel cord, hybrid cord, poly-cotton weft, purchased pre-cabled-cord-only routes, on-site polymerization/spinning/drawing, sizing, dyeing, scouring, adhesion dipping (RFL or alternatives), hot stretching/heat-setting, rubber calendering, tyre building/vulcanization, use and disposal. Gas-fired heating, direct water abstraction and on-site wastewater treatment require an explicitly extended method, not silent inclusion. Purchased yarn spin finish is declared, not confused with adhesive dip. This narrow scope does not establish complete CPC coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.nylon-six-cotton-weft-greige-tyre-cord-fabric |
| classification_refs | CPC 3.0: 27996; narrower |
| covered_products | Undipped nylon 6 cord-warp, 100% cotton-weft greige tyre reinforcement fabric |
| excluded_products | Exclude nylon 66 and other polyamides, PET, rayon, aramid, steel cord, hybrid cord, poly-cotton weft, purchased pre-cabled-cord-only routes, on-site polymerization/spinning/drawing, sizing, dyeing, scouring, adhesion dipping (RFL or alternatives), hot stretching/heat-setting, rubber calendering, tyre building/vulcanization, use and disposal. Gas-fired heating, direct water abstraction and on-site wastewater treatment require an explicitly extended method, not silent inclusion. Purchased yarn spin finish is declared, not confused with adhesive dip. This narrow scope does not establish complete CPC coverage. |
| representative_product | Buyer-specified roll with plied nylon 6 cord warp and sparse cotton weft; no invented denier or twist |
| production_route | Purchased drawn high-tenacity yarn -> ply twisting/cabling -> warping/beaming -> weaving -> inspection -> packing |
| market_state | Undipped greige roll, declared moisture-conditioning state, factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply textile reinforcement precursor for subsequent tyre-cord adhesion treatment |
| How much | 1 kg net accepted greige fabric |
| How well | Declared nylon 6 grade, cotton purity, ply/twist, cord spacing, width, conditioned mass per area and buyer acceptance tests; no dipped adhesion equivalence |
| How long or cycle | One manufacturing campaign through release; no service life or tyre durability assigned |
| reference_flow_link | finished_greige |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Nylon 6 cotton-weft greige tyre cord fabric |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | nylon 6 polymer and yarn grade; yarn finish; 100% cotton unsized undyed weft; linear density; ply count; twist direction and twist; cord spacing; weave; usable width; conditioned mass per area; moisture procedure; acceptance tests; greige undipped state; geography; period; site operations; packaging |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net accepted textile mass measured after declared conditioning. Exclude core/wrap, rejected cloth and samples. Preserve nylon/cotton moisture basis. |
| energy_property | cord_electricity; weave_electricity; release_electricity; humidity_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve public energy reference and unit group; 1 kWh = 3.6 MJ by the verified unit definition. Do not change to Mass. |
| water_mass | tap_water; humidity_drain; water_vapour | Mass | kg | Use kg on the public mass basis; volume-only water records require measured density at actual state, retained with cp_water. Water vapour mass is not liquid wastewater. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased fully spun/drawn nylon 6 high-tenacity yarn and ready-to-weave cotton yarn received; no polymer chips in foreground |
| starting_condition_role | upstream product input |
| product_classification_scope | Only the stated nylon 6/cotton greige subset within tyre cord classification |
| recursive_input_rule | A same-category fabric input crossing the site gate is one upstream product input; do not recursively regenerate embedded production. Such a purchased-fabric-only route is outside this method. Internal cord/cloth transfers cancel at aggregate site level. |
| upstream_dataset_requirement | Link representative supplier yarn, cotton spinning, electricity, water, packaging and off-site waste treatment datasets for expanded models. Cotton agriculture and polymer synthesis are upstream, not weaving activity. |
| disclosure | Declare operations, supplied grades, inherited finish, omitted routes, internal transfer, conditioning, utilities, controls and waste destinations. Foreground-only output is not complete cradle-to-gate. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| sb_route | foreground | Include cording, preparation, weaving, inspection and packing, plus actual electric air compression, extraction and humidification; exclude dip/heat-set/rubber processes from this declared greige route. | century-nylon-cord |
| sb_accounting | all inventory rows | Measure external exchanges and internal transfers separately; add actual auxiliary chemicals, filters or packaging as separate atomic rows if consumed. No collection row can stand for an unspecified material list. |  |
| sb_treatment | waste outputs | This route sends liquid purge and solid wastes off site. Disclose destination and upstream/background linkage; do not double count treatment. Capital equipment is separately disclosed as included or excluded by study goal. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cording | Yarn reception, ply twisting and cabling | required | Always; include winding and actual twist sequence | foreground manufacture | per 1 kg reference flow |
| weaving | Warp preparation and sparse-weft weaving | required | Always; include beaming, tension control, air compression and extraction where present | foreground manufacture | per 1 kg reference flow |
| release | Inspection, net weighing and packing | required | Always; include destructive sampling losses | foreground manufacture | per 1 kg reference flow |
| humidification | Electric room humidification | conditional | Only when actual electric humidification uses purchased tap water | foreground manufacture | per 1 kg reference flow |

All stage quantities use the same final accepted-mass denominator. Internal cord and cloth rows preserve stage balances but cancel on aggregation. Compressors are modelled by their electricity; do not add purchased compressed air for the same on-site compressor. Captured lint needs a composition-specific waste row if present; it is not residual airborne particles.

### Process: Yarn reception, ply twisting and cabling (`cording`)

#### Inputs

##### Product flows

###### High-tenacity nylon 6 multifilament yarn (`nylon_yarn`)

Receive already spun and drawn, undyed yarn with declared spin finish. Trace polymer, linear density, tenacity test and supplier lot; polymerization and spinning are upstream.

- Selected flow: High-tenacity nylon 6 multifilament yarn
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

###### Alternating current (`cord_electricity`)

Use this public identity only for CN user-side grid-average supply below 1 kV; other geography, voltage, own generation or contractual supply needs its matching identity. Record stage meters and attributable compressor/ventilation consumption once.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `century-nylon-cord`

###### Mineral lubricating oil (`mineral_oil`)

Conditional on mineral-oil machine maintenance; collect oil grade, stock change and consumption. Do not treat inherited spin finish as a second purchase.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Untreated plied nylon 6 tyre cord (`cord_output`)

Internal transfer after ply twisting/cabling to specified twist direction, ply count and twist; measure transferred net mass.

- Selected flow: Untreated plied nylon 6 tyre cord
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

##### Waste flows

###### Nylon 6 yarn offcuts (`nylon_offcuts`)

Segregated nylon 6 yarn waste leaving cording; internal usable yarn returns remain internal and are not a waste export.

- Selected flow: Nylon 6 yarn offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

###### Used lubricating oil (`spent_oil`)

Conditional on separately collected used machine lubricating oil; record contamination and off-site treatment destination. Do not combine with aqueous coolant.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

##### Elementary flows

### Process: Warp preparation and sparse-weft weaving (`weaving`)

#### Inputs

##### Product flows

###### Untreated plied nylon 6 tyre cord (`cord_input`)

Internal transfer matching cord_output; warping/beaming and controlled-tension feeding are included. Do not attach a second upstream yarn dataset.

- Selected flow: Untreated plied nylon 6 tyre cord
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

###### Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton (`cotton_weft`)

Use only with supplier-confirmed 100% cotton, undyed unsized weft, not sewing thread. The public category is broader; retain the actual composition, count and supplied state in metadata and upstream dataset selection.

- Selected flow: Cotton yarn (other than sewing thread), containing 85% or more by weight of cotton `526fe0a1-be6d-4384-b609-4ca604628ec4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

###### Alternating current (`weave_electricity`)

Use this public identity only for CN user-side grid-average supply below 1 kV; other geography, voltage, own generation or contractual supply needs its matching identity. Record stage meters and attributable compressor/ventilation consumption once.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `century-nylon-cord`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Uninspected nylon 6 cotton-weft greige tyre cord fabric (`greige_output`)

Record internal roll transfer before final inspection. The sparse cotton weft holds nylon cord warp placement; no adhesion dipping or rubber coating is included.

- Selected flow: Uninspected nylon 6 cotton-weft greige tyre cord fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

##### Waste flows

###### Undyed cotton weft yarn offcuts (`cotton_offcuts`)

Segregate pure cotton weft cuttings from nylon yarn and mixed cloth scrap; measure each destination.

- Selected flow: Undyed cotton weft yarn offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

##### Elementary flows

###### Particulate matter, particle size unspecified (`air_particles`)

Conditional on measured direct residual particulate release after controls to unspecified air with no supported size fraction; retained dust is waste, not an air release. If urban/non-urban compartment or PM size is known, use its matching row identity; no mandatory emission factor.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`
- Sources: `century-nylon-cord`

### Process: Inspection, net weighing and packing (`release`)

#### Inputs

##### Product flows

###### Uninspected nylon 6 cotton-weft greige tyre cord fabric (`greige_input`)

Internal transfer matching greige_output; inspect cord spacing, defects, width, twist and tensile/elongation performance against buyer specification.

- Selected flow: Uninspected nylon 6 cotton-weft greige tyre cord fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

###### Alternating current (`release_electricity`)

Use this public identity only for CN user-side grid-average supply below 1 kV; other geography, voltage, own generation or contractual supply needs its matching identity. Record stage meters and attributable compressor/ventilation consumption once.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `century-nylon-cord`

###### Cardboard tube or Paper core (`paper_core`)

Conditional on paperboard roll cores actually supplied; weigh cores separately from textile. Reused cores use documented replacement/turnover records, not invented life.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

###### Polyethylene film (`pe_wrap`)

Conditional on polyethylene wrap; document resin, film grade, virgin/recycled share and packing use. PET film and multilayer laminates are different exchanges.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Nylon 6 cotton-weft greige tyre cord fabric (`finished_greige`)

Accepted net textile at declared conditioning state, excluding packaging and rejected rolls; no rubber-adhesion or tyre-life claim.

- Selected flow: Nylon 6 cotton-weft greige tyre cord fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `century-nylon-cord`

##### Waste flows

###### Nylon 6 cotton-weft greige fabric scrap (`fabric_scrap`)

Measure rejected mixed nylon 6/cotton cloth and destructive-test pieces sent for treatment. Keep nylon and cotton fractions explicit; do not assign pure-nylon scrap identity.

- Selected flow: Nylon 6 cotton-weft greige fabric scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_exchange.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_exchange`
- Sources: `century-nylon-cord`

##### Elementary flows

### Process: Electric room humidification (`humidification`)

#### Inputs

##### Product flows

###### Tap water (`tap_water`)

Conditional on purchased treated tap water for electric room humidification; preserve public Mass reference. If collected by volume, measure source-specific density and convert volume to kg; do not use a groundwater resource identity.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `century-nylon-cord`

###### Alternating current (`humidity_electricity`)

Use this public identity only for CN user-side grid-average supply below 1 kV; other geography, voltage, own generation or contractual supply needs its matching identity. Record stage meters and attributable compressor/ventilation consumption once.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: `century-nylon-cord`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Humidifier purge wastewater (`humidity_drain`)

Conditional on an actual separate liquid purge sent to external treatment; measure mass, chemistry and receiving treatment. No wet dyeing or dipping liquor is included.

- Selected flow: Humidifier purge wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `century-nylon-cord`

##### Elementary flows

###### water vapour (`water_vapour`)

Conditional on quantified net immediate vapor release from humidification to unspecified air. Reconcile water intake, purge, textile moisture and retained stock; do not assume all purchased water evaporates. Specific receiving air compartments require their matching identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exchange quantity per 1 kg reference flow; use cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `century-nylon-cord`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| alloc_subdivision | shared operations | Use stage submetering and measured machine time/load records to separate products first. A shared-meter share must have factory evidence, total shares sum to one, and sensitivity disclosed; mass allocation is not assumed for unlike twisting/weaving routes. |  |
| alloc_scrap | scrap; rejects; internal returns | Assign actual rejected-product and sampling burdens to accepted production of the campaign. Do not give scrap an avoided-virgin-material credit automatically. If sold scrap becomes a co-product, document status, subdivision and physical/economic allocation basis with measured quantities/prices and governing programme; identify the change of role. Internal return is not a co-product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | release | finished_greige | weighing | batch; roll; gross and tare; accepted net kg; conditioning; width; mass per area; acceptance; rejected kg | Calibrated weighing of conditioned accepted rolls excluding cores/wrap; reconcile acceptance and stock. Area records need actual width/length and measured conditioned mass per area, confirmed against weighing. | kg | each batch | representative full campaign and seasonal conditions | same site composition and route | per 1 kg reference flow | scale calibration; tare; acceptance; conditioning |
| cp_exchange | cording; weaving; release | atomic mass exchanges | mass balance | batch; row_id; composition; state; issued kg; returns; stock; transfer; scrap; destination | Weigh each atomic stream separately; reconcile issues, stock, internal returns, stage transfers and off-site manifests. Record oil grade, inherited finish, textile moisture and packaging separately. | kg | each batch with campaign reconciliation | same period as accepted output | same production stages | per 1 kg reference flow | weighing receipts; composition; stock; manifests |
| cp_energy | cording; weaving; release; humidification | electricity | meter | stage; kWh; meter; voltage; geography; source; shared share; compressor load | Submeter stage and allocated auxiliary electricity; match supply voltage/geography. Reconcile transformer/meter boundary and do not duplicate compressor or room conditioning consumption. | kWh | continuous metering linked to batches | same full campaign | same site meter boundary | per 1 kg reference flow | meter calibration; bills; allocation load logs |
| cp_releases | weaving | residual airborne particles | monitoring | release point; controls; concentration; air flow; operating duration; size method; compartment | Use representative measured residual outlet release and actual operating time; retain measurement integration and capture balance. No unmeasured factor or invented mandatory dust release. | kg | representative monitoring and changed conditions | same output period | actual release points | per 1 kg reference flow | method; calibration; control conditions; uncertainty |
| cp_water | humidification | tap water; purge; vapour | water balance | intake mass or volume; measured density; purge kg; evaporation kg; textile moisture change; stock; period | Meter tap water and purge separately; volume-to-mass uses measured density at actual state. Determine net vapour by documented balance or measurement including textile retention; retain uncertainty. | kg | each campaign and seasonal changes | same output period | actual humidification equipment only | per 1 kg reference flow | water meter; measured density; purge test; moisture balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | Divide each attributable campaign exchange by accepted net textile mass in kg for per 1 kg reference flow. Keep original numerator unit; balance intermediate transfer pairs before site aggregation. | cp_output; cp_exchange; cp_energy; cp_releases; cp_water | normalized row quantity |  |
| mass_from_volume | tap_water; humidity_drain | Convert measured volume to mass using measured liquid density at actual collection state; preserve source volume, density and uncertainty, without a default 1000 kg/m3. | cp_water | measured water mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_product | reference product | Prove nylon 6, drawn high-tenacity yarn, ply/twist construction, pure cotton weft, absence of dip/heat-set/rubber, conditioning and buyer acceptance. Do not use marketing durability claims as lifetime. | cp_output; cp_exchange; century-nylon-cord |
| dq_completeness | all inventory rows | Reconcile nylon and cotton separately, finish inherited with yarn, internal returns, final cloth, samples, scrap and moisture. Capture actual unlisted auxiliaries as atomic rows and disclose coverage gaps. | cp_exchange; cp_output |
| dq_representative | all records | Declare site, technology, full campaign, seasonal humidity, meter calibration and uncertainty. Missing measurements remain missing; do not fill with this PCR as a default recipe. | cp_energy; cp_water; cp_releases |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| val_scope | dataset | Reject claimed whole-classification, dipped, PET/rayon/nylon66 or cradle-to-gate completeness on this foreground-only method. Qualifiers and actual included stages are required. | un-cpc-2025; century-nylon-cord |
| val_mass | all inventory rows | Require positive accepted net mass, consistent conditioning and same-period denominator; check nylon/cotton balance and internal transfer cancellation, packaging exclusion and no duplicate upstream yarn burdens. |  |
| val_identity | flow identities | Unresolved UUIDs require explicit row-specific review; no silent generic substitution. Match public flow type, reference property, unit group and environmental subcompartment, including immediate versus long-term releases. |  |
| val_quantities | foreground records | No unsupported temperature, recipe, energy, loss, yield or use-life defaults. Separate captured waste from direct release; distinguish purchased water from resource abstraction and liquid purge from vapour. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared nylon 6/cotton greige conversion foreground for a later dipping/tyre model; supplier and treatment linkages may extend the system explicitly |
| excluded_use | Dipped adhesion performance, tyre life comparison, fibre/polymer manufacture, complete CPC coverage or unlinked cradle-to-gate result |
| required_metadata | All reference qualifiers; site and period; process route; quantities and original units; conditioning; scope; allocation and internal transfers; upstream dataset identities; waste destinations |
| required_quality_disclosure | Missing identities/measurements, unmonitored releases, numerator/denominator uncertainty, shared-meter allocation, supplier representativeness and omitted upstream/end-of-life stages |
| update_trigger | Change of polymer, weft, finish, cord specification, supply voltage, site route, acceptance, controls, allocation or primary evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UN Statistics Division, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, p.129, 27996. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only; heading is not a complete manufacturing methodology |
| century-nylon-cord | literature | Century Enka, Nylon Tyre Cord Fabric, sections Greige Fabric, Dipped Fabric, Manufacturing process. https://www.centuryenka.com/product/nylon-tyre-cord-fabric.html | Manufacturer primary technical description: cording/weaving and greige versus dipped endpoints; qualitative route evidence only, not universal specifications or current approval. Unrelated placeholder text and historical certification claims are excluded. |
