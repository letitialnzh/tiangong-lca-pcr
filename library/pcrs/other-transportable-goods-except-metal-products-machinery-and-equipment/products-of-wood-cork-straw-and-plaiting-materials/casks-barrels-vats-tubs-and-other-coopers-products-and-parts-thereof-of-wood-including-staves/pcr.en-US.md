---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.casks-barrels-vats-tubs-and-other-coopers-products-and-parts-thereof-of-wood-including-staves
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# New oak wine barrel production


## 1. Scope and Applicability

This methodology covers production of new, unused wine barrels with solid oak staves and oak heads retained by permanent steel hoops, accepted at the cooperage gate. It distinguishes rough staves, seasoned blanks, formed shells and leak-tested complete barrels. Toast level is a declared product configuration, not a universal temperature or emission factor. Natural seasoning, mechanical operations, steam/fire bending, sensory toasting, hoop fitting and leak tests retain separate activity records. The factory examples establish feasible routes rather than an industry-average bill of materials. [seguin-process; seguin-toasts; taransaud-quality]

Excluded products are saleable stave/head semifinished products as reference outputs, other-wood or composite barrels, vats/tubs, charred spirits casks, barrels after wine use and reconditioned barrels. Refurbishment requires prior-use history, cleaning, removed contaminated wood, repair and service-capacity evidence; it cannot inherit this new-manufacture reference. Supplier forest origin, oak species, capacity, seasoning time, toast intensity and useful life have no default values. Optional actual consumables, treatments, emissions and packaging must be added as one atomic exchange each before a dataset claims completeness. [usda-wood-2021; thermal-wood-2005]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.casks-barrels-vats-tubs-and-other-coopers-products-and-parts-thereof-of-wood-including-staves |
| classification_refs | CPC 3.0 31703; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | New all-oak wine barrels, bare black or galvanized steel hoops, declared bending and toast configuration |
| excluded_products | Staves/heads sold alone; used/refurbished barrels; non-oak or composite barrels; vats/tubs; charred spirits casks |
| representative_product | One specified new oak wine barrel model; no fixed oak origin, capacity or service life |
| production_route | Declared split/sawn oak receipt or verified seasoned blank; natural seasoning; machining; rosing; steam/fire bending; toast; head/hoop assembly; leak test; net-mass acceptance and packing |
| market_state | New, unused, empty, accepted complete barrel at factory gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete new oak container for the declared wine maturation or fermentation application |
| How much | 1 kg accepted net new oak wine barrel; also report accepted barrel count and each model capacity, without converting capacity to product mass |
| How well | Meet the declared model, stave/head construction, hoop specification, toast profile and documented leak-test criterion; compare only equivalent configurations |
| How long or cycle | One manufacture and factory acceptance cycle. Wine use cycles and useful life require independent user evidence; no default years or fills |
| reference_flow_link | accepted_new_oak_barrel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Casks, barrels, vats, tubs and other coopers' products and parts thereof, of wood, including staves `8b100f0f-21c2-4373-b469-a67b4f87973e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | new/unused state; wine function; oak species and verified origin or explicitly unknown origin; split/sawn route and receipt moisture; seasoning start/end and supplier boundary; measured barrel net mass and moisture; accepted count; nominal/verified capacity; stave/head dimensions; permanent hoop material/coating/mass; supplied closure; bending method; toast label and actual temperature/time program, fuel and oxygen conditions; leak-test method/criterion/result; factory/year; delivery boundary; packaging separately; biogenic carbon basis; dataset allocation and missing evidence |

The broad product UUID includes the physically specified finished barrel; it does not establish an oak-specific background dataset. Declare all qualifiers in dataset metadata or equivalent evidence; missing identity or acceptance qualifiers make the data package incomplete. A capacity-normalized wine-service comparison requires demonstrated capacity, service cycles and equivalent wine-quality function; 1 kg is an inventory normalization, not proof of equal wine service.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | accepted_new_oak_barrel | Mass | kg | Q is measured accepted net mass of a compatible batch of complete barrels after test drainage, including installed hoops and supplied closure but excluding test water and dispatch packaging. Use cp_acceptance. All inventory rows use per 1 kg reference flow; keep raw batch totals. |
| wood_water_basis | separately measured wood components with state-validated methods | Mass | kg | Record actual wood-component wet mass and dry-basis moisture u for each stage, using a method independently validated for the actual species and physical/thermal/chemical state. m_wood_dry = m_wood_wet/(1+u), where u is kg water/kg oven-dry wood measured on that same component; retain non-wood constituents separately. Use oak-appropriate sampling and report extractive/volatile-loss uncertainty; no generic density or softwood MC. This component rule never replaces whole accepted barrel Q including installed hoops/closure, whole rejected-barrel mass or native whole residue exchange mass. Inorganic ash, carbonized/chemically transformed char, metal, plastic and liquid residues require their own compatible solids/water/composition measurements; do not automatically apply ordinary wood MC or wood-carbon fractions to transformed material. Valid unchanged wood components after thermal processing remain included only with actual-state validation. Moisture loss is not automatically wood yield loss. [usda-wood-2021] |
| power_basis | all electricity rows | Net calorific value | MJ | For verified <1 kV alternating current, measured kWh × 3.6 = MJ electrical energy. Match supplier voltage and delivered boundary; no fuel calorific or generation-efficiency conversion is inferred from the database property label. |
| gas_volume_basis | all natural gas rows | Volume | m3 | Use cp_heat for measured volume at stated T/P, composition, wet/dry state and compressibility; match the background reference-volume convention. Unknown compatibility remains pending; no assumed density from secondary flow coefficients. |
| steam_basis | bending_purchased_steam | Mass | kg | Collect delivered steam mass, pressure, temperature, dryness and return conditions. A net delivered heat calculation needs supplier enthalpy definition and a site steam/condensate/blowdown balance; a MJ property alone is insufficient. Do not select high-pressure or source-specific paper/chemical steam for unspecified cooperage supply. |
| elementary_basis | all elementary output rows | Mass | kg | Keep chemical/CAS identity, carbon origin, source stage and receiving air subclass. NOx mass versus NO2-equivalent requires explicit compatible definitions; exclude N2O and avoid double-counting NO/NO2. PM2.5, PM2.5-PM10 and >PM10 are disjoint emitted fractions, not three cumulative PM totals. [epa-wood-boilers; epa-sawmill-pte-scope] |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated green split/sawn oak blanks delivered to seasoning/cooperage, or separately identified purchased air-seasoned oak blanks with verified upstream seasoning coverage |
| starting_condition_role | Foreground cut-in with upstream cradle burdens explicitly linked; not a burden-free raw material or universal industry start |
| product_classification_scope | New oak wine barrel subset of CPC3.0 31703; covers no stave-only/reference vat or refurbishment datasets |
| recursive_input_rule | A purchased prepared blank or part requires an upstream provider for its actual prior manufacturing/seasoning. Internal retained wood and recirculated water are physical stage records, not new purchases or duplicate cradle burdens |
| upstream_dataset_requirement | Species/route/state-compatible forestry and blank preparation, delivery transport, steel hoop fabrication/coating, delivered utilities, packaging and waste treatment; unresolved providers disclosed and completed before cradle-to-gate claims |
| disclosure | Receipt state, upstream coverage, measured stage map, utilities/purchased versus internal heat, waste destination, test acceptance, allocation, exclusions and omitted evidence. Finished barrel ready for dispatch at factory gate; wine use and end-of-life outside this production dataset |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_states | new_barrel_production | Retain separate rough/seasoned/stave-shell/complete-barrel states and all actually executed stages. Model the integrated cooperage unit from receipt through accepted dispatch once; stage transfers are metered internal ledgers, not extra reference outputs. | seguin-process, taransaud-quality |
| boundary_thermal | thermal and boiler stages | Distinguish bending heat from sensory toast, direct fuel burning from degradation of retained oak, and separate boiler outlets. Use EPA boiler evidence only for a matching actual boiler; open fires require their own site emission evidence. | seguin-toasts, thermal-wood-2005, epa-wood-boilers |
| boundary_material | all inventory rows | Include actual raw materials, utility use, rejects, wastewater, wastes and emissions. A UUID gap does not authorize omitting a physically present flow; preserve a concrete atomic exchange and provider/identity gap. Document any actual treatment additive, adhesive, oil, packaging component or direct natural-water release with its own row before completeness. | usda-wood-2021, taransaud-quality |
| boundary_carbon | wood and air outputs | Keep dry wood, retained toasted-layer carbon, exported residues, collected char/ash carbon and emitted chemical carbon as a reconciled physical account; retain biogenic CO2 in LCI. Upstream forest uptake is counted once in the linked boundary and not inferred as a negative cooperage emission. | usda-wood-2021, thermal-wood-2005, epa-wood-boilers |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| new_barrel_production | New oak wine barrel production | required | All actual stages of the declared receipt/configuration | foreground production | per 1 kg reference flow |

One integrated foreground unit is used because the same barrel passes through machining, shaping, testing and packing; there is one saleable reference output. Preserve this ordered physical stage map and the measured mass, water and carbon transfers independently of the environmental burden account. At a separately modelled stage boundary, both sides must link the same real intermediate, quantity, moisture and time; no fictitious second finished-barrel UUID or allocation-scaled transfer is permitted.

| stage_id | inclusion | operation | physical records |
| --- | --- | --- | --- |
| receipt | required | Wood receipt and stock reconciliation | Species, split/sawn/seasoned state, lot mass and supplier coverage |
| seasoning | conditional | Natural air seasoning | Required for green receipts; actual dates, air/rain, sprinkling, loss and water/energy logs; pre-seasoned purchases link upstream |
| machining | required | Trim, plane, hollow, joint staves; machine heads and grooves | Keep wood yield, sawdust, shavings, offcuts, dust control and electricity by operation |
| bending | required | Rosing, preheat and steam/fire bending | Declare actual method; distinguish wetting, steam, fuel, internal/off-site heat and temperature/time history |
| toasting | conditional | Oenological toasting | Declare no-toast or actual toast label, temperature/time/oxygen and fuel; retained toasted layer differs from removed char |
| assembly | required | Head setting, permanent metal hoops and final sanding | Stave/head/hoop/bung net masses, temporary-tool reuse, actual purchased versus locally formed hoops |
| leak_test | required | Water-tightness test and corrective rework | Actual fill/pressure/duration/criterion, water reuse, reject and final acceptance; no default test volume |
| dispatch | required | Drain, measure net mass, prepare and pack for dispatch | Accepted count and mass Q, residual water, packaging separately and dispatch boundary |
| boiler | conditional | On-site steam generation | Only if actual boiler operates: feedwater, fuel, internal steam, condensate, blowdown, ash and separate stack monitoring |

### Process: New oak barrel production (`new_barrel_production`)

#### Inputs

##### Product flows

###### Green split oak cooperage blank (`green_split_oak_blank`)

Receive only untreated split oak blanks; weigh each compatible lot and retain species, split route, dimensions and moisture. This row does not cover sawn or pre-seasoned receipts.

- Selected flow: Cleft timber `7f0b2ade-9ce4-4cbb-a05f-6a30d7fbf0cc`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_wood.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood`
- Sources: `seguin-process`

###### Green rough-sawn oak board (`green_sawn_oak_blank`)

Only rough-sawn, undried oak boards thicker than 6 mm with grain and watertightness acceptance; record supplier route and upstream transport. Never substitute this record for split wood. The source names an upstream P3 intermediate at plant; actual supplier preparation, transport and gate compatibility remain pending, without replacing the declared untreated green >6 mm rough-sawn oak state.

- Selected flow: Green non-coniferous sawnwood, rough-sawn `e882cc86-ffc0-4470-8534-84fef54f20a0`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_wood.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood`
- Sources: `seguin-process`

###### Air-seasoned rough oak cooperage blank (`seasoned_oak_blank`)

Actual untreated all-oak cooperage blanks received after natural air seasoning, separately from green receipt. Retain measured delivered moisture, dimensions, species and batch mass, verified upstream preparation/seasoning history and its water, losses and energy, and the supplier delivery boundary; do not repeat supplier seasoning at this site. The broad wood-material locator has no specified form, moisture, route or provider and does not establish an oak-specific background; quantity and provider compatibility remain pending.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_wood.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wood`
- Sources: `seguin-process`

###### Seasoning pumps electricity (`season_electricity`)

Stage-specific metered low-voltage grid electricity when artificial sprinkling operates; this UUID is restricted to customer-side alternating current below 1 kV. Retain the meter boundary; attribute shared compressor/extraction demand once. The source geographic context is CN. Actual site/provider geography, supply mix and delivery/loss-boundary compatibility remain pending; the locator does not establish a universal electricity background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### Trimming, planing, jointing and head machining electricity (`machining_electricity`)

Stage-specific metered low-voltage grid electricity when machinery operates; this UUID is restricted to customer-side alternating current below 1 kV. Retain the meter boundary; attribute shared compressor/extraction demand once. The source geographic context is CN. Actual site/provider geography, supply mix and delivery/loss-boundary compatibility remain pending; the locator does not establish a universal electricity background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### Steam or mechanical bending auxiliaries electricity (`bending_electricity`)

Stage-specific metered low-voltage grid electricity when powered auxiliaries operate; this UUID is restricted to customer-side alternating current below 1 kV. Retain the meter boundary; attribute shared compressor/extraction demand once. The source geographic context is CN. Actual site/provider geography, supply mix and delivery/loss-boundary compatibility remain pending; the locator does not establish a universal electricity background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### Toasting controls or electric heaters electricity (`toasting_electricity`)

Stage-specific metered low-voltage grid electricity when electrical equipment operates; this UUID is restricted to customer-side alternating current below 1 kV. Retain the meter boundary; attribute shared compressor/extraction demand once. The source geographic context is CN. Actual site/provider geography, supply mix and delivery/loss-boundary compatibility remain pending; the locator does not establish a universal electricity background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### Hoop fitting and finish sanding electricity (`hooping_electricity`)

Stage-specific metered low-voltage grid electricity when powered equipment operates; this UUID is restricted to customer-side alternating current below 1 kV. Retain the meter boundary; attribute shared compressor/extraction demand once. The source geographic context is CN. Actual site/provider geography, supply mix and delivery/loss-boundary compatibility remain pending; the locator does not establish a universal electricity background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### Leak-test pump and compressor electricity (`testing_electricity`)

Stage-specific metered low-voltage grid electricity when powered test equipment operates; this UUID is restricted to customer-side alternating current below 1 kV. Retain the meter boundary; attribute shared compressor/extraction demand once. The source geographic context is CN. Actual site/provider geography, supply mix and delivery/loss-boundary compatibility remain pending; the locator does not establish a universal electricity background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### Drying after test and dispatch preparation electricity (`packing_electricity`)

Stage-specific metered low-voltage grid electricity when powered finishing equipment operates; this UUID is restricted to customer-side alternating current below 1 kV. Retain the meter boundary; attribute shared compressor/extraction demand once. The source geographic context is CN. Actual site/provider geography, supply mix and delivery/loss-boundary compatibility remain pending; the locator does not establish a universal electricity background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### On-site steam-generation auxiliaries electricity (`boiler_electricity`)

Stage-specific metered low-voltage grid electricity when an on-site boiler operates; this UUID is restricted to customer-side alternating current below 1 kV. Retain the meter boundary; attribute shared compressor/extraction demand once. The source geographic context is CN. Actual site/provider geography, supply mix and delivery/loss-boundary compatibility remain pending; the locator does not establish a universal electricity background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### Seasoning spray tap water (`season_spray_water`)

Record artificial sprinkling separately from rain and recirculated water.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### Bending wetting tap water (`bending_water`)

Record actual fire-bending wetting or immersion makeup.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### Leak-test tap water (`test_water`)

Meter fresh test makeup; re-used water is a circulation record, not a repeated freshwater input.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `taransaud-quality`

###### Boiler makeup tap water (`boiler_makeup_water`)

Conditional on-site boiler input; reconcile steam, returned condensate, blowdown and losses.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_resources.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources`
- Sources: `seguin-process`

###### Purchased steam for oak stave bending (`bending_purchased_steam`)

Only external delivered steam mass. Record pressure, temperature, dryness, enthalpy and return conditions; keep its provider link unresolved until the supplier reference basis is compatible. Internal boiler steam is a stage ledger entry, not another external input.

- Selected flow: Purchased steam for oak stave bending
- Flow property / unit: Mass / kg
- Amount rule: Collected actual exchange per 1 kg reference flow using cp_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `seguin-toasts`

###### Bending fire purchased non-coniferous fuel wood (`bending_purchased_fuelwood`)

Only separately purchased short logs or split billets meeting the non-coniferous fuel-wood record. Retain species, moisture, contamination and delivery route; internally consumed oak offcuts are tracked in the dry-wood ledger and receive no second upstream purchase. The source upstream gate is unprocessed fuelwood at forest roadside. Actual preparation, delivery/transport and provider compatibility remain pending; it does not cover internally generated factory offcut fuel.

- Selected flow: Fuel wood of non-coniferous wood `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `thermal-wood-2005`

###### Bending fire natural gas (`bending_natural_gas`)

Conditional gaseous pipeline natural gas, reference Volume/m3. Match temperature, absolute pressure, wet/dry composition, compressibility and supplier background m3 definition before linking a quantity; secondary database mass coefficients are not density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3

Identity support:flow property `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `thermal-wood-2005`

###### Toasting fire purchased non-coniferous fuel wood (`toasting_purchased_fuelwood`)

Only separately purchased short logs or split billets meeting the non-coniferous fuel-wood record. Retain species, moisture, contamination and delivery route; internally consumed oak offcuts are tracked in the dry-wood ledger and receive no second upstream purchase. The source upstream gate is unprocessed fuelwood at forest roadside. Actual preparation, delivery/transport and provider compatibility remain pending; it does not cover internally generated factory offcut fuel.

- Selected flow: Fuel wood of non-coniferous wood `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `thermal-wood-2005`

###### Toasting fire natural gas (`toasting_natural_gas`)

Conditional gaseous pipeline natural gas, reference Volume/m3. Match temperature, absolute pressure, wet/dry composition, compressibility and supplier background m3 definition before linking a quantity; secondary database mass coefficients are not density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3

Identity support:flow property `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `thermal-wood-2005`

###### On-site wood boiler purchased non-coniferous fuel wood (`boiler_purchased_fuelwood`)

Only separately purchased short logs or split billets meeting the non-coniferous fuel-wood record. Retain species, moisture, contamination and delivery route; internally consumed oak offcuts are tracked in the dry-wood ledger and receive no second upstream purchase. The source upstream gate is unprocessed fuelwood at forest roadside. Actual preparation, delivery/transport and provider compatibility remain pending; it does not cover internally generated factory offcut fuel.

- Selected flow: Fuel wood of non-coniferous wood `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `epa-wood-boilers`

###### On-site wood boiler natural gas (`boiler_natural_gas`)

Conditional gaseous pipeline natural gas, reference Volume/m3. Match temperature, absolute pressure, wet/dry composition, compressibility and supplier background m3 definition before linking a quantity; secondary database mass coefficients are not density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3

Identity support:flow property `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_heat.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `epa-wood-boilers`

###### Finished black carbon-steel cooperage hoop (`black_steel_hoop`)

Only actual purchased closed permanent black carbon-steel barrel hoops. Measure installed mass including the actual coating and retain grade, recycled content, ring dimensions, forming/welding and supplier boundary; temporary working hoops remain tools with actual usage/replacement records. Generic Hoops names/comment describe circular hoops without a hard treatment route, while source CPC42946 concerns fencing/barbed or twisted hoop wire. Retain this unresolved classification ambiguity for source-owner/provider clarification; the locator does not establish exact finished-ring manufacture, coating recipe or background compatibility.

- Selected flow: Hoops, unspecified `1b7aae9d-e2c8-4cbe-b979-4966170154e3`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: `seguin-process`

###### Finished galvanized carbon-steel cooperage hoop (`galvanized_steel_hoop`)

Only actual purchased closed permanent galvanized carbon-steel barrel hoops. Measure installed mass including the actual zinc coating and retain grade, ring dimensions, forming/welding, coating and supplier boundary; do not invent additional zinc mass or substitute packaging straps. Generic Hoops names/comment describe circular hoops without a hard treatment route, while source CPC42946 concerns fencing/barbed or twisted hoop wire. Retain this unresolved classification ambiguity for source-owner/provider clarification; the locator does not establish exact finished-ring manufacture, galvanization recipe or background compatibility.

- Selected flow: Hoops, unspecified `1b7aae9d-e2c8-4cbe-b979-4966170154e3`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: `seguin-process`

###### Finished oak bung (`oak_bung`)

Only the actual finished all-oak bung supplied with an accepted barrel, measured separately and included in installed net mass. Retain dimensions, treatment state and fabrication/supplier boundary. The broad wood-material locator is not a confirmed bung-manufacturing background; quantity and provider compatibility remain pending. Silicone, cork, glued or composite closures require separate actual atomic rows/configuration.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: `taransaud-quality`

###### LDPE dispatch film (`packaging_ldpe`)

Conditional measured non-cellular, non-adhesive, unreinforced LDPE film. Keep transport packaging outside accepted barrel net mass; other wrapping polymers require their own atomic rows. This source film is also nonlaminated and unsupported; confirm the actual grade, thickness, physical form and provider boundary.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_parts`
- Sources: `seguin-process`

#### Outputs

##### Product flows

###### Accepted new oak wine barrel (`accepted_new_oak_barrel`)

1 kg accepted net complete new oak wine barrel, including installed permanent hoops and supplied bung, excluding transport packaging and residual leak-test water. This is the only reference-product output. The official Chinese baseName mistranslates cooperage as copperware; retain the official display but disclose pending source-owner translation clarification. The coherent English name, wood classification and container description support this qualified complete wooden barrel, not copper material.

- Selected flow: Casks, barrels, vats, tubs and other coopers' products and parts thereof, of wood, including staves `8b100f0f-21c2-4373-b469-a67b4f87973e`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `taransaud-quality`

###### Untreated oak sawdust for sale (`sold_sawdust`)

Actual separately collected and sold untreated oak sawdust, with measured wet mass, moisture, dry mass/carbon and contamination state. Confirm lawful coproduct status, sales contract, customer-accepted specification, actual use and receiver; payment alone does not establish product status. Keep this physical stream separate from discarded wood, internal fuel and returned stock. The broad wood-material locator leaves form, moisture, route and provider unspecified; supplier/customer quantity and gate compatibility remain pending. Burden shares never scale physical output.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `corrim-allocation-case`

###### Untreated oak planing shavings for sale (`sold_shavings`)

Actual separately collected and sold untreated oak planing shavings, with measured wet mass, moisture, dry mass/carbon and contamination state. Confirm lawful coproduct status, sales contract, customer-accepted specification, actual use and receiver; payment alone does not establish product status. Keep this physical stream separate from discarded wood, internal fuel and returned stock. The broad wood-material locator leaves form, moisture, route and provider unspecified; supplier/customer quantity and gate compatibility remain pending. Burden shares never scale physical output.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `corrim-allocation-case`

###### Untreated oak uncompacted offcuts for sale (`sold_offcuts`)

Actual separately collected and sold untreated oak non-agglomerated solid offcuts, with measured wet mass, moisture, dry mass/carbon and contamination state. Confirm lawful coproduct status, sales contract, customer-accepted specification, actual use and receiver; payment alone does not establish product status. Keep this physical stream separate from discarded wood, internal fuel and returned stock. The broad wood-material locator leaves form, moisture, route and provider unspecified; supplier/customer quantity and gate compatibility remain pending. Burden shares never scale physical output.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `corrim-allocation-case`

##### Waste flows

###### Discarded untreated oak sawdust (`discarded_sawdust`)

Only discarded collected sawdust leaving the unit, not sold sawdust, emitted PM or internally burned fuel. The source route is untreated for combustion/recycling: retain this adoption only for an actual compatible receiving route, with receiver evidence. Unknown or different destinations remain unresolved; do not infer fuel credits or actual treatment emissions.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `seguin-process`

###### Discarded untreated oak planing shavings (`discarded_shavings`)

Actual separately collected non-agglomerated untreated oak planing shavings, independently weighed with measured moisture, material/contamination state and actual receiver. Broad Wood waste names/synonyms/comment include wood residues and its primary-production route is compatible with manufacturing residues; source CPC39282 agglomeration conflicts with this physical description. Retain unresolved source classification/receiver/provider clarification, not an exact agglomeration or treatment claim. Exclude sold coproducts, internal fuel/returns, stack particles and separated char; do not import the source municipal-waste percentages.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `seguin-process`

###### Discarded uncompacted oak offcuts (`discarded_offcuts`)

Weigh actual non-agglomerated oak pieces with glue/chemical contamination explicitly absent or characterized and a declared receiving operator. This is conditional physical identity use; the source classification conflict remains unresolved.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `seguin-process`

###### Rejected new oak barrel (`rejected_barrel`)

Only a rejected complete barrel leaving the unit; separate recovered hoops from wood if dismantled. Internal repair consumes resources but is not a second reference output.

- Selected flow: Rejected new oak barrel
- Flow property / unit: Mass / kg
- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `taransaud-quality`

###### Collected oak seasoning runoff (`season_runoff`)

Measure collected leachate sent to treatment; separate rainfall, spray water and wood-extractive load. This is not a direct natural-water discharge.

- Selected flow: Collected oak seasoning runoff
- Flow property / unit: Mass / kg
- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `seguin-process`

###### Untreated barrel leak-test wastewater (`test_wastewater`)

Measure exported test water after reuse; retain contamination, receiving treatment and all actual additives.

- Selected flow: Untreated barrel leak-test wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `taransaud-quality`

###### Wood-fire bottom ash (`thermal_bottom_ash`)

Separately collected actual inorganic bottom ash from wood fuel used in bending or toasting, with measured mass, fuel/source, inorganic composition, unburned carbon, moisture, contamination/hazard state and receiver. The generic ash locator has no opposing source/route but establishes no wood-fuel treatment background; quantity and provider compatibility remain pending. Keep sorted char, retained barrel toast layer, captured fly ash and stack particles separate.

- Selected flow: ash `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `thermal-wood-2005`

###### Separated oak char residue (`thermal_char`)

Only removed char, not the retained toasted layer in the barrel. Record carbon, destination and combustion if subsequently burned.

- Selected flow: Separated oak char residue
- Flow property / unit: Mass / kg
- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `thermal-wood-2005`

###### Wood-boiler bottom ash (`boiler_bottom_ash`)

Only separately collected actual inorganic bottom ash from the on-site wood-fuel boiler, with measured mass, fuel/source, inorganic composition, unburned carbon, moisture, contamination/hazard state and receiver. The generic ash locator has no opposing source/route but establishes no boiler-specific treatment background; quantity and provider compatibility remain pending. Keep sorted char, captured fly ash and stack particles separate.

- Selected flow: ash `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `epa-wood-boilers`

###### Collected wood-boiler fly ash (`boiler_fly_ash`)

Only actual wood-boiler ash captured and removed by a flue-gas purification control device, matching the source flow treatment route. Measure collected mass and retain fuel, device, inorganic chemistry, unburned carbon, moisture/contamination and receiver/provider boundary. Captured ash is neither stack particulate emissions nor bottom ash or machining dust; actual treatment and provider quantity compatibility remain pending.

- Selected flow: dust collector ash `2802116a-dd90-4bad-a456-5afe7d7fa1d6`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `epa-wood-boilers`

###### Untreated boiler blowdown water (`boiler_blowdown`)

Conditional on-site boiler exported blowdown; identify dissolved solids and destination.

- Selected flow: Untreated boiler blowdown water
- Flow property / unit: Mass / kg
- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `epa-wood-boilers`

###### Hoop-fitting steel scrap (`hoop_steel_scrap`)

Conditional scrap from on-site metal fitting, unprocessed at plant; record actual steel grade and recycling recipient.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `seguin-process`

###### Unprocessed waste LDPE film (`packing_film_scrap`)

Only production wrapping offcuts or rejects, not downstream packaging disposal; state contamination and treatment.

- Selected flow: Unprocessed waste LDPE film
- Flow property / unit: Mass / kg
- Amount rule: Collected actual exchange per 1 kg reference flow using cp_residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `seguin-process`

##### Elementary flows

All elementary emission cards below refer to outdoor air, unspecified subcompartment. Use a matching verified subclass if the site establishes urban ground-level, high-stack or another receiving condition; these records cannot be substituted for indoor workplace exposure. Source stage and outlet remain distinct collection fields; a shared thermal hood must not be counted once for every stage it serves.

###### Seasoning water vapour (`season_water_vapour`)

Calculate evaporated water from the corrected water balance, retaining rain, spray, runoff and inventory change; wet-mass loss alone also contains dry-material loss.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_balance`
- Sources: `usda-wood-2021`

###### Post-test drying water vapour (`test_drying_vapour`)

Account for water lost after leak testing; it is excluded from accepted net barrel mass.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_balance`
- Sources: `usda-wood-2021`

###### Machining PM2.5 (`machining_pm25`)

Measure the emitted size fraction after actual controls, with outlet, aerodynamic size definition and filterable/condensable coverage. Size bins must be disjoint; do not add total PM or cumulative PM10 again, and never derive kg from visible smoke or captured dust.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-scope`

###### Machining PM2.5 to PM10 fraction (`machining_pm_between`)

Measure the emitted size fraction after actual controls, with outlet, aerodynamic size definition and filterable/condensable coverage. Size bins must be disjoint; do not add total PM or cumulative PM10 again, and never derive kg from visible smoke or captured dust.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-scope`

###### Machining PM above 10 micrometres (`machining_pm_coarse`)

Measure the emitted size fraction after actual controls, with outlet, aerodynamic size definition and filterable/condensable coverage. Size bins must be disjoint; do not add total PM or cumulative PM10 again, and never derive kg from visible smoke or captured dust.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-pte-scope`

###### Bending and toasting exhaust PM2.5 (`thermal_pm25`)

Measure the emitted size fraction after actual controls, with outlet, aerodynamic size definition and filterable/condensable coverage. Size bins must be disjoint; do not add total PM or cumulative PM10 again, and never derive kg from visible smoke or captured dust.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Bending and toasting exhaust PM2.5 to PM10 fraction (`thermal_pm_between`)

Measure the emitted size fraction after actual controls, with outlet, aerodynamic size definition and filterable/condensable coverage. Size bins must be disjoint; do not add total PM or cumulative PM10 again, and never derive kg from visible smoke or captured dust.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Bending and toasting exhaust PM above 10 micrometres (`thermal_pm_coarse`)

Measure the emitted size fraction after actual controls, with outlet, aerodynamic size definition and filterable/condensable coverage. Size bins must be disjoint; do not add total PM or cumulative PM10 again, and never derive kg from visible smoke or captured dust.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### On-site boiler exhaust PM2.5 (`boiler_pm25`)

Measure the emitted size fraction after actual controls, with outlet, aerodynamic size definition and filterable/condensable coverage. Size bins must be disjoint; do not add total PM or cumulative PM10 again, and never derive kg from visible smoke or captured dust.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### On-site boiler exhaust PM2.5 to PM10 fraction (`boiler_pm_between`)

Measure the emitted size fraction after actual controls, with outlet, aerodynamic size definition and filterable/condensable coverage. Size bins must be disjoint; do not add total PM or cumulative PM10 again, and never derive kg from visible smoke or captured dust.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### On-site boiler exhaust PM above 10 micrometres (`boiler_pm_coarse`)

Measure the emitted size fraction after actual controls, with outlet, aerodynamic size definition and filterable/condensable coverage. Size bins must be disjoint; do not add total PM or cumulative PM10 again, and never derive kg from visible smoke or captured dust.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### Bending and toasting biogenic carbon dioxide (`thermal_co2_bio`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero. Retain biogenic CO2 in LCI regardless of greenhouse-gas statistical exclusions; no automatic carbon-neutral or storage credit.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Bending and toasting fossil carbon dioxide (`thermal_co2_fossil`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Bending and toasting biogenic carbon monoxide (`thermal_co_bio`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Bending and toasting fossil carbon monoxide (`thermal_co_fossil`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Bending and toasting biogenic methane (`thermal_ch4_bio`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Bending and toasting fossil methane (`thermal_ch4_fossil`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Bending and toasting nitrous oxide (`thermal_n2o`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Bending and toasting nitrogen oxides (`thermal_nox`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero. NOx excludes N2O; do not also inventory constituent NO/NO2. Mass/kg does not prove NO2-equivalent quantity: monitoring, LCI record and LCIA definitions must agree before use.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Bending and toasting sulfur dioxide (`thermal_so2`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### On-site boiler biogenic carbon dioxide (`boiler_co2_bio`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero. Retain biogenic CO2 in LCI regardless of greenhouse-gas statistical exclusions; no automatic carbon-neutral or storage credit.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### On-site boiler fossil carbon dioxide (`boiler_co2_fossil`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### On-site boiler biogenic carbon monoxide (`boiler_co_bio`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### On-site boiler fossil carbon monoxide (`boiler_co_fossil`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### On-site boiler biogenic methane (`boiler_ch4_bio`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### On-site boiler fossil methane (`boiler_ch4_fossil`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### On-site boiler nitrous oxide (`boiler_n2o`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### On-site boiler nitrogen oxides (`boiler_nox`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero. NOx excludes N2O; do not also inventory constituent NO/NO2. Mass/kg does not prove NO2-equivalent quantity: monitoring, LCI record and LCIA definitions must agree before use.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### On-site boiler sulfur dioxide (`boiler_so2`)

Measure or calculate actual atmospheric release by outlet and source stage. Separate fuel combustion from thermal degradation of barrel wood; verify biogenic/fossil origin, abatement and startup/shutdown. Absence requires documented route or detection-limit evidence, not an assumed zero.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### Toasting Methanol (`thermal_methanol`)

A conditional species to assess in the thermal-degradation exhaust, not a presumed positive emission. Sample actual escaped species after any combustion/control; source pyrolysate percentages and aroma retained in wood are not air-emission factors.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Toasting Acetaldehyde (`thermal_acetaldehyde`)

A conditional species to assess in the thermal-degradation exhaust, not a presumed positive emission. Sample actual escaped species after any combustion/control; source pyrolysate percentages and aroma retained in wood are not air-emission factors.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Toasting Acrolein (`thermal_acrolein`)

A conditional species to assess in the thermal-degradation exhaust, not a presumed positive emission. Sample actual escaped species after any combustion/control; source pyrolysate percentages and aroma retained in wood are not air-emission factors.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Toasting Acetic acid (`thermal_acetic`)

A conditional species to assess in the thermal-degradation exhaust, not a presumed positive emission. Sample actual escaped species after any combustion/control; source pyrolysate percentages and aroma retained in wood are not air-emission factors.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `thermal-wood-2005`

###### Boiler Formaldehyde (`boiler_formaldehyde`)

Conditional wood-boiler species assessment supported by AP-42 Table 1.6-3. Use site measurements or a demonstrably matching boiler/fuel/control factor and uncertainty, never transfer a boiler factor to the open toasting fire.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`

###### Boiler Acetaldehyde (`boiler_acetaldehyde`)

Conditional wood-boiler species assessment supported by AP-42 Table 1.6-3. Use site measurements or a demonstrably matching boiler/fuel/control factor and uncertainty, never transfer a boiler factor to the open toasting fire.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass / kg

Identity support:flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-wood-boilers`


###### Bending and toasting water vapour (`thermal_water_vapour`)

Outdoor-air emission, unspecified subtype. Reconcile water evaporated from wood, fuel and applied water with separately evidenced chemical water formed during combustion; keep boiler/thermal outlets separate and do not re-use the seasoning or post-test evaporation total.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_balance`
- Sources: `thermal-wood-2005`

###### On-site boiler water vapour (`boiler_water_vapour`)

Outdoor-air emission, unspecified subtype. Reconcile water evaporated from wood, fuel and applied water with separately evidenced chemical water formed during combustion; keep boiler/thermal outlets separate and do not re-use the seasoning or post-test evaporation total.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg

Identity support: flow property `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`

- Amount rule: Collected actual exchange per 1 kg reference flow using cp_balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_balance`
- Sources: `epa-wood-boilers`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | new_barrel_production | First use measured subdivision or causal direct attribution. Finishing, leak tests, permanent hoops and barrel-only packaging belong to the barrel. Saleable wood coproducts are identified by actual destination/contract; waste disposition alone does not establish a coproduct. | corrim-allocation-case, taransaud-quality |
| allocation_physical_ledger | all inventory rows | Maintain the complete unallocated physical stage, dry-mass/water/carbon ledger. Internal offcut fuel is accounted once with matching produced and consumed mass and moisture. Whole-unit internal transfers cancel; do not assign avoided upstream fuel burden or duplicate purchases without a separately declared substitution scenario. | usda-wood-2021, thermal-wood-2005 |
| allocation_shared_burden | shared environmental burdens | If unavoidable shared burdens remain, justify a site-specific physical causal relationship for eligible coproducts; report the eligible masses and shares. If no physical relationship can be defended, justify economic attribution using same-period net revenues and test an alternative. The softwood case supplies no oak cooperage allocation share or default method. | corrim-allocation-case |
| allocation_no_mass_scaling | coproduct outputs and internal links | Apply allocation shares only to the burden account, never multiply actual barrel/coproduct output quantities, residual carbon, internal wood transfers or measured water by a share. Keep the full physical ledger alongside the allocated product dataset; reconcile that ledger rather than demanding mass closure in the reduced burden ledger. | usda-wood-2021, corrim-allocation-case |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | new_barrel_production | accepted product | acceptance/weighing | model; batch; oak species; capacity; permanent hoop/closure mass; test result; accepted count; accepted net mass Q; drain state; MC; stock movement | Calibrated weighing of every accepted configuration after draining test water; exclude dispatch packaging; compare batch and dispatch records; sum accepted net kg Q; denominator for every per 1 kg reference flow inventory | kg; count; model capacity | each accepted batch | Cover manufacture dates, including returns and rejects | Compatible model/toast batches only | per 1 kg reference flow | Scale calibration and linked acceptance/dispatch receipts |
| cp_wood | new_barrel_production | oak receipt and stage state | stock/weighing/moisture | lot; botanical species; origin evidence/unknown; split/sawn/seasoned; wet mass; dimensions; MC samples; initial/final stocks; rejects; time | Weigh lots and stage wood; moisture by representative oven-stable sample masses or calibrated oak-adjusted meter checked against oven method; record extractive-loss uncertainty; correct stock change; sum attributable wood per 1 kg reference flow using Q | kg; dry-basis moisture | each lot and state change | Include multi-season seasoning cohort, not just current-year dispatch | Seasoning yard and cooperage/supplier identified | per 1 kg reference flow | Lot traceability; sample representativeness; paired mass/MC records |
| cp_resources | new_barrel_production | stage electricity and water | meter/activity | stage; batch; meter; start/end; kWh; fresh water kg or volume/density; rain; reused water; pump/compressor/extraction boundary; stocks | Stage meters and calibrated water meters; record shared loads by measured causal duty, reconcile utility invoices; convert water volume only with actual state/density; sum measured attributable quantities / Q; per 1 kg reference flow | kWh; MJ; kg; m3 | per stage/batch, bills per reporting period | Same manufacture/seasoning cohorts as Q | Factory meter boundaries declared | per 1 kg reference flow | Meter calibration; invoice and shared-load closure |
| cp_heat | new_barrel_production | fuel, steam and internal heat | fuel/enthalpy | stage; batch; purchased fuel; internal offcut fuel; species; moisture; heating value measured basis; gas T/P wet/dry composition Z; supplier m3; steam mass P/T/x; condensate; blowdown; heat boundary | Calibrated fuel/steam meters and weighing; obtain supplier reference definitions; use site steam-water enthalpy balance for heat conversions only when every relevant state is documented; sum compatible externally exchanged quantities / Q; per 1 kg reference flow; retain internal ledgers | kg; m3; MJ with defined basis | batch and source changes, including startup/shutdown | Cover actual seasoning assistance/bending/toast/boiler operation | Purchased and internal supply separately | per 1 kg reference flow | Supplier basis; instruments; heat and fuel balance; missing-state disclosure |
| cp_parts | new_barrel_production | hoops, closure and packing | bill of materials/weighing | model; component; material/coating; origin/provider; permanent/temporary; net mass; scrap; packing component; stock; tool replacement | Weigh installed components and consumed wrapping separately; use compatible supplier BOM, reconcile temporary-tool service/replacement records; sum attributable components / Q; per 1 kg reference flow | kg | batch/model/component change | Same acceptance period as Q | Factory and suppliers declared | per 1 kg reference flow | Traceable BOM; coating included; separate transport packaging |
| cp_residues | new_barrel_production | individual coproduct/waste streams | weighing/destination | stage; stream; source; moisture; dry mass; carbon; sold/internal/discarded; contract; price; treatment recipient; stock; whole native exchange mass; separated component masses; actual-state validated water/solids method; wood-component MC; ash/char dry inorganic solids and independently assayed carbon; liquid water/non-water fractions; metal/plastic composition; carbon origin | Segregated weighing and sampled carbon/moisture; reconcile waste manifests, sales and internal fuel use; collect runoff/test/blowdown flow and contamination; full physical outputs / Q; per 1 kg reference flow; allocation kept separately. Independently separate actual components; apply wood_water_basis/dry_wood only to measured wood with methods validated for its actual species/state. Retain whole liquid mass and independently measured water/non-water constituents, whole metal/plastic mass/composition and whole rejected barrel plus separately measured wood/hoops/other constituents. Inorganic ash and carbonized char use validated material-specific solids/water tests and independent carbon assays, never ordinary wood MC or a wood-carbon fraction. Preserve all native whole handover masses; unknown separation or actual-state method remains pending. | kg; water volume plus defined density | each removed or sold lot | Same stock-corrected production/seasoning cohorts | Yard/cooperage and receiving treatment | per 1 kg reference flow | Contracts/receipts; distinct streams and destinations |
| cp_air | new_barrel_production | each emitted species/outlet | source test/speciation | stage; outlet; operating time; fuel/wood carbon origin; species CAS; concentration; gas flow; T/P moisture O2; detection limit; size method; filterable/condensable; control; startup/shutdown | Representative source sampling and calibrated exhaust flow integration after controls; species-specific validated factors only with matching fuel/technology/control/activity basis and uncertainty. Unknown values are missing, not zeros; sum emitted species mass per compatible source regime / Q; per 1 kg reference flow | kg species; concentration and defined gas volume | representative regimes; every control/fuel/toast change | Integrate complete reporting period and transient regimes | Thermal hood, machining outlet and boiler stack distinct | per 1 kg reference flow | Lab accreditation/method; calibration; uncertainty; speciation/source evidence |
| cp_balance | new_barrel_production | physical wood-water-carbon ledger | stage reconciliation | dry wood in/out; retained barrel wood; wood/hoop mass; internal fuel; water receipt/rain/spray/reuse/runoff/steam/evaporation; char/ash; emitted species carbon; C fractions; stock; separate whole/component mass; state-specific wood, ash/char, inorganic solids, liquid water/non-water and metal/plastic carbon evidence | Reconcile stage ledgers using measured stock change, moisture and elemental carbon; investigate residuals, distinguish heat-induced dry loss from evaporation; verify emitted rather than generated species; stock-corrected full balances / Q; per 1 kg reference flow. Preserve complete-barrel Q and native whole exchange quantities; wood, water, inorganic solids and independently assayed material carbon remain separate component accounts, with unknown separation/state method disclosed. | kg dry matter; kg water; kg C | each cohort and reporting period | Cover seasoning and manufacture through Q acceptance | Unallocated physical foreground including internal links | per 1 kg reference flow | Closure residual and uncertainty, no forced zero |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | Divide stock-corrected attributable exchange totals by accepted net barrel mass Q from cp_acceptance; express per 1 kg reference flow. For the reference product, Q/Q = 1 kg/kg. Retain the physical and allocated burden accounts separately. | cp_acceptance; cp_resources; cp_wood; cp_heat; cp_parts; cp_residues; cp_air; cp_balance | batch-normalized exchanges | usda-wood-2021 |
| dry_wood | separately measured wood components with state-validated methods | u = (m_wood_wet - m_wood_oven)/m_wood_oven; m_wood_dry = m_wood_wet/(1+u). Sample the same actual wood component/species/state with an independently validated water-only mass-loss endpoint, accounting for extractive/volatile or chemical degradation uncertainty; do not subtract water again from its measured oven-dry mass. Separate wood from hoops, coating, mineral, plastic and other constituents before applying this conversion; never convert the whole accepted/rejected barrel or a whole mixed waste as wood. Preserve native whole exchange masses. Ash/carbonized char use material-specific measured dry solids, water and independently assayed carbon, excluding inorganic solids from dry-wood mass and prohibiting ordinary wood-carbon fractions on transformed material. Liquids retain whole wet mass and separately measured water/non-water constituents; metals/plastics retain actual mass/composition. Unknown component separation or actual-state method remains pending. | m_wood_wet; m_wood_oven; cp_wood; cp_residues | separately measured dry wood and moisture; independent whole/component material ledgers | usda-wood-2021 |
| water_reconcile | season_water_vapour, test_drying_vapour, thermal_water_vapour, boiler_water_vapour | Apply independently to each named stage and cohort: evaporation = incoming water (wood, fuel, fresh water, rain, imported steam and internal transfer) + independently evidenced chemical water formed - outgoing retained/exported water (wood, runoff, test water, blowdown, condensate and internal transfer) - stored-water change. Match internal transfers at both ends; cancel them only in the whole-unit ledger. Never assign a whole-unit evaporation total to multiple stage rows. Unknown infiltration, chemical formation or stage partition remains unresolved. | cp_balance; cp_wood; cp_resources; cp_heat; cp_residues | water balance and evidenced vapour mass | usda-wood-2021 |
| carbon_reconcile | wood, fuel and air rows | For each carbon origin, input carbon = retained barrel carbon + exported coproduct/waste carbon + removed char/ash carbon + emitted species carbon + stock change + disclosed residual. Use measured dry mass times measured compatible C fraction. Derive species carbon by molar stoichiometry; combustion and pyrolysis share the same carbon supply and cannot each receive all of it. Use actual component/state-compatible carbon assays; ash/char inorganic solids are not dry wood, transformed char/ash cannot use ordinary wood-carbon fractions, and metal/plastic/non-water liquid solids or whole mixed-barrel mass cannot be counted as wood carbon. | cp_balance; cp_wood; cp_heat; cp_residues; cp_air | separate biogenic/fossil carbon ledger | thermal-wood-2005, epa-wood-boilers |
| particulate_partition | all PM rows | From the same outlet, period, method and PM phase basis, the 2.5-10 fraction equals cumulative PM10 minus cumulative PM2.5; >10 equals comparable total PM minus PM10. Use only evidenced nonnegative differences with propagated uncertainty. Otherwise keep the size distribution unresolved. Do not add cumulative totals alongside these disjoint fractions. | cp_air; outlet and phase compatibility | disjoint emitted PM fractions | epa-sawmill-pte-scope, epa-wood-boilers |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_basis | all inventory rows | Use compatible receipt/model/toast cohorts and complete seasoning stock changes, never divide old stock inputs by only current dispatch Q | cp_acceptance, cp_wood |
| quality_uncertainty | all inventory rows | Unknown origin, capacity, life, quantities, provider basis, chemical definition or emission distribution remain explicit. No empirical default ranges until independent boundary-compatible evidence exists. Report instruments, variation and model uncertainty | cp_heat, cp_air, cp_balance |
| quality_evidence | new_barrel_production | Manufacturer route sources and laboratory pyrolysis cases support method design only. Do not transfer softwood survey yields/MC, regulatory PTE, generated pyrolysate percentages or aroma measurements to actual emitted kg | usda-wood-2021, thermal-wood-2005, epa-sawmill-pte-scope, corrim-allocation-case |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference flow | Require new unused all-oak wine-barrel identity, finished completeness and leak acceptance; reject stave-only, refurbished or unqualified different toast/service configurations. UUID inclusion does not resolve background applicability. | taransaud-quality, seguin-toasts |
| validate_denominator | all inventory rows | Exactly one accepted_new_oak_barrel reference output is 1 kg and every exchange uses the same stock-corrected Q denominator. Keep stages distinct, prevent duplicate product outputs and audit all internal links for equal physical quantity. | usda-wood-2021 |
| validate_flows | all inventory rows | Verify exact physical/chemical identity against name, CAS, route, current classification, reference property and unit; a conflicting species/CAS or hard treatment/route blocks adoption even if a name looks right. An isolated source-classification error may permit conditional use of a coherent physical identity only with an explicit metadata debt, actual material/state/provider verification and source-owner clarification; it is not complete metadata validation. Each row is atomic, with exact Chinese baseName when provided; blank UUIDs retain their concrete exchange and missing-identity disclosure. | usda-wood-2021 |
| validate_energy | all utility rows | Require measured delivered energy/volume/mass on a supplier-compatible basis. Distinguish purchased steam from internal boiler heat, apply kWh/MJ conversion only to electric energy, and leave gas/steam basis compatibility pending when unknown. | epa-wood-boilers |
| validate_emissions | all elementary outputs | Require outlet/medium, actual escaped species, carbon origin and quantity-definition evidence. Verify NOx convention excluding N2O, disjoint PM and filterable/condensable scope. Do not substitute correction flows or equate visible smoke with a PM mass; preserve biogenic CO2 despite GHG-reporting conventions. | thermal-wood-2005, epa-wood-boilers, epa-sawmill-pte-scope |
| validate_closure | physical ledger and allocation | Reconcile dry material, water, biogenic/fossil carbon and all measured destinations with stock changes and uncertainty; retain unexplained residuals. Review allocation against the full unallocated physical ledger and the separately allocated burden ledger; do not change coproduct mass to close allocated burdens. | usda-wood-2021, corrim-allocation-case |
| validate_completeness | dataset profile | Before a complete cradle-to-gate dataset claim, resolve physically present UUID/provider gaps and all route quantities, add actual unlisted atomic flows and treatment releases, disclose skipped checks and uncertainty, and verify all required qualifiers. PCR authored status does not prove site-data or independent methodology approval. | taransaud-quality, usda-wood-2021 |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified new-oak-wine-barrel supply in a wine model or a secondary cooperage manufacturing dataset |
| allowed_use | Only matching new barrel material, state, capacity/model, bending/toast configuration and declared supply boundary; convert service amounts with independently measured barrel mass/capacity and use cycles |
| excluded_use | Stave-only, old/refurbished, spirits-charred, other-wood or unqualified wine-service comparisons; carbon-neutral claims or unsupported generic oak industry factors |
| required_metadata | Reference qualifiers; factory/year and cohort; upstream/provider boundary; atomic exchanges and property/unit; raw protocol records; physical mass/water/carbon ledger; emission definitions; allocation basis |
| required_quality_disclosure | Identity/provider/quantity gaps, missing ranges, sampling/MC/carbon uncertainty, omitted stages/flows, gas/steam basis compatibility, PM/NOx conventions and method/site review status |
| update_trigger | Species/source, receipt moisture/state, seasoning, geometry, hoop/coating, bending/toast/fuel/control, test method, supply/provider or allocation change |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| seguin-process | literature | Seguin Moreau, From forest to product, current original snapshot; https://www.seguin-moreau.fr/en/innovation/from-forest-to-product/; retrieved 2026-10-12 | Process order, air seasoning, machining, fire bending; manufacturer example, no quantitative defaults |
| seguin-toasts | literature | Seguin Moreau, Wine barrels, Toast levels; https://www.seguin-moreau.fr/en/wine-ranges/barrels-wine/; retrieved 2026-10-12 | Steam tightening and sensory toast are distinct, with product-specific profiles |
| taransaud-quality | literature | Taransaud, Quality Control team; https://www.taransaud.com/en/craftsmanship/our-teams/quality-control-team/; retrieved 2026-10-12 | Individual leak/final acceptance and traceability; manufacturer origin/seasoning durations not generalized |
| usda-wood-2021 | handbook | USDA FPL, Wood Handbook FPL-GTR-282 (2021), Ch.4 pp.4-1/4-11; Ch.13 pp.13-2/13-6; Ch.18 p.18-14; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf; retrieved 2026-10-12 | General moisture/density basis, oven measurement, drying and distinction between optical smoke and particulate mass; no construction wood MC copied |
| thermal-wood-2005 | handbook | Rowell and LeVan-Green (2005), Thermal Properties, Handbook of Wood Chemistry and Wood Composites, pp.121-125, Sec.6.1, Table6.1; https://research.fs.usda.gov/download/treesearch/22046.pdf; retrieved 2026-10-12 | Wood pyrolysis versus combustion and conditional species screening; laboratory pyrolysate shares are not oak-barrel emission factors |
| epa-wood-boilers | official_guidance | US EPA AP-42 Section1.6 Wood Residue Combustion in Boilers (March2022), Sec.1.6.1-1.6.4, Tables1.6-1/1.6-3 and footnotes; https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf; retrieved 2026-10-12 | Conditional matching boilers only: species, fuel/control dependencies, factor basis, PM definitions; no factor or 99% carbon conversion default |
| epa-sawmill-pte-scope | official_guidance | US EPA Region10 (8May2014), Particulate Matter PTE Emission Factors for Activities at Sawmills, Excluding Boilers, pp.1-2; https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf; retrieved 2026-10-12 | Scope restriction, opacity not a PM-mass conversion and cumulative size definitions; PTE factors not actual cooperage LCI |
| corrim-allocation-case | literature | CORRIM (22July2025), LCA of Softwood Lumber Production – Northern Region, Sec.3.2.6 p.16; https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf; retrieved 2026-10-12 | Illustrates burden partition and product-only packaging in a softwood case; no cooperage mass shares, yield, fuel or moisture imported |
