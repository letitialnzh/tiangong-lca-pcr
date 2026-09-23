---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cabbages
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 甘蓝类蔬菜

## 1. 范围与适用性

本 PCR 适用于鲜食结球甘蓝的露地或类似土壤栽培，从农场边界处声明的种植材料开始，覆盖受控栽培、采收、修整、田间分选，直至适销鲜甘蓝在农场门交接。购入的种植材料、肥料、植保产品、供水和能源作为上游产品投入进入。默认边界不包括购入种植材料之前的育苗、具有实质不同基础设施或环境控制的设施栽培、场外包装、冷藏、配送、加工、零售、烹调和生命终点；如纳入，应设置独立过程。

该类别包括 CPC 3.0 类别 01212 所表示的结球甘蓝。不包括花椰菜、西兰花、球茎甘蓝、01212 之外的叶菜、发酵或其他加工甘蓝产品，也不包括种子生产。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cabbages |
| classification_refs | CPC 3.0: 01212 Cabbages |
| covered_products | 归入 CPC 01212、供鲜食市场的结球甘蓝，包括绿色、红色、白色和皱叶等市场形态 |
| excluded_products | 花椰菜；西兰花；球茎甘蓝；非结球叶菜；甘蓝种子；发酵、腌制、冷冻、干制或其他加工甘蓝 |
| representative_product | 鲜食适销甘蓝球 |
| production_route | 土壤受控栽培，随后采收、修整和田间分选 |
| market_state | 农场门交接的鲜完整或最低限度修整甘蓝；包装和冷却状态另行声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明农场门交接点的鲜食适销甘蓝 |
| How much | 1 kg |
| How well | 符合生产者声明的品种、成熟度、修整、缺陷和包装规格的适销甘蓝球 |
| How long or cycle | 一个声明的甘蓝种植周期，按交付的适销质量归一化 |
| reference_flow_link | `fresh_cabbage_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Cabbage `aed02ce8-12e2-4410-be27-38b4abc01fc4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 甘蓝类型或品种；生产地理；栽培系统；采收成熟度；修整状态；水分基准；包装状态；农场门交接 |
| 绑定模式 | `fixed` |
| 流集 |  |
| 流集版本 |  |
| 流集分组 |  |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 鲜甘蓝参考产品以及所有甘蓝产品或残余物质量行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的农场门状态报告湿质量；披露任何干物质换算及实测水分基准。 |
| `nutrient_mass_basis` | 氮、磷和钾养分投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg nutrient | 使用有文件支持的组成，将配方肥料数量换算为 kg N、kg P2O5 和 kg K2O；配方产品数量另行保留。 |
| `water_volume_basis` | 栽培过程供给的灌溉水 | Volume | m3 | 记录输送到田间的水，并区分供给水与自然降水。 |
| `land_occupation_basis` | 农业土地占用 | Area-time | m2*a | 以占用面积乘以占用时间计算，并按声明的种植周期归一化。 |
| `nitrous_oxide_basis` | 受管理土壤氧化亚氮排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg N2O-N | 按氮质量基准计算和报告 N2O；下游数据集需要 kg N2O 时提供透明换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已购入或内部供给、可在声明田块定植的甘蓝种子或移栽苗 |
| starting_condition_role | 进入受控栽培的生物种植投入 |
| product_classification_scope | CPC 3.0 01212 下的鲜食结球甘蓝产品 |
| recursive_input_rule | 任何作为种植或市场投入重新进入系统的甘蓝产品，均按实际交接状态记录并链接独立上游数据集，不递归复制本 PCR 边界。 |
| upstream_dataset_requirement | 对种植材料、养分产品、植保产品、供水、能源载体、包装以及跨越边界的任何外包服务使用上游数据集。 |
| disclosure | 声明地理、季节、田块面积、种植时长、甘蓝类型或品种、种植路线、灌溉制度、养分制度、采收成熟度、修整和分选方式、残余物去向及农场门交接。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_farm_gate` | 默认甘蓝产品系统 | 纳入建植、田间管理、灌溉、养分和植保施用、受管理土壤直接排放、采收、修整、田间分选及内部移动，直至声明的农场门交接。 | `fao-postharvest-loss-manual`; `ipcc-2019-managed-soils` |
| `boundary_upstream_inputs` | 购入投入和公用工程 | 通过链接上游数据集表示购入种植材料、肥料、植保产品、能源和供水的生产；不得在栽培过程重复其生产。 | `codex-fresh-produce-hygiene` |
| `boundary_post_farm_gate` | 农场门交接后的冷却、包装、储存和配送 | 默认排除；声明的产品交接包含这些活动时，应作为明确的下游过程加入。 | `fao-horticultural-marketing` |
| `boundary_residue_fate` | 外叶、淘汰甘蓝球及其他作物残余物 | 分别记录每种物理残余物及其去向；田间还田影响纳入栽培，场外处理或利用链接独立下游数据集。 | `ipcc-2019-managed-soils`; `fao-postharvest-loss-manual` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_cultivation` | 甘蓝田间受控栽培 | required | 始终纳入 | 建立并管理甘蓝作物至可采收成熟度 | 一个声明田块和种植周期 |
| `harvest_field_preparation` | 采收、修整和田间分选 | required | 始终纳入 | 收获成熟甘蓝球、修整分选并形成农场门产品状态 | 进入采收和田间整理的鲜甘蓝 kg |

### 过程：甘蓝田间受控栽培（`field_cultivation`）

#### 输入

##### 产品流

###### 甘蓝种植材料（`cabbage_planting_material`）

作物建立时，甘蓝种子或移栽苗跨越栽培边界。前景记录必须识别实际物理种植产品，不得把全部种子和移栽苗视为可互换。

- 选定流：甘蓝种子或移栽苗种植材料
- 流属性/单位：物品数量/item；按质量记录种子时为 Mass/kg
- 数量规则：按类型记录购入和内部供给的种植材料，并换算为定植株数或种子质量，不合并不同单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：
- 数量范围：暂定种植密度筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：10000
  - 上限：120000
  - 单位：established plants/ha
  - 基准：每种植公顷的宽泛筛选区间；以品种和系统特定前景证据替换
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`field_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：
- 数量范围：暂定氮投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg N/ha
  - 基准：每种植公顷的宽泛筛选区间；以当地养分计划证据替换
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定磷投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：350
  - 单位：kg P2O5/ha
  - 基准：每种植公顷的宽泛筛选区间；以当地养分计划证据替换
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定钾投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：600
  - 单位：kg K2O/ha
  - 基准：每种植公顷的宽泛筛选区间；以当地养分计划证据替换
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉供水（`irrigation_water_input`）

供给的灌溉水在田间交付点记录；自然降水不作为该产品投入记录。

- 选定流：灌溉供水
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.1.0`
- 流集分组：`irrigation-water`
- 数量规则：记录计量或计算的田间交付水量，扣除同一系统内有记录的循环回用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`fao-irrigation-handbook`
- 数量范围：暂定灌溉水量筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15000
  - 单位：m3/ha
  - 基准：每种植公顷和种植周期的宽泛筛选区间；雨养生产可为零
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间作业机械能（`field_operation_energy`）

记录整地、定植、灌溉泵送、养分施用、植保和田间移动所使用的能源；最终数据集发布前须按实际载体或供应者解析。

- 选定流：田间作业机械动力能源供给
- 流属性/单位：Energy / MJ
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.1.0`
- 流集分组：`mechanical-power`
- 数量规则：汇总田间作业所用的载体特定能源，并保留能源载体、设备和换算基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_energy`
- 来源：
- 数量范围：暂定田间能源筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：MJ/ha
  - 基准：直接田间作业能源的宽泛首轮区间；以载体特定记录替换
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保活性成分（`crop_protection_inputs`）

植保投入以实际施用的除草剂、杀虫剂、杀菌剂或其他活性成分跨越边界。前景记录须分别保留每种物理身份和配方产品。

- 选定流：由前景记录指定的植保活性成分
- 流属性/单位：Mass / kg active ingredient
- 数量规则：依据配方产品数量和组成计算每种活性成分；最终交换中不得合并不同物质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cultivation_inputs`
- 来源：`codex-fresh-produce-hygiene`
- 数量范围：暂定活性成分总量筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg active ingredient/ha
  - 基准：全部施用的宽泛筛选总量；最终交换仍保持物质特定
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 农业土地占用（`agricultural_land_occupation`）

在甘蓝种植周期内，占用田块面积跨越环境资源边界。

- 选定流：农业土地占用
- 流属性/单位：Area-time / m2*a
- 数量规则：以占用面积乘以从田间建立至采收完成之间的年分数计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_area_cycle`
- 来源：

#### 输出

##### 产品流

###### 田间成熟甘蓝作物交接（`mature_cabbage_crop_handoff`）

该内部产品交接表示切割、修整和田间分选之前物理成熟的甘蓝球。其质量应与适销甘蓝球和物理上不同的残余物流进行核对。

- 选定流：采收前田间成熟甘蓝作物
- 流属性/单位：Mass / kg wet crop
- 数量规则：依据采收记录和质量核算确定可采收的田间作物质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_output`
- 来源：`fao-horticultural-marketing`
- 数量范围：暂定成熟作物产量筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5000
  - 上限：150000
  - 单位：kg wet crop/ha
  - 基准：采收修整和分选之前的宽泛筛选区间
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 受管理土壤氧化亚氮（`managed_soil_n2o`）

依据采集的氮投入、作物残余物氮以及所选 IPCC 或有充分依据的更高层级方法，计算直接及适用的间接受管理土壤氧化亚氮。

- 选定流：向环境空气排放的氧化亚氮
- 流属性/单位：Mass / kg N2O-N
- 数量规则：依据采集的各氮路径计算直接及适用的间接 N2O-N，不重复计算残余物氮。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_soil_emissions`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定受管理土壤 N2O-N 筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg N2O-N/ha
  - 基准：每种植周期的宽泛首轮区间；以方法计算结果替换
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：采收、修整和田间分选（`harvest_field_preparation`）

#### 输入

##### 产品流

###### 从田间栽培接收的成熟甘蓝作物（`mature_cabbage_crop_input`）

成熟田间作物交接以栽培输出所用的相同物理状态和质量基准进入采收和田间整理过程。

- 选定流：采收前田间成熟甘蓝作物
- 流属性/单位：Mass / kg wet crop
- 数量规则：同一田块和种植周期内，等于对应 `mature_cabbage_crop_handoff` 数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crop_output`
- 来源：`fao-horticultural-marketing`
- 数量范围：与成熟作物交接关联的 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5000
  - 上限：150000
  - 单位：kg wet crop/ha
  - 基准：与栽培输出对应的成熟作物质量采用相同区间，适用于采收修整和分选之前
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 鲜食适销甘蓝（`fresh_cabbage_output`）

适销的修整甘蓝球在声明的农场门交接处离开前景系统。流身份固定，而品种、成熟度、修整、水分、包装和地点限定信息仍为前景事实。

- 选定流：Cabbage `aed02ce8-12e2-4410-be27-38b4abc01fc4`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：在声明的农场门交接处称量或核算适销甘蓝质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期，并按 1 kg 参考产品归一化
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_outputs`
- 来源：`fao-horticultural-marketing`
- 数量范围：暂定适销产量筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5000
  - 上限：120000
  - 单位：kg fresh cabbage/ha
  - 基准：修整和田间分选后的宽泛筛选区间
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 还田甘蓝外叶（`outer_leaves_field_return`）

采收和修整时去除并留在田间或还田的外叶应单独记录，不得与运往其他地点的淘汰整球合并。

- 选定流：还田鲜甘蓝外叶
- 流属性/单位：Mass / kg wet residue
- 数量规则：称量、依据抽样质量比例估算或核算还田外叶湿质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_outputs`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：暂定还田外叶估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80000
  - 单位：kg wet leaves/ha
  - 基准：去除并还田外叶的宽泛筛选区间
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 运往场外的淘汰甘蓝球（`rejected_heads_offsite`）

田间分选中淘汰的完整或基本完整甘蓝球应按实际去向单独记录，因为场外饲用、回收、堆肥、处理和处置是不同交接。

- 选定流：运往场外并指定去向的淘汰鲜甘蓝球
- 流属性/单位：Mass / kg wet heads
- 数量规则：称量或核算淘汰甘蓝球质量，并在前景数据包中分别记录各场外去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 甘蓝种植面积、每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_outputs`
- 来源：`fao-postharvest-loss-manual`
- 数量范围：暂定淘汰甘蓝球筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50000
  - 单位：kg wet heads/ha
  - 基准：离开田间系统的淘汰甘蓝球宽泛筛选区间
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 栽培和采收过程 | 分配之前优先使用过程细分和质量核算；不得在内部田间成熟作物交接与采收后的同一作物之间进行分配。 | `fao-horticultural-marketing` |
| `allocation_residue_classification` | 外叶和淘汰甘蓝球 | 将还田外叶归为残余物，并按实际去向分类场外淘汰甘蓝球；除非证据表明其具有有意产品功能和市场交接，不得视为有意共产品。 | `ipcc-2019-managed-soils`; `fao-postharvest-loss-manual` |
| `allocation_intended_coproduct` | 任何额外的创收有意产出 | 若细分不能隔离额外有意产出，采用同一报告期有文件支持的农场门收入实施经济分配，并披露价格、币种、期间和敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_inputs` | `field_cultivation` | 种植材料、养分产品、灌溉水、植保产品 | 采购、施用、计量和田间作业记录 | 产品身份；批次；数量；组成；活性成分；施用日期；处理面积；供水量 | 核对发票、施用日志、组成标签、灌溉表计和田间日志 | item; kg product; kg nutrient; kg active ingredient; m3 | 每次交付和施用 | 完整种植周期 | 每一田块和种植周期 | 按物理身份汇总并用有文件支持的组成换算；保留零使用声明 | 发票；标签；校准记录；施用日志；表计读数 |
| `cp_field_energy` | `field_cultivation` | 田间作业能源 | 燃料、电力和设备工时记录 | 载体身份；数量；单位；设备；作业；表计或发票期间 | 将载体采购和表计与设备及田间作业日志核对 | L; kg; kWh; MJ; h | 每次作业或计费期 | 完整种植周期 | 每一田块和设备组 | 使用有文件支持的因子逐载体换算能源，避免采购能源与设备估算重复 | 发票；表计；设备日志；换算因子来源 |
| `cp_crop_area_cycle` | `field_cultivation` | 农业土地占用 | 地籍、GIS 和种植日历记录 | 种植面积；建立日期；采收完成日期；共享面积比例 | 测量或核实田块面积和作物占用日期 | ha; date | 每田块和种植周期一次 | 建立至采收完成 | 每一田块 | 面积乘以占用时间；共享田块按有文件支持的占用比例分配 | GIS 或地籍记录；种植日历 |
| `cp_crop_output` | `field_cultivation` | 成熟甘蓝作物交接 | 采收和抽样质量记录 | 采收面积；甘蓝球数量；抽样球质量；总采收质量；田块标识 | 称量采收批次，或依据分层球数和质量样本计算 | kg wet crop | 每次采收 | 完整采收窗口 | 每一田块和种植周期 | 汇总总成熟作物，并与适销产出和残余物产出核对 | 校准秤记录；抽样计划；采收日志 |
| `cp_soil_emissions` | `field_cultivation` | 受管理土壤氧化亚氮 | 养分、残余物、土壤改良剂、挥发、淋失和田间管理记录 | 各路径 N 投入；残余物干物质和含氮量；移除比例；排放因子；换算基准 | 对采集的田间记录应用声明的 IPCC 层级或有充分依据的更高层级模型 | kg N; kg dry matter; fraction; kg N2O-N | 每次施用及年度或种植周期计算 | 完整种植周期并声明年化方式 | 每一田块和排放分层 | 各路径分别计算后无重复汇总，并按作物产出归一化 | 源记录；因子版本；计算工作簿；独立公式检查 |
| `cp_harvest_outputs` | `harvest_field_preparation` | 适销甘蓝球、外叶、淘汰甘蓝球 | 称量、批次、分级和去向记录 | 来料作物质量；适销质量；叶残余物质量；淘汰球质量；去向；品种；成熟度；修整和包装状态 | 可行时称量各产出；未称量田间残余物采用有文件支持的代表性抽样 | kg wet mass | 每次采收或发运批次 | 完整采收和田间发运窗口 | 每一田块、批次和去向 | 按产出状态和去向汇总；在声明容差内将全部产出与来料成熟作物核对 | 校准秤；抽样表；分级记录；发运记录；质量平衡检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_mass` | 养分投入 | 养分质量 = 配方产品质量 × 声明养分质量分数；N、P2O5 和 K2O 分别保留 | 产品质量；组成 | kg N; kg P2O5; kg K2O |  |
| `calc_field_energy` | 田间作业能源 | 载体能源 = 实测载体数量 × 有文件支持的低位热值或电力换算；保留载体身份后方可汇总 | 载体数量；换算因子 | 各载体 MJ 和总 MJ |  |
| `calc_land_occupation` | 农业土地占用 | 面积时间 = 种植面积 × 占用天数 / 365.25 | 种植面积；建立日期；采收完成日期 | m2*a |  |
| `calc_mature_crop` | 成熟甘蓝作物交接 | 总成熟作物 = 实测总采收量，或抽样平均球质量 × 采收球数 | 总质量或球数抽样记录 | kg 湿成熟作物 | `fao-horticultural-marketing` |
| `calc_harvest_mass_balance` | 采收产出 | 来料成熟作物 = 适销甘蓝 + 外叶 + 淘汰甘蓝球 + 有记录的未收集损失，并满足声明不确定性 | 全部采收产出质量；未收集损失估算 | 核对后的 kg 湿质量和闭合率 | `fao-postharvest-loss-manual` |
| `calc_managed_soil_n2o` | 受管理土壤氧化亚氮 | 对采集的 N 投入和残余物路径应用声明的 IPCC 直接及适用间接 N2O 方程；避免重复计算移除、焚烧或还田残余物。 | N 投入；残余物 N；移除和焚烧比例；淋失和挥发参数；所选因子 | 每种植周期 kg N2O-N | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 全部投入和产出 | 保留物理产品或物质身份、供应者或来源、状态和去向，足以将每个最终交换解析到具体 UUID。 | 发票；标签；规格；发运和去向记录 |
| `dq_temporal` | 栽培和采收清单 | 覆盖一个完整且有代表性的种植周期，并披露多季汇总、作物失败和部分采收。 | 带日期的种植日历；田间和采收日志 |
| `dq_mass_balance` | 成熟作物和采收产出 | 将适销甘蓝球、外叶、淘汰甘蓝球和有记录的田间损失与成熟作物投入核对；调查实质闭合差异。 | 校准秤记录；抽样记录；核算工作表 |
| `dq_nutrient_emissions` | 养分投入和受管理土壤排放 | 保留养分组成、残余物去向、计算层级、因子版本和路径分离，使排放可复现。 | 产品标签；施用日志；残余物记录；计算工作簿 |
| `dq_water_energy` | 灌溉和田间能源 | 记录表计覆盖、估算期间、向甘蓝田块的分配、换算因子以及共享设备或公用工程使用。 | 表计记录；发票；设备日志；分配工作表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 要求固定的甘蓝 UUID、质量属性、质量单位组、kg 参考单位以及全部必需前景限定信息。 |  |
| `validation_process_completeness` | 过程图和清单 | 要求两个声明过程齐全，并要求每个采集或计算流行引用已有采集协议。 |  |
| `validation_binding_specificity` | 全部流绑定 | 存在唯一已验证 UUID 或更窄且有依据的分组时，拒绝较宽流集；最终过程交换必须将参数化和未映射行解析为具体 UUID。 |  |
| `validation_mass_balance` | 采收、修整和分选 | 要求在声明容差内核对来料成熟作物与适销甘蓝、外叶、淘汰甘蓝球和有记录的未收集损失。 | `fao-postharvest-loss-manual` |
| `validation_residue_destination` | 作物残余物 | 要求还田外叶和场外淘汰甘蓝球具有独立身份和去向，并防止残余物 N 计算重复。 | `ipcc-2019-managed-soils` |
| `validation_n2o_reproducibility` | 受管理土壤 N2O | 要求声明方法层级、因子来源和版本、全部氮路径、换算基准及可复现计算。 | `ipcc-2019-managed-soils` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门甘蓝生产前景数据集 |
| downstream_use | `secondary_dataset`；经评审和身份解析后可作为 `background_dataset` |
| allowed_use | 与声明的甘蓝类型、地理、生产系统和农场门边界一致的产品碳足迹、比较 LCA、供应链建模和农业清单研究 |
| excluded_use | 未增加路线过程的设施或无土栽培；加工甘蓝产品；零售或消费建模；与声明数据集实质不一致的地理或系统 |
| required_metadata | 甘蓝类型或品种；地理；田块面积；季节和种植时长；种植材料；灌溉；养分和植保制度；采收成熟度；修整、分选和包装状态；残余物去向；分配方法；参考流限定信息 |
| required_quality_disclosure | 前景覆盖；实测与估算比例；质量平衡闭合；表计和秤质量；来源和因子版本；推理估算替换情况；不确定性和代表性 |
| update_trigger | 栽培系统、地理、投入制度、产量或淘汰模式、残余物去向、采收或农场门状态、分配方法、平台身份或实质来源证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-postharvest-loss-manual` | `official_guidance` | FAO, Prevention of post-harvest food losses: fruits, vegetables and root crops, https://www.fao.org/4/T0073E/T0073E01.htm | 采后质量影响、分选损失、残余物分离和质量平衡要求 |
| `fao-horticultural-marketing` | `official_guidance` | FAO, Horticultural marketing: a resource and training manual for extension officers, https://www.fao.org/4/a0185e/a0185e0c.htm | 甘蓝采收成熟度、切割修整、处理、分选和农场门产品状态 |
| `fao-irrigation-handbook` | `handbook` | FAO, Technical handbook on pressurized irrigation techniques, https://www.fao.org/4/a1336e/a1336e.pdf | 甘蓝分生育期灌溉方法背景以及有效降水与灌溉供水的区分 |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 受管理土壤 N2O 计算和作物残余物氮处理 |
| `codex-fresh-produce-hygiene` | `official_guidance` | Codex/FAO, Code of Hygienic Practice for the Primary Production, Harvesting and Packing of Fresh Fruits and Vegetables, https://www.fao.org/4/x8735e/x8735e0n.htm | 投入、施用、采收、批次、水质和包装记录要求 |
