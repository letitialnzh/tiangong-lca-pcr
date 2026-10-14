---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.balata-gutta-percha-guayule-chicle-and-similar-natural-gums-in-primary-forms-or-in-plat-e156088a
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 巴拉塔胶、古塔波胶、银菊胶、糖胶树胶和类似天然树胶，初级形态或板、片、带状

## 1. 范围与适用性

本 PCR 适用于以初级形态、块状、板状、片状或带状销售的非木质天然树胶，以及反式聚异戊二烯或相关天然树胶材料的前景数据包。覆盖巴拉塔胶、古塔波胶、银菊胶或其树脂/橡胶馏分、糖胶树胶，以及类似天然植物树胶；当产品已配制为橡胶混炼物、口香糖、牙科制品、胶黏剂或其他成品时，不适用本 PCR。

前景边界通常从声明的来源林分、种植地、割胶作业、采收叶片、灌木生物质或外购粗胶/乳胶批次开始，到生产者门口的可销售初级树胶结束。数据集作者必须披露植物来源或供应商来源类别、生产路线、产品形态、水分或干物质基准，以及是否包括树脂分离、脱树脂、溶剂萃取、煮制或片/带成形。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.balata-gutta-percha-guayule-chicle-and-similar-natural-gums-in-primary-forms-or-in-plat-e156088a |
| classification_refs | CPC 3.0:03211 exact - Balata, gutta-percha, guayule, chicle and similar natural gums in primary forms or in plates, sheets or strip |
| covered_products | 巴拉塔胶；古塔波胶；作为初级树胶材料销售的银菊天然胶、树脂或橡胶馏分；糖胶树胶；以初级形态、块状、板状、片状或带状销售的类似天然植物树胶 |
| excluded_products | 归入 CPC 01950 的三叶橡胶天然橡胶；合成橡胶和油膏胶；硫化或混炼橡胶制品；配制口香糖胶基；牙科古塔波胶尖或器械；胶黏剂、涂料和成品 |
| representative_product | 生产者门口 1 kg 可销售干基天然树胶初级材料 |
| production_route | 割胶、叶片/灌木采收或原料批次接收；浓缩/凝固或萃取；除杂；干燥、压制、块状成形、片状成形或切带；出货包装 |
| market_state | 未硫化初级材料，通常为打包、块状、片状、板状、带状或其他仅经简单制备、供工业转化使用的状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 可销售巴拉塔胶、古塔波胶、银菊胶、糖胶树胶或类似天然树胶初级材料 |
| How much | 1 kg 净产品质量 |
| How well | 产品满足声明的商业等级、产品形态、水分或干物质基准和杂质规格 |
| How long or cycle | 一个前景生产批次、割胶作业、萃取作业或折算到参考量的年度化作业 |
| reference_flow_link | `packaged_product_at_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Balata, gutta-percha, guayule, chicle and similar natural gums in primary forms or in plates, sheets or strip `907d7b5c-ed6f-43a2-82f8-e1f91e30a37b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass unit group 93a60a57-a4c8-11da-a746-0800200c9a66 |
| 参考单位 | kg |
| 必需限定信息 | gum type; botanical or supplier source category; source system; product form; moisture or dry matter basis; resin separation or purification state; production route; geographic origin; allocation method for co-products |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

原始批次、群体、过程转移和联产品数量按原采集口径完整保留。对每个交换，先完成实际路线、期间及联产品归属，再以归属原始量 × 1 kg / 同边界同期最终合格产品质量换算为声明参考流。必须记录真实阶段产出、损失、收率和分配，不得把中间转移量固定为最终 1 kg，也不得以缺失数据假定无损失。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和可销售共产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流按净可销售产品质量报告，不包括可重复使用托盘、桶或周转容器。 |
| `dry_matter_basis` | 树胶、乳胶、叶片、灌木生物质、残渣和产品输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg dry matter and kg as received | 当湿输入、乳胶、凝胶物或干燥产品换算为 1 kg 参考产品时，记录水分或总固形物。 |
| `product_form_reporting` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明参考产品是块状、板状、片状、带状、粒状、树脂馏分、橡胶馏分或其他初级形态。 |
| `energy_unit_consistency` | 电力、蒸汽、燃料和工艺热 | Energy | kWh or MJ | 将工厂能源表、燃料发票和锅炉记录换算为 kWh 或 MJ，并说明是终端能源、燃料低位热值还是交付热。 |
| `route_specific_yield_check` | 割胶、叶片萃取和银菊萃取过程 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将前景产率与路线特定证据或记录化作业数据比较；显著偏离时需披露来源物种、水分基准和损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | `declared_source_stand_or_raw_gum_lot` |
| starting_condition_role | 第一条前景采集或原料接收记录的边界锚点。 |
| product_classification_scope | 仅限 CPC 3.0:03211 天然树胶和类似植物树胶初级形态。 |
| recursive_input_rule | 如果某项输入本身属于 CPC 03211 初级天然树胶，将其建模为带上游数据集的外购粗胶输入；不要在同一前景过程中递归展开本 PCR。 |
| upstream_dataset_requirement | 对跨入前景边界的外购乳胶、粗胶、采收叶片、灌木生物质、溶剂、包装、电力、燃料、水或运输服务使用上游数据集。 |
| disclosure | 披露来源物种或供应商来源类别、来源系统、采收或割胶路线、外购原料批次占比、产品形态、水分基准、纯化状态、共产品处理，以及任何排除的建园、土地管理或长距离运输活动。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_declared_source_or_raw_lot | 所有前景数据包 | 从声明的来源林分或原胶批次开始前景建模；对每个跨越边界的外购投入使用上游数据集；不得为外购的 CPC 03211 天然树胶投入递归重开本 PCR。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `source_harvest_or_raw_lot_receipt` | 来源采收、割胶或原料批次接收 | required | 所有数据集均纳入；当生产者购买粗胶、乳胶、叶片或灌木生物质时使用原料批次接收。 | 建立来源身份和来料数量。 | 每 1 kg 参考产品的来料 kg 和干物质 kg |
| `primary_concentration_or_extraction` | 初级浓缩、凝固、煮制或萃取 | required | 纳入糖胶树胶煮制、巴拉塔/古塔波胶热水软化、银菊水相或溶剂萃取，或类似天然树胶回收路线。 | 将原乳胶、粗胶、叶片或灌木生物质转化为浓缩或分离树胶。 | 每 1 kg 参考产品的中间树胶 kg |
| `purification_forming_and_drying` | 纯化、干燥、压制和成形 | required | 当产品在销售前经干燥、压制、成块、成片、成板、成带或纯化时纳入。 | 生成声明的初级产品形态。 | 每 1 kg 参考产品的可销售产品 kg |
| `packaging_storage_and_dispatch` | 包装、储存和发运准备 | required | 纳入为在生产者门口交付产品所需的包装和现场储存。 | 记录包装、储存损失和产品发运状态。 | 每 1 kg 参考产品的包装后可销售产品 kg |

### 过程：来源采收、割胶或原料批次接收（`source_harvest_or_raw_lot_receipt`）

#### 输入

##### 产品流

###### 来源林分、树木、灌木、乳胶、叶片或粗胶批次（`source_material_input`）

按声明路线记录来料。来料可以是割取乳胶、粗胶、采收叶片、银菊灌木生物质或外购粗胶批次。

- 选定流：Natural gum source material
- 流属性/单位：Mass / kg
- 数量规则：实测来料质量及干物质或总固形物含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_records`
- 来源：`fao-nwfp-6-chicle`; `fao-nwfp-6-balata`; `fao-nwfp-6-gutta-percha`; `dehghanizadeh-2021-guayule-resin`


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：1.0
  - 上限：100
  - 单位：kg 干物质
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 设备供电点的电力 (`field_collection_energy_electricity`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

当燃料、电力或畜力/机械采集服务直接用于割胶、灌木采收、叶片收集、田间切碎或原料接收时纳入。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 柴油 (`field_collection_energy_diesel`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

当燃料、电力或畜力/机械采集服务直接用于割胶、灌木采收、叶片收集、田间切碎或原料接收时纳入。

- 选定流：柴油
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

##### 废物流

###### 未采集或拒收来源生物质（`rejected_source_biomass`）

当被拒收的树皮、叶片、枝条、灌木材料或受污染粗胶作为废物离开前景系统，或返回来源区域时记录。

- 选定流：Biogenic plant residue
- 流属性/单位：Mass / kg dry matter
- 数量规则：来源采集后的实测或计算拒收生物质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：50
  - 单位：kg 干物质
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 来源区域土地占用披露（`source_area_occupation`）

当前景数据集代表种植地或受管理来源区域运营，而不仅是外购原料批次接收时，报告土地占用。

- 选定流：Land occupation, forestry or perennial shrub production
- 流属性/单位：Area-time / m2a
- 数量规则：按采收来源材料分摊的年度化生产性来源面积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_source_area_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：m2a
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 进入加工的粗胶、乳胶、叶片或灌木生物质（`raw_material_to_processing`）

实测采集或接收材料转入初级浓缩或萃取过程。

- 选定流：Raw natural gum material
- 流属性/单位：Mass / kg as received and kg dry matter
- 数量规则：来源采集或接收后的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每来源采集或接收过程输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：1.0
  - 上限：100
  - 单位：kg 干物质
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

### 过程：初级浓缩、凝固、煮制或萃取（`primary_concentration_or_extraction`）

#### 输入

##### 产品流

###### 投入回收的原料（`raw_material_charged`）

将原乳胶、粗胶、叶片、灌木生物质或外购粗胶投入回收路线。

- 选定流：Raw natural gum material
- 流属性/单位：Mass / kg dry matter
- 数量规则：投入浓缩、煮制、凝固或萃取设备的实测原料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_material_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：1.0
  - 上限：100
  - 单位：kg 干物质
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 工艺用水（`process_water_input`）

当工艺用水用于煮制、热水软化、洗涤、水相萃取、浆料输送或冷却并跨越前景边界时纳入。

- 选定流：Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- 流属性/单位：Mass / kg
- 数量规则：扣除内部循环后的实测补充水消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 丙酮溶剂 (`separation_aid_input_acetone`)

仅在实际路线和现场记录证明该身份适用时启用；不是必用投入、默认配方、用药或剂量建议。供应商制剂须记录配方与浓度，制剂实物量与活性成分量不得重复。其他实际身份必须单独列卡，缺少记录不得视为零。这些溶剂卡仅适用于记录证明存在的银胶菊溶剂萃取，不得应用于其他树胶、单纯水提或煮制路线。

仅当声明路线使用溶剂、酸、盐、碱、助滤剂或其他分离助剂时纳入。

- 选定流：丙酮溶剂
- 流属性 / 单位：质量 / kg
- 数量规则：仅采集本身份的实际数量，保留供应商组成、状态、单位及使用记录，按原过程归属和参考流口径换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_auxiliary_material_records`
- 来源：`dehghanizadeh-2021-guayule-resin`；`usda-guayule-extraction-2019`

###### 环己烷溶剂 (`separation_aid_input_cyclohexane`)

仅在实际路线和现场记录证明该身份适用时启用；不是必用投入、默认配方、用药或剂量建议。供应商制剂须记录配方与浓度，制剂实物量与活性成分量不得重复。其他实际身份必须单独列卡，缺少记录不得视为零。这些溶剂卡仅适用于记录证明存在的银胶菊溶剂萃取，不得应用于其他树胶、单纯水提或煮制路线。

仅当声明路线使用溶剂、酸、盐、碱、助滤剂或其他分离助剂时纳入。

- 选定流：环己烷溶剂
- 流属性 / 单位：质量 / kg
- 数量规则：仅采集本身份的实际数量，保留供应商组成、状态、单位及使用记录，按原过程归属和参考流口径换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_auxiliary_material_records`
- 来源：`dehghanizadeh-2021-guayule-resin`；`usda-guayule-extraction-2019`

###### 工艺热和电力（`recovery_energy_input`）

纳入煮制、萃取、搅拌、离心、蒸发、溶剂回收和泵送的能源。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Energy / kWh or MJ
- 数量规则：实测能源使用，或分摊到回收作业的设备能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`dehghanizadeh-2021-guayule-resin`


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0.1
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 浓缩或分离树胶中间体（`gum_intermediate_output`）

在最终干燥和成形前记录中间树胶、凝胶物、橡胶馏分、树脂馏分或粗古塔馏分。

- 选定流：Natural gum intermediate
- 流属性/单位：Mass / kg dry matter
- 数量规则：实测中间产物输出，包括水分或固形物基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始采集或过程口径：每回收过程输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：1.0
  - 上限：10
  - 单位：kg 干物质
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 洗涤或煮制废水（`recovery_wastewater`）

当水离开回收过程进入处理、排放或外部处置时记录废水。

- 选定流：Process wastewater
- 流属性/单位：Volume / m3 or Mass / kg
- 数量规则：实测排放量，或循环后水量平衡残差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 渣料、废叶、树脂性残渣或萃取固体（`recovery_solid_residue`）

叶片萃取、灌木萃取、过滤或粗胶清洁产生的固体残渣按干物质和处置或利用路线记录。

- 选定流：Biogenic extraction residue
- 流属性/单位：Mass / kg dry matter
- 数量规则：实测残渣产生量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`dehghanizadeh-2021-guayule-resin`


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg 干物质
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 浓缩过程蒸发水（`evaporated_water`）

当煮制、浓缩或干燥过程中的水分蒸发具有重要性时，作为水量平衡输出报告。

- 选定流：Water vapour to air
- 流属性/单位：Mass / kg
- 数量规则：由水量平衡和水分测定计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_product_quality_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：纯化、干燥、压制和成形（`purification_forming_and_drying`）

#### 输入

##### 产品流

###### 用于最终成形的树胶中间体（`gum_intermediate_input`）

将树胶中间材料投入最终干燥、纯化、压制、块状成形、片状成形或切带。

- 选定流：Natural gum intermediate
- 流属性/单位：Mass / kg dry matter
- 数量规则：最终整理过程的实测中间体输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：1.0
  - 上限：10
  - 单位：kg 干物质
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 整理能源（`finishing_energy_input`）

纳入干燥、压制、滚压、切割、冷却和通风能源。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Energy / kWh or MJ
- 数量规则：最终整理实测能源使用或分摊设备能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0.1
  - 上限：50
  - 单位：MJ
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售初级天然树胶产品（`saleable_primary_gum_product`）

参考产品为声明形态和质量状态的可销售初级天然树胶。

- 选定流：Balata, gutta-percha, guayule, chicle and similar natural gums in primary forms or in plates, sheets or strip `907d7b5c-ed6f-43a2-82f8-e1f91e30a37b`
- 流属性/单位：Mass / kg
- 数量规则：计量进入包装和仓储的合格净胶质量，保留实际搬运损失；按同期间最终交付量归一化，不将本中间转移固定为 1 kg。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
原始采集或过程口径：reference flow

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_product_quality_records`
- 来源：

##### 废物流

###### 等外树胶和修边废料（`off_grade_gum_waste`）

按去向记录等外树胶、修边料、细粉、受污染树胶或拒收片材。

- 选定流：Off-grade natural gum waste
- 流属性/单位：Mass / kg
- 数量规则：实测拒收产品及声明的回用、返工、能量回收或处置路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

### 过程：包装、储存和发运准备（`packaging_storage_and_dispatch`）

#### 输入

##### 产品流

###### 木制板条箱（`primary_packaging_input_wood_crate`）

**primary_packaging_input 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

当袋、内衬、纸箱、桶、打包带、标签或非周转托盘随可销售产品供应时纳入包装。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：木制板条箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每声明的参考流

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-package-identities`

###### 瓦楞纸板箱（`primary_packaging_input_corrugated_box`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：瓦楞纸板箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每声明的参考流

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-package-identities`

###### 聚乙烯包装薄膜（`primary_packaging_input_pe_film`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：聚乙烯包装薄膜
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_packaging_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每声明的参考流

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-package-identities`

###### 储存和搬运能源（`storage_handling_energy`）

当仓库、干燥室、通风、叉车、输送机和搬运设备在生产者门口发运前使用时，纳入其能源。

- 选定流：Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- 流属性/单位：Energy / kWh or MJ
- 数量规则：实测或分摊的储存和搬运能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 1 kg 可销售参考产品

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：


- 数量范围：暂定筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：MJ
  - 基准：每 1 kg 可销售参考产品
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 生产者门口包装产品（`packaged_product_at_gate`）

包装后的可销售初级树胶产品已准备在生产者门口发运。

- 选定流：Balata, gutta-percha, guayule, chicle and similar natural gums in primary forms or in plates, sheets or strip `907d7b5c-ed6f-43a2-82f8-e1f91e30a37b`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
原始采集或过程口径：reference flow

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_product_quality_records`
- 来源：


- 数量范围：参考数量恒等关系
  - 范围角色：`allowed_range`
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：参考流
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`iso-14044-2006`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

如果前景过程仅生产声明的初级树胶产品且内部残渣被废弃，则不需要分配。如果银菊橡胶、银菊树脂、渣料、纯化古塔馏分、树脂性馏分、燃料残渣或其他共产品以具有经济价值的形式离开系统，默认按干物质质量对共同采集、萃取和整理负荷进行物理分配。只有当共产品功能显著不同且同一作业期价格有记录时，才使用经济分配。内部返工不是共产品；应记录为循环或产率损失。内部用于过程供热的残渣只有在计量并披露时才能替代外购能源。

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_material_records` | `source_harvest_or_raw_lot_receipt` | source material input and raw material transfer | harvest, tapping, receiving, or purchase record | species_or_source_category; source_system; lot_id; as_received_mass; moisture_or_solids; source_location; harvest_or_receipt_date | weighbridge, batch sheet, receiving note, tapping log, or harvest record；原活动量汇总：sum lots and convert to dry matter where required | kg and percent moisture or solids | each lot or campaign | representative production year or declared campaign | source area, supplier lot, or receiving site | 每声明的参考流 | calibrated scale records, supplier certificates, moisture tests, and lot traceability |
| `cp_source_area_records` | `source_harvest_or_raw_lot_receipt` | source area occupation | land management or source-area record | productive_area; source_system; harvestable_area_share; campaign_duration; yield_to_processing | land register, plantation block record, concession record, or supplier declaration；原活动量汇总：allocate source area to harvested dry matter or purchased raw lot | ha, m2a, kg dry matter | annual or campaign | representative production year | source stand, plantation block, or declared supplier source | 每声明的参考流 | source map, land record, management plan, or supplier statement |
| `cp_energy_records` | all processes | fuel, electricity, steam, and process heat | meter, invoice, boiler log, fuel issue, or equipment-hour record | energy_carrier; quantity; unit; meter_scope; allocation_basis; process_id; date | meter reading, invoice reconciliation, or equipment-hour calculation；原活动量汇总：allocate shared energy by metered sub-process first, then runtime, mass throughput, or dry product output | kWh, MJ, kg fuel, L fuel | monthly or campaign | representative production year or campaign | plant, field crew, extraction line, finishing line, or storage area | 每声明的参考流 | meter calibration, invoice, fuel log, and allocation worksheet |
| `cp_water_records` | `primary_concentration_or_extraction` | process water and wastewater | water meter, batch water sheet, or wastewater record | make_up_water; recycled_water; discharge_volume; treatment_route; process_id; date | meter reading or water balance；原活动量汇总：net make-up water plus discharge water balance per reference product | kg or m3 | batch, monthly, or campaign | representative production year or campaign | extraction, boiling, washing, cooling, and effluent treatment systems | 每声明的参考流 | meter records, wastewater manifest, treatment logs, and water-balance reconciliation |
| `cp_auxiliary_material_records` | `primary_concentration_or_extraction` | solvent, coagulant, and process aid | purchase, issue, or batch recipe record | material_name; concentration_or_grade; quantity_issued; recovered_quantity; loss_quantity; supplier; process_id | inventory issue, recipe sheet, or solvent recovery log；原活动量汇总：net consumed material equals issued minus recovered/reused stock | kg | each batch or campaign | representative production year or campaign | extraction or purification line | 每声明的参考流 | purchase record, SDS, batch sheet, and recovery log |
| `cp_product_quality_records` | `primary_concentration_or_extraction`; `purification_forming_and_drying`; `packaging_storage_and_dispatch` | intermediate and final product quality | production, laboratory, and finished-goods record | product_form; gum_type; moisture_or_solids; impurity_content; net_product_mass; off_grade_mass; lot_id | batch sheet, lab test, finished-goods record；原活动量汇总：sum conforming net product and normalize all flows to 1 kg reference product | kg, percent moisture or solids | each lot | representative production year or campaign | production line and finished-goods warehouse | 每声明的参考流 | lab report, certificate of analysis, scale record, and finished-goods ledger |
| `cp_residue_records` | all processes | rejected biomass, bagasse, spent leaves, wastewater sludge, off-grade gum, and packaging waste | waste, residue, or by-product record | residue_type; quantity; moisture_or_solids; fate; sale_or_disposal_route; internal_reuse_flag | waste manifest, residue collection record, by-product sales note, or internal reuse log；原活动量汇总：sum by fate; convert to dry matter where relevant; link valuable co-products to allocation rule | kg and percent moisture or solids | batch, monthly, or campaign | representative production year or campaign | field, extraction, finishing, storage, and waste handling areas | 每声明的参考流 | waste manifest, by-product invoice, disposal ticket, and internal reuse record |
| `cp_packaging_records` | `packaging_storage_and_dispatch` | primary packaging input | packaging issue or bill of materials record | packaging_material; unit_mass; units_used; reusable_flag; supplier; product_lot | packaging BOM, warehouse issue, or supplier record；原活动量汇总：sum non-returnable packaging per net product mass | kg | lot or monthly | representative production year or campaign | packaging area and finished-goods warehouse | 每声明的参考流 | packaging BOM, supplier specification, and stock issue record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | row amount per kg reference product = campaign row amount / conforming net saleable product mass | row amount; conforming product mass from `cp_product_quality_records` | normalized inventory amount per 1 kg reference product |  |
| `convert_to_dry_matter` | source material, residues, and intermediate products | dry matter mass = as-received mass * (1 - moisture fraction) or as-received mass * solids fraction | as_received_mass; moisture_or_solids | kg dry matter |  |
| `water_balance_check` | process water and wastewater | wastewater or evaporated water is reconciled from make-up water, recycled water, product moisture change, and measured discharge | make_up_water; recycled_water; product moisture; discharge_volume | water balance and unreconciled loss |  |
| `co_product_allocation` | processes with saleable co-products | allocate shared burdens by dry mass unless documented campaign prices justify economic allocation | shared process burdens; dry mass of saleable co-products; prices when used | allocation factors by co-product | `iso-14044-2006` |
| `guayule_fraction_check` | guayule routes | compare declared resin/rubber fraction yields with cited guayule resin and rubber extraction literature; deviations require explanation | dry shrub input; resin fraction; rubber fraction; bagasse | QA flag or accepted route-specific yield | `dehghanizadeh-2021-guayule-resin` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Declare gum type, botanical or supplier source category, product form, purification state, and moisture or dry matter basis. | finished-goods record, certificate of analysis, supplier declaration, or product specification |
| `dq_source_traceability` | source material | Trace source material to source stand, plantation block, supplier lot, or purchased raw gum lot. | harvest log, tapping record, supplier certificate, receiving note, or concession/management record |
| `dq_mass_balance` | source material, intermediate, final product, and residues | The dry-matter mass balance from source input to final product, co-products, residues, and losses must be reconcilable for each campaign. | batch sheets, lab moisture tests, product ledger, and residue records |
| `dq_energy_water_boundary` | energy and water | Energy and water records must distinguish field collection, recovery/extraction, finishing, and storage where material; allocation assumptions must be documented. | meters, invoices, boiler logs, water balance, and allocation worksheet |
| `dq_co_product_allocation` | co-products and residues | Co-product allocation must use dry mass by default or documented economic allocation with same-campaign prices. | co-product mass records, by-product sales invoices, and allocation calculation |
| `dq_temporal_representativeness` | foreground dataset | Use at least one representative annual cycle or a declared production campaign; seasonal tapping or harvest campaigns must be identified. | production calendar, campaign records, and data coverage statement |

## 9. 校验规则

- 如果数据集遗漏必要产品限定信息，尤其是树胶类型、产品形态、水分基准、来源系统和生产路线，则数据集无效。
- 参考流必须为 1 kg 净可销售产品质量。包装和可重复使用容器不属于参考产品质量。
- 干物质质量平衡必须协调来源材料、产品、共产品、残渣和水分损失。未解释的干物质损失超过来源干物质 5% 时必须说明原因。
- 跨越前景边界的外购粗胶、乳胶、叶片、灌木生物质、溶剂、工艺助剂、包装、电力、燃料和运输服务必须链接到上游数据集。
- 糖胶树胶路线必须披露割胶间隔假设，以及是否包括树木损伤或林分管理活动。
- 古塔波胶路线必须披露材料来自割胶、叶片、修枝、粗块还是外购原料。
- 银菊路线必须披露水相或溶剂萃取、树脂/橡胶分离状态、渣料处理，以及适用时的溶剂回收。
- 巴拉塔路线必须披露是否包括或排除下游古塔/树脂分离。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当声明的树胶类型、形态、来源系统、路线和水分基准匹配时，用于在前景产品系统中建模生产者门口初级天然树胶材料。 |
| excluded_use | 成品口香糖、硫化橡胶产品、合成橡胶、牙科器械、配制胶黏剂或涂料，以及未单独映射的 CPC 01950 天然橡胶。 |
| required_metadata | gum type; botanical or supplier source category; CPC reference; product form; moisture or dry matter basis; source system; production route; location; time period; allocation method; co-product treatment; upstream dataset links |
| required_quality_disclosure | source traceability level, dry-matter mass balance closure, energy and water allocation basis, solvent recovery treatment, residue fate, co-product allocation, and unresolved UUID or unit support gaps |
| update_trigger | 当经审查的 Tiangong UUID、来源特定产率证据、溶剂/萃取技术证据、CPC 映射或林业/非木质林产品评审改变规则时更新。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, code 03211 | 产品类别识别和分类引用 |
| `fao-nwfp-6-chicle` | handbook | FAO Non-Wood Forest Products 6, Chicle profile, Pl@ntUse mirror, https://plantuse.plantnet.org/en/Chicle_%28FAO%2C_NWFP_6%29 | 糖胶树胶来源识别、割胶/采集路线、煮制和块状成形过程证据 |
| `fao-nwfp-6-balata` | handbook | FAO Non-Wood Forest Products 6, Balata profile, Pl@ntUse mirror, https://plantuse.plantnet.org/en/Balata_%28FAO%2C_NWFP_6%29 | 巴拉塔来源识别、割胶产率背景和下游分离边界 |
| `fao-nwfp-6-gutta-percha` | handbook | FAO Non-Wood Forest Products 6, Gutta-percha profile, Pl@ntUse mirror, https://plantuse.plantnet.org/en/Gutta_percha_%28FAO%2C_NWFP_6%29 | 古塔波胶来源路线、叶片/修枝采收、热水软化、储存和纯化背景 |
| `dehghanizadeh-2021-guayule-resin` | literature | Dehghanizadeh et al. 2021, "Guayule (Parthenium argentatum) resin: A review of chemistry, extraction techniques, and applications", Industrial Crops and Products 165, 113410, https://doi.org/10.1016/j.indcrop.2021.113410 | 银菊萃取路线、橡胶/树脂/渣料共产品和路线特定产率 QA |
| `szczepanowska-akhmedov-2023-polyisoprenes` | literature | Szczepanowska and Akhmedov 2023, "Gutta percha, natural rubber and balata-chemical characterization of polyisoprenes in the context of cultural heritage", Heritage Science 11, 125, https://doi.org/10.1186/s40494-023-00954-z | 古塔波胶、巴拉塔胶和天然橡胶聚异戊二烯材料身份区分 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines | 分配层级、数据质量和 LCA 报告基准 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `usda-guayule-extraction-2019` | literature | USDA guayule study, extraction methods; solvent-route identity example only, not a commercial consumption factor, https://www.ars.usda.gov/ARSUserFiles/20200500/Pubs%202020/LuoAbdel%20ICP2019.pdf | 条件性身份依据；实际场址用量和适用性须单独核实 |
