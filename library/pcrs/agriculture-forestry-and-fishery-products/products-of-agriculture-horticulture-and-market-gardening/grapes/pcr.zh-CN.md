---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.grapes
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 葡萄

## 1. 范围与适用性

本 PCR 适用于受管理多年生葡萄园生产并在农场边界交付的新鲜整粒葡萄。包括在申报作物周期内按年分摊的建园或补植、栽培、植保、灌溉、采收，以及有条件纳入的场内分选或包装。酿酒、制汁、干燥、零售配送和消费者使用不在默认边界内。数据包应声明品种或路线、产品状态、等级或可销售判据、地理位置、作物年度、产量基准以及是否包含包装。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.grapes |
| classification_refs | CPC 3.0 01330, exact |
| covered_products | 受管理葡萄园的新鲜葡萄；品种和产品状态需声明，可包括鲜食、酿酒、制汁、葡萄干及其他路线 |
| excluded_products | 葡萄酒、果汁、干葡萄、浓缩物、葡萄籽产品、零售服务和非管理采集 |
| representative_product | 农场边界新鲜整粒葡萄 |
| production_route | 多年生葡萄园建园或补植、管理栽培、采收及有条件的场内处理 |
| market_state | 农场边界新鲜整粒葡萄，按声明为散装或包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明产品状态在农场边界交付的新鲜整粒葡萄 |
| How much | 1 kg 可销售新鲜葡萄 |
| How well | 品种或路线、产品状态、质量或等级、测量时的水分或成熟度，以及声明的用途路线 |
| How long or cycle | 一个申报葡萄园作物周期；建园和补植按声明的生产寿命分摊 |
| reference_flow_link | `fresh_grapes_farm_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 农场边界新鲜整粒葡萄＼ |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或产品路线；散装或包装状态；等级或可销售判据；农场边界位置；作物年度；产量基准 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品和质量流 | Mass＼ | kg | 可销售产出和质量库存采用一致的新鲜产品基准；明确水分或干物质换算。 |
| `measurement_yield_basis` | 栽培和采收 | Mass | kg fresh grapes/ha and kg/crop cycle | 在归一化前分别记录采收量、可销售量、次品量和保留使用量。 |
| `measurement_nutrient_basis` | 肥料和土壤改良剂总卡片 | Nutrient or product mass | kg product and kg N, P2O5, or K2O | 记录实际产品及养分分析；不得从通用产品名称推断养分量。 |
| `measurement_water_basis` | 灌溉和处理用水 | Volume or mass | m3 or kg | 区分计量或计算得到的施用灌溉量与降雨。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 作物周期开始时已建立的葡萄园土壤和多年生藤本；在申报分摊期间发生的补植纳入 |
| starting_condition_role | 前景农业生产；购入种苗、养分、农药、燃料、电力、包装和水作为上游投入，除非直接采集 |
| product_classification_scope | CPC 3.0 01330 grapes；必须声明路线和市场状态 |
| recursive_input_rule | 同类葡萄投入作为已识别的内部转移记录，不递归替代参考产出 |
| upstream_dataset_requirement | 为购入投入使用有记录的背景数据集，并披露地理、技术和时间代表性 |
| disclosure | 披露面积、藤龄或建园年份、品种或路线、灌溉制度、作物年度、产量、可销售判据、产品状态和有条件的包装作业 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_grape_farm_gate` | 所有过程 | 纳入管理葡萄园生产至声明的新鲜葡萄农场边界交付；除非明确扩展，否则排除下游加工和配送。 | `iso-14044-2006` |
| `boundary_perennial_annualization` | 建园和补植 | 按声明的生产寿命分摊建园、棚架和补植负荷，并披露分摊基准。 | `iso-14044-2006` |
| `boundary_background_inputs` | 购入投入 | 纳入投入至交付的上游供应，同时在葡萄园边界记录前景施用和使用。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `vineyard_establishment_replanting` | 葡萄园建园和补植 | conditional | 申报分摊期间发生建园、换藤、棚架安装或移除时纳入。 | 建立或更新多年生生产资产。 | 每生产性公顷、每作物周期 |
| `vineyard_cultivation_harvest` | 葡萄园栽培和采收 | required | 始终纳入。 | 管理藤本和土壤、施用投入、采收并量化产出和损失。 | 每 kg 可销售产品 |
| `farm_gate_sorting_packing` | 农场边界分选和包装 | conditional | 声明交付包含场内分选、冷却、包装或短期储存时纳入。 | 调整并交付声明的市场状态。 | 每 kg 包装或散装产品 |

### 过程：葡萄园建园和补植（`vineyard_establishment_replanting`）

#### 输入

##### 产品流

###### 葡萄种苗（`vine_planting_material_input`）

记录跨越建园边界的购入或内部繁育藤苗、嫁接苗和补植材料。

- 选定流：Grapevine planting material
- 流属性/单位：Mass or item count / kg or item
- 数量规则：记录实际种苗数量；只有在有依据时才进行数量到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产性公顷并按申报作物周期分摊
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_vineyard_establishment_records`
- 来源：

###### 建园机械燃料（`establishment_fuel_input`）

记录整地、栽植、棚架作业和移除藤本使用的燃料。

- 选定流：Mobile machinery fuel
- 流属性/单位：Mass or energy carrier / kg or MJ
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：按建园活动分配计量燃料或承包商记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产性公顷并按申报作物周期分摊
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_vineyard_establishment_records`
- 来源：

###### 建园灌溉水（`establishment_irrigation_input`）

记录新建或补植藤本施用的水量。

- 选定流：Irrigation water supply
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则：水表、灌溉计划或有记录的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产性公顷并按申报作物周期分摊
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_vineyard_establishment_records`
- 来源：`fao-56-crop-evapotranspiration`

##### 基本流

###### 建园土地占用（`establishment_land_occupation`）

记录建园或补植的占地面积、时间及土地状态变化。

- 选定流：Land occupation
- 流属性/单位：Area-time / m2 year
- 数量规则：面积乘占用时间并按作物周期分摊
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产性公顷并按申报作物周期分摊
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_vineyard_establishment_records`
- 来源：`iso-14044-2006`

#### 输出

##### 废物流

###### 移除的藤本和棚架材料（`removed_vine_material_waste`）

按去向记录移除的藤本、旧棚架组件和建园残余物。

- 选定流：Non-hazardous agricultural waste
- 流属性/单位：Mass / kg
- 数量规则：按去向称量或核算移除材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每生产性公顷并按申报作物周期分摊
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_vineyard_establishment_records`
- 来源：

### 过程：葡萄园栽培和采收（`vineyard_cultivation_harvest`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`vineyard_cultivation_harvest_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_input_records`
- 来源：`ipcc-2019-refinement-vol4`

###### 施用灌溉水（`crop_irrigation_input`）

按葡萄园区块和作物周期记录灌溉量；旱作区有证据时记录为零。

- 选定流：Irrigation water supply
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则：按区块和作物周期计量或计算灌溉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_input_records`
- 来源：`fao-56-crop-evapotranspiration`

###### 养分和采收机械燃料（`field_machinery_fuel_input`）

记录耕作、割草、喷施、修剪、采收和田间运输燃料。

- 选定流：Mobile machinery fuel
- 流属性/单位：Mass or energy carrier / kg or MJ
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- 数量规则：按有记录的燃料使用或承包商活动计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_input_records`
- 来源：

###### 植物保护产品（`crop_protection_input`）

按实际产品、有效成分、剂量和施用事件记录杀菌剂、杀虫剂、除草剂、生物防治剂和助剂。

- 选定流：Crop-protection product
- 流属性/单位：Product mass or volume / kg or L
- 数量规则：按区块和作物周期汇总实际施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_input_records`
- 来源：`fao-pesticide-management-code-2014`

##### 基本流

###### 葡萄园土地占用（`crop_land_occupation`）

记录作物周期内生产性葡萄园面积和占用时间。

- 选定流：Land occupation
- 流属性/单位：Area-time / m2 year
- 数量规则：栽培面积乘作物周期占用时间
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_input_records`
- 来源：`iso-14044-2006`

#### 输出

##### 产品流

###### 送往处理的采收鲜葡萄（`harvested_grapes_to_conditioning`）

记录送往处理的采收量；未纳入处理时记录直接送往农场边界交付的数量。

- 选定流：Fresh harvested grapes for farm-gate conditioning
- 流属性/单位：Mass / kg
- 数量规则：称量批次并与可销售量、次品及保留或损失量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期并换算为 1 kg 可销售新鲜葡萄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：

###### 农场边界新鲜整粒葡萄（`fresh_grapes_farm_gate_output`）

葡萄以散装农场边界产品离开葡萄园时使用；纳入处理时转入处理过程。

- 选定流：Fresh whole grapes at farm gate
- 流属性/单位：Mass / kg
- 数量规则：声明交付点的可销售鲜葡萄质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期并换算为 1 kg 可销售新鲜葡萄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：

##### 废物流

###### 葡萄园采收残余和次品（`harvest_residue_culls`）

按去向核对未作为声明产品销售的果穗、果粒、果梗及其他采收物。

- 选定流：Non-hazardous agricultural waste
- 流属性/单位：Mass / kg
- 数量规则：总采收量减可销售产品和声明的保留使用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期并换算为 1 kg 可销售新鲜葡萄
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_and_yield_records`
- 来源：

##### 基本流

###### 排放至环境空气的氧化亚氮（`soil_n2o_air_output`）

根据氮、残体、土壤和排水记录计算直接及适用的间接氧化亚氮。

- 选定流：Nitrous oxide emission to ambient air
- 流属性/单位：Mass / kg N2O
- 数量规则：对采集活动数据应用声明的方法和因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄
- 基准类型：氮输入（`n_input`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_records`
- 来源：`ipcc-2019-refinement-vol4`

###### 排放至环境空气的氨（`soil_ammonia_air_output`）

根据养分产品、施用方法、天气和适用因子方法计算氨挥发。

- 选定流：Ammonia emission to ambient air
- 流属性/单位：Mass / kg NH3
- 数量规则：根据氮施用记录和声明方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄
- 基准类型：氮输入（`n_input`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_records`
- 来源：`ipcc-2019-refinement-vol4`

###### 排放至水体的硝酸盐（`soil_nitrate_water_output`）

仅在有监测平衡、适用模型或经过审查的方法支持时记录硝酸盐淋失或径流。

- 选定流：Nitrate emission to water
- 流属性/单位：Mass / kg nitrate
- 数量规则：根据氮输入、土壤、排水和声明方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每栽培公顷并换算为 1 kg 可销售新鲜葡萄
- 基准类型：氮输入（`n_input`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emission_records`
- 来源：`ipcc-2019-refinement-vol4`

### 过程：农场边界分选和包装（`farm_gate_sorting_packing`）

#### 输入

##### 产品流

###### 接收的采收葡萄（`conditioning_grape_input`）

记录进入场内分选、冷却、包装或短期储存的批次。

- 选定流：Fresh harvested grapes for farm-gate conditioning
- 流属性/单位：Mass / kg
- 数量规则：在处理交接点称量入料批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每批次并换算为 1 kg 包装农场边界葡萄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 包装材料（`packaging_material_input`）

记录实际使用的纸箱、托盘、薄膜、周转箱、托盘及其他包装，单独记录可重复使用包装的回收。

- 选定流：Packaging function
- 流属性/单位：Mass / kg packaging
- 绑定模式：`parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `carton-and-box-packaging`
- 数量规则：按包装批次计数或称量，扣除有记录的可重复使用回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次并换算为 1 kg 包装农场边界葡萄
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 处理用水（`conditioning_water_input`）

仅记录声明处理边界内清洁或接触产品表面的用水。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 数量规则：处理批次的水表或清洁记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每批次并换算为 1 kg 包装农场边界葡萄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 分选和冷却用电（`conditioning_electricity_input`）

记录声明处理边界内分选、冷却、称量和包装设备用电。

- 选定流：Electricity supply
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：分表、设备记录或有依据的场站电量分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每批次并换算为 1 kg 包装农场边界葡萄
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：

#### 输出

##### 产品流

###### 农场边界包装鲜葡萄（`packed_grapes_farm_gate_output`）

记录处理过程离开的可销售包装葡萄；声明为散装交付时本行不适用。

- 选定流：Fresh whole grapes at farm gate, packed state
- 流属性/单位：Mass / kg
- 数量规则：在声明交付点称量可销售包装批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次并换算为 1 kg 包装农场边界葡萄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

##### 废物流

###### 处理次品和损伤葡萄（`conditioning_culls_waste`）

记录分选或包装移除的葡萄并声明各去向。

- 选定流：Non-hazardous agricultural waste
- 流属性/单位：Mass / kg
- 数量规则：入料质量减包装产出和其他声明去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每批次并换算为 1 kg 包装农场边界葡萄
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 使用后的包装和清洁废物（`conditioning_waste_output`）

按材料和去向记录一次性包装损失及非危险清洁废物。

- 选定流：Non-hazardous waste
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向称量或核算废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每批次并换算为 1 kg 包装农场边界葡萄
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_grape_outputs` | 采收葡萄、可销售葡萄、次品和保留使用残余物 | 将总采收量核对至可销售产品、共产品、保留使用和废物；仅在功能和质量可比时使用质量分配，否则记录有依据的方法。 | `iso-14044-2006` |
| `allocation_perennial_asset` | 建园、棚架和补植 | 按声明的生产寿命和面积分配多年生资产负荷，并披露同时存在的作物或土地用途。 | `iso-14044-2006` |
| `allocation_packing_losses` | 有条件的分选和包装 | 使用实测质量平衡将处理投入归属于包装产品、次品和其他输出，除非有经过审查的替代方法。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_vineyard_establishment_records` | `vineyard_establishment_replanting` | 种苗、燃料、灌溉、土地、移除材料 | 苗木发票、地图、燃料和灌溉记录 | 面积、品种、藤数、日期、燃料、水、材料、去向 | 采集农场和承包商记录并与区块面积核对 | kg, item, m3, L, m2 year | 每次事件 | 建园期按作物周期分摊 | 葡萄园区块 | 按区块汇总并按生产寿命分摊 | 发票、地图、水表、收据 |
| `cp_field_input_records` | `vineyard_cultivation_harvest` | 肥料、灌溉、燃料、植保、土地 | 发票、施用日志、水表、地图 | 产品、配方、养分、剂量、日期、面积、水、燃料、有效成分 | 逐次采集并仅用有依据的因子换算 | kg, kg nutrient, m3, L, m2 year | 每次施用和每作物周期 | 一个作物年度 | 区块和农场 | 按区块和周期汇总 | 发票、标签、水表、施用记录 |
| `cp_field_emission_records` | `vineyard_cultivation_harvest` | 土壤排放 | 氮台账、残体、土壤和排水记录 | 养分、残体、土壤、天气、排水、因子方法 | 检查适用性后计算 | kg N2O, kg NH3, kg nitrate | 每作物周期 | 一个作物年度 | 区块或申报模型区域 | 一致应用方法 | 因子来源和计算表 |
| `cp_harvest_and_yield_records` | `vineyard_cultivation_harvest` | 采收葡萄、产出、次品 | 采收票据和称量记录 | 采收量、可销售量、等级、次品、去向、日期 | 称量批次并核对全部去向 | kg | 每批次和作物周期 | 一个采收季 | 区块、批次和农场 | 汇总批次并报告产量 | 校准秤和票据 |
| `cp_conditioning_records` | `farm_gate_sorting_packing` | 入料、包装、水、电、产出、废物 | 包装、能源、库存和废物记录 | 入料、包装、数量、水、kWh、产出、次品、废物 | 采集批次记录并核对质量平衡 | kg, item, m3, kWh | 每批次或批量 | 包装季 | 场内处理点 | 按包装产出汇总 | 称量、发票、公用工程、收据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all rows | 归一化数量 = 报告数量 / 可销售鲜葡萄产出；保留原始数量和基准 | 流数量、可销售产出、换算 | 每 kg 参考流的数量 | `iso-14044-2006` |
| `calc_perennial_annualization` | establishment | 年化负荷 = 事件负荷 × 作物周期占声明生产寿命的比例 | 事件量、寿命、周期、面积 | 作物周期负荷 | `iso-14044-2006` |
| `calc_nutrient_basis` | fertilizer total | 按养分和施用事件计算养分量 = 产品质量 × 声明养分比例之和 | 产品质量和养分比例 | kg 产品及 kg N、P2O5 或 K2O | `ipcc-2019-refinement-vol4` |
| `calc_mass_balance` | harvest and conditioning | 入料或采收量 = 可销售产出 + 共产品或保留使用 + 废物和损失 | 称量和去向记录 | 核对后的数量 | `iso-14044-2006` |
| `calc_soil_emissions` | soil emissions | 对记录的养分、残体、土壤和排水输入应用所选地理因子或模型 | 活动台账和方法 | 排放量 | `ipcc-2019-refinement-vol4` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity_route` | all datasets | 声明路线、产品状态、等级、位置、作物年度和可销售判据。 | 农场规格和元数据 |
| `quality_mass_reconciliation` | harvest and conditioning | 核对产品、次品、保留使用和废物并调查残差。 | 称、票据、包装日志 |
| `quality_input_completeness` | cultivation and establishment | 覆盖养分、植保、水、燃料、电力、种苗和面积记录。 | 发票、日志、水表、地图 |
| `quality_temporal_geography` | all processes | 报告作物年度、区块或区域、技术、灌溉和异常事件。 | 农场记录和问卷 |
| `quality_method_disclosure` | emissions and annualization | 披露因子、寿命假设、分配、缺失数据和替代数据。 | 计算表和来源 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | reference flow | 缺少路线、产品状态、位置、作物年度或可销售判据时拒绝数据集。 | `iso-14044-2006` |
| `validation_yield_mass_balance` | harvest and conditioning | 在有记录的容差内检查采收或入料质量与产出和损失的一致性。 | `iso-14044-2006` |
| `validation_nutrient_traceability` | fertilizer | 每个养分总量必须可追溯至实际产品和声明的养分基准。 | `ipcc-2019-refinement-vol4` |
| `validation_period_annualization` | perennial establishment | 检查生产寿命已声明，并防止建园负荷在每个周期重复计入。 | `iso-14044-2006` |
| `validation_conditional_packing` | conditioning | 仅在声明交付包含场内处理时纳入包装，否则栽培过程提供参考产出。 | `iso-14044-2006` |
| `validation_emission_method` | soil emissions | 每项排放应识别因子或模型、输入基准、地理范围和时间适用性。 | `ipcc-2019-refinement-vol4` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜葡萄生产的 secondary_dataset；在披露代表性时允许作为 background_dataset |
| downstream_use | 前景农业清单以及食品或饮料产品系统 |
| allowed_use | 在声明边界和产品状态内建模新鲜葡萄生产路线 |
| excluded_use | 直接替代葡萄酒、果汁、干葡萄、浓缩物、零售、消费者使用或未声明路线 |
| required_metadata | 路线、品种、农场边界状态、地理、作物年度、藤龄、产量、灌溉、包装、分配和参考产品限定信息 |
| required_quality_disclosure | 投入完整性、质量平衡、因子、生产寿命假设、缺失数据和 QA 结果 |
| update_trigger | 路线、养分或植保方法、灌溉、包装边界、分类解释或审查方法变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `iso-14044-2006` | standard | ISO 14044:2006, https://www.iso.org/standard/38498.html | 边界、年化、分配、核算和平衡校验 |
| `fao-56-crop-evapotranspiration` | official_guidance | FAO Irrigation and drainage paper 56, https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉采集和水平衡 |
| `ipcc-2019-refinement-vol4` | method_factor | 2019 IPCC Refinement, Volume 4, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 土壤排放计算和养分基准 |
| `fao-pesticide-management-code-2014` | official_guidance | FAO/WHO International Code of Conduct on Pesticide Management, https://www.fao.org/3/i3604e/i3604e.pdf | 植保产品可追溯性 |
