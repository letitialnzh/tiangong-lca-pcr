---
pcr_id: pcr.existing-transport-tunnel-concrete-lining-dormant-crack-epoxy-injection-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Epoxy injection repair of dormant cracks in existing transport tunnel concrete lining

## 1. Scope and Applicability

This PCR covers pressure injection of an engineer-qualified dormant crack in the retained concrete lining of an existing road or rail transport tunnel using an actual compatible low-viscosity two-component epoxy. It includes job-specific access/protection, cause and movement assessment, cleaning/preparation, surface seal and ports, dosing/mixing, injection, purge/cleanup, required cure, inspection, defect closure and signed repair acceptance. The retained lining remains in place.

Exclude new tunnels or linings, mining/water tunnels, active moving cracks, injection under hydrostatic pressure or with standing water, elastic polyurethane waterstop grouting, major concrete replacement, structural strengthening, tunnel traffic operation and later repair. The dormant-crack subset is a PCR boundary requiring engineer approval, not a claim that the example PDS proves every moving crack impossible. Neither resin laboratory strength nor acceptance of this bounded job guarantees restored structural capacity, watertightness or remaining tunnel life.

The US Sikadur52 PDS read here is Edition 9.23.2014, currently linked by the US product page. It supplies route evidence, not universal contemporary settings. Actual current regional product/label/SDS, approved method and owner requirements govern the concrete job; retain their revision dates and suitability approval. No universal injection pressure, port spacing, component density, mass ratio, kg/m or cure duration is prescribed. [Sources: `un-cpc3-2025`; `sika-sikadur52-us-2014`.]
## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-transport-tunnel-concrete-lining-dormant-crack-epoxy-injection-services |
| classification_refs | CPC 3.0 54222; narrower semantic subset; proposed mapping requires separate acceptance |
| covered_products | Accepted dormant concrete-lining crack epoxy injection repair service in an existing transport tunnel |
| excluded_products | New asset/lining; mining/water tunnels; active or hydrostatic-pressure cracks; PU leak stopping; major strengthening/replacement |
| representative_product | An owner-accepted unique treated crack path with recorded branch geometry in retained transport tunnel lining |
| production_route | Finite repair campaign: qualification and preparation; ports and cured surface seal; actual A/B dosing and mixing; pressure injection; cleanup and required cure; verification and closed defects |
| market_state | Bounded completed repair service at signed owner acceptance; no future maintenance or tunnel operation included |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted epoxy injection repair service of a dormant crack in existing transport tunnel concrete lining |
| How much | 1 m of accepted unique treated crack path; total accepted path length L measured in m |
| How well | Engineer-approved dormant crack, sound retained lining, no standing water/hydrostatic-pressure application; actual compatible materials and qualified prestate; actual fill, cure and owner-required verification passed; defects closed and acceptance signed |
| How long or cycle | One bounded repair campaign from qualification/access through acceptance; record preparation, injection, cure and acceptance periods, with shared assets spanning their complete lives; no assumed subsequent service life |
| reference_flow_link | `accepted_crack_repair` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted epoxy injection repair of dormant concrete transport tunnel lining crack |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | Tunnel road/rail use and location; crack segment/branch map and unique path method; width/depth with units and uncertainty; lining state and structural role; cause/movement assessment; moisture/pressure state; actual component and seal/port identities; approved method and dated regional instructions; injection pressure/time/volume units and tolerance source; cure records; verification method/threshold units and owner source; accepted length L and acceptance date |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `unique_length` | reference product | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | L is the measured accepted unique treated crack path from cp_acceptance. Segment unions remove overlap and repeat injection; count branches once by approved map. Tunnel centreline length, ports, sides and passes do not multiply L. No positive reference output if L is zero or acceptance incomplete. |
| `component_conversion` | resin_a; hardener_b; seal_paste; cleaner; water; fuel | Mass | kg | Use net material mass after actual container/vehicle tare, before outward returns. Convert actual supplied volume only with material-specific measured or supplier-evidenced density at recorded temperature/state and compatible units. Record A/B volume dosing independently; a volume ratio is not a mass ratio. Geometry alone does not prove void volume or absorbed resin. |
| `utilities_units` | electricity; purchased_air; transport | Actual exchange property | kWh; m3; kg*km | Preserve metered energy units and supply boundary. Purchased-air volume must record pressure, temperature, reference conditions and unit; on-site compressor energy and purchased air are mutually exclusive for the same air. Transport uses net cargo kg times actual km; t*km equals 1000 kg*km only with compatible support and units. |
| `emission_units` | direct_species; fluid_release | Mass | kg | Record identified substance, receiving medium, actual measured/modelled basis and capture/retention/reaction terms. Separate whole uncontained fluid from partial reported species; 100% solids does not establish zero emissions. Unknown residual is not an emission. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing sound retained concrete tunnel lining and engineer-qualified dormant crack with documented cause/movement, dimensions, access and moisture/pressure state; preparation is included, not assumed completed |
| starting_condition_role | Retained host condition; no new lining exchange or replacement credit |
| product_classification_scope | Bounded transport tunnel repair service; water/mining tunnel works excluded |
| recursive_input_rule | If a subcontract supplies the same-category repair, record its actual bounded accepted service and declared boundary; use its upstream dataset without recursively recreating identical operations or duplicating our materials/utilities |
| upstream_dataset_requirement | Actual supplied component/consumable, utility, transport, asset and waste-treatment datasets require matching product/state/geography/period and declared included packaging/service boundary |
| disclosure | Declare retained host, all preparation and test work, campaign/batch/period boundary, actual supplier gates, custody, transport legs, shared assets, rejects and any omitted/unmeasured exchanges with consequences |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `host_and_route` | crack_treatment | Own actual incremental preparation/removal, minor job-caused repair and protection through signed acceptance. Keep retained lining outside new concrete production; no avoided replacement credit. Material treatment, seal, mixing, cure and inspection form one integrated job unless an actual independent physical handoff is evidenced. | un-cpc3-2025; sika-sikadur52-us-2014 |
| `qualification` | crack_treatment | Require sound clean compatible substrate and engineer-approved dormant crack; document contaminants and removal, dry/damp state without standing water, no hydrostatic-pressure injection, approved ports/surface seal and verified seal cure before injection. Actual regional instructions and owner approval govern suitability and application limits. | sika-sikadur52-us-2014 |
| `job_completeness` | crack_treatment | Include access, protection, ventilation, compressor/purchased air, dosing/mixing, injection, purge, cleaning, cure protection and testing. Enumerate campaign and mix batches, setup/changeover, rework and all periods until acceptance; unaccepted work retains burdens. | sika-sikadur52-us-2014 |
| `custody_boundary` | crack_treatment | Record gross net-of-tare receipts/issues before actual outward product returns; retained closing stock is no outward product exchange. Reconcile opening stock burden, purchases, internal issues, use, returns and closing carried-forward burden. Separate product returns, wastes and direct releases; supplier-included packaging/service cannot be charged twice. |  |
| `asset_boundary` | equipment_share | Include complete-life manufacture, maintenance, replacements and end-of-life burdens of actual injection/mixing/access/ventilation/compression/protection assets. Enumerate all nodes/jobs/period consumers; exclude separately inventoried fuel, consumables/spares and tools from duplicated asset coverage. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Actual supplied cleaning or purge chemical (`cleaner`)

Process / prospective direction / type: `crack_treatment` / `inputs` / `product`.

Conditional: record each actual compatible cleaner/purge formulation independently by supplied wet state and intended job use. Distinguish equipment cleaning from concrete preparation; do not thin the injection resin. Range evidence need: Need actual approved cleaner identity/SDS, supplied quantity, retained/captured and waste/release records; no zero-solvent assumption from 100% solids.

- Collection subject: Actual supplied cleaning or purge chemical
- Flow property / unit: Mass / kg
- Amount rule: Actual gross net-of-tare cleaner or purge material supplied over accepted L, with destination/outlets reconciled.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sika-sikadur52-us-2014`

#### Collection requirement: Actual preparation, cleanup and containment consumables (`consumables`)

Process / prospective direction / type: `crack_treatment` / `inputs` / `product`.

Conditional: expand into separately identified abrasive, wipe, filter, masking/protection, spill absorbent, cleanup/containment supply or minor repair materials actually supplied; heterogeneous materials never become one summed exchange. Avoid duplication with equipment maintenance or supplier coverage. Range evidence need: Need actual preparation method, protection/cleanup/spill-containment plan, separate material receipts/issues and destinations; cannot assign a common material factor.

- Collection subject: Actual preparation, cleanup and containment consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual gross net-of-tare amount of each distinct consumable over accepted L.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

#### Collection requirement: Actual purchased electricity (`electricity`)

Process / prospective direction / type: `crack_treatment` / `inputs` / `product`.

Meter injection/mixing, access, ventilation, lighting, cleaning and on-site compression electricity attributable to this campaign. Expand actual supply boundaries/providers separately. Range evidence need: Need actual circuits, meter intervals, equipment load evidence and shared-time records including cure protection and failed work; Energy support must be verified for the actual exchange.

- Collection subject: Actual purchased electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable purchased electricity over accepted L, subtracting separately measured non-job loads once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

#### Collection requirement: Actual supplied fuel whole-fluid input (`fuel`)

Process / prospective direction / type: `crack_treatment` / `inputs` / `product`.

Conditional: record each actual fuel formulation separately. Use gross net-of-tare boundary input when unused returns/wastes/releases occur; derive burned fuel separately using mutually exclusive outlets. Do not treat total incident spill as another deduction. Range evidence need: Need actual fuel identity, gross quantity, density/state/temperature for volume conversion, burn and outlet records; no universal consumption or fuel factor.

- Collection subject: Actual supplied fuel whole-fluid input
- Flow property / unit: Mass / kg
- Amount rule: Actual gross supplied fuel mass over accepted L with opening/closing stock, outward unused fuel and captured/uncontained whole-fluid outlets reconciled; combustion activity is a separate balance result.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

#### Collection requirement: Actual attributable freight transport service (`transport`)

Process / prospective direction / type: `crack_treatment` / `inputs` / `product`.

Conditional: expand each actual cargo/vehicle/mode/route leg with provider and included-boundary evidence, covering deliveries, true returns and waste movements once. Empty travel and worker/access service require actual separate treatment rather than invented cargo. Range evidence need: Need actual cargo net-of-tare masses, distances, loading and provider boundaries; no universal haul distance.

- Collection subject: Actual attributable freight transport service
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual leg net cargo kg times actual leg km attributable to this job, per accepted L; do not duplicate supplier-included delivery or waste treatment transport.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`

#### Collection requirement: Actual complete-life equipment service share (`equipment_share`)

Process / prospective direction / type: `crack_treatment` / `inputs` / `product`.

Expand each actual injection pump/mixer, compressor, access/protection and ventilation asset into its own matched service share. No physical new machine enters solely because a burden fraction is attributed. Range evidence need: Need actual asset identities, complete-life observed or observed-plus-justified-future denominator, manufacture/maintenance/replacements/EOL coverage and uncertainty; missing evidence blocks finalisation.

- Collection subject: Actual complete-life equipment service share
- Flow property / unit: Count / item
- Amount rule: For each asset, complete-life equivalent fraction equals attributable job service divided by all-consumer complete-life service, per accepted L; pair with matching complete-life burden scope.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`

#### Collection requirement: Actual unused mass-based material or fuel returned outside job custody (`product_returns`)

Process / prospective direction / type: `crack_treatment` / `outputs` / `product`.

Conditional: expand true outward unused resin A, B, seal, cleaner, fuel and other mass-based materials into separate identity/state/custody exchanges. This is not retained closing stock, internal movement or waste. Match gross input identity and avoid netting before counting return. Range evidence need: Need signed custody receipts, matching gross input lot/identity/state, mass kg and actual destination; no universal return fraction.

- Collection subject: Actual unused mass-based material or fuel returned outside job custody
- Flow property / unit: Mass / kg
- Amount rule: Actual net-of-tare mass kg of each unused material or fuel leaving job custody over accepted L; match its gross input identity/state and declared burden transfer. No return credit without declared burden treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

#### Collection requirement: Actual unused expendable ports returned outside job custody (`port_returns`)

Process / prospective direction / type: `crack_treatment` / `outputs` / `product`.

Conditional: record each actual unused expendable port identity/configuration returned across the job custody boundary, matching injection_ports gross input. Retained stock, installed/removed waste ports and internal movements are separate. Range evidence need: Need signed outward custody receipts, matching gross input port identity/configuration and actual counts; no universal port return fraction.

- Collection subject: Actual unused expendable ports returned outside job custody
- Flow property / unit: Count / item
- Amount rule: Actual count item of each unused expendable port leaving job custody over accepted L; match gross input identity and declared burden transfer without netting input first.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

#### Collection requirement: Actual captured concrete preparation debris (`concrete_debris`)

Process / prospective direction / type: `crack_treatment` / `outputs` / `waste`.

Conditional: collected debris from actual bounded preparation or minor job-caused remedies; retained host is not entirely demolished. Expand contaminated and clean destination-specific wastes separately. Range evidence need: Need actual preparation method, contamination/moisture, captured mass and receiver records; geometry is not proof of debris mass.

- Collection subject: Actual captured concrete preparation debris
- Flow property / unit: Mass / kg
- Amount rule: Actual captured net debris mass over accepted L, excluding container tare and separately reported water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

#### Collection requirement: Actual discarded epoxy and cleaning residues (`epoxy_waste`)

Process / prospective direction / type: `crack_treatment` / `outputs` / `waste`.

Conditional: expand actual cured/uncured A/B/mixed resin, seal paste, purge residues, wipes and contaminated filters separately by state/composition and receiver. No single generic hazardous waste factor. Range evidence need: Need actual state/composition, net weights, batch/incident linkage and waste transfer acceptance; no universal reject or purge fraction.

- Collection subject: Actual discarded epoxy and cleaning residues
- Flow property / unit: Mass / kg
- Amount rule: Actual outgoing net waste mass of each identity over accepted L; separate retained/captured material from direct environmental releases.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

#### Collection requirement: Actual discarded supplied packaging and removed ports (`packaging_waste`)

Process / prospective direction / type: `crack_treatment` / `outputs` / `waste`.

Conditional: expand actual empty containers, packaging materials and discarded ports by material, residual contamination and receiver. Returned reusable packaging is an actual product return only when outward custody is documented. Range evidence need: Need actual packaging/port material, tare/residual separation, weights and custody/treatment evidence; no assumed packaging factor.

- Collection subject: Actual discarded supplied packaging and removed ports
- Flow property / unit: Mass / kg
- Amount rule: Actual net outgoing mass of each packaging/removed-port waste over accepted L; do not re-charge manufacture already inside supplied-product dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

#### Collection requirement: Actual identified direct releases to environmental media (`direct_species`)

Process / prospective direction / type: `crack_treatment` / `outputs` / `elementary`.

Conditional: expand each identified measured or evidence-modelled substance and receiving medium, including actual fuel combustion, routine resin/cleaner releases and size-specific uncaptured dust. Incident constituents owned by fluid_release are excluded here; each substance/medium/event has one owner. Source 100% solids is not zero emission proof; no generic VOC/NOx umbrella UUID. Range evidence need: Need actual SDS/species, medium, fuel burned activity, compatible factor/measurement, capture and reaction basis; unknown mass residual is not automatic emission.

- Collection subject: Actual identified direct releases to environmental media
- Flow property / unit: Mass / kg
- Amount rule: Actual species release mass over accepted L from measured records or explicitly evidenced species-specific activity/factor and capture/retention/reaction balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`

#### Collection requirement: Actual identified incident constituents released to environmental media (`fluid_release`)

Process / prospective direction / type: `crack_treatment` / `outputs` / `elementary`.

Conditional: expand each actual incident release into identified constituent/substance and receiving-medium elementary exchanges. Whole uncontained fuel, resin, cleaner or contaminated-water mass remains only the physical incident/material/fuel ledger. Derive constituent release from actual measured constituent mass or evidenced whole-fluid mass, actual composition fraction and medium-specific fate; a reported species subset is not total fluid. Each substance/medium/event is owned here once and excluded from direct_species. Range evidence need: Need actual incident mass/volume and density/state/temperature, recovery/capture, actual constituent fractions and fraction basis, medium/fate evidence or constituent measurements; no generic mixed-formulation elementary exchange or default release fraction.

- Collection subject: Actual identified incident constituents released to environmental media
- Flow property / unit: Mass / kg
- Amount rule: For each identified incident constituent and medium, actual measured released constituent kg / L, or actual uncontained whole-fluid kg times evidenced constituent mass fraction times actual medium-specific release/fate fraction / L. Whole-fluid quantity is audit-only, never a generic elementary exchange; no whole-plus-partial-species or direct_species double count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| crack_treatment | Integrated qualification, material treatment, injection, cure and repair acceptance | required | Within qualified dormant-crack transport tunnel repair boundary | foreground material treatment in a finite campaign and actual mixing/injection batches | Accepted unique treated crack path L m |

### Process: Integrated crack treatment and acceptance (`crack_treatment`)

The prestate is retained engineer-qualified dormant cracked lining. The output is the injected, cured and verified bounded repair at signed acceptance. Surface sealing, component mixing, waiting and inspection have no separately evidenced physical handoff here. Setup, purge and failed batches/rework remain owned by this node; rejects become accepted only after closed defects and required verification.

#### Inputs

##### Product flows


###### Actual epoxy resin component A at supply gate (`resin_a`)

Record each actual supplied compatible resin component A formulation separately. Net-of-tare gross boundary receipts or opening-stock withdrawals remain distinct from dosing, outward returns and closing stock. Range evidence need: Need actual formulation, receipt/dose masses, uptake, purge/returns and accepted crack geometry; PDS coverage or 2:1 volume ratio cannot establish kg/m.

- Selected flow: Actual epoxy resin component A at supply gate
- Flow property / unit: Mass / kg
- Amount rule: Actual gross net-of-tare component A crossing into the job, separately reconciled by lot over accepted L.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sika-sikadur52-us-2014`

###### Actual epoxy hardener component B at supply gate (`hardener_b`)

Record actual matched component B as its own supplied formulation and lot, not generic neat amine or mass-ratio inference from volume dosing. Range evidence need: Need actual B identity/density/state, gross receipts and batch doses; no universal mass ratio or hardener intensity.

- Selected flow: Actual epoxy hardener component B at supply gate
- Flow property / unit: Mass / kg
- Amount rule: Actual gross net-of-tare component B crossing into the job, separately reconciled by lot over accepted L.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sika-sikadur52-us-2014`

###### Actual compatible surface-seal paste (`seal_paste`)

Record each actual surface-seal formulation at its supply state, including its separately supplied components when relevant; seal cure before injection is a gate, not a separate product. Range evidence need: Need actual seal system, cured-preseal record, geometry/ports, application and waste records; no universal seal mass per crack metre.

- Selected flow: Actual compatible surface-seal paste
- Flow property / unit: Mass / kg
- Amount rule: Actual gross net-of-tare seal material supplied to this repair, separately reconciled by formulation over accepted L.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sika-sikadur52-us-2014`

###### Actual expendable injection ports (`injection_ports`)

Record each actual expendable port material/configuration; reusable ports belong in asset service. Identify installed, removed, recovered and discarded quantities without double counting. Range evidence need: Need actual system-specific spacing, geometry and installed/recovery counts; port count is not accepted crack length.

- Selected flow: Actual expendable injection ports
- Flow property / unit: Count / item
- Amount rule: Actual gross supplied expendable ports of each identity over accepted L; retain individual unit mass if the concrete exchange needs mass conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sika-sikadur52-us-2014`

###### Actual supplied job water (`water`)

Conditional: record supplied water for actual cleaning, dust suppression or testing only where approved and performed, with destination and dry/damp qualification documented. Range evidence need: Need actual cleaning/test route, meter/receipt records and effluent/retained/weather balances; no presumed water use.

- Selected flow: Actual supplied job water
- Flow property / unit: Mass / kg
- Amount rule: Actual supplied water mass over accepted L; volume conversion requires actual water condition, temperature and density evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`

###### Actual purchased compressed air (`purchased_air`)

Conditional purchased-air alternative only for the air actually purchased; do not also charge local compressor energy for that supply. Record air quality and pressure appropriate to the approved route. Range evidence need: Need actual supply boundary, measured volume/reference conditions and approved use; no universal air intensity or pressure.

- Selected flow: Actual purchased compressed air
- Flow property / unit: Volume / m3
- Amount rule: Actual purchased air at recorded reference pressure/temperature conditions over accepted L.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`

##### Waste flows

No waste is received as a treatment feed in this route.

##### Elementary flows

No default elementary resource extraction is added for product-supplied materials.

#### Outputs

##### Product flows

###### Accepted epoxy injection repair of dormant concrete transport tunnel lining crack (`accepted_crack_repair`)

Signed owner-accepted injected and cured unique crack path, with required verification passed and defects closed. A repeat pass, port, crack face or rejected segment creates no extra output. Range evidence need: 1 m is the exact reference definition, not an empirical yield range; actual unique accepted L, geometry and acceptance uncertainty are required.

- Selected flow: Accepted epoxy injection repair of dormant concrete transport tunnel lining crack
- Flow property / unit: Length / m
- Amount rule: 1 m
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `sika-sikadur52-us-2014`

##### Waste flows

###### Actual collected wastewater sent for treatment (`wastewater`)

Conditional: record actual collected cleaning/testing water and contaminants by receiver and treatment gate; include moisture/water balance without assuming all supplied water becomes wastewater. Range evidence need: Need actual collected volume or mass, density/temperature/state if converted, composition and receiver; no default effluent fraction.

- Selected flow: Actual collected wastewater sent for treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual outgoing wastewater net mass over accepted L with measured concentration/load where used in treatment modelling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `accepted_campaign` | crack_treatment | Directly assign finite campaign and batch inputs, outputs, setup/changeover, purge/cleaning and all failed injection/cure/test/rework to the accepted unique crack path L. Reject unresolved or zero-L jobs as incomplete, not zero-burden service. Branches/repeat passes never multiply output. Shared campaign events have one owner; use measured causal time/activity for different jobs with documented reconciliation, never resin value as default allocation. |  |
| `return_and_stock_burden` | resin_a; hardener_b; seal_paste; injection_ports; cleaner; water; consumables; fuel; product_returns; port_returns | Track separate physical and upstream-burden ledgers by lot/state/period: opening stock retains its carried burden, new gross receipts introduce matching burden, outward returns transfer declared actual burden, and retained closing stock carries burden forward without outward exchange. Job-assigned burden plus outgoing transfer burden plus closing burden must reconcile opening plus new burden. Internal issue is not an additional purchased receipt. No automatic return/recycling/avoided-production credit. |  |
| `shared_asset_life` | equipment_share | For each asset enumerate all jobs, nodes and periods, including this node; use measured compatible service driver to assign one complete-life burden share. Completed lives use observed service and retirement; in-service lives combine observed history and justified prospective remaining service/replacements/termination/EOL, labelled and sourced with uncertainty, sensitivity and updates. Missing scope/denominator blocks finalisation. Do not duplicate direct operating fuel, separately counted spare/consumable/tool coverage or another asset/rental dataset. |  |
| `period_and_reject` | crack_treatment | Link preparation, batches, injection, cure/protection, verification and defect closure to actual periods and the same job. Unused returned products retain identity/custody; failed or discarded materials take actual product-return, rework or waste paths. No rejected material or incomplete repair contributes accepted length. Common equipment and stock crossing periods carry one linked burden balance, not repeated charges. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

All quantities are produced from actual records per accepted L; conditional semantic cards expand into each distinct actual exchange identity before downstream dataset finalisation. Absence requires evidence, not an assumed zero. Raw fields preserve explicit measurement units and actual tolerance sources.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | crack_treatment | accepted crack and qualification | survey; owner acceptance | job_id; period_id; tunnel_use; lining_state; structural_role; cause_movement_assessment; segment_id; branch_id; start_end_coordinates_m; unique_segment_length_m; crack_width_mm; crack_depth_mm; geometry_uncertainty_mm; moisture_state; standing_water_observation; hydrostatic_pressure_state; approved_method_revision; current_regional_PDS_revision; current_label_revision; current_SDS_revision; product_suitability_approval; seal_cure_record; batch_id; injection_pressure_value; injection_pressure_unit; injection_pressure_tolerance; injection_volume_value; injection_volume_unit; injection_duration_value; injection_duration_unit; substrate_temperature_C; ambient_temperature_C; cure_start_end_UTC; cure_duration_h; cure_condition_records; verification_method; verification_result_value; verification_result_unit; acceptance_threshold_value; acceptance_threshold_unit; acceptance_tolerance; owner_criteria_source; defect_id; defect_closure; acceptance_signatory; accepted_date; accepted_length_L_m | Survey crack map and dimensions before work and accepted segments after required verification. Record actual clean/sound/ported/cured-seal prestate, dosing/injection records and product-specific cure conditions; trace owner thresholds/tolerances with units to dated sources. Sum union of accepted unique segments L; exclude unaccepted portions/repeats and retain their burdens. | m; mm; actual pressure/volume/time units; C; h | Each segment, batch and acceptance | Qualification to signed acceptance, including failed/repeated work | Same bounded retained lining and job | per reference flow | Approved map, calibration/uncertainty, dated method/product/owner criteria, signed acceptance and closed defects |
| cp_material | crack_treatment | supplied materials and outward product returns | lot mass/custody ledger | job_id; period_id; batch_id; lot_id; concrete_identity; supplied_state; supplier_boundary; receipt_gross_kg; receipt_container_tare_kg; receipt_net_kg; opening_stock_kg; opening_stock_count_items; new_receipt_kg; new_receipt_count_items; internal_issue_kg; internal_issue_count_items; dose_A_volume_value; dose_A_volume_unit; dose_B_volume_value; dose_B_volume_unit; volume_value; volume_unit; density_value; density_unit; density_temperature_C; density_state; density_source_revision; count_items; unit_mass_kg_per_item; used_kg; actual_dosed_kg; outward_return_kg; outward_return_count_items; return_custody_receipt; closing_stock_kg; closing_stock_count_items; installed_retained_kg; installed_retained_count_items; captured_waste_kg; captured_waste_count_items; port_disposition_event_id; port_disposition_record; uncontained_release_kg; reaction_mass_terms_kg; opening_burden_record; new_burden_record; return_burden_transfer; closing_burden_carry_forward; included_packaging_services | Weigh gross and tare before netting any return, or use traceable supplier net contents with receipt checks. Keep separate identity/state lot ledgers and actual component volume doses; collect density/temperature/state/units for every volume conversion and unit mass for count conversion. Reconcile opening stock and new receipts without counting an opening-stock internal issue as a second input. Actual dose/used quantity is intermediate activity, not an additive final destination; installed/retained quantities exclude all separately recorded return, waste and release outlets. Reconcile mass-based material returns in kg and expendable-port returns in item with actual matching gross inputs and outward custody; keep closing stock/burden separate. Record discarded expendable-port item from actual event/disposition evidence, never infer discarded count from contaminated mixed-waste kg; keep the waste mass separately measured or supported by matching actual per-port mass. Material destination terms require records, not assumed losses. | kg; item; actual volume and density units; C | Each receipt, issue, batch, return and closing stock | All job periods with opening/closing balances | Each actual material/lot and supplier gate | per reference flow | Calibrated scales, supplier actual labels/SDS/density evidence, custody receipts and physical/upstream-burden reconciliation |
| cp_utilities | crack_treatment | electricity fuel and purchased air | meter; fuel and air ledger | job_id; period_id; batch_id; equipment_id; utility_identity; supplier_boundary; meter_start_kWh; meter_end_kWh; nonjob_kWh; service_time_h; power_kW; fuel_opening_kg; fuel_gross_receipt_kg; fuel_container_tare_kg; fuel_net_receipt_kg; fuel_closing_kg; fuel_unused_return_kg; fuel_captured_waste_kg; fuel_uncontained_wholefluid_kg; fuel_other_outlet_kg; fuel_volume_value; fuel_volume_unit; fuel_density_value; fuel_density_unit; fuel_temperature_C; fuel_state; fuel_density_source; incident_total_spill_kg; purchased_air_volume_m3; air_pressure_value; air_pressure_unit; air_temperature_C; air_reference_conditions; air_quality; air_supply_boundary; factor_source_revision | Read actual circuits/meters for injection, mixing, access, ventilation and cure protection. For shared loads use measured service time/load and documented causal attribution; reconcile entire run. Fuel gross inputs/outward outlets determine burned activity; incident total only audits mutually exclusive partition. Purchased-air reference conditions and local-compressor boundary avoid double supply. | kWh; h; kW; kg; actual volume/density/pressure units; C; m3 | Each meter interval, fuel transfer, batch and incident | Setup through closure including idle/cure and failed work | Actual equipment circuits and fuel/air suppliers | per reference flow | Meter calibration, measured driver, stock/custody/outlet reconciliation and actual supply conditions |
| cp_transport | crack_treatment | freight service | cargo and route leg records | job_id; period_id; leg_id; cargo_identity; vehicle_mode; provider; gross_cargo_container_kg; container_tare_kg; net_cargo_kg; actual_distance_km; loading_share; empty_leg_treatment; outward_return_link; waste_transfer_link; included_delivery_boundary | Pair actual net cargo with actual route distance for each leg; disclose loading/shared-leg and empty-travel method. Verify whether supplied product or receiver treatment already includes this transport and retain one owner. | kg; km; kg*km | Each actual leg | All deliveries, returns and wastes for the job | Actual origin/destination and provider | per reference flow | Weighbills, custody records, route evidence and supplier boundary check |
| cp_assets | crack_treatment | complete-life equipment shares | asset service and burden history/scenario | job_id; asset_id; asset_configuration; consuming_job_id; consuming_node_id; consuming_period_id; service_driver_unit; job_service; all_consumer_observed_service; future_remaining_service; complete_life_service; manufacture_burden_scope; maintenance_history; replacement_history; observed_retirement_EOL; future_replacement_scenario; future_termination_EOL_scenario; forecast_source; forecast_uncertainty; sensitivity_cases; excluded_direct_fuel; excluded_spares_consumables_tools; rental_included_scope; update_trigger | Record injection/mixing, compressor, access/protection and ventilation assets separately and enumerate every consumer/period. Use compatible measured causal service units; obtain complete-life manufacture/maintenance/replacement/EOL coverage with observed and justified future portions explicitly distinguished. Document rental scope and remove overlaps; test denominator uncertainty and update when evidence changes. | item equivalent; actual service-driver unit | Each asset service interval and scenario update | Complete observed life or observed history plus justified prospective remaining life | All consuming jobs/nodes/periods of each asset | per reference flow | Asset registers, service logs, burden dataset scope, observed retirement or justified sourced future scenarios; incomplete coverage/denominator blocks finalisation |
| cp_waste | crack_treatment | actual waste exits | net weights; receiver records | job_id; period_id; batch_id; incident_id; waste_identity; material_state; wet_dry_basis; composition; contamination; container_gross_kg; container_tare_kg; net_waste_kg; water_content_kg; wastewater_volume_value; wastewater_volume_unit; wastewater_density_value; wastewater_density_unit; wastewater_temperature_C; wastewater_state; concentration_value; concentration_unit; receiver; treatment_gate; custody_transfer; included_transport | Segregate concrete debris, cured/uncured epoxy/seal/cleaner residues, wipes/filters, wastewater and packaging/removed ports by actual identity/state and receiver. Weigh gross/tare; water and contaminants are explicit; convert volume only with evidenced density/state/temperature. Verify receiver and included transport, keeping actual outward product returns and environmental releases separate. | kg; actual volume/density/concentration units; C | Each removal, container and custody transfer | Entire job including failures and cleanup | Actual producing node and destination | per reference flow | Scale evidence, composition/moisture records, signed receiver transfers and treatment boundary |
| cp_emissions | crack_treatment | direct and incident identified constituent releases | measurement; activity-factor; incident balance | job_id; period_id; batch_id; incident_id; concrete_substance; CAS_or_identity; receiving_medium; particle_size_basis; measurement_value; measurement_unit; sampling_duration_h; instrument_calibration; emission_activity; activity_unit; emission_factor_value; emission_factor_unit; factor_source_revision; fuel_burned_kg; actual_SDS_revision; component_mass_fraction; composition_fraction_basis; composition_fraction_source_revision; medium_fate_fraction; fate_fraction_basis; fate_fraction_source_revision; incident_constituent_measured_kg; retained_kg; captured_kg; reaction_terms_kg; incident_total_kg; recovered_product_kg; captured_waste_kg; uncontained_wholefluid_kg; liquid_volume_value; liquid_volume_unit; liquid_density_value; liquid_density_unit; liquid_temperature_C; liquid_state; host_moisture_kg; weather_water_kg; balance_uncertainty_kg; factor_release_basis; factor_control_scope; factor_control_evidence; uncaptured_fraction; uncaptured_fraction_basis | Identify substance and medium before elementary exchange; use actual measurements or compatible documented species-specific activity/factor and control conditions. Partition each fluid incident into recovered product, captured waste and uncontained whole fluid only in the physical ledgers; do not deduct total again. For elementary exchanges use actual measured released constituent kg or whole-fluid kg times evidenced constituent mass fraction and medium-specific fate fraction, retaining fraction basis/source and uncertainty. Whole formulation is not an elementary exchange. Give each substance/medium/event one owner, exclude fluid_release incident constituents from direct_species, and prevent whole-fluid/partial-species double counting. Separate supplied water, dry solids, retained-host moisture and evidenced weather terms; investigate unknown residual rather than assign emission. Record factor_release_basis and actual factor_control_scope/evidence before use. An already-released species factor or directly measured environmental release receives no additional uncaptured_fraction multiplier. Only an explicitly uncontrolled generation factor may use one evidenced compatible dimensionless uncaptured_fraction; record its basis and percent-to-fraction conversion if needed. Unknown factor/control basis blocks the calculation; no default fraction is supplied. | kg; actual activity/factor/measurement/volume/density units; C; h | Each relevant batch/incident and emission measurement period | Full job and actual emission duration | Actual node and receiving medium | per reference flow | SDS/composition, factor applicability or measurement QA, capture/recovery records and uncertainty-qualified balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_union` | accepted_crack_repair | L = length of union of accepted unique crack segments in m; normalized reference output amount = 1 m; exclude rejected/incomplete segments and repeat passes. | cp_acceptance; accepted segment map | L m and 1 m reference service |  |
| `job_intensity` | resin_a; hardener_b; seal_paste; injection_ports; cleaner; water; consumables; electricity; fuel; purchased_air; product_returns; port_returns; concrete_debris; epoxy_waste; wastewater; packaging_waste | For each separately identified exchange, intensity = attributable actual campaign amount / L; L is accepted unique crack path in m. Keep campaign failed/repeated work in numerator; no output if L is zero. | cp_acceptance; cp_material; cp_utilities; cp_waste; actual exchange amounts | Each actual exchange unit per 1 m accepted crack path |  |
| `net_and_volume` | resin_a; hardener_b; seal_paste; cleaner; water; fuel; wastewater; fluid_release | Net mass = gross mass - actual container/vehicle tare before outward return deduction. When required, mass kg = actual volume times identity/state/temperature-specific density with evidenced unit conversion; count mass = actual count times measured matching unit mass. Volume dosing ratio is checked in its original units, never assumed to be a mass ratio. | cp_material; cp_utilities; cp_waste; cp_emissions; actual density and units | Traceable net mass and actual original dosing record |  |
| `material_custody` | resin_a; hardener_b; seal_paste; injection_ports; cleaner; water; consumables; product_returns; port_returns | For each lot/state in consistent physical units, opening stock + new gross net-of-tare receipts = installed/retained material + outward unused returns + captured waste + actual uncontained whole-fluid release + retained closing stock + evidenced reaction/other terms, with uncertainty stated. Installed/retained material excludes every separately recorded loss/outlet; actual dosed/used quantity is intermediate activity, never an additive final destination. Opening-stock internal issues are movements, not additional receipts. For expendable ports reconcile the same mutually exclusive destinations in item. Opening burden + new burden = job-assigned burden + outward transferred burden + closing carried-forward burden. | cp_material; cp_waste; cp_emissions; custody and burden ledgers | Physical and upstream-burden closure by lot/period |  |
| `fuel_activity` | fuel; direct_species; fluid_release | Burned fuel kg = opening fuel + gross net-of-tare new fuel - closing fuel - unused outward return - captured fuel waste - uncontained whole-fluid fuel - evidenced other nonburned outlet. Incident total spill = recovered product + captured waste + uncontained whole fluid and is not deducted again; record each mutually exclusive outlet once. | cp_utilities; cp_waste; cp_emissions | Burned kg and reconciled fluid outlets; intensity divided by L |  |
| `freight_activity` | transport | For each leg, transport intensity = actual net cargo kg times actual km times evidenced job share / L. Preserve compatible provider boundary and kg*km reference; conversion from t*km multiplies by 1000 only with confirmed support. | cp_transport; cp_acceptance | kg*km per 1 m accepted crack path |  |
| `asset_fraction` | equipment_share | For each asset, intensity item equivalent = (attributable job service / complete-life all-consumer service) / L; multiply the fraction by matching complete-life manufacture/maintenance/replacement/EOL burden. Service numerator and denominator use the same actual driver unit. Observed and justified future portions and overlaps remain explicit. | cp_assets; cp_acceptance; complete-life burden scope | Asset-specific equivalent fraction and burden per 1 m accepted crack path |  |
| `species_release` | direct_species | For each routine substance/medium/event select actual measured environmental release kg / L, or actual compatible activity times the documented substance-specific emission_factor_value / L when factor_release_basis already reports released species under the evidenced factor_control_scope. Only when the factor explicitly reports uncontrolled generation may that activity-factor result be multiplied once by the evidenced applicable dimensionless uncaptured_fraction on the same basis. Retain factor_control_evidence and uncaptured_fraction_basis, with percent-to-fraction conversion when necessary; unknown basis is a gap, not an assumed correction or fraction 1. Never multiply an already controlled release factor or actual released-mass measurement by capture/retention/fate again. Use burned fuel activity when required, preserve reaction/retention evidence and do not infer zero from 100% solids. Exclude incident constituents owned by fluid_release; retain one owner per substance/medium/event, with no generic mixed-formulation elementary exchange. | cp_emissions; cp_utilities; cp_acceptance; actual factor/measurement and controls; emission_factor_value; factor_release_basis; factor_control_scope; factor_control_evidence; uncaptured_fraction; uncaptured_fraction_basis | Species/medium-specific kg per 1 m accepted crack path | epa-eiip-factor-control-basis-2001 |
| `fluid_partition` | fluid_release | Physical ledger only: uncontained whole-fluid kg = incident total kg - recovered product kg - captured waste kg, with mutually exclusive measured outlets and uncertainty. For each identified constituent/medium elementary exchange, intensity kg = measured released constituent kg / L, or uncontained whole-fluid kg times evidenced constituent mass fraction times actual medium-specific release/fate fraction / L. Retain actual fraction basis/source and uncertainty; whole formulation stays audit-only, reported species subset is not whole-fluid total, and no duplicate direct_species or whole-fluid/partial-species impact exchange is allowed. | cp_emissions; cp_waste; cp_material; cp_utilities; cp_acceptance | Whole-fluid physical ledger only; identified constituent/medium kg per 1 m accepted crack path |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `gate_quality` | accepted_crack_repair | Trace actual dormant cause/movement assessment, sound compatible substrate and moisture/pressure prestate, actual seal cure and product suitability; record injection/cure/verification units, actual thresholds/tolerances and dated owner source. All defects closed before signed length acceptance. | cp_acceptance; sika-sikadur52-us-2014 |
| `separate_identity` | all inventory rows | Every actual material, utility, waste and emission needs concrete identity/state/supplier or receiver, actual property/unit and verified final UUID. Conditional cards require disaggregation before dataset finalisation; unresolved is not verified absence. | Actual labels/SDS/custody and detail/support verification |
| `range_quality` | all inventory rows | Collect actual geometry, uptake, batch/setup/purge/waste/utility and shared-equipment evidence before proposing quantitative intensity ranges. Exact 1 m definition is not an empirical yield prior; example laboratory data are not universal field performance or consumption. | Linked protocols and range evidence need on every card |
| `closure_quality` | all inventory rows | Reconcile physical, custody and upstream-burden balances; report measurement precision, missingness and uncertainty. No generic residual emission, closing-stock output, net-then-return double count or hidden duplicate supplier/asset/service boundary. | cp_material; cp_utilities; cp_waste; cp_emissions; cp_assets |
| `life_quality` | equipment_share | All consumer periods and complete-life coverage/denominator require evidence. In-service future scenarios must be justified, labelled and sensitivity-tested, with update triggers; missing coverage blocks finalisation. | cp_assets |
| `period_quality` | crack_treatment | Preserve repair campaign, mix/injection batch, failed/rework links and preparation/injection/cure/acceptance dates; reconcile stock/asset carry across periods and keep one owner for shared event burdens. | All node protocols |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | crack_treatment | Reject scope crossing to new/major replacement, moving/hydrostatic-pressure cracks, PU waterstop or water/mining tunnels; retained host receives no new lining burden or avoided replacement credit. | un-cpc3-2025; sika-sikadur52-us-2014 |
| `validate_gate` | accepted_crack_repair | Require recorded qualified prestate, actual compatible regional materials/method, surface seal cure before injection, complete actual injection/cure records and owner-sourced verification criteria/results/tolerances with units, defect closure and signed acceptance. Lab strength or elapsed time alone is not acceptance. | sika-sikadur52-us-2014 |
| `validate_length` | accepted_crack_repair | Recompute union of accepted unique paths and L; count each branch once, never tunnel length, ports/faces/passes or unresolved rejects. Confirm every exchange uses same positive accepted-L denominator with all failed/setup/purge work retained once. |  |
| `validate_custody` | all inventory rows | Audit gross net-of-tare receipts before returns, internal movements, outward custody, retained closing stock and burden carry-forward. Verify actual whole-fluid fuel outlets and burn calculation without incident double subtraction; capture/waste/elementary releases remain distinct. |  |
| `validate_assets` | equipment_share | Verify every shared asset consumer/period, complete-life scope and compatible measured service driver; observed history plus justified future scenario for in-service assets includes replacement/termination/EOL and uncertainty/sensitivity/updates. Missing coverage or denominator blocks finalisation; remove overlapping direct fuel/spare/tool/rental coverage. |  |
| `validate_identity_and_emissions` | all inventory rows | Verify concrete identities/properties/units before final dataset exchange binding; do not substitute near-match resin manufacture/new tunnel/PU for repair service. Check actual species/medium and capture/retention/reaction, fluid partition and weather/host moisture; 100% solids never proves zero release. Record missing ranges, UUIDs and material evidence explicitly. |  |
| `validate_campaign` | crack_treatment | Trace all batches and preparation/injection/cure/verification periods, setup/changeover and rejects to this node and actual rework/waste/product-return destinations. Reject unresolved failures as accepted output; shared-job causal attribution reconciles once across periods. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground bounded repair-service data package with downstream process/lifecyclemodel projections |
| downstream_use | secondary_dataset; background_dataset for actual compatible tunnel maintenance service |
| allowed_use | Matching accepted dormant-crack epoxy injection repair of retained transport tunnel concrete lining with declared geometry/state/material/gate |
| excluded_use | New tunnel/lining, active/hydrostatic cracks, PU leakage stopping, major replacement/strengthening, generic resin manufacture, tunnel operation or unsupported lifetime/structural/watertightness claims |
| required_metadata | Location/road-rail tunnel/lining; cause and dormant qualification; segment/branch/width/depth; actual material and supply state; dated regional instructions and owner method/criteria; campaign/batch/periods; accepted L and signatory; utilities/transport/receiver/asset boundaries |
| required_quality_disclosure | Unresolved concrete UUIDs and evidence, actual intensity/Range uncertainty, missingness, stock/custody and burden balances, failed/rework work, actual emissions/medium and shared-asset observed/future scenarios with sensitivity |
| update_trigger | Change in approved materials/method/gate, crack movement or moisture/pressure state, accepted length/geometry, supplier/utility/receiver boundary, emission evidence, asset service/life scenario or corrected records |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, printed p. 285; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Transport tunnel construction/repair classification scope and adjacent water-tunnel exclusion |
| sika-sikadur52-us-2014 | handbook | Sika US, Sikadur52 Product Data Sheet Edition 9.23.2014, both pages, currently linked at US product page; https://usa.sika.com/dam/dms/us01/0/Sikadur%2052.pdf | Two-component low-viscosity epoxy route; clean/sound dry/damp without standing water; actual volume dosing; ports and cured surface seal before pressure injection; no thinning/hydrostatic-pressure injection; site-specific current instructions requirement; laboratory data limitations |
| epa-eiip-factor-control-basis-2001 | official_guidance | US EPA, EIIP Volume II Chapter 1, Introduction to Stationary Point Source Emission Inventory Development, 31 May 2001, section 4.4, printed pp. 1.4-7 to 1.4-9; https://19january2021snapshot.epa.gov/sites/static/files/2015-08/documents/ii01_may2001.pdf | Controlled versus uncontrolled emission-factor basis and conditional control correction only. No source-category factor, capture efficiency, rule-effectiveness value or regulatory requirement is transferred to tunnel repair; actual applicable factor and controls require evidence. |
