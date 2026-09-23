---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.poppy-seed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 罂粟籽

## 1. 范围与适用性

本规则覆盖一年生 Papaver somniferum L. 为获得籽粒而进行的种植、成熟蒴果收获、籽粒分离及农场门口前实际发生的通风、干燥或初步清洁。参考产品是农场门口未经加工的罂粟籽；食用、榨油及其他最终用途是需披露的下游路径，不改变本参考流。欧盟食品籽粒指南中的含水率及纯度指标仅属于该地区、该用途的条件性参考，不作为本产品类别的统一合格限值。排除榨油、食品深度清洁或脱碱处理、药用提取、鸦片制取、认证播种籽分级及离场运输。资料：`eu-poppy-2014`、`usu-seed-poppy`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.poppy-seed` |
| classification_refs | CPC 3.0 01448（仅分类定位） |
| covered_products | 农场门口未经加工、已与成熟蒴果分离的罂粟籽；披露食用或油用去向与实测含水/杂质状态 |
| excluded_products | 蒴果、罂粟秸秆、鸦片乳汁、罂粟籽油、脱碱食品配料、认证播种籽 |
| representative_product | 按净质量计量的收获籽粒 |
| production_route | 直接播种的管理型作物生产 → 独立成熟蒴果收获与籽粒分离 → 仅在发生时记录农场初级处理；人工与机械收获分别记录能源、损失及籽粒损伤，不混作同一作业记录 |
| market_state | Production mix, at farm gate；Harvested grain, unprocessed |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门口未经加工的罂粟籽 |
| How much | 1 kg 净籽粒 |
| How well | 声明批次含水率、杂质、损伤及目标市场；不预设食用品质等级 |
| How long or cycle | 单个有记录的一年生作物周期及关联收获批次 |
| reference_flow_link | 以下唯一参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Poppy seed `c49b37e3-df47-4caf-9a6a-2df1a528800a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Papaver somniferum 籽粒；农场门口；未经加工；批次、含水率、杂质状态、主要去向、收获及初级处理方式 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 净参考籽粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按移交时实际含水和杂质状态称量；不得把蒴果或油计入。 |
| `field_to_gate` | 田间及收获输入 | 适用的质量、体积或能量 | 每公顷及每 kg | 将作物周期总量除以同周期净交付籽粒质量；记录面积、总产量和转换因子。 |
| `moisture_basis` | 籽粒及秸秆 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 比较质量平衡前注明各批次干湿基准；若干燥则记录前后含水率及水分损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备好播种的田块与进入本作物周期的具体播种籽、肥料及其他产品投入 |
| starting_condition_role | 对本季播种籽和外购投入建立上游产品交换；前期轮作与土地状态另行披露 |
| product_classification_scope | 收获的罂粟籽，不含蒴果、秸秆、乳汁、油或认证播种籽 |
| recursive_input_rule | 留用罂粟籽作为本季播种籽时记录真实数量与前期来源，禁止让同一周期的参考产出递归供给自身 |
| upstream_dataset_requirement | 每项外购产品投入均有适当的上游数据；未匹配具体流时标记待解析，不以笼统类别替代 |
| disclosure | 田块、作物周期、籽粒用途、收获方式、蒴果/秸秆去向、农场处理开关及含水/杂质状态 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `annual_crop_boundary` | 种植至农场门口 | 包含播种、田间管理、收获、籽粒分离和实际发生的农场初级处理；将收获从种植中单列，避免机械燃料混计；本数据包为单一报告期，不含跨期储存。 | `usu-seed-poppy` |
| `food_route_condition` | 食用去向批次 | 记录防止蒴果粉尘污染的操作和所需后续清洁，但欧盟食品用途建议不能强加于全部未加工农场门口产品。 | `eu-poppy-2014` |
| `route_delta` | 人工与机械收获 | 母节点为蒴果收获和籽粒分离；不同技术改变能源输入、籽粒损伤和掉落损失的记录字段。一个批次可有分段作业，但同一物料通过量只计一次。 | `eu-poppy-2014`; `usu-seed-poppy` |
| `conditioning_only_if_used` | 通风、干燥、初步清洁 | 每批原籽经本交接节点移交；仅在实际处理时记录前后含水率、能源、剔籽、收集的蒴果粉尘与其他异物；直接移交时这些附加交换为零。 | `eu-poppy-2014` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field` | 种籽罂粟田间种植 | required | All included annual crop cycles | Establish and manage Papaver somniferum for seed, handing mature crop to harvest. | per cultivated hectare and linked crop cycle |
| `harvest` | 蒴果收获与籽粒释放 | required | All represented seed harvests | Independently capture mature capsules and release raw seed; track collected straw, dropped seed and broken capsules as distinct physical outputs. | per cultivated hectare and harvest lot |
| `conditioning` | 农场门口交接及条件性初级处理和稳定化 | required | Every raw-seed lot is handed off; ventilation, drying or preliminary cleaning only when performed | Record pre/post moisture, energy, rejected seed, captured capsule dust, other impurities and moisture loss separately when conditioning occurs; no food processing. | per linked raw-seed lot |

### 过程：种籽罂粟田间种植（`field`）

#### 输入

##### 产品流

###### 播种用罂粟籽（`sowing_seed`）

购入或留种的播种籽进入本作物周期。

- 选定流：Poppy seed for sowing
- 流属性/单位：质量 / kg
- 数量规则：实际播下的质量，不含未播出的库存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`field_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：
- 数量范围：合并养分产品 QA 筛查；实际数量以前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg product/ha
  - 基准：一个作物周期内每公顷分别记录的矿质肥料、有机肥、石灰及含养分改良剂产品质量总和
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 灌溉用水（`irrigation_water`）

仅供应的灌溉水作为前景产品输入；降雨另行披露。

- 选定流：Irrigation water
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合分组：`irrigation-water`
- 数量规则：计量或有记录的灌溉供水量；雨养田为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保产品（`crop_protection`）

记录施用的植保制剂和有效成分，不预设每块田均施药。

- 选定流：Crop protection product
- 流属性/单位：质量 / kg
- 数量规则：实测制剂施用质量；未施用则为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械燃料（`field_fuel`）

统计整地、播种及田间管理的燃料，收获燃料另计。

- 选定流：Mobile machinery fuel
- 流属性/单位：体积 / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：来自设备日志或分摊作业记录的燃料用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：L/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 成熟结籽罂粟植株（`mature_crop`）

从种植交给收获的中间在田生物量，并非参考籽粒。

- 选定流：Mature poppy crop
- 流属性/单位：质量 / kg
- 数量规则：实测或按质量平衡推算的可收获植株生物量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获前田间植株残体（`field_residue`）

收获前留田的叶与茎，与收获阶段掉落的籽粒及破碎蒴果分别记录。

- 选定流：Field vegetation residue
- 流属性/单位：质量 / kg
- 数量规则：估计留田质量，并声明干鲜基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 土壤直接氧化亚氮（`soil_n2o`）

依据有记录的氮投入及方法计算管理土壤直接 N2O；发布交换前解析物种与空气介质匹配的具体流。

- 选定流：Nitrous oxide to air
- 流属性/单位：质量 / kg
- 数量规则：按已声明方法计算的直接 N2O 质量，不使用笼统肥料系数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：按采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-soils`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：蒴果收获与籽粒释放（`harvest`）

#### 输入

##### 产品流

###### 进入收获的成熟植株（`mature_crop_input`）

将种植产出的成熟植株转入独立的蒴果与籽粒收获边界。

- 选定流：Mature poppy crop
- 流属性/单位：质量 / kg
- 数量规则：与田间产出相同的实测中间质量；不重复计上游负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获机械燃料（`harvest_fuel`）

联合收割机或其他收获设备燃料与田间管理燃料分开记录。

- 选定流：Mobile machinery fuel
- 流属性/单位：体积 / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：与收获及籽粒分离作业批次关联的燃料消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_energy`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：L/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获分离用电（`harvest_electricity`）

若农场内使用电动籽粒分离，计量其用电；否则记零。

- 选定流：Electricity supply
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：收获分离阶段计量或按批次分摊的用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_energy`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kWh/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 原籽目标产出（`raw_seed`）

从成熟蒴果中分离的目标籽粒产出，尚未进行可选的农场干燥或清洁。

- 选定流：Raw poppy seed
- 流属性/单位：质量 / kg
- 数量规则：按收获批次称量的实测含水状态籽粒。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：瑞士田间试验籽粒产量示例，非通用限值
  - 范围角色：典型范围（`typical_range`）
  - 下限：200
  - 上限：1700
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`agroscope-poppy-2005`

###### 收集的蒴果与秸秆共产品（`collected_straw`）

仅在单独收集并销售或转移作已声明用途时作为共产品；否则归田间残体或废物。不得把鸦片乳汁计作籽粒。

- 选定流：Collected poppy capsule and straw
- 流属性/单位：质量 / kg
- 数量规则：称量收集的干或鲜生物量并说明含水基准；未收集则为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获掉落籽粒（`dropped_seed`）

蒴果采收或籽粒释放时落入田间的罂粟籽；不含荚壳碎片及清洁剔籽。将留田记录为去向。

- 选定流：Dropped poppy seed
- 流属性/单位：质量 / kg
- 数量规则：根据收获抽样估算或收集称量的落籽质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获遗留的破碎蒴果（`broken_capsule`）

收获时留田且无法回收的蒴果壁物料；不含已收集蒴果秸秆共产品与收获前植株残体。

- 选定流：Broken poppy capsules
- 流属性/单位：质量 / kg
- 数量规则：称量或抽样估算留田荚壳碎片质量，并注明含水基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期每公顷种植面积，并转换为每 kg 净参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_harvest`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

无。

### 过程：农场门口交接及条件性初级处理和稳定化（`conditioning`）

#### 输入

##### 产品流

###### 进入农场门口交接的原籽（`raw_seed_input`）

每批原籽进入农场门口交接；通风、干燥或初步清洁仅在实际发生时记录。

- 选定流：Raw poppy seed
- 流属性/单位：质量 / kg
- 数量规则：关联称量的原籽收获批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥或清洁用电（`conditioning_electricity`）

仅在农场门口移交前实际使用时记录通风、干燥风机或吸风除尘设备用电。

- 选定流：Electricity supply
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：初级处理批次计量用电；节点未启用则为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg conditioned seed output
  - 基准：每 kg 实际初级处理批次的产出籽粒
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥热源燃料（`conditioning_fuel`）

仅在热风干燥实际使用液体燃料时记录该具体燃料；其他供热载体需单独建立具体交换。

- 选定流：Stationary combustion fuel
- 流属性/单位：体积 / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`stationary-combustion-fuel`
- 数量规则：每单位初级处理籽粒的实测液体燃料输入；未使用则为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：L/kg conditioned seed output
  - 基准：每 kg 实际初级处理批次的产出籽粒
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 农场门口未经加工的罂粟籽（`farm_gate_seed`）

参考籽粒在收获后离开农场，仅包含已声明的可选农场初级处理；并非油、可直接食用的精清洁籽粒或认证播种籽。

- 选定流：Poppy seed `c49b37e3-df47-4caf-9a6a-2df1a528800a`
- 流属性/单位：质量 / kg
- 绑定模式：`fixed`
- 数量规则：按已声明含水及杂质状态称量的净移交籽粒。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_lot`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 农场清洁剔除籽粒（`rejected_seed`）

仅在初步清洁时记录：从合格批次剔出的非目标罂粟籽。记录处置或单独转移，不计入参考籽粒。

- 选定流：Rejected poppy seed
- 流属性/单位：质量 / kg
- 数量规则：单独称量的淘汰籽粒质量，不使用混合筛下物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的蒴果壁粉尘（`captured_capsule_dust`）

仅在农场清洁收集蒴果来源粉尘时记录：单独计量收集固废及去向。逸散到空气的排放需另列物种和介质明确的交换。

- 选定流：Captured poppy capsule dust
- 流属性/单位：质量 / kg
- 数量规则：吸风除尘器或过滤器收集粉尘的称量值，或有凭据的固体平衡值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他清除异物（`other_impurities`）

仅在初步清洁去除非籽粒、非蒴果的土粒、石子等异物时记录；物质和处置与剔籽及蒴果粉尘分开。

- 选定流：Foreign material removed from seed
- 流属性/单位：质量 / kg
- 数量规则：按物质类别单独称量的异物固体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥蒸发水分（`drying_water_vapour`）

仅在实际干燥时按干燥前后籽粒质量及含水率计算去除水分。

- 选定流：Water vapour to air
- 流属性/单位：质量 / kg
- 数量规则：初级处理批次去除的水质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个初级处理籽粒批次，并转换为每 kg 净参考籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：按采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定 QA 筛查；实际数量以本地前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg/ha
  - 基准：每作物周期每公顷种植面积
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `single_output_default` | 仅出售籽粒的田块 | 未被收集或未形成独立用途的蒴果、秸秆及残体为留田残体或废物，不人为制造共产品。 | `eu-poppy-2014` |
| `straw_coproduct` | 籽粒加可销售蒴果/秸秆 | 若蒴果或秸秆单独收集并移交，记录两类产品质量、含水率、去向和交接点；先尽量按专属作业归属负荷，共享种植/收获负荷再按一致的干物质量分配并披露选择及敏感性。乳汁不属于籽粒。 | `eu-poppy-2014` |
| `run_linkage` | 批次或联合收获作业 | 每项投入、产出、清洁和换线事件关联唯一作业批次；跨批次共享燃料或电力按记录的作业时间或实测通量分摊一次，不得重复计入。 |  |

## 8. 前景数据采集、计算与质量规则

所有范围都是地区示例或暂定 QA 筛查，不是清单默认数量。范围外数值需要复核但可保留有证据的真实记录；未启用条件节点的投入为零。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | field | 播种籽、N/P/K 制剂、灌溉、植保 | 地块作业台账 | 地块、日期、面积、产品、配方、净量、水表读数 | 发票、施用记录及水表 | kg、m3、ha | 每次施用 | 整个作物周期 | 每田块 | 按物理产品归总，复合肥不重复 | 发票、称量/计量及作业日志 |
| `cp_field_energy` | field | 田间燃料 | 机具日志 | 作业、设备、日期、耗油量、田块 | 油票和机器台账 | L | 每次作业 | 播种至收获前 | 每田块 | 按实际作业量归属 | 油票、工时 |
| `cp_field_emissions` | field | 土壤 N2O | 氮收支计算底稿 | 合成/有机氮、残体氮、土壤/气候参数、所用因子 | 按声明的 IPCC 或等效方法计算 | kg N2O | 每周期 | 整个作物周期 | 每田块 | 保留源项和单位转换 | 方法版本与输入凭据 |
| `cp_crop_harvest` | field/harvest | 成熟植株、原籽、收集的蒴果秸秆、收获前残体、落籽、破碎蒴果 | 收获批次台账 | 面积、批次、原籽重量与含水率、收集秸秆重量、收获前留田残体、落籽抽样质量、留田破碎蒴果质量及各自去向 | 地磅、秤、分别抽样与物料平衡 | kg、ha、% | 每批次 | 收获全期 | 每田块/批次 | 相邻过程的成熟植株只对接一次；落籽与破碎蒴果分别汇总 | 秤单、物质抽样、去向单 |
| `cp_harvest_energy` | harvest | 收获燃料与用电 | 设备批次日志 | 作业批次、燃料、表计用电、设备 | 设备及能源记录 | L、kWh | 每作业批次 | 收获期 | 每设备/批次 | 共享作业按时间或通量只分摊一次 | 油票、电表、工时 |
| `cp_conditioning` | conditioning | 原籽、用电、燃料、剔籽、收集的蒴果粉尘、其他异物和蒸发水 | 农场处理批次台账 | 处理开关、前后质量及含水率、电/燃料表计、单独称量的剔籽/收集粉尘/其他异物及各自处置 | 称量、含水检测、能源表计、分类收集 | kg、%、kWh、L | 每处理批次 | 农场门口前 | 每处理批次 | 分物质平衡并对接原籽批次；逸散粉尘另行解析排放交换 | 分类称重、检验、能源凭证与去向单 |
| `cp_gate_lot` | conditioning | 净参考籽粒 | 移交批次凭证 | 净重、含水率、杂质、主要去向、移交时间 | 地磅或校验秤及批次检验 | kg、% | 每交付批次 | 农场门口移交 | 每交付批次 | 合计净质量作参考分母 | 秤单、批次号、检测单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `per_kg_gate` | 田间、收获及初级处理各交换 | 已归属本周期的交换总量 / 同周期净交付籽粒 kg；中间流对接，不另加上游负荷。 | 交换量、净交付质量、批次连接 | 每 kg 参考籽粒交换 |  |
| `drying_loss` | 条件性干燥 | 前后净质量及湿基含水率得出蒸发水；校核干物质量和剔籽、蒴果粉尘、其他异物各自的固体去除量。 | 干燥前后质量、含水率及三类分开记录的固体去除量 | kg 蒸发水与平衡差 |  |
| `soil_n2o_method` | 管理土壤 | 使用已声明的 IPCC 区域/层级因子及全部适用氮源计算 N2O，注明直接与间接边界。 | 氮投入、残体氮、方法因子 | kg N2O | `ipcc-2019-soils` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `lot_identity` | 全部批次 | 原籽、处理与净移交批次可追溯；用途、含水率、杂质状态完整。 | 批次号、秤单及检测单 |
| `mass_closure` | 收获及处理 | 植株、原籽、收集秸秆、收获前残体、落籽、破碎蒴果、剔籽、收集蒴果粉尘、其他异物与失水量在各自含水基准上逐项核对；同一物质不得跨节点重复计量。 | 分物质物料平衡表 |
| `conditional_zero` | 未启用初级处理 | 不生成干燥、清洁或稳定化能源与废物交换。 | 作业记录及移交单 |
| `source_limit` | 食品去向 | 欧盟建议仅用于有该市场用途的条件性质量管理，不据此剔除其他合法未加工籽粒。 | 用途声明与合规记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_identity` | 参考流 | UUID、Mass、kg、农场门口及未经加工状态须一致；油、蒴果、秸秆及认证播种籽不得替代。 |  |
| `route_and_runs` | 收获技术与批次 | 明确人工/机械或混合作业的时间与通量；燃料、籽粒损失和换线记录只能归属一次。 | `eu-poppy-2014`; `usu-seed-poppy` |
| `coproduct_decision` | 蒴果/秸秆 | 有独立交接才作共产品，并披露实际分配基础；否则归残体/废物。 | `eu-poppy-2014` |
| `range_review` | 全部流卡 | 核对范围、单位、分母、证据与条件开关；超出暂定范围需调查但不自动改写真实数据。 |  |
| `moisture_and_contamination` | 食用去向及干燥 | 记录实际批次含水和蒴果粉尘风险；食品指南数值不是本通用参考流的通用合格线。 | `eu-poppy-2014` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门口未加工罂粟籽前景数据包 |
| downstream_use | 可用作 `secondary_dataset` 或 `background_dataset` 构建过程及生命周期模型 |
| allowed_use | 有相同籽粒状态、门口边界和披露字段的种植、食用及油用上游建模 |
| excluded_use | 罂粟籽油、精制食品配料、药用提取及认证播种籽的替代数据 |
| required_metadata | 地区、季节、田块、品种/用途、收获技术、批次、净重、含水率、杂质、初级处理和秸秆去向 |
| required_quality_disclosure | 质量平衡、作业及能源记录覆盖、条件处理开关、排放方法、共产品分配及不确定性 |
| update_trigger | 生产路线、农场门口产品状态、用途、收获技术或数据年度发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-poppy-2014` | `official_guidance` | European Commission Recommendation 2014/662/EU, https://eur-lex.europa.eu/eli/reco/2014/662/oj/eng | Food-route harvest and cleaning risks; conditional quality and contamination disclosure, not universal farm-gate thresholds. |
| `usu-seed-poppy` | `extension_guidance` | Utah State University, Seed Poppy in the Garden, https://extension.usu.edu/yardandgarden/research/seed-poppy-in-the-garden | Annual crop, mature capsule harvest, and separation route. |
| `agroscope-poppy-2005` | `literature` | Frick and Hebeisen, Poppy, an alternative plant, Agroscope, 2005, https://www.agrarforschungschweiz.ch/en/2005/01/poppy-an-alternative-plant/ | Regional field-trial seed-yield example of 2–17 dt/ha (200–1700 kg/ha). |
| `ipcc-2019-soils` | `method_factor` | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil N2O method and input completeness. |
