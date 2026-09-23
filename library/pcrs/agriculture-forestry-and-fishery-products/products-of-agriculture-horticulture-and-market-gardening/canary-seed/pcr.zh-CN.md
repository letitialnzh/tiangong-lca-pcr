---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.canary-seed
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 金丝雀草籽粒

## 1. 范围与适用性

本 PCR 适用于收获后在农场门交付的栽培金丝雀草籽粒（annual canarygrass，*Phalaris canariensis*）。范围包括整地、播种、作物管理、收获，以及在交付前发生且用于达到声明交付状态的农场内清理或干燥。适用于鸟食、食品配料或后续加工用籽粒。不包括认证种子繁育、全株青饲料、干草、青贮、放牧、覆盖作物服务、场外清理或碾磨、饲料制造、下游运输和使用。

前景数据包应声明生产地域、品种、作物年份、田块面积、产量、水分、杂质基准、预期用途、残余物去向以及是否包含整理。播种率、杂草控制、收获时间和收获后质量应作为采集数据，不应作为 PCR 固定数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.canary-seed |
| classification_refs | CPC 3.0: 01195 Canary seed |
| covered_products | 农场门交付、用于饲料、食品或后续加工的收获金丝雀草籽粒 |
| excluded_products | 认证种子；全株青饲料、干草、青贮、放牧或覆盖作物服务；碾磨产品；配制鸟食；场外储存和运输 |
| representative_product | 声明水分和质量状态的清理或未清理收获金丝雀草籽粒 |
| production_route | 受管理的一年生金丝雀草种植、收获和有条件的农场内籽粒整理 |
| market_state | 农场门未加工籽粒，声明水分、杂质、处理种子、品种和预期用途状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门金丝雀草籽粒 |
| How much | 1,000 kg 收货基籽粒 |
| How well | 声明水分、杂质、损伤、品种和预期用途规格的收获未加工籽粒 |
| How long or cycle | 一个声明的金丝雀草籽粒作物周期 |
| reference_flow_link | 未整理时来自 `canary_seed_field_production` 的终端籽粒输出，否则来自 `canary_seed_grain_conditioning` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Canary seed, production mix, at farm gate, harvested grain, unprocessed `b390e8bf-4421-40ac-9881-10792f8fef57` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产地域；品种；作物年份；收获籽粒水分；杂质和筛下物基准；预期用途；处理种子状态；是否包含整理 |
| 绑定模式 | `fixed` |
| 流集 |  |
| 流集版本 |  |
| 流集分组 |  |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 参考金丝雀草籽粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按收货籽粒质量报告并记录实测水分；所有干物质或整理换算均保留水分基准。 |
| `area_to_reference_conversion` | 按面积记录的田间流 | 活动对应属性 | 活动对应单位 | 用同一田块和作物周期的可销售籽粒产量除每公顷田间总量，再缩放至 1,000 kg 参考籽粒；最终库存数量使用 `reference_flow` 基准。 |
| `nutrient_content_basis` | 肥料和土壤改良剂 | 养分质量 | kg N、kg P2O5 或 kg K2O | 分别保留制剂产品质量和声明的养分含量，不将 N、P2O5、K2O 合并为一个肥料数量。 |
| `moisture_and_impurity_basis` | 籽粒输出和整理 | 质量和水分 | kg 和质量-% | 说明数量是毛重、清洁净重还是干物质调整值，并将杂质、筛下物和废弃物排除在合格籽粒质量之外。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 金丝雀草籽粒作物周期开始时已准备的田块，种子及外购管理投入跨越前景边界 |
| starting_condition_role | 受管理金丝雀草籽粒生产起点 |
| product_classification_scope | 对应 CPC 3.0 01195 的栽培金丝雀草籽粒 |
| recursive_input_rule | 外购或自留播种种子作为明确的种子投入连接独立的上游种子供应数据集，不得回环至本收获籽粒过程 |
| upstream_dataset_requirement | 为种子、肥料、植保制剂、燃料、电力、灌溉供水和外包服务使用相容的上游数据集 |
| disclosure | 作物类型、品种、地域、作物日期、前茬、耕作、播种率、灌溉、养分产品、农药产品、产量、水分、杂质、残余物去向和整理边界 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | 所有符合性数据集 | 包括整地、播种、作物管理、收获，以及农场门交付前实施的农场内清理或干燥。 | `saskatchewan-canary-seed-guide` |
| `boundary_direct_field_emissions` | 受管理土壤和作物排放 | 使用地域适用方法和养分及残余物核算所用的同一活动数据，包括氮相关直接和间接排放以及相关燃烧或田间排放。 | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | 秸秆、谷壳和作物残余物 | 区分还田、焚烧、作为有用副产品移出和作为废物移出，防止残余物氮和外运物料重复核算。 | `ipcc-2019-managed-soils` |
| `boundary_conditioning_gate` | 有条件的整理 | 仅当清理或干燥在声明的农场门交付前发生时，纳入电力、热量、进料、合格籽粒、筛下物、废弃物和实测水分损失。 | `cgc-canary-seed-grading-2026`; `mass-balance-identity` |
| `boundary_post_farm_gate_exclusion` | 下游活动 | 除非研究范围明确扩展，否则排除场外运输、储存、碾磨、饲料制造、食品加工和使用。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `canary_seed_field_production` | 金丝雀草籽粒田间生产与收获 | required | always | 受管理生物生产和收获 | 一个作物周期的栽培公顷和收获籽粒质量 |
| `canary_seed_grain_conditioning` | 农场内金丝雀草籽粒整理 | conditional | 农场门交付前发生清理、干燥、分选或临时处理，且未嵌入田间记录 | 将收获籽粒整理到声明市场状态 | 匹配的进料和合格籽粒质量 |

### 过程：金丝雀草籽粒田间生产与收获（`canary_seed_field_production`）

#### 输入

##### 产品流

###### 播种用金丝雀草种子（`canary_seed_input`）

记录进入作物周期的外购或自留种子。不得以收获籽粒 UUID 代替种子身份。

- 选定流：播种用金丝雀草种子
- 流属性/单位：质量 / kg
- 数量规则：实测播种种子质量，按田块汇总并从作物周期记录换算到参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒；按田块和作物周期采集，再除以同周期可销售产量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：`saskatchewan-canary-seed-guide`
- 数量范围：公开播种率背景范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：22
  - 上限：45
  - 单位：kg seed/ha
  - 基准：每栽培公顷的条播金丝雀草建植；使用同周期产量换算到参考流
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`saskatchewan-canary-seed-guide`

###### 农业养分与肥料投入（`canary_seed_field_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒；制剂产品质量乘以声明的 N 分数
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：
- 数量范围：暂定氮投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg N/ha
  - 基准：一个作物周期；用同周期可销售产量换算，并以区域证据替代
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定磷投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kg P2O5/ha
  - 基准：一个作物周期；用同周期可销售产量换算，并以土壤检测和区域证据替代
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定钾投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg K2O/ha
  - 基准：一个作物周期；用同周期可销售产量换算，并以土壤检测和区域证据替代
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水供应（`irrigation_water_input`）

灌溉水与降水分开记录。雨养生产的灌溉投入记录为零。

- 选定流：灌溉水供应
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：使用计量体积或经核实的泵流量计算，并换算到参考流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒；作物周期灌溉总量除以同周期可销售籽粒产量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定灌溉筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6,000
  - 单位：m3/ha
  - 基准：一个作物周期，包括零灌溉的雨养生产；用同周期产量换算
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械使用的柴油（`field_diesel_input`）

记录自有或受控机械消耗的柴油。若单独建模外包服务，承包商燃料应归入上游服务数据集。

- 选定流：农业机械用柴油
- 流属性/单位：体积 / L
- 数量规则：按作业分配的实测或发票柴油量，并换算到参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒；作物周期燃料总量除以同周期可销售产量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定田间燃料筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：220
  - 单位：L/ha
  - 基准：完整田间作业周期；用同周期可销售产量换算
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 施用的植保制剂（`crop_protection_input`）

按产品身份和施用事件记录每一种除草剂、杀菌剂、杀虫剂、脱叶剂或其他制剂，在合并前保留有效成分和产品身份。

- 选定流：植保制剂
- 流属性/单位：质量 / kg 制剂
- 数量规则：按制剂记录实测或发票质量，按田块汇总并换算到参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考籽粒；作物周期制剂质量除以同周期可销售产量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定植保筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 制剂/ha
  - 基准：完整作物周期；用同周期可销售产量换算，并保留产品标签
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 金丝雀草籽粒种植的土地占用（`canary_seed_land_occupation`）

记录前景作物周期所代表田块的栽培面积和占用时间。

- 选定流：土地占用，耕地
- 流属性/单位：面积-时间 / m2*a
- 数量规则：栽培面积 × 占用时间，并使用同周期可销售产量换算到参考流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒；面积-时间总量除以同周期可销售产量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定土地占用筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：8
  - 单位：ha*a/1,000 kg grain
  - 基准：一个声明的年度作物周期及其栽培面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 农场门收获金丝雀草籽粒（`harvested_canary_seed_grain_output`）

记录离开田间生产的可销售收获籽粒。若包含整理，该行是进入整理过程的匹配进料，而不是终端参考输出。

- 选定流：Canary seed, production mix, at farm gate, harvested grain, unprocessed `b390e8bf-4421-40ac-9881-10792f8fef57`
- 流属性/单位：质量 / kg
- 绑定模式：`fixed`
- 数量规则：记录声明水分和杂质基准的实测合格或收获籽粒质量，并缩放到 1,000 kg 参考籽粒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 数量范围：暂定可销售产量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：250
  - 上限：3,000
  - 单位：kg grain/ha
  - 基准：每栽培公顷的同周期收获产量；保留田间和地磅实测记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 从田块移出的金丝雀草秸秆或谷壳（`removed_canary_seed_residue_output`）

仅当秸秆或谷壳作为有用副产品或废物跨越田间边界时记录。留在田间或还田的残余物通过残余物去向记录，不作为外运产品。

- 选定流：移出的金丝雀草秸秆或谷壳
- 流属性/单位：质量 / kg 干基或收货基物料
- 数量规则：按实测移出质量、水分和去向记录，并换算到参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒；作物周期残余物质量除以同周期可销售产量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_waste_fate`
- 数量范围：暂定移出残余物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,500
  - 单位：kg residue/ha
  - 基准：仅包括实际移出田块的残余物；用同周期产量换算
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 未移出的田间残余物（`retained_canary_seed_residue`）

记录留在田间或还田的秸秆、谷壳和其他作物残余物。该行用于记录排放所需的残余物去向，不将其当作副产品。

- 选定流：金丝雀草作物残余物，田间保留
- 流属性/单位：质量 / kg 干物质
- 数量规则：由残余物记录、收获产量和实测或有依据的残余物/籽粒比计算，再换算到参考流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_waste_fate`
- 数量范围：暂定保留残余物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,500
  - 单位：kg dry residue/ha
  - 基准：代表田块还田或保留的残余物；用同周期可销售产量换算
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 释放到环境空气的一氧化二氮（`field_n2o_air_output`）

使用选定区域方法，根据肥料、有机投入、残余物氮、挥发和淋失路径计算直接及间接 N2O 排放。

- 选定流：Nitrous oxide, to ambient air
- 流属性/单位：质量 / kg N2O
- 数量规则：将选定 IPCC 或区域方法应用于采集的氮活动数据和残余物去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定 N2O 筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg N2O/1,000 kg grain
  - 基准：完整作物周期；必须声明方法和地域因子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 释放到环境空气的氨（`field_ammonia_air_output`）

根据氮产品类型、施用位置、时间、天气和适用方法因子计算氨挥发。

- 选定流：Ammonia, to ambient air
- 流属性/单位：质量 / kg NH3
- 数量规则：将按产品和施用方式的挥发方法应用于采集的氮记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`emep-eea-2023-guidebook`
- 数量范围：暂定氨筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg NH3/1,000 kg grain
  - 基准：完整作物周期；使用产品及施用记录和经审查的因子
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 释放到水体的硝酸盐（`field_nitrate_water_output`）

根据氮投入、土壤、排水和当地水文，使用选定方法计算水体硝酸盐损失；不得仅由肥料质量推断硝酸盐损失。

- 选定流：Nitrate, to water
- 流属性/单位：质量 / kg NO3-
- 数量规则：将选定区域淋失方法应用于氮活动、土壤、排水和气候记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定硝酸盐损失筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg NO3-/1,000 kg grain
  - 基准：完整作物周期；声明排水条件和因子方法
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 释放到环境空气的氮氧化物（`field_nox_air_output`）

当选定排放方法要求时，记录田间燃烧和氮相关过程产生的氮氧化物。

- 选定流：Nitrogen oxides, to ambient air
- 流属性/单位：质量 / kg NOx
- 数量规则：将选定燃烧或农业排放因子应用于采集的活动数据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定 NOx 筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：12
  - 单位：kg NOx/1,000 kg grain
  - 基准：完整作物周期及其燃料活动
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：农场内金丝雀草籽粒整理（`canary_seed_grain_conditioning`）

#### 输入

##### 产品流

###### 进入整理的收获籽粒（`harvested_canary_seed_conditioning_input`）

仅当清理、干燥、分选或临时处理在声明的农场门交付前发生时纳入。

- 选定流：进入整理的金丝雀草收获籽粒
- 流属性/单位：质量 / kg
- 数量规则：称量进料批次并声明进料水分和杂质基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考籽粒输出；进料批次与终端合格输出核对
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 数量范围：暂定进料至合格品质量筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：950
  - 上限：1,300
  - 单位：kg incoming grain/1,000 kg accepted grain
  - 基准：匹配的整理批次；保留湿质量和水分平衡
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用电力（`conditioning_electricity_input`）

记录农场门交付前纳入的风机、输送机、清理机、提升机及其他设备的电力。

- 选定流：电力供应，适用的场址供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：将电表读数或设备能耗记录分配到匹配的整理批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考籽粒输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 数量范围：暂定整理电力筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kWh/1,000 kg accepted grain
  - 基准：匹配的交付前整理批次
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥用热能供应（`conditioning_heat_input`）

记录农场门交付前使用的外购热或燃料产生的热能，声明能源载体，避免与机械燃料重复计算。

- 选定流：外购过程热
- 流属性/单位：能量 / MJ
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`purchased-process-heat`
- 数量规则：将热表计量、燃料转热计算或供应商记录分配到匹配整理批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考籽粒输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 数量范围：暂定整理热能筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,200
  - 单位：MJ/1,000 kg accepted grain
  - 基准：匹配的交付前干燥批次；声明水分下降和热源
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 农场门整理金丝雀草籽粒（`conditioned_canary_seed_grain_output`）

整理纳入声明路线时使用该终端输出。该输出使用相同参考流身份，并必须声明最终水分和质量基准。

- 选定流：Canary seed, production mix, at farm gate, harvested grain, unprocessed `b390e8bf-4421-40ac-9881-10792f8fef57`
- 流属性/单位：质量 / kg
- 绑定模式：`fixed`
- 数量规则：记录整理后的合格籽粒质量并缩放到 1,000 kg 参考籽粒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考籽粒输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 数量范围：终端参考输出校验
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1,000
  - 上限：1,000
  - 单位：kg accepted grain/1,000 kg reference grain
  - 基准：路线缩放后的 PCR 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 用于明确用途的金丝雀草籽粒筛下物（`canary_seed_screenings_output`）

筛下物被有意销售或转移至有文件记录的用途时单独记录。送往处置的物料归入废弃物行。

- 选定流：用于明确用途的金丝雀草籽粒筛下物或降级籽粒
- 流属性/单位：质量 / kg
- 数量规则：按批次、水分和去向称量筛下物，并换算到参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考籽粒输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 数量范围：暂定有用筛下物筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kg/1,000 kg accepted grain
  - 基准：匹配整理批次和有文件记录的去向
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 杂质和废弃籽粒（`conditioning_reject_waste_output`）

记录送往处置或非产品处理路线的杂质、石块、处理种子、受损籽粒和其他废弃物，不得将其计入合格籽粒。

- 选定流：金丝雀草籽粒整理废弃物和杂质
- 流属性/单位：质量 / kg
- 数量规则：按去向和批次称量废弃物质量，并换算到参考流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考籽粒输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`cgc-canary-seed-grading-2026`
- 数量范围：暂定整理废弃物筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg/1,000 kg accepted grain
  - 基准：匹配整理批次；区分杂质、有用筛下物和处置废弃物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 田间生产和整理 | 优先分别记录田间生产和整理，并在分配共用负荷前分别计量籽粒、移出残余物、筛下物和废弃物。 | `iso-14044-2006` |
| `allocation_retained_residue` | 保留或还田残余物 | 不将保留残余物作为副产品；将其管理和排放纳入田间生产，并防止与移出残余物重复计算。 | `ipcc-2019-managed-soils` |
| `allocation_removed_residue` | 有用移出秸秆或谷壳 | 若无法通过拆分解决田间共用负荷，按同期农场门价值进行经济分配；声明水分基准，并将质量分配作为敏感性分析。 | `iso-14044-2006` |
| `allocation_conditioning_outputs` | 有用筛下物和废弃物 | 有明确正向用途的输出作为副产品，处置物料作为废物；只有无法拆分时才在整理交接点使用经济分配。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `canary_seed_field_production` | seed, nutrients, irrigation, fuel, crop protection, land | 田间日志、发票、施用记录、计量表或承包商记录 | field_id; area; cultivar; input_product; amount; nutrient_content; date; operation; contractor_scope | 将物理投入和作业核对至每一代表田块和作物周期 | kg; kg nutrient; L; m3; ha | 每个事件 | 完整作物周期 | 所有代表田块 | 按物理身份汇总；不合并产品而计算养分；按同周期面积和产量换算 | 发票；标签；计量表校准；田间日志 |
| `cp_harvest_output_records` | `canary_seed_field_production` | grain and removed residue | 地磅、产量监测、含水率检测、打捆记录 | field_id; harvest_date; grain_mass; grain_moisture; impurity; residue_mass; residue_moisture; residue_fate; destination | 将合格籽粒和每一残余物去向核对至田块面积和作物周期 | kg; percent; ha | 每次收获 | 完整作物周期 | 所有代表田块 | 分别汇总合格籽粒和各残余物去向 | 计量或产量监测校准；水分检测；去向证据 |
| `cp_field_emission_activity` | `canary_seed_field_production` | emissions to air and water | 养分、土壤、天气、残余物、排水和排放模型记录 | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | 使用一个声明的地域适用方法计算每种排放 | kg N; kg emission; ha | 每个事件及作物周期计算 | 完整作物周期 | 所有代表田块 | 按田块计算、按面积加权，再按同周期产量换算 | 来源记录；因子来源；模型文件；氮平衡审查 |
| `cp_residue_and_waste_fate` | `canary_seed_field_production` | retained and removed residues | 田间残余物日志、打捆票据、焚烧或还田记录 | field_id; residue_mass; dry_matter; fate; destination; date | 将残余物去向连接到产量所用的同一收获和田块记录 | kg; percent; ha | 每田块每次收获 | 完整作物周期 | 所有代表田块 | 按去向汇总；从副产品输出排除保留残余物 | 田间记录；去向收据；残余物计算证据 |
| `cp_conditioning_records` | `canary_seed_grain_conditioning` | incoming grain, energy, accepted grain, screenings, rejects | 批次单、地磅、水分检测、电力或热量计、去向记录 | batch_id; incoming_mass; incoming_moisture; electricity; heat; accepted_mass; accepted_moisture; screenings; rejects | 将匹配整理批次和计量表核对至合格输出 | kg; percent; kWh; MJ | 每批或计量周期 | 所有交付前整理 | 所有纳入设备和批次 | 汇总匹配批次；按时间或处理质量分配共用计量；闭合湿质量平衡 | 校准地磅和水分仪；计量表核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field flows | 每公顷作物周期量 / 每公顷可销售籽粒产量 × 1,000 kg | 流数量；面积；同周期籽粒质量 | 每 1,000 kg 参考籽粒的数量 |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | 产品质量 × 声明养分分数；保留 N、P2O5 和 K2O 报告基准 | 产品身份；质量；检测；报告基准 | 按来源的养分数量 |  |
| `calc_managed_soil_n2o` | soil N2O | 将选定 IPCC 层级或区域方法应用于肥料氮、有机氮、还田残余物氮、挥发和淋失路径 | 氮活动；残余物去向；土壤和气候；因子 | 按路径的 kg N2O | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | 按肥料类型、施用方式、时间和适用因子计算 | 氮产品记录；施用信息；因子 | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_nitrate_loss` | nitrate to water | 将选定区域排水或淋失方法应用于氮活动和水文记录 | 氮活动；土壤；排水；气候；因子 | kg NO3- | `ipcc-2019-managed-soils` |
| `calc_conditioning_mass_balance` | grain conditioning | 湿籽粒进料 = 合格籽粒 + 有用筛下物 + 废弃物 + 水分及其他实测损失，并在不确定性内闭合 | 质量；水分；损失记录 | 按合格籽粒核算的整理输出 | `mass-balance-identity` |
| `calc_moisture_adjustment` | grain and residue mass | 使用实测水分在收货基和声明干物质基准之间换算，并保留原始及换算值 | 质量；水分；目标基准 | 调整质量 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 确认是金丝雀草籽粒而非小麦、黑麦、混合谷物或其他鸟食成分；保留品种、预期用途、状态和交付信息。 | 作物、批次、等级和销售记录 |
| `dq_temporal_alignment` | all foreground rows | 投入、收获、产量、排放、残余物和整理记录使用同一作物周期；声明代理年份。 | 有日期的田间和批次记录 |
| `dq_mass_and_moisture` | grain, residue, and conditioning | 每次基准换算均保留计量或产量监测校准和水分检测。 | 校准和水分检测记录 |
| `dq_quality_and_impurity` | grain outputs | 保留杂质、筛下物、处理种子状态、品种、气味、损伤和预期用途的检验或实验室证据。 | 分级或实验室记录 |
| `dq_completeness` | process map and flows | 核对每个田块和整理批次，并区分零、不适用、代理和缺失值。 | 田块清单；批次核对 |
| `dq_identity_resolution` | parameterized and unmapped flows | 在最终 TIDAS 过程发布前，将所有流集引用和未映射物理交换解析为经核实的 UUID。 | 身份审查记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | terminal output | 缩放后恰有一个终端金丝雀草籽粒输出等于 1,000 kg，使用固定参考 UUID，并声明水分和质量限定信息。 |  |
| `validation_process_route` | process map | 田间生产只纳入一次；只有在农场门交付前发生整理时纳入整理过程，避免嵌入能源、进料或废弃物重复计算。 |  |
| `validation_crop_cycle_reconciliation` | field inventory | 面积、投入、收获输出、残余物去向和排放均对应同一田块和作物周期。 |  |
| `validation_nitrogen_balance` | nitrogen inventory | 核对养分含量、还田及移出残余物氮和排放路径，并披露方法和因子。 | `ipcc-2019-managed-soils` |
| `validation_quality_state` | grain identity and output | 说明籽粒是毛收获、清理、干燥还是其他整理状态；使杂质和水分基准与声明参考状态一致。 | `cgc-canary-seed-grading-2026` |
| `validation_conditioning_balance` | conditioning | 在不确定性内核对进料与合格籽粒、有用筛下物、废弃物、水分损失及其他实测损失。 | `mass-balance-identity` |
| `validation_flow_identity` | every flow | 仅将精确核实的 UUID 作为 `fixed`，将适用的现有流集作为 `parameterized`；否则保留未映射覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 金丝雀草籽粒前景生产数据集 |
| downstream_use | `secondary_dataset`；审查和发布后可作为 `background_dataset` |
| allowed_use | 金丝雀草籽粒农场门 LCA 及保留声明地域、水分、杂质、残余物、分配和整理背景的下游系统 |
| excluded_use | 认证种子、全株青饲料或青贮、碾磨、配制鸟食，或未审查代理的其他作物 |
| required_metadata | 地域；品种；作物年份；面积；产量；水分；杂质；预期用途；播种；养分；植保；燃料；灌溉；残余物去向；整理；分配；身份解析 |
| required_quality_disclosure | 前景覆盖；代理投入；缺失记录；范围超限；排放方法；计量和质量平衡核对；分级或实验室证据 |
| update_trigger | 新的金丝雀草籽粒证据、生产路线重大变化、排放方法修订、流集或 UUID 身份变更，或代表性数据超出 QA 范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `saskatchewan-canary-seed-guide` | official_guidance | Government of Saskatchewan, Canary Seed specialty crop guidance, https://www.saskatchewan.ca/business/agriculture-natural-resources-and-industry/agribusiness-farmers-and-ranchers/crops-and-irrigation/field-crops/specialty-crops/canary-seed | 作物身份、生产路线、播种背景和田间管理披露 |
| `cgc-canary-seed-grading-2026` | official_guidance | Canadian Grain Commission, Official Grain Grading Guide, Chapter 23: Canary seed, effective August 1, 2026, https://www.grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/23-canary-seed/grading.html | 清洁样品定义、杂质、处理种子、品种、质量、整理和分级限定信息 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 土壤 N2O、残余物氮、挥发和淋失路径以及重复计算控制 |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023 | 农业氨和空气排放方法背景 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级和披露 |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched canary seed conditioning batches | 水分调整、整理质量平衡和校验 |
