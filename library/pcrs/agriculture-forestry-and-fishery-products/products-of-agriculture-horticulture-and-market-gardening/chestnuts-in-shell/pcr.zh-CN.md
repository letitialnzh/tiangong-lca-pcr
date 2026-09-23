---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chestnuts-in-shell
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 带壳板栗

## 1. 范围与适用性

本 PCR 适用于在受管理的多年生板栗园中生产，并在声明的农业田地、初级调制或储存交接点交付的带壳板栗前景数据包。范围包括板栗园建立和补植、未结果期和结果期管理、采收与收集、板栗外壳/果皮分离、干燥、清理、带壳质量分选、储存以及声明交接。

规范参考流遵循平台记录 `Chestnuts, in shell`，CPC 3.0 为 `01373`，平台限定信息为 `Production mix, at agricultural fields; Fresh chestnuts picked`。数据集必须披露声明交接点是鲜品农业田地交接点参考状态，还是经过干燥、清理、分级或储存的延伸状态，不能将这些状态静默混合。

本 PCR 适用于常规、综合、有机、雨养和灌溉路线，但必须披露品种或品种组、地理位置、板栗园年龄、作物年度、采收方式、干燥路线、水分基准、质量状态和交接点。不包括苗圃生产、板栗脱壳取仁、烘烤、蒸煮、去皮、板栗壳液回收、仁分级、食用坚果加工、零售包装、消费者使用以及声明交接点后的运输或储存。本 PCR 不选择“other”或 n.e.c. 产品类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chestnuts-in-shell` |
| classification_refs | CPC 3.0 `01373`，Chestnuts, in shell |
| covered_products | 保留硬壳的板栗，包括农业田地交接点鲜收带壳板栗，以及在声明延伸交接点交付的干燥、清理、分级或储存带壳板栗批次 |
| excluded_products | 板栗仁和去壳板栗；烘烤、蒸煮、去皮、加盐、研磨、制油、糖果、饮料及其他下游板栗产品；苗圃投入和交接点后物流 |
| representative_product | 分离板栗外壳/果皮、保留硬壳、披露水分和质量状态，并在声明交接点交付的合格带壳板栗 |
| production_route | 多年生板栗园建立和管理、采收与收集、板栗外壳/果皮分离、初级干燥和清理、带壳分级、可选储存和声明交接 |
| market_state | 披露品种或品种组、尺寸或等级、壳和仁质量、水分基准、作物年度、地理位置、合格和拒收质量以及交接点的鲜品农业田地交接点或干燥调制带壳板栗批次 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明交接点的带壳板栗，保留硬壳并已分离板栗外壳/果皮 |
| How much | 1,000 kg 净带壳板栗 |
| How well | 品种或品种组；生产国家、地区和气候；板栗园年龄和结果状态；作物年度；鲜品或干燥状态；水分基准；壳和仁质量；尺寸或等级；合格、降级和拒收质量；板栗外壳/果皮去向；交接点 |
| How long or cycle | 多年生板栗园结果寿命内声明的一个作物年度；建立、未结果年份、补植和清除按板栗园寿命和合格产出基准分配 |
| reference_flow_link | 鲜品农业田地交接点参考状态来自 `chestnut_harvest_and_collection` 的合格输出；声明延伸后处理交接点时来自 `chestnut_storage_and_gate_handoff` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Chestnuts, in shell `3351a3d2-3367-4a2f-8cdb-9b025fdd9989` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或品种组；板栗园地块和地理位置；建立年份、板栗园年龄、结果状态和补植事件；土壤和气候；灌溉状态和水源；作物年度或平均期；采收成熟度和板栗外壳/果皮分离方式；鲜品或干燥状态；水分基准；壳状况；尺寸或等级；合格、降级、拒收和损失质量；板栗外壳/果皮去向；储存时间和条件；交接点 |
| Binding | `fixed` |

`必需限定信息` 必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。净产品质量不包括容器皮重。平台身份是鲜品农业田地交接点产品流；干燥或储存批次是延伸交接状态，必须保留该限定信息，不能伪装成新的产品类别。不得用去壳板栗仁作为本 PCR 的参考产品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以声明交接点的净合格带壳板栗表示参考流，并排除容器皮重。 |
| `fresh_or_conditioned_gate` | 参考流和交接输出 | 质量和声明产品状态 | kg 和声明状态 | 分开记录鲜品农业田地交接点、干燥调制和储存交接状态；没有实测水分和质量换算时，不得将干燥后质量当作鲜品质量。 |
| `yield_and_output_basis` | 板栗园、采收、调制和储存输出 | 质量和面积 | kg 和 ha | 归一化前，对同一板栗园年度、批次或报告期记录采收板栗、合格等级、板栗外壳/果皮、拒收物、异物、储存损失和未解释损失。 |
| `moisture_basis` | 采收、干燥、储存和合格板栗 | 质量和水分分数 | kg 和声明分数 | 保留接收质量和水分；仅使用实测水分以及透明的水质量或干物质方程在鲜品和干燥状态之间换算。 |
| `shell_and_kernel_quality` | 合格带壳产品 | 声明质量属性 | 声明单位 | 保留壳完整性、壳变色、空壳、虫害或霉变、仁缺陷基准、异物、尺寸或等级和干燥充分状态，不用统一默认等级替代。 |
| `orchard_life_allocation_basis` | 建立、补植和未结果期投入 | 面积、时间或质量活动属性 | ha、板栗园年或 kg 产品 | 将多年生建立、未结果年份、补植树和清除按板栗园寿命及合格产出基准分配，并披露未结果年份和补植事件。 |
| `nutrient_product_and_n_basis` | 养分和土壤改良投入 | 产品和养分质量 | kg 产品及 kg N、P2O5 或 K2O | 分开记录配方产品质量和有文件支持的养分含量；氮排放计算使用声明的 kg N。 |
| `water_basis` | 灌溉和湿法处理 | 体积或质量 | m3 或 kg | 区分交付灌溉水、自然资源取水、排水或消耗指标以及可选湿法清理水；干法路线对湿法清理水记录有说明的零值。 |
| `energy_inventory` | 板栗园、采收、干燥、分级和储存 | 质量、体积或能量 | kg、L、MJ 或 kWh | 保留能源载体、单位、作业、设备、期间和换算基准，并区分燃料、电力和热干燥能源。 |
| `packaging_quantity` | 交接点内可选储存包装 | 质量或件数 | kg、g 或 item | 包装跨越声明边界时，记录包装质量或件数、包装容量、材料、重复使用状态和批次归属。 |

## 5. 系统边界

默认前景边界从声明的板栗园起始条件开始，经过多年生板栗园管理、采收与收集、板栗外壳/果皮分离，到合格带壳板栗在鲜品农业田地交接点的交接。延伸调制路线另纳入日晒或机械干燥、清理、带壳质量分选、储存和声明的后处理交接点。种植材料、肥料、植保产品、灌溉水、能源载体、机械服务和包装的上游生产使用有代表性的背景数据集。脱壳取仁、板栗壳液回收、仁加工、零售、交接点后运输和储存不在默认边界内。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 建园前或建立时的板栗园地块，种植材料和购买的管理投入跨越前景边界；既有土地用途和板栗园历史单独披露 |
| starting_condition_role | 受管理多年生板栗生产和板栗园资产核算的起点 |
| product_classification_scope | CPC 3.0 `01373`，Chestnuts, in shell；去壳板栗和下游板栗产品不在本 PCR 内 |
| recursive_input_rule | 同类种植材料或跨越边界的保留带壳板栗作为上游投入记录，不递归展开为另一个带壳产品输出。板栗园、采收、调制和储存之间的内部交接是过程链接，不是额外市场输出。 |
| upstream_dataset_requirement | 苗圃材料、养分产品、植保、灌溉供水、燃料、电力、干燥能源、包装、机械服务和废物处理跨越边界时，使用有代表性的上游数据集。 |
| disclosure | 品种和板栗园地块；地理位置、土壤、气候和土地历史；建立年份、板栗园年龄、结果寿命和补植；灌溉水源和水质；养分和植保；采收成熟度和板栗外壳/果皮去向；鲜品或干燥状态；干燥方式和水分；壳和仁质量；等级、拒收和储存记录；交接点；以及任何有意板栗外壳/果皮副产品交付 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_tree_to_farm_gate` | 所有符合条件的数据集 | 纳入多年生板栗园建立、未结果年份、结果期管理、采收、收集、板栗外壳/果皮分离和声明鲜品农业田地交接点交接。 | `fao-chestnut-india-production-1998`; `iso-14044-2006` |
| `boundary_dehusking_extension` | 延伸后处理路线 | 只有声明交接点超出鲜品农业田地交接点，或这些作业属于前景数据包时，才纳入干燥、清理、带壳分级和储存；报告延伸交接点，不得重新标注为平台鲜品未加工状态。 | `fao-chestnut-postharvest-2020`; `fao-chestnut-minor-oil-crops` |
| `boundary_perennial_tree_disclosure` | 建立和补植 | 将建立、未结果年份、补植树和清除按板栗园寿命及合格产出基准分配，并披露寿命、未结果年份和补植事件。 | `fao-chestnut-india-production-1998`; `iso-14044-2006` |
| `boundary_no_shell_removal` | 带壳产品 | 硬壳属于产品边界；排除脱壳取仁、板栗壳液回收、仁分离、烘烤、蒸煮、去皮和仁分级，因为它们属于下游去壳仁路线。 | `fda-chestnut-nut-methods`; `fao-chestnut-minor-oil-crops` |
| `boundary_quality_and_fate` | 所有输出 | 按实测质量和声明去向区分合格带壳板栗、板栗外壳/果皮、降级批次、拒收板栗、异物、粉尘、水分损失和未解释损失。 | `fao-chestnut-postharvest-2020`; `fda-chestnut-nut-methods`; `mass-balance-identity` |

## 6. 过程清单结构

前景路线采用批次模式。每个采收轮次、调制批次、分级批次和储存收货都必须有批次或 campaign 标识，并声明开始、结束、输入集合、输出集合、清场或换批事件以及报告期间。共用设备和共用运行负荷只归属于相关批次或 campaign 一次。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `chestnut_orchard_establishment_and_management` | 板栗园建立和管理 | required |  | foreground | 板栗园年度投入和合格产出基准 |
| `chestnut_harvest_and_collection` | 板栗采收、板栗外壳/果皮分离和收集 | required |  | foreground | 可选调制前的采收板栗 |
| `chestnut_primary_conditioning_and_grading` | 板栗初级干燥、清理和带壳分级 | conditional | 声明交接点超出鲜品农业田地交接点，或前景数据包包含这些作业时纳入 | primary conditioning and stabilization | 接收批次和等级输出 |
| `chestnut_storage_and_gate_handoff` | 板栗储存和交接 | conditional | 声明前景边界包含储存或后处理交接点时纳入 | storage and delivery hand-off | 1,000 kg 声明交接输出 |

### 过程：板栗园建立和管理（`chestnut_orchard_establishment_and_management`）

#### 输入

##### 产品流

###### 板栗种植和补植材料（`chestnut_planting_material`）

按地块和事件记录苗木、嫁接材料、补植树、支杆以及归属的建园材料，并将其按板栗园寿命和合格带壳产出年度化。

- 选定流：板栗苗木和补植材料
- 流属性/单位：件数或质量 / item 或 kg
- 数量规则：按地块和建立或补植事件实测数量，并按合格产出年度化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳板栗
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chestnut_orchard_lifecycle_records`
- 数量范围：暂定种植材料筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：150
  - 单位：每 1,000 kg 参考产品的 kg 或种植单位
  - 基准：板栗园建立和补植的宽范围首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`chestnut_orchard_establishment_and_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳板栗
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_orchard_input_records`
- 来源：`ipcc-2019-afolu`
- 数量范围：暂定养分投入筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：每 1,000 kg 参考产品的 kg 配方产品
  - 基准：年度板栗园养分和改良剂宽范围投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`chestnut_irrigation_water`）

按水源、地块和作物年度记录交付灌溉；经验证的雨养路线以水量平衡证据记录有说明的零值。

- 选定流：供应至板栗园的灌溉水
- 流属性/单位：体积或质量 / m3 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按水源、地块和作物年度计量或有证据的交付灌溉水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳板栗
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_irrigation_records`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：2,500
  - 单位：每 1,000 kg 参考产品的 m3
  - 基准：雨养至灌溉板栗园的宽范围用水区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 板栗园燃料和电力（`chestnut_field_energy`）

记录抽水、施肥、修剪、割草、地面管理、植保和其他田间作业能源，并区分燃料和电力。

- 选定流：板栗园作业能源供应
- 流属性/单位：能量或载体质量 / MJ、kWh 或 L
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 分组选择：根据前景记录确定电力、柴油、汽油或其他载体
- 数量规则：按作业和地块实测或供应商记录能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳板栗
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_energy_records`
- 数量范围：暂定板栗园能源筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：每 1,000 kg 参考产品的 kWh 当量
  - 基准：田间作业宽范围能源估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植物保护产品（`chestnut_crop_protection`）

按产品、有效成分、日期和地块记录防虫、防病、除草或其他声明用途的配方和有效成分。

- 选定流：命名植物保护产品或有效成分
- 流属性/单位：质量 / kg 产品或有效成分
- 数量规则：按产品、有效成分、日期和地块记录实测施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格带壳板栗
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_orchard_input_records`
- 数量范围：暂定植保筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：每 1,000 kg 参考产品的 kg 配方产品
  - 基准：命名产品施用宽范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 板栗园修剪和补植残余（`chestnut_orchard_residue`）

按质量、水分、地块、期间和去向记录修剪、清除树木和补植残余；没有有证据的有意交付时，不将其当作副产品。

- 选定流：板栗园生物质残余
- 流属性/单位：质量 / kg 干物质或接收状态
- 数量规则：按去向称量或透明估算残余
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳板栗
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_orchard_lifecycle_records`
- 数量范围：暂定板栗园残余筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：0
  - 上限：1,500
  - 单位：每 1,000 kg 参考产品的 kg 接收状态残余
  - 基准：修剪、补植和板栗园地面残余的宽范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 初级流

###### 板栗园土地占用（`chestnut_land_occupation`）

按地块和作物年度记录种植面积与板栗园占用；土地转化单独记录，不能由占用量推断。

- 选定流：板栗园农业土地占用
- 流属性/单位：面积时间 / ha·板栗园年
- 数量规则：按面积和作物年度实测，并按合格产出年度化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳板栗
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chestnut_orchard_lifecycle_records`
- 数量范围：暂定土地占用筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0.1
  - 上限：6
  - 单位：每 1,000 kg 参考产品的 ha·板栗园年
  - 基准：多年生坚果作物板栗园面积宽范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 基本流

###### 管理土壤和作物直接排放（`chestnut_field_emissions`）

按物质、来源、养分投入和作物年度记录实测或计算的田间排放；已知物种或接收介质时不得使用泛化排放交换。

- 选定流：按物质和接收介质划分的土壤、作物和田间作业排放
- 流属性/单位：质量 / kg 物质
- 数量规则：由养分、残余、植保和田间作业记录计算或实测
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格带壳板栗
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chestnut_emission_records`
- 来源：`ipcc-2019-afolu`
- 数量范围：暂定直接排放筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：每 1,000 kg 参考产品的 kg 物质
  - 基准：田间排放合计的宽范围筛选；数据集保留物种级结果
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：板栗采收、板栗外壳/果皮分离和收集（`chestnut_harvest_and_collection`）

#### 输入

##### 产品流

###### 可采收的带壳板栗作物（`chestnut_harvest_available`）

按地块和收集轮次记录可供采收的作物。平台参考身份只在鲜品、农业田地交接点、带壳限定下复用，不代表批次已经干燥或脱壳。

- 选定流：Chestnuts, in shell `3351a3d2-3367-4a2f-8cdb-9b025fdd9989`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按每次采收轮次实测或透明估算可采收作物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格鲜品农业田地交接点参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_harvest_lot_records`
- 数量范围：可采收质量 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：900
  - 上限：1,400
  - 单位：每 1,000 kg 合格参考产品的 kg 鲜带壳板栗
  - 基准：分选和收集损失前的同批次采收质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 采收和收集能源（`chestnut_harvest_energy`）

按采收批次记录震落、收集、板栗外壳/果皮分离、装载和向下一节点转移所用燃料、电力和设备服务。

- 选定流：采收和收集能源供应
- 流属性/单位：能量或载体质量 / MJ、kWh 或 L
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 分组选择：根据记录确定载体和作业
- 数量规则：按采收批次计量、发票或设备记录能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格鲜品农业田地交接点参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_energy_records`
- 数量范围：采收能源筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：每 1,000 kg 参考产品的 kWh 当量
  - 基准：收集和短距离批次处理的宽范围能源
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 未收集或田间损伤的板栗（`chestnut_harvest_loss`）

记录留在板栗园、收集前受损或从收集批次排除的成熟板栗，并披露去向和水分基准。

- 选定流：田间损失或损伤的带壳板栗
- 流属性/单位：质量 / kg
- 数量规则：可采收质量与收集质量之差，实测或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格鲜品农业田地交接点参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chestnut_harvest_lot_records`
- 数量范围：田间损失筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：可采收带壳板栗质量的 %
  - 基准：田间收集和成熟度损失比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 板栗外壳/果皮残余或有意副产品（`chestnut_husk_output_or_residue`）

有意输出集合包括合格带壳等级批次，以及在有意收集时的板栗外壳/果皮副产品；每个有意输出都必须有声明交接点。苹果被有意收集并交付给声明用户时，作为具有实测去向的有意副产品记录；未作为产品收集时，记录其质量和残余去向，不分配市场信用。

- 选定流：交付至声明去向的板栗外壳/果皮或板栗外壳/果皮残余
- 流属性/单位：质量 / kg 接收状态
- 数量规则：按采收批次实测苹果质量和去向；只有有路线说明时才允许为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格鲜品农业田地交接点参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_husk_destination_records`
- 数量范围：板栗外壳/果皮去向筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：2,000
  - 单位：每 1,000 kg 参考产品的 kg 接收状态苹果
  - 基准：苹果与板栗质量宽范围；以实测批次替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 采收和收集残余（`chestnut_harvest_residue`）

记录叶片、茎、土、石块和收集时移除的其他材料，并说明是否留在板栗园、堆肥或离开前景边界。

- 选定流：采收和收集残余
- 流属性/单位：质量 / kg 接收状态
- 数量规则：按去向称量或透明估算残余
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格鲜品农业田地交接点参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_harvest_lot_records`
- 数量范围：采收残余筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：每 1,000 kg 参考产品的 kg
  - 基准：收集碎屑和伴随材料比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：板栗初级干燥、清理和带壳分级（`chestnut_primary_conditioning_and_grading`）

本过程为条件过程。当声明交接点超出平台鲜品农业田地交接点，或前景数据包包含干燥、清理和质量分选时纳入。本过程是独立的物料处理节点，具有接收带壳批次、调制和分级输出状态以及声明交接点；不脱壳，也不产生去壳仁产品。

#### 输入

##### 产品流

###### 鲜收带壳板栗批次（`chestnut_conditioning_input`）

使用已核实的平台鲜带壳批次身份，同时保留已收集、已分离板栗外壳/果皮、调制前状态限定信息。

- 选定流：Chestnuts, in shell `3351a3d2-3367-4a2f-8cdb-9b025fdd9989`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次实测接收质量和水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 合格鲜品农业田地交接点参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_dehusking_conditioning_records`
- 数量范围：调制输入质量 QA 校验范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：900
  - 上限：1,250
  - 单位：每 1,000 kg 参考产品的 kg 鲜带壳批次
  - 基准：水分损失、清理和拒收前的接收批次
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 干燥和清理用水或辅助服务（`chestnut_conditioning_water`）

仅在湿法清理或其他用水调制作业发生时记录用水。日晒和干法清理路线对本行记录有说明的零值，并在需要时另行记录能源或劳动等服务。

- 选定流：可选湿法清理或调制用过程水
- 流属性/单位：体积或质量 / L、m3 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- 分组选择：根据路线确定交付水、清洗水或其他功能
- 数量规则：按批次计量或有证据的用水；干法路线有说明时允许零值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_dehusking_conditioning_records`
- 数量范围：可选湿法调制用水筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：每 1,000 kg 参考产品的 L
  - 基准：干法路线至可选湿法清理的宽范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥和调制能源（`chestnut_conditioning_energy`）

按批次、设备、能源载体和持续时间记录日晒辅助、强制风干、机械干燥及其他调制能源，并保留路线技术和实测水分变化。

- 选定流：干燥和初级调制能源供应
- 流属性/单位：能量或载体质量 / MJ、kWh 或 L
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 分组选择：根据路线确定电力、热燃料或其他能源载体
- 数量规则：按计量、燃料记录或设备与时长计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_dehusking_conditioning_records`
- 数量范围：干燥能源筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：每 1,000 kg 参考产品的 kWh 当量
  - 基准：日晒辅助至机械干燥的宽范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 高等级合格带壳板栗（`chestnut_premium_grade_output`）

记录作为有意输出的合格等级和交接；产品仍是带壳板栗，脱壳和仁分级不在本 PCR 内。

- 选定流：Chestnuts, in shell `3351a3d2-3367-4a2f-8cdb-9b025fdd9989`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次、水分和交接点实测高等级合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 鲜品农业田地交接点参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_grade_reject_records`
- 数量范围：高等级输出筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：每 1,000 kg 鲜品参考产品的 kg
  - 基准：调制批次的一个声明合格等级份额
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 标准等级合格带壳板栗（`chestnut_standard_grade_output`）

记录作为有意输出的独立标准等级和交接；高等级与标准等级必须互斥并合计为合格分级输出。

- 选定流：Chestnuts, in shell `3351a3d2-3367-4a2f-8cdb-9b025fdd9989`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次、水分和交接点实测标准等级合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 鲜品农业田地交接点参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_grade_reject_records`
- 数量范围：标准等级输出筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：每 1,000 kg 鲜品参考产品的 kg
  - 基准：调制批次的一个声明合格等级份额
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级或可返工带壳批次（`chestnut_downgraded_lot`）

将可能销售或返工的规格外带壳板栗与合格等级分开，并声明降级、返回清理或干燥、恢复至其他带壳去向或废弃路径。

- 选定流：降级或可返工的带壳板栗
- 流属性/单位：质量 / kg
- 数量规则：实测规格外质量和下游路径
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 鲜品农业田地交接点参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_grade_reject_records`
- 数量范围：降级或可返工批次筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：调制输入质量的 %
  - 基准：需要声明路径的规格外比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拒收板栗和空壳（`chestnut_rejected_nuts`）

记录空壳、霉变、虫害、明显变质或其他拒收板栗，保留拒收原因和去向；拒收质量不计入合格输出。

- 选定流：拒收带壳板栗
- 流属性/单位：质量 / kg
- 数量规则：按批次和拒收原因实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 鲜品农业田地交接点参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_grade_reject_records`
- 数量范围：拒收板栗筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：调制输入质量的 %
  - 基准：空壳、霉变、虫害、损伤或不可接受缺陷比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 异物和粉尘（`chestnut_foreign_material`）

记录清理过程中移除的土、石、叶、茎、不属于合格板栗的壳片和粉尘；有意回收时记录去向，不得静默作为废物。

- 选定流：板栗清理产生的异物和粉尘
- 流属性/单位：质量 / kg
- 数量规则：按批次和去向称量或透明估算移除物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 鲜品农业田地交接点参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_grade_reject_records`
- 数量范围：异物筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：调制输入质量的 %
  - 基准：清理移除比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 初级流

###### 干燥水分损失（`chestnut_drying_water_loss`）

根据接收和调制状态的实测质量与水分计算板栗批次移除的水；已有水分数据时不得使用未测量的通用干燥损失。

- 选定流：板栗干燥释放到空气中的水
- 流属性/单位：质量 / kg 水
- 数量规则：根据实测批次质量和水分计算接收干物质与调制干物质差，并扣除非水损失
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 鲜品农业田地交接点参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chestnut_dehusking_conditioning_records`
- 数量范围：干燥水分损失筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：每 1,000 kg 鲜品参考产品的 kg 水
  - 基准：接收和调制批次的质量及水分差
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`; `fao-chestnut-minor-oil-crops`

###### 可选调制废水（`chestnut_conditioning_residuals`）

仅在湿法清理或湿法调制时记录废水；干法路线以过程说明记录零值。

- 选定流：可选湿法清理或调制废水
- 流属性/单位：体积或质量 / L、m3 或 kg
- 数量规则：按批次计量废水或用水量平衡，并记录处理去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_dehusking_conditioning_records`
- 数量范围：可选调制废水筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：每 1,000 kg 参考产品的 L
  - 基准：干法路线至可选湿法清理废水的宽范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：板栗储存和交接（`chestnut_storage_and_gate_handoff`）

本过程为条件过程。当产品在声明交接点前储存，或数据包代表干燥、清理、分级和储存后的带壳批次而不是鲜品农业田地交接点参考状态时纳入。

#### 输入

##### 产品流

###### 储存用合格分级带壳批次（`chestnut_storage_input`）

将高等级和标准等级作为互斥批次状态进入储存，并保留水分、等级、容器皮重和批次身份。

- 选定流：Chestnuts, in shell `3351a3d2-3367-4a2f-8cdb-9b025fdd9989`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测进入储存的合格分级质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 声明储存交接产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_storage_records`
- 数量范围：储存输入质量校验范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：900
  - 上限：1,050
  - 单位：每 1,000 kg 声明储存交接产品的 kg
  - 基准：储存损失和包装皮重前的合格批次
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 储存包装和搬运服务（`chestnut_storage_packaging`）

仅在声明储存边界内时记录袋、托盘、箱、内衬和搬运能源；重复使用资产按有记录的使用次数或服务寿命分配。

- 选定流：储存包装和搬运服务
- 流属性/单位：质量、件数或能量 / kg、item、kWh 或 MJ
- 数量规则：按批次实测包装质量或搬运能源，并处理重复使用和服务寿命
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 声明储存交接产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_storage_records`
- 数量范围：储存包装筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：60
  - 单位：每 1,000 kg 声明储存交接产品的 kg 包装和耗材
  - 基准：重复使用或一次性储存容器区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储存电力和搬运能源（`chestnut_storage_energy`）

按储存批次和时间记录电力、燃料、通风、虫害控制服务和搬运能源；使用的植保物质另行记录。

- 选定流：储存和搬运能源供应
- 流属性/单位：能量或载体质量 / kWh、MJ 或 L
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 分组选择：根据记录确定能源载体和服务
- 数量规则：按储存批次和时间计量或供应商记录能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 声明储存交接产品
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_storage_records`
- 数量范围：储存能源筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：每 1,000 kg 声明储存交接产品、每储存期的 kWh 当量
  - 基准：环境储存至机械通风储存区间
  - 基准类型：储存时间（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 储存损伤和质量损失（`chestnut_storage_loss`）

按储存时间、原因和去向记录受损、霉变、虫害、洒漏或其他损失的带壳板栗，损失不得计入交接输出。

- 选定流：储存损伤或损失的带壳板栗
- 流属性/单位：质量 / kg
- 数量规则：按收货、发货、期末库存和损失记录核对期初和期末库存差
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 声明储存交接产品
- 基准类型：储存时间（`storage_duration`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chestnut_storage_records`
- 数量范围：储存损失筛选范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：0
  - 上限：12
  - 单位：每声明储存期储存输入质量的 %
  - 基准：损失、损伤、虫害、水分和洒漏比例
  - 基准类型：储存时间（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 声明交接点带壳板栗输出（`chestnut_gate_output`）

记录声明交接点的发货批次，并保留鲜品或调制状态、水分、等级和储存时长。产品身份继续使用同一平台 UUID，过程状态由交接限定信息表达。

- 选定流：Chestnuts, in shell `3351a3d2-3367-4a2f-8cdb-9b025fdd9989`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按净发货质量实测并排除皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交接输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chestnut_storage_records`
- 数量范围：交接输出质量校验范围
  - 范围角色：QA 校验范围（`qa_guardrail`）
  - 下限：950
  - 上限：1,020
  - 单位：每 1,000 kg 声明交接输出的 kg
  - 基准：储存核对后的净发货产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

## 7. 分配和副产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 有意板栗外壳/果皮输出的板栗园和采收 | 当板栗园、采收、苹果收集和板栗收集有独立记录时，优先采用过程细分。板栗外壳/果皮被有意收集并交付为副产品时，按实测干物质质量分配共用板栗园和采收负荷；没有干物质数据时使用实测接收质量，并披露局限。 | `iso-14044-2006`; `fao-chestnut-india-production-1998` |
| `allocation_02` | 板栗外壳/果皮不作为产品收集 | 苹果留在板栗园或作为没有有意产品交接的残余处理时，不分配副产品信用；保留其质量和去向，并将共用负荷分配给有意生产的带壳板栗输出。 | `iso-14044-2006`; `fao-chestnut-minor-oil-crops` |
| `allocation_03` | 高等级和标准等级带壳板栗 | 共用调制负荷无法过程细分时，在互斥的合格带壳等级之间按物理质量分配。等级专属作业归于对应等级；同一批次不得同时计入等级行和汇总输出行。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_04` | 多年生板栗园期间和阶段 | 将建立、未结果年份、补植和清除按板栗园寿命及合格产出基准年度化；每项投入和输出连接到作物年度或生命周期阶段，不得在原板栗园和补植阶段重复计入补植事件。 | `fao-chestnut-india-production-1998`; `iso-14044-2006` |
| `allocation_05` | 降级、返工、拒收和回收批次 | 将拒收和降级批次与合格产品分开；返工保留生产节点负荷并只连接一次；回收或有意销售材料必须有声明去向和分配决定；废弃材料承担声明的处理负荷。 | `mass-balance-identity`; `iso-14044-2006` |
| `allocation_06` | 批次、campaign 和换批归属 | 将板栗园、采收、调制、清理、分级和储存投入与输出连接到产生它们的批次或 campaign；清场和换批事件只记录一次；没有有文件支持的分配驱动时，不得将共用运行负荷分配给多个批次。 | `mass-balance-identity`; `iso-14044-2006` |

板栗壳质量是带壳参考产品的一部分，在本 PCR 中不是单独副产品。板栗壳液、壳片、板栗仁、种皮和所有脱壳输出属于下游脱壳或板栗仁 PCR，不得引入本清单。任何输出不得同时作为板栗外壳/果皮副产品和板栗园残余计入。

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_chestnut_orchard_lifecycle_records` | `chestnut_orchard_establishment_and_management` | 板栗园资产、土地、种植、补植、残余 | 板栗园地块和资产登记 | 地块面积；建立年份；品种；树数；补植；清除；修剪残余；板栗园阶段；合格产出 | 地块登记、田间记录和年度核对 | ha、item、kg、板栗园年 | 事件和年度 | 完整声明寿命或有文件支持的代表性期间 | 所有贡献地块 | 将地块记录连接到作物年度和合格产出 | 签署登记、GIS 或测量面积、补植证据 |
| `cp_chestnut_orchard_input_records` | `chestnut_orchard_establishment_and_management` | 养分、改良剂、植保 | 投入施用记录 | 产品名；配方；养分含量；有效成分；数量；日期；地块；用途；施用方法 | 发票、施用日志和供应商记录 | kg 产品、kg 养分、kg 有效成分 | 每次施用 | 作物年度 | 所有贡献地块 | 按产品、养分、地块和作物年度汇总 | 发票、产品标签、施用日志 |
| `cp_chestnut_irrigation_records` | `chestnut_orchard_establishment_and_management` | 灌溉和水 | 灌溉计量或水量台账 | 水源；体积；地块；日期；计量表；水质；取水和回用 | 计量表、泵记录或透明水量平衡 | m3 或 kg | 事件和月度 | 作物年度 | 所有灌溉地块 | 核对交付、取水和声明消耗 | 计量校准、泵记录、水量台账 |
| `cp_chestnut_energy_records` | 所有田间、采收、调制和储存过程 | 能源和载体 | 燃料、电力和设备记录 | 载体；数量；设备；作业；批次或地块；日期；时长；换算因子 | 发票、计量、燃料日志或设备记录 | L、kg、MJ 或 kWh | 事件和月度 | 作物年度及声明后处理期 | 每项作业和设施 | 按载体、作业、批次和期间汇总 | 发票、计量、燃料日志、设备规格 |
| `cp_chestnut_emission_records` | `chestnut_orchard_establishment_and_management` | 直接和间接田间排放 | 排放计算输入记录 | 养分投入；残余；土壤条件；植保记录；排放物种；方法；因子 | 连接原始记录的计算工作簿 | kg 物质 | 年度和事件 | 作物年度 | 所有贡献地块 | 保留物质、接收介质、因子和来源 | 计算复核、因子版本、来源引用 |
| `cp_chestnut_harvest_lot_records` | `chestnut_harvest_and_collection` | 采收、收集、田间损失、残余 | 采收批次登记 | 地块；收集轮次；成熟度；采收质量；未收集质量；碎屑；苹果分离；去向 | 地磅、田间秤和批次日志 | kg、日期、批次 | 每次收集轮次 | 采收季 | 所有贡献地块 | 核对可采收、收集、损失和残余质量 | 计量校准、批次单、田间检查 |
| `cp_chestnut_husk_destination_records` | `chestnut_harvest_and_collection` | 板栗外壳/果皮副产品或残余 | 去向和转移记录 | 苹果质量；干物质或水分；去向；接收方；价格或用途；去向；转移日期 | 称量、转移记录和去向确认 | kg 和声明分数 | 每次转移 | 采收季 | 每个苹果去向 | 分开记录有意输出与残余和废物 | 收据、转移单、去向证据 |
| `cp_chestnut_dehusking_conditioning_records` | `chestnut_primary_conditioning_and_grading` | 干燥、清理、用水、能源、水分 | 调制批次记录 | 输入质量；输入水分；方法；时长；能源；用水；输出水分；输出质量；清理损失；废水 | 批次日志、计量、水分检测和水量平衡 | kg、%、小时、L、kWh | 每批次 | 声明后处理期 | 每个调制设施或农场单元 | 将所有投入和输出连接至一个批次和交接点 | 校准秤、水分检测、批次单 |
| `cp_chestnut_grade_reject_records` | `chestnut_primary_conditioning_and_grading` | 等级、降级、拒收、异物 | 检验和分级记录 | 批次；等级；壳状况；仁缺陷；空壳；霉变；虫害；异物；合格质量；返工；去向 | 检验、抽样和称量记录 | kg、%、等级代码 | 每批次 | 声明后处理期 | 每个分级点 | 等级和拒收状态互斥 | 检验单、抽样方案、秤校准 |
| `cp_chestnut_storage_records` | `chestnut_storage_and_gate_handoff` | 储存输入、损失、包装、交接输出 | 库存和发货台账 | 期初库存；收货；批次；水分；储存时间；包装；能源；损伤；期末库存；发货质量；交接点 | 库存台账、发货单和储存日志 | kg、%、天、kWh、item | 收货、检查和发货 | 声明储存期 | 每个储存设施 | 期初 + 收货 = 发货 + 期末 + 损失 | 库存核对、发货单、水分和虫害记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | 多年生板栗园投入 | 按板栗园寿命基准和各作物年度合格产出分配建立、未结果年份、补植和清除。 | 板栗园资产登记；板栗园寿命；作物年度产出 | 每参考流的年度化板栗园投入 | `fao-chestnut-india-production-1998`; `iso-14044-2006` |
| `calc_02` | 所有采收、调制和储存批次 | `期初质量 + 投入 = 合格输出 + 副产品 + 拒收物 + 残余 + 实测损失`；调查未解释差额。 | 批次质量和去向 | 核对后的质量平衡 | `mass-balance-identity` |
| `calc_03` | 鲜品到干燥或调制批次 | 干物质 = 湿质量 ×（1 − 水分分数）；扣除非水损失后，移除水 = 输入湿质量 − 输出湿质量。 | 输入/输出质量和实测水分 | 水分修正质量和干燥水损失 | `mass-balance-identity`; `fao-chestnut-minor-oil-crops` |
| `calc_04` | 板栗外壳/果皮副产品 | 苹果有意交付时，按实测干物质质量分配共用板栗园和采收负荷；无意交付时建模为残余去向，不分配副产品信用。 | 板栗质量；苹果质量；水分或干物质；声明去向 | 分配后的负荷和副产品份额 | `iso-14044-2006` |
| `calc_05` | 高等级、标准等级、降级和拒收批次 | 等级输出必须互斥；调制合格输出等于等级输出加声明的降级、返工、拒收、异物、水分损失和未解释损失项。 | 批次输入；分级和拒收记录 | 归一化输出行 | `mass-balance-identity` |
| `calc_06` | 储存 | `期初库存 + 收货 − 发货 − 期末库存 = 实测储存损失`；储存损失不属于合格交接输出。 | 库存台账；发货；期末库存；损失记录 | 按储存时间的储存损失 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_01` | 流身份 | 使用已核实的带壳板栗参考 UUID，并保留鲜品农业田地交接点或延伸交接限定信息；不得使用去壳板栗或板栗仁身份。 | 平台身份记录；数据集元数据 |
| `quality_02` | 板栗园和采收数量 | 使用校准秤、计量表或透明记录的估算；路线不使用灌溉、湿法清理、包装或储存时记录有说明的零值。 | 校准记录；田间和批次日志 |
| `quality_03` | 水分和干燥 | 在接收和发货时对代表性批次测量水分，并声明水分方法、采样点和湿基或干基。 | 水分检测；抽样方案；批次记录 |
| `quality_04` | 完整性 | 核对板栗园投入、采收输出、板栗外壳/果皮去向、调制输出、拒收物、残余、水分损失、储存损失和交接发货。 | 质量平衡工作簿；库存台账 |
| `quality_05` | 时间和多年生代表性 | 覆盖声明作物年度，报告板栗园阶段、结果年龄、补植事件、异常天气和平均方法。 | 作物年度登记；板栗园生命周期记录 |
| `quality_06` | 副产品和去向 | 为每个有意板栗外壳/果皮交接、降级去向、返工循环、拒收处理和残余去向提供证据；未经确认的去向不分配信用。 | 转移单；去向记录；处理记录 |
| `quality_07` | 地理和技术 | 披露国家、地区、气候、土壤、灌溉制度、采收方式、干燥方式、分级方式、储存条件和交接点。 | 场址说明；过程说明；设施记录 |
| `quality_08` | 不确定性和估计 | 将暂定范围标为候选阶段、可替换的估计，并在进入 reviewed 或 published 使用前替换为实测或有来源支持的值。 | 审查记录；更新后的前景数据集 |

## 9. 验证规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 参考流 | 参考产品是已核实的 `Chestnuts, in shell` UUID，属性为 Mass、单位为 kg；数据集声明鲜品农业田地交接点或延伸交接状态，不替换为去壳仁。 | `fda-chestnut-nut-methods` |
| `validation_02` | 过程图 | 所有 required 过程存在；当声明交接点或路线需要时，条件性的干燥、清理、分级和储存过程必须存在。 | `fao-chestnut-postharvest-2020` |
| `validation_03` | 多年生生产 | 板栗园建立、未结果期、结果期、补植和清除连接至声明作物年度，且不得重复计量。 | `fao-chestnut-india-production-1998`; `iso-14044-2006` |
| `validation_04` | 采收和板栗外壳/果皮分离 | 采收、收集、未收集、板栗外壳/果皮、残余和合格板栗质量互相核对，并声明苹果去向。 | `mass-balance-identity` |
| `validation_05` | 调制和质量 | 鲜品输入、调制水分、高等级、标准等级、降级/返工、拒收、异物、水分损失和废水互斥并满足质量平衡。 | `mass-balance-identity`; `fao-chestnut-minor-oil-crops` |
| `validation_06` | 储存和交接 | 期初库存、收货、发货、期末库存、储存损伤、水分、储存时间和交接输出互相核对；储存损失排除在合格输出之外。 | `mass-balance-identity`; `fao-chestnut-postharvest-2020` |
| `validation_07` | 分配和返工 | 板栗外壳/果皮分配、等级分配、降级路径、返工循环和拒收处理明确，任何负荷或输出不得重复计入。 | `iso-14044-2006` |
| `validation_08` | 证据和披露 | 所有重要数量流具有前景采集规则及候选范围或方法约束；估计、未解析身份、交接状态、水分和证据局限必须披露。 | `fao-chestnut-postharvest-2020`; `mass-balance-identity` |
| `validation_09` | 批次和 campaign 记录 | 每个采收轮次、调制批次、分级批次和储存收货都具有声明边界、关联投入与输出、清场或换批状态以及报告期间；共用运行负荷不得重复计入。 | `mass-balance-identity` |

## 10. 发布数据集简介

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查的带壳板栗前景数据集使用 `secondary_dataset`；只有通过规定审查和发布门槛后才可提升为 `background_dataset` |
| downstream_use | 构建和验证声明鲜品农业田地交接点或延伸后处理交接点的带壳板栗 process 和 lifecyclemodel 投影 |
| allowed_use | 当保留产品状态、水分、质量、作物年度、地理位置和分配处理时，用于板栗园、采收、板栗外壳/果皮分离、干燥、清理、带壳分级、储存和交接建模 |
| excluded_use | 去壳仁生产、脱壳、板栗壳液回收、烘烤、蒸煮、去皮、板栗仁加工、零售产品、消费者使用、交接点后物流以及未声明产品类别 |
| required_metadata | 参考 UUID；Mass 属性和 Units of mass 单位组；CPC 3.0 `01373`；品种；地理位置；板栗园阶段和年龄；作物年度；灌溉；水分基准；鲜品或延伸交接点；壳和仁质量；等级；板栗外壳/果皮去向；合格、拒收、残余、损失和储存记录 |
| required_quality_disclosure | 实测与估计区分；水分方法；质量平衡完整性；板栗园寿命分配；副产品分配；返工和拒收去向；储存时间；数据期间；地理位置；技术；未解析身份差距 |
| update_trigger | 新作物年度记录、板栗园阶段或补植重大变化、干燥或分级技术变化、新的板栗外壳/果皮有意路线、储存实践变化、有来源范围替换或平台身份修订 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-chestnut-india-production-1998` | official_guidance | FAO, Integrated Production Practices of Chestnut in India, https://www.fao.org/4/ac451e/ac451e04.htm | 多年生板栗园阶段、采收成熟度、板栗外壳/果皮分离、干燥和板栗园寿命 |
| `fao-chestnut-postharvest-2020` | extension_guidance | FAO TECA / African Chestnut Initiative, Guide to harvesting and post-harvest handling of chestnut nuts, https://www.fao.org/family-farming/detail/en/c/1619106/ | 采收质量、采后处理、储存和过程分解 |
| `fao-chestnut-minor-oil-crops` | handbook | FAO, Minor oil crops: chestnut nut monograph, https://www.fao.org/4/x5043e/x5043e06.htm | 板栗外壳/果皮分离、日晒、含水率背景和储存实践 |
| `fda-chestnut-nut-methods` | official_guidance | U.S. FDA, MPM V-10 Nuts and Nut Products Methods, https://www.fda.gov/food/laboratory-methods-food/mpm-v-10-nuts-and-nut-products-methods | 缺陷、霉变、虫害、壳和带壳质量区分 |
| `ipcc-2019-afolu` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | 管理土壤和农业排放计算方法背景 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://committee.iso.org/standard/38498.html | 分配层级、数据质量、边界和披露规则 |
| `mass-balance-identity` | method_factor | 用于批次核对的质量守恒方法身份 | 采收、调制、储存、拒收、残余和水分损失核对 |
