---
pcr_id: pcr.existing-outdoor-acrylic-tennis-hardcourt-recoating-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing outdoor acrylic tennis hardcourt recoating services

## 1. Scope and Applicability

This PCR covers one bounded non-cushioned acrylic texture/colour and tennis-line recoating repair on an existing qualified outdoor dense asphalt court or compatible prior acrylic coating. The contract includes cleaning, loose-material removal, compatible localized nonstructural repairs, any specified compatible acrylic resurfacer, colour application and drying/curing, line marking, defect closure and signed repair handover. The actual product instruction and project specification govern.

Exclude porous macadam permeability-preserving spray systems, new pavement/base/drainage, structural crack or subsidence remediation, concrete acid etching, cushion/rubber layers, artificial grass or clay, new nets/posts/fences/lighting, indoor courts and future play or recurring maintenance. A failed structural/drainage qualification requires a different repair scope before recoating; painting is not evidence of qualification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-outdoor-acrylic-tennis-hardcourt-recoating-services |
| classification_refs | cpc:3.0:54270; narrower bounded repair category |
| covered_products | Non-cushioned dense-host outdoor tennis hardcourt acrylic recoating repair at accepted handover |
| excluded_products | New court construction; porous spray surfacing; structural remediation; concrete etching; cushioned and indoor systems |
| representative_product | Existing sound dense asphalt court cleaned/repaired, compatibly coated, cured and tennis-line marked |
| production_route | Qualified retained host -> clean/local repair accepted -> compatible acrylic system/colour coats -> dry/cure and tennis lines -> defect closure and accepted repair |
| market_state | Completed site-specific construction repair service; supplied coating materials remain inputs |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted existing outdoor acrylic tennis hardcourt recoating repair service |
| How much | 1 item actual accepted contract, with court IDs and treated/line geometry |
| How well | Qualified sound draining compatible host; approved product system, texture/colour, dimensional and specified play-surface acceptance; defects closed |
| How long or cycle | One dated repair campaign through signed handover and opening permission; enumerate preparation/coating/cure/line/rework dates and asset production, use, replacement and end-of-life periods across all jobs. No promised playing life. |
| reference_flow_link | `accepted_recoating_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted existing outdoor acrylic tennis hardcourt recoating repair service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | contract/court IDs; location and dates; host material/prior coating condition and qualification; treated/line areas m2 and line dimensions m; actual approved products and supplied states; tint/coat/run records; weather/drying/cure; inspection/defect closure and handover criteria; asset periods and upstream coverage |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| counted_contract | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | One defined accepted repair contract is the reference; court counts and areas are attributes and do not establish equivalence between contracts. |
| wet_dry_mass | coating, tint, repair material and residual rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve as-supplied wet quantities, actual added ingredients, applied wet amount and dry-film/evaporation quantities separately; volume-to-mass needs lot-specific density and temperature. Do not infer wet mass from dry thickness or universal coverage. |
| native_services | electricity, asset time and logistics | Actual compatible property | kWh; h; t.km as recorded | Keep native units; confirm complete support chain for actual exchanges. No count conversion of electricity, duration or transport. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

 Gross receipts/issues/outward quantities mean material quantity before netting returns or transfers, but after subtracting vehicle/container tare from measured gross load. Preserve measured gross load and tare separately; their difference, not vehicle/container gross weight, enters the material balance.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing structurally sound, adequately draining dense asphalt/compatible acrylic outdoor court qualified by actual inspection; original construction is retained host stock. |
| starting_condition_role | Retained site asset for incremental repair; prior construction is outside this bounded service, current preparation/repair burdens remain. |
| product_classification_scope | Bounded outdoor sports facility repair within CPC54270, not all facilities or all repair systems. |
| recursive_input_rule | A supplied same-category repair subcontract is an upstream service with explicit court/activity coverage. Include once and exclude overlapping in-house inputs; never recursively recreate old court construction. |
| upstream_dataset_requirement | Actual supplied-state datasets for each product and service, with manufacturing, packaging, transport and complete-life asset coverage identified; unresolved identities/coverage block final concrete exchange finalization. |
| disclosure | Host qualification, geometry, repair limits, supplier system/instructions, receipts and stock, internal transfer owner, wastes/releases, logistics coverage, subcontract exclusions and period/asset ledger. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| incremental_host | retained host and prepare_host | Include actual inspection/preparation, cleaning/capture, loose removal and localized nonstructural repair before coating. Do not assign new-host burdens or avoided-new-court credit; structural/drainage failures are outside this approved recoating route. | sportmaster-maintenance; sportmaster-neutral-ready-mix-202406 |
| physical_gates | prepare_host; finish_surface | prepare_host owns dirty/loose or locally defective qualified host to clean smooth flush accepted host. finish_surface receives the same identified host area and owns optional compatible resurfacer, colour texture coats, drying/cure, lines and final repair handover. Transfer is physical state, not a second external product or extra court construction. | sportmaster-neutral-ready-mix-202406 |
| system_identity | all supplied coating-system products | Declare actual supplied product and recipe. Neutral Ready-Mix CMT68 requires separately supplied tint and no added application water; already coloured ready-mix and concentrate routes have different supply identities. Mixing/stirring is embedded, not a separate formulation output. Cleaning/tool water is separately measured. | sportmaster-neutral-ready-mix-202406; sportmaster-tennis-surfaces |
| residual_ownership | both nodes residual and release exchanges | Include actual current preparation and application residues, captured wastewater, packaging and actual elementary releases. Purchased water is a product; actual abstraction is elementary input; captured wastewater is waste transfer, not every dissolved substance discharged. No generic paint-water pollutant or broad VOC/PM identity. | sportmaster-neutral-ready-mix-202406 |
| complete_life | prep_assets; finish_assets | Index owned washers, mixers, applicators and marking tools by asset, consuming node, other jobs and period; include production, maintenance, replacements and end-of-life attribution. A provider service must explicitly cover these burdens or expose an added uncovered share; retain remaining life/stock with its carried burden. Complete-life attribution does not require an in-service asset to have retired already: completed life uses observed history; an in-service asset may use evidence-supported prospective remaining service, replacement/termination and end-of-life scenarios. Label forecasts separately from observations, disclose total service denominator/source, uncertainty and sensitivity, and update when actual life events or use evidence change. Missing justified complete coverage or denominator blocks finalization; never invent a lifetime or future retirement. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual approved preparation cleaning products (`prep_cleaners`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Conditional requirement for each actual compatible detergent/biocide product, strength and supply state; expand separate concrete exchanges for different products, never sum heterogeneous chemical identities. Maintenance bleach/TSP recipes are not general preparation instructions.

- Collection subject: Actual approved preparation cleaning products
- Flow property / unit: Mass / kg
- Amount rule: Gross measured lot issues by exact product, concentration and wash event; distinguish formulated product mass and active-ingredient content.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_materials`
- Sources: `sportmaster-maintenance`

Range evidence need: Obtain actual approved cleaning instruction/SDS, dose and treated extent plus weighed issues/returns; no generic biocide recipe or range.

#### Collection requirement: Actual compatible localized nonstructural repair products (`prep_repairs`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Conditional separate exchange for every actual crack/patch/binder/filler ingredient at supplied state. Confirm compatibility and nonstructural repair limit; cement/sand added to a selected binder are separate identities, not inferred from every acrylic repair.

- Collection subject: Actual compatible localized nonstructural repair products
- Flow property / unit: Mass / kg
- Amount rule: Gross weighed receipt/issue by exact repair product or ingredient, batch and local defect location; retained stock and true returns remain separate ledger terms.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_materials`
- Sources: `sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

Range evidence need: Obtain actual defect map, approved repair product instructions, repair dimensions and lot measurements; no generic kg per crack length, recipe or depth.

#### Collection requirement: Actual preparation containment and cleaning consumables (`prep_consumables`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Conditional individual purchased absorbents, temporary protection/containment and disposable cleaning articles; expand by actual identity. Supplier-included packaging is already within material supply, not a second upstream purchase.

- Collection subject: Actual preparation containment and cleaning consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed/count-and-mass issues by article and use event; preserve product returns and closing usable stock.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_materials`

Range evidence need: Collect article specifications, piece masses where counted, wash/containment method and measured use; no assumed consumable ratio.

#### Collection requirement: Actual gross preparation fuel supplied into node (`prep_fuel`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Conditional separate exchange for each actual engine fuel grade/state. Fuel combustion is separate from electricity supply and from provider-covered machine service. Actual unconsumed usable fuel crossing custody uses the product-return row; unburned discarded/recovered liquid uses its waste row; actual released species use the elementary release row. Tank transfers internal to the same boundary do not create new consumption. The input exchange is gross fuel entering the node; actual consumed/burned fuel is a distinct derived activity, not this input amount.

- Collection subject: Actual gross preparation fuel supplied into node
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual fuel supply/issue crossing into this node by exact grade and event, preserving opening/closing stocks and all true outward usable returns/transfers, unburned waste and actual releases separately. Do not net returns from this input when also recording their output. Calculate actual burned fuel separately using the section 8 fuel balance only for combustion activity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_operations`

Range evidence need: Collect engine/fuel grade, tank/issue records, actual density and run-specific consumption uncertainty; no generic diesel dose.

#### Collection requirement: Actual preparation freight services (`prep_logistics`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Separate actual inbound material/asset and outward residual trips by mode/provider, cargo state and leg. Retain load, distance, empty-leg treatment and upstream inclusion; never add a leg already covered by supply/provider.

- Collection subject: Actual preparation freight services
- Flow property / unit: Transport service / t.km
- Amount rule: Actual cargo tonnes times actual leg kilometres per concrete service, with declared empty-return allocation; service support remains unresolved until confirmed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_operations`

Range evidence need: Collect trip manifests, route distance, payload and provider scope to derive uncertainty by leg; no universal haul distance or loading factor.

#### Collection requirement: Actual preparation reusable equipment service shares (`prep_assets`)

Process / prospective direction / type: `prepare_host` / `inputs` / `product`.

Individual washer, pump, mixer and tools used in preparation; each asset service keeps native use hours or documented own physical driver. Include actual complete-life production, maintenance/replacements and end-of-life share across prepare_host, finish_surface and other jobs/periods. Provider coverage must be explicit.

- Collection subject: Actual preparation reusable equipment service shares
- Flow property / unit: Duration / h
- Amount rule: Actual preparation use time by asset/event and period; asset ledger supplies service share across complete life. A job use-hour is not an asset count or a second purchased asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_operations`

Range evidence need: Obtain asset IDs, observed use/lifetime records, replacements/termination, other consumers and provider coverage; no assumed tool lifetime or h per court.

#### Collection requirement: Actual directly abstracted preparation water (`prep_abstraction`)

Process / prospective direction / type: `prepare_host` / `inputs` / `elementary`.

Only actual direct withdrawal from identified source/compartment. Exclude purchased water and internal recirculation; use distinct source identities for different abstractions.

- Collection subject: Actual directly abstracted preparation water
- Flow property / unit: Mass / kg
- Amount rule: Actual source meter/withdrawal record with density/temperature for volume conversion and identified source, permit and use event.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_materials`

Range evidence need: Obtain actual withdrawal meter and source/season records if abstraction occurs; zero only from evidenced absence, not a default.

#### Collection requirement: Accepted clean flush existing host surface at preparation handoff (`prepared_host_output`)

Process / prospective direction / type: `prepare_host` / `outputs` / `product`.

Physical retained court area that passed preparation inspection, linked by transfer ID to prepared_host_input. Original host is not an upstream newly built court; this internal interface carries preparation burdens once.

- Collection subject: Accepted clean flush existing host surface at preparation handoff
- Flow property / unit: Area / m2
- Amount rule: Measured accepted area by court/repair boundary and transfer ID; retain excluded or failed areas separately until corrected.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_state`
- Sources: `sportmaster-neutral-ready-mix-202406`

Range evidence need: Collect surveyed accepted geometry and tolerance, inspection and transfer record; no universal court area or assumed all-area acceptance.

#### Collection requirement: Actual usable preparation products returned out of custody (`prep_returns`)

Process / prospective direction / type: `prepare_host` / `outputs` / `product`.

Conditional individual usable repair/cleaner/consumable products that actually leave this foreground custody for supplier or another job. Closing stock retained on site is not an output. Gross input remains recorded; no netting then exporting the same return again. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Collection subject: Actual usable preparation products returned out of custody
- Flow property / unit: Mass / kg
- Amount rule: Weighed actual outward return by original lot identity, state, destination, custody time and upstream burden treatment; distinguish waste rejection.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_residuals`

Range evidence need: Obtain return tickets, acceptance of usability and lot-level receipt/stock balance; no assumed return fraction.

#### Collection requirement: Actual removed loose coating and preparation debris wastes (`prep_removed_solids`)

Process / prospective direction / type: `prepare_host` / `outputs` / `waste`.

Separate actual scraped loose coating, dirt/debris and failed patch material by composition and waste classification/destination. Retained sound coating/host is starting stock, not incoming new material or waste.

- Collection subject: Actual removed loose coating and preparation debris wastes
- Flow property / unit: Mass / kg
- Amount rule: Weigh actual removed loads/containers with tare and moisture state, identify receiving treatment/custody and exclude mass remaining on host.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_residuals`
- Sources: `sportmaster-neutral-ready-mix-202406`

Range evidence need: Obtain actual removal maps, segregated load weights/moisture and destination records; no assumed removal percentage.

#### Collection requirement: Actual preparation packaging and spent consumable wastes (`prep_used_articles`)

Process / prospective direction / type: `prepare_host` / `outputs` / `waste`.

Separate each actual container, absorbent and containment/cleaning article by material and contamination. Reusable articles and supplier-owned packaging returned as products use custody records; packaging embedded upstream is not purchased again.

- Collection subject: Actual preparation packaging and spent consumable wastes
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed waste by article/material, tare/residue separation, destination and event, recording any provider-included treatment once.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_residuals`

Range evidence need: Obtain actual packaging bill and spent article weights/contamination/destination; no generic packaging percentage.

#### Collection requirement: Actual preparation substances released to the environment (`prep_releases`)

Process / prospective direction / type: `prepare_host` / `outputs` / `elementary`.

Conditional zero, one or multiple actual emissions by substance and receiving air/water/soil compartment, including engine exhaust, dust fraction and uncaptured rinse species where applicable. Expand distinct identities; broad VOC, PM and wastewater are not concrete elementary substances. Report the resulting modelled/derived species amount as calculated from collection; preserve direct monitoring results and whether a factor was used.

- Collection subject: Actual preparation substances released to the environment
- Flow property / unit: Mass / kg
- Amount rule: Calculate each actual species amount from measured attributable activity and applicable species-specific factor/method, or from direct monitoring without an activity model; retain method, factor numerator/denominator units, product/technology/medium applicability, capture and uncertainty under the section 8 species calculation. Fuel activity is actual consumed/burned fuel, excluding unburned returns/waste/spills; use direct records as calculation inputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prep_residuals`

Range evidence need: Obtain actual substances/SDS/test results, exhaust or release method/factors and particle size/medium/capture evidence with uncertainty; no invented emission factor.

#### Collection requirement: Accepted clean flush existing host surface at preparation handoff (`prepared_host_input`)

Process / prospective direction / type: `finish_surface` / `inputs` / `product`.

Receive the exact area/state/transfer ID from prepared_host_output after qualification, cleaning and flush localized repair. Carry preparation burden once; not new pavement supply and not an external additional accepted court.

- Collection subject: Accepted clean flush existing host surface at preparation handoff
- Flow property / unit: Area / m2
- Amount rule: Matched accepted measured transfer area by court and location; any rejected substrate returns to prepare_host with its rework events linked.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_state`
- Sources: `sportmaster-neutral-ready-mix-202406`

Range evidence need: Obtain matched area/transfer/inspection records with survey tolerance and any area change explained; do not set a generic standard court area.

#### Collection requirement: Actual separately added approved coating-system ingredients (`finish_recipe_additions`)

Process / prospective direction / type: `finish_surface` / `inputs` / `product`.

Conditional zero/one/multiple distinct ingredients only when actual selected resurfacer or coating instruction requires addition. Expand each actual sand, water or other ingredient independently with supply state and role; never add dilution water to Neutral Ready-Mix CMT68 or charge factory-included filler/water twice.

- Collection subject: Actual separately added approved coating-system ingredients
- Flow property / unit: Mass / kg
- Amount rule: Measured actual ingredient issues and additions by exact product/ingredient and batch, with source/density/state and no heterogeneous summation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`
- Sources: `sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

Range evidence need: Obtain actual current product-specific mixing instruction and batch weigh/meter records; no borrow of concentrate recipes for ready-mix.

#### Collection requirement: Actual finishing masking and auxiliary products (`finish_auxiliaries`)

Process / prospective direction / type: `finish_surface` / `inputs` / `product`.

Conditional distinct actual masking tape/protection/cleaning articles or approved line primer by supplied identity; expand separate exchanges, preserve reusable articles under asset ledger. No unrelated topcoat or adhesion promoter inferred automatically.

- Collection subject: Actual finishing masking and auxiliary products
- Flow property / unit: Mass / kg
- Amount rule: Gross actual issues by product/run with weighed mass or actual measured piece-mass conversion and stock/return ledger.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`
- Sources: `sportmaster-tennis-surfaces`

Range evidence need: Obtain approved actual procedure and each article/product specification/use record; no universal tape/primer allowance.

#### Collection requirement: Actual gross finishing fuel supplied into node (`finish_fuel`)

Process / prospective direction / type: `finish_surface` / `inputs` / `product`.

Conditional each actual fuel product/grade for powered finishing or access equipment, distinct from already provider-covered service and upstream supplied transport. Actual unconsumed usable fuel crossing custody uses the product-return row; unburned discarded/recovered liquid uses its waste row; actual released species use the elementary release row. Tank transfers internal to the same boundary do not create new consumption. The input exchange is gross fuel entering the node; actual consumed/burned fuel is a distinct derived activity, not this input amount.

- Collection subject: Actual gross finishing fuel supplied into node
- Flow property / unit: Mass / kg
- Amount rule: Record gross actual fuel supply/issue crossing into this node by exact grade and event, preserving opening/closing stocks and all true outward usable returns/transfers, unburned waste and actual releases separately. Do not net returns from this input when also recording their output. Calculate actual burned fuel separately using the section 8 fuel balance only for combustion activity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_operations`

Range evidence need: Collect actual engine, fuel, tank/issue and run evidence; no standard fuel/area factor.

#### Collection requirement: Actual finishing freight services (`finish_logistics`)

Process / prospective direction / type: `finish_surface` / `inputs` / `product`.

Distinct actual material/tool delivery, true returns and waste collection legs by cargo/mode/provider, documented distance/load and empty-leg convention. Upstream/provider-included legs are identified and excluded from added burden.

- Collection subject: Actual finishing freight services
- Flow property / unit: Transport service / t.km
- Amount rule: Actual tonnes and actual kilometres by concrete transport leg and attributed service share.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_operations`

Range evidence need: Obtain real trip/payload/route and supplier inclusion evidence; no illustrative freight default.

#### Collection requirement: Actual finishing reusable equipment service shares (`finish_assets`)

Process / prospective direction / type: `finish_surface` / `inputs` / `product`.

Individual mixers, paddles, squeegees and line equipment with actual native service driver. Asset complete-life ledger links preparation/finishing, other contracts and periods, production, maintenance/replacement/termination and end-of-life once; provider-inclusive coverage or uncovered capital share explicitly recorded.

- Collection subject: Actual finishing reusable equipment service shares
- Flow property / unit: Duration / h
- Amount rule: Measured use time by asset/run and share of measured complete-life service across all consumers; hand tools may use another justified physical driver with its true property/unit.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_operations`

Range evidence need: Collect asset use/production/maintenance/end-of-life evidence and other job/period drivers; no fictitious count conversion or default useful life.

#### Collection requirement: Actual directly abstracted finishing cleaning water (`finish_abstraction`)

Process / prospective direction / type: `finish_surface` / `inputs` / `elementary`.

Only actual fresh direct withdrawal from an identified source for tool/changeover cleaning or permitted separate ingredient role. Not purchased water or recirculation; no unapproved dilution of Neutral Ready-Mix.

- Collection subject: Actual directly abstracted finishing cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Meter/withdrawal record by source/event with actual density/temperature for volume conversion and permitted use.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`

Range evidence need: Collect source meter, source/season and actual cleaning event evidence; zero requires documented absence of abstraction.

#### Collection requirement: Actual usable finishing products returned out of custody (`finish_returns`)

Process / prospective direction / type: `finish_surface` / `outputs` / `product`.

Individual usable coating/tint/line/auxiliary lots actually exported to supplier or another job with destination and carried burden. Retained closing stock remains an internal stock term; actual waste does not become a product return by accounting choice. Include actual usable unconsumed fuel outward returns/transfers by grade and lot; distinguish internal tank transfer and carried closing fuel stock.

- Collection subject: Actual usable finishing products returned out of custody
- Flow property / unit: Mass / kg
- Amount rule: Gross weighed outward usable quantity by original supplied or documented mixed state, lot and custody event; do not net incoming receipt and count this export again.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_residuals`

Range evidence need: Obtain actual dispatch/receiver usability evidence, wet state and lot balance; no presumed recovery/return ratio.

#### Collection requirement: Actual wet coating and removed defective-film wastes (`finish_coating_wastes`)

Process / prospective direction / type: `finish_surface` / `outputs` / `waste`.

Actual surplus unusable coating, tint, line paint and scraped recoat rejects segregated by identity/composition, wet/dry state and treatment destination. Material retained as accepted dry film remains on the host; failed areas are reworked, not accepted extra service.

- Collection subject: Actual wet coating and removed defective-film wastes
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed waste containers/loads with tare and wet state; retain originating batch/defect and treatment, exclude wastewater mass recorded separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_residuals`

Range evidence need: Collect actual unusable/residue/removed-film weights and solid content where required, defect maps and disposal receipts; no universal coating loss fraction.

#### Collection requirement: Actual finishing packaging and spent masking wastes (`finish_spent_articles`)

Process / prospective direction / type: `finish_surface` / `outputs` / `waste`.

Separate containers, tape, protective sheets and cleaning articles by material/contamination/destination. Supplier-included packaging upstream burden counted once; reusable returns/remaining stock not classified as waste without evidence.

- Collection subject: Actual finishing packaging and spent masking wastes
- Flow property / unit: Mass / kg
- Amount rule: Weighed actual article and packaging waste, identifying contained coating residue separately and provider-included disposal coverage.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_residuals`

Range evidence need: Obtain actual packaging/article specifications, waste weights and treatment/custody evidence; no generic container or tape mass.

#### Collection requirement: Actual finishing substances released to the environment (`finish_releases`)

Process / prospective direction / type: `finish_surface` / `outputs` / `elementary`.

Conditional actual evaporation/emissions/discharge by identified substance and receiving medium from product SDS/composition and measured/modelled events. Do not call all wet coating water a pollutant, use generic VOC or sum unidentified emissions. Curing water and actual species are distinguished. Report the resulting modelled/derived species amount as calculated from collection; preserve direct monitoring results and whether a factor was used.

- Collection subject: Actual finishing substances released to the environment
- Flow property / unit: Mass / kg
- Amount rule: Calculate each actual species amount from measured attributable activity and applicable species-specific factor/method, or from direct monitoring without an activity model; retain method, factor numerator/denominator units, product/technology/medium applicability, capture and uncertainty under the section 8 species calculation. Fuel activity is actual consumed/burned fuel, excluding unburned returns/waste/spills; use direct records as calculation inputs.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finish_residuals`

Range evidence need: Obtain actual product/SDS composition, dry-film evidence, species factors/monitoring, capture and receiving medium; no emission inferred from acrylic marketing label.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare_host | Clean and locally repair qualified existing host | required | Qualified existing dense host; actual cleaning and local repair extent | foreground treatment; accepted clean flush host handoff | Actual accepted treated area m2, linked to contract and transfer IDs |
| finish_surface | Apply compatible acrylic system and accept marked cured surface | required | Accepted prepared host; resurfacer only if actual specification requires | foreground surface finishing; final repair handover | 1 item accepted contract |

Production is a court-specific campaign, with material lots, tint/colour/line runs, coats and changeovers indexed. Failed preparation returns to prepare_host; defects/recoats repeat the owning operation under the same contract with all burdens retained. The final accepted service excludes unresolved rejected areas. No procurement or inspection-only node is created.

### Process: Clean and locally repair qualified existing host (`prepare_host`)

#### Inputs

##### Product flows

###### Actual supplied preparation water (`prep_supplied_water`)

Purchased/utility water for actual cleaning and repair preparation. Excludes coating dilution and separately recorded direct abstraction; recycle circulation is internal, fresh makeup remains separately metered.

- Selected flow: Actual supplied preparation water
- Flow property / unit: Mass / kg
- Amount rule: Gross actual water allocated to this contract from start/end meters or delivered lot; convert L or m3 using actual density/temperature and document accuracy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_materials`
- Sources: `sportmaster-maintenance`

Range evidence need: Collect site cleaning method, treated area, actual fresh water by wash event, density and meter uncertainty; no universal kg/m2 cleaning factor.

###### Actual preparation electricity supply (`prep_electricity`)

Actual electricity used by washer/pumps/mixing/inspection within prepare_host, with supply voltage/geography/time and supplier coverage. Native electrical energy remains kWh; exact support identities require confirmation.

- Selected flow: Actual preparation electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Submeter readings by machine/event; justified disaggregation from shared meters with measured operating time/load, not nameplate-only consumption.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_operations`

Range evidence need: Obtain preparation-specific meter/run record and measured allocation uncertainty; no default kWh per area.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Actual captured preparation wastewater for treatment (`prep_wastewater`)

Captured cleaning/rinse/repair water with suspended coating/debris and actual cleaner content transferred to an identified treatment receiver. Keep wastewater mixture wet mass separate from species actually discharged outside capture.

- Selected flow: Actual captured preparation wastewater for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual tank/load water balance or weighed wet wastewater after capture, with composition/sampling and downstream custody; avoid double counting captured solids already weighed separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_residuals`

Range evidence need: Collect capture volumes/density, rainfall/runoff ingress, solids separation and treatment receipts plus sampling uncertainty; no default capture efficiency or discharge fraction.

###### Actual unburned discarded or recovered fuel wastes (`prep_fuel_wastes`)

Conditional separate actual off-spec/unburned fuel, recovered free spill liquid and fuel-contaminated cleanup mixture sent to a waste receiver. Identify grade/composition and keep mixture mass distinct from its contained fuel. Usable outward fuel is a product return; actual uncontrolled substance releases belong to the elementary release row.

- Selected flow: Actual unburned discarded or recovered fuel wastes
- Flow property / unit: Mass / kg
- Amount rule: Weighed actual unburned waste by grade/composition, original event and receiving custody, retaining fuel-content measurement where mixed; reconcile against the fuel balance without counting it as burned fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_prep_residuals`

Range evidence need: Obtain actual incident/tank drainage, segregated waste weights/composition and receiver records; absence requires event evidence, no assumed spill or recovery fraction.

##### Elementary flows

### Process: Apply compatible acrylic system and accept marked cured surface (`finish_surface`)

#### Inputs

##### Product flows

###### Actual compatible acrylic resurfacer supplied product (`finish_surfacer`)

Conditional when actual host roughness/porosity and approved system require a dense compatible underlayment. Identify exact supplied product and state; factory-included sand/water remains inside supplied mass, any actually added recipe ingredients are separate exchanges.

- Selected flow: Actual compatible acrylic resurfacer supplied product
- Flow property / unit: Mass / kg
- Amount rule: Gross actual wet supplied resurfacer receipt/issue by lot and coat/run; record applied/stock/return/residue distinctly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`
- Sources: `sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

Range evidence need: Obtain approved current product recipe, surface condition, actual coverage and lot mass; generic colour coverage is not surfacer kg/m2.

###### Actual supplied acrylic colour coating product (`finish_colour`)

Exact actual non-cushioned tennis colour product at supplied state. For Neutral Ready-Mix CMT68 the base is not yet tinted: actual ColorPlus pigment dispersion is a separate input and no water is added. Already coloured ready-mix and concentrates are distinct supplied identities; no mixing of their recipes.

- Selected flow: Actual supplied acrylic colour coating product
- Flow property / unit: Mass / kg
- Amount rule: Gross measured supplied wet coating by product/lot/run, retaining supplied sand/water/pigment status and applied, real outward return, remaining usable stock and residue accounts.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`
- Sources: `sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

Range evidence need: Obtain actual product/lot wet mass or density-supported volume, treated area, coats, weather and loss evidence. CMT68 approximate volume coverage cannot become universal kg/m2 or dry-film mass.

###### Actual separate approved pigment dispersion (`finish_tint`)

Conditional separate actual tint product/colour at supply gate when chosen base requires tint. Mandatory actual addition for Neutral Ready-Mix CMT68; absent only if genuinely factory-tinted supplied product requires none. Not raw pigment inferred from emulsion colour.

- Selected flow: Actual separate approved pigment dispersion
- Flow property / unit: Mass / kg
- Amount rule: Actual weighed dispersion additions by product lot, base pail/batch, colour and coat; record gross receipts/issues and unused stock/returns separately.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`
- Sources: `sportmaster-neutral-ready-mix-202406`

Range evidence need: Obtain chosen current base/tint instructions and actual batch additions/density. CMT68 pail-specific volume instruction is not generic tint mass for other products.

###### Actual compatible acrylic tennis line paint (`finish_line_paint`)

Exact supplied line-marking paint of actual texture/colour and compatible system. Separate from field colour coating; any actual clear line primer is its own concrete product under the actual auxiliary-products requirement.

- Selected flow: Actual compatible acrylic tennis line paint
- Flow property / unit: Mass / kg
- Amount rule: Gross weighed actual line-paint issues by lot/run and measured applied/return/stock/residual terms; line length/width/area remain measured attributes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`
- Sources: `sportmaster-tennis-surfaces`

Range evidence need: Obtain actual line product instructions, line geometry and weighed application records; no area-to-paint-mass factor assumed.

###### Actual supplied finishing tool and changeover cleaning water (`finish_tool_water`)

Actual purchased water for mixer/squeegee/line-equipment cleaning and any project-authorized surface rinse. This is distinct from formula water and does not imply dilution of the ready-mix; direct abstraction, if actual, requires a separately identified elementary source exchange.

- Selected flow: Actual supplied finishing tool and changeover cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Actual makeup meter/delivery by cleaning/changeover event; internal recycled circulation excluded from fresh input, volume conversion uses actual density.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_materials`

Range evidence need: Collect actual wash method, changeover frequency, fresh makeup and capture balance with meter uncertainty; no fixed rinse or kg per paint pail.

###### Actual finishing electricity supply (`finish_electricity`)

Actual powered stirring, pumping/marking or acceptance equipment supply, preserving provider/geography/time and native kWh. Drying/curing electricity only if actual, not implied by weather drying.

- Selected flow: Actual finishing electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Metered equipment/event use with measured allocation from shared circuits and exclusion of provider-included energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_operations`

Range evidence need: Obtain actual equipment/event electricity and supply records, load/time evidence and uncertainty; no generic cure energy.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted existing outdoor acrylic tennis hardcourt recoating repair service (`accepted_recoating_service`)

Completed actual contract on identified qualified dense host: actual approved compatible system, colour/texture, fully dried/cured coats and tennis lines, closed defects and signed handover/opening permission. It is incremental repair, not new full-court construction, guaranteed porosity or an automatic ITF class.

- Selected flow: Accepted existing outdoor acrylic tennis hardcourt recoating repair service
- Flow property / unit: Number of items / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_state`
- Sources: `sportmaster-neutral-ready-mix-202406`; `sportmaster-tennis-surfaces`

Range evidence need: Definition fixes one accepted contract as denominator, not its area or service life. Collect signed court/area/system/dates/defect closure and actual acceptance evidence; no numerical dose/yield/life range can be inferred.

##### Waste flows

###### Actual captured finishing wash wastewater (`finish_wastewater`)

Captured tool/changeover wash water and authorized rinses containing actual coating species transferred for treatment. Includes actual rain/runoff contamination managed by this repair; separately track already removed solids and actual outside-capture releases.

- Selected flow: Actual captured finishing wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Weighed/measured wet captured mixture and composition at transfer, density-supported volume conversion, event/run and downstream receiver.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_residuals`

Range evidence need: Collect actual cleaning/capture/rain balance and treatment receipts with composition/sampling uncertainty; no default all-water discharge or capture rate.

###### Actual unburned discarded or recovered fuel wastes (`finish_fuel_wastes`)

Conditional separate actual off-spec/unburned fuel, recovered free spill liquid and fuel-contaminated cleanup mixture sent to a waste receiver. Identify grade/composition and keep mixture mass distinct from its contained fuel. Usable outward fuel is a product return; actual uncontrolled substance releases belong to the elementary release row.

- Selected flow: Actual unburned discarded or recovered fuel wastes
- Flow property / unit: Mass / kg
- Amount rule: Weighed actual unburned waste by grade/composition, original event and receiving custody, retaining fuel-content measurement where mixed; reconcile against the fuel balance without counting it as burned fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finish_residuals`

Range evidence need: Obtain actual incident/tank drainage, segregated waste weights/composition and receiver records; absence requires event evidence, no assumed spill or recovery fraction.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_service | accepted_recoating_service | One accepted contract receives all attributable preparation, finishing and defect/recoat burdens. No marketable co-product is assumed; old host retention and waste are not co-products or substitution credits. Divide a multi-contract campaign only by traceable court/run physical use, with measured shares and distinct accepted denominators. |  |
| gross_stock | all material inputs, returns and waste outputs | Reconcile opening usable stock plus gross receipts against application/use, true usable outward returns, waste/residuals and closing usable stock by lot and supplied/mixed state. Do not net receipts then export the return again. Closing stock carries declared upstream burden forward; no negative waste or automatic avoided production credit. Distinguish issue from receipt and wet from dry quantities. |  |
| shared_complete_life | prep_assets; finish_assets; operational services | Use measured asset/utility service drivers for every consuming node, other contract and reporting period; shares sum to the complete-life total without duplicate ownership. Record production, maintenance/replacement/retirement and end-of-life coverage and actual remaining life. Provider-inclusive service replaces only evidenced covered burdens; add uncovered share once with disclosed uncertainty. Missing justified complete-life coverage or denominator blocks finalization; an evidence-supported prospective in-service scenario is allowed, with forecast/observed distinction, uncertainty, sensitivity and updates. |  |
| campaign_changeover | both node material and operation records | Define actual repair campaign by contract/court and actual tint batch, coat/colour/line run, weather window and changeover event; do not infer a production batch from a sold pail. Attribute measured mixing, wash, setup, inspection and rework to consuming runs/contracts using actual causal drivers. Shared event has one owner; if a campaign crosses periods, maintain stable IDs and carry attributed balances without charging the event twice. |  |
| rework_retention | both nodes failed areas and material returns | Failed dirty/defective host returns to prepare_host; deficient colour/lines/cure return to finish_surface or underlying repair with actual event/transfer link. Retain original and corrective burdens in this contract, account consumed materials and outgoing rejects once, and count final acceptance once only after closed defects. Distinguish external usable supplier returns from waste and internal rework. | sportmaster-neutral-ready-mix-202406 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep_materials | prepare_host | Each actual supplied material, water source and recipe addition | lot and event ledger | contract_id; court_id; date; period_id; run_id; event_id; lot_id; product_identity; supply_state; formulation; gross_receipt_kg; issue_kg; opening_stock_kg; closing_stock_kg; outward_return_kg; scale_tare_kg; measured_gross_load_kg; water_meter_start_m3; water_meter_end_m3; density_kg_per_m3; temperature_degC; addition_identity; actual_recipe; supplier_coverage | Collect delivery/stock/tare-weigh tickets and calibrated water meters by exact identity; distinguish receipts/issues, formulated/active content, factory included versus on-site added ingredient, bought versus abstracted water. Link actual tint batch/base and coating/run, record zero only with evidenced absence. Convert actual volumes only with documented density/temperature; derive uncertainty from scales/meters/lot variation. | kg by concrete material/source; raw m3 with density | Every receipt, issue, addition, stock close and water-use event | Full repair campaign including failed attempts and changeovers; stock at campaign boundaries | Actual contract courts, supplier lots and withdrawal source | per reference flow | Supplier instructions/SDS; calibration/tare; invoices and stock/recipe reconciliation; exact lot/role and product compatibility; actual uncertainty and coverage; material balance uses measured gross load minus vehicle/container tare, before netting returns |
| cp_prep_operations | prepare_host | Actual electricity, fuel, logistics and complete-life asset shares | machine trip and asset service ledger | contract_id; court_id; date; period_id; run_id; event_id; asset_id; meter_start_kWh; meter_end_kWh; fuel_identity; fuel_issue_kg; fuel_density_kg_per_L; service_hours_h; cargo_t; distance_km; empty_leg_rule; provider_coverage; lifetime_service_h; other_consumers; production_burden; maintenance_event; replacement_event; termination_event; end_of_life_coverage; allocation_driver; opening_fuel_stock_kg; closing_fuel_stock_kg; gross_fuel_receipt_kg; true_fuel_outward_return_kg; fuel_transfer_boundary; unburned_fuel_waste_kg; fuel_spill_kg; actually_burned_fuel_kg; unburned_fuel_release_kg | Meter actual equipment and record actual tank/issues/trips by job/run. Cross-check shared meter separation and payload/distance with operator/provider records. Asset ledger enumerates prepare_host, finish_surface and other jobs/periods, complete-life production/use/maintenance/replacement/termination/end-of-life; use measured causal service shares and document provider coverage and uncovered burdens. Each shared event has one owner. Completed asset life uses observed history; in-service remaining service/replacement/termination/end-of-life may use justified prospective scenarios, labelled forecast with total-service denominator/source, uncertainty/sensitivity and actual-event update triggers. Record the fuel input exchange as gross fuel crossing into this node. Reconcile opening/closing fuel and gross inputs with true outward usable returns/transfers, unburned waste, actual unrecovered release and actual burning; incident total spill includes recovered portions and must not be subtracted again. transfers internal to the boundary are not consumed fuel. Only actual burned fuel drives combustion factors; route unburned fuel by actual product/waste/elementary custody and substance state. | kWh; kg by fuel; t.km by leg; h by asset | Every run, fuel issue, trip and asset event; reconcile campaign and period close | Full campaign and complete-life asset periods including other jobs | Actual node equipment, providers, supply routes and complete-life ledger | per reference flow | Calibrated meters; tank and trip evidence; measured driver/share sums; asset replacement/termination and coverage evidence; uncertainty and no duplicated provider burdens |
| cp_prep_state | prepare_host | Qualified retained host and accepted preparation handoff | inspection survey and handover record | contract_id; court_id; date; period_id; run_id; transfer_id; host_identity; structural_condition; drainage_condition; compatibility_evidence; defect_location; treated_area_m2; line_length_m; line_width_m; line_area_m2; repair_dimensions_mm; coat_id; tint_batch_id; weather_air_degC; weather_surface_degC; rain_record; dry_time_h; cure_time_h; product_instruction_revision; criterion_source; specified_tolerance; measured_result; rejected_area_m2; rework_event_id; signed_acceptance | Survey actual host/repair geometry with actual units, specified tolerance and criterion source. Inspect existing structure/drainage and prior-coating compatibility before work; record actual cleaning/flush localized repair inspection, failed-area correction and accepted clean prepared area transferred under matched transfer ID to finish_surface. Shared tracking fields identify the same contract, but final coating/curing/lines/service handover are owned by cp_finish_state. | m2; m; mm; actual host/preparation test units | Before preparation, after cleaning/local repair and each corrective preparation gate | Dated preparation phase through accepted paired transfer | Identified actual courts, treated portions and paired interfaces | per reference flow | Survey/inspection and actual criterion/instruction versions; signed transfer/handover; raw tests with actual acceptance tolerance; recorded defect closure and geometry/timing uncertainty |
| cp_prep_residuals | prepare_host | Each actual usable return, waste stream and environmental substance | custody, weighing and release record | contract_id; court_id; date; period_id; run_id; event_id; lot_id; original_node; outward_custody_id; destination; usable_or_waste; waste_composition; wet_mass_kg; dry_mass_kg; tare_kg; measured_gross_load_kg; wastewater_m3; density_kg_per_m3; rainfall_ingress_m3; separated_solids_kg; substance_identity; receiving_medium; particle_fraction; capture_method; factor_source; monitoring_result; uncertainty; upstream_burden_owner; activity_value; activity_unit; factor_value; factor_numerator_unit; factor_denominator_unit; factor_applicability; factor_capture_basis; factor_uncertainty; fuel_unburned_state; unburned_fuel_release_kg | Weigh segregated outgoing residuals/usable returns with tare and wet state, verify receiver/custody and treatment coverage. Measure captured wastewater including actual rainfall ingress and separated solids; sample/speciate actual releases or use justified actual-product/process factors with capture and uncertainty. Never export retained stock, sum unknown substances or count captured wastewater as elementary discharge. Match failed/recoat events to original node and retain burdens. | kg by actual product/waste/substance; raw wastewater m3 with density | Every outward load/return, capture/cleaning and release event | Full campaign through disposal/return and defect closure | Actual court capture boundary and downstream receiver/receiving medium | per reference flow | Waste/return tickets and receiving acceptance; calibrated scales; SDS/species/capture/monitoring or factor evidence; wet/dry/solids balances, custody and uncertainty |
| cp_finish_materials | finish_surface | Each actual supplied material, water source and recipe addition | lot and event ledger | contract_id; court_id; date; period_id; run_id; event_id; lot_id; product_identity; supply_state; formulation; gross_receipt_kg; issue_kg; opening_stock_kg; closing_stock_kg; outward_return_kg; scale_tare_kg; measured_gross_load_kg; water_meter_start_m3; water_meter_end_m3; density_kg_per_m3; temperature_degC; addition_identity; actual_recipe; supplier_coverage | Collect delivery/stock/tare-weigh tickets and calibrated water meters by exact identity; distinguish receipts/issues, formulated/active content, factory included versus on-site added ingredient, bought versus abstracted water. Link actual tint batch/base and coating/run, record zero only with evidenced absence. Convert actual volumes only with documented density/temperature; derive uncertainty from scales/meters/lot variation. | kg by concrete material/source; raw m3 with density | Every receipt, issue, addition, stock close and water-use event | Full repair campaign including failed attempts and changeovers; stock at campaign boundaries | Actual contract courts, supplier lots and withdrawal source | per reference flow | Supplier instructions/SDS; calibration/tare; invoices and stock/recipe reconciliation; exact lot/role and product compatibility; actual uncertainty and coverage; material balance uses measured gross load minus vehicle/container tare, before netting returns |
| cp_finish_operations | finish_surface | Actual electricity, fuel, logistics and complete-life asset shares | machine trip and asset service ledger | contract_id; court_id; date; period_id; run_id; event_id; asset_id; meter_start_kWh; meter_end_kWh; fuel_identity; fuel_issue_kg; fuel_density_kg_per_L; service_hours_h; cargo_t; distance_km; empty_leg_rule; provider_coverage; lifetime_service_h; other_consumers; production_burden; maintenance_event; replacement_event; termination_event; end_of_life_coverage; allocation_driver; opening_fuel_stock_kg; closing_fuel_stock_kg; gross_fuel_receipt_kg; true_fuel_outward_return_kg; fuel_transfer_boundary; unburned_fuel_waste_kg; fuel_spill_kg; actually_burned_fuel_kg; unburned_fuel_release_kg | Meter actual equipment and record actual tank/issues/trips by job/run. Cross-check shared meter separation and payload/distance with operator/provider records. Asset ledger enumerates prepare_host, finish_surface and other jobs/periods, complete-life production/use/maintenance/replacement/termination/end-of-life; use measured causal service shares and document provider coverage and uncovered burdens. Each shared event has one owner. Completed asset life uses observed history; in-service remaining service/replacement/termination/end-of-life may use justified prospective scenarios, labelled forecast with total-service denominator/source, uncertainty/sensitivity and actual-event update triggers. Record the fuel input exchange as gross fuel crossing into this node. Reconcile opening/closing fuel and gross inputs with true outward usable returns/transfers, unburned waste, actual unrecovered release and actual burning; incident total spill includes recovered portions and must not be subtracted again. transfers internal to the boundary are not consumed fuel. Only actual burned fuel drives combustion factors; route unburned fuel by actual product/waste/elementary custody and substance state. | kWh; kg by fuel; t.km by leg; h by asset | Every run, fuel issue, trip and asset event; reconcile campaign and period close | Full campaign and complete-life asset periods including other jobs | Actual node equipment, providers, supply routes and complete-life ledger | per reference flow | Calibrated meters; tank and trip evidence; measured driver/share sums; asset replacement/termination and coverage evidence; uncertainty and no duplicated provider burdens |
| cp_finish_state | finish_surface | Received host, coat/cure/line state and accepted final service | inspection survey and handover record | contract_id; court_id; date; period_id; run_id; transfer_id; host_identity; structural_condition; drainage_condition; compatibility_evidence; defect_location; treated_area_m2; line_length_m; line_width_m; line_area_m2; repair_dimensions_mm; coat_id; tint_batch_id; weather_air_degC; weather_surface_degC; rain_record; dry_time_h; cure_time_h; product_instruction_revision; criterion_source; specified_tolerance; measured_result; rejected_area_m2; rework_event_id; signed_acceptance | Survey actual court/repair and line geometry with units/tolerance. Inspect existing structure/drainage and coating compatibility before start; document clean flush repair gate and pair transfer IDs/areas. Record actual product instruction and weather/timing by coat/run, actual cure/line/specified surface tests and defects; final acceptance requires closed defects and opening permission. Each raw measured attribute retains actual unit, tolerance and criterion source; no universal ITF/porosity or court size. | item final contract; m2; m; mm; degC; h as raw attributes | Before preparation, each gate/coat, after defect correction and final handover | Dated complete repair campaign; final output counted once | Identified actual courts, treated portions and paired interfaces | per reference flow | Survey/inspection and actual criterion/instruction versions; signed transfer/handover; raw tests with actual acceptance tolerance; recorded defect closure and geometry/timing uncertainty |
| cp_finish_residuals | finish_surface | Each actual usable return, waste stream and environmental substance | custody, weighing and release record | contract_id; court_id; date; period_id; run_id; event_id; lot_id; original_node; outward_custody_id; destination; usable_or_waste; waste_composition; wet_mass_kg; dry_mass_kg; tare_kg; measured_gross_load_kg; wastewater_m3; density_kg_per_m3; rainfall_ingress_m3; separated_solids_kg; substance_identity; receiving_medium; particle_fraction; capture_method; factor_source; monitoring_result; uncertainty; upstream_burden_owner; activity_value; activity_unit; factor_value; factor_numerator_unit; factor_denominator_unit; factor_applicability; factor_capture_basis; factor_uncertainty; fuel_unburned_state; unburned_fuel_release_kg | Weigh segregated outgoing residuals/usable returns with tare and wet state, verify receiver/custody and treatment coverage. Measure captured wastewater including actual rainfall ingress and separated solids; sample/speciate actual releases or use justified actual-product/process factors with capture and uncertainty. Never export retained stock, sum unknown substances or count captured wastewater as elementary discharge. Match failed/recoat events to original node and retain burdens. | kg by actual product/waste/substance; raw wastewater m3 with density | Every outward load/return, capture/cleaning and release event | Full campaign through disposal/return and defect closure | Actual court capture boundary and downstream receiver/receiving medium | per reference flow | Waste/return tickets and receiving acceptance; calibrated scales; SDS/species/capture/monitoring or factor evidence; wet/dry/solids balances, custody and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| contract_attribution | all inventory rows | Sum separately identified event quantities attributed to the actual accepted contract; share a multi-contract event only by documented measured causal driver. All inventory is per reference flow. Retain incomplete/rejected attempt burdens until final acceptance. | node-specific protocols; court/run/event IDs; measured driver; signed accepted contract | Individual amount per 1 item accepted repair contract |  |
| lot_reconciliation | all material, stock, return and residual rows | Opening usable stock + gross receipts = actual application/use + true usable outward returns + waste/residual losses + closing usable stock, with actual within-process transformations and measurement difference disclosed by lot/state. Applied wet coating is partitioned into retained film and actual volatilized/other loss evidence; never equate wet mass and dry film. | node materials and residual protocols; supply state; lot; actual film and species evidence | Wet-material and stock closure; carried-forward burden and unresolved difference |  |
| volume_mass | water, coating, tint, fuel and wastewater volumes | Convert each actual lot volume using its own measured/documented density at declared temperature and compatible units; retain original volume, density and uncertainty. No source coverage volume or universal water-density assumption supplies an unmeasured coating mass. | actual volume; actual density; temperature; calibration | kg by actual lot/source |  |
| interface_match | prepared_host_output; prepared_host_input | Match transfer IDs, accepted area/state, court/location and tolerance in both nodes; carry preparation burden once into finish_surface without external additional host production. Explain any rejected/returned area with event linkage. | cp_prep_state; cp_finish_state; transfer IDs | Paired m2 physical handoff and single burden owner |  |
| asset_share | prep_assets; finish_assets | Attribute actual complete-life asset burdens by measured service use of this node/job/period divided by total complete-life service for all consumers, with replacement/termination/end-of-life coverage and retained remaining-life burden disclosed. Do not use contract count to replace true asset service units. | node operations protocols; complete-life ledger; provider inclusion | Native service quantity and attributed complete-life burden without overlap |  |
| fuel_consumption | prep_fuel; finish_fuel; prep_returns; finish_returns; prep_fuel_wastes; finish_fuel_wastes; prep_releases; finish_releases | Actual burned fuel = opening node fuel stock + gross fuel inputs - closing node fuel stock - true usable outward returns/transfers - unburned fuel waste - actual unburned fuel released, by grade/event. All outlet terms are mutually exclusive; total incident spill is partitioned between recovered waste/retained material and actual release, never subtracted again as another term. This derived burned quantity drives combustion only; fuel input remains gross and recorded output returns/wastes are not netted twice. | node operations/residual protocols; actual tank/receipt/return/waste/release records | Actual burned fuel kg by grade/event, distinct from gross input exchange |  |
| species_release | prep_releases; finish_releases | For each actual substance and medium, calculate attributable measured activity times the applicable species factor with explicitly compatible numerator/denominator units and documented factor capture basis; apply measured capture correction only if not already included. Alternatively use direct monitoring mass integration from actual concentration/flow/time with compatible units. Use actual burned fuel, not returned/spilled fuel, for combustion; actual unburned releases use their own substance route. Propagate activity/factor/capture/monitoring uncertainty and identify unsupported species as missing evidence. | node residual and operations protocols; measured activity; species method/factor units/applicability; capture and uncertainty | kg by actual substance/medium per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_gate | all exchanges | Finalize each actual material/provider/waste/substance identity and compatible support/property/unit before concrete dataset exchange creation. Expand each conditional umbrella into distinct actual identities. Reference candidate meaning is exact accepted repair, not generic wall paint/full court. | Actual supplier/SDS/provider and custody/substance data; verified detail and support chain |
| host_scope | host and accepted service | Actual dense compatible host must qualify structurally and drain; existing acrylic does not prove sound underlying pavement. Record repair limits and actual current system compatibility. | Inspection/defect/drainage and substrate/coating compatibility records; current product instruction |
| timing_units | both nodes state/operations | Retain actual units, specified tolerances and source for temperature/time/geometry/power/test attributes. Weather, drying and cure are measured event data; manufacturer example settings apply only to actual selected product. | Dated actual weather/coat/cure/line/test logs with current criteria |
| completeness | all resources and exits | Reconcile receipts/issues/stock/true returns, wet/dry film, captured wastewater, actual species and waste custody; disclose any unreconciled difference. No presumed zero emissions, mandatory chemical recipe or missing actual local repairs. Record gross fuel input and reconcile actual burned activity separately from usable outward returns/transfers, retained stock, unburned waste and actual unrecovered release; incident spill totals must not duplicate recovered waste or environmental releases; route all exits by real custody/substance and do not treat unburned fuel as combustion activity. | Node ledgers, scale/meter uncertainty, actual species/capture and waste/return tickets |
| period_asset | shared services and assets | Enumerate full campaign and all relevant asset lifecycle/reporting periods; link replacement/termination and all consumers. Justify causal shares, provider exclusions and carried stock; missing justified complete-life coverage or denominator blocks finalization; completed life uses observed history and still-in-service life uses justified labelled prospective scenarios, with denominator/source, uncertainty/sensitivity and update triggers. | Asset and provider coverage ledger; period and event IDs; complete-life share sums |
| range_evidence | every inventory row | Numerical guardrails require independent compatible evidence by actual product/state/route/denominator. Current collection requests are explicit missing evidence, not a generic bound. Derive future empirical ranges from separate reviewed comparable campaigns and disclose sample/timing/uncertainty; do not validate a job with its own maximum. | Actual comparable independent records and uncertainty review; product-specific sources; explicit per-card Range evidence need |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| accepted_scope | accepted_recoating_service | Require qualified dense draining compatible host and actual nonstructural repair limits; final output is one identified contract after accepted surface/texture/colour, actual coat/cure conditions, tennis lines, defect closure, signed handover/opening permission. No new court, universal ITF class, guaranteed porosity or service-life-equivalence assertion. | sportmaster-maintenance; sportmaster-neutral-ready-mix-202406 |
| recipe_identity | finish_colour; finish_tint; finish_recipe_additions | Actual supply bill and current instructions must distinguish untinted Neutral Ready-Mix plus actual approved tint without added water from factory-tinted ready-mix or other product-specific concentrate/surfacer routes. Confirm exact product/lot/use and actual additions; tool cleaning water stays distinct. | sportmaster-neutral-ready-mix-202406; sportmaster-tennis-surfaces |
| transfer_rework | prepared_host_output; prepared_host_input; all reject paths | Require identical physical area/state and transfer ownership, with no second upstream host production. Failed host and failed finish events are linked to owning node; original/corrective burdens remain, waste exits close, unresolved rejected area cannot enter accepted output. |  |
| gross_balance | all material and residual rows | Require lot/state gross receipts, actual use/application, true outward usable returns, waste and closing-stock closure. Verify wet/dry mass and actual density conversions, captured-water/solids partition, actual substance and receiving medium. Supplier-included packaging/logistics/treatment is counted once. Fuel input is gross; separate derived burning excludes actual unburned returns, closing stock, waste and unrecovered releases without subtracting total incident spill a second time; all such exits have real product/waste/elementary ownership. Species calculations preserve activity/factor units, applicability, capture basis and uncertainty without double correction. |  |
| mode_period_complete | both node campaigns and assets | Require actual job/court/tint-batch/coat/weather/changeover indexing and all event owners, complete-life asset consumers/periods/production/maintenance/replacement/termination/end-of-life shares, provider coverage and remaining-life/stock burden. Share sums close and no duplicate event/period charging; missing justified complete-life coverage or denominator blocks finalization; completed life is observed, in-service remaining life/replacement/termination/end-of-life may be justified labelled forecasts with source, uncertainty/sensitivity and actual-event updates. |  |
| identity_and_ranges | all inventory rows | Require actual UUID detail and compatible support/property/unit confirmation for final concrete exchanges, and justified source-backed or independent empirical Range where available. Explicit current evidence needs remain gaps and are not bounds. Preserve native kWh/h/t.km and honest unresolved support; broad nearest matches and count conversions are invalid. |  |
| source_and_translation | complete foreground package | Require English/Chinese equivalence for identifiers, reference, physical roles, custody, quantities, measurement/CP/calculation/quality rules and Range decisions, with actual source/instruction versions and generated deterministic projection. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground data package for one accepted incremental recoating repair; process/lifecyclemodel are downstream projections. |
| downstream_use | secondary_dataset; background_dataset only with transparent compatible scope and actual quality limitations |
| allowed_use | Declared dense-host outdoor acrylic tennis hardcourt repair at the measured qualified system, site and handover gate; use measured geometry and physical resources for any explicit comparison. |
| excluded_use | New full-court/base construction; structural/drainage repair; porous permeability-preserving spray; concrete etching; cushion systems; generic paint application; indoor facility; future play/maintenance or service-life-equivalent court claims. |
| required_metadata | Contract/court/location/time and treated/line geometry; host qualification/limits; actual product/system/supply states and instruction versions; lot/tint/coat/weather/cure/line/acceptance records; actual providers/upstream coverage; waste/release custody; asset complete-life periods and drivers; reference/stock/transfer ownership. |
| required_quality_disclosure | Actual identity/support gaps, per-card Range evidence needs, measured uncertainty and physical balances, missing species/capture/coverage, rework and open defects, provider inclusions and asset remaining-life/stock burdens. |
| update_trigger | Change of host/scope/product recipe/instruction, supply state, geometry/acceptance, capture or species evidence, equipment/provider/complete-life attribution, actual recipe/coat weather route, or reviewed comparable quantitative evidence. |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations, CPC Version3.0 Explanatory Notes 30June2025, printed288; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Outdoor tennis-ground repair/restoration classification scope; indoor exclusion; not a recipe or quantitative source |
| sportmaster-tennis-surfaces | literature | SportMaster, Tennis Court Surfaces, current manufacturer product page; https://www.sportmaster.net/tennis-court-surfaces/ | Compatible asphalt/prior acrylic systems; distinction among ready-mix, concentrate, tint, resurfacer, repair and tennis-line supplied products; excludes cushion route |
| sportmaster-maintenance | literature | SportMaster, Tennis Court Maintenance, current manufacturer guidance; https://www.sportmaster.net/maintenance/ | Condition/drainage inspection, cleaning damage risks and specialist repair/resurfacing context; maintenance chemical ratios and cycle are not prescribed preparation or service-life values |
| sportmaster-neutral-ready-mix-202406 | literature | ThorWorks/SportMaster, Neutral Ready-Mix CMT68 Technical Data Sheet, revised06/24; https://www.sportmaster.net/pdfs/specs/NeutralReadyMix.pdf | Clean/flush sound preparation, compatible dense underlayment, actual tint/no-added-water distinction, squeegee application and intercoat dry/cure/weather gate. Product-specific settings/volume coverage are not generic kg/m2 or universal acceptance conditions |
