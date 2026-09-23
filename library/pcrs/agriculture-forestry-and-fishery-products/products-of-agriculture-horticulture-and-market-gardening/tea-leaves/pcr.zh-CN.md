---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tea-leaves
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 声明初级加工门的茶叶及加工茶

## 1. 范围与适用性

本 PCR 覆盖 *Camellia sinensis* 的经营性种植、嫩梢和叶片采摘、鲜叶接收、命名的初级制茶路线、分级、储存以及在声明初级加工门交付干茶。分类覆盖 CPC 3.0 01620 Tea leaves，并采用已核实的平台 `Tea` 产品流作为加工茶交付的参考身份。

路线不是普遍强制的，而是逐批选择。绿茶使用酶失活或杀青、可选揉捻或成形以及干燥；红茶使用萎凋、揉捻或破碎、氧化以及干燥；乌龙茶使用萎凋、摇青或部分通气、揉捻、部分氧化以及干燥；白茶使用萎凋和干燥，不要求揉捻或氧化；黄茶使用杀青、闷黄和干燥；黑茶使用杀青、揉捻、渥堆或后发酵以及干燥。每个批次必须选择一个命名路线。

本 PCR 排除草本或水果浸泡物、茶饮料、提取物、浓缩物、速溶茶、香味或调味茶、脱咖啡因、消费者冲泡、包装展示、零售和下游配送。不选择剩余或 n.e.c. 产品类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.tea-leaves |
| classification_refs | CPC 3.0: 01620 Tea leaves |
| covered_products | 仅由 *Camellia sinensis* 制成的命名干茶：绿茶、红茶、乌龙茶、白茶、黄茶和黑茶，并披露所选初级加工路线 |
| excluded_products | 草本或水果浸泡物；茶饮料；提取物；浓缩物；速溶茶；香味或调味茶；脱咖啡因茶；消费者冲泡茶；零售包装展示 |
| representative_product | 由 *Camellia sinensis* 嫩梢和叶片制成的干制成品茶 |
| production_route | 多年生茶园经营、采摘、鲜叶处理、路线特定的初级加工、干燥、分级、储存和初级加工门交付 |
| market_state | 声明初级加工门的干制分级茶，披露茶类、水分、等级、批次、路线和储存条件 |

平台核实身份是 `Tea`，而不是农场门鲜叶流。因此本 PCR 保留 CPC 01620 作为覆盖分类，同时明确声明加工茶门，避免将平台身份与方法学边界混为一谈。

## 3. 参考流

### 功能单位

| 字段 | 值 |
| --- | --- |
| What | 在声明初级加工门交付的干制成品茶 |
| How much | 1 kg |
| How well | 命名茶类；声明水分和等级；仅由 *Camellia sinensis* 叶、芽和嫩梢制成 |
| How long or cycle | 覆盖茶园管理、采摘、加工、分级和门内储存的完整生产周期及报告期 |
| reference_flow_link | `Tea` `d16090ca-ddbe-4fd4-a498-fe4cab8bb525` |

### 参考流对象

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | *Camellia sinensis*；命名茶类；干制成品茶状态；等级；水分；批次或生产批；声明初级加工门；不含包装 |

平台 `Tea` 流没有工艺路线或门点元数据。因此本 PCR 的门点定义为初级加工、干燥和分级完成后的包装前干茶交接。鲜叶、萎凋叶、氧化叶和加工残余保留为路线特定的前景状态，不因属于同一产品家族就使用成品茶 UUID。

## 4. 测量和单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | 参考产品和所有干茶产品状态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流和产品状态量使用质量基准；湿基或干基水分另行记录。 |
| `measurement_02` | 鲜叶、萎凋叶和干茶转换 | Mass | kg 鲜料和 kg 干料 | 记录转换前的实际状态，并由批次质量和水分计算状态产率，不套用无依据的统一系数。 |
| `measurement_03` | 肥料和植保投入 | 营养素或配方产品质量 | kg 营养素或 kg 产品 | 营养素质量与配方产品质量分开，活性成分或产品身份保留在前景记录中。 |
| `measurement_04` | 水、燃料和电力 | 供应形态的体积、能量或质量 | L、m3、MJ、kWh 或 kg | 保留供应单位；仅使用声明的密度、热值、计量换算或供应商因子进行转换。 |
| `measurement_05` | 多年生茶园归属 | 质量和面积时间 | kg、m2 和 m2·year | 将建植、补植、修剪、土地占用和终止事件关联到生产期，并只向茶产出归属一次。 |

## 5. 系统边界

前景边界从经营性茶园及报告期的建植或补植记录开始，包括田间投入、土地占用、茶园维护、采摘、收集、鲜叶处理、所选初级加工路线、干燥、分级、到声明门点的储存、加工拒收物、残余物、直接排放、产生的废水以及批次平衡所需的归属规则。

边界在干制分级茶跨越声明初级加工门时结束，门后不包括包装展示、零售、下游配送、消费者冲泡或饮料制备。电力、燃料、肥料产品、植保产品、供水和处理服务的背景数据不属于前景 PCR 边界，但前景数据包使用这些投入时必须链接背景数据集。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 经营性 *Camellia sinensis* 茶园及报告期投入、土地占用、采摘记录，或有文件支持的上游茶园数据集 |
| starting_condition_role | 向独立采摘和收集节点提供鲜茶梢和叶片的生产环境 |
| product_classification_scope | CPC 3.0: 01620 Tea leaves；仅限 *Camellia sinensis* 的命名茶产品 |
| recursive_input_rule | 同类别茶产品作为后续路线输入时，记录为带门点和质量状态的上游茶数据集；接收批次不得递归纳入其茶园或初级加工负荷 |
| upstream_dataset_requirement | 茶园、鲜叶供给或预加工茶中间体不在前景操作者报告边界内时，使用上游数据集，并披露 UUID、路线、门点、地理、期间和质量状态 |
| disclosure | 披露茶类、路线、茶园阶段、鲜叶或干茶基准、等级、水分、拒收比例、残余去向、储存时长以及是否排除包装 |

### Boundary Rules

| rule_id | applies_to | source_ids | rule |
| --- | --- | --- | --- |
| `boundary_01` | plantation_to_gate | `iso-20715-2023-tea-classification`; `iso-14044-2006` | 包括生产声明干茶参考流所需的茶园、采摘、所选初级加工路线、干燥、分级和门内储存。 |
| `boundary_02` | route_selection | `iso-20715-2023-tea-classification`; `fao-tea-processing-manual` | 每批选择一个命名路线，只纳入实际发生的路线状态；未使用的萎凋、氧化、揉捻或闷黄不得计入。 |
| `boundary_03` | gate_definition | `iso-14044-2006` | 门点位于初级加工、干燥、分级和纳入的储存之后，包装展示、零售、下游配送、消费者冲泡和饮料制备之前。 |
| `boundary_04` | recursive_same_category_input | `mass-balance-identity` | 同类别上游茶输入是声明数据集输入，不得在接收茶过程中递归展开。 |
| `boundary_05` | direct_emissions_and_residues | `fao-tea-processing-manual`; `ipcc-2019-refinement-afolu` | 当田间或加工排放、废水、粉尘、残余、拒收物及其去向跨越前景边界或用于批次平衡时，必须记录。 |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tea_plantation_management` | 经营性茶园管理 | `required` | 每个茶批次必须声明茶园来源或上游茶园数据集。 | 多年生生物生产 | 每报告期和每 1 kg 干茶 |
| `tea_plucking_collection` | 采摘和鲜叶收集 | `required` | 每批需要采摘记录和鲜叶交接。 | 独立采收节点 | 收集鲜叶 kg |
| `tea_green_leaf_handling` | 鲜叶接收和初级调制 | `required` | 包括接收、临时存放、冷却或通风以及首次原料到准备状态交接。 | 初级调制 | 接收鲜叶 kg 和调制叶 kg |
| `tea_route_processing` | 路线特定的制茶和干燥 | `required` | 选择绿、红、乌龙、白、黄或黑茶中的一个命名路线。 | 物料处理和稳定化 | 干茶产出 kg |
| `tea_grading_storage_gate` | 分级、储存和初级加工门 | `required` | 包括到声明干茶门的分级和储存；排除包装展示。 | 分级、储存和交接 | 1 kg 干茶参考流 |

### 路线替代

alternative-production-route 模块只作为经营性生物生产的路线拓扑覆盖，不创建新的 PCR 身份。每批路线互斥，在类别范围内可并存：

| route_id | selected route states | omitted states that must not be counted | route delta and hand-off |
| --- | --- | --- | --- |
| `green_tea_route` | 杀青或酶失活；可选揉捻或成形；干燥 | 未有单独证据时不计氧化和渥堆 | 干绿茶干燥后交接到分级 |
| `black_tea_route` | 萎凋；揉捻或破碎；氧化；干燥 | 不计作绿茶路线的杀青 | 干红茶干燥后交接到分级 |
| `oolong_tea_route` | 萎凋；摇青或部分通气；揉捻；部分氧化；干燥 | 不计完整红茶氧化和绿茶杀青 | 干乌龙茶干燥后交接到分级 |
| `white_tea_route` | 采摘；萎凋；干燥 | 不计揉捻、完整氧化和杀青 | 干白茶干燥后交接到分级 |
| `yellow_tea_route` | 杀青；闷黄；干燥 | 不计红茶氧化 | 干黄茶干燥后交接到分级 |
| `dark_tea_route` | 杀青；揉捻；渥堆或后发酵；干燥 | 不以红茶氧化替代渥堆或后发酵 | 干黑茶干燥后交接到分级 |

### Process: 经营性茶园管理 (`tea_plantation_management`)

#### Inputs

##### Product flows

###### 茶树种植材料和补植材料（`tea_planting_material`）

记录用于建植或补植的种子、插条、苗木或补植材料；成熟茶园期没有补植事件时记录为零。

- Selected flow: Tea planting material（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按建植或补植事件计量种植材料
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每报告期并换算到 1 kg 干茶
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: 临时种植材料筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg planting material/kg dry tea
  - Basis: 报告期补植和建植负荷归一到干茶
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 农业养分与肥料投入（`tea_plantation_management_agricultural_nutrient_inputs`）

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
- Range: 临时氮投入筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.40
  - Unit: kg N/kg dry tea
  - Basis: 茶园营养投入初筛，需由田间记录替代
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: 临时磷钾投入筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.60
  - Unit: kg combined P and K nutrient/kg dry tea
  - Basis: 茶园营养投入初筛，P、K 仍须分开记录
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 植保配方产品（`tea_crop_protection_input`）

记录每种植保产品、可得的活性成分、施用事件和处理面积。

- Selected flow: Named crop-protection formulation（路线特定 UUID 未解析）
- Flow property / unit: Mass of formulated product / kg
- Amount rule: 按施用事件计量产品质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每处理面积并换算到 1 kg 干茶
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: 临时植保产品筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.03
  - Unit: kg formulated product/kg dry tea
  - Basis: 初步宽范围；保留产品身份用于背景链接
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 灌溉和田间用水（`tea_field_water_input`）

记录边界内的灌溉、施肥载水和其他田间供水；降雨可作为场址描述，但不作为购买产品输入。

- Selected flow: Irrigation water（路线特定 UUID 未解析）
- Flow property / unit: Volume / L
- Amount rule: 按地块和期间计量或估算田间用水
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每报告期并换算到 1 kg 干茶
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: 临时田间用水筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,500
  - Unit: L/kg dry tea
  - Basis: 灌溉和施肥载水，需由计量或灌溉记录替代
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 茶园燃料和电力（`tea_plantation_energy_input`）

记录灌溉、修剪、喷施、割草和田间通行使用的柴油、汽油、电力及其他能源。

- Selected flow: Plantation fuel and electricity（路线特定 UUID 未解析）
- Flow property / unit: Energy / MJ or kWh
- Amount rule: 按田间活动计量燃料和电力
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每报告期并换算到 1 kg 干茶
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: 临时茶园能源筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4.0
  - Unit: MJ/kg dry tea
  - Basis: 采摘前田间作业和灌溉能源
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### 基本流

###### 农业土地占用（`tea_land_occupation`）

记录土地面积、茶园阶段、报告期和产量，用于向参考流归属土地占用。

- Selected flow: Agricultural land occupation
- Flow property / unit: Area-time / m2·year
- Amount rule: 管理面积乘报告期间并按声明茶产出归属
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_activity_records`
- Range: 临时土地占用筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: m2·year/kg dry tea
  - Basis: 生产茶园面积和报告期产量
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### 可供采摘的茶梢（`tea_shoots_on_bush`）

记录独立采摘节点之前茶园产生的预期嫩梢和叶片，并将收集交接与鲜叶质量平衡。

- Selected flow: Tender tea shoots and leaves（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按采摘批次计量或计算可采摘茶梢
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Range: 临时鲜梢供给筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 3.0
  - Upper: 12.0
  - Unit: kg fresh shoots/kg dry tea
  - Basis: 茶园产出与所选干茶路线平衡
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### 修剪或移除的茶园生物质（`tea_plantation_residue`）

将修剪物、移除枝条、杂草和非产品生物质与采摘茶梢分开，并记录去向或回收用途。

- Selected flow: Tea plantation biomass residue（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按作业和去向计量或估算残余质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每报告期并换算到 1 kg 干茶
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination_records`
- Range: 临时茶园残余筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3.0
  - Unit: kg residue/kg dry tea
  - Basis: 修剪和移除生物质，记录堆肥、还田、燃烧或处置
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: 采摘和鲜叶收集 (`tea_plucking_collection`)

#### Inputs

##### Product flows

###### 可供采摘的茶梢（`tea_plucking_source`）

采摘节点接收茶园预期茶梢，记录采摘批次并交接至鲜叶处理。

- Selected flow: Tender tea shoots and leaves（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 分配到采摘批次的来源茶梢质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: 鲜梢采摘投入质量控制范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 3.0
  - Upper: 12.0
  - Unit: kg fresh shoots/kg dry tea
  - Basis: 来源茶梢与干茶产出平衡
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### 采摘和收集能源（`tea_plucking_energy`）

记录采摘、装载、周转容器和收集设备的燃料或电力。

- Selected flow: Plucking and collection energy（路线特定 UUID 未解析）
- Flow property / unit: Energy / MJ or kWh
- Amount rule: 按采摘、装载和收集设备计量燃料或电力
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每 1 kg 收集鲜叶并换算到 1 kg 干茶
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: 临时采摘能源筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: MJ/kg dry tea
  - Basis: 采摘、装载和田间收集设备
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### 进入加工的收集鲜茶叶（`tea_fresh_leaf_collected`）

该产出是转入鲜叶处理的 *Camellia sinensis* 叶、芽和嫩梢，不是成品 `Tea` 参考流。

- Selected flow: Fresh tea leaves collected（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 在收集或接收交接处称量鲜叶
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_output_records`
- Range: 鲜叶到干茶投入筛选范围
  - Range role: Typical range (`typical_range`)
  - Lower: 3.0
  - Upper: 8.0
  - Unit: kg fresh leaf/kg dry tea
  - Basis: 鲜叶水分和路线产率，需由批次质量平衡替代
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-tea-processing-manual`; `mass-balance-identity`

##### Waste flows

###### 采摘损失和非茶材料（`tea_plucking_loss`）

将落叶、不合格嫩梢、异物和田间损失与预期收集产出分开，并记录去向。

- Selected flow: Plucking loss and non-tea material（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按采摘批次计量或平衡损失
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_output_records`
- Range: 临时采摘损失筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg loss/kg dry tea
  - Basis: 采摘掉落、拒收或非茶材料
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: 鲜叶接收和初级调制 (`tea_green_leaf_handling`)

#### Inputs

##### Product flows

###### 接收鲜茶叶（`tea_green_leaf_input`）

初级调制节点接收原始收集状态，确认批次，记录采摘到接收时间，并为所选路线形成准备状态。

- Selected flow: Fresh tea leaves collected（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按批次称量接收鲜叶
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_batch_records`
- Range: 鲜叶接收质量控制范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 3.0
  - Upper: 8.0
  - Unit: kg fresh leaf/kg dry tea
  - Basis: 批次鲜叶到干成品的质量平衡
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### 鲜叶处理用水（`tea_green_leaf_water`）

仅在水跨越边界用于清洁、抑尘或调制时记录；无水干式处理可以记录零。

- Selected flow: Green-leaf handling water（路线特定 UUID 未解析）
- Flow property / unit: Volume / L
- Amount rule: 计量或按批次估算用水
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: 临时鲜叶处理用水筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L/kg dry tea
  - Basis: 跨越处理边界的水，干式处理可以为零
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### 进入路线加工的准备鲜叶（`tea_prepared_leaf`）

该准备中间状态是有意的过程产出，交给所选路线；不得再次计为成品茶。

- Selected flow: Prepared green tea leaf（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 接收、冷却、通风或临时持有后称量调制叶
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: 准备叶质量平衡控制范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2.8
  - Upper: 8.0
  - Unit: kg prepared leaf/kg dry tea
  - Basis: 路线处理前的接收后状态
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### 鲜叶接收拒收物和处理损失（`tea_green_leaf_reject`）

识别受损、过热、污染或其他拒收鲜叶，并说明还田堆肥、回收、降级或处置路径。

- Selected flow: Green-leaf reception reject（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按批次称量或平衡拒收质量
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_destination_records`
- Range: 临时鲜叶拒收筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg reject/kg dry tea
  - Basis: 来料拒收和处理损失
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: 路线特定的制茶和干燥 (`tea_route_processing`)

#### Inputs

##### Product flows

###### 进入所选路线的准备鲜叶（`tea_route_leaf_input`）

每批只进入一个命名路线，路线按批次或生产批索引，并与前一交接平衡。

- Selected flow: Prepared green tea leaf（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按批次称量路线输入
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_batch_records`
- Range: 路线投入筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2.8
  - Upper: 8.0
  - Unit: kg prepared leaf/kg dry tea
  - Basis: 路线投入与干茶平衡
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### 路线加工残余和茶尘（`tea_processing_residue`）

将叶片碎屑、茎、茶尘、扫集物和污泥单独记录。销售为茶产品的等级分级物是预期产出，不是废物；丢弃分量必须有去向。

- Selected flow: Tea processing residue and dust（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按批次和去向计量残余质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination_records`
- Range: 临时加工残余筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg residue/kg dry tea
  - Basis: 碎叶、茎、茶尘和处理残余
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 热干燥直接空气排放（`tea_drying_direct_emissions`）

记录燃料燃烧或工艺干燥产生的有报告污染物及接收介质；已有实测或因子时不得以宽泛的无名排放替代具体物质。

- Selected flow: Reported drying emissions by substance and receiving medium（UUID 未解析）
- Flow property / unit: Mass / kg substance
- Amount rule: 由烟气测量或燃料、工艺记录计算排放
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Range: 临时直接排放筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg reported substance/kg dry tea
  - Basis: 具体物质或因子计算结果，不代表统一污染物身份
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### 萎凋叶中间状态（`tea_withered_leaf`）

仅在红茶、乌龙茶和白茶路线有萎凋记录时使用；它是准备中间体，不是额外成品。

- Selected flow: Withered tea leaf（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按批次称量萎凋后中间体
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: 萎凋叶中间体筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2.0
  - Upper: 6.5
  - Unit: kg withered leaf/kg dry tea
  - Basis: 路线特定水分和处理损失
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 杀青或酶失活叶中间状态（`tea_fixed_leaf`）

仅在绿茶、黄茶或黑茶路线记录加热或酶失活时使用；它是路线状态，不是最终参考流。

- Selected flow: Enzyme-inactivated tea leaf（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按批次称量杀青后中间体
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: 杀青叶中间体筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.5
  - Upper: 6.5
  - Unit: kg fixed leaf/kg dry tea
  - Basis: 路线特定水分和处理损失
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 揉捻、破碎或成形叶中间状态（`tea_rolled_leaf`）

仅在所选路线包含揉捻、破碎、成形或同等细胞破坏处理时使用；无额外处理记录时不加入白茶路线。

- Selected flow: Rolled, macerated, or shaped tea leaf（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按批次称量揉捻或成形后中间体
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: 揉捻叶中间体筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.3
  - Upper: 5.5
  - Unit: kg rolled or shaped leaf/kg dry tea
  - Basis: 路线特定干燥前中间体
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 氧化或部分氧化叶中间状态（`tea_oxidized_leaf`）

仅在红茶或乌龙茶路线有通气或酶促氧化记录时使用；记录氧化状态和时长，不把工艺记录之外的过程称为发酵。

- Selected flow: Oxidized or partially oxidized tea leaf（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按批次称量氧化后中间体
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: 氧化叶中间体筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.2
  - Upper: 5.0
  - Unit: kg oxidized leaf/kg dry tea
  - Basis: 路线特定干燥前中间体
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 分级前干制成品茶（`tea_dried_made_tea`）

干燥产出是交给分级的稳定可用状态。固定平台 `Tea` 身份只应用于此干产品状态和后续门点产出。

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: 最终干燥后称量干制成品茶
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_batch_records`
- Sources: `iso-20715-2023-tea-classification`
- Range: 干制成品茶水分和产率控制范围
  - Range role: Typical range (`typical_range`)
  - Lower: 0.15
  - Upper: 0.40
  - Unit: kg dry made tea/kg fresh leaf
  - Basis: 批次干产出，水分另行记录
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-tea-processing-manual`

##### Waste flows

###### 制茶和干燥损失（`tea_processing_loss`）

记录处理、茶尘、修整、超出水分变化的蒸发或拒收造成的损失，并将每部分链接到返工、回收、堆肥、能源回收或处置。

- Selected flow: Tea processing and drying loss（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 扣除中间体、产品和残余后的质量平衡差额
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_processing_batch_records`
- Range: 制茶损失筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg loss/kg dry tea
  - Basis: 已计水分和残余后的质量平衡
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

### Process: 分级、储存和初级加工门 (`tea_grading_storage_gate`)

储存时长是批次级过程参数，不是流交换。根据 `cp_quality_and_storage_records` 的储存起止记录计算，并保留储存条件和批次状态；仅对声明门点前的储存使用 0–180 天临时 QA 筛选范围。

#### Inputs

##### Product flows

###### 接收分级的干制成品茶（`tea_grading_input`）

分级节点接收稳定干产品并分为声明等级或去向状态；它独立于初级加工，因为等级状态和交接点独立。

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: 按批次称量接收干茶
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_storage_records`
- Range: 分级投入平衡范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.98
  - Upper: 1.02
  - Unit: kg graded input/kg dry tea reference flow
  - Basis: 接收至分级的质量平衡
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### 分级和筛选电力（`tea_grading_energy`）

记录筛选、分选、筛分和质量分级使用的电力或燃料。

- Selected flow: Grading and screening energy（路线特定 UUID 未解析）
- Flow property / unit: Energy / MJ or kWh
- Amount rule: 按计量或批次归属分级茶用能
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: 每 1 kg 干茶
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_activity_records`
- Range: 临时分级能源筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: MJ/kg dry tea
  - Basis: 筛选、分选和分级服务
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### 门点接收的主等级茶（`tea_primary_grade_output`）

这是预期产出状态；门点产出必须携带茶类、等级、水分、批次、路线和储存条件。

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: 称量合格主等级产出
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 每 1 kg 干茶参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_storage_records`
- Sources: `iso-20715-2023-tea-classification`
- Range: 主等级产出平衡范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.60
  - Upper: 1.00
  - Unit: kg accepted tea/kg graded input
  - Basis: 取决于等级的合格比例
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 可销售的次等级茶（`tea_secondary_grade_output`）

当作为茶销售或转移时，这是预期产出状态；应记录第二个茶等级或去向状态及其独立交接，不得静默作为废物。

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: 按等级称量次等级可销售茶
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 每 1 kg 干茶参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_storage_records`
- Range: 次等级产出筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.40
  - Unit: kg secondary tea/kg graded input
  - Basis: 有独立交接的可销售次等级
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 回收茶尘或小颗粒茶产品（`tea_recovered_fraction_output`）

只有在作为茶销售或转移时，这是预期产出状态；否则进入残余或拒收卡，并记录去向和负荷处理。

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: 按去向称量回收茶分量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 每 1 kg 干茶参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination_records`
- Range: 回收茶分量筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg recovered tea product/kg graded input
  - Basis: 具有声明茶产品交接的分量
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 干茶门点产出（`tea_gate_output`）

这是下游 LCA 建模使用的单一参考流交接，已扣除声明的次等级茶、回收茶产品、拒收物和储存损失，并归一到 1 kg。

- Selected flow: Tea `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: 跨越声明门点的合格干茶，归一到 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 每 1 kg 干茶参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_quality_and_storage_records`
- Sources: `mass-balance-identity`
- Range: 门点产出质量平衡接受范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.98
  - Upper: 1.02
  - Unit: kg gate output/kg reference flow
  - Basis: 最终参考流归一和质量平衡
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### 不合格茶、拒收物和储存损失（`tea_reject_or_storage_loss`）

识别所有拒收或不合格状态，并声明返工、降级、回收、返回上游、堆肥、能源回收或处置去向；未解决的拒收物不得计为合格茶。

- Selected flow: Off-spec tea and storage loss（路线特定 UUID 未解析）
- Flow property / unit: Mass / kg
- Amount rule: 按批次和储存期称量拒收、降级、损坏或损失质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: 每 1 kg 干茶参考流
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_destination_records`
- Range: 不合格和储存损失筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg rejected or lost tea/kg graded input
  - Basis: 分级拒收、处理损失和门前储存损失
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### 储存粉尘和仓储排放（`tea_storage_emissions`）

记录干茶储存产生的粉尘、通风和有报告排放；有测量或因子时使用具体物质和接收介质。

- Selected flow: Reported storage dust or emission by substance and medium（UUID 未解析）
- Flow property / unit: Mass / kg substance
- Amount rule: 按储存时长和批次测量或计算归属排放
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 每 1 kg 干茶参考流
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Range: 临时储存排放筛选范围
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg reported substance/kg dry tea
  - Basis: 仓储通风和粉尘记录，需具体物质报告
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. 分配和联产品处理

| rule_id | applies_to | source_ids | rule |
| --- | --- | --- | --- |
| `allocation_01` | plantation_phase | `iso-14044-2006`; `ipcc-2019-refinement-afolu` | 按声明期间和产出基准将多年生建植、补植、土地占用和茶园管理归属于报告期茶产出，不得在加工阶段再次归属同一阶段负荷。 |
| `allocation_02` | route_batch | `iso-14044-2006`; `mass-balance-identity` | 按路线、批次、生产批或报告期索引投入、产出、清洁、干燥、换线和拒收，避免共享运行负荷重复计算。 |
| `allocation_03` | marketable_tea_outputs | `iso-14044-2006` | 当主等级茶、次等级茶和回收茶分量各自有预期交接时，必须全部列出。决定：首先采用过程细分和直接计量；产出物理上不可分割时，默认按实测干茶质量分配，并将任何经济分配仅作为有文件支持的敏感性分析披露。对受影响过程始终一致使用一种方法。 |
| `allocation_04` | residues_and_rejects | `iso-14044-2006`; `mass-balance-identity` | 残余物仅因可能有用途并不自动成为联产品；只有有声明交接、去向和产品质量记录时才作为预期产出，否则保留产生过程负荷并作为残余或废物处理。 |
| `allocation_05` | route_alternatives | `iso-20715-2023-tea-classification` | 绿、红、乌龙、白、黄和黑茶路线逐批互斥，不得合并路线负荷或在没有路线证据时加入氧化、揉捻、萎凋、杀青或渥堆。 |
| `allocation_06` | multi_period_attribution | `iso-14044-2006`; `ipcc-2019-refinement-afolu` | 将建植、补植、修剪、终止、投入、产出和储存事件关联到报告期或阶段，避免跨期间重复归属。 |
| `allocation_07` | rework_and_rejects | `mass-balance-identity` | 返工、降级、回收和边界退出必须链接产生节点；合格茶产出排除未解决拒收物，拒收物不能在两个交接点重复计数。 |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity_records` | `tea_plantation_management`; `tea_plucking_collection`; `tea_green_leaf_handling`; `tea_grading_storage_gate` | 茶园面积和阶段；田间投入；用水；能源；土地占用 | 田间登记、发票、施用记录、计量表、GIS 和作业日志 | area; phase; cultivar; input_product; amount; nutrient_content; water; fuel; electricity; date; operation; reporting_period | 将实物投入和作业核对至每块地、活动和作物周期 | m2；m2·year；kg；L；MJ；kWh；日期 | 每个事件和年度报告期 | 建植、补植、生产作物周期、采摘批次和报告期 | 所有纳入茶园地块及其门前活动 | 按实物身份、地块、活动和期间汇总；不合并产品地计算养分 | 发票；标签；校准计量表；田间日志；GIS 或地块登记 |
| `cp_harvest_output_records` | `tea_plantation_management`; `tea_plucking_collection` | 嫩梢；鲜叶；采摘量；采摘损失；接收交接 | 称重单、采摘登记、产量记录和鲜叶接收日志 | block; cultivar; plucking_date; shoot_standard; fresh_mass; harvest_loss; receiving_time; lot_id | 将采摘量和接收量与采摘批次及干茶路线核对 | kg；日期时间；批次标识 | 每个采摘批次和交接 | 完整作物周期和采摘批次 | 进入所选路线的全部采摘批次 | 保持茶园到鲜叶的一对一关联并关闭采摘量 = 接收量 + 损失 | 校准地磅；批次日志；接收记录；水分或质量记录 |
| `cp_processing_batch_records` | `tea_green_leaf_handling`; `tea_route_processing` | 鲜叶；路线中间体；制成干茶；加工残余；公用工程投入 | 批次单、秤、水分检测、工艺日志、公用工程计量和燃料记录 | route; batch_id; input_state; intermediate_state; process_step; moisture; output; loss; fuel; electricity; water; operating_condition | 核对每个批次、路线状态、公用工程读数、水分结果和质量平衡 | kg；%；h；°C；L；MJ；kWh | 每批或生产批 | 接收至所选初级加工路线和干燥 | 门内所有所选路线、批次和加工设施 | 只有路线、批次、公用工程和质量平衡完成后才汇总 | 校准秤和水分仪；批次单；计量核对；路线日志 |
| `cp_quality_and_storage_records` | `tea_grading_storage_gate` | 合格等级；次等级；回收茶产品；拒收；储存；门点产出 | 分级日志、筛分记录、称重、仓储日志和质量记录 | grade; destination; accepted_mass; secondary_mass; recovered_mass; reject_mass; storage_start; storage_end; condition; loss; gate_date | 列出各等级和去向，再核对储存时长、损失和门点交接 | kg；等级；日；温度；湿度；日期 | 每个分级或储存批次 | 干燥后分级至声明门点 | 门点前纳入的全部产出去向和储存 | 列出预期产出和拒收；按批次汇总时长和质量；排除下游物流 | 校准秤；筛分或分级记录；仓储日志；门点放行记录 |
| `cp_residue_destination_records` | `tea_plantation_management`; `tea_plucking_collection`; `tea_green_leaf_handling`; `tea_route_processing`; `tea_grading_storage_gate` | 修剪残余；采摘损失；加工残余；拒收；返工；回收；处置 | 残余日志、废物转移记录、回收发票和返工日志 | residue_state; amount; destination; recovery; rework; compost; disposal; producing_process; lot_id | 将每项残余或拒收链接到产生过程和最终去向 | kg；去向；批次标识 | 每批、作业或处置事件 | 作物周期、采摘批次、路线批次、分级和储存期间 | 门内所有残余、拒收、返工和回收分量去向 | 保留产生过程和最终处置；不重复计算返回或回收物 | 残余台账；转移单；回收发票；返工记录；去向证据 |
| `cp_emission_records` | `tea_plantation_management`; `tea_green_leaf_handling`; `tea_route_processing`; `tea_grading_storage_gate` | 向空气、水或土壤的具体排放；储存粉尘；处理产物 | 测量记录、因子计算、处理日志和排放记录 | substance; medium; source; factor; measurement; treatment; reporting_period; lot_id | 报告带有具体物质、介质、来源和方法的实测或计算排放 | kg 物质 | 每个事件或报告期计算 | 田间作业、加工、干燥、分级和纳入的储存 | 声明边界内全部田间和加工排放源 | 按物质、介质、来源、批次和期间汇总；不用宽泛未指定类别 | 测量记录；因子来源；处理日志；模型版本；质量审查 |

### Calculation rules

| rule_id | Inputs | Calculation |
| --- | --- | --- |
| `calc_01` | 鲜叶质量、水分、干茶质量 | 以干茶质量除以鲜叶质量计算路线产率，并保留湿基和干基水分记录。 |
| `calc_02` | 面积、期间、茶园阶段、产出 | 将面积时间和阶段负荷归属于报告期茶产出，避免建植、补植和生产阶段重复归属。 |
| `calc_03` | 肥料产品记录和营养含量 | 将配方肥产品转换为 N、P、K 营养质量，同时保留产品身份以链接背景数据集。 |
| `calc_04` | 批次投入、中间体、产出、残余、损失 | 逐批按质量平衡核算；未解决差额是验证发现，不得静默分配给合格茶。 |
| `calc_05` | 等级产出和去向 | 按声明交接将主等级、次等级、回收茶产品、残余、拒收、返工和处置分类。 |
| `calc_06` | 路线、批次、能源、换线、储存期 | 按有文件的运行基准向路线和期间记录分配共享服务，防止共享负荷出现在多个产品系统中。 |

### Data quality requirements

| rule_id | Requirement |
| --- | --- |
| `quality_01` | 每个参考流数据集确认 *Camellia sinensis*、命名茶类、路线、批次、等级、水分基准和声明门点。 |
| `quality_02` | 优先使用称重、计量、发票、批次单和命名投入记录；明确标记模型值和临时范围。 |
| `quality_03` | 覆盖报告期所有茶园地块、采摘批次、加工批次、等级、残余、拒收、储存期和路线变化。 |
| `quality_04` | 鲜叶、中间体、干茶、残余和拒收使用一致质量基准和单位换算；记录密度、热值或计量换算。 |
| `quality_05` | 披露路线特定省略、零投入、未解析身份、上游数据集和门点排除项。 |
| `quality_06` | 在最终 review 或发布数据集前，用场址记录或有来源证据替换临时推理范围。 |

## 9. 验证规则

| rule_id | applies_to | source_ids | rule |
| --- | --- | --- | --- |
| `validation_01` | identity | `iso-20715-2023-tea-classification` | 数据集必须识别 *Camellia sinensis*、一个命名茶类、一个路线、干茶状态和声明初级加工门。 |
| `validation_02` | reference_flow | `mass-balance-identity` | 参考产出必须使用 `Tea` `d16090ca-ddbe-4fd4-a498-fe4cab8bb525`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` 和 1 kg，除非有经 review 的身份修正。 |
| `validation_03` | route_completeness | `iso-20715-2023-tea-classification`; `fao-tea-chain-processing` | 必须选择一个命名路线；每个纳入路线状态必须有前序输入、后续交接和产出或损失记录；不适用状态不得计入。 |
| `validation_04` | plantation_and_harvest | `ipcc-2019-refinement-afolu` | 茶园阶段、管理投入、采摘来源、鲜叶产出和采摘损失必须关联到同一期间和批次，或关联到已识别的上游数据集。 |
| `validation_05` | batch_and_changeover | `mass-balance-identity` | 批次、生产批或连续运行边界必须链接投入、产出、清洁、换线、产率和共享服务；共享负荷不得重复计数。 |
| `validation_06` | outputs_and_allocation | `iso-14044-2006` | 必须列出所有预期产出和交接。可销售次等级茶与残余分开，一个产出不得在两个交接点计数。 |
| `validation_07` | rejects_and_rework | `mass-balance-identity` | 每个拒收或不合格状态必须有返工、降级、回收、处置或边界退出路径；合格产出排除未解决拒收物。 |
| `validation_08` | mass_balance | `mass-balance-identity` | 鲜叶、路线中间体、干茶、等级产出、残余、拒收、储存损失以及声明的蒸发或水分变化必须在记录容差内平衡。 |
| `validation_09` | data_quality | `iso-14044-2006` | 缺少重要记录、未选路线、缺少门点限定、未支持的范围替换和未解释的质量差额会阻止 review 或发布使用。 |
| `validation_10` | period_attribution | `ipcc-2019-refinement-afolu`; `iso-14044-2006` | 建植、补植、生产阶段、终止、投入、产出和储存事件必须关联期间且不得重复归属。 |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 通过身份、路线、质量平衡和数据质量验证后，作为前景茶生产包的 `secondary_dataset` |
| downstream_use | 在声明初级加工门构建茶相关 LCA process 和 lifecyclemodel 投影 |
| allowed_use | 与声明门点、地理、报告期、等级、水分基准和茶园到门范围一致的命名茶类和路线 |
| excluded_use | 草本或水果浸泡物、茶饮料、提取物、浓缩物、速溶茶、香味或调味茶、脱咖啡因、消费者冲泡、包装展示、零售或下游物流 |
| required_metadata | 参考流 UUID；茶类；路线；门点；地理；茶园阶段；期间；批次；鲜叶和干茶基准；水分；等级；残余去向；拒收处理；储存时长；背景数据集链接 |
| required_quality_disclosure | 实测与计算值；临时范围；路线覆盖；茶园和采摘覆盖；质量平衡容差；未解析身份；排除项；分配方法 |
| update_trigger | 路线、等级体系、门点、茶园阶段、投入配方、加工技术、储存实践、背景身份或有证据范围发生变化 |

## 11. 数据来源

| source_id | title | type | reference | used_for |
| --- | --- | --- | --- | --- |
| `iso-20715-2023-tea-classification` | ISO 20715:2023 Tea — Classification of tea types | `standard` | https://www.iso.org/standard/75419.html | 命名茶类、路线状态和产品身份 |
| `iso-11287-2011-green-tea` | ISO 11287:2011 Green tea — Definition and basic requirements | `standard` | https://www.iso.org/standard/51540.html | 绿茶路线和进一步加工排除 |
| `iso-3720-2011-black-tea` | ISO 3720:2011 Black tea — Definition and basic requirements | `standard` | https://www.iso.org/standard/51541.html | 红茶路线和产品身份 |
| `fao-tea-processing-manual` | FAO Manual on the Submission and Evaluation of Pesticide Residues Data，茶加工章节 | `handbook` | https://www.fao.org/fileadmin/templates/agphome/documents/Pests_Pesticides/JMPR/Manual/FAO_manual_3rd_edition_Final.pdf | 鲜叶水分、干茶状态和加工序列 |
| `fao-tea-chain-processing` | Agroindustrial system model of the Argentine tea chain | `official_guidance` | https://www.fao.org/fileadmin/templates/est/meetings/IGGtea21/Presentation-MarketReportArgentina.pdf | 采摘、萎凋、揉捻、氧化、干燥、分级和包装分解 |
| `agris-black-tea-processing-2017` | Effect of rolling methods and storage on volatile constituents of Turkish black tea | `literature` | https://doi.org/10.1002/ffj.3385 | 红茶加工序列和储存相关性 |
| `ipcc-2019-refinement-afolu` | 2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories, AFOLU | `method_factor` | https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | 多年生生产阶段、直接排放和归属背景 |
| `iso-14044-2006` | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines | `standard` | https://committee.iso.org/standard/38498.html | 边界、分配、数据质量和验证规则 |
| `mass-balance-identity` | Conservation-of-mass identity for lot reconciliation | `method_factor` | Method identity: incoming mass = intended outputs + residues + rejects + declared losses | 质量平衡计算和验证 |
