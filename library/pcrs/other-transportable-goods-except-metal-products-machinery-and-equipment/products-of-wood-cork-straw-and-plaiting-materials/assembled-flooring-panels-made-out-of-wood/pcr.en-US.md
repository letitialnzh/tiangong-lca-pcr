---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.assembled-flooring-panels-made-out-of-wood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Factory-prefinished UF-bonded all-hardwood-veneer assembled flooring panels

## 1. Scope and Applicability

This PCR covers factory-assembled, cross-laminated all-wood flooring panels made from purchased dry non-tropical hardwood veneer sheets, each no thicker than 6 mm, bonded with urea-formaldehyde (UF) adhesive, machined into installable profiles, clear UV-prefinished and packaged for sale. Face/wear layer, each core species and balancing back layer remain separate material records. This is a manufacturing category with one measured reference mass, not a claim of installed service equivalence.

Single-layer solid-wood assembled parquet has no cross-laminated wood support; HDF decorative laminate has a printed wear image; wood-faced HDF composite has real wood on a composite core; unassembled strips have not become panels. None is covered. Also excluded are bamboo, tropical/softwood plies, lumber/particleboard/fibreboard cores, different glue chemistry, pigmented stains, jobsite finishing, and integrated log-to-veneer manufacture. Purchased veneer production stays in upstream datasets. The selected route uses electrical handling and externally linked heat, without foreground fuel combustion. A site with an integrated boiler must link a separately measured boiler unit and retain its fuel, ash and all elementary emissions rather than treat it as an unmeasured utility.

The distinction between solid and all-wood engineered flooring follows `nwfa-wood-definition`; assembly follows `unsd-cpc-31626`; veneer lay-up, pressing, machining, UV operations and boxing are documented in `corrim-flooring-2011`, sections 2.5–2.6 and 3.6–3.9. That source is an Eastern US 2007 manufacturing survey, not a current global parameter set. Its mixed UF/PVA recipe, densities, moisture targets, coating loadings, proxies, emission factors and carbon-neutral interpretation are not PCR defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.assembled-flooring-panels-made-out-of-wood |
| classification_refs | CPC 3.0 31626; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | UF-bonded all-non-tropical-hardwood-veneer, clear UV-prefinished assembled multilayer flooring |
| excluded_products | Single-layer solid parquet; HDF laminate/composite; unassembled strips; alternate cores/glues/finishes |
| representative_product | A declared species-layer recipe of factory-finished profiled multilayer wood flooring; no invented thickness, density or proportions |
| production_route | Purchased dry veneers → conditioning and glue preparation → cross lay-up and hot pressing → trim/saw/sand/profile → clear UV finishing/curing → inspection/boxing |
| market_state | Accepted, fully cured, factory finished and packed; flooring net mass excludes package |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacturing supply of assembled wood floor covering |
| How much | 1 kg accepted flooring net mass at factory gate; effective coverable area is measured as a supplementary product descriptor |
| How well | Declared layer species, thickness, profile, glue and coating recipe, delivery moisture, curing and product acceptance criteria |
| How long or cycle | One manufacturing supply event; no assumed service life, resurfacing cycle or installation loss |
| reference_flow_link | reference_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Assembled flooring panels made out of wood `a68f3cc0-8df3-4e20-8793-599f95e254a2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species and source for each wood layer; thickness of each layer and total; grain arrangement and bond line; UF formulation and supplied solids/water; clear UV coating SKU and chemistry per stage; retained coating/additive mass; measured cover dimensions and joining profile; moisture measurement basis; net mass; factory gate; metered voltage; heat supply definition; acceptance grade/date |

Required qualifiers must be declared in each foreground package. The broad reference identity is restricted by these qualifiers; it does not authorize use for solid parquet or HDF laminate. Manufacturing mass is not an installed-area functional unit.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted finished flooring on a calibrated scale at declared moisture; subtract all package tare and reject mass. Denominator G is total accepted net flooring mass in the matched production period; no default product weight. |
| effective_area | reference product | Area | m2 | Measure a representative joined layout of accepted boards with actual joint engagement. Count only exposed coverable face, excluding tongue overlap, concealed edges and package nominal oversize. Reconcile a = A/G with thickness and measured mass; do not assume installation cutting waste. |
| wood_moisture | wood layers | Mass | kg | Use dry-basis moisture u = (wet wood mass - dry wood mass) / dry wood mass. Measure separate wood layers with a species-calibrated method verified against representative oven-dry samples; do not treat resin/coating volatilization as water. No default moisture or density. |
| utility_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Electricity retains the recorded NCV property; convert metered kWh using 3.6 MJ/kWh. This is electrical-energy unit conversion, not fuel heat or efficiency. |
| utility_heat_basis | press_heat | Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` | MJ | Purchased steam heat retains its GCV reference and requires supplier-defined reference-energy and delivery/return compatibility. Preserve measured steam/condensate mass, state and physical net enthalpy separately; a bare MJ value does not establish net useful heat or a GCV conversion. Unknown provider correspondence remains pending. |

Sources: `usda-wood-handbook-2021`, chapters 4 and 13; area and gate-mass requirements are foreground protocols `cp_output` and `cp_layers`; energy definitions require `cp_energy`.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Dry separate non-tropical hardwood veneer at flooring factory receiving gate; resin and coating preparations received as declared formulations |
| starting_condition_role | Foreground gate-to-gate assembly/finishing plus explicit upstream product, utility, transport and waste-treatment links for cradle-to-gate use |
| product_classification_scope | Only the specified multilayer assembled wood subset of CPC 3.0 31626 |
| recursive_input_rule | Purchased assembled floor panels or recovered same-category material terminate tracing at a documented upstream dataset; disclose identity, previous processing and amount. Rework within this unit is internal WIP, not a new external reference product. |
| upstream_dataset_requirement | Matched species/veneer drying/peeling, actual independently supplied UF resin or verified complete UF adhesive with compatible supplied-state/reference basis and supplier manufacture/preparation/delivery, coating formulation, grid region/year/voltage, thermal supplier reference and actual treatment; missing compatibility remains pending |
| disclosure | Gate, period, configurations, starting moisture, purchased/on-site split, WIP/stock changes, heat generation boundary, losses and excluded downstream scenarios |

### Boundary Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_stages | Include conditioning, glue preparation, lay-up/press cure, machining, dust collection, all clear-coating operations/UV cure, QC, electrical material handling and packing. Collect each stage independently, then aggregate one foreground unit; WIP handoffs retain equal physical quantities on both stage ledgers. | corrim-flooring-2011 |
| boundary_upstream | Link upstream veneer, adhesive/coating, utilities and actual waste treatment once. Separate utility generation prevents duplicated boiler emissions; site integration does not justify dropping fuel emissions or ash. Retain biogenic CO2 in any linked combustion LCI irrespective of climate accounting treatment. | corrim-flooring-2011 |
| boundary_downstream | Installation, underlay/installation adhesive, actual cutting loss, use, repair, replacement and end of life require a separately evidenced scenario. No lifetime or installation loss multiplier is supplied by this manufacturing PCR. Do not omit low-mass resins/coatings because of mass alone. | corrim-flooring-2011; nwfa-wood-definition |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| flooring | Assembly, machining, clear UV cure and packing | required | Declared UF/all-hardwood-veneer route | One aggregated foreground manufacture; stage measurements retained | 1 kg reference_output |

### Process: Assembly, machining, clear UV cure and packing (`flooring`)

All flow amounts refer to the same accepted output mass G and matched period. A conditional row uses measured presence or documented absence; no row is a positive default emission. Each purchased formulated SKU is one exchange; chemicals separately dosed on site are separate exchanges. Additional species, formulations, wastes or identified emissions require further atomic rows before dataset completion.

#### Inputs

##### Product flows

###### face veneer (`face_veneer`)

This is a separate face veneer exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of other non-coniferous wood `7a8c3cba-0c6b-422a-ac79-b7032d874bcb`
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separate purchased dry face/wear veneer of one identified non-tropical hardwood species and supplier; record layer thickness, moisture and rejects. Split another species or supply route into a separate atomic row. No pooled wood input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_layers`
- Sources: `corrim-flooring-2011`

###### core veneer (`core_veneer`)

This is a separate core veneer exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of other non-coniferous wood `7a8c3cba-0c6b-422a-ac79-b7032d874bcb`
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separate purchased dry cross-grain core veneer of one identified non-tropical hardwood species and supplier; record layer thickness, moisture and rejects. Split another species or supply route into a separate atomic row. No pooled wood input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_layers`
- Sources: `corrim-flooring-2011`

###### back veneer (`back_veneer`)

This is a separate back veneer exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of other non-coniferous wood `7a8c3cba-0c6b-422a-ac79-b7032d874bcb`
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separate purchased dry balancing backing veneer of one identified non-tropical hardwood species and supplier; record layer thickness, moisture and rejects. Split another species or supply route into a separate atomic row. No pooled wood input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_layers`
- Sources: `corrim-flooring-2011`

###### uf glue (`uf_glue`)

This is a separate uf glue exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Urea-formaldehyde resin `23e41b7b-0991-4cf7-8625-7a30d23bbb27`
- Flow property / unit: Mass / kg
- Amount rule: Use this generic UF-resin row only for a real independently supplied resin state and mass reference supported by its native identity and actual provider; record supplied resin mass, measured solids/moisture and actual onsite mixing/application. A bought complete prepared aqueous or compounded UF adhesive requires one specific compatible complete-formulation supply row and provider retaining supplier resin manufacture, formulation preparation and delivery before use; the generic resin UUID alone does not establish that complete supply. Its included resin, catalyst, carrier water and additives are analytical composition, not new external purchases. Actual independently purchased additions and onsite dilution/mixing water, utilities and losses remain separate. Preserve supplier wet/active reference correspondence; never equate whole wet preparation kg to dry-resin kg or count included water twice. No default solids fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-flooring-2011`

###### glue hardener (`glue_hardener`)

Conditional one actually separately supplied solid ammonium-chloride catalyst at the flooring procurement boundary, supported by supplier/SDS assay, form and actual delivery/interface/reference evidence. The selected physical exchange has no verified UUID: chemical CAS and Mass/kg alone do not establish a matching delivered supplier state. Require positive actual delivered-state/interface and native-reference compatibility before linking a directly verified identity. A supplied solution or blend requires its own complete-product identity. Unknown composition, dose or route equivalence is not invented.

- Selected flow: Separately supplied solid ammonium-chloride catalyst
- Flow property / unit: Mass / kg
- Amount rule: Only when ammonium chloride is separately dosed: weigh pure salt, record concentration/purity and mixing losses; embedded catalyst in purchased adhesive is not a duplicate input. Absent dosing requires evidence of absence. Retain actual supplier assay and delivered solid reference quantity; a supplied solution or blend needs its own compatible complete-formulation identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-flooring-2011`

###### process water (`process_water`)

This is a separate process water exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Meter separately added treated tap water for glue dilution or cleaning, convert volume using measured water density at temperature, and separate internal recirculation; exclude resin-contained water from this input.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-flooring-2011`

###### electricity (`electricity`)

This is a separate electricity exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sum attributable metered kWh for conditioning, glue spreading, pressing, sawing, sanding, profiling, UV lamps, extraction, electric handling and packing; convert to MJ with 1 kWh = 3.6 MJ. Use only a verified 1-35 kV user-side supply and separate measured transformer losses; no duplicate stage totals.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `corrim-flooring-2011`

###### press heat (`press_heat`)

This is a separate press heat exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: For supplied industrial-boiler steam heat, record supplier reference definition plus delivered steam mass, pressure, temperature, dryness and condensate return; calculate heat from measured enthalpies only on the supplier-defined basis. Gross calorific value/MJ identity does not prove net delivered heat; keep the background link pending when the reference basis is unknown. Do not record both steam heat and its upstream boiler fuel as external inputs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `corrim-flooring-2011`

###### primer (`primer`)

This is a separate primer exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: UV-curable wood-flooring primer
- Flow property / unit: Mass / kg
- Amount rule: Weigh one purchased formulation/SKU issued to this coating stage less measured returns; retain SDS, solids, resin chemistry, reactive diluent, photoinitiator and water/solvent fractions. Record separately from other coating stages. Filler is conditional on actual use; clear uncoloured route has no stain input. Do not invent a default formulation or curing conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-flooring-2011`

###### sealer (`sealer`)

This is a separate sealer exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: UV-curable wood-flooring sealer
- Flow property / unit: Mass / kg
- Amount rule: Weigh one purchased formulation/SKU issued to this coating stage less measured returns; retain SDS, solids, resin chemistry, reactive diluent, photoinitiator and water/solvent fractions. Record separately from other coating stages. Filler is conditional on actual use; clear uncoloured route has no stain input. Do not invent a default formulation or curing conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-flooring-2011`

###### topcoat (`topcoat`)

This is a separate topcoat exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: UV-curable wood-flooring clear topcoat
- Flow property / unit: Mass / kg
- Amount rule: Weigh one purchased formulation/SKU issued to this coating stage less measured returns; retain SDS, solids, resin chemistry, reactive diluent, photoinitiator and water/solvent fractions. Record separately from other coating stages. Filler is conditional on actual use; clear uncoloured route has no stain input. Do not invent a default formulation or curing conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-flooring-2011`

###### filler (`filler`)

This is a separate filler exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: UV-curable wood-flooring pore filler
- Flow property / unit: Mass / kg
- Amount rule: Weigh one purchased formulation/SKU issued to this coating stage less measured returns; retain SDS, solids, resin chemistry, reactive diluent, photoinitiator and water/solvent fractions. Record separately from other coating stages. Filler is conditional on actual use; clear uncoloured route has no stain input. Do not invent a default formulation or curing conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-flooring-2011`

###### alumina (`alumina`)

This is a separate alumina exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Aluminum oxide (alumina) `62905e17-33e8-4e73-a606-fdafc6e48aea`
- Flow property / unit: Mass / kg
- Amount rule: Only separately dosed primary-produced aluminium oxide: weigh addition and document particle grade, purity and supplier route; embedded alumina in purchased topcoat is not counted twice. Background grade compatibility must be demonstrated.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-flooring-2011`

###### cleaner (`cleaner`)

This is a separate cleaner exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Acetone for coating-roller cleaning
- Flow property / unit: Mass / kg
- Amount rule: Only when SDS identifies acetone cleaning: weigh new solvent, purity, recovered quantity and losses. Another actual cleaning chemical requires its own row; no generic solvent total substitutes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe`
- Sources: `corrim-flooring-2011`

###### carton (`carton`)

This is a separate carton exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions. The selected corrugated-box record specifies16.6% primary and83.4% recycled fibre on its source fibre basis, production mix at plant and technology mix. Retain this locator only when actual whole supplied carton composition, construction, state and supplier/reference basis demonstrably match those constraints; these figures are source-identity conditions, never a factory recipe or universal recycled-content default. Other or unverified actual boxes remain whole physical exchanges requiring another compatible verified identity or a precise UUID gap, with supplier box manufacture and delivery retained once.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Weigh new corrugated boxes issued to this product lot; record board grade and fibre sourcing, separate damaged scrap and material leaving with product. Packaging is outside accepted flooring net mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `corrim-flooring-2011`

###### film (`film`)

This is a separate film exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Only if PE film is actually used: weigh film roll issue minus returns, record polymer grade and losses. Verify actual polyethylene-film material state and supplier/provider compatibility before background linkage; the polymer identity does not establish a matched packaging dataset. No assumption that every carton is film wrapped.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `corrim-flooring-2011`

###### freight (`freight`)

This is a separate freight exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Inbound diesel road-freight service
- Flow property / unit: Mass*distance / t*km
- Amount rule: For transport absent from supplied product datasets, use measured shipment mass and actual loaded distance, vehicle class, fuel, load factor and backhaul; keep one mode per row and avoid double counting delivered datasets. Select a supplier dataset with matching tonne-kilometre definition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport`
- Sources: `corrim-flooring-2011`

#### Outputs

##### Product flows

###### reference output (`reference_output`)

1 kg accepted factory-prefinished flooring net mass at declared delivery moisture, including retained UF and coatings, excluding all transport packaging; reconcile effective installed-joint coverage, thickness and species-layer records for the same lot.

- Selected flow: Assembled flooring panels made out of wood `a68f3cc0-8df3-4e20-8793-599f95e254a2`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `corrim-flooring-2011`

##### Waste flows

###### wood trim (`wood_trim`)

This is a separate wood trim exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass / kg
- Amount rule: Weigh separately collected actual non-agglomerated solid UF-bonded panel offcuts and rejected panels; document wood/adhesive state, moisture, coating contamination, destination and waste status. Confirm that physical state and recipient/provider acceptance before treatment linkage; a broad offcut identity does not establish matching treatment. Unglued veneer rejects are a different stream and must be split when present. Retain physical output mass before environmental allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `corrim-flooring-2011`

###### bonded dust (`bonded_dust`)

This is a separate bonded dust exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: UF-bonded wood sanding dust
- Flow property / unit: Mass / kg
- Amount rule: Weigh captured UF-bonded sanding dust separately from escaped airborne particles and solid offcuts; identify coating fraction and waste treatment. Dust from untreated veneer before gluing requires its own row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `corrim-flooring-2011`

###### glue waste (`glue_waste`)

This is a separate glue waste exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Spent UF adhesive residue
- Flow property / unit: Mass / kg
- Amount rule: Weigh waste UF glue separately, including water and solids; distinguish internal reusable returns from external disposal; no mixture with varnish residue.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `corrim-flooring-2011`

###### coating waste (`coating_waste`)

This is a separate coating waste exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass / kg
- Amount rule: Weigh UV coating residue for one formulation and waste state separately from glue and solvent wastes; identify uncured monomers, contamination and external treatment. Split physically different residues.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `corrim-flooring-2011`

###### wastewater (`wastewater`)

This is a separate wastewater exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Untreated UF-glue cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measure untreated aqueous UF-glue cleaning wastewater crossing to treatment; record water mass, suspended solids, dissolved formaldehyde and actual destination. Coating cleaning wastewater is separate when present. Do not call treated effluent this untreated input; internal recirculation is not external discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `corrim-flooring-2011`

###### spent acetone (`spent_acetone`)

This is a separate spent acetone exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Spent acetone cleaning solvent
- Flow property / unit: Mass / kg
- Amount rule: Only for actual acetone cleaning: weigh spent liquid sent outside, measure water/coating contamination and recovered acetone. Reconcile with new solvent input and acetone to air; never assume all input evaporates.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `corrim-flooring-2011`

###### carton scrap (`carton_scrap`)

This is a separate carton scrap exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: Weigh actual corrugated packaging trim and damaged boxes sent out separately; the identity record estimate is not a default scrap fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `corrim-flooring-2011`

##### Elementary flows

###### formaldehyde (`formaldehyde`)

This is a separate formaldehyde exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure formaldehyde (CAS 50-00-0) mass discharged after controls from pressing, curing and handling during manufacture; retain source-specific concentration, gas volume and operating hours. Product-use chamber tests do not quantify manufacturing discharge. Compartment: outdoor air, unspecified; do not assume urban, rural, stack height or long-term release. Record presence/absence from site evidence, not from the identity lookup.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `corrim-flooring-2011`

###### acetone air (`acetone_air`)

This is a separate acetone air exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Only actual acetone cleaning: measure or close a solvent balance for acetone (CAS 67-64-1) released to outdoor air; subtract retained, recovered and disposed acetone; no generic VOC total used as acetone. Compartment: outdoor air, unspecified; do not assume urban, rural, stack height or long-term release. Record presence/absence from site evidence, not from the identity lookup.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `corrim-flooring-2011`

###### pm25 (`pm25`)

This is a separate pm25 exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure discharged particles <=2.5 micrometres after dust controls. This is an exclusive bin; captured dust is a waste output, not an air emission. Compartment: outdoor air, unspecified; do not assume urban, rural, stack height or long-term release. Record presence/absence from site evidence, not from the identity lookup.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `corrim-flooring-2011`

###### pmcoarse (`pmcoarse`)

This is a separate pmcoarse exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure particles >2.5 to <=10 micrometres. Difference PM10 minus PM2.5 is permitted only for matched samplings, controls and reference conditions; never add nested PM10 and PM2.5 totals. Compartment: outdoor air, unspecified; do not assume urban, rural, stack height or long-term release. Record presence/absence from site evidence, not from the identity lookup.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `corrim-flooring-2011`

###### pmover10 (`pmover10`)

This is a separate pmover10 exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure particles >10 micrometres. Derive total minus PM10 only from matched data; unresolved size distribution remains pending, not an arbitrary split. Sum only the three disjoint bins. Compartment: outdoor air, unspecified; do not assume urban, rural, stack height or long-term release. Record presence/absence from site evidence, not from the identity lookup.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `corrim-flooring-2011`

###### water air (`water_air`)

This is a separate water air exchange at the flooring-unit boundary; collect it under the stated route and measurement conditions.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Record water vapour released to outdoor air from wood moisture change and water in UF/coating operations, using matched input/output/storage water balances. Do not use a freshwater water-vapour flow or count internally returned condensate as an air release. Compartment: outdoor air, unspecified; do not assume urban, rural, stack height or long-term release. Record presence/absence from site evidence, not from the identity lookup.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `corrim-flooring-2011`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_physical | Keep the physical wood/water/carbon ledger and the allocated environmental burden ledger separately. Accepted floor panels, WIP changes, offcuts, captured dust and external wastes keep their full measured quantities. Never multiply co-product physical output by an allocation share. | corrim-flooring-2011 |
| allocation_subdivide | First use stage metering/subdivision for avoidable joint burdens. External waste disposal with no saleable product is not a co-product allocation denominator. Internal recovered solvent, heat and rework stay internal and receive no external substitution credit. | corrim-flooring-2011 |
| allocation_joint | For demonstrated saleable wood co-products with similar wood material, disclose a dry-wood-mass allocation of remaining inseparable wood-conversion burdens using measured moisture-corrected masses; report sensitivity where prices or contamination invalidate that physical relation. UF/coating/finishing-specific burdens follow their measured consumption and destinations, not all wood outputs automatically. Document shares summing to one and a separate allocated dataset view. | corrim-flooring-2011 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | flooring | Accepted output geometry and mass | primary measurement and records | lot; accepted/rejected counts; package tare; net finished mass G; moisture; effective joint width/length; joined-layout area A; total/layer thickness; grade/date; WIP stock | Calibrated scale, calipers and joined-layout survey on the same representative lot; do not derive G from nominal density. | kg; m2; mm | Each lot/shift; continuous meters; representative emission campaign | One matched full production period covering route/product variability | One facility and one declared recipe/configuration | per 1 kg reference flow | Calibration; raw records; matched stocks; uncertainty and absence evidence |
| cp_layers | flooring | Separate wood layers | primary measurement and records | species and botanical group; supplier; layer position; grain; dry veneer thickness; issue/return/reject weights; wet/dry sample masses; moisture calibration; start/end stocks | Weigh each species/layer supply independently; matched wood-only oven-dry samples establish dry-basis moisture; final composite method must account for resin/coating volatiles. | kg; mm | Each lot/shift; continuous meters; representative emission campaign | One matched full production period covering route/product variability | One facility and one declared recipe/configuration | per 1 kg reference flow | Calibration; raw records; matched stocks; uncertainty and absence evidence |
| cp_recipe | flooring | Glue and each coating/cleaner chemical | primary measurement and records | SKU; SDS; supplier formulation; wet mass; solids; water; dose; issue; return; retained dry glue/coating; catalyst/additive; cleaning recovery; stage; cure schedule; QC | Calibrated weighing and material issue/return/stock balances for each actual SKU; retain press temperature/time/pressure, UV lamp dose/speed and cure acceptance without numerical defaults. Verify each actual independent UF-resin supply versus a bought whole prepared adhesive: complete formulations require specific compatible complete-product identities/providers and supplier manufacture/preparation/delivery once; included ingredients/carrier water remain analytical. Record true separately purchased additions and actual onsite dilution/mixing water/utilities/losses separately, with matched provider wet/active reference basis; unresolved whole identities remain pending, never recaption a constituent UUID. | kg | Each lot/shift; continuous meters; representative emission campaign | One matched full production period covering route/product variability | One facility and one declared recipe/configuration | per 1 kg reference flow | Calibration; raw records; matched stocks; uncertainty and absence evidence |
| cp_energy | flooring | Stage electricity and steam heat | primary measurement and records | stage; kWh; meter; voltage; grid/period; transformer boundary; steam/return mass; pressure; temperature; dryness; enthalpy reference; supplier energy definition | Submeter or auditable run-time metering allocation for press, machining, UV, extraction and packing; meter supply/return and reconcile enthalpy with supplier reference. Unknown definition blocks thermal background linkage. | MJ | Each lot/shift; continuous meters; representative emission campaign | One matched full production period covering route/product variability | One facility and one declared recipe/configuration | per 1 kg reference flow | Calibration; raw records; matched stocks; uncertainty and absence evidence |
| cp_packaging | flooring | Each packaging component | primary measurement and records | box/film SKU; issue/return weights; package counts; tare; scrap; outgoing material; fibre/polymer grade | Weigh components separately and reconcile purchase, stores, packed product and damaged material; no standard scrap fraction. | kg | Each lot/shift; continuous meters; representative emission campaign | One matched full production period covering route/product variability | One facility and one declared recipe/configuration | per 1 kg reference flow | Calibration; raw records; matched stocks; uncertainty and absence evidence |
| cp_waste | flooring | Each waste stream | primary measurement and records | origin stage; material chemistry; wet/dry mass; moisture; resin/coating fraction; retained/recovered quantity; destination; sale status; treatment manifest; storage change | Separate weighed containers/weighbridge and analytical liquid sampling; distinguish raw-wood dust, bonded dust, glue, coating, solvent, aqueous effluent and cardboard. Preserve full pre-allocation masses. | kg | Each lot/shift; continuous meters; representative emission campaign | One matched full production period covering route/product variability | One facility and one declared recipe/configuration | per 1 kg reference flow | Calibration; raw records; matched stocks; uncertainty and absence evidence |
| cp_air | flooring | Each released species/particle bin | primary measurement and records | source; controls; species/CAS; sample time; concentration; gas flow; pressure/temperature; wet/dry gas basis; operating hours; detection limits; PM cutpoints; background; solvent/wood-water balance | Matched stack/fugitive monitoring after controls, with site-specific validated mass balance where monitoring is unavailable; distinguish absence from below detection and unresolved. Identify every actual chemical, not one VOC total. | kg | Each lot/shift; continuous meters; representative emission campaign | One matched full production period covering route/product variability | One facility and one declared recipe/configuration | per 1 kg reference flow | Calibration; raw records; matched stocks; uncertainty and absence evidence |
| cp_transport | flooring | Actual incoming road freight | primary measurement and records | shipment material; loaded tonnes; distance; vehicle class; fuel; payload; return; supplier delivered boundary | Shipping records and actual route distances; supplier boundary check prevents duplicated transport. | t*km | Each lot/shift; continuous meters; representative emission campaign | One matched full production period covering route/product variability | One facility and one declared recipe/configuration | per 1 kg reference flow | Calibration; raw records; matched stocks; uncertainty and absence evidence |

Collection aggregation uses accepted net G for every row. Raw period quantities remain in their actual numerator units; the inventory value is the attributed period quantity divided by G, expressed per 1 kg reference flow. Physical outputs stay unallocated in the process map. Report allocated burdens separately.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | q = Q / G; Q is attributed matched-period exchange; G is accepted flooring net kg, strictly positive. Keep physical Q and allocation shares separate. | Q; G; cp_output | Exchange per 1 kg reference flow | corrim-flooring-2011 |
| area_reconciliation | reference_output | a = A/G; measured coverable area per kg. t = measured finished thickness in metres. Envelope volume V = A*t; actual profiled solid volume subtracts measured recess/overlap geometry; rho = G/V on the same moisture basis. A package nominal rectangle is not effective cover. | A; G; t; cp_output | m2/kg and geometry/mass check | nwfa-wood-definition |
| layer_balance | face_veneer; core_veneer; back_veneer | For each pure wood layer, u = (m_wet - m_dry)/m_dry; m_dry = m_wet/(1+u). Sum dry wood retained, dry resin, dry coating/additives and measured retained water to reconcile G. Separate incoming - outgoing - stock change for wood, resin solids, water and carbon; never infer carbon content from total coated-board mass. | Layer masses; u; retained resin/coating/water; cp_layers; cp_recipe; cp_waste | Separate material/water/carbon residuals | usda-wood-handbook-2021 |
| metered_electricity | electricity | E_MJ = 3.6 * E_kWh; sum mutually exclusive stage readings, reconcile whole-unit meter and remove documented unrelated loads. | kWh; stage meters; cp_energy | MJ per period then per kg | corrim-flooring-2011 |
| thermal_reconciliation | press_heat | H = sum(m_supply*h_supply) - sum(m_return*h_return), with matched enthalpy reference and units plus documented other outlet/heat losses. Use H only if supplier reference is the same delivered-energy basis; do not equate this net balance automatically to a GCV exchange. | Steam/condensate masses; pressure; temperature; dryness; supplier definition; cp_energy | Measured thermal balance and linkage compatibility | corrim-flooring-2011 |
| emission_quantity | formaldehyde; acetone_air; pm25; pmcoarse; pmover10; water_air | Integrate matched mass concentration * gas volume over measured operation, with unit/temperature/pressure/wet-dry conversions and controls. Particle differences require matched nested samplings; sums include exclusive bins only. Water/solvent balances exclude recovered and retained quantities. No positive factors are supplied. | Monitoring/balance records; cp_air | Species-specific released mass | corrim-flooring-2011 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Verify full original flow route, material, compartment, property and quantity basis. An identity UUID is not a complete supplier dataset; blank identities and pending basis prevent dependent dataset completion. | Direct flow definition; primary supplier specification |
| quality_balances | flooring | Close separate physical wood, nonwood solids, water, solvent and carbon balances with stocks and full outputs; declare instrument uncertainty and investigate residuals, no invented universal tolerance. | cp_output; cp_layers; cp_recipe; cp_waste; cp_air |
| quality_scope | flooring | Use the actual facility period, declared product recipe and supplier region/year. Do not transfer coniferous, paper, optical, wafer or wet-rendering surveys. Unknown, absent and below detection remain distinct. | Production and supplier records; source applicability |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Confirm real wood in every structural ply, individual species/source and thickness, UF bond and clear factory UV finish; reject excluded solid, HDF, strip and alternate-route products. | unsd-cpc-31626; nwfa-wood-definition; corrim-flooring-2011 |
| validate_denominator | Exactly one reference_output of 1 kg accepted net finished flooring. All inventories and collection aggregation use per 1 kg reference flow. Reconcile same-lot effective joined area, measured thickness, net mass and wood moisture; no assumed life or installation waste. | usda-wood-handbook-2021 |
| validate_atomic | Every row is one material/species/formulation/waste/emission. Split physical variants; confirm exact Chinese names and original UUID route/property. Chemical/product tests cannot replace manufacturing emission records. Unknown thermal basis or UUID remains incomplete, not zero. | corrim-flooring-2011 |
| validate_ledgers | Retain complete physical balances before environmental allocation, matched WIP handoffs, non-overlapping PM bins and all combustion LCI including biogenic CO2 in linked heat datasets. Background and foreground emissions must not duplicate. | corrim-flooring-2011 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Measured flooring manufacture with explicit upstream links; candidate method does not itself publish a dataset |
| downstream_use | secondary_dataset; background_dataset after independent validation of actual foreground records and pending identities/bases |
| allowed_use | Declared UF/all-hardwood-veneer/clear UV route, manufacturing comparison at matched gate/recipe/quality and moisture |
| excluded_use | Unsupported solid/HDF/strip variants, installed-service equivalence, generic lifespan, assumed cutting losses or emission-free claims |
| required_metadata | All reference qualifiers; facility/period; G and effective A; upstream/treatment links; stage records; stocks; physical and allocated views |
| required_quality_disclosure | Unresolved UUIDs, thermal/recipe background compatibility, sample coverage, uncertainty, missing pollutants and differences from evidence scope |
| update_trigger | Change of layers/species/core/glue/coating, reference geometry/moisture, utility supplier, treatment, measurement coverage or material source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-31626 | official_guidance | [UNSD CPC 3.0, code 31626 explanatory note](https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/31626) | Solid assembled and multilayer wood panel inclusion; broader classification than chosen route |
| nwfa-wood-definition | extension_guidance | [NWFA, Use Real Wood: Real Wood Definition](https://nwfa.org/use-real-wood/) | Solid/all-wood engineered/composite distinction; identity only, no service life or area loss |
| corrim-flooring-2011 | literature | [Bergman and Bowe, CORRIM Module N, Life-Cycle Inventory of Manufacturing Prefinished Engineered Wood Flooring in the Eastern United States (2011)](https://corrim.org/wp-content/uploads/2018/03/lci-prefinished-engineered-wood-flooring-eastern-us.pdf), printed pp. 7–11, sections 2.5–2.6, 3.6–3.9; survey January–December 2007 | Layered hardwood veneers; UF/PVA alternatives; hot pressing, machining, UV coats/curing and cardboard; joint wood burdens. No survey parameter, proxy, transport distance or emission factor adopted. |
| usda-wood-handbook-2021 | handbook | [USDA Forest Products Laboratory, Wood Handbook—Wood as an Engineering Material, FPL-GTR-282 (2021)](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf), chapters 4 and 13, printed pp. 4–1 and 13–2 | Wood dry-basis moisture and representative oven-dry method; avoid resin/coating volatile interference; no industry density/moisture target |
