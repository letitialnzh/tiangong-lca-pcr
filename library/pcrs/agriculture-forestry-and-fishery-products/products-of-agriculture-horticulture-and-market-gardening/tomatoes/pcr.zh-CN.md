---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tomatoes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
---

# 声明交付边界的新鲜番茄

## 1. 范围与适用性

本 PCR 用于商业鲜食番茄（*Solanum lycopersicum*）的前景数据包构建，范围从生产单元建立、作物管理、采收、可选的一次调理到声明的农场门或包装厂门交付。覆盖露地、温室、水培和基质路线的圆形、肋纹、长椭圆、樱桃及鸡尾酒番茄，但必须声明路线、果型和交付状态。

番茄种子生产、育苗移栽苗生产、罐藏、干制、果汁、果泥、浓缩物、酱料、烹饪产品、零售、消费者储存和消费不在范围内。仅当加热、冷却、包装和运输发生在声明门点之前时才纳入。只有在各生产单元和批次均与合格产出完成核算后，才可汇总多个品种或采收轮次。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tomatoes |
| classification_refs | CPC 3.0:01234 Tomatoes |
| covered_products | 在声明农场门或包装厂门交付的新鲜、完整、未加工番茄，包括圆形、肋纹、长椭圆、樱桃和鸡尾酒类型 |
| excluded_products | 番茄种子和移栽苗；罐藏、干制、榨汁、果泥、浓缩、酱料或烹饪番茄产品；零售和消费者阶段 |
| representative_product | 符合声明成熟度、硬度、清洁度、尺寸、等级、缺陷和包装条件的可销售新鲜番茄 |
| production_route | 露地、温室、水培或基质栽培，包含建植、作物管理、采收、分级、可选清洗或冷却及一次包装 |
| market_state | 在声明农场门或包装厂门的鲜食完整番茄，可为散装、串果或声明的一次包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门或包装厂门的可销售新鲜番茄 |
| How much | 1,000 kg 净合格番茄 |
| How well | 声明番茄类型和品种组、成熟度或颜色阶段、硬度、尺寸和等级、清洁度、缺陷容许度、水分状态、适用时的串果状态、清洗或冷却状态及包装状态 |
| How long or cycle | 一个声明的番茄作物周期和采收期；同一栽植批次的全部采收轮次汇总到声明门点 |
| reference_flow_link | `tomatoes_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 番茄，生产混合，在农场，鲜品未加工 `43dac9a5-d7b1-4536-84f3-38fa2f56562e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产地理位置；番茄类型和品种组；露地、温室、水培或基质路线；种子或移栽苗状态；栽植日期；采收日期和轮次；作物周期或年度生产基准；成熟度和颜色阶段；尺寸和等级；硬度和缺陷标准；灌溉和养分供给方法；清洗和冷却状态；包装状态；声明门点；淘汰果和作物残体去向 |
| 绑定模式 | `fixed` |

构建前景数据包时，所有`必需限定信息`必须在数据集元数据、过程说明、参考流备注、产品描述或等效数据包字段中声明。缺失限定信息时，参考流定义不完整。参考产品流身份已按 CPC 3.0 01234 完成平台核验。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_tomato_mass` | 参考产品和采收核算 | Mass | kg | 参考量采用声明门点的净合格番茄质量。分别称量采收、合格、降级、拒收、异物和作物残体流。 |
| `crop_cycle_normalization` | 露地、温室、水培和基质路线 | Area and mass | ha or m2; kg | 分生产单元和栽植批次记录，再按同一作物周期的合格质量归一化全部投入和产出。 |
| `nutrient_product_basis` | 矿质肥、施肥灌溉产品、粪肥、堆肥和改良剂 | Product and nutrient mass | kg product; kg N, P2O5, or K2O | 保留采购产品质量和声明养分浓度；只有依据标签、供应商规格、养分计划或实验室结果才可换算养分基准。 |
| `irrigation_delivery_basis` | 灌溉、施肥灌溉载水和源头取水 | Volume | m3 | 分别记录交付灌溉水和源头取水，并在建模时区分降雨、循环溶液、排水和排放。 |
| `harvest_round_aggregation` | 多轮采收番茄路线 | Mass and time | kg and crop cycle | 汇总同一栽植批次的每个采收轮次，在归一化前核对合格果、降级果、田间损失和残体。 |
| `energy_carrier_conversion` | 电力、加热、泵送和移动机械 | Energy or carrier mass | kWh, MJ, L, or kg | 保留计量载体、作业、换算因子和生产单元；不得仅根据产量推算温室加热。 |
| `packaging_mass_basis` | 周转箱、纸箱、托盘、薄膜和可重复使用容器 | Mass or item count | kg or item | 当包装在门点前纳入时，记录包装质量或件数、容量、重复使用次数、回收率和批次归属。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 经准备的露地、温室、水培或基质生产单元接收番茄种子或移栽苗，并披露既有土地利用和排除的基础设施工程 |
| starting_condition_role | 声明番茄作物周期和前景投入核算的起点 |
| product_classification_scope | CPC 3.0:01234 的完整新鲜番茄，直到声明农场门或包装厂门 |
| recursive_input_rule | 购入的番茄种子或移栽苗按接收交接状态记录，并一次连接上游数据集；除非另有上游数据集，本 PCR 不重建其生产。 |
| upstream_dataset_requirement | 使用时必须为种子或移栽苗、养分产品、生长介质、植保产品、灌溉水、能源、包装以及购入运输或处理服务提供上游数据集。 |
| disclosure | 声明地理位置、番茄类型和品种组、路线、作物周期日期、种植密度、灌溉和施肥灌溉方法、养分基准、植保方案、采收轮次、合格与拒收质量、清洗和冷却、包装、水循环或排水、残体去向及门点位置。 |

### 边界规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和作物管理 | 纳入归属于该作物周期的生产单元准备、栽植、作物管理、供水、养分投入、植保、能源和直接作物排放；披露既有土地利用并排除无关基础设施建设。 | `fao-tomato-good-agricultural-practices`; `fao-greenhouse-vegetables-2013` |
| `boundary_route_specificity` | 露地、温室、水培和基质路线 | 当基础设施、加热、泵送、循环、基质、排水和作物周期记录会实质改变清单时，按路线分开记录。 | `fao-greenhouse-vegetables-2013` |
| `boundary_gate_preparation` | 采收、分级、清洗、冷却和包装 | 默认前景边界止于声明农场门或包装厂门；只有在门点前发生时才纳入分级、清洗、冷却和一次包装。 | `codex-cxs-293-2008`; `usda-ams-tomato-grade-standard` |
| `boundary_nitrogen_emissions` | 养分投入、土壤、排水和残体 | 使用记录的养分投入、排水或淋失证据及残体去向，以一种声明的方法估算适用的直接和间接氮排放，避免路径重复计数。 | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | 拒收果、作物残体、清洗固体和废水 | 分别记录还田、堆肥、饲料利用、处理、运输或处置；只有在接收方、用途和分配处理有证据时才可产生抵扣。 | `fao-tomato-good-agricultural-practices`; `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 番茄作物建植 | required | 每个栽植、畦面、温室分区、水培单元或基质周期 | 前景作物建植 | 栽植面积、种植材料和作物周期日期 |
| `crop_management` | 番茄作物管理 | required | 每个番茄作物周期 | 前景受管理的生物生产 | 生产单元面积、灌溉、养分、植保、能源和采收期 |
| `harvest_and_gate_preparation` | 番茄采收与门点准备 | required | 每个采收期 | 前景采收、调理、包装和门点交付 | 1,000 kg 可销售新鲜番茄 |
| `purchased_transport_to_gate` | 至声明门点的购入运输 | conditional | 运输服务在声明门点前跨越前景边界时 | 前景交付服务 | 生产单元或包装厂至门点的吨公里 |

### 过程：番茄作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 流：番茄种子或移栽苗（`seed_or_transplant_input`）

番茄种子或移栽苗在被声明生产单元接收用于建植时跨越边界。种子和移栽苗应分开记录。

- 选定流：Tomato seed or transplant material
- 流属性/单位：Mass or viable count / kg seed or plant
- 数量规则：按生产单元记录供应商批次、种子质量或有效株数、栽植日期、面积、未用材料和补栽材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 数量范围：种植材料筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：12
  - 单位：kg seed or 2,500 plants per ha
  - 基准：声明栽植面积和番茄作物周期产出
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：建植灌溉水（`establishment_irrigation_water`）

按来源和生产单元记录用于整地、出苗、移栽缓苗或初始施肥灌溉的水。

- 选定流：Irrigation water supplied to crop
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：汇总建植阶段的计量或水量平衡供水，排除降雨并单独识别循环溶液。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：建植灌溉筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：m3/ha
  - 基准：从栽植到形成均匀群体的建植阶段
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 流：建植材料损失（`establishment_planting_loss`）

废弃或进入明确定义处理路线的未用种子、失败移栽苗和建植损失应被记录。

- 选定流：Establishment planting material loss
- 流属性/单位：Mass or count / kg or plant
- 数量规则：以未用和失败材料记录核对采购批次与栽植批次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_establishment_records`
- 数量范围：建植损失筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：所购种植材料的百分比
  - 基准：采购批次与栽植或接收建植材料
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：番茄作物管理（`crop_management`）

#### 输入

##### 产品流

###### 番茄作物灌溉水（`crop_irrigation_water`）

记录同一作物周期内送达田间的灌溉及施肥灌溉用水，区分降雨、水源、施用方式和回流水。

- 选定流：Irrigation water supplied to crop
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：Sum metered or documented water-balance deliveries during crop management; report recirculated solution and drainage separately where material.
- 数值来源模式：Foreground record (`foreground_record`)
- 适用范围：Site-specific (`site_specific`)
- 归一化基准：per 1,000 kg accepted fresh tomato output from the same crop cycle
- 基准类型：Process output (`process_output`)
- 证据类型：Collected record (`collected_record`)
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`; `fao-greenhouse-vegetables-2013`
- 数量范围：Crop irrigation screening interval
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：5,000
  - 单位：m3/ha per crop cycle
  - 基准：open-field, greenhouse, hydroponic, or substrate tomato crop cycle
  - 基准类型：Crop cycle (`crop_cycle`)
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
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`; `fao-greenhouse-vegetables-2013`; `ipcc-2019-managed-soils`
- 数量范围：作物氮筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：40
  - 上限：600
  - 单位：kg N/ha per crop cycle
  - 基准：声明番茄生产单元的矿质和有机氮总施入量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：作物磷筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：350
  - 单位：kg P2O5/ha per crop cycle
  - 基准：土壤测试或配方支持的磷施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：作物钾筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：50
  - 上限：1,000
  - 单位：kg K2O/ha per crop cycle
  - 基准：土壤测试或配方支持的钾施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：作物保护产品（`crop_protection_input`）

购入并施用于声明番茄作物的植保产品跨越边界。活性成分和配方产品信息分开记录。

- 选定流：Tomato crop-protection product
- 流属性/单位：Mass / kg formulated product and kg active ingredient
- 数量规则：按产品、活性成分、处理面积和作物周期汇总发票及施用日志，保留浓度和时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-tomato-good-agricultural-practices`
- 数量范围：植保产品筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg formulated product/ha per crop cycle
  - 基准：声明生产单元的配方植保产品总施用量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：移动机械燃料（`mobile_machinery_fuel`）

按作业和生产单元记录拖拉机、喷雾器、采收辅助设备、叉车和其他移动机械燃料。

- 选定流：Mobile machinery fuel
- 流属性/单位：Volume or mass / L or kg
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：按作业汇总交付记录或机械燃料日志，保留燃料类型和换算基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-tomato-good-agricultural-practices`
- 数量范围：移动燃料筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：L/ha per crop cycle
  - 基准：声明生产单元的田间和采收机械燃料
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：生产电力（`production_electricity_input`）

按计量和作业记录泵送、施肥灌溉、通风、照明、冷却和其他生产用电。

- 选定流：Electricity supply
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：汇总分表或发票中归属于生产单元和作物周期的记录；分开记录可再生能源和购入电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-greenhouse-vegetables-2013`
- 数量范围：生产电力筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：8,000
  - 单位：kWh/ha per crop cycle
  - 基准：声明路线的泵送、通风、照明和生产设备
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 流：灌溉源头取水（`irrigation_source_withdrawal`）

当河流、含水层、水库或市政水源取水可归属于番茄生产单元时记录。

- 选定流：Water resource withdrawal
- 流属性/单位：Volume / m3
- 数量规则：记录源头计量取水或文件化水量平衡，并核对交付、循环、储存和排放水量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：源头取水筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6,000
  - 单位：m3/ha per crop cycle
  - 基准：分配给声明番茄生产单元的源头取水
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 流：可销售新鲜番茄（`marketable_tomato_output`）

可销售番茄是在声明农场门或包装厂门交付的合格产品，按批次、采收轮次和等级核算。

- 选定流：Fresh tomatoes at the declared gate
- 流属性/单位：Mass / kg
- 数量规则：汇总分级后及已纳入清洗或冷却后的净合格质量，排除包装皮重。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 合格新鲜番茄
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_records`
- 数量范围：可销售产量筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：10
  - 上限：300
  - 单位：tonnes/ha per crop cycle
  - 基准：声明生产单元的合格新鲜番茄产出
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 流：降级或拒收番茄果实（`rejected_tomato_output`）

不符合声明等级、成熟度、尺寸、外观或完整性标准的果实与合格产品分开记录，并声明去向。

- 选定流：Rejected or downgraded tomato fruit
- 流属性/单位：Mass / kg
- 数量规则：按采收轮次称量降级和拒收果，并与采收和合格质量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格新鲜番茄
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_records`
- 来源：`codex-cxs-293-2008`; `usda-ams-tomato-grade-standard`
- 数量范围：拒收果筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：采收番茄质量百分比
  - 基准：采收期的降级、拒收和不可销售番茄果实
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：番茄藤蔓和作物残体（`crop_residue_output`）

按去向记录离开生产单元的藤蔓、叶、根、基质残体和其他作物生物量，包括还田、堆肥、饲料利用、处理或处置。

- 选定流：Tomato crop residue
- 流属性/单位：Mass / kg wet biomass
- 数量规则：依据采收记录和残体管理作业测量或计算残体质量，保留水分基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格新鲜番茄
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_residue_fate_records`
- 数量范围：作物残体筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：8
  - 单位：kg wet residue/kg accepted tomatoes
  - 基准：采收和终止后离开生产单元的作物生物量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 流：土壤直接氧化亚氮排放（`direct_soil_n2o_emission`）

依据声明氮投入和选定排放方法估算受管理土壤或生长介质的直接氧化亚氮。

- 选定流：Nitrous oxide to air from managed tomato production soil
- 流属性/单位：Mass / kg N2O
- 数量规则：对测量或计算的氮投入应用一种声明方法，避免在土壤和排水记录中重复计算同一路径。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：直接 N2O 筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/ha per crop cycle
  - 基准：声明氮投入的受管理土壤直接排放估算
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：养分使用的氨排放（`ammonia_emission`）

当声明的养分方法估算肥料或有机养分产品挥发时，记录氨排放。

- 选定流：Ammonia to air from tomato production
- 流属性/单位：Mass / kg NH3
- 数量规则：根据声明氮投入和排放方法计算，保持产品、施用和环境条件可追溯。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：氨筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg NH3/ha per crop cycle
  - 基准：声明养分投入的挥发估算
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：水体硝酸盐损失（`nitrate_loss`）

当声明生产单元的排水、淋失或径流被测量或估算时，记录硝酸盐损失。

- 选定流：Nitrate loss from tomato production
- 流属性/单位：Mass / kg N as nitrate
- 数量规则：使用测量排水或声明的氮平衡方法，记录受纳介质、排水比例和养分基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一作物周期每 1,000 kg 合格新鲜番茄
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`ipcc-2019-managed-soils`; `fao-greenhouse-vegetables-2013`
- 数量范围：硝酸盐损失筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg N/ha per crop cycle
  - 基准：声明单元排水、淋失或径流中的硝酸盐损失
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：番茄采收与门点准备（`harvest_and_gate_preparation`）

#### 输入

##### 产品流

###### 流：采收和门点准备电力（`gate_preparation_electricity`）

当分选、清洗、冷却、分级、包装和其他门点前处理发生在声明门点之前时，记录其用电。

- 选定流：Electricity supply
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：汇总纳入的门点前作业分表或发票记录，并分配至处理的番茄批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格新鲜番茄
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_energy_records`
- 数量范围：门点准备电力筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kWh/tonne accepted tomatoes
  - 基准：纳入的清洗、分级、冷却和包装作业
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：清洗或工艺用水（`washing_process_water`）

当清洗或调理作业在声明门点之前发生时，用水跨越边界。清洗为可选过程，必须披露。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量规则：汇总计量或文件化清洗水量，并分别保留重复使用、处理和排放部分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格新鲜番茄
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_washing_records`
- 来源：`codex-cxs-293-2008`
- 数量范围：清洗水筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：m3/tonne accepted tomatoes
  - 基准：声明门点前的可选清洗和调理
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：刚性一次包装（`rigid_primary_packaging`）

当可重复使用或一次性周转箱、纸箱、托盘和其他刚性一次包装在门点前供应或消耗时记录。

- 选定流：Rigid container packaging
- 流属性/单位：Mass / kg packaging
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`rigid-container-packaging`
- 数量规则：记录包装类型、质量、容量、重复使用次数、回收率和番茄批次归属。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格新鲜番茄
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-cxs-293-2008`
- 数量范围：刚性包装筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：180
  - 单位：kg packaging/tonne accepted tomatoes
  - 基准：按重复使用分配和包装容量分配后的包装质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 流：清洗固体和修整废物（`wash_trim_waste`）

记录分级或清洗去除的土壤、叶、茎、受损果和其他固体，并记录处理或处置路线。

- 选定流：Tomato washing and trimming waste
- 流属性/单位：Mass / kg wet waste
- 数量规则：称量或计算纳入调理过程中去除的固体，并与合格产品和拒收果核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格新鲜番茄
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_washing_records`
- 数量范围：清洗和修整废物筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg wet waste/tonne accepted tomatoes
  - 基准：纳入分级和清洗过程中去除的固体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 流：送处理的废水（`wastewater_output`）

当清洗或调理废水排入处理服务或其他有记录的路线时，废水离开门点前操作。

- 选定流：Wastewater from tomato conditioning
- 流属性/单位：Volume / m3
- 数量规则：扣除重复使用、蒸发和截留固体后记录排放废水，并识别受纳处理路线。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格新鲜番茄
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_washing_records`
- 数量范围：废水筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3
  - 单位：m3/tonne accepted tomatoes
  - 基准：纳入调理作业排放的废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：至声明门点的购入运输（`purchased_transport_to_gate`）

#### 输入

##### 产品流

###### 流：至声明门点的公路货运（`road_freight_to_gate`）

当第三方服务在交付前将番茄、包装或生产材料运至声明门点时纳入购入公路运输。

- 选定流：Road freight transport service
- 流属性/单位：Transport service / tonne-kilometre
- 绑定模式：`parameterized`
- 流集：`flow-set.transport-service`
- 流集版本：`0.2.0`
- 流集分组：`road-freight-transport`
- 数量规则：记录装载质量、路线距离、返程或回程假设、车辆或服务类型及运输材料，并计算吨公里。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜番茄
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 数量范围：公路运输筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：km per declared tomato lot
  - 基准：生产单元或包装厂至声明门点的路线距离
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_accepted_and_rejected` | 合格番茄、降级果和拒收果 | 使用质量核算结果将共享作物周期投入首先分配给声明的合格番茄产出。单独报告降级和拒收果；只有存在有证据的生产性接收方时才使用经济或物理分配。 | `iso-14044-2006`; `codex-cxs-293-2008` |
| `allocation_multiple_varieties` | 多种番茄类型、品种或采收期 | 当投入制度、路线、等级或市场状态不同时保持类型和采收期分开。汇总时按测量质量或其他声明的物理关系分配共享作业并保留拆分证据。 | `iso-14044-2006` |
| `allocation_reusable_packaging` | 可重复使用周转箱、托盘和容器 | 按文件化重复使用次数及声明的容量或质量基准分配包装负担。门点可归属时纳入回收和损失记录。 | `iso-14044-2006`; `codex-cxs-293-2008` |
| `allocation_residue_use` | 作物残体、清洗固体和废水固体 | 将残体处理和生产性利用与合格产品分开。只有接收方、用途、替代声明和分配方法有记录时才分配抵扣。 | `iso-14044-2006`; `fao-tomato-good-agricultural-practices` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | seed, transplants, planting water, planting losses | supplier lot, planting log, establishment log | lot id; material form; mass or viable count; variety; planting date; area; unused and failed material | reconcile supplier records to planting-unit logs and retain lot documents | kg, plant, seed, m3, ha | each lot and planting event | complete crop-cycle establishment period | each field, compartment, hydroponic unit, or substrate unit | aggregate by planting campaign and production unit | supplier invoice; planting log; lot traceability |
| `cp_irrigation_records` | `crop_establishment` or `crop_management` | irrigation, fertigation water, source withdrawal, drainage | meter record, water balance, fertigation log | source; meter reading; delivered volume; rainfall; recirculation; drainage; discharge; area; date | read meters or reconstruct a documented water balance and reconcile source and delivered volumes | m3, mm, ha | each irrigation event or daily total | full crop cycle | each irrigation zone and production unit | sum by crop cycle and retain source and receiving-medium split | meter calibration; water-balance closure; operator log |
| `cp_nutrient_records` | `crop_establishment` or `crop_management` | nutrient products and calculated emissions | invoice, label, nutrient plan, application log | product; formulation; mass; nutrient concentration; date; area; application method; soil or drainage condition | reconcile purchase, storage, and application records; calculate nutrient equivalents | kg product, kg N, kg P2O5, kg K2O | each application | full crop cycle | each production unit and nutrient zone | aggregate by product, nutrient, and crop cycle | label or supplier specification; nutrient-plan review |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | application log and supplier record | product; active ingredient; concentration; mass or volume; date; treated area; application purpose | reconcile application logs with supplier records and crop-protection plan | kg, L, ha | each application | full crop cycle | each field, compartment, or crop zone | aggregate by product and active ingredient per crop cycle | operator record; product label; application authorization |
| `cp_energy_records` | `crop_management` | machinery fuel and production electricity | fuel log, meter, invoice, equipment log | carrier; quantity; meter; operation; equipment; production unit; date; allocation basis | read meters or reconcile delivery and equipment records to included operations | L, kg, kWh, MJ | each delivery, meter period, or operation | full crop cycle | each production unit and included service | sum by carrier, operation, and crop cycle | meter record; invoice; conversion record |
| `cp_harvest_records` | `crop_management` | accepted, downgraded, rejected, and harvested tomatoes | harvest ticket, scale record, grading record | date; lot; harvest round; gross mass; accepted mass; grade; rejected mass; packaging tare; gate state | use calibrated scale and lot-level grading reconciliation | kg, percent | each harvest lot | full harvest campaign | each field, compartment, and pack-house line | sum harvest rounds and reconcile gross, accepted, rejected, and tare masses | scale check; grading record; lot traceability |
| `cp_residue_fate_records` | `crop_management` | vines, roots, substrate residue, and crop residues | residue log, contractor ticket, treatment record | residue type; wet mass; moisture; date; fate; recipient; transport; treatment | weigh or calculate residue and retain fate evidence | kg, percent, km | each removal or treatment event | crop termination and residue handling period | each production unit | aggregate by fate and crop cycle | weighbridge or contractor record; recipient declaration |
| `cp_washing_records` | `harvest_and_gate_preparation` | washing water, wash solids, wastewater, and trimming rejects | water meter, wash log, waste ticket, drain record | lot; water in; reuse; discharge; solids; rejected fruit; date; line; treatment route | reconcile input water, reused water, discharged wastewater, solids, and product output | m3, kg | each lot or operating shift | all included pre-gate conditioning | each washing or conditioning line | aggregate by tomato lot and gate period | meter record; waste ticket; mass-balance check |
| `cp_gate_energy_records` | `harvest_and_gate_preparation` | sorting, cooling, and packing electricity | sub-meter, invoice, equipment log | line; operation; kWh; date; lot throughput; allocation basis | allocate metered energy to included tomato throughput and retain line records | kWh, kg | each shift or meter period | all included pre-gate operations | each pack-house line | sum by operation and tomato lot | sub-meter or invoice; throughput record |
| `cp_packaging_records` | `harvest_and_gate_preparation` | rigid packaging, crates, and pallets | packaging specification, issue log, return log | package type; material; tare; capacity; count; reuse cycles; return; loss; lot | reconcile package issue and return records to lot throughput and declared reuse basis | kg, item, cycle | each issue and return event | full included gate period | each pack-house and transport route | allocate by capacity or documented mass basis | supplier specification; issue and return log |
| `cp_transport_records` | `purchased_transport_to_gate` | purchased road freight | transport order, bill, route record | material; loaded mass; origin; destination; distance; vehicle or service; return assumption; date | calculate tonne-kilometres from verified route and loaded mass | tkm, kg, km | each shipment | all included pre-gate shipments | each route and declared gate | aggregate by material and tomato lot | bill of lading; route record; mass record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_output` | accepted tomato reference flow | 按采收批次汇总分级及已纳入清洗或冷却后的净合格番茄质量，排除包装皮重。 | harvest tickets; scale records; grade records; package tare | kg accepted tomatoes | `codex-cxs-293-2008` |
| `calc_mass_reconciliation` | harvest and gate preparation | 总采收质量 = 合格质量 + 降级或拒收果 + 修整物和异物 + 已测工艺损失；调查未解释残差。 | gross mass; accepted mass; reject mass; trim; loss; moisture basis | reconciled tomato mass balance | `mass-balance-identity` |
| `calc_nutrient_equivalents` | nutrient products | 养分质量 = 配方产品质量 × 文件化养分浓度；分别保留产品和养分基准。 | product mass; label or supplier concentration; application date | kg N, kg P2O5, and kg K2O | `fao-greenhouse-vegetables-2013` |
| `calc_water_balance` | irrigation and washing water | 源头取水 = 交付水 + 储存变化 + 排放或排水 − 已识别循环回流，并核对单位和时间段。 | meter readings; delivery; rainfall; recirculation; drainage; storage change | m3 source withdrawal and delivered water | `fao-crop-evapotranspiration-56` |
| `calc_crop_cycle_normalization` | all crop-cycle amounts | 归一化数量 = 记录或计算数量 ÷ 合格番茄产出 × 1,000 kg；保留生产单元和作物周期分母。 | recorded amount; accepted output | amount per 1,000 kg accepted tomatoes | `mass-balance-identity` |
| `calc_nitrogen_emissions` | direct and indirect nitrogen emissions | 对文件化氮投入、土壤或基质条件、排水和残体去向应用一种声明的 IPCC 兼容或辖区方法，不叠加重叠因子。 | kg N applied; method factors; drainage; residue fate | kg N2O, NH3, or nitrate loss by receiving medium | `ipcc-2019-managed-soils` |
| `calc_reusable_packaging` | reusable crates and pallets | 包装分配负担 = 件负担 ÷ 文件化重复使用次数 × 按容量或声明质量基准确定的番茄批次份额。 | item mass; reuse cycles; lot capacity or mass; return and loss records | kg packaging allocated to tomato lot | `iso-14044-2006` |
| `calc_transport_service` | purchased road freight | 运输服务 = 吨计装载质量 × 已核实路线公里；另行报告返程或回程假设。 | shipment mass; route distance; service record | tonne-kilometres | `fao-tomato-good-agricultural-practices` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_qualifiers` | reference flow and all product lots | 声明番茄类型、品种组、路线、地理位置、门点、成熟度、等级和包装状态；平台时保留该状态供前景解析。 | lot metadata; product specification; gate record |
| `quality_mass_closure` | harvest, rejects, residues, washing, and wastewater | 每个作物周期关闭产品和过程质量平衡，或记录未解释差异及其对归一化值的影响。 | calibrated scale; mass-balance worksheet; waste ticket |
| `quality_temporal_coverage` | crop-cycle inputs and outputs | 覆盖从栽植到门点的完整周期及每个采收轮次；识别缺失时段、替代值和平均窗口。 | planting log; harvest log; meter periods |
| `quality_route_disclosure` | open-field, greenhouse, hydroponic, and substrate production | 在纳入时识别路线、占用面积、基础设施归属、循环、加热、照明、基质、排水和作物终止处理。 | production-unit record; equipment log; route declaration |
| `quality_nutrient_traceability` | nutrient inputs and nitrogen emissions | 每个养分值连接到产品记录、浓度、施用日志和声明的排放方法；区分产品质量与养分质量。 | invoice; label; nutrient plan; calculation worksheet |
| `quality_water_traceability` | irrigation, withdrawal, washing, and drainage | 识别来源、计量或水量平衡方法、交付量、循环、排水、排放和受纳介质。 | meter record; water-balance closure; discharge record |
| `quality_reject_and_residue_fate` | downgraded fruit, crop residue, wash solids, and wastewater | 为每个非产品流记录测量数量、相关水分基准、去向、处理、运输和接收方证据。 | waste ticket; contractor record; recipient declaration |
| `quality_energy_and_transport` | fuel, electricity, and purchased transport | 保留载体或服务类型、数量、作业、路线、日期、计量或运输证据和分配基准。 | invoice; meter record; bill of lading; route record |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_reference_mass` | reference flow and accepted output | 归一化参考量必须为 1,000 kg 净合格番茄，并保留已按 CPC 3.0 01234 完成平台核验的参考产品身份。 | `codex-cxs-293-2008` |
| `validation_mass_reconciliation` | harvest and gate-preparation inventory | 检查合格产出、降级或拒收果、残体、修整物、废水固体和工艺损失是否在记录的测量容差内与总采收或接收质量一致。 | `mass-balance-identity` |
| `validation_crop_cycle_completeness` | crop establishment and crop management | 对缺少声明栽植批次、采收轮次或路线投入，且没有合理零值或文件化排除的数据集予以拒绝。 | `fao-tomato-good-agricultural-practices` |
| `validation_nutrient_basis` | nutrient products and emissions | 接受氮、氨或硝酸盐数值前，检查产品质量、养分浓度、养分数量、施用时间和排放方法。 | `ipcc-2019-managed-soils` |
| `validation_water_balance` | irrigation, source withdrawal, washing, and drainage | 检查单位、来源、计量或平衡时段、交付水、循环、排放和受纳介质；调查负值或未解释的平衡。 | `fao-crop-evapotranspiration-56` |
| `validation_gate_state` | reference product and process boundary | 检查清洗、冷却、包装、运输和包装厂作业仅在声明门点前发生时纳入，并在元数据中披露。 | `codex-cxs-293-2008`; `usda-ams-tomato-grade-standard` |
| `validation_range_screen` | all important inventory rows | 将场址值与行范围或文件化证据比较；超出范围必须说明、更新证据或明确声明情景。 | `codex-cxs-293-2008`; `fao-greenhouse-vegetables-2013` |
| `validation_residue_fate` | rejects and residues | 为每种拒收果、作物残体、清洗固体和废水要求去向和目的地；没有文件化生产性利用不得施加抵扣。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 可发布为 `secondary_dataset` 的番茄生产前景数据集，用作有文件记录的农业生产投入 |
| downstream_use | 在门点、路线、地理位置、时期和产品限定信息兼容时，用于鲜食完整番茄供应的下游过程和生命周期模型构建 |
| allowed_use | 当作物周期完整性、门点状态、路线、质量核对、养分基准、水量平衡和残体去向得到披露时，用于比较或归因 LCA |
| excluded_use | 没有明确转换或重新分配模型时，用于罐藏、干制、榨汁、果泥、浓缩、烹饪、零售、消费者或实质不同的番茄路线 |
| required_metadata | canonical PCR id；参考数量；番茄类型和品种组；地理位置；生产路线；栽植和采收日期；门点；成熟度和等级；合格、拒收、残体和废水质量；灌溉来源和方法；养分基准；植保方案；能源和运输；包装和重复使用；平台身份解析状态 |
| required_quality_disclosure | 时间覆盖；场址和生产单元覆盖；计量和质量平衡闭合；路线和技术；水和养分证据；残体去向；缺失数据；使用的范围；分配；不确定性字段 |
| update_trigger | 新生产路线、灌溉或施肥灌溉重大变化、加热或照明、植保制度、等级或门点定义、包装系统、残体去向、来源方法或已验证产品及流身份 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `codex-cxs-293-2008` | standard | FAO/WHO Codex Alimentarius, Standard for Tomatoes (CXS 293-2008), https://www.fao.org/fao-who-codexalimentarius/sh-proxy/hu/?lnk=1&url=https://workspace.fao.org/sites/codex/Standards/CXS%20293-2008/CXS_293e.pdf; retrieved 2026-09-14 | 产品定义、商业类型、成熟度、质量、门点调理和等级证据 |
| `usda-ams-tomato-grade-standard` | official_guidance | USDA Agricultural Marketing Service, Tomato Grades and Standards, https://www.ams.usda.gov/grades-standards/tomato-grades-and-standards; retrieved 2026-09-14 | 等级、成熟度、清洁度、缺陷和拒收分类 |
| `fao-tomato-good-agricultural-practices` | official_guidance | FAO, Manual de buenas prácticas agrícolas en la cadena del tomate, https://www.fao.org/family-farming/detail/es/c/286792/; retrieved 2026-09-14 | 番茄过程分解、作物管理、植保、残体和运输实践 |
| `fao-greenhouse-vegetables-2013` | official_guidance | FAO, Good Agricultural Practices for greenhouse vegetable crops, https://www.fao.org/4/i3284e/i3284e.pdf; retrieved 2026-09-14 | 温室、施肥灌溉、供水、养分、电力、排水和路线方法 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm; retrieved 2026-09-14 | 灌溉计量和水量平衡方法 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html; retrieved 2026-09-14 | 氮排放方法和受管理土壤边界 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html; retrieved 2026-09-14 | 分配、共产品、归因和数据质量原则 |
| `mass-balance-identity` | method_factor | PCR mass-balance reconciliation method: gross received or harvested mass equals accepted product plus separately recorded downgraded, residue, treatment, and unexplained loss streams | 计算和校验质量闭合 |
