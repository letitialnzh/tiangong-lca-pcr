---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.triticale
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 小黑麦籽粒

## 1. 范围与适用性

本 PCR 适用于收获后在农场门交付的小黑麦籽粒，并包括达到声明市场状态所需的农场内清理或干燥。适用于春播和冬播籽粒路线。不包括认证种子生产、全株青饲料、干草、青贮、放牧、覆盖作物服务、场外制粉、饲料制造和下游运输。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.triticale |
| classification_refs | CPC 3.0: 01191 Triticale |
| covered_products | 在农场门交付、供饲料、食品或后续加工使用的收获小黑麦籽粒 |
| excluded_products | 认证小黑麦种子；全株青饲料、干草、青贮、放牧或覆盖作物服务；面粉及其他碾磨产品 |
| representative_product | 未加工收获小黑麦籽粒 |
| production_route | 春播或冬播小黑麦受管理种植、收获及有条件的农场内籽粒整理 |
| market_state | 农场门未加工籽粒，声明水分和质量状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门小黑麦籽粒 |
| How much | 1,000 kg 收货基籽粒 |
| How well | 符合声明水分、杂质、损伤和预期用途规格的收获未加工籽粒 |
| How long or cycle | 一个声明的作物周期 |
| reference_flow_link | 无独立整理时来自 `triticale_field_production` 的终端籽粒输出，否则来自 `farm_gate_grain_conditioning` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Triticale, production mix, at farm gate, harvested grain, unprocessed `490074de-43a7-452a-8574-5b53c368bfb9` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 春播或冬播类型；品种；生产地域；收获年份；交付水分；杂质基准；预期用途；是否包含整理 |
| 绑定模式 | `fixed` |
| 流集 |  |
| 流集版本 |  |
| 流集分组 |  |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 参考小黑麦籽粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按收货质量报告并声明实测水分；所有干物质换算均保留水分基准。 |
| `area_to_reference_conversion` | 按面积记录的田间流 | 活动对应属性 | 活动对应单位 | 用同一面积和作物周期的可销售籽粒产量换算每公顷总量，再缩放至 1,000 kg 籽粒。 |
| `nutrient_content_basis` | 养分投入 | 养分质量 | kg N、kg P2O5 或 kg K2O | 分别保留制剂产品质量和声明的养分含量基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 作物周期开始时已准备的田块，种子及外购管理投入跨越前景边界 |
| starting_condition_role | 受管理小黑麦籽粒生产起点 |
| product_classification_scope | 对应 CPC 3.0 01191 的栽培小黑麦籽粒 |
| recursive_input_rule | 外购或留作播种的小黑麦作为独立种子投入连接不同的上游种子供应数据集，不得回环至本籽粒过程 |
| upstream_dataset_requirement | 为种子、肥料、植保制剂、燃料、电力、灌溉供水和外包服务使用相容的上游数据集 |
| disclosure | 作物类型、品种、地域、田块面积、作物日期、前茬、耕作、灌溉、产量、水分、残余物去向和整理边界 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | 所有符合性数据集 | 包括整地、播种、作物管理、收获以及农场门交付前实施的农场内清理或干燥。 | `uga-small-grains-handbook`; `uw-triticale-production` |
| `boundary_direct_field_emissions` | 受管理土壤排放 | 使用地域适用方法和养分及残余物核算所用的同一活动数据，包括氮相关直接和间接排放。 | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | 秸秆和作物残余物 | 区分还田、焚烧、作为产品移出和作为废物移出，防止残余物氮和外运秸秆重复核算。 | `ipcc-2019-managed-soils` |
| `boundary_post_farm_gate_exclusion` | 下游活动 | 除非研究范围明确扩展，否则排除场外运输、储存、制粉、饲料制造、食品加工和使用。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `triticale_field_production` | 小黑麦田间生产与收获 | required | always | 受管理生物生产和收获 | 一个作物周期的栽培公顷和收获籽粒质量 |
| `farm_gate_grain_conditioning` | 农场内小黑麦籽粒整理 | conditional | 农场门交付前发生清理、干燥、分选或临时处理，且未嵌入田间记录 | 将收获籽粒整理至声明市场状态 | 进料和合格籽粒质量 |

### 过程：小黑麦田间生产与收获（`triticale_field_production`）

#### 输入

##### 产品流

###### 播种用小黑麦种子（`triticale_seed_input`）

记录进入作物周期的外购或自留小黑麦种子。不得以收获籽粒 UUID 代替种子身份。

- 选定流：播种用小黑麦种子
- 流属性/单位：质量 / kg
- 数量规则：实测播种种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷，并按同周期产量换算
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：`uga-small-grains-handbook`; `usda-nrcs-triticale-cover-crop`
- 数量范围：公开播种率筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：84
  - 上限：134
  - 单位：kg seed/ha
  - 基准：条播或相当的建植方式；范围外数值须说明理由
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`uga-small-grains-handbook`; `usda-nrcs-triticale-cover-crop`

###### 农业养分与肥料投入（`triticale_field_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算至 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：
- 数量范围：暂定氮投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg N/ha
  - 基准：一个作物周期；以地域证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定磷投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg P2O5/ha
  - 基准：一个作物周期；以土壤检测和地域证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定钾投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：220
  - 单位：kg K2O/ha
  - 基准：一个作物周期；以土壤检测和地域证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水供应（`irrigation_water_input`）

将输送至田块的灌溉水与自然降水分别记录。

- 选定流：灌溉水供应
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：计量体积或经验证的泵流量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算至 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定灌溉筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：8000
  - 单位：m3/ha
  - 基准：一个作物周期，包括零灌溉的雨养生产
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械柴油（`field_diesel_input`）

记录自有或受控机械消耗的柴油；若外包作业单独建模，其燃料属于上游服务数据集。

- 选定流：农业机械柴油
- 流属性/单位：体积 / L
- 数量规则：分配至小黑麦作业的实测或发票柴油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算至 1,000 kg 籽粒
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定田间柴油筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：L/ha
  - 基准：一个作物周期；作业由上游服务或非柴油设备表示时可为零
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保制剂施用（`crop_protection_input`）

按实际除草剂、杀菌剂、杀虫剂或其他制剂分别建立交换，并保留活性成分、浓度和剂量；不得合并不同产品。

- 选定流：按物理产品身份记录的植保制剂
- 流属性/单位：质量 / kg
- 数量规则：按产品和施用事件记录制剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每栽培公顷并换算至 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定单一制剂筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg formulation/ha
  - 基准：一个作物周期内每种单独识别的制剂
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门收获小黑麦籽粒（`harvested_triticale_grain_output`）

记录无独立整理路线的终端可销售籽粒；包含独立整理时，记录转入整理过程的实测中间籽粒。

- 选定流：Triticale, production mix, at farm gate, harvested grain, unprocessed `490074de-43a7-452a-8574-5b53c368bfb9`
- 流属性/单位：质量 / kg
- 绑定模式：`fixed`
- 数量规则：声明水分下实测可销售籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷；终端输出缩放至 1,000 kg
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：`uw-triticale-production`
- 数量范围：暂定可销售籽粒产量筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：9000
  - 单位：kg grain/ha
  - 基准：声明水分下的一个作物周期；以地域证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 从田间移出的小黑麦秸秆（`removed_triticale_straw_output`）

仅在秸秆被有意移出并作为有用产品交付时记录；留田或还田残余物不属于此输出。

- 选定流：田边移出的小黑麦秸秆
- 流属性/单位：质量 / kg
- 数量规则：声明水分下实测移出秸秆质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算至 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 数量范围：暂定移出秸秆筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：12000
  - 单位：kg straw/ha
  - 基准：声明水分下的一个作物周期；秸秆留田时为零
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 排放至环境空气的一氧化二氮（`field_n2o_air_output`）

采用适用 IPCC 层级或经审查地域方法，根据采集的氮投入和残余物活动计算土壤一氧化二氮。

- 选定流：排放至环境空气的一氧化二氮
- 流属性/单位：质量 / kg N2O
- 数量规则：根据采集活动数据和声明因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算至 1,000 kg 籽粒
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-managed-soils`

###### 排放至环境空气的氨（`field_ammonia_air_output`）

按肥料或改良剂产品、施用方式、时间和地域方法计算氨挥发。

- 选定流：排放至环境空气的氨
- 流属性/单位：质量 / kg NH3
- 数量规则：根据施氮记录和适用因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算至 1,000 kg 籽粒
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`emep-eea-2023-guidebook`

###### 排放至水体的硝酸盐（`field_nitrate_water_output`）

仅在地域适用模型、监测平衡或经审查清单方法支持时记录硝酸盐淋失或径流。

- 选定流：排放至水体的硝酸盐
- 流属性/单位：质量 / kg nitrate
- 数量规则：根据氮投入、作物与土壤条件、排水或径流及所选方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算至 1,000 kg 籽粒
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-managed-soils`

### 过程：农场内小黑麦籽粒整理（`farm_gate_grain_conditioning`）

#### 输入

##### 产品流

###### 进入整理的收获籽粒（`harvested_grain_conditioning_input`）

记录从田间生产转入清理、干燥、分选或临时处理的实测籽粒。

- 选定流：Triticale, production mix, at farm gate, harvested grain, unprocessed `490074de-43a7-452a-8574-5b53c368bfb9`
- 流属性/单位：质量 / kg
- 绑定模式：`fixed`
- 数量规则：实测进料籽粒质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每整理批次并换算至 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`

###### 整理用电力（`conditioning_electricity_input`）

记录清理、输送、通风和干燥控制所用电力。

- 选定流：籽粒整理电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：计量电力或设备功率乘经验证运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 数量范围：暂定整理用电筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kWh/1,000 kg grain
  - 基准：农场门交付前包含的整理
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥用热能（`conditioning_heat_input`）

记录降低籽粒水分所用供应热量或燃料能量。

- 选定流：籽粒干燥过程热
- 流属性/单位：能量 / MJ
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`purchased-process-heat`
- 数量规则：将实测燃料或热量换算为供应能量，同时保留载能体身份
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 数量范围：暂定干燥能耗筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1200
  - 单位：MJ/1,000 kg grain
  - 基准：无主动干燥时为零；宽泛候选估算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门整理后小黑麦籽粒（`conditioned_triticale_grain_output`）

记录在声明农场门状态下经包含的清理或干燥后的合格籽粒。

- 选定流：Triticale, production mix, at farm gate, harvested grain, unprocessed `490074de-43a7-452a-8574-5b53c368bfb9`
- 流属性/单位：质量 / kg
- 绑定模式：`fixed`
- 数量规则：声明水分和杂质下实测合格籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端输出缩放至 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`uga-small-grains-handbook`; `uw-triticale-production`
- 数量范围：长期储存水分上限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：13
  - 单位：湿基水分百分比
  - 基准：拟长期储存的籽粒；可声明并支持其他市场水分
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`uga-small-grains-handbook`; `uw-triticale-production`

###### 定向利用的小黑麦筛下物（`triticale_screenings_output`）

仅当小黑麦为主的筛下物或破碎籽粒经计量并有意交付饲料或其他用途时，作为产品记录。

- 选定流：用于声明用途的小黑麦籽粒筛下物
- 流属性/单位：质量 / kg
- 数量规则：按去向实测有用筛下物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 数量范围：暂定有用筛下物筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg/1,000 kg incoming grain
  - 基准：整理批次；无有用筛下物交付时为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 异物和不合格籽粒（`conditioning_reject_waste_output`）

按物料身份和去向记录移出的石块、土壤、杂草物料、污染籽粒及其他不合格物。

- 选定流：籽粒整理异物和不合格籽粒
- 流属性/单位：质量 / kg
- 数量规则：按物料类别和去向实测不合格物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 数量范围：暂定整理不合格物筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg/1,000 kg incoming grain
  - 基准：整理批次
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 田间生产和整理 | 分配前优先分别记录田间生产和整理，并分别计量籽粒、筛下物、秸秆和废物。 | `iso-14044-2006` |
| `allocation_field_residue` | 留田、还田或焚烧的残余物 | 不将留田残余物作为共产品；其管理和排放计入田间生产，并防止与移出秸秆重复核算。 | `ipcc-2019-managed-soils` |
| `allocation_removed_straw` | 可销售移出秸秆 | 若过程细分不能分离共同负荷，使用同期农场门价值进行经济分配；披露水分基准并以质量分配作敏感性分析。 | `iso-14044-2006` |
| `allocation_conditioning_outputs` | 有用筛下物或降级籽粒 | 有意利用且有正价值的输出作为共产品，其他不合格物作为废物；仅在不能细分时于整理交付点采用经济分配。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `triticale_field_production` | 种子、养分、灌溉、燃料、植保 | 田间日志、发票、施用记录、仪表或外包记录 | field_id; area; cultivar; input_product; amount; nutrient_content; date; operation; contractor_scope | 将物理投入和作业核对至各田块和作物周期 | kg; kg nutrient; L; m3; ha | 每次事件 | 完整作物周期 | 所有代表田块 | 按物理身份汇总；不合并产品地计算养分；按同周期面积和产量归一化 | 发票；标签；校准仪表；田间日志 |
| `cp_harvest_output_records` | `triticale_field_production` | 籽粒、移出秸秆、残余物去向 | 地磅、产量监测、草捆记录、水分测试 | field_id; harvest_date; grain_mass; grain_moisture; straw_mass; straw_moisture; residue_fate; destination | 将收获和移出质量核对至田块面积及作物周期 | kg; percent; ha | 每次收获 | 完整作物周期 | 所有代表田块 | 分别汇总合格籽粒和各残余物去向 | 秤或产量监测校准；水分记录；去向证据 |
| `cp_field_emission_activity` | `triticale_field_production` | 排放至空气和水体 | 养分、土壤、天气、残余物和排放模型记录 | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | 用一种声明的地域适用方法计算各排放 | kg N; kg emission; ha | 每次事件及作物周期计算 | 完整作物周期 | 所有代表田块 | 按田块计算、面积加权，再按同周期产量归一化 | 原始记录；因子来源；模型文件；养分平衡审查 |
| `cp_conditioning_records` | `farm_gate_grain_conditioning` | 籽粒、能源、筛下物、不合格物 | 批次单、秤、水分测试、仪表、燃料和去向记录 | batch_id; incoming_mass; incoming_moisture; electricity; heat; accepted_mass; accepted_moisture; screenings; rejects | 将批次和仪表核对至合格输出 | kg; percent; kWh; MJ | 每批次或仪表周期 | 全部场前整理 | 所有包含的设备和批次 | 汇总匹配批次；按时间或处理量分配共用仪表；闭合湿质量平衡 | 校准秤和水分仪；仪表核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | 田间流 | 每公顷作物周期量 / 每公顷可销售籽粒产量 × 1,000 kg | 流量；面积；同周期籽粒质量 | 每 1,000 kg 籽粒流量 |  |
| `calc_nutrient_content` | 肥料和改良剂投入 | 产品质量 × 声明养分分数；保留元素或氧化物当量基准 | 产品身份；质量；化验；报告基准 | 按来源的 kg N、kg P2O5、kg K2O |  |
| `calc_managed_soil_n2o` | 土壤 N2O | 对肥料氮、有机氮、还田残余物氮、挥发和淋失路径应用所选 IPCC 层级或地域方法 | 氮活动；残余物去向；土壤气候；因子 | 各路径 kg N2O | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | 氨排放 | 按肥料类型、施用方式、时间和适用因子计算 | 氮产品记录；施用信息；因子 | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_conditioning_mass_balance` | 籽粒整理 | 在不确定度内，进料湿籽粒 = 合格籽粒 + 有用筛下物 + 不合格物 + 水分及其他实测损失 | 质量；水分；损失记录 | 每合格籽粒的核对输出 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 确认是小黑麦而非小麦、黑麦或混合小谷物；保留品种、用途、状态和交付点。 | 作物、批次和销售记录 |
| `dq_temporal_alignment` | 所有前景行 | 投入、收获、产量、排放和整理记录须来自同一作物周期；披露代理年份。 | 带日期田间和批次记录 |
| `dq_mass_and_moisture` | 籽粒和秸秆 | 所有基准换算均保留秤或产量监测校准及水分测量。 | 校准和水分测试记录 |
| `dq_completeness` | 过程图和流 | 核对每个田块和整理批次，区分零值、不适用、代理和缺失。 | 田块清单；批次核对 |
| `dq_identity_resolution` | 参数化和未映射流 | 最终发布 TIDAS 过程前，将所有 Flow Set 引用和未映射物理交换解析为经验证 UUID。 | 身份审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 终端输出 | 缩放后恰有一个终端小黑麦籽粒输出等于 1,000 kg，使用固定参考 UUID 并声明水分及质量限定。 |  |
| `validation_process_route` | 过程图 | 田间生产仅纳入一次；整理仅在农场门前发生时纳入，并避免重复计算嵌入的能源或不合格物。 |  |
| `validation_crop_cycle_reconciliation` | 田间清单 | 面积、投入、收获输出、残余物去向和排放对应同一作物周期及田块。 |  |
| `validation_nitrogen_balance` | 氮清单 | 核对养分含量、还田和移出残余物氮及排放路径，并披露方法和因子。 | `ipcc-2019-managed-soils` |
| `validation_conditioning_balance` | 整理 | 在不确定度内核对进料湿籽粒、合格籽粒、筛下物、不合格物、水分和其他实测损失。 | `mass-balance-identity` |
| `validation_flow_identity` | 每个流 | 仅精确验证 UUID 使用 `fixed`，仅适用既有 Flow Set 使用 `parameterized`，其余保留未映射覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景小黑麦籽粒生产数据集 |
| downstream_use | `secondary_dataset`; 审查发布后可作 `background_dataset` |
| allowed_use | 保留声明地域、水分、残余物、分配和整理背景的农场门小黑麦籽粒 LCA 及下游系统 |
| excluded_use | 认证种子、全株饲草或青贮、制粉、饲料制造，或未经代理审查的其他作物 |
| required_metadata | 地域；春播或冬播；品种；收获年份；面积；产量；水分；用途；耕作；灌溉；残余物去向；整理；分配；身份解析 |
| required_quality_disclosure | 前景覆盖；代理投入；缺失记录；范围超限；排放方法；仪表和质量平衡核对 |
| update_trigger | 新的经审查小黑麦证据、重大路线变化、排放方法修订、Flow Set 或 UUID 变化，或代表数据超出 QA 范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `uga-small-grains-handbook` | official_guidance | University of Georgia Cooperative Extension, Southern Small Grains Resource Management Handbook, Bulletin 1190, https://extension.uga.edu/publications/detail.html?number=B1190 | 建植、收获、干燥和 13% 籽粒水分指南 |
| `uw-triticale-production` | extension_guidance | University of Wisconsin-Madison Cooperative Extension, Triticale, https://corn.aae.wisc.edu/Crops/Triticale.aspx | 籽粒路线、收获、产量背景、干燥和储存水分 |
| `usda-nrcs-triticale-cover-crop` | official_guidance | USDA NRCS and Iowa State University Extension, Triticale Cover Crop Fact Sheet, CROP 3250, https://www.nrcs.usda.gov/sites/default/files/2024-04/Triticale%20Cover%20Crop%20Fact%20Sheet.pdf | 种子身份和播种率背景 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 土壤 N2O、挥发和淋失路径、残余物氮及防重复核算 |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, EEA Report 06/2023, https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023 | 农业氨方法和 QA 背景 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级和披露 |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched grain-conditioning batches | 整理质量平衡计算和校验 |
