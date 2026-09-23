---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cinnamon-and-cinnamon-tree-flowers-raw
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未加工肉桂及肉桂树花

## 1. 范围与适用性

本 PCR 适用于农场门口的未研磨肉桂树皮产品（剥取树皮、桂皮筒、碎筒、碎片或带外皮树皮）以及作为原香辛料销售的单独采收肉桂树花或未成熟花芽。边界包括苗圃与建园负荷、多年生园地管理、萌蘖更新或选择性采茎周期、路线特定采收、刮皮与剥皮、初步成形、条件性农场干燥和分级。必须声明物种、植物部位、产品形态、干燥状态和水分基准。

树皮路线与花/花芽路线共享多年生种植阶段，但在采收阶段分开。两条路线可在同一农场共存，但同一批次和同一报告期负荷不得同时计入两种产出。边界排除精油蒸馏、研磨、提取、香辛料制造配方、零售包装和农场门口之后的运输。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cinnamon-and-cinnamon-tree-flowers-raw |
| classification_refs | CPC 3.0 01655，仅作映射背景 |
| covered_products | 声明的 *Cinnamomum* 物种之整片未加工树皮产品；未加工花或未成熟花芽；仅在干燥属于农场初级稳定化时包括农场干燥形态 |
| excluded_products | 研磨肉桂、肉桂粉、精油、提取物、调配香辛料、单独销售的叶片和消费包装产品 |
| representative_product | 农场门口一批已声明的未加工肉桂树皮/桂皮筒或肉桂树花/花芽 |
| production_route | 多年生管理园地后接树皮采收剥皮路线或花/花芽采收路线，并进行路线特定的条件性干燥和分级 |
| market_state | 鲜品或农场初级干燥品，未研磨且未进一步制造；声明水分和产品形态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付至农场门口的未加工肉桂树皮产品或肉桂树花/花芽产品 |
| How much | 1 kg 接收态质量 |
| How well | 符合声明的物种、植物部位、形态、等级或去向、水分状态和缺陷准则；不含拒收物 |
| How long or cycle | 声明园地年度及采收或萌蘖周期内的一个采收批次 |
| reference_flow_link | `farm_gate_grading` 的接收分级产出 `accepted_cinnamon_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Cinnamon and cinnamon-tree flowers, raw `6e9b5ee6-fbb3-48f8-9b7a-dc50936ee79a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或商业类型；植物部位 `bark` 或 `flower/bud`；适用时的树皮形态；鲜品或农场干燥状态；实测水分分数与基准；等级或去向；地区；采收年；园龄；萌蘖周期位置；路线 id；门口 `Production mix, at farm gate` |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品与质量平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告农场门口净接收态质量及实测水分分数。 |
| `moisture_conversion` | 鲜品、剥取和干燥状态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅用批次特定水分换算：干质量 = 湿质量 ×（1 − 水分质量分数）。 |
| `area_time_basis` | 建园与园地管理 | 质量和面积时间记录 | kg, ha, year | 按园地公顷和报告年记录田间投入，再归属到实测路线产出。 |
| `energy_consistency` | 燃料与电力 | 相应能源属性 | MJ 或 kWh | 保留各载体数量，汇总前记录换算因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已建成或新建的 *Cinnamomum* 管理园地，包括可归属的苗圃和建园投入 |
| starting_condition_role | 前景多年生作物生产的起点 |
| product_classification_scope | 共享该类别边界的未加工肉桂树皮产品与肉桂树花/花芽 |
| recursive_input_rule | 本类别外购未加工肉桂按一个带合规数据集的上游产品投入记录一次，不在此前景系统内再次生成。 |
| upstream_dataset_requirement | 产品和服务投入需要具代表性的上游数据集；生成数据包时将实际养分产品逐项解析至经核验 UUID。 |
| disclosure | 声明物种、路线、建园年、园龄、种植密度、萌蘖或选择性采收制度、报告年度、水分基准、所有预期共产品及排除项。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_stand` | 苗圃、建园与管理 | 包括可归属的苗圃和建园、土壤准备、补植、维护、养分和水供应、植保、田间能源及直至待采状态的田间直接排放。 | `suriyagoda-2021-ceylon-cinnamon` |
| `boundary_bark_route` | 树皮路线 | 包括萌蘖更新或采茎、叶枝分离、刮皮、揉擦、剥皮、适用时制筒、条件性初级干燥及分级。 | `sri-lanka-dcd-postharvest`; `eurlex-2020-ceylon-cinnamon` |
| `boundary_flower_route` | 花/花芽路线 | 包括花或未成熟花芽采收、从花束分离、清洁、条件性初级干燥和分级；不得套用树皮加工数据。 | `wilson-2016-cassia-buds`; `li-2018-cassia-buds`; `pnp-cassia-buds-route` |
| `boundary_conditional_drying` | 稳定化 | 仅在批次于农场门口前干燥时启用干燥投入和去水；否则记录为零并声明鲜品交接。 | `sri-lanka-dcd-postharvest`; `eurlex-2020-ceylon-cinnamon` |
| `boundary_exclusions` | 下游制造 | 排除蒸馏、研磨、提取、配方、零售包装和农场后运输。 | `iso-6539-2014`; `eurlex-2020-ceylon-cinnamon` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `perennial_cinnamon_cultivation` | 多年生肉桂建园与园地管理 | required | 所有路线 | 管理生物生产父节点，按园地年度和周期进行多年及报告期索引 | ha-year 和实测路线产出 |
| `bark_harvest_conditioning` | 树皮采收、剥皮与初级整备 | conditional | 植物部位为树皮 | 相对于采收父活动的替代技术路线差异；含初级整备和条件性稳定化；一个批次为一个采收批次 | kg 整备树皮 |
| `flower_harvest_conditioning` | 花或花芽采收与初级整备 | conditional | 植物部位为花/花芽 | 相对于采收父活动的替代技术路线差异；含初级整备和条件性稳定化；一个批次为一个花/花芽批次 | kg 整备花/花芽 |
| `farm_gate_grading` | 农场门口分级与分选 | required | 所选路线产出 | 分离接收、降级和拒收状态 | kg 进入的整备产品 |

### 过程：多年生肉桂建园与园地管理（`perennial_cinnamon_cultivation`）

#### 输入

##### 产品流

###### 苗木与补植材料（`planting_material`）

记录归属于建园和补缺的实生苗、扦插苗及补植苗。

- 选定流： Cinnamon nursery planting material
- 流属性/单位： Number / item
- 数量规则：统计进入园地的种植材料，仅在有证据的生产年间年化建园负荷。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每公顷建园面积
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_stand_management`
- 来源： `suriyagoda-2021-ceylon-cinnamon`
- 数量范围：种植密度 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 6000
  - 上限： 14000
  - 单位： item/ha established
  - 基准：每公顷建园面积
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 合并的肥料、粪肥与养分改良剂（`nutrient_supply`）

这是本过程唯一的养分产品输入卡。原始记录应分别列出每项矿质肥料、有机肥料、粪肥和养分改良剂；生成数据时将每个实际产品解析到经核验的 UUID。

- 选定流： Agricultural nutrient supply
- 流属性/单位： Mass / kg
- 绑定模式： `parameterized`
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set version： `0.3.0`
- 数量规则：合计所有养分产品的施用态质量，同时在原始记录中保留产品身份、养分组成和水分。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每公顷管理园地及报告年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_stand_management`
- 数量范围：养分产品质量 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 5000
  - 单位： kg/ha-year as applied
  - 基准：每公顷管理园地及报告年；有机产品按湿质量
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water`）

记录跨越前景边界的灌溉水；降雨不计入该产品流数量。

- 选定流： Irrigation water
- 绑定模式： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set version： `0.2.0`
- Flow Set group： `irrigation-water`
- 流属性/单位： Volume / m3
- 数量规则：计量、泵送记录或其他证据所示的园地供水量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每公顷管理园地及报告年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_stand_management`
- 数量范围：灌溉 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10000
  - 单位： m3/ha-year
  - 基准：每公顷管理园地及报告年
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 田间燃料与外购能源（`field_energy`）

记录建园、维护、泵送和田间作业使用的各能源载体。

- 选定流： Field fuel and purchased energy
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 流属性/单位： Energy / MJ
- 数量规则：用有记录的因子将各能源载体前景用量换算为 MJ。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每公顷管理园地及报告年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_energy_records`
- 数量范围：田间能源 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20000
  - 单位： MJ/ha-year
  - 基准：每公顷管理园地及报告年
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 植保产品（`crop_protection`）

记录园地施用的商业植保产品，并保留有效成分与处理面积。

- 选定流： Crop-protection product
- 流属性/单位： Mass / kg
- 数量规则：报告年内实测的商业植保产品施用质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每公顷管理园地及报告年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_stand_management`
- 数量范围：植保产品 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/ha-year commercial product
  - 基准：每公顷管理园地及报告年
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 管理土壤的直接氧化亚氮排放（`soil_n2o`）

按声明的清单方法依据实际氮投入计算土壤直接 N2O 排放。

- 选定流： Dinitrogen monoxide to air
- 流属性/单位： Mass / kg N2O-N
- 数量规则：将声明的现行管理土壤方法应用于采集的氮投入和场址条件。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 kg 施入氮
- 基准类型： 氮投入（`n_input`）
- 证据类型： 方法公式（`method_formula`）
- 采集协议： `cp_stand_management`
- 来源： `ipcc-2019-managed-soils`
- 数量范围：方法结果 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.1
  - 单位： kg N2O-N/kg N input
  - 基准：每 kg 进入土壤直接排放计算的氮投入
  - 基准类型： 氮投入（`n_input`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `ipcc-2019-managed-soils`

#### 输出

##### 产品流

###### 分配到所选路线的待采肉桂作物（`harvest_ready_crop`）

记录独立采收节点前归属于园地的树皮或花/花芽干物质当量产出，并保持两条路线分离。

- 选定流： Harvest-ready cinnamon crop
- 流属性/单位： Mass / kg dry-matter equivalent
- 数量规则：用实测路线产出反推并核对整备损失，不重复计算立木生物量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每公顷管理园地及报告年
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_harvest_lot_balance`
- 来源： `sri-lanka-dcd-postharvest`
- 数量范围：已报告树皮产量对比范围
  - 范围角色： 典型范围（`typical_range`）
  - 下限： 741
  - 上限： 1483
  - 单位： kg dried quills/ha-year
  - 基准：斯里兰卡树皮生产每公顷管理园地及每年；不作为花路线限值
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 外部来源（`external_source`）
  - 来源： `sri-lanka-dcd-postharvest`

##### 废物流

##### 基本流

### 过程：树皮采收、剥皮与初级整备（`bark_harvest_conditioning`）

#### 输入

##### 产品流

###### 树皮批次的待采茎秆（`bark_route_crop`）

记录按声明的萌蘖更新或选择性采收制度切割的茎秆。

- 选定流： Harvest-ready cinnamon stems
- 流属性/单位： Mass / kg dry-matter equivalent
- 数量规则：将茎秆和回收树皮与种植中间产出核对。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 农场门口接收树皮
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_harvest_lot_balance`
- 来源： `suriyagoda-2021-ceylon-cinnamon`
- 数量范围：茎秆至树皮 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 20
  - 单位： kg dry-matter-equivalent stem/kg accepted bark
  - 基准：每 1 kg 农场门口接收树皮
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 树皮路线能源（`bark_conditioning_energy`）

记录切割、搬运和整备能源；不使用外购能源的被动干燥，其干燥能源为零。

- 选定流： Bark conditioning energy
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 流属性/单位： Energy / kWh
- 数量规则：合计分配给批次的计量电力和换算燃料；仅在启用时包括干燥。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 农场门口接收树皮
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_energy_records`
- 数量范围：条件性树皮能源 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kWh/kg accepted bark
  - 基准：每 1 kg 接收树皮；干燥未启用时外购干燥能源为零
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整备后的整片树皮产品（`prepared_bark`）

记录初级整备后、分级前的剥取树皮、桂皮筒、碎筒、碎片或带外皮树皮；产品保持未研磨状态。

- 选定流： Cinnamon and cinnamon-tree flowers, raw `6e9b5ee6-fbb3-48f8-9b7a-dc50936ee79a`
- 流属性/单位： Mass / kg
- 绑定模式： `fixed`
- 数量规则：按批次特定水分测量整备树皮预期产出的净质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每个树皮整备批次
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_harvest_lot_balance`
- 来源： `sri-lanka-dcd-postharvest`; `iso-6539-2014`
- 数量范围：农场干燥锡兰型树皮水分范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 15
  - 单位： percent moisture by mass
  - 基准：整备树皮接收态；仅适用于声称符合所引规范的农场干燥锡兰型树皮
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 外部来源（`external_source`）
  - 来源： `eurlex-2020-ceylon-cinnamon`

###### 作为共产品出售的木材、叶片与细枝（`bark_route_coproducts`）

分别记录每项独立销售的产出。留在场内作覆盖物的材料属于残余物；精油蒸馏不在范围内。

- 选定流： Cinnamon wood, leaves and twigs
- 流属性/单位： Mass / kg
- 数量规则：测量流向预期去向的预期共产品产出质量，并声明湿基或干基状态。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 整备树皮
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_harvest_lot_balance`
- 来源： `suriyagoda-2021-ceylon-cinnamon`
- 数量范围：共产品质量 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 30
  - 单位： kg co-product/kg prepared bark
  - 基准：每 1 kg 整备树皮；水分基准保持一致
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 树皮拒收物（`bark_rejects`）

将不可用树皮与降级但可销售的树皮分开记录，并声明回收或处置路线。

- 选定流： Cinnamon bark residue
- 流属性/单位： Mass / kg
- 数量规则：测量接收产品平衡之外的拒收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 整备树皮
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_harvest_lot_balance`
- 数量范围：树皮拒收 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： kg reject/kg prepared bark
  - 基准：每 1 kg 整备树皮
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 树皮干燥去除的水（`bark_drying_water`）

根据成对质量与水分测量计算去除的水；干燥未启用时记录为零。

- 选定流： Water to air
- 流属性/单位： Mass / kg
- 数量规则：干燥前水质量减去干燥后水质量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 农场干燥整备树皮
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_moisture_and_drying`
- 来源： `sri-lanka-dcd-postharvest`
- 数量范围：条件性树皮去水 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kg water/kg farm-dried bark
  - 基准：每 1 kg 农场干燥树皮；干燥未启用时为零
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：花或花芽采收与初级整备（`flower_harvest_conditioning`）

#### 输入

##### 产品流

###### 待采花或未成熟花芽（`flower_route_crop`）

记录进入本路线的带花材料；不得以成熟果实、树皮或丁香花芽替代。

- 选定流： Harvest-ready cinnamon-tree flowers or immature buds
- 流属性/单位： Mass / kg
- 数量规则：测量清洁和整备前采收的花或花芽质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 农场门口接收花/花芽
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_flower_lot_balance`
- 来源： `wilson-2016-cassia-buds`; `li-2018-cassia-buds`
- 数量范围：花产品投入 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 10
  - 单位： kg harvested material/kg accepted flower product
  - 基准：每 1 kg 农场门口接收花/花芽
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 花路线能源（`flower_conditioning_energy`）

记录搬运和整备能源；鲜品交接或被动干燥的外购干燥能源为零。

- 选定流： Flower conditioning energy
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 流属性/单位： Energy / kWh
- 数量规则：计量分配给花产品批次的电力及换算燃料。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准：每 1 kg 农场门口接收花/花芽
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_energy_records`
- 数量范围：条件性花产品能源 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kWh/kg accepted flower product
  - 基准：每 1 kg 接收花/花芽；不使用外购能源时为零
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整备后的花或未成熟花芽（`prepared_flowers`）

记录分级前清洁的鲜花/花芽或初级干燥产品；声明交易材料是花、未成熟花芽，还是作为“花芽”销售的未成熟果实。

- 选定流： Cinnamon and cinnamon-tree flowers, raw `6e9b5ee6-fbb3-48f8-9b7a-dc50936ee79a`
- 流属性/单位： Mass / kg
- 绑定模式： `fixed`
- 数量规则：按批次特定水分测量整备花/花芽的净质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每个花产品整备批次
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_flower_lot_balance`
- 来源： `wilson-2016-cassia-buds`; `pnp-cassia-buds-route`
- 数量范围：花产品水分 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： percent moisture by mass
  - 基准：整备花/花芽接收态；因未找到跨物种官方限值而作为暂定校验
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 花梗与拒收物（`flower_rejects`）

记录去除的花梗、异物和变质花芽及其回收或处置去向。

- 选定流： Cinnamon flower conditioning residue
- 流属性/单位： Mass / kg
- 数量规则：测量从接收花产品中排除的拒收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 整备花/花芽
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_flower_lot_balance`
- 来源： `pnp-cassia-buds-route`
- 数量范围：花产品拒收 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 2
  - 单位： kg reject/kg prepared flower product
  - 基准：每 1 kg 整备花/花芽
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 花或花芽干燥去除的水（`flower_drying_water`）

根据成对状态计算去除的水；鲜品交接或未启用干燥时记录为零。

- 选定流： Water to air
- 流属性/单位： Mass / kg
- 数量规则：干燥前水质量减去干燥后水质量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 农场干燥花/花芽
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_moisture_and_drying`
- 来源： `pnp-cassia-buds-route`
- 数量范围：条件性花产品去水 QA 校验
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kg water/kg farm-dried flower product
  - 基准：每 1 kg 农场干燥花/花芽；干燥未启用时为零
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：农场门口分级与分选（`farm_gate_grading`）

#### 输入

##### 产品流

###### 整备后的路线特定产品（`ungraded_cinnamon_product`）

只记录一个进入分级的路线产出，并保留树皮或花/花芽身份。

- 选定流： Prepared raw cinnamon product
- 流属性/单位： Mass / kg
- 数量规则：测量来自 `prepared_bark` 或 `prepared_flowers` 的进入质量，一个参考批次不得同时来自两者。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每个分级批次
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_balance`
- 数量范围：分级投入核对范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg incoming/kg incoming grading basis
  - 基准：以每 1 kg 进入分级的整备产品为分母
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 由采集记录计算（`calculated_from_collection`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门口接收的未加工肉桂产品（`accepted_cinnamon_product`）

这是参考流交接点，不包括降级产品与拒收物。

- 选定流： Cinnamon and cinnamon-tree flowers, raw `6e9b5ee6-fbb3-48f8-9b7a-dc50936ee79a`
- 流属性/单位： Mass / kg
- 绑定模式： `fixed`
- 数量规则：测量接收的预期产出质量并归一化至 1 kg。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 农场门口参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_balance`
- 数量范围：参考产出范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/reference flow
  - 基准：每个声明的 1 kg 接收参考产品
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 由采集记录计算（`calculated_from_collection`）

###### 降级但可销售的产品（`downgraded_cinnamon_product`）

将单独销售的低等级产品记录为预期产出，不得计为接收的参考产品或废物。

- 选定流： Downgraded raw cinnamon product
- 流属性/单位： Mass / kg
- 数量规则：测量降级预期产出质量并记录去向与价格。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准：每 1 kg 进入的整备产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_balance`
- 数量范围：降级产出核对范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg incoming prepared product
  - 基准：每 1 kg 进入的整备产品
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 由采集记录计算（`calculated_from_collection`）

##### 废物流

###### 分级拒收物（`grading_rejects`）

记录不可销售材料及其返工、回收、还田、堆肥或处置路线。

- 选定流： Cinnamon grading reject
- 流属性/单位： Mass / kg
- 数量规则：测量一次有记录内部返工循环之后的拒收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每 1 kg 进入的整备产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading_balance`
- 数量范围：分级拒收核对范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg incoming prepared product
  - 基准：每 1 kg 进入的整备产品
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 由采集记录计算（`calculated_from_collection`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | 树皮与花路线 | 首先细分直接路线记录。路线可在同一农场共存，但同一批次的采收和整备负荷互斥。 | `suriyagoda-2021-ceylon-cinnamon`; `wilson-2016-cassia-buds` |
| `allocation_perennial_establishment` | 建园与园地投入 | 将建园和补植负荷归属到有证据的生产年及实测产出；识别建园、未投产、生产和终止阶段。 | `suriyagoda-2021-ceylon-cinnamon` |
| `allocation_coppice_cycles` | 重复树皮周期 | 将投入、维护和产出链接到园地年度与萌蘖/选择性采收周期；同一事件不得进入两个周期。 | `sri-lanka-dcd-postharvest`; `suriyagoda-2021-ceylon-cinnamon` |
| `allocation_intended_coproducts` | 树皮、花、木材、叶、细枝与降级产品 | 优先细分。不可分负荷采用有记录的干质量分配；研究要求经济分配时报告价格、期间和敏感性。无产品去向的残余物不给予产品信用。 |  |
| `allocation_rework` | 返工与拒收物 | 返工材料保留原负荷，循环只链接一次，并从接收产出中排除拒收物。 |  |
| `allocation_batch_period` | 批次与报告年 | 将清洁、共享搬运和换线归属到致因批次或期间，其余共享投入仅一次分配到实测产出。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand_management` | `perennial_cinnamon_cultivation` | 建园与年度投入 | 田间日志、发票、仪表和施用记录 | stand_id, area, species, planting_date, planting_count, product_name, product_uuid, nutrient_composition, wet_mass, water, treated_area, date, stand_age, cycle_id | 将日志与发票和仪表核对；养分产品逐项保留 | item, kg, m3, ha | 每次事件；年度汇总 | 完整报告年及建园记录 | 每个纳入园地 | 按园地年度和身份求和；建园负荷年化 | 发票、标签、仪表、面积图和带日期日志 |
| `cp_energy_records` | 所有前景过程 | 燃料与电力 | 发票、燃料日志和仪表 | process_id, lot_id, carrier, quantity, unit, date, conversion_factor | 计量或核对采购与库存 | 原生单位、MJ、kWh | 每批或每月 | 完整报告年及所有纳入批次 | 每个纳入场址 | 按载体换算并仅一次分配至过程、批次和期间 | 发票、校准仪表和换算依据 |
| `cp_harvest_lot_balance` | `perennial_cinnamon_cultivation`; `bark_harvest_conditioning` | 树皮投入、产品、共产品和拒收物 | 采收质量平衡 | stand_id, cycle_id, lot_id, stem_mass, bark_mass_before, bark_mass_after, bark_form, wood_mass, leaf_mass, twig_mass, reject_mass, destination, moisture | 称量每次交接 | kg、质量分数 | 每个树皮批次 | 报告年内所有树皮批次 | 每个树皮园地和剥皮场址 | 核对干物质并将接收批次汇总至园地年度 | 秤校验、水分测试、批次链接和收据 |
| `cp_flower_lot_balance` | `perennial_cinnamon_cultivation`; `flower_harvest_conditioning` | 花/花芽投入、产品和拒收物 | 采收质量平衡 | stand_id, lot_id, botanical_part, maturity, harvested_mass, prepared_mass, stem_mass, foreign_matter, reject_mass, destination, moisture | 称量每次交接并核验植物部位 | kg、质量分数 | 每个花批次 | 报告年内所有花/花芽批次 | 每个花产品园地和场址 | 按批次核对产品、去除物和水分 | 秤校验、植物学记录、水分测试和批次链接 |
| `cp_moisture_and_drying` | `bark_harvest_conditioning`; `flower_harvest_conditioning` | 条件性干燥 | 干燥日志和水分测试 | lot_id, route_id, drying_active, method, start_mass, end_mass, start_moisture, end_moisture, duration, energy | 干燥前后成对测量质量与水分 | kg、质量分数、hour、kWh | 每个干燥批次 | 报告年内所有干燥批次 | 每个干燥场址 | 计算干物质闭合和蒸发水；未启用时为零 | 测试方法、校准天平、时间戳和仪表 |
| `cp_grading_balance` | `farm_gate_grading` | 接收、降级、返工和拒收状态 | 分级与去向记录 | lot_id, route_id, incoming_mass, grade, accepted_mass, downgraded_mass, rework_mass, reject_mass, defect, destination, price | 称量每个状态并链接交接点 | kg、currency/kg | 每个批次 | 报告年内所有分级批次 | 每个分级场址 | 进入量 = 接收 + 降级 + 拒收 + 一次返工后的有记录损失 | 秤校验、分级单、销售和拒收去向记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture_conversion` | 鲜品与干燥状态 | dry_mass = wet_mass × (1 − moisture_fraction) | 成对质量和水分 | 干质量 | `iso-6539-2014` |
| `calc_drying_water` | 条件性干燥 | evaporated_water = start_mass × start_moisture − end_mass × end_moisture | 成对质量和水分 | kg 水排入空气 |  |
| `calc_perennial_attribution` | 建园与共享园地负荷 | 建园负荷分配至有证据的生产年；每年按声明规则将共享负荷分配给分别实测的产出。 | 生产年、园地投入、路线产出 | 各路线及参考 kg 的负荷 | `suriyagoda-2021-ceylon-cinnamon` |
| `calc_lot_yield` | 采收批次 | accepted_yield = accepted_mass ÷ incoming_route_mass；共产品和拒收比例单独报告 | 批次质量平衡 | 产率与比例 |  |
| `calc_grading_balance` | 分级 | incoming = accepted + downgraded + reject + documented loss；返工是一次内部循环 | 分级记录 | 已核对状态 |  |
| `calc_managed_soil_emissions` | 氮投入 | 对产品特定氮投入、气候和管理应用声明的现行方法与因子，并披露因子版本。 | 施氮量和方法参数 | 直接与间接氮排放 | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 路线产品 | 对每批核验物种/类型、植物部位、形态、花/花芽成熟度、鲜/干状态和等级。 | 身份记录、照片或植物学记录及分级单 |
| `dq_temporal` | 多年期归属 | 覆盖完整报告年及所有纳入批次；披露建园、生产、终止阶段及不完整周期。 | 带日期园地与采收记录 |
| `dq_completeness` | 所有过程 | 每个采收或整备批次至少核算 95% 质量，否则量化并解释缺口。 | 签字质量平衡 |
| `dq_moisture` | 换算 | 比较鲜品与干燥状态时使用批次特定成对水分；注明测试方法与日期。 | 实验室或校准快速测试 |
| `dq_nutrients` | 养分供应 | 虽然 PCR 使用一张合并养分卡，仍须保留实际产品、UUID 解析、组成、水分基准和施用事件。 | 标签、发票和施用日志 |
| `dq_route_separation` | 替代路线 | 证明直接投入和产出只归属一条路线，共享园地负荷仅分配一次。 | 批次到园地链接和分配工作表 |
| `dq_representativeness` | 发布数据集 | 声明地理、物种混合、园龄分布、采收制度、技术、干燥比例、覆盖率和数据年。 | 元数据与覆盖表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 缺少物种/类型、植物部位、形态、水分状态、等级/去向、采收年、周期位置或农场门口声明时拒绝数据包。 |  |
| `validate_route_exclusivity` | 过程图 | 一个参考批次只能由一条采收整备路线供应；共享种植负荷可分配，但直接路线负荷不得同时出现在两条路线。 |  |
| `validate_nutrient_binding` | `nutrient_supply` | 种植过程至多一张养分产品输入卡，只绑定 `flow-set.agricultural-nutrient-supply` `0.3.0` 且无 group；前景记录必须逐项列出产品并解析 UUID。 |  |
| `validate_conditional_drying` | 干燥 | 未启用时干燥能源和去除水均为零；启用时需要成对质量、水分、时长和能源记录及干物质闭合。 | `sri-lanka-dcd-postharvest` |
| `validate_mass_balance` | 采收、整备与分级 | 要求批次在 5% 内闭合或提供有记录的修正；接收、降级、共产品和废物状态相互排斥。 |  |
| `validate_moisture` | 农场干燥树皮 | 声称符合所引规范的锡兰型树皮水分不得超过 15%；其他物种和花产品采用声明的适用规范。 | `eurlex-2020-ceylon-cinnamon`; `iso-6539-2014` |
| `validate_period_attribution` | 多年园地与周期 | 识别建园、未投产、生产和终止阶段；拒绝跨园地年度或周期重复归属。 |  |
| `validate_multioutput` | 预期产出 | 每项预期产出需要实测交接与明确分配决定；残余物或弃置物不给予产品信用。 |  |
| `validate_rework` | 拒收物 | 每项拒收状态需要一个返工、降级、回收或处置路径；排除未解决拒收物且返工循环只计一次。 |  |
| `validate_exclusions` | 边界 | 结果包含蒸馏、研磨、提取或香辛料制造配方时拒绝。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单一声明的未加工肉桂树皮或花/花芽路线的前景农场门口数据集 |
| downstream_use | 经方法、身份和代表性审查后，可作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 用于声明物种、植物部位、路线、状态、地理、技术和期间的归因型 LCA |
| excluded_use | 精油、研磨或调配香辛料生产；未声明的路线混合；超出声明范围的外推 |
| required_metadata | PCR id/版本；参考流 UUID；物种/类型；植物部位；形态；门口；地理；采收年；园龄；建园年；周期；水分；等级；分配；干燥方法/比例；覆盖率 |
| required_quality_disclosure | 实测与估算比例、范围例外、质量闭合、UUID 解析、分配敏感性、缺失数据和代表性限制 |
| update_trigger | 物种、园地制度、产量、养分或灌溉实践、路线、干燥、共产品去向、分配、等级规范或地理发生重大变化，或数据超过五年时更新 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `sri-lanka-dcd-postharvest` | official_guidance | Sri Lanka Department of Cinnamon Development, “Post Harvest Technology”, https://cinnamon.gov.lk/about-cinnamon/post-harvest-technology/ | 采收、刮皮、剥皮、4–7 天干燥、分级及报告的 300–600 kg/acre-year 桂皮筒产量 |
| `suriyagoda-2021-ceylon-cinnamon` | literature | Suriyagoda et al. (2021), “Ceylon cinnamon: Much more than just a spice”, *Plants, People, Planet*, https://doi.org/10.1002/ppp3.10192 | 建园、园地寿命、萌蘖更新、过程分解和共产品 |
| `eurlex-2020-ceylon-cinnamon` | official_guidance | European Commission (2020), Ceylon Cinnamon GI specification, CELEX 52020XC0622(05), https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52020XC0622(05) | 产品形态、路线、15% 水分限值和分级背景 |
| `iso-6539-2014` | standard | ISO 6539:2014, Cinnamon — Specification, https://www.iso.org/standard/64797.html | 整片肉桂身份和质量背景 |
| `wilson-2016-cassia-buds` | literature | L. Wilson (2016), “Spices and Flavoring Crops: Leaf and Floral Structures”, *Encyclopedia of Food and Health*, https://www.sciencedirect.com/topics/medicine-and-dentistry/cinnamomum-cassia | 桂皮树花/花芽身份和采收状态 |
| `li-2018-cassia-buds` | literature | Li et al. (2018), “Chemical constituents from the immature buds of Cinnamomum cassia”, *Biochemical Systematics and Ecology* 78, 102–105, https://doi.org/10.1016/j.bse.2018.04.008 | 独立的未成熟花芽身份证据 |
| `pnp-cassia-buds-route` | handbook | Wuzhou P&P Spices, “Cassia Buds”, https://www.pnp6.com/html/en-detail-52.html | 花束采收、干燥和去梗的行业路线证据；不作为通用限值 |
| `ipcc-2019-managed-soils` | method_factor | IPCC (2019), 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤氮排放方法 |
