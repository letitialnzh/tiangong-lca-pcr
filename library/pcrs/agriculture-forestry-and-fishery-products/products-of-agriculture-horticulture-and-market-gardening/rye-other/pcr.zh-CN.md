---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rye-other
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---
# 声明农场门或初级处理门的非播种用黑麦谷物
## 1. 适用范围与适用性
本 PCR 用于构建 CPC 3.0 `01162`“Rye, other”对应的非播种用黑麦谷物前景数据包。产品可用于食品、饲料或工业用途，但具体终端用途必须声明。范围覆盖年度黑麦种植、收获，以及在声明门点位于收获后时所包含的初级干燥、清理、分级和短期储存，终点为声明的农场门或初级处理门。
本 PCR 不覆盖播种用黑麦种子、育种或认证种子、面粉、麦芽、淀粉、乙醇及其他黑麦加工产品、零售产品，也不覆盖下游食品、饲料或工业转化。“other”只是 CPC 覆盖标签，不是独立产品事实；数据包必须声明终端用途类别和实物状态。
默认声明门点为：(a) 收获时农场门，或 (b) 完成声明的初级处理后的门点。所选门点、水分基准、清理状态、等级或质量描述、地理范围、作物年度以及散装或包装状态均为必需限定信息。
## 2. 产品类别识别
| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rye-other` |
| classification_refs | CPC 3.0 `01162`，`Rye, other` |
| covered_products | 用于已声明食品、饲料或工业用途的非播种用黑麦谷物，位于收获农场门或声明的初级处理门 |
| excluded_products | 播种用黑麦种子；育种、基础、登记或认证种子；面粉；麦芽；淀粉；乙醇；其他黑麦加工产品；零售即售产品 |
| representative_product | 在声明水分基准、农场门或初级处理门的整粒非播种用黑麦谷物 |
| production_route | 年度黑麦种植、收获，以及可选的收获后初级干燥、清理、分级和短期储存 |
| market_state | 已声明用途、质量描述、水分基准和门点的散装或包装非播种用黑麦谷物 |
## 3. 参考流
| 字段 | 值 |
| --- | --- |
| What | 声明农场门或初级处理门的非播种用黑麦谷物 |
| How much | 1 kg |
| How well | 已声明终端用途（食品、饲料或工业）、重要时的黑麦类别或品种、水分基准、等级或质量描述、清理状态、地理范围、作物年度和门点 |
| How long or cycle | 一个声明的作物周期和收获年度；门点包含储存时另行声明储存时长 |
| reference_flow_link | 见下方参考数量和产品流 |
| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 调质黑麦籽粒 `ac1c42aa-ab59-4015-8237-08031c7f4a98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Binding | fixed |
| Required qualifiers | 非播种用途；食品/饲料/工业声明；重要时的黑麦类别或品种；水分基准；质量或等级描述；清理/干燥状态；地理范围；作物年度；声明门点；散装或包装状态 |
构建前景数据包时，`Required qualifiers` 中的项目必须写入数据集元数据、过程说明、参考流注释、产品描述或等效数据包字段。通用 Tiangong 黑麦身份由本 PCR 的非播种用产品边界限定；不得据此把数据集理解为播种用黑麦种子。
## 4. 计量与单位规则
| 规则编号 | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为所选声明门点的非播种用黑麦谷物净质量，并声明水分基准。 |
| `moisture_basis` | 收获及处理后谷物 | 质量和水分含量 | kg 和 percent | 记录原始质量和水分基准；若使用干物质归一化，保留实测水分和转换规则。 |
| `nitrogen_input_basis` | 肥料和氮排放 | 质量 | kg 产品和 kg N | 分开记录肥料产品质量和养分含量；氮排放计算使用 kg N 投入。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 或 kg | 区分按水源的取水、输送灌溉水、消耗量和水足迹结果，不得合并成单一流。 |
| `energy_inventory` | 田间燃料、电力和谷物干燥 | 质量、体积或能量 | kg、L、MJ 或 kWh | 归一化前记录燃料或能量类型、活动、期间、单位和转换基准。 |
| `output_reconciliation` | 收获、处理、筛下物、残余物和损失 | 质量 | kg | 在按参考流归一化前，用同一水分基准核对收获谷物、合格谷物、筛下物、残余物和实测损失。 |
## 5. 系统边界
| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_crop_production` | 田间生产 | 包含声明的播种用种子投入、土地占用、整地、播种、施肥、适用时的灌溉、植保、田间作业和收获前后的直接田间排放。 | `ipcc-2019-managed-soils-n2o`; `fao-crop-evapotranspiration-56` |
| `boundary_harvest` | 收获和田间交接 | 当这些活动属于前景数据包时，包含收获、脱粒或联合收割、田间收集，以及到声明农场门或初级处理交接点的运输。 | `fao-grain-postharvest-systems-1998`; `fao-rye-postharvest-operations-1999` |
| `boundary_primary_conditioning` | 收获后路线 | 只有当声明门点位于这些作业之后时，才包含初级干燥、清理、分级、粉尘或筛下物处理及短期储存。 | `fao-rye-postharvest-operations-1999`; `fao-grain-postharvest-systems-1998` |
| `boundary_downstream_exclusion` | 下游加工 | 排除制粉、制麦、淀粉或乙醇转化、食品或饲料配方、零售和消费者使用；这些应由下游数据集表示。 | `fao-rye-postharvest-operations-1999`; `usda-rye-standards-2020` |
| `boundary_input_completeness` | 所有前景路线 | 对肥料、灌溉、植保、田间能源、电力、土地、收获能源、干燥能源、清理损失、残余物和直接排放给出数值、合理的零值或有记录的排除理由。 | `ipcc-2019-managed-soils-n2o`; `fao-rye-postharvest-operations-1999` |
### 边界概化
| 字段 | 值 |
| --- | --- |
| declared_starting_condition | seed_for_sowing_input_and_declared_crop_cycle |
| starting_condition_role | crop_establishment_condition |
| product_classification_scope | 对应 CPC 3.0 `01162`“Rye, other”的非播种用黑麦谷物；播种用黑麦种子是上游投入，不是参考产品 |
| recursive_input_rule | 作为作物建立投入使用的同类黑麦流，应记录为播种用种子投入并披露来源、批次、数量和上游种子数据集；不得将其静默追踪为非播种用参考产品 |
| upstream_dataset_requirement | 播种用种子、肥料、植保产品、能源、水供应、运输、干燥、废物处理及其他上游投入使用已识别数据集或声明的供应商记录 |
| disclosure | 声明终端用途、重要时的黑麦类别或品种、作物周期、地理范围、作物年度、播种用种子来源、灌溉状态、水分基准、收获和处理路线、门点、质量描述以及所有非参考输出的去向 |
## 6. 过程清单结构
### 过程图
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rye_crop_production | Rye Crop Production | required |  | foreground | harvested rye grain and associated residues |
| harvest_and_field_delivery | Harvest and Field Delivery | required |  | foreground | harvested grain at farm or conditioning hand-off |
| primary_conditioning | Primary Drying, Cleaning, and Grading | conditional | include when the declared gate is after primary drying, cleaning, grading, or short-term storage | foreground | conditioned rye grain at declared gate |
| storage_and_declared_gate | Storage and Declared Gate Handoff | conditional | include when storage or a delivery hand-off materially changes the declared reference flow | foreground | declared rye grain at selected gate |
### 过程：黑麦作物生产（`rye_crop_production`）
#### 输入
##### 产品流
###### 用于黑麦作物的播种用种子（`seed_for_sowing_input`）
播种用种子是作物建立的上游投入，不是参考产品。记录其来源和批次身份，不得把由此得到的非播种用谷物数据集标为播种用黑麦种子。
- 选定流：Rye `ac1c42aa-ab59-4015-8237-08031c7f4a98`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：按田块或作物批次实测播种用种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明门点收获黑麦谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_input_records`
###### 农业养分与肥料投入（`rye_crop_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明门点收获黑麦谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`

###### 作为产品投入的灌溉水（`irrigation_water_input`）
发生灌溉时，将输送的灌溉水作为产品投入记录。水源、取水、输送和消耗保持区分。
- 选定流：Irrigation water `4ad684b1-8e85-4dee-8d9c-55d1fa2d4432`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：将水表记录的灌溉体积按需要换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明门点收获黑麦谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
###### 田间机械燃料（`field_machinery_fuel`）
按作业和作物批次记录田间机械燃料，再进行归一化。
- 选定流：Diesel, burned in agricultural machinery `57e0b1a3-2d05-46b2-b61b-cf7b5b167c6f`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：按田间作业实测燃料数量，并保留燃料类型和单位
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明门点收获黑麦谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
###### 植保产品（`crop_protection_product_input`）
根据可获得的原始记录，按制剂产品或有效成分记录植保产品，并声明选用的表示方式。
 - 选定流：Crop protection product
- 流属性/单位：Mass / kg
- 数量规则：按施用批次实测制剂产品或有效成分质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明门点收获黑麦谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
##### 废物流
不假定有废物投入。再利用有机物料、回收水或其他废物来源投入跨越前景边界时，单独记录。
##### 基本流
###### 土地占用（`land_occupation`）
根据田块面积和作物持续时间记录土地占用，并在交换发布前核验具体基本流 UUID。
- 选定流：Agricultural land occupation
- 流属性/单位：Area-time / ha a
- 数量规则：实测田块面积乘以声明的作物持续时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期和每个参考输出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
###### 灌溉取水（`water_withdrawal`）
只有支撑输送灌溉水记录的按水源取水才作为基本流记录。
- 选定流：water `419682fe-60fb-4b43-be89-bf2824b51104`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：根据按水源计量的取水记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明门点收获黑麦谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
#### 输出
##### 产品流
###### 收获的非播种用黑麦谷物（`harvested_rye_grain`）
收获黑麦谷物是交给农场门或初级处理路线的输出。它仍是非播种用谷物过程输出；只有当声明产品状态与已核实的初级处理平台流一致时，才使用固定参考 UUID。
- 选定流：田间交接点的收获非播种用黑麦谷物
- 流属性/单位：Mass / kg
- 数量规则：实测收获谷物质量，并保留水分基准和收获批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：初级处理前的过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`
- 数量范围：收获输出身份
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg harvested-grain process output
  - 基准：过程定量参考
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
###### 黑麦秸秆或田间残余物（`rye_straw_or_field_residue`）
秸秆或其他田间残余物在被移出、销售、转移、翻埋、焚烧或以其他方式跨越前景边界时记录。留在田间的残余物通过声明去向记录，不作为产品输出直接计入。
- 选定流：Rye straw `bcaf0254-cdd3-43d1-823a-2f69df3801d8`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：记录跨越边界的实测残余物质量和声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明门点收获黑麦谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_fate_records`
##### 废物流
不假定有废物投入。只有在收获损失、破损谷物或其他物料离开田间路线且去向有记录时，才作为废物记录。
##### 基本流
除上述项目外，只有在所选方法和基本流身份均有支持时才增加直接田间排放。
###### 直接土壤一氧化二氮排放（`direct_soil_n2o_emission`）
根据声明的氮投入和所选 IPCC 层级或本地有依据的方法计算直接土壤 N₂O。
- 选定流：nitrous oxide, emissions to air unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：将所选方法因子应用于已核算的氮投入，适用时将 N₂O-N 转换为 N₂O
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明门点收获黑麦谷物
- 基准类型：氮投入（`n_input`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fertilizer_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`
###### 直接氨排放（`direct_ammonia_emission`）
所选方法、本地证据或研究目标要求时，记录直接氨排放。
- 选定流：ammonia, emissions to air unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Binding: fixed
- 流属性/单位：Mass / kg N or kg substance
- 数量规则：根据已核算的氮投入和路径方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明门点收获黑麦谷物
- 基准类型：氮投入（`n_input`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fertilizer_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`
###### 直接硝酸盐排放（`direct_nitrate_emission`）
所选方法、本地证据或研究目标要求时，记录直接硝酸盐排放。
- 选定流：nitrate, emissions to fresh water `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- Binding: fixed
- 流属性/单位：Mass / kg N or kg substance
- 数量规则：根据已核算的氮投入和路径方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明门点收获黑麦谷物
- 基准类型：氮投入（`n_input`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fertilizer_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`
### 过程：收获与田间交接（`harvest_and_field_delivery`）
#### 输入
##### 产品流
###### 收获时接收的站立或已收黑麦作物（`rye_crop_received_for_harvest`）
收获节点接收作物生产路线的产品，并分别记录收获谷物和残余物结果。
 - 选定流：收获或站立黑麦作物物料 ac1c42aa-ab59-4015-8237-08031c7f4a98
- 流属性/单位：Mass / kg
- 数量规则：进入收获与田间交接过程的实测作物或谷物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每次收获事件和每个参考输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`
###### 收获燃料和电力（`harvest_energy_input`）
可分别计量时，按机器或作业记录收获燃料和电力。
- 选定流：Harvest energy carrier
- 流属性/单位：Energy / MJ or kWh
- 数量规则：按作业计量或由供应商记录的收获能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 收获黑麦谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_energy_records`
###### 收获或田间交接运输服务（`harvest_transport_service`）
当谷物跨越收获到门点交接边界时，记录路线特定的货运或内部搬运服务。
- 选定流：Grain freight or handling service
- 流属性/单位：Mass-distance / kg*km or t*km
- 数量规则：实测运输质量、距离、方式和路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 声明交接点的谷物
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`
##### 废物流
只有在收获损失离开收获边界且去向已知时才记录。
##### 基本流
只有在所选方法和流身份确认时才记录粉尘或直接燃烧排放。
#### 输出
##### 产品流
###### 交给农场门或初级处理交接点的谷物（`grain_at_handoff`）
交接输出为转移到所选门点路线的实测谷物质量，并保留水分基准和批次身份。
- 选定流：田间或初级处理交接点的收获非播种用黑麦谷物
- 流属性/单位：Mass / kg
- 数量规则：收获或处理交接点的实测谷物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程定量参考输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`
##### 废物流
**收获与田间交接损失（`harvest_field_delivery_loss`）**
当实测谷物或异物离开前景路线且不成为参考产品输出时，记录收获与田间交接损失。
- 选定流：Rejects `e6d6aa78-105e-4acc-a84b-46f68765a1cc`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：实测损失质量和声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获黑麦谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_fate_records`
##### 基本流
没有确认的方法和身份时，不增加额外基本流。
### 过程：初级干燥、清理和分级（`primary_conditioning`）
#### 输入
##### 产品流
###### 进入初级处理的收获黑麦谷物（`grain_to_primary_conditioning`）
只有当声明门点位于初级干燥、清理、分级或短期储存之后时，才使用本输入。
 - 选定流：进入初级处理的黑麦谷物 ac1c42aa-ab59-4015-8237-08031c7f4a98
- 流属性/单位：Mass / kg
- 数量规则：带水分基准的进入处理批次实测谷物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个处理批次和每个声明输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_output_records`
###### 处理能源（`conditioning_energy_input`）
当干燥、清理、分级和输送能源跨越处理边界时，按批次或生产线记录。
- 选定流：Conditioning energy carrier
- 流属性/单位：Energy / MJ or kWh
- 数量规则：按计量或供应商记录分配给处理批次的能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理后合格黑麦谷物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 来源：`fao-rye-postharvest-operations-1999`
##### 废物流
**处理筛下物和拒收谷物（`conditioning_screenings_and_rejects`）**
按物流和去向记录筛下物、异物、拒收谷物和不合格物料；不得将其计入合格参考产品。
- 选定流：Rejects `e6d6aa78-105e-4acc-a84b-46f68765a1cc`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：实测批次质量和声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 进入初级处理的谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_reject_records`
- 来源：`fao-rye-postharvest-operations-1999`; `usda-rye-standards-2020`
#### 输出
##### 产品流
###### 处理后的非播种用黑麦谷物（`conditioned_rye_grain`）
当声明门点位于初级处理之后时，处理后的合格黑麦谷物是参考输出。
- 选定流：调质黑麦籽粒 `ac1c42aa-ab59-4015-8237-08031c7f4a98`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：带水分基准和质量描述的实测合格谷物输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：定量参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioned_output_records`
- 来源：`fao-rye-postharvest-operations-1999`; `usda-rye-standards-2020`
- 数量范围：合格输出身份
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference output
  - 基准：定量参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
##### 废物流
所有处理拒收物、筛下物、破损谷物和包装或操作废物都必须在数据包中分配实测去向。
##### 基本流
只有能源记录、因子选择和基本流身份都确认时，才计算处理能源相关排放。
###### 处理粉尘排放到空气（`conditioning_dust_to_air`）
只有在实测或按声明方法计算且基本流身份已确认时，才记录粉尘排放。
- 选定流：Grain dust, emissions to air
- 流属性/单位：Mass / kg
- 数量规则：除尘器实测质量或按方法计算的排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 处理后黑麦谷物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_reject_records`
### 过程：储存与声明门点交接（`storage_and_declared_gate`）
#### 输入
##### 产品流
###### 进入声明储存或交接的处理后谷物（`grain_to_declared_storage`）
当所选门点位于储存或交接之后时，才纳入本条件过程。
- 选定流：调质黑麦籽粒 `ac1c42aa-ab59-4015-8237-08031c7f4a98`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：进入储存或声明交接的实测谷物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个储存期间和每个参考输出
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_handoff_records`
###### 储存或交接能源（`storage_handoff_energy`）
仅对声明储存或交接期间记录储存电力、通风或其他能源。
- 选定流：Storage or handoff energy carrier
- 流属性/单位：Energy / MJ or kWh
- 数量规则：按储存期间和谷物质量计量或由供应商记录的能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 谷物和声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_handoff_records`
###### 运输包装（`transport_packaging_input`）
仅在声明门点使用袋、内衬或其他运输包装状态而非散装谷物时记录包装。
- 选定流：Transport packaging material
- Binding: parameterized
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- 流属性/单位：Mass / kg
- 数量规则：实测包装质量，或将件数按记录的质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 声明包装门点的谷物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
##### 废物流
**储存损失或破损谷物（`storage_loss_or_damaged_grain`）**
包含储存时，按批次、期间、质量、损坏类别和去向记录储存损失。
- 选定流：Rejects `e6d6aa78-105e-4acc-a84b-46f68765a1cc`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：库存核对或处置质量实测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 进入储存的谷物
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_and_handoff_records`
##### 基本流
没有确认身份和方法时，不增加储存基本流。
#### 输出
##### 产品流
###### 声明门点的非播种用黑麦谷物（`declared_gate_rye_grain`）
当所选门点包含储存或下游交接时，声明门点输出即为参考产品。
- 选定流：调质黑麦籽粒 `ac1c42aa-ab59-4015-8237-08031c7f4a98`
- Binding: fixed
- 流属性/单位：Mass / kg
- 数量规则：声明门点的实测谷物质量，并保留水分基准和质量描述
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：定量参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_gate_output_records`
##### 废物流
未在储存损失行中记录的破损或拒收物料，也必须以自己的去向记录。
##### 基本流
能源相关排放只有在能源记录和声明因子均确认时才计算。
## 7. 分配与联产品处理
| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoidance` | 作物、收获和处理过程 | 首先在记录支持时，将作物作业、收获、干燥、清理、分级、储存和废物处理拆分为独立过程，避免分配。 | `iso-14044-2006` |
| `allocation_grain_and_residue` | 黑麦谷物和移出的秸秆或残余物 | 根据声明去向处理留在田间的残余物。若秸秆或其他残余物被移出或销售且不能拆分过程，使用明确声明的物理或经济分配方法，并披露敏感性。 | `iso-14044-2006`; `fao-rye-postharvest-operations-1999` |
| `allocation_screenings_and_rejects` | 筛下物、破损谷物和不合格物料 | 将合格谷物、筛下物、拒收物和损失作为不同输出记录并声明去向。没有明确返工或分配决定时，不得将拒收物料计入参考产品。 | `fao-rye-postharvest-operations-1999`; `usda-rye-standards-2020` |
| `allocation_substitution` | 残余物或副产品使用 | 只有当被替代产品、路线、市场和证据均已声明时才使用替代法；不得从产品标签或泛化的残余物名称推断替代信用。 | `iso-14044-2006` |
## 8. 前景数据采集、计算与质量规则
### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_input_records` | `rye_crop_production` | seed for sowing input | seed purchase or receiving record | lot; variety; supplier; source; treatment; mass; moisture basis; date; field | weighbridge, calibrated scale, invoice, or supplier record | kg | per seed lot | crop cycle | production field or farm | sum seed mass by field and crop lot | scale calibration, invoice, supplier record |
| `cp_fertilizer_input_records` | `rye_crop_production` | fertilizer inputs | purchase and application record | product; nutrient; product mass; nutrient mass; date; field; application method | invoice, nutrient analysis, farm log, or applicator record | kg product and kg nutrient | per application | crop cycle | production field or farm | sum by product and nutrient and normalize to declared output | invoice, nutrient analysis, application log |
| `cp_irrigation_records` | `rye_crop_production` | irrigation and withdrawal | meter or pumping record | source; meter; readings; volume; pumping energy; date; field | calibrated meter, pumping log, or invoice | m3, kg, and energy unit | per event or period | irrigation season | field and water source | sum by source and distinguish withdrawal from delivery | meter calibration, readings, invoice |
| `cp_field_energy_records` | `rye_crop_production` | field machinery fuel | field operation energy record | operation; machine; fuel or electricity type; quantity; field; date | fuel log, invoice, telematics, or meter | L, kg, MJ, or kWh | per field operation | crop cycle | production field or farm | sum by operation and normalize to selected gate output | invoice, machine log, telematics |
| `cp_crop_protection_records` | `rye_crop_production` | crop protection product | application record | product; active ingredient; formulation; mass; date; field; application method | spray log, product label, or applicator record | kg product or kg active ingredient | per application | crop cycle | production field or farm | sum by product or active substance and normalize to output | label, log, applicator record |
| `cp_land_and_output_records` | `rye_crop_production` | land, harvest, and outputs | field and harvest record | field; area; crop duration; harvest date; gross grain; residue; fate; moisture; quality | GIS or field record plus calibrated scale and dispatch records | ha, crop duration, kg, percent | per harvest and annual reconciliation | crop year | production field or farm | reconcile field outputs before normalization | field map, scale calibration, harvest ticket |
| `cp_harvest_and_output_records` | `harvest_and_field_delivery` | harvested grain and harvest energy | harvest and delivery record | field; machine; operation; grain mass; residue; loss; moisture; energy; date; hand-off | calibrated scale, harvest log, telematics, and delivery ticket | kg, percent, L, MJ, or kWh | per harvest event | crop cycle | field to gate hand-off | sum by lot and declared hand-off | scale ticket, machine record, delivery record |
| `cp_harvest_energy_records` | `harvest_and_field_delivery` | harvest energy | machine or contractor record | machine; fuel or electricity; quantity; harvested mass; period | contractor invoice, fuel log, telematics, or meter | kg, L, MJ, or kWh | per harvest event or period | crop cycle | harvest operation | allocate by harvested mass and declared operation | invoice, telematics, meter |
| `cp_residue_and_fate_records` | `harvest_and_field_delivery` | residue and loss fates | residue or loss record | stream; mass; moisture; fate; destination; date; field or lot | scale ticket, baling record, field log, disposal or transfer record | kg | per event or campaign | crop cycle | field and hand-off | sum by stream and fate; do not merge with accepted grain | scale ticket, fate record, field log |
| `cp_conditioning_energy_records` | `primary_conditioning` | drying, cleaning, and grading energy | facility energy record | line; energy type; quantity; period; batch; input and output mass | meter, utility bill, equipment log, or supplier record | kWh, MJ, kg, or L | per batch or campaign | conditioning campaign | facility and line | allocate to batch and normalize to accepted output | meter, bill, equipment log |
| `cp_conditioning_reject_records` | `primary_conditioning` | screenings, rejects, and dust | conditioning reject record | batch; stream; mass; moisture; quality; fate; dust collector mass | calibrated scale, reject log, dust record, or contractor record | kg and percent | per batch or campaign | conditioning campaign | facility and line | sum by stream and fate and reconcile to batch input | scale, reject log, fate record |
| `cp_conditioned_output_records` | `primary_conditioning` | conditioned reference output | conditioning output record | batch; accepted mass; moisture; grade; quality; cleaning status; gate | calibrated scale and quality test record | kg and percent | per batch | conditioning campaign | facility and declared gate | sum accepted batches at declared basis | scale calibration, quality test, dispatch record |
| `cp_storage_and_handoff_records` | `storage_and_declared_gate` | storage energy and loss | storage inventory record | lot; opening mass; closing mass; moisture; duration; energy; losses; fate | inventory reconciliation, meter, utility bill, or storage log | kg, percent, days, MJ, or kWh | per lot or storage period | declared storage duration | storage site | reconcile mass and allocate energy by lot and duration | inventory record, meter, bill |
| `cp_packaging_records` | `storage_and_declared_gate` | transport packaging | packaging issue or dispatch record | packaging type; item count; mass; capacity; lot; gate; date | packaging inventory, packing log, or supplier record | item and kg | per packaged lot | declared gate period | declared gate or packing site | sum packaging mass or convert item count using recorded capacity and mass | inventory record, packing log, supplier record |
| `cp_declared_gate_output_records` | `storage_and_declared_gate` | declared-gate output | dispatch or gate record | lot; gate; date; mass; moisture; quality; packaging or bulk state | weighbridge, scale, dispatch, or receiving record | kg and percent | per shipment or gate event | declared gate period | declared gate | sum output lots and preserve gate identity | scale ticket, dispatch record, quality record |
### 计算规则
| 规则编号 | 适用对象 | 公式或规则 | 输入 | 输出 | 来源 |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_declared_gate` | 所有前景流 | 记录的流数量 / 所选声明门点的合格非播种用黑麦谷物质量 × 参考数量 | 所有适用协议；声明门点输出 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `convert_moisture_basis` | 谷物质量比较 | 干物质质量 = 原始质量 × (1 - 水分比例)；保留原始值、转换值和实测水分基准 | 收获和处理质量；水分记录 | 可比质量基准 | `fao-rye-postharvest-operations-1999`; `usda-rye-standards-2020` |
| `calculate_water_withdrawal` | 灌溉 | 将按水源计量取水换算到声明单位并按所选门点输出归一化；单独报告输送量和消耗量 | `cp_irrigation_records`; `cp_declared_gate_output_records` | 每个参考输出的取水量 | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_n2o` | 肥料氮和直接 N₂O | 对已核算氮投入应用所选 IPCC 层级和因子，适用时将 N₂O-N 转换为 N₂O，并披露因子选择 | `cp_fertilizer_input_records`; 所选方法因子 | 每个参考输出的直接土壤 N₂O | `ipcc-2019-managed-soils-n2o` |
| `reconcile_harvest_outputs` | 收获和田间交接 | 收获谷物 + 移出的残余物 + 实测损失 + 田间返回或未计量剩余 = 同一水分基准下的声明收获投入；解释剩余项 | `cp_land_and_output_records`; `cp_harvest_and_output_records`; `cp_residue_and_fate_records` | 质量平衡核对 | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | 初级处理 | 处理后合格谷物 + 筛下物 + 拒收物 + 粉尘或实测损失 = 同一水分基准下的处理投入；解释剩余项 | `cp_conditioning_reject_records`; `cp_conditioned_output_records` | 处理收率和损失核对 | `fao-rye-postharvest-operations-1999`; `mass-balance-identity` |
| `allocate_storage_energy` | 储存 | 按记录的批次质量和声明储存时长分配储存能源；有专用计量时避免分配 | `cp_storage_and_handoff_records` | 每个参考输出的储存能源 | `iso-14044-2006` |
### 数据质量要求
| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_non_seed_identity` | 参考产品 | 声明参考产品为非播种用黑麦谷物，并写明食品、饲料或工业用途；不得用种子质量声明替代。 | 产品元数据、合同、质量记录或发运记录 |
| `dq_gate_and_moisture` | 参考流和输出 | 对每个核对的输出记录所选门点、原始质量、水分基准和干物质转换。 | 计量、水分检测、发运和计算记录 |
| `dq_temporal_coverage` | 作物生产和收获 | 覆盖声明的作物周期和收获年度；披露数据是单年度、多年度平均还是情景。 | 有日期的农场、收获和投入记录 |
| `dq_input_completeness` | 田间和处理库存 | 对播种用种子、肥料、灌溉、植保、土地、田间能源、收获能源、干燥能源、储存能源和直接排放给出量化值或说明零值/排除。 | 台账、发票、日志、计量记录和方法声明 |
| `dq_output_fate` | 残余物、筛下物、拒收物和损失 | 记录每个非参考输出、质量基准、边界跨越、去向和处置；未解决的去向会阻止最终化。 | 计量记录、田间日志、处置、转移或销售记录 |
| `dq_quality_descriptor` | 谷物身份 | 记录与终端用途相关的质量或等级描述，但不得把它们扩展为普遍适用的验收阈值。 | 官方等级检测、买方规格或本地质量记录 |
| `dq_uuid_identity` | 流和基本流引用 | 每个固定 UUID 都必须可追溯到确认的 identity 记录；没有固定 UUID 的行使用兼容的参数化 Flow Set，或保持无 binding，不得静默替换为通用 UUID。 | 本地 identity 记录和 review metadata |
## 9. 验证规则
| 规则编号 | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_non_seed_boundary` | 产品身份 | 确认参考产品为非播种用黑麦谷物，并确认播种用种子、面粉、麦芽、淀粉、乙醇和下游产品已排除或单独建模。 | `usda-rye-standards-2020`; `fao-rye-postharvest-operations-1999` |
| `validation_reference_flow` | 参考流 | 确认一个 1 kg 参考流使用所选 Rye 身份、质量属性、kg 单位，并声明终端用途、水分基准、质量描述、地理范围、作物年度和门点。 | `usda-rye-standards-2020` |
| `validation_process_completeness` | 过程图和库存 | 确认作物生产、收获以及适用的初级处理或储存过程已经纳入，或已根据声明门点明确排除。 | `fao-grain-postharvest-systems-1998`; `fao-rye-postharvest-operations-1999` |
| `validation_nitrogen` | 肥料和排放 | 确认产品质量与 kg N 区分，因子选择已声明，N₂O-N 转换透明，其他氮路径已处理或说明理由。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | 灌溉 | 确认取水、输送灌溉、消耗和水足迹结果已区分且没有重复计算。 | `fao-crop-evapotranspiration-56` |
| `validation_moisture_and_mass_balance` | 收获和处理 | 确认质量核对使用共同水分基准，且合格谷物、残余物、筛下物、拒收物和损失均有声明去向。 | `fao-rye-postharvest-operations-1999`; `mass-balance-identity` |
| `validation_allocation` | 联产品和残余物 | 确认先考虑拆分，分配方法已声明，替代法有被替代产品证据，且重要时报告敏感性。 | `iso-14044-2006` |
| `validation_uuid_review` | identity 引用 | 确认每个固定 UUID 和受纳环境；每个参数化 Flow Set 必须在前景数据生成时解析后，才能创建最终 TIDAS exchange。 |  |
## 10. 发布数据集画像
| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当非播种用途、地理范围、作物年度、水分基准、质量描述、生产路线和门点与元数据一致时，用于下游食品、饲料、工业、谷物交易或 LCA 数据构建 |
| excluded_use | 播种用黑麦种子；面粉；麦芽；淀粉；乙醇；加工食品或饲料；门点不兼容或物料损失/去向未解决的数据集 |
| required_metadata | 参考流；非播种用途；重要时的黑麦类别或品种；地理范围；作物周期和年度；播种用种子来源；灌溉状态；肥料和植保记录；水分基准；质量描述；收获和处理路线；声明门点；残余物和拒收物去向；分配；质量披露 |
| required_quality_disclosure | 原始记录覆盖、时间和地理代表性、水分和质量平衡处理、所选因子、身份覆盖和未映射流披露、遗漏投入、分配和敏感性、module checklist 结果 |
| update_trigger | 路线、门点、水分或质量表达、终端用途范围、施肥或植保实践、灌溉、收获或处理技术、储存时长、因子来源、identity 绑定或证据状态发生重大变化 |
## 11. 数据源
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-rye-postharvest-operations-1999` | official_guidance | FAO INPhO，*WHEAT: Post-harvest Operations*，<https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_WHEAT.pdf> | 黑麦收获、干燥、清理、储存、损失和初级处理过程分解 |
| `fao-grain-postharvest-systems-1998` | official_guidance | FAO，*Agricultural engineering in development — Grain and post-harvest systems*，<https://www.fao.org/4/t0522e/T0522E03.htm> | 收获到储存的顺序和声明的收获后交接 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56，*Crop evapotranspiration*，<https://www.fao.org/4/X0490E/X0490E00.htm> | 灌溉和作物用水数据采集与水量区分 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement，Volume 4，Chapter 11，<https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤 N₂O 方法选择、活动数据和因子披露 |
| `usda-rye-standards-2020` | official_guidance | USDA Agricultural Marketing Service，*United States Standards for Rye*，<https://www.ams.usda.gov/sites/default/files/media/RyeStandards.pdf> | 黑麦谷物质量、水分和等级描述，以及与种子语义区分 |
| `iso-14044-2006` | standard | ISO 14044:2006，*Environmental management — Life cycle assessment — Requirements and guidelines*，<https://www.iso.org/standard/38498.html> | 分配层级、LCA 范围、清单、报告和数据质量披露 |
| `mass-balance-identity` | method_factor | 将质量守恒作为 PCR 计算恒等式。 | 收获、处理、储存和输出核对 |
