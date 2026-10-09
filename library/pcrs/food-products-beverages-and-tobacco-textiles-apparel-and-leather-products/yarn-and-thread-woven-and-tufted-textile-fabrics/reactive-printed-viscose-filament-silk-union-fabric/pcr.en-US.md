---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.reactive-printed-viscose-filament-silk-union-fabric
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Reactive-printed viscose-filament/silk union woven fabric

## 1. Scope and Applicability

This method covers foreground manufacturing of accepted net printed union woven fabric from purchased unprinted fabric already ready for printing: reactive digital printing, pre-drying, steam fixation, wash-off, drying, inspection and packing. Applicability requires exactly two textile fibre components: viscose regenerated-cellulose continuous-filament yarn and degummed natural-silk continuous-filament yarn. Viscose is the principal fibre, with less than 85% man-made filament by dry textile-fibre mass; silk is the smaller component. Supplier pretreatment must be compatible with the actual reactive ink; no on-site degumming, desizing or print pretreatment is assumed. Warp and weft yarn composition and filament state must be traceable. A factory lacking confirmation of these fields cannot use this method.

These are candidate applicability conditions, not facts retroactively attributed to the official example. The Hong Kong official printed p. 11 example, 82% rayon filament/18% silk woven fabric, printed, establishes a concrete printed two-component family. That ratio is neither a default recipe nor proof of dry basis or a specific rayon family. WCO distinguishes artificial from synthetic fibres; rayon must not be called synthetic staple. The CPC 26720 threshold concerns such filaments, not all man-made fibres combined. Actual factory evidence must confirm family, yarn state, composition and printing compatibility before instantiation. [hk-common-product-names-2026; wco-hs-2022-chapter-54; un-cpc-3-0-notes-2025]

The distinct method relationships are cellulose/protein compatibility during wet printing, specified degumming and pretreatment state at receipt, component dry masses and differing wash-off losses, retained ink/finish solids and final conditioned net mass. The silk-principal fabric method excludes fabrics principally of other fibres; the ordinary filament method explicitly requires at least 85%; artificial-staple methods do not substitute for continuous-filament union fabric. Their finished-product identities are not adopted, and conceptual reuse of general weaving rules does not provide this printing-manufacturing method.

Excluded are other rayon families, acetate/triacetate, lyocell or cupro, unspecified-family rayon, staple yarn, spun silk waste, unde-gummed silk, other co-fibres, multifibre recipes, pile/net/high-tenacity special fabrics, coating and non-reactive printing. Routes with on-site weaving, degumming, desizing, pretreatment, wastewater treatment or fuel combustion require a method extension and complete atomic inventory matching actual stages; they are not implicit here.

This method applies to artificial-filament-principal/silk-minority fabric only when its actual viscose continuous filaments, continuous natural silk, degumming, incoming state and reactive-print conditions satisfy the declared scope. PET filament/cotton, viscose filament/cotton, PET/viscose, artificial filament/spun rayon, acetate or triacetate/PET, PP/flax, wool/filament and unspecified multifibre materials are outside this method. Staple-principal and special fabrics do not qualify merely because they contain filaments. This method does not cover the whole CPC 26730 leaf.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.reactive-printed-viscose-filament-silk-union-fabric |
| classification_refs | CPC 3.0 26730, Other woven fabrics of man-made filament yarn; narrower contextual relation |
| covered_products | Reactive-printed viscose-filament-principal/degummed natural-silk-minority union fabric satisfying the two-component dry-basis and incoming-state gates |
| excluded_products | Fabrics failing the family, yarn-state, composition, incoming-state or route conditions in section 1 |
| representative_product | Reactive-printed viscose-filament/silk union woven fabric |
| production_route | Purchased ready-for-print fabric → reactive digital print → pre-dry → steam → wash-off → dry → inspect/pack |
| market_state | Accepted net printed fabric at the manufacturing gate; moisture, retained finish and packaging declared separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and acceptance of reactive-printed union fabric satisfying this method |
| How much | 1 kg |
| How well | Declared conditioning state; composition, dimensions, print and integrity accepted against actual buyer/manufacturer specification |
| How long or cycle | One manufacturing cycle ending at gate acceptance; no service-life claim |
| reference_flow_link | `finished_printed_union` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Reactive-printed viscose-filament/silk union woven fabric |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site and period; viscose family and production route; warp/weft yarns and continuous-filament state; natural-silk origin and degumming state; two-component dry fibre masses and fractions; desizing and supplier pretreatment state; reactive ink SKU and compatibility; moisture measurement and conditioning protocol; retained non-fibre solids; measured accepted net mass; buyer acceptance specification/results; boundary and effluent handover; actual voltage/geography; packaging separate |

Missing required qualifiers make a foreground data package incomplete. Reference mass includes water at the declared delivery state and actual retained print/finish solids, excludes packaging, and is not dry fibre mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_fabric_mass` | finished_printed_union | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured accepted net fabric mass Q_f under cp_final as the sole denominator for every exchange; subtract measured core/wrapping tare. |
| `dry_component_scope` | prepared_union_fabric; finished_printed_union | Mass | kg | Check principal fibre, below-85% threshold and warp/weft state using the two dry fibre masses after removing water and retained non-fibre solids. Wet fabric mass, all man-made fibres or ink solids cannot serve as that threshold denominator. |
| `meter_units` | all inventory rows | Mass; Net calorific value | kg; MJ | Preserve public reference properties. Convert electricity kWh at 3.6 MJ/kWh; convert volume using recorded density; convert area/length using measured net mass and area/length from the same lot, never a default areal mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased unprinted two-component union fabric already desized, with specified degumming and supplier pretreatment complete; purchased inks, water, electricity and steam at facility receipt |
| starting_condition_role | Starting point of printing foreground manufacturing, not fibre production |
| product_classification_scope | Only the family qualified in section 1; 26730 is broader classification context, with exact CPC 3.0/HS correspondence still requiring verification |
| recursive_input_rule | Retain unprinted, specified prepared input state and a distinct upstream dataset; never recursively substitute this printed finished reference as incoming fabric |
| upstream_dataset_requirement | Link compatible supplier data for both yarn productions, silk degumming, weaving and incoming pretreatment; link actual electricity, water, steam, ink, packaging and waste-treatment routes |
| disclosure | This is specified incoming state to gate manufacturing foreground, not a fully traced cradle-to-gate inventory; disclose outsourcing, exclusions, gaps and effluent handover |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_print_state` | print_fix; wash_dry | Retain post-print steaming and wash-off/drying; dry greige-fabric manufacture cannot replace evidence for a printed product. Supplier incoming pretreatment state must be explicit. | `dystar-reactive-printing`; `aleph-reactive-printing` |
| `boundary_split_upstream` | all processes | Fibre production, sericin removal, spinning, weaving and purchased-fabric pretreatment belong to explicit upstream links, never presumed collected on site. Ink is a formulated-product input; do not duplicate its carrier water or dyes as supplied inputs. |  |
| `boundary_external_treatment` | reactive_wash_effluent; aqueous_ink_purge | Foreground ends at handover to external treatment; link downstream treatment separately. Wastewater is not a water resource and uncollected treatment emissions must not be assumed. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `print_fix` | Reactive printing, pre-drying and steam fixation | required | Declared route of this method | Reactive printing, pre-drying and steam fixation | per 1 kg reference flow |
| `wash_dry` | Wash-off and drying | required | Declared route of this method | Wash-off and drying | per 1 kg reference flow |
| `inspect_pack` | Inspection and packing | required | Declared route of this method | Inspection and packing | per 1 kg reference flow |

All three stages use accepted final net fabric as the normalization denominator. Conditional exchanges require evidence of actual occurrence or absence; unknown quantities are not zero. Add an individual atomic row and protocol for every other actual ink, cleaning agent, wash auxiliary or finish product, identified by SKU and chemical/physical state. These candidate rows do not close the inventory.

### Process: Reactive printing, pre-drying and steam fixation (`print_fix`)

#### Inputs

##### Product flows

###### Ready-for-printing degummed natural-silk/viscose-filament union woven fabric (`prepared_union_fabric`)

Weigh purchased unprinted ready-for-printing fabric issued to this order, excluding cores and wrapping. Supplier evidence must establish viscose continuous-filament yarn and degummed natural-silk continuous-filament yarn, warp/weft arrangement, desizing and compatible supplier pretreatment. No on-site degumming, desizing or pretreatment is assumed.

- Selected flow: Ready-for-printing degummed natural-silk/viscose-filament union woven fabric
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_fabric`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabric`
- Sources: `hk-common-product-names-2026`; `dystar-reactive-printing`

###### Aleph Black M aqueous reactive textile printing ink (`reactive_ink_black`)

Conditional: include this individually supplied colour formulation only when actually used. Collect its exact SKU, SDS, carrier and dry-solids fractions, weighed issue and returns. These named manufacturer colours are candidate exchanges, not a prescribed palette or recipe; add each other actual colour or formulation as its own row.

- Selected flow: Aleph Black M aqueous reactive textile printing ink
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_ink`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ink`
- Sources: `aleph-reactive-printing`

###### Aleph Cyan aqueous reactive textile printing ink (`reactive_ink_cyan`)

Conditional: include this individually supplied colour formulation only when actually used. Collect its exact SKU, SDS, carrier and dry-solids fractions, weighed issue and returns. These named manufacturer colours are candidate exchanges, not a prescribed palette or recipe; add each other actual colour or formulation as its own row.

- Selected flow: Aleph Cyan aqueous reactive textile printing ink
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_ink`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ink`
- Sources: `aleph-reactive-printing`

###### Aleph Magenta aqueous reactive textile printing ink (`reactive_ink_magenta`)

Conditional: include this individually supplied colour formulation only when actually used. Collect its exact SKU, SDS, carrier and dry-solids fractions, weighed issue and returns. These named manufacturer colours are candidate exchanges, not a prescribed palette or recipe; add each other actual colour or formulation as its own row.

- Selected flow: Aleph Magenta aqueous reactive textile printing ink
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_ink`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ink`
- Sources: `aleph-reactive-printing`

###### Aleph Yellow aqueous reactive textile printing ink (`reactive_ink_yellow`)

Conditional: include this individually supplied colour formulation only when actually used. Collect its exact SKU, SDS, carrier and dry-solids fractions, weighed issue and returns. These named manufacturer colours are candidate exchanges, not a prescribed palette or recipe; add each other actual colour or formulation as its own row.

- Selected flow: Aleph Yellow aqueous reactive textile printing ink
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_ink`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ink`
- Sources: `aleph-reactive-printing`

###### Alternating current (`print_fix_electricity`)

Conditional identity: this consumption supply is applicable only at a Chinese facility supplied below 1 kV. Meter each stage and document geography, voltage and supply mix; select a different verified atomic electricity identity when these qualifiers do not match. Preserve its public Net calorific value energy property.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use the per-reference quantity established by `cp_print_fix_energy`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_print_fix_energy`
- Sources:

###### Steam (`print_fix_steam`)

The purchased steam identity remains unresolved: the pressure-specific public steam identity is not established for this supply, and a heat-energy identity cannot replace a mass exchange. Verify actual supplier, delivery state and pressure/temperature before linking.

Conditional: include separately purchased pipeline industrial steam when supplied to this stage; collect delivered mass, pressure, temperature, quality and condensate-return terms. Steam is a mass exchange, not an MJ heat exchange. Electric heating must not generate a fictitious steam input.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_print_fix_steam`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_print_fix_steam`
- Sources:

###### Aleph reactive-ink maintenance liquid (`reactive_ink_maintenance_liquid`)

Conditional on using the named Aleph ink system: the manufacturer specifies a companion maintenance liquid. Record the actual single supplied formulation SKU, SDS, carrier, physical state and weighed consumption. Its composition is unconfirmed; do not infer water, solvent or emissions from its name.

- Selected flow: Aleph reactive-ink maintenance liquid
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_printhead_service`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printhead_service`
- Sources: `aleph-reactive-printing`

###### Aleph reactive-ink printhead cleaning solution (`reactive_ink_cleaning_solution`)

Conditional on the actual compatible cleaning product used with this ink system: record one precise formulation and its supplier SKU/SDS, mass, issue and return. Add separate rows if the plant uses more than one cleaning formulation. This is not a combined maintenance/cleaning exchange.

- Selected flow: Aleph reactive-ink printhead cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_printhead_service`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printhead_service`
- Sources: `aleph-reactive-printing`

#### Outputs

##### Product flows

###### Liquid steam condensate returned to the external steam supplier (`print_fix_condensate_return`)

Conditional: measure an actual liquid condensate return crossing the supplier boundary, with temperature and pressure. Internal recirculation is not an external exchange. No automatic negative-water or avoided-heat credit is allowed.

- Selected flow: Liquid steam condensate returned to the external steam supplier
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_print_fix_steam`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_print_fix_steam`
- Sources:

###### Steam-fixed reactive-printed viscose-filament/silk union woven fabric before wash-off (`fixed_fabric_out`)

Weigh the internal transfer after printing, pre-drying and steam fixation, before wash-off. Retained ink and moisture differ from incoming and final fabric; record that state.

- Selected flow: Steam-fixed reactive-printed viscose-filament/silk union woven fabric before wash-off
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_transfer_fixed`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer_fixed`
- Sources: `dystar-reactive-printing`; `aleph-reactive-printing`

##### Waste flows

###### Unprinted degummed natural-silk/viscose-filament union fabric offcuts (`unprinted_union_reject`)

Conditional: segregate and weigh actual unprinted cutting or handling rejects sent to a named waste recipient. Do not describe saleable lower-grade fabric as waste without disposition evidence.

- Selected flow: Unprinted degummed natural-silk/viscose-filament union fabric offcuts
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_print_waste`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_print_waste`
- Sources:

###### Aqueous reactive textile printing ink purge (`aqueous_ink_purge`)

Conditional: weigh this physically collected aqueous reactive-ink purge sent to external treatment, and record the formulation and treatment destination. Keep separate from wash water, wiping cloths and printing-press solvent waste.

- Selected flow: Aqueous reactive textile printing ink purge
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_print_waste`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_print_waste`
- Sources:

###### Spent reactive-ink printhead cleaning liquid (`spent_printhead_cleaning_liquid`)

Conditional: record the actual separately collected spent printhead-cleaning liquid, with measured mass, composition/contamination and external recipient. If combined with another stream at a physical mixing point, explicitly describe the resulting single mixture and reconcile each source; never sum its mass twice.

- Selected flow: Spent reactive-ink printhead cleaning liquid
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_printhead_service`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_printhead_service`
- Sources:

##### Elementary flows

###### water vapour (`print_fix_water_vapour`)

Conditional measured immediate emission to air, unspecified subcompartment: quantify only a physically demonstrated evaporative release across the air boundary. Record air-release location and height; if a more specific subcompartment is known, use its matching identity. Never infer a mandatory emission factor from steam use.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_print_fix_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_print_fix_air`
- Sources:

### Process: Wash-off and drying (`wash_dry`)

#### Inputs

##### Product flows

###### Alternating current (`wash_dry_electricity`)

Conditional identity: this consumption supply is applicable only at a Chinese facility supplied below 1 kV. Meter each stage and document geography, voltage and supply mix; select a different verified atomic electricity identity when these qualifiers do not match. Preserve its public Net calorific value energy property.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use the per-reference quantity established by `cp_wash_dry_energy`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_dry_energy`
- Sources:

###### Steam (`wash_dry_steam`)

The purchased steam identity remains unresolved: the pressure-specific public steam identity is not established for this supply, and a heat-energy identity cannot replace a mass exchange. Verify actual supplier, delivery state and pressure/temperature before linking.

Conditional: include separately purchased pipeline industrial steam when supplied to this stage; collect delivered mass, pressure, temperature, quality and condensate-return terms. Steam is a mass exchange, not an MJ heat exchange. Electric heating must not generate a fictitious steam input.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_wash_dry_steam`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_dry_steam`
- Sources:

###### Steam-fixed reactive-printed viscose-filament/silk union woven fabric before wash-off (`fixed_fabric_in`)

Use the identical measured internal-transfer lot and mass recorded at print_fix, reconciling any storage loss. This is not a second purchased fabric input.

- Selected flow: Steam-fixed reactive-printed viscose-filament/silk union woven fabric before wash-off
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_transfer_fixed`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer_fixed`
- Sources:

###### Water, tap (`wash_tap_water`)

Collect supplied tap-water mass for reactive-print wash-off and documented line washing. Meter supplied volume with actual density and temperature if mass is not directly measured; record quality. This technological input is not elementary freshwater extraction.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_wash_water`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_water`
- Sources: `dystar-reactive-printing`; `aleph-reactive-printing`

#### Outputs

##### Product flows

###### Liquid steam condensate returned to the external steam supplier (`wash_dry_condensate_return`)

Conditional: measure an actual liquid condensate return crossing the supplier boundary, with temperature and pressure. Internal recirculation is not an external exchange. No automatic negative-water or avoided-heat credit is allowed.

- Selected flow: Liquid steam condensate returned to the external steam supplier
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_wash_dry_steam`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_dry_steam`
- Sources:

###### Washed and dried reactive-printed viscose-filament/silk union woven fabric before inspection (`washed_fabric_out`)

Weigh washed and dried internal fabric before final acceptance, recording retained non-fibre solids and moisture. Reconcile separately measured wash-off losses from both fibre components and ink solids.

- Selected flow: Washed and dried reactive-printed viscose-filament/silk union woven fabric before inspection
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_transfer_washed`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer_washed`
- Sources:

##### Waste flows

###### Reactive-print wash-off wastewater sent to external treatment (`reactive_wash_effluent`)

Measure this actual liquid effluent at the external treatment handover, with dissolved/suspended solids, sampling and recipient records. Keep quantity in kg; volume requires recorded density. Treatment is a separate linked service, not an elementary emission of freshwater.

- Selected flow: Reactive-print wash-off wastewater sent to external treatment
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_effluent`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `dystar-reactive-printing`; `aleph-reactive-printing`

##### Elementary flows

###### water vapour (`wash_dry_water_vapour`)

Conditional measured immediate emission to air, unspecified subcompartment: quantify only a physically demonstrated evaporative release across the air boundary. Record air-release location and height; if a more specific subcompartment is known, use its matching identity. Never infer a mandatory emission factor from steam use.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_wash_dry_air`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wash_dry_air`
- Sources:

### Process: Inspection and packing (`inspect_pack`)

#### Inputs

##### Product flows

###### Alternating current (`inspect_pack_electricity`)

Conditional identity: this consumption supply is applicable only at a Chinese facility supplied below 1 kV. Meter each stage and document geography, voltage and supply mix; select a different verified atomic electricity identity when these qualifiers do not match. Preserve its public Net calorific value energy property.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use the per-reference quantity established by `cp_inspect_pack_energy`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inspect_pack_energy`
- Sources:

###### Washed and dried reactive-printed viscose-filament/silk union woven fabric before inspection (`washed_fabric_in`)

Match the wash_dry internal transfer; do not count upstream printing a second time.

- Selected flow: Washed and dried reactive-printed viscose-filament/silk union woven fabric before inspection
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_transfer_washed`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transfer_washed`
- Sources:

###### Cardboard tube or Paper core (`paperboard_core`)

Conditional: weigh actual cylindrical paperboard roll cores used for dispatch. Declare dimensions, reuse and issue/return records; packaging mass is outside net fabric reference mass. The official English synonyms denote one physical core.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_packaging`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Low-density polyethylene foil (PE-LD) (`ldpe_wrap`)

Conditional: include plain non-cellular, non-reinforced, non-laminated LDPE wrapping only when actually used; weigh issued mass less returns. Other polymer or laminated wrapping requires a different atomic exchange.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_packaging`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### corrugated board boxes (`corrugated_box`)

Adopt this specific box identity only with supplier evidence of its 16.6% primary-fibre/83.4% recycled-fibre composition and matching manufactured construction. These proportions define identity applicability, not a default factory recipe; other boxes require a matching identity.

Conditional: weigh actual corrugated dispatch boxes, excluding fabric and cores, using weighed box net mass if procurement is by count.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_packaging`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

#### Outputs

##### Product flows

###### Reactive-printed viscose-filament/silk union woven fabric (`finished_printed_union`)

Accepted net printed fabric at the gate, without core or wrapping, at recorded conditioning moisture and retained finish. Document buyer/manufacturer acceptance for composition, print result, dimensions and fabric integrity without inventing universal performance thresholds.

- Selected flow: Reactive-printed viscose-filament/silk union woven fabric
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final`
- Sources:

##### Waste flows

###### Washed reactive-printed viscose-filament/silk union fabric rejects (`printed_union_reject`)

Conditional: weigh actual final rejected printed fabric sent to a declared waste destination, at measured moisture. Keep distinct from accepted off-grade coproducts and unprinted scraps.

- Selected flow: Washed reactive-printed viscose-filament/silk union fabric rejects
- Flow property / unit: Mass / kg
- Amount rule: Use the per-reference quantity established by `cp_final_waste`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_waste`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocate_direct_records` | all processes | Use submeters, order issue/returns and time/lot pairing to separate actual stage loads first. Shared line cleaning, startup/shutdown and site-service assignment requires measured attribution or a transparent recorded physical-causality protocol; no default mass-based energy factor. |  |
| `allocate_offgrade` | inspect_pack | Do not presume coproduct allocation when there is one accepted product and other outputs are actual wastes. Add a product output for saleable off-grade fabric and attempt subdivision first; remaining allocation must report the measured physical relationship or justified economic records and sensitivity when no physical relationship is established. No unsupported avoided-burden credit. |  |
| `allocate_internal_transfer` | fixed_fabric_out; fixed_fabric_in; washed_fabric_out; washed_fabric_in | Cancel matched internal exchanges in the aggregate boundary. Q_f is the common denominator for every stage; never add inventories separately normalized to different intermediate wet masses. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabric` | print_fix | prepared_union_fabric | foreground_record | lot_id; supplier; yarn_family; filament_state; silk_degumming_state; warp_weft; pretreatment; issued_net_kg; returned_net_kg; moisture_wet_fraction; retained_nonfibre_dry_kg; dry_viscose_kg; dry_silk_kg; residual_sericin_dry_kg; sizing_dry_kg; fibre_test_method; test_uncertainty; accepted_final_net_kg | Weigh net issued fabric minus returns with a calibrated scale. Confirm supplier yarn route, filament state, degumming and ready-to-print condition against tests. Determine dry component masses independently of incoming moisture and sizing/finish. Divide actual lot consumption by the same lot accepted final net fabric mass Q_f. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Supplier declaration, yarn traceability, component test method and uncertainty; calibrated weights. |
| `cp_ink` | print_fix | reactive_ink_black; reactive_ink_cyan; reactive_ink_magenta; reactive_ink_yellow | foreground_record | order_id; colour; SKU; SDS; print_equipment; printhead; actual_recipe; drying_temperature; drying_time; fixation_temperature; fixation_time; fixation_medium; actual_pH; compatibility_trial; density; measured_issue_kg; measured_return_kg; opening_closing_stock; water_fraction; dry_solids_fraction; retained_solids; accepted_final_net_kg | Record actual equipment, recipe, pH, drying/fixation settings and same-lot compatibility trial, then use formulation-specific stock and weighing records; deduct returned unused ink, not unrecovered purge. For volume records use measured/formulation-specific density at recorded temperature. Divide each individual formulation consumed by Q_f. Reconcile supplied carrier water, retained solids and discarded ink without counting one input twice. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Manufacturer SKU and SDS; stock and balance sheets; measured density if needed. |
| `cp_transfer_fixed` | print_fix; wash_dry | fixed_fabric_out; fixed_fabric_in | foreground_record | lot_id; transferred_net_kg; moisture_wet_fraction; retained_dry_solids_kg; start_end_stock; transfer_loss_kg; accepted_final_net_kg | Weigh the same steam-fixed lot at both transfer points with state and storage loss reconciliation. Divide transfer mass by Q_f; output and input must be identical after explicit inventory-stock/loss adjustments. Cancel the internal exchange in the aggregated manufacturing dataset. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Paired lot transfer tickets and moisture sampling. |
| `cp_transfer_washed` | wash_dry; inspect_pack | washed_fabric_out; washed_fabric_in | foreground_record | lot_id; transferred_net_kg; moisture_wet_fraction; retained_dry_solids_kg; fibre_losses_kg; transfer_loss_kg; accepted_final_net_kg | Pair washed/dried transfer weights and state measurements; divide by Q_f and cancel internal transfers after reconciliation. Do not equate this stage output with accepted final yield before inspection. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Matched transfer tickets, fibre-loss assessment and drying records. |
| `cp_wash_water` | wash_dry | wash_tap_water | foreground_record | meter_id; volume_m3; density_kg_per_m3; temperature; measured_mass_kg; water_quality; washer_id; wash_recipe; wash_temperature; wash_time; wash_pH; rinse_cycles; dryer_id; drying_temperature; drying_time; recirculation; line_cleaning; accepted_final_net_kg | Record actual wash recipe, pH, time, temperature, rinse and drying settings, then measure external supplied water only; convert any volume with documented water density at stated conditions. Keep recirculation separate. Divide supplied mass by Q_f; reconcile evaporation, effluent, retained moisture and inventories, including ink-carrier water. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Calibrated meter, density method and water-quality records. |
| `cp_print_waste` | print_fix | unprinted_union_reject; aqueous_ink_purge | foreground_record | lot_id; stream_id; net_mass_kg; moisture; composition; recipient; waste_or_sale; treatment_route; accepted_final_net_kg | Segregate each named stream and weigh its actual shipment net mass; divide each stream by Q_f. Trace recipients and classify actual waste versus saleable product; do not infer ink purge quantity from nominal ink consumption. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Weighing tickets, recipient and treatment receipts. |
| `cp_effluent` | wash_dry | reactive_wash_effluent | foreground_record | sampling_point; volume_m3; density_kg_per_m3; temperature; effluent_net_kg; COD; suspended_solids; dissolved_solids; sampling_method; fibre_losses; ink_losses; recipient; treatment_route; accepted_final_net_kg | Measure effluent sent to external treatment; volume requires measured density, no assumed factor. Take representative samples for pollutant and solids characterization and trace the treatment destination. Divide liquid effluent mass by Q_f. COD is an analytical oxygen-demand parameter, not an emitted chemical mass. Add individually verified elementary discharges only if the treatment boundary is explicitly extended. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Effluent meter, sampling/laboratory methods, recipient contract. |
| `cp_packaging` | inspect_pack | paperboard_core; ldpe_wrap; corrugated_box | foreground_record | component_id; polymer_or_board; issue_kg; return_kg; count; measured_piece_net_kg; reuse; accepted_final_net_kg | Weigh each packaging component consumed; where count records are used, multiply count by measured component net mass, stating sampling and uncertainty. Divide each physical component mass by Q_f. Do not include packaging in Q_f; document allocation of actual reusable packaging use. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | BOM and measured component weights; issue/return and reuse records. |
| `cp_final` | inspect_pack | finished_printed_union | foreground_record | lot_id; accepted_roll_ids; calibrated_scale; gross_roll_kg; measured_core_wrap_kg; accepted_final_net_kg; conditioning_protocol; moisture_wet_fraction; retained_nonfibre_dry_kg; dry_viscose_kg; dry_silk_kg; area_m2; length_m; fibre_test_method; retained_solids_test_method; moisture_test_method; uncertainty; acceptance_spec; test_results | Measure Q_f as accepted dispatch net fabric mass: gross roll mass minus measured core and wrapping, at recorded conditioning state. Confirm accepted fabric composition, dimensions, integrity and print checks against the declared buyer/manufacturer specification. Measure dry fibre masses and retained non-fibre solids separately. Output is exactly 1 kg per reference flow; no default yield, moisture or areal mass is allowed. State the analytical treatment of residual sericin, sizing and retained reactive-dye solids in dry-component measurements; validate separation and uncertainty rather than assuming complete removal. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Calibrated scale, measured tare, conditioning/test protocols, accepted lot register. |
| `cp_final_waste` | inspect_pack | printed_union_reject | foreground_record | rejected_roll_ids; net_kg; moisture; disposition; offgrade_sale; accepted_final_net_kg | Weigh rejected printed fabric net mass at stated moisture and trace disposition; divide actual waste mass by Q_f. Saleable off-grade fabric must be a separate product output and trigger the coproduct decision. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Acceptance/rejection register and destination tickets. |
| `cp_printhead_service` | print_fix | reactive_ink_maintenance_liquid; reactive_ink_cleaning_solution; spent_printhead_cleaning_liquid | foreground_record | lot_id; SKU; SDS; chemistry; physical_state; issued_net_kg; returned_net_kg; spent_liquid_kg; contamination; recipient; treatment_route; accepted_final_net_kg | Use weighing and stock records for each single supplied formulation and separately collected spent liquid. Divide each distinct mass by Q_f. Match service events to the order, include documented startup/shutdown cleaning and avoid duplicate purge/waste counts. No formulation ingredient or emission is assumed without SDS or foreground evidence. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Supplier formulation and SDS; service logs, weights and waste destination. |
| `cp_print_fix_energy` | print_fix | print_fix_electricity | foreground_record | stage_id; meter_id; kWh_open_close; measured_MJ; voltage; country; supply_mix; shared_service_meter; accepted_final_net_kg | Collect this stage electricity consumption at a calibrated submeter; reconcile startup, shutdown and shared services to the order. Preserve raw kWh, convert to MJ using 3.6 MJ/kWh, and divide by Q_f. Document measured shared-load assignment, not a default fabric-mass energy factor. | MJ | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Meter calibration, time/order log, declared country and voltage. |
| `cp_wash_dry_energy` | wash_dry | wash_dry_electricity | foreground_record | stage_id; meter_id; kWh_open_close; measured_MJ; voltage; country; supply_mix; shared_service_meter; accepted_final_net_kg | Collect this stage electricity consumption at a calibrated submeter; reconcile startup, shutdown and shared services to the order. Preserve raw kWh, convert to MJ using 3.6 MJ/kWh, and divide by Q_f. Document measured shared-load assignment, not a default fabric-mass energy factor. | MJ | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Meter calibration, time/order log, declared country and voltage. |
| `cp_inspect_pack_energy` | inspect_pack | inspect_pack_electricity | foreground_record | stage_id; meter_id; kWh_open_close; measured_MJ; voltage; country; supply_mix; shared_service_meter; accepted_final_net_kg | Collect this stage electricity consumption at a calibrated submeter; reconcile startup, shutdown and shared services to the order. Preserve raw kWh, convert to MJ using 3.6 MJ/kWh, and divide by Q_f. Document measured shared-load assignment, not a default fabric-mass energy factor. | MJ | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Meter calibration, time/order log, declared country and voltage. |
| `cp_print_fix_steam` | print_fix | print_fix_steam; print_fix_condensate_return | foreground_record | stage_id; delivered_steam_kg; pressure; temperature; steam_quality; condensate_return_kg; condensate_temperature; supplier_terms; accepted_final_net_kg | Meter each distinct steam supply and external liquid-condensate return. Divide each mass separately by Q_f. If supply billing is heat rather than mass, obtain measured steam mass and documented thermodynamic conditions; do not convert energy to steam mass with an invented factor. Link the actual supplier service without automatic condensate credit. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Supplier meter and terms; pressure/temperature/quality records. |
| `cp_print_fix_air` | print_fix | print_fix_water_vapour | foreground_record | stage_id; release_point; air_subcompartment; measured_evaporated_water_kg; balance_inputs_outputs; condensed_water; retained_moisture; uncertainty; accepted_final_net_kg | Use a documented emission measurement or validated water balance specific to this stage to quantify actual immediate water-vapour release. Account for condensate, retained water, effluent and ink carrier without double counting. Divide air-release mass by Q_f. Unknown releases remain a data gap rather than zero. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Measurement/water-balance method and uncertainty, air-medium classification. |
| `cp_wash_dry_steam` | wash_dry | wash_dry_steam; wash_dry_condensate_return | foreground_record | stage_id; delivered_steam_kg; pressure; temperature; steam_quality; condensate_return_kg; condensate_temperature; supplier_terms; accepted_final_net_kg | Meter each distinct steam supply and external liquid-condensate return. Divide each mass separately by Q_f. If supply billing is heat rather than mass, obtain measured steam mass and documented thermodynamic conditions; do not convert energy to steam mass with an invented factor. Link the actual supplier service without automatic condensate credit. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Supplier meter and terms; pressure/temperature/quality records. |
| `cp_wash_dry_air` | wash_dry | wash_dry_water_vapour | foreground_record | stage_id; release_point; air_subcompartment; measured_evaporated_water_kg; balance_inputs_outputs; condensed_water; retained_moisture; uncertainty; accepted_final_net_kg | Use a documented emission measurement or validated water balance specific to this stage to quantify actual immediate water-vapour release. Account for condensate, retained water, effluent and ink carrier without double counting. Divide air-release mass by Q_f. Unknown releases remain a data gap rather than zero. | kg | each lot; continuous meters assigned to lots | declared production period and covered lots | same site, orders and accepted final output | per 1 kg reference flow | Measurement/water-balance method and uncertainty, air-medium classification. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_net_output` | finished_printed_union | Q_f = accepted gross roll mass − measured core and wrapping mass; sum only accepted lots of the same reporting period/state, and require positive Q_f. | cp_final | kg accepted net printed fabric |  |
| `calculate_normalization` | all inventory rows | x_i = X_i / Q_f; X_i is each exchange quantity after returns, stocks and measured shared-service attribution; Q_f is final accepted net mass for the same covered lots. Every collection protocol implements this relationship. | individual protocol; cp_final | kg or MJ per 1 kg reference flow |  |
| `calculate_dry_components` | prepared_union_fabric; finished_printed_union | D_f = Q_f × (1 − w_f) − R_f; D_f = D_v + D_s; p_v = D_v / (D_v + D_s). w_f is wet-basis moisture fraction and R_f retained dry non-fibre solids. D_v and D_s require traceable component measurements, not subtraction from labels alone. Require viscose principal and p_v < 0.85; independently confirm incoming composition using its own moisture and residues. | cp_fabric; cp_final | dry fibre masses/fractions and applicability decision |  |
| `calculate_meter_conversion` | all inventory rows | Electricity E_MJ = E_kWh × 3.6; liquid m = V × rho with compatible units and matching conditions; convert area A or length L records with measured net mass/area or net mass/length from the same lot. No guessed density, default areal mass or process-page recipe values. | stage energy protocols; cp_wash_water; cp_ink; cp_final; cp_packaging | kg or MJ quantity normalized to the common denominator |  |
| `calculate_component_balance` | print_fix; wash_dry; inspect_pack | Reconcile viscose dry mass, silk dry mass, water and non-fibre dry solids separately across receipt, returns, net product, wastes, effluent, evaporation and stock changes. Never assume proportional losses of both fibres. Total-mass closure does not replace component closure. Disclose measured uncertainty and unexplained differences, with no invented universal tolerance. | all stage protocols | component balances and unexplained differences |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_applicability` | all processes | Confirm specific viscose regenerated-cellulose route, both continuous-filament states, silk source and degumming/residual sericin, warp/weft arrangement, exactly two components and dry fractions. Unknown gates mean not applicable; do not infer them from the official 82/18 example. | supplier lot records and composition/incoming tests |
| `quality_compatibility` | print_fix; wash_dry | Confirm same-lot protein/cellulose substrate, supplier pretreatment and actual reactive-ink compatibility through actual plant trials and acceptance. Collect actual temperature, time, pH, formulation and equipment settings; do not generalize webpage or experimental recipes. | plant trial, process logs and buyer/manufacturer specification/results |
| `quality_completeness` | all inventory rows | Match all actual inputs, rework, retained solids, internal losses, wastes and actual releases. Add individual atomic rows for unlisted SKUs, wash auxiliaries, maintenance fluids and site emissions. Mark each conditional row as occurring, evidenced absent or data gap; unknown is not zero. | material audit, SDS, meters and destination receipts |
| `quality_representativeness` | all processes | Record period, all relevant lots, shutdown cleaning, net yield, rework and sampling; do not pool products of differing composition, incoming state, printing route or delivery moisture, and invent no statistical ranges. | lot register, meter coverage, sampling and uncertainty |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | All applicability gates must be confirmed; below-85% man-made filaments is not below-85% total man-made fibres. Staple, unde-gummed raw silk or unknown-family packages fail the scope gate. | `un-cpc-3-0-notes-2025`; `wco-hs-2022-chapter-54` |
| `validate_net_basis` | all inventory rows | Reference product name exactly matches final output; every row and protocol uses per 1 kg reference flow. Measured net mass is positive, moisture/retained solids/packaging tare traceable, and internal transfers paired without double counting. |  |
| `validate_physical_identity` | all inventory rows | Public UUID substance, origin, technological/elementary role, medium, geography, voltage, actual reference property and unit group must match. Blank UUID is an unresolved identity, never a forced name match; a data package must disclose and complete actual linkage verification. |  |
| `validate_balance_acceptance` | all processes | Complete component, ink-solids and water balances with unexplained differences and measurement uncertainty; supply actual print integrity and acceptance results, not uncollected factory quantities or supplier-page substitutes. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Specified-incoming-state reactive printing manufacturing foreground; completed actual packages may serve as secondary_dataset/background_dataset |
| downstream_use | Compatible printed union fabric inputs to apparel or other textile manufacture |
| allowed_use | Only products matching composition, filament state, degummed incoming state, pretreatment and reactive-print route |
| excluded_use | Whole-26730 coverage; substitution for silk-principal or at-least-85% man-made filament fabric; staple routes; complete cradle-to-gate claim without upstream links; health, lifetime or compliance approval |
| required_metadata | all reference qualifiers, sources, site/period; route, net yield/normalization; component tests; actual formulations; upstream/waste links; conditional rows and identity gaps |
| required_quality_disclosure | factory-data coverage/gaps, measurement uncertainty, component/water balances, acceptance records, shared-load assignment and unverified identities |
| update_trigger | changes in fibre family/composition/state, sericin residue, supplier pretreatment, ink, equipment route, electricity, effluent boundary or delivery moisture |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-notes-2025` | official_guidance | UNSD, CPC Version 3.0 explanatory notes, 30 June 2025, p. 123. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 26720 requires at least 85% by weight of such filaments; 26730 is residual. Classification context only, not recipe or accepted mapping. |
| `hk-common-product-names-2026` | official_guidance | Hong Kong Census and Statistics Department, Common Product Name 2026, printed p. 11, 54083400: 82% rayon filament/18% silk woven fabric, printed. https://www.censtatd.gov.hk/FileManager/EN/Content_93/alpha_list.pdf | Concrete printed artificial-filament/silk product example; no verified viscose family, silk state, dry basis, recipe or factory measurements. Retained document metadata identifies 2026; URL is mutable. |
| `wco-hs-2022-chapter-54` | official_guidance | WCO, HS 2022 Chapter 54, pp. 1 and 4, Note 1 and 5408.31–5408.34. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1154_2022e.pdf | Artificial versus synthetic definition and other woven artificial-filament fabrics including printed. Does not establish an exact CPC 3.0 crosswalk. |
| `dystar-reactive-printing` | extension_guidance | DyStar, Reactive Dyes in Screen Printing Application, public course overview. https://www.dystar.com/training/courses/reactive-dyes-in-screen-printing-application/ | Reactive printing on cellulosic viscose and silk/blends; printing, drying, steaming and wash-off. Public overview supports candidate sequence, not a validated union-fabric recipe. |
| `dystar-jettex-r` | extension_guidance | DyStar, Jettex R inks, manufacturer product overview. https://www.dystar.com/products/dyes/jettex-r-inks/ | Reactive digital-ink applicability to cotton, viscose and silk as substrates; neither exact two-fibre lot performance nor factory conditions are proved. |
| `aleph-reactive-printing` | extension_guidance | Aleph, Reactive Inks, manufacturer product page, Ink Colours and Processing Steps. https://alephteam.com/textile-ink/reactive-inks/ | Individual ink colours and preprocessing, printing, drying, steaming, washing and finishing. Supplier process values are not adopted as universal temperatures or recipes. |
