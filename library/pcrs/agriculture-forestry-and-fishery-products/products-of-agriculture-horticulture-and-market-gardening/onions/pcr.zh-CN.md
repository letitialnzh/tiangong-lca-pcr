---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.onions
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 洋葱

## 1. 范围与适用性

本 PCR 覆盖鲜食鳞茎洋葱（*Allium cepa* L. Cepa 组）的前景生产，从种植材料进入开始，经过收获、田间晾晒和声明的农场交付状态。它适用于露地生产；如果相同的鳞茎产品边界有明确记录，也适用于保护地生产。参考产品是完整、成熟、坚实、无腐败、清洁且足够干燥的鳞茎，并应声明品种或商业类型、颜色、等级、尺寸、水分状态、产地和作物周期日期。带全叶的青葱、青洋葱、葱头类小洋葱、仅供工业加工的鳞茎，以及声明农场交付点之外的下游运输或零售活动均不在范围内。只有当场内分选、清洗、包装或储存跨越前景边界并被声明时，才纳入这些活动。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.onions |
| classification_refs | CPC 3.0: 01253 |
| covered_products | *Allium cepa* L. Cepa 组的鲜食鳞茎洋葱，包括白色、黄色、红色、粉色、棕色及其他品种颜色 |
| excluded_products | 带全叶的青洋葱；葱头类小洋葱；仅用于工业加工的洋葱；场外分销、零售和消费使用 |
| representative_product | 在农场交付点成熟、经过晾晒和分级的新鲜鳞茎洋葱 |
| production_route | 种子、种球或移栽苗建植；土壤准备和作物管理；灌溉和养分管理；植保；收获和田间晾晒；条件性场内调制或储存 |
| market_state | 农场交付时完整、坚实、无腐败、清洁且足够干燥的鳞茎，并声明品种或商业类型、颜色、等级、尺寸、水分、产地、收获和调制状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场交付状态下的新鲜食用鳞茎洋葱 |
| How much | 1,000 kg |
| How well | 成熟、完整、坚实、无腐败、清洁且足够干燥；声明品种或商业类型、颜色、等级、尺寸和水分状态 |
| How long or cycle | 从种植材料进入到收获和田间晾晒的一个声明洋葱作物周期；场内调制或储存跨越边界时纳入这些条件性过程 |
| reference_flow_link | 下方的参考产品流；由前景数据包解析身份 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 农场交付的可销售新鲜鳞茎洋葱 `<9a7c27da-f086-4d97-a251-b1989ad5d312>` |
| 参考流属性 | 质量 `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| 参考单位组 | 质量单位 `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| 参考单位 | kg |
| 必需限定信息 | *Allium cepa* 鳞茎；鳞茎洋葱与青洋葱状态；品种或商业类型；颜色；生产地理位置；作物周期日期；收获成熟度；田间晾晒状态；水分或干物质基准；等级和尺寸；是否包含清洗、包装或储存 |
| 绑定模式 | `fixed` |

构建前景数据包时，所有必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息的数据包，其参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | 参考产品和可销售输出 | 质量 | kg | 将 PCR 归一化为声明农场交付状态下 1,000 kg 可销售鳞茎。应在声明的收获、晾晒和纳入的调制步骤之后称量。 |
| `moisture_state_declaration` | 参考产品和收获鳞茎输出 | 质量和水分含量 | kg 和质量-% | 有测量时声明收到状态水分或干物质；不得在未声明的情况下在收到状态质量和干物质质量之间静默换算。 |
| `nutrient_product_basis` | 肥料和土壤改良剂投入 | 产品质量和养分质量 | kg 产品、kg N、kg P2O5、kg K2O | 记录实际施用的每种产品及其有文件依据的养分基准。将产品质量与养分质量分开，复合产品不得重复计量。 |
| `irrigation_volume_basis` | 灌溉水投入 | 体积 | m3 | 根据计量或有记录的水量平衡，按田块和作物周期记录交付灌溉水。将灌溉交付量与水源取水量和天然降雨分开。 |
| `land_cycle_basis` | 耕地占用 | 面积-时间 | ha·crop cycle | 用声明的生产面积和洋葱作物周期日期计算占用；仅在所代表期间实际发生土地转化时报告土地转化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 当种子、种球或移栽苗、被占用的田块或保护地单元以及第一次作业记录进入前景系统时，声明的作物周期开始。现有土壤、继承的土地历史和前茬作物负荷不被静默重新创建。 |
| starting_condition_role | 前景生产从建植开始，包括生产声明农场交付鳞茎所需的作业、投入、土地占用、作物排放、收获和田间晾晒。 |
| product_classification_scope | 农场交付的新鲜食用鳞茎洋葱，属于 *Allium cepa* L. Cepa 组；青洋葱、葱头类小洋葱和工业加工鳞茎不在本产品边界内。 |
| recursive_input_rule | 如果使用洋葱种球或其他同类产品类别的种植材料，将其作为产品投入记录，保留来源批次及其在当前作物周期中的用途。不得在本 PCR 内递归展开另一个洋葱生产周期。 |
| upstream_dataset_requirement | 使用的种植材料、肥料或土壤改良剂产品、植保产品、供水、燃料、电力、包装和处理服务，应在使用时链接上游或背景数据集。可用时声明供应者、地理位置、时间和技术。 |
| disclosure | 声明作物形态、品种或商业类型、颜色、生产系统、地理位置、田块或保护地面积、作物周期日期、种植材料路径、灌溉和养分记录、植保记录、收获和晾晒状态、质量等级、水分基准、残余物去向以及纳入的调制、包装或储存。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景生产边界 | 将建植、作物管理、收获和田间晾晒纳入至声明的农场交付输出。仅当场内调制或储存的作业及其投入跨越声明边界时纳入。 | `codex-cxs-348-onions-2022` |
| `boundary_rule_2` | 产品投入和上游链接 | 当购买或留用的种植材料、施用的肥料或土壤改良剂、植保产品、交付灌溉水、燃料、电力、包装和处理服务跨越前景边界时记录，并将其上游负荷作为声明的背景投入链接。 | `codex-cxc-53-hygiene-fresh-fruit-vegetables-2003` |
| `boundary_rule_3` | 土地和继承条件 | 报告作物周期的土地占用。仅对所代表期间发生的土地用途变化报告土地转化，并披露继承的土壤、土地历史和前茬作物条件，不得虚构新的转化事件。 | `ipcc-2019-managed-soils-n2o` |
| `boundary_rule_4` | 田间排放和残余物 | 根据声明的施氮投入、残余物处理和适用的水损失路径生成土壤排放行。只有残余物移除、处理或处置跨越边界时才记录，并避免同一氮路径重复计量。 | `ipcc-2019-managed-soils-n2o` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_preparation_and_establishment` | 田间准备与建植 | required | 声明洋葱作物周期始终纳入 | 前景作物生产 | 每 1,000 kg 参考输出；建植记录和生产面积 |
| `crop_management` | 作物管理和投入施用 | required | 声明洋葱作物周期始终纳入 | 前景作物生产 | 每 1,000 kg 参考输出；实测养分、水、能源和植保投入 |
| `harvest_and_field_curing` | 收获和田间晾晒 | required | 始终纳入至声明的农场交付收获状态 | 前景收获和初级调制 | 每 1,000 kg 参考输出；收获鳞茎、次品和残余物按质量核对 |
| `postharvest_conditioning_and_storage` | 采后调制和储存 | conditional | 清洗、分选、包装、田间晾晒以外的调制或储存跨越前景边界时纳入 | 条件性农场交付调制 | 每 1,000 kg 参考输出；处理质量和声明的储存时长 |

### 过程：田间准备与建植（`field_preparation_and_establishment`）

#### 输入

##### 产品流

###### 进入作物周期的洋葱种子、种球或移栽苗（`planting_material`）

记录进入声明田块或保护地单元的种子、种球或移栽苗批次。保留材料形态、品种或栽培品种、批次身份、有效数量以及材料是购买还是留用。

- 选定流：洋葱种子、种球或移栽材料＼
- 流属性/单位：质量或有效种植数量 / kg 或株数
- 数量规则：按当前作物周期分配的实测种植材料质量或有效数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_planting_material_records`
- 来源：

- 数量范围：暂定种植材料筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：120
  - 单位：每 1,000 kg 输出的种植材料 kg
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建植机械使用的燃料（`establishment_machinery_fuel`）

当前景边界跨越了苗床或种床准备、种植和建植作业的燃料时，记录这些燃料。

- 选定流：农业移动机械燃料
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 流属性/单位：能源载体或质量 / MJ 或 L
- 数量规则：按建植作业实测燃料使用量并分配到洋葱作物周期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_operation_records`
- 来源：

- 数量范围：暂定建植燃料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：每 1,000 kg 输出的 MJ
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 废物流

##### 基本流

###### 洋葱作物周期的耕地占用（`cultivated_land_occupation`）

记录声明洋葱作物周期内被占用的生产田块或保护地单元面积，并将作物占用与耐久基础设施区分开。

- 选定流：农业土地占用
- 流属性/单位：面积-时间 / ha·crop cycle
- 数量规则：声明的生产面积乘以所代表的作物周期时长
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_site_records`
- 来源：

- 数量范围：暂定土地占用筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：0.50
  - 单位：每 1,000 kg 输出的 ha·crop cycle
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 新增耕地发生的土地转化（`land_transformation`）

仅当所代表期间为建立洋葱生产区而改变土地用途时，记录土地转化。不得从普通年度土地占用推断土地转化。

- 选定流：转为农业生产的土地转化
- 流属性/单位：面积 / ha
- 数量规则：按当前作物周期输出分配的实测或有文件依据的转化面积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_site_records`
- 来源：

- 数量范围：条件性土地转化筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：每 1,000 kg 输出的 ha
  - 基准：归属于当前作物输出的当期土地用途变化
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：作物管理和投入施用（`crop_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_amendment_records`
- 来源：
- 数量范围：暂定肥料和改良剂筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：600
  - 单位：每 1,000 kg 输出的产品 kg
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付给洋葱作物的灌溉水（`irrigation_water`）

记录供应给洋葱田块或保护地单元、用于建植和作物生长的水。将计量交付水与降雨、循环水和水源取水量分开。

- 选定流：灌溉水供应
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：按计量或有记录的水量平衡计算作物周期内交付的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_withdrawal_records`
- 来源：`fao-crop-water-needs-onion`, `fao-56-crop-evapotranspiration`

- 数量范围：田间灌溉参考区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：3500
  - 上限：5500
  - 单位：每公顷洋葱作物周期的 m3
  - 基准：一个洋葱作物周期的一公顷；使用实测面积和产量换算至 PCR 参考流
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-crop-water-needs-onion`

###### 从声明的天然或市政水源取水（`water_resource_withdrawal`）

将水源特定的取水量与交付灌溉水产品投入分开记录；取水到田间交付之间的损失在有测量或计算时也应保留。

- 选定流：水资源取水
- 流属性/单位：体积 / m3
- 数量规则：按声明水源实测或计算的取水量，并分配到洋葱作物周期
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_and_withdrawal_records`
- 来源：

- 数量范围：暂定水源取水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6500
  - 单位：每公顷洋葱作物周期的 m3
  - 基准：一个洋葱作物周期的一公顷
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 施用于作物的植保配方（`crop_protection_products`）

记录施用于洋葱作物周期的除草剂、杀虫剂、杀菌剂或其他植保配方。保留配方、有效成分、施用日期和处理面积。

- 选定流：洋葱生产的植保配方＼
- 流属性/单位：配方产品质量 / kg 产品
- 数量规则：按产品和施用事件汇总配方实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`codex-cxs-348-onions-2022`

- 数量范围：暂定植保筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：每 1,000 kg 输出的配方产品 kg
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 泵送和田间作业使用的电力（`field_operation_electricity`）

记录灌溉泵送、保护地运行或其他田间设备跨越边界的电力。将购买电力与燃料分开。

- 选定流：洋葱生产电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：按计量电量或有记录的设备耗用量并分配到洋葱作物周期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_management_input_records`
- 来源：

- 数量范围：暂定田间电力筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：每 1,000 kg 输出的 kWh
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物管理机械使用的燃料（`crop_management_fuel`）

记录耕作、除草、喷施和其他作物管理作业使用的、跨越前景边界的燃料。

- 选定流：农业移动机械燃料
- 流属性/单位：能源载体或质量 / MJ 或 L
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：按作物管理作业实测燃料使用量并分配到洋葱作物周期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_management_input_records`
- 来源：

- 数量范围：暂定作物管理燃料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：每 1,000 kg 输出的 MJ
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 管理洋葱土壤的直接氧化亚氮排放（`direct_n2o_emission`）

根据合成和有机氮投入以及适用的残余物或土壤碳路径，计算土壤直接 N2O 排放。报告所用氮基准和 N2O 或 N2O-N 单位。

- 选定流：管理洋葱土壤向环境空气排放的氧化亚氮
- 流属性/单位：质量 / kg N2O-N 或 kg N2O
- 数量规则：将声明的 IPCC 方法应用于采集的施氮投入和适用的土壤或气候条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_emission_activity_records`
- 来源：`ipcc-2019-managed-soils-n2o`

- 数量范围：IPCC 直接 N2O-N 因子范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.002
  - 上限：0.019
  - 单位：每 kg N 投入的 kg N2O-N
  - 基准：每 kg 施用或其他建模的 N 投入
  - 基准类型：氮投入（`n_input`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ipcc-2019-managed-soils-n2o`

###### 施氮挥发产生的氨排放（`ammonia_emission`）

根据所声明的氮源和场址条件，记录或计算释放到环境空气的氨。不得使用通用氨排放行来隐藏肥料或有机肥依据。

- 选定流：洋葱作物氮投入向环境空气排放的氨
- 流属性/单位：质量 / kg NH3-N 或 kg NH3
- 数量规则：根据氮投入记录和有文件依据的挥发因子或实测排放进行计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_emission_activity_records`
- 来源：`ipcc-2019-managed-soils-n2o`

- 数量范围：暂定氨筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：每 kg N 投入的 kg NH3-N
  - 基准：每 kg 施用的 N 投入
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理土壤的硝酸盐淋失或径流（`nitrate_leaching`）

在发生淋失或径流且该路径属于范围时，记录向水体损失的硝酸盐氮或硝酸盐。保留氮源、受纳介质和计算依据。

- 选定流：洋葱作物土壤向水体排放的硝酸盐
- 流属性/单位：质量 / kg nitrate-N 或 kg nitrate
- 数量规则：根据采集的施氮投入和有文件依据的分配因子，计算与场址和气候相关的淋失或径流量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_emission_activity_records`
- 来源：`ipcc-2019-managed-soils-n2o`

- 数量范围：暂定硝酸盐损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：发生淋失或径流时每 kg N 投入的 kg nitrate-N
  - 基准：每 kg 施用的 N 投入
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理土壤的磷酸盐径流（`phosphate_runoff`）

当径流或其他受纳路径发生且有场址记录或有文件依据的方法支持时，记录向水体损失的磷酸盐磷或磷酸盐。

- 选定流：洋葱作物土壤向水体排放的磷酸盐
- 流属性/单位：质量 / kg phosphate-P 或 kg phosphate
- 数量规则：根据采集的养分投入、土壤测试信息和有文件依据的径流因子，计算场址特定的磷酸盐损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_emission_activity_records`
- 来源：

- 数量范围：暂定磷酸盐损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：发生径流时每 kg 施用 P 投入的 kg phosphate-P
  - 基准：发生径流时每 kg 施用 P 投入
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 尿素或石灰施用产生的二氧化碳（`urea_lime_co2_emission`）

仅当存在尿素或石灰投入且所选方法将施用直接排放归属于所代表的作物周期时，记录其二氧化碳排放。

- 选定流：尿素或石灰施用向环境空气排放的二氧化碳
- 流属性/单位：质量 / kg CO2
- 数量规则：根据采集的尿素或石灰施用量和所选方法因子计算；只有相关投入经核对确实不存在时才记录为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_emission_activity_records`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 田间作业产生的颗粒物（`field_particulate_emission`）

仅当所代表的作业和受纳介质有记录时，记录田间作业或土壤扰动产生的颗粒物排放。将粒径或物种细节保留在前景数据包中。

- 选定流：洋葱田间作业向环境空气排放的颗粒物
- 流属性/单位：质量 / kg particulate matter
- 数量规则：按实测或方法计算的颗粒物并归属到洋葱作物周期；保留粒径或物种细节
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_emission_activity_records`
- 来源：

- 数量范围：暂定颗粒物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 1,000 kg 输出的颗粒物 kg
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获和田间晾晒（`harvest_and_field_curing`）

#### 输入

##### 产品流

###### 收获设备使用的燃料（`harvest_machinery_fuel`）

记录起掘、切顶、铺放、收获和田间晾晒作业中使用的、跨越前景边界的燃料。

- 选定流：农业移动机械燃料
- 流属性/单位：能源载体或质量 / MJ 或 L
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：按收获和田间晾晒作业实测燃料使用量并分配到洋葱作物周期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_cure_records`
- 来源：

- 数量范围：暂定收获燃料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：每 1,000 kg 输出的 MJ
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获或田间晾晒使用的电力（`harvest_curing_electricity`）

记录动力收获、通风或田间晾晒设备使用的、跨越前景边界的电力。

- 选定流：洋葱收获或田间晾晒电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：按计量电量或有记录的设备耗用量并分配到收获和田间晾晒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_cure_records`
- 来源：

- 数量范围：暂定收获电力筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：每 1,000 kg 输出的 kWh
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 条件性调制前的收获鳞茎作物（`harvested_bulb_crop`）

记录田间晾晒后、纳入前景边界的清洗、分选、包装或储存之前的收获鳞茎。声明收获水分和作物去向。

- 选定流：调制前收获的新鲜鳞茎洋葱作物＼
- 流属性/单位：质量 / kg
- 数量规则：按声明水分和田间晾晒状态计量收获鳞茎质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_cure_records`
- 来源：`codex-cxs-348-onions-2022`

- 数量范围：暂定收获鳞茎筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1800
  - 单位：每 1,000 kg 输出的收获鳞茎 kg
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 田间次品和淘汰鳞茎（`field_culls_and_rejects`）

记录收获或田间晾晒期间被淘汰的鳞茎，并声明其留在田间、饲喂、堆肥、处理或其他离开前景边界的去向。

- 选定流：非销售鳞茎洋葱和田间次品＼
- 流属性/单位：质量 / kg
- 数量规则：按去向计量次品质量，并与收获鳞茎输出进行核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获鳞茎作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_cure_records`
- 来源：

- 数量范围：暂定田间次品筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：每 1,000 kg 收获鳞茎作物的次品 kg
  - 基准：收获鳞茎作物质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 跨越边界的洋葱顶部、外皮和其他作物残余物（`crop_residues_crossing_boundary`）

仅当洋葱顶部、外皮和其他残余物跨越声明边界或从田间移除时记录。声明残余物是保留、移除、焚烧、堆肥、饲喂还是处理。

- 选定流：跨越前景边界的洋葱作物残余物＼
- 流属性/单位：质量 / kg 湿残余物或干残余物
- 数量规则：按去向记录或有文件依据的残余物质量；将残余物处理与可销售鳞茎输出分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_cure_records`
- 来源：`ipcc-2019-managed-soils-n2o`

- 数量范围：暂定残余物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2500
  - 单位：每 1,000 kg 输出的湿或干残余物 kg
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱；必须声明水分状态
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：采后调制和储存（`postharvest_conditioning_and_storage`）

#### 输入

##### 产品流

###### 进入调制或储存的收获鳞茎作物（`conditioning_feedstock`）

纳入采后调制或储存时，将收获鳞茎作物及其质量、水分、等级和此前的田间晾晒状态带入本过程。

- 选定流：调制前收获的新鲜鳞茎洋葱作物＼
- 流属性/单位：质量 / kg
- 数量规则：将 `harvest_and_field_curing` 的实测输出带入纳入的调制或储存作业
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_and_storage_records`
- 来源：

###### 条件性清洗或洁净使用的供水（`conditioning_water`）

仅当清洗或洁净作业纳入声明的农场交付边界时，记录其用水。

- 选定流：洋葱调制用过程水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量规则：按计量或有记录的清洗用水量，并分配到处理的洋葱质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_storage_records`
- 来源：`codex-cxc-53-hygiene-fresh-fruit-vegetables-2003`

- 数量范围：暂定调制用水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：每 1,000 kg 处理输出的 m3
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分选、通风或储存使用的电力（`conditioning_storage_electricity`）

当设备位于声明前景边界内时，记录分选、通风、强制晾晒或储存用电。

- 选定流：洋葱调制或储存电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：按计量电量或有记录的设备耗用量，并按处理质量和储存时长分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_storage_records`
- 来源：

- 数量范围：暂定调制电力筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：每 1,000 kg 处理输出的 kWh
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 声明边界内使用的包装材料（`packaging_materials`）

仅当包装纳入农场交付边界时记录包装材料。保留材料类型、质量、重复使用状态以及废弃包装的去向。

- 选定流：洋葱发运用包装材料＼
- 流属性/单位：质量 / kg 包装材料
- 数量规则：按包装成品可销售洋葱输出分配的实测包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-cxs-348-onions-2022`

- 数量范围：暂定包装筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：每 1,000 kg 输出的包装 kg
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交付的可销售新鲜鳞茎洋葱（`farm_gate_marketable_onion_bulbs`）

记录声明边界内所有调制或储存之后的最终可销售洋葱输出。声明用于识别参考产品的质量、尺寸、等级、水分和储存状态。

- 选定流：农场交付的可销售新鲜鳞茎洋葱＼
- 流属性/单位：质量 / kg
- 数量规则：纳入收获、晾晒、调制和储存步骤后的 1,000 kg 参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`codex-cxs-348-onions-2022`

##### 废物流

###### 调制次品和储存损失（`conditioning_rejects_and_losses`）

记录分选、包装或储存期间被淘汰的鳞茎并声明每一项去向。将可销售输出、次品和储存损失纳入质量平衡核对。

- 选定流：调制或储存产生的非销售鳞茎洋葱＼
- 流属性/单位：质量 / kg
- 数量规则：按作业和去向计量次品和损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_storage_records`
- 来源：

- 数量范围：暂定调制损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：每 1,000 kg 处理投入的次品或损失 kg
  - 基准：处理的洋葱质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 条件性清洗或洁净产生的废水（`conditioning_wastewater`）

记录纳入的清洗或洁净产生的废水，并声明处理、排放或回用。没有清洗或洁净作业时不得推断废水。

- 选定流：洋葱调制废水＼
- 流属性/单位：体积 / m3
- 数量规则：根据纳入的清洗或洁净计量或计算废水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售农场交付鳞茎洋葱
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_and_storage_records`
- 来源：`codex-cxc-53-hygiene-fresh-fruit-vegetables-2003`

- 数量范围：暂定调制废水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：每 1,000 kg 处理输出的 m3
  - 基准：每 1,000 kg 可销售农场交付鳞茎洋葱
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

### 分配规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 共享田间和收获作业 | 有不同洋葱品种、产品或去向的独立记录时进行过程细分。无法细分时，在分离点按可销售鳞茎和共产品的实测质量分配共享负荷。 | `iso-14044-2006-allocation` |
| `allocation_rule_2` | 次品和作物残余物 | 根据有记录的去向，将次品和残余物作为共产品或废物处理。除非明确记录受影响产品、被替代功能和证据，否则不得施加抵扣或替代信用。 | `iso-14044-2006-allocation` |
| `allocation_rule_3` | 调制、包装和储存 | 按处理输出质量分配共享的调制、包装和储存投入；当能源依赖时间时保留储存时长。 | `iso-14044-2006-allocation` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `field_preparation_and_establishment` | planting material | supplier lot record and planting log | material form; cultivar; lot; purchased or retained; mass or viable count; planting date | reconcile supplier documents with field or protected-unit planting log | kg or count | each lot and planting event | complete crop cycle | each declared field or protected unit | sum by crop cycle and convert to reference-flow basis | lot document; planting log; count or mass check |
| `cp_establishment_operation_records` | `field_preparation_and_establishment` | establishment fuel | fuel log, invoice, meter or contractor record | operation; equipment; fuel type; quantity; date; treated area | collect primary fuel record and allocate by operation | L, kg or MJ | each operation or weekly | complete crop cycle | each declared field or protected unit | sum by operation and allocate to onion output | fuel invoice or meter; equipment record |
| `cp_land_and_site_records` | `field_preparation_and_establishment` | land occupation and transformation | field register, GIS or land-use record | field id; area; land-use history; transformation date; crop-cycle dates | verify area against field register or geospatial record | ha and crop-cycle dates | once per crop cycle and on land-use change | current crop cycle and disclosed prior history | each declared field or protected unit | calculate area-time and flag only current-period transformation | field map; lease or land-use record; dated change evidence |
| `cp_fertilizer_amendment_records` | `crop_management` | fertilizer and soil amendment | invoice, delivery ticket, label, nutrient plan and application log | product; formulation; mass; N/P/K content; application date; field; operator | reconcile purchase and application records with nutrient plan | kg product and kg nutrient | each delivery and application event | complete crop cycle | each declared field or protected unit | sum product mass and nutrient roles without double counting compound products | invoice; label or specification; application log |
| `cp_irrigation_and_withdrawal_records` | `crop_management` | irrigation delivery and source withdrawal | meter, pump log, water balance and source record | source; meter start/end; delivered volume; pumping energy; rainfall; field; date | meter readings or documented ETc/water balance with source separation | m3 | each event or weekly | complete crop cycle | each declared field and water source | sum delivery and withdrawal separately; reconcile losses | meter calibration; pump log; water permit or source record |
| `cp_crop_protection_records` | `crop_management` | crop-protection products | product label, invoice and application log | formulation; active substance; mass or volume; date; field; treated area | reconcile purchase and application records | kg or L product | each application event | complete crop cycle | each declared field or protected unit | sum by named product and application event | label; invoice; application log |
| `cp_crop_management_input_records` | `crop_management` | field fuel and electricity | fuel log, invoice, meter or equipment record | operation; fuel or electricity; quantity; date; field; equipment | collect meter or primary supplier record and allocate by operation | L, kg, MJ or kWh | each operation or weekly | complete crop cycle | each declared field or protected unit | sum by energy carrier and crop cycle | meter or invoice; equipment record |
| `cp_crop_emission_activity_records` | `crop_management` | soil emissions and loss pathways | nutrient, soil, climate, water and residue records | N source and amount; soil and climate class; irrigation; residue; receiving medium; factor choice | calculate from reconciled activity data or retain measured emission record | kg N input; kg N2O-N, NH3-N, nitrate-N or phosphate-P | each application and crop-cycle reconciliation | complete crop cycle | each declared field or protected unit | calculate each pathway once and convert N2O-N to N2O only at reporting stage | nutrient reconciliation; soil or climate record; method worksheet |
| `cp_harvest_and_cure_records` | `harvest_and_field_curing` | harvest energy, harvested bulbs, culls and residues | harvest log, weighbridge, field record and destination record | date; field; harvested mass; moisture; grade; cull mass; residue mass; destination; energy | weigh or document outputs and reconcile with operation records | kg, mass-% moisture, L, kg or MJ | each harvest lot and operation | complete crop cycle | each declared field and harvest lot | sum by lot and reconcile harvested bulbs, culls and residues | scale or weighbridge; moisture test; destination record |
| `cp_conditioning_and_storage_records` | `postharvest_conditioning_and_storage` | conditioning, packing, storage and wastewater | facility log, meter, packing record, storage log and waste record | input and output mass; water; electricity; packaging; duration; temperature; rejects; wastewater; destination | collect facility records and lot-level mass balance | kg, m3, kWh, kg packaging and storage time | each lot and storage campaign | included conditioning or storage period | each included facility and lot | allocate by handled mass and storage duration; reconcile final output and losses | scale; meter; packing specification; storage log; treatment record |
| `cp_packaging_records` | `postharvest_conditioning_and_storage` | packaging materials | packaging invoice, specification and packing log | material; unit mass; quantity; reuse; lot; destination | reconcile packaging specification with packed output | kg material and package count | each packing campaign | included packing period | each included facility | sum material mass and allocate by packed output | supplier specification; packing log; reuse record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | reference normalization | 将每个采集或计算值归一化至 1,000 kg 可销售农场交付洋葱输出：数值 × 1,000 / 声明的可销售输出质量。 | collected output mass; row amount | PCR-basis amount |  |
| `calculation_rule_2` | fertilizer and soil-amendment nutrients | 对每种施用产品，养分量 = 产品质量 × 有文件依据的养分比例。分别汇总每种养分角色，并将产品质量作为独立记录保留。 | product mass; N/P/K fraction; application event | kg product, kg N, kg P2O5 and/or kg K2O |  |
| `calculation_rule_3` | irrigation and source withdrawal | 有计量时使用计量总量。需要水量平衡时，根据 ETc 和有效降雨或土壤水分平衡估算交付灌溉量，并将水源取水量与交付量分开。 | ET0; onion Kc; rainfall; soil-water balance; meter readings | m3 delivered irrigation and m3 source withdrawal | `fao-56-crop-evapotranspiration`, `fao-crop-water-needs-onion` |
| `calculation_rule_4` | direct and indirect nitrogen emissions | 将所选 IPCC 管理土壤方法应用于每种有文件依据的氮源和路径。先报告 N2O-N；只有报告单位需要时才以 44/28 换算为 N2O。 | synthetic and organic N; residue N; climate and soil conditions; volatilization and leaching activity | kg N2O-N, kg N2O, NH3-N and nitrate-N pathway amounts | `ipcc-2019-managed-soils-n2o` |
| `calculation_rule_5` | harvested output and co-products | 按批次核对收获鳞茎、可销售输出、次品和残余物。在第一次实测分离点分配共享负荷，并保留每个非销售流的去向。 | lot masses; moisture; grade; destination | marketable output, cull and residue amounts | `iso-14044-2006-allocation` |
| `calculation_rule_6` | optional conditioning and storage | 对每个纳入的批次，最终可销售输出 = 调制投入 − 次品 − 储存损失；按处理质量分配水、包装、能源，并保留储存时长。 | conditioning input; rejects; losses; handled mass; storage duration | final reference output and loss amounts |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_requirement_1` | identity and product state | 数据集必须识别 *Allium cepa* 鳞茎形态、品种或商业类型、颜色、地理位置、作物周期、成熟度、水分、等级、尺寸和纳入的调制状态。 | Codex CXS 348-2022; product description; lot records |
| `quality_requirement_2` | input completeness | 将种植材料、养分产品、植保产品、灌溉、水源取水、燃料和电力与田块或设施记录核对，并说明任何缺失路径。 | supplier records; meters; application logs; mass balance |
| `quality_requirement_3` | temporal and geographic representativeness | 声明作物年份或生产批次、田块或设施位置、生产系统和代表的时间段。 | field register; facility register; dated records |
| `quality_requirement_4` | emissions and nutrient calculations | 对每个计算排放，保留氮源依据、土壤或气候条件、因子选择、水损失路径和换算单位。 | IPCC 2019 Refinement method worksheet; calculation record |
| `quality_requirement_5` | output and co-product reconciliation | 按批次核对可销售鳞茎、次品、残余物、调制淘汰物和储存损失，并记录跨越边界的每个流的去向。 | weighbridge or scale; moisture/grade record; destination record |
| `quality_requirement_6` | disclosure and uncertainty | 将实测、计算和暂定值分开披露。在其约束发布关键结果时，活跃审查前应以场址或路径证据替换推理筛选区间。 | collection protocols; calculation worksheets; review record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考流 | 确认参考数量为 1,000 kg，并且已填写产品身份、成熟度、水分、等级、尺寸、地理位置、作物周期和纳入的调制限定信息。 | `codex-cxs-348-onions-2022` |
| `validation_rule_2` | 过程图和清单 | 确认每个 required 过程均有清单部分，并且每张 flow card 都有方向、流类型、数量规则、数值来源模式、适用范围、基准类型、证据类型，以及在需要时的采集协议。 |  |
| `validation_rule_3` | 养分和排放完整性 | 对每种施用的养分产品，确认有文件依据的养分含量；当直接 N2O、挥发和淋失/径流路径发生时，确认这些路径的计算不重复。 | `ipcc-2019-managed-soils-n2o` |
| `validation_rule_4` | 灌溉和水源取水 | 确认交付灌溉量和水源取水量分开，水源和田块已识别，任何 ETc 或水量平衡估算都保留假设和单位。 | `fao-56-crop-evapotranspiration`, `fao-crop-water-needs-onion` |
| `validation_rule_5` | 输出质量平衡 | 确认按批次核对收获鳞茎、可销售输出、次品、残余物、调制淘汰物、储存损失和声明的去向。调查无法解释的负平衡或超额平衡。 | `iso-14044-2006-allocation` |
| `validation_rule_6` | 质量和卫生披露 | 当农场交付状态描述为鲜食产品时，检查是否声明完整、坚实、无腐败、清洁、成熟且足够干燥的状态，以及适用的卫生、农残和污染物披露。 | `codex-cxs-348-onions-2022`, `codex-cxc-53-hygiene-fresh-fruit-vegetables-2003` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景作物生产数据集，可作为 `secondary_dataset` 发布；只有在来源和目标技术明确时，聚合的农场交付洋葱数据集才可作为 `background_dataset` |
| downstream_use | 按声明农场交付参考流构建洋葱产品系统过程和生命周期模型 |
| allowed_use | 对声明洋葱形态、地理位置、作物周期、生产系统和农场交付状态进行比较或筛选 LCA；只有在代表性和分配基准仍然有效时才可跨场址聚合 |
| excluded_use | 青洋葱或葱头类小洋葱建模；工业加工产品；零售或消费阶段声明；没有有文件依据的调整时外推到其他气候、灌溉制度、品种或等级 |
| required_metadata | PCR id 和版本；产品和作物形态；品种或商业类型；颜色；地理位置；田块或设施；作物周期日期；生产系统；参考数量；水分、等级和尺寸；纳入的调制/储存；背景投入的来源和供应者元数据 |
| required_quality_disclosure | 实测与计算值；场址和时间覆盖；投入完整性；水和养分基准；排放方法和因子；输出及共产品质量平衡；残余物和次品去向；不确定性或筛选区间状态 |
| update_trigger | 新作物年份或生产系统；灌溉、养分、植保或能源实践变化；市场状态或调制边界变化；排放方法修订；等级、水分或分配基准发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-348-onions-2022` | standard | FAO/WHO Codex Alimentarius, Standard for Onions and Shallots, CXS 348-2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pt/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B348-2022%252FCXS_348e.pdf | 产品定义、成熟度、质量、尺寸、包装和市场状态限定信息 |
| `codex-cxc-53-hygiene-fresh-fruit-vegetables-2003` | standard | FAO/WHO Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables, CXC 53-2003, https://www.fao.org/fao-who-codexalimentarius/ | 纳入清洗或处理的卫生要求和数据集披露 |
| `fao-56-crop-evapotranspiration` | official_guidance | FAO Irrigation and Drainage Paper 56, Chapter 6, Crop evapotranspiration, https://www.fao.org/4/X0490E/x0490e0b.htm | ETc = Kc × ETo 方法和洋葱作物系数解释 |
| `fao-crop-water-needs-onion` | official_guidance | FAO Crop Water Needs manual, onion water-needs tables, https://www.fao.org/4/S2022E/s2022e07.htm | 田间洋葱用水筛选区间和灌溉数据方法 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement to the 2006 Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤 N2O、挥发、淋失/径流、作物残余物以及尿素/石灰计算方法 |
| `iso-14044-2006-allocation` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | 过程细分、分配、共产品处理和负荷核对 |
