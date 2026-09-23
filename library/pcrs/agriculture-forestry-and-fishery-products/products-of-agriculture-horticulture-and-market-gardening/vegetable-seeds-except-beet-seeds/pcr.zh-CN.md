---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetable-seeds-except-beet-seeds
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 甜菜种子除外的蔬菜种子

## 1. 范围与适用性

本 PCR 覆盖为农业或园艺播种生产的蔬菜种子批次，但不包括甜菜种子。前景路线从建立一个种子作物周期所用的播种种子或亲本材料开始，经过收获、种子提取或脱粒、干燥、清选、分级、质量检验、可选处理或包衣、包装以及纳入范围的门前储存，终止于声明的种子放行门。适用于露地和保护地种子作物、自交、异交、杂交和常规授粉路线，以及未处理、化学处理、包衣、包膜或丸粒化批次。

批次必须在物种和品种或杂交种层面识别。对果实型或黏液质蔬菜，在放行门前发生的湿法提取或发酵纳入范围。田间隔离、去杂、授粉管理、病害控制、收获成熟度和种子载体器官处理，在可归属于声明批次时纳入。本 PCR 不规定一种农艺配方或一种法定认证体系；必须披露适用的国家或市场方案及实际批次状态。

甜菜种子、营养繁殖材料（包括幼苗、鳞茎、块茎、根、插条和嫁接材料）、观赏种子、粮食或饲料谷物、食用蔬菜、未作为市场种子批次制备的育种或种质库研究材料、机器和建筑制造、土地利用变化、放行后的配送、零售、播种及由放行种子产生的蔬菜作物生产不在默认边界内。不能用于播种的批次，在其有文件证明的去向确定前，应作为废物或转用途产品输出。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vegetable-seeds-except-beet-seeds |
| classification_refs | CPC 3.0 01260 — Vegetable seeds, except beet seeds |
| covered_products | 除甜菜外蔬菜物种的可上市种子批次，包括常规授粉和杂交种子，以及未处理、处理、包衣、包膜或丸粒化种子，并具有声明的物种、品种或杂交种、种子等级、水分、物理纯度、发芽率或活力、健康、批次和包装状态 |
| excluded_products | 甜菜种子；幼苗、移栽苗、鳞茎、块茎、根、插条、嫁接材料；观赏种子；粮食或饲料谷物；食用蔬菜；未作为种子批次放行的育种或种质库材料；以及放行后的作物生产或配送 |
| representative_product | 1 kg 某一声明蔬菜物种和品种或杂交种的放行种子批次，具有记录的种子等级、水分、纯度、发芽率或活力、处理状态、批次身份和门 |
| production_route | 播种种子或亲本材料 → 田间建植和隔离 → 去杂、授粉、作物管理和成熟 → 收获及种子提取或脱粒 → 干燥、清选和分级 → 可选处理、包衣或丸粒化 → 检验、包装、门前储存和批次放行 |
| market_state | 在声明的农场、加工商或发运门放行的蔬菜种子，采用散装或密封包装，具有物种及品种或杂交种身份、批次追溯、质量结果、处理声明、净数量、水分基准和预定播种用途 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明放行门的甜菜种子除外的可上市蔬菜种子 |
| How much | 1 kg 净接收种子 |
| How well | 声明的物种；品种或杂交种；种子等级和世代；未处理、处理、包衣、包膜或丸粒化状态；水分基准；分析纯度；发芽率或活力；健康或植物检疫状态；批次身份；包装状态；地理范围；以及放行门 |
| How long or cycle | 一个完整种子作物繁育周期，加上可归属的收获、提取、调制、检验、包装和门前储存；储存在范围内时声明储存时间 |
| reference_flow_link | `vegetable_seed_release_output` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Vegetable seed, except beet seed, market-ready lot |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | Units of mass (`93a60a57-a4c8-11da-a746-0800200c9a66`) |
| Reference unit | kg |
| Required qualifiers | 物种；品种或杂交种及相关亲本角色；种子等级和世代；生产地理范围；作物周期；授粉和隔离路线；种子载体器官；收获量和接收量；水分基准；分析纯度；发芽率或活力；健康状态；处理、包衣、包膜或丸粒化；包装；储存时间；批次标识；播种用途；以及声明的放行门 |

构建前景数据包时，`Required qualifiers` 中的每项信息都必须写入数据集元数据、过程说明、参考流备注、产品说明、批次证书或等效数据包字段。参考数量是声明水分基准下的净放行种子；拒收批次和调制损失不得被默默计入该数量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和放行批次 | Mass | kg | 在声明的收到时水分基准下报告放行种子净质量。若源记录是粒数，使用实测千粒重或透明的批次特定粒数到质量记录换算。 |
| `moisture_basis` | 种子载体材料、原始种子、调制种子和放行种子 | Mass and moisture content | kg and % | 保留收到时质量、水分测量值及任何干基或标准水分换算。不得在不兼容水分基准上混合湿法提取、干燥或包装记录。 |
| `field_to_lot_normalization` | 田间作业和收获输出 | Area and mass | ha and kg | 在缩放到 1 kg 参考流前，用同一物种、品种或杂交种、地理范围和生产周期的接收放行种子对作物周期田间总量归一化。 |
| `seed_quality_attributes` | 放行批次 | Germination or viability, purity, and seed health | % or test-specific unit | 保留发芽率或活力、分析纯度、其他种子含量和健康声明的检验方法、取样日期、批次标识和结果；不得用通用类别值替代缺失检验。 |
| `treatment_basis` | 处理、包衣、包膜或丸粒化投入 | Product mass and active or carrier mass | kg product and kg active or carrier | 分别记录实际配方、施用率、有效成分或包衣载体和处理种子质量；披露处理是否属于放行产品状态。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一个声明的种子繁育周期开始时使用的播种种子、亲本系或源库存，以及田间或保护地单元；购入管理投入跨越前景边界 |
| starting_condition_role | 蔬菜种子作物建植和繁育的起点 |
| product_classification_scope | 用于农业或园艺播种的蔬菜种子批次，甜菜种子除外；CPC 01260 仅作映射背景，不替代物种、品种或产品状态身份 |
| recursive_input_rule | 若播种种子或亲本材料本身属于蔬菜种子类别，则作为独立的上游产品投入记录，并记录物种、品种或杂交种、等级、数量和来源。不得从放行种子输出中扣除，也不得将其连回同一批次形成闭环。 |
| upstream_dataset_requirement | 当投入跨越边界时，使用与播种或亲本种子、肥料和土壤改良剂、作物保护产品、灌溉水或工艺水、燃料、电力和工艺热、处理或包衣产品、包装、外购运输以及废物或废水服务相容的上游数据集。 |
| disclosure | 声明物种、品种或杂交种、亲本角色、种子等级和世代、地理范围、保护地或露地路线、隔离和授粉做法、田块面积、作物日期、收获和提取路线、产量、水分、纯度、发芽率或活力、健康检验、处理和包装状态、储存时间、门、输出去向及身份证据缺口。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_seed_multiplication_cycle` | 田间建植和管理 | 纳入声明种子作物周期内可归属的播种、隔离、去杂、授粉、养分和作物保护管理、灌溉、燃料和直接田间排放。除非明确归属于批次，否则排除品种育种、亲本维持和无关基础设施。 | `fao-seed-systems`; `oecd-seed-schemes`; `ipcc-2019-managed-soils-n2o` |
| `boundary_harvest_to_release` | 收获、提取、调制、处理和放行 | 纳入声明放行门前发生的收获、种子提取或脱粒、干燥、清选、分级、检验、处理、包衣、丸粒化、包装、搬运和门前储存。即使承包商记录嵌入了上游能源，每项作业也只纳入一次。 | `fao-seed-processing-manual`; `fao-vegetable-seed-drying-storage`; `eu-vegetable-seed-directive` |
| `boundary_wet_extraction` | 果实型或黏液质种子路线 | 在放行前发生时，纳入湿法提取、发酵、清洗水、废水以及处理或排放；只有路线声明使用干法提取时，才可记录为零或不适用。 | `fao-seed-processing-manual`; `mass-balance-identity` |
| `boundary_post_release_exclusion` | 下游活动 | 排除放行后的配送、零售、播种、蔬菜作物栽培、消费者使用、种子报废、机器和建筑制造以及土地利用变化，除非另一个研究范围明确加入。 | `eu-vegetable-seed-directive` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `vegetable_seed_field_multiplication` | 蔬菜种子作物建植和田间繁育 | required | always | 建植、隔离、管理、授粉和成熟声明的蔬菜种子作物 | 作物周期田块面积、管理投入和收获种子载体材料 |
| `vegetable_seed_harvest_and_extraction` | 蔬菜种子收获和种子提取 | required | always | 收获成熟的种子载体器官，并从果实、荚、蒴果、花序或其他载体中分离种子 | 收获材料、提取原始种子、残余物、水、能源和废水投入输出 |
| `vegetable_seed_conditioning_and_grading` | 蔬菜种子干燥、清选、分级和质量放行 | required | always for a released lot; 当路线文件证明某步骤为零或不适用时，个别干燥、湿清洗或分级步骤可为零或不适用 | 通过水分控制、清选、分级、取样和质量检查使原始种子达到检验和放行状态 | 按声明水分基准计的原始种子投入和调制种子输出 |
| `vegetable_seed_treatment_packaging_and_storage` | 蔬菜种子处理、包装、储存和放行 | conditional | 在声明放行门前发生处理、包衣、丸粒化、包装或储存时 | 施加声明的产品处理或物理增强，并交付可追溯的放行批次 | 调制种子、处理和包装材料、储存能源及放行种子 |

### 过程：蔬菜种子作物建植和田间繁育（`vegetable_seed_field_multiplication`）

#### 输入

##### 产品流

###### 播种种子或亲本材料（`planting_seed_input`）

记录用于建立声明蔬菜种子作物的种子、亲本系或源库存。保留其物种、品种或杂交种、种子等级、世代和来源，不得将其当作通用谷物。

- 选定流：蔬菜种子繁育用播种种子或亲本材料＼
- 流属性/单位：Mass / kg
- 数量规则：按批次实测种子质量，或用批次特定千粒重将粒数换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_field_activity_records`
- 来源：
- 数量范围：暂定播种种子筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：150
  - 单位：kg/ha
  - 基准：覆盖小粒蔬菜、种子载体果实和亲本系繁育的宽泛首轮范围；以物种和建植证据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`vegetable_seed_field_multiplication_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_field_activity_records`
- 来源：
- 数量范围：暂定养分产品筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：kg product/ha
  - 基准：一个种子作物周期；实际产品台账和养分基准优先
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供给的灌溉水（`irrigation_water_input`）

按田块和作物周期记录施用的灌溉水。只有水量平衡或田间记录支持时，雨养批次才记录零灌溉。

- 选定流：灌溉水供应
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`irrigation-water`
- 数量规则：按田块和作物周期记录水表读数或经验证的施用估计
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_field_activity_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：暂定灌溉筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：8,000
  - 单位：m3/ha
  - 基准：一个作物周期；以当地作物水分平衡和灌溉记录替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间作业的移动机械燃料（`field_fuel_input`）

记录分配给种子作物的拖拉机、收获设备、水泵和其他移动机械所用燃料。若承包商活动跨越边界且未被外购服务数据集内含，则纳入其燃料。

- 选定流：田间作业移动机械燃料＼
- 流属性/单位：质量或能源载体 / L、kg 或 MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`mobile-machinery-fuel`
- 数量规则：用油箱记录、发票、燃料表或承包商活动记录，并换算到声明的载体基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_seed_field_activity_records`
- 来源：
- 数量范围：暂定田间燃料筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：L/ha
  - 基准：一个作物周期及所有可归属田间作业
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 使用的作物保护产品（`crop_protection_input`）

记录种子作物使用的每种作物保护配方，包括有效成分、配方、施用率、施用方法及任何种子健康或授粉限制。实际配方提交前身份保持证据缺口。

- 选定流：蔬菜种子繁育使用的作物保护配方＼
- 流属性/单位：配方和有效成分质量 / kg product；kg active substance
- 数量规则：按田块和作物周期汇总实际配方产品施用量，保留有效成分和配方身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_field_activity_records`
- 来源：
- 数量范围：暂定作物保护筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg formulation/ha
  - 基准：一个作物周期；以作物保护方案和产品台账替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 农业土地占用（`field_land_occupation`）

记录声明种子作物所占用的田间或保护地面积和时间。只有研究范围有意纳入时，才另行报告保护结构或多年生基础设施。

- 选定流：农业土地占用
- 流属性/单位：Area-time / ha·crop cycle
- 数量规则：田间或保护地面积乘以声明占用时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_field_activity_records`
- 来源：`fao-seed-systems`
- 数量范围：暂定土地占用筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.0001
  - 上限：2
  - 单位：ha·crop cycle/kg released seed
  - 基准：跨物种和种子产量的宽泛首轮范围；以实测面积和接收批次质量替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 收获的种子载体材料（`harvested_seed_bearing_material`）

记录成熟荚、果实、蒴果、伞形花序、花头或其他种子载体材料离开田间生产并进入提取过程的质量，并声明收获时是否有食用或可销售共产品被移出。

- 选定流：提取前收获的蔬菜种子载体材料＼
- 流属性/单位：Mass / kg
- 数量规则：在声明水分基准下实测收获质量，并记录种子载体器官和收获成熟度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_field_output_records`
- 来源：
- 数量范围：暂定收获材料筛选估计
  - 范围角色：典型范围（`typical_range`）
  - 下限：100
  - 上限：100,000
  - 单位：kg/ha
  - 基准：覆盖干荚和种子载体果实的宽泛范围；以实测作物和路线数据替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 田间残余物和未收获生物量（`field_residue_output`）

记录留在田间、因有文件证明的用途而移出、堆肥、焚烧或送往废物处理的植物残余物。没有明确的积极去向和交接，不得把残余物视为共产品。

- 选定流：蔬菜种子作物田间残余物和未收获生物量＼
- 流属性/单位：Mass / kg dry or as-received basis, with basis declared
- 数量规则：按去向和水分基准实测或计算残余物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_seed_field_output_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：暂定田间残余物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100,000
  - 单位：kg/ha
  - 基准：共同水分基准下全部声明的田间残余物去向
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 管理种子作物土壤产生的氧化亚氮（`field_n2o_emission`）

仅在使用声明的、适用于地理范围的方法，并拥有同一作物周期的养分、残余物、土壤、水分和气候记录时，记录直接和间接土壤氧化亚氮排放。

- 选定流：管理土壤向空气排放的氧化亚氮＼
- 流属性/单位：Mass / kg N2O or kg N2O-N
- 数量规则：依据肥料和改良剂氮、残余物氮及适用的直接或间接路径计算，并报告因子集和基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：N input（`n_input`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_seed_field_emission_activity`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：暂定土壤 N2O 筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/ha
  - 基准：一个作物周期和声明的氮投入；以选定区域方法替换
  - 基准类型：N input（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种子作物养分管理产生的氨（`field_ammonia_emission`）

当选定方法和氮施用记录支持时，记录氨挥发。前景记录应保留产品形态、施用方法、时间和接收介质。

- 选定流：种子作物养分管理向空气排放的氨＼
- 流属性/单位：Mass / kg NH3
- 数量规则：按氮源、施用方法、时间和适用因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：N input（`n_input`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_seed_field_emission_activity`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：暂定氨筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg NH3/ha
  - 基准：一个作物周期和声明的氮投入；以适用地理范围的氨方法替换
  - 基准类型：N input（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种子作物向水体的硝酸盐损失（`field_nitrate_emission`）

仅在有监测平衡、适用模型或经审查的清单方法支持时记录硝酸盐淋失或径流，并明确水路径和接收介质。

- 选定流：种子作物田向水体排放的硝酸盐＼
- 流属性/单位：Mass / kg nitrate or kg N as nitrate
- 数量规则：依据氮投入、土壤和水分条件、排水或径流及选定方法计算；不得仅从肥料质量推断损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期并换算为每 1 kg 放行种子
- 基准类型：N input（`n_input`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_seed_field_emission_activity`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：暂定硝酸盐损失筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg nitrate/ha
  - 基准：一个作物周期；以场址水分平衡或区域淋失方法替换
  - 基准类型：N input（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：蔬菜种子收获和种子提取（`vegetable_seed_harvest_and_extraction`）

#### 输入

##### 产品流

###### 进入提取的收获种子载体材料（`harvested_material_extraction_input`）

记录从田间生产转入脱粒、开荚、果实破碎、发酵或其他种子提取作业的收获材料，并使批次和水分基准与田间输出记录匹配。

- 选定流：提取前收获的蔬菜种子载体材料＼
- 流属性/单位：Mass / kg
- 数量规则：按田块、收获日期、种子载体器官和水分基准匹配的实测进入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个提取批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_extraction_records`
- 来源：`fao-seed-processing-manual`
- 数量范围：暂定提取投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：100
  - 上限：100,000
  - 单位：kg/1 kg released seed
  - 基准：宽泛的路线相关比例；以匹配批次记录和共同水分基准替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 湿法提取用水（`wet_extraction_water_input`）

仅当物种和路线要求放行前湿法提取时，记录清洗、破碎、发酵或分离用水。干法提取有路线声明时记录零或不适用。

- 选定流：湿法种子提取用工艺水
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`process-water`
- 数量规则：记录湿法提取和清洗加入的水表或批次用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个提取批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_extraction_records`
- 来源：`fao-seed-processing-manual`
- 数量范围：暂定湿法提取用水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：m3/1,000 kg incoming seed-bearing material
  - 基准：仅湿法路线；以物种和设备记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 提取助剂或清洗剂（`extraction_aid_input`）

记录跨越前景边界的酸、盐、酶、消毒剂或其他提取助剂，并保留配方、有效成分及其留在种子上还是随废水排出的信息。

- 选定流：蔬菜种子回收用提取助剂或清洗剂＼
- 流属性/单位：配方质量 / kg
- 数量规则：按提取批次和配方实测产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个提取批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_extraction_records`
- 来源：
- 数量范围：暂定提取助剂筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/1,000 kg incoming seed-bearing material
  - 基准：仅湿法提取路线；以配方和批次记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获和提取用电力（`extraction_electricity_input`）

记录调制前脱粒、开壳、破碎、分离、泵送和提取设备的用电量。

- 选定流：种子收获和提取用电力供应
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`electricity-supply`
- 数量规则：用电表记录或设备功率乘经核验的运行时间，并与提取批次匹配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个提取批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_extraction_records`
- 来源：
- 数量范围：暂定提取用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kWh/1,000 kg incoming seed-bearing material
  - 基准：提取批次；以电表和设备记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 提取的原始蔬菜种子（`raw_extracted_seed_output`）

记录从种子载体器官分离、尚未最终干燥、清选和分级的种子，并识别批次、物种、品种或杂交种和水分状态。

- 选定流：调制前提取的原始蔬菜种子＼
- 流属性/单位：Mass / kg
- 数量规则：按声明收到时水分基准实测回收种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个提取批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_extraction_records`
- 来源：
- 数量范围：暂定原始种子回收筛选估计
  - 范围角色：典型范围（`typical_range`）
  - 下限：0.1
  - 上限：500
  - 单位：kg/1,000 kg incoming seed-bearing material
  - 基准：覆盖干荚和果实型湿法提取的宽泛范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 非种子提取残余物（`extraction_residue_output`）

按去向记录果肉、荚、壳、果浆、发酵固体和其他非种子材料。销售型农业共产品需要有文件证明的接收人、用途和交接。

- 选定流：蔬菜种子提取产生的非种子材料＼
- 流属性/单位：Mass / kg on a declared moisture basis
- 数量规则：按材料类别和去向实测残余物质量，并与进入量和回收种子核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个提取批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_extraction_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定提取残余物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：999
  - 单位：kg/1,000 kg incoming seed-bearing material
  - 基准：回收种子和有文件证明的有用输出之外的剩余材料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 湿法提取废水（`extraction_wastewater_output`）

记录发酵、清洗和分离离开提取边界的废水，并声明处理、排放、再用或储存去向。

- 选定流：蔬菜种子湿法提取废水＼
- 流属性/单位：Volume / m3
- 数量规则：实测排放量或水平衡估计；适用时记录悬浮固体及处理或排放路径
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个提取批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_extraction_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定提取废水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：m3/1,000 kg incoming seed-bearing material
  - 基准：仅湿法提取路线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 提取搬运产生的颗粒物（`extraction_particulate_emission`）

当干法脱粒、开壳、输送或提取搬运的粉尘或颗粒物跨越边界时记录，并保留物种、粒径或方法基准和捕集系统。

- 选定流：种子提取向环境空气排放的颗粒物＼
- 流属性/单位：Mass / kg particulate matter
- 数量规则：使用实测、捕集质量平衡或方法计算的颗粒物释放量，并披露粒径基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个提取批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_extraction_records`
- 来源：
- 数量范围：暂定提取颗粒物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/1,000 kg incoming seed-bearing material
  - 基准：干法搬运和提取操作；以捕集或排放记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：蔬菜种子干燥、清选、分级和质量放行（`vegetable_seed_conditioning_and_grading`）

#### 输入

##### 产品流

###### 进入调制的原始提取种子（`raw_seed_conditioning_input`）

记录调制线接收的原始种子，包括水分、污染物、批次身份和预清选或临时存放状态。

- 选定流：调制前提取的原始蔬菜种子＼
- 流属性/单位：Mass / kg
- 数量规则：按每个调制批次实测进入种子质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个调制批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seed-processing-manual`
- 数量范围：暂定调制投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：2,000
  - 单位：kg/1,000 kg accepted conditioned seed
  - 基准：声明水分基准下的进入量；以匹配批次记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种子调制用电力（`conditioning_electricity_input`）

记录预清选、风筛清选、吸风、分离、输送、干燥风机、分级和检验设备的用电。

- 选定流：蔬菜种子调制用电力供应
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`electricity-supply`
- 数量规则：用电表记录或设备功率乘经核验的运行时间，并与加工量匹配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个调制批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seed-processing-manual`
- 数量范围：暂定调制用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kWh/1,000 kg accepted conditioned seed
  - 基准：清选、分级、风机、输送、检验和可归属干燥设备
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种子干燥用供给工艺热（`conditioning_heat_input`）

当场址接收热服务或实测供热流时，记录干燥供热。声明载体、进出口条件和水分减少量。

- 选定流：种子干燥用外购工艺热
- 流属性/单位：Energy / MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`purchased-process-heat`
- 数量规则：按干燥批次实测供热或经过验证的热平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个调制批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seed-processing-manual`; `fao-vegetable-seed-drying-storage`
- 数量范围：暂定干燥供热筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5,000
  - 单位：MJ/1,000 kg accepted conditioned seed
  - 基准：去除实测水分所需的供热；以设备和批次能源记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种子干燥用固定燃料（`conditioning_fuel_input`）

当热量在调制边界内由固定式干燥机或锅炉燃烧产生时，记录燃料。不得重复计算已表示为供给工艺热的燃料。

- 选定流：种子干燥用固定燃烧燃料＼
- 流属性/单位：质量或能源载体 / kg、L 或 MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`stationary-combustion-fuel`
- 数量规则：用燃料表、油箱记录或发票与干燥批次匹配，并换算到声明载体基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个调制批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：
- 数量范围：暂定干燥燃料筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：L/1,000 kg accepted conditioned seed
  - 基准：仅场内干燥燃料；以载体和计量记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调制用供给水（`conditioning_water_input`）

仅当路线使用湿法清选、脱黏或其他湿法步骤时，记录调制用水。干法调制有路线和设备声明时记录零或不适用。

- 选定流：蔬菜种子调制工艺水
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`process-water`
- 数量规则：按调制线和废水去向匹配的水表或批次用水记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个调制批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seed-processing-manual`
- 数量范围：暂定调制用水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：m3/1,000 kg accepted conditioned seed
  - 基准：仅湿法调制路线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 清选分级后的调制种子（`conditioned_seed_output`）

记录水分调整、清选、分级和放行前取样后的接收种子，处于可选处理、包衣、丸粒化或最终包装之前。

- 选定流：处理或包装前的调制分级蔬菜种子＼
- 流属性/单位：Mass / kg
- 数量规则：调制后按批次实测接收种子质量、水分、等级和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个调制批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seed-processing-manual`; `ista-seed-testing-rules`
- 数量范围：暂定调制种子回收筛选估计
  - 范围角色：典型范围（`typical_range`）
  - 下限：700
  - 上限：1,000
  - 单位：kg/1,000 kg incoming raw seed
  - 基准：水分调整和去除异物后的接收调制种子；以批次质量平衡替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 种子筛下物和非等级材料（`conditioning_screenings_output`）

按材料类别和去向记录杂草种子、其他作物种子、惰性物、过小种子、损伤种子及其他筛下物。有用共产品必须有文件证明的积极用途和交接。

- 选定流：种子调制筛下物和非等级材料＼
- 流属性/单位：Mass / kg on a declared moisture basis
- 数量规则：按材料类别和去向实测筛下物和非等级材料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个调制批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-seed-processing-manual`; `mass-balance-identity`
- 数量范围：暂定调制筛下物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg/1,000 kg incoming raw seed
  - 基准：共同水分基准下去除的异物和不合格种子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调制废水（`conditioning_wastewater_output`）

记录湿法清选或脱黏产生的废水及处理、排放、再用或储存去向。干法路线有路线证据时记录零或不适用。

- 选定流：蔬菜种子调制废水＼
- 流属性/单位：Volume / m3
- 数量规则：按调制批次和处理或排放记录实测排放量或水平衡估计
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个调制批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定调制废水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：m3/1,000 kg accepted conditioned seed
  - 基准：仅湿法调制路线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 调制产生的颗粒物（`conditioning_particulate_emission`）

记录吸风、筛分、输送、干燥和分级设备在捕集控制后的粉尘释放，并保留粒径或方法基准及捕集去向。

- 选定流：种子调制向环境空气排放的颗粒物＼
- 流属性/单位：Mass / kg particulate matter
- 数量规则：使用实测、捕集质量平衡或方法计算颗粒物释放量，并披露捕集和接收介质
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个调制批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：
- 数量范围：暂定调制颗粒物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/1,000 kg accepted conditioned seed
  - 基准：干法清选、吸风、干燥和分级作业
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：蔬菜种子处理、包装、储存和放行（`vegetable_seed_treatment_packaging_and_storage`）

#### 输入

##### 产品流

###### 进入最终准备的调制种子（`conditioned_seed_treatment_input`）

记录接收的调制种子转入处理、包衣、丸粒化、包装或门前储存，并使批次、水分、等级和质量状态与调制输出匹配。

- 选定流：最终准备前的调制分级蔬菜种子＼
- 流属性/单位：Mass / kg
- 数量规则：按批次和处理或包装批次实测进入种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个最终准备批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_packaging_records`
- 来源：`fao-seed-processing-manual`
- 数量范围：暂定最终准备投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：1,100
  - 单位：kg/1,000 kg released seed
  - 基准：加入产品、包装和有文件证明的损失前的调制种子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种子处理配方（`seed_treatment_input`）

只有声明产品状态包括处理时，才记录施加于种子的化学或生物处理，并保留配方、有效成分、载体、剂量、设备和处理批次。

- 选定流：蔬菜种子用处理配方＼
- 流属性/单位：配方和有效成分质量 / kg product；kg active substance
- 数量规则：按处理种子质量记录配方用量，并保留有效成分或生物组分身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个处理批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_packaging_records`
- 来源：`eu-vegetable-seed-directive`
- 数量范围：暂定种子处理筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg formulation/1,000 kg treated seed
  - 基准：仅处理路线；以产品标签、剂量和批次台账替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包衣、包膜或丸粒化材料（`seed_coating_pelleting_input`）

在放行前加入时，记录包衣聚合物、矿物、生物材料、胶黏剂、填料或其他丸粒化材料，并说明其质量是否计入声明净产品质量。

- 选定流：种子包衣、包膜或丸粒化材料＼
- 流属性/单位：Mass / kg
- 数量规则：按配方和处理或丸粒化批次实测材料质量，并区分种子质量和最终处理质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个最终准备批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_packaging_records`
- 来源：`fao-seed-processing-manual`
- 数量范围：暂定包衣和丸粒化筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg material/1,000 kg released seed
  - 基准：仅包衣、包膜或丸粒化路线；以配方和批次记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柔性种子包装（`flexible_packaging_input`）

记录放行前引入的柔性袋、袋装小包装、内衬、薄膜或其他柔性初级包装，包括材料、质量和是否可重复使用。

- 选定流：柔性包装功能
- 流属性/单位：Mass / kg packaging
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`flexible-packaging`
- 数量规则：按材料、批次和放行种子质量记录包装台账和包装记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个最终准备批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_packaging_records`
- 来源：`eu-vegetable-seed-directive`
- 数量范围：暂定柔性包装筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/1,000 kg released seed
  - 基准：放行前袋、袋装小包装、内衬和薄膜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 纸箱或盒包装（`carton_packaging_input`）

记录放行前使用的纸箱和盒，并记录材料、质量、重复使用和分配信息。

- 选定流：纸箱和盒包装功能
- 流属性/单位：Mass / kg packaging
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`carton-and-box-packaging`
- 数量规则：按放行种子质量分配包装台账和包装记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个最终准备批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_packaging_records`
- 来源：`eu-vegetable-seed-directive`
- 数量范围：暂定纸箱包装筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/1,000 kg released seed
  - 基准：放行前纸箱和盒
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 托盘或周转箱服务（`pallet_crate_input`）

记录放行前储存或发运使用的托盘和周转箱，包括重复使用次数、返还损失和分配基准。

- 选定流：托盘和周转箱包装功能
- 流属性/单位：Mass or item / kg or item
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`pallet-and-crate-packaging`
- 数量规则：用包装台账质量除以有文件证明的服务次数，并分配到放行种子批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个最终准备批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_packaging_records`
- 来源：`iso-14044-2006`
- 数量范围：暂定托盘和周转箱筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/1,000 kg released seed
  - 基准：放行前可重复使用和一次性托盘或周转箱服务
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理、包装和储存用电力（`final_preparation_electricity_input`）

记录处理、包衣、丸粒化、称量、装袋、封口、贴标、仓库通风和范围内门前储存用电。

- 选定流：种子处理、包装和门前储存用电力供应
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 组：`electricity-supply`
- 数量规则：用电表记录或经核验的设备运行时间，并分配到处理或放行批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个最终准备批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_packaging_records`
- 来源：`fao-vegetable-seed-drying-storage`
- 数量范围：暂定最终准备用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kWh/1,000 kg released seed
  - 基准：处理、包装、仓库和门前储存操作
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 放行的可上市蔬菜种子（`vegetable_seed_release_output`）

将终端输出设为声明放行门的合格种子净质量，并在数据包中保留物种、批次、质量、处理、包装和水分限定信息。

- 选定流：甜菜种子除外的可上市蔬菜种子批次＼
- 流属性/单位：Mass / kg
- 数量规则：按声明水分基准将完整路线缩放为 1 kg 接收放行种子
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：等于 1 kg 参考流的终端输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：
- 来源：`mass-balance-identity`; `eu-vegetable-seed-directive`

##### 废物流

###### 不合格或转用途种子批次（`failed_seed_lot_output`）

记录不符合声明放行标准或转向有文件证明的非播种用途的种子。除非同一声明批次重新调制并通过放行检查，否则不得将其作为放行种子计入。

- 选定流：不合格、拒收或转用途蔬菜种子批次＼
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向实测不合格或转用途种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个最终准备批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_packaging_records`
- 来源：`eu-vegetable-seed-directive`; `ista-seed-testing-rules`
- 数量范围：暂定不合格批次筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/1,000 kg conditioned seed
  - 基准：放行前不合格、损坏、过期或转用途种子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 放行前包装废物（`packaging_waste_output`）

记录放行前产生的损坏袋、边角料、拒收标签、破损纸箱和其他包装废物，包括回收或处理去向。

- 选定流：种子准备和放行产生的包装废物＼
- 流属性/单位：Mass / kg
- 数量规则：按材料、损坏或拒收原因和去向核对包装台账
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个最终准备批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_packaging_records`
- 来源：`mass-balance-identity`
- 数量范围：暂定包装废物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg/1,000 kg released seed
  - 基准：放行前损坏、拒收或裁切包装
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 处理和丸粒化颗粒物排放（`treatment_particulate_emission`）

记录处理或丸粒化边界在捕集控制后向外排出的空气颗粒物或处理粉尘，并保留处理身份和接收介质。

- 选定流：种子处理或丸粒化向环境空气排放的颗粒物＼
- 流属性/单位：Mass / kg particulate matter
- 数量规则：用实测、捕集质量平衡或方法计算处理或丸粒化释放量，并披露捕集和粒径基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个最终准备批次并换算为每 1 kg 放行种子
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_packaging_records`
- 来源：
- 数量范围：暂定处理颗粒物筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/1,000 kg released seed
  - 基准：处理、包衣、包膜或丸粒化操作
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共用田间和加工操作 | 在可测量时按物种、品种或杂交种、种子等级、批次、路线和批处理分拆记录；在使用分配前直接归属投入和输出。 | `iso-14044-2006` |
| `allocation_marketable_co_products` | 种子作物的食用果实、蔬菜材料或其他有用输出 | 只有当数量、质量、接收人、用途和交接都有记录时，才将非种子输出视为共产品。无法分拆负荷时使用声明的物理或经济分配基准，并披露敏感性。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_field_residue` | 田间残余物和未收获生物量 | 留在田间或还田的残余物属于种子作物前景，不作为外运共产品计入。移出的材料应分为有文件证明的有用输出、处理或废物去向。 | `ipcc-2019-managed-soils-n2o`; `iso-14044-2006` |
| `allocation_conditioning_and_packaging` | 共用调制、处理、包装、储存和检验设备 | 按实测种子质量、机器时间或有文件证明的服务次数分配共用电表、设备、包装服务和储存；有匹配批次数据时，不得把全部共用负荷分给一个批次。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_failed_lots` | 不合格或转用途批次 | 将不合格、再处理、转用途和放行种子作为不同输出。再处理批次承担额外作业负荷；转用途批次只有明确下游用途后才可获得相应产品信用。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_field_activity_records` | `vegetable_seed_field_multiplication` | 播种种子；养分或土壤改良剂；灌溉；田间燃料；作物保护；土地 | 田间日志、投入发票、产品标签、施用记录、计量表或承包商记录 | field_id; protected_or_open_route; area; species; variety_or_hybrid; seed_class; parent_role; input_product; amount; nutrient_basis; active_ingredient; date; operation; water_source; contractor_scope | 将实物投入、田块面积和作业记录核对到每个田块及作物周期 | kg; kg nutrient; L; MJ; m3; ha | 每次施用或作业 | 完整作物周期 | 每个代表性田块或保护地单元 | 按实物身份和田块求和；不合并产品地计算养分总量；按同周期接收放行种子归一化 | 有日期的日志；发票；标签；校准计量表；施用记录 |
| `cp_seed_field_output_records` | `vegetable_seed_field_multiplication` | 收获种子载体材料；田间残余物 | 地磅、产量监测、收获票据、水分检验、残余物记录或去向记录 | field_id; harvest_date; seed_bearing_organ; maturity; harvested_mass; moisture; accepted_transfer_mass; residue_mass; residue_fate; co_product_destination | 将收获和残余物记录与田块面积、作物周期和提取批次匹配 | kg; %; ha | 每次收获和残余物转移 | 完整作物周期 | 所有代表性田块 | 分别汇总每次收获和每个去向，并关闭田间到提取的转移质量 | 地磅或产量监测校准；水分检验；去向或销售记录 |
| `cp_seed_field_emission_activity` | `vegetable_seed_field_multiplication` | 氧化亚氮；氨；硝酸盐损失 | 养分、土壤、水分、天气、残余物和排放模型记录 | fertilizer_product; N_input; organic_N; residue_N; application_method; timing; soil; climate; drainage; runoff; factor_set; model_version | 用一个声明的、适用于地理范围的方法计算各排放，并使用同一套养分活动数据 | kg N; kg emission; ha | 每次事件和作物周期计算 | 完整作物周期 | 所有代表性田块 | 按田块和路径计算，再按同周期接收放行种子归一化 | 源记录；因子来源；模型文件；方法审查 |
| `cp_harvest_extraction_records` | `vegetable_seed_harvest_and_extraction` | 收获材料；湿法提取水；提取助剂；电力；原始种子；残余物；废水；颗粒物 | 批次票据、地磅、水分检验、水表、配方台账、电表和去向记录 | batch_id; source_field; seed_bearing_organ; incoming_mass; incoming_moisture; water; aid_product; electricity; recovered_seed; recovered_moisture; residue; wastewater; capture; destination | 核对每个提取批次，并区分干法、湿法、发酵和机械路线 | kg; %; m3; kg product; kWh | 每个提取批次 | 所有调制前提取 | 所有纳入的设备和批次 | 在声明基准下将进入质量与回收种子、有用输出、残余物、废水和实测损失闭合 | 校准地磅和计量表；水分检验；配方标签；去向和处理记录 |
| `cp_conditioning_records` | `vegetable_seed_conditioning_and_grading` | 原始种子；电力；热；干燥燃料；水；调制种子；筛下物；废水；颗粒物 | 批次票据、地磅、水分和纯度检验、计量表、燃料记录和去向记录 | batch_id; incoming_mass; incoming_moisture; electricity; heat; fuel; water; accepted_mass; accepted_moisture; grade; screenings; rejects; wastewater; capture; sample_mass | 将调制投入、输出、质量检验和计量表与同一批次和批次身份匹配 | kg; %; kWh; MJ; L; m3 | 每个批次或计量周期 | 所有放行前调制 | 所有纳入的生产线和批次 | 汇总匹配批次，并按实测质量或经核验的机器时间分配共用计量 | 校准地磅；水分和纯度检验；计量核对；去向证据 |
| `cp_treatment_packaging_records` | `vegetable_seed_treatment_packaging_and_storage` | 调制种子；处理；包衣或丸粒化；包装；电力；放行种子；不合格批次；包装废物；处理颗粒物 | 处理日志、配方标签、地磅、包装台账、仓储记录、电表、质量证书和废物记录 | lot_id; incoming_seed_mass; treatment_product; active; coating_material; dose; packaging_material; packaging_mass; reuse_cycles; electricity; storage_start; storage_end; released_mass; moisture; germination; purity; failed_mass; waste_mass; dust_capture; destination | 核对每个处理、包装、储存和放行批次，保留批次身份和最终质量状态 | kg; %; kWh; item; days | 每个批次和放行批 | 所有纳入的处理、包装和门前储存 | 所有纳入的批次和设备 | 按批次和材料求和；按有文件证明的服务次数分配重复使用包装；将进入种子闭合到放行、拒收和损失 | 配方和包装标签；校准地磅；质量证书；仓储日志；废物和回收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_field_to_reference_seed` | 田间投入、土地、残余物和排放 | 同周期作物量 / 同周期接收放行种子 × 1 kg | 田间数量；面积；接收放行种子；水分基准 | 每 1 kg 放行种子的数量 | `mass-balance-identity` |
| `calc_nutrient_product_basis` | 肥料和土壤改良剂投入 | 汇总每种产品质量，并依据声明产品标签或化验计算养分；产品和养分总量作为不同字段保留 | 产品质量；养分比例或化验；报告基准 | 按来源的产品质量和 kg N、P、K 或有机质 | `mass-balance-identity` |
| `calc_managed_soil_emissions` | 氧化亚氮、氨和硝酸盐损失 | 对养分投入、残余物去向、施用实践、土壤、气候、排水和径流应用所选地理适用方法，并报告方法和因子版本 | 田间作业；土壤和水分数据；残余物去向；因子 | 按路径和接收介质的排放量 | `ipcc-2019-managed-soils-n2o` |
| `calc_extraction_mass_balance` | 提取输出 | 进入的种子载体材料 = 回收原始种子 + 有文件证明的有用输出 + 残余物 + 废水相关固体 + 共同基准下的实测损失 | 进入质量和水分；输出和损失记录 | 提取输出及差额核对 | `mass-balance-identity` |
| `calc_conditioning_mass_balance` | 调制输出 | 进入原始种子 = 接收调制种子 + 筛下物和拒收物 + 水分损失 + 共同水分基准下的其他实测损失 | 进入和接收质量；水分；筛下物；拒收物；损失记录 | 调制输出及差额核对 | `mass-balance-identity` |
| `calc_treatment_and_packaging_mass` | 处理、包衣、丸粒化和包装 | 将进入种子、加入的处理或包衣材料、最终净种子、包装和废物保持为不同数量，并报告添加物是否计入净产品质量 | 批次台账；配方剂量；包装台账；最终质量 | 处理或包装批次质量和材料清单 | `mass-balance-identity` |
| `calc_reusable_packaging` | 重复使用托盘和周转箱 | 包装质量 / 有文件证明的服务次数，并将返还损失分配给适用批次 | 包装质量；服务次数；损失；批次质量 | 每单位放行种子的包装服务 | `iso-14044-2006` |
| `calc_reference_scaling` | 终端放行种子 | 以 1 kg / 实测接收放行种子质量缩放全部前景数量，保留水分和质量限定信息 | 接收放行种子；全部归一化数量 | 1 kg 参考流清单 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | Evidence |
| --- | --- | --- | --- |
| `dq_species_variety_identity` | 参考流、田间批次和所有种子输出 | 识别物种、品种或杂交种、亲本角色、种子等级、世代、播种用途和种子载体器官；不得用食用谷物、甜菜种子或其他蔬菜物种替代。 | 批次记录；品种或亲本记录；产品说明 |
| `dq_lot_traceability` | 所有过程转移和放行批次 | 从田间建植至收获、提取、调制、处理、包装、检验、储存以及放行或转用途，保留可追溯批次标识。 | 田间到批次台账；批次票据；证书 |
| `dq_moisture_and_mass_basis` | 所有质量流和换算 | 记录种子载体材料、原始种子、调制种子和放行种子的校准质量测量和水分，并核对干基或标准水分换算。 | 地磅校准；水分检验；质量平衡表 |
| `dq_temporal_geographic_coverage` | 田间和设施记录 | 对声明地理范围和技术使用完整作物周期及放行前批次记录；披露代理季节、不完整田块、承包商覆盖和储存时间。 | 有日期的田间、批次、计量和仓储记录 |
| `dq_quality_release_evidence` | 放行、不合格和转用途批次 | 保留适用于声明市场或认证方案的取样、分析纯度、其他种子、发芽率或活力、健康、处理和标签证据。 | `ista-seed-testing-rules`; `eu-vegetable-seed-directive` |
| `dq_completeness_and_fate` | 所有投入、残余物、筛下物、废水、包装和不合格批次 | 将每个材料和能源投入以及每个非参考输出核对到有文件证明的去向；区分零、不适用、估算、代理和缺失值。 | 过程记录；去向证据；质量平衡结果 |
| `dq_identity_resolution` | 参考流和所有库存行 | 在最终 TIDAS 过程发布前，将每个 parameterized 行和证据缺口实物流解析为相容的已核验 UUID；在此之前保持证据缺口覆盖可见。 | 身份审查记录和 Flow Set 解析 |

## 9. 校验规则

校验输出必须报告接受的输入、已执行校验、跳过的校验、发现和完整性。身份证据缺口、未解释的质量差、缺失的批次质量证据或不确定的去向校验都应保留为发现，不得转换为零。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 终端放行种子 | 只有一个终端蔬菜种子输出在缩放后等于 1 kg，并声明物种、品种或杂交种、种子等级、水分、纯度、发芽率或活力、处理、包装、批次和门限定信息。 | `mass-balance-identity`; `eu-vegetable-seed-directive` |
| `validation_seed_scope` | PCR 身份和过程图 | 确认记录是用于播种的蔬菜种子，并排除甜菜种子、营养繁殖材料、观赏种子、食物或饲料产品以及放行后的作物生产。 | `eu-vegetable-seed-directive` |
| `validation_field_cycle` | 田间繁育 | 确认投入、面积、隔离和授粉记录、收获、残余物及田间排放属于同一物种或品种或杂交种和同一作物周期。 | `fao-seed-systems`; `oecd-seed-schemes` |
| `validation_extraction_balance` | 收获和提取 | 在共同水分基准下，将进入的种子载体材料与提取原始种子、有用输出、残余物、废水和实测损失核对。 | `mass-balance-identity` |
| `validation_conditioning_balance` | 干燥、清选和分级 | 将原始种子与调制种子、筛下物、拒收物、水分损失、废水和颗粒物捕集核对，并解释剩余差额。 | `mass-balance-identity` |
| `validation_lot_quality` | 取样、检验、处理、包装和放行 | 确认均质批次身份、取样和检验记录、纯度、发芽率或活力、健康、处理披露、包装、封口或标签信息以及适用市场方案要求的净数量。 | `ista-seed-testing-rules`; `eu-vegetable-seed-directive` |
| `validation_allocation_and_fate` | 共产品、残余物、不合格批次和废物 | 确认分配基准、有文件证明的接收人或去向、处理或排放路线，并避免重复计算还田残余物、再处理批次、共用能源、重复使用包装和废物。 | `iso-14044-2006`; `mass-balance-identity` |
| `validation_flow_identity` | 每个参考流和库存流 | 仅接受 `fixed` 的已核验 UUID 和 `parameterized` 的适用现有 Flow Set；否则保留为未映射覆盖，并阻止最终数据集发布。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 蔬菜种子生产和放行批次前景数据集 |
| downstream_use | `secondary_dataset`；经过审查、身份解析和发布后可作为 `background_dataset` |
| allowed_use | 用于蔬菜种子批次、种子供应和下游蔬菜生产的 LCA，且保留声明物种、品种或杂交种、种子等级、地理范围、作物周期、路线、水分、质量、处理、包装、分配和放行门 |
| excluded_use | 甜菜种子；营养繁殖材料；观赏种子；食物或饲料谷物；食用蔬菜；育种或种质库研究材料；放行后的播种或作物生产影响；门外配送或零售；以及产品状态、批次身份、质量证据或质量平衡证据缺口的数据集 |
| required_metadata | PCR id；CPC reference；物种；品种或杂交种；亲本角色；种子等级和世代；地理范围；田间或保护地路线；作物周期日期；隔离和授粉做法；面积；收获和提取路线；产量；水分；纯度；发芽率或活力；健康；处理或包衣；包装；储存时间；残余物和废物去向；分配；Flow Set 选择；采集覆盖；以及 DQR |
| required_quality_disclosure | 田间和设施覆盖；实测与计算值；代理和估计字段；水分和质量平衡结果；取样和批次质量证据；排放方法；处理和包装记录；分配驱动因素；以及超出范围的情况 |
| update_trigger | 新的经审查种子生产或处理证据；路线、物种范围、处理、包装、储存或门的实质变化；排放或质量方法修订；Flow Set 或 UUID 身份变化；或代表性记录超出暂定 QA 范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-systems` | official_guidance | FAO, *What are seed systems?*, <https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/tools-guidelines/what-are-seed-systems/en/> | 种子身份、繁育、正式和地方种子系统阶段、质量属性及储存背景 |
| `oecd-seed-schemes` | official_guidance | OECD, *Seeds — OECD Seed Schemes*, <https://www.oecd.org/en/topics/seeds.html> | 品种身份和纯度、田间检查、认证及蔬菜种子方案背景 |
| `fao-seed-processing-manual` | handbook | FAO, *Seed Production Manual*, seed conditioning and processing chapter, <https://coin.fao.org/coin-static/cms/media/16/13666518481740/seed_enterprises_enhacement_and_development_project_in_sierra_leone_mission_1_report_.pdf> | 收获搬运、开壳或脱粒、干燥、清选、分级、处理、包装和储存过程分解 |
| `fao-vegetable-seed-drying-storage` | official_guidance | FAO, *Practical Guide for drying and storing vegetable seeds in organic small-scale and on-farm seed production*, <https://www.fao.org/family-farming/detail/en/c/1709501/> | 蔬菜种子干燥、水分、活力、储存和批次质量背景 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration*, <https://www.fao.org/4/X0490E/X0490E00.htm> | 作物水分平衡和灌溉记录方法背景 |
| `ista-seed-testing-rules` | official_guidance | International Seed Testing Association, *International Rules for Seed Testing*, <https://www.seedtest.org/en/publications/international-rules-seed-testing.html> | 取样、纯度、其他种子、发芽率、种子健康检验和报告方法 |
| `eu-vegetable-seed-directive` | standard | European Union, Council Directive 2002/55/EC on the marketing of vegetable seed, <https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32002L0055> | 蔬菜种子范围、品种身份和纯度、发芽率、均质批次、取样、包装、封口、标签和处理种子披露 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤氮排放、残余物氮、直接和间接路径及方法披露 |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, <https://www.iso.org/standard/38498.html> | 分拆和分配层级、数据质量、敏感性和披露 |
| `mass-balance-identity` | method_factor | 将质量守恒应用于匹配的种子作物、提取、调制、处理、包装和放行记录 | 输出核对、归一化和未解释差额校验 |
