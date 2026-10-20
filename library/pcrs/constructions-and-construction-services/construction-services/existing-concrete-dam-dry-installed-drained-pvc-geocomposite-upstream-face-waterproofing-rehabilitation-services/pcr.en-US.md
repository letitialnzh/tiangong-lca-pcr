---
pcr_id: pcr.construction-services.existing-concrete-dam-dry-installed-drained-pvc-geocomposite-upstream-face-waterproofing-rehabilitation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing concrete dam dry-installed drained PVC geocomposite upstream-face waterproofing rehabilitation services


## 1. Scope and Applicability

This PCR covers one completed rehabilitation service on a structurally qualified existing concrete dam: an exposed factory-bonded PVC/nonwoven geotextile barrier installed in dry accessible conditions, mechanically anchored and tensioned, with watertight perimeter and a continuous drained interface. The retained dam is the established parent state. The service independently restores its upstream surface waterproofing by integrating sheet, anchor, perimeter and drain components; these are one integrated responsibility and are not duplicate finishing and assembly inventories. Dry access requires actual owner-approved drawdown, shutdown and dewatering where necessary. It excludes a new dam, whole structural reconstruction, embankment blanket, crack-only repair and underwater or flowing-water mattress/zipper installation. No avoided dam manufacture, lost generation credit or guaranteed zero leakage is inferred. [carpi-dam-rehab; carpi-dry-execution; cazzuffi-geosynthetic-barriers]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-concrete-dam-dry-installed-drained-pvc-geocomposite-upstream-face-waterproofing-rehabilitation-services |
| classification_refs | CPC 3.0 54233; narrower |
| covered_products | Dry-installed exposed drained PVC geocomposite upstream-face rehabilitation on existing concrete dams |
| excluded_products | New dams; submerged/flowing-water methods; embankment blankets; crack-only treatments; operating-reservoir service |
| representative_product | Accepted pressure-qualified membrane/anchor/perimeter/drain system on an identified retained concrete face |
| production_route | Approved dry access; substrate qualification and actual local preparation; drainage/anchors; sheet installation and field seams; tensioning/perimeter completion; testing, defect closure and signed handover |
| market_state | Completed accepted rehabilitation service, not membrane supply alone or a new dam asset |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted upstream-face waterproofing rehabilitation on the declared retained concrete dam |
| How much | 1 m2 |
| How well | Actual approved retained-dam/substrate/head-compatible design; seam, anchor/tension, perimeter and drainage QA meeting project criteria; closed defects/retests and signed owner acceptance. |
| How long or cycle | One identified rehabilitation job, from approved preparation through signed acceptance across all actual phases/reporting periods; no promised service life |
| reference_flow_link | `accepted_waterproofing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted dry-installed drained PVC geocomposite concrete-dam upstream-face waterproofing rehabilitation |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | dam/site and work-package IDs; retained structural condition; actual head and water-level envelope; dry-access and shutdown arrangement; net developed coverage and exclusions; surface geometry and penetrations and seams/laps; factory sheet specification; anchor design and tension; perimeter pressure design; drainage layout/destination; approved QA criteria and tests and defects/retests and signed acceptance date |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_area | accepted_waterproofing | Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2 | m2 | A > 0 is unique net developed accepted waterproofed surface in the as-built survey. Exclude laps, layers, coupons, roll purchases, unaccepted faces and repeated attempts. One accepted patch contributes once. |
| native_supply | liner_supply; anchor_profiles; anchor_fasteners; perimeter_seals; drain_components; additional_geonet; repair_auxiliaries; clean_test_supplies; fuel_supply | Actual supplied physical property | Actual native unit | Preserve actual SKU quantities and units, separating installed final material, wet use/mix, dry constituents, cured state, returns, wastes and releases. No area/length/count-to-mass inference; any independently needed conversion retains actual quantity/unit, density or unit mass, state, temperature and source. Installed retained final material excludes waste, releases and usable returns; wet use/mix activity is nonadditive. Factory composite or kit and constituent purchases are exclusive. |
| energy_preservation | electricity; fuel_supply; bounded_services; shared_assets | Actual compatible physical property | Actual compatible unit | Preserve kWh, actual supplied fuel units, native provider units and measured asset drivers separately; no heat-value or Count surrogate for missing energy/time/service support. Match actual dataset boundaries and independently verify all exchange support. |
| `count_unit_alias` | Count-based exchanges where present | Count | item | The PCR display alias item denotes the verified Number of items unit-group reference unit Item(s), factor 1. Preserve the actual reference-unit identity in a concrete dataset; this spelling change creates no mass, area or service equivalence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing retained concrete dam and water-level state, structurally qualified for approved rehabilitation; not a new material input |
| starting_condition_role | existing_asset_state |
| product_classification_scope | Narrow repair subset of dam construction services; excludes new whole asset and underwater routes |
| recursive_input_rule | A separately supplied same-category service requires its actual accepted scope and upstream dataset; do not recursively buy this same integrated job or invent an existing-dam production exchange |
| upstream_dataset_requirement | Attach compatible upstream datasets for actual products, utilities, fuels, freight, providers and asset shares, with boundaries and exclusions reconciled |
| disclosure | dam/site and work-package IDs; retained structural condition; actual head and water-level envelope; dry-access and shutdown arrangement; net developed coverage and exclusions; surface geometry and penetrations and seams/laps; factory sheet specification; anchor design and tension; perimeter pressure design; drainage layout/destination; approved QA criteria and tests and defects/retests and signed acceptance date |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | rehabilitate | Retain actual qualified concrete substrate and pressure/anchor design. Include actual preparation, local repair, separate cushion/drainage if engineered, field seams, tension, perimeter and drain continuity. Additional geonet is conditional; factory-bonded geotextile is already in the composite. | carpi-dam-rehab; cazzuffi-geosynthetic-barriers |
| b_gate | accepted_waterproofing | Actual competent design verifies substrate, anchor pull-out/attachment and pressure-appropriate perimeter. Required actual seam, connection, anchor, perimeter and drain tests must meet approved criteria; repair and retest defects before signed owner handover. Include impoundment/leakage observation only as required by approved actual handover; no brochure guarantee or universal test list. | carpi-dam-rehab; cazzuffi-geosynthetic-barriers |
| b_resources | rehabilitate | Own all incremental shutdown/drawdown/dewatering, access, containment, preparation, cleaning, welding, cure, tests, rework, cleanup and actual water fate through acceptance. Providers must disclose paid-for actual resources and coverage; unknown is not zero. Operations after handover are outside this service; no future energy or water saving credits. | carpi-dry-execution |
| b_period | rehabilitate | Index preparation, installation, curing if actual, tests, rework, cleanup and acceptance across every reporting period. Reconcile opening and closing stocks and outstanding defects. Shared assets cover manufacture, maintenance, replacement and end-of-life across all consumers and periods, not this job alone. |  |
| `boundary_atomic_completion` | all processes | Section 5 collection requirements are mandatory collection and applicability instructions, not aggregate inventory exchanges. Instantiate a distinct atomic flow card/exchange for every actual product, waste stream, substance and environmental compartment before completing a foreground dataset. Preserve every actual event, upstream burden, return and native unit; apply the linked formula to each compatible identity separately. Record environmental withdrawals as inputs and releases as outputs. Never sum unlike native units, substitute one UUID for a pool, infer zero from missing records, or duplicate an existing concrete card. Documentary retained-host interfaces carry state only and create no new purchased asset. Quantified completion is blocked until applicable members are resolved or evidenced absent; nonbinding screening aids do not supply missing amounts or chemistry. |  |

### Conditional inventory completion requirements

The following identifiers denote collection pools or documentary state ledgers. A pool may have zero, one or several actual members. Determine applicability from real records; retain the original quantity method and collection protocol for each member. Only compatible quantities may be reconciled together. Any old optional screening interval below remains a provisional aid for review and must not be imposed on a different material or on a mixed pool.

#### Collection requirement: Mechanical anchoring and tensioning profiles (`anchor_profiles`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Mechanical anchoring and tensioning profiles. Record actual material state and attributed physical quantity.

- Collection subject: Mechanical anchoring and tensioning profiles
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Attributable gross supplied profile length / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cazzuffi-geosynthetic-barriers`

Range evidence need: Need actual profile sections, steel specification, designed spacing, installed line lengths and cut losses under actual head and loading.

#### Collection requirement: Count-measured anchors, drain fittings and actual auxiliary supplies (`anchor_fasteners`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Record actual counted supplies, including anchor assemblies, drain fittings, packaged repair kits or cleaning/test items only when supplied in native Count. Match return_count and never repurchase kit constituents. Length-, area-, volume- and mass-measured supplies have separate owners.

- Collection subject: Count-measured anchors, drain fittings and actual auxiliary supplies
- Flow property / unit: Count `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable gross supplied actual count / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cazzuffi-geosynthetic-barriers`

Range evidence need: Need actual SKU/native Count, anchor/substrate approval where relevant, fitted versus failed/replaced counts, provider coverage and matched outward returns.

#### Collection requirement: Pressure-qualified perimeter strips and gaskets (`perimeter_seals`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Pressure-qualified perimeter strips and gaskets. Record actual material state and attributed physical quantity.

- Collection subject: Pressure-qualified perimeter strips and gaskets
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Attributable gross supplied perimeter component length / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cazzuffi-geosynthetic-barriers`

Range evidence need: Need separately identified strip/gasket SKUs, splice details, crest and submerged perimeter lengths and local pressure; do not assume one universal head rating.

#### Collection requirement: Drain collectors, conduits and discharge components (`drain_components`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Record only actual length-measured collectors, conduits and discharge components. Independently supplied counted fittings belong to anchor_fasteners; no fictitious length conversion is allowed.

- Collection subject: Drain collectors, conduits and discharge components
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Attributable gross supplied drain component length / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cazzuffi-geosynthetic-barriers`

Range evidence need: Need approved drain segmentation, diameters, destinations, access points and measured lengths; count fittings in their actual native ledger if independently supplied.

#### Collection requirement: Additional drainage or anti-puncture sheet where required (`additional_geonet`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Additional drainage or anti-puncture sheet where required. Record actual material state and attributed physical quantity.

- Collection subject: Additional drainage or anti-puncture sheet where required
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Attributable gross supplied additional sheet area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cazzuffi-geosynthetic-barriers`

Range evidence need: Need actual engineered requirement and independent extra-sheet coverage; integrated factory geotextile is already inside liner supply and is not bought again.

#### Collection requirement: Actual local substrate repair, anchor grout and seam auxiliaries (`repair_auxiliaries`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Only native mass-measured actual repair/grout/seam products belong here; actual Count kits or Volume liquid supply belongs to the matching native-unit card. Factory kits and individual constituents are exclusive purchases.

- Collection subject: Actual local substrate repair, anchor grout and seam auxiliaries
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable gross supplied product mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

Range evidence need: Need actual SKU, formulation/state, repair volume, surface condition, approved dosing, mixed and cured yields and waste; no generic powder-to-water ratio.

#### Collection requirement: Preparation, cleaning, containment, test and packaging consumables (`clean_test_supplies`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Record only native mass-measured preparation, cleaning, containment, test and packaging consumables. Actual Count, Area, Length or Volume supplies use their matching separate native-unit supply cards, including their returns; these are mutually exclusive purchases.

- Collection subject: Preparation, cleaning, containment, test and packaging consumables
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable gross supplied consumable mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

Range evidence need: Need actual mass-measured SKU consumption and supply/outlet states, including failed seams and retests; no compulsory Count/Area/Length/Volume-to-mass conversion.

#### Collection requirement: Actual fuel supplied to job equipment (`fuel_supply`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Record actual mass-measured fuel gross supply with disjoint stock/outlet states. Native Volume fuel belongs to fuel_volume_supply. Do not force a mass conversion without an independently needed role and actual density/state/temperature/source.

- Collection subject: Actual fuel supplied to job equipment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable gross supplied fuel mass / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`

Range evidence need: Need actual fuel grade, opening/receipts/closing, returns, burn, nonburned waste and losses; measured density/state/temperature supports any volume conversion.

#### Collection requirement: Actually bounded engineering, access, installation or test providers (`bounded_services`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Actually bounded engineering, access, installation or test providers. Record actual material state and attributed physical quantity.

- Collection subject: Actually bounded engineering, access, installation or test providers
- Flow property / unit: Actual verified service property / actual native service unit
- Amount rule: Attributable completed native service quantity / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_provider`

Range evidence need: Need concrete service unit and verified compatible support plus completed scope, actual resources, upstream coverage and exclusions; price or labour hours do not prove a counted service.

#### Collection requirement: Attributed access, pump, welding and test assets (`shared_assets`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Use this hour-based service card only for an actual compatible measured operating-hour driver and a provider/upstream service that covers complete-life manufacture, maintenance, replacements and end-of-life per h. Rental duration or price is not a measured operating driver. If the actual driver/unit differs, retain its actual native inventory and independently verify compatible support before finalization.

- Collection subject: Attributed access, pump, welding and test assets
- Flow property / unit: Time / h
- Amount rule: Actual attributable compatible measured service hours / A, only under the stated complete-life per-h coverage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`

Range evidence need: Need full manufacture, maintenance, replacements and end-of-life across every consuming job/node/period with complete life denominator and supported remaining life; no universal service life.

#### Collection requirement: Other actual area-measured auxiliary supplies (`native_area_supplies`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Only actual native Area supplies not already owned by liner_supply or additional_geonet; one owner per SKU and scope.

- Collection subject: Other actual area-measured auxiliary supplies
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Attributable gross supplied auxiliary area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

Range evidence need: Need actual independent containment/protection/test sheet SKU and native Area, distinct from factory liner and additional drain sheet; reconcile return_area and waste.

#### Collection requirement: Other actual length-measured auxiliary supplies (`native_length_supplies`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Actual independently supplied linear auxiliaries only; never recode counted fittings as length.

- Collection subject: Other actual length-measured auxiliary supplies
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Attributable gross supplied auxiliary length / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

Range evidence need: Need actual linear seam/test/preparation supply SKU and native Length, separate from anchor profiles, perimeter and drains, with return_length match.

#### Collection requirement: Actual volume-measured repair or cleaning products (`native_volume_supplies`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Only actual native Volume liquid products; job_water and fuel_volume_supply are owned separately. Match return_volume; supplied product and contained wastewater are distinct states.

- Collection subject: Actual volume-measured repair or cleaning products
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Attributable gross supplied product volume / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

Range evidence need: Need actual nonfuel/nonwater liquid SKU, native Volume, stock and use/capture/waste/release states; convert to mass only for an independently needed role with measured density/state/temperature/source.

#### Collection requirement: Actual native volume-measured fuel supply (`fuel_volume_supply`)

Process / prospective direction / type: `rehabilitate` / `inputs` / `product`.

Actual Volume fuel supplies retain native upstream inventory; mutually exclusive with the mass supply for the same SKU/scope. Match return_volume and cp_fuel final fates.

- Collection subject: Actual native volume-measured fuel supply
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Attributable gross supplied native fuel volume / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel`

Range evidence need: Need actual fuel SKU, native Volume opening/receipts/closing, usable outward return, measured or audited burn, nonburned waste and uncontained loss with uncertainty; mass conversion only if independently needed and supported.

#### Collection requirement: Usable sheet returned out of the job (`return_area`)

Process / prospective direction / type: `rehabilitate` / `outputs` / `product`.

Usable sheet returned out of the job. Record actual material state and attributed physical quantity.

- Collection subject: Usable sheet returned out of the job
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Actual outward usable return quantity / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

Range evidence need: Need matched actual supply SKU/native unit, outward receipt, condition and selected gross-with-outlets or consumed-only inventory convention; closing stock is not an outward return.

#### Collection requirement: Usable profiles, seals or drains returned out of the job (`return_length`)

Process / prospective direction / type: `rehabilitate` / `outputs` / `product`.

Usable profiles, seals or drains returned out of the job. Record actual material state and attributed physical quantity.

- Collection subject: Usable profiles, seals or drains returned out of the job
- Flow property / unit: Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- Amount rule: Actual outward usable return quantity / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

Range evidence need: Need matched actual supply SKU/native unit, outward receipt, condition and selected gross-with-outlets or consumed-only inventory convention; closing stock is not an outward return.

#### Collection requirement: Usable counted supplies returned out of the job (`return_count`)

Process / prospective direction / type: `rehabilitate` / `outputs` / `product`.

Usable counted supplies returned out of the job. Record actual material state and attributed physical quantity.

- Collection subject: Usable counted supplies returned out of the job
- Flow property / unit: Count `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Actual outward usable return quantity / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

Range evidence need: Need matched actual supply SKU/native unit, outward receipt, condition and selected gross-with-outlets or consumed-only inventory convention; closing stock is not an outward return.

#### Collection requirement: Usable mass-measured supplies or fuel returned out of the job (`return_mass`)

Process / prospective direction / type: `rehabilitate` / `outputs` / `product`.

Usable mass-measured supplies or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Collection subject: Usable mass-measured supplies or fuel returned out of the job
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual outward usable return quantity / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outlets`

Range evidence need: Need matched actual supply SKU/native unit, outward receipt, condition and selected gross-with-outlets or consumed-only inventory convention; closing stock is not an outward return.

#### Collection requirement: Usable volume-measured products or fuel returned out of the job (`return_volume`)

Process / prospective direction / type: `rehabilitate` / `outputs` / `product`.

Usable volume-measured products or fuel returned out of the job. Record actual material state and attributed physical quantity.

- Collection subject: Usable volume-measured products or fuel returned out of the job
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual outward usable native volume / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outlets`

Range evidence need: Need actual matched supplied SKU, unit/state/temperature, outward receipt and selected upstream convention; retained recovered liquid in closing stock is not an outward return.

#### Collection requirement: Actual separated discarded liner, repair residues and job wastes (`solid_waste`)

Process / prospective direction / type: `rehabilitate` / `outputs` / `waste`.

Actual separated discarded liner, repair residues and job wastes. Record actual material state and attributed physical quantity.

- Collection subject: Actual separated discarded liner, repair residues and job wastes
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual outward waste mass by class and fate / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outlets`

Range evidence need: Need weighed waste classes including removed old substrate, cutoffs, failed seam removals, cured residues, packaging and nonburned fuel waste with destination; no generic recovery credit.

#### Collection requirement: Actual contained dewatering, cleaning and test wastewater (`contained_water`)

Process / prospective direction / type: `rehabilitate` / `outputs` / `waste`.

Actual contained dewatering, cleaning and test wastewater. Record actual material state and attributed physical quantity.

- Collection subject: Actual contained dewatering, cleaning and test wastewater
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual outward contained water volume by quality and fate / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`

Range evidence need: Need metered event/phase volumes, contamination, recirculation, retained stocks and treatment/discharge evidence; collection is not an elementary release.

#### Collection requirement: Actual substance-specific releases to identified receiving medium (`direct_releases`)

Process / prospective direction / type: `rehabilitate` / `outputs` / `elementary`.

Actual substance-specific releases to identified receiving medium. Record actual material state and attributed physical quantity.

- Collection subject: Actual substance-specific releases to identified receiving medium
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual emitted substance mass by event and medium / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`

Range evidence need: Need measured substance/particle identity and medium or valid activity-factor/composition-fate data for actual combustion, dust, fumes, cleaners and incidents; safety readings or SDS are not emission amounts.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rehabilitate | Dry surface finishing waterproofing rehabilitation | required | Actual dry access on qualified retained concrete face | Restore established upstream surface; preparation, joining, drainage, tests and defect closure owned here | accepted_waterproofing |

### Process: Dry waterproofing rehabilitation (`rehabilitate`)

The established parent is the existing qualified concrete face. This node joins the separate component roles into the completed exposed drained waterproofing system, with actual joining/welding services and finished-surface acceptance. It owns local preparation/repair, dry access, shared equipment, test/coupon losses, defective assemblies and all rework. No new-dam parent-product purchase or extra internal finished-surface output is created. Failed seams, anchors, perimeter or drains remain rejected; repair/retest loops carry the same defect and job IDs, and actual discards/usable returns exit through the cards below.

#### Inputs

##### Product flows

###### Factory PVC/nonwoven geotextile composite sheet supplied (`liner_supply`)

Factory PVC/nonwoven geotextile composite sheet supplied. Record actual material state and attributed physical quantity.

- Selected flow: Factory PVC/nonwoven geotextile composite sheet supplied
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Attributable gross supplied sheet area / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cazzuffi-geosynthetic-barriers`

Range evidence need: Actual roll width/length, bonded construction, thickness, cutting layout, laps and losses are needed for the same dam-face geometry; historical typical thickness is not a purchase factor.

###### Water supplied for preparation, cleaning, repair and testing (`job_water`)

Water supplied for preparation, cleaning, repair and testing. Record actual material state and attributed physical quantity.

- Selected flow: Water supplied for preparation, cleaning, repair and testing
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Attributable supplied water volume / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`

Range evidence need: Need phase-separated metering and provider water, recirculation and final fate; reservoir water state is not a purchased input.

###### Actual job electricity including providers (`electricity`)

Actual job electricity including providers. Record actual material state and attributed physical quantity.

- Selected flow: Actual job electricity including providers
- Flow property / unit: Energy / kWh
- Amount rule: Attributable metered electricity / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

Range evidence need: Need actual welding, pumping, access, lighting and test meters or substantiated equipment load records, supply mix and failed-attempt demand.

###### Actual job freight service (`freight`)

Actual job freight service. Record actual material state and attributed physical quantity.

- Selected flow: Actual job freight service
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Attributable actual mass-distance transport work / A
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freight`

Range evidence need: Need actual net cargo mass, legs, distances, load sharing, empty running and returns, with matching transport dataset coverage.

#### Outputs

##### Product flows

###### Accepted dry-installed drained PVC geocomposite concrete-dam upstream-face waterproofing rehabilitation (`accepted_waterproofing`)

Accepted dry-installed drained PVC geocomposite concrete-dam upstream-face waterproofing rehabilitation. Record actual material state and attributed physical quantity.

- Selected flow: Accepted dry-installed drained PVC geocomposite concrete-dam upstream-face waterproofing rehabilitation
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: 1 m2
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance`
- Sources: `carpi-dam-rehab`; `carpi-dry-execution`; `cazzuffi-geosynthetic-barriers`

Range evidence need: The exact one is reference normalization only; actual positive A and project seam, anchor, perimeter, drain and required impoundment observations must prove acceptance.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule |
| --- | --- | --- |
| a_single | rehabilitate | One accepted rehabilitation output owns failed attempts, cutoffs, rework, replacement and repeat tests. Rejected sheets, failed welds, loose anchors, leaking perimeter or blocked drains stay off accepted A until closure. Rework remains in rehabilitate with defect/event links; discarded material exits its producing event through waste and usable returns through matched native-unit output. No generic co-product, recycled-material or avoided-dam credit. |
| a_stock | rehabilitate | For each actual SKU/unit and period S = opening_stock + gross_receipts - tare - closing_stock, using actual external receipts and carried attributable stocks. Use gross-with-outlets: S retains upstream burdens of actual outward usable returns, nonreturned waste and loss and each outlet is recorded once. If a compatible consumed-only upstream convention is selected, subtract matched outward usable returns once and suppress its duplicate product-output burden/credit; disclose reconciliation. Internal issues are not purchases; closing recovered stock is not an outward outlet. |
| a_shared | shared_assets; bounded_services | Each shared access/pump/welder/test asset has a complete all-job/node/period consumer register. Attribute its full manufacture + maintenance + replacement + end-of-life burden using actual compatible job driver / full-life compatible driver, including every consumer. Supply complete observed life or observed history plus evidenced remainder, replacements, termination and end-of-life with uncertainty, sensitivity and update. Missing life coverage or denominator blocks a final dataset. Provider-included assets/utilities/freight/spares and direct resources have one owner, never both. |
| a_period | rehabilitate | Attribute each receipt, stock, input, asset use, output and routine/incident event to the actual job, phase and period; transfer balances by stable IDs. Early-period work carries to its eventual unique accepted surface without creating interim accepted area. Exclude unrelated reservoir operation using documented physical driver and period boundary. |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | rehabilitate | accepted_waterproofing | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; surface_id; survey_geometry; gross_area; excluded_area; A; area_unit; head_envelope; substrate_approval; seam_ids; anchor_ids; perimeter_ids; drain_ids; approved_criteria; results; defect_ids; retest_links; signed_handover; acceptance_date | Survey the developed face, reconcile unique surface IDs and signed project acceptance; retain all required tests and observations. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | m2 | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | As-built survey, approved design, calibrated tests and owner signature |
| cp_material | rehabilitate | liner_supply; anchor_profiles; anchor_fasteners; perimeter_seals; drain_components; additional_geonet; repair_auxiliaries; clean_test_supplies; return_area; return_length; return_count; native_area_supplies; native_length_supplies; native_volume_supplies | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; sku_id; product_state; native_quantity; native_unit; opening_stock; gross_receipts; tare; closing_stock; outward_usable_return; installed_retained; intermediate_use; discarded; released; density; density_unit; temperature; conversion_source; supplier; package_component_scope; recipe_approval; defect_link; temperature_unit | Reconcile supplier receipts, traceable native-unit stock and measured installed/outlet ledgers by SKU; include every provider-paid material. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | Actual native units | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Delivery/return receipts, roll and BOM dimensions, calibration and approved recipe/state evidence |
| cp_water | rehabilitate | job_water; contained_water | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; water_source; supplied_volume; unit; retained_stock; recirculated_volume; dewatering_volume; outward_contained_volume; direct_discharge_volume; receiving_medium; quality; treatment_destination; provider_scope; meter_id | Meter source and phase water; reconcile job-induced reservoir drawdown/dewatering separately from purchased water, recirculation, contained waste and direct discharge. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | m3 | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Meters, permissions, provider records, analyses and destination receipts |
| cp_fuel | rehabilitate | fuel_supply; fuel_volume_supply | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; fuel_sku; opening_stock; gross_receipts; tare; closing_stock; outward_usable_return; measured_burned_quantity; burned_native_unit; burn_method; burn_uncertainty; audited_fate_balance; unknown_loss_investigation; nonburned_waste; uncontained_loss; total_spill_audit; recovered_to_closing; native_quantity; native_unit; volume; volume_unit; density; density_unit; state; temperature; conversion_source; engine_id; temperature_unit | Record measured burned quantity or derive it only from complete audited disjoint native-unit stock/fates; retain uncertainty and investigate unknown loss. Preserve actual volume/unit and density/unit/state/temperature/source when conversion is independently needed. Total spill is audit only; recovered retained spill belongs to closing. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | Actual native fuel unit; kg or m3 only when actually measured | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Stock/dispensing/return logs, calibrated meters and loss incident reports |
| cp_energy | rehabilitate | electricity | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; supply_id; meter_id; start_reading; end_reading; electricity_kwh; equipment_id; load; duty; operating_duration; duration_unit; allocation_driver; provider_scope | Meter each owned supply including providers; substantiate equipment-based estimates with actual load/duty and duration, avoiding meter/generator double counting. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | kWh | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Calibrated meters and time-stamped equipment records |
| cp_freight | rehabilitate | freight | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; shipment_id; leg_id; cargo_id; mass; mass_unit; distance; distance_unit; mode; load_share; empty_return; route; provider_scope | Collect real delivery, return and waste legs; reconcile cargo net mass and provider dataset coverage. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | kg*km | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Consignment notes, routes, loads and dataset boundary |
| cp_provider | rehabilitate | bounded_services | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; provider_id; contract_scope; completed_result; native_quantity; native_unit; support_verification; upstream_coverage; excluded_resources; electricity; fuel; water; transport; assets; spares; owner_register | Require bounded completed physical service and matched native-unit upstream inventory; obtain actual primary resources and explicit coverage/exclusions before suppressing direct rows. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | Actual verified native service unit | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Completion certificate and auditable provider resource/coverage records |
| cp_assets | rehabilitate | shared_assets | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; consumer_register; service_start; service_end; observed_history; evidenced_remainder; remainder_source; replacements; termination; end_of_life; manufacture_burden; maintenance_burden; replacement_burden; end_of_life_burden; job_driver; whole_life_driver; driver_unit; upstream_coverage; uncertainty; sensitivity; update_trigger | Record complete all-consumer life and compatible driver shares for each actual asset; reconcile provider/rental/spare coverage. Hour service requires actual compatible measured operating hours and complete-life burden per h; rent/lease duration is not automatically that driver. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | h or actual compatible measured driver | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Asset history, maintenance/replacement/end-of-life evidence and evidenced future coverage |
| cp_outlets | rehabilitate | return_mass; solid_waste; return_volume | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; material_id; supply_sku; native_quantity; native_unit; outlet_class; waste_mass; mass_unit; quality; destination; outward_receipt; return_match; upstream_convention; defect_link | Weigh/classify actual discarded and removed material; retain native usable return receipts and distinguish closing stock from outward outlets. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | kg; actual native return unit | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Weighbridge notes, return receipts, classification and receiving facility evidence |
| cp_emissions | rehabilitate | direct_releases | primary_record | job_id; site_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; substance_id; particle_size; medium; routine_incident; activity; activity_unit; measured_amount; amount_unit; factor; factor_unit; factor_source; composition; fate; captured; stock; returned; waste; released; detection_limit; uncertainty; composition_basis; fate_basis; composition_source; fate_source | Measure actual species/medium releases or use valid scoped activity factors/composition-fate; exclude capture, stocks, returns and waste once. Keep whole-fluid balance nonadditive with substance view. Aggregate its actual attributed native quantities by division by accepted net developed A, with separate states and fates. | kg substance | Each actual event and reconciled phase/period | Entire job through acceptance and all-consumer asset life where applicable | Identified dam job, actual provider and linked assets | per reference flow | Sampling/calibration, actual factor applicability and event reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_area | accepted_waterproofing | A = sum of unique accepted net developed surface areas; output = 1 m2. Duplicate geometry, seam laps and repeated work never add A. | survey_geometry; excluded_area; signed_handover; cp_acceptance | A; 1 m2 |  |
| c_supply | liner_supply; anchor_profiles; anchor_fasteners; perimeter_seals; drain_components; additional_geonet; repair_auxiliaries; clean_test_supplies; fuel_supply; native_area_supplies; native_length_supplies; native_volume_supplies; fuel_volume_supply | S = opening_stock + gross_receipts - tare - closing_stock; retain S in its actual compatible unit; inventory amount = attributable S / A. Match each physical final outlet once; usable return treatment follows a_stock. | opening_stock; gross_receipts; tare; closing_stock; outward_usable_return; cp_material; cp_fuel; A | attributable supplied quantity per reference flow |  |
| c_burn | fuel_supply; fuel_volume_supply; direct_releases | Use actual measured burned_quantity, or derive burned_quantity = opening_stock + gross_receipts - tare - closing_stock - outward_usable_return - nonburned_waste - uncontained_loss only from a complete audited native-unit fate balance. Retain uncertainty and investigate unknown loss; an unexplained residual is not combustion. Close every balance separately for each actual fuel SKU/state in one identical native unit; m3 is not kg. Only an independently required mass-based emission-factor/activity view uses measured density/unit/state/temperature/source, and it is nonadditive to native supply/return. Upstream fuel inventory uses S, not burned_quantity. Recovered retained spill is in closing_stock; total_spill_audit is nonadditive. | cp_fuel; fuel_sku; disjoint final fates | measured or audited native-unit combustion activity |  |
| c_direct | job_water; electricity; bounded_services; return_area; return_length; return_count; return_mass; solid_waste; contained_water; return_volume | inventory amount = attributable actual physical quantity / A; preserve each measured native property/unit and separate source, state, event and fate. No netting water streams, returned stock or provider resources across incompatible units or scopes. | cp_water; cp_energy; cp_provider; cp_material; cp_outlets; A | native inventory quantity per reference flow |  |
| c_transport | freight | transport work = sum of attributed cargo mass in kg times actual leg distance in km; inventory amount = transport work / A. Match empty-return and carrier scope once. | cp_freight; mass; distance; A | kg*km per reference flow |  |
| c_assets | shared_assets | life burden = manufacture_burden + maintenance_burden + replacement_burden + end_of_life_burden; job share = job_driver / whole_life_driver. For the actual compatible hour driver only, complete-life burden per h = life burden / whole_life_driver; inventory service hours = job_driver / A; inventory service hours times complete-life burden per h = life burden times job_driver / whole_life_driver / A. Use that complete-life service once; never add an asset-share purchase to the same hour service. For another actual native driver use its verified compatible unit and equivalent full-life relation. | cp_assets; job_driver; whole_life_driver; A | compatible service driver and burden per reference flow |  |
| c_release | direct_releases | emitted mass = measured release or valid actual activity times applicable species/medium factor or evidenced composition-fate mass; inventory amount = emitted mass / A. Retain capture/stock/returns/waste outside release and never add whole-fluid and species views. A complete activity-to-species emission factor already includes its declared composition/fate; do not multiply those again unless the factor definition explicitly requires it. | cp_emissions; cp_fuel; actual applicable factor; A | kg substance per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify actual concrete exchanges and support units before a final dataset. Umbrella cards require actual SKU/provider/waste/species realization, not arbitrary near matches. | Supplier specifications and concrete identity/detail confirmations |
| dq_coverage | rehabilitate | Collect complete job phases including failed attempts and provider resources, actual absence evidence when applicable, and all-consumer asset life. Missing coverage is an explicit gap and blocks finalization. | Event, owner, period and life registers |
| dq_metrology | all inventory rows | Keep native quantity/unit, stock/outlet reconciliations, calibration, density/state/temperature/source for needed conversions and explicit uncertainty; validate water and fuel separately. | Primary receipts, meters, scales and conversion evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule |
| --- | --- | --- |
| v_gate | accepted_waterproofing | A must be positive, unique and accepted under b_gate; missing structural/anchor/perimeter/drain/seam acceptance, required observation or unresolved defect means no accepted output. |
| v_ledgers | rehabilitate | Reconcile all supply/outlet/native-unit states, fuel supplied versus burned, actual water fate, whole-fluid/species nonadditivity and one-owner provider resources. Missing actual data is not zero. |
| v_assets | shared_assets | Reject incomplete consumer lists, missing full-life denominator, unsupported remainder/replacements/termination/end-of-life or duplicated owner scope. Assess period-specific uncertainty and sensitivity before final dataset. |
| v_route | rehabilitate | Confirm actual dry accessible installation and retained concrete dam subset; reject submerged/flowing-water, new-dam or unsupported universal case parameters. Reworked defects remain linked to the same job and accepted surface once. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for an accepted rehabilitation service |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Same qualified dry-installed drained concrete-dam PVC geocomposite repair route with disclosed actual geometry, head and acceptance |
| excluded_use | Whole-dam construction, submerged repairs, reservoir operation, future generation or avoided water/asset credits; membrane supply alone |
| required_metadata | dam/site and work-package IDs; retained structural condition; actual head and water-level envelope; dry-access and shutdown arrangement; net developed coverage and exclusions; surface geometry and penetrations and seams/laps; factory sheet specification; anchor design and tension; perimeter pressure design; drainage layout/destination; approved QA criteria and tests and defects/retests and signed acceptance date |
| required_quality_disclosure | Actual reference and exchange identities/support; gaps and actual absence; source periods; test closure; stock/fate/provider ownership; all-consumer life coverage; uncertainty and sensitivity; no generalized brochure guarantees |
| update_trigger | New substrate/head/design, sheet/anchor/perimeter/drain system, dry-access method, acceptance criteria, provider coverage, measurement or asset life evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| carpi-dam-rehab | handbook | Carpi Tech, Dam repair & rehabilitation with waterproofing geomembranes solutions, https://www.carpitech.com/solution/repair/dams/ | Concrete-dam repair scope and actual engineering responsibility; no quantitative LCA defaults |
| carpi-dry-execution | handbook | Carpi Tech, Execution conditions, https://www.carpitech.com/solution/repair/execution-conditions/ | Dry access versus underwater/flowing-water routes and owner-approved operational interface |
| cazzuffi-geosynthetic-barriers | literature | Cazzuffi, Giroud, Scuero and Vaschetti, Geosynthetic barriers systems for dams, section 4.4, PDF pp.30–32, printed pp.142–144; https://library.geosyntheticssociety.org/wp-content/uploads/resources/proceedings/Geosynthetic%20barriers%20systems%20for%20dams.pdf | Factory-bonded PVC/geotextile, mechanical anchor/tension profiles, pressure-appropriate perimeter and drained interface; historical dimensions not universal inventory factors |
