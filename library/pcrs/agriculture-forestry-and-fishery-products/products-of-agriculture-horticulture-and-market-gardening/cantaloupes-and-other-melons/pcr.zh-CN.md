---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cantaloupes-and-other-melons
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 甜瓜及其他瓜类

## 1. 范围与适用性

本 PCR 覆盖从田地或保护地准备、播种或定植，到种植管理、采收、分级、可选农场内调理和农场大门交付的新鲜完整未加工甜瓜商业生产。覆盖网纹甜瓜、哈密瓜、蜜瓜、Galia、香瓜、冬甜瓜及其他非西瓜类瓜果，前提是声明品种和市场状态。覆盖雨养和灌溉的一年生播种或定植生产。西瓜、作为种植材料销售的甜瓜种子或幼苗、切开或加工甜瓜、果汁、干燥、农场大门后的冷藏、配送、零售和消费均不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cantaloupes-and-other-melons |
| classification_refs | CPC 3.0: 01229 Cantaloupes and other melons |
| covered_products | 为农场大门销售生产的新鲜、完整、未加工甜瓜及其他非西瓜类瓜果 |
| excluded_products | 西瓜；作为种植材料销售的甜瓜种子或幼苗；切开、榨汁、腌制、冷冻、干燥或其他转化的甜瓜；农场大门后的物流 |
| representative_product | 按声明市场状态采收和分级的可销售完整甜瓜或其他非西瓜类瓜果 |
| production_route | 一年生播种或定植甜瓜种植、露地或保护地管理、采收、分级和有条件的农场大门准备 |
| market_state | 农场大门的新鲜完整产品，声明品种、成熟度、大小、缺陷和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场大门的可销售新鲜完整甜瓜或其他非西瓜类瓜果 |
| How much | 1,000 kg 按接收状态计的可销售甜瓜 |
| How well | 符合声明品种、成熟度、大小、外观、缺陷和可销售等级标准的完整、新鲜、未加工果实 |
| How long or cycle | 从播种或定植到最终采收的一个声明一年生产周期，并报告生产年份和采收窗口 |
| reference_flow_link | `marketable_melon_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Fresh cantaloupes and other melons, production mix, at farm gate, whole and unprocessed `c9fe8928-9555-4990-81f6-f77d866ff054` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 瓜类和品种；生产地理位置；生产年份和作物周期；播种或定植路线；灌溉或雨养制度；成熟度和采收窗口；大小和等级标准；完整或受损状态；已清洗或未清洗；包装状态；农场大门交付 |
| Binding | `fixed` |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收和农场大门甜瓜 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化为参考流前，分别记录总采收果实、可销售果实、淘汰果实和田间残余物质量。 |
| `area_and_cycle_normalization` | 露地和保护地记录 | Area and mass | ha and kg | 分别记录每个地块或生产单元及作物周期，再将投入和产出归一化为可销售农场大门甜瓜。 |
| `nutrient_basis` | 肥料和改良剂投入 | Nutrient mass | kg N, kg P2O5, or kg K2O | 只能依据有记录的养分浓度换算产品数量，并保留养分或氧化物当量基准。 |
| `irrigation_volume` | 灌溉水 | Volume | m3 | 按生产单元和作物周期记录计量或有文件依据的灌溉供水；降雨与灌溉取水分开。 |
| `planting_material_basis` | 种子和幼苗投入 | Number or mass | seed units, plants, or kg | 记录供应商声明的种子或幼苗数量和类型；没有有据可查的换算时，不得从数量推断种子质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备好、接收甜瓜种子或幼苗的农业地块或保护地生产单元，并披露前期土地利用和播种前作业 |
| starting_condition_role | 声明的一年生甜瓜作物周期起点 |
| product_classification_scope | CPC 3.0:01229 下的新鲜完整甜瓜及其他非西瓜类瓜果，至农场大门交付 |
| recursive_input_rule | 购入甜瓜种子或幼苗是独立的上游产品投入，只链接一次，不在本 PCR 内重新创建甜瓜生产过程。 |
| upstream_dataset_requirement | 在使用时要求种子或幼苗、肥料、改良剂、作物保护产品、灌溉水、能源、田间机械服务和包装的兼容上游数据集。 |
| disclosure | 声明瓜类和品种、地理位置、前期土地利用、作物日期、生产系统、灌溉制度、养分基准、作物保护计划、排放方法、残余物去向、采收分级、清洗和包装。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_annual_melon_cycle` | 露地或保护地生产至最终采收 | 纳入田地或保护地准备、播种或定植、作物管理和声明一年作物周期的全部采收；根据生产记录将共享作业分配给所报告的甜瓜。 | `fao-crop-production-framework`; `fao-good-agricultural-practices` |
| `boundary_farm_gate` | 采收和准备 | 可销售完整甜瓜在农场大门转移时结束前景边界；仅在转移前发生时纳入农场内分级、受损果实修整、清洗、冷却和初级包装。 | `fao-fruit-and-vegetable-postharvest` |
| `boundary_managed_soils` | 养分、改良剂和残余物流 | 按一种声明的计算方法纳入施用养分和还田残余物产生的直接和间接管理土壤排放，不重复计算上游数据集已表示的排放。 | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | 淘汰果实和作物残余物 | 为每个残余物流记录还田、堆肥、饲料、处理、处置或其他去向；未报告去向属于数据质量缺口，不能自动作为副产品。 | `fao-crop-residue-management`; `fao-fruit-and-vegetable-postharvest` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `melon_field_establishment` | 甜瓜田地或保护地建立 | required | 每个声明作物周期一次 | 前景建立和播种或定植 | 生产单元面积及种子或幼苗数量 |
| `melon_crop_management` | 甜瓜作物管理 | required | 整个声明作物周期 | 前景管理型生物生产 | 生产单元周期和作物投入记录 |
| `melon_harvest_and_farm_gate` | 甜瓜采收、分级和农场大门交付 | required | 每次采收和最终交付 | 前景采收、分级和产品交接 | 1,000 kg 可销售完整甜瓜 |
| `on_farm_melon_conditioning` | 农场内甜瓜调理和初级包装 | conditional | 清洗、冷却或初级包装在农场大门转移前发生，且未包含在采收记录中 | 将产品准备至声明市场状态 | 进料、合格品和淘汰品质量 |

### 过程：甜瓜田地或保护地建立（`melon_field_establishment`）

#### 输入

##### 产品流

###### 甜瓜种子或幼苗（`melon_planting_material_input`）

甜瓜种子或幼苗作为声明一年作物周期的种植材料进入生产单元。应记录购入材料，并与形成的果实产出分开。

- 选定流：Melon seed or transplants
- 流属性/单位：Number of items or mass / seed units, plants, or kg
- 数量规则：按生产单元和作物周期记录供应商数量及种植材料类型。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积和每 1,000 kg 可销售农场大门甜瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_establishment_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：暂定种植材料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：8
  - 单位：kg seed or 1000 transplants/ha
  - 基准：等待供应商和生产记录期间的一年生甜瓜首轮宽泛种植率
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建立燃料或机械服务（`melon_establishment_energy`）

当整地、起垄、覆盖物或行罩安装以及播种或定植使用的柴油、电力或外购机械服务跨越前景边界时予以记录。

- 选定流：Field establishment fuel or machinery service
- 流属性/单位：Mass, energy, or service / kg, kWh, or hectare-service
- 数量规则：按生产单元和作物周期使用燃料票据、机械日志、计量记录或供应商服务记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积和每 1,000 kg 可销售农场大门甜瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_field_operation_records`
- 来源：`fao-crop-production-framework`

##### 废物流

##### 基本流

###### 占用的农业土壤（`melon_field_occupation`）

当把土地占用表示为基本流输入时，记录声明作物周期的露地或保护地面积和占用时间。

- 选定流：Agricultural land occupation
- 流属性/单位：Area-time / m2*a
- 数量规则：生产单元面积乘以声明的作物周期占用时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门甜瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_field_operation_records`

#### 输出

##### 产品流

###### 已完成的甜瓜生产单元（`melon_established_unit_output`）

该内部交接记录进入甜瓜管理的合格种植面积，不是参考产品。

- 选定流：Established melon production unit
- 流属性/单位：Area / ha
- 数量规则：播种或定植完成并扣除有记录失败后的合格面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每次建立作业
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_establishment_records`

##### 废物流

##### 基本流

### 过程：甜瓜作物管理（`melon_crop_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`melon_crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷生产单元并换算为每 1,000 kg 可销售农场大门甜瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_fertilizer_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：暂定氮施用筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg N/ha
  - 基准：一个一年生甜瓜作物周期，等待土壤测试和肥料记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定磷施用筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg P2O5/ha
  - 基准：一个一年生甜瓜作物周期，等待土壤测试和肥料记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定钾施用筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：kg K2O/ha
  - 基准：一个一年生甜瓜作物周期，等待土壤测试和肥料记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`melon_irrigation_input`）

只在水被送入甜瓜生产单元时记录灌溉。雨养生产在有田间证据时记录零灌溉。

- 选定流：Irrigation water supply
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按生产单元和作物周期计量或计算灌溉量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷生产单元并换算为每 1,000 kg 可销售农场大门甜瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_irrigation_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4,000
  - 单位：m3/ha
  - 基准：一个一年生甜瓜作物周期，等待当地水量平衡证据
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 移动机械燃料（`melon_field_fuel_input`）

记录田地准备、作物管理和采收机械消耗的、跨越前景边界的燃料。

- 选定流：Mobile agricultural machinery fuel
- 流属性/单位：Volume, mass, or energy / L, kg, or MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：依据油罐记录、票据或承包商活动换算为声明的载体基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷生产单元并换算为每 1,000 kg 可销售农场大门甜瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_field_operation_records`
- 数量范围：暂定田间燃料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：20
  - 上限：180
  - 单位：L/ha
  - 基准：包含采收作业的一个一年生甜瓜作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的作物保护制剂（`melon_crop_protection_input`）

按产品和施用事件分别记录除草剂、杀虫剂、杀菌剂和其他制剂，不将不同制剂合并为一个身份。

- 选定流：Crop-protection formulation for melon production
- 流属性/单位：Mass of formulation / kg
- 数量规则：按产品、生产单元和施用事件合计制剂质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每公顷生产单元并换算为每 1,000 kg 可销售农场大门甜瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_crop_protection_records`
- 数量范围：暂定作物保护制剂筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg formulation/ha
  - 基准：一个一年生甜瓜作物周期；保留每次施用的产品和有效成分身份
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 交给采收的生长中甜瓜作物（`growing_melon_output`）

该内部产品交接表示作物进入采收和分级，不是第二个参考产品。

- 选定流：Growing cantaloupes and other melons ready for harvest
- 流属性/单位：Mass / kg
- 数量规则：采收进料质量或有记录的采收前作物质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门甜瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_harvest_records`

##### 废物流

###### 还田或移出的甜瓜作物残余物（`melon_crop_residue_output`）

按去向记录藤蔓、叶片和非市场果实。除非存在独立声明的产品交接，否则还田残余物不是副产品。

- 选定流：Melon crop residues and non-marketable field material
- 流属性/单位：Mass / kg dry or as-received material
- 数量规则：按去向和水分基准测量或核算残余物质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷生产单元并换算为每 1,000 kg 可销售农场大门甜瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_harvest_records`
- 数量范围：暂定残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：50,000
  - 单位：kg residue/ha
  - 基准：一个作物周期的藤蔓、叶片和非市场果实；声明去向和水分基准
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 释放到环境空气的氧化亚氮（`melon_n2o_air_output`）

根据采集的氮投入、有机改良剂和还田残余物活动，使用一种适用的 IPCC 分级方法或经审查的区域方法计算土壤氧化亚氮。

- 选定流：Nitrous oxide emission to ambient air
- 流属性/单位：Mass / kg N2O
- 数量规则：根据采集活动数据和声明因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷生产单元并换算为每 1,000 kg 可销售农场大门甜瓜
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_emission_activity`
- 来源：`ipcc-2019-managed-soils`

###### 释放到环境空气的氨（`melon_ammonia_air_output`）

根据养分产品、施用方法和时间以及适用的当地方法计算氨挥发。

- 选定流：Ammonia emission to ambient air
- 流属性/单位：Mass / kg NH3
- 数量规则：根据氮施用记录和适用因子计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷生产单元并换算为每 1,000 kg 可销售农场大门甜瓜
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_emission_activity`
- 来源：`emep-eea-2023-guidebook`

###### 释放到水体的硝酸盐（`melon_nitrate_water_output`）

只有在有地理适用模型、监测平衡或经审查清单方法支持时，才记录硝酸盐淋失或径流，否则保留为待解决排放要求。

- 选定流：Nitrate emission to water
- 流属性/单位：Mass / kg nitrate
- 数量规则：在适用时，根据氮平衡、排水和声明的区域方法计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷生产单元并换算为每 1,000 kg 可销售农场大门甜瓜
- 基准类型：氮投入（`n_input`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_emission_activity`
- 来源：`ipcc-2019-managed-soils`

### 过程：甜瓜采收、分级和农场大门交付（`melon_harvest_and_farm_gate`）

#### 输入

##### 产品流

###### 进入采收和分级的甜瓜（`melon_harvest_intake`）

在分级前记录进料质量、瓜类和品种，并将进料与可销售产出、淘汰品和损失核对。

- 选定流：Fresh cantaloupes and other melons entering harvest and grading
- 流属性/单位：Mass / kg
- 数量规则：按生产单元和采收日期记录地磅、田间箱或采收记录质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门甜瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_harvest_records`

###### 采收机械燃料或服务（`melon_harvest_energy`）

记录跨越前景边界且未在作物管理中记录的采收燃料、电力或外购采收服务。

- 选定流：Harvest fuel or machinery service
- 流属性/单位：Mass, energy, or service / kg, kWh, or tonne-service
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：使用采收日志、票据、计量或承包商记录，并避免与田间燃料重复。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门甜瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_harvest_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场大门的可销售甜瓜（`marketable_melon_farm_gate_output`）

记录在声明农场大门交付点转移的可销售完整甜瓜，保留成熟度、等级和包装状态。参考流 UUID 已与 CPC 01229 农场大门生产混合流核验一致。

- 选定流：Fresh cantaloupes and other melons, production mix, at farm gate, whole and unprocessed
- 流属性/单位：Mass / kg
- 数量规则：按声明农场大门质量状态测量可销售果实质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端产出换算为 1,000 kg 可销售甜瓜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_harvest_records`
- 数量范围：暂定可销售产量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5,000
  - 上限：60,000
  - 单位：kg marketable melon/ha
  - 基准：一个一年生甜瓜作物周期；以区域产量和等级记录替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分级淘汰品和采收损失（`melon_grading_reject_waste`）

按去向记录受损、未成熟、过熟、患病、过小或其他淘汰果实及采收损失。有用产出必须有独立声明交接，不能默认为废物。

- 选定流：Melon grading rejects and harvest losses
- 流属性/单位：Mass / kg
- 数量规则：按质量等级和去向测量或核算淘汰质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门甜瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_harvest_records`
- 数量范围：暂定分级损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg/1,000 kg marketable melon
  - 基准：农场大门交付前的淘汰和损失果实
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：农场内甜瓜调理和初级包装（`on_farm_melon_conditioning`）

#### 输入

##### 产品流

###### 用于调理的采收甜瓜（`conditioning_melon_input`）

只有在清洗、冷却或初级包装是独立的农场大门前活动且未包含在采收记录中时，才纳入该输入。

- 选定流：Harvested whole melon for on-farm conditioning
- 流属性/单位：Mass / kg
- 数量规则：将计量进料与明确的调理批次匹配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场大门甜瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_conditioning_records`

###### 调理用水（`conditioning_water_input`）

只有在农场大门交付前发生时，才记录用于清洗或其他初级调理的水。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：计量或按批次核算农场大门前调理用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场大门甜瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_conditioning_records`
- 数量范围：暂定调理用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：4
  - 单位：m3/1,000 kg accepted melon
  - 基准：仅清洗或其他农场大门前调理
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级包装材料（`melon_primary_packaging_input`）

只有当初级包装跨越农场大门前景边界时才记录。应分别识别每种材料及其重复使用状态。

- 选定流：Primary packaging material for whole melon
- 流属性/单位：Mass / kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`flexible-packaging`
- 数量规则：按材料和调理批次测量包装质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格农场大门甜瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_conditioning_records`
- 数量范围：暂定初级包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kg packaging/1,000 kg accepted melon
  - 基准：农场大门转移前的材料特定包装质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调理用电（`melon_conditioning_electricity_input`）

记录农场大门交付前清洗、冷却、分选或包装设备使用的电力。

- 选定流：Electricity supply
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 流属性/单位：Energy / kWh
- 数量规则：将计量或按批次分配的电量与调理产出匹配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格农场大门甜瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_conditioning_records`

##### 废物流

#### 输出

##### 产品流

###### 农场大门的调理甜瓜（`conditioned_melon_output`）

记录可选农场大门前调理后的合格完整甜瓜，并将该产出关联至 `marketable_melon_farm_gate_output`。

- 选定流：Conditioned whole cantaloupes and other melons at farm gate
- 流属性/单位：Mass / kg
- 数量规则：调理和质量检查后的合格批次质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端产出换算为 1,000 kg 可销售甜瓜
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_melon_conditioning_records`

##### 废物流

###### 调理淘汰品和物料损失（`melon_conditioning_reject_waste`）

按去向核对受损果实、移出的土壤或异物、包装淘汰品以及计量的水或质量损失。

- 选定流：Melon conditioning rejects and material loss
- 流属性/单位：Mass / kg
- 数量规则：进料批次质量减合格产出和单独测量的有用产出，并记录水分基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场大门甜瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_melon_conditioning_records`
- 数量范围：暂定调理淘汰筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg/1,000 kg accepted melon
  - 基准：农场大门前调理的淘汰品和计量损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 田间管理、采收和调理 | 优先分别记录生产、采收、调理、可销售果实、残余物和废物，再进行分配。 | `iso-14044-2006` |
| `allocation_melon_grades` | 多个可销售甜瓜等级 | 具有相同预期用途的声明等级视为一个参考产品类别；报告等级数量，只有不能独立建模时才使用经济或质量分配。 | `iso-14044-2006` |
| `allocation_residue_and_rejects` | 残余物、淘汰品和有用副产物 | 只有在交接和去向有记录时，才将有声明有用交接的材料作为副产品；否则按披露去向记录为废物或残余物。 | `fao-fruit-and-vegetable-postharvest`; `iso-14044-2006` |
| `allocation_shared_operations` | 共享田间、保护地或调理作业 | 按面积、时间、质量或其他有记录的物理关系分配共享作业；物理关系不具代表性时披露并进行价值分配敏感性分析。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_melon_establishment_records` | `melon_field_establishment` | seed, transplants, planted area, establishment energy | seed invoice, transplant delivery, field log, machinery record | production_unit_id; melon_type; cultivar; area; material_type; quantity; date; operation | 将种植材料和建立作业核对至每个生产单元和作物周期 | ha; kg; plants; L; kWh | each planting campaign | complete crop cycle | all represented production units | 按生产单元和物理身份合计，分别保留播种和定植路线 | invoices; field maps; supplier records; equipment logs |
| `cp_melon_field_operation_records` | `melon_field_establishment` and `melon_crop_management` | field operations, fuel, land occupation | field log, fuel receipt, contractor record, area register | production_unit_id; area; operation; date; fuel; machinery; contractor_scope; occupation_period | 将作业和燃料核对至生产单元和作物周期 | ha; L; kg; kWh; m2*a | each operation or meter period | complete crop cycle | all represented production units | 按作业和生产单元合计，避免自有和承包设备重叠 | dated logs; invoices; calibrated meters; area records |
| `cp_melon_fertilizer_records` | `melon_crop_management` | nutrient and amendment inputs | nutrient plan, invoice, application log, product label, assay | production_unit_id; product; amount; nutrient_content; basis; date; method | 从产品记录计算养分含量并保留产品身份和报告基准 | kg product; kg N; kg P2O5; kg K2O | each application | complete crop cycle | all represented production units | 按养分、产品、日期和生产单元合计，不合并制剂 | invoices; labels; soil tests; application records |
| `cp_melon_irrigation_records` | `melon_crop_management` | irrigation water | meter, pump log, irrigation schedule, water invoice | production_unit_id; source; volume; date; delivery_method; rainfall_context | 将供水核对至生产单元和作物周期，雨水单独保留 | m3; mm; ha | each irrigation event or meter period | complete crop cycle | all represented production units | 合计计量或有文件依据的体积并披露计算值 | calibrated meters; pump records; water permits; schedules |
| `cp_melon_crop_protection_records` | `melon_crop_management` | crop-protection formulations | product label, invoice, application log, spray record | production_unit_id; product; active_ingredient; amount; concentration; date; method | 分别记录制剂和事件并核对至作物周期 | kg; L; ha | each application | complete crop cycle | all represented production units | 保留产品和有效成分身份，不合并不同产品 | labels; invoices; application logs; operator records |
| `cp_melon_emission_activity` | `melon_crop_management` | soil and air or water emissions | nutrient balance, soil record, weather, residue, emission model | production_unit_id; N_inputs; organic_N; residue_N; soil; climate; drainage; factor_set; model_version | 使用一种声明的地理适用方法计算排放 | kg N; kg emission; ha | each event and crop-cycle calculation | complete crop cycle | all represented production units | 按单元计算、按面积加权，再按同期可销售产量归一化 | source records; factor provenance; model files; review record |
| `cp_melon_harvest_records` | `melon_harvest_and_farm_gate` | incoming fruit, marketable output, rejects, losses, harvest energy | weighbridge, field bin record, harvest log, grade ticket, meter, destination record | production_unit_id; harvest_date; melon_type; cultivar; incoming_mass; marketable_mass; reject_mass; grade; maturity; moisture; destination; fuel | 将每次采收核对至可销售产出、淘汰品、损失和交付点 | kg; percent; L; kWh | each harvest | complete crop cycle | all represented production units | 按等级和去向合计合格、淘汰和损失果实，闭合采收质量平衡 | calibrated scales; grade records; moisture checks; destination evidence |
| `cp_melon_conditioning_records` | `on_farm_melon_conditioning` | water, packaging, electricity, conditioned fruit, rejects | batch ticket, scale, meter, packaging issue, wash record | batch_id; incoming_mass; accepted_mass; reject_mass; water; electricity; packaging_material; reuse_status; date | 将调理批次和共享计量核对至合格产出 | kg; m3; kWh; packaging kg | each batch or meter period | all pre-gate conditioning | all included equipment and batches | 匹配进料与合格品质量，按时间或处理质量分配共享公用工程 | calibrated scales and meters; batch tickets; packaging records |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_to_reference_flow` | field and crop-management flows | 作物周期每公顷投入除以同期每公顷可销售甜瓜产量，再乘 1,000 kg | flow amount; production-unit area; marketable melon mass | amount per 1,000 kg marketable melon |  |
| `calc_nutrient_content` | fertilizer and amendment inputs | 产品质量乘以有记录的养分分数，保留产品和养分或氧化物当量基准 | product identity; mass; assay; reporting basis | kg N, kg P2O5, or kg K2O by source |  |
| `calc_managed_soil_n2o` | soil N2O | 对肥料氮、有机氮、还田残余物氮、挥发和淋失途径应用所选 IPCC 分级或区域方法 | nitrogen activity; residue fate; soil and climate; factors | kg N2O by pathway | `ipcc-2019-managed-soils` |
| `calc_ammonia_volatilization` | ammonia to air | 按养分产品、施用方法、时间和适用因子计算 | nitrogen product records; application details; factors | kg NH3 | `emep-eea-2023-guidebook` |
| `calc_harvest_mass_balance` | harvest and grading | 采收进料质量等于可销售产出、声明有用产出、淘汰品和测量损失之和并处于不确定度内 | incoming, marketable, useful, reject, and loss masses | reconciled harvest outputs | `mass-balance-identity` |
| `calc_conditioning_mass_balance` | on-farm conditioning | 调理批次进料质量等于合格果实、有用产出、淘汰品和测量损失之和并处于不确定度内 | batch masses; moisture; loss records | reconciled conditioning outputs per accepted fruit | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考和可销售产出 | 确认瓜类和品种属于 CPC 01229，并与西瓜、种子、幼苗和加工甜瓜区分。 | crop, lot, cultivar, and sales records |
| `dq_temporal_alignment` | 所有前景行 | 使用同一声明作物周期的播种、投入、采收、产量、排放和调理记录，披露代理年份。 | dated field and batch records |
| `dq_mass_and_grade` | 果实产出和淘汰品 | 保留秤校准、等级标准、成熟度及合格和淘汰果实的水分或按接收状态基准。 | calibration, grade tickets, and quality records |
| `dq_completeness` | 过程图和流 | 核对每个生产单元和调理批次，并区分零、不适用、代理和缺失值。 | production-unit roster and batch reconciliation |
| `dq_identity_resolution` | 参数化、未映射和参考流 | 在最终 TIDAS 过程发布前，将全部 Flow Set 参考和证据缺口的参考产品解析为经验证 UUID。 | identity review record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 终端产出 | 一个终端可销售甜瓜产出在换算后恰为 1,000 kg，并声明瓜类、品种、成熟度、等级和农场大门限定信息。 |  |
| `validation_process_route` | 过程图 | 每个作物周期纳入建立、作物管理和采收各一次；调理仅在交付前发生且未重复计算时纳入。 |  |
| `validation_crop_cycle_reconciliation` | 田间清单 | 生产单元面积、种植材料、投入、采收产出、残余物去向和排放属于同一作物周期和生产单元。 |  |
| `validation_nitrogen_balance` | 养分和排放清单 | 使用披露的方法和因子核对养分、还田及移出残余物氮和排放途径。 | `ipcc-2019-managed-soils` |
| `validation_harvest_balance` | 采收和分级 | 在不确定度内核对进料果实与可销售果实、声明有用产出、淘汰品和损失。 | `mass-balance-identity` |
| `validation_conditioning_balance` | 可选调理 | 核对调理进料、合格果实、淘汰品、包装、水和测量损失；调理负荷已包含在上游时排除调理过程。 | `mass-balance-identity` |
| `validation_flow_identity` | 所有流 | 仅将经验证 UUID 作为 `fixed`，将适用的现有 Flow Set 作为 `parameterized`；否则保留未映射覆盖并在最终过程发布前解析。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜甜瓜及其他非西瓜类瓜果前景生产数据集 |
| downstream_use | `secondary_dataset`；审查和发布后可作为 `background_dataset` |
| allowed_use | 在保留地理位置、品种或瓜类、季节、产量、灌溉、残余物、分级和调理背景时，用于新鲜完整甜瓜农场大门 LCA |
| excluded_use | 西瓜；种子或幼苗生产；切开或加工甜瓜；农场大门后的冷藏、配送、零售或消费；没有审查代理决定的其他作物 |
| required_metadata | 地理位置；瓜类；品种；生产年份；作物周期；生产系统；面积；种植路线；产量；成熟度；等级；灌溉；养分基准；作物保护；残余物去向；调理；包装；分配；身份解析 |
| required_quality_disclosure | 前景覆盖；代理投入；缺失记录；范围超限；排放方法；秤和计量器校准；等级和质量平衡核对 |
| update_trigger | 新的经审查甜瓜证据、实质生产路线变化、排放方法修订、Flow Set 或 UUID 身份变化，或代表性数据超出 QA 范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-production-framework` | official_guidance | FAO crop-production and resource-management guidance | 作物路线、建立、田间作业和生产边界背景 |
| `fao-good-agricultural-practices` | official_guidance | FAO good agricultural practices guidance for fruit and vegetable production | 播种、养分、灌溉、作物保护和田间记录要求 |
| `fao-fruit-and-vegetable-postharvest` | official_guidance | FAO fruit and vegetable postharvest handling guidance | 采收、分级、清洗、冷却、包装、淘汰品和农场大门交付 |
| `fao-crop-residue-management` | official_guidance | FAO crop-residue management guidance | 残余物去向和非市场果实处理 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11 | 土壤 N2O、残余物氮和氮途径核算 |
| `emep-eea-2023-guidebook` | method_factor | European Environment Agency, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | 农业氨计算和 QA 背景 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级和披露 |
| `mass-balance-identity` | method_factor | Conservation of mass applied to matched harvest and conditioning batches | 采收和调理质量平衡计算及校验 |
