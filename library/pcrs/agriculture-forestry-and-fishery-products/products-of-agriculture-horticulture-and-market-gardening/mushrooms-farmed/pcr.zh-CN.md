---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mushrooms-farmed
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 声明门的新鲜栽培蘑菇

## 1. 范围与适用性

本 PCR 用于商业栽培的新鲜、完整或修整后的食用蘑菇前景数据包，从种植基质接收或制备，经接种、培养、出菇、重复潮次、采收、分级、可选清洗或冷却、初级包装，到农场或包装厂声明门交接。适用于室内房间、隧道、层架、袋、块、床以及段木栽培，但必须声明物种、路线、基质、生产周期和门状态。双孢蘑菇、平菇、香菇、金针菇、木耳及其他食用种类均可覆盖；必须始终识别物种或物种组。

在活动发生于声明门之前时，本 PCR 包括基质原料、覆土或覆盖材料、菌种、水、气候控制公用工程、卫生投入、采收处理、包装和废菌糠去向。基质制备和菌种混合可以在场内进行，也可以用相容的上游数据集表示。仅当实际路线在既定基质配方之外使用肥料或土壤改良剂时，才使用一个条件性投入卡；不使用时不推定该投入。

野外采集和森林采伐不在范围内。菌种生产、菌种培养、基质原料生产和包装制造属于上游，除非另行表示。干制、罐藏、冷冻、腌制、粉碎、提取、烹制、保藏或其他加工蘑菇制品不在范围内；零售、餐饮、消费者储存和消费也不在范围内。声明门之后的运输排除；只有运输在声明边界内时，才通过条件性运输过程纳入至门运输。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mushrooms-farmed |
| classification_refs | CPC 3.0:01271 Mushrooms, farmed |
| covered_products | 在农场或包装厂声明门交接的新鲜、完整或修整后的栽培食用蘑菇 |
| excluded_products | 野外采集蘑菇；菌种和培养物；作为产品的基质原料和培养基；干制、罐藏、冷冻、腌制、粉碎、提取、烹制、保藏或其他加工制品；门后分配和使用 |
| representative_product | 满足已声明物种、成熟度、尺寸、修整、洁净度、等级、含水状态和包装状态的可销售新鲜栽培蘑菇 |
| production_route | 基质制备或接收、调理、菌种接种、培养、出菇和重复潮次、采收、分级、可选清洗或冷却、初级包装以及门交接 |
| market_state | 声明农场或包装厂门的新鲜食用蘑菇，可散装或采用已声明初级包装，并注明物种和产品状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场或包装厂门的可销售新鲜栽培蘑菇 |
| How much | 1,000 kg 净合格新鲜蘑菇 |
| How well | 已声明物种或物种组、相关时的菌株或品种、成熟度、子实体状态、尺寸和等级、修整、洁净度、含水状态、清洗或冷却状态、包装状态和声明门的食用新鲜蘑菇 |
| How long or cycle | 从基质接收或制备至最后采收潮次的一个声明基质或段木周期；段木路线还应披露生产年度归属和段木年龄 |
| reference_flow_link | `mushrooms_farmed_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | 声明门的新鲜栽培蘑菇 `793ef502-67bc-4a8c-a2aa-79159500fa9b` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 生产地理位置；蘑菇物种或物种组；相关时的菌株或品种；基质或段木路线；基质配方和含水基准；菌种来源和批次；调理、巴氏处理或灭菌方法；接种日期；培养和出菇气候制度；覆土或覆盖材料使用；生产周期和潮次日期；合格及降级产出；成熟度、尺寸、修整、洁净度和等级；清洗和冷却状态；包装状态；废菌糠和废弃物去向；声明门 |
| 绑定模式 | `fixed` |

构建前景数据包时，所有 `Required qualifiers` 必须在元数据、过程注释、参考流注释、产品描述或等效字段中声明。其他未映射的产品和过程流身份仍须在最终发布 TIDAS 过程数据集前完成前景绑定。

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_fresh_mushroom_mass` | 合格蘑菇和采收平衡 | 质量 | kg | 参考量使用声明门净合格新鲜蘑菇质量；分别称量可销售品、降级品、修剪物、污染物和腐败物。 |
| `species_moisture_basis` | 参考产出、基质和产量记录 | 质量和含水量 | kg fresh；水质量分数 | 将鲜重基准产出与实测含水量分开保存；不得把双孢蘑菇特定假设转用于其他物种或路线。 |
| `batch_cycle_normalization` | 基质批次、房间、袋、块、床和段木周期 | 质量和时间 | kg 及生产周期或年度 | 每项投入和产出追溯到基质批次和周期，再按该周期合格产出归一化。 |
| `substrate_mass_balance` | 基质制备、接种和废菌糠 | 质量 | kg 湿重及可得时 kg 干物质 | 在一致基准上记录原料、水、菌种、覆土、调理后基质、废菌糠、废弃物和未解释损失。 |
| `energy_metering_basis` | 调理、培养、出菇、冷却和处理 | 能量或燃料载体 | kWh、MJ、L 或 kg | 保留实测载体、设备或房间、期间和换算因子；不得仅从产量推定气候控制能耗。 |
| `water_balance_basis` | 基质用水、加湿、作物浇水、清洗和排放 | 体积和质量 | m3 和 kg | 使用时分别记录水源取用、工艺供水、循环水、清洗水和排放废水。 |
| `packaging_reuse_basis` | 周转箱、托盘、袋、薄膜、纸箱和盖膜 | 质量、件数和周转次数 | kg、item 和 reuse cycle | 记录包装质量或件数、容量、周转次数、返还率和损失或处置路线。 |
| `transport_service_basis` | 至声明门的外购运输 | 运输服务 | t*km | 记录产品质量、路线距离、车辆或服务类型、可得时装载率、温度要求和返程处理。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购菌种和基质原料，或进入声明作业的已调理基质和菌种；场内制备从记录的原料和公用工程开始，之前的建筑、土地和基础设施活动另行披露 |
| starting_condition_role | 声明基质或段木周期的开始以及前景生产核算起点 |
| product_classification_scope | CPC 3.0:01271 下至声明农场或包装厂门的新鲜栽培食用蘑菇 |
| recursive_input_rule | 同类别新鲜栽培蘑菇不作为递归投入。菌种、培养物、基质、覆土和包装各作为上游产品或服务连接一次；前景批次内调理后或已定殖基质的内部转移只记录一次。 |
| upstream_dataset_requirement | 对使用的菌种或培养物、基质原料和覆土、供水、电力和燃料、卫生产品、包装、外购运输以及废物或废水处理，要求相容的上游数据集。 |
| disclosure | 声明地理位置、物种和菌株、设施和路线、基质配方和含水量、调理方法、菌种批次和比例、接种日期、培养和出菇气候控制、覆土或覆盖材料、潮次日期、合格和拒收质量、水和能源、清洗、冷却、包装、废菌糠和废水去向以及声明门。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_farmed_campaign` | 基质制备、接种、培养、出菇、潮次和采收 | 纳入从基质接收或制备到最后采收潮次的栽培周期，包括声明门前的调理、菌种、气候控制、水、卫生、采收和初级门前准备。 | `fao-make-money-growing-mushrooms-2010`；`robinson-2018-mushroom-lca` |
| `boundary_substrate_and_casing` | 基质原料、覆土、补充料和覆盖材料 | 纳入跨边界的实际基质和覆土，并记录配方、湿基或干基以及来源；副产品不自动获得无负担或替代产品抵扣。 | `fao-make-money-growing-mushrooms-2010`；`robinson-2018-mushroom-lca` |
| `boundary_wild_and_processed_exclusion` | 产品身份和下游使用 | 将产品限制为栽培新鲜蘑菇。野生蘑菇、菌种以及加工或保藏制品保持为独立类别。 | `usda-ams-mushroom-grade-standard` |
| `boundary_spent_substrate_fate` | 废菌糠、污染基质和拒收物 | 记录废菌糠和污染批次的去向、运输、处理和接收方使用。堆肥、土壤改良、饲料或其他抵扣必须有接收方及分配或替代证据。 | `robinson-2018-mushroom-lca`；`iso-14044-2006` |
| `boundary_declared_gate` | 分级、清洗、冷却、包装和运输 | 默认边界止于声明农场或包装厂门。只纳入交接前的分级、修整、清洗、冷却和初级包装；仅当运输在边界内时使用条件性运输过程。 | `usda-ams-mushroom-grade-standard`；`robinson-2018-mushroom-lca` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `substrate_preparation_and_conditioning` | 蘑菇基质制备和调理 | required | 每条配制、混合、加湿、巴氏处理或灭菌路线；外购已调理基质时使用接收记录 | 前景基质制备 | 批次质量、含水量、调理时间和公用工程 |
| `inoculation_and_incubation` | 菌种接种和培养 | required | 每个基质或段木周期 | 前景接种和菌丝生长 | 接种质量、菌种批次、房间天数和公用工程 |
| `fruiting_and_cropping` | 出菇、气候控制和重复潮次 | required | 每个出菇周期和采收潮次 | 前景生物生产 | 房间天数、水、能源、潮次日期和作物产出 |
| `harvest_grading_and_primary_packaging` | 采收、分级和初级包装 | required | 每次采收周期和声明门 | 前景采收、调理、包装和交接 | 1,000 kg 合格新鲜蘑菇 |
| `purchased_transport_to_gate` | 至声明门的外购运输 | conditional | 外购运输在声明门前且跨越边界时 | 前景交付服务 | 声明质量的吨公里 |

### 过程：蘑菇基质制备和调理（`substrate_preparation_and_conditioning`）

#### 输入

##### 产品流

###### 流：散装基质原料（`bulk_substrate_feedstock_input`）

记录进入批次的每种农业残余物、木质材料、堆肥或粪肥成分及其他原料，明确材料身份、供应方、含水量以及副产品或废物状态。

- 选定流：蘑菇基质原料＼
- 流属性/单位：质量 / 湿重 kg 及可得时干物质 kg
- 数量规则：按批次称量或记录每种原料，并保留含水量、配方比例、供应方和来源状态。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：同一周期每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_substrate_batch_records`
- 范围：湿基原料暂定筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1,500
  - 上限：12,000
  - 单位：每 1,000 kg 合格新鲜蘑菇的湿基质原料 kg
  - 依据：待物种、配方、含水量和产量记录确认的宽范围初筛
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）
- 来源：`fao-make-money-growing-mushrooms-2010`；`robinson-2018-mushroom-lca`

###### 流：基质调理用水（`substrate_conditioning_water`）

记录混合、润湿、巴氏处理、灭菌或其他基质调理加入的水。

- 选定流：基质制备供水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：汇总批次和调理设备计量或记录的加水量；把工艺水与冷却、循环和排放分开。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：同一周期每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_substrate_batch_records`
- 范围：基质用水 QA 筛查；下限：0.1；上限：8；单位：每 1,000 kg 合格新鲜蘑菇 m3；依据：待实测平衡确认的批次润湿和调理用水；范围角色：QA guardrail（`qa_guardrail`）；证据类型：推理估计（`reasoned_estimate`）
- 来源：`fao-make-money-growing-mushrooms-2010`

###### 流：基质调理用电（`substrate_conditioning_electricity`）

记录混合、泵送、巴氏处理、灭菌、通风或其他调理设备消耗的电力。

- 选定流：基质调理供电
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：计量批次、设备或生产线用电，并将共享用电分配到所表示的批次。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：同一周期每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_substrate_energy_records`
- 范围：调理用电 QA 筛查；下限：5；上限：500；单位：每 1,000 kg 合格新鲜蘑菇 kWh；依据：待计量记录确认的混合、泵送和电调理；范围角色：QA guardrail（`qa_guardrail`）；证据类型：推理估计（`reasoned_estimate`）
- 来源：`robinson-2018-mushroom-lca`

###### 流：基质调理燃料或热量（`substrate_conditioning_fuel`）

记录巴氏处理、灭菌或调理基质使用的燃料或外供热。

- 选定流：基质调理燃料或工艺热
- 流属性/单位：能量或质量 / MJ、L 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`stationary-combustion-fuel`
- 数量规则：按批次和设备记录每种燃料或热载体的实测消耗，并保留载体和换算基准。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：同一周期每 1,000 kg 合格新鲜蘑菇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_substrate_energy_records`
- 范围：调理燃料 QA 筛查；下限：0；上限：3,000；单位：每 1,000 kg 合格新鲜蘑菇 MJ；依据：待记录确认的蒸汽、热水或直接加热调理；范围角色：QA guardrail（`qa_guardrail`）；证据类型：推理估计（`reasoned_estimate`）
- 来源：`robinson-2018-mushroom-lca`

###### 农业养分与肥料投入（`substrate_preparation_and_conditioning_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：接收该投入的批次每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_amendment_records`
- 来源：`fao-make-money-growing-mushrooms-2010`
- 数量范围：Conditional amendment screen
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：500
  - 单位：kg product per 1,000 kg accepted fresh mushrooms
  - 基准：optional product outside the substrate recipe pending actual route records
  - 基准类型：Process output (`process_output`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### 流：基质袋、块、盘或支撑材料（`substrate_container_material_input`）

记录基质承载材料及其质量或件数、容量、周转、返还和损失。材料身份保持证据缺口。

- 选定流：基质承载材料＼
- 流属性/单位：质量或件数 / kg 或 item
- 数量规则：以采购、领用、返还和损失记录分配到批次。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_container_material_records`

###### 流：基质制备残余物（`substrate_preparation_residual_waste`）

记录筛余、污染原料、溢出物和批次清理残余物，并记录质量、处理和去向。

- 选定流：基质制备残余物＼
- 流属性/单位：质量 / kg 湿基及可得时干物质
- 数量规则：按批次称量或由质量平衡计算，标记废物状态和接收方。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_substrate_batch_records`

##### 废物流

#### 输出

##### 产品流

###### 流：已调理基质批次（`conditioned_substrate_batch_output`）

记录调理后进入接种的批次质量、含水量、方法和内部去向；该产品流身份待后续前景绑定。

- 选定流：已调理蘑菇基质＼
- 流属性/单位：质量 / kg 湿基和干物质
- 数量规则：根据批次称量和含水量记录，与基质配方和接种批次连接。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_substrate_batch_records`

##### 废物流

##### 基本流

###### 流：基质调理释放的氨（`substrate_conditioning_ammonia_emission`）

只在声明的气体平衡或排放因子方法确认时记录，并声明接收环境介质。

- 选定流：环境空气中的氨＼
- 流属性/单位：质量 / kg NH3
- 数量规则：根据批次气体平衡或已声明因子计算，避免与通风或燃料路径重复计量。
- 数值来源模式：从采集计算（`calculated_from_collection`）
- 特异性：物质特定（`substance_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_substrate_batch_records`
- 来源：`robinson-2018-mushroom-lca`

### 过程：菌种接种和培养（`inoculation_and_incubation`）

#### 输入

##### 产品流

###### 流：用于接种的已调理基质（`conditioned_substrate_input`）

从基质制备过程接收已调理批次，按质量、含水量和批次标识记录；保持内部转移而不重复计算。

- 选定流：已调理蘑菇基质＼
- 流属性/单位：质量 / kg 湿基和干物质
- 数量规则：与接种记录中的接收质量和批次一致。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输入（`process_input`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inoculation_records`

###### 流：蘑菇菌种接种物（`spawn_inoculum_input`）

记录菌种来源、菌株、批次和接种质量或件数。菌种产品身份保持证据缺口。

- 选定流：蘑菇菌种接种物＼
- 流属性/单位：质量或件数 / kg 或 item
- 数量规则：按菌种批次和接种批次记录质量或数量，并计算接种率。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输入（`process_input`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inoculation_records`
- 范围：接种物暂定筛查；范围角色：默认估计（`default_estimate`）；下限：1；上限：250；单位：每 1,000 kg 合格新鲜蘑菇 kg；依据：待菌种形式、路线和批次记录确认；基准类型：过程输出（`process_output`）；证据类型：推理估计（`reasoned_estimate`）
- 来源：`fao-make-money-growing-mushrooms-2010`

###### 流：培养用水或加湿供水（`incubation_water_input`）

记录培养房间加湿、补水和清洁中实际用于生产的水。

- 选定流：培养过程用水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：按房间和批次计量，区分供水、循环水和排放。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incubation_climate_records`
- 范围：下限：0；上限：8；单位：每 1,000 kg 合格新鲜蘑菇 m3；范围角色：QA guardrail（`qa_guardrail`）；依据：待房间记录和水量平衡确认；证据类型：推理估计（`reasoned_estimate`）

###### 流：培养用电（`incubation_electricity`）

记录培养房间通风、加热、制冷、加湿和照明等电力，并按批次或房间天数分配。

- 选定流：培养供电
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：优先使用专用电表；共享电表按实测房间天数或记录的物理基准分配。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incubation_climate_records`
- 范围：下限：10；上限：1,500；单位：每 1,000 kg 合格新鲜蘑菇 kWh；范围角色：QA guardrail（`qa_guardrail`）；依据：待房间计量和周期记录确认；证据类型：推理估计（`reasoned_estimate`）
- 来源：`robinson-2018-mushroom-lca`

###### 流：培养用燃料或热量（`incubation_fuel`）

记录培养期锅炉、热水或直接供热燃料，保留载体和换算基准。

- 选定流：培养燃料或热量
- 流属性/单位：能量或质量 / MJ、L 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`stationary-combustion-fuel`
- 数量规则：按房间、设备和周期记录实测使用量，不以产量推定。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incubation_climate_records`
- 范围：下限：0；上限：2,000；单位：每 1,000 kg 合格新鲜蘑菇 MJ；范围角色：QA guardrail（`qa_guardrail`）；依据：待房间燃料记录确认；证据类型：推理估计（`reasoned_estimate`）
- 来源：`robinson-2018-mushroom-lca`

###### 流：失败或污染的培养批次（`incubation_contaminated_batch_waste`）

记录失败或污染批次的质量、污染状态、处理、运输和去向，不把它强制映射为产品输出。

- 选定流：污染培养批次废物＼
- 流属性/单位：质量 / kg 湿基
- 数量规则：按批次称量并连接处理或接收记录。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incubation_climate_records`

##### 废物流

#### 输出

##### 产品流

###### 流：已定殖基质或段木材料（`colonized_substrate_output`）

记录培养完成后进入出菇的已定殖材料质量、批次和含水量，身份待绑定。

- 选定流：已定殖蘑菇基质或段木材料＼
- 流属性/单位：质量 / kg 湿基和干物质
- 数量规则：根据培养结束和出菇接收记录连接内部批次转移。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incubation_climate_records`

##### 废物流

##### 基本流

###### 流：培养释放的二氧化碳（`incubation_carbon_dioxide_emission`）

只在具有声明的气体平衡或因子方法、接收介质和批次记录时计算。

- 选定流：环境空气中的二氧化碳＼
- 流属性/单位：质量 / kg CO2
- 数量规则：按房间通风、气体平衡或已声明因子计算，并执行重复核算检查。
- 数值来源模式：从采集计算（`calculated_from_collection`）
- 特异性：物质特定（`substance_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_incubation_climate_records`
- 来源：`robinson-2018-mushroom-lca`

### 过程：出菇、气候控制和重复潮次（`fruiting_and_cropping`）

#### 输入

##### 产品流

###### 流：用于出菇的已定殖基质（`colonized_substrate_input`）

记录进入出菇房间的已定殖基质或段木质量、批次和含水量，产品身份待绑定。

- 选定流：已定殖蘑菇基质或段木材料＼
- 流属性/单位：质量 / kg 湿基和干物质
- 数量规则：与培养结束记录和房间接收记录相连，不重复计量内部转移。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输入（`process_input`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fruiting_climate_records`

###### 流：覆土或覆盖材料（`casing_or_covering_material_input`）

记录实际使用的覆土、覆盖层或支撑材料，区分湿基和干基并记录来源。

- 选定流：覆土或覆盖材料＼
- 流属性/单位：质量 / kg 湿基和干物质
- 数量规则：按房间、批次和配方记录施用量，保留批次和供应方。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输入（`process_input`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fruiting_climate_records`
- 来源：`fao-make-money-growing-mushrooms-2010`；`robinson-2018-mushroom-lca`

###### 流：出菇用水和加湿供水（`fruiting_water_input`）

记录出菇浇水、加湿和生产清洁的供水，分别记录循环和排放。

- 选定流：出菇过程用水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：按房间和潮次计量或记录，不能以产量单独推定。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fruiting_climate_records`
- 范围：下限：0.2；上限：15；单位：每 1,000 kg 合格新鲜蘑菇 m3；范围角色：QA guardrail（`qa_guardrail`）；依据：待水表和房间平衡确认；证据类型：推理估计（`reasoned_estimate`）
- 来源：`fao-make-money-growing-mushrooms-2010`

###### 流：出菇气候控制用电（`fruiting_electricity`）

记录出菇房间通风、冷却、加热、加湿、照明和控制设备用电。

- 选定流：出菇气候控制供电
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按专用电表或房间天数、面积时间等有记录的物理基准分配。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fruiting_climate_records`
- 范围：下限：20；上限：3,000；单位：每 1,000 kg 合格新鲜蘑菇 kWh；范围角色：QA guardrail（`qa_guardrail`）；依据：待房间电表和潮次记录确认；证据类型：推理估计（`reasoned_estimate`）
- 来源：`robinson-2018-mushroom-lca`

###### 流：出菇气候控制燃料或热量（`fruiting_fuel`）

记录出菇房间供热或其他燃料使用，并保留载体和换算基准。

- 选定流：出菇气候控制燃料或热量
- 流属性/单位：能量或质量 / MJ、L 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`stationary-combustion-fuel`
- 数量规则：按设备、房间和周期记录实测使用量；共享供热按物理基准分配。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fruiting_climate_records`
- 范围：下限：0；上限：4,000；单位：每 1,000 kg 合格新鲜蘑菇 MJ；范围角色：QA guardrail（`qa_guardrail`）；依据：待燃料和供热记录确认；证据类型：推理估计（`reasoned_estimate`）
- 来源：`robinson-2018-mushroom-lca`

###### 流：清洁或卫生产品（`cleaning_sanitation_product_input`）

记录在出菇、采收和包装前实际使用的清洁或卫生产品，保持产品。

- 选定流：清洁或卫生产品＼
- 流属性/单位：产品质量 / kg
- 数量规则：按采购、领用和场地记录分配到房间或批次。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输入（`process_input`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fruiting_climate_records`

###### 流：出菇设施面积占用（`growing_facility_area_occupation`）

记录出菇房间可用面积、占用期间和共享使用分配；不把设施建造作为本卡的产品投入。

- 选定流：出菇设施土地或面积占用
- 流属性/单位：面积时间 / m2*a
- 数量规则：以实测面积和周期占用天数计算面积时间，并按共享排程分配。
- 数值来源模式：从采集计算（`calculated_from_collection`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_facility_area_records`

##### 废物流

##### 基本流

###### 流：出菇前分级的新鲜蘑菇作物（`fresh_mushroom_crop_output`）

记录每个潮次的采收鲜重及物种、房间和周期，后续与分级产出核对。

- 选定流：分级前新鲜栽培蘑菇作物＼
- 流属性/单位：质量 / kg fresh
- 数量规则：每潮次称量并连接房间、批次和采收日期。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明门合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cropping_records`
- 来源：`robinson-2018-mushroom-lca`；`usda-ams-mushroom-grade-standard`

###### 流：废菌糠（`spent_mushroom_substrate_output`）

记录最终废菌糠的质量、含水量、污染状态、接收方、处理、运输和去向；未经证据不得给予替代产品抵扣。

- 选定流：废蘑菇基质＼
- 流属性/单位：质量 / kg 湿基和干物质
- 数量规则：在周期结束称量并与基质质量平衡和接收凭证核对。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cropping_records`
- 来源：`robinson-2018-mushroom-lca`

###### 流：出菇损失或污染材料（`fruiting_loss_waste`）

记录未采收、腐败和污染材料的质量、处理和去向，并与潮次平衡连接。

- 选定流：出菇损失或污染材料＼
- 流属性/单位：质量 / kg fresh 或湿基
- 数量规则：按潮次或周期末记录，不把无接收方的材料作为副产品。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cropping_records`

##### 基本流

###### 流：出菇释放的二氧化碳（`fruiting_carbon_dioxide_emission`）

仅在声明气体平衡或因子方法、接收介质和房间记录时计算。

- 选定流：环境空气中的二氧化碳＼
- 流属性/单位：质量 / kg CO2
- 数量规则：根据房间通风、气体平衡或已声明因子计算，执行重复核算检查。
- 数值来源模式：从采集计算（`calculated_from_collection`）
- 特异性：物质特定（`substance_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_fruiting_climate_records`
- 来源：`robinson-2018-mushroom-lca`

#### 输出

##### 产品流

##### 废物流

### 过程：采收、分级和初级包装（`harvest_grading_and_primary_packaging`）

#### 输入

##### 产品流

###### 流：可重复使用的采收箱或托盘服务（`harvest_crate_or_pallet_input`）

记录周转箱或托盘的质量、容量、周转次数、返还和损坏，按服务周期分配。

- 选定流：采收箱或托盘包装功能
- 流属性/单位：包装服务质量 / kg 或 item
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`pallet-and-crate-packaging`
- 数量规则：按实际装载服务和记录周转次数分摊箱或托盘质量，考虑返还和损失。
- 数值来源模式：从采集计算（`calculated_from_collection`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 声明门合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 范围：下限：0；上限：150；单位：每 1,000 kg 合格新鲜蘑菇包装 kg；范围角色：QA guardrail（`qa_guardrail`）；依据：待包装清单和周转记录确认；证据类型：推理估计（`reasoned_estimate`）
- 来源：`iso-14044-2006`

###### 流：硬质初级包装（`rigid_primary_packaging_input`）

记录硬质盒、托盘、罐或其他初级容器的产品身份、质量、件数和装填量。

- 选定流：硬质初级包装＼
- 流属性/单位：质量 / kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`rigid-container-packaging`
- 数量规则：按包装运行领用量和装填单位分配到合格产出。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 流：柔性初级包装或盖膜（`flexible_primary_packaging_input`）

记录薄膜、袋和盖膜的质量、规格、装填和损失，身份待绑定。

- 选定流：柔性初级包装＼
- 流属性/单位：质量 / kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`flexible-packaging`
- 数量规则：按采购、领用、装填和损失记录分配。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 流：采收清洗用水（`harvest_washing_water`）

记录实际清洗或冲洗新鲜蘑菇的供水、循环水和排放。

- 选定流：采收清洗过程用水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：按清洗线水表或平衡记录，区分产品清洗和卫生使用。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wash_water_records`
- 范围：下限：0；上限：10；单位：每 1,000 kg 合格新鲜蘑菇 m3；范围角色：QA guardrail（`qa_guardrail`）；依据：待水表和排水记录确认；证据类型：推理估计（`reasoned_estimate`）
- 来源：`fao-make-money-growing-mushrooms-2010`

###### 流：采收和冷却用电（`harvest_cooling_electricity`）

记录采收处理、冷藏或预冷设备用电，并连接包装运行和门日期。

- 选定流：采收和冷却供电
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按冷库或包装线电表以及运行时间分配到批次。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_grade_records`
- 范围：下限：0；上限：500；单位：每 1,000 kg 合格新鲜蘑菇 kWh；范围角色：QA guardrail（`qa_guardrail`）；依据：待冷却和包装电表确认；证据类型：推理估计（`reasoned_estimate`）
- 来源：`robinson-2018-mushroom-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 流：声明门合格新鲜蘑菇（`marketable_fresh_mushroom_output`）

记录分级后声明门交接的净合格质量、物种、成熟度、尺寸、洁净度、修整和包装状态；身份待绑定。

- 选定流：声明门合格新鲜栽培蘑菇＼
- 流属性/单位：质量 / kg fresh
- 数量规则：称量并与分级前采收量、降级量、拒收量及包装记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明门合格新鲜蘑菇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`usda-ams-mushroom-grade-standard`

###### 流：转作其他用途的降级蘑菇产品（`downgraded_mushroom_product_output`）

只有有记录的接收方和用途时才作为副产品；无接收方或进入处理的材料按废物记录。

- 选定流：降级蘑菇产品＼
- 流属性/单位：质量 / kg fresh
- 数量规则：按分级记录称量，注明接收方、用途和运输。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`usda-ams-mushroom-grade-standard`；`iso-14044-2006`

##### 废物流

###### 流：修剪物、拒收物和分级废物（`grading_reject_waste`）

记录分级拒收、修剪和污染物的质量、处理、接收方及运输。

- 选定流：蘑菇分级拒收废物＼
- 流属性/单位：质量 / kg fresh
- 数量规则：用分级前后质量平衡核对，并记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`usda-ams-mushroom-grade-standard`

###### 流：废弃包装材料（`packaging_waste_output`）

记录包装破损、切边和其他废弃包装质量及处理路线。

- 选定流：包装废物＼
- 流属性/单位：质量 / kg
- 数量规则：以领用、装填、返还和损失记录核对包装废物。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

###### 流：采收和分级废水（`harvest_wastewater_output`）

记录采收清洗和卫生活动产生的排放量、处理、接收方和排放介质。

- 选定流：采收分级废水＼
- 流属性/单位：体积 / m3
- 数量规则：用供水、循环水、产品带出和排放记录进行平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格新鲜蘑菇
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wash_water_records`

##### 基本流

### 过程：至声明门的外购运输（`purchased_transport_to_gate`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

###### 流：至声明门的公路货运服务（`road_transport_to_gate`）

仅当外购运输在声明边界内时记录，按交付质量和路线距离核算吨公里。

- 选定流：至声明门的公路货运服务
- 流属性/单位：运输服务 / t*km
- 数量规则：运输吨数乘路线 km，并核对装载、温控、返程和收货损失。
- 数值来源模式：从采集计算（`calculated_from_collection`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 声明门合格新鲜蘑菇
- 基准类型：运输服务（`transport_service`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 范围：下限：0；上限：2,000；单位：每 1,000 kg 合格新鲜蘑菇 t*km；范围角色：QA guardrail（`qa_guardrail`）；依据：声明路线和运输质量；证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 流：运抵声明门的新鲜蘑菇（`delivered_mushroom_output`）

记录包含运输后的合格产品交接质量、温度、包装状态和运输损失；产品身份待绑定。

- 选定流：运抵声明门的新鲜栽培蘑菇＼
- 流属性/单位：质量 / kg fresh
- 数量规则：核对发运和收货合格质量、温度、包装状态及损失。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 声明门合格新鲜蘑菇
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport_records`

##### 废物流

##### 基本流

## 7. 分配与副产品处理

### 分配规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_process_subdivision_first` | 共享基质、房间、公用工程和包装 | 实际可行时优先拆分活动并分别采集批次记录；只有无法再进行物理拆分的真实共享活动才分配。 | `iso-14044-2006` |
| `allocation_mushroom_and_spent_substrate` | 可销售蘑菇和废菌糠 | 可销售蘑菇作为参考产品。废菌糠作为废物，除非有记录的接收方将其有意转移为产品或副产品。可销售的次级产品必须声明物理或经济分配基准、敏感性和接收方证据。 | `robinson-2018-mushroom-lca`；`iso-14044-2006` |
| `allocation_multiple_flushes` | 同一周期的连续潮次 | 将共享基质、培养和房间负荷归属于同一周期的所有潮次，并按合格产出汇总。 | `robinson-2018-mushroom-lca` |
| `allocation_downgraded_mushrooms` | 降级蘑菇和分级拒收物 | 只有有记录的接收方和预期用途时，降级蘑菇才作为副产品。没有接收方或进入处置的材料保持为废物，不产生替代产品抵扣。 | `iso-14044-2006`；`usda-ams-mushroom-grade-standard` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_substrate_batch_records` | `substrate_preparation_and_conditioning` | 原料、水、残余物、已调理基质、氨 | 批次日志和供应方记录 | batch_id; species; feedstock; supplier; wet_mass; dry_matter; moisture; water_added; conditioning_method; time; temperature; residual_mass; destination | 称量原料和批次，保留配方、含水量测试和调理日志 | kg、%、m3、h、°C | 每批 | 全周期 | 每条基质线或场址 | 按批次汇总并连接生产周期 | 校准秤；含水量方法；批次签核 |
| `cp_nutrient_amendment_records` | `substrate_preparation_and_conditioning` | 条件性改良剂 | 发票和施用日志 | product_name; product_mass; nutrient_content; purpose; application_date; batch_id; supplier | 核验发票、标签或规格及施用记录 | kg product；kg nutrient | 每次施用 | 全周期 | 每场址和批次 | 只分配至实际接收批次 | 标签或规格；施用记录 |
| `cp_container_material_records` | `substrate_preparation_and_conditioning` | 袋、块、盘、支撑物 | 采购和领用记录 | material; mass_or_count; capacity; reuse_cycles; return_rate; losses; batch_id | 核对采购、领用、返还和损失 | kg 或 item | 每批及返还周期 | 全周期 | 每场址或生产线 | 按容量和服务寿命分配 | 规格；库存；返还日志 |
| `cp_substrate_energy_records` | `substrate_preparation_and_conditioning` | 调理用电和燃料或热量 | 电表、燃料日志或发票 | meter_id; carrier; equipment; batch_id; energy; fuel_volume; conversion_factor | 读取专用表或按运行分配共享公用工程 | kWh、MJ、L、kg | 每次运行及月度核对 | 全周期 | 每个调理单元 | 按实测运行或运行时间分配 | 电表校准；燃料交付；换算记录 |
| `cp_inoculation_records` | `inoculation_and_incubation` | 已调理基质和菌种 | 接种日志 | batch_id; species; strain; spawn_lot; spawn_mass; substrate_mass; inoculation_date; room; accepted_units | 记录接种时质量或数量并保留批次 | kg 或 item | 每批 | 全周期 | 每个接种房间 | 按批次和菌种批次汇总 | 批次追溯；秤检查 |
| `cp_incubation_climate_records` | `inoculation_and_incubation` | 培养用水、能源、产出、污染和 CO2 | 房间日志和电表 | room_id; batch_id; start; end; temperature; humidity; ventilation; water; electricity; fuel; CO2; accepted_units; failed_units | 每日房间记录并与计量核对 | °C、%、m3、kWh、MJ、kg、item | 每日及月度核对 | 全周期 | 每个培养房间 | 按房间天数和批次汇总 | 校准传感器；电表；批次放行 |
| `cp_fruiting_climate_records` | `fruiting_and_cropping` | 已定殖投入、覆土、水、能源、卫生、面积和 CO2 | 房间日志、领用记录和电表 | room_id; batch_id; species; casing_mass; water; electricity; fuel; sanitation_product; room_area; occupied_time; temperature; humidity; CO2; flush_dates | 合并房间日志、领用记录和计量 | kg、m3、kWh、MJ、L、m2、h、°C、% | 每日或每潮次 | 全周期 | 每个出菇房间和场址 | 按房间、批次和潮次汇总 | 传感器校准；领用记录；分配日志 |
| `cp_facility_area_records` | `fruiting_and_cropping` | 设施面积占用 | 设施登记和排程 | room_id; usable_area; service_area; occupied_start; occupied_end; shared_use; allocation_basis | 根据排程核验面积和占用期间 | m2 及天或年 | 每周期 | 全周期 | 每场址 | 将面积时间分配到周期 | 设施测量；排程 |
| `cp_cropping_records` | `fruiting_and_cropping` | 作物、废菌糠和损失 | 采收及周期关闭日志 | batch_id; room_id; species; flush; harvest_date; fresh_mass; spent_substrate_mass; moisture; loss_mass; contamination; destination | 称量每潮次和最终基质 | kg 和含水量 % | 每潮次及关闭时 | 全周期 | 每房间和批次 | 分级核对后汇总潮次 | 秤检查；采收票据；去向 |
| `cp_packaging_records` | `harvest_grading_and_primary_packaging` | 周转箱、包装和包装废物 | 领用和包装记录 | package_type; mass_or_count; capacity; filled_units; reuse_cycles; returns; damaged_units; waste_mass; destination | 核对领用、装填件数、返还和废物 | kg 或 item | 每次包装及月度核对 | 全周期 | 每包装厂或门 | 按合格质量和类型分配 | 规格；库存；废物票据 |
| `cp_wash_water_records` | `harvest_grading_and_primary_packaging` | 清洗水和废水 | 水表、平衡和处理记录 | water_source; supplied_volume; recirculated_volume; discharge_volume; product_washed; cleaning_use; treatment; destination | 计量供水和排放或核验水量平衡 | m3，实测时含 kg | 每次清洗及月度核对 | 全周期 | 每条清洗或包装线 | 按运行和合格质量汇总 | 水表或平衡；处理凭证 |
| `cp_harvest_grade_records` | `harvest_grading_and_primary_packaging` | 合格品、降级品、拒收物和冷却电力 | 采收票、分级日志和电表 | batch_id; species; harvest_mass; accepted_mass; downgraded_mass; reject_mass; grade; size; maturity; trim; cooling_energy; gate_date | 称量分级前后产出并连接电表 | kg、grade、size、kWh | 每次采收和包装 | 全周期 | 每包装厂或门 | 按批次、物种、等级和门汇总 | 校准秤；等级记录；冷库电表 |
| `cp_transport_records` | `purchased_transport_to_gate` | 公路运输和交付产出 | 货运记录和发票 | shipment_id; origin; destination; distance; product_mass; package_mass; vehicle; temperature; load; return; received_mass; loss | 核验货运、路线、服务和收货 | t、km、t*km、°C、kg | 每次发运 | 全周期 | 声明路线至门 | 汇总 t*km 并核对收货质量 | 承运商记录；路线证据；收货单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass_normalization` | 所有过程量 | 归一化为 `记录量 / 声明门合格新鲜蘑菇质量 * 1,000 kg`。 | 批次和周期记录；门合格质量 | 每 1,000 kg 合格新鲜蘑菇的量 |  |
| `calc_substrate_dry_matter` | 基质、覆土、菌种和废菌糠 | 干物质 = `湿重 * (1 - 实测含水分数)`，并保留方法。 | 湿重；实测含水量 | 湿重和干物质 | `robinson-2018-mushroom-lca` |
| `calc_spawn_and_substrate_rates` | 接种 | 接种率 = `菌种质量或数量 / 合格调理基质质量或声明的单位基准`。 | 菌种和基质记录 | 路线特定接种率 | `fao-make-money-growing-mushrooms-2010` |
| `calc_shared_room_utilities` | 培养和出菇公用工程 | 按实测批次运行、房间天数、占用面积时间或有记录物理基准分配共享电表，并保留敏感性。 | 电表；排程；批次或面积时间 | 周期公用工程量 | `iso-14044-2006` |
| `calc_water_balance` | 基质、出菇、清洗和废水 | 将水源取用和循环水与保留量、已声明蒸发方法及排放核对，并披露差额。 | 供水；循环；排放；保留量 | 工艺用水和废水 | `fao-make-money-growing-mushrooms-2010` |
| `calc_flush_yield_aggregation` | 出菇产出和参考流 | 对单周期的各潮次先汇总合格、降级、拒收和损失质量，再归一化。 | 潮次和分级记录 | 按去向和等级的周期产出 | `robinson-2018-mushroom-lca`；`usda-ams-mushroom-grade-standard` |
| `calc_substrate_and_residue_reconciliation` | 基质、定殖材料、废菌糠和残余物 | 在选定基准上核对原料、水、内部转移、废菌糠、拒收物和记录的损失，并调查未解释损失。 | 批次、含水量和关闭记录 | 质量平衡差额 | `robinson-2018-mushroom-lca` |
| `calc_emission_from_declared_method` | 氨和二氧化碳产出 | 对记录的基质、房间、载体或通风数据采用一种已声明气体平衡或因子方法，记录接收介质并防止重复核算。 | 气体或通风数据；方法；分配 | 物质特定基本流产出 | `robinson-2018-mushroom-lca` |
| `calc_packaging_reuse_service` | 可重复使用容器 | 按 `容器质量 / 记录服务周转次数 * 周期服务` 分配，并调整返还和损失。 | 包装质量；周转；返还；损失 | 周期包装服务 | `iso-14044-2006` |
| `calc_transport_service` | 至门运输 | 运输吨数 * 路线 km，并核对发运和收货损失。 | 质量；路线；距离；承运商记录 | t*km 和交付质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_route` | 产品、物种、基质、菌种和门 | 识别物种或物种组、相关时菌株、路线、设施类型和门；在绑定前保留身份证据缺口缺口。 | `fao-make-money-growing-mushrooms-2010`；`usda-ams-mushroom-grade-standard` |
| `dq_batch_traceability` | 全部批次和房间记录 | 将基质、菌种、房间、潮次、包装、拒收物、废菌糠和运输连接到共同周期标识。 | `robinson-2018-mushroom-lca` |
| `dq_moisture_and_mass_basis` | 基质、覆土、作物和废菌糠 | 声明湿基或干基，对重要材料测量含水量，并保留方法和取样记录。 | `robinson-2018-mushroom-lca` |
| `dq_metered_water_and_energy` | 水、电力、燃料和热量 | 优先使用专用表或原始记录；披露共享公用工程分配、电表状态和换算因子。 | `robinson-2018-mushroom-lca` |
| `dq_climate_and_flush_coverage` | 培养和出菇 | 覆盖每个房间及周期每天，或声明缺口；保留气候、通风、使用时 CO2 和潮次日期。 | `fao-make-money-growing-mushrooms-2010`；`robinson-2018-mushroom-lca` |
| `dq_substrate_and_residue_balance` | 原料、调理材料、废菌糠和拒收物 | 核对主要基质和残余物流，披露未解释差额、污染、接收方、处理和运输。 | `robinson-2018-mushroom-lca`；`iso-14044-2006` |
| `dq_grade_and_gate_state` | 合格、降级、拒收、清洗、冷却和包装产出 | 对每批保留等级、尺寸、成熟度、修整、洁净度、清洗和冷却状态、包装状态以及声明门。 | `usda-ams-mushroom-grade-standard` |
| `dq_packaging_and_transport` | 初级包装和外购运输 | 记录包装质量或件数、周转和损失、路线和服务以及边界位置。 | `iso-14044-2006` |
| `dq_method_and_factor_disclosure` | 计算排放、分配、换算和上游数据集 | 对每个非实测结果声明方法、因子、版本、分配基准、来源、期间和敏感性。 | `iso-14044-2006`；`robinson-2018-mushroom-lca` |
| `dq_unmapped_identity_disclosure` | 参考流和未映射卡 | 报告产品、基质、菌种、覆土、残余物、拒收物、废水和内部状态的身份证据缺口；最终发布前解析所需身份。 |  |

## 9. 校验规则

### 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 最终发布前必须声明物种、路线、声明门、限定信息以及兼容的具体产品、质量属性和质量单位组身份；本草稿保留证据缺口状态。 |  |
| `validation_campaign_reconciliation` | 所有生产周期 | 检查基质、菌种、房间、潮次、合格品、降级品、拒收物、废菌糠和运输记录使用共同标识，并与参考质量平衡。 | `robinson-2018-mushroom-lca` |
| `validation_moisture_basis` | 鲜蘑菇、基质、覆土和废菌糠 | 没有记录的实测换算和含水量基准时，不得混合湿基和干基数量。 | `robinson-2018-mushroom-lca` |
| `validation_route_conditionals` | 覆土、肥料或土壤改良剂、清洗、包装和运输 | 只有路线条件成立时才纳入条件性交换；未使用时保留省略依据。 | `fao-make-money-growing-mushrooms-2010`; `usda-ams-mushroom-grade-standard` |
| `validation_parameterized_flows` | parameterized 行 | 前景生成并发布前，将每个 Flow Set group 解析为兼容的具体 UUID、属性、单位组、地理位置和用途。 |  |
| `validation_unmapped_flows` | unmapped 行 | 明确保留基质、菌种、覆土、内部材料、废菌糠、拒收物、废水和产品输出的身份证据缺口；不得强行使用产品输出 Flow Set。 |  |
| `validation_emission_reporting` | 氨和二氧化碳行 | 每个基本流排放必须记录接收介质、物质、方法、数量基准，并执行重复路径检查。 | `robinson-2018-mushroom-lca` |
| `validation_spent_substrate_destination` | 废菌糠和污染基质 | 必须记录去向、接收方或处理、质量、含水量基准和运输证据；只有符合分配或替代规则时才允许抵扣。 | `robinson-2018-mushroom-lca`; `iso-14044-2006` |
| `validation_allocation_disclosure` | 共享活动和次级输出 | 任何副产品主张都必须提供过程拆分证据或分配基准、共享公用工程分配、敏感性和接收方证据。 | `iso-14044-2006` |
| `validation_grade_and_gate` | 合格输出和初级包装 | 每个合格批次确认物种、新鲜度、成熟度、尺寸或等级、修整、洁净度、清洗和冷却状态、包装以及声明门。 | `usda-ams-mushroom-grade-standard` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 新鲜栽培食用蘑菇的前景栽培和声明门准备数据集 |
| downstream_use | `secondary_dataset`；经过审核、身份解析和发布后可作为 `background_dataset` |
| allowed_use | 物种、路线、基质、地理位置、生产周期、含水量基准、产品状态、声明门以及包装或清洗条件相容的新鲜栽培蘑菇 |
| excluded_use | 野外采集蘑菇；菌种或基质生产；干制、冷冻、罐藏、腌制、粉末、提取、烹制或保藏产品；零售、消费，或省略路线和声明门的比较 |
| required_metadata | 物种或物种组；菌株或品种；地理位置；路线和设施；基质配方和含水量；菌种批次；调理；接种；培养和出菇气候；潮次日期；合格和降级产出；拒收物；废菌糠去向；水；能源；清洗；冷却；包装；运输；声明门 |
| required_quality_disclosure | 原始记录覆盖；批次和房间追溯；湿基或干基；含水量方法；计量和分配质量；潮次和等级平衡；基质和废菌糠平衡；排放和分配方法；上游身份；暂定范围；Flow Set 解析；未映射身份 |
| update_trigger | 已验证身份；审核后的基质、产量、用水或能耗证据；物种或路线变化；等级或声明门做法变化；排放或分配方法变化；新的废菌糠处理路线 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-make-money-growing-mushrooms-2010` | official_guidance | FAO, *Make money by growing mushrooms*, https://www.fao.org/4/i0522e/i0522e00.htm（访问 2026-09-14） | 基质原料和含水量、巴氏处理或灭菌、菌种接种、过程分解和采集字段 |
| `robinson-2018-mushroom-lca` | literature | Robinson et al., *A life cycle assessment of Agaricus bisporus mushroom production in the USA*, International Journal of Life Cycle Assessment (2018), https://doi.org/10.1007/s11367-018-1456-6（访问 2026-09-14） | 从摇篮到声明门的过程分解、基质和覆土、房间公用工程、产量和废菌糠核算、排放背景及范围 |
| `usda-ams-mushroom-grade-standard` | official_guidance | USDA Agricultural Marketing Service, *Mushrooms Grades and Standards*, https://www.ams.usda.gov/grades-standards/mushrooms-grades-and-standards（访问 2026-09-14） | 鲜市场身份、成熟度、尺寸、缺陷、等级、修整和门质量检查 |
| `iso-14044-2006` | standard | ISO, *ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines*, https://www.iso.org/standard/38498.html（访问 2026-09-14） | 过程拆分、分配层级、副产品和替代披露以及数据质量规则 |
