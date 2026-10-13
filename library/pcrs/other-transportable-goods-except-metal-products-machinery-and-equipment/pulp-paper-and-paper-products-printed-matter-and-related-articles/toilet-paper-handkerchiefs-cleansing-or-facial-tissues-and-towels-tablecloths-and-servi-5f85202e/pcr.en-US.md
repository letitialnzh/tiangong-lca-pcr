---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.toilet-paper-handkerchiefs-cleansing-or-facial-tissues-and-towels-tablecloths-and-servi-5f85202e
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Dry conversion of purchased creped tissue reels into toilet rolls

## 1. Scope and Applicability

This PCR covers dry conversion of purchased virgin-fibre conventional wet-pressed/Yankee dry-creped tissue parent reels into unprinted, unlotioned toilet tissue rolls: receiving/unwrapping, unwinding and ply assembly, mechanical embossing, optional documented PVAc/water bonding, perforation, rewinding onto purchased cardboard cores, log cutting, acceptance, retail/bundle wrapping and palletising. The production scope is a measured converter gate-to-gate unit; no plant recipe, annual average quantity or fixed roll/sheet weight is prescribed. The producer example supports stage separation, not a universally necessary adhesive or ply count. [sofidel-production-cycle, jrc-pp-bref-2015]

Exclude parent-reel papermaking, wood pulping/bleaching, recycled-fibre/deinking, TAD/hybrid/airlaid webs, cellulose wadding, facial tissues, napkins, towels, tablecloths, apparel, printing, lotion/fragrance application, non-PVAc converter chemicals and onsite core manufacture. These need applicable reviewed extensions rather than an automatic classification selection. A different supplied parent-reel technology cannot borrow the 32131 conventional-creped background. Onsite thermal drying/steam/gas combustion and fuel-driven handling are outside this all-electric conversion route; their presence invalidates route applicability until separately modelled with appropriate emissions evidence.

CPC3.0 32193 is broader than this product/route. The scope is narrower; the canonical mapping and its ADR govern the accepted relation. The existing 32131 parent-reel method stops before consumer converting. Its stock output and this PCR’s finished-roll output are physically different interfaces; classification and intended use alone do not make them interchangeable.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.toilet-paper-handkerchiefs-cleansing-or-facial-tissues-and-towels-tablecloths-and-servi-5f85202e |
| classification_refs | CPC 3.0 32193; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unprinted unlotioned cored toilet tissue rolls from purchased virgin-fibre CWP dry-creped parent reels |
| excluded_products | Parent stock; facial tissue/napkin/towel/tablecloth/apparel; other fibre-web/papermaking/chemical/thermal routes |
| representative_product | Accepted packed cored toilet roll with measured net sheet mass and quality |
| production_route | Purchased parent reels -> unwind/emboss/optional PVAc bonding/perforate -> core rewind/log saw -> pack/palletise |
| market_state | Finished consumer toilet roll at converter gate; cores and packaging excluded from reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply finished toilet tissue for declared sanitary function |
| How much | 1 kg accepted net finished tissue at measured converter-gate moisture |
| How well | Declared ply, basis weight, dimensions/perforations, softness, tensile, wet strength where applicable, dispersibility and buyer acceptance; mass alone does not establish equal service |
| How long or cycle | One declared converting campaign and delivery; no standard roll lifetime or sheet count |
| reference_flow_link | finished_rolls |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Toilet Paper `928c2d4c-0c44-4a6b-896f-ad51bdb2f317` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Finished toilet roll; virgin-fibre conventional dry-creped parent-reel identity and compatible supplier; campaign/grade; measured net tissue mass P and gate moisture; retained adhesive solids included; cores/wrapping excluded; ply/basis weight/dimensions/perforations and acceptance quality; actual bonding/formulation; grid voltage/location/year/interface; water source/density; packaging grades, pallet reuse, waste state/receiver and outdoor-air test scope |

Declare all required qualifiers in the data package. Missing qualifiers make the reference incomplete. The verified Toilet Paper identity describes the finished sanitary paper, not the upstream stock, without a contrary manufacturing route. It does not establish a background production dataset. Count-based sales records must be supported by actual batch weighing; no fixed mass per roll, sheet or pack is allowed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | P is the accepted net finished tissue mass at measured gate moisture including retained adhesive solids and excluding cores/packaging/rejects. Collect using cp_mass. Every row uses the same 1 kg denominator. |
| wet_dry_basis | mass-based tissue, core, adhesive/formulation, packaging and waste moisture-component ledgers | Mass | kg | Keep measured wet mass m and wet-basis moisture w for each actual stream; dry solids = m*(1-w). Do not equate delivered parent-reel kg with dry kg. Supplier backgrounds require matching moisture and composition. No fixed moisture or loss fraction. Native electricity NCV/MJ is outside this mass/moisture rule; measured auxiliary material water/solids never replace the energy numerator. |
| component_basis | adhesive, adhesive_water, water | Mass | kg | Measure formulated adhesive and retained/lost polymer and water independently. Pure-polymer kg is not emulsion kg. Volume-to-mass water conversion uses actual measured density and conditions; database secondary coefficients do not establish a site density. |
| electricity_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered kWh using exact 3.6 MJ/kWh, preserving actual provider voltage/grid and loss interface. This is unit conversion, not efficiency or a thermal-energy equivalence. |
| emission_basis | pm25, pmcoarse, pmover10, water_evaporation | Mass | kg | Only releases crossing to outdoor air; preserve size interval and water-vapour identity. Collected solid dust is waste, not an air elementary flow. Do not sum cumulative PM10/PM2.5 with exclusive intervals. No CO2 from dry cutting is presumed; retain actual upstream biogenic CO2 in linked LCI even when a GHG reporting metric omits it. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted purchased compatible virgin-fibre conventional creped tissue parent reels received at converter |
| starting_condition_role | Foreground input gate; upstream supplied production and delivery |
| product_classification_scope | CPC:3.0:32193; narrower |
| recursive_input_rule | Purchased finished toilet rolls for mere repacking are outside this production route. Internal logs/rolls/rework are conserved stage links, not recursive upstream purchases. |
| upstream_dataset_requirement | Actual supplier parent reels, cores, chemicals, water, electricity, packaging and inbound delivery with compatible state/composition/units/year/geography. Unresolved positive inputs or receiver links prevent a complete cradle-to-gate claim. |
| disclosure | Foreground gate-to-gate versus linked cradle-to-gate; submeter/grade/campaign scope; upstream link exactly once; exclusions, stock changes, waste receivers and any omitted exchanges |

An integrated paper machine may supply the parent reel internally: preserve its actual kg/moisture/grade and equal sending/receiving amounts, and include either the upstream papermaking unit once or its compatible background once. Never add both a purchased-parent-reel production burden and the same integrated pulp/forming/drying burden. Attribute conversion utilities independently. In this aggregated conversion unit, rewinding, cutting and packing retain stage meters and balances; intermediate identical toilet-roll products remain internal.

Include attributable dust collection, compressed air, electric handling, cleaning and packing; record actual maintenance supplies, wastewater and rejects. This inventory specifies the declared route, not permission to omit a real chemical, lubricant, refrigerant leak, other packaging component or pollutant. Any actual additional exchange requires a separate atomic row and compatible identity/measurement evidence before completeness is claimed. No universal cut-off; justify scope omissions and sensitivity. Onsite wastewater treatment or direct water discharge requires additional treatment inputs, pollutant-specific basic flows and sludge composition/receiver evidence, so it is not covered by an offsite-transfer row. [epa-lca-2006]

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_once | dry_conversion | Link compatible upstream parent-reel production/delivery exactly once; do not repeat integrated pulp/forming/drying loads. | sofidel-production-cycle |
| boundary_stage_links | dry_conversion | Preserve equal actual internal transfers and separate stage utility, product, water and waste records within one aggregated conversion unit. | jrc-pp-bref-2015 |

Maintain separate full physical ledgers for each cardboard core, PE wrap, corrugated box and wooden pallet: actual receipts/issues, dispatch, returns, beginning/end stocks and external waste, matched to the same campaign and net tissue P. Supplier parent-reel cores/wrapping carried with incoming tissue are component observations with compatible supplier boundaries, not unexplained extra purchases; disclose their measured incoming and discarded/returned amounts. Outgoing ancillary components remain outside P and are not allocable coproducts. Pallet dispatch/return mass and ownership/trips stay physical; an allocated reusable-pallet production service is a separate burden convention and must never scale the physical pallet masses. Record each actual packaging grade/source stratum and uncertainty rather than forcing a generic ratio.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| dry_conversion | Dry toilet-roll conversion and packing | required | Declared purchased-parent-reel route with electric utilities | Foreground production | 1 kg reference flow |

Physical stage map: reel receipt/unwrapping -> unwinding/ply assembly -> emboss/optional bond/perforate -> core rewinding/log cutting -> accepted rolls -> wrap/palletise. Internal sending/receiving links match mass, moisture/state and period. Separate stage net tissue, adhesive, core, film, box and pallet quantities; segregated paper trim/captured dust/waste cores/wrap go to actual receivers. Keep product/stock/water/carbon physical balances before allocation. The reference output is declared only once after packing; packing components are tracked in a separate physical component ledger despite exclusion from the net tissue reference quantity. [sofidel-production-cycle, jrc-pp-bref-2015]

### Process: Dry converting and packing (`dry_conversion`)

#### Inputs

##### Product flows

###### Purchased tissue parent reel (`parent_reel`)

Use virgin-fibre conventional dry-creped tissue parent reels only. Record furnish, moisture, basis weight, ply and supplier; this broad stock identity includes the declared subset, not wadding or airlaid webs. Link compatible parent-reel production and delivery once.

- Selected flow: Purchased virgin-fibre conventional dry-creped tissue parent reel `3070a34a-8d40-426e-9299-7c367b0dca21`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Purchased grid electricity (`electricity`)

Conditional 1–35 kV grid-average customer interface, source geography CN. Match actual voltage, grid/year, provider and losses. Meter unwinding, embossing/bonding, perforation, rewinding, log sawing, packing, fans, compressors and electric handling separately; retain 1 kWh = 3.6 MJ conversion. A different interface needs its own verified flow.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`.

###### Purchased finished cardboard core (`core`)

Only finished cylindrical paperboard cores of the actual roll dimensions. Tissue reference mass excludes cores; purchased-core manufacture and adhesive already within its supplier background are not repeated onsite. Retain measured core mass and receiver of discarded parent-reel cores.

- Selected flow: Finished cylindrical paperboard toilet-roll core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### PVAc polymer in converter adhesive (`adhesive`)

Conditional PVAc/water bonding only for an actual documented binary supplier formulation, CAS9003-20-7 polymer, without unsupported additional converter additives. Record one real bought adhesive lot at complete wet mass, polymer solids, carrier water, stocks, retained/lost fractions and provider reference. The polymer identity is not the whole emulsion: adhesive and adhesive_water are analytical components or constituent demands in a documented supplier-process reconstruction, not two independent converter purchases. Before use require one compatible complete-formulation supply card/provider, or a supplier reconstruction covering actual polymer/formulation manufacture, preparation/emulsification where present, auxiliaries/utilities/losses and delivery once. Actual separately bought onsite mixing ingredients/water require their own records; other actual formulation constituents need verified route/inventory extension, not assumed absence. No default concentration.

- Selected flow: Polyvinyl acetate `46c91184-28ea-4b2e-a4e7-c07f3f84369b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_adhesive`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Water carrier in PVAc adhesive (`adhesive_water`)

Conditional actual water component carried in the documented binary purchased PVAc/water formulation. Native Process water is Product/Mass/kg, for blending and formulation, at-plant GLO production mix; this conditionally matches actual formulation-carrier water, not a kg-emulsion or global background. The raw record supplies no CAS or water-quality specification. Verify actual water source, treatment/purity/grade, supplier production boundary, measured water fraction and native kg-water reference before component reconstruction. Determine component mass from actual supplied mass and validated water assay; never treat whole emulsion as water. Do not count this carrier again as onsite dilution tap water or duplicate a complete emulsion background. If actual grade/reference cannot match, retain the provider/identity substitution unresolved; CTUe or number-of-items water records cannot substitute for kg. This carrier component is analytical or a demand within the complete supplier-process reconstruction defined for adhesive; it is not independently purchased at the converter when supplied inside the adhesive. Preserve actual supplier water treatment, formulation preparation, auxiliaries, losses, utilities and delivery once with the complete supply.

- Selected flow: Water carrier in documented PVAc adhesive `64ad2a57-fc3a-482b-8592-5457dbe42803`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_adhesive`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Purchased tap water for dilution and cleaning (`water`)

Only actual separately purchased treated tap water. Reference property is Mass/kg; convert a meter volume using measured density at recorded conditions, not a database screening coefficient. Split dilution and cleaning records before aggregating this one supply stream. Cleaning is incidental, not wet papermaking. Match actual water provider and delivered basis.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### PE film for wrapping (`pe_film`)

Only actual polyethylene film, CAS 9002-88-4, including attributable retail, bundle and stretch wrap. Record grade, mass, additives and provider. Other polymers and multilayer film require separate verified atomic rows.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Finished corrugated shipping box (`box`)

Conditional actual finished corrugated shipping box. Native corrugated board boxes has Mass/kg and explicitly specifies 16.6% primary and 83.4% recycled fibre. Use this locator only with demonstrated actual supply/reference compatibility with that restriction; these source fractions are neither a factory recipe nor universal defaults. Record actual dimensions, grade, coatings/printing, fibre fractions and their assay basis, moisture, full mass, supplier geography/year and quantity definition. If actual fibre composition differs or remains unverified, obtain another compatible identity/provider and do not treat the conditional UUID as a resolved dataset. Link actual corrugated-box manufacture, not a folding-carton route or packaging bundle. No default recycled-content credit, waste ratio or avoided burden is created.

- Selected flow: Finished corrugated shipping box `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Wooden shipping pallet (`pallet`)

Conditional actual complete wooden platform; broad identity includes pallets without prescribing species or treatment. Record actual mass, type, treatment, receiver, ownership and reuse trips. One-way pallet mass versus an allocated reusable-pallet production service must match the provider; keep actual dispatch and return quantities in the physical ledger.

- Selected flow: Wooden shipping pallet `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

#### Outputs

##### Product flows

###### Accepted finished toilet rolls (`finished_rolls`)

One sole reference-product output: 1 kg accepted net finished tissue at measured gate moisture, including retained converter-added adhesive solids but excluding cores and all packaging. Record every retained component separately in the physical product ledger. Logs before sawing and rolls before packing are internal stages of this foreground unit, not extra reference-product outputs. No fixed weight per roll, sheet or pack; compare equivalent quality only.

- Selected flow: Finished unprinted unlotioned cored toilet tissue rolls, net tissue mass `928c2d4c-0c44-4a6b-896f-ad51bdb2f317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

##### Waste flows

###### Tissue trim and rejected paper to receiver (`tissue_trim`)

One paper waste stream physically segregated from cores and captured dust. Record moisture, actual adhesive contamination, weighed mass and named receiver/route; broad unspecified waste-paper identity imposes no recovery credit. Internal rework is not an external waste exchange.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Collected dry tissue dust to receiver (`captured_dust`)

Only physically captured dry cellulosic paper dust, weighed separately with composition, moisture, contamination and receiver. Broad Dust identity includes collection residues without a contrary treatment route; it is not an elementary air release or a default pure-cellulose assumption. If recycled internally, retain equal sending/receiving records and exclude that portion from external waste.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Discarded cardboard cores (`core_waste`)

Actual discarded used parent-reel cores and rejected purchased cardboard cores, physically segregated from tissue trim and boxes. Native unspecified waste-paper identity and paper/paperboard waste classification include this material family without an imposed generation or treatment route; they do not prove a core-specific background. Keep separate actual source records, dimensions, board/adhesive/coating composition, contamination, whole wet mass, moisture, stocks and receiver acceptance/reference basis. Verify each actual paperboard-core stream and downstream treatment before linking data. The packaging-trim/reject-only a318 record cannot cover used incoming cores. Do not borrow its 2% estimate, assume recycling or erase the original used-core exit.

- Selected flow: Discarded cardboard-core waste to receiver `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Discarded corrugated boxes (`board_waste`)

Actual corrugated-box scrap and damaged/removed cardboard packaging, segregated from cores and tissue trim. Native unspecified waste-paper family includes paperboard waste without an imposed packing-only generation or treatment route; provider compatibility remains conditional on the actual material. Separately reconcile incoming unpacking and outgoing packing losses, measured whole wet mass/moisture, fibre/adhesive/coating/printing contamination, stocks and actual receiver/reference basis. Verify each source stratum before aggregation; if physical composition or receiver differs, keep separate actual records. The packing-generated 722 record and its 2% source estimate cannot silently stand for incoming removed packaging or a generic PCR loss rate. No recovery yield or avoided credit is assumed.

- Selected flow: Discarded corrugated-cardboard waste to receiver `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Unwashed PE film scrap to external receiver (`pe_waste`)

One segregated actual unwashed solid PE-film stream, including removed incoming wrap or packing scrap. Native Waste solid explicitly includes discarded industrial material, without a prescribed treatment route; this is a conditional physical locator, not an exact polymer or treatment dataset. Verify actual PE species/CAS from supplier material records, film grade/form, additives, moisture, contamination/adhered material, separate source masses and legal waste status. Weigh the complete actual stream and verify receiver acceptance, transport/treatment boundary and native whole-mass reference. Do not merge PET/PP or laminated waste into this entry; separately identify other actual materials. Keep actual unwashed gate state; cleaned mechanical-recycling or optical-assembly records cannot substitute. No assumed washing, recovery yield, saleable-product status or avoided virgin-resin credit.

- Selected flow: Unwashed PE film scrap to external receiver `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### PVAc-containing cleaning wastewater to offsite treatment (`wastewater`)

Conditional separately collected liquid from actual adhesive-equipment cleaning sent to offsite treatment. Native Waste liquid explicitly includes industrial cleaning wastewater with no prescribed treatment; it conditionally locates this actual PVAc-containing mixture, not a direct water emission. Measure complete wet liquid mass by weighing or actual mixture volume times measured mixture density at its state; mixed-liquid mass is not pure-water mass. Record measured water fraction, PVAc solids and every other actual constituent/load, stock changes, transport, named receiver acceptance and treatment/reference-quantity compatibility. Keep the actual component-water balance separately; do not use a pure-water density for the mixture or enter receiver emissions as foreground discharge. No onsite paper-mill sludge or default treatment is assumed.

- Selected flow: PVAc-containing cleaning liquid to offsite treatment `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `jrc-pp-bref-2015`, `sofidel-production-cycle`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

##### Elementary flows

###### Released particles up to PM2.5 (`pm25`)

Outdoor air, unspecified subcompartment, mass of actual released particles after controls plus independently assessed fugitive releases. Use compatible PM2.5 size definition; retained bag/filter dust is excluded. No default emission factor.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method-201a-2020`, `jrc-pp-bref-2015`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Released particles PM2.5–PM10 (`pmcoarse`)

Outdoor air, unspecified. Only the mutually exclusive coarse interval: compatible cumulative PM10 minus PM2.5 from the same stream, method and time. Reject negative or incompatible differences for review; do not add cumulative PM10 again.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method-201a-2020`, `jrc-pp-bref-2015`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Released particles larger than PM10 (`pmover10`)

Outdoor air, unspecified. Independently measure this fraction or use compatible total filterable PM minus PM10 under a validated same-stream test; preserve method recovery boundaries. PM201A size tests alone do not universally establish total PM. Do not add unspecified total dust to the three size intervals.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources: `epa-method-201a-2020`, `jrc-pp-bref-2015`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Actual water evaporation (`water_evaporation`)

Water vapour emitted to outdoor air, unspecified; Mass/kg. Conditional actual net moisture loss from tissue/adhesive/dilution after subtracting product moisture, liquid transfer and stock changes. It is not steam energy or freshwater discharge. Quantify only a defensible water balance; unknown residuals remain unresolved, not forced evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual campaign amount attributable to the reference tissue divided by accepted net finished tissue output P; retain cp_mass and the linked protocol.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: `epa-lca-2006`
Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`.

## 7. Allocation and Co-product Handling

First use separately metered stages/grades and direct material records to avoid allocation. Shared compressor, fan, electric handling and packing utilities require a demonstrated causal driver (metered energy or measured equipment load and hours), a common period and a reconciliation to facility totals. If subdivision/physical causality cannot resolve shared burdens, disclose the allocation basis, alternatives and sensitivity and obtain methodological review; no automatic mass or revenue split. Waste is not automatically a co-product because it is sold, and no avoided-production credit is assumed. Genuine product status requires lawful product/waste identity, receiver-accepted specifications and actual use/function; payment alone is insufficient. A status change requires another verified Product flow identity, not relabelling a Waste exchange merely because it earns revenue. [epa-lca-2006]

Keep full unallocated mass/water/carbon balances and every actual product/waste output in the physical ledger. A separate environmental-burden ledger may allocate joint loads; its shares sum to one for the same period. Never multiply actual co-product output or an internal transfer by an environmental allocation share. Product and waste treatments require consistent supplier/receiver recycling conventions; do not combine a cut-off approach with unearned substitution credits.

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_causal | dry_conversion | Use subdivision and measured causal allocation for shared burdens; unresolved allocation requires disclosed alternatives and sensitivity review. | epa-lca-2006 |
| allocation_physical | dry_conversion | Keep full actual product/waste/internal-transfer physical quantities separate from allocated environmental loads; never scale physical outputs by allocation shares. | epa-lca-2006 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dry_conversion | finished_rolls | Foreground measurement and records | Grade/lot; accepted/rejected mass; gross pack mass; core/wrap tare; measured moisture; retained dry adhesive; roll/sheet count | Calibrated weighing of unpacked/de-cored accepted product or same-lot gross/tare reconciliation. Sample grades/ply/dimensions and use a validated moisture SOP; counts reconcile actual batch mass, never a universal piece mass. P = accepted net finished tissue campaign mass; product row 1 kg; other rows divide by P | kg | Every lot and representative moisture samples | Same declared production campaign including rejects, starts/stops and stocks | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration; original tickets; validated sampling; uncertainty and coverage |
| cp_materials | dry_conversion | parent_reel, core, pe_film, box, pallet | Foreground measurement and records | Supplier/lot/grade; actual receipt/usage/dispatch/returns; moisture; measured dry-solids/carbon fractions and method; stocks; packaging components; pallet trips | Weigh segregated materials and reconcile invoices to beginning/end stocks, internal links and dispatch component records; match actual supplier reference basis, not a generic recipe. Attributable net campaign input divided by P; physical dispatch/return quantities retained separately | kg | Each lot and stock reconciliation | Same declared production campaign including rejects, starts/stops and stocks | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration; original tickets; validated sampling; uncertainty and coverage |
| cp_utilities | dry_conversion | electricity | Foreground measurement and records | Meter start/end; stage kWh; voltage; compressor/fan load/hours; handling/packing; losses/provider | Calibrated submeter and invoice reconciliation. Shared utilities require measured causal allocation; retain separate stage and joint-load ledgers. Attributable kWh times 3.6 divided by P | MJ | Continuous meters; lot/campaign totals | Same declared production campaign including rejects, starts/stops and stocks | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration; original tickets; validated sampling; uncertainty and coverage |
| cp_adhesive | dry_conversion | adhesive, adhesive_water | Foreground measurement and records | Trade grade/SDS/CAS; supplied mass; measured solids/water fractions; retained and waste solids/water; background kg convention | Supplier lot certificate, complete wet adhesive weighing and validated solids/water assays close the component balance. Record the complete purchased lot once; component masses are analytical or supplier-reconstruction demands, not independent converter purchases. Match actual provider wet/dry reference and retain full polymer/formulation preparation, actual emulsification/auxiliaries/utilities/losses and delivery once. Require compatible complete-supply card/provider or documented supplier-process reconstruction before use; no whole-background plus component duplicate. Normalize actual attributable supplied quantities by P while retaining all raw component/stock/retention/waste records. | kg | Each formulation lot and application batch | Same declared production campaign including rejects, starts/stops and stocks | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration; original tickets; validated sampling; uncertainty and coverage |
| cp_waste | dry_conversion | tissue_trim, captured_dust, core_waste, board_waste, pe_waste | Foreground measurement and records | Stream identity; wet/dry mass; moisture; contamination; stock change; internal reuse; receiver tickets/acceptance | Separate bins and calibrated weighing; reconcile transfer notes with process loss and inventory. Distinguish paper dust, paper trim, core, board and PE film; no assumed waste ratio or receiver yield. Each actual external stream mass divided by P; internal reuse excluded | kg | Every removal and campaign balance | Same declared production campaign including rejects, starts/stops and stocks | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration; original tickets; validated sampling; uncertainty and coverage |
| cp_emissions | dry_conversion | pm25, pmcoarse, pmover10 | Foreground measurement and records | Outlet/control; size bins; method/temperature/droplets; concentration; compatible exhaust volume; runtime; fugitive scope; uncertainty/detection limits | Representative same-stream stationary-source size tests, with a valid site plan. EPA201A applies to filterable stationary emissions with its temperature/droplet constraints; condensable PM needs an applicable complementary method when relevant. It is not a fugitive or universal-total-dust method. Assess building/fugitive releases separately with an evidenced site method. Compatible concentration times actual exhaust volume and runtime, plus distinct fugitive releases; each exclusive particle-bin mass divided by P | kg | Representative grades/loads and verified operating coverage | Same declared production campaign including rejects, starts/stops and stocks | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration; original tickets; validated sampling; uncertainty and coverage |
| cp_water | dry_conversion | water, wastewater, water_evaporation | Foreground measurement and records | Dilution/cleaning meters; measured density; carrier water; product moisture; liquid solids; net evaporation; stock changes; receiver | Weigh or meter each water interface and measure density/temperature when volume is converted; segregate PVAc cleaning liquid and obtain receiver records. Reconcile water entering/leaving with actual tissue/adhesive moisture and stocks, with residual uncertainty disclosed. Each actual attributable water-interface mass divided by P; unknown balance residual stays pending | kg | Every batch/cleaning transfer and campaign reconciliation | Same declared production campaign including rejects, starts/stops and stocks | Declared converter and actual suppliers/receivers | per 1 kg reference flow | Calibration; original tickets; validated sampling; uncertainty and coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_campaign | all inventory rows | Collected attributable campaign amount / accepted net finished tissue output P; finished_rolls is 1 kg reference flow. | campaign amounts; P; cp_mass | Exchange per 1 kg reference flow | epa-lca-2006 |
| reconcile_physical | dry_conversion | Incoming material = accepted finished tissue + cores/packing dispatched + actual segregated wastes/releases + net stock change, by component and measured wet/dry state; matched internal transfers cancel. Document unexplained residuals before allocation. | cp_materials; cp_mass; cp_adhesive; cp_waste; cp_water | Unallocated physical ledger and residuals | epa-lca-2006 |
| pm_partition | pm25, pmcoarse, pmover10 | For compatible same-stream measurements only: coarse = cumulative PM10 - PM2.5; over10 = total filterable PM - PM10 when total test is valid. Preserve method uncertainty and condensable scope; reject incompatible or negative differences. | cp_emissions | Mutually exclusive outdoor-air particle masses | epa-method-201a-2020 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Physical identity, route, composition, property and unit must match; unknown UUID/provider basis remains explicit. Use exact official Chinese names when supplied. | Supplier specs/SDS; identity and quantity definitions |
| period | all inventory rows | Use one common complete campaign, disclosing grade coverage, starts/stops/rejects and stocks; do not import historical/single-site averages as universal factors. | cp_mass; cp_materials; cp_utilities |
| uncertainty | all inventory rows | Report measured/missing/estimated status, detection limits, calibration and residual uncertainties. Absence of data is not zero. | cp_emissions; cp_water; epa-lca-2006 |
| completeness | dry_conversion | Demonstrate actual chemicals, utilities, packaging, wastes, releases and provider/receiver interfaces; disallow route expansion or incomplete cradle-to-gate claims without evidence. | epa-lca-2006 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_rolls | Exactly one reference product output; P > 0, 1 kg net finished tissue and compatible quality/moisture. Counts never substitute for measured mass. | epa-lca-2006 |
| validate_boundary | dry_conversion | Parent-reel upstream included once; no repeated integrated pulp/paper/drying load; identical internal transfer sending/receiving quantities. | sofidel-production-cycle |
| validate_components | all inventory rows | Close individual tissue/core/adhesive/wrap/box/pallet/water/stock and full dispatch/return/waste physical ledgers and distinguish physical outputs from allocated environmental loads. No default glue concentration, packaging waste ratio or paper moisture. | epa-lca-2006 |
| validate_emissions | pm25, pmcoarse, pmover10, water_evaporation | Exact medium/species/size scope and amount definition; when the actual outdoor receiving subcompartment is known, use its corresponding verified identity rather than concealing that environment with unspecified air; no nested PM duplicate, no captured-dust air release; an incomplete particle test or water balance is inconclusive, not passing. | epa-method-201a-2020 |
| validate_links | all inventory rows | An unresolved UUID or incompatible provider amount for an actual positive exchange prevents complete linked dataset validation. A fully documented absent conditional exchange may be zero; missing data may not. | epa-lca-2006 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate dry converting dataset; separately identified linked cradle-to-gate model |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared toilet-roll route, compatible quality and net tissue basis after evidence and independent review |
| excluded_use | Whole CPC32193 coverage; parent-reel production; other tissue articles/routes; universal roll/sheet service comparison |
| required_metadata | Reference qualifiers; process map; suppliers/receivers; campaign/stocks; formulas; allocation and raw physical balances |
| required_quality_disclosure | UUID/provider gaps, measurement/size-test coverage, unknown residuals, uncertainty and route exclusions |
| update_trigger | Changed reel technology, composition/bonding, utility/packaging/receiver route or material measurement evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pp-bref-2015 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), section 7.1.10, printed p.670/PDF p.708. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | Dry cutting/dispatch and trim/dust scope only; no quantity or thermal/papermaking factor |
| sofidel-production-cycle | literature | Sofidel, Production cycle, publisher snapshot read 2026-10-12, steps 07–09. https://www.sofidel.com/en/about-us/production-cycle/ | Producer converting/packing stage example only; no generic recipe/consumption factor |
| epa-method-201a-2020 | method_factor | US EPA Method 201A, October 7, 2020, sections 1.1–1.6/2.1, pp.1–2. https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf | Filterable stationary PM sizing and limitations; actual site applicability, complementary/fugitive assessment required; no emissions factor |
| epa-lca-2006 | official_guidance | US EPA, Life Cycle Assessment: Principles and Practice, EPA/600/R-06/060, May 2006, Chapter 3, printed pp.28–29, publisher text. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1000L86.TXT | General data transparency and stepwise allocation guidance; historical educational method only, not current ISO text, sector recipe or survey quantity |
