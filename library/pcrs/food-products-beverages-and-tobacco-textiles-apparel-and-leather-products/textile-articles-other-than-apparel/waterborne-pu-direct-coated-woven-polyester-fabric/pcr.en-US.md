---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.waterborne-pu-direct-coated-woven-polyester-fabric
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Waterborne PU direct-coated woven polyester fabric

## 1. Scope and Applicability

This manufacturing profile covers dry roll fabric with a woven continuous-filament PET substrate and one directly applied, unpigmented, non-foamed aqueous aliphatic polyester-PU coating, made from a purchased ready-formulated dispersion, optionally diluted with process water, electrically dried and cooled. The starting fabric is coating-ready, with its previous wet processing completed. Representative product: a declared grade of coated roll fabric for subsequent bag manufacture; this is a production reference, not a guarantee of waterproofness, safety or service life.

The official CPC 3.0 note lists27997 without a detailed process explanation. Classification context does not establish applicability. Solvent-based PU, wet coagulation/DMF, reactive two-component coating, added crosslinker, pigmented or foamed formulations, PVC plastisol, rubber, hot-melt or membrane lamination, coated felt/nonwovens, synthetic leather, tyre cord, medical articles, garments and made-up tents are outside this profile. Fibre manufacture, PET polymerisation, weaving, upstream dyeing/finishing, consumption and end-of-life are separate stages. A materially different route requires reviewed extension, not a claim of whole 27997 coverage. Sources: `unsd-cpc3-notes-2025`; `jrc-textiles-bref-2023`; `covestro-dln-w50`.

PALTEX’s dated 2020 manufacturer article independently describes water-based PU coatings on woven polyester. It supports a historical market example only: the article does not establish this profile’s single-layer formulation, electric dryer, present supplier recipe or numeric performance. Those conditions require actual foreground records. Source: `paltex-pu-woven-2020`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.waterborne-pu-direct-coated-woven-polyester-fabric |
| classification_refs | CPC 3.0:27997; narrower |
| covered_products | Declared single-layer aqueous PU directly coated woven continuous-filament PET roll fabric |
| excluded_products | Other fibres, nonwoven/felt, PVC, rubber, solvent/wet-coagulation, laminated membranes, foamed/pigmented/crosslinked routes and made-up articles |
| representative_product | Waterborne PU direct-coated woven polyester fabric |
| production_route | Receive coating-ready woven PET and ready-formulated PUD; direct knife coat; electric dry; cool; inspect; trim; wind; pack; rinse equipment and hand over effluent |
| market_state | Accepted dry composite roll fabric at factory gate; downstream cutting/sewing not included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply coated woven PET roll fabric for specified downstream conversion |
| How much | 1 kg accepted net finished composite fabric |
| How well | Declared PET construction and finish, PU formulation and dry add-on, width, areal mass, thickness, moisture and batch acceptance criteria; measure actual grade performance |
| How long or cycle | One manufacturing reporting period; no use lifetime or functional equivalence assumed |
| reference_flow_link | `finished_coated_fabric` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Waterborne PU direct-coated woven polyester fabric |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PET continuous-filament composition and recycled fraction; woven construction; supplier scouring/dyeing/heat-setting state; PUD grade and wet/dry composition; additives and residual volatiles; coating side and layer count; dry add-on; width, areal mass and thickness; moisture/conditioning; electric drying configuration; quality acceptance; location/voltage; packaging; wastewater recipient; reporting period |

Qualifiers must be declared in dataset metadata or equivalent records. Net reference mass includes the PET substrate and adhered dry coating at the declared moisture state, excludes packaging and rejected output, and is not the mass of coating alone.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted finished composite rolls on calibrated scales under cp_output, subtract measured core/wrap tare and use the same conditioning state for output and inventory denominator. |
| area_mass | ready_woven_pet; finished_coated_fabric | Mass | kg | If raw records use m2 or linear metres, measure same-grade areal mass and width; convert area multiplied by kg/m2. Preserve any verified public Area property rather than rewriting it to Mass; generic waterproof fabric is not proof of this product identity. |
| wet_dry | aqueous_pu_dispersion; dilution_water; drying_water_vapour; pu_rinse_wastewater | Mass | kg | Distinguish wet dispersion mass, dry nonvolatile coating mass, retained water, released vapour and wastewater. Measure solids/moisture; no catalogue solids fraction is a universal conversion. |
| energy_preserve | mix_electricity; dry_electricity; finish_electricity; clean_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use metered kWh times 3.6 MJ/kWh; preserve public property and Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66. Assign disjoint meter coverage. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dry coating-ready woven PET, completed prior dyeing/finishing; delivered ready-formulated aqueous PUD; externally supplied process water |
| starting_condition_role | Upstream supplier handover to coating foreground |
| product_classification_scope | Narrow candidate subset of CPC 3.0:27997; classification title does not cover all routes |
| recursive_input_rule | For bought already PU-coated fabric, record its actual product state and linked upstream coating dataset; do not treat it as uncoated PET or recursively recreate its coating. Recoating is outside this single-coating profile. |
| upstream_dataset_requirement | Link compatible fabric, PUD, electricity, water and each packaging component datasets separately; disclose fibre/polymer, weaving, dyeing/finishing and chemical supply gaps and actual inbound transport coverage |
| disclosure | Factory/period; supplied substrate processing state; composition; electric-only drying; rinse treatment handover; utilities and upstream/transport links; missing stages |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_foreground | all processes | Include receipt/mixing, knife application, electric drying/cooling, trim/inspection/winding, actual packing, batch cleaning, attributable start-up/rework and measured outgoing wastes/releases. Internal wet-coated transfers are not additional market outputs. | jrc-textiles-bref-2023 |
| boundary_wet | equipment_clean | Stop at untreated wastewater handover to a documented external treatment recipient. Treatment and its elementary discharges require a linked treatment dataset. Direct discharge or on-site treatment is not represented; cleaning is mandatory data coverage even if a batch has no rinse event. |  |
| boundary_routes | product applicability | Separate previous fabric wet finishing, agricultural feedstock and fibre/polymer manufacture from coating. Other formulation chemicals, heat carriers, maintenance inputs or wastewater-treatment routes require distinct atomic rows and reviewed scope extension before complete-site claims. | covestro-dln-w50 |
| boundary_claim | dataset | This is manufacturing foreground, not automatically complete cradle-to-gate. Require all disclosed compatible upstream and transport links for an expanded footprint. Distribution, bag sewing, use, cleaning by consumers and end-of-life are excluded. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt_mix | Substrate receipt and dispersion preparation | required | All products in this profile | Manufacturing foreground | per 1 kg reference flow |
| coat_dry | Direct knife coating, electric drying and cooling | required | All products in this profile | Manufacturing foreground | per 1 kg reference flow |
| finish_pack | Final inspection, trimming, winding and packing | required | All products in this profile | Manufacturing foreground | per 1 kg reference flow |
| equipment_clean | Batch-attributed equipment rinse and effluent handover | required | All products in this profile | Manufacturing foreground | per 1 kg reference flow |

Conditional exchanges are described on their individual cards; absence requires actual route records, not an assumed zero. Supplier formulation is one delivered product exchange; separately purchased additives need separate rows. Internal coating/wet-fabric transfers and recovered returns are reconciled without duplicate boundary exchanges. Only accepted final fabric is the quantitative reference. All ordinary mass rows use Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66.

### Process: Substrate receipt and dispersion preparation (`receipt_mix`)

#### Inputs

##### Product flows

###### Coating-ready woven polyester filament fabric (`ready_woven_pet`)

Receive dry full-width continuous-filament PET woven fabric with declared completed scouring, dyeing and heat-setting state. Confirm construction, finish compatibility, recycled content and actual residual moisture; neither mesh nor raw fibre establishes this input identity.

- Selected flow: Coating-ready woven polyester filament fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh fabric issued minus unused returns; divide by accepted net coated-fabric mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources:

###### Aqueous aliphatic polyester-polyurethane coating dispersion (`aqueous_pu_dispersion`)

One purchased ready-formulated unpigmented coating dispersion, including its declared supplier additives, supplied wet by mass. Record grade, water fraction, nonvolatile content and all disclosed constituents; do not substitute neat PU resin, adhesive or solvent coating. No on-site added crosslinker or separate thickener is covered by this profile.

- Selected flow: Aqueous aliphatic polyester-polyurethane coating dispersion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh wet dispersion issued minus returned unused dispersion; normalize to accepted net coated-fabric mass using cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `covestro-dln-w50`

###### Process Water (`dilution_water`)

Only additional externally supplied process water actually used for dilution; the water already in the purchased dispersion is part of that product input and is not entered again. This is technosphere water, not an elementary freshwater abstraction.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure separately supplied dilution water in kg; if collected by volume use measured site density and temperature; divide by accepted mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dilution_water`
- Sources:

###### Alternating current (`mix_electricity`)

For actual CN grid-average customer supply below 1 kV only. Include attributable unwinding, inspection, mixing and pumping electricity. Preserve Net calorific value and Units of energy; other locations, voltages or supply routes require a different verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter kWh, convert to MJ using 3.6 MJ/kWh and divide by accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mix_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Discarded aqueous polyester-polyurethane coating dispersion (`pu_dispersion_residue`)

Conditional exported unused or off-spec wet coating dispersion. Internal recoverable return is a stock transfer, not exported waste; record composition, water fraction, container tare and recipient.

- Selected flow: Discarded aqueous polyester-polyurethane coating dispersion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh each exported wet residue lot separately and divide by accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispersion_residue`
- Sources:

##### Elementary flows

### Process: Direct knife coating, electric drying and cooling (`coat_dry`)

#### Inputs

##### Product flows

###### Alternating current (`dry_electricity`)

For actual CN grid-average customer supply below 1 kV only. Meter knife coater drive, electric dryer, fans and cooling air system. The profile uses electric drying; a fuel-fired or steam-heated line needs a separately reviewed energy and emission extension. Unit group is Units of energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter stage kWh including attributable idle and rework; convert with 3.6 MJ/kWh; divide by accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_energy`
- Sources: `jrc-textiles-bref-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### water vapour (`drying_water_vapour`)

Water removed from the wet coating and released immediately to outdoor air, unspecified subcompartment. Exclude recovered condensate, retained product moisture and workplace-only transfers. Use a more specific environmental subcompartment when evidenced; never substitute a water-resource or water-body flow.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Determine actual released water mass using measured coating-water balance or exhaust measurement under cp_air; divide by accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-textiles-bref-2023`

###### ammonia (`drying_ammonia_air`)

Conditional immediate outdoor air release of NH3, CAS 7664-41-7, unspecified air subcompartment. Applicable only where supplier formulation and representative testing establish ammonia release. Aqueous coating does not itself prove this release; ammonium, total nitrogen and indoor exposure are different identities.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure emitted NH3 mass from species-specific concentration, matched exhaust flow and operating duration under cp_air; divide by accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-textiles-bref-2023`

### Process: Final inspection, trimming, winding and packing (`finish_pack`)

#### Inputs

##### Product flows

###### Alternating current (`finish_electricity`)

For actual CN grid-average customer supply below 1 kV only; final inspection, trimming and winding. Preserve Net calorific value and Units of energy. Exclude electricity already counted by the coating-line meter.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter stage kWh, convert with 3.6 MJ/kWh and divide by accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finish_energy`
- Sources:

###### Cardboard tube or Paper core (`paper_core`)

Conditional paper winding core supplied with finished rolls; declare actual paper grade, dimensions, recycled content and reuse state. Packaging is excluded from net fabric reference mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh cores actually issued to delivered accepted rolls; divide by accepted net fabric mass from cp_output; trace any return/reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Polyethylene film (`pe_wrap`)

Conditional single-material unlaminated PE wrap, not barrier laminate or finished fabric polymer. Record grade and supplier recycled fraction.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh PE film issued minus unused returns; divide by accepted net fabric mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Waterborne PU direct-coated woven polyester fabric (`finished_coated_fabric`)

Accepted dry composite roll fabric after final inspection, including substrate and attached coating, at the declared conditioning/moisture state; excludes cores and wrapping. This exact product name is the reference product. Measure accepted batch mass with cp_output before normalization.

- Selected flow: Waterborne PU direct-coated woven polyester fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources:

##### Waste flows

###### Discarded PU-coated woven PET fabric (`coated_pet_pu_scrap`)

Segregated composite edge trims and discarded fabric of the same declared PET/PU composition; retain origin-specific masses. Reworked fabric and downgraded saleable co-products are not exported waste.

- Selected flow: Discarded PU-coated woven PET fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh exported composite fabric scrap excluding packaging and recovered internal rework; divide by accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric_scrap`
- Sources:

###### Clean polyethylene wrapping-film offcuts (`pe_wrap_offcuts`)

Conditional discarded clean PE trimming from packing, segregated from coated textile scraps and used chemical containers. Record actual fate without assumed recycling credit.

- Selected flow: Clean polyethylene wrapping-film offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh separately exported PE film offcuts; divide by accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

##### Elementary flows

### Process: Batch-attributed equipment rinse and effluent handover (`equipment_clean`)

#### Inputs

##### Product flows

###### Process Water (`cleaning_water`)

Externally supplied process water used for batch-linked equipment rinse, not fabric washing. Water in the dispersion is not counted here. Self-abstraction and on-site water treatment require separately reviewed resource and treatment exchanges.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter cleaning water mass or use measured volume and site density; divide attributable period total by matched accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean_water`
- Sources:

###### Alternating current (`clean_electricity`)

For actual CN grid-average customer supply below 1 kV only; equipment rinse pumps and batch-attributed cleaning equipment. Keep separate from line metering; retain Net calorific value and Units of energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Meter cleaning kWh, convert with 3.6 MJ/kWh and divide by matched accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Aqueous PU coating equipment-rinse wastewater (`pu_rinse_wastewater`)

Untreated aqueous rinse effluent exported to a documented treatment recipient, including dispersed PU at measured solids content; not an elementary discharge to freshwater. This profile stops at wastewater handover and cannot represent on-site treatment or direct discharge.

- Selected flow: Aqueous PU coating equipment-rinse wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure exported wastewater wet mass independently of supply water; retain density for volume-to-mass records and solids analysis; divide by accepted net mass from cp_output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-textiles-bref-2023`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | shared line | Avoid allocation by batch separation and submetering. For inseparable utility totals, use measured load and logged runtime with actual cleaning campaign attribution; preserve the causal relation and test sensitivity. Do not allocate by equal kg intensity across grades with different coating add-on or drying burden. |  |
| allocation_coproduct | downgraded cloth; exported scrap | Determine waste versus saleable co-product using actual quality, recipient and market records. Prefer subdivision; if joint burdens remain, justify a measured physical causal driver, otherwise document period-specific economic shares and sensitivity. No default price or displaced-fabric credit is prescribed. |  |
| allocation_rework | internal return and rework | Retain all rework/mixing/drying utilities and losses, carry internal returns through stock balance and count accepted fabric once. Record exported waste treatment separately; no burden-free recovered dispersion assumption. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | finish_pack | accepted coated fabric | measurement record | lot; accepted composite gross mass; core and wrap tare; net fabric kg; width; length; conditioning; moisture; acceptance | Weigh accepted rolls on calibrated scales, subtract actual packaging tare and reconcile grade/lot acceptance; measure same-condition areal mass if output is collected by area | kg | each batch | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | calibration; tare; lot acceptance; moisture method |
| cp_materials | receipt_mix | substrate and wet PUD separately | measurement record | lot; PET construction and finish; substrate issued/returned kg; PUD grade; each supplied constituent; PUD wet issued/returned kg; nonvolatile fraction; water fraction; stock | Weigh each delivered product separately; reconcile stock and returns; obtain supplier formulation/SDS and measure actual solids and moisture, not assumed catalogue values | kg | each batch | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | scale calibration; supplier specification; solids tests; stock ledger |
| cp_dilution_water | receipt_mix | dilution water and rinse water separately | measurement record | batch; each water meter; supply state; kg or volume; density; temperature; dilution; equipment rinse event; reporting coverage | Meter each external water input separately; weigh or convert measured volume using actual density; attribute campaign cleaning to represented batches and avoid counting dispersion water twice | kg | each batch and cleaning event | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | meter; density measurement; supply and cleaning logs |
| cp_clean_water | equipment_clean | dilution water and rinse water separately | measurement record | batch; each water meter; supply state; kg or volume; density; temperature; dilution; equipment rinse event; reporting coverage | Meter each external water input separately; weigh or convert measured volume using actual density; attribute campaign cleaning to represented batches and avoid counting dispersion water twice | kg | each batch and cleaning event | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | meter; density measurement; supply and cleaning logs |
| cp_dispersion_residue | receipt_mix | wet PUD residue and PET/PU scrap separately | measurement record | batch; origin; separate wet residue kg; dry solids; coating-fabric offcuts kg; reject kg; internal return; rework; stock; recipient; fate; waste/co-product decision; period sales revenue and allocation shares | Weigh each physical stream separately with container tare; retain offcut/reject origin and internal recovery; reconcile exported lots with transfer receipts | kg | each removal and period stock reconciliation | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | waste weighing; transfer receipts; rework/quality ledger |
| cp_fabric_scrap | finish_pack | wet PUD residue and PET/PU scrap separately | measurement record | batch; origin; separate wet residue kg; dry solids; coating-fabric offcuts kg; reject kg; internal return; rework; stock; recipient; fate; waste/co-product decision; period sales revenue and allocation shares | Weigh each physical stream separately with container tare; retain offcut/reject origin and internal recovery; reconcile exported lots with transfer receipts | kg | each removal and period stock reconciliation | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | waste weighing; transfer receipts; rework/quality ledger |
| cp_pack | finish_pack | paper cores, PE wrap and PE offcuts separately | measurement record | batch; core mass; PE grade; issued film kg; returned film; exported clean offcuts kg; delivered pack; reuse cycle | Weigh each packaging component and waste separately; reconcile delivered components, offcuts and returns; exclude them from product denominator | kg | each packing batch | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | packing specification; tare; stock and waste records |
| cp_effluent | equipment_clean | untreated rinse wastewater | measurement record | batch; rinse event; exported wet kg or m3; density; solids; PU content; recipient; treatment contract; stock; routing | Meter or weigh exported untreated rinse water independently; sample actual solids/composition; reconcile storage and recipient handover without inferring discharge from water purchased | kg | each event and reporting-period handover | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | effluent analysis; meter; handover and treatment evidence |
| cp_air | coat_dry | water vapour and conditional NH3 separately | measurement record | batch; PUD water/solids; substrate/output moisture; recovered condensate; released water; NH3 concentration; gas flow at matched conditions; operating duration; controls; detection limit; subcompartment | Determine water release from measured water balance or exhaust mass measurement; for NH3 use species-specific tests with matched flow/time and subtract captured quantities; screen all actual supplier volatiles and do not label unmeasured species zero | kg | representative tests and period reconciliation | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | species tests; uncertainty; water balance; detection limits; control and medium evidence |
| cp_mix_energy | receipt_mix | mixing electricity | measurement record | batch; stage meter; start/end kWh; load; runtime; idle/rework; site; voltage; supply; allocation coverage | Read calibrated disjoint stage submeters; reconcile shared meters using actual measured load and logged runtime including attributable idle/rework | kWh | each metered shift and batch attribution | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | meter calibration; voltage/location evidence; runtime and allocation records |
| cp_dry_energy | coat_dry | electric drying electricity | measurement record | batch; stage meter; start/end kWh; load; runtime; idle/rework; site; voltage; supply; allocation coverage | Read calibrated disjoint stage submeters; reconcile shared meters using actual measured load and logged runtime including attributable idle/rework | kWh | each metered shift and batch attribution | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | meter calibration; voltage/location evidence; runtime and allocation records |
| cp_finish_energy | finish_pack | finishing electricity | measurement record | batch; stage meter; start/end kWh; load; runtime; idle/rework; site; voltage; supply; allocation coverage | Read calibrated disjoint stage submeters; reconcile shared meters using actual measured load and logged runtime including attributable idle/rework | kWh | each metered shift and batch attribution | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | meter calibration; voltage/location evidence; runtime and allocation records |
| cp_clean_energy | equipment_clean | cleaning electricity | measurement record | batch; stage meter; start/end kWh; load; runtime; idle/rework; site; voltage; supply; allocation coverage | Read calibrated disjoint stage submeters; reconcile shared meters using actual measured load and logged runtime including attributable idle/rework | kWh | each metered shift and batch attribution | complete declared reporting period | represented coating factory and respective handover boundary | per 1 kg reference flow | meter calibration; voltage/location evidence; runtime and allocation records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | Divide attributable batch exchange by accepted net finished coated-fabric mass in kg; retain each exchange numerator unit. The final product row is 1 kg. | attributable batch exchange; accepted net mass; cp_output | exchange per 1 kg reference flow |  |
| convert_electricity | mix_electricity; dry_electricity; finish_electricity; clean_electricity | Convert measured kWh to MJ with 3.6 MJ/kWh before batch normalization; preserve public Net calorific value and energy unit group. | metered kWh; cp_mix_energy; cp_dry_energy; cp_finish_energy; cp_clean_energy; cp_output | MJ per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_composition | ready_woven_pet; aqueous_pu_dispersion; finished_coated_fabric | Verify PET composition and previous finishing state, PU grade, additives, wet/dry composition, dry coating add-on and physical batch acceptance. Supplier film tests or marketing are not finished-fabric quality/lifetime evidence. | supplier specifications; SDS; batch solids and fabric tests |
| dq_balance | all rows | Reconcile substrate and nonvolatile PU with accepted composite, offcuts, rejects, residue and stock/rework; separately reconcile coating water with retained moisture, rinse/stock and vapour. Investigate unclosed balances, not assumed yield/loss. | weighing; solids/moisture; separate material/water balances and uncertainty |
| dq_period | all rows | Use matched complete representative reporting-period production, cleaning, maintenance, start-up and rework coverage. Record calibration, missing fields, allocation and all actual ancillary material components. No default temperature, energy, recipe or yield. | period logs; calibration; attributable meter and stock records |
| dq_release | drying_water_vapour; drying_ammonia_air; pu_rinse_wastewater | Assess formulation-dependent volatiles and capture routes. NH3 is conditional, not all aqueous dispersions emit it. Add each actually relevant species as one row before complete release claims; unknown release, unmeasured residue or recipient treatment gaps remain explicit. | composition audit; representative emission tests; controls; treatment handover evidence |
| dq_upstream | linked background supply | Match PET processing state, recycled fraction, PU formulation, electricity geography/voltage, water supply and package composition. Disclose any absent upstream dyeing, water treatment or transport link. | supplier records and compatible upstream dataset references |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | product and route | Require declared PET/PUD profile, electric dryer and untreated rinse handover; reject claims for other coating chemistries, wet coagulation, lamination or complete 27997 coverage. | unsd-cpc3-notes-2025 |
| validate_reference | all rows | Require positive measured net composite output, finished_coated_fabric reference link, exclusion of packaging and a common per 1 kg denominator. Area-based raw measurements require actual same-grade mass conversion. |  |
| validate_balances | all processes | Require material, water and energy reconciliation with disjoint meters, internal return, rework, stock change and conditional stream evidence. Measured wastewater is not freshwater release; captured condensate is not air emission. |  |
| validate_identity | UUID-bearing rows | Recheck actual flow type, composition, supply route, public reference property, unit group, immediate environmental medium/subcompartment and official Chinese names. Disclose blank identities and never force generic waterproof fabric or neat resin onto the output/PUD input. |  |
| validate_complete | dataset claim | Require every real chemical, utility, package, waste and elementary species as a specific exchange with matched protocol. Absent conditional rows need evidence; uncertain or skipped release checks cannot be described as complete validation. | jrc-textiles-bref-2023 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing foreground for declared waterborne PU directly coated woven PET roll fabric |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Only after review: declared single-coating, electric-drying profile with compatible upstream supplier and off-site waste treatment datasets and disclosed transport |
| excluded_use | Whole classification, other fibres/chemistries/lamination, synthetic leather, made-up bags, consumer use/lifetime, health or regulatory approval, automatically complete cradle-to-gate |
| required_metadata | All qualifiers; factory and period; net accepted output; measured area conversion; wet/dry coating basis; separate utilities; stock/rework; packaging; actual effluent recipient; upstream and transport links; conditional presence; unresolved identity |
| required_quality_disclosure | Measurement and allocation coverage; water/material closure and uncertainty; volatile-species screening and detection limits; excluded routes; incomplete upstream/treatment links; candidate evidence limits |
| update_trigger | Substrate finish/fibre, recycled profile, coating composition/layer, added chemicals, heat route, site supply, packaging, waste fate, emission controls, new measurements or verified identity change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-notes-2025 | official_guidance | UNSD,CPC Version3.0 Explanatory Notes,30June2025,PDF/printed p.129,27996/27997. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Broad classification and adjacent tyre-cord distinction only; no detailed27997 recipe or full coverage |
| jrc-textiles-bref-2023 | official_guidance | European Commission JRC,Best Available Techniques Reference Document for the Textiles Industry,EUR31316EN,2023,section2.10.1 printed p.116/PDF151; section2.10.3 printed pp.124–126/PDF159–161. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | Direct coating versus lamination process typology; formulation-dependent emissions screening. Historical cited examples are not universal emission species,factors,current compliance or quantitative operating defaults |
| covestro-dln-w50 | handbook | Covestro,Impranil DLN W50,official product page,Product description,Applications,Form supplied,Film properties and Disclaimer; undated live page,retrieved2026-10-06. https://solutions.covestro.com/en/products/impranil/impranil-dln-w-50_000000000057821292 | Actual aqueous aliphatic polyester-PU material and bag/luggage coating application example; not a factory recipe,PET substrate proof,film-to-fabric performance transfer or lifetime. Actual solids and formulation must be measured |

| paltex-pu-woven-2020 | handbook | PALTEX, Recommended Textile – PU Coating, 9 December 2020, Woven constructions and Polyester examples; official page retained 2026-10-06. https://www.paltex.com.tw/recommended-textile-pu-coating/ | Historical woven polyester water-based PU market example; no adoption of advertised fibre sizes, coating performance, present recipe or electric-drying configuration. |
