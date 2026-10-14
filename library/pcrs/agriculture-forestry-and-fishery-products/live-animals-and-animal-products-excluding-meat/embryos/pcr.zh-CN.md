---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.embryos
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 育种用动物胚胎

## 1. 适用范围

本 PCR 覆盖在胚胎采集或生产实验室门点交付的可存活育种用动物胚胎。体内采集与体外生产分别建模。须声明物种、供体、发育阶段、等级、鲜品/冷藏/冷冻状态及实际交接。昆虫卵、幼虫及蛹、作为商品的未受精卵母细胞、作为最终产品的精液、受体准备及胚胎移植服务不在范围内。国际贸易卫生要求仅在实际目的地和物种适用时采用。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.embryos |
| classification_refs | CPC 3.0 `02420` |
| covered_products | 体内或体外生产、质量合格且可存活的动物胚胎。 |
| excluded_products | 昆虫未成熟阶段；未受精卵母细胞；精液；无活性废弃胚胎；移植及受体服务。 |
| representative_product | 在实验室门点保护性包装并放行的一枚分级合格胚胎。 |
| production_route | 供体管理期 → 独立的胚胎采集或卵母细胞获取 → 首次实验室制备（仅体外路线包括受精/培养）→ 分级 → 可选保存 → 保护性包装与放行。 |
| market_state | 鲜品、冷藏或冷冻；声明物种、路线、等级、容器和门点。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 实验室放行时一枚用于育种、质量合格且可存活的动物胚胎。 |
| How much | 1 枚放行胚胎；核对全部采集/获取、制备、分级、保存及废弃数量。 |
| How well | 声明物种、供体、体内/体外路线、发育阶段、活性等级、卫生处理和保存状态。 |
| How long or cycle | 一次采集至放行批次；供体与共用实验室/储存负荷按实际服务期间归属。 |
| reference_flow_link | `viable_embryo` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实验室放行的可存活动物胚胎 |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | 物种；供体；路线；批次；发育阶段；等级；鲜品/冷藏/冷冻状态；容器；门点；报告期间。 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 每枚合格胚胎仅计一次；一件为一枚可存活且已分级的胚胎，不是容器、卵母细胞或移植尝试。 |
| `yield` | 路线状态转换 | 计数 | embryo, oocyte | 按供体和路线核对原始采集/获取、制备、分级、保存、废弃和放行数量。 |
| `media` | 液体和耗材 | 质量或校准体积 | kg, L | 仅依据有记录的组成和密度进行体积—质量换算。 |
| `period` | 供体和共用服务 | 时间和计数 | donor-day, h, embryo | 对齐投入、产出和资产服务期间，保留失败尝试。 |
| `accepted_item_count` | 参考产品及其产出卡 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 机器单位 item 是已确认单位组参考单位 Item(s) 的本地写法，倍率为 1。一件表示一个符合声明物种、状态、等级及放行规格的合格可存活胚胎。原始采集记录保留胚胎计数。此计数写法不将容器、体积、精子数、卵母细胞或操作次数视为合格产品，也不建立不同物种、状态或剂量规格之间的等价关系。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 进入记录明确的繁殖服务期间的管理供体，及实际使用的外购精液、饲料、培养基、能源、冷冻剂和包装。 |
| starting_condition_role | 管理供体生产与胚胎商品制备，不含受体妊娠或移植服务。 |
| product_classification_scope | CPC 3.0 `02420`，仅可存活的动物胚胎。 |
| recursive_input_rule | 外购同类胚胎作为可追溯上游商品，不再作为场内新产胚胎计数。 |
| upstream_dataset_requirement | 实际使用时须采用与物种、路线相符的饲料、精液、培养基、公用工程、处理及资本服务数据集。 |
| disclosure | 供体、期间、路线、等级、保存状态、门点、废弃、共用资产和归属方法。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | 所有路线 | 在采集/生产实验室的质量放行和保护性装载处结束；排除受体管理、移植、妊娠及后续分销。 | `un-cpc-3`; `woah-invivo-2024`; `woah-invitro-2024` |
| `route_delta` | 供体与实验室 | 体内采集得到已受精胚胎；体外获取卵母细胞后还须精液、受精和培养。拓扑、培养基、能源、产率及检测不同；每批选一条路线或对混合设施分区。 | `woah-invivo-2024`; `woah-invitro-2024` |
| `interfaces` | 生物生产至分级 | 供体管理与采集/获取分开；原始材料与首次清洗/培养分开；合格、独立降级、暂存和拒收状态均记录交接。 | `woah-invivo-2024`; `woah-invitro-2024` |
| `state` | 可选保存 | 鲜品绕过保存；冷藏/冷冻记录实际公用工程、冷冻剂、损耗和时间。可用产品独立包装，不计门点后物流。 | `woah-invivo-2024`; `woah-invitro-2024` |
| `shared` | 设施和期间 | 对供体阶段、采集室、实验室、培养箱、冷藏设备/罐及可重复使用容器的使用节点和期间只归属一次。 | `woah-invivo-2024`; `woah-invitro-2024` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `donor` | 管理供体服务 | required | 实际繁殖期 | 采集前饲养投入、残余物及供体交接 | 每关联放行胚胎的供体天数 |
| `recovery` | 胚胎采集或卵母细胞获取 | required | 每批一条路线 | 从供体环境独立取出目标原始材料 | 胚胎或卵母细胞采集数 |
| `preparation` | 首次制备或体外生产 | required | 路线适用步骤 | 原料至可分级胚胎，体外路线才受精/培养 | 制备胚胎数 |
| `grading` | 分级与去向分拣 | required | 所有制备批 | 合格、降级、暂存和拒收状态 | 按等级及去向计数 |
| `preservation` | 可选稳定保存 | conditional | 实际冷藏/冷冻 | 干预前后可用状态、公用工程与损耗 | 保存后合格数 |
| `release` | 保护性包装与实验室放行 | required | 每个可销售批 | 最终合格产品及容器交接 | 1 枚放行胚胎 |

### Process: 管理供体服务 (`donor`)

#### Inputs

##### Product flows

###### 供体饲料（`donor_feed`）

计量可归属供体服务期间的物种特定饲料。

分母与范围要求：每枚放行胚胎

原始数量及计算要求：按 calc_feed_supply_and_intake 分别建立饲料投入、采食及损失台账。承担饲料生产负担的数量包含边界内拒食、变质及未食用饲料，不得缩减为动物采食量。保留来源、物种/群体、阶段及原始质量/水分基准。最终贡献依 inventory_reference_normalization 和 stage_throughput_linkage 恰归一化一次。 原始采集分母类型：reference_flow.

- 选定流：供体饲料（UUID 未解析）
- 流属性/单位：质量 / kg 干物质
- 数量规则：采用保留边界内损失及其生产负担的已核对饲料投入记录，依 inventory_reference_normalization 和 stage_throughput_linkage 计算可归属最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_donor`
本卡 QA 对象：下方摄入量范围仅校验按 calc_feed_supply_and_intake 单独记录并重建的生物摄入量，沿用该范围声明的单位及分母；不用于限定或替代饲料供应交换量，后者保留边界内未食用损失及其生产负担。不得用摄入量上下限校验供应量，也不得为满足范围而扣除损失。供应量专用范围须有独立证据；摄入及损失记录缺失时，此项摄入量 QA 未评估，不视为通过。

- 数量范围：暂定供体饲料筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg 干物质/放行胚胎
  - 基准：供体期间采食量除以关联放行胚胎数；QA 变量仅为实录生物摄入量，不是饲料供应清单数量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供体用水（`donor_water`）

计量饮水和照护用水，依据记录确定实际来源与用途。

分母与范围要求：每枚放行胚胎

原始数量及计算要求：合计实际供体期间供水。 原始采集分母类型：reference_flow。

- 选定流：供体供水（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_donor`
- 数量范围：暂定供体用水筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/放行胚胎
  - 基准：供体期间供水除以关联放行胚胎数
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### 送处理的供体粪便（`donor_manure`）

仅在无独立有用材料交接时归类为废物。

分母与范围要求：每供体服务期间

原始数量及计算要求：按期间记录收集质量和实际去向。 原始采集分母类型：process_output。

- 选定流：送处理的供体粪便（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_donor`
- 数量范围：暂定粪便筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/供体期间
  - 基准：送处理的实际收集粪便
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

###### 肠道生物源甲烷排放至空气（`review_donor_enteric_ch4`）

仅适用于实际受管理物种及类别存在的消化路径；用有记录的动物活动/采食量及有依据的方法计算。不得将牛类因子套用于尚未表征的物种。 仅适用于实际运行的 `donor` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：生物源甲烷排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg CH4
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污生物源甲烷排放至空气（`review_donor_manure_ch4`）

按粪污系统、气候、停留时间及挥发性固体活动量计算实际大气排放。核对回收、销毁或氧化甲烷；产生量不自动等于排放量。 仅适用于实际运行的 `donor` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：生物源甲烷排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg CH4
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污直接氧化亚氮排放至空气（`review_donor_direct_n2o`）

使用实际粪污管理氮路径。贮存/处理须与田间施用和放牧沉积分开；后两者须使用管理土壤方法并明确清单核算责任。 仅适用于实际运行的 `donor` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污氮引致的间接氧化亚氮排放至空气（`review_donor_indirect_n2o`）

适用时，由有记录的粪污氮挥发/沉降及淋溶/径流路径计算可归属间接 N2O。与直接 N2O 分开，并核对下游或所用背景/影响模型中已包含的氮去向计算。 仅适用于实际运行的 `donor` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氧化亚氮排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg N2O
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-ipcc-livestock-2019`

###### 粪污氨排放至空气（`review_donor_nh3`）

采用真实物种、圈舍/贮存条件及有依据的氮流方法。逐阶段跟踪总氮和铵态氮；通用挥发氮估计可能包含其他氮物种，不能自动视为 NH3。 仅适用于实际运行的 `donor` 节点；保留其既有路线及期间条件。数据集须落实该路径的真实活动、方法适用性及有证据的范围或物理界限，才能认为清单完整。证据缺失不等于零或 not_applicable。最终绑定交换仍须核实物质/来源/介质专属 UUID。

- 选定流：氨排放至空气（UUID 未解析）
- 流属性/单位：Mass / kg NH3
- 数量规则：计算本节点及期间的路径总量，执行既有分配与 stage_throughput_linkage，再依 inventory_reference_normalization 对实测最终合格参考产出恰归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pathway_emissions`
- 来源：`review-eea-manure-2023`

### Process: 胚胎采集或卵母细胞获取 (`recovery`)

#### Inputs

##### Product flows

###### 采集介质（`recovery_medium`）

记录实际采集或抽吸介质及该批组成。

分母与范围要求：每次采集事件

原始数量及计算要求：逐次测量领用及退回介质。 原始采集分母类型：process_output。

- 选定流：胚胎或卵母细胞采集介质（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 数量范围：暂定采集介质筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/事件
  - 基准：记录事件中领用的介质
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 体内采集的原始胚胎（`raw_invivo_embryos`）

仅体内路线在实验室清洗与分级前进行此内部交接。

分母与范围要求：每次体内采集事件

原始数量及计算要求：逐供体事件计数采集胚胎，包括后续拒收者。 原始采集分母类型：process_output。

- 选定流：体内采集的原始胚胎（UUID 未解析）
- 流属性/单位：计数 / embryo
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 数量范围：暂定胚胎采集数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：embryo/事件
  - 基准：一次供体事件采集数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 获取的卵母细胞（`retrieved_oocytes`）

仅体外路线的内部交接；卵母细胞不是参考产品。

分母与范围要求：每次体外获取事件

原始数量及计算要求：逐供体事件计数，包括未成熟材料。 原始采集分母类型：process_output。

- 选定流：获取的动物卵母细胞（UUID 未解析）
- 流属性/单位：计数 / oocyte
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery`
- 数量范围：暂定卵母细胞获取数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：oocyte/事件
  - 基准：一次供体事件获取数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

### Process: 首次制备或体外生产 (`preparation`)

#### Inputs

##### Product flows

###### 接收的体内采集原始胚胎（`raw_invivo_input`）

仅体内批接收采集节点的胚胎，并保留供体和事件身份。

分母与范围要求：每制备批

原始数量及计算要求：与采集事件产出核对接收数。 原始采集分母类型：process_output。

- 选定流：体内采集的原始胚胎（UUID 未解析）
- 流属性/单位：计数 / embryo
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lab`
- 数量范围：暂定体内原料投入数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：embryo/批
  - 基准：实际接收用于制备的体内胚胎
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收的卵母细胞（`retrieved_oocytes_input`）

仅体外批在受精和培养前接收获取的卵母细胞。

分母与范围要求：每制备批

原始数量及计算要求：与获取事件产出核对接收数。 原始采集分母类型：process_output。

- 选定流：获取的动物卵母细胞（UUID 未解析）
- 流属性/单位：计数 / oocyte
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lab`
- 数量范围：暂定卵母细胞投入数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：oocyte/批
  - 基准：实际接收用于体外制备的卵母细胞
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实验室介质（`lab_media`）

仅记录所选路线实际使用的清洗、受精与培养介质。

分母与范围要求：每枚制备胚胎

原始数量及计算要求：批次领用量减去未用退回量。 原始采集分母类型：process_output。

- 选定流：胚胎实验室介质（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lab`
- 数量范围：暂定实验室介质筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/制备胚胎
  - 基准：领用介质除以制备胚胎数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 受精用精液（`ivf_semen`）

仅使用精液的体外批次将其记作上游投入，不作为最终胚胎产出。

分母与范围要求：每体外制备批

原始数量及计算要求：记录来源批和使用量，扣除退回量。 原始采集分母类型：process_output。

- 选定流：物种匹配的受精用精液（UUID 未解析）
- 流属性/单位：剂量数或校准体积 / dose 或 mL
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lab`
- 数量范围：暂定精液用量筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：dose/体外批
  - 基准：该批实际受精用精液
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 制备完成的胚胎（`prepared_embryos`）

将保留路线身份、可供评估的胚胎交至分级；失败受精或清洗是损耗。

分母与范围要求：每制备批

原始数量及计算要求：按供体、路线和批次计数可评估胚胎。 原始采集分母类型：process_output。

- 选定流：分级前制备完成的动物胚胎（UUID 未解析）
- 流属性/单位：计数 / embryo
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lab`
- 数量范围：暂定制备胚胎数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：embryo/批
  - 基准：路线特定批次中的制备数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 废实验室介质（`spent_media`）

按实际处理去向记录废介质与生物材料损耗。

分母与范围要求：每制备批

原始数量及计算要求：逐批称重或测量送处理的介质。 原始采集分母类型：process_output。

- 选定流：送处理的废胚胎实验室介质（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_lab`
- 数量范围：暂定废介质筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/批
  - 基准：一次观察批次的废介质
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

### Process: 分级与去向分拣 (`grading`)

#### Inputs

##### Product flows

###### 接收的制备胚胎（`prepared_embryos_input`）

从首次制备接收可评估胚胎，并保留供体、路线和批次。

分母与范围要求：每分级批

原始数量及计算要求：将接收数与制备产出及全部分级去向核对。 原始采集分母类型：process_output。

- 选定流：分级前制备完成的动物胚胎（UUID 未解析）
- 流属性/单位：计数 / embryo
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定制备胚胎投入数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：embryo/批
  - 基准：实际接收用于分级的制备胚胎
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 合格可存活胚胎（`accepted_embryos`）

仅将分级合格的可存活胚胎交至鲜品包装或保存。

分母与范围要求：每分级批

原始数量及计算要求：按发育阶段、等级、供体和下一去向计数。 原始采集分母类型：process_output。

- 选定流：分级合格的可存活动物胚胎（UUID 未解析）
- 流属性/单位：计数 / embryo
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定合格数筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：embryo/批
  - 基准：一次分级批的合格数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级但可存活的胚胎（`downgraded_embryos`）

仅在低等级胚胎实际独立交接时作为产品，否则记为暂存或拒收。

分母与范围要求：每分级批

原始数量及计算要求：按去向计数独立交接的低等级胚胎。 原始采集分母类型：process_output。

- 选定流：降级但可存活的动物胚胎（UUID 未解析）
- 流属性/单位：计数 / embryo
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定降级数筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：embryo/批
  - 基准：实际独立交接的降级胚胎数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 拒收的生殖材料（`rejected_material`）

无活性胚胎和失败卵母细胞是拒收材料，不是参考产出。

分母与范围要求：每分级批

原始数量及计算要求：按原因、留样与处理去向计数。 原始采集分母类型：process_output。

- 选定流：送处理的拒收胚胎或卵母细胞（UUID 未解析）
- 流属性/单位：计数 / item
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grade`
- 数量范围：暂定拒收数筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：item/批
  - 基准：一次分级批的拒收数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

### Process: 可选稳定保存 (`preservation`)

#### Inputs

##### Product flows

###### 进入保存的合格胚胎（`accepted_embryos_input`）

仅冷藏或冷冻批在此接收分级合格胚胎；鲜品绕过。

分母与范围要求：每保存批

原始数量及计算要求：与分级合格交接数核对接收数。 原始采集分母类型：process_output。

- 选定流：分级合格的可存活动物胚胎（UUID 未解析）
- 流属性/单位：计数 / embryo
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preserve`
- 数量范围：暂定保存投入数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：embryo/批
  - 基准：实际进入干预的合格胚胎
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保存能源（`preservation_energy`）

仅实际冷藏或冷冻批次使用此节点；鲜品绕过。

分母与范围要求：每枚保存后合格胚胎

原始数量及计算要求：计量实际干预及储存期间能源。 原始采集分母类型：process_output。

- 选定流：保存能源供应（UUID 未解析）
- 流属性/单位：能量 / kWh
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preserve`
- 数量范围：暂定保存能源筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kWh/保存后合格胚胎
  - 基准：计量能源除以干预后合格数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 低温液氮（`nitrogen`）

仅实际使用液氮的路线和储罐记录。

分母与范围要求：每枚合格冷冻胚胎

原始数量及计算要求：按储罐服务期间核对交付、库存和挥发损耗。 原始采集分母类型：process_output。

- 选定流：液氮供应（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preserve`
- 数量范围：暂定冷冻剂筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/合格冷冻胚胎
  - 基准：储罐期间消耗量除以关联合格胚胎数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 稳定保存后的可存活胚胎（`stabilized_embryos`）

计数干预后可存活的胚胎，而非仅进入储存者。

分母与范围要求：每保存批

原始数量及计算要求：按状态、等级及批次计数干预后合格胚胎。 原始采集分母类型：process_output。

- 选定流：包装前冷藏或冷冻的可存活胚胎（UUID 未解析）
- 流属性/单位：计数 / embryo
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preserve`
- 数量范围：暂定保存后胚胎数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：embryo/批
  - 基准：实际干预后合格数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 保存后拒收胚胎（`preservation_rejects`）

识别活性失败、污染或包装损伤及实际去向。

分母与范围要求：每保存批

原始数量及计算要求：按原因与去向计数干预后拒收者。 原始采集分母类型：process_output。

- 选定流：送处理的保存后无活性胚胎（UUID 未解析）
- 流属性/单位：计数 / embryo
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_preserve`
- 数量范围：暂定保存拒收数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：embryo/批
  - 基准：实际干预后的拒收数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

### Process: 保护性包装与实验室放行 (`release`)

#### Inputs

##### Product flows

###### 进入包装的可存活胚胎（`pack_input_embryos`）

鲜品从分级直接接收，冷藏/冷冻从保存接收；同一胚胎不可重复计入两路。

分母与范围要求：每放行批

原始数量及计算要求：将匹配阶段、路线和状态的接收数与上游节点交接数核对。 原始采集分母类型：process_output。

- 选定流：最终包装前的可存活动物胚胎（UUID 未解析）
- 流属性/单位：计数 / embryo
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 数量范围：暂定包装投入数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：embryo/批
  - 基准：实际接收用于包装的可存活胚胎
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保护性容器（`container`）

记录实际细管、小瓶或安瓿及新用/复用状态，区分产品封装与门点后运输。

分母与范围要求：每枚放行胚胎

原始数量及计算要求：计量新材料和唯一归属的复用容器服务。 原始采集分母类型：reference_flow。

- 选定流：胚胎保护性包装（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 数量范围：暂定包装筛查值
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/放行胚胎
  - 基准：新包装及归属的复用包装除以放行数
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 放行的可存活胚胎（`viable_embryo`）

这是唯一参考产品，不隐含移植或妊娠结果。

参考产出的原始记录：按路线、状态和等级计数签字质量放行胚胎。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

机器单位 item 是已确认单位组参考单位 Item(s) 的本地写法，倍率为 1。一件表示一个符合声明物种、状态、等级及放行规格的合格可存活胚胎。原始采集记录保留胚胎计数。此计数写法不将容器、体积、精子数、卵母细胞或操作次数视为合格产品，也不建立不同物种、状态或剂量规格之间的等价关系。

分母与范围要求：每参考流

- 选定流： 实验室放行的可存活动物胚胎
- 流属性 / 单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_release`
- 数量范围：参考计数恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：embryo/参考流
  - 基准：恰好一枚经签字质量放行的胚胎
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`un-cpc-3`

##### Waste flows

##### Elementary flows

## 7. 分配与联产品处理

### 分配规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide` | 全部批次 | 残余分配前按物种、供体、体内/体外路线、最终状态与等级分区，并计入失败尝试。 | `review-fao-pig-lca-2018` |
| `destinations` | 分级产出 | 合格参考等级、独立出售的降级胚胎、暂存和处理废物须有不同的实际交接。 | `woah-invivo-2024`; `woah-invitro-2024` |
| `periods` | 供体及实验室 | 饲料、供体事件、采集、培养、储存及更替/淘汰按实际服务期间和批次产出归属一次，不跨年度重复。 | `review-fao-pig-lca-2018` |
| `assets` | 共用设施 | 按服务小时/占用量将房间、培养箱、储罐和复用容器分配给所有消费节点和期间一次；披露残余物理/经济分配及敏感性。 | `review-fao-pig-lca-2018` |
| `allocation_method_basis` | 剩余共同负担与共用服务 | 采用一般 LCA 层级：剩余分配前先考虑细分或有适当依据的系统扩展；随后优先使用有证据的物理因果关系，无法确立物理归属时才论证经济基准。供体日、占用时间或处理量驱动是本 PCR 的建模选择，须有个案证据及敏感性分析，并非卫生指南的要求。服务期间须包含失败尝试及损失；不得只选成功产出，也不得引入假设替代抵扣。 | `review-fao-pig-lca-2018` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_donor` | `donor` | 饲料、用水、粪便、供体服务 | 饲养台账 | donor_id, species, period, donor_days, feed_DM, water_kg, manure_kg, replacement, room_hours | 称重、计量、事件日志；原始汇总要求： 按 calc_feed_supply_and_intake 区分承担生产负担的饲料投入、实际采食量及损失；保留原生库存及期间记录，可归属量对合格最终产出归一化一次。 | day, kg, h | 每日/事件 | 全部关联供体期间 | 所有供体 | 每参考流 | 有日期签字台账；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_recovery` | `recovery` | 介质及原始胚胎/卵母细胞 | 事件登记 | event_id, donor_id, route, medium_kg, raw_embryo_count, oocyte_count, losses, room_hours | 领用单、计数、称重；原始汇总要求：逐事件核对。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, item, h | 每次事件 | 包括失败的全部尝试 | 采集单元 | 每参考流 | 保管链记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_lab` | `preparation` | 介质、精液、制备胚胎、废介质 | 实验室批记录 | lot_id, route, media_kg, semen_lot, dose_count, retrieved_count, fertilised_count, prepared_count, waste_kg, incubator_hours | 领用与检测日志；原始汇总要求：路线特定平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, dose, item, h | 每批 | 全部批次 | 实验室 | 每参考流 | 检测与批记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grade` | `grading` | 合格、降级、暂存、拒收 | 分级登记 | lot_id, stage, grade, accepted, downgraded, held, rejected, destination | 合格人员评估；原始汇总要求：核对所有去向。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | item | 每批 | 全部评估材料 | 实验室 | 每参考流 | 签字分级单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_preserve` | `preservation` | 能源、液氮、保存数、拒收 | 冷链日志 | lot_id, state, kWh, nitrogen_kg, storage_days, tank_hours, pre_count, accepted, rejected | 计量、库存平衡、记录仪；原始汇总要求：路线特定计数与占用平衡。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kWh, kg, day, item | 每批/每日 | 全部干预与储存 | 冷藏室/储罐 | 每参考流 | 记录仪与质控；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_release` | `release` | 容器与放行胚胎 | 放行台账 | lot_id, route, stage, grade, state, new_package_kg, reuse_cycles, released, gate_time | 领用计数及质控签字；原始汇总要求：只计签字放行。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, embryo | 每批 | 所有交接 | 实验室门点 | 每参考流 | 标签与签字收据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_pathway_emissions` | `donor` | 路径专属气体及粪污氮/碳 | 动物、饲料、粪污、田间及方法台账 | 物种/类别；动物日；采食/干物质/消化率；挥发性固体；粪污氮/铵态氮；系统份额；气候；贮存时间；肥料氮；放牧；挥发/淋溶；甲烷回收；因子来源/单位；最终合格产出 ；收集粪污湿质量；干物质；去向| 按节点及期间采集一手活动数据，证明参数适用性，保留各路径计算表及链接的处理/牧地数据集  保留原始总量，可归属数量仅对实测最终合格参考产出归一化一次。| animal-day；kg DM；kg VS；kg N；kg CH4；kg N2O；kg NH3 | 各运行期间及管理变化时 | 完整所代表群体与服务期间 | 仅实际运行节点 | 每参考流 | 计量/分析记录、氮级联、方法与因子证据、防重复台账 |
| `cp_feed_supply_and_intake` | `donor` | 饲料投入、采食及损失 | 库存、收货、发料及损失台账 | 饲料身份/来源；群体/阶段；期间；期初/期末库存；收货；自产供给；未用退回/转出；未食用/变质质量及去向；原物/干物质；实际采食量；负担归属；合格最终产出 | 按 calc_feed_supply_and_intake 核对匹配的库存、称重、日粮/采草估算及处置记录。保留原始总量及阶段分母，生产与处理负担各归属一次，再对合格最终产出归一化。 | kg as-fed; kg DM | 每次发料及期间结算 | 完整所代表群体/期间 | 实际运行饲喂节点 | 每参考流 | 库存及供应商记录；水分证据；损失及无重复核算核对 |
| `cp_manure_n2o_coverage` | `donor` | 粪污/土壤直接及间接 N2O 覆盖 | 分路径氮台账及方法计算表 | 物种/类别；期间；排泄氮；阶段库存/转移；系统份额；挥发 NH3-N/NOx-N；淋溶/径流氮；施用/放牧氮；因子来源、单位及适用性；直接/间接分项；接受介质；已链接过程及归属卡；合格最终产出 | 按 calc_manure_n2o_coverage 保留原始阶段氮及分项计算，并匹配实际作业与现有粪污协议。记录缺证据或不适用路径及覆盖边界，可归属 N2O 归一化一次。 | kg N; kg N2O | 每个报告期间及管理变化 | 完整所代表管理期间 | 实际运行及明确链接节点 | 每参考流 | 氮平衡、因子单位/适用性、分项到卡片及无重复核算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `count_balance` | 采集至放行 | 按路线核对原始胚胎或卵母细胞、制备、分级、降级、暂存、拒收、保存及放行数量；保留失败事件。 | `cp_recovery`, `cp_lab`, `cp_grade`, `cp_preserve`, `cp_release` | 批次计数平衡 | `woah-invivo-2024`; `woah-invitro-2024` |
| `donor_intensity` | 供体服务 | 在真实独立产出处理后，以关联放行胚胎数归一化同期供体负荷。 | `cp_donor`, `cp_recovery`, `cp_release` | 每胚胎供体负荷 | `woah-invivo-2024`; `woah-invitro-2024` |
| `route_intensity` | 实验室与保存 | 实际路线/状态的介质、精液、能源、冷冻剂与储存负荷按同路线/状态合格数归一化，保留零产出批。 | `cp_lab`, `cp_preserve`, `cp_release` | 每胚胎路线清单 | `woah-invivo-2024`; `woah-invitro-2024` |
| `shared_service` | 共用基础设施 | 每个资产全部消费节点与期间的服务总量只分配一次，分配份额与总量相等。 | `cp_donor`, `cp_recovery`, `cp_lab`, `cp_preserve`, `cp_release` | 唯一归属的服务负荷 | `woah-invivo-2024`; `woah-invitro-2024` |
| `calc_pathway_emissions` | `donor` | 采用物种和管理方式相容的方法，保留分路径总量。N2O-N 乘 44/28 转为 N2O，NH3-N 乘 17/14 转为 NH3，且恰换算一次；已为分子质量者不得重算。依据有记录的可用碳/甲烷潜力平衡检查甲烷，并按各阶段可用氮核对氮损失。已挥发氮引致的间接形成是下游转化，不是源阶段第二次氮损失。归属及归一化只做一次，不重复计入链接处理或去向模型中的排放。  物理筛查采用分配前、同一原始期间的数量：CH4 质量 × 12/16 不得超过所代表路径的可用碳；源阶段 NH3 质量 × 14/17、直接 N2O 质量 × 28/44 与其他源阶段氮损失之和，在核对库存及转移后不得超过该阶段可用氮。各项间接 N2O-N 计算以有记录的挥发氮或淋溶氮前体为上限，不再从源台账扣除该下游转化。这些是守恒检查，不是排放因子或经验单位产品区间。| `cp_pathway_emissions` | 每最终参考流的指定化合物 kg | `review-ipcc-livestock-2019`; `review-eea-manure-2023`; `review-ipcc-soils-2019` |
| `calc_feed_supply_and_intake` | `donor_feed` | 所代表作业使用的饲料投入 = 期初饲料库存 + 收货 + 进入本作业的自产饲料 - 期末饲料库存 - 有记录的未用退回或转出。该投入保留边界内变质、拒食及被丢弃的剩余料。实际采食量 = 该投入 - 实测未食用/丢弃损失，并匹配水分/干物质与期间；采食量仅用于营养及代谢计算。期初库存承接原有负担，不是再次采购。追溯未用退回或转出的物料及负担去向，不自动给予替代抵扣。同一饲料的生产负担由采购饲料数据集或已建模自产作物/采集节点承担一次，不得两者并计。实际废料处理及粪污贡献计一次，不再次添加饲料生产负担。 | `cp_feed_supply_and_intake` | 同一原物/干物质基准下分开的饲料投入、采食及损失数量 | `review-fao-pig-lca-2018` |
| `calc_manure_n2o_coverage` | `review_donor_direct_n2o`; `review_donor_indirect_n2o` | 按真实粪污阶段，采用有记录的物种/系统活动量及因子基准，分别计算直接 N2O、挥发/沉降引致间接 N2O，以及适用的淋溶/径流引致间接 N2O。N2O-N 乘 44/28 恰换算一次为分子态 N2O；已为分子质量的不得再次换算。保留分项计算表。现有 N2O 卡同时覆盖直接与间接排放时，填报其不重叠总和；已有直接/间接独立卡时，每个分项只归入对应卡，不再另报总和。放牧沉积及田间施用采用管理土壤方法，不套用粪污贮存因子。明确前景与已链接处理/牧地数据的核算责任；粪污转出不消除此前排放，已覆盖的下游排放不得重复。氮级联核对库存、转移及此前氮损失；间接 N2O 是前体的下游转化，不再次视为源阶段氮损失。可归属分子质量对合格参考产出归一化一次。记录不适用依据；路径数据缺失不等于零。 | `cp_manure_n2o_coverage` | 按路径及现有归属卡分开的 kg 分子态 N2O | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | 放行产品 | 保留物种、供体、路线、发育阶段、等级、状态、容器和门点。 | 分级单与签字放行 |
| `completeness` | 全部尝试 | 包括失败获取/培养、留样、降级、拒收、公用工程和包装。 | 核对后的事件与批次台账 |
| `temporal` | 供体及资产 | 将服务、更替、房间/培养箱/储罐使用与放行胚胎关联到实际期间。 | 有日期的饲养与资产日志 |
| `comparability` | 路线与状态 | 体内/体外及鲜品/冷藏/冷冻分别设置分母，不使用通用成功率。 | 路线放行准则与台账 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference` | 最终产品 | 要求可存活动物胚胎、物种、路线、阶段、等级、状态及签字放行；解剖结构不能替代产品流。 | `un-cpc-3`; `woah-invivo-2024`; `woah-invitro-2024` |
| `route` | 每批 | 选择一条体内或体外路径，仅计实际受精/培养、保存及贸易控制。 | `woah-invivo-2024`; `woah-invitro-2024` |
| `balance` | 每个接口 | 核对原始、制备、分级、降级、保存、拒收与放行数，以及介质与包装。 | `woah-invivo-2024`; `woah-invitro-2024` |
| `attribution` | 期间/资产 | 核实供体与失败事件期间、全部共用使用者、唯一负荷归属和独立低等级交接。 | `woah-invivo-2024`; `woah-invitro-2024` |
| `v_pathway_emission_coverage` | `donor` | 要求路径覆盖台账，包含生物学适用时的肠道 CH4、粪污 CH4、直接/间接 N2O、NH3 及相关田间排放。每条路径须有实测/计算量、覆盖匹配的明确链接过程，或有依据的不适用结论；缺数据不得记零。捕获前的野生生活不纳入受管理饲养，实际受管理留置须另行评估，并保留物种专属证据。 | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019`; `review-eea-manure-2023` |
| `v_foreground_emission_responsibility` | 实际运行节点及链接服务 | 适用时记录现场燃料燃烧及制冷剂泄漏的核算责任：须为量化前景排放，或明确覆盖它们的具名链接过程，不能仅凭燃料供应或电力生产投入视为已包含。特殊类群生物及残余物排放须依物种/路线证据评估，不套通用畜牧因子。标明尚未落实的路径，不宣称清单完整；记录有依据的不存在结论并防止上/下游重复核算。 | |
| `v_feed_supply_intake_separation` | 全部饲料投入 | 拒绝扣除边界内拒食、变质或丢弃剩余料且未保留其生产负担的上游饲料清单。按 calc_feed_supply_and_intake 核对投入、采食、库存、转移及损失去向。不得把采食量当作饲料投入，不得假设自产饲料零负担或自动给予替代产品抵扣。 | `review-fao-pig-lca-2018` |
| `v_manure_n2o_coverage` | 适用粪污及管理土壤氮路径 | 须明确直接及间接路径覆盖、阶段氮平衡及分子质量换算。按 calc_manure_n2o_coverage，将各分项归入现有 N2O 卡或明确覆盖的已链接过程一次。间接路径证据缺失时不得宣称完整；不得默认零值或把汇总值与分项重复并计。 | `review-ipcc-livestock-2019`; `review-ipcc-soils-2019` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 育种用胚胎生产前景包，不是受体移植服务。 |
| downstream_use | `secondary_dataset`；仅在具体身份及代表性验证后用作 `background_dataset`。 |
| allowed_use | 物种、路线、阶段、质量、状态及门点相匹配的胚胎评价。 |
| excluded_use | 昆虫未成熟阶段、卵母细胞、精液、胚胎移植、妊娠及不匹配路线。 |
| required_metadata | CPC 参考、供体、期间、路线、阶段、等级、全部计数、状态、门点及分配。 |
| required_quality_disclosure | 缺失 UUID、失败批覆盖、路线产率、检测、介质/冷冻剂计量、共用资产归属及缺口。 |
| update_trigger | 精确参考流身份、物种/路线方法变化或更强定量证据。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | standard | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 胚胎产品身份和昆虫排除 |
| `woah-invivo-2024` | standard | https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2023/chapitre_coll_embryo_equid.pdf | 体内采集、清洗、分级、储存及追溯 |
| `woah-invitro-2024` | standard | https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2023/chapitre_coll_embryo_invitro.pdf | 卵母细胞获取、体外实验室路线及追溯 |
| `review-fao-pig-lca-2018` | official_guidance | [FAO 2018, Environmental performance of pig supply chains: Guidelines for assessment, section 11.2.2 and Appendix 2.13](https://www.fao.org/4/i8686en/I8686EN.pdf) | 饲料损失核算及一般 LCA 分配层级；向其他类群或繁殖产品的应用是本 PCR 明示的方法学选择，不移植猪的参数 |
| `review-ipcc-livestock-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 10: Emissions from Livestock and Manure Management](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 物种与路径适用性；CH4 和 N2O 方法选择，不作为通用排放因子 |
| `review-eea-manure-2023` | official_guidance | [EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023, 3.B Manure Management](https://www.eea.europa.eu/en/analysis/publications/emep-eea-guidebook-2023/part-b-sectoral-guidance-chapters/3-agriculture/3-b-manure-management-2023) | NH3 氮流方法；采用参数前核实实际物种、管理方式及地域适用性 |
| `review-ipcc-soils-2019` | official_guidance | [IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | 管理土壤直接及间接氮路径与边界核对 |
