---
pcr_id: pcr.constructions-and-construction-services.construction-services.galvanized-chain-link-fabric-and-rail-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Galvanized chain-link fabric and rail installation service on accepted existing posts and foundations

## 1. Scope and Applicability

This methodology describes the foreground installation work that joins galvanized steel chain-link fabric and the actual required rails and attachment infrastructure to an already accepted post and foundation interface. It starts with the physical interface release and material receiving, and ends with the accepted installation service. The fence is described by the actual height, mesh, wire gauge, selvage and galvanizing state; a metre of another configuration is not silently equivalent.

The work package includes its actual rail/bracing integration, tension-wire roles, fabric stretching/joining/fastening, incidental cuts, losses, rework, owned temporary services, packaging fates and any specified finishing or cleanup. Existing caps, rail members or fittings are not purchased again; the item schedule records what exists and what this package installs. Galvanized-after-weaving and galvanized-before-weaving fabric can have different cut-end conditions. Supplier and actual project instructions govern compatibility and acceptance.

New posts, excavation, grading and concrete foundations, gates and their operators, barbed wire or tape, privacy slats and independent component manufacture are excluded from this particular route. Adding an excluded responsibility changes the actual scope and requires a fresh boundary review. The source documents describe broader systems, so their sample dimensions, gauges, spacing, footing sizes, wind values and gate instructions are not generic modelling factors here.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.galvanized-chain-link-fabric-and-rail-installation-services |
| classification_refs | cpc:3.0:54770; classification linkage is context and does not establish a broader scope or accepted mapping |
| covered_products | Installation of actual galvanized woven steel chain-link fabric and rail/attachment infrastructure on released existing posts and foundations |
| excluded_products | New complete-fence manufacture; new post/foundation/earthwork construction; gates/operators; barbed wire/tape; privacy slats; polymer-coated or non-galvanized alternative fabric routes without new review |
| representative_product | One accepted metre of the actual project fence-panel centerline at its declared configuration |
| production_route | Existing-interface release and receiving → rail/bracing integration → fabric joining/tensioning/attachment → actual specified completion and final acceptance |
| market_state | Site-installed service at acceptance, with actual owned components complete and existing-post interface unchanged in ownership |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted galvanized chain-link fabric and rail installation service on the released existing post/foundation interface |
| How much | 1 m of unique net accepted fence-panel centerline length |
| How well | Actual design-compatible height, mesh, gauge, selvage and galvanizing state; taut fabric, secure complete owned fittings, trimmed/bent ends, actual specified clearance and completion requirements accepted |
| How long or cycle | One actual installation lot from entry release through acceptance, with its real receipt/storage, rail, fabric, finishing, idle and rework periods; no assumed service life |
| reference_flow_link | `accepted_fence_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted galvanized chain-link fabric and rail installation service |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | site and lot; actual height; mesh; wire gauge; top and bottom selvage; GAW or GBW; actual grade and coating; line/terminal post condition and geometry release; existing/new component schedule; actual finish requirement and acceptance; centerline/opening/corner method; work and acceptance periods |

L is calculated from the unique accepted segment register, not from delivered roll length, nominal spacing, fence face area or the number of work passes. Inventory numerators cover the whole actual lot, including its losses and rework; each is divided by L once. Only the accepted reference card uses L/L. An unaccepted lot with L = 0 cannot produce this reference dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_length` | accepted_fence_service | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Calculate L by calc_accepted_fence_service using cp_finish_accept; sum unique actual net accepted centerline segments, count corners once, exclude gate/opening gaps and WIP; L > 0. |
| `measure_physical_interface` | cp_survey_receive/cp_rail_brace observation keys: post_interface; physical_interface_release; physical_interface_construction_feed | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | Measure physical existing-post geometry by the owning node protocol. Design release documents support condition; they do not become kilogram or document-product exchanges. |
| `measure_same_state_bridge` | all material, package and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain measured mass or convert actual native count/length/area with the same SKU/current-state measured kg-per-native-unit bridge. Never add unlike native dimensions or borrow another material factor. |
| `measure_composite_exclusive` | composites and retained material | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record a whole purchased composite or its actual measured constituents exclusively. Net material mass excludes packaging; accepted retained mass is a stock check rather than a second final exchange. |
| `measure_meter_lineage` | all electricity rows | Energy | kWh | Convert each actual read delta with its source factor and interval. Preserve master/direct topology and every inside-master assignment. Do not borrow a different property such as net calorific value. |
| `measure_service_time` | all access_service rows | Duration | h | Use actual contracted availability and recorded conversion, including owned idle and rework. No default eight-hour day, annualization, lifetime or labour proxy. |
| `measure_normalize_once` | all inventory rows | row-specific | row-specific | First calculate the literal physical numerator named in section 8. Execute each card Amount expression once using the same positive L. Intermediate transfers retain actual quantities; only final L/L equals one. |
| `measure_water_pools` | finish_water; finish_water_vapour; finish_wastewater; finish_unused_return | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use water-only measured pools at finish_accept. Gross fresh water already excludes closing intact once. H2O vapour to air, unspecified, requires independently validated occurrence/quantity, and closure residual remains diagnostic. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Signed actual-design and condition release of existing line/terminal posts and foundations with compatible loading, geometry and height; real receiving/custody conditions and actual existing/new component schedule |
| starting_condition_role | Existing physical support interface to the installation work, not new post/foundation production and not a document product |
| product_classification_scope | This reviewed galvanized fabric-and-rail installation route within cpc:3.0:54770; classification alone does not widen the boundary |
| recursive_input_rule | A prior same-category panel or service may enter only as a separately identified actual state and custody transfer. Carry its prior burden once and add only the work newly owned by this lot; do not recursively create a second finished fence or replace it by the final reference. |
| upstream_dataset_requirement | Actual supplier and provider datasets consistent with each material/SKU/state or service scope and geography; document manufacture, delivery and packaging coverage and resolve missing upstream evidence |
| disclosure | Actual entry condition and owners; excluded operations; full component schedule; received/issued/retained/waste/U/X/WIP and packaging fates; route and period states; shared-service decisions; measurement uncertainty; remaining identity/support and coverage gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | all nodes | Begin with existing line and terminal posts and foundations accepted for the actual fence loading, height, geometry and condition. Named upstream owners supply the signed design and physical-condition release. The physical post-interface length is an observed existing asset boundary, never a design-document product or post/concrete mass. | `clfmi-product-manual-2017`; `masterhalco-galvanized-components` |
| `boundary_component_ownership` | all component roles | Resolve every cap, eye top, rail end, band, sleeve, brace, truss component, tension bar or strap, bolt, tie, hog ring and tension-wire role as already accepted existing or newly installed by this work package. Include every actual new owned item in its material-role ledger; one item has one operation owner. Unknown ownership blocks completion. | `clfmi-product-manual-2017`; `masterhalco-galvanized-components` |
| `boundary_exclusions` | scope changes | New posts, earthworks, foundations, gates, gate operators, barbed wire, barbed tape, privacy slats and independent framework/fabric manufacture are outside this reviewed route. If actually needed or performed by the installation package, reassess the boundary and cards before modelling; do not hide those operations as zero or existing. | `clfmi-product-manual-2017`; `masterhalco-galvanized-components` |
| `boundary_receipt` | survey_receive and all material feeds | Each staged material has one gross external draw at survey_receive followed by a measured issue and matching own-node internal feed. Gross equals opening plus external receipts minus all intact stock unissued to this lot. Receipt rejection and actual U/X exits stay within gross and have positive separate outputs. No new purchased acquisition occurs at the feed node. |  |
| `boundary_packaging` | all packaging roles | Receive accompanying packaging separately, then either record its receipt fate or its measured issue/feed to the actual unpacking node. At that node record waste, usable exit, actual reuse transfer or retained WIP exclusively. Supplier dataset packaging coverage is documented and counted once; material kg exclude packaging. |  |
| `boundary_handoff` | all panel and component transfers | Pair material, packaging and panel transfers using identical event, material or segment, current state, lot, source and recipient evidence. Record actual internal quantities rather than final reference 1 m. Retained components carry prior burdens once; later work adds only its own operations and inputs. |  |
| `boundary_actual_operations` | rail_brace and fabric_tension | Rail fitting and actual field cutting are incidental joining operations here. Include actual cutting tools, offcuts, captured dust, uncaptured releases and rework; an independent fabricated-product handoff would require new scope review. Stretching, joining, fastening and trimming/bending ends are actual fabric-stage operations without default rates or dimensions. | `clfmi-product-manual-2017`; `masterhalco-galvanized-components` |
| `boundary_finishing` | finish_accept | The parent is the measured tensioned secured panel. Surface repair and chemical or water cleanup activate only from an actual approved requirement and operation record. Resolve formulation and actual application/cleanup states; absence requires evidence and unknown state remains a gap. Welded-gate zinc-paint clauses do not establish universal rail-cut repair in this excluded-gate route. | `clfmi-product-manual-2017`; `masterhalco-galvanized-components` |
| `boundary_final_gate` | accepted_fence_service | Release only panels with actual taut fabric, secure fittings, trimmed and bent ends, specified clearance, complete owned components and all actual specified repair/cleanup requirements accepted. The final reference is unique net panel centerline length with corners counted once and gate/opening gaps excluded, at declared height/mesh/gauge/selvage/coating. Waiting alone is no separate preservation service. | `clfmi-product-manual-2017`; `masterhalco-galvanized-components` |
| `boundary_actual_releases` | all waste and elementary roles | Measure solids, liquid waste, usable exits, retained material and WIP as exclusive physical fates at the node producing them. Elementary rows require exact substance or particle basis and receiving medium. Captured particles and liquid sent for treatment are waste; an unexplained closure gap is not an environmental release. finish_water_vapour is exclusively actual H2O to air, unspecified. |  |
| `boundary_periods` | all nodes | Enumerate actual receipt/storage, rail integration, fabric installation, any finishing, acceptance, rework and owned idle periods, with opening/closing states and event IDs. Link assets, receipts, material transfers, waste, service and final acceptance to those periods; a reporting cutoff retains unaccepted installation as WIP rather than assuming termination or acceptance. |  |
| `boundary_shared_assets` | all energy and service roles | Identify each actual shared meter, access asset, lift, hoist, extractor or protection service, its contractual/provider boundary and every consuming node and reporting period. Record direct assignments before residual attribution and avoid duplicate included energy, asset or packaging burdens. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: External packaging and temporary receipt protection (`receive_packaging`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Receive the actual wrapping, bundles, covers and other handling protection that accompanies this lot. Separate composition and reuse status; material dataset coverage determines whether a packaging-production burden is already included.

- Collection subject: External packaging and temporary receipt protection
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_packaging/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Bundles and temporary protection vary with supplier packing, reuse and delivery size; this wide screen tests unusual packaging draw without assigning a packing ratio.

#### Collection requirement: Access, plant and support service attributable to survey_receive (`survey_receive_access_service`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

Record the actual contracted access, lifting, hoisting, extraction or protection service used by survey_receive, including owned idle and rework availability. Hours represent a documented service boundary and cannot be invented from human labour or a standard workday.

- Collection subject: Access, plant and support service attributable to survey_receive
- Flow property / unit: Duration / h
- Amount rule: actual_survey_receive_access_service/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 48
  - Unit: h
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Owned availability and work interruptions affect survey_receive service duration; this broad hourly screen cannot supply an asset lifetime or convert days into eight-hour shifts.

#### Collection requirement: External lot draw of rail-side fittings and bracing components (`receive_rail_fittings`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

The receipt node owns the single external entry of rail-side fittings and bracing components. Resolve caps, loop tops, rail ends, bands, sleeves, braces, truss parts and bolts individually, including actual ferrous or diecast aluminum composition. Measure the gross lot draw before receipt waste, actual unused exits or node issues; resolve every unissued intact stock location with its real custodian.

- Collection subject: External lot draw of rail-side fittings and bracing components
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_rail_fittings/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Gross procurement includes actual receipt loss and unused exits, so rail-side fittings and bracing components can exceed installed retention; this provisional screen detects unusual ledger scale and does not net returns a second time.

#### Collection requirement: External lot draw of fabric tensioning and attachment parts (`receive_fabric_fittings`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

The receipt node owns the single external entry of fabric tensioning and attachment parts. Resolve tension bars or straps, bands, bolts, ties and hog rings by actual material; aluminum ties remain distinct from galvanized steel ties. Measure the gross lot draw before receipt waste, actual unused exits or node issues; resolve every unissued intact stock location with its real custodian.

- Collection subject: External lot draw of fabric tensioning and attachment parts
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_fabric_fittings/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Gross procurement includes actual receipt loss and unused exits, so fabric tensioning and attachment parts can exceed installed retention; this provisional screen detects unusual ledger scale and does not net returns a second time.

#### Collection requirement: External lot draw of actual specified repair and cleaning materials (`receive_coating_cleanup`)

Process / prospective direction / type: `survey_receive` / `inputs` / `product`.

The receipt node owns the single external entry of actual specified repair and cleaning materials. Only actual approved formulations and observed operations activate this role; no general rail-cut zinc-paint requirement is inferred. Measure the gross lot draw before receipt waste, actual unused exits or node issues; resolve every unissued intact stock location with its real custodian.

- Collection subject: External lot draw of actual specified repair and cleaning materials
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_coating_cleanup/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Gross procurement includes actual receipt loss and unused exits, so actual specified repair and cleaning materials can exceed installed retention; this provisional screen detects unusual ledger scale and does not net returns a second time.

#### Collection requirement: Usable original materials leaving receipt custody (`receive_unused_return`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Record positive quantities of unused components or usable packaging returned to a supplier or transferred to a named external custodian at this node. Preserve material and state identities and distinguish return U from external transfer X.

- Collection subject: Usable original materials leaving receipt custody
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_unused_return/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Excess orders or a changed component schedule may produce large unused exits; verify the exclusive custody event and original burden instead of treating the range as a credit.

#### Collection requirement: Actual material dispatch to rail_brace (`issue_materials_rail_brace`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

This conditional handoff role covers only unchanged-state Mass/kg installation materials actually dispatched by survey_receive to rail_brace: rails, rail_fittings, tension_wire. Foreground records expand it into zero, one or multiple concrete exchanges by actual SKU, material and current state, each with its own verified UUID and measured physical quantity. The Amount is selected separately for each actual material/SKU and current-state exchange; a lot-level dispatch sum is diagnostic only and never a mixed-product exchange, combined identity, default occurrence or fixed quantity. Preserve the individual component quantities and custody IDs from calc_issue_rails, calc_issue_rail_fittings, calc_issue_tension_wire and reconcile each to its matching recipient material input. Upstream acquisition occurs once at the original external receipt; packaging uses its separately carried issue/feed.

- Collection subject: Actual material dispatch to rail_brace
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_materials_rail_brace/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen for actual same-recipient dispatch
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 160
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

This provisional replaceable screen applies independently to each concrete material/state dispatch quantity, with the declared broad bound used only to flag unexpected scale. It is not a material recipe, identity, required quantity or empirical limit. Actual zero needs nonoccurrence evidence; unknown is a gap. Keep each SKU/state and original role quantity separate when expanding actual exchanges; an exceedance requires component and custody review, not removal of valid losses or rework.

#### Collection requirement: Actual material dispatch to fabric_tension (`issue_materials_fabric_tension`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

This conditional handoff role covers only unchanged-state Mass/kg installation materials actually dispatched by survey_receive to fabric_tension: chainlink_fabric, fabric_fittings. Foreground records expand it into zero, one or multiple concrete exchanges by actual SKU, material and current state, each with its own verified UUID and measured physical quantity. The Amount is selected separately for each actual material/SKU and current-state exchange; a lot-level dispatch sum is diagnostic only and never a mixed-product exchange, combined identity, default occurrence or fixed quantity. Preserve the individual component quantities and custody IDs from calc_issue_chainlink_fabric, calc_issue_fabric_fittings and reconcile each to its matching recipient material input. Upstream acquisition occurs once at the original external receipt; packaging uses its separately carried issue/feed.

- Collection subject: Actual material dispatch to fabric_tension
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_materials_fabric_tension/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen for actual same-recipient dispatch
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 130
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

This provisional replaceable screen applies independently to each concrete material/state dispatch quantity, with the declared broad bound used only to flag unexpected scale. It is not a material recipe, identity, required quantity or empirical limit. Actual zero needs nonoccurrence evidence; unknown is a gap. Keep each SKU/state and original role quantity separate when expanding actual exchanges; an exceedance requires component and custody review, not removal of valid losses or rework.

#### Collection requirement: Actual issue of actual specified repair and cleaning materials to finish_accept (`issue_coating_cleanup`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Transfer only actually issued actual specified repair and cleaning materials from survey_receive to finish_accept with matching material, state, lot and custody-event IDs. The recipient records the same physical quantity as an internal feed; an unexplained receipt balance is not a measured issue.

- Collection subject: Actual issue of actual specified repair and cleaning materials to finish_accept
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_coating_cleanup/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. The issue screen for actual specified repair and cleaning materials follows actual dispatch after receipt dispositions; its range does not prescribe equality with final geometry or imply another purchased input.

#### Collection requirement: Packaging issued with materials to rail_brace (`issue_packaging_rail_brace`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Issue actual packaging still physically accompanying materials from survey_receive to rail_brace. Identify package item, composition, state and material custody event, and carry upstream packaging coverage once.

- Collection subject: Packaging issued with materials to rail_brace
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_packaging_rail_brace/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Packaging carried to rail_brace depends on when each bundle is opened; the screen tests actual transfers rather than assuming all packaging is receipt waste.

#### Collection requirement: Packaging issued with materials to fabric_tension (`issue_packaging_fabric_tension`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Issue actual packaging still physically accompanying materials from survey_receive to fabric_tension. Identify package item, composition, state and material custody event, and carry upstream packaging coverage once.

- Collection subject: Packaging issued with materials to fabric_tension
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_packaging_fabric_tension/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Packaging carried to fabric_tension depends on when each bundle is opened; the screen tests actual transfers rather than assuming all packaging is receipt waste.

#### Collection requirement: Packaging issued with materials to finish_accept (`issue_packaging_finish_accept`)

Process / prospective direction / type: `survey_receive` / `outputs` / `product`.

Issue actual packaging still physically accompanying materials from survey_receive to finish_accept. Identify package item, composition, state and material custody event, and carry upstream packaging coverage once.

- Collection subject: Packaging issued with materials to finish_accept
- Flow property / unit: Mass / kg
- Amount rule: actual_issue_packaging_finish_accept/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Packaging carried to finish_accept depends on when each bundle is opened; the screen tests actual transfers rather than assuming all packaging is receipt waste.

#### Collection requirement: All installation materials discarded at receipt (`receive_reject`)

Process / prospective direction / type: `survey_receive` / `outputs` / `waste`.

Record every actual newly received installation material discarded by survey_receive: rails, woven fabric, fittings, wire, and any actual coating-repair or cleaning formulation. Resolve solid, liquid and current material/coating/formulation state and treatment destination. Packaging has its separate receipt-waste card; usable supplier returns are product U/X exits, and intact stock is not waste. No downstream waste is attributed here without its real physical handoff.

- Collection subject: All installation materials discarded at receipt
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_reject/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. A rejected delivery can produce substantial receipt waste even if little fence is accepted; a high ratio requires delivery and rejection evidence, not removal of the loss.

#### Collection requirement: Packaging discarded at receipt (`receive_packaging_waste`)

Process / prospective direction / type: `survey_receive` / `outputs` / `waste`.

Record packaging physically removed and discarded while receiving. Packaging that stays around an issued component follows its separate issue card instead of being counted as waste here.

- Collection subject: Packaging discarded at receipt
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_packaging_waste/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Unpacking practice determines how much wrapper becomes receipt waste; the bound is a diagnostic allowance for unusual packing, not a required disposal fraction.

#### Collection requirement: Rail-side fittings and bracing components received internally (`rail_fittings`)

Process / prospective direction / type: `rail_brace` / `inputs` / `product`.

Receive the actual newly installed caps, eye tops, rail ends, sleeves, bands, braces, truss components and bolts allocated to rail work. Resolve each SKU and material; ferrous and diecast aluminum fittings are distinct actual exchanges.

- Collection subject: Rail-side fittings and bracing components received internally
- Flow property / unit: Mass / kg
- Amount rule: actual_rail_fittings/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rail_brace`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. The share of pre-existing caps and new bracing changes the fitting demand, and different metals have different masses; investigate a high result using the item schedule.

#### Collection requirement: Access, plant and support service attributable to rail_brace (`rail_brace_access_service`)

Process / prospective direction / type: `rail_brace` / `inputs` / `product`.

Record the actual contracted access, lifting, hoisting, extraction or protection service used by rail_brace, including owned idle and rework availability. Hours represent a documented service boundary and cannot be invented from human labour or a standard workday.

- Collection subject: Access, plant and support service attributable to rail_brace
- Flow property / unit: Duration / h
- Amount rule: actual_rail_brace_access_service/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rail_brace`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 48
  - Unit: h
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Owned availability and work interruptions affect rail_brace service duration; this broad hourly screen cannot supply an asset lifetime or convert days into eight-hour shifts.

#### Collection requirement: Accompanying packaging received at rail_brace (`rail_brace_packaging_feed`)

Process / prospective direction / type: `rail_brace` / `inputs` / `product`.

Receive the same actual packaging identified by issue_packaging_rail_brace at rail_brace. It has no second external packaging purchase; record its own-node waste, usable external exit, reuse transfer or retained work-in-progress fate separately.

- Collection subject: Accompanying packaging received at rail_brace
- Flow property / unit: Mass / kg
- Amount rule: actual_rail_brace_packaging_feed/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rail_brace`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. The rail_brace packaging feed is bounded only as a provisional anomaly screen; reconciliation to the source issue, not this interval, establishes its physical quantity.

#### Collection requirement: Rail-integrated panel interface handed to fabric work (`rail_ready_panels`)

Process / prospective direction / type: `rail_brace` / `outputs` / `product`.

Transfer a measured set of panel segments with the required rails, bracing and attachment infrastructure complete for the next operation. Include its component ledger and acceptance state; an off-spec panel remains a rejected or rework state.

- Collection subject: Rail-integrated panel interface handed to fabric work
- Flow property / unit: Length / m
- Amount rule: actual_rail_ready_panels/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rail_brace`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Actual panel handoffs may include partial lots and repeated physical rework transfers; the ratio is a routing screen, not an instruction to replace the transfer by one metre.

#### Collection requirement: Usable rail-stage materials leaving the lot (`rail_unused_return`)

Process / prospective direction / type: `rail_brace` / `outputs` / `product`.

Record unused rails, wire, fittings or reusable packaging that actually leave this node for an external custodian. Each positive exit keeps its own material, state and original upstream burden; installed or contaminated material is not automatically reusable.

- Collection subject: Usable rail-stage materials leaving the lot
- Flow property / unit: Mass / kg
- Amount rule: actual_rail_unused_return/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rail_brace`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Surplus members and reusable protection can leave the lot after issue; a high value prompts a custody and stock check and never authorizes an avoided-production credit.

#### Collection requirement: Uncaptured substances released during rail work (`rail_direct_release`)

Process / prospective direction / type: `rail_brace` / `outputs` / `elementary`.

Expand this conditional role into the actual metal or coating substance and particle class, with the real receiving medium. Count only uncaptured environmental releases attributable to cutting, drilling or joining here; captured dust is waste.

- Collection subject: Uncaptured substances released during rail work
- Flow property / unit: Mass / kg
- Amount rule: actual_rail_direct_release/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rail_brace`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Direct releases depend on the actual tools and capture system; this screening mass is not an emission factor and cannot supply substance identity or a particle-size class.

#### Collection requirement: Rail-integrated panel interface received by fabric work (`rail_panel_feed`)

Process / prospective direction / type: `fabric_tension` / `inputs` / `product`.

Receive the measured same-state segments delivered by rail_ready_panels, retaining transfer IDs and component completeness. This is an internal physical handoff, with no new framework manufacturing or procurement burden.

- Collection subject: Rail-integrated panel interface received by fabric work
- Flow property / unit: Length / m
- Amount rule: actual_rail_panel_feed/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_tension`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. The received panel set follows the transfer register, including actual revisits; compare source and recipient quantities before interpreting a ratio above the final accepted length.

#### Collection requirement: Fabric tensioning and attachment parts received internally (`fabric_fittings`)

Process / prospective direction / type: `fabric_tension` / `inputs` / `product`.

Receive the actual newly installed tension bars or straps, bands, bolts, ties and hog rings. Keep ferrous and aluminum attachment parts distinct, and assign tension-wire attachment parts to one operation rather than charging them in both stages.

- Collection subject: Fabric tensioning and attachment parts received internally
- Flow property / unit: Mass / kg
- Amount rule: actual_fabric_fittings/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_tension`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Fastener material and attachment design affect mass and count, so a high ratio requires item-level reconciliation rather than an assumption that every fitting is steel.

#### Collection requirement: Access, plant and support service attributable to fabric_tension (`fabric_tension_access_service`)

Process / prospective direction / type: `fabric_tension` / `inputs` / `product`.

Record the actual contracted access, lifting, hoisting, extraction or protection service used by fabric_tension, including owned idle and rework availability. Hours represent a documented service boundary and cannot be invented from human labour or a standard workday.

- Collection subject: Access, plant and support service attributable to fabric_tension
- Flow property / unit: Duration / h
- Amount rule: actual_fabric_tension_access_service/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_tension`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 48
  - Unit: h
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Owned availability and work interruptions affect fabric_tension service duration; this broad hourly screen cannot supply an asset lifetime or convert days into eight-hour shifts.

#### Collection requirement: Accompanying packaging received at fabric_tension (`fabric_tension_packaging_feed`)

Process / prospective direction / type: `fabric_tension` / `inputs` / `product`.

Receive the same actual packaging identified by issue_packaging_fabric_tension at fabric_tension. It has no second external packaging purchase; record its own-node waste, usable external exit, reuse transfer or retained work-in-progress fate separately.

- Collection subject: Accompanying packaging received at fabric_tension
- Flow property / unit: Mass / kg
- Amount rule: actual_fabric_tension_packaging_feed/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_tension`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. The fabric_tension packaging feed is bounded only as a provisional anomaly screen; reconciliation to the source issue, not this interval, establishes its physical quantity.

#### Collection requirement: Usable fabric-stage materials leaving the lot (`fabric_unused_return`)

Process / prospective direction / type: `fabric_tension` / `outputs` / `product`.

Record actual unused fabric, attachment stock or usable packaging leaving fabric_tension for a named external custodian. Record material-specific U and X quantities as positive outputs, excluding retained fence, waste and closing work in progress.

- Collection subject: Usable fabric-stage materials leaving the lot
- Flow property / unit: Mass / kg
- Amount rule: actual_fabric_unused_return/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_tension`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Unopened fabric rolls or surplus fasteners may be returned after the work changes; the range flags unusually large exits while retaining their original material burdens.

#### Collection requirement: Waste generated while attaching and tensioning fabric (`fabric_waste`)

Process / prospective direction / type: `fabric_tension` / `outputs` / `waste`.

Record fabric offcuts, failed attachment parts, captured particles and packaging discarded at fabric_tension, by actual material and coating state. Removed defective fabric is included here when this node produces that waste.

- Collection subject: Waste generated while attaching and tensioning fabric
- Flow property / unit: Mass / kg
- Amount rule: actual_fabric_waste/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_tension`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Short panels, trim and failed attachment operations can create large losses; observed losses remain in the lot burden even when the provisional screen is exceeded.

#### Collection requirement: Uncaptured substances released during fabric installation (`fabric_direct_release`)

Process / prospective direction / type: `fabric_tension` / `outputs` / `elementary`.

Record only actual uncaptured metal or coating releases from trimming or fastening at this node, resolved by substance, particle description and receiving medium. No generic dust identity or unexplained material deficit is an emission.

- Collection subject: Uncaptured substances released during fabric installation
- Flow property / unit: Mass / kg
- Amount rule: actual_fabric_direct_release/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_tension`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Manual and powered trimming have different release behavior and capture; the provisional screen cannot replace a release measurement or substantiate a pollutant UUID.

#### Collection requirement: Specified repair or cleaning material received internally (`coating_cleanup`)

Process / prospective direction / type: `finish_accept` / `inputs` / `product`.

Receive only actual project- or manufacturer-required coating-repair and cleaning products issued from receipt. Document formulation and use; the welded-gate paint clauses do not require zinc paint on every rail cut in this non-gate route.

- Collection subject: Specified repair or cleaning material received internally
- Flow property / unit: Mass / kg
- Amount rule: actual_coating_cleanup/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Some lots require no surface product, while actual damage or specified cleanup can require several formulations; zero needs observed nonoccurrence and the upper screen is not a coating recipe.

#### Collection requirement: Access, plant and support service attributable to finish_accept (`finish_accept_access_service`)

Process / prospective direction / type: `finish_accept` / `inputs` / `product`.

Record the actual contracted access, lifting, hoisting, extraction or protection service used by finish_accept, including owned idle and rework availability. Hours represent a documented service boundary and cannot be invented from human labour or a standard workday.

- Collection subject: Access, plant and support service attributable to finish_accept
- Flow property / unit: Duration / h
- Amount rule: actual_finish_accept_access_service/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 48
  - Unit: h
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Owned availability and work interruptions affect finish_accept service duration; this broad hourly screen cannot supply an asset lifetime or convert days into eight-hour shifts.

#### Collection requirement: Accompanying packaging received at finish_accept (`finish_accept_packaging_feed`)

Process / prospective direction / type: `finish_accept` / `inputs` / `product`.

Receive the same actual packaging identified by issue_packaging_finish_accept at finish_accept. It has no second external packaging purchase; record its own-node waste, usable external exit, reuse transfer or retained work-in-progress fate separately.

- Collection subject: Accompanying packaging received at finish_accept
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_accept_packaging_feed/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. The finish_accept packaging feed is bounded only as a provisional anomaly screen; reconciliation to the source issue, not this interval, establishes its physical quantity.

#### Collection requirement: Usable completion materials leaving the lot (`finish_unused_return`)

Process / prospective direction / type: `finish_accept` / `outputs` / `product`.

Record positive actual U or X exits of unused repair products, fresh water or reusable packaging from finish_accept, by exact current state. Retained coating, wastewater, solid residues and closing work in progress cannot also be unused exits.

- Collection subject: Usable completion materials leaving the lot
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_unused_return/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Surplus formulation or fresh water can leave after issue; a high value needs separate material and water custody records rather than a second subtraction from gross input.

#### Collection requirement: Solid waste generated during completion and acceptance (`finish_waste`)

Process / prospective direction / type: `finish_accept` / `outputs` / `waste`.

Record final-node packaging, spent repair or cleaning residues, captured contaminants and actually removed rejected components. Materials still awaiting correction or acceptance remain identifiable work in progress rather than waste by assumption.

- Collection subject: Solid waste generated during completion and acceptance
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_waste/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. The final node can receive previously installed components for removal, so its waste can be high; producing-node and defect-event records must justify the amount.

#### Collection requirement: Other uncaptured substances released during completion (`finish_other_release`)

Process / prospective direction / type: `finish_accept` / `outputs` / `elementary`.

Expand actual coating or cleanup releases by the exact solvent, metal, coating constituent or particle class and receiving medium. Exclude H2O counted by finish_water_vapour and all substances captured in solid or liquid waste. Any evidenced direct liquid H2O exit also expands under this conditional role in its actual receiving medium; its measured water portion is reconciled by calc_finish_water_vapour. The air-vapour UUID cannot identify a liquid receiving medium, and collected liquid remains wastewater.

- Collection subject: Other uncaptured substances released during completion
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_other_release/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Unverified optional screening aid: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Different actual formulations have different volatile or particulate constituents; this screening mass neither specifies VOC composition nor permits substituting a coating product flow for an emission.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `survey_receive` | Release the existing post interface and receive installation materials | required | Every installation lot | Entry survey, interface acceptance, external material and packaging custody, and actual issues to each working node Observations post_interface and physical_interface_release remain independently measured existing-post/foundation Length/m readiness and release states under cp_survey_receive and calc_post_interface/calc_physical_interface_release; they are not inventory product exchanges. | actual same-state handoff quantity; final accepted length L only at finish_accept |
| `rail_brace` | Integrate rails, braces and specified tension wire | required | Every installation lot; individual new component roles follow the accepted existing/new schedule | Joining components to the released posts; incidental rail cutting is owned here Observation physical_interface_construction_feed confirms the same released asset geometry/state under cp_rail_brace and calc_physical_interface_construction_feed, with the same source-recipient observation IDs and real responsibility; no new asset manufacture or product acquisition. | actual same-state handoff quantity; final accepted length L only at finish_accept |
| `fabric_tension` | Attach, join and tension galvanized chain-link fabric | required | Every installation lot | Integrate actual fabric and attachment components into taut secured panels | actual same-state handoff quantity; final accepted length L only at finish_accept |
| `finish_accept` | Complete specified finishing, clear installation debris and accept the fence service | required | Every lot requires inspection and acceptance; surface repair, cleaning materials and water activate only on evidenced actual operations | Receive the tensioned parent, perform actual project-owned finishing, and release a unique accepted output | actual same-state handoff quantity; final accepted length L only at finish_accept |

The working sequence has material and package issues from survey_receive directly to the node that actually consumes or unpacks them. The physical asset interface passes to rail_brace, rail-ready panels pass to fabric_tension, and tensioned panels pass to finish_accept. Surface repair is a conditional operation within the final node; all lots still require the single final inspection and accepted service gate. Defect routes may revisit a named node using new pass/transfer events; they never create another unique final output.

### Explicit internal transfer pairs

| Source row | Recipient row | Unit | Meaning |
| --- | --- | --- | --- |
| issue_materials_rail_brace | rails | kg | exact component ledger issue_rails to rails; same SKU/state/kg, no repeat purchase |
| issue_materials_rail_brace | rail_fittings | kg | exact component ledger issue_rail_fittings to rail_fittings; same SKU/state/kg, no repeat purchase |
| issue_materials_rail_brace | tension_wire | kg | exact component ledger issue_tension_wire to tension_wire; same SKU/state/kg, no repeat purchase |
| issue_materials_fabric_tension | chainlink_fabric | kg | exact component ledger issue_chainlink_fabric to chainlink_fabric; same SKU/state/kg, no repeat purchase |
| issue_materials_fabric_tension | fabric_fittings | kg | exact component ledger issue_fabric_fittings to fabric_fittings; same SKU/state/kg, no repeat purchase |
| issue_coating_cleanup | coating_cleanup | kg | same material/current state; one external receipt |
| issue_packaging_rail_brace | rail_brace_packaging_feed | kg | same actual package item/composition/current-state kg |
| issue_packaging_fabric_tension | fabric_tension_packaging_feed | kg | same actual package item/composition/current-state kg |
| issue_packaging_finish_accept | finish_accept_packaging_feed | kg | same actual package item/composition/current-state kg |
| rail_ready_panels | rail_panel_feed | m | same measured panel/post-interface centerline geometry and state in m |
| tensioned_fence | finish_panel_feed | m | same measured panel/post-interface centerline geometry and state in m |

### Process: Release the existing post interface and receive installation materials (`survey_receive`)

#### Inputs

##### Product flows

###### Electricity attributable to survey_receive (`survey_receive_electricity`)

Include the actual electrically supplied tools, lighting, extraction and protection loads owned by survey_receive. Record source, interval, read factors and master/submeter topology; allocate only a genuinely unassigned master remainder.

- Selected flow: Electricity attributable to survey_receive
- Flow property / unit: Energy / kWh
- Amount rule: actual_survey_receive_electricity/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Tool selection, rework and actual lighting or protection can change survey_receive demand; this initial kWh-per-metre screen is not a power rating or a shift-hours assumption.

###### External lot draw of galvanized steel rails (`receive_rails`)

The receipt node owns the single external entry of galvanized steel rails. Actual rail section, steel grade, forming and coating state are retained; pre-existing rails stay in the interface record. Measure the gross lot draw before receipt waste, actual unused exits or node issues; resolve every unissued intact stock location with its real custodian.

- Selected flow: External lot draw of galvanized steel rails
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_rails/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Gross procurement includes actual receipt loss and unused exits, so galvanized steel rails can exceed installed retention; this provisional screen detects unusual ledger scale and does not net returns a second time.

###### External lot draw of specified tension wire (`receive_tension_wire`)

The receipt node owns the single external entry of specified tension wire. Record the actual top or bottom wire role, material and coating state without assuming a universal run count. Measure the gross lot draw before receipt waste, actual unused exits or node issues; resolve every unissued intact stock location with its real custodian.

- Selected flow: External lot draw of specified tension wire
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_tension_wire/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Gross procurement includes actual receipt loss and unused exits, so specified tension wire can exceed installed retention; this provisional screen detects unusual ledger scale and does not net returns a second time.

###### External lot draw of galvanized steel chain-link fabric (`receive_chainlink_fabric`)

The receipt node owns the single external entry of galvanized steel chain-link fabric. Preserve woven fabric identity, SKU, height, mesh, gauge, selvage and GAW versus GBW cut-end condition; no generic wire-mesh identity is sufficient. Measure the gross lot draw before receipt waste, actual unused exits or node issues; resolve every unissued intact stock location with its real custodian.

- Selected flow: External lot draw of galvanized steel chain-link fabric
- Flow property / unit: Mass / kg
- Amount rule: actual_receive_chainlink_fabric/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_survey_receive`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Gross procurement includes actual receipt loss and unused exits, so galvanized steel chain-link fabric can exceed installed retention; this provisional screen detects unusual ledger scale and does not net returns a second time.

#### Outputs

##### Product flows

##### Waste flows

### Process: Integrate rails, braces and specified tension wire (`rail_brace`)

#### Inputs

##### Product flows

###### Galvanized steel rails received internally (`rails`)

Receive only the measured rails issued by survey_receive, with their actual steel grade, forming route, coating and delivery state. Rails already present on the accepted interface are recorded as existing assets rather than newly purchased rails.

- Selected flow: Galvanized steel rails received internally
- Flow property / unit: Mass / kg
- Amount rule: actual_rails/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rail_brace`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Rail dimensions and the number of top, intermediate, bottom and brace members differ by actual design; this screen cannot prescribe a rail section or material factor.

###### Specified tension wire received internally (`tension_wire`)

Receive the actual tension wire used in the approved top or bottom role and current coating state. Existing accepted wire is not a second new input, and its role or spacing is not inferred from a generic fence drawing.

- Selected flow: Specified tension wire received internally
- Flow property / unit: Mass / kg
- Amount rule: actual_tension_wire/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rail_brace`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Wire roles, diameter and run count are project choices; a broad initial screen flags input or unit errors without imposing a default number of wire runs.

###### Electricity attributable to rail_brace (`rail_brace_electricity`)

Include the actual electrically supplied tools, lighting, extraction and protection loads owned by rail_brace. Record source, interval, read factors and master/submeter topology; allocate only a genuinely unassigned master remainder.

- Selected flow: Electricity attributable to rail_brace
- Flow property / unit: Energy / kWh
- Amount rule: actual_rail_brace_electricity/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rail_brace`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Tool selection, rework and actual lighting or protection can change rail_brace demand; this initial kWh-per-metre screen is not a power rating or a shift-hours assumption.

#### Outputs

##### Product flows

##### Waste flows

###### Waste generated while integrating rails (`rail_waste`)

Record material-resolved rail cuts, failed fittings, wire remnants, captured machining particles and packaging discarded at this node. Captured particles remain waste; a collector record is not evidence of direct environmental release.

- Selected flow: Waste generated while integrating rails
- Flow property / unit: Mass / kg
- Amount rule: actual_rail_waste/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rail_brace`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Cut patterns and rejection can raise rail-stage losses, while packaging is included only if unpacked here; compare material and waste ledgers rather than using a generic loss percentage.

##### Elementary flows

### Process: Attach, join and tension galvanized chain-link fabric (`fabric_tension`)

#### Inputs

##### Product flows

###### Galvanized steel chain-link fabric received internally (`chainlink_fabric`)

Receive the actual woven galvanized fabric issued for attachment. Identify supplier SKU, steel grade, height, mesh, gauge, top and bottom selvage and galvanized-after-weaving or galvanized-before-weaving condition; generic welded mesh or raw steel wire cannot establish this identity.

- Selected flow: Galvanized steel chain-link fabric received internally
- Flow property / unit: Mass / kg
- Amount rule: actual_chainlink_fabric/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_tension`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Height, mesh, gauge and actual cuts govern fabric mass; this broad screen is provisional and provides neither an area-to-mass factor nor an acceptable fabric specification.

###### Electricity attributable to fabric_tension (`fabric_tension_electricity`)

Include the actual electrically supplied tools, lighting, extraction and protection loads owned by fabric_tension. Record source, interval, read factors and master/submeter topology; allocate only a genuinely unassigned master remainder.

- Selected flow: Electricity attributable to fabric_tension
- Flow property / unit: Energy / kWh
- Amount rule: actual_fabric_tension_electricity/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_tension`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Tool selection, rework and actual lighting or protection can change fabric_tension demand; this initial kWh-per-metre screen is not a power rating or a shift-hours assumption.

#### Outputs

##### Product flows

###### Taut secured panel state handed to finishing (`tensioned_fence`)

Transfer measured panels after actual fabric joining, stretching and attachment, with excess ends trimmed and bent as required. Preserve height, clearance, mesh and coating state and route unresolved defects to rework instead of the accepted output.

- Selected flow: Taut secured panel state handed to finishing
- Flow property / unit: Length / m
- Amount rule: actual_tensioned_fence/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabric_tension`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Panel transfers reflect work actually completed and any documented rework route; the range checks routing scale and does not certify tautness or acceptance.

##### Waste flows

##### Elementary flows

### Process: Complete specified finishing, clear installation debris and accept the fence service (`finish_accept`)

#### Inputs

##### Product flows

###### Tensioned panel parent received for completion (`finish_panel_feed`)

Receive the actual taut-panel state from tensioned_fence before finishing and final inspection. Its transfer register includes residual material and water state where relevant and excludes already discarded matter.

- Selected flow: Tensioned panel parent received for completion
- Flow property / unit: Length / m
- Amount rule: actual_finish_panel_feed/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Partial acceptances and repeated inspections can change the parent transfer ratio; it must be measured and cannot be forced to the final reference quantity.

###### Fresh water directly supplied for actual completion work (`finish_water`)

Record fresh water supplied at finish_accept for an observed cleanup or formulation operation, with source and quality. Exclude intact unissued stock once, but retain actual issued water that later leaves unused as a positive exit.

- Selected flow: Fresh water directly supplied for actual completion work
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_water/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Water demand depends on whether and how cleanup or wet finishing occurs; this replaceable screen does not imply that every fence is washed.

###### Electricity attributable to finish_accept (`finish_accept_electricity`)

Include the actual electrically supplied tools, lighting, extraction and protection loads owned by finish_accept. Record source, interval, read factors and master/submeter topology; allocate only a genuinely unassigned master remainder.

- Selected flow: Electricity attributable to finish_accept
- Flow property / unit: Energy / kWh
- Amount rule: actual_finish_accept_electricity/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Tool selection, rework and actual lighting or protection can change finish_accept demand; this initial kWh-per-metre screen is not a power rating or a shift-hours assumption.

#### Outputs

##### Product flows

###### Accepted galvanized chain-link fabric and rail installation service (`accepted_fence_service`)

Release the installation service only for unique net panel centerline length at the actual declared height, mesh, gauge, selvage and galvanized coating state, on released existing posts and foundations, with every owned component and finishing requirement accepted.

- Selected flow: Accepted galvanized chain-link fabric and rail installation service
- Flow property / unit: Length / m
- Amount rule: 1 m
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Exact reference normalization
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: calculated_from_collection (`calculated_from_collection`)

L is the positive measured unique accepted panel length; dividing L by itself defines exactly one reference metre and provides no construction yield, performance allowance or acceptance quota.

##### Waste flows

###### Completion wastewater transferred to a waste custodian (`finish_wastewater`)

Measure actual liquid waste leaving finish_accept, including its suspended constituents and destination. Distinguish a liquid sent for treatment from a direct environmental discharge and retain water and constituent quantities separately.

- Selected flow: Completion wastewater transferred to a waste custodian
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_wastewater/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Sources: `clfmi-product-manual-2017`; `masterhalco-galvanized-components`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Wash liquid and entrained solids vary with actual completion activities; a broad screen cannot define a wastewater composition or disposal route.

##### Elementary flows

###### Actual H2O vapour released to air, unspecified (`finish_water_vapour`)

This role is exclusively water substance H2O crossing the environmental boundary to air, unspecified, during actual finish_accept work. An observed and validated vapour quantity is required; identity compatibility does not establish that evaporation occurred.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: actual_finish_water_vapour/L
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish_accept`
- Range: Provisional diagnostic screen
  - Range role: qa_guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: reasoned_estimate (`reasoned_estimate`)

The range is provisional author reasoning, replaceable after independent review. Evaporation may be absent or depend on actual formulation and cleanup water; the replaceable screen is not a drying factor and an unclosed water gap never becomes vapour.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | foreground lots and nodes | Use separately measured actual node and lot operations first. The accepted fence service is the intended final output; internal feeds, temporary panel states and unused original-material custody exits are not extra co-produced fence services. |  |
| `allocation_original_unused_exit` | all usable U/X outputs | U and X are positive, mutually exclusive physical exits of still-usable original material to real external custodians. Carry only the unchanged original material upstream burden to those exits using the same material/state evidence. Receipt and site installation, handling, idle and rework burdens remain with the installation lot. A net-consumed diagnostic may subtract U/X for reconciliation but must not create a second negative exchange or avoided-production credit. |  |
| `allocation_rework` | every rejected state and rework loop | Keep each defect, producing node, state, disposition, recipient and rework-pass event. Route it to correction at the same or named upstream node, evidenced usable return/transfer, recovery/downgrade requiring explicit changed-state review, actual waste, or closing WIP. Retain all real work and material losses. A repeat pass adds burden but never another unique accepted length; do not treat a rejected panel as final output. |  |
| `allocation_meter_residual` | all electricity cards | For the same calibrated interval, convert actual reads using recorded factors. Subtract all directly assigned consumers inside the master exactly once from the master delta; outside-master direct readings are not subtracted. Add the own direct quantity and only its share of a positive residual using a complete eligible consumer set and positive denominator. A measured zero residual uses no weights. Negative or unknown residual, missing topology or incomplete consumers is a gap. Never add direct readings to the full master delta. |  |
| `allocation_shared_services` | all service cards | Attribute actual contracted hours to direct uses, owned idle and rework, then share only the remaining actual service with a complete, evidenced eligible denominator. Record the asset, bill, period, provider coverage and attribution decision. No assumed eight-hour day, standard annualization, generic lifetime or labour-hours proxy may supply the service quantity. Do not repeat provider-included energy or asset production. |  |
| `allocation_periods` | period and phase ledgers | Assign each input, event, service interval and output exactly once to the actual period or declared split interval. Carry measured opening/closing stock and WIP between periods with identical custody/state IDs. Record the reason and evidence for period-specific shared-service decisions and any replacement, termination or restart; unknown state blocks finalization. Reconcile period totals to the whole lot before dividing once by final L. |  |
| `allocation_material_representation` | composite material burdens and mass | Use the actual purchased composite as a whole or a documented split into measured constituents, exclusively. Do not add constituent production to an already complete composite dataset. Accepted retained material mass is a physical stock check, not a second customer-handover exchange or an extra final reference output. |  |

A damaged installation panel is not an automatically useful co-product. Actual recovery or downgrade needs a documented changed-state destination and burden treatment before a final exchange is selected. Physical retained material, temporary interfaces and usable original stock must remain distinguishable from the accepted installation service.

## 8. Foreground Data Collection, Calculation, and Quality Rules

Raw fields are stable ASCII keys in the following node protocols. Every card links to its own real node. Array-valued quantities align with the event or segment IDs in the same raw record; meter and service intermediate arithmetic is evaluated within each unique allocation-instance interval before summing the lot numerator; instrument conversions and current-state bridges are retained before calculation. Evidence fields are categorical or document references, not quantities to add. An unknown occurrence, condition or measurement is a gap; actual nonoccurrence needs the relevant absence record.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_survey_receive` | `survey_receive` | All inventory roles actually owned by survey_receive | event-ledger; stock census; instrument readings; signed physical handoff; defect/rework and acceptance records | post_interface_transfer_event_ids; post_interface_segment_ids; post_interface_centerline_m; post_interface_state_ids; post_interface_source_node; post_interface_recipient_node; post_interface_handoff_document_ids; post_interface_condition_evidence; post_interface_corner_and_opening_resolution; receive_packaging_opening_kg; receive_packaging_external_receipts_kg; receive_packaging_closing_unissued_intact_kg; receive_packaging_material_ids; receive_packaging_state_ids; receive_packaging_native_units; receive_packaging_native_quantities; receive_packaging_measured_kg_per_native_unit; receive_packaging_bridge_evidence; receive_packaging_stock_item_ids; receive_packaging_stock_sublocations; receive_packaging_stock_custodians; receive_packaging_stock_count_times; receive_packaging_receipt_event_ids; receive_reject_exit_event_ids; receive_reject_mass_kg; receive_reject_material_ids; receive_reject_state_ids; receive_reject_fate_codes; receive_reject_custodian_ids; receive_reject_waste_treatment_route; receive_reject_native_units; receive_reject_native_quantities; receive_reject_measured_kg_per_native_unit; receive_reject_bridge_evidence; receive_reject_absence_evidence; receive_packaging_waste_exit_event_ids; receive_packaging_waste_mass_kg; receive_packaging_waste_material_ids; receive_packaging_waste_state_ids; receive_packaging_waste_fate_codes; receive_packaging_waste_custodian_ids; receive_packaging_waste_waste_treatment_route; receive_packaging_waste_native_units; receive_packaging_waste_native_quantities; receive_packaging_waste_measured_kg_per_native_unit; receive_packaging_waste_bridge_evidence; receive_packaging_waste_absence_evidence; receive_unused_return_return_event_ids; receive_unused_return_return_kg; receive_unused_return_transfer_event_ids; receive_unused_return_transfer_kg; receive_unused_return_material_ids; receive_unused_return_state_ids; receive_unused_return_native_units; receive_unused_return_native_quantities; receive_unused_return_measured_kg_per_native_unit; receive_unused_return_bridge_evidence; receive_unused_return_external_custodian_ids; receive_unused_return_original_input_ids; receive_unused_return_original_upstream_burden_evidence; receive_unused_return_exit_quality_evidence; receive_unused_return_retained_wip_exclusion_evidence; survey_receive_electricity_supply_id; survey_receive_electricity_allocation_instance_ids; survey_receive_electricity_interval_ids; survey_receive_electricity_interval_start; survey_receive_electricity_interval_end; survey_receive_electricity_own_direct_meter_ids; survey_receive_electricity_own_direct_read_event_ids; survey_receive_electricity_own_direct_start_reads; survey_receive_electricity_own_direct_end_reads; survey_receive_electricity_own_direct_kwh_factors; survey_receive_electricity_own_direct_topology; survey_receive_electricity_master_scope_present; survey_receive_electricity_master_meter_id; survey_receive_electricity_master_start_read; survey_receive_electricity_master_end_read; survey_receive_electricity_master_kwh_factor; survey_receive_electricity_all_inside_meter_ids; survey_receive_electricity_all_inside_read_event_ids; survey_receive_electricity_all_inside_start_reads; survey_receive_electricity_all_inside_end_reads; survey_receive_electricity_all_inside_kwh_factors; survey_receive_electricity_all_inside_consumer_ids; survey_receive_electricity_eligible_consumer_ids; survey_receive_electricity_own_residual_weight; survey_receive_electricity_all_eligible_residual_weights; survey_receive_electricity_weight_method_evidence; survey_receive_electricity_meter_topology_evidence; survey_receive_electricity_calibration_evidence; survey_receive_access_service_asset_or_service_id; survey_receive_access_service_allocation_instance_ids; survey_receive_access_service_contract_id; survey_receive_access_service_period_ids; survey_receive_access_service_period_start; survey_receive_access_service_period_end; survey_receive_access_service_billed_native_quantity; survey_receive_access_service_billed_native_unit; survey_receive_access_service_actual_hours_per_native_unit; survey_receive_access_service_conversion_evidence; survey_receive_access_service_all_direct_service_event_ids; survey_receive_access_service_all_direct_service_hours; survey_receive_access_service_own_direct_service_event_ids; survey_receive_access_service_own_direct_service_hours; survey_receive_access_service_owned_idle_event_ids; survey_receive_access_service_owned_rework_event_ids; survey_receive_access_service_eligible_consumer_ids; survey_receive_access_service_own_residual_weight; survey_receive_access_service_all_eligible_residual_weights; survey_receive_access_service_allocation_decision_id; survey_receive_access_service_provider_boundary_coverage; receive_rails_opening_kg; receive_rails_external_receipts_kg; receive_rails_closing_unissued_intact_kg; receive_rails_material_ids; receive_rails_state_ids; receive_rails_native_units; receive_rails_native_quantities; receive_rails_measured_kg_per_native_unit; receive_rails_bridge_evidence; receive_rails_stock_item_ids; receive_rails_stock_sublocations; receive_rails_stock_custodians; receive_rails_stock_count_times; receive_rails_receipt_event_ids; issue_rails_transfer_event_ids; issue_rails_mass_kg; issue_rails_material_ids; issue_rails_state_ids; issue_rails_source_row_ids; issue_rails_source_node; issue_rails_recipient_node; issue_rails_custodian_from; issue_rails_custodian_to; issue_rails_handoff_document_ids; issue_rails_native_units; issue_rails_native_quantities; issue_rails_measured_kg_per_native_unit; issue_rails_bridge_evidence; receive_rail_fittings_opening_kg; receive_rail_fittings_external_receipts_kg; receive_rail_fittings_closing_unissued_intact_kg; receive_rail_fittings_material_ids; receive_rail_fittings_state_ids; receive_rail_fittings_native_units; receive_rail_fittings_native_quantities; receive_rail_fittings_measured_kg_per_native_unit; receive_rail_fittings_bridge_evidence; receive_rail_fittings_stock_item_ids; receive_rail_fittings_stock_sublocations; receive_rail_fittings_stock_custodians; receive_rail_fittings_stock_count_times; receive_rail_fittings_receipt_event_ids; issue_rail_fittings_transfer_event_ids; issue_rail_fittings_mass_kg; issue_rail_fittings_material_ids; issue_rail_fittings_state_ids; issue_rail_fittings_source_row_ids; issue_rail_fittings_source_node; issue_rail_fittings_recipient_node; issue_rail_fittings_custodian_from; issue_rail_fittings_custodian_to; issue_rail_fittings_handoff_document_ids; issue_rail_fittings_native_units; issue_rail_fittings_native_quantities; issue_rail_fittings_measured_kg_per_native_unit; issue_rail_fittings_bridge_evidence; receive_tension_wire_opening_kg; receive_tension_wire_external_receipts_kg; receive_tension_wire_closing_unissued_intact_kg; receive_tension_wire_material_ids; receive_tension_wire_state_ids; receive_tension_wire_native_units; receive_tension_wire_native_quantities; receive_tension_wire_measured_kg_per_native_unit; receive_tension_wire_bridge_evidence; receive_tension_wire_stock_item_ids; receive_tension_wire_stock_sublocations; receive_tension_wire_stock_custodians; receive_tension_wire_stock_count_times; receive_tension_wire_receipt_event_ids; issue_tension_wire_transfer_event_ids; issue_tension_wire_mass_kg; issue_tension_wire_material_ids; issue_tension_wire_state_ids; issue_tension_wire_source_row_ids; issue_tension_wire_source_node; issue_tension_wire_recipient_node; issue_tension_wire_custodian_from; issue_tension_wire_custodian_to; issue_tension_wire_handoff_document_ids; issue_tension_wire_native_units; issue_tension_wire_native_quantities; issue_tension_wire_measured_kg_per_native_unit; issue_tension_wire_bridge_evidence; receive_chainlink_fabric_opening_kg; receive_chainlink_fabric_external_receipts_kg; receive_chainlink_fabric_closing_unissued_intact_kg; receive_chainlink_fabric_material_ids; receive_chainlink_fabric_state_ids; receive_chainlink_fabric_native_units; receive_chainlink_fabric_native_quantities; receive_chainlink_fabric_measured_kg_per_native_unit; receive_chainlink_fabric_bridge_evidence; receive_chainlink_fabric_stock_item_ids; receive_chainlink_fabric_stock_sublocations; receive_chainlink_fabric_stock_custodians; receive_chainlink_fabric_stock_count_times; receive_chainlink_fabric_receipt_event_ids; issue_chainlink_fabric_transfer_event_ids; issue_chainlink_fabric_mass_kg; issue_chainlink_fabric_material_ids; issue_chainlink_fabric_state_ids; issue_chainlink_fabric_source_row_ids; issue_chainlink_fabric_source_node; issue_chainlink_fabric_recipient_node; issue_chainlink_fabric_custodian_from; issue_chainlink_fabric_custodian_to; issue_chainlink_fabric_handoff_document_ids; issue_chainlink_fabric_native_units; issue_chainlink_fabric_native_quantities; issue_chainlink_fabric_measured_kg_per_native_unit; issue_chainlink_fabric_bridge_evidence; receive_fabric_fittings_opening_kg; receive_fabric_fittings_external_receipts_kg; receive_fabric_fittings_closing_unissued_intact_kg; receive_fabric_fittings_material_ids; receive_fabric_fittings_state_ids; receive_fabric_fittings_native_units; receive_fabric_fittings_native_quantities; receive_fabric_fittings_measured_kg_per_native_unit; receive_fabric_fittings_bridge_evidence; receive_fabric_fittings_stock_item_ids; receive_fabric_fittings_stock_sublocations; receive_fabric_fittings_stock_custodians; receive_fabric_fittings_stock_count_times; receive_fabric_fittings_receipt_event_ids; issue_fabric_fittings_transfer_event_ids; issue_fabric_fittings_mass_kg; issue_fabric_fittings_material_ids; issue_fabric_fittings_state_ids; issue_fabric_fittings_source_row_ids; issue_fabric_fittings_source_node; issue_fabric_fittings_recipient_node; issue_fabric_fittings_custodian_from; issue_fabric_fittings_custodian_to; issue_fabric_fittings_handoff_document_ids; issue_fabric_fittings_native_units; issue_fabric_fittings_native_quantities; issue_fabric_fittings_measured_kg_per_native_unit; issue_fabric_fittings_bridge_evidence; receive_coating_cleanup_opening_kg; receive_coating_cleanup_external_receipts_kg; receive_coating_cleanup_closing_unissued_intact_kg; receive_coating_cleanup_material_ids; receive_coating_cleanup_state_ids; receive_coating_cleanup_native_units; receive_coating_cleanup_native_quantities; receive_coating_cleanup_measured_kg_per_native_unit; receive_coating_cleanup_bridge_evidence; receive_coating_cleanup_stock_item_ids; receive_coating_cleanup_stock_sublocations; receive_coating_cleanup_stock_custodians; receive_coating_cleanup_stock_count_times; receive_coating_cleanup_receipt_event_ids; issue_coating_cleanup_transfer_event_ids; issue_coating_cleanup_mass_kg; issue_coating_cleanup_material_ids; issue_coating_cleanup_state_ids; issue_coating_cleanup_source_row_ids; issue_coating_cleanup_source_node; issue_coating_cleanup_recipient_node; issue_coating_cleanup_custodian_from; issue_coating_cleanup_custodian_to; issue_coating_cleanup_handoff_document_ids; issue_coating_cleanup_native_units; issue_coating_cleanup_native_quantities; issue_coating_cleanup_measured_kg_per_native_unit; issue_coating_cleanup_bridge_evidence; physical_interface_release_transfer_event_ids; physical_interface_release_segment_ids; physical_interface_release_centerline_m; physical_interface_release_state_ids; physical_interface_release_source_node; physical_interface_release_recipient_node; physical_interface_release_handoff_document_ids; physical_interface_release_condition_evidence; physical_interface_release_corner_and_opening_resolution; issue_packaging_rail_brace_transfer_event_ids; issue_packaging_rail_brace_mass_kg; issue_packaging_rail_brace_material_ids; issue_packaging_rail_brace_state_ids; issue_packaging_rail_brace_source_row_ids; issue_packaging_rail_brace_source_node; issue_packaging_rail_brace_recipient_node; issue_packaging_rail_brace_custodian_from; issue_packaging_rail_brace_custodian_to; issue_packaging_rail_brace_handoff_document_ids; issue_packaging_rail_brace_native_units; issue_packaging_rail_brace_native_quantities; issue_packaging_rail_brace_measured_kg_per_native_unit; issue_packaging_rail_brace_bridge_evidence; issue_packaging_fabric_tension_transfer_event_ids; issue_packaging_fabric_tension_mass_kg; issue_packaging_fabric_tension_material_ids; issue_packaging_fabric_tension_state_ids; issue_packaging_fabric_tension_source_row_ids; issue_packaging_fabric_tension_source_node; issue_packaging_fabric_tension_recipient_node; issue_packaging_fabric_tension_custodian_from; issue_packaging_fabric_tension_custodian_to; issue_packaging_fabric_tension_handoff_document_ids; issue_packaging_fabric_tension_native_units; issue_packaging_fabric_tension_native_quantities; issue_packaging_fabric_tension_measured_kg_per_native_unit; issue_packaging_fabric_tension_bridge_evidence; issue_packaging_finish_accept_transfer_event_ids; issue_packaging_finish_accept_mass_kg; issue_packaging_finish_accept_material_ids; issue_packaging_finish_accept_state_ids; issue_packaging_finish_accept_source_row_ids; issue_packaging_finish_accept_source_node; issue_packaging_finish_accept_recipient_node; issue_packaging_finish_accept_custodian_from; issue_packaging_finish_accept_custodian_to; issue_packaging_finish_accept_handoff_document_ids; issue_packaging_finish_accept_native_units; issue_packaging_finish_accept_native_quantities; issue_packaging_finish_accept_measured_kg_per_native_unit; issue_packaging_finish_accept_bridge_evidence; survey_receive_lot_id; survey_receive_site_id; survey_receive_event_id; survey_receive_period_id; survey_receive_phase_id; survey_receive_event_start; survey_receive_event_end; survey_receive_operator_id; survey_receive_instrument_id; survey_receive_calibration_id; survey_receive_record_revision; survey_receive_source_document_id; survey_receive_state_before; survey_receive_state_after; survey_receive_defect_id; survey_receive_rework_route; survey_receive_rework_pass_id; survey_receive_upstream_dataset_id; survey_receive_upstream_dataset_boundary; survey_receive_upstream_dataset_packaging_coverage; survey_receive_absence_evidence; survey_receive_uncertainty_record; survey_receive_component_schedule; survey_receive_design_release_id; survey_receive_post_foundation_compatibility; survey_receive_height_mesh_gauge_selvage_gaw_gbw; survey_receive_material_receipt_fate_ledger; survey_receive_packaging_receipt_fate_ledger; survey_receive_original_material_unit_burdens; survey_receive_intact_stock_future_lot_assignments; survey_receive_mass_closure_group_keys; survey_receive_mass_closure_card_event_crosswalk; survey_receive_mass_closure_material_source_state_actual_state_period_kg_evidence; survey_receive_mass_closure_opening_processed_wip_kg; survey_receive_mass_closure_opening_processed_wip_event_ids; survey_receive_mass_closure_opening_previous_closing_event_ids; survey_receive_mass_closure_closing_processed_wip_kg; survey_receive_mass_closure_closing_processed_wip_event_ids; survey_receive_mass_closure_wip_panel_or_component_ids; survey_receive_mass_closure_wip_exclusivity_evidence; survey_receive_mass_closure_processed_transfer_in_kg; survey_receive_mass_closure_processed_transfer_out_kg; survey_receive_mass_closure_processed_transfer_event_crosswalk; survey_receive_mass_closure_measured_tolerance_kg | At each lot release, survey the physical line/terminal post and foundation interface against the signed actual design and inspect condition. Record a component schedule distinguishing accepted existing items from new owned installation items. Weigh receipts and opening/closing stocks by material SKU/current state; count all unissued intact stock once at its real custodian and sublocation. Record each gross material receipt, package, rejection, U/X exit and dispatch event. Weigh accompanying packaging separately and link source issue to the receiving node. Use supplier invoices only with the actual material and packaging boundary. Record meter and contracted-service events for this node and link defects and corrections to the original receipt. Complete aggregation and attribution method: Calculate each linked physical numerator by its literal calc rule with unique event keys. Preserve true repeat passes, all defects and material-specific pools. Divide physical card quantities once by the same positive L from calc_accepted_fence_service. Reconcile adjacent transfer IDs and period totals before normalizing. Observations post_interface and physical_interface_release remain independently measured existing-post/foundation Length/m readiness and release states under cp_survey_receive and calc_post_interface/calc_physical_interface_release; they are not inventory product exchanges. | kg; m; kWh; h, retained separately with the declared unit of each raw record | Every receipt, issue, physical transfer, operation, defect/rework pass, exit and acceptance; stock census at reporting boundaries; meter reads over each recorded interval; service records over each billed period | Complete installation-lot periods from actual node entry through acceptance or documented WIP/exit; retain opening and closing states for each period and all owned idle/rework intervals | Only survey_receive at the declared project/site and named actual custody locations; shared assets include the complete consumer set for the same interval | per reference flow | Calibrated scales/survey and meter checks; native-to-kg bridge samples for the same SKU/current state; signed design/condition and custody evidence; formulation and water-fate evidence; waste and receiver tickets; complete stock locations; all-consumer topology and allocation decision; record revision and uncertainty history |
| `cp_rail_brace` | `rail_brace` | All inventory roles actually owned by rail_brace | event-ledger; stock census; instrument readings; signed physical handoff; defect/rework and acceptance records | rails_transfer_event_ids; rails_mass_kg; rails_material_ids; rails_state_ids; rails_source_row_ids; rails_source_node; rails_recipient_node; rails_custodian_from; rails_custodian_to; rails_handoff_document_ids; rails_native_units; rails_native_quantities; rails_measured_kg_per_native_unit; rails_bridge_evidence; rail_fittings_transfer_event_ids; rail_fittings_mass_kg; rail_fittings_material_ids; rail_fittings_state_ids; rail_fittings_source_row_ids; rail_fittings_source_node; rail_fittings_recipient_node; rail_fittings_custodian_from; rail_fittings_custodian_to; rail_fittings_handoff_document_ids; rail_fittings_native_units; rail_fittings_native_quantities; rail_fittings_measured_kg_per_native_unit; rail_fittings_bridge_evidence; tension_wire_transfer_event_ids; tension_wire_mass_kg; tension_wire_material_ids; tension_wire_state_ids; tension_wire_source_row_ids; tension_wire_source_node; tension_wire_recipient_node; tension_wire_custodian_from; tension_wire_custodian_to; tension_wire_handoff_document_ids; tension_wire_native_units; tension_wire_native_quantities; tension_wire_measured_kg_per_native_unit; tension_wire_bridge_evidence; rail_ready_panels_transfer_event_ids; rail_ready_panels_segment_ids; rail_ready_panels_centerline_m; rail_ready_panels_state_ids; rail_ready_panels_source_node; rail_ready_panels_recipient_node; rail_ready_panels_handoff_document_ids; rail_ready_panels_condition_evidence; rail_ready_panels_corner_and_opening_resolution; rail_waste_exit_event_ids; rail_waste_mass_kg; rail_waste_material_ids; rail_waste_state_ids; rail_waste_fate_codes; rail_waste_custodian_ids; rail_waste_waste_treatment_route; rail_waste_native_units; rail_waste_native_quantities; rail_waste_measured_kg_per_native_unit; rail_waste_bridge_evidence; rail_waste_absence_evidence; rail_direct_release_release_event_ids; rail_direct_release_uncaptured_mass_kg; rail_direct_release_substance_ids; rail_direct_release_substance_names; rail_direct_release_receiving_media; rail_direct_release_particle_size_basis; rail_direct_release_measurement_method; rail_direct_release_capture_boundary_evidence; rail_direct_release_operation_ids; rail_direct_release_absence_evidence; rail_unused_return_return_event_ids; rail_unused_return_return_kg; rail_unused_return_transfer_event_ids; rail_unused_return_transfer_kg; rail_unused_return_material_ids; rail_unused_return_state_ids; rail_unused_return_native_units; rail_unused_return_native_quantities; rail_unused_return_measured_kg_per_native_unit; rail_unused_return_bridge_evidence; rail_unused_return_external_custodian_ids; rail_unused_return_original_input_ids; rail_unused_return_original_upstream_burden_evidence; rail_unused_return_exit_quality_evidence; rail_unused_return_retained_wip_exclusion_evidence; rail_brace_electricity_supply_id; rail_brace_electricity_allocation_instance_ids; rail_brace_electricity_interval_ids; rail_brace_electricity_interval_start; rail_brace_electricity_interval_end; rail_brace_electricity_own_direct_meter_ids; rail_brace_electricity_own_direct_read_event_ids; rail_brace_electricity_own_direct_start_reads; rail_brace_electricity_own_direct_end_reads; rail_brace_electricity_own_direct_kwh_factors; rail_brace_electricity_own_direct_topology; rail_brace_electricity_master_scope_present; rail_brace_electricity_master_meter_id; rail_brace_electricity_master_start_read; rail_brace_electricity_master_end_read; rail_brace_electricity_master_kwh_factor; rail_brace_electricity_all_inside_meter_ids; rail_brace_electricity_all_inside_read_event_ids; rail_brace_electricity_all_inside_start_reads; rail_brace_electricity_all_inside_end_reads; rail_brace_electricity_all_inside_kwh_factors; rail_brace_electricity_all_inside_consumer_ids; rail_brace_electricity_eligible_consumer_ids; rail_brace_electricity_own_residual_weight; rail_brace_electricity_all_eligible_residual_weights; rail_brace_electricity_weight_method_evidence; rail_brace_electricity_meter_topology_evidence; rail_brace_electricity_calibration_evidence; rail_brace_access_service_asset_or_service_id; rail_brace_access_service_allocation_instance_ids; rail_brace_access_service_contract_id; rail_brace_access_service_period_ids; rail_brace_access_service_period_start; rail_brace_access_service_period_end; rail_brace_access_service_billed_native_quantity; rail_brace_access_service_billed_native_unit; rail_brace_access_service_actual_hours_per_native_unit; rail_brace_access_service_conversion_evidence; rail_brace_access_service_all_direct_service_event_ids; rail_brace_access_service_all_direct_service_hours; rail_brace_access_service_own_direct_service_event_ids; rail_brace_access_service_own_direct_service_hours; rail_brace_access_service_owned_idle_event_ids; rail_brace_access_service_owned_rework_event_ids; rail_brace_access_service_eligible_consumer_ids; rail_brace_access_service_own_residual_weight; rail_brace_access_service_all_eligible_residual_weights; rail_brace_access_service_allocation_decision_id; rail_brace_access_service_provider_boundary_coverage; physical_interface_construction_feed_transfer_event_ids; physical_interface_construction_feed_segment_ids; physical_interface_construction_feed_centerline_m; physical_interface_construction_feed_state_ids; physical_interface_construction_feed_source_node; physical_interface_construction_feed_recipient_node; physical_interface_construction_feed_handoff_document_ids; physical_interface_construction_feed_condition_evidence; physical_interface_construction_feed_corner_and_opening_resolution; rail_brace_packaging_feed_transfer_event_ids; rail_brace_packaging_feed_mass_kg; rail_brace_packaging_feed_material_ids; rail_brace_packaging_feed_state_ids; rail_brace_packaging_feed_source_row_ids; rail_brace_packaging_feed_source_node; rail_brace_packaging_feed_recipient_node; rail_brace_packaging_feed_custodian_from; rail_brace_packaging_feed_custodian_to; rail_brace_packaging_feed_handoff_document_ids; rail_brace_packaging_feed_native_units; rail_brace_packaging_feed_native_quantities; rail_brace_packaging_feed_measured_kg_per_native_unit; rail_brace_packaging_feed_bridge_evidence; rail_brace_lot_id; rail_brace_site_id; rail_brace_event_id; rail_brace_period_id; rail_brace_phase_id; rail_brace_event_start; rail_brace_event_end; rail_brace_operator_id; rail_brace_instrument_id; rail_brace_calibration_id; rail_brace_record_revision; rail_brace_source_document_id; rail_brace_state_before; rail_brace_state_after; rail_brace_defect_id; rail_brace_rework_route; rail_brace_rework_pass_id; rail_brace_upstream_dataset_id; rail_brace_upstream_dataset_boundary; rail_brace_upstream_dataset_packaging_coverage; rail_brace_absence_evidence; rail_brace_uncertainty_record; rail_brace_component_schedule; rail_brace_incidental_cut_register; rail_brace_material_fate_ledger; rail_brace_packaging_fate_ledger; rail_brace_rejected_state_register; rail_ready_panels_retained_component_mass_kg; rail_ready_panels_retained_component_event_ids; rail_ready_panels_retained_component_material_ids; rail_ready_panels_retained_component_source_state_ids; rail_ready_panels_retained_component_actual_state_ids; rail_ready_panels_retained_component_period_ids; rail_ready_panels_retained_component_panel_transfer_ids; rail_ready_panels_retained_component_source_input_ids; rail_ready_panels_retained_component_bridge_evidence; rail_ready_panels_retained_component_existing_exclusion; rail_ready_panels_retained_component_representation_mode; rail_brace_mass_closure_group_keys; rail_brace_mass_closure_card_event_crosswalk; rail_brace_mass_closure_material_source_state_actual_state_period_kg_evidence; rail_brace_mass_closure_opening_processed_wip_kg; rail_brace_mass_closure_opening_processed_wip_event_ids; rail_brace_mass_closure_opening_previous_closing_event_ids; rail_brace_mass_closure_closing_processed_wip_kg; rail_brace_mass_closure_closing_processed_wip_event_ids; rail_brace_mass_closure_wip_panel_or_component_ids; rail_brace_mass_closure_wip_exclusivity_evidence; rail_brace_mass_closure_processed_transfer_in_kg; rail_brace_mass_closure_processed_transfer_out_kg; rail_brace_mass_closure_processed_transfer_event_crosswalk; rail_brace_mass_closure_measured_tolerance_kg | Confirm the recipient post-interface release and every rail-side material and package issue with matching transfer IDs. Measure actual same-state kg at issue/receipt, using a calibrated scale or a measured same-SKU/current-state bridge when native records use count or length. Log rail cuts, joins, actual framework and accessory completion and the measured panel handoff. Record each rework pass, offcut, captured waste, uncaptured species release, U/X exit and packaging fate at rail_brace. Retain operation-specific meter topology, calibrated readings, eligible consumers, contracted plant availability and original work-package ownership. Complete aggregation and attribution method: Calculate each linked physical numerator by its literal calc rule with unique event keys. Preserve true repeat passes, all defects and material-specific pools. Divide physical card quantities once by the same positive L from calc_accepted_fence_service. Reconcile adjacent transfer IDs and period totals before normalizing. Observation physical_interface_construction_feed confirms the same released asset geometry/state under cp_rail_brace and calc_physical_interface_construction_feed, with the same source-recipient observation IDs and real responsibility; no new asset manufacture or product acquisition. | kg; m; kWh; h, retained separately with the declared unit of each raw record | Every receipt, issue, physical transfer, operation, defect/rework pass, exit and acceptance; stock census at reporting boundaries; meter reads over each recorded interval; service records over each billed period | Complete installation-lot periods from actual node entry through acceptance or documented WIP/exit; retain opening and closing states for each period and all owned idle/rework intervals | Only rail_brace at the declared project/site and named actual custody locations; shared assets include the complete consumer set for the same interval | per reference flow | Calibrated scales/survey and meter checks; native-to-kg bridge samples for the same SKU/current state; signed design/condition and custody evidence; formulation and water-fate evidence; waste and receiver tickets; complete stock locations; all-consumer topology and allocation decision; record revision and uncertainty history |
| `cp_fabric_tension` | `fabric_tension` | All inventory roles actually owned by fabric_tension | event-ledger; stock census; instrument readings; signed physical handoff; defect/rework and acceptance records | rail_panel_feed_transfer_event_ids; rail_panel_feed_segment_ids; rail_panel_feed_centerline_m; rail_panel_feed_state_ids; rail_panel_feed_source_node; rail_panel_feed_recipient_node; rail_panel_feed_handoff_document_ids; rail_panel_feed_condition_evidence; rail_panel_feed_corner_and_opening_resolution; chainlink_fabric_transfer_event_ids; chainlink_fabric_mass_kg; chainlink_fabric_material_ids; chainlink_fabric_state_ids; chainlink_fabric_source_row_ids; chainlink_fabric_source_node; chainlink_fabric_recipient_node; chainlink_fabric_custodian_from; chainlink_fabric_custodian_to; chainlink_fabric_handoff_document_ids; chainlink_fabric_native_units; chainlink_fabric_native_quantities; chainlink_fabric_measured_kg_per_native_unit; chainlink_fabric_bridge_evidence; fabric_fittings_transfer_event_ids; fabric_fittings_mass_kg; fabric_fittings_material_ids; fabric_fittings_state_ids; fabric_fittings_source_row_ids; fabric_fittings_source_node; fabric_fittings_recipient_node; fabric_fittings_custodian_from; fabric_fittings_custodian_to; fabric_fittings_handoff_document_ids; fabric_fittings_native_units; fabric_fittings_native_quantities; fabric_fittings_measured_kg_per_native_unit; fabric_fittings_bridge_evidence; tensioned_fence_transfer_event_ids; tensioned_fence_segment_ids; tensioned_fence_centerline_m; tensioned_fence_state_ids; tensioned_fence_source_node; tensioned_fence_recipient_node; tensioned_fence_handoff_document_ids; tensioned_fence_condition_evidence; tensioned_fence_corner_and_opening_resolution; fabric_waste_exit_event_ids; fabric_waste_mass_kg; fabric_waste_material_ids; fabric_waste_state_ids; fabric_waste_fate_codes; fabric_waste_custodian_ids; fabric_waste_waste_treatment_route; fabric_waste_native_units; fabric_waste_native_quantities; fabric_waste_measured_kg_per_native_unit; fabric_waste_bridge_evidence; fabric_waste_absence_evidence; fabric_direct_release_release_event_ids; fabric_direct_release_uncaptured_mass_kg; fabric_direct_release_substance_ids; fabric_direct_release_substance_names; fabric_direct_release_receiving_media; fabric_direct_release_particle_size_basis; fabric_direct_release_measurement_method; fabric_direct_release_capture_boundary_evidence; fabric_direct_release_operation_ids; fabric_direct_release_absence_evidence; fabric_unused_return_return_event_ids; fabric_unused_return_return_kg; fabric_unused_return_transfer_event_ids; fabric_unused_return_transfer_kg; fabric_unused_return_material_ids; fabric_unused_return_state_ids; fabric_unused_return_native_units; fabric_unused_return_native_quantities; fabric_unused_return_measured_kg_per_native_unit; fabric_unused_return_bridge_evidence; fabric_unused_return_external_custodian_ids; fabric_unused_return_original_input_ids; fabric_unused_return_original_upstream_burden_evidence; fabric_unused_return_exit_quality_evidence; fabric_unused_return_retained_wip_exclusion_evidence; fabric_tension_electricity_supply_id; fabric_tension_electricity_allocation_instance_ids; fabric_tension_electricity_interval_ids; fabric_tension_electricity_interval_start; fabric_tension_electricity_interval_end; fabric_tension_electricity_own_direct_meter_ids; fabric_tension_electricity_own_direct_read_event_ids; fabric_tension_electricity_own_direct_start_reads; fabric_tension_electricity_own_direct_end_reads; fabric_tension_electricity_own_direct_kwh_factors; fabric_tension_electricity_own_direct_topology; fabric_tension_electricity_master_scope_present; fabric_tension_electricity_master_meter_id; fabric_tension_electricity_master_start_read; fabric_tension_electricity_master_end_read; fabric_tension_electricity_master_kwh_factor; fabric_tension_electricity_all_inside_meter_ids; fabric_tension_electricity_all_inside_read_event_ids; fabric_tension_electricity_all_inside_start_reads; fabric_tension_electricity_all_inside_end_reads; fabric_tension_electricity_all_inside_kwh_factors; fabric_tension_electricity_all_inside_consumer_ids; fabric_tension_electricity_eligible_consumer_ids; fabric_tension_electricity_own_residual_weight; fabric_tension_electricity_all_eligible_residual_weights; fabric_tension_electricity_weight_method_evidence; fabric_tension_electricity_meter_topology_evidence; fabric_tension_electricity_calibration_evidence; fabric_tension_access_service_asset_or_service_id; fabric_tension_access_service_allocation_instance_ids; fabric_tension_access_service_contract_id; fabric_tension_access_service_period_ids; fabric_tension_access_service_period_start; fabric_tension_access_service_period_end; fabric_tension_access_service_billed_native_quantity; fabric_tension_access_service_billed_native_unit; fabric_tension_access_service_actual_hours_per_native_unit; fabric_tension_access_service_conversion_evidence; fabric_tension_access_service_all_direct_service_event_ids; fabric_tension_access_service_all_direct_service_hours; fabric_tension_access_service_own_direct_service_event_ids; fabric_tension_access_service_own_direct_service_hours; fabric_tension_access_service_owned_idle_event_ids; fabric_tension_access_service_owned_rework_event_ids; fabric_tension_access_service_eligible_consumer_ids; fabric_tension_access_service_own_residual_weight; fabric_tension_access_service_all_eligible_residual_weights; fabric_tension_access_service_allocation_decision_id; fabric_tension_access_service_provider_boundary_coverage; fabric_tension_packaging_feed_transfer_event_ids; fabric_tension_packaging_feed_mass_kg; fabric_tension_packaging_feed_material_ids; fabric_tension_packaging_feed_state_ids; fabric_tension_packaging_feed_source_row_ids; fabric_tension_packaging_feed_source_node; fabric_tension_packaging_feed_recipient_node; fabric_tension_packaging_feed_custodian_from; fabric_tension_packaging_feed_custodian_to; fabric_tension_packaging_feed_handoff_document_ids; fabric_tension_packaging_feed_native_units; fabric_tension_packaging_feed_native_quantities; fabric_tension_packaging_feed_measured_kg_per_native_unit; fabric_tension_packaging_feed_bridge_evidence; fabric_tension_lot_id; fabric_tension_site_id; fabric_tension_event_id; fabric_tension_period_id; fabric_tension_phase_id; fabric_tension_event_start; fabric_tension_event_end; fabric_tension_operator_id; fabric_tension_instrument_id; fabric_tension_calibration_id; fabric_tension_record_revision; fabric_tension_source_document_id; fabric_tension_state_before; fabric_tension_state_after; fabric_tension_defect_id; fabric_tension_rework_route; fabric_tension_rework_pass_id; fabric_tension_upstream_dataset_id; fabric_tension_upstream_dataset_boundary; fabric_tension_upstream_dataset_packaging_coverage; fabric_tension_absence_evidence; fabric_tension_uncertainty_record; fabric_tension_component_schedule; fabric_tension_trim_join_register; fabric_tension_material_fate_ledger; fabric_tension_packaging_fate_ledger; fabric_tension_rejected_state_register; rail_panel_feed_retained_component_mass_kg; rail_panel_feed_retained_component_event_ids; rail_panel_feed_retained_component_material_ids; rail_panel_feed_retained_component_source_state_ids; rail_panel_feed_retained_component_actual_state_ids; rail_panel_feed_retained_component_period_ids; rail_panel_feed_retained_component_panel_transfer_ids; rail_panel_feed_retained_component_source_input_ids; rail_panel_feed_retained_component_bridge_evidence; rail_panel_feed_retained_component_existing_exclusion; rail_panel_feed_retained_component_representation_mode; tensioned_fence_retained_component_mass_kg; tensioned_fence_retained_component_event_ids; tensioned_fence_retained_component_material_ids; tensioned_fence_retained_component_source_state_ids; tensioned_fence_retained_component_actual_state_ids; tensioned_fence_retained_component_period_ids; tensioned_fence_retained_component_panel_transfer_ids; tensioned_fence_retained_component_source_input_ids; tensioned_fence_retained_component_bridge_evidence; tensioned_fence_retained_component_existing_exclusion; tensioned_fence_retained_component_representation_mode; fabric_tension_mass_closure_group_keys; fabric_tension_mass_closure_card_event_crosswalk; fabric_tension_mass_closure_material_source_state_actual_state_period_kg_evidence; fabric_tension_mass_closure_opening_processed_wip_kg; fabric_tension_mass_closure_opening_processed_wip_event_ids; fabric_tension_mass_closure_opening_previous_closing_event_ids; fabric_tension_mass_closure_closing_processed_wip_kg; fabric_tension_mass_closure_closing_processed_wip_event_ids; fabric_tension_mass_closure_wip_panel_or_component_ids; fabric_tension_mass_closure_wip_exclusivity_evidence; fabric_tension_mass_closure_processed_transfer_in_kg; fabric_tension_mass_closure_processed_transfer_out_kg; fabric_tension_mass_closure_processed_transfer_event_crosswalk; fabric_tension_mass_closure_measured_tolerance_kg | Receive the measured rail-integrated panels, actual galvanized woven fabric, attachment parts and accompanying packaging using paired transfer records. Verify fabric SKU and actual height, mesh, gauge, selvage and GAW/GBW state; resolve ferrous and aluminum fittings separately. Measure material kg with actual bridges and log join, stretch, fasten and trim events, panel length and tautness/secure-end/clearance condition. Identify each rejected state and rework event, material-specific waste, uncaptured release, U/X exit and package fate. Record node meter and service events with complete interval and consumer linkage. Complete aggregation and attribution method: Calculate each linked physical numerator by its literal calc rule with unique event keys. Preserve true repeat passes, all defects and material-specific pools. Divide physical card quantities once by the same positive L from calc_accepted_fence_service. Reconcile adjacent transfer IDs and period totals before normalizing. | kg; m; kWh; h, retained separately with the declared unit of each raw record | Every receipt, issue, physical transfer, operation, defect/rework pass, exit and acceptance; stock census at reporting boundaries; meter reads over each recorded interval; service records over each billed period | Complete installation-lot periods from actual node entry through acceptance or documented WIP/exit; retain opening and closing states for each period and all owned idle/rework intervals | Only fabric_tension at the declared project/site and named actual custody locations; shared assets include the complete consumer set for the same interval | per reference flow | Calibrated scales/survey and meter checks; native-to-kg bridge samples for the same SKU/current state; signed design/condition and custody evidence; formulation and water-fate evidence; waste and receiver tickets; complete stock locations; all-consumer topology and allocation decision; record revision and uncertainty history |
| `cp_finish_accept` | `finish_accept` | All inventory roles actually owned by finish_accept | event-ledger; stock census; instrument readings; signed physical handoff; defect/rework and acceptance records | finish_panel_feed_transfer_event_ids; finish_panel_feed_segment_ids; finish_panel_feed_centerline_m; finish_panel_feed_state_ids; finish_panel_feed_source_node; finish_panel_feed_recipient_node; finish_panel_feed_handoff_document_ids; finish_panel_feed_condition_evidence; finish_panel_feed_corner_and_opening_resolution; coating_cleanup_transfer_event_ids; coating_cleanup_mass_kg; coating_cleanup_material_ids; coating_cleanup_state_ids; coating_cleanup_source_row_ids; coating_cleanup_source_node; coating_cleanup_recipient_node; coating_cleanup_custodian_from; coating_cleanup_custodian_to; coating_cleanup_handoff_document_ids; coating_cleanup_native_units; coating_cleanup_native_quantities; coating_cleanup_measured_kg_per_native_unit; coating_cleanup_bridge_evidence; finish_water_opening_kg; finish_water_external_receipts_kg; finish_water_closing_unissued_intact_kg; finish_water_material_ids; finish_water_state_ids; finish_water_native_units; finish_water_native_quantities; finish_water_measured_kg_per_native_unit; finish_water_bridge_evidence; finish_water_stock_item_ids; finish_water_stock_sublocations; finish_water_stock_custodians; finish_water_stock_count_times; finish_water_receipt_event_ids; finish_waste_exit_event_ids; finish_waste_mass_kg; finish_waste_material_ids; finish_waste_state_ids; finish_waste_fate_codes; finish_waste_custodian_ids; finish_waste_waste_treatment_route; finish_waste_native_units; finish_waste_native_quantities; finish_waste_measured_kg_per_native_unit; finish_waste_bridge_evidence; finish_waste_absence_evidence; finish_wastewater_exit_event_ids; finish_wastewater_mass_kg; finish_wastewater_material_ids; finish_wastewater_state_ids; finish_wastewater_fate_codes; finish_wastewater_custodian_ids; finish_wastewater_waste_treatment_route; finish_wastewater_native_units; finish_wastewater_native_quantities; finish_wastewater_measured_kg_per_native_unit; finish_wastewater_bridge_evidence; finish_wastewater_absence_evidence; finish_water_vapour_release_event_ids; finish_water_vapour_observed_h2o_kg; finish_water_vapour_measurement_evidence; finish_water_vapour_air_medium_evidence; finish_water_vapour_coating_water_fraction; finish_water_vapour_coating_received_mass_kg; finish_water_vapour_coating_transfer_ids; finish_water_vapour_coating_formulation_ids; finish_water_vapour_coating_fraction_evidence; finish_water_vapour_panel_received_water_kg; finish_water_vapour_opening_processed_wip_water_kg; finish_water_vapour_accepted_retained_water_kg; finish_water_vapour_solid_waste_water_kg; finish_water_vapour_liquid_waste_water_kg; finish_water_vapour_unused_fresh_return_water_kg; finish_water_vapour_unused_fresh_transfer_water_kg; finish_water_vapour_processed_transfer_water_kg; finish_water_vapour_closing_processed_wip_water_kg; finish_water_vapour_pool_event_ids; finish_water_vapour_pool_exclusivity_evidence; finish_water_vapour_measurement_tolerance_kg; finish_other_release_release_event_ids; finish_other_release_uncaptured_mass_kg; finish_other_release_substance_ids; finish_other_release_substance_names; finish_other_release_receiving_media; finish_other_release_particle_size_basis; finish_other_release_measurement_method; finish_other_release_capture_boundary_evidence; finish_other_release_operation_ids; finish_other_release_absence_evidence; finish_unused_return_return_event_ids; finish_unused_return_return_kg; finish_unused_return_transfer_event_ids; finish_unused_return_transfer_kg; finish_unused_return_material_ids; finish_unused_return_state_ids; finish_unused_return_native_units; finish_unused_return_native_quantities; finish_unused_return_measured_kg_per_native_unit; finish_unused_return_bridge_evidence; finish_unused_return_external_custodian_ids; finish_unused_return_original_input_ids; finish_unused_return_original_upstream_burden_evidence; finish_unused_return_exit_quality_evidence; finish_unused_return_retained_wip_exclusion_evidence; accepted_fence_service_segment_ids; accepted_fence_service_net_centerline_m; accepted_fence_service_acceptance_ids; accepted_fence_service_corner_resolution; accepted_fence_service_opening_gap_register; accepted_fence_service_required_components_complete; accepted_fence_service_taut_fabric_state; accepted_fence_service_end_and_clearance_check; accepted_fence_service_finish_requirement_state; accepted_fence_service_configuration_id; finish_accept_electricity_supply_id; finish_accept_electricity_allocation_instance_ids; finish_accept_electricity_interval_ids; finish_accept_electricity_interval_start; finish_accept_electricity_interval_end; finish_accept_electricity_own_direct_meter_ids; finish_accept_electricity_own_direct_read_event_ids; finish_accept_electricity_own_direct_start_reads; finish_accept_electricity_own_direct_end_reads; finish_accept_electricity_own_direct_kwh_factors; finish_accept_electricity_own_direct_topology; finish_accept_electricity_master_scope_present; finish_accept_electricity_master_meter_id; finish_accept_electricity_master_start_read; finish_accept_electricity_master_end_read; finish_accept_electricity_master_kwh_factor; finish_accept_electricity_all_inside_meter_ids; finish_accept_electricity_all_inside_read_event_ids; finish_accept_electricity_all_inside_start_reads; finish_accept_electricity_all_inside_end_reads; finish_accept_electricity_all_inside_kwh_factors; finish_accept_electricity_all_inside_consumer_ids; finish_accept_electricity_eligible_consumer_ids; finish_accept_electricity_own_residual_weight; finish_accept_electricity_all_eligible_residual_weights; finish_accept_electricity_weight_method_evidence; finish_accept_electricity_meter_topology_evidence; finish_accept_electricity_calibration_evidence; finish_accept_access_service_asset_or_service_id; finish_accept_access_service_allocation_instance_ids; finish_accept_access_service_contract_id; finish_accept_access_service_period_ids; finish_accept_access_service_period_start; finish_accept_access_service_period_end; finish_accept_access_service_billed_native_quantity; finish_accept_access_service_billed_native_unit; finish_accept_access_service_actual_hours_per_native_unit; finish_accept_access_service_conversion_evidence; finish_accept_access_service_all_direct_service_event_ids; finish_accept_access_service_all_direct_service_hours; finish_accept_access_service_own_direct_service_event_ids; finish_accept_access_service_own_direct_service_hours; finish_accept_access_service_owned_idle_event_ids; finish_accept_access_service_owned_rework_event_ids; finish_accept_access_service_eligible_consumer_ids; finish_accept_access_service_own_residual_weight; finish_accept_access_service_all_eligible_residual_weights; finish_accept_access_service_allocation_decision_id; finish_accept_access_service_provider_boundary_coverage; finish_accept_packaging_feed_transfer_event_ids; finish_accept_packaging_feed_mass_kg; finish_accept_packaging_feed_material_ids; finish_accept_packaging_feed_state_ids; finish_accept_packaging_feed_source_row_ids; finish_accept_packaging_feed_source_node; finish_accept_packaging_feed_recipient_node; finish_accept_packaging_feed_custodian_from; finish_accept_packaging_feed_custodian_to; finish_accept_packaging_feed_handoff_document_ids; finish_accept_packaging_feed_native_units; finish_accept_packaging_feed_native_quantities; finish_accept_packaging_feed_measured_kg_per_native_unit; finish_accept_packaging_feed_bridge_evidence; finish_accept_lot_id; finish_accept_site_id; finish_accept_event_id; finish_accept_period_id; finish_accept_phase_id; finish_accept_event_start; finish_accept_event_end; finish_accept_operator_id; finish_accept_instrument_id; finish_accept_calibration_id; finish_accept_record_revision; finish_accept_source_document_id; finish_accept_state_before; finish_accept_state_after; finish_accept_defect_id; finish_accept_rework_route; finish_accept_rework_pass_id; finish_accept_upstream_dataset_id; finish_accept_upstream_dataset_boundary; finish_accept_upstream_dataset_packaging_coverage; finish_accept_absence_evidence; finish_accept_uncertainty_record; finish_accept_component_acceptance_register; finish_accept_actual_formulation_ids; finish_accept_surface_repair_requirement_evidence; finish_accept_finish_activation_evidence; finish_accept_material_fate_ledger; finish_accept_packaging_fate_ledger; finish_accept_rejected_state_register; finish_accept_unique_final_output_register; finish_panel_feed_retained_component_mass_kg; finish_panel_feed_retained_component_event_ids; finish_panel_feed_retained_component_material_ids; finish_panel_feed_retained_component_source_state_ids; finish_panel_feed_retained_component_actual_state_ids; finish_panel_feed_retained_component_period_ids; finish_panel_feed_retained_component_panel_transfer_ids; finish_panel_feed_retained_component_source_input_ids; finish_panel_feed_retained_component_bridge_evidence; finish_panel_feed_retained_component_existing_exclusion; finish_panel_feed_retained_component_representation_mode; accepted_fence_service_retained_component_mass_kg; accepted_fence_service_retained_component_event_ids; accepted_fence_service_retained_component_material_ids; accepted_fence_service_retained_component_source_state_ids; accepted_fence_service_retained_component_actual_state_ids; accepted_fence_service_retained_component_period_ids; accepted_fence_service_retained_component_panel_transfer_ids; accepted_fence_service_retained_component_source_input_ids; accepted_fence_service_retained_component_bridge_evidence; accepted_fence_service_retained_component_existing_exclusion; accepted_fence_service_retained_component_representation_mode; finish_accept_mass_closure_group_keys; finish_accept_mass_closure_card_event_crosswalk; finish_accept_mass_closure_material_source_state_actual_state_period_kg_evidence; finish_accept_mass_closure_opening_processed_wip_kg; finish_accept_mass_closure_opening_processed_wip_event_ids; finish_accept_mass_closure_opening_previous_closing_event_ids; finish_accept_mass_closure_closing_processed_wip_kg; finish_accept_mass_closure_closing_processed_wip_event_ids; finish_accept_mass_closure_wip_panel_or_component_ids; finish_accept_mass_closure_wip_exclusivity_evidence; finish_accept_mass_closure_processed_transfer_in_kg; finish_accept_mass_closure_processed_transfer_out_kg; finish_accept_mass_closure_processed_transfer_event_crosswalk; finish_accept_mass_closure_measured_tolerance_kg; finish_water_vapour_pool_card_event_crosswalk; finish_water_vapour_processed_transfer_event_crosswalk ; finish_water_vapour_direct_liquid_h2o_kg | Receive the measured tensioned parent and identify the actual finishing requirement before using any repair product or water. Record approved actual formulation, consumed constituents, fresh-water source and opening/receipt/unissued-closing stock, all water-only fates and an independent actual H2O-to-air observation or validated model. Weigh solid and liquid waste by material, measure uncaptured species and medium, and log U/X exits and package fates at this node. Inspect every owned component, tautness, trimmed bent ends, project-specific clearance and specified repair state. Survey unique accepted panel centerlines, resolve corners once and exclude opening/gate gaps, defects and WIP. Link final acceptance, metre denominator, meter and service records to the actual period. Complete aggregation and attribution method: Calculate each linked physical numerator by its literal calc rule with unique event keys. Preserve true repeat passes, all defects and material-specific pools. Divide physical card quantities once by the same positive L from calc_accepted_fence_service. Reconcile adjacent transfer IDs and period totals before normalizing.  Any evidenced direct liquid H2O exit is independently measured as a water portion of the actual finish_other_release physical carrier by source event, current state and receiving medium, exclusive of vapour, collected wastewater and all other fates. Unknown occurrence, medium or water quantity is a gap and cannot be inferred from a residual.| kg; m; kWh; h, retained separately with the declared unit of each raw record | Every receipt, issue, physical transfer, operation, defect/rework pass, exit and acceptance; stock census at reporting boundaries; meter reads over each recorded interval; service records over each billed period | Complete installation-lot periods from actual node entry through acceptance or documented WIP/exit; retain opening and closing states for each period and all owned idle/rework intervals | Only finish_accept at the declared project/site and named actual custody locations; shared assets include the complete consumer set for the same interval | per reference flow | Calibrated scales/survey and meter checks; native-to-kg bridge samples for the same SKU/current state; signed design/condition and custody evidence; formulation and water-fate evidence; waste and receiver tickets; complete stock locations; all-consumer topology and allocation decision; record revision and uncertainty history |

### Calculation Rules

The first output of each rule is the physical numerator used by its card, except calc_accepted_fence_service, which produces L. Meter/service intermediates and the water closure gap are explicitly listed outputs of that rule and remain diagnostics in physical units. No formula in this table divides by L: card Amount rules carry the sole normalization. All physical outputs, raw keys, protocol IDs and static functions are declared here or in the node protocol.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_post_interface` | `post_interface` | actual_post_interface = SUM_UNIQUE_SEGMENTS(post_interface_centerline_m, post_interface_segment_ids). The output is a physical numerator in m. This observation output is used only by its protocol and acceptance gate, not by an inventory Amount or exchange. Keep the measured physical geometry without assigning another product burden. Record actual received or transferred physical geometry and accepted/current state. Source and recipient paired events agree; partial lots and WIP are explicit. Neither a design document nor a fixed 1 m substitutes for actual geometry. Definition SUM_UNIQUE_SEGMENTS: Sum mutually disjoint measured centerline segments keyed by stable segment ID. Resolve shared corners once and remove actual gate and opening gaps before summing. Rework visits do not create new accepted segments. Only segments satisfying the named card current-state gate participate; for the final reference, every counted segment must be net and accepted. This is an existing-asset observation/readiness measurement with its own unchanged ID, measured Length/m/state and interface gate; not an inventory product exchange and not a manufactured material or design-document product. | post_interface_transfer_event_ids; post_interface_segment_ids; post_interface_centerline_m; post_interface_state_ids; post_interface_source_node; post_interface_recipient_node; post_interface_handoff_document_ids; post_interface_condition_evidence; post_interface_corner_and_opening_resolution; cp_survey_receive; SUM_UNIQUE_SEGMENTS | actual_post_interface |  |
| `calc_receive_packaging` | `receive_packaging` | actual_receive_packaging = receive_packaging_opening_kg + receive_packaging_external_receipts_kg - receive_packaging_closing_unissued_intact_kg. The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. All three pools are actual kg after a same-SKU/current-state bridge. Closing is all intact stock unissued to this lot, counted once across real sublocations; issued U/X exits, retained installation and processed WIP are not closing intact. Gross includes actual unused exits; no second netting.  | receive_packaging_opening_kg; receive_packaging_external_receipts_kg; receive_packaging_closing_unissued_intact_kg; receive_packaging_material_ids; receive_packaging_state_ids; receive_packaging_native_units; receive_packaging_native_quantities; receive_packaging_measured_kg_per_native_unit; receive_packaging_bridge_evidence; receive_packaging_stock_item_ids; receive_packaging_stock_sublocations; receive_packaging_stock_custodians; receive_packaging_stock_count_times; receive_packaging_receipt_event_ids; cp_survey_receive | actual_receive_packaging |  |
| `calc_receive_reject` | `receive_reject` | actual_receive_reject = SUM_ONCE(receive_reject_mass_kg, receive_reject_exit_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Each physical discarded quantity has one producing node and one measured fate; packaging and captured particles are composition-resolved. Closing WIP or usable exits are not waste. Split mixed liquid and solid constituents before a water-only balance. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | receive_reject_exit_event_ids; receive_reject_mass_kg; receive_reject_material_ids; receive_reject_state_ids; receive_reject_fate_codes; receive_reject_custodian_ids; receive_reject_waste_treatment_route; receive_reject_native_units; receive_reject_native_quantities; receive_reject_measured_kg_per_native_unit; receive_reject_bridge_evidence; receive_reject_absence_evidence; cp_survey_receive; SUM_ONCE | actual_receive_reject |  |
| `calc_receive_packaging_waste` | `receive_packaging_waste` | actual_receive_packaging_waste = SUM_ONCE(receive_packaging_waste_mass_kg, receive_packaging_waste_exit_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Each physical discarded quantity has one producing node and one measured fate; packaging and captured particles are composition-resolved. Closing WIP or usable exits are not waste. Split mixed liquid and solid constituents before a water-only balance. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | receive_packaging_waste_exit_event_ids; receive_packaging_waste_mass_kg; receive_packaging_waste_material_ids; receive_packaging_waste_state_ids; receive_packaging_waste_fate_codes; receive_packaging_waste_custodian_ids; receive_packaging_waste_waste_treatment_route; receive_packaging_waste_native_units; receive_packaging_waste_native_quantities; receive_packaging_waste_measured_kg_per_native_unit; receive_packaging_waste_bridge_evidence; receive_packaging_waste_absence_evidence; cp_survey_receive; SUM_ONCE | actual_receive_packaging_waste |  |
| `calc_receive_unused_return` | `receive_unused_return` | actual_receive_unused_return = SUM_ONCE(receive_unused_return_return_kg, receive_unused_return_return_event_ids) + SUM_ONCE(receive_unused_return_transfer_kg, receive_unused_return_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Return U and external transfer X are disjoint positive exits and exclude closing intact stock, retained product, WIP, waste and internal feed. Carry only the unchanged original material upstream burden; all site work, idle and rework burdens remain with the installation lot. Net-consumed diagnostics never create a second negative exchange or credit. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | receive_unused_return_return_event_ids; receive_unused_return_return_kg; receive_unused_return_transfer_event_ids; receive_unused_return_transfer_kg; receive_unused_return_material_ids; receive_unused_return_state_ids; receive_unused_return_native_units; receive_unused_return_native_quantities; receive_unused_return_measured_kg_per_native_unit; receive_unused_return_bridge_evidence; receive_unused_return_external_custodian_ids; receive_unused_return_original_input_ids; receive_unused_return_original_upstream_burden_evidence; receive_unused_return_exit_quality_evidence; receive_unused_return_retained_wip_exclusion_evidence; cp_survey_receive; SUM_ONCE | actual_receive_unused_return |  |
| `calc_survey_receive_electricity` | `survey_receive_electricity` | survey_receive_electricity_direct_kwh = SUM_ONCE((survey_receive_electricity_own_direct_end_reads - survey_receive_electricity_own_direct_start_reads) * survey_receive_electricity_own_direct_kwh_factors, survey_receive_electricity_own_direct_read_event_ids); survey_receive_electricity_master_kwh = CASE_PRESENT(survey_receive_electricity_master_scope_present, (survey_receive_electricity_master_end_read - survey_receive_electricity_master_start_read) * survey_receive_electricity_master_kwh_factor, 0); survey_receive_electricity_inside_direct_kwh = CASE_PRESENT(survey_receive_electricity_master_scope_present, SUM_ONCE((survey_receive_electricity_all_inside_end_reads - survey_receive_electricity_all_inside_start_reads) * survey_receive_electricity_all_inside_kwh_factors, survey_receive_electricity_all_inside_read_event_ids), 0); survey_receive_electricity_residual_kwh = survey_receive_electricity_master_kwh - survey_receive_electricity_inside_direct_kwh; survey_receive_electricity_allocated_interval_kwh = survey_receive_electricity_direct_kwh + CASE_ZERO(survey_receive_electricity_residual_kwh, 0, survey_receive_electricity_residual_kwh * survey_receive_electricity_own_residual_weight / SUM(survey_receive_electricity_all_eligible_residual_weights)); actual_survey_receive_electricity = SUM_ONCE(survey_receive_electricity_allocated_interval_kwh, survey_receive_electricity_allocation_instance_ids). The output is a physical numerator in kWh. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Evaluate direct, master, inside-direct, residual and allocation separately for each recorded same-master allocation interval; read-event IDs identify a meter plus interval, preserving repeated real intervals. Sum allocated interval quantities using unique allocation_instance_ids to the physical lot numerator. Own direct may include outside-master meters, but all_inside contains only direct consumers inside the measured master and each exactly once. Direct-only operation has an evidenced zero residual or an actual topology-proven direct-only branch with no shared master has diagnostic neutral zero terms, no weights required. An existing nonzero master exactly assigned to inside-direct consumers also has zero residual and needs no weights. Positive residual requires every eligible weight strictly positive, a complete eligible consumer set and a positive denominator. Unknown or negative residual is a gap. All node allocations plus other consumers must reconcile the same master interval. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition CASE_PRESENT: Evaluate the measured present branch only when actual meter-topology evidence says a shared-master scope exists; evaluate the absent branch only when that topology proves direct-only supply. Unknown scope is a gap. The absent-branch zero is a diagnostic neutral term, never an invented zero reading. Definition CASE_ZERO: CASE_ZERO(r, z, p) returns z when measured r equals zero without evaluating any weight division; it returns p only for a measured positive residual with a reviewed complete eligible consumer set, every eligible weight strictly positive and a positive denominator. A negative or unknown residual is invalid and remains a gap; it is never clipped to zero. Definition SUM: Arithmetic sum over the explicitly complete set recorded in the applicable protocol. | survey_receive_electricity_supply_id; survey_receive_electricity_allocation_instance_ids; survey_receive_electricity_interval_ids; survey_receive_electricity_interval_start; survey_receive_electricity_interval_end; survey_receive_electricity_own_direct_meter_ids; survey_receive_electricity_own_direct_read_event_ids; survey_receive_electricity_own_direct_start_reads; survey_receive_electricity_own_direct_end_reads; survey_receive_electricity_own_direct_kwh_factors; survey_receive_electricity_own_direct_topology; survey_receive_electricity_master_scope_present; survey_receive_electricity_master_meter_id; survey_receive_electricity_master_start_read; survey_receive_electricity_master_end_read; survey_receive_electricity_master_kwh_factor; survey_receive_electricity_all_inside_meter_ids; survey_receive_electricity_all_inside_read_event_ids; survey_receive_electricity_all_inside_start_reads; survey_receive_electricity_all_inside_end_reads; survey_receive_electricity_all_inside_kwh_factors; survey_receive_electricity_all_inside_consumer_ids; survey_receive_electricity_eligible_consumer_ids; survey_receive_electricity_own_residual_weight; survey_receive_electricity_all_eligible_residual_weights; survey_receive_electricity_weight_method_evidence; survey_receive_electricity_meter_topology_evidence; survey_receive_electricity_calibration_evidence; cp_survey_receive; SUM_ONCE; CASE_PRESENT; CASE_ZERO; SUM | actual_survey_receive_electricity; survey_receive_electricity_direct_kwh; survey_receive_electricity_master_kwh; survey_receive_electricity_inside_direct_kwh; survey_receive_electricity_residual_kwh; survey_receive_electricity_allocated_interval_kwh |  |
| `calc_survey_receive_access_service` | `survey_receive_access_service` | survey_receive_access_service_billed_h = survey_receive_access_service_billed_native_quantity * survey_receive_access_service_actual_hours_per_native_unit; survey_receive_access_service_direct_h = SUM_ONCE(survey_receive_access_service_own_direct_service_hours, survey_receive_access_service_own_direct_service_event_ids); survey_receive_access_service_residual_h = survey_receive_access_service_billed_h - SUM_ONCE(survey_receive_access_service_all_direct_service_hours, survey_receive_access_service_all_direct_service_event_ids); survey_receive_access_service_allocated_period_h = survey_receive_access_service_direct_h + CASE_ZERO(survey_receive_access_service_residual_h, 0, survey_receive_access_service_residual_h * survey_receive_access_service_own_residual_weight / SUM(survey_receive_access_service_all_eligible_residual_weights)); actual_survey_receive_access_service = SUM_ONCE(survey_receive_access_service_allocated_period_h, survey_receive_access_service_allocation_instance_ids). The output is a physical numerator in h. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Evaluate billed, direct, residual and allocation within each single recorded contract/billing allocation period, then sum allocated-period hours by unique allocation_instance_ids. Different periods retain their own eligible weights; every eligible weight is strictly positive when the residual is positive, and an evidenced ineligible node receives zero residual share; do not pool residuals across unlike periods. The contract and actual availability establish the conversion; no standard shift, calendar year or assumed lifetime is allowed. Own direct records include owned idle/rework exactly once. Complete billed-period consumers reconcile direct plus residual service; a zero residual needs no weights, a positive one needs complete positive weights. Provider-included energy or asset burden is not purchased again. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition CASE_ZERO: CASE_ZERO(r, z, p) returns z when measured r equals zero without evaluating any weight division; it returns p only for a measured positive residual with a reviewed complete eligible consumer set, every eligible weight strictly positive and a positive denominator. A negative or unknown residual is invalid and remains a gap; it is never clipped to zero. Definition SUM: Arithmetic sum over the explicitly complete set recorded in the applicable protocol. | survey_receive_access_service_asset_or_service_id; survey_receive_access_service_allocation_instance_ids; survey_receive_access_service_contract_id; survey_receive_access_service_period_ids; survey_receive_access_service_period_start; survey_receive_access_service_period_end; survey_receive_access_service_billed_native_quantity; survey_receive_access_service_billed_native_unit; survey_receive_access_service_actual_hours_per_native_unit; survey_receive_access_service_conversion_evidence; survey_receive_access_service_all_direct_service_event_ids; survey_receive_access_service_all_direct_service_hours; survey_receive_access_service_own_direct_service_event_ids; survey_receive_access_service_own_direct_service_hours; survey_receive_access_service_owned_idle_event_ids; survey_receive_access_service_owned_rework_event_ids; survey_receive_access_service_eligible_consumer_ids; survey_receive_access_service_own_residual_weight; survey_receive_access_service_all_eligible_residual_weights; survey_receive_access_service_allocation_decision_id; survey_receive_access_service_provider_boundary_coverage; cp_survey_receive; SUM_ONCE; CASE_ZERO; SUM | actual_survey_receive_access_service; survey_receive_access_service_billed_h; survey_receive_access_service_direct_h; survey_receive_access_service_residual_h; survey_receive_access_service_allocated_period_h |  |
| `calc_rails` | `rails` | actual_rails = SUM_ONCE(rails_mass_kg, rails_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Original component measurement ledger issue_rails is retained under conditional inventory dispatch issue_materials_rail_brace; its actual SKU/state quantity matches the individual recipient input, each actual concrete exchange is verified independently, and no aggregate mixed-product identity or repeated procurement is created. | rails_transfer_event_ids; rails_mass_kg; rails_material_ids; rails_state_ids; rails_source_row_ids; rails_source_node; rails_recipient_node; rails_custodian_from; rails_custodian_to; rails_handoff_document_ids; rails_native_units; rails_native_quantities; rails_measured_kg_per_native_unit; rails_bridge_evidence; cp_rail_brace; SUM_ONCE | actual_rails |  |
| `calc_rail_fittings` | `rail_fittings` | actual_rail_fittings = SUM_ONCE(rail_fittings_mass_kg, rail_fittings_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Original component measurement ledger issue_rail_fittings is retained under conditional inventory dispatch issue_materials_rail_brace; its actual SKU/state quantity matches the individual recipient input, each actual concrete exchange is verified independently, and no aggregate mixed-product identity or repeated procurement is created. | rail_fittings_transfer_event_ids; rail_fittings_mass_kg; rail_fittings_material_ids; rail_fittings_state_ids; rail_fittings_source_row_ids; rail_fittings_source_node; rail_fittings_recipient_node; rail_fittings_custodian_from; rail_fittings_custodian_to; rail_fittings_handoff_document_ids; rail_fittings_native_units; rail_fittings_native_quantities; rail_fittings_measured_kg_per_native_unit; rail_fittings_bridge_evidence; cp_rail_brace; SUM_ONCE | actual_rail_fittings |  |
| `calc_tension_wire` | `tension_wire` | actual_tension_wire = SUM_ONCE(tension_wire_mass_kg, tension_wire_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Original component measurement ledger issue_tension_wire is retained under conditional inventory dispatch issue_materials_rail_brace; its actual SKU/state quantity matches the individual recipient input, each actual concrete exchange is verified independently, and no aggregate mixed-product identity or repeated procurement is created. | tension_wire_transfer_event_ids; tension_wire_mass_kg; tension_wire_material_ids; tension_wire_state_ids; tension_wire_source_row_ids; tension_wire_source_node; tension_wire_recipient_node; tension_wire_custodian_from; tension_wire_custodian_to; tension_wire_handoff_document_ids; tension_wire_native_units; tension_wire_native_quantities; tension_wire_measured_kg_per_native_unit; tension_wire_bridge_evidence; cp_rail_brace; SUM_ONCE | actual_tension_wire |  |
| `calc_rail_ready_panels` | `rail_ready_panels` | actual_rail_ready_panels = SUM_ONCE(rail_ready_panels_centerline_m, rail_ready_panels_transfer_event_ids); rail_ready_panels_retained_material_mass_kg = SUM_ONCE(rail_ready_panels_retained_component_mass_kg, rail_ready_panels_retained_component_event_ids). The output is a physical numerator in m. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Record actual received or transferred physical geometry and accepted/current state. Source and recipient paired events agree; partial lots and WIP are explicit. Neither a design document nor a fixed 1 m substitutes for actual geometry. The retained-mass diagnostic sums measured new installation component/constituent kg linked to these actual panel handoff or acceptance events, with exact material/source-state/current-state/period and source input IDs. Exclude existing posts/foundations and pre-existing components. Use whole composite or measured constituents exclusively. Metres supply the transfer/acceptance gate, never a guessed kg conversion; the diagnostic creates no extra product exchange or procurement burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | rail_ready_panels_transfer_event_ids; rail_ready_panels_segment_ids; rail_ready_panels_centerline_m; rail_ready_panels_state_ids; rail_ready_panels_source_node; rail_ready_panels_recipient_node; rail_ready_panels_handoff_document_ids; rail_ready_panels_condition_evidence; rail_ready_panels_corner_and_opening_resolution; cp_rail_brace; SUM_ONCE; rail_ready_panels_retained_component_mass_kg; rail_ready_panels_retained_component_event_ids; rail_ready_panels_retained_component_material_ids; rail_ready_panels_retained_component_source_state_ids; rail_ready_panels_retained_component_actual_state_ids; rail_ready_panels_retained_component_period_ids; rail_ready_panels_retained_component_panel_transfer_ids; rail_ready_panels_retained_component_source_input_ids; rail_ready_panels_retained_component_bridge_evidence; rail_ready_panels_retained_component_existing_exclusion; rail_ready_panels_retained_component_representation_mode | actual_rail_ready_panels; rail_ready_panels_retained_material_mass_kg |  |
| `calc_rail_waste` | `rail_waste` | actual_rail_waste = SUM_ONCE(rail_waste_mass_kg, rail_waste_exit_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Each physical discarded quantity has one producing node and one measured fate; packaging and captured particles are composition-resolved. Closing WIP or usable exits are not waste. Split mixed liquid and solid constituents before a water-only balance. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | rail_waste_exit_event_ids; rail_waste_mass_kg; rail_waste_material_ids; rail_waste_state_ids; rail_waste_fate_codes; rail_waste_custodian_ids; rail_waste_waste_treatment_route; rail_waste_native_units; rail_waste_native_quantities; rail_waste_measured_kg_per_native_unit; rail_waste_bridge_evidence; rail_waste_absence_evidence; cp_rail_brace; SUM_ONCE | actual_rail_waste |  |
| `calc_rail_direct_release` | `rail_direct_release` | actual_rail_direct_release = SUM_ONCE(rail_direct_release_uncaptured_mass_kg, rail_direct_release_release_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Retain each substance, particle basis and medium as a distinct final exchange; this aggregate card is not a generic pollutant UUID. Captured waste is excluded. Unknown substance, medium or quantity blocks that exchange; a material balance deficit is not a measured release. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | rail_direct_release_release_event_ids; rail_direct_release_uncaptured_mass_kg; rail_direct_release_substance_ids; rail_direct_release_substance_names; rail_direct_release_receiving_media; rail_direct_release_particle_size_basis; rail_direct_release_measurement_method; rail_direct_release_capture_boundary_evidence; rail_direct_release_operation_ids; rail_direct_release_absence_evidence; cp_rail_brace; SUM_ONCE | actual_rail_direct_release |  |
| `calc_rail_unused_return` | `rail_unused_return` | actual_rail_unused_return = SUM_ONCE(rail_unused_return_return_kg, rail_unused_return_return_event_ids) + SUM_ONCE(rail_unused_return_transfer_kg, rail_unused_return_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Return U and external transfer X are disjoint positive exits and exclude closing intact stock, retained product, WIP, waste and internal feed. Carry only the unchanged original material upstream burden; all site work, idle and rework burdens remain with the installation lot. Net-consumed diagnostics never create a second negative exchange or credit. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | rail_unused_return_return_event_ids; rail_unused_return_return_kg; rail_unused_return_transfer_event_ids; rail_unused_return_transfer_kg; rail_unused_return_material_ids; rail_unused_return_state_ids; rail_unused_return_native_units; rail_unused_return_native_quantities; rail_unused_return_measured_kg_per_native_unit; rail_unused_return_bridge_evidence; rail_unused_return_external_custodian_ids; rail_unused_return_original_input_ids; rail_unused_return_original_upstream_burden_evidence; rail_unused_return_exit_quality_evidence; rail_unused_return_retained_wip_exclusion_evidence; cp_rail_brace; SUM_ONCE | actual_rail_unused_return |  |
| `calc_rail_brace_electricity` | `rail_brace_electricity` | rail_brace_electricity_direct_kwh = SUM_ONCE((rail_brace_electricity_own_direct_end_reads - rail_brace_electricity_own_direct_start_reads) * rail_brace_electricity_own_direct_kwh_factors, rail_brace_electricity_own_direct_read_event_ids); rail_brace_electricity_master_kwh = CASE_PRESENT(rail_brace_electricity_master_scope_present, (rail_brace_electricity_master_end_read - rail_brace_electricity_master_start_read) * rail_brace_electricity_master_kwh_factor, 0); rail_brace_electricity_inside_direct_kwh = CASE_PRESENT(rail_brace_electricity_master_scope_present, SUM_ONCE((rail_brace_electricity_all_inside_end_reads - rail_brace_electricity_all_inside_start_reads) * rail_brace_electricity_all_inside_kwh_factors, rail_brace_electricity_all_inside_read_event_ids), 0); rail_brace_electricity_residual_kwh = rail_brace_electricity_master_kwh - rail_brace_electricity_inside_direct_kwh; rail_brace_electricity_allocated_interval_kwh = rail_brace_electricity_direct_kwh + CASE_ZERO(rail_brace_electricity_residual_kwh, 0, rail_brace_electricity_residual_kwh * rail_brace_electricity_own_residual_weight / SUM(rail_brace_electricity_all_eligible_residual_weights)); actual_rail_brace_electricity = SUM_ONCE(rail_brace_electricity_allocated_interval_kwh, rail_brace_electricity_allocation_instance_ids). The output is a physical numerator in kWh. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Evaluate direct, master, inside-direct, residual and allocation separately for each recorded same-master allocation interval; read-event IDs identify a meter plus interval, preserving repeated real intervals. Sum allocated interval quantities using unique allocation_instance_ids to the physical lot numerator. Own direct may include outside-master meters, but all_inside contains only direct consumers inside the measured master and each exactly once. Direct-only operation has an evidenced zero residual or an actual topology-proven direct-only branch with no shared master has diagnostic neutral zero terms, no weights required. An existing nonzero master exactly assigned to inside-direct consumers also has zero residual and needs no weights. Positive residual requires every eligible weight strictly positive, a complete eligible consumer set and a positive denominator. Unknown or negative residual is a gap. All node allocations plus other consumers must reconcile the same master interval. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition CASE_PRESENT: Evaluate the measured present branch only when actual meter-topology evidence says a shared-master scope exists; evaluate the absent branch only when that topology proves direct-only supply. Unknown scope is a gap. The absent-branch zero is a diagnostic neutral term, never an invented zero reading. Definition CASE_ZERO: CASE_ZERO(r, z, p) returns z when measured r equals zero without evaluating any weight division; it returns p only for a measured positive residual with a reviewed complete eligible consumer set, every eligible weight strictly positive and a positive denominator. A negative or unknown residual is invalid and remains a gap; it is never clipped to zero. Definition SUM: Arithmetic sum over the explicitly complete set recorded in the applicable protocol. | rail_brace_electricity_supply_id; rail_brace_electricity_allocation_instance_ids; rail_brace_electricity_interval_ids; rail_brace_electricity_interval_start; rail_brace_electricity_interval_end; rail_brace_electricity_own_direct_meter_ids; rail_brace_electricity_own_direct_read_event_ids; rail_brace_electricity_own_direct_start_reads; rail_brace_electricity_own_direct_end_reads; rail_brace_electricity_own_direct_kwh_factors; rail_brace_electricity_own_direct_topology; rail_brace_electricity_master_scope_present; rail_brace_electricity_master_meter_id; rail_brace_electricity_master_start_read; rail_brace_electricity_master_end_read; rail_brace_electricity_master_kwh_factor; rail_brace_electricity_all_inside_meter_ids; rail_brace_electricity_all_inside_read_event_ids; rail_brace_electricity_all_inside_start_reads; rail_brace_electricity_all_inside_end_reads; rail_brace_electricity_all_inside_kwh_factors; rail_brace_electricity_all_inside_consumer_ids; rail_brace_electricity_eligible_consumer_ids; rail_brace_electricity_own_residual_weight; rail_brace_electricity_all_eligible_residual_weights; rail_brace_electricity_weight_method_evidence; rail_brace_electricity_meter_topology_evidence; rail_brace_electricity_calibration_evidence; cp_rail_brace; SUM_ONCE; CASE_PRESENT; CASE_ZERO; SUM | actual_rail_brace_electricity; rail_brace_electricity_direct_kwh; rail_brace_electricity_master_kwh; rail_brace_electricity_inside_direct_kwh; rail_brace_electricity_residual_kwh; rail_brace_electricity_allocated_interval_kwh |  |
| `calc_rail_brace_access_service` | `rail_brace_access_service` | rail_brace_access_service_billed_h = rail_brace_access_service_billed_native_quantity * rail_brace_access_service_actual_hours_per_native_unit; rail_brace_access_service_direct_h = SUM_ONCE(rail_brace_access_service_own_direct_service_hours, rail_brace_access_service_own_direct_service_event_ids); rail_brace_access_service_residual_h = rail_brace_access_service_billed_h - SUM_ONCE(rail_brace_access_service_all_direct_service_hours, rail_brace_access_service_all_direct_service_event_ids); rail_brace_access_service_allocated_period_h = rail_brace_access_service_direct_h + CASE_ZERO(rail_brace_access_service_residual_h, 0, rail_brace_access_service_residual_h * rail_brace_access_service_own_residual_weight / SUM(rail_brace_access_service_all_eligible_residual_weights)); actual_rail_brace_access_service = SUM_ONCE(rail_brace_access_service_allocated_period_h, rail_brace_access_service_allocation_instance_ids). The output is a physical numerator in h. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Evaluate billed, direct, residual and allocation within each single recorded contract/billing allocation period, then sum allocated-period hours by unique allocation_instance_ids. Different periods retain their own eligible weights; every eligible weight is strictly positive when the residual is positive, and an evidenced ineligible node receives zero residual share; do not pool residuals across unlike periods. The contract and actual availability establish the conversion; no standard shift, calendar year or assumed lifetime is allowed. Own direct records include owned idle/rework exactly once. Complete billed-period consumers reconcile direct plus residual service; a zero residual needs no weights, a positive one needs complete positive weights. Provider-included energy or asset burden is not purchased again. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition CASE_ZERO: CASE_ZERO(r, z, p) returns z when measured r equals zero without evaluating any weight division; it returns p only for a measured positive residual with a reviewed complete eligible consumer set, every eligible weight strictly positive and a positive denominator. A negative or unknown residual is invalid and remains a gap; it is never clipped to zero. Definition SUM: Arithmetic sum over the explicitly complete set recorded in the applicable protocol. | rail_brace_access_service_asset_or_service_id; rail_brace_access_service_allocation_instance_ids; rail_brace_access_service_contract_id; rail_brace_access_service_period_ids; rail_brace_access_service_period_start; rail_brace_access_service_period_end; rail_brace_access_service_billed_native_quantity; rail_brace_access_service_billed_native_unit; rail_brace_access_service_actual_hours_per_native_unit; rail_brace_access_service_conversion_evidence; rail_brace_access_service_all_direct_service_event_ids; rail_brace_access_service_all_direct_service_hours; rail_brace_access_service_own_direct_service_event_ids; rail_brace_access_service_own_direct_service_hours; rail_brace_access_service_owned_idle_event_ids; rail_brace_access_service_owned_rework_event_ids; rail_brace_access_service_eligible_consumer_ids; rail_brace_access_service_own_residual_weight; rail_brace_access_service_all_eligible_residual_weights; rail_brace_access_service_allocation_decision_id; rail_brace_access_service_provider_boundary_coverage; cp_rail_brace; SUM_ONCE; CASE_ZERO; SUM | actual_rail_brace_access_service; rail_brace_access_service_billed_h; rail_brace_access_service_direct_h; rail_brace_access_service_residual_h; rail_brace_access_service_allocated_period_h |  |
| `calc_rail_panel_feed` | `rail_panel_feed` | actual_rail_panel_feed = SUM_ONCE(rail_panel_feed_centerline_m, rail_panel_feed_transfer_event_ids); rail_panel_feed_retained_material_mass_kg = SUM_ONCE(rail_panel_feed_retained_component_mass_kg, rail_panel_feed_retained_component_event_ids). The output is a physical numerator in m. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Record actual received or transferred physical geometry and accepted/current state. Source and recipient paired events agree; partial lots and WIP are explicit. Neither a design document nor a fixed 1 m substitutes for actual geometry. The retained-mass diagnostic sums measured new installation component/constituent kg linked to these actual panel handoff or acceptance events, with exact material/source-state/current-state/period and source input IDs. Exclude existing posts/foundations and pre-existing components. Use whole composite or measured constituents exclusively. Metres supply the transfer/acceptance gate, never a guessed kg conversion; the diagnostic creates no extra product exchange or procurement burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | rail_panel_feed_transfer_event_ids; rail_panel_feed_segment_ids; rail_panel_feed_centerline_m; rail_panel_feed_state_ids; rail_panel_feed_source_node; rail_panel_feed_recipient_node; rail_panel_feed_handoff_document_ids; rail_panel_feed_condition_evidence; rail_panel_feed_corner_and_opening_resolution; cp_fabric_tension; SUM_ONCE; rail_panel_feed_retained_component_mass_kg; rail_panel_feed_retained_component_event_ids; rail_panel_feed_retained_component_material_ids; rail_panel_feed_retained_component_source_state_ids; rail_panel_feed_retained_component_actual_state_ids; rail_panel_feed_retained_component_period_ids; rail_panel_feed_retained_component_panel_transfer_ids; rail_panel_feed_retained_component_source_input_ids; rail_panel_feed_retained_component_bridge_evidence; rail_panel_feed_retained_component_existing_exclusion; rail_panel_feed_retained_component_representation_mode | actual_rail_panel_feed; rail_panel_feed_retained_material_mass_kg |  |
| `calc_chainlink_fabric` | `chainlink_fabric` | actual_chainlink_fabric = SUM_ONCE(chainlink_fabric_mass_kg, chainlink_fabric_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Original component measurement ledger issue_chainlink_fabric is retained under conditional inventory dispatch issue_materials_fabric_tension; its actual SKU/state quantity matches the individual recipient input, each actual concrete exchange is verified independently, and no aggregate mixed-product identity or repeated procurement is created. | chainlink_fabric_transfer_event_ids; chainlink_fabric_mass_kg; chainlink_fabric_material_ids; chainlink_fabric_state_ids; chainlink_fabric_source_row_ids; chainlink_fabric_source_node; chainlink_fabric_recipient_node; chainlink_fabric_custodian_from; chainlink_fabric_custodian_to; chainlink_fabric_handoff_document_ids; chainlink_fabric_native_units; chainlink_fabric_native_quantities; chainlink_fabric_measured_kg_per_native_unit; chainlink_fabric_bridge_evidence; cp_fabric_tension; SUM_ONCE | actual_chainlink_fabric |  |
| `calc_fabric_fittings` | `fabric_fittings` | actual_fabric_fittings = SUM_ONCE(fabric_fittings_mass_kg, fabric_fittings_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Original component measurement ledger issue_fabric_fittings is retained under conditional inventory dispatch issue_materials_fabric_tension; its actual SKU/state quantity matches the individual recipient input, each actual concrete exchange is verified independently, and no aggregate mixed-product identity or repeated procurement is created. | fabric_fittings_transfer_event_ids; fabric_fittings_mass_kg; fabric_fittings_material_ids; fabric_fittings_state_ids; fabric_fittings_source_row_ids; fabric_fittings_source_node; fabric_fittings_recipient_node; fabric_fittings_custodian_from; fabric_fittings_custodian_to; fabric_fittings_handoff_document_ids; fabric_fittings_native_units; fabric_fittings_native_quantities; fabric_fittings_measured_kg_per_native_unit; fabric_fittings_bridge_evidence; cp_fabric_tension; SUM_ONCE | actual_fabric_fittings |  |
| `calc_tensioned_fence` | `tensioned_fence` | actual_tensioned_fence = SUM_ONCE(tensioned_fence_centerline_m, tensioned_fence_transfer_event_ids); tensioned_fence_retained_material_mass_kg = SUM_ONCE(tensioned_fence_retained_component_mass_kg, tensioned_fence_retained_component_event_ids). The output is a physical numerator in m. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Record actual received or transferred physical geometry and accepted/current state. Source and recipient paired events agree; partial lots and WIP are explicit. Neither a design document nor a fixed 1 m substitutes for actual geometry. The retained-mass diagnostic sums measured new installation component/constituent kg linked to these actual panel handoff or acceptance events, with exact material/source-state/current-state/period and source input IDs. Exclude existing posts/foundations and pre-existing components. Use whole composite or measured constituents exclusively. Metres supply the transfer/acceptance gate, never a guessed kg conversion; the diagnostic creates no extra product exchange or procurement burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | tensioned_fence_transfer_event_ids; tensioned_fence_segment_ids; tensioned_fence_centerline_m; tensioned_fence_state_ids; tensioned_fence_source_node; tensioned_fence_recipient_node; tensioned_fence_handoff_document_ids; tensioned_fence_condition_evidence; tensioned_fence_corner_and_opening_resolution; cp_fabric_tension; SUM_ONCE; tensioned_fence_retained_component_mass_kg; tensioned_fence_retained_component_event_ids; tensioned_fence_retained_component_material_ids; tensioned_fence_retained_component_source_state_ids; tensioned_fence_retained_component_actual_state_ids; tensioned_fence_retained_component_period_ids; tensioned_fence_retained_component_panel_transfer_ids; tensioned_fence_retained_component_source_input_ids; tensioned_fence_retained_component_bridge_evidence; tensioned_fence_retained_component_existing_exclusion; tensioned_fence_retained_component_representation_mode | actual_tensioned_fence; tensioned_fence_retained_material_mass_kg |  |
| `calc_fabric_waste` | `fabric_waste` | actual_fabric_waste = SUM_ONCE(fabric_waste_mass_kg, fabric_waste_exit_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Each physical discarded quantity has one producing node and one measured fate; packaging and captured particles are composition-resolved. Closing WIP or usable exits are not waste. Split mixed liquid and solid constituents before a water-only balance. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | fabric_waste_exit_event_ids; fabric_waste_mass_kg; fabric_waste_material_ids; fabric_waste_state_ids; fabric_waste_fate_codes; fabric_waste_custodian_ids; fabric_waste_waste_treatment_route; fabric_waste_native_units; fabric_waste_native_quantities; fabric_waste_measured_kg_per_native_unit; fabric_waste_bridge_evidence; fabric_waste_absence_evidence; cp_fabric_tension; SUM_ONCE | actual_fabric_waste |  |
| `calc_fabric_direct_release` | `fabric_direct_release` | actual_fabric_direct_release = SUM_ONCE(fabric_direct_release_uncaptured_mass_kg, fabric_direct_release_release_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Retain each substance, particle basis and medium as a distinct final exchange; this aggregate card is not a generic pollutant UUID. Captured waste is excluded. Unknown substance, medium or quantity blocks that exchange; a material balance deficit is not a measured release. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | fabric_direct_release_release_event_ids; fabric_direct_release_uncaptured_mass_kg; fabric_direct_release_substance_ids; fabric_direct_release_substance_names; fabric_direct_release_receiving_media; fabric_direct_release_particle_size_basis; fabric_direct_release_measurement_method; fabric_direct_release_capture_boundary_evidence; fabric_direct_release_operation_ids; fabric_direct_release_absence_evidence; cp_fabric_tension; SUM_ONCE | actual_fabric_direct_release |  |
| `calc_fabric_unused_return` | `fabric_unused_return` | actual_fabric_unused_return = SUM_ONCE(fabric_unused_return_return_kg, fabric_unused_return_return_event_ids) + SUM_ONCE(fabric_unused_return_transfer_kg, fabric_unused_return_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Return U and external transfer X are disjoint positive exits and exclude closing intact stock, retained product, WIP, waste and internal feed. Carry only the unchanged original material upstream burden; all site work, idle and rework burdens remain with the installation lot. Net-consumed diagnostics never create a second negative exchange or credit. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | fabric_unused_return_return_event_ids; fabric_unused_return_return_kg; fabric_unused_return_transfer_event_ids; fabric_unused_return_transfer_kg; fabric_unused_return_material_ids; fabric_unused_return_state_ids; fabric_unused_return_native_units; fabric_unused_return_native_quantities; fabric_unused_return_measured_kg_per_native_unit; fabric_unused_return_bridge_evidence; fabric_unused_return_external_custodian_ids; fabric_unused_return_original_input_ids; fabric_unused_return_original_upstream_burden_evidence; fabric_unused_return_exit_quality_evidence; fabric_unused_return_retained_wip_exclusion_evidence; cp_fabric_tension; SUM_ONCE | actual_fabric_unused_return |  |
| `calc_fabric_tension_electricity` | `fabric_tension_electricity` | fabric_tension_electricity_direct_kwh = SUM_ONCE((fabric_tension_electricity_own_direct_end_reads - fabric_tension_electricity_own_direct_start_reads) * fabric_tension_electricity_own_direct_kwh_factors, fabric_tension_electricity_own_direct_read_event_ids); fabric_tension_electricity_master_kwh = CASE_PRESENT(fabric_tension_electricity_master_scope_present, (fabric_tension_electricity_master_end_read - fabric_tension_electricity_master_start_read) * fabric_tension_electricity_master_kwh_factor, 0); fabric_tension_electricity_inside_direct_kwh = CASE_PRESENT(fabric_tension_electricity_master_scope_present, SUM_ONCE((fabric_tension_electricity_all_inside_end_reads - fabric_tension_electricity_all_inside_start_reads) * fabric_tension_electricity_all_inside_kwh_factors, fabric_tension_electricity_all_inside_read_event_ids), 0); fabric_tension_electricity_residual_kwh = fabric_tension_electricity_master_kwh - fabric_tension_electricity_inside_direct_kwh; fabric_tension_electricity_allocated_interval_kwh = fabric_tension_electricity_direct_kwh + CASE_ZERO(fabric_tension_electricity_residual_kwh, 0, fabric_tension_electricity_residual_kwh * fabric_tension_electricity_own_residual_weight / SUM(fabric_tension_electricity_all_eligible_residual_weights)); actual_fabric_tension_electricity = SUM_ONCE(fabric_tension_electricity_allocated_interval_kwh, fabric_tension_electricity_allocation_instance_ids). The output is a physical numerator in kWh. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Evaluate direct, master, inside-direct, residual and allocation separately for each recorded same-master allocation interval; read-event IDs identify a meter plus interval, preserving repeated real intervals. Sum allocated interval quantities using unique allocation_instance_ids to the physical lot numerator. Own direct may include outside-master meters, but all_inside contains only direct consumers inside the measured master and each exactly once. Direct-only operation has an evidenced zero residual or an actual topology-proven direct-only branch with no shared master has diagnostic neutral zero terms, no weights required. An existing nonzero master exactly assigned to inside-direct consumers also has zero residual and needs no weights. Positive residual requires every eligible weight strictly positive, a complete eligible consumer set and a positive denominator. Unknown or negative residual is a gap. All node allocations plus other consumers must reconcile the same master interval. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition CASE_PRESENT: Evaluate the measured present branch only when actual meter-topology evidence says a shared-master scope exists; evaluate the absent branch only when that topology proves direct-only supply. Unknown scope is a gap. The absent-branch zero is a diagnostic neutral term, never an invented zero reading. Definition CASE_ZERO: CASE_ZERO(r, z, p) returns z when measured r equals zero without evaluating any weight division; it returns p only for a measured positive residual with a reviewed complete eligible consumer set, every eligible weight strictly positive and a positive denominator. A negative or unknown residual is invalid and remains a gap; it is never clipped to zero. Definition SUM: Arithmetic sum over the explicitly complete set recorded in the applicable protocol. | fabric_tension_electricity_supply_id; fabric_tension_electricity_allocation_instance_ids; fabric_tension_electricity_interval_ids; fabric_tension_electricity_interval_start; fabric_tension_electricity_interval_end; fabric_tension_electricity_own_direct_meter_ids; fabric_tension_electricity_own_direct_read_event_ids; fabric_tension_electricity_own_direct_start_reads; fabric_tension_electricity_own_direct_end_reads; fabric_tension_electricity_own_direct_kwh_factors; fabric_tension_electricity_own_direct_topology; fabric_tension_electricity_master_scope_present; fabric_tension_electricity_master_meter_id; fabric_tension_electricity_master_start_read; fabric_tension_electricity_master_end_read; fabric_tension_electricity_master_kwh_factor; fabric_tension_electricity_all_inside_meter_ids; fabric_tension_electricity_all_inside_read_event_ids; fabric_tension_electricity_all_inside_start_reads; fabric_tension_electricity_all_inside_end_reads; fabric_tension_electricity_all_inside_kwh_factors; fabric_tension_electricity_all_inside_consumer_ids; fabric_tension_electricity_eligible_consumer_ids; fabric_tension_electricity_own_residual_weight; fabric_tension_electricity_all_eligible_residual_weights; fabric_tension_electricity_weight_method_evidence; fabric_tension_electricity_meter_topology_evidence; fabric_tension_electricity_calibration_evidence; cp_fabric_tension; SUM_ONCE; CASE_PRESENT; CASE_ZERO; SUM | actual_fabric_tension_electricity; fabric_tension_electricity_direct_kwh; fabric_tension_electricity_master_kwh; fabric_tension_electricity_inside_direct_kwh; fabric_tension_electricity_residual_kwh; fabric_tension_electricity_allocated_interval_kwh |  |
| `calc_fabric_tension_access_service` | `fabric_tension_access_service` | fabric_tension_access_service_billed_h = fabric_tension_access_service_billed_native_quantity * fabric_tension_access_service_actual_hours_per_native_unit; fabric_tension_access_service_direct_h = SUM_ONCE(fabric_tension_access_service_own_direct_service_hours, fabric_tension_access_service_own_direct_service_event_ids); fabric_tension_access_service_residual_h = fabric_tension_access_service_billed_h - SUM_ONCE(fabric_tension_access_service_all_direct_service_hours, fabric_tension_access_service_all_direct_service_event_ids); fabric_tension_access_service_allocated_period_h = fabric_tension_access_service_direct_h + CASE_ZERO(fabric_tension_access_service_residual_h, 0, fabric_tension_access_service_residual_h * fabric_tension_access_service_own_residual_weight / SUM(fabric_tension_access_service_all_eligible_residual_weights)); actual_fabric_tension_access_service = SUM_ONCE(fabric_tension_access_service_allocated_period_h, fabric_tension_access_service_allocation_instance_ids). The output is a physical numerator in h. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Evaluate billed, direct, residual and allocation within each single recorded contract/billing allocation period, then sum allocated-period hours by unique allocation_instance_ids. Different periods retain their own eligible weights; every eligible weight is strictly positive when the residual is positive, and an evidenced ineligible node receives zero residual share; do not pool residuals across unlike periods. The contract and actual availability establish the conversion; no standard shift, calendar year or assumed lifetime is allowed. Own direct records include owned idle/rework exactly once. Complete billed-period consumers reconcile direct plus residual service; a zero residual needs no weights, a positive one needs complete positive weights. Provider-included energy or asset burden is not purchased again. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition CASE_ZERO: CASE_ZERO(r, z, p) returns z when measured r equals zero without evaluating any weight division; it returns p only for a measured positive residual with a reviewed complete eligible consumer set, every eligible weight strictly positive and a positive denominator. A negative or unknown residual is invalid and remains a gap; it is never clipped to zero. Definition SUM: Arithmetic sum over the explicitly complete set recorded in the applicable protocol. | fabric_tension_access_service_asset_or_service_id; fabric_tension_access_service_allocation_instance_ids; fabric_tension_access_service_contract_id; fabric_tension_access_service_period_ids; fabric_tension_access_service_period_start; fabric_tension_access_service_period_end; fabric_tension_access_service_billed_native_quantity; fabric_tension_access_service_billed_native_unit; fabric_tension_access_service_actual_hours_per_native_unit; fabric_tension_access_service_conversion_evidence; fabric_tension_access_service_all_direct_service_event_ids; fabric_tension_access_service_all_direct_service_hours; fabric_tension_access_service_own_direct_service_event_ids; fabric_tension_access_service_own_direct_service_hours; fabric_tension_access_service_owned_idle_event_ids; fabric_tension_access_service_owned_rework_event_ids; fabric_tension_access_service_eligible_consumer_ids; fabric_tension_access_service_own_residual_weight; fabric_tension_access_service_all_eligible_residual_weights; fabric_tension_access_service_allocation_decision_id; fabric_tension_access_service_provider_boundary_coverage; cp_fabric_tension; SUM_ONCE; CASE_ZERO; SUM | actual_fabric_tension_access_service; fabric_tension_access_service_billed_h; fabric_tension_access_service_direct_h; fabric_tension_access_service_residual_h; fabric_tension_access_service_allocated_period_h |  |
| `calc_finish_panel_feed` | `finish_panel_feed` | actual_finish_panel_feed = SUM_ONCE(finish_panel_feed_centerline_m, finish_panel_feed_transfer_event_ids); finish_panel_feed_retained_material_mass_kg = SUM_ONCE(finish_panel_feed_retained_component_mass_kg, finish_panel_feed_retained_component_event_ids). The output is a physical numerator in m. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Record actual received or transferred physical geometry and accepted/current state. Source and recipient paired events agree; partial lots and WIP are explicit. Neither a design document nor a fixed 1 m substitutes for actual geometry. The retained-mass diagnostic sums measured new installation component/constituent kg linked to these actual panel handoff or acceptance events, with exact material/source-state/current-state/period and source input IDs. Exclude existing posts/foundations and pre-existing components. Use whole composite or measured constituents exclusively. Metres supply the transfer/acceptance gate, never a guessed kg conversion; the diagnostic creates no extra product exchange or procurement burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | finish_panel_feed_transfer_event_ids; finish_panel_feed_segment_ids; finish_panel_feed_centerline_m; finish_panel_feed_state_ids; finish_panel_feed_source_node; finish_panel_feed_recipient_node; finish_panel_feed_handoff_document_ids; finish_panel_feed_condition_evidence; finish_panel_feed_corner_and_opening_resolution; cp_finish_accept; SUM_ONCE; finish_panel_feed_retained_component_mass_kg; finish_panel_feed_retained_component_event_ids; finish_panel_feed_retained_component_material_ids; finish_panel_feed_retained_component_source_state_ids; finish_panel_feed_retained_component_actual_state_ids; finish_panel_feed_retained_component_period_ids; finish_panel_feed_retained_component_panel_transfer_ids; finish_panel_feed_retained_component_source_input_ids; finish_panel_feed_retained_component_bridge_evidence; finish_panel_feed_retained_component_existing_exclusion; finish_panel_feed_retained_component_representation_mode | actual_finish_panel_feed; finish_panel_feed_retained_material_mass_kg |  |
| `calc_coating_cleanup` | `coating_cleanup` | actual_coating_cleanup = SUM_ONCE(coating_cleanup_mass_kg, coating_cleanup_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | coating_cleanup_transfer_event_ids; coating_cleanup_mass_kg; coating_cleanup_material_ids; coating_cleanup_state_ids; coating_cleanup_source_row_ids; coating_cleanup_source_node; coating_cleanup_recipient_node; coating_cleanup_custodian_from; coating_cleanup_custodian_to; coating_cleanup_handoff_document_ids; coating_cleanup_native_units; coating_cleanup_native_quantities; coating_cleanup_measured_kg_per_native_unit; coating_cleanup_bridge_evidence; cp_finish_accept; SUM_ONCE | actual_coating_cleanup |  |
| `calc_finish_water` | `finish_water` | actual_finish_water = finish_water_opening_kg + finish_water_external_receipts_kg - finish_water_closing_unissued_intact_kg. The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. All three pools are actual kg after a same-SKU/current-state bridge. Closing is all intact stock unissued to this lot, counted once across real sublocations; issued U/X exits, retained installation and processed WIP are not closing intact. Gross includes actual unused exits; no second netting.  | finish_water_opening_kg; finish_water_external_receipts_kg; finish_water_closing_unissued_intact_kg; finish_water_material_ids; finish_water_state_ids; finish_water_native_units; finish_water_native_quantities; finish_water_measured_kg_per_native_unit; finish_water_bridge_evidence; finish_water_stock_item_ids; finish_water_stock_sublocations; finish_water_stock_custodians; finish_water_stock_count_times; finish_water_receipt_event_ids; cp_finish_accept | actual_finish_water |  |
| `calc_finish_waste` | `finish_waste` | actual_finish_waste = SUM_ONCE(finish_waste_mass_kg, finish_waste_exit_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Each physical discarded quantity has one producing node and one measured fate; packaging and captured particles are composition-resolved. Closing WIP or usable exits are not waste. Split mixed liquid and solid constituents before a water-only balance. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | finish_waste_exit_event_ids; finish_waste_mass_kg; finish_waste_material_ids; finish_waste_state_ids; finish_waste_fate_codes; finish_waste_custodian_ids; finish_waste_waste_treatment_route; finish_waste_native_units; finish_waste_native_quantities; finish_waste_measured_kg_per_native_unit; finish_waste_bridge_evidence; finish_waste_absence_evidence; cp_finish_accept; SUM_ONCE | actual_finish_waste |  |
| `calc_finish_wastewater` | `finish_wastewater` | actual_finish_wastewater = SUM_ONCE(finish_wastewater_mass_kg, finish_wastewater_exit_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Each physical discarded quantity has one producing node and one measured fate; packaging and captured particles are composition-resolved. Closing WIP or usable exits are not waste. Split mixed liquid and solid constituents before a water-only balance. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | finish_wastewater_exit_event_ids; finish_wastewater_mass_kg; finish_wastewater_material_ids; finish_wastewater_state_ids; finish_wastewater_fate_codes; finish_wastewater_custodian_ids; finish_wastewater_waste_treatment_route; finish_wastewater_native_units; finish_wastewater_native_quantities; finish_wastewater_measured_kg_per_native_unit; finish_wastewater_bridge_evidence; finish_wastewater_absence_evidence; cp_finish_accept; SUM_ONCE | actual_finish_wastewater |  |
| `calc_finish_water_vapour` | `finish_water_vapour` | actual_finish_water_vapour = SUM_ONCE(finish_water_vapour_observed_h2o_kg, finish_water_vapour_release_event_ids); finish_coating_water_received_kg = SUM_ONCE(finish_water_vapour_coating_received_mass_kg * finish_water_vapour_coating_water_fraction, finish_water_vapour_coating_transfer_ids); finish_coating_feed_mass_gap_kg = actual_coating_cleanup - SUM_ONCE(finish_water_vapour_coating_received_mass_kg, finish_water_vapour_coating_transfer_ids); finish_water_closure_gap_kg = actual_finish_water + finish_coating_water_received_kg + WATER_PORTION(finish_water_vapour_panel_received_water_kg, finish_panel_feed_retained_material_mass_kg, finish_water_vapour_pool_card_event_crosswalk) + WATER_PORTION(finish_water_vapour_opening_processed_wip_water_kg, SUM_ONCE(finish_accept_mass_closure_opening_processed_wip_kg, finish_accept_mass_closure_opening_processed_wip_event_ids), finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_accepted_retained_water_kg, accepted_fence_service_retained_material_mass_kg, finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_solid_waste_water_kg, actual_finish_waste, finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_liquid_waste_water_kg, actual_finish_wastewater, finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_direct_liquid_h2o_kg, actual_finish_other_release, finish_water_vapour_pool_card_event_crosswalk) - actual_finish_water_vapour - WATER_PORTION(finish_water_vapour_unused_fresh_return_water_kg + finish_water_vapour_unused_fresh_transfer_water_kg, actual_finish_unused_return, finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_processed_transfer_water_kg, LINKED_TRANSFER_MASS(finish_accept_mass_closure_processed_transfer_out_kg, finish_water_vapour_processed_transfer_event_crosswalk, finish_accept_mass_closure_group_keys), finish_water_vapour_pool_card_event_crosswalk) - WATER_PORTION(finish_water_vapour_closing_processed_wip_water_kg, SUM_ONCE(finish_accept_mass_closure_closing_processed_wip_kg, finish_accept_mass_closure_closing_processed_wip_event_ids), finish_water_vapour_pool_card_event_crosswalk). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Actual H2O to air, unspecified, must be independently observed or supported by a validated operation-specific vapour model; the closure gap is diagnostic only. No intact-stock term occurs here: actual_finish_water has already excluded it once. Every coating/cleanup transfer retains its own measured formulation-water fraction, including zero only when evidenced; sum water constituent kg once across actual transfer IDs and reconcile the formulation feed mass to actual_coating_cleanup with finish_coating_feed_mass_gap_kg. Actual formulation and panel residual-water evidence establishes incoming water; opening processed WIP excludes those inputs. Water-only waste fractions, retained water, unused fresh U/X, processed transfers and closing WIP are mutually exclusive measured pools, not total mixed-waste masses. The absolute closure gap must fit the recorded measurement tolerance; otherwise retain a gap, never recast it as evaporation. Every water operand is an actual constituent portion of its explicitly named own-node physical carrier output or measured WIP stock, linked by exact raw card event/material/state/period. Positive processed water transfer requires a represented producing-card/recipient-feed pair; otherwise the scope gap blocks finalization, not a fabricated transfer or a zero default. All U/X fresh-water portions are members of actual_finish_unused_return, not independently netted input quantities. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition WATER_PORTION: Return the measured water-only kg portion of a named own-node physical mass output using exact raw event/material/state/period lineage. Check each water portion against the corresponding measured wet mass and actual formulation/fraction. It must neither exceed its physical carrier mass nor overlap another water pool. Definition LINKED_TRANSFER_MASS: Return a measured processed/internal-reuse/rework transfer kg quantity only when the crosswalk names its actual own-node producing card/output, recipient feed/output, event, material, source and actual state, period and unit. The paired quantities must agree. A positive transfer without a represented semantic pair is a blocking card-review finding, never a balance plug or automatic new exchange.  Direct liquid H2O is only its measured portion of actual_finish_other_release supported by the actual receiving medium and source event, excluding separately counted air vapour and collected wastewater. It cannot exceed that release carrier. Unknown portion or medium blocks water closure; do not invent a release or borrow the vapour-to-air UUID.| finish_water_vapour_release_event_ids; finish_water_vapour_observed_h2o_kg; finish_water_vapour_measurement_evidence; finish_water_vapour_air_medium_evidence; finish_water_vapour_coating_water_fraction; finish_water_vapour_coating_received_mass_kg; finish_water_vapour_coating_transfer_ids; finish_water_vapour_coating_formulation_ids; finish_water_vapour_coating_fraction_evidence; finish_water_vapour_panel_received_water_kg; finish_water_vapour_opening_processed_wip_water_kg; finish_water_vapour_accepted_retained_water_kg; finish_water_vapour_solid_waste_water_kg; finish_water_vapour_liquid_waste_water_kg; finish_water_vapour_unused_fresh_return_water_kg; finish_water_vapour_unused_fresh_transfer_water_kg; finish_water_vapour_processed_transfer_water_kg; finish_water_vapour_closing_processed_wip_water_kg; finish_water_vapour_pool_event_ids; finish_water_vapour_pool_exclusivity_evidence; finish_water_vapour_measurement_tolerance_kg; actual_finish_water; actual_coating_cleanup; cp_finish_accept; SUM_ONCE; finish_water_vapour_pool_card_event_crosswalk; finish_water_vapour_processed_transfer_event_crosswalk; WATER_PORTION; LINKED_TRANSFER_MASS; accepted_fence_service_retained_material_mass_kg; finish_panel_feed_retained_material_mass_kg; actual_finish_waste; actual_finish_wastewater; actual_finish_unused_return; finish_accept_mass_closure_opening_processed_wip_kg; finish_accept_mass_closure_opening_processed_wip_event_ids; finish_accept_mass_closure_closing_processed_wip_kg; finish_accept_mass_closure_closing_processed_wip_event_ids; finish_accept_mass_closure_processed_transfer_out_kg; finish_accept_mass_closure_group_keys ; finish_water_vapour_direct_liquid_h2o_kg; actual_finish_other_release | actual_finish_water_vapour; finish_coating_water_received_kg; finish_coating_feed_mass_gap_kg; finish_water_closure_gap_kg |  |
| `calc_finish_other_release` | `finish_other_release` | actual_finish_other_release = SUM_ONCE(finish_other_release_uncaptured_mass_kg, finish_other_release_release_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Retain each substance, particle basis and medium as a distinct final exchange; this aggregate card is not a generic pollutant UUID. Captured waste is excluded. Unknown substance, medium or quantity blocks that exchange; a material balance deficit is not a measured release. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | finish_other_release_release_event_ids; finish_other_release_uncaptured_mass_kg; finish_other_release_substance_ids; finish_other_release_substance_names; finish_other_release_receiving_media; finish_other_release_particle_size_basis; finish_other_release_measurement_method; finish_other_release_capture_boundary_evidence; finish_other_release_operation_ids; finish_other_release_absence_evidence; cp_finish_accept; SUM_ONCE | actual_finish_other_release |  |
| `calc_finish_unused_return` | `finish_unused_return` | actual_finish_unused_return = SUM_ONCE(finish_unused_return_return_kg, finish_unused_return_return_event_ids) + SUM_ONCE(finish_unused_return_transfer_kg, finish_unused_return_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Return U and external transfer X are disjoint positive exits and exclude closing intact stock, retained product, WIP, waste and internal feed. Carry only the unchanged original material upstream burden; all site work, idle and rework burdens remain with the installation lot. Net-consumed diagnostics never create a second negative exchange or credit. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | finish_unused_return_return_event_ids; finish_unused_return_return_kg; finish_unused_return_transfer_event_ids; finish_unused_return_transfer_kg; finish_unused_return_material_ids; finish_unused_return_state_ids; finish_unused_return_native_units; finish_unused_return_native_quantities; finish_unused_return_measured_kg_per_native_unit; finish_unused_return_bridge_evidence; finish_unused_return_external_custodian_ids; finish_unused_return_original_input_ids; finish_unused_return_original_upstream_burden_evidence; finish_unused_return_exit_quality_evidence; finish_unused_return_retained_wip_exclusion_evidence; cp_finish_accept; SUM_ONCE | actual_finish_unused_return |  |
| `calc_accepted_fence_service` | `accepted_fence_service` | L = SUM_UNIQUE_SEGMENTS(accepted_fence_service_net_centerline_m, accepted_fence_service_segment_ids); accepted_fence_service_retained_material_mass_kg = SUM_ONCE(accepted_fence_service_retained_component_mass_kg, accepted_fence_service_retained_component_event_ids). Sum only accepted segments with a complete signed configuration and finishing state. L > 0. Unknown acceptance, defects awaiting correction and WIP are excluded; the inventory Amount is L/L, exactly 1 m per reference flow. The retained-mass diagnostic sums measured new installation component/constituent kg linked to these actual panel handoff or acceptance events, with exact material/source-state/current-state/period and source input IDs. Exclude existing posts/foundations and pre-existing components. Use whole composite or measured constituents exclusively. Metres supply the transfer/acceptance gate, never a guessed kg conversion; the diagnostic creates no extra product exchange or procurement burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition SUM_UNIQUE_SEGMENTS: Sum mutually disjoint measured centerline segments keyed by stable segment ID. Resolve shared corners once and remove actual gate and opening gaps before summing. Rework visits do not create new accepted segments. Only segments satisfying the named card current-state gate participate; for the final reference, every counted segment must be net and accepted. | accepted_fence_service_segment_ids; accepted_fence_service_net_centerline_m; accepted_fence_service_acceptance_ids; accepted_fence_service_corner_resolution; accepted_fence_service_opening_gap_register; accepted_fence_service_required_components_complete; accepted_fence_service_taut_fabric_state; accepted_fence_service_end_and_clearance_check; accepted_fence_service_finish_requirement_state; accepted_fence_service_configuration_id; cp_finish_accept; SUM_UNIQUE_SEGMENTS; L; accepted_fence_service_retained_component_mass_kg; accepted_fence_service_retained_component_event_ids; accepted_fence_service_retained_component_material_ids; accepted_fence_service_retained_component_source_state_ids; accepted_fence_service_retained_component_actual_state_ids; accepted_fence_service_retained_component_period_ids; accepted_fence_service_retained_component_panel_transfer_ids; accepted_fence_service_retained_component_source_input_ids; accepted_fence_service_retained_component_bridge_evidence; accepted_fence_service_retained_component_existing_exclusion; accepted_fence_service_retained_component_representation_mode; SUM_ONCE | L; accepted_fence_service_retained_material_mass_kg |  |
| `calc_finish_accept_electricity` | `finish_accept_electricity` | finish_accept_electricity_direct_kwh = SUM_ONCE((finish_accept_electricity_own_direct_end_reads - finish_accept_electricity_own_direct_start_reads) * finish_accept_electricity_own_direct_kwh_factors, finish_accept_electricity_own_direct_read_event_ids); finish_accept_electricity_master_kwh = CASE_PRESENT(finish_accept_electricity_master_scope_present, (finish_accept_electricity_master_end_read - finish_accept_electricity_master_start_read) * finish_accept_electricity_master_kwh_factor, 0); finish_accept_electricity_inside_direct_kwh = CASE_PRESENT(finish_accept_electricity_master_scope_present, SUM_ONCE((finish_accept_electricity_all_inside_end_reads - finish_accept_electricity_all_inside_start_reads) * finish_accept_electricity_all_inside_kwh_factors, finish_accept_electricity_all_inside_read_event_ids), 0); finish_accept_electricity_residual_kwh = finish_accept_electricity_master_kwh - finish_accept_electricity_inside_direct_kwh; finish_accept_electricity_allocated_interval_kwh = finish_accept_electricity_direct_kwh + CASE_ZERO(finish_accept_electricity_residual_kwh, 0, finish_accept_electricity_residual_kwh * finish_accept_electricity_own_residual_weight / SUM(finish_accept_electricity_all_eligible_residual_weights)); actual_finish_accept_electricity = SUM_ONCE(finish_accept_electricity_allocated_interval_kwh, finish_accept_electricity_allocation_instance_ids). The output is a physical numerator in kWh. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Evaluate direct, master, inside-direct, residual and allocation separately for each recorded same-master allocation interval; read-event IDs identify a meter plus interval, preserving repeated real intervals. Sum allocated interval quantities using unique allocation_instance_ids to the physical lot numerator. Own direct may include outside-master meters, but all_inside contains only direct consumers inside the measured master and each exactly once. Direct-only operation has an evidenced zero residual or an actual topology-proven direct-only branch with no shared master has diagnostic neutral zero terms, no weights required. An existing nonzero master exactly assigned to inside-direct consumers also has zero residual and needs no weights. Positive residual requires every eligible weight strictly positive, a complete eligible consumer set and a positive denominator. Unknown or negative residual is a gap. All node allocations plus other consumers must reconcile the same master interval. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition CASE_PRESENT: Evaluate the measured present branch only when actual meter-topology evidence says a shared-master scope exists; evaluate the absent branch only when that topology proves direct-only supply. Unknown scope is a gap. The absent-branch zero is a diagnostic neutral term, never an invented zero reading. Definition CASE_ZERO: CASE_ZERO(r, z, p) returns z when measured r equals zero without evaluating any weight division; it returns p only for a measured positive residual with a reviewed complete eligible consumer set, every eligible weight strictly positive and a positive denominator. A negative or unknown residual is invalid and remains a gap; it is never clipped to zero. Definition SUM: Arithmetic sum over the explicitly complete set recorded in the applicable protocol. | finish_accept_electricity_supply_id; finish_accept_electricity_allocation_instance_ids; finish_accept_electricity_interval_ids; finish_accept_electricity_interval_start; finish_accept_electricity_interval_end; finish_accept_electricity_own_direct_meter_ids; finish_accept_electricity_own_direct_read_event_ids; finish_accept_electricity_own_direct_start_reads; finish_accept_electricity_own_direct_end_reads; finish_accept_electricity_own_direct_kwh_factors; finish_accept_electricity_own_direct_topology; finish_accept_electricity_master_scope_present; finish_accept_electricity_master_meter_id; finish_accept_electricity_master_start_read; finish_accept_electricity_master_end_read; finish_accept_electricity_master_kwh_factor; finish_accept_electricity_all_inside_meter_ids; finish_accept_electricity_all_inside_read_event_ids; finish_accept_electricity_all_inside_start_reads; finish_accept_electricity_all_inside_end_reads; finish_accept_electricity_all_inside_kwh_factors; finish_accept_electricity_all_inside_consumer_ids; finish_accept_electricity_eligible_consumer_ids; finish_accept_electricity_own_residual_weight; finish_accept_electricity_all_eligible_residual_weights; finish_accept_electricity_weight_method_evidence; finish_accept_electricity_meter_topology_evidence; finish_accept_electricity_calibration_evidence; cp_finish_accept; SUM_ONCE; CASE_PRESENT; CASE_ZERO; SUM | actual_finish_accept_electricity; finish_accept_electricity_direct_kwh; finish_accept_electricity_master_kwh; finish_accept_electricity_inside_direct_kwh; finish_accept_electricity_residual_kwh; finish_accept_electricity_allocated_interval_kwh |  |
| `calc_finish_accept_access_service` | `finish_accept_access_service` | finish_accept_access_service_billed_h = finish_accept_access_service_billed_native_quantity * finish_accept_access_service_actual_hours_per_native_unit; finish_accept_access_service_direct_h = SUM_ONCE(finish_accept_access_service_own_direct_service_hours, finish_accept_access_service_own_direct_service_event_ids); finish_accept_access_service_residual_h = finish_accept_access_service_billed_h - SUM_ONCE(finish_accept_access_service_all_direct_service_hours, finish_accept_access_service_all_direct_service_event_ids); finish_accept_access_service_allocated_period_h = finish_accept_access_service_direct_h + CASE_ZERO(finish_accept_access_service_residual_h, 0, finish_accept_access_service_residual_h * finish_accept_access_service_own_residual_weight / SUM(finish_accept_access_service_all_eligible_residual_weights)); actual_finish_accept_access_service = SUM_ONCE(finish_accept_access_service_allocated_period_h, finish_accept_access_service_allocation_instance_ids). The output is a physical numerator in h. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Evaluate billed, direct, residual and allocation within each single recorded contract/billing allocation period, then sum allocated-period hours by unique allocation_instance_ids. Different periods retain their own eligible weights; every eligible weight is strictly positive when the residual is positive, and an evidenced ineligible node receives zero residual share; do not pool residuals across unlike periods. The contract and actual availability establish the conversion; no standard shift, calendar year or assumed lifetime is allowed. Own direct records include owned idle/rework exactly once. Complete billed-period consumers reconcile direct plus residual service; a zero residual needs no weights, a positive one needs complete positive weights. Provider-included energy or asset burden is not purchased again. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition CASE_ZERO: CASE_ZERO(r, z, p) returns z when measured r equals zero without evaluating any weight division; it returns p only for a measured positive residual with a reviewed complete eligible consumer set, every eligible weight strictly positive and a positive denominator. A negative or unknown residual is invalid and remains a gap; it is never clipped to zero. Definition SUM: Arithmetic sum over the explicitly complete set recorded in the applicable protocol. | finish_accept_access_service_asset_or_service_id; finish_accept_access_service_allocation_instance_ids; finish_accept_access_service_contract_id; finish_accept_access_service_period_ids; finish_accept_access_service_period_start; finish_accept_access_service_period_end; finish_accept_access_service_billed_native_quantity; finish_accept_access_service_billed_native_unit; finish_accept_access_service_actual_hours_per_native_unit; finish_accept_access_service_conversion_evidence; finish_accept_access_service_all_direct_service_event_ids; finish_accept_access_service_all_direct_service_hours; finish_accept_access_service_own_direct_service_event_ids; finish_accept_access_service_own_direct_service_hours; finish_accept_access_service_owned_idle_event_ids; finish_accept_access_service_owned_rework_event_ids; finish_accept_access_service_eligible_consumer_ids; finish_accept_access_service_own_residual_weight; finish_accept_access_service_all_eligible_residual_weights; finish_accept_access_service_allocation_decision_id; finish_accept_access_service_provider_boundary_coverage; cp_finish_accept; SUM_ONCE; CASE_ZERO; SUM | actual_finish_accept_access_service; finish_accept_access_service_billed_h; finish_accept_access_service_direct_h; finish_accept_access_service_residual_h; finish_accept_access_service_allocated_period_h |  |
| `calc_receive_rails` | `receive_rails` | actual_receive_rails = receive_rails_opening_kg + receive_rails_external_receipts_kg - receive_rails_closing_unissued_intact_kg. The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. All three pools are actual kg after a same-SKU/current-state bridge. Closing is all intact stock unissued to this lot, counted once across real sublocations; issued U/X exits, retained installation and processed WIP are not closing intact. Gross includes actual unused exits; no second netting.  | receive_rails_opening_kg; receive_rails_external_receipts_kg; receive_rails_closing_unissued_intact_kg; receive_rails_material_ids; receive_rails_state_ids; receive_rails_native_units; receive_rails_native_quantities; receive_rails_measured_kg_per_native_unit; receive_rails_bridge_evidence; receive_rails_stock_item_ids; receive_rails_stock_sublocations; receive_rails_stock_custodians; receive_rails_stock_count_times; receive_rails_receipt_event_ids; cp_survey_receive | actual_receive_rails |  |
| `calc_issue_rails` | `issue_materials_rail_brace` | actual_issue_rails = SUM_ONCE(issue_rails_mass_kg, issue_rails_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Original component measurement ledger issue_rails is retained under conditional inventory dispatch issue_materials_rail_brace; its actual SKU/state quantity matches the individual recipient input, each actual concrete exchange is verified independently, and no aggregate mixed-product identity or repeated procurement is created. | issue_rails_transfer_event_ids; issue_rails_mass_kg; issue_rails_material_ids; issue_rails_state_ids; issue_rails_source_row_ids; issue_rails_source_node; issue_rails_recipient_node; issue_rails_custodian_from; issue_rails_custodian_to; issue_rails_handoff_document_ids; issue_rails_native_units; issue_rails_native_quantities; issue_rails_measured_kg_per_native_unit; issue_rails_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_rails |  |
| `calc_receive_rail_fittings` | `receive_rail_fittings` | actual_receive_rail_fittings = receive_rail_fittings_opening_kg + receive_rail_fittings_external_receipts_kg - receive_rail_fittings_closing_unissued_intact_kg. The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. All three pools are actual kg after a same-SKU/current-state bridge. Closing is all intact stock unissued to this lot, counted once across real sublocations; issued U/X exits, retained installation and processed WIP are not closing intact. Gross includes actual unused exits; no second netting.  | receive_rail_fittings_opening_kg; receive_rail_fittings_external_receipts_kg; receive_rail_fittings_closing_unissued_intact_kg; receive_rail_fittings_material_ids; receive_rail_fittings_state_ids; receive_rail_fittings_native_units; receive_rail_fittings_native_quantities; receive_rail_fittings_measured_kg_per_native_unit; receive_rail_fittings_bridge_evidence; receive_rail_fittings_stock_item_ids; receive_rail_fittings_stock_sublocations; receive_rail_fittings_stock_custodians; receive_rail_fittings_stock_count_times; receive_rail_fittings_receipt_event_ids; cp_survey_receive | actual_receive_rail_fittings |  |
| `calc_issue_rail_fittings` | `issue_materials_rail_brace` | actual_issue_rail_fittings = SUM_ONCE(issue_rail_fittings_mass_kg, issue_rail_fittings_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Original component measurement ledger issue_rail_fittings is retained under conditional inventory dispatch issue_materials_rail_brace; its actual SKU/state quantity matches the individual recipient input, each actual concrete exchange is verified independently, and no aggregate mixed-product identity or repeated procurement is created. | issue_rail_fittings_transfer_event_ids; issue_rail_fittings_mass_kg; issue_rail_fittings_material_ids; issue_rail_fittings_state_ids; issue_rail_fittings_source_row_ids; issue_rail_fittings_source_node; issue_rail_fittings_recipient_node; issue_rail_fittings_custodian_from; issue_rail_fittings_custodian_to; issue_rail_fittings_handoff_document_ids; issue_rail_fittings_native_units; issue_rail_fittings_native_quantities; issue_rail_fittings_measured_kg_per_native_unit; issue_rail_fittings_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_rail_fittings |  |
| `calc_receive_tension_wire` | `receive_tension_wire` | actual_receive_tension_wire = receive_tension_wire_opening_kg + receive_tension_wire_external_receipts_kg - receive_tension_wire_closing_unissued_intact_kg. The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. All three pools are actual kg after a same-SKU/current-state bridge. Closing is all intact stock unissued to this lot, counted once across real sublocations; issued U/X exits, retained installation and processed WIP are not closing intact. Gross includes actual unused exits; no second netting.  | receive_tension_wire_opening_kg; receive_tension_wire_external_receipts_kg; receive_tension_wire_closing_unissued_intact_kg; receive_tension_wire_material_ids; receive_tension_wire_state_ids; receive_tension_wire_native_units; receive_tension_wire_native_quantities; receive_tension_wire_measured_kg_per_native_unit; receive_tension_wire_bridge_evidence; receive_tension_wire_stock_item_ids; receive_tension_wire_stock_sublocations; receive_tension_wire_stock_custodians; receive_tension_wire_stock_count_times; receive_tension_wire_receipt_event_ids; cp_survey_receive | actual_receive_tension_wire |  |
| `calc_issue_tension_wire` | `issue_materials_rail_brace` | actual_issue_tension_wire = SUM_ONCE(issue_tension_wire_mass_kg, issue_tension_wire_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Original component measurement ledger issue_tension_wire is retained under conditional inventory dispatch issue_materials_rail_brace; its actual SKU/state quantity matches the individual recipient input, each actual concrete exchange is verified independently, and no aggregate mixed-product identity or repeated procurement is created. | issue_tension_wire_transfer_event_ids; issue_tension_wire_mass_kg; issue_tension_wire_material_ids; issue_tension_wire_state_ids; issue_tension_wire_source_row_ids; issue_tension_wire_source_node; issue_tension_wire_recipient_node; issue_tension_wire_custodian_from; issue_tension_wire_custodian_to; issue_tension_wire_handoff_document_ids; issue_tension_wire_native_units; issue_tension_wire_native_quantities; issue_tension_wire_measured_kg_per_native_unit; issue_tension_wire_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_tension_wire |  |
| `calc_receive_chainlink_fabric` | `receive_chainlink_fabric` | actual_receive_chainlink_fabric = receive_chainlink_fabric_opening_kg + receive_chainlink_fabric_external_receipts_kg - receive_chainlink_fabric_closing_unissued_intact_kg. The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. All three pools are actual kg after a same-SKU/current-state bridge. Closing is all intact stock unissued to this lot, counted once across real sublocations; issued U/X exits, retained installation and processed WIP are not closing intact. Gross includes actual unused exits; no second netting.  | receive_chainlink_fabric_opening_kg; receive_chainlink_fabric_external_receipts_kg; receive_chainlink_fabric_closing_unissued_intact_kg; receive_chainlink_fabric_material_ids; receive_chainlink_fabric_state_ids; receive_chainlink_fabric_native_units; receive_chainlink_fabric_native_quantities; receive_chainlink_fabric_measured_kg_per_native_unit; receive_chainlink_fabric_bridge_evidence; receive_chainlink_fabric_stock_item_ids; receive_chainlink_fabric_stock_sublocations; receive_chainlink_fabric_stock_custodians; receive_chainlink_fabric_stock_count_times; receive_chainlink_fabric_receipt_event_ids; cp_survey_receive | actual_receive_chainlink_fabric |  |
| `calc_issue_chainlink_fabric` | `issue_materials_fabric_tension` | actual_issue_chainlink_fabric = SUM_ONCE(issue_chainlink_fabric_mass_kg, issue_chainlink_fabric_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Original component measurement ledger issue_chainlink_fabric is retained under conditional inventory dispatch issue_materials_fabric_tension; its actual SKU/state quantity matches the individual recipient input, each actual concrete exchange is verified independently, and no aggregate mixed-product identity or repeated procurement is created. | issue_chainlink_fabric_transfer_event_ids; issue_chainlink_fabric_mass_kg; issue_chainlink_fabric_material_ids; issue_chainlink_fabric_state_ids; issue_chainlink_fabric_source_row_ids; issue_chainlink_fabric_source_node; issue_chainlink_fabric_recipient_node; issue_chainlink_fabric_custodian_from; issue_chainlink_fabric_custodian_to; issue_chainlink_fabric_handoff_document_ids; issue_chainlink_fabric_native_units; issue_chainlink_fabric_native_quantities; issue_chainlink_fabric_measured_kg_per_native_unit; issue_chainlink_fabric_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_chainlink_fabric |  |
| `calc_receive_fabric_fittings` | `receive_fabric_fittings` | actual_receive_fabric_fittings = receive_fabric_fittings_opening_kg + receive_fabric_fittings_external_receipts_kg - receive_fabric_fittings_closing_unissued_intact_kg. The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. All three pools are actual kg after a same-SKU/current-state bridge. Closing is all intact stock unissued to this lot, counted once across real sublocations; issued U/X exits, retained installation and processed WIP are not closing intact. Gross includes actual unused exits; no second netting.  | receive_fabric_fittings_opening_kg; receive_fabric_fittings_external_receipts_kg; receive_fabric_fittings_closing_unissued_intact_kg; receive_fabric_fittings_material_ids; receive_fabric_fittings_state_ids; receive_fabric_fittings_native_units; receive_fabric_fittings_native_quantities; receive_fabric_fittings_measured_kg_per_native_unit; receive_fabric_fittings_bridge_evidence; receive_fabric_fittings_stock_item_ids; receive_fabric_fittings_stock_sublocations; receive_fabric_fittings_stock_custodians; receive_fabric_fittings_stock_count_times; receive_fabric_fittings_receipt_event_ids; cp_survey_receive | actual_receive_fabric_fittings |  |
| `calc_issue_fabric_fittings` | `issue_materials_fabric_tension` | actual_issue_fabric_fittings = SUM_ONCE(issue_fabric_fittings_mass_kg, issue_fabric_fittings_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Original component measurement ledger issue_fabric_fittings is retained under conditional inventory dispatch issue_materials_fabric_tension; its actual SKU/state quantity matches the individual recipient input, each actual concrete exchange is verified independently, and no aggregate mixed-product identity or repeated procurement is created. | issue_fabric_fittings_transfer_event_ids; issue_fabric_fittings_mass_kg; issue_fabric_fittings_material_ids; issue_fabric_fittings_state_ids; issue_fabric_fittings_source_row_ids; issue_fabric_fittings_source_node; issue_fabric_fittings_recipient_node; issue_fabric_fittings_custodian_from; issue_fabric_fittings_custodian_to; issue_fabric_fittings_handoff_document_ids; issue_fabric_fittings_native_units; issue_fabric_fittings_native_quantities; issue_fabric_fittings_measured_kg_per_native_unit; issue_fabric_fittings_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_fabric_fittings |  |
| `calc_receive_coating_cleanup` | `receive_coating_cleanup` | actual_receive_coating_cleanup = receive_coating_cleanup_opening_kg + receive_coating_cleanup_external_receipts_kg - receive_coating_cleanup_closing_unissued_intact_kg. The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. All three pools are actual kg after a same-SKU/current-state bridge. Closing is all intact stock unissued to this lot, counted once across real sublocations; issued U/X exits, retained installation and processed WIP are not closing intact. Gross includes actual unused exits; no second netting.  | receive_coating_cleanup_opening_kg; receive_coating_cleanup_external_receipts_kg; receive_coating_cleanup_closing_unissued_intact_kg; receive_coating_cleanup_material_ids; receive_coating_cleanup_state_ids; receive_coating_cleanup_native_units; receive_coating_cleanup_native_quantities; receive_coating_cleanup_measured_kg_per_native_unit; receive_coating_cleanup_bridge_evidence; receive_coating_cleanup_stock_item_ids; receive_coating_cleanup_stock_sublocations; receive_coating_cleanup_stock_custodians; receive_coating_cleanup_stock_count_times; receive_coating_cleanup_receipt_event_ids; cp_survey_receive | actual_receive_coating_cleanup |  |
| `calc_issue_coating_cleanup` | `issue_coating_cleanup` | actual_issue_coating_cleanup = SUM_ONCE(issue_coating_cleanup_mass_kg, issue_coating_cleanup_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | issue_coating_cleanup_transfer_event_ids; issue_coating_cleanup_mass_kg; issue_coating_cleanup_material_ids; issue_coating_cleanup_state_ids; issue_coating_cleanup_source_row_ids; issue_coating_cleanup_source_node; issue_coating_cleanup_recipient_node; issue_coating_cleanup_custodian_from; issue_coating_cleanup_custodian_to; issue_coating_cleanup_handoff_document_ids; issue_coating_cleanup_native_units; issue_coating_cleanup_native_quantities; issue_coating_cleanup_measured_kg_per_native_unit; issue_coating_cleanup_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_coating_cleanup |  |
| `calc_physical_interface_release` | `physical_interface_release` | actual_physical_interface_release = SUM_UNIQUE_SEGMENTS(physical_interface_release_centerline_m, physical_interface_release_segment_ids). The output is a physical numerator in m. This observation output is used only by its protocol and acceptance gate, not by an inventory Amount or exchange. Keep the measured physical geometry without assigning another product burden. Record actual received or transferred physical geometry and accepted/current state. Source and recipient paired events agree; partial lots and WIP are explicit. Neither a design document nor a fixed 1 m substitutes for actual geometry. Definition SUM_UNIQUE_SEGMENTS: Sum mutually disjoint measured centerline segments keyed by stable segment ID. Resolve shared corners once and remove actual gate and opening gaps before summing. Rework visits do not create new accepted segments. Only segments satisfying the named card current-state gate participate; for the final reference, every counted segment must be net and accepted. This is an existing-asset observation/readiness measurement with its own unchanged ID, measured Length/m/state and interface gate; not an inventory product exchange and not a manufactured material or design-document product. | physical_interface_release_transfer_event_ids; physical_interface_release_segment_ids; physical_interface_release_centerline_m; physical_interface_release_state_ids; physical_interface_release_source_node; physical_interface_release_recipient_node; physical_interface_release_handoff_document_ids; physical_interface_release_condition_evidence; physical_interface_release_corner_and_opening_resolution; cp_survey_receive; SUM_UNIQUE_SEGMENTS | actual_physical_interface_release |  |
| `calc_physical_interface_construction_feed` | `physical_interface_construction_feed` | actual_physical_interface_construction_feed = SUM_UNIQUE_SEGMENTS(physical_interface_construction_feed_centerline_m, physical_interface_construction_feed_segment_ids). The output is a physical numerator in m. This observation output is used only by its protocol and acceptance gate, not by an inventory Amount or exchange. Keep the measured physical geometry without assigning another product burden. Record actual received or transferred physical geometry and accepted/current state. Source and recipient paired events agree; partial lots and WIP are explicit. Neither a design document nor a fixed 1 m substitutes for actual geometry. Definition SUM_UNIQUE_SEGMENTS: Sum mutually disjoint measured centerline segments keyed by stable segment ID. Resolve shared corners once and remove actual gate and opening gaps before summing. Rework visits do not create new accepted segments. Only segments satisfying the named card current-state gate participate; for the final reference, every counted segment must be net and accepted. This is an existing-asset observation/readiness measurement with its own unchanged ID, measured Length/m/state and interface gate; not an inventory product exchange and not a manufactured material or design-document product. | physical_interface_construction_feed_transfer_event_ids; physical_interface_construction_feed_segment_ids; physical_interface_construction_feed_centerline_m; physical_interface_construction_feed_state_ids; physical_interface_construction_feed_source_node; physical_interface_construction_feed_recipient_node; physical_interface_construction_feed_handoff_document_ids; physical_interface_construction_feed_condition_evidence; physical_interface_construction_feed_corner_and_opening_resolution; cp_rail_brace; SUM_UNIQUE_SEGMENTS | actual_physical_interface_construction_feed |  |
| `calc_issue_packaging_rail_brace` | `issue_packaging_rail_brace` | actual_issue_packaging_rail_brace = SUM_ONCE(issue_packaging_rail_brace_mass_kg, issue_packaging_rail_brace_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | issue_packaging_rail_brace_transfer_event_ids; issue_packaging_rail_brace_mass_kg; issue_packaging_rail_brace_material_ids; issue_packaging_rail_brace_state_ids; issue_packaging_rail_brace_source_row_ids; issue_packaging_rail_brace_source_node; issue_packaging_rail_brace_recipient_node; issue_packaging_rail_brace_custodian_from; issue_packaging_rail_brace_custodian_to; issue_packaging_rail_brace_handoff_document_ids; issue_packaging_rail_brace_native_units; issue_packaging_rail_brace_native_quantities; issue_packaging_rail_brace_measured_kg_per_native_unit; issue_packaging_rail_brace_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_packaging_rail_brace |  |
| `calc_rail_brace_packaging_feed` | `rail_brace_packaging_feed` | actual_rail_brace_packaging_feed = SUM_ONCE(rail_brace_packaging_feed_mass_kg, rail_brace_packaging_feed_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | rail_brace_packaging_feed_transfer_event_ids; rail_brace_packaging_feed_mass_kg; rail_brace_packaging_feed_material_ids; rail_brace_packaging_feed_state_ids; rail_brace_packaging_feed_source_row_ids; rail_brace_packaging_feed_source_node; rail_brace_packaging_feed_recipient_node; rail_brace_packaging_feed_custodian_from; rail_brace_packaging_feed_custodian_to; rail_brace_packaging_feed_handoff_document_ids; rail_brace_packaging_feed_native_units; rail_brace_packaging_feed_native_quantities; rail_brace_packaging_feed_measured_kg_per_native_unit; rail_brace_packaging_feed_bridge_evidence; cp_rail_brace; SUM_ONCE | actual_rail_brace_packaging_feed |  |
| `calc_issue_packaging_fabric_tension` | `issue_packaging_fabric_tension` | actual_issue_packaging_fabric_tension = SUM_ONCE(issue_packaging_fabric_tension_mass_kg, issue_packaging_fabric_tension_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | issue_packaging_fabric_tension_transfer_event_ids; issue_packaging_fabric_tension_mass_kg; issue_packaging_fabric_tension_material_ids; issue_packaging_fabric_tension_state_ids; issue_packaging_fabric_tension_source_row_ids; issue_packaging_fabric_tension_source_node; issue_packaging_fabric_tension_recipient_node; issue_packaging_fabric_tension_custodian_from; issue_packaging_fabric_tension_custodian_to; issue_packaging_fabric_tension_handoff_document_ids; issue_packaging_fabric_tension_native_units; issue_packaging_fabric_tension_native_quantities; issue_packaging_fabric_tension_measured_kg_per_native_unit; issue_packaging_fabric_tension_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_packaging_fabric_tension |  |
| `calc_fabric_tension_packaging_feed` | `fabric_tension_packaging_feed` | actual_fabric_tension_packaging_feed = SUM_ONCE(fabric_tension_packaging_feed_mass_kg, fabric_tension_packaging_feed_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | fabric_tension_packaging_feed_transfer_event_ids; fabric_tension_packaging_feed_mass_kg; fabric_tension_packaging_feed_material_ids; fabric_tension_packaging_feed_state_ids; fabric_tension_packaging_feed_source_row_ids; fabric_tension_packaging_feed_source_node; fabric_tension_packaging_feed_recipient_node; fabric_tension_packaging_feed_custodian_from; fabric_tension_packaging_feed_custodian_to; fabric_tension_packaging_feed_handoff_document_ids; fabric_tension_packaging_feed_native_units; fabric_tension_packaging_feed_native_quantities; fabric_tension_packaging_feed_measured_kg_per_native_unit; fabric_tension_packaging_feed_bridge_evidence; cp_fabric_tension; SUM_ONCE | actual_fabric_tension_packaging_feed |  |
| `calc_issue_packaging_finish_accept` | `issue_packaging_finish_accept` | actual_issue_packaging_finish_accept = SUM_ONCE(issue_packaging_finish_accept_mass_kg, issue_packaging_finish_accept_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | issue_packaging_finish_accept_transfer_event_ids; issue_packaging_finish_accept_mass_kg; issue_packaging_finish_accept_material_ids; issue_packaging_finish_accept_state_ids; issue_packaging_finish_accept_source_row_ids; issue_packaging_finish_accept_source_node; issue_packaging_finish_accept_recipient_node; issue_packaging_finish_accept_custodian_from; issue_packaging_finish_accept_custodian_to; issue_packaging_finish_accept_handoff_document_ids; issue_packaging_finish_accept_native_units; issue_packaging_finish_accept_native_quantities; issue_packaging_finish_accept_measured_kg_per_native_unit; issue_packaging_finish_accept_bridge_evidence; cp_survey_receive; SUM_ONCE | actual_issue_packaging_finish_accept |  |
| `calc_finish_accept_packaging_feed` | `finish_accept_packaging_feed` | actual_finish_accept_packaging_feed = SUM_ONCE(finish_accept_packaging_feed_mass_kg, finish_accept_packaging_feed_transfer_event_ids). The output is a physical numerator in kg. Apply the inventory Amount rule once after this calculation; do not normalize any raw field or output twice. Use actual same-material/current-state physical transfer quantities, not final reference geometry or a residual inferred from receipt accounting. Adjacent source and feed must agree by event, state, custodian and quantity. The internal exchange carries the original burden once and does not acquire a new external production burden. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. | finish_accept_packaging_feed_transfer_event_ids; finish_accept_packaging_feed_mass_kg; finish_accept_packaging_feed_material_ids; finish_accept_packaging_feed_state_ids; finish_accept_packaging_feed_source_row_ids; finish_accept_packaging_feed_source_node; finish_accept_packaging_feed_recipient_node; finish_accept_packaging_feed_custodian_from; finish_accept_packaging_feed_custodian_to; finish_accept_packaging_feed_handoff_document_ids; finish_accept_packaging_feed_native_units; finish_accept_packaging_feed_native_quantities; finish_accept_packaging_feed_measured_kg_per_native_unit; finish_accept_packaging_feed_bridge_evidence; cp_finish_accept; SUM_ONCE | actual_finish_accept_packaging_feed |  |
| `calc_survey_receive_material_mass_closure` | `survey_receive_material_mass_closure` | survey_receive_mass_closure_opening_processed_wip_mass_kg = SUM_ONCE(survey_receive_mass_closure_opening_processed_wip_kg, survey_receive_mass_closure_opening_processed_wip_event_ids); survey_receive_mass_closure_closing_processed_wip_mass_kg = SUM_ONCE(survey_receive_mass_closure_closing_processed_wip_kg, survey_receive_mass_closure_closing_processed_wip_event_ids); survey_receive_mass_closure_processed_transfer_in_mass_kg = LINKED_TRANSFER_MASS(survey_receive_mass_closure_processed_transfer_in_kg, survey_receive_mass_closure_processed_transfer_event_crosswalk, survey_receive_mass_closure_group_keys); survey_receive_mass_closure_processed_transfer_out_mass_kg = LINKED_TRANSFER_MASS(survey_receive_mass_closure_processed_transfer_out_kg, survey_receive_mass_closure_processed_transfer_event_crosswalk, survey_receive_mass_closure_group_keys); survey_receive_mass_closure_gap_kg = LEDGER_VALUE(actual_receive_packaging, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_rails, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_rail_fittings, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_tension_wire, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_chainlink_fabric, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_fabric_fittings, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + LEDGER_VALUE(actual_receive_coating_cleanup, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) + survey_receive_mass_closure_opening_processed_wip_mass_kg + survey_receive_mass_closure_processed_transfer_in_mass_kg - LEDGER_VALUE(actual_receive_reject, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_receive_packaging_waste, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_receive_unused_return, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_rails, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_rail_fittings, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_tension_wire, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_chainlink_fabric, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_fabric_fittings, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_coating_cleanup, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_packaging_rail_brace, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_packaging_fabric_tension, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - LEDGER_VALUE(actual_issue_packaging_finish_accept, survey_receive_mass_closure_card_event_crosswalk, survey_receive_mass_closure_group_keys) - survey_receive_mass_closure_closing_processed_wip_mass_kg - survey_receive_mass_closure_processed_transfer_out_mass_kg. Execute separately for every exact material/source-state/actual-state lineage and reporting period in kg; assess each group against its own measured tolerance, never offset a positive error in one group with another group. Every LEDGER_VALUE operand is the explicit own-node card calculation output shown in this rule; crosswalk portions reference the underlying card raw quantities and sum to that output. WIP is measured by actual component/panel IDs with prior-closing linkage, real custody and exclusive states; opening processed WIP cannot also be a new feed or gross-stock opening. Incoming/outgoing panel retained mass is the measured diagnostic of the matching Length card, not metres times a generic factor. Internal rework/reuse/processed transfers cancel only through an actual represented source/feed pair and exclusive event lineage; if a positive transfer lacks a semantic direction/state pair, retain a blocking card-review gap rather than invent an exchange. Unissued intact future-lot stock was already excluded by receipt gross once and is not subtracted here. Composite whole versus actual constituent representation is exclusive within each ledger and the retained diagnostics add no handover burden. Material identity and state-transition provenance must remain visible when cuts or finishing alter the current state. This is a physical closure diagnostic, not an additional normalized inventory output, net procurement calculation, negative exchange or credit. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition LEDGER_VALUE: Return the measured portion of a named own-node calculation output for one explicit material/source-state/current-state/period kg group using its retained raw-event provenance and card-event crosswalk. Every group portion has an exact raw source record, same actual unit/state and operation owner; portions reconcile to the named output. Never substitute a separately invented aggregate, cancel unlike groups, or convert geometry to mass. Definition LINKED_TRANSFER_MASS: Return a measured processed/internal-reuse/rework transfer kg quantity only when the crosswalk names its actual own-node producing card/output, recipient feed/output, event, material, source and actual state, period and unit. The paired quantities must agree. A positive transfer without a represented semantic pair is a blocking card-review finding, never a balance plug or automatic new exchange. Receipt closure retains each actual_issue_rails/actual_issue_rail_fittings/actual_issue_tension_wire component output under issue_materials_rail_brace and actual_issue_chainlink_fabric/actual_issue_fabric_fittings under issue_materials_fabric_tension. The event crosswalk stores the surviving umbrella inventory card ID plus the original component measurement-ledger ID. Use those separate component quantities once; never add the umbrella QA total again. | survey_receive_mass_closure_group_keys; survey_receive_mass_closure_card_event_crosswalk; survey_receive_mass_closure_material_source_state_actual_state_period_kg_evidence; survey_receive_mass_closure_opening_processed_wip_kg; survey_receive_mass_closure_opening_processed_wip_event_ids; survey_receive_mass_closure_opening_previous_closing_event_ids; survey_receive_mass_closure_closing_processed_wip_kg; survey_receive_mass_closure_closing_processed_wip_event_ids; survey_receive_mass_closure_wip_panel_or_component_ids; survey_receive_mass_closure_wip_exclusivity_evidence; survey_receive_mass_closure_processed_transfer_in_kg; survey_receive_mass_closure_processed_transfer_out_kg; survey_receive_mass_closure_processed_transfer_event_crosswalk; survey_receive_mass_closure_measured_tolerance_kg; actual_receive_packaging; actual_receive_rails; actual_receive_rail_fittings; actual_receive_tension_wire; actual_receive_chainlink_fabric; actual_receive_fabric_fittings; actual_receive_coating_cleanup; actual_receive_reject; actual_receive_packaging_waste; actual_receive_unused_return; actual_issue_rails; actual_issue_rail_fittings; actual_issue_tension_wire; actual_issue_chainlink_fabric; actual_issue_fabric_fittings; actual_issue_coating_cleanup; actual_issue_packaging_rail_brace; actual_issue_packaging_fabric_tension; actual_issue_packaging_finish_accept; cp_survey_receive; SUM_ONCE; LEDGER_VALUE; LINKED_TRANSFER_MASS | survey_receive_mass_closure_gap_kg; survey_receive_mass_closure_opening_processed_wip_mass_kg; survey_receive_mass_closure_closing_processed_wip_mass_kg; survey_receive_mass_closure_processed_transfer_in_mass_kg; survey_receive_mass_closure_processed_transfer_out_mass_kg |  |
| `calc_rail_brace_material_mass_closure` | `rail_brace_material_mass_closure` | rail_brace_mass_closure_opening_processed_wip_mass_kg = SUM_ONCE(rail_brace_mass_closure_opening_processed_wip_kg, rail_brace_mass_closure_opening_processed_wip_event_ids); rail_brace_mass_closure_closing_processed_wip_mass_kg = SUM_ONCE(rail_brace_mass_closure_closing_processed_wip_kg, rail_brace_mass_closure_closing_processed_wip_event_ids); rail_brace_mass_closure_processed_transfer_in_mass_kg = LINKED_TRANSFER_MASS(rail_brace_mass_closure_processed_transfer_in_kg, rail_brace_mass_closure_processed_transfer_event_crosswalk, rail_brace_mass_closure_group_keys); rail_brace_mass_closure_processed_transfer_out_mass_kg = LINKED_TRANSFER_MASS(rail_brace_mass_closure_processed_transfer_out_kg, rail_brace_mass_closure_processed_transfer_event_crosswalk, rail_brace_mass_closure_group_keys); rail_brace_mass_closure_gap_kg = LEDGER_VALUE(actual_rails, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) + LEDGER_VALUE(actual_rail_fittings, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) + LEDGER_VALUE(actual_tension_wire, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) + LEDGER_VALUE(actual_rail_brace_packaging_feed, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) + rail_brace_mass_closure_opening_processed_wip_mass_kg + rail_brace_mass_closure_processed_transfer_in_mass_kg - LEDGER_VALUE(rail_ready_panels_retained_material_mass_kg, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) - LEDGER_VALUE(actual_rail_waste, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) - LEDGER_VALUE(actual_rail_direct_release, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) - LEDGER_VALUE(actual_rail_unused_return, rail_brace_mass_closure_card_event_crosswalk, rail_brace_mass_closure_group_keys) - rail_brace_mass_closure_closing_processed_wip_mass_kg - rail_brace_mass_closure_processed_transfer_out_mass_kg. Execute separately for every exact material/source-state/actual-state lineage and reporting period in kg; assess each group against its own measured tolerance, never offset a positive error in one group with another group. Every LEDGER_VALUE operand is the explicit own-node card calculation output shown in this rule; crosswalk portions reference the underlying card raw quantities and sum to that output. WIP is measured by actual component/panel IDs with prior-closing linkage, real custody and exclusive states; opening processed WIP cannot also be a new feed or gross-stock opening. Incoming/outgoing panel retained mass is the measured diagnostic of the matching Length card, not metres times a generic factor. Internal rework/reuse/processed transfers cancel only through an actual represented source/feed pair and exclusive event lineage; if a positive transfer lacks a semantic direction/state pair, retain a blocking card-review gap rather than invent an exchange. Unissued intact future-lot stock was already excluded by receipt gross once and is not subtracted here. Composite whole versus actual constituent representation is exclusive within each ledger and the retained diagnostics add no handover burden. Material identity and state-transition provenance must remain visible when cuts or finishing alter the current state. This is a physical closure diagnostic, not an additional normalized inventory output, net procurement calculation, negative exchange or credit. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition LEDGER_VALUE: Return the measured portion of a named own-node calculation output for one explicit material/source-state/current-state/period kg group using its retained raw-event provenance and card-event crosswalk. Every group portion has an exact raw source record, same actual unit/state and operation owner; portions reconcile to the named output. Never substitute a separately invented aggregate, cancel unlike groups, or convert geometry to mass. Definition LINKED_TRANSFER_MASS: Return a measured processed/internal-reuse/rework transfer kg quantity only when the crosswalk names its actual own-node producing card/output, recipient feed/output, event, material, source and actual state, period and unit. The paired quantities must agree. A positive transfer without a represented semantic pair is a blocking card-review finding, never a balance plug or automatic new exchange. | rail_brace_mass_closure_group_keys; rail_brace_mass_closure_card_event_crosswalk; rail_brace_mass_closure_material_source_state_actual_state_period_kg_evidence; rail_brace_mass_closure_opening_processed_wip_kg; rail_brace_mass_closure_opening_processed_wip_event_ids; rail_brace_mass_closure_opening_previous_closing_event_ids; rail_brace_mass_closure_closing_processed_wip_kg; rail_brace_mass_closure_closing_processed_wip_event_ids; rail_brace_mass_closure_wip_panel_or_component_ids; rail_brace_mass_closure_wip_exclusivity_evidence; rail_brace_mass_closure_processed_transfer_in_kg; rail_brace_mass_closure_processed_transfer_out_kg; rail_brace_mass_closure_processed_transfer_event_crosswalk; rail_brace_mass_closure_measured_tolerance_kg; actual_rails; actual_rail_fittings; actual_tension_wire; actual_rail_brace_packaging_feed; rail_ready_panels_retained_material_mass_kg; actual_rail_waste; actual_rail_direct_release; actual_rail_unused_return; cp_rail_brace; SUM_ONCE; LEDGER_VALUE; LINKED_TRANSFER_MASS | rail_brace_mass_closure_gap_kg; rail_brace_mass_closure_opening_processed_wip_mass_kg; rail_brace_mass_closure_closing_processed_wip_mass_kg; rail_brace_mass_closure_processed_transfer_in_mass_kg; rail_brace_mass_closure_processed_transfer_out_mass_kg |  |
| `calc_fabric_tension_material_mass_closure` | `fabric_tension_material_mass_closure` | fabric_tension_mass_closure_opening_processed_wip_mass_kg = SUM_ONCE(fabric_tension_mass_closure_opening_processed_wip_kg, fabric_tension_mass_closure_opening_processed_wip_event_ids); fabric_tension_mass_closure_closing_processed_wip_mass_kg = SUM_ONCE(fabric_tension_mass_closure_closing_processed_wip_kg, fabric_tension_mass_closure_closing_processed_wip_event_ids); fabric_tension_mass_closure_processed_transfer_in_mass_kg = LINKED_TRANSFER_MASS(fabric_tension_mass_closure_processed_transfer_in_kg, fabric_tension_mass_closure_processed_transfer_event_crosswalk, fabric_tension_mass_closure_group_keys); fabric_tension_mass_closure_processed_transfer_out_mass_kg = LINKED_TRANSFER_MASS(fabric_tension_mass_closure_processed_transfer_out_kg, fabric_tension_mass_closure_processed_transfer_event_crosswalk, fabric_tension_mass_closure_group_keys); fabric_tension_mass_closure_gap_kg = LEDGER_VALUE(rail_panel_feed_retained_material_mass_kg, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) + LEDGER_VALUE(actual_chainlink_fabric, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) + LEDGER_VALUE(actual_fabric_fittings, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) + LEDGER_VALUE(actual_fabric_tension_packaging_feed, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) + fabric_tension_mass_closure_opening_processed_wip_mass_kg + fabric_tension_mass_closure_processed_transfer_in_mass_kg - LEDGER_VALUE(tensioned_fence_retained_material_mass_kg, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) - LEDGER_VALUE(actual_fabric_waste, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) - LEDGER_VALUE(actual_fabric_direct_release, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) - LEDGER_VALUE(actual_fabric_unused_return, fabric_tension_mass_closure_card_event_crosswalk, fabric_tension_mass_closure_group_keys) - fabric_tension_mass_closure_closing_processed_wip_mass_kg - fabric_tension_mass_closure_processed_transfer_out_mass_kg. Execute separately for every exact material/source-state/actual-state lineage and reporting period in kg; assess each group against its own measured tolerance, never offset a positive error in one group with another group. Every LEDGER_VALUE operand is the explicit own-node card calculation output shown in this rule; crosswalk portions reference the underlying card raw quantities and sum to that output. WIP is measured by actual component/panel IDs with prior-closing linkage, real custody and exclusive states; opening processed WIP cannot also be a new feed or gross-stock opening. Incoming/outgoing panel retained mass is the measured diagnostic of the matching Length card, not metres times a generic factor. Internal rework/reuse/processed transfers cancel only through an actual represented source/feed pair and exclusive event lineage; if a positive transfer lacks a semantic direction/state pair, retain a blocking card-review gap rather than invent an exchange. Unissued intact future-lot stock was already excluded by receipt gross once and is not subtracted here. Composite whole versus actual constituent representation is exclusive within each ledger and the retained diagnostics add no handover burden. Material identity and state-transition provenance must remain visible when cuts or finishing alter the current state. This is a physical closure diagnostic, not an additional normalized inventory output, net procurement calculation, negative exchange or credit. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition LEDGER_VALUE: Return the measured portion of a named own-node calculation output for one explicit material/source-state/current-state/period kg group using its retained raw-event provenance and card-event crosswalk. Every group portion has an exact raw source record, same actual unit/state and operation owner; portions reconcile to the named output. Never substitute a separately invented aggregate, cancel unlike groups, or convert geometry to mass. Definition LINKED_TRANSFER_MASS: Return a measured processed/internal-reuse/rework transfer kg quantity only when the crosswalk names its actual own-node producing card/output, recipient feed/output, event, material, source and actual state, period and unit. The paired quantities must agree. A positive transfer without a represented semantic pair is a blocking card-review finding, never a balance plug or automatic new exchange. | fabric_tension_mass_closure_group_keys; fabric_tension_mass_closure_card_event_crosswalk; fabric_tension_mass_closure_material_source_state_actual_state_period_kg_evidence; fabric_tension_mass_closure_opening_processed_wip_kg; fabric_tension_mass_closure_opening_processed_wip_event_ids; fabric_tension_mass_closure_opening_previous_closing_event_ids; fabric_tension_mass_closure_closing_processed_wip_kg; fabric_tension_mass_closure_closing_processed_wip_event_ids; fabric_tension_mass_closure_wip_panel_or_component_ids; fabric_tension_mass_closure_wip_exclusivity_evidence; fabric_tension_mass_closure_processed_transfer_in_kg; fabric_tension_mass_closure_processed_transfer_out_kg; fabric_tension_mass_closure_processed_transfer_event_crosswalk; fabric_tension_mass_closure_measured_tolerance_kg; rail_panel_feed_retained_material_mass_kg; actual_chainlink_fabric; actual_fabric_fittings; actual_fabric_tension_packaging_feed; tensioned_fence_retained_material_mass_kg; actual_fabric_waste; actual_fabric_direct_release; actual_fabric_unused_return; cp_fabric_tension; SUM_ONCE; LEDGER_VALUE; LINKED_TRANSFER_MASS | fabric_tension_mass_closure_gap_kg; fabric_tension_mass_closure_opening_processed_wip_mass_kg; fabric_tension_mass_closure_closing_processed_wip_mass_kg; fabric_tension_mass_closure_processed_transfer_in_mass_kg; fabric_tension_mass_closure_processed_transfer_out_mass_kg |  |
| `calc_finish_accept_material_mass_closure` | `finish_accept_material_mass_closure` | finish_accept_mass_closure_opening_processed_wip_mass_kg = SUM_ONCE(finish_accept_mass_closure_opening_processed_wip_kg, finish_accept_mass_closure_opening_processed_wip_event_ids); finish_accept_mass_closure_closing_processed_wip_mass_kg = SUM_ONCE(finish_accept_mass_closure_closing_processed_wip_kg, finish_accept_mass_closure_closing_processed_wip_event_ids); finish_accept_mass_closure_processed_transfer_in_mass_kg = LINKED_TRANSFER_MASS(finish_accept_mass_closure_processed_transfer_in_kg, finish_accept_mass_closure_processed_transfer_event_crosswalk, finish_accept_mass_closure_group_keys); finish_accept_mass_closure_processed_transfer_out_mass_kg = LINKED_TRANSFER_MASS(finish_accept_mass_closure_processed_transfer_out_kg, finish_accept_mass_closure_processed_transfer_event_crosswalk, finish_accept_mass_closure_group_keys); finish_accept_mass_closure_gap_kg = LEDGER_VALUE(finish_panel_feed_retained_material_mass_kg, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) + LEDGER_VALUE(actual_coating_cleanup, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) + LEDGER_VALUE(actual_finish_water, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) + LEDGER_VALUE(actual_finish_accept_packaging_feed, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) + finish_accept_mass_closure_opening_processed_wip_mass_kg + finish_accept_mass_closure_processed_transfer_in_mass_kg - LEDGER_VALUE(accepted_fence_service_retained_material_mass_kg, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - LEDGER_VALUE(actual_finish_waste, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - LEDGER_VALUE(actual_finish_wastewater, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - LEDGER_VALUE(actual_finish_water_vapour, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - LEDGER_VALUE(actual_finish_other_release, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - LEDGER_VALUE(actual_finish_unused_return, finish_accept_mass_closure_card_event_crosswalk, finish_accept_mass_closure_group_keys) - finish_accept_mass_closure_closing_processed_wip_mass_kg - finish_accept_mass_closure_processed_transfer_out_mass_kg. Execute separately for every exact material/source-state/actual-state lineage and reporting period in kg; assess each group against its own measured tolerance, never offset a positive error in one group with another group. Every LEDGER_VALUE operand is the explicit own-node card calculation output shown in this rule; crosswalk portions reference the underlying card raw quantities and sum to that output. WIP is measured by actual component/panel IDs with prior-closing linkage, real custody and exclusive states; opening processed WIP cannot also be a new feed or gross-stock opening. Incoming/outgoing panel retained mass is the measured diagnostic of the matching Length card, not metres times a generic factor. Internal rework/reuse/processed transfers cancel only through an actual represented source/feed pair and exclusive event lineage; if a positive transfer lacks a semantic direction/state pair, retain a blocking card-review gap rather than invent an exchange. Unissued intact future-lot stock was already excluded by receipt gross once and is not subtracted here. Composite whole versus actual constituent representation is exclusive within each ledger and the retained diagnostics add no handover burden. Material identity and state-transition provenance must remain visible when cuts or finishing alter the current state. This is a physical closure diagnostic, not an additional normalized inventory output, net procurement calculation, negative exchange or credit. Definition SUM_ONCE: Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. Definition LEDGER_VALUE: Return the measured portion of a named own-node calculation output for one explicit material/source-state/current-state/period kg group using its retained raw-event provenance and card-event crosswalk. Every group portion has an exact raw source record, same actual unit/state and operation owner; portions reconcile to the named output. Never substitute a separately invented aggregate, cancel unlike groups, or convert geometry to mass. Definition LINKED_TRANSFER_MASS: Return a measured processed/internal-reuse/rework transfer kg quantity only when the crosswalk names its actual own-node producing card/output, recipient feed/output, event, material, source and actual state, period and unit. The paired quantities must agree. A positive transfer without a represented semantic pair is a blocking card-review finding, never a balance plug or automatic new exchange. | finish_accept_mass_closure_group_keys; finish_accept_mass_closure_card_event_crosswalk; finish_accept_mass_closure_material_source_state_actual_state_period_kg_evidence; finish_accept_mass_closure_opening_processed_wip_kg; finish_accept_mass_closure_opening_processed_wip_event_ids; finish_accept_mass_closure_opening_previous_closing_event_ids; finish_accept_mass_closure_closing_processed_wip_kg; finish_accept_mass_closure_closing_processed_wip_event_ids; finish_accept_mass_closure_wip_panel_or_component_ids; finish_accept_mass_closure_wip_exclusivity_evidence; finish_accept_mass_closure_processed_transfer_in_kg; finish_accept_mass_closure_processed_transfer_out_kg; finish_accept_mass_closure_processed_transfer_event_crosswalk; finish_accept_mass_closure_measured_tolerance_kg; finish_panel_feed_retained_material_mass_kg; actual_coating_cleanup; actual_finish_water; actual_finish_accept_packaging_feed; accepted_fence_service_retained_material_mass_kg; actual_finish_waste; actual_finish_wastewater; actual_finish_water_vapour; actual_finish_other_release; actual_finish_unused_return; cp_finish_accept; SUM_ONCE; LEDGER_VALUE; LINKED_TRANSFER_MASS | finish_accept_mass_closure_gap_kg; finish_accept_mass_closure_opening_processed_wip_mass_kg; finish_accept_mass_closure_closing_processed_wip_mass_kg; finish_accept_mass_closure_processed_transfer_in_mass_kg; finish_accept_mass_closure_processed_transfer_out_mass_kg |  |
| calc_issue_materials_rail_brace | issue_materials_rail_brace | actual_issue_materials_rail_brace is defined separately for each actual material/SKU, current state and transfer event as its matching, independently measured and nonoverlapping component quantity in actual_issue_rails, actual_issue_rail_fittings, actual_issue_tension_wire. Expand by concrete flow, each using only its own kg/L; a sum across materials is a lot-ledger diagnostic rather than one mixed-product exchange and is never added again to component quantities. Match each SKU to its actual recipient material input, state, event and custody; unknown identities remain unresolved without inheriting a fixed UUID. | actual_issue_rails; actual_issue_rail_fittings; actual_issue_tension_wire; cp_survey_receive | actual_issue_materials_rail_brace |  |
| calc_issue_materials_fabric_tension | issue_materials_fabric_tension | actual_issue_materials_fabric_tension is defined separately for each actual material/SKU, current state and transfer event as its matching, independently measured and nonoverlapping component quantity in actual_issue_chainlink_fabric, actual_issue_fabric_fittings. Expand by concrete flow, each using only its own kg/L; a sum across materials is a lot-ledger diagnostic rather than one mixed-product exchange and is never added again to component quantities. Match each SKU to its actual recipient material input, state, event and custody; unknown identities remain unresolved without inheriting a fixed UUID. | actual_issue_chainlink_fabric; actual_issue_fabric_fittings; cp_survey_receive | actual_issue_materials_fabric_tension |  |

### Declared calculation functions

| Symbol | Definition |
| --- | --- |
| SUM_ONCE | Sum quantities keyed by unique physical event IDs. Corrected duplicate readings replace originals. Distinct rework passes remain distinct events; do not deduplicate them merely because the same component reappears. |
| SUM_UNIQUE_SEGMENTS | Sum mutually disjoint measured centerline segments keyed by stable segment ID. Resolve shared corners once and remove actual gate and opening gaps before summing. Rework visits do not create new accepted segments. Only segments satisfying the named card current-state gate participate; for the final reference, every counted segment must be net and accepted. |
| CASE_PRESENT | Evaluate the measured present branch only when actual meter-topology evidence says a shared-master scope exists; evaluate the absent branch only when that topology proves direct-only supply. Unknown scope is a gap. The absent-branch zero is a diagnostic neutral term, never an invented zero reading. |
| CASE_ZERO | CASE_ZERO(r, z, p) returns z when measured r equals zero without evaluating any weight division; it returns p only for a measured positive residual with a reviewed complete eligible consumer set, every eligible weight strictly positive and a positive denominator. A negative or unknown residual is invalid and remains a gap; it is never clipped to zero. |
| SUM | Arithmetic sum over the explicitly complete set recorded in the applicable protocol. |
| L | Positive accepted net fence-panel centerline length in m, calculated only by calc_accepted_fence_service. The same lot denominator is used once by each Amount rule. |
| LEDGER_VALUE | Return the measured portion of a named own-node calculation output for one explicit material/source-state/current-state/period kg group using its retained raw-event provenance and card-event crosswalk. Every group portion has an exact raw source record, same actual unit/state and operation owner; portions reconcile to the named output. Never substitute a separately invented aggregate, cancel unlike groups, or convert geometry to mass. |
| WATER_PORTION | Return the measured water-only kg portion of a named own-node physical mass output using exact raw event/material/state/period lineage. Check each water portion against the corresponding measured wet mass and actual formulation/fraction. It must neither exceed its physical carrier mass nor overlap another water pool. |
| LINKED_TRANSFER_MASS | Return a measured processed/internal-reuse/rework transfer kg quantity only when the crosswalk names its actual own-node producing card/output, recipient feed/output, event, material, source and actual state, period and unit. The paired quantities must agree. A positive transfer without a represented semantic pair is a blocking card-review finding, never a balance plug or automatic new exchange. |

### Material, packaging and water closure rules

The four explicit calc_<node>_material_mass_closure rules consume their own named card outputs through an exact raw-event crosswalk, and separately measure retained panel-component mass and opening/closing processed WIP. Execute each closure per material/source-state/current-state lineage and actual period, without cancellation between unlike groups. Five Length handoff/acceptance cards calculate retained new installation kg from measured component ledgers; their geometry gates do not convert metres to kg or create another handover exchange. Every positive internal processed/reuse/rework transfer must name its actual represented producing card and recipient feed; an unrepresented direction or state blocks finalization pending semantic-card review. WIP portions need component IDs, real custody, prior-period closing linkage and exclusive states. For each actual material ID/current state at receipt, the calculated gross draw equals measured material-specific dispatches plus receipt waste plus actual usable U/X exits plus exclusive processed WIP or another measured physical fate. At a recipient node, the actual internal feed is reconciled to its accepted/intermediate retained material, generated waste and direct releases, positive usable exits, actual next transfers and closing processed WIP. Unissued future-lot stock belongs only in the receipt closing-intact term at its real location and is not an issued return. Net-consumed values are diagnostics, not negative outputs or a second procurement subtraction.

The same closure is applied to packaging by actual package item/composition: receipt waste and carried node issues are mutually exclusive. At the unpacking node, disposal, usable return, recorded reuse handoff and closing WIP have distinct event fates. Reused packaging that moves again requires an actual linked custody event; a material transfer does not prove its package has moved or been discarded. Upstream package production is included once according to the supplier dataset boundary.

Every water pool is linked to the named physical carrier calculation output or measured WIP pool by raw event/material/state/period provenance using WATER_PORTION; fresh U/X is a portion of actual_finish_unused_return, waste water is a portion of actual_finish_waste or actual_finish_wastewater, retained water is a portion of the measured accepted component mass, and incoming panel water is a portion of finish_panel_feed_retained_material_mass_kg. Positive processed water transfer needs its actual represented transfer pair, or remains a blocking semantic gap. The finish_water_vapour rule calculates actual H2O-to-air quantity from independent operation-specific evidence and a separate closure gap. Coating water fraction is measured separately for every actual formulation and transfer, and the constituent water is summed without assigning one product fraction to a heterogeneous material umbrella; the formulation mass-gap diagnostic reconciles the feed; panel-received water is the remaining water at the incoming handoff after prior fates, and opening processed WIP is a distinct pool. Solid- and liquid-waste water are their measured water fractions, not total residue mass. Accepted retained water, unused fresh-water U/X, processed transfers, closing WIP and vapour cannot overlap. Freshwater has no second closing-intact subtraction. A gap outside recorded measurement tolerance requires repair of the records or retained uncertainty; it is never labelled evaporation. Actual water operations at any other node require semantic-card review before their quantities are added.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | every material and actual exchange | Retain actual supplier SKU/provider/substance, current state, specification and custody evidence. A broad wire-mesh label cannot prove galvanized woven chain-link grade and state; variable fittings or release roles require actual exchange expansion. | Material certificates, supplier product records, formulation and field state inspection. |
| `quality_measurement` | all kg and m quantities | Use calibrated weighing and survey methods. Preserve native readings and same-SKU/current-state bridge samples, package tare, uncertainty, corrections and evidence of actual nonoccurrence; unknown is never zero. | Calibration certificates, raw readings, bridge evidence, stock and transfer records. |
| `quality_periods` | all nodes | Complete every actual work, receipt, idle, rework and acceptance period with explicit opening/closing states. Carry WIP and intact stocks across cutoffs without double attribution. | Node period/phase IDs, custody ledgers, WIP register and acceptance dates. |
| `quality_attribution` | shared assets, meters and service | Keep actual source, read factor, interval, topology, complete consumer set, positive eligible weights where needed and the signed period-specific decision. Separate provider-included burdens from additional foreground supply. | Meter lineage, asset/provider contracts, invoices, interval/consumer tables and attribution decisions. |
| `quality_mass_and_water` | all material and water fates | Reconcile disjoint material-specific receipt, retained, waste, usable exit, transfer and WIP pools; use water-only measured constituents and independent actual H2O-to-air occurrence and quantity. | Scales, waste tickets, measured formulation water, pool/exclusivity records and operation-specific vapour evidence. |
| `quality_final_gate` | final panel segments | Survey actual net accepted centerline and retain required actual fence qualifiers, item completeness, tautness, attachment, trimmed ends, clearance and finishing state. Do not substitute historic template dimensions. | Signed actual design and existing-post release, as-built survey, component checklist and final acceptance. |
| `quality_uncertainty` | all rows and publication metadata | Declare observation coverage, missing records, provisional range status, quantity/conversion uncertainty and unresolved identity/support gaps separately. Never infer readiness from one structural check. | Dataset disclosure and traceable independent quality review. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_scope` | all nodes | Confirm the signed existing-post/foundation release and exclusions against actual work. Any new post, foundation, gate, privacy or other added responsibility requires boundary review, not a silent zero. | `clfmi-product-manual-2017`; `masterhalco-galvanized-components` |
| `validation_component_completeness` | receipt schedule and final gate | Check every relevant component role against actual existing/new ownership, supplier SKU/material/coating and installation/acceptance records; test ferrous versus aluminum fittings and ties explicitly. Final acceptance requires all owned roles complete. | `clfmi-product-manual-2017`; `masterhalco-galvanized-components` |
| `validation_transfers` | all paired rows | For every material, package and geometry pair, reconcile event, material/segment, state, unit, quantity and custodian before normalization. Each card uses only its own node protocol. No internal amount is replaced by 1 m and no feed adds a second purchase. |  |
| `validation_receipt_closure` | receipt and downstream material ledgers | For each actual material ID/current state, reconcile gross receipt draw to actual issues plus receipt waste plus positive usable U/X exits plus exclusive receipt processed-WIP/other measured fates. Unissued intact stock was excluded once; all locations have actual custody evidence. Reconcile each downstream feed to retained material, actual waste/release, positive usable exits, recorded transfers and processed WIP. Unexplained residuals remain gaps. |  |
| `validation_packaging_closure` | all packaging cards | Reconcile packaging gross draw to receipt waste, usable exits, measured node issues and exclusive retained processed fates. Pair each carried issue/feed and reconcile its own-node waste/reuse/usable exit/WIP. Verify supplier boundary coverage once and exclude packaging from material net kg. |  |
| `validation_units` | all numeric rows | Keep m, kg, kWh and h distinct. A count, length or area record becomes kg only through a measured same-SKU/current-state bridge and its retained uncertainty evidence. Geometry interfaces stay length. Composite whole-versus-constituent representation is exclusive and final retained mass is not another handover output. |  |
| `validation_water_fates` | finish_accept water | Use actual formulation water, gross fresh water already excluding closing intact once, residual incoming panel water and opening processed WIP as distinct sources. Reconcile exclusive accepted retention, water in solid and liquid waste, observed validated H2O-to-air loss, any evidenced direct liquid H2O portion of finish_other_release, actual unused fresh-water U/X, processed transfer and closing WIP. Compare the diagnostic gap to recorded uncertainty; never derive vapour from an unexplained residual or subtract intact stock again. |  |
| `validation_actual_releases` | elementary cards | Require real operation occurrence, uncaptured quantity, substance or particle basis and receiving medium. Resolve actual exchanges from conditional role cards. No generic dust/VOC UUID, paint-product-as-emission identity or captured-waste/direct-release duplication is permitted. Only finish_water_vapour is the verified H2O-to-air-unspecified role. Any actual liquid H2O under finish_other_release requires its own actual receiving medium and remains unresolved until independently verified. |  |
| `validation_finish_activation` | finish_accept | Check the actual approved surface-repair/cleanup requirement and operation/formulation evidence. Record evidenced absence when none occurs; unknown requirements or a catalogue preference do not establish zero or mandatory repair. | `clfmi-product-manual-2017`; `masterhalco-galvanized-components` |
| `validation_reject_routing` | defect and WIP ledgers | Every off-spec state has one producing node and actual correction, return/transfer, reviewed downgrade/recovery, waste or WIP path. Link upstream loops with real transfer/pass IDs and retain work and losses. Exclude all unresolved rejected and WIP segments from the accepted output. |  |
| `validation_shared_reconciliation` | electricity and service | Reconcile actual master/direct meter and provider-service intervals across every consumer once, including outside-master direct treatment and owned idle/rework. Zero residual requires no weight division; positive residual requires a complete positive eligible denominator and decision evidence. Missing provider scope or support unit identity remains a gap. |  |
| `validation_period_reconciliation` | all period and phase records | Reconcile opening/closing custody and WIP across actual periods and the complete lot; no reused receipt, asset interval or acceptance event may enter twice. Disclose and resolve replacement, termination or restart uncertainties before finalization. |  |
| `validation_final_length` | accepted_fence_service | Calculate positive L from unique net accepted centerline segments, counting shared corners once and excluding gate/opening gaps; required height/mesh/gauge/selvage/coating and full final gate must be declared. Only L/L is a strict calculated 1..1 reference quantity. Rework cannot increase unique final length. | `clfmi-product-manual-2017`; `masterhalco-galvanized-components` |
| `validation_ranges` | every flow card | Treat every non-reference Range as a provisional reasoned-estimate anomaly screen with its individual rationale. It is not a recipe, emission factor, acceptance limit, default zero or empirical distribution. Review actual values outside it, retain valid losses and rework, and replace only using independent reviewed evidence. Do not use a batch maximum to validate the same batch. |  |
| `validation_quantity_and_identity` | every exchange | Execute the literal physical numerator calculation and its matching Amount expression, with every input declared and normalization once. Missing measurement, identity or support evidence is disclosed as a gap. A later concrete dataset must resolve each actual exchange UUID from matching evidence; a semantic card, range or automated structural pass does not establish identity, complete validation or publication readiness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground installation data package for an actual galvanized chain-link fabric-and-rail installation lot on accepted existing posts and foundations |
| downstream_use | secondary_dataset; background_dataset, with declared configuration, boundary and completeness; process and lifecyclemodel are downstream projections of the data package |
| allowed_use | Use for matching actual installation configurations and entry/acceptance gates, with explicit geographical/temporal/provider applicability and disclosed quantity/identity uncertainty |
| excluded_use | Whole-fence manufacture; new post/foundation/earthwork construction; excluded gates/privacy/barbed systems; other fabric types without review; generic design certification, warranty, service-life or emission-factor claims |
| required_metadata | Lot/site and actual dates/periods; upstream interface owners and signed release; actual height/mesh/gauge/selvage/GAW or GBW/grade/coating; component ownership schedule; transfer and defect graph; L method; material/packaging/water fates; provider and upstream boundaries; methods and conversion evidence |
| required_quality_disclosure | Collected and calculated coverage; actual nonoccurrence versus missing data; provisional reasoned Range status; uncertainty; unresolved actual exchange and support identities; provider-boundary and attribution gaps; performed/skipped verification and completeness |
| update_trigger | Changed actual product/design/specification or existing-post interface; additional responsibilities; supplier/formulation/provider changes; changed receipt or waste routes; shared-service topology/contract changes; corrected stock/period/acceptance records; independent new quantitative evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `clfmi-product-manual-2017` | handbook | Chain Link Fence Manufacturers Institute, Product Manual, updated March 2017. https://chainlinkinfo.org/wp-content/uploads/2017/05/CLFMI-Product-Manual-revised-March-2017-1.pdf | Physical woven-fabric/selvage roles and product variants (PDF pp3–4); design/submittal and receiving roles (pp20–23); framework/ancillary and tie-wire roles (pp24–29); rail/fabric integration, tensioning, fastening, trim and cleanup sequence (pp32–34). Historical template examples are not universal numeric limits, current design evidence or defaults; gate-weld paint clauses pp29–31 do not prove universal non-gate rail-cut repair. |
| `masterhalco-galvanized-components` | handbook | Master Halco, Galvanized Chain-Link brochure, official manufacturer publication. https://www.masterhalco.com/hubfs/MH%20PDF%20Files/Chainlink-Downloads/Galvanized-Chainlink/Brochures/Galvanized-Brochure-reduced.pdf?hsLang=en | GAW/GBW cut-end-state distinction (p2) and heterogeneous fittings and tie materials, including ferrous and diecast aluminum fittings and aluminum or galvanized-steel ties (p4). Actual supplier/SKU records govern the installed material; catalogue dimensions and warranty are not PCR factors. |

The protocols in section 8 define the required actual foreground evidence. Provisional reasoned Range screens are author estimates and have no source-backed numerical claim. Sources listed here support route and role choices; none supplies a default material rate, loss rate, emission factor, lifetime or installation design.
