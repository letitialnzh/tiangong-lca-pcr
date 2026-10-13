---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.brazil-nuts-in-shell
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 带壳巴西坚果

## 1. 范围与适用性

本 PCR 指导构建从受管理或野生巴西坚果林中收集，并在声明农场、初级调理、储存或交接节点以带壳巴西坚果形式交付的前景数据包。范围包括树木或林地单元管理、季节性蒴果收集、保留种子硬壳的开蒴果、清理、分级、储存及声明节点交接。

规范参考流身份对应平台记录 `Brazil nuts, in shell`，分类为 CPC 3.0 `01377`，平台限定信息为 `Production mix, at farm gate; Fresh, unprocessed produce`。带壳参考产品是木质蒴果打开后仍保留自身硬壳的单粒种子。未打开的木质蒴果是中间果实，不是带壳参考产品。须声明选定交接前的任何清理、调理或储存。

本 PCR 适用于常规、有机、雨养、灌溉、混作以及小农或种植园路线，前提是披露品种或品种组、地理位置、树龄、作物年度、采收成熟度、蒴果状态、种子硬壳状况、水分基准、质量状态和交接节点。排除苗圃作业（作为上游投入时除外）、去种子硬壳、劈开或斧剖、仁加工、榨油、烘烤或其他加工巴西坚果产品、种子硬壳加工、零售包装、消费者使用，以及声明交接节点后的运输或储存。本 PCR 不选择 `Other` 或 n.e.c. 产品类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.brazil-nuts-in-shell` |
| classification_refs | CPC 3.0 `01377`，带壳巴西坚果；映射关系：broader |
| covered_products | 木质蒴果打开后各自保留硬壳的巴西坚果种子，在声明鲜品、调理或储存节点交接 |
| excluded_products | 去壳或劈开的巴西坚果；巴西坚果仁、巴西坚果油、烘烤或其他加工巴西坚果产品、交接后的蒴果壳或种子硬壳产品，以及交接节点后物流或零售产品 |
| representative_product | 成熟或达到声明成熟度的带壳巴西坚果，披露来源林地或种植园单元、收集季节、蒴果状态、水分或鲜度状态、等级、合格质量、拒收质量和交接节点 |
| production_route | 受管理的生物生产或野生林地单元收集、季节性蒴果落地与收集、保留种子硬壳的开蒴果、初级调理、分级、可选储存及声明交接 |
| market_state | 农场交接节点的鲜未加工产品，或声明延伸节点的已开蒴果／已调理带壳种子批次，并记录收集季节、地理位置、成熟度、蒴果状态、硬壳状况、等级及去向 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明交接节点的带壳巴西坚果，保留种子硬壳并声明蒴果状态 |
| How much | 1,000 kg 净合格带壳巴西坚果 |
| How well | 品种或品种组；生产国家、地区和气候；树龄和结果状态；作物年度；鲜品或调理状态；木质蒴果壳状态；硬壳完整性；成熟度；尺寸或等级；合格、降级、拒收和损失质量；木质蒴果壳去向；交接节点 |
| How long or cycle | 多年生树木结果寿命内声明的一个作物年度；建植、未结果年份、补植和清除按声明树木寿命及合格产出基准分配 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | Brazil nuts, in shell |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或品种组；树木地块和地理位置；建植年份、树龄、结果状态和补植事件；土壤和气候；灌溉状态和水源；作物年度或平均期间；采收成熟度；木质蒴果打开后的带壳种子状态；蒴果状态；水分基准；硬壳状况；尺寸或等级；合格、降级、拒收和损失质量；蒴果壳去向；储存时长和条件；交接节点 |

必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。净产品质量排除容器皮重。平台身份对应木质蒴果打开后的农场鲜未加工产品流。打开蒴果是取得单粒带壳种子的必需步骤；进一步分级、干燥或储存属于延伸交接状态，须保留限定信息，不能表示成新的产品类别。不得将去壳或劈开的巴西坚果作为本 PCR 的参考产品。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流以声明交接节点的净合格带壳巴西坚果表示，并排除容器皮重。 |
| `fresh_or_pod-opened_gate` | 参考流和交接输出 | 质量和声明产品状态 | kg 和声明状态 | 将未打开的木质蒴果与带壳种子分开。只有保留自身硬壳的种子可作为参考产品；归一化前核对开蒴果、移除蒴果壳质量及损失。 |
| `yield_and_output_basis` | 林地、采收、调理和储存输出 | 质量和面积 | kg 和 ha | 归一化前，记录同一树木年度、批次或报告期的采收果实、合格等级、木质蒴果壳、田间损失、拒收物、异物、储存损失和未解释损失。 |
| `moisture_and_freshness_basis` | 采收、调理、储存和合格巴西坚果 | 质量及水分或鲜度描述 | kg 及声明分数或类别 | 保留接收时的质量及水分或鲜度类别。仅使用实测质量及透明的水量或干物质方程进行状态换算。 |
| `shell_and_maturity_quality` | 合格带壳产品 | 声明质量属性 | 声明单位 | 保留成熟度类别、硬壳完整性、裂纹、发芽、霉变、虫害、异物、尺寸或等级及鲜度等属性，不得用统一默认质量替代。 |
| `tree_life_allocation_basis` | 建植、补植和未结果期投入 | 面积、时间或质量活动属性 | ha、树木年或 kg 产品 | 按声明树木寿命及合格产出基准分配多年生建植、未结果年份、补植树和清除负荷，并披露未结果年份及补植事件。 |
| `nutrient_product_and_n_basis` | 养分和土壤改良剂投入 | 产品和养分质量 | kg 产品及 kg N、P2O5 或 K2O | 分别记录配方产品质量和有文件支持的养分含量。氮排放计算使用声明的 kg N。 |
| `water_basis` | 灌溉和湿法处理 | 体积或质量 | m3 或 kg | 区分交付灌溉水、自然资源取水、排水或耗水指标及可选湿法清理用水。雨养或干法调理路线对供水记录有依据的零值。 |
| `energy_inventory` | 林地、采收、开蒴果、分级和储存 | 质量、体积或能量 | kg、L、MJ 或 kWh | 保留能源载体、单位、作业、设备、期间和换算基准。分别记录燃料、电力和热调理能源。 |
| `packaging_quantity` | 边界内可选储存包装 | 质量或件数 | kg、g 或 item | 包装跨越声明交接边界时，记录包装材料质量或件数、包装容量、重复使用状态和批次归属。 |

## 5. 系统边界

默认前景边界从声明的树木和林地起始条件开始，经多年生树木管理、采收与收集，止于合格带壳巴西坚果在农场鲜品节点的交接。任何带壳参考交接前均须打开蒴果并保留每粒种子的硬壳。进一步清理、分级和储存仅在声明交接节点之前实际发生时纳入。种植材料、肥料、植保产品、灌溉供水、能源载体、机械服务和包装的上游生产使用有代表性的背景数据集。去种子硬壳、劈开、仁加工、榨油、烘烤或其他加工巴西坚果产品、零售及交接节点后运输和储存均在默认边界外。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 建植前或建植时的树木和林地场址，种植材料和购买的管理投入跨越前景边界；披露先前土地用途及既有树木历史 |
| starting_condition_role | 受管理的多年生巴西坚果生产和树木资产核算的起点 |
| product_classification_scope | CPC 3.0 `01377`，带壳巴西坚果；去壳、劈开、仁、油、硬壳及下游加工巴西坚果产品不在本 PCR 范围内 |
| recursive_input_rule | 同类种植材料或跨越边界的留存巴西坚果作为上游投入记录，不递归展开为另一带壳产品输出。林地、采收、调理、分级和储存之间的内部交接是过程链接，不是额外市场输出。 |
| upstream_dataset_requirement | 苗圃材料、养分产品、植保、灌溉供水、燃料、电力、开蒴果或分级服务、包装、机械服务和废物处理跨越边界时，使用有代表性的上游数据集。 |
| disclosure | 品种和树木地块；地理位置、土壤、气候和土地历史；建植年份、树龄、结果寿命和补植；灌溉水源和水质；养分和植保记录；采收成熟度；木质蒴果打开后的带壳种子状态；水分或鲜度；硬壳质量；等级、拒收、蒴果壳和储存记录；交接节点；任何预期蒴果壳副产品交接 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_tree_to_farm_gate` | 所有符合要求的数据集 | 纳入多年生树木建植、未结果年份、结果期管理、采收、收集及合格带壳巴西坚果在声明农场鲜品节点的交接。 | `fao-brazil-nut-fruit-structure`; `iso-14044-2006` |
| `boundary_dehusking_extension` | 延伸采后路线 | 在带壳参考产品交接前纳入木质蒴果打开工序。清理、分级和储存仅在声明交接节点前实际发生时纳入，并披露所形成的物理状态。 | `fao-brazil-nut-fruit-structure`; `codex-tree-nuts-hygiene-cxc-6-1972` |
| `boundary_perennial_tree_disclosure` | 建植和补植 | 按声明树木寿命及合格产出基准分配建植、未结果年份、补植树和清除，并披露寿命、未结果年份、间作和补植事件。 | `fao-brazil-nut-fruit-structure`; `iso-14044-2006` |
| `boundary_no_shell_removal` | 带壳产品 | 产品边界保留硬壳。排除斧剖或去硬壳、劈开、仁加工、榨油、烘烤或其他加工巴西坚果产品和硬壳加工。 | `codex-tree-nuts-hygiene-cxc-6-1972`; `fao-brazil-nut-fruit-structure` |
| `boundary_quality_and_fate` | 所有输出 | 按实测质量及声明去向区分合格带壳巴西坚果、木质蒴果壳、降级批次、拒收果实、异物、粉尘、水分损失、储存损失和未解释损失。 | `fao-brazil-nut-fruit-structure`; `mass-balance-identity` |

## 6. 过程清单结构

即使树木管理连续记录，采收、开蒴果、分级和储存仍按批次核算。每轮采收、调理批次、等级批次和储存收货均须有批次或生产周期标识，声明开始、结束、输入集合、输出集合、清理或换批事件及报告期。共用设备和共用运行负荷仅归属于相关批次或生产周期一次。

多场址林地收集数据集须列出每个贡献产出的森林管理单元、收集队伍、接收点和调理地点。将场址层面的投入、蒴果产量、质量证据和输出关联至共同农场交接边界，并报告汇总与代表性决定。多个收集点共用接收台账时，不得遗漏或重复计入场址。

### 过程图

| process_id | process_name | 纳入状态 | inclusion_condition | 建模角色 | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `brazil-nut_forest_establishment_and_management` | 巴西坚果受管理生物生产和林地单元管理 | required | 贡献产出的林地单元多场址汇总 | foreground | 树木年度投入和合格产出基准 |
| `brazil-nut_harvest_and_collection` | 巴西坚果采收和收集 | required |  | foreground | 收集的木质蒴果，形成带壳种子参考产品前必须打开 |
| `brazil-nut_primary_conditioning_and_grading` | 巴西坚果开蒴果、物料处理、初级调理和分级 | required | 形成带壳种子参考产品前必须打开木质蒴果；其他调理仅在实际发生时纳入 | 初级调理和稳定化 | 接收批次及等级输出 |
| `brazil-nut_storage_and_gate_handoff` | 巴西坚果储存和交接 | conditional | 声明前景边界包含储存或采后交接节点时纳入 | 储存和交付交接 | 1,000 kg 声明交接节点输出 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：巴西坚果树建植和管理（`brazil-nut_forest_establishment_and_management`）

#### 输入

##### 产品流

###### 巴西坚果种植和补植材料（`brazil-nut_planting_material`）

按地块和事件记录幼苗、种植材料、补植树、支桩和应归属的建植材料，并按声明树木寿命和合格带壳产出进行年度化分配。

- 选定流：巴西坚果苗圃苗木和补植材料
- 流属性/单位：件数或质量 / item 或 kg
- 数量规则：按树木地块及建植或补植事件测量数量，按合格产出进行年度化分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳巴西坚果。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_brazil-nut_forest_lifecycle_records`
- 数量范围：暂定种植材料筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.1
  - 上限：100
  - 单位：kg 或种植单位，每 1,000 kg 参考产品
  - 基准：多年生树木建植和补植的初步宽泛估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 农业养分与肥料投入（`brazil-nut_forest_establishment_and_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 按实际采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 数量规则：每种实际产品仅采集一次数量并保留组成，计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个生成的产品交换解析到一个经核实的 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳巴西坚果。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_forest_input_records`
- 来源：`ipcc-2019-afolu`
- 数量范围：暂定养分投入筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg 配方产品，每 1,000 kg 参考产品
  - 基准：多年生树木的年度养分和改良剂投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 灌溉供水（`brazil-nut_irrigation_water`）

按水源和作物年度记录输送至每个树木地块的水量。已确认的雨养路线可记录灌溉供水为零，并提供水量平衡说明。

- 选定流：输送至巴西坚果树的灌溉水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：按地块和作物年度计量或记录输送的灌溉水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳巴西坚果。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_irrigation_records`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,000
  - 单位：m3，每 1,000 kg 参考产品
  - 基准：宽泛的年度灌溉供水范围；雨养路线可为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 田间燃料和电力（`brazil-nut_field_energy`）

按能源载体和作业分别记录泵、田间设备、通行、收集支持和树木管理所用燃料及电力。

- 选定流：柴油、汽油、电力或其他田间能源载体
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 数量规则：按设备、作业、地块和期间测量能源载体用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳巴西坚果。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_energy_records`
- 数量范围：暂定田间能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：MJ，每 1,000 kg 参考产品
  - 基准：田间抽水、通行、采收支持和管理能源
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

#### 输出

##### 基本流

###### 受管理土壤和植保排放（`brazil-nut_field_emissions`）

使用选定方法和接收介质，记录养分施用、残余物处理、植保使用及受管理土壤的计算排放。

- 选定流：前景排放计算中报告的物质和接收介质
- 流属性/单位：质量 / kg 物质
- 数量规则：根据有记录的投入、残余物去向、土壤条件及方法因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳巴西坚果。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_brazil-nut_emission_records`
- 来源：`ipcc-2019-afolu`
- 数量范围：暂定田间排放筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 物质，每 1,000 kg 参考产品
  - 基准：受管理土壤和植保排放的初步宽泛筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）


##### 废物流

###### 林地修剪物和落果残余（`brazil-nut_forest_residue`）

仅在修剪枝条、落果、受损坚果和其他林地残余物跨越前景边界或接受明确处理时记录；区分留在土壤上的残余物与移出或转移的生物质。

- 选定流：巴西坚果林地残余物和移出生物质
- 流属性/单位：质量 / kg
- 数量规则：按地块和去向测量或记录残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳巴西坚果。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_forest_lifecycle_records`
- 数量范围：林地残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：kg，每 1,000 kg 参考产品
  - 基准：移出或处理的林地生物质；留在土壤上的残余物可记录跨界数量为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：巴西坚果采收和收集（`brazil-nut_harvest_and_collection`）

#### 输入

##### 产品流

###### 可供收集的完整巴西坚果果实（`brazil-nut_harvest_available`）

记录采收作业中可供收集的成熟或达到其他声明成熟度的完整果实，计量点位于收集损失和交接之前。

- 选定流：收集前未打开的巴西坚果木质蒴果；确切 UUID 未解决
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：开蒴果或调理前实测采收果实质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳巴西坚果。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_harvest_lot_records`
- 数量范围：采收投入质量校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：1,400
  - 单位：kg，每 1,000 kg 合格参考产品
  - 基准：田间和质量损失发生前采收的完整果实质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 采收和收集能源（`brazil-nut_harvest_energy`）

按采收轮次和设备记录攀爬、切割、收集、田间运输及搬运能源。

- 选定流：巴西坚果采收和收集所用燃料或电力
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 数量规则：实测能源载体用量，或按声明因子换算的设备活动量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳巴西坚果。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_energy_records`
- 数量范围：采收能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：MJ，每 1,000 kg 参考产品
  - 基准：采收、收集和田间搬运能源
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流


#### 输出

##### 废物流

###### 未收集或采收受损果实（`brazil-nut_harvest_loss`）

记录留在田间的果实、采收中受损果实、过熟果实及其他收集损失，并保留实际去向。

- 选定流：巴西坚果采收损失和受损果实
- 流属性/单位：质量 / kg
- 数量规则：田间称量或批次登记中未转移至下一过程的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格带壳巴西坚果。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_harvest_lot_records`
- 数量范围：采收损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg，每 1,000 kg 合格参考产品
  - 基准：未收集、受损或其他未获验收的采收果实
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：巴西坚果开蒴果、初级调理和分级（`brazil-nut_primary_conditioning_and_grading`）

形成单粒带壳种子参考产品前必须打开木质蒴果。此步骤去除木质蒴果壳，并保留每粒种子的硬壳；去种子硬壳、劈开和仁回收不在本 PCR 范围内。进一步调理仅在声明交接节点前实际发生时纳入。
开蒴果和初级调理是物料处理节点，分别记录其处理后输出及全部残余物去向。

#### 输入

##### 产品流

###### 接收用于调理的完整巴西坚果果实（`brazil-nut_conditioning_input`）

在调理边界记录来料批次状态、木质蒴果壳状态、成熟度和质量。

- 选定流：接收用于打开的未开巴西坚果木质蒴果；确切 UUID 未解决
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测批次接收质量，并声明木质蒴果打开后的带壳种子状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 合格调理节点产品。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_dehusking_conditioning_records`
- 数量范围：调理投入质量校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：1,400
  - 单位：kg，每 1,000 kg 合格调理节点产品
  - 基准：开蒴果和分级损失发生前接收的完整果实批次
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 开蒴果和分级能源（`brazil-nut_conditioning_energy`）

记录开蒴果、清理、分级和换批所用电力、燃料或人力设备活动。

- 选定流：开蒴果和分级所用燃料或电力
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 数量规则：按批次和作业实测能源载体用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格调理节点产品。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_energy_records`
- 数量范围：调理能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：MJ，每 1,000 kg 合格调理节点产品
  - 基准：开蒴果、清理、分级及可选短期稳定化能源
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 产品流

###### 调理用水或清理服务（`brazil-nut_conditioning_water`）

仅在可选清理用水跨越前景边界时记录。干法开蒴果和清理可记录有依据的零值。

- 选定流：工艺用水或清理用水
- 流属性/单位：体积或质量 / m3 或 kg
- 组选择：在实际清理或清洗功能得到记录后再确定
- 数量规则：按调理批次计量的用水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格调理节点产品。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_dehusking_conditioning_records`
- 数量范围：调理用水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m3，每 1,000 kg 合格调理节点产品
  - 基准：可选湿法清理；干法路线可为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 合格带壳巴西坚果（`brazil-nut_conditioned_accepted_output`）

记录木质蒴果打开后的合格单粒巴西坚果种子，各自保留硬壳，并记录等级、成熟度、蒴果状态和声明交接节点。
合格巴西坚果批次是本调理过程的预期输出。

- 选定流：Brazil nuts, in shell `5eada32e-7ae8-44ae-9f1e-66f84b193b84`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始输出测量与核对：实测净合格批次输出，排除皮重

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 声明调理节点输出。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_grade_reject_records`
- 数量范围：合格调理输出校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：700
  - 上限：1,020
  - 单位：kg，每 1,000 kg 接收调理批次
  - 基准：移除木质蒴果壳、分级并扣除声明拒收物后的合格产品
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 产品流

###### 销售的巴西坚果木质蒴果壳副产品（`brazil-nut_pod_coproduct`）

仅在木质蒴果壳流被有意交付至声明接收方时将其记录为该副产品；否则在下方作为残余物或废物记录。

- 选定流：巴西坚果木质蒴果壳和纤维生物质
- 流属性/单位：质量 / kg
- 数量规则：按批次实测木质蒴果壳质量并声明去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格调理节点产品。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_pod_destination_records`
- 数量范围：销售木质蒴果壳副产品筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：kg，每 1,000 kg 接收批次
  - 基准：按具体去向实测的木质蒴果壳质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 巴西坚果木质蒴果壳和移出生物质（`brazil-nut_pod_output_or_residue`）

将去除的木质蒴果壳及相关纤维材料与保留硬壳的产品分开记录。销售或转移的木质蒴果壳流属于预期副产品；留存、堆肥或丢弃的木质蒴果壳属于残余物或废物路线。

- 选定流：巴西坚果木质蒴果壳和纤维残余物
- 流属性/单位：质量 / kg
- 数量规则：按批次测量或记录木质蒴果壳质量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格调理节点产品。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_pod_destination_records`
- 数量范围：外皮输出筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：100
  - 上限：1,000
  - 单位：kg，每 1,000 kg 接收完整果实批次
  - 基准：去除的木质蒴果壳和纤维材料；实际值取决于成熟度和来料状态
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 降级和拒收巴西坚果（`brazil-nut_grade_rejects`）

记录开裂、霉变、虫害、未成熟、过熟、污染或其他不合规格的巴西坚果，以及返工、回收、处理或处置去向。

- 选定流：拒收或降级带壳巴西坚果
- 流属性/单位：质量 / kg
- 数量规则：实测且互斥的等级、降级、返工和拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 接收调理批次。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_grade_reject_records`
- 数量范围：拒收和降级筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg，每 1,000 kg 接收调理批次
  - 基准：拒收、降级、返工或回收果实
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 调理废水、粉尘和清洗固体（`brazil-nut_conditioning_residuals`）

仅在废水、粉尘、土壤、纤维和清洗固体跨越边界或接受处理时记录，并识别接收介质和去向。

- 选定流：报告的残余物质和接收介质
- 流属性/单位：质量 / kg 物质或废物
- 数量规则：实测残余物质量，或根据批次水量和固体平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 合格调理节点产品。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_brazil-nut_dehusking_conditioning_records`
- 数量范围：调理残余物筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg，每 1,000 kg 合格调理节点产品
  - 基准：跨越边界的废水固体、粉尘、土壤及其他残余物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：巴西坚果储存和交接（`brazil-nut_storage_and_gate_handoff`）

本过程有条件纳入。声明前景边界包含储存、发货准备或采后交接节点时纳入。

#### 输入

##### 产品流

###### 接收用于储存的巴西坚果（`brazil-nut_storage_input`）

记录期初库存或批次收货、产品状态、木质蒴果壳状态、水分或鲜度、等级及储存开始时间。

- 选定流：Brazil nuts, in shell `5eada32e-7ae8-44ae-9f1e-66f84b193b84`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测库存收货质量，排除皮重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点输出。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_storage_records`
- 数量范围：储存投入质量校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：980
  - 上限：1,100
  - 单位：kg，每 1,000 kg 声明交接节点输出
  - 基准：储存损失和发货核对前的接收库存
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 储存能源（`brazil-nut_storage_energy`）

按设施和储存期间记录电力、燃料、冷却、通风或其他储存能源。

- 选定流：巴西坚果储存所用燃料或电力
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 数量规则：分配至储存批次和期间的计量、发票或设备记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点输出。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_energy_records`
- 数量范围：储存能源筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：MJ，每 1,000 kg 声明交接节点输出
  - 基准：声明期间的储存、通风、冷却和搬运能源
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 产品流

###### 储存包装（`brazil-nut_storage_packaging`）

仅在包装跨越声明交接边界或应归属于储存批次时记录。

- 选定流：储存袋、周转箱、托盘或其他包装材料
- 流属性/单位：质量或件数 / kg 或 item
- 数量规则：按批次及重复使用状态实测包装质量或件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点输出。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_storage_records`
- 数量范围：储存包装筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg，每 1,000 kg 声明交接节点输出
  - 基准：应归属的新购或更换储存包装
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 声明交接节点的合格巴西坚果（`brazil-nut_gate_output`）

记录木质蒴果打开后净发货的带壳种子，声明等级、鲜度或水分以及交接节点。

- 选定流：Brazil nuts, in shell `5eada32e-7ae8-44ae-9f1e-66f84b193b84`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始输出测量与核对：实测净发货质量，排除皮重

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点输出。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_storage_records`
- 数量范围：交接输出质量校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：950
  - 上限：1,020
  - 单位：kg，每 1,000 kg 声明交接节点输出
  - 基准：库存和损失核对后的净发货产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 储存损失和受损产品（`brazil-nut_storage_loss`）

记录腐败、干燥或鲜度损失、虫害、破损及其他储存损失，以及处理或处置去向。

- 选定流：巴西坚果储存损失或受损产品
- 流属性/单位：质量 / kg
- 数量规则：库存核对及实测受损或移出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点输出。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brazil-nut_storage_records`
- 数量范围：储存损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg，每 1,000 kg 声明交接节点输出
  - 基准：储存腐败、搬运损伤、鲜度损失及调查中的未解释差额
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：Brazil nuts, in shell
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：Brazil nuts, in shell
- 流属性 / 单位：质量 / kg
- 数量规则：1000 kg
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与副产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 存在预期木质蒴果壳输出的树木管理和采收 | 树木、采收、开蒴果、木质蒴果壳收集和坚果记录可独立获得时，优先采用过程细分。有意收集并交付木质蒴果壳作为预期副产品时，按实测干物质质量分配共用负荷；缺少干物质数据时使用实测接收质量，并披露局限。 | `iso-14044-2006`; `fao-brazil-nut-fruit-structure` |
| `allocation_02` | 木质蒴果壳留在场址内或丢弃 | 木质蒴果壳留在田间、在没有预期产品交接的情况下堆肥或作为残余物丢弃时，不分配副产品抵扣。保留其残余物或废物质量及去向，并将共用负荷分配至预期带壳巴西坚果输出。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_03` | 优级、标准级和降级带壳等级 | 共用调理负荷无法细分时，在互斥的合格等级输出之间按物理质量分配。等级专属作业归属于实际接受该作业的等级；同一批次不得同时分配至等级行和汇总输出行。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_04` | 多年生树木期间和阶段 | 按声明树木寿命和合格产出基准，将建植、未结果年份、补植、间作归属和清除进行年度化分配。每项投入和输出均关联至作物年度或生命周期阶段，不得在原树和补植树阶段重复计入补植事件。 | `fao-brazil-nut-fruit-structure`; `iso-14044-2006` |
| `allocation_05` | 降级、返工、拒收和回收批次 | 将拒收和降级批次与合格产品分开。返工保留生产节点负荷且仅链接一次；回收或有意销售的材料须声明去向和分配决定；丢弃材料承担声明的处理负荷。 | `mass-balance-identity`; `iso-14044-2006` |
| `allocation_06` | 批次、生产周期和换批归属 | 将树木、采收、调理、开蒴果、分级和储存投入与输出关联至产生它们的批次或生产周期。清理和换批事件只记录一次；没有文件支持的分配驱动时，不得将共用运行负荷分配给多个批次。 | `mass-balance-identity`; `iso-14044-2006` |

硬壳仍是带壳参考产品的一部分，在本 PCR 中不是单独副产品。仁、油和去硬壳输出属于下游巴西坚果产品 PCR，不得引入本清单。任何输出不得同时计为销售木质蒴果壳副产品及林地或调理残余物。

## 8. 前景数据采集、计算与质量规则

在各采集协议中保留场址、批次、周期和阶段的原始数量及分母。先核对库存、损失、水分及副产品归属，再归一化：归一化交换量 = 应归属原始交换量 × 声明参考数量 / 同一边界和计量基准的合格交接产品数量。归一化前先完成多年生建植和共用作业归属。不得将内部转移量设为最终参考数量。“每声明的参考流”指第 3 节的数量、单位和产品状态；数据包必须声明实际路线及交接节点。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_brazil-nut_forest_lifecycle_records` | `brazil-nut_forest_establishment_and_management` | 树木资产、土地、种植、补植、间作、残余物 | 树木地块和资产登记 | 地块面积；种植年份；品种；树木数量；补植；清除；枝条和蒴果残余物；树木阶段；合格产出 | 地块登记、田间日志及年度核对；原始汇总与归属：将地块记录关联至作物年度和合格产出 | ha、item、kg、树木年 | 事件和年度 | 完整声明树木寿命或有文件支持的代表性期间 | 所有贡献产出的树木地块 | 每声明的参考流 | 签署的田间登记、GIS 或实测面积、补植证据 |
| `cp_brazil-nut_forest_input_records` | `brazil-nut_forest_establishment_and_management` | 养分、改良剂、植保 | 投入施用记录 | 产品名；配方；养分含量；有效成分；数量；日期；地块；用途；方法 | 发票、施用日志及供应商记录；原始汇总与归属：按产品、养分、地块和作物年度汇总 | kg 产品、kg 养分、kg 有效成分 | 每次施用 | 作物年度 | 所有贡献产出的地块 | 每声明的参考流 | 发票、产品标签、施用日志 |
| `cp_brazil-nut_irrigation_records` | `brazil-nut_forest_establishment_and_management` | 灌溉和水 | 灌溉计量表或水量台账 | 水源；体积；地块；日期；计量表；水质；取水和回流水 | 计量表、泵记录或透明水量平衡；原始汇总与归属：核对输送水量、取水量和声明耗水量 | m3 或 kg | 事件和月度 | 作物年度 | 所有灌溉地块 | 每声明的参考流 | 计量校准、泵日志、水量台账 |
| `cp_brazil-nut_energy_records` | 所有田间、采收、调理和储存过程 | 能源和载体 | 燃料、电力和设备记录 | 载体；数量；设备；作业；批次或地块；日期；时长；换算因子 | 发票、计量表、燃料日志或设备记录；原始汇总与归属：按载体、作业、批次和期间汇总 | L、kg、MJ 或 kWh | 事件和月度 | 作物年度和声明采后期间 | 每项作业和设施 | 每声明的参考流 | 发票、计量表、燃料日志、设备规格 |
| `cp_brazil-nut_emission_records` | `brazil-nut_forest_establishment_and_management` | 直接和间接田间排放 | 排放计算输入记录 | 养分投入；残余物；土壤条件；植保记录；排放物质；方法；因子 | 关联原始记录的计算工作簿；原始汇总与归属：保留物质、接收介质、因子和来源 | kg 物质 | 年度和事件 | 作物年度 | 所有贡献产出的地块 | 每声明的参考流 | 计算复核、因子版本、来源引用 |
| `cp_brazil-nut_harvest_lot_records` | `brazil-nut_harvest_and_collection` | 采收、收集、田间损失、残余物 | 采收批次登记 | 地块；采收轮次；成熟度；采收质量；未收集质量；杂物；木质蒴果壳状态；去向 | 地磅、田间秤和批次日志；原始汇总与归属：核对可收集、已收集、损失和残余物质量 | kg、日期、批次 | 每轮收集 | 采收季 | 所有贡献产出的地块 | 每声明的参考流 | 秤校准、批次单、田间检查 |
| `cp_brazil-nut_dehusking_conditioning_records` | `brazil-nut_primary_conditioning_and_grading` | 开蒴果、清理、水、能源、水分、批次产率 | 调理批次记录 | 投入质量；木质蒴果壳状态；方法；时长；能源；水；输出状态；输出质量；木质蒴果壳质量；清理损失；废水 | 批次日志、计量表、秤、水分或鲜度检测及水量平衡；原始汇总与归属：将全部投入与输出关联至一个批次和交接节点 | kg、%、小时、L、kWh | 每批次 | 声明采后期间 | 每个调理设施或农场单元 | 每声明的参考流 | 校准秤、批次单、鲜度或水分检测 |
| `cp_brazil-nut_pod_destination_records` | `brazil-nut_primary_conditioning_and_grading` | 木质蒴果壳副产品、残余物或废物 | 去向和转移记录 | 木质蒴果壳质量；干物质或水分；去向；接收方；价格或用途；最终处理方式；转移日期 | 称量、转移记录及去向确认；原始汇总与归属：区分预期输出、残余物和废物 | kg 和声明分数 | 每次转移 | 调理期间 | 每个木质蒴果壳去向 | 每声明的参考流 | 收据、转移单、去向证据 |
| `cp_brazil-nut_grade_reject_records` | `brazil-nut_primary_conditioning_and_grading` | 等级、降级、拒收、异物 | 检验和分级记录 | 批次；成熟度；木质蒴果壳状态；硬壳状况；霉变；虫害；异物；合格质量；返工；去向 | 检验、抽样和称量记录；原始汇总与归属：等级和拒收状态互斥 | kg、%、等级代码 | 每批次 | 声明采后期间 | 每个分级点 | 每声明的参考流 | 检验表、抽样方案、秤校准 |
| `cp_brazil-nut_storage_records` | `brazil-nut_storage_and_gate_handoff` | 储存投入、损失、包装、交接输出 | 库存和发货台账 | 期初库存；收货；批次；产品状态；水分或鲜度；储存时长；包装；能源；损伤；期末库存；发货质量；交接节点 | 库存台账、发货单和储存日志；原始汇总与归属：期初库存 + 收货 = 发货 + 期末库存 + 损失 | kg、%、天、kWh、item | 收货、检查和发货 | 声明储存期间 | 每个储存设施 | 每声明的参考流 | 库存核对、发货单、鲜度或水分及虫害记录 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01` | 多年生树木投入 | 按声明树木寿命基准及各作物年度的合格产出，分配树木建植、未结果年份、补植、间作份额和清除。 | 树木资产登记；树木寿命；作物年度产出；间作分配驱动 | 每参考流的年度化树木投入 | `fao-brazil-nut-fruit-structure`; `iso-14044-2006` |
| `calc_02` | 每个采收、调理和储存批次 | `opening mass + inputs = accepted outputs + pod co-product + rejects + residues + measured losses`；调查任何未解释差额。 | 批次称重和去向 | 核对后的质量平衡 | `mass-balance-identity` |
| `calc_03` | 完整果实转为开蒴果批次 | `pod-opened mass = whole-fruit input mass − measured pod and non-product losses`；存在批次记录时，不得用无关平均值推断木质蒴果壳质量。 | 投入／输出质量；木质蒴果壳记录；损失记录 | 经状态及去向校正的产品质量 | `mass-balance-identity`; `fao-brazil-nut-fruit-structure` |
| `calc_04` | 销售木质蒴果壳副产品 | 木质蒴果壳属于预期输出且已转移时，对共用采收和开蒴果负荷按实测干物质质量分配；不属于预期输出时，仅建模残余物去向，不给予副产品抵扣。 | 巴西坚果质量；木质蒴果壳质量；水分或干物质；声明去向 | 分配后的负荷和副产品份额 | `iso-14044-2006` |
| `calc_05` | 等级、降级、返工和拒收批次 | 等级输出必须互斥。合格输出等于投入减去木质蒴果壳、声明的降级、返工、拒收、异物、水分损失和未解释损失项；返工仅链接一次。 | 批次投入；分级和拒收记录 | 归一化输出行 | `mass-balance-identity` |
| `calc_06` | 储存 | `opening stock + receipts − dispatches − closing stock = measured storage loss`；储存损失不属于合格交接输出。 | 库存台账；发货；期末库存；损失记录 | 按储存时长记录的储存损失 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_01` | 流身份 | 使用经核实的 `Brazil nuts, in shell` UUID，属性为质量、单位为 kg。保留农场鲜品节点或明确延伸交接节点的限定信息，不得替换为去壳、劈开、仁或水的身份。 | 平台身份记录；数据集元数据 |
| `quality_02` | 树木和采收数量 | 使用校准秤、计量表或透明且有记录的估计。路线不使用灌溉、湿法清理、包装或储存时，记录有依据的零值。 | 校准记录；田间和批次日志 |
| `quality_03` | 木质蒴果壳和产品状态 | 分别测量或记录完整蒴果、打开蒴果后保留种子硬壳的种子以及调理状态。分配或换算涉及蒴果壳水分或干物质时，保留相应基准。 | 批次记录；秤；水分或鲜度检测 |
| `quality_04` | 完整性 | 核对树木投入、采收输出、木质蒴果壳去向、调理输出、拒收物、残余物、水分损失、储存损失和交接发货。 | 质量平衡工作簿；库存台账 |
| `quality_05` | 时间和多年生代表性 | 覆盖声明作物年度，报告树木阶段、结果年龄、补植事件、间作、异常天气和平均方法。 | 作物年度登记；树木生命周期记录 |
| `quality_06` | 副产品和去向 | 为每项预期木质蒴果壳交接、降级去向、返工循环、拒收处理和残余物去向提供证据。不得为未经核实的去向分配抵扣。 | 转移单；去向记录；处理记录 |
| `quality_07` | 地理和技术 | 披露国家、地区、气候、土壤、灌溉制度、采收方式、开蒴果方法、分级方法、储存条件、木质蒴果壳去向和交接节点。 | 场址描述；过程说明；设施记录 |
| `quality_08` | 不确定性和估计 | 将暂定范围标为可替换的候选阶段估计，在用于已审阅或已发布内容之前，用实测或有来源支持的值替换。 | 审查记录；更新后的前景数据集 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 参考流 | 参考产品采用经核实的 `Brazil nuts, in shell` UUID，属性为质量、单位为 kg。数据集声明木质蒴果打开后的单粒带壳种子，不得替换为未打开蒴果、去壳仁或劈开的巴西坚果。 | `codex-tree-nuts-hygiene-cxc-6-1972` |
| `validation_02` | 过程图 | 所有必需过程均存在；声明交接节点或路线需要时，须纳入开蒴果以及实际进行的清理、分级和储存过程。 | `fao-brazil-nut-fruit-structure` |
| `validation_03` | 多年生生产 | 树木建植、未结果年份、结果期、补植、间作归属和清除均关联至声明作物年度，不得重复计入。 | `fao-brazil-nut-fruit-structure`; `iso-14044-2006` |
| `validation_04` | 采收和收集 | 采收、收集、未收集、受损、残余物和合格巴西坚果质量相互核对；声明成熟度和交接状态。 | `mass-balance-identity` |
| `validation_05` | 开蒴果和质量 | 完整果实投入、木质蒴果壳、合格带壳产品、等级、降级／返工、拒收物、异物、水分损失和残余物相互排斥且满足质量平衡。 | `mass-balance-identity`; `fao-brazil-nut-fruit-structure` |
| `validation_06` | 储存和交接节点 | 期初库存、收货、发货、期末库存、储存损伤、产品状态、储存时长和交接输出相互核对。储存损失排除在合格输出之外。 | `mass-balance-identity`; `fao-brazil-nut-fruit-structure` |
| `validation_07` | 分配和返工 | 木质蒴果壳分配、等级分配、降级路线、返工循环、拒收材料处理及任何间作归属均明确，任何负荷或输出不得重复计入。 | `iso-14044-2006` |
| `validation_08` | 证据和披露 | 所有重要数量流均有前景采集规则及候选范围或方法约束；披露估计、未解决身份、交接状态、木质蒴果壳去向及证据局限。 | `fao-brazil-nut-fruit-structure`; `mass-balance-identity` |
| `validation_09` | 批次和生产周期记录 | 每轮采收、调理批次、等级批次和储存收货均有声明边界、关联投入与输出、清理或换批状态及报告期；共用运行负荷不得重复计入。 | `mass-balance-identity` |
| `validation_10` | 多场址汇总 | 列出每个贡献产出的林地单元、收集队伍、接收点和调理地点；将场址层面的投入、输出和证据关联至共同边界，记录代表性决定，不得遗漏或重复计入场址。 | `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已审阅的带壳巴西坚果前景数据集使用 `secondary_dataset`；仅通过规定审查和发布门槛后才可提升为 `background_dataset` |
| downstream_use | 构建和验证声明农场鲜品节点或延伸开蒴果、调理或储存交接节点的带壳巴西坚果 process 和 lifecyclemodel 投影 |
| allowed_use | 保留声明产品状态、木质蒴果壳状态、成熟度、质量、作物年度、地理位置和分配处理时，用于树木管理、采收、收集、开蒴果、清理、分级、储存和交接节点建模 |
| excluded_use | 去硬壳、劈开、仁加工、榨油、烘烤或其他加工巴西坚果产品、硬壳产品、零售产品、消费者使用、交接节点后物流及未报告产品类别 |
| required_metadata | 参考 UUID；质量属性和质量单位组；CPC 3.0 `01377`；品种；地理位置；树木阶段和年龄；作物年度；灌溉；成熟度；木质蒴果打开后的带壳种子状态；蒴果壳去向；硬壳和等级质量；合格、拒收、残余物、损失和储存记录 |
| required_quality_disclosure | 实测与估计区分；鲜度或水分方法；质量平衡完整性；树木寿命和间作分配；木质蒴果壳副产品分配；返工和拒收去向；储存时长；数据期间；地理位置；技术；未解决身份缺口 |
| update_trigger | 新作物年度记录、树木阶段或补植的重大变化、采收或开蒴果技术变化、新预期木质蒴果壳路线、储存实践变化、有证据支持的范围替换或平台身份修订 |

## 11. 数据源

以下作物来源在其声明范围内支持定性身份与处理背景，并不确立本 PCR 中暂定的推理筛选估计；将这些估计用作模型数量前，须取得场址测量和经审阅证据。农艺活动记录应针对实际作物和场址。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ipcc-2019-afolu` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines, AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | 受管理土壤和农业排放计算方法背景 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://committee.iso.org/standard/38498.html | 分配层级、数据质量、边界和披露规则 |
| `mass-balance-identity` | method_factor | Conservation-of-mass method identity for lot reconciliation | 采收、开蒴果、分级、储存、拒收、残余物及水分损失核对 |
| `fao-brazil-nut-fruit-structure` | official_guidance | FAO, Brazil nuts, https://www.fao.org/forestry/nwfp/statistics/brazil-nuts | 仅支持作物身份、采收或初级处理及储存背景；不提供定量清单系数 |
| `codex-tree-nuts-hygiene-cxc-6-1972` | standard | Codex Alimentarius, Code of Hygienic Practice for Tree Nuts, CXC 6-1972, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/zh/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B6-1972%252FCXC_006e.pdf | 卫生、产品状态和处理背景；不提供默认 LCA 数量或作物专属产量因子 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
