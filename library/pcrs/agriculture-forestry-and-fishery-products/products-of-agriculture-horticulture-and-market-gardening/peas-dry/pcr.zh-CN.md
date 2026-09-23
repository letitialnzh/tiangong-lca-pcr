---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peas-dry
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 干豌豆

## 1. 范围与适用性

本 PCR 适用于受管理一年生种植体系生产、以未加工整粒状态在农场门交付的成熟干燥田豌豆（*Pisum sativum*）籽粒。边界包括建植与田间管理、直接联合收割或割晒后联合收割、脱粒、农场清理与分级，以及条件性通风或干燥。

排除青鲜豌豆、饲草与青贮、作为种子销售的商品、分瓣或磨粉豌豆、豌豆粉、蛋白或淀粉分离物、浓缩物、罐藏品及熟制品。必须声明品种或市场类别、地理、作物年度、雨养或灌溉制度、收获路线、水分基准、等级或去向、损伤与杂质以及调理路线。

受管理的生物生产是父活动。雨养/灌溉生产、直接/割晒收获以及环境通风/加热干燥替代路线在按产量质量加权汇总前，必须按田块或批次分别记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peas-dry |
| classification_refs | CPC 3.0: 01705 干豌豆 |
| covered_products | Mature dry whole field pea grain of *Pisum sativum*, including yellow, green and other food or feed market classes, at farm gate |
| excluded_products | Green peas; forage or silage; planting seed products; split, milled, dehulled, fractionated, concentrated, canned or cooked peas |
| representative_product | Cleaned and graded mature dry whole field pea grain |
| production_route | Managed field production; direct or windrow harvest; combining/threshing; farm cleaning/grading; conditional aeration or drying |
| market_state | Harvested whole grain, unprocessed, at farm gate, with declared moisture, 等级/去向 and damage state |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象 | 农场门成熟干燥整粒田豌豆粮 |
| 数量 | 1 kg 净验收合格籽粒 |
| 质量要求 | Declared market class, moisture, 等级/去向, foreign-material and damaged fractions, harvest and conditioning routes |
| 时间或周期 | 一个单一期间作物周期及其全部关联采后批次 |
| reference_flow_link | Net accepted `grading_cleaning` output, or `drying_aeration` output when stabilization occurs |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 干豌豆 `e64a5cdb-c922-45d9-90ab-c9dd573032f7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种与市场类别; 整粒干粮状态; 地理; 作物年度; 水分及其基准; 等级/去向; 收获路线; 干燥/通风状态; 受损及杂质比例 |
| 绑定模式 | 固定 (`fixed`) |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference pea product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net accepted grain at declared moisture; exclude foreign matter, rejects, packaging and field loss. |
| `moisture_basis` | Grain hand-offs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and mass-% | Record wet mass and wet-basis moisture at each hand-off and reconcile dry matter before normalization. |
| `nutrient_product_mass` | Consolidated nutrient supply | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg product and kg nutrient | Retain each product and N, P2O5, K2O or amendment composition before aggregation. |
| `area_to_mass` | Field records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | Divide crop-cycle field totals by net accepted grain attributed to the same field or lot. |

## 5. 系统边界

前景边界始于种子和其他技术圈投入进入豌豆田，止于验收合格的整粒干豌豆在农场门交付。纳入田间作业与排放、收获/脱粒、清理/分级及必要调理。收获节点独立地将成熟作物转为收获批次；初级调理将原粮转为分类输出；主动干燥或通风是有界稳定化节点。田间自然干燥保留在田间生产中。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | Field prepared for the crop cycle, with seed and externally supplied inputs entering the farm boundary |
| starting_condition_role | Start of managed annual dry-pea production |
| product_classification_scope | Mature dry whole *Pisum sativum* grain; excludes green peas, forage, seed products and processed fractions |
| recursive_input_rule | Exceptional purchased dry peas used for reseeding or blending are separate upstream product inputs and never inherit this foreground result without an independent dataset. |
| upstream_dataset_requirement | Each purchased seed, nutrient product, crop-management product, energy carrier, water supply and service requires an upstream dataset or disclosed gap. |
| disclosure | Field, 作物年度, prior crop, production regime, 收获路线, conditioning steps, lot moisture and 等级/去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | All processes | Include establishment through accepted farm-gate grain and linked residues, losses, rejects and direct field emissions; exclude downstream splitting, milling, fractionation, cooking and packaging. | `ndsu-field-pea-production-2021`; `saskatchewan-dry-pea-guide` |
| `boundary_harvest_routes` | `harvest_threshing` | Direct combining and windrowing are mutually exclusive by batch unless separate areas or lots are evidenced; include threshing. | `ndsu-field-pea-production-2021`; `saskatchewan-pea-harvest-management` |
| `boundary_conditioning` | `grading_cleaning`; `drying_aeration` | Include farm cleaning, grading, aeration and drying; activate stabilization only from measured lot condition and record route, energy and moisture change. | `saskatchewan-dry-pea-guide` |
| `boundary_route_separation` | Alternatives | Keep rainfed/irrigated, direct/windrow and ambient/heated route records separate until production-mass weighting. | `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 干豌豆田间管理生产 | required | 始终 | 受管理的生物生产，雨养与灌溉制度构成路线差异 | 田块面积与作物周期可收获籽粒 |
| `harvest_threshing` | 收获、联合收割与脱粒 | required | 按批次选择直接收获或割晒，作为替代技术路线 | 独立收获与脱粒 | 成熟作物投入与原粮输出 |
| `grading_cleaning` | Farm cleaning and grading | required | 始终 | 初级调理与去向分级 | Raw grain input and accepted lot output |
| `drying_aeration` | Conditional drying and aeration | conditional | 农场门交付前使用主动通风或加热时 | 保存与稳定化 | Incoming wet grain and stabilized output |

### 过程：干豌豆田间管理生产 (`field_production`)

使用田块和作物年度批次记录，将所有投入、预期作物、残余物和直接排放关联到同一批次。

#### 输入

##### 产品流

###### 播种材料 (`planting_seed`)

Record pea seed actually sown; reference grain sold as planting seed remains excluded.

- 选定流： 干豌豆播种材料
- 流属性/单位： 质量 / kg
- 数量规则： Measured seed mass sown
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷 sown and 每 1 kg 验收合格籽粒
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_inputs`
- 数量范围： 播种量 QA 筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 80
  - 上限： 350
  - 单位： kg seed/ha sown
  - 基准： One hectare sown in one crop cycle
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 合并的矿质、有机及改良剂养分供应 (`nutrient_supply`)

此单一卡片覆盖全部矿质肥料、有机肥料、石灰材料和含养分改良剂。实际产品及其组成必须在前景记录中分别保留。

- 选定流： 农业养分供应产品
- 流属性/单位： 质量 / kg product and kg nutrient
- 绑定模式： 参数化 (`parameterized`)
- 流集： `flow-set.agricultural-nutrient-supply`
- 流集版本： `0.3.0`
- 数量规则： Sum product masses after retaining identity, N, P2O5, K2O, amendment composition, treated area and application method
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷 treated and 每 1 kg 验收合格籽粒
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_inputs`
- 来源： `ndsu-field-pea-fertility-2023`
- 数量范围： 养分产品总量 QA 筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000
  - 单位： kg products/ha treated
  - 基准： Consolidated supplied product mass per treated hectare
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 作物管理产品 (`crop_management_products`)

Record formulated inoculants without declared nutrients, herbicides, fungicides, insecticides and desiccants by product and active ingredient.

- 选定流： 作物管理产品
- 流属性/单位： 质量 / kg formulated product
- 数量规则： Measured formulated mass with active ingredient, concentration, area and event
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷 treated and 每 1 kg 验收合格籽粒
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_inputs`
- 数量范围： 制剂产品 QA 筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kg products/ha treated
  - 基准： Sum of formulated products per treated hectare
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 灌溉水 (`irrigation_water`)

Record gross delivered water, source and conveyance; zero requires a documented rainfed crop.

- 选定流： 灌溉水供应
- 流属性/单位： 体积 / m3
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则： Metered or calculated gross water delivered
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷 irrigated and 每 1 kg 验收合格籽粒
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_field_water`
- 来源： `fao-crop-water-needs`
- 数量范围： 季节用水上限筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： m3 irrigation water/ha
  - 基准： Gross irrigation 每公顷; upper bound corresponds to 500 mm seasonal pea crop-water need and is not a default
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `fao-crop-water-needs`

###### 田间作业能源 (`field_energy`)

保留每种燃料或电力载体及其对应作业。

- 选定流： 田间作业能源载体
- 流属性/单位： Energy or carrier mass/volume
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则： Metered use or equipment-hour calculation for establishment, application, irrigation and management
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷 and 每 1 kg 验收合格籽粒
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_field_energy`
- 数量范围： 燃料当量 QA 筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 250
  - 单位： L diesel-equivalent/ha
  - 基准： Field operations excluding harvest
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入收获的成熟作物 (`mature_crop`)

该预期输出记录联合收割前的可收获成熟籽粒当量，不含落粒和未回收作物。

- 选定流： 成熟直立干豌豆作物
- 流属性/单位： 质量 / kg harvestable grain equivalent
- 数量规则： Field area, measured harvest mass, moisture correction and field-loss calculation
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷 harvested
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_field_output`
- 数量范围： 产量 QA 筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 300
  - 上限： 6000
  - 单位： kg harvestable grain/ha
  - 基准： Mature grain at declared moisture per harvested hectare
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 田间秸秆与荚壳生物质 (`field_residue`)

当具有证据支持的交接点并被有意移除时，该流是预期共产品输出；否则为受管理残余物。分别记录留田/翻埋、移除、依法焚烧及其他去向；同一质量不得重复计数。

- 选定流： 田豌豆秸秆与荚壳生物质
- 流属性/单位： 质量 / kg dry matter
- 数量规则： Measured or calculated residue dry matter by destination
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷 and 每 kg 籽粒干物质
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_field_output`
- 来源： `fao-cropland-nutrient-balance-2025`
- 数量范围： 残余物与籽粒比筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.3
  - 上限： 4.0
  - 单位： kg residue dry matter/kg grain dry matter
  - 基准： Dry-matter ratio; FAO metadata gives dry-pea harvest index 0.41 as context
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 土壤直接氧化亚氮 (`direct_soil_n2o`)

根据适用的已记录氮库和选定 IPCC EF1 计算 N2O-N，再乘以 44/28 得到 N2O。

- 选定流： 排放至空气的氧化亚氮
- 流属性/单位： 质量 / kg N2O
- 数量规则： Sum applicable N pools × EF1 and convert N2O-N to N2O
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： Per kg 氮投入 and 每 1 kg 验收合格籽粒
- 基准类型： 氮投入 (`n_input`)
- 证据类型： 方法公式 (`method_formula`)
- 采集协议： `cp_field_emissions`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： 汇总 EF1 不确定性
  - 范围角色： 不确定性范围 (`uncertainty_range`)
  - 下限： 0.002
  - 上限： 0.018
  - 单位： kg N2O-N/kg N input
  - 基准： Applicable N additions to managed mineral soil
  - 基准类型： 氮投入 (`n_input`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `ipcc-2019-managed-soils`

### 过程：收获、联合收割与脱粒 (`harvest_threshing`)

收获独立于受管理生长和调理。每一批次声明直接联合收割或割晒、日期、面积、作物状态、能源、入料水分、籽粒、秸秆/荚壳、落粒和损伤。

#### 输入

##### 产品流

###### 进入收获的成熟作物 (`harvest_crop_input`)

该投入将成熟田间作物转入声明的收获批次。

- 选定流： 成熟直立或条铺干豌豆作物
- 流属性/单位： 质量 / kg harvestable grain equivalent
- 数量规则： Same-batch transfer from `mature_crop`
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 路线特定 (`route_specific`)
- 归一化基准： 每个收获批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_batch`
- 数量范围： 转移核对
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.98
  - 上限： 1.02
  - 单位： kg input/kg transferred mature crop
  - 基准： Same field and batch before harvest loss
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

###### 收获能源 (`harvest_energy`)

该投入为声明的收获与脱粒作业提供能源。

- 选定流： 收获作业能源载体
- 流属性/单位： Energy or carrier mass/volume
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则： Metered use or equipment-hour calculation for swathing, combining, threshing and transfer
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 路线特定 (`route_specific`)
- 归一化基准： 每公顷 and 每 kg 原粮
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_batch`
- 数量范围： 燃料当量 QA 筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 2
  - 上限： 120
  - 单位： L diesel-equivalent/ha
  - 基准： Selected harvest and threshing route per harvested hectare
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收获的豌豆原粮 (`raw_harvested_grain`)

该输出为转入农场清理的脱粒原粮批次。

- 选定流： 脱粒干豌豆原粮
- 流属性/单位： 质量 / kg
- 数量规则： Weighed or calibrated mass with moisture, foreign matter and damage
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每个收获批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_batch`
- 数量范围： 原粮比例筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.20
  - 上限： 0.85
  - 单位： kg raw grain/kg incoming grain plus separable biomass
  - 基准： Same batch at measured moisture
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 收获分离的秸秆与荚壳 (`harvest_residue_output`)

该输出按去向记录分离的秸秆与荚壳材料。

- 选定流： 收获分离的豌豆秸秆与荚壳
- 流属性/单位： 质量 / kg dry matter
- 数量规则： Measured bale mass or declared residue calculation by destination
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每个收获批次 and kg grain dry matter
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_batch`
- 数量范围： 残余物交接筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 4.0
  - 单位： kg residue dry matter/kg grain dry matter
  - 基准： Harvest-separated residue relative to grain dry matter
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 破碎或受损籽粒 (`harvest_damaged_grain`)

将开裂、破碎、未成熟或降级籽粒送往饲料、再清理或其他命名交接点，并从合格输出中排除。

- 选定流： 可回收受损干豌豆籽粒
- 流属性/单位： 质量 / kg
- 数量规则： Measured mass by damage state and destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每个收获批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest_batch`
- 数量范围： 受损籽粒筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.20
  - 单位： kg damaged grain/kg raw grain
  - 基准： Same harvest batch before cleaning
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 落粒及未回收收获损失 (`harvest_shatter_loss`)

该损失记录留在田间、未被回收的籽粒。

- 选定流： 未回收干豌豆收获损失
- 流属性/单位： 质量 / kg grain
- 数量规则： Field-loss measurement or balance residual excluding damaged grain and residue
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 路线特定 (`route_specific`)
- 归一化基准： 每个收获批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_harvest_batch`
- 来源： `saskatchewan-pea-harvest-management`
- 数量范围： 收获损失筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.25
  - 单位： kg unrecovered grain/kg harvestable input
  - 基准： Same field and harvest batch
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：农场清理与分级 (`grading_cleaning`)

按批次或作业期运行。合格、降级、拒收和返工状态各有一个交接点。关联每次返工，并将清仓/夹带仅一次归属于引发该事项的作业期。

#### 输入

##### 产品流

###### 进入清理的原粮 (`cleaning_raw_grain`)

该投入将收获原粮批次转入清理与分级。

- 选定流： 脱粒干豌豆原粮
- 流属性/单位： 质量 / kg
- 数量规则： Same-lot transfer from `raw_harvested_grain`
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每个清理批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_lot`
- 数量范围： 投入核对
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.98
  - 上限： 1.02
  - 单位： kg input/kg transferred raw grain
  - 基准： Same lot before cleaning
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

###### 清理与分级能源 (`cleaning_energy`)

该投入为清理、输送和分级设备提供能源。

- 选定流： 清理与分级能源载体
- 流属性/单位： 能源 / kWh or carrier unit
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则： Metered energy or runtime × verified demand
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每吨原粮
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_cleaning_lot`
- 数量范围： 清理能源筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kWh/t raw grain
  - 基准： Cleaning/grading campaign excluding drying
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的清洁分级豌豆粮 (`accepted_pea_grain`)

除非随后进行条件性稳定化，否则这是参考输出。

- 选定流： 干豌豆 `e64a5cdb-c922-45d9-90ab-c9dd573032f7`
- 流属性/单位： 质量 / kg
- 绑定模式： 固定 (`fixed`)
- 数量规则： Net accepted mass after excluding foreign matter, rejects, downgrades and rework
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每个清理批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_lot`
- 数量范围： 合格产出率筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.70
  - 上限： 1.00
  - 单位： kg accepted grain/kg raw grain
  - 基准： Same lot at reconciled moisture
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 降级或返工籽粒 (`downgraded_rework_grain`)

该输出记录各降级或返回籽粒状态及其交接点。

- 选定流： 降级或返工干豌豆籽粒
- 流属性/单位： 质量 / kg
- 数量规则： Measured mass by destination and rework pass
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每个清理批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_lot`
- 数量范围： 降级/返工筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.25
  - 单位： kg downgraded or rework grain/kg raw grain
  - 基准： Same lot, counted once at final destination
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

###### 杂质与不可回收拒收物 (`cleaning_rejects`)

该输出按去向记录杂质与不可回收材料。

- 选定流： 清理杂质与不可回收拒收物
- 流属性/单位： 质量 / kg
- 数量规则： Measured soil, stones, weed seeds, spoiled material and fragments by destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每个清理批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_cleaning_lot`
- 数量范围： 清理拒收物筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.20
  - 单位： kg rejects/kg raw grain
  - 基准： Same cleaning lot
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

###### 未捕集清理粉尘 (`cleaning_dust`)

保留物质/种类和粒径证据；在核实前保持基本流 UUID 未解析。

- 选定流： 排放至空气的颗粒物，种类与粒径未解析
- 流属性/单位： 质量 / kg
- 数量规则： Measured release or balance after subtracting captured dust in rejects
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： 每吨原粮
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_cleaning_lot`
- 数量范围： 粉尘损失筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5
  - 单位： kg uncaptured dust/t raw grain
  - 基准： Campaign after captured reject reconciliation
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

### 过程：条件性干燥与通风 (`drying_aeration`)

可用的清洁入料需要经计量的稳定化处理。环境通风与加热干燥属于独立路线批次。萨斯喀彻温指南将水分不高于 16%、温度低于 15°C 视为安全储藏条件；应报告实际去向规范，不得将该筛选值视为普遍要求。

#### 输入

##### 产品流

###### 进入稳定化的籽粒 (`drying_grain_input`)

该投入将经计量的清洁批次转入主动稳定化。

- 选定流： 需稳定化的清洁干豌豆粮
- 流属性/单位： 质量 / kg
- 数量规则： Same-lot input mass with moisture, temperature, damage and destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每个稳定化批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_batch`
- 数量范围： 入料水分筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 10
  - 上限： 30
  - 单位： mass-% moisture, wet basis
  - 基准： Incoming lot before active stabilization
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

###### 干燥与通风能源 (`drying_energy`)

该投入按路线和批次提供风机电力与热能。

- 选定流： 干燥与通风能源载体
- 流属性/单位： 能源 / kWh or MJ by carrier
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则： Metered fan electricity and thermal carriers, separated by route
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 技术特定 (`technology_specific`)
- 归一化基准： Per tonne stabilized grain and kg water removed
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 由采集数据计算 (`calculated_from_collection`)
- 采集协议： `cp_drying_batch`
- 数量范围： 稳定化能源筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0.1
  - 上限： 500
  - 单位： kWh/t stabilized grain
  - 基准： Active aeration or drying batch
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化验收合格豌豆粮 (`stabilized_pea_grain`)

该输出为转移至农场门的稳定化验收合格批次。

- 选定流： 干豌豆 `e64a5cdb-c922-45d9-90ab-c9dd573032f7`
- 流属性/单位： 质量 / kg
- 绑定模式： 固定 (`fixed`)
- 数量规则： Net accepted output at measured final moisture, excluding damage and rejects
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 产品特定 (`product_specific`)
- 归一化基准： 每个稳定化批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_batch`
- 来源： `saskatchewan-dry-pea-guide`
- 数量范围： 储藏条件筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 10
  - 上限： 16
  - 单位： mass-% moisture, wet basis
  - 基准： Stabilized lot for ordinary storage; destination limits prevail
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 外部来源 (`external_source`)
  - 来源： `saskatchewan-dry-pea-guide`

##### 废物流

###### 干燥损伤或变质籽粒 (`drying_rejects`)

该输出按去向记录稳定化造成的损伤或变质。

- 选定流： 干燥损伤或变质豌豆籽粒
- 流属性/单位： 质量 / kg
- 数量规则： Measured reject mass by recovery, feed or disposal destination
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每个稳定化批次
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_drying_batch`
- 数量范围： 稳定化拒收物筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.10
  - 单位： kg rejected grain/kg incoming grain
  - 基准： Same stabilization batch
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 推理估算 (`reasoned_estimate`)

##### 基本流

###### 以水蒸气形式移除的水分 (`drying_water_vapour`)

该基本流输出表示从同一批次移除的水分。

- 选定流： 排放至空气的水蒸气
- 流属性/单位： 质量 / kg water
- 数量规则： Input water mass minus output water mass from wet-basis moisture balance
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每 kg 稳定化籽粒
- 基准类型： 过程输出 (`process_output`)
- 证据类型： 方法公式 (`method_formula`)
- 采集协议： `cp_drying_batch`
- 来源： `mass-balance-identity`
- 数量范围： 除水量筛选
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 0.30
  - 单位： kg water/kg incoming grain
  - 基准： Same stabilization batch
  - 基准类型： 过程输出 (`process_output`)
  - 证据类型： 方法公式 (`method_formula`)
  - 来源： `mass-balance-identity`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_field_outputs` | Grain and straw/pods | Avoid allocation when residue remains managed in-field material. Deliberately removed residue with an evidenced product hand-off is a co-product; use declared physical or economic allocation consistently and disclose sensitivity. | `mass-balance-identity` |
| `allocation_reject_routes` | Damage, downgrade, rework and rejects | Retain burdens through rework. Treat a downgraded sale/feed hand-off as intended output only with an evidenced destination; otherwise it is waste. Never count accepted and rejected mass together. | `mass-balance-identity` |
| `allocation_batches` | All batches | Attribute inputs, outputs, clean-out, carryover and changeover to the causing batch. Use processed-mass allocation for shared burdens only when direct metering is absent and never allocate one shared burden twice. | `mass-balance-identity` |
| `allocation_no_default_substitution` | Co-products | Do not apply avoided-burden credit by default; any downstream substitution reports the unallocated inventory, substituted product, ratio and evidence. | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_production` | Seed, nutrient and crop-management products | invoices, logs, labels | field_id; product_id; mass; composition; area; date; method | Reconcile stock and application logs | kg; kg nutrient; ha | Each application | 作物周期 | Field | Sum by product and field; retain composition | Invoice, label, applicator log |
| `cp_field_water` | `field_production` | Irrigation | meter/pump log | source; volume; runtime; area; dates | Meter or tested pump flow × runtime | m3; ha | Event | 作物周期 | Field | Sum gross delivered water | Calibration and irrigation log |
| `cp_field_energy` | `field_production` | Field energy | fuel/electricity log | operation; carrier; quantity; hours; area | Meter or verified rate calculation | L; kg; kWh; h | Operation | 作物周期 | Field | Sum by carrier and operation | Invoice, meter, equipment log |
| `cp_field_output` | `field_production` | Crop and residue | field/yield record | area; grain mass; moisture; residue; destination; loss | Weigh and moisture-test; declared residue method | kg; kg DM; ha; % | Harvest | 作物周期 | Field | Moisture-correct before aggregation | Scale, moisture and residue evidence |
| `cp_field_emissions` | `field_production` | Direct N2O | calculation record | N pools; climate; EF1; residue N | IPCC calculation from collected N | kg N; kg N2O | 作物周期 | 作物周期 | Field | Calculate by pool, sum once | Input ledger and factor version |
| `cp_harvest_batch` | `harvest_threshing` | Route, energy, outputs and losses | batch log | batch; field; route; area; fuel; masses; moisture; destinations | Weigh outputs; meter/calculate energy; loss check | kg; L; kWh; ha; % | Batch | Harvest window | Field/route | Reconcile all outputs and loss | Scale, moisture, route log |
| `cp_cleaning_lot` | `grading_cleaning` | Inputs, grades, rejects, rework, energy | lot/campaign log | lot; campaign; masses; moisture; energy; grade; pass; destination | Weigh all hand-offs and meter/calculate energy | kg; %; kWh | Lot/pass | Campaign | Lot | Count final destination once | Scale, grade test, energy record |
| `cp_drying_batch` | `drying_aeration` | Stabilization | bin/dryer log | batch; route; input/output mass, moisture and temperature; energy; duration; rejects | Weigh/test input/output; meter energy | kg; %; °C; kWh; MJ; h | Batch | Full intervention | Bin/batch | Dry-matter balance and water removal | Calibrated scale, meters, logs |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | Grain hand-offs | dry matter = wet mass × (1 − moisture fraction); equivalent target mass = dry matter ÷ (1 − target fraction) | wet mass; moisture | dry matter and adjusted mass | `mass-balance-identity` |
| `calc_field_normalization` | Field inventory | field amount ÷ same-field net accepted grain | field amount; accepted grain | amount/kg reference | `mass-balance-identity` |
| `calc_direct_n2o` | Soil N2O | N2O-N = Σ(N pool × EF1); N2O = N2O-N × 44/28 | N pools; EF1 | kg N2O | `ipcc-2019-managed-soils` |
| `calc_batch_balance` | Harvest/cleaning/drying | input = accepted + co-products/downgrades + rejects + losses + moisture change | all hand-off masses and moisture | closure and residual | `mass-balance-identity` |
| `calc_drying_water` | Stabilization | input wet mass × input moisture − output wet mass × output moisture | wet masses; moisture | kg water removed | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | Reference lot | Species, class, state, 作物年度, 地理, moisture, 等级/去向 and routes are present. | Lot and grade records |
| `dq_completeness` | All processes | Every card has a value; zero use requires explicit evidence. | Process checklist and ledgers |
| `dq_route_traceability` | Alternatives | Retain separate route identifiers until weighted aggregation. | Field/batch/campaign identifiers |
| `dq_mass_balance` | Harvest/cleaning/drying | Investigate unexplained dry-matter residual above 5% of input. | Moisture-corrected worksheet |
| `dq_temporal` | Dataset | Include a complete crop cycle and linked post-harvest batches. | Dates and crop-year records |
| `dq_representativeness` | Aggregation | Production-mass weight contributors and disclose exclusions. | Aggregation workbook |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail unless output is mature whole dry *Pisum sativum* grain with moisture, 等级/去向 and route qualifiers. | `ndsu-field-pea-production-2021` |
| `validate_route_topology` | Process map | Require field, harvest and cleaning nodes; require drying/aeration only when active, and reject unweighted mixed routes. | `saskatchewan-dry-pea-guide` |
| `validate_nutrient_cardinality` | `field_production` | Allow at most one nutrient Product-input card, bound only to `flow-set.agricultural-nutrient-supply@0.3.0` with no group; reject separate N, P, K, organic-fertilizer or amendment cards. | `ndsu-field-pea-fertility-2023` |
| `validate_output_destinations` | Outputs | Require one explicit hand-off for grain, residues, damage/downgrade, rework, foreign matter, rejects and loss; reject double counting. | `mass-balance-identity` |
| `validate_rework` | Cleaning/stabilization | Link each rework return to source lot, destination and pass; accepted output excludes unresolved reject/rework mass. | `mass-balance-identity` |
| `validate_batch_mode` | Harvest/cleaning/stabilization | Require batch/campaign boundaries and assign clean-out, carryover and shared energy once. | `mass-balance-identity` |
| `validate_ranges` | Inventory | Require exactly one complete Range per quantitative card with bounds, unit, denominator/basis, basis kind, evidence and required source ids. | `mass-balance-identity` |
| `validate_mass_balance` | Harvest/cleaning/drying | Require moisture-corrected reconciliation and review residual above 5%. | `mass-balance-identity` |
| `validate_drying_condition` | `drying_aeration` | Require input/output moisture and temperature, route, duration and energy; destination limits override the general storage screen. | `saskatchewan-dry-pea-guide` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Foreground cradle-to-farm-gate mature dry whole pea production dataset |
| downstream_use | Secondary or background dataset for compatible food, feed and processing models |
| allowed_use | Dry whole pea grain at farm gate with compatible 地理, year, regime, moisture and 等级/去向 |
| excluded_use | Green peas, forage/silage, planting seed products, split/milled/fractionated/concentrated/canned/cooked peas or unidentified mixed pulses |
| required_metadata | PCR id; CPC; UUID; species/class; 地理; 作物年度; field/lot; water regime; harvest and conditioning routes; moisture; 等级/去向; allocation; sources |
| required_quality_disclosure | Coverage; zero-use evidence; measured/estimated shares; range exceptions; mass-balance residual; rework; allocation sensitivity; representativeness |
| update_trigger | Material change in class, 地理, system, yield, nutrient/water regime, harvest, conditioning, specification, allocation, IPCC factors or evidence |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `ndsu-field-pea-production-2021` | extension_guidance | NDSU Extension, Field Pea Production (A1166), https://www.ndsu.edu/agriculture/sites/default/files/2021-12/a1166.pdf | Identity, production, harvest, damage, cleaning and storage |
| `ndsu-field-pea-fertility-2023` | extension_guidance | NDSU Extension, Soil Fertility Recommendations for Field Pea, Lentil and Chickpea (SF725), https://www.ndsu.edu/fileadmin/snrs/Files/sf725.pdf | Soil-test-driven nutrient records |
| `saskatchewan-dry-pea-guide` | official_guidance | Government of Saskatchewan, Dry Pea fact sheet, https://pubsaskdev.blob.core.windows.net/pubsask-prod/86385/86385-dry_pea.pdf | Harvest, cleaning, grading, moisture, storage, aeration and drying |
| `saskatchewan-pea-harvest-management` | extension_guidance | Saskatchewan Pulse Growers, Pea Harvest Management, https://saskpulse.com/resources/pea-harvest-management/ | Harvest routes, shatter, damage and storage |
| `fao-crop-water-needs` | official_guidance | FAO, Crop Water Needs, https://www.fao.org/4/s2022e/s2022e02.htm | Pea seasonal crop-water need 350–500 mm |
| `fao-cropland-nutrient-balance-2025` | dataset | FAOSTAT Cropland Nutrient Balance metadata, December 2025, https://files-faostat.fao.org/production/ESB/ESB_e.pdf | Dry-pea dry matter and harvest index context |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Direct soil N2O formula and EF1 uncertainty |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to moisture-corrected field and batch records | Balance, conversion, allocation and QA |
