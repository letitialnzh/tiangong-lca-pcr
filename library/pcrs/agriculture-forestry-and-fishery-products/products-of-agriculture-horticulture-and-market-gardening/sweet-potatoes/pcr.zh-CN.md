---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sweet-potatoes
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 甘薯



## 1. 范围与适用性

本 PCR 覆盖 *Ipomoea batatas* 收获后新鲜储藏根的管理生产、收获、谨慎搬运、去土、分级以及可选熟化/储藏，交接点为农场或初级整理。必须声明未熟化/熟化状态、损伤等级、去土状态、水分或收到态基准及交接点。种苗、蔓段或作种用根不得作为参考产品；淀粉、薯片、粉、泥、粉丝及其他加工品不在范围内。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sweet-potatoes |
| classification_refs | CPC 3.0: 01530 Sweet potatoes |
| covered_products | 农场或初级整理交接的鲜食 *Ipomoea batatas* 储藏根，可未熟化或熟化 |
| excluded_products | 作为参考产品的种苗、蔓段、种用根；淀粉、薯片、粉、泥、粉丝及其他加工品 |
| representative_product | 按收到态质量计量的可销售新鲜甘薯储藏根 |
| production_route | 田间管理生产为母活动；收获独立移出储藏根；初级整理去土分级；熟化/储藏为可选保存路线。各技术路线差异须单独声明。 |
| market_state | 鲜的未加工储藏根；声明熟化、损伤、去土、水分基准和交接状态 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | *Ipomoea batatas* 收获后鲜储藏根 |
| How much | 收到态 1,000 kg |
| How well | 声明的合格等级、未熟化/熟化、损伤和去土状态 |
| How long or cycle | 一个作物周期及其初级整理；适用时加熟化/储藏时长 |
| reference_flow_link | 未熟化路线 `primary_conditioning` 输出或熟化路线 `curing_storage` 输出 |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species = *Ipomoea batatas*；储藏根；未熟化或熟化；损伤等级；去土状态；水分或收到态基准；农场或初级整理交接；作物周期；适用时储藏时长 |
| Binding | `fixed` |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考根和内部根状态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录收到态毛质量，另记土壤、剔除物和水分基准。 |
| `water_volume` | 灌溉、清洗和废水 | Volume 或声明密度的 Mass | m3 或 kg | 区分供应、循环和排出水并记录测点。 |
| `energy_carrier` | 机械、电力、热和储藏能源 | 载能体适用属性 | MJ、kWh、kg 或 L | 保留实际载能体及转换基准，禁止合并移动燃料、固定热和电力。 |
| `condition_mass_balance` | 收获、分级、熟化和储藏 | Mass | kg | 每事件或批次核对投入根、合格根、降级根、剔除物、土壤/固体和测得损失。 |

## 5. 系统边界

边界自声明作物周期的已准备管理田块开始，包括种植、管理、收获、场内转运、去土、分级及交接；仅当交付熟化或储藏根时包括熟化/储藏。

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 声明前茬、整地、土壤、种植材料来源及雨养/灌溉状态的管理田块 |
| starting_condition_role | 管理生物生产的起始条件 |
| product_classification_scope | CPC 3.0 01530 的鲜 *Ipomoea batatas* 储藏根 |
| recursive_input_rule | 外部进入的同类根须使用带状态和交接限定的上游产品数据集，禁止在本前景系统内递归重建。 |
| upstream_dataset_requirement | 种植材料、能源、水、养分、运输和处理服务须按具体前景记录选择兼容上游数据集。 |
| disclosure | 声明品种、地点、作物周期、路线、收获模式、熟化/储藏、损伤、去土、水分基准和交接。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 田间生产 | 纳入作物周期的管理投入、田间操作、目标根、残体和损失。 | `fao-sweet-potato-postharvest` |
| `boundary_harvest` | 收获 | 独立记录从管理作物到新挖根交接，并区分附带土壤、蔓、损伤根和未收集损失。 | `fao-sweet-potato-postharvest` |
| `boundary_conditioning` | 初级整理 | 纳入谨慎搬运、去土、适用时清洗、分级及所有等级和残余物去向。 | `fao-sweet-potato-postharvest` |
| `boundary_curing` | 熟化/储藏 | 仅对熟化或储藏交付纳入保存投入、条件、时长及损失。 | `fao-sweet-potato-postharvest` |
| `boundary_processed_exclusion` | 产品范围 | 加工食品和种植材料参考产品排除在外。 | `fao-sweet-potato-postharvest` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 甘薯田间管理生产 | required | Every package / 每个数据包 | Produces managed crop and standing roots / 生产管理作物和田间储藏根 | kg accepted roots / kg 合格根 |
| `harvest_capture` | 收获与收集 | required | Every package / 每个数据包 | Removes roots and hands them to conditioning / 移出储藏根并交接初级整理 | kg accepted roots / kg 合格根 |
| `primary_conditioning` | 去土、分级与初级交接 | required | Every package / 每个数据包 | Creates accepted, downgraded, rejected, soil, solid, and wastewater states / 形成合格、降级、剔除、土壤、固体和废水状态 | kg accepted roots / kg 合格根 |
| `curing_storage` | 熟化与储藏 | conditional | Only cured or stored hand-off / 仅熟化或储藏后交接 | Preserves roots and creates cured hand-off / 保存储藏根并形成熟化交接 | kg accepted roots / kg 合格根 |

各作物周期、收获事件、整理批次和熟化/储藏批次必须独立编号。手工/机械、雨养/灌溉、干法/湿法去土、渐进/一次收获是路线差异，须保存其拓扑、清单、计算和验证证据。

### 过程：甘薯田间管理生产（`field_production`）

#### 输入

##### 产品流

###### 品种特定种植材料（`planting_material`）

甘薯苗、蔓段或种植根仅在声明条件下跨越该过程边界。

- 选定流：甘薯苗、蔓段或种植根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：unresolved: resolve cultivar and delivered form from supplier records before exchange emission
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 合并的肥料和养分供应（`nutrient_supply`）

作物周期使用的矿质肥、有机肥和养分改良剂仅在声明条件下跨越该过程边界。

- 选定流：作物周期使用的矿质肥、有机肥和养分改良剂
- 流属性/单位：声明的兼容属性 / kg supplied products
- 绑定：parameterized
- 流集合：flow-set.agricultural-nutrient-supply
- 流集合版本：0.3.0
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg supplied products
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水供应（`irrigation_water`）

跨越边界的灌溉供水；降雨仅作场址背景仅在声明条件下跨越该过程边界。

- 选定流：跨越边界的灌溉供水；降雨仅作场址背景
- 流属性/单位：声明的兼容属性 / m3
- 绑定：parameterized
- 流集合：flow-set.water-use
- 流集合版本：0.2.0
- 流集合组：irrigation-water
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：m3
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械能源供应（`field_energy`）

整地和田间管理的燃料或能源仅在声明条件下跨越该过程边界。

- 选定流：整地和田间管理的燃料或能源
- 流属性/单位：声明的兼容属性 / MJ
- 绑定：parameterized
- 流集合：flow-set.energy-supply
- 流集合版本：0.2.0
- 流集合组：mobile-machinery-fuel
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：MJ
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 移交收获的田间储藏根（`standing_roots_internal`）

内部待收获储藏根状态仅在声明条件下跨越该过程边界。

- 选定流：内部待收获储藏根状态
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal: foreground graph link only
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：crop_cycle（`crop_cycle`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_field_cycle_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：crop_cycle（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 田间残体和未收集根损失（`field_residue_loss`）

按去向记录的蔓叶、损伤根和未收集根仅在声明条件下跨越该过程边界。

- 选定流：按去向记录的蔓叶、损伤根和未收集根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal/deferred: resolve only recorded boundary-exit destinations
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_field_cycle_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流

###### 报告的养分相关田间排放（`field_emissions`）

按物质和接收介质区分的排放仅在声明条件下跨越该过程边界。

- 选定流：按物质和接收介质区分的排放
- 流属性/单位：声明的兼容属性 / kg reported substance
- 身份状态：unresolved: broad emissions cannot justify an elementary UUID
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_field_cycle_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg reported substance
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


### 过程：收获与收集（`harvest_capture`）

#### 输入

##### 产品流

###### 来自田间生产的储藏根（`standing_roots_harvest_input`）

与作物周期关联的内部储藏根状态仅在声明条件下跨越该过程边界。

- 选定流：与作物周期关联的内部储藏根状态
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal: paired foreground graph link
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_harvest_event_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获机械能源供应（`harvest_energy`）

挖掘、收集和装载的燃料或能源仅在声明条件下跨越该过程边界。

- 选定流：挖掘、收集和装载的燃料或能源
- 流属性/单位：声明的兼容属性 / MJ
- 绑定：parameterized
- 流集合：flow-set.energy-supply
- 流集合版本：0.2.0
- 流集合组：mobile-machinery-fuel
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_harvest_event_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：MJ
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农场内道路运输服务（`harvest_transport`）

单独建模的收获点至初级整理运输仅在声明条件下跨越该过程边界。

- 选定流：单独建模的收获点至初级整理运输
- 流属性/单位：声明的兼容属性 / tkm
- 绑定：parameterized
- 流集合：flow-set.transport-service
- 流集合版本：0.2.0
- 流集合组：road-freight-transport
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：route_specific（`route_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：transport_service（`transport_service`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_harvest_event_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：tkm
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：transport_service（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 移交初级整理的新收获根（`harvested_roots_internal`）

去土和分级前的新挖储藏根仅在声明条件下跨越该过程边界。

- 选定流：去土和分级前的新挖储藏根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal: paired foreground graph link
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_harvest_event_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 收获损伤和未收集损失（`harvest_rejects`）

按去向记录的切伤、擦伤、破损或未收集根仅在声明条件下跨越该过程边界。

- 选定流：按去向记录的切伤、擦伤、破损或未收集根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal/deferred: destination determines product, recovery, or waste identity
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_harvest_event_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流


### 过程：去土、分级与初级交接（`primary_conditioning`）

#### 输入

##### 产品流

###### 来自收获的新鲜储藏根（`harvested_roots_conditioning_input`）

带损伤和附土状态的内部收获根仅在声明条件下跨越该过程边界。

- 选定流：带损伤和附土状态的内部收获根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal: paired foreground graph link
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗水供应（`conditioning_water`）

湿法去土时使用的工艺水仅在声明条件下跨越该过程边界。

- 选定流：湿法去土时使用的工艺水
- 流属性/单位：声明的兼容属性 / m3
- 绑定：parameterized
- 流集合：flow-set.water-use
- 流集合版本：0.2.0
- 流集合组：process-water
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级整理电力供应（`conditioning_electricity`）

清洗、输送、分选、分级或沥水用电仅在声明条件下跨越该过程边界。

- 选定流：清洗、输送、分选、分级或沥水用电
- 流属性/单位：声明的兼容属性 / kWh
- 绑定：parameterized
- 流集合：flow-set.energy-supply
- 流集合版本：0.2.0
- 流集合组：electricity-supply
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废水处理服务（`conditioning_wastewater_treatment`）

排出清洗废水的外部处理服务仅在声明条件下跨越该过程边界。

- 选定流：排出清洗废水的外部处理服务
- 流属性/单位：声明的兼容属性 / m3
- 绑定：parameterized
- 流集合：flow-set.waste-treatment-service
- 流集合版本：0.2.0
- 流集合组：wastewater-treatment-service
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 合格未熟化鲜甘薯根（`fresh_reference_product`）

Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057`仅在声明条件下跨越该过程边界。

- 选定流：Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：`fixed`
- 身份状态：fixed: detail-confirmed CPC 01530 Product flow with Mass at farm gate
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：fixed_value（`fixed_value`）
- 适用范围：product_specific（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：method_formula（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：固定定量参考量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 按声明去向分流的降级根（`downgraded_roots`）

立即食用、饲料、返工或回收等级仅在声明条件下跨越该过程边界。

- 选定流：立即食用、饲料、返工或回收等级
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal/deferred: resolve external identity only after destination is known
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 初级整理剔除物、土壤、清洗固体和废水（`conditioning_residuals`）

分开记录的残余物状态和去向仅在声明条件下跨越该过程边界。

- 选定流：分开记录的残余物状态和去向
- 流属性/单位：声明的兼容属性 / kg mass-equivalent
- 身份状态：internal/deferred: each boundary exit needs its recorded waste identity
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_conditioning_run_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg mass-equivalent
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流


### 过程：熟化与储藏（`curing_storage`）

#### 输入

##### 产品流

###### 进入熟化或储藏的合格未熟化根（`uncured_roots_curing_input`）

来自初级整理的内部合格状态仅在声明条件下跨越该过程边界。

- 选定流：来自初级整理的内部合格状态
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal: cured-route foreground link
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：storage_duration（`storage_duration`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_curing_storage_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：2000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：storage_duration（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 熟化和储藏电力供应（`curing_electricity`）

通风、制冷、控制和搬运用电仅在声明条件下跨越该过程边界。

- 选定流：通风、制冷、控制和搬运用电
- 流属性/单位：声明的兼容属性 / kWh
- 绑定：parameterized
- 流集合：flow-set.energy-supply
- 流集合版本：0.2.0
- 流集合组：electricity-supply
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：storage_duration（`storage_duration`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_curing_storage_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kWh
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：storage_duration（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购熟化热供应（`curing_heat`）

主动熟化的外购工艺热；被动熟化可为零仅在声明条件下跨越该过程边界。

- 选定流：主动熟化的外购工艺热；被动熟化可为零
- 流属性/单位：声明的兼容属性 / MJ
- 绑定：parameterized
- 流集合：flow-set.energy-supply
- 流集合版本：0.2.0
- 流集合组：purchased-process-heat
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：process_output（`process_output`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_curing_storage_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：process_output（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 合格熟化鲜甘薯根（`cured_reference_product`）

Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057`仅在声明条件下跨越该过程边界。

- 选定流：Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：`fixed`
- 身份状态：fixed: detail-confirmed CPC 01530 Product flow with Mass at farm gate
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：fixed_value（`fixed_value`）
- 适用范围：product_specific（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：reference_flow（`reference_flow`）
- 证据类型：method_formula（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：固定定量参考量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：reference_flow（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`


##### 废物流

###### 熟化和储藏剔除物（`curing_storage_rejects`）

腐烂、发芽、冷害或严重损伤根仅在声明条件下跨越该过程边界。

- 选定流：腐烂、发芽、冷害或严重损伤根
- 流属性/单位：声明的兼容属性 / kg
- 身份状态：internal/deferred: recorded destination determines external identity
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：calculated_value（`calculated_value`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：storage_duration（`storage_duration`）
- 证据类型：calculated_from_collection（`calculated_from_collection`）
- 采集协议：`cp_curing_storage_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：storage_duration（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流

###### 测得的向空气蒸发水分损失（`curing_moisture_loss`）

由进出料和水分测量单独识别的水损失仅在声明条件下跨越该过程边界。

- 选定流：由进出料和水分测量单独识别的水损失
- 流属性/单位：声明的兼容属性 / kg water
- 身份状态：unresolved: resolve water-to-air compartment only after separate measurement
- 数量规则：与声明的过程事件和去向关联的测量值或计算值
- 数值来源模式：foreground_record（`foreground_record`）
- 适用范围：site_specific（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考根或声明的关联事件
- 基准类型：storage_duration（`storage_duration`）
- 证据类型：collected_record（`collected_record`）
- 采集协议：`cp_curing_storage_records`
- 来源：
- 数量范围：暂定 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg water
  - 基准：每 1,000 kg 合格参考根或声明的关联事件；以评审证据替代暂定界限
  - 基准类型：storage_duration（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）



## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 所有节点 | 优先按作物周期、收获事件、整理批次和储藏批次细分。 | `mass-balance-identity` |
| `allocation_rejects` | 剔除、返工和降级根 | 保留原生产负担，返工负担仅增加一次，剔除物不得计入合格产出。 | `mass-balance-identity` |
| `allocation_shared_runs` | 共用批次 | 仅对不可细分记录使用声明的物理驱动分配，并证明总和守恒且无重复。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle_records` | `field_production` | 全部田间卡片 | 日志、发票、仪表、田测 | 田块、品种、周期、种植材料、养分、水、能源、根、残体、损失、排放输入 | 按田块和周期核对 | 声明单位 | 每次活动 | 完整周期 | 农场和田块 | 关联全部收获后归一化 | 发票、校验、田表、分析 |
| `cp_harvest_event_records` | `harvest_capture` | 全部收获卡片 | 称量、设备、路线、损失调查 | 周期、事件、模式、质量、损伤、能源、距离、载荷、去向 | 每事件记录 | 声明单位 | 每次收获 | 全部关联收获 | 田块和事件 | 求和且禁止运输/机械重复 | 称量、设备、交接 |
| `cp_conditioning_run_records` | `primary_conditioning` | 全部整理卡片 | 批次、称量、仪表、等级、去向票据 | 进料、去土、用水、用电、等级、残余物、废水和处理 | 每批质量平衡 | 声明单位 | 每批 | 全部参考产品批次 | 场址和生产线 | 状态和去向总和核对 | 校准、等级协议、票据 |
| `cp_curing_storage_records` | `curing_storage` | 全部熟化/储藏卡片 | 批次、温湿度、仪表、检查 | 进料、条件、时长、能源、出料、剔除和水分 | 从装入到交接追踪 | 声明单位 | 每批和周期读数 | 完整时长 | 储藏场址和批次 | 核对进料、合格、剔除和水损失 | 传感器、仪表、追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 全部清单 | 记录量 × 1,000 kg / 同基准合格参考根质量 | 记录量、参考根质量 | 归一化量 | `mass-balance-identity` |
| `calc_transport_work` | 运输 | tkm = 运输吨数 × 载货距离 | 载荷、距离 | tkm | `mass-balance-identity` |
| `calc_root_mass_balance` | 各节点 | 进料减去合格、降级、剔除、固体、样品和单独测得水损失 | 关联质量记录 | 未解释差值 | `mass-balance-identity` |
| `calc_dry_mass_conversion` | 干物质比较 | 干质量 = 收到态质量 × (1 − 水分分数) | 收到态质量、水分 | 干质量 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 证实物种、储藏根用途、品种、熟化、损伤、去土、水分基准和交接。 | 批次、检查和交接记录 |
| `dq_traceability` | 过程图 | 关联作物周期、收获事件、整理批次和储藏批次。 | 稳定标识符 |
| `dq_completeness` | 清单 | 覆盖重大投入、水、能源、根状态、残体、损失、运输、处理和条件性公用工程。 | 完整性核对 |
| `dq_route_delta` | 替代路线 | 每项拓扑、清单、计算或验证差异须有当前记录。 | 路线证据矩阵 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 缺少物种、储藏根、熟化、损伤、去土、水分基准、交接或周期限定时失败。 | `fao-sweet-potato-postharvest` |
| `validate_reference_uuid` | 参考身份 | 要求固定参考流 `03d4145f-cc49-4e7b-8c45-d6ce90a90057`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `validate_exclusions` | 范围 | 种植材料或任何加工品作为参考产品时失败。 | `fao-sweet-potato-postharvest` |
| `validate_graph_links` | 过程图 | 要求周期、收获、整理和储藏批次链路完整。 |  |
| `validate_rejects` | 所有剔除状态 | 要求每个降级、返工、回收或废弃去向明确，且不得计入合格产出。 | `fao-sweet-potato-postharvest` |
| `validate_mass_balance` | 各节点 | 报告差值；无独立水分测量时禁止把总损失标为向空气排水。 | `mass-balance-identity` |
| `validate_flow_resolution` | 所有卡片 | Flow Set 卡按前景记录展开至具体 UUID；外部延迟卡在发出交换前解析；内部卡仅作图链路。 |  |
| `validate_curing` | 熟化路线 | 要求方法、温度、相对湿度、时长及进出状态；未熟化路线省略该节点。 | `fao-sweet-potato-postharvest` |

## 10. 发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | 鲜甘薯储藏根前景生产数据包 |
| downstream_use | 生成过程和生命周期模型；匹配地理、路线、状态和质量时可作二手或背景数据集 |
| allowed_use | 对身份、周期、熟化、损伤、去土、水分基准和交接相容的鲜根路线建模 |
| excluded_use | 种植材料生产、加工品、未披露的熟化混合、其他根茎作物替代 |
| required_metadata | 品种、地理、周期/事件/批次、路线、灌溉、熟化条件、储藏时长、损伤、去土、水分、交接、UUID、Flow Set 版本和解析证据 |
| required_quality_disclosure | 数据期、覆盖率、实测/计算份额、仪表、质量平衡、路线证据、分配、代表性和缺口 |
| update_trigger | 边界、身份、Flow Set 合同、路线、限定条件、证据或未解析身份发生重大变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sweet-potato-postharvest` | official_guidance | FAO, *Prevention of post-harvest food losses: Sweet potato crop profile*, https://www.fao.org/4/t0073e/T0073E08.htm | 谨慎收获、去土、损伤分级、熟化/储藏和边界 |
| `mass-balance-identity` | method_factor | 与进料、产出、残余物、样品和测得水分记录关联的质量守恒恒等式 | 归一化、节点核对、干质量转换和固定参考量 |
