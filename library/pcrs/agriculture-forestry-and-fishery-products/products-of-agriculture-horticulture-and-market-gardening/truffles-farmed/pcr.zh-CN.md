---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.truffles-farmed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 栽培松露

## 1. 范围与适用性

本 PCR 适用于在接种宿主植物参与的受管理多年生或林地—果园型共生系统中生产、并在农场交付边界交付的新鲜栽培松露。边界区分宿主建立、受管理种植群落生产、采收，以及为达到声明的新鲜市场状态而在农场边界内进行的条件性准备。本 PCR 适用于雨养或灌溉种植群落、单一场址或多场址汇总，以及采用果园、种植园或受管理林地方式的生产系统。

本 PCR 不适用于野生采集松露、仅作为种植材料出售的苗圃接种宿主植物、宿主木材或果实产品、松露加工食品、保藏、冷冻、干燥、农场交付后的包装、场外储存、运输、分销、零售和消费者使用。若宿主作物或其他产品被有意销售为共产品，应单独记录，并按第 7 节的分配规则处理。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.truffles-farmed |
| classification_refs | CPC 3.0: 01272 Truffles, farmed |
| covered_products | 通过受管理宿主植物共生系统栽培、并在农场交付边界交付的新鲜松露 |
| excluded_products | 野生采集松露；作为苗圃种植材料出售的接种宿主植物；宿主木材、果实或其他共产品；加工、干燥、冷冻、保藏、包装、运输、储存、分销或制备后的松露产品 |
| representative_product | 农场交付边界处的鲜栽培松露（接收状态） |
| production_route | 接种宿主建立、受管理多年生或林地—果园型种植群落、采收，以及条件性农场交付前新鲜产品整理 |
| market_state | 农场交付时的完整新鲜松露，并声明物种或品种、成熟度、附土、含水状态、损伤、分级和整理状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场交付边界处的新鲜栽培松露 |
| How much | 1 kg 接收状态的新鲜松露 |
| How well | 符合所声明物种或品种、成熟度、附土、损伤、分级和整理状态的完整新鲜松露 |
| How long or cycle | 一个声明的生产期间；若数据集采用从摇篮到农场交付的多年生基础，则包括种植群落建立期间 |
| reference_flow_link | 未包含整理时来自 `truffle_harvest` 的最终合格新鲜松露输出；否则来自 `truffle_farm_gate_conditioning` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Truffles, farmed `862ab1a6-8876-46bf-8b73-d3f22280449c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 松露物种或品种；宿主植物物种；生产地理位置；种植群落年龄和建立期间；报告期间；采收量和合格量；成熟度和分级；附土或清洁状态；拒收物和共产品去向 |
| 绑定模式 | fixed |


构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | 参考产品和合格新鲜松露输出 | Mass | kg | 报告农场交付边界处的接收状态质量。单独记录附土、可见水分和分级状态；不得在未声明的情况下将鲜重转换为干重。 |
| `perennial_stand_annualization` | 建立和受管理种植群落投入 | Mass, volume, energy, or activity-specific property | activity-specific unit | 根据有记录的种植群落年龄、生产期间、补植事件和产出记录，将建立投入和共享多年生投入分配到声明的报告期间。不得套用通用寿命或产量。 |
| `nutrient_product_and_basis` | 肥料或土壤改良剂投入 | Product mass and nutrient content | kg product and kg N, kg P2O5, or kg K2O as applicable | 将实际供应产品身份与声明的养分基准作为独立字段保存。单个投入卡片可以包含多个养分或改良剂产品，不要求列举通用肥料清单。 |
| `area_to_reference_conversion` | 按面积记录的建立、管理和采收活动 | Activity-specific property | ha and kg fresh truffle | 用同一场址、同一期间的合格新鲜松露产出对总量除算，再缩放到 1 kg 参考流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接种宿主建立之前的已准备种植地或林地—果园型场址，种植材料和购买的管理投入从此处跨入前景边界 |
| starting_condition_role | 受管理栽培松露生产的起始条件 |
| product_classification_scope | 对应 CPC 3.0 代码 01272 的栽培新鲜松露 |
| recursive_input_rule | 用作生物接种物、种植材料或宿主建立材料的购买或保留松露属于上游投入，不得回接到栽培新鲜松露参考输出；应声明实际接种或种植材料及其来源数据集 |
| upstream_dataset_requirement | 接种宿主材料、苗圃或繁育投入、养分或土壤改良剂产品、灌溉供应、燃料、电力、外包服务以及废物或残余物处理的兼容上游数据集 |
| disclosure | 物种或品种；宿主物种和接种状态；场址地理位置和面积；种植群落年龄；建立和生产期间；补植或死亡事件；管理制度；灌溉；养分或改良剂产品及养分基准；采收方式；产量；分级；附土；拒收物和残余物去向；整理边界；共产品分配 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_establishment_to_farm_gate` | 所有符合要求的数据集 | 纳入接种宿主建立、受管理种植群落维护、采收，以及在声明的农场交付边界之前进行的条件性农场内准备。 | `iso-14044-2006` |
| `boundary_perennial_time_basis` | 多年或多期间种植群落 | 将建立、补植、死亡、管理和采收记录连接到声明的期间，并防止同一投入或产出被重复归因。 | `iso-14044-2006` |
| `boundary_managed_soil_emissions` | 养分、改良剂、残余物和土壤管理记录 | 使用适用于地理区域的方法纳入直接和间接受管理土壤排放，并使用与养分和残余物核算相同的活动数据。 | `ipcc-2019-afolu` |
| `boundary_post_farm_gate_exclusion` | 下游活动 | 排除场外运输、储存、保藏、加工、交付后供应的包装、分销、零售和使用，除非研究明确扩展系统边界。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `truffle_host_establishment` | 接种宿主建立 | required | 新建或重建种植群落时始终纳入；即使记录按年度分配，也保留建立期间 | 建立宿主植物和松露共生关系 | 种植面积、宿主材料、接种或繁育记录、建立年份和补植记录 |
| `truffle_stand_management` | 受管理多年生或林地—果园型种植群落管理 | required | 声明的生产期间始终纳入 | 维护宿主共生种植群落及其土壤、水、植被和服务投入 | 管理面积、报告期间、种植群落年龄、年度投入和新鲜松露生产量 |
| `truffle_harvest` | 新鲜松露采收 | required | 只要松露从受管理种植群落中移出就纳入 | 定位、挖取、收集并核对新鲜松露和采收损失 | 采收量、合格量、拒收量、采收人工或机械以及土壤扰动记录 |
| `truffle_farm_gate_conditioning` | 农场交付前新鲜松露整理 | conditional | 交付前发生刷洗、清洗、分选、分级、冷却或其他准备，且尚未包含在采收记录中 | 将采收松露整理到声明的新鲜市场状态 | 进料量、合格量、拒收量、水、能源和整理记录 |

### 过程：接种宿主建立（`truffle_host_establishment`）

#### 输入

##### 产品流

###### 接种宿主种植材料（`inoculated_host_stock_input`）

当种植材料跨入前景边界时，记录实际宿主物种、接种状态、苗圃或繁育路线、种植数量和补植数量。苗圃材料身份必须与采收松露身份分开。

- 选定流：Inoculated host planting stock (identity 证据缺口)
- 流属性/单位：Mass or item count / kg or item
- 数量规则：按宿主物种和种植区块记录供应并栽植的种植材料数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 hectare，并换算至 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：

###### 农业养分与肥料投入（`truffle_host_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植 hectare，并换算至 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：

##### 废物流

##### 基本流

###### 建立期种植群落土地占用（`establishment_land_occupation`）

记录新建或重建受管理种植群落的占用面积和持续时间。在主写作阶段，土地使用身份保持参数化。

- 选定流：Land occupation, managed perennial or woodland-or-orchard stand
- 流属性/单位：Area-time / m2*a
- 数量规则：种植面积乘以声明的占用持续时间，并分配至报告期间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_establishment_records`
- 来源：`iso-14044-2006`

#### 输出

##### 产品流

###### 已建立的接种宿主种植群落（`established_host_stand_output`）

将已建立的宿主种植群落记录为与种植群落管理之间的内部交接。它不是参考产品，不得计为可销售松露输出。

- 选定流：Established inoculated host stand (identity 证据缺口)
- 流属性/单位：Area or item count / ha or item
- 数量规则：在声明的建立交接点记录已种植且存活的宿主材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：

##### 废物流

###### 建立期死亡或拒收种植材料（`establishment_mortality_waste`）

记录死亡、失败或拒收的种植材料及其去向。失败材料不得转入已建立的种植群落输出。

- 选定流：Establishment mortality or rejected planting stock (identity 证据缺口)
- 流属性/单位：Mass or item count / kg or item
- 数量规则：按去向记录实测死亡量和拒收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：

##### 基本流

### 过程：受管理多年生或林地—果园型种植群落管理（`truffle_stand_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`truffle_stand_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每管理 hectare，并换算至 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stand_management_records`
- 来源：

###### 供应的灌溉水（`stand_irrigation_water_input`）

按区块和报告期间记录施用的灌溉水。雨养生产只有在具有文件化水管理依据时，才记录施用灌溉为零。

- 选定流：Irrigation water supply
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按种植群落区块和报告期间记录计量或计算的施用灌溉水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每管理 hectare，并换算至 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stand_management_records`
- 来源：

###### 种植群落机械燃料（`stand_machinery_fuel_input`）

记录割草、植被管理、修剪、通行、灌溉设备和其他跨越前景边界的机械燃料。

- 选定流：Mobile agricultural machinery fuel
- 流属性/单位：Mass or energy carrier / kg or MJ
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：使用油箱记录、发票、承包商记录或设备活动记录换算，并保留燃料载体身份
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每管理 hectare，并换算至 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_stand_management_records`
- 来源：

###### 种植群落服务用外购电力（`stand_electricity_input`）

当泵、监测、防霜、照明或其他种植群落服务用电跨越前景边界时，记录其电力消耗。

- 选定流：Electricity supply
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按报告期间记录电表、发票或设备记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每管理 hectare，并换算至 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stand_management_records`
- 来源：

##### 废物流

##### 基本流

###### 新种植群落的土地转化（`stand_land_transformation`）

仅当在声明的系统边界内建立种植群落导致既有土地状态发生变化时，记录土地转化。没有转化时，保留有证据支持的零值。

- 选定流：Land transformation for managed perennial or woodland-or-orchard stand
- 流属性/单位：Area / m2
- 数量规则：按转化前和转化后的土地状态记录实测转化面积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stand_management_records`
- 来源：`iso-14044-2006`

#### 输出

##### 产品流

###### 交接至采收的受管理种植群落（`managed_stand_to_harvest`）

记录交接至采收作业的受管理种植群落状态及面积或区块。这是内部产品流交接，不是参考产品。

- 选定流：Managed inoculated host stand (identity 证据缺口)
- 流属性/单位：Area / ha
- 数量规则：记录转入采收期间的管理面积和种植群落区块
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stand_management_records`
- 来源：

##### 废物流

###### 离开边界的修剪物和种植群落残余物（`stand_pruning_residue_waste`）

按去向记录修剪物、死亡材料和其他种植群落残余物。有意销售或作为共产品使用的材料不属于废物，应按分配规则记录。

- 选定流：Stand pruning or residue leaving the foreground boundary (identity 证据缺口)
- 流属性/单位：Mass / kg wet or dry mass as recorded
- 数量规则：按去向和含水基准记录实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stand_management_records`
- 来源：

##### 基本流

###### 受管理土壤氮排放（`managed_soil_nitrogen_emission`）

仅根据采集的养分、改良剂、残余物和相关土壤管理记录计算直接或间接氮排放。在方法和身份复核完成前，排放身份保持证据缺口。

- 选定流：Managed-soil nitrogen emission (identity 证据缺口)
- 流属性/单位：Mass / kg N or kg substance
- 数量规则：根据声明的养分、改良剂、残余物和土壤活动投入按方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_stand_management_records`
- 来源：`ipcc-2019-afolu`

### 过程：新鲜松露采收（`truffle_harvest`）

#### 输入

##### 产品流

###### 采收服务和设备（`truffle_harvest_service_input`）

将外包采收服务、租赁设备或直接运营的采收活动记录为前景服务或活动记录。为避免重复计算，应将已在种植群落管理中记录的燃料和电力分开。

- 选定流：Fresh truffle harvest service (identity 证据缺口)
- 流属性/单位：Mass, time, or service unit / kg, h, or service unit
- 数量规则：按区块和报告期间记录实测采收活动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：

##### 废物流

##### 基本流

###### 采收造成的土壤扰动（`harvest_soil_disturbance`）

只有在土壤移出或扰动跨越声明的环境边界，或所选影响评价方法要求时，才记录采收造成的土壤扰动。没有证据时，不应将普通工具接触转换为土壤排放流。

- 选定流：Soil disturbed or removed during truffle harvest (identity 证据缺口)
- 流属性/单位：Mass / kg soil
- 数量规则：记录与采收作业相关的实测或方法支持的扰动土壤量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：

#### 输出

##### 产品流

###### 采收的新鲜松露（`harvested_fresh_truffle_output`）

记录从种植群落中移出的全部松露质量，包括合格、降级和拒收质量。未包含整理过程时，合格部分为参考流。

- 选定流：Farmed truffle, fresh, harvested (identity 证据缺口)
- 流属性/单位：Mass / kg
- 数量规则：按采收事件、成熟度和分级状态记录实测采收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：采收终端输出缩放至 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：

##### 废物流

###### 采收拒收物和损失（`harvest_reject_waste`）

记录受损、不成熟、受污染或其他被拒收的松露及其去向。拒收质量不得计入合格参考输出。

- 选定流：Harvested truffle rejects and losses (identity 证据缺口)
- 流属性/单位：Mass / kg
- 数量规则：按去向记录未转入合格产品的实测采收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 来源：

##### 基本流

### 过程：农场交付前新鲜松露整理（`truffle_farm_gate_conditioning`）

#### 输入

##### 产品流

###### 用于整理的采收新鲜松露（`conditioning_truffle_input`）

记录进入刷洗、清洗、分选、分级、冷却或其他声明的农场交付前准备过程的采收松露质量。若采收记录已代表农场交付市场状态，则省略此过程。

- 选定流：Farmed truffle, fresh, harvested (identity 证据缺口)
- 流属性/单位：Mass / kg
- 数量规则：记录进入整理作业的实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 整理用水或清洗介质（`conditioning_water_input`）

仅当过程水或清洗介质跨越农场交付前整理边界时记录。应说明水是施用、循环使用、排放，还是已包含在上游服务中。

- 选定流：Process water for fresh-truffle conditioning
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：根据整理用水的水表或批次记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场交付边界处的合格新鲜松露（`farm_gate_fresh_truffle_output`）

记录纳入整理后的合格新鲜松露。声明最终质量、分级、成熟度、附土和整理状态；使用该条件性过程时，该输出是参考输出。

- 选定流：Farmed truffle, fresh, at farm gate (identity 证据缺口)
- 流属性/单位：Mass / kg
- 数量规则：记录整理和分级后的实测合格输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端输出缩放至 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

##### 废物流

###### 整理拒收物和去除土壤（`conditioning_reject_waste`）

记录整理产生的受损、规格外或去除土壤材料及其去向。将可销售的降级产品与废物分开，并保留最终含水基准。

- 选定流：Conditioning rejects and removed soil (identity 证据缺口)
- 流属性/单位：Mass / kg
- 数量规则：按去向和含水基准记录实测拒收或移除质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格新鲜松露
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

##### 基本流

## 7. 分配与共产品处理

按以下顺序应用规则：

1. `allocation_single_primary_output`：将合格新鲜栽培松露作为主要输出。内部宿主种植群落交接和拒收物不是共产品。
2. `allocation_avoid_subdivision`：当独立共产品或服务具有单独计量的交接点时，对建立、种植群落管理、采收和整理进行过程细分。当过程能够直接归属时，避免分配。
3. `allocation_co_product_evidence`：如果宿主木材、果实、修剪物、苗圃材料或其他产品被有意销售或转移为共产品，应声明其数量、质量、去向和交接证据。存在可辩护关系时使用物理因果分配；否则使用明确论证的经济分配或其他符合 ISO 14044 的方法。
4. `allocation_residue_not_product`：除非证据显示存在有意的产品或服务交接，否则将未销售的死亡材料、修剪物、去除土壤、拒收物和损失按去向作为废物或基本流处理。
5. `allocation_period_consistency`：在声明的完整种植群落期间采用一致的分配选择，并与补植、死亡和产出记录核对。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `truffle_host_establishment` | establishment inputs, stand hand-off, mortality, land occupation | planting and nursery record | host species; inoculation status; nursery source; planted items or mass; planted area; establishment date; replacement; mortality; amendment product and nutrient basis | supplier invoices, planting registers, block maps, and field interviews reconciled to planted area | kg, item, ha, m2*a, kg nutrient | each establishment or replacement event | full establishment period and replacement events | each stand block | aggregate by host species, block, and reporting period; retain source records | signed planting records, supplier documents, block map, and survival check |
| `cp_stand_management_records` | `truffle_stand_management` | nutrient or amendment, irrigation, fuel, electricity, soil transformation, soil emissions inputs | stand-period activity record | stand age; area; irrigation meter; product identity; product mass; nutrient basis; fuel; electricity; soil state; residues; management dates | meters, invoices, equipment logs, agronomic records, and method-ready soil or residue inventory | kg product, kg nutrient, m3, kg, MJ, kWh, ha | monthly or per application, reconciled annually | declared reporting period plus linked stand establishment basis | each stand block or contributing site | aggregate by stand block and period after removing duplicates and shared-service double counting | meter or invoice reconciliation, site log, soil plan, and period completeness review |
| `cp_harvest_output_records` | `truffle_harvest` | harvest service, harvested product, rejects, soil disturbance | harvest lot record | harvest date; block; method; labor or service; incoming mass; accepted mass; reject mass; maturity; grade; soil disturbance; destination | weighed lot records and harvest logs reconciled to sales or transfer records | kg, h, service unit | each harvest lot | complete harvest season and declared reporting period | each harvest block | sum lots by block and period; reconcile harvested = accepted + rejected + documented loss | calibrated scale, lot ticket, sales or transfer record, and reject destination |
| `cp_conditioning_records` | `truffle_farm_gate_conditioning` | incoming truffle, water, accepted output, rejects and removed soil | conditioning batch record | batch id; incoming mass; water; energy if applicable; operation; accepted mass; grade; moisture or soil state; rejects; destination | batch sheets, scale records, utility meter, and farm-gate hand-off record | kg, m3, kWh | each conditioning batch | only the included pre-farm-gate conditioning period | conditioning facility or site | aggregate batches and reconcile incoming mass to accepted output and rejects | scale calibration, batch reconciliation, market-state specification, and hand-off record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_scaling` | all inventory rows | `normalized amount = period amount / accepted fresh-truffle output × 1 kg reference flow` | period amount; accepted fresh-truffle output; reference amount | amount per 1 kg accepted fresh truffle | `iso-14044-2006` |
| `calc_perennial_annualization` | establishment and shared stand inputs | Allocate each input to the declared reporting period using documented stand period, establishment period, replacement, and productive output; do not use an unstated universal lifetime. | establishment and stand records; period; output; replacement and mortality | period-attributed inventory amount | `iso-14044-2006` |
| `calc_nutrient_basis` | nutrient or soil-amendment input | `nutrient basis = supplied product mass × declared nutrient fraction`; retain product mass and each declared nutrient basis as separate outputs. | product mass; label, invoice, or supplier nutrient fraction | kg product and kg nutrient basis | `iso-14044-2006` |
| `calc_managed_soil_emissions` | managed-soil nitrogen emission | Apply the selected geographically appropriate method to collected nutrient, amendment, residue, and soil activity records; document factors and avoid counting the same nitrogen source twice. | nutrient basis; residue and soil activity; selected method factors | method-calculated elementary emissions | `ipcc-2019-afolu` |
| `calc_mass_reconciliation` | harvest and conditioning | `incoming mass = accepted output + rejects + documented process loss` for each lot or batch, with moisture and soil state retained. | lot or batch incoming mass; accepted mass; rejects; losses | reconciled mass balance and QA finding | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_boundary` | all datasets | Declare product identity, host species, inoculation status, farm-gate state, boundary processes, and whether conditioning is included. | site description, product specification, and dataset metadata |
| `dq_perennial_time_series` | establishment and stand management | Link multi-year inputs, replacement, mortality, stand age, productive periods, and outputs to an explicit time basis. | stand register, block history, and reporting-period reconciliation |
| `dq_input_reconciliation` | product inputs and services | Reconcile invoices, meters, contractor records, and field logs to the declared blocks and periods; explain missing or zero records. | primary records and reconciliation worksheet |
| `dq_output_mass_balance` | harvest and conditioning | Reconcile harvested, accepted, rejected, and documented loss mass with consistent moisture, soil-adherence, and grading bases. | calibrated scale records, lot tickets, batch sheets, and destination records |
| `dq_emission_method` | elementary emissions | Identify the selected method, geography, factors, activity data, and uncertainty; do not present provisional estimates as measured emissions. | method record, factor reference, and calculation worksheet |
| `dq_identity_evidence` | 证据缺口或参数化流 | 将身份证据缺口保持明确，并在激活或发布前以已验证或经审查的身份替换。 | 身份审查记录和最终数据集回读 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 参考流和终端输出 | 必须恰有一个终端合格新鲜松露输出连接到参考流，并声明其物种或品种、市场状态、质量基准和农场交付边界交接。 | `iso-14044-2006` |
| `validation_process_completeness` | 过程图 | 符合要求的数据集必须明确宿主建立、种植群落管理、采收和条件性整理是否纳入；若省略适用过程，必须给出文件化理由。 | `iso-14044-2006` |
| `validation_period_reconciliation` | 多年生生产 | 每个建立和种植群落投入必须连接到声明的场址、区块、期间和产出基准；补植和死亡记录不得重复计入。 | `iso-14044-2006` |
| `validation_mass_balance` | 采收和整理 | 对每个采收批次或整理批次，进料质量必须在声明的测量容差内与合格产品、拒收物和有记录的损失相平衡。 | `iso-14044-2006` |
| `validation_identity_and_parameterization` | 所有流卡片 | 身份证据缺口必须明确保持证据缺口或参数化；只有在身份复核确认后才可加入精确 fixed 身份，且不得改变该卡片真实的方向、类型或边界含义。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场交付边界处新鲜栽培松露的前景农业生产数据集 |
| downstream_use | 用于过程和 lifecyclemodel 构建的 `secondary_dataset`；只有完成身份、完整性和质量复核后，才可支持 `background_dataset` 用途 |
| allowed_use | 农场交付新鲜松露足迹核算、声明场址和期间的栽培比较研究，以及使用声明农场交付市场状态的下游加工研究 |
| excluded_use | 野生松露采集；没有松露产品交接的苗圃材料生产；加工或保藏松露产品；未经限定的区域平均数据；缺少多年生时间基准或合格产出核对的数据集 |
| required_metadata | CPC 3.0 代码 01272；物种或品种；宿主物种；接种状态；场址和地理位置；种植群落年龄；建立和报告期间；面积；管理路线；投入和养分基准；采收和整理边界；成熟度、分级、土壤状态、含水状态、合格产出、拒收物、残余物和共产品 |
| required_quality_disclosure | 实测字段与计算字段；证据缺口或参数化身份；土壤排放的方法和因子；时间和场址覆盖；数据缺口；分配选择；质量平衡结果；代表性限制 |
| update_trigger | 新的经验证参考或投入身份；宿主或接种路线变化；新的种植群落管理技术；农场交付市场状态变化；土壤排放方法修订；分配决策变化；或有证据表明生产期间和产出基准不再具有代表性 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | 功能单位缩放、边界定义、时间基准披露、分配层级和数据质量规则 |
| `ipcc-2019-afolu` | official_guidance | IPCC 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, Volume 4: Agriculture, Forestry and Other Land Use, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 受管理土壤和残余物相关排放的方法选择及活动数据要求 |
