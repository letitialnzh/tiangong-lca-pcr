---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.cotton-linters
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 棉短绒

## 1. 范围与适用性

本 PCR 适用于由轧花后棉籽生产棉短绒的前景数据包。棉短绒是主棉纤维经轧花从棉籽上分离后仍附着在棉籽表面的短纤维，通常在棉籽油厂或专门脱绒设施中通过机械脱绒去除。

本 PCR 适用于以头道绒、二道绒、三道绒或一次混合绒形式销售的原棉短绒或简单清洁棉短绒。覆盖棉籽接收、清理和计量、机械脱绒、短绒分离和清洁、调湿、打包或包装，以及可销售短绒包或批次的生产者门发运。

本 PCR 不覆盖纺织用原棉皮棉、棉籽本身、棉籽油、棉籽粕、棉籽壳、轧花回收棉除非作为单独副产品声明、精制棉短绒浆、纤维素衍生物、纸、无纺布、脱脂棉、化学棉产品，以及以播种为目的的酸脱绒棉籽，除非这些作业明确属于声明前景路线且以棉短绒为参考产品。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.cotton-linters |
| classification_refs | CPC 3.0:03251 exact - Cotton linters |
| covered_products | 从棉籽上去除的原棉短绒或简单清洁棉短绒；头道绒；二道绒；三道绒；一次混合绒；以打包或散装形式发运给工业、造纸、无纺布或纤维素用途的棉短绒 |
| excluded_products | 纺织用皮棉；棉籽；棉籽油、粕、壳和饼；轧花回收棉，除非声明为副产品；精制棉短绒浆；纤维素衍生物；纸；脱脂棉；成品无纺布；未以棉短绒为参考产品的酸脱绒播种棉籽 |
| representative_product | 生产者门 1 kg 净可销售棉短绒，并声明切割类型、等级、水分基准、杂质基准以及打包或散装状态 |
| production_route | 轧花后棉籽接收；棉籽清理和计量；一次或多次机械脱绒；短绒纤维分离、清洁、调湿、打包或包装；生产者门发运 |
| market_state | 原始或简单清洁的天然纤维素短纤维，通常以打包、袋装或散装形式转往下游制浆、化工、造纸、无纺布或填充用途 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 可销售原棉短绒或简单清洁棉短绒 |
| How much | 1 kg 净短绒质量 |
| How well | 符合声明的切割类型、等级、水分基准、杂质规格、打包或散装状态和买方规格 |
| How long or cycle | 一个生产批次、脱绒生产期或代表性年度生产期，并归一化到参考量 |
| reference_flow_link | `cotton_linters_at_producer_gate` |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| Reference product flow | Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass unit group 93a60a57-a4c8-11da-a746-0800200c9a66 |
| Reference unit | kg |
| Required qualifiers | 切割类型；等级或质量类别；水分基准；杂质或含杂基准；已知时的棉籽来源和棉种；脱绒路线；生产地区；批次或生产期；打包或散装状态；脱绒棉籽及其他副产品的分配方法 |

构建前景数据包时，`Required qualifiers` 中的项目必须在数据集元数据、过程说明、参考流注释、产品描述或等效字段中声明。缺少必需限定信息会导致该数据包的参考流定义不完整。

原始批次、群体、过程转移和联产品数量按原采集口径完整保留。对每个交换，先完成实际路线、期间及联产品归属，再以归属原始量 × 1 kg / 同边界同期最终合格产品质量换算为声明参考流。必须记录真实阶段产出、损失、收率和分配，不得把中间转移量固定为最终 1 kg，也不得以缺失数据假定无损失。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和可销售短绒输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考产品按净可销售短绒质量报告，不包括可重复使用托盘、货架和周转容器。 |
| `moisture_basis` | 棉籽、原短绒、清洁短绒、残余物和最终短绒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg as received，必要时 kg dry matter | 记录进厂棉籽、中间短绒和最终短绒的水分基准；不同批次水分不一致时换算到声明参考基准。 |
| `cut_type_reporting` | 参考产品和短绒过程输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg by cut type | 区分头道绒、二道绒、三道绒和一次混合绒，因为纤维长度、杂质和下游用途可能显著不同。 |
| `co_product_mass_balance` | 棉籽投入、短绒、脱绒棉籽、残余物和粉尘 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分配前核对棉籽投入与短绒、脱绒棉籽、拒收物、粉尘和水分变化。 |
| `energy_unit_consistency` | 电力、燃料、压缩空气和机械服务 | Energy | kWh 或 MJ | 将仪表、燃料记录和设备小时计算转换为 kWh 或 MJ，并说明是终端电力、燃料低位热值还是交付服务能量。 |

## 5. 系统边界

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | `ginned_cottonseed_lot_at_delinting_facility` |
| starting_condition_role | 首个前景棉籽接收、储存、清理或计量记录的边界锚点。 |
| product_classification_scope | CPC 3.0:03251 棉短绒。 |
| recursive_input_rule | 若采购输入已经是棉短绒，应作为带上游数据集的外购短绒输入建模，不在同一前景过程中递归展开本 PCR。 |
| upstream_dataset_requirement | 外购棉籽、电力、燃料、压缩空气、使用时的工艺水、包装、使用时的化学品、维护材料和进厂运输服务应使用上游数据集。 |
| disclosure | 披露棉籽来源、棉籽所有权或代加工安排、脱绒路线、脱绒次数、短绒切割类型、水分基准、杂质基准、脱绒棉籽副产品处理、适用时与棉籽壳或棉籽粕的关联、残余物去向，以及被排除的下游精制、制浆、化学转化或产品制造阶段。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_ginned_cottonseed_lot | 所有前景数据包 | 从声明的轧花棉籽批次开始前景建模；对每个跨越边界的外购投入使用上游数据集；不得为外购棉短绒投入递归重开本 PCR。 |  |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cottonseed_receipt_and_precleaning` | 棉籽接收和预清理 | required | 所有接收轧花棉籽或带绒棉籽进入脱绒边界的数据集均纳入。 | 建立棉籽批次身份、水分、进厂质量、储存和预清理损失。 | 每 1 kg 参考短绒的接收和清洁棉籽 kg |
| `mechanical_delinting` | 机械脱绒 | required | 声明头道绒、二道绒、三道绒或一次混合绒所使用的每一次脱绒均纳入。 | 从棉籽上去除短绒纤维，并形成脱绒棉籽和原短绒流。 | 每 1 kg 参考短绒的原短绒 kg 和脱绒棉籽 kg |
| `linter_cleaning_conditioning_and_baling` | 短绒清洁、调湿和打包 | required | 销售前的清洁、吸风、除尘、使用时的调湿、打包、袋装和包装纳入。 | 将原短绒转化为可销售短绒包或批次。 | 每 1 kg 参考短绒的可销售短绒 kg |
| `co_product_residue_and_dispatch` | 副产品、残余物和发运处理 | required | 产品离开前景系统前的副产品转移、残余物管理、储存、装车和生产者门发运纳入。 | 记录脱绒棉籽副产品去向、残余物、装车能耗和最终发运状态。 | 每 1 kg 参考短绒的发运可销售短绒 kg |

### Process: Cottonseed receipt and pre-cleaning (`cottonseed_receipt_and_precleaning`)

#### Inputs

##### Product flows

###### Fuzzy cottonseed received (`fuzzy_cottonseed_input`)

接收用于短绒去除的轧花后带短绒棉籽。

- Selected flow: Cottonseed, other `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- Flow property / unit: Mass / kg
- Amount rule: measured incoming cottonseed mass with moisture and lot identity, allocated to saleable linters and co-products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cottonseed_receipt_records`
- Sources: `usda-ers-natural-fibers-2006`; `usda-mrr56-cotton-linters`
- Range: Cottonseed-to-linters mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10
  - Upper: 40
  - Unit: kg cottonseed
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `usda-ers-natural-fibers-2006`; `usda-mrr56-cotton-linters`

###### Receipt and pre-cleaning electricity (`receipt_precleaning_electricity`)

输送机、棉籽清理机、风机、磁选、计量设备和储存转运使用的电力。

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured electricity or motor-hour calculation for receipt, storage movement, and pre-cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Initial pre-cleaning energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Cleaned cottonseed to delinting (`cleaned_cottonseed_to_delinting`)

经接收、储存转运和预清理后转入机械脱绒的棉籽。

- Selected flow: Cleaned cottonseed for delinting
- Flow property / unit: Mass / kg
- Amount rule: calculated from incoming cottonseed minus measured receiving rejects, adjusted for moisture where applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cottonseed_receipt_records`
- Sources:
- Range: Cleaned seed transfer screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 9
  - Upper: 40
  - Unit: kg cottonseed
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Seed cleaning rejects (`seed_cleaning_rejects`)

脱绒前去除的杂质、石块、粉尘、壳片和非棉籽物料。

- Selected flow: Cottonseed cleaning residue
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass or calculated from seed receiving mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:
- Range: Initial seed cleaning reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Mechanical delinting (`mechanical_delinting`)

#### Inputs

##### Product flows

###### Cleaned cottonseed charged to delinter (`cleaned_cottonseed_charged`)

送入头道、二道、三道或一次混合脱绒设备的清洁棉籽。

- Selected flow: Cleaned cottonseed for delinting
- Flow property / unit: Mass / kg
- Amount rule: measured seed mass charged by pass, cut type, and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delinting_pass_records`
- Sources: `cotton-inc-fiber-sourcing-2017`; `ncpa-trading-rules-2013`
- Range: Seed charged to delinter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 9
  - Upper: 40
  - Unit: kg cottonseed
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delinting electricity and mechanical service (`delinting_energy`)

短绒锯、磨擦式脱绒机、输送机、风机和除尘设备使用的电力、压缩空气或机械服务能量。

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured equipment electricity or calculated motor-hour energy for each delinting pass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Initial delinting energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kWh
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 矿物润滑油 (`delinter_maintenance_materials_lubricant`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

用于去除短绒的锯片、刷子、筛网、润滑剂和其他消耗性维护材料。

- 选定流：矿物润滑油
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance_material_records`
- Sources:

###### 钢制剥绒机锯片 (`delinter_maintenance_materials_blade`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

用于去除短绒的锯片、刷子、筛网、润滑剂和其他消耗性维护材料。

- 选定流：钢制剥绒机锯片
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance_material_records`
- Sources:

#### Outputs

##### Product flows

###### Raw cotton linters from delinting (`raw_cotton_linters`)

最终清洁、调湿和打包前从棉籽上去除的短绒纤维。

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- Amount rule: measured raw linter mass by cut type and delinting pass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
原始采集或过程口径：per mechanical delinting process output

- 归一化基准：每声明的参考流
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delinting_pass_records`
- Sources:
- Range: Raw linter output screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg raw linters
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Delinted cottonseed co-product (`delinted_cottonseed_coproduct`)

去除短绒后转入榨油、饲料、种用或其他下游处理的棉籽。

- Selected flow: Cottonseed, other `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- Flow property / unit: Mass / kg
- Amount rule: measured delinted seed mass after each pass or calculated by mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources:
- Range: Delinted seed co-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 8
  - Upper: 39
  - Unit: kg delinted seed
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Delinting dust and fines (`delinting_dust_and_fines`)

脱绒期间由吸风或地面清扫收集的粉尘、细屑、短绒碎片和种皮碎片。

- Selected flow: Cotton linter dust and fines
- Flow property / unit: Mass / kg
- Amount rule: measured collected dust and fines, or calculated from dust collector and mass balance records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:
- Range: Initial delinting dust screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fugitive fibre dust to air (`fugitive_fibre_dust_to_air`)

控制后排放到工作场所或环境空气的纤维颗粒物。

- Selected flow: Particulates, cotton fibre dust
- Flow property / unit: Mass / kg
- Amount rule: measured emissions, filter balance, permit estimate, or calculated uncontrolled dust minus captured dust
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`
- Sources:
- Range: Initial fugitive dust screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Linter cleaning, conditioning, and baling (`linter_cleaning_conditioning_and_baling`)

#### Inputs

##### Product flows

###### Raw linter input (`raw_linter_input`)

来自一次或多次脱绒过程、用于最终清洁和销售准备的原短绒纤维。

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- Amount rule: measured raw linter mass by cut type, lot, and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_linter_quality_and_baling_records`
- Sources:
- Range: Raw-to-saleable linter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg raw linters
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and baling energy (`cleaning_baling_energy`)

短绒清洁、吸风、调湿、打包、袋装和内部转运使用的电力或燃料。

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured energy or calculated equipment-hour energy for linter finishing and baling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:
- Range: Initial cleaning and baling energy screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 钢丝 (`bale_ties_and_packaging_steel`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

用于可销售短绒的打包铁丝、捆带、袋、缠绕材料、标签和其他非周转包装。

- 选定流：钢丝
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:；`cotton-bale-materials`

###### 聚乙烯薄膜 (`bale_ties_and_packaging_pe`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

用于可销售短绒的打包铁丝、捆带、袋、缠绕材料、标签和其他非周转包装。

- 选定流：聚乙烯薄膜
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:；`cotton-bale-materials`

#### Outputs

##### Product flows

###### Saleable cotton linters before dispatch (`saleable_cotton_linters`)

已清洁、调湿并打包或包装，准备储存或发运的可销售棉短绒。

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output after cleaning and baling
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_linter_quality_and_baling_records`
- Sources: `iso-14044-2006`
- Range: Fixed saleable linter output
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

###### Linter cleaning rejects (`linter_cleaning_rejects`)

整理过程中去除的杂质、壳片、粉尘、不合格纤维和被拒收的短绒部分。

- Selected flow: Cotton linter cleaning residue
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by cleaning stage, lot, and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:
- Range: Initial linter cleaning reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Co-product, residue, and dispatch handling (`co_product_residue_and_dispatch`)

#### Inputs

##### Product flows

###### Saleable linter lot to dispatch (`saleable_linter_lot_to_dispatch`)

转入发运储存和装车的可销售短绒包、袋或散装批次。

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- Amount rule: measured saleable linter mass entering dispatch storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_records`
- Sources:
- Range: Dispatch input linter screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.05
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 设备供电点的电力 (`dispatch_loading_energy_electricity`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

储存、装车和生产者门发运处理使用的叉车、输送、压缩空气、电力或燃料。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### 柴油 (`dispatch_loading_energy_diesel`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

储存、装车和生产者门发运处理使用的叉车、输送、压缩空气、电力或燃料。

- 选定流：柴油
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

#### Outputs

##### Product flows

###### Cotton linters at producer gate (`cotton_linters_at_producer_gate`)

在生产者门或发运点离开前景系统的参考产品。

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- 数量规则：1 千克
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_dispatch_records`
- Sources: `iso-14044-2006`
- Range: Fixed producer-gate reference product
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Delinted seed transferred to downstream use (`delinted_seed_to_downstream_use`)

去除短绒后的副产品棉籽，转入油籽压榨、饲料、种用或其他下游用途。

- Selected flow: Cottonseed, other `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- Flow property / unit: Mass / kg
- Amount rule: measured delinted seed mass leaving the foreground boundary or internal transfer point
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_records`
- Sources:
- Range: Delinted seed dispatch screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 8
  - Upper: 39
  - Unit: kg
  - Basis: per 1 kg saleable cotton linters
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### 损失的棉短绒 (`dispatch_losses_and_waste_packaging_linters_waste`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

产品发运前产生的短绒损失、损坏包装、清扫物和非产品废物。

- 选定流：损失的棉短绒
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:

###### 废聚乙烯薄膜 (`dispatch_losses_and_waste_packaging_pe_waste`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

产品发运前产生的短绒损失、损坏包装、清扫物和非产品废物。

- 选定流：废聚乙烯薄膜
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:

###### 废钢丝捆扎线 (`dispatch_losses_and_waste_packaging_steel_waste`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

产品发运前产生的短绒损失、损坏包装、清扫物和非产品废物。

- 选定流：废钢丝捆扎线
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
原始采集或过程口径：per 1 kg saleable cotton linters

- 归一化基准：每声明的参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources:

##### Elementary flows

## 7. 分配与副产品处理

| rule_id | 规则 |
| --- | --- |
| `cottonseed_coproduct_allocation` | 若前景设施共同生产棉短绒和脱绒棉籽，应在物理关系能反映过程因果时，按有文件依据的物理关系在短绒和脱绒棉籽之间分配接收、清理、脱绒、储存和发运共享负荷；否则采用同期价格经济分配并进行敏感性检查。 |
| `incoming_cottonseed_burden` | 外购棉籽带入上游数据集。若研究边界包含棉花轧花或脱绒前棉籽所有权，应与关联的棉花或棉籽 PCR 一致地分配上游棉籽和轧花负荷。 |
| `off_grade_linter_treatment` | 不合格短绒作为可销售物料离开系统时属于副产品；否则根据实测去向作为废物或内部返工处理。 |
| `residue_fate` | 粉尘、壳片、棉籽清理拒收物和包装废物必须按去向追踪，包括处置、堆肥、燃料利用、饲料利用或内部回收。 |

## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cottonseed_receipt_records` | `cottonseed_receipt_and_precleaning` | 进厂棉籽和清洁棉籽转移 | receiving, scale, storage, and pre-cleaning record | supplier; lot_id; cotton_species_or_variety; seed_mass; moisture; trash; storage_bin; receipt_date; cleaned_seed_mass | weighbridge, scale ticket, receiving note, storage ledger, or seed cleaner log；原活动量汇总：汇总进厂批次，并在扣除拒收物和水分调整后计算清洁棉籽转移量 | kg seed, percent moisture, percent trash | 每批或每生产期 | 代表性生产年或声明生产期 | 接收场地、储仓或棉籽批次 | 每声明的参考流 | 地磅校准、接收单、储存台账和水分测试 |
| `cp_delinting_pass_records` | `mechanical_delinting` | 投入棉籽、脱绒次数、原短绒输出和通过率 | delinter run sheet, production log, or control-system record | pass_number; cut_type; seed_mass_charged; raw_linter_mass; delinted_seed_mass; runtime; equipment_id; moisture | batch sheet, linter run sheet, plant historian, or operator log；原活动量汇总：核对投入棉籽与原短绒、脱绒棉籽、粉尘和水分变化 | kg, hour, percent moisture | 每次通过或每批 | 声明生产期或生产年 | 脱绒线、通过次数和棉籽批次 | 每声明的参考流 | 生产日志、称量记录、水分测试和质量平衡表 |
| `cp_linter_quality_and_baling_records` | `linter_cleaning_conditioning_and_baling` | 原短绒、清洁短绒、等级、打包和包装 | quality, cleaning, conditioning, bale press, or finished-goods record | cut_type; grade; raw_linter_mass; cleaned_linter_mass; moisture; impurity; bale_id; bale_mass; packaging_mass | bale scale, lab test, visual grading record, product specification, or finished-goods ledger；原活动量汇总：汇总合格包净质量，并将所有前景行归一化到净可销售短绒 | kg, percent moisture, percent impurity | 每包、每批或每生产期 | 声明生产期或生产年 | 整理线、打包机或仓库 | 每声明的参考流 | 打包单、实验室记录、分级记录、成品台账和可用时的分析证书 |
| `cp_energy_records` | all processes | 电力、燃料、压缩空气和机械服务 | meter, invoice, fuel issue, compressed-air allocation, or equipment-hour record | carrier; quantity; unit; equipment_id; process_id; runtime; date; allocation_basis | meter reading, invoice reconciliation, equipment-hour calculation, or submeter；原活动量汇总：优先分配直接计量能源，其次按运行时间、吞吐量或可销售短绒质量分配 | kWh, MJ, L fuel, kg fuel, equipment-hour | 月度、每批或每生产期 | 代表性生产年或生产期 | 生产线、设备、设施或过程区域 | 每声明的参考流 | 仪表校准、发票、燃料日志和分配表 |
| `cp_maintenance_material_records` | `mechanical_delinting` | 锯片、刷子、筛网、润滑剂和维护消耗品 | inventory issue, maintenance work order, or equipment log | material_type; quantity; unit; equipment_id; replacement_date; process_id; allocation_basis | work order, stock issue, maintenance record, or supplier note；原活动量汇总：按脱绒机运行时间、棉籽吞吐量或短绒质量分配消耗品 | kg, item count, L lubricant | 每次更换或月度 | 代表性生产年或生产期 | 脱绒线或设备 | 每声明的参考流 | 维护日志、库存出库记录和供应商规格 |
| `cp_packaging_records` | `linter_cleaning_conditioning_and_baling` | 打包铁丝、捆带、缠绕材料、袋、标签和非周转包装 | bill of materials, purchase, warehouse issue, or bale record | material_type; unit_mass; units_used; bales_covered; reusable_flag; supplier; waste_amount | BOM, packaging issue, bale press record, or supplier specification；原活动量汇总：非周转包装按净可销售短绒质量汇总 | kg material, item count | 每批或月度 | 生产年或生产期 | 打包机、仓库或发运区 | 每声明的参考流 | 采购记录、BOM、供应商规格和出库记录 |
| `cp_coproduct_records` | `mechanical_delinting`; `co_product_residue_and_dispatch` | 脱绒棉籽和可销售不合格短绒副产品 | co-product transfer, sales, or internal use record | co_product_type; mass; moisture; destination; sale_price_if_used; internal_transfer; date | scale ticket, transfer note, sales invoice, internal transfer ledger, or downstream production record；原活动量汇总：汇总副产品数量，并在需要时计算分配系数 | kg, percent moisture, currency per kg where used | 每批或月度 | 生产年或生产期 | 棉籽转移点、仓库或客户批次 | 每声明的参考流 | 称量记录、发票、转移单和分配表 |
| `cp_residue_records` | all processes | 棉籽清理拒收物、粉尘、细屑、不合格废物和废包装 | waste, residue, disposal, composting, fuel-use, or rework record | residue_type; quantity; moisture; fate; disposal_route; internal_reuse_flag; date; process_id | waste ticket, dust collector log, residue measurement, disposal manifest, or rework ledger；原活动量汇总：按去向汇总残余物，并将可销售残余物关联到副产品规则 | kg, percent moisture | 每批、月度或生产期 | 生产年或生产期 | 接收、脱绒、整理、仓库或废物处理区域 | 每声明的参考流 | 处置单、废物联单、除尘器日志和返工记录 |
| `cp_air_emission_records` | `mechanical_delinting`; `linter_cleaning_conditioning_and_baling` | 无组织和受控纤维粉尘排放 | filter balance, permit estimate, stack test, or dust collector record | captured_dust_mass; filter_efficiency; emission_factor_if_used; airflow; operating_hours; control_device | stack test, filter weighing, permit calculation, or dust collector log；原活动量汇总：以未控制或产生粉尘减去捕集粉尘和保留残余物计算排放粉尘 | kg particulate, m3 air, hour | 测试事件、月度或生产期 | 代表性生产年或许可期 | 除尘器、脱绒线、整理线或设施 | 每声明的参考流 | 烟囱测试、滤材日志、许可文件和计算表 |
| `cp_dispatch_records` | `co_product_residue_and_dispatch` | 最终短绒发运和装车 | dispatch ticket, inventory release, loading record, or bill of lading | lot_id; bale_id; net_mass; packaging_state; dispatch_date; customer_or_destination; loading_energy_link | finished-goods ledger, bill of lading, loading ticket, or dispatch record；原活动量汇总：核对成品、发运可销售短绒质量和发运损失 | kg, bale count | 每个发运批次 | 生产年或生产期 | 仓库、装车口或生产者门 | 每声明的参考流 | 提单、成品台账、装车单和库存核对 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_linter_mass` | all inventory rows | normalized amount = row amount / net saleable linter mass dispatched within the same boundary and period | row amount; net saleable linter mass from `cp_dispatch_records`; boundary and period definition | amount per 1 kg saleable cotton linters |  |
| `cottonseed_linter_mass_balance` | cottonseed, raw linters, cleaned linters, delinted seed, residues, and dust | incoming cottonseed mass = saleable linters + delinted seed + residues + dust + moisture change within stated tolerance | cottonseed receipt; raw linter output; final linter output; delinted seed; residues; moisture | reconciled mass balance and QA flag | `usda-ers-natural-fibers-2006`; `usda-mrr56-cotton-linters` |
| `cut_type_yield_tracking` | first-cut, second-cut, third-cut, and mill-run linters | record each pass separately; if passes are blended, calculate weighted average grade, moisture, impurity, and yield | pass records; blend recipe; grade and moisture records | cut-type-specific linter yield and final product description | `cotton-inc-fiber-sourcing-2017`; `ncpa-trading-rules-2013` |
| `co_product_allocation_factor` | shared facility burdens | allocation factor = selected physical or economic allocation measure for linters / total selected allocation measure for linters plus co-products | linter mass or value; delinted seed mass or value; off-grade co-products; shared burdens | allocation factors for shared processes | `iso-14044-2006` |
| `moisture_conversion` | seed, linters, residues, and co-products | dry mass = as-received mass * (1 - moisture fraction); reported reference mass remains on declared saleable basis | as-received mass; moisture fraction; declared reference basis | kg dry matter and kg saleable basis |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 声明切割类型、等级或质量类别、水分基准、杂质基准、打包或散装状态和生产地区。 | 成品记录、分级记录、打包单、供应商证书或产品规格 |
| `dq_seed_traceability` | cottonseed input | 棉籽应追溯到供应商、棉籽批次、可用时的轧花来源和接收期间。 | 接收单、供应商声明、储存台账和批次追溯 |
| `dq_mass_balance` | seed, linters, delinted seed, residues, and dust | 每个生产期必须核对棉籽投入、短绒、脱绒棉籽、残余物、粉尘和水分变化的质量平衡。 | 称量记录、运行表、水分测试、除尘器记录和质量平衡表 |
| `dq_energy_allocation` | energy and shared services | 能源记录应在重要时区分接收、脱绒、整理和发运；共享能源分配必须有文件依据。 | 分表、发票、设备小时日志和分配表 |
| `dq_coproduct_treatment` | delinted seed and saleable off-grade linters | 必须披露副产品数量、去向和分配基础。 | 转移记录、销售发票、内部使用记录和分配计算 |
| `dq_downstream_exclusion` | downstream manufacturing | 精制、制浆、化学转化、造纸、脱脂棉和无纺布生产必须明确排除或单独建模。 | 边界声明、产品描述和适用的下游模块链接 |

## 9. 校验规则

| validation_id | Severity | Rule |
| --- | --- | --- |
| `reference_output_equals_one_kg` | error | 最终生产者门参考产品输出必须等于 1 kg 净可销售棉短绒。 |
| `required_qualifiers_present` | error | 必须声明切割类型、等级或质量类别、水分基准、杂质基准、打包或散装状态、生产地区和分配方法。 |
| `cottonseed_mass_balance_reconciles` | error | 棉籽投入、短绒、脱绒棉籽、拒收物、粉尘和水分变化必须在声明批次或生产期内可核对。 |
| `co_product_allocation_documented` | error | 共享负荷必须包含针对脱绒棉籽及任何可销售不合格短绒或残余物的分配方法。 |
| `cut_type_not_mixed_without_disclosure` | warning | 除非披露混合配方和加权属性，否则头道绒、二道绒、三道绒和一次混合绒不得混合作为参考产品。 |
| `downstream_processing_excluded_or_modelled` | warning | 精制、制浆、化学转化、造纸、脱脂棉和无纺布生产必须明确排除或单独建模。 |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset; foreground foreground-data package component |
| allowed_use | 当声明切割类型、等级、水分基准、杂质基准、棉籽来源、脱绒路线和边界与本 PCR 匹配时，用于生产者门原棉短绒或简单清洁棉短绒建模。 |
| excluded_use | 纺织用皮棉、棉籽、棉籽油或粕、精制短绒浆、纤维素衍生物、纸、脱脂棉、无纺布和酸脱绒播种棉籽，除非单独建模或映射。 |
| required_metadata | CPC reference; 切割类型; 等级或质量类别; 水分基准; 杂质基准; 棉籽来源; 生产地区; 脱绒路线; 脱绒次数; 打包或散装状态; 分配方法; 副产品处理; 上游数据集链接 |
| required_quality_disclosure | 棉籽批次追溯、棉籽到短绒质量平衡闭合、能源分配基础、分道次得率追踪、水分换算基础、副产品分配、残余物去向、粉尘排放基础，以及未解决的 UUID 或单位支持缺口 |
| update_trigger | 当经审核的 Tiangong UUID、CPC 或 HS 定义、棉籽交易规则、棉短绒等级证据、工艺技术证据或经审核工厂数据集改变规则时更新。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, code 03251 Cotton linters. | 产品类别身份和分类引用。 |
| `usda-ers-natural-fibers-2006` | official_guidance | USDA Economic Research Service, Cotton Finds Markets Beyond Traditional Uses, natural-fibers report PDF, https://ers.usda.gov/media/11053/natural-fibers.pdf?v=48877 | 轧花后短绒定义、在棉籽油厂脱绒、切割类别和棉籽到短绒生产背景。 |
| `usda-mrr56-cotton-linters` | official_guidance | USDA Marketing Research Report No. 56, Cotton linters: production, marketing, and market outlets, https://ageconsearch.umn.edu/record/309970/files/mrr56.pdf | 头道绒、二道绒、一次混合绒类别、等级组、生产和得率背景。 |
| `cotton-inc-fiber-sourcing-2017` | handbook | Cotton Incorporated, Fiber Sourcing Directory, https://www.cottoninc.com/wp-content/uploads/2017/04/Fiber-Sourcing-Directory.pdf | 脱绒机路线、头道绒和二道绒区别以及下游用途示例。 |
| `ncpa-trading-rules-2013` | standard | National Cottonseed Products Association, Trading Rules 2013-14, https://www.cottonseed.com/wp-content/uploads/2016/04/2013-14-Trading-Rules-edited-for-web-site.pdf | 一次混合绒、头道绒、二道绒和化学短绒的市场定义。 |
| `usda-ars-mechanical-delinter-2016` | literature | Journal of Cotton Science, Development and Evaluation of a Novel Bench-Top Mechanical Cotton Seed Delinter, https://journal.cotton.org/wp-content/uploads/2025/11/JCS21-018.pdf | 机械脱绒技术背景和酸脱绒排除说明。 |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management - Life cycle assessment - Requirements and guidelines. | 功能单位、分配、数据质量和校验框架。 |
| `cotton-bale-materials` | standard | National Cotton Council bale packaging material identities; actual linter specifications and quantities require site records, https://www.cotton.org/tech/bale/specs/bagging.cfm | 条件性身份依据；实际场址用量和适用性须单独核实 |
