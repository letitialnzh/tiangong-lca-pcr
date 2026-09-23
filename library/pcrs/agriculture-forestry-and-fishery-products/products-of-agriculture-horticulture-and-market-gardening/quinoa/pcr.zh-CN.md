---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.quinoa
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 藜麦籽粒

## 1. 范围与适用性

本 PCR 覆盖收获后在农场交付的栽培藜麦（Chenopodium quinoa）籽粒。范围包括雨养和灌溉生产、常规和有机管理，以及在交付前发生且位于农场边界内的可选干燥或清选。产品仍为收获籽粒，不作为脱壳藜麦或藜麦粉处理。

范围不包括认证种子繁育、藜麦叶或饲草、全株服务、爆米藜麦或熟制藜麦、脱壳籽粒、面粉、片状产品、包装食品、场外储存、加工和配送。数据集必须说明干燥、清选或农场内临时储存是否位于所声明的农场边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.quinoa |
| classification_refs | CPC 3.0: 01194 Quinoa |
| covered_products | 农场交付、用于食品、饲料或进一步加工的收获藜麦籽粒 |
| excluded_products | 认证种子；叶或饲草；爆米、熟制、脱壳、碾磨、压片或包装产品；场外服务 |
| representative_product | 未加工收获藜麦籽粒 |
| production_route | 藜麦种植、收获以及有条件的农场内籽粒整理 |
| market_state | 在农场交付、声明水分、杂质和用途状态的未加工籽粒 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场交付的藜麦籽粒 |
| How much | 1,000 kg 按收到状态的籽粒 |
| How well | 已收获、未加工，并声明水分、异物、损伤和用途的籽粒 |
| How long or cycle | 一个声明的藜麦种植周期 |
| reference_flow_link | 不含整理时来自 `quinoa_field_production` 的终端籽粒输出；含整理时来自 `quinoa_grain_conditioning` 的终端输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Quinoa, production mix, at farm gate, harvested grain, unprocessed `21dd21b4-e6ec-43c2-b2c8-c18f47567236` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种；生产地理位置；收获年份；雨养或灌溉状态；收获日期；交付水分；异物基础；用途；是否包含整理 |
| 绑定模式 | `fixed` |
| Flow Set |  |
| Flow Set version |  |
| Flow Set group |  |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 参考藜麦籽粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告按收到状态的籽粒质量和实测水分；每次干物质换算都保留水分基础。 |
| `area_to_reference_conversion` | 按面积计的田间流 | 活动特定属性 | 活动特定单位 | 用同一地块、同一种植周期的可销售籽粒产量，将每公顷种植周期总量换算并缩放到 1,000 kg 籽粒。 |
| `nutrient_content_basis` | 养分施用 | 养分质量 | kg N、kg P2O5 或 kg K2O | 分别保留配方产品质量和声明的养分含量基础，不得只根据产品名称推断养分质量。 |
| `water_and_energy_units` | 灌溉和能源 | 体积、质量或能量 | m3、kg、MJ 或 kWh | 以计量器的原生单位记录灌溉水和能源，记录换算并保留抽水或载能体假设。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 藜麦种植周期开始时已整备的农田，种子和购买的管理投入从此边界进入 |
| starting_condition_role | 管理型藜麦籽粒生产的开始 |
| product_classification_scope | 对应 CPC 3.0 code 01194 的栽培藜麦籽粒 |
| recursive_input_rule | 购买或保留的藜麦播种种子作为明确的种子投入，并连接独立的上游种子供应数据集，不得回接本收获籽粒过程 |
| upstream_dataset_requirement | 种子、肥料、土壤改良剂、农药产品、燃料、电力、灌溉供水和外包服务的兼容上游数据集 |
| disclosure | 品种、地理位置、地块面积、播种与收获日期、前茬、耕作、灌溉、投入、产量、水分、残余物去向、整理和分配背景 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | 所有符合要求的数据集 | 纳入田间整备、播种、作物管理、收获，以及在声明的农场交付前完成的农场内清选或干燥。 | `fao-quinoa-cultivation-guide`; `iso-14044-2006` |
| `boundary_direct_field_emissions` | 管理土壤和作物投入 | 使用适用于地理区域的方法，纳入与养分和残余物核算使用同一活动数据的直接和间接含氮排放。 | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | 藜麦残余物 | 区分还田、焚烧、作为有用产品移出和作为废物移出；移出的残余物氮不得计入土壤残余物氮。 | `ipcc-2019-managed-soils` |
| `boundary_post_farm_gate_exclusion` | 下游活动 | 排除场外运输、储存、脱壳、碾磨、食品或饲料制造、包装和使用，除非研究明确扩展到本 PCR 之外。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `quinoa_field_production` | 藜麦田间生产与收获 | required | always | 管理型生物生产和收获 | 一个种植周期的种植面积和收获籽粒质量 |
| `quinoa_grain_conditioning` | 农场内藜麦籽粒整理 | conditional | 在农场交付前发生干燥、清选、分选或临时处理，且未包含在田间记录中 | 为声明的农场交付状态准备收获籽粒 | 进入和接收的籽粒质量 |

### 过程：藜麦田间生产与收获（`quinoa_field_production`）

#### 输入

##### 产品流

###### 藜麦播种种子（`quinoa_seed_input`）

记录进入种植周期的购买或保留藜麦种子。不得用收获籽粒参考流替代种子身份。

- 选定流：Quinoa seed for sowing
- 流属性/单位：Mass / kg
- 数量规则：实测播种种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并以同周期可销售产量换算
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_field_activity_records`
- 来源：`fao-quinoa-cultivation-guide`
- 数量范围：初始藜麦播种量筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：4
  - 上限：15
  - 单位：kg seed/ha
  - 基准：条播或可比建植方式；超出范围须说明理由
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`quinoa_field_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算到 1,000 kg 籽粒
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_field_activity_records`
- 来源：
- 数量范围：暂定氮投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg N/ha
  - 基准：一个种植周期；以土壤检测和区域证据替代
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定磷投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kg P2O5/ha
  - 基准：一个种植周期；以土壤检测和区域证据替代
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定钾投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg K2O/ha
  - 基准：一个种植周期；以土壤检测和区域证据替代
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`irrigation_water_input`）

将进入田间的水与降水分开记录；仅在证明为雨养田时使用零值。

- 选定流：Irrigation water supply
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：计量体积或经验证的泵流量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算到 1,000 kg 籽粒
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_field_activity_records`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：7000
  - 单位：m3/ha
  - 基准：一个种植周期，包括零灌溉的雨养生产
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的移动机械燃料（`field_mobile_fuel_input`）

记录田间作业消耗的柴油或其他机械燃料；不得包含在上游投入数据集中的燃料。

- 选定流：Mobile machinery fuel
- 流属性/单位：Energy or mass / MJ or kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：按作业实测燃料用量或经验证的承包商分摊
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算到 1,000 kg 籽粒
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_field_activity_records`
- 数量范围：暂定田间燃料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：L/ha
  - 基准：一个种植周期的田间作业
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉或田间设备用电（`field_electricity_input`）

仅记录前景边界内田间设备或灌溉抽水使用的外购电力。

- 选定流：Electricity supply
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：将电表读数或泵能耗计算分配至藜麦田
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算到 1,000 kg 籽粒
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_field_activity_records`
- 数量范围：暂定田间用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：900
  - 单位：kWh/ha
  - 基准：适用时包括田间设备和灌溉抽水
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的农药产品（`crop_protection_input`）

按产品、有效成分和施用事件记录每种除草剂、杀虫剂、杀菌剂或其他农药制剂。制剂身份在验证兼容产品流前保持证据缺口。

- 选定流：Crop-protection formulation by product and active ingredient
- 流属性/单位：Mass / kg product
- 数量规则：按产品和事件记录制剂实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每公顷种植面积，并换算到 1,000 kg 籽粒
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_input_identity_records`
- 数量范围：暂定农药筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg product/ha
  - 基准：一个种植周期；未施用产品时零值有效
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的土壤改良剂（`soil_amendment_input`）

仅在石灰、石膏、堆肥或其他改良剂跨越所声明的田间边界时记录，并识别其组成和施用事件。

- 选定流：Soil amendment by material identity
- 流属性/单位：Mass / kg product
- 数量规则：按材料和地块记录改良剂实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每公顷种植面积，并换算到 1,000 kg 籽粒
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_field_activity_records`
- 数量范围：暂定土壤改良剂筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2500
  - 单位：kg product/ha
  - 基准：一个种植周期；必须说明材料组成
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 藜麦种植的土地占用（`land_occupation_input`）

将地块面积和种植周期占用时间作为基本资源投入记录。

- 选定流：Land occupation by agricultural cultivation
- 流属性/单位：Area-time / m2*a
- 数量规则：种植面积乘以占用时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算到 1,000 kg 籽粒
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_field_activity_records`

###### 从环境中提取的灌溉水（`irrigation_withdrawal_input`）

在前景操作者从自然来源抽水时记录直接取水。不得重复计算已由上游灌溉供水数据集表示的水。

- 选定流：Water resource withdrawal for irrigation
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量取水量或经验证的水源流量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算到 1,000 kg 籽粒
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_field_activity_records`

#### 输出

##### 产品流

###### 送往整理的收获藜麦籽粒（`harvested_quinoa_grain_output`）

记录离开田间过程的已收获、可销售籽粒。包含整理时这是内部产品转移，不包含整理时这是终端参考输出。

- 选定流：Quinoa, production mix, at farm gate, harvested grain, unprocessed `21dd21b4-e6ec-43c2-b2c8-c18f47567236`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：按声明水分和异物基础记录收获籽粒实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田间过程输出缩放到 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_harvest_output_records`
- 数量范围：暂定田间产量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：250
  - 上限：5000
  - 单位：kg grain/ha
  - 基准：一个种植周期的可销售收获籽粒
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 用于声明用途的移出藜麦秸秆或残余物（`removed_quinoa_residue_output`）

只有在残余物被测量并有意转移至声明用途时，才记录从田间移出的地上残余物。留在田间或翻入土壤的残余物通过残余物去向和排放计算记录，不作为产品共产品。

- 选定流：Quinoa crop residue for declared use
- 流属性/单位：Mass / kg dry matter
- 数量规则：按去向和水分基础记录移出残余物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_harvest_output_records`
- 数量范围：暂定移出残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6000
  - 单位：kg dry matter/1,000 kg grain
  - 基准：残余物留在田间时为零；必须声明去向和水分
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获损失和非市场籽粒（`field_harvest_loss_output`）

仅在对质量平衡有意义时记录留在田间或整理前被剔除的籽粒实测量。说明其留在田间、饲喂、堆肥或作为废物处理的去向。

- 选定流：Non-marketable quinoa grain and harvest loss
- 流属性/单位：Mass / kg
- 数量规则：按去向记录或计算收获籽粒与可销售籽粒的差值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_harvest_output_records`
- 数量范围：暂定田间损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/1,000 kg harvested grain
  - 基准：按记录去向的损失或非市场籽粒
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到空气的氧化亚氮（`nitrous_oxide_emission`）

纳入与氮投入、残余物去向和适用排水或淋失路径有关的直接和间接土壤 N2O。

- 选定流：Nitrous oxide emission to ambient air
- 流属性/单位：Mass / kg N2O
- 数量规则：使用适用于地理区域的土壤排放方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_emission_activity`

###### 排放到空气的氨（`ammonia_emission`）

根据施用方式和当地因子纳入肥料及有机养分施用的氨挥发。

- 选定流：Ammonia emission to ambient air
- 流属性/单位：Mass / kg NH3
- 数量规则：根据氮源、施用方式和适用挥发因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_emission_activity`

###### 排放到空气的氮氧化物（`nitrogen_oxides_emission`）

在所选方法要求时，纳入田间燃料燃烧和含氮农业排放产生的氮氧化物。

- 选定流：Nitrogen oxides emission to ambient air
- 流属性/单位：Mass / kg NOx
- 数量规则：根据燃料活动和适用农业排放方法计算，不重复计算上游燃料数据集
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_emission_activity`

###### 释放到水中的硝酸盐（`nitrate_water_emission`）

在排水、土壤和养分记录支持时，纳入管理田地的硝酸盐淋失或径流。

- 选定流：Nitrate emission to water
- 流属性/单位：Mass / kg nitrate
- 数量规则：用适用于地理区域的方法计算氮淋失或径流
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_emission_activity`

###### 释放到水中的磷酸盐（`phosphate_water_emission`）

当土壤、坡度和养分数据支持场址或区域方法时，纳入径流或侵蚀造成的磷酸盐释放。

- 选定流：Phosphate emission to water
- 流属性/单位：Mass / kg phosphate
- 数量规则：用所选方法计算径流或侵蚀损失，并说明结果是模型值还是实测值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_emission_activity`

### 过程：农场内藜麦籽粒整理（`quinoa_grain_conditioning`）

#### 输入

##### 产品流

###### 进入整理的收获籽粒（`conditioning_grain_input`）

当清选或干燥位于农场边界内时，记录从田间过程接收的籽粒。

- 选定流：Quinoa, production mix, at farm gate, harvested grain, unprocessed `21dd21b4-e6ec-43c2-b2c8-c18f47567236`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：按记录水分测量进入批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_conditioning_records`

###### 籽粒整理用电（`conditioning_electricity_input`）

记录边界内风机、清选机、输送机和其他整理设备使用的电力。

- 选定流：Electricity supply
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：将电表读数分配到匹配的藜麦整理批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_conditioning_records`
- 数量范围：暂定整理用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kWh/1,000 kg grain
  - 基准：包括清选、输送和风机运行
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥供应的热能（`conditioning_heat_input`）

记录交付前降低籽粒水分所使用的供应热量或燃料能量。

- 选定流：Process heat for grain drying
- 流属性/单位：Energy / MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`purchased-process-heat`
- 数量规则：将实测燃料或交付热量换算为能量，并保留载能体身份
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_quinoa_conditioning_records`
- 数量范围：暂定干燥能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1400
  - 单位：MJ/1,000 kg grain
  - 基准：不进行主动干燥时为零；批次记录补齐前为宽泛候选估算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理供应的用水（`conditioning_water_input`）

仅在用水跨越整理过程边界时记录除尘或清洁用水。

- 选定流：Process water
- 流属性/单位：Mass or volume / kg or m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：将计量用水量匹配到整理批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_conditioning_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交付的整理后藜麦籽粒（`conditioned_quinoa_grain_output`）

记录在包含的清选或干燥后、处于声明水分和异物状态的接收籽粒。

- 选定流：Quinoa, production mix, at farm gate, harvested grain, unprocessed `21dd21b4-e6ec-43c2-b2c8-c18f47567236`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：按声明交付水分和杂质基础记录接收籽粒实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端输出缩放到 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_conditioning_records`
- 数量范围：声明农场交付水分筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：8
  - 上限：14
  - 单位：percent moisture, wet basis
  - 基准：必须声明市场状态；超出范围需产品规格证据
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 用于声明用途的藜麦筛下物（`useful_screenings_output`）

仅在筛下物或降级籽粒被测量并有意转移至声明用途时将其记录为产品。

- 选定流：Quinoa screenings for declared use
- 流属性/单位：Mass / kg
- 数量规则：按去向记录有用筛下物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_conditioning_records`
- 数量范围：暂定有用筛下物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kg/1,000 kg incoming grain
  - 基准：没有有用筛下物交付时为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 异物和剔除籽粒（`conditioning_reject_waste_output`）

按材料身份和去向记录石块、土壤、杂草材料、污染籽粒、粉尘和其他剔除物。

- 选定流：Quinoa-conditioning foreign matter and rejected grain
- 流属性/单位：Mass / kg
- 数量规则：按材料类别和去向记录剔除物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_quinoa_conditioning_records`
- 数量范围：暂定整理剔除物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg/1,000 kg incoming grain
  - 基准：整理批次；将有用筛下物与废物分开
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 田间生产和整理 | 在分配前优先分别记录田间生产、整理、籽粒、有用筛下物、移出残余物和废物。 | `iso-14044-2006` |
| `allocation_retained_residue` | 还田或翻入土壤的残余物 | 不将留存残余物作为共产品；将其管理和相关排放纳入田间生产，并防止与移出残余物重复计算。 | `ipcc-2019-managed-soils` |
| `allocation_removed_residue` | 可销售的移出残余物 | 不能分拆共享田间负荷时，使用同期声明的农场交付价值进行经济分配并披露水分基础；以质量分配作敏感性分析。 | `iso-14044-2006` |
| `allocation_conditioning_outputs` | 有用筛下物和剔除籽粒 | 将有意转移且具有正价值的输出视为共产品，其他剔除物视为废物；只有无法分拆时才在整理交付点采用经济分配。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_quinoa_field_activity_records` | `quinoa_field_production` | seed, nutrients, water, fuel, electricity, amendments, crop protection | field log, invoice, application record, meter, or contractor record | field_id; area; cultivar; input_product; amount; nutrient_content; date; operation; irrigation; contractor_scope | 将物理投入和作业与每个地块、种植周期核对 | kg; kg nutrient; L; m3; kWh; ha | each event | complete crop cycle | all represented fields | 按物理身份汇总；不合并产品后计算养分含量；使用同周期面积和产量归一化 | invoices; labels; calibrated meters; field logs |
| `cp_quinoa_input_identity_records` | `quinoa_field_production` | seed, crop protection, amendments | seed certificate, product label, invoice, supplier record | product_name; active_ingredient; formulation; lot; supplier; amount; application_date; field_id | 保留投入身份，并将每项投入匹配到施用记录 | kg; percent; date | each input event | complete crop cycle | all represented suppliers and fields | 不合并身份或有效成分不同的制剂 | labels; certificates; supplier documents |
| `cp_quinoa_harvest_output_records` | `quinoa_field_production` | grain, residue, harvest loss, residue fate | weighbridge, yield monitor, moisture test, bale record, field inspection | field_id; harvest_date; grain_mass; grain_moisture; residue_mass; residue_moisture; fate; destination | 将收获和移出质量与地块面积、种植周期核对 | kg; percent; ha | each harvest | complete crop cycle | all represented fields | 分别汇总接收籽粒以及各残余物或损失去向 | scale or yield-monitor calibration; moisture records; destination evidence |
| `cp_quinoa_emission_activity` | `quinoa_field_production` | soil and crop emissions | nutrient, soil, weather, residue, drainage, and emission-model records | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | 用一个声明的、适用于地理区域的方法计算各排放路径 | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented fields | 按地块计算、按面积加权，再按同周期产量归一化 | source records; factor provenance; model file; nutrient-balance review |
| `cp_quinoa_conditioning_records` | `quinoa_grain_conditioning` | incoming grain, energy, water, accepted grain, screenings, rejects | batch ticket, scale, moisture test, meter, fuel, and destination record | batch_id; incoming_mass; incoming_moisture; electricity; heat; water; accepted_mass; accepted_moisture; screenings; rejects | 将批次和计量器与接收输出核对 | kg; percent; kWh; MJ; m3 | each batch or meter period | all pre-gate conditioning | all included equipment and batches | 汇总匹配批次；按时间或处理质量分配共享计量器；闭合湿质量平衡 | calibrated scales and moisture meters; meter reconciliation |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field flows | 每公顷种植周期量 / 每公顷可销售籽粒产量 × 1,000 kg | flow amount; area; same-cycle grain mass | amount per 1,000 kg grain |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | 产品质量 × 声明养分比例；保留元素或氧化物等效基础 | product identity; mass; assay; reporting basis | kg N, kg P2O5, kg K2O by source |  |
| `calc_managed_soil_n2o` | soil N2O | 对肥料氮、有机氮、还田残余物氮、挥发和淋失路径采用选定的 IPCC 层级或区域方法 | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | 根据肥料类型、施用方式、时间和适用因子计算 | nitrogen product records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_conditioning_mass_balance` | grain conditioning | 进入湿籽粒 = 接收籽粒 + 有用筛下物 + 剔除物 + 水分及其他实测损失，且在不确定度内闭合 | masses; moisture; loss records | reconciled outputs per accepted grain | `mass-balance-identity` |
| `calc_dry_matter_conversion` | grain and residue | 按收到质量 ×（1 − 实测水分比例）= 干物质质量；同时保留两种基础 | mass; moisture result | as-received and dry-matter values | `fao-quinoa-cultivation-guide` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 确认是藜麦而不是苋属、荞麦或混合籽粒；保留品种、用途、市场状态和交付信息。 | crop, lot, and sales records |
| `dq_temporal_alignment` | 所有前景行 | 使用同一种植周期的投入、收获、产量、残余物、排放和整理记录；披露代理年份。 | dated field and batch records |
| `dq_mass_and_moisture` | 籽粒和残余物 | 为每次基础换算保留秤或产量监测器校准记录和水分测量。 | calibration and moisture-test records |
| `dq_input_identity` | 种子、农药和改良剂 | 保留产品标签、制剂或有效成分、供应商、批次和施用事件；正式发布过程前解析 UUID。 | labels; certificates; invoices; identity review |
| `dq_completeness` | 过程图和流 | 核对每个代表地块和整理批次，并区分零值、不适用、代理值和缺失值。 | field roster; batch reconciliation |
| `dq_emission_method` | 基本流排放 | 披露方法层级、因子、土壤和气候输入、排水假设，以及数值是实测还是模型值。 | method version; factor provenance; model inputs |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 终端输出 | 缩放后必须只有一个终端藜麦籽粒输出且等于 1,000 kg，使用固定参考 UUID，并声明水分和质量限定信息。 |  |
| `validation_process_route` | 过程图 | 田间生产只纳入一次；整理仅在农场交付前发生时纳入，并避免重复计算内含的能源、水或剔除物。 |  |
| `validation_crop_cycle_reconciliation` | 田间清单 | 面积、投入、收获输出、残余物去向、损失和排放应对应同一种植周期和代表地块。 |  |
| `validation_nitrogen_balance` | 氮清单 | 用已披露的选定方法和因子核对养分含量、还田及移出残余物氮和排放路径。 | `ipcc-2019-managed-soils` |
| `validation_conditioning_balance` | 整理过程 | 在不确定度内核对进入湿籽粒与接收籽粒、筛下物、剔除物、水分损失和其他实测损失。 | `mass-balance-identity` |
| `validation_flow_identity` | 每个流 | 仅将精确验证 UUID 接受为 `fixed`，将适用的已审 Flow Set 组接受为 `parameterized`；否则保留未映射覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景藜麦籽粒生产数据集 |
| downstream_use | `secondary_dataset`；审查和发布后可作为 `background_dataset` |
| allowed_use | 以及保留所声明地理位置、水分、残余物、分配和整理背景的下游系统的农场交付藜麦籽粒 LCA |
| excluded_use | 认证种子、叶或饲草、爆米或脱壳产品、碾磨、食品或饲料制造，或没有经过审查代理决定的其他作物 |
| required_metadata | 地理位置；品种；收获年份；地块面积；产量；水分；用途；耕作；灌溉；种子；养分；农药；残余物去向；整理；分配；身份解析 |
| required_quality_disclosure | 前景覆盖；代理投入；缺失记录；范围超限；排放方法；计量器和质量平衡核对 |
| update_trigger | 新的经审查藜麦证据、重大路线变化、修订排放方法、Flow Set 或 UUID 身份变化，或代表性数据超出 QA 范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-quinoa-cultivation-guide` | official_guidance | FAO, Guía de cultivo de la quínoa, https://www.fao.org/family-farming/detail/en/c/411552/ | 藜麦生长阶段、建植、收获和收获后背景 |
| `feedipedia-quinoa` | official_guidance | FAO Feedipedia, Quinoa (Chenopodium quinoa), https://feedipedia.org/node/229 | 作物身份、播种量背景、收获损失和产品状态背景 |
| `fao-56-crop-evapotranspiration` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉测量和作物水分核算背景 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤 N2O、挥发和淋失路径、残余物氮及防重复计算 |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023 | 农业氨和空气排放方法背景 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 边界、分配层级和披露 |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched grain-conditioning batches | 整理质量平衡计算和校验 |
