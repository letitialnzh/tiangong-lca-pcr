---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.dates
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鲜椰枣（枣椰果实）

## 1. 范围与适用性

本产品类别规则覆盖在农场交付边界以新鲜、未加工状态交付的栽培枣椰果实。规则适用于灌溉或雨养管理的结果期枣椰园，并在计入所声明生产周期时包括果园建立或更新、果园管理、采收，以及测量新鲜果实产量所需的基本农场交付处理。规则不包括干制、冷冻、保藏、去核或其他加工的椰枣，不包括清洗或消毒、场外分拣或包装、包装材料生产、冷藏、运输和下游加工。

基本农场交付处理可以包括称重、批次识别和去除明显不合格果，但不得使产品转变为加工或保藏的椰枣产品。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.dates |
| classification_refs | CPC 3.0：01314 Dates |
| covered_products | 在农场交付处交付的新鲜枣椰果实，包括按品种区分、可直接食用或供进一步加工的新鲜果实 |
| excluded_products | 干制、冷冻、保藏、去核、糖浆、果酱、糖果、包装、储存、运输或其他加工的椰枣；枣椰种植材料；叶片、棕榈 frond、吸芽和其他非果实产品 |
| representative_product | 农场交付处的新鲜、未加工枣椰果实 |
| production_route | 枣椰多年生果园建立或更新、果园种植管理、采收和基本农场交付处理 |
| market_state | 按收到状态的新鲜果实；声明品种、采收成熟度、质量等级、质量基准和淘汰果去向 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 农场交付处的新鲜、未加工枣椰果实 |
| How much | 1,000 kg 按收到状态的新鲜果实 |
| How well | 声明品种、成熟度、质量等级、测量时的水分或干物质基准，以及合格或淘汰状态的新鲜采收果实 |
| How long or cycle | 一个声明的果园生产周期或采收批次 |
| reference_flow_link | `date_harvest_farm_gate` 的终端新鲜果实输出 |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | 枣椰果实 `bf7ddd60-c5f1-4d21-9c85-b05b93972595` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种或变种；果园地理位置；采收年份；声明生产周期；果园树龄和结果面积；采收成熟度；合格果质量等级；按收到状态的质量基准；灌溉来源；营养物和土壤改良剂基准；淘汰果去向；农场交付边界 |

构建前景数据包时，`Required qualifiers` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效的数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_fresh_mass` | 参考椰枣果实 | 质量 | kg | 按农场交付处收到状态报告合格新鲜果实质量。如果测量干物质或水分，保留收到状态基准和测量方法；不得无说明地转换为干基。 |
| `crop_cycle_normalization` | 果园投入和排放 | 活动相关属性 | 活动相关单位 | 使用同一果园区域和采收批次的合格新鲜果实质量，将每个生产周期总量归一化到 1,000 kg 合格新鲜果实。 |
| `nutrient_product_and_basis` | 肥料和土壤改良剂投入 | 产品质量和营养素基准 | kg 产品；kg N、kg P2O5、kg K2O，或声明的有机营养基准 | 记录实际产品名称和施用产品质量，再记录用于计算的声明营养素基准。不得从通用肥料名称推断营养素含量。 |
| `water_and_energy_consistency` | 灌溉、取水、泵送电力和燃料 | 体积、能量或质量 | m3、kWh、L 或 kg | 将计量或发票活动单位与计算换算分开，并为每次换算披露来源、计量边界和换算基准。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 声明生产周期开始时已建立或新建立的枣椰果园，购买的种植材料和管理投入跨越前景边界 |
| starting_condition_role | 声明的枣椰果园生产周期起点 |
| product_classification_scope | 对应 CPC 3.0 代码 01314 的栽培新鲜枣椰果实，在农场交付处未加工 |
| recursive_input_rule | 不得将枣椰果实作为同一产品类别的递归投入。种植材料应作为苗圃苗、幼苗或吸芽产品记录，并拥有自己的上游数据集；保留果实或淘汰果不得计为种植材料。 |
| upstream_dataset_requirement | 对于未作为前景活动测量的种植材料、肥料和土壤改良剂产品、作物保护制剂、燃料、电力、灌溉供应和承包服务，需要使用相容的上游数据集。 |
| disclosure | 披露果园位置、品种、树龄、种植密度、结果面积、生产周期、灌溉来源和体积、营养产品及营养基准、作物保护、能耗、采收批次、合格果、淘汰果、农场交付处理以及排除的农场交付后活动。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_orchard_cycle` | 枣椰果园生产 | 包括计入声明生产周期的果园建立或更新投入、果园管理、采收和新鲜果实交接前的基本农场交付处理。 | `iso-14044-2006` |
| `boundary_fresh_unprocessed_gate` | 参考产品和农场交付输出 | 在新鲜、未加工枣椰果实交接处停止前景边界。排除清洗、干制、保藏、包装、场外储存、运输和下游加工。 | `codex-cxs-143-1985-dates`; `iso-14044-2006` |
| `boundary_direct_environmental_exchanges` | 营养相关土壤和空气交换 | 使用与营养物和残余物核算相同的生产周期活动记录，并采用具有地理适用性的方法，纳入直接及适用的间接营养相关环境交换。 | `ipcc-2019-refinement-vol-4` |
| `boundary_recursive_product_inputs` | 同类别产品投入 | 不得将新鲜枣椰果实输出回接到同一椰枣 PCR。对种植材料或其他购买投入使用不同的上游身份，并单独披露保留材料。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `date_orchard_production` | 枣椰果园生产 | required | always | 多年生果园建立、管理、资源使用和环境交换 | 果园区块面积和生产周期活动总量除以合格新鲜果实质量 |
| `date_harvest_farm_gate` | 椰枣采收和农场交付处理 | required | always | 采收、基本批次处理、合格产品交付和淘汰果核算 | 采收批次质量平衡和合格新鲜果实输出 |

### 过程：枣椰果园生产（`date_orchard_production`）

#### 输入

##### 产品流

###### 枣椰种植材料（`date_palm_planting_material_input`）

记录进入果园边界的苗圃苗、幼苗或吸芽。不得用保留的枣椰果实或采收果实替代种植材料身份。

- Selected flow: 枣椰种植材料＼
- Flow property / unit: 数量或质量 / 按记录的植株、吸芽或 kg
- Amount rule: 声明生产周期内安装或替换的实测种植材料数量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_orchard_activity_records`
- Sources:

###### 农业养分与肥料投入（`date_orchard_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一过程和报告期的定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 来源：

###### 供应的灌溉水（`irrigation_water_input`）

记录来自声明灌溉来源、施用于果园的水量。只有在田间记录支持雨养条件时，雨养生产才记录零灌溉量。

- Selected flow: 灌溉水供应
- Flow property / unit: 体积 / m3
- Binding: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- Amount rule: 按果园区块和生产周期计量或核算的灌溉体积
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_irrigation_and_withdrawal_records`
- Sources: `fao-56-crop-evapotranspiration-1998`

###### 灌溉泵送用电（`pumping_electricity_input`）

当泵送由果园运行或计量且位于前景边界内时，记录泵消耗的电力。

- Selected flow: 灌溉泵送用电供应
- Flow property / unit: 能量 / kWh
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- Amount rule: 按果园区块和生产周期分配的泵计量、电费发票或有记录的泵能耗计算
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_irrigation_and_withdrawal_records`
- Sources:

###### 供应的作物保护制剂（`crop_protection_input`）

记录每种实际施用的作物保护制剂，包括产品身份、施用事件和施用质量。不得将制剂强行归入通用材料身份。

- Selected flow: 枣椰生产用作物保护制剂＼
- Flow property / unit: 产品质量 / kg 制剂
- Amount rule: 按产品和施用事件汇总实测制剂质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_orchard_activity_records`
- Sources:

##### 废物流

##### 基本流

###### 枣椰果园土地占用（`land_occupation_input`）

当土地占用属于研究前景时，记录果园面积和声明生产周期持续时间对应的土地占用。

- Selected flow: 枣椰果园土地占用
- Flow property / unit: 面积时间 / m2*a 或场址支持的等效单位
- Amount rule: 果园面积乘以声明生产周期或年度化占用时段
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_orchard_activity_records`
- Sources: `iso-14044-2006`

###### 从环境直接取用的灌溉水（`direct_water_withdrawal_input`）

仅当果园自行取水且上游灌溉供水数据集未表示该供水活动时，记录直接环境取水。

- Selected flow: 果园灌溉水资源取用
- Flow property / unit: 体积 / m3
- Amount rule: 按来源和生产周期测量或核算的环境取水体积
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_irrigation_and_withdrawal_records`
- Sources: `fao-56-crop-evapotranspiration-1998`

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 释放到环境空气的氧化亚氮（`soil_nitrous_oxide_output`）

根据声明的氮投入、有机改良剂投入、残余物数据和具有地理适用性的方法，计算直接及适用的间接氧化亚氮排放。

- Selected flow: 释放到环境空气的氧化亚氮
- Flow property / unit: 质量 / kg N2O
- Amount rule: 根据生产周期氮和残余物活动数据按方法计算的排放
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_orchard_activity_records`
- Sources: `ipcc-2019-refinement-vol-4`

###### 释放到环境空气的氨（`soil_ammonia_output`）

当所选方法对声明的营养物和土壤改良剂投入要求时，计算氨排放。

- Selected flow: 释放到环境空气的氨
- Flow property / unit: 质量 / kg NH3
- Amount rule: 根据声明的营养产品、施用方法和生产周期记录按方法计算的排放
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_orchard_activity_records`
- Sources: `ipcc-2019-refinement-vol-4`

###### 释放到环境空气的氮氧化物（`soil_nitrogen_oxides_output`）

当所选营养物排放方法要求时，计算氮氧化物排放，并在数据集元数据中保留方法层级和地理信息。

- Selected flow: 释放到环境空气的氮氧化物
- Flow property / unit: 质量 / kg NOx
- Amount rule: 根据声明的氮投入和生产周期记录按方法计算的排放
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_orchard_activity_records`
- Sources: `ipcc-2019-refinement-vol-4`

###### 释放到土壤的硝酸盐（`soil_nitrate_output`）

当所选区域方法、土壤平衡或测量证据支持时，记录或计算土壤硝酸盐释放；不得仅根据肥料购买记录推断。

- Selected flow: 释放到土壤的硝酸盐
- Flow property / unit: 质量 / kg 硝酸盐
- Amount rule: 与声明生产周期营养平衡相关的按方法计算或测量的硝酸盐释放
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_orchard_activity_records`
- Sources: `ipcc-2019-refinement-vol-4`

###### 释放到土壤的磷酸盐（`soil_phosphate_output`）

当所选区域方法、土壤平衡或测量证据支持时，记录或计算土壤磷酸盐释放，并披露土壤和侵蚀假设。

- Selected flow: 释放到土壤的磷酸盐
- Flow property / unit: 质量 / kg 磷酸盐
- Amount rule: 与声明生产周期营养和土壤平衡相关的按方法计算或测量的磷酸盐释放
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个声明生产周期和每 1,000 kg 合格新鲜果实
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_orchard_activity_records`
- Sources: `ipcc-2019-refinement-vol-4`

### 过程：椰枣采收和农场交付处理（`date_harvest_farm_gate`）

#### 输入

##### 产品流

###### 采收和农场交付处理用移动燃料（`orchard_mobile_fuel_input`）

记录采收和场内处理设备在农场交付转移前使用的燃料。如果采收完全人工进行且没有燃料跨越边界，应在活动记录支持下记录零值。

- Selected flow: 椰枣采收和农场交付处理用移动机械燃料
- Flow property / unit: 燃料质量、体积或能量 / 按记录的 kg、L 或 MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `mobile-machinery-fuel`
- Amount rule: 分配至声明采收批次的燃料发票、储罐记录、承包商声明或设备计算
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个采收批次和每 1,000 kg 合格新鲜果实
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_harvest_output_records`
- Sources:

##### 废物流

###### 淘汰或不可销售的椰枣果实（`rejected_date_fruit_waste_output`）

当采收或农场交付处理中淘汰的果实未作为声明的共产品交付时，将其记录为废物。报告去向，以及其是否留在果园、堆肥、饲喂或采用其他处理方式。

- Selected flow: 淘汰或不可销售的新鲜椰枣果实废物＼
- Flow property / unit: 质量 / kg 新鲜果实
- Amount rule: 按采收批次和去向测量或核算的淘汰果质量
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每个采收批次和每 1,000 kg 合格新鲜果实
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 根据采集记录计算（`calculated_from_collection`）
- Collection protocol: `cp_harvest_output_records`
- Sources: `codex-cxs-143-1985-dates`

##### 基本流

#### 输出

##### 产品流

###### 农场交付处的新鲜枣椰果实（`date_fruit_farm_gate_output`）

记录在农场交付处转移的合格新鲜枣椰果实作为终端参考产品。保留按收到状态的质量、采收批次、成熟度、质量等级和去向，不包括农场交付后的加工。

- Selected flow: 农场交付处的新鲜、未加工枣椰果实＼
- Flow property / unit: 质量 / kg
- Amount rule: 农场交付转移处实测的合格新鲜果实质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 终端输出按 1,000 kg 合格新鲜果实缩放
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_harvest_output_records`
- Sources: `codex-cxs-143-1985-dates`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_date_output` | 仅有新鲜椰枣果实作为产品输出的果园和采收过程 | 当没有有意共产品离开边界时，将果园和采收负荷分配给合格新鲜椰枣果实。不得将归类为废物的淘汰果或残余物作为共产品。 | `iso-14044-2006` |
| `allocation_declared_coproducts` | 有意的非椰枣产品输出 | 当有意共产品离开边界时，首先检验有文件支持的物理因果分配。如果不存在可辩护的物理关系，则使用有文件支持的经济分配，并报告质量、收入、参考期和分配因子。 | `iso-14044-2006` |
| `allocation_perennial_establishment` | 果园建立或更新投入 | 使用有文件记录的果园寿命或生产期假设，在声明的生产期内分配建立或更新负荷，并在数据集元数据中披露该假设。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_activity_records` | `date_orchard_production` | 种植材料、营养产品、土壤改良剂、作物保护、土地和果园活动 | 供应商发票、施用日志、果园登记、田间计划和区块记录 | block_id；cultivar；orchard_age；bearing_area_ha；planting_material_quantity；product_name；product_mass；nutrient_basis；application_date；fuel；electricity；area；crop_cycle | 从果园经营者采集事件记录，并与供应商和区块记录核对 | 活动相关混合单位 | 每次施用或活动；每个生产周期核对 | 一个声明的生产周期和采收年份 | 每个果园区块，保留区块汇总 | 按区块和生产周期求和；归一化前保留实际产品和营养基准 | 发票、经营者日志、农艺师或田间计划审查，以及完整性核对 |
| `cp_irrigation_and_withdrawal_records` | `date_orchard_production` | 灌溉水、泵送电力和直接取水 | 计量日志、泵记录、水费、取水许可或有记录的水量平衡计算 | block_id；source_type；meter_start；meter_end；irrigation_event_date；volume_m3；pump_kwh；withdrawal_m3；rainfed_flag | 读取计量器，或将发票和水源记录与灌溉计划及区块面积核对 | m3 和 kWh | 每次灌溉事件或账单期；每个生产周期核对 | 一个声明的生产周期和灌溉季 | 每个水源和果园区块 | 按水源、区块和生产周期求和；防止供应水量和直接取水重复计算 | 计量器校准或读数证据、发票或许可核查，以及水源核对 |
| `cp_harvest_output_records` | `date_harvest_farm_gate` | 燃料、合格果、淘汰果和批次处理 | 采收日志、称重单、批次记录、承包商声明和去向记录 | block_id；harvest_date；lot_id；accepted_mass_kg；rejected_mass_kg；maturity；quality_grade；moisture_or_dry_matter；destination；fuel_quantity | 称量每个采收批次，并将合格、淘汰和去向质量与农场交付转移核对 | kg 新鲜果实和活动相关燃料单位 | 每个采收批次；每个批次核对 | 一个采收批次和生产周期 | 每个果园区块和接收批次 | 按批次求和合格输出和淘汰输出；将相关活动总量归一化到合格输出 | 校准秤或经核验的称重单、批次可追溯性、去向证据和质量平衡检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有生产周期清单行 | 参考归一化数量 = 生产周期数量 × 1,000 kg / 合格新鲜果实质量（kg） | accepted_fresh_fruit_mass_kg；crop_cycle_amount | 每 1,000 kg 合格新鲜果实的数量 | `iso-14044-2006` |
| `calc_nutrient_basis` | 营养素和土壤改良剂投入 | 营养素数量 = 实际产品质量 × 声明的营养素分数；保留产品名称、产品质量、营养基准和施用事件 | product_mass；declared_nutrient_fraction；nutrient_basis | 基于营养基准的投入数量 |  |
| `calc_water_energy_reconciliation` | 灌溉、取水和泵送电力 | 按区块和生产周期核对计量、发票和泵计算值；当供应水和直接取水描述同一体积时不得相加 | meter_records；invoices；source_records；pump_calculation | 核对后的水和电力总量 | `fao-56-crop-evapotranspiration-1998` |
| `calc_soil_emissions` | 土壤和空气营养相关基本流输出 | 对声明的氮、土壤改良剂、残余物、土壤和气候活动数据采用所选的具有地理适用性的方法层级；披露层级和因子 | nutrient_inputs；organic_amendments；residue_data；soil_and_climate_parameters | 方法计算的排放量 | `ipcc-2019-refinement-vol-4` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_qualifiers` | 参考流、产品输出、种植材料和作物保护投入 | 声明产品身份、品种、地理位置、采收批次、成熟度、质量等级和身份证据缺口说明。在创建最终 TIDAS 交换前解析所有身份。 | 数据集元数据、产品说明和身份审查 |
| `dq_mass_reconciliation` | 采收和农场交付处理 | 合格果、淘汰果和其他声明去向必须在有文件记录的测量不确定度内与采收批次质量平衡相符。 | 称重单、批次记录、去向记录和核对工作表 |
| `dq_activity_completeness` | 果园活动记录 | 覆盖每个声明果园区块和生产周期活动；当田间证据支持时，包括雨养灌溉或未施用营养物等零活动声明。 | 区块登记、田间计划、发票、计量记录和经营者确认 |
| `dq_nutrient_basis_traceability` | 肥料和土壤改良剂投入 | 核对产品质量、营养素分数、施用事件和营养基准单位；不得用通用默认值替代缺失的产品证据。 | 供应商标签或规格、发票、施用日志和计算表 |
| `dq_boundary_disclosure` | 完整前景数据集 | 披露产品在农场交付处新鲜且未加工，并识别排除的清洗、干制、包装、储存、运输或加工。 | 过程说明、边界声明和下游使用说明 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_output` | 参考流和农场交付输出 | 确认终端输出为合格的新鲜枣椰果实，使用 kg 质量基准并带有所有必需限定信息；证据缺口的语义身份不得被其他果实流静默替换。 | `codex-cxs-143-1985-dates` |
| `validation_process_coverage` | 过程图和清单 | 确认表示果园生产和采收/农场交付处理，并且每个纳入的流行都具有过程、方向、流类型、数量规则、基准、证据类型，以及在需要采集或计算时的采集协议。 |  |
| `validation_input_output_balance` | 采收过程 | 确认合格新鲜果实、淘汰果以及声明的共产品或废物去向与采收记录相符，并且没有包含农场交付后的输出。 | `iso-14044-2006` |
| `validation_nutrient_and_emission_linkage` | 营养素投入和土壤或空气排放 | 确认计算的营养相关排放连接到声明的营养物、土壤改良剂、残余物和方法投入，并披露所选排放方法和地理范围。 | `ipcc-2019-refinement-vol-4` |
| `validation_flow_set_resolution` | 参数化清单行 | 在最终发布 TIDAS 过程前，将每个参数化 Flow Set 行解析为具有属性、单位、方向、流类型、地理范围和预期用途证据的相容具体身份。 |  |
| `validation_farm_gate_exclusions` | 完整前景数据集 | 如果数据集包含清洗、干制、保藏、包装、场外储存、运输或下游椰枣加工，则拒绝该数据集，除非研究明确声明了超出本 PCR 的边界扩展。 | `iso-14044-2006` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 用于下游 process 和 lifecyclemodel 投影的前景枣椰果园及农场交付过程数据 |
| allowed_use | 当具备必需限定信息、生产周期记录和身份解析时，用于声明农场交付边界内新鲜、未加工枣椰果实建模 |
| excluded_use | 干制或保藏椰枣、椰枣加工、包装、储存、运输或其他果实类别建模；证据缺口的候选身份不是最终 TIDAS 交换 |
| required_metadata | PCR id 和版本；CPC 引用；品种；地理位置；果园树龄和结果面积；生产周期和采收批次；新鲜质量基准；成熟度和质量等级；灌溉来源；营养物和土壤改良剂基准；淘汰果去向；边界声明 |
| required_quality_disclosure | 时间覆盖、场址覆盖、区块汇总、测量和计算方法、缺失数据处理、参数化 Flow Set 解析、身份证据缺口说明和分配假设 |
| update_trigger | 品种或路线变化、灌溉来源变化、营养或作物保护实践变化、果园树龄或生产期假设变化、农场交付产品状态变化、适用 Flow Set 版本变化，或证据与方法规则变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-143-1985-dates` | standard | Codex Alimentarius CXS 143-1985，Standard for Dates | 新鲜椰枣产品状态、质量限定信息和淘汰产品区分 |
| `fao-56-crop-evapotranspiration-1998` | official_guidance | FAO Irrigation and drainage paper 56，Crop evapotranspiration | 灌溉活动记录、水量平衡证据和灌溉披露 |
| `ipcc-2019-refinement-vol-4` | method_factor | 2019 Refinement to the 2006 IPCC Guidelines，Volume 4：Agriculture, Forestry and Other Land Use | 营养相关土壤和空气排放计算方法选择 |
| `iso-14040-2006` | standard | ISO 14040:2006，Environmental management — Life cycle assessment — Principles and framework | 生命周期边界和数据解释背景 |
| `iso-14044-2006` | standard | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines | 归一化、分配、共产品处理和数据质量规则 |
