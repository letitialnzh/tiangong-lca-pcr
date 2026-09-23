---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cauliflowers-and-broccoli
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 花椰菜和西兰花

## 1. 范围与适用性

本 PCR 用于编制在声明年度种植周期内生产的新鲜、未加工花椰菜和西兰花前景数据包。默认边界从种子或移栽苗可以在声明地块建立作物时开始，在可销售的花球、头状花序或小花以声明的农场门交付状态离开农场时结束。范围包括土壤准备、作物建立、田间管理、灌溉、施肥、作物保护、采收、修整、田间或场内分选，以及在交付前进行的初级清洗、冷却或包装。

花椰菜和西兰花都属于年度芸薹类作物，且以未成熟的花序结构采收，因此本类别共享核心前景核算模式。数据包必须明确所代表的产品；只有在投入、产量、质量标准和分配均已分别记录后，才可将两种产品汇总。种子繁育、外购种植材料之前的育苗、具有显著气候控制基础设施的保护地生产、配送、零售、烹饪、冷冻、干燥、腌制、发酵及其他加工不属于默认边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cauliflowers-and-broccoli |
| classification_refs | CPC 3.0: 01213 Cauliflowers and broccoli |
| covered_products | 在声明农场门交付点交付的新鲜可销售花椰菜花球、西兰花头或西兰花小花 |
| excluded_products | 作为种植材料销售的种子和移栽苗；其他甘蓝类蔬菜；加工、冷冻、干燥、腌制、发酵、烹饪或零售预制的花椰菜和西兰花 |
| representative_product | 农场门的新鲜可销售花椰菜或西兰花 |
| production_route | 年度土壤种植建立、田间管理、采收、修整和分选，以及可选的场内清洗、冷却或初级包装 |
| market_state | 产品在声明的品种、成熟度、等级、修整、清洗、冷却和包装状态下新鲜且未加工 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门交付点的新鲜可销售花椰菜或西兰花 |
| How much | 1,000 kg |
| How well | 产品新鲜、未加工，并符合声明的作物身份、成熟度、花球或小花等级、修整、缺陷容忍度和水分状态 |
| How long or cycle | 一个声明的年度种植周期和收获年度，在归一化前核对田间产出、废弃物和修整量 |
| reference_flow_link | `fresh_cauliflower_or_broccoli_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 农场门的新鲜花椰菜或西兰花 `58bab506-1b56-4206-97c8-d0d0f6391442` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品身份（花椰菜或西兰花）; 品种或变种; 生产地理范围; 作物年度和周期日期; 种植体系; 灌溉或雨养状态; 采收成熟度; 等级和大小; 修整状态; 清洗和冷却; 包装状态; 农场门交付点 |
| 绑定模式 | `fixed` |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 可销售花球或小花以及所有产品、废弃物和修整质量行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在声明的农场门状态下称量产品。归一化前分别保留采收量、可销售产出、废弃物、修整物和田间损失。 |
| `crop_identity_separation` | 花椰菜和西兰花记录 | 产品身份 | 声明产品 | 分别记录花椰菜和西兰花。只有在每种产品完成田间年度核算且声明汇总规则后才可汇总。 |
| `nutrient_product_basis` | 肥料和土壤改良剂投入 | 质量 | kg 产品和 kg 养分 | 分别记录配方产品质量和文件化养分浓度；计算 kg N、kg P2O5 和 kg K2O，不以一种养分基准替换另一种。 |
| `water_delivery_basis` | 灌溉和取水 | 体积 | m3 | 将按水源记录的取水量和田间供水量与降雨分开，并声明灌溉技术和计量基准。 |
| `land_occupation_basis` | 占用的作物地块 | 面积-时间 | m2*a | 在按作物周期和参考产出归一化前记录田块面积和占用周期。 |
| `moisture_and_trim_basis` | 采收、冷却、清洗和包装 | 质量和水分 | kg 和 percent | 保留原始质量以及测得的水分或吸水/失水。没有记录化核算时，不得把清洗或冷却的质量变化作为产品产量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可在声明生产地块建立作物的种子或移栽苗，并披露既有土地利用和育苗阶段 |
| starting_condition_role | 年度花椰菜或西兰花作物周期的开始 |
| product_classification_scope | CPC 3.0 01213 下的新鲜花椰菜和西兰花产品，直至农场门交付 |
| recursive_input_rule | 用作种植或市场投入的产品类别材料，按其实际交付状态记录并连接上游数据集；不在本记录内重新构造上游作物边界。 |
| upstream_dataset_requirement | 对跨越边界的种子或移栽苗、养分产品、作物保护产品、供水、燃料、电力、包装以及废物处理或运输服务，使用有代表性的上游数据集。 |
| disclosure | 声明产品身份、地块和生产地理范围、作物年度、品种、作物周期、种植材料、灌溉来源和方法、养分基准、作物保护方案、采收和分级方法、清洗或冷却、包装、产量、残余物和废弃物去向以及农场门状态。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_annual_crop` | 地块准备和作物生产 | 纳入从种植材料交付至采收期间声明年度作物周期的投入和排放；披露既有土地利用，并排除不相关的历史地块负荷。 | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_farm_gate` | 采收和初级处理 | 默认边界止于新鲜可销售花椰菜或西兰花在声明农场门的转移。仅当场内修整、分选、清洗、冷却和包装发生在交付前时才纳入。 | `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard` |
| `boundary_input_completeness` | 全部前景生产 | 对种植材料、养分、作物保护、灌溉、土地占用、田间能源、采收能源、初级处理公用工程、包装和田间直接排放提供数值、合理的零值或记录化排除说明。 | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_residue_fate` | 田间残余物、废弃物和修整物 | 识别每种残余物是还田、留在田间、饲喂、堆肥、处理、运输、出售还是丢弃。未限定去向的残余物不得视为副产品。 | `iso-14044-2006`; `fao-brassica-production-guidance` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment_and_field_management` | 作物建立和田间管理 | required | 每个纳入的地块和作物年度 | 前景生物生产管理 | 地块面积、作物周期和可销售作物产出 |
| `harvest_and_farm_gate_preparation` | 采收和农场门准备 | required | 每个纳入的采收批次 | 前景采收、修整、分选和交付 | 1,000 kg 可销售新鲜产品 |
| `on_farm_cooling_and_packaging` | 场内冷却和初级包装 | conditional | 清洗、冷却或包装在农场门转移前发生时 | 前景初级处理 | 声明交付点的包装或冷却产出 |

### 过程：作物建立和田间管理（`crop_establishment_and_field_management`）

#### 输入

##### 产品流

###### 种子或移栽苗种植材料（`planting_material_input`）

种子或移栽苗在被接受用于声明地块建立作物时跨越边界。记录实际使用的形态和产品身份。

- 选定流：花椰菜或西兰花种子或移栽苗材料
- 流属性/单位：质量或存活植株数 / kg 或 plant
- 数量规则：按地块记录采购或内部转移量、存活单元数以及拒收或失败的种植单元。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_planting_material_records`
- 来源：`fao-brassica-production-guidance`
- 数量范围：种植材料筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1
  - 上限：150000
  - 单位：存活植株或 g 种子/1,000 kg 产品
  - 基准：每 1,000 kg 农场门可销售产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`crop_establishment_and_field_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_and_amendment_records`
- 来源：`ipcc-2019-managed-soils-n2o`; `fao-brassica-production-guidance`
- 数量范围：氮投入筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg N/ha
  - 基准：代表性作物地块
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：磷投入筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg P2O5/ha
  - 基准：代表性作物地块
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：钾投入筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：700
  - 单位：kg K2O/ha
  - 基准：代表性作物地块
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：有机改良剂筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg 产品/ha
  - 基准：代表性作物地块
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water_input`）

记录按水源供应到作物的水，并与降雨和水源取水分开。

- 选定流：供应给作物的灌溉水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：按地块和作物周期求和计量或有记录依据的供水量；单独记录泵送能源。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_water_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：灌溉水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1500
  - 单位：m3/ha
  - 基准：代表性作物地块和作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物保护产品（`crop_protection_input`）

按配方以及可获得的有效成分记录每一种除草剂、杀虫剂、杀菌剂、生物防治剂或助剂。

- 选定流：作物保护产品
- 流属性/单位：质量 / kg 配方产品
- 数量规则：核对采购、施用、库存和田间记录；另行保留有效成分浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-brassica-production-guidance`
- 数量范围：作物保护产品筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg 配方产品/ha
  - 基准：代表性作物地块
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间作业燃料（`field_energy_input`）

记录土壤准备、种植、施肥、喷施、灌溉泵送和田间维护使用的移动机械燃料。具有实质影响的田间电力在前景数据包中作为单独能源载体记录。

- 选定流：移动机械燃料
- 流属性/单位：质量或体积 / kg 或 L
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：使用机械、承包商、燃料、计量或发票记录，并按地块面积或采收质量分配共享作业。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-brassica-production-guidance`
- 数量范围：田间能源筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：600
  - 单位：kWh 或 L/ha
  - 基准：代表性作物地块和作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 占用农业土地（`land_occupation_input`）

记录声明作物周期使用的地块面积和占用时间。

- 选定流：农业土地占用
- 流属性/单位：面积-时间 / m2*a
- 数量规则：地块面积乘以声明的作物占用周期；只有在土地利用表达中明确纳入时才包括休耕或间作期间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_and_output_records`
- 来源：`fao-brassica-production-guidance`
- 数量范围：占用面积筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：100
  - 上限：100000
  - 单位：m2*a/1,000 kg 产品
  - 基准：参考产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 基本流

###### 管理土壤直接氧化亚氮（`direct_n2o_emission`）

使用选定的 IPCC 方法层级，根据已核算的氮投入计算土壤直接 N2O，并披露因子和换算。

- 选定流：管理农业土壤向空气排放的氧化亚氮
- 流属性/单位：质量 / kg N2O-N
- 数量规则：对核算的田间氮应用选定方法因子；仅在接收数据集需要时将 N2O-N 转换为 N2O。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_fertilizer_and_amendment_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：氮-空气排放筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg 物质/1,000 kg 产品
  - 基准：核算的田间氮和参考产出
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 数量范围：土壤直接 N2O 筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg N2O-N/1,000 kg 产品
  - 基准：核算的田间氮和参考产出
  - 基准类型：氮投入（`n_input`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ipcc-2019-managed-soils-n2o`

###### 氨排放（`field_nitrogen_emissions`）

当选定方法或前景数据包包含向空气排放的氨时报告，并保留污染物种类和接收介质。任何氮氧化物种类均是单独的前景要求，本氨绑定不代表氮氧化物。

- 选定流：管理农业土壤向空气排放的氨
- 流属性/单位：质量 / kg 物质
- 数量规则：根据文件化氮投入、施用方法和选定排放因子计算氨排放；其他氮氧化物种类分别记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_fertilizer_and_amendment_records`
- 来源：`ipcc-2019-managed-soils-n2o`

##### 产品流

###### 分级前采收的花椰菜或西兰花（`harvested_crop_output`）

该内部产出是离开地块、尚未进行修整、分级和农场门拒收判定的称量作物。

- 选定流：采收的花椰菜或西兰花，田间产出
- 流属性/单位：质量 / kg
- 数量规则：按地块、采收日期、产品身份和批次汇总经校准的秤重或采收票据质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收活动以及每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_and_output_records`
- 来源：`fao-brassica-production-guidance`
- 数量范围：采收至可销售产出筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：3000
  - 单位：kg 采收作物/1,000 kg 可销售产品
  - 基准：已核对的田间产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 田间残余物和不可销售作物材料（`field_residue_output`）

记录留在田间或采收时移出的叶、茎、不成熟花球和其他作物材料，并声明去向。

- 选定流：花椰菜或西兰花田间残余物和不可销售作物材料
- 流属性/单位：质量 / kg 湿物质
- 数量规则：根据田间和采收记录计量或计算残余物；分别报告还田、移出、饲喂、堆肥、处理和处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_fate_records`
- 来源：`fao-brassica-production-guidance`
- 数量范围：残余物和不可销售材料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2500
  - 单位：kg 湿物质/1,000 kg 可销售产品
  - 基准：已核对的田间和采收产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 修整物和分级废弃物（`trim_and_reject_output`）

将分选和准备过程中拒收或修整的产品与田间残余物分开记录，并识别其去向。

- 选定流：花椰菜或西兰花修整物和分级废弃物
- 流属性/单位：质量 / kg 湿物质
- 数量规则：根据进入分级的质量和可销售产出核对拒收物和修整物批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_fate_records`
- 来源：`usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- 数量范围：修整和分级废弃物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg 湿物质/1,000 kg 可销售产品
  - 基准：进入分级的采收作物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 产品流

###### 农场门可销售新鲜产品交付（`marketable_farm_gate_output`）

该产出是经过范围内采收、修整、分级、清洗、冷却和初级包装后的声明参考产品。

- 选定流：农场门的新鲜可销售花椰菜或西兰花 `58bab506-1b56-4206-97c8-d0d0f6391442`
- 流属性/单位：质量 / kg
- 绑定模式：`fixed`
- 数量规则：使用质量和等级验收后的经校准农场门或发运秤重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_farm_gate_output_records`
- 来源：`usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- 数量范围：可销售产出筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：950
  - 上限：1100
  - 单位：kg/1,000 kg 参考产品
  - 基准：已验收农场门产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：采收和农场门准备（`harvest_and_farm_gate_preparation`）

#### 输入

##### 产品流

###### 进入准备的采收作物（`harvested_crop_input`）

采收的花椰菜或西兰花根据相应的地块年度和批次记录进入准备过程。

- 选定流：采收的花椰菜或西兰花，田间产出
- 流属性/单位：质量 / kg
- 数量规则：等于相同产品、批次和采收期间记录的称量田间产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_and_output_records`
- 来源：`fao-brassica-production-guidance`
- 数量范围：采收输入筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：3000
  - 单位：kg/1,000 kg 可销售产品
  - 基准：采收作物输入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 采收作业燃料或电力（`harvest_energy_input`）

记录采收机械、承包采收、输送设备以及田间至农场门处理所用燃料或电力。

- 选定流：采收用移动机械燃料或电力
- 流属性/单位：质量或能量 / L、kg 或 kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：使用计量、承包商、机械或发票记录，按采收批次或作物产出分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_handling_energy_records`
- 来源：`fao-brassica-production-guidance`
- 数量范围：采收能源筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：kWh 或 L/1,000 kg 可销售产品
  - 基准：采收和田间至门处理
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 送入可选初级处理的可销售产品（`conditioning_input_output`）

当范围包括清洗、冷却或包装时，已分级的可销售产品在不改变产品身份的情况下交给该过程。

- 选定流：用于初级处理的分级新鲜花椰菜或西兰花
- 流属性/单位：质量 / kg
- 数量规则：等于进入可选初级处理过程的已接收分级质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_farm_gate_output_records`
- 来源：`usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- 数量范围：分级产品筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：950
  - 上限：1100
  - 单位：kg/1,000 kg 可销售产品
  - 基准：已验收分级产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 采收和准备损失（`harvest_preparation_loss`）

记录离开采收和准备边界的损失，包括损坏花球、掉落产品和调查后仍无法解释但已声明去向的质量差额。

- 选定流：有明确去向的采收和准备损失
- 流属性/单位：质量 / kg 湿物质
- 数量规则：根据采收输入、可销售产出、已记录修整物和废弃物核对后的差额计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_reject_fate_records`
- 来源：`mass-balance-identity`
- 数量范围：准备损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/1,000 kg 可销售产品
  - 基准：采收作物输入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：场内冷却和初级包装（`on_farm_cooling_and_packaging`）

#### 输入

##### 产品流

###### 用于清洗或冷却的分级产品（`graded_product_for_conditioning`）

仅当清洗、水冷、强制风冷或其他初级处理发生在农场门交付前时纳入该输入。

- 选定流：用于初级处理的分级新鲜花椰菜或西兰花
- 流属性/单位：质量 / kg
- 数量规则：称量进入处理线的已接收分级产品，并保留批次身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- 数量范围：初级处理输入筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：950
  - 上限：1100
  - 单位：kg/1,000 kg 可销售产品
  - 基准：进入处理的已验收分级产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级处理用水（`conditioning_water_input`）

记录清洗、水冷或卫生处理时跨越初级处理边界的水。

- 选定流：清洗或冷却用工艺水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量规则：使用计量、批次或水箱记录，并区分补充水、循环水和废水排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-brassica-production-guidance`
- 数量范围：初级处理用水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：m3/1,000 kg 可销售产品
  - 基准：清洗和冷却线吞吐量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级处理电力（`conditioning_electricity_input`）

记录农场门交付前泵、制冷、强制风冷、照明和输送设备使用的电力。

- 选定流：初级处理用外购电力
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：按产品吞吐量和处理时间分配计量或设备记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-brassica-production-guidance`
- 数量范围：初级处理电力筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kWh/1,000 kg 可销售产品
  - 基准：处理线吞吐量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级包装材料（`primary_packaging_input`）

记录农场门转移前跨越边界的包装材料，包括周转箱、薄膜、纸箱、标签和可重复使用容器服务。

- 选定流：初级包装功能和材料
- 流属性/单位：质量 / kg 包装材料
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`rigid-container-packaging`
- 数量规则：按材料和包装单元核对采购、退回、重复使用和丢弃的包装。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- 数量范围：初级包装筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg/1,000 kg 可销售产品
  - 基准：声明的包装产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 废物流

###### 初级处理和包装废水或废弃产品（`conditioning_waste_output`）

分别记录废水、清洗固体、损坏产品和废弃包装，并识别接收处理设施或去向。

- 选定流：有明确去向的初级处理废水、固体或废弃产品
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：根据生产线记录计量或计算，并与初级处理输入和农场门产出核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门可销售产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`mass-balance-identity`
- 数量范围：初级处理废物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 或 m3/1,000 kg 可销售产品
  - 基准：初级处理输入和产出核对
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 产品流

###### 冷却或包装后的农场门产品（`cooled_or_packed_farm_gate_output`）

该条件性产出是经过范围内清洗、冷却和初级包装后的同一参考产品，并声明最终状态。

- 选定流：场内初级处理后的新鲜花椰菜或西兰花
- 流属性/单位：质量 / kg
- 数量规则：使用处理和包装后的最终合格发运或农场门秤重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_farm_gate_output_records`
- 来源：`usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard`
- 数量范围：处理后产出筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：950
  - 上限：1100
  - 单位：kg/1,000 kg 参考产品
  - 基准：已验收处理后农场门产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_priority` | 共享田间和处理作业 | 只要有独立计量，优先拆分田间作业、采收批次、产品身份、处理批次和包装记录。 | `iso-14044-2006` |
| `allocation_cauliflower_broccoli_aggregation` | 同一农场或共享作业生产的花椰菜和西兰花 | 在库存核对期间保持花椰菜和西兰花分开。只有完成产品特定记录后，才按声明质量或其他合理分配基准汇总。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_rejects_and_residues` | 废弃物、修整物和田间残余物 | 除非有文件化的买方、数量、规格和去向证明其为副产品，否则将废弃物和残余物视为废物。需要分配时，记录物理或经济基准及敏感性。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `crop_establishment_and_field_management` | planting material | purchase, nursery, and planting record | field_id; product; cultivar; seed_or_transplant_form; lot; viable_units; mass; date; failures; replacements | reconcile invoices, labels, planting logs, and field acceptance | plant; g; kg | per planting event | complete crop establishment | every represented field | sum by product and field and preserve failed or replaced units | labels, invoices, planting logs, lot records |
| `cp_fertilizer_and_amendment_records` | `crop_establishment_and_field_management` | nutrients and soil amendments | invoice, label, application, and laboratory record | field_id; date; product; product_mass; N; P2O5; K2O; dry_matter; application_method; incorporation; source | reconcile purchases, applications, nutrient analyses, and stock movements | kg product; kg nutrient; percent | per application | complete crop cycle | every represented field | sum by nutrient and product after field-year reconciliation | invoices, labels, analyses, application logs |
| `cp_irrigation_and_water_records` | `crop_establishment_and_field_management` | irrigation and withdrawal | meter, pump, invoice, or water-right record | field_id; source; meter; date; withdrawal; delivered_volume; pumping_energy; method; rainfall_basis | use calibrated meter or documented source and distinguish withdrawal from delivery | m3; kWh | per event or period | irrigation season and crop cycle | each field and water source | sum by source and separate withdrawal, delivery, and return | meter calibration, readings, invoices, water records |
| `cp_crop_protection_records` | `crop_establishment_and_field_management` | crop protection | purchase and application record | field_id; date; formulation; active_ingredient; product_mass; concentration; area; method; target; re-entry or disposal | reconcile product, active ingredient, application, and stock records | kg product; kg active ingredient; ha | per application | complete crop cycle | every represented field | sum by formulation and active ingredient and retain application date | labels, invoices, application logs, licensed applicator records |
| `cp_field_energy_records` | `crop_establishment_and_field_management` | field energy | fuel, machine, contractor, or meter record | field_id; date; operation; machine; fuel_or_electricity; quantity; area; harvested_mass | use machine logs, contractor invoices, fuel records, or meters | L; kg; kWh; MJ | per operation or period | complete crop cycle | field and farm | allocate shared operation to fields by area or measured output | invoices, telematics, fuel logs, meter records |
| `cp_field_and_output_records` | `crop_establishment_and_field_management` | land, crop output, and field residue | field map, harvest, and residue record | field_id; product_identity; cultivar; area; dates; crop_duration; harvested_mass; field_loss; residue_mass; moisture; fate | combine field map, calibrated scales, harvest tickets, and residue disposition | ha; date; kg; percent | per harvest and annual close | full crop year | every represented field | reconcile each product and field before cross-farm aggregation | field map, scale calibration, harvest tickets, disposition records |
| `cp_harvest_and_handling_energy_records` | `harvest_and_farm_gate_preparation` | harvest and handling energy | machine, contractor, meter, or invoice record | lot_id; date; operation; machine; carrier; quantity; harvested_mass; duration | link energy record to harvest lot or allocate by documented throughput | L; kg; kWh; MJ | per harvest event or period | harvest window | harvest operation and facility | sum by lot and operation and disclose allocation | invoices, machine logs, meters, throughput records |
| `cp_residue_and_reject_fate_records` | `harvest_and_farm_gate_preparation` | field residues, trims, rejects, and losses | lot, field, waste, feed, compost, or transfer record | field_or_lot; stream; mass; moisture; reason; fate; destination; date | retain scale ticket, field log, transfer, sales, treatment, or disposal evidence | kg; percent | per event or campaign | crop cycle and harvest | every field and handling line | sum by stream and fate; do not merge with accepted product | scale tickets, disposition records, receipts, treatment records |
| `cp_conditioning_and_packaging_records` | `on_farm_cooling_and_packaging` | water, electricity, packaging, wastewater, and conditioning output | batch, meter, packaging, and waste record | batch_id; input_mass; water; electricity; cooling_time; packaging_type; packaging_mass; output_mass; reject_mass; wastewater; destination | link batch records to lot and reconcile input, utilities, packaging, wastes, and output | kg; m3; kWh; h | per batch or shift | complete in-scope conditioning period | each line and cold room | aggregate only after batch-level reconciliation | calibrated scales, meters, packaging issue records, waste receipts |
| `cp_farm_gate_output_records` | `harvest_and_farm_gate_preparation` | marketable reference output | dispatch, scale, and quality record | lot_id; product_identity; source_field; date; mass; grade; maturity; trim_state; wash_state; cooling_state; packaging_state; destination | use calibrated dispatch scale and product acceptance record | kg; percent | per lot or dispatch | complete harvest and hand-off period | farm and declared gate | sum accepted lots and preserve product-specific qualifiers | scale calibration, grade sheet, dispatch ticket |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_equivalent` | fertilizer and amendment inputs | 配方产品质量乘以文件化养分比例得到养分当量；分别保留产品和养分数值。 | product mass; nutrient analysis; application record | kg N、kg P2O5 和 kg K2O by field-year | `ipcc-2019-managed-soils-n2o`; `fao-brassica-production-guidance` |
| `calc_land_occupation` | field land occupation | 地块面积乘以声明的占用时间，并按可销售参考产出归一化。 | field area; crop duration; crop output | m2*a per reference output | `fao-brassica-production-guidance` |
| `calc_direct_soil_n2o` | managed-soil emissions | 对核算的氮投入应用选定 IPCC 因子和层级；只有在需要时将 N2O-N 转换为 N2O 并披露换算。 | accounted N; method factor; conversion basis | direct N2O-N or N2O per reference output | `ipcc-2019-managed-soils-n2o` |
| `calc_irrigation_delivery` | irrigation water | 汇总按水源计量的供水量，保持取水和供水分开，并按可销售产出归一化。 | withdrawal; delivery; return; crop output | m3 delivered and withdrawn per reference output | `fao-crop-evapotranspiration-56` |
| `calc_product_specific_aggregation` | cauliflower and broccoli combined reporting | 先完成产品特定的独立核算；只有在需要类别汇总时，才按质量对已核对记录加权。 | product-specific inventories; marketable masses | aggregated inventory per reference output | `iso-14044-2006` |
| `calc_farm_gate_mass_balance` | harvest, grading, and conditioning | 采收输入加测得质量增减应等于可销售产出、修整物、废弃物、残余物、废水固体和有解释损失之和，并使用共同基准。 | input and output scale records; moisture; waste records | reconciled lot balance | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | all product rows | 声明花椰菜或西兰花身份、必要时的品种、采收成熟度、等级和最终交付状态。 | planting, harvest, grade, and dispatch records |
| `dq_temporal_coverage` | crop production and harvest | 覆盖完整的作物周期和采收年度，说明结果是单年度、多年度平均还是情景。 | dated field, application, harvest, and dispatch records |
| `dq_input_completeness` | field and farm-gate inventory | 对种植材料、养分、灌溉、作物保护、土地、田间能源、采收能源、初级处理、包装和直接排放进行量化，或提供合理零值或排除说明。 | invoices, labels, meters, logs, and method declaration |
| `dq_mass_reconciliation` | all harvest and conditioning outputs | 归一化前核对采收、可销售、修整、拒收、残余物、废水固体和有解释损失的质量。 | calibrated scales, lot records, and fate receipts |
| `dq_nutrient_and_water_basis` | nutrients and irrigation | 保留配方肥料和养分当量基准、取水和供水、灌溉方法以及排放因子选择。 | product labels, analyses, meters, and calculation record |
| `dq_fate_and_disclosure` | residues, rejects, and wastes | 记录每个非参考产出的去向、处理、再利用或处置，并对任何声称的副产品作出说明。 | transfer, sales, feed, compost, treatment, or disposal record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流和产品产出 | 确认产出是声明农场门状态的新鲜、未加工花椰菜或西兰花，并明确产品身份。 | `usda-ams-cauliflower-standard`; `usda-ams-broccoli-standard` |
| `validation_process_completeness` | 过程图和库存 | 确认作物建立和田间管理、采收和农场门准备以及每个适用的条件性处理过程均已表示，或有明确排除说明。 | `fao-brassica-production-guidance` |
| `validation_product_separation` | 花椰菜和西兰花汇总 | 确认产品特定的投入、产量、废弃物和质量状态在计算组合类别结果前已经核对。 | `iso-14044-2006`; `mass-balance-identity` |
| `validation_nutrient_basis` | 肥料和土壤排放 | 确认产品质量与 kg N、P2O5 和 K2O 分开，并记录因子选择和 N2O-N 换算。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water_accounting` | 灌溉和初级处理用水 | 确认降雨、取水、灌溉供水、工艺水、废水和回流分开，且未重复计算。 | `fao-crop-evapotranspiration-56` |
| `validation_mass_balance` | 采收和初级处理 | 确认可销售产出、修整物、废弃物、残余物、废水固体和有解释损失在声明基准上与相应输入核对。 | `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门新鲜花椰菜或西兰花年度作物生产前景数据集 |
| downstream_use | 可作为 `secondary_dataset` 或 `background_dataset` 用于需要新鲜未加工花椰菜或西兰花且保留声明限定信息的 LCA 研究 |
| allowed_use | 农场门足迹核算、在产品身份和交付点匹配时进行产品比较、产品特定核对后的库存汇总，以及从声明交付点开始的下游过程建模 |
| excluded_use | 直接替代加工、冷冻、干燥、零售包装、配送、烹饪或消费阶段产品；未经调整不得跨产品身份或交付点使用 |
| required_metadata | 产品身份；品种；地理范围；地块面积；作物年度和周期；种植材料；灌溉来源和方法；肥料产品和养分基准；作物保护；田间和采收能源；产量；等级和成熟度；修整；清洗和冷却；包装；残余物和废弃物去向；农场门状态 |
| required_quality_disclosure | 时间覆盖；地块和批次覆盖；产品分离；计量和秤重证据；质量核对结果；养分和水基准；排放因子方法覆盖；分配方法；排除和假设 |
| update_trigger | 种植路线、产品身份、农场门状态、作物保护或养分实践、灌溉、采收或处理技术、包装、排放方法、Flow Set 版本、参考身份或证据状态发生实质变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-brassica-production-guidance` | extension_guidance | FAO, crop production and management guidance for brassica vegetables, https://www.fao.org/3/y4893e/y4893e00.htm | 作物过程分解、田间作业、残余物和采收数据采集 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉数据区分、作物周期水核算和水数据采集规则 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, N2O emissions from managed soils, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤氮排放和 N2O-N 换算 |
| `usda-ams-cauliflower-standard` | official_guidance | USDA Agricultural Marketing Service, United States Standards for Grades of Cauliflower, https://www.ams.usda.gov/grades-standards/cauliflower-grades-and-standards | 花椰菜等级、成熟度、缺陷和可销售产出限定信息 |
| `usda-ams-broccoli-standard` | official_guidance | USDA Agricultural Marketing Service, United States Standards for Grades of Broccoli, https://www.ams.usda.gov/grades-standards/broccoli-grades-and-standards | 西兰花等级、成熟度、缺陷和可销售产出限定信息 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级、共产品处理和汇总纪律 |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity for declared process hand-offs and waste reconciliation | 采收、分级、初级处理和产品特定汇总计算 |
