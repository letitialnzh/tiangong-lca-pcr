---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-leafy-or-stem-vegetables
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他叶菜或茎菜

## 1. 范围与适用性

本 PCR 覆盖 CPC 3.0:01219 所列新鲜、未加工叶菜或茎菜的种植和农场大门准备过程。范围包括直播或移栽的一年生作物、露地或保护地种植、灌溉、养分和作物保护投入、采收、分级、在农场大门前进行的可选清洗、冷却和初级包装。包括山萝卜、瑞士甜菜、欧芹、马齿苋、海甘蓝、大黄、酸模、夏季或冬季香薄荷、龙蒿、水田芥以及不属于生菜和菊苣的其他沙拉蔬菜。排除作为种植材料出售的蔬菜种子和移栽苗、归入 CPC 016 的香料和芳香作物、芦笋、洋蓟、卷心菜、花椰菜、西兰花、生菜、菊苣、菠菜、根菜、球茎和块茎，以及加工、速冻、熟制、干制或农场大门之后的零售即用产品、配送、零售、制备和消费。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-leafy-or-stem-vegetables |
| classification_refs | CPC 3.0:01219 Other leafy or stem vegetables |
| covered_products | 农场大门的新鲜、未加工叶菜或茎菜，包括瑞士甜菜、欧芹、马齿苋、大黄、酸模、香薄荷、龙蒿、水田芥以及不属于明确 CPC 叶类的其他沙拉蔬菜 |
| excluded_products | 种子和种植用移栽苗、CPC 016 的香料或芳香作物、芦笋、洋蓟、卷心菜、花椰菜、西兰花、生菜、菊苣、菠菜、根菜、球茎、块茎，以及加工、速冻、熟制、干制或声明农场大门之后的零售产品 |
| representative_product | 按声明的作物身份、等级、采收成熟度、修整状态和市场路线分选的可销售新鲜叶菜或茎菜 |
| production_route | 直播或移栽建植、作物管理、一次或多次采收、分选，以及可选的农场大门清洗、冷却和包装 |
| market_state | 农场大门的新鲜、未加工产品，散装或采用声明的初级包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场大门可销售的新鲜其他叶菜或茎菜 |
| How much | 1,000 kg |
| How well | 在声明的作物身份、采收成熟度、等级、修整、清洗和包装状态下的新鲜、未加工且可销售产品 |
| How long or cycle | 一个声明的作物周期和采收期；多次采收按作物年度和建植批次汇总 |
| reference_flow_link | other_leafy_stem_vegetables_farm_gate_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Other leafy or stem vegetables `4dda0ce0-12e0-4cc0-9d3d-f218fa3e6892` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 农场大门交接；生产地理位置；相关时的作物身份和植物学名称；生产年份和作物周期；露地或保护地路线；采收期；等级和成熟度；修整状态；已清洗或未清洗；包装状态 |
| 绑定模式 | `fixed` |
| Flow Set |  |
| Flow Set version |  |
| Flow Set group |  |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收和农场大门产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保持待采收、毛采收、可销售、拒收和修整质量彼此独立。 |
| `field_year_normalization` | 作物和田块记录 | Area and mass | ha and kg | 按田块、作物和周期记录数量，再按相应作物年度的可销售产出归一化。 |
| `nutrient_basis` | 肥料和有机改良剂投入 | Mass | kg N, kg P2O5, or kg K2O | 使用有文件支持的养分浓度换算产品质量，并分别保留各养分基准。 |
| `water_volume` | 灌溉水和清洗水 | Volume | m3 | 按水源和用途记录计量交付水量；不得用降水替代交付灌溉水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收种子、移栽苗或已建植作物的整备农业畦、田块或保护地，并披露前期土地利用和排除的种植前作业 |
| starting_condition_role | 声明的作物周期和田块年度归集的起点 |
| product_classification_scope | CPC 3.0:01219 的新鲜其他叶菜或茎菜，直至农场大门交接 |
| recursive_input_rule | 外购种子、移栽苗和其他同类别种植材料作为独立上游产品投入，只链接一次，不在本 PCR 内重建。 |
| upstream_dataset_requirement | 使用时要求种子或移栽苗、肥料、改良剂、作物保护产品、灌溉水、能源、运输服务和包装的上游数据集。 |
| disclosure | 声明作物身份、相关的植物学类型、地理位置、露地或保护地路线、作物周期、灌溉水源、养分基准、作物保护方案、采收安排、残余物去向、清洗、冷却、包装和农场大门交接。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和种植 | 纳入种子或移栽建植、作物管理、采收和所代表的作物周期；按声明的作物和周期归集共享畦面准备，并避免重复计算。 | `fao-good-agricultural-practices`; `extension-leafy-vegetable-production` |
| `boundary_farm_gate` | 采收和处理 | 在声明的新鲜可销售产品于农场大门交接时结束；若场内完成，则纳入分选、修整、清洗、冷却和初级包装。 | `usda-ams-fresh-produce`; `codex-fresh-produce-hygiene` |
| `boundary_managed_soils` | 田间养分和残余物 | 使用一种声明的方法纳入适用的直接和间接氮排放及归田残余物氮，并防止肥料、残余物和土壤库之间的重复计算。 | `ipcc-2019-managed-soils` |
| `boundary_residue_destinations` | 作物残余物和拒收品 | 区分归田、堆肥、饲料、处理和处置；未说明去向的残余物和降级产品在有文件证明的副产品交接前均视为废物。 | `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 作物建植 | required | 每个直播或移栽作物周期一次 | 前景建植 | 建植面积和种植投入 |
| `field_crop_management` | 露地或保护地作物管理 | required | 每个所代表的作物周期和田块年度 | 前景管理的生物生产 | 管理面积、投入活动和待采收质量 |
| `harvest_and_farm_gate_preparation` | 采收和农场大门准备 | required | 每个所代表的采收批次或时段 | 前景采收、分级和交接 | 1,000 kg 可销售新鲜产品 |

### 过程：作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 种子或移栽材料（`planting_material_input`）

记录进入声明田块或种植区的作物种子批次、幼苗或移栽苗。

- 选定流：Seed or transplant material
- 流属性/单位：Mass or number of items / kg or plant
- 数量规则：按作物、批次、田块和活力记录外购或自产种植单位，并保留归一化所用基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷建植以及每 1,000 kg 参考可销售产品
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`extension-leafy-vegetable-production`
- 数量范围：暂定种植密度筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：10000
  - 上限：2000000
  - 单位：plants/ha or viable seeds/ha
  - 基准：等待作物特定种子或移栽记录的宽泛类别范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`crop_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷建植以及每 1,000 kg 参考可销售产品
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`extension-leafy-vegetable-production`
- 数量范围：暂定建植氮筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：150
  - 单位：kg N/ha
  - 基准：等待土壤测试和施用记录的建植施肥
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定建植磷筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：180
  - 单位：kg P2O5/ha
  - 基准：等待田块记录的土壤测试相关建植施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已建植作物面积（`established_crop_output`）

该内部交接记录可接受的作物面积，不是参考产品。

- 选定流：Established crop area
- 流属性/单位：Area / ha
- 数量规则：在核对出苗、建植和补植损失后记录可接受面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每次建植活动
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_establishment_records`
- 来源：`extension-leafy-vegetable-production`

##### 废物流

##### 基本流

### 过程：露地或保护地作物管理（`field_crop_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`field_crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个管理公顷周期以及每 1,000 kg 参考可销售产品
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_cycle_records`
- 来源：`extension-leafy-vegetable-production`; `ipcc-2019-managed-soils`; `fao-good-agricultural-practices`
- 数量范围：作物周期氮筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg N/ha-cycle
  - 基准：等待土壤测试和施用记录的管理作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：作物周期磷筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg P2O5/ha-cycle
  - 基准：等待田块记录的土壤测试相关作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：作物周期钾筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：350
  - 单位：kg K2O/ha-cycle
  - 基准：等待田块记录的土壤测试相关作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water_input`）

将交付到作物的水与降水和清洗水分开记录。

- 选定流：Irrigation water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按田块、水源和灌溉事件计量交付灌溉水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个管理公顷周期以及每 1,000 kg 参考可销售产品
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-water-efficiency`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：12000
  - 单位：m3/ha-cycle
  - 基准：等待计量和水源记录的宽泛作物周期范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 移动机械燃料（`mobile_machinery_fuel_input`）

记录田间机械、采收设备和场内运输使用的柴油或其他燃料。

- 选定流：Diesel fuel
- 流属性/单位：Mass or energy / kg or MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：记录燃料采购、油箱或设备小时数据，并保留使用的能量或质量换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个管理公顷周期以及每 1,000 kg 参考可销售产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_cycle_records`
- 来源：`fao-good-agricultural-practices`

###### 作物保护产品（`crop_protection_input`）

按产品和施用分别记录作物保护产品，并保留有效成分和施用面积。

- 选定流：Crop-protection product
- 流属性/单位：Mass / kg product
- 数量规则：从标签、发票或施用记录记录产品质量和有效成分；配方未知时不得推断有效成分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个管理公顷周期以及每 1,000 kg 参考可销售产品
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_cycle_records`
- 来源：`fao-good-agricultural-practices`

##### 废物流

##### 基本流

###### 土地占用（`land_occupation`）

报告所代表作物面积和持续时间的土地占用；保护地结构须单独披露。

- 选定流：Occupation, agricultural area
- 流属性/单位：Area-time / m2*a
- 数量规则：田块或保护地面积乘以声明周期的占用时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考可销售产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_cycle_records`
- 来源：`fao-good-agricultural-practices`

###### 水资源取用（`water_resource_withdrawal`）

当源水跨越环境边界时报告水源取用量，并与交付灌溉水量区分。

- 选定流：Water resource withdrawal
- 流属性/单位：Volume / m3
- 数量规则：记录水源处的取用量，或采用声明的水源至田块损失方法；不得把降水计为取用量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个管理公顷周期以及每 1,000 kg 参考可销售产品
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-water-efficiency`

#### 输出

##### 产品流

###### 待采收叶菜或茎菜（`harvest_ready_output`）

该内部输出记录分级和修整损失前可采收和处理的作物质量。

- 选定流：Harvest-ready leafy or stem vegetables
- 流属性/单位：Mass / kg
- 数量规则：从田间或批次记录中记录分级和采收损失前的待采收质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期以及每 1,000 kg 参考可销售产品
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`extension-leafy-vegetable-production`

##### 废物流

###### 田间作物残余物（`field_residue_output`）

按去向记录不可销售叶、茎、根和采收后残余物。

- 选定流：Leafy or stem crop residues
- 流属性/单位：Mass / kg fresh or dry matter
- 数量规则：称量或计算残余物质量，并声明归田、堆肥、饲料、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个管理公顷周期以及每 1,000 kg 参考可销售产品
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_cycle_records`
- 来源：`fao-good-agricultural-practices`; `ipcc-2019-managed-soils`
- 数量范围：暂定残余物筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2500
  - 单位：kg fresh residue/1,000 kg marketable product
  - 基准：等待田间和去向记录的宽泛首轮作物残余物范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接和间接土壤氮排放（`soil_nitrogen_emissions`）

使用一种声明的方法，根据合成氮、有机氮和归田残余物氮计算适用的土壤排放。

- 选定流：Soil nitrogen emissions
- 流属性/单位：Mass / kg N
- 数量规则：对活动数据应用声明的 IPCC 或认可的区域方法，并保留因子以及气候或管理限定信息。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考可销售产品
- 基准类型：氮投入（`n_input`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_cycle_records`
- 来源：`ipcc-2019-managed-soils`

### 过程：采收和农场大门准备（`harvest_and_farm_gate_preparation`）

#### 输入

##### 产品流

###### 待采收作物投入（`harvest_ready_crop_input`）

记录来自各田块或批次、进入分级和农场大门准备的采收作物。

- 选定流：Harvest-ready leafy or stem vegetables
- 流属性/单位：Mass / kg
- 数量规则：将每个采收批次关联到田块、作物、日期和采收方法，并在分级修整前计量毛投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`extension-leafy-vegetable-production`

###### 农场大门清洗水（`wash_water_input`）

仅在农场大门交接前发生清洗或冷却时记录所用水量。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：按批次或班次计量或从发票记录清洗和冷却用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 来源：`codex-fresh-produce-hygiene`

###### 初级包装（`primary_packaging_input`）

按材料和质量记录农场大门交接前使用的包装。

- 选定流：Primary packaging material
- 流属性/单位：Mass / kg packaging
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`flexible-packaging`
- 数量规则：按批次称量包装消耗量，并保留材料组成和复用状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 来源：`usda-ams-fresh-produce`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场大门可销售新鲜其他叶菜或茎菜（`other_leafy_stem_vegetables_farm_gate_output`）

这是在声明农场大门交接的修整、分级、新鲜、未加工产品。

- 选定流：Other leafy or stem vegetables `4dda0ce0-12e0-4cc0-9d3d-f218fa3e6892`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：扣除田间、采收、分级和修整损失后的经计量确认质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 可销售新鲜其他叶菜或茎菜
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_handling_records`
- 来源：`usda-ams-fresh-produce`; `codex-fresh-produce-hygiene`

##### 废物流

###### 拒收和修整产品（`rejected_trimmed_output`）

按去向记录拒收、损伤、萎蔫、过小、过熟和修整材料。

- 选定流：Rejected and trimmed leafy or stem vegetables
- 流属性/单位：Mass / kg fresh material
- 数量规则：称量或核对拒收和修整质量，并声明归田、饲料、堆肥、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 来源：`usda-ams-fresh-produce`; `codex-fresh-produce-hygiene`
- 数量范围：暂定拒收和修整筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：400
  - 单位：kg/1,000 kg marketable product
  - 基准：等待等级、损伤和修整记录的宽泛首轮范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_bed_preparation` | 建植和田间管理 | 根据有文件支持的面积、持续时间和作物序列，将共享畦面或保护地准备归集到声明的作物周期，并披露间作或多作物使用。 | `fao-good-agricultural-practices` |
| `allocation_marketable_and_rejects` | 采收和处理 | 将待采收或毛采收质量与可销售产品、拒收品和修整物核对；除非有文件证明的买方、规格、数量和去向建立副产品，否则拒收品按废物处理。 | `usda-ams-fresh-produce` |
| `allocation_secondary_output` | 有意生产的副产品 | 对有意生产的副产品报告数量和交接，并采用明确论证的质量或经济分配；不默认适用替代负担。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting material, establishment nutrients, accepted area | seed or transplant, purchase, application, and field records | crop_identity; botanical_name; lot_id; date; units_or_mass; viability; field_id; area; product_mass; nutrient_concentration; accepted_area | reconcile purchases and applications to each crop and field | plant; kg; ha | each establishment event | complete crop establishment period | every represented field or protected area | sum by crop-field-cycle and preserve replacement losses | invoices, labels, seed certificates, field maps, and acceptance records |
| `cp_field_cycle_records` | `field_crop_management` | nutrients, amendments, fuel, crop protection, land, residues, and emissions activity | field-cycle log, invoice, meter, application, and residue record | field_id; crop_identity; cycle_id; area; date; product_identity; product_mass; nutrient_concentration; amendment_dry_matter; fuel; electricity; irrigation; crop_protection; residue_mass; dry_matter; destination | reconcile all activities to the same crop, field, and cycle | ha; kg; m3; L; kWh | each event and cycle close | full declared crop cycle | every represented field or protected area | sum by field-cycle before reference-flow normalization | invoices, labels, analyses, meters, maps, and disposition receipts |
| `cp_irrigation_records` | `field_crop_management` | irrigation withdrawal and delivered water | meter, pump, source, and irrigation log | field_id; source; date; meter_start; meter_end; delivered_volume; withdrawal_volume; conveyance_loss; method | reconcile source withdrawal to field delivery and retain loss method | m3 | each irrigation event | full declared cycle | every represented irrigated field | sum by field-cycle and separate irrigation from wash water | calibrated meters, pump records, and water permits |
| `cp_harvest_records` | `harvest_and_farm_gate_preparation` | harvest-ready and gross harvested product | harvest log and scale record | field_id; crop_identity; lot_id; harvest_date; harvest_pass; gross_mass; harvest_loss; maturity; grade; trim_state | link each harvest lot to field and date | kg; ha | each harvest lot or pass | complete harvest window | every represented field and lot | sum by field-cycle without merging incompatible crop identities | calibrated scales, lot tickets, and grade records |
| `cp_handling_records` | `harvest_and_farm_gate_preparation` | wash water, packaging, marketable output, rejects, and trim | lot, scale, meter, packaging, and waste records | lot_id; source_field; gross_input; wash_water; cooling_energy; packaging_material; packaging_mass; marketable_mass; grade; trim_state; reject_mass; reject_reason; destination | preserve lot-level mass and utility reconciliation through transfer | kg; m3; kWh | each lot or shift | complete harvest and packing period | every represented handling line | reconcile input, product, rejects, trim, and mass change before aggregation | calibrated scales, meters, grade inspection, and destination receipts |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_equivalent` | fertilizer inputs | Product mass multiplied by documented nutrient fraction equals kg N, P2O5, or K2O; retain each basis separately. | product mass; nutrient concentration; area | nutrient-equivalent input | `extension-leafy-vegetable-production` |
| `calc_irrigation_withdrawal` | irrigation | Withdrawal equals metered or documented source volume; delivered irrigation and conveyance loss are reported separately. | source meter; field meter; loss method | source withdrawal and delivered irrigation | `fao-water-efficiency` |
| `calc_field_cycle_normalization` | cultivation | Divide complete field-cycle quantity by marketable output from the corresponding crop and cycle. | field-cycle quantity; marketable mass | quantity per 1,000 kg reference product |  |
| `calc_product_balance` | harvest and handling | Gross harvested input plus measured mass change equals marketable product plus rejects and trimmings within declared uncertainty. | gross, marketable, reject, trim, and mass-change records | reconciled output quantities | `usda-ams-fresh-produce` |
| `calc_managed_soil_emissions` | soil nitrogen emissions | Apply the declared applicable IPCC or accepted regional equations to synthetic, organic, and returned-residue nitrogen; preserve factors and prevent double counting. | nitrogen activity data; factors; climate and management qualifiers | direct and indirect nitrogen emissions | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | 保留作物身份、相关植物学名称、市场状态、等级、成熟度、修整、清洗、包装、地理位置、年份和周期。 | lot specification and field records |
| `dq_cycle_linkage` | establishment and cultivation | 将每个田块周期关联到一个作物身份，并披露作物序列、补植、失败面积和终止情况。 | field map, planting record, and production history |
| `dq_water_separation` | irrigation and handling | 区分水源取用、交付灌溉、清洗水和降水，并保留计量方法。 | meters, pump records, and water log |
| `dq_mass_balance` | harvest and handling | 核对待采收、毛采收、可销售、拒收和修整质量，并解释差异。 | calibrated scales and lot records |
| `dq_input_completeness` | all foreground inputs | 保留养分基准、灌溉水源、燃料和电力覆盖、作物保护产品身份、包装材料和残余物去向。 | invoices, labels, meters, and logs |
| `dq_method_transparency` | calculations | 记录方法版本、因子、归一化分母、排除项以及暂定估算的替换情况。 | calculation file and review record |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference product | 使用已验证的 Other leafy or stem vegetables UUID、质量属性、质量单位组、kg 和全部必需限定信息。 |  |
| `validation_cycle_handoffs` | process map | 将作物建植连接到每个田块周期，并使损失前的待采收输出等于采收投入。 |  |
| `validation_mass_balance` | harvest and handling | 在声明的不确定度内，将可销售输出、拒收品、修整物和质量变化与毛采收投入核对。 | `usda-ams-fresh-produce` |
| `validation_nutrients_emissions` | field management | 保持 N、P2O5 和 K2O 分开，记录排放因子，并防止归田残余物氮的重复计算。 | `ipcc-2019-managed-soils` |
| `validation_parameterized_flows` | parameterized rows | 在发布最终过程数据集前，将每个 Flow Set 解析为兼容的具体 UUID。 |  |
| `validation_unmapped_flows` | unmapped rows | 在提供精确兼容身份之前，种植材料、内部作物和残余物状态以及拒收产品仍作为明确的覆盖要求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场大门新鲜其他叶菜或茎菜的前景农业生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | 作物及供应链研究，且作物身份、地理位置、作物周期、路线、市场状态和农场大门边界相容 |
| excluded_use | 种子或移栽苗生产、明确列出的 CPC 叶菜或茎菜类别、香料和芳香作物、加工产品、农场大门之后的配送，或省略声明作物周期活动的比较 |
| required_metadata | 作物身份；相关植物学名称；地理位置；露地或保护地路线；面积；周期和年份；种植材料；灌溉水源；养分基准；作物保护方案；采收和等级；成熟度；清洗；冷却；包装；残余物去向；农场大门交接 |
| required_quality_disclosure | 原始数据覆盖；计量器具和秤的质量；作物周期关联；质量平衡；水量分离；数据缺口；暂定范围；排放方法；Flow Set 解析；未映射身份 |
| update_trigger | 已验证身份、经过审查的定量证据、作物特定产品规格、来源方法变化或管理土壤方法变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | Food and Agriculture Organization of the United Nations, Good Agricultural Practices, https://www.fao.org/3/i6677e/i6677e.pdf | 作物建植、田间管理、投入、残余物处理和良好实践边界 |
| `extension-leafy-vegetable-production` | extension_guidance | University of Florida IFAS Extension, Leafy Vegetables, https://edis.ifas.ufl.edu/topic_leafy_vegetables | 作物周期过程分解、种植、养分记录和采收数据 |
| `fao-water-efficiency` | official_guidance | Food and Agriculture Organization of the United Nations, Water efficiency, https://www.fao.org/land-water/water/water-efficiency/en/ | 灌溉计量、水源取用和交付水分离 |
| `usda-ams-fresh-produce` | official_guidance | United States Department of Agriculture Agricultural Marketing Service, Fresh Fruits and Vegetables, https://www.ams.usda.gov/grades-standards/vegetables | 可销售等级、处理、产品身份和质量核对 |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius, Codes of Practice, General Principles of Food Hygiene and fresh produce guidance, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | 农场大门处理、清洗、包装和质量披露 |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤氮排放和残余物氮 |
