---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cashew-nuts-in-shell
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
content_maturity: authored_methodology
translation_status: aligned
---

# Cashew nuts, in shell

## 1. Scope and Applicability

This PCR guides a foreground data package for cashew nuts produced in managed perennial orchards and transferred as cashew nuts in shell at a declared farm, primary-conditioning, or storage gate. It covers orchard establishment and replacement, immature and productive orchard management, harvest and collection, separation from the cashew apple, drying, cleaning, in-shell quality sorting, storage, and the declared gate hand-off.

The canonical reference-flow identity follows the platform record `Cashew nuts, in shell`, classified as CPC 3.0 `01372`, with the platform qualifier `Production mix, at farm gate; Fresh, unprocessed produce`. A dataset must disclose whether its declared gate is the fresh farm-gate reference state or an extended post-harvest state after drying, cleaning, grading, or storage. These states must not be silently mixed.

This PCR applies to conventional, integrated, organic, rain-fed, and irrigated routes when the cultivar or cultivar group, geography, orchard age, crop year, harvest practice, drying route, moisture basis, quality state, and gate are disclosed. It excludes nursery production, cashew-kernel shelling, roasting, steaming, peeling, CNSL recovery, kernel grading, edible-nut processing, retail packaging, consumer use, and transport or storage after the declared gate. It does not select an “other” or n.e.c. product category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cashew-nuts-in-shell` |
| classification_refs | CPC 3.0 `01372`, Cashew nuts, in shell |
| covered_products | Cashew nuts with the hard shell retained, including fresh collected nuts at the farm gate and dried, cleaned, graded, or stored in-shell lots when the extended gate is declared |
| excluded_products | Cashew kernels and shelled cashews; roasted, steamed, peeled, salted, milled, oiled, confectionery, beverage, and other downstream cashew products; nursery inputs and post-gate logistics |
| representative_product | Accepted cashew nuts in shell, with the cashew apple separated, shell retained, moisture and quality state declared, and transferred at the declared gate |
| production_route | Perennial cashew orchard establishment and management, harvest and collection, apple separation, primary drying and cleaning, in-shell grading, optional storage, and declared hand-off |
| market_state | Fresh farm-gate or dried/conditioned in-shell cashew lot with cultivar or cultivar group, size or grade, shell and kernel quality, moisture basis, crop year, geography, accepted and rejected mass, and gate declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cashew nuts in shell at the declared gate, with the shell retained and the cashew apple separated |
| How much | 1,000 kg net cashew nuts in shell |
| How well | Cultivar or cultivar group; production country, region, and climate; orchard age and productive status; crop year; fresh or dried state; moisture basis; shell and kernel quality; size or grade; accepted, downgraded, and rejected mass; cashew-apple fate; and gate |
| How long or cycle | One declared crop year within the perennial orchard productive life; establishment, immature years, replacement, and removal are allocated over the declared orchard-life and accepted-output basis |
| reference_flow_link | Accepted output from `cashew_harvest_and_collection` for the fresh farm-gate reference state, or from `cashew_storage_and_gate_handoff` when an extended post-harvest gate is declared |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Cashew nuts, in shell `755b25eb-7579-4041-a5b1-69d12e4a3246` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | cultivar or cultivar group; orchard block and geography; establishment year, orchard age, productive status, and replacement events; soil and climate; irrigation status and water source; crop year or averaging period; harvest maturity and apple-separation practice; fresh or dried state; moisture basis; shell condition; size or grade; accepted, downgraded, rejected, and loss mass; cashew-apple destination; storage duration and condition; and gate |
| Binding | `fixed` |

The required qualifiers must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Net product mass excludes container tare. The platform identity is the fresh farm-gate product flow; a dried or stored lot is an extended gate state and must retain that qualifier rather than being represented as a new product category. A shelled kernel must not be used as the reference product for this PCR.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Express the reference as net accepted cashew nuts in shell at the declared gate and exclude container tare. |
| `fresh_or_conditioned_gate` | reference and gate outputs | Mass and declared product state | kg and declared state | Keep fresh farm-gate, dried/conditioned, and stored gate states separate. Do not use a post-drying amount as a fresh-gate amount without a measured moisture and mass conversion. |
| `yield_and_output_basis` | orchard, harvest, conditioning, and storage outputs | Mass and area | kg and ha | Record harvested nuts, accepted grades, cashew apples, rejects, foreign material, storage losses, and unexplained losses for the same orchard-year, lot, or reporting period before normalization. |
| `moisture_basis` | harvested, dried, stored, and accepted nuts | Mass and moisture fraction | kg and declared fraction | Preserve as-received mass and moisture. Convert between fresh and dried states only with measured moisture and a transparent water-mass or dry-matter equation. |
| `shell_and_kernel_quality` | accepted in-shell product | declared quality properties | declared unit | Retain shell integrity, shell staining, blanks, insect or mold damage, kernel defect basis, foreign material, size or grade, and well-dried status as attributes; do not substitute a universal grade default. |
| `orchard_life_allocation_basis` | establishment, replacement, and immature-orchard inputs | area, time, or mass activity property | ha, orchard-year, or kg product | Allocate perennial establishment, immature years, replacement trees, and removal over the declared orchard life and accepted output basis; disclose non-bearing years and replacement events. |
| `nutrient_product_and_n_basis` | nutrient and soil-amendment inputs | product and nutrient mass | kg product and kg N, P2O5, or K2O | Record formulated product mass and documented nutrient content separately. Nitrogen emission calculations use declared kg N. |
| `water_basis` | irrigation and wet handling | volume or mass | m3 or kg | Distinguish delivered irrigation water, natural-resource withdrawal, drainage or consumption indicators, and optional wet-cleaning water. A dry route records a justified zero for wet-cleaning water. |
| `energy_inventory` | orchard, harvest, drying, grading, and storage | mass, volume, or energy | kg, L, MJ, or kWh | Preserve carrier, unit, operation, equipment, period, and conversion basis. Keep fuel, electricity, and thermal drying energy distinguishable. |
| `packaging_quantity` | optional in-scope storage packaging | mass or item count | kg, g, or item | Record packaging material mass or item count with package capacity, reuse status, and lot assignment when packaging crosses the declared gate boundary. |

## 5. System Boundary

The default foreground boundary runs from the declared orchard starting condition through perennial orchard management, harvest and collection, separation from the cashew apple, and the fresh farm-gate hand-off of accepted cashew nuts in shell. An extended conditioning route additionally includes sun or mechanical drying, cleaning, in-shell quality sorting, storage, and the declared post-harvest gate. Upstream production of planting material, fertilizers, crop-protection products, supplied irrigation water, energy carriers, machinery services, and packaging uses representative background datasets. Shelling, CNSL recovery, kernel processing, retail, post-gate transport, and post-gate storage are outside the default boundary.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | orchard site before or at establishment, with planting material and purchased management inputs crossing the foreground boundary; prior land use and existing orchard history are disclosed |
| starting_condition_role | start of managed perennial cashew production and orchard asset accounting |
| product_classification_scope | CPC 3.0 `01372`, Cashew nuts, in shell; shelled cashews and downstream cashew products are outside this PCR |
| recursive_input_rule | Same-category planting material or retained in-shell nuts crossing the boundary are recorded as upstream inputs and are not recursively expanded into another in-shell product output. Internal hand-offs between orchard, harvest, conditioning, and storage are process links and are not additional market outputs. |
| upstream_dataset_requirement | Use representative upstream datasets for nursery material, nutrient products, crop protection, irrigation supply, fuel, electricity, drying energy, packaging, machinery services, and waste treatment when these inputs cross the boundary. |
| disclosure | cultivar and orchard block; geography, soil, climate, and land history; establishment year, orchard age, productive life, and replacement; irrigation source and quality; nutrient and crop-protection records; harvest maturity and apple fate; fresh or dried state; drying method and moisture; shell and kernel quality; grade, reject, and storage records; gate; and any intended cashew-apple co-product hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_to_farm_gate` | all conforming datasets | Include perennial orchard establishment, immature years, productive management, harvest, collection, cashew-apple separation, and the declared fresh farm-gate hand-off. | `fao-cashew-india-production-1998`; `iso-14044-2006` |
| `boundary_conditioning_extension` | extended post-harvest route | Include drying, cleaning, in-shell grading, and storage only when the declared dataset gate extends beyond the fresh farm gate. Report the extended gate and do not relabel it as the platform fresh/unprocessed state. | `fao-cashew-postharvest-2020`; `fao-cashew-minor-oil-crops` |
| `boundary_perennial_orchard_disclosure` | establishment and replacement | Allocate establishment, immature years, replacement trees, and removal over the declared orchard-life and accepted-output basis; disclose life, non-bearing years, and replacement events. | `fao-cashew-india-production-1998`; `iso-14044-2006` |
| `boundary_no_shelling` | in-shell product | Retain the hard shell in the product boundary. Exclude shelling, CNSL recovery, kernel separation, roasting, steaming, peeling, and kernel grading because they produce downstream shelled-kernel routes. | `fda-cashew-nut-methods`; `fao-cashew-minor-oil-crops` |
| `boundary_quality_and_fate` | all outputs | Separate accepted in-shell nuts, cashew apples, downgraded lots, rejected nuts, foreign material, dust, water loss, and unexplained loss by measured mass and declared fate. | `fao-cashew-postharvest-2020`; `fda-cashew-nut-methods`; `mass-balance-identity` |

## 6. Process Inventory Structure

The foreground route is batch-based. Each harvest round, conditioning batch, grade lot, and storage receipt receives a batch or campaign identifier with a declared start, end, input set, output set, cleaning or changeover event, and reporting period. Shared equipment and shared-run burdens are assigned once to the relevant batch or campaign.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cashew_orchard_establishment_and_management` | Cashew orchard establishment and management | required |  | foreground | orchard-year inputs and accepted output basis |
| `cashew_harvest_and_collection` | Cashew harvest, apple separation, and collection | required |  | foreground | harvested cashew nuts before optional conditioning |
| `cashew_primary_drying_cleaning_and_grading` | Cashew primary drying, cleaning, and in-shell grading | conditional | include when the declared gate is beyond the fresh farm gate or when these operations are part of the foreground package | primary conditioning and stabilization | received lot and grade outputs |
| `cashew_storage_and_gate_handoff` | Cashew storage and gate hand-off | conditional | include when storage or a post-harvest gate is part of the declared foreground boundary | storage and delivery hand-off | 1,000 kg declared gate output |

### Process: Cashew Orchard Establishment and Management (`cashew_orchard_establishment_and_management`)

#### Inputs

##### Product flows

###### Cashew planting and replacement material (`cashew_planting_material`)

Record nursery trees, grafted planting material, replacement trees, stakes, and attributable orchard-establishment materials by block and event. Annualize the material over the declared orchard life and accepted in-shell output.

- Selected flow: cashew nursery trees and replacement planting material
- Flow property / unit: Item count or mass / item or kg
- Amount rule: measured quantity by orchard block and establishment or replacement event, annualized over accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cashew nuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cashew_orchard_lifecycle_records`
- Range: Provisional planting-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 150
  - Unit: kg or planting units per 1,000 kg reference product
  - Basis: broad first-pass orchard establishment and replacement estimate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Agricultural nutrient and fertilizer inputs (`cashew_orchard_establishment_and_management_agricultural_nutrient_inputs`)

Record all mineral fertilizers, organic fertilizers, and nutrient-bearing amendments used by this process in this one consolidated card. Preserve each actual product identity, quantity, formulation, nutrient composition, application event, and allocation; do not count a compound product more than once.

- Selected flow: Agricultural nutrient and fertilizer supply
- Flow property / unit: Product quantity and nutrient content / kg product, m3 product, kg N, kg P2O5, and kg K2O as applicable
- Binding: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- Amount rule: Collect each actual product quantity once, retain its composition, and calculate declared N, P or P2O5, and K or K2O quantities without duplicating compound or organic products; foreground generation expands the records and resolves every emitted product exchange to one verified UUID.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cashew nuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_orchard_input_records`
- Sources: `ipcc-2019-afolu`
- Range: Provisional nutrient-input screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg formulated product per 1,000 kg reference product
  - Basis: broad annual orchard nutrient and amendment input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Irrigation water supplied (`cashew_irrigation_water`)

Record delivered irrigation by source, block, and crop year. A verified rain-fed route records a justified zero with water-balance evidence.

- Selected flow: irrigation water supplied to the cashew orchard
- Flow property / unit: Volume or mass / m3 or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: metered or evidenced delivered irrigation by source, block, and crop year
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cashew nuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_irrigation_records`
- Range: Provisional irrigation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,500
  - Unit: m3 per 1,000 kg reference product
  - Basis: broad rain-fed to irrigated orchard water-use interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Orchard fuel and electricity (`cashew_orchard_energy`)

Record energy for pumping, nutrient application, pruning, mowing, orchard-floor management, crop protection, and other field operations. Keep fuel separate from electricity.

- Selected flow: energy supply for orchard operations
- Flow property / unit: Energy or carrier mass / MJ, kWh, or L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Group selection: deferred until foreground records identify electricity, diesel, petrol, or another carrier
- Amount rule: measured or supplier-recorded energy by operation and orchard block
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cashew nuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_energy_records`
- Range: Provisional orchard-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh-equivalent per 1,000 kg reference product
  - Basis: broad field-operation energy estimate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Crop-protection products (`cashew_crop_protection`)

Record named formulations and active ingredients used for insects, diseases, weeds, or other declared crop-protection purposes.

- Selected flow: named crop-protection product or active substance
- Flow property / unit: Mass / kg product or active substance
- Amount rule: measured application by product, active ingredient, date, and block
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted cashew nuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_orchard_input_records`
- Range: Provisional crop-protection screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 40
  - Unit: kg formulated product per 1,000 kg reference product
  - Basis: broad named-product application interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Orchard pruning and replacement residues (`cashew_orchard_residue`)

Record pruning, removed-tree, and replacement residues by mass, moisture, block, period, and destination. Do not treat residue as a co-product without an evidenced intended hand-off.

- Selected flow: cashew orchard biomass residue
- Flow property / unit: Mass / kg dry matter or as received
- Amount rule: weighed or transparently estimated residue by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cashew nuts in shell
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_orchard_lifecycle_records`
- Range: Provisional orchard-residue screening estimate
  - Range role: Typical range (`typical_range`)
  - Lower: 0
  - Upper: 1,500
  - Unit: kg as-received residue per 1,000 kg reference product
  - Basis: broad pruning, replacement, and orchard-floor residue interval
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Cashew orchard land occupation (`cashew_land_occupation`)

Record planted area and orchard occupation for each block and crop year. Land transformation is separate and is not inferred from occupation.

- Selected flow: agricultural land occupation for the cashew orchard
- Flow property / unit: Area-time / ha·orchard year
- Amount rule: measured orchard area and declared crop-year occupation, annualized over accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cashew nuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cashew_orchard_lifecycle_records`
- Range: Provisional land-occupation screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 6
  - Unit: ha·orchard year per 1,000 kg reference product
  - Basis: broad orchard-area interval for a perennial nut crop
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Elementary flows

###### Managed-soil and crop direct emissions (`cashew_direct_field_emissions`)

Record measured or calculated direct and indirect field emissions by substance, source, nutrient input, and crop year. Do not use a generic emission exchange when the reported species or receiving medium is known.

- Selected flow: soil, crop, and field-operation emissions by substance and receiving medium
- Flow property / unit: Mass / kg substance
- Amount rule: measured or calculated from documented nutrient, residue, crop-protection, and field-operation records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted cashew nuts in shell
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cashew_emission_records`
- Sources: `ipcc-2019-afolu`
- Range: Provisional direct-emission screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg substance per 1,000 kg reference product
  - Basis: broad combined field-emission screen; retain species-specific results in the dataset
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cashew Harvest, Apple Separation, and Collection (`cashew_harvest_and_collection`)

#### Inputs

##### Product flows

###### In-shell cashew crop available for harvest (`cashew_crop_available_for_harvest`)

Record the crop available for the harvest operation by block and collection round. The platform reference identity is reused only with the fresh, farm-gate, in-shell qualifier; it is not a claim that the lot has been dried or shelled.

- Selected flow: Cashew nuts, in shell `755b25eb-7579-4041-a5b1-69d12e4a3246`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or transparently estimated crop mass available to each harvest round
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh farm-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_harvest_lot_records`
- Range: Harvest-available mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 900
  - Upper: 1,400
  - Unit: kg fresh in-shell nuts per 1,000 kg accepted reference product
  - Basis: same-lot harvest mass before sorting and collection losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Harvest and collection energy (`cashew_harvest_energy`)

Record fuel, electricity, and equipment services used for shaking, gathering, apple separation, loading, and lot transfer to the declared next node.

- Selected flow: harvest and collection energy supply
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Energy or carrier mass / MJ, kWh, or L
- Group selection: deferred until the carrier and operation are recorded
- Amount rule: metered, invoiced, or equipment-recorded energy by harvest lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted fresh farm-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_energy_records`
- Range: Harvest-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kWh-equivalent per 1,000 kg reference product
  - Basis: broad collection and short-distance lot-handling energy interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Uncollected or field-damaged cashew nuts (`cashew_field_loss`)

Record mature nuts that remain in the orchard, are damaged before collection, or are excluded from the collected lot, with the fate and moisture basis declared.

- Selected flow: field-lost or field-damaged cashew nuts in shell
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated difference between harvest-available mass and collected mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh farm-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cashew_harvest_lot_records`
- Range: Field-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: % of harvest-available in-shell nut mass
  - Basis: field collection and maturity-loss fraction
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cashew apple residue or intended co-product (`cashew_apple_destination`)

The intended output set is the accepted in-shell grade lots plus a cashew-apple co-product when the apple is deliberately collected. Each intended output requires a declared hand-off. When apples are deliberately collected and transferred to a declared user, record them as an intended co-product with a measured destination. When apples are not collected as a product, record their mass and fate as residue rather than assigning a market credit.

- Selected flow: cashew apple collected for a declared destination or cashew apple residue
- Flow property / unit: Mass / kg as received
- Amount rule: measured apple mass and destination by harvest lot; zero is allowed only with a route-specific explanation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted fresh farm-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_co_output_destination_records`
- Range: Cashew-apple destination screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2,000
  - Unit: kg as-received apple per 1,000 kg reference product
  - Basis: broad apple-to-nut mass interval; replace with measured lot records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Harvest and collection residues (`cashew_harvest_residue`)

Record leaves, stems, soil, stones, and other material removed during collection, together with whether the material remains on the orchard floor, is composted, or leaves the foreground boundary.

- Selected flow: harvest and collection residue
- Flow property / unit: Mass / kg as received
- Amount rule: weighed or transparently estimated residue by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted fresh farm-gate reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_harvest_lot_records`
- Range: Harvest-residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg per 1,000 kg reference product
  - Basis: collected debris and incidental material fraction
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cashew Primary Drying, Cleaning, and In-shell Grading (`cashew_primary_drying_cleaning_and_grading`)

This process is conditional. It is included when the declared gate is beyond the platform fresh farm gate or when drying, cleaning, and quality sorting are part of the foreground package. It is an independent material-treatment node with a received in-shell lot, a conditioned and graded output state, and a declared hand-off. It does not shell the nut and does not create a shelled-kernel product.

#### Inputs

##### Product flows

###### Fresh collected cashew lot (`cashew_conditioning_input`)

Use the verified platform identity for the fresh in-shell lot, while preserving the collected, apple-separated, pre-conditioning state in the qualifier.

- Selected flow: Cashew nuts, in shell `755b25eb-7579-4041-a5b1-69d12e4a3246`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass and moisture of the lot received for conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted fresh farm-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_drying_conditioning_records`
- Range: Conditioning-input mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 900
  - Upper: 1,250
  - Unit: kg fresh in-shell lot per 1,000 kg reference product
  - Basis: received lot mass before water loss, cleaning, and rejection
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Drying and cleaning water or auxiliary service (`cashew_conditioning_water`)

Record water only when wet cleaning or another water-using conditioning operation occurs. Dry sun-drying and dry cleaning record a justified zero for this row and record energy or labor-equivalent services separately when applicable.

- Selected flow: process water for optional wet cleaning or conditioning
- Flow property / unit: Volume or mass / L, m3, or kg
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Group selection: deferred until the route identifies delivered water, cleaning water, or another function
- Amount rule: metered or evidenced water use by lot and operation; zero is allowed for a dry route with explanation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_drying_conditioning_records`
- Range: Optional wet-conditioning water screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: L per 1,000 kg reference product
  - Basis: dry route to optional wet-cleaning interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Drying and conditioning energy (`cashew_drying_energy`)

Record sun-drying support, forced-air drying, mechanical drying, and other conditioning energy by lot, equipment, carrier, and duration. Preserve the route technology and measured moisture change.

- Selected flow: drying and primary-conditioning energy supply
- Flow property / unit: Energy or carrier mass / MJ, kWh, or L
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Group selection: deferred until the route identifies electricity, thermal fuel, or another energy carrier
- Amount rule: metered, fuel-recorded, or calculated from documented equipment and duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_drying_conditioning_records`
- Range: Drying-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kWh-equivalent per 1,000 kg reference product
  - Basis: broad sun-drying support to mechanical drying interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Premium accepted in-shell grade (`cashew_premium_grade_output`)

Record the accepted grade state and hand-off as an intended output. It remains a cashew nut in shell; shelling and kernel grading are outside this PCR.

- Selected flow: Cashew nuts, in shell `755b25eb-7579-4041-a5b1-69d12e4a3246`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted premium-grade mass by lot, moisture, and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fresh farm-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_grade_and_reject_records`
- Range: Premium-grade output screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg per 1,000 kg fresh reference product
  - Basis: one declared accepted grade share of the conditioned lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Standard accepted in-shell grade (`cashew_standard_grade_output`)

Record a separate accepted standard-grade state and its hand-off as an intended output. The premium and standard rows must be mutually exclusive and sum to accepted graded output.

- Selected flow: Cashew nuts, in shell `755b25eb-7579-4041-a5b1-69d12e4a3246`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted standard-grade mass by lot, moisture, and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fresh farm-gate reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_grade_and_reject_records`
- Range: Standard-grade output screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg per 1,000 kg fresh reference product
  - Basis: one declared accepted grade share of the conditioned lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded or reworkable in-shell lot (`cashew_downgraded_lot`)

Record off-spec but potentially saleable or reworkable in-shell nuts separately from accepted grades. Declare whether the lot is downgraded, returned to cleaning or drying, recovered for another in-shell destination, or discarded.

- Selected flow: downgraded or reworkable cashew nuts in shell
- Flow property / unit: Mass / kg
- Amount rule: measured off-spec mass and declared downstream path
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg fresh farm-gate reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_grade_and_reject_records`
- Range: Downgraded or reworkable-lot screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: % of conditioning input mass
  - Basis: off-spec fraction requiring a declared route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected nuts and blanks (`cashew_rejected_nuts`)

Record blank, mold-damaged, insect-damaged, visibly deteriorated, or otherwise rejected nuts. The rejection basis and fate must be recorded; rejected mass is not accepted output.

- Selected flow: rejected cashew nuts in shell
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by lot and rejection reason
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg fresh farm-gate reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_grade_and_reject_records`
- Range: Rejected-nut screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: % of conditioning input mass
  - Basis: rejection fraction for blanks, mold, insects, damage, or unacceptable defects
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Foreign material and dust (`cashew_foreign_material`)

Record soil, stones, leaves, stems, shell fragments not belonging to accepted nuts, and dust removed during cleaning. If a material is intentionally recovered, record its destination rather than silently treating it as waste.

- Selected flow: foreign material and dust from cashew cleaning
- Flow property / unit: Mass / kg
- Amount rule: weighed or transparently estimated removed material by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg fresh farm-gate reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_grade_and_reject_records`
- Range: Foreign-material screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: % of conditioning input mass
  - Basis: cleaning removal fraction
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Drying water loss (`cashew_drying_water_loss`)

Calculate water removed from the cashew lot from measured as-received and conditioned moisture. Do not use an unmeasured generic drying loss when moisture data are available.

- Selected flow: water released to air during cashew drying
- Flow property / unit: Mass / kg water
- Amount rule: received dry matter minus conditioned dry matter, with measured lot moisture and mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg fresh farm-gate reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cashew_drying_conditioning_records`
- Range: Drying-water-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg water per 1,000 kg fresh reference product
  - Basis: mass and moisture difference between received and conditioned lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`; `fao-cashew-minor-oil-crops`

###### Optional conditioning wastewater (`cashew_conditioning_wastewater`)

Record wastewater only for wet cleaning or wet conditioning. A dry route records zero with an explicit process note.

- Selected flow: wastewater from optional wet cleaning or conditioning
- Flow property / unit: Volume or mass / L, m3, or kg
- Amount rule: metered wastewater or documented water balance by lot and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_drying_conditioning_records`
- Range: Optional conditioning-wastewater screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: L per 1,000 kg reference product
  - Basis: dry route to optional wet-cleaning wastewater interval
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cashew Storage and Gate Hand-off (`cashew_storage_and_gate_handoff`)

This process is conditional. Include it when the product is stored before the declared gate or when the data package represents a dried, cleaned, graded, and stored in-shell lot rather than the fresh farm-gate reference state.

#### Inputs

##### Product flows

###### Accepted graded in-shell lot for storage (`cashew_storage_input`)

Record premium and standard grades entering storage as mutually exclusive lot states. Preserve moisture, grade, container tare, and lot identity.

- Selected flow: Cashew nuts, in shell `755b25eb-7579-4041-a5b1-69d12e4a3246`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted graded mass entering storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg declared storage-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_storage_records`
- Range: Storage-input mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 900
  - Upper: 1,050
  - Unit: kg per 1,000 kg declared storage-gate product
  - Basis: accepted lot before storage loss and packaging tare
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Storage packaging and handling service (`cashew_storage_packaging`)

Record bags, pallets, bins, liners, and handling energy only when they are inside the declared storage boundary. Reusable assets are assigned over documented uses or service life.

- Selected flow: storage packaging and handling service
- Flow property / unit: Mass, item, or energy / kg, item, kWh, or MJ
- Amount rule: measured packaging mass or handling energy by lot, with reuse and service-life treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg declared storage-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_storage_records`
- Range: Storage-packaging screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 60
  - Unit: kg packaging and consumables per 1,000 kg declared storage-gate product
  - Basis: reusable or single-use storage-container interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage electricity and handling energy (`cashew_storage_energy`)

Record electricity, fuel, ventilation, pest-control service, and handling energy by storage lot and duration. Pest-control substances are recorded separately when used.

- Selected flow: storage and handling energy supply
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow property / unit: Energy or carrier mass / kWh, MJ, or L
- Group selection: deferred until the carrier and service are recorded
- Amount rule: metered or supplier-recorded energy by storage lot and duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg declared storage-gate product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_storage_records`
- Range: Storage-energy screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 120
  - Unit: kWh-equivalent per 1,000 kg declared storage-gate product per storage period
  - Basis: ambient storage to mechanically ventilated storage interval
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Storage damage and mass loss (`cashew_storage_loss`)

Record damaged, mold-affected, pest-affected, spilled, or otherwise lost in-shell nuts by storage period, reason, and destination. Losses must not be counted as gate output.

- Selected flow: storage-damaged or lost cashew nuts in shell
- Flow property / unit: Mass / kg
- Amount rule: measured opening and closing stock difference reconciled for receipts, dispatches, and losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg declared storage-gate product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cashew_storage_records`
- Range: Storage-loss screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 12
  - Unit: % of storage input mass per declared storage period
  - Basis: loss, damage, pest, moisture, and spill fraction
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Declared cashew in-shell gate output (`cashew_gate_output`)

Record the dispatched lot at the declared gate, preserving the fresh or conditioned state, moisture, grade, and storage duration. The same platform UUID is used for product identity; the gate qualifier carries the process state.

- Selected flow: Cashew nuts, in shell `755b25eb-7579-4041-a5b1-69d12e4a3246`
- Binding: `fixed`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net lot dispatch mass excluding tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg declared gate output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cashew_storage_records`
- Range: Gate-output mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 950
  - Upper: 1,020
  - Unit: kg per 1,000 kg declared gate output
  - Basis: net dispatched product after storage reconciliation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | orchard and harvest with an intended cashew-apple output | Prefer process subdivision when orchard, harvest, apple collection, and nut collection records are independently available. When the cashew apple is deliberately collected and transferred as an intended co-product, allocate shared orchard and harvest burdens by measured dry-matter mass; if dry-matter data are unavailable, use measured as-received mass and disclose the limitation. | `iso-14044-2006`; `fao-cashew-india-production-1998` |
| `allocation_02` | cashew apple not collected as a product | If the apple remains on the orchard floor or is handled as residue without an intended product hand-off, do not assign a co-product credit. Retain its mass and fate as a residue or waste flow and assign the shared burden to the intended in-shell nut output. | `iso-14044-2006`; `fao-cashew-minor-oil-crops` |
| `allocation_03` | premium and standard in-shell grades | Use physical mass allocation between mutually exclusive accepted in-shell grade outputs when common conditioning burdens cannot be subdivided. Grade-specific operations remain with the grade receiving them; do not allocate the same lot to both a grade row and an aggregate output row. | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_04` | perennial orchard periods and phases | Annualize establishment, immature years, replacement, and removal over the declared orchard life and accepted output basis. Link every input and output to a crop year or lifecycle phase; do not count a replacement event in both the original and replacement orchard phases. | `fao-cashew-india-production-1998`; `iso-14044-2006` |
| `allocation_05` | downgraded, reworked, rejected, and recovered lots | Keep rejected and downgraded lots separate from accepted product. Rework retains the producing-node burden and is linked once; recovered or intentionally marketed material requires a declared destination and allocation decision; discarded material receives its declared treatment burden. | `mass-balance-identity`; `iso-14044-2006` |
| `allocation_06` | batch, campaign, and changeover attribution | Link orchard, harvest, conditioning, cleaning, grading, and storage inputs and outputs to the batch or campaign that generated them. Record cleaning and changeover events once and do not allocate shared-run burdens to more than one batch without a documented driver. | `mass-balance-identity`; `iso-14044-2006` |

Cashew shell mass is part of the in-shell reference product and is not a separate co-product in this PCR. CNSL, shell fragments, kernel, testa, and all shelling outputs belong to a downstream shelling or kernel PCR and must not be introduced into this inventory. No output may be counted both as a cashew-apple co-product and as orchard residue.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cashew_orchard_lifecycle_records` | `cashew_orchard_establishment_and_management` | orchard asset, land, planting, replacement, residue | orchard block and asset register | block area; planting year; cultivar; tree count; replacement; removal; pruning residue; orchard phase; accepted output | block register, field log, and annual reconciliation | ha, item, kg, orchard year | event and annual | full declared orchard life or documented representative period | every contributing orchard block | link block records to crop year and accepted output | signed field register, GIS or survey area, replacement evidence |
| `cp_cashew_orchard_input_records` | `cashew_orchard_establishment_and_management` | nutrient, amendment, crop protection | input application record | product name; formulation; nutrient content; active ingredient; amount; date; block; purpose; application method | invoice, application log, and supplier record | kg product, kg nutrient, kg active ingredient | every application | crop year | every contributing block | aggregate by product, nutrient, block, and crop year | invoice, product label, application log |
| `cp_cashew_irrigation_records` | `cashew_orchard_establishment_and_management` | irrigation and water | irrigation meter or water ledger | source; volume; block; date; meter; water quality; withdrawal and return | meter, pump record, or transparent water balance | m3 or kg | event and monthly | crop year | every irrigated block | reconcile delivery, withdrawal, and declared consumption | meter calibration, pump log, water ledger |
| `cp_cashew_energy_records` | all field, harvest, conditioning, and storage processes | energy and carrier | fuel, electricity, and equipment record | carrier; amount; equipment; operation; lot or block; date; duration; conversion factor | invoice, meter, fuel log, or equipment record | L, kg, MJ, or kWh | event and monthly | crop year and declared post-harvest period | each operation and facility | aggregate by carrier, operation, lot, and period | invoice, meter, fuel log, equipment specification |
| `cp_cashew_emission_records` | `cashew_orchard_establishment_and_management` | direct and indirect field emissions | emission calculation input record | nutrient input; residue; soil condition; crop-protection record; emission species; method; factor | calculation workbook linked to raw records | kg substance | annual and event | crop year | every contributing block | retain substance, receiving medium, factor, and source | calculation review, factor version, source citation |
| `cp_cashew_harvest_lot_records` | `cashew_harvest_and_collection` | harvest, collection, field loss, residue | harvest-lot register | block; collection round; maturity; harvested mass; uncollected mass; debris; apple separation; destination | weighbridge, field scale, and lot log | kg, date, lot | every collection round | harvest season | every contributing block | reconcile available, collected, lost, and residue mass | scale calibration, lot ticket, field inspection |
| `cp_cashew_co_output_destination_records` | `cashew_harvest_and_collection` | cashew apple co-product or residue | destination and transfer record | apple mass; dry matter or moisture; destination; recipient; price or use; fate; transfer date | scale, transfer record, and destination confirmation | kg and declared fraction | every transfer | harvest season | each apple destination | separate intended output from residue and waste | receipt, transfer note, destination evidence |
| `cp_cashew_drying_conditioning_records` | `cashew_primary_drying_cleaning_and_grading` | drying, cleaning, water, energy, moisture | conditioning batch record | input mass; input moisture; method; duration; energy; water; output moisture; output mass; cleaning loss; wastewater | batch log, meter, moisture test, and water balance | kg, %, hours, L, kWh | every batch | declared post-harvest period | each conditioning facility or farm unit | link all inputs and outputs to one batch and gate | calibrated scale, moisture test, batch ticket |
| `cp_cashew_grade_and_reject_records` | `cashew_primary_drying_cleaning_and_grading` | grade, downgrade, reject, foreign material | inspection and grade record | lot; grade; shell condition; kernel defect; blank; mold; insects; foreign material; accepted mass; rework; fate | inspection, sampling, and scale record | kg, %, grade code | every lot | declared post-harvest period | each grading point | mutually exclusive grade and reject states | inspection sheet, sample plan, scale calibration |
| `cp_cashew_storage_records` | `cashew_storage_and_gate_handoff` | storage input, loss, packaging, gate output | stock and dispatch ledger | opening stock; receipts; lot; moisture; storage duration; packaging; energy; damage; closing stock; dispatch mass; gate | stock ledger, dispatch ticket, and storage log | kg, %, days, kWh, item | receipt, inspection, and dispatch | declared storage period | each storage facility | opening + receipts = dispatch + closing + loss | stock reconciliation, dispatch ticket, moisture and pest record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | perennial orchard inputs | Allocate orchard establishment, immature years, replacement, and removal over the declared orchard-life basis and accepted output by crop year. | orchard asset register; orchard life; crop-year output | annualized orchard input per reference flow | `fao-cashew-india-production-1998`; `iso-14044-2006` |
| `calc_02` | every harvest, conditioning, and storage lot | `opening mass + inputs = accepted outputs + co-products + rejects + residues + measured losses`; investigate any unexplained residual. | lot weights and fates | reconciled mass balance | `mass-balance-identity` |
| `calc_03` | fresh to dried or conditioned lots | Dry matter = wet mass × (1 − moisture fraction); water removed = input wet mass − output wet mass after accounting for non-water losses. | input/output mass and measured moisture | moisture-corrected mass and drying water loss | `mass-balance-identity`; `fao-cashew-minor-oil-crops` |
| `calc_04` | cashew apple co-product | If the apple is intended and transferred, apply measured dry-matter mass allocation to shared orchard and harvest burdens; if not intended, model residue fate without co-product credit. | nut mass; apple mass; moisture or dry matter; declared destination | allocated burdens and co-product share | `iso-14044-2006` |
| `calc_05` | premium, standard, downgraded, and rejected lots | Grade outputs must be mutually exclusive. Conditioned accepted output equals the sum of grade outputs plus declared downgraded, rework, reject, foreign-material, water-loss, and unexplained-loss terms. | batch input; grade and reject records | normalized output rows | `mass-balance-identity` |
| `calc_06` | storage | `opening stock + receipts − dispatches − closing stock = measured storage loss`; storage loss is not accepted gate output. | stock ledger; dispatches; closing stock; loss records | storage loss per storage duration | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | flow identity | Use the verified cashew in-shell reference UUID and preserve the fresh farm-gate or extended-gate qualifier. Do not use shelled-cashew or kernel identities. | platform identity record; dataset metadata |
| `quality_02` | orchard and harvest quantities | Use calibrated scales, meters, or transparent documented estimates. Record a justified zero when a route does not use irrigation, wet cleaning, packaging, or storage. | calibration record; field and lot logs |
| `quality_03` | moisture and drying | Measure moisture on representative lots at receipt and dispatch. State the moisture method, sampling point, and wet or dry basis. | moisture test; sample plan; batch record |
| `quality_04` | completeness | Reconcile orchard inputs, harvest outputs, cashew apple destination, conditioning outputs, rejects, residues, water loss, storage loss, and gate dispatches. | mass-balance workbook; stock ledger |
| `quality_05` | temporal and perennial representativeness | Cover the declared crop year and report orchard phase, productive age, replacement events, abnormal weather, and averaging method. | crop-year register; orchard lifecycle record |
| `quality_06` | co-products and fate | Evidence every intended cashew-apple hand-off, downgraded destination, rework loop, reject treatment, and residue fate. Do not assign credits to an unverified destination. | transfer note; destination record; treatment record |
| `quality_07` | geography and technology | Disclose country, region, climate, soil, irrigation regime, harvest practice, drying method, grading method, storage condition, and gate. | site description; process notes; facility record |
| `quality_08` | uncertainty and estimates | Label provisional ranges as replaceable candidate-stage estimates and replace them with measured or source-backed values before reviewed or published use. | review record; updated foreground dataset |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference flow | Reference product is the verified `Cashew nuts, in shell` UUID with Mass and kg. The dataset declares fresh farm-gate or extended-gate state and does not substitute shelled kernels. | `fda-cashew-nut-methods` |
| `validation_02` | process map | Every required process is present; conditional drying, cleaning, grading, and storage processes are present when the declared gate or route requires them. | `fao-cashew-postharvest-2020` |
| `validation_03` | perennial production | Orchard establishment, immature years, productive phase, replacement, and removal are linked to declared crop years and are not double-counted. | `fao-cashew-india-production-1998`; `iso-14044-2006` |
| `validation_04` | harvest and apple separation | Harvested, collected, uncollected, cashew-apple, residue, and accepted nut masses are mutually reconciled; apple destination is declared. | `mass-balance-identity` |
| `validation_05` | conditioning and quality | Fresh input, conditioned moisture, premium grade, standard grade, downgraded/rework, reject, foreign material, water loss, and wastewater are mutually exclusive and mass-balanced. | `mass-balance-identity`; `fao-cashew-minor-oil-crops` |
| `validation_06` | storage and gate | Opening stock, receipts, dispatches, closing stock, storage damage, moisture, storage duration, and gate output reconcile. Storage losses are excluded from accepted output. | `mass-balance-identity`; `fao-cashew-postharvest-2020` |
| `validation_07` | allocation and rework | Cashew-apple allocation, grade allocation, downgraded routes, rework loops, and rejected-material treatment are explicit and no burden or output is counted twice. | `iso-14044-2006` |
| `validation_08` | evidence and disclosure | All important quantitative flows have a foreground collection rule and candidate range or method constraint; estimates, unresolved identities, gate state, moisture, and evidence limitations are disclosed. | `fao-cashew-postharvest-2020`; `mass-balance-identity` |
| `validation_09` | batch and campaign records | Every harvest round, conditioning batch, grade lot, and storage receipt has a declared boundary, linked inputs and outputs, cleaning or changeover status, and reporting period; shared-run burdens are not counted twice. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` for a reviewed cashew-nut-in-shell foreground dataset; may be promoted to `background_dataset` only after the required review and publication gates |
| downstream_use | Construction and validation of process and lifecyclemodel projections for cashew nuts in shell at the declared fresh farm-gate or extended post-harvest gate |
| allowed_use | Orchard, harvest, apple-separation, drying, cleaning, in-shell grading, storage, and gate modelling when the declared product state, moisture, quality, crop year, geography, and allocation treatment are retained |
| excluded_use | Shelled-kernel production, shelling, CNSL recovery, roasting, steaming, peeling, kernel processing, retail products, consumer use, post-gate logistics, and unreported product categories |
| required_metadata | reference UUID; Mass property and Units of mass unit group; CPC 3.0 `01372`; cultivar; geography; orchard phase and age; crop year; irrigation; moisture basis; fresh or extended gate; shell and kernel quality; grade; cashew-apple fate; accepted, rejected, residue, loss, and storage records |
| required_quality_disclosure | measurement versus estimate; moisture method; mass-balance completeness; orchard-life allocation; co-product allocation; rework and reject fate; storage duration; data period; geography; technology; and unresolved identity gaps |
| update_trigger | new crop-year records, material change in orchard phase or replacement, change in drying or grading technology, new intended cashew-apple route, changed storage practice, evidence-backed range replacement, or platform identity revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-cashew-india-production-1998` | official_guidance | FAO, Integrated Production Practices of Cashew in India, https://www.fao.org/4/ac451e/ac451e04.htm | perennial orchard phases, harvest maturity, apple separation, drying, and orchard-life context |
| `fao-cashew-postharvest-2020` | extension_guidance | FAO TECA / African Cashew Initiative, Guide to harvesting and post-harvest handling of cashew nuts, https://www.fao.org/family-farming/detail/en/c/1619106/ | harvest quality, post-harvest handling, storage, and process decomposition |
| `fao-cashew-minor-oil-crops` | handbook | FAO, Minor oil crops: cashew nut monograph, https://www.fao.org/4/x5043e/x5043e06.htm | apple separation, sun drying, moisture context, and storage practice |
| `fda-cashew-nut-methods` | official_guidance | U.S. FDA, MPM V-10 Nuts and Nut Products Methods, https://www.fda.gov/food/laboratory-methods-food/mpm-v-10-nuts-and-nut-products-methods | defect, mold, insect, shell, and in-shell quality distinctions |
| `ipcc-2019-afolu` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | managed-soil and agricultural emission calculation method context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://committee.iso.org/standard/38498.html | allocation hierarchy, data quality, boundary, and disclosure rules |
| `mass-balance-identity` | method_factor | Conservation-of-mass method identity for lot reconciliation | harvest, conditioning, storage, reject, residue, and water-loss reconciliation |
