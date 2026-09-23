---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-beet
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 糖用甜菜

## 1. 范围与适用性

本 PCR 适用于农场门交付、供制糖的新鲜未加工第一年糖用甜菜贮藏根。纳入田间建植、管理生产、田间直接排放、起收、去顶、干式去除过量附着土、分级、损失及已声明残余物去向。排除种子、饲料/食用甜菜、农场门后运输、糖厂清洗、切丝、扩散、汁液净化、制糖、浆粕和糖蜜。每个数据集应表示一致的雨养/灌溉、耕作、收获和整备路线，或透明加权的分层。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-beet` |
| classification_refs | `CPC:3.0:01801` Sugar beet |
| covered_products | 供制糖的新鲜第一年 `Beta vulgaris` 贮藏根 |
| excluded_products | 种子、饲料/食用甜菜、切片根、汁液、糖、浆粕、糖蜜及糖厂整备产品 |
| representative_product | 去顶、基本无松散土且在农场门验收的新鲜根 |
| production_route | 管理年度田间生产→起收→农场初级整备→分级 |
| market_state | 新鲜未加工根；未经切丝或扩散 |

管理生物生产是父活动。灌溉、耕作和收获技术是有证据的差异；互斥路线记录必须分层。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 农场门合格新鲜未加工糖用甜菜根 |
| How much | 1,000 kg fresh mass |
| How well | 已去顶；排除松散土/杂物；声明合同规格和实测含糖量 |
| How long or cycle | 一个年度作物周期及交付期 |
| reference_flow_link | `b48c1ece-b700-4491-86bb-ff46c0a4768b` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Sugar beet `b48c1ece-b700-4491-86bb-ff46c0a4768b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种；作物年；地理/地块；雨养或灌溉；耕作；收获和整备技术；鲜质量和皮重基准；含糖量/方法；等级规格；交付期 |
| Binding | `fixed` |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| MU-01 | roots | Mass | kg | 使用校准秤；披露皮重及残余土/异物修正。 |
| MU-02 | area records | Mass, volume, energy | per ha | 使用同一地块/路线层的合格产量归一化。 |
| MU-03 | nutrient supply | Product mass and composition | kg product; kg nutrient/ha | 一张合并卡保留每种实际产品质量、适用时干物质、养分分析及石灰当量。 |
| MU-04 | irrigation | Volume or mass | m3 or kg | 计量输水；降雨是背景信息而非产品投入。 |
| MU-05 | sugar quality | Mass fraction | % fresh mass | 声明取样和实验室方法；糖仅限定根品质而非参考产品。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 作物周期开始时已准备的地块和播种种子 |
| starting_condition_role | 前景年度作物周期起点 |
| product_classification_scope | `CPC:3.0:01801` fresh unprocessed roots |
| recursive_input_rule | 任何同类别外购根须单独追踪，且不得再次计为田间产出。 |
| upstream_dataset_requirement | 种子、能源、灌溉、植保及每种实际养分产品均需上游数据集。 |
| disclosure | 地理、作物年、地块面积、品种、路线、投入、产量、品质、损失、残余物和交接。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| SB-01 | full route | 保持生产、收获、整备和分级可独立核对。 | `fao-sugar-beet-white-sugar-2009` |
| SB-02 | exclusion | 止于农场门；排除所有糖厂制糖操作。 | `us-epa-sugarbeet-processing-ap42` |
| SB-03 | harvest | 区分田间、起收、整备、合格、降级、拒收、叶冠及土壤/杂物状态。 | `fao-land-management-root-crops` |
| SB-04 | routes | 互斥路线差异须分开记录并透明加权。 | `fao-crop-yield-water-2012` |
| SB-05 | residues | 留田叶冠是残余物；收集叶冠和销售降级根须有交接及分配。 | `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| field_production | 管理田间生产 | required | every route | 按地块/作物周期的单一期间批量生产；无储存；无替换 | field, crop cycle, operating period or delivery batch |
| harvest_lifting | 根起收与收获 | required | every route | 从土壤独立移出并核算收获状态 | field, crop cycle, operating period or delivery batch |
| farm_conditioning | 农场初级整备 | required | every route | 替代技术路线差异：去顶完成及干式去除过量土壤/杂物 | field, crop cycle, operating period or delivery batch |
| grading_handoff | 分级与农场门交接 | required | every route | 合格、降级和拒收去向状态 | field, crop cycle, operating period or delivery batch |

这是单一期间、无储存、无替换的批量生产路线。生产按地块与作物周期、收获/整备作业期及交付批次索引；共享设备负荷只归属一次。

### 过程： 管理田间生产 (`field_production`)

#### 输入

##### 产品流

###### 糖用甜菜种子 (`planting_seed`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 糖用甜菜种子
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 发出种子减去有记录的退回量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每公顷播种面积
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源:
- 数量范围: 暂定种子质量筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.5
  - 上限: 10
  - 单位: kg/ha
  - 基准: 每公顷播种面积
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 按前景实际产品记录的农业养分供应 (`agricultural_nutrient_supply`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 按前景实际产品记录的农业养分供应
- 流属性/单位: Mass or energy as stated / declared unit
- 绑定模式: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- 数量规则: 汇总实际矿质肥料、有机肥、石灰和含养分改良剂产品质量并保留组成
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每公顷处理面积
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源: `uk-nvz-nitrogen-2026`
- 数量范围: 合并产品质量 QA 筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 600
  - 单位: kg supplied products/ha
  - 基准: 每公顷处理面积
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 输送至田间的灌溉水 (`irrigation_water`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 输送至田间的灌溉水
- 流属性/单位: Mass or energy as stated / declared unit
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则: 计量体积或核验泵流量×时间；排除降雨
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每作物周期每公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_irrigation`
- 来源: `fao-crop-yield-water-2012`
- 数量范围: 雨养至800 mm水量筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 8000000
  - 单位: kg/ha
  - 基准: 每作物周期每公顷
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `fao-crop-yield-water-2012`

###### 实际植保产品 (`crop_protection_products`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 实际植保产品
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 配发制剂减退回量并与施用日志核对
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每公顷处理面积
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源:
- 数量范围: 暂定制剂产品筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/ha
  - 基准: 每公顷处理面积
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 实际田间燃料或电力载能体 (`field_energy`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 实际田间燃料或电力载能体
- 流属性/单位: Mass or energy as stated / declared unit
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 建植和田间管理的计量或领用记录；排除收获
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每作物周期每公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_energy`
- 来源:
- 数量范围: 暂定田间能耗筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: MJ/ha
  - 基准: 每作物周期每公顷
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成熟田间糖用甜菜根 (`standing_mature_roots`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 成熟田间糖用甜菜根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 起收根加抽样的起收前及未收获损失；排除土壤和叶冠
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_field_yield`
- 来源: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`
- 数量范围: 鲜根产量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 30000
  - 上限: 80000
  - 单位: kg/ha
  - 基准: 每公顷
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`

##### 废物流

###### 未收获或起收前损失的根 (`field_root_loss`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 未收获或起收前损失的根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 代表性田间抽样外推至地块
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 成熟田间根
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_loss`
- 来源: `usda-ers-sugarbeet-harvest-loss-2019`
- 数量范围: 典型至筛查损失比例
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.05
  - 单位: kg/kg standing roots
  - 基准: 每 kg 成熟田间根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `usda-ers-sugarbeet-harvest-loss-2019`

##### 基本流

###### 排放至空气的一氧化二氮 (`direct_n2o_air`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 排放至空气的一氧化二氮
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 对采集的氮投入和残余氮应用声明的 IPCC 层级
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每作物周期每公顷
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 方法公式 (`method_formula`)
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 管理土壤 N2O 筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: kg N2O/ha
  - 基准: 每作物周期每公顷
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

### 过程： 根起收与收获 (`harvest_lifting`)

#### 输入

##### 产品流

###### 转入收获的成熟田间根 (`harvest_root_input`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 转入收获的成熟田间根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 等于同地块同周期的 standing_mature_roots
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 田间根
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 方法公式 (`method_formula`)
- 来源: `mass-balance-identity`
- 数量范围: 内部转移恒等
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg standing roots
  - 基准: 每 kg 田间根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 实际收获燃料或电力载能体 (`harvest_energy`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 实际收获燃料或电力载能体
- 流属性/单位: Mass or energy as stated / declared unit
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 计量能耗仅一次归入收获作业期
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每公顷收获面积
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_energy`
- 来源:
- 数量范围: 暂定收获能耗筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: MJ/ha
  - 基准: 每公顷收获面积
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 起收的糖用甜菜原料根 (`lifted_raw_roots`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 起收的糖用甜菜原料根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 校准载荷质量扣除皮重和单独计量的外运土壤/杂物
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每公顷收获面积
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_loads`
- 来源: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`
- 数量范围: 起收根产量筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 28000
  - 上限: 80000
  - 单位: kg/ha
  - 基准: 每公顷收获面积
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 外部来源 (`external_source`)
  - 来源: `fao-sugar-beet-white-sugar-2009`, `uk-defra-sugar-beet-2024`

###### 有意收集的甜菜叶冠 (`collected_beet_tops`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 有意收集的甜菜叶冠
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 计量收集载荷；留田时为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每公顷收获面积
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residues`
- 来源:
- 数量范围: 暂定收集叶冠筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 30000
  - 单位: kg fresh tops/ha
  - 基准: 每公顷收获面积
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 废物流

###### 起收中损失或损伤的根 (`harvest_root_reject`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 起收中损失或损伤的根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 田间抽样或载荷平衡差并记录去向
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 收获根投入
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_loss`
- 来源: `usda-ers-sugarbeet-harvest-loss-2019`
- 数量范围: 收获拒收/损失筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg/kg harvest input
  - 基准: 每 kg 收获根投入
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 基本流

### 过程： 农场初级整备 (`farm_conditioning`)

#### 输入

##### 产品流

###### 转入初级整备的起收根 (`conditioning_root_input`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 转入初级整备的起收根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 等于代表载荷的 lifted_raw_roots
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 起收根
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 方法公式 (`method_formula`)
- 来源: `mass-balance-identity`
- 数量范围: 内部转移恒等
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg lifted roots
  - 基准: 每 kg 起收根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 农场初级整备能耗 (`conditioning_energy`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 农场初级整备能耗
- 流属性/单位: Mass or energy as stated / declared unit
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 去顶完成、干式除土除杂和输送的计量或分配能耗
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每1000 kg起收根
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_energy`
- 来源:
- 数量范围: 暂定整备能耗筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: MJ/1000 kg lifted roots
  - 基准: 每1000 kg起收根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可供分级的农场整备根 (`conditioned_roots`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 可供分级的农场整备根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 投入减分离叶冠/杂物、拒收根和计量损失
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1000 kg起收根
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_balance`
- 来源: `mass-balance-identity`
- 数量范围: 整备质量得率筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 700
  - 上限: 1000
  - 单位: kg/1000 kg lifted roots
  - 基准: 每1000 kg起收根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 废物流

###### 分离的有机杂物和拒收根 (`conditioning_rejects`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 分离的有机杂物和拒收根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 计量批次质量并记录还田、回收或处置去向
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1000 kg起收根
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_balance`
- 来源:
- 数量范围: 暂定整备拒收物筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 300
  - 单位: kg/1000 kg lifted roots
  - 基准: 每1000 kg起收根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 基本流

### 过程： 分级与农场门交接 (`grading_handoff`)

#### 输入

##### 产品流

###### 转入分级的整备根 (`grading_root_input`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 转入分级的整备根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 等于分配至交付批次的 conditioned_roots
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 整备根
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 方法公式 (`method_formula`)
- 来源: `mass-balance-identity`
- 数量范围: 内部转移恒等
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg/kg conditioned roots
  - 基准: 每 kg 整备根
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 糖用甜菜 `b48c1ece-b700-4491-86bb-ff46c0a4768b` (`accepted_sugar_beet_roots`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 糖用甜菜 `b48c1ece-b700-4491-86bb-ff46c0a4768b`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定模式: `fixed`
- 数量规则: 扣除皮重和异物后的校准合格交付质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每1000 kg参考产品
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 来源:
- 数量范围: 参考流恒等
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: 每1000 kg参考产品
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 送往声明用途的降级根 (`downgraded_roots`)

该独立产品产出在声明过程边界处定量记录，拥有明确交接，并与相邻状态核对。

- 选定流: 送往声明用途的降级根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 按批次和去向计量降级质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 分级投入
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 来源:
- 数量范围: 暂定降级比例筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.2
  - 单位: kg/kg grading input
  - 基准: 每 kg 分级投入
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 废物流

###### 分级拒收根 (`grading_rejects`)

该流在声明过程边界处定量记录并与相邻状态核对。

- 选定流: 分级拒收根
- 流属性/单位: Mass or energy as stated / declared unit
- 数量规则: 计量拒收质量并关联回收、还田、处理或处置
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 分级投入
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading`
- 来源:
- 数量范围: 暂定分级拒收筛查
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg/kg grading input
  - 基准: 每 kg 分级投入
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| AL-01 | all nodes | 优先细分；每项地块、机器作业期和批次负荷仅归属一次。 | `mass-balance-identity` |
| AL-02 | roots and tops | 留田叶冠不获产品分配；有意收集的叶冠采用有记录的经济分配并做质量敏感性。 | `mass-balance-identity` |
| AL-03 | grade states | 尽可能细分；否则按经济价值分配合格根和销售降级根。废物不获产品分配。 | `mass-balance-identity` |
| AL-04 | rejects | 返工物料保留累积负荷且仅在最终交接计数。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_field_inputs | field_production | seed, nutrient, protection | invoices/logs | identity; mass; composition; area; date | issue-return/application reconciliation | kg; ha | event | crop cycle | field | sum by product and field | invoices, composition, logs |
| cp_irrigation | field_production | water | meter/pump log | meter; flow; duration; area | meter or flow×duration | m3; kg | event | season | field/source | sum events | calibration/pump test |
| cp_energy | all operating nodes | energy | meter/fuel/machine log | carrier; quantity; period; field/load | direct meter or documented allocation | L; kWh; MJ | period | full cycle | machine/site | assign once | meter and invoice reconciliation |
| cp_field_yield | field_production | roots | load and survey | lifted mass; loss sample; area | calibrated loads plus sampling | kg; ha | field | harvest | field | lifted + scaled loss | scale and sampling plan |
| cp_harvest_loss | field_production; harvest_lifting | loss | survey/balance | mass; area; damage; destination | pre/post harvest sampling | kg; ha | field | harvest | field | scale and reconcile | sample evidence |
| cp_harvest_loads | harvest_lifting | lifted roots | load tickets | gross; tare; field; date; soil correction | calibrated weighing | kg | load | campaign | field/load | corrected sum | scale certificate |
| cp_residues | harvest_lifting | tops | load/destination | mass; basis; destination | calibrated weighing | kg | load | campaign | field/destination | sum hand-offs | ticket/receiver |
| cp_conditioning_balance | farm_conditioning | roots/rejects | batch record | input; output; rejects; destination | calibrated mass balance | kg | batch | campaign | site/field | reconcile states | scales and batch sheet |
| cp_grading | grading_handoff | grades | delivery record | input; accepted; downgraded; reject; sugar; tare | scale and receiving test | kg; % | batch | delivery | batch | reconcile grades | scale, lab, receiver |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| CR-01 | normalization | field amount / same-field accepted mass × 1000 kg | input/emission; accepted mass | per reference flow | `mass-balance-identity` |
| CR-02 | water | metered m3 × density; rainfall excluded | meter/flow; density | kg irrigation | `fao-crop-yield-water-2012` |
| CR-03 | root balance | standing = lifted + field loss; input = accepted + downgraded + rejected + measured loss | linked mass records | reconciled states | `mass-balance-identity` |
| CR-04 | N2O | declared IPCC tier applied to collected N inputs | N records; factors | kg N2O | `ipcc-2019-managed-soils` |
| CR-05 | route aggregation | area-weight area intensities and accepted-mass-weight reference intensities | stratum records | production mix | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| DQ-01 | traceability | 关联地块、载荷、批次及交付标识。 | registers and tickets |
| DQ-02 | completeness | 覆盖完整周期并核对所有根/残余物状态。 | completeness and balance report |
| DQ-03 | measurement | 使用校准仪器或披露方法和不确定性。 | calibration and workbook |
| DQ-04 | route | 加权前分开重大路线差异。 | route register |
| DQ-05 | range maturity | 在发布关键用途前以经审查证据替换推理筛查范围。 | review record |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| VR-01 | reference | 核验 UUID、1000 kg 合格根、限定信息和排除项。 | `mass-balance-identity` |
| VR-02 | boundary | 拒绝把糖厂切丝、扩散、制糖、浆粕或糖蜜纳入农场系统。 | `us-epa-sugarbeet-processing-ap42` |
| VR-03 | nutrients | 每过程至多一张产品投入养分卡，仅绑定集合级 flow-set.agricultural-nutrient-supply v0.3.0，无 group，且无独立 N/P/K/粪肥/堆肥/石灰卡。 |  |
| VR-04 | routes | 核验父活动、有证据差异、分层及加权。 | `fao-crop-yield-water-2012` |
| VR-05 | periods | 每条记录归于一个地块/时期/载荷/批次并仅计一次。 | `mass-balance-identity` |
| VR-06 | outputs | 核验每项交接、残余物/废物路线及分配决定。 | `mass-balance-identity` |
| VR-07 | rejects | 拒收质量有去向且绝不出现在合格产出中。 | `mass-balance-identity` |
| VR-08 | ranges | 调查超范围数值；范围不替代前景记录。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` |
| downstream_use | 新鲜糖用甜菜农场供应及追加农场门后运输/糖厂加工的模型 |
| allowed_use | 声明的地区、作物年和路线份额 |
| excluded_use | 种子、饲料/食用甜菜、糖厂门、糖、浆粕或糖蜜 |
| required_metadata | 参考限定、路线、产量、品质、损失/残余物去向、分配和证据 |
| required_quality_disclosure | 覆盖度、校准、估算、加权、质量平衡差及数据缺口 |
| update_trigger | 地区、路线、投入、产量/品质基准、分配或代表期发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-yield-water-2012` | official_guidance | FAO, *Crop yield response to water* (2012), https://www.fao.org/4/i2800e/i2800e.pdf | water and route |
| `fao-sugar-beet-white-sugar-2009` | official_guidance | FAO, *Sugar beet: white sugar* (2009), https://www.fao.org/fileadmin/user_upload/tci/docs/AH1-%28eng%29Sugar%20beet%20white%20sugar.pdf | identity, route, yield |
| `fao-land-management-root-crops` | official_guidance | FAO land-management/root-harvest guidance, https://www.fao.org/4/x5648e/x5648e0f.htm | harvest, soil, loss |
| `us-epa-sugarbeet-processing-ap42` | official_guidance | US EPA AP-42 9.10.1.2, https://www.ams.usda.gov/sites/default/files/media/Vinasse.pdf | factory exclusion |
| `usda-ers-sugarbeet-harvest-loss-2019` | dataset | USDA ERS sugarbeet harvest (2019), https://www.ers.usda.gov/data-products/chart-gallery/95396 | loss context |
| `uk-defra-sugar-beet-2024` | dataset | UK Defra, Agriculture in the UK 2024, https://www.gov.uk/government/statistics/agriculture-in-the-united-kingdom-2024/chapter-7-crops | yield/sugar context |
| `uk-nvz-nitrogen-2026` | official_guidance | UK nitrogen fertiliser guidance, https://www.gov.uk/guidance/using-nitrogen-fertilisers-in-nitrate-vulnerable-zones | N check |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil N2O |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to linked foreground records | transfers, balance, allocation |
