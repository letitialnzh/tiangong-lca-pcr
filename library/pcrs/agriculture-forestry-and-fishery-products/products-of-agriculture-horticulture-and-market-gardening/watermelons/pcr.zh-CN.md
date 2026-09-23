---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.watermelons
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 西瓜

## 1. 范围与适用性

本 PCR 覆盖从田地准备和播种或定植，到种植管理、采收、分级、可选清洗和农场大门交付的新鲜未加工西瓜商业生产。只要前景记录声明了生产路线，也覆盖露地和保护地种植。作为种植材料销售的西瓜种子或幼苗、加工或切开的西瓜、农场大门交付后的冷藏、配送、零售和消费均不在范围内。只有在作物残余物还田或作为声明的残余物或副产品离开农场时，残余物才继续留在系统边界内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.watermelons |
| classification_refs | CPC 3.0:01221 Watermelons |
| covered_products | 为农场大门销售生产的新鲜、完整、未加工西瓜 |
| excluded_products | 作为种植材料销售的西瓜种子或幼苗，以及加工、切开、榨汁、冷冻、干燥或其他转化的西瓜和农场大门后的物流 |
| representative_product | 按声明的大小和质量分级并在农场大门交付的可销售完整西瓜 |
| production_route | 一年生播种或定植西瓜种植、田间管理、采收、分级和农场大门准备 |
| market_state | 农场大门的新鲜完整产品，以散装或声明的初级包装交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场大门的可销售新鲜完整西瓜 |
| How much | 1,000 kg |
| How well | 符合声明的品种、成熟度、大小、外观、缺陷和可销售等级标准的完整、新鲜、未加工果实 |
| How long or cycle | 从定植到该作物最后一次采收的一个声明生产周期，并报告生产年份和采收窗口 |
| reference_flow_link | `watermelon_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Watermelons; production mix, at farm gate; fresh, unprocessed whole fruit `8979956d-8091-4c35-af7a-1ec80529bad3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 农场大门交付；生产地理位置；生产年份和作物周期；品种或种子类型；灌溉或雨养路线；果实成熟度和采收窗口；大小和等级标准；完整或受损状态；已清洗或未清洗；包装状态 |
| 绑定模式 | `fixed` |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收和农场大门的西瓜 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在归一化为参考流之前，分别记录总采收果实、可销售果实、淘汰果实和田间残余物的质量。 |
| `area_and_cycle_normalization` | 田间生产记录 | Area and mass | ha and kg | 分别记录每个地块和作物周期，再将所有投入和产出归一化为可销售农场大门西瓜。 |
| `nutrient_basis` | 肥料投入 | Mass | kg N, kg P2O5, or kg K2O | 只能依据有记录的养分浓度换算产品数量，并保留报告中的养分基准。 |
| `irrigation_volume` | 灌溉水 | Volume | m3 | 按地块和作物周期记录计量或有文件依据的灌溉供水；降雨与灌溉取水应分开。 |
| `seed_count_or_mass` | 种子或幼苗投入 | Number or mass | seed units or kg | 记录供应商声明的种子或幼苗数量和类型；没有有据可查的换算时，不得从数量推断种子质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备好、接收西瓜种子或幼苗的农业地块，并披露前期土地利用、田地准备和排除的播种前作业 |
| starting_condition_role | 声明的一年生西瓜作物周期起点 |
| product_classification_scope | CPC 3.0:01221 下的新鲜完整西瓜，至农场大门交付 |
| recursive_input_rule | 购入的西瓜种子或幼苗是独立的上游产品投入，只链接一次，不在本 PCR 内重新创建西瓜生产过程。 |
| upstream_dataset_requirement | 在使用时，要求种子或幼苗、肥料、土壤改良剂、作物保护产品、灌溉水、能源、田间机械服务和包装的上游数据集。 |
| disclosure | 声明生产地理位置、前期土地利用、作物周期日期、品种或种子类型、灌溉制度、养分基准、作物保护计划、田间排放方法、残余物去向、采收和分级方法、清洗和包装。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_annual_crop_cycle` | 从田地准备到最后一次采收 | 纳入声明的一年生作物周期的田地准备、播种或定植、种植管理和全部采收；共享田间作业应根据有文件依据的田间记录分配给报告作物。 | `fao-crop-production-framework`; `usda-watermelon-production-guidance` |
| `boundary_farm_gate` | 采收和准备 | 当可销售完整西瓜在农场大门转移时结束前景边界；仅在转移前发生时纳入农场内分级、受损果实修整、清洗、冷却和初级包装。 | `usda-watermelon-production-guidance`; `fao-postharvest-handling` |
| `boundary_managed_soils` | 肥料、改良剂和残余物流 | 按一种声明的计算方法纳入施用养分和还田残余物产生的直接和间接管理土壤排放，不重复计算上游数据集已表示的排放。 | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | 淘汰果实和作物残余物 | 为每个残余物流记录还田、堆肥、饲料、处理、处置或其他声明去向；未报告去向属于数据质量缺口，不能自动作为副产品。 | `fao-crop-residue-management`; `fao-postharvest-handling` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field_preparation_and_planting` | 田地准备和播种或定植 | required | 每个声明作物周期一次 | 前景田间建立 | 种植面积和种子或幼苗数量 |
| `watermelon_field_management` | 西瓜田间管理 | required | 整个声明作物周期 | 前景管理型生物生产 | 管理地块周期和作物投入记录 |
| `harvest_and_farm_gate_preparation` | 采收和农场大门准备 | required | 每次采收及最终农场大门交付 | 前景采收、分级和交付 | 1,000 kg 可销售完整西瓜 |

### 过程：田地准备和播种或定植（`field_preparation_and_planting`）

#### 输入

##### 产品流

###### 西瓜种子或幼苗（`planting_material_input`）

西瓜种子或幼苗作为声明一年生作物周期的种植材料进入地块。应记录一次购入种植材料，并将其与形成的作物产出分开。

- 选定流：Watermelon seed or transplants
- 流属性/单位：Number of items or mass / seed units or kg
- 数量规则：按地块和作物周期记录供应商数量及种植材料类型。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积和每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_planting_records`
- 来源：`usda-watermelon-production-guidance`
- 数量范围：暂定种植材料筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：8
  - 单位：kg seed or 1000 transplants/ha
  - 基准：等待供应商和田间记录期间的一年生西瓜首轮宽泛种植率
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田地准备燃料或机械服务（`field_preparation_energy`）

当整地、起垄、铺设覆盖物和播种或定植使用的柴油、电力或外购机械服务跨越前景边界时予以记录。应分别报告所选能源载体或服务。

- 选定流：Field preparation fuel or machinery service
- 流属性/单位：Mass, energy, or service / kg, kWh, or hectare-service
- 数量规则：按地块和作物周期使用燃料票据、机械日志、计量记录或供应商服务记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷种植面积和每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_operation_records`
- 来源：`usda-watermelon-production-guidance`

##### 废物流

##### 基本流

###### 占用的农业土壤（`field_occupation`）

当把土地占用表示为基本流输入时，记录声明作物周期的地块面积和占用时间。普通田地占用不应作为产品投入。

- 选定流：Agricultural land occupation
- 流属性/单位：Area-time / m2*a
- 数量规则：地块面积乘以声明的作物周期占用时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_operation_records`

#### 输出

##### 产品流

###### 已完成种植的地块（`planted_field_output`）

该内部交接记录进入西瓜田间管理的合格种植面积，不是参考产品。

- 选定流：Prepared planted watermelon field
- 流属性/单位：Area / ha
- 数量规则：播种或定植完成并扣除有记录的失败面积后的合格种植面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每次播种或定植作业
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_planting_records`

##### 废物流

##### 基本流

### 过程：西瓜田间管理（`watermelon_field_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`watermelon_field_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fertilizer_records`
- 来源：`usda-watermelon-production-guidance`
- 数量范围：暂定氮施用筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg N/ha
  - 基准：等待土壤测试和肥料记录期间的一年生西瓜作物周期宽泛范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定磷施用筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：kg P2O5/ha
  - 基准：等待土壤测试和肥料记录期间的作物周期宽泛范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定钾施用筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：350
  - 单位：kg K2O/ha
  - 基准：等待土壤测试和肥料记录期间的作物周期宽泛范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water_input`）

分别记录西瓜地块的灌溉供水、降雨和采后清洗用水。

- 选定流：Irrigation water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按地块、来源和作物周期计量灌溉供水；没有水表时记录估算方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：暂定灌溉水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：9000
  - 单位：m3/ha
  - 基准：等待田间用水记录和气候评估期间的灌溉或雨养作物周期宽泛范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物保护产品（`crop_protection_input`）

将声明周期中使用的除草剂、杀虫剂、杀菌剂和其他作物保护产品作为独立产品投入记录，并保留有效成分或配方信息。

- 选定流：Crop-protection product
- 流属性/单位：Mass / kg product or kg active ingredient
- 数量规则：根据施用记录获取产品数量，并保留配方和有效成分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`usda-watermelon-production-guidance`
- 数量范围：暂定作物保护产品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg product/ha
  - 基准：等待产品标签和施用记录期间的作物周期宽泛范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间作业燃料或电力（`field_operation_energy`）

记录灌溉泵、田间机械和其他作物管理作业消耗的燃料与电力。保持每种能源载体和作业可识别。

- 选定流：Field-operation fuel or electricity
- 流属性/单位：Mass or energy / kg fuel or kWh
- 数量规则：按地块和作物周期使用燃料票据、机械日志、水泵计量或服务记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_operation_records`
- 来源：`usda-watermelon-production-guidance`

##### 废物流

#### 输出

##### 产品流

###### 待采收西瓜作物（`harvest_ready_crop_output`）

记录进入采收作业前的作物产出。该中间产出必须与可销售农场大门西瓜和淘汰果实保持区分。

- 选定流：Harvest-ready watermelon crop
- 流属性/单位：Mass / kg
- 数量规则：按地块和采收日期称量或估算进入采收和分级的总采收作物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期和每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`

##### 废物流

###### 田间作物残余物（`field_residue_output`）

记录采收后留在田间的藤蔓、叶、根及其他作物残余物，并声明其还田、移出、堆肥、处理或处置去向。

- 选定流：Watermelon crop residues
- 流属性/单位：Mass / kg wet residue
- 数量规则：按地块测量或记录残余物数量和去向；使用时应记录有据可查的干物质换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期和每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`fao-crop-residue-management`

##### 基本流

###### 管理土壤氮排放（`managed_soil_nitrogen_emissions`）

使用声明的土壤排放方法，根据有记录的养分投入和相关还田残余物计算直接和间接氮排放。不得将同一排放既作为前景计算结果又作为额外的通用估算录入。

- 选定流：Managed-soil nitrogen emissions
- 流属性/单位：Mass / kg N compound
- 数量规则：对有记录的养分投入和还田残余物应用声明的氮排放方法，并保留排放因子及气候或土壤参数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fertilizer_records`
- 来源：`ipcc-2019-managed-soils`

### 过程：采收和农场大门准备（`harvest_and_farm_gate_preparation`）

#### 输入

##### 产品流

###### 采收和处理能源（`harvest_handling_energy`）

当采收、田间收集、分级、清洗、冷却和初级包装在农场大门转移前发生时，记录其能源消耗。

- 选定流：Harvest and handling fuel or electricity
- 流属性/单位：Mass or energy / kg fuel or kWh
- 数量规则：为作物周期内作业使用设备日志、计量读数或供应商记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门西瓜
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_handling_records`
- 来源：`fao-postharvest-handling`

###### 初级包装（`primary_packaging_input`）

记录在农场大门交付前跨越前景边界的初级包装。仅当明确声明该状态时，散装产品才记录为零包装。

- 选定流：Primary packaging material
- 流属性/单位：Mass / kg packaging
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`pallet-and-crate-packaging`
- 数量规则：称量或从供应商获得分配给可销售产出的周转箱、托盘、纸箱或其他包装质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门西瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-postharvest-handling`

##### 废物流

###### 淘汰或受损西瓜（`rejected_fruit_output`）

记录采收或分级中淘汰的果实并识别去向。除非有文件证明的生产性用途符合副产品规则，淘汰果实均为废物流。

- 选定流：Rejected or damaged watermelon
- 流属性/单位：Mass / kg
- 数量规则：将淘汰果实与可销售产出分开称量或估算，并保留去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售农场大门西瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：`fao-postharvest-handling`

##### 基本流

#### 输出

##### 产品流

###### 农场大门的可销售完整西瓜（`watermelon_farm_gate_output`）

这是本 PCR 的参考产品流。记录分级以及所声明的农场内清洗、冷却和初级包装之后，在农场大门交付的可销售质量。

- 选定流：Watermelons; production mix, at farm gate; fresh, unprocessed whole fruit `8979956d-8091-4c35-af7a-1ec80529bad3`
- 流属性/单位：Mass / kg
- 绑定模式：`fixed`
- 数量规则：在声明的质量和分级检查后、农场大门转移时称量可销售完整西瓜。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 可销售农场大门西瓜
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_crop_fields` | 分配给单一作物的田间作业 | 当田间作业只服务于声明的作物周期时直接分配给西瓜；共享作业应在采用分配方法前记录。 | `fao-crop-production-framework` |
| `allocation_multiple_outputs` | 可销售果实和任何有据可查的残余物生产性用途 | 将可销售西瓜作为参考产出。若残余物或其他产出有有据可查的生产性用途并作为产品离开边界，应在共享过程中一致地采用声明的物理或经济分配方法，并披露分配基准。 | `fao-crop-residue-management` |
| `allocation_rejects_and_losses` | 无生产性用途的受损果实和作物残余物 | 根据声明去向将淘汰果实和残余物作为废物或损失处理。没有生产性用途和明确交接证据时，不得将废物流作为副产品分配负荷。 | `fao-postharvest-handling` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_planting_records` | `field_preparation_and_planting` | `planting_material_input`, `planted_field_output` | 播种或定植及地块登记 | field_id; area; planting date; seed_or_transplant_type; supplier quantity; failures; replants | 供应商记录与田间日志核对 | seed units, kg, ha | 每个作物周期 | 声明的完整作物周期 | 每个地块或同质地块组 | 先按地块汇总，再按可销售产出归一化 | 供应商发票及签署的田间登记或等效记录 |
| `cp_field_operation_records` | `field_preparation_and_planting`, `watermelon_field_management` | `field_preparation_energy`, `field_occupation`, `field_operation_energy` | 机械、水泵和田间登记 | field_id; operation; date; equipment; fuel or electricity; hours; area | 计量、燃料票据、机械日志或服务记录 | kg, kWh, h, ha | 每项作业 | 声明的完整作物周期 | 每个地块或设备组 | 按有记录的面积或时间基准分配共享作业 | 计量校准、票据或服务记录 |
| `cp_fertilizer_records` | `watermelon_field_management` | 肥料和管理土壤排放 | 养分施用登记 | field_id; product; formulation; nutrient concentration; amount; date; application method; soil or climate inputs | 肥料发票与施用日志 | kg product, kg nutrient | 每次施用 | 声明的完整作物周期 | 每个地块 | 按养分基准和地块求和后归一化 | 发票、标签、土壤测试和施用记录 |
| `cp_irrigation_records` | `watermelon_field_management` | `irrigation_water_input` | 灌溉登记 | field_id; source; date; meter start and end; estimated volume; rainfall context | 水表或有文件依据的水平衡估算 | m3 | 每次灌溉或每周 | 声明的完整作物周期 | 每个地块和水源 | 按地块和水源汇总供水量 | 水表记录、水泵日志或供水分配记录 |
| `cp_crop_protection_records` | `watermelon_field_management` | `crop_protection_input` | 作物保护施用登记 | field_id; product; formulation; active ingredient; dose; area; date; target | 产品标签、发票和施用日志 | kg product, kg active ingredient, ha | 每次施用 | 声明的完整作物周期 | 每个地块 | 按产品和有效成分求和 | 标签、发票和施用记录 |
| `cp_harvest_records` | `watermelon_field_management`, `harvest_and_farm_gate_preparation` | `harvest_ready_crop_output`, `field_residue_output`, `rejected_fruit_output`, `watermelon_farm_gate_output` | 采收和分级登记 | field_id; harvest date; gross harvested; marketable; rejected; residue; destination; grade; transfer weight | 称重单和采收或分级日志 | kg | 每次采收 | 最终采收窗口和完整作物周期 | 每个地块、批次或采收区组 | 将总质量与可销售、淘汰和声明残余物去向核对 | 经校准的秤、称重单和去向记录 |
| `cp_residue_records` | `watermelon_field_management` | `field_residue_output` | 残余物去向记录 | field_id; residue type; wet or dry basis; amount; destination; date | 田间测量和去向确认 | kg | 每次残余物事件 | 声明的完整作物周期 | 每个地块 | 按去向及适用的干物质基准汇总 | 称重记录、堆肥或饲料收据，或还田日志 |
| `cp_harvest_handling_records` | `harvest_and_farm_gate_preparation` | `harvest_handling_energy` | 处理和包装登记 | lot_id; operation; date; energy carrier; quantity; marketable mass | 计量、设备日志或服务记录 | kg, kWh, h | 每批次或每项作业 | 最终采收窗口 | 包装或处理场所 | 按可销售质量分配能源并声明共享服务分配 | 计量或服务记录 |
| `cp_packaging_records` | `harvest_and_farm_gate_preparation` | `primary_packaging_input` | 包装登记 | lot_id; material; reusable or single-use; unit count; unit mass; losses; reuse cycles | 供应商规格和计数或称重记录 | kg, item | 每批次 | 最终采收窗口 | 包装场所 | 汇总包装质量并记录重复使用分配 | 供应商规格和包装记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有库存行 | `normalized amount = field or lot amount × 1,000 kg / marketable farm-gate watermelon mass` | 地块或批次记录；可销售质量 | 每 1,000 kg 参考流的数量 |  |
| `calc_nutrient_mass` | 肥料投入 | `nutrient mass = product mass × declared nutrient concentration` | 产品质量；标签或供应商浓度 | kg N、kg P2O5 或 kg K2O | `usda-watermelon-production-guidance` |
| `calc_land_occupation` | 土地占用 | `occupation = field area × declared crop-cycle occupation duration` | 地块面积；播种或定植和最后采收日期 | m2*a 或声明的面积时间单位 |  |
| `calc_managed_soil_emissions` | 管理土壤氮排放 | 对有记录的养分投入和还田残余物应用一种声明的、兼容 IPCC 的方法，并将因子和假设保留在数据集内。 | 养分投入；残余物还田；土壤和气候参数 | 每参考流的基本氮排放 | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | 采收和分级 | `gross harvested = marketable + rejected + documented other destinations`，受称量精度和声明估算不确定度约束 | 采收、分级和去向记录 | 核对后的作物产出和损失记录 | `fao-postharvest-handling` |
| `calc_reusable_packaging` | 可重复使用初级包装 | 使用供应商或运营方记录，按声明的使用次数分配包装制造和损失；没有有据可查的使用次数时不得给予重复使用抵扣。 | 包装质量；使用次数；损失率 | 每参考流的包装质量 | `fao-postharvest-handling` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考流和产出流 | 声明品种或种子类型、生产地理位置、作物周期日期、采收窗口、完整果实状态、等级和农场大门交付。 | 产品和地块登记 |
| `dq_mass_reconciliation` | 采收、淘汰、残余物和参考产出 | 在声明的称量或估算不确定度内，将总采收质量与可销售产出、淘汰果实、残余物和其他声明去向核对。 | 称重单和去向记录 |
| `dq_input_completeness` | 所有产品和基本流投入 | 核算种子或幼苗、肥料养分、灌溉、作物保护产品、田间能源、土地占用、土壤排放和纳入的处理投入；缺失记录须披露。 | 投入登记和完整性清单 |
| `dq_temporal_geographic_scope` | 所有前景记录 | 覆盖声明的完整作物周期，并识别地块、生产地理位置、生产年份、灌溉制度和任何保护地路线。 | 地块登记和生产元数据 |
| `dq_residue_destination` | 作物残余物和淘汰果实 | 为每条残余物流保留去向和数量；识别还田、饲料、堆肥、处理、处置或其他有文件依据的用途。 | 残余物和去向记录 |
| `dq_uncertainty_disclosure` | 估算值或计算值 | 标记估算、换算因子和缺少的测量，并说明其对参考流归一化结果的影响。 | 计算表和质量审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 参考数量是农场大门 1,000 kg 的完整、可销售西瓜质量，并包含所有必需限定信息。 |  |
| `validate_cycle_completeness` | 过程图和记录 | 声明的一年生作物周期包含田地准备、播种或定植、管理生产、采收和农场大门交付，并明确标记条件作业。 | `fao-crop-production-framework` |
| `validate_mass_balance` | 采收和分级 | 核对总采收、可销售、淘汰、残余物和其他去向质量，不得重复计算参考产出。 | `fao-postharvest-handling` |
| `validate_nutrient_and_water_basis` | 肥料和灌溉 | 肥料投入保留养分基准和浓度证据；灌溉量识别水源和地块，不得与降雨混淆。 | `fao-crop-evapotranspiration-56` |
| `validate_residue_and_loss_fate` | 淘汰果实和残余物 | 每条非销售物流都有声明去向或明确的数据质量发现；没有生产性用途证据时，废物不得作为副产品。 | `fao-crop-residue-management` |
| `validate_boundary_disclosure` | 数据集元数据 | 披露前期土地利用、作物周期、生产地理位置、灌溉制度、土壤排放方法、残余物去向和所有纳入的农场大门作业。 | `fao-crop-production-framework`; `ipcc-2019-managed-soils` |
| `validate_normalization` | 所有库存行 | 所有数量都可追溯到地块、作物周期、采收或批次记录，并归一化为 1,000 kg 可销售农场大门产出。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜完整西瓜农场大门生产的前景农业生产主数据集 |
| downstream_use | `secondary_dataset`；当农场大门产品和质量限定信息一致时，可作为 `background_dataset` |
| allowed_use | 对声明的农场大门交付及纳入的农场内准备过程进行新鲜完整西瓜生产 LCA 建模 |
| excluded_use | 加工或切开西瓜、种子或幼苗生产、农场大门后的储存和配送、零售、消费或未声明的作物路线 |
| required_metadata | 生产地理位置；生产年份；作物周期日期；品种或种子类型；地块面积；灌溉或雨养路线；农场大门状态；等级；清洗和包装状态；残余物去向 |
| required_quality_disclosure | 质量核对；投入完整性；养分和灌溉基准；土壤排放方法；残余物和淘汰物去向；估算值；时间和地理覆盖范围 |
| update_trigger | 种植路线、灌溉或养分实践、作物保护制度、农场大门准备、包装、分类范围或定量规则证据发生实质变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-crop-production-framework` | official_guidance | FAO 作物生产和资源管理指南。https://www.fao.org/land-water/databases-and-software/crop-information/en/ | 一年生作物周期边界、田间记录和分配要求 |
| `usda-watermelon-production-guidance` | extension_guidance | USDA 及推广机构西瓜播种、养分管理、田间作业和采收记录指南。https://extension.uga.edu/publications/detail.html?number=C1101 | 播种、养分管理、田间作业和采收记录 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO 灌溉与排水文件 56《作物蒸散》。https://www.fao.org/4/X0490E/X0490E00.htm | 作物水平衡和灌溉记录方法 |
| `ipcc-2019-managed-soils` | method_factor | 2019 IPCC Refinement 农业、林业和其他土地利用部分的管理土壤方法。https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤氮排放方法 |
| `fao-crop-residue-management` | official_guidance | FAO 作物残余物和土壤管理指南。https://www.fao.org/3/y2779e/y2779e00.htm | 残余物还田和去向披露 |
| `fao-postharvest-handling` | official_guidance | FAO 采后处理指南。https://www.fao.org/4/ac301e/ac301e00.htm | 分级、损失记录、包装和农场大门准备 |
