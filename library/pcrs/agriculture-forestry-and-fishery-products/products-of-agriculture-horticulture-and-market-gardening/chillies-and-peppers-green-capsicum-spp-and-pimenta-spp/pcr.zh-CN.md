---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-green-capsicum-spp-and-pimenta-spp
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 绿色辣椒和甜椒（Capsicum 属和 Pimenta 属）

## 1. 范围与适用性

本 PCR 覆盖 Capsicum 属和 Pimenta 属新鲜绿色辣椒、甜椒的商业生产，从直播或移栽建植开始，经作物管理、灌溉、养分和作物保护投入、采收、分级、可选清洗和冷却、初级包装，到约定农场大门或包装场大门交接。露地和保护地路线均可纳入，但必须声明生产路线、果实类型和作物周期。种子、育苗、成熟红果或其他成熟果、干辣椒、酱料、腌制品、冷冻或烹饪产品、零售、消费者储存和消费均排除在外。只有在约定大门之前发生的初级包装、清洗、冷却和外购运输才纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chillies-and-peppers-green-capsicum-spp-and-pimenta-spp |
| classification_refs | CPC 3.0:01231 Chillies and peppers, green (Capsicum spp. and Pimenta spp.) |
| covered_products | 在约定未成熟绿色市场状态采收、并在农场大门或包装场大门交付的新鲜未加工绿色辣椒和甜椒 |
| excluded_products | 种子和育苗材料、完全成熟红果或其他成熟果、干辣椒、酱料、腌制品、冷冻品、熟制品和其他加工产品，以及零售和消费 |
| representative_product | 符合约定品种、成熟度、大小、硬度、洁净度、等级、修整和包装要求的可销售绿色 Capsicum 或 Pimenta 果实 |
| production_route | 露地或保护地直播、移栽的一年生作物，包含灌溉、养分、杂草和病虫害管理、多轮果实采收、分级、可选清洗或冷却及初级包装 |
| market_state | 约定农场或包装场大门处，以散装、周转箱、纸箱或其他声明的初级包装状态交付的新鲜未加工绿色果实 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 约定农场大门或包装场大门处的可销售新鲜绿色辣椒和甜椒 |
| How much | 1,000 kg |
| How well | 新鲜、未加工，声明 Capsicum 或 Pimenta 的物种或品种组、未成熟绿色状态、果实大小、硬度、洁净度、等级、修整、清洗和冷却状态以及包装状态 |
| How long or cycle | 一个声明的一年生作物周期，包括归属于该作物和约定大门的全部采收轮次 |
| reference_flow_link | green_chillies_peppers_farm_gate_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Fresh green chillies and peppers, production mix, at farm gate `f4da74e5-e255-4d9b-aa07-27796e120b87` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产地理位置；露地或保护地路线；Capsicum 或 Pimenta 物种或品种组；种子或移栽建植；种植日期；作物周期和采收轮次；约定大门；未成熟绿色状态；果实大小、硬度和等级；灌溉来源与方式；养分产品与养分基准；作物保护方案；清洗和冷却状态；包装状态；残余物和拒收物去向 |
| Binding | `fixed` |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_green_pepper_mass` | 可销售果实和采收记录 | Mass | kg | 将总采收果实、可销售绿色果实、不可销售果实、修整物、异物和田间残余物作为分开的测量或计算数量。 |
| `crop_cycle_normalization` | 田间、保护地和采收记录 | Area and mass | ha and kg | 按田块、畦或保护地单元记录投入和采收轮次，并归一化到同一声明年度作物周期的可销售产出。 |
| `nutrient_product_basis` | 肥料、粪肥、堆肥和其他养分投入 | Mass of product and declared nutrient | kg product, kg N, kg P2O5, or kg K2O | 保留产品质量；只有依据产品标签、供应商规格、养分计划或实验室结果时，才换算为养分基准。 |
| `water_volume_basis` | 作物灌溉和采后清洗 | Volume | m3 | 使用计量记录或有文件依据的水量平衡，分别记录作物灌溉水和采后清洗水。 |
| `energy_service_basis` | 抽水、保护地设备、冷却和包装 | Energy and fuel | kWh and L | 按设备或作业记录电力和燃料，保留计量或发票基准，并将共享服务分配到声明作物周期和大门产出。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收绿色辣椒或甜椒种子或移栽苗的已整备田块、畦或保护地单元，并披露既有土地利用和排除的基础设施工程 |
| starting_condition_role | 声明的一年生作物周期起点 |
| product_classification_scope | CPC 3.0:01231 绿色辣椒和甜椒，从生产至约定农场大门或包装场大门 |
| recursive_input_rule | 外购种子和移栽苗作为上游产品投入只链接一次；其育苗或制种过程不在本 PCR 内，除非另有上游数据集。 |
| upstream_dataset_requirement | 使用时应为种子或移栽苗、肥料和改良剂、作物保护产品、灌溉水、能源、包装以及外购运输或处理服务提供上游数据集。 |
| disclosure | 声明地理位置、露地或保护地路线、物种或品种组、建植材料、作物日期、采收轮次、产量和拒收物核对、灌溉来源与方式、养分基准、作物保护方案、清洗和冷却、包装、残余物去向及大门位置。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和作物管理 | 纳入产生声明新鲜绿色果实的田块或保护地整备、建植、作物管理、作物周期投入和采收准备；披露既有土地利用，排除无关基础设施建设。 | `fao-56-crop-evapotranspiration-1998`; `usda-nrcs-nutrient-management-590` |
| `boundary_gate_conditioning` | 采收和初级处理 | 以前景系统止于约定农场大门或包装场大门；清切、分级、修整、清洗、冷却和初级包装若发生在大门前则纳入。 | `codex-fresh-fruits-vegetables-2003`; `fao-good-hygiene-fresh-produce-2003` |
| `boundary_soil_nitrogen` | 养分投入、作物残余物和管理土壤 | 使用一种声明的方法，根据记录的养分投入和残余物去向估计适用的直接和间接氮排放；避免同一路径重复计算。 | `ipcc-2019-refinement-nitrogen` |
| `boundary_residue_fate` | 田间残余物、拒收物和修整物 | 分别记录还田、堆肥、饲料利用、处理或处置；没有证明生产性用途的材料仍作为残余物或废物流。 | `codex-fresh-fruits-vegetables-2003`; `fao-good-hygiene-fresh-produce-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 绿色辣椒和甜椒作物建植 | required | 每次有记录的直播或移栽事件 | 前景作物建植 | 已建植田块、畦或保护地单元 |
| `crop_management` | 绿色辣椒和甜椒作物管理 | required | 每个有记录的一年生作物周期 | 前景受管理的生物生产 | 管理面积和作物周期采收量 |
| `harvest_and_gate_preparation` | 绿色辣椒和甜椒采收及大门准备 | required | 每次有记录的采收活动和约定大门 | 前景采收、处理、包装和大门交接 | 1,000 kg 可销售新鲜绿色果实 |

### 过程：绿色辣椒和甜椒作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 种子或移栽材料（`planting_material_input`）

记录进入声明田块或保护地单元的种子、穴盘苗或移栽苗，并标明材料类型、供应商、批次和种植数量。

- 选定流：绿色辣椒或甜椒种子和移栽材料
- 流属性/单位：Number of viable units or mass / seed, plant, or kg
- 数量规则：记录采购批次数量和每个田块、畦或保护地单元实际种植的有效数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`usda-nrcs-nutrient-management-590`
- 数量范围：建植材料数量筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：8,000
  - 上限：50,000
  - 单位：有效植株/ha
  - 基准：等待场址记录替换的露地和保护地建植宽范围初筛
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`crop_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`usda-nrcs-nutrient-management-590`
- 数量范围：建植期有机改良剂筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：0
  - 上限：20,000
  - 单位：kg product/ha
  - 基准：等待田间记录和养分计划替换的宽范围改良剂筛选
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：建植期氮肥筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kg N/ha
  - 基准：等待养分计划和土壤检测替换的宽范围初筛
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 绿色辣椒和甜椒生产占用的土地（`land_occupation_establishment`）

记录作物建植期间占用的田块或保护地面积，并归属于声明作物周期。

- 选定流：一年生作物生产的土地占用
- 流属性/单位：Area-time / m2*a
- 数量规则：实测耕作面积乘以声明建植期，并换算为要求的面积时间单位。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_area_records`
- 来源：`fao-56-crop-evapotranspiration-1998`

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：绿色辣椒和甜椒作物管理（`crop_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`usda-nrcs-nutrient-management-590`
- 数量范围：作物周期氮肥筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：350
  - 单位：kg N/ha
  - 基准：等待场址养分记录替换的宽范围初筛
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：作物周期磷肥筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg P2O5/ha
  - 基准：等待土壤检测和养分计划记录替换的宽范围初筛
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：作物周期钾肥筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg K2O/ha
  - 基准：等待土壤检测和养分计划记录替换的宽范围初筛
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物管理期灌溉水（`irrigation_water_input`）

记录输送到田块或保护地单元的作物灌溉水，并与采后清洗水分开。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：对所代表作物周期的计量、供水或有文件依据的水量平衡记录求和。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-56-crop-evapotranspiration-1998`; `usda-nrcs-irrigation-water-management-449`
- 数量范围：灌溉水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：500
  - 上限：12,000
  - 单位：m3/ha per crop cycle
  - 基准：等待实测供水记录替换的露地和保护地宽范围初筛
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物管理期保护产品（`crop_protection_input`）

记录施用于所代表田块或保护地单元的每一种农药、生物防治产品、助剂或其他作物保护投入。

- 选定流：作物保护产品
- 流属性/单位：Mass or volume / kg product or L product
- 数量规则：根据喷施或处理记录记录产品名称、剂型、有效成分、施用日期、施用面积和产品数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`codex-fresh-fruits-vegetables-2003`
- 数量范围：作物保护产品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg or L product/ha per crop cycle
  - 基准：等待受监管施用记录替换的宽范围产品使用初筛
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉和保护地管理用电（`management_electricity_input`）

记录在声明边界内发生的灌溉抽水、通风、照明、施肥灌溉或其他作物管理设备用电。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：使用计量或发票记录；按有文件依据的运行时间或产出分配共享设备用电。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`fao-56-crop-evapotranspiration-1998`
- 数量范围：作物管理用电筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,500
  - 单位：kWh/ha per crop cycle
  - 基准：等待计量记录替换的抽水和保护地设备宽范围初筛
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械燃料（`management_fuel_input`）

记录分配到所代表作物周期的拖拉机、喷雾机、耕作设备和田间支持车辆使用的柴油或其他燃料。

- 选定流：移动机械燃料
- 流属性/单位：Energy or volume / MJ or L
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`mobile-machinery-fuel`
- 数量规则：汇总领用、发票或设备小时记录，并将共享机械分配到所代表作物周期。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`usda-nrcs-nutrient-management-590`
- 数量范围：田间燃料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：L/ha per crop cycle
  - 基准：等待燃料和机械记录替换的田间作业宽范围初筛
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 作物管理期土地占用（`land_occupation_management`）

记录一年生绿色辣椒和甜椒在管理期占用的面积时间。

- 选定流：一年生作物生产的土地占用
- 流属性/单位：Area-time / m2*a
- 数量规则：将实测耕作面积和作物占用期换算为面积时间，并归一化到可销售产出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_area_records`
- 来源：`fao-56-crop-evapotranspiration-1998`

#### 输出

##### 产品流

##### 废物流

###### 绿色辣椒和甜椒采收后的田间作物残余物（`field_crop_residue`）

记录代表性作物周期结束后留在田间或移出田间的茎、叶、根和不可销售果实。

- 选定流：绿色辣椒和甜椒作物残余物
- 流属性/单位：Mass / kg fresh matter
- 数量规则：测量或计算残余物质量，并声明还田、堆肥、饲料利用、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`codex-fresh-fruits-vegetables-2003`
- 数量范围：田间残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30,000
  - 单位：kg fresh matter/ha per crop cycle
  - 基准：等待田间测量或有文件依据的质量平衡替换的宽范围残余物核对
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 管理土壤产生的一氧化二氮（`soil_nitrous_oxide_emission`）

仅根据声明的氮投入、残余物处理和选定排放方法计算直接和间接土壤一氧化二氮。

- 选定流：管理农业土壤向空气排放的一氧化二氮
- 流属性/单位：Mass / kg N2O
- 数量规则：将声明土壤排放方法应用于有文件依据的氮投入和残余物去向，不重复计算同一路径。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emission_calculation_records`
- 来源：`ipcc-2019-refinement-nitrogen`

###### 管理土壤硝酸盐淋失（`soil_nitrate_leaching`）

当所选养分和水量平衡方法要求时，计算硝酸盐淋失或径流，并将方法参数保留在数据集中。

- 选定流：管理农业土壤向土壤或水体排放的硝酸盐
- 流属性/单位：Mass / kg NO3-N
- 数量规则：将一种有文件依据的淋失或径流方法应用于氮肥施用、灌溉、土壤和残余物条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emission_calculation_records`
- 来源：`ipcc-2019-refinement-nitrogen`

###### 管理土壤产生的氨（`soil_ammonia_emission`）

当选定的氮排放方法和记录的肥料及改良剂属性支持时，计算氨挥发。

- 选定流：管理农业土壤向空气排放的氨
- 流属性/单位：Mass / kg NH3-N
- 数量规则：将声明方法应用于有文件依据的氮形态、施用时间、混入情况和环境条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emission_calculation_records`
- 来源：`ipcc-2019-refinement-nitrogen`

###### 田间机械产生的氮氧化物（`field_nox_emission`）

使用一种声明的燃料排放方法，根据燃料使用记录计算氮氧化物排放。

- 选定流：田间机械向空气排放的氮氧化物
- 流属性/单位：Mass / kg NOx
- 数量规则：将记录的燃料或发动机活动乘以选定排放因子，并保留因子来源和单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 归属于同一作物周期的可销售新鲜绿色果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emission_calculation_records`
- 来源：`ipcc-2019-refinement-nitrogen`

### 过程：绿色辣椒和甜椒采收及大门准备（`harvest_and_gate_preparation`）

#### 输入

##### 产品流

###### 大门准备清洗水（`gate_wash_water_input`）

当清洗或其他大门准备作业发生在约定大门之前时，记录其用水，并与作物灌溉水分开。

- 选定流：清洗和大门准备过程水
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量规则：汇总清洗和大门准备的计量或批次记录，并分配到可销售产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：约定大门处每 1,000 kg 可销售新鲜绿色果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_preparation_records`
- 来源：`fao-good-hygiene-fresh-produce-2003`
- 数量范围：大门准备用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：8
  - 单位：m3/1,000 kg marketable fruit
  - 基准：等待批次记录替换的宽范围清洗和准备初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷却、分级和包装用电（`gate_electricity_input`）

记录约定大门前冷却、分级、分选和包装作业用电。

- 选定流：电力供应
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：使用计量或发票记录，并按运行时间、生产线吞吐量或有文件依据的产出分配共享包装场用电。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：约定大门处每 1,000 kg 可销售新鲜绿色果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_gate_energy_records`
- 来源：`codex-fresh-fruits-vegetables-2003`

###### 初级周转箱或容器包装（`primary_container_packaging`）

记录在约定农场大门或包装场大门之前跨越边界的可重复使用或一次性初级容器。

- 选定流：新鲜农产品刚性容器包装
- 流属性/单位：Mass / kg packaging
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`rigid-container-packaging`
- 数量规则：按类型记录包装材料质量、重复使用次数、供应商和损耗或返回路径。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：约定大门处每 1,000 kg 可销售新鲜绿色果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-fresh-fruits-vegetables-2003`
- 数量范围：初级容器筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg packaging/1,000 kg fruit
  - 基准：等待包装记录和重复使用核算替换的宽范围容器材料初筛
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 周转箱、托盘或其他搬运包装（`handling_packaging`）

记录约定大门前使用的周转箱、托盘和搬运包装，包括是否重复使用以及重复使用如何分配。

- 选定流：托盘和周转箱包装服务
- 流属性/单位：Mass / kg packaging
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`pallet-and-crate-packaging`
- 数量规则：按有文件依据的运输次数、服务寿命、返还率和承载的可销售果实分配包装负担。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：约定大门处每 1,000 kg 可销售新鲜绿色果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-fresh-fruits-vegetables-2003`

###### 运至约定大门的公路货运（`pre_gate_transport_service`）

只有在约定农场大门或包装场大门之前发生外购运输时才记录，并保留起点、终点、载重和距离。

- 选定流：公路货运服务
- 流属性/单位：Transport service / tkm
- 绑定模式：`parameterized`
- 流集：`flow-set.transport-service`
- 流集版本：`0.2.0`
- 流集分组：`road-freight-transport`
- 数量规则：按声明的运输约定，将运输质量乘以有文件依据的单程或往返距离。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：约定大门处每 1,000 kg 可销售新鲜绿色果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 来源：`codex-fresh-fruits-vegetables-2003`

##### 废物流

###### 分级和采收拒收物（`gate_reject_waste`）

分别记录不可销售绿色果实、损伤果实、修整物和分级拒收物，并披露其去向。

- 选定流：不可销售绿色辣椒和甜椒果实及分级拒收物
- 流属性/单位：Mass / kg fresh matter
- 数量规则：按质量核对进入的采收果实、可销售产出、拒收物、修整物和任何过程损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：约定大门处每 1,000 kg 可销售新鲜绿色果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_reject_records`
- 来源：`codex-fresh-fruits-vegetables-2003`
- 数量范围：大门拒收物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：35
  - 单位：采收果实质量百分比
  - 基准：等待批次记录替换的宽范围分级和采收损失核对
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗和大门准备废水（`gate_wastewater`）

当清洗或大门准备废水跨越声明边界时，记录废水并标明处理或排放路径。

- 选定流：绿色辣椒和甜椒清洗废水
- 流属性/单位：Volume or mass / m3 or kg
- 数量规则：记录废水体积或质量，并链接清洗批次及处理或排放记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：约定大门处每 1,000 kg 可销售新鲜绿色果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_preparation_records`
- 来源：`fao-good-hygiene-fresh-produce-2003`

##### 基本流

#### 输出

##### 产品流

###### 可销售新鲜绿色辣椒和甜椒（`marketable_green_fruit_output`）

记录通过声明成熟度、质量和大门要求的可销售绿色果实，作为 PCR 参考产出。

- 选定流：Fresh green chillies and peppers, production mix, at farm gate
- 流属性/单位：Mass / kg fresh fruit
- 数量规则：在约定大门称量可销售产出，并与采收、拒收物和修整记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 可销售新鲜绿色果实的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_output_records`
- 来源：`codex-fresh-fruits-vegetables-2003`

##### 废物流

###### 最终绿色果实和修整损失（`final_reject_loss`）

记录不属于可销售参考产出且需要明确去向的最终拒收果实、修整物和异物。

- 选定流：最终绿色辣椒和甜椒拒收物及修整损失
- 流属性/单位：Mass / kg fresh matter
- 数量规则：关闭采收果实、可销售产出、拒收废物、修整物和实测异物之间的质量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：约定大门处每 1,000 kg 可销售新鲜绿色果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_gate_reject_records`
- 来源：`codex-fresh-fruits-vegetables-2003`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_crop_cycle` | 田块或保护地单元之间共享的投入和排放 | 使用实测面积、运行时间或质量产出，将共享投入和排放分配到所代表作物周期；记录选定驱动因子，不得按未记录的假设分配。 | `fao-56-crop-evapotranspiration-1998` |
| `allocation_marketable_and_reject_outputs` | 采收、分级和大门准备 | 将可销售绿色果实、不可销售果实、修整物和残余物作为分开的产出。只有拒收物有文件依据的生产性用途时才应用声明的分配或处理规则，否则保留为废物或残余物。 | `codex-fresh-fruits-vegetables-2003` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | planting_material_input | 种子或移栽批次及建植记录 | material type, cultivar, supplier, lot, viable quantity, planted area, planting date | 收集供应商文件和田间建植日志 | seed, plant, or kg | 每次建植事件 | 完整作物周期 | 每个田块、畦或保护地单元 | 按作物周期和面积汇总种植数量 | 批次文件和田间日志核对 |
| `cp_nutrient_records` | `crop_establishment`, `crop_management` | nutrient inputs | 养分施用记录 | product, formulation, nutrient concentration, application date, area, amount, method | 收集发票、施用日志、标签、养分计划和土壤检测记录 | kg product, kg N, kg P2O5, or kg K2O | 每次施用 | 完整作物周期 | 每个田块或保护地单元 | 换算到养分基准并按周期求和 | 标签或供应商规格及施用日志检查 |
| `cp_field_area_records` | `crop_establishment`, `crop_management` | land occupation | 田块或保护地单元记录 | area, location, crop dates, protected-unit identity, occupancy period | 勘测或农场记录审查 | ha and dates | 每个作物周期 | 完整作物周期 | 每个田块、畦或保护地单元 | 计算面积时间并归一化到产出 | 面积图和日期记录 |
| `cp_irrigation_records` | `crop_management` | irrigation_water_input | 供水记录 | source, meter, delivery volume, date, irrigation method, field, losses | 收集计量、抽水、供水或水量平衡记录 | m3 | 每次灌溉或月度总量 | 完整作物周期 | 每个田块或保护地单元 | 汇总供水量并核对来源记录 | 计量读数或有文件依据的水量平衡 |
| `cp_crop_protection_records` | `crop_management` | crop_protection_input | 喷施或处理记录 | product, formulation, active ingredient, amount, area, date, method, target | 收集受监管施用日志和产品标签 | kg or L product | 每次施用 | 完整作物周期 | 每个田块或保护地单元 | 按产品和有效成分求和 | 施用记录和标签检查 |
| `cp_energy_records` | `crop_management` | management_fuel_input and management_electricity_input | 计量、发票、燃料领用或设备小时记录 | fuel or electricity, equipment, date, operating hours, field or line, allocation driver | 收集计量、发票、燃料日志和运行记录 | kWh, L, or MJ | 每次事件或月度总量 | 完整作物周期 | 每个田块、保护地单元或包装线 | 按有文件依据的驱动因子分配共享服务 | 计量、发票或运行日志核对 |
| `cp_emission_calculation_records` | `crop_management` | soil and machinery elementary flows | 计算工作表 | nutrient inputs, residue fate, fuel, factor, method, conversion, result | 使用一种声明方法根据采集记录计算 | kg substance | 每个作物周期 | 完整作物周期 | 每个田块和设备组 | 使用一种方法求和且不重复路径 | 因子来源、公式和输入检查 |
| `cp_residue_records` | `crop_management` | field_crop_residue | 残余物和去向记录 | residue type, mass, date, field, destination, treatment or return method | 称量或以有文件依据的质量平衡估计 | kg fresh matter | 每个作物周期 | 完整作物周期 | 每个田块或保护地单元 | 分开还田、利用、处理和处置 | 称量凭证或质量平衡检查 |
| `cp_gate_preparation_records` | `harvest_and_gate_preparation` | gate_wash_water_input and gate_wastewater | 清洗批次和公用工程记录 | batch, water volume, source, date, product mass, wastewater route, treatment | 收集批次表、计量和处理记录 | m3 or kg | 每个批次 | 完整采收活动 | 每条包装线或大门 | 按活动汇总并归一化到可销售产出 | 批次核对和处理记录 |
| `cp_gate_energy_records` | `harvest_and_gate_preparation` | gate_electricity_input | 包装场公用工程记录 | line, meter, operating hours, throughput, date, allocation driver | 收集计量或发票及生产线吞吐量 | kWh | 每批或月度总量 | 完整采收活动 | 每条包装线 | 按有文件依据的吞吐量或小时分配共享能源 | 计量和吞吐量核对 |
| `cp_packaging_records` | `harvest_and_gate_preparation` | primary_container_packaging and handling_packaging | 包装领用和返还记录 | packaging type, material, mass, quantity, reuse count, loss, return route | 收集供应商、领用和返还记录 | kg packaging and trips | 每次采收活动 | 完整采收活动 | 每个包装地点 | 按有文件依据的服务次数分配重复使用包装 | 供应商规格和返还日志 |
| `cp_transport_records` | `harvest_and_gate_preparation` | pre_gate_transport_service | 运输记录 | origin, destination, mass, distance, vehicle, load, empty return | 收集托运单和承运人记录 | tkm | 每次运输 | 完整采收活动 | 声明的大门前路线 | 将质量乘距离后求和 | 托运单和承运人记录 |
| `cp_gate_output_records` | `harvest_and_gate_preparation` | marketable_green_fruit_output | 地磅、包装或发运记录 | batch, harvest date, mass, maturity, grade, gate, packaging state | 称量并核对可销售产出 | kg fresh fruit | 每次采收或发运批次 | 完整采收活动 | 每个田块和大门 | 汇总合格批次并归一化到 1,000 kg | 秤量记录和批次核对 |
| `cp_gate_reject_records` | `harvest_and_gate_preparation` | gate_reject_waste and final_reject_loss | 分级和拒收记录 | incoming mass, marketable mass, reject type, trimming, destination, date | 称量或根据批次质量平衡计算 | kg fresh matter | 每个批次 | 完整采收活动 | 每条分级或包装线 | 核对采收、可销售、拒收和修整质量 | 秤量记录和质量平衡检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_product_nutrient_mass` | 养分投入行 | 产品质量乘以声明养分浓度；同时保留产品和养分基准。 | product mass, N/P2O5/K2O concentration | kg nutrient | `usda-nrcs-nutrient-management-590` |
| `calc_crop_cycle_normalization` | 所有作物周期行 | 汇总归属于同一田块或保护地单元及作物周期的记录，除以可销售绿色果实产量，再缩放到 1,000 kg。 | input or emission record, crop-cycle output | normalized PCR amount | `fao-56-crop-evapotranspiration-1998` |
| `calc_soil_nitrogen_emissions` | 土壤氮基本流 | 对有文件依据的氮投入和残余物去向应用一种声明的 IPCC 兼容方法；同一路径不得合并替代方法。 | nutrient records, residue records, method factors | kg N2O-N, NO3-N, or NH3-N | `ipcc-2019-refinement-nitrogen` |
| `calc_energy_allocation` | 共享电力和燃料 | 按计量、运行时间、吞吐量或另一有文件依据的驱动因子分配共享能源或燃料，并披露所选驱动因子。 | utility or fuel total, allocation driver | crop-cycle energy or fuel | `fao-56-crop-evapotranspiration-1998` |
| `calc_mass_balance` | 采收、分级和大门产出 | 采收质量应等于可销售产出、拒收物、修整物、残余物和实测损失之和，且在声明容差内。 | harvest mass, marketable mass, reject mass, trim, loss | reconciliation result | `codex-fresh-fruits-vegetables-2003` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_reference_identity` | 参考流和可销售产出 | 声明物种或品种组、未成熟绿色市场状态和大门及必需限定信息；最终 TIDAS 数据集发布前解析产品 UUID。 | 参考流元数据、批次规格和后续身份核验 |
| `quality_temporal_coverage` | 所有作物周期记录 | 覆盖完整年度作物周期及参考产出所代表的每一采收轮次。 | 作物日历、田间日志和采收记录 |
| `quality_spatial_coverage` | 田块、保护地单元和包装场记录 | 标识每个田块、畦、保护地单元和包装线；没有明确聚合规则时不得混合地点。 | 农场地图、单元登记和包装线记录 |
| `quality_mass_completeness` | 采收和大门准备 | 在相关情况下核对采收、可销售、拒收、修整、残余物和废水记录。 | 秤量记录、分级记录和质量平衡工作表 |
| `quality_nutrient_traceability` | 肥料和改良剂投入 | 为每次施用保留产品身份、养分浓度、施用日期、面积和数量。 | 标签、供应商规格、养分计划和施用日志 |
| `quality_method_disclosure` | 计算排放和分配服务 | 为计算值记录因子或方法、输入、换算、分配驱动因子以及不确定性或限制。 | 计算工作表和来源引用 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_qualifiers` | 参考流 | 若前景数据包缺少生产地理位置、路线、品种或物种组、未成熟绿色状态、作物周期、约定大门及采收或质量限定信息，则拒绝该数据包。 | `codex-fresh-fruits-vegetables-2003` |
| `validate_crop_cycle_completeness` | 过程清单 | 检查建植、管理、采收及所有代表性采收轮次是否均由同一作物周期的记录覆盖。 | `fao-56-crop-evapotranspiration-1998` |
| `validate_flow_binding_priority` | 所有流行 | 首先使用最窄的适用 Flow Set 分组；仅对核验后的未覆盖流使用 fixed UUID；否则保留未映射覆盖，不得为强行匹配而改变产品边界。 |  |
| `validate_nutrient_reconciliation` | 养分和土壤排放行 | 检查产品质量、养分浓度、养分数量、残余物去向和选定排放方法在不重复计算的情况下保持一致。 | `usda-nrcs-nutrient-management-590`; `ipcc-2019-refinement-nitrogen` |
| `validate_output_mass_balance` | 采收和大门准备 | 要求采收质量在声明容差内与可销售绿色果实、拒收物、修整物、残余物和记录损失核对一致。 | `codex-fresh-fruits-vegetables-2003` |
| `validate_gate_and_downstream_cutoff` | 边界和运输行 | 确认清洗、冷却、包装、处理和运输仅在声明大门之前发生时纳入，并排除下游零售和消费。 | `codex-fresh-fruits-vegetables-2003` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场或包装场大门处新鲜绿色辣椒和甜椒的二级前景数据集 |
| downstream_use | 可支持使用声明绿色果实参考流和边界的过程数据集、生命周期模型和比较研究 |
| allowed_use | 当地理位置、路线、品种组、作物周期、大门、分配和数据质量相容时，用于大门到大门或从摇篮到大门建模 |
| excluded_use | 红熟、干燥、加工、零售、消费或其他产品状态；不得用于保护地能源、清洗、拒收物去向或作物周期覆盖未声明的情况 |
| required_metadata | PCR id、CPC 映射、物种或品种组、生产地理位置、路线、作物日期、采收轮次、约定大门、参考质量基准、灌溉、养分基准、作物保护方案、包装、残余物和拒收物去向及 UUID 解析状态 |
| required_quality_disclosure | 时空覆盖、测量值和计算值区分、养分和排放方法、分配驱动因子、质量平衡结果、证据缺口流身份和已知数据缺口 |
| update_trigger | 作物路线、品种或成熟度规格、大门处理、Flow Set taxonomy、参考流身份、养分或排放方法或重要证据发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-56-crop-evapotranspiration-1998` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration, https://www.fao.org/4/X0490E/X0490E00.htm | 作物周期水量核算、田间占用背景和共享服务分配 |
| `usda-nrcs-nutrient-management-590` | official_guidance | USDA NRCS Conservation Practice Standard 590, Nutrient Management, https://www.nrcs.usda.gov/resources/guides-and-instructions/nutrient-management-590 | 养分产品基准、施用记录和养分质量要求 |
| `usda-nrcs-irrigation-water-management-449` | official_guidance | USDA NRCS Conservation Practice Standard 449, Irrigation Water Management, https://www.nrcs.usda.gov/resources/guides-and-instructions/irrigation-water-management-449 | 灌溉记录和水量平衡质量要求 |
| `ipcc-2019-refinement-nitrogen` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4 Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 直接和间接氮排放计算方法 |
| `codex-fresh-fruits-vegetables-2003` | standard | Codex Alimentarius, Code of Hygienic Practice for Fresh Fruits and Vegetables, CXC 53-2003, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | 新鲜农产品大门、质量、处理、拒收和质量平衡规则 |
| `fao-good-hygiene-fresh-produce-2003` | official_guidance | FAO and WHO guidance associated with the Codex Code of Hygienic Practice for Fresh Fruits and Vegetables, CXC 53-2003, https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ | 清洗、大门准备、废水和处理记录 |
