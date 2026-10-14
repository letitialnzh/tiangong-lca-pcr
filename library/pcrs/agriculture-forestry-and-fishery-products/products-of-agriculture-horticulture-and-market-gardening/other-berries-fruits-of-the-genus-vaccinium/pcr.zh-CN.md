---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-berries-fruits-of-the-genus-vaccinium
language: zh-CN
status: active
sync_with: pcr.en-US.md
---

# 其他浆果；越橘属水果

## 1. 适用范围
覆盖在农场出场或第一调理出口销售的栽培鲜果或冷藏越橘属水果，包括蓝莓、越橘和蔓越莓等。加工品、冷冻后产品、苗木和野生采集产品不适用。

## 2. 产品类别身份
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-berries-fruits-of-the-genus-vaccinium` |
| classification_refs | CPC 3.0 / 01355 / exact; mapping relation: narrower |
| covered_products | 栽培鲜果或冷藏越橘属水果 |
| excluded_products | 加工、冷冻、苗木和野生采集产品 |
| representative_product | 可销售栽培蓝莓或蔓越莓 |
| production_route | 经营性生产；栽培；采收；分选；初级调理；出口 |
| market_state | 指定出口处可销售果实 |

## 3. 参考流
| Field | Value |
| --- | --- |
| What | 指定出口处可销售栽培越橘属水果 |
| How much | 1 kg |
| How well | 声明的种/品种、等级、成熟度、状态和出口 |
| How long or cycle | 一个生产年度或作物周期；适用时分摊多年生建园 |
| reference_flow_link | saleable_fruit |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| 参考产品流 | 其他浆果，越橘属水果 `b9b4cf8e-fbb5-46a3-a4ba-0c9c98d46745` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/cultivar; fresh or chilled state; grade; maturity; production year; outlet; fruit mass basis; irrigation status |

本参考 UUID 表示新鲜、未加工的农场门产品。使用该绑定前须核对实际物种、产品状态及交接门；独立包装站、进一步加工或不兼容状态的输出必须单独核实身份，不得直接继承此 UUID。身份核实不改变本 PCR 的实际系统边界或数量归一化要求。

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | reference product | Mass | kg | 按出口可销售果实质量归一化，不含包装。 |
| `measure_fertilizer_n_basis` | fertilizer inputs | Product and nutrient mass | kg product; kg N/P2O5/K2O | 记录实际产品和供应商养分基准，不得自行推断。 |
| `measure_irrigation_water` | irrigation input | Volume or mass | m3 or kg | 使用水表或供水记录；仅凭有记录的密度换算。 |
| `measure_perennial_allocation` | perennial establishment | Area, productive years, yield | ha, year, kg | 按有记录的生产年限和产量分摊建园。 |

## 5. 系统边界
### 边界抽象
| Field | Value |
| --- | --- |
| declared_starting_condition | 期初经营性地块及其声明的建园状态 |
| starting_condition_role | 农业前景生产起始条件 |
| product_classification_scope | CPC 01355 栽培越橘属水果；分类仅作映射语境 |
| recursive_input_rule | 同类产品投入处停止递归并引用上游数据集。 |
| upstream_dataset_requirement | 对跨边界的种苗、肥料、改良剂、能源、水、包装和服务提供上游数据集。 |
| disclosure | 披露种/品种、系统、面积、建园、期间、出口、等级、灌溉、投入、产量、次品和分配。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_outlet` | all datasets | 从经营地块到声明农场出场/第一调理出口；披露采后步骤。 | `iso-14044-2006` |
| `boundary_recursive_same_category` | recursive product inputs | 在同类声明投入处停止追溯并引用上游数据集。 | `iso-14044-2006` |
| `boundary_establishment_disclosure` | perennial systems | 仅按记录将建园投入分摊到报告周期。 | `iso-14044-2006` |

## 6. 过程清单结构
### 过程图
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_establishment` | 地块建园 | conditional | 多年生地块 | managed biological production | site-specific records |
| `p_cultivation` | 栽培与作物保护 | required | 全部作物周期作业 | managed biological production | site-specific records |
| `p_harvest` | 采收与捕获 | required | 人工或机械采收 | harvest capture | site-specific records |
| `p_conditioning` | 分选与初级调理 | conditional | 出口前发生 | grading and conditioning | site-specific records |
| `p_rejects` | 次品去向 | conditional | 次品离开系统 | reject routing | mass balance |

### 过程：栽培与作物保护（`p_cultivation`）
#### 输入
##### 产品流
###### 尿素肥料（`p_cultivation_agricultural_nutrient_inputs_urea`）

**p_cultivation_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

逐一采集每种肥料产品。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。
原始活动或阶段基准：每 1 kg 可销售果实.

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cultivation_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 硫酸铵肥料（`p_cultivation_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cultivation_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 重过磷酸钙肥料（`p_cultivation_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cultivation_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 氯化钾肥料（`p_cultivation_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cultivation_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`fao-gap-framework-2003`；`fao-fertilizer-identities`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 作为肥料施用的牛粪（`p_cultivation_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cultivation_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`fao-gap-framework-2003`；`fao-organic-nutrients`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 施入土壤的植物残体堆肥（`p_cultivation_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_cultivation_inputs` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`fao-gap-framework-2003`；`fao-organic-nutrients`

- 数量范围：独立台账可用量核对，不是推荐用量
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：同期本身份可用量 * 声明参考量 / 同边界合格产出量
  - 单位：kg / 声明参考流
  - 基准：库存期初量加同期收货、实测自产或计量供给，扣除期末库存及向其他边界的转出；均采用本卡单位，归属份额不得超过 1；缺失台账则本核对不可执行
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 灌溉水（`cultivation_irrigation_water`）
按地块和季节记录计量或交付的灌溉水。
- 选定流：Irrigation water（UUID unresolved；intentionally blank）
- 流属性/单位：Volume / m3
- 数量规则：水表或供水记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售果实.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`fao-gap-framework-2003`
#### 输出
##### 产品流
###### 作物产出（`cultivation_crop_output`）
根据作物周期质量平衡记录分选前采收的越橘属果实。
- 选定流：Vaccinium fruit（UUID unresolved；intentionally blank）
- 流属性/单位：Mass / kg
- 数量规则：分选前采收质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售果实.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_mass_balance`
- 来源：`fao-gap-framework-2003`

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

### 过程：采收与捕获（`p_harvest`）
#### 输入
##### 产品流
###### 采收耗材（`harvest_consumables`）
按作业记录实际采收辅助物、耗材和田间包装。
- 选定流：采收耗材或田间包装（UUID unresolved；intentionally blank）
- 流属性/单位：质量或数量 / kg 或 item
- 数量规则：设备日志或发票
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 采收果实.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`fao-gap-framework-2003`
###### 采收能源（`harvest_energy`）
记录采收设备或外购采收服务使用的电力、燃料和其他能源载体。
- 选定流：采收能源供给（UUID unresolved；intentionally blank）
- 流属性/单位：能量或质量 / kWh、MJ 或 kg
- 数量规则：设备日志、水表、承包商记录或发票
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 采收果实.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`fao-gap-framework-2003`
#### 输出
##### 产品流
###### 采收果实（`harvested_fruit`）
使用采收前的秤重或周转箱记录。
- 选定流：Vaccinium fruit（UUID unresolved；intentionally blank）
- 流属性/单位：Mass / kg
- 数量规则：称重或周转箱记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 采收果实.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_mass_balance`
- 来源：`fao-gap-framework-2003`

### 过程：分选与初级调理（`p_conditioning`）
#### 输入
##### 产品流
###### 待调理采收果实（`conditioning_input_fruit`）
将接收重量与进入调理的采收批次关联。
- 选定流：Harvested Vaccinium fruit（UUID unresolved；intentionally blank）
- 流属性/单位：Mass / kg
- 数量规则：接收称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售果实.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_mass_balance`
- 来源：`fao-gap-framework-2003`
##### 废物流
#### 输出
##### 产品流
###### 可销售果实（`saleable_fruit`）
使用声明出口处最终称量的可销售果实。
- 选定流：其他浆果，越橘属水果 `b9b4cf8e-fbb5-46a3-a4ba-0c9c98d46745`
- 流属性/单位：Mass / kg
原始产出计量与核对要求：指定出口的分级产出

- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售果实.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_mass_balance`
- 来源：`fao-gap-framework-2003`


##### 废物流

###### 分选次品（`conditioning_rejects`）
按去向和处理路线记录分选次品。
- 选定流：Fruit rejects（UUID unresolved；intentionally blank）
- 流属性/单位：Mass / kg
- 数量规则：次品称重或质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 可销售果实.

- 归一化基准：每声明的参考流
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_mass_balance`
- 来源：`fao-gap-framework-2003`
## 7. 分配与联产品处理
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_saleable_reject` | 可销售果实、实际副产品和处置拒收物 | 优先细分直接计量作业。处置拒收物及保留损失不分得副产品份额，其生产和处理负荷保留在产生它们的可销售产品路线。只有功能有证据、被有意独立交付的产品才可进入有依据的联产品分配；一次性记录数量、依据和敏感性。不得按商品与废物的简单质量分流转走作物负荷。 | `iso-14044-2006` |
| `allocation_perennial_establishment` | perennial establishment | 按有记录的生产年限和年度产量分摊并披露敏感性。 | `iso-14044-2006` |
| `allocation_intercrop_shared_area` | shared plots | 使用实测面积/时间份额或有记录的物理/经济依据。 | `iso-14044-2006` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算与质量规则

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。

### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_inputs` | `p_cultivation` | inputs | invoices, logs, meters | product; nutrient; amount; water; date; area | record reconciliation；原始汇总与分配：sum by plot/product | kg; kg nutrient; m3 | per operation | full crop cycle | each plot | 每声明的参考流 | supplier declaration; meter check |
| `cp_harvest_records` | `p_harvest` | harvest energy | logs and invoices | equipment; energy; hours; crates | log/invoice reconciliation；原始汇总与分配：sum by operation | kWh; L; h; kg | per event | harvest season | each line | 每声明的参考流 | scale ticket; invoice |
| `cp_harvest_mass_balance` | `p_harvest,p_conditioning,p_rejects` | outputs | scale and destination records | input; saleable; reject; loss; destination | lot weighing；原始汇总与分配：input = outputs + loss | kg | per lot | harvest and conditioning | each lot | 每声明的参考流 | calibrated scale; reconciliation |
| `cp_establishment_records` | `p_establishment` | establishment | land and planting register | area; year; plants; productive years | register and supplier records；原始汇总与分配：allocate by output | ha; year; kg/item | annual | establishment onward | each plot | 每声明的参考流 | invoice; register |
| `cp_conditioning_records` | `p_conditioning` | utilities | meter and production log | utility; lot; time | meter or documented allocation；原始汇总与分配：allocate by output | kWh; m3; h | lot/month | conditioning period | site | 每声明的参考流 | meter; log |
| `cp_managed_soil_nitrogen` | `p_cultivation` | direct and indirect soil emissions | nitrogen activity and method ledger | N sources and amounts; amendments; residue N and fate; area; dates; climate; soil; volatilisation; leaching; precursor; factors and units; receiving medium; upstream owner; stocks; accepted output | 按路径核对兼容氮活动，保留原始工作表和方法适用性，再归属并归一化一次。 | kg N; kg compound | application and period close | complete represented plot/season | actual plot | per declared reference flow | activity records; original factor source; precursor balance; uncertainty |
### 计算规则
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_saleable_mass` | all flow rows | 期间量 / 出口可销售果实质量。 | quantity; saleable mass | per kg saleable fruit | `iso-14040-2006` |
| `calc_establishment_allocation` | `p_establishment` | 建园负荷 × 报告份额 / 年度可销售产量。 | burden; years; output | allocated burden | `iso-14044-2006` |
| `calc_mass_balance` | harvest and conditioning | 在称量不确定度内核对投入、可销售产出、次品和损失。 | lot records | reconciled totals | `fao-gap-framework-2003` |
| `calc_nutrient_basis` | fertilizer and amendments | 产品量 × 供应商养分比例，并保留两种量。 | product; declaration | product and nutrient mass | `fao-gap-framework-2003` |
| `calc_managed_soil_nitrogen` | `p_cultivation` | 为肥料、有机改良剂、还田残体及适用的管理土壤源选择兼容的直接和间接方法。直接 N2O-N 按适用氮活动乘以对应 EF1 分组因子并另计其他适用源；间接 N2O-N 按适用的挥发氮前体乘 EF4 加淋失或径流氮前体乘 EF5。N2O-N 仅乘44/28换算一次。NH3 与硝酸根须使用独立有依据的物种特定损失比例，不能把全部 NH3+NOx 当 NH3 或全部淋失氮当硝酸根。NH3-N 仅乘17/14、硝酸根氮仅乘62/14换算一次。分开保留组分、源库、介质、方法不确定性和负荷责任，已覆盖排放不得重复。缺少适用数据时不能声称完整，不虚构排放默认值。 | `cp_managed_soil_nitrogen` | molecular emission amounts per declared reference flow | `ipcc-managed-soils-2019`; `mass-balance-identity` |
### 数据质量要求
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all rows | 声明种/品种、状态、等级、出口和路线；未解析身份阻塞审查。 | lot and supplier records |
| `dq_completeness` | all processes | 覆盖生产周期并核对投入、产出、次品和损失。 | protocol records |
| `dq_temporal` | all rows | 声明报告期、作物周期和多年生分摊。 | farm register |
| `dq_measurement` | quantitative rows | 优先校准秤/表计并保留假设和不确定度。 | calibration records |
| `dq_disclosure` | published datasets | 披露缺失数据、估算、灌溉、改良剂、次品和分配。 | quality statement |

## 9. 验证规则
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | reference flow | 参考量为 1 kg 可销售果实并匹配出口和质量基准。 | `iso-14040-2006` |
| `validation_mass_balance` | harvest and conditioning | 投入、可销售产出、次品和损失必须平衡，差额形成发现项。 | `fao-gap-framework-2003` |
| `validation_nutrient_declaration` | fertilizer and amendments | 产品量和养分基准可追溯至供应商或原始记录。 | `fao-gap-framework-2003` |
| `validation_boundary_disclosure` | all datasets | 检查起始条件、出口、纳入、递归、建园和排除项。 | `iso-14044-2006` |
| `validation_quality_disclosure` | all datasets | 报告时间、地域、完整性、计量、估算和分配限制。 | `iso-14040-2006` |
| `validation_managed_soil_coverage` | nitrogen inputs, residues and emissions | 每个适用氮路径须按声明方法定量，或由具名兼容上游数据集覆盖一次。有依据的不适用应记录；缺少活动、因子、物种拆分、介质或归属仍是完整性阻断缺口。拒绝自动置零或重复直接、间接组分。 | `ipcc-managed-soils-2019` |

## 10. 发布数据集画像
| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset；上游链接完整时为 background_dataset |
| downstream_use | 栽培越橘属水果的前景过程和生命周期模型构建 |
| allowed_use | 在声明的种/系统、出口、期间和分配范围内建模 |
| excluded_use | 不得替代加工、冷冻、野生、苗木或不同系统 |
| required_metadata | species/cultivar; geography; system; period; outlet; grade; irrigation; inputs; yield; rejects; allocation; upstream links |
| required_quality_disclosure | 完整性、代表性、计量、估算、不确定度、分配和未解析 UUID |
| update_trigger | 系统、灌溉、投入、出口、等级、分配或原始数据发生实质变化 |

证据适用性：引用的一般农场记录和采后框架不提供作物特定的产量、寿命、交接截止点或 LCA 分配默认值。这些属于本 PCR 的方法选择，应按实际物种、路线和期间限定，取得兼容的农艺证据后才能声称完整。作者暂定范围仅为筛查辅助，不是经验验收限值，也不能替代实测。

## 11. 数据源
| source_id | type | reference | use |
| --- | --- | --- | --- |
| `iso-14040-2006` | standard | ISO 14040:2006 | 功能单位和质量框架 |
| `iso-14044-2006` | standard | ISO 14044:2006 | 边界、分配、递归和验证 |
| `fao-gap-framework-2003` | official_guidance | FAO Committee on Agriculture, COAG/2003/6, Development of a Framework for Good Agricultural Practices, section IV paragraphs 24–26 and Annex, https://www.fao.org/4/y8704e/y8704e.htm | 仅为一般监测和农场记录背景；作物特定路线、寿命、数量范围及 LCA 分配属于 PCR 选择，须补充适用证据。 |
| `ipcc-managed-soils-2019` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, sections 11.2.1 and 11.2.2 and Tables 11.1/11.3, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Nitrogen activity and direct/indirect N2O methods; no berry-specific yield or universal per-product emission default |
| `mass-balance-identity` | method_factor | Physical conservation of mass and nitrogen, as defined by the stated PCR calculation and precursor ledgers | Conservation constraints only, not measured loss fractions or empirical factors |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
