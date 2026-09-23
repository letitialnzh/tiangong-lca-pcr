---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.anise-badian-coriander-cumin-caraway-fennel-and-juniper-berries-raw
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 茴芹、八角、芫荽、孜然、葛缕子、茴香和杜松子（原料）

## 1. 范围与适用性

本 PCR 覆盖一种已明确声明的原料香辛作物在农场的生产和初次处理：茴芹、八角（大茴香）、以种子为收获物的芫荽、孜然、葛缕子、以种子为收获物的茴香或可食用杜松子/球果。数据集必须声明植物学物种、作物、收获器官、年度/二年生田间作物、栽培多年生或经营性采集路线、地理区域、收获年份和水分状态。除非不同物种分别建模为输入数据集并披露质量份额，否则不得平均或混合不相干物种。

数据集门点为 `Production mix, at farm gate`，路线为 `Fresh, unprocessed produce`。包括门点之前的收获或果实采集、适用时的脱粒、清选、分级和条件性干燥；排除研磨、混合、精油/油树脂提取、灭菌、零售包装和调制香辛料制造。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.anise-badian-coriander-cumin-caraway-fennel-and-juniper-berries-raw |
| classification_refs | CPC 3.0: 01654 |
| covered_products | 按物种和器官声明的完整原料茴芹果实/种子、八角果实、芫荽籽、孜然果实/种子、葛缕子果实/种子、茴香果实/种子或可食用杜松浆果状球果 |
| excluded_products | 芫荽/茴香叶类香草；未披露的混种批次；研磨或混合香辛料；精油或油树脂；灭菌或零售包装产品 |
| representative_product | 一种已声明物种和收获器官，经清选和分级后在农场门点交付的完整原料香辛料批次 |
| production_route | 父活动：受管理生物生产。互斥分支：年度/二年生籽实香辛作物、栽培多年生乔木/灌木，或现有杜松林的经营性采集。人工/机械收获和环境/加热干燥属于路线特定技术分支。仅可在分别建模后汇总批次。 |
| market_state | 完整、未研磨的原料种子、果实或浆果/球果；声明水分和干燥状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门点交付的已声明完整原料香辛料种子、果实或浆果/球果 |
| How much | 按声明水分计 1,000 kg 净产品 |
| How well | 声明物种、器官、路线、地理区域、收获年份、等级、水分/基准及干燥状态；不把无关物种混成一个参考流 |
| How long or cycle | 一个年度/二年生作物周期，或一个多年生收获年度/群组；适用时年化建植和跨年维护 |
| reference_flow_link | `rf_raw_spice_farm_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Anise, badian, coriander, cumin, caraway, fennel and juniper berries, raw `bd08a9d0-d397-4471-8b53-5071717b049d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物学物种；作物；收获器官；生产路线；地理区域；收获年份；等级；水分含量和基准；干燥方法或未干燥 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和固体交接 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录净质量和实测水分；比较不同水分状态前使用 `calc_moisture_conversion`。 |
| `moisture_basis` | 收获、干燥和分级批次 | 质量分数 | % | 声明湿基或干基及测试方法。未经换算不得汇总不同基准。 |
| `area_time` | 受管理土地占用 | 面积×时间 | ha·year | 记录面积和对应时间；多年生建植在实测生产寿命内年化。 |
| `nutrient_mass` | 养分产品和养分排放 | 元素质量 | kg N、kg P、kg K | 保留每种产品记录和组成；不得相加不同养分元素。 |

## 5. 系统边界

前景从种子/种植材料与已整备土地、栽培多年生林分，或有文件记录的杜松经营性采集区开始。受管理生产止于待收获器官。收获作为独立节点，因为移除和田间损失有独立记录。初级整理把采集物料转为清洁批次；稳定化把水分不稳定的可用批次转为稳定状态；分级形成合格品、降级品和拒收品去向。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 种子/种植材料与已整备田地；已建立/新植多年生林分；或已声明来源和管理的采集区 |
| starting_condition_role | 前景生产起点；经营者实施的多年生建植负荷须年化，不虚构天然建成林分的建植负荷 |
| product_classification_scope | 类别内一种已声明物种、作物和收获器官 |
| recursive_input_rule | 本类别外购原料香辛料进入整理时须有独立上游数据集和输入行，不得并入前景收获产出。 |
| upstream_dataset_requirement | 种植材料、每种实际养分产品、水、植保品、能源、机械和外购原料香辛料须有供应商或代表性上游数据集 |
| disclosure | 物种、器官、路线、适用时林分来源/年龄、期间、面积、产量、收获方法、整理/干燥顺序、水分、等级、拒收品、残余物及产出去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_choice` | 全部批次 | 每批仅选择一个生产分支并采集其路线特定输入和期间。不得互相替代年度和多年生清单。 | `icar-rabi-coriander-2021`; `ncsu-common-juniper` |
| `boundary_postharvest` | 农场门点路线 | 纳入门点前收获/采集、脱粒/分离、清选、分级和任何干燥；区分合格、降级、拒收和损失物料。 | `codex-spice-hygiene`; `fssai-star-anise-2023` |
| `boundary_exclusions` | 下游制造 | 排除研磨、混合、提取、灭菌和零售包装；场址内发生时须在独立数据集中计量。 | `codex-spice-hygiene` |
| `boundary_periods` | 多年生路线 | 区分建植、未产、生产维护、收获年/群组、替换和终止；每项负荷只关联一次。 | `ncsu-common-juniper` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `managed_production` | 受管理田间作物、多年生林分或采集区 | required | 每批恰选一个路线分支 | 生产待收获器官；记录管理、期间、残余物和其他产出 | 每作物周期或收获年 |
| `harvest_capture` | 收获、采集和脱粒/分离 | required | 仅适用路线脱粒 | 移除目标器官；记录损失和伴随生物质 | 每 1,000 kg 采集器官 |
| `primary_conditioning` | 清选和初级分离 | required | 全部批次 | 去除土壤、糠秕、梗和异物 | 每 1,000 kg 清洁批次 |
| `stabilization_drying` | 环境或加热干燥 | conditional | 仅门点前降低水分时 | 形成已声明水分的稳定状态；每批环境/加热路线互斥 | 每 1,000 kg 干燥批次 |
| `grading_sorting` | 农场门点分级和分流 | required | 全部批次 | 形成合格、降级和拒收去向 | 每 1,000 kg 合格产品 |

### 过程：受管理田间作物、多年生林分或采集区（`managed_production`）

#### 输入

##### 产品流

###### 种植材料或建植材料（`planting_material`）

仅记录进入前景的种子、幼苗或插穗。天然建成的杜松经营林分记录为零并披露该起始条件。

- 选定流：物种特定种植材料，未解析
- 流属性/单位：质量 / kg
- 数量规则：前景实耗量；多年生建植量在实测生产寿命内年化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每栽培公顷每次建植或作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production`
- 数量范围：种植材料 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/ha
  - 基准：每栽培公顷每次建植或作物周期；现有经营林分可为零
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分供应（`nutrient_supply`）

这是本过程中唯一养分产品输入卡。矿肥、有机肥、粪肥、堆肥和养分改良剂均汇总于此，但前景数据生成时须逐项采集实际产品并分别解析 UUID。

- 选定流：农业养分供应集合
- 流属性/单位：产品特定质量 / kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：汇总施用记录但保留产品身份、组成和日期；不得相加不同养分元素
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷每作物周期或收获年
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production`
- 来源：`icar-rabi-coriander-2021`
- 数量范围：养分产品质量 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg products/ha
  - 基准：每栽培公顷每作物周期或收获年；覆盖来源中的 25 t/ha 农家肥示例
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`icar-rabi-coriander-2021`

###### 灌溉水 (`field_irrigation_water`)

记录供应的灌溉水；排除降雨。

- 选定流： 灌溉水
- 流属性/单位： 体积 / m3
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `irrigation-water`
- 数量规则： 按计量或校准值记录田间输送量
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 场地特定（`site_specific`）
- 归一化基准： 每种植公顷、每作物周期或收获年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_production`
- 数量范围： 田间灌溉水筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 30000
  - 单位： m3/ha
  - 基准： 每种植公顷、每作物周期或收获年
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 植保产品 (`field_crop_protection`)

分别记录每一种实际配方产品。

- 选定流： 植保产品
- 流属性/单位： 质量 / kg 产品
- 数量规则： 按施用事件和处理面积记录配方产品质量
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 场地特定（`site_specific`）
- 归一化基准： 每种植公顷、每作物周期或收获年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_production`
- 数量范围： 植保产品筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg product/ha
  - 基准： 每种植公顷、每作物周期或收获年
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 田间能源供应 (`field_energy`)

分别记录燃料、电力、畜力和机械服务。

- 选定流： 田间能源载体和服务
- 流属性/单位： 能量 / MJ 或 kWh
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： 使用计量、发票或校准的载体数量并保留身份
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 场地特定（`site_specific`）
- 归一化基准： 每种植公顷、每作物周期或收获年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_production`
- 数量范围： 田间能源筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： MJ/ha
  - 基准： 按有记录的换算折算到每种植公顷
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 受管理土地和直接土壤 N2O（`land_soil_emissions`）

土地占用和 N2O 虽在同一卡中说明，但须保存为两个独立计算基本流记录。

- 选定流：受管理土地占用和一氧化二氮排放至空气，未解析
- 流属性/单位：面积×时间和质量 / ha·year 和 kg N2O
- 数量规则：以制图面积、日期和氮记录应用 `calc_land` 与 `calc_soil_n2o`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 待收获器官
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_production`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：土地占用 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：5
  - 单位：ha·year
  - 基准：每 1,000 kg 待收获器官；N2O 另按公式校验
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 待收获目标产出（`production_outputs`）

记录生产至收获交接点的目标待收获种子/果实/浆果。

- 选定流：物种特定待收获生物产品，未解析
- 流属性/单位：质量 / kg
- 数量规则：按声明水分记录交给收获的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 待收获器官
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production`
- 数量范围：待收获产出参考
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 待收获器官
  - 基准类型：过程输出（`process_output`）
  - 证据类型：根据采集记录计算（`calculated_from_collection`）

###### 其他目标共产品（`other_intended_outputs`）

按身份和交接点记录任何单独销售的叶、茎、秸秆、种用种子、木材或其他目标产品；没有获得经济功能的共产品时记录为零。

- 选定流：物种和去向特定共产品，未解析
- 流属性/单位：质量 / kg
- 数量规则：按产出身份和去向记录声明水分下的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 待收获器官
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production`
- 数量范围：其他目标产出 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg co-product
  - 基准：每 1,000 kg 待收获器官
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：收获、采集和脱粒/分离（`harvest_capture`）

#### 输入

##### 产品流

###### 待收获器官 (`harvest_ready_organ`)

按物种、器官和批次记录生产移交。

- 选定流： 物种特定待收获器官
- 流属性/单位： 质量 / kg
- 数量规则： 将实测器官质量归属至收获批次
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： 每 1,000 kg 收集的原料器官
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest`
- 数量范围： 收获投入质量筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1000
  - 上限： 2000
  - 单位： kg
  - 基准： 每 1,000 kg 收集的原料器官
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 收获能源供应 (`harvest_energy`)

记录归属于批次的燃料、电力和机械服务。

- 选定流： 收获能源载体和服务
- 流属性/单位： 能量 / MJ 或 kWh
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： 将计量或发票数量归属于批次
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： 每 1,000 kg 收集的原料器官
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_harvest`
- 数量范围： 收获能源筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1,000 kg 收集的原料器官
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采集原料香辛器官（`collected_raw_organ`）

实测采集器官按声明水分从收获节点交接至初级整理。

- 选定流：物种特定完整种子/果实/浆果器官，未解析
- 流属性/单位：质量 / kg
- 数量规则：交给整理的实测批次质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 采集原料器官
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 数量范围：采集产出参考
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 采集原料器官
  - 基准类型：过程输出（`process_output`）
  - 证据类型：根据采集记录计算（`calculated_from_collection`）

##### 废物流

###### 移出田间的收获残余物和损失（`harvest_residue`）

按去向记录离开区域的残余物。留在地块的残余物进入土壤计算，不同时计作废物。

- 选定流：物种和去向特定生物质残余物，未解析
- 流属性/单位：质量 / kg
- 数量规则：按去向实测或物料衡算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 采集原料器官
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 数量范围：移出残余物 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg
  - 基准：每 1,000 kg 采集原料器官
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清选和初级分离（`primary_conditioning`）

#### 输入

##### 产品流

###### 进入清理的收集批次 (`conditioning_material`)

记录进入本过程的实物批次。

- 选定流： 物种特定收集批次
- 流属性/单位： 质量 / kg
- 数量规则： 称量批次投入
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 清理后产出
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： 投入批次质量筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1000
  - 上限： 1400
  - 单位： kg
  - 基准： 每 1,000 kg 清理后产出
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 工艺水 (`conditioning_water`)

仅在使用时记录供应的清洗水。

- 选定流： 工艺水
- 流属性/单位： 体积 / m3
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `process-water`
- 数量规则： 计量供应至批次的水量
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 清理后产出
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： 条件性工艺水筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： m3
  - 基准： 每 1,000 kg 清理后产出；不用水时为零
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 过程能源供应 (`conditioning_energy`)

按批次记录外购燃料、电力和压缩空气能源；被动作业可记录为零。

- 选定流： 过程能源载体
- 流属性/单位： 能量 / MJ 或 kWh
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： 计量载体数量并保留其身份
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 清理后产出
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_conditioning`
- 数量范围： 条件性过程能源筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： MJ
  - 基准： 每 1,000 kg 清理后产出；不启用时外购能源为零
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洁完整香辛料批次（`cleaned_lot`）

清洁批次带实测水分交给条件性干燥或直接交给分级。

- 选定流：物种特定清洁完整香辛料批次，未解析
- 流属性/单位：质量 / kg
- 数量规则：交给干燥或分级的实测产出和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 清洁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：清洁产出参考
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 清洁产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：根据采集记录计算（`calculated_from_collection`）

##### 废物流

###### 整理拒收物（`conditioning_rejects`）

按返工、返田、回收或处置去向记录土壤、糠秕、梗、异物和不合格物料。

- 选定流：去向特定整理拒收物，未解析
- 流属性/单位：质量 / kg
- 数量规则：按去向实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 清洁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：整理拒收 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：kg
  - 基准：每 1,000 kg 清洁产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：环境或加热干燥（`stabilization_drying`）

#### 输入

##### 产品流

###### 进入干燥的水分不稳定批次 (`drying_material`)

记录进入本过程的实物批次。

- 选定流： 物种特定清理后批次
- 流属性/单位： 质量 / kg
- 数量规则： 称量批次投入
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 干燥产出
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_drying`
- 数量范围： 投入批次质量筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1000
  - 上限： 1600
  - 单位： kg
  - 基准： 每 1,000 kg 干燥产出
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 过程能源供应 (`drying_energy`)

按批次记录外购燃料、电力和压缩空气能源；被动作业可记录为零。

- 选定流： 过程能源载体
- 流属性/单位： 能量 / MJ 或 kWh
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： 计量载体数量并保留其身份
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 干燥产出
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_drying`
- 数量范围： 条件性过程能源筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： MJ
  - 基准： 每 1,000 kg 干燥产出；不启用时外购能源为零
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化干燥完整香辛料批次（`dried_lot`）

稳定化批次是交给分级的干燥后可用状态。

- 选定流：物种特定稳定化完整香辛料批次，未解析
- 流属性/单位：质量 / kg
- 数量规则：声明水分下实测产出；验证干物质守恒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 干燥产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying`
- 来源：`fssai-star-anise-2023`
- 数量范围：干燥产出参考
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 干燥产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：根据采集记录计算（`calculated_from_collection`）

##### 废物流

###### 干燥拒收物（`drying_rejects`）

霉损或其他不合格物料通过已声明返工、降级、回收或处置路径离开干燥节点。

- 选定流：去向特定受损香辛物料，未解析
- 流属性/单位：质量 / kg
- 数量规则：按返工、降级、回收或处置路线实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying`
- 数量范围：干燥拒收 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 干燥产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥蒸发水（`evaporated_water`）

本行表示干燥期间从产品去除并排放至空气的水分。

- 选定流：排放至空气的水，未解析
- 流属性/单位：质量 / kg
- 数量规则：应用 `calc_drying_water`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_drying`
- 数量范围：蒸发水 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：600
  - 单位：kg
  - 基准：每 1,000 kg 干燥产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：农场门点分级和分流（`grading_sorting`）

#### 输入

##### 产品流

###### 进入分级的准备后批次 (`grading_material`)

记录进入本过程的实物批次。

- 选定流： 物种特定准备后批次
- 流属性/单位： 质量 / kg
- 数量规则： 称量批次投入
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 1,000 kg 合格参考产品
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_grading`
- 数量范围： 投入批次质量筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 1000
  - 上限： 1400
  - 单位： kg
  - 基准： 每 1,000 kg 合格参考产品
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

###### 过程能源供应 (`grading_energy`)

按批次记录外购燃料、电力和压缩空气能源；被动作业可记录为零。

- 选定流： 过程能源载体
- 流属性/单位： 能量 / MJ 或 kWh
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： 计量载体数量并保留其身份
- 数值来源模式： Foreground record (`foreground_record`)
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 1,000 kg 合格参考产品
- 基准类型： 过程产出（`process_output`）
- 证据类型： Collected record (`collected_record`)
- 采集协议： `cp_grading`
- 数量范围： 条件性过程能源筛查范围
  - 范围角色： QA guardrail (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： MJ
  - 基准： 每 1,000 kg 合格参考产品；不启用时外购能源为零
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： Reasoned estimate (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门点合格原料香辛料（`accepted_reference_product`）

这是声明农场门点唯一的合格参考产品交接。

- 选定流：Anise, badian, coriander, cumin, caraway, fennel and juniper berries, raw `bd08a9d0-d397-4471-8b53-5071717b049d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：声明水分下净合格质量，不含降级和拒收物料
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_grading`
- 数量范围：参考产品数量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：身份引用（`identity_reference`）

###### 降级产品（`downgraded_product`）

按等级和交接点记录每个单独销售的不合格批次。仅在获得经济功能时作为共产品，且绝不计入合格参考产品。

- 选定流：物种和去向特定降级香辛料，未解析
- 流属性/单位：质量 / kg
- 数量规则：按去向实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 数量范围：降级产出 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：kg
  - 基准：每 1,000 kg 合格参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 最终分级拒收物（`grading_rejects`）

未达到任何合格或降级等级的物料仅通过一个已声明去向离开。

- 选定流：去向特定拒收香辛物料，未解析
- 流属性/单位：质量 / kg
- 数量规则：按返工、回收、返田或处置路线实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 数量范围：分级拒收 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：kg
  - 基准：每 1,000 kg 合格参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | 全部多产出节点 | 先按物种批次、田地/林分、作物周期或收获年、作业和批次细分；直接分配因果负荷。 |  |
| `allocation_co_outputs` | 销售叶、茎、秸秆、种用种子、木材或降级香辛料 | 细分后，功能可比的生物产出采用干物理质量；否则采用同期价格的经济分配并报告物理质量敏感性。无经济功能残余物不承担上游负荷，但其处理仍纳入。 |  |
| `allocation_periods` | 多年生林分 | 经营者发生的建植/终止负荷按实测生产寿命年化；年度维护和收获负荷归属对应年份/群组；不为天然建成采集林分虚构建植。 | `ncsu-common-juniper` |
| `allocation_batches` | 整理、干燥、分级 | 直接分配计量批次负荷；共享清洁/换产按处理质量或运行时间仅分配一次；返工保留既有负荷并增加增量负荷。 |  |
| `allocation_rejects` | 返工和拒收 | 每个拒收状态只关联一个返工、降级、回收、返田或处置路径；不得计入合格产出。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_production` | `managed_production` | 建植、输入、面积、期间、产出、土壤排放 | 田地/林分日志、发票、仪表、地图、产量票 | 物种；器官；路线；田地/林分；日期；面积；来源/年龄；生产寿命；输入身份/UUID；数量/组成；产出质量/水分；残余物去向 | 核对发票、日志、制图面积、仪表和称重 | 原生单位及 kg、m3、MJ、ha·year | 每次事件和年度结算 | 完整作物周期或建植至报告收获年 | 每个纳入田地/林分/区域 | 仅汇总相同物种、器官、路线、地理、期间和水分基准 | 校准、发票、地图、票据和完整性核对 |
| `cp_harvest` | `harvest_capture` | 收获输入/产出、能源、残余物/损失 | 收获批次日志 | 批次；方法；日期；输入；采集质量/水分；能源；残余物/损失；去向 | 称量交接并计量/核对能源发票 | kg、%、MJ | 每批 | 完整收获窗口 | 每来源田地/林分 | 批次物料衡算 | 秤/水分检查、机械日志、收据 |
| `cp_conditioning` | `primary_conditioning` | 输入、清洁产出、服务、拒收 | 运行日志 | 批次；输入/产出质量/水分；设备；能源；水；拒收类别/路径 | 在运行边界称量和计量 | kg、%、kWh、MJ、m3 | 每次运行/换产 | 全部纳入运行 | 每场址/生产线 | 批次衡算；共享换产仅一次 | 校准、拒收检查、核对 |
| `cp_drying` | `stabilization_drying` | 输入/产出、能源、时长、拒收、水损失 | 干燥批次日志 | 批次；方法；质量；水分/基准；日期；能源；拒收 | 干燥前后称量/测试并计量能源 | kg、%、h、MJ | 每批 | 完整干燥期间 | 每干燥区/设备 | 干物质衡算和批次归属 | 水分方法、校准、表面防护、核对 |
| `cp_grading` | `grading_sorting` | 输入、等级、降级、拒收、服务 | 分级/发运日志 | 批次；身份；标准；输入；各产出；水分；去向；能源/换产 | 称量每种状态并核对发运 | kg、%、MJ | 每次运行/换产 | 全部纳入运行 | 每场址/生产线 | 合格+降级+拒收=经调整输入；服务仅一次 | 等级检验、校准、发运/返工收据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | 质量换算 | 干物质=湿质量×(1−湿基水分)；目标湿质量=干物质÷(1−目标湿基水分) | 质量；水分；基准 | 可比质量 |  |
| `calc_drying_water` | `evaporated_water` | 湿输入×输入水分−干燥产出×产出水分；负值须调查 | 输入/产出质量及湿基水分 | kg 水 |  |
| `calc_land` | 土地占用 | 公顷×占用天数÷365.25，再按产出归一化 | 面积；日期；产出 | ha·year/1,000 kg |  |
| `calc_soil_n2o` | 受管理土壤 N2O | 对合成/有机 N 和残余物 N 应用 IPCC 公式；N2O-N 乘 44/28 转为 N2O | N 输入、残余物 N、因子 | kg N2O | `ipcc-2019-managed-soils` |
| `calc_perennial` | 多年生期间 | 可归属建植+终止负荷除以实测生产寿命；反映有据的面积变化 | 期间清单；生产年限/面积 | 年化负荷 |  |
| `calc_allocation` | 多产出节点 | 先直接分配，再按声明的干物理质量或经济分配；份额合计为 1 | 质量/水分或价格；共享负荷 | 各产出负荷 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品状态 | 必须有物种和器官；保留路线、地理、年份、等级、水分/基准及干燥状态。 | 可追溯批次记录 |
| `dq_temporal` | 生产 | 覆盖完整周期/年份；多年生记录包括建植、生产寿命、替换、终止、年龄/来源和群组关联。 | 带日期田地/林分记录 |
| `dq_completeness` | 全部节点 | 纳入每种实际养分产品、水、能源、产出、返工、拒收、残余物和交接，并核对质量。 | 发票/仪表和物料衡算 |
| `dq_measurement` | 质量、水分、面积、能源 | 使用校准仪器或有记录的估算；声明水分方法/基准。 | 校准/测试/地图/工作表 |
| `dq_aggregation` | 合并记录 | 仅合并相同物种、器官、路线、地理、期间和水分基准，并披露纳入覆盖率。 | 抽样框和覆盖率计算 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流 | 缺少物种、作物、器官、路线、地理、收获年、等级、水分/基准或干燥状态即失败；无独立数据集和质量份额时不得平均无关物种。 |  |
| `validate_route` | 图 | 每批须有一个生产分支及匹配期间/输入记录；年度和多年生路线只能作为可追溯批次共存。 | `icar-rabi-coriander-2021`; `ncsu-common-juniper` |
| `validate_nodes` | 图 | 必须有生产、收获、整理和分级；发生降水分时必须有干燥；每节点声明状态和交接。 | `codex-spice-hygiene` |
| `validate_mass` | 收获至分级 | 批次输入=合格+降级+拒收+实测水损失±库存变化，误差在 5% 内；否则调查披露。 |  |
| `validate_ranges` | 清单 | 每张定量卡须有角色、上下限、单位、分母、基准类型、证据类型及外部证据来源；超限须解释；推理范围是筛选而非限值。 |  |
| `validate_nutrients` | 生产 | 每过程至多一张养分产品输入卡，仅绑定 `flow-set.agricultural-nutrient-supply@0.3.0`；禁止 group。前景生成时解析每种实际产品 UUID。 |  |
| `validate_outputs` | 多产出节点 | 枚举目标产出/交接、残余物/废物、分配顺序，份额合计 1；禁止重复交接。 |  |
| `validate_periods` | 多年生路线 | 要求期间及替换/终止决策，拒绝跨年重复建植或维护负荷。 | `ncsu-common-juniper` |
| `validate_rework` | 采后 | 每个不合格状态仅进入一个路径；合格产出排除未解析拒收；返工保留既有负荷。 |  |
| `validate_star_anise` | 声称符合引用规范的八角 | 验证干基水分≤10%、异物≤1%、梗≤3%、破损/异常果≤25%；不得套用于其他物种。 | `fssai-star-anise-2023` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 物种、器官、路线、地理和期间特定的前景农场门点生产数据集 |
| downstream_use | `secondary_dataset`；代表性和不确定性审核后可作 `background_dataset` |
| allowed_use | 与身份、路线、门点、水分、地理和期间匹配的完整原料香辛料 LCA |
| excluded_use | 混合香辛料平均；叶类香草；研磨/混合香辛料；精油/油树脂；灭菌/零售品；无情景建模的年度-多年生替代 |
| required_metadata | 参考限定项；田地/林分和期间；林分来源/年龄/寿命；过程图；输入身份/UUID；分配；质量/水分衡算；等级/去向；覆盖率 |
| required_quality_disclosure | 前景/次级份额、测量/估算、范围例外、缺失 UUID、代表性、多年生年化、分配敏感性、拒收/返工处理 |
| update_trigger | 物种/器官、路线、地理、技术、干燥、生产寿命、产量、输入、分配、质量规范、参考 UUID 或证据改变 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `icar-rabi-coriander-2021` | official_guidance | ICAR，《Rabi Agro-Advisory for Farmers 2021-22》芫荽章节。https://icar.gov.in/sites/default/files/2022-09/Rabi-Agro-Advisory-2021-22_0.pdf | 年度籽实路线、输入示例、叶与籽实不同产出 |
| `codex-spice-hygiene` | official_guidance | Codex Alimentarius，香辛料和调味品卫生规范草案。https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FMeetings%252FCX-712-24%252Fal91_13e.pdf | 收获、干燥、清选、分级和下游排除 |
| `fssai-star-anise-2023` | standard | FSSAI，第 2.9 章第 2.9.34 节八角，版本 1（2023）。https://fssai.gov.in/upload/uploadfiles/files/Chapter%202_9%20%28Salt%20Spices%2C%20Condiments%20and%20related%20products%29.pdf | 八角身份及物种特定水分/质量限值 |
| `codex-cxs-358-2024` | standard | Codex CXS 358-2024，含杜松子和八角的干燥/脱水果实和浆果标准。https://www.fao.org/fao-who-codexalimentarius/codex-texts/standards/en | 干燥果实/浆果市场路线 |
| `ncsu-common-juniper` | extension_guidance | North Carolina State Extension，*Common Juniper*。https://plants.ces.ncsu.edu/plants/juniperus-communis-var-communis/common-name/common-juniper/ | 木本多年生路线和第二/第三年球果成熟 |
| `ipcc-2019-managed-soils` | method_factor | IPCC，《2019 Refinement》，第 4 卷第 11 章。https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 受管理土壤 N2O 方法 |
