---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beans-dry
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 干豆

## 1. 范围与适用性

本 PCR 适用于成熟干食用豆粒在声明农场门的生产。生产者必须声明植物学物种和商品类别，因为本类别可包含农艺与质量要求不同的多种干食用豆物种和商业类别。

前景边界从种子和其他外购投入进入受管理田间生产开始，纳入建植与田间管理、成熟收获、必要的田间预干、脱粒或脱荚、清理、分级，以及达到所声明农场门水分与等级所需的干燥。人工与机械收获、雨养与灌溉、田间干燥与设备干燥路线，只有在活动数据分别采集并加权时，才能共存于代表性生产组合中。

排除作为蔬菜收获的青豆、大豆、干蚕豆和干马豆、干鹰嘴豆、干扁豆、干豌豆、豇豆、班巴拉豆、木豆及其他单列脉冲作物。排除作为认证或商品化种子的种子生产，但从收获物中留作播种的豆粒必须作为内部流或共产品路线披露。排除磨粉、分瓣、烹煮、罐藏、零售包装、场外储藏和声明农场门之后的运输。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beans-dry |
| classification_refs | CPC 3.0 01701，Beans, dry |
| covered_products | 作为未经加工农场门商品出售的成熟干食用豆粒，须声明物种和商品类别 |
| excluded_products | 青豆；大豆；蚕豆和马豆；鹰嘴豆；扁豆；豌豆；豇豆；班巴拉豆；木豆；其他单列脉冲作物；认证种子；经磨粉、烹煮、罐藏或零售包装的豆 |
| representative_product | 经清理和分级的成熟干食用豆粒 |
| production_route | 受管理田间生产，随后进行成熟收获、脱粒或脱荚、清理、分级和条件性干燥 |
| market_state | 收获的未加工粮粒；农场门生产组合 |

受管理生物生产的父活动是声明干食用豆作物的田间种植。雨养与灌溉管理构成替代生产路线差异，因为它改变用水清单并可能改变产量记录；两者仅可作为分别计量的分层共存于生产组合。人工或整株拔收与直接机械收获构成替代收获技术差异，因为它改变田间预干、设备能源、落粒和破损记录。自然或田间干燥与设备干燥可以共存，但对于同一批次的同一除水区间二者互斥。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明农场门交付的、经清理分级的成熟干食用豆粒 |
| How much | 净质量 1,000 kg |
| How well | 声明物种与商品类别；声明湿基水分；声明等级或买方规格；不包含另行核算的拒收物和残余物 |
| How long or cycle | 一个作物周期采用单一期间处理，不在作物周期之间分摊。多个作物年份的观测仅在每个作物年记录均可追溯后方可平均。 |
| reference_flow_link | 离开最后一个纳入调制节点的净合格干豆质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Beans, dry `b297a6cf-1d2e-4d88-a99a-02807441a4db` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物学物种；商品类别；商品粮或留种路线；地理；作物年份；雨养或灌溉制度；收获技术；干燥路线；水分含量及湿基声明；等级或买方规格；农场门交接点 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考干豆产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明水分基准报告净合格粮粒质量；排除包装、交接前去除的外来物及另行去向的拒收物。 |
| `moisture_basis` | 每一粮粒状态质量 | 质量和水分含量 | kg 和湿基 % | 每个相关批次质量均记录实测水分。干物质换算采用干物质 = 湿质量 ×（1 − 水分分数），换算至声明目标水分时必须守恒干物质。 |
| `nutrient_products` | 矿质肥料、有机肥料和含养分改良剂投入 | 产品质量或体积及养分组成 | kg 或 m3 产品；kg N；kg P 或 P2O5；kg K 或 K2O | 每种实际产品仅记录一次，保留其组成与养分计量约定；不得在同一产品质量之外再次增加养分当量交换。 |
| `energy_records` | 燃料和外购能源 | 能源载体特定能量或体积 | MJ、kWh、L 或 kg | 保留载体身份与计量单位，仅以声明因子换算，并把能源归属到实际使用的批次、作业、田块或报告期。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 种子和外购投入进入声明的受管理田间生产周期 |
| starting_condition_role | 前景生产起始条件 |
| product_classification_scope | 仅限 CPC 3.0 01701 的成熟干食用豆 |
| recursive_input_rule | 同类别豆用于播种时，作为同类别产品投入记录质量、物种、商品类别、来源、处理状态和留种或外购路线；不得递归引用当前产出数据集。 |
| upstream_dataset_requirement | 外购种子、肥料、改良剂、植保产品、能源载体、相关供水及其他外购投入须连接兼容上游数据集；留种须保持为明确计量的内部流或共产品流。 |
| disclosure | 声明物种、商品类别、地理、作物年份、生产制度、种子路线、收获技术、预干、脱粒、清理分级安排、干燥路线、水分基准、等级、共产品去向、损失路线和农场门交接点。 |

田间生产节点把成熟站立作物交给独立收获节点。收获从田间移出生物产物，并具有独立的能源、落粒、残余物和交接记录，因此须独立建模。收获把未清理粮粒交给初级调制。清理与分级把来料划分为合格、降级、留种和拒收状态。只有在收获后通过有界干预除水时，干燥才作为独立保藏节点；须记录干燥前可用状态、目标水分、能源、除水、损失和批次交接。

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | 前景系统 | 纳入受管理田间生产、成熟收获、必要的田间预干、脱粒或脱荚、清理、分级，以及达到声明参考产品状态所需的农场门干燥。 | `fao-bean-postharvest-compendium`; `fao-postharvest-system` |
| `boundary_route_condition` | 条件性作业 | 仅对实际发生的批次或报告分层纳入灌溉、机械干燥和其他条件性作业；路线未启用时记录零活动。 |  |
| `boundary_downstream_exclusion` | 下游活动 | 排除农场门交接后的磨粉、分瓣、烹煮、罐藏、零售包装、场外储藏和运输。 | `usda-dry-edible-beans-2021` |
| `boundary_state_separation` | 产出状态 | 将合格豆、降级或破损豆、留种、有价值豆秸或荚壳、废弃筛下物、田间落粒和其他损失保持为具有明确交接点的独立状态。 | `fao-bean-postharvest-compendium` |
| `boundary_route_delta` | 替代路线 | 当雨养与灌溉、人工与机械收获、自然与设备干燥改变拓扑、清单类别、计算或校验时进行分层；不得对同一活动区间应用两条路线。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 受管理田间生产 | required |  | 受管理生物生产及声明的替代生产路线差异 | 种植面积和一个作物周期 |
| `mature_harvest` | 成熟收获与脱粒 | required |  | 收获与捕获及声明的替代技术路线差异 | 从田间移出的成熟作物总量 |
| `cleaning_grading` | 清理与分级 | required |  | 初级调制与分级 | 收到的未清理粮粒总量 |
| `farm_gate_drying` | 农场门干燥 | conditional | 合格粮粒在交接前需要有界除水干预时纳入 | 保藏与稳定 | 进入干燥作业的湿粮 |

生产属于季节性批次或作业期生产。每个田块、收获事件、调制批次、干燥作业、清理事件和作物年份均须保留标识符。投入、产出、清洁和换线负荷须关联这些标识符，或通过有据可查的报告期分配规则关联。

### 过程：受管理田间生产（`field_production`）

#### 输入

##### 产品流

###### 商品豆生产播种用种（`bean_seed_input`）

记录进入作物周期的外购或自留豆种，包括物种、商品类别、处理状态、可得时的发芽信息和来源路线。

- 选定流：Beans, dry `b297a6cf-1d2e-4d88-a99a-02807441a4db`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：归属到种植田块和作物周期的实测种子质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明水分下的合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定种子投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 合格干豆产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`agricultural_nutrient_inputs`）

本卡统一记录全部矿质肥料、有机肥料和含养分改良剂。保留每种实际产品的身份、数量、配方、养分组成、施用事件和归属；复合或有机产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次，保留组成并计算声明养分量，不重复计算复合或有机产品；生成数据集时每个输出产品交换均解析至一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定养分产品总投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg product
  - 基准：每 1,000 kg 合格干豆产出的全部含养分产品总质量；液体产品可按记录密度换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保与接种剂产品（`crop_protection_inputs`）

基础记录分别保存每种农药、农场施用的种子处理剂、生物防治品和根瘤菌接种剂，并保留有效成分和制剂信息。

- 选定流：植保与接种剂产品
- 流属性/单位：质量或体积 / kg 或 L 产品
- 数量规则：实测购入或领用量减有记录的退回量，并按施用记录归属。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：暂定作物投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg product equivalent
  - 基准：每 1,000 kg 合格干豆产出的制剂产品质量之和；体积记录按实测密度换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供给田间的灌溉水（`irrigation_water`）

仅在灌溉生产中纳入。记录输送至田块的水量，雨养路线记为零。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则：计量体积，或由校准流量与运行时间计算的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_water`
- 数量范围：暂定灌溉水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：m3
  - 基准：每 1,000 kg 合格干豆产出；雨养时为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间能源载体（`field_energy`）

记录用于建植和田间管理的实际燃料、电力、畜力服务或承包作业能源；收获能源在收获节点记录。

- 选定流：田间能源供应
- 流属性/单位：载体特定数量和能量 / L、kg、kWh 或 MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：实测载体用量，或用声明因子换算的承包活动，并归属至田块和作物周期。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：暂定田间能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：MJ
  - 基准：每 1,000 kg 合格干豆产出的最终能源总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付收获的成熟站立豆作物（`mature_standing_crop`）

将可供收获的成熟作物记录为中间产品状态，并保持其田块、物种、商品类别和作物周期关联。

- 选定流：成熟站立干豆作物
- 流属性/单位：Mass / kg
- 数量规则：在一致水分基准下，由已收获产品加实测或估算的收获残余物和田间损失计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_mass_reconciliation`
- 数量范围：暂定成熟作物质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：8000
  - 单位：kg
  - 基准：每 1,000 kg 合格粮粒对应的可供收获粮粒、附着豆荚和秸秆材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 受管理土壤直接氧化亚氮排放（`direct_soil_n2o`）

基于实测氮投入和作物残余物处理，按声明清单方法计算直接 N2O，并保留排放物种和空气区室。

- 选定流：Dinitrogen monoxide, to air
- 流属性/单位：Mass / kg N2O
- 数量规则：由采集的氮投入和适用排放因子计算；区分 N2O-N 与 N2O。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_field_emission_drivers`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定直接土壤 N2O 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg N2O
  - 基准：每 1,000 kg 合格干豆产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间氮管理产生的氨排放（`field_ammonia`）

所选清单方法报告氨挥发时纳入；保留物质、接收区室及 NH3-N 与 NH3 的区别。

- 选定流：Ammonia, to air
- 流属性/单位：Mass / kg NH3
- 数量规则：由实际氮产品、施用事件和声明因子方法计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_drivers`
- 数量范围：暂定氨排放筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg NH3
  - 基准：每 1,000 kg 合格干豆产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 从田间进入水体的硝酸盐（`field_nitrate`）

仅在声明清单方法支持时纳入硝酸盐淋溶或径流，并保留接收水体区室。

- 选定流：Nitrate, to water
- 流属性/单位：Mass / kg NO3-
- 数量规则：由实测氮投入、场址条件和声明淋溶或径流方法计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_drivers`
- 数量范围：暂定硝酸盐损失筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg NO3-
  - 基准：每 1,000 kg 合格干豆产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`)

### 过程：成熟收获与脱粒（`mature_harvest`）

#### 输入

##### 产品流

###### 从田间接收的成熟站立作物（`harvest_crop_input`）

记录从田间生产转移的中间作物状态，不创建重复上游负荷。

- 选定流：成熟站立干豆作物
- 流属性/单位：Mass / kg
- 数量规则：与田间生产交接相同的批次质量和水分基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_mass_reconciliation`
- 数量范围：暂定来料成熟作物质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：8000
  - 单位：kg
  - 基准：每 1,000 kg 合格粮粒对应的收获节点接收作物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获与脱粒能源载体（`harvest_energy`）

记录拔收、割取、铺条、联合收获、脱粒、脱荚和收获节点内转移的能源。人工劳动可另行披露，但未经声明方法不得换算为能源。

- 选定流：收获与脱粒能源供应
- 流属性/单位：载体特定数量和能量 / L、kg、kWh 或 MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按收获事件实测能源，或按运行时间、面积或吞吐量从设备日志分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：暂定收获能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：MJ
  - 基准：每 1,000 kg 合格干豆产出的最终能源总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未清理干豆粮粒（`uncleaned_bean_grain`）

记录脱粒或脱荚后的粮粒，包括随后由清理分级去除的物质，并记录实测水分。

- 选定流：未清理干豆粮粒
- 流属性/单位：Mass / kg
- 数量规则：交付清理分级的实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_quality`
- 数量范围：暂定未清理粮粒质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1600
  - 单位：kg
  - 基准：每 1,000 kg 合格干豆产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有价值豆秸与荚壳残余物（`valuable_straw_pod_residue`）

仅当秸秆、藤蔓或荚壳被有意收集并交付有益用途或出售时记录为产品产出；否则进入田间残余物或废物路线。

- 选定流：用于有益用途的豆秸与荚壳残余物
- 流属性/单位：Mass / kg
- 数量规则：作为有价值产出离开收获节点的实测或计算干物质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_products_losses`
- 数量范围：暂定有价值残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kg dry matter
  - 基准：每 1,000 kg 合格干豆产出的已收集有价值残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 落粒与未回收豆粒（`harvest_shattering_loss`）

记录在拔收、割取、铺条、捡拾、联合收获、脱粒或脱荚中损失且未作为产品回收的成熟豆粒。

- 选定流：未回收干豆粮粒
- 流属性/单位：Mass / kg
- 数量规则：实测损失调查，或在核算已收粮粒与残余物后的平衡差额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_co_products_losses`
- 数量范围：暂定收获损失筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg
  - 基准：每 1,000 kg 合格干豆产出的未回收粮粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：清理与分级（`cleaning_grading`）

#### 输入

##### 产品流

###### 接收用于调制的未清理粮粒（`conditioning_grain_input`）

在清理分级全过程保持批次身份、物种、商品类别、水分和收获来源。

- 选定流：未清理干豆粮粒
- 流属性/单位：Mass / kg
- 数量规则：与收获交接相同的质量和水分基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_quality`
- 数量范围：暂定调制来料质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1600
  - 单位：kg
  - 基准：每 1,000 kg 合格干豆产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清理与分级能源载体（`conditioning_energy`）

记录输送、补充脱粒、风选、筛选、色选、分级和批次换线清洁所用能源。

- 选定流：清理与分级能源供应
- 流属性/单位：载体特定数量和能量 / kWh、L、kg 或 MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：实测能源，或按运行时间或吞吐量分配设备能源；换线负荷仅归属一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 数量范围：暂定调制能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1,000 kg 合格干豆产出的最终能源总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格的清理分级豆（`accepted_graded_beans`）

记录符合声明等级或买方规格的豆粒。若之后无设备干燥，本流即参考产品交接流。

- 选定流：Beans, dry `b297a6cf-1d2e-4d88-a99a-02807441a4db`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：在实测水分下计量的净合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_quality`
- 数量范围：参考产出核算范围
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：最后一个纳入节点后的净合格参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 降级或破损豆粒（`downgraded_bean_grain`）

破碎、变色、虫损、混杂类别或其他不合格粮粒，仅在存在声明买方或有益去向时作为独立产品。不得计入合格产出。

- 选定流：降级干豆粮粒
- 流属性/单位：Mass / kg
- 数量规则：按声明降级类别和去向实测质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_products_losses`
- 数量范围：暂定降级粮粒筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：每 1,000 kg 合格干豆产出的降级粮粒
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 留作或出售用于播种的豆粒（`retained_seed_output`）

记录从商品批次转作未来播种或种子销售的粮粒。声明其为内部流还是有价值共产品，不得计入合格食用产出。

- 选定流：用于播种的干豆粮粒
- 流属性/单位：Mass / kg
- 数量规则：在分流点实测质量，并记录物种、类别、处理状态和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_products_losses`
- 数量范围：暂定留种筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg
  - 基准：每 1,000 kg 合格干豆产出的留种或售种质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 清理筛下物与废弃拒收物（`cleaning_rejects`）

按去向记录石块、土壤、外来物、不可用荚壳、严重破损豆及其他废弃筛下组分。送往有益用途的材料须重分类为产品产出。

- 选定流：清理筛下物与废弃拒收物
- 流属性/单位：Mass / kg
- 数量规则：按等级状态和去向实测拒收质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格干豆产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_co_products_losses`
- 数量范围：暂定清理拒收物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg
  - 基准：每 1,000 kg 合格干豆产出的废弃拒收物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：农场门干燥（`farm_gate_drying`）

#### 输入

##### 产品流

###### 进入干燥的湿清理豆（`wet_beans_to_drying`）

仅在需要有界设备干燥或受控干燥干预时纳入。按干燥作业记录来料质量和水分。

- 选定流：湿清理干豆粮粒
- 流属性/单位：Mass / kg
- 数量规则：在实测湿基水分下计量的来料批次质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥后合格豆产出
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_run`
- 数量范围：暂定湿粮投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1400
  - 单位：kg
  - 基准：干燥启用时每 1,000 kg 干燥后合格豆产出
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥能源载体（`drying_energy`）

记录干燥作业使用的每种燃料或电力载体。自然田间干燥的设备干燥能源为零，不得重复归属干燥负荷。

- 选定流：干燥能源供应
- 流属性/单位：载体特定数量和能量 / kWh、L、kg 或 MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：归属至干燥作业的实测载体用量，包括启动和停机；共享能源按计量或湿粮吞吐量仅分配一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干燥后合格豆产出
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_run`
- 数量范围：暂定干燥能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：MJ
  - 基准：干燥启用时每 1,000 kg 干燥后合格豆产出的最终能源总量
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门干燥合格豆粒（`dried_reference_beans`）

记录达到声明水分和等级的稳定产出，保留批次身份并连接来料湿粮和干燥作业。

- 选定流：Beans, dry `b297a6cf-1d2e-4d88-a99a-02807441a4db`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：稳定处理后、农场门交接前的实测净干豆质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 干燥后合格豆产出
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_run`
- 数量范围：干燥节点参考产出范围
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：干燥节点净合格产出
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 干燥拒收豆与损失（`drying_rejects`）

按去向分别记录热损伤、霉变、洒落或其他拒收豆。可回收降级产品须重分类为产品产出。

- 选定流：干燥拒收物与损失
- 流属性/单位：Mass / kg
- 数量规则：实测拒收质量加核算干物质损失，不包括除去的水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干燥后合格豆产出
- 基准类型：过程产出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_run`
- 数量范围：暂定干燥拒收物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg dry matter
  - 基准：干燥启用时每 1,000 kg 干燥后合格豆产出的拒收干物质
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥期间从豆粒移除的水（`drying_water_removed`）

按湿基水分平衡计算移除水量，不得作为豆粒干物质损失处理。

- 选定流：Water, to air
- 流属性/单位：Mass / kg
- 数量规则：由实测批次质量和湿基水分分数计算来料水质量减产出水质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥后合格豆产出
- 基准类型：过程产出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_run`
- 来源：`fao-grain-drying`
- 数量范围：暂定干燥除水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：kg water
  - 基准：干燥启用时每 1,000 kg 干燥后合格豆产出
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 田块、收获事件、批次和干燥作业 | 在应用分配前，优先依据田块、事件、批次、作业和去向记录进行细分和直接归属。 |  |
| `allocation_intended_outputs` | 合格豆、留种、降级豆和有价值残余物 | 枚举每项有意产出及交接点。一个节点存在两项或以上独立有价值产出时，声明并论证 PCR 特定的物理或经济分配；若选择会实质影响结果，报告另一基准的敏感性。 |  |
| `allocation_residue_test` | 豆秸、豆荚、筛下物和拒收豆 | 仅当材料被有意收集并转移用于有益用途或出售时才作为共产品。田间留存残余物、未回收落粒和废弃拒收物仍为残余物、损失或废物，不接受产品分配。 |  |
| `allocation_rework` | 返工、重新清理、重新干燥、降级或退回材料 | 将返工连接至产生不合格状态的节点，保留既有负荷并仅增加返工增量负荷；不得同时把返工或降级质量计作合格产出。 |  |
| `allocation_shared_runs` | 共享设备、清洁、启动、停机和换线 | 尽可能按直接计量仅归属一次共享作业负荷；否则采用有据可查的时间、湿粮吞吐量或其他因果物理基准，防止跨批次或路线重复计算。 |  |
| `allocation_internal_seed` | 返回后续作物周期的留种 | 将留种记录为明确的内部流或共产品流，一致应用并披露所选跨周期约定；不得以递归为由删除种子流。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | field_production | 种子、养分、植保与接种剂 | 采购、领用、施用和田块记录 | 田块；作物年；物种；商品类别；产品身份；配方；数量；单位；养分组成；施用日；处理面积；退回量 | 将发票和库存流转与田间施用记录核对；每种养分产品只保留一次 | 原产品单位；kg 或 m3；kg 养分 | 每次施用和每作物周期 | 完整作物周期 | 每个田块或同质管理分层 | 按产品汇总实际数量并对关联作物周期合格产出归一化 | 发票；施用日志；库存核对；组成证据 |
| `cp_irrigation_water` | field_production | 灌溉水 | 水表或灌溉事件记录 | 田块；事件；表读数或流量；时长；水源；灌溉面积 | 水表差值或校准流量 × 运行时间 | m3 | 每次灌溉 | 完整作物周期 | 每个灌溉田块；雨养田块记零 | 汇总田间输水体积并对关联合格产出归一化 | 水表校准或流量检查；事件日志 |
| `cp_energy_records` | field_production; mature_harvest; cleaning_grading | 田间、收获和调制能源 | 计量、燃料领用、承包商和设备日志 | 节点；田块或批次；载体；数量；单位；起止读数；运行时间；吞吐量；共享作业规则 | 计量或燃料核对；用记录的因果驱动仅分配一次共享作业 | 载体单位和 MJ | 每事件或作业 | 完整作物周期和调制作业期 | 每田块、机器或设施 | 按载体和节点汇总；用声明因子换算并对关联产出归一化 | 计量校准；发票；设备日志；分配工作表 |
| `cp_field_emission_drivers` | field_production | 直接田间排放 | 施用、残余物、土壤、气候和方法记录 | N 产品与含量；返田或移出残余物；土壤和气候分层；因子方法和版本 | 仅按声明方法从实采驱动计算 | kg N；kg 干物质；方法特定单位 | 每次施用和年度计算 | 作物周期及所需年度背景 | 每田块或同质分层 | 分层应用方法，保留区室和 N 至化合物换算后汇总物质 | 施用记录；组成证据；方法引用；计算工作簿 |
| `cp_mass_reconciliation` | field_production; mature_harvest | 中间作物与收获质量平衡 | 田块与收获核算 | 田块；已收粮粒；残余物；田间留存残余物；落粒；各状态水分 | 在一致水分或干物质基准下核算全部实测与估算产出状态 | kg 和湿基水分 % | 每次收获 | 作物周期 | 每田块和收获事件 | 汇总前先核算投入产出；对合格产品归一化 | 校准秤；水分仪；损失调查；平衡检查 |
| `cp_lot_mass_quality` | mature_harvest; cleaning_grading | 批次质量、水分和等级状态 | 地磅、秤、水分与等级记录 | 批次；来源；物种；商品类别；进出质量；水分；等级；外来物；破损或损伤比例；去向 | 每个交接点校准称量并代表性质量取样 | kg 和 % | 每批次和交接点 | 完整收获与调制作业期 | 每批次和调制场址 | 跨交接守恒干物质，批次核算后再汇总 | 校准；取样记录；等级证书或买方规格 |
| `cp_co_products_losses` | mature_harvest; cleaning_grading | 残余物、共产品、降级、留种和损失 | 称量、去向和损失调查记录 | 产生节点；状态；质量；水分；质量类别；去向；分配所需价值；回收状态 | 尽可能称量，否则采用有据可查的取样和核算 | kg 湿质量和 kg 干物质 | 每事件或批次 | 完整作物周期和作业期 | 每田块、批次和去向 | 按状态和去向分别汇总；不得合并合格、降级、留种、残余物和废物 | 秤记录；去向收据；损失调查；核算 |
| `cp_drying_run` | farm_gate_drying | 湿料、干燥产出、拒收物、水分和能源 | 干燥作业记录 | 作业；批次；进出质量；进出水分；目标水分；能源载体及用量；拒收物；启动；停机；去向 | 每次作业校准称量、水分测量和能源计量 | kg；湿基 %；载体单位；MJ | 每次干燥作业 | 完整干燥作业期 | 每台干燥机和作业 | 计算干物质守恒与除水；共享能源仅分配一次；对干燥合格产出归一化 | 秤和水分校准；计量记录；干物质核算 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference` | 全部清单数量 | 归一化数量 = 归属声明路线的数量 ÷ 合格参考产品质量 × 1,000 kg | 归属流数量；合格参考产品质量 | 每 1,000 kg 参考产品的流数量 | `mass-balance-identity` |
| `wet_to_dry_matter` | 豆、残余物和拒收物质量 | 干物质 = 湿质量 ×（1 − 湿基水分分数） | 实测湿质量；实测湿基水分 | kg 干物质 | `fao-grain-drying` |
| `drying_water_balance` | 农场门干燥 | 除水 = 来料湿质量 × 来料水分分数 − 产出湿质量 × 产出水分分数；另行核算豆干物质和拒收物 | 进出质量和水分；拒收质量和水分 | kg 除水和干物质核算 | `fao-grain-drying` |
| `field_n2o_method` | 受管理土壤直接 N2O | 对实际合成 N、有机 N、作物残余 N 和其他所需驱动应用所选 IPCC 层级或有据可查的区域方法；按 44/28 将 N2O-N 换算为 N2O | 采集的 N 投入；残余物处理；方法因子；场址分层 | 按接收区室的 kg N2O | `ipcc-2019-managed-soils` |
| `lot_output_reconciliation` | 收获、清理、分级和干燥 | 来料干物质 = 合格 + 降级 + 留种 + 有价值残余物 + 拒收物 + 未回收干物质损失，差额须在声明不确定度内 | 全部状态特定质量和水分记录 | 核算后的产出状态和未解释差额 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考和中间豆状态 | 明确物种、商品类别、作物年份、批次谱系、预期路线和分类排除项。 | 田块、批次和产品规格记录 |
| `dq_temporal` | 生产组合 | 覆盖代表性作物周期；多年平均保留年度数值和权重。 | 作物年记录和汇总工作表 |
| `dq_route` | 替代生产与技术路线 | 分别计量并加权雨养/灌溉、人工/机械收获、自然/设备干燥及返工路线。 | 路线标志、事件日志和产量权重 |
| `dq_mass_moisture` | 豆、残余物、拒收物和损失状态 | 质量在影响比较时须带水分基准，每次交接须在声明不确定度内通过干物质核算。 | 秤和水分校准；核算报告 |
| `dq_nutrient` | 农业养分产品 | 保留实际产品身份、数量、组成和养分约定，并证明复合和有机产品仅计一次。 | 发票、标签或分析、施用记录和养分工作表 |
| `dq_completeness` | 全部过程节点 | 将合格产出、降级产出、留种、有价值残余物、拒收物、落粒和其他损失记录为具有去向的独立状态。 | 质量核算和去向记录 |
| `dq_runs` | 调制与干燥作业期 | 将能源、清洁、启动、停机、换线、产出和拒收物关联至作业或报告期，并仅归属一次共享负荷。 | 作业日志、计量记录和分配工作表 |
| `dq_method` | 计算排放 | 标明方法、层级、因子版本、单位、换算和适用区室；最终数据集中不得用宽泛物质标签替代已解析基本流身份。 | 引用方法和计算工作簿 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 核实流 UUID、物种、商品类别、未加工粮粒状态、农场门交接、水分基准、等级，以及排除青豆、大豆和单列脉冲作物。 |  |
| `validate_reference_mass` | 参考数量 | 确认最后一个纳入节点后恰为 1,000 kg 净合格豆粒，并排除包装、外来物、降级粮粒、留种和拒收物。 | `mass-balance-identity` |
| `validate_route_topology` | 替代路线 | 确认每批次具有一条声明的生产、收获、预干、调制和干燥拓扑；互斥路线区间不得重复计算。 |  |
| `validate_process_handoffs` | 全部节点 | 经水分基准换算后，确认田间产出等于收获投入、收获粮粒等于调制投入，任何干燥投入均连接合格调制批次。 | `mass-balance-identity` |
| `validate_grade_states` | 清理与分级 | 至少声明合格和拒收状态，并确保每个合格、降级、留种、有价值残余物、拒收和废物状态仅有一个交接点或去向。 | `usda-dry-edible-beans-2021` |
| `validate_drying` | 条件性干燥 | 启用时确认前后水分、干物质平衡、能源、除水、拒收物和作业身份；未启用时确认无设备干燥负荷。 | `fao-grain-drying` |
| `validate_rework` | 不合格与退回材料 | 确认重新清理或重新干燥材料回连产生节点，仅接受增量返工负荷，且最终状态仅计一次。 |  |
| `validate_outputs_allocation` | 多产出节点 | 确认全部有意产出和交接完整、归属决策已声明、已应用残余物与共产品判定，且重大时报告敏感性。 |  |
| `validate_runs` | 批次和作业期记录 | 确认投入、产出、清洁、换线、启动和停机均索引至田块、批次、作业或期间，且共享负荷未重复归属。 |  |
| `validate_ranges` | 每张清单流卡 | 确认每张卡恰有一个完整数量范围；条件性范围仅在路线启用时适用；报告数量由实际前景记录决定。 |  |
| `validate_nutrient_cardinality` | 每个过程 | 确认每个过程最多一张矿质肥料、有机肥料或含养分改良剂产品投入卡，且田间卡仅绑定不带 group 的 `flow-set.agricultural-nutrient-supply@0.3.0`。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程或聚合前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 物种、商品类别、地理、作物年份、生产制度、收获技术、干燥路线、水分基准、等级和共产品处理均与研究匹配的农场门成熟干食用豆粒 |
| excluded_use | 青豆、大豆、其他单列脉冲作物、认证种子生产、磨粉、烹煮、罐藏、零售包装、场外储藏或门后运输 |
| required_metadata | 参考流 UUID 与限定信息；CPC 背景；物种；商品类别；地理；作物年份；生产和收获路线；调制和干燥路线；水分基准；等级；田块、批次和作业覆盖；共产品和损失去向；分配；清单方法；DQR |
| required_quality_disclosure | 前景记录覆盖；秤、计量器和水分仪校准；路线加权；缺失数据处理；范围筛查异常；质量和干物质核算；排放因子方法和版本；分配敏感性 |
| update_trigger | 物种或商品类别、地理、生产制度、种子路线、收获或调制技术、干燥路线、等级要求、共产品去向、分配方法、清单方法或数据代表性发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-bean-postharvest-compendium` | handbook | FAO INPhO，Post-harvest Operations Compendium: Phaseolus beans，https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Phaesolus_beans.pdf | 豆类收获、田间干燥、脱粒、搬运、清理、损失和路线分解 |
| `fao-postharvest-system` | handbook | FAO，Post-harvest system and food losses，https://www.fao.org/4/ac301e/AC301e03.htm | 区分收获、预干、脱粒、清理、干燥、储藏和加工 |
| `fao-grain-drying` | handbook | FAO，Agricultural engineering in development: Drying，https://www.fao.org/4/t0522e/T0522E08.htm | 湿基水分定义、干燥边界、稳定目的和水量平衡计算 |
| `usda-dry-edible-beans-2021` | official_guidance | USDA Agricultural Marketing Service，Commodity Specification for Dry Edible Beans, Peas and Lentils，August 2021，https://www.ams.usda.gov/sites/default/files/media/CommoditySpecificationforDryEdibleBeansPeasandLentilsAugust2021.pdf | 成熟干豆商品身份、水分与质量状态背景及下游加工区分 |
| `ipcc-2019-managed-soils` | method_factor | IPCC，2019 Refinement to the 2006 IPCC Guidelines，Volume 4，Chapter 11，https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 受管理土壤直接 N2O 计算和 N2O-N 至 N2O 换算背景 |
| `mass-balance-identity` | method_factor | 对实测前景交接应用质量与干物质守恒 | 参考归一化、产出状态核算及 1,000 kg 参考数量 |
