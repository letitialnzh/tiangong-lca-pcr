---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mangoes-guavas-and-mangosteens
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 芒果、番石榴和山竹

## 1. 范围与适用性

本 PCR 适用于芒果、番石榴和山竹从果园或同等多年生田间生产，经栽培和采收至声明的农场交付点的前景生产。参考产品为未加工的整果。农场边界定义为采收和农场内汇集之后、生产农场的第一次声明交付；不包括清洗、打蜡、分级、冷却、包装、零售、消费者使用、加工或边界之后的运输。

数据包应识别水果物种以及品种、果园或田间生产系统、地理位置、作物年度、果园树龄、雨养或灌溉路线、农场交付点、商品等级以及次品和残余物去向。只要分别披露投入和管理措施，常规、有机、混合及其他生产路线均可表示。

本 PCR 不包括种植材料生产、外购投入品上游制造、土地转化、采后处理、加工水果产品以及零售或消费者活动，除非这些活动在本 PCR 之外单独建模。只有在按声明的生产寿命进行年度化并披露年度化依据时，才可纳入建园或补植投入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mangoes-guavas-and-mangosteens` |
| classification_refs | CPC 3.0 `01316` — Mangoes, guavas and mangosteens |
| covered_products | 在声明农场交付点交付的鲜食整果芒果、鲜食整果番石榴和鲜食整果山竹 |
| excluded_products | 加工、干燥、冷冻、榨汁、制浆、罐藏或其他转化水果；种植材料；零售包装水果；边界后运输和使用 |
| representative_product | 在农场交付点交付的、具有声明物种和等级的鲜食整果 |
| production_route | 经过栽培、采收和农场内汇集的多年生果园或同等田间生产 |
| market_state | 清洗、打蜡、分级、冷却或包装之前的鲜食、未加工、整果 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 离开声明农场交付点的鲜食整果芒果、番石榴或山竹 |
| How much | 1,000 kg |
| How well | 声明的物种、品种、商品等级、成熟度或采收规格，以及在农场交付点接收时的状态 |
| How long or cycle | 一个声明的作物年度或采收周期；纳入多年生建园和补植时，按披露的生产寿命年度化 |
| reference_flow_link | 语义参考产品 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 农场交付点的鲜食整果芒果、番石榴或山竹 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种；品种；地理位置；果园或田间路线；雨养或灌溉；作物年度；果园树龄；采收和商品等级；农场交付点；建园年度化依据；次品和残余物去向；直接排放方法；共享产出的分配依据 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品和合格水果输出 | 质量 | kg | 将数据集归一化至声明农场交付点的 1,000 kg 合格鲜果。保留归一化前的实测采收量和等级依据。 |
| `measurement_irrigation_volume` | 灌溉水 | 体积 | m3 | 将计量或计算的果园施用水与水源取水分开记录。除非水量平衡方法明确纳入，不得将降雨计作灌溉水。 |
| `measurement_nutrient_basis` | 肥料和土壤改良剂总量 | 产品质量或声明养分 | kg product；kg N；kg P2O5；kg K2O | 记录实际产品名称或配方以及数量使用的养分依据。没有声明的产品分析时，不得从养分量反推产品量。 |
| `measurement_area_time` | 果园土地占用 | 面积-时间 | ha*a | 记录占用生产面积和作物年度持续时间。多年生建园只按声明的生产寿命年度化，并避免对同一面积重复计算。 |
| `measurement_energy_fuel` | 电力和移动机械燃料 | 能量或燃料质量 | kWh；MJ；或 kg | 保留原始记录单位，并在汇总燃料或能量投入时保持转换一致。 |
| `measurement_emission_substance` | 直接基本流排放 | 指定物质质量 | kg substance | 识别排放物质、接收介质、计算或测量方法，以及该数值是实测、计算还是估算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 作物年度开始时土地和果园处于声明的生产状态；年度作业从栽培记录开始，只有在有记录时才加入按比例计算的建园或补植。 |
| starting_condition_role | 鲜果作物年度数据集的前景边界锚点 |
| product_classification_scope | CPC 3.0 `01316`，限于农场交付点的鲜食整果芒果、番石榴和山竹 |
| recursive_input_rule | 同类别水果不作为递归投入建模。只有外部购买的种植材料或有披露的建园活动才记录种植材料；农场系统内部使用的水果由声明的起始条件覆盖。 |
| upstream_dataset_requirement | 使用时，为外购种植材料、肥料或土壤改良剂、作物保护产品、供水、电力、燃料和其他外购投入连接上游数据集。前景记录应保留数量、依据、地理位置以及供应商或来源证据。 |
| disclosure | 声明边界点、田块或果园面积、作物年度、物种和品种、果园树龄、路线、灌溉水源、实际肥料或土壤改良剂产品及养分依据、作物保护、燃料和电力、采收产量、次品、残余物、分配以及直接排放方法。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_condition` | 作物年度前景系统 | 从声明的果园生产状态开始；只有在记录了生产寿命年度化依据时，才纳入按比例计算的建园或补植。 | `iso-14044-2006`; `mass-balance-identity` |
| `boundary_farm_gate` | 农场交付点产品输出 | 在采收和农场内汇集之后的第一次声明农场交付点结束；排除该点之后的所有活动。 | `iso-14044-2006`; `codex-fresh-tropical-fruit-standards` |
| `boundary_fresh_unprocessed_state` | 产品类别 | 产品保持鲜食、整果和未加工状态。清洗、打蜡、分级、冷却、包装和加工均在本 PCR 之外。 | `codex-fresh-tropical-fruit-standards` |
| `boundary_upstream_inputs` | 外购投入 | 将外购投入供应表示为上游连接，仅采集建立连接所需的前景数量、依据和身份。 | `iso-14044-2006` |
| `boundary_recursive_input` | 同类别内部投入 | 不递归追踪同类别水果作为投入；披露起始条件和任何外部种植材料投入。 | `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment` | 果园建园和补植 | conditional | 当建园、替换或补植记录分配到声明作物年度时纳入。 | 多年生生产建园 | 按披露的生产寿命，每 1,000 kg 参考产品年度化 |
| `orchard_cultivation` | 果园栽培和作物管理 | required | 始终纳入声明作物年度的范围内栽培。 | 前景作物生产 | 每 1,000 kg 合格农场交付点水果和每个作物年度 |
| `harvest_and_farm_gate_aggregation` | 采收和农场交付点汇集 | required | 始终纳入采收以及达到声明交付点所需的农场内汇集。 | 采收和交付点准备 | 每 1,000 kg 合格农场交付点水果 |

### 过程：果园建园和补植（`orchard_establishment`）

#### 输入

##### 产品流

###### 外部种植材料（`planting_material_input`）

外部苗木、嫁接苗或其他种植材料在其用于建园或替换果园植株时跨越边界。记录实际材料身份和数量，不得从水果产量反推。

- 选定流：外部芒果、番石榴或山竹种植材料＼
- 流属性/单位：质量或件数 / kg 或 item
- 数量规则：按种植面积记录的实际购买或农场外生产种植材料，按声明生产寿命年度化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-good-agricultural-practices`

- 数量范围：暂定建园材料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：每 1,000 kg 合格水果的 kg 种植材料
  - 基准：按年度化参考产品计的种植材料质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`orchard_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：暂定建园养分筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：每 1,000 kg 合格水果的 kg 声明养分依据
  - 基准：年度化建园养分投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建园灌溉水（`establishment_irrigation_water`）

当建园灌溉跨越前景边界时，记录用于建立果园植株的施用水。施用水应与为其供水的水源取水事件分开记录。

- 选定流：用于果园建园的灌溉水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按声明生产寿命年度化的计量或计算建园灌溉水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`

- 数量范围：暂定建园灌溉筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：每 1,000 kg 合格水果的 m3
  - 基准：年度化建园灌溉水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建园移动机械燃料（`establishment_mobile_fuel`）

当建园或补植活动纳入范围时，记录拖拉机、种植设备或其他移动机械使用的燃料。

- 选定流：移动机械燃料供应
- 流属性/单位：能量或燃料质量 / MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：按声明生产寿命年度化的建园作业实际燃料或能量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_fuel_records`
- 来源：`fao-good-agricultural-practices`

- 数量范围：暂定建园燃料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：800
  - 单位：每 1,000 kg 合格水果的 MJ
  - 基准：年度化移动机械燃料能量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 建园果园土地占用（`establishment_land_occupation`）

只有当建园或补植属于声明的年度化边界时，才记录其占用的果园面积和时间；同一作物年度面积不得重复主张占用。

- 选定流：果园建园农业土地占用
- 流属性/单位：面积-时间 / ha*a
- 数量规则：种植面积乘以建园时间，并按声明生产寿命年度化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_area_and_soil_records`
- 来源：`mass-balance-identity`

- 数量范围：暂定建园土地占用筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：每 1,000 kg 合格水果的 ha*a
  - 基准：年度化种植面积-时间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：果园栽培和作物管理（`orchard_cultivation`）

#### 输入

##### 产品流

###### 果园灌溉水（`cultivation_irrigation_water`）

记录作物年度内向果园施用的灌溉水或施肥灌溉水，排除降雨，并与水源取水分开记录。

- 选定流：用于果园栽培的灌溉水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按田块、水源和作物年度计量或计算的灌溉施用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`

- 数量范围：暂定栽培灌溉筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,000
  - 单位：每 1,000 kg 合格水果的 m3
  - 基准：作物年度果园灌溉施用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`orchard_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：暂定栽培养分筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：每 1,000 kg 合格水果的 kg 声明养分依据
  - 基准：作物年度肥料和土壤改良剂养分依据
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物保护产品投入（`cultivation_crop_protection_input`）

当作物保护产品或有效成分依据跨越前景边界时，记录实际产品或有效成分依据。即使没有适用的 Flow Set 组，也必须保留产品身份、施用量、目标和施用事件。

- 选定流：作物保护产品投入＼
- 流属性/单位：产品或有效成分质量 / kg product 或 kg active ingredient
- 数量规则：按施用事件和作物年度记录实际产品或有效成分量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-good-agricultural-practices`

- 数量范围：暂定作物保护投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 1,000 kg 合格水果的 kg 产品
  - 基准：作物年度作物保护产品投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 栽培电力（`cultivation_electricity_input`）

记录作物年度内用于灌溉泵、施肥灌溉、监测或其他范围内果园作业的外购电力。

- 选定流：果园栽培电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按声明果园和作物年度分配的计量电力或供应商账单电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_fuel_records`
- 来源：`fao-good-agricultural-practices`

- 数量范围：暂定栽培电力筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：每 1,000 kg 合格水果的 kWh
  - 基准：作物年度果园电力使用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 栽培移动机械燃料（`cultivation_mobile_fuel`）

记录拖拉机、喷雾机、割草机和其他移动机械用于果园作业的燃料。

- 选定流：移动机械燃料供应
- 流属性/单位：能量或燃料质量 / MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：按作业和作物年度记录实际燃料或能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_fuel_records`
- 来源：`fao-good-agricultural-practices`

- 数量范围：暂定栽培燃料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,500
  - 单位：每 1,000 kg 合格水果的 MJ
  - 基准：作物年度移动机械燃料能量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 果园土地占用（`cultivation_land_occupation`）

记录声明作物年度占用的果园面积-时间。土地占用不等于土地转化；任何土地转化研究都应单独披露和建模。

- 选定流：果园栽培农业土地占用
- 流属性/单位：面积-时间 / ha*a
- 数量规则：果园面积乘以声明作物年度持续时间，并分配至合格水果输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_area_and_soil_records`
- 来源：`mass-balance-identity`

- 数量范围：暂定栽培土地占用筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1
  - 单位：每 1,000 kg 合格水果的 ha*a
  - 基准：作物年度果园占用面积-时间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 果园水源取水（`cultivation_water_withdrawal`）

记录为供应果园灌溉而从自然或管理水源取出的水量。应区分再用水或供水与实际取水事件。

- 选定流：果园灌溉水源取水
- 流属性/单位：体积 / m3
- 数量规则：按水源和作物年度计量或计算的取水量，与施用灌溉水以及有记录的损失或蓄水对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`

- 数量范围：暂定水源取水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,500
  - 单位：每 1,000 kg 合格水果的 m3
  - 基准：作物年度水源取水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 输出

##### 产品流

##### 废物流

###### 移出果园的残余物（`cultivation_residue_removed`）

仅当修剪物或其他果园残余物离开前景系统或转移到单独建模的去向时记录。留在田间的残余物应作为管理措施披露，不得重复计作废物输出。

- 选定流：移出田间的果园修剪物或作物残余物＼
- 流属性/单位：质量 / 按记录的 kg 湿基或干基物质
- 数量规则：记录从声明果园移出的质量，注明含水率依据和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission_and_loss_records`
- 来源：`fao-good-agricultural-practices`

- 数量范围：暂定移出残余物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：每 1,000 kg 合格水果的 kg 湿基或干基物质
  - 基准：声明从果园移出的残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 基本流

###### 果园管理氨排放至空气（`cultivation_ammonia_emission`）

当声明的养分投入和排放方法支持该途径时，记录或计算排放至环境空气的氨排放。必须说明接收介质和物质依据。

- 选定流：氨排放至空气＼
- 流属性/单位：氨质量 / kg NH3
- 数量规则：根据声明养分施用和管理条件实测或按方法计算的氨损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emission_and_loss_records`
- 来源：`ipcc-2019-managed-soils`

- 数量范围：暂定氨排放筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：每 1,000 kg 合格水果的 kg NH3
  - 基准：作物年度直接氨排放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管理土壤氧化亚氮排放至空气（`cultivation_nitrous_oxide_emission`）

使用声明的养分投入、土壤条件、气候和方法等级，记录或计算管理土壤的直接及适用时的间接氧化亚氮排放。

- 选定流：氧化亚氮排放至空气＼
- 流属性/单位：氧化亚氮质量 / kg N2O
- 数量规则：按方法计算或实测氧化亚氮排放，披露排放因子等级、氮依据和时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emission_and_loss_records`
- 来源：`ipcc-2019-managed-soils`

- 数量范围：暂定氧化亚氮筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 1,000 kg 合格水果的 kg N2O
  - 基准：作物年度管理土壤氧化亚氮排放
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 硝酸盐损失至水（`cultivation_nitrate_water_loss`）

仅当土壤、排水、接收介质和损失方法支持该途径时，记录或计算硝酸盐损失至水；没有声明方法时，不得将肥料施用量直接换算为硝酸盐损失。

- 选定流：硝酸盐排放至水＼
- 流属性/单位：硝酸盐质量 / kg nitrate
- 数量规则：按方法计算或实测硝酸盐损失，披露土壤、排水和接收水体依据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emission_and_loss_records`
- 来源：`ipcc-2019-managed-soils`

- 数量范围：暂定硝酸盐损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：每 1,000 kg 合格水果的 kg nitrate
  - 基准：作物年度硝酸盐损失至水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 磷酸盐损失至水（`cultivation_phosphate_water_loss`）

当侵蚀、径流、排水和接收介质证据支持该途径时，记录或计算磷酸盐损失至水。

- 选定流：磷酸盐排放至水＼
- 流属性/单位：磷酸盐质量 / kg phosphate
- 数量规则：按方法计算或实测磷酸盐损失，披露土壤、侵蚀、径流和接收水体依据
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emission_and_loss_records`
- 来源：`ipcc-2019-managed-soils`

- 数量范围：暂定磷酸盐损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：每 1,000 kg 合格水果的 kg phosphate
  - 基准：作物年度磷酸盐损失至水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：采收和农场交付点汇集（`harvest_and_farm_gate_aggregation`）

#### 输入

##### 产品流

###### 采收移动机械燃料（`harvest_mobile_fuel`）

记录采收机械以及到达声明农场交付点所需农场内移动使用的燃料。

- 选定流：移动机械燃料供应
- 流属性/单位：能量或燃料质量 / MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：按作物年度记录实际采收和农场内汇集燃料或能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_fuel_records`
- 来源：`fao-good-agricultural-practices`

- 数量范围：暂定采收燃料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：每 1,000 kg 合格水果的 MJ
  - 基准：采收和农场内汇集燃料能量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 采收和农场交付点电力（`harvest_electricity_input`）

记录称重、仅用于建立声明交付点的分选或其他农场内汇集设备的电力。不得纳入包装场或冷却能耗。

- 选定流：采收和农场交付点汇集电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按计量电量或有记录的分配方法取得采收和农场交付点汇集电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_fuel_records`
- 来源：`fao-good-agricultural-practices`

- 数量范围：暂定农场交付点电力筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：每 1,000 kg 合格水果的 kWh
  - 基准：采收和农场交付点汇集电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交付点合格鲜果（`marketable_fresh_fruit`）

这是作为 PCR 参考产品的合格鲜食整果输出。归一化至 1,000 kg 前，记录原始质量、物种、品种、成熟度或采收规格、等级和交付点状态。

- 选定流：农场交付点鲜食整果芒果、番石榴或山竹＼
- 流属性/单位：质量 / kg
- 数量规则：将合格商品水果质量归一化至 1,000 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_records`
- 来源：`mass-balance-identity`; `codex-fresh-tropical-fruit-standards`

- 数量范围：参考输出 QA 区间
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1,000
  - 上限：1,000
  - 单位：每参考流的 kg 合格水果
  - 基准：声明 PCR 参考数量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 采收次品、拒收品和非商品水果（`harvest_culls_and_rejects`）

记录在前景系统内采收或处理但没有进入合格农场交付点产品输出的水果。说明其留在田间、堆肥、饲喂、转售给其他用途或其他处理去向。

- 选定流：采收次品、拒收品和非商品水果＼
- 流属性/单位：质量 / kg 湿果
- 数量规则：按去向实测或计算次品和拒收品质量，并与采收量和合格输出对账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_records`
- 来源：`mass-balance-identity`

- 数量范围：暂定次品和拒收品筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：每 1,000 kg 合格水果的 kg 湿果
  - 基准：采收但未被接受的水果
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 采收作业燃烧二氧化碳排放（`harvest_carbon_dioxide_emission`）

当燃料记录和排放方法支持该途径时，记录或计算采收和农场内汇集燃料导致的空气二氧化碳排放。必须披露生物源和化石源碳的处理方式。

- 选定流：二氧化碳排放至空气＼
- 流属性/单位：二氧化碳质量 / kg CO2
- 数量规则：使用声明的燃料身份、数量和因子方法，根据燃料或实测数据计算二氧化碳排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格农场交付点水果
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emission_and_loss_records`
- 来源：`ipcc-2006-mobile-combustion`

- 数量范围：暂定采收二氧化碳筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：每 1,000 kg 合格水果的 kg CO2
  - 基准：采收作业燃料相关二氧化碳
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_same_category_products` | 混合芒果、番石榴或山竹生产以及共享果园作业 | 除非有更具代表性的、已记录的物理关系，否则按合格鲜果实测质量在芒果、番石榴和山竹之间分配共享作物年度投入和排放。披露分配分母和每种产品数量。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_shared_grade_outputs` | 共享同一采收系统的等级或去向 | 相关时，将离开边界的所有鲜果作为声明等级或去向分别保留。如果非鲜食去向或其他产品类别共享系统，按实测质量分配共享前景清单，并披露去向拆分。 | `iso-14044-2006` |
| `allocation_residues_and_culls` | 残余物、次品和拒收品 | 留在田间或在声明系统内丢弃的残余物或次品不分配负荷，除非其作为单独计价的共产品离开系统。若作为共产品销售或转移，记录质量和去向，并一致使用声明的分配依据。 | `mass-balance-identity` |

由于参考产品是在农场交付点按质量计量的鲜果，主报告使用质量分配。只有在形成有记录的敏感性情景时才可使用经济分配；没有合理说明时，不得用其替代主质量分配结果。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `orchard_establishment` | 种植材料和建园作业 | 苗圃发票、种植图、补植日志 | 物种；品种；植株数；种植面积；材料质量或件数；种植日期；替换面积；生产寿命假设 | 将发票和田块图与声明果园区块对账 | kg 或 item；ha；date | 每次建园或补植事件 | 支持该作物年度的生产寿命记录 | 果园区块 | 将合格建园记录按声明生产寿命年度化并归一化到合格水果 | 发票或苗圃记录以及田块图对账 |
| `cp_irrigation_records` | `orchard_establishment`; `orchard_cultivation` | 灌溉施用和水源取水 | 水表日志、泵记录、水费单、灌溉计划、水源登记 | 施用水；取水量；水源；田块；日期；再用；蓄水；水表状态 | 通过水表或水量平衡计算并与水源和田块对账 | m3 | 每次灌溉或每月 | 完整作物年度以及适用的建园期 | 田块或果园区块 | 按水源和活动汇总；将施用水与取水、再用、蓄水和损失对账 | 水表校准、水源许可或账单及对账检查 |
| `cp_nutrient_records` | `orchard_establishment`; `orchard_cultivation` | 肥料和土壤改良剂总量 | 采购记录、养分计划、土壤检测、施用日志 | 实际产品；配方；养分分析；数量；日期；方法；田块；有机或矿物依据 | 将采购和施用记录与声明作物年度对账 | kg product；kg N；kg P2O5；kg K2O | 每次施用 | 完整作物年度以及适用的建园期 | 田块或果园区块 | 汇总实际产品和声明养分依据，不重复计同一施用事件 | 发票、产品标签或证书以及施用记录 |
| `cp_crop_protection_records` | `orchard_cultivation` | 作物保护产品投入 | 采购记录、喷施日志、产品标签 | 产品；有效成分；浓度；数量；田块；日期；目标；方法 | 将产品记录与施用事件和果园面积对账 | kg product 或 active ingredient | 每次施用 | 完整作物年度 | 田块或果园区块 | 按产品和有效成分依据汇总并保留产品身份 | 产品标签、施用日志和操作员记录 |
| `cp_energy_fuel_records` | `orchard_establishment`; `orchard_cultivation`; `harvest_and_farm_gate_aggregation` | 电力和移动机械燃料 | 电费单、电表、燃料发票、机械日志、设备记录 | 能量或燃料量；单位；设备；作业；田块；日期；燃料类型；分配依据 | 将电表、发票或设备日志对账 | kWh、MJ 或 kg | 每次事件或每月 | 完整作物年度以及适用的建园期 | 果园和农场交付点作业 | 按实测运行时间、面积或燃料日志分配共享记录并记录依据 | 发票或电表以及设备或作业日志 |
| `cp_field_area_and_soil_records` | `orchard_establishment`; `orchard_cultivation` | 土地占用和土壤背景 | 田块图、面积登记、租赁或所有权记录、土壤记录 | 面积；作物年度持续时间；果园树龄；生产寿命；土壤或排水描述；土地转化状态 | 将田块范围或面积记录与作物年度生产记录核对 | ha；year；土壤描述 | 每个作物年度和建园事件 | 声明作物年度和生产寿命依据 | 果园区块 | 计算面积-时间并防止建园与栽培重复占用 | 田块图、面积记录和边界声明 |
| `cp_emission_and_loss_records` | `orchard_cultivation`; `harvest_and_farm_gate_aggregation` | 直接排放、养分损失、残余物和燃料排放 | 排放计算、测量、残余物日志、去向记录 | 物质；介质；数量；因子或方法；养分依据；燃料；残余物质量；含水率；去向；不确定性 | 采用实测值或与原始记录关联的有文件方法计算 | kg substance；kg residue；kg fuel；MJ | 每次事件、作物年度或方法间隔 | 完整作物年度 | 果园区块和采收作业 | 保留物质、接收介质、方法等级和不确定性；没有方法不得推断损失 | 方法来源、测量或计算记录以及去向记录 |
| `cp_harvest_records` | `harvest_and_farm_gate_aggregation` | 合格水果、次品、拒收品和交付点状态 | 采收票、地磅、等级表、田间日志 | 物种；品种；日期；田块；采收量；合格量；次品；拒收品；等级；成熟度；去向；交付点 | 在归一化前称重或对账采收批次和等级记录 | kg；date；等级 | 每个采收批次 | 完整采收季 | 田块、果园区块和农场交付点 | 汇总合格输出和非合格部分，并与采收量对账 | 经校准的秤或地磅、等级记录和批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_establishment_annualization` | 建园和补植投入 | 作物年度合格建园量 = 记录的建园量 ×（声明作物年度占生产寿命的份额）；披露生产寿命分母和替换处理。 | 建园记录；生产寿命假设；替换面积 | 每个作物年度的年度化建园投入 | `mass-balance-identity`; `fao-good-agricultural-practices` |
| `calculation_reference_normalization` | 所有前景行 | 归一化数量 = 作物年度数量 ÷ 合格商品水果质量 × 1,000 kg。对投入、排放、次品和残余物使用相同的合格输出分母。 | 作物年度数量；合格水果质量 | 每 1,000 kg 合格水果的数量 | `mass-balance-identity` |
| `calculation_nutrient_basis` | 肥料和土壤改良剂总量 | 保留实际产品质量，并仅依据声明配方或分析计算养分质量：养分质量 = 产品质量 × 声明养分比例。不得把产品质量和养分质量当作同一数量相加。 | 产品质量；声明养分比例；施用记录 | 产品总量和养分依据总量 | `fao-good-agricultural-practices`; `mass-balance-identity` |
| `calculation_irrigation_withdrawal_reconciliation` | 灌溉水和水源取水 | 对账关系为：灌溉施用水 = 水源取水 + 再用或蓄水 − 有记录的输配或施用损失，并披露每项和计量依据。 | 施用水；取水量；再用；蓄水；损失 | 对账后的水量投入 | `fao-crop-evapotranspiration-56`; `mass-balance-identity` |
| `calculation_managed_soil_emissions` | 氨、氧化亚氮、硝酸盐和磷酸盐行 | 使用声明的测量或方法等级、养分依据、接收介质和场址条件。只有方法和记录支持零或不适用时才报告零。 | 养分记录；土壤和排水记录；排放方法；测量值 | 按物质和介质列示的排放 | `ipcc-2019-managed-soils` |
| `calculation_harvest_mass_reconciliation` | 合格水果、次品、拒收品和残余物 | 采收量 = 合格商品水果 + 次品和拒收品 + 有记录的田间或处理损失，并记录含水率依据和去向。 | 采收票；等级表；次品和损失记录 | 对账后的输出和损失总量 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 参考流和所有语义行 | 声明物种、品种、田块或果园、交付点、产品状态，以及 Flow Set 解析或身份证据记录。 | 批次追溯、田块图、manifest 审查元数据 |
| `quality_quantity` | 所有实测或计算数量 | 优先使用经校准的水表、秤、发票、施用记录和计算表。保留单位、换算以及不确定性或估算标记。 | 原始记录和换算工作表 |
| `quality_temporal_coverage` | 作物年度和建园数据 | 覆盖声明的完整作物年度，并识别缺失的采收、灌溉、投入或建园期间。 | 作物日历、采收日志和完整性清单 |
| `quality_completeness` | 投入、输出、残余物和次品 | 对账采购投入、施用投入、合格产品、次品、拒收品、残余物和损失；解释排除项和零值。 | 质量平衡检查和去向记录 |
| `quality_emissions` | 直接基本流 | 披露排放物质、接收介质、因子或方法等级、养分或燃料依据，以及结果是实测、计算还是估算。 | 排放计算或测量记录 |
| `quality_boundary` | 数据集元数据 | 保留农场交付点、鲜食未加工产品状态、上游投入连接、分配依据和交付点之后的排除项。 | 边界声明和数据集元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_definition` | 参考流 | 在生成前景数据集前，确认 1,000 kg 功能单位、全部必需限定信息以及证据缺口的参考产品限定信息。 | `mass-balance-identity`; `codex-fresh-tropical-fruit-standards` |
| `validation_flow_set_binding` | 参数化产品投入和基本流输出 | 数据集生成时，使用所列 Flow Set id、版本、组、结构坐标、属性、单位、地理位置和用途证据解析每个参数化行；Flow Set 不是最终 UUID。 |  |
| `validation_mass_reconciliation` | 采收和农场交付点汇集 | 根据采收质量检查合格水果、次品、拒收品、残余物、田间损失和处理损失，并明确等级、含水率和去向处理。 | `mass-balance-identity` |
| `validation_crop_year_completeness` | 所有必需过程 | 验证栽培、采收和交付点记录覆盖声明作物年度，并明确条件性建园是有记录还是明确排除。 | `fao-good-agricultural-practices` |
| `validation_boundary_and_state` | 数据集范围 | 拒绝包含交付点后清洗、打蜡、分级、冷却、包装、加工、零售或运输的数据集，也拒绝缺少声明农场交付点的数据集。 | `iso-14044-2006`; `codex-fresh-tropical-fruit-standards` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明农场交付点鲜食整果芒果、番石榴和山竹的前景主数据集；经审查后可作为 `secondary_dataset` 下游使用 |
| downstream_use | 在保留作物年度、物种、路线、交付点、等级和投入依据限定信息的前提下，构建鲜食热带水果的过程和生命周期模型前景清单 |
| allowed_use | 保留声明果园或田间路线、作物年度、农场交付点状态、合格输出分母、投入记录、排放方法和质量平衡的产品类别研究 |
| excluded_use | 加工水果、种植材料生产、零售或消费者阶段、交付点后运输、未披露的保护地设施，或产品和交付点条件有重大差异的作物 |
| required_metadata | PCR id 和版本；物种和品种；地理位置；果园树龄；作物年度；路线；农场交付点；产量和等级；灌溉水源；实际肥料或土壤改良剂产品及养分依据；作物保护；燃料和电力；次品和残余物去向；分配；排放方法；参考产品限定信息 |
| required_quality_disclosure | 计量来源、缺失或估算字段、作物年度完整性、建园年度化、分配依据、质量平衡结果、排放方法和等级、Flow Set 解析情况以及身份证据缺口发现 |
| update_trigger | 新果园或保护地生产路线、交付点处理或产品状态发生重大变化、排放方法修订、新产品限定信息，或有证据改变默认采集、分配或校验规则 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-evapotranspiration-56` | official_guidance | Allen、Pereira、Raes 和 Smith，FAO Irrigation and drainage paper 56，*Crop evapotranspiration*（1998），https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉记录、水量平衡背景和作物水分计量协议 |
| `ipcc-2019-managed-soils` | official_guidance | IPCC，2019 Refinement to the 2006 IPCC Guidelines，第 4 卷 Agriculture, Forestry and Other Land Use，https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤和养分损失排放方法 |
| `ipcc-2006-mobile-combustion` | official_guidance | IPCC，2006 Guidelines for National Greenhouse Gas Inventories，第 2 卷 Energy，第 3 章 Mobile Combustion，https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | 移动机械燃料相关二氧化碳计算 |
| `codex-fresh-tropical-fruit-standards` | standard | Codex Alimentarius 标准 CXS 184-1993（芒果）、CXS 215-1999（番石榴）和 CXS 246-2005（山竹） | 鲜食整果状态、质量和商品状态限定信息 |
| `fao-good-agricultural-practices` | extension_guidance | FAO 关于果园建园、作物管理、投入记录、采收和追溯的良好农业规范指南 | 过程分解、采集协议、投入和采收记录要求 |
| `iso-14044-2006` | standard | ISO 14044:2006，*Environmental management — Life cycle assessment — Requirements and guidelines*，https://www.iso.org/standard/38498.html | 边界、分配、文件化和校验原则 |
| `mass-balance-identity` | method_factor | 参考流归一化、年度化和采收输出对账的 PCR 方法身份 | 参考流缩放、建园年度化、养分依据分离和质量平衡 |
