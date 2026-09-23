---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-seed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 大麦播种种子

## 1. 范围与适用性

本 PCR 为 CPC 3.0 `01151` 项下专门为种子用途种植的大麦建立前景数据包。范围从源种子批次或其他声明的起始条件开始，覆盖田间繁育、收获、种子处理、质量检验、可选处理、包装、储存和声明的种子门。适用于已声明等级和质量状态的认证、基础、登记、质量声明、自留或其他可比大麦播种种子批次。

未专门为种子用途种植的商品大麦，以及制麦芽、食品、饲料、淀粉、乙醇、下游大麦种植、零售、资本货物、育种研究和没有大麦种子产品输出的种子加工服务不在默认范围内，除非明确加入研究范围。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.barley-seed` |
| classification_refs | CPC 3.0 `01151`，`Barley, seed` |
| covered_products | 专门为播种种植的大麦种子，包括声明的认证、基础、登记、质量声明、自留或其他可比种子批次 |
| excluded_products | 非种用大麦；制麦芽、食品、饲料、淀粉和乙醇用大麦；下游大麦种植；育种研究；以及没有大麦种子产品输出的种子加工服务 |
| representative_product | 在声明水分基准、包装状态和种子门，已接收、清选、分级并可选处理的大麦播种种子 |
| production_route | 大麦种子繁育或受控生产，随后收获、处理、质量放行、可选处理、包装、储存和门交接 |
| market_state | 已获播种接收的大麦种子批次，具有声明的等级、种类或品种、质量属性、处理状态、包装状态、地理范围和门 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明种子门的已接收大麦播种种子 |
| How much | 1 kg 净接收种子 |
| How well | 大麦种类或品种；种子或认证等级；水分基准；物理纯度；发芽率或活力；处理状态；包装状态；地理范围；作物周期；声明门 |
| How long or cycle | 一个声明的大麦种子生产作物周期；当储存位于门内时另行声明储存时间 |
| reference_flow_link | 以下参考数量和已核验平台产品流 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | barley variety or type; seed or certification class; treatment status; moisture basis; physical purity; germination or viability; geography; crop cycle; declared seed gate; packaging state |
| Binding | `fixed` |

构建数据包时，`Required qualifiers` 中的限定信息必须写入数据集元数据、过程说明、参考流注释、产品描述或等效字段。参考流以质量为基准。种子数量只有在提供实测千粒重或其他透明数量到质量换算时才可使用。

## 4. 测量与单位规则

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` | kg | 参考流表示声明门的净接收大麦播种种子，并排除容器皮重。 |
| `seed_count_conversion` | 种子数量记录 | Mass `93a60a56-a3c8-11da-a746-0800200c9a66` | kg and seeds | 只有使用记录的千粒重、批次数量或透明的批次特定因子时，才可将数量换算为质量。 |
| `seed_quality_attributes` | 接收种子和源批次 | 声明质量属性 | 声明单位 | 将种类或品种、等级、水分、物理纯度、发芽率或活力、处理状态和批次放行状态作为属性保留，不使用通用默认值替代。 |
| `moisture_basis` | 收获、处理、储存和交付种子 | 质量和声明水分分数 | kg and declared fraction | 保留原始质量和水分基准。只有依据实测水分并使用明确的干物质和水质量方程，才能在基准之间转换。 |
| `fertilizer_n_basis` | 养分投入和土壤排放 | 质量 | kg product and kg nutrient | 分开记录配方养分产品质量和养分质量；氮计算使用声明的 kg N 投入。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 or kg | 区分供给的灌溉水、自然资源取水和单独报告的消耗指标。 |
| `energy_inventory` | 田间、处理、储存和交付能源 | 能源或载能体质量 | kWh, MJ, L, or kg | 保留能源载体、计量单位、作业、过程和换算基准。 |
| `packaging_quantity` | 包装投入 | 质量或件数 | kg, g, or item | 记录包装质量或件数，并在需要换算时记录包装容量或批次归属。 |
| `land_basis` | 耕地使用 | 面积-时间 | ha·crop cycle or declared area-time unit | 记录种植面积和作物周期占用；不得以土地占用代理土地转化。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 源种子批次或其他声明的大麦种子生产起始材料 |
| starting_condition_role | 大麦种子身份和作物生产起始条件 |
| product_classification_scope | CPC 3.0 `01151`，Barley, seed；非种用大麦和下游大麦产品不在范围内 |
| recursive_input_rule | 用于建立作物的同类别种子投入记录为声明的起始投入，不递归展开。进入处理的收获种子作物是中间交接，不是第二个参考输出。 |
| upstream_dataset_requirement | 购入源种子、养分产品、作物保护产品、灌溉水供应、能源载体、包装材料、处理材料和废物处理服务需要代表性上游数据集或书面排除说明。 |
| disclosure | 大麦种类或品种；种子等级；源批次；田块和地理范围；作物周期；灌溉；养分和作物保护记录；收获质量和水分；处理、检验、处理剂、包装、储存、拒收、损失和门 |

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_seed_gate` | 前景边界 | 纳入源种子、大麦种子生产、收获、处理、质量检验、可选处理、包装，以及到达声明种子门所需的储存或交付。 | `fao-seed-systems`; `fao-seeds` |
| `boundary_gate_definition` | 参考产品 | 默认使用种子厂或处理设施门。交付种子门必须有储存或交付记录、损失记录和门交接记录。 | `fao-seeds`; `mass-balance-identity` |
| `boundary_seed_quality` | 接收种子 | 当身份、分级、质量检验、处理状态和批次放行决定输出是否为接收的大麦播种种子时，应纳入这些过程。 | `fao-seed-systems`; `usda-seed-cleaning-handling` |
| `boundary_input_completeness` | 田间和处理 | 对源种子、养分、作物保护、灌溉、田间能源、土地、处理能源、处理剂、包装、储存和范围内直接排放，提供采集值、合理零值或书面排除。 | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_output_separation` | 所有输出 | 按实测或核算质量和去向区分接收种子、收获中间种子作物、筛下物、拒收种子、粉尘、残余物、包装废物、储存损失和未解释损失。 | `usda-seed-cleaning-handling`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `barley_seed_multiplication` | Barley Seed Multiplication | required |  | foreground | 处理前收获的大麦种子作物 |
| `barley_seed_conditioning_and_treatment` | Barley Seed Conditioning and Treatment | required |  | foreground | 已接收、清选并可选处理的大麦播种种子 |
| `barley_seed_storage_and_delivery` | Barley Seed Storage and Delivery | conditional | 当储存或交付属于声明门，或实质改变交付参考流时纳入 | foreground | 交付的接收大麦种子 |

### 过程：大麦种子繁育（`barley_seed_multiplication`）

#### 投入

##### 产品流

###### 繁育用源种子批次（`source_seed_lot_for_multiplication`）

记录建立大麦种子路线的声明源批次。批次身份、等级、处理、水分和来源位置应与本周期接收输出分开。

- 选定流：Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：按田块或生产单元计量源批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获大麦种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_seed_lot_records`
- 来源：`fao-seed-systems`; `umn-small-grain-seeding-rate`

###### 农业养分与肥料投入（`barley_seed_multiplication_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获大麦种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`

###### 供给的灌溉水（`irrigation_water_supplied`）

按田块和水源记录供给的灌溉水。经证实的雨养路线以支持证据记录合理零值。

- 选定流：供给大麦种子田的灌溉水
- 流属性/单位：Mass or volume / kg or m3
- 绑定：`parameterized`
- 数量规则：按田块和水源计量或有证据的灌溉供水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获大麦种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`ipcc-2019-cropland`

###### 田间能源（`field_energy`）

记录田间作业和泵送使用的燃料、电力和其他直接能源。

- 选定流：大麦种子生产田间燃料或电力
- 流属性/单位：Mass, volume, or energy / kg, L, MJ, or kWh
- 绑定：`parameterized`
- 数量规则：按田间作业计量燃料或能源使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获大麦种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`ipcc-2019-cropland`

###### 作物保护产品（`crop_protection_products`）

记录用于杂草、害虫或病害管理的配方产品和有效成分。

 - 选定流：已命名作物保护产品或有效成分
- 流属性/单位：Mass / kg product or active substance
- 数量规则：按产品和有效成分记录施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 收获大麦种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-seed-systems`

##### 废物流

通常不需要废物投入。只有再利用有机改良剂或回用水以废物衍生投入跨越田间边界时才记录。

##### 基本流

###### 耕地占用（`cultivated_land_occupation`）

记录声明大麦种子作物周期的耕地占用。土地转化是独立问题，不得从占用量推断。

- 选定流：耕地占用
- 流属性/单位：Area-time / ha·crop cycle
- 数量规则：种植面积乘以声明作物周期占用基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收大麦种子输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_use_records`
- 来源：`ipcc-2019-cropland`

###### 自然水资源取水（`natural_water_withdrawal`）

保持自然资源取水与供给灌溉产品投入区分。

- 选定流：从声明自然水源取出的水资源
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按水源实测或根据泵送记录计算取水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 接收大麦种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`ipcc-2019-cropland`

#### 输出

##### 产品流

###### 收获的大麦种子作物（`harvested_barley_seed_crop`）

记录处理前收获的大麦种子作物。收获水分、杂质和处理状态可能不同，必须与已接收清选种子分开。

- 选定流：处理前收获的大麦种子作物
- 流属性/单位：Mass / kg
- 数量规则：按声明水分基准计量收获质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田间过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvested_seed_mass`
- 数量范围：田间输出身份校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 田间过程参考输出
  - 基准：田间过程输出身份
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 离开边界的田间残余物（`field_residue_leaving_boundary`）

仅当秸秆、颖壳或其他残余物跨越声明边界时记录，并声明去向。

- 选定流：跨越声明边界的大麦田间残余物
- 流属性/单位：Mass / kg
- 数量规则：残余物质量和去向的实测记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获大麦种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_residue_records`

##### 废物流

###### 送往处理的田间废物（`field_waste_sent_to_treatment`）

仅用于离开田间边界并进入声明处理路线的田间废物流。

- 选定流：送往处理的田间废物
- 流属性/单位：Mass / kg
- 数量规则：废物质量和处理去向的实测记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获大麦种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_residue_records`

##### 基本流

###### 直接土壤氧化亚氮排放（`direct_soil_nitrous_oxide_emission`）

根据声明养分投入使用选定方法层级计算直接土壤排放，并披露物种和换算基准。

- 选定流：排放到空气的氧化亚氮
- 流属性/单位：Mass / kg N2O or kg N2O-N
- 数量规则：将选定方法层级应用于采集的氮投入和管理背景
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg N 投入以及每 1 kg 接收大麦种子输出
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2019-managed-soils-n2o`

###### 氨挥发（`ammonia_volatilization`）

当选定土壤排放方法和管理背景支持时记录氨排放。

- 选定流：排放到空气的氨
- 流属性/单位：Mass / kg NH3
- 数量规则：将场址或区域方法应用于采集的养分记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg N 投入
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2019-managed-soils-n2o`

###### 向水体淋失的硝酸盐（`nitrate_leaching_to_water`）

当选定方法以及采集的养分、土壤、水和管理记录支持时记录硝酸盐淋失。

- 选定流：排放到水体的硝酸盐
- 流属性/单位：Mass / kg nitrate
- 数量规则：将选定淋失方法应用于采集的养分和场址记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg N 投入
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2019-managed-soils-n2o`

###### 田间能源产生的化石二氧化碳（`fossil_carbon_dioxide_from_field_energy`）

依据声明因子源由田间燃料和能源记录计算化石二氧化碳。

- 选定流：排放到空气的化石二氧化碳
- 流属性/单位：Mass / kg CO2
- 数量规则：采集燃料或能源数量乘以声明排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每燃料清单以及每 1 kg 接收大麦种子输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_energy_records`

### 过程：大麦种子处理和处理剂应用（`barley_seed_conditioning_and_treatment`）

#### 投入

##### 产品流

###### 收获的大麦种子作物投入（`harvested_barley_seed_crop_input`）

记录送入处理的收获作物，包括批次、接收质量、水分以及源田块或供应商。

- 选定流：处理前收获的大麦种子作物
- 流属性/单位：Mass / kg
- 数量规则：按声明水分基准计量批次接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收的清选大麦种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_records`

###### 处理能源（`conditioning_energy`）

按活动或生产线记录干燥、清选、分级、检验、处理和包装能源。

- 选定流：大麦种子处理用电力或过程能源
- 流属性/单位：Energy or carrier mass / kWh, MJ, L, or kg
- 绑定：`parameterized`
- 数量规则：按作业和活动计量处理能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每接收的清选大麦种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`usda-seed-cleaning-handling`

###### 种子处理材料（`seed_treatment_material`）

记录每种处理产品和有效成分。输出处理状态是必需限定信息。

 - 选定流：已命名种子处理产品或有效成分
- 流属性/单位：Mass / kg product or active substance
- 数量规则：按处理批次记录处理产品质量和有效成分含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每处理大麦种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_treatment_records`
- 来源：`fao-seeds`

###### 包装材料（`packaging_materials`）

记录跨越种子设施边界的袋、内衬、标签、封口或其他包装材料。

- 选定流：大麦种子一次包装材料
- 流属性/单位：Mass or item / kg or item
- 绑定：`parameterized`
- 数量规则：记录包装质量或件数、容量和批次归属
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每包装的接收大麦种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_input_records`
- 来源：`usda-seed-cleaning-handling`

###### 处理用水（`conditioning_water_use`）

仅当处理用水跨越设施边界或是实质性过程投入时记录。

- 选定流：大麦种子处理用过程水
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 流属性/单位：Mass or volume / kg or m3
- 绑定：`parameterized`
- 数量规则：按活动计量或有证据的处理用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每接收的清选大麦种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_water_records`

##### 废物流

通常不需要废物投入。只有在声明废物衍生状态和边界交接时才纳入回收或再利用材料。

#### 输出

##### 产品流

###### 接收的大麦播种种子（`accepted_barley_seed_for_sowing`）

记录在声明种子门放行的已清选、分级、检验并可选处理的大麦播种种子。

- 选定流：Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：记录放行批次质量以及水分、纯度、发芽率或活力、处理、包装和门属性
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：PCR 参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_accepted_seed_mass`
- 数量范围：接收种子参考输出身份
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg PCR 参考输出
  - 基准：接收的大麦种子参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 筛下物和拒收种子（`screenings_and_rejected_seed`）

将筛下物、非规格种子、破碎粒和拒收批次作为独立流记录，每个流都必须有去向。

- 选定流：离开处理过程的筛下物或拒收大麦种子
- 流属性/单位：Mass / kg
- 数量规则：批次质量和去向的实测或核算记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收的清选大麦种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_and_screening_records`
- 来源：`usda-seed-cleaning-handling`; `mass-balance-identity`

###### 处理粉尘和清扫物（`conditioning_dust_and_sweepings`）

记录作为废物或独立材料流离开设施的粉尘、颖壳和清扫物。

- 选定流：处理粉尘、颖壳或清扫物
- 流属性/单位：Mass / kg
- 数量规则：收集质量或有记录的质量平衡残差及去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收的清选大麦种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_and_screening_records`
- 来源：`usda-seed-cleaning-handling`; `mass-balance-identity`

###### 包装废物（`packaging_waste`）

按材料和去向记录包装边角料、损坏包装和废弃包装。

- 选定流：大麦种子制备产生的包装废物
- 流属性/单位：Mass / kg
- 数量规则：废物质量和声明处理或回收去向的实测记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每包装的接收大麦种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`

##### 基本流

###### 处理粉尘向空气排放（`conditioning_dust_emission_to_air`）

只有在有实测或记录的设施排放证据时记录直接粉尘排放。收集粉尘和排放粉尘不是同一流。

- 选定流：排放到环境空气的颗粒物或粉尘
- 流属性/单位：Mass / kg
- 数量规则：设施排放实测值或声明方法的排放计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每接收的清选大麦种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_emission_records`

###### 处理产生的化石二氧化碳（`fossil_carbon_dioxide_from_conditioning`）

依据声明因子源由处理燃料或能源记录计算化石二氧化碳。

- 选定流：排放到空气的化石二氧化碳
- 流属性/单位：Mass / kg CO2
- 数量规则：处理燃料或能源乘以声明排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每接收的清选大麦种子输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_energy_records`

### 过程：大麦种子储存和交付（`barley_seed_storage_and_delivery`）

#### 投入

##### 产品流

###### 储存电力（`storage_electricity`）

记录声明储存期间维持或处理大麦种子使用的电力。

- 选定流：储存电力
- 流属性/单位：Energy / kWh or MJ
- 绑定：`parameterized`
- 数量规则：按储存期间和储存质量计量储存电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明储存期间每 kg 交付大麦种子
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_energy_records`

###### 交付运输服务（`delivery_transport_service`）

仅当声明参考门为交付种子时记录交付运输。

- 选定流：大麦种子交付货运服务
- 流属性/单位：Transport service / tonne-km or route-specific service unit
- 绑定：`parameterized`
- 数量规则：运输路线、交付质量和承运服务记录的实测值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 tonne-km 或声明的交付种子路线
- 基准类型：运输服务（`transport_service`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery_transport_records`

##### 废物流

#### 输出

##### 产品流

###### 交付的接收大麦种子（`delivered_accepted_barley_seed`）

仅当交付是声明参考门时记录交付批次。同一批次不得在种子设施门和交付门重复计数。

- 选定流：Barley, seed `c0da91a0-5054-4e3c-954f-80ceb0f6dac5`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：记录具有门和水分属性的交付批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：交付参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivered_seed_mass`

##### 废物流

###### 储存损失或损坏种子（`storage_loss_or_damaged_seed`）

按批次和去向记录储存种子损失、损坏或劣变；它不是接收种子输出。

- 选定流：储存损失或损坏的大麦种子
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向进行库存核对及损失质量测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 储存大麦种子
- 基准类型：储存时间（`storage_duration`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_loss_records`

##### 基本流

###### 储存和交付产生的化石二氧化碳（`storage_and_delivery_fossil_carbon_dioxide`）

仅当条件过程纳入时，根据储存和交付能源计算化石二氧化碳。

- 选定流：排放到空气的化石二氧化碳
- 流属性/单位：Mass / kg CO2
- 数量规则：储存和交付能源乘以声明排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 交付大麦种子
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery_transport_records`

## 7. 分配和联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | 田间、处理、储存和交付过程 | 当路线可以拆分时，分别记录生产、处理、处理剂、包装、储存、拒收物和按去向处理，以避免分配。 | `iso-14044-2006` |
| `allocation_intended_outputs` | 有意生产的产品输出 | 当残余物、降级种子或其他流被有意销售或转移为产品时，只有在产品状态有证据支持后才能识别去向并采用声明方法。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_seed_quality` | 接收种子和降级批次 | 除非替代输出被有意生产、单独识别并包含在声明门内，否则不得把种子质量负担分配给商品大麦或降级流。 | `iso-14044-2006` |
| `allocation_fallback` | 多个有意输出 | 当无法拆分时，采用声明的质量、物理属性、经济或其他可辩护方法，披露理由并以实质不同的方法进行敏感性测试。 | `iso-14044-2006` |
| `allocation_reject_fate` | 拒收物、残余物、废物和储存损失 | 保持田间残余物、处理拒收物、包装废物、储存损失、回收和处置相互区分；没有去向和替代证据不得抵扣被替代产品。 | `mass-balance-identity` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot_records` | `barley_seed_multiplication` | 源种子批次 | 批次接收记录 | 批次；种类或品种；等级；处理；质量；水分；来源 | 证书、接收记录、校准秤 | kg 和属性 | 每批次 | 作物周期 | 田块或生产单元 | 按单元汇总并归一化 | 证书、记录、秤 |
| `cp_nutrient_input_records` | `barley_seed_multiplication` | 养分和改良投入 | 施用记录 | 产品；配方；养分；质量；日期；田块；方法 | 发票、标签、施用日志 | kg 产品和 kg 养分 | 每次施用 | 作物周期 | 田块 | 按田块汇总 | 发票、标签、记录 |
| `cp_irrigation_records` | `barley_seed_multiplication` | 灌溉和取水 | 计量或水源记录 | 水源；仪表；读数；体积；日期；田块；泵送能源 | 校准仪表、泵送日志、水源记录 | m3、kg、kWh | 事件或月度 | 作物周期 | 田块和水源 | 区分供水和取水 | 校准、读数 |
| `cp_field_energy_records` | `barley_seed_multiplication` | 田间燃料和电力 | 燃料或公用事业记录 | 作业；载能体；数量；机器；日期；田块 | 燃料日志、仪表、发票、遥测 | L、kg、MJ、kWh | 作业或计费周期 | 作物周期 | 田块或单元 | 分配能源且不得重复计数 | 仪表、发票、日志 |
| `cp_crop_protection_records` | `barley_seed_multiplication` | 作物保护 | 施用记录 | 产品；有效成分；剂量；面积；日期；田块；目标 | 标签和施用日志 | kg 产品、kg 有效成分、ha | 每次施用 | 作物周期 | 田块 | 按产品和成分汇总 | 标签、记录 |
| `cp_land_use_records` | `barley_seed_multiplication` | 土地占用 | 田块面积记录 | 田块；种植面积；日期；周期 | 田块记录、GIS、农场登记 | ha 和作物周期 | 每周期 | 作物周期 | 田块 | 计算面积-时间并归一化 | 田图、GIS |
| `cp_harvested_seed_mass` | `barley_seed_multiplication` | 收获种子作物 | 收获记录 | 田块；日期；质量；水分；路线；拒收物 | 校准秤和收获记录 | kg 和水分分数 | 每次收获 | 作物周期 | 田块和接收点 | 处理前核对 | 秤、收获记录 |
| `cp_field_residue_records` | `barley_seed_multiplication` | 田间残余物和废物 | 残余物记录 | 流；质量；去向；日期；田块 | 秤、票据、田间日志 | kg | 每事件 | 作物周期 | 田块 | 按去向和边界汇总 | 秤、票据 |
| `cp_conditioning_input_records` | `barley_seed_conditioning_and_treatment` | 收获种子投入 | 批次接收记录 | 批次；投入质量；水分；来源；日期 | 批次表和校准秤 | kg 和水分分数 | 每批次 | 处理活动期 | 设施 | 核对接收与输出 | 批次表、秤 |
| `cp_conditioning_energy_records` | `barley_seed_conditioning_and_treatment` | 处理能源 | 仪表或设备记录 | 活动；能源；数量；作业；期间 | 仪表、账单、设备日志 | kWh、MJ、kg、L | 活动或间隔 | 处理活动期 | 设施 | 按作业汇总并归一化 | 仪表、账单、日志 |
| `cp_conditioning_water_records` | `barley_seed_conditioning_and_treatment` | 处理用水 | 仪表或设施记录 | 水源；仪表；数量；日期；活动 | 仪表、账单、设施日志 | m3 或 kg | 活动或间隔 | 处理活动期 | 设施 | 汇总跨边界用水 | 仪表、账单 |
| `cp_seed_treatment_records` | `barley_seed_conditioning_and_treatment` | 处理材料 | 处理记录 | 产品；有效成分；剂量；处理质量；批次 | 处理日志、标签、供应商证书 | kg 产品、kg 有效成分、kg 种子 | 每批次 | 处理活动期 | 设施 | 按产品和批次汇总 | 日志、标签 |
| `cp_packaging_input_records` | `barley_seed_conditioning_and_treatment` | 包装 | 包装领用记录 | 类型；件数；容量；质量；批次 | 库存记录或包装日志 | 件和 kg | 每批次 | 处理活动期 | 设施 | 按容量或质量换算 | 包装日志 |
| `cp_accepted_seed_mass` | `barley_seed_conditioning_and_treatment` | 接收种子 | 放行记录 | 批次；质量；水分；纯度；发芽率；处理；门 | 校准秤和质量检验 | kg 和属性 | 每批次 | 处理活动期 | 设施和门 | 按声明基准汇总 | 秤、检验、放行记录 |
| `cp_reject_and_screening_records` | `barley_seed_conditioning_and_treatment` | 拒收物、筛下物、粉尘和清扫物 | 拒收记录 | 批次；流；质量；去向 | 秤或质量平衡 | kg | 每批次 | 处理活动期 | 设施 | 按流和去向汇总 | 秤、日志、去向记录 |
| `cp_packaging_waste_records` | `barley_seed_conditioning_and_treatment` | 包装废物 | 废物记录 | 材料；质量；去向；期间 | 秤或承包商记录 | kg | 每次发运或活动 | 处理活动期 | 设施 | 按材料和去向汇总 | 秤票、承包商记录 |
| `cp_conditioning_emission_records` | `barley_seed_conditioning_and_treatment` | 处理排放 | 排放记录 | 物质；介质；质量或因子；活动 | 粉尘日志、维护记录、计算 | kg | 活动或期间 | 处理活动期 | 设施 | 按物种和介质汇总 | 日志、计算 |
| `cp_storage_energy_records` | `barley_seed_storage_and_delivery` | 储存电力 | 库存或公用事业记录 | 批次；仪表；数量；期间；储存质量 | 仪表或账单 | kWh 或 MJ | 期间 | 储存时间 | 储存地点 | 按质量和时间分配 | 仪表、账单 |
| `cp_delivery_transport_records` | `barley_seed_storage_and_delivery` | 交付运输 | 运输记录 | 路线；距离；车辆；燃料或 tonne-km；质量 | 承运商发票、发运记录、燃料日志 | kg 燃料或 tonne-km | 每次发运 | 交付期间 | 路线 | 汇总服务并归一化 | 发票、发运、日志 |
| `cp_storage_loss_records` | `barley_seed_storage_and_delivery` | 储存损失 | 损失记录 | 批次；损失质量；类别；去向；期间 | 库存核对和秤 | kg | 每批次或期间 | 储存时间 | 储存地点 | 按去向汇总 | 库存、处置记录 |
| `cp_delivered_seed_mass` | `barley_seed_storage_and_delivery` | 交付种子 | 交付记录 | 批次；质量；日期；门；接收方；水分 | 发运记录和校准秤 | kg 和水分分数 | 每次发运 | 交付期间 | 声明门 | 汇总且不得重复计数 | 发运、秤 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_accepted_seed` | 所有前景行 | 将每个实测或计算数量除以同一声明门和水分基准下的净接收种子质量。 | 投入记录；接收种子记录 | 每 1 kg 参考流的数量 | `mass-balance-identity` |
| `convert_seed_moisture_basis` | 收获、处理、储存和交付质量 | 仅依据记录质量和水分，使用明确干物质和水质量方程转换。 | 收获、接收、质量和交付记录 | 声明基准质量 | `mass-balance-identity`; `usda-seed-cleaning-handling` |
| `calculate_seed_conditioning_yield` | 处理产出 | 接收种子质量除以收获种子作物投入质量，并分别保留拒收物、水分变化和未解释部分。 | 处理投入；接收质量；拒收记录 | 收率、拒收比例、未解释比例 | `usda-seed-cleaning-handling`; `mass-balance-identity` |
| `calculate_land_occupation` | 土地占用 | 种植面积乘以声明作物周期占用并归一化到接收种子。 | 土地记录；接收种子质量 | 参考流面积-时间 | `ipcc-2019-cropland` |
| `calculate_water_withdrawal` | 取水 | 必要时换算计量体积，并将水源取水与供给灌溉水分开。 | 灌溉记录 | 参考流资源取水 | `ipcc-2019-cropland` |
| `calculate_managed_soil_emissions` | 氮排放 | 将选定方法层级应用于养分投入及声明的土壤、气候和管理背景，并披露物种换算。 | 养分记录；方法因子 | 按物种排放 | `ipcc-2019-managed-soils-n2o` |
| `calculate_field_energy_emissions` | 田间能源 | 将记录燃料或能源乘以声明因子并归一化到接收种子。 | 田间能源；因子 | 田间能源排放 | `ipcc-2019-cropland` |
| `calculate_conditioning_energy_emissions` | 处理能源 | 将处理燃料或能源乘以声明因子并归一化。 | 处理能源；因子 | 处理排放 | `usda-seed-cleaning-handling` |
| `calculate_storage_delivery_emissions` | 储存和交付 | 对纳入的储存和交付能源使用声明因子，并归一化到声明门。 | 储存能源；运输记录；因子 | 储存和交付排放 | `mass-balance-identity` |
| `reconcile_field_outputs` | 田间生产 | 在声明水分基准上，将收获种子作物、残余物、田间废物和记录损失与田间记录核对。 | 收获、残余物和废物记录 | 田间输出平衡 | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | 处理 | 将接收质量和水分与接收种子、筛下物、拒收物、粉尘、包装废物和记录损失核对。 | 处理投入、接收种子和拒收记录 | 处理平衡 | `mass-balance-identity`; `usda-seed-cleaning-handling` |
| `reconcile_storage_outputs` | 储存 | 将储存质量与声明期间的交付种子、储存损失和期末库存核对。 | 储存、交付和损失记录 | 储存平衡 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_seed_identity` | 参考产品和源批次 | 声明大麦种类或品种、种子等级、处理状态、水分基准、物理纯度、发芽率或活力以及批次身份。 | 证书、批次记录、质量检验 |
| `dq_mass_records` | 所有质量行 | 每个质量值标明日期、场址或批次、单位、相关水分基准以及计量设备或来源记录。 | 校准、地磅票、批次表 |
| `dq_temporal_coverage` | 作物周期和储存数据 | 覆盖声明作物周期和储存期间，并披露单季或多季汇总。 | 有日期的田间、投入、收获、储存和放行记录 |
| `dq_input_completeness` | 田间和处理投入 | 对源种子、养分、作物保护、灌溉、土地、能源、处理剂、包装、储存和范围内直接排放进行量化、合理零值或书面排除。 | 台账、标签、仪表、日志、发票 |
| `dq_quality_release` | 接收种子输出 | 保留批次放行基准、质量检验方法、水分、纯度、发芽率或活力、处理状态、包装状态和门。 | 检验、证书、放行记录 |
| `dq_reject_and_fate` | 拒收物、残余物、废物和储存损失 | 每个非参考流都有实测或核算质量和声明去向；不得从名称推断产品状态。 | 拒收日志、残余物、发运、处理或处置记录 |
| `dq_mass_balance` | 所有过程 | 在声明水分基准上核对田间、处理和储存输出，并披露未解释部分。 | 秤记录、批次表、库存核对 |
| `dq_binding_coordinate` | 固定和参数化行 | 保留流类型、方向、功能坐标、属性、单位、使用情境和地理约束。固定绑定必须有直接核验的平台 UUID。 | 身份记录和流集选择记录 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 核对已核验的大麦播种种子 UUID、所有限定信息、水分基准和声明门；最终交换必须保留该 UUID。 | `fao-seed-systems`; `mass-balance-identity` |
| `validation_scope` | 边界 | 核对数据集为大麦播种种子，不得静默包含非种用大麦、制麦芽、食品、饲料、乙醇或下游种植。 | `fao-seed-systems` |
| `validation_process_map` | 过程清单 | 核对种子繁育、处理和质量放行，以及纳入的储存或交付分别建模并有明确交接。 | `fao-seed-systems`; `usda-seed-cleaning-handling` |
| `validation_flow_coordinates` | 清单行 | 核对每个参数化行符合其流集的流类型、方向、坐标、分组、属性、单位、使用情境和地理约束。 | `mass-balance-identity` |
| `validation_nutrients_and_emissions` | 养分和土壤排放 | 核对养分产品质量、养分质量、方法层级、因子、物种、单位和换算；模块不提供因子或产品事实。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_land` | 灌溉、取水和土地 | 保持供给灌溉产品投入、自然取水和土地占用区分并避免重复计算。 | `ipcc-2019-cropland` |
| `validation_quality_release` | 接收种子 | 核对大麦身份、种子等级、质量属性、处理状态、批次放行、包装状态、水分基准和门。 | `fao-seed-systems`; `usda-seed-cleaning-handling` |
| `validation_reject_fate` | 拒收物和废物 | 核对每个拒收种子、筛下物、残余物、粉尘、包装废物和储存损失都有去向；不得将产品投入流集分配给废物。 | `usda-seed-cleaning-handling`; `mass-balance-identity` |
| `validation_mass_balance` | 所有输出 | 核对田间、处理和储存平衡在声明水分基准上相符，且接收种子未在两个交接点重复计算。 | `mass-balance-identity` |
| `validation_allocation` | 有意联产品 | 核对任何有意联产品均被单独识别、去向有证据且分配或替代处理已披露。 | `iso-14044-2006` |
| `validation_module_boundary` | 自动选定模块 | 仅将模块义务用于结构和检查；模块不提供产品数量、UUID、排放因子或大麦特定事实。 | `iso-14044-2006` |

## 10. 已发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当大麦种子等级、种类或品种、路线、质量属性、地理范围、水分、处理、包装、储存范围和交付门相符时用于下游 LCA 构建 |
| excluded_use | 非种用大麦；制麦芽、食品、饲料、淀粉或乙醇加工；下游大麦种植；以及缺少种子质量或交付门限定信息的数据集 |
| required_metadata | 参考流；CPC 范围；大麦种类或品种；种子等级；地理范围；作物周期；水分；纯度；发芽率或活力；处理；包装；门；流集选择；采集覆盖；DQR |
| required_quality_disclosure | 批次和田块覆盖、计量记录、质量放行证据、计算规则、结构坐标和流集引用、固定 UUID 证据、排除项、水分基准核对、质量平衡结果和数据质量评分 |
| update_trigger | 路线、种类或品种、种子等级、处理技术、处理剂、包装、储存、参考限定信息、流集合约、采集覆盖或数据质量发生实质变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-systems` | official_guidance | FAO, What are seed systems?, <https://www.fao.org/agriculture/crops/thematic-sitemap/theme/compendium/tools-guidelines/what-are-seed-systems/en/> | 种子身份、繁育、质量属性和种子系统边界 |
| `fao-seeds` | official_guidance | FAO Seeds portal, <https://www.fao.org/seeds/en/> | 种子生产、质量保证、储存和批次披露 |
| `usda-seed-cleaning-handling` | handbook | USDA, Mechanical Seed Cleaning and Handling, <https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo23714/pdf/GOVPUB-A-PURL-gpo23714.pdf> | 清选、分级、干燥、储存、筛下物、拒收物和处理记录 |
| `umn-small-grain-seeding-rate` | extension_guidance | University of Minnesota Extension, Seeding rate for small grains, <https://extension.umn.edu/agriculture/crop-production/small-grains/seeding-rate-for-small-grains> | 大麦播种率计算、发芽率、种子计数和批次千粒重背景 |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | 耕地管理、残余物处理、土地和作物管理方法 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤氮排放和因子选择 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级、数据质量和敏感性要求 |
| `mass-balance-identity` | method_factor | 将质量守恒作为田间、处理、包装、储存、拒收物、损失和参考流核对的 PCR 计算身份。 | 输出核对、归一化和 QA 校验范围 |
