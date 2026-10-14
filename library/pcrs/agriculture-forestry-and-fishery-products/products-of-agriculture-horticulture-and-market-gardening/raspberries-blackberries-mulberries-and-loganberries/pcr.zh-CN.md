---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries
language: zh-CN
status: active
sync_with: pcr.en-US.md
---

# 覆盆子、黑莓、桑葚和罗甘莓

## 1. 适用范围

本候选 PCR 覆盖新鲜覆盆子、黑莓、桑葚和罗甘莓从作物管理、采收到农场交货或首个可销售出口前的初级调理、分级和发运。适用于已声明的露地、保护地和多年生系统。不包括苗木、零售、消费者使用以及冷冻、干燥、果汁、果酱或葡萄酒加工。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.raspberries-blackberries-mulberries-and-loganberries |
| classification_refs | CPC 3.0 / 01353; mapping relation: exact |
| covered_products | 新鲜覆盆子、黑莓、桑葚和罗甘莓 |
| excluded_products | 加工产品；苗木和繁殖材料 |
| representative_product | 已声明物种、品种和等级的可销售新鲜浆果 |
| production_route | 受管理生物生产 → 采收 → 初级调理 → 分级/排序 → 发运 |
| market_state | 声明出口状态下的新鲜可销售产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明出口处的可销售新鲜浆果 |
| How much | 1 kg |
| How well | 声明物种、品种、系统、季节、质量等级、状态和可销售产量定义 |
| How long or cycle | 一个声明的生产季；披露多年生建植和跨年度归属 |
| reference_flow_link | marketable_berries |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| 参考产品流 | 覆盆子、黑莓、桑葚和罗甘莓 `562e96d5-9c9f-4b90-877c-b2ebf33c87cc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；品种；生产系统；采收季；质量等级；可销售产量；出口状态；分配基础；作物年龄或建植处理 |

本参考 UUID 表示新鲜、未加工的农场门产品。使用该绑定前须核对实际物种、产品状态及交接门；独立包装站、进一步加工或不兼容状态的输出必须单独核实身份，不得直接继承此 UUID。身份核实不改变本 PCR 的实际系统边界或数量归一化要求。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `rule_mass_reference` | reference product | Mass | kg | 将结果归一化为声明出口处 1 kg 可销售新鲜产品。 |
| `rule_yield_basis` | yield and inventory | Mass | kg fresh product | 使用称量的可销售产量，并单独披露已采收但被拒收的量和田间损失。 |
| `rule_nutrient_basis` | fertilizer and soil amendment | Product mass and nutrient mass where available | kg product; kg nutrient | 记录实际产品及 N/P/K 基准，不得替换为未标识的通用肥料产品。 |
| `rule_perennial_attribution` | perennial inputs | Mass, area or time | kg, ha, year | 将建植和共享植株投入按声明生产期分配，并披露基础。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备好声明季节生产的露地或保护地单元；采购投入在经营者接收时进入 |
| starting_condition_role | 前景从作物群管理开始，在农场交货或首个可销售出口结束 |
| product_classification_scope | 新鲜覆盆子、黑莓、桑葚和罗甘莓；由语义范围决定纳入 |
| recursive_input_rule | 同类别水果作为投入时视为内部转移，不递归建模为新的作物产品 |
| upstream_dataset_requirement | 对未作为前景作业计量的电力、燃料、肥料、改良剂、包装、供水和外购服务使用单独记录的背景数据集 |
| disclosure | 声明土地/设施、作物年龄、季节、出口、产量、损失、灌溉、养分产品、包装和排除项 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | all datasets | 纳入作物管理至发运；排除下游加工和零售。 | `fao-gap-framework-2003` |
| `boundary_perennial` | perennial systems | 披露建植和生产期归属，不得默认为单一季节承担全部建植负荷。 | `fao-gap-framework-2003` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `process_crop_establishment` | 作物建植和植株维护 | conditional | 有建植、补植或多年生管理时纳入 | biological production | 面积和生产期 |
| `process_crop_management` | 季节性作物管理 | required | 始终纳入 | biological production | 季节和可销售 kg |
| `process_harvest` | 采收和田间捕获 | required | 始终纳入 | harvest capture | 采收和可销售质量 |
| `process_conditioning_grading` | 初级调理和分级 | conditional | 出口前有清洗、冷却、排序或包装时纳入 | primary conditioning | 发运 kg |
| `process_reject_routing` | 拒收、损失和副产品去向 | conditional | 有不可销售浆果或副产品时纳入 | attribution and waste routing | 质量平衡 |

每个过程均按方向（`Inputs`、`Outputs`）和流类型（`Product flows`、`Waste flows`、`Elementary flows`）报告。每行均为 flow card，含 `row_id`、流身份、流属性/单位、数量规则、`value_mode`、`specificity`、`basis_kind`、`evidence_kind`、`collection_protocol_id` 和 `source_ids`。

### 过程：作物建植和植株维护（`process_crop_establishment`）
#### 输入
##### 产品流
###### 建植材料（`establishment_inputs`）
按地块和事件记录实际植株、棚架、基质和补植材料。
- 选定流：建植材料（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：按采购或领用记录测量，并按生产期归属
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-gap-framework-2003`
##### 基本流
###### 建植土地占用（`establishment_land`）
记录声明种植区的面积、持续时间和土地转化状态。
- 选定流：耕地占用（UUID 未解析；仅表示占用）
土地占用按面积乘以实际占用时间计量。纳入土地转化时，应单独记录转化前后土地状态的面积事件、日期、既有利用、核算期间和归属；不能给转化赋面积时间数量或按每个作物周期重复计算。
- 流属性/单位：面积时间 / ha-year
- 数量规则：地块登记和面积图
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-gap-framework-2003`

### 过程：季节性作物管理（`process_crop_management`）
#### 输入
##### 产品流
###### 尿素肥料（`process_crop_management_agricultural_nutrient_inputs_urea`）

**process_crop_management_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 硫酸铵肥料（`process_crop_management_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 重过磷酸钙肥料（`process_crop_management_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 氯化钾肥料（`process_crop_management_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 作为肥料施用的牛粪（`process_crop_management_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-organic-nutrients`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 施入土壤的植物残体堆肥（`process_crop_management_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`source-ipcc-2019-refinement`；`fao-organic-nutrients`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 灌溉水（`irrigation_water_services`）
按地块、来源、作业和季节记录灌溉水。
- 选定流：灌溉供水（UUID unresolved；intentionally blank）
- 流属性/单位：体积 / m3
- 数量规则：水表、交付单、发票或作业日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`
###### 设备供电点的电力（`energy_services_electricity`）

**energy_services 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

记录田间作业和外购服务使用的电力、燃料及其他能源载体。
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`fao-agricultural-energy`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kWh / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 供应设备的柴油（`energy_services_diesel`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 电力记录供应点；燃料保留品种、密度和热值口径；外购热量与本地燃料产热互斥核算，禁止把供热燃料再计一次。

- 选定流：供应设备的柴油
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_input_records`
- 来源：`fao-gap-framework-2003`；`fao-agricultural-energy`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

#### 输出
##### 基本流

###### 向空气排放的氧化亚氮，管理土壤直接路径（`soil_direct_n2o`）
按场址、氮源、气候、路线及接收介质声明适用性与核算责任。缺少路径数据不等于零；有依据的不适用路径须明确披露。
- 选定流：向空气排放的氧化亚氮，管理土壤直接路径（UUID 未解析；须核实化学物质和接收介质身份）
- 流属性/单位：质量 / kg N2O
- 数量规则：按兼容的氮活动数据及声明路径方法求该化合物；以氮计的数量仅乘 44/28 换算一次，明确上游和前景责任避免重复，再按合格参考输出归一化
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
原始活动或阶段基准：实际地块和报告期间的实测氮活动及排放，先保留原始量再归一化。
- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：从采集计算 (`calculated_from_collection`)
- 采集协议：`cp_managed_soil_nitrogen`
- 来源：`ipcc-managed-soils-2019`
- 数量范围：前体氮质量守恒检查；不是经验排放因子范围
  - 范围角色：QA 护栏 (`qa_guardrail`)
  - 下限：0
  - 上限：1
  - 单位：kg compound-N/kg available precursor N
  - 基准：对应路径及兼容的前体氮台账；间接 N2O-N 不超过记录的沉降或淋失前体氮，但不再从源台账重复扣减
  - 基准类型：氮投入 (`n_input`)
  - 证据类型：方法公式 (`method_formula`)
  - 来源：`mass-balance-identity`

###### 向空气排放的氧化亚氮，沉降或淋失间接路径（`soil_indirect_n2o`）
按场址、氮源、气候、路线及接收介质声明适用性与核算责任。缺少路径数据不等于零；有依据的不适用路径须明确披露。
- 选定流：向空气排放的氧化亚氮，沉降或淋失间接路径（UUID 未解析；须核实化学物质和接收介质身份）
- 流属性/单位：质量 / kg N2O
- 数量规则：按兼容的氮活动数据及声明路径方法求该化合物；以氮计的数量仅乘 44/28 换算一次，明确上游和前景责任避免重复，再按合格参考输出归一化
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
原始活动或阶段基准：实际地块和报告期间的实测氮活动及排放，先保留原始量再归一化。
- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：从采集计算 (`calculated_from_collection`)
- 采集协议：`cp_managed_soil_nitrogen`
- 来源：`ipcc-managed-soils-2019`
- 数量范围：前体氮质量守恒检查；不是经验排放因子范围
  - 范围角色：QA 护栏 (`qa_guardrail`)
  - 下限：0
  - 上限：1
  - 单位：kg compound-N/kg available precursor N
  - 基准：对应路径及兼容的前体氮台账；间接 N2O-N 不超过记录的沉降或淋失前体氮，但不再从源台账重复扣减
  - 基准类型：氮投入 (`n_input`)
  - 证据类型：方法公式 (`method_formula`)
  - 来源：`mass-balance-identity`

###### 按声明氮路径向空气排放的氨（`soil_ammonia`）
按场址、氮源、气候、路线及接收介质声明适用性与核算责任。缺少路径数据不等于零；有依据的不适用路径须明确披露。
- 选定流：按声明氮路径向空气排放的氨（UUID 未解析；须核实化学物质和接收介质身份）
- 流属性/单位：质量 / kg NH3
- 数量规则：按兼容的氮活动数据及声明路径方法求该化合物；以氮计的数量仅乘 17/14 换算一次，明确上游和前景责任避免重复，再按合格参考输出归一化
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
原始活动或阶段基准：实际地块和报告期间的实测氮活动及排放，先保留原始量再归一化。
- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：从采集计算 (`calculated_from_collection`)
- 采集协议：`cp_managed_soil_nitrogen`
- 来源：`ipcc-managed-soils-2019`
- 数量范围：前体氮质量守恒检查；不是经验排放因子范围
  - 范围角色：QA 护栏 (`qa_guardrail`)
  - 下限：0
  - 上限：1
  - 单位：kg compound-N/kg available precursor N
  - 基准：对应路径及兼容的前体氮台账；间接 N2O-N 不超过记录的沉降或淋失前体氮，但不再从源台账重复扣减
  - 基准类型：氮投入 (`n_input`)
  - 证据类型：方法公式 (`method_formula`)
  - 来源：`mass-balance-identity`

###### 按声明淋失或径流路径向水排放的硝酸根（`soil_nitrate`）
按场址、氮源、气候、路线及接收介质声明适用性与核算责任。缺少路径数据不等于零；有依据的不适用路径须明确披露。
- 选定流：按声明淋失或径流路径向水排放的硝酸根（UUID 未解析；须核实化学物质和接收介质身份）
- 流属性/单位：质量 / kg NO3
- 数量规则：按兼容的氮活动数据及声明路径方法求该化合物；以氮计的数量仅乘 62/14 换算一次，明确上游和前景责任避免重复，再按合格参考输出归一化
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
原始活动或阶段基准：实际地块和报告期间的实测氮活动及排放，先保留原始量再归一化。
- 归一化基准：每声明的参考流
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：从采集计算 (`calculated_from_collection`)
- 采集协议：`cp_managed_soil_nitrogen`
- 来源：`ipcc-managed-soils-2019`
- 数量范围：前体氮质量守恒检查；不是经验排放因子范围
  - 范围角色：QA 护栏 (`qa_guardrail`)
  - 下限：0
  - 上限：1
  - 单位：kg compound-N/kg available precursor N
  - 基准：对应路径及兼容的前体氮台账；间接 N2O-N 不超过记录的沉降或淋失前体氮，但不再从源台账重复扣减
  - 基准类型：氮投入 (`n_input`)
  - 证据类型：方法公式 (`method_formula`)
  - 来源：`mass-balance-identity`

### 过程：采收和田间捕获（`process_harvest`）
#### 输入
##### 产品流
###### 采收材料（`harvest_materials`）
按采收期记录实际采收辅助材料和田间包装。
- 选定流：采收材料（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：领用和退回对账
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`fao-gap-framework-2003`
#### 输出
##### 产品流
###### 采收浆果（`harvested_berries`）
在调理前按物种和等级称量采收浆果。
- 选定流：采收鲜浆果（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：批次称量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_records`
- 来源：`fao-gap-framework-2003`
##### 废物流
###### 采收损失（`harvest_losses`）
记录田间损失或有文件依据的估算，并注明去向和估算方法。
- 选定流：采收损失（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：损失称量或质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_records`
- 来源：`fao-gap-framework-2003`

### 过程：初级调理和分级（`process_conditioning_grading`）
#### 输入
##### 产品流
###### 调理用水（`conditioning_inputs`）
记录与各批次关联的清洗或其他调理用水。
- 选定流：调理供水（UUID unresolved；intentionally blank）
- 流属性/单位：体积 / m3
- 数量规则：接收、能源和包装记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-gap-framework-2003`
###### 调理能源（`conditioning_energy`）
记录冷却、清洗、分选或包装设备使用的电力、燃料和其他能源。
- 选定流：调理能源供给（UUID unresolved；intentionally blank）
- 流属性/单位：能量或质量 / kWh、MJ 或 kg
- 数量规则：水表、发票和批次关联的运行日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-gap-framework-2003`
###### 木制板条箱（`conditioning_packaging_wood_crate`）

**conditioning_packaging 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

适用时记录调理运行消耗的包装和呈现材料。
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：木制板条箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_conditioning_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-gap-framework-2003`；`fao-package-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 瓦楞纸板箱（`conditioning_packaging_corrugated_box`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：瓦楞纸板箱
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_conditioning_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-gap-framework-2003`；`fao-package-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 聚乙烯包装薄膜（`conditioning_packaging_pe_film`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 记录组成、净质量、使用次数和归还损耗；可重复使用品按实际周转归属，包装与产品质量分开。不同处理去向分别建交换，不假定回收抵扣。

- 选定流：聚乙烯包装薄膜
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_conditioning_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-gap-framework-2003`；`fao-package-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

#### 输出
##### 产品流
###### 可销售浆果（`marketable_berries`）
使用声明农场交付或首个可销售出口处的最终称量产品。
- 选定流：覆盆子、黑莓、桑葚和罗甘莓 `562e96d5-9c9f-4b90-877c-b2ebf33c87cc`
- 流属性/单位：质量 / kg
原始产出计量与核对要求：批次发运重量

- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_yield_records`
- 来源：`fao-gap-framework-2003`
##### 废物流
###### 调理拒收物（`conditioning_rejects`）
按去向和处理路线记录分级拒收物。
- 选定流：调理拒收物（UUID unresolved；intentionally blank）
- 流属性/单位：质量 / kg
- 数量规则：拒收称量或质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售鲜浆果.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售浆果的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_records`
- 来源：`fao-gap-framework-2003`

## 7. 分配和副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_marketable_rejects` | outputs and rejects | 按实测质量和去向分开产品、拒收物和废物；仍有副产品时使用有文件依据的物理或经济基础并报告敏感性。 | `fao-gap-framework-2003` |
| `allocation_multi_period` | perennial systems | 按声明的生产期及产量或时间份额分配共享建植和植株管理负荷。 | `fao-gap-framework-2003` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算和质量规则

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `process_crop_establishment` | inputs and land | field log, invoice, area map | area, age, plants, materials, dates | 对账田间和采购记录；原始汇总与分配：按声明生产期归属 | kg, ha, year | event/annual | 建植和生产期 | each block | 每声明的参考流 | invoices, maps, review |
| `cp_input_records` | `process_crop_management` | inputs | invoice, meter, application log | product, nutrient content, amount, date, field | 采集原始记录并对账；原始汇总与分配：按季节汇总 | kg, kg nutrient, m3, kWh, L | event/monthly | full season | block/site | 每声明的参考流 | invoices, meters |
| `cp_yield_records` | `process_harvest` | outputs | weigh ticket, harvest log | species, grade, mass, date, block | 每批次和出口称量；原始汇总与分配：汇总批次和等级 | kg | each lot | full season | block/outlet | 每声明的参考流 | calibrated scale |
| `cp_harvest_records` | `process_harvest` | harvest materials | issue/waste log | material, quantity, route | 对账领用和退回；原始汇总与分配：按材料汇总 | kg | harvest period | full season | harvest operation | 每声明的参考流 | inventory records |
| `cp_conditioning_records` | `process_conditioning_grading` | conditioning inputs | meter, packing log, invoice | input, amount, lot, energy | 与批次关联的记录；原始汇总与分配：按批次质量分配 | kg, m3, kWh | lot/daily | full season | conditioning unit | 每声明的参考流 | meters, invoices |
| `cp_reject_records` | `process_reject_routing` | rejects and destinations | grading/destination log | mass, quality, destination, treatment | 每批次质量平衡；原始汇总与分配：对账全部输出 | kg | each lot | full season | site/outlet | 每声明的参考流 | receipts, balance |
| `cp_emission_calculation` | all relevant processes | elementary exchanges | calculation record | activity, factor, method, uncertainty | 应用声明方法；原始汇总与分配：计算后归一化 | kg substance or MJ | reporting period | declared period | site/block | 每声明的参考流 | cited method |
| `cp_managed_soil_nitrogen` | `process_crop_management` | direct and indirect soil emissions | nitrogen activity and method ledger | N sources and amounts; amendments; residue N and fate; area; dates; climate; soil; volatilisation; leaching; precursor; factors and units; receiving medium; upstream owner; stocks; accepted output | 按路径核对兼容氮活动，保留原始工作表和方法适用性，再归属并归一化一次。 | kg N; kg compound | application and period close | complete represented plot/season | actual plot | per declared reference flow | activity records; original factor source; precursor balance; uncertainty |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_marketable` | all rows | inventory amount / marketable fresh berry mass | process amount, marketable mass | per kg | `fao-gap-framework-2003` |
| `calc_nutrient_application` | fertilizer card | product mass × declared nutrient fraction; retain product mass | product mass, nutrient fraction | product and nutrient amounts | `fao-gap-framework-2003` |
| `calc_perennial_share` | establishment | shared burden × declared season/yield share | burden, period, yield | season amount | `fao-gap-framework-2003` |
| `calc_mass_balance` | harvest and routing | harvested = marketable + rejects + losses within declared tolerance | all mass records | reconciled balance | `fao-gap-framework-2003` |
| `calc_managed_soil_nitrogen` | `process_crop_management` | 为肥料、有机改良剂、还田残体及适用的管理土壤源选择兼容的直接和间接方法。直接 N2O-N 按适用氮活动乘以对应 EF1 分组因子并另计其他适用源；间接 N2O-N 按适用的挥发氮前体乘 EF4 加淋失或径流氮前体乘 EF5。N2O-N 仅乘44/28换算一次。NH3 与硝酸根须使用独立有依据的物种特定损失比例，不能把全部 NH3+NOx 当 NH3 或全部淋失氮当硝酸根。NH3-N 仅乘17/14、硝酸根氮仅乘62/14换算一次。分开保留组分、源库、介质、方法不确定性和负荷责任，已覆盖排放不得重复。缺少适用数据时不能声称完整，不虚构排放默认值。 | `cp_managed_soil_nitrogen` | molecular emission amounts per declared reference flow | `ipcc-managed-soils-2019`; `mass-balance-identity` |

必须具备可追溯身份、校准称量、完整季节覆盖、地块范围、批次对账、书面分配和缺失数据处理。披露代表性、不确定性、作物年龄、产量变异和未解析身份。

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference flow | 确认一个产品流、质量属性和 kg 单位；未解析身份保留为 review finding。 | `fao-gap-framework-2003` |
| `validation_completeness` | foreground package | 必需过程和协议必须存在，或有理由标记为不适用。 | `fao-gap-framework-2003` |
| `validation_mass_balance` | harvest and routing | 核对采收质量、可销售产品、拒收物和损失；无法解释的差额使验证失败。 | `fao-gap-framework-2003` |
| `validation_nutrient_basis` | fertilizer and amendments | 核对产品、养分含量、数量、日期、面积和原始记录；无标识通用总量不合格。 | `fao-gap-framework-2003`, `source-ipcc-2019-refinement` |
| `validation_managed_soil_coverage` | nitrogen inputs, residues and emissions | 每个适用氮路径须按声明方法定量，或由具名兼容上游数据集覆盖一次。有依据的不适用应记录；缺少活动、因子、物种拆分、介质或归属仍是完整性阻断缺口。拒绝自动置零或重复直接、间接组分。 | `ipcc-managed-soils-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；仅在完整并通过审查后作为 background_dataset |
| downstream_use | 新鲜浆果前景生产及其产品系统建模 |
| allowed_use | 已声明新鲜浆果系统、季节和出口 |
| excluded_use | 加工产品、零售、未指明系统或未披露季节 |
| required_metadata | 物种、品种、地理、年龄、系统、季节、出口、产量、产品、分配、损失 |
| required_quality_disclosure | 完整性、代表性、测量基础、不确定性和未解析身份 |
| update_trigger | 新季节、补植、路线/投入/出口变化或质量平衡更正 |

证据适用性：引用的一般农场记录和采后框架不提供作物特定的产量、寿命、交接截止点或 LCA 分配默认值。这些属于本 PCR 的方法选择，应按实际物种、路线和期间限定，取得兼容的农艺证据后才能声称完整。作者暂定范围仅为筛查辅助，不是经验验收限值，也不能替代实测。

## 11. 数据源

| source_id | type | Reference | Use |
| --- | --- | --- | --- |
| `source-ipcc-2019-refinement` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines | 条件性田间排放和养分计算方法 |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | 仅为一般监测和农场记录背景；作物特定路线、寿命、数量范围及 LCA 分配属于 PCR 选择，须补充适用证据。 |
| `ipcc-managed-soils-2019` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, sections 11.2.1 and 11.2.2 and Tables 11.1/11.3, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Nitrogen activity and direct/indirect N2O methods; no berry-specific yield or universal per-product emission default |
| `mass-balance-identity` | method_factor | Physical conservation of mass and nitrogen, as defined by the stated PCR calculation and precursor ledgers | Conservation constraints only, not measured loss fractions or empirical factors |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-agricultural-energy` | official_guidance | FAO Energy demand and consumption in African agriculture, Annex C case-study results, https://www.fao.org/4/v9766e/v9766e08.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-package-identities` | official_guidance | FAO Packaging for fruits, vegetables and root crops, section 4, https://www.fao.org/4/x5016e/X5016E04.htm | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
