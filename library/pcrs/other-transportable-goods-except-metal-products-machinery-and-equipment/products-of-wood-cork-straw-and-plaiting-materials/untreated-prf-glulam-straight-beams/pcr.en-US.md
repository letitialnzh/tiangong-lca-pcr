---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.untreated-prf-glulam-straight-beams
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Untreated PRF glulam straight beams

## 1. Scope and Applicability

This PCR covers one manufacturing route: straight, untreated, uncoated coniferous glulam beams made entirely from purchased kiln-dried structurally graded sawn laminations, with grain parallel to beam length, PRF finger joints where required, two-component PRF face bonding, hydraulic clamping and room-temperature curing. Electric equipment and electric room/wash-water heating are included; no on-site lumber kiln, combustion, purchased steam or fuel-based heating is represented. Grades and bonding suitability are established by actual product/plant records, not by this PCR. [usda-wood-handbook-2021, Ch.11 pp.11-18–11-21; dynea-prf-tds-2014.]

Exclude CLT cross-layer panels, LVL/PSL/LSL/OSL, veneer-containing tension laminations, I-joists, edge-glued furniture panels, curved/tapered or block/re-glued members, hardwood/bamboo, preservative/fire-retardant treatment, coatings/sealers, added adhesive extenders, RF/hot pressing and installed assemblies with metal connectors. A different route requires separate applicability and inventory review; this is not a selector across engineered wood products. No structural design value, certification, load equivalence or service life is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.untreated-prf-glulam-straight-beams |
| classification_refs | CPC 3.0 31627; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Untreated uncoated straight PRF coniferous sawn-lamella glulam beams |
| excluded_products | CLT; LVL and other structural composite lumber; treated/coated/curved/veneer-reinforced or hot/RF-cured products |
| representative_product | One declared straight beam configuration with actual lamella grade combination |
| production_route | Purchased kiln-dried lumber; verify grade/moisture; prepare lamellas; PRF finger joint; plane fresh bond faces; mix resin and powder; lay up; hydraulic clamp; room-temperature cure; trim/plane; test; protect for dispatch |
| market_state | Accepted manufactured beam at factory gate; net wood plus cured adhesive, dispatch protection separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply glulam beam material for declared structural application without establishing structural equivalence |
| How much | 1 kg net accepted beam at factory gate, excluding packaging |
| How well | Actual species, lamella grade/position, beam dimensions, adhesive qualification and joint/bond acceptance records; no invented strength |
| How long or cycle | One declared production/dispatch accounting period; no service duration |
| reference_flow_link | `finished` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Engineered structural timber products `7d571023-9d51-45d7-86d4-4cceefb3d06c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Botanical species/mix; sawn lamella dimensions, grade and positions; beam geometry and balanced/unbalanced layup; actual joint type; liquid PRF and powder grade/lot; cured adhesive retained; actual dry-basis wood moisture and sampling; net mass excluding packaging; no treatment/coating; hydraulic room-temperature route; documented qualification and test status; site/period; purchased lumber supplier gate and quantity basis |

Declare all required qualifiers in the concrete data package. The broad product UUID is a physical locator for this explicitly limited subset; selecting it does not establish a matched provider. This is a mass declared unit, not 1 m3 or a load-bearing service functional unit. Compare service only in a separate design study with verified loads, geometry, exposure, duration and replacement.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Weigh accepted finished beams using calibrated scales in cp_reference, tare packaging separately. Net accepted product contains actual water and cured adhesive; reject and test-sample masses are outside this denominator. |
| `wood_moisture` | unglued wood and separated wood component | dry-basis water fraction | dimensionless | u=(m_wet-m_dry)/m_dry; m_dry=m_wet/(1+u); percentages must be divided by 100. Use representative paired wood samples and a documented oven-dry method; never apply wood u to total adhesive-containing glulam mass. Retain adhesive solids, water and volatiles separately. [usda-wood-handbook-2021 Ch.4 eqs.4-1/4-2.] |
| `solid_volume` | wood_input | Volume; matched mass | m3; kg | Measure actual solid dimensions/volume at the recorded wood moisture; mass conversion uses same-lot wet density, not nominal section or a species-average/basic density. Verify supplier m3 state and measurement convention before linking. Final beam volume and load service never replace the accepted-kg denominator. |
| `electric_energy` | electricity | Net calorific value database energy property | MJ | Meter delivered electrical kWh at the below-1-kV consumer boundary and convert to MJ by ×3.6. Match provider voltage, grid mix, geography, year and loss boundary; no fuel heat interpretation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered kiln-dried graded untreated coniferous sawn lumber and separately purchased PRF components |
| starting_condition_role | Gate-to-gate foreground beam manufacturing; purchased lumber drying is upstream |
| product_classification_scope | CPC 3.0 31627; narrower |
| recursive_input_rule | Purchased compatible material remains an explicit input with supplier-gate burdens; no recursive reuse of this finished-beam reference as an internal intermediate |
| upstream_dataset_requirement | Matched kiln-dried lumber including forestry, sawmilling and drying; delivery transport; both formulated PRF components; electricity, water, packaging, maintenance and waste providers. Physical UUID and quantity/provider compatibility require separate checks |
| disclosure | Site, cohort, receipt/dispatch gates, supplier exclusions, control routes, losses, stock changes, unresolved identities/providers and transport modelling. Gate-to-gate is not complete cradle-to-gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_stages` | glulam_manufacture | Include grade/moisture verification, defect removal, finger-joint cutting/gluing/end pressure/cure when present, fresh face planing, adhesive mixing/spreading, layup, hydraulic clamping/room cure, trimming, final inspection/test specimens, dust/exhaust control, cleaning, maintenance and actual dispatch protection. Record each stage independently within the aggregated foreground unit. | `usda-wood-handbook-2021`; `dynea-prf-tds-2014` |
| `boundary_emissions` | all emissions and wastes | Quantify actual releases after controls; captured dust and glue-bearing cleaning water remain waste transfers. Outdoor-air records never represent workshop exposure or water discharge. Screen actual species from current formulation/SDS and measurements; add each missing applicable exchange individually before dataset completion, including used hydraulic oil, other consumables and any measured water vapour. No toxicity-based flow is removed by a mass cutoff. | `dynea-prf-tds-2014` |
| `boundary_carbon` | wood and adhesive carbon | Keep wood biogenic carbon and adhesive fossil/biogenic carbon separately in inputs, accepted beams, residues, water and air losses, with measured/verified composition. Upstream forest uptake is inherited once, never invented at the glulam plant. Stored product carbon is not a negative foreground emission or avoided-emission credit. If direct biogenic CO2 is actually emitted, retain it separately in LCI even if a GHG reporting convention omits it; there is no default combustion in this route. | `usda-wood-handbook-2021` |
| `boundary_downstream` | downstream use | Exclude transport after dispatch, installation, structural service and end-of-life from this manufacturing gate. State capital and personnel boundary treatment and significance explicitly; omitted stages are not zero. Fuel-based on-site operations, purchased heat and different adhesive/curing routes require a reviewed inventory extension. | `usda-wood-handbook-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `glulam_manufacture` | Grading, PRF jointing/bonding, finishing, QA and dispatch | required | The single purchased-lumber room-temperature hydraulic route defined in scope | One aggregated foreground unit with independent stage measurements and physical ledgers | `finished` |

Lumber receipt → grade/moisture checks and defect cuts → finger-joint preparation/PRF joining if needed → fresh face planing → PRF mixing/spreading and declared layup → hydraulic clamping and room cure → trim/plane and quality tests → protected factory dispatch. Intermediate laminations and untrimmed beams stay inside this unit; use matched raw transfer records and stage quantities, not a second product output with the reference UUID.

The cards below describe unallocated physical exchanges per 1 kg reference flow. Divide actual cohort totals by accepted net beam kg; normalization is not burden allocation. Preserve original masses, water/adhesive/carbon inventories and stock changes before any allocation. Close internal transfers with equal amounts at both ends. A conditionally applicable exchange without measurement is pending, not zero.

### Process: Beam manufacturing (`glulam_manufacture`)

#### Inputs

##### Product flows

###### Lumber for construction (`wood_input`)

Purchased kiln-dried, untreated coniferous sawn lumber with verified lamella grades; measure actual solid volume at receipt moisture, retain wet and oven-dry masses. No LVL tension laminations. Supplier solid-volume reference and moisture state must match; nominal board volume or loose bulk volume is insufficient.

- Selected flow: Lumber for construction `73ef1fef-6aa1-43b0-8721-c8f2f1385509`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured physical exchange total from cp_material, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `usda-wood-handbook-2021`

###### Liquid phenol-resorcinol-formaldehyde adhesive resin (`prf_resin`)

Record the separately delivered liquid PRF formulation mass used for finger joints and face bonds, with supplier grade, lot, solids, water and volatile composition. Do not replace formulated resin with dry phenolic polymer or copy a historical mix ratio.

- Selected flow: Liquid phenol-resorcinol-formaldehyde adhesive resin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_adhesive, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_adhesive`
- Sources: `dynea-prf-tds-2014`

###### Powder hardener for PRF wood adhesive (`prf_hardener`)

Record actual powder formulation mass separately from resin. Confirm current TDS/SDS, reactive content and any filler; a pure paraformaldehyde identity does not establish this mixture. No separately added filler is covered.

- Selected flow: Powder hardener for PRF wood adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_adhesive, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_adhesive`
- Sources: `dynea-prf-tds-2014`

###### Alternating current (`electricity`)

Meter customer-side grid-average low-voltage supply below 1 kV. Include handling, machining, finger jointing, adhesive mixing, hydraulic pumps, exhaust/dust controls, electric room conditioning, electric wash-water heating, quality tests and packing. Preserve the database Net calorific value energy representation; electricity is not combusted fuel.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured physical exchange total from cp_energy, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Tap water (`water`)

Conditional purchased treated tap water for adhesive-equipment cleaning and quality tests. Meter actual water volume; no density default is imported from the flow secondary mass property. The physical locator does not establish a matched supplier or delivery background. Verify actual provider, geography, treatment-plant versus delivery gate, distribution burdens and reference-volume compatibility independently; keep any unmatched provider link pending. Include electric heating in electricity.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured physical exchange total from cp_material, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources: `dynea-prf-tds-2014`

###### Polyethylene film (`pe_wrap`)

Conditional polyethylene protective wrapping at factory dispatch. Weigh installed film and separately recorded scrap; no paper, PET, coating or sealer substitution. Verify actual polyethylene-film state, grade and supplier/provider compatibility before background linkage; the physical polymer identity does not establish a matched packaging dataset. Packaging mass never enters the beam denominator.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_packaging, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Polypropylene packaging strap (`pp_strap`)

Conditional finished PP packaging strap only, weighed separately. Resin granules, yarn, twine and steel band are different products; actual non-PP packaging requires a separate reviewed row.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_packaging, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources:

###### Hydraulic Fluid (`hydraulic_oil`)

Conditional oil make-up or replacement consumed in the hydraulic clamping system; use the actual additive-containing formulation. Existing oil charge is not repeatedly counted each beam; trace leakage and used-oil destination. Meter actual oil volume and verify supplier quantity basis; any mass conversion needs measured same-grade density and temperature, not an assumed coefficient.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured physical exchange total from cp_maintenance, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_maintenance`
- Sources:

#### Outputs

##### Product flows

###### Engineered structural timber products (`finished`)

Only accepted untreated, uncoated straight PRF glulam beams composed entirely of coniferous sawn laminations with grain parallel to length. Broad database identity includes this subset; it does not select CLT/LVL or approve strength, service class or a background dataset. Net mass includes retained cured adhesive and actual wood moisture, excludes all packaging.

- Selected flow: Engineered structural timber products `7d571023-9d51-45d7-86d4-4cceefb3d06c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_reference`
- Sources: `usda-wood-handbook-2021`

##### Waste flows

###### sawdust waste (`clean_shavings`)

Separately collected unglued untreated machining particles from pre-bond cutting/planing, delivered as non-agglomerated waste to external recovery. Confirm that recipient and waste status fit the verified untreated combustion/recovery identity. Never use it for glue-bearing finishing dust or emit captured material again to air.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_waste, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`

###### Untreated unglued softwood offcut waste (`clean_offcuts`)

Segregated untreated, unglued, non-agglomerated coarse solid coniferous wood offcuts and grade-rejected input lumber from pre-bond preparation. Weigh separately and document actual wood state, moisture and destination; verify recipient/provider acceptance before treatment linkage. The broad woodworking-remnant locator does not establish matched treatment or an agglomerated briquette state.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_waste, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`

###### PRF-bonded glulam offcut waste (`bonded_trim`)

Solid end trims, quality-test specimens and fabrication offcuts carrying cured PRF; record cured resin content and destination. Excludes dust and whole rejected beams.

- Selected flow: PRF-bonded glulam offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_waste, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`

###### PRF-contaminated wood machining dust waste (`bonded_dust`)

Captured post-bond planing/sanding dust carrying cured adhesive, weighed separately from unglued dust. Segregate used filter media if present as its own additional exchange.

- Selected flow: PRF-contaminated wood machining dust waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_waste, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`

###### Rejected PRF glulam beam waste (`rejected_beam`)

Whole bonded members rejected after final quality inspection; exclude their mass from accepted output, retain their production inputs and documented rework/recovery fate.

- Selected flow: Rejected PRF glulam beam waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_waste, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`

###### Uncured mixed PRF adhesive waste (`adhesive_waste`)

Pot-life expired or surplus uncured mixed PRF collected separately; exclude adhesive retained in wood and adhesive already in washwater. Record actual wet formulation and hazardous-waste determination.

- Selected flow: Uncured mixed PRF adhesive waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_waste, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `dynea-prf-tds-2014`

###### PRF adhesive equipment cleaning wastewater (`washwater`)

Conditional glue-contaminated washwater transferred to external treatment, with measured volume and composition. It is a technosphere waste, not tap water or a direct receiving-water elementary discharge.

- Selected flow: PRF adhesive equipment cleaning wastewater
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured physical exchange total from cp_waste, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `dynea-prf-tds-2014`

###### Used mineral-based hydraulic oil (`used_oil`)

Conditional separately transferred spent mineral hydraulic oil with its actual additives and contamination. Weigh and verify external recipient; no repeated counting of the retained equipment oil charge.

- Selected flow: Used mineral-based hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_waste, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Waste polyethylene wrapping film (`pe_scrap`)

Conditional wrapping offcuts transferred to recovery/treatment; distinguish dispatch-installed film from discarded film and document polymer and destination.

- Selected flow: Waste polyethylene wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_waste, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### particles (PM2.5) (`pm_fine`)

Actual post-control outdoor-air PM2.5 from machining/handling. Particle source is wood or glue-bearing wood dust, not combustion; retain source, aerodynamic cut, filterable/condensable method and outlet conditions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_emission, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### particles (PM2.5 - PM10) (`pm_mid`)

Actual outdoor-air particles above PM2.5 and up to PM10 on the same source/control/measurement basis as the fine fraction. Not cumulative PM10.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_emission, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### particles (> PM10) (`pm_coarse`)

Actual outdoor-air particles above PM10. Not total suspended particles or cumulative PM10; no nested size fractions are summed twice.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_emission, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### formaldehyde (`formaldehyde`)

Conditional actual CAS 50-00-0 release to outdoor air from adhesive preparation, jointing, curing or handling; quantify outlet and fugitive releases separately before aggregation. No positive emission amount follows from resin presence.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_emission, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `dynea-prf-tds-2014`

###### phenol (`phenol`)

Conditional actual CAS 108-95-2 outdoor-air release demonstrated by current SDS and monitoring. Do not substitute cyclohexanol, indoor air, water or correction records.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_emission, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `dynea-prf-tds-2014`

###### methanol (`methanol`)

Conditional actual CAS 67-56-1 outdoor-air release from the documented adhesive carrier or wood process. Resolve source carbon origin and monitor; do not substitute alpha-methylbenzyl alcohol or assume a solvent fraction.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured physical exchange total from cp_emission, divided by accepted net beam kg from cp_reference; retain raw records and stage attribution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources: `dynea-prf-tds-2014`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | physical and burden ledgers | Keep physical inputs, all residue outputs and matched internal transfers unchanged. For a shared plant, first subdivide using stage meters and batch routing; directly attribute beam-line material consumption. Never multiply coproduct output masses or terminal 1 kg by an allocation share. |  |
| `allocation_status` | residue status | Distinguish waste sent to treatment/recovery from a deliberately produced marketed coproduct using actual legal, recipient and market evidence. Waste outputs receive their actual treatment burdens without avoided-energy/material credits. A sale price alone does not redefine every residue. If a true coproduct occurs, record its separate atomic output and applicable identity before completion. |  |
| `allocation_joint` | remaining shared burdens | If subdivision cannot resolve a joint burden, document a demonstrated causal physical relationship and allocate only that burden accordingly. Otherwise explicitly justify the selected alternative, such as economic allocation with period-matched prices and quantities, and sensitivity. No universal mass or revenue fraction is supplied. Record original burden, share, direct burden, target and provenance in cp_allocation; shares for each joint step sum to one. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | glulam_manufacture | accepted product | Primary measured record | batch; beam ID/configuration; accepted and rejected status; dimensions; tare; net mass; dispatch stock; grade/layup; wood moisture; adhesive retained | Calibrated net weighing excluding all packaging; link actual grade, layup, joint/bond qualification, inspections and dispatch. Reconcile accepted production, opening/closing stock and dispatch. | kg | Each batch/meter interval or transfer; aggregate declared period | Declared representative production period with grade mix, ambient season, batch cure and maintenance coverage | One declared plant and segregated beam line | per 1 kg reference flow | Calibration, traceable lots and records, current qualification/tests, sample representativeness, balances and uncertainty |
| `cp_material` | glulam_manufacture | wood and water | Primary measured record | receipt lot; species; stage; raw wet/dry mass; actual solid volume; dimensions; paired moisture samples; water meter; stock and transfers; density | Weigh wood separately and measure solid dimensions at its actual moisture. Use documented oven-dry wood samples and species/temperature-corrected moisture meters. Retain water metering; do not infer finished composite dry wood from total mass. | kg; m3 | Each batch/meter interval or transfer; aggregate declared period | Declared representative production period with grade mix, ambient season, batch cure and maintenance coverage | One declared plant and segregated beam line | per 1 kg reference flow | Calibration, traceable lots and records, current qualification/tests, sample representativeness, balances and uncertainty |
| `cp_adhesive` | glulam_manufacture | PRF components and joint control | Primary measured record | resin/powder formulation; lot; current TDS/SDS; supplied/used/stock masses; mixing record; solids/water/volatiles; retained glue; joint geometry; face grade/position; surface time; assembly time; end pressure; face pressure; cure temperature/time; tests | Weigh separately supplied liquid resin and powder, reconcile batch mix and losses; record finger-joint and face-bond batches independently. Verify lamella placement and fresh clean parallel bonding surfaces, qualified spreading/clamping/cure controls and actual test results. Historic supplier values are examples, not defaults or current certification. | kg | Each batch/meter interval or transfer; aggregate declared period | Declared representative production period with grade mix, ambient season, batch cure and maintenance coverage | One declared plant and segregated beam line | per 1 kg reference flow | Calibration, traceable lots and records, current qualification/tests, sample representativeness, balances and uncertainty |
| `cp_energy` | glulam_manufacture | electricity | Primary measured record | stage; meter; start/end; kWh; voltage; grid/provider; room/water heating; dust extraction; QA; idle/rework; transformer boundary | Meter each stage and reconcile line totals to purchase records; use measured causal attribution for shared utilities and document uncertainty. Convert kWh to MJ ×3.6; avoid double counting controls and electric heat. | MJ | Each batch/meter interval or transfer; aggregate declared period | Declared representative production period with grade mix, ambient season, batch cure and maintenance coverage | One declared plant and segregated beam line | per 1 kg reference flow | Calibration, traceable lots and records, current qualification/tests, sample representativeness, balances and uncertainty |
| `cp_packaging` | glulam_manufacture | each component | Primary measured record | polymer; finished form; mass installed; mass discarded; dispatch; purchased/opening/closing stock | Weigh PE film and PP strap independently; reconcile installed film, scrap and stock. Exclude both from reference mass. | kg | Each batch/meter interval or transfer; aggregate declared period | Declared representative production period with grade mix, ambient season, batch cure and maintenance coverage | One declared plant and segregated beam line | per 1 kg reference flow | Calibration, traceable lots and records, current qualification/tests, sample representativeness, balances and uncertainty |
| `cp_maintenance` | glulam_manufacture | hydraulic oil | Primary measured record | oil grade/additives; consumed make-up/replacement; retained charge; leakage; used-oil recipient; maintenance period | Record actual maintenance consumption and destination; attribute maintenance across its documented production coverage without repeated full-charge counts. Measure oil volume, temperature and formulation-specific density for any mass conversion, and confirm supplier reference basis. Add separate used-oil waste and elementary leaks where present. | kg; m3 | Each batch/meter interval or transfer; aggregate declared period | Declared representative production period with grade mix, ambient season, batch cure and maintenance coverage | One declared plant and segregated beam line | per 1 kg reference flow | Calibration, traceable lots and records, current qualification/tests, sample representativeness, balances and uncertainty |
| `cp_waste` | glulam_manufacture | each residue | Primary measured record | stage; unglued/glued; physical state; wet mass; wood moisture; cured resin; wastewater volume/composition; test specimens; rejects; recipient; waste/coproduct status; stock | Separate each listed waste by stage and contamination. Weigh solids and meter washwater with assays; verify receiving treatment/recovery and avoid double counting captured dust, glue retained in wood or glue washed into water. | kg; m3 | Each batch/meter interval or transfer; aggregate declared period | Declared representative production period with grade mix, ambient season, batch cure and maintenance coverage | One declared plant and segregated beam line | per 1 kg reference flow | Calibration, traceable lots and records, current qualification/tests, sample representativeness, balances and uncertainty |
| `cp_emission` | glulam_manufacture | each substance and size fraction | Primary measured record | species/CAS; source; outdoor medium; carbon origin; controls; outlet/fugitive method; concentration; dry/wet gas basis; gas flow; run/idle/cure time; detection limit; PM cut and filterable/condensable basis | Use representative post-control measurements over actual operations, including cure/storage and fugitives when relevant. Integrate concentration with matched gas flow and operating time in consistent units; document non-detects and uncertainty. Estimates need route/formulation/control-matched original factors with their activity basis; none is supplied here. Screen all actual species, not merely this list. | kg | Each batch/meter interval or transfer; aggregate declared period | Declared representative production period with grade mix, ambient season, batch cure and maintenance coverage | One declared plant and segregated beam line | per 1 kg reference flow | Calibration, traceable lots and records, current qualification/tests, sample representativeness, balances and uncertainty |
| `cp_allocation` | glulam_manufacture | separate environmental burden account | Primary measured record | raw-record links; shared/direct burdens; step; target; causal measurement; coproduct evidence; share; price period; inherited origin; sensitivity | Retain physical ledger independently. Record direct attribution first, and only justified remaining allocation; do not overwrite physical quantities or duplicate inherited burdens. | kg; MJ | Each batch/meter interval or transfer; aggregate declared period | Declared representative production period with grade mix, ambient season, batch cure and maintenance coverage | One declared plant and segregated beam line | per 1 kg reference flow | Calibration, traceable lots and records, current qualification/tests, sample representativeness, balances and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `period_balance` | all inventory rows | For one coherent cohort, reconcile receipts, opening/closing stock, accepted output, rework, rejected members, test specimens, residues and losses in raw physical units. Divide each unallocated physical exchange total by the same accepted net beam kg from cp_reference. Retain equal internal stage transfers and their raw records. The terminal product remains 1 kg. | `cp_reference`; `cp_material`; `cp_adhesive`; `cp_energy`; `cp_packaging`; `cp_maintenance`; `cp_waste`; `cp_emission` | Unallocated physical exchanges per 1 kg reference flow |  |
| `component_balance` | wood water adhesive and carbon | Close dry wood, water, adhesive solids/volatiles and carbon separately using measured component masses and stock changes. Do not subtract adhesive water from wood dry mass or regard composite oven loss as pure wood moisture. Allocate retained adhesive among accepted beams and glue-bearing residues from records, not assumed recipe or yield. Track wood and adhesive carbon separately and include measured emissions and wastewater carbon. | `cp_material`; `cp_adhesive`; `cp_reference`; `cp_waste`; `cp_emission` | Unallocated wood/water/adhesive/carbon balance with residual uncertainty | `usda-wood-handbook-2021` |
| `particle_partition` | pm_fine; pm_mid; pm_coarse | For comparable cumulative measurements on identical source/control/activity and filterable basis, PM2.5-10=PM10-PM2.5 and PM>10=total filterable PM-PM10. Require nonnegative fractions and measured cut definitions. Never add cumulative PM10 or total PM to these disjoint fractions. Condensable PM requires its own method and applicable identity before use. | `cp_emission` | Disjoint actual particle masses |  |
| `burden_account` | shared environmental burdens | Keep assigned burden = directly attributable burden + justified share × remaining shared burden in a separate account. Normalize it by the same accepted net beam kg and retain original burden/record links. Allocation shares apply to environmental accounts only; all physical residue outputs and internal transfer totals remain unchanged. | `cp_allocation`; `cp_reference` | Traceable allocated LCI separate from physical graph |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_structure` | lamellas joints and accepted product | Retain actual species and grade combination, lamella positions, tension/compression orientation, dimensions, joint geometry, glue qualification and lot, stage settings, end-joint tests and face-bond shear/delamination results against the actual applicable specification. Record nonconforming batches and rework. A handbook description or database name is not strength or certification evidence. | `usda-wood-handbook-2021`; `apa-a190-overview`; actual qualification records |
| `quality_identity` | every applicable exchange | Check physical product/waste/substance, formulation/state/route, reference property/unit and actual recipient medium. Confirm physical identity separately from provider and quantity compatibility; unresolved applicable UUIDs/providers prevent a fully resolved package, not a specific-name flow card. | Direct records, producer and supplier evidence |
| `quality_coverage` | whole production cohort | Cover grade/species mix, ambient cure season, startup/idle/rework, all energy including dust control and test equipment, cleaning and maintenance. Screen actual materials/wastes/species absent from these cards and add separate atomic rows before release. Assess balance residuals and uncertainty; no generic yield, density, adhesive content, emission factor, strength or numeric amount range is provided. | Primary records, process diagram, current TDS/SDS, measurements and residual assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | applicability | Reject selection for CLT, LVL, other excluded products/routes or unsupported species/adhesive combinations. Exactly one product output is the selected reference, finished, with 1 kg net accepted mass and complete qualifiers. |  |
| `validate_measurement` | all inventory rows | EN/ZH reference, per-kg inventory bases, protocol aggregation and normalization must agree. Positive accepted cohort mass is required; rejected beams and packaging cannot enter its denominator. Internal physical transfers match on both sides; allocated burdens cannot overwrite mass/water/carbon totals. |  |
| `validate_quality` | structural and bond claims | Claims require actual current specification, qualification and lot-linked tests, including lamella grade/placement and joints/interfaces. Missing evidence remains explicit; no default structural strength or certification is generated. | `usda-wood-handbook-2021`; `apa-a190-overview` |
| `validate_emissions` | elementary flows and waste | Confirm exact chemical and outdoor-air medium, species mass and disjoint PM intervals. Track post-control amounts and captured waste separately; no cumulative particle double counting or wastewater-as-elementary shortcut. Conditional unmeasured emissions cannot be zeroed. Additional biogenic/fossil emissions require distinct accurate identities. |  |
| `validate_completeness` | dataset delivery | No complete resolved inventory claim until applicable exchanges/providers, formulations, quantities, treatment, qualifications and balances are verified. Report tests performed, skipped coverage, gaps and uncertainties; do not infer scientific approval from a projection or measurement check. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for the explicitly limited beam route |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified manufacturing input to compatible construction LCA with matching net-mass and upstream boundaries |
| excluded_use | Generic engineered wood selector; certified strength/design service; CLT/LVL; complete building life cycle or substitution credits |
| required_metadata | Scope and all required qualifiers; site/year/technology; functional denominator; stage map; supplier basis; controls; waste recipients; QA and allocation method; transport and upstream boundaries |
| required_quality_disclosure | UUID/provider/formulation gaps; qualification evidence and actual test coverage; measurement representativeness; balances, uncertainty, allocation sensitivity and exclusions |
| update_trigger | Changed species/grade/layup, adhesive/hardener, joint/press/cure route, treatment/coating, electricity boundary, recipient or measurement evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), Ch.11 pp.11-18–11-21 (PDF294–297), Ch.4 p.4-1 eqs.4-1/4-2 (PDF95). [GovInfo](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | Lamella grading/position, finger-joint and face-bond controls, clamping, finishing/test specimens and wood moisture definition. Qualitative method only; no numerical strength, cure time or generic inventory factor adopted. |
| `dynea-prf-tds-2014` | extension_guidance | Dynea Aerodux185 TDS, 05.2014, seven-page manufacturer original on distributor mirror; pp.1–3,5–7. [TDS](https://www.redwood-uk.com/wp-content/uploads/2025/02/RI130225001-Aerodux-185-TDS.pdf) | Historical two-component PRF manufacturer example: separate liquid resin/powder, surface preparation, assembly/pressure/cure monitoring and contaminated washwater. Current formulation-specific TDS/SDS and qualification required; historic recipe, moisture/pressure/time values and approvals are not defaults. |
| `apa-a190-overview` | official_guidance | APA publisher overview of ANSI A190.1-2022; Scope and Key Requirements, lumber/adhesive, joints and quality-control sections. Full standard text is not assumed from this overview. [APA](https://www.apawood.org/what-we-do/standards-development/ansi-a1901-standard-for-structural-glued-laminated-timber/) | Parallel-lamella glulam identity and qualification/QA evidence categories only; no certification or numeric specification asserted. |
