---
pcr_id: pcr.existing-ferrous-foundry-coreless-induction-melting-plant-integrated-reconstruction-and-commissioning-services
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Existing ferrous foundry coreless-induction melting-plant integrated reconstruction and commissioning services

## 1. Scope and Applicability

This PCR covers a completed integrated reconstruction and commissioning intervention on an existing ferrous foundry coreless-induction melting plant. Its retained-state baseline and required actual first-lining/hot-trial acceptance distinguish it from a newly built specialized cold-tested asset. Include the contracted civil foundation, pit, melt-deck and access alterations together with actual furnace, power/coil/control, hydraulic, charge-handling, cooling and fume-capture integration. The output requires approved pre-start checks, required lining installation/dryout/sintering, supervised ferrous trial heats, correction/retest and signed owner/contractor handover. These activities form one integrated responsibility unless real independently evidenced handoffs require additional nodes. `inductotherm-installation-retrofit-services`; `inductotherm-coreless-steel-2013`; `electroheat-ferrous-foundry-commissioning`; `hongteng-induction-installation-2026`.

Exclude a whole new foundry, generic industrial building, nonferrous-only or blast/cupola/EAF-only plant, separately supplied furnace machinery, isolated erection/relining/routine maintenance, cold-only installation, and ordinary commercial melting or casting after handover. Capacity, vessel count, lining chemistry, coolant, heat duration, test temperature, energy/yield, emissions and asset life are project-specific; supplier examples are no defaults. Acceptance is neither a universal operating procedure nor an automatic safety, emissions-compliance or lifetime-performance certificate. `unsd-cpc3-industrial-plants-2025`; `hse-foundry-furnace-fd2-2022`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.existing-ferrous-foundry-coreless-induction-melting-plant-integrated-reconstruction-and-commissioning-services` |
| classification_refs | CPC 3.0 54269; narrower methodology subset, classification context only |
| covered_products | Integrated retained-plant civil and process-interface reconstruction services with actual lining and hot-trial acceptance |
| excluded_products | Exclude a whole new foundry, generic industrial building, nonferrous-only or blast/cupola/EAF-only plant, separately supplied furnace machinery, isolated erection/relining/routine maintenance, cold-only installation, and ordinary commercial melting or casting after handover. Capacity, vessel count, lining chemistry, coolant, heat duration, test temperature, energy/yield, emissions and asset life are project-specific; supplier examples are no defaults. Acceptance is neither a universal operating procedure nor an automatic safety, emissions-compliance or lifetime-performance certificate. `unsd-cpc3-industrial-plants-2025`; `hse-foundry-furnace-fd2-2022`. |
| representative_product | Accepted integrated reconstruction and commissioning service for an existing ferrous foundry coreless-induction melting plant |
| production_route | Retained survey and isolation; actual removal/civil modification; integrated installation; progressive cold checks; required lining commissioning; supervised hot trials; defects closed and signed handover |
| market_state | Completed accepted site-specific integrated construction service on an existing plant, not a tonne of metal or a purchased furnace |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted integrated reconstruction and commissioning service for an existing ferrous foundry coreless-induction melting plant |
| How much | 1 complete accepted intervention |
| How well | Approved project-specific civil and integrated cold/hot acceptance dossier, closed defects and signed owner/contractor handover |
| How long or cycle | From retained survey through actual removal/civil, integration, first-lining and cold/hot trial, correction and handover; link all reporting periods without a standard duration |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| product_flow | Accepted integrated reconstruction and commissioning service for an existing ferrous foundry coreless-induction melting plant |
| flow_property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| unit_group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | item |
| required_qualifiers | ferrous metal family; retained and replaced equipment register; civil foundation pit and melt-deck scope; furnace count and configuration; rated capacity as descriptor; actual power cooling hydraulic charging and extraction interfaces; initial lining commissioning requirements; cold and hot acceptance criteria with authority and applicability; campaign and reporting periods; contract responsibility limits; signed intervention ID |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `count_reference` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N is the positive count of unique complete accepted intervention IDs from cp_acceptance. Count the coordinated contracted plant scope once; furnaces, phases, MW, heats and metal tonnes are qualifiers or activities. |
| `native_and_mass` | native supplies and physical outlets | Actual native property; Mass only for an evidenced independent mass view | actual native unit | Preserve Count/Area/Length/Volume/Mass as supplied and matched usable returns. If an independent mass view is needed, use actual SKU-specific net mass or density with state, moisture, temperature, temperature_unit, unit conversion and evidence; never add it to the same native physical quantity. |
| `utilities_and_species` | actual utilities and elementary exchanges | Actual verified native property; species Mass | actual native unit; kg | Meter actual electricity separately from thermal fuel; verify actual Energy and native gas/water support before final exchange creation. No NCV/GCV or Count substitute for electricity. Species release needs substance and medium and matched measured mass or compatible factor/composition/fate evidence. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Surveyed retained foundry building, equipment, utilities, existing lining and metal heel with approved reconstruction package and responsibility limits |
| starting_condition_role | Historical baseline stocks and inherited site conditions; not new purchases and not avoided-new-asset credits |
| product_classification_scope | Narrow ferrous coreless-induction retained-plant integrated reconstruction subset within industrial civil works |
| recursive_input_rule | An independently accepted same-category subcontracted intervention is an upstream service with explicit non-overlapping scope and physical result. Expand its resources or use a complete upstream dataset once; do not recursively count the same final intervention. |
| upstream_dataset_requirement | Actual supply/provider/transport/temporary/test/spare resources require full upstream coverage, including offsite work. State included manufacture, operation, maintenance and EOL scopes; fill gaps once before finalization. |
| disclosure | Disclose retained and changed registers, civil interfaces, authority/adoption of acceptance criteria, phases and periods, opening/closing stocks, physical outlets, provider scope, useful metal attribution and uncertainties. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `retained_and_civil` | whole intervention | Include necessary isolation, historical equipment/lining removal and actual foundation/pit/deck/platform work, all new or repaired integration and every required first-lining/hot-trial resource until acceptance. Retained historical asset and heel stocks stay distinct from current purchases. | inductotherm-installation-retrofit-services; inductotherm-coreless-steel-2013 |
| `acceptance_gate` | accepted_service | Require documented applicable civil/support checks, installed package register, electrical/grounding/protection/interlock/emergency-stop, cooling/hydraulic, extraction/capture indicators and adopted commissioning-control checks; required lining conditioning and supervised heat/tap/shutdown results; closed defects, drawings, O&M, training and signed owner/contractor acceptance. Actual criteria and authorization must be recorded, not invented. | electroheat-ferrous-foundry-commissioning; hongteng-induction-installation-2026; hse-foundry-furnace-fd2-2022 |
| `coverage_owner` | all resources | Assign one owner to each direct/provider/rental/freight/temporary/test/spare or continuity event. A price, labor hour or machine hour alone is not a physical completed service. Use a matching lifecycle-complete provider unit or collect omitted physical burdens. Missing scope blocks final data. |  |
| `stock_and_heat` | materials and hot trial | Track first charge, purchases, retained heel, internally recharged melt/samples/sprues, tapped accepted metal, slag, dust, contained residues and closing metal by heat and event. Internal recycles are transfers, not fresh purchases or repeated outputs. Unknown imbalance needs investigation and uncertainty; do not infer air emission or fuel burn as a residual. |  |
| `secondary_and_period` | secondary charge and shared assets | Declare actual secondary origin, recovery handoff, inherited burden or justified cut-off and prior-system ownership. Enumerate survey, removal/civil, installation, lining, cold/hot trial, correction and handover periods, linked purchases, assets, outputs, replacement and termination. Permanent delivered plant components bear full actual upstream purchases once, not future-life/trial-hour allocation. Shared-driver allocation applies only to actual supporting temporary/provider assets. No arbitrary life, avoided production or duplicate historical burden. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual installed components and construction/lining consumables (`installed_supplies`)

Process / prospective direction / type: `integrated_reconstruction` / `inputs` / `product`.

Expand actual furnace shell/coil, power and control equipment, hydraulic/charging/cooling/extraction components, concrete/steel/anchors/grout, cables/pipes, lining and preparation consumables by SKU and native unit. Include required first lining and failed/replaced installation resources; installed activity is not an additional purchase. New permanent delivered furnace/power/cooling/extraction and civil components bear their full actual upstream supply once; never dilute them using trial hours or future production life.

- Collection subject: Actual installed components and construction/lining consumables
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Use the declared native-stock rule: S/N for gross-with-outlets, or (S-usable_return)/N for consumed-only, matched by SKU/native unit; record waste upstream burdens in either view.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`
- Sources: inductotherm-coreless-steel-2013; hongteng-induction-installation-2026

Range evidence need: Collect the actual permanent-equipment BOM and civil/lining SKU native quantities, stock/return states and failed-installation consumption; independent comparable reconstruction records would be needed for any material-intensity range.

#### Collection requirement: Actual external ferrous trial charge and additions (`trial_charge`)

Process / prospective direction / type: `integrated_reconstruction` / `inputs` / `product`.

Expand actual iron/steel scrap, primary feed and additions at the commissioning gate with grade, origin and prior-system treatment. Retained heel and internal returned melt/samples/sprues are measured baseline/transfer stocks, not new receipts. No universal mixture, chemistry or yield.

- Collection subject: Actual external ferrous trial charge and additions
- Flow property / unit: Mass / kg
- Amount rule: Apply the declared native-stock rule to current external charge: S/N gross-with-outlets or (S-usable_return)/N consumed-only, where usable_return is only actual unconsumed outward return of the same incoming SKU/native state. Tapped/processed test metal never reduces charge purchases. Reconcile separate inherited heel and internal transfers through the declared actual heat ledger; no mass-balance emission credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hot`
- Sources: electroheat-ferrous-foundry-commissioning

Range evidence need: Collect weighed actual charge-to-heat, grade/content, cold-stock and heel transfers for every accepted or failed trial. A range needs independently comparable metal family, lining and test-purpose evidence, not supplier nominal capacity or a presumed yield.

#### Collection requirement: Actual supplied fuels and thermal commissioning media (`fuel_supply`)

Process / prospective direction / type: `integrated_reconstruction` / `inputs` / `product`.

Expand only actual fuel/thermal supply used by construction, drying or auxiliary equipment with fuel identity and state. Supply is distinct from actual combustion. Record unused return, nonburned contained waste, uncontained loss and carryover separately.

- Collection subject: Actual supplied fuels and thermal commissioning media
- Flow property / unit: Actual native property / actual native fuel unit
- Amount rule: Use the declared native-stock rule S/N gross-with-outlets or (S-usable_return)/N consumed-only; the declared actual fuel-fate ledger establishes actual burn independently.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel`

Range evidence need: Collect actual fuel identity/native stock, measured burn or complete disjoint fates, loss investigation and state conversion; any burn range needs independent comparable equipment duty and lining/trial conditions.

#### Collection requirement: Actual supplied water and liquid operating media (`process_water`)

Process / prospective direction / type: `integrated_reconstruction` / `inputs` / `product`.

Expand actual purchased water, cooling fill/makeup, hydraulic fluid, cleaners and treatment products by identity and state. Meter first fill, top-up, recovery and carry separately. No presumed demineralized-water chemistry, once-through flow or water-consumption factor.

- Collection subject: Actual supplied water and liquid operating media
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Apply the declared native-stock rule: S/N gross-with-outlets or (S-usable_return)/N consumed-only, preserving recovered closing in closing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`

Range evidence need: Collect actual water/fluid product state, first-fill/top-up/recovered-closing and outward-return quantities; any range needs comparable actual cooling circuit, lining work and test duration rather than a generic freshwater factor.

#### Collection requirement: Actual supplied gases for plant construction or trial operation (`process_gases`)

Process / prospective direction / type: `integrated_reconstruction` / `inputs` / `product`.

Conditionally expand actual purchased shielding, cutting, process or compressed-gas supplies with species/mixture, composition, pressure/temperature basis and upstream scope. Do not infer any gas from a furnace label. Actual atmospheric abstraction, if any, belongs to environmental_intakes.

- Collection subject: Actual supplied gases for plant construction or trial operation
- Flow property / unit: Actual native property / actual native unit
- Amount rule: Apply the declared native-stock rule S/N gross-with-outlets or (S-usable_return)/N consumed-only in the same evidenced native gas state; internal circulation is not external supply.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`

Range evidence need: Collect actual gas species/mixture and composition, pressure/temperature and native-unit metering, supply/return states and conversion evidence; no gas-demand range follows from a coreless-furnace label.

#### Collection requirement: Actual external completed construction and commissioning services (`provider_services`)

Process / prospective direction / type: `integrated_reconstruction` / `inputs` / `product`.

Conditionally expand independent civil, electrical, specialist lining, testing, lifting, waste-treatment and offsite services by actual physical completed result and responsibility. A provider package must disclose manufacture/energy/consumable/transport/asset coverage.

- Collection subject: Actual external completed construction and commissioning services
- Flow property / unit: Actual verified service property / provider physical native unit
- Amount rule: complete actual provider service = physical completed service quantity/N with matching complete upstream unit; expand missing scope once, excluding resources already directly counted.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_provider`

Range evidence need: Collect actual physical completed service unit and full upstream/direct-overlap matrix; a service range requires independent comparable responsibility limits, not price or unscoped hours.

#### Collection requirement: Attributable shared temporary or test asset service (`shared_assets`)

Process / prospective direction / type: `integrated_reconstruction` / `inputs` / `product`.

Identify actual shared cranes, tooling, temporary pumps/cooling/extraction, meters and test gear used across jobs/periods. Cover manufacture, maintenance, replacement and EOL across every consumer; exclude assets already fully included in providers.

- Collection subject: Attributable shared temporary or test asset service
- Flow property / unit: Actual asset-equivalent Count or lifecycle-complete service property / matching native unit
- Amount rule: Use the declared supporting-asset driver rule: asset_equivalent=(job_driver/life_driver)/N OR lifecycle-complete native service quantity=job_driver/N. Select exactly one matched burden view and normalize once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`

Range evidence need: Collect compatible actual job/full-life drivers across all consumers, observed history and evidenced remainder, maintenance/replacement/termination/EOL; no lifetime or utilization range is assumed.

#### Collection requirement: Actual attributable freight service (`freight`)

Process / prospective direction / type: `integrated_reconstruction` / `inputs` / `product`.

Expand actual equipment/material/charge/residue movements not already covered upstream. Use real load, legs, routing and load sharing; record empty returns through the provider scope or separate actual vehicle service without inventing loaded tonne-km.

- Collection subject: Actual attributable freight service
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: actual freight work = sum(load_kg*distance_km*attribution_share)/N in kg*km; retain empty-return and provider coverage.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_freight`

Range evidence need: Collect actual net loads, distance units and route legs, shared-load attribution and empty-return/provider coverage; an independent comparable route sample is needed for any freight-work guardrail.

#### Collection requirement: Actual direct environmental water or gas intakes (`environmental_intakes`)

Process / prospective direction / type: `integrated_reconstruction` / `inputs` / `elementary`.

MUST expand any actual direct water abstraction or atmospheric/process-gas resource crossing into distinct verified source-medium and substance/resource exchanges. Retain measured native quantity, state and conversion. Purchased water/gas and internal circulation are excluded here. Absence requires scope evidence.

- Collection subject: Actual direct environmental water or gas intakes
- Flow property / unit: Actual verified resource property / actual native unit
- Amount rule: actual native environmental exchange = actual attributable direct intake/N by resource and source medium, with no duplicate purchased supply.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_environment`

Range evidence need: Collect each actual source medium/resource and measured native intake with gas P/T or water-meter state and uncertainty; absence or a numeric intake range requires actual scope evidence.

#### Collection requirement: Actual unused current supply returned for use (`usable_supply_returns`)

Process / prospective direction / type: `integrated_reconstruction` / `outputs` / `product`.

Only actual outward return of usable current supply belongs here with SKU, state, receiver and transfer. Closing stocks, processed trial metal, waste and historic removed equipment are different roles. Only unchanged unconsumed matched incoming SKU/native supply can reduce current supply.

- Collection subject: Actual unused current supply returned for use
- Flow property / unit: Matched actual native property / matched native unit
- Amount rule: usable_return/N as a physical outlet in gross-with-outlets; in consumed-only its supply is already deducted once, so retain the return ledger without an additional negative credit or duplicate exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`

Range evidence need: Collect actual receiver-accepted unchanged unused SKU/native-state return quantities matched to incoming supply. Processed trial metal and recovered historical equipment cannot establish a supply-return rate.

#### Collection requirement: Actual usable historical equipment exported (`historic_asset_exports`)

Process / prospective direction / type: `integrated_reconstruction` / `outputs` / `product`.

Expand historically installed equipment/components actually accepted for continued use elsewhere, with net native quantity, condition, receiver and transfer. Distinguish retained assets, scrap/waste, current supply returns and replacement purchases.

- Collection subject: Actual usable historical equipment exported
- Flow property / unit: Actual native property / actual native unit
- Amount rule: actual physical outlet = actual accepted historical useful asset quantity/N; no negative new purchase or automatic substitution credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`

Range evidence need: Collect actual historical asset condition, native net quantity and receiver acceptance; an independent salvage-use record is needed for an outlet range, with no assumed resale or substitution value.

#### Collection requirement: Actual accepted useful commissioning metal exported (`trial_metal_exports`)

Process / prospective direction / type: `integrated_reconstruction` / `outputs` / `product`.

Expand actual useful tapped/solidified test metal or samples accepted by a receiver with grade, state, net mass, heat and transfer. Retained heel, internally remelted trials and waste are not exported useful outputs. Determine whether a trial is necessary noncommercial commissioning or deliberately commercial co-production before attribution.

- Collection subject: Actual accepted useful commissioning metal exported
- Flow property / unit: Mass / kg
- Amount rule: actual physical outlet = actual useful commissioning metal export_kg/N; apply hot_attribution, retaining all necessary noncommercial trial burdens on the service without automatic credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hot`

Range evidence need: Collect actual tapped/sample mass, metal content/grade/state, receiver and heat/transfer IDs, and noncommercial versus deliberate-commercial purpose. No output/yield range is inferred from charge mass or furnace capacity.

#### Collection requirement: Actual electricity exported to an external receiver (`electricity_exports`)

Process / prospective direction / type: `integrated_reconstruction` / `outputs` / `product`.

Conditionally expand actual measured external electricity exports by source, native unit, receiver and meter. Internal circulation or inter-equipment transfers are not external exports. Gross exports are separate from gross imports with no netting or future energy-saving credit.

- Collection subject: Actual electricity exported to an external receiver
- Flow property / unit: Actual electrical Energy / metered native energy unit
- Amount rule: electric_export = actual source-specific gross exported energy/N; retain receiver and actual attribution without negative imports.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

Range evidence need: Collect actual source/receiver gross export meters and external boundary evidence. No assumed export amount or return-credit range.

#### Collection requirement: Actual contained construction and hot-trial wastes (`contained_wastes`)

Process / prospective direction / type: `integrated_reconstruction` / `outputs` / `waste`.

MUST expand actual historical lining/debris, failed components, refractory waste, slag, captured dust/filter media, unaccepted metal, spent liquids and packaging by actual material/state/hazard and destination. Slag, dust and collected liquid are contained Waste; their total mass is not an air/water release. Link each rejection to rework, recovery, downgrade or disposal.

- Collection subject: Actual contained construction and hot-trial wastes
- Flow property / unit: Actual native waste property / actual native unit
- Amount rule: actual physical outlet = actual contained waste quantity/N with upstream losses retained; link actual treatment coverage once and no presumed recovery credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`

Range evidence need: Collect each actual slag/dust/lining/liquid/component waste gross native quantity, metal content where used in a balance, capture state, hazard and destination. Independent comparable evidence is required for any waste ratio; dust hazards are no emitted quantity.

#### Collection requirement: Actual direct water releases to receiving environment (`water_outfalls`)

Process / prospective direction / type: `integrated_reconstruction` / `outputs` / `elementary`.

MUST expand actual discharge/outfall water by receiving medium and state, independently of purchased supply and contained wastewater sent to treatment. Record actual amount, recirculation, evaporation and retained water without assuming all withdrawal is consumption or discharge. Pollutants belong separately to species_releases.

- Collection subject: Actual direct water releases to receiving environment
- Flow property / unit: Volume / m3
- Amount rule: actual native environmental exchange = actual measured direct released water_m3/N; whole-water and pollutant views are nonadditive.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_environment`

Range evidence need: Collect actual receiving medium and measured outfall water, recirculation/evaporation/retained/contained-wastewater coverage. No discharge fraction follows from purchased or abstracted volume.

#### Collection requirement: Actual species releases by receiving medium (`species_releases`)

Process / prospective direction / type: `integrated_reconstruction` / `outputs` / `elementary`.

MUST expand actual furnace/lining/charge/fuel or fluid releases only with identified substance or particle basis and receiving medium. Use measured mass, matched activity species factor, or measured whole-fluid release with evidenced composition and fate. HSE hazard lists and exposure limits identify control questions; they are no inventory factors. Captured dust is not an uncaptured release. If an actual gas elementary release is measured in a native volume, MUST expand a separate native gas exchange with actual quantity/unit, reference pressure/temperature and receiving compartment; do not force it into species kg or add native whole-gas and mass/species views. Whole-release Volume-to-species Mass needs actual density/unit/state/source and pressure/temperature evidence.

- Collection subject: Actual species releases by receiving medium
- Flow property / unit: Mass / kg
- Amount rule: actual species mass = measured_mass/N OR activity*matched_species_factor/N OR whole_release*composition*fate/N on compatible units and basis. A complete factor is not multiplied by composition/fate again; do not add whole-fluid and species views.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_environment`

Range evidence need: Collect actual substance/particle basis and medium, measured mass or matched species-factor activity, or whole-fluid composition/fate with source and units. No emission range derives from hazard/exposure/SDS lists or unexplained metal imbalance.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_reconstruction` | Retained-plant integrated reconstruction and hot commissioning | required | Actual contracted integrated civil and process-interface reconstruction with necessary hot acceptance | Assembly and integration responsibility through actual civil, lining and trial gates; rework loops remain here until real independent handoff | accepted_service |

### Process: Retained-plant integrated reconstruction and hot commissioning (`integrated_reconstruction`)

#### Inputs

##### Product flows

###### Actual purchased electricity for reconstruction and commissioning (`electricity`)

Record source-specific gross electricity imports separately from gross external exports and actual onsite generation. Meter installation tools, pumps, cooling/extraction circulation, furnace lining conditioning and every trial/retrial, including attributable idle/standby and losses, using actual physical driver and unit. Cover any actual onsite-generation fuel, assets and releases once; no netting or future saving credit. Identify voltage/grid/provider and upstream coverage. Verify electrical-energy support; do not invent a universal melting-energy factor.

- Selected flow: Actual purchased electricity for reconstruction and commissioning
- Flow property / unit: Actual electrical Energy / metered native energy unit
- Amount rule: attributable source-specific gross electricity = source-specific gross imported electricity/N after non-overlapping consumer, phase, physical-driver and period reconciliation; onsite generation and gross exports remain distinct.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`

Range evidence need: Collect source-specific gross import/export meters, actual onsite generation, consumer/phase/circulation/loss coverage and physical driver/unit. An energy range needs independent comparable scope and hot-test data, not confidential vendor metrics.

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted integrated reconstruction and commissioning service for an existing ferrous foundry coreless-induction melting plant (`accepted_service`)

One actual complete accepted integrated intervention on the named retained plant. Mechanical completion alone, an unclosed defect or a successful individual heat is not this handover.

- Selected flow: Accepted integrated reconstruction and commissioning service for an existing ferrous foundry coreless-induction melting plant
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: electroheat-ferrous-foundry-commissioning; hongteng-induction-installation-2026

Range evidence need: Exactly 1 item is normalization of the accepted service, not an empirical yield or proof of equivalent capacities; N counts real accepted IDs.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `hot_attribution` | service and useful metal | The sole intended product here is the reconstruction service; useful historical assets and necessary trial metal are physical outlets. Deliberately commercial metal production is excluded until a separate boundary and attribution is justified. All necessary noncommercial commissioning, first-lining, failed trials, idle support, correction and retest burdens belong to the accepted reconstruction service. Physical historical-asset and useful metal outlets remain transparent without automatic allocation away or avoided-product credit. If any trial is deliberately commercial co-production, separate its production boundary, enumerate intended outputs and handoffs, then approve a project-specific causally justified subdivision/attribution with raw drivers, shares and sensitivity before final data; no default free commercial metal or invented zero share. |  |
| `stock_view` | new supplies and returns | Declare one consistent gross-with-outlets or consumed-only view per SKU and scope. S=attributed_opening+external_net_receipts-carried_closing; closing includes recovered closing. S/N is gross-with-outlets and (S-usable_return)/N is consumed-only. Opening and closing are stock observations, not disjoint fates. Internal installation/issue/recharge is not another receipt; unused outward returns reduce supply only once. Waste/loss retain supply burdens; historic assets/heel are separate inherited stocks with no negative purchase. |  |
| `shared_and_period` | shared assets and periods | Use complete manufacture+maintenance+replacement+EOL burden and compatible job_driver/life_driver across all consuming jobs/nodes/periods. Life_driver requires observed life or observed history plus evidenced remainder, replacements, termination and EOL, with sources, uncertainty, sensitivity and update. Choose asset_equivalent=(job_driver/life_driver)/N or lifecycle-complete native service=job_driver/N with matching unit burden; never combine views or normalize twice. Link phases, stock carryovers and replacements; unresolved lifetime/remainder/termination or consumer coverage blocks finalization. |  |
| `secondary_and_reject` | secondary and rejected states | For external secondary charge or recovered inputs, document origin and recovery handoff, current transport/treatment and inherited burden or justified prior-system cut-off. Retained heel/internal remelt carry their recorded existing burdens without new purchase. Failed lining, off-spec heats, components and samples must link to actual rework, reuse/downgrade, recovery or discard; retain repeated resource burdens and count no unresolved reject as accepted service or useful metal. No universal recycled-content or substitution default. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | integrated_reconstruction | whole accepted intervention and actual gate | acceptance_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; scope_register; retained_equipment; replaced_equipment; civil_foundation_pit_deck_scope; metal_family; furnace_configuration; rated_capacity; capacity_unit; interface_register; authority; criteria_id; applicability_basis; cold_check_results; lining_requirement; lining_cycle_record; heat_ids; hot_tap_shutdown_results; defect_id; defect_closure; drawings_id; om_record; training_record; owner_signature; contractor_signature; accepted_date; N | Reconcile approved reconstruction contract, baseline survey and signed gate dossier; record actual criteria/results and defects through all attempts. Count N unique complete accepted intervention IDs; exclude repeated heats, test phases and unresolved rejects; one reference flow per ID. Use only cp_acceptance final unique accepted_intervention_ids/reference_gate_id for N; no phase or heat adds a new reference count. | item | each intervention and gate event | All actual phases/periods from retained survey to signed handover including failed/repeated events | Named plant intervention and attributable offsite/provider scope | per reference flow | Signed authority/applicability, traceable cold and hot result records, closed-defect evidence |
| `cp_stock` | integrated_reconstruction | new supplies and unused outward returns | stock_ledger | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; sku; material_identity; material_state; native_property; native_unit; attributed_opening; gross_receipts; tare_receipts; external_net_receipts; carried_closing; recovered_closing; usable_return; return_receiver; return_transfer_id; internal_issue; installed_quantity; waste_quantity; loss_quantity; measurement_unit; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; pressure; pressure_unit; return_view; scope_coverage; installed_or_temporary; lifecycle_coverage; uncertainty | Use calibrated quantity/weight/meter records, delivery/return notes and physical closing survey in the same native unit; reconcile by SKU and state. Apply stock_native once per reference flow; retain all nonreturned waste/loss supply burdens, with recovered closing included once. Use only cp_acceptance final unique accepted_intervention_ids/reference_gate_id for N; no phase or heat adds a new reference count. | actual native unit; kg only for separate evidenced mass view | each receipt/return and period opening/closing | All actual phases/periods from retained survey to signed handover including failed/repeated events | Named plant intervention and attributable offsite/provider scope | per reference flow | Reconciled signed stock records, calibration, state/conversion evidence and investigated discrepancy |
| `cp_hot` | integrated_reconstruction | external trial charge, heel, internal recycling and useful metal | heat_ledger | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; heat_id; metal_grade; charge_sku; origin; secondary_status; recovery_handoff; inherited_burden; cutoff_decision; current_external_opening; charge_native_property; charge_native_unit; gross_receipts; tare_receipts; external_net_receipts; current_external_closing; recovered_closing; usable_return; return_receiver; return_transfer_id; inherited_heel_opening; heel_closing; charge_to_heat_kg; charge_to_heat_unit; cold_stock_opening; cold_stock_closing; cold_to_heat_transfer_id; heel_transfer_id; internal_transfer_id; internal_recharge_kg; sample_kg; tapped_kg; export_kg; receiver; output_grade; output_state; output_transfer_id; balance_basis; balance_basis_unit; metal_content; metal_content_unit; metal_content_source; slag_gross_quantity; slag_native_unit; slag_metal_content; slag_content_basis; slag_content_source; dust_gross_quantity; dust_native_unit; dust_metal_content; dust_content_basis; dust_content_source; actual_lining_transfer; lining_transfer_unit; actual_flux_addition; flux_unit; actual_gas_uptake; gas_uptake_unit; gas_uptake_source; slag_kg; captured_dust_kg; contained_metal_waste_kg; measured_species_release_kg; unaccounted_difference; mass_unit; measurement_basis; calibration; purpose; commercial_boundary; intended_outputs; attribution_method; raw_driver; driver_unit; output_share; evidence; uncertainty; sensitivity | Link weighed actual charge-to-heat, cold-stock/heel transfers, tapping/sample/export and residue records by heat. Map current_external_opening to stock_native attributed_opening and current_external_closing (including recovered_closing) to carried_closing for the current external charge SKU/native state; inherited heel stays separate. Record failed/repeated heats and purpose. Reconcile heat_ledger with stock_native and hot_attribution; external inputs and actual export_kg/N once; internal loops cancel as transfers, not purchases. Use only cp_acceptance final unique accepted_intervention_ids/reference_gate_id for N; no phase or heat adds a new reference count. | kg | each heat and linked transfer; opening/closing campaign | All actual phases/periods from retained survey to signed handover including failed/repeated events | Named plant intervention and attributable offsite/provider scope | per reference flow | Scale records, metal-state/grade evidence, receiver acceptance, stock discrepancy investigation and explicit attribution approval |
| `cp_energy` | integrated_reconstruction | metered electrical energy | meter_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; meter_id; source_id; receiver; consumer_id; provider; gross_import; gross_export; onsite_generation; onsite_fuel_event; onsite_asset_id; onsite_release_id; physical_driver; driver_unit; construction_energy; lining_energy; hot_energy; retest_energy; circulation_energy; loss_energy; voltage; voltage_unit; native_property; native_unit; reading_start; reading_end; meter_factor; conversion_factor; conversion_unit; conversion_source; attributable_share; other_consumers; coverage_start; coverage_end; idle_energy; trial_id; provider_included_resources; calibration; uncertainty | Read calibrated submeter or reconcile total and disjoint consumers/periods; retain every lining, heat and retest event. Apply utility_meter once to raw non-overlapping source/consumer event records; result is already per reference flow, no second division by N. Do not add provider-included energy. Use only cp_acceptance final unique accepted_intervention_ids/reference_gate_id for N; no phase or heat adds a new reference count. | metered native electrical energy unit | each metering interval and event | All actual phases/periods from retained survey to signed handover including failed/repeated events | Named plant intervention and attributable offsite/provider scope | per reference flow | Meter calibration, bill/submeter reconciliation and actual electrical property verification |
| `cp_fuel` | integrated_reconstruction | supplied fuel and combustion fates | fuel_ledger | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; fuel_identity; fuel_state; native_unit; attributed_opening; gross_receipts; tare_receipts; external_net_receipts; carried_closing; recovered_closing; usable_return; measured_burn; burn_meter_id; nonburned_waste; uncontained_loss; loss_investigation; total_spill_audit; recovered_to_closing; fate_coverage; fate_overlap_check; measurement_unit; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; material_state; moisture; moisture_basis; temperature; temperature_unit; pressure; pressure_unit; uncertainty | Reconcile actual supply stocks separately from measured burn. If direct burn metering is unavailable, audit a complete disjoint native-unit fate ledger and investigate unknown losses. stock_native determines upstream supply; fuel_fates determines actual burn without residual assumptions or spill/recovery duplication. Use only cp_acceptance final unique accepted_intervention_ids/reference_gate_id for N; no phase or heat adds a new reference count. | actual fuel native unit | each fill/burn/loss event and period | All actual phases/periods from retained survey to signed handover including failed/repeated events | Named plant intervention and attributable offsite/provider scope | per reference flow | Fuel meters or complete fate proof, density/state conversion, uncertainty and investigation record |
| `cp_provider` | integrated_reconstruction | external completed service and scope | provider_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; provider_id; service_identity; physical_completed_result; service_quantity; native_property; native_unit; acceptance_id; responsibility_limit; manufacture_scope; energy_scope; material_scope; labor_scope; asset_scope; transport_scope; maintenance_scope; replacement_scope; eol_scope; missing_scope; direct_overlap; upstream_dataset; unit_match; evidence; uncertainty | Obtain provider physical completion and full scope inventory/dataset; compare every omitted/overlapping resource against direct ledgers. provider_complete per reference flow; add omitted resources once, never convert price or unscoped hours to Count. Use only cp_acceptance final unique accepted_intervention_ids/reference_gate_id for N; no phase or heat adds a new reference count. | provider physical native unit | each completed service package | All actual phases/periods from retained survey to signed handover including failed/repeated events | Named plant intervention and attributable offsite/provider scope | per reference flow | Signed completion, provider scope matrix and matching upstream boundary/unit |
| `cp_asset` | integrated_reconstruction | shared temporary/test assets and all consumers | lifecycle_driver_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; asset_identity; temporary_or_provider_support; permanent_delivered_exclusion; consumers_all_jobs_nodes_periods; service_start; service_end; job_driver; driver_unit; life_driver; life_driver_unit; observed_history; observed_life; evidenced_remainder; remainder_source; manufacture_burden; maintenance_burden; replacement_events; replacement_burden; termination_event; eol_burden; lifecycle_dataset; manufacture_source; maintenance_source; replacement_source; termination_source; eol_source; history_source; evidence_source; lifecycle_unit; selected_view; provider_inclusion; uncertainty; sensitivity; update_trigger | Use asset register and full-life compatible usage history plus evidenced remainder, maintenance, replacement and EOL; enumerate every consumer. shared_driver per reference flow with one lifecycle burden view and normalization only once. Use only cp_acceptance final unique accepted_intervention_ids/reference_gate_id for N; no phase or heat adds a new reference count. | actual driver unit or asset-equivalent item | each usage, maintenance, replacement and termination event | Full manufacture, all consuming jobs/nodes/periods, maintenance, replacements, termination and EOL; link the separate actual job/event window | Named plant intervention and attributable offsite/provider scope | per reference flow | Full-life coverage, driver-unit equivalence, source-backed remainder and sensitivity/update proof |
| `cp_freight` | integrated_reconstruction | actual freight work and empty-return coverage | transport_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; shipment_id; leg_id; carrier; load; load_unit; tare; net_load; load_kg; load_conversion; load_conversion_source; distance; distance_unit; distance_km; distance_conversion; distance_source; attribution_share; shared_load; empty_return; empty_return_unit; upstream_inclusion; provider_coverage; responsibility; uncertainty | Reconcile actual shipment mass, route legs and carrier records with provider boundaries and shared-load attribution. freight_work per reference flow, each leg once; disclose actual empty service coverage without invented load. Use only cp_acceptance final unique accepted_intervention_ids/reference_gate_id for N; no phase or heat adds a new reference count. | kg*km | each shipment and leg | All actual phases/periods from retained survey to signed handover including failed/repeated events | Named plant intervention and attributable offsite/provider scope | per reference flow | Weighbill, routing distance evidence and carrier upstream/empty return scope |
| `cp_residue` | integrated_reconstruction | useful historical assets and contained wastes | outlet_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; outlet_id; origin_event; historical_or_current; material_identity; material_state; native_property; native_unit; gross_quantity; tare; net_quantity; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; receiver; transfer_id; useful_acceptance; waste_classification; hazard_evidence; treatment_route; treatment_coverage; reject_id; rework_transfer_id; recovery_or_disposal; uncertainty | Measure actual outlets and receiver records, distinguish historical useful assets from returned supply and waste; link rejection to its producing event and real fate. Apply physical_outlet once to raw net_quantity by state/destination; its result is already per reference flow, no second division by N. Pair treatment scope without duplicate provider burden. Use only cp_acceptance final unique accepted_intervention_ids/reference_gate_id for N; no phase or heat adds a new reference count. | actual native outlet unit | each removal/rejection/transfer | All actual phases/periods from retained survey to signed handover including failed/repeated events | Named plant intervention and attributable offsite/provider scope | per reference flow | Receiver acceptance or waste tickets, calibration, hazard/state evidence and treatment chain |
| `cp_environment` | integrated_reconstruction | actual resource intakes, water outfalls and species releases | environment_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; exchange_id; resource_or_substance; particle_basis; flow_direction; source_medium; receiving_medium; location; measurement_start; measurement_end; native_property; native_unit; measured_intake; measured_water_outfall; recirculation; evaporation; retained_water; contained_wastewater; measured_mass; mass_unit; activity; activity_unit; species_factor; factor_unit; factor_scope; factor_source; factor_complete; whole_release; whole_release_unit; native_gas_release; native_gas_unit; gas_reference_temperature; gas_reference_temperature_unit; gas_reference_pressure; gas_reference_pressure_unit; native_gas_compartment; density; density_unit; density_state; density_source; moisture; moisture_basis; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; conversion_factor; conversion_unit; conversion_source; capture_state; calibration; detection_limit; uncertainty | Use actual calibrated resource/outfall measurements and species monitoring or valid matched factors. Identify receiving medium and capture fate; investigate unknowns rather than interpreting SDS or hazards as quantities. environment_native and species_mass per reference flow; mutually exclusive measurement/factor/composition views and no contained-waste duplication. Use only cp_acceptance final unique accepted_intervention_ids/reference_gate_id for N; no phase or heat adds a new reference count. | actual native unit; species kg | each release/intake event and monitored interval | All actual phases/periods from retained survey to signed handover including failed/repeated events | Named plant intervention and attributable offsite/provider scope | per reference flow | Medium/substance evidence, calibration/detection limits, matched activity factor/composition/fate sources and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `stock_native` | installed_supplies; trial_charge; fuel_supply; process_water; process_gases; usable_supply_returns | external_net_receipts=gross_receipts-tare_receipts; S=attributed_opening+external_net_receipts-carried_closing; gross_input=S/N; consumed_input=(S-usable_return)/N. recovered_closing is included in carried_closing; return_view selects one expression, never both. | cp_stock; cp_hot; cp_fuel; N | Actual native-unit supply per reference flow; matched unused outward return ledger |  |
| `heat_ledger` | trial_charge; trial_metal_exports; contained_wastes | Use measured charge_to_heat and linked cold-stock/heel/internal transfer quantities for each actual heat; external receipts are not automatically furnace feed. Keep each gross native stream independent. Reconcile either an evidenced compatible elemental/metal-content basis with actual composition, units and sources for charge/metal/slag/dust, or a complete whole-stream mass basis including actual additions, lining transfers and evidenced reaction-gas uptake. Do not balance metal-charge kg directly against oxide/entrained-lining slag gross kg. Pair transfers and opening/closing stocks; investigate unaccounted_difference without inferring emissions or oxidation. | cp_hot; cp_stock; cp_residue; cp_environment; N | Auditable heat stock/fate closure; external charge and useful exports per reference flow |  |
| `utility_meter` | electricity; electricity_exports | utility_meter=sum(source-specific gross_import*conversion_factor*attributable_share)/N, reconciled with source meter deltas, onsite_generation, actual construction/lining/hot/retest/circulation/loss physical drivers and gross_export; electric_export=gross_export/N as a separate actual receiver Product outlet. Never net exports against imports; onsite-generation fuel/assets/releases are covered once. | cp_energy; N | Actual attributable native electrical energy per reference flow |  |
| `fuel_fates` | fuel_supply; species_releases | Use measured_burn, or verify opening+net_receipts=closing+usable_return+burn+nonburned_waste+uncontained_loss in one compatible native basis with complete disjoint fates and investigated unknowns. recovered_to_closing is already in closing; total_spill_audit is nonadditive. Only verified burn supports a matched combustion factor. | cp_fuel; cp_environment; N | Actual burn and disjoint fuel fates, separate from upstream fuel supply |  |
| `provider_complete` | provider_services | service_quantity/N with physical_completed_result, matching native_unit and full upstream scope; add missing_scope once and remove direct_overlap. | cp_provider; N | Lifecycle-complete actual provider service per reference flow |  |
| `shared_driver` | shared_assets | asset_equivalent=(job_driver/life_driver)/N OR service_quantity=job_driver/N with lifecycle-complete matching native service burden. life_driver includes all consumers and observed life or history plus evidenced remainder/replacement/termination/EOL. Select one view. | cp_asset; N | One attributed lifecycle burden per reference flow |  |
| `freight_work` | freight | freight_work=sum(load_kg*distance_km*attribution_share)/N; actual load/distance conversions and leg/provider coverage retained. | cp_freight; N | kg*km per reference flow and separately covered actual empty service |  |
| `physical_outlet` | historic_asset_exports; trial_metal_exports; contained_wastes | physical_outlet=net_quantity/N or export_kg/N on the actual compatible outlet ledger; no avoided-product credit. | cp_residue; cp_hot; N | Actual physical outlet by native unit, state and receiver |  |
| `environment_native` | environmental_intakes; water_outfalls | environment_native=actual attributable measured_intake/N OR measured_water_outfall/N by resource, direction and medium; retain water balance evidence without adding recirculation. | cp_environment; N | Actual direct environmental native exchange per reference flow |  |
| `species_mass` | species_releases | species_mass=measured_mass/N OR activity*species_factor/N OR whole_release*composition*fate/N after compatible unit/basis conversion. Use one valid path; factor_complete forbids multiplying composition/fate again; whole-fluid and species are nonadditive views. | cp_environment; cp_fuel; N | Species kg per reference flow with actual receiving medium |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `gate_trace` | reference and phases | Every N entry has the same retained scope, actual civil and hot gate dossier, project-specific authority/criteria and period links. Missing civil scope, lining requirement, heat result or signed handover blocks final data. | cp_acceptance signed records |
| `quantities` | all flows and conversions | Retain raw operands, native units, actual SKU/state/moisture/temperature/pressure and sources for every conversion. Bounds or source examples cannot replace actual measurements. Report uncertainty, detection limits and reconciled discrepancies. | Node-owned protocols and calibration records |
| `complete_coverage` | direct and upstream scope | Reconcile all providers/assets/periods and receipts/returns/stock/fates with one owner. Missing upstream, asset life, replacement, termination, actual secondary origin or commercial attribution blocks finalization. | Scope matrices, asset evidence and stock/heat reconciliation |
| `identity_and_ranges` | actual expanded exchanges | Before final process/lifecyclemodel publication verify each actual concrete identity and its native property/unit group; SKU/provider/species umbrellas require actual expansion. Any later empirical guardrail needs independent comparable evidence and disclosed applicability; no numerical defaults are asserted here. | Concrete dataset exchange evidence and independently sourced ranges |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_gate` | accepted_service | N>0 unique accepted IDs, complete actual civil/lining/hot-trial gate, exact qualifiers and 1 item; no furnace/heat/capacity counting or cold-only shortcut. |  |
| `stock_heat_fates` | stocks and outputs | Check SKU-native gross/consumed-only view, closing including recovered closing, one matched outward return, historical/new distinction, heel/internal loops, heat mass closure, receiver/state of useful exports and separate slag/captured dust/contained waste. Investigate unknowns; no residual burn/emission or automatic credit. |  |
| `burden_completeness` | provider, assets and periods | One owner and complete unit/boundary for direct/provider/offsite/rental/freight/test/spares/temporary utilities; all shared consumers, full asset lifecycle and source-backed remainder; period/replacement/termination links and no double normalization. Missing coverage is incomplete. |  |
| `actual_environment` | actual environmental exchanges | MUST expand actual purchased and direct environmental water/gas roles separately. Check measured intakes/outfalls and substance/medium/species basis, actual burn or complete fate proof, factor/composition/fate compatibility and nonadditive whole-fluid views; hazard/exposure lists are not emission quantities. |  |
| `output_attribution` | service, metal, historical assets and rejects | Necessary noncommercial trials retain all burdens on service; any deliberately commercial co-production needs separate boundary, complete intended outputs and justified raw-driver shares before final data. Verify secondary origin/prior burden and actual rework/exit paths. Rejects cannot enter accepted count or be silently free products. |  |
| `identity_projection` | actual expanded data package | Concrete UUID/type/direction/state/native unit and support verification is mandatory for every final exchange. Projection and bilingual ordered IDs/semantics must agree. Missing actual SKU/provider/species or authority evidence blocks final data regardless of an automated check. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground site-specific accepted integrated reconstruction and commissioning service data package |
| downstream_use | secondary_dataset; background_dataset for compatible actual interventions and downstream process/lifecyclemodel projections |
| allowed_use | Declared retained ferrous coreless-induction reconstruction scope with actual civil and first-lining/hot gate and matching qualifiers |
| excluded_use | New foundry or furnace manufacture, cold-only installation, ordinary metal production, future savings/avoided equipment or generic safety/emissions claims |
| required_metadata | Intervention/site ID, retained/replaced/civil and interface registers, furnace/metal/configuration/capacity descriptors, authority/criteria, phases and reporting periods, N, stock view, provider/assets and useful-output attribution |
| required_quality_disclosure | Gate and physical coverage, uncertainties and discrepancies, raw stock/heat/fate/conversion evidence, secondary treatment, provider and lifecycle gaps, actual identity and environment-method evidence |
| update_trigger | Changed retained scope, civil/interface package, metal/charge or lining route, criteria/authority, hot trial purpose, supplier/asset life, stock or environmental evidence and material data gaps |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-industrial-plants-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only: industrial civil construction/repair/alteration includes iron foundries, while ordinary industrial buildings are separate; no inventory recipe. |
| inductotherm-installation-retrofit-services | handbook | https://inductoheat.eu/wp-content/uploads/sites/29/2019/05/Inductotherm-Group-Brochure-Optimieren.pdf | Historic primary brochure supports observed integrated civil-to-commissioning retrofit/rebuild service; no current capability, project recipe or quantitative factor. |
| inductotherm-coreless-steel-2013 | literature | https://inductothermgroup.com/wp-content/uploads/2019/05/The-Application-of-the-Coreless-Induction-Furnace-in-Steel-Melting-A-1.pdf | Primary technical paper supports actual furnace/foundation/deck/power/control/cooling/extraction interfaces; layouts and numeric examples are not defaults. |
| electroheat-ferrous-foundry-commissioning | extension_guidance | https://electroheatinduction.com/installation-of-two-5-ton-steel-and-cast-iron-induction-furnaces-in-the-great-lakes-usa/ | Qualitative supplier foundry case supports installed interfaces, pre-start checks, supervised trial heats and handover. Anonymous client and confidential operating metrics limit verification; no furnace count/capacity/energy/yield default. |
| hongteng-induction-installation-2026 | extension_guidance | https://www.smelting-furnace.com/induction-furnace-installation-guide/ | Primary supplier guide supports responsibility interfaces and progressive cold/first-heat/handover documentation under adopted project instructions; not a universal standard or operating authorization. |
| hse-foundry-furnace-fd2-2022 | official_guidance | https://www.hse.gov.uk/pubns/guidance/fd2.pdf | UK guidance identifies task/charge-specific fume control, capture indicators, testing and cleaning evidence. Jurisdiction and applicability are declared; hazards, limits and protective equipment are not emitted quantities or global thresholds. |
