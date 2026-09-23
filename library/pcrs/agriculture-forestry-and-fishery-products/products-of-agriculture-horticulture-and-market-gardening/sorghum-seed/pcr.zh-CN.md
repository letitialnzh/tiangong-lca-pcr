---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-seed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 高粱播种种子

## 1. 适用范围

本 PCR 用于构建播种用高粱种子的前景数据包，覆盖种子繁育或受控制种、田间管理、收获、适用时的脱粒或脱壳、干燥、清理、分级、质量检测、可选处理、包装、储存以及到声明种子门点的交付。

适用对象包括在声明种子等级、品种、生产路线、质量状态、地理位置、报告期和门点的前提下生产的育种家种子、基础种子、登记种子、认证种子、农户留种或同类播种种子批次。本 PCR 是数据集生产规则，不提供通用产品数量、排放因子、质量数值，也不提供下文已核实参考产品身份以外的通用 UUID。

商品高粱谷物、食用或饲用高粱、甜高粱、青贮或饲草高粱、下游高粱种植、谷物加工、零售、消费者使用，以及没有高粱种子产品输出的种子加工服务不在本 PCR 范围内。育种研究和资本货物仅在前景数据包明确包含时纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sorghum-seed` |
| classification_refs | CPC 3.0 `01141`，`Sorghum, seed` |
| covered_products | 用于播种的清理、分级并完成质量检测的高粱种子，包括声明的育种家、基础、登记、认证、农户留种或同类种子批次 |
| excluded_products | 商品高粱谷物；甜高粱；青贮或饲草高粱；食用或饲用高粱；下游作物生产；高粱加工产品；没有高粱种子产品输出的种子加工服务 |
| representative_product | 在声明含水率基准、质量状态、处理状态、包装状态和种子门点交付的合格高粱播种种子 |
| production_route | 高粱种子繁育或受控制种，随后进行收获、调理、质量检测、可选处理、包装、储存和交付 |
| market_state | 已放行播种种子批次，具有声明等级、品种、质量证据、处理状态、地理位置、报告期、包装状态和门点 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明种子门点的合格高粱播种种子 |
| How much | 1 kg 合格种子净质量 |
| How well | 声明种子等级、适用时的品种或杂交状态、含水率基准、物理纯度、发芽率或活力、处理状态、地理位置、报告期、包装状态和门点 |
| How long or cycle | 一个声明的高粱种子生产作季；若储存包含在门点内，另行声明储存时长 |
| reference_flow_link | 见下方参考数量和已核实的平台产品流 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 种子等级或认证等级；高粱品种或适用时的杂交状态；含水率基准；物理纯度；发芽率或活力；处理状态；地理位置；作季和报告期；声明的种子门点；包装状态 |
| 绑定 | `fixed` |

参考数量是声明门点的合格种子净质量。容器皮重、去除的水分、筛下物、拒收种子、粉尘、储存损失、包装废物和其他残余物必须单独记录，不得悄然并入参考输出。种子数量记录必须有千粒重或其他透明的数量到质量换算。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流应表示声明门点和含水率基准下合格高粱播种种子的净质量。 |
| `seed_count_conversion` | 种子数量记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and seeds | 只有记录千粒重、批次粒数或其他透明换算时，才可将粒数换算为质量。 |
| `seed_quality_attributes` | 合格种子 | 声明的质量属性 | percent 或声明单位 | 将种子等级、品种或杂交状态、物理纯度、发芽率或活力、含水率、处理状态、取样基准和放行决定保留为批次属性，不用通用默认值替代。 |
| `moisture_basis` | 收获、调理、储存和合格种子 | 质量和声明含水率分数 | kg and percent | 保留接收质量和参考质量的含水率基准；只有使用实测含水率和明确的干物质及水质量方程时，才可进行基准换算。 |
| `nutrient_basis` | 养分投入和土壤排放 | 质量和养分含量 | kg product and kg nutrient | 分别记录配方产品质量和养分含量；氮排放计算使用声明的 kg N，而不是肥料产品质量。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 or kg | 区分水资源取水、送达灌溉水、消耗量、输送损失以及单独报告的水指标。 |
| `energy_inventory` | 田间、泵送、干燥、调理、储存和交付能源 | 能量或载能体质量 | kWh、MJ、L 或 kg | 保留能源载体、计量单位、作业、过程、地理位置和换算基准。 |
| `packaging_quantity` | 包装投入和废物 | 质量、面积或件数 | kg、m2 或 item | 记录包装材料数量以及与合格参考输出对账所需的包装容量或件数。 |
| `land_basis` | 土地占用和转化 | 面积时间或面积 | ha·crop cycle 或声明的平台单位 | 记录种植面积和作季占用，并将土地转化与土地占用分开；不得用土地占用代替土地转化。 |

## 5. 系统边界

默认前景边界从声明的来源种子批次或其他声明的制种起始条件开始，止于声明种子门点的合格高粱播种种子。边界包括整地、播种、养分管理、适用时的灌溉、作物保护、去杂或田间检查、田间作业、收获、适用时的脱粒或脱壳、门点包含时的田间至设施转运、干燥、清理、分级、质量检测、处理、包装、储存，以及门点为交付种子时的交付。

外购养分产品、能源载体、包装、处理材料和处理服务的上游生产由链接的背景数据表示。商品高粱、甜高粱、食用或饲用加工、谷物加工、下游种植、零售和消费者使用不在默认边界内。进入调理过程的收获种子作物是中间交接，必须与最终播种种子参考输出保持区分。

### 边界规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_seed_production` | 田间和种子设施路线 | 纳入声明的起始种子或制种条件、田间生产、收获、适用时的脱粒或脱壳、干燥、清理、分级、质量检测、处理、包装、储存以及到声明门点的交付。 | `fao-sorghum-seed-production`; `fao-grain-postharvest-systems` |
| `boundary_gate_definition` | 参考产品 | 默认使用种子厂门点或农场门点。交付种子门点必须有储存或交付记录、损失、包装状态和门点交接证据。 | `fao-sorghum-seed-production`; `mass-balance-identity` |
| `boundary_input_completeness` | 所有前景路线 | 对来源种子、养分、灌溉、作物保护、土地、田间能源、泵送、干燥、调理能源、处理材料、包装、储存和直接排放给出采集值、合理为零或书面排除。 | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_quality_separation` | 高粱种子输出 | 按实测质量和声明去向分别记录合格种子、有意联产品、收获中间作物、筛下物、拒收种子、破碎或受损种子、粉尘、储存损失、包装废物和其他残余物。 | `fao-sorghum-seed-production`; `fao-grain-cleaning-treatment`; `mass-balance-identity` |
| `boundary_moisture_reconciliation` | 收获、干燥、调理和储存 | 在一个声明的含水率基准上核对输入和输出，并披露干燥去除的水分或储存损失。 | `fao-sorghum-seed-production`; `fao-grain-postharvest-systems`; `mass-balance-identity` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | source seed lot or declared sorghum seed-production starting material |
| starting_condition_role | seed identity and propagation condition |
| product_classification_scope | 当前 CPC 3.0 产品类别 `01141`，`Sorghum, seed`；商品高粱和甜高粱不在本 PCR 范围内 |
| recursive_input_rule | 会导致递归追踪的同类种子投入记录为带有批次身份、来源、用途和质量的声明来源种子批次，不递归展开种子 PCR |
| upstream_dataset_requirement | 外购材料、能源、水供应、运输、处理和废物服务使用代表性上游数据，并在前景包中披露 Flow Set 解析结果 |
| disclosure | 记录来源种子批次、品种或杂交状态、种子等级、田块和地理位置、作季、生产系统、灌溉、养分和作物保护、收获质量和含水率、调理、质量检测、处理、包装、储存、门点、输出、残余物去向和报告期 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `sorghum_seed_multiplication` | 高粱种子繁育 | required | 纳入田间或受控的高粱种子生产 | 前景 | 调理前的收获高粱种子作物 |
| `sorghum_seed_conditioning_and_treatment` | 高粱种子调理与处理 | required | 纳入声明门点前的干燥、适用时的脱粒或脱壳、清理、分级、检测、处理和包装 | 前景 | 合格高粱种子输出 |
| `sorghum_seed_storage_and_delivery` | 高粱种子储存与交付 | conditional | 当储存或交付属于声明门点或显著改变参考产品状态时纳入 | 前景 | 交付的合格高粱种子输出 |

### 过程：高粱种子繁育（`sorghum_seed_multiplication`）

#### 输入

##### 产品流

###### 用于繁育的来源种子批次（`source_seed_lot`）

来源种子批次是繁育投入。品种、等级、处理状态、来源、质量、质量和批次身份与当前作季的合格输出分开记录；同类追踪在声明的起始条件处停止。

- 选定流：Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：来源批次实测质量或透明的播种记录换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的高粱种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_seed_lot`
- 来源：`fao-sorghum-seed-production`

###### 农业养分与肥料投入（`sorghum_seed_multiplication_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的高粱种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：

###### 灌溉供水（`irrigation_water`）

按田块和水源记录送达的灌溉水。经证实的雨养路线需提供田间证据并记录合理为零。

- 选定流：供应到高粱制种田的灌溉水
- 绑定：`parameterized`
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按田块和水源计量或有证据的送达灌溉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的高粱种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`

###### 田间机械能源（`field_energy`）

记录整地、播种、作物管理、收获和田间转运使用的燃料或实测机械能。当灌溉泵送有独立计量或分摊时，与田间能源分开。

- 选定流：田间机械能源供应
- 绑定：`parameterized`
- 流属性/单位：Energy or carrier mass / MJ, kWh, L, or kg
- 数量规则：按作业记录田间燃料或机械能使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的高粱种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`

###### 灌溉泵送电力（`irrigation_pumping_electricity`）

当泵站电力不在其他实测能源记录中时，记录灌溉泵送或田间电动设备的外购电力。

- 选定流：灌溉泵送用外购电力
- 绑定：`parameterized`
- 流属性/单位：Energy / kWh or MJ
- 数量规则：按电表、公共事业账单或分摊到声明路线的供应商记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的高粱种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`

###### 作物保护材料（`crop_protection_material`）

记录用于杂草、害虫或病害的配方产品和活性物质。产品身份与活性物质含量分开。

 - 选定流：高粱种子生产用作物保护材料
- 流属性/单位：Mass / kg product or active substance
- 数量规则：按产品和活性物质记录实测施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 收获的高粱种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`

##### 废物流

不假定废物投入。废物衍生或回收投入只有在来源、处理、用途和数量有记录时才纳入；其养分或材料功能仍使用适用的现有投入 Flow Set。

##### 基本流

###### 土地占用（`land_occupation`）

记录种植面积和作季占用。土地转化是独立的相互作用，不得从占用推断。

- 选定流：支持高粱种子生产的土地占用
- 流属性/单位：Area-time / ha·crop cycle or declared platform unit
- 数量规则：田间实测种植面积和声明的作季时长
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作季并按每 kg 参考输出
- 基准类型：作季（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`

###### 水资源取水（`water_withdrawal`）

按水源记录水资源取水，并与送达灌溉水及有记录的输送损失对账。

- 选定流：高粱种子灌溉取用的水资源
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：水源计量取水，与送达量和消耗量分开
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的高粱种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`

#### 输出

##### 产品流

###### 收获的高粱种子作物（`harvested_sorghum_seed_crop`）

离开田间生产并进入调理的收获高粱种子作物是中间产品交接。在调理、质量放行和声明门点完成前，它不是最终参考输出。

- 选定流：用于调理的收获高粱种子作物
- 流属性/单位：Mass / kg
- 数量规则：按声明接收含水率基准的收获质量实测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的高粱种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`

##### 废物流

田间残余物、移除的生物质以及受损或未收获材料仅在跨越声明田间边界时记录。记录实测量和去向；废物输出不使用产品投入 Flow Set。

###### 田间残余物或移除的生物质（`field_residues_or_removed_biomass`）

跨越声明边界的田间残余物或移除的生物质记录为废物输出，除非数据包声明了有意的联产品交接。

- 选定流：高粱种子生产产生的田间残余物或移除的生物质
- 流属性/单位：Mass / kg
- 数量规则：按田块或作季记录实测质量和声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的高粱种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`

##### 基本流

###### 土壤直接氧化亚氮排放（`direct_soil_n2o`）

根据声明的氮投入和选定的 IPCC 或认可的区域方法计算土壤直接氧化亚氮。最终基本流在前景数据生成时解析。

- 选定流：土壤直接氧化亚氮空气排放
- 流属性/单位：Mass / kg N2O or kg N2O-N as required by the selected method
- 数量规则：将选定方法应用于声明氮投入和田间条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考输出
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 氨排放（`ammonia_emission`）

当所选氮方法和前景证据支持该路径时，记录排放到空气的氨。

- 选定流：高粱种子生产产生的环境空气氨排放
- 流属性/单位：Mass / kg NH3
- 数量规则：将场址或区域氮排放方法应用于声明氮投入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考输出
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 水体硝酸盐排放（`nitrate_emission`）

只有田间证据或选定区域方法支持水体损失路径时，才记录水体硝酸盐损失。

- 选定流：高粱种子生产产生的水体硝酸盐排放
- 流属性/单位：Mass / kg nitrate or nitrogen equivalent as required by the selected method
- 数量规则：将选定淋失方法应用于声明氮投入和水分条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考输出
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`

### 过程：高粱种子调理与处理（`sorghum_seed_conditioning_and_treatment`）

#### 输入

##### 产品流

###### 用于调理的收获高粱种子作物（`conditioning_seed_crop_input`）

记录进入干燥、适用时的脱粒或脱壳、清理、分级、检测和处理路线的收获作物。接收质量和含水率基准与合格输出分开。

- 选定流：用于调理的收获高粱种子作物
- 流属性/单位：Mass / kg
- 数量规则：按批次实测接收质量和含水率基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格高粱种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input`

###### 调理电力（`conditioning_electricity`）

记录纳入门点的清理、分级、脱粒、输送、检测和其他调理作业用电。

- 选定流：高粱种子调理用外购电力
- 绑定：`parameterized`
- 流属性/单位：Energy / kWh or MJ
- 数量规则：按批次或调理期间的电表、账单或有依据的分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格高粱种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`

###### 干燥热或能源载体（`drying_heat`）

记录将种子干燥至声明质量和储存状态所用的热量或能源载体，并明确载体、单位、作业和换算基准。

- 选定流：干燥热或燃烧能源载体
- 绑定：`parameterized`
- 流属性/单位：Energy or carrier mass / MJ, kWh, L, or kg
- 数量规则：按批次实测干燥能源或有文件支持的载能体换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格高粱种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-grain-postharvest-systems`

###### 种子处理材料（`seed_treatment_material`）

当处理属于声明市场状态且跨越前景边界时，记录配方处理产品或活性物质。

 - 选定流：高粱种子处理材料
- 流属性/单位：Mass / kg product or active substance
- 数量规则：按处理批次记录产品和活性物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后的高粱种子输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_treatment_records`
- 来源：`fao-sorghum-seed-production`

###### 一次包装（`primary_packaging`）

记录用于容纳、保护、标识和放行声明高粱种子输出的包装。

- 选定流：高粱种子一次包装
- 绑定：`parameterized`
- 流属性/单位：Mass, area, or item / kg, m2, or item
- 数量规则：实测材料质量、面积或件数及包装容量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装高粱种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`

##### 废物流

不假定调理废物投入。回收或再生材料只有在来源、处理、数量和用途明确时才纳入。

##### 基本流

调理资源和排放仅在跨越声明设施边界且未由田间过程或已选能源和材料行表示时记录。

#### 输出

##### 产品流

###### 合格播种用高粱种子（`accepted_sorghum_seed_output`）

合格高粱种子是本 PCR 的参考产品角色。只有在声明质量、处理、包装、门点和批次证据完成后，才可放行。

- 选定流：Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：声明含水率基准和门点的合格种子净质量实测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：PCR 参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_accepted_seed_output`
- 来源：`fao-sorghum-seed-production`

##### 废物流

筛下物、拒收种子、破碎或受损种子、作为废物捕集的粉尘、包装废物和其他非参考输出必须记录实测质量和声明去向。它们不使用产品投入 Flow Set，也不设置产品输出回退绑定。

###### 调理筛下物和拒收种子（`conditioning_screenings_and_rejected_seed`）

调理路线产生的筛下物、拒收种子、破碎种子或受损种子作为废物输出记录，除非数据包声明了有意的联产品交接。

- 选定流：高粱种子调理产生的筛下物和拒收种子
- 流属性/单位：Mass / kg
- 数量规则：按批次记录实测质量、含水率基准和声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格高粱种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_and_screening_records`

###### 调理包装废物（`conditioning_packaging_waste`）

将调理和包装过程中丢弃的包装材料与进入合格产品包装状态的包装材料分开记录。

- 选定流：高粱种子调理和包装产生的包装废物
- 流属性/单位：Mass / kg
- 数量规则：包装废物实测质量和声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装高粱种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`

##### 基本流

###### 调理粉尘排放（`conditioning_dust`）

当清理、分级、脱粒、脱壳或处理产生的粉尘或颗粒物对声明路线具有实质性影响，或选定方法要求时，记录其排放。

- 选定流：高粱种子调理产生的环境空气粉尘或颗粒物排放
- 流属性/单位：Mass / kg
- 数量规则：按批次或调理期间实测或使用有文件支持的方法计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格高粱种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_emissions`
- 来源：`fao-grain-cleaning-treatment`

### 过程：高粱种子储存与交付（`sorghum_seed_storage_and_delivery`）

#### 输入

##### 产品流

###### 储存电力（`storage_electricity`）

当冷却、通风、监测或其他储存能源属于声明门点时，纳入储存电力。

- 选定流：高粱种子储存用外购电力
- 绑定：`parameterized`
- 流属性/单位：Energy / kWh or MJ
- 数量规则：按批次和储存期间实测或有依据的分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 交付的高粱种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_delivery_records`
- 来源：`fao-sorghum-seed-production`

###### 交付运输服务（`delivery_transport`）

只有声明门点为交付种子时才纳入运输。记录路线、承运方、载荷、距离和分摊基准。

- 选定流：交付高粱种子的货运服务
- 绑定：`parameterized`
- 流属性/单位：Mass-distance or declared service unit
- 数量规则：按批次和路线记录运输活动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 交付的高粱种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_delivery_records`

##### 废物流

储存损失、受损批次和交付损失作为废物或非参考输出记录质量、含水率基准和去向，不得悄然并入合格种子输出。

###### 储存和交付损失（`storage_and_delivery_losses`）

记录储存或交付期间损失或降级的质量，并记录其含水率基准、报告期和去向。

- 选定流：高粱种子的储存和交付损失
- 流属性/单位：Mass / kg
- 数量规则：按批次或期间记录实测损失质量和声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 交付的高粱种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_delivery_records`

##### 基本流

储存和交付不设置默认基本流。只有当资源或排放跨越声明边界且具有记录身份和数量时，才增加相应行。

#### 输出

##### 产品流

###### 交付的合格高粱种子（`delivered_sorghum_seed_output`）

当交付在声明门点内时，交付的合格批次仍是同一高粱种子参考产品，并与储存和运输损失对账。

- 选定流：Sorghum, seed `0ad65fec-228e-47cf-8d8d-6d00f56c18ed`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：交付门点实测合格净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：PCR 参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_delivery_records`

##### 废物流

单独记录储存和交付损失及其去向，不使用合格种子行的 fixed 绑定。

##### 基本流

不对储存和交付主张默认基本流。路线特定排放必须来自采集记录或认可的方法，并保留受纳环境。

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoidance` | 田间、调理、处理、包装、储存和交付 | 在记录允许时，通过将种子繁育、调理、处理、包装、储存、拒收处理和残余物管理分成独立过程来避免分配。 | `iso-14044-2006` |
| `allocation_output_completeness` | 合格种子和非参考输出 | 选择分配方法前，列出合格种子、有意联产品、收获中间作物、筛下物、拒收种子、损失、残余物、包装废物及各自去向。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_method_selection` | 共享负荷 | 若负荷仍然共享，声明选定的物理或经济关系、报告期、数据基准和敏感性；不得使用模块或 PCR 默认数量作为分配答案。 | `iso-14044-2006` |
| `allocation_seed_quality` | 种子等级和质量放行 | 不得仅依据种子质量标签分配。批次放行、质量、合格种子和非合格去向必须能追溯到实测输出和声明决定。 | `fao-sorghum-seed-production`; `iso-14044-2006` |

筛下物、拒收物、粉尘、田间残余物、储存损失和包装废物不会仅因可能存在用途就成为联产品。只有数据包声明其有意生产、转移或销售、质量、数量、目的地和可辩护的归属决定时，才将其作为联产品。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot` | `sorghum_seed_multiplication` | 来源种子批次 | 批次和播种记录 | 批次号；品种或杂交状态；种子等级；供应商或来源；处理；质量；播种日期；田块 | 批次证书、发票、播种日志和校准秤 | kg 和声明属性 | 每批次和作季 | 完整作季 | 田块或种子农场 | 按批次求和并关联种植面积 | 批次证书和称量记录 |
| `cp_nutrient_records` | `sorghum_seed_multiplication` | 养分和土壤改良投入 | 投入台账 | 产品；配方；养分含量；质量；田块；日期；供应商；施用方法 | 发票、施用日志和田间记录 | kg product 和 kg nutrient | 每次施用 | 作季 | 田块或地块 | 按产品和养分求和 | 发票和施用记录 |
| `cp_irrigation_records` | `sorghum_seed_multiplication` | 送达灌溉和取水 | 计量或泵送记录 | 水源；水表；读数；体积；泵送能源；日期；田块 | 校准水表、泵送日志或账单 | m3、kg 和能源单位 | 每次或每期 | 灌溉期 | 田块和水源 | 区分取水、送达、消耗和损失 | 水表校准和读数 |
| `cp_field_energy_records` | `sorghum_seed_multiplication` | 田间能源 | 机械或燃料记录 | 作业；载能体；数量；设备；田块；日期 | 燃料台账、机械记录或实测作业 | L、kg、MJ 或 kWh | 每次作业 | 作季 | 田块和机械组 | 按作业和载能体求和 | 发票或机械记录 |
| `cp_crop_protection_records` | `sorghum_seed_multiplication` | 作物保护 | 施用记录 | 产品；活性物质；施用率；面积；日期；田块；条件 | 施用日志和产品标签 | kg product、kg active substance 或声明单位 | 每次施用 | 作季 | 田块或地块 | 按产品和活性物质求和 | 施用日志和标签 |
| `cp_land_and_output_records` | `sorghum_seed_multiplication` | 土地、收获和田间输出 | 田块和收获记录 | 面积；作季日期；作季年份；收获质量；含水率；残余物；去向 | 田块登记、地磅和水分记录 | ha、day、kg 和 percent | 每块和每次收获 | 作季 | 田块或地块 | 核对面积、持续时间、收获量和去向 | 田块登记和称量记录 |
| `cp_conditioning_input` | `sorghum_seed_conditioning_and_treatment` | 接收种子作物 | 接收记录 | 批次；接收质量；含水率；来源田块；日期；转运 | 接收称量和水分检测 | kg 和 percent | 每批次 | 调理期 | 设施和批次 | 在统一含水率基准上按批次求和 | 称量和检测记录 |
| `cp_conditioning_energy_records` | `sorghum_seed_conditioning_and_treatment` | 电力和干燥热 | 公用事业和燃料记录 | 作业；载能体；电表；数量；日期；批次或期间 | 电表、账单、燃料记录和批次日志 | kWh、MJ、L 或 kg | 每批次或期间 | 调理期 | 设施和产线 | 仅使用有依据的分摊驱动 | 电表和账单 |
| `cp_seed_treatment_records` | `sorghum_seed_conditioning_and_treatment` | 处理材料 | 处理批次记录 | 产品；活性物质；施用率；处理质量；批次；日期 | 批次单和产品记录 | kg product 和 kg treated seed | 每批次 | 调理期 | 设施和批次 | 按处理产品、活性物质和输出求和 | 批次单和标签 |
| `cp_packaging_records` | `sorghum_seed_conditioning_and_treatment` | 包装 | 包装台账 | 材料；规格；件数；质量；容量；批次；日期 | 领料记录和称量 | kg、m2 或 item | 每批次或期间 | 调理期 | 设施 | 按材料和包装状态求和 | 库存记录和称量 |
| `cp_accepted_seed_output` | `sorghum_seed_conditioning_and_treatment` | 参考输出 | 质量和发运记录 | 批次；合格质量；含水率；纯度；发芽率或活力；处理；包装；门点 | 质量证书、称量和发运记录 | kg 和声明质量单位 | 每批次 | 声明报告期 | 设施和目标门点 | 仅汇总质量放行后的合格输出 | 证书和校准秤 |
| `cp_reject_and_screening_records` | `sorghum_seed_conditioning_and_treatment` | 筛下物和拒收物 | 筛分和处置记录 | 批次；材料；质量；含水率；去向；去向类型 | 筛分日志和处置记录 | kg 和声明去向 | 每批次 | 调理期 | 设施 | 按材料和去向求和 | 称量和处置记录 |
| `cp_packaging_waste_records` | `sorghum_seed_conditioning_and_treatment` | 包装废物 | 废物日志 | 材料；质量；来源；去向；日期 | 废物日志和转移记录 | kg | 每批次或期间 | 调理期 | 设施 | 按材料和去向求和 | 废物转移记录 |
| `cp_conditioning_emissions` | `sorghum_seed_conditioning_and_treatment` | 粉尘和直接排放 | 排放记录 | 来源；物质；数量；方法；日期；产线 | 实测排放或有文件支持的计算 | kg | 每批次或期间 | 调理期 | 设施 | 按排放路径求和 | 监测记录或方法表 |
| `cp_storage_and_delivery_records` | `sorghum_seed_storage_and_delivery` | 储存能源、运输和损失 | 储存和发运记录 | 期初质量；期末质量；含水率；储存时长；能源；路线；距离；载荷；损失；门点 | 库存、计量、水分、运输和发运记录 | kg、percent、day、kWh、MJ 和声明运输单位 | 每批次或期间 | 声明储存和交付期 | 设施、承运方和门点 | 核对转运、含水率、合格输出和损失 | 称量、电表、水分和发运记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_reference_output` | 合格高粱种子 | 以声明含水率基准和门点下质量放行后的合格净质量作为参考输出 | `cp_accepted_seed_output` | kg 参考输出 | `mass-balance-identity` |
| `convert_moisture_basis` | 收获、干燥、调理和储存 | 干物质 = 湿质量 ×（1 − 含水率分数）；目标基准质量 = 干物质 /（1 − 目标含水率分数） | `cp_conditioning_input`; `cp_accepted_seed_output`; `cp_storage_and_delivery_records` | 统一基准质量 | `mass-balance-identity`; `fao-grain-postharvest-systems` |
| `calculate_water_withdrawal` | 灌溉 | 按参考输出归一化水源取水，并另行报告送达量、消耗量和输送损失 | `cp_irrigation_records`; `cp_accepted_seed_output` | 每 kg 参考输出的水量 | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_n2o` | 田间氮 | 应用选定 IPCC 或认可区域方法，并记录 N2O-N 到 N2O 的换算（如有） | `cp_nutrient_records`; 选定方法因子 | 每 kg 参考输出的 kg N2O | `ipcc-2019-managed-soils-n2o` |
| `calculate_energy_normalization` | 田间、调理、储存和交付能源 | 按过程和载能体合计实测能源，再按合格参考输出归一化，不将能源与材料或水量合并 | 能源协议；`cp_accepted_seed_output` | 每 kg 参考输出的 MJ、kWh 或载能体量 | `mass-balance-identity` |
| `calculate_output_fates` | 田间、调理、储存和交付 | 在统一含水率基准上，将合格种子、有意联产品、拒收物、损失和声明残余物与实测输入对账，并披露未解释差额 | 所有输出协议 | 输出对账和未解释差额 | `mass-balance-identity`; `fao-grain-cleaning-treatment` |
| `calculate_seed_count_to_mass` | 种子数量记录 | 使用记录的千粒重或其他有文件支持的批次换算将数量换算为质量 | `cp_source_seed_lot`; `cp_accepted_seed_output` | kg 种子 | `fao-sorghum-seed-production` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考输出和所有批次 | 声明种子等级、品种或杂交状态、批次身份、地理位置、作季、报告期、门点、含水率基准、处理状态和质量放行基准。 | 批次证书、田间记录、质量证书和发运记录 |
| `dq_flow_resolution` | 所有参数化行 | 最终 TIDAS 交换发布前，将每个参数化 Flow Set 行解析为已核实的平台 UUID，并保留所选分组和项目上下文。 | 最终交换和 Flow Set 选择记录 |
| `dq_input_completeness` | 田间和调理清单 | 对来源种子、养分、灌溉、作物保护、土地、田间能源、泵送、干燥、调理、处理、包装、储存、运输和直接排放给出数量、合理为零或书面排除。 | 台账、日志、计量、发票和方法说明 |
| `dq_moisture_and_mass` | 收获、调理、储存和交付 | 使用校准的质量和水分记录，在统一基准上核对接收、干燥、合格、拒收、损失和转运材料。 | 称量校准、水分检测和对账 |
| `dq_quality_evidence` | 种子质量和放行 | 保存纯度、发芽率或活力、含水率和处理状态的检测方法、样本基准、批次覆盖、实验室或检验人身份、结果和放行决定。 | 质量证书和检测记录 |
| `dq_representativeness` | 发布数据集画像 | 披露时间、地理、品种、种子等级、生产系统、技术、设施、储存、运输和门点覆盖，并解释与声明路线的差异。 | 抽样方案和数据集元数据 |
| `dq_parameterized_identity` | Flow Set 选择 | 记录每个适用 Flow Set 最终选择的 fixed UUID，并在发布过程交换前核对流属性、单位、方向、流类型、地理位置和过程角色。 | 最终交换和身份预检 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_reference_binding` | 参考产品和合格输出 | 确认参考产品使用已核实的 Sorghum, seed UUID，并且声明种子门点、含水率基准和批次限定信息齐全。 | `mass-balance-identity` |
| `validation_binding_coordinates` | 所有绑定行 | 确认每个绑定行只使用 `fixed` 或 `parameterized`；fixed 行含已核实 UUID，参数化行含已存在的 Flow Set、版本以及兼容的分组或坐标。 |  |
| `validation_flow_coordinates` | 所有清单行 | 确认方向和流类型与结构坐标一致：材料、养分、水、能源、包装和运输是产品输入；合格和中间产品是产品输出；资源是基本流输入；排放是基本流输出；拒收物和残余物按适当方式保留为废物或未映射覆盖。 |  |
| `validation_quality_identity` | 合格种子输出 | 确认种子等级、批次、品种或杂交状态、含水率基准、纯度、发芽率或活力、处理、地理位置、报告期和门点齐全。 | `fao-sorghum-seed-production` |
| `validation_moisture_and_mass_balance` | 收获、调理、储存和交付 | 确认统一基准的质量对账，以及合格种子、联产品、拒收物、筛下物、粉尘、残余物、包装废物和损失的声明去向。 | `fao-grain-postharvest-systems`; `mass-balance-identity` |
| `validation_nutrient_and_emissions` | 养分投入和田间排放 | 确认配方产品质量与养分质量区分，并声明氮排放方法、单位换算和受纳环境。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | 灌溉和取水 | 确认取水、送达灌溉、消耗量和输送损失区分且不重复计算。 | `fao-crop-evapotranspiration-56` |
| `validation_allocation` | 共享负荷和输出 | 确认先考虑过程细分，输出去向完整，分配方法已声明，并在重要时报告敏感性。 | `iso-14044-2006` |
| `validation_coverage` | 证据缺口流身份 | 报告每个没有 fixed UUID 或适用 Flow Set 的行作为未映射覆盖；在解析前不得将其提升为最终 TIDAS 交换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 带有外购材料、能源、水、运输、处理和废物服务上游链接的前景二级数据集 |
| downstream_use | 构建高粱种子供应过程和生命周期模型，并在声明质量、地理位置、门点和报告期条件下比较高粱播种种子路线 |
| allowed_use | 与声明种子等级、品种或杂交状态、地理位置、作季、含水率基准、质量状态、处理、包装、储存和门点兼容的播种高粱种子 |
| excluded_use | 商品高粱谷物；甜高粱、青贮或饲草高粱；食用或饲用加工；下游高粱种植；门点、含水率、质量或处理状态不兼容；输出损失未解释的数据集 |
| required_metadata | 参考流和 UUID；种子等级；批次和品种或杂交状态；地理位置；作季和报告期；生产系统；灌溉；养分；作物保护；土地；田间和调理能源；收获含水率；纯度；发芽率或活力；处理；包装；储存；运输；门点；输出去向；分配；数据质量披露 |
| required_quality_disclosure | 原始记录覆盖；时间和地理代表性；种子等级和批次追溯；称量和水分校准；参数化 Flow Set 解析；养分和排放方法；水源；能源载体；处理；储存；门点；排除项；分配；敏感性；模块选择结果 |
| update_trigger | 种子等级、品种、生产路线、门点、含水率约定、质量标准、灌溉、养分或作物保护做法、调理技术、处理、储存时长、包装、运输、输出去向、Flow Set 合约或证据状态发生实质变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-sorghum-seed-production` | official_guidance | FAO，*Seed Production Manual*，高粱种子生产和认证章节，<https://coin.fao.org/coin-static/cms/media/16/13666518481740/seed_enterprises_enhacement_and_development_project_in_sierra_leone_mission_1_report_.pdf> | 高粱种子起始材料、田间生产、检查、种子检测、处理、包装、储存和放行证据 |
| `fao-grain-postharvest-systems` | official_guidance | FAO，*Agricultural engineering in development: Grain and post-harvest systems*，<https://www.fao.org/4/t0522e/T0522E03.htm> | 高粱收获、干燥、清理、储存和过程交接分解 |
| `fao-grain-cleaning-treatment` | official_guidance | FAO，*Agricultural engineering in development: Grain cleaning and insecticide treatments*，<https://www.fao.org/4/T0522E/T0522E0B.htm> | 清理、分选、处理、粉尘、储存和处理记录 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56，*Crop evapotranspiration*，<https://www.fao.org/4/X0490E/X0490E00.htm> | 灌溉数据采集和水量区分 |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement，Volume 4，Chapter 5 Cropland，<https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | 耕地管理、残余物、土地和生产方法背景 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement，Volume 4，Chapter 11，<https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤氮排放方法和因子选择 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级、数据质量和敏感性要求 |
| `mass-balance-identity` | method_factor | 应用于 PCR 计算身份的质量守恒 | 含水率换算、输出对账、归一化和 QA 校验 |
