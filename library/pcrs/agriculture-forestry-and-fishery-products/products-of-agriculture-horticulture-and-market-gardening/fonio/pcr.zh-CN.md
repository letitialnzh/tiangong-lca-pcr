---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fonio
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 福尼奥籽粒

## 1. 范围与适用性

本 PCR 覆盖在农场交付的栽培白福尼奥（*Digitaria exilis*）和黑福尼奥（*Digitaria iburua*）干燥、脱粒但保留颖壳的籽粒。范围包括种植周期、收获、田间干燥、脱粒、风选，以及交接前可选的干法清选或干燥。数据集必须识别物种、当地品种或地方品系、生产地理、作物年度、籽粒水分，以及是否包括初级收获后处理。

范围排除制种、野生采集、饲草或干草、放牧、覆盖作物服务、脱壳或去颖壳、脱壳后的清洗或去砂、碾磨、面粉、预熟或蒸煮福尼奥、酿造、包装、声明交接点之后的储存和农场交接后的运输。湿洗和去砂属于下游加工，因为它们用于食用前的去壳福尼奥制备；不得加入本农业籽粒 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.fonio |
| classification_refs | CPC 3.0: 01193 Fonio |
| covered_products | 在农场交接的栽培白或黑福尼奥籽粒，已收获并脱粒且保留颖壳 |
| excluded_products | 福尼奥种子；野生采集籽粒；饲草、干草、青贮、放牧或覆盖作物服务；脱壳、清洗、去砂、碾磨、预熟、蒸煮或酿造福尼奥 |
| representative_product | 保留颖壳的干燥脱粒福尼奥籽粒 |
| production_route | 雨养或灌溉的小农或商业化栽培、收获，以及有条件的农场端初级收获后处理 |
| market_state | 农场交接的干燥脱粒带壳籽粒，声明水分、异物和预定用途 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场交接的干燥脱粒带壳福尼奥籽粒 |
| How much | 1,000 kg 按接收状态计的籽粒 |
| How well | 可销售的收获籽粒，声明物种、水分、异物基准和预定用途；不包括脱壳 |
| How long or cycle | 从播种到农场交接的一个声明年度种植周期 |
| reference_flow_link | 不含初级收获后处理时使用 `fonio_field_production` 的末端籽粒输出，否则使用 `fonio_primary_postharvest` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Fonio, production mix, at farm gate, harvested grain, unprocessed `0cd0dc39-a4ec-4caf-addb-1ec276c2f286` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 白或黑福尼奥物种；品种或地方品系；生产地理；作物年度；收获和干燥日期；交接时水分；异物基准；预定用途；是否包括初级收获后处理 |
| 绑定模式 | `fixed` |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 参考福尼奥籽粒 | Mass | kg | 报告按接收状态的籽粒质量、实测水分和任何干物质换算所使用的基准。 |
| `species_and_state_identity` | 参考产品 | product identity | categorical | 识别白或黑福尼奥并保留颖壳状态；不得用通用小米或脱壳福尼奥流替代。 |
| `area_to_reference_conversion` | 按面积计的田间流 | activity-specific property | activity-specific unit | 在缩放到 1,000 kg 籽粒前，使用同一地块和作物年度的可销售籽粒产量，将每公顷作物周期总量换算。 |
| `nutrient_basis` | 养分施用 | nutrient mass | kg N, kg P2O5, or kg K2O | 分别保留配方产品质量、养分含量和报告基准。 |
| `moisture_basis_consistency` | 籽粒和残余物质量 | Mass | kg | 每个平衡使用一个声明的湿基或干基；仅用实测水分换算并保留原始湿质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 福尼奥种植周期开始时的整地田块，种子以及购买或保留的管理投入从此处跨越前景边界 |
| starting_condition_role | 受管理的福尼奥籽粒生产起点 |
| product_classification_scope | 对应 CPC 3.0 code 01193 的栽培白或黑福尼奥籽粒 |
| recursive_input_rule | 播种用种子是独立的上游种子供应投入；不得将收获籽粒参考流循环回同一生产过程 |
| upstream_dataset_requirement | 当负担位于前景经营者之外时，为种子、养分产品、农药配方、燃料、电力、灌溉供水和承包田间服务提供兼容的上游数据集 |
| disclosure | 物种、品种或地方品系、地理、田块面积、播种和收获日期、前茬、建植方式、耕作、养分和灌溉实践、产量、水分、残余物去向以及初级收获后处理 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle_to_farm_gate` | 所有符合要求的数据集 | 纳入整地、播种、作物管理、收获、田间干燥、脱粒，以及交接前发生的农场端初级干法清选或干燥。 | `fao-millets-fonio`; `cirad-fonio-production-postharvest` |
| `boundary_primary_vs_food_processing` | 收获后作业 | 排除脱壳、去颖壳、清洗、去砂、碾磨、预熟、蒸煮、酿造和其他食物制备，并将其声明为下游作业。 | `cirad-fonio-production-postharvest`; `fao-fonio-postharvest` |
| `boundary_direct_field_emissions` | 受管理土壤和田间排放 | 使用地理适用的方法和同一套养分、残余物、土壤及气候活动数据，纳入直接和间接含氮排放。 | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `boundary_residue_fate` | 茎叶、谷壳、杂质和其他残余物 | 区分留田或还田、焚烧、作为有用饲料移出和作为废物移出，防止残余物氮与外运生物质重复计算。 | `ipcc-2019-managed-soils` |
| `boundary_post_gate_exclusion` | 下游活动 | 排除农场外运输、商业储存、包装、脱壳、清洗、碾磨、食品制造和消费，除非研究范围明确延伸到本 PCR 之外。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fonio_field_production` | 福尼奥田间生产与收获 | required | always | 受管理的生物生产与收获 | 一个作物周期的种植面积和可销售籽粒质量 |
| `fonio_primary_postharvest` | 农场端福尼奥初级收获后处理 | conditional | 脱粒、风选、干法清选或强制通风干燥与田间记录分开，且发生在交接前 | 将收获籽粒与声明交接状态的干燥脱粒带壳籽粒进行平衡 | 进料籽粒与合格籽粒质量 |

### 过程：福尼奥田间生产与收获（`fonio_field_production`）

#### 输入

##### 产品流

###### 播种用福尼奥种子（`fonio_seed_input`）

记录跨入作物周期的购买种子或保留种子。识别白或黑福尼奥及当地种子批次；不得用收获籽粒参考流替代播种种子。

- 选定流：Fonio seed for sowing
- 流属性/单位：Mass / kg
- 数量规则：按田块和播种事件记录实测播种种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并用同周期可销售籽粒产量换算
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：`fao-cultivating-fonio`
- 数量范围：暂定福尼奥播种量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：30
  - 单位：kg seed/ha
  - 基准：一个作物周期；保留实际播种量和建植方式，包括撒播或条播
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`fonio_field_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算为 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 来源：
- 数量范围：暂定氮投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg N/ha
  - 基准：一个作物周期；以土壤检测、养分计划和区域证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定磷投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：60
  - 单位：kg P2O5/ha
  - 基准：一个作物周期；以土壤检测、养分计划和区域证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定钾投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg K2O/ha
  - 基准：一个作物周期；以土壤检测、养分计划和区域证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定有机改良物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6000
  - 单位：kg dry matter/ha
  - 基准：一个作物周期；无改良物跨界时报告为零
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`fonio_irrigation_water_input`）

将田间灌溉与降雨分开记录，包括前景边界内的抽水或购水活动。

- 选定流：Irrigation water supply
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：水表计量或经验证的泵流量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算为 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定灌溉筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：m3/ha
  - 基准：一个作物周期，包括零灌溉的雨养生产
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械使用的柴油（`fonio_field_diesel_input`）

记录自有或受控机械消耗的柴油。当承包服务单独建模时，将承包商燃料归入上游服务数据集。

- 选定流：Diesel fuel for agricultural machinery
- 流属性/单位：Volume / L
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：按福尼奥田间作业分摊的实测或发票柴油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算为 1,000 kg 籽粒
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定田间柴油筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：L/ha
  - 基准：一个作物周期；由上游服务或非柴油设备表示的作业为零
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 施用的农药配方（`fonio_crop_protection_input`）

每种实际除草剂、杀菌剂、杀虫剂或其他配方建立一条交换，并保留有效成分、浓度和施用事件。

- 选定流：Crop-protection formulation by physical product identity
- 流属性/单位：Mass / kg formulation
- 数量规则：按产品和施用事件记录实测配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每公顷种植面积，并换算为 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定单一配方筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg formulation/ha
  - 基准：一个作物周期内单独识别的每种配方
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 福尼奥种植的土地占用（`fonio_land_occupation`）

将福尼奥作物周期的种植面积和占用时间作为基本资源干预记录；仅在有文件证明的土地利用变化时纳入土地转化。

- 选定流：Land occupation, arable crop, annual
- 流属性/单位：Area-time / m2·year
- 数量规则：种植面积乘以声明作物周期的占用时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算为 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_activity_records`
- 数量范围：暂定土地占用筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：2
  - 单位：m2·year per m2 cultivated
  - 基准：年度作物占用；有条件时用田间日期替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 农场交接的收获福尼奥籽粒（`fonio_grain_field_output`）

记录田间生产的末端干燥脱粒带壳籽粒。当初级收获后处理单独建模时，这是转入该过程的实测中间流。

- 选定流：Fonio, production mix, at farm gate, harvested grain, unprocessed `0cd0dc39-a4ec-4caf-addb-1ec276c2f286`
- 绑定模式：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按声明水分和异物基准记录实测可销售籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积；末端输出缩放为 1,000 kg 参考籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 数量范围：福尼奥籽粒产量筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：150
  - 上限：800
  - 单位：kg grain/ha
  - 基准：报告的宽泛福尼奥产量背景；保留当地实测产量和水分
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-ecocrop-fonio`

###### 作为有用产品移出的福尼奥秸秆（`fonio_removed_straw_output`）

仅当茎叶被有意收集并转移为有用饲料或材料共产品时记录。留田或还田残余物不属于此输出。

- 选定流：Fonio straw removed at field edge
- 流属性/单位：Mass / kg dry matter
- 数量规则：按去向和水分基准记录实测移出秸秆质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算为 1,000 kg 籽粒
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 数量范围：暂定移出秸秆筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg dry matter/ha
  - 基准：一个作物周期；残余物留田或还田时为零
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 释放到环境空气的一氧化二氮（`fonio_field_n2o_air_output`）

根据收集的矿质和有机氮、残余物去向及适用的 IPCC 层级或审查过的区域方法计算土壤一氧化二氮。

- 选定流：Nitrous oxide emission to ambient air
- 流属性/单位：Mass / kg N2O
- 数量规则：根据收集的氮活动数据和声明排放因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算为 1,000 kg 籽粒
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-managed-soils`

###### 释放到环境空气的氨（`fonio_field_ammonia_air_output`）

根据养分产品、施用方式、时间和地理适用因子计算氨挥发。

- 选定流：Ammonia emission to ambient air
- 流属性/单位：Mass / kg NH3
- 数量规则：根据氮施用记录和适用因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算为 1,000 kg 籽粒
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`emep-eea-2023-guidebook`

###### 释放到水体的硝酸盐（`fonio_field_nitrate_water_output`）

仅当有地理适用模型、监测平衡或审查过的清单方法支持时，记录硝酸盐淋失或径流。

- 选定流：Nitrate emission to water
- 流属性/单位：Mass / kg nitrate
- 数量规则：根据氮投入、作物和土壤条件、排水或径流及选定方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积，并换算为 1,000 kg 籽粒
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_activity`
- 来源：`ipcc-2019-managed-soils`

### 过程：农场端福尼奥初级收获后处理（`fonio_primary_postharvest`）

#### 输入

##### 产品流

###### 进入初级处理的脱粒福尼奥籽粒（`fonio_primary_grain_input`）

记录从田间生产转入单独脱粒、风选、干法清选或强制通风干燥的籽粒批次，且这些作业发生在农场交接前。

- 选定流：Fonio, production mix, at farm gate, harvested grain, unprocessed `0cd0dc39-a4ec-4caf-addb-1ec276c2f286`
- 绑定模式：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按匹配批次记录实测进料籽粒质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个处理批次，并换算为 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_postharvest_records`

###### 初级处理供应的电力（`fonio_postharvest_electricity_input`）

记录交接前纳入的机械脱粒、风机、输送机、干法清选机或强制通风干燥机所用电力。

- 选定流：Electricity supply for fonio primary post-harvest preparation
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：电表计量，或设备功率乘以经验证的运行时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_postharvest_records`
- 数量范围：暂定初级处理电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：60
  - 单位：kWh/1,000 kg accepted grain
  - 基准：完全人工或日晒处理时为零；保留设备和运行时间记录
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 籽粒干燥供应的热能（`fonio_postharvest_heat_input`）

记录交接前强制通风或其他主动干燥使用的供热或燃料能量；日晒作业记录为零购买热能。

- 选定流：Process heat for fonio grain drying
- 流属性/单位：Energy / MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`purchased-process-heat`
- 数量规则：将实测燃料或热量换算为输送能量，同时保留载能体身份
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_postharvest_records`
- 数量范围：暂定干燥能耗筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：MJ/1,000 kg accepted grain
  - 基准：无主动干燥时为零；设备和水分记录完善前使用宽泛候选范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交接的干燥脱粒福尼奥籽粒（`fonio_primary_grain_output`）

记录经过纳入的脱粒、风选、干法清选或干燥后，在声明农场交接水分和异物基准下的合格籽粒。脱壳不属于本过程。

- 选定流：Fonio, production mix, at farm gate, harvested grain, unprocessed `0cd0dc39-a4ec-4caf-addb-1ec276c2f286`
- 绑定模式：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按声明水分和异物基准记录实测合格籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：末端输出缩放到 1,000 kg 参考籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_postharvest_records`
- 数量范围：暂定合格籽粒水分筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：8
  - 上限：14
  - 单位：percent moisture, wet basis
  - 基准：声明市场和储存状态；如有差异使用买方规格
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 谷壳、异物和非有用籽粒废弃物（`fonio_primary_reject_waste`）

按物质类别和去向记录谷壳、石块、土壤、杂草材料、受损籽粒和其他废弃物。交付为饲料或其他用途的有用籽粒组分应作为单独产品共产品。

- 选定流：Fonio primary-preparation rejects and foreign matter
- 流属性/单位：Mass / kg
- 数量规则：按物质类别和去向记录实测废弃物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_postharvest_records`
- 数量范围：暂定初级处理废弃物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kg/1,000 kg incoming grain
  - 基准：处理批次；区分有用共产品与处置废物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级处理期间的籽粒损失（`fonio_primary_grain_loss`）

将无法解释或不可避免的籽粒损失与可识别异物和废弃物分开记录；在将损失分配到处置或残余物路径前先调查损失。

- 选定流：Fonio grain loss during primary post-harvest preparation
- 流属性/单位：Mass / kg
- 数量规则：进料籽粒减去合格籽粒、有用共产品、已识别废弃物及实测水分或过程损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_primary_postharvest_records`
- 数量范围：暂定籽粒损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg/1,000 kg incoming grain
  - 基准：匹配批次平衡；说明超过筛选范围的数值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 田间生产和初级处理 | 优先将田间生产、收获和初级处理分开记录，并在分配前分别计量籽粒、有用秸秆、有用筛下物和处置废物。 | `iso-14044-2006` |
| `allocation_field_residue` | 留田、还田或焚烧的残余物 | 不将留田残余物视为共产品；将其管理及相关排放纳入田间生产，并防止与移出秸秆重复计算。 | `ipcc-2019-managed-soils` |
| `allocation_removed_straw` | 有用移出秸秆或饲料 | 若无法通过分过程解决共用田间负荷，则用同期农场交接价值进行经济分配，披露水分基准，并将质量分配作为敏感性分析。 | `iso-14044-2006` |
| `allocation_primary_outputs` | 有用筛下物和籽粒组分 | 将有意销售且具有正价值的组分作为共产品，其他废弃物作为废物；无法分开时仅在初级处理交接点分配其负荷。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `fonio_field_production` | seed, nutrients, irrigation, fuel, crop protection, land | field log, input invoice, application record, meter, or contractor record | field_id; species; cultivar; area; input_product; amount; nutrient_content; date; operation; contractor_scope; sowing_date; harvest_date | 将物理投入和作业与每个田块及作物周期核对 | kg; kg nutrient; L; m3; ha; m2·year | each event | complete crop cycle | all represented fields | 按物理身份汇总；计算养分时不合并产品；用同周期面积和产量归一化 | 发票；产品标签；校准计量器；田间记录 |
| `cp_harvest_output_records` | `fonio_field_production` | grain, straw, residue fate | scale, yield estimate, moisture test, bale record, or destination record | field_id; harvest_date; grain_mass; grain_moisture; foreign_matter; straw_mass; straw_moisture; residue_fate; destination | 将收获和移出质量与田块面积及作物周期核对 | kg; percent; ha | each harvest or field lot | complete crop cycle | all represented fields | 分别汇总合格籽粒和每个残余物去向 | 地秤或产量监测检查；水分记录；去向证据 |
| `cp_field_emission_activity` | `fonio_field_production` | emissions to air and water | nutrient, soil, weather, residue, and emission-model records | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set; model_version | 使用一个声明的地理适用方法计算每项排放 | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented fields | 按田块计算、按面积加权，再用同周期产量归一化 | 来源记录；因子出处；模型文件；养分平衡审查 |
| `cp_primary_postharvest_records` | `fonio_primary_postharvest` | incoming grain, energy, accepted grain, rejects, losses | batch ticket, scale, moisture test, electricity meter, fuel record, and destination record | batch_id; incoming_mass; incoming_moisture; operation; electricity; heat; accepted_mass; accepted_moisture; rejects; loss; destination | 将匹配批次和计量器与合格输出核对；将脱壳和清洗排除在此协议外 | kg; percent; kWh; MJ | each batch or meter period | all included pre-gate preparation | all included equipment and batches | 汇总匹配批次；按时间或处理质量分摊共用计量；闭合湿质量平衡 | 校准秤和水分仪；计量核对；去向记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field flows | crop-cycle amount per hectare / marketable grain yield per hectare × 1,000 kg | flow amount; area; same-cycle grain mass | amount per 1,000 kg grain |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | product mass × declared nutrient fraction; preserve product identity and nutrient reporting basis | product identity; mass; assay; reporting basis | kg N, kg P2O5, kg K2O by source |  |
| `calc_managed_soil_n2o` | soil N2O | apply selected IPCC tier or regional method to mineral N, organic N, returned-residue N, volatilization, and leaching pathways | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | calculate by nutrient product, application method, timing, and applicable factor | nutrient records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_primary_postharvest_mass_balance` | primary preparation | incoming wet grain = accepted grain + useful fractions + rejects + moisture and other measured losses within uncertainty | incoming and output masses; moisture; loss records | reconciled outputs per accepted grain | `mass-balance-identity` |
| `calc_energy_carrier_conversion` | post-harvest energy | convert measured fuel or heat carrier to delivered energy using the declared carrier property and retain the original carrier record | fuel or heat amount; carrier property; equipment record | kWh or MJ delivered |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 确认是白或黑福尼奥而非小米、高粱、藜麦或脱壳福尼奥；保留物种、品种或地方品系、预定用途、颖壳状态和交接信息。 | 作物、批次和销售记录 |
| `dq_temporal_alignment` | all foreground rows | 投入、收获、产量、排放和初级处理记录应来自同一作物周期；披露代理年度或借用的活动数据。 | 有日期的田间和批次记录 |
| `dq_mass_and_moisture` | grain, straw, and batch outputs | 为每次湿基或干基换算保留秤具检查和水分测量，并核对原始质量基准。 | 校准和水分检测记录 |
| `dq_completeness` | process map and flows | 核对每个代表性田块和初级处理批次，并区分零、不适用、代理和缺失值。 | 田块清单；批次核对 |
| `dq_boundary_processing` | post-harvest route | 证明脱壳、清洗、去砂、碾磨和食品加工被排除，或由单独下游数据集表示。 | 作业日志；过程图；设施记录 |
| `dq_identity_resolution` | parameterized and unmapped flows | 在最终 TIDAS 过程发布前，将每个 Flow Set 引用和未映射物理交换解析为已验证 UUID。 | 身份审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 末端输出 | 缩放后恰有一个末端福尼奥籽粒输出等于 1,000 kg，使用已验证的参考身份，并声明物种、颖壳状态、水分和异物限定信息。 |  |
| `validation_process_route` | 过程图 | 田间生产仅纳入一次；初级收获后处理仅在农场交接前发生且未嵌入田间记录时纳入；排除脱壳和清洗。 | `cirad-fonio-production-postharvest` |
| `validation_crop_cycle_reconciliation` | 田间清单 | 面积、投入、收获输出、残余物去向和排放应对应相同田块和作物周期。 |  |
| `validation_nitrogen_balance` | 氮清单 | 按披露的方法和因子核对矿质和有机养分、还田及移出残余物氮和排放路径。 | `ipcc-2019-managed-soils` |
| `validation_primary_postharvest_balance` | 初级处理 | 在声明不确定度内核对进料籽粒、合格籽粒、有用组分、废弃物、水分损失和未解释损失。 | `mass-balance-identity` |
| `validation_flow_identity` | 每个流 | 仅将精确验证的 UUID 接受为 `fixed`，将适用的现有 Flow Set 接受为 `parameterized`；否则保留未映射覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 福尼奥籽粒前景生产数据集 |
| downstream_use | `secondary_dataset`；审查和发布后可作为 `background_dataset` |
| allowed_use | 白或黑福尼奥籽粒农场交接 LCA，以及保持物种、地理、水分、残余物、分配和初级处理背景的下游系统 |
| excluded_use | 播种种子、野生采集、饲草或青贮、脱壳或清洗福尼奥、面粉、预熟或蒸煮产品、酿造，或未经过审查代理决策的其他谷物 |
| required_metadata | 物种；品种或地方品系；地理；作物年度；面积；播种和收获日期；产量；水分；异物；预定用途；耕作；养分；灌溉；残余物去向；初级收获后边界；分配；身份解析 |
| required_quality_disclosure | 前景覆盖；代理投入；缺失记录；范围超限；排放方法；水分基准；计量器和质量平衡核对；下游处理排除项 |
| update_trigger | 新的福尼奥农艺或收获后证据、实质性路线变化、修订的排放方法、Flow Set 或 UUID 身份变化，或代表性数据超出 QA 范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-millets-fonio` | official_guidance | FAO, Millets: West African fonio and related millets, https://www.fao.org/fileadmin/templates/esw/esw_new/documents/Links/publications_other/6_millets.pdf | 作物周期、抗旱适应、栽培背景和收获后劳动差异 |
| `fao-ecocrop-fonio` | official_guidance | FAO Ecocrop, Digitaria exilis crop data sheet, https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=5329 | 成熟期、收获季节和福尼奥宽泛产量背景 |
| `fao-cultivating-fonio` | official_guidance | FAO, Cultivating fonio, cultivating traditions, https://www.fao.org/newsroom/story/cultivating-fonio-cultivating-traditions/ | 播种实践、条播、增产背景和储存培训 |
| `cirad-fonio-production-postharvest` | handbook | CIRAD, Le fonio, une céréale africaine, https://publications.cirad.fr/une_notice.php?dk=560957 | 生产系统、收获、干燥、脱粒、风选和加工边界 |
| `fao-fonio-postharvest` | handbook | AGRIS/CIRAD, Improvement of fonio post-harvest technology, https://agris.fao.org/search/en/providers/122653/records/64745b8c96fdec8b71b6ffc0 | 脱壳、清洗、去砂和机械化收获后处理区分 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 受管理土壤 N2O、残余物氮、挥发和淋失路径 |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023 | 农业氨方法和 QA 背景 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级和披露 |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched fonio primary-preparation batches | 批次核对和校验 |
