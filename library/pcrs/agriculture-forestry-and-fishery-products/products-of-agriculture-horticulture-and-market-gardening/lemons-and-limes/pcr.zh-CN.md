---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lemons-and-limes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 柠檬和酸橙

## 1. 范围与适用性

本 PCR 覆盖新鲜、未加工柠檬和酸橙，从果园建立或声明的生产周期，经栽培、采收、可选初级分级、清洗或打蜡，到声明农场门或包装场门交付。系统包括果园投入、灌溉、病虫害防治、采收、初级包装以及门前有记录的残体或次品去向。不包括苗圃生产、加工柑橘、零售、消费者、下游运输、无关土地转化和基础设施建设。数据包应声明物种、品种、地理位置、树龄、周期、交付门、成熟度、等级、处理状态和残体去向。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lemons-and-limes |
| classification_refs | CPC 3.0:01322 Lemons and limes |
| covered_products | 声明农场门或包装场门的新鲜、未加工柠檬和酸橙 |
| excluded_products | 苗圃生产；干燥、冷冻、榨汁、罐藏、保藏或其他加工柑橘；零售、消费者、下游运输、无关土地转化和基础设施 |
| representative_product | 声明成熟度、等级和交付门状态下的可销售新鲜整果柠檬或酸橙 |
| production_route | 果园建立或更新；树体和果实生产；灌溉、养分、土壤改良和病虫害管理；采收；可选分级、清洗、打蜡和初级包装 |
| market_state | 在农场门或包装场门以散装或声明初级包装状态交付的新鲜整果 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场门或包装场门的可销售新鲜柠檬和酸橙 |
| How much | 1,000 kg |
| How well | 新鲜且未加工；声明物种或品种、成熟度、尺寸或等级、清洁度、果皮状态、清洗或打蜡及包装状态 |
| How long or cycle | 一个声明的生产年度或果园周期，包括归属于该周期的全部采收批次 |
| reference_flow_link | `lemons_limes_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 农场门新鲜柠檬和酸橙＼ |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 地理位置；物种和品种；果园路线和树龄；周期日期；交付门；成熟度、等级和处理状态；灌溉；养分和病虫害防治基准；包装；残体、次品和废水去向 |


构建前景数据包时，所有必需限定信息都应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收批次和门输出 | 质量 | kg | 将采收果实、可销售产出、次品、修剪物、残体和有记录损失作为独立数量核对。 |
| `orchard_cycle_normalization` | 果园和周期记录 | 面积、时间和质量 | ha、year、kg | 按果园地块记录，并按同一声明周期的可销售产出归一化。 |
| `nutrient_product_basis` | 肥料和土壤改良剂 | 产品质量和养分 | kg product、kg N、kg P2O5、kg K2O | 记录实际产品质量；养分只能依据标签、供应商规格、养分计划或实验室结果计算。 |
| `water_energy_basis` | 灌溉、清洗、电力和燃料 | 体积、能量或燃料 | m3、kWh、MJ、L | 将水、电力和燃料分开记录，并披露换算和共享设备分配。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 整备果园单元接收柑橘种植材料，或进入声明的生产周期；披露既有土地利用和排除的基础设施 |
| starting_condition_role | 果园建立、生产年度或生产周期核算的起点 |
| product_classification_scope | CPC 3.0:01322 下的新鲜柠檬和酸橙，至声明农场门或包装场门 |
| recursive_input_rule | 种植材料只作为一次性投入连接；除非有独立上游数据集，否则不展开苗圃和繁育。同类别投入无证据时不递归展开。 |
| upstream_dataset_requirement | 使用时应提供种植材料、养分和改良剂、病虫害防治、灌溉水、电力、燃料、包装、运输或处理服务的上游数据集。 |
| disclosure | 声明地理位置、品种、路线、树龄、周期、灌溉、养分和病虫害计划、采收批次、交付门、产出核对、处理、包装、残体和废水去向。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_declared_orchard_cycle` | 建立和果园管理 | 纳入声明建立或生产周期更新、管理和生产新鲜产出的投入；排除无关基础设施。 | `fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_farm_gate_conditioning` | 采收和初级处理 | 在声明农场门或包装场门结束；只纳入门前的分级、清洗、打蜡和初级包装。 | `fao-citrus-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6` |
| `boundary_soil_residue_pathway` | 养分、土壤、残体和次品 | 使用一个声明的氮和残体方法；不得重复计算，也不得无目的地和功能证据申报残体收益。 | `ipcc-2019-refinement-afolu`; `fao-citrus-production-guidance` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `citrus_orchard_establishment` | 柑橘果园建立 | required | 纳入种植、补植或果园单元建立 | 前景果园建立 | 建立面积和归属产出 |
| `managed_citrus_orchard_cycle` | 柠檬或酸橙果园生产周期 | required | 每个纳入的生产年度或周期 | 前景生物生产 | 管理面积和采收量 |
| `citrus_harvest_and_gate_handling` | 柑橘采收和交付门处理 | required | 纳入的采收和声明交付门 | 前景采收、处理和交付 | 1,000 kg 门输出 |
| `citrus_residue_and_reject_routing` | 柑橘残体和次品去向 | conditional | 门前发生残体、次品、回收或处理 | 前景残体和次品去向 | 去向质量 |

### 过程：柑橘果园建立（`citrus_orchard_establishment`）

#### 输入

##### 产品流

###### 柑橘种植材料（`planting_material_input`）
柑橘树、砧木或嫁接苗以采购或转移材料跨越建立边界。

- 选定流：柑橘种植材料
- 流属性/单位：数量或质量 / plant 或 kg
- 数量规则：按地块记录采购和栽植数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

###### 农业养分与肥料投入（`citrus_orchard_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

##### 废物流

##### 基本流

###### 果园土地占用（`establishment_land_occupation`）
果园建立期占用土地，其负荷分配到生产周期。

- 选定流：土地占用
- 流属性/单位：面积-时间 / m2 year
- 数量规则：果园面积乘以有记录的建立期分配时间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-citrus-production-guidance`

#### 输出

##### 产品流
##### 废物流
##### 基本流

### 过程：柠檬或酸橙果园生产周期（`managed_citrus_orchard_cycle`）

#### 输入

##### 产品流

###### 灌溉水（`irrigation_water_input`）
声明地块使用的灌溉水跨越果园边界。

- 选定流：灌溉水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：分配到地块的计量或供应商记录量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

###### 果园和设备用电（`orchard_electricity_input`）
泵和果园设备使用的外购电力归属于声明周期。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：将电表或发票用电分配至地块和周期。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

###### 移动机械燃料（`orchard_fuel_input`）
拖拉机、喷雾器和采收设备消耗的燃料跨越边界。

- 选定流：移动机械燃料
- 流属性/单位：能量或体积 / MJ 或 L
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：按领用、油罐或发票记录分配燃料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

###### 农业养分与肥料投入（`managed_citrus_orchard_cycle_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

###### 病虫害防治产品（`crop_protection_input`）
用于果园管理的病虫害防治产品在采购或领用时跨越边界。

- 选定流：病虫害防治产品
- 流属性/单位：质量或体积 / kg 或 L
- 数量规则：记录制剂、可得时的有效成分、日期和施用面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`globalgap-ifa-fruit-vegetables-v6`

##### 废物流
#### 输出

##### 产品流

###### 果园新鲜柠檬或酸橙产出（`orchard_fresh_output`）
新鲜整果离开果园生产周期进入采收处理。

- 选定流：新鲜柠檬和酸橙
- 流属性/单位：质量 / kg
- 数量规则：称量或核对归属于地块和周期的采收果实。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot_records`
- 来源：`fao-citrus-production-guidance`

##### 废物流

###### 果园修剪物和田间残体（`orchard_field_residue`）
修剪物、落果和其他残体按有记录去向记录。

- 选定流：果园修剪物和田间残体
- 流属性/单位：质量 / kg wet matter
- 数量规则：称量、抽样或依据残体管理记录计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

##### 基本流

###### 直接土壤氧化亚氮（`direct_n2o_emission`）
当所选方法根据氮投入计算时记录直接土壤氧化亚氮。

- 选定流：氧化亚氮进入空气
- 流属性/单位：质量 / kg N2O
- 数量规则：将所选氮方法应用于有记录投入并披露因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`ipcc-2019-refinement-afolu`

###### 土壤硝酸盐损失（`soil_nitrate_loss`）
仅在选定氮平衡或浸出方法支持时记录硝酸盐损失。

- 选定流：硝酸盐进入土壤或水体；目的地身份 证据缺口
- 流属性/单位：质量 / kg N 或 kg nitrate
- 数量规则：根据有记录的氮平衡计算，不重复另一条路径。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_and_amendment_records`
- 来源：`ipcc-2019-refinement-afolu`

### 过程：柑橘采收和交付门处理（`citrus_harvest_and_gate_handling`）

#### 输入

##### 产品流

###### 处理用水（`conditioning_water_input`）
门前清洗、卫生或初级处理用水在使用时记录。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：计量或记录纳入批次用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-citrus-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6`

###### 初级包装（`primary_packaging_input`）
门前使用的周转箱、纸箱、袋或其他初级包装纳入。

- 选定流：初级包装
- 流属性/单位：质量 / kg packaging
- 数量规则：按包装批次记录材料和数量并分配至产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 包装门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-citrus-postharvest-guidance`

##### 废物流
##### 基本流

#### 输出

##### 产品流

###### 门状态可销售产出（`marketable_gate_output`）
可销售整果在声明农场门或包装场门离开。

- 选定流：声明门的新鲜柠檬和酸橙
- 流属性/单位：质量 / kg
- 数量规则：称量门输出并与采收、次品、修剪物和损失核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 可销售新鲜门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot_records`
- 来源：`fao-citrus-postharvest-guidance`

##### 废物流

###### 次品果和修剪废物（`cull_and_trim_waste`）
拒收、修剪或处理损失的果实按废物及去向记录。

- 选定流：次品果和修剪废物
- 流属性/单位：质量 / kg wet matter
- 数量规则：称量或核对拒收和修剪果。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-citrus-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6`

##### 基本流

###### 处理废水（`conditioning_wastewater`）
清洗或处理废水离开门处理过程时记录。

- 选定流：处理废水
- 流属性/单位：体积 / m3
- 数量规则：计量或由有记录的水量平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_and_packaging_records`
- 来源：`fao-citrus-postharvest-guidance`

### 过程：柑橘残体和次品去向（`citrus_residue_and_reject_routing`）

#### 输入
##### 产品流
##### 废物流

###### 残体和次品果（`residue_and_reject_input`）
当门前去向被建模时，有记录的残体、次品和修剪物进入该条件性过程。

- 选定流：果园残体和次品果
- 流属性/单位：质量 / kg wet matter
- 数量规则：转移已记录数量，不得重复计为产品产出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-citrus-production-guidance`; `fao-citrus-postharvest-guidance`

##### 基本流

#### 输出
##### 产品流

###### 回收有机材料（`recovered_organic_material_output`）
只有目的地、处理和功能有记录时，才记录堆肥、覆盖物、饲料或其他回收产出。

- 选定流：回收有机材料
- 流属性/单位：质量 / kg wet matter
- 数量规则：记录回收质量，并另行声明共产品或替代声明。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-citrus-production-guidance`

##### 废物流

###### 送处理或处置的剩余废物（`residual_waste_output`）
没有有记录的回收功能时，剩余废物离开该过程。

- 选定流：剩余废物
- 流属性/单位：质量 / kg wet matter
- 数量规则：记录质量和目的地；无功能证据不得申报回收收益。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售门输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_reject_records`
- 来源：`fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_orchard_cycles` | 建立期和多个周期 | 使用有记录的面积-时间、树年或其他有依据的物理基础分配共享果园负荷，并披露基础。 | `fao-citrus-production-guidance` |
| `allocation_marketable_and_reject_outputs` | 采收和门处理 | 将可销售果实作为参考产出；次品、修剪物和回收材料单独记录，只有真实共产品功能时才分配。 | `fao-citrus-postharvest-guidance`; `globalgap-ifa-fruit-vegetables-v6` |
| `allocation_recovered_residue_claim` | 回收残体 | 只有目的地、功能、数量和接收系统证据齐全时，才申报避免生产。 | `fao-citrus-production-guidance` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `citrus_orchard_establishment` | 种植材料和面积 | 果园登记、种植日志 | block_id；species；cultivar；plants；date；area；tree density | 文件审查和田间核对 | plant、ha、date | 每次事件 | 建立期和分配周期 | 每个地块 | 核对采购、栽植和失败植株 | 供应商批次和登记 |
| `cp_irrigation_records` | `managed_citrus_orchard_cycle` | 灌溉和取水 | 水表和泵日志 | block_id；source；volume；dates；method；allocation | 读数和分配审查 | m3 | 事件或每月 | 完整周期 | 地块和水源 | 汇总并分配共享水表 | 校准水表 |
| `cp_energy_and_fuel_records` | `managed_citrus_orchard_cycle` | 电力和燃料 | 账单和设备日志 | equipment；type；quantity；hours；allocation | 发票和日志审查 | kWh、MJ、L | 每月和领用 | 完整周期 | 果园和门设备 | 按工时、面积或吞吐量分配 | 发票或电表 |
| `cp_nutrient_and_amendment_records` | `citrus_orchard_establishment`, `managed_citrus_orchard_cycle` | 肥料和改良剂 | 采购、施用、标签和计划 | product；mass；N；P2O5；K2O；date；block；area | 记录审查和养分平衡 | kg product 和 nutrient | 每次施用 | 完整周期 | 每个地块 | 汇总产品和养分 | 标签或实验室结果 |
| `cp_crop_protection_records` | `managed_citrus_orchard_cycle` | 病虫害防治 | 喷施日志和采购记录 | product；formulation；active substance；quantity；date；area | 记录核对 | kg 或 L | 每次施用 | 完整周期 | 每个地块 | 汇总产品并披露有效成分 | 标签和签名日志 |
| `cp_harvest_lot_records` | `managed_citrus_orchard_cycle`, `citrus_harvest_and_gate_handling` | 采收和门产出 | 采收单和称重记录 | block_id；lot_id；date；species；cultivar；harvested；marketable；grade；rejects | 称重核对 | kg | 每批 | 全部采收 | 地块和门 | 核对采收、产出、次品和损失 | 称重和追溯 |
| `cp_conditioning_and_packaging_records` | `citrus_harvest_and_gate_handling` | 水、能源、包装和废水 | 包装日志和发票 | lot_id；water；electricity；material；quantity；wash state；destination | 质量平衡和文件审查 | m3、kWh、kg | 每批或班次 | 门期间 | 每个门 | 分配公用事业和包装 | 计量和发票 |
| `cp_residue_and_reject_records` | `managed_citrus_orchard_cycle`, `citrus_harvest_and_gate_handling`, `citrus_residue_and_reject_routing` | 残体、次品和废物 | 残体日志和去向收据 | source；mass；moisture；destination；treatment；function；date | 称量和去向审查 | kg wet 或 dry matter | 事件或每月 | 完整周期 | 果园和门 | 核对来源、回收和剩余物 | 称量和收据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_cycle_normalization` | 所有过程行 | `normalized amount = recorded amount / marketable gate output * 1,000 kg`。 | 地块记录；日期；门产出 | 归一化数量 | `fao-citrus-production-guidance` |
| `calc_nutrient_basis` | 肥料和改良剂行 | 分开保存产品质量及 N、P2O5、K2O；仅依据声明证据计算。 | 产品质量；养分比例或结果 | 产品和养分数量 | `globalgap-ifa-fruit-vegetables-v6` |
| `calc_soil_emissions` | 土壤排放行 | 对有记录投入采用一个 IPCC 兼容氮方法，并披露因子和换算。 | 氮投入；因子；限定信息 | 基本流数量 | `ipcc-2019-refinement-afolu` |
| `calc_mass_reconciliation` | 采收和门处理 | 核对采收、可销售产出、次品、残体、废水和有记录损失。 | 批次记录；称重；水量平衡 | 质量平衡 | `fao-citrus-postharvest-guidance` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_and_scope` | 所有数据集 | 声明物种、品种、地理位置、地块、路线、树龄、交付门和周期日期。 | 果园和批次登记 |
| `quality_measurement_traceability` | 投入和产出 | 优先使用校准计量、称重、发票、施用日志和去向收据；记录共享分配。 | 原始记录和工作表 |
| `quality_temporal_completeness` | 完整周期 | 覆盖全部采收和施用并识别缺失月份、地块或批次。 | 周期完整性清单 |
| `quality_mass_balance` | 采收和处理 | 核对采收、可销售、拒收、修剪、残体、废水和损失。 | 批次质量平衡 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_qualifiers` | 参考流和数据集 | 缺少物种、地理位置、路线、周期、门、成熟度、等级或处理限定信息时拒绝。 | `fao-citrus-production-guidance`; `globalgap-ifa-fruit-vegetables-v6` |
| `validate_cycle_and_output_reconciliation` | 周期和门产出 | 检查投入属于声明地块和期间，并核对产出、次品、残体和损失与采收记录。 | `fao-citrus-postharvest-guidance` |
| `validate_nutrient_and_emission_basis` | 养分和排放行 | 检查产品质量、养分基准、因子方法和限定信息，防止氮路径重复。 | `ipcc-2019-refinement-afolu` |
| `validate_gate_and_downstream_exclusion` | 边界和使用 | 检查门明确，并排除零售、消费者、下游运输和加工柑橘。 | `globalgap-ifa-fruit-vegetables-v6` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；完成审查和发布控制后可作为 background_dataset |
| downstream_use | 声明农场门或包装场门的新鲜柠檬和酸橙前景农业建模 |
| allowed_use | 保留产品、地理位置、路线、周期、交付门、投入基准、残体去向和质量限定信息时使用 |
| excluded_use | 加工柑橘、零售或消费者阶段、无限定信息的区域替代，或缺少门和周期范围的数据集 |
| required_metadata | PCR id；CPC 引用；产品身份；地理位置；果园范围；路线；树龄；周期日期；交付门；等级；投入；灌溉；残体去向；参考数量和单位 |
| required_quality_disclosure | 时间和场址覆盖、完整性、原始记录比例、分配、质量核对、因子和身份证据缺口 |
| update_trigger | 路线、灌溉、养分方法、周期分配、门处理、包装或排放方法变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-citrus-production-guidance` | official_guidance | FAO 柑橘生产和果园管理指南 | 果园过程、投入、边界和周期披露 |
| `fao-citrus-postharvest-guidance` | extension_guidance | FAO 柑橘采后指南 | 采收、分级、清洗、包装、次品和质量核对 |
| `globalgap-ifa-fruit-vegetables-v6` | standard | GLOBALG.A.P. 果蔬保证要求 | 追溯、投入、水、养分、病虫害防治和质量证据 |
| `ipcc-2019-refinement-afolu` | method_factor | 2019 IPCC AFOLU 修订版 | 管理土壤氮方法和排放路径披露 |
