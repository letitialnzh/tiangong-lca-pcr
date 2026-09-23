---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cow-peas-dry
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 干牛豆

## 1. 范围与适用性

本 PCR 覆盖成熟干牛豆粮粒（Vigna unguiculata）从田间生产，经一次或多次成熟荚果采摘、荚果干燥、脱粒、扬净或初步清理、分级及条件性终干燥后在农场门交接的生产。适用于供食品、饲料或其他已声明干粮市场使用的未加工整粒粮食。

青荚或叶片、作为种用商品销售的种子、熟制或罐藏牛豆、面粉、分瓣以及工业分离的蛋白质、淀粉、纤维或油均不在范围内。农场门交接后的储存、零售包装及门外运输亦不在范围内。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cow-peas-dry |
| classification_refs | CPC 3.0:01706 Cow peas, dry |
| covered_products | 成熟整粒干牛豆粮粒（Vigna unguiculata），包括已声明的商品类别与颜色 |
| excluded_products | 青荚与叶；作为种用商品销售的种子；熟制或罐藏粮粒；面粉；分瓣；工业分离组分 |
| representative_product | 农场门成熟清洁干牛豆粮粒 |
| production_route | 受控田间生产母路线，含雨养或灌溉变体；成熟同步时单次采摘或成熟错开时多次采摘；荚果干燥、脱粒、清理、分级及条件性终干燥 |
| market_state | 收获粮粒、未加工；农场门生产组合 |

受控生产母活动为牛豆田间栽培。雨养与灌溉田块可共存于汇总生产组合中，但其用水与能源差异须分别采集。对每个田块批次，成熟同步的一次采摘与成熟错开的多次采摘互斥。人工或机械收获、脱粒、清理或干燥均为对应具名母活动的技术变体；其差异体现在设备、能源、人工记录、损失与遍次结构，并须由所代表路线的证据支持。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在声明农场门交接点的合格成熟整粒干牛豆粮粒 |
| How much | 1,000 kg |
| How well | 声明物种、商品类别或颜色、等级、湿基水分、杂质、虫害、破碎或裂粒、作物年份与批次状态 |
| How long or cycle | 一个作物周期至农场门交接；包括全部错峰采摘及关联调理遍次 |
| reference_flow_link | `cowpeas_dry_farm_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Cow peas, dry `c377d583-fcf6-47fe-ac52-95ec0a377058` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Vigna unguiculata；成熟整粒干粮；生产组合；农场门；作物年份；商品类别或颜色；等级；湿基水分；杂质；虫害；破碎或裂粒比例；收获路线；干燥路线 |
| Binding | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告农场门合格净质量，不得包含拒收物、未解决返工物或包装。 |
| `moisture_basis` | 荚果与粮粒 | mass and moisture | kg; % wet basis | 在每个质量交接点记录湿基水分；跨干燥状态比较时使用干物质。 |
| `nutrient_product_basis` | 养分供应 | product quantity and nutrient composition | native product unit; kg nutrient | 每种矿质、有机或含养分产品仅记录一次，并依据其分析推导养分量，不得重复计算复合产品。 |
| `energy_conversion` | 能源载体 | native carrier quantity and net energy | L; kg; kWh; MJ | 保留能源载体的实测单位，并披露转换为 MJ 的全部因子。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 代表牛豆作物周期的建田起点，种子或种植材料及全部继承的上游产品数据集进入前景 |
| starting_condition_role | 受控生物生产的前景起点 |
| product_classification_scope | CPC 3.0:01706 Cow peas, dry |
| recursive_input_rule | 留作或购作用于种植的牛豆粮粒仍作为带上游数据集的种植材料投入，不得计作当前农场门参考产出 |
| upstream_dataset_requirement | 每个外购产品、能源载体、供水服务和种植材料投入均须带有时空适宜的上游数据集或明确数据缺口 |
| disclosure | 声明田块位置、作物年份、生产变体、采摘模式、收获状态、调理与干燥技术、农场门规格及每项产出去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 田间至农场门 | 纳入建田、管理、全部成熟荚果采摘、荚果干燥、脱粒、扬净或清理、分级、条件性终干燥及农场门交接。 | `iita-west-africa-cowpea-2018`; `iita-farmers-guide-cowpea-2009` |
| `boundary_harvest_independent` | 收获 | 收获使成熟田间作物转变为已收集荚果批次，且可能包含多个有日期的采摘事件，因此与田间生产分开；调理从该交接后开始，亦须分开。 | `iita-farmers-guide-cowpea-2009` |
| `boundary_states` | 调理与分级 | 将荚果、松散粮粒、稳定化粮粒、合格等级、降级粮粒、返工物和最终拒收物作为具有互斥交接的不同状态跟踪。 | `iita-west-africa-cowpea-2018`; `fao-cowpea-postharvest` |
| `boundary_storage` | 农场门终点 | 采用单一期间作物周期路线，交接后不含储存。仅纳入达到声明交接条件所需的干燥或短期暂存；排除交接后的储存与虫害控制负荷。 | `fao-grain-drying-storage` |
| `boundary_route_delta` | 路线变体 | 对雨养与灌溉、人工与机械、单次与多次采摘、被动与动力干燥等变体，在具名母过程中采集变化的投入、能源、损失、遍次和校验记录；同一批次不得合并互斥变体。 | `iita-farmers-guide-cowpea-2009`; `iita-west-africa-cowpea-2018` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | role | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 牛豆田间管理生产 | `required` | 所有纳入的作物周期 | 从建田到生理成熟田间植株的受控生物生产，并声明替代生产路线差异 | 与最终合格粮粒关联的一个田块和作物周期 |
| `harvest_capture` | 成熟荚果收获与采集 | `required` | 成熟同步时一次采摘，成熟错开时覆盖全部采摘 | 将成熟荚果从生产环境中独立移出 | 一次田块采摘事件或关联的多次采摘批次 |
| `primary_conditioning` | 荚果干燥、脱粒与初步清理 | `required` | 每个收获荚果批次 | 将收获荚果初级处理为松散清洁粮粒，并声明替代技术差异 | 一个收获荚果批次 |
| `final_drying` | 条件性终干燥与稳定化 | `conditional` | 清理后粮粒超过声明的农场门水分或稳定性限值时纳入 | 将可用湿粮稳定为干燥稳定粮粒的有界干预 | 一个干燥批次与遍次 |
| `grading_handoff` | 分级、去向判定与农场门交接 | `required` | 每个完成调理的粮粒批次 | 将粮粒互斥分类为合格、降级、返工或拒收去向 | 与农场门产出关联的一个分级批次 |

生产按田块与作物周期建立批次索引。收获按采摘事件或关联采摘批次建立索引，收获后作业按批次、运行与遍次建立索引。投入、产出、清洁和切换事件须使用这些标识，以确保共享负荷仅归属一次。

### 过程: 牛豆田间管理生产 (`field_production`)

#### 输入

##### 产品流

###### 牛豆种植材料 (`planting_material`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 种植用牛豆种子
- 流属性/单位: Mass / kg
- 数量规则: 计量进入代表田块的种植材料；不得把收获参考产品归作种用商品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 5
  - 上限: 250
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒的种植材料
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 农业养分统一供应 (`nutrient_supply`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 实际矿质肥料、有机肥和含养分改良剂
- 绑定模式: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- 流属性/单位: Product mass or volume and nutrient content / kg, L or m3 product; kg nutrient
- 数量规则: 逐一记录每种实际产品及施用事件并保留配方与养分分析；生成数据集时展开为经核实的具体产品 UUID
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2000
  - 单位: kg product equivalent
  - 基准: 每 1,000 kg 合格粮粒施用的含养分产品质量合计；体积另行披露
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 植保产品 (`crop_protection`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 实际施用的植保产品
- 流属性/单位: Product mass or volume / kg or L
- 数量规则: 计量每种制剂与施用事件；另行保留有效成分和浓度
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg product equivalent
  - 基准: 每 1,000 kg 合格粮粒的制剂总量；液体体积另行报告
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 灌溉供水 (`irrigation_service`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 灌溉水
- 流属性/单位: Volume / m3
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则: 使用灌溉时计量送达田间的灌溉水；雨养田块可为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: m3
  - 基准: 每 1,000 kg 合格粮粒的灌溉供水量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 田间作业能源载体 (`field_energy`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 田间作业使用的实测燃料与外购能源
- 流属性/单位: Net energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 按作业记录实际能源载体并使用披露因子换算；保留载体原始数量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: MJ
  - 基准: 每 1,000 kg 合格粮粒的田间作业能源
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 基本流

###### 耕地占用 (`land_occupation`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 农业土地占用
- 流属性/单位: Area time / ha crop-cycle
- 数量规则: 计算与合格产出关联的种植面积和占用作物周期
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_field_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.05
  - 上限: 10
  - 单位: ha crop-cycle
  - 基准: 每 1,000 kg 合格粮粒的耕地占用
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


#### 输出

##### 产品流

###### 成熟田间牛豆作物 (`mature_standing_crop`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 预期产出：达到收获条件的生理成熟牛豆植株与荚果
- 流属性/单位: Mass / kg
- 数量规则: 计算交由收获过程且已表征水分的成熟作物，覆盖声明的单次或多次采摘路线
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_field_outputs`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 12000
  - 单位: kg as harvested
  - 基准: 与 1,000 kg 合格粮粒关联的成熟地上作物
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 预期秸秆或田间残体共产品 (`field_residue_intended`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 有意回收利用的牛豆秸秆或作物残体
- 流属性/单位: Dry mass / kg
- 数量规则: 仅计量具有预期去向和交接的材料；否则归为田间留存残体或废物
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_outputs`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg dry matter
  - 基准: 每 1,000 kg 合格粮粒对应的预期回收秸秆
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 废物流

###### 未回收田间残体与收获前损失 (`field_losses`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 未回收作物残体、落荚和受损材料
- 流属性/单位: Mass / kg
- 数量规则: 通过田间抽样估算，并与预期共产品分别核对
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_field_outputs`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg as observed
  - 基准: 每 1,000 kg 合格粮粒对应的未回收残体与收获前损失
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 基本流

###### 管理土壤直接与间接氧化亚氮 (`soil_n2o`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 管理土壤向空气排放的氧化亚氮
- 流属性/单位: Mass / kg N2O
- 数量规则: 基于实测氮活动数据及披露的 IPCC 层级与因子计算；按 44/28 将 N2O-N 转为 N2O
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_field_records`
- 来源: `ipcc-2019-managed-soils`
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg N2O
  - 基准: 每 1,000 kg 合格粮粒的管理土壤 N2O
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `ipcc-2019-managed-soils`


### 过程: 成熟荚果收获与采集 (`harvest_capture`)

#### 输入

##### 产品流

###### 交由收获的成熟田间作物 (`standing_crop_input`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 生理成熟牛豆作物
- 流属性/单位: Mass / kg
- 数量规则: 承接田间生产的已表征水分成熟作物且不得重复计量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 12000
  - 单位: kg as harvested
  - 基准: 每 1,000 kg 合格粮粒的成熟作物投入
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 收获能源载体 (`harvest_energy`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 采摘、割收或收集使用的实测燃料与外购能源
- 流属性/单位: Net energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 按采摘事件记录能源；成熟错开时覆盖全部重复采摘
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: MJ
  - 基准: 每 1,000 kg 合格粮粒的收获能源
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


#### 输出

##### 产品流

###### 收获的成熟牛豆荚果 (`harvested_mature_pods`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 成熟干荚或可进入干燥的牛豆荚果
- 流属性/单位: Mass / kg
- 数量规则: 称量每个交接到荚果干燥与调理过程的成熟荚果批次
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 来源: `iita-farmers-guide-cowpea-2009`
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 5000
  - 单位: kg pods as harvested
  - 基准: 每 1,000 kg 合格粮粒对应的收获成熟荚果
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `iita-farmers-guide-cowpea-2009`

###### 回收的收获残体共产品 (`harvest_residue_coproduct`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 具有预期去向的回收秸秆或茎秆
- 流属性/单位: Dry mass / kg
- 数量规则: 仅在交接点计量具有独立预期用途的回收材料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: kg dry matter
  - 基准: 每 1,000 kg 合格粮粒对应的回收收获残体
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 废物流

###### 落粒、未收集或受损收获材料 (`harvest_loss`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 无预期产品去向的收获损失及受损荚果或粮粒
- 流属性/单位: Mass / kg
- 数量规则: 对每次采摘开展代表性损失抽样估算，并从合格产出中排除
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒对应的收获损失
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


### 过程: 荚果干燥、脱粒与初步清理 (`primary_conditioning`)

#### 输入

##### 产品流

###### 收获荚果批次 (`pod_lot_input`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 收获的成熟牛豆荚果
- 流属性/单位: Mass / kg
- 数量规则: 称量进料荚果并在干燥、脱粒与清理前记录进料水分
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 来源: `iita-farmers-guide-cowpea-2009`
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 5000
  - 单位: kg pods as received
  - 基准: 每 1,000 kg 合格粮粒对应的进料荚果
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `iita-farmers-guide-cowpea-2009`

###### 调理能源载体 (`conditioning_energy`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 荚果干燥、脱粒、扬净与清理的实测能源
- 流属性/单位: Net energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 按批次和遍次记录实际能源载体；被动日晒与人工操作若另行报告人力，可记录零外购能源
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 15000
  - 单位: MJ
  - 基准: 每 1,000 kg 合格粮粒的调理能源
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


#### 输出

##### 产品流

###### 松散清洁牛豆粮粒 (`loose_cleaned_grain`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 终水分判定前经脱粒和扬净的牛豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 称量调理后粮粒，并在交接时记录水分、杂质、虫害和破碎粒
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 来源: `iita-west-africa-cowpea-2018`
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 2000
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒对应的松散调理粮粒
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `iita-west-africa-cowpea-2018`

###### 预期荚壳或糠秕共产品 (`chaff_coproduct`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 有意供利用的荚壳、糠秕或秸秆
- 流属性/单位: Dry mass / kg
- 数量规则: 仅在存在预期去向和交接时单独称量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 3000
  - 单位: kg dry matter
  - 基准: 每 1,000 kg 合格粮粒对应的预期调理共产品
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 废物流

###### 调理拒收物与杂质 (`conditioning_rejects`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 荚果碎片、石块、土壤、杂质及不可回收受损粮粒
- 流属性/单位: Mass / kg
- 数量规则: 称量互斥的拒收去向，并区分处置、返田或回收
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒对应的调理拒收物
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


### 过程: 条件性终干燥与稳定化 (`final_drying`)

#### 输入

##### 产品流

###### 需稳定化的清洁湿粮 (`moist_grain_input`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 高于声明水分或稳定性限值的清洁牛豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 在干燥干预前称量并检测每批次；已满足限值时省略本过程
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_records`
- 来源: `fao-grain-drying-storage`
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2500
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒对应的终干燥湿粮投入
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `fao-grain-drying-storage`

###### 终干燥能源载体 (`drying_energy`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 终干燥使用的实测外购能源或燃料
- 流属性/单位: Net energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 按每次干燥遍次记录实际能源载体和运行时间；被动环境干燥可报告零外购能源
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20000
  - 单位: MJ
  - 基准: 每 1,000 kg 合格粮粒的终干燥能源
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


#### 输出

##### 产品流

###### 稳定化干牛豆粮粒 (`stabilized_dry_grain`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 达到声明水分与稳定性条件的牛豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 出料称量并检测水分后交由分级；未充分干燥材料只能通过有记录的额外遍次返回
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_records`
- 来源: `fao-grain-drying-storage`
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2000
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒对应的稳定化粮粒
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `fao-grain-drying-storage`


##### 废物流

###### 干燥拒收物 (`drying_rejects`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 干燥中移除的霉变、虫害或其他拒收粮粒
- 流属性/单位: Mass / kg
- 数量规则: 称量拒收物并记录处置、回收或降级去向；不得计入稳定化产出
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_records`
- 来源: `fao-cowpea-postharvest`
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒对应的干燥拒收物
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `fao-cowpea-postharvest`


##### 基本流

###### 终干燥去除水分 (`water_removed`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 排向空气的水
- 流属性/单位: Mass / kg
- 数量规则: 根据进出料质量与湿基水分计算，并与拒收物和库存变化核对
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_drying_records`
- 来源: `mass-balance-identity`
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg water
  - 基准: 每 1,000 kg 合格粮粒对应的去除水分
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`


### 过程: 分级、去向判定与农场门交接 (`grading_handoff`)

#### 输入

##### 产品流

###### 进入分级的调理粮粒 (`conditioned_grain_input`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 清洁干燥或稳定化牛豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 称量每个进入分级的批次，并保留经过或绕过终干燥的路径
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 2500
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒对应的调理粮粒投入
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 分级与搬运能源载体 (`grading_energy`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 分级、输送与批次切换清洁使用的实测能源
- 流属性/单位: Net energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 按运行记录实际能源载体，并将共享清洁或切换能源仅归属一次
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10000
  - 单位: MJ
  - 基准: 每 1,000 kg 合格粮粒的分级与搬运能源
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 返工的不合格粮粒 (`rework_return`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 由先前分级遍次返回的不合格牛豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 称量每次返回并关联原批次及最终互斥去向；保留既有负荷
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒对应的返工返回量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


#### 输出

##### 产品流

###### 农场门合格干牛豆粮粒 (`cowpeas_dry_farm_gate`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: Cow peas, dry `c377d583-fcf6-47fe-ac52-95ec0a377058`
- 绑定模式: `fixed`
- 流属性/单位: Mass / kg
- 数量规则: 排除降级品、拒收物和未解决返工材料后设为参考数量
- 数值来源模式: 固定值 (`fixed_value`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 身份引用 (`identity_reference`)
- 来源: `mass-balance-identity`
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: 农场门合格成熟干牛豆粮粒
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 降级牛豆粮粒 (`downgraded_grain`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 有意以低于合格参考等级出售或交接的牛豆粮粒
- 流属性/单位: Mass / kg
- 数量规则: 称量每个降级去向，并与合格、返工和拒收状态保持互斥
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 来源:
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒对应的降级粮粒
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 废物流

###### 最终分级拒收物 (`grading_rejects`)

按关联田块、采摘事件、批次或运行定量该角色，并保留其互斥交接。

- 选定流: 杂质、严重受损粮粒及无产品去向的其他材料
- 流属性/单位: Mass / kg
- 数量规则: 称量最终拒收物并记录处置或回收路线；从合格与降级产出中排除
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1,000 kg 农场门合格干牛豆粮粒
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grading_records`
- 来源: `fao-cowpea-postharvest`
- 数量范围: 完整定量范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1,000 kg 合格粮粒对应的最终拒收物
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源: `fao-cowpea-postharvest`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_output_classification` | 全部产出节点 | 在归属前将每项产出分类为合格产品、独立预期共产品、系统内留存残体、返工物、降级产品或废物；同一材料只能具有一个最终状态。 | `mass-balance-identity` |
| `allocation_coproduct` | 预期秸秆、糠秕或降级粮粒 | 存在独立预期产出时，须作出并披露研究特定的归属决定。因果关系支持时优先采用有据的物理关系；否则披露经济分配、价格、期间与敏感性。残体和废物不得自动获得抵扣。 | `mass-balance-identity` |
| `allocation_batch` | 田块、采摘、批次与运行 | 将直接记录归属到对应田块、事件或批次。共享清洁、切换与运行负荷按实测吞吐量或其他披露的因果驱动因素仅归属一次；不得在每次采摘中重复计算同一作业批次。 | `mass-balance-identity` |
| `allocation_rework` | 返回的不合格材料 | 保留返回材料已携带的负荷，仅增加返工增量负荷，并在最终合格、降级、回收或处置去向仅计量一次其质量。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_records` | `field_production` | 种植、养分、植保、水、能源、土地与氮活动 | 田间日志、发票、仪表与施用记录 | field; area; dates; product; amount; formulation; nutrient analysis; water; carrier; factor | 将每次施用与作业核对到田块 | kg; L; m3; kWh; MJ; ha | 每次事件 | 作物周期 | 每个田块 | 按实际产品或载体汇总后归一化到合格产出 | 发票、校准仪表、标签与田间日志 |
| `cp_field_outputs` | `field_production` | 成熟作物、预期残体与损失 | 田间样方与质量记录 | field; area; crop state; fresh mass; dry matter; destination; loss | 代表性抽样加实测交接 | kg; %; ha | 田块与作物周期 | 成熟至末次采摘 | 每个田块 | 对互斥产出状态进行水分对齐 | 抽样计划、秤校准与去向记录 |
| `cp_harvest_records` | `harvest_capture` | 荚果、残体、损失与能源 | 采摘单、秤、损失样方与机械日志 | field; picking date; route; inlet state; pod mass; residue; loss; carrier; moisture; destination | 记录每次采摘并核对关联采摘批次 | kg; %; L; kWh; MJ | 每次采摘 | 作物周期内全部采摘 | 每个田块与路线 | 汇总全部采摘的互斥产出 | 带日期单据、校准秤与损失方案 |
| `cp_conditioning_records` | `primary_conditioning` | 荚果、粮粒、糠秕、拒收物与能源 | 批次质量与作业日志 | lot; pass; inlet and outlet mass; moisture; carrier; duration; reject; co-product; destination | 逐遍次称量每个投入与互斥产出 | kg; %; kWh; MJ; h | 每批次与遍次 | 荚果接收至初步清理 | 每个调理地点 | 核对水分对齐的遍次平衡且不重复返回流 | 校准秤、水分仪与闭合表 |
| `cp_drying_records` | `final_drying` | 湿粮、稳定粮、拒收物、水与能源 | 干燥批次日志与水分检测 | lot; pass; inlet and outlet mass; wet-basis moisture; energy; duration; reject; stock change | 每遍次前后检测并称量 | kg; %; kWh; MJ; h | 每批次与遍次 | 干燥干预期间 | 每台干燥设备或干燥场地 | 计算干物质与水分平衡；关联每次返回 | 校准仪表、秤与遍次历史 |
| `cp_grading_records` | `grading_handoff` | 合格、降级、返工、拒收与能源 | 分级单、检测与运行日志 | lot; run; pass; grade; moisture; foreign matter; insects; broken fraction; each mass; destination; energy | 称量并分类每个互斥产出状态 | kg; %; kWh; MJ | 每批次、运行与遍次 | 分级至农场门交接 | 每个分级地点 | 将返回流追溯到来源并仅计一次最终去向 | 单据、检测结果、秤校准与去向证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部流 | 归一化量 = 代表量 × 1,000 / 农场门合格粮粒质量 | 代表量；合格质量 | 每 1,000 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_moisture_balance` | 荚果与粮粒 | 干物质 = 湿质量 ×（1 − 湿基水分比例）；去除水等于考虑拒收物和库存变化后的进料水减出料水 | 进出料质量与水分；拒收物；库存变化 | 对齐的干物质与去除水量 | `mass-balance-identity`; `fao-grain-drying-storage` |
| `calc_mass_closure` | 收获与收获后节点 | 水分对齐投入 = 互斥产出 + 实测损失或排放 + 库存变化，并处于披露的不确定度内 | 全部关联进料、出料、损失与库存记录 | 节点闭合与未解释差额 | `mass-balance-identity` |
| `calc_soil_n2o` | 管理土壤 | 对实测合成肥、有机物、残体及其他氮活动采用披露的 IPCC 层级；按 44/28 将 N2O-N 转为 N2O | 氮活动与选定因子 | kg N2O | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留物种、作物年份、类别或颜色、等级、水分、杂质、虫害、破碎或裂粒比例及路线。 | 农场门单据与实验室或校准田间检测 |
| `dq_traceability` | 全部过程 | 用稳定标识关联每个田块、采摘、批次、运行、遍次、返回流与最终去向。 | 田块至批次追踪与运行历史 |
| `dq_completeness` | 作物周期 | 覆盖全部管理事件、每次错峰采摘、全部调理遍次、条件性干燥、分级、返工与拒收物。 | 事件索引与完整性核对 |
| `dq_mass_balance` | 物料节点 | 核对水分对齐的投入、预期产出、残体、降级材料、返工、拒收物、损失、排放与库存变化。 | 带差异解释的闭合工作表 |
| `dq_representativeness` | 发布数据集 | 报告地理、季节、田块、品种或商品类别、雨养或灌溉比例、采摘路线、收获后技术、干燥比例与汇总权重。 | 元数据登记表与加权批次索引 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求声明的产品、质量属性与单位组 UUID、1,000 kg 数量及全部必需限定信息。 |  |
| `validate_route_parent_delta` | 路线变体 | 要求每个变更的投入、拓扑、计算、数据或校验要求均具备具名母过程与当前证据；拒绝同一田块批次报告互斥变体。 | `iita-farmers-guide-cowpea-2009`; `iita-west-africa-cowpea-2018` |
| `validate_picking_completeness` | 收获 | 成熟同步时要求一个声明采摘事件；成熟错开时要求全部带日期采摘事件并与田块总量核对。 | `iita-farmers-guide-cowpea-2009` |
| `validate_nutrient_cardinality` | 每个过程 | 每个过程至多允许一张合并矿质肥料、有机肥与含养分改良剂的产品投入卡；该卡只能绑定无 group 的 flow-set.agricultural-nutrient-supply 版本 0.3.0。禁止独立 N、P、K、有机肥或改良剂卡。 |  |
| `validate_output_handoffs` | 全部产出节点 | 要求合格、预期共产品、残体、降级、返工、拒收和损失状态均具有互斥交接，并对每个预期共产品作出明确归属决定。 | `mass-balance-identity` |
| `validate_rework` | 调理、干燥与分级 | 将每个不合格状态关联到额外遍次、降级、回收或处置；保留既有负荷，并防止其同时出现在合格产出中。 | `mass-balance-identity` |
| `validate_batch_accounting` | 田块、采摘、批次与运行 | 要求投入、产出、清洁和切换事件带生产模式标识，并将每项共享负荷仅归属一次。 | `mass-balance-identity` |
| `validate_drying` | 终干燥 | 使用本过程时，要求进出料湿基水分与质量、能源、遍次历史、拒收物、去除水分及质量闭合；省略时要求证明粮粒已满足交接条件。 | `fao-grain-drying-storage` |
| `validate_ranges` | 全部流卡 | 每张定量流卡恰好要求一条完整数量范围，包括下限、上限、单位、基准、基准类型、证据类型与来源字段，且英文、中文和结构化输出中的数值与标记一致。 | `mass-balance-identity` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 农场门成熟干牛豆粮粒前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` 经代表性审查后 |
| allowed_use | 需要农场门未加工成熟整粒干牛豆粮粒的 LCA 与足迹研究 |
| excluded_use | 青荚或叶、作为种用商品销售的种子、熟制或罐藏粮粒、面粉、分瓣、工业分离组分，或未披露的门后储存与加工 |
| required_metadata | 地理；作物年份；田块与批次覆盖；物种；品种或商品类别；颜色；等级；水分；杂质；虫害；破碎或裂粒比例；雨养或灌溉比例；采摘模式；调理与干燥技术；产出去向；归属方法 |
| required_quality_disclosure | 初级数据覆盖；校准；抽样；缺失数据；暂定估算；质量与水分闭合；因子版本；汇总权重；范围例外 |
| update_trigger | 产品边界、平台身份、Flow Set 合同、地理、作物年份、管理、收获模式、收获后技术、等级规格、虫害状况、产出去向、分配或排放方法发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `iita-west-africa-cowpea-2018` | official_guidance | International Institute of Tropical Agriculture, Guide to cowpea production in West Africa, 2018, https://www.iita.org/wp-content/uploads/2020/05/Cowpea-manualENGLISH.pdf | 牛豆身份、田间路线、收获、脱粒、清理与收获后处理 |
| `iita-farmers-guide-cowpea-2009` | extension_guidance | IITA, Farmers' Guide to Cowpea Production in West Africa, https://biblio.iita.org/documents/U09aBkDugjeCowpeaNothomDev.PDF-b9aea89d10a5dd347edef9689d6d8a38.pdf | 成熟干荚收获、一次与重复采摘、脱粒、扬净与清理 |
| `fao-grain-drying-storage` | official_guidance | FAO, Farm structures in tropical climates, Chapter 9: Crop handling, conditioning and storage, https://www.fao.org/4/s1250e/S1250E0u.htm | 粮粒水分、清洁、干燥与储存条件区分 |
| `fao-cowpea-postharvest` | official_guidance | FAO INPhO, Cowpea: Post-harvest Operations, https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Cowpeas.pdf | 牛豆虫害、稳定化与拒收状态 |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤 N2O 活动数据、计算与因子 |
| `mass-balance-identity` | method_factor | 质量守恒用于水分对齐的物料投入、产出、损失、排放与库存变化 | 质量闭合、水分计算、交接、分配与返工核算 |
