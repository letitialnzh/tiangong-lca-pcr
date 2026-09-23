---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cherries
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 果园或包装场门的新鲜樱桃

## 1. 范围与适用性

本 PCR 覆盖新鲜、未经加工的樱桃，从果园建立或声明的生产周期开始，经田间管理、采收、可选的初步分级或冷却，到声明的果园门或包装场门交付。范围包括果园投入、灌溉、养分和土壤改良剂管理、作物保护、采收、门前调理、初级包装以及门前有记录的残余物或次品去向。范围不包括苗圃生产、干制、冷冻、罐装、榨汁或其他加工樱桃，零售、消费者、下游运输、无关土地转化和基础设施建设。数据包应声明物种或品种、地理位置、果园树龄、作物周期、边界、成熟度、等级、处理状态、灌溉、养分基准、包装状态和残余物去向。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cherries |
| classification_refs | CPC 3.0:01344 Cherries |
| covered_products | 声明果园门或包装场门的新鲜、完整、未经加工樱桃 |
| excluded_products | 苗圃生产；干制、冷冻、罐装、榨汁、发酵或其他加工樱桃；零售、消费者、下游运输、无关土地转化和基础设施 |
| representative_product | 声明成熟度、等级和边界的可销售新鲜完整樱桃 |
| production_route | 果园建立或更新；树体和果实生产管理；灌溉、养分、土壤改良剂和作物保护管理；采收；可选分级、冷却和初级包装 |
| market_state | 果园门或包装场门以散装或声明初级包装交付的新鲜完整樱桃 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明果园门或包装场门的可销售新鲜樱桃 |
| How much | 1,000 kg |
| How well | 新鲜且未经加工；声明物种或品种、成熟度、尺寸或等级、果梗状态、清洁度、冷却或清洗状态以及包装状态 |
| How long or cycle | 一个声明的生产年度或果园作物周期，包括归属于该周期的全部采收批次 |
| reference_flow_link | `cherries_farm_gate_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | 声明果园门或包装场门的新鲜樱桃＼ |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 地理位置；物种和品种；果园路线和树龄；周期日期；声明边界；成熟度、等级、果梗和冷却状态；灌溉；养分和作物保护基准；包装；残余物、次品和废水去向 |


构建前景数据包时，所有必需限定信息都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包，其参考流定义视为不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收批次和边界输出 | 质量 | kg | 将采收水果、可销售产出、次品、修剪物、残余物和有记录损失分别核算并进行平衡。 |
| `orchard_cycle_normalization` | 果园和作物周期记录 | 面积、时间和质量 | ha, year, kg | 按果园区块记录，并归一化到同一声明周期归属的可销售产出。 |
| `nutrient_product_basis` | 肥料和土壤改良剂 | 产品质量和养分 | kg product, kg N, kg P2O5, kg K2O | 记录实际产品质量；仅依据标签、供应商规格、养分计划或实验室结果计算养分。 |
| `water_energy_basis` | 灌溉、冷却、电力和燃料 | 体积、能量或燃料 | m3, kWh, MJ, L | 分开记录水、电和燃料，并披露每项换算或共享设备分配。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整备的果园单元接收樱桃种植材料，或进入声明的生产周期；披露既有土地利用和排除的基础设施 |
| starting_condition_role | 果园建立、生产年度或生产作物周期核算的起点 |
| product_classification_scope | CPC 3.0:01344 下的新鲜樱桃，直到声明的果园门或包装场门 |
| recursive_input_rule | 购入种植材料只链接一次；除非提供单独上游数据集，否则苗圃和繁育留在本 PCR 之外。没有证据时不得递归展开同类产品投入。 |
| upstream_dataset_requirement | 使用时为种植材料、养分和改良剂、作物保护、灌溉水、电力、燃料、包装、运输或处理服务提供上游数据集。 |
| disclosure | 声明地理位置、品种、路线、树龄、周期、灌溉、养分和作物保护计划、采收批次、边界、产出平衡、处理、包装、残余物和废水去向。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_orchard_cycle` | 建立和果园管理 | 纳入产生新鲜产出的声明建立或生产周期更新、管理活动和投入；排除无关基础设施。 | `fao-good-agricultural-practices`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_farm_gate_conditioning` | 采收和初步调理 | 终止于声明的果园门或包装场门；仅在其发生于该边界之前时纳入分级、冷却、清洗和初级包装。 | `fao-fresh-fruit-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_soil_residue_pathway` | 养分、土壤、残余物和次品 | 使用一种声明的氮和残余物方法；不得重复计算路径，也不得在没有去向和功能证据时主张残余物抵扣。 | `ipcc-2019-refinement-afolu`; `fao-good-agricultural-practices` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cherry_orchard_establishment` | 樱桃果园建立 | required | 有代表性的种植、补植或果园单元建立 | 前景果园建立 | 建立面积和归属产出 |
| `managed_cherry_orchard_cycle` | 管理型樱桃果园周期 | required | 每个代表性生产年度或生产周期 | 前景生物生产 | 管理面积和采收量 |
| `cherry_harvest_and_gate_handling` | 樱桃采收和边界处理 | required | 有代表性的采收和声明边界 | 前景采收、调理和边界交付 | 1,000 kg 边界产出 |
| `cherry_residue_and_reject_routing` | 樱桃残余物和次品去向 | conditional | 边界前发生残余物、次品、回收或处理 | 前景残余物和次品去向 | 有称量的去向质量 |

### 过程：樱桃果园建立（`cherry_orchard_establishment`）

#### 输入

##### 产品流

###### 樱桃种植材料（`planting_material_input`）
樱桃树、砧木或嫁接苗以购入或转移材料跨越建立过程边界。

- 选定流：樱桃种植材料
- 流属性/单位：数量或质量 / plant or kg
- 数量规则：按果园区块记录购入、种植和补植数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-good-agricultural-practices`; `globalgap-ifa-fruit-vegetables-v6`

###### 农业养分与肥料投入（`cherry_orchard_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-good-agricultural-practices`; `globalgap-ifa-fruit-vegetables-v6`

##### 废物流

##### 基本流

###### 果园土地占用（`establishment_land_occupation`）
果园区块在建立期间占用土地，该负担分配到生产周期。

- 选定流：土地占用
- 流属性/单位：面积时间 / ha year
- 数量规则：果园面积乘以有记录的建立期分配时长。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-good-agricultural-practices`

#### 输出

##### 产品流
##### 废物流
##### 基本流

### 过程：管理型樱桃果园周期（`managed_cherry_orchard_cycle`）

#### 输入

##### 产品流

###### 灌溉水（`irrigation_water_input`）
灌溉水在输送到代表性樱桃区块时跨越果园边界。

- 选定流：灌溉水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按区块分配计量或供应商记录的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-good-agricultural-practices`; `globalgap-ifa-fruit-vegetables-v6`

###### 灌溉和冷却用电（`orchard_electricity_input`）
记录代表性周期中泵、冷却设备或果园设备使用的购入电力。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按区块和周期分配计量或发票记录的电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

###### 移动机械燃料（`orchard_fuel_input`）
拖拉机、喷雾机和采收设备消耗的燃料在使用时跨越边界。

- 选定流：移动机械燃料
- 流属性/单位：能量或体积 / MJ or L
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：按果园作业分配燃料领用记录、罐量测量或发票。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

###### 农业养分与肥料投入（`managed_cherry_orchard_cycle_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-good-agricultural-practices`; `globalgap-ifa-fruit-vegetables-v6`

###### 作物保护产品（`crop_protection_input`）
记录果园使用的命名产品和有效成分，不将不同产品合并为一个通用流。

- 选定流：作物保护产品
- 流属性/单位：质量或体积 / kg product or L
- 数量规则：按区块和施用事件记录每种配方及有效成分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

##### 废物流
##### 基本流

###### 生产性果园土地占用（`productive_land_occupation`）
生产性樱桃面积在声明周期内被占用，并归一化到可销售边界产出。

- 选定流：土地占用
- 流属性/单位：面积时间 / ha year
- 数量规则：生产性果园面积乘以周期时长，再除以可销售边界产出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_cycle_records`
- 来源：`fao-good-agricultural-practices`

###### 灌溉水取用（`water_withdrawal`）
水源特定的取水量与输送的灌溉水分开记录，以避免重复计算。

- 选定流：水资源取用
- 流属性/单位：质量或体积 / kg or m3
- 数量规则：根据水源计量取水量计算，并披露水源和回流水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

#### 输出
##### 产品流
##### 废物流
##### 基本流

###### 管理土壤氧化亚氮排放（`soil_n2o_emission`）
仅在养分基准和选定方法已声明后表示直接和间接土壤氮排放。

- 选定流：排放到空气的氧化亚氮
- 流属性/单位：质量 / kg N2O
- 数量规则：对有记录的氮投入使用一种选定方法，并披露因子和换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`ipcc-2019-refinement-afolu`

### 过程：樱桃采收和边界处理（`cherry_harvest_and_gate_handling`）

#### 输入

##### 产品流

###### 初级包装（`primary_packaging_input`）
在声明包装场门之前使用时，箱、纸箱、小盒或其他初级包装跨越边界。

- 选定流：初级包装材料
- 流属性/单位：质量 / kg packaging
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`rigid-container-packaging`
- 数量规则：按批次、规格和重复使用状态记录包装材料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-fresh-fruit-postharvest-guidance`

###### 边界前冷却能耗（`pre_gate_cooling_energy`）
当冷却或冷库属于所选路线且发生在声明包装场门之前时，将其电力纳入。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按樱桃批次计量或分配冷却电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-fresh-fruit-postharvest-guidance`

##### 废物流
##### 基本流

#### 输出

##### 产品流

###### 可销售新鲜樱桃（`marketable_cherry_output`）
可销售樱桃在声明果园门或包装场门离开前景系统，作为参考产品。

- 选定流：声明边界的新鲜樱桃
- 流属性/单位：质量 / kg
- 数量规则：记录声明分级和边界前处理后的称量可销售产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot_records`
- 来源：`fao-fresh-fruit-postharvest-guidance`

##### 废物流
##### 基本流

### 过程：樱桃残余物和次品去向（`cherry_residue_and_reject_routing`）

#### 输入

##### 产品流

###### 拒收或降级樱桃（`reject_cherry_input`）
当拒收或降级水果在边界前被送往回收、处理或处置时，进入该条件性过程。

- 选定流：拒收或降级樱桃
- 流属性/单位：质量 / kg wet fruit
- 数量规则：按批次记录称量的次品质量和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-fresh-fruit-postharvest-guidance`

##### 废物流

###### 送处理或处置的残余废物（`residual_waste_output`）
当没有有记录的回收功能时，残余废物离开该条件性去向过程。

- 选定流：残余有机废物
- 流属性/单位：质量 / kg wet matter
- 数量规则：记录质量和去向；没有功能证据时不得主张回收抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-fresh-fruit-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6`

#### 输出

##### 产品流

###### 回收有机物料（`recovered_organic_output`）
仅在有称量去向和接收方功能记录时记录回收有机物料。

- 选定流：回收有机物料
- 流属性/单位：质量 / kg wet or dry matter
- 数量规则：记录回收质量、含水基准和去向；没有功能证据时不得主张替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-fresh-fruit-postharvest-guidance`

##### 废物流
##### 基本流

###### 残余物产生的土壤或水路径（`residue_pathway_emission`）
仅在去向和方法已知时记录残余物处理产生的有记录土壤或水释放。

- 选定流：残余物相关土壤或水释放
- 流属性/单位：质量 / kg substance
- 数量规则：使用声明的残余物路径和选定排放方法；否则保留为 coverage finding 项。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售边界产出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`ipcc-2019-refinement-afolu`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_orchard_cycles` | 建立和多个周期 | 按有记录的面积时间、树年或其他有依据的物理基础分配共享果园负担，并披露该基础。 | `fao-good-agricultural-practices` |
| `allocation_marketable_and_reject_outputs` | 采收和边界处理 | 将可销售樱桃作为参考输出；分别记录降级水果、次品、修剪物和回收物料，只有在存在真实共产品功能时才进行分配。 | `fao-fresh-fruit-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6` |
| `allocation_recovered_residue_claim` | 回收残余物 | 除非记录去向、功能、数量和接收系统证据，否则不得主张避免生产。 | `fao-good-agricultural-practices` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `cherry_orchard_establishment` | planting material and area | orchard register and planting log | block_id; cultivar; plants; date; area; tree density | document review and field reconciliation | plant, ha, date | each event | establishment and allocated cycles | each block | reconcile purchased, planted and failed plants | supplier lot and field register |
| `cp_orchard_cycle_records` | `managed_cherry_orchard_cycle` | orchard area and cycle | block register and farm log | block_id; area; dates; age; yield; weather; operations | record review and block reconciliation | ha, year, kg | monthly and cycle close | full cycle | each block | aggregate by block and declared cycle | block register and signed farm log |
| `cp_irrigation_records` | `managed_cherry_orchard_cycle` | irrigation and withdrawal | meter and pump log | block_id; source; volume; dates; method; allocation | meter readout and allocation review | m3 | event or monthly | full cycle | block and source | sum measured volume and allocate shared meters | calibrated meter |
| `cp_energy_and_fuel_records` | `managed_cherry_orchard_cycle` | electricity and fuel | utility bill and equipment log | equipment; type; quantity; hours; allocation | invoice and log review | kWh, MJ, L | monthly and issue | full cycle | orchard and gate equipment | allocate by hours, area or throughput | invoice or meter |
| `cp_nutrient_and_amendment_records` | `cherry_orchard_establishment`, `managed_cherry_orchard_cycle` | fertilizer and amendments | purchase, application, label and plan | product; mass; N; P2O5; K2O; date; block; area | record review and nutrient balance | kg product and nutrient | application | full cycle | each block | sum actual products and nutrients | label or laboratory result |
| `cp_crop_protection_records` | `managed_cherry_orchard_cycle` | crop protection | spray log and purchase record | product; formulation; active substance; quantity; date; area | record reconciliation | kg or L | application | full cycle | each block | sum product and disclose active substance | label and signed log |
| `cp_harvest_lot_records` | `managed_cherry_orchard_cycle`, `cherry_harvest_and_gate_handling` | harvest and gate output | harvest ticket and scale record | block_id; lot_id; date; cultivar; harvested; marketable; grade; rejects | scale reconciliation | kg | each lot | all harvests | block and gate | reconcile harvest, output, rejects and loss | scale and traceability |
| `cp_conditioning_and_packaging_records` | `cherry_harvest_and_gate_handling` | cooling, packaging and wastewater | pack-house log and invoices | lot_id; water; electricity; material; quantity; cooling; destination | mass balance and document review | m3, kWh, kg | lot or shift | gate period | each gate | allocate utilities and packaging to output | meter and invoice |
| `cp_residue_and_reject_records` | `managed_cherry_orchard_cycle`, `cherry_harvest_and_gate_handling`, `cherry_residue_and_reject_routing` | residues, culls and waste | residue log and destination receipt | source; mass; moisture; destination; treatment; function; date | weighing and destination review | kg wet or dry matter | event or monthly | full cycle | orchard and gate | reconcile source to recovery and residuals | scale and receipt |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_cycle_normalization` | all process rows | `normalized amount = recorded amount / marketable gate output * 1,000 kg`. | block records; dates; gate output | normalized amount | `fao-good-agricultural-practices` |
| `calc_nutrient_basis` | fertilizer and amendment rows | 保持产品质量以及 N、P2O5、K2O 质量分开；仅依据声明证据计算。 | product mass; nutrient fractions or result | product and nutrient amount | `globalgap-ifa-fruit-vegetables-v6` |
| `calc_soil_emissions` | soil emission rows | 对有记录的投入氮使用一种兼容 IPCC 的氮方法，并披露因子和换算。 | N input; factors; qualifiers | elementary-flow amount | `ipcc-2019-refinement-afolu` |
| `calc_mass_reconciliation` | harvest, gate and residue rows | 平衡采收量、可销售产出、次品、残余物、回收物料和有记录损失。 | lot records; scale; destination records | mass balance | `fao-fresh-fruit-postharvest-guidance` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_identity_and_scope` | all datasets | 声明物种、品种、地理位置、区块、路线、树龄、边界和周期日期。 | orchard and lot registers |
| `quality_measurement_traceability` | measured inputs and outputs | 优先使用校准计量器、秤、发票、施用记录和去向收据；记录共享记录分配。 | primary records and worksheet |
| `quality_temporal_completeness` | full cycle | 覆盖全部采收和施用事件，并识别缺失月份、区块或批次。 | cycle completeness checklist |
| `quality_mass_balance` | harvest and handling | 平衡采收、可销售、拒收、修剪、回收、残余和有记录损失质量。 | lot mass balance |
| `quality_factor_disclosure` | calculated soil and residue pathways | 披露所选因子方法、养分基准、换算和任何排除路径。 | calculation worksheet and source reference |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_qualifiers` | reference flow and dataset | 当必需物种、地理位置、路线、周期、边界、成熟度、等级、果梗或处理限定信息缺失时拒绝。 | `fao-good-agricultural-practices`; `globalgap-ifa-fruit-vegetables-v6` |
| `validate_cycle_and_output_reconciliation` | cycle and gate output | 检查投入属于声明区块和期间，并检查产出、次品、残余物和损失与采收量相符。 | `fao-fresh-fruit-postharvest-guidance` |
| `validate_nutrient_and_emission_basis` | nutrient and emission rows | 检查产品质量、养分基准、因子方法和限定信息；防止氮路径重复计算。 | `ipcc-2019-refinement-afolu` |
| `validate_gate_and_downstream_exclusion` | boundary and use | 检查边界明确，并排除零售、消费者、下游运输和加工樱桃。 | `globalgap-ifa-fruit-vegetables-v6` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after review and release controls |
| downstream_use | 声明果园门或包装场门新鲜樱桃的前景农业建模 |
| allowed_use | 保留产品、地理位置、路线、周期、边界、投入基准、残余物去向和质量限定信息后使用 |
| excluded_use | 加工樱桃、零售或消费者阶段、无限定的区域替代，或缺失边界和周期范围的使用 |
| required_metadata | PCR id; CPC reference; product identity; geography; orchard scope; route; age; cycle dates; gate; grade; inputs; irrigation; residue fate; reference amount and unit |
| required_quality_disclosure | 时间和场址覆盖、完整性、原始记录比例、分配、质量平衡、因子和 identity 证据缺口s |
| update_trigger | 路线、灌溉、养分方法、周期分配、边界处理、包装或排放方法发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO good agricultural practices and orchard production guidance | 果园过程、投入、边界和周期披露 |
| `fao-fresh-fruit-postharvest-guidance` | extension_guidance | FAO fresh-fruit post-harvest handling guidance | 采收、分级、冷却、包装、次品和质量平衡 |
| `globalgap-ifa-fruit-vegetables-v6` | standard | GLOBALG.A.P. Integrated Farm Assurance fruit and vegetables requirements | 可追溯性、投入、水、养分、作物保护和质量证据 |
| `ipcc-2019-refinement-afolu` | method_factor | 2019 IPCC Refinement, AFOLU | 管理土壤氮方法和排放路径披露 |
