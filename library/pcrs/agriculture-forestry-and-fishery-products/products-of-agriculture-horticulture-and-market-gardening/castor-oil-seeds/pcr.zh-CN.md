---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.castor-oil-seeds
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 蓖麻籽

## 1. 范围与适用性

本 PCR 覆盖蓖麻（*Ricinus communis*）受控种植以及在生产者或初级调理交接点交付收获未加工蓖麻籽。包括一年生或短寿命多年生栽培、申报的分批采摘或一次终期收获、蒴果/种子分离、干燥、清理、分级及不合格物料路径。排除蓖麻油提取、压榨、精炼、粕或衍生物制造以及认证播种用种子。经营者必须申报路线、收获模式、水分基准和准确的生产者或调理交接点。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.castor-oil-seeds |
| classification_refs | CPC 3.0：01447（精确分类语境） |
| covered_products | 经蒴果分离及必要干燥、清理和分级的收获未加工蓖麻种子 |
| excluded_products | 播种用种子；完整蒴果；蓖麻油；压榨饼粕；精炼油；衍生物；其他油籽 |
| representative_product | 用于榨油、压榨前的清洁分级蓖麻籽 |
| production_route | 受控一年生作物或短寿命多年生植株；分批采摘或终期收获；蒴果/种子分离；干燥；清理；分级；生产者或初级调理交接。一年生和多年生路线作为替代路线共存，在各自清单完成前不得合并。人工和机械路线是附着于相应母活动的技术替代。 |
| market_state | 已收获、未加工、无大块蒴壳、具有申报水分和等级且尚未榨油的种子 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在申报生产者或初级调理交接点交付的蓖麻籽 |
| How much | 申报水分下 1,000 kg 净种子质量 |
| How well | 已脱蒴、清理、分级，并申报水分、等级、杂质、路线、收获模式和交接点 |
| How long or cycle | 一个一年生作物周期，或多年生植株的报告年度及建植/生产阶段 |
| reference_flow_link | `grading_handoff` 的最终合格产出 |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Castor Seed（蓖麻籽）`d52055a9-c05b-4edd-ad58-f3271a360458` |
| Reference flow property | Mass（质量）`93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass（质量）`93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 蓖麻；收获未加工种子；净质量；水分及其基准；一年生/多年生路线；分批采摘/终期收获；等级；杂质；生产者/调理交接；地理；期间 |
| Binding | `fixed` |

详情读取确认了产品流、Castor Seed、精确 CPC 01447 和质量属性。平台地理、交接点和路线字段为空，因此必须由前景数据包提供，不得从 UUID 推断。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格种子 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含包装和大块蒴壳的净种子质量。 |
| `moisture_basis` | 蒴果、种子、拒收物和损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 及湿基 % | 每次交接测量水分；干物质=湿质量×（1−含水率），并披露换算。 |
| `area_period` | 栽培 | 面积和时间 | ha 及报告期 | 多年生植株须区分建植、生产年度、替换和终止记录。 |
| `energy_consistency` | 机械和干燥能源 | 与载体匹配 | 原始单位及 MJ | 保留实测载体单位，并使用有记录的换算。 |

## 5. 系统边界

前景边界始于申报的受控田块或多年生植株，止于合格种子交接。栽培、收获、分离、干燥/清理和分级是具有独立物料状态、损失、投入及交接的责任节点。分批采摘连接田块和批次；终期收获关闭作物周期。蓖麻油提取在边界外。

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 已建植田块或植株，并申报地理、面积、品种、路线、年龄或阶段、前期土地利用及土壤管理语境 |
| starting_condition_role | 前景受控生物生产起点；多年生建植和终止通过跨期归属保持可见 |
| product_classification_scope | CPC 3.0 01447；分类不定义水分、交接点、路线或等级 |
| recursive_input_rule | 购入蓖麻播种材料是区别于参考产品的上游投入；混入批次的购入收获蓖麻籽需要独立上游数据集和质量披露 |
| upstream_dataset_requirement | 购入播种材料、养分、水、植保产品、能源和外部服务在具体身份解析后需要代表性上游数据集 |
| disclosure | 申报路线、阶段、收获模式、技术、水分、内部交接、拒收/返工路径及准确交接点 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_to_seed` | 前景系统 | 包括作物管理、蒴果采收、种子分离、干燥、清理、分级和内部转移；排除榨油。 | `fao-ecocrop-ricinus-communis`; `icar-castor-depodder-2009` |
| `route_separation` | 一年生及多年生路线 | 在加权混合前分别建模建植、生产、替换、终止和投入特征。 | `fao-ecocrop-ricinus-communis` |
| `conditioning_gate` | 收获后节点 | 包括生产者调理；当外部初级调理者供应参考产品时，将其作为前景或透明上游过程建模。 | `icar-castor-depodder-2009` |
| `material_state_control` | 种子及残余物 | 分开记录种子、蒴壳残余物、拒收物、粉尘和去向；不得假定蓖麻残余物可作饲料。 | `fao-ecocrop-ricinus-communis` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | 作用 | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cultivation` | 蓖麻田间栽培 | `required` | 一年生作物周期或多年生植株的申报生产期 | 管理蓖麻直至蒴果达到可收获成熟度 | 申报田块面积与期间 |
| `harvest` | 分批采摘或终期收获 | `required` | 必须申报收获模式 | 独立于栽培和调理采收成熟蒴果 | 采收成熟蒴果 kg |
| `pod_seed_separation` | 蒴果与种子分离 | `required` | 收获蒴果在种子交接前处理 | 按记录路线从蒴果中分离种子 | 接收蒴果 kg |
| `drying_cleaning` | 种子干燥与清理 | `required` | 仅当进料水分已达规范时主动干燥量可为零 | 稳定水分并去除杂质 | 接收原始种子 kg |
| `grading_handoff` | 分级与交接 | `required` | 每批必须分为合格、降级/返工或拒收 | 形成申报等级与最终合格状态 | 接收干燥清洁种子 kg |

栽培按田块及作物周期或多年生阶段记录。收获后节点按批次、生产周期或连续报告期记录。投入、产出、清洁、换批及共用负荷必须带相同运行或期间标识；同一共用负荷不得同时作为生产周期总量和批次分摊量重复计入。

### 过程: 蓖麻田间栽培 (`cultivation`)

#### 投入

##### 产品流

###### 合并肥料与养分供应 (`nutrient_supply`)

将矿质肥料、有机肥、石灰和养分改良剂合并为一张栽培卡；具体交换由前景记录展开。

- 选定流: 前景记录选定的养分物料
- 流属性/单位: Mass / kg
- 绑定: `parameterized`
- 流集: `flow-set.agricultural-nutrient-supply`
- 流集版本: `0.3.0`
- 数量规则: 按产品计量供应质量并保留养分组成
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每田块面积及作物周期或生产期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 数量范围: 养分物料 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5000
  - 单位: kg/ha
  - 基准: 每公顷及申报期间；以实际产品为准
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 灌溉水供应 (`irrigation_water`)

记录供应的灌溉水；降雨不是产品投入。

- 选定流: 由前景记录选定的灌溉过程用水
- 流属性/单位: Mass / kg
- 绑定: `parameterized`
- 流集: `flow-set.water-use`
- 流集版本: `0.2.0`
- 流集分组: `irrigation-water`
- 数量规则: 计量或测量送至田块的水量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每田块面积及申报期间
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 数量范围: 灌溉 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000000
  - 单位: kg/ha
  - 基准: 每公顷及期间；雨养生产可为零
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 栽培能源供应 (`cultivation_energy`)

记录整地、播种、灌溉、作物管理及多年生植株维护所用能源载体。

- 选定流: 由设备和票据记录选定的能源载体
- 流属性/单位: Energy or carrier-specific property / measured carrier unit
- 绑定: `parameterized`
- 流集: `flow-set.energy-supply`
- 流集版本: `0.2.0`
- 数量规则: 按田间作业计量燃料或电力
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每田块面积及申报期间
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 数量范围: 栽培能源 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50000
  - 单位: MJ/ha
  - 基准: 每公顷及期间的折算终端能源
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 产出

##### 产品流

###### 可收获成熟蒴果作物 (`mature_capsules`)

成熟蒴果向收获节点的内部交接；不是市场参考产品。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 由收获记录计算可收获蒴果质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每田块及期间
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_lots`
- 数量范围: 蒴果产量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: kg/ha
  - 基准: 按实测水分计的每公顷湿蒴果质量
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 申报的田间排放 (`field_emissions`)

逐一记录物质及接收环境介质；在创建最终交换前解析二者。

- 选定流: 按申报物质及环境介质保持未解析
- 流属性/单位: Mass / kg substance
- 数量规则: 实测释放量或由采集活动数据计算的方法结果
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每田块面积及期间
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 数量范围: 逐物质排放 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg/ha
  - 基准: 每种物质分别按每公顷及期间计
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 分批采摘或终期收获 (`harvest`)

#### 投入

##### 产品流

###### 来自栽培的成熟蒴果 (`harvest_capsule_input`)

将每次收获事件连接到其田块的内部投入。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 分配至每次采摘或终期收获事件的质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每次收获事件
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_lots`
- 数量范围: 收获事件核算范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: percent of field-period mature capsule mass
  - 基准: 各事件份额应与扣除田间损失后的 100% 核对
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 收获能源供应 (`harvest_energy`)

记录申报的人工辅助或机械收获路线所用燃料或电力。

- 选定流: 由设备记录选定的能源载体
- 流属性/单位: Energy or carrier-specific property / measured carrier unit
- 绑定: `parameterized`
- 流集: `flow-set.energy-supply`
- 流集版本: `0.2.0`
- 数量规则: 分配至收获事件的实测能源消耗
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 采收蒴果
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 数量范围: 收获能源 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: MJ/kg captured capsules
  - 基准: 申报技术的折算终端能源
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 产出

##### 产品流

###### 已收获蓖麻蒴果 (`harvested_capsules`)

向分离节点移交的内部已采收蒴果状态，保留采摘顺序和水分。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 每次事件离开的实测净蒴果质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每次收获事件
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_lots`
- 数量范围: 收获蒴果批量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1000000
  - 单位: kg/event
  - 基准: 按实测水分计的湿蒴果质量
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 未采收或丢弃的收获物料 (`harvest_loss`)

将田间损失和伴生物料与已采收蒴果分开；身份与去向依据实测记录。

- 选定流: 由前景记录解析的未确定废物流身份与去向
- 流属性/单位: Mass / kg
- 数量规则: 实测、抽样或质量平衡得出的损失
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 采收蒴果
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_lots`
- 数量范围: 收获损失 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg captured capsules
  - 基准: 在相同水分基准下的损失
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 蒴果与种子分离 (`pod_seed_separation`)

#### 投入

##### 产品流

###### 收获蒴果投入 (`separation_capsule_input`)

连接分离运行与收获批次的内部投入。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 投入该运行的实测蒴果质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每次分离运行
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 分离运行投入范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1000000
  - 单位: kg/run
  - 基准: 按实测水分计的蒴果质量
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 分离能源供应 (`separation_energy`)

记录人工辅助或机械脱蒴及分离的能源。

- 选定流: 由设备记录选定的能源载体
- 流属性/单位: Energy or carrier-specific property / measured carrier unit
- 绑定: `parameterized`
- 流集: `flow-set.energy-supply`
- 流集版本: `0.2.0`
- 数量规则: 按运行计量能源消耗
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 原始分离种子
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 数量范围: 分离能源 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: MJ/kg raw seed
  - 基准: 申报技术的折算终端能源
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 产出

##### 产品流

###### 原始分离蓖麻籽 (`raw_separated_seed`)

已脱离大块蒴壳但尚未达到最终水分、洁净度或等级的内部种子。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 离开分离节点的实测原始种子质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每次分离运行
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 原始种子回收 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.05
  - 上限: 1
  - 单位: kg/kg capsule input
  - 基准: 按记录水分计每 kg 蒴果投入的原始种子
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 蒴壳与分离残余物 (`pod_residues`)

按状态和去向记录蒴壳、碎片及未回收物料；不得假定饲料用途。

- 选定流: 由前景记录解析的未确定废物流身份与去向
- 流属性/单位: Mass / kg
- 数量规则: 按去向计量残余物或质量平衡差额
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 原始分离种子
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 蒴壳残余物 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg/kg raw seed
  - 基准: 在相同水分基准下的残余物
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 种子干燥与清理 (`drying_cleaning`)

#### 投入

##### 产品流

###### 原始分离种子投入 (`drying_seed_input`)

将调理批次连接到分离节点并保留进料水分和杂质信息。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 接收的实测原始种子质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个干燥清理批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 调理批次投入范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1000000
  - 单位: kg/lot
  - 基准: 按实测水分计的原始种子
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 干燥与清理能源供应 (`conditioning_energy`)

记录主动干燥、输送、风选、清理及换批清洁所用能源载体。

- 选定流: 由设备记录选定的能源载体
- 流属性/单位: Energy or carrier-specific property / measured carrier unit
- 绑定: `parameterized`
- 流集: `flow-set.energy-supply`
- 流集版本: `0.2.0`
- 数量规则: 分配至批次或生产周期的实测消耗
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 干燥清洁种子
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_energy_records`
- 数量范围: 调理能源 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: MJ/kg output
  - 基准: 无购买能源的自然干燥可为零
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 产出

##### 产品流

###### 干燥清洁蓖麻籽 (`dry_clean_seed`)

具有申报水分和杂质、可供分级但尚未验收的内部产出。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 干燥和清理后的实测种子质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个调理批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 干燥清洁回收 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1
  - 单位: kg/kg raw seed
  - 基准: 每 kg 投入的产出并披露水分换算
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 清理拒收物与杂质 (`cleaning_rejects`)

当去向不同时，分别记录蒴壳碎片、石块、土壤、粉尘及受损种子。

- 选定流: 由前景记录解析的未确定废物流身份与去向
- 流属性/单位: Mass / kg
- 数量规则: 扣除移除水分后的实测拒收物质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 干燥清洁种子
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 清理拒收物 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg output
  - 基准: 每 kg 产出的非水拒收物
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 排至空气的移除水分 (`water_to_air`)

当数据模型要求该交换时，根据匹配的湿基含水率测量计算移除水分。

- 选定流: 按数据包约定待解析的排至空气水身份
- 流属性/单位: Mass / kg
- 数量规则: 进料湿质量×进料含水率减出料湿质量×出料含水率
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 干燥清洁种子
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_lots`
- 数量范围: 移除水分 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: kg water/kg output
  - 基准: 无需干燥时为零
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 分级与交接 (`grading_handoff`)

#### 投入

##### 产品流

###### 干燥清洁种子投入 (`grading_seed_input`)

连接到调理批次并保留水分和杂质信息的内部投入。

- 选定流: 内部前景物料状态；无需外部 UUID
- 流属性/单位: Mass / kg
- 数量规则: 投入分级的实测种子质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个分级批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 分级批次投入范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.1
  - 上限: 1000000
  - 单位: kg/lot
  - 基准: 每批干燥清洁质量
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 产出

##### 产品流

###### 交接时合格蓖麻籽 (`accepted_castor_seed`)

唯一参考产品：经分离、必要干燥、清理和分级后、榨油前的收获未加工种子。

- 选定流: Castor Seed（蓖麻籽）`d52055a9-c05b-4edd-ad58-f3271a360458`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定: `fixed`
- 数量规则: 申报水分下 1,000 kg 净合格种子
- 数值来源模式: 固定值 (`fixed_value`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 一个参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 身份引用 (`identity_reference`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 参考流等式校验
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流的净合格种子
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 降级或返工种子 (`downgraded_rework_seed`)

将不合格种子送至一个申报的内部返工回路或外部降级去向；具体外部身份延期解析。

- 选定流: 内部返工状态或未解析的降级产品身份
- 流属性/单位: Mass / kg
- 数量规则: 合格等级之外的实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 合格种子
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 降级/返工 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg accepted seed
  - 基准: 每 kg 合格产出的不合格质量
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 最终分级拒收物 (`grading_rejects`)

按状态和去向记录丢弃种子及杂质；从合格产出中排除。

- 选定流: 由前景记录解析的未确定废物流身份与去向
- 流属性/单位: Mass / kg
- 数量规则: 离开分级节点的实测拒收物质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 合格种子
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_handoff`
- 数量范围: 最终拒收物 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg accepted seed
  - 基准: 每 kg 合格产出的拒收物
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_balance_first` | 所有节点 | 分配前完成物理质量和干物质平衡；保持水分损失、残余物、田间损失、返工、降级、拒收物和合格种子可见。 |  |
| `allocation_single_intended_product` | 作物路线 | 默认仅合格种子是预期产品。残余物和拒收物承担至其去向的负荷；任何联产品主张须披露功能及与目标一致的分配。 |  |
| `allocation_rework` | 返工回路 | 负荷随物料返回分离、清理、干燥或分级；返料只计一次，合格前不得计入合格产出。 |  |
| `allocation_run_period` | 共用运行 | 用披露的因果驱动因素一次分配共用能源、清洁及换批负荷；不得同时计入运行总量和批次份额。 |  |
| `allocation_multi_period` | 多年生路线 | 区分建植、生产、替换和终止；按有证据的生产产出归属各阶段并防止重复归属。 | `fao-ecocrop-ricinus-communis` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `cultivation` | 养分和灌溉 | 票据、施用日志、仪表 | field_id; route; phase; product; composition; quantity; unit; date | 核对采购与田间施用 | 原始单位及 kg | 每次施用 | 作物周期或生产期 | 每个田块 | 按田块、物料和期间汇总，保留零用量 | 票据、仪表、施用及校准记录 |
| `cp_energy_records` | 所有节点 | 燃料和电力 | 领用、仪表、设备日志 | process_id; run_id; carrier; quantity; unit; equipment; hours; driver | 直接计量或有记录的计算 | 原始单位及 MJ | 每次运行或期间 | 完整前景期 | 每个田块/设施 | 按载体和节点汇总且只分配一次 | 票据、仪表、日志、换算因子 |
| `cp_harvest_lots` | `harvest` | 蒴果和田间损失 | 称量单和样本 | field_id; event_id; date; pattern; technology; mass; moisture; loss | 每批称量并记录损失抽样 | kg 及湿基 % | 每次事件 | 所有采摘或终期收获 | 每个田块 | 水分核对后汇总事件 | 校准、样本、追溯 |
| `cp_field_emissions` | `cultivation` | 物质 | 测量和计算 | substance; compartment; activity; factor; result; unit; method | 实测或使用申报方法 | kg 物质 | 事件或期间 | 完整期间 | 每个田块 | 保留物质及环境介质身份 | 方法、原始数据、计算 |
| `cp_conditioning_lots` | `pod_seed_separation`; `drying_cleaning` | 种子、残余物、水分 | 批次表和测试 | run_id; masses; moisture; residues; rejects; destination; technology | 称量投入产出并抽样水分 | kg 及湿基 % | 每次运行/批次 | 所有供应批次 | 每个场址 | 按运行核对湿质量和干物质 | 秤、测水方法、追溯 |
| `cp_grading_handoff` | `grading_handoff` | 合格、降级、返工、拒收 | 分级及发运记录 | lot_id; masses; grade; impurity; moisture; destinations; gate | 称量各状态并连接发运/返工 | kg 及等级指标 | 每批 | 所有供应批次 | 每个场址 | 仅合格量进入参考产出，返工只计一次 | 秤、规范、追溯 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 投入 | 产出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | 物料交接 | 干物质=湿质量×（1−湿基含水率）；目标湿质量=干物质÷（1−目标含水率） | 质量、实测水分、目标水分 | 水分一致质量 |  |
| `calc_stage_yield` | 所有节点 | 转移产出干物质÷投入干物质 | 连接的质量和水分 | 阶段产率 |  |
| `calc_field_yield` | 田间路线 | 合格产出干物质÷占用面积，保留路线阶段和收获事件 | 产出、水分、面积、期间 | kg 干物质/ha-期间 |  |
| `calc_shared_run` | 生产周期/连续运行 | 共用负荷×批次驱动量÷运行总驱动量 | 运行负荷和驱动量 | 一次分配的批次负荷 |  |
| `calc_perennial_attribution` | 多年生路线 | 按有证据的生产产出归属阶段负荷；披露剩余植株和终止处理 | 阶段记录及产出 | 期间负荷 | `fao-ecocrop-ricinus-communis` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 每批核实物种、收获未加工状态、CPC 语境、等级、水分和交接点。 | 规范、详情证据、发运记录 |
| `dq_traceability` | 过程图 | 无重复质量地连接田块、事件、分离运行、调理批次、分级/返工和发运。 | 标识符和核算 |
| `dq_temporal` | 路线 | 覆盖一年生周期或报告的多年生期间，并识别期间外的建植、替换和终止。 | 日期记录 |
| `dq_measurement` | 质量/水分 | 使用校准秤和有记录的测水方法；披露抽样及缺口。 | 校准和测试记录 |
| `dq_completeness` | 所有卡 | 每张适用卡及去向记录零值、实测值或有记录的缺口。 | 完整清单和质量平衡 |
| `dq_technology` | 替代路线 | 聚合前识别人工/机械收获和分离以及自然/主动干燥。 | 设备和运行记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求固定 Castor Seed UUID、质量属性/单位组及所有 PCR 补充的交接点、路线、状态和水分限定词。 |  |
| `validate_route` | 栽培/收获 | 每条未分段记录要求一个一年生或多年生路线及一个分批采摘或终期收获声明；事件与田块总量核对。 | `fao-ecocrop-ricinus-communis` |
| `validate_process_chain` | 过程图 | 要求栽培、收获、分离、干燥/清理及分级交接；购买干燥能源为零须有水分证据。 | `icar-castor-depodder-2009` |
| `validate_mass_moisture` | 物料节点 | 核对湿质量和干物质，并分开报告移除水分、残余物、损失、返工、降级和拒收物。 |  |
| `validate_flow_resolution` | 交换 | 最终 TIDAS 生成前，将每张流集卡解析为已核实具体 UUID，并按物质/物料状态、方向、去向、属性和单位解析每个延期身份。 |  |
| `validate_nutrient_cardinality` | 栽培 | 最多允许一张合并的 `flow-set.agricultural-nutrient-supply@0.3.0` 卡且不得带 group。 |  |
| `validate_period_attribution` | 多年生路线 | 要求建植、生产、替换、终止及剩余植株处理并防止重复归属。 | `fao-ecocrop-ricinus-communis` |
| `validate_rework_reject` | 收获后节点 | 每种不合格状态终止于返工、降级、回收或废弃，合格前不得计入合格产出。 |  |
| `validate_run_attribution` | 运行 | 要求运行/期间标识和一个分配驱动因素；拒绝运行总量与批次份额重复。 |  |
| `validate_extraction_exclusion` | 系统 | 拒绝将种子压榨、蓖麻油提取、精炼或衍生物制造纳入边界。 |  |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 申报生产者或初级调理交接点的收获未加工蓖麻籽前景数据集 |
| downstream_use | 经代表性审查后可作 `secondary_dataset`；`background_dataset` |
| allowed_use | 榨油前种子供应；仅在水分、交接点、路线、等级和分配一致时比较 |
| excluded_use | 榨油/精炼；粕/衍生物；播种用种子认证；安全评估；未披露路线混合 |
| required_metadata | 地理；期间；品种；路线；植株阶段；收获模式；面积；技术；干燥模式；水分；等级；杂质；交接点；分配；返工；具体身份 |
| required_quality_disclosure | 一手数据占比；缺口；不确定性；超出 Range；平衡；流集展开证据；延期身份决定；多年生归属 |
| update_trigger | 规范、交接点、路线、收获模式、技术、水分、等级、供应组合、分配、流集版本或 UUID 证据变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-ecocrop-ricinus-communis` | official_guidance | FAO EcoCrop，*Ricinus communis*，https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=1866 | 物种/种子身份；一年生与短寿命多年生语境；路线及期间申报 |
| `icar-castor-depodder-2009` | official_guidance | ICAR News，2009 年 4–6 月，“Castor depodder and decorticator”，https://icar.gov.in/sites/default/files/2022-04/ICAR-News-April-June-09.pdf | 蒴果/种子分离；清理/分级；水分敏感的机械路线 |
