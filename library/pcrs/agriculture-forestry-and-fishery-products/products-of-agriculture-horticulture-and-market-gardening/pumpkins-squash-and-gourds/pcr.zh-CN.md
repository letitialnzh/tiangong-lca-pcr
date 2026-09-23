---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pumpkins-squash-and-gourds
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 南瓜、笋瓜和葫芦

## 1. 范围与适用性

本 PCR 用于指导新鲜、未经加工的南瓜、笋瓜和葫芦在声明种植周期内生产并于农场门交接时转移的前景数据包构建。默认边界从种植材料接收并接受建植开始，至收获以及在农场门交接前完成的初级处理结束。每个产品批次都应声明产品身份、品种或类型、生产地理范围、种植周期、收获状态、等级和去向。

默认路线包括田地准备、作物建植、栽培、灌溉、养分施用、作物保护、收获、田间处理、分级，以及交接前可选的农场内清洗、冷却或初级包装。种子繁育、种植材料接收前的育苗、土地利用变化、配送、零售、烹饪、罐藏、冷冻、干燥、腌制、发酵及其他加工不在默认边界内。只有在明确描述场地基础设施和能耗时，保护地或高度控制的栽培路线才纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pumpkins-squash-and-gourds |
| classification_refs | CPC 3.0: 01235 Pumpkins, squash and gourds |
| covered_products | 在声明农场门交接处转移的新鲜、适销南瓜、笋瓜和葫芦 |
| excluded_products | 用于繁育的种子和种植材料；叶、蔓及其他非产品生物质；加工、烹饪、冷冻、干燥、腌制、发酵、罐藏或零售预制产品；下游运输和配送 |
| representative_product | 农场门的新鲜适销南瓜、笋瓜或葫芦 |
| production_route | 土壤栽培或声明的保护地建植、田间管理、收获、分级，以及农场门交接前的可选初级处理 |
| market_state | 具有声明品种或类型、成熟度、等级、修整、清洗、冷却和包装状态的新鲜未加工产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门交接处的新鲜适销南瓜、笋瓜或葫芦 |
| How much | 1,000 kg |
| How well | 产品新鲜、未经加工并可销售，同时声明产品类型、品种或变种、成熟度、等级、不合格容许度、水分状态、修整状态和包装状态 |
| How long or cycle | 一个声明的种植周期和收获年度；若农场门交接前发生储存，还应声明储存时长 |
| reference_flow_link | `fresh_pumpkins_squash_gourds_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 南瓜、笋瓜和葫芦，生产混合，在农场，鲜品未加工 `3a4e98fe-5b66-4d67-bee1-78dfe01b672f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类型；品种或变种；生产地理范围；种植年度和周期日期；栽培系统；灌溉或雨养状态；收获成熟度；等级和尺寸；水分基准；修整和清洗状态；冷却和储存时长；包装状态；农场门交接 |
| 绑定模式 | `fixed` |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明`必需限定信息`列出的信息。参考产品身份已按 CPC 3.0 01235 完成平台核验。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 适销产品以及所有产品、拒收品、修整物和损失质量行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的农场门状态称量产品。在归一化前分别保留收获质量、适销输出、拒收品、修整物和田间损失。 |
| `crop_identity_separation` | 南瓜、笋瓜和葫芦记录 | 产品身份 | 声明的产品类型 | 分别记录每种产品类型及品种或变种。只有每个批次完成种植周期库存核对并有书面聚合规则后，才可聚合不同类型。 |
| `nutrient_product_basis` | 肥料和有机改良剂投入 | 质量和养分含量 | kg 产品和 kg 养分 | 分开记录配方产品质量和声明的养分浓度；依据同一批次记录计算养分数量并保留养分基准。 |
| `water_delivery_basis` | 灌溉和天然水取用 | 体积 | m3 | 将按水源的取水量与输送到田水量分开记录，并说明水源、计量或估算依据、施用方式和种植周期。 |
| `land_occupation_basis` | 占用的种植面积 | 面积-时间 | ha·种植周期 | 在按作物周期和参考产出归一化土地占用前，记录田地面积和占用时段。 |
| `moisture_and_conditioning_basis` | 收获、清洗、冷却、储存和包装 | 质量和水分 | kg 和百分比 | 保留原始质量及测得的水分或增减水量。没有书面核对时，不得把清洗或冷却造成的质量变化当作产品产量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在声明生产田中接受用于建植的种子、移栽苗或其他种植材料，并披露此前土地利用及任何育苗阶段 |
| starting_condition_role | 声明的南瓜、笋瓜或葫芦种植周期起点 |
| product_classification_scope | CPC 3.0 01235 所涵盖的新鲜南瓜、笋瓜和葫芦，直至农场门交接 |
| recursive_input_rule | 产品类别材料作为种植或市场投入时，按其实际交接状态记录并链接到上游数据集；不在本记录内重建上游作物边界。 |
| upstream_dataset_requirement | 当种植材料、养分产品、作物保护产品、供水、燃料、电力、包装、运输服务和废物处理跨越边界时，使用具有代表性的上游数据集。 |
| disclosure | 声明产品类型、品种或变种、田地和生产地理范围、种植年度、种植时长、种植材料、灌溉水源和方式、养分基准、作物保护方案、栽培系统、收获和分级方式、清洗或冷却、储存、包装、产量、残余物和拒收品去向以及农场门状态。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 田地准备和作物生产 | 纳入从种植材料接收至收获的声明种植周期相关投入和排放；披露此前土地利用并排除无关的历史田地负荷。 | `fao-crop-evapotranspiration-56`; `ipcc-2019-managed-soils-n2o` |
| `boundary_farm_gate` | 收获和初级处理 | 默认边界止于新鲜适销产品在声明农场门的转移。只有在转移前发生时，才纳入修整、分选、清洗、冷却、储存和初级包装。 | `usda-ams-pumpkins-standard`; `fao-good-agricultural-practices-vegetables` |
| `boundary_input_completeness` | 所有前景生产 | 对种植材料、养分、作物保护、灌溉、土地占用、田间和收获能耗、初级处理公用工程、包装及田间直接排放，提供数值、合理为零或书面排除。 | `fao-good-agricultural-practices-vegetables`; `ipcc-2019-managed-soils-n2o` |
| `boundary_residue_fate` | 田间残余物、拒收品、修整物和清洗残余物 | 说明每种残余物流是还田、留田、饲用、堆肥、处理、运输、销售还是弃置。没有明确说明时，不得把残余物视为联产品。 | `iso-14044-2006`; `fao-good-agricultural-practices-vegetables` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_establishment_and_cultivation` | 田间建植与栽培 | required | 每个所代表的田地和种植年度 | 前景受管理生物生产 | 田地面积、种植周期、投入记录和收获作物输出 |
| `harvest_and_field_handling` | 收获与田间处理 | required | 每个所代表的收获批次 | 前景收获、田间处理、分级和产量核对 | 1,000 kg 适销新鲜产品 |
| `on_farm_primary_conditioning` | 农场内初级处理 | conditional | 农场门交接前发生清洗、冷却、储存或包装时 | 前景初级处理 | 声明交接状态的处理后输出 |

### 过程：田间建植与栽培（`field_establishment_and_cultivation`）

#### 输入

##### 产品流

###### 种植材料（`planting_material_input`）

种子、移栽苗或其他种植材料在接受进入声明田地建植时跨越边界。记录产品类型、数量、适用时的有效单位数量和处理状态。

- 选定流：南瓜、笋瓜或葫芦种子或移栽苗
- 流属性/单位：质量或数量 / kg 或有效植株
- 数量规则：按田地、产品类型和周期记录采购或内部转移量及实际种植量；单独保留失败或拒收的种植材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_planting_material_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：种植材料筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：20
  - 单位：每 1,000 kg 产品的 kg 种子或 1,000 株有效植株
  - 基准：每 1,000 kg 适销农场门产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`field_establishment_and_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`; `fao-good-agricultural-practices-vegetables`
- 数量范围：氮投入筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg N/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：磷投入筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg P2O5/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：钾投入筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：700
  - 单位：kg K2O/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：有机改良剂筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg 产品/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water_input`）

按水源记录输送到作物的水，并与降雨及供应该水量的水源取水分开。

- 选定流：输送到作物的灌溉水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：按田地和种植周期汇总计量或有记录依据的输送量；抽水能耗单独记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_water_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：灌溉水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：m3/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械燃料（`field_fuel_input`）

拖拉机、水泵、喷雾器和其他移动田间设备使用的燃料，按田地和种植周期从燃料日志、发票或设备记录中采集。

- 选定流：移动农业机械燃料
- 流属性/单位：能量载体或质量 / L、kg 或 MJ
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：汇总分配到所代表田地和种植周期的燃料交付量或设备特定消耗量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：田间燃料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：L 柴油/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间电力（`field_electricity_input`）

当灌溉泵、风机或其他田间设备用电跨越前景边界时，电力与燃料分开记录。

- 选定流：田间作业电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：汇总所代表田地和种植周期的电表读数或供应商记录；一个电表服务多块田地时说明分配方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：田间电力筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：800
  - 单位：kWh/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物保护产品（`crop_protection_input`）

按配方、有效成分、施用率和可得的处理面积记录每种除草剂、杀虫剂、杀菌剂、生物防治剂或助剂产品。

- 选定流：作物保护产品
- 流属性/单位：配方产品质量 / kg 产品
- 数量规则：记录每种产品和施用事件，并保留配方、有效成分、处理面积和有记录依据的施用率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：作物保护产品筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg 配方产品/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 种植材料损失（`planting_material_loss`）

当失败、变质或拒收的种植材料离开作物建植活动时，记录其数量并说明去向。

- 选定流：种植材料损失
- 流属性/单位：质量或数量 / kg 或有效植株
- 数量规则：称量或计数拒收种植材料，并记录还田、堆肥、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_planting_material_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：种植材料损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：占供应种植材料的百分比
  - 基准：种植材料投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 栽培土地占用（`cultivated_land_occupation`）

作物在声明种植周期内占用田地，并与田地面积和周期日期相连。

- 选定流：栽培土地占用
- 流属性/单位：面积-时间 / ha·种植周期
- 数量规则：田地面积乘以声明的作物占用时段，并分配给所代表的种植周期。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_area_and_cycle_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：栽培面积筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.02
  - 上限：10
  - 单位：每 1,000 kg 产品的 ha
  - 基准：适销作物产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水源取水（`irrigation_source_withdrawal`）

当水源取水跨越环境边界时，将来自天然或供水水源的取水作为基本流输入记录。

- 选定流：灌溉取用的水资源
- 流属性/单位：体积 / m3
- 数量规则：记录按水源的取水，并与输送灌溉水和测得的输配损失进行核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_and_water_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：天然水取水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2500
  - 单位：m3/ha
  - 基准：所代表田地和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 基本流

###### 直接氧化亚氮排放（`direct_n2o_emission`）

与养分添加相关的土壤直接氧化亚氮排放，依据有记录的养分投入和选定方法计算。

- 选定流：排放到环境空气的氧化亚氮
- 流属性/单位：质量 / kg N2O 或 kg N2O-N
- 数量规则：依据养分投入和场址条件，采用声明的土壤排放方法；保留 N2O 与 N2O-N 基准的差异。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：直接氧化亚氮筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg N2O-N/ha
  - 基准：有记录的养分投入和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ipcc-2019-managed-soils-n2o`

###### 氨挥发（`ammonia_emission`）

在选定方法包含挥发时，对养分施用产生的氨排放进行计算或测量。

- 选定流：排放到环境空气的氨
- 流属性/单位：质量 / kg NH3
- 数量规则：依据养分施用记录和场址条件，采用声明的挥发方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：氨筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：60
  - 单位：kg NH3-N/ha
  - 基准：有记录的养分投入和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ipcc-2019-managed-soils-n2o`

###### 硝酸盐淋失或径流（`nitrate_water_emission`）

当表示水分运移和养分损失时，记录或计算从栽培土壤进入水体的硝酸盐。

- 选定流：排放到水体的硝酸盐
- 流属性/单位：质量 / kg 硝酸盐或 kg N
- 数量规则：依据养分投入、排水、土壤检测和选定场址方法计算或测量硝酸盐损失；保留硝酸盐与 N 基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：硝酸盐损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg nitrate-N/ha
  - 基准：有记录的养分投入和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 磷酸盐径流（`phosphate_water_emission`）

当径流或排水路径具有相关性时，记录或计算从作物土壤进入水体的磷酸盐。

- 选定流：排放到水体的磷酸盐
- 流属性/单位：质量 / kg 磷酸盐或 kg P
- 数量规则：依据养分投入、径流观察、土壤检测和选定场址方法计算或测量磷酸盐损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_application_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：磷酸盐损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kg P/ha
  - 基准：有记录的养分投入和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间能耗产生的化石二氧化碳（`field_co2_emission`）

依据记录的能源投入和选定因子来源，计算栽培中燃料或外购能源产生的化石二氧化碳。

- 选定流：排放到环境空气的化石二氧化碳
- 流属性/单位：质量 / kg CO2
- 数量规则：将记录的化石燃料或能源投入乘以声明的排放因子，并将生物源碳单独保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_energy_records`
- 来源：`ipcc-2006-volume-4-crops`
- 数量范围：田间能耗 CO2 筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2500
  - 单位：kg CO2/ha
  - 基准：记录的田间能耗和种植周期
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获与田间处理（`harvest_and_field_handling`）

#### 输入

##### 产品流

###### 收获作物生物质（`harvested_crop_input`）

收获的南瓜、笋瓜和葫芦进入田间处理，以便在农场门交接前称量、分级并核对产量。

- 选定流：收获的南瓜、笋瓜和葫芦，未分级
- 流属性/单位：质量 / kg
- 数量规则：在分级前称量收获批次，并记录产品类型、成熟度、田地和收获日期。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：`usda-ams-pumpkins-standard`
- 数量范围：收获量到适销量筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：3000
  - 单位：每 1,000 kg 适销产品的 kg 收获作物
  - 基准：核对后的作物产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获和处理燃料（`harvest_fuel_input`）

当收获设备和田间处理在农场门交接前使用燃料时，应记录该燃料。

- 选定流：移动收获和处理机械燃料
- 流属性/单位：能量载体或质量 / L、kg 或 MJ
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：汇总分配到声明交接前收获批次和田间处理活动的燃料使用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_energy_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：收获燃料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：每 1,000 kg 适销产品的 L 柴油
  - 基准：收获和田间处理
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获拒收品（`harvest_reject_output`）

收获或田间分级时拒收的产品作为独立废物流记录，并链接到下游去向。

- 选定流：收获或田间分级拒收品
- 流属性/单位：质量 / kg
- 数量规则：尽可能按原因或等级称量拒收产品，并记录还田、饲用、堆肥、转入其他路线、处理或弃置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获作物投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：`usda-ams-pumpkins-standard`; `iso-14044-2006`
- 数量范围：收获拒收筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：占收获作物投入的百分比
  - 基准：收获作物投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间残余物（`field_residue_output`）

收获或田间处理离开的藤蔓、叶、受损果实和其他作物残余物，连同其田间或下游去向一并记录。

- 选定流：南瓜、笋瓜或葫芦作物残余物
- 流属性/单位：质量 / kg 湿生物质
- 数量规则：按田地称量或估算残余物，并记录还田、移除、饲用、堆肥、处理或处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_fate_records`
- 来源：`iso-14044-2006`; `fao-good-agricultural-practices-vegetables`
- 数量范围：田间残余物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：每 1,000 kg 适销产品的 kg 湿残余物
  - 基准：种植周期收获产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 基本流

###### 收获粉尘排放（`harvest_dust_emission`）

当收获和田间处理形成重要空气排放路径时，记录或估算其产生的粉尘或颗粒物。

- 选定流：排放到环境空气的颗粒物
- 流属性/单位：质量 / kg 颗粒物
- 数量规则：有测量时使用测量排放，否则记录选定的估算方法和活动基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_energy_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：收获颗粒物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg 颗粒物/ha
  - 基准：收获和田间处理活动
  - 基准类型：种植周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：农场内初级处理（`on_farm_primary_conditioning`）

#### 输入

##### 产品流

###### 待处理收获产品（`conditioning_product_input`）

只有在农场门交接前进行清洗、冷却、储存或包装时，收获产品才进入初级处理。

- 选定流：用于初级处理的收获南瓜、笋瓜和葫芦
- 流属性/单位：质量 / kg
- 数量规则：在初级处理边界称量进入产品，并与收获和田间处理记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_output_records`
- 来源：`usda-ams-pumpkins-standard`
- 数量范围：处理投入筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1200
  - 单位：每 1,000 kg 处理后产品的 kg
  - 基准：处理后输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理用水（`conditioning_water_input`）

清洗或其他初级处理用水应与灌溉水和水源取水分开记录。

- 选定流：清洗或处理用工艺水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量规则：按批次和处理运行汇总计量或有记录依据的处理用水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 处理后农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：处理用水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：每 1,000 kg 处理后产品的 m3
  - 基准：处理后输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理用电（`conditioning_electricity_input`）

当清洗泵、冷却、分选或储存发生在转移前时，记录其电力使用。

- 选定流：初级处理电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：汇总处理运行的电表读数或供应商记录；共享设备按运行时间或批次质量分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 处理后农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：处理用电筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：每 1,000 kg 处理后产品的 kWh
  - 基准：处理后输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级包装材料（`primary_packaging_input`）

农场门交接前用于保护或呈现产品的包装，按材料和包装形式记录。

- 选定流：初级包装材料
- 流属性/单位：质量 / kg 包装材料
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`flexible-packaging`
- 数量规则：按材料和产品批次记录包装数量和质量；披露可重复使用包装的循环次数和回收率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装后农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_packaging_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：初级包装筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：每 1,000 kg 包装产品的 kg 包装
  - 基准：包装后的农场门输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 处理拒收品（`conditioning_reject_output`）

清洗、冷却、储存或最终分级中拒收的产品应单独称量，并链接至下游去向。

- 选定流：初级处理或最终分级拒收品
- 流属性/单位：质量 / kg
- 数量规则：按批次称量拒收产品，并记录返工、降级、转入其他路线销售、堆肥、处理或处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 处理后农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_output_records`
- 来源：`usda-ams-pumpkins-standard`; `iso-14044-2006`
- 数量范围：处理拒收筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：占处理投入的百分比
  - 基准：处理投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理废水（`conditioning_wastewater_output`）

当清洗或处理废水跨越前景边界时，作为废物记录；可获得时同时记录悬浮固体和处理去向。

- 选定流：处理废水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：记录排放或转移的废水量，并识别现场处理、下水道、土地施用或其他去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 处理后农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：处理废水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：每 1,000 kg 处理后产品的 m3
  - 基准：处理后输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装废物（`packaging_waste_output`）

处理活动产生的包装损耗和废弃一次性包装，与产品输出分开记录。

- 选定流：包装废物
- 流属性/单位：质量 / kg 包装废物
- 数量规则：记录所代表处理运行中损坏或废弃的包装材料，并识别其下游废物路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装后农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_packaging_records`
- 来源：`iso-14044-2006`
- 数量范围：包装废物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：占包装供应量的百分比
  - 基准：包装投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 处理后的农场门产品（`conditioned_product_output`）

当初级处理纳入边界时，合格产品以声明的新鲜未加工农场门状态离开初级处理。

- 选定流：新鲜南瓜、笋瓜或葫芦，处理后的农场门输出
- 流属性/单位：质量 / kg
- 数量规则：称量包含清洗、冷却、储存、分级和包装步骤后的合格产品，并与所有处理投入和拒收品进行核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销农场门产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_output_records`
- 来源：`usda-ams-pumpkins-standard`
- 数量范围：处理后输出筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：每 1,000 kg 参考产品的 kg
  - 基准：PCR 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

##### 基本流

###### 处理颗粒物排放（`conditioning_particulate_emission`）

当干式处理、分级或包装形成重要排放路径时，记录其释放的颗粒物。

- 选定流：排放到环境空气的颗粒物
- 流属性/单位：质量 / kg 颗粒物
- 数量规则：有测量时使用测量排放，否则记录选定的估算方法和活动基准。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 处理后农场门产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-good-agricultural-practices-vegetables`
- 数量范围：处理颗粒物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：每 1,000 kg 处理后产品的 kg 颗粒物
  - 基准：处理后输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_product` | 单一产品作物批次 | 当没有单独销售的共产品离开声明边界时，将所有负荷保留在所代表的南瓜、笋瓜或葫芦产品上。 | `iso-14044-2006` |
| `allocation_marketed_coproduct` | 单独销售的种子、果实或其他输出 | 识别每个单独销售的共产品，按交接状态量化每个输出，并在所代表批次内一致采用研究所书面的物理或经济分配方法。 | `iso-14044-2006` |
| `allocation_residue_and_reject` | 残余物、拒收品、修整物和损失 | 除非有书面的下游市场和共产品决定支持其他处理，否则将残余物、拒收品、修整物和损失保留为废物或残余物流。同一质量不得同时计作适销产品和共产品。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_material_records` | `field_establishment_and_cultivation` | 种植材料和种植材料损失 | 种子发票、移栽苗收货单、种植日志 | 产品类型；品种；供应商或来源；数量；有效单位数量；处理；田地；日期；损失和去向 | 收集发票和田间种植日志；核对供应、种植和拒收数量 | kg 或有效植株 | 每次交付和种植事件 | 声明的种植周期 | 每块所代表田地 | 按田地、产品类型和种植周期汇总 | 发票或转移记录及种植日志 |
| `cp_nutrient_application_records` | `field_establishment_and_cultivation` | 养分投入及养分衍生排放 | 投入发票、产品标签、施用日志、土壤或排放记录 | 产品；养分分析；数量；田地；日期；施用方法；土壤或排水观察 | 收集供应商记录和田间日志；计算养分量及基于方法的排放 | kg 产品、kg 养分或 kg 排放 | 每次施用和种植周期 | 声明的种植周期及方法时段 | 每块所代表田地 | 按养分、田地和种植周期求和 | 产品分析和施用记录 |
| `cp_irrigation_and_water_records` | `field_establishment_and_cultivation` | 灌溉水和水源取水 | 水表日志、供水记录、水泵日志、水源记录 | 水源；取水量；输送量；计量器；施用方式；田地；日期；输配损失 | 收集水表或供水记录，分别核对水源取水和输送量 | m3 | 每次灌溉事件或计量支持时按月 | 声明的种植周期 | 每个水源和田地 | 按水源和田地求和并分别保留取水和输送量 | 水表记录或书面估算依据 |
| `cp_field_energy_records` | `field_establishment_and_cultivation` | 田间燃料和电力 | 燃料日志、发票、设备日志、电表 | 载体；数量；设备；田地；运行小时；日期；电表；分配依据 | 收集直接记录，并按运行时间、面积或测量使用量分配共享设备 | L、kg、MJ 或 kWh | 每次交付或按月 | 声明的种植周期 | 所代表田地或共享农场资产 | 分配后按载体和田地汇总 | 发票、电表或设备记录 |
| `cp_crop_protection_records` | `field_establishment_and_cultivation` | 作物保护产品 | 产品库存和施用日志 | 配方；有效成分；数量；施用率；处理面积；田地；日期；天气或方法备注 | 收集每次施用事件的产品和施用记录 | kg 产品或 kg 有效成分 | 每次施用事件 | 声明的种植周期 | 每块所代表田地 | 按配方和有效成分求和 | 产品标签和施用记录 |
| `cp_land_area_and_cycle_records` | `field_establishment_and_cultivation` | 土地占用 | 田地登记和作物日历 | 田地面积；种植日期；收获日期；种植周期；保护地或露地状态 | 收集田地边界和日历记录；计算面积-时间占用 | ha·种植周期 | 每块田地和种植周期 | 声明的种植周期 | 每块所代表田地 | 在产出归一化前计算占用面积-时间 | 田地登记和作物日历 |
| `cp_harvest_and_yield_records` | `harvest_and_field_handling` | 收获作物、拒收品和残余物 | 收获单、地磅记录、等级日志 | 田地；批次；产品类型；日期；收获质量；等级；拒收品；残余物；去向 | 称量或记录每个收获批次，并核对等级和去向 | kg | 每个收获批次 | 声明的收获期间 | 每块所代表田地和批次 | 按产品类型、田地和种植周期汇总 | 秤记录及等级或去向日志 |
| `cp_harvest_energy_records` | `harvest_and_field_handling` | 收获燃料和颗粒物活动 | 燃料日志、设备记录、排放观察 | 载体；数量；设备；收获批次；运行小时；方法；日期 | 收集直接能耗记录并记录任何排放估算方法 | L、kg、MJ 或 kg 颗粒物 | 每次收获事件或按月 | 声明的收获期间 | 所代表的收获设备 | 按运行时间或批次质量分配共享使用量 | 燃料记录和设备日志 |
| `cp_residue_and_reject_fate_records` | `harvest_and_field_handling` | 田间残余物和拒收品去向 | 去向日志、转移凭证、田间观察 | 物流；质量；水分；去向；目的地；日期；田地；批次 | 称量或估算每种物流并保留声明的目的地 | kg 湿生物质 | 每个收获批次或去向事件 | 声明的收获期间 | 每块所代表田地 | 按物流和去向汇总且不重复计算 | 去向记录或书面田间观察 |
| `cp_conditioning_input_output_records` | `on_farm_primary_conditioning` | 处理产品、拒收品和合格输出 | 批次单、称量记录、等级日志 | 批次；投入质量；输出质量；拒收质量；处理日期；产品状态；等级；去向 | 称量每个处理批次并核对所有输出 | kg | 每个处理批次 | 声明的处理期间 | 每条所代表处理线 | 核对质量后按批次和产品类型汇总 | 秤记录和批次单 |
| `cp_conditioning_water_records` | `on_farm_primary_conditioning` | 处理用水和废水 | 水表、排放日志、处理记录 | 用水投入；废水输出；水源；计量器；处理；日期；批次 | 收集用水和排放记录，并核对输入与输出体积 | m3 | 每批或按计量报告周期 | 声明的处理期间 | 每条处理线 | 按批次和去向求和 | 水表及排放或处理记录 |
| `cp_conditioning_energy_records` | `on_farm_primary_conditioning` | 处理用电和颗粒物活动 | 电表、设备日志、排放观察 | 载体；数量；设备；批次；运行小时；日期；分配依据 | 收集直接能耗记录，并按运行时间或批次质量分配共享设备使用量 | kWh、MJ 或 kg 颗粒物 | 每批或按计量报告周期 | 声明的处理期间 | 每条处理线 | 按载体和产品批次汇总 | 电表或设备记录 |
| `cp_primary_packaging_records` | `on_farm_primary_conditioning` | 初级包装和包装废物 | 包装发票、领用日志、废物日志 | 材料；形式；数量；质量；重复使用次数；批次；损坏质量；去向 | 收集材料和领用记录，并核对供应、使用和弃置包装 | kg 包装或件数 | 每次交付和处理批次 | 声明的处理期间 | 每条处理线 | 按材料和产品批次汇总 | 供应商规格及领用或废物记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | 所有库存行 | 将核对后的过程数量除以合格适销农场门产品质量，再乘以 1,000 kg。 | 过程数量；合格产品质量 | 每 1,000 kg 参考产品的数量 | `mass-balance-identity` |
| `calculate_nutrient_quantity` | 养分投入 | 将配方产品质量乘以声明的养分比例，并保留 N、P 或 P2O5、K 或 K2O 基准。 | 产品质量；养分分析 | 养分质量 | `fao-good-agricultural-practices-vegetables` |
| `calculate_nutrient_emissions` | 直接 N2O、NH3、硝酸盐和磷酸盐行 | 对采集的养分投入和场址条件应用选定的排放或损失方法；场址已声明方法时不得使用无限定的默认值。 | 养分投入；场址方法输入 | 排放或损失数量 | `ipcc-2019-managed-soils-n2o` |
| `calculate_fossil_energy_emissions` | 田间和处理能耗 | 将记录的化石能源乘以选定因子来源，并分开保留生物源碳。 | 化石能源记录；因子 | 化石 CO2 数量 | `ipcc-2006-volume-4-crops` |
| `reconcile_harvest_outputs` | 收获和处理输出 | 求和合格产品、拒收品、残余物、修整物和书面损失，并在声明的计量容差内与相应投入质量比较。 | 投入质量；输出质量组成 | 核对后的输出和损失记录 | `mass-balance-identity` |
| `calculate_land_occupation` | 栽培土地占用 | 将所代表田地面积乘以声明的作物占用时段，再按合格产品质量归一化。 | 田地面积；作物日期；合格产品质量 | 每 1,000 kg 产品的面积-时间 | `fao-crop-evapotranspiration-56` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_product_identity` | 所有产品流 | 声明南瓜、笋瓜或葫芦类型、品种或变种、批次、等级、成熟度和农场门状态；核对前不得合并不同产品状态。 | 产品规格和批次记录 |
| `quality_mass_reconciliation` | 收获和处理 | 在每个过程交接处核对田间收获、合格输出、拒收品、残余物、修整物、适用的废水、包装和书面损失。 | 地磅、秤、批次和去向记录 |
| `quality_input_completeness` | 田间和处理投入 | 对种植材料、养分、作物保护、水、土地、能源和包装提供直接记录、合理为零或书面排除。 | 田地登记、发票、计量器、日志和排除说明 |
| `quality_temporal_geographic_scope` | 所有流 | 识别每条记录所代表的田地、场址、生产地理范围、种植周期、收获期间以及储存或处理期间。 | 田地和作物日历及批次记录 |
| `quality_method_and_factor_disclosure` | 计算排放和转换 | 记录用于推导数值的方法、因子基准、养分基准、水分基准及任何分配或共享计量器计算。 | 计算表和所引方法来源 |
| `quality_uncertainty_and_estimate_label` | 估算或模型化行 | 标明估计、假设和范围为暂定，并在可得时用测量或经过审查的记录替代。 | 数据质量说明及支撑记录状态 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_product_identity` | 参考产品和所有产品流 | 确认产品类型、品种或变种、种植周期、地理范围、成熟度、等级、水分和农场门状态已声明，并在相连记录中一致。 | `usda-ams-pumpkins-standard` |
| `validation_mass_balance` | 田间收获和初级处理 | 确认每个过程交接将投入质量与合格产品、拒收品、残余物、修整物、适用的废水、包装和书面损失核对，且不重复计算。 | `mass-balance-identity` |
| `validation_reference_normalization` | 所有归一化数量 | 确认每个归一化数量均以合格适销农场门产品为分母，并以每 1,000 kg 参考产品表示。 | `mass-balance-identity` |
| `validation_boundary_disclosure` | 数据集元数据和过程说明 | 确认起始状态、纳入作业、农场门交接、此前土地利用、储存或处理、残余物去向和排除项均已披露。 | `fao-good-agricultural-practices-vegetables`; `iso-14044-2006` |
| `validation_calculated_emissions` | 养分和能源排放 | 确认每项计算排放均标明活动投入、方法或因子来源、单位基准和计算记录；不得静默替换基准。 | `ipcc-2019-managed-soils-n2o`; `ipcc-2006-volume-4-crops` |
| `validation_parameterized_identity_resolution` | 所有参数化行和参考流 | 在前景数据生成时将每个参数化流集行解析为经核验的 UUID，并保留所选属性、单位、地理范围和预期用途检查。 | `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用于新鲜南瓜、笋瓜和葫芦的前景作物库存构建，以及下游过程或生命周期模型投影 |
| allowed_use | 保留产品身份、种植周期范围、测量或计算投入、直接排放、输出核对及声明处理或包装状态的农场门数据集 |
| excluded_use | 加工食品产品；种子或育苗数据集；配送、零售、烹饪或报废研究；产品状态证据缺口或缺少输出核对的数据集 |
| required_metadata | canonical PCR id；CPC 参考；产品类型和品种；田地和生产地理范围；种植周期和收获期间；栽培系统；种植材料；灌溉水源和方式；养分和作物保护记录；能源；产量；拒收品和残余物去向；处理；包装；农场门状态 |
| required_quality_disclosure | 数据来源和测量方法；时间和地理代表性；估算或缺失值；养分、水分和排放因子基准；分配决定；参数化流 UUID 解析状态；不确定性和范围处理 |
| update_trigger | 产品边界、作物路线、分类范围、流集分类、排放方法、计量约定或产量、投入、残余物和处理方面的重要证据发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration: guidelines for computing crop water requirements, https://www.fao.org/4/x0490e/x0490e00.htm | 种植周期用水核算、灌溉背景以及土地或作物日历解释 |
| `fao-good-agricultural-practices-vegetables` | official_guidance | FAO good agricultural practices and fresh vegetable production guidance, https://www.fao.org/3/y4893e/y4893e00.htm | 作物投入完整性、收获和初级处理、作物保护、用水及卫生背景 |
| `ipcc-2019-managed-soils-n2o` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4, Chapter 11 N2O emissions from managed soils, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 养分衍生 N2O 及相关氮损失方法选择 |
| `ipcc-2006-volume-4-crops` | method_factor | 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4 Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol4.html | 农业能源和作物排放因子方法背景 |
| `usda-ams-pumpkins-standard` | official_guidance | USDA Agricultural Marketing Service, United States Standards for Grades of Pumpkins, https://www.ams.usda.gov/grades-standards/pumpkins-grades-standards | 产品等级、成熟度、不合格项和农场门产品状态描述 |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | 分配、共产品、截断、质量核对和报告原则 |
| `mass-balance-identity` | method_factor | Conservation-of-mass method identity for process-input and product-output reconciliation | 归一化、输出核对和参考流质量平衡 |
