---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cocoa-beans
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 可可豆

## 1. 范围与适用性

本 PCR 用于构建栽培可可豆的前景数据包，范围从受管理可可树生产、可可荚采收，到在明确声明时的开荚、湿豆提取、发酵、干燥、清洁、分级和储存。必须区分果肉中的湿可可豆、发酵湿豆以及发酵后的干燥分级豆，不能将这些状态合并。

平台的精确参考身份是 `Cocoa beans`，其元数据为 `Production mix, at farm gate` 和 `Fresh, unprocessed produce`。因此本候选 PCR 将农场门的新鲜、未加工果肉湿豆作为参考状态。发酵豆、干燥豆或分级豆是路线特定的下游状态，不得像边界元数据相同一样复用参考 UUID。若报告扩展的采后结果，必须声明门点，并保留从农场门参考状态到该状态的批次质量和含水率换算。

本范围适用于小农、庄园、合作社或聚合农场管理下的栽培 *Theobroma cacao*，并要求披露地理位置、品种组、生产系统、作物年度和门点。范围包括可归属的多年生建植和生产阶段、管理投入、田间排放、成熟可可荚采收、开荚、湿豆提取、发酵、干燥、清洁、分级、储存、质量控制、残余物、拒收物和有文件记录的预期共产品。野生采集、可可浆、可可液块、可可脂、可可粉、巧克力、加工食品、消费品、零售包装和门后配送均排除。可可荚壳、果肉、发酵液、豆壳、粉尘和拒收豆除非有单独的预期输出及交接，否则不自动视为产品。

不选择 n.e.c. 或“其他”产品范围。分类参考为 CPC 3.0 `01640`，Cocoa beans。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cocoa-beans` |
| classification_refs | CPC 3.0 `01640`，Cocoa beans |
| covered_products | 声明新鲜农场门参考状态的栽培可可豆；在报告发酵、干燥或分级输出时，必须另行声明采后路线 |
| excluded_products | 野生可可；可可浆、液块、可可脂、可可粉、巧克力和可可食品；没有预期产品交接的荚壳、果肉、发酵液、豆壳、粉尘和拒收物；零售和消费品 |
| representative_product | 声明农场门的新鲜、未加工果肉湿可可豆；发酵、干燥和分级豆是单独识别的路线输出 |
| production_route | 受管理多年生可可生产、成熟荚采收、开荚和湿豆提取、发酵、干燥稳定化、清洁、分级和储存 |
| market_state | 新鲜农场门参考状态，或在纳入采后扩展时单独声明的发酵/干燥/分级豆交接状态 |

产品类别身份遵循平台的 `Cocoa beans` 行，不表示其与可可废物或可可浆同一。路线特定 flow card 在确认独立身份前可以保持 unmapped 或 parameterized；不得将参考 UUID 复制到已改变的物料状态。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明农场门的新鲜、未加工果肉湿可可豆 |
| How much | 1 kg |
| How well | *Theobroma cacao* 基因型或品种组、地理位置、生产系统、作物年度、湿豆含水率基准、果肉是否包含、质量声明和农场门交接 |
| How long or cycle | 一个声明的作物年度和采收季；多年生建植、替换和终止阶段按所代表生产年度建立索引并年度化 |
| reference_flow_link | 下方的精确平台产品流对象；采后输出通过声明的批次质量和含水率平衡连接 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cocoa beans `3c54da37-f1ab-4b4c-8363-5c32b638005c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种或基因型组；地理位置；农场、区块或供应商范围；生产系统；作物年度和采收季；湿豆或荚含水率基准；果肉是否包含；声明农场门状态；采后扩展标记；纳入时的发酵方法和时长；纳入时的干燥方法和最终含水率；质量等级；残余物、拒收物和预期共产品去向 |

平台元数据是 `Production mix, at farm gate` 和 `Fresh, unprocessed produce`，所以参考量不是一公斤发酵干可可豆。采后结果可以通过实测荚到湿豆、湿豆到干豆的质量平衡归一化到一公斤湿参考流，但其输出 card 仍是独立的发酵/干燥状态。皮重、包装、异物、荚壳、果肉、发酵液、豆壳、粉尘、拒收物和干燥失水均单独记录。

| 属性 | 候选筛选参考 | 证据 |
| --- | --- | --- |
| 湿豆含水率 | 发酵前约 55–60% 湿基；应由批次测量替代 | `icco-cocoa-harvesting-post-harvest`; `icco-cocoa-processing` |
| 发酵时长 | 声明批次约 4–7 天；方法和品种会改变时长 | `fao-cocoa-ota-code`; `icco-cocoa-harvesting-post-harvest` |
| 干豆含水率 | 用于储存筛选的约 6–8% 湿基；应使用批次实测值 | `icco-cocoa-processing`; `icco-cocoa-quality-requirements` |
| 晒干时长 | 晒干约 5–10 天；应由实际天气和批次记录替代 | `fao-cocoa-production-guide`; `icco-global-cocoa-farming-systems` |

## 4. 计量与单位规则

| rule_id | 适用对象 | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | 所有可可状态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按收货或干物质基准记录荚、果肉湿豆、发酵湿豆、干豆、分级豆、荚壳、果肉、发酵液、豆壳、拒收物和损失；一个平衡内不得混用湿基和干基。 |
| `measurement_02` | 参考流和采后换算 | 质量和含水率 | kg；湿基百分比 | 每个关键换算批次均测量含水率；只有采样基准和方法有记录时才使用干物质守恒。 |
| `measurement_03` | 多年生阶段 | 面积时间和年度身份 | ha·year；作物年度；阶段 | 将建植、幼树、生产、替换和终止阶段关联到同一区块和所代表年度后再年度化。 |
| `measurement_04` | 发酵 | 批次和时间 | batch id；day；kg | 记录方法、起止、翻动、批次质量、排液和干燥交接；不得在活动批次中混入新鲜豆而不建立新批次链接。 |
| `measurement_05` | 干燥和稳定化 | 质量、含水率、温度和能源 | kg；百分比；°C；kWh、MJ、L 或 kg fuel | 记录湿投入、干输出、干燥设备或天气、运行时长、载体、最终含水率及烟气或污染控制。 |
| `measurement_06` | 清洁、分级和储存 | 质量和批次身份 | kg；lot id；day | 将合格等级、降级等级、拒收批次、豆壳、粉尘、异物、储存损失和最终交接分开。 |
| `measurement_07` | 养分、作物保护和排放 | 产品和养分基准 | kg product；kg nutrient；kg substance | 将配方产品、养分或活性物质质量与排放方法输入分开；每条途径只能由一个方法负责。 |
| `measurement_08` | 服务和公用事业 | 载体特定属性 | kWh、MJ、L、kg、m3 | 保留载体、设备、运行或批次及原始单位；仅用有记录的因子换算，共享服务只分配一次。 |

## 5. 系统边界

默认前景边界从受管理可可树及声明的作物年度或多年生阶段开始，纳入可归属的建植和替换、土壤和养分管理、作物保护、灌溉、田间能源和直接排放、成熟荚采收以及新鲜荚或湿豆交接。`postharvest_extension` 为 true 时，继续纳入开荚、湿豆提取、发酵、干燥、清洁、分级、储存和声明的采后门点。跨越前景边界的种植材料、肥料、作物保护、能源、供水、处理服务和包装使用兼容的上游数据集。

参考门是平台的新鲜、未加工农场门状态。发酵、干燥和分级豆是扩展过程图中的下游路线状态，不是同一参考 UUID 的替代含义。数据包必须说明农场门参考是否在湿豆交接处结束，或是否报告采后扩展。烘焙、研磨、碱化、压榨、可可液块、可可脂、可可粉、巧克力、食品、零售和消费使用均为下游并排除。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 声明多年生阶段和作物年度开始时的受管理可可树园，种植材料和外购管理投入跨越前景边界 |
| starting_condition_role | 多年生受管理生物生产条件 |
| product_classification_scope | CPC 3.0 `01640`，Cocoa beans；精确平台参考身份为农场门新鲜、未加工可可豆 |
| recursive_input_rule | 进入采后、混配或储存的外购可可豆作为独立批次记录，不递归追踪本 PCR；可可浆、可可废物和下游可可产品不属于本类别 |
| upstream_dataset_requirement | 对跨越边界的种植材料、肥料、作物保护、水、能源、处理、包装和运输服务使用经审查的上游数据集 |
| disclosure | 区块或供应商范围、作物年度、品种组、生产系统、湿参考状态、扩展标记、批次含水率、发酵/干燥记录、质量等级、门点、储存、预期输出、残余物、拒收物、废水和分配决定 |

### 边界规则

| rule_id | 适用对象 | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | 受管理生产 | 纳入受管理可可树园、年度管理、实际投入、田间排放、采收和生产到采收的交接；只有在可归属所代表年度时纳入建植、替换和终止。 | `fao-cocoa-production-guide`; `icco-global-cocoa-farming-systems`; `iso-14044-2006` |
| `boundary_02` | 参考门 | 将 `Cocoa beans` 的 `Production mix, at farm gate` 和 `Fresh, unprocessed produce` 作为声明参考身份；未经独立身份审查，不得用该 UUID 表示发酵、干燥或分级豆。 | `iso-14044-2006`; `mass-balance-identity` |
| `boundary_03` | 开荚和发酵 | 纳入扩展路线时识别采收荚、果肉湿豆、荚壳、果肉/发酵液、批次、副产品、未反应或腐败物及至干燥的交接。 | `icco-cocoa-harvesting-post-harvest`; `fao-cocoa-ota-code` |
| `boundary_04` | 干燥、分级和储存 | 仅在跨越声明扩展边界时纳入干燥稳定化、清洁、等级分离和门前储存，并记录能源、含水率、储存时长、污染控制和损失。 | `icco-cocoa-processing`; `icco-cocoa-quality-requirements` |
| `boundary_05` | 上游投入 | 将外购投入、公用事业、包装、处理和运输服务作为独立上游投入；不得递归到另一个可可 PCR，也不得把可可废物或可可浆静默作为可可豆投入。 | `iso-14044-2006` |
| `boundary_06` | 损失和拒收 | 在有记录的回收、共产品、处理或处置交接前，将田间损失、损伤荚、未提取豆、腐败或未发酵豆、干燥损失、霉豆、粉尘、豆壳、储存损失和拒收批次保留在前景中。 | `fao-cocoa-ota-code`; `icco-cocoa-quality-requirements`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cocoa_managed_production` | 受管理可可生产 | required | 栽培可可路线 | 受管理生物生产 | per 1 kg wet cocoa beans at farm-gate reference |
| `cocoa_pod_harvest` | 成熟可可荚采收和收集 | required | 荚被移除并转入开荚 | 采收和收集输出交接 | per harvested pod lot and wet reference |
| `cocoa_pod_breaking_extraction` | 开荚和湿豆提取 | conditional | 开荚和分离在声明路线内 | 初级调理 | per pod lot and wet reference |
| `cocoa_fermentation` | 可可豆发酵 | conditional | 发酵先于干燥或干豆门点 | 生化反应和处理 | per fermentation batch |
| `cocoa_drying_stabilization` | 发酵豆干燥和稳定化 | conditional | 干燥先于采后门点 | 保藏和稳定化 | per drying batch |
| `cocoa_cleaning_grading` | 清洁、分级和拒收路由 | conditional | 清洁或分级先于采后门点 | 分级、分选和调理 | per grading lot |
| `cocoa_storage_gate` | 储存和声明门交接 | conditional | 纳入门前储存或仓库处理 | 稳定化和交接 | per kg and storage day |

生产模式为批次模式。每个作物年度、采收批次、开荚运行、发酵批次、干燥批次、分级批次和储存批次都建立身份。湿豆、发酵湿豆、干豆和分级豆是连续状态而非共产品，通过交接连接；共享设备、清洁和换线负荷只归属于运行一次。

### 过程：受管理可可生产（`cocoa_managed_production`）

#### 输入

##### 产品流

###### 可可种植材料和替换植株（`cocoa_planting_material`）

按区块和阶段记录苗木、嫁接苗、插条和替换植株，仅年度化可归属部分。

- 选定流：Cocoa planting material [unmapped]
- 流属性/单位：数量或质量 / plant、item 或 kg
- 数量规则：按区块和阶段记录采购、种植、替换和存活数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_perennial_phase_records`
- 来源：`fao-cocoa-production-guide`; `iso-14044-2006`
- 数量范围：暂定种植材料筛选估计；范围角色：默认估计（`default_estimate`）；下限：0；上限：0.05；单位：kg planting material/kg wet reference；基准：年度化建植和替换，应以区块记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

###### 农业养分与肥料投入（`cocoa_managed_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_nutrient_records`
- 来源：`fao-cocoa-production-guide`; `ipcc-2019-refinement-afolu`
- 数量范围：暂定养分投入筛选估计；范围角色：默认估计（`default_estimate`）；下限：0；上限：15；单位：kg product/kg wet reference；基准：多年生作物首轮宽范围，应以记录和养分平衡替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

###### 作物保护产品（`cocoa_crop_protection`）

按日期、区块、目标和施用方法记录具名产品或活性物质。

- 选定流：Named crop-protection product or active substance [unmapped]
- 流属性/单位：质量或体积 / kg product 或 L product
- 数量规则：按产品和活性物质记录实际施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_crop_protection_records`
- 来源：`fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`
- 数量范围：暂定作物保护筛选估计；范围角色：默认估计（`default_estimate`）；下限：0；上限：0.02；单位：kg product/kg wet reference；基准：首轮宽范围，应以具名产品记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

###### 供给可可园的灌溉水（`cocoa_irrigation_water`）

将供水与降雨和源头取水分开记录；雨养路线用区块证据支持零值。

- 选定流：Irrigation water supply [parameterized]
- 流属性/单位：体积 / m3
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按水源、区块和作物年度记录计量或有证据的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_water_records`
- 来源：`fao-cocoa-production-guide`
- 数量范围：暂定灌溉筛选估计；范围角色：默认估计（`default_estimate`）；下限：0；上限：5；单位：m3/t wet reference；基准：供水宽范围，应以水表和水量平衡替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

###### 田间燃料和电力（`cocoa_field_energy`）

按区块和作物年度记录抽水、机械、喷施、修剪和其他纳入操作。

- 选定流：Field fuel or electricity supply [parameterized]
- 流属性/单位：能源或载体质量 / MJ、kWh、L 或 kg
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按操作和年度记录实际载体使用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_energy_records`
- 来源：`fao-cocoa-production-guide`; `icco-global-cocoa-farming-systems`
- 数量范围：暂定田间能源筛选估计；范围角色：默认估计（`default_estimate`）；下限：0；上限：5；单位：MJ/kg wet reference；基准：首轮宽范围，应以操作记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

##### 初级流

###### 可可土地占用（`cocoa_land_occupation`）

记录区块面积、生产阶段、遮荫或间作条件和作物年度；土地转化另行记录。

- 选定流：Agricultural land occupation for cacao [unmapped]
- 流属性/单位：面积时间 / ha·year
- 数量规则：区块面积和年度化阶段除以湿参考输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_perennial_phase_records`
- 来源：`fao-cocoa-production-guide`; `iso-14044-2006`
- 数量范围：暂定土地占用筛选估计；范围角色：QA 校验（`qa_guardrail`）；下限：0.00005；上限：0.01；单位：ha·year/kg wet reference；基准：多年生作物宽范围，应以区块面积和产量替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

#### 输出

##### 基本流

###### 受管理土壤和作物残余排放（`cocoa_field_emissions`）

按物质、介质、养分/残余来源和年度记录计算或测量排放，每条途径只选一个方法。

- 选定流：Managed-soil and crop-residue elementary flows [unmapped]
- 流属性/单位：质量 / kg substance
- 数量规则：将选定方法应用于养分、残余、土壤和气候记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_emission_records`
- 来源：`ipcc-2019-refinement-afolu`
- 数量范围：暂定受管理排放筛选估计；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：1；单位：kg substance/kg wet reference；基准：排放总量宽范围，应以具体物质计算替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

### 过程：成熟可可荚采收和收集（`cocoa_pod_harvest`）

#### 输入

##### 产品流

###### 受管理可可生产背景（`cocoa_stand_output_context`）

将批次关联至生产区块、年度和品种；这是背景链接，不增加第二份产品质量。

- 选定流：Managed cacao production output context [unmapped]
- 流属性/单位：质量 / kg 或批次身份
- 数量规则：将采收荚批次链接至区块和年度，不增加第二份产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per harvested pod lot and per 1 kg wet reference
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_harvest_lot_records`
- 来源：`fao-cocoa-production-guide`
- 数量范围：暂定荚产量筛选估计；范围角色：QA 校验（`qa_guardrail`）；下限：0.5；上限：4；单位：kg fresh pods/kg wet reference；基准：荚到湿豆首轮范围，应以批次平衡替代；基准类型：过程输出（`process_output`）；证据类型：理由估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 采收的新鲜可可荚（`cocoa_harvested_pods`）

记录成熟荚及至开荚工序的交接；荚不是湿豆参考流。

- 选定流：Fresh cocoa pods [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按批次和含水率基准称量或有文件记录的采收荚质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_harvest_lot_records`
- 来源：`fao-cocoa-production-guide`; `icco-cocoa-harvesting-post-harvest`
- 数量范围：采收荚产量筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.5；上限：4；单位：kg fresh pods/kg wet reference；基准：荚到湿豆宽范围，应以批次平衡替代；基准类型：过程输出（`process_output`）；证据类型：理由估计（`reasoned_estimate`）

##### 废物流

###### 未采收、损坏或落地荚（`cocoa_field_pod_losses`）

记录留在田间、采收前损坏或采收边界丢弃的荚，并声明土壤归还、腐解、回收、处理或废弃去向。

- 选定流：Cocoa pod harvest loss [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按地块计数或质量估算，并与成熟荚观察记录平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_harvest_lot_records`
- 来源：`fao-cocoa-production-guide`; `mass-balance-identity`
- 数量范围：田间损失筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：1；单位：kg fresh pod loss/kg wet reference；基准：宽范围，应以观察记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

### 过程：开荚和湿豆提取（`cocoa_pod_breaking_extraction`）

#### 输入

##### 产品流

###### 采收的新鲜可可荚（`cocoa_pod_extraction_input`）

使用采收节点的同一荚批次，不得用湿豆、干豆或可可废物替代。

- 选定流：Fresh cocoa pods [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按批次接收荚质量，并记录测量或文件化的含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_pod_extraction_records`
- 来源：`icco-cocoa-harvesting-post-harvest`; `fao-cocoa-production-guide`
- 数量范围：荚投入筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.5；上限：4；单位：kg pods/kg wet reference；基准：同批次荚到湿豆平衡；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

###### 开荚能源或服务（`cocoa_pod_opening_energy`）

记录人工工具、机械或承包开荚服务，以及跨越边界的能源载体。

- 选定流：Pod-opening energy or service [parameterized]
- 流属性/单位：能源或服务 / MJ、kWh、L 或 kg
- 数量规则：按开荚运行记录实际能源或服务活动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_energy_records`
- 来源：`icco-cocoa-harvesting-post-harvest`
- 数量范围：开荚能源筛选；范围角色：默认估计（`default_estimate`）；下限：0；上限：1；单位：MJ/kg wet reference；基准：人工或机械开荚宽范围，应以运行记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 果肉中的湿可可豆（`cocoa_wet_beans_in_pulp`）

该状态交接至发酵或直接干燥；除非明确声明为平台的新鲜农场门状态，否则不是参考 UUID。

- 选定流：Wet cocoa beans in pulp [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按提取批次称量湿豆和果肉质量，并记录含水率及果肉是否包含
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_pod_extraction_records`
- 来源：`icco-cocoa-harvesting-post-harvest`; `mass-balance-identity`
- 数量范围：湿豆提取产率；范围角色：QA 校验（`qa_guardrail`）；下限：0.1；上限：0.4；单位：kg wet beans in pulp/kg fresh pods；基准：开荚产率宽范围，应以荚批次平衡替代；基准类型：过程输出（`process_output`）；证据类型：理由估计（`reasoned_estimate`）

##### 废物流

###### 可可荚壳和胎座残余（`cocoa_pod_husk_residue`）

记录荚壳、胎座和非豆附着物；只有具名去向、质量、规格和交接时才作为预期共产品。

- 选定流：Cocoa pod husk and placenta residue [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：称量残余质量，或由荚投入和湿豆输出平衡得到
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_residue_destination_records`
- 来源：`fao-cocoa-production-guide`; `mass-balance-identity`
- 数量范围：荚残余筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.6；上限：0.95；单位：kg residue/kg fresh pods；基准：残余物宽范围，应以开荚记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

###### 未提取或损坏的湿豆拒收物（`cocoa_extraction_rejects`）

识别破碎、霉变、发芽、污染或其他排除的豆，并声明回收、降级、返工、处置或土壤归还路径。

- 选定流：Wet-bean extraction reject [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按批次和缺陷原因称量或估算拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_residue_destination_records`
- 来源：`icco-cocoa-quality-requirements`; `fao-cocoa-ota-code`
- 数量范围：提取拒收筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：0.15；单位：kg reject/kg wet-bean input；基准：首轮拒收宽范围，应以检查记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

### 过程：可可豆发酵（`cocoa_fermentation`）

#### 输入

##### 产品流

###### 果肉中的湿可可豆（`cocoa_fermentation_input`）

记录进入堆、箱、篮或等效发酵系统的批次。每批必须有起始状态、翻动事件和下游交接。

- 选定流：Wet cocoa beans in pulp [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按批次称量并记录含水率、果肉包含情况和批次身份
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_fermentation_batch_records`
- 来源：`icco-cocoa-harvesting-post-harvest`; `fao-cocoa-ota-code`
- 数量范围：发酵投入筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.1；上限：1.1；单位：kg wet beans/kg wet reference；基准：批次归一化投入，应以批次记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

###### 发酵覆盖物、翻动和服务投入（`cocoa_fermentation_services`）

记录覆盖物、箱篮、翻动服务以及该批次的水、燃料和电力。可重复设备通过期间规则年度化，不按公斤重复。

- 选定流：Fermentation service or material input [parameterized]
- 流属性/单位：质量、能源或服务 / kg、MJ、kWh 或 service unit
- 数量规则：按发酵批次记录实际服务活动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_fermentation_batch_records`
- 来源：`fao-cocoa-ota-code`; `icco-cocoa-quality-requirements`
- 数量范围：发酵服务筛选；范围角色：默认估计（`default_estimate`）；下限：0；上限：0.5；单位：kg or MJ service input/kg wet reference；基准：首轮服务宽范围，应以批次和设备记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 发酵湿可可豆（`cocoa_fermented_wet_beans`）

记录发酵边界后的组成状态及至干燥的交接，不自行创造反应路径或产率。

- 选定流：Fermented wet cocoa beans [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：记录发酵和排液后的批次质量、终点含水率和质量观察
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_fermentation_batch_records`
- 来源：`fao-cocoa-ota-code`; `icco-cocoa-harvesting-post-harvest`
- 数量范围：发酵湿豆输出筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.7；上限：1；单位：kg fermented wet beans/kg wet input；基准：干燥前质量保留宽范围，应以批次平衡替代；基准类型：过程输出（`process_output`）；证据类型：理由估计（`reasoned_estimate`）

##### 废物流

###### 发酵果肉、发酵液和排液（`cocoa_fermentation_sweatings`）

有测量时分开记录排出的果肉和液体；有意回收时记录产品交接，否则进入处理、堆肥、土壤归还或处置。

- 选定流：Cocoa pulp, sweatings or fermentation drainage [unmapped]
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：按批次和去向测量排液或由质量平衡估算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_residue_destination_records`
- 来源：`icco-cocoa-harvesting-post-harvest`; `fao-cocoa-ota-code`
- 数量范围：果肉和发酵液筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.05；上限：0.6；单位：kg drainage/kg wet-bean input；基准：排液宽范围，应以批次和去向记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

###### 腐败、未发酵或不合格发酵拒收物（`cocoa_fermentation_rejects`）

识别霉变、发芽、黑豆、污染、不充分发酵或其他不合格物料，并声明回收、降级、返工、处置或土壤归还路径。

- 选定流：Fermentation reject or off-spec bean material [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按原因和去向记录批次检查和拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_quality_records`
- 来源：`icco-cocoa-quality-requirements`; `fao-cocoa-ota-code`
- 数量范围：发酵拒收筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：0.2；单位：kg reject/kg wet-bean input；基准：不合格宽范围，应以检查记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

##### 初级流

###### 发酵相关排放（`cocoa_fermentation_emissions`）

仅记录由批次输入、排液和操作记录通过选定方法或测量得到的发酵排放，不把通用可可流作为物质代理。

- 选定流：Fermentation-related elementary emissions [unmapped]
- 流属性/单位：质量 / kg substance
- 数量规则：将选定方法或测量应用于批次活动记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_emission_records`
- 来源：`fao-cocoa-ota-code`; `mass-balance-identity`
- 数量范围：发酵排放筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：0.2；单位：kg substance/kg wet reference；基准：排放总量宽范围，应以物质特定计算替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

### 过程：发酵豆干燥和稳定化（`cocoa_drying_stabilization`）

#### 输入

##### 产品流

###### 发酵湿可可豆（`cocoa_drying_input`）

使用发酵批次交接，不使用新鲜参考身份；记录起始含水率和晒干、人工干燥或组合路线。

- 选定流：Fermented wet cocoa beans [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按干燥批次称量投入并关联发酵批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_drying_batch_records`
- 来源：`icco-cocoa-processing`; `fao-cocoa-ota-code`
- 数量范围：干燥投入筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.7；上限：1；单位：kg fermented wet beans/kg wet reference；基准：同批次发酵到干燥交接，应以批次数据替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

###### 干燥燃料和电力（`cocoa_drying_energy`）

按批次记录燃料、电力或干燥服务；晒干即使直接燃料为零，也要记录平台、天气和物理服务。

- 选定流：Drying fuel, electricity or dryer service [parameterized]
- 流属性/单位：能源或载体质量 / MJ、kWh、L 或 kg
- 数量规则：按干燥批次记录实际载体或服务
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg dried fermented beans and per 1 kg wet reference
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_energy_records`
- 来源：`fao-cocoa-production-guide`; `icco-global-cocoa-farming-systems`
- 数量范围：干燥能源筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：8；单位：MJ/kg dried output；基准：晒干或人工干燥宽范围，应以干燥器和批次记录替代；基准类型：过程输出（`process_output`）；证据类型：理由估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 发酵干可可豆（`cocoa_dried_fermented_beans`）

这是独立路线输出，不是平台参考流；记录最终含水率、干燥技术、温度或天气和质量状态。

- 选定流：Fermented, dried cocoa beans [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按批次称量干燥输出并测量含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference and per 1 kg dried output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_drying_batch_records`
- 来源：`icco-cocoa-processing`; `icco-cocoa-quality-requirements`
- 数量范围：干燥产率筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.35；上限：0.55；单位：kg dried beans/kg fermented wet beans；基准：干物质和含水率换算，应以批次平衡替代；基准类型：过程输出（`process_output`）；证据类型：方法公式（`method_formula`）；来源：`mass-balance-identity`; `icco-cocoa-processing`
- 数量范围：最终含水率筛选；范围角色：典型范围（`typical_range`）；下限：6；上限：8；单位：percent wet basis；基准：储存筛选区间，应以批次测量替代；基准类型：过程输出（`process_output`）；证据类型：外部来源（`external_source`）；来源：`icco-cocoa-processing`; `icco-cocoa-quality-requirements`

##### 废物流

###### 干燥失水（`cocoa_drying_water_loss`）

由湿豆投入和干物质平衡计算去除的水，不计入干豆产品。

- 选定流：Water loss to air or drying loss [unmapped]
- 流属性/单位：质量 / kg water
- 数量规则：使用投入和输出含水率做湿基/干物质平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_drying_batch_records`
- 来源：`mass-balance-identity`; `icco-cocoa-processing`
- 数量范围：干燥失水筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.35；上限：0.65；单位：kg water/kg fermented wet beans；基准：约 55–60% 到 6–8% 含水率的宽换算，应以批次平衡替代；基准类型：过程输出（`process_output`）；证据类型：方法公式（`method_formula`）；来源：`mass-balance-identity`; `icco-cocoa-processing`

###### 霉变、污染或过度干燥拒收物（`cocoa_drying_rejects`）

记录拒收质量和回收、降级、处理、销毁或土壤归还去向，不计入合格干豆。

- 选定流：Drying reject or contaminated bean material [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按批次、缺陷和去向称量拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_quality_records`
- 来源：`fao-cocoa-ota-code`; `icco-cocoa-quality-requirements`
- 数量范围：干燥拒收筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：0.1；单位：kg reject/kg dried output；基准：质量损失宽范围，应以检查记录替代；基准类型：过程输出（`process_output`）；证据类型：理由估计（`reasoned_estimate`）

##### 初级流

###### 干燥器烟气或燃烧排放（`cocoa_drying_emissions`）

仅对人工干燥器或纳入的燃料使用记录燃烧排放；烟气接触是质量事件，不是排放流代理。

- 选定流：Dryer combustion elementary emissions [unmapped]
- 流属性/单位：质量 / kg substance
- 数量规则：将燃料排放方法应用于实际载体使用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_emission_records`
- 来源：`icco-cocoa-quality-requirements`; `ipcc-2019-refinement-afolu`
- 数量范围：干燥排放筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：0.5；单位：kg substance/kg wet reference；基准：燃料干燥器总量宽范围，应以载体特定计算替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

### 过程：清洁、分级和拒收路由（`cocoa_cleaning_grading`）

#### 输入

##### 产品流

###### 发酵干可可豆（`cocoa_cleaning_input`）

记录进入清洁和分级的干豆批次；其身份仍不同于新鲜农场门参考流。

- 选定流：Fermented, dried cocoa beans [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按接收批次称量并记录含水率和质量观察
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference and per 1 kg dried input
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_grade_lot_records`
- 来源：`fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`
- 数量范围：清洁投入筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.35；上限：0.55；单位：kg dried beans/kg fermented wet input；基准：同批次湿干平衡，应以实测投入替代；基准类型：参考流（`reference_flow`）；证据类型：方法公式（`method_formula`）；来源：`mass-balance-identity`

###### 清洁和分级能源或服务（`cocoa_cleaning_energy`）

按批次或运行记录筛网、风机、输送、检测和其他服务。

- 选定流：Cleaning and grading energy or service [parameterized]
- 流属性/单位：能源或服务 / kWh、MJ 或 service unit
- 数量规则：按分级批次记录实际载体或服务活动
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg dried cocoa bean output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_energy_records`
- 来源：`fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`
- 数量范围：清洁能源筛选；范围角色：默认估计（`default_estimate`）；下限：0；上限：1；单位：MJ/kg dried input；基准：首轮宽范围，应以设备记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 合格分级发酵可可豆（`cocoa_accepted_graded_beans`）

按等级和交接记录合格输出；只有声明等级和去向时才作为预期输出。

- 选定流：Accepted graded fermented cocoa beans [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按等级、含水率、缺陷基准和批次称量合格预期输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference and per 1 kg accepted grade
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_grade_lot_records`
- 来源：`fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`
- 数量范围：合格等级回收筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.8；上限：1；单位：kg accepted output/kg dried input；基准：清洁和分级回收宽范围，应以批次平衡替代；基准类型：过程输出（`process_output`）；证据类型：理由估计（`reasoned_estimate`）

###### 预期降级可可豆产品（`cocoa_downgraded_intended_output`）

只有具备独立预期产品状态和交接的可销售降级豆使用此行，否则使用拒收行。

- 选定流：Downgraded but saleable cocoa beans [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按等级和去向称量预期输出的降级产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg dried cocoa bean input
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_grade_lot_records`
- 来源：`icco-cocoa-quality-requirements`
- 数量范围：降级输出筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：0.2；单位：kg downgraded product/kg dried input；基准：可销售降级比例宽范围，应以批次记录替代；基准类型：过程输出（`process_output`）；证据类型：理由估计（`reasoned_estimate`）

##### 废物流

###### 可可豆壳、粉尘和异物残余（`cocoa_shell_dust_residue`）

分开记录豆壳、粉尘、石块、金属、植物物质及其他去除物；豆壳只有具名去向和交接时才是预期共产品。

- 选定流：Cocoa shell, dust and foreign-material residue [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按分级批次和去向称量分离残余
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg dried cocoa bean input
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_residue_destination_records`
- 来源：`fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`
- 数量范围：豆壳和清洁残余筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：0.2；单位：kg residue/kg dried input；基准：清洁和豆壳宽范围，应以批次平衡替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

###### 拒收可可豆批次（`cocoa_grading_rejects`）

识别霉变、虫害、破碎、发芽、黑豆、污染或其他拒收物；没有独立降级或回收交接时不得计入合格豆。

- 选定流：Rejected cocoa beans [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按缺陷、质量决定和去向称量拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg dried cocoa bean input
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_quality_records`
- 来源：`fao-cocoa-production-guide`; `icco-cocoa-quality-requirements`; `fao-cocoa-ota-code`
- 数量范围：分级拒收筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：0.2；单位：kg reject/kg dried input；基准：首轮拒收宽范围，应以分级检查替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

##### 初级流

###### 清洁粉尘排放（`cocoa_cleaning_dust`）

只有设备或方法证据支持时记录粉尘释放或捕集损失；豆壳或粉尘残余不自动等同于空气排放。

- 选定流：Cocoa cleaning dust elementary flow [unmapped]
- 流属性/单位：质量 / kg substance
- 数量规则：在扣除捕集残余后测量或计算释放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：per 1 kg dried cocoa bean input
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_emission_records`
- 来源：`mass-balance-identity`; `icco-cocoa-quality-requirements`
- 数量范围：清洁粉尘筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：0.02；单位：kg substance/kg dried input；基准：粉尘释放宽范围，应以捕集记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

### 过程：储存和声明门交接（`cocoa_storage_gate`）

#### 输入

##### 产品流

###### 合格分级发酵可可豆（`cocoa_storage_input`）

记录储存批次、含水率、等级、包装和开始日期；这不是第二次使用湿农场门参考流。

- 选定流：Accepted graded fermented cocoa beans [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：按批次和等级称量储存投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at farm-gate reference and per 1 kg dry output
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_storage_records`
- 来源：`icco-cocoa-processing`; `icco-cocoa-quality-requirements`
- 数量范围：储存投入筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.3；上限：0.55；单位：kg dried beans/kg wet reference；基准：声明湿干换算，应以批次平衡替代；基准类型：参考流（`reference_flow`）；证据类型：方法公式（`method_formula`）；来源：`mass-balance-identity`

###### 储存包装和处理服务（`cocoa_storage_services`）

记录袋、内衬、托盘、仓库电力、熏蒸及其他纳入服务；包装不计入豆质量。

- 选定流：Cocoa storage packaging or service [parameterized]
- 流属性/单位：质量、能源或服务 / kg、kWh、MJ 或 service unit
- 数量规则：按批次和储存期间记录包装和服务
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg dried cocoa bean output and storage day
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_storage_records`
- 来源：`icco-cocoa-quality-requirements`
- 数量范围：储存服务筛选；范围角色：默认估计（`default_estimate`）；下限：0；上限：0.1；单位：kg packaging or MJ service/kg dried output；基准：包装和处理宽范围，应以批次记录替代；基准类型：过程输出（`process_output`）；证据类型：理由估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 声明的采后干豆门输出（`cocoa_declared_dried_gate_output`）

仅在数据包声明采后扩展门时使用；它是独立路线输出，不能标为平台的新鲜农场门状态。

- 选定流：Fermented, dried and graded cocoa beans at declared post-harvest gate [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：储存后按批次称量最终质量并记录含水率、等级和损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg wet cocoa beans at platform farm-gate reference and per 1 kg dried gate output
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cocoa_storage_records`
- 来源：`icco-cocoa-processing`; `icco-cocoa-quality-requirements`
- 数量范围：采后门输出筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0.3；上限：0.55；单位：kg dried gate output/kg wet reference；基准：实测湿干平衡，应以批次记录替代；基准类型：参考流（`reference_flow`）；证据类型：方法公式（`method_formula`）；来源：`mass-balance-identity`; `icco-cocoa-processing`

##### 废物流

###### 储存损失和质量降级（`cocoa_storage_losses`）

记录霉变、虫害、含水率变化、异物去除和其他储存事件；可销售降级批次使用预期输出行而非废物行。

- 选定流：Cocoa storage loss or rejected storage material [unmapped]
- 流属性/单位：质量 / kg
- 数量规则：期初质量加接收和移出量减期末质量，并与检查和去向记录平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1 kg dried cocoa bean storage input
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_cocoa_storage_records`
- 来源：`icco-cocoa-quality-requirements`; `mass-balance-identity`
- 数量范围：储存损失筛选；范围角色：QA 校验（`qa_guardrail`）；下限：0；上限：0.1；单位：kg loss/kg dried storage input；基准：门前储存损失宽范围，应以仓库记录替代；基准类型：参考流（`reference_flow`）；证据类型：理由估计（`reasoned_estimate`）

## 7. 分配和共产品处理

湿豆、发酵湿豆、干豆和分级豆是连续状态，不在状态之间分配。首先按荚批次、发酵批次、干燥批次和分级批次拆分；在分配前记录每个预期输出的交接。

| rule_id | 适用对象 | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 连续可可状态 | 不在湿豆、发酵湿豆、干豆和分级豆之间分配负荷；用质量和含水率平衡连接它们。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_02` | 开荚和发酵 | 荚壳、胎座、果肉和发酵液默认是残余物；预期共产品必须有具名去向、质量、规格和交接。 | `icco-cocoa-harvesting-post-harvest`; `fao-cocoa-ota-code` |
| `allocation_03` | 预期共产品 | 优先过程细分；仍有预期输出时，同类物料用实测质量分配，功能明显不同时做经济分配敏感性并保留价格期间和分母。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_04` | 拒收和降级 | 不将拒收豆分配到合格可可豆；可销售降级批次需独立预期输出交接，回收物除非有文件化回收边界，否则保留生产节点负荷。 | `icco-cocoa-quality-requirements`; `fao-cocoa-ota-code` |
| `allocation_05` | 批次和多年生阶段 | 共享设备、清洁、换线、干燥平台和多年生阶段负荷只归属于产生它们的运行、年度或阶段一次。 | `iso-14044-2006`; `mass-balance-identity` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cocoa_perennial_phase_records` | `cocoa_managed_production` | 种植材料、土地占用和多年生阶段 | 区块登记及建植/移除记录 | block_id；area；cultivar；phase；tree_count；establishment_date；replacement_date；termination_date；crop_year | 将阶段事件和面积与每个代表性可可区块核对 | ha；tree；date；kg reference output | 年度及事件记录 | 所代表的多年生阶段和作物年度 | 所有纳入的可可区块 | 按区块和代表年度对建植、替换和终止年度化 | 区块登记；土地记录；阶段审查 |
| `cp_cocoa_nutrient_records` | `cocoa_managed_production` | 养分和土壤改良剂投入 | 发票、田间日志和养分声明 | product；nutrient_content；quantity；date；block_id；purpose；supplier；reporting_basis | 将产品数量和养分含量与每次田间施用核对 | kg product；kg nutrient；ha | 每次施用事件 | 完整的代表性作物年度 | 所有纳入的可可区块 | 按产品、养分、区块和年度汇总，不合并报告基准 | 发票；产品标签；养分声明；田间日志 |
| `cp_cocoa_crop_protection_records` | `cocoa_managed_production` | 作物保护产品 | 产品记录和施用日志 | product；active_substance；rate；quantity；date；block_id；target；method；operator | 将产品身份、活性物质和剂量与每次施用核对 | kg or L product；kg active substance；ha | 每次施用 | 完整的代表性作物年度 | 所有纳入的可可区块 | 按产品、活性物质、区块和年度汇总 | 产品标签；施用日志；操作员记录 |
| `cp_cocoa_water_records` | `cocoa_managed_production` | 灌溉、处理水、循环水和废水 | 计量记录、水费单或有证据的估算 | source；delivered_volume；withdrawal；meter_id；block_id；date；recirculation；discharge；quality | 分开灌溉水和采后用水，并将取水与排放核对 | m3 water；kg pollutant where measured | 每次事件或计量周期 | 完整的代表性作物年度和采后路线 | 纳入的农场和采后设备 | 按用途、来源、区块或过程及路线汇总；不将废水与供水合并 | 校准计量表；发票；水记录；排放记录 |
| `cp_cocoa_energy_records` | `cocoa_managed_production` and post-harvest route processes | 田间、开荚、干燥、分级和储存能源或服务 | 计量表、发票、燃料票或服务日志 | carrier；quantity；equipment；operation；run_id；batch_id；original_unit；service_scope | 将能源载体或服务数量与产生它的运行或批次核对 | kWh；MJ；L fuel；service unit | 每次运行、批次或计量周期 | 完整的代表性作物年度和纳入的采后扩展 | 所有纳入的田间和采后设备 | 按过程和批次汇总；依据文件化驱动因子将共用服务分配一次 | 计量表校准；发票；燃料票；服务日志 |
| `cp_cocoa_emission_records` | `cocoa_managed_production` and post-harvest route processes | 土壤、残余物、发酵和燃烧排放 | 排放模型记录或测量记录 | activity；substance；method；factor_set；factor_version；medium；quantity；uncertainty | 使用一个声明的适用方法计算或测量每条路径 | kg substance；kg CO2e；ha；kg activity | 每次事件及计算周期 | 完整的代表性作物年度和纳入的采后扩展 | 所有纳入的田间和采后排放源 | 分开保留各路径以及因子、活动基准和不确定性 | 方法引用；因子文件；测量报告；模型版本 |
| `cp_cocoa_harvest_lot_records` | `cocoa_pod_harvest` | 成熟荚采收、田间损失和交接 | 采收批次票据和田间记录 | block_id；crop_year；maturity；pod_mass；harvest_date；field_loss；receiver；lot_id | 对每个批次平衡采收荚、田间损失和接收方交接 | kg pods；kg loss；date；lot | 每个采收批次 | 完整采收季 | 所有纳入的可可区块和接收方 | 按区块、年度和批次汇总采收荚、田间损失和交接 | 批次票据；田间日志；秤记录；接收方证据 |
| `cp_cocoa_pod_extraction_records` | `cocoa_pod_breaking_extraction` | 荚投入、湿豆、荚壳、胎座和拒收物 | 开荚运行单和秤记录 | run_id；pod_input；wet_bean_output；husk；placenta；reject_mass；equipment；operator；date | 关闭每次开荚运行的荚投入质量平衡并记录所有去向 | kg as received；kg wet beans；date；run | 每次开荚运行 | 所有纳入的开荚作业 | 纳入的农场或采后设施 | 将荚投入与湿豆、荚壳、胎座、拒收物和无法解释的差额核对 | 校准秤；运行单；去向票据；质量平衡审查 |
| `cp_cocoa_fermentation_batch_records` | `cocoa_fermentation` | 湿豆投入、发酵作业、排液和发酵输出 | 发酵批次日志 | batch_id；input_mass；method；container；start_date；end_date；turns；temperature；drainage；output_mass；reject_mass | 连接湿豆投入、批次条件、排液、发酵输出和拒收物 | kg wet beans；kg drainage；°C；days；date | 每个发酵批次和翻动 | 完整的纳入发酵路线 | 所有纳入的发酵容器 | 按批次汇总并将每个输出连接到投入批次，避免重复计算 | 批次日志；温度记录；翻动记录；排液票；质量检查 |
| `cp_cocoa_drying_batch_records` | `cocoa_drying_stabilization` | 发酵湿豆投入、干燥能源、干豆输出和失水 | 干燥日志和含水率样品记录 | batch_id；wet_input；method；platform_or_dryer；weather_or_fuel；start_time；end_time；temperature；moisture；output_mass；reject_mass | 使用文件化的含水率样品平衡湿投入、干输出和损失 | kg wet input；kg dry beans；percent moisture；°C；days；MJ | 每个干燥批次和含水率样品 | 完整的纳入干燥路线 | 所有纳入的干燥平台和干燥器 | 按批次计算湿干平衡并保留实测含水率基准 | 干燥日志；水分检测；燃料或天气记录；烟气控制记录 |
| `cp_cocoa_grade_lot_records` | `cocoa_cleaning_grading` | 干豆投入、合格等级、降级产品、豆壳、粉尘和拒收物 | 检验、分级和秤记录 | lot_id；input_mass；grade；moisture；defects；accepted_mass；downgrade_mass；shell_mass；dust_mass；reject_mass；destination | 列出每个等级和物料去向，并核对批次质量平衡 | kg；percent moisture；grade code；date | 每个分级批次 | 完整的纳入清洁和分级路线 | 所有纳入的分级设备和批次 | 按批次分别汇总合格等级、预期降级产品、残余物和拒收物 | 检验表；校准秤；水分及缺陷记录；去向证据 |
| `cp_cocoa_quality_records` | `cocoa_fermentation` and `cocoa_cleaning_grading` | 含水率、发酵、霉变、虫害、异物和等级决定 | 实验室或批次检验记录 | sample_id；lot_id；moisture；fermentation_index；mould；insects；foreign_matter；defect_class；grade_decision；method；coverage | 为每批次保留采样方案、分析方法、结果和决定 | percent；score；kg sample；date | 每个批次和质量决定 | 完整的纳入发酵、干燥和分级路线 | 用于声明输出的所有批次 | 将质量决定连接到批次和路线状态；不得将拒收物转为合格输出 | 实验室报告；采样方案；方法版本；检验员签字 |
| `cp_cocoa_storage_records` | `cocoa_storage_gate` | 合格干豆、包装、储存服务、输出和损失 | 仓库记录和储存期平衡 | lot_id；opening_mass；packaging；warehouse；start_date；end_date；conditions；receipts；outputs；losses；closing_mass | 对每个储存期核对期初库存、接收量、声明输出和损失 | kg dried beans；kg loss；storage days；packaging unit | 每个储存期和批次 | 完整的门前储存期 | 所有纳入的仓库和批次 | 关闭储存平衡，并依据文件化批次驱动因子将共用处理一次性归属 | 仓库日志；秤记录；条件记录；包装记录 |
| `cp_cocoa_residue_destination_records` | route-wide cocoa processes | 荚壳、果肉、发酵液、粉尘、拒收物和其他残余物 | 去向票、回收记录或处理/处置记录 | residue_type；quantity；destination；receiver；intended_function；treatment；disposal；date；lot_id | 记录每种物料是具名共产品、回收物、保留残余还是废物，并记录交接 | kg material；destination code；date | 每个残余事件 | 完整纳入路线和储存期 | 所有纳入的田间、加工和储存地点 | 分开分类和汇总每个去向；未记录去向保留为未解决项 | 去向票；接收方证据；处理记录；废物联单 |

### 计算规则

| rule_id | 输入 | 计算 |
| --- | --- | --- |
| `calc_01` | 多年生阶段、面积、年度和参考输出 | 仅在所代表年度内年度化建植、替换和终止，并分配到同一区块湿参考输出。 |
| `calc_02` | 荚、湿豆、发酵、干燥和分级质量 | 各节点单独平衡，所有换算保留含水率基准；有批次数据时不得使用通用可可产率。 |
| `calc_03` | 过程总量和参考输出 | 归一化至 1 kg 湿农场门参考；扩展路线另报每 1 kg 干输出，并保留换算分母。 |
| `calc_04` | 养分、残余、燃料和水记录 | 每条途径使用一个适用方法，保留因子、单位、活动基准和不确定性。 |
| `calc_05` | 预期输出和分配分母 | 先细分，再按声明质量或经济方法一次性分配共享负荷；没有产品交接的残余和废物处理保持独立。 |
| `calc_06` | 储存期初、接收、输出和期末 | 用平衡差计算储存损失，调查负数或无法解释的差额。 |

### 数据质量规则

| rule_id | 要求 |
| --- | --- |
| `quality_01` | 每个物料状态都有稳定批次身份和明确状态标签：果肉湿豆、发酵湿豆、发酵干豆、分级豆、残余、拒收或废物。 |
| `quality_02` | 每个关键换算批次保留含水率方法、采样基准、湿/干基准和测量日期。 |
| `quality_03` | 覆盖边界内所有投入、公用事业、养分、作物保护、直接排放、残余、拒收和储存事件。 |
| `quality_04` | 每个预期输出、降级物、残余和废物都有去向和交接；重要质量的未知去向是阻塞项。 |
| `quality_05` | 作物年度、发酵、干燥和储存记录时间一致；共享资产和服务关联至产生它们的运行或期间。 |
| `quality_06` | 场址记录替代候选范围；候选范围只是筛选或 QA guardrail，不是实测默认值。 |
| `quality_07` | 分开检查平台 UUID 身份和产品状态语义；参考 UUID 不得用于可可废物、可可浆、湿中间体或干燥路线输出。 |

## 9. 验证规则

| rule_id | 适用对象 | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 参考流 | 确认 UUID `3c54da37-f1ab-4b4c-8363-5c32b638005c`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66` 和 Units of mass 组 `93a60a57-a4c8-11da-a746-0800200c9a66`，并保留农场门新鲜/未加工元数据。 | `mass-balance-identity` |
| `validation_02` | 状态身份 | 未经审查，不得使用参考 UUID 表示发酵、干燥、分级、可可废物或可可浆。 | `mass-balance-identity`; `iso-14044-2006` |
| `validation_03` | 过程图 | 纳入的路线必须具备生产到采收、荚到湿豆、湿豆到发酵、发酵到干燥、干燥到分级和分级到声明门的交接。 | `icco-cocoa-harvesting-post-harvest`; `fao-cocoa-ota-code` |
| `validation_04` | 质量平衡 | 每个批次在测量不确定性内平衡投入、合格输出、预期共产品、残余、拒收、储存损失和失水。 | `mass-balance-identity` |
| `validation_05` | 发酵质量 | 要求批次、日期、方法、排液、输出交接和检查证据；扩展路线存在未解决的不合格路径时阻塞。 | `fao-cocoa-ota-code`; `icco-cocoa-harvesting-post-harvest` |
| `validation_06` | 干燥质量 | 要求方法、投入/输出、最终含水率和烟气或污染控制；6–8% 只能作为筛选，实测含水率优先。 | `icco-cocoa-processing`; `icco-cocoa-quality-requirements` |
| `validation_07` | 等级和拒收 | 每个合格等级和预期降级输出都有交接；霉变、破碎、污染或不合格物不得计入合格豆。 | `fao-cocoa-production-guide`; `icco-cocoa-quality-requirements` |
| `validation_08` | 分配 | 每个预期输出、残余去向和分配分母明确；连续状态之间不分配，共享负荷不重复计入。 | `iso-14044-2006`; `mass-balance-identity` |
| `validation_09` | 数据质量 | 检查年度覆盖、批次完整性、含水率基准、采集协议、来源、方法版本和重要定量流单位。 | `iso-14044-2006`; `ipcc-2019-refinement-afolu` |
| `validation_10` | 边界披露 | 确认披露平台农场门参考、采后扩展标记、最终门点、储存时长和排除的下游可可产品。 | `iso-14044-2006` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 经审查的可可豆前景路线使用 `secondary_dataset`；`background_dataset` 用途需要单独审查 |
| downstream_use | 为栽培可可豆构建 process 和 lifecyclemodel 数据集，明确湿农场门或扩展干燥门状态 |
| allowed_use | 当地理位置、年度、生产系统、物料状态、含水率、路线、等级、门点和分配兼容时，用于比较或归因 LCA |
| excluded_use | 可可浆、液块、可可脂、可可粉、巧克力、食品、可可废物处理、消费品，或缺少声明状态转换的干豆数据 |
| required_metadata | 参考 UUID；属性和单位组 UUID；品种；地理位置；区块/供应商；年度；生产系统；湿参考条件；扩展标记；发酵/干燥；含水率；等级；残余；拒收；储存；门点；分配；不确定性 |
| required_quality_disclosure | 披露实测与计算值、覆盖、来源、路线未解析 UUID、范围使用、采样基准、缺失去向和质量平衡异常 |
| update_trigger | 平台身份、状态语义、种植路线、发酵/干燥技术、质量要求、分配规则、排放方法或重要范围/边界证据变化 |

## 11. 数据来源

| source_id | type | Source | Use in this PCR |
| --- | --- | --- | --- |
| `icco-cocoa-harvesting-post-harvest` | official_guidance | ICCO, Harvesting & Post-harvest, https://www.icco.org/harvesting-post-harvest-new/ | 开荚、湿豆提取、发酵、干燥和含水率 |
| `icco-cocoa-processing` | official_guidance | ICCO, Processing Cocoa, https://www.icco.org/processing-cocoa/ | 发酵后干燥和储存含水率 |
| `fao-cocoa-production-guide` | official_guidance | FAO, Cocoa production and post-harvest guidance, https://www.fao.org/4/AD220E/AD220E06.htm | 生产、采荚、干燥、分选和储存 |
| `fao-cocoa-ota-code` | official_guidance | FAO/WHO Codex, Code of Practice for Ochratoxin A in Cocoa, https://www.fao.org/input/download/standards/13601/CXP_072e.pdf | 发酵、翻动、开始干燥和污染控制 |
| `icco-cocoa-quality-requirements` | handbook | ECA–CAOBISCO–FCC, Cocoa Beans: Quality Requirements, https://www.icco.org/wp-content/uploads/2019/07/06-Michelle-End-v3.pdf | 缺陷、干燥、储存和拒收 |
| `icco-global-cocoa-farming-systems` | handbook | ICCO, Global Review of Cocoa Farming Systems, https://www.icco.org/wp-content/uploads/Global-Review-of-Cocoa-Farming-Systems_Final.pdf | 生产系统、发酵和干燥路线 |
| `ipcc-2019-refinement-afolu` | method_factor | IPCC, 2019 Refinement AFOLU, https://efdb.ipcc-nggip.iges.or.jp/public/2019rf/index.html | 土壤、残余物和农业排放方法 |
| `iso-14044-2006` | standard | ISO 14044:2006, https://committee.iso.org/standard/38498.html | 边界、分配、数据质量和披露原则 |
| `mass-balance-identity` | method_factor | PCR method identity: conservation and declared-state reconciliation | 质量、含水率、批次、拒收和储存平衡 |

候选范围是有意设置的宽筛选范围，不是普适默认值。符合要求的数据包应以场址、批次和供应商记录替换它们，并报告未解决的身份或边界问题，而不是静默选择可可废物、可可浆或不相关的可可产品流。
