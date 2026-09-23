---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plums-and-sloes"
language: "zh-CN"
status: candidate
sync_with: "pcr.en-US.md"
content_maturity: authored_methodology
translation_status: aligned
---

# 果园门鲜李和黑刺李

## 1. 范围与适用性

本 PCR 用于指导来自受管理多年生果园或受管理黑刺李园地、在声明的果园门交付的鲜整果李和黑刺李前景数据包构建。范围包括可归属的建园与移除、多年生种植管理、采收、田间处理、等级分离，以及在声明边界内的可选初步调理或展示。

常规、综合、有机、雨养、灌溉、高密度和低密度路线均可纳入，但必须声明路线、生产系统、地理位置、认证状态和交付门点。作为贸易产品的苗木、加工或保藏水果、果汁、酒类、干果、零售即用产品、配送、零售、消费以及非受管理野生采集默认排除，除非另行声明边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.plums-and-sloes` |
| classification_refs | CPC 3.0 `01346`，`Plums and sloes` |
| covered_products | 声明的 *Prunus* 品种或受管理黑刺李园地在果园门的鲜整果李和黑刺李 |
| excluded_products | 苗木；果汁、葡萄酒、烈酒或其他加工水果；干果或保藏水果；零售即用产品；配送、零售、消费；非受管理野生采集 |
| representative_product | 在果园门交付的可销售鲜李或黑刺李，声明品种或品种混合 |
| production_route | 多年生建园、年度种植管理、采收、等级分离及可选初步调理或展示 |
| market_state | 鲜、整、未加工水果，并声明成熟度、等级、水分、包装状态和预定去向 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明果园门的鲜整果李或黑刺李 |
| How much | 1 kg 净合格水果 |
| How well | 声明物种或品种、生产系统、成熟度、可销售标准、等级、水分状态、地理位置和包装状态 |
| How long or cycle | 一个声明的采收年度或多年平均期；建园、补植和移除按声明的生产寿命年度化 |
| reference_flow_link | 以下参考数量和语义产品流；最终数据集身份在前景数据包中解析 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 果园门鲜整果李或黑刺李 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种和品种或品种混合；生产系统和认证状态；果园或园地年龄及生产寿命假设；采收年度或平均期；雨养或灌溉状态；地理位置；成熟度和可销售标准；等级或去向；果园门位置；散装、周转箱或包装状态 |

参考数量是声明门点的净合格鲜果质量。工业级果、降级果、次果、田间损失和调理废弃物须作为独立输出，记录质量及有证据的去向或处置方式。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和合格水果 | 质量 | kg | 参考流以果园门净合格鲜果 kg 表示，排除可重复使用容器皮重。 |
| `yield_basis` | 采收、等级、损失和归一化投入 | 质量和面积 | kg 和 ha | 归一化前，对同一声明期间的采收、合格、降级、加工、次果和损失水果分别记录。 |
| `nutrient_basis` | 肥料、土壤改良剂和养分排放 | 质量 | kg 产品和 kg 养分 | 记录实际产品及养分含量；氮相关排放以 kg N 计算，并保留产品基准。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 或 kg | 区分交付的灌溉产品投入、基本流资源取水及单独计算的耗水量。 |
| `energy_basis` | 机械、泵送和处理 | 质量、体积或能量 | kg、L、MJ 或 kWh | 保留燃料或电力类型、计量或发票基准、换算因子、作业和报告期。 |
| `moisture_and_grade` | 水果输出 | 质量和水分 | kg 和 % | 当成熟度、等级、水分或去向影响可销售性或分配时，须保留这些限定信息。 |
| `perennial_annualization` | 建园、补植和移除 | 声明属性 | 声明单位 | 将可归属生命周期负荷按声明生产寿命的合格产量分摊，并披露寿命和幼树期。 |

## 5. 系统边界

默认前景边界从声明的果园或受管理园地生产状态开始，在果园门的合格鲜整果处结束。纳入建园和移除、土壤与地面管理、养分和植物保护施用、灌溉、机械和田间能源、土地占用、采收、园内移动、等级分离以及明确纳入的初步调理或展示。使用的苗木、肥料、土壤改良剂、植物保护产品、能源、供水、包装、运输服务和废物处理的上游生产需要关联背景数据集。包装厂作业、长期储存、配送、零售、消费和加工不在默认边界内。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | established_orchard_or_managed_sloe_stand |
| starting_condition_role | perennial_biological_production_condition |
| product_classification_scope | 对应 CPC 3.0 `01346` 的鲜整果李和黑刺李；排除加工水果和非受管理野生采集 |
| recursive_input_rule | 进入声明过程的同类别水果须作为独立产品投入记录其来源、用途、状态和数量，不得与边界内果园生产的水果合并。 |
| upstream_dataset_requirement | 苗木、养分产品、植物保护、能源、供水、包装、运输和废物处理须使用代表性上游数据集或记录排除理由。 |
| disclosure | 物种/品种、受管理园地或果园状态、地理位置、生产系统、年龄、生产寿命、采收期、产量、等级和可销售规则、灌溉状态、门点及包装状态。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_system` | 果园和受管理黑刺李生产 | 纳入可归属的建园、补植、生产期和移除，或说明采用代表性单期边界的理由。 | `source_foreground_records` |
| `boundary_orchard_gate` | 参考产品 | 默认边界在声明门点的合格鲜整果处结束；门点之后的调理、储存、包装和配送须声明独立下游过程。 | `unece-ffv-29-plums-2020`; `usda-plum-grade-standards-7cfr51` |
| `boundary_input_completeness` | 种植管理和采收 | 对养分产品、植物保护、灌溉和取水、土地、燃料、电力、建园材料、损失、直接排放和去向提供数值、合理零值或记录排除。 | `ipcc-2019-soils-n2o`; `fao-56-crop-evapotranspiration-1998`; `source_foreground_records` |
| `boundary_grade_separation` | 所有水果输出 | 按实测质量和声明的去向或处置分开记录合格、降级、加工、次果和损失水果。 | `unece-ffv-29-plums-2020`; `usda-plum-grade-standards-7cfr51`; `source_foreground_records` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment_and_removal` | 果园建园、补植和移除 | conditional | 声明期间发生建园、重植、补植或移除时纳入 | foreground | 每 1 kg 合格水果的可归属生命周期投入 |
| `orchard_cultivation_and_protection` | 果园种植管理和植物保护 | required | 每个受管理果园或黑刺李园地均纳入 | foreground | 一个采收年度或声明平均期，每 1 kg 合格水果 |
| `harvest_and_field_collection` | 采收和田间收集 | required | 向果园门交接交付水果的每条路线均纳入 | foreground | 每 1 kg 合格水果的采收和分流输出 |
| `primary_conditioning_and_gate_handoff` | 初步调理和果园门交接 | conditional | 清洗、冷却、分拣、分级、周转箱或其他准备步骤位于声明门点内时纳入 | foreground | 每 1 kg 参考产品的调理后合格水果 |

### 过程：果园建园、补植和移除（`orchard_establishment_and_removal`）

#### 输入

##### 产品流

###### 苗木和支撑材料（`establishment_materials`）

当为声明果园或受管理园地安装、补植或移除时，苗木、支撑材料、防护物和可归属灌溉基础设施跨越边界。

- 选定流：场址特定的苗木、支撑材料、防护物和灌溉基础设施
- 流属性/单位：质量或声明材料属性 / kg 或声明单位
- 数量规则：实测安装、补植和移除数量按生命周期合格产量年度化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_establishment_lifecycle_records`
- 来源：`source_foreground_records`

##### 废物流

###### 移除的果园材料（`establishment_removal_waste`）

离开建园或移除活动的废弃生物质和支撑材料按材料和去向记录。

- 选定流：果园移除生物质和废弃支撑材料，声明去向
- 流属性/单位：质量 / kg
- 数量规则：按材料和去向实测质量，并按生命周期合格产量年度化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_establishment_lifecycle_records`
- 来源：`source_foreground_records`

##### 基本流

###### 果园土地占用（`establishment_land_occupation`）

果园或受管理园地在可归属的建园、生产、补植和移除期间占用土地。

- 选定流：多年生水果生产的土地占用
- 流属性/单位：面积-时间 / ha·year
- 数量规则：生产面积乘以可归属占用期，再按合格产量年度化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_establishment_lifecycle_records`
- 来源：`source_foreground_records`

#### 输出

##### 产品流

###### 已建立的果园生产状态（`established_orchard_condition`）

本过程将已建立的果园或受管理黑刺李园地作为生产状态交接给年度种植管理，而不是市场产品输出。

- 选定流：已建立的果园或受管理黑刺李园地状态
- 流属性/单位：声明状态 / 不适用
- 数量规则：声明状态；无独立产品数量
- 数值来源模式：不适用（`not_applicable`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_lifecycle_records`
- 来源：`source_foreground_records`

##### 废物流

##### 基本流

### 过程：果园种植管理和植物保护（`orchard_cultivation_and_protection`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`orchard_cultivation_and_protection_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`source_foreground_records`; `ipcc-2019-soils-n2o`

###### 灌溉水（`irrigation_water`）

灌溉水在施用时跨越果园边界；经验证的雨养路线记录有依据的零值。

- 选定流：按来源区分的交付灌溉水
- 流属性/单位：体积或质量 / m3 或 kg
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：按地块和来源计量或以其他证据支持的交付水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`source_foreground_records`; `fao-56-crop-evapotranspiration-1998`

###### 植物保护产品（`crop_protection_products`）

果园或受管理园地施用时，记录有名称的植物保护产品及活性成分。

- 选定流：实际植物保护产品和活性成分，声明身份和制剂
- 流属性/单位：质量 / kg 产品和 kg 活性成分
- 数量规则：按产品、活性成分、地块和事件实测施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`source_foreground_records`

###### 移动机械燃料（`mobile_machinery_fuel`）

种植管理、修剪、喷施、养分施用、灌溉支持和采收支持所用燃料或等效能源作为作业投入跨越边界。

- 选定流：农业移动机械的燃料或能源
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：按作业实测燃料、计量或机械能源记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_energy_records`
- 来源：`source_foreground_records`

###### 外购电力（`purchased_electricity`）

当泵送或果园内种植设备在交付门点前消耗电力时纳入。

- 选定流：外购电力
- 流属性/单位：能量 / kWh 或 MJ
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：分配到声明果园和期间的电表或发票电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_energy_records`
- 来源：`source_foreground_records`

##### 废物流

##### 基本流

###### 水资源取水（`irrigation_withdrawal`）

当研究范围表示水源取水时，单独记录水源取水，不与交付灌溉产品投入合并。

- 选定流：按来源区分的水资源取水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：实测或有证据支持的水源取水量，与交付灌溉水区分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`source_foreground_records`; `fao-56-crop-evapotranspiration-1998`

#### 输出

##### 产品流

###### 交接给采收的果实（`standing_fruit_for_harvest`）

种植管理将水果状态交接给采收过程，并与实测采收量和未采收量核对。

- 选定流：种植果园交接的鲜李或黑刺李
- 流属性/单位：质量 / kg
- 数量规则：根据采收记录和果园生产平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_harvest_records`
- 来源：`source_foreground_records`

##### 废物流

##### 基本流

###### 排放到空气的直接氧化亚氮（`direct_n2o_air`）

当声明方法根据氮投入表示管理土壤排放时，计算直接氧化亚氮。

- 选定流：受管理果园土壤向空气排放的氧化亚氮
- 流属性/单位：质量 / kg N2O 或 kg N2O-N
- 数量规则：按声明氮投入和选定排放方法计算，并保留 N2O-N 及换算基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：氮投入（`n_input`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-soils-n2o`; `source_foreground_records`

###### 排放到空气的氨（`ammonia_air`）

当相关养分投入及接收介质被方法表示时，记录氨挥发。

- 选定流：土壤或养分产品向空气排放的氨
- 流属性/单位：质量 / kg NH3-N 或 kg NH3
- 数量规则：根据氮投入和施用方法使用选定排放方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：氮投入（`n_input`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-soils-n2o`; `source_foreground_records`

###### 硝酸盐和磷酸盐损失（`nutrient_losses_to_water_or_soil`）

纳入径流、排水或淋失时，按独立物质和接收介质记录硝酸盐和磷酸盐损失；通用养分名称不能决定接收介质。

- 选定流：一种已报告的硝酸盐或磷酸盐物种进入一个有证据的接收介质；按物质和区室分别生成前景交换
- 流属性/单位：质量 / kg 排放物质；kg N 或 kg P 单独保留为计算基准
- 数量规则：依据声明的土壤、排水、径流和养分管理方法实测或计算养分损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：氮投入（`n_input`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-soils-n2o`; `source_foreground_records`

### 过程：采收和田间收集（`harvest_and_field_collection`）

#### 输入

##### 产品流

###### 待采收果实（`fruit_presented_for_harvest`）

水果作为声明的待采收果园输出从种植管理进入采收过程。

- 选定流：待采收的鲜李或黑刺李
- 流属性/单位：质量 / kg
- 数量规则：等级和去向分离前的实测采收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_harvest_records`
- 来源：`source_foreground_records`

###### 采收机械燃料（`harvest_fuel`）

在边界内，采摘、装载和园内移动的采收燃料或等效机械能源须记录。

- 选定流：采收机械的燃料或能源
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：按采收作业实测燃料或机械能源记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_energy_records`
- 来源：`source_foreground_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格鲜果（`accepted_fresh_fruit`）

合格鲜果是完成声明采收和等级判定后的参考产品输出。

- 选定流：作为果园门产品接受的鲜整果李或黑刺李
- 流属性/单位：质量 / kg
- 数量规则：净实测合格质量；参考数量归一化为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_yield_and_harvest_records`
- 来源：`unece-ffv-29-plums-2020`; `usda-plum-grade-standards-7cfr51`

###### 降级或加工水果（`downgraded_processing_fruit`）

不符合鲜食标准但留作加工或其他声明去向的水果作为独立共产品。

- 选定流：降级、工业级或加工去向的李或黑刺李
- 流属性/单位：质量 / kg
- 数量规则：按等级和去向实测质量，并与采收量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yield_and_harvest_records`
- 来源：`source_foreground_records`; `unece-ffv-29-plums-2020`

##### 废物流

###### 次果和田间损失（`harvest_culls_and_losses`）

次果、受损果、落果和其他非产品损失按实测去向和处置方式记录。

- 选定流：次果、受损果、落果和未收集生物质，声明去向
- 流属性/单位：质量 / kg 鲜重
- 数量规则：按损失路线和处置方式实测或核算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_yield_and_harvest_records`
- 来源：`source_foreground_records`

##### 基本流

### 过程：初步调理和果园门交接（`primary_conditioning_and_gate_handoff`）

#### 输入

##### 产品流

###### 待调理采收水果（`conditioning_fruit_input`）

只有在声明边界包含该步骤时，采收水果才进入调理、分拣或展示过程。

- 选定流：进入声明调理步骤的采收鲜李或黑刺李
- 流属性/单位：质量 / kg
- 数量规则：调理入口实测质量，并与采收输出核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`source_foreground_records`

###### 调理用水（`conditioning_water`）

仅当步骤在边界内时，纳入清洗或初步调理用水。

- 选定流：清洗或初步调理用工艺水
- 流属性/单位：体积或质量 / m3 或 kg
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量规则：按批次计量或以其他证据支持的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`source_foreground_records`

###### 调理用电（`conditioning_electricity`）

声明包含清洗、分拣、冷却或展示时，纳入边界内调理用电。

- 选定流：初步调理或展示用外购电力
- 流属性/单位：能量 / kWh 或 MJ
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：分配到该活动和期间的电表或发票电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`source_foreground_records`

###### 周转箱或包装材料（`conditioning_packaging_materials`）

在声明门点前保护或展示水果的周转箱、容器、托盘和包装材料须记录，并声明重复使用和皮重。

- 选定流：门点使用的实际周转箱、容器、托盘或包装材料
- 流属性/单位：质量或数量 / kg 或声明单位
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`pallet-and-crate-packaging`
- 数量规则：实测材料质量或数量，包括重复使用次数和皮重处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`source_foreground_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 门点调理后合格水果（`conditioned_accepted_fruit`）

本过程在包含的调理、等级分离或展示后，将声明的鲜果状态交接至果园门。

- 选定流：声明调理步骤后的合格鲜整果李或黑刺李
- 流属性/单位：质量 / kg
- 数量规则：净实测合格输出；归一化为 1 kg 参考产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`unece-ffv-29-plums-2020`; `usda-plum-grade-standards-7cfr51`

##### 废物流

###### 调理拒收物和废水（`conditioning_rejects_and_wastewater`）

当调理在边界内时，离开调理过程的拒收水果、清洗残余物和废水按材料和去向记录。

- 选定流：初步调理产生的拒收水果、清洗残余物和废水
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：按材料和处理或排放路线实测或核算输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`source_foreground_records`

###### 包装拒收物（`packaging_rejects`）

当包含包装展示时，包装损坏物或废弃物与水果废物分开记录。

- 选定流：拒收或废弃的周转箱和包装材料
- 流属性/单位：质量 / kg
- 数量规则：按材料和处置方式实测包装拒收物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`source_foreground_records`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_output` | 合格鲜果 | 以净合格鲜果作为参考输出，不从毛采收质量分配参考流。 | `unece-ffv-29-plums-2020`; `source_foreground_records` |
| `allocation_grade_outputs` | 合格、降级、加工和次果输出 | 先实测并分开每个等级或去向。无法直接分拆共享负荷时采用声明的物理质量基准；其他基准须有产品特定证据并披露。 | `source_foreground_records` |
| `allocation_residues_losses` | 次果、残余物和废物 | 没有预定产品功能的残余物或废物不分配负荷。回收或销售的共产品须独立记录，并一致采用声明的归属方法。 | `source_foreground_records` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_lifecycle_records` | `orchard_establishment_and_removal` | establishment_materials; establishment_removal_waste; establishment_land_occupation; established_orchard_condition | planting, asset, and removal records | block area; planting year; tree or stand count; material; installation; replacement; removal; productive life; juvenile years; fate | reconcile invoices, maps, work orders, and removal records to the block | kg; count; ha; year | each event, reconciled annually | declared productive life and reporting year | each orchard block or managed stand | annualize attributable quantities over lifetime accepted output | invoices, maps, work orders, signed block records |
| `cp_orchard_input_records` | `orchard_cultivation_and_protection` | nutrient_products; crop_protection_products; direct_n2o_air; ammonia_air; nutrient_losses_to_water_or_soil | input and application log | product; formulation; amount; nutrient or active ingredient; date; field; method; soil or weather condition when used | collect invoices, application logs, nutrient plans, and stock reconciliation | kg product; kg nutrient; kg active ingredient | each application, reconciled monthly or annually | one harvest year or declared averaging period | each orchard block or managed sloe stand | aggregate by actual product and nutrient or substance, then normalize | invoices, labels, logs, nutrient plan |
| `cp_irrigation_records` | `orchard_cultivation_and_protection` | irrigation_water; irrigation_withdrawal | water meter and source record | source; meter readings; delivered volume; withdrawal volume; field; date; rain-fed declaration | read meters or retain supplier records; document justified zero for verified rain-fed production | m3 or kg | each event, reconciled monthly | one harvest year or declared averaging period | each source and block | sum delivered irrigation separately from source withdrawal | meter calibration, invoices, permits, field logs |
| `cp_orchard_energy_records` | `orchard_cultivation_and_protection;harvest_and_field_collection` | mobile_machinery_fuel; purchased_electricity; harvest_fuel | fuel, machine, and electricity records | fuel type; quantity; meter or invoice; operation; machine; date; block; electricity allocation | retain fuel tickets, machine logs, meters, and allocation method | L; kg; MJ; kWh | each transaction or operation, reconciled monthly | one harvest year or declared averaging period | each block, fleet, or facility | assign shared energy by measured use or documented hours | invoices, meters, machine hours, worksheet |
| `cp_yield_and_harvest_records` | `orchard_cultivation_and_protection;harvest_and_field_collection` | standing_fruit_for_harvest; fruit_presented_for_harvest; accepted_fresh_fruit; downgraded_processing_fruit; harvest_culls_and_losses | harvest and weighbridge records | species; cultivar; block; date; gross and tare mass; grade; destination; rejected or lost mass; moisture or maturity where relevant | weigh each lot or use documented sampling and reconciliation | kg fresh fruit | each lot, aggregated by period | one harvest year or declared averaging period | each block, lot, and destination | reconcile gross harvest to accepted, downgraded, cull, and loss outputs | weighbridge tickets, grade sheets, sales records, mass-balance check |
| `cp_conditioning_and_packaging_records` | `primary_conditioning_and_gate_handoff` | conditioning_fruit_input; conditioning_water; conditioning_electricity; conditioning_packaging_materials; conditioned_accepted_fruit; conditioning_rejects_and_wastewater; packaging_rejects | conditioning, packing, and hand-off records | intake and output mass; water; electricity; package material; tare; reuse cycles; rejects; destination; hand-off date | collect batch sheets, meters, packaging invoices, and dispatch records only for included operations | kg; m3; kWh; count | each batch or dispatch, reconciled by period | declared harvest and conditioning period | each line, block, or gate facility | reconcile intake, accepted output, rejects, wastewater, and packaging; remove reusable tare | batch records, meters, package specifications, dispatch records |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all quantitative rows | normalized amount = period amount / net accepted reference fruit mass | period amount; net accepted fruit mass | amount per 1 kg reference product | `source_foreground_records` |
| `calc_perennial_annualization` | establishment_materials; establishment_removal_waste; establishment_land_occupation | annualized amount = attributable lifecycle amount / declared productive-life accepted output | lifecycle amount; productive life; lifetime accepted output | annualized amount per kg accepted fruit | `source_foreground_records` |
| `calc_nutrient_content` | nutrient_products; direct_n2o_air; ammonia_air; nutrient_losses_to_water_or_soil | nutrient amount = product amount × declared nutrient fraction; preserve product and nutrient bases | product amount; nutrient fraction; application event | kg nutrient and emission inputs | `ipcc-2019-soils-n2o`; `source_foreground_records` |
| `calc_mass_balance` | fruit outputs and conditioning rejects | harvested input = accepted + downgraded/processing + culls + measured or justified losses after tare and moisture reconciliation | harvested mass; output masses; tare; declared basis | reconciled output set and residual loss | `source_foreground_records` |
| `calc_shared_energy_allocation` | purchased_electricity; mobile_machinery_fuel; harvest_fuel | assign shared records using measured operation use or documented machine-hours; do not use output price without a justified decision | shared record; operation use; allocation basis | process-level energy amount | `source_foreground_records` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_qualifiers` | 参考产品和每个等级输出 | 声明物种/品种、生产系统、地理位置、采收期、成熟度、等级、去向、门点和包装状态；无 UUID 的语义身份须为后续前景解析明确保留。 | dataset metadata; lot records; product description |
| `dq_mass_reconciliation` | 采收和调理 | 合格、降级、加工、次果、拒收和损失质量须在有文件说明的容差内与实测投入核对，或解释残差。 | weighbridge tickets; batch sheets; worksheet |
| `dq_input_completeness` | 种植管理和采收 | 对养分、植物保护、灌溉和取水、土地、能源、建园材料和直接排放提供记录或合理零值，或披露排除。 | invoices; meters; logs; field plan; exclusion statement |
| `dq_temporal_and_site_coverage` | 所有采集记录 | 覆盖声明期间，并识别每个贡献地块、受管理园地、调理线或共享设施。 | time-stamped records; block and facility registers |
| `dq_method_and_conversion` | 计算值和排放 | 保留单位换算、养分比例、N2O-N 与 N2O 基准、水分基准、年度化假设和分配决定。 | calculation worksheet; source method; review sign-off |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 仅接受带必需限定信息的 1 kg 净合格鲜果参考流；不得以毛采收量或加工输出作为参考流。 | `unece-ffv-29-plums-2020`; `source_foreground_records` |
| `validation_process_completeness` | 过程图 | 种植管理、采收及每个已激活的建园或调理节点必须声明边界、输入、输出、采集协议和交接。 | `source_foreground_records` |
| `validation_identity_coverage` | 流身份 | 仅当声明流类型、方向、材料或物质、适用时的接收介质以及去向时，才接受语义身份证据缺口；不得以邻近产品流替代。 | `source_foreground_records` |
| `validation_mass_balance` | 水果输出和损失 | 采收水果无法与合格、降级、加工、次果、拒收和损失输出核对，或皮重被计入净参考质量时，校验失败。 | `source_foreground_records` |
| `validation_emission_basis` | 养分排放 | 接受计算排放前，检查氮投入、接收介质、N2O-N 或物质基准及选定排放方法。 | `ipcc-2019-soils-n2o`; `source_foreground_records` |
| `validation_boundary_disclosure` | 数据集元数据 | 未披露起始条件、果园门、生产寿命处理、纳入的调理或包装、下游排除项或质量限制时，校验失败。 | `unece-ffv-29-plums-2020`; `source_foreground_records` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；仅当明确具备背景用途资格时为 background_dataset |
| downstream_use | 果园门鲜整果李或黑刺李前景生产；带路线、地理和等级限定的 process 与 lifecyclemodel 构建 |
| allowed_use | 产品状态、路线、边界、参考质量、期间和质量披露符合本 PCR 的果园门鲜果研究 |
| excluded_use | 加工、干燥、保藏、零售即用或配送阶段；非受管理野生采集；缺少质量平衡或边界披露的数据集 |
| required_metadata | PCR id 和版本；物种/品种；地理位置；生产系统；果园/园地年龄和生产寿命；采收期；产量和等级基准；灌溉状态；门点；包装状态；纳入过程；分配方法；流身份状态 |
| required_quality_disclosure | 时间和场址覆盖；投入完整性；计量和换算方法；质量平衡结果；排放方法；排除项；代表性限制 |
| update_trigger | 产品边界、等级定义、生产路线、年度化方法、流集 taxonomy、排放方法或影响必需规则的实质证据发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unece-ffv-29-plums-2020` | standard | UNECE FFV-29, Plums, International Standards for Fruit and Vegetables: https://unece.org/trade/wp7/FFV-Standards | 鲜李身份、质量和可销售性区分、果园门产品定义 |
| `usda-plum-grade-standards-7cfr51` | official_guidance | United States Standards for Grades of Fresh Plums and Prunes, 7 CFR Part 51, Subpart O: https://www.law.cornell.edu/cfr/text/7/part-51/subpart-O | 等级和质量分离披露 |
| `ipcc-2019-soils-n2o` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11: https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O.pdf | 养分基准和管理土壤排放方法 |
| `fao-56-crop-evapotranspiration-1998` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration: https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉记录和水量平衡背景 |
| `source_foreground_records` | dataset | 按本 PCR 协议采集的果园、受管理园地、采收、调理、供应商、计量、发票和称重记录 | 场址特定数量、身份、质量平衡、分配和数据质量证据 |
