---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.oranges
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 橙子

## 1. 范围与适用性

本 PCR 覆盖受管理柑橘果园中的鲜食整橙，从声明的建植或生产周期起点至声明的农场出场状态。可纳入前景记录中的分选、清洗和农场端临时保护。必须声明品种、砧木、果园树龄、生产路线、地区、成熟度、等级和合格产量基准。

本 PCR 不覆盖橙汁、浓缩汁、精油、干制或蜜饯橙、零售配送、消费者使用和下游加工；除非另行声明，农场出场后的运输也不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.oranges |
| classification_refs | CPC 3.0:01323 |
| covered_products | 受管理柑橘果园生产的鲜食整橙 |
| excluded_products | 橙汁、浓缩汁、精油、干制或保存橙、零售或消费者即食产品、农场出场后的运输 |
| representative_product | 在声明农场出场点验收的鲜食整橙 |
| production_route | 多年生柑橘果园建植、栽培、采收以及可选的农场端分选或包装 |
| market_state | 已声明成熟度和等级、在农场出场点验收的鲜食整橙 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在农场出场点验收的鲜食整橙 |
| How much | 1 kg 合格橙 |
| How well | 已知时的品种、砧木或果园路线、成熟度、等级、含水状态和农场出场质量 |
| How long or cycle | 一个声明的生产年度或生产周期；声明果园建植和结果年限 |
| reference_flow_link | `reference_flow_oranges_farm_gate` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 农场出场的鲜食整橙＼ |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 橙子品种；已知时的砧木；地区；果园树龄和生产路线；生产年度或生产周期基准；成熟度和等级；合格产量；农场出场状态；拒收品和副产品；采后去向 |

参考产品身份保持 证据缺口，直到获得经核验的平台身份；这不改变参考流语义或产品边界。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和产品输出归一化 | 质量 | kg | 将清单归一化为声明农场出场点 1 kg 合格整橙。 |
| `perennial_time_basis` | 果园建植和结果期栽培 | 面积时间和合格产出 | ha year；kg | 声明结果年限，并将建植、更新和非结果期投入按结果期和合格产量分配。 |
| `nutrient_product_and_basis` | 肥料和土壤改良剂投入 | 产品质量和养分基准 | kg product；kg N、P2O5 或 K2O | 记录每个实际产品及产品质量，保留产品分析，并根据产品量计算养分质量，不以养分质量替代产品投入质量。 |
| `water_measurement_basis` | 灌溉和水源取水 | 体积 | m3 | 优先使用水表或供水记录；区分施用灌溉水和水源取水；无法直接计量时披露水量平衡方法。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 受管理果园土地或声明的建植事件进入生产系统；若不包含建植，则将现有果园声明为起点 |
| starting_condition_role | 多年生农业生产前景起点，并披露果园树龄、土地历史和建植分配 |
| product_classification_scope | CPC 3.0:01323 鲜食整橙 |
| recursive_input_rule | 仅在同类种植材料跨越前景边界时记录外购或转入材料；自繁材料需要披露来源和分配，而不是递归替代产品 |
| upstream_dataset_requirement | 对非前景作业的苗木、肥料、土壤改良剂、植保产品、能源、包装和承包服务使用上游数据集 |
| disclosure | 声明品种、路线、果园树龄、是否包含建植、结果年限、生产周期或果园年度基准、合格产量、农场出场状态和拒收果去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_condition` | 所有过程 | 从声明的果园建植或生产年度条件开始，纳入至合格农场出场橙的前景投入、资源使用、排放、采收和产品输出；排除零售、消费者使用和下游加工。 | `fao-good-agricultural-practices`、`codex-fresh-fruits-vegetables-cxc-53` |
| `boundary_perennial_disclosure` | 建植和栽培 | 声明果园树龄、结果年限、更新或补植，以及是否包含建植；没有分配计算时不得混合年度和多年生时间基准。 | `fao-good-agricultural-practices` |
| `boundary_recursive_input` | 种植材料 | 在外购或转入种植材料实际跨越边界的位置记录；若材料自繁，则披露亲本材料和分配。 | `fao-good-agricultural-practices` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p01323_orchard_establishment` | 柑橘果园建植与更新 | conditional | 当种植、嫁接、场地准备、更新或建植投入对声明生产期有贡献时纳入。 | 建植和多年生时间基准节点 | 每单位建植面积并分配至果园年度合格产出 |
| `p01323_orchard_cultivation` | 橙园栽培 | required | 纳入声明生产年度或生产周期的田间和果园管理。 | 受管理生物生产节点 | 每果园年度和 1 kg 合格橙 |
| `p01323_harvest_farm_gate` | 橙子采收与农场端处理 | required | 当存在时纳入采收、场内分选或清洗、临时保护和农场端包装。 | 采收和交付节点 | 每采收和合格橙质量 |

### 过程：柑橘果园建植与更新（`p01323_orchard_establishment`）

#### 输入

##### 产品流

###### 提供橙树种植或嫁接材料（`orange_planting_material_input`）

记录苗木、砧木、嫁接材料或其他种植材料进入果园建植的边界。声明材料是外购、转入还是自繁，并保留数量到质量或件数基准的换算。

- 选定流：果园建植用橙树种植或嫁接材料
- 流属性/单位：质量或件数 / kg or item
- 数量规则：按地块和建植年度计量植物数量和类型；需要时计算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每单位建植面积并分配至 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-good-agricultural-practices`

###### 农业养分与肥料投入（`p01323_orchard_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位建植面积并分配至 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-good-agricultural-practices`; `ipcc-2019-refinement-agriculture`

##### 废物流

###### 建植和更新残余物至声明去向（`orange_establishment_residue`）

记录移除植被、失败植株、砧木残余物和其他建植生物质离开建植过程的情况。保留作覆盖物或堆肥的材料应标明内部去向。

- 选定流：柑橘建植生物质残余物至声明去向
- 流属性/单位：质量 / kg 原状或 kg 干物质
- 数量规则：按地块和事件计量或计算残余物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位建植面积并分配至 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-good-agricultural-practices`

##### 基本流

###### 建植期果园土地占用（`orange_establishment_land_occupation`）

记录果园建植期间占用的面积和持续时间，包括声明边界内的非结果期。

- 选定流：柑橘果园生产的土地占用
- 流属性/单位：面积时间 / m2*a 或 ha year
- 数量规则：果园面积乘以声明占用时间，并分配至合格橙产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位建植面积并分配至 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-good-agricultural-practices`

#### 输出

##### 产品流

###### 已建成果园能力转入栽培（`orange_established_orchard_capacity`）

仅在建植被单独建模时记录该内部交接；它不是可销售橙产品。

- 选定流：已建成的柑橘果园生产能力
- 流属性/单位：面积或生产能力 / ha or orchard-year
- 数量规则：记录建植完成和生产期分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：关联声明的果园年度合格橙产出
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_establishment_records`
- 来源：`fao-good-agricultural-practices`

##### 废物流

##### 基本流

### 过程：橙园栽培（`p01323_orchard_cultivation`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`p01323_orchard_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年度和 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-good-agricultural-practices`; `ipcc-2019-refinement-agriculture`

###### 施用灌溉水（`orange_irrigation_water_input`）

记录施加到果园的灌溉水，并区分降雨和水源取水，声明计量或水量平衡方法。

- 选定流：灌溉水供应
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：使用水表、供水记录或有文件依据的果园水量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年度和 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-good-agricultural-practices`

###### 移动机械燃料和田间能源（`orange_cultivation_energy_input`）

记录除草、喷施、修剪和田间运输等果园作业使用的燃料或移动机械能源。

- 选定流：农业移动机械燃料或能源供应
- 流属性/单位：能源或燃料质量 / MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：燃料领用记录、带有文件依据燃料因子的机械小时记录或承包商发票分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年度和 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-good-agricultural-practices`

###### 施用植保制剂（`orange_crop_protection_input`）

记录实际施用的制剂名称、有效成分、用量、处理面积和施用事件。

- 选定流：橙园植保制剂
- 流属性/单位：产品质量 / kg product
- 数量规则：将产品发票、喷施日志或承包商记录与处理面积核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每果园年度和 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-good-agricultural-practices`

##### 废物流

###### 修剪和果园残余物至声明去向（`orange_pruning_residue`）

记录修剪枝条和其他果园残余物离开前景系统的情况，并声明覆盖、焚烧、堆肥、处理或移除去向。

- 选定流：柑橘果园残余物至声明去向
- 流属性/单位：质量 / kg 原状或 kg 干物质
- 数量规则：称量残余物、体积到质量换算或修剪记录中的有依据比例
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年度和 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-good-agricultural-practices`

##### 基本流

###### 结果期果园土地占用（`orange_cultivation_land_occupation`）

记录占用的果园面积和用于归一化的结果年度时长。

- 选定流：柑橘果园生产的土地占用
- 流属性/单位：面积时间 / m2*a 或 ha year
- 数量规则：果园面积乘以结果年度时长
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年度和 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`fao-good-agricultural-practices`

#### 输出

##### 基本流

###### 受管理果园土壤的直接氧化亚氮排放（`orange_soil_n2o_emission`）

根据施用氮和声明的排放方法计算受管理土壤直接排放，并单独保留施用养分基准。

- 选定流：受管理果园土壤向空气排放的氧化亚氮
- 流属性/单位：质量 / kg N2O 或 kg N2O-N
- 数量规则：根据采集氮投入和声明的排放方法计算，或使用现场测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年度和 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`ipcc-2019-refinement-agriculture`

###### 果园土壤的氮径流或淋失（`orange_nitrogen_water_emission`）

当数据包根据养分和水量平衡计算时，记录向受纳水体或土壤排放的硝酸盐或其他氮损失。

- 选定流：受管理果园土壤向声明受纳环境排放的氮
- 流属性/单位：报告氮物种质量 / kg 物质或 kg N
- 数量规则：现场测量，或根据采集的养分和水量平衡记录进行方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每果园年度和 1 kg 合格橙
- 基准类型：生产周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_01323_cultivation_records`
- 来源：`ipcc-2019-refinement-agriculture`

### 过程：橙子采收与农场端处理（`p01323_harvest_farm_gate`）

#### 输入

##### 产品流

###### 采收能源和田间运输服务（`orange_harvest_energy_input`）

记录跨越前景边界的采收机械燃料、电力或承包采收能源；农场出场后的运输与本卡片分开。

- 选定流：采收能源供应或移动机械燃料
- 流属性/单位：能源或燃料质量 / MJ 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：采收日志、燃料领用记录、机械小时因子或承包商分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每采收和合格橙质量
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_harvest_records`
- 来源：`fao-good-agricultural-practices`

###### 农场端包装功能（`orange_packaging_input`）

仅当包装跨越声明的农场端处理边界时记录箱、纸箱、托盘或其他包装，并声明重复使用、回收和损耗假设。

- 选定流：农场端包装功能
- 流属性/单位：质量或包装件数 / kg 或 item
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- 数量规则：以合格橙产量归一化包装领用记录，并记录重复使用次数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每采收和合格橙质量
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_harvest_records`
- 来源：`codex-fresh-fruits-vegetables-cxc-53`

##### 废物流

###### 采收拒收品和果实损失至声明去向（`orange_harvest_rejects`）

记录采收、分选、清洗或农场端检验中被拒收的橙子，并标明饲料、堆肥、处理、丢弃或其他产品路线。

- 选定流：拒收或损失橙子至声明去向
- 流属性/单位：质量 / kg
- 数量规则：称量拒收品，或根据采收量、合格量和去向数量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每采收和合格橙质量
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_harvest_records`
- 来源：`codex-fresh-fruits-vegetables-cxc-53`

##### 产品流

###### 农场出场的合格鲜橙（`orange_farm_gate_product`）

记录符合声明农场出场成熟度、等级和质量限定信息的整橙合格产出。这是唯一的参考产品输出。

- 选定流：农场出场的鲜食整橙＼
- 流属性/单位：质量 / kg
- 数量规则：在采收以及纳入的农场端处理之后称量合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 农场出场合格橙
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01323_harvest_records`
- 来源：`fao-good-agricultural-practices`、`codex-fresh-fruits-vegetables-cxc-53`

#### 输出

##### 基本流

###### 农场端处理排放（`orange_farm_gate_emissions`）

仅当清洗、处理或现场燃烧在声明边界内时记录直接排放，并保留受纳环境和污染物身份。

- 选定流：农场端处理向声明受纳环境的排放
- 流属性/单位：报告物质质量 / kg substance
- 数量规则：现场测量或根据处理活动记录进行方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每采收和合格橙质量
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01323_harvest_records`
- 来源：`fao-good-agricultural-practices`、`ipcc-2019-refinement-agriculture`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_output` | 果园栽培和采收 | 将投入和排放归一化至合格橙产出；单独报告采收但拒收的橙子，不得无说明地纳入参考产品。 | `codex-fresh-fruits-vegetables-cxc-53` |
| `allocation_establishment_over_life` | 果园建植和更新 | 按声明的结果年限和合格产量分配建植与更新负荷，并披露分配周期和更新事件。 | `fao-good-agricultural-practices` |
| `allocation_co_products` | 拒收橙和其他路线 | 对有独立市场路线且有记录的拒收橙或副产品采用有依据的物理或经济分配，并报告基准；否则按声明去向处理，不声称存在第二参考产品。 | `fao-good-agricultural-practices` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_01323_establishment_records` | `p01323_orchard_establishment` | 种植、养分、残余物、土地、果园能力 | 苗圃记录、种植日志、地块图、更新记录 | 地块；品种；砧木；植株数量；产品；产品质量；养分分析；面积；年度；残余物去向 | 核对发票、田间日志、地图和实测或有依据的换算 | kg、item、kg nutrient、ha year | 每次建植或更新事件 | 全建植期和声明分配期 | 果园地块 | 按地块汇总并按结果年限和合格产出分配 | 签署日志、发票、地图、产品分析 |
| `cp_01323_cultivation_records` | `p01323_orchard_cultivation` | 养分、灌溉、燃料、植保、残余物、排放 | 投入发票、喷施日志、水表记录、机械记录、土壤或水量平衡 | 地块；日期；产品；数量；养分基准；灌溉量；燃料；机械小时；处理面积；残余物质量；排放方法 | 按月或事件核对地块面积和果园年度产出 | kg product、kg nutrient、m3、MJ、kg residue | 每个事件并按月汇总 | 一个生产年度或声明生产周期 | 果园地块和场址 | 汇总事件，保留产品和养分基准，并归一化至合格产出 | 水表核验、发票、喷施记录、因子文件、质量平衡 |
| `cp_01323_harvest_records` | `p01323_harvest_farm_gate` | 采收能源、包装、拒收品、排放、合格产品 | 采收票、地磅记录、包装记录、去向记录 | 日期；地块；采收质量；合格质量；拒收质量；去向；燃料或能源；包装类型；包装质量；重复使用次数 | 将采收和去向质量与农场出场产品总量核对 | kg、MJ、kg packaging、item | 每个采收批次 | 全采收季和声明农场出场期 | 果园和处理点 | 汇总批次并分别保留合格、拒收和副产品路线 | 校准秤、批次票、包装领用记录、去向收据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_output_normalization` | 所有定量行 | 将年度或生产周期清单量除以农场出场合格整橙质量，按每 1 kg 合格产出报告。 | 合格质量；行数量 | 归一化行值 | `mass-balance-identity` |
| `calc_establishment_allocation` | 建植行 | 按声明的结果年限和合格产量分配建植和更新量，并保留分配周期。 | 建植量；结果年限；合格产量 | 分配后的果园年度量 | `fao-good-agricultural-practices` |
| `calc_nutrient_basis` | 养分投入行 | 保留产品质量，并根据产品分析和施用产品量计算养分质量；不得以养分质量替代产品投入。 | 产品数量；产品分析 | 产品质量和养分质量 | `ipcc-2019-refinement-agriculture` |
| `calc_reject_mass_balance` | 采收拒收品和产品输出 | 核对采收量与合格产出、拒收品、副产品和库存变化，并解释未解决差额。 | 采收量；合格量；拒收量；副产品；库存变化 | 已核对的质量平衡 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_identity` | 产品、路线和投入 | 已知时识别品种、果园路线、农场出场状态、投入产品和拒收去向。 | 产品说明、发票、批次记录 |
| `quality_measurement` | 质量、水、能源和面积时间行 | 可用时使用校准秤或水表；无法直接测量时记录换算、因子和不确定性。 | 校准记录、水表日志、因子说明 |
| `quality_temporal` | 所有过程 | 覆盖完整声明生产年度或生产周期，并披露缺失事件、异常天气、补植或淡季作业。 | 年度生产日志和缺口说明 |
| `quality_completeness` | 清单和排放 | 在归一化前核对采购投入、田间记录、采收量、合格产品、拒收品、副产品和去向。 | 投入核对和质量平衡 |
| `quality_disclosure` | 数据集元数据 | 声明起始条件、果园树龄、结果年限分配、地区、产量基准、农场出场边界和 证据缺口 身份。 | 数据集元数据和过程说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | 参考流 | 数据包缺少已知品种、路线、果园树龄或生产年度基准、成熟度、等级、农场出场状态、合格产量或拒收去向时拒绝。 | `codex-fresh-fruits-vegetables-cxc-53` |
| `validation_mass_balance` | 采收和农场端处理 | 核对采收量、合格产品、拒收品、副产品、库存变化和记录的不确定性；调查无法解释的质量不平衡。 | `mass-balance-identity` |
| `validation_nutrient_and_water_basis` | 栽培 | 确认肥料产品质量与养分质量、施用灌溉水与水源取水及其计量或计算方法。 | `ipcc-2019-refinement-agriculture`、`fao-good-agricultural-practices` |
| `validation_perennial_allocation` | 建植和栽培 | 确认结果年限分配，防止在生产年度之间重复计算建植、更新或果园能力。 | `fao-good-agricultural-practices` |
| `validation_identity_evidence` | 参考流和未映射流 | 将身份证据缺口保留为明确的前景解析要求；不得仅为填充 UUID 而替换为相近柑橘或产品流。 | `tidas-flow-identity-policy` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；完成质量检查后可作为 background_dataset |
| downstream_use | 橙园前景过程数据集、农场出场橙供应链模型以及以鲜食整橙为投入的生命周期模型 |
| allowed_use | 当保留品种、路线、时间基准、产量、农场出场状态、分配和质量披露时，用于区域或场址特定建模 |
| excluded_use | 橙汁、浓缩汁、精油、干果、零售配送、消费者使用，以及未披露产品身份或边界的路线 |
| required_metadata | 品种；已知时的砧木；地区；果园树龄；是否包含建植；结果年限；生产年度或生产周期基准；合格产量；成熟度；等级；农场出场状态；拒收去向；证据缺口 身份 |
| required_quality_disclosure | 时间覆盖、场址范围、计量和换算方法、养分和水量基准、质量平衡结果、分配规则和缺失数据处理 |
| update_trigger | 新的果园路线、品种或市场状态；结果年限或产量证据更新；Flow Set taxonomy 变化；参考身份解析；或边界/分配方法发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO 关于良好农业实践、果园管理、记录保存和农场端生产数据的指导 | 果园管理、记录和农场出场生产数据 |
| `codex-fresh-fruits-vegetables-cxc-53` | official_guidance | Codex 关于鲜食果蔬、产品质量和处理的指导 | 产品质量、处理和农场出场质量限定信息 |
| `ipcc-2019-refinement-agriculture` | method_factor | IPCC 2019 Refinement 第 4 卷农业方法 | 受管理土壤和养分相关排放计算 |
| `mass-balance-identity` | method_factor | 质量守恒方法身份 | 采收、拒收品、副产品和合格产出核对 |
| `tidas-flow-identity-policy` | official_guidance | 仓库流身份规则 | 保持语义并在无核验身份时显式保留 coverage finding |
