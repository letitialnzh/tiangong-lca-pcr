---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-berries-fruits-of-the-genus-vaccinium
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他浆果；越橘属水果

## 1. 适用范围
覆盖在农场出场或第一调理出口销售的栽培鲜果或冷藏越橘属水果，包括蓝莓、越橘和蔓越莓等。加工品、冷冻后产品、苗木和野生采集产品不适用。

## 2. 产品类别身份
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-berries-fruits-of-the-genus-vaccinium` |
| classification_refs | CPC 3.0 / 01355 / exact |
| covered_products | 栽培鲜果或冷藏越橘属水果 |
| excluded_products | 加工、冷冻、苗木和野生采集产品 |
| representative_product | 可销售栽培蓝莓或蔓越莓 |
| production_route | 经营性生产；栽培；采收；分选；初级调理；出口 |
| market_state | 指定出口处可销售果实 |

## 3. 参考流
| Field | Value |
| --- | --- |
| What | 指定出口处可销售栽培越橘属水果 |
| How much | 1 kg |
| How well | 声明的种/品种、等级、成熟度、状态和出口 |
| How long or cycle | 一个生产年度或作物周期；适用时分摊多年生建园 |
| reference_flow_link | `rf_vaccinium_saleable_fruit` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 其他浆果，越橘属水果 `b9b4cf8e-fbb5-46a3-a4ba-0c9c98d46745` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species/cultivar; fresh or chilled state; grade; maturity; production year; outlet; fruit mass basis; irrigation status |

## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | reference product | Mass | kg | 按出口可销售果实质量归一化，不含包装。 |
| `measure_fertilizer_n_basis` | fertilizer inputs | Product and nutrient mass | kg product; kg N/P2O5/K2O | 记录实际产品和供应商养分基准，不得自行推断。 |
| `measure_irrigation_water` | irrigation input | Volume or mass | m3 or kg | 使用水表或供水记录；仅凭有记录的密度换算。 |
| `measure_perennial_allocation` | perennial establishment | Area, productive years, yield | ha, year, kg | 按有记录的生产年限和产量分摊建园。 |

## 5. 系统边界
### 边界抽象
| Field | Value |
| --- | --- |
| declared_starting_condition | 期初经营性地块及其声明的建园状态 |
| starting_condition_role | 农业前景生产起始条件 |
| product_classification_scope | CPC 01355 栽培越橘属水果；分类仅作映射语境 |
| recursive_input_rule | 同类产品投入处停止递归并引用上游数据集。 |
| upstream_dataset_requirement | 对跨边界的种苗、肥料、改良剂、能源、水、包装和服务提供上游数据集。 |
| disclosure | 披露种/品种、系统、面积、建园、期间、出口、等级、灌溉、投入、产量、次品和分配。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_outlet` | all datasets | 从经营地块到声明农场出场/第一调理出口；披露采后步骤。 | `iso-14044-2006` |
| `boundary_recursive_same_category` | recursive product inputs | 在同类声明投入处停止追溯并引用上游数据集。 | `iso-14044-2006` |
| `boundary_establishment_disclosure` | perennial systems | 仅按记录将建园投入分摊到报告周期。 | `iso-14044-2006` |

## 6. 过程清单结构
### 过程图
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_establishment` | 地块建园 | conditional | 多年生地块 | managed biological production | site-specific records |
| `p_cultivation` | 栽培与作物保护 | required | 全部作物周期作业 | managed biological production | site-specific records |
| `p_harvest` | 采收与捕获 | required | 人工或机械采收 | harvest capture | site-specific records |
| `p_conditioning` | 分选与初级调理 | conditional | 出口前发生 | grading and conditioning | site-specific records |
| `p_rejects` | 次品去向 | conditional | 次品离开系统 | reject routing | mass balance |

### 过程：栽培与作物保护（`p_cultivation`）
#### 输入
##### 产品流
###### 农业养分与肥料投入（`p_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`fao-crop-production-guidance`
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 灌溉水（`cultivation_irrigation_water`）
按地块和季节记录计量或交付的灌溉水。
- 选定流：Irrigation water（UUID unresolved；intentionally blank）
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：水表或供水记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售果实
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`fao-crop-production-guidance`
#### 输出
##### 产品流
###### 作物产出（`cultivation_crop_output`）
根据作物周期质量平衡记录分选前采收的越橘属果实。
- 选定流：Vaccinium fruit（UUID unresolved；intentionally blank）
- 流属性/单位：Mass / kg
- 数量规则：分选前采收质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售果实
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_mass_balance`
- 来源：`fao-crop-production-guidance`

### 过程：采收与捕获（`p_harvest`）
#### 输入
##### 产品流
###### 采收耗材（`harvest_consumables`）
按作业记录实际采收辅助物、耗材和田间包装。
- 选定流：采收耗材或田间包装（UUID unresolved；intentionally blank）
- 流属性/单位：质量或数量 / kg 或 item
- 数量规则：设备日志或发票
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 采收果实
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`fao-crop-production-guidance`
###### 采收能源（`harvest_energy`）
记录采收设备或外购采收服务使用的电力、燃料和其他能源载体。
- 选定流：采收能源供给（UUID unresolved；intentionally blank）
- 流属性/单位：能量或质量 / kWh、MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：设备日志、水表、承包商记录或发票
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 采收果实
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`fao-crop-production-guidance`
#### 输出
##### 产品流
###### 采收果实（`harvested_fruit`）
使用采收前的秤重或周转箱记录。
- 选定流：Vaccinium fruit（UUID unresolved；intentionally blank）
- 流属性/单位：Mass / kg
- 数量规则：称重或周转箱记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 采收果实
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_mass_balance`
- 来源：`fao-crop-production-guidance`

### 过程：分选与初级调理（`p_conditioning`）
#### 输入
##### 产品流
###### 待调理采收果实（`conditioning_input_fruit`）
将接收重量与进入调理的采收批次关联。
- 选定流：Harvested Vaccinium fruit（UUID unresolved；intentionally blank）
- 流属性/单位：Mass / kg
- 数量规则：接收称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售果实
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_mass_balance`
- 来源：`fao-crop-production-guidance`
##### 废物流
###### 分选次品（`conditioning_rejects`）
按去向和处理路线记录分选次品。
- 选定流：Fruit rejects（UUID unresolved；intentionally blank）
- 流属性/单位：Mass / kg
- 数量规则：次品称重或质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售果实
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_mass_balance`
- 来源：`fao-crop-production-guidance`
#### 输出
##### 产品流
###### 可销售果实（`saleable_fruit`）
使用声明出口处最终称量的可销售果实。
- 选定流：Saleable Vaccinium fruit（UUID unresolved；intentionally blank）
- 流属性/单位：Mass / kg
- 数量规则：指定出口的分级产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售果实
- 数量范围：宽泛的临时 QA 护栏；以场址特定记录替换
  - 范围角色：QA 护栏（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：每 kg 可销售果实的声明流单位
  - 基准：一个声明的作物周期；超出范围须说明
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_mass_balance`
- 来源：`fao-crop-production-guidance`

## 7. 分配与联产品处理
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_saleable_reject` | saleable fruit and rejects | 优先过程细分；否则按质量分配共享负荷，分流后加入去向处理负荷。 | `iso-14044-2006` |
| `allocation_perennial_establishment` | perennial establishment | 按有记录的生产年限和年度产量分摊并披露敏感性。 | `iso-14044-2006` |
| `allocation_intercrop_shared_area` | shared plots | 使用实测面积/时间份额或有记录的物理/经济依据。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则
### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_inputs` | `p_cultivation` | inputs | invoices, logs, meters | product; nutrient; amount; water; date; area | record reconciliation | kg; kg nutrient; m3 | per operation | full crop cycle | each plot | sum by plot/product | supplier declaration; meter check |
| `cp_harvest_records` | `p_harvest` | harvest energy | logs and invoices | equipment; energy; hours; crates | log/invoice reconciliation | kWh; L; h; kg | per event | harvest season | each line | sum by operation | scale ticket; invoice |
| `cp_harvest_mass_balance` | `p_harvest,p_conditioning,p_rejects` | outputs | scale and destination records | input; saleable; reject; loss; destination | lot weighing | kg | per lot | harvest and conditioning | each lot | input = outputs + loss | calibrated scale; reconciliation |
| `cp_establishment_records` | `p_establishment` | establishment | land and planting register | area; year; plants; productive years | register and supplier records | ha; year; kg/item | annual | establishment onward | each plot | allocate by output | invoice; register |
| `cp_conditioning_records` | `p_conditioning` | utilities | meter and production log | utility; lot; time | meter or documented allocation | kWh; m3; h | lot/month | conditioning period | site | allocate by output | meter; log |
### 计算规则
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_saleable_mass` | all flow rows | 期间量 / 出口可销售果实质量。 | quantity; saleable mass | per kg saleable fruit | `iso-14040-2006` |
| `calc_establishment_allocation` | `p_establishment` | 建园负荷 × 报告份额 / 年度可销售产量。 | burden; years; output | allocated burden | `iso-14044-2006` |
| `calc_mass_balance` | harvest and conditioning | 在称量不确定度内核对投入、可销售产出、次品和损失。 | lot records | reconciled totals | `fao-crop-production-guidance` |
| `calc_nutrient_basis` | fertilizer and amendments | 产品量 × 供应商养分比例，并保留两种量。 | product; declaration | product and nutrient mass | `fao-crop-production-guidance` |
### 数据质量要求
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all rows | 声明种/品种、状态、等级、出口和路线；未解析身份阻塞审查。 | lot and supplier records |
| `dq_completeness` | all processes | 覆盖生产周期并核对投入、产出、次品和损失。 | protocol records |
| `dq_temporal` | all rows | 声明报告期、作物周期和多年生分摊。 | farm register |
| `dq_measurement` | quantitative rows | 优先校准秤/表计并保留假设和不确定度。 | calibration records |
| `dq_disclosure` | published datasets | 披露缺失数据、估算、灌溉、改良剂、次品和分配。 | quality statement |

## 9. 验证规则
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | reference flow | 参考量为 1 kg 可销售果实并匹配出口和质量基准。 | `iso-14040-2006` |
| `validation_mass_balance` | harvest and conditioning | 投入、可销售产出、次品和损失必须平衡，差额形成发现项。 | `fao-crop-production-guidance` |
| `validation_nutrient_declaration` | fertilizer and amendments | 产品量和养分基准可追溯至供应商或原始记录。 | `fao-crop-production-guidance` |
| `validation_boundary_disclosure` | all datasets | 检查起始条件、出口、纳入、递归、建园和排除项。 | `iso-14044-2006` |
| `validation_quality_disclosure` | all datasets | 报告时间、地域、完整性、计量、估算和分配限制。 | `iso-14040-2006` |

## 10. 发布数据集画像
| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset；上游链接完整时为 background_dataset |
| downstream_use | 栽培越橘属水果的前景过程和生命周期模型构建 |
| allowed_use | 在声明的种/系统、出口、期间和分配范围内建模 |
| excluded_use | 不得替代加工、冷冻、野生、苗木或不同系统 |
| required_metadata | species/cultivar; geography; system; period; outlet; grade; irrigation; inputs; yield; rejects; allocation; upstream links |
| required_quality_disclosure | 完整性、代表性、计量、估算、不确定度、分配和未解析 UUID |
| update_trigger | 系统、灌溉、投入、出口、等级、分配或原始数据发生实质变化 |

## 11. 数据源
| source_id | type | reference | use |
| --- | --- | --- | --- |
| `iso-14040-2006` | standard | ISO 14040:2006 | 功能单位和质量框架 |
| `iso-14044-2006` | standard | ISO 14044:2006 | 边界、分配、递归和验证 |
| `fao-crop-production-guidance` | official_guidance | FAO crop production and farm-record guidance | 路线、记录、质量平衡和养分声明 |
