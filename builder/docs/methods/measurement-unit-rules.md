# Measurement and Unit Rules

Section 4 of a PCR is a rule surface, not a flow property catalog.

Add a measurement rule only when it affects one of:

- reference flow consistency
- unit conversion
- foreground data requirements
- validation behavior
- interpretation of inventory rows

Common rule patterns:

- reference product mass basis
- count-to-mass conversion for seed, packaging, or item-count data
- fertilizer product mass versus nutrient mass
- energy unit preservation and conversion
- active ingredient versus formulated product mass

Do not duplicate every flow property or unit that appears in inventory rows. Ordinary row-specific units belong in the process inventory table.

## Finite consistency check (version 1)

`inspectPcrDirectory` checks both canonical Markdown renderings. It reuses the reference flow, functional-unit
reference row link, inventory amounts/bases, measurement rules, collection protocols and calculation rules. It does
not calculate quantities, convert units automatically, or change the PCR. MJ for an electricity input and kg for an
output are different numerator units; that alone is not a conflict.

| Reference and inventory relationship | Result |
| --- | --- |
| M kg for one accepted complete machine; per-machine inventory; M has a supported collection protocol | Pass without requiring a numeric M |
| 1 kg output; per-machine collection; every applicable row explicitly uses q_item / M and the linked mass protocol | Pass |
| 1 kg output with per-machine amounts and no conversion | Error |
| Missing M measurement method, wrong conversion direction or different EN/ZH denominator | Error |
| Complex or unsupported wording/formula/scope | manual_review, incomplete coverage, nonzero target-check exit |

General repository lint adds a bounded summary warning per material PCR. It does not rewrite old records or fail
historical content solely on this new check. New author tasks and explicitly selected draft/revision work use
`npm run pcr:check -- --pcr <path> --workspace current|revision --format json`, which enforces the result. JSON details
carry `check_version: 1`, `status`, `findings`, `coverage.performed`, `coverage.skipped`, counts and completeness.
A human must assess unsupported methodology; there is no automatic waiver or formula inference in this version.

### Supported bilingual forms

These are bounded checkable forms, not default methodology to copy into every product category. Choose the actual
basis first. Symbols and ids are stable in both languages. The product noun may be machine/baler/unit (机器/打捆机/设备)
within the supported forms. Additional conditions or alternative meanings require review.

| Field | English example | Chinese example |
| --- | --- | --- |
| Reference amount/unit for one machine | `M` / `kg` | `M` / `kg` |
| Per-machine inventory basis | `per one accepted finished baler` | `每台验收成品打捆机` |
| Per-kg final basis with per-machine collection | `per 1 kg reference flow; collected per one accepted finished baler` | `每 1 kg 参考流；采集基准为每台验收成品打捆机` |
| M measurement rule (required unit kg, applies to reference product) | `M = accepted net mass of one complete baler of the same configuration in kg; collect using cp_mass.` | `M = 同一配置的一台完整打捆机的验收净质量，单位 kg；采用 cp_mass 采集。` |
| cp_mass raw fields (unit kg) | `model; configuration; serial number; accepted net mass M` | `型号；配置；序列号；验收净质量 M` |
| cp_mass collection method | `Weigh the accepted complete baler on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record.` | `使用经校准的秤称量已验收的完整打捆机，排除运输包装；核对同一配置和验收记录。` |
| Alternative recorded-mass method | `Use traceable weighing records for the accepted complete baler of the same configuration.` | `使用可追溯的称重记录核对同一配置的验收打捆机。` |
| Calculation rule normalize_mass | `q_ref = q_item / M; q_item = exchange amount per one accepted finished baler; q_ref = exchange amount per 1 kg reference flow.` | `q_ref = q_item / M; q_item = 每台验收成品打捆机的交换数量; q_ref = 每 1 kg 参考流的交换数量。` |
| normalize_mass inputs / output | `q_item; M; cp_mass` / `q_ref` | `q_item; M; cp_mass` / `q_ref` |
| Example input amount expression | `Apply normalize_mass to q_item; reference_mass; cp_energy.` | `对 q_item 应用 normalize_mass；reference_mass；cp_energy。` |
| cp_mass aggregation | `accepted net mass per machine` | `每台验收净质量` |
| cp_energy aggregation for per-machine collection | `attributable electricity / accepted balers` | `分配电量 / 验收打捆机数量` |

Set `functionalUnit.reference_flow_link` to the finished-product row id. That row must explicitly declare `M kg`
for the per-machine reference or `1 kg` for the normalized reference. In Chinese inventory amount text, use `M 千克`
or `1 千克`: the kg/千克 alias preserves the same unit and also satisfies the existing Chinese localization gate.
Input rows must name their collection protocol
and applicable calculation rule. A conversion rule's `Applies to` is the exact row id, a comma/semicolon-separated
row-id list, or `all inventory rows` / `所有清单行`; exceptions and arbitrary scope prose are not positive scope evidence.
Every named calculation rule is inspected, including unsupported names/symbols. The complete formula has exactly
three clauses: one algebraic q_ref assignment, one q_item basis definition and one q_ref basis definition; extra
calculation or conditional clauses require review. Inputs contain bare q_item, M and the named mass protocol; other
explicitly declared collection protocol ids are allowed, but prose and duplicates are not. Application uses exactly the positive
`Apply <rule_id> to q_item` / `对 q_item 应用 <rule_id>` form, optionally followed only by declared measurement/protocol
ids. Mentioning a rule inside a negation or another calculation does not establish application. Using q_item, q_ref or M
in a non-reference amount without a supported application also requires review. M must have one unambiguous definition;
packaged/gross mass alternatives and an uncalibrated scale cannot establish the required net-mass measurement.

Direct same-reference rows may use `per reference flow`, `每参考流`, or `per 1 kg reference flow` / `每 1 kg 参考流`, with
linked collection aggregation using the same declared basis. If aggregation instead divides by accepted machine count,
the per-item-to-kg conversion is still required even when the final inventory basis says 1 kg. A bare M, the word
“normalize”, an unused nearby formula or an author's success flag does not prove the relationship.

No concrete M is required in the PCR: the later data producer measures it using the stated protocol. This check
establishes the declared relationship only; it does not verify a factory's actual measurement or physical plausibility.
