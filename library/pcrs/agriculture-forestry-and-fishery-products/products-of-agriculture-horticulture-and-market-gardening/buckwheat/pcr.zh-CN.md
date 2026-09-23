---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.buckwheat
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 荞麦籽粒

## 1. 范围与适用性

本 PCR 覆盖在农场交付的栽培荞麦籽粒，包括收获以及在农场交付前为达到声明市场状态而进行的清理或干燥。适用于粮食、饲料或进一步加工用途的雨养和灌溉种植。排除认证种子生产、绿肥或覆盖作物服务、青饲料、干草、青贮、放牧、荞麦蜜源服务、场外储存与运输、碾米、脱壳、面粉、米粒和预制食品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.buckwheat |
| classification_refs | CPC 3.0: 01192 Buckwheat |
| covered_products | 在农场交付、用于食品、饲料或进一步加工的收获荞麦籽粒 |
| excluded_products | 认证荞麦种子；覆盖作物、绿肥、青饲料、干草、青贮、放牧或授粉服务；脱壳籽粒、面粉、预制食品及下游物流 |
| representative_product | 未加工的收获荞麦籽粒 |
| production_route | 荞麦栽培、收获及有条件的农场内籽粒调制 |
| market_state | 农场交付的未加工籽粒，声明水分、杂质、损伤和预期用途状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场交付的荞麦籽粒 |
| How much | 1,000 kg 按接收状态计的籽粒 |
| How well | 已收获、未加工，并符合声明的水分、杂质、损伤和预期用途规格的籽粒 |
| How long or cycle | 一个声明的作物周期 |
| reference_flow_link | 未包含调制时，来自 `buckwheat_field_production` 的终端籽粒输出；包含调制时，来自 `farm_gate_buckwheat_conditioning` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Buckwheat, production mix, at farm gate, harvested grain, unprocessed `7f337a9e-f24a-4d48-841e-0b5326d028d7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或变种; 生产地理位置; 收获年份; 作物季节; 交付水分; 杂质和损伤基准; 预期用途; 是否包含调制 |
| 绑定模式 | `fixed` |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 参考荞麦籽粒 | Mass | kg | 报告按接收状态计的质量和实测水分；每次干物质换算都保留水分基准。 |
| `area_to_reference_conversion` | 按面积计的田间流 | activity-specific property | activity-specific unit | 在缩放到 1,000 kg 籽粒前，使用相同面积和作物周期的商品籽粒产量，将每公顷作物周期总量换算。 |
| `nutrient_content_basis` | 养分施用 | nutrient mass | kg N, kg P2O5, or kg K2O | 将配方产品质量与声明的养分含量基准作为独立字段保留。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 作物周期开始时已准备好的田地，种子和外购管理投入从此跨越前景边界 |
| starting_condition_role | 管理型荞麦籽粒生产的起点 |
| product_classification_scope | 对应 CPC 3.0 code 01192 的栽培荞麦籽粒 |
| recursive_input_rule | 购买或留作播种的荞麦作为明确的种子投入，并链接到独立的上游种子供应数据集，不得循环回本籽粒过程 |
| upstream_dataset_requirement | 与种子、肥料、植保配方、燃料、电力、灌溉供应和外包服务兼容的上游数据集 |
| disclosure | 品种、作物季节、地理位置、田地面积、作物日期、前茬作物、耕作、灌溉、产量、水分、残余物去向和调制边界 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | 所有符合要求的数据集 | 纳入田间准备、播种、作物管理、收获，以及农场交付前进行的农场内清理或干燥。 | `cornell-buckwheat-production` |
| `boundary_direct_field_emissions` | 管理土壤排放 | 使用适用于地理位置的方法和养分及残余物核算所用的相同活动数据，纳入直接和间接含氮排放。 | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | 秸秆和作物残余物 | 区分还田、焚烧、作为产品移出和作为废物移出；避免重复计算残余物氮和外运秸秆。 | `ipcc-2019-managed-soils` |
| `boundary_post_farm_gate_exclusion` | 下游活动 | 排除场外运输、储存、脱壳、碾磨、面粉或籽粒生产、饲料制造、食品加工和使用，除非研究明确扩展到本 PCR 之外。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `buckwheat_field_production` | 荞麦田间生产与收获 | required | always | 管理型生物生产与收获 | 一个作物周期的栽培公顷数和收获籽粒质量 |
| `farm_gate_buckwheat_conditioning` | 农场内荞麦籽粒调制 | conditional | 在农场交付前发生清理、干燥、分选或临时处理，且未嵌入田间记录 | 将收获籽粒处理为声明市场状态 | 进入量和合格籽粒质量 |

### 过程：荞麦田间生产与收获（`buckwheat_field_production`）

#### 输入

##### 产品流

###### 播种用荞麦种子（`buckwheat_seed_input`）

记录购买或留用的荞麦种子进入作物周期。不得用收获籽粒身份替代种子身份。

- 选定流：Buckwheat seed for sowing
- 流属性/单位：Mass / kg
- 数量规则：实测播种种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷，并使用同周期产量换算
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：
- 数量范围：播种率筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：45
  - 上限：100
  - 单位：kg seed/ha
  - 基准：条播或可比建植方式；超出范围的比率需说明理由
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`buckwheat_field_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷，并换算为 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：
- 数量范围：暂定氮投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N/ha
  - 基准：一个作物周期；以区域土壤检测和农艺证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定磷投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg P2O5/ha
  - 基准：一个作物周期；以土壤检测和区域证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定钾投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：160
  - 单位：kg K2O/ha
  - 基准：一个作物周期；以土壤检测和区域证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`irrigation_water_input`）

仅在荞麦田实际施水时记录灌溉；雨养生产应在有田间证据支持时记录施用灌溉为零。

- 选定流：Irrigation water supply
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按田地和作物周期计量或计算灌溉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷，并换算为 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：m3/ha
  - 基准：一个作物周期；以当地水量平衡证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械柴油（`field_diesel_input`）

当燃料使用跨越前景边界时，记录田间准备、播种、作物管理和收获机械消耗的柴油。

- 选定流：Diesel fuel for mobile agricultural machinery
- 流属性/单位：Energy carrier or mass / L or kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：保留燃料载体身份，将油箱记录、发票或承包商活动换算为燃料质量或能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷，并换算为 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定田间燃料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：140
  - 单位：L/ha
  - 基准：包括收获的一个作物周期；以实测或承包商记录替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的植保配方（`crop_protection_input`）

施用除草剂、杀虫剂、杀菌剂或其他配方时，分别记录每种配方；不得把不同产品合并为通用植保身份。

- 选定流：Crop-protection formulation for buckwheat production
- 流属性/单位：Mass of formulation / kg
- 数量规则：按产品和施用事件汇总实测配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每栽培公顷，并换算为 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：
- 数量范围：暂定植保配方筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：12
  - 单位：kg formulation/ha
  - 基准：一个作物周期；每次施用都记录产品身份和有效成分
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交付的收获荞麦籽粒（`harvested_buckwheat_grain_output`）

记录声明农场交付水分和杂质状态下的可销售或转移收获籽粒。不包含调制过程时，这是终端参考输出。

- 选定流：Buckwheat, production mix, at farm gate, harvested grain, unprocessed `7f337a9e-f24a-4d48-841e-0b5326d028d7`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：按声明水分和质量状态计量收获籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端输出缩放到 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：
- 数量范围：暂定收获籽粒产量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：500
  - 上限：3,000
  - 单位：kg grain/ha
  - 基准：一个作物周期；以区域产量记录替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 用于声明用途的移出荞麦秸秆（`buckwheat_straw_output`）

只有在秸秆被有意从田间移出并转移至明确用途时，才将其记录为产品；留在田间或还田的残余物仍属于田间管理。

- 选定流：Buckwheat straw for declared use
- 流属性/单位：Mass / kg dry or as-received straw
- 数量规则：按去向和水分基准计量移出秸秆质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷，并换算为 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：
- 数量范围：暂定移出秸秆筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4,000
  - 单位：kg straw/ha
  - 基准：全部残余物留在田间时为零；声明去向和水分基准
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获和田间损失（`harvest_loss_waste_output`）

当收获损失被实测或由有记录的田间或收获平衡估算，且未成为有用副产品时，将籽粒及其他收获损失作为废物记录。

- 选定流：Buckwheat harvest loss waste
- 流属性/单位：Mass / kg
- 数量规则：按去向实测或核算损失质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_output_records`
- 来源：
- 数量范围：暂定收获损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg/1,000 kg harvested grain
  - 基准：未转移至声明用途的田间和收获损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到环境空气的氧化亚氮（`field_n2o_air_output`）

使用适用的 IPCC 层级或经审查的区域方法，根据采集的氮投入和残余物活动计算土壤氧化亚氮。

- 选定流：Nitrous oxide emission to ambient air
- 流属性/单位：Mass / kg N2O
- 数量规则：根据采集的活动数据和声明因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷，并换算为 1,000 kg 籽粒
- 基准类型：氮投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-managed-soils`

###### 排放到环境空气的氨（`field_ammonia_air_output`）

按养分产品、施用方式、时间和适用的当地方法计算氨挥发。

- 选定流：Ammonia emission to ambient air
- 流属性/单位：Mass / kg NH3
- 数量规则：根据氮施用记录和适用因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷，并换算为 1,000 kg 籽粒
- 基准类型：氮投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`emep-eea-2023-guidebook`

###### 排放到水体的硝酸盐（`field_nitrate_water_output`）

只有在有适用于地理位置的模型、监测平衡或经审查的清单方法支持时，才记录硝酸盐淋失或径流。

- 选定流：Nitrate emission to water
- 流属性/单位：Mass / kg nitrate
- 数量规则：根据氮投入、作物与土壤条件、排水或径流和选定方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷，并换算为 1,000 kg 籽粒
- 基准类型：氮投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-managed-soils`

### 过程：农场内荞麦籽粒调制（`farm_gate_buckwheat_conditioning`）

#### 输入

##### 产品流

###### 进入调制的收获籽粒（`harvested_grain_conditioning_input`）

记录在农场交付前从田间生产转入清理、干燥、分选或临时处理的籽粒质量。

- 选定流：Buckwheat, production mix, at farm gate, harvested grain, unprocessed `7f337a9e-f24a-4d48-841e-0b5326d028d7`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：计量进入量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每调制批次，并换算为 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`

###### 调制用电力（`conditioning_electricity_input`）

记录清理、输送、通风和干燥控制使用的电力。

- 选定流：Electricity supply for grain conditioning
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：计量电力，或用设备功率乘以经核实的运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 数量范围：暂定调制电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kWh/1,000 kg grain
  - 基准：农场交付前包含的调制
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥供应的热能（`conditioning_heat_input`）

记录用于降低籽粒水分的外供热量或燃料能量。

- 选定流：Process heat for grain drying
- 流属性/单位：Energy / MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`purchased-process-heat`
- 数量规则：将实测燃料或热量换算为交付能量，同时保留载体身份
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 数量范围：暂定干燥能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,200
  - 单位：MJ/1,000 kg grain
  - 基准：未启用干燥时为零；宽泛的首轮候选估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交付的调制荞麦籽粒（`conditioned_buckwheat_grain_output`）

记录包含清理或干燥后的合格籽粒，以及声明的农场交付状态。

- 选定流：Buckwheat, production mix, at farm gate, harvested grain, unprocessed `7f337a9e-f24a-4d48-841e-0b5326d028d7`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：按声明水分和杂质计量合格籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端输出缩放到 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：
- 数量范围：储存水分 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：14
  - 单位：percent moisture, wet basis
  - 基准：必须声明市场状态；以买方或储存规格替换此宽泛范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 用于声明用途的荞麦筛下物（`buckwheat_screenings_output`）

仅当荞麦占主导的筛下物或破碎籽粒被计量并有意交付至饲料或其他声明用途时，才将其记录为产品。

- 选定流：Buckwheat grain screenings for declared use
- 流属性/单位：Mass / kg
- 数量规则：按去向计量有用筛下物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：
- 数量范围：暂定有用筛下物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg/1,000 kg incoming grain
  - 基准：调制批次；没有交付有用筛下物时为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 杂质和拒收籽粒（`conditioning_reject_waste_output`）

按物料类别和去向记录移除的石块、土壤、杂草材料、受污染籽粒和其他拒收物。

- 选定流：Grain-conditioning foreign matter and rejected grain
- 流属性/单位：Mass / kg
- 数量规则：按物料类别和去向计量拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：
- 数量范围：暂定调制拒收物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg/1,000 kg incoming grain
  - 基准：调制批次
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 田间生产与调制 | 优先分别记录田间生产和调制，并在分配前分别计量籽粒、筛下物、秸秆和废物。 | `iso-14044-2006` |
| `allocation_field_residue` | 留在田间、还田或焚烧的残余物 | 不将留在田间的残余物当作副产品；将其管理和排放纳入田间生产，并避免与移出秸秆重复计算。 | `ipcc-2019-managed-soils` |
| `allocation_removed_straw` | 可销售的移出秸秆 | 无法通过细分解决共用负荷时，使用同期农场交付价值进行经济分配；披露水分基准，并将质量分配作为敏感性分析。 | `iso-14044-2006` |
| `allocation_conditioning_outputs` | 有用筛下物或降级籽粒 | 将具有正向价值的有意输出作为副产品，其他拒收物作为废物；只有无法细分时才在调制交付点采用经济分配。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `buckwheat_field_production` | seed, nutrients, irrigation, fuel, crop protection | 田间日志、发票、施用记录、计量表或承包商记录 | field_id; area; cultivar; input_product; amount; nutrient_content; date; operation; contractor_scope | 将实物投入和作业核对至每块田地及作物周期 | kg; kg nutrient; L; m3; ha | 每一事件 | 完整作物周期 | 所有代表性田地 | 按实物身份汇总；不合并产品地计算养分；使用同周期面积和产量归一化 | 发票；标签；计量表校准；田间日志 |
| `cp_harvest_output_records` | `buckwheat_field_production` | grain, removed straw, harvest losses, residue fate | 地磅、产量监测、打捆记录、水分检测 | field_id; harvest_date; grain_mass; grain_moisture; straw_mass; straw_moisture; loss_mass; residue_fate; destination | 将收获量和移出量与田地面积及作物周期核对 | kg; percent; ha | 每次收获 | 完整作物周期 | 所有代表性田地 | 分别汇总合格籽粒、每个残余物去向和损失 | 地磅或产量监测校准；水分记录；去向证据 |
| `cp_field_emission_activity` | `buckwheat_field_production` | emissions to air and water | 养分、土壤、天气、残余物和排放模型记录 | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | 使用一个声明的、适用于地理位置的方法计算每种排放 | kg N; kg emission; ha | 每个事件及作物周期计算 | 完整作物周期 | 所有代表性田地 | 按田地计算、按面积加权，再以同周期产量归一化 | 源记录；因子来源；模型文件；养分平衡审查 |
| `cp_conditioning_records` | `farm_gate_buckwheat_conditioning` | grain, energy, screenings, rejects | 批次单、地磅、水分检测、计量表、燃料和去向记录 | batch_id; incoming_mass; incoming_moisture; electricity; heat; accepted_mass; accepted_moisture; screenings; rejects | 将批次和计量表与合格输出核对 | kg; percent; kWh; MJ | 每个批次或计量周期 | 所有交付前调制 | 所有纳入的设备和批次 | 汇总匹配批次；按时间或处理质量分配共用计量表；关闭湿质量平衡 | 地磅和水分仪校准；计量表核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | 田间流 | 每公顷作物周期量 / 每公顷商品籽粒产量 × 1,000 kg | 流量；面积；同周期籽粒质量 | 每 1,000 kg 籽粒的数量 |  |
| `calc_nutrient_content` | 肥料和改良剂投入 | 产品质量 × 声明养分分数；保留元素或氧化物当量基准 | 产品身份；质量；检测；报告基准 | 按来源计的 kg N、kg P2O5、kg K2O |  |
| `calc_managed_soil_n2o` | 土壤 N2O | 对肥料氮、有机氮、还田残余物氮、挥发和淋失路径应用选定 IPCC 层级或区域方法 | 氮活动；残余物去向；土壤和气候；因子 | 按路径计的 kg N2O | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | 空气氨 | 按养分产品、施用方式、时间和适用因子计算 | 氮产品记录；施用细节；因子 | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_conditioning_mass_balance` | 籽粒调制 | 进入湿籽粒 = 合格籽粒 + 有用筛下物 + 拒收物 + 水分和其他测量损失，并处于不确定度内 | 质量；水分；损失记录 | 每合格籽粒的核对输出 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 确认为荞麦而非小麦、黑麦、藜麦或混合籽粒；保留品种、预期用途、状态和交付信息。 | 作物、批次和销售记录 |
| `dq_temporal_alignment` | 所有前景行 | 输入、收获、产量、排放和调制记录来自同一作物周期；披露代理年份。 | 有日期的田间和批次记录 |
| `dq_mass_and_moisture` | 籽粒和秸秆 | 每次基准换算都保留地磅或产量监测校准和水分测量。 | 校准和水分检测记录 |
| `dq_completeness` | 过程图和流 | 核对每块田地和调制批次，并区分零、不适用、代理和缺失值。 | 田地清单；批次核对 |
| `dq_identity_resolution` | 参数化和未映射流 | 最终发布 TIDAS 过程前，将每个 Flow Set 参考和未映射实物流解析为经过核实的 UUID。 | 身份审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 终端输出 | 缩放后恰有一个终端荞麦籽粒输出等于 1,000 kg，并声明水分和质量限定信息。 |  |
| `validation_process_route` | 过程图 | 田间生产只纳入一次；调制仅在农场交付前发生时纳入，并避免重复计算已嵌入的能耗或拒收物。 |  |
| `validation_crop_cycle_reconciliation` | 田间清单 | 面积、投入、收获输出、残余物去向和排放属于相同作物周期和田地。 |  |
| `validation_nitrogen_balance` | 氮清单 | 在披露方法和因子的前提下，核对养分含量、还田和移出残余物氮及排放路径。 | `ipcc-2019-managed-soils` |
| `validation_conditioning_balance` | 调制 | 在不确定度内核对进入湿籽粒与合格籽粒、筛下物、拒收物、水分损失和其他测量损失。 | `mass-balance-identity` |
| `validation_flow_identity` | 每个流 | 仅接受经过核实的 UUID 作为 `fixed`，以及适用的现有 Flow Set 作为 `parameterized`；否则保留未映射覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 荞麦籽粒前景生产数据集 |
| downstream_use | `secondary_dataset`；审查和发布后可作为 `background_dataset` |
| allowed_use | 用于荞麦籽粒农场交付的 LCA，以及保留声明的地理位置、季节、水分、残余物、分配和调制背景的下游系统 |
| excluded_use | 认证种子、覆盖作物或绿肥服务、青饲料、碾磨、脱壳、饲料制造、食品加工，或未经审查代理决定的其他作物 |
| required_metadata | 地理位置；品种；作物季节；收获年份；面积；产量；水分；预期用途；耕作；灌溉；残余物去向；调制；分配；身份解析 |
| required_quality_disclosure | 前景覆盖；代理投入；缺失记录；范围超限；排放方法；计量表和质量平衡核对 |
| update_trigger | 新的经审查荞麦证据、实质性路线变化、排放方法修订、Flow Set 或 UUID 身份变化，或代表性数据超出 QA 范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cornell-buckwheat-production` | extension_guidance | Cornell University Cooperative Extension, buckwheat production and cover-crop guidance | 作物路线、建植、收获和边界背景 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 土壤 N2O、残余物氮、挥发和淋失路径及重复计算控制 |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | 农业氨方法和 QA 背景 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级和披露 |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched grain-conditioning batches | 调制质量平衡计算和校验 |
