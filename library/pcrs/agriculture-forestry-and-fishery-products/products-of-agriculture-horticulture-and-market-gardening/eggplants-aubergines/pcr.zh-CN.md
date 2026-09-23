---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.eggplants-aubergines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 茄子

## 1. 范围与适用性

本 PCR 为新鲜、整果、未加工茄子建立前景数据包，范围从露地或设施生产单元建植开始，覆盖作物管理、采收、分级、可选清洗和冷却、一次包装以及声明的农场门或包装场门交接。适用于直播和移栽的一年生作物，以及同一播种批次的多次采收；产品成熟度、大小、颜色和等级应在数据包中声明。

茄子种子和移栽苗生产、苗圃、育种、腌制、发酵、罐藏、冷冻、干燥、烹饪、切割、预制食品、零售、消费者储存和使用，以及交付门之后的运输不在默认范围内。耐久温室、灌溉、支架、机械及其他资本基础设施不进入作物周期清单，除非另行声明归属规则。田间残体、次品果和包装废物在声明去向前仍属于前景范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.eggplants-aubergines` |
| classification_refs | CPC 3.0 `01233`，Eggplants (aubergines) |
| covered_products | 新鲜整果茄子，包括露地和设施生产，交付时声明成熟度、大小、颜色、等级、清洗、冷却和包装状态 |
| excluded_products | 种子、移栽苗、苗圃产物、腌制或发酵茄子、罐藏、冷冻、干燥、熟制、切割、预制或零售产品、资本货物及交付门之后的服务 |
| representative_product | 符合声明品种组、成熟度、大小、颜色、硬度、清洁度、缺陷容限和等级要求的商品新鲜茄子 |
| production_route | 露地或设施直播/移栽、苗床准备、灌溉、养分和植保管理、多次采收、分级、可选清洗和冷却、一次包装 |
| market_state | 声明农场门或包装场门的新鲜未加工整果茄子，散装或使用声明的一次包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门或包装场门的商品新鲜茄子 |
| How much | 1,000 kg |
| How well | 新鲜、整果、未加工，并声明品种组、成熟度、大小、颜色、硬度、清洁度、等级、缺陷容限、水分状态和包装状态 |
| How long or cycle | 一个声明作物周期和采收批次；同一播种批次的所有采收轮次在归一化前核对 |
| reference_flow_link | `eggplant_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 茄子（Eggplants (aubergines)），生产混合，在农场，鲜品未加工 `1380c74a-b7bd-44ef-8539-ed9578ba930d` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种组；生产地理范围；露地或设施路线；种子或移栽路线；播种/移栽日期；采收日期和轮次；成熟度、大小、颜色、硬度、等级和缺陷标准；灌溉或雨养状态；养分基准；植保方案；清洗和冷却状态；包装状态；残体和次品去向；声明交付门 |
| 绑定模式 | `fixed` |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。参考产品流身份已按 CPC 3.0 01233 完成平台核验；质量属性和质量单位组是稳定的支持对象。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_eggplant_mass` | 商品果、采收、次品和残体 | 质量 | kg | 分开称量采收果、商品果、降级果、拒收果、田间损失和残体，并在换算为 1,000 kg 参考产出前进行核对。 |
| `crop_cycle_normalization` | 田块和设施生产记录 | 面积和质量 | ha 和 kg | 按田块、苗床或设施单元记录投入和采收轮次，再按同一声明作物周期的商品产出归一化。 |
| `nutrient_product_basis` | 矿质和有机养分投入 | 产品和养分质量 | kg product、kg N、kg P2O5、kg K2O | 分开记录配方产品质量和有文件支持的养分浓度；养分当量只能依据供应商规格、标签、养分计划或实验室结果换算。 |
| `water_delivery_basis` | 灌溉、施肥灌溉、清洗和取水 | 体积 | m3 | 将作物灌溉水、施肥灌溉载水、采后清洗水和自然资源取水作为不同数量记录，并披露计量或水平衡基准。 |
| `area_time_basis` | 露地苗床和设施单元 | 面积时间 | ha*a | 记录占用生产面积和作物占用期；若纳入耐久结构和设备，须另行声明归属。 |
| `postharvest_mass_change` | 清洗、冷却、分级和包装 | 质量和水分 | kg 和声明分数 | 将去土、吸水、冷却损失和包装损失与采收质量分开，并披露质量核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整备的田间苗床或设施生产单元接收茄子种子或移栽材料，并披露先前土地利用和排除的基础设施作业 |
| starting_condition_role | 声明茄子作物周期和前景投入核算的起点 |
| product_classification_scope | CPC 3.0 `01233`，Eggplants (aubergines)，至声明农场门或包装场门交接 |
| recursive_input_rule | 茄子种子或移栽材料按收到的交接状态记录并连接上游数据集；其自身生产不在本 PCR 内重建。 |
| upstream_dataset_requirement | 对跨越边界的种植材料、养分产品、植保产品、供水、燃料、电力、包装、外购运输和废物处理服务使用上游数据集。 |
| disclosure | 披露品种组、地理范围、路线、种植密度、作物日期、灌溉来源和方法、养分基准、植保方案、采收轮次、商品产量、次品和残体、清洗冷却、包装、废物去向及声明交付门。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和种植 | 纳入归属于作物周期的苗床准备、种植、作物管理、灌溉、养分和植保及直接作物排放；披露先前土地利用，排除无关基础设施建设。 | `fao-crop-evapotranspiration-56`; `fao-good-agricultural-practices` |
| `boundary_repeated_harvest` | 采收轮次 | 将同一播种批次的每次采收归入同一作物周期，并在归一化前核对商品果、降级果、田间损失和残体。 | `fao-eggplant-production-guide`; `usda-ams-eggplant-standard` |
| `boundary_gate_preparation` | 分选、清洗、冷却和包装 | 默认前景边界在声明农场门或包装场门结束；只有在门前发生的分选、清洗、冷却、一次包装和运输才纳入。 | `usda-ams-eggplant-standard`; `codex-fresh-produce-hygiene` |
| `boundary_residue_fate` | 次品果、作物残体和包装废物 | 分别记录还田、堆肥、饲料利用、处理、运输或处置；没有接收方和用途证据时不得给予共产品抵扣。 | `iso-14044-2006`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 茄子作物建植 | required | 每个声明的播种、移栽、苗床或设施生产单元 | 前景作物建植 | 种植面积、种植材料和作物日期 |
| `crop_management` | 茄子作物管理 | required | 每个声明的作物周期 | 前景受控生物生产 | 管理面积、灌溉、养分和植保施用及采收批次 |
| `harvest_and_gate_preparation` | 茄子采收和交付门准备 | required | 每个声明的采收批次 | 前景采收、分级、调理、包装和交接 | 1,000 kg 商品新鲜茄子产出 |

### 过程：茄子作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 种子或移栽种植材料（`planting_material_input`）

记录进入每个声明苗床或设施单元的种子或移栽材料，区分采购种子和苗圃移栽苗，并保留供应商批次和种植日期。

- 选定流：Eggplant seed or transplant planting material
- 流属性/单位：质量或有活力数量 / kg、seed 或 plant
- 数量规则：按田块、苗床或设施单元记录供应商批次和实际种植的有活力种子或移栽数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-eggplant-production-guide`
- 数量范围：种植材料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：8
  - 单位：kg seed 或 2,500 plants / 1,000 kg output
  - 基准：声明种植面积和作物周期产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建植灌溉水（`establishment_irrigation_water`）

记录苗床准备、出苗或移栽建植使用的水，按水源和生产单元记录；除非水平衡方法明确包括降雨，不得用降雨替代灌溉。

- 选定流：供给作物的灌溉水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：汇总建植期计量或水平衡供水，并保留水源和施用方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：建植灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：m3/ha
  - 基准：播种至植株整齐建立的建植期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 茄子生产面积占用（`crop_land_occupation`）

记录声明种植批次中田间苗床或设施生产单元占用的面积和时间。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / ha*a
- 数量规则：将声明生产面积乘以作物占用时间，并说明设施结构是否排除或另行归属。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_area_cycle_records`
- 来源：`fao-eggplant-production-guide`
- 数量范围：面积产出筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：0.4
  - 单位：ha / 1,000 kg output
  - 基准：声明作物面积和商品作物周期产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：茄子作物管理（`crop_management`）

#### 输入

##### 产品流

###### 茄子作物灌溉水（`crop_irrigation_water`）

记录同一作物周期内送达田间的灌溉及施肥灌溉用水，区分降雨、水源、施用方式和回流水。

- 选定流：Irrigation water supplied to crop
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：Sum meter readings or a documented application water balance for the represented crop cycle.
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg marketable fresh eggplant output
- 基准类型：Process output (`process_output`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：Crop-cycle irrigation screening interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：6,000
  - 单位：m3/ha
  - 基准：crop-cycle irrigation deliveries excluding rainfall
  - 基准类型：crop_cycle (`crop_cycle`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### 农业养分与肥料投入（`crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-soil-fertilizer-plant-nutrition`; `ipcc-2019-managed-soils-n2o`; `fao-crop-evapotranspiration-56`
- 数量范围：作物周期氮筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：350
  - 单位：kg N/ha
  - 基准：声明作物周期的总养分施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：作物周期磷筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg P2O5/ha
  - 基准：声明作物周期的总养分施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：作物周期钾筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg K2O/ha
  - 基准：声明作物周期的总养分施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保产品（`crop_protection_input`）

记录跨越前景边界的除草剂、杀菌剂、杀虫剂、生物防治剂和助剂；在有记录时同时保留有效成分和配方产品数量。

- 选定流：植保产品
- 流属性/单位：质量 / kg 配方产品或有效成分
- 数量规则：根据发票、喷施日志、施用记录和库存核对，合计声明作物周期的产品数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：植保产品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg 配方产品/ha
  - 基准：声明作物周期的总施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 抽水和田间作业电力（`field_electricity_input`）

记录灌溉抽水、施肥灌溉、设施控制和其他范围内田间作业的外购电力。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：按作业和作物周期合计电表或发票记录；多个作物共用电表时披露分配方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：田间电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,000
  - 单位：kWh/ha
  - 基准：作物周期抽水和设施田间作业
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 移动机械燃料（`mobile_machinery_fuel`）

记录拖拉机和移动机械在苗床准备、栽培、喷施和采收支持中的柴油、汽油或其他燃料。

- 选定流：移动机械燃料
- 流属性/单位：能量或燃料质量 / MJ 或 kg
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：汇总燃料收据、油罐记录或机器小时计算，并归属于声明作物周期。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：移动燃料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,500
  - 单位：MJ/ha
  - 基准：作物周期田间机械作业
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 水资源取水（`water_resource_withdrawal`）

将灌溉或施肥灌溉取用的自然资源水与供给作物的灌溉水分开，披露水源、回流或消耗计算基准。

- 选定流：水资源取水
- 流属性/单位：体积 / m3
- 数量规则：将水源计量或许可记录与作物供水核对，并披露回流或消耗计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：水资源取水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6,500
  - 单位：m3/ha
  - 基准：作物周期自然资源取水
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

###### 归还或移除的作物残体（`crop_residue_output`）

记录作物周期离开生产过程的茎、叶、根和其他残体，并按还田、堆肥、饲料、处理或处置分别记录数量和去向。

- 选定流：茄子作物残体
- 流属性/单位：质量 / kg 湿残体
- 数量规则：按田块或设施单元称量或计算残体，并记录接收去向；未收集的田间残体保留为声明的损失或残体流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_fate_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：作物残体筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：100
  - 上限：8,000
  - 单位：kg 湿残体/ha
  - 基准：声明去向前的作物周期残体质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的氧化亚氮（`nitrous_oxide_emission`）

根据管理氮投入和相关作物残体记录或计算直接、间接氧化亚氮排放，并保留声明的计算方法。

- 选定流：排入环境空气的氧化亚氮
- 流属性/单位：质量 / kg N2O
- 数量规则：依据记录的氮投入、残体去向和相关环境因子应用一个声明排放方法，避免重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：氧化亚氮筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：35
  - 单位：kg N2O/ha
  - 基准：氮管理作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排入空气的氨（`ammonia_emission`）

当声明方法和施用记录支持该途径时，记录或计算氮投入产生的氨排放。

- 选定流：排入环境空气的氨
- 流属性/单位：质量 / kg NH3
- 数量规则：根据记录的氮形态、施用时间和环境条件应用声明的氮排放方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：氨筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg NH3/ha
  - 基准：氮管理作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排入水体的硝酸盐（`nitrate_to_water`）

当养分、土壤、排水和受纳介质信息支持该途径时，记录或计算排入水体的硝酸盐损失。

- 选定流：排入水体的硝酸盐
- 流属性/单位：质量 / kg nitrate
- 数量规则：根据养分投入、排水或淋失证据及受纳介质应用声明的氮损失方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：硝酸盐损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg nitrate/ha
  - 基准：氮管理作物周期和有记录的排水途径
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：茄子采收和交付门准备（`harvest_and_gate_preparation`）

#### 输入

##### 产品流

###### 清洗水（`washing_water_input`）

清洗发生在声明交付门之前时，记录去除土壤和异物的用水，并与灌溉水和水资源取水分开。

- 选定流：用于清洗的工艺水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量规则：汇总清洗水表或批次记录，并披露回用、处理和排放处理。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`codex-fresh-produce-hygiene`
- 数量范围：清洗水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：8
  - 单位：m3 / 1,000 kg output
  - 基准：交付门前新鲜整果清洗
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却和包装电力（`postharvest_electricity_input`）

当强制风冷、冷库、分选线、照明和包装设备在声明交付门前运行时，记录其电力。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：合计设备电表或发票记录；共享服务按质量、运行时间或其他声明的物理基准分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：采后电力筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kWh / 1,000 kg output
  - 基准：交付门前冷却、分选和包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 一次箱、纸箱或托盘包装（`primary_packaging_input`）

记录声明交付门前跨越前景边界的包装材料或可重复使用包装服务，并披露材料、皮重、复用和归属信息。

- 选定流：箱、纸箱或托盘包装功能
- 流属性/单位：质量或包装服务 / kg 或 item
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`pallet-and-crate-packaging`
- 数量规则：记录包装质量或件数、容量、皮重、复用次数以及声明批次的损失或返还率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_transport_records`
- 来源：`usda-ams-eggplant-standard`
- 数量范围：一次包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg packaging / 1,000 kg output
  - 基准：交付门的一次包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付门前公路货运（`pre_gate_road_transport`）

当田间至包装场或其他声明的交付门前交接属于前景边界时，记录外购运输。

- 选定流：公路货运运输服务
- 流属性/单位：运输服务 / t*km
- 绑定模式：`parameterized`
- 流集：`flow-set.transport-service`
- 流集版本：`0.2.0`
- 流集分组：`road-freight-transport`
- 数量规则：运输质量乘以有文件支持的距离，并保留车辆、装载、返程和路线假设。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_transport_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：交付门前运输筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：t*km / 1,000 kg output
  - 基准：声明的田间至交付门路线
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 商品新鲜茄子（`marketable_eggplant_output`）

记录采收、分级及声明清洗或冷却后的合格新鲜整果，不含容器皮重和分配给其他去向的果实。

- 选定流：声明交付门的商品新鲜茄子
- 流属性/单位：质量 / kg
- 数量规则：在声明交付门称量合格果，并与采收果、次品、修整、田间损失和处理损失核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`usda-ams-eggplant-standard`
- 数量范围：商品产量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：40,000
  - 单位：kg 商品果/ha
  - 基准：声明交付门的作物周期产量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 降级和拒收果（`cull_fruit_output`）

记录采收、分级、清洗或包装时拒收的果实，区分田间损失与交给有文件记录的接收方、处理、堆肥、饲料或处置的果实。

- 选定流：降级或拒收茄子果
- 流属性/单位：质量 / kg
- 数量规则：按采收批次称量次品和拒收果，并记录每一后续去向；没有接收方证据不得给予生产性用途抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`usda-ams-eggplant-standard`; `mass-balance-identity`
- 数量范围：次品和拒收筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：35
  - 单位：采收果质量百分比
  - 基准：采收和分级质量核对
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装废物（`packaging_waste_output`）

记录交付门前包装作业中损坏、丢弃或未回收的包装，并按材料和去向区分。

- 选定流：包装废物
- 流属性/单位：质量 / kg
- 数量规则：核对声明批次的包装发放、返还、复用和丢弃量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品新鲜茄子产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_transport_records`
- 来源：`mass-balance-identity`
- 数量范围：包装废物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：12
  - 单位：kg 包装废物 / 1,000 kg output
  - 基准：交付门前包装材料核对
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_crop_inputs` | 共用田块、苗床、电表或设施的多种作物或产品 | 优先使用按作物测量的记录分配共享投入。无法拆分时，使用面积时间、运行时间或质量等有文件支持的物理基准，并披露基准。 | `iso-14044-2006` |
| `allocation_cull_fates` | 次品、降级果和残体 | 除非记录接收方、用途、质量和交接，否则将次品和残体视为废物或残体。只有二级产品有明确功能并声明分配基准时才使用共产品分配。 | `iso-14044-2006`; `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material | 供应商批次和种植日志 | 批次、种子或移栽形式、数量、品种、日期、田块或苗床 | 转录发票和种植日志，并用种植记录核对批次 | kg、seed 或 plant | 每次种植 | 完整作物周期 | 每个田块、苗床或设施单元 | 按作物周期单元合计有活力种植量 | 批次发票、种植日志和主管复核 |
| `cp_area_cycle_records` | `crop_establishment` | land occupation | 田块或设施登记 | 面积、单位、作物日期、设施状态、先前用途 | 登记生产单元并核对起止日期 | ha 和日期 | 每个作物周期 | 完整作物占用期 | 每个田块、苗床或设施单元 | 面积乘以声明占用时间 | 田图、租赁或设施记录、日期记录 |
| `cp_irrigation_records` | `crop_management` | irrigation and withdrawal | 水表、许可或水平衡记录 | 水源、水表、施用、日期、体积、回流 | 读取水表或重建有文件支持的水平衡 | m3 | 每次施用或日合计 | 建植至最后采收 | 每个水源和作物单元 | 按作物周期合计，并区分取水和供水 | 水表校准、许可或水平衡核对 |
| `cp_nutrient_records` | `crop_management` | nutrient inputs and soil emissions | 发票、标签、养分计划和施用日志 | 产品、质量、养分比例、日期、方法、面积、残体去向 | 核对采购与施用记录并计算养分当量 | kg product 和 kg nutrient | 每次施用 | 完整作物周期 | 每个作物单元 | 合计归属于作物周期的施用 | 供应商标签、土壤计划、实验室或日志复核 |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | 喷施和库存记录 | 产品、有效成分、剂量、日期、面积、方法 | 用发票和库存变动核对喷施日志 | kg product 或 active ingredient | 每次施用 | 完整作物周期 | 每个作物单元 | 按产品和有效成分合计 | 产品标签、施用日志和操作员复核 |
| `cp_energy_records` | `crop_management` | field and post-harvest energy | 电表、燃料或发票记录 | 载能体、数量、作业、设备、日期、作物或批次分配 | 读取电表或核对燃料收据和运行记录 | kWh、MJ、L 或 kg | 每次作业或计费期 | 完整作物周期和门前处理 | 田间、设施和共享设备 | 按声明物理基准分配共享用量 | 电表、收据、机器小时或分配记录 |
| `cp_residue_fate_records` | `crop_management` | crop residues | 残体和接收方记录 | 流、湿质量、去向、接收方、日期 | 称量或估计残体并保留去向证据 | kg 湿残体 | 每次移除或周期结束 | 周期结束和采后清理 | 每个作物单元 | 按残体流和去向合计 | 称量单、接收方记录或处理收据 |
| `cp_harvest_grade_records` | `harvest_and_gate_preparation` | marketable output and culls | 采收和分级记录 | 日期、轮次、采收总量、接收量、次品、等级、交付门 | 每轮称量并核对分级结果 | kg | 每次采收轮次 | 整个采收批次 | 每个田块、苗床或批次 | 按作物周期和声明交付门合计 | 秤记录、分级表和质量核对 |
| `cp_postharvest_records` | `harvest_and_gate_preparation` | washing and cooling | 批次、水表或设备记录 | 批次、水、回用、冷却时间、损失、排放 | 读取批次或水表并连接采收批次 | m3、kWh、kg 和 h | 每批次 | 所有门前处理 | 包装场或声明处理地点 | 按合格产出批次汇总 | 批次单、水表和卫生记录 |
| `cp_packaging_transport_records` | `harvest_and_gate_preparation` | packaging and pre-gate transport | 包装发放和发运记录 | 材料、皮重、复用、件数、质量、距离、车辆、装载 | 将包装和发运记录与合格采收批次核对 | kg、item、km 或 t*km | 每批次或发运 | 所有范围内门前移动 | 田间、包装场和路线 | 按声明交付门产出合计包装和运输 | 包装规格、发运单和路线记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_occupation` | crop establishment | 面积时间 = 声明生产面积 × 作物占用期；设施结构单独归属时保持分开 | 面积、起止日期、设施状态 | ha*a 或声明面积时间 | `fao-eggplant-production-guide` |
| `calc_nutrient_equivalents` | nutrient inputs | 养分质量 = 配方产品质量 × 有文件支持的养分比例；产品和养分基准分开保留 | 产品质量、标签或计划浓度 | kg N、kg P2O5 和 kg K2O | `fao-soil-fertilizer-plant-nutrition` |
| `calc_managed_soil_emissions` | nitrogen-related elementary outputs | 对养分投入、残体去向和环境因子应用一个声明氮排放方法，不重复计算途径 | 养分投入、残体去向、方法因子 | 声明的氮排放流 | `ipcc-2019-managed-soils-n2o` |
| `calc_transport_service` | pre-gate road freight | 运输服务 = 运输质量（t）× 有文件支持的距离（km）；说明是否包含返程或空驶 | 质量、距离、装载和路线记录 | t*km | `fao-good-agricultural-practices` |
| `calc_reference_normalization` | all inventory rows | 归一化值 = 作物周期数量 × 1,000 kg / 声明交付门的合格商品产出 | 作物周期数量和合格产出质量 | 每 1,000 kg 参考流的数量 | `mass-balance-identity` |
| `calc_mass_reconciliation` | harvest, culls, residues, and packing | 采收总质量 = 合格产出 + 次品和拒收 + 田间或处理损失 + 声明残体流，并披露水分和皮重处理 | 采收、分级、残体、包装和损失记录 | 核对后的作物周期质量平衡 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all flows and product qualifiers | 为每个流记录语义身份、物理状态、方向、过程角色以及证据缺口或已验证状态；最终数据集发布前必须验证参考身份。 | 流说明、限定信息和前景复核 |
| `dq_measurement` | quantities and conversions | 使用校准秤、计量表、发票、日志或透明计算，保留带单位的原始值和换算因子。 | 计量记录和计算工作表 |
| `dq_temporal` | crop cycle and harvest campaign | 覆盖声明的播种至交付门期间，标识缺失轮次、异常天气或替代记录。 | 播种、施用、采收和交付日期 |
| `dq_completeness` | boundary inputs and outputs | 对适用的种植材料、土地、水、养分、植保、能源、排放、产量、次品、残体、包装和门前运输提供数值、合理零值或有文件支持的排除。 | 完整性清单和质量平衡复核 |
| `dq_allocation` | shared meters, fields, facilities, or transport | 共享多个作物、产品或批次的记录须说明分配基准，并在需要时测试其影响。 | 分配记录和敏感性说明 |
| `dq_disclosure` | final dataset metadata | 声明品种组、地理范围、路线、日期、交付门、产量和等级、灌溉和养分基准、植保、残体去向、包装、门前运输及身份证据缺口。 | 数据集元数据和参考流备注 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_definition` | reference flow | 确认 1,000 kg 功能单位、全部必需限定信息，以及在前景生成前完成平台核验的参考产品、质量属性和单位组身份。 | `mass-balance-identity` |
| `validation_flow_set_binding` | parameterized product inputs | 前景数据生成时，使用引用的 Flow Set id、版本、分组、结构坐标、属性、单位、地理范围和用途证据解析每个 parameterized 行；Flow Set 不得当作最终 UUID。 |  |
| `validation_mass_reconciliation` | harvest and gate preparation | 核查合格产出、次品、拒收、残体、田间损失、处理损失和包装废物符合声明质量基准，并明确容器皮重和水分处理。 | `mass-balance-identity` |
| `validation_boundary_disclosure` | system boundary | 若缺少范围要求的交付门、作物周期、路线、灌溉来源、养分基准、残体去向或门前处理，则拒绝数据集。 | `fao-good-agricultural-practices`; `usda-ams-eggplant-standard` |
| `validation_soil_emissions` | managed nitrogen and residues | 验证使用一个声明排放方法，并确保直接和间接氮途径不重复计算。 | `ipcc-2019-managed-soils-n2o` |
| `validation_data_quality` | all foreground records | 分别报告身份、计量、时间覆盖、完整性、分配和披露发现；错误或无法确定的发现默认使校验失败。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明农场门或包装场门新鲜整果茄子生产的前景一次数据集；复核后可作为 `secondary_dataset` 下游使用 |
| downstream_use | 为新鲜茄子建立过程和生命周期模型前景清单，并比较具有声明限定信息的作物周期路线 |
| allowed_use | 保留声明作物周期、路线、交付门、成熟度和等级状态、投入基准、排放方法和质量核对的产品类别研究 |
| excluded_use | 直接替代加工茄子、种子或移栽苗生产、零售或消费者阶段、未披露设施基础设施，或产品和交付门条件有重大差异的作物 |
| required_metadata | PCR id 和版本；品种组；地理范围；路线；播种和采收日期；作物周期；声明交付门；产量和等级；灌溉和养分基准；植保；残体和次品去向；包装；门前运输；参考产品限定信息 |
| required_quality_disclosure | 计量来源、缺失或估算字段、分配基准、作物周期完整性、质量平衡结果、排放方法、Flow Set 解析情况和身份证据缺口发现 |
| update_trigger | 新的栽培或设施路线、交付门调理或包装发生重大变化、排放方法修订、产品限定信息变化，或证据改变默认采集和校验规则 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-eggplant-production-guide` | extension_guidance | FAO 或国家推广资料中的茄子建植、作物管理、采收轮次和生产记录指导 | 作物周期分解、建植、采收和残体背景 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration | 灌溉和水平衡方法背景 |
| `fao-good-agricultural-practices` | official_guidance | FAO good agricultural practices 关于作物投入、田间作业和采后处理的指导 | 边界、田间作业、植保、能源和运输背景 |
| `fao-soil-fertilizer-plant-nutrition` | official_guidance | FAO 土壤肥力和植物营养指导 | 养分产品和养分当量计算 |
| `ipcc-2019-managed-soils-n2o` | method_factor | 2019 IPCC Refinement managed soils and nitrogen emissions guidance | 氮排放计算和校验 |
| `usda-ams-eggplant-standard` | official_guidance | USDA Agricultural Marketing Service eggplant grade and quality guidance | 产品身份、成熟度、等级、产量、次品和交付限定信息 |
| `codex-fresh-produce-hygiene` | standard | Codex fresh fruits and vegetables hygiene principles | 清洗、处理和门前卫生边界 |
| `iso-14044-2006` | standard | ISO 14044 environmental management life-cycle assessment requirements | 分配和校验规则 |
| `mass-balance-identity` | method_factor | 声明作物和包装质量平衡核对方法 | 归一化、损失、次品、残体和包装校验 |
