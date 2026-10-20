---
pcr_id: pcr.existing-sewage-treatment-plant-calcium-aluminate-wet-spray-concrete-lining-rehabilitation-services
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Calcium-aluminate wet-spray lining rehabilitation of existing sewage-treatment-plant concrete chambers

## 1. Scope and Applicability

This category covers one bounded low-pressure wet-spray rehabilitation of acid-attacked internal concrete in a wet well or chamber integral to an existing sewage disposal/treatment plant. An approved one-part premix containing calcium-aluminate cement AND calcium-aluminate aggregate is mixed only with clean water, sprayed onto qualified retained sound concrete and handed over as a cured, accepted acid-resistant lining. Sika MonoTop-4400 MIC UK is the evidenced route, not a generic Portland mortar substitute. The retained host is the parent state; the independently accepted protective lining is the finishing responsibility. Preparation, batch mixing, spraying, finishing and curing belong inside this integrated responsibility, without an independent mortar-manufacturing output.

Exclude external local sewer mains/manholes, new plants/tanks, bio-reactor and digester tanks (explicitly excluded by the adopted 2025 method), deep structural rebuilding/reprofiling, new or replaced reinforcement/mesh, dry-spray, centrifugal and hand-only routes, polymer coating-only work, and later wastewater treatment operation. If investigation requires excluded structural rebuilding, infiltration injection, or replacement steel, stop this subset and expand/review the actual scope before producing its dataset; do not hide necessary work outside the balance. Experienced professionals and the authorised owner/engineer determine suitability, environmental control and actual approved instructions. [`sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-sewage-treatment-plant-calcium-aluminate-wet-spray-concrete-lining-rehabilitation-services |
| classification_refs | CPC 3.0 54253; narrower construction-service subset |
| covered_products | Accepted calcium-aluminate wet-spray acid-resistant lining rehabilitation of retained concrete chambers integral to an existing sewage-treatment plant |
| excluded_products | New plant; bio-reactor/digester tanks; external sewer mains/manholes; deep rebuilding; replaced reinforcement/mesh; dry-spray/centrifugal/hand-only application; later treatment operation |
| representative_product | Existing plant wet well with qualified sound acid-decontaminated concrete and an approved cured calcium-aluminate wet-sprayed lining |
| production_route | Isolation/diversion/dewatering and access; acid-damaged concrete removal and substrate qualification; SSD; clean equipment/starter; powder-water batches; low-pressure wet spray and finish; required cure/hardener; tests, defect closure and signed lining acceptance |
| market_state | Completed, cured and authorised lining service at plant owner handover, with actual authorised return-to-sewage conditions |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| what | Accepted internal calcium-aluminate wet-spray lining rehabilitation of an existing sewage-treatment-plant concrete chamber |
| how_much | 1 m2 unique net developed accepted lining area A |
| how_well | Actual approved material/system, surveyed thickness and layer profile, qualified substrate and pH, complete cure/hardness, bond/surface/geometry checks and signed owner acceptance |
| how_long_or_cycle | One complete repair campaign through final accepted handover, including all failed attempts and repeat cleaning/cure/tests; disclose stock carry and all shared-asset manufacture, maintenance, replacement and end-of-life periods; no assumed service life |
| reference_flow_link | `accepted_lining` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted calcium-aluminate wet-spray lining rehabilitation of existing sewage-treatment-plant concrete chamber |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | plant and chamber IDs/function; non-bioreactor/non-digester eligibility; retained concrete/steel condition; acid exposure; approved premix SKU/local instructions; pH method/criterion/results; SSD; net developed area survey/openings/reveals; thickness/volume/layer distribution; orientation; batch/run IDs; water ratio; equipment and contamination control; ambient/humidity/ventilation; cure/hardener and hardness criteria/results; bond/geometry/surface tests; defect closure; authorised sewage-return conditions; signed acceptance; reporting/asset periods |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `area_basis` | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A is the positive unique net developed finally accepted area surveyed under cp_acceptance. Exclude openings, count real reveals once, remove overlap and rejected sections; layers, passes, attempts and rebound do not multiply A. Zero/missing acceptance gives no accepted output. |
| `batch_water_ratio` | `premix`; `mix_water` | Actual dry-powder Mass and mixing-water Volume | kg; L; m3 | Under adopted UK 20 kg premix instruction, each 20 kg dry powder batch receives 2.8-3.2 L clean water; check actual batch powder/water and consistency under current approved instructions. Convert measured litres to m3 by /1000. This co-input recipe constraint is not an amount Range per accepted area. |
| `material_states` | `premix`; `mix_water`; `accepted_lining` | Actual native Mass, Volume and Area by state | kg; m3; m2 | Keep dry powder, added mixing water, total fresh mix and cured installed material distinct. Measure actual thickness distribution/installed geometry; density/yield conversions require exact product, state, temperature and source. Never use fresh density to infer cured mass or multiply purchased powder by assumed density to obtain A. |
| `native_units` | all inventory rows | Actual supplied or dispatched native property | actual compatible unit | Keep SKU-specific Mass/Count/Length/Area/Volume ledgers and same-unit returns; document actual conversions only where independently needed. Electricity/time/provider supports must be verified independently; do not replace Energy or Time with fuel calorific value or Count. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified existing acid-attacked plant-integral concrete chamber, retained host/steel condition and authorised repair scope; isolation/diversion/dewatering/access are actual owned foreground activities |
| starting_condition_role | Existing host state interface, without repurchasing retained concrete/steel or inventing an avoided replacement credit |
| product_classification_scope | Narrow wet-spray lining rehabilitation subset of sewage-treatment-plant construction services |
| recursive_input_rule | A genuine bounded subcontract input of the same category stops recursion only with completed-resource/result evidence and explicit upstream coverage; retain provider-paid resources and avoid overlap with direct rows |
| upstream_dataset_requirement | Actual premix/consumable/fuel/water/utility/transport/service/asset supplies require matching upstream burdens and verified concrete exchange identities before final dataset construction |
| disclosure | Host condition and excluded structural work; actual contractors; stocks and outward returns; all attempts; material states; diversion/residue fates; gate evidence; asset life and incomplete evidence |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `qualified_parent` | `lining` | Own authorised isolation, sewage diversion, desludging/dewatering, containment, confined-space access/ventilation and actual retained-steel cleaning. Remove acid-damaged/weak material to sound rough concrete, inspect microcracks/delamination including preparation-caused damage, and obtain required competent consent. Adopted UK V7 requires substrate pH >=10 before application: retain actual test location, dust/distilled-water/paper method and results, repeat removal/testing if failed. Any alternative system needs written competent approval and its own real criterion; unknown is not zero or passed. Major rebuilding/rebar/mesh replacement blocks this subset. | `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025` |
| `wet_spray_system` | `lining` | SSD pre-wetting has no standing water and no dry-out. Use clean premix/equipment free of Portland contamination and an actual compatible calcium-aluminate slurry or approved chemical starter; own its input and discarded startflush. Mix only clean water, verify every batch consistency/pot life and actual layer/overhead/interface/thickness controls. Under adopted UK V7 larger wet wells/chambers require at least 25 mm; this source-specific requirement is not a universal denominator thickness. No additional Portland cement, aggregate or finishing water. | `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025` |
| `cure_handoff` | `lining` | Own required wet curing, environment/dehydration mitigation under safety ventilation, and compatible approved surface hardener when actually used. UK V7 low-humidity/strong-airflow instruction is wet cure at least 8-12 h; its typical ~12 h hard-before-sewage statement, conditional 6-9 h hardening and ~1 h after hardener/moderate slow flow statements are not interchangeable universal timers. Actual approved cure/hard-state evidence, required bond/surface/geometry tests and signed authorised sewage-return gate control. The small live-manhole cover-only exception does not apply to this isolated plant chamber. | `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025` |
| `all_resources` | all inventory rows | Include actual preparation, pH testing, PPE/containment, SSD, starter, periodic hopper/nozzle/rotor/pump/hose cleaning, cooling, curing, testing, rework, fuel/utilities, freight and provider-paid resources. Own routine and incident residues and actual species/medium releases. Complete pump/compressor/mixer/access-tool manufacture, maintenance, replacements and end-of-life is attributed over all jobs/nodes/periods. Actual absence needs evidence; unknown resources cannot be omitted. | `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025` |
| `supply_stock` | material and fuel inputs; `return_mass`; `return_count`; `return_length`; `return_area`; `return_volume` | For each actual SKU and native unit, attributable supply = opening attributable stock + net-tare gross external receipts - closing carried stock. Internal issues are not new purchases; closing retained/recovered stock is not an outward return. Gross-with-outlets includes actual usable outward returns once; consumed-only subtracts the matched usable return once with its upstream burden and no second return credit. Nonreturned waste and uncontained losses retain upstream supply burden. Keep disjoint final retained/used, return, waste and release outlets; wet mix/use intermediate activities are nonadditive. | |
| `fuel_and_releases` | `fuel`; `species_release` | Upstream fuel includes burned plus all attributable nonreturned waste/loss, not burned fuel alone. Separately close opening+receipts = closing+burned+usable return+nonburned waste+uncontained loss. Total spill is audit-only; recovered spill in closing is not another loss. Whole sewage/water/gas physical balances and species/medium elementary views are nonadditive; capture, waste, stock and returns are excluded from release once. H2S safety monitoring/SDS/absence claims cannot invent emission quantities. | |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Compatible spray-pump starter supply (`starter`)

Process / prospective direction / type: `lining` / `inputs` / `product`.

Declare factory starter versus site slurry ingredients exclusively, with actual mix water under process_water; record discarded startup output until correct mortar consistency.

- Collection subject: Actual approved calcium-aluminate slurry ingredients or compatible chemical pump starter
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable starter material kg / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_starter`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual compatible starter kg/m2 by priming event and hose/system evidence; no Portland slurry.

#### Collection requirement: Actual pH reagents, cleaning/blast materials, PPE, containment, minor compatible sealing/protection and packaging where measured in mass (`consumable_mass`)

Process / prospective direction / type: `lining` / `inputs` / `product`.

Conditional umbrella expands each real SKU with matching native-unit stock/outlet ledger; no artificial ingredient purchase for already included factory product. Reusable assets go only to asset_share.

- Collection subject: Actual pH reagents, cleaning/blast materials, PPE, containment, minor compatible sealing/protection and packaging where measured in mass
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable native supply kg / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumable_mass`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual SKU kg/m2 distribution from job records and use-specific performance evidence; absence needs records.

#### Collection requirement: Actual sponge balls, nozzle replacements, test items and expendables supplied by count (`consumable_count`)

Process / prospective direction / type: `lining` / `inputs` / `product`.

Conditional umbrella expands each real SKU with matching native-unit stock/outlet ledger; no artificial ingredient purchase for already included factory product. Reusable assets go only to asset_share.

- Collection subject: Actual sponge balls, nozzle replacements, test items and expendables supplied by count
- Flow property / unit: Count / item
- Amount rule: Actual attributable native supply item / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumable_count`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual SKU item/m2 distribution from job records and use-specific performance evidence; absence needs records.

#### Collection requirement: Actual expendable tape, temporary hose or protective lengths supplied by length (`consumable_length`)

Process / prospective direction / type: `lining` / `inputs` / `product`.

Conditional umbrella expands each real SKU with matching native-unit stock/outlet ledger; no artificial ingredient purchase for already included factory product. Reusable assets go only to asset_share.

- Collection subject: Actual expendable tape, temporary hose or protective lengths supplied by length
- Flow property / unit: Length / m
- Amount rule: Actual attributable native supply m / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumable_length`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual SKU m/m2 distribution from job records and use-specific performance evidence; absence needs records.

#### Collection requirement: Actual disposable sheets, coverings and protection supplied by area (`consumable_area`)

Process / prospective direction / type: `lining` / `inputs` / `product`.

Conditional umbrella expands each real SKU with matching native-unit stock/outlet ledger; no artificial ingredient purchase for already included factory product. Reusable assets go only to asset_share.

- Collection subject: Actual disposable sheets, coverings and protection supplied by area
- Flow property / unit: Area / m2
- Amount rule: Actual attributable native supply m2 / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumable_area`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual SKU m2/m2 distribution from job records and use-specific performance evidence; absence needs records.

#### Collection requirement: Direct fuel supply for repair equipment (`fuel`)

Process / prospective direction / type: `lining` / `inputs` / `product`.

Conditional engines/generators; supply differs from combustion activity, and leaked/wasted nonreturned fuel retains upstream burdens. Preserve measured liquid volume and actual density when a separate mass view is needed.

- Collection subject: Actual fuel by composition and supplied state
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable upstream fuel kg / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel`

Range evidence need: Actual fuel kg/m2, density/state and stock/burn/outlet evidence; no generic burn fraction.

#### Collection requirement: Attributable repair freight (`freight`)

Process / prospective direction / type: `lining` / `inputs` / `product`.

Include premix/equipment/consumables, outward usable returns and wastes where inside declared delivery/disposal scope; vehicle operation and provider freight cannot overlap.

- Collection subject: Actual freight service by route and load
- Flow property / unit: mass*distance / kg*km
- Amount rule: Actual attributed shipment kg*km / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freight`

Range evidence need: Actual loaded mass, distance, vehicle/load utilisation and empty legs per route; no universal transport distance.

#### Collection requirement: Bounded subcontract service (`provider`)

Process / prospective direction / type: `lining` / `inputs` / `product`.

Includes actual diversion/dewatering/desludging/access/cleaning/testing/waste treatment if supplied as a genuine bounded service with resource/results and upstream coverage; price or hours are not Count. Expand separate actual service exchanges and do not suppress provider-paid resources.

- Collection subject: Actual bounded completed repair-support service in verified native unit
- Flow property / unit: Actual native service property / actual compatible unit
- Amount rule: Actual completed attributable provider native quantity / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_provider`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual verified provider-unit activity/m2 and resource/results scope; missing native property/unit support blocks final exchange.

#### Collection requirement: Complete-life reusable repair assets (`asset_share`)

Process / prospective direction / type: `lining` / `inputs` / `product`.

For each real asset include manufacture, maintenance, replacements and end-of-life; consumers include every job/node/period, not only this repair campaign. Rental price is not manufacture and rental coverage needs explicit ownership.

- Collection subject: Actual shared pump compressor mixer and access-tool life-cycle burden share
- Flow property / unit: Actual native asset property / actual compatible unit
- Amount rule: Actual complete-life asset burden share in compatible native unit / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset_share`

Range evidence need: Actual compatible driver share across complete observed life or observed history plus evidenced remainder/replacements/termination/end-of-life; missing coverage blocks final dataset.

#### Collection requirement: Usable outward supply returns by mass (`return_mass`)

Process / prospective direction / type: `lining` / `outputs` / `product`.

Only real usable outward exits in this native unit; closing carry/recovered retained stock is not returned. Match upstream stock attribution and gross-with-outlets versus consumed-only convention; no duplicate avoided credit.

- Collection subject: Actual usable outward return by SKU and native Mass
- Flow property / unit: Mass / kg
- Amount rule: Actual usable outward returned kg / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_return_mass`

Range evidence need: Actual usable return kg/m2 and documented condition/destination by SKU; no generic return fraction.

#### Collection requirement: Usable outward supply returns by count (`return_count`)

Process / prospective direction / type: `lining` / `outputs` / `product`.

Only real usable outward exits in this native unit; closing carry/recovered retained stock is not returned. Match upstream stock attribution and gross-with-outlets versus consumed-only convention; no duplicate avoided credit.

- Collection subject: Actual usable outward return by SKU and native Count
- Flow property / unit: Count / item
- Amount rule: Actual usable outward returned item / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_return_count`

Range evidence need: Actual usable return item/m2 and documented condition/destination by SKU; no generic return fraction.

#### Collection requirement: Usable outward supply returns by length (`return_length`)

Process / prospective direction / type: `lining` / `outputs` / `product`.

Only real usable outward exits in this native unit; closing carry/recovered retained stock is not returned. Match upstream stock attribution and gross-with-outlets versus consumed-only convention; no duplicate avoided credit.

- Collection subject: Actual usable outward return by SKU and native Length
- Flow property / unit: Length / m
- Amount rule: Actual usable outward returned m / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_return_length`

Range evidence need: Actual usable return m/m2 and documented condition/destination by SKU; no generic return fraction.

#### Collection requirement: Usable outward supply returns by area (`return_area`)

Process / prospective direction / type: `lining` / `outputs` / `product`.

Only real usable outward exits in this native unit; closing carry/recovered retained stock is not returned. Match upstream stock attribution and gross-with-outlets versus consumed-only convention; no duplicate avoided credit.

- Collection subject: Actual usable outward return by SKU and native Area
- Flow property / unit: Area / m2
- Amount rule: Actual usable outward returned m2 / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_return_area`

Range evidence need: Actual usable return m2/m2 and documented condition/destination by SKU; no generic return fraction.

#### Collection requirement: Usable outward supply returns by volume (`return_volume`)

Process / prospective direction / type: `lining` / `outputs` / `product`.

Only real usable outward exits in this native unit; closing carry/recovered retained stock is not returned. Match upstream stock attribution and gross-with-outlets versus consumed-only convention; no duplicate avoided credit.

- Collection subject: Actual usable outward return by SKU and native Volume
- Flow property / unit: Volume / m3
- Amount rule: Actual usable outward returned m3 / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_return_volume`

Range evidence need: Actual usable return m3/m2 and documented condition/destination by SKU; no generic return fraction.

#### Collection requirement: Collected solid repair residues (`solid_waste`)

Process / prospective direction / type: `lining` / `outputs` / `waste`.

Separate removed host, collected sludge solids, powder waste, mixed/cured rebound, removed failed lining, starter/cleaning residue, packaging and spent consumables by composition/state and receiver; no reference-output credit.

- Collection subject: Actual classified removed concrete sludge solids premix rebound overspray startup cleaning and packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Actual dispatched solid-waste kg / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_waste`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual wet/dry state kg/m2 and component/fate records; dry-spray overhead10-15% example is outside wet-spray route.

#### Collection requirement: Actual repair-induced species releases (`species_release`)

Process / prospective direction / type: `lining` / `outputs` / `elementary`.

Expand concrete substance/medium exchanges for actual powder handling/spray dust, combustion and routine/incident repair-induced releases from sewage/fuel/chemicals. Safety H2S reading is not mass emitted; no whole residual balance/SDS/NoVOC as emission factor. Captured/stock/returned/waste quantities are excluded once.

- Collection subject: Actual identified substance or particle class to actual receiving medium
- Flow property / unit: Mass / kg
- Amount rule: Actual released species kg / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species_release`

Range evidence need: Actual species kg/m2 by measured release or compatible activity-factor/composition-fate evidence with uncertainty; unknown species/medium is not zero.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `lining` | Integrated plant chamber lining rehabilitation | required | Qualified existing chamber and approved wet-spray scope | Retained acid-attacked parent to finally accepted cured protective lining, including preparation, batches/runs, startflush/clean/changeover, cure, tests and rejected-layer removal/reapplication | Unique finally accepted A m2; every actual campaign/batch/event and asset period linked |

### Process: Integrated plant chamber lining rehabilitation (`lining`)

#### Inputs

##### Product flows

###### Approved dry calcium-aluminate cement-and-aggregate premix (`premix`)

Bought dry powder includes its calcium-aluminate aggregate; do not repurchase separate binder/aggregate or a second wet mortar. Weigh bags/residual powder by SKU and state.

- Selected flow: Approved one-part dry calcium-aluminate cement and calcium-aluminate aggregate repair premix
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable dry premix kg / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_premix`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual SKU dry-powder kg/m2 by measured thickness, roughness and loss ledger; PDS ~22 kg/m2/10 mm has ambiguous mass state relative to 2025 worked example and is not a dry-powder default.

###### Clean water added to premix (`mix_water`)

Meter each batch separately from SSD/cleaning/curing water; total fresh mass is powder plus actual water mass, without double counted purchased wet mortar.

- Selected flow: Clean potable mixing water supplied
- Flow property / unit: Volume / m3
- Amount rule: Actual measured mixing-water m3 / A; m3 = measured litres / 1000
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mix_water`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Adopted UK20kg product:2.8-3.2 L/20kg dry powder, not m3/m2 default; actual water density is required for mass balance.

###### Water for preparation, SSD, starter, cooling, cleaning, cure and tests (`process_water`)

Split use IDs including equipment pre-wet and flush, hopper/nozzle/hose cleaning, pH-test distilled water, SSD, cooling, wet cure and tests; include diverted/treatment water separately in physical balance.

- Selected flow: Actual nonmixing clean water supply by use
- Flow property / unit: Volume / m3
- Amount rule: Actual attributable nonmixing-water m3 / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual use-specific m3/m2 from meters, duration/flow evidence and recycle records; no spray-machine capacity as consumption.

###### Actual compatible surface hardener (`hardener`)

Conditional on actual approved cure/return plan; a formulated hardener input is not an elementary substance and does not waive full acceptance.

- Selected flow: Actual approved supplied surface hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable surface-hardener kg / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hardener`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual SKU application kg/m2 and cured-state/return evidence; no unsupported coverage rate or one-hour default.

###### Direct repair electricity (`electricity`)

Include actual pump/compressor/mixer, removal/dewatering/diversion, lighting, ventilation, cooling, cure and test loads; provider-covered electricity has one owner.

- Selected flow: Actual metered electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable repair electricity kWh / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`

Range evidence need: Actual kWh/m2 from submeter or validated power/load/duration model and uncertainty; no machine maximum rating default.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finally accepted cured plant-chamber lining service (`accepted_lining`)

This is the only final accepted reference output; retained host is a state interface, not a purchased product input. Survey and gate define A.

- Selected flow: Accepted calcium-aluminate wet-spray lining rehabilitation of existing sewage-treatment-plant concrete chamber
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Exact 1 m2 is reference normalization, not empirical yield; actual positive A, measured thickness and passed gates are required.

##### Waste flows

###### Collected liquid repair residues (`wastewater`)

Own actual dewatered sewage, contaminated cleaning/SSD runoff, startup/hose flush and collected curing/test water; physical water ledger and species views are nonadditive. Captured wastewater is waste, not a direct elementary discharge.

- Selected flow: Actual collected sewage cleaning flush and curing wastewater by composition and destination
- Flow property / unit: Volume / m3
- Amount rule: Actual dispatched wastewater m3 / A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m2 reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Sources: `sika-4400-uk-pds-2021`; `sika-4400-uk-method-2025`

Range evidence need: Actual stream m3/m2, suspended solids/composition and receiver evidence; no assumed dilution or wastewater fraction.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `accepted_area_only` | all inventory rows | Attribute every attempt, startflush, setup, cleaning/changeover, curing/test repetition, rejected-layer removal and reapplication to unique final positive A. Rejects never create accepted area. A failed layer returns to lining preparation/spray/cure and exits as actual waste/release if removed; record any actual recovery/return/downgrade destination without assumed avoided credit. | |
| `batch_event_owner` | `lining` | Production is batch mixing and wet-spray runs within one campaign. Link each receipt/stock/dose, startflush, periodic clean, interruption/changeover, output, reject and cure/test event to batch/run/patch and period; shared-run quantities split by measured causal use once and reconcile to the whole run. Avoid allocating by spray-pass area. | |
| `asset_periods` | `asset_share` | Enumerate manufacture, each service/maintenance/replacement period, termination and end-of-life. Asset burden for the job = complete-life asset burdens times actual compatible job driver divided by complete-life driver over ALL consumers/jobs/nodes/periods. Use complete observed life or observed history plus evidenced remaining use/replacements/termination/end-of-life, with uncertainty/sensitivity and update. Missing lifetime coverage or denominator blocks final dataset. Link inputs/events/outputs and stock carry to real periods; no repeated whole purchase or double annualisation. | |
| `one_owner` | `provider`; `electricity`; `fuel`; `freight`; `asset_share` | State one owner for each direct/provider/rental/transport/asset/spare burden. A bounded provider unit must match completed resources/results and upstream coverage; enumerate residual direct requirements. Reconcile all consumer shares and periods to one complete burden. Do not treat price/hours as Count or waive invisible provider-paid work. No commercial co-product or treatment/avoided-new-plant credit is assumed. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_premix` | `lining` | `premix` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;opening_kg;receipts_net_kg;closing_kg;outward_return_kg;dosed_kg;waste_kg;loss_kg | Weigh actual dry powder, reconcile bag tare and stocks with batch dosing and all outlets. | kg | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_mix_water` | `lining` | `mix_water` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;powder_kg;mix_water_l;mix_water_m3;water_density;density_unit;water_state;temperature;density_source;consistency;pot_life;temperature_unit | Calibrated volumetric measurement for each batch; mix_water_m3 = mix_water_l / 1000. Record actual water density with unit/state/temperature/source for mass diagnostics, and link product instruction/consistency check. | m3 | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_process_water` | `lining` | `process_water` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;use_id;meter_start_m3;meter_end_m3;recycled_m3;destination | Meter use-specific water and reconcile returns, retained water, collected wastewater and actual releases. | m3 | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_starter` | `lining` | `starter` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;opening_kg;receipts_net_kg;closing_kg;return_kg;used_kg;flush_kg | Weigh starter or actual slurry dry inputs by event; link chemistry approval and startup flush fate. | kg | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_hardener` | `lining` | `hardener` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;opening_kg;receipts_net_kg;closing_kg;return_kg;applied_kg;waste_kg;loss_kg | Weigh actual supply/dosing/outlets and record approved application and curing/hardness results. | kg | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_consumable_mass` | `lining` | `consumable_mass` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;unit;opening_native;receipts_net_native;closing_native;return_native;used_native;waste_native;loss_native | Count or measure in actual native unit; reconcile receipts, stocks, use and all outlets. | kg | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_consumable_count` | `lining` | `consumable_count` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;unit;opening_native;receipts_net_native;closing_native;return_native;used_native;waste_native;loss_native | Count or measure in actual native unit; reconcile receipts, stocks, use and all outlets. | item | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_consumable_length` | `lining` | `consumable_length` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;unit;opening_native;receipts_net_native;closing_native;return_native;used_native;waste_native;loss_native | Count or measure in actual native unit; reconcile receipts, stocks, use and all outlets. | m | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_consumable_area` | `lining` | `consumable_area` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;unit;opening_native;receipts_net_native;closing_native;return_native;used_native;waste_native;loss_native | Count or measure in actual native unit; reconcile receipts, stocks, use and all outlets. | m2 | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_electricity` | `lining` | `electricity` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;meter_id;opening_kWh;closing_kWh;load;runtime_h;provider_coverage | Use traceable submeters; where modelled, retain measured load/runtime and reconciliation. | kWh | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_fuel` | `lining` | `fuel` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;fuel_id;opening_kg;receipts_net_kg;closing_kg;burned_kg;usable_return_kg;nonburned_waste_kg;uncontained_loss_kg;spill_total_kg;recovered_spill_kg;actual_volume;volume_unit;density;density_unit;fuel_state;temperature;temperature_unit;conversion_source | Weigh or meter with actual compatible density; close disjoint stock/burn/nonburned outlet ledger. | kg | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_freight` | `lining` | `freight` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;shipment_id;route;load_kg;distance_km;vehicle;allocation;empty_leg;provider_coverage | Measure payload/distance and use actual service allocation, documenting included legs and provider boundaries. | kg*km | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_provider` | `lining` | `provider` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;provider_id;service_id;native_property;native_unit;native_quantity;completed_results;resource_list;upstream_coverage;direct_overlap | Read provider primary activity/results and upstream coverage; verify exact native property/unit and subtract no undocumented overlap. | actual compatible unit | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_asset_share` | `lining` | `asset_share` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;asset_id;phase;period;consumer_id;job_driver;life_driver;driver_unit;observed_history;remainder_evidence;remainder_source;manufacture;maintenance;replacement;termination;eol;coverage;uncertainty;sensitivity;update_trigger | Build complete phase-indexed asset ledger and measured compatible driver ratio across all consumers; document remainder scenarios, sensitivity and update triggers. | actual compatible unit | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_acceptance` | `lining` | `accepted_lining` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;patch_id;survey_area_m2;openings_m2;reveals_m2;overlap_m2;accepted_A_m2;thickness_mm;installed_volume_m3;pH_criterion;pH_method;pH_result;SSD;sku;cure;hardness;bond;geometry;surface;rework;return_authorisation;signed_acceptance | Survey unique developed geometry before/after, remove overlaps/openings and exclude failed sections; reconcile thickness and complete signed substrate/cure/bond/surface/return gates. | m2 | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_return_mass` | `lining` | `return_mass` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;dispatch_id;native_quantity;condition;destination;receipt_match;stock_convention | Measure dispatch in its own compatible unit and retain actual receiver/condition evidence. | kg | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_return_count` | `lining` | `return_count` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;dispatch_id;native_quantity;condition;destination;receipt_match;stock_convention | Measure dispatch in its own compatible unit and retain actual receiver/condition evidence. | item | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_return_length` | `lining` | `return_length` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;dispatch_id;native_quantity;condition;destination;receipt_match;stock_convention | Measure dispatch in its own compatible unit and retain actual receiver/condition evidence. | m | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_return_area` | `lining` | `return_area` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;dispatch_id;native_quantity;condition;destination;receipt_match;stock_convention | Measure dispatch in its own compatible unit and retain actual receiver/condition evidence. | m2 | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_return_volume` | `lining` | `return_volume` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;sku;dispatch_id;native_quantity;condition;destination;receipt_match;stock_convention | Measure dispatch in its own compatible unit and retain actual receiver/condition evidence. | m3 | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_solid_waste` | `lining` | `solid_waste` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;waste_id;origin;state;gross_kg;tare_kg;moisture;composition;receiver;recovery;dispatch | Weigh distinct collected streams with state/moisture and licensed destination records; link rejects to lining and reapplication. | kg | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_wastewater` | `lining` | `wastewater` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;stream_id;volume_m3;solids;composition;capture;reuse;receiver;dispatch | Meter/tank-measure liquid streams by origin; reconcile recycling, retained water, solids and dispatch. | m3 | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |
| `cp_species_release` | `lining` | `species_release` | collected_record | plant_id;chamber_id;job_id;campaign_id;batch_id;event_id;phase_id;period_id;species;medium;measured_kg;activity;activity_unit;factor;factor_unit;factor_source;composition;composition_basis;composition_source;fate;fate_basis;fate_source;parent_ledger_id;capture;stock;waste;method;uncertainty | Select traceable measured species/medium mass, actual compatible activity times species emission factor, or whole-fluid mass times evidenced composition and release fate. Record activity/factor units/sources, composition/fate basis/provenance and parent ledger; do not scale a complete species factor twice. Close physical parent balance separately. | kg | Each actual batch/run/event/dispatch/asset phase and final survey | Whole campaign including failures; carried stocks and all relevant asset periods | Actual plant/chamber and actual providers/all asset consumers | per 1 m2 reference flow | Calibrated instruments, primary receipts/logs, state/destination and owner coverage; reconcile duplicates and missing records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `unique_area` | `accepted_lining` | A = sum of disjoint accepted developed surfaces minus openings; add actual surveyed reveals once, remove overlaps and failed portions; layers and passes do not multiply area. With missing gate or A<=0 produce no accepted reference output. | cp_acceptance | A m2 | |
| `sku_stock` | `premix`; `starter`; `hardener`; `consumable_mass`; `consumable_count`; `consumable_length`; `consumable_area`; `fuel`; `return_mass`; `return_count`; `return_length`; `return_area`; `return_volume` | In each compatible native SKU ledger attributable supply = opening attributable stock + net-tare gross external receipts - closing carried stock. Gross-with-outlets retains actual outward usable return once; consumed-only subtracts matched return once with matching supply burden and no duplicate credit. All nonreturned losses/waste retain supply burden. Close disjoint final outlets and retain intermediate dosing/use as nonadditive. | Actual receipt/stock/dispatch/use/waste/loss protocols | Attributable native supply and matched outlets | |
| `mix_state_check` | `premix`; `mix_water` | Fresh mix mass = actual dry powder mass + actual added water mass; mixing-water m3 = measured litres / 1000; added water mass = measured water volume times actual density with matching unit/state/temperature/source. Only when exact fresh density is evidenced, loss-free theoretical fresh volume = fresh mass / fresh density; do not infer cured density or accepted A. UK 2025 example at 25 mm / 1 m2 and 2200 kg/m3 gives 55 kg total fresh mix and 55 / 1.16 ~ 47.4 kg dry powder, not 55 kg powder plus water. PDS ~ 22 kg/m2/10 mm is not independently adopted as a dry-powder consumption factor. | cp_premix; cp_mix_water; cp_acceptance; exact product/state/density | State-specific diagnostic only, not a second purchased exchange | `sika-4400-uk-method-2025`; `sika-4400-uk-pds-2021` |
| `fuel_close` | `fuel`; `species_release` | Opening+receipts = closing+burned+usable_return+nonburned_waste+uncontained_loss in compatible fuel mass. Retained recovered spill belongs in closing; total spill is audit-only. Upstream attribution follows sku_stock, while combustion activity uses burned only. Species release selects measured species/medium mass OR actual compatible activity * species emission_factor OR whole-fluid mass * evidenced composition * actual release fate. Do not apply composition/fate again to a factor that already reports the released species; remove captured/stock/returns/waste once; whole fluid balance is nonadditive with species view. | cp_fuel; cp_species_release | Fuel attribution, combustion activity and actual species release separately | |
| `freight_work` | `freight` | Actual attributed freight work = sum of actual shipment load_kg * distance_km under documented allocation/empty-leg coverage; divide by A for reference amount. | cp_freight; cp_acceptance | kg*km per m2 | |
| `asset_life_share` | `asset_share` | Job share = complete manufacture+maintenance+replacement+end-of-life burden times measured compatible job_driver/life_driver across ALL consumers and periods; divide by A. Complete life or evidenced remainder is mandatory; reconcile phase/consumer shares, evaluate uncertainty/sensitivity and update on replacement/termination. | cp_asset_share; cp_acceptance | Actual native asset burden share per m2 | |
| `native_reference_amounts` | all inventory rows | Each inventory card states its actual native quantity divided by the same positive A, except accepted_lining=1m2. Never add different native units or double count an intermediate state, covered provider burden or outward credit. | All linked collection protocols; cp_acceptance | Native exchange quantities per 1 m2 reference flow | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_gate_evidence` | `lining`; `accepted_lining` | Verify plant-integral function and excluded-tank/structural eligibility; actual current local approved product instructions, sound/rough clean concrete, microcracks/delamination/steel review, pH>=10 under adopted UKV7 and SSD; batch ratio/consistency, uncontaminated equipment, layer/thickness, actual cure/hardness, tests/rework and signed sewage-return acceptance. | Actual engineer/owner records and primary local product/method evidence |
| `quantity_state_quality` | all inventory rows | Retain native units, tare, calibration, dates, batch/run/patch/event IDs, stock carry, full failure/changeover/cure/test coverage, composition/state/density evidence and duplicate-owner review. No quantitative template value replaces actual consumption. | Linked collection protocols and closure records |
| `support_and_range` | all inventory rows | Resolve concrete flow/provider/species identities and exact support before final exchange construction; each card's stated Range evidence need requires actual comparable site/product observations or justified uncertainty. No fabricated broad universal bounds; disclose uncovered evidence and block unsupported final quantities. | Concrete verified identities, unit/property details and range evidence |
| `life_coverage` | `asset_share`; `provider` | Missing full asset period/replacement/termination/end-of-life denominator or provider resource/results/upstream scope blocks final dataset; document observed history and evidence-based remainder/sensitivity/update when life incomplete. | Phase/consumer ledger and provider primary records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_gate` | `accepted_lining` | Require same unique positive A, reference link/name/property/unit and passed actual substrate pH/SSD, layer/geometry, cure/hardness, bond/surface and authorised signed owner return gate. No fastest timer, cover-only exception, unresolved reject or zero-area campaign creates accepted output. | `sika-4400-uk-method-2025`; `sika-4400-uk-pds-2021` |
| `supply_and_state_gate` | all inventory rows | Reconcile native SKU opening/receipt/closing/usable return/use/waste/release and exclusive factory product/components. Dry powder+water, fresh mix and cured retained states are distinct; no55kgfresh-as55kgdry plus water, wet-mix duplicate purchase, loss-only omission, or pass/layer area inflation. | |
| `event_and_release_gate` | `lining`; `species_release`; `solid_waste`; `wastewater` | Every batch/run/period, startflush, periodic clean/changeover, failure, rework/reapplication and residue exit has owner and fate. Physical fluid/gas closure and species/medium evidence are nonadditive; safety concentration/SDS alone cannot establish release; captured streams are waste, not direct discharge. | |
| `shared_period_gate` | `asset_share`; `provider`; `electricity`; `fuel`; `freight` | Require complete all-consumer/lifetime phase denominator or evidenced remainder and uncertainty/sensitivity/update, real replacement/termination/end-of-life, compatible driver and reconciled shares. Verify bounded provider native unit/resources/results/upstream scope and direct/rental/assets/spares ownership once. Missing coverage blocks final dataset. | |
| `readiness_gate` | all inventory rows | Retain actual absence evidence, unresolved identities/supports/ranges and missing primary records; candidate methodology cannot supply unverified concrete final exchanges. Automated checks do not verify external UUIDs, full engineering approval or publication readiness. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground repair data package for one actual completed plant chamber lining campaign |
| downstream_use | secondary_dataset; background_dataset; process and lifecyclemodel projections after concrete identity/coverage completion |
| allowed_use | Declared compatible plant-integral calcium-aluminate low-pressure wet-spray lining repair with actual condition/thickness/cure/acceptance and inventory coverage |
| excluded_use | Whole plant construction or treatment operation; bio-reactor/digester; external sewer/manhole; new tank; major rebuild/replaced steel; dry-spray/centrifugal/hand-only or polymer-only repair; invented lifetime/avoided replacement/treatment credit |
| required_metadata | Plant/chamber/function, host condition, approved SKU/system/local instructions, pH/SSD, unique A and thickness/volume/layer orientation, batch/run/event/period IDs, environment/ventilation, curing/hardness/tests/rework and signed return gate; providers/stocks/fates/assets/units |
| required_quality_disclosure | Quantitative mass-state ambiguity and conditional timing evidence; actual state/geometry/consumption, concrete identity/support gaps, Range evidence needs, rejected attempts, provider ownership, asset coverage/remainder/sensitivity, temporal/geographical representativeness and uncertainty |
| update_trigger | New local product/method or changed suitability/pH/cure; actual recipe/equipment/gate, thickness/host condition, provider, material fate, stock convention, measured consumption, asset replacement/termination or remainder evidence changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `sika-4400-uk-pds-2021` | handbook | Sika MonoTop-4400 MIC Product Data Sheet, UK January2021 version07.01, pp1-4; https://gbr.sika.com/dam/dms/gb01/p/sika_monotop_-4400mic.pdf | Calcium-aluminate cement and aggregate premix, UK20kg bag,2.8-3.2L water, fresh density/yield and state caution, substrate/equipment/SSD/wet-spray/cure/cleaning route; product-specific facts only |
| `sika-4400-uk-method-2025` | handbook | Sika Limited, Method Statement Sika MonoTop-4400 MIC, February2025 V7, sections2,4,6-10 pp3-13; https://gbr.sika.com/dam/dms/gb01/p/Sika%20MonoTop-4400%20MIC.pdf | Excluded bioreactor/digester, acid-removal pH>=10, clean equipment/starter/startflush, wet spray and layer/control/cleaning, wet cure/ventilation/hardener and conditional return/hardness; powder-water-fresh mix worked example |
| `un-cpc-3-2025` | official_guidance | United Nations, CPC Version3.0 explanatory notes,30June2025,54253; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Construction-service classification context; narrower scope, not numerical inventory or LCA algebra |
