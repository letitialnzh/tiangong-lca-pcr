---
pcr_id: pcr.constructions-and-construction-services.construction-services.three-tab-asphalt-shingle-pitched-roof-covering-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Three-tab asphalt shingle pitched-roof covering installation service

## 1. Scope and Applicability

This methodology defines foreground data production for mechanically nailed, fiberglass-reinforced three-tab asphalt-shingle covering installed on a delivered, dry, compatible and accepted timber deck. The service includes the actual specified underlay and leak barriers, drip edges, starters, field courses, hip/ridge caps, valley/wall/chimney/penetration flashings, required compatible hand-sealing materials and installation-owned ventilation accessories. It ends only at the documented acceptance of required sealing, drainage, junction and ventilation conditions. Actual accessory finishing and cleanup belong to this lot when specified and performed. [gaf-three-tab-route; gaf-fiberglass-physical-state]

The initial interface excludes framing/deck manufacture, erection or repair, old-covering tear-off and overlays on retained old shingles. Hot-bitumen, torch-applied and liquid-membrane roofing are different routes. If this contractor repairs the delivered interface or constructs a cricket, chimney, counterflashing, vent or other previously external item, reassess scope and include its real materials, operations and ownership before using this dataset. A responsibility label cannot remove actual work from the inventory.

The installed supplier product instructions and project design determine the actual slope suitability, layer schedule, overlaps, fasteners, hand sealing and detail treatment. The cited historical product instructions establish a route example rather than universal installation limits. No manufacturer dimensional, piece-count, nail-count, performance, warranty or climate value becomes a default factor here. Passive seal waiting is recorded as elapsed time; it does not imply heating, while actual protection, access and power loads remain attributable until acceptance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.three-tab-asphalt-shingle-pitched-roof-covering-installation-services |
| classification_refs | cpc:3.0:54530 |
| covered_products | New mechanically nailed fiberglass-reinforced three-tab asphalt shingle pitched-roof covering installation, including specified accessory integration and actual finishing through acceptance. |
| excluded_products | Structural roof/deck production or repair; old-roof tear-off/overlay; non-three-tab roofing; hot-bitumen, torch or liquid-membrane systems; building operation, future maintenance and end-of-life. |
| representative_product | Specified complete three-tab shingle covering on an accepted timber deck, measured over unique net sloped covered area. |
| production_route | Deck/interface release and staged receipt -> underlay/leak-barrier/edge installation -> nailed field/starter/cap/junction/vent integration -> actual finishing, seal-state closure and acceptance. |
| market_state | Site-installed accepted roofing-covering installation service at its declared handover gate, with supplier components in their recorded actual states. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finally accepted complete specified three-tab shingle roof covering installation service over the received timber deck. |
| How much | 1 m2 unique net accepted sloped covered deck area. |
| How well | Actual supplier/product and design requirements met for the declared layers, nails, seals, junction drainage and owned ventilation interfaces, with signed evidence; no universal roof performance class. |
| How long or cycle | One identified installation lot spanning every actual receipt, installation, waiting/protection, correction, WIP closure and final acceptance period; no assumed service life or annualization. |
| reference_flow_link | `accepted_roof_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted three-tab shingle roof covering installation service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | Roof/site and lot; actual installed shingle supplier/SKU/batch; timber-deck release and state; slope/geometry and opening exclusion; selected layers and flashing/vent responsibility; actual fastener/seal requirements; period and rework lineage; acceptance evidence. |

Define A as the sum of distinct finally accepted sloped surface polygons after subtracting each opening once. Use actual surface IDs and the same lot/accepted state. Laps, cuts, overlaps, repeated measurements and rework are real input burdens but create no additional final area. Retained component mass reconciles the assembly; the same material is not emitted again as a separate customer-handover mass output.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_area | accepted_roof_service | Area | m2 | Use unique accepted sloped geometry A > 0, not horizontal plan area. The final reference is A/A = 1; internal surface areas remain measured physical numerators. |
| observational_interface | CP deck/readiness observation and adjacent acceptance records | Area | m2 | Physical accepted timber-deck interface differs from design-document quality evidence. Carry no new deck manufacturing mass or duplicate asset burden. |
| material_mass | Material, packaging, waste, usable-exit and species cards | Mass | kg | Preserve actual material ID and current state. Convert count, length, supplied area or volume only through a measured/supplier-confirmed same-ID/current-state bridge with unit and uncertainty; do not add native counts or lengths directly to kg. |
| water_state | finish_water, water-bearing materials and finish water fates | Mass | kg | Gross fresh water and actual formulation/received/opening processed water are exclusive. Retained bound/free water, solid/liquid waste water, direct liquid release, handoff and closing WIP are separate water pools. A missing closure is a data gap. |
| electricity_measure | Each node electricity card | Energy | kWh | Use actual converted meter differences and topology/period evidence. Retain the exact energy-property identity requirement; never substitute an NCV property solely to match units. |
| service_measure | Each node access/support service card | Duration | h | Use actual contract/billed service availability and attributable periods, including owned idle where relevant. No labor-hour, assumed eight-hour day, lifetime or arbitrary annualization proxy. |
| quantity_once | All cards and calculations | Declared physical property | Declared unit | Calculation outputs are physical numerators except normalized_accepted_roof_service; normalize once by A at inventory amount. A/A is already normalized. Document measured absence; unknown is not zero. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dry accepted timber deck, compatible actual nail-holding substrate and released geometry/interfaces; actual roof product/design instruction set and ownership register available. |
| starting_condition_role | Externally delivered physical asset interface observed in area, with no deck manufacture represented as a new material input. |
| product_classification_scope | The specified new three-tab covering installation service; classification context does not broaden it to every roofing or structural service. |
| recursive_input_rule | A received component uses an appropriate upstream product dataset; do not recursively expand another roofing service or treat the observational deck interface as this service. Any same-category subcontract must have an explicit nonoverlapping responsibility and burden boundary. |
| upstream_dataset_requirement | Actual material/provider/state/geography and dataset gate, including transport/packaging coverage, must be declared. Preserve component upstream burdens at the single external gross acquisition; internal issues/feed retain them without repurchase. |
| disclosure | Site/roof/lot, released deck and external owners, actual supplier instruction and design revisions, every period, component/packaging boundary, actual accessory/finish occurrence, rework, incomplete seals, waste destinations and gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_received_deck | survey_receive | Start at the signed accepted dry compatible timber-deck release. Keep the physical deck geometry separate from drawings/inspection evidence. If actual deck repair or new structural/junction work occurs, reassess and include that responsibility before finalizing the lot. | gaf-three-tab-route |
| boundary_components | survey_receive; underlay_edges; shingle_details | Enumerate actual underlay/leak-barrier, edge metal, underlay fixings/seal consumables, field shingles, separately purchased starter/caps, roof nails, flashing/owned vents and sealing formulations. Keep exact supplier/material/current state and component schedule; field-stock caps are internal transformation rather than a second purchase. | gaf-three-tab-route; gaf-fiberglass-physical-state |
| boundary_gross_custody | All staged materials and packaging | External gross draw G = opening + external receipts - intact unissued closing stock once across actual sublocations. G includes real receipt waste and positive U/X usable exits. Match every measured source issue to its actual downstream internal feed. No later external repurchase, inferred residual issue or duplicate closing-stock subtraction. |  |
| boundary_packaging | All four nodes | Packaging remaining with materials follows its measured source issue/feed. Count actual unpacking at its real node; supplier packaging coverage carries upstream burden once. Required retained shingle release film is not assumed loose waste. | gaf-three-tab-route |
| boundary_assembly_handoffs | underlay_edges; shingle_details; finish_accept | Release the underlaid edge-detailed surface to shingling and the installed detailed covering to finishing using matched actual surface/state/custody records and component manifests. These internal interfaces are not additional final services or fixed unit quantities. | gaf-three-tab-route |
| boundary_finishing | finish_accept | Start finishing from the installed detailed roof. Apply only actual specified accessory finish/cleanup, direct fresh water and owned support services. Catalogue appearance preferences alone do not require paint. Keep residues, unused exits and species releases distinct until the completed accepted output is recorded. | gaf-three-tab-route |
| boundary_gate | accepted_roof_service | Acceptance requires the actual declared seal, drainage, junction and owned ventilation conditions. Record waiting/weather and actual protection loads. Do not infer instant sealing, a fixed curing time or invented heating. All attributable corrections and services through this gate remain in the lot. | gaf-three-tab-route |
| boundary_period_assets | Each node and actual reporting period | Enumerate receipt, installation, waiting/protection, correction, stock/WIP closure and acceptance periods. Link assets, inputs, transfers and disposition to periods; identify all actual shared power/access consumers, contract/meter boundaries and reviewed period-specific assignment decisions. No universal lifetime or annual period is assumed. |  |
| boundary_water_species | Actual operation and destination | Fresh supplied water belongs only to finish_accept for this route. Extra water-using operations require explicit semantic scope/card review. Measure formulation/received water and exclusive fates at the actual node. Identify actual species and receiving medium for direct releases; mass differences remain gaps. |  |
| boundary_outside | Excluded work and phases | Exclude delivered accepted framing/deck production, old-roof tear-off/overlay, hot-bitumen/torch/liquid-membrane systems and future use/maintenance/end-of-life; disclose external providers and interfaces rather than concealing actual contractor work. | gaf-three-tab-route |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Receipt protection and handling packaging (`receive_packaging`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Packaging and receipt protection actually entering with the roofing materials, resolved by composition and reusable status. Retain the supplier dataset packaging boundary so upstream production is represented once. Packaging remaining on issued stock follows a measured issue/feed link to the unpacking node.

- Collection subject: Receipt protection and handling packaging
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_packaging/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Unverified optional screening aid: Receipt protection and handling packaging — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for receipt protection and handling packaging. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Attributable access, shared plant and support service for survey accepted deck and receive roofing components (`survey_receive_access_service`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Actual contracted availability/use of access, lifting, scaffold, extraction or protection service attributable to confirm timber-deck release and receive roofing materials. Retain provider, asset, billed basis and owned idle/rework periods. Human working hours and an assumed eight-hour shift do not establish a service exchange.

- Collection subject: Attributable access, shared plant and support service for survey accepted deck and receive roofing components
- Flow property / unit: Duration / h
- Amount rule: actual_survey_receive_access_service/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Unverified optional screening aid: Attributable access, shared plant and support service for survey accepted deck and receive roofing components — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: h
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for attributable access, shared plant and support service for survey accepted deck and receive roofing components. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: External receipt of selected roof underlay and leak-barrier materials (`receive_underlay`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Project-selected underlay and leak-barrier layers, separated by actual felt, polymer or bituminous formulation and installed role. Include real overlap and cut quantities and any removed liner; determine required layers from the installed product instructions and roof design. This card alone owns the external gross draw of this staged component, including subsequent real receipt waste and usable exits. Deduct only intact unissued closing stock held in the receipt ledger, once across all custody sublocations.

- Collection subject: External receipt of selected roof underlay and leak-barrier materials
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_underlay/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: External receipt of selected roof underlay and leak-barrier materials — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for external receipt of selected roof underlay and leak-barrier materials. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: External receipt of actual eave and rake drip-edge metal components (`receive_edge_metal`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Eave and rake drip-edge profiles in their delivered formed state, with the actual metal, coating and dimensions. Measure cut lengths and remnants; use the same profile and state for a length-to-mass bridge. This card alone owns the external gross draw of this staged component, including subsequent real receipt waste and usable exits. Deduct only intact unissued closing stock held in the receipt ledger, once across all custody sublocations.

- Collection subject: External receipt of actual eave and rake drip-edge metal components
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_edge_metal/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: External receipt of actual eave and rake drip-edge metal components — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for external receipt of actual eave and rake drip-edge metal components. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: External receipt of underlay/edge fasteners and sealing consumables (`receive_underlay_fixings`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Fasteners and compatible tapes, adhesives or seal consumables actually used for underlay and edge work. Separate different materials and formulations; a fixing schedule is acceptance evidence rather than measured consumption. This card alone owns the external gross draw of this staged component, including subsequent real receipt waste and usable exits. Deduct only intact unissued closing stock held in the receipt ledger, once across all custody sublocations.

- Collection subject: External receipt of underlay/edge fasteners and sealing consumables
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_underlay_fixings/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: External receipt of underlay/edge fasteners and sealing consumables — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for external receipt of underlay/edge fasteners and sealing consumables. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: External receipt of selected starter and hip/ridge cap shingles (`receive_starter_cap_shingles`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Separately acquired starter and hip/ridge covering components where actually specified and purchased. When caps or starters are cut from field-shingle stock, record that transformation and its cuts against field stock; do not add a second purchased component quantity. This card alone owns the external gross draw of this staged component, including subsequent real receipt waste and usable exits. Deduct only intact unissued closing stock held in the receipt ledger, once across all custody sublocations.

- Collection subject: External receipt of selected starter and hip/ridge cap shingles
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_starter_cap_shingles/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`; `gaf-fiberglass-physical-state`
- Unverified optional screening aid: External receipt of selected starter and hip/ridge cap shingles — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for external receipt of selected starter and hip/ridge cap shingles. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: External receipt of junction flashing and construction-owned ventilation components (`receive_flashing_vent_components`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Actually installed valley, wall, chimney, penetration and junction flashing, boots, closures, securing parts and installation-owned ventilation accessories, separated by component and material. Delivered accepted chimney, counterflashing or structural cricket interfaces require a named external owner; new work performed here remains inside the reassessed scope. This card alone owns the external gross draw of this staged component, including subsequent real receipt waste and usable exits. Deduct only intact unissued closing stock held in the receipt ledger, once across all custody sublocations.

- Collection subject: External receipt of junction flashing and construction-owned ventilation components
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_flashing_vent_components/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: External receipt of junction flashing and construction-owned ventilation components — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for external receipt of junction flashing and construction-owned ventilation components. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: External receipt of actual asphalt plastic cement and compatible sealants (`receive_asphalt_cement`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Asphalt plastic cement and other compatible sealing formulations only where the actual instructions, design and observed conditions require their application. Preserve the formulation and as-supplied state, water/solvent content, application records and residues; do not assume hot bitumen or forced heating. This card alone owns the external gross draw of this staged component, including subsequent real receipt waste and usable exits. Deduct only intact unissued closing stock held in the receipt ledger, once across all custody sublocations.

- Collection subject: External receipt of actual asphalt plastic cement and compatible sealants
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_asphalt_cement/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: External receipt of actual asphalt plastic cement and compatible sealants — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for external receipt of actual asphalt plastic cement and compatible sealants. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: External receipt of actual specified roof-accessory coating/cleaning materials (`receive_accessory_finish`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Specified and actually applied accessory coating, touch-up or cleaning formulations, separated by supplier product, state and composition. Appearance recommendations alone do not establish an operation. Keep coatings and cleaners separate from roofing sealants when their role or fate differs. This card alone owns the external gross draw of this staged component, including subsequent real receipt waste and usable exits. Deduct only intact unissued closing stock held in the receipt ledger, once across all custody sublocations.

- Collection subject: External receipt of actual specified roof-accessory coating/cleaning materials
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_accessory_finish/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: External receipt of actual specified roof-accessory coating/cleaning materials — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for external receipt of actual specified roof-accessory coating/cleaning materials. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Usable receipt material return or transfer (`receive_unused_return`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Usable components or packaging physically leaving the receipt custodian by return or external transfer. Resolve original grade and condition and distinguish these positive exits from unissued intact closing stock, receipt waste and internal issues.

- Collection subject: Usable receipt material return or transfer
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_unused_return/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Unverified optional screening aid: Usable receipt material return or transfer — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for usable receipt material return or transfer. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Actual material handoff to underlay and edge installation (`issue_materials_underlay_edges`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Conditional actual material handoff from survey_receive to underlay_edges, expanding into zero, one or multiple concrete product exchanges by actual material/SKU, current state, transfer event and independently verified concrete flow UUID. Each concrete exchange uses its own measured kg numerator/A; never assign a fictitious fixed product identity to a mixed-material total. Component ledger keys issue_underlay, issue_edge_metal, issue_underlay_fixings remain separately measured in the collection protocol and calculation rules and match each recipient material input, state and custody event. External acquisition is recorded once at receiving; packaging, waste and usable boundary returns are excluded from these handoff quantities.

- Collection subject: Actual material handoff to underlay and edge installation
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_materials_underlay_edges/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: Actual material handoff to underlay and edge installation — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: 0..500 kg/m2 is an independently chosen provisional reasoned screen for each concrete material/state handoff exchange, not a sum-material recipe, default consumption or factual limit. Actual quantities come from matching material transfer records; only evidenced nonoccurrence permits zero, while unknown is not zero. Investigate exceedance and revise from independent evidence without clipping measured values.

#### Collection requirement: Actual material handoff to shingle and detail installation (`issue_materials_shingle_details`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Conditional actual material handoff from survey_receive to shingle_details, expanding into zero, one or multiple concrete product exchanges by actual material/SKU, current state, transfer event and independently verified concrete flow UUID. Each concrete exchange uses its own measured kg numerator/A; never assign a fictitious fixed product identity to a mixed-material total. Component ledger keys issue_field_shingles, issue_starter_cap_shingles, issue_roof_nails, issue_flashing_vent_components, issue_asphalt_cement remain separately measured in the collection protocol and calculation rules and match each recipient material input, state and custody event. External acquisition is recorded once at receiving; packaging, waste and usable boundary returns are excluded from these handoff quantities.

- Collection subject: Actual material handoff to shingle and detail installation
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_materials_shingle_details/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`; `gaf-fiberglass-physical-state`
- Unverified optional screening aid: Actual material handoff to shingle and detail installation — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: 0..500 kg/m2 is an independently chosen provisional reasoned screen for each concrete material/state handoff exchange, not a sum-material recipe, default consumption or factual limit. Actual quantities come from matching material transfer records; only evidenced nonoccurrence permits zero, while unknown is not zero. Investigate exceedance and revise from independent evidence without clipping measured values.

#### Collection requirement: Actual lot-issued actual specified roof-accessory coating/cleaning materials to finish_accept (`issue_accessory_finish`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Specified and actually applied accessory coating, touch-up or cleaning formulations, separated by supplier product, state and composition. Appearance recommendations alone do not establish an operation. Keep coatings and cleaners separate from roofing sealants when their role or fate differs. This is a positive measured issue by the receipt custodian to the named installation node. Match actual material, state, event and kg to its internal receiving card; it creates no second acquisition.

- Collection subject: Actual lot-issued actual specified roof-accessory coating/cleaning materials to finish_accept
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_accessory_finish/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: Actual lot-issued actual specified roof-accessory coating/cleaning materials to finish_accept — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual lot-issued actual specified roof-accessory coating/cleaning materials to finish_accept. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Packaging remaining with material issued to underlay_edges (`issue_packaging_underlay_edges`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Packaging physically accompanying a material issue to underlay_edges, separated by composition and reusable status with the same custody event. Retain actual kg and supplier packaging-boundary evidence. Packaging already discarded or returned at receipt cannot also travel in this handoff.

- Collection subject: Packaging remaining with material issued to underlay_edges
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_packaging_underlay_edges/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Unverified optional screening aid: Packaging remaining with material issued to underlay_edges — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for packaging remaining with material issued to underlay_edges. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Packaging remaining with material issued to shingle_details (`issue_packaging_shingle_details`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Packaging physically accompanying a material issue to shingle_details, separated by composition and reusable status with the same custody event. Retain actual kg and supplier packaging-boundary evidence. Packaging already discarded or returned at receipt cannot also travel in this handoff.

- Collection subject: Packaging remaining with material issued to shingle_details
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_packaging_shingle_details/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Unverified optional screening aid: Packaging remaining with material issued to shingle_details — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for packaging remaining with material issued to shingle_details. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Packaging remaining with material issued to finish_accept (`issue_packaging_finish_accept`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Packaging physically accompanying a material issue to finish_accept, separated by composition and reusable status with the same custody event. Retain actual kg and supplier packaging-boundary evidence. Packaging already discarded or returned at receipt cannot also travel in this handoff.

- Collection subject: Packaging remaining with material issued to finish_accept
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_packaging_finish_accept/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Unverified optional screening aid: Packaging remaining with material issued to finish_accept — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for packaging remaining with material issued to finish_accept. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Roofing components discarded at receipt (`receive_reject`)

Process / prospective direction / type: `survey_receive` / `outputs` / `waste`.

Material discarded by the receipt node because it is damaged or otherwise refused, with actual identity, condition and waste custodian. Usable returns are separate product exits; original upstream material burdens are retained for receipt waste.

- Collection subject: Roofing components discarded at receipt
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_reject/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Unverified optional screening aid: Roofing components discarded at receipt — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for roofing components discarded at receipt. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Receipt packaging waste (`receive_packaging_waste`)

Process / prospective direction / type: `survey_receive` / `outputs` / `waste`.

Packaging discarded during receipt only. Do not count packaging still accompanying an issued material here. Shingle release film remains on the shingle when its actual instructions require that state and is not invented as loose packaging waste.

- Collection subject: Receipt packaging waste
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_packaging_waste/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Unverified optional screening aid: Receipt packaging waste — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for receipt packaging waste. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Selected roof underlay and leak-barrier materials (`underlay`)

Process / prospective direction / type: `underlay_edges` / `inputs` / `product`.

Project-selected underlay and leak-barrier layers, separated by actual felt, polymer or bituminous formulation and installed role. Include real overlap and cut quantities and any removed liner; determine required layers from the installed product instructions and roof design. This is the measured internal material receipt from issue_materials_underlay_edges (component ledger issue_underlay); upstream acquisition belongs to survey_receive only.

- Collection subject: Selected roof underlay and leak-barrier materials
- Flow property / unit: Mass / kg
- Amount rule: actual_underlay/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_underlay_edges`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: Selected roof underlay and leak-barrier materials — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for selected roof underlay and leak-barrier materials. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Actual eave and rake drip-edge metal components (`edge_metal`)

Process / prospective direction / type: `underlay_edges` / `inputs` / `product`.

Eave and rake drip-edge profiles in their delivered formed state, with the actual metal, coating and dimensions. Measure cut lengths and remnants; use the same profile and state for a length-to-mass bridge. This is the measured internal material receipt from issue_materials_underlay_edges (component ledger issue_edge_metal); upstream acquisition belongs to survey_receive only.

- Collection subject: Actual eave and rake drip-edge metal components
- Flow property / unit: Mass / kg
- Amount rule: actual_edge_metal/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_underlay_edges`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: Actual eave and rake drip-edge metal components — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual eave and rake drip-edge metal components. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Underlay/edge fasteners and sealing consumables (`underlay_fixings`)

Process / prospective direction / type: `underlay_edges` / `inputs` / `product`.

Fasteners and compatible tapes, adhesives or seal consumables actually used for underlay and edge work. Separate different materials and formulations; a fixing schedule is acceptance evidence rather than measured consumption. This is the measured internal material receipt from issue_materials_underlay_edges (component ledger issue_underlay_fixings); upstream acquisition belongs to survey_receive only.

- Collection subject: Underlay/edge fasteners and sealing consumables
- Flow property / unit: Mass / kg
- Amount rule: actual_underlay_fixings/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_underlay_edges`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: Underlay/edge fasteners and sealing consumables — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for underlay/edge fasteners and sealing consumables. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Attributable access, shared plant and support service for install underlays, leak barriers and edge drainage details (`underlay_edges_access_service`)

Process / prospective direction / type: `underlay_edges` / `inputs` / `product`.

Actual contracted availability/use of access, lifting, scaffold, extraction or protection service attributable to install specified underlay, leak barriers and drip edges. Retain provider, asset, billed basis and owned idle/rework periods. Human working hours and an assumed eight-hour shift do not establish a service exchange.

- Collection subject: Attributable access, shared plant and support service for install underlays, leak barriers and edge drainage details
- Flow property / unit: Duration / h
- Amount rule: actual_underlay_edges_access_service/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_underlay_edges`
- Unverified optional screening aid: Attributable access, shared plant and support service for install underlays, leak barriers and edge drainage details — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: h
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for attributable access, shared plant and support service for install underlays, leak barriers and edge drainage details. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Received packaging accompanying materials at underlay_edges (`underlay_edges_packaging_feed`)

Process / prospective direction / type: `underlay_edges` / `inputs` / `product`.

Actual packaging received with issued materials from issue_packaging_underlay_edges, identified by its source event, composition, current state and kg. Its later unpacking waste, usable return, real reuse transfer or closing work in progress is owned by underlay_edges. No new packaging acquisition or repeated receipt waste is created.

- Collection subject: Received packaging accompanying materials at underlay_edges
- Flow property / unit: Mass / kg
- Amount rule: actual_underlay_edges_packaging_feed/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_underlay_edges`
- Unverified optional screening aid: Received packaging accompanying materials at underlay_edges — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for received packaging accompanying materials at underlay_edges. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Underlaid and edge-detailed roof handoff (`underlay_ready_roof`)

Process / prospective direction / type: `underlay_edges` / `outputs` / `product`.

The actual deck surface after the specified underlay, leak-barrier and edge details have passed their intermediate release. Preserve surface IDs and the installed component schedule for the handoff to shingling; this is not a second final roofing service.

- Collection subject: Underlaid and edge-detailed roof handoff
- Flow property / unit: Area / m2
- Amount rule: actual_underlay_ready_roof/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_underlay_edges`
- Unverified optional screening aid: Underlaid and edge-detailed roof handoff — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m2
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for underlaid and edge-detailed roof handoff. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Review measured geometry and matched state; laps and repeated passes cannot enlarge final output.

#### Collection requirement: Usable underlay, metal and fixing material return (`underlay_unused_return`)

Process / prospective direction / type: `underlay_edges` / `outputs` / `product`.

Usable issued underlay, metal, fixings, seal consumables or packaging leaving the underlay custodian. Record the positive unused return or transfer by actual original state; distinguish retention, waste and closing work in progress.

- Collection subject: Usable underlay, metal and fixing material return
- Flow property / unit: Mass / kg
- Amount rule: actual_underlay_unused_return/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_underlay_edges`
- Unverified optional screening aid: Usable underlay, metal and fixing material return — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for usable underlay, metal and fixing material return. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Underlay, edge-metal, liner and fastener waste (`underlay_waste`)

Process / prospective direction / type: `underlay_edges` / `outputs` / `waste`.

Composition-resolved underlay cuts, removed actual liners, edge-metal offcuts, fixing residues and packaging discarded at the underlay node. Include captured particles in waste rather than also reporting the same mass as an environmental release.

- Collection subject: Underlay, edge-metal, liner and fastener waste
- Flow property / unit: Mass / kg
- Amount rule: actual_underlay_waste/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_underlay_edges`
- Unverified optional screening aid: Underlay, edge-metal, liner and fastener waste — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for underlay, edge-metal, liner and fastener waste. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Actual underlay cutting/seal application direct releases (`underlay_direct_release`)

Process / prospective direction / type: `underlay_edges` / `outputs` / `elementary`.

Conditional direct releases from actual underlay cutting, fastening or sealing. Identify the measured substance or particle composition/size, actual direction and receiving medium; captured residues belong to waste and unexplained mass differences are gaps.

- Collection subject: Actual underlay cutting/seal application direct releases
- Flow property / unit: Mass / kg
- Amount rule: actual_underlay_direct_release/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_underlay_edges`
- Unverified optional screening aid: Actual underlay cutting/seal application direct releases — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual underlay cutting/seal application direct releases. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Selected starter and hip/ridge cap shingles (`starter_cap_shingles`)

Process / prospective direction / type: `shingle_details` / `inputs` / `product`.

Separately acquired starter and hip/ridge covering components where actually specified and purchased. When caps or starters are cut from field-shingle stock, record that transformation and its cuts against field stock; do not add a second purchased component quantity. This is the measured internal material receipt from issue_materials_shingle_details (component ledger issue_starter_cap_shingles); upstream acquisition belongs to survey_receive only.

- Collection subject: Selected starter and hip/ridge cap shingles
- Flow property / unit: Mass / kg
- Amount rule: actual_starter_cap_shingles/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Sources: `gaf-three-tab-route`; `gaf-fiberglass-physical-state`
- Unverified optional screening aid: Selected starter and hip/ridge cap shingles — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for selected starter and hip/ridge cap shingles. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Junction flashing and construction-owned ventilation components (`flashing_vent_components`)

Process / prospective direction / type: `shingle_details` / `inputs` / `product`.

Actually installed valley, wall, chimney, penetration and junction flashing, boots, closures, securing parts and installation-owned ventilation accessories, separated by component and material. Delivered accepted chimney, counterflashing or structural cricket interfaces require a named external owner; new work performed here remains inside the reassessed scope. This is the measured internal material receipt from issue_materials_shingle_details (component ledger issue_flashing_vent_components); upstream acquisition belongs to survey_receive only.

- Collection subject: Junction flashing and construction-owned ventilation components
- Flow property / unit: Mass / kg
- Amount rule: actual_flashing_vent_components/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: Junction flashing and construction-owned ventilation components — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for junction flashing and construction-owned ventilation components. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Actual asphalt plastic cement and compatible sealants (`asphalt_cement`)

Process / prospective direction / type: `shingle_details` / `inputs` / `product`.

Asphalt plastic cement and other compatible sealing formulations only where the actual instructions, design and observed conditions require their application. Preserve the formulation and as-supplied state, water/solvent content, application records and residues; do not assume hot bitumen or forced heating. This is the measured internal material receipt from issue_materials_shingle_details (component ledger issue_asphalt_cement); upstream acquisition belongs to survey_receive only.

- Collection subject: Actual asphalt plastic cement and compatible sealants
- Flow property / unit: Mass / kg
- Amount rule: actual_asphalt_cement/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: Actual asphalt plastic cement and compatible sealants — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual asphalt plastic cement and compatible sealants. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Attributable access, shared plant and support service for lay field/starter/caps, flash junctions and integrate owned vents (`shingle_details_access_service`)

Process / prospective direction / type: `shingle_details` / `inputs` / `product`.

Actual contracted availability/use of access, lifting, scaffold, extraction or protection service attributable to nail three-tab covering and complete junctions and owned vents. Retain provider, asset, billed basis and owned idle/rework periods. Human working hours and an assumed eight-hour shift do not establish a service exchange.

- Collection subject: Attributable access, shared plant and support service for lay field/starter/caps, flash junctions and integrate owned vents
- Flow property / unit: Duration / h
- Amount rule: actual_shingle_details_access_service/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Unverified optional screening aid: Attributable access, shared plant and support service for lay field/starter/caps, flash junctions and integrate owned vents — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: h
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for attributable access, shared plant and support service for lay field/starter/caps, flash junctions and integrate owned vents. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Received packaging accompanying materials at shingle_details (`shingle_details_packaging_feed`)

Process / prospective direction / type: `shingle_details` / `inputs` / `product`.

Actual packaging received with issued materials from issue_packaging_shingle_details, identified by its source event, composition, current state and kg. Its later unpacking waste, usable return, real reuse transfer or closing work in progress is owned by shingle_details. No new packaging acquisition or repeated receipt waste is created.

- Collection subject: Received packaging accompanying materials at shingle_details
- Flow property / unit: Mass / kg
- Amount rule: actual_shingle_details_packaging_feed/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Unverified optional screening aid: Received packaging accompanying materials at shingle_details — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for received packaging accompanying materials at shingle_details. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Usable shingling components or cement return (`shingle_unused_return`)

Process / prospective direction / type: `shingle_details` / `outputs` / `product`.

Usable issued shingles, separately acquired caps, nails, flashing/vent components, seal formulations or packaging leaving this node in their recorded condition. Cut or contaminated material is not automatically original unused stock; route actual rework and waste explicitly.

- Collection subject: Usable shingling components or cement return
- Flow property / unit: Mass / kg
- Amount rule: actual_shingle_unused_return/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Unverified optional screening aid: Usable shingling components or cement return — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for usable shingling components or cement return. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Shingle, cap, metal, fixing and application waste (`shingle_waste`)

Process / prospective direction / type: `shingle_details` / `outputs` / `waste`.

Actual shingle and cap cuts, removed rejected components, metal/fixing/application residues, captured cutting dust and packaging discarded during shingling. Separate materials and wet/dry state and retain original manufacturing and rework burdens.

- Collection subject: Shingle, cap, metal, fixing and application waste
- Flow property / unit: Mass / kg
- Amount rule: actual_shingle_waste/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Unverified optional screening aid: Shingle, cap, metal, fixing and application waste — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for shingle, cap, metal, fixing and application waste. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Actual shingle cutting or cement application releases (`shingle_direct_release`)

Process / prospective direction / type: `shingle_details` / `outputs` / `elementary`.

Actual uncaptured releases during shingle cutting or cement/sealant application, resolved to substance or composition/particle size and medium. Cutting may create particles or fumes; their occurrence and quantity require records rather than a generic dust or VOC identity.

- Collection subject: Actual shingle cutting or cement application releases
- Flow property / unit: Mass / kg
- Amount rule: actual_shingle_direct_release/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Unverified optional screening aid: Actual shingle cutting or cement application releases — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual shingle cutting or cement application releases. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Installed roof received for final finishing and acceptance (`finish_roof_feed`)

Process / prospective direction / type: `finish_accept` / `inputs` / `product`.

The installed, detailed roofing surface received by the acceptance node with matched surface and transfer IDs. Outstanding sealing or finishing conditions remain visible until satisfied; receipt of this area is not customer acceptance.

- Collection subject: Installed roof received for final finishing and acceptance
- Flow property / unit: Area / m2
- Amount rule: actual_finish_roof_feed/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Unverified optional screening aid: Installed roof received for final finishing and acceptance — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m2
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for installed roof received for final finishing and acceptance. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Review measured geometry and matched state; laps and repeated passes cannot enlarge final output.

#### Collection requirement: Actual specified roof-accessory coating/cleaning materials (`accessory_finish`)

Process / prospective direction / type: `finish_accept` / `inputs` / `product`.

Specified and actually applied accessory coating, touch-up or cleaning formulations, separated by supplier product, state and composition. Appearance recommendations alone do not establish an operation. Keep coatings and cleaners separate from roofing sealants when their role or fate differs. This is the measured internal material receipt from issue_accessory_finish; upstream acquisition belongs to survey_receive only.

- Collection subject: Actual specified roof-accessory coating/cleaning materials
- Flow property / unit: Mass / kg
- Amount rule: actual_accessory_finish/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Sources: `gaf-three-tab-route`
- Unverified optional screening aid: Actual specified roof-accessory coating/cleaning materials — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual specified roof-accessory coating/cleaning materials. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Attributable access, shared plant and support service for finish specified accessories, inspect sealing and accept (`finish_accept_access_service`)

Process / prospective direction / type: `finish_accept` / `inputs` / `product`.

Actual contracted availability/use of access, lifting, scaffold, extraction or protection service attributable to finish actual accessories, close seal conditions and accept roof. Retain provider, asset, billed basis and owned idle/rework periods. Human working hours and an assumed eight-hour shift do not establish a service exchange.

- Collection subject: Attributable access, shared plant and support service for finish specified accessories, inspect sealing and accept
- Flow property / unit: Duration / h
- Amount rule: actual_finish_accept_access_service/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Unverified optional screening aid: Attributable access, shared plant and support service for finish specified accessories, inspect sealing and accept — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: h
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for attributable access, shared plant and support service for finish specified accessories, inspect sealing and accept. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Received packaging accompanying materials at finish_accept (`finish_accept_packaging_feed`)

Process / prospective direction / type: `finish_accept` / `inputs` / `product`.

Actual packaging received with issued materials from issue_packaging_finish_accept, identified by its source event, composition, current state and kg. Its later unpacking waste, usable return, real reuse transfer or closing work in progress is owned by finish_accept. No new packaging acquisition or repeated receipt waste is created.

- Collection subject: Received packaging accompanying materials at finish_accept
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_accept_packaging_feed/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Unverified optional screening aid: Received packaging accompanying materials at finish_accept — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for received packaging accompanying materials at finish_accept. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Usable finish material or unused fresh-water return (`finish_unused_return`)

Process / prospective direction / type: `finish_accept` / `outputs` / `product`.

Usable finish formulations, packaging or supplied fresh water returned or externally transferred by this custodian, resolved by actual composition and current state. Such positive unused exits are distinct from intact unissued closing stock, waste and processed work in progress.

- Collection subject: Usable finish material or unused fresh-water return
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_unused_return/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Unverified optional screening aid: Usable finish material or unused fresh-water return — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for usable finish material or unused fresh-water return. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Final roof cleanup or removed rejected-component waste (`finish_waste`)

Process / prospective direction / type: `finish_accept` / `outputs` / `waste`.

Actual final cleanup waste and rejected components removed at this node, including node-unpacked packaging and captured coating/cleaning residues. Preserve solid waste moisture so its water content is not also counted as wastewater or vapour.

- Collection subject: Final roof cleanup or removed rejected-component waste
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_waste/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Unverified optional screening aid: Final roof cleanup or removed rejected-component waste — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for final roof cleanup or removed rejected-component waste. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Collection requirement: Other actual final coating or cleanup releases (`finish_other_release`)

Process / prospective direction / type: `finish_accept` / `outputs` / `elementary`.

Conditional final-node environmental releases other than separately accounted H2O vapour. Require actual substance/formulation or particle basis, receiving medium and uncaptured quantity. A collected liquid residue remains a waste transfer; no generic VOC or residual-emission substitution.

- Collection subject: Other actual final coating or cleanup releases
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_other_release/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Unverified optional screening aid: Other actual final coating or cleanup releases — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for other actual final coating or cleanup releases. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| survey_receive | Confirm timber-deck release and receive roofing materials | required | For this installation route; each optional material/finish/support occurrence follows actual records and evidenced absence. | Inspect the actual dry timber deck, fixing compatibility, slopes, penetrations, roof geometry and externally accepted junction interfaces against the project design and installed product instructions. Identify the responsible party for every interface. Reconcile each delivered component and packaging ledger with calibrated mass measurements or exact same-ID conversion evidence. Sign each issue and physical deck handoff; receipt rejects and usable exits remain separately evidenced. | Measured actual state/quantity; normalize attributable physical numerators by final A once. |
| underlay_edges | Install specified underlay, leak barriers and drip edges | required | For this installation route; each optional material/finish/support occurrence follows actual records and evidenced absence. | Match the physical deck release and each material issue to actual receipt. Record the selected layer schedule, leak-barrier locations, overlaps, edge order and fixing/sealing operations prescribed for this roof. Measure actual installed quantities, cuts, removed liners and packaging at this node. Inspect concealed interfaces before the underlaid surface is handed to shingling; record and retain every correction. | Measured actual state/quantity; normalize attributable physical numerators by final A once. |
| shingle_details | Nail three-tab covering and complete junctions and owned vents | required | For this installation route; each optional material/finish/support occurrence follows actual records and evidenced absence. | Match the underlaid surface and component issues, then record field layout, cuts, starter/cap sourcing, actual nail specification and application, valleys, wall/chimney/penetration flashings and owned ventilation accessories. Record cement/hand-seal application when required. Keep cut-from-field caps in the original field-stock ledger. Collect captured waste separately from actual uncaptured species releases and retain each rework event. | Measured actual state/quantity; normalize attributable physical numerators by final A once. |
| finish_accept | Finish actual accessories, close seal conditions and accept roof | required | For this installation route; each optional material/finish/support occurrence follows actual records and evidenced absence. | Match the installed surface, finish-material issues and accompanying packaging. Record only actually specified coating or cleanup operations and direct fresh-water supply. Inspect required seal state, drainage continuity, junction completion and owned ventilation interfaces after any actual waiting/protection interval. Measure every waste, unused exit and water fate and sign final acceptance only when the declared gate is satisfied. | Measured actual state/quantity; normalize attributable physical numerators by final A once. |

At any node, record a defect against its producing event and state. Correcting an intact installation stays in that node with a new linked rework event; an actual return to an earlier node needs matching directed custody and state records without a new purchase. Removed material is routed to measured usable exit, documented recovery/downgrade or waste according to its actual condition. Unaccepted installed work and processed WIP remain exclusive states until corrected, removed or finally accepted. These loops never create another accepted-area denominator.

### Process: Confirm timber-deck release and receive roofing materials (`survey_receive`)

Inspect the actual dry timber deck, fixing compatibility, slopes, penetrations, roof geometry and externally accepted junction interfaces against the project design and installed product instructions. Identify the responsible party for every interface. Reconcile each delivered component and packaging ledger with calibrated mass measurements or exact same-ID conversion evidence. Sign each issue and physical deck handoff; receipt rejects and usable exits remain separately evidenced.

#### Inputs

##### Product flows

###### Attributable electricity for survey accepted deck and receive roofing components (`survey_receive_electricity`)

Electricity actually attributable to confirm timber-deck release and receive roofing materials, including owned tool, lighting, extraction, protection and rework loads. Retain actual supply/voltage and meter topology; direct assignment and residual allocation must together reconcile the metered service once.

- Selected flow: Attributable electricity for survey accepted deck and receive roofing components
- Flow property / unit: Energy / kWh
- Amount rule: actual_survey_receive_electricity/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Range: Attributable electricity for survey accepted deck and receive roofing components — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for attributable electricity for survey accepted deck and receive roofing components. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

###### External receipt of fiberglass-reinforced three-tab asphalt shingles (`receive_field_shingles`)

Finished fiberglass-reinforced, asphalt-bound three-tab shingles, identified by actual supplier SKU and lot with their mineral surfacing and delivered composite state. Raw glass fibre, raw asphalt and roll or liquid membranes do not represent this component. This card alone owns the external gross draw of this staged component, including subsequent real receipt waste and usable exits. Deduct only intact unissued closing stock held in the receipt ledger, once across all custody sublocations.

- Selected flow: External receipt of fiberglass-reinforced three-tab asphalt shingles
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_field_shingles/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`; `gaf-fiberglass-physical-state`
- Range: External receipt of fiberglass-reinforced three-tab asphalt shingles — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for external receipt of fiberglass-reinforced three-tab asphalt shingles. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

###### External receipt of actual roofing nails (`receive_roof_nails`)

Roofing nails in the actual material, finish and dimensions accepted for the installed shingle product and deck. Count-to-mass conversion requires measured or supplier-confirmed mass for that exact fastener; required nail pattern alone does not measure actual use. This card alone owns the external gross draw of this staged component, including subsequent real receipt waste and usable exits. Deduct only intact unissued closing stock held in the receipt ledger, once across all custody sublocations.

- Selected flow: External receipt of actual roofing nails
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_roof_nails/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `gaf-three-tab-route`
- Range: External receipt of actual roofing nails — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for external receipt of actual roofing nails. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Outputs

##### Product flows

##### Waste flows

### Process: Install specified underlay, leak barriers and drip edges (`underlay_edges`)

Match the physical deck release and each material issue to actual receipt. Record the selected layer schedule, leak-barrier locations, overlaps, edge order and fixing/sealing operations prescribed for this roof. Measure actual installed quantities, cuts, removed liners and packaging at this node. Inspect concealed interfaces before the underlaid surface is handed to shingling; record and retain every correction.

#### Inputs

##### Product flows

###### Attributable electricity for install underlays, leak barriers and edge drainage details (`underlay_edges_electricity`)

Electricity actually attributable to install specified underlay, leak barriers and drip edges, including owned tool, lighting, extraction, protection and rework loads. Retain actual supply/voltage and meter topology; direct assignment and residual allocation must together reconcile the metered service once.

- Selected flow: Attributable electricity for install underlays, leak barriers and edge drainage details
- Flow property / unit: Energy / kWh
- Amount rule: actual_underlay_edges_electricity/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_underlay_edges`
- Range: Attributable electricity for install underlays, leak barriers and edge drainage details — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for attributable electricity for install underlays, leak barriers and edge drainage details. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Nail three-tab covering and complete junctions and owned vents (`shingle_details`)

Match the underlaid surface and component issues, then record field layout, cuts, starter/cap sourcing, actual nail specification and application, valleys, wall/chimney/penetration flashings and owned ventilation accessories. Record cement/hand-seal application when required. Keep cut-from-field caps in the original field-stock ledger. Collect captured waste separately from actual uncaptured species releases and retain each rework event.

#### Inputs

##### Product flows

###### Actual underlaid roof received for shingling (`roof_feed`)

The same identified underlaid, edge-detailed surface received from the underlay handoff. Compare its measured geometry, state and custody event with the sending record. Its area is measured independently of final accepted area and must not be assigned an automatic normalized one.

- Selected flow: Actual underlaid roof received for shingling
- Flow property / unit: Area / m2
- Amount rule: actual_roof_feed/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Range: Actual underlaid roof received for shingling — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m2
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual underlaid roof received for shingling. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Review measured geometry and matched state; laps and repeated passes cannot enlarge final output.

###### Fiberglass-reinforced three-tab asphalt shingles (`field_shingles`)

Finished fiberglass-reinforced, asphalt-bound three-tab shingles, identified by actual supplier SKU and lot with their mineral surfacing and delivered composite state. Raw glass fibre, raw asphalt and roll or liquid membranes do not represent this component. This is the measured internal material receipt from issue_materials_shingle_details (component ledger issue_field_shingles); upstream acquisition belongs to survey_receive only.

- Selected flow: Fiberglass-reinforced three-tab asphalt shingles
- Flow property / unit: Mass / kg
- Amount rule: actual_field_shingles/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Sources: `gaf-three-tab-route`; `gaf-fiberglass-physical-state`
- Range: Fiberglass-reinforced three-tab asphalt shingles — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for fiberglass-reinforced three-tab asphalt shingles. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

###### Actual roofing nails (`roof_nails`)

Roofing nails in the actual material, finish and dimensions accepted for the installed shingle product and deck. Count-to-mass conversion requires measured or supplier-confirmed mass for that exact fastener; required nail pattern alone does not measure actual use. This is the measured internal material receipt from issue_materials_shingle_details (component ledger issue_roof_nails); upstream acquisition belongs to survey_receive only.

- Selected flow: Actual roofing nails
- Flow property / unit: Mass / kg
- Amount rule: actual_roof_nails/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Sources: `gaf-three-tab-route`
- Range: Actual roofing nails — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual roofing nails. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

###### Attributable electricity for lay field/starter/caps, flash junctions and integrate owned vents (`shingle_details_electricity`)

Electricity actually attributable to nail three-tab covering and complete junctions and owned vents, including owned tool, lighting, extraction, protection and rework loads. Retain actual supply/voltage and meter topology; direct assignment and residual allocation must together reconcile the metered service once.

- Selected flow: Attributable electricity for lay field/starter/caps, flash junctions and integrate owned vents
- Flow property / unit: Energy / kWh
- Amount rule: actual_shingle_details_electricity/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Range: Attributable electricity for lay field/starter/caps, flash junctions and integrate owned vents — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for attributable electricity for lay field/starter/caps, flash junctions and integrate owned vents. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Outputs

##### Product flows

###### Installed detailed shingle roof for finishing/acceptance (`installed_roof`)

The identified shingle-covered surface after field courses, starter and hip/ridge details, actual junction flashings, required applied seals and owned ventilation integration have been installed. Handoff to finish/acceptance retains outstanding conditions and the installed component schedule.

- Selected flow: Installed detailed shingle roof for finishing/acceptance
- Flow property / unit: Area / m2
- Amount rule: actual_installed_roof/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shingle_details`
- Range: Installed detailed shingle roof for finishing/acceptance — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m2
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for installed detailed shingle roof for finishing/acceptance. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Review measured geometry and matched state; laps and repeated passes cannot enlarge final output.

##### Waste flows

##### Elementary flows

### Process: Finish actual accessories, close seal conditions and accept roof (`finish_accept`)

Match the installed surface, finish-material issues and accompanying packaging. Record only actually specified coating or cleanup operations and direct fresh-water supply. Inspect required seal state, drainage continuity, junction completion and owned ventilation interfaces after any actual waiting/protection interval. Measure every waste, unused exit and water fate and sign final acceptance only when the declared gate is satisfied.

#### Inputs

##### Product flows

###### Actual final cleaning fresh water (`finish_water`)

Fresh water supplied directly for an actual finishing or cleanup operation, recorded as supplied water with its source and current state. No fresh-water purchase is assigned to earlier nodes in this route. Water inside a formulation or an incoming assembly is recorded separately.

- Selected flow: Actual final cleaning fresh water
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_water/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Range: Actual final cleaning fresh water — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual final cleaning fresh water. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

###### Attributable electricity for finish specified accessories, inspect sealing and accept (`finish_accept_electricity`)

Electricity actually attributable to finish actual accessories, close seal conditions and accept roof, including owned tool, lighting, extraction, protection and rework loads. Retain actual supply/voltage and meter topology; direct assignment and residual allocation must together reconcile the metered service once.

- Selected flow: Attributable electricity for finish specified accessories, inspect sealing and accept
- Flow property / unit: Energy / kWh
- Amount rule: actual_finish_accept_electricity/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Range: Attributable electricity for finish specified accessories, inspect sealing and accept — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for attributable electricity for finish specified accessories, inspect sealing and accept. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

#### Outputs

##### Product flows

###### Accepted three-tab shingle roof covering installation service (`accepted_roof_service`)

One finally accepted covering installation over the unique net sloped timber-deck area of the lot. All specified owned layers, nailed three-tab shingles, junction/drainage details, required seal state and ventilation interfaces have passed the recorded gate. Framing, deck manufacture and old-roof work are outside this service.

- Selected flow: Accepted three-tab shingle roof covering installation service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Range: Accepted three-tab shingle roof covering installation service — normalized reference identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)
  - Rationale: Calculated identity of the single final reference exchange: positive unique accepted A divided by that same A equals one. This is not a yield, nail-count, service-life or acceptance target.

##### Waste flows

###### Actual final cleanup wastewater to custodian (`finish_wastewater`)

Collected liquid cleanup residue handed to a sewer or other identified custodian, with the actual mass, composition and water fraction. This technosphere waste transfer is distinct from a direct release to a receiving environment.

- Selected flow: Actual final cleanup wastewater to custodian
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_wastewater/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Range: Actual final cleanup wastewater to custodian — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual final cleanup wastewater to custodian. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

##### Elementary flows

###### Actual final cleaning/coating water vapour (`finish_water_vapour`)

H2O actually released to air during the final node, supported by measurement or a validated water-only balance. Separate formulation water, received process water, retained bound/free water, waste-water pools, closing processed work in progress and other transfers. A balance gap cannot establish evaporation. The receiving medium is air unspecified and the substance is H2O. The identity denotes only this actual own-node release; it supplies neither evaporation occurrence nor an emission quantity.

- Selected flow: Actual final cleaning/coating water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_water_vapour/A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Range: Actual final cleaning/coating water vapour — provisional diagnostic screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1 m2 final accepted unique net sloped covered deck area
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Rationale: Provisional independent reasoned_estimate screen for actual final cleaning/coating water vapour. The interval accommodates an initially unknown roof geometry, actual installation/rework quantities and evidenced conditional absence; it supplies no default quantity or installation specification. Replace this broad screen with independently reviewed records for this exact role, material/state and lot. Exceedance triggers investigation; being inside it does not establish completeness.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | All nodes | Assign measured actual material, waste, power and services directly to their real node, lot and period before any shared allocation. Internal area/material/packaging transfers carry existing burdens and are not co-produced final roofing services. |  |
| allocation_unused | Original usable unused materials | Report U returns and X external usable transfers as positive exclusive physical outputs. Transfer only evidenced upstream burden of the original unused material in its actual unchanged state. Keep all receipt handling, construction, protection, service and rework with the roofing lot; do not grant avoided-production credits or subtract U/X a second time from gross inputs. Net-consumed quantity may be a diagnostic only. |  |
| allocation_rework | Rejected and corrected work | Retain the original material and all actual repeated installation/removal/cleaning/service burdens with this lot. Record producing node, defect, actual rework destination or waste/usable/recovery disposition and linked events. Unresolved rejected work is not accepted output; recovery or downgrade treatment needs its actual destination and reviewed boundary. |  |
| allocation_power | All node electricity cards and meter periods | For each meter boundary use converted actual deltas. Subtract every inside-master directly assigned consumer once to obtain residual; outside-master direct assignments stay outside that subtraction. Zero residual needs no weight. Positive residual requires a complete eligible register and evidence-backed positive weights summing to the denominator. Direct plus allocated residual must reconcile the master exactly once. Negative/unknown residual blocks attribution. |  |
| allocation_service | Shared access/lifting/scaffold/protection and periods | Identify actual provider/asset, service scope, billed quantity and period; enumerate all consuming nodes/lots/periods, direct assignments and actual owned idle. Assign direct service first, then only remaining actual billed service with a reviewed positive eligible basis. Reconcile to billed total once; no labor/default shift or lifetime proxy. |  |
| allocation_periods | Receipt through final acceptance | Keep period/phase/event links and reviewed attribution decisions for every input, shared asset, correction, waste, stock and WIP movement. Carry only unmatched physical stocks forward; do not repurchase them or attribute the same service to two periods. Final unique A is counted once after gate completion. Replacement/termination or incomplete WIP requires explicit disposition and cannot be silently annualized. |  |
| allocation_assembly_mass | Retained installed components | Use retained component mass only for closure of actual composite assembly. A compound total and its constituent subrows are exclusive aggregation views. Accepted material is not counted a second time as both retained output and customer-handover mass in addition to the area service. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Each protocol is owned by exactly one process node. The shared field names describe record grain, while every card uses that node’s actual quantity fields and evidence. Record native quantities, units and current state before conversion. Distinguish correction of a duplicate electronic entry from a separate real operation; never deduplicate real rework. Required components and gates cannot be proven absent merely because a provisional range starts at zero.

### Data Collection Protocols

Existing dry-deck observation, signed release and construction receipt are linked by the same unique surface IDs, measured area, state and responsible parties in cp_survey_receive and cp_underlay_edges. These acceptance/measurement records create no separate product exchange or second deck-production burden.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_survey_receive | survey_receive | receive_packaging; receive_reject; receive_packaging_waste; receive_unused_return; survey_receive_electricity; survey_receive_access_service; receive_underlay; issue_materials_underlay_edges; receive_edge_metal; receive_underlay_fixings; receive_field_shingles; issue_materials_shingle_details; receive_starter_cap_shingles; receive_roof_nails; receive_flashing_vent_components; receive_asphalt_cement; receive_accessory_finish; issue_accessory_finish; issue_packaging_underlay_edges; issue_packaging_shingle_details; issue_packaging_finish_accept | Timestamped physical observation, stock, custody, meter, disposition and gate records for one node | lot_id; node_id; event_id; timestamp_start; timestamp_end; material_id; state_id; custodian_from; custodian_to; surface_or_panel_id; acceptance_status; evidence_ref; period_id; phase_id; revision_event_id; superseded_record_id; actual_rework_event_id; rework_source_node; rework_destination_node; defect_state; disposition; rework_quantity; measurement_unit; component_schedule_ref; product_instructions_ref; design_revision_ref; source_boundary_ref; surface_state_manifest_ref; unique_measurement_id; directed_transfer_id; actual_absence_evidence; allocation_decision_id; allocation_consumer_register_ref; water_fate_register_ref; deck_interface_actual_quantity; deck_interface_native_unit; deck_interface_mass_or_geometry_bridge; deck_interface_actual_state; deck_interface_measured_absence_evidence; deck_interface_destination; receive_packaging_opening; receive_packaging_receipts; receive_packaging_closing_intact; receive_packaging_native_unit; receive_packaging_native_quantity; receive_packaging_actual_mass_factor; receive_packaging_factor_state_evidence; receive_reject_actual_quantity; receive_reject_native_unit; receive_reject_mass_or_geometry_bridge; receive_reject_actual_state; receive_reject_measured_absence_evidence; receive_reject_destination; receive_packaging_waste_actual_quantity; receive_packaging_waste_native_unit; receive_packaging_waste_mass_or_geometry_bridge; receive_packaging_waste_actual_state; receive_packaging_waste_measured_absence_evidence; receive_packaging_waste_destination; receive_unused_return_actual_quantity; receive_unused_return_native_unit; receive_unused_return_mass_or_geometry_bridge; receive_unused_return_actual_state; receive_unused_return_measured_absence_evidence; receive_unused_return_destination; survey_receive_electricity_meter_id; survey_receive_electricity_meter_start; survey_receive_electricity_meter_end; survey_receive_electricity_unit_factor; survey_receive_electricity_meter_parent; survey_receive_electricity_inside_master_direct_total; survey_receive_electricity_outside_master_direct_total; survey_receive_electricity_master_total; survey_receive_electricity_consumer_weight; survey_receive_electricity_all_eligible_weights; survey_receive_electricity_period; survey_receive_electricity_topology_evidence; survey_receive_access_service_asset_id; survey_receive_access_service_period_start; survey_receive_access_service_period_end; survey_receive_access_service_billed_quantity; survey_receive_access_service_actual_service_quantity; survey_receive_access_service_owned_idle; survey_receive_access_service_consumer_weight; survey_receive_access_service_all_eligible_weights; survey_receive_access_service_assignment_evidence; receive_underlay_opening; receive_underlay_external_receipts; receive_underlay_closing_intact_all_locations; receive_underlay_current_state; receive_underlay_native_unit; receive_underlay_exact_mass_bridge; receive_underlay_material_id; receive_underlay_sublocation_stock_evidence; issue_underlay_actual_quantity_kg; issue_underlay_event_id; issue_underlay_material_id; issue_underlay_state_id; issue_underlay_custodian_from; issue_underlay_custodian_to; issue_underlay_receiving_node; issue_underlay_handoff_evidence; receive_edge_metal_opening; receive_edge_metal_external_receipts; receive_edge_metal_closing_intact_all_locations; receive_edge_metal_current_state; receive_edge_metal_native_unit; receive_edge_metal_exact_mass_bridge; receive_edge_metal_material_id; receive_edge_metal_sublocation_stock_evidence; issue_edge_metal_actual_quantity_kg; issue_edge_metal_event_id; issue_edge_metal_material_id; issue_edge_metal_state_id; issue_edge_metal_custodian_from; issue_edge_metal_custodian_to; issue_edge_metal_receiving_node; issue_edge_metal_handoff_evidence; receive_underlay_fixings_opening; receive_underlay_fixings_external_receipts; receive_underlay_fixings_closing_intact_all_locations; receive_underlay_fixings_current_state; receive_underlay_fixings_native_unit; receive_underlay_fixings_exact_mass_bridge; receive_underlay_fixings_material_id; receive_underlay_fixings_sublocation_stock_evidence; issue_underlay_fixings_actual_quantity_kg; issue_underlay_fixings_event_id; issue_underlay_fixings_material_id; issue_underlay_fixings_state_id; issue_underlay_fixings_custodian_from; issue_underlay_fixings_custodian_to; issue_underlay_fixings_receiving_node; issue_underlay_fixings_handoff_evidence; receive_field_shingles_opening; receive_field_shingles_external_receipts; receive_field_shingles_closing_intact_all_locations; receive_field_shingles_current_state; receive_field_shingles_native_unit; receive_field_shingles_exact_mass_bridge; receive_field_shingles_material_id; receive_field_shingles_sublocation_stock_evidence; issue_field_shingles_actual_quantity_kg; issue_field_shingles_event_id; issue_field_shingles_material_id; issue_field_shingles_state_id; issue_field_shingles_custodian_from; issue_field_shingles_custodian_to; issue_field_shingles_receiving_node; issue_field_shingles_handoff_evidence; receive_starter_cap_shingles_opening; receive_starter_cap_shingles_external_receipts; receive_starter_cap_shingles_closing_intact_all_locations; receive_starter_cap_shingles_current_state; receive_starter_cap_shingles_native_unit; receive_starter_cap_shingles_exact_mass_bridge; receive_starter_cap_shingles_material_id; receive_starter_cap_shingles_sublocation_stock_evidence; issue_starter_cap_shingles_actual_quantity_kg; issue_starter_cap_shingles_event_id; issue_starter_cap_shingles_material_id; issue_starter_cap_shingles_state_id; issue_starter_cap_shingles_custodian_from; issue_starter_cap_shingles_custodian_to; issue_starter_cap_shingles_receiving_node; issue_starter_cap_shingles_handoff_evidence; receive_roof_nails_opening; receive_roof_nails_external_receipts; receive_roof_nails_closing_intact_all_locations; receive_roof_nails_current_state; receive_roof_nails_native_unit; receive_roof_nails_exact_mass_bridge; receive_roof_nails_material_id; receive_roof_nails_sublocation_stock_evidence; issue_roof_nails_actual_quantity_kg; issue_roof_nails_event_id; issue_roof_nails_material_id; issue_roof_nails_state_id; issue_roof_nails_custodian_from; issue_roof_nails_custodian_to; issue_roof_nails_receiving_node; issue_roof_nails_handoff_evidence; receive_flashing_vent_components_opening; receive_flashing_vent_components_external_receipts; receive_flashing_vent_components_closing_intact_all_locations; receive_flashing_vent_components_current_state; receive_flashing_vent_components_native_unit; receive_flashing_vent_components_exact_mass_bridge; receive_flashing_vent_components_material_id; receive_flashing_vent_components_sublocation_stock_evidence; issue_flashing_vent_components_actual_quantity_kg; issue_flashing_vent_components_event_id; issue_flashing_vent_components_material_id; issue_flashing_vent_components_state_id; issue_flashing_vent_components_custodian_from; issue_flashing_vent_components_custodian_to; issue_flashing_vent_components_receiving_node; issue_flashing_vent_components_handoff_evidence; receive_asphalt_cement_opening; receive_asphalt_cement_external_receipts; receive_asphalt_cement_closing_intact_all_locations; receive_asphalt_cement_current_state; receive_asphalt_cement_native_unit; receive_asphalt_cement_exact_mass_bridge; receive_asphalt_cement_material_id; receive_asphalt_cement_sublocation_stock_evidence; issue_asphalt_cement_actual_quantity_kg; issue_asphalt_cement_event_id; issue_asphalt_cement_material_id; issue_asphalt_cement_state_id; issue_asphalt_cement_custodian_from; issue_asphalt_cement_custodian_to; issue_asphalt_cement_receiving_node; issue_asphalt_cement_handoff_evidence; receive_accessory_finish_opening; receive_accessory_finish_external_receipts; receive_accessory_finish_closing_intact_all_locations; receive_accessory_finish_current_state; receive_accessory_finish_native_unit; receive_accessory_finish_exact_mass_bridge; receive_accessory_finish_material_id; receive_accessory_finish_sublocation_stock_evidence; issue_accessory_finish_actual_quantity_kg; issue_accessory_finish_event_id; issue_accessory_finish_material_id; issue_accessory_finish_state_id; issue_accessory_finish_custodian_from; issue_accessory_finish_custodian_to; issue_accessory_finish_receiving_node; issue_accessory_finish_handoff_evidence; physical_interface_release_actual_geometry; physical_interface_release_surface_panel_ids; physical_interface_release_upstream_state; physical_interface_release_handoff_evidence; issue_packaging_underlay_edges_actual_mass_kg; issue_packaging_underlay_edges_material_composition; issue_packaging_underlay_edges_item_id; issue_packaging_underlay_edges_current_state; issue_packaging_underlay_edges_custody_event_id; issue_packaging_underlay_edges_recipient_node; issue_packaging_underlay_edges_upstream_dataset_boundary_evidence; issue_packaging_shingle_details_actual_mass_kg; issue_packaging_shingle_details_material_composition; issue_packaging_shingle_details_item_id; issue_packaging_shingle_details_current_state; issue_packaging_shingle_details_custody_event_id; issue_packaging_shingle_details_recipient_node; issue_packaging_shingle_details_upstream_dataset_boundary_evidence; issue_packaging_finish_accept_actual_mass_kg; issue_packaging_finish_accept_material_composition; issue_packaging_finish_accept_item_id; issue_packaging_finish_accept_current_state; issue_packaging_finish_accept_custody_event_id; issue_packaging_finish_accept_recipient_node; issue_packaging_finish_accept_upstream_dataset_boundary_evidence; survey_receive_opening_processed_wip_mass_kg; survey_receive_incoming_material_mass_kg; survey_receive_incoming_transfer_mass_kg; survey_receive_accepted_retained_mass_kg; survey_receive_next_handoff_mass_kg; survey_receive_closing_processed_wip_mass_kg; survey_receive_other_exclusive_transfer_mass_kg; survey_receive_installed_not_accepted_mass_kg; survey_receive_mass_balance_gap_kg; survey_receive_kg_bridge_evidence; survey_receive_water_pool_exclusivity_evidence; survey_receive_complete_component_schedule_evidence; survey_receive_mass_closure_evidence; survey_receive_water_closure_evidence; survey_receive_measurement_uncertainty_evidence; survey_receive_access_service_all_direct_assignments_total; survey_receive_access_service_direct_assignment_register_evidence; survey_receive_access_service_contract_idle_basis_evidence; survey_receive_incoming_assembly_component_mass_kg; survey_receive_outgoing_assembly_component_mass_kg; survey_receive_assembly_mass_view; survey_receive_component_mass_manifest_evidence; survey_receive_exclusive_fate_register_evidence | Inspect the actual dry timber deck, fixing compatibility, slopes, penetrations, roof geometry and externally accepted junction interfaces against the project design and installed product instructions. Identify the responsible party for every interface. Reconcile each delivered component and packaging ledger with calibrated mass measurements or exact same-ID conversion evidence. Sign each issue and physical deck handoff; receipt rejects and usable exits remain separately evidenced. Close this node's physical material ledger using calc_survey_receive_material_closure and an independently measured whole-or-constituent covering-component mass manifest, excluding the observational timber-deck/Area interface. Assign each material/water-bearing portion one exclusive fate; keep signed unexplained closure gaps and uncertainty visible. Deduplicate electronic copies by unique physical event; retain distinct repeated operations. Sum physical numerator by actual identity/state/period and divide once by final positive unique A. Observational interface area carries no new deck manufacture. Compound and constituent quantities use exclusive grouping.  Existing-deck geometry and signed release are observation/acceptance records, not product inventory exchanges. deck_interface, physical_interface_release and physical_interface_construction_feed are retained observation ledger keys only; their raw fields and calc rules still measure unique surface IDs, actual area, state and adjacent responsibility gates. Original issue_* material role keys are per-SKU/state transfer subledgers; conditional handoff cards expand separately into actual concrete exchanges without a mixed-material fixed UUID or conflating different material quantities.| Raw declared native units; physical masses kg, geometry m2, supplied energy kWh and service h kept distinct; exact same-ID/current-state bridge required before conversion. | At each actual receipt, issue, installation pass, correction, waste/usable exit, meter boundary, stock close and state acceptance; retain every event and correction lineage. | All actual periods from this node's first lot event to its last attributable correction, stock/work-in-progress closure and final roofing acceptance; retain dates and incomplete gate status. | Named roof/site, lot, actual surface IDs and custody sublocations operated by survey_receive; link external suppliers/custodians and all eligible shared consumers without importing another node's quantity. | per reference flow | Signed actual product/design and interface revisions; calibrated instruments and exact bridges; supplier receipts/issues; matched custody; material-resolved waste tickets; actual meter topology/service contracts and complete consumer register; as-built gate photographs/signatures, water/mass closure and correction history. Retain independent incoming/outgoing assembly component masses in kg, exclusive whole-versus-constituent view, material-fate ownership and signed closure diagnostic; the final retained covering mass is not a second customer output. |
| cp_underlay_edges | underlay_edges | underlay; edge_metal; underlay_fixings; underlay_ready_roof; underlay_waste; underlay_direct_release; underlay_unused_return; underlay_edges_electricity; underlay_edges_access_service; underlay_edges_packaging_feed | Timestamped physical observation, stock, custody, meter, disposition and gate records for one node | lot_id; node_id; event_id; timestamp_start; timestamp_end; material_id; state_id; custodian_from; custodian_to; surface_or_panel_id; acceptance_status; evidence_ref; period_id; phase_id; revision_event_id; superseded_record_id; actual_rework_event_id; rework_source_node; rework_destination_node; defect_state; disposition; rework_quantity; measurement_unit; component_schedule_ref; product_instructions_ref; design_revision_ref; source_boundary_ref; surface_state_manifest_ref; unique_measurement_id; directed_transfer_id; actual_absence_evidence; allocation_decision_id; allocation_consumer_register_ref; water_fate_register_ref; underlay_received_quantity_kg; underlay_source_issue_id; underlay_material_id; underlay_state_id; underlay_custody_evidence; edge_metal_received_quantity_kg; edge_metal_source_issue_id; edge_metal_material_id; edge_metal_state_id; edge_metal_custody_evidence; underlay_fixings_received_quantity_kg; underlay_fixings_source_issue_id; underlay_fixings_material_id; underlay_fixings_state_id; underlay_fixings_custody_evidence; underlay_ready_roof_actual_quantity; underlay_ready_roof_native_unit; underlay_ready_roof_mass_or_geometry_bridge; underlay_ready_roof_actual_state; underlay_ready_roof_measured_absence_evidence; underlay_ready_roof_destination; underlay_waste_actual_quantity; underlay_waste_native_unit; underlay_waste_mass_or_geometry_bridge; underlay_waste_actual_state; underlay_waste_measured_absence_evidence; underlay_waste_destination; underlay_direct_release_actual_quantity; underlay_direct_release_native_unit; underlay_direct_release_mass_or_geometry_bridge; underlay_direct_release_actual_state; underlay_direct_release_measured_absence_evidence; underlay_direct_release_destination; underlay_direct_release_substance; underlay_direct_release_medium; underlay_direct_release_direction; underlay_direct_release_sampling_method; underlay_direct_release_formulation_or_dust_composition; underlay_direct_release_capture_fraction_evidence; underlay_unused_return_actual_quantity; underlay_unused_return_native_unit; underlay_unused_return_mass_or_geometry_bridge; underlay_unused_return_actual_state; underlay_unused_return_measured_absence_evidence; underlay_unused_return_destination; underlay_edges_electricity_meter_id; underlay_edges_electricity_meter_start; underlay_edges_electricity_meter_end; underlay_edges_electricity_unit_factor; underlay_edges_electricity_meter_parent; underlay_edges_electricity_inside_master_direct_total; underlay_edges_electricity_outside_master_direct_total; underlay_edges_electricity_master_total; underlay_edges_electricity_consumer_weight; underlay_edges_electricity_all_eligible_weights; underlay_edges_electricity_period; underlay_edges_electricity_topology_evidence; underlay_edges_access_service_asset_id; underlay_edges_access_service_period_start; underlay_edges_access_service_period_end; underlay_edges_access_service_billed_quantity; underlay_edges_access_service_actual_service_quantity; underlay_edges_access_service_owned_idle; underlay_edges_access_service_consumer_weight; underlay_edges_access_service_all_eligible_weights; underlay_edges_access_service_assignment_evidence; physical_interface_construction_feed_actual_geometry; physical_interface_construction_feed_surface_panel_ids; physical_interface_construction_feed_upstream_state; physical_interface_construction_feed_handoff_evidence; underlay_edges_packaging_feed_actual_mass_kg; underlay_edges_packaging_feed_source_issue_id; underlay_edges_packaging_feed_material_composition; underlay_edges_packaging_feed_current_state; underlay_edges_packaging_feed_custody_event_id; underlay_edges_opening_processed_wip_mass_kg; underlay_edges_incoming_material_mass_kg; underlay_edges_incoming_transfer_mass_kg; underlay_edges_accepted_retained_mass_kg; underlay_edges_next_handoff_mass_kg; underlay_edges_closing_processed_wip_mass_kg; underlay_edges_other_exclusive_transfer_mass_kg; underlay_edges_installed_not_accepted_mass_kg; underlay_edges_mass_balance_gap_kg; underlay_edges_kg_bridge_evidence; underlay_edges_water_pool_exclusivity_evidence; underlay_edges_complete_component_schedule_evidence; underlay_edges_mass_closure_evidence; underlay_edges_water_closure_evidence; underlay_edges_measurement_uncertainty_evidence; underlay_edges_access_service_all_direct_assignments_total; underlay_edges_access_service_direct_assignment_register_evidence; underlay_edges_access_service_contract_idle_basis_evidence; underlay_edges_incoming_assembly_component_mass_kg; underlay_edges_outgoing_assembly_component_mass_kg; underlay_edges_assembly_mass_view; underlay_edges_component_mass_manifest_evidence; underlay_edges_exclusive_fate_register_evidence | Match the physical deck release and each material issue to actual receipt. Record the selected layer schedule, leak-barrier locations, overlaps, edge order and fixing/sealing operations prescribed for this roof. Measure actual installed quantities, cuts, removed liners and packaging at this node. Inspect concealed interfaces before the underlaid surface is handed to shingling; record and retain every correction. Close this node's physical material ledger using calc_underlay_edges_material_closure and an independently measured whole-or-constituent covering-component mass manifest, excluding the observational timber-deck/Area interface. Assign each material/water-bearing portion one exclusive fate; keep signed unexplained closure gaps and uncertainty visible. Deduplicate electronic copies by unique physical event; retain distinct repeated operations. Sum physical numerator by actual identity/state/period and divide once by final positive unique A. Observational interface area carries no new deck manufacture. Compound and constituent quantities use exclusive grouping.  Existing-deck geometry and signed release are observation/acceptance records, not product inventory exchanges. deck_interface, physical_interface_release and physical_interface_construction_feed are retained observation ledger keys only; their raw fields and calc rules still measure unique surface IDs, actual area, state and adjacent responsibility gates. Original issue_* material role keys are per-SKU/state transfer subledgers; conditional handoff cards expand separately into actual concrete exchanges without a mixed-material fixed UUID or conflating different material quantities.| Raw declared native units; physical masses kg, geometry m2, supplied energy kWh and service h kept distinct; exact same-ID/current-state bridge required before conversion. | At each actual receipt, issue, installation pass, correction, waste/usable exit, meter boundary, stock close and state acceptance; retain every event and correction lineage. | All actual periods from this node's first lot event to its last attributable correction, stock/work-in-progress closure and final roofing acceptance; retain dates and incomplete gate status. | Named roof/site, lot, actual surface IDs and custody sublocations operated by underlay_edges; link external suppliers/custodians and all eligible shared consumers without importing another node's quantity. | per reference flow | Signed actual product/design and interface revisions; calibrated instruments and exact bridges; supplier receipts/issues; matched custody; material-resolved waste tickets; actual meter topology/service contracts and complete consumer register; as-built gate photographs/signatures, water/mass closure and correction history. Retain independent incoming/outgoing assembly component masses in kg, exclusive whole-versus-constituent view, material-fate ownership and signed closure diagnostic; the final retained covering mass is not a second customer output. |
| cp_shingle_details | shingle_details | roof_feed; field_shingles; starter_cap_shingles; roof_nails; flashing_vent_components; asphalt_cement; installed_roof; shingle_waste; shingle_direct_release; shingle_unused_return; shingle_details_electricity; shingle_details_access_service; shingle_details_packaging_feed | Timestamped physical observation, stock, custody, meter, disposition and gate records for one node | lot_id; node_id; event_id; timestamp_start; timestamp_end; material_id; state_id; custodian_from; custodian_to; surface_or_panel_id; acceptance_status; evidence_ref; period_id; phase_id; revision_event_id; superseded_record_id; actual_rework_event_id; rework_source_node; rework_destination_node; defect_state; disposition; rework_quantity; measurement_unit; component_schedule_ref; product_instructions_ref; design_revision_ref; source_boundary_ref; surface_state_manifest_ref; unique_measurement_id; directed_transfer_id; actual_absence_evidence; allocation_decision_id; allocation_consumer_register_ref; water_fate_register_ref; roof_feed_actual_quantity; roof_feed_native_unit; roof_feed_mass_or_geometry_bridge; roof_feed_actual_state; roof_feed_measured_absence_evidence; roof_feed_destination; field_shingles_received_quantity_kg; field_shingles_source_issue_id; field_shingles_material_id; field_shingles_state_id; field_shingles_custody_evidence; starter_cap_shingles_received_quantity_kg; starter_cap_shingles_source_issue_id; starter_cap_shingles_material_id; starter_cap_shingles_state_id; starter_cap_shingles_custody_evidence; roof_nails_received_quantity_kg; roof_nails_source_issue_id; roof_nails_material_id; roof_nails_state_id; roof_nails_custody_evidence; flashing_vent_components_received_quantity_kg; flashing_vent_components_source_issue_id; flashing_vent_components_material_id; flashing_vent_components_state_id; flashing_vent_components_custody_evidence; asphalt_cement_received_quantity_kg; asphalt_cement_source_issue_id; asphalt_cement_material_id; asphalt_cement_state_id; asphalt_cement_custody_evidence; installed_roof_actual_quantity; installed_roof_native_unit; installed_roof_mass_or_geometry_bridge; installed_roof_actual_state; installed_roof_measured_absence_evidence; installed_roof_destination; shingle_waste_actual_quantity; shingle_waste_native_unit; shingle_waste_mass_or_geometry_bridge; shingle_waste_actual_state; shingle_waste_measured_absence_evidence; shingle_waste_destination; shingle_direct_release_actual_quantity; shingle_direct_release_native_unit; shingle_direct_release_mass_or_geometry_bridge; shingle_direct_release_actual_state; shingle_direct_release_measured_absence_evidence; shingle_direct_release_destination; shingle_direct_release_substance; shingle_direct_release_medium; shingle_direct_release_direction; shingle_direct_release_sampling_method; shingle_direct_release_formulation_or_dust_composition; shingle_direct_release_capture_fraction_evidence; shingle_unused_return_actual_quantity; shingle_unused_return_native_unit; shingle_unused_return_mass_or_geometry_bridge; shingle_unused_return_actual_state; shingle_unused_return_measured_absence_evidence; shingle_unused_return_destination; shingle_details_electricity_meter_id; shingle_details_electricity_meter_start; shingle_details_electricity_meter_end; shingle_details_electricity_unit_factor; shingle_details_electricity_meter_parent; shingle_details_electricity_inside_master_direct_total; shingle_details_electricity_outside_master_direct_total; shingle_details_electricity_master_total; shingle_details_electricity_consumer_weight; shingle_details_electricity_all_eligible_weights; shingle_details_electricity_period; shingle_details_electricity_topology_evidence; shingle_details_access_service_asset_id; shingle_details_access_service_period_start; shingle_details_access_service_period_end; shingle_details_access_service_billed_quantity; shingle_details_access_service_actual_service_quantity; shingle_details_access_service_owned_idle; shingle_details_access_service_consumer_weight; shingle_details_access_service_all_eligible_weights; shingle_details_access_service_assignment_evidence; shingle_details_packaging_feed_actual_mass_kg; shingle_details_packaging_feed_source_issue_id; shingle_details_packaging_feed_material_composition; shingle_details_packaging_feed_current_state; shingle_details_packaging_feed_custody_event_id; shingle_details_opening_processed_wip_mass_kg; shingle_details_incoming_material_mass_kg; shingle_details_incoming_transfer_mass_kg; shingle_details_accepted_retained_mass_kg; shingle_details_next_handoff_mass_kg; shingle_details_closing_processed_wip_mass_kg; shingle_details_other_exclusive_transfer_mass_kg; shingle_details_installed_not_accepted_mass_kg; shingle_details_mass_balance_gap_kg; shingle_details_kg_bridge_evidence; shingle_details_water_pool_exclusivity_evidence; shingle_details_complete_component_schedule_evidence; shingle_details_mass_closure_evidence; shingle_details_water_closure_evidence; shingle_details_measurement_uncertainty_evidence; shingle_details_access_service_all_direct_assignments_total; shingle_details_access_service_direct_assignment_register_evidence; shingle_details_access_service_contract_idle_basis_evidence; shingle_details_incoming_assembly_component_mass_kg; shingle_details_outgoing_assembly_component_mass_kg; shingle_details_assembly_mass_view; shingle_details_component_mass_manifest_evidence; shingle_details_exclusive_fate_register_evidence | Match the underlaid surface and component issues, then record field layout, cuts, starter/cap sourcing, actual nail specification and application, valleys, wall/chimney/penetration flashings and owned ventilation accessories. Record cement/hand-seal application when required. Keep cut-from-field caps in the original field-stock ledger. Collect captured waste separately from actual uncaptured species releases and retain each rework event. Close this node's physical material ledger using calc_shingle_details_material_closure and an independently measured whole-or-constituent covering-component mass manifest, excluding the observational timber-deck/Area interface. Assign each material/water-bearing portion one exclusive fate; keep signed unexplained closure gaps and uncertainty visible. Deduplicate electronic copies by unique physical event; retain distinct repeated operations. Sum physical numerator by actual identity/state/period and divide once by final positive unique A. Observational interface area carries no new deck manufacture. Compound and constituent quantities use exclusive grouping. | Raw declared native units; physical masses kg, geometry m2, supplied energy kWh and service h kept distinct; exact same-ID/current-state bridge required before conversion. | At each actual receipt, issue, installation pass, correction, waste/usable exit, meter boundary, stock close and state acceptance; retain every event and correction lineage. | All actual periods from this node's first lot event to its last attributable correction, stock/work-in-progress closure and final roofing acceptance; retain dates and incomplete gate status. | Named roof/site, lot, actual surface IDs and custody sublocations operated by shingle_details; link external suppliers/custodians and all eligible shared consumers without importing another node's quantity. | per reference flow | Signed actual product/design and interface revisions; calibrated instruments and exact bridges; supplier receipts/issues; matched custody; material-resolved waste tickets; actual meter topology/service contracts and complete consumer register; as-built gate photographs/signatures, water/mass closure and correction history. Retain independent incoming/outgoing assembly component masses in kg, exclusive whole-versus-constituent view, material-fate ownership and signed closure diagnostic; the final retained covering mass is not a second customer output. |
| cp_finish_accept | finish_accept | finish_roof_feed; accessory_finish; finish_water; finish_waste; finish_wastewater; finish_water_vapour; finish_other_release; finish_unused_return; accepted_roof_service; finish_accept_electricity; finish_accept_access_service; finish_accept_packaging_feed | Timestamped physical observation, stock, custody, meter, disposition and gate records for one node | lot_id; node_id; event_id; timestamp_start; timestamp_end; material_id; state_id; custodian_from; custodian_to; surface_or_panel_id; acceptance_status; evidence_ref; period_id; phase_id; revision_event_id; superseded_record_id; actual_rework_event_id; rework_source_node; rework_destination_node; defect_state; disposition; rework_quantity; measurement_unit; component_schedule_ref; product_instructions_ref; design_revision_ref; source_boundary_ref; surface_state_manifest_ref; unique_measurement_id; directed_transfer_id; actual_absence_evidence; allocation_decision_id; allocation_consumer_register_ref; water_fate_register_ref; finish_roof_feed_actual_quantity; finish_roof_feed_native_unit; finish_roof_feed_mass_or_geometry_bridge; finish_roof_feed_actual_state; finish_roof_feed_measured_absence_evidence; finish_roof_feed_destination; accessory_finish_received_quantity_kg; accessory_finish_source_issue_id; accessory_finish_material_id; accessory_finish_state_id; accessory_finish_custody_evidence; finish_water_opening; finish_water_receipts; finish_water_closing_intact; finish_water_native_unit; finish_water_native_quantity; finish_water_actual_mass_factor; finish_water_factor_state_evidence; finish_waste_actual_quantity; finish_waste_native_unit; finish_waste_mass_or_geometry_bridge; finish_waste_actual_state; finish_waste_measured_absence_evidence; finish_waste_destination; finish_wastewater_actual_quantity; finish_wastewater_native_unit; finish_wastewater_mass_or_geometry_bridge; finish_wastewater_actual_state; finish_wastewater_measured_absence_evidence; finish_wastewater_destination; finish_water_vapour_actual_quantity; finish_water_vapour_native_unit; finish_water_vapour_mass_or_geometry_bridge; finish_water_vapour_actual_state; finish_water_vapour_measured_absence_evidence; finish_water_vapour_destination; finish_water_vapour_gross_fresh_water; finish_water_vapour_unused_fresh_exit; finish_water_vapour_received_process_water; finish_water_vapour_formulation_water; finish_water_vapour_opening_processed_water; finish_water_vapour_next_handoff_water; finish_water_vapour_retained_bound_water; finish_water_vapour_retained_free_water; finish_water_vapour_solid_waste_water; finish_water_vapour_liquid_waste_water; finish_water_vapour_direct_liquid_release_water; finish_water_vapour_closing_processed_wip_water; finish_water_vapour_other_exclusive_transfer_water; finish_water_vapour_validated_evaporation_evidence; finish_other_release_actual_quantity; finish_other_release_native_unit; finish_other_release_mass_or_geometry_bridge; finish_other_release_actual_state; finish_other_release_measured_absence_evidence; finish_other_release_destination; finish_other_release_substance; finish_other_release_medium; finish_other_release_direction; finish_other_release_sampling_method; finish_other_release_formulation_or_dust_composition; finish_other_release_capture_fraction_evidence; finish_unused_return_actual_quantity; finish_unused_return_native_unit; finish_unused_return_mass_or_geometry_bridge; finish_unused_return_actual_state; finish_unused_return_measured_absence_evidence; finish_unused_return_destination; accepted_a; accepted_geometry_records; accepted_unique_ids; excluded_openings; final_gate_evidence; finish_accept_electricity_meter_id; finish_accept_electricity_meter_start; finish_accept_electricity_meter_end; finish_accept_electricity_unit_factor; finish_accept_electricity_meter_parent; finish_accept_electricity_inside_master_direct_total; finish_accept_electricity_outside_master_direct_total; finish_accept_electricity_master_total; finish_accept_electricity_consumer_weight; finish_accept_electricity_all_eligible_weights; finish_accept_electricity_period; finish_accept_electricity_topology_evidence; finish_accept_access_service_asset_id; finish_accept_access_service_period_start; finish_accept_access_service_period_end; finish_accept_access_service_billed_quantity; finish_accept_access_service_actual_service_quantity; finish_accept_access_service_owned_idle; finish_accept_access_service_consumer_weight; finish_accept_access_service_all_eligible_weights; finish_accept_access_service_assignment_evidence; finish_accept_packaging_feed_actual_mass_kg; finish_accept_packaging_feed_source_issue_id; finish_accept_packaging_feed_material_composition; finish_accept_packaging_feed_current_state; finish_accept_packaging_feed_custody_event_id; finish_accept_opening_processed_wip_mass_kg; finish_accept_incoming_material_mass_kg; finish_accept_incoming_transfer_mass_kg; finish_accept_accepted_retained_mass_kg; finish_accept_next_handoff_mass_kg; finish_accept_closing_processed_wip_mass_kg; finish_accept_other_exclusive_transfer_mass_kg; finish_accept_installed_not_accepted_mass_kg; finish_accept_mass_balance_gap_kg; finish_accept_kg_bridge_evidence; finish_accept_water_pool_exclusivity_evidence; finish_accept_complete_component_schedule_evidence; finish_accept_mass_closure_evidence; finish_accept_water_closure_evidence; finish_accept_measurement_uncertainty_evidence; finish_accept_access_service_all_direct_assignments_total; finish_accept_access_service_direct_assignment_register_evidence; finish_accept_access_service_contract_idle_basis_evidence; finish_water_vapour_unused_fresh_exit_component_register; finish_water_vapour_received_assembly_water_evidence; finish_water_vapour_own_formulation_water_evidence; finish_water_vapour_pool_owner_exclusivity_evidence; finish_accept_incoming_assembly_water_mass_kg; finish_accept_incoming_assembly_component_mass_kg; finish_accept_outgoing_assembly_component_mass_kg; finish_accept_assembly_mass_view; finish_accept_component_mass_manifest_evidence; finish_accept_exclusive_fate_register_evidence | Match the installed surface, finish-material issues and accompanying packaging. Record only actually specified coating or cleanup operations and direct fresh-water supply. Inspect required seal state, drainage continuity, junction completion and owned ventilation interfaces after any actual waiting/protection interval. Measure every waste, unused exit and water fate and sign final acceptance only when the declared gate is satisfied. Close this node's physical material ledger using calc_finish_accept_material_closure and an independently measured whole-or-constituent covering-component mass manifest, excluding the observational timber-deck/Area interface. Assign each material/water-bearing portion one exclusive fate; keep signed unexplained closure gaps and uncertainty visible. Deduplicate electronic copies by unique physical event; retain distinct repeated operations. Sum physical numerator by actual identity/state/period and divide once by final positive unique A. Observational interface area carries no new deck manufacture. Compound and constituent quantities use exclusive grouping. | Raw declared native units; physical masses kg, geometry m2, supplied energy kWh and service h kept distinct; exact same-ID/current-state bridge required before conversion. | At each actual receipt, issue, installation pass, correction, waste/usable exit, meter boundary, stock close and state acceptance; retain every event and correction lineage. | All actual periods from this node's first lot event to its last attributable correction, stock/work-in-progress closure and final roofing acceptance; retain dates and incomplete gate status. | Named roof/site, lot, actual surface IDs and custody sublocations operated by finish_accept; link external suppliers/custodians and all eligible shared consumers without importing another node's quantity. | per reference flow | Signed actual product/design and interface revisions; calibrated instruments and exact bridges; supplier receipts/issues; matched custody; material-resolved waste tickets; actual meter topology/service contracts and complete consumer register; as-built gate photographs/signatures, water/mass closure and correction history. Retain independent incoming/outgoing assembly component masses in kg, exclusive whole-versus-constituent view, material-fate ownership and signed closure diagnostic; the final retained covering mass is not a second customer output. |

The calculation Inputs cells declare raw fields as raw:<field>, protocol context as cp:<protocol>, and the cross-node denominator as symbol:A. A is measured by cp_finish_accept from accepted_a, accepted_geometry_records, accepted_unique_ids, excluded_openings and final_gate_evidence; it is not an assumed constant. Within a card calculation, an unprefixed field suffix (for example meter_end, consumer_weight or source_issue_id) means that card’s exact row_id-prefixed raw field in its Inputs; the prefix is not a new variable. Terms such as directly assigned and eligible describe subsets proved by the listed topology/assignment evidence and complete consumer register, never invented amounts. Calculation outputs use actual_<row_id> physical numerators except normalized_accepted_roof_service. A source issue may be a reconciliation dependency without replacing the receiving node’s independent measurement.

Material closure uses four own-node calculation rules below. The nine staged component gross draws and receipt packaging are reconciled separately to measured receipt issues, actual receipt waste, usable exits and exclusive WIP/other fates. Downstream nodes independently measure the received and outgoing installed-covering component mass in kg using a complete component manifest or a measured whole-composite view; those two views cannot be added. Timber-deck and roofing state Area handoffs remain observational geometry and supply no kg. Retained material travelling in the next assembly handoff is not also accepted retention. At the final gate, accepted retained covering mass is a closure fate and is not an additional customer mass output beside the area service. Installed-but-unaccepted mass is a subset of closing processed WIP. Water inside incoming formulations or assemblies already belongs to their physical mass and is not purchased again. Signed missing or negative closure is a gap, never an inferred emission.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_deck_interface | survey_receive / observational acceptance record (deck_interface) | actual_deck_interface = measured deck_interface_actual_quantity converted to m2 with the recorded geometry bridge, reconciled by unique surface IDs, state and directed transfer. Do not sum repeated measurements of the same state or replace measured internal area with final A. Rework operations retain their real burdens while final unique area is counted once. The output is the physical area numerator. | raw:deck_interface_actual_quantity; raw:deck_interface_native_unit; raw:deck_interface_mass_or_geometry_bridge; raw:deck_interface_actual_state; raw:deck_interface_measured_absence_evidence; raw:deck_interface_destination; cp:cp_survey_receive; symbol:A | actual_deck_interface |  |
| calc_receive_packaging | survey_receive / receive_packaging | actual_receive_packaging = receive_packaging_opening + receive_packaging_receipts - receive_packaging_closing_intact, with each term first expressed in kg from the exact native quantity, actual_mass_factor and factor_state_evidence. Deduct intact unissued stock once; retain actual U/X exits in gross draw. The output is the physical numerator, not an intensity. | raw:receive_packaging_opening; raw:receive_packaging_receipts; raw:receive_packaging_closing_intact; raw:receive_packaging_native_unit; raw:receive_packaging_native_quantity; raw:receive_packaging_actual_mass_factor; raw:receive_packaging_factor_state_evidence; cp:cp_survey_receive; symbol:A | actual_receive_packaging |  |
| calc_receive_reject | survey_receive / receive_reject | actual_receive_reject = sum(receive_reject_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Keep composition, water content, custodian and actual destination; discarded material is distinct from usable returns and direct environmental releases. | raw:receive_reject_actual_quantity; raw:receive_reject_native_unit; raw:receive_reject_mass_or_geometry_bridge; raw:receive_reject_actual_state; raw:receive_reject_measured_absence_evidence; raw:receive_reject_destination; cp:cp_survey_receive; symbol:A | actual_receive_reject |  |
| calc_receive_packaging_waste | survey_receive / receive_packaging_waste | actual_receive_packaging_waste = sum(receive_packaging_waste_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Keep composition, water content, custodian and actual destination; discarded material is distinct from usable returns and direct environmental releases. | raw:receive_packaging_waste_actual_quantity; raw:receive_packaging_waste_native_unit; raw:receive_packaging_waste_mass_or_geometry_bridge; raw:receive_packaging_waste_actual_state; raw:receive_packaging_waste_measured_absence_evidence; raw:receive_packaging_waste_destination; cp:cp_survey_receive; symbol:A | actual_receive_packaging_waste |  |
| calc_receive_unused_return | survey_receive / receive_unused_return | actual_receive_unused_return = sum(receive_unused_return_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Split usable returns U and usable external transfers X into mutually exclusive positive custody exits; exclude intact unissued stock, retained material, waste and processed WIP. Transfer only evidenced original unused material upstream burden; construction, service and rework burdens remain with this roofing lot. No avoided-production credit or second negative subtraction. | raw:receive_unused_return_actual_quantity; raw:receive_unused_return_native_unit; raw:receive_unused_return_mass_or_geometry_bridge; raw:receive_unused_return_actual_state; raw:receive_unused_return_measured_absence_evidence; raw:receive_unused_return_destination; cp:cp_survey_receive; symbol:A | actual_receive_unused_return |  |
| calc_survey_receive_electricity | survey_receive / survey_receive_electricity | actual_survey_receive_electricity = directly assigned actual converted meter deltas + eligible share of positive reconciled master residual. Each delta = (meter_end - meter_start) * unit_factor for its actual period. Residual = converted master_total - inside_master_direct_total, including every directly assigned inside-master consumer once; outside_master_direct_total is recorded but never subtracted from this master. If residual is zero, no weights are required. If residual is positive, share = residual * consumer_weight / all_eligible_weights with a complete eligible consumer register and positive weights/denominator. Negative or unknown residual requires correction and remains a gap. The output is physical kWh, normalized only at the card. | raw:survey_receive_electricity_meter_id; raw:survey_receive_electricity_meter_start; raw:survey_receive_electricity_meter_end; raw:survey_receive_electricity_unit_factor; raw:survey_receive_electricity_meter_parent; raw:survey_receive_electricity_inside_master_direct_total; raw:survey_receive_electricity_outside_master_direct_total; raw:survey_receive_electricity_master_total; raw:survey_receive_electricity_consumer_weight; raw:survey_receive_electricity_all_eligible_weights; raw:survey_receive_electricity_period; raw:survey_receive_electricity_topology_evidence; cp:cp_survey_receive; symbol:A | actual_survey_receive_electricity |  |
| calc_survey_receive_access_service | survey_receive / survey_receive_access_service | actual_survey_receive_access_service = survey_receive_access_service_actual_service_quantity + eligible residual share, where directly assigned survey_receive_access_service_actual_service_quantity is this node/lot/period consumer's actual contracted direct assignment. Residual = survey_receive_access_service_billed_quantity - survey_receive_access_service_all_direct_assignments_total; the latter is the sum of every actual directly assigned consumer inside the same provider/asset/contract/service-period boundary, each once, proved by survey_receive_access_service_direct_assignment_register_evidence. When residual = 0, allocated residual share = 0 and no weights are required. When residual > 0, residual share = residual * survey_receive_access_service_consumer_weight / survey_receive_access_service_all_eligible_weights, using the complete actual eligible consumer register and positive evidence-backed weights/denominator. Negative or unknown residual is an unresolved assignment gap, never zero-clamped or a release. Direct assignments plus residual shares reconcile the actual billed service once. survey_receive_access_service_owned_idle is included once in the applicable direct assignment or residual billed availability according to survey_receive_access_service_contract_idle_basis_evidence, never added again as extra h. Retain actual period_start/period_end, provider/asset and service scope. No labor-hour, assumed shift, lifetime or annualization proxy. Output is actual physical h before the card's single division by A. | raw:survey_receive_access_service_asset_id; raw:survey_receive_access_service_period_start; raw:survey_receive_access_service_period_end; raw:survey_receive_access_service_billed_quantity; raw:survey_receive_access_service_actual_service_quantity; raw:survey_receive_access_service_owned_idle; raw:survey_receive_access_service_consumer_weight; raw:survey_receive_access_service_all_eligible_weights; raw:survey_receive_access_service_assignment_evidence; raw:survey_receive_access_service_all_direct_assignments_total; raw:survey_receive_access_service_direct_assignment_register_evidence; raw:survey_receive_access_service_contract_idle_basis_evidence; cp:cp_survey_receive; symbol:A | actual_survey_receive_access_service |  |
| calc_underlay | underlay_edges / underlay | actual_underlay = sum(underlay_received_quantity_kg) over unique source issue IDs matched to issue_underlay and the same material/state/custody. Keep this internal numerator before own-node waste, unused exits or retained incorporation. It carries the existing upstream burden once, with no external repurchase or second stock deduction. | raw:underlay_received_quantity_kg; raw:underlay_source_issue_id; raw:underlay_material_id; raw:underlay_state_id; raw:underlay_custody_evidence; cp:cp_underlay_edges; symbol:A | actual_underlay |  |
| calc_edge_metal | underlay_edges / edge_metal | actual_edge_metal = sum(edge_metal_received_quantity_kg) over unique source issue IDs matched to issue_edge_metal and the same material/state/custody. Keep this internal numerator before own-node waste, unused exits or retained incorporation. It carries the existing upstream burden once, with no external repurchase or second stock deduction. | raw:edge_metal_received_quantity_kg; raw:edge_metal_source_issue_id; raw:edge_metal_material_id; raw:edge_metal_state_id; raw:edge_metal_custody_evidence; cp:cp_underlay_edges; symbol:A | actual_edge_metal |  |
| calc_underlay_fixings | underlay_edges / underlay_fixings | actual_underlay_fixings = sum(underlay_fixings_received_quantity_kg) over unique source issue IDs matched to issue_underlay_fixings and the same material/state/custody. Keep this internal numerator before own-node waste, unused exits or retained incorporation. It carries the existing upstream burden once, with no external repurchase or second stock deduction. | raw:underlay_fixings_received_quantity_kg; raw:underlay_fixings_source_issue_id; raw:underlay_fixings_material_id; raw:underlay_fixings_state_id; raw:underlay_fixings_custody_evidence; cp:cp_underlay_edges; symbol:A | actual_underlay_fixings |  |
| calc_underlay_ready_roof | underlay_edges / underlay_ready_roof | actual_underlay_ready_roof = measured underlay_ready_roof_actual_quantity converted to m2 with the recorded geometry bridge, reconciled by unique surface IDs, state and directed transfer. Do not sum repeated measurements of the same state or replace measured internal area with final A. Rework operations retain their real burdens while final unique area is counted once. The output is the physical area numerator. | raw:underlay_ready_roof_actual_quantity; raw:underlay_ready_roof_native_unit; raw:underlay_ready_roof_mass_or_geometry_bridge; raw:underlay_ready_roof_actual_state; raw:underlay_ready_roof_measured_absence_evidence; raw:underlay_ready_roof_destination; cp:cp_underlay_edges; symbol:A | actual_underlay_ready_roof |  |
| calc_underlay_waste | underlay_edges / underlay_waste | actual_underlay_waste = sum(underlay_waste_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Keep composition, water content, custodian and actual destination; discarded material is distinct from usable returns and direct environmental releases. | raw:underlay_waste_actual_quantity; raw:underlay_waste_native_unit; raw:underlay_waste_mass_or_geometry_bridge; raw:underlay_waste_actual_state; raw:underlay_waste_measured_absence_evidence; raw:underlay_waste_destination; cp:cp_underlay_edges; symbol:A | actual_underlay_waste |  |
| calc_underlay_direct_release | underlay_edges / underlay_direct_release | actual_underlay_direct_release = sum(underlay_direct_release_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Resolve substance, receiving medium, direction, sampling method and formulation/dust basis for each real exchange. Use capture_fraction_evidence to separate captured waste from the uncaptured direct release; an unexplained mass residual is not an emission. | raw:underlay_direct_release_actual_quantity; raw:underlay_direct_release_native_unit; raw:underlay_direct_release_mass_or_geometry_bridge; raw:underlay_direct_release_actual_state; raw:underlay_direct_release_measured_absence_evidence; raw:underlay_direct_release_destination; raw:underlay_direct_release_substance; raw:underlay_direct_release_medium; raw:underlay_direct_release_direction; raw:underlay_direct_release_sampling_method; raw:underlay_direct_release_formulation_or_dust_composition; raw:underlay_direct_release_capture_fraction_evidence; cp:cp_underlay_edges; symbol:A | actual_underlay_direct_release |  |
| calc_underlay_unused_return | underlay_edges / underlay_unused_return | actual_underlay_unused_return = sum(underlay_unused_return_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Split usable returns U and usable external transfers X into mutually exclusive positive custody exits; exclude intact unissued stock, retained material, waste and processed WIP. Transfer only evidenced original unused material upstream burden; construction, service and rework burdens remain with this roofing lot. No avoided-production credit or second negative subtraction. | raw:underlay_unused_return_actual_quantity; raw:underlay_unused_return_native_unit; raw:underlay_unused_return_mass_or_geometry_bridge; raw:underlay_unused_return_actual_state; raw:underlay_unused_return_measured_absence_evidence; raw:underlay_unused_return_destination; cp:cp_underlay_edges; symbol:A | actual_underlay_unused_return |  |
| calc_underlay_edges_electricity | underlay_edges / underlay_edges_electricity | actual_underlay_edges_electricity = directly assigned actual converted meter deltas + eligible share of positive reconciled master residual. Each delta = (meter_end - meter_start) * unit_factor for its actual period. Residual = converted master_total - inside_master_direct_total, including every directly assigned inside-master consumer once; outside_master_direct_total is recorded but never subtracted from this master. If residual is zero, no weights are required. If residual is positive, share = residual * consumer_weight / all_eligible_weights with a complete eligible consumer register and positive weights/denominator. Negative or unknown residual requires correction and remains a gap. The output is physical kWh, normalized only at the card. | raw:underlay_edges_electricity_meter_id; raw:underlay_edges_electricity_meter_start; raw:underlay_edges_electricity_meter_end; raw:underlay_edges_electricity_unit_factor; raw:underlay_edges_electricity_meter_parent; raw:underlay_edges_electricity_inside_master_direct_total; raw:underlay_edges_electricity_outside_master_direct_total; raw:underlay_edges_electricity_master_total; raw:underlay_edges_electricity_consumer_weight; raw:underlay_edges_electricity_all_eligible_weights; raw:underlay_edges_electricity_period; raw:underlay_edges_electricity_topology_evidence; cp:cp_underlay_edges; symbol:A | actual_underlay_edges_electricity |  |
| calc_underlay_edges_access_service | underlay_edges / underlay_edges_access_service | actual_underlay_edges_access_service = underlay_edges_access_service_actual_service_quantity + eligible residual share, where directly assigned underlay_edges_access_service_actual_service_quantity is this node/lot/period consumer's actual contracted direct assignment. Residual = underlay_edges_access_service_billed_quantity - underlay_edges_access_service_all_direct_assignments_total; the latter is the sum of every actual directly assigned consumer inside the same provider/asset/contract/service-period boundary, each once, proved by underlay_edges_access_service_direct_assignment_register_evidence. When residual = 0, allocated residual share = 0 and no weights are required. When residual > 0, residual share = residual * underlay_edges_access_service_consumer_weight / underlay_edges_access_service_all_eligible_weights, using the complete actual eligible consumer register and positive evidence-backed weights/denominator. Negative or unknown residual is an unresolved assignment gap, never zero-clamped or a release. Direct assignments plus residual shares reconcile the actual billed service once. underlay_edges_access_service_owned_idle is included once in the applicable direct assignment or residual billed availability according to underlay_edges_access_service_contract_idle_basis_evidence, never added again as extra h. Retain actual period_start/period_end, provider/asset and service scope. No labor-hour, assumed shift, lifetime or annualization proxy. Output is actual physical h before the card's single division by A. | raw:underlay_edges_access_service_asset_id; raw:underlay_edges_access_service_period_start; raw:underlay_edges_access_service_period_end; raw:underlay_edges_access_service_billed_quantity; raw:underlay_edges_access_service_actual_service_quantity; raw:underlay_edges_access_service_owned_idle; raw:underlay_edges_access_service_consumer_weight; raw:underlay_edges_access_service_all_eligible_weights; raw:underlay_edges_access_service_assignment_evidence; raw:underlay_edges_access_service_all_direct_assignments_total; raw:underlay_edges_access_service_direct_assignment_register_evidence; raw:underlay_edges_access_service_contract_idle_basis_evidence; cp:cp_underlay_edges; symbol:A | actual_underlay_edges_access_service |  |
| calc_roof_feed | shingle_details / roof_feed | actual_roof_feed = measured roof_feed_actual_quantity converted to m2 with the recorded geometry bridge, reconciled by unique surface IDs, state and directed transfer. Do not sum repeated measurements of the same state or replace measured internal area with final A. Rework operations retain their real burdens while final unique area is counted once. The output is the physical area numerator. | raw:roof_feed_actual_quantity; raw:roof_feed_native_unit; raw:roof_feed_mass_or_geometry_bridge; raw:roof_feed_actual_state; raw:roof_feed_measured_absence_evidence; raw:roof_feed_destination; cp:cp_shingle_details; symbol:A | actual_roof_feed |  |
| calc_field_shingles | shingle_details / field_shingles | actual_field_shingles = sum(field_shingles_received_quantity_kg) over unique source issue IDs matched to issue_field_shingles and the same material/state/custody. Keep this internal numerator before own-node waste, unused exits or retained incorporation. It carries the existing upstream burden once, with no external repurchase or second stock deduction. | raw:field_shingles_received_quantity_kg; raw:field_shingles_source_issue_id; raw:field_shingles_material_id; raw:field_shingles_state_id; raw:field_shingles_custody_evidence; cp:cp_shingle_details; symbol:A | actual_field_shingles |  |
| calc_starter_cap_shingles | shingle_details / starter_cap_shingles | actual_starter_cap_shingles = sum(starter_cap_shingles_received_quantity_kg) over unique source issue IDs matched to issue_starter_cap_shingles and the same material/state/custody. Keep this internal numerator before own-node waste, unused exits or retained incorporation. It carries the existing upstream burden once, with no external repurchase or second stock deduction. | raw:starter_cap_shingles_received_quantity_kg; raw:starter_cap_shingles_source_issue_id; raw:starter_cap_shingles_material_id; raw:starter_cap_shingles_state_id; raw:starter_cap_shingles_custody_evidence; cp:cp_shingle_details; symbol:A | actual_starter_cap_shingles |  |
| calc_roof_nails | shingle_details / roof_nails | actual_roof_nails = sum(roof_nails_received_quantity_kg) over unique source issue IDs matched to issue_roof_nails and the same material/state/custody. Keep this internal numerator before own-node waste, unused exits or retained incorporation. It carries the existing upstream burden once, with no external repurchase or second stock deduction. | raw:roof_nails_received_quantity_kg; raw:roof_nails_source_issue_id; raw:roof_nails_material_id; raw:roof_nails_state_id; raw:roof_nails_custody_evidence; cp:cp_shingle_details; symbol:A | actual_roof_nails |  |
| calc_flashing_vent_components | shingle_details / flashing_vent_components | actual_flashing_vent_components = sum(flashing_vent_components_received_quantity_kg) over unique source issue IDs matched to issue_flashing_vent_components and the same material/state/custody. Keep this internal numerator before own-node waste, unused exits or retained incorporation. It carries the existing upstream burden once, with no external repurchase or second stock deduction. | raw:flashing_vent_components_received_quantity_kg; raw:flashing_vent_components_source_issue_id; raw:flashing_vent_components_material_id; raw:flashing_vent_components_state_id; raw:flashing_vent_components_custody_evidence; cp:cp_shingle_details; symbol:A | actual_flashing_vent_components |  |
| calc_asphalt_cement | shingle_details / asphalt_cement | actual_asphalt_cement = sum(asphalt_cement_received_quantity_kg) over unique source issue IDs matched to issue_asphalt_cement and the same material/state/custody. Keep this internal numerator before own-node waste, unused exits or retained incorporation. It carries the existing upstream burden once, with no external repurchase or second stock deduction. | raw:asphalt_cement_received_quantity_kg; raw:asphalt_cement_source_issue_id; raw:asphalt_cement_material_id; raw:asphalt_cement_state_id; raw:asphalt_cement_custody_evidence; cp:cp_shingle_details; symbol:A | actual_asphalt_cement |  |
| calc_installed_roof | shingle_details / installed_roof | actual_installed_roof = measured installed_roof_actual_quantity converted to m2 with the recorded geometry bridge, reconciled by unique surface IDs, state and directed transfer. Do not sum repeated measurements of the same state or replace measured internal area with final A. Rework operations retain their real burdens while final unique area is counted once. The output is the physical area numerator. | raw:installed_roof_actual_quantity; raw:installed_roof_native_unit; raw:installed_roof_mass_or_geometry_bridge; raw:installed_roof_actual_state; raw:installed_roof_measured_absence_evidence; raw:installed_roof_destination; cp:cp_shingle_details; symbol:A | actual_installed_roof |  |
| calc_shingle_waste | shingle_details / shingle_waste | actual_shingle_waste = sum(shingle_waste_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Keep composition, water content, custodian and actual destination; discarded material is distinct from usable returns and direct environmental releases. | raw:shingle_waste_actual_quantity; raw:shingle_waste_native_unit; raw:shingle_waste_mass_or_geometry_bridge; raw:shingle_waste_actual_state; raw:shingle_waste_measured_absence_evidence; raw:shingle_waste_destination; cp:cp_shingle_details; symbol:A | actual_shingle_waste |  |
| calc_shingle_direct_release | shingle_details / shingle_direct_release | actual_shingle_direct_release = sum(shingle_direct_release_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Resolve substance, receiving medium, direction, sampling method and formulation/dust basis for each real exchange. Use capture_fraction_evidence to separate captured waste from the uncaptured direct release; an unexplained mass residual is not an emission. | raw:shingle_direct_release_actual_quantity; raw:shingle_direct_release_native_unit; raw:shingle_direct_release_mass_or_geometry_bridge; raw:shingle_direct_release_actual_state; raw:shingle_direct_release_measured_absence_evidence; raw:shingle_direct_release_destination; raw:shingle_direct_release_substance; raw:shingle_direct_release_medium; raw:shingle_direct_release_direction; raw:shingle_direct_release_sampling_method; raw:shingle_direct_release_formulation_or_dust_composition; raw:shingle_direct_release_capture_fraction_evidence; cp:cp_shingle_details; symbol:A | actual_shingle_direct_release |  |
| calc_shingle_unused_return | shingle_details / shingle_unused_return | actual_shingle_unused_return = sum(shingle_unused_return_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Split usable returns U and usable external transfers X into mutually exclusive positive custody exits; exclude intact unissued stock, retained material, waste and processed WIP. Transfer only evidenced original unused material upstream burden; construction, service and rework burdens remain with this roofing lot. No avoided-production credit or second negative subtraction. | raw:shingle_unused_return_actual_quantity; raw:shingle_unused_return_native_unit; raw:shingle_unused_return_mass_or_geometry_bridge; raw:shingle_unused_return_actual_state; raw:shingle_unused_return_measured_absence_evidence; raw:shingle_unused_return_destination; cp:cp_shingle_details; symbol:A | actual_shingle_unused_return |  |
| calc_shingle_details_electricity | shingle_details / shingle_details_electricity | actual_shingle_details_electricity = directly assigned actual converted meter deltas + eligible share of positive reconciled master residual. Each delta = (meter_end - meter_start) * unit_factor for its actual period. Residual = converted master_total - inside_master_direct_total, including every directly assigned inside-master consumer once; outside_master_direct_total is recorded but never subtracted from this master. If residual is zero, no weights are required. If residual is positive, share = residual * consumer_weight / all_eligible_weights with a complete eligible consumer register and positive weights/denominator. Negative or unknown residual requires correction and remains a gap. The output is physical kWh, normalized only at the card. | raw:shingle_details_electricity_meter_id; raw:shingle_details_electricity_meter_start; raw:shingle_details_electricity_meter_end; raw:shingle_details_electricity_unit_factor; raw:shingle_details_electricity_meter_parent; raw:shingle_details_electricity_inside_master_direct_total; raw:shingle_details_electricity_outside_master_direct_total; raw:shingle_details_electricity_master_total; raw:shingle_details_electricity_consumer_weight; raw:shingle_details_electricity_all_eligible_weights; raw:shingle_details_electricity_period; raw:shingle_details_electricity_topology_evidence; cp:cp_shingle_details; symbol:A | actual_shingle_details_electricity |  |
| calc_shingle_details_access_service | shingle_details / shingle_details_access_service | actual_shingle_details_access_service = shingle_details_access_service_actual_service_quantity + eligible residual share, where directly assigned shingle_details_access_service_actual_service_quantity is this node/lot/period consumer's actual contracted direct assignment. Residual = shingle_details_access_service_billed_quantity - shingle_details_access_service_all_direct_assignments_total; the latter is the sum of every actual directly assigned consumer inside the same provider/asset/contract/service-period boundary, each once, proved by shingle_details_access_service_direct_assignment_register_evidence. When residual = 0, allocated residual share = 0 and no weights are required. When residual > 0, residual share = residual * shingle_details_access_service_consumer_weight / shingle_details_access_service_all_eligible_weights, using the complete actual eligible consumer register and positive evidence-backed weights/denominator. Negative or unknown residual is an unresolved assignment gap, never zero-clamped or a release. Direct assignments plus residual shares reconcile the actual billed service once. shingle_details_access_service_owned_idle is included once in the applicable direct assignment or residual billed availability according to shingle_details_access_service_contract_idle_basis_evidence, never added again as extra h. Retain actual period_start/period_end, provider/asset and service scope. No labor-hour, assumed shift, lifetime or annualization proxy. Output is actual physical h before the card's single division by A. | raw:shingle_details_access_service_asset_id; raw:shingle_details_access_service_period_start; raw:shingle_details_access_service_period_end; raw:shingle_details_access_service_billed_quantity; raw:shingle_details_access_service_actual_service_quantity; raw:shingle_details_access_service_owned_idle; raw:shingle_details_access_service_consumer_weight; raw:shingle_details_access_service_all_eligible_weights; raw:shingle_details_access_service_assignment_evidence; raw:shingle_details_access_service_all_direct_assignments_total; raw:shingle_details_access_service_direct_assignment_register_evidence; raw:shingle_details_access_service_contract_idle_basis_evidence; cp:cp_shingle_details; symbol:A | actual_shingle_details_access_service |  |
| calc_finish_roof_feed | finish_accept / finish_roof_feed | actual_finish_roof_feed = measured finish_roof_feed_actual_quantity converted to m2 with the recorded geometry bridge, reconciled by unique surface IDs, state and directed transfer. Do not sum repeated measurements of the same state or replace measured internal area with final A. Rework operations retain their real burdens while final unique area is counted once. The output is the physical area numerator. | raw:finish_roof_feed_actual_quantity; raw:finish_roof_feed_native_unit; raw:finish_roof_feed_mass_or_geometry_bridge; raw:finish_roof_feed_actual_state; raw:finish_roof_feed_measured_absence_evidence; raw:finish_roof_feed_destination; cp:cp_finish_accept; symbol:A | actual_finish_roof_feed |  |
| calc_accessory_finish | finish_accept / accessory_finish | actual_accessory_finish = sum(accessory_finish_received_quantity_kg) over unique source issue IDs matched to issue_accessory_finish and the same material/state/custody. Keep this internal numerator before own-node waste, unused exits or retained incorporation. It carries the existing upstream burden once, with no external repurchase or second stock deduction. | raw:accessory_finish_received_quantity_kg; raw:accessory_finish_source_issue_id; raw:accessory_finish_material_id; raw:accessory_finish_state_id; raw:accessory_finish_custody_evidence; cp:cp_finish_accept; symbol:A | actual_accessory_finish |  |
| calc_finish_water | finish_accept / finish_water | actual_finish_water = finish_water_opening + finish_water_receipts - finish_water_closing_intact, with each term first expressed in kg from the exact native quantity, actual_mass_factor and factor_state_evidence. Deduct intact unissued stock once; retain actual U/X exits in gross draw. The output is the physical numerator, not an intensity. | raw:finish_water_opening; raw:finish_water_receipts; raw:finish_water_closing_intact; raw:finish_water_native_unit; raw:finish_water_native_quantity; raw:finish_water_actual_mass_factor; raw:finish_water_factor_state_evidence; cp:cp_finish_accept; symbol:A | actual_finish_water |  |
| calc_finish_waste | finish_accept / finish_waste | actual_finish_waste = sum(finish_waste_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Keep composition, water content, custodian and actual destination; discarded material is distinct from usable returns and direct environmental releases. | raw:finish_waste_actual_quantity; raw:finish_waste_native_unit; raw:finish_waste_mass_or_geometry_bridge; raw:finish_waste_actual_state; raw:finish_waste_measured_absence_evidence; raw:finish_waste_destination; cp:cp_finish_accept; symbol:A | actual_finish_waste |  |
| calc_finish_wastewater | finish_accept / finish_wastewater | actual_finish_wastewater = sum(finish_wastewater_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Keep composition, water content, custodian and actual destination; discarded material is distinct from usable returns and direct environmental releases. | raw:finish_wastewater_actual_quantity; raw:finish_wastewater_native_unit; raw:finish_wastewater_mass_or_geometry_bridge; raw:finish_wastewater_actual_state; raw:finish_wastewater_measured_absence_evidence; raw:finish_wastewater_destination; cp:cp_finish_accept; symbol:A | actual_finish_wastewater |  |
| calc_finish_water_vapour | finish_accept / finish_water_vapour | actual_finish_water_vapour = sum measured own-node H2O-to-air-unspecified releases, or independently validated evaporation from the exclusive water-only balance: finish_water_vapour_gross_fresh_water - finish_water_vapour_unused_fresh_exit + finish_water_vapour_received_process_water + finish_water_vapour_formulation_water + finish_water_vapour_opening_processed_water - finish_water_vapour_next_handoff_water - finish_water_vapour_retained_bound_water - finish_water_vapour_retained_free_water - finish_water_vapour_solid_waste_water - finish_water_vapour_liquid_waste_water - finish_water_vapour_direct_liquid_release_water - finish_water_vapour_closing_processed_wip_water - finish_water_vapour_other_exclusive_transfer_water, all in kg H2O. Reconcile finish_water_vapour_gross_fresh_water exactly to calc:actual_finish_water, whose intact unissued closing water stock has already been deducted once; no second closing-intact subtraction. Reconcile finish_water_vapour_unused_fresh_exit to the measured fresh-supplied-water portion of calc:actual_finish_unused_return using finish_water_vapour_unused_fresh_exit_component_register; other formulation/material/packaging returns are not fresh-water exits. finish_water_vapour_received_process_water equals the independently measured finish_accept_incoming_assembly_water_mass_kg in the received installed assembly after all prior-node losses, proved by finish_water_vapour_received_assembly_water_evidence and matched surface/state manifest; never infer it from observational Area. finish_water_vapour_formulation_water contains only measured H2O in this node's incoming accessory-finish formulations represented by calc:actual_accessory_finish, with finish_water_vapour_own_formulation_water_evidence; it excludes water already present in the received assembly or opening processed WIP. Opening processed water is only carried-in processed WIP not replayed as a current input. Use measured water fractions and finish_water_vapour_pool_owner_exclusivity_evidence so all bound/free retention, waste, direct liquid, handoff, other transfer and closing processed-WIP pools are exclusive; total wet formulation/waste mass is not a water mass. Require finish_water_vapour_validated_evaporation_evidence and uncertainty review for occurrence and quantity. A negative result or unclosed balance remains a gap, not automatic vapour, zero-clamping or another release. Output is actual own-node physical kg H2O to air unspecified before division by A. | raw:finish_water_vapour_actual_quantity; raw:finish_water_vapour_native_unit; raw:finish_water_vapour_mass_or_geometry_bridge; raw:finish_water_vapour_actual_state; raw:finish_water_vapour_measured_absence_evidence; raw:finish_water_vapour_destination; raw:finish_water_vapour_gross_fresh_water; raw:finish_water_vapour_unused_fresh_exit; raw:finish_water_vapour_received_process_water; raw:finish_water_vapour_formulation_water; raw:finish_water_vapour_opening_processed_water; raw:finish_water_vapour_next_handoff_water; raw:finish_water_vapour_retained_bound_water; raw:finish_water_vapour_retained_free_water; raw:finish_water_vapour_solid_waste_water; raw:finish_water_vapour_liquid_waste_water; raw:finish_water_vapour_direct_liquid_release_water; raw:finish_water_vapour_closing_processed_wip_water; raw:finish_water_vapour_other_exclusive_transfer_water; raw:finish_water_vapour_validated_evaporation_evidence; raw:finish_water_vapour_unused_fresh_exit_component_register; raw:finish_water_vapour_received_assembly_water_evidence; raw:finish_water_vapour_own_formulation_water_evidence; raw:finish_water_vapour_pool_owner_exclusivity_evidence; raw:finish_accept_incoming_assembly_water_mass_kg; cp:cp_finish_accept; calc:actual_finish_water; calc:actual_finish_unused_return; calc:actual_accessory_finish; symbol:A | actual_finish_water_vapour |  |
| calc_finish_other_release | finish_accept / finish_other_release | actual_finish_other_release = sum(finish_other_release_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Resolve substance, receiving medium, direction, sampling method and formulation/dust basis for each real exchange. Use capture_fraction_evidence to separate captured waste from the uncaptured direct release; an unexplained mass residual is not an emission. | raw:finish_other_release_actual_quantity; raw:finish_other_release_native_unit; raw:finish_other_release_mass_or_geometry_bridge; raw:finish_other_release_actual_state; raw:finish_other_release_measured_absence_evidence; raw:finish_other_release_destination; raw:finish_other_release_substance; raw:finish_other_release_medium; raw:finish_other_release_direction; raw:finish_other_release_sampling_method; raw:finish_other_release_formulation_or_dust_composition; raw:finish_other_release_capture_fraction_evidence; cp:cp_finish_accept; symbol:A | actual_finish_other_release |  |
| calc_finish_unused_return | finish_accept / finish_unused_return | actual_finish_unused_return = sum(finish_unused_return_actual_quantity) over unique actual events in kg after exact identity/state conversion from native_unit and mass_or_geometry_bridge. Preserve actual_state, destination and measured_absence_evidence; unknown occurrence or quantity remains a gap. Split usable returns U and usable external transfers X into mutually exclusive positive custody exits; exclude intact unissued stock, retained material, waste and processed WIP. Transfer only evidenced original unused material upstream burden; construction, service and rework burdens remain with this roofing lot. No avoided-production credit or second negative subtraction. | raw:finish_unused_return_actual_quantity; raw:finish_unused_return_native_unit; raw:finish_unused_return_mass_or_geometry_bridge; raw:finish_unused_return_actual_state; raw:finish_unused_return_measured_absence_evidence; raw:finish_unused_return_destination; cp:cp_finish_accept; symbol:A | actual_finish_unused_return |  |
| calc_accepted_roof_service | finish_accept / accepted_roof_service | normalized_accepted_roof_service = A / A. Derive A from accepted_a and the accepted_geometry_records/accepted_unique_ids after excluding openings exactly once, in m2 with final_gate_evidence; require A > 0. Output is the normalized final exchange only and is not divided again. | raw:accepted_a; raw:accepted_geometry_records; raw:accepted_unique_ids; raw:excluded_openings; raw:final_gate_evidence; cp:cp_finish_accept; symbol:A | normalized_accepted_roof_service |  |
| calc_finish_accept_electricity | finish_accept / finish_accept_electricity | actual_finish_accept_electricity = directly assigned actual converted meter deltas + eligible share of positive reconciled master residual. Each delta = (meter_end - meter_start) * unit_factor for its actual period. Residual = converted master_total - inside_master_direct_total, including every directly assigned inside-master consumer once; outside_master_direct_total is recorded but never subtracted from this master. If residual is zero, no weights are required. If residual is positive, share = residual * consumer_weight / all_eligible_weights with a complete eligible consumer register and positive weights/denominator. Negative or unknown residual requires correction and remains a gap. The output is physical kWh, normalized only at the card. | raw:finish_accept_electricity_meter_id; raw:finish_accept_electricity_meter_start; raw:finish_accept_electricity_meter_end; raw:finish_accept_electricity_unit_factor; raw:finish_accept_electricity_meter_parent; raw:finish_accept_electricity_inside_master_direct_total; raw:finish_accept_electricity_outside_master_direct_total; raw:finish_accept_electricity_master_total; raw:finish_accept_electricity_consumer_weight; raw:finish_accept_electricity_all_eligible_weights; raw:finish_accept_electricity_period; raw:finish_accept_electricity_topology_evidence; cp:cp_finish_accept; symbol:A | actual_finish_accept_electricity |  |
| calc_finish_accept_access_service | finish_accept / finish_accept_access_service | actual_finish_accept_access_service = finish_accept_access_service_actual_service_quantity + eligible residual share, where directly assigned finish_accept_access_service_actual_service_quantity is this node/lot/period consumer's actual contracted direct assignment. Residual = finish_accept_access_service_billed_quantity - finish_accept_access_service_all_direct_assignments_total; the latter is the sum of every actual directly assigned consumer inside the same provider/asset/contract/service-period boundary, each once, proved by finish_accept_access_service_direct_assignment_register_evidence. When residual = 0, allocated residual share = 0 and no weights are required. When residual > 0, residual share = residual * finish_accept_access_service_consumer_weight / finish_accept_access_service_all_eligible_weights, using the complete actual eligible consumer register and positive evidence-backed weights/denominator. Negative or unknown residual is an unresolved assignment gap, never zero-clamped or a release. Direct assignments plus residual shares reconcile the actual billed service once. finish_accept_access_service_owned_idle is included once in the applicable direct assignment or residual billed availability according to finish_accept_access_service_contract_idle_basis_evidence, never added again as extra h. Retain actual period_start/period_end, provider/asset and service scope. No labor-hour, assumed shift, lifetime or annualization proxy. Output is actual physical h before the card's single division by A. | raw:finish_accept_access_service_asset_id; raw:finish_accept_access_service_period_start; raw:finish_accept_access_service_period_end; raw:finish_accept_access_service_billed_quantity; raw:finish_accept_access_service_actual_service_quantity; raw:finish_accept_access_service_owned_idle; raw:finish_accept_access_service_consumer_weight; raw:finish_accept_access_service_all_eligible_weights; raw:finish_accept_access_service_assignment_evidence; raw:finish_accept_access_service_all_direct_assignments_total; raw:finish_accept_access_service_direct_assignment_register_evidence; raw:finish_accept_access_service_contract_idle_basis_evidence; cp:cp_finish_accept; symbol:A | actual_finish_accept_access_service |  |
| calc_receive_underlay | survey_receive / receive_underlay | actual_receive_underlay = receive_underlay_opening + receive_underlay_external_receipts - receive_underlay_closing_intact_all_locations, converted to kg before addition using receive_underlay_exact_mass_bridge for the same material ID/current state. Closing is only unissued intact stock, each item once at its recorded custody sublocation. Do not subtract actual receipt waste or positive usable exits; they are included in this gross draw. The output is the unnormalized physical numerator. | raw:receive_underlay_opening; raw:receive_underlay_external_receipts; raw:receive_underlay_closing_intact_all_locations; raw:receive_underlay_current_state; raw:receive_underlay_native_unit; raw:receive_underlay_exact_mass_bridge; raw:receive_underlay_material_id; raw:receive_underlay_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_underlay |  |
| calc_issue_underlay | survey_receive / issue_materials_underlay_edges / component transfer ledger (issue_underlay) | actual_issue_underlay = sum(issue_underlay_actual_quantity_kg) over unique issue_underlay_event_id matched to material_id, state_id, recipient and custody evidence. Independently measured issues match actual_underlay at the receiving node. Reconcile the material-specific gross receipt to issues, receipt waste, usable U/X and exclusive remaining work-in-progress/other fates; do not generate an issue from an unexplained difference. | raw:issue_underlay_actual_quantity_kg; raw:issue_underlay_event_id; raw:issue_underlay_material_id; raw:issue_underlay_state_id; raw:issue_underlay_custodian_from; raw:issue_underlay_custodian_to; raw:issue_underlay_receiving_node; raw:issue_underlay_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_underlay |  |
| calc_receive_edge_metal | survey_receive / receive_edge_metal | actual_receive_edge_metal = receive_edge_metal_opening + receive_edge_metal_external_receipts - receive_edge_metal_closing_intact_all_locations, converted to kg before addition using receive_edge_metal_exact_mass_bridge for the same material ID/current state. Closing is only unissued intact stock, each item once at its recorded custody sublocation. Do not subtract actual receipt waste or positive usable exits; they are included in this gross draw. The output is the unnormalized physical numerator. | raw:receive_edge_metal_opening; raw:receive_edge_metal_external_receipts; raw:receive_edge_metal_closing_intact_all_locations; raw:receive_edge_metal_current_state; raw:receive_edge_metal_native_unit; raw:receive_edge_metal_exact_mass_bridge; raw:receive_edge_metal_material_id; raw:receive_edge_metal_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_edge_metal |  |
| calc_issue_edge_metal | survey_receive / issue_materials_underlay_edges / component transfer ledger (issue_edge_metal) | actual_issue_edge_metal = sum(issue_edge_metal_actual_quantity_kg) over unique issue_edge_metal_event_id matched to material_id, state_id, recipient and custody evidence. Independently measured issues match actual_edge_metal at the receiving node. Reconcile the material-specific gross receipt to issues, receipt waste, usable U/X and exclusive remaining work-in-progress/other fates; do not generate an issue from an unexplained difference. | raw:issue_edge_metal_actual_quantity_kg; raw:issue_edge_metal_event_id; raw:issue_edge_metal_material_id; raw:issue_edge_metal_state_id; raw:issue_edge_metal_custodian_from; raw:issue_edge_metal_custodian_to; raw:issue_edge_metal_receiving_node; raw:issue_edge_metal_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_edge_metal |  |
| calc_receive_underlay_fixings | survey_receive / receive_underlay_fixings | actual_receive_underlay_fixings = receive_underlay_fixings_opening + receive_underlay_fixings_external_receipts - receive_underlay_fixings_closing_intact_all_locations, converted to kg before addition using receive_underlay_fixings_exact_mass_bridge for the same material ID/current state. Closing is only unissued intact stock, each item once at its recorded custody sublocation. Do not subtract actual receipt waste or positive usable exits; they are included in this gross draw. The output is the unnormalized physical numerator. | raw:receive_underlay_fixings_opening; raw:receive_underlay_fixings_external_receipts; raw:receive_underlay_fixings_closing_intact_all_locations; raw:receive_underlay_fixings_current_state; raw:receive_underlay_fixings_native_unit; raw:receive_underlay_fixings_exact_mass_bridge; raw:receive_underlay_fixings_material_id; raw:receive_underlay_fixings_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_underlay_fixings |  |
| calc_issue_underlay_fixings | survey_receive / issue_materials_underlay_edges / component transfer ledger (issue_underlay_fixings) | actual_issue_underlay_fixings = sum(issue_underlay_fixings_actual_quantity_kg) over unique issue_underlay_fixings_event_id matched to material_id, state_id, recipient and custody evidence. Independently measured issues match actual_underlay_fixings at the receiving node. Reconcile the material-specific gross receipt to issues, receipt waste, usable U/X and exclusive remaining work-in-progress/other fates; do not generate an issue from an unexplained difference. | raw:issue_underlay_fixings_actual_quantity_kg; raw:issue_underlay_fixings_event_id; raw:issue_underlay_fixings_material_id; raw:issue_underlay_fixings_state_id; raw:issue_underlay_fixings_custodian_from; raw:issue_underlay_fixings_custodian_to; raw:issue_underlay_fixings_receiving_node; raw:issue_underlay_fixings_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_underlay_fixings |  |
| calc_receive_field_shingles | survey_receive / receive_field_shingles | actual_receive_field_shingles = receive_field_shingles_opening + receive_field_shingles_external_receipts - receive_field_shingles_closing_intact_all_locations, converted to kg before addition using receive_field_shingles_exact_mass_bridge for the same material ID/current state. Closing is only unissued intact stock, each item once at its recorded custody sublocation. Do not subtract actual receipt waste or positive usable exits; they are included in this gross draw. The output is the unnormalized physical numerator. | raw:receive_field_shingles_opening; raw:receive_field_shingles_external_receipts; raw:receive_field_shingles_closing_intact_all_locations; raw:receive_field_shingles_current_state; raw:receive_field_shingles_native_unit; raw:receive_field_shingles_exact_mass_bridge; raw:receive_field_shingles_material_id; raw:receive_field_shingles_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_field_shingles |  |
| calc_issue_field_shingles | survey_receive / issue_materials_shingle_details / component transfer ledger (issue_field_shingles) | actual_issue_field_shingles = sum(issue_field_shingles_actual_quantity_kg) over unique issue_field_shingles_event_id matched to material_id, state_id, recipient and custody evidence. Independently measured issues match actual_field_shingles at the receiving node. Reconcile the material-specific gross receipt to issues, receipt waste, usable U/X and exclusive remaining work-in-progress/other fates; do not generate an issue from an unexplained difference. | raw:issue_field_shingles_actual_quantity_kg; raw:issue_field_shingles_event_id; raw:issue_field_shingles_material_id; raw:issue_field_shingles_state_id; raw:issue_field_shingles_custodian_from; raw:issue_field_shingles_custodian_to; raw:issue_field_shingles_receiving_node; raw:issue_field_shingles_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_field_shingles |  |
| calc_receive_starter_cap_shingles | survey_receive / receive_starter_cap_shingles | actual_receive_starter_cap_shingles = receive_starter_cap_shingles_opening + receive_starter_cap_shingles_external_receipts - receive_starter_cap_shingles_closing_intact_all_locations, converted to kg before addition using receive_starter_cap_shingles_exact_mass_bridge for the same material ID/current state. Closing is only unissued intact stock, each item once at its recorded custody sublocation. Do not subtract actual receipt waste or positive usable exits; they are included in this gross draw. The output is the unnormalized physical numerator. | raw:receive_starter_cap_shingles_opening; raw:receive_starter_cap_shingles_external_receipts; raw:receive_starter_cap_shingles_closing_intact_all_locations; raw:receive_starter_cap_shingles_current_state; raw:receive_starter_cap_shingles_native_unit; raw:receive_starter_cap_shingles_exact_mass_bridge; raw:receive_starter_cap_shingles_material_id; raw:receive_starter_cap_shingles_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_starter_cap_shingles |  |
| calc_issue_starter_cap_shingles | survey_receive / issue_materials_shingle_details / component transfer ledger (issue_starter_cap_shingles) | actual_issue_starter_cap_shingles = sum(issue_starter_cap_shingles_actual_quantity_kg) over unique issue_starter_cap_shingles_event_id matched to material_id, state_id, recipient and custody evidence. Independently measured issues match actual_starter_cap_shingles at the receiving node. Reconcile the material-specific gross receipt to issues, receipt waste, usable U/X and exclusive remaining work-in-progress/other fates; do not generate an issue from an unexplained difference. | raw:issue_starter_cap_shingles_actual_quantity_kg; raw:issue_starter_cap_shingles_event_id; raw:issue_starter_cap_shingles_material_id; raw:issue_starter_cap_shingles_state_id; raw:issue_starter_cap_shingles_custodian_from; raw:issue_starter_cap_shingles_custodian_to; raw:issue_starter_cap_shingles_receiving_node; raw:issue_starter_cap_shingles_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_starter_cap_shingles |  |
| calc_receive_roof_nails | survey_receive / receive_roof_nails | actual_receive_roof_nails = receive_roof_nails_opening + receive_roof_nails_external_receipts - receive_roof_nails_closing_intact_all_locations, converted to kg before addition using receive_roof_nails_exact_mass_bridge for the same material ID/current state. Closing is only unissued intact stock, each item once at its recorded custody sublocation. Do not subtract actual receipt waste or positive usable exits; they are included in this gross draw. The output is the unnormalized physical numerator. | raw:receive_roof_nails_opening; raw:receive_roof_nails_external_receipts; raw:receive_roof_nails_closing_intact_all_locations; raw:receive_roof_nails_current_state; raw:receive_roof_nails_native_unit; raw:receive_roof_nails_exact_mass_bridge; raw:receive_roof_nails_material_id; raw:receive_roof_nails_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_roof_nails |  |
| calc_issue_roof_nails | survey_receive / issue_materials_shingle_details / component transfer ledger (issue_roof_nails) | actual_issue_roof_nails = sum(issue_roof_nails_actual_quantity_kg) over unique issue_roof_nails_event_id matched to material_id, state_id, recipient and custody evidence. Independently measured issues match actual_roof_nails at the receiving node. Reconcile the material-specific gross receipt to issues, receipt waste, usable U/X and exclusive remaining work-in-progress/other fates; do not generate an issue from an unexplained difference. | raw:issue_roof_nails_actual_quantity_kg; raw:issue_roof_nails_event_id; raw:issue_roof_nails_material_id; raw:issue_roof_nails_state_id; raw:issue_roof_nails_custodian_from; raw:issue_roof_nails_custodian_to; raw:issue_roof_nails_receiving_node; raw:issue_roof_nails_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_roof_nails |  |
| calc_receive_flashing_vent_components | survey_receive / receive_flashing_vent_components | actual_receive_flashing_vent_components = receive_flashing_vent_components_opening + receive_flashing_vent_components_external_receipts - receive_flashing_vent_components_closing_intact_all_locations, converted to kg before addition using receive_flashing_vent_components_exact_mass_bridge for the same material ID/current state. Closing is only unissued intact stock, each item once at its recorded custody sublocation. Do not subtract actual receipt waste or positive usable exits; they are included in this gross draw. The output is the unnormalized physical numerator. | raw:receive_flashing_vent_components_opening; raw:receive_flashing_vent_components_external_receipts; raw:receive_flashing_vent_components_closing_intact_all_locations; raw:receive_flashing_vent_components_current_state; raw:receive_flashing_vent_components_native_unit; raw:receive_flashing_vent_components_exact_mass_bridge; raw:receive_flashing_vent_components_material_id; raw:receive_flashing_vent_components_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_flashing_vent_components |  |
| calc_issue_flashing_vent_components | survey_receive / issue_materials_shingle_details / component transfer ledger (issue_flashing_vent_components) | actual_issue_flashing_vent_components = sum(issue_flashing_vent_components_actual_quantity_kg) over unique issue_flashing_vent_components_event_id matched to material_id, state_id, recipient and custody evidence. Independently measured issues match actual_flashing_vent_components at the receiving node. Reconcile the material-specific gross receipt to issues, receipt waste, usable U/X and exclusive remaining work-in-progress/other fates; do not generate an issue from an unexplained difference. | raw:issue_flashing_vent_components_actual_quantity_kg; raw:issue_flashing_vent_components_event_id; raw:issue_flashing_vent_components_material_id; raw:issue_flashing_vent_components_state_id; raw:issue_flashing_vent_components_custodian_from; raw:issue_flashing_vent_components_custodian_to; raw:issue_flashing_vent_components_receiving_node; raw:issue_flashing_vent_components_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_flashing_vent_components |  |
| calc_receive_asphalt_cement | survey_receive / receive_asphalt_cement | actual_receive_asphalt_cement = receive_asphalt_cement_opening + receive_asphalt_cement_external_receipts - receive_asphalt_cement_closing_intact_all_locations, converted to kg before addition using receive_asphalt_cement_exact_mass_bridge for the same material ID/current state. Closing is only unissued intact stock, each item once at its recorded custody sublocation. Do not subtract actual receipt waste or positive usable exits; they are included in this gross draw. The output is the unnormalized physical numerator. | raw:receive_asphalt_cement_opening; raw:receive_asphalt_cement_external_receipts; raw:receive_asphalt_cement_closing_intact_all_locations; raw:receive_asphalt_cement_current_state; raw:receive_asphalt_cement_native_unit; raw:receive_asphalt_cement_exact_mass_bridge; raw:receive_asphalt_cement_material_id; raw:receive_asphalt_cement_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_asphalt_cement |  |
| calc_issue_asphalt_cement | survey_receive / issue_materials_shingle_details / component transfer ledger (issue_asphalt_cement) | actual_issue_asphalt_cement = sum(issue_asphalt_cement_actual_quantity_kg) over unique issue_asphalt_cement_event_id matched to material_id, state_id, recipient and custody evidence. Independently measured issues match actual_asphalt_cement at the receiving node. Reconcile the material-specific gross receipt to issues, receipt waste, usable U/X and exclusive remaining work-in-progress/other fates; do not generate an issue from an unexplained difference. | raw:issue_asphalt_cement_actual_quantity_kg; raw:issue_asphalt_cement_event_id; raw:issue_asphalt_cement_material_id; raw:issue_asphalt_cement_state_id; raw:issue_asphalt_cement_custodian_from; raw:issue_asphalt_cement_custodian_to; raw:issue_asphalt_cement_receiving_node; raw:issue_asphalt_cement_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_asphalt_cement |  |
| calc_receive_accessory_finish | survey_receive / receive_accessory_finish | actual_receive_accessory_finish = receive_accessory_finish_opening + receive_accessory_finish_external_receipts - receive_accessory_finish_closing_intact_all_locations, converted to kg before addition using receive_accessory_finish_exact_mass_bridge for the same material ID/current state. Closing is only unissued intact stock, each item once at its recorded custody sublocation. Do not subtract actual receipt waste or positive usable exits; they are included in this gross draw. The output is the unnormalized physical numerator. | raw:receive_accessory_finish_opening; raw:receive_accessory_finish_external_receipts; raw:receive_accessory_finish_closing_intact_all_locations; raw:receive_accessory_finish_current_state; raw:receive_accessory_finish_native_unit; raw:receive_accessory_finish_exact_mass_bridge; raw:receive_accessory_finish_material_id; raw:receive_accessory_finish_sublocation_stock_evidence; cp:cp_survey_receive; symbol:A | actual_receive_accessory_finish |  |
| calc_issue_accessory_finish | survey_receive / issue_accessory_finish | actual_issue_accessory_finish = sum(issue_accessory_finish_actual_quantity_kg) over unique issue_accessory_finish_event_id matched to material_id, state_id, recipient and custody evidence. Independently measured issues match actual_accessory_finish at the receiving node. Reconcile the material-specific gross receipt to issues, receipt waste, usable U/X and exclusive remaining work-in-progress/other fates; do not generate an issue from an unexplained difference. | raw:issue_accessory_finish_actual_quantity_kg; raw:issue_accessory_finish_event_id; raw:issue_accessory_finish_material_id; raw:issue_accessory_finish_state_id; raw:issue_accessory_finish_custodian_from; raw:issue_accessory_finish_custodian_to; raw:issue_accessory_finish_receiving_node; raw:issue_accessory_finish_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_issue_accessory_finish |  |
| calc_physical_interface_release | survey_receive / observational acceptance record (physical_interface_release) | actual_physical_interface_release = unique measured physical_interface_release_actual_geometry in m2 for matched surface_panel_ids, upstream_state and handoff_evidence. This observational geometry is not kg, not a new material burden and not automatically final A; the sending and receiving interface measurements must reconcile. | raw:physical_interface_release_actual_geometry; raw:physical_interface_release_surface_panel_ids; raw:physical_interface_release_upstream_state; raw:physical_interface_release_handoff_evidence; cp:cp_survey_receive; symbol:A | actual_physical_interface_release |  |
| calc_physical_interface_construction_feed | underlay_edges / observational acceptance record (physical_interface_construction_feed) | actual_physical_interface_construction_feed = unique measured physical_interface_construction_feed_actual_geometry in m2 for matched surface_panel_ids, upstream_state and handoff_evidence. This observational geometry is not kg, not a new material burden and not automatically final A; the sending and receiving interface measurements must reconcile. | raw:physical_interface_construction_feed_actual_geometry; raw:physical_interface_construction_feed_surface_panel_ids; raw:physical_interface_construction_feed_upstream_state; raw:physical_interface_construction_feed_handoff_evidence; cp:cp_underlay_edges; symbol:A | actual_physical_interface_construction_feed |  |
| calc_issue_packaging_underlay_edges | survey_receive / issue_packaging_underlay_edges | actual_issue_packaging_underlay_edges = sum(issue_packaging_underlay_edges_actual_mass_kg) for unique custody_event_id and packaging item/composition/state accompanying actual material issues to underlay_edges. Reconcile receipt packaging gross with all packaging issues, receipt waste, positive usable exits and exclusive remaining fates; do not infer this issue from a missing balance. | raw:issue_packaging_underlay_edges_actual_mass_kg; raw:issue_packaging_underlay_edges_material_composition; raw:issue_packaging_underlay_edges_item_id; raw:issue_packaging_underlay_edges_current_state; raw:issue_packaging_underlay_edges_custody_event_id; raw:issue_packaging_underlay_edges_recipient_node; raw:issue_packaging_underlay_edges_upstream_dataset_boundary_evidence; cp:cp_survey_receive; symbol:A | actual_issue_packaging_underlay_edges |  |
| calc_underlay_edges_packaging_feed | underlay_edges / underlay_edges_packaging_feed | actual_underlay_edges_packaging_feed = sum(underlay_edges_packaging_feed_actual_mass_kg) on unique source_issue_id/custody_event_id matched to issue_packaging_underlay_edges. Verify composition and state. This physical internal numerator has no additional packaging production burden; downstream waste/usable exit/retention/WIP cannot duplicate an upstream fate. | raw:underlay_edges_packaging_feed_actual_mass_kg; raw:underlay_edges_packaging_feed_source_issue_id; raw:underlay_edges_packaging_feed_material_composition; raw:underlay_edges_packaging_feed_current_state; raw:underlay_edges_packaging_feed_custody_event_id; cp:cp_underlay_edges; symbol:A | actual_underlay_edges_packaging_feed |  |
| calc_issue_packaging_shingle_details | survey_receive / issue_packaging_shingle_details | actual_issue_packaging_shingle_details = sum(issue_packaging_shingle_details_actual_mass_kg) for unique custody_event_id and packaging item/composition/state accompanying actual material issues to shingle_details. Reconcile receipt packaging gross with all packaging issues, receipt waste, positive usable exits and exclusive remaining fates; do not infer this issue from a missing balance. | raw:issue_packaging_shingle_details_actual_mass_kg; raw:issue_packaging_shingle_details_material_composition; raw:issue_packaging_shingle_details_item_id; raw:issue_packaging_shingle_details_current_state; raw:issue_packaging_shingle_details_custody_event_id; raw:issue_packaging_shingle_details_recipient_node; raw:issue_packaging_shingle_details_upstream_dataset_boundary_evidence; cp:cp_survey_receive; symbol:A | actual_issue_packaging_shingle_details |  |
| calc_shingle_details_packaging_feed | shingle_details / shingle_details_packaging_feed | actual_shingle_details_packaging_feed = sum(shingle_details_packaging_feed_actual_mass_kg) on unique source_issue_id/custody_event_id matched to issue_packaging_shingle_details. Verify composition and state. This physical internal numerator has no additional packaging production burden; downstream waste/usable exit/retention/WIP cannot duplicate an upstream fate. | raw:shingle_details_packaging_feed_actual_mass_kg; raw:shingle_details_packaging_feed_source_issue_id; raw:shingle_details_packaging_feed_material_composition; raw:shingle_details_packaging_feed_current_state; raw:shingle_details_packaging_feed_custody_event_id; cp:cp_shingle_details; symbol:A | actual_shingle_details_packaging_feed |  |
| calc_issue_packaging_finish_accept | survey_receive / issue_packaging_finish_accept | actual_issue_packaging_finish_accept = sum(issue_packaging_finish_accept_actual_mass_kg) for unique custody_event_id and packaging item/composition/state accompanying actual material issues to finish_accept. Reconcile receipt packaging gross with all packaging issues, receipt waste, positive usable exits and exclusive remaining fates; do not infer this issue from a missing balance. | raw:issue_packaging_finish_accept_actual_mass_kg; raw:issue_packaging_finish_accept_material_composition; raw:issue_packaging_finish_accept_item_id; raw:issue_packaging_finish_accept_current_state; raw:issue_packaging_finish_accept_custody_event_id; raw:issue_packaging_finish_accept_recipient_node; raw:issue_packaging_finish_accept_upstream_dataset_boundary_evidence; cp:cp_survey_receive; symbol:A | actual_issue_packaging_finish_accept |  |
| calc_finish_accept_packaging_feed | finish_accept / finish_accept_packaging_feed | actual_finish_accept_packaging_feed = sum(finish_accept_packaging_feed_actual_mass_kg) on unique source_issue_id/custody_event_id matched to issue_packaging_finish_accept. Verify composition and state. This physical internal numerator has no additional packaging production burden; downstream waste/usable exit/retention/WIP cannot duplicate an upstream fate. | raw:finish_accept_packaging_feed_actual_mass_kg; raw:finish_accept_packaging_feed_source_issue_id; raw:finish_accept_packaging_feed_material_composition; raw:finish_accept_packaging_feed_current_state; raw:finish_accept_packaging_feed_custody_event_id; cp:cp_finish_accept; symbol:A | actual_finish_accept_packaging_feed |  |
| calc_survey_receive_material_closure | survey_receive / survey_receive_material_closure | calculated_survey_receive_mass_balance_gap_kg = survey_receive_opening_processed_wip_mass_kg + survey_receive_incoming_material_mass_kg + survey_receive_incoming_transfer_mass_kg - (survey_receive_accepted_retained_mass_kg + survey_receive_next_handoff_mass_kg + survey_receive_closing_processed_wip_mass_kg + survey_receive_other_exclusive_transfer_mass_kg + actual_receive_reject + actual_receive_packaging_waste + actual_receive_unused_return), all terms physical kg before any normalization. Reconcile survey_receive_incoming_material_mass_kg to actual_receive_underlay + actual_receive_edge_metal + actual_receive_underlay_fixings + actual_receive_field_shingles + actual_receive_starter_cap_shingles + actual_receive_roof_nails + actual_receive_flashing_vent_components + actual_receive_asphalt_cement + actual_receive_accessory_finish + actual_receive_packaging (nine staged component gross draws plus packaging), each physical material/composite/packaging portion once. Reconcile survey_receive_next_handoff_mass_kg to actual_issue_underlay + actual_issue_edge_metal + actual_issue_underlay_fixings + actual_issue_field_shingles + actual_issue_starter_cap_shingles + actual_issue_roof_nails + actual_issue_flashing_vent_components + actual_issue_asphalt_cement + actual_issue_accessory_finish + actual_issue_packaging_underlay_edges + actual_issue_packaging_shingle_details + actual_issue_packaging_finish_accept from measured actual source issues, not a residual. Each nine-material ledger and the packaging ledger separately reconciles to its actual issues, material-resolved receipt waste, usable U/X and exclusive remaining WIP/other fate. survey_receive_incoming_transfer_mass_kg is only an independently evidenced real material transfer not already inside any gross draw or opening WIP; for the current ordinary receipt route record its evidenced absence. The dry timber-deck readiness measurements in the node protocols are observational Area, not inventory cards, and contribute no kg. The receipt node has no installed accepted retention; survey_receive_accepted_retained_mass_kg and any assembly-mass fields require evidenced nonoccurrence here, never inferred roof/deck mass. For assembly_mass_view choose either the independently measured whole covering composite or the complete measured constituent/component manifest, never whole plus constituents; reconcile the chosen actual current-state view with component_mass_manifest_evidence and kg_bridge_evidence. Opening processed WIP excludes current incoming quantities already counted. The exclusive_fate_register_evidence assigns each physical portion to exactly one of accepted retained material, onward assembly/material handoff, closing processed WIP, other actual transfer, waste, usable U/X or uncaptured direct release. Installed-but-unaccepted mass is a disclosed subset of closing processed WIP, not another subtraction. Wastewater includes its actual whole liquid mass; water fractions are used only in the separate water balance and cannot be added again here. Formulation water already inside a formulation/composite is not a second material input. Captured residues are waste, not also releases. Other_exclusive_transfer excludes every named issue/handoff, usable U/X and waste. Exclude power kWh, service h, documents and all observational Area from the kg sum. Reconcile this signed calculated diagnostic to survey_receive_mass_balance_gap_kg and measured closure uncertainty; an unexplained positive/negative/unknown gap requires investigation and remains incomplete, never an inferred release, issue, retained quantity or negative credit. The calculation creates no exchange/card and is not divided by A for physical closure. | raw:survey_receive_opening_processed_wip_mass_kg; raw:survey_receive_incoming_material_mass_kg; raw:survey_receive_incoming_transfer_mass_kg; raw:survey_receive_accepted_retained_mass_kg; raw:survey_receive_next_handoff_mass_kg; raw:survey_receive_closing_processed_wip_mass_kg; raw:survey_receive_other_exclusive_transfer_mass_kg; raw:survey_receive_installed_not_accepted_mass_kg; raw:survey_receive_mass_balance_gap_kg; raw:survey_receive_kg_bridge_evidence; raw:survey_receive_complete_component_schedule_evidence; raw:survey_receive_mass_closure_evidence; raw:survey_receive_measurement_uncertainty_evidence; raw:survey_receive_incoming_assembly_component_mass_kg; raw:survey_receive_outgoing_assembly_component_mass_kg; raw:survey_receive_assembly_mass_view; raw:survey_receive_component_mass_manifest_evidence; raw:survey_receive_exclusive_fate_register_evidence; cp:cp_survey_receive; calc:actual_receive_underlay; calc:actual_receive_edge_metal; calc:actual_receive_underlay_fixings; calc:actual_receive_field_shingles; calc:actual_receive_starter_cap_shingles; calc:actual_receive_roof_nails; calc:actual_receive_flashing_vent_components; calc:actual_receive_asphalt_cement; calc:actual_receive_accessory_finish; calc:actual_receive_packaging; calc:actual_issue_underlay; calc:actual_issue_edge_metal; calc:actual_issue_underlay_fixings; calc:actual_issue_field_shingles; calc:actual_issue_starter_cap_shingles; calc:actual_issue_roof_nails; calc:actual_issue_flashing_vent_components; calc:actual_issue_asphalt_cement; calc:actual_issue_accessory_finish; calc:actual_issue_packaging_underlay_edges; calc:actual_issue_packaging_shingle_details; calc:actual_issue_packaging_finish_accept; calc:actual_receive_reject; calc:actual_receive_packaging_waste; calc:actual_receive_unused_return | calculated_survey_receive_mass_balance_gap_kg |  |
| calc_underlay_edges_material_closure | underlay_edges / underlay_edges_material_closure | calculated_underlay_edges_mass_balance_gap_kg = underlay_edges_opening_processed_wip_mass_kg + underlay_edges_incoming_material_mass_kg + underlay_edges_incoming_transfer_mass_kg - (underlay_edges_accepted_retained_mass_kg + underlay_edges_next_handoff_mass_kg + underlay_edges_closing_processed_wip_mass_kg + underlay_edges_other_exclusive_transfer_mass_kg + actual_underlay_waste + actual_underlay_unused_return + actual_underlay_direct_release), all terms physical kg before any normalization. Reconcile underlay_edges_incoming_material_mass_kg to actual_underlay + actual_edge_metal + actual_underlay_fixings + actual_underlay_edges_packaging_feed. underlay_edges_incoming_transfer_mass_kg equals underlay_edges_incoming_assembly_component_mass_kg only for actual incorporated covering components received in this node's surface state, independently measured by component manifest. In the current bare accepted timber-deck release that incoming covering-component mass has evidenced nonoccurrence; exclude the upstream deck itself. underlay_edges_next_handoff_mass_kg equals measured underlay_edges_outgoing_assembly_component_mass_kg for the underlaid/edge-detailed covering passed with underlay_ready_roof. Neither underlay_ready_roof Area nor the protocol observation actual_physical_interface_construction_feed supplies kg through an invented kg/m2 factor. Retained underlay/edge components travelling in that assembly belong exclusively to next_handoff, not also accepted_retained. For assembly_mass_view choose either the independently measured whole covering composite or the complete measured constituent/component manifest, never whole plus constituents; reconcile the chosen actual current-state view with component_mass_manifest_evidence and kg_bridge_evidence. Opening processed WIP excludes current incoming quantities already counted. The exclusive_fate_register_evidence assigns each physical portion to exactly one of accepted retained material, onward assembly/material handoff, closing processed WIP, other actual transfer, waste, usable U/X or uncaptured direct release. Installed-but-unaccepted mass is a disclosed subset of closing processed WIP, not another subtraction. Wastewater includes its actual whole liquid mass; water fractions are used only in the separate water balance and cannot be added again here. Formulation water already inside a formulation/composite is not a second material input. Captured residues are waste, not also releases. Other_exclusive_transfer excludes every named issue/handoff, usable U/X and waste. Exclude power kWh, service h, documents and all observational Area from the kg sum. Reconcile this signed calculated diagnostic to underlay_edges_mass_balance_gap_kg and measured closure uncertainty; an unexplained positive/negative/unknown gap requires investigation and remains incomplete, never an inferred release, issue, retained quantity or negative credit. The calculation creates no exchange/card and is not divided by A for physical closure. | raw:underlay_edges_opening_processed_wip_mass_kg; raw:underlay_edges_incoming_material_mass_kg; raw:underlay_edges_incoming_transfer_mass_kg; raw:underlay_edges_accepted_retained_mass_kg; raw:underlay_edges_next_handoff_mass_kg; raw:underlay_edges_closing_processed_wip_mass_kg; raw:underlay_edges_other_exclusive_transfer_mass_kg; raw:underlay_edges_installed_not_accepted_mass_kg; raw:underlay_edges_mass_balance_gap_kg; raw:underlay_edges_kg_bridge_evidence; raw:underlay_edges_complete_component_schedule_evidence; raw:underlay_edges_mass_closure_evidence; raw:underlay_edges_measurement_uncertainty_evidence; raw:underlay_edges_incoming_assembly_component_mass_kg; raw:underlay_edges_outgoing_assembly_component_mass_kg; raw:underlay_edges_assembly_mass_view; raw:underlay_edges_component_mass_manifest_evidence; raw:underlay_edges_exclusive_fate_register_evidence; cp:cp_underlay_edges; calc:actual_underlay; calc:actual_edge_metal; calc:actual_underlay_fixings; calc:actual_underlay_edges_packaging_feed; calc:actual_underlay_waste; calc:actual_underlay_unused_return; calc:actual_underlay_direct_release | calculated_underlay_edges_mass_balance_gap_kg |  |
| calc_shingle_details_material_closure | shingle_details / shingle_details_material_closure | calculated_shingle_details_mass_balance_gap_kg = shingle_details_opening_processed_wip_mass_kg + shingle_details_incoming_material_mass_kg + shingle_details_incoming_transfer_mass_kg - (shingle_details_accepted_retained_mass_kg + shingle_details_next_handoff_mass_kg + shingle_details_closing_processed_wip_mass_kg + shingle_details_other_exclusive_transfer_mass_kg + actual_shingle_waste + actual_shingle_unused_return + actual_shingle_direct_release), all terms physical kg before any normalization. Reconcile shingle_details_incoming_material_mass_kg to actual_field_shingles + actual_starter_cap_shingles + actual_roof_nails + actual_flashing_vent_components + actual_asphalt_cement + actual_shingle_details_packaging_feed. shingle_details_incoming_transfer_mass_kg equals independently measured shingle_details_incoming_assembly_component_mass_kg in the underlaid covering received with roof_feed, matched to the underlay node's outgoing component manifest after its actual losses. shingle_details_next_handoff_mass_kg equals independently measured shingle_details_outgoing_assembly_component_mass_kg in installed_roof. Preserve actual component additions and fates; caps transformed from field stock are not additional purchases. roof_feed/installed_roof Area is observational geometry, never a kg input or substitute for measured component mass. Installed components travelling onward belong only to next_handoff, not also accepted_retained. For assembly_mass_view choose either the independently measured whole covering composite or the complete measured constituent/component manifest, never whole plus constituents; reconcile the chosen actual current-state view with component_mass_manifest_evidence and kg_bridge_evidence. Opening processed WIP excludes current incoming quantities already counted. The exclusive_fate_register_evidence assigns each physical portion to exactly one of accepted retained material, onward assembly/material handoff, closing processed WIP, other actual transfer, waste, usable U/X or uncaptured direct release. Installed-but-unaccepted mass is a disclosed subset of closing processed WIP, not another subtraction. Wastewater includes its actual whole liquid mass; water fractions are used only in the separate water balance and cannot be added again here. Formulation water already inside a formulation/composite is not a second material input. Captured residues are waste, not also releases. Other_exclusive_transfer excludes every named issue/handoff, usable U/X and waste. Exclude power kWh, service h, documents and all observational Area from the kg sum. Reconcile this signed calculated diagnostic to shingle_details_mass_balance_gap_kg and measured closure uncertainty; an unexplained positive/negative/unknown gap requires investigation and remains incomplete, never an inferred release, issue, retained quantity or negative credit. The calculation creates no exchange/card and is not divided by A for physical closure. | raw:shingle_details_opening_processed_wip_mass_kg; raw:shingle_details_incoming_material_mass_kg; raw:shingle_details_incoming_transfer_mass_kg; raw:shingle_details_accepted_retained_mass_kg; raw:shingle_details_next_handoff_mass_kg; raw:shingle_details_closing_processed_wip_mass_kg; raw:shingle_details_other_exclusive_transfer_mass_kg; raw:shingle_details_installed_not_accepted_mass_kg; raw:shingle_details_mass_balance_gap_kg; raw:shingle_details_kg_bridge_evidence; raw:shingle_details_complete_component_schedule_evidence; raw:shingle_details_mass_closure_evidence; raw:shingle_details_measurement_uncertainty_evidence; raw:shingle_details_incoming_assembly_component_mass_kg; raw:shingle_details_outgoing_assembly_component_mass_kg; raw:shingle_details_assembly_mass_view; raw:shingle_details_component_mass_manifest_evidence; raw:shingle_details_exclusive_fate_register_evidence; cp:cp_shingle_details; calc:actual_field_shingles; calc:actual_starter_cap_shingles; calc:actual_roof_nails; calc:actual_flashing_vent_components; calc:actual_asphalt_cement; calc:actual_shingle_details_packaging_feed; calc:actual_shingle_waste; calc:actual_shingle_unused_return; calc:actual_shingle_direct_release | calculated_shingle_details_mass_balance_gap_kg |  |
| calc_finish_accept_material_closure | finish_accept / finish_accept_material_closure | calculated_finish_accept_mass_balance_gap_kg = finish_accept_opening_processed_wip_mass_kg + finish_accept_incoming_material_mass_kg + finish_accept_incoming_transfer_mass_kg - (finish_accept_accepted_retained_mass_kg + finish_accept_next_handoff_mass_kg + finish_accept_closing_processed_wip_mass_kg + finish_accept_other_exclusive_transfer_mass_kg + actual_finish_waste + actual_finish_wastewater + actual_finish_unused_return + actual_finish_water_vapour + actual_finish_other_release), all terms physical kg before any normalization. Reconcile finish_accept_incoming_material_mass_kg to actual_accessory_finish + actual_finish_water + actual_finish_accept_packaging_feed. finish_accept_incoming_transfer_mass_kg equals independently measured finish_accept_incoming_assembly_component_mass_kg in the installed covering received with finish_roof_feed, matched to the shingling node's outgoing component manifest after its actual losses. finish_accept_accepted_retained_mass_kg is the actual component/composite mass remaining in the finally accepted covering, including exclusive retained water. It is a closure fate only, not an additional customer-handover mass exchange beside accepted_roof_service Area. Ordinary final acceptance has no onward internal assembly handoff: finish_accept_next_handoff_mass_kg has evidenced nonoccurrence; any actual nonfinal onward transfer must have an exclusive documented disposition and must not also be accepted retention. finish_roof_feed and accepted_roof_service Area never supply kg. For assembly_mass_view choose either the independently measured whole covering composite or the complete measured constituent/component manifest, never whole plus constituents; reconcile the chosen actual current-state view with component_mass_manifest_evidence and kg_bridge_evidence. Opening processed WIP excludes current incoming quantities already counted. The exclusive_fate_register_evidence assigns each physical portion to exactly one of accepted retained material, onward assembly/material handoff, closing processed WIP, other actual transfer, waste, usable U/X or uncaptured direct release. Installed-but-unaccepted mass is a disclosed subset of closing processed WIP, not another subtraction. Wastewater includes its actual whole liquid mass; water fractions are used only in the separate water balance and cannot be added again here. Formulation water already inside a formulation/composite is not a second material input. Captured residues are waste, not also releases. Other_exclusive_transfer excludes every named issue/handoff, usable U/X and waste. Exclude power kWh, service h, documents and all observational Area from the kg sum. Reconcile this signed calculated diagnostic to finish_accept_mass_balance_gap_kg and measured closure uncertainty; an unexplained positive/negative/unknown gap requires investigation and remains incomplete, never an inferred release, issue, retained quantity or negative credit. The calculation creates no exchange/card and is not divided by A for physical closure. | raw:finish_accept_opening_processed_wip_mass_kg; raw:finish_accept_incoming_material_mass_kg; raw:finish_accept_incoming_transfer_mass_kg; raw:finish_accept_accepted_retained_mass_kg; raw:finish_accept_next_handoff_mass_kg; raw:finish_accept_closing_processed_wip_mass_kg; raw:finish_accept_other_exclusive_transfer_mass_kg; raw:finish_accept_installed_not_accepted_mass_kg; raw:finish_accept_mass_balance_gap_kg; raw:finish_accept_kg_bridge_evidence; raw:finish_accept_complete_component_schedule_evidence; raw:finish_accept_mass_closure_evidence; raw:finish_accept_measurement_uncertainty_evidence; raw:finish_accept_incoming_assembly_component_mass_kg; raw:finish_accept_outgoing_assembly_component_mass_kg; raw:finish_accept_assembly_mass_view; raw:finish_accept_component_mass_manifest_evidence; raw:finish_accept_exclusive_fate_register_evidence; cp:cp_finish_accept; calc:actual_accessory_finish; calc:actual_finish_water; calc:actual_finish_accept_packaging_feed; calc:actual_finish_waste; calc:actual_finish_wastewater; calc:actual_finish_unused_return; calc:actual_finish_water_vapour; calc:actual_finish_other_release | calculated_finish_accept_mass_balance_gap_kg |  |
| calc_issue_materials_underlay_edges | survey_receive / issue_materials_underlay_edges | actual_issue_materials_underlay_edges is defined separately for each actual material/SKU, current state and transfer event as its independently measured, nonoverlapping component quantity in actual_issue_underlay, actual_issue_edge_metal, actual_issue_underlay_fixings. Expand distinct concrete materials into their own product exchanges; a sum across materials is not one fixed product identity. Normalize each concrete exchange's own measured kg by A once and match the recipient input by material, state, event and custody. Original component ledgers independently retain acquisition, waste, usable exits and WIP mass closure. | calc:actual_issue_underlay; calc:actual_issue_edge_metal; calc:actual_issue_underlay_fixings; cp:cp_survey_receive; symbol:A | actual_issue_materials_underlay_edges |  |
| calc_issue_materials_shingle_details | survey_receive / issue_materials_shingle_details | actual_issue_materials_shingle_details is defined separately for each actual material/SKU, current state and transfer event as its independently measured, nonoverlapping component quantity in actual_issue_field_shingles, actual_issue_starter_cap_shingles, actual_issue_roof_nails, actual_issue_flashing_vent_components, actual_issue_asphalt_cement. Expand distinct concrete materials into their own product exchanges; a sum across materials is not one fixed product identity. Normalize each concrete exchange's own measured kg by A once and match the recipient input by material, state, event and custody. Original component ledgers independently retain acquisition, waste, usable exits and WIP mass closure. | calc:actual_issue_field_shingles; calc:actual_issue_starter_cap_shingles; calc:actual_issue_roof_nails; calc:actual_issue_flashing_vent_components; calc:actual_issue_asphalt_cement; cp:cp_survey_receive; symbol:A | actual_issue_materials_shingle_details |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_instructions | Actual route and every component | Retain the actual installed supplier/SKU instruction revision and project design, deck acceptance and named interface ownership. Historical route references do not provide current universal prescriptions. | Actual instruction/design package, signed release and complete component schedule; gaf-three-tab-route; gaf-fiberglass-physical-state |
| quality_identity | Each actual concrete exchange | Resolve material, composite versus constituent view, physical state, provider/geography/voltage or waste destination. Direct releases require actual substance/particle basis, medium and direction. A useful semantic umbrella is not a verified concrete final exchange. | Supplier IDs/state/formulation, waste custody tickets and substance sampling evidence. |
| quality_geometry | Final and internal area states | Keep distinct measured surfaces/state IDs, openings subtracted once and actual accepted gates. No plan-area substitution, repeated-pass output or automatic internal A/A. | As-built geometry, unique surface registry and matched handoff signatures. |
| quality_stock | Receipt, issues, usable exits and packaging | Reconcile gross opening/receipts/closing by exact material and state at all actual custody sublocations. Unissued stock, issued unused exits, waste, retained mass and processed WIP are mutually exclusive. Packaging downstream requires an entering custody link. | Stock counts/scales, unique issue/feed records, return and waste tickets, supplier dataset boundary. |
| quality_mass_water | All real nodes and actual periods | Close material and water pools on compatible units with current-state bridges and uncertainty. Do not include observational area in kg balances. Incoming retained assembly mass and formulation/received water must be measured rather than guessed from area. Gaps remain disclosed; no emission by difference without validated fate evidence. | Node component/water-fate manifests, independent quantities/fractions, mass/water closure and uncertainty records. |
| quality_rework | Rejected, removed, corrected and WIP states | Record defect, producing node, disposition, directed transfer and actual repeated inputs/service. Corrected electronic records retain lineage. Unresolved rejected or installed-unaccepted work cannot enlarge accepted A. | Timestamped defect/disposition and rework logs, receiving custody and final gate. |
| quality_periods | All lot and reporting periods | Provide complete event dates, stock/WIP movements and period-specific input/asset/output attribution through actual acceptance, including waiting/protection and termination/replacement decisions. | Period/phase register and signed attribution decisions; missing intervals remain explicit gaps. |
| quality_shared | All shared power and service consumers | Provide meter topology/converted deltas or actual billed service periods, all inside-master direct assignments, complete eligible consumers and evidence-backed weights only where residual allocation is needed. | Calibrated meters/topology, provider records, consumer register and assignment reconciliation. |
| quality_estimates | Each individual Range | Keep all non-reference screens provisional reasoned_estimate; no external quantitative support is claimed for them. They are not recipes or default activity data. Replace with independent reviewed evidence and do not validate a batch using a range derived from its own maximum. | Separate reviewed reference sample or documented measurement/factor uncertainty; investigation records for out-of-screen values. |
| quality_completeness | Dataset and boundary disclosure | Report unknowns, actual nonoccurrence evidence, performed/skipped checks and unfinished gates. Zero, absence and unknown are different states; omitted actual work requires scope correction. | Auditable field completeness/gap register and signed boundary/acceptance review. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | Site/lot and actual work | Confirm dry compatible accepted timber deck and actual three-tab mechanical-nailed route. Reassess and inventory actual deck/structural/cricket/chimney/counterflashing/vent work beyond the released external interface; reject hidden exclusions. | gaf-three-tab-route |
| validate_components | Assembly and joining | Reconcile the complete actual component schedule, required layers and junction/vent ownership with receipt, measured issues, same-state feeds, installed retention and real waste/unused/WIP fates. Verify actual instruction/design acceptance requirements without universal counts or performance defaults. | gaf-three-tab-route; gaf-fiberglass-physical-state |
| validate_handoffs | All deck/material/assembly/packaging transfers | Compare both sides by event, material or surface ID, current state, quantity/unit, period and custodian. Keep physical observational interfaces separate from design evidence. Never fix internal feeds to one or create additional external production at downstream nodes. |  |
| validate_final_area | accepted_roof_service | Require A > 0 from unique final accepted sloped geometry, openings excluded once and all gate evidence present. Count A/A exactly once; exclude incomplete seal/junction/vent conditions, unresolved rejects and unaccepted WIP. Do not add laps, cuts or rework area. | gaf-three-tab-route |
| validate_receipt_exit | Gross stock and positive U/X | Check G = opening + receipts - intact unissued closing once with exact custody/sublocation. Match all gross to measured issues, actual receipt waste, usable exits and exclusive fates. No second exit subtraction, negative credit, missing downstream entry or duplicate packaging coverage. |  |
| validate_rework | Each rejected/off-spec event | Require producing node/state, disposition and matched directed rework/return or real waste/recovery/usable boundary exit. Retain all repeated operations and original material burdens; no unresolved rejected area counted as accepted output. |  |
| validate_finishing | finish_accept | Verify actual parent-to-finished handoff, specified/actual finish occurrence, supplied materials/services and exclusive residues/releases. Record seal waiting and actual protection loads, with no assumed paint, fixed seal time or invented heating. | gaf-three-tab-route |
| validate_mass_water | All nodes and finish water fates | Check exact native-to-kg bridges and exclusive material/component water pools, retaining actual incoming assembly mass/water. Water gross excludes intact stock once; U/X, retained bound/free, handoff, waste water, direct liquid, closing processed WIP and other transfers cannot overlap. A residual or negative balance is a gap, never automatic H2O vapour or another emission. |  |
| validate_release | Each direct environmental exchange | Require actual substance/particle basis, direction, medium, quantity and capture evidence. Separate captured waste and liquid custodian transfer from uncaptured environment releases; H2O-to-air identity alone supplies neither occurrence nor quantity. |  |
| validate_power_service | Every shared asset, node and period | Identify provider/asset and actual period/topology, all consuming nodes/lots/periods and reviewed assignment basis. Reconcile converted meter/billed totals once. Subtract inside-master direct only; zero residual needs no weights, positive residual needs complete positive eligible denominator. Negative/unknown closure blocks attribution. No default shift/labor/lifetime proxy. |  |
| validate_periods | Full lot through acceptance | Verify every actual period/phase/event and stock/WIP carry-forward with period-specific attribution. Investigate gaps, unresolved replacements/termination and duplicate burden assignment; final unique A appears once. |  |
| validate_dimensions | Cards, protocols and calculations | Require own-node protocol linkage, declared ASCII raw fields/inputs and compatible units. Every inventory-linked actual_* output is the unnormalized physical numerator named in its rule and card amount; normalize once by A. Observation-only and component subledger outputs remain protocol measurements and must not create additional exchanges. normalized_accepted_roof_service is the sole already-normalized output. |  |
| validate_ranges | Every individual flow card | Keep an individual provisional reasoned_estimate diagnostic Range for every non-reference card and the strict calculated 1..1 reference identity. Investigate extremes, required-role absence and completeness independently; a screen pass never proves physical or identity readiness. |  |
| validate_reporting | Published dataset package | Disclose actual boundary, supplier instruction/design and dataset coverage, periods, method/measurement evidence, gaps and performed/skipped checks. Do not finalize an exchange with an unresolved concrete identity or property/unit support. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation-service data package; downstream process and lifecyclemodel projections retain this reviewed boundary and acceptance gate. |
| downstream_use | secondary_dataset and background_dataset where actual product, route, geography, period, released interface and acceptance conditions are compatible and disclosed. |
| allowed_use | The specified complete mechanically nailed fiberglass three-tab covering installation service on a received accepted dry timber deck, using actual component/finish/support records normalized to accepted unique A. |
| excluded_use | Universal roofing, framing/deck repair/production, reroof tear-off/overlay, other roofing routes or future use/maintenance/end-of-life; extrapolation of historical product dimensions/performance or provisional screens as defaults. |
| required_metadata | PCR identity, actual site/lot and dates, geometry/openings, supplier/SKU/batches/instruction revisions, design/release/ownership, component/packaging source boundaries, periods/assets, rework/dispositions, all actual exchange units and final gate. |
| required_quality_disclosure | Identity/support coverage, actual measurement/bridge and calibration evidence, collection coverage, stock/custody/meter and material/water reconciliation, provisional ranges, allocation decisions, missing periods/quantities/species and performed/skipped checks. |
| update_trigger | Change in product/route, deck interface, responsibility, design/instructions, layer/detail/seal/vent requirements, actual finish/cleanup, supplier/property/unit, service topology, allocation treatment, period coverage or new evidence affecting a gap or screen. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| gaf-three-tab-route | handbook | https://www.gaf.com/en-us/document-library/documents/installation-instructions-%26-guides/royal-sovereign-shingles-english-size-installation-instructions.pdf | GAF Royal Sovereign/Sentinel English-size installation instructions, historical cover Updated 10/14; product-specific route decomposition, underlay/edge/nailing/starter/hip-ridge/junction/valley/vent roles, hand-seal conditionality, retained shingle release film and potential cutting dust/fumes. Actual supplier instructions/design govern the installed roof. No numeric slope/layer/lap/nail/temperature/time/performance default is adopted. |
| gaf-fiberglass-physical-state | handbook | https://www.gaf.com/en-us/document-library/documents/data-sheets/royal-sovereign-metrics-_data-sheet.pdf | GAF Royal Sovereign metric datasheet, explicit fiberglass/asphalt finished construction only. Metric dimensions, piece/nail counts and performance/warranty/standards statements supply no generic activity or design factors. |
