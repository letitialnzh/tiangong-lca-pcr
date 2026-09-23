---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.copra
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 椰干

## 1. 范围与适用性

本 PCR 适用于成熟椰子经开壳取肉、干燥稳定化和分级后，在榨油前交接的椰干。必须声明含水率基准、实测终水分、干燥路线、热源、等级和交接点。排除整只鲜椰子、鲜椰肉、椰子油以及榨油后的压榨饼粕。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.copra |
| classification_refs | CPC 3.0: 01492 Copra |
| covered_products | 榨油前的干燥椰肉/椰仁 |
| excluded_products | 整只鲜椰、椰油、压榨饼粕或椰粕 |
| representative_product | 生产者或初级加工交接处的椰干 |
| production_route | 椰子种植、独立采收、开壳取肉、日晒/太阳能/烟熏/热风/窑干或混合干燥、分级 |
| market_state | 稳定干椰肉，默认按湿基报告水分 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 榨油前椰干 |
| How much | 1 kg |
| How well | 实测水分、干燥路线、等级和污染状态已声明 |
| How long or cycle | 一个关联种植期与干燥批次的生产批 |
| reference_flow_link | `copra_accepted_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Copra `65b49595-596f-42a7-91f4-d3722df073de` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dried kernel; moisture value and basis; drying route and heat source; grade; hand-off; before oil extraction |
| Binding | `fixed` |

数据库行的“鲜品，未加工”路线标签不适用于椰干；上述干燥状态限定信息具有优先效力。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Measure as-received mass and report moisture separately. |
| `moisture_basis` | kernel and copra | mass fraction | % wet basis | Use water mass divided by as-received mass; label and convert dry-basis results. |
| `dry_matter` | material balance | Mass | kg dry matter | as-received mass × (1 − wet-basis moisture fraction). |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | established coconut palms entering the assessed crop period |
| starting_condition_role | avoid repeating plantation establishment |
| product_classification_scope | mature coconuts and internal kernel intermediates leading to copra |
| recursive_input_rule | record purchased same-category material once with upstream dataset and hand-off |
| upstream_dataset_requirement | geography, technology, crop phase, moisture and non-overlap |
| disclosure | crop phase, harvest, drying route, moisture, grade, storage and hand-off |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `before_oil_extraction` | all routes | End at graded dry kernel hand-off; exclude crushing, pressing, extraction, refining and press-cake handling. | `fao-coconut-postharvest-compendium` |
| `separate_harvest` | harvest | Record harvest separately from biological production and conditioning. | `fao-coconut-postharvest-compendium` |
| `drying_gate` | drying | Start at opened nuts or fresh kernel; record route and end at measured stable copra moisture. | `fao-coconut-postharvest-compendium`; `fao-aflatoxin-copra` |
| `route_separation` | drying | Keep sun, solar, smoke, hot-air, kiln and hybrid route energy and output separate before output-weighted aggregation. | `fao-coconut-postharvest-compendium` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `coconut_production` | 椰子种植管理 | required | Always | foreground node | kg output |
| `coconut_harvest` | 椰子采收与田间转运 | required | Always | foreground node | kg output |
| `copra_drying` | 开壳、取肉与干燥 | required | Always | foreground node | kg output |
| `copra_grading` | 椰干分级与交接 | required | Always | foreground node | kg output |

### 过程：椰子种植管理（`coconut_production`）

#### 输入

##### 产品流

###### 综合肥料和养分供应（`crop_nutrients`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：前景选择的养分产品
- 流属性/单位：质量或适用服务属性 / 声明单位
- 绑定模式：`parameterized`
- 流集合：`flow-set.agricultural-nutrient-supply`
- 流集合版本：`0.3.0`
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg mature coconuts
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：per 1,000 kg mature coconuts
  - 基准类型：(`crop_cycle`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 人工灌溉水（`irrigation_water`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：前景选择的灌溉水
- 流属性/单位：质量或适用服务属性 / 声明单位
- 绑定模式：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合组：`irrigation-water`
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg mature coconuts; zero when inactive
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：m3
  - 基准：per 1,000 kg mature coconuts; zero when inactive
  - 基准类型：(`crop_cycle`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间能源供应（`crop_energy`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：前景选择的能源载体
- 流属性/单位：质量或适用服务属性 / 声明单位
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg mature coconuts
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：MJ
  - 基准：per 1,000 kg mature coconuts
  - 基准类型：(`crop_cycle`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 成熟整椰子（`mature_coconut`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——成熟整椰子
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg process output
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：per 1,000 kg process output
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 田间残余物和坏果（`field_residue`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：按去向延后确定的残余物流
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg mature coconuts
- 基准类型：（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_production`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：per 1,000 kg mature coconuts
  - 基准类型：(`crop_cycle`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流


### 过程：椰子采收与田间转运（`coconut_harvest`）

#### 输入

##### 产品流

###### 来自种植的成熟椰子（`mature_coconut_input`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——成熟整椰子
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg delivered nuts
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_harvest`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1300
  - 单位：kg
  - 基准：per 1,000 kg delivered nuts
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 采收能源供应（`harvest_energy`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：前景选择的能源载体
- 流属性/单位：质量或适用服务属性 / 声明单位
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg delivered nuts
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_harvest`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：MJ
  - 基准：per 1,000 kg delivered nuts
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间至干燥场运输服务（`field_transport`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：前景选择的货运服务
- 流属性/单位：质量或适用服务属性 / 声明单位
- 绑定模式：`parameterized`
- 流集合：`flow-set.transport-service`
- 流集合版本：`0.2.0`
- 流集合组：`road-freight-transport`
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg delivered nuts; zero when inactive
- 基准类型：（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_harvest`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：t·km
  - 基准：per 1,000 kg delivered nuts; zero when inactive
  - 基准类型：(`transport_service`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 已采收整椰子（`harvested_nuts`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——已采收整椰子
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg process output
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coconut_harvest`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：per 1,000 kg process output
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


### 过程：开壳、取肉与干燥（`copra_drying`）

#### 输入

##### 产品流

###### 已采收整椰子（`harvested_nuts_input`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——已采收整椰子
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg ungraded copra
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1500
  - 上限：8000
  - 单位：kg
  - 基准：per 1,000 kg ungraded copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初加工工艺水（`process_water`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：前景选择的工艺水
- 流属性/单位：质量或适用服务属性 / 声明单位
- 绑定模式：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合组：`process-water`
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg ungraded copra; zero when inactive
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3
  - 基准：per 1,000 kg ungraded copra; zero when inactive
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥能源供应（`drying_energy`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：前景选择的能源载体
- 流属性/单位：质量或适用服务属性 / 声明单位
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg ungraded copra by route
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：MJ
  - 基准：per 1,000 kg ungraded copra by route
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 未分级干椰肉（`ungraded_copra`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——未分级椰干
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：sampled dryer output
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：12
  - 单位：% wet-basis moisture
  - 基准：sampled dryer output
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分离的椰壳与椰衣（`husk_shell`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：按去向延后确定的椰壳与椰衣流
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg ungraded copra
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4000
  - 单位：kg
  - 基准：per 1,000 kg ungraded copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 干燥不合格物（`drying_reject`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：待记录去向和处理后解析
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg ungraded copra
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_drying`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg dry matter
  - 基准：per 1,000 kg ungraded copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流


### 过程：椰干分级与交接（`copra_grading`）

#### 输入

##### 产品流

###### 未分级椰干（`ungraded_copra_input`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：内部中间体——未分级椰干
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg accepted copra
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1400
  - 单位：kg
  - 基准：per 1,000 kg accepted copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分级能源供应（`grading_energy`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：前景选择的能源载体
- 流属性/单位：质量或适用服务属性 / 声明单位
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg accepted copra
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：MJ
  - 基准：per 1,000 kg accepted copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 交接的合格椰干（`copra_accepted_output`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：椰干 `65b49595-596f-42a7-91f4-d3722df073de`
- 流属性/单位：质量或适用服务属性 / 声明单位
- 绑定模式：`fixed`
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：one reference flow
- 基准类型：（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：one reference flow
  - 基准类型：(`reference_flow`)
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级椰干（`downgraded_copra`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：按等级与去向延后确定的椰干流
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg accepted copra
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：kg
  - 基准：per 1,000 kg accepted copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

###### 分级不合格物（`grading_reject`）

该流按批次实测或从关联前景记录计算；内部、延后或未解析状态说明了为何不指定外部 UUID。

- 选定流：待记录返工、回收或处置去向后解析
- 流属性/单位：质量或适用服务属性 / 声明单位
- 数量规则：关联批次的实测或核算数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1,000 kg accepted copra
- 基准类型：（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copra_grading`
- 数量范围：QA 或归一化范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg
  - 基准：per 1,000 kg accepted copra
  - 基准类型：(`process_output`)
  - 证据类型：推理估算（`reasoned_estimate`）


##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | all nodes | Subdivide by site, crop period, route and lot; use direct measurement first. |  |
| `multi_output` | production and drying | Enumerate accepted, downgraded, husk, shell, residue and waste hand-offs; use dry-matter mass only when physical causality cannot be established. |  |
| `internal_fuel` | husk or shell fuel | Count internal transfer and combustion once; do not also claim sold co-product output. |  |
| `rework` | rejects | Record rework, downgrade, recovery or disposal and incremental burdens once; exclude rejected mass from accepted output. |  |
| `multi_period` | crop and storage periods | Link events to the affected period and prevent double attribution to batch and annual totals. |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coconut_production` | `coconut_production` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs | declared | each lot/run | representative period | each site/route | sum by identity then normalize | calibration, invoices, traceability |
| `cp_coconut_harvest` | `coconut_harvest` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs | declared | each lot/run | representative period | each site/route | sum by identity then normalize | calibration, invoices, traceability |
| `cp_copra_drying` | `copra_drying` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs | declared | each lot/run | representative period | each site/route | sum by identity then normalize | calibration, invoices, traceability |
| `cp_copra_grading` | `copra_grading` | all cards | lot and meter records | identity, mass, moisture, route, energy, destination | linked weighing, meters and logs | declared | each lot/run | representative period | each site/route | sum by identity then normalize | calibration, invoices, traceability |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | kernel | 100 × (wet mass − oven-dry mass) / wet mass | wet and dry sample mass | % wet-basis moisture | `fao-coconut-postharvest-compendium` |
| `calc_dry_matter` | lots | mass × (1 − moisture/100) | mass and moisture | kg dry matter |  |
| `calc_transport` | field transfer | tonnes × loaded distance | mass, distance | t·km |  |
| `calc_route_mix` | route aggregate | output-weighted sum of route inventories | route inventory and output | aggregate |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Confirm dried kernel before oil extraction and required qualifiers. | lot, moisture and dispatch records |
| `dq_route` | drying | Separate route, heat source, smoke contact and run mode. | dryer logs |
| `dq_balance` | processes | Reconcile as-received and dry-matter inputs, outputs, rejects and losses. | mass-balance sheet |
| `dq_completeness` | conditional cards | Report evidenced zero when inactive. | completeness review |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference | Fail whole fresh coconut, fresh meat, oil, press cake or meal and any fresh/unprocessed description lacking dry-state qualifiers. | `fao-coconut-postharvest-compendium` |
| `validate_moisture` | copra | Require measured value, basis, method and lot; investigate values outside 5–12% wet-basis screen. | `fao-coconut-postharvest-compendium`; `fao-aflatoxin-copra` |
| `validate_route` | drying | Require route, heat source, smoke contact, time and route-specific energy. | `fao-coconut-postharvest-compendium` |
| `validate_nutrients` | nutrients | Require one 0.3.0 set-only nutrient card in coconut production and no group. |  |
| `validate_bindings` | cards | Expand every Flow Set to a verified concrete foreground UUID; accept unbound cards only with internal, deferred or unresolved rationale. |  |
| `validate_rework` | rejects | Require destination and keep rejects out of accepted output. |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground copra production and primary-conditioning dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | oil-mill input systems requiring representative dried kernel |
| excluded_use | fresh coconut, food coconut, coconut oil, press cake or meal |
| required_metadata | geography; crop phase; drying route; heat source; moisture method and basis; grade; hand-off; allocation; destinations |
| required_quality_disclosure | coverage, measurement, sampling, route shares and mass balance |
| update_trigger | change in identity, hand-off, drying technology, moisture rule, route mix or primary data |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-coconut-postharvest-compendium` | official_guidance | FAO, Coconut: Post-harvest Operations, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Coconut.pdf | identity, drying route, moisture, process boundary and quality |
| `fao-aflatoxin-copra` | official_guidance | FAO, HACCP Manual, Example 3: Copra cake and meal, https://www.fao.org/4/y1390e/y1390e0l.htm | route-dependent safe moisture, mould prevention and validation |
