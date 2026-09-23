---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.soya-beans-seed-for-planting
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---
# 大豆种子（用于种植）
## 1. 范围与适用性
本 PCR 用于构建 CPC 3.0 `01411` 大豆种子（用于种植）的前景数据包。范围包括种子繁殖或受控制种、收获、种子调理、分级、质量检测、可选处理、包装，以及在声明农场门之前发生且被纳入边界的储存。默认门点为农场门；只有同时采集储存和交付记录时才可使用交付门点。
本 PCR 适用于常规授粉、杂交、原种、登记种、认证种或其他可比大豆种子（用于种植）路线，但必须声明种子等级、生产路线、质量状态、地理位置和门点。亲本隔离、去雄、受控授粉和认证活动在前景边界内时应记录；本 PCR 不提供通用育种事实、数量、因子、UUID 或认证结果。
商品大豆谷物、饲草或青贮大豆、作为蔬菜销售的甜大豆或大豆笋、食品或饲料加工、淀粉或乙醇转化、下游种植、零售配送和消费均排除。育种研究和资本品除非数据包明确纳入，否则排除。
## 2. 产品类别识别
| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.soya-beans-seed-for-planting` |
| classification_refs | CPC 3.0 `01411`，`Soya beans, seed for planting` |
| covered_products | 用于播种、经过清选、分级和质量控制的大豆种子，包括声明的杂交和非杂交种子等级 |
| excluded_products | 商品大豆谷物；饲草或青贮大豆；甜大豆或大豆笋；大豆加工产品；下游作物生产；未声明边界的育种研究 |
| representative_product | 在声明含水率基准、质量等级、处理状态、包装状态和门点下放行的大豆种子（用于种植） |
| production_route | 大豆种子繁殖或受控制种，随后进行收获、调理、质量检测、可选处理和包装 |
| market_state | 在声明农场门或交付门点转移、符合播种用途的种子批次 |
## 3. 参考流
| Field | Value |
| --- | --- |
| What | 声明农场门的合格大豆种子（用于种植） |
| How much | 1 kg 净合格种子 |
| How well | 种子等级或认证等级、杂交或常规授粉状态、适用时的品种或亲本系身份、含水率基准、物理净度、发芽率或生活力、处理状态、包装状态、地理位置和门点 |
| How long or cycle | 一个声明的制种作物周期；纳入储存时另行声明储存时长 |
| reference_flow_link | 下方参考数量和已核实的平台产品流 |
| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 大豆种子 `dc436b03-e044-43a2-be71-c229dce5b901` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200c9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 种子等级或认证等级；杂交或常规授粉状态；适用时的品种或亲本系身份；处理状态；含水率基准；物理净度；发芽率或生活力；地理位置；作物周期；声明门点；包装状态 |
| Binding | `fixed` |
构建前景数据包时，必需限定信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。参考基准为质量。只有在记录千粒重、批次粒数或其他透明的粒数到质量换算时，才可保留粒数数据。
## 4. 计量与单位规则
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200c9a66` | kg | 参考流必须表示声明门点的净合格大豆种子（用于种植），并排除容器皮重。 |
| `seed_count_conversion` | 种子粒数 | 质量 `93a60a56-a3c8-11da-a746-0800200c9a66` | kg 和 seeds | 只有记录千粒重、批次粒数或等效透明因子时，才可将粒数换算为质量。 |
| `seed_quality_attributes` | 合格种子 | 声明的质量属性 | 百分比或声明单位 | 含水率、物理净度、发芽率或生活力以及处理状态应作为种子批次属性保留，不得用通用默认值替代。 |
| `moisture_basis` | 田间和调理质量 | 质量和含水率 | kg 和声明质量分数 | 保留收到状态质量和含水率基准；只有使用实测含水率和明确的质量—水分方程时才可转换。 |
| `fertilizer_n_basis` | 养分投入和土壤排放 | 质量 | kg 产品和 kg 养分 | 分开记录配方产品质量和养分质量；氮排放计算使用声明的 kg N 投入。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 或 kg | 区分供应灌溉水、自然资源取水和单独报告的消耗指标。 |
| `energy_inventory` | 田间和调理能源 | 质量、体积或能量 | kg、L、MJ 或 kWh | 保留能源载体、计量单位、作业、过程和换算基准。 |
| `packaging_count` | 按件计的包装 | 件数 `01846770-4cfe-4a25-8ad9-919d8d378345` | item 和 kg | 按件记录包装时，还必须声明袋容量或材料质量，以便需要时换算为质量。 |
| `land_basis` | 土地占用 | 面积—时间 | ha·作物周期或声明面积—时间单位 | 记录种植面积和作物周期占用；不得把土地占用当作土地转化的替代指标。 |
## 5. 系统边界
### 边界概化
| Field | Value |
| --- | --- |
| declared_starting_condition | 来源种批、亲本系种批或声明的制种起始材料 |
| starting_condition_role | 繁殖身份和作物生产起始条件 |
| product_classification_scope | CPC 3.0 `01411` 大豆种子（用于种植）；商品谷物、饲草或青贮大豆以及下游大豆产品不在本 PCR 范围内 |
| recursive_input_rule | 用于建立作物的同类种子输入作为声明的起始投入记录，不计入当期合格种子输出。进入调理过程的种批作为中间交接跟踪，不作为第二个参考输出。 |
| upstream_dataset_requirement | 来源种子、养分产品、植保产品、灌溉水供应、能源载体、包装材料和废物处理服务需要代表性上游数据集或有文件依据的排除。 |
| disclosure | 种子等级；杂交或常规授粉路线；品种或亲本系身份；田块和地理位置；作物周期；灌溉；养分和植保记录；收获质量和含水率；调理、检测、处理、包装、储存、不合格物和门点 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_seed_gate` | 前景边界 | 纳入种子生产、收获、种子调理、质量检测、可选处理、包装，以及达到声明农场门所需的储存或交付阶段。 | `fao-seed-production`; `fao-seed-conditioning` |
| `boundary_gate_definition` | 参考产品 | 默认使用农场门。只有在明确采集储存或交付记录、损失和门点交接时，才可使用交付门点。 | `fao-seed-production`; `mass-balance-identity` |
| `boundary_seed_quality` | 合格种子 | 当分级、质量检测、处理状态和批次放行决定输出是否为合格播种种子时，将其作为产品边界的一部分。 | `fao-seed-production`; `usda-seed-cleaning-handling` |
| `boundary_input_completeness` | 田间和调理 | 对来源种子、养分投入、植保、灌溉、田间能源、土地、调理能源、包装、不合格物和处理提供采集值、合理零值或有记录的排除。 | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_output_separation` | 所有输出 | 按实测质量和去向区分合格播种种子、中间收获种子作物、不合格物、筛下物、粉尘、残余物、包装废弃物和未解释损失。 | `mass-balance-identity`; `fao-seed-conditioning` |
## 6. 过程清单结构
年度种子路线按作物周期和批次计量。默认不假设储存或库存跨期；除非明确纳入储存期间，使用单一期间的作物周期基准。有意副产品、降级物流和拒收物作为独立输出并声明交接。
### 过程图
| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_seed_multiplication` | 大豆种子田间繁殖 | required |  | 前景 | 作物周期投入和调理前收获种子作物 |
| `seed_conditioning_treatment_and_packaging` | 种子调理、处理和包装 | required |  | 前景 | 清选后、合格且完成包装的大豆种子（用于种植） |
| `seed_storage` | 种子储存 | conditional | 在声明门点前发生储存或储存实质影响交付参考流时纳入 | 前景 | 储存和交付的合格种子 |
### 过程：大豆种子田间繁殖（`field_seed_multiplication`）
#### 输入
##### 产品流
###### 来源种子或亲本系种批（`source_seed_or_parental_line_lot`）
记录建立声明大豆种子路线的来源种批。其身份、等级、处理状态、质量和来源田块与当期合格输出分开。
 - 选定流：用于播种的大豆来源种子或亲本系种批 dc436b03-e044-43a2-be71-c229dce5b901
- 流属性/单位：Mass / kg
- 数量规则：按田块或亲本系单元记录来源种批实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_seed_lot_records`
- 来源：`fao-seed-production`
###### 农业养分与肥料投入（`field_soya_bean_seed_multiplication_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`
- 数量范围：Candidate QA guardrail
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：declared flow unit
  - 基准：declared process or reference-flow basis
  - 基准类型：Process output (`process_output`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

- 数量范围：Candidate QA guardrail
  - 范围角色：QA guardrail (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：declared flow unit
  - 基准：declared process or reference-flow basis
  - 基准类型：Process output (`process_output`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### 灌溉水供应（`irrigation_water_supplied`）
记录各声明来源提供到田间的灌溉水。经证据支持的雨养路线记录合理零值并保留雨养证据。
- 选定流：供应到制种田的灌溉水
- 流属性/单位：Mass or volume / kg or m3
- 绑定：`parameterized`
- Flow Set：`flow-set.water-use`
- 数量规则：按田块和水源记录计量或有证据支持的供应灌溉水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`ipcc-2019-cropland`
###### 田间燃烧能源（`field_combustion_energy`）
记录田间设备使用的燃料或直接供应的燃烧能源，包括现场燃烧的抽水能源。移动运输燃料不放入此行。
- 选定流：田间燃料或燃烧能源载体
- 流属性/单位：Mass, volume, or energy / kg, L, or MJ
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- 数量规则：按田间作业记录实测燃料或能源使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`ipcc-2019-cropland`
###### 灌溉抽水电力（`irrigation_pumping_electricity`）
记录在田间边界使用的购入电力，包括灌溉抽水和电驱动田间设备。
- 选定流：灌溉抽水购入电力
- 流属性/单位：Energy / kWh or MJ
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- 数量规则：按电表、账单或供应商记录分配到声明田间路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`ipcc-2019-cropland`
###### 植保产品（`crop_protection_products`）
记录用于杂草、虫害或病害的具体制剂产品和有效成分。产品身份和有效成分含量分开。
 - 选定流：具体植保产品或有效成分
- 流属性/单位：Mass / kg product or active substance
- 数量规则：按产品和有效成分记录实际施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 收获种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-seed-production`
##### 废物流
##### 基本流
###### 耕地占用（`cultivated_land_occupation`）
记录声明制种作物周期的耕地占用。在数据包生成时核验具体基本流 UUID。
- 选定流：按声明范围的耕地占用或转化
- 流属性/单位：Area-time / ha·crop cycle
- 数量规则：种植面积乘以声明的作物周期占用基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格种子输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_land_use_records`
- 来源：`ipcc-2019-cropland`
###### 自然水取水（`natural_water_withdrawal`）
自然资源取水与供应灌溉水产品投入保持区分。
- 选定流：从声明自然水源取出的水资源
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按水源记录计量取水，或由抽水记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`ipcc-2019-cropland`
#### 输出
##### 产品流
###### 进入调理的收获大豆种子作物（`harvested_seed_crop_for_conditioning`）
该中间产品离开田间繁殖并进入种子调理，不是额外的最终参考输出。
- 选定流：进入调理的收获大豆种子作物
- 流属性/单位：Mass / kg
- 数量规则：按声明含水率基准记录收获种子作物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvested_seed_mass`
- 来源：`fao-seed-production`; `mass-balance-identity`
##### 废物流
###### 田间残余物和非种子材料（`field_residues_and_non_seed_material`）
除非残余物作为有意销售或转移的产品跨越边界，否则将残余物、非种子植物材料、损伤种子或其他田间材料记录为废物。本废物流不设置产品投入 Flow Set。
- 选定流：按声明去向记录田间残余物或非种子材料
- 流属性/单位：Mass / kg
- 数量规则：按去向记录实测或质量平衡所得质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_residue_records`
- 来源：`ipcc-2019-cropland`; `mass-balance-identity`
##### 基本流
###### 田间管理土壤氮排放至空气（`managed_soil_nitrogen_emissions_to_air`）
使用选定方法层级、养分投入记录和声明的土壤与气候背景，记录管理土壤产生的物种特定排放。
- 选定流：管理土壤排放至空气的氮物种
- 流属性/单位：Mass / kg species and kg N
- 数量规则：根据养分投入和选定土壤排放方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格种子输出
- 基准类型：N 投入（`n_input`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`
###### 田间管理土壤氮排放至水体（`managed_soil_nitrogen_emissions_to_water`）
当所选方法和数据范围要求时，记录进入声明水体环境的硝酸盐或其他氮物种。
- 选定流：管理土壤排放至水体的氮物种
- 流属性/单位：Mass / kg species and kg N
- 数量规则：根据养分投入、场址条件和选定淋失方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格种子输出
- 基准类型：N 投入（`n_input`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`
###### 田间能源产生的化石二氧化碳（`fossil_carbon_dioxide_from_field_energy`）
根据记录的田间能源载体和声明因子计算化石燃烧排放。
- 选定流：田间能源排放至空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：燃料或能源数量乘以声明的排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格种子输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_energy_records`
- 来源：`ipcc-2019-cropland`
### 过程：种子调理、处理和包装（`seed_conditioning_treatment_and_packaging`）
#### 输入
##### 产品流
###### 收获种子作物投入（`harvested_seed_crop_input`）
将田间输出作为独立的中间投入接收，并保留种批、含水率和来源田块身份。
 - 选定流：接收用于调理的收获大豆种子作物 dc436b03-e044-43a2-be71-c229dce5b901
- 流属性/单位：Mass / kg
- 数量规则：按声明含水率基准记录接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格包装种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_records`
- 来源：`mass-balance-identity`; `fao-seed-conditioning`
###### 调理和干燥电力（`conditioning_and_drying_electricity`）
记录干燥、脱粒、清选、分级、检测、处理和包装作业跨越调理边界的电力。
- 选定流：种子调理和包装购入电力
- 流属性/单位：Energy / kWh or MJ
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- 数量规则：按调理批次记录电表、账单或设备能源量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格包装种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-seed-conditioning`
###### 调理燃烧能源（`conditioning_combustion_energy`）
记录种子干燥或其他调理作业使用的燃料或直接供应的热量。
- 选定流：干燥燃料或供应的过程热
- 流属性/单位：Mass, volume, or energy / kg, L, or MJ
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- 数量规则：按调理批次记录实测燃料或供应热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格包装种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-seed-conditioning`
###### 种子处理材料（`seed_treatment_material`）
记录应用于合格种批的处理产品和有效成分，包括剂量、处理质量和处理状态。
 - 选定流：种子处理产品或有效成分
- 流属性/单位：Mass / kg product or active substance
- 数量规则：按种批记录处理产品和有效成分质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 处理种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_treatment_records`
- 来源：`fao-seed-production`
###### 种子包装功能（`seed_packaging_function`）
记录声明农场门前使用的袋、内衬、封口、标签或其他包装功能。包装与种子材料分开。
- 选定流：一次或二次种子包装材料/功能
- 流属性/单位：Mass, count, or declared packaging quantity / kg or item
- 绑定：`parameterized`
- Flow Set：`flow-set.packaging-function`
- 数量规则：按合格种子批次记录包装库存发放量，必要时按声明质量或容量将件数换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_input_records`
- 来源：`usda-seed-cleaning-handling`
##### 废物流
##### 基本流
#### 输出
##### 产品流
###### 合格大豆种子（用于种植）（`accepted_sowing_seed`）
经过清选、分级、检测、可选处理和包装，并在声明农场门放行的种子是最终参考产品。
- 选定流：大豆种子 `dc436b03-e044-43a2-be71-c229dce5b901`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：质量放行和包装后记录合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_accepted_seed_mass`
- 来源：`fao-seed-production`; `mass-balance-identity`
###### 有意副产品或降级种子流（`intended_seed_coproduct_or_downgrade`）
只有当筛下物、降级种子或其他分离物流以有文件支持的副产品或独立产品形式跨越边界时，才记录本产品输出。必须声明去向，且不得将其计入合格播种种子。
- 选定流：有意转移的降级或副产品种子流
- 流属性/单位：Mass / kg
- 数量规则：按批次和声明去向记录实测输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_mass_records`
- 来源：`mass-balance-identity`
##### 废物流
###### 调理不合格物和筛下物（`conditioning_rejects_and_screenings`）
按质量和去向记录不合格种子、筛下物、破碎籽粒、粉尘和等外物。本废物流不设置产品投入 Flow Set。
- 选定流：按声明去向记录不合格种子、筛下物、粉尘或等外物
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向称重或通过批次质量平衡得到
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject_mass_records`
- 来源：`usda-seed-cleaning-handling`; `mass-balance-identity`
###### 包装废弃物（`packaging_waste`）
按材料和去向记录包装损耗和废弃包装。
- 选定流：按材料和声明去向记录包装废弃物
- 流属性/单位：Mass / kg
- 数量规则：按批次称重或包装库存平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 包装种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`usda-seed-cleaning-handling`
##### 基本流
###### 调理粉尘和燃烧排放（`conditioning_dust_and_combustion_emissions`）
根据声明接收环境、物种和方法记录清选和干燥产生的颗粒物或燃烧物种。
- 选定流：按物质和环境分室记录的调理空气排放
- 流属性/单位：Mass / kg
- 数量规则：按批次实测、收集或计算排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格种子
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_emission_records`
- 来源：`fao-seed-conditioning`
### 过程：种子储存（`seed_storage`）
#### 输入
##### 产品流
###### 进入储存的合格种子（`accepted_seed_entering_storage`）
仅当储存位于声明门点之前时纳入。按种批记录身份和储存质量，与最终交付输出分开。
- 选定流：大豆种子 `dc436b03-e044-43a2-be71-c229dce5b901`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：按种批和储存时长记录储存种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付合格种子
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_lot_records`
- 来源：`fao-seed-production`
###### 储存电力（`storage_electricity`）
当储存温控、搬运或监测在边界内且具有实质影响时，记录其电力。
- 选定流：种子储存购入电力
- 流属性/单位：Energy / kWh or MJ
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- 数量规则：按储存质量和时长由电表或账单分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付合格种子
- 基准类型：储存时长（`storage_duration`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_storage_energy_records`
- 来源：`fao-seed-production`
##### 废物流
###### 储存损失或损伤种子（`storage_loss_or_damaged_seed`）
记录储存损失、损伤批次及其去向。本废物流不设置产品投入 Flow Set。
- 选定流：按声明去向记录储存损失或损伤种子
- 流属性/单位：Mass / kg
- 数量规则：按种批和储存期进行库存平衡或称重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 交付合格种子
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_loss_records`
- 来源：`mass-balance-identity`
##### 基本流
#### 输出
##### 产品流
###### 交付的合格大豆种子（`delivered_accepted_seed`）
仅当声明参考门点在储存之后时使用。它仍是同一参考产品功能，不得与农场门输出重复计数。
- 选定流：大豆种子 `dc436b03-e044-43a2-be71-c229dce5b901`
- 流属性/单位：Mass / kg
- 绑定：`fixed`
- 数量规则：储存平衡后记录交付质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivered_seed_mass`
- 来源：`mass-balance-identity`
##### 废物流
##### 基本流
## 7. 分配与共产品处理
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivision` | 田间和调理过程 | 能够细分时，应分别记录种子繁殖、调理、处理、包装、不合格物和按去向处理，以避免分配。 | `iso-14044-2006` |
| `allocation_intended_outputs` | 有意形成的产品输出 | 当残余物或等外物流被有意销售或转移为产品时，先证明其产品状态和去向，再选择声明的归因方法。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_seed_quality` | 合格种子和降级批次 | 除非替代输出被有意生产、单独识别并纳入声明门点，否则不得把种子质量相关负荷分配给商品谷物或降级物流。 | `iso-14044-2006` |
| `allocation_fallback` | 多个有意输出 | 无法细分时，使用声明的质量、物理属性、经济或其他可辩护方法，披露理由，并以另一种实质可辩护方法进行敏感性测试。 | `iso-14044-2006` |
| `allocation_reject_fate` | 不合格物和废物 | 区分田间残余物、调理不合格物、包装废弃物、储存损失、处理、回收和处置；没有去向和替代证据时不得给出替代产品信用。 | `mass-balance-identity` |

每个拒收或等外种子状态都必须明确路由为返工、降级、回收或丢弃。返工环路或边界退出要连接到产生该状态的调理过程；在新的有文件质量放行事件前，拒收物不得计入合格输出。
## 8. 前景数据采集、计算与质量规则
### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot_records` | `field_seed_multiplication` | 来源种子或亲本系种批 | 种批记录 | 种批；等级；品种或来源种批角色；处理；质量；含水率；供应方或来源田块 | 种批证书、接收记录和校准秤 | kg 和声明属性 | 每批 | 作物周期 | 田块或生产单元 | 按田块或亲本系单元汇总并按收获种子作物归一化 | 种批证书、接收记录、称重记录 |
| `cp_nutrient_input_records` | `field_seed_multiplication` | 养分和改良剂投入 | 施用记录 | 产品；配方；养分含量；质量；日期；田块；方法 | 发票、标签、施用记录或服务记录 | kg 产品和 kg 养分 | 每次施用 | 作物周期 | 田块 | 按田块汇总产品和养分质量 | 发票、标签、施用记录 |
| `cp_irrigation_records` | `field_seed_multiplication` | 灌溉和取水 | 水表或水源记录 | 水源；水表；读数；体积；日期；田块；抽水能源 | 校准水表、抽水记录或水记录 | m3、kg 和 kWh | 事件或月份 | 作物周期 | 田块和水源 | 按水源汇总并区分供应水和取水 | 水表校准、读数、水源记录 |
| `cp_field_energy_records` | `field_seed_multiplication` | 田间燃料和电力 | 燃料或电力记录 | 作业；载体；数量；机械或供应方；日期；田块 | 燃料台账、电表、发票或承包商记录 | L、kg、MJ 或 kWh | 作业或账期 | 作物周期 | 田块或生产单元 | 分配到作业且不重复计算 | 电表、发票、台账 |
| `cp_crop_protection_records` | `field_seed_multiplication` | 植保产品 | 施用记录 | 产品；有效成分；剂量；面积；日期；田块；对象 | 标签和施用记录 | kg 产品、kg 有效成分和 ha | 每次施用 | 作物周期 | 田块 | 按产品和有效成分汇总 | 标签、施用记录 |
| `cp_land_use_records` | `field_seed_multiplication` | 土地占用 | 田块面积记录 | 田块；种植面积；日期；作物周期 | 田块记录、GIS 或农场登记 | ha 和作物周期 | 每个周期 | 作物周期 | 田块 | 计算面积—时间并按合格输出归一化 | 田块图、GIS、农场记录 |
| `cp_harvested_seed_mass` | `field_seed_multiplication` | 收获种子作物 | 收获记录 | 田块；日期；质量；含水率；种子路线；不合格物 | 校准秤和收获记录 | kg 和含水率分数 | 每次收获 | 作物周期 | 田块和接收点 | 在调理前平衡收获质量 | 秤校准、收获记录 |
| `cp_field_residue_records` | `field_seed_multiplication` | 田间残余物 | 残余物记录 | 物流；质量；去向；日期；田块 | 称重、打包票据或田间记录 | kg | 每次事件 | 作物周期 | 田块 | 按去向和边界跨越汇总 | 称重、票据、田间记录 |
| `cp_conditioning_input_records` | `seed_conditioning_treatment_and_packaging` | 收获种子投入 | 批次接收记录 | 批次；投入质量；含水率；来源；日期 | 批次单和校准秤 | kg 和含水率分数 | 每批 | 调理周期 | 设施 | 将接收质量与输出物流平衡 | 批次单、称重记录 |
| `cp_conditioning_energy_records` | `seed_conditioning_treatment_and_packaging` | 调理能源 | 电表或设备记录 | 批次；能源类型；数量；作业；时段 | 电表、账单或设备台账 | kWh、MJ、kg 或 L | 批次或时段 | 调理周期 | 设施 | 按作业汇总并按合格种子归一化 | 电表、账单、设备台账 |
| `cp_seed_treatment_records` | `seed_conditioning_treatment_and_packaging` | 处理材料 | 处理记录 | 产品；有效成分；剂量；处理质量；种批 | 处理记录、标签或供应商证书 | kg 产品、kg 有效成分和 kg 种子 | 每批 | 调理周期 | 设施 | 按产品和处理种批汇总 | 处理记录、标签 |
| `cp_packaging_input_records` | `seed_conditioning_treatment_and_packaging` | 包装功能 | 包装领用记录 | 类型；件数；容量；材料质量；批次 | 库存领用记录或包装线台账 | item 和 kg | 每批 | 调理周期 | 设施 | 只有声明容量或质量时才将件数转质量 | 包装台账、库存记录 |
| `cp_accepted_seed_mass` | `seed_conditioning_treatment_and_packaging` | 合格大豆种子（用于种植） | 放行记录 | 批次；合格质量；含水率；净度；发芽率；处理；门点 | 校准秤和质量检测 | kg 和声明属性 | 每批 | 调理周期 | 设施和门点 | 按声明基准汇总放行种批 | 称重、检测、放行记录 |
| `cp_reject_mass_records` | `seed_conditioning_treatment_and_packaging` | 调理不合格物和筛下物 | 不合格物记录 | 批次；物流；质量；去向 | 称重或批次质量平衡 | kg | 每批 | 调理周期 | 设施 | 按物流和去向汇总 | 称重、不合格物日志、去向记录 |
| `cp_packaging_waste_records` | `seed_conditioning_treatment_and_packaging` | 包装废弃物 | 废物记录 | 材料；质量；去向；批次或时段 | 称重或承包商记录 | kg | 每批或每期 | 调理周期 | 设施 | 按材料和去向汇总 | 称重单、承包商记录 |
| `cp_conditioning_emission_records` | `seed_conditioning_treatment_and_packaging` | 调理排放 | 排放记录 | 物质；分室；质量或因子；批次 | 粉尘记录、维护记录或计算 | kg | 批次或时段 | 调理周期 | 设施 | 按环境分室和物种汇总并归一化 | 记录、方法计算 |
| `cp_storage_lot_records` | `seed_storage` | 进入储存的合格种子 | 储存库存记录 | 种批；质量；起止日期；含水率；地点 | 库存平衡和称重 | kg 和 days | 每批 | 储存期 | 储存点 | 汇总储存质量并保留时长 | 库存记录、称重 |
| `cp_storage_energy_records` | `seed_storage` | 储存电力 | 电表或账单记录 | 电表；数量；时段；储存质量 | 电表或电费单 | kWh 或 MJ | 时段 | 声明储存时长 | 储存点 | 按储存质量和时长分配 | 电表、账单 |
| `cp_storage_loss_records` | `seed_storage` | 储存损失或损伤 | 损失记录 | 种批；损失质量；类别；去向；时段 | 库存平衡和称重 | kg | 每批或时段 | 储存期 | 储存点 | 按去向汇总损失 | 库存和处置记录 |
| `cp_delivered_seed_mass` | `seed_storage` | 交付合格大豆种子 | 交付记录 | 种批；交付质量；日期；门点；接收方；含水率 | 发运记录和校准秤 | kg 和含水率分数 | 每次发运 | 交付期 | 声明门点 | 汇总交付批次且不重复计算农场门输出 | 发运、称重记录 |
### 计算规则
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_accepted_seed` | 所有前景行 | 将实测或计算质量除以同一声明门点和基准下的净合格种子质量 | 输出记录；投入记录 | 每 1 kg 参考流的数量 | `mass-balance-identity` |
| `convert_seed_moisture_basis` | 田间和调理质量 | 仅根据记录质量和含水率使用明确的水分与干物质方程转换 | 收获、接收和质量记录 | 声明基准质量 | `mass-balance-identity`; `fao-seed-conditioning` |
| `calculate_seed_conditioning_yield` | 调理输出 | 合格种子质量除以接收的收获种子作物质量，并分别保留不合格物和含水率变化 | 调理接收；合格质量；不合格物质量 | 产率、不合格率和未解释比例 | `usda-seed-cleaning-handling`; `mass-balance-identity` |
| `calculate_land_occupation` | 土地占用 | 种植面积乘以声明作物周期占用，并按合格种子归一化 | 土地记录；合格种子质量 | 每参考流的面积—时间 | `ipcc-2019-cropland` |
| `calculate_water_withdrawal` | 取水 | 必要时将计量体积换算为质量，并保持水源取水与供应灌溉水分开 | 灌溉记录 | 每参考流的资源取水 | `ipcc-2019-cropland` |
| `calculate_managed_soil_emissions` | 田间氮排放 | 对养分投入和声明土壤、气候及管理条件应用选定 IPCC 方法层级，并披露物种换算 | 养分记录；方法因子 | 物种特定排放 | `ipcc-2019-managed-soils-n2o` |
| `calculate_field_energy_emissions` | 田间能源 | 记录燃料或能源乘以声明因子，并按合格种子归一化 | 田间能源；因子 | 田间能源排放 | `ipcc-2019-cropland` |
| `calculate_conditioning_energy_emissions` | 调理能源 | 记录调理燃料或能源乘以声明因子，并按合格种子归一化 | 调理能源；因子 | 调理排放 | `fao-seed-conditioning` |
| `reconcile_field_outputs` | 田间生产 | 收获种子作物、田间残余物、非种子材料和有文件的损失在声明容差内与收获记录平衡 | 收获；残余物记录 | 田间输出平衡 | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | 调理 | 接收质量和含水率与合格种子、不合格物、包装废物、排放和有文件的损失平衡 | 调理接收；合格种子；不合格物 | 调理平衡 | `mass-balance-identity`; `fao-seed-conditioning` |
| `reconcile_storage_outputs` | 储存 | 储存质量与交付合格种子、储存损失和声明期末库存平衡 | 储存；交付；损失记录 | 储存平衡 | `mass-balance-identity` |
### 数据质量要求
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_seed_identity` | 参考产品和来源种批 | 声明种子等级、杂交或常规授粉状态、适用时的品种或亲本系身份、处理状态、含水率基准、物理净度和发芽率或生活力。 | 种子证书、种批记录、质量检测 |
| `dq_mass_records` | 所有质量行 | 每个质量值都标识日期、场址或批次、单位、适用时的含水率基准以及测量设备或来源记录。 | 校准记录、地磅票据、批次单 |
| `dq_temporal_coverage` | 作物周期和储存数据 | 覆盖声明作物周期和储存期，并披露采用单季数据还是多季聚合。 | 带日期的田间、投入、收获、储存和放行记录 |
| `dq_input_completeness` | 田间和调理投入 | 对来源种子、养分、植保、灌溉、田间能源、土地、调理能源、处理和包装提供数量、合理零值或排除依据。 | 台账、标签、水表、电表、日志和发票 |
| `dq_quality_release` | 合格种子输出 | 保留批次放行依据、质量检测方法、含水率、净度、发芽率或生活力、处理状态和门点。 | 质量检测、证书、放行记录 |
| `dq_reject_and_fate` | 不合格物、残余物和废物 | 每条非参考物流都有实测或平衡质量和声明去向；不得仅依据名称推断产品状态。 | 不合格物日志、残余物记录、发运或处理记录 |
| `dq_mass_balance` | 所有过程 | 在声明容差内平衡田间、调理和储存输出，并披露未解释比例。 | 称重记录、批次单、库存平衡 |
| `dq_binding_coordinate` | Flow Set 和 fixed 绑定 | 最终数据包必须保持每个 Flow Set 要求的流类型、方向、坐标、属性、单位、用途和地理约束。只有直接核实的平台 UUID 才可使用 fixed 绑定。 | 前景身份记录和 Flow Set 选择记录 |
## 9. 校验规则
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 确认已核实的大豆种子（用于种植） UUID、全部限定信息和声明门点；最终交换必须保留该 UUID。 | `mass-balance-identity` |
| `validation_scope` | 边界 | 确认数据集是用于播种的大豆种子，不能静默包含商品谷物、饲草或青贮大豆、下游种植或下游加工。 | `fao-seed-production` |
| `validation_process_map` | 过程清单 | 确认田间制种、调理、质量放行和纳入范围的储存彼此分开，并且每个交接清楚。 | `fao-seed-production`; `usda-seed-cleaning-handling` |
| `validation_flow_coordinates` | 库存行 | 确认每个 parameterized 行符合其 Flow Set 的流类型、方向、坐标、分组、属性、单位、用途和地理约束。 | `mass-balance-identity` |
| `validation_nutrients_and_emissions` | 养分和土壤排放 | 确认养分产品质量、养分质量、方法层级、因子、物种、单位和换算均已声明；module 不提供因子或产品事实。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_land` | 灌溉、取水和土地 | 保持供应灌溉水产品投入、自然水取水和土地占用独立，并防止重复计算。 | `ipcc-2019-cropland` |
| `validation_quality_release` | 合格种子 | 确认参考输出声明种子等级、质量属性、处理状态、批次放行、包装状态和门点。 | `fao-seed-production` |
| `validation_reject_fate` | 不合格物和废物 | 确认每条不合格种子、筛下物、残余物、包装废弃物和储存损失都有去向；不得给废物输出分配产品投入 Flow Set。 | `usda-seed-cleaning-handling`; `mass-balance-identity` |
| `validation_mass_balance` | 所有输出 | 确认田间、调理和储存平衡在声明容差内成立，并且合格种子没有在两个交接点重复计数。 | `mass-balance-identity` |
| `validation_allocation` | 有意形成的共产品 | 确认任何有意共产品均单独识别、去向有证据、分配或替代处理已披露。 | `iso-14044-2006` |
| `validation_module_boundary` | 自动选择的 modules | 仅将已选择的 module 义务作为结构和检查使用；不得把 module 当作产品数量、UUID、排放因子或种子事实来源。 | `iso-14044-2006` |
## 10. 发布数据集画像
| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当种子等级、生产路线、质量属性、地理位置、含水率基准、处理状态、包装和门点与元数据一致时，用于下游 LCA 数据构建 |
| excluded_use | 商品大豆谷物；饲草或青贮大豆；下游种植；食品、饲料、淀粉或乙醇加工；缺少种子质量或门点限定信息的数据集 |
| required_metadata | 参考流；CPC 范围；种子等级；杂交或常规授粉状态；适用时的品种或亲本系身份；地理位置；作物周期；含水率；净度；发芽率或生活力；处理；包装；声明门点；Flow Set 选择；采集协议覆盖；DQR |
| required_quality_disclosure | 种批和田块覆盖、计量记录、质量放行证据、结构坐标及适用的 Flow Set 引用、fixed UUID 证据（如有）、排除项、质量平衡结果和数据质量评分 |
| update_trigger | 种子路线、杂交或亲本系实践、调理技术、处理、包装、储存、参考流限定信息、Flow Set 契约、采集覆盖或数据质量发生实质变化 |
## 11. 数据源
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-seed-production` | official_guidance | FAO seed production and quality guidance, <https://www.fao.org/4/y4011e/y4011e0v.htm> | 种子等级、质量属性、批次放行和制种边界 |
| `fao-seed-harvest-postharvest-2023` | official_guidance | FAO harvest and post-harvest handling guidance, <https://www.fao.org/family-farming/detail/en/c/1619514/> | 大豆收获、处理和田间到调理过程背景 |
| `fao-seed-conditioning` | handbook | FAO, Agricultural engineering in development: Grain and post-harvest systems, <https://www.fao.org/4/t0522e/T0522E03.htm> | 干燥、含水率、清选、调理和过程交接 |
| `usda-seed-cleaning-handling` | handbook | USDA, Seed cleaning and handling guidance, <https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo20323/pdf/GOVPUB-A-PURL-gpo20323.pdf> | 清选、分级、筛下物、不合格物和处理记录 |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | 耕地管理、残余物处理、土地和作物管理方法背景 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤氮排放和因子选择 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级、数据质量和敏感性要求 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for seed harvest, conditioning, packaging, storage, rejects, and reference-flow reconciliation. | 输出平衡、归一化和 QA 约束 |
