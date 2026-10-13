---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.paper-and-paperboard-creped-crinkled-embossed-or-perforated
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Uncoated two-sided linen-embossed fine-paper sheets from purchased base paper

## 1. Scope and Applicability

This method covers a single white pigment-uncoated chemical-pulp fine-paper grade of nominal 250 g/m2, given a two-sided linen texture by mechanical embossing calenders after receipt of dried unembossed base paper, then trimmed/sheeted, conditioned, inspected and protected for factory-gate delivery. The commercial representative is Favini Biancoflash Premium Classic Linen LN 2/S, corroborated as uncoated textured 250 g/m2 paper by the original printer-media table. Nominal grammage identifies the grade; it is not a production recipe, a default moisture, an actual shipment mass or an automatic quality tolerance. Actual base-paper furnish, two-sided roller texture, absence of pigment coating and current acceptance specification must be demonstrated for each dataset. [favini-biancoflash-range, favini-embossed-tds, ricoh-media-2021]

The specific foreground endpoint adds physical surface-pattern formation and rejection/trim/conditioning accounting to upstream base-paper manufacture. This is distinct from Yankee blade-creped tissue parent reels, Clupak extensible sack paper and plain unembossed printing/writing base paper. It excludes creping, perforating, felt marking during wet formation, kraft sack paper, tissue/nonwoven conversion, coated/primed/metallic papers, coloured/ivory variants, composite laminating, adhesive labelstock, printed stationery and envelope/box manufacture. Integrated pulping or papermaking is not inside this converter gate; link compatible upstream base paper once.

Roll embossing configurations can use steam or run without it. The actual converter must document its selected machinery, pass sequence and steam/conditioning arrangement. Producer case evidence is not proof of Favini's own as-run machinery or universal settings. This method permits externally supplied indirect industrial-boiler steam heat, electrically supplied drives/heating and treated-water conditioning; direct steam injection, thermal-oil systems, on-site combustion and on-site wastewater treatment/direct discharge require separate reviewed route extension. No unmeasured exchange is declared zero. [gmund-embossing-process]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.paper-and-paperboard-creped-crinkled-embossed-or-perforated |
| classification_refs | CPC 3.0 32142; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | White uncoated nominal 250 g/m2 two-sided mechanically linen-embossed fine-paper sheets from purchased unembossed chemical-pulp base paper |
| excluded_products | Creped or perforated products; tissue, Clupak sack paper, wet felt-marked papers; coated/printed/primed/laminated/adhesive papers; ivory/coloured grades; integrated papermaking and final articles |
| representative_product | Favini Biancoflash Premium Classic Linen LN 2/S, nominal 250 g/m2, white unprinted sheets; commercial identity only, not a factory dataset |
| production_route | Purchased dry base -> controlled roller linen embossing on both sides -> cutting/conditioning/acceptance -> protective packing |
| market_state | Accepted protected flat sheets at converter gate, before printing or article conversion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an unprinted two-sided linen-textured white fine-paper printing substrate |
| How much | 1 kg accepted net sheets at actual delivered moisture |
| How well | Declared nominal 250 g/m2 grade, actual grammage/caliper/moisture/dimensions/grain and accepted two-sided linen texture; uncoated, unprinted and undamaged |
| How long or cycle | One manufacturing and gate-delivery cycle; no claimed printed-article service life |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Paper and paperboard, creped, crinkled, embossed or perforated `1000e2c4-0fd1-4139-a6ff-7b0cff8abc05` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | white chemical-pulp base furnish; supplier/lot; uncoated/unprinted status; nominal and actual grammage; caliper; delivered moisture and moisture basis; dimensions; grain; two-sided linen pattern and acceptance; embossing passes/energy/conditioning configuration; net mass excludes packaging; gate and period |

Every qualifier is required in the actual dataset metadata or product/process description. P is the measured accepted net output over the matching campaign, not an assumed nominal-grammage area conversion. The broad reference UUID is used only for the declared finished subset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | P is accepted net sheet mass at actual gate moisture, excluding all packaging, rejects and work in progress; collect with cp_mass. All rows use the same per 1 kg denominator. |
| physical_basis | auxiliary physical-balance ledgers for material streams; excludes native electricity, steam_heat and freight exchange fields | Mass | kg | Record actual wet mass m and same-stream wet-basis moisture w; dry solids d = m*(1-w). Assay carbon/fillers where a carbon or solids balance uses them. Preserve input/output stock corrections, physical rework and packaging separately. Vendor moisture/tolerance is not an assay. Auxiliary material mass does not replace native electricity/heat MJ or freight kg*km; retain the independent utility_basis and native_utility_conversion definitions. |
| utility_basis | electricity, steam_heat, process_water, condensate_return | Net calorific value / Gross calorific value / Mass | MJ / MJ / kg | Electricity uses native NCV/MJ with exact 1 kWh = 3.6 MJ conversion, not efficiency. Steam heat native GCV/MJ requires supplier k_bg, actual net enthalpy and physical steam/condensate kg; same enthalpy datum, state, storage and losses once. Match all pressure/name constraints; MJ alone does not prove a delivery basis. Water volume converts using actual density at temperature. |
| emission_basis | pm25, pm25_10, pm10plus, water_vapour | Mass | kg | Only final attributable outdoor release; mutually exclusive PM fractions, captured dust separate. Physical water and carbon balances use measured material composition. Keep any actual biogenic CO2 in LCI even when a GHG reporting convention excludes it; actual unexpected emissions require separate verified species/origin/medium rows before a complete dataset. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased dried unembossed white chemical-pulp base paper received at converter gate |
| starting_condition_role | foreground input gate |
| product_classification_scope | CPC:3.0:32142; narrower |
| recursive_input_rule | Already embossed purchased sheets for repacking are outside this route; purchased unembossed paper links upstream once. Internal rework/recirculated dust are equal physical loops, not new purchases. |
| upstream_dataset_requirement | Actual compatible base-paper, utilities, transport, consumable, packaging and external waste-treatment datasets; preserve manufacturing route/geography/year and native reference quantities. Missing or incompatible links prevent complete cradle-to-gate claims. |
| disclosure | Converter gate-to-gate versus linked cradle-to-gate; exact machines/energy/conditioning; waste receiver; stock changes/rework; actual packaging; excluded upstream production and downstream printing/articles |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_finish | emboss_convert | Include receipt/unwrapping, roller embossing on both sides, actual rework, edge cutting/sheeting, conditioning, inspection, dust capture, attributable utility/maintenance and protection/dispatch within the declared converter gate. Retain stage meter and physical flow records within one aggregate foreground unit. | gmund-embossing-process, jrc-pp-bref-2015 |
| boundary_upstream | base_paper | Exclude pulping, wet papermaking, bleaching and base drying from this foreground; link purchased base with an upstream dataset once. No wood-processing survey or plywood inventory supplies paper-converter factors. | jrc-pp-bref-2015 |
| boundary_utility | steam_heat | Purchased heat generation is upstream; preserve incoming steam/returned condensate physical mass separately from the heat-service MJ exchange without duplicate fuel, water input or return-enthalpy credit. No boiler is inside this converter route. | jrc-pp-bref-2015 |
| boundary_residual | emboss_convert | Internal paper/dust return never crosses the gate twice. External trim, captured dust and final air release remain separate. Off-site whole effluent transfer is not direct release of water/pollutants to the environment. Disclose actual auxiliary components individually before data completion. | jrc-pp-bref-2015 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| emboss_convert | Linen embossing, sheeting and protection | required | Declared purchased-base converter route; actual utility branches only | foreground production | 1 kg reference flow |

Physical stage map: purchased base receipt -> unwrapping and moisture check -> controlled two-sided linen roller embossing -> edge cut and sheeting -> conditioning/inspection -> accepted sheets and protection. Internal rejected-sheet rework has equal sending/receiving mass/state/period; cutting dust separates into captured export, equal internal return and measured final outdoor emission. One aggregate foreground unit avoids representing the same finished product twice between finishing and packing. Record incoming/reel/sheet/WIP mass and water/carbon balance separately from environmental burden allocation. Packaging shipped, returned, stocked and discarded retains whole physical masses in a separate ledger; it is not part of paper reference P. [gmund-embossing-process, jrc-pp-bref-2015]

### Process: Linen-paper conversion (`emboss_convert`)

#### Inputs

##### Product flows

###### Unembossed white woodfree fine-paper base (`base_paper`)

Purchased dried, unprinted, unembossed and pigment-uncoated white chemical-pulp fine paper suitable for the declared nominal 250 g/m2 linen grade. Record actual furnish and non-pigment sizing; exclude recycled, mechanical-pulp, coated and already embossed substitutes. Broad identity contains this subset but is not a supplier recipe or background dataset.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-pp-bref-2015`

###### Electricity for embossing, cutting and protection (`electricity`)

Meter drives, cutting, vacuum/dust capture, compressor and attributable lighting/conditioning. Identity is customer-side alternating current below 1 kV with CN supply metadata; actual voltage, geography, year and provider must match or a different verified flow/provider is required. No China or hydropower mix is assumed for the representative European product.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
Reference unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_electricity.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_electricity`
- Sources: `jrc-pp-bref-2015`

###### External industrial-boiler steam heat (`steam_heat`)

Conditional on actual indirect steam heating of embossing rolls. No pressure constraint is recorded in this identity; retain actual pressure/temperature/quality, steam and return kg, enthalpy datum, condensate return and losses. Native Gross calorific value/MJ and CN metadata require documented provider correspondence Q_bg = k_bg*H_net; k_bg is never presumed 1. Unknown k_bg leaves the link incomplete. No dryer benchmark or on-site boiler fuel is added for this purchased heat. Direct steam injection and on-site boilers are outside this route.

- Selected flow: industrial steam heat `e84ac547-7be6-4f22-9b4e-c77bfa745129`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
Reference unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual Q_bg divided by P; Q_bg = k_bg*H_net with actual provider convention; cp_mass and cp_heat.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat`
- Sources: `gmund-embossing-process`

###### Treated water for conditioning and water-only cleaning (`process_water`)

Conditional on actual external treated-water addition for air humidification, paper conditioning or water-only equipment cleaning. Meter each use separately, preserve net paper-moisture change, and convert measured volume using measured density/temperature. Internal water or returned condensate is not fresh input. Chemical washing and own abstraction require additional specific exchanges and method review.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-pp-bref-2015`

###### Uncoated woodfree paper ream wrapper (`wrapper`)

Conditional on actual uncoated woodfree paper wrapping. This separately weighed protective paper is not incorporated in reference sheets. Verify actual fibre/sizing and provider; kraft, coated moisture barriers and adhesives cannot be represented by this selected subset.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-pp-bref-2015`

###### LDPE protective film (`pe_film`)

Conditional on actual non-cellular, non-adhesive, non-reinforced and non-laminated LDPE foil. Measure actual film mass and construction; do not substitute PET or multilayer film. Finished shipped film remains a separately disclosed physical packaging output.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-pp-bref-2015`

###### Manufactured printed folding laminated paperboard carton (`carton`)

Conditional on actual printed cut/fold/laminate paperboard ream carton matching the full direct-read route; not a corrugated box proxy. Actual composition and provider reference mass must match. Do not transfer another box record's 16.6/83.4 fibre split.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-pp-bref-2015`

###### Wooden shipping pallet (`pallet`)

Conditional on actual wooden portable platform, not every product in the broad class. Record whole actual mass, species, fasteners/treatment and reuse circuit. Attribute pallet-service manufacture across evidenced uses without reducing the physical pallet mass shipped/returned/discarded. No default reuse lifetime.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-pp-bref-2015`

###### Inbound road freight service (`freight`)

Actual inbound base paper and consumables transported by road. Preserve native mass*distance in kg*km, actual payload, route km, vehicle, utilisation and return-trip convention. Sum actual payload kg times distance km by leg; 1 t*km = 1000 kg*km. Do not add truck fuel/emissions when already covered by this transport provider. Rail and sea legs need independent atomic rows.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
Reference unit group: `3620148f-c5db-48ce-9065-a10092089aca`.
- Amount rule: Collected actual shipment payload kg times route km divided by P; cp_mass and cp_freight.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`
- Sources: `jrc-pp-bref-2015`

###### Petroleum-fraction lubricating oil (`lubricating_oil`)

Conditional on actual petroleum-fraction lubricating oil for emboss/cutting machinery. Confirm supplier formulation and the recorded 40.5 MJ/kg descriptor before using this identity; it is not a PCR calorific-value factor and no combustion quantity is inferred. Reject full-synthetic PAO substitution. Count the complete actual supplied lubricant formulation once in this row only on a compatible provider native-mass basis, including supplier formulation/manufacture/delivery; embedded base oil/additives are composition and physical-balance evidence, not new purchases. Only actually independently purchased oils/additives mixed onsite receive separate compatible atomic rows, with actual preparation utilities and losses. If this identity cannot represent the whole supplied formulation, retain the specific alternative and pending identity/basis rather than changing its physical construction. Retain equipment oil stocks and actual replacement/spill records.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-pp-bref-2015`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted linen-embossed white fine-paper sheets (`reference_product`)

Only accepted unprinted, uncoated white nominal 250 g/m2 fine-paper sheets with mechanical two-sided linen texture. Record actual net delivered mass and moisture, grain, dimensions, measured grammage/caliper and acceptance of both surfaces. Broad finished-paper identity is restricted to this physical subset; it does not identify every creped, perforated or embossed product. Exclude wrappers, cartons, pallets, rejected paper and work in progress.

- Selected flow: Paper and paperboard, creped, crinkled, embossed or perforated `1000e2c4-0fd1-4139-a6ff-7b0cff8abc05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`
- Sources: `favini-biancoflash-range`

###### Returned steam condensate from indirect emboss-roll heating (`condensate_return`)

Only actual treated boiler-water condensate accepted by the industrial steam supplier for reuse, with verified composition, treatment history, quality specification and point of return, fits this broad industrial Process Water identity. Retain actual temperature, pressure, density and whole returned kg independently of heat-service MJ; returning it is neither a new purchased water supply nor a sale with an automatic substitution credit. The heat-service accounting includes documented return enthalpy once. Contaminated rejected water requires its own waste-state row and receiver; dairy condensate and pressure-specific supplied steam cannot substitute.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_heat.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_heat`
- Sources: `jrc-pp-bref-2015`

##### Waste flows

###### Exported clean linen-paper trim and rejects (`paper_trim`)

One physically combined clean uncoated paper-waste stream from this single grade only; separately handled streams require separate rows. Weigh net mass, assay moisture/filler content and document receiver. Internal rework is not exported waste and never receives an automatic avoided-virgin-paper credit. No converter pulper is presumed.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-pp-bref-2015`

###### Separately collected paper-cutting dust (`captured_dust`)

Actual paper fibre/filler dust captured in a dedicated collector and exported. Broad industrial Dust identity includes this physical subset; assay origin, moisture, filler and lubricant contamination, verify receiver and actual collection mass. It is neither combustion ash nor ambient emitted PM. Internally returned dust remains an equal physical loop and is excluded from external waste/emission totals.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-pp-bref-2015`

###### Discarded paper wrapper (`waste_wrapper`)

Actual separately collected paper wrapping scrap/damaged incoming wrappers, with composition, moisture and receiver; not paper production trim or corrugated board. Shipped intact wrapping is a packaging output, not this waste.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-pp-bref-2015`

###### Unwashed LDPE protective-film packaging waste (`waste_pe`)

Only actual unwashed LDPE protective-film scrap/unwrapping waste discarded separately at the converter gate fits this industrial discarded-material subset of Waste solid. Weigh its whole as-transferred mass and record LDPE/additives, adhering paper, dirt, moisture, actual solid state and receiver before linking compatible treatment. Retain the specific physical stream separately from wooden pallets despite the shared broad UUID. No washing, recycling yield, hazard status or treatment is inferred; cleaned recycling feed, PET and cord fabric remain incompatible substitutes.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-pp-bref-2015`

###### Discarded paperboard carton (`waste_carton`)

Actual packing-generated damaged carton/scrap, measured separately with laminate/adhesive content and receiver. Source identity's 2% expert estimate is not adopted. Intact shipped cartons and returned cartons retain full physical masses separately.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-pp-bref-2015`

###### Discarded used wooden pallet with retained metal fasteners (`waste_pallet`)

Only an actual whole used wooden pallet discarded by this converter, including retained metal fasteners, fits this industrial discarded-article subset of Waste solid. Weigh full as-transferred mass and document species, wood moisture, preservatives, fasteners, contamination and receiver. Shipped or returned reusable pallets are physical packaging transfers, not this waste. Do not scale discarded mass by pallet service allocation, combine it with film waste, or infer crushing, agglomeration, hazard status or downstream treatment. Primary woodworking offcuts cannot represent this used whole article.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-pp-bref-2015`

###### Used lubricating oil from equipment maintenance (`waste_lubricating_oil`)

Conditional on actual separately collected used oil; weigh the full contaminated liquid, assay water/contaminants and document receiver without prescribing combustion or recycling. No source identity from an offshore fishing vessel is used. Oil-bearing cloth or filters need their own atomic rows.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-pp-bref-2015`

###### Whole water-only paper-equipment cleaning effluent transferred off-site (`cleaning_effluent`)

Conditional on measured whole effluent transferred to an actual external treatment provider. Broad waste-liquid identity includes industrial cleaning wastewater; restrict to this composition and declared receiver. Native Mass/kg means whole wet effluent, not pure water: weigh or use V*rho_eff(T). Sample suspended fibres/fillers and dissolved contamination; use measured water mass fraction x_H2O times whole wet effluent mass for the water-component ledger, with non-water material separately reconciled. Whole effluent is not all H2O; do not sum overlapping pollutant indicators into a physical mass. This route has no duplicate direct-water release. Electrolytic manganese washing, silicon-wafer wastewater and pharmaceutical BOD are excluded. On-site wastewater treatment/direct discharge require a separate reviewed route with species/medium rows.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources: `jrc-pp-bref-2015`

##### Elementary flows

###### Paper dust released to outdoor air, PM2.5 (`pm25`)

Conditional on actual final outdoor release from dry handling/embossing/cutting after capture, including attributable fugitive release. Verify unspecified outdoor-air medium and measured mutually exclusive aerodynamic size interval. Use stack/diffuse source measurement or documented site-specific balance; do not impose a positive factor or treat unmeasured as zero. PM2.5, PM2.5-PM10 and above-PM10 may be summed only as disjoint intervals; never add nested PM10 or total dust again. Captured dust is separate.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-pp-bref-2015`

###### Paper dust released to outdoor air, PM2.5-PM10 (`pm25_10`)

Conditional on actual final outdoor release from dry handling/embossing/cutting after capture, including attributable fugitive release. Verify unspecified outdoor-air medium and measured mutually exclusive aerodynamic size interval. Use stack/diffuse source measurement or documented site-specific balance; do not impose a positive factor or treat unmeasured as zero. PM2.5, PM2.5-PM10 and above-PM10 may be summed only as disjoint intervals; never add nested PM10 or total dust again. Captured dust is separate.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-pp-bref-2015`

###### Paper dust released to outdoor air, above PM10 (`pm10plus`)

Conditional on actual final outdoor release from dry handling/embossing/cutting after capture, including attributable fugitive release. Verify unspecified outdoor-air medium and measured mutually exclusive aerodynamic size interval. Use stack/diffuse source measurement or documented site-specific balance; do not impose a positive factor or treat unmeasured as zero. PM2.5, PM2.5-PM10 and above-PM10 may be summed only as disjoint intervals; never add nested PM10 or total dust again. Captured dust is separate.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-pp-bref-2015`

###### Water vapour released from conditioning and paper moisture loss (`water_vapour`)

Conditional on actual attributable net moisture release to outdoor air from paper conditioning, humidification or steam-system vents. Reconcile measured paper moisture, supplied conditioning water, steam/condensate inventory and actual air moisture flux. Do not derive kg from purchased heat MJ alone; steam service mass is kept separately. No plant-wide boiler evaporation is imported.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.
- Amount rule: Collected actual campaign exchange divided by accepted net sheet output P; cp_mass and cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `jrc-pp-bref-2015`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_separate | emboss_convert | First isolate this grade campaign and directly metered utility/process loads; investigate subdivision/system expansion before allocating unavoidable shared burdens. Dedicated sheets retain all their directly attributable loads. System expansion, if justified, reports the complete expanded function and no automatic avoided-product credit. | ec-ef-allocation-2021 |
| allocation_relationship | emboss_convert | Use a demonstrated underlying physical relationship for unavoidable shared utility burdens; meter/time with actual operating power for drives and measured interface heat for thermal services, rather than a default tonne or revenue share. If no physical relation is defensible, justify and disclose another basis including economic sensitivity. Shares sum to one within the same period. | ec-ef-allocation-2021 |
| allocation_physical | emboss_convert | Keep full physical paper, water, carbon, packaging and residual ledger before allocation. Do not multiply physical co-product/waste outputs, internal links or pallet returns by environmental allocation shares. Treat trim as waste unless documented product status and methodology establish a separate saleable co-product; add its distinct verified state/identity and review before use. No mass disappearance or unproven recycling substitution credit. | ec-ef-allocation-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | emboss_convert | accepted output | measured_record | supplier and lot; period; nominal grade; actual sheet size/grain/grammage/caliper; actual wet net mass P; moisture w; accepted/rejected/WIP stocks; wrapping tare; texture acceptance | Calibrated weighing of accepted sheets at gate moisture, excluding packaging; representative lot moisture/grammage/caliper tests using a validated laboratory SOP; reconcile acceptance and stocks. Producer cites ISO536/287 but does not provide full test procedures. | kg | Each lot and campaign | Matching campaign; declare dates, shutdowns/startups and coverage | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw records, test SOP, coverage and reconciliation evidence |
| cp_materials | emboss_convert | base_paper, lubricating_oil | measured_record | row_id; supplier/lot; actual composition and treatment; wet and dry mass; moisture; beginning/end stocks; use/rework/loss; oil formulation and descriptor | Calibrated receiving/issue scales, invoices and stock reconciliation; supplier certificates/assays. Record base and lubricant separately, not a recipe inference. | kg | Each delivery/issue and campaign | Matching campaign; declare dates, shutdowns/startups and coverage | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw records, test SOP, coverage and reconciliation evidence |
| cp_packaging | emboss_convert | wrapper, pe_film, carton, pallet | measured_record | row_id; actual construction; supplier; tare/unit mass; quantity; new/reused; complete shipped/returned/discarded mass and stocks; verified number of uses | Weigh each actual component separately; reconcile dispatch/return/stock records and demonstrated service attribution, with no default lifetime or physical-mass scaling. | kg | Each packing/dispatch/return lot | Matching campaign; declare dates, shutdowns/startups and coverage | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw records, test SOP, coverage and reconciliation evidence |
| cp_electricity | emboss_convert | electricity | measured_record | meter location; voltage; provider/geography/year; kWh readings; line idle/drive/heating/dust/compressor allocation; period; losses already covered | Calibrated submeters and reconciled invoices; separate actual stages and allocate only unavoidable shared loads under the documented physical relationship; use exact kWh/MJ unit conversion. | MJ | Continuous metering and campaign reconciliation | Matching campaign; declare dates, shutdowns/startups and coverage | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw records, test SOP, coverage and reconciliation evidence |
| cp_heat | emboss_convert | steam_heat, condensate_return | measured_record | actual heat-service provider basis; supply/return/vent kg; absolute/gauge pressure; temperature; steam dryness; condensate quality; enthalpies/datum; storage change; losses; H_net; k_bg evidence; Q_bg | Measure supply and return interfaces with calibrated steam/condensate mass and state instruments; obtain compatible supplier-reference definition and validated enthalpy calculation. Retain physical kg ledger independently of heat-service MJ and avoid duplicate credits. | MJ; kg | Continuous state/mass logging and campaign | Matching campaign; declare dates, shutdowns/startups and coverage | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw records, test SOP, coverage and reconciliation evidence |
| cp_water | emboss_convert | process_water | measured_record | treated supply and use; volume/mass; actual density and temperature; humidity; paper moisture in/out; stock change; effluent/vent destination | Dedicated water meter/scale with density-temperature records; paper moisture assay and matching ambient/process humidity; no assumed pure-water effluent or fixed density. | kg | Each use and campaign balance | Matching campaign; declare dates, shutdowns/startups and coverage | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw records, test SOP, coverage and reconciliation evidence |
| cp_wastes | emboss_convert | paper_trim, captured_dust, waste_wrapper, waste_pe, waste_carton, waste_pallet, waste_lubricating_oil, cleaning_effluent | measured_record | row_id; actual state/composition/origin; mass; moisture/density/T; stock changes; contamination; exact receiver and treatment; internal returns; separate collection lots | Separately calibrated weighing or whole liquid V*rho_eff(T), compositional sampling and transfer records for each actual waste. Maintain one row per physically separately handled stream and receiver; do not use treated-state identities for untreated exports. | kg | Every collection/transfer lot and campaign | Matching campaign; declare dates, shutdowns/startups and coverage | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw records, test SOP, coverage and reconciliation evidence |
| cp_emissions | emboss_convert | pm25, pm25_10, pm10plus, water_vapour | measured_record | row_id; final source/medium; flow rate and operating hours; representative post-control concentrations; aerodynamic size cut; captured mass; fugitive survey; moisture flux and material-water balance; uncertainty/detection limits | Use validated source-specific stack/fugitive monitoring with recorded size sampling/calibration/standard conditions; determine actual post-capture released mass over operating period. Water vapour uses measured humidity flux or reconciled material-water balance. Record absent/tested/unmeasured separately, no default emission factor. | kg | Representative campaigns and all operating modes | Matching campaign; declare dates, shutdowns/startups and coverage | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw records, test SOP, coverage and reconciliation evidence |
| cp_freight | emboss_convert | freight | measured_record | shipment/leg; actual payload kg; route km; truck/fuel/emission class; loading/return convention; provider reference; included supplier transport | Traceable delivery/load records and route evidence; sum actual kg*km by road leg and match provider convention. Separate other modes before dataset completion. | kg*km | Every delivery/route leg | Matching campaign; declare dates, shutdowns/startups and coverage | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration, raw records, test SOP, coverage and reconciliation evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | all inventory rows | Use actual exchange totals attributable to the same campaign divided by measured accepted net paper mass P. Reference_product is 1 kg. Preserve unallocated physical totals separately; do not use nominal grade mass as P. | actual row quantities; P; cp_mass | Exchange per 1 kg reference flow |  |
| physical_reconciliation | base_paper, reference_product, paper_trim, captured_dust, water_vapour | Reconcile actual wet mass, dry solids, water and measured carbon separately: incoming plus opening stock equals accepted paper plus actual external residual/release plus closing stock; internal sending/receiving amounts cancel at equal state and quantity. Include conditioning water and steam physical material interfaces for the water ledger, packaging in its own ledger, and air-side net moisture gain/loss. Use measured H2O fractions for whole liquid residuals and moist solids; distinguish actual atmospheric moisture uptake from negative emitted vapour. No invented yield or moisture. | cp_materials; cp_mass; cp_water; cp_heat; cp_wastes; cp_emissions | Separate physical ledgers and measured residual, with explanations |  |
| native_utility_conversion | electricity, steam_heat, freight | Convert electricity kWh to MJ using exactly 3.6. Steam Q_bg = k_bg*H_net only with evidenced compatible supplier definition and measured interface enthalpy, return, stock and losses once; unknown correspondence stays pending. Road transport preserves actual payload kg times km, with 1000 kg*km per t*km. | cp_electricity; cp_heat; cp_freight | raw same-campaign native reference-property totals; then normalize once by P under campaign_normalization |  |
| particle_intervals | pm25, pm25_10, pm10plus | Integrate each measured final post-control concentration times matching standardized air-volume rate and operating duration; verify compatible dry/wet and standard-volume conventions. Use disjoint measured fractions; an unresolved size split remains unknown, not an invented fraction or duplicate PM10 total. | cp_emissions | raw same-campaign emitted kg by non-overlapping interval; then normalize once by P under campaign_normalization | jrc-pp-bref-2015 |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Verify full physical identity, source route, name constraints, reference property/unit and supplier/receiver basis independently; no correction flow, route-conflicting substitute or missing-UUID proxy. | Native identity plus actual certificates/provider definitions |
| coverage | emboss_convert | Cover representative operating modes, changeovers, rework, conditioning, collector performance and actual maintenance/packaging; disclose time/stock/meter gaps and uncertainty. Survey actual roller covers, cutting blades, filters, belts, lubricants, cleaners and other consumed/replaced parts with purchase, stock and maintenance records; no material presence or absence is presumed. Each additional actually independently purchased/consumed chemical, cleaner, oil component, filter/cloth, packaging or transport mode requires its own atomic row; components already embedded in the supplied lubricant or another complete product are composition records, not duplicate purchases, while actual onsite purchases/preparation retain their real burdens. | Campaign records, itemized bill and measurement coverage |
| measurement | reference_product | Nominal 250 grade and historical catalogue tests never replace actual net P, moisture, grammage, caliper, two-sided pattern, current specification and measured residual balances. Quantitative inventories are collected, with no universal recipe or default factor. | cp_mass; favini-embossed-tds |
| physical_allocation | all inventory rows | Keep complete physical material links and balances beside attributable environmental burden account; preserve full co-product and packaging masses regardless of allocation shares. | cp_materials; cp_wastes; ec-ef-allocation-2021 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference_product | Require the declared uncoated white nominal 250 two-sided mechanical linen paper and converter route. Reject tissue, Clupak, wet-marked, printed/coated/laminated, other texture/colour and repacking-only use. | favini-biancoflash-range, favini-embossed-tds, ricoh-media-2021 |
| validate_reference | all inventory rows | Exactly one product-output reference row; 1 kg accepted net paper, same P across quantities/protocols/calculations and both languages. Missing qualifiers, unverified net mass or incompatible moisture basis makes actual data incomplete. |  |
| validate_balance | emboss_convert | Require reconciled physical wet/dry/water/carbon/packaging records, equal internal links and explanations of measured residuals. Verify utility provider conversion and one-time boundary accounting; steam MJ without state/k_bg cannot establish a complete link. |  |
| validate_emissions | pm25, pm25_10, pm10plus, captured_dust, water_vapour | No nested dust totals, assumed fractions, correction flows, default positive factors or unmeasured-zero declarations. Capture/export and outdoor release are separate; unknown or unexpected species/origin/medium are explicitly incomplete until verified. Retain actual biogenic CO2 in LCI. | jrc-pp-bref-2015 |
| validate_links | all inventory rows | Conditional condensate, unwashed LDPE waste and discarded used pallet identities require actual composition/state/receiver verification; unresolved quantities or provider compatibility remain dataset-completion gaps. The authored method does not waive them or imply independent scientific approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Verified purchased-base two-sided linen conversion for the declared grade, with actual upstream supplier links and disclosed boundary |
| excluded_use | Generic creping, all CPC32142 products, upstream pulping/papermaking, printed article use, unrelated textures/colours/routes and complete cradle-to-gate claims with unresolved links |
| required_metadata | Reference qualifiers; grade/furnish and actual suppliers; period/site/geography; roll/energy/conditioning configuration; quantities and native units; physical balances/rework/stocks; waste receivers; actual transport/packaging; allocation method and source version |
| required_quality_disclosure | Measured versus absent/unmeasured exchanges; uncertain size fractions; residual balances; missing UUID/quantity/provider links; historical manufacturer/printer source limitations and independent review status |
| update_trigger | Changed paper grade/furnish, surface treatment, energy/conditioning or receiver route, measurement method, reference identity/provider basis or significant source revision |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| favini-biancoflash-range | handbook | [Favini Biancoflash](https://www.favini.com/gs/en/products/biancoflash/); [Favini Embossing](https://www.favini.com/gs/en/embossing/) | Manufacturer commercial linen-pattern/white-paper class and sheet endpoint only; not environmental quantities or proof of a plant process configuration. |
| favini-embossed-tds | handbook | [Favini official technical archive](https://www.favini.com/gs/wp-content/uploads/2023/06/Biancoflash-TDS-16092022-EN-1.zip); Biancoflash-Embossed-TDS-19092022-EN.pdf, pages1-2, sheet header19.09.2022 | Premium LN2/S nominal250 column, measured grammage/moisture method identifiers and conditioning. PDF metadata modified March2026, archive name differs from sheet header. No vendor moisture/tolerance, recipe or numerical inventory default; full ISO methods not acquired. |
| ricoh-media-2021 | handbook | [Ricoh Pro C5300s/C5310s qualified media list, rev1](https://www.ricoh.ch/it/media/pro%20c5300s%20series_integrated%20media%20list_it_%20rev%201_tcm72-45456.pdf), 01/06/2021, PDF page3 | Independent equipment producer confirms actual Favini LN2/S uncoated textured250 commercial product. Historical printer case; no current printability claim, process inventory, energy or emission factor. |
| gmund-embossing-process | handbook | [Gmund Paper: Precision in Finishing and Processing](https://www.gmund.com/en_int/magazine/gmund-paper-precision-in-finishing-and-processing/), finishing machine park and technology paragraphs | Primary producer case supports embossing calenders/cutting and with-or-without-steam alternatives; cannot establish Favini machinery, temperatures, quantities or universal pass settings. |
| jrc-pp-bref-2015 | official_guidance | [JRC Production of Pulp, Paper and Board BREF2015](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf#page=708), printed670 / PDF708, §7.1.10 and preceding calender context | Official paper-finishing utility/cutting-dust/trim/dispatch mechanism, qualitatively applied to this converter. No assumed pulper return, particle split or quantitative factor. |
| ec-ef-allocation-2021 | official_guidance | [European Commission C(2021)9332 Annexes1-2](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf#page=63), Annex I §4.5, pages63-64 | Allocation hierarchy only: subdivision/system expansion, underlying physical relationship and justified alternative. No recycling credit or claim of full PEF compliance. |
