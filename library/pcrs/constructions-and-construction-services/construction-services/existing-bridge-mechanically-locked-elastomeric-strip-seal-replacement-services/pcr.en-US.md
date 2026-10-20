---
pcr_id: pcr.existing-bridge-mechanically-locked-elastomeric-strip-seal-replacement-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing bridge mechanically locked elastomeric strip-seal replacement services

## 1. Scope and Applicability

This PCR covers one maintenance intervention replacing the continuous factory-made mechanically locked elastomeric gland in an existing sound single-gap bridge expansion joint. Retain the compatible steel rails, headers, anchors and bridge structure. Remove the failed gland, clean and qualify the rail cavities, install the matched gland with specified lubricant adhesive, close actual defects and hand back the complete joint. The representative route is an L2-family gland on SSPA or SSCM rails. The chosen single-gap subcategory excludes the modular systems that can also use an L2 gland.

Exclude new rails, headers, anchors or structural bridge work; modular multi-gap reconstruction; field-vulcanised splices or independent seal manufacture; cast concrete or elastomeric-concrete headers; compression-only, pourable and foam seals; and future bridge operation. Major host defects reject this route and require explicitly scoped broader work. Resources already consumed discovering a rejected host remain in the declared intervention accounting; they do not create accepted length. Manufacturer instructions support preparation and seating; actual project/owner criteria govern permission to work, required tests and maintenance handback.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-bridge-mechanically-locked-elastomeric-strip-seal-replacement-services |
| classification_refs | CPC 3.0 54221; narrower than General construction services of bridges and elevated highways |
| covered_products | Accepted replacement of a matched continuous gland in sound retained single-gap bridge joint rails |
| excluded_products | New bridge/joint construction; rail/header/anchor renewal; multi-gap reconstruction; field splicing; manufactured gland product alone; foam/compression/pourable seals |
| representative_product | L2-family factory gland matched to retained SSPA or SSCM rails, at authorised maintenance handback |
| production_route | Failed gland extraction and cavity preparation/qualification -> matched gland/adhesive integration -> complete-joint inspection, actual required test and handback |
| market_state | Completed maintenance service on an identified existing joint; supplied factory gland and liquid adhesive are inputs, not the reference service |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mechanically locked elastomeric gland replacement in an identified retained sound single-gap bridge expansion joint |
| How much | 1 m of accepted replacement along the measured as-built joint/seal centreline; actual upturns and factory mitres are included in the declared geometry |
| How well | Matched profile, movement duty, gap and temperature; clean qualified channels; both lugs fully seated without twist, stretch or damage; endpoints/mitres/upturns and cleanup accepted; actual required inspection/test criteria passed |
| How long or cycle | One complete intervention from protected access and removal through authorised maintenance handback, including repeats and defect closure; no promised future seal lifetime. Declare work periods and complete equipment-life phases separately. |
| reference_flow_link | `accepted_gland_replacement` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted mechanically locked bridge strip-seal gland replacement service |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | bridge/joint ID; chainages and measured seal-centreline geometry; gland/rail profile and movement duty; host condition; gap mm and temperature °C; adhesive product/batch and instruction revision; work periods; actual test/inspection criteria and responsibility; handback state |

Accepted total length L is the complete joint replacement length measured once after acceptance. Divide all attributable intervention quantities by L. A one-metre result is an intensity of an accepted complete joint, never permission to hand back a partly leaking joint. Different profiles or movement duties require separate strata and disclosed comparability.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_length | accepted_gland_replacement | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Measure actual accepted seal centreline L with factory mitre/upturn geometry; repeated seating and parallel sides never multiply L. Full-joint acceptance is a gate, not a fractional output credit. |
| handoff_length | qualified_rails_transfer; qualified_rails_input | Length | m | Pair transfer IDs and actual prepared channel coverage. A service length denotes one joint with both cavities qualified, not twice the length for two rails; do not force incomplete internal coverage to the final reference. |
| material_mass | gland_supply; adhesive_supply; material_returns; removed_gland_waste; gland_offcuts | Mass | kg | Record gross net-of-tare quantities before outward returns. Profile-specific measured mass-per-length may convert actual gland length to mass only with batch/profile evidence; no generic rubber density or elongation assumption. |
| transport_basis | prepare_transport; install_transport | mass*distance | kg*km | Sum actual cargo mass kg times actual loaded-leg km per identified service; preserve empty-leg treatment and provider boundary; convert t*km only with verified factor1000. |
| condition_units | joint qualification and acceptance | Actual measured condition | mm; °C; h; actual test unit | Record opening, ambient/pavement temperature, timing and any required test quantity with units, tolerances and current approved instruction/owner source. L2 page2inch ease minimum is model-specific guidance, not a universal gap, setting or performance factor. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing sound single-gap bridge joint with failed replaceable gland; retained rails/header/anchors and structure confirmed compatible and serviceable; actual access/protection/work criteria declared |
| starting_condition_role | Retained host stock and permission boundary; old asset manufacture is outside this incremental maintenance service |
| product_classification_scope | Narrower maintenance subcategory within CPC3.0 54221; no assertion of complete leaf coverage |
| recursive_input_rule | A purchased same-category replacement subcontract is bounded by joint/length, provider gate and included materials/energy/wastes/capital. Use once or disaggregate into owned operations; never recursively add the same intervention. |
| upstream_dataset_requirement | Actual compatible factory gland, specified supplied adhesive/cleaner, energy and equipment/service datasets with declared supplier gate, geography, technology, period, packaging and transport coverage |
| disclosure | Host condition and retained components; actual preparation method; factory geometry; provider boundaries; all job periods, failed work, waste destination and required test/handback responsibility |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| retained_host | both nodes | Include incremental removal, preparation, actual minor sharp-edge/debris work, integration, protection, transport, testing, cleanup and defects. No full-new-bridge/joint charge or avoided virgin-rubber/replacement credit. Major host damage exits this scope explicitly. | dsbrown-strip-seal-replacement-2024; dsbrown-l2-installation-2024 |
| qualification_gate | rail_qualification | Input is failed gland within retained rails. Output is both clean unobstructed cavities checked at splices/edges and qualified for actual compatible profile/gap/weather; record removal and conditional abrasive cleaning. Contaminated cavities return within this node; damaged host stops integration. | dsbrown-strip-seal-replacement-2024; dsbrown-l2-installation-2024 |
| integration_gate | gland_integration | Inputs are qualified retained cavities, matched factory gland and specified lubricant adhesive. Integrate progressively on both sides without twist; fit actual factory mitres/upturns/endpoints; remove excess adhesive and tape. Only accepted complete joint exits; failed seating returns to this node or qualification. Actual owner-required watertightness test has declared method/threshold/responsibility. | dsbrown-strip-seal-replacement-2024; dsbrown-l2-installation-2024 |
| utility_ownership | both nodes | Own actual compressor, pulling/cutting/installation and test/protection resources once. Ambient air compressed on site has compressor energy; a purchased compressed-air product has a declared gate. Do not count a bundled compressor service plus its included energy again. | dsbrown-strip-seal-replacement-2024 |
| chemical_custody | both nodes | Separate supplied liquid, retained/applied material, real product return, collected chemical waste and actual species release. SDS composition is not an emission factor; no automatic VOC, decomposition products or water-only adhesive. Select actual cleaner; manufacturer solvent examples do not mandate toluene. | dsbrown-1520-sds-2020; dsbrown-strip-seal-replacement-2024 |
| assets_periods | both nodes | Include complete-life provision of shared extraction/insertion/air/blast/measuring/test/traffic-control assets across every consuming node, job and period. Manufacture, maintenance, replacement and EOL are covered once with observed or justified prospective history/scenario; exclude duplicated direct fuel/spares already recorded. Missing evidenced life coverage or denominator blocks finalisation. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual supplied rail-cavity cleaning agent (`prepare_cleaner`)

Process / prospective direction / type: `rail_qualification` / `inputs` / `product`.

Conditional on actual chemical cleaning. Expand separately by specified cleaner formulation and supply gate; do not assume solvent is needed before installation.

- Collection subject: Actual supplied rail-cavity cleaning agent
- Flow property / unit: Mass / kg
- Amount rule: Gross net-of-container-tare supplied/issued mass before outward returns, divided by accepted L.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_materials`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`; `dsbrown-1520-sds-2020`

Range evidence need: Actual cleaner identity, weighed issue/receipt, residual/return ledger and repeat-cleaning history are needed; instructions give no universal kg/m.

#### Collection requirement: Actual supplied preparation fuel by fuel type (`prepare_fuel`)

Process / prospective direction / type: `rail_qualification` / `inputs` / `product`.

Conditional fuel for owned pulling equipment, compressors or generators. Expand each actual fuel/state separately. Use gross input if outward fuel/waste/release exits are represented; burned activity is derived separately.

- Collection subject: Actual supplied preparation fuel by fuel type
- Flow property / unit: Mass / kg
- Amount rule: Gross net-of-tare fuel supplied/attributably issued before outward returns per accepted L. Derive burned activity from the stock and exclusive-outlet balance in section8 with mutually exclusive unburned waste and uncontained fluid-release outlets; spill total is audit-only. Transfer opening-stock burden in, carry closing-stock burden forward and never count receipts plus internal issues twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_energy`
- Sources: `dsbrown-strip-seal-replacement-2024`

Range evidence need: Actual fuel identity, measured opening/receipt/closing and exclusive usable-return/unburned-waste/fluid-release outlets; actual liquid volume, temperature and density/source if converted; spill audit partition and uncertainty, no default fuel rate.

#### Collection requirement: Actual preparation consumable and replacement part by identity (`prepare_consumables`)

Process / prospective direction / type: `rail_qualification` / `inputs` / `product`.

Expand actual blade/clean-out head wear parts, containment, brushes and protective consumables as distinct exchanges. Durable tools belong in complete-life asset provision; no same spare twice.

- Collection subject: Actual preparation consumable and replacement part by identity
- Flow property / unit: Mass / kg
- Amount rule: Gross net-of-tare actual new part/material issue before outward returns per accepted L; retain stock separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_materials`
- Sources: `dsbrown-strip-seal-replacement-2024`

Range evidence need: Actual material/part identities, quantities, replacement records and included service boundaries; no blanket tool loss rate.

#### Collection requirement: Preparation equipment complete-life provision by asset (`prepare_assets`)

Process / prospective direction / type: `rail_qualification` / `inputs` / `product`.

Separate each actual removal/pulling/compressor/blasting/measurement/traffic-protection asset provision. This calculated fractional item share covers manufacture, maintenance, replacements and EOL, excluding direct quantities owned elsewhere.

- Collection subject: Preparation equipment complete-life provision by asset
- Flow property / unit: Count / item
- Amount rule: For each asset, one item times measured job-node service divided by evidenced complete-life service, then divided by accepted L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_assets`
- Sources: `dsbrown-strip-seal-replacement-2024`

Range evidence need: Asset identity, all consumers/periods, observed complete life or justified prospective remaining-service/EOL scenario, numerator and denominator with uncertainty/sensitivity; no generic lifetime.

#### Collection requirement: Actual preparation material and equipment transport service (`prepare_transport`)

Process / prospective direction / type: `rail_qualification` / `inputs` / `product`.

Expand actual cargo/provider/mode/leg separately including mobilisation, waste carriage and demobilisation where owned. Do not duplicate supplier-delivered or waste-provider-included transport.

- Collection subject: Actual preparation material and equipment transport service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual net cargo mass kg times actual loaded distance km summed by service per accepted L; declare allocated empty legs and provider scope.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_assets`

Range evidence need: Actual cargo/tare tickets, leg distances, shared load attribution and provider coverage; no assumed km or load factor.

#### Collection requirement: Actual usable preparation material outward returns (`prepare_returns`)

Process / prospective direction / type: `rail_qualification` / `outputs` / `product`.

Conditional real outward custody return of separately identified usable material/fuel/parts. Retained closing stock is not an outward exchange; waste does not become a returned product.

- Collection subject: Actual usable preparation material outward returns
- Flow property / unit: Mass / kg
- Amount rule: Measured net-of-tare outward return mass by actual identity per accepted L; corresponding input remains gross before returns.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_materials`

Range evidence need: Return tickets, usability and receiving custody evidence; quantity cannot be presumed from unused stock.

#### Collection requirement: Actual preparation collected residue waste by stream (`prepare_waste`)

Process / prospective direction / type: `rail_qualification` / `outputs` / `waste`.

Expand spent abrasive, rubber/old adhesive fragments, chemical/cleaning residue, dirty water and used consumables/packaging separately with actual contamination and receiver. Distinguish dry solids, water and chemical components. Collected unburned fuel waste includes its recovered-spill portion once; total spill remains an audit quantity. Retained incident residue is closing stock or another distinct unburned outlet.

- Collection subject: Actual preparation collected residue waste by stream
- Flow property / unit: Mass / kg
- Amount rule: Net-of-tare collected outgoing mass by mutually exclusive stream per accepted L; exclude removed_gland_waste already weighed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_waste`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-1520-sds-2020`

Range evidence need: Actual stream weights, water/solids characterization, manifests and waste treatment boundary; debris is not automatic airborne dust.

#### Collection requirement: Actual preparation airborne release by substance and particle fraction (`prepare_air_release`)

Process / prospective direction / type: `rail_qualification` / `outputs` / `elementary`.

Conditional actual environmental air release from cleaning/extraction or owned combustion. Expand specific substance, CAS where available, particle fraction and receiving air compartment; collected dust is waste.

- Collection subject: Actual preparation airborne release by substance and particle fraction
- Flow property / unit: Mass / kg
- Amount rule: Measured substance mass or actual burned fuel/cleaner activity times applicable species-specific factor per accepted L; do not equate SDS fraction with release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_waste`
- Sources: `dsbrown-1520-sds-2020`

Range evidence need: Species/particle-size/air receiver, actual activity and measured capture or validated applicable factor with uncertainty; no generic VOC/NOx/PM UUID.

#### Collection requirement: Actual preparation release to water or soil by substance (`prepare_water_release`)

Process / prospective direction / type: `rail_qualification` / `outputs` / `elementary`.

Only actual environmental discharge crosses this elementary boundary. Collected wastewater sent to treatment is waste; identify substance and receiving water/soil compartment separately. Actual uncontained unburned fuel-fluid release is a distinct mutually exclusive outlet; do not subtract incident total again when deriving burned fuel.

- Collection subject: Actual preparation release to water or soil by substance
- Flow property / unit: Mass / kg
- Amount rule: Actual measured discharged mass or concentration times measured discharge volume with compatible units per accepted L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare_waste`
- Sources: `dsbrown-1520-sds-2020`

Range evidence need: Actual discharge pathway, concentration/volume, species and capture evidence; unknown balance residual is not an emission.

#### Collection requirement: Actual supplied post-installation cleaning agent (`install_cleaner`)

Process / prospective direction / type: `gland_integration` / `inputs` / `product`.

Expand actual approved cleaner formulation separately. Mineral spirits and toluene are manufacturer examples, not mandatory selection or pure-substance proof.

- Collection subject: Actual supplied post-installation cleaning agent
- Flow property / unit: Mass / kg
- Amount rule: Gross net-of-tare actual cleaner supply/issue before outward returns per accepted L, with capture and retained-stock closure.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-1520-sds-2020`

Range evidence need: Actual product/formulation, weighed issues/returns, usage and waste/release split; no universal solvent-loss fraction.

#### Collection requirement: Actual supplied integration fuel by fuel type (`install_fuel`)

Process / prospective direction / type: `gland_integration` / `inputs` / `product`.

Conditional fuel for owned generators/installation/protection/test equipment. Expand actual fuel identities; preserve gross issue and mutually exclusive stock/usable-return/collected-unburned-waste/uncontained-fluid-release/burned outlets.

- Collection subject: Actual supplied integration fuel by fuel type
- Flow property / unit: Mass / kg
- Amount rule: Gross net-of-tare fuel supplied/attributably issued before outward returns per accepted L. Derive burned activity from the stock and exclusive-outlet balance in section8 with mutually exclusive unburned waste and uncontained fluid-release outlets; spill total is audit-only. Transfer opening-stock burden in, carry closing-stock burden forward and never count receipts plus internal issues twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_energy`

Range evidence need: Actual fuel identity, measured opening/receipt/closing and exclusive usable-return/unburned-waste/fluid-release outlets; actual liquid volume, temperature and density/source if converted; spill audit partition and uncertainty, no default fuel rate.

#### Collection requirement: Actual integration consumable and replacement part by identity (`install_consumables`)

Process / prospective direction / type: `gland_integration` / `inputs` / `product`.

Expand actual duct tape, brushes, gloves, containment and replacement parts separately. Packaging already included in gland/adhesive upstream supply is not a second production burden; actual disposal remains.

- Collection subject: Actual integration consumable and replacement part by identity
- Flow property / unit: Mass / kg
- Amount rule: Gross net-of-tare issue of each actual new material/part before returns per accepted L; distinguish durable equipment and retained stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`; `dsbrown-1520-sds-2020`

Range evidence need: Actual material/part identity, weights/issues, wear replacements and included upstream service scope.

#### Collection requirement: Integration equipment complete-life provision by asset (`install_assets`)

Process / prospective direction / type: `gland_integration` / `inputs` / `product`.

Separate actual insertion/measurement/testing/traffic-control asset provision with all consuming nodes/jobs/periods. Shared asset ownership is reconciled with preparation, not repeated here in full.

- Collection subject: Integration equipment complete-life provision by asset
- Flow property / unit: Count / item
- Amount rule: For each asset, one item times measured job-node service divided by evidenced complete-life service, then divided by accepted L.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_install_assets`
- Sources: `dsbrown-strip-seal-replacement-2024`

Range evidence need: Actual asset history, maintenance/replacement/EOL coverage, observed or justified prospective complete-life service and uncertainty/sensitivity; no invented service life.

#### Collection requirement: Actual integration material and equipment transport service (`install_transport`)

Process / prospective direction / type: `gland_integration` / `inputs` / `product`.

Expand actual cargo/provider/mode/leg including material delivery, returns, waste and mobilisation/demobilisation where owned. Bounded provider services disclose included legs and energy.

- Collection subject: Actual integration material and equipment transport service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual cargo kg times actual leg km per service per accepted L from actual leg records; avoid repeated supplier/waste-provider-included legs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_install_assets`

Range evidence need: Actual net cargo weights, leg evidence, shared load and empty-leg treatment; no arbitrary delivery distance.

#### Collection requirement: Actual usable integration material outward returns (`material_returns`)

Process / prospective direction / type: `gland_integration` / `outputs` / `product`.

Expand actual outward gland/adhesive/cleaner/fuel/part return by usable identity and receiver. Manufacturer states opened adhesive containers cannot be returned; do not invent a supplier return for those. Closing stock stays a balance with carried-forward burden.

- Collection subject: Actual usable integration material outward returns
- Flow property / unit: Mass / kg
- Amount rule: Measured net-of-tare real outward return mass per accepted L; do not reduce gross input and count the return again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`
- Sources: `dsbrown-strip-seal-replacement-2024`

Range evidence need: Actual usability/custody/return tickets and receiver acceptance; opened adhesive and contaminated material need actual evidenced route.

#### Collection requirement: Actual new gland cut-off or rejected gland waste (`gland_offcuts`)

Process / prospective direction / type: `gland_integration` / `outputs` / `waste`.

Actual unused cut-offs or torn/rejected gland leaving as waste, separately from old gland and usable returns; reseated material remaining in the joint is not discarded.

- Collection subject: Actual new gland cut-off or rejected gland waste
- Flow property / unit: Mass / kg
- Amount rule: Net-of-tare weighed waste by actual profile/composition and receiver per accepted L, with all failed-installation quantities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_waste`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`

Range evidence need: Actual cut-off/reject measurements, cause and waste destination; no assumed waste percentage.

#### Collection requirement: Actual integration collected chemical or wastewater waste (`chemical_waste`)

Process / prospective direction / type: `gland_integration` / `outputs` / `waste`.

Expand uncured adhesive residues, spent cleaner, contaminated absorbents/tape and collected test/cleanup wastewater as distinct streams. Distinguish included water and dry solids; captured solvent is not air emission. Collected unburned fuel waste includes its recovered-spill portion once; total spill remains an audit quantity. Retained incident residue is closing stock or another distinct unburned outlet.

- Collection subject: Actual integration collected chemical or wastewater waste
- Flow property / unit: Mass / kg
- Amount rule: Actual net-of-tare outgoing waste mass by stream per accepted L with treatment and transport coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_waste`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-1520-sds-2020`

Range evidence need: Weighed stream/manifest evidence, contamination, water/solids and actual receiver classification; no generic hazardous-waste mass.

#### Collection requirement: Actual integration packaging and nonchemical consumable waste (`packaging_waste`)

Process / prospective direction / type: `gland_integration` / `outputs` / `waste`.

Expand actual packaging materials and nonchemical consumable wastes by identity/receiver. Chemically contaminated packaging belongs to its classified chemical stream; provider-included disposal is not charged twice.

- Collection subject: Actual integration packaging and nonchemical consumable waste
- Flow property / unit: Mass / kg
- Amount rule: Net-of-tare outgoing waste mass per actual stream per accepted L; reconcile with supply gate packaging coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_waste`

Range evidence need: Actual packaging composition/weights, contamination screening, receiver and disposal ownership; no generic packaging ratio.

#### Collection requirement: Actual integration airborne release by substance (`install_air_release`)

Process / prospective direction / type: `gland_integration` / `outputs` / `elementary`.

Expand actual adhesive/cleaner vapour, aerosol or owned combustion species with exact receiving air compartment. SDS-listed ingredients are not automatically emitted; abnormal reaction/decomposition requires actual evidence.

- Collection subject: Actual integration airborne release by substance
- Flow property / unit: Mass / kg
- Amount rule: Actual measured species mass or actual activity times validated applicable species-specific release factor per accepted L; reconcile retained/collected material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_install_waste`
- Sources: `dsbrown-1520-sds-2020`

Range evidence need: Actual formulation/species/air receiver, application/cleanup/capture history, release measurements or applicable factors and uncertainty; no aggregate VOC as exact identity.

#### Collection requirement: Actual integration environmental release by substance and receiver (`install_water_release`)

Process / prospective direction / type: `gland_integration` / `outputs` / `elementary`.

Only evidenced actual uncaptured discharge to identified water/soil is elementary. Collected wastewater is waste. Separately identify chemical species, test-water pathway and incident compartments. Actual uncontained unburned fuel-fluid release is a distinct mutually exclusive outlet; do not subtract incident total again when deriving burned fuel.

- Collection subject: Actual integration environmental release by substance and receiver
- Flow property / unit: Mass / kg
- Amount rule: Actual measured mass or concentration times measured discharge volume per accepted L with compatible units; partition incident total among exclusive captured and environmental outlets.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_install_waste`
- Sources: `dsbrown-1520-sds-2020`

Range evidence need: Actual discharge volume/concentration, species/receiver/capture evidence and uncertainty; water balance residual and spill total are not automatic species emissions.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rail_qualification | Remove failed gland and qualify retained rail channels | required | Existing sound compatible retained host; actual method and protected access approved | Independent removal/conditioning responsibility; failed gland -> clean qualified empty cavities; paired handoff to integration; embedded cutting/cleaning/blasting and waste exits | Actual qualified joint centreline m; both rails as one joint |
| gland_integration | Integrate matched gland and accept the complete joint | required | Qualified cavities; actual profile/gap/weather compatibility and owner work criteria met | Integrate factory gland and specified adhesive with host; failed seating loops here or back to qualification; complete accepted joint handback | Accepted measured replacement centreline L m |

A transfer records the retained host condition at a real responsibility gate; it is not newly purchased steel or an upstream manufactured joint. Factory gland, adhesive, actual cleanup materials and service roles are inputs. Rejects never enter accepted L. Preparation and installation have separate node-specific collection protocols; shared events carry one owner and a common event/transfer ID.

### Process: Remove failed gland and qualify retained rail channels (`rail_qualification`)

#### Inputs

##### Product flows

###### Actual supplied abrasive for conditional rail cleaning (`prepare_abrasive`)

Use only when remaining debris requires actual abrasive cleaning; distinguish virgin supplied abrasive, recovered circulating medium and replacement losses.

- Selected flow: Actual supplied abrasive for conditional rail cleaning
- Flow property / unit: Mass / kg
- Amount rule: Gross net-of-tare new abrasive issued to this intervention before returns per accepted L; reused in-process circulation is not another purchase.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_materials`
- Sources: `dsbrown-strip-seal-replacement-2024`

Range evidence need: Actual abrasive type, net receipt/issue and recovery/disposal measurements by cleaning run; no universal blasting consumption.

###### Actual supplied preparation water (`prepare_water`)

Conditional product-water supply for actual approved preparation/cleanup method; record provider gate. Existing moisture and weather water are separate balance terms.

- Selected flow: Actual supplied preparation water
- Flow property / unit: Mass / kg
- Amount rule: Metered mass or actual volume times evidenced water density per accepted L; repeat work included.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_materials`

Range evidence need: Actual supply meter/calibration, temperature/actual measured volume m3, temperature °C and density kg/m3/source if converted, method and weather balance; no prescribed cleaning-water dose.

###### Actual purchased preparation electricity (`prepare_electricity`)

Conditional grid or bounded purchased electricity used in cutting, extraction, cleaning, compressed air and lighting; generator fuel is a separate ownership alternative.

- Selected flow: Actual purchased preparation electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered delivered kWh assigned to this node per accepted L; exclude energy included in a purchased service.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_energy`
- Sources: `dsbrown-strip-seal-replacement-2024`

Range evidence need: Actual meter differences and shared circuit attribution across runs/periods; tool nameplate is not kWh.

###### Actual purchased compressed-air service (`prepare_air`)

Only an external supplied compressed-air product/service crosses this boundary. Record metered and reference pressure with absolute-versus-gauge basis, actual atmospheric pressure if conversion needs it, metered/reference temperature and moisture, applicable conversion source and provider energy coverage. No reference-state default; on-site ambient-air compression uses owned energy instead.

- Selected flow: Actual purchased compressed-air service
- Flow property / unit: Volume / m3
- Amount rule: Metered supplied volume at declared state per accepted L; convert only using evidenced metered/reference pressure basis, temperature/moisture and conversion source. Exclude on-site compressor air already covered by fuel/electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_energy`
- Sources: `dsbrown-strip-seal-replacement-2024`

Range evidence need: Actual purchase boundary, metered/reference state including absolute-versus-gauge pressure basis and applicable conversion source; removal-tool PSI setting alone is not an air quantity.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified retained bridge-joint rail cavity handoff (`qualified_rails_transfer`)

Both retained cavities are empty, clean and free of obstructing debris/sharp edges; host soundness and compatible gap/profile/weather checked. This paired transfer has no new-steel upstream burden.

- Selected flow: Qualified retained bridge-joint rail cavity handoff
- Flow property / unit: Length / m
- Amount rule: Actual measured qualified joint-centreline coverage per accepted L, paired by transfer ID to qualified_rails_input; never force partial coverage to one.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_gate`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`

Range evidence need: Surveyed prepared geometry and signed qualification for both cavities are needed, including rejected stretches and repeats.

##### Waste flows

###### Removed failed gland waste (`removed_gland_waste`)

Record actual elastomer/attached residue state and receiver. Failed gland is existing host removed by this intervention; it is neither new purchased rubber nor an avoided-material credit. If demonstrably reusable, use an explicit usable product exit instead.

- Selected flow: Removed failed gland waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net-of-tare removed gland waste mass per accepted L with destination and treatment/transport ownership.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prepare_waste`
- Sources: `dsbrown-strip-seal-replacement-2024`

Range evidence need: Actual weighed failed gland and contamination/destination evidence; old profile mass/length is not automatically the new gland mass/length.

##### Elementary flows

### Process: Integrate matched gland and accept the complete joint (`gland_integration`)

#### Inputs

##### Product flows

###### Qualified retained bridge-joint rail cavity handoff (`qualified_rails_input`)

Receive the actual qualified two-cavity host condition by transfer ID. It carries allocated preparation burdens once when linking nodes, without adding newly manufactured rails.

- Selected flow: Qualified retained bridge-joint rail cavity handoff
- Flow property / unit: Length / m
- Amount rule: Actual received joint-centreline coverage per accepted L paired to qualified_rails_transfer; preparation and assembly gates must both close.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_gate`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`

Range evidence need: Paired transfer geometry, soundness and custody/acceptance records; no synthetic one-metre internal input.

###### Actual compatible factory-made elastomeric strip-seal gland (`gland_supply`)

Record exact matched gland profile, elastomer formulation/state and factory mitres/upturns/end geometry at supplier gate. Generic rubber/resin or a modular/new-joint asset is not this supplied component.

- Selected flow: Actual compatible factory-made elastomeric strip-seal gland
- Flow property / unit: Mass / kg
- Amount rule: Gross net-of-tare receipt/issue mass before outward returns per accepted L; if obtained from length, use actual batch/profile-specific mass-per-length evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`

Range evidence need: Actual profile/batch geometry, material certificate and weighed mass or supplier/measurement mass-per-length with cut-off/return/stock closure.

###### Actual specified lubricant adhesive supplied mixture (`adhesive_supply`)

Record current compatible product/batch and supplied liquid formulation, e.g. specified DSB1520 for representative route. It is not generic oil, pure solvent or water-only glue; composition does not define emissions.

- Selected flow: Actual specified lubricant adhesive supplied mixture
- Flow property / unit: Mass / kg
- Amount rule: Gross net-of-container-tare receipt/issue mass before outward returns per accepted L; distinguish applied/retained, collected residue, actual reaction products and species releases.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`; `dsbrown-1520-sds-2020`

Range evidence need: Actual compatible product/SDS revision, issue weights and retained/waste/release balance; no universal coat rate or SDS-to-emission conversion.

###### Actual supplied installation cleanup or required-test water (`install_water`)

Conditional on actual approved cleanup or owner-required water test. Declare exact use, supply gate, captured waste and actual discharge; do not invent a manufacturer water test.

- Selected flow: Actual supplied installation cleanup or required-test water
- Flow property / unit: Mass / kg
- Amount rule: Measured supplied water mass or measured volume times evidenced density per accepted L; all repeat tests included.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_materials`

Range evidence need: Actual required test/cleanup method, meter readings, duration/flow if used, actual measured volume m3, temperature °C and density kg/m3/source and capture/receiving pathway; no universal test volume.

###### Actual purchased integration electricity (`install_electricity`)

Conditional delivered electricity for actual insertion/cleanup/test/protection equipment; exclude provider-included energy and on-site generated electricity already represented by fuel.

- Selected flow: Actual purchased integration electricity
- Flow property / unit: Energy / kWh
- Amount rule: Submetered delivered kWh attributable to integration per accepted L, including failed seating and repeat tests.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_install_energy`
- Sources: `dsbrown-strip-seal-replacement-2024`

Range evidence need: Actual circuit/equipment meter differences, periods and allocation; no rated-power productivity estimate.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted mechanically locked bridge strip-seal gland replacement service (`accepted_gland_replacement`)

Complete compatible continuous gland replacement has fully seated both sides, accepted factory mitres/upturns/endpoints, cleaned seal/rails and closed defects; authorised owner inspection and any required watertightness test passed. This is service length on retained host.

- Selected flow: Accepted mechanically locked bridge strip-seal gland replacement service
- Flow property / unit: Length / m
- Amount rule: 1 m
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_install_gate`
- Sources: `dsbrown-strip-seal-replacement-2024`; `dsbrown-l2-installation-2024`

Range evidence need: Actual L survey/geometry, profile/movement duty, whole-joint acceptance and signed handback establish the reference definition; no universal future life or equivalence between profiles.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_service | both nodes | No co-product credit for retained rails, removed failed gland, scrap or waste. Preserve all actual removal/preparation/rework/test burdens in the intervention; assign only accepted complete-joint length L as service denominator. Failed host/rejected joint has no accepted output; disclose its burden and final route rather than hiding it. |  |
| material_custody | both nodes | Input quantities remain gross net-of-tare before outward return netting. Reconcile receipt/issue with actual installed/used, real usable return, waste, release and closing stock by identity. Transfer evidenced opening-stock burden into this intervention and carry unused closing-stock burden into its later use; never represent retained stock as outward product. Use receipts or attributable internal issues without counting both for the same material. A consumed-only upstream fuel alternative excludes only matched usable outward returns once; nonreturned unburned waste and loss retain their supply burden. Metered burned fuel is combustion activity, never the sole upstream input. |  |
| shared_life | prepare_assets; install_assets | For each asset use actual job-node service over complete-life service; enumerate rail_qualification and gland_integration, all other jobs and reporting periods and lifecycle phases. Cover manufacture, maintenance, replacements and EOL once. Use completed observed histories or justified prospective remaining-service/replacement/termination/EOL scenario for an in-service asset; label observed/forecast and update/sensitivity. No duplicate direct fuel, spare, tool or provider-included capital. |  |
| rework_routing | both nodes | Dirty cavity loops within rail_qualification; failed seating, tearing, leakage or misfit loops within gland_integration or returns via paired transfer to rail_qualification. Keep repeat energy/materials/test resources, route removed rejects to actual usable return or classified waste, and count final accepted length once. No future unowned cleanup/test task may close the gate. |  |
| periods | both nodes | Index work windows, storage/idle/protection periods and repeat visits; link every input/event/output and shared-asset phase to its period and single owner. Sum the same intervention once across periods; do not annualise service output or invent future operating life. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prepare_materials | rail_qualification | gross supplied materials, real usable returns and retained stock | receipt_issue_balance | event_id; job_id; joint_id; period_id; material_id; formulation; profile; batch; supplier_gate; instruction_revision; gross_kg; tare_kg; measured_volume_m3; density_kg_per_m3; temperature_C; density_source; opening_stock_kg; opening_stock_burden_record; closing_stock_burden_carryforward; receipt_kg; issue_kg; outward_return_kg; closing_stock_kg; installed_retained_kg; liquid_water_kg; dry_solids_kg; measured_length_m; mass_per_length_kg_per_m; transfer_id | Weigh gross containers/vehicles and tare separately; retain tickets, calibrated meter records and actual formulation/profile certificates. Record quantities before outward returns; use receipts or attributable internal issues without double counting. Transfer the evidenced opening-stock burden into this intervention and carry unused closing-stock burden forward; a physical stock change never silently removes or creates upstream burden. Use measured_volume_m3, actual temperature_C and evidenced density_kg_per_m3/density_source for each actual liquid conversion; kg = m3 times kg/m3, without defaults. Reconcile each material over periods, cut-offs, waste and actual releases; profile-specific gland mass/length requires batch evidence. Trace water supply, host/weather water and destination separately. | kg; m; m3; kg/m3; °C | Each event, run, receipt/return, test and handoff; close each work period | Entire intervention including repeat visits and failures; assets across complete life | Identified joint/site and actual provider/asset fleet; other consumers for shared burdens | per reference flow | Traceable identities/units, calibration, dated tickets/logs and approval sources; completeness and uncertainty; actual accepted L denominator and no duplicated owner |
| cp_prepare_energy | rail_qualification | purchased energy, actual fuel and external compressed air | meter_and_fuel_balance | event_id; job_id; period_id; equipment_id; provider_gate; fuel_identity; measured_volume_m3; density_kg_per_m3; temperature_C; density_source; opening_fuel_kg; opening_stock_burden_record; closing_stock_burden_carryforward; receipt_fuel_kg; closing_fuel_kg; returned_fuel_kg; collected_unburned_fuel_waste_kg; uncontained_unburned_fluid_release_kg; incident_total_kg; recovered_incident_waste_kg; recovered_incident_return_kg; retained_incident_stock_kg; other_unburned_outlet_kg; burned_fuel_kg; electricity_start_kWh; electricity_end_kWh; supplied_air_m3; metered_air_pressure_kPa; metered_pressure_basis; reference_air_pressure_kPa; reference_pressure_basis; atmospheric_pressure_kPa; metered_air_temperature_C; reference_air_temperature_C; metered_air_moisture; reference_air_moisture; air_conversion_source; service_time_h; shared_consumers; attribution_evidence | Meter delivered electricity; weigh actual fuel or convert measured_volume_m3 using actual temperature_C and evidenced density_kg_per_m3/density_source; kg = m3 times kg/m3. Balance exclusive outlets: all collected unburned fuel waste, actual uncontained unburned fluid release and any other distinct unburned outlet are subtracted once. Spill total is only an audit partition; recovered waste/returns/retained stock are assigned to their outlet once, never subtracted again. Carry opening-stock burden in and unused closing-stock burden forward, using receipts or attributable internal issues without duplication. Derive burned activity independently of gross input. Meter externally purchased air at a declared pressure/temperature/moisture state: record metered and reference pressure as absolute or gauge, actual atmospheric pressure if conversion requires it, both temperature/moisture states and an applicable conversion source. No reference-state or pressure-basis default is allowed; on-site compression owns fuel/electricity instead. Record all run, idle/protection, failed-work and test periods, actual shared attribution and included provider boundaries. | kg; kWh; m3; kg/m3; kPa; °C; h | Each event, run, receipt/return, test and handoff; close each work period | Entire intervention including repeat visits and failures; assets across complete life | Identified joint/site and actual provider/asset fleet; other consumers for shared burdens | per reference flow | Traceable identities/units, calibration, dated tickets/logs and approval sources; completeness and uncertainty; actual accepted L denominator and no duplicated owner |
| cp_prepare_assets | rail_qualification | complete-life equipment provision and owned transport | asset_life_and_leg_ledger | asset_id; event_id; period_id; lifecycle_phase; consuming_node; other_job_id; node_service_h; complete_life_service_h; observed_service_h; forecast_remaining_h; manufacture_scope; maintenance_scope; replacement_event; termination_scenario; eol_scope; forecast_source; uncertainty; sensitivity; provider_gate; cargo_id; cargo_gross_kg; cargo_tare_kg; leg_km; empty_leg_treatment; shared_load_share; covered_elsewhere | Identify each asset and all consumers across jobs/periods. Retain observed histories; for in-service assets justify forecast remaining service, replacements, termination and EOL, label observed versus forecast, denominator source and uncertainty/sensitivity. Assign each provision component once and exclude direct fuel/spares included elsewhere. For transport use measured net cargo, evidenced leg distances, shared-load allocation and provider-included services. Missing life evidence/denominator blocks finalisation. | item; h; kg; km; kg*km | Each event, run, receipt/return, test and handoff; close each work period | Entire intervention including repeat visits and failures; assets across complete life | Identified joint/site and actual provider/asset fleet; other consumers for shared burdens | per reference flow | Traceable identities/units, calibration, dated tickets/logs and approval sources; completeness and uncertainty; actual accepted L denominator and no duplicated owner |
| cp_prepare_gate | rail_qualification | qualified retained two-cavity host handoff | inspection_transfer | joint_id; transfer_id; period_id; rail_profile; gland_profile; movement_duty; measured_length_m; upturn_geometry; miter_geometry; channel_condition; splice_condition; sharp_edge_condition; gap_mm; ambient_temperature_C; pavement_temperature_C; instruction_revision; approval_criteria; tolerance; rejected_length_m; rework_event; responsible_person; handoff_time | Measure actual joint/seal centreline and geometry with traceable survey. Inspect both channels at splices/edges after removal and actual cleaning; record sound retained host and actual profile/gap/weather suitability against current chosen instructions/owner criteria. Sign both-cavity qualification and pair transfer; dirty cavities repeat cleaning, major damage stops route. | m; mm; °C | Each event, run, receipt/return, test and handoff; close each work period | Entire intervention including repeat visits and failures; assets across complete life | Identified joint/site and actual provider/asset fleet; other consumers for shared burdens | per reference flow | Traceable identities/units, calibration, dated tickets/logs and approval sources; completeness and uncertainty; actual accepted L denominator and no duplicated owner |
| cp_prepare_waste | rail_qualification | wastes, actual elementary species and incident partition | weighing_sampling_factor | event_id; job_id; period_id; stream_id; identity; formulation; contamination; gross_kg; tare_kg; water_kg; dry_solids_kg; receiver; custody_time; treatment_scope; transport_scope; species; cas; particle_fraction; receiving_compartment; release_mass_kg; concentration_kg_per_m3; discharge_m3; activity_unit; activity_quantity; factor_kg_per_activity; factor_source; factor_applicability; capture_fraction; retained_kg; incident_total_kg; collected_unburned_fuel_waste_kg; uncontained_unburned_fluid_release_kg; recovered_incident_waste_kg; recovered_incident_return_kg; retained_incident_stock_kg; other_unburned_outlet_kg; air_incident_kg; water_incident_kg; soil_incident_kg; residual_kg; uncertainty | Weigh each outgoing waste stream net of tare and retain receiver manifests with actual contamination/treatment. Identify actual environmental substance/particle fraction and receiver; use measurements or compatible activity-specific applicable factors. Separate collected waste from uncaptured release; partition incident total as audit-only. Assign recovered unburned fuel to collected waste, usable return or closing stock once and actual uncontained fuel-fluid release to its own exclusive outlet; never subtract spill total again in burned-fuel calculation. Reconcile dry solids, water, chemicals and weather/host contributions; investigate residual without declaring it an emission. SDS fraction and occupational limits are not release factors. | kg; m3; kg/m3; actual activity unit | Each event, run, receipt/return, test and handoff; close each work period | Entire intervention including repeat visits and failures; assets across complete life | Identified joint/site and actual provider/asset fleet; other consumers for shared burdens | per reference flow | Traceable identities/units, calibration, dated tickets/logs and approval sources; completeness and uncertainty; actual accepted L denominator and no duplicated owner |
| cp_install_materials | gland_integration | gross supplied materials, real usable returns and retained stock | receipt_issue_balance | event_id; job_id; joint_id; period_id; material_id; formulation; profile; batch; supplier_gate; instruction_revision; gross_kg; tare_kg; measured_volume_m3; density_kg_per_m3; temperature_C; density_source; opening_stock_kg; opening_stock_burden_record; closing_stock_burden_carryforward; receipt_kg; issue_kg; outward_return_kg; closing_stock_kg; installed_retained_kg; liquid_water_kg; dry_solids_kg; measured_length_m; mass_per_length_kg_per_m; transfer_id | Weigh gross containers/vehicles and tare separately; retain tickets, calibrated meter records and actual formulation/profile certificates. Record quantities before outward returns; use receipts or attributable internal issues without double counting. Transfer the evidenced opening-stock burden into this intervention and carry unused closing-stock burden forward; a physical stock change never silently removes or creates upstream burden. Use measured_volume_m3, actual temperature_C and evidenced density_kg_per_m3/density_source for each actual liquid conversion; kg = m3 times kg/m3, without defaults. Reconcile each material over periods, cut-offs, waste and actual releases; profile-specific gland mass/length requires batch evidence. Trace water supply, host/weather water and destination separately. | kg; m; m3; kg/m3; °C | Each event, run, receipt/return, test and handoff; close each work period | Entire intervention including repeat visits and failures; assets across complete life | Identified joint/site and actual provider/asset fleet; other consumers for shared burdens | per reference flow | Traceable identities/units, calibration, dated tickets/logs and approval sources; completeness and uncertainty; actual accepted L denominator and no duplicated owner |
| cp_install_energy | gland_integration | purchased energy, actual fuel and external compressed air | meter_and_fuel_balance | event_id; job_id; period_id; equipment_id; provider_gate; fuel_identity; measured_volume_m3; density_kg_per_m3; temperature_C; density_source; opening_fuel_kg; opening_stock_burden_record; closing_stock_burden_carryforward; receipt_fuel_kg; closing_fuel_kg; returned_fuel_kg; collected_unburned_fuel_waste_kg; uncontained_unburned_fluid_release_kg; incident_total_kg; recovered_incident_waste_kg; recovered_incident_return_kg; retained_incident_stock_kg; other_unburned_outlet_kg; burned_fuel_kg; electricity_start_kWh; electricity_end_kWh; supplied_air_m3; metered_air_pressure_kPa; metered_pressure_basis; reference_air_pressure_kPa; reference_pressure_basis; atmospheric_pressure_kPa; metered_air_temperature_C; reference_air_temperature_C; metered_air_moisture; reference_air_moisture; air_conversion_source; service_time_h; shared_consumers; attribution_evidence | Meter delivered electricity; weigh actual fuel or convert measured_volume_m3 using actual temperature_C and evidenced density_kg_per_m3/density_source; kg = m3 times kg/m3. Balance exclusive outlets: all collected unburned fuel waste, actual uncontained unburned fluid release and any other distinct unburned outlet are subtracted once. Spill total is only an audit partition; recovered waste/returns/retained stock are assigned to their outlet once, never subtracted again. Carry opening-stock burden in and unused closing-stock burden forward, using receipts or attributable internal issues without duplication. Derive burned activity independently of gross input. Meter externally purchased air at a declared pressure/temperature/moisture state: record metered and reference pressure as absolute or gauge, actual atmospheric pressure if conversion requires it, both temperature/moisture states and an applicable conversion source. No reference-state or pressure-basis default is allowed; on-site compression owns fuel/electricity instead. Record all run, idle/protection, failed-work and test periods, actual shared attribution and included provider boundaries. | kg; kWh; m3; kg/m3; kPa; °C; h | Each event, run, receipt/return, test and handoff; close each work period | Entire intervention including repeat visits and failures; assets across complete life | Identified joint/site and actual provider/asset fleet; other consumers for shared burdens | per reference flow | Traceable identities/units, calibration, dated tickets/logs and approval sources; completeness and uncertainty; actual accepted L denominator and no duplicated owner |
| cp_install_assets | gland_integration | complete-life equipment provision and owned transport | asset_life_and_leg_ledger | asset_id; event_id; period_id; lifecycle_phase; consuming_node; other_job_id; node_service_h; complete_life_service_h; observed_service_h; forecast_remaining_h; manufacture_scope; maintenance_scope; replacement_event; termination_scenario; eol_scope; forecast_source; uncertainty; sensitivity; provider_gate; cargo_id; cargo_gross_kg; cargo_tare_kg; leg_km; empty_leg_treatment; shared_load_share; covered_elsewhere | Identify each asset and all consumers across jobs/periods. Retain observed histories; for in-service assets justify forecast remaining service, replacements, termination and EOL, label observed versus forecast, denominator source and uncertainty/sensitivity. Assign each provision component once and exclude direct fuel/spares included elsewhere. For transport use measured net cargo, evidenced leg distances, shared-load allocation and provider-included services. Missing life evidence/denominator blocks finalisation. | item; h; kg; km; kg*km | Each event, run, receipt/return, test and handoff; close each work period | Entire intervention including repeat visits and failures; assets across complete life | Identified joint/site and actual provider/asset fleet; other consumers for shared burdens | per reference flow | Traceable identities/units, calibration, dated tickets/logs and approval sources; completeness and uncertainty; actual accepted L denominator and no duplicated owner |
| cp_install_gate | gland_integration | complete joint acceptance and received host transfer | inspection_test_handback | joint_id; transfer_id; period_id; rail_profile; gland_profile; movement_duty; measured_length_m; upturn_geometry; miter_geometry; gap_mm; ambient_temperature_C; pavement_temperature_C; adhesive_product; adhesive_batch; instruction_revision; setting_time_h; seating_both_sides; damage_twist_stretch; endpoint_condition; excess_adhesive_removed; tape_removed; test_required; test_method; test_quantity; test_unit; test_duration_h; test_threshold; test_tolerance; test_result; defect_id; rework_event; closure_evidence; responsible_person; handback_time | Pair received qualified cavity coverage. Measure complete accepted seal-centreline L including declared factory geometry; inspect both seated lugs, continuity, mitres/upturns/endpoints and cleanup. Record actual setting/inspection requirements and every owner-required test method, quantity/unit, duration, threshold/tolerance, responsibility and outcome. Repeat failures and close defects before signed maintenance handback; no test requirement is inferred from manufacturer guidance. | m; mm; °C; h; actual test unit | Each event, run, receipt/return, test and handoff; close each work period | Entire intervention including repeat visits and failures; assets across complete life | Identified joint/site and actual provider/asset fleet; other consumers for shared burdens | per reference flow | Traceable identities/units, calibration, dated tickets/logs and approval sources; completeness and uncertainty; actual accepted L denominator and no duplicated owner |
| cp_install_waste | gland_integration | wastes, actual elementary species and incident partition | weighing_sampling_factor | event_id; job_id; period_id; stream_id; identity; formulation; contamination; gross_kg; tare_kg; water_kg; dry_solids_kg; receiver; custody_time; treatment_scope; transport_scope; species; cas; particle_fraction; receiving_compartment; release_mass_kg; concentration_kg_per_m3; discharge_m3; activity_unit; activity_quantity; factor_kg_per_activity; factor_source; factor_applicability; capture_fraction; retained_kg; incident_total_kg; collected_unburned_fuel_waste_kg; uncontained_unburned_fluid_release_kg; recovered_incident_waste_kg; recovered_incident_return_kg; retained_incident_stock_kg; other_unburned_outlet_kg; air_incident_kg; water_incident_kg; soil_incident_kg; residual_kg; uncertainty | Weigh each outgoing waste stream net of tare and retain receiver manifests with actual contamination/treatment. Identify actual environmental substance/particle fraction and receiver; use measurements or compatible activity-specific applicable factors. Separate collected waste from uncaptured release; partition incident total as audit-only. Assign recovered unburned fuel to collected waste, usable return or closing stock once and actual uncontained fuel-fluid release to its own exclusive outlet; never subtract spill total again in burned-fuel calculation. Reconcile dry solids, water, chemicals and weather/host contributions; investigate residual without declaring it an emission. SDS fraction and occupational limits are not release factors. | kg; m3; kg/m3; actual activity unit | Each event, run, receipt/return, test and handoff; close each work period | Entire intervention including repeat visits and failures; assets across complete life | Identified joint/site and actual provider/asset fleet; other consumers for shared burdens | per reference flow | Traceable identities/units, calibration, dated tickets/logs and approval sources; completeness and uncertainty; actual accepted L denominator and no duplicated owner |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_length_intensity | all inventory rows | For each identified exchange divide its attributable intervention quantity Q in its native unit by accepted complete-joint length L in m; retain unit/m. The reference definition is 1 m. Sum repeats and periods once; do not sum heterogeneous identities. Internal coverage is actual paired transfer length divided by L. | Q; L; corresponding node protocol; cp_install_gate | Native-unit intensity per1 m accepted service |  |
| calc_gland_mass | gland_supply | Gland mass kg = actual supplied gland length m times evidenced same-batch/profile mass-per-length kg/m, or direct calibrated mass. Include actual factory geometry; do not assume elastic stretching or generic rubber density. Use gross net-of-tare supply before return netting. | cp_install_materials; measured_length_m; mass_per_length_kg_per_m | Actual supplied gland kg, then divide by L |  |
| calc_fuel | prepare_fuel; install_fuel; prepare_air_release; install_air_release | Burned fuel kg = opening fuel + gross receipts - closing fuel - outward usable returns - all collected unburned fuel waste - actual uncontained unburned fluid releases - any other distinct unburned outlet. Every outlet is mutually exclusive. Total spill is an audit partition only, never an additional subtraction: its recovered portion is included once in collected unburned fuel waste, usable return or closing stock, while its uncontained portion is included once in the actual unburned fluid release outlet. Retained incident residue belongs to closing stock or a distinct mutually exclusive unburned outlet. Carry opening-stock burden in and closing-stock burden forward; record receipts or attributable internal issues without duplication. Exclude provider-included fuel. | cp_prepare_energy; cp_install_energy; cp_prepare_waste; cp_install_waste | Burned fuel activity kg separately from gross input kg |  |
| calc_asset_share | prepare_assets; install_assets | For each actual asset, provision item =1 item times node-job service h divided by complete-life service h; then divide by accepted L. Complete-life service includes all observed history plus justified prospective remaining service for an in-service asset. Full provision covers manufacture, maintenance, replacements and EOL once, excluding direct quantities owned elsewhere. Same service unit and all consumers/phases required. | cp_prepare_assets; cp_install_assets; node_service_h; complete_life_service_h | Fractional asset provision item per m |  |
| calc_transport | prepare_transport; install_transport | Transport kg*km = sum of actual net cargo kg times leg km by identical provider/mode service; then divide by L. Retain actual empty-leg/shared-load attribution and boundary. A verified t*km unit has factor 1000 kg*km per t*km. | cp_prepare_assets; cp_install_assets; cargo_gross_kg; cargo_tare_kg; leg_km | kg*km per m by actual service |  |
| calc_release | prepare_air_release; prepare_water_release; install_air_release; install_water_release | For each substance/receiver, release kg = measured release mass, or actual compatible activity times evidenced applicable factor kg/activity, or concentration kg/m3 times actual discharge m3. Use one justified path and compatible units; then divide by L. Account for retained/collected/captured material and actual reaction/weather terms. SDS composition and uncharacterised residual are not release factors. | cp_prepare_waste; cp_install_waste; actual activity; applicable factor; receiving compartment | Species-specific release kg per m |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | all inventory rows | Expand variable cards to each actual distinct material, formulation, waste stream, service or elementary species/receiver. Verify concrete identity/property/unit before final exchange binding; a generic placeholder is not a final dataset exchange. | Actual product/rail/gland certificates, current SDS, provider gates and identity detail verification |
| gate_quality | rail_qualification; gland_integration | Retain paired transfer, sound host/profile suitability and whole-joint seating/continuity/cleanup evidence; only actual owner-required testing has declared method/threshold/tolerance/responsibility. Accepted L excludes unresolved rejected output. | cp_prepare_gate; cp_install_gate; signed defect closure and authorised handback |
| balance_quality | both nodes | Reconcile net-of-tare gross receipts/issues, actual use/installation, outward returns, retained stock, wastes and species releases by identity; no stock-as-product, double-netting, captured-waste-as-release or residual-as-emission. | cp_prepare_materials; cp_install_materials; cp_prepare_waste; cp_install_waste; mass/length and water/dry-solids balances |
| life_quality | prepare_assets; install_assets | Missing complete-life coverage/service denominator blocks finalisation; prospective future phases may be justified, never assumed as observed. Record forecast/observed labels, source, update trigger and sensitivity. | cp_prepare_assets; cp_install_assets; phase/job/period ledger and provider-scope reconciliation |
| coverage_quality | all inventory rows | Record actual applicable/zero/not-applicable/gap state and reason for every card; quantify uncertainty from measurement, allocation, forecast and factors. Missing important identity/quantity/capture or required owner acceptance blocks complete dataset finalisation. | Node-event-period matrix, calibration, source revisions and Range evidence needs resolved by actual records |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_host | rail_qualification | Reject unsupported host soundness, profile/gap/weather suitability, incomplete both-cavity preparation or unpaired handoff. Major damaged rails/header/anchors require broader scoped work; do not hide it as cleaning. | dsbrown-strip-seal-replacement-2024; dsbrown-l2-installation-2024 |
| validate_acceptance | gland_integration | Require compatible supplied gland/adhesive, complete both-side seating without damage/twist/stretch, correct factory geometry/endpoints, excess adhesive/tape cleanup, actual setting/owner inspection and any required test/defect closure, signed handback and measured positive L. Partial leaking/rejected joint creates no accepted L. | dsbrown-strip-seal-replacement-2024; dsbrown-l2-installation-2024 |
| validate_identity | all inventory rows | Final dataset exchanges require actual distinct identities, verified UUID/property/unit and exact supplier/receiver state. Unknown actual identity, generic rubber/glue or unspeciated pollution is not a fixed match. Keep candidate semantic gaps explicit until resolved. |  |
| validate_custody | both nodes | Check gross net-of-tare inputs before outward return netting, actual stock/installed/waste/release closure, profile-specific gland mass/length and water/dry-solids balance. Separate fuel gross issue from burned activity and mutually exclusive unburned waste/fluid-release outlets; total spill is audit-only, never a second subtraction. Carry opening-stock burden in and closing-stock burden forward; no inferred residual release or SDS composition-as-emission. | dsbrown-1520-sds-2020 |
| validate_shared_life | both nodes | Check all consuming nodes/jobs/periods and complete-life phases with observed/forecast labels and evidenced service denominator, replacement/termination/EOL scenario and uncertainty/sensitivity. Missing coverage blocks finalisation. Check no provider/direct fuel/spares/transport/capital duplication. |  |
| validate_rework_period | both nodes | Trace each dirty cavity, misfit/torn gland, leak or failed test to its producing node, repeat loop or actual exit; retain all burdens, close defects and count accepted length once across periods. No rejected output or unowned future task is an accepted handback. |  |
| validate_range | all inventory rows | Resolve every card Range evidence need from actual site/profile/technology records or applicable external quantitative evidence; report missing quantities and uncertainty explicitly. Exact1 m defines the reference, not a generic material/energy quantity. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; downstream process and lifecyclemodel projections |
| allowed_use | Declared profile/movement-duty maintenance intensity per1 m of fully accepted complete-joint gland replacement on qualified retained single-gap rails |
| excluded_use | New bridge or rail/header construction, all CPC54221 services, modular reconstruction, manufacture-only gland, future bridge use, universal seal lifespan/performance claim or incomplete leaking-joint acceptance |
| required_metadata | PCR/version; bridge/joint/geometry and accepted L; actual rail/gland/adhesive/cleaner specification and revision; gap/temperature/work periods; methods; provider gates; actual test/criteria/responsibility and handback; reference/property/unit; source and collection coverage |
| required_quality_disclosure | Each actual identity/quantity and Range evidence; excluded host history; preparation/rework/reject paths; gross supply/return/stock/waste/release closure; shared complete-life observed/forecast attribution and uncertainty/sensitivity; transport/provider duplication check; remaining gaps |
| update_trigger | Changed profile/formulation/rail condition or method; revised instruction/SDS/owner criteria; altered supplier/waste destination; new measurements/factors; changed asset forecast/termination or coverage and new defect/rework evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version3.0 explanatory notes, 30June2025, printed284–285; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification bridge construction/repair/restoration context; narrower selected maintenance scope, no quantities |
| dsbrown-strip-seal-replacement-2024 | handbook | The D.S. Brown Company, Strip Seal Removal/Replacement, REV5/24,3pages; https://dsbrown.com/wp-content/uploads/2023/03/B_EJS_StripSealRemoval_INSTALL_v003.pdf | Actual extraction, clean-out/conditional blasting, rail preparation, profile/weather conditions, specified adhesive, seating/mitres/upturns and cleanup; equipment roles and opened-container return restriction; no universal resource quantity |
| dsbrown-l2-installation-2024 | handbook | The D.S. Brown Company, L2 Series Strip Seal Installation Procedure, REV04/24,1page; https://dsbrown.com/wp-content/uploads/2020/12/B_L2_Series_Strip_Seal_INSTALL_v003.pdf | L2 channels/lug seating, both sides, SSPA/SSCM compatibility and model-specific ease-of-installation opening; also modular use, which selected PCR excludes |
| dsbrown-1520-sds-2020 | handbook | The D.S. Brown Company, DSB1520 Lubricant Adhesive Safety Data Sheet, REV04/20, sections3,6–10,12–13; https://dsbrown.com/wp-content/uploads/2020/12/B_DPPS_Delastic_DSB1520LubricantAdhesive_SDS_v009-3.pdf | Supplied mixture identity, solvent/isocyanate components, retained/collected/environmental partition and disposal evidence need; neither composition ranges nor exposure limits are emission factors |
