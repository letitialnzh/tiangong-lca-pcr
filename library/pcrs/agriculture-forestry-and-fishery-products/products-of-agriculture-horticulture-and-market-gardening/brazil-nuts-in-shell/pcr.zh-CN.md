---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.brazil-nuts-in-shell
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: draft_translation
---

# 带壳巴西坚果

## 1. 范围与适用性

本 PCR 适用于在受管理的多年生巴西坚果园中生产，并在声明的农场、初级调制或储存交接点交付的带壳巴西坚果前景数据包。范围包括巴西坚果园建立和补植、未结果期和结果期管理、采收与收集、巴西坚果木质荚果分离、干燥、清理、带壳质量分选、储存以及声明交接。

规范参考流遵循平台记录 `Brazil nuts, in shell`，CPC 3.0 为 `01377`，平台限定信息为 `Production mix, at farm gate; Fresh, unprocessed produce`。数据集必须披露声明交接点是鲜品农场交接点参考状态，还是经过干燥、清理、分级或储存的延伸状态，不能将这些状态静默混合。

本 PCR 适用于常规、综合、有机、雨养和灌溉路线，但必须披露品种或品种组、地理位置、巴西坚果园年龄、作物年度、采收方式、干燥路线、水分基准、质量状态和交接点。不包括苗圃生产、脱去巴西坚果单粒硬壳取仁、烘烤、蒸煮、去皮、巴西坚果壳液回收、仁分级、食用坚果加工、零售包装、消费者使用以及声明交接点后的运输或储存。本 PCR 不选择“other”或 n.e.c. 产品类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.brazil-nuts-in-shell` |
| classification_refs | CPC 3.0 `01377`，Brazil nuts, in shell; mapping relation: broader |
| covered_products | 保留硬壳的巴西坚果，包括农场交接点鲜收带壳巴西坚果，以及在声明延伸交接点交付的干燥、清理、分级或储存带壳巴西坚果批次 |
| excluded_products | 巴西坚果仁和去壳巴西坚果；烘烤、蒸煮、去皮、加盐、研磨、制油、糖果、饮料及其他下游巴西坚果产品；苗圃投入和交接点后物流 |
| representative_product | 分离巴西坚果木质荚果、保留硬壳、披露水分和质量状态，并在声明交接点交付的合格带壳巴西坚果 |
| production_route | 受管理生物生产或野生森林单元采集、季节性荚果掉落和收集、保留硬壳的荚果开启、初级调制、分级、可选储存和声明交接 |
| market_state | 披露品种或品种组、尺寸或等级、壳和仁质量、水分基准、作物年度、地理位置、合格和拒收质量以及交接点的鲜品农场交接点或干燥调制带壳巴西坚果批次 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明交接点的带壳巴西坚果，保留硬壳并已分离巴西坚果木质荚果 |
| How much | 1,000 kg 净带壳巴西坚果 |
| How well | 品种或品种组；生产国家、地区和气候；巴西坚果园年龄和结果状态；作物年度；鲜品或干燥状态；水分基准；壳和仁质量；尺寸或等级；合格、降级和拒收质量；巴西坚果木质荚果去向；交接点 |
| How long or cycle | 多年生巴西坚果园结果寿命内声明的一个作物年度；建立、未结果年份、补植和清除按巴西坚果园寿命和合格产出基准分配 |
| reference_flow_link | brazil_nut_conditioned_accepted_output; brazil_nut_gate_output |
| reference_flow_selection | exactly_one_declared_terminal_output |
| reference_selection_required | actual_route; declared_gate; product_state; output_row_id |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | Brazil nuts, in shell `5eada32e-7ae8-44ae-9f1e-66f84b193b84` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或品种组；巴西坚果园地块和地理位置；建立年份、巴西坚果园年龄、结果状态和补植事件；土壤和气候；灌溉状态和水源；作物年度或平均期；采收成熟度和巴西坚果木质荚果分离方式；鲜品或干燥状态；水分基准；壳状况；尺寸或等级；合格、降级、拒收和损失质量；巴西坚果木质荚果去向；储存时间和条件；交接点 |

`必需限定信息` 必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。净产品质量不包括容器皮重。平台身份是鲜品农场交接点产品流；干燥或储存批次是延伸交接状态，必须保留该限定信息，不能伪装成新的产品类别。不得用去壳巴西坚果仁作为本 PCR 的参考产品。

每个前景数据集必须明确选择一个实际路线、声明门、产品状态和输出行。仅将所选终端输出归一化为参考数量；若继续进入后续过程，前序输出仍采用实测内部转移数量。原始称量、质量平衡和批次追踪要求继续适用。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以声明交接点的净合格带壳巴西坚果表示参考流，并排除容器皮重。 |
| `fresh_or_conditioned_gate` | 参考流和交接输出 | 质量和声明产品状态 | kg 和声明状态 | 分开记录鲜品农场交接点、干燥调制和储存交接状态；没有实测水分和质量换算时，不得将干燥后质量当作鲜品质量。 |
| `yield_and_output_basis` | 巴西坚果园、采收、调制和储存输出 | 质量和面积 | kg 和 ha | 归一化前，对同一巴西坚果园年度、批次或报告期记录采收巴西坚果、合格等级、巴西坚果木质荚果、拒收物、异物、储存损失和未解释损失。 |
| `moisture_basis` | 采收、干燥、储存和合格巴西坚果 | 质量和水分分数 | kg 和声明分数 | 保留接收质量和水分；仅使用实测水分以及透明的水质量或干物质方程在鲜品和干燥状态之间换算。 |
| `shell_and_kernel_quality` | 合格带壳产品 | 声明质量属性 | 声明单位 | 保留壳完整性、壳变色、空壳、虫害或霉变、仁缺陷基准、异物、尺寸或等级和干燥充分状态，不用统一默认等级替代。 |
| `orchard_life_allocation_basis` | 建立、补植和未结果期投入 | 面积、时间或质量活动属性 | ha、巴西坚果园年或 kg 产品 | 将多年生建立、未结果年份、补植树和清除按巴西坚果园寿命及合格产出基准分配，并披露未结果年份和补植事件。 |
| `nutrient_product_and_n_basis` | 养分和土壤改良投入 | 产品和养分质量 | kg 产品及 kg N、P2O5 或 K2O | 分开记录配方产品质量和有文件支持的养分含量；氮排放计算使用声明的 kg N。 |
| `water_basis` | 灌溉和湿法处理 | 体积或质量 | m3 或 kg | 区分交付灌溉水、自然资源取水、排水或消耗指标以及可选湿法清理水；干法路线对湿法清理水记录有说明的零值。 |
| `energy_inventory` | 巴西坚果园、采收、干燥、分级和储存 | 质量、体积或能量 | kg、L、MJ 或 kWh | 保留能源载体、单位、作业、设备、期间和换算基准，并区分燃料、电力和热干燥能源。 |
| `packaging_quantity` | 交接点内可选储存包装 | 质量或件数 | kg、g 或 item | 包装跨越声明边界时，记录包装质量或件数、包装容量、材料、重复使用状态和批次归属。 |

## 5. 系统边界

默认前景边界从声明的巴西坚果园起始条件开始，经过多年生巴西坚果园管理、采收与收集、巴西坚果木质荚果分离，到合格带壳巴西坚果在鲜品农场交接点的交接。延伸调制路线另纳入日晒或机械干燥、清理、带壳质量分选、储存和声明的后处理交接点。种植材料、肥料、植保产品、灌溉水、能源载体、机械服务和包装的上游生产使用有代表性的背景数据集。脱去单粒硬壳取仁、巴西坚果壳液回收、仁加工、零售、交接点后运输和储存不在默认边界内。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 建园前或建立时的巴西坚果园地块，种植材料和购买的管理投入跨越前景边界；既有土地用途和巴西坚果园历史单独披露 |
| starting_condition_role | 受管理多年生巴西坚果生产和巴西坚果园资产核算的起点 |
| product_classification_scope | CPC 3.0 `01377`，Brazil nuts, in shell；去壳巴西坚果和下游巴西坚果产品不在本 PCR 内 |
| recursive_input_rule | 同类种植材料或跨越边界的保留带壳巴西坚果作为上游投入记录，不递归展开为另一个带壳产品输出。巴西坚果园、采收、调制和储存之间的内部交接是过程链接，不是额外市场输出。 |
| upstream_dataset_requirement | 苗圃材料、养分产品、植保、灌溉供水、燃料、电力、干燥能源、包装、机械服务和废物处理跨越边界时，使用有代表性的上游数据集。 |
| disclosure | 品种和巴西坚果园地块；地理位置、土壤、气候和土地历史；建立年份、巴西坚果园年龄、结果寿命和补植；灌溉水源和水质；养分和植保；采收成熟度和巴西坚果木质荚果去向；鲜品或干燥状态；干燥方式和水分；壳和仁质量；等级、拒收和储存记录；交接点；以及任何有意巴西坚果木质荚果副产品交付 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_tree_to_farm_gate` | 所有符合条件的数据集 | 纳入多年生巴西坚果园建立、未结果年份、结果期管理、采收、收集、巴西坚果木质荚果分离和声明鲜品农场交接点交接。 | `fao-brazil-nut-fruit-structure`; `iso-14044-2006` |
| `boundary_dehusking_extension` | 延伸后处理路线 | 只有声明交接点超出鲜品农场交接点，或这些作业属于前景数据包时，才纳入干燥、清理、带壳分级和储存；报告延伸交接点，不得重新标注为平台鲜品未加工状态。 | `fao-brazil-nut-postharvest-2020`; `fao-brazil-nut-fruit-structure` |
| `boundary_perennial_tree_disclosure` | 建立和补植 | 将建立、未结果年份、补植树和清除按巴西坚果园寿命及合格产出基准分配，并披露寿命、未结果年份和补植事件。 | `fao-brazil-nut-fruit-structure`; `iso-14044-2006` |
| `boundary_no_shell_removal` | 带壳产品 | 硬壳属于产品边界；排除脱去单粒硬壳取仁、巴西坚果壳液回收、仁分离、烘烤、蒸煮、去皮和仁分级，因为它们属于下游去壳仁路线。 | `fda-brazil-nut-nut-methods`; `fao-brazil-nut-fruit-structure` |
| `boundary_quality_and_fate` | 所有输出 | 按实测质量和声明去向区分合格带壳巴西坚果、巴西坚果木质荚果、降级批次、拒收巴西坚果、异物、粉尘、水分损失和未解释损失。 | `fao-brazil-nut-postharvest-2020`; `fda-brazil-nut-nut-methods`; `mass-balance-identity` |

## 6. 过程清单结构

前景路线采用批次模式。每个采收轮次、调制批次、分级批次和储存收货都必须有批次或 campaign 标识，并声明开始、结束、输入集合、输出集合、清场或换批事件以及报告期间。共用设备和共用运行负荷只归属于相关批次或 campaign 一次。

对于多地点森林采集数据集，必须列出每个贡献森林管理单元、采集队、接收点和调制地点。将地点级投入、荚果产量、质量证据和输出链接到共同的农场交接边界，并报告聚合方法和代表性判断。多个采集点共用一个接收台账时，不得遗漏地点或重复计数。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `brazil-nut_forest_establishment_and_management` | 巴西坚果受管理生物生产和森林单元管理 | required | 多地点聚合贡献森林单元 | foreground | 树木年度投入和合格产出基准 |
| `brazil-nut_harvest_and_collection` | 巴西坚果采收、巴西坚果木质荚果分离和收集 | required |  | foreground | 可选调制前的采收巴西坚果 |
| `brazil-nut_primary_conditioning_and_grading` | 巴西坚果初级干燥、清理和带壳分级 | conditional | 声明交接点超出鲜品农场交接点，或前景数据包包含这些作业时纳入 | primary conditioning and stabilization | 接收批次和等级输出 |
| `brazil-nut_storage_and_gate_handoff` | 巴西坚果储存和交接 | conditional | 声明前景边界包含储存或后处理交接点时纳入 | storage and delivery hand-off | 1,000 kg 声明交接输出 |

### 过程：巴西坚果生产系统建植和管理（`brazil_nut_forest_establishment_and_management`）

#### 输入

##### 产品流

###### 巴西坚果种植及补植材料（`brazil_nut_planting_material`）

按树木地块及建植或补植事件测量数量，再按合格产出进行年化归属。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果种植及补植材料
- 流属性/单位：件数或质量 / item 或 kg
- 数量规则：按树木地块及建植或补植事件测量数量，再按合格产出进行年化归属。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_brazil_nut_forest_lifecycle_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`default_estimate`
  - 下限：0.1
  - 上限：100
  - 单位：kg or planting units per 1,000 kg reference product
  - 基准：多年生树木建植及补植的初步宽泛估计
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 巴西坚果农业养分及肥料投入（`brazil_nut_forest_establishment_and_management_agricultural_nutrient_inputs`）

每种实际产品数量只采集一次，保留组成并计算声明的 N、P 或 P2O5、K 或 K2O 数量，避免复合肥或有机肥重复计入；生成前景数据时逐一展开产品交换并核验 UUID。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果农业养分及肥料投入
- 流属性/单位：产品数量及养分含量 / kg 产品、m3 产品、kg N、kg P2O5、kg K2O（按实际采用）
- 数量规则：每种实际产品数量只采集一次，保留组成并计算声明的 N、P 或 P2O5、K 或 K2O 数量，避免复合肥或有机肥重复计入；生成前景数据时逐一展开产品交换并核验 UUID。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_forest_input_records`
- 来源：`ipcc-2019-afolu`

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：500
  - 单位：kg formulated product per 1,000 kg reference product
  - 基准：多年生树木的年度养分及改良剂投入
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 巴西坚果灌溉供水（`brazil_nut_irrigation_water`）

按地块和作物年度计量实际输送的灌溉水或保留相关记录。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果灌溉供水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：按地块和作物年度计量实际输送的灌溉水或保留相关记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_irrigation_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：2,000
  - 单位：m3 per 1,000 kg reference product
  - 基准：宽泛的年度供水筛选范围；雨养路线可为零
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 巴西坚果田间燃料及电力（`brazil_nut_field_energy`）

按设备、作业、地块和期间测量各能源载体用量。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果田间燃料及电力
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 数量规则：按设备、作业、地块和期间测量各能源载体用量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_energy_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：250
  - 单位：MJ per 1,000 kg reference product
  - 基准：田间抽水、通行、采收支持及管理能源
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

##### 废物流

#### 输出

##### 基本流

###### 巴西坚果田间基本排放（`brazil_nut_field_emissions`）

依据有记录的投入、残余物去向、土壤条件和方法因子计算。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果田间基本排放
- 流属性/单位：质量 / kg 物质
- 数量规则：依据有记录的投入、残余物去向、土壤条件和方法因子计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_brazil_nut_emission_records`
- 来源：`ipcc-2019-afolu`

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg substance per 1,000 kg reference product
  - 基准：管理土壤及植保相关排放的初步宽泛筛选范围
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：


##### 废物流

###### 巴西坚果生产残余物（`brazil_nut_forest_residue`）

按地块和去向测量残余物质量或保留相关记录。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果生产残余物
- 流属性/单位：质量 / kg
- 数量规则：按地块和去向测量残余物质量或保留相关记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_forest_lifecycle_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1,000
  - 单位：kg per 1,000 kg reference product
  - 基准：移除或处理的森林生物质；留在土壤中的残余物跨界数量可记录为零
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

### 过程：巴西坚果采收和收集（`brazil_nut_harvest_and_collection`）

#### 输入

##### 产品流

###### 巴西坚果进入采收和收集的物料（`brazil_nut_harvest_available`）

测量木质荚果开启或调理前的采收物料质量。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：未开启的巴西坚果木质荚果
- 流属性/单位：质量 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：测量木质荚果开启或调理前的采收物料质量。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_harvest_lot_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：1,000
  - 上限：1,400
  - 单位：kg per 1,000 kg accepted reference product
  - 基准：扣除田间及质量损失前的采收完整果实质量
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 巴西坚果采收及收集能源（`brazil_nut_harvest_energy`）

测量能源载体用量，或采用声明因子换算设备活动量。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果采收及收集能源
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 数量规则：测量能源载体用量，或采用声明因子换算设备活动量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_energy_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：150
  - 单位：MJ per 1,000 kg reference product
  - 基准：采收、收集及田间处理能源
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

##### 废物流

#### 输出


##### 废物流

###### 巴西坚果采收损失（`brazil_nut_harvest_loss`）

根据田间秤或批次台账记录未交给后续过程的质量。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果采收损失
- 流属性/单位：质量 / kg
- 数量规则：根据田间秤或批次台账记录未交给后续过程的质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_harvest_lot_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：300
  - 单位：kg per 1,000 kg accepted reference product
  - 基准：未收集、受损或其他未验收的采收果实
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

### 过程：巴西坚果初级处理和分级（`brazil_nut_primary_conditioning_and_grading`）

#### 输入

##### 产品流

###### 巴西坚果进入初级处理的物料（`brazil_nut_conditioning_input`）

测量接收批次质量，并声明未开木质荚果或已开启荚果后的带壳种子状态。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：未开启的巴西坚果木质荚果
- 流属性/单位：质量 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：测量接收批次质量，并声明未开木质荚果或已开启荚果后的带壳种子状态。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_dehusking_conditioning_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：1,000
  - 上限：1,400
  - 单位：kg per 1,000 kg accepted conditioning-gate product
  - 基准：开启木质荚果及分级损失前的接收完整果实批次
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 巴西坚果初级处理及分级能源（`brazil_nut_conditioning_energy`）

按批次和作业测量各能源载体用量。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果初级处理及分级能源
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 数量规则：按批次和作业测量各能源载体用量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_energy_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：300
  - 单位：MJ per 1,000 kg accepted conditioning-gate product
  - 基准：木质荚果开启、清洁、分级及实际采用的短期稳定化能源
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 巴西坚果初级处理用水（`brazil_nut_conditioning_water`）

按调理批次计量用水。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果初级处理用水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：按调理批次计量用水。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_dehusking_conditioning_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：m3 per 1,000 kg accepted conditioning-gate product
  - 基准：实际采用的湿法清理；干法路线可为零
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

#### 输出

##### 产品流

###### 巴西坚果合格带壳产品（`brazil_nut_conditioned_accepted_output`）

测量扣除容器皮重后的批次净合格产出。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：Brazil nuts, in shell `5eada32e-7ae8-44ae-9f1e-66f84b193b84`
- 流属性/单位：质量 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
原始产出计量与核对要求：测量扣除容器皮重后的批次净合格产出。

- 数量规则：当选为参考输出时为 1000 千克；否则采用实测内部转移数量
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_grade_reject_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：700
  - 上限：1,020
  - 单位：kg per 1,000 kg received conditioning lot
  - 基准：开启木质荚果、分级并扣除声明拒收物后的合格带壳种子
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

###### 巴西坚果有明确用途的外层组织共产品（`brazil_nut_pod_coproduct`）

按批次测量木质荚果质量并声明去向。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果有明确用途的外层组织共产品
- 流属性/单位：质量 / kg
- 数量规则：按批次测量木质荚果质量并声明去向。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_pod_destination_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1,000
  - 单位：kg per 1,000 kg received lot
  - 基准：按具体去向测量的木质荚果质量
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

##### 废物流

###### 巴西坚果外层组织及残余物（`brazil_nut_pod_output_or_residue`）

按批次测量木质荚果质量及去向，或保留相关记录。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果外层组织及残余物
- 流属性/单位：质量 / kg
- 数量规则：按批次测量木质荚果质量及去向，或保留相关记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_pod_destination_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：100
  - 上限：1,000
  - 单位：kg per 1,000 kg received whole-fruit lot
  - 基准：移除的木质荚果及纤维物料；实际数量取决于成熟度及接收状态
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 巴西坚果降级及拒收产品（`brazil_nut_grade_rejects`）

分别测量互斥的合格等级、降级、返工和拒收质量。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果降级及拒收产品
- 流属性/单位：质量 / kg
- 数量规则：分别测量互斥的合格等级、降级、返工和拒收质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_grade_reject_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：250
  - 单位：kg per 1,000 kg received conditioning lot
  - 基准：拒收、降级、返工或回收的果实
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

##### 基本流

###### 巴西坚果处理残余物及直接排放（`brazil_nut_conditioning_residuals`）

测量残余物质量，或根据批次水量与固体平衡计算。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果处理残余物及直接排放
- 流属性/单位：质量 / kg 物质或废物
- 数量规则：测量残余物质量，或根据批次水量与固体平衡计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_brazil_nut_dehusking_conditioning_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg per 1,000 kg accepted conditioning-gate product
  - 基准：跨越边界的废水固体、粉尘、土壤及其他残余物
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`
  - 来源：

### 过程：巴西坚果储存及声明门交接（`brazil_nut_storage_and_gate_handoff`）

#### 输入

##### 产品流

###### 巴西坚果储存接收的带壳产品（`brazil_nut_storage_input`）

测量扣除皮重后的入库质量。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：Brazil nuts, in shell `5eada32e-7ae8-44ae-9f1e-66f84b193b84`
- 流属性/单位：质量 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：测量扣除皮重后的入库质量。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_storage_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：980
  - 上限：1,100
  - 单位：kg per 1,000 kg declared gate output
  - 基准：扣除储存损失并核对发运前的接收入库物料
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

###### 巴西坚果储存能源（`brazil_nut_storage_energy`）

将电表、发票或设备记录归属到储存批次及期间。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果储存能源
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 数量规则：将电表、发票或设备记录归属到储存批次及期间。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_energy_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：200
  - 单位：MJ per 1,000 kg declared gate output
  - 基准：声明期间内储存、通风、冷却及处理能源
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

###### 巴西坚果储存包装（`brazil_nut_storage_packaging`）

按批次和复用状态测量包装质量或件数。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果储存包装
- 流属性/单位：质量或件数 / kg 或 item
- 数量规则：按批次和复用状态测量包装质量或件数。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_storage_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：30
  - 单位：kg per 1,000 kg declared gate output
  - 基准：归属于该批次的新包装或替换储存包装
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

#### 输出

##### 产品流

###### 巴西坚果声明门的合格带壳产品（`brazil_nut_gate_output`）

测量扣除容器皮重后的净发运质量。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：Brazil nuts, in shell `5eada32e-7ae8-44ae-9f1e-66f84b193b84`
- 流属性/单位：质量 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
原始产出计量与核对要求：测量扣除容器皮重后的净发运质量。

- 数量规则：当选为参考输出时为 1000 千克；否则采用实测内部转移数量
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_storage_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：950
  - 上限：1,020
  - 单位：kg per 1,000 kg declared gate output
  - 基准：库存及损失核对后的净发运产品
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

##### 废物流

###### 巴西坚果储存损失（`brazil_nut_storage_loss`）

核对库存，并测量受损或移出物料质量。 记录实际产品状态、物料去向及批次，不将内部交接重复计为最终产出。

- 选定流：巴西坚果储存损失
- 流属性/单位：质量 / kg
- 数量规则：核对库存，并测量受损或移出物料质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_brazil_nut_storage_records`
- 来源：

- 数量范围：候选筛选范围，按声明证据类型使用，不替代实际记录
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg per 1,000 kg declared gate output
  - 基准：储存腐败、处理损伤、鲜度损失及待调查的不明差额
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`
  - 来源：

## 7. 分配和副产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 有意巴西坚果木质荚果输出的巴西坚果园和采收 | 当巴西坚果园、采收、木质果荚收集和巴西坚果收集有独立记录时，优先采用过程细分。巴西坚果木质荚果被有意收集并交付为副产品时，按实测干物质质量分配共用巴西坚果园和采收负荷；没有干物质数据时使用实测接收质量，并披露局限。 | `iso-14044-2006`; `fao-brazil-nut-fruit-structure` |
| `allocation_02` | 巴西坚果木质荚果不作为产品收集 | 木质果荚留在巴西坚果园或作为没有有意产品交接的残余处理时，不分配副产品信用；保留其质量和去向，并将共用负荷分配给有意生产的带壳巴西坚果输出。 | `iso-14044-2006`; `fao-brazil-nut-fruit-structure` |
| `allocation_03` | 高等级和标准等级带壳巴西坚果 | 共用调制负荷无法过程细分时，在互斥的合格带壳等级之间按物理质量分配。等级专属作业归于对应等级；同一批次不得同时计入等级行和汇总输出行。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_04` | 多年生巴西坚果园期间和阶段 | 将建立、未结果年份、补植和清除按巴西坚果园寿命及合格产出基准年度化；每项投入和输出连接到作物年度或生命周期阶段，不得在原巴西坚果园和补植阶段重复计入补植事件。 | `fao-brazil-nut-fruit-structure`; `iso-14044-2006` |
| `allocation_05` | 降级、返工、拒收和回收批次 | 将拒收和降级批次与合格产品分开；返工保留生产节点负荷并只连接一次；回收或有意销售材料必须有声明去向和分配决定；废弃材料承担声明的处理负荷。 | `mass-balance-identity`; `iso-14044-2006` |
| `allocation_06` | 批次、campaign 和换批归属 | 将巴西坚果园、采收、调制、清理、分级和储存投入与输出连接到产生它们的批次或 campaign；清场和换批事件只记录一次；没有有文件支持的分配驱动时，不得将共用运行负荷分配给多个批次。 | `mass-balance-identity`; `iso-14044-2006` |

巴西坚果壳质量是带壳参考产品的一部分，在本 PCR 中不是单独副产品。巴西坚果壳液、壳片、巴西坚果仁、种皮和所有荚果开启输出属于下游荚果开启或巴西坚果仁 PCR，不得引入本清单。任何输出不得同时作为巴西坚果木质荚果副产品和巴西坚果园残余计入。

## 8. 前景数据采集、计算和质量规则

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_brazil-nut_forest_lifecycle_records` | `brazil-nut_forest_establishment_and_management` | 巴西坚果园资产、土地、种植、补植、残余 | 巴西坚果园地块和资产登记 | 地块面积；建立年份；品种；树数；补植；清除；修剪残余；巴西坚果园阶段；合格产出 | 地块登记、田间记录和年度核对；原始汇总与分配：将地块记录连接到作物年度和合格产出 | ha、item、kg、巴西坚果园年 | 事件和年度 | 完整声明寿命或有文件支持的代表性期间 | 所有贡献地块 | 每声明的参考流 | 签署登记、GIS 或测量面积、补植证据 |
| `cp_brazil-nut_forest_input_records` | `brazil-nut_forest_establishment_and_management` | 养分、改良剂、植保 | 投入施用记录 | 产品名；配方；养分含量；有效成分；数量；日期；地块；用途；施用方法 | 发票、施用日志和供应商记录；原始汇总与分配：按产品、养分、地块和作物年度汇总 | kg 产品、kg 养分、kg 有效成分 | 每次施用 | 作物年度 | 所有贡献地块 | 每声明的参考流 | 发票、产品标签、施用日志 |
| `cp_brazil-nut_irrigation_records` | `brazil-nut_forest_establishment_and_management` | 灌溉和水 | 灌溉计量或水量台账 | 水源；体积；地块；日期；计量表；水质；取水和回用 | 计量表、泵记录或透明水量平衡；原始汇总与分配：核对交付、取水和声明消耗 | m3 或 kg | 事件和月度 | 作物年度 | 所有灌溉地块 | 每声明的参考流 | 计量校准、泵记录、水量台账 |
| `cp_brazil-nut_energy_records` | 所有田间、采收、调制和储存过程 | 能源和载体 | 燃料、电力和设备记录 | 载体；数量；设备；作业；批次或地块；日期；时长；换算因子 | 发票、计量、燃料日志或设备记录；原始汇总与分配：按载体、作业、批次和期间汇总 | L、kg、MJ 或 kWh | 事件和月度 | 作物年度及声明后处理期 | 每项作业和设施 | 每声明的参考流 | 发票、计量、燃料日志、设备规格 |
| `cp_brazil-nut_emission_records` | `brazil-nut_forest_establishment_and_management` | 直接和间接田间排放 | 排放计算输入记录 | 养分投入；残余；土壤条件；植保记录；排放物种；方法；因子 | 连接原始记录的计算工作簿；原始汇总与分配：保留物质、接收介质、因子和来源 | kg 物质 | 年度和事件 | 作物年度 | 所有贡献地块 | 每声明的参考流 | 计算复核、因子版本、来源引用 |
| `cp_brazil-nut_harvest_lot_records` | `brazil-nut_harvest_and_collection` | 采收、收集、田间损失、残余 | 采收批次登记 | 地块；收集轮次；成熟度；采收质量；未收集质量；碎屑；木质果荚分离；去向 | 地磅、田间秤和批次日志；原始汇总与分配：核对可采收、收集、损失和残余质量 | kg、日期、批次 | 每次收集轮次 | 采收季 | 所有贡献地块 | 每声明的参考流 | 计量校准、批次单、田间检查 |
| `cp_brazil-nut_pod_destination_records` | `brazil-nut_harvest_and_collection` | 巴西坚果木质荚果副产品或残余 | 去向和转移记录 | 木质果荚质量；干物质或水分；去向；接收方；价格或用途；去向；转移日期 | 称量、转移记录和去向确认；原始汇总与分配：分开记录有意输出与残余和废物 | kg 和声明分数 | 每次转移 | 采收季 | 每个木质果荚去向 | 每声明的参考流 | 收据、转移单、去向证据 |
| `cp_brazil-nut_dehusking_conditioning_records` | `brazil-nut_primary_conditioning_and_grading` | 干燥、清理、用水、能源、水分 | 调制批次记录 | 输入质量；输入水分；方法；时长；能源；用水；输出水分；输出质量；清理损失；废水 | 批次日志、计量、水分检测和水量平衡；原始汇总与分配：将所有投入和输出连接至一个批次和交接点 | kg、%、小时、L、kWh | 每批次 | 声明后处理期 | 每个调制设施或农场单元 | 每声明的参考流 | 校准秤、水分检测、批次单 |
| `cp_brazil-nut_grade_reject_records` | `brazil-nut_primary_conditioning_and_grading` | 等级、降级、拒收、异物 | 检验和分级记录 | 批次；等级；壳状况；仁缺陷；空壳；霉变；虫害；异物；合格质量；返工；去向 | 检验、抽样和称量记录；原始汇总与分配：等级和拒收状态互斥 | kg、%、等级代码 | 每批次 | 声明后处理期 | 每个分级点 | 每声明的参考流 | 检验单、抽样方案、秤校准 |
| `cp_brazil-nut_storage_records` | `brazil-nut_storage_and_gate_handoff` | 储存输入、损失、包装、交接输出 | 库存和发货台账 | 期初库存；收货；批次；水分；储存时间；包装；能源；损伤；期末库存；发货质量；交接点 | 库存台账、发货单和储存日志；原始汇总与分配：期初 + 收货 = 发货 + 期末 + 损失 | kg、%、天、kWh、item | 收货、检查和发货 | 声明储存期 | 每个储存设施 | 每声明的参考流 | 库存核对、发货单、水分和虫害记录 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | 多年生巴西坚果园投入 | 按巴西坚果园寿命基准和各作物年度合格产出分配建立、未结果年份、补植和清除。 | 巴西坚果园资产登记；巴西坚果园寿命；作物年度产出 | 每参考流的年度化巴西坚果园投入 | `fao-brazil-nut-fruit-structure`; `iso-14044-2006` |
| `calc_02` | 所有采收、调制和储存批次 | `期初质量 + 投入 = 合格输出 + 副产品 + 拒收物 + 残余 + 实测损失`；调查未解释差额。 | 批次质量和去向 | 核对后的质量平衡 | `mass-balance-identity` |
| `calc_03` | 鲜品到干燥或调制批次 | 干物质 = 湿质量 ×（1 − 水分分数）；扣除非水损失后，移除水 = 输入湿质量 − 输出湿质量。 | 输入/输出质量和实测水分 | 水分修正质量和干燥水损失 | `mass-balance-identity`; `fao-brazil-nut-fruit-structure` |
| `calc_04` | 巴西坚果木质荚果副产品 | 木质果荚有意交付时，按实测干物质质量分配共用巴西坚果园和采收负荷；无意交付时建模为残余去向，不分配副产品信用。 | 巴西坚果质量；木质果荚质量；水分或干物质；声明去向 | 分配后的负荷和副产品份额 | `iso-14044-2006` |
| `calc_05` | 高等级、标准等级、降级和拒收批次 | 等级输出必须互斥；调制合格输出等于等级输出加声明的降级、返工、拒收、异物、水分损失和未解释损失项。 | 批次输入；分级和拒收记录 | 归一化输出行 | `mass-balance-identity` |
| `calc_06` | 储存 | `期初库存 + 收货 − 发货 − 期末库存 = 实测储存损失`；储存损失不属于合格交接输出。 | 库存台账；发货；期末库存；损失记录 | 按储存时间的储存损失 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_01` | 流身份 | 使用已核实的带壳巴西坚果参考 UUID，并保留鲜品农场交接点或延伸交接限定信息；不得使用去壳巴西坚果或巴西坚果仁身份。 | 平台身份记录；数据集元数据 |
| `quality_02` | 巴西坚果园和采收数量 | 使用校准秤、计量表或透明记录的估算；路线不使用灌溉、湿法清理、包装或储存时记录有说明的零值。 | 校准记录；田间和批次日志 |
| `quality_03` | 水分和干燥 | 在接收和发货时对代表性批次测量水分，并声明水分方法、采样点和湿基或干基。 | 水分检测；抽样方案；批次记录 |
| `quality_04` | 完整性 | 核对巴西坚果园投入、采收输出、巴西坚果木质荚果去向、调制输出、拒收物、残余、水分损失、储存损失和交接发货。 | 质量平衡工作簿；库存台账 |
| `quality_05` | 时间和多年生代表性 | 覆盖声明作物年度，报告巴西坚果园阶段、结果年龄、补植事件、异常天气和平均方法。 | 作物年度登记；巴西坚果园生命周期记录 |
| `quality_06` | 副产品和去向 | 为每个有意巴西坚果木质荚果交接、降级去向、返工循环、拒收处理和残余去向提供证据；未经确认的去向不分配信用。 | 转移单；去向记录；处理记录 |
| `quality_07` | 地理和技术 | 披露国家、地区、气候、土壤、灌溉制度、采收方式、干燥方式、分级方式、储存条件和交接点。 | 场址说明；过程说明；设施记录 |
| `quality_08` | 不确定性和估计 | 将暂定范围标为候选阶段、可替换的估计，并在进入 reviewed 或 published 使用前替换为实测或有来源支持的值。 | 审查记录；更新后的前景数据集 |

## 9. 验证规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 参考流 | 参考产品是已核实的 `Brazil nuts, in shell` UUID，属性为 Mass、单位为 kg；数据集声明鲜品农场交接点或延伸交接状态，不替换为去壳仁。 | `fda-brazil-nut-nut-methods` |
| `validation_02` | 过程图 | 所有 required 过程存在；当声明交接点或路线需要时，条件性的干燥、清理、分级和储存过程必须存在。 | `fao-brazil-nut-postharvest-2020` |
| `validation_03` | 多年生生产 | 巴西坚果园建立、未结果期、结果期、补植和清除连接至声明作物年度，且不得重复计量。 | `fao-brazil-nut-fruit-structure`; `iso-14044-2006` |
| `validation_04` | 采收和巴西坚果木质荚果分离 | 采收、收集、未收集、巴西坚果木质荚果、残余和合格巴西坚果质量互相核对，并声明木质果荚去向。 | `mass-balance-identity` |
| `validation_05` | 调制和质量 | 鲜品输入、调制水分、高等级、标准等级、降级/返工、拒收、异物、水分损失和废水互斥并满足质量平衡。 | `mass-balance-identity`; `fao-brazil-nut-fruit-structure` |
| `validation_06` | 储存和交接 | 期初库存、收货、发货、期末库存、储存损伤、水分、储存时间和交接输出互相核对；储存损失排除在合格输出之外。 | `mass-balance-identity`; `fao-brazil-nut-postharvest-2020` |
| `validation_07` | 分配和返工 | 巴西坚果木质荚果分配、等级分配、降级路径、返工循环和拒收处理明确，任何负荷或输出不得重复计入。 | `iso-14044-2006` |
| `validation_08` | 证据和披露 | 所有重要数量流具有前景采集规则及候选范围或方法约束；估计、未解析身份、交接状态、水分和证据局限必须披露。 | `fao-brazil-nut-postharvest-2020`; `mass-balance-identity` |
| `validation_09` | 批次和 campaign 记录 | 每个采收轮次、调制批次、分级批次和储存收货都具有声明边界、关联投入与输出、清场或换批状态以及报告期间；共用运行负荷不得重复计入。 | `mass-balance-identity` |
| `validation_10` | 多地点聚合 | 列出每个贡献森林单元、采集队、接收点和调制地点；将地点级投入、输出和证据关联到共同边界，并记录代表性判断，不得遗漏或重复计算地点。 | `mass-balance-identity` |

## 10. 发布数据集简介

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查的带壳巴西坚果前景数据集使用 `secondary_dataset`；只有通过规定审查和发布门槛后才可提升为 `background_dataset` |
| downstream_use | 构建和验证声明鲜品农场交接点或延伸后处理交接点的带壳巴西坚果 process 和 lifecyclemodel 投影 |
| allowed_use | 当保留产品状态、水分、质量、作物年度、地理位置和分配处理时，用于巴西坚果园、采收、巴西坚果木质荚果分离、干燥、清理、带壳分级、储存和交接建模 |
| excluded_use | 脱去单粒硬壳的仁生产、壳的后续加工、烘烤、蒸煮、去皮、巴西坚果仁加工、零售产品、消费者使用、交接点后物流以及未声明产品类别 |
| required_metadata | 参考 UUID；Mass 属性和 Units of mass 单位组；CPC 3.0 `01377`；品种；地理位置；巴西坚果园阶段和年龄；作物年度；灌溉；水分基准；鲜品或延伸交接点；壳和仁质量；等级；巴西坚果木质荚果去向；合格、拒收、残余、损失和储存记录 |
| required_quality_disclosure | 实测与估计区分；水分方法；质量平衡完整性；巴西坚果园寿命分配；副产品分配；返工和拒收去向；储存时间；数据期间；地理位置；技术；未解析身份差距 |
| update_trigger | 新作物年度记录、巴西坚果园阶段或补植重大变化、干燥或分级技术变化、新的巴西坚果木质荚果有意路线、储存实践变化、有来源范围替换或平台身份修订 |

## 11. 数据来源

以下来源仅支持各自适用范围内的定性产品身份与采后处理背景，不提供本 PCR 暂定推理筛选区间的清单系数。用于模型的实际数量仍需场址测量及审阅后的证据。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ipcc-2019-afolu` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | managed-soil and agricultural emission calculation method context |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://committee.iso.org/standard/38498.html | allocation hierarchy, data quality, boundary, and disclosure rules |
| `mass-balance-identity` | method_factor | Conservation-of-mass method identity for lot reconciliation | harvest, pod opening, grading, storage, reject, residue, and water-loss reconciliation |
| `fao-brazil-nut-fruit-structure` | official_guidance | FAO, Brazil nuts, https://www.fao.org/forestry/nwfp/statistics/brazil-nuts | crop identity, harvest or primary handling and storage context only; not quantitative inventory coefficients |
| `codex-tree-nuts-hygiene-cxc-6-1972` | standard | Codex Alimentarius, Code of Hygienic Practice for Tree Nuts, CXC 6-1972, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/zh/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B6-1972%252FCXC_006e.pdf | hygiene, product-state and handling context; not default LCA quantities or crop-specific yield factors |
