---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.apples"
language: "zh-CN"
status: candidate
sync_with: "pcr.en-US.md"
content_maturity: authored_methodology
translation_status: aligned
---

# 果园门鲜苹果

## 1. 范围与适用性

本 PCR 用于构建商业栽培品种 *Malus domestica* 果园门鲜苹果的前景数据包。范围包括按声明生产寿命年化的建园与清园、年度果园管理、采收，以及获得可销售散装鲜果所需的果园内处理。

声明路线后可涵盖常规、综合、有机、雨养和灌溉生产。排除苹果苗木、苹果汁、苹果酒、干制或其他加工苹果、包装场或冷库产出，以及主要用于工业加工的果实。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.apples` |
| classification_refs | CPC 3.0 `01341`, `Apples` |
| covered_products | 商业栽培品种 *Malus domestica* 的果园门新鲜采收苹果 |
| excluded_products | 苗木；果汁；苹果酒；干制、腌制或其他加工苹果；包装场或冷库产出；主要用于工业加工的果实 |
| representative_product | 自然品种混合、果园门散装可销售鲜苹果 |
| production_route | 多年生果园建园、年度管理、采收及果园门处理 |
| market_state | 果园门新鲜、完整、未加工散装果实，并声明等级和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 果园门新鲜完整苹果 |
| How much | 1 kg |
| How well | 声明品种或混合、可销售性判据、等级、生产体系和水分状态 |
| How long or cycle | 一个声明采收年；建园和清园按声明生产寿命年化 |
| reference_flow_link | 下方参考数量和产品流 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Apple, natural mix, at orchard `dae75a0f-16b9-47ff-9ee7-63058aebcfe2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种或品种混合；生产体系和认证状态；果园年龄与生产寿命假设；采收年或平均期；灌溉或雨养状态；地理；可销售性与等级判据；果园门；散装容器或包装状态 |

参考质量为验收后的可销售果实。工业级果和次果必须作为独立产出记录实测质量及有证据的去向。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流为果园门验收鲜苹果净质量，不含可重复使用果箱皮重。 |
| `yield_basis` | 产量及归一化投入 | Mass and area | kg and ha | 归一化前记录同一期间的总采收、验收、工业级和次果质量。 |
| `fertilizer_n_basis` | 肥料和氮排放 | Mass | kg product and kg N | 记录产品质量和养分含量；氮计算使用 kg N。 |
| `water_basis` | 灌溉和取水 | Volume or Mass | m3 or kg | 声明水源，区分取水、输送灌溉水、消耗和水足迹。 |
| `energy_inventory` | 燃料和电力 | Mass, Volume, or Energy | kg, L, MJ, or kWh | 保留燃料类型、能量单位、换算系数和果园作业。 |
| `perennial_annualization` | 建园和清园 | declared property | declared unit | 将可归属生命周期负荷除以终生产可销售产量；披露幼龄年和补植。 |

## 5. 系统边界

前景边界包括重要的苗木和支撑系统安装、整地、定植、可归属灌溉设施、年度施肥、灌溉、植保、修剪与地面管理、重要的外购授粉服务、机械、采收、田间运输、果园门处理及寿命末期清园。上游投入使用具有代表性的背景数据。包装场分级、零售包装、冷藏、配送、零售、消费和加工不在默认边界内。

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_life_cycle` | 所有数据集 | 通过年化多年生果园模型纳入建园、幼龄年、生产年、补植和清园，或证明替代模型具有代表性。 | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `boundary_gate` | 参考产品 | 默认边界止于果园门验收新鲜散装苹果；包装场和冷库作业需要下游数据集。 | `codex-cxs-299-2010` |
| `boundary_input_completeness` | 果园管理 | 对肥料、灌溉、植保、燃料、电力、土地、建园材料、生物质去向及直接排放记录数值、有依据零值或有文件的排除。 | `baima-apple-orchard-lca-2024`; `ucdavis-orchard-lca-findings-2020` |
| `boundary_quality_separation` | 苹果产出 | 按实测质量和去向分别记录验收鲜果、工业级果、次果和损失。 | `codex-cxs-299-2010`; `mass-balance-identity` |

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | established_orchard_block |
| starting_condition_role | perennial_production_condition |
| product_classification_scope | 对应 CPC 3.0 `01341` 的鲜苹果；排除加工产出 |
| recursive_input_rule | 进入系统的同类苹果按来源和用途作为独立投入，不与果园产出合并 |
| upstream_dataset_requirement | 苗木、肥料、植保产品、能源、供水、支撑材料和废物处理使用代表性上游数据 |
| disclosure | 果园地块、品种、种植密度、建园年、年龄、生产寿命、路线、灌溉状态、地理、采收期、产量、可销售比例和门点 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| orchard_lifecycle_and_production | 果园生命周期与苹果生产 | required |  | foreground | 果园门 1 kg 验收鲜苹果 |
| orchard_gate_handling | 果园门处理 | conditional | 在门点前发生果园内清洗、预冷、分级或其他处理时纳入 | foreground | 果园门 1 kg 验收鲜苹果 |

### 过程：果园生命周期与苹果生产（`orchard_lifecycle_and_production`）

#### 投入

##### 产品流

###### 年化建园投入（`annualized_establishment_inputs`）

年化建园投入表示可归属于参考产品的苗木、支撑系统、灌溉设施、补植和清园投入。

- 选定流：场址特定的苗木、支撑物和灌溉系统材料
- 流属性/单位：声明属性 / 声明单位
- 数量规则：按终生产可销售产量年化的实测安装、补植和清园数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_lifecycle_records`
- 来源：`baima-apple-orchard-lca-2024`
- 数量范围：年化核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 可归属材料/kg 参考产品
  - 基准：可归属质量除以终生产可销售产量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 农业养分与肥料投入（`orchard_lifecycle_and_production_agricultural_nutrient_inputs`）

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
- 来源：`ipcc-2019-managed-soils-n2o`; `baima-apple-orchard-lca-2024`
- 数量范围：前景合理性校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg 配方产品/kg 参考产品
  - 基准：宽泛非负筛选区间，不是默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：来源规则（`source_rule`）
  - 来源：`baima-apple-orchard-lca-2024`; `goossens-apple-orchard-lca-2017`

###### 植保投入（`crop_protection_inputs`）

植保投入记录果园施用的每种命名配方产品及活性成分。

- 选定流：Herbicide `c1370404-9e2b-4ed6-ba96-c094f74e0f2d`; Insecticide `ba2ec0c8-d5da-4ca8-bf9f-317478a1ce1b`; 适用时采用产品特定杀菌剂
- 流属性/单位：Mass / kg 活性成分及 kg 产品
- 数量规则：按命名产品和活性成分实测施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`baima-apple-orchard-lca-2024`
- 数量范围：前景合理性校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 活性成分/kg 参考产品
  - 基准：宽泛非负筛选区间，不是默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：来源规则（`source_rule`）
  - 来源：`baima-apple-orchard-lca-2024`

###### 灌溉水（`irrigation_water`）

灌溉水记录从各声明水源进入果园生产系统的输送水。

- 选定流：Irrigation water `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- 流属性/单位：Mass / kg，同时保留 m3
- 数量规则：计量输送水；仅经核实的雨养生产为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`dzikiti-apple-water-footprint-2019`
- 数量范围：实测果园水足迹背景区间
  - 范围角色：典型范围（`typical_range`）
  - 下限：0.187
  - 上限：0.237
  - 单位：m3 总水足迹/kg 苹果
  - 基准：地中海气候果园实测背景，不是通用灌溉默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dzikiti-apple-water-footprint-2019`

###### 果园能源（`orchard_energy`）

果园能源记录田间作业和灌溉抽水消耗的燃料及电力。

- 选定流：Diesel, burned in agricultural machinery `57e0b1a3-2d05-46b2-b61b-cf7b5b167c6f`; Electricity, medium voltage `01bf1ecc-b94c-4a03-ab88-ee79081aae24`
- 流属性/单位：质量或能量 / kg、L、MJ 或 kWh
- 数量规则：按作业实测燃料和电力，包括抽水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`baima-apple-orchard-lca-2024`; `ucdavis-orchard-lca-findings-2020`
- 数量范围：前景能源合理性校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh 当量/kg 参考产品
  - 基准：宽泛非负筛选区间，不是默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：来源规则（`source_rule`）
  - 来源：`baima-apple-orchard-lca-2024`; `ucdavis-orchard-lca-findings-2020`

##### 废物流

通常不需要废物投入。跨越边界的废物衍生改良剂应单独标识、计量并链接负荷分担规则。

##### 基本流

###### 土地占用（`land_occupation`）

土地占用表示声明占用期内的生产果园面积。

- 选定流：适用于声明土地利用类别的土地占用基本流
- 流属性/单位：面积-时间 / ha a
- 数量规则：生产面积乘占用期，再除以可销售产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_output_records`
- 数量范围：正产量校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：ha a/kg 参考产品
  - 基准：面积-时间除以可销售产量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 取水（`water_withdrawal`）

取水表示为果园灌溉从环境中按水源取用的水量。

- 选定流：water `419682fe-60fb-4b43-be89-bf2824b51104`
- 流属性/单位：Mass / kg
- 数量规则：按水源由计量灌溉水计算，不与输送水重复
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`dzikiti-apple-water-footprint-2019`
- 数量范围：实测果园水足迹背景区间
  - 范围角色：典型范围（`typical_range`）
  - 下限：0.187
  - 上限：0.237
  - 单位：m3 总水足迹/kg 苹果
  - 基准：实测背景；取水仍须按水源记录
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`dzikiti-apple-water-footprint-2019`

#### 产出

##### 产品流

###### 验收鲜苹果（`accepted_fresh_apples`）

验收鲜苹果是在声明果园门计量的可销售参考产品。

- 选定流：Apple, natural mix, at orchard `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- 流属性/单位：Mass / kg
- 数量规则：果园门实测验收净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：定量参考
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`codex-cxs-299-2010`
- 数量范围：参考产出恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：定量参考产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 工业级苹果（`industrial_grade_apples`）

工业级苹果是作为产品出售或转移用于加工的非参考果实。

- 选定流：Apple, natural mix, at orchard `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- 流属性/单位：Mass / kg
- 数量规则：实测出售或转移用于加工的果实
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`codex-cxs-299-2010`
- 数量范围：采收质量平衡比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 总采收苹果
  - 基准：总采收苹果质量比例
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 次果和果园生物质（`culled_apples_and_orchard_biomass`）

次果和果园生物质按有证据的去向记录非产品果实、修剪物和清园材料。

- 选定流：场址特定的可生物降解果实或木质农业废物流
- 流属性/单位：Mass / kg，木质生物质保留干物质基准
- 数量规则：按去向实测次果、修剪物和清园生物质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`ucdavis-orchard-lca-findings-2020`
- 数量范围：产出核对校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：宽泛核对区间；必须有按去向记录
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：来源规则（`source_rule`）
  - 来源：`ucdavis-orchard-lca-findings-2020`

##### 基本流

###### 管理土壤氧化亚氮排放到空气（`direct_soil_nitrous_oxide_emission`）

根据果园氮投入和选定的 IPCC 层级计算直接与间接氧化亚氮，并与氨和硝酸盐分开记录。

- 选定流：nitrous oxide, emissions to air unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 / kg N2O
- 数量规则：应用 `calculate_direct_soil_n2o`，并以 44/28 将报告的 N2O-N 换算为 N2O
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_orchard_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 氨挥发排放到空气（`direct_soil_ammonia_emission`）

仅在果园施氮记录和声明的适用氨排放方法支持单独估计时纳入；不得用 N2O 因子代替。

- 选定流：ammonia, emissions to air unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 / kg NH3
- 数量规则：按声明方法计算氨；若结果以 NH3-N 表示，则以 17/14 换算为 NH3
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：氮投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 硝酸盐排入淡水（`direct_soil_nitrate_freshwater_emission`）

仅在监测或声明的氮损失方法支持硝酸盐进入淡水时纳入，并保留受纳水体证据。

- 选定流：nitrate, emissions to fresh water `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 / kg nitrate
- 数量规则：计算或测量进入淡水的硝酸盐；若结果以 nitrate-N 表示，则以 62/14 换算为硝酸盐
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：氮投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 燃料化石二氧化碳（`fossil_carbon_dioxide_from_fuel`）

燃料化石二氧化碳表示由燃料记录计算的场内直接燃烧排放。

- 选定流：carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：燃料记录乘以声明燃烧因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 数量范围：燃料碳计算校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg CO2/kg 参考产品
  - 基准：由燃料记录和因子计算
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

### 过程：果园门处理（`orchard_gate_handling`）

#### 投入

##### 产品流

仅在门点前发生果园内处理时记录水、电力、可重复使用果箱和材料，并使用上文适用的流标识和协议。

##### 废物流

废物衍生投入单独记录。

##### 基本流

不得重复记录果园生产中已记录的取水。

#### 产出

##### 产品流

###### 果园门处理后苹果（`orchard_gate_handled_apples`）

果园门处理后苹果是经过纳入范围的果园内处理后的验收参考产品。

- 选定流：Apple, natural mix, at orchard `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- 流属性/单位：Mass / kg
- 数量规则：果园内处理后的实测验收产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：定量参考
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`codex-cxs-299-2010`
- 数量范围：参考产出恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：定量参考产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

计量新增次果并与投入果实核对。

##### 基本流

仅记录前景边界内发生的直接处理排放。

## 7. 分配与联产品处理

### 分配规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 子过程与等级 | 记录允许时首先拆分建园、管理、采收、处理、工业果和残余物管理以避免分配。 | `iso-14044-2006` |
| `allocation_perennial_time` | 建园与清园 | 按声明生产寿命及终生产可销售产量年化可归属负荷；披露未结果年、补植和产量假设。 | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `allocation_multiple_apple_outputs` | 验收与工业苹果 | 无法拆分时采用质量分配；经济分配需要代表性价格及质量分配敏感性。 | `iso-14044-2006` |
| `allocation_residue_fate` | 果园生物质 | 果园承担收集和场内管理；仅在被替代产品、路线和市场有证据时采用替代。实际露天焚烧须明确建模。 | `ucdavis-orchard-lca-findings-2020`; `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_orchard_lifecycle_records | orchard_lifecycle_and_production | 建园与清园 | 果园资产记录 | 地块；定植年；生产寿命；树木；补植；支撑；灌溉材料；清园；去向 | 发票、田间日志、资产台账 | item, kg, L, kWh, year | 每次事件 | 完整果园模型 | 果园地块 | 按终生产可销售产出年化 | 发票、资产台账、计算工作簿 |
| cp_orchard_input_records | orchard_lifecycle_and_production | 肥料与植保 | 采购及施用记录 | 产品；活性成分或养分；质量；日期；面积；地块 | 发票、标签、施用日志 | kg 产品、kg 养分、kg 活性成分 | 每次施用 | 采收年 | 果园地块 | 按物质求和并按验收质量归一化 | 发票、标签、施用日志 |
| cp_irrigation_records | orchard_lifecycle_and_production | 灌溉与取水 | 计量及抽水记录 | 水源；表计；读数；体积；抽水能源；日期；地块 | 校准水表、抽水日志、发票 | m3 和能源单位 | 每次或每月 | 灌溉季 | 地块及水源 | 按水源求和并按验收质量归一化 | 校准、读数、发票 |
| cp_energy_records | orchard_lifecycle_and_production | 燃料与电力 | 能源记录 | 作业；机械；能源类型；数量；期间；地块 | 燃料日志、遥测、表计、发票 | L, kg, MJ, kWh | 每次作业或计费期 | 采收年 | 果园地块 | 按作业分配并按验收质量归一化 | 发票、表计、设备日志 |
| cp_land_and_output_records | orchard_lifecycle_and_production | 土地及苹果产出 | 地块与采收记录 | 面积；年龄；品种；采收日；毛重；皮重；验收；工业级；次果；生物质；等级；去向 | GIS、校准秤、发运及去向记录 | ha, year, kg | 每次采收及年度核对 | 完整采收年 | 地块及门点 | 核对产出并按验收质量归一化 | 地图、校准、票据、等级和去向记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_marketable_yield` | 参考产品 | 验收净质量 / 生产面积 | cp_land_and_output_records | kg 验收苹果/ha 及验收比例 | `mass-balance-identity` |
| `annualize_orchard_lifecycle` | 建园与清园 | 采用年龄特定数据或有文件的产量曲线，将可归属生命周期投入除以终生产验收产出 | cp_orchard_lifecycle_records; cp_land_and_output_records | 年化投入/kg 参考产品 | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `calculate_water_withdrawal` | 灌溉 | 按水源计量取水 / 验收质量；消耗或水足迹单独报告 | cp_irrigation_records; cp_land_and_output_records | m3 水/kg 参考产品 | `dzikiti-apple-water-footprint-2019` |
| `calculate_direct_soil_n2o` | 肥料氮 | 应用所选 IPCC 层级并以 44/28 将 N2O-N 换算为 N2O | cp_orchard_input_records; 声明因子 | kg N2O/kg 参考产品 | `ipcc-2019-managed-soils-n2o` |
| `reconcile_apple_outputs` | 采收果实 | 验收 + 工业级 + 次果 + 实测损失 = 声明容差内总采收量 | cp_land_and_output_records | 质量平衡和未解释损失 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 声明品种、地块、路线、灌溉、地理、期间、等级、门点和包装状态。 | 元数据、果园及发运记录 |
| `dq_temporal_representativeness` | 多年生生产 | 覆盖完整采收年并披露年龄和产量变异；代表性数据使用最近至少三年或说明单年合理性。 | 带日期采收和投入记录 |
| `dq_mass_balance` | 产出 | 核对采收、验收、工业级、次果和损失；记录皮重和校准。 | 称量记录和核对表 |
| `dq_input_completeness` | 管理 | 对肥料、灌溉、植保、能源、建园、土地、生物质去向和直接排放计量或说明零值/排除。 | 台账、日志、表计、发票 |
| `dq_geographic_representativeness` | 水与能源 | 记录水源、抽水、电力组合、燃料、气候和灌溉状态；引用水范围不得作为默认值。 | 水源记录和地理元数据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 确认唯一 1 kg 参考流使用已核验 Apple UUID 及所有必需限定词。 | `codex-cxs-299-2010` |
| `validation_scope` | 清单 | 确认建园、幼龄年、生产年、管理、采收、清园和处理已纳入或说明。 | `goossens-apple-orchard-lca-2017`; `baima-apple-orchard-lca-2024` |
| `validation_mass_balance` | 产出 | 确认苹果产出在容差内与采收量核对，且每个非参考产出有去向。 | `mass-balance-identity` |
| `validation_nitrogen` | 肥料与含氮排放 | 确认产品质量与 kg N 不混用；分别核验 N2O、NH3 和硝酸盐的数量、接收介质、方法因子及氮当量质量平衡。按物质质量报告时，分别以 44/28、17/14、62/14 将 N2O-N、NH3-N、nitrate-N 换算。 | `ipcc-2019-managed-soils-n2o`; `mass-balance-identity` |
| `validation_water` | 水流 | 确认取水、输送灌溉水、消耗和水足迹未重复或错标。 | `dzikiti-apple-water-footprint-2019` |
| `validation_allocation` | 共享负荷 | 确认披露果园寿命、产量基准、年化、分配、残余物去向及敏感性。 | `iso-14044-2006` |
| `validation_completeness` | 数据包 | 确认每类要求有数值、有依据零值或排除，超出范围的数值有说明。 | `ucdavis-orchard-lca-findings-2020`; `baima-apple-orchard-lca-2024` |

## 10. 已发布数据集档案

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 品种、地理、路线、灌溉、果园年龄结构、期间、等级和门点匹配的果园门鲜苹果供应 |
| excluded_use | 苗木；主要用于加工的果实；包装场、冷藏、配送、零售、消费或加工产品 |
| required_metadata | 参考 UUID 与限定词；代表果园；地理；品种；路线；灌溉；年龄；生产寿命；期间；产量；验收比例；等级；包装；门点；分配；协议覆盖 |
| required_quality_disclosure | 年份；原始记录覆盖；质量平衡容差；校准；背景代表性；水源；因子；排除；不确定性和敏感性 |
| update_trigger | 品种、路线、水源、年龄模型、产量、验收比例、植保、施肥、能源、生物质去向、门点或代表期发生重大变化 |

## 11. 数据来源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-299-2010` | standard | Codex Alimentarius CXS 299-2010, Standard for Apples, <https://workspace.fao.org/sites/codex/Standards/CXS%20299-2010/CXS_299e.pdf> | 鲜苹果范围、加工排除、品质和可销售性 |
| `goossens-apple-orchard-lca-2017` | literature | Goossens et al., Agricultural Systems 153 (2017) 81-93, <https://doi.org/10.1016/j.agsy.2017.01.007> | 果园生命周期边界、高低产年、体系变异 |
| `baima-apple-orchard-lca-2024` | literature | Baima et al., Heliyon 10 (2024) e38397, <https://doi.org/10.1016/j.heliyon.2024.e38397> | 建园及管理清单、生产寿命建模 |
| `dzikiti-apple-water-footprint-2019` | literature | Dzikiti et al., Agricultural and Forest Meteorology 271 (2019) 135-147, <https://doi.org/10.1016/j.agrformet.2019.02.042> | 实测果园水足迹范围和水量区分 |
| `ucdavis-orchard-lca-findings-2020` | official_guidance | UC Davis SAREP, Orchard Life Cycle Assessment: Findings, <https://sarep.ucdavis.edu/are/energy/lcaorchard-findings> | 过程完整性、生物质去向、灌溉能耗差异 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤 N2O 计算 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级 |
| `mass-balance-identity` | method_factor | 将质量守恒用作 PCR 计算恒等式。 | 产出核对和年化检查 |
