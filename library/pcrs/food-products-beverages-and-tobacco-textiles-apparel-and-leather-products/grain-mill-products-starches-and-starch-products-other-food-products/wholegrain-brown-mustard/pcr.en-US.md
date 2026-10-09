---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.wholegrain-brown-mustard
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wholegrain brown mustard

## 1. Scope and Applicability

This PCR addresses a specific wet condiment: wholegrain brown mustard made from cleaned Brassica juncea seed, fermented alcohol vinegar, potable water and food-grade salt, retaining the seed coats. The representative route is receipt, recipe dosing and steeping, wet milling, holding, conditional deaeration, jar filling, closure and gate storage. Seed cultivation and supplier cleaning, vinegar fermentation and purchased utility production remain upstream. This gate-to-gate foreground does not by itself establish complete cradle-to-gate coverage.

CPC 3.0 23995 also includes other sauces, mixed condiments, mustard flour and meal and other prepared mustards. These remain outside this PCR. Smooth sieved Dijon mustard, mustard powder, mustard oil, mustard vegetables, oil-rich dressings, added sugar/spice/wine recipes, and deliberate fermentation of the mustard at the site require another reviewed method or scope extension. Thermal preservation, refrigeration and on-site combustion are not prescribed or assumed absent in every factory: the selected nonthermal, electricity-driven route must be confirmed. A factory that performs those additional operations must extend its process inventory with measured atomic exchanges before claiming completeness.

This document provides LCA data-production rules, not food-safety approval or a processing recipe. It sets no temperature, time, ingredient ratio or shelf life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.wholegrain-brown-mustard |
| classification_refs | CPC 3.0 23995 (narrower) |
| covered_products | Four-ingredient wholegrain brown mustard with retained seed coats |
| excluded_products | Other sauces and mixed condiments; dry mustard flour/meal; smooth sieved mustard; extra-ingredient recipes; mustard vegetables and oil |
| representative_product | Wholegrain brown mustard in a declared glass-jar pack |
| production_route | Purchased cleaned seed -> steeping in vinegar/water/salt -> wet milling without husk removal -> holding -> conditional deaeration -> jar packing |
| market_state | Released wet condiment at factory gate; declared storage and package; no assumed shelf life |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A wholegrain mustard condiment; no equivalence of flavour intensity across recipes is claimed |
| How much | 1 kg net released wet product |
| How well | Declared seed species, retained coats, vinegar acidity, recipe, moisture/solids, grain texture and release specification |
| How long or cycle | One declared production period ending at the factory gate; actual holding/storage duration and shelf-life evidence disclosed without a PCR default |
| reference_flow_link | mustard_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wholegrain brown mustard |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Brassica juncea; retained seed coats; four-ingredient recipe by mass; supplier vinegar fermentation route and acidity; final moisture/solids; milling/holding/deaeration; nonthermal route confirmation; net fill and packaging composition; CN grid-average user-side electricity below 1 kV; actual storage conditions; facility, period and upstream links |

Require these qualifiers in the data package. Net product includes its liquid phase and excludes the jar, closure, label and box.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net released wet mustard; weigh output with cp_output and exclude tare, rejects and internally circulated rework. |
| `water_mass` | recipe_water; clean_water; wash_effluent | Mass | kg | Record kg directly or convert metered volume using measured density and temperature for the particular water or effluent; do not equate supply with effluent. |
| `electricity_unit` | receipt_electricity; mix_electricity; pack_electricity; clean_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Preserve the public reference property name. Its verified Units of energy group has MJ as reference unit and kWh factor 3.6: 1 kWh = 3.6 MJ. Record actual electrical supply as CN grid-average user-side AC below 1 kV; do not infer fuel calorific value or thermal heat from the property label. Other voltage, country or generation-side supplies require a separately verified identity and provider. |
| `solution_mass` | vinegar; alkali | Mass | kg | Report supplied solution mass and separately measured concentration; active acid or alkali mass cannot replace solution mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased cleaned brown mustard seed and separately supplied vinegar, salt and potable water at the plant; actual incoming moisture, supplier, lot and accepted mass declared |
| starting_condition_role | Upstream product input to foreground manufacturing |
| product_classification_scope | Narrow representative prepared-mustard subset of CPC 23995 |
| recursive_input_rule | Internal rework is tracked once without a new external input; purchased same-category mustard is a distinct upstream input with a supplier dataset and requires recipe/scope disclosure |
| upstream_dataset_requirement | Link seed cultivation and supplier cleaning, vinegar fermentation, salt, water supply, electricity, each packaging component, cleaning chemical and external waste treatment; otherwise disclose incomplete upstream coverage |
| disclosure | Declare facility, route, production period, inventory cut-offs, input suppliers, on-site storage, waste destinations and each absent or additional process |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | foreground manufacturing | Include receipt, dosing, steeping, wet milling, holding, actual deaeration, packing, gate storage and sanitation; do not add smooth-mustard husk sieving to the wholegrain route. | `fallot-mustard-manufacturing`; `charbonneaux-wholegrain-mustard` |
| `boundary_links` | upstream and downstream | This foreground starts with delivered ingredients. Upstream agriculture and supply burdens require distinct linked datasets; distribution, retail, consumption and package end-of-life are outside. Do not call a package with missing upstream links complete cradle-to-gate. |  |
| `boundary_releases` | water and air interfaces | External-treatment wash effluent is a waste flow. The representative purchased-water, electric route has no assumed abstraction, stack emission or direct aquatic discharge. Investigate direct releases; add each measured chemical, origin and compartment as a separate elementary row if present, and disclose unresolved releases without inventing mandatory factors. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt | Receipt and lot inspection | required | Accept cleaned brown seed; upstream seed cleaning is excluded. | foreground manufacturing | 1 kg reference flow |
| mix | Steeping, wet milling and holding | required | Dose four ingredients; retain seed coats; record milling passes, holding and conditional deaeration. | foreground manufacturing | 1 kg reference flow |
| pack | Filling, closure, labelling and gate storage | required | Pack in glass jars with declared closures, paper labels and corrugated boxes. | foreground manufacturing | 1 kg reference flow |
| clean | Sanitation and effluent handoff | required | Measure actual water, electricity and chemicals; export effluent to external treatment. | foreground manufacturing | 1 kg reference flow |

Intermediates from receipt through filling are internal transfers within one site model, recorded in lot balances, not additional external products. Conditional operations are deaeration and use of the exact 30% alkali solution. Purchased cleaned seed removes the need to presume a seed-cleaning line at this site. No bran coproduct is inherent because coats are retained.

### Process: Receipt and lot inspection (`receipt`)

#### Inputs

##### Product flows

###### Cleaned brown mustard seed (Brassica juncea) (`brown_seed`)

Purchased cleaned seed enters the site; supplier cleaning and cultivation are upstream.

- Selected flow: Cleaned brown mustard seed (Brassica juncea)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured received seed mass attributable to released product; include rejected portions once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `fallot-mustard-manufacturing`; `charbonneaux-wholegrain-mustard`

###### Alternating current (`receipt_electricity`)

Meter this process separately; shared motors or electric heaters use documented operating-time and load records. The selected supplied flow is CN grid-average consumption mix to the user, below 1 kV; another country, voltage or self-generation route requires another verified supply identity and provider dataset.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured attributable electricity for this process, including standby during the recorded production period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources:

##### Waste flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

##### Elementary flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

#### Outputs

##### Product flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

##### Waste flows

###### Rejected brown mustard seed (`seed_reject`)

Record only rejected seed, its moisture and destination; foreign mineral matter is a separate exchange if present.

- Selected flow: Rejected brown mustard seed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured discarded seed mass when inspection rejects seed; absent only with documented zero rejection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

### Process: Steeping, wet milling and holding (`mix`)

#### Inputs

##### Product flows

###### Food-grade fermented alcohol vinegar (`vinegar`)

Vinegar is a supplied food ingredient; it is not pure acetic acid and is not fermented again at this site.

- Selected flow: Food-grade fermented alcohol vinegar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed delivered vinegar dose; record measured acetic-acid concentration and supplier fermentation route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `fallot-mustard-manufacturing`

###### Tap water (`recipe_water`)

Use the purchased potable-water supply identity; disclose supplier and suitability records for the actual food operation.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured water incorporated into the recipe, separately from cleaning water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `fallot-mustard-manufacturing`

###### Salt (`recipe_salt`)

The selected identity is food-grade salt for brine preparation; measure the actual sodium-chloride specification.

- Selected flow: Salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured food-grade salt dissolved in the steeping liquid; no database recipe percentage is adopted.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `fallot-mustard-manufacturing`

###### Alternating current (`mix_electricity`)

Meter this process separately; shared motors or electric heaters use documented operating-time and load records. The selected flow is CN grid-average consumption mix to user, below 1 kV; use a separately verified identity/provider for a different supply coordinate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured attributable electricity for this process, including standby during the recorded production period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources:

##### Waste flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

##### Elementary flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

#### Outputs

##### Product flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

##### Waste flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

##### Elementary flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

### Process: Filling, closure, labelling and gate storage (`pack`)

#### Inputs

##### Product flows

###### Alternating current (`pack_electricity`)

Meter this process separately; shared motors or electric heaters use documented operating-time and load records. The selected flow is CN grid-average consumption mix to user, below 1 kV; use a separately verified identity/provider for a different supply coordinate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured attributable electricity for this process, including standby during the recorded production period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources:

###### Glass Jar (`glass_jar`)

Measure tare and net fill separately; record actual jar specification.

- Selected flow: Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured empty jar mass issued to production, including attributable breakage.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Tinplate twist-off closure with integral sealing compound (`closure`)

This is one supplied assembled closure, not a steel-can or aluminium-cap proxy.

- Selected flow: Tinplate twist-off closure with integral sealing compound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass of supplied complete closure assembly; declare steel, coating and seal composition; do not count the same integral seal again.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Packaging label, paper (`paper_label`)

Declare paper, adhesive and ink specification in the supplier dataset; the identity does not establish their quantities.

- Selected flow: Packaging label, paper `d5890643-6859-42b5-9e05-556b072c6a8c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured delivered paper label mass including integral adhesive where supplied; include label rejects once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

###### Corrugated cardboard shipping box (`corrugated_box`)

Packaging is included through dispatch-ready packing at the factory gate.

- Selected flow: Corrugated cardboard shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured supplied empty-box mass; record actual fibre composition and box count.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources:

##### Waste flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

##### Elementary flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

#### Outputs

##### Product flows

###### Wholegrain brown mustard (`mustard_output`)

The released condiment includes retained seed coats and its liquid phase; do not drain it or report dry-seed mass as output.

- Selected flow: Wholegrain brown mustard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `charbonneaux-wholegrain-mustard`

##### Waste flows

###### Discarded wholegrain brown mustard (`mustard_reject`)

Do not double count paste washed into wastewater; internal rework remains an internal transfer.

- Selected flow: Discarded wholegrain brown mustard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured wet paste discarded from milling, holding or filling when present; record origin and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Broken empty glass jar (`glass_reject`)

Keep this packaging waste separate from product mass and from each other material.

- Selected flow: Broken empty glass jar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured discarded component mass when present, with supplier returns and external recovery destinations separately recorded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Rejected tinplate twist-off closure (`closure_reject`)

Keep this packaging waste separate from product mass and from each other material.

- Selected flow: Rejected tinplate twist-off closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured discarded component mass when present, with supplier returns and external recovery destinations separately recorded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Discarded paper packaging label (`label_reject`)

Keep this packaging waste separate from product mass and from each other material.

- Selected flow: Discarded paper packaging label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured discarded component mass when present, with supplier returns and external recovery destinations separately recorded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Discarded corrugated cardboard box (`box_reject`)

Keep this packaging waste separate from product mass and from each other material.

- Selected flow: Discarded corrugated cardboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured discarded component mass when present, with supplier returns and external recovery destinations separately recorded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

### Process: Sanitation and effluent handoff (`clean`)

#### Inputs

##### Product flows

###### Alternating current (`clean_electricity`)

Meter this process separately; shared motors or electric heaters use documented operating-time and load records. The selected flow is CN grid-average consumption mix to user, below 1 kV; use a separately verified identity/provider for a different supply coordinate.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured attributable electricity for this process, including standby during the recorded production period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_power`
- Sources:

###### Tap water (`clean_water`)

Cleaning is included independently of the four-ingredient recipe.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured sanitation water supplied during production; record rinse reuse without counting internal circulation as new water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources:

###### Sodium hydroxide solution, 30% (`alkali`)

Conditional sanitation input, not a recipe ingredient or a prescribed sanitation programme; other actual chemicals require their own atomic rows.

- Selected flow: Sodium hydroxide solution, 30% `7115909b-796c-4b3d-b40a-1a7c693d12d0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure supplied 30% solution mass only when this exact cleaner is used; record diluted working concentration separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`
- Sources:

##### Waste flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

##### Elementary flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

#### Outputs

##### Product flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

##### Waste flows

###### Mustard-processing wash wastewater sent to external treatment (`wash_effluent`)

This is a technosphere waste handoff, not discharge to freshwater; declare measured suspended solids, chemical oxygen demand and salt loading as treatment descriptors.

- Selected flow: Mustard-processing wash wastewater sent to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured exported effluent mass including separately sampled composition; never substitute water-resource withdrawal or a pollutant mass for this stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources:

##### Elementary flows

No external exchange prescribed for this group in the representative route; assess actual site operations.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared equipment and sanitation | First subdivide with product-line meters and batch records. Allocate shared electricity or cleaning only using measured operating load/time or the documented cleaning cycle serving the lot; reconcile allocated totals with facility records. Product mass alone is not proof of energy causation. |  |
| `allocation_rework` | rework and waste | Track internal paste rework once; rejected seed, discarded mustard and packaging scrap incur actual treatment burdens. Do not assume saleable bran or grant avoided-product credit to discarded material. A real marketed coproduct requires documented mass, function, value and a reviewed allocation extension. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | pack | mustard_output | weighing | lot; released net wet mass Q; jar tare; fill mass; rejected lot mass; final solids and moisture | Calibrated net-fill weighing records, with representative tare checks and released stock reconciliation | kg | each lot | declared complete production period | selected factory line | per 1 kg reference flow | scale calibration; release record; stock ledger |
| cp_material | receipt; mix | brown_seed; vinegar; recipe_salt | weighing | supplier; lot; species; route; incoming moisture; dose kg; opening/closing stock; rejected mass; vinegar acidity | Calibrated scales and dose logs reconciled with delivery and stock records; assay vinegar concentration | kg | each dose and lot | same production period as cp_output | receipt and mixing line | per 1 kg reference flow | supplier specification; calibration; lot balance |
| cp_water | mix; clean | recipe_water; clean_water | metering | water meter; process; volume; density; temperature; recipe dose; rinse supply; reuse loop | Separate recipe and sanitation meters or weighed doses; convert volume with measured density; reconcile site supply | kg | each lot and cleaning cycle | same production period as cp_output | mixing and sanitation | per 1 kg reference flow | meter calibration; density method; water suitability |
| cp_power | receipt; mix; pack; clean | process electricity | metering | meter; process; kWh; operating time; load; standby; shared allocation; holding/deaeration state | Read calibrated submeters; use measured load and duration only for an unmetered shared load; reconcile utility bill | kWh | each run and production period | same production period as cp_output | all four processes | per 1 kg reference flow | meter calibration; bill; allocation worksheet |
| cp_pack | pack | each packaging component | weighing | component specification; tare kg; count; received/issued/rejected/returned stock; fibre/coating/seal composition | Weigh representative complete supplied components and reconcile count and stock records; keep each component separate | kg | each component lot | same production period as cp_output | filling and pack-out | per 1 kg reference flow | tare sampling; supplier composition; stock ledger |
| cp_clean | clean | alkali | weighing | cleaner name; solution kg; concentration; working dilution; cycle; reuse; lot served | Weigh purchased solution consumed and verify label/assay; split fresh chemical supply from internal recirculation | kg | each cleaning cycle | same production period as cp_output | sanitation serving selected line | per 1 kg reference flow | assay; cleaning log; purchase ledger |
| cp_waste | receipt; pack | each discarded seed, mustard or packaging component | weighing | row; source process; wet kg; composition; rework; destination; treatment; return record | Weigh each segregated stream and reconcile carrier receipts, returned stock and internal rework separately | kg | each removal | same production period as cp_output | receipt, mill and packing waste | per 1 kg reference flow | calibration; removal receipt; destination evidence |
| cp_effluent | clean | wash_effluent | metering | effluent mass or volume; measured density; temperature; suspended solids; COD; salt loading; offsite receiver | Meter or weigh exported effluent, sample composition at representative cleaning and production states; use measured density for volume conversion | kg | each export and representative sampled cycle | same production period as cp_output | external treatment handoff only | per 1 kg reference flow | meter calibration; laboratory report; treatment receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period` | all inventory rows | For each exchange divide its attributable amount for the reporting period by the same released net wet mustard mass Q in kg. Report the result per 1 kg reference flow; mustard_output is 1 kg. Retain original numerator units. Q must be positive and measured by cp_output. | cp_output; cp_material; cp_water; cp_power; cp_pack; cp_clean; cp_waste; cp_effluent | normalized inventory |  |
| `lot_balance` | food ingredients and mustard | Reconcile ingredient receipts, stock changes, released output, rejected seed, discarded paste, paste entering effluent and retained work-in-progress. Internal rework is not another receipt. Investigate differences against recorded measurement uncertainty; never label unexplained residuals as emissions. | cp_output; cp_material; cp_waste; cp_effluent | lot closure statement |  |
| `component_mass` | each packaging row | If issued by count, multiply count by measured representative component tare in kg; reconcile rejected and returned components, keeping consumed packaging and product net mass separate. | cp_pack; cp_waste | component kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | scope | Confirm brown seed, retained coats, complete four-ingredient recipe and nonthermal purchased-water/electric route; report all additional operations explicitly. | process diagram; recipe; supplier records |
| `dq_period` | all exchanges | Use one stated representative complete period for inputs, output and losses; disclose seasonality, missing runs, shared allocation and measurement uncertainty. | dated ledger; calibration; coverage report |
| `dq_identity` | all flows and providers | Resolve each specific exchange against its state, property and supply/treatment route; disclose blank UUIDs. A matched name alone does not validate supplier burdens. | supplier and treatment documentation; identity assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | mustard_output | Require 1 kg net wet output, matching reference-product name, cp_output, positive released net mass and all required qualifiers; reject drained or dry-seed denominators. |  |
| `validate_process` | process inventory | Require all four processes and the same 1 kg reference denominator; check declared conditional absence with production records. Unlisted actual chemicals, direct emissions or preservation operations require explicit atomic rows before a completeness claim. |  |
| `validate_balance` | materials, energy and wastewater | Reconcile batch and utility totals, separate recipe from cleaning water, preserve concentration and property units, check waste destination and avoid rework double counting. Report unresolved differences and upstream coverage. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate wholegrain brown-mustard foreground manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared four-ingredient product and route; ingredient in a downstream study with separately verified upstream links |
| excluded_use | Full CPC 23995 coverage; flavour equivalence; food-safety approval; generic smooth mustard, dry flour, cultivation, distribution or end-of-life; complete cradle-to-gate without upstream datasets |
| required_metadata | Species, recipe, vinegar route/acidity, retained coats, final solids, process diagram, package composition/net fill, facility, geography, period, storage and provider references |
| required_quality_disclosure | Meter and scale calibration, period coverage, allocation, balances, UUID gaps, actual additional operations, exclusions and upstream incompleteness |
| update_trigger | Recipe, seed species, coat removal, preservation, energy supply, packaging, supplier or measured yield changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | UNSD, CPC 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.111, 23995. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official subclass title and separation from vinegar; no extra manufacturing note or complete-route coverage implied |
| `fallot-mustard-manufacturing` | literature | Edmond Fallot, La Moutarderie Fallot, sections Raw materials / Manufacturing process / Quality (undated manufacturer page). https://www.fallot.com/en/la-moutarderie-fallot/ | Manufacturer evidence for steeping and milling; smooth sieving and storage account is not imposed universally; no fixed durations, seed composition or sourcing shares adopted |
| `charbonneaux-wholegrain-mustard` | literature | Charbonneaux-Brabant, A mustard seed rich in character, sections seed/verjuice and Whole Grain mustard (undated manufacturer page). https://www.vinaigre.com/en/expertise/the-mustard | Independent manufacturer evidence for brown-seed wholegrain identity and no husk sieving; does not establish industry-wide recipe, safety or electricity use |

The selected four-ingredient, nonthermal route and data-collection rules define a bounded representative dataset design; actual factory records must demonstrate applicability. Manufacturer web pages describe their own products and do not establish current market shares or default quantitative factors.
