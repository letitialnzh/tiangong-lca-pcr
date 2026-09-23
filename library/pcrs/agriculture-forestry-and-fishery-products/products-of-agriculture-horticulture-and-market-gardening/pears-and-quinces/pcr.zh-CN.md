---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pears-and-quinces
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 梨和榅桲

## 1. 范围与适用性

本 PCR 覆盖在农场边界交付的新鲜栽培梨和榅桲。纳入多年生果园建园和补植（按声明生产期分配）、年度果园管理、采收，以及交付前的可选场内分选、清洗、冷却或周转箱处理。不包括苗圃生产、加工果品、零售、场外储存和运输、消费，以及声明起始条件前的土地利用变化。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pears-and-quinces |
| classification_refs | CPC 3.0: 01342 Pears and quinces |
| covered_products | 农场边界的新鲜栽培梨和榅桲 |
| excluded_products | 苗圃树苗；野生果实；果汁、苹果酒、干制、罐藏、保藏或其他加工果品；下游物流 |
| representative_product | 新鲜完整梨或榅桲 |
| production_route | 多年生果园管理、采收和条件性农场边界处理 |
| market_state | 声明物种、品种、成熟度、等级和交付状态的新鲜完整果实 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场边界的可销售新鲜梨和榅桲 |
| How much | 1,000 kg 声明交付状态的果实 |
| How well | 符合声明物种、品种、成熟度、等级和目的地要求的完整可销售果实 |
| How long or cycle | 一个果园生产年度，多年生建园在声明生产期内分配 |
| reference_flow_link | `harvest_farm_gate` 的终端可销售果实输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Fresh pears and quinces at farm gate＼ |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种和品种；梨/榅桲比例；地理位置；果园树龄；作物年度；采收期；等级和成熟度；灌溉；产量基准；是否包含处理；次品去向 |

构建前景数据包时，所有必需限定信息必须在元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_declared_hand_off` | 终端果实 | Mass | kg | 按声明交付状态称量接收果实，并保留物种、品种、成熟度、等级和状态基准。 |
| `perennial_area_to_reference` | 果园投入和排放 | activity-specific property | activity-specific unit | 将多年生建园按声明生产期分配，用同年度可销售产量折算到 1,000 kg。 |
| `nutrient_product_and_basis` | 养分和改良剂 | nutrient mass | kg product and kg N, P2O5, or K2O | 记录实际产品并计算养分含量，不合并不同产品。 |
| `mixed_crop_yield_basis` | 梨/榅桲混合区组 | Mass | kg fruit | 能分别记录时分别记录，否则披露质量加权作物比例和分配基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明核算期开始时的已建成或新建果园，树苗、养分、水、能源和植保投入跨入前景边界 |
| starting_condition_role | 受管理梨和榅桲生产的开始 |
| product_classification_scope | 对应 CPC 3.0 01342 的栽培新鲜梨和榅桲 |
| recursive_input_rule | 种植材料是上游苗圃投入，不得回环到本可销售果实 PCR |
| upstream_dataset_requirement | 树苗、养分、改良剂、植保、电力、燃料、灌溉、纳入的包装或周转箱服务及废物处理数据集 |
| disclosure | 果园树龄和生产期、物种/品种比例、面积、土壤、气候、密度、作物年度、产量、灌溉、投入、残余物去向、损失和交付边界 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_to_farm_gate` | 所有数据集 | 纳入果园管理、采收和交付前处理；排除下游运输和加工。 | `fao-good-agricultural-practices` |
| `boundary_perennial_establishment` | 建园和补植 | 仅在声明分配期内纳入，并披露生产寿命和补植率。 | `fao-good-agricultural-practices` |
| `boundary_direct_field_emissions` | 土壤和植保排放 | 使用一种声明的适用方法和与养分核算相同的活动记录。 | `ipcc-2019-refinement` |
| `boundary_post_gate_exclusion` | 下游活动 | 除非明确扩展，否则排除场外储存、运输、分销、零售包装、加工、消费和报废。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `orchard_establishment` | 梨和榅桲果园建园与补植 | 条件性 | 分配期内新植、重植或补植 | 建立多年生生产能力 | 种植面积、树数和分配年度 |
| `orchard_management` | 梨和榅桲年度果园管理 | 必需 | 始终纳入 | 生物生产和田间作业 | 果园面积、年度投入和产量 |
| `harvest_farm_gate` | 采收和农场边界果品处理 | 必需 | 始终纳入；处理须在交付前 | 将树上果实转为可销售果实 | 采收、接收、次品和交付质量 |

### 过程：梨和榅桲果园建园与补植（`orchard_establishment`）

#### 输入

##### 产品流

###### 苗圃树苗和种植材料（`nursery_tree_input`）

记录进入建园或补植的树苗，并保留物种、品种、砧木、树数和种植年度。

- 选定流：Pear or quince nursery tree and planting stock＼
- 流属性/单位：Number of trees / tree; Mass / kg when measured by mass
- 数量规则：记录种植或补植树数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每种植公顷，分配至 1,000 kg 果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-good-agricultural-practices`

###### 农业养分与肥料投入（`orchard_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植公顷，分配至 1,000 kg 果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`
- 来源：`fao-good-agricultural-practices`

###### 建园灌溉（`establishment_irrigation_input`）

记录新植或补植果园区块在建园期间获得的水量，包括计量或计划灌溉；雨养区块应记录为零。

- 选定流：Irrigation water supply
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：建园期水表或灌溉计划体积；雨养区记录零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植公顷，分配至 1,000 kg 果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`

##### 废物流

##### 基本流

###### 果园土地占用（`orchard_land_occupation`）

记录建园期间受管理梨园或榅桲园的土地—时间占用，并将其分配到声明的果实产出。

- 选定流：Managed orchard land occupation
- 流属性/单位：Area-time / m2 year
- 数量规则：面积乘占用时间并分配至果实
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_establishment_records`

#### 输出

##### 产品流

##### 废物流

###### 建园残余物（`establishment_residue_output`）

按材料类别、数量和去向记录建园残余物，区分移除、留存、处理和处置。

- 选定流：Orchard establishment residue＼
- 流属性/单位：Mass / kg
- 数量规则：按类别和去向测量或记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_establishment_records`

##### 基本流

### 过程：梨和榅桲年度果园管理（`orchard_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`orchard_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每年度面积换算到 1,000 kg 果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_activity_records`
- 来源：

###### 灌溉水（`orchard_irrigation_input`）

记录作物年度灌溉事件，并将供水量与受管理果园区块及声明的作物年度核对。

- 选定流：Irrigation water supply
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：汇总灌溉事件并与区组面积核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每年度面积换算到 1,000 kg 果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_activity_records`

###### 植保制剂（`crop_protection_input`）

记录梨或榅桲生产中使用的每种植保制剂及施用事件，包括制剂质量和处理面积。

- 选定流：Crop-protection formulation for pear and quince orchards＼
- 流属性/单位：Mass of formulation / kg
- 数量规则：按产品和事件汇总制剂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每年度面积换算到 1,000 kg 果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_activity_records`
- 来源：`fao-good-agricultural-practices`

###### 果园机械燃料（`orchard_fuel_input`）

根据发票、油罐记录或承包商活动记录果园移动机械消耗的燃料，并保留换算基准。

- 选定流：Mobile agricultural machinery fuel
- 流属性/单位：Volume or mass / L or kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：按发票、油罐或承包商记录换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每年度面积换算到 1,000 kg 果实
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_activity_records`

###### 果园用电（`orchard_electricity_input`）

记录果园作业用电，并将计量或有记录的耗电量分配到果园区块和作物年度。

- 选定流：Electricity supply
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：水表或有记录的区组年度分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每年度面积换算到 1,000 kg 果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_activity_records`

##### 废物流

##### 基本流

###### 生产期土地占用（`production_land_occupation`）

记录生产期果园土地的年度占用，并将土地—时间总量分配到可销售梨和榅桲产出。

- 选定流：Managed orchard land occupation
- 流属性/单位：Area-time / m2 year
- 数量规则：年度面积和占用时间分配至可销售果实
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_activity_records`

#### 输出

##### 产品流

###### 树上果实（`standing_fruit_output`）

按物种或品种记录采收的梨和榅桲质量，在纳入处理前保留作物年度产量基准。

- 选定流：Pears and quinces, harvested fruit＼
- 流属性/单位：Mass / kg
- 数量规则：按物种或品种记录分选前采收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按年度面积并缩放到参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_handling_records`

##### 废物流

###### 修剪物和果园残余物（`pruning_residue_output`）

按数量、干湿基准和去向记录修剪物及果园残余物，并说明所选残余物计算方法。

- 选定流：Pear and quince orchard residue＼
- 流属性/单位：Mass / kg dry or wet basis as declared
- 数量规则：按残余物去向测量或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_and_handling_records`
- 来源：`ipcc-2019-refinement`

##### 基本流

###### 直接氧化亚氮（`direct_n2o_emission`）

根据作物年度氮记录，使用选定的 IPCC 或区域方法计算直接氧化亚氮排放，并记录因子基准。

- 选定流：Nitrous oxide emission to air
- 流属性/单位：Mass / kg N2O
- 数量规则：将选定 IPCC 或区域方法用于年度氮记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_emission_records`
- 来源：`ipcc-2019-refinement`

###### 氨（`ammonia_emission`）

根据产品、施用和区域因子记录计算氨排放，并保留该作物年度采用的方法。

- 选定流：Ammonia emission to air
- 流属性/单位：Mass / kg NH3
- 数量规则：按产品、施用和区域因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_emission_records`
- 来源：`ipcc-2019-refinement`

###### 硝酸盐损失（`nitrate_loss`）

将选定的淋失或径流方法应用于氮和水量平衡记录，计算进入水体或土壤的硝酸盐损失。

- 选定流：Nitrate emission to water or soil＼
- 流属性/单位：Mass / kg nitrate
- 数量规则：将选定淋失或径流方法用于氮和水平衡记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 果实
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_emission_records`
- 来源：`ipcc-2019-refinement`

### 过程：采收和农场边界果品处理（`harvest_farm_gate`）

#### 输入

##### 产品流

###### 处理用电（`handling_electricity_input`）

记录采收或农场边界处理用电，并将计量或批次耗电量分配到接收果实。

- 选定流：Electricity supply
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`electricity-supply`
- 数量规则：按水表或批次分配至接收果实
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接收果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_and_handling_records`

###### 周转箱服务（`reusable_crate_input`）

将周转箱或托盘使用记录为包装功能，包括吞吐量、回收率以及质量或使用次数基准。

- 选定流：Pallet and crate packaging function
- 流属性/单位：Mass or service / kg or use
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`pallet-and-crate-packaging`
- 数量规则：按吞吐量和回收率分配周转箱使用或质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 接收果实
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_and_handling_records`

###### 处理用水（`handling_water_input`）

根据计量或批次记录处理边界内的工艺用水，并与灌溉水区分。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：记录跨越处理边界的水表或批次水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_handling_records`

##### 废物流

###### 次品果（`cull_fruit_output`）

在农场边界处理步骤按批次、数量和去向记录被拒收或剔除的梨和榅桲。

- 选定流：Cull pears and quinces＼
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向测量淘汰质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_handling_records`

##### 基本流

#### 输出

##### 产品流

###### 农场边界可销售梨和榅桲（`marketable_fruit_output`）

按声明交付状态记录接收的梨和榅桲质量，作为终端可销售果实产出。

- 选定流：Fresh pears and quinces at farm gate＼
- 流属性/单位：Mass / kg
- 数量规则：按声明交付状态测量接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：终端输出缩放到 1,000 kg 参考果实
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_handling_records`

##### 废物流

###### 处理残余物和废水（`handling_waste_output`）

在声明的农场边界按材料类别、批次数量和去向记录处理残余物及废水。

- 选定流：Farm-gate fruit-handling waste＼
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按材料类别和去向测量批次数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收果实
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_handling_records`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 果园和处理 | 优先分别记录梨/榅桲区组及处理活动，再分配。 | `iso-14044-2006` |
| `allocation_mixed_pear_quince` | 混合生产 | 无作物特定记录时按年度实测质量分配并披露作物比例。 | `iso-14044-2006` |
| `allocation_orchard_establishment` | 多年生建园 | 在声明生产期内分配建园，投入和输出使用同一期间。 | `fao-good-agricultural-practices` |
| `allocation_cull_and_byproducts` | 次品和共产品 | 尽可能按去向细分；物理细分不可行时，对有记录的有价值共产品使用经济分配。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_establishment_records` | `orchard_establishment` | trees, inputs, land, residues | planting plan, nursery invoice, field log, area record | block_id; species; cultivar; rootstock; tree_count; planting_year; area; inputs; residue_fate | reconcile planting and replacement to blocks and allocation period | tree; ha; kg; m3 | each event | declared allocation period | all included blocks | sum by block, product, destination | maps; invoices; field records |
| `cp_orchard_activity_records` | `orchard_management` | nutrients, irrigation, protection, fuel, electricity, land | invoices, labels, spray log, meter, contractor record | block_id; area; date; product; amount; nutrient_content; water; fuel; electricity | reconcile every input to block and crop year | kg; kg nutrient; m3; L; kWh; ha | each event or meter period | full crop year | all included blocks | sum by physical identity; normalize with yield | invoices; labels; calibrated meters |
| `cp_orchard_emission_records` | `orchard_management` | soil and crop-protection emissions | nutrient balance, soil, weather, drainage, residue, factor record | fertilizer_N; organic_N; residue_N; application_method; soil; climate; drainage; factor_set | calculate each pathway using one declared method | kg N; kg emission; ha | event and annual calculation | full crop year | all included blocks | calculate by block and normalize by yield | factors; model version; balance review |
| `cp_harvest_and_handling_records` | `harvest_farm_gate` | harvest, accepted fruit, culls, energy, water, crates, waste | harvest ticket, scale, batch sheet, meter, crate log | block_id; batch_id; harvest_date; harvested_mass; accepted_mass; cull_mass; species; cultivar; grade; electricity; water; crate_uses; destination | reconcile batches to accepted output | kg; kWh; m3; use | each harvest or batch | harvest and handling period | all included batches | sum accepted fruit, culls, wastes; close mass balance | calibrated scales; quality and meter records |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_orchard_to_reference_flow` | orchard inputs and emissions | crop-year amount per area / same-year yield per area × 1,000 kg | amount; area; accepted fruit mass | amount per 1,000 kg fruit |  |
| `calc_nutrient_content` | fertilizers and amendments | product mass × declared nutrient fraction | product; mass; assay; basis | kg N, kg P2O5, kg K2O | `fao-good-agricultural-practices` |
| `calc_perennial_establishment_allocation` | establishment | total burden × declared productive-period share | establishment amount; productive period | allocated annual amount | `fao-good-agricultural-practices` |
| `calc_managed_soil_emissions` | N2O, ammonia, nitrate | selected factors applied to crop-year activity records | activity; soil/climate; factors | pathway emissions | `ipcc-2019-refinement` |
| `calc_handling_mass_balance` | harvest and handling | harvested input = accepted fruit + culls + waste + measured losses within uncertainty | batch masses; destinations | reconciled outputs |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference and outputs | 确认梨或榅桲物种、品种、作物比例、成熟度、等级和交付状态，不替换为苹果或通用水果。 | orchard, lot, and sales records |
| `dq_temporal_alignment` | all rows | 投入、排放、采收、产量和处理使用同一作物年度；披露代理年度。 | dated field and batch records |
| `dq_perennial_allocation` | establishment | 记录树龄、生产期、补植率和分配期。 | planting maps and orchard records |
| `dq_mass_and_destination` | outputs and waste | 为果实、次品、残余物和废水或固体保留校准质量与去向证据。 | scales and destination tickets |
| `dq_completeness` | process map and flows | 核对每个区组和批次，并区分零、不适用、代理和缺失。 | block roster and reconciliation |
| `dq_identity_resolution` | all identity 证据缺口s | 发布前解析为已验证 UUID，或保留明确未映射覆盖；不得强行使用近似产品身份。 | identity review record |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 终端输出 | 一个终端可销售果实输出缩放后等于 1,000 kg，并声明物种、比例、成熟度、等级和交付限定信息。 |  |
| `validation_orchard_route` | 过程图 | 管理只纳入一次；建园按分配期纳入；处理须发生在交付前。 |  |
| `validation_crop_year_reconciliation` | 果园清单 | 面积、投入、排放、采收、次品、残余物去向和产量属于同一年度和区组。 |  |
| `validation_nutrient_and_emission_basis` | 养分和排放 | 按声明方法和基准核对养分、残余物去向、土壤排放和因子。 | `ipcc-2019-refinement` |
| `validation_handling_mass_balance` | 处理 | 在声明不确定度内核对采收、可销售果实、次品、废物和损失。 |  |
| `validation_flow_identity` | 每个流 | 仅精确 UUID 使用 `fixed`，适用审查 Flow Set 使用 `parameterized`，否则保持未映射覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜梨和榅桲果园及农场边界果实前景数据集 |
| downstream_use | `secondary_dataset`；审查发布后可作为 `background_dataset` |
| allowed_use | 保留作物比例、地理位置、年度、果园分配、交付状态和分配规则的农场边界 LCA |
| excluded_use | 苗圃、加工果品、零售或消费系统，以及省略多年生分配或作物比例限定信息的研究 |
| required_metadata | 物种/品种；作物比例；地理位置；树龄；面积；年度；产量；灌溉；养分/植保记录；边界；次品去向；分配基准披露 |
| required_quality_disclosure | 时间、地理、技术、完整性、计量、不确定性、身份和分配质量 |
| update_trigger | 作物路线、果园指南、作物比例、交付定义、Flow Set taxonomy 或身份映射变化 |

## 11. 数据源

| source_id | type | reference | use |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO good agricultural practices guidance for orchard management and harvest records | 边界、建园、养分和采集规则 |
| `ipcc-2019-refinement` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories | 土壤和残余物排放方法 |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | 分配和共产品处理 |
