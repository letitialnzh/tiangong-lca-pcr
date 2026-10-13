---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.envelopes-letter-cards-plain-postcards-and-correspondence-cards-of-paper-or-paperboard-e8c833f2
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unprinted windowless remoistenable-gummed paper envelopes

## 1. Scope and Applicability

This PCR covers one empty, unprinted, windowless paper correspondence envelope manufactured from purchased uncoated woodfree sheets, with an aqueous synthetic-resin seam dispersion and a separate aqueous dextrin-based remoistenable flap gum. It is a route specification for future measured foreground data, not a factory survey, generic formula or approval of a dataset. Qualifiers select a real stock and two real supplied formulations; no mass, grammage, adhesive percentage or yield is prescribed.

Transparent film, window apertures and window-patching gum are absent. Release strips, pressure-sensitive hot melt and latex self-seal are absent. Inside security printing, outside printing, ink, varnish, printing-plate manufacture and print wash solvents are absent. Die cutting of the envelope outline, scoring and folding remain included. Finished flap sealing by the customer, inserting a letter and postal service are outside the gate. A materially different route needs its own applicability review; optional machine stations in the sources are not a combined default recipe. [jrc-converted-paper-2018; lefavor-envelope-manufacturing; eukalin-envelope-adhesives]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.envelopes-letter-cards-plain-postcards-and-correspondence-cards-of-paper-or-paperboard-e8c833f2 |
| classification_refs | CPC 3.0 32192; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unprinted windowless gummed correspondence envelopes, empty at converter gate |
| excluded_products | Letter cards, postcards, stationery kits, writing compendiums, padded mailers, windowed/printed/peel-seal/self-seal envelopes, onsite papermaking |
| representative_product | Unprinted windowless remoistenable-gummed paper envelopes |
| production_route | Sheet die cutting on hydraulic press; blank scoring/folding; separate seam and flap gumming; electric drying; tuck-closed corrugated carton |
| market_state | Empty dry-gummed accepted envelopes with open fillable flap, ready for dispatch |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | An empty correspondence enclosure of the specified sheet and closure route |
| How much | 1 kg |
| How well | Accepted dimensions, paper grammage/moisture, seam integrity and customer-agreed rewetting/sealing performance; declare actual test method and results |
| How long or cycle | One manufacture and dispatch cycle; shelf life and mailing performance only as tested and declared |
| reference_flow_link | envelope_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Envelopes, letter cards, plain postcards and correspondence cards of paper or paperboard, boxes, pouches, wallets and writing compendiums, of paper or paperboard, containing paper stationery `e75a08f8-57bd-4900-b01b-8482a1dc7546` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | unprinted; no window/aperture; open dry remoistenable flap; uncoated woodfree grade/furnish/recycled fraction; grammage; dimensions; net moisture basis; two adhesive trade grades/solids/carrier water; seam construction; electric drying; site/year; accepted net output; packing; actual suppliers and backgrounds |

The official reference name is broader than this PCR. Metadata must bind this UUID to the physically specified envelope only. Declare every required qualifier; a matching UUID alone does not establish an applicable process dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | envelope_output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net accepted conditioned empty-envelope mass excluding dispatch packaging and contents. All cards and collection aggregation are per 1 kg reference flow; measure accepted period mass, not counts or dry fibre. |
| wet_adhesive | seam_glue_input; flap_gum_input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Wet delivered product mass and measured solids/carrier-water fractions must match the provider reference quantity. Keep component balance separate; do not link whole wet mass to a dry-polymer dataset or count its embedded water twice. |
| electric_delivery | electricity_input | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered kWh to MJ using 1 kWh = 3.6 MJ from the verified unit group; match delivered electricity and supply-loss boundaries. No thermal efficiency or steam enthalpy assumption. |
| hydraulic_volume | hydraulic_input | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | External fluid additions use volume reference; determine batch density when mass-balance conversion is needed. Existing circulating inventory and internal recirculation are not repeated inputs. |
| disjoint_pm | pm25_output; pmcoarse_output; pmover10_output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use disjoint size intervals at the same outdoor-air boundary; cumulative PM10 cannot be added to PM2.5. Retained dust and released PM are separately measured. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished uncoated sheets and separately supplied aqueous gums arriving at converter; all upstream manufacture is linked as background, not recreated as foreground |
| starting_condition_role | Foreground gate entry with required cradle-to-gate background completion |
| product_classification_scope | Only the specified envelope subset of CPC32192 |
| recursive_input_rule | Purchased same-category envelopes are outside this sheet-converting route; do not recurse or treat rework as new product input. Change scope explicitly before using purchased blanks/finished envelopes. |
| upstream_dataset_requirement | Compatible pulp/papermaking, adhesive formulation, carton, tap water, fluid, grid supply and inbound freight datasets; unresolved UUID or provider basis remains disclosed, never zero burden |
| disclosure | Declared site/year, input condition, cut-off, logistics, waste receivers, returnable glue-container background, supply utilities and product mass basis |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_converting | converting | Include press cutting, all scoring/folding/gumming, electric drying, extraction, water cleaning, material losses, maintenance additions and attributable packing/onsite storage. | lefavor-envelope-manufacturing; eukalin-envelope-adhesives |
| boundary_upstream | all inventory rows | Complete upstream paper production with applicable pulp/paper originals and matched provider conditions; no wood-product survey transferred to paper and no duplicate mill emissions at converter. | jrc-converted-paper-2018; eu-paper-bref-2015 |
| boundary_route | converting | Exclude onsite pulp/papermaking, coating, printing, windows and release liners in this selected route. No onsite boiler, steam delivery, biological effluent treatment or direct surface-water discharge is assumed. Expand and reassess actual deviations; no default zeros. | jrc-converted-paper-2018 |
| boundary_waste | all waste outputs | Record external transfers by actual waste identity and receiving treatment; internal recirculation stays internal. If offsite treatment is modelled within the study boundary, add its emissions once through that background. |  |
| boundary_completeness | all inventory rows | Audit site material/utility/maintenance/emission ledgers and supplier SDS, including lubrication, volatile additives, contaminated wipes, spills and inbound packaging. Add each present atomic exchange before dataset completeness claims; no unmeasured species can be declared absent. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| converting | Sheet cutting to packed dry-gummed envelopes | required | selected route | foreground | 1 kg |

One foreground unit retains separate stage meters and physical routing: sheet receiving → hydraulic die cutting → blank scoring/folding and seam gluing → separate flap gumming/electric drying → inspection → packing. Blank transfers have identical quantities on both internal endpoints and are not additional reference outputs. Record paper, gum solids, carrier water, product water, wastes and stocks before environmental-burden attribution. Bulk gums use supplier-owned returnable containers; container manufacture/service and delivery burdens must be included once in the supplied-material/logistics model, with returns documented.

### Process: Sheet-envelope converting (`converting`)

#### Inputs

##### Product flows

###### Sheet stock (`paper_input`)

Purchased uncoated woodfree envelope-grade sheets, with chemical-pulp furnish and actual recycled fraction declared. Record received and issued mass, moisture, grammage, dimensions and stocks; do not substitute wet web or coated paper. The broad UUID contains this uncoated grade; it does not choose a furnish, supplier or paper-production dataset.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_materials
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_materials
- Sources: lefavor-envelope-manufacturing

###### Seam dispersion (`seam_glue_input`)

One supplied wet seam formulation, applied to the side/bottom seam. Require trade grade, full supplier composition or confidential mass-accounting disclosure, resin identity, solids, carrier water, density, VOC species and supplier production basis. Weigh wet product actually consumed, keeping tank returns separate. The broad manufactured-adhesive UUID covers this one qualified supplied aqueous seam formulation; it does not define its wet reference quantity or select a supplier background. Pure PVAc identity is not the identity of the whole formulation; no default resin, concentration or coat weight.

- Selected flow: Adhesives `279b6b7f-519f-4f32-aab0-99bb61cb90dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_adhesive
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_adhesive
- Sources: eukalin-envelope-adhesives

###### Rewettable flap gum (`flap_gum_input`)

One actual supplied aqueous dextrin-based remoistenable flap formulation fits the broad manufactured adhesive family; examples of heavy substrates in the source do not limit it exclusively to construction. Require actual dextrin chemistry, any resin component, all additives, carrier water and measured solids, wet mass and compatible supplier reference quantity/production basis. The complete wet adhesive is neither dry dextrin nor the separately supplied synthetic-resin seam adhesive. Keep the two formulations and their physical quantities separate despite their shared broad UUID. Purchased carrier water is not another fresh-water purchase. No default composition, concentration or coating weight; exclude peel/seal hot melt, latex self-seal and release liners.

- Selected flow: Adhesives `279b6b7f-519f-4f32-aab0-99bb61cb90dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_adhesive
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_adhesive
- Sources: jrc-converted-paper-2018; eukalin-envelope-adhesives

###### Dilution and cleaning water (`water_input`)

Treated tap water for actual adhesive dilution and water-only cleaning. Record metered volume and measured event density for mass conversion; no database secondary density default. Water already in purchased gum stays within that gum. Require compatible supplier treatment/supply background. Recirculation is internal, not a new withdrawal.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources:

###### Delivered electricity (`electricity_input`)

User-side grid-average AC supply below 1 kV for the press, folding/gluing, electric gum dryer, extraction fan, compressors and attributable packing/storage utilities. Submeter stages and reconcile the common meter. Reference property is Net calorific value, recorded in MJ; electrical delivery uses metered kWh converted by the verified unit-group factor, not a fuel combustion efficiency. Source location of supply is CN; actual site voltage, geography, year, mix, loss boundary and provider must match or another verified flow/provider is required; higher-voltage site transformation requires an explicit additional model.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_energy
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy
- Sources:

###### Dispatch carton (`box_input`)

One actual dispatch carton including its supplied integral seam, identified by dimensions, flute/board grade, fibre composition and empty mass. Packaging mass is excluded from reference mass but its burdens are included. No default virgin/recycled fractions; a UUID requiring a fixed fibre blend cannot stand for arbitrary cartons. Specify a tuck-closed carton; additional tape, labels, film or pallets require separate actual rows and applicability review.

- Selected flow: Corrugated fibreboard dispatch box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_materials
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_materials
- Sources: lefavor-envelope-manufacturing

###### Press fluid additions (`hydraulic_input`)

One mineral-base hydraulic working fluid formulation for the die press, measured as external additions/replacement volume. Confirm grade, additives, measured density and actual mineral-base identity. Reservoir recirculation is not consumed volume; retain opening/closing fluid stocks, additions, drained volume and leakage. The broad Hydraulic Fluid UUID permits the declared mineral-base subset but supplies no density, lifetime or allocation share.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_maintenance
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_maintenance
- Sources: lefavor-envelope-manufacturing

###### Inbound freight (`transport_input`)

One actual inbound diesel-road freight service, with measured gross consignment mass including packaging, actual route km, vehicle/fuel/emission class, loading and return convention. This broad road-freight identity has no fixed truck-size restriction but does not choose a provider. Native reference is mass*distance in kg*km: multiply measured tonne-kilometres by exactly1000, or sum gross kg times km; preserve original tonnes/distance records and the same accepted-envelope denominator. Do not count service plus its embedded fuel/exhaust again. Other modes require separate reviewed rows.

- Selected flow: freight transport `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931`; unit group `3620148f-c5db-48ce-9065-a10092089aca` / kg*km
- Amount rule: Measured gross tonne-kilometres multiplied by1000 to native kg*km per 1 kg reference flow; cp_transport
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_transport
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted envelope output (`envelope_output`)

Accepted empty finished envelope, unprinted and without aperture/window, with bonded seams and dry rewettable flap gum; the flap remains open for filling. Net as-dispatched conditioned mass includes paper, retained adhesive solids and residual water, excludes carton and contents. Weigh accepted lots on calibrated scales; reject lots are not denominator output. The broad finished-product UUID is limited to this declared subset.

- Selected flow: Envelopes, letter cards, plain postcards and correspondence cards of paper or paperboard, boxes, pouches, wallets and writing compendiums, of paper or paperboard, containing paper stationery `e75a08f8-57bd-4900-b01b-8482a1dc7546`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_output
- Sources:

##### Waste flows

###### Clean paper trim (`trim_output`)

Separately collected clean unprinted unglued paper die-cut trim transferred to an identified accepting recycler. Weigh at transfer, declare moisture and receiver. This is waste paper, not saleable envelope output; internal rework never becomes an external waste flow. No automatic avoided virgin-paper credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_waste
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste
- Sources: lefavor-envelope-manufacturing

###### Gummed rejects (`reject_output`)

Separately collected paper-envelope rejects bearing the actual two adhesive formulations. Record paper/adhesive/water fractions, moisture, waste status and receiver acceptance; the broad waste-paper identity is conditional on predominantly paper waste and does not establish treatment. Keep this stream separate from clean trim, bulk glue residues and captured dust.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_waste
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste
- Sources:

###### Collected paper dust (`dust_output`)

Actual dry paper-cutting dust retained by extraction/cleaning and exported as one separately weighed industrial dust stream. Verify fibre/filler composition, moisture, actual clean state, no mixed oil/chemical sweepings and receiver acceptance. The dedicated captured-dust Waste identity does not imply emitted PM or merge dust with trim/rejected envelopes. Full captured mass and any internal return remain distinct; no assumed receiver treatment or capture efficiency.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_waste
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste
- Sources: eu-paper-bref-2015

###### Wash-liquid transfer (`effluent_output`)

Actual combined liquid effluent from water-only cleaning of the two stated aqueous gums fits the industrial-cleaning Waste liquid family only with verified liquid state, whole composition, tank origin and accepted offsite receiver. Weigh whole wet transfer or use actual V*rho(T); measure H2O fraction independently and multiply it by wet mass for the water ledger. Suspended/dissolved gum solids, additives, COD/TOC and pH are characterized separately, not summed as overlapping physical masses. No generic hazard class or treatment is inferred. This is not direct freshwater release; unused concentrated gum, gel/dry residue, oil and spills require their own physical rows when present.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_water
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources:

###### Drained working oil (`spent_hydraulic_output`)

Actual petroleum/mineral-base hydraulic fluid used for power transfer and lubrication and contaminated through use fits this used-lubricating-oil family. Require actual base-oil/additive composition, lubricating function, water/solid contamination, full as-drained kg, measured volume/density and accepting receiver. The supplied hydraulic fluid remains native Volume/m3 and its oil-reservoir/additions/drainage balance uses actual density, never a database secondary-property factor. No metal-machining origin, fixed replacement period, hazard status, regeneration or combustion credit is assumed. Oil-bearing wipes/filters and leaks remain separate actual streams.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_maintenance
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_maintenance
- Sources:

##### Elementary flows

###### Drying water release (`water_vapour_output`)

Net evaporation from aqueous gum drying/cleaning to outdoor air, unspecified, water CAS 7732-18-5. Determine from measured adhesive carrier water, added water, paper/product moisture, wastewater water fraction and stock changes, with uncertainty and ventilation discharge records. Not stratospheric release or freshwater discharge. Unknown balance stays pending; no fixed evaporation fraction.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_evaporation
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_evaporation
- Sources:

###### Fine outdoor particles (`pm25_output`)

Actual paper-cutting particulate mass at or below 2.5 micrometres reaching outdoor air, unspecified, after capture. Require outlet/fugitive-path survey and size-resolved measurements over actual operating periods. Paper/filler/adhesive composition and biogenic/fossil carbon content remain disclosed; this mass is not CO2 or a correction flow. No BREF emission factor or default zero.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: eu-paper-bref-2015

###### Intermediate outdoor particles (`pmcoarse_output`)

Outdoor-air unspecified particles above 2.5 and at or below 10 micrometres. Where measured cumulative PM10 and PM2.5 share the same method/period/outlet, this is their nonnegative difference with propagated uncertainty. Never sum cumulative PM10 again with PM2.5. Separate captured waste from mass actually released.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: eu-paper-bref-2015

###### Coarse outdoor particles (`pmover10_output`)

Outdoor-air unspecified particulate mass above 10 micrometres from actual cutting/handling releases. Derive from compatible total-particle and cumulative PM10 measurements only where methods and sampled ranges support the difference; otherwise measure this interval or retain it pending. The three intervals are disjoint, and total particles is a reconciliation check rather than another inventory sum.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured attributable amount per 1 kg reference flow; cp_air
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: eu-paper-bref-2015

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | converting | Attribute consumption with stage/batch meters and production records before sharing burdens. For mixed orders, use observed causal machine time/load or throughput only where the measured relationship supports it; document denominator, idle/changeover and excluded orders. No fixed allocation share. |  |
| allocation_physical | all inventory rows | Keep the complete physical material/water/carbon ledger and equal internal links before allocating environmental burdens. Do not multiply physical product, trim, waste or internal-transfer quantities by an allocation share. Separate burden shares from physical output masses. |  |
| allocation_waste | trim_output; reject_output; dust_output | Classify the actual receiver/legal-economic status; this route reports paper scraps as waste for offsite treatment/recycling. No automatic substitution credit or co-product share. If scraps become co-products, independently justify the allocation method and positive data before using it. |  |
| allocation_recycle | all inventory rows | Document upstream recycled-paper accounting and the downstream recycling boundary consistently. Internal paper/gum returns do not create saleable output or duplicate avoided burdens. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Sum attributable physical row quantities over the same representative period and divide by measured accepted net envelope kg; retain all raw units, stocks, stage records and physical/burden ledgers separately. Apply normalize_period to these period totals; no machine-count denominator is used.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | converting | envelope_output | measurement_record | order; accepted lot mass; tare; moisture; counts; rejected lots; dimensions; stock/dispatch reconciliation | Calibrated scales and lot acceptance records; weigh conditioned empty envelopes excluding carton/contents. Counts and sample mass are QA, not an unmeasured count-to-mass denominator. | kg | Each batch/shift; transfers and maintenance per event | Declared representative period covering all orders, startup/idle and seasonal conditions; disclose gaps | Named converter, matched lines and orders | per 1 kg reference flow | Calibration, raw logs, supplier/receiver receipts, tests, uncertainty and reconciliation |
| cp_materials | converting | paper_input; box_input | measurement_record | lot; supplier; net received/issued/returned quantities; stocks; full packaging dispatch/return/discard; moisture; carton empty mass; paper grade/grammage/furnish | Weigh issue/return stocks and cartons; reconcile invoices and stage cutting/scrap records with attributable accepted output. Keep fibre/dry-solids and as-received mass separate. | kg | Each batch/shift; transfers and maintenance per event | Declared representative period covering all orders, startup/idle and seasonal conditions; disclose gaps | Named converter, matched lines and orders | per 1 kg reference flow | Calibration, raw logs, supplier/receiver receipts, tests, uncertainty and reconciliation |
| cp_adhesive | converting | seam_glue_input; flap_gum_input | measurement_record | separate grade/lot; full formula; SDS/TDS; supplier mass basis; wet issued/returned/stocks; solids; carrier water; additives; viscosity; density; application stage | Separate wet weighings for seam and flap gums, validated solids/water tests and supplier records. Keep recovered gum internal; audit each volatile species and mass fraction. Declare uncertainty and no invented formulation. | kg | Each batch/shift; transfers and maintenance per event | Declared representative period covering all orders, startup/idle and seasonal conditions; disclose gaps | Named converter, matched lines and orders | per 1 kg reference flow | Calibration, raw logs, supplier/receiver receipts, tests, uncertainty and reconciliation |
| cp_water | converting | water_input; effluent_output | measurement_record | meter volumes; event density; dilution/cleaning location; tank stocks; effluent kg/m3; water fraction; COD/TOC; TSS; pH; additives; receiver | Meter fresh tap water; sample the actual waste tank and weigh/measure transfer before accepted offsite treatment. Separate pollutant loads from bulk waste mass and from the water balance. No water withdrawal/emission double counting. | kg; m3 | Each batch/shift; transfers and maintenance per event | Declared representative period covering all orders, startup/idle and seasonal conditions; disclose gaps | Named converter, matched lines and orders | per 1 kg reference flow | Calibration, raw logs, supplier/receiver receipts, tests, uncertainty and reconciliation |
| cp_energy | converting | electricity_input | measurement_record | meter ID; stage/shift kWh; idle/changeover; pressure-air load; dryer/fan runtime; voltage; grid supplier/year; supply loss boundary | Use calibrated process submeters and reconciled common meter, retain actual causal attribution and verified kWh-MJ conversion. Electric drying is measured, not borrowed from steam demand. | MJ | Each batch/shift; transfers and maintenance per event | Declared representative period covering all orders, startup/idle and seasonal conditions; disclose gaps | Named converter, matched lines and orders | per 1 kg reference flow | Calibration, raw logs, supplier/receiver receipts, tests, uncertainty and reconciliation |
| cp_waste | converting | trim_output; reject_output; dust_output | measurement_record | separate stream mass; moisture; paper/gum fractions; stocks; internal rework; receipt; recipient acceptance/treatment; dust-capture records | Weigh separate bins at dispatch and record composition, hazard and actual receiver. Remove internal rework from external transfer totals without losing its physical production ledger. | kg | Each batch/shift; transfers and maintenance per event | Declared representative period covering all orders, startup/idle and seasonal conditions; disclose gaps | Named converter, matched lines and orders | per 1 kg reference flow | Calibration, raw logs, supplier/receiver receipts, tests, uncertainty and reconciliation |
| cp_maintenance | converting | hydraulic_input; spent_hydraulic_output | measurement_record | press ID; fluid grade/composition; supplied litres; additions; reservoir and store stocks; drained kg/litres; density; leaks; receiver | Meter/weigh actual external additions and drained oil, survey leaks and maintain an in-use fluid balance. Attribute actual maintenance over covered use; do not equate circulating reservoir volume with consumption. | m3; kg | Each batch/shift; transfers and maintenance per event | Declared representative period covering all orders, startup/idle and seasonal conditions; disclose gaps | Named converter, matched lines and orders | per 1 kg reference flow | Calibration, raw logs, supplier/receiver receipts, tests, uncertainty and reconciliation |
| cp_transport | converting | transport_input | measurement_record | supplier leg; gross tonnes; actual road km; vehicle class; load fraction; return leg; already-included supply freight | Use bills of lading, measured consignment mass and route records; calculate freight service per leg and reconcile overlap with supplied-material backgrounds. | kg*km | Each batch/shift; transfers and maintenance per event | Declared representative period covering all orders, startup/idle and seasonal conditions; disclose gaps | Named converter, matched lines and orders | per 1 kg reference flow | Calibration, raw logs, supplier/receiver receipts, tests, uncertainty and reconciliation |
| cp_evaporation | converting | water_vapour_output | measurement_record | gum carrier water; added water; paper/product moisture; water fraction in all wastes; opening/closing stocks; ventilation discharge; uncertainty | Close actual water input-output-stock balance on water components; verify nonnegative physically plausible evaporation and discharge location. Retain unexplained residual as pending. | kg | Each batch/shift; transfers and maintenance per event | Declared representative period covering all orders, startup/idle and seasonal conditions; disclose gaps | Named converter, matched lines and orders | per 1 kg reference flow | Calibration, raw logs, supplier/receiver receipts, tests, uncertainty and reconciliation |
| cp_air | converting | pm25_output; pmcoarse_output; pmover10_output | measurement_record | outlet/fugitive location; sampled air volume/time; operating hours; controls; size fractions; captured mass; blanks; uncertainty; paper/filler/gum composition | Site-specific size-resolved air monitoring with actual method, comparable conditions and uncertainty; reconcile captured waste separately. BREF only identifies a cutting-dust question, not a sampling standard or factor. | kg | Each batch/shift; transfers and maintenance per event | Declared representative period covering all orders, startup/idle and seasonal conditions; disclose gaps | Named converter, matched lines and orders | per 1 kg reference flow | Calibration, raw logs, supplier/receiver receipts, tests, uncertainty and reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For each non-reference exchange, normalized amount = attributable total physical exchange for the period / accepted net finished envelope kg for that period. Preserve physical totals and units; only envelope_output is fixed at 1 kg. | period row totals; cp_output; applicable row protocol | exchange amount per 1 kg reference flow |  |
| component_balance_worksheet | converting physical material/water/carbon and packaging/container/oil ledgers | Keep component worksheets before normalization: dry paper issued plus dry adhesive solids equals accepted-envelope dry solids plus the dry components of external trim/rejects/dust/effluent plus stock change, with any additional measured loss disclosed. Packaging and hydraulic-fluid balances are separate. For the actual carton and each supplier-owned returnable gum container, record full receipts plus opening stock equal full dispatch/return transfers plus actual discarded mass plus closing stock. Outgoing packaging is additional to net envelopes; never shrink physical transfers by reuse or burden shares. Material providers cover container manufacture/service only when documented; avoid double-counting while preserving physical return records. Water entering in paper, supplied wet gums and added tap water equals water retained in envelopes and all wastes plus evaporation and water stock change. Determine water content separately from gross effluent kg. Record biogenic and fossil carbon fractions of actual paper and additives through product, waste and any actual air/water releases; no biogenic CO2 removal by GHG-reporting convention. No carbon reaction or direct combustion is assumed. Record uncertainty and explain residuals; a balance cannot infer unknown recipe proportions. | cp_materials; cp_adhesive; cp_water; cp_output; cp_waste; cp_maintenance; cp_evaporation; actual composition and stocks | unnormalized physical component/water/carbon and gross package/container/oil stock ledgers; residuals and uncertainty |  |
| native_quantity_worksheet | electricity_input; transport_input; pm25_output; pmcoarse_output; pmover10_output; water_vapour_output | Electricity: retain 3.6 times actual kWh in MJ. Freight: retain measured gross tonnes and actual leg kilometres, multiply their per-leg product by1000 to native kg*km, removing overlap with already included transport. PM2.5-to-10 may be compatible cumulative PM10 minus PM2.5; above-10 may be compatible total particles minus PM10. Differences need comparable size methods and nonnegative results. Water-vapour estimation uses the measured water-component balance; unresolved carrier water cannot be guessed. These supporting worksheets do not change the common reference denominator. | cp_energy; cp_transport; cp_air; cp_evaporation; cp_water; cp_output | raw native-unit worksheets and compatible particle/water evidence; normalization remains once under normalize_period |  |
| complete_period_normalization | all inventory rows | Every existing campaign, batch or lot amount rule and linked collection protocol uses one documented complete reporting-period pool for the same declared product, grade, route, configuration, site and reference state. Accepted-lot wording identifies the denominator only; retain all attributable startup, shutdown, wholly failed or zero-output batches, rejects, work in progress and rework in the raw native-unit numerator records. Count reworked reference product once only when finally accepted. Sum each attributable exchange over this matched pool, divide once by its strictly positive accepted reference-product quantity in the declared denominator unit, and scale to the declared reference quantity. Do not average batch ratios, drop a failed batch, pool unrelated products/periods or replace native numerator units. If the entire matched pool has no accepted output, retain the unnormalized absolute inventory and require review; issue no normalized result or fabricated output. Preserve stock/return and physical-transfer ledgers independently of burden allocation; allocation never removes already-incurred failed/rework activity. | all linked raw collection protocols; accepted reference-product pool; stock and rework links | native exchange unit per declared reference quantity; zero-output pool remains unnormalized |  |





### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Verify physical composition/state, supplier and receiver reference basis separately from UUID identity; empty UUID is explicit missing linkage. | Supplier grade/formula, raw identity and unit records, receiver acceptance |
| quality_coverage | converting | No generic recipe, yield, moisture, density, emission factor or background selected from historical/single-factory observations; use actual period coverage and uncertainty. | Site protocols, logs and balances |
| quality_sources | converting | JRC draft is qualitative context, BREF applies to pulp/paper and paper finishing, producers establish described capabilities only. Foreground measurement remains required; source dates and conditions must be disclosed. | Located originals with bounded applicability |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validation_route | envelope_output | Require every declared qualifier and reject data from windows, printed/security-coated stock, peel-seal, latex self-seal or onboard papermaking unless separately reviewed. The broad reference name never expands scope automatically. |  |
| validation_denominator | all inventory rows | Exactly one reference product output is 1 kg accepted net conditioned empty envelopes. All collection/aggregation/inventory bases use this same denominator; intermediate blanks remain internal. |  |
| validation_balance | converting | Reconcile physical paper/adhesive/water/carbon and separate oil/packaging stocks before burden attribution; identify all residuals and uncertainties. Negative incompatible PM differences or unexplained stock loss remain pending. |  |
| validation_linkage | all inventory rows | UUID identity alone does not establish a provider dataset. Verify complete route, grade, reference property/unit, moisture/concentration, geography/year and treatment boundary. Blank identities and unsupported bases remain disclosed gaps, not matched backgrounds or zeros. |  |
| validation_emissions | all elementary outputs | Require actual outlet/medium/species/size evidence; separate air releases from captured waste and bulk effluent transfers. No size double counting, correction-flow substitution, unmeasured zero or biogenic-CO2 deletion. Expand actual chemistry/combustion route inventory before completeness claims. | eu-paper-bref-2015 |
| validation_readiness | converting | This candidate methodology is unreviewed. A quantified dataset is incomplete until foreground protocols, supplier formulas, unresolved flow/provider links, actual emissions and receiver acceptance are supplied; methodology authorship is not scientific approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | After data completeness checks: supplier-specific unprinted windowless gummed envelope manufacture, per 1 kg net gate output |
| excluded_use | All CPC32192 products by label alone; postal service; printed/windowed/liner variants; Ecolabel certification; uncollected recipe; approval or universal benchmark |
| required_metadata | Reference qualifiers, source scope, measured period, site, process map, physical balances, allocation method, raw protocols, backgrounds and waste treatment |
| required_quality_disclosure | Independent review absent; missing identities/providers/measurements, uncertainty, exclusions, chemical/particulate completeness and representativeness |
| update_trigger | Paper grade/furnish, either adhesive formulation, window/printing/closure route, energy supply, transport mode, output quality or waste treatment changes |

## 11. Data Sources

| source_id | Type | Source and locator | Reference | Used for |
| --- | --- | --- | --- | --- |
| jrc-converted-paper-2018 | official_guidance | JRC Draft Preliminary Report: Revision of EU Ecolabel Criteria for Converted Paper Products, November 2018; section 4.2.1.2, PDF54-55 / printed52-53 | https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/contentype/product_group_documents/1581681202/Preliminary%20report_final.pdf | Qualitative substrate/converting and closure/window distinctions; historical draft, no current legal requirement or formula/factor |
| eu-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board BREF, 2015; 7.1.10, PDF708 / printed670 | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Upstream paper scope and qualitative cutting-dust investigation only; mill broke return is not an envelope-converter default; no particle-size factor |
| lefavor-envelope-manufacturing | extension_guidance | Lefavor Envelope Company, Manufacturing Process, Steps1-4; undated producer original | https://www.lefavor.com/manufacturing | Sheet die cutting, blank folding/gluing and dispatch capability; a single producer, no generic sheet count, speed, input quantity or mandatory optional printing |
| eukalin-envelope-adhesives | extension_guidance | EUKALIN, Envelopes, rigid and catalogue envelopes; Side seam/bottom seam gumming and Seal flap gumming sections; undated producer original | https://www.eukalin.de/en/applications/envelopes/ | Aqueous synthetic dispersion seam function versus dextrin remoist flap function; no actual supplied full formula, solids or coat-weight default |
