---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-head-on-gutted-tunas-and-skipjack
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 首次生产者交接的野生带头去内脏食用金枪鱼和鲣鱼

## 1. 范围与适用性

本 PCR 规定野生海洋金枪鱼属及鲣鱼 Katsuwonus pelamis 在生产者责任下捕获、致死放血去内脏并保留头部，以鲜或未冻结冷藏食用鱼完成首次生产者交接的前景数据。当地“bonito”商品名不能替代物种鉴定。仅包括实际发生的处理和技术，不强制围网、延绳钓、集鱼装置、冰浆或固定处理顺序。参考鱼为净鱼体，不是去骨可食肉、复原整鱼或包装总重。

不含养殖圈养育肥、转养活鱼、最终活鱼或未去内脏整鱼、去头鱼、鱼柳鱼片鱼排、器官作为参考、冻结冻融或加工保藏品、后续商贩交接及非食用终用途。若真实路线不能确认物种形态接受或非冻结状态，应另行界定或保留缺口，不能修改状态强行纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-head-on-gutted-tunas-and-skipjack |
| classification_refs | CPC 3.0:04251; narrower |
| covered_products | 首次生产者食用交接的野生金枪鱼属或 Katsuwonus pelamis 带头去内脏鲜未冻结冷藏鱼体 |
| excluded_products | 其他 Euthynnus 或 Sarda 类群；养殖圈养；活或未去内脏终品；去头鱼、肉块鱼片、器官、冻融加工品、转养非食用及后商贩交接 |
| representative_product | 实际野生 Thunnus albacares 带头去内脏非冻结冷藏鱼体；不作所有物种产量假定 |
| production_route | capture 母活动；实际钩线钓饵或围网小艇及条件性集鱼装置增量；实际整理、分级、非冻结保鲜包装至首次交接；事件变体互斥且记录不重叠 |
| market_state | 预期食用鲜或未冻结冷藏；实际鳃和等级；全历史接受证据 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 首次生产者交接的野生带头去内脏食用金枪鱼和鲣鱼 |
| How much | 1 kg |
| How well | 实际物种头内脏鳃状态、净鱼体质量、非冻结形态及适用食用接受证据 |
| How long or cycle | 声明完整航次及相关作业服务期，含出航搜索捕捞处理返航闲置维护、更换退役和失败无产出期 |
| reference_flow_link | `handover_final` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 首次生产者交接的野生带头去内脏食用金枪鱼和鲣鱼 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种学名; 野生来源水域; 真实捕捞渔具及鱼群关联; 生产者责任和首次交接地点时间; 保留头部; 已去内脏及真实鳃保留; 捕捞至交接时间温度全历史; 实际等级食用接受依据; 非冻结状态; 鱼体净质量排除冰水包材和移出器官; 航次作业期及共产品归属 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass | kg | 用 handover 节点 cp_handover_mass 校准秤称量已接受带头去内脏鱼体，排除游离水冰包材器官；实际鳃留在鱼体即计其质量。不用器官得率重构整鱼。 |
| `support_chain` | mass and energy inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kg; MJ | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 的 kg=1、t=1000、g=0.001；能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` 的 MJ=1、kWh=3.6。仅用于匹配属性换算，服务属性单位需另核实。 |
| `physical_units` | all inventory rows | Mass or actual energy/service property | kg; MJ; actual service unit | 质量行使用湿态实际公斤；记录密度、湿干基或计数转换证据后才换算。能量使用实际 MJ 或有证据 kWh×3.6。供应服务保留真实发票功能单位，不虚构材料公斤；未明属性单位阻止最终交换。 |
| `two_views` | all inventory rows | Actual row property | per 1 kg reference flow | 未分配物理账先以真实接收转移产出损失库存闭合并对共用节点时期资源只归属一次，再除正数最终接受净公斤；独立单输出 LCA 清单负荷按第 7 节一次归属，保留物理账及矩阵。不以经济份额缩减物理分区。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际野生海洋鱼群背景、完整航次开期、设备钓饵库存和供应链接收；无前景养殖生物量生产 |
| starting_condition_role | 野生移出背景及有负荷的产品服务供应，不是免费钓饵或负荷豁免 |
| product_classification_scope | CPC 3.0:04251; narrower |
| recursive_input_rule | 自身捕获鱼进入内部处理，不重新递归为已生产终品。首次交接后外购同类鱼转售不在此路线；外购同物种钓饵仍为独立供应产品及负荷。 |
| upstream_dataset_requirement | 对真实燃料电力水冰钓饵材料服务及资产提供匹配来源状态单位供应数据；自供服务计其真实资源，不重复供应成品负荷。 |
| disclosure | 披露航次责任开闭期、实际顺序和交接、库存失效无产出期、外购自供资源所有权、服务包含范围、共产品分配、资产使用寿命证据及未决身份数量。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_origin` | all foreground | 包括实际海洋野生金枪鱼属或 Katsuwonus pelamis 捕捞至自身首次生产者食用交接的带头去内脏鲜未冻结冷藏鱼。捕捞是独立移出责任，不意味养殖且不同于后续去内脏。 | `un-cpc3-notes`; `noaa-tuna-gear`; `fao-tuna-handling-2025` |
| `actual_sequence` | all handling nodes | 过程图是责任清单，不是固定时间线。每次重访均保留事件阶段交接编号及真实前后状态；分级预冷致死放血去内脏去鳃清洗包装遵循有证据的实际顺序。无论末节点名称，最终交接都要求已去内脏且真实食用接受；未知状态是待定库存数据缺口，不能默认为未激活。 | `fao-tuna-handling-2025` |
| `capture_delta` | capture; bait_supply; fad_service | 母活动为 capture。钩线法激活实际外购自捕饵责任；围网小艇操作激活真实设备能量，只有有证据的集鱼装置相关事件才激活 fad_service。自由鱼群与集鱼装置相关网次及渔具变体是不重叠事件，不重复渔获。保留兼捕放回死亡材料损失及生境动物相互作用，不作统一影响寿命效率因子声明。 | `noaa-tuna-gear`; `noaa-yellowfin` |
| `mass_interfaces` | all nodes | 先在未分配物理账记录实际物种组织水冰包材库存损失预期产品。去内脏需核对整鱼投入与带头去内脏鱼体、真实移出内脏肝卵鳃血及所有测得去向；保留组织鳃留在鱼体质量。不能假定整鱼投入等于最终去内脏质量，也不能将同一血组织在废物混合物和组分排放重复。 |  |
| `gate_and_trip` | capture; shared_resources; handover | 交接是海上港口或有记录收集点的真实首次生产者负责食用交接，不自动为港口。鱼处理止于此，但保留归属的完整出航搜索捕捞返航、失败无产出航次、闲置维护资产服务期；包装不包含新增下游商贩持有配送。 |  |
| `resource_ownership` | all nodes; shared_resources | 每项真实资源事件归属一个节点时期，供应服务已含燃料电力水包材不重复列直接行。shared_resources 仅拥有跨明确节点时期的真正未分割共用池和资产。外购服务保留供应功能单位范围；若支撑不明，最终交换发布前在辅助账保留发票及未决属性单位。 |  |
| `cold_history` | grade; chill; handover | 保留捕捞死亡放血去内脏冷却交接时间温度仪器证据偏离及适用主管机构市场接受。组胺风险需实际决定证据，后续冷却清洗不抹去先前不安全历史。本方法不认证食品安全，不设通用时间温度限值，不将美国规则全球化。 | `fda-histamine-2024`; `fao-tuna-handling-2025` |

## 6. 过程清单结构

所有卡以相同最终参考基准报告；记录实际条件，不发生的角色不制造正数交换。跨节点物理流用配对编号保持原始数量，重复处理不重复负荷。每张卡的暂定范围仅为宽泛筛选起点，既不是用量默认，也不证明具体渔业数量合理。服务卡以实际服务单位逐供应者展开，无法确认单位属性时只保留辅助账并标记缺口。

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `bait_supply` | 自捕钓饵及有限维持 | conditional | 仅实际为本航次自捕或维持钓饵；外购钓饵直接进入 capture。 | foreground responsibility | 实际供饵、期末库存及所有去向 |
| `capture` | 野生金枪鱼捕捞和收集 | required | 实际海洋野生捕捞事件，不含养殖、圈养育肥。 | foreground responsibility | 保留整鱼渔获及兼捕生物量 |
| `conditioning` | 生产者致死、放血和去内脏 | required | 实际由生产者负责的保留头部去内脏；按实际记录去鳃和清洗。 | foreground responsibility | 实际部分整理及已完成去内脏带头鱼转移、各器官和血液去向及库存 |
| `grade` | 实际食用及去向分级 | required | 在实际处理顺序中的真实分类及预期食用接受。 | foreground responsibility | 接受食用鱼、其他预期产品、废物及库存 |
| `chill` | 生产者非冻结冷却和冷藏维持 | conditional | 仅首次交接前实际用冰、冷水或冰浆、机械冷却或有限冷藏；不含冻融。 | foreground responsibility | 实际处理阶段同批未冻结鱼 |
| `present` | 保护性整理包装 | conditional | 仅交接前生产者实际包裹、装箱、标识或保护性整理。 | foreground responsibility | 整理后的鱼及独立包装材料 |
| `handover` | 首次生产者食用交接 | required | 仅实际物种形态、食用接受和冷链证据核对完成后。 | foreground responsibility | 接受的带头去内脏鱼净质量 |
| `fad_service` | 实际集鱼装置与浮标服务 | conditional | 仅有证据的集鱼装置相关捕捞事件及其资产服务期；自由鱼群捕捞不激活本节点。 | capture technology service | 实际布放回收服务及材料去向 |
| `shared_resources` | 共享船舶港口资产及未分割服务 | required | 实际共用资产、维护及尚未归属的共用资源；包含失败无产出和返航期。 | shared resource ownership | 服务期责任及核对后的共用资源 |

### 过程：自捕钓饵及有限维持 (`bait_supply`)

按实际事件、阶段、交接编号及日期时间记录本节点；保留物理质量库存账、资源所有权和独立 LCA 归属视图，未激活条件不默认产生交换。

#### 输入

##### 产品流

###### 实际内部收取的固态水冰 (`bait_supply_internal_ice_receipt`)

仅接收另一实际节点转交的固态水冰，按冰状态、物理质量和交接编号与来源节点 internal_water 输出的冰分项配对。不是外购 fixed ice、液态收水、同节点自制冰或第二份冰制造负荷；handover 节点本卡仅收非随鱼批次运行冰，随鱼批次冰由 handover_material_receipt 所有，互斥不可重复。

- 选定流：实际内部收取的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：按 cp_bait_supply_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_bait_supply_mass`
- 数量范围：可替换宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际中国平均电网低压电力 (`bait_supply_cn_power`)

仅真实交付用户的中国平均电网低于 1 kV 交流电，以有证据千瓦时换算为 MJ；不是船载柴油发电、其他电压、绿电合同或其他国家。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_bait_supply_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_bait_supply_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他实际电力供应 (`bait_supply_other_power`)

仅真实独立供应组合电压电力；船载自发电记辅助能量账，其发电燃料排放只归属一次，不作第二份外购电力负荷。

- 选定流：其他实际电力供应
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_bait_supply_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_bait_supply_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 匹配的外供处理工业用水 (`bait_supply_treated_water`)

仅用途匹配的真实外供处理工业用水产品，不是原海淡水取水、饮用水声明或总循环量。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_bait_supply_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他供应水或配对内部收水 (`bait_supply_other_water`)

实际外供液态水按处理来源状态识别，或同组成质量配对内部液态收水；固态冰由本节点 internal_ice_receipt 接收。拆分来源，避免与直接取水及内部循环通量重复；handover 随鱼批次水由 handover_material_receipt 所有，本卡仅非随批次运行收水。

- 选定流：其他供应水或配对内部收水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_bait_supply_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购捕捞登陆冷却用冰 (`bait_supply_ice`)

仅实际外购用于捕捞船上登陆非冻结处理的水冰；自制冰记录水和制造能量一次及内部账，不加第二份外购冰上游负荷。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_bait_supply_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际直接取水 (`bait_supply_abstracted_water`)

实际按来源介质直接取水，排除外购供应和循环通量；计量或以校准泵时流量计算，不强制淡水。

- 选定流：实际直接取水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_bait_supply_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 单独计量的液态水 (`bait_supply_internal_water_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bait_supply_mass`

###### 单独计量的固态水冰 (`bait_supply_internal_water_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bait_supply_mass`



##### 废物流

##### 基本流

###### 实际钓饵呼吸向大气二氧化碳 (`bait_supply_biogenic_co2`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅实测或由物种阶段模型参数时期独立验证及接收介质支持的实际钓饵维持生物呼吸二氧化碳。不是化石燃料二氧化碳，也不假定统一代谢；真实其他气水去向仍独立识别。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_bait_supply_emissions 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_bait_supply_emissions`
- 数量范围：可替换宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际向大气排放的化石二氧化碳 (`bait_supply_fossil_co2`)

仅节点所有真实燃料燃烧的直接化石二氧化碳，适配时排至未指定大气；用实际燃料碳氧化化石比例或可追溯直接测量，无统一因子、不重标生物呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_bait_supply_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_bait_supply_emissions`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有证据的向大气蒸发水 (`bait_supply_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅本节点有测量或验证模型支持的蒸发水，不作任意质量补平项，不把全部用水等于消耗。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_bait_supply_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：野生金枪鱼捕捞和收集 (`capture`)

按实际事件、阶段、交接编号及日期时间记录本节点；保留物理质量库存账、资源所有权和独立 LCA 归属视图，未激活条件不默认产生交换。

#### 输入

##### 产品流

###### 实际内部收取的固态水冰 (`capture_internal_ice_receipt`)

仅接收另一实际节点转交的固态水冰，按冰状态、物理质量和交接编号与来源节点 internal_water 输出的冰分项配对。不是外购 fixed ice、液态收水、同节点自制冰或第二份冰制造负荷；handover 节点本卡仅收非随鱼批次运行冰，随鱼批次冰由 handover_material_receipt 所有，互斥不可重复。

- 选定流：实际内部收取的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_mass`
- 数量范围：可替换宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际中国平均电网低压电力 (`capture_cn_power`)

仅真实交付用户的中国平均电网低于 1 kV 交流电，以有证据千瓦时换算为 MJ；不是船载柴油发电、其他电压、绿电合同或其他国家。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_capture_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他实际电力供应 (`capture_other_power`)

仅真实独立供应组合电压电力；船载自发电记辅助能量账，其发电燃料排放只归属一次，不作第二份外购电力负荷。

- 选定流：其他实际电力供应
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_capture_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 匹配的外供处理工业用水 (`capture_treated_water`)

仅用途匹配的真实外供处理工业用水产品，不是原海淡水取水、饮用水声明或总循环量。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他供应水或配对内部收水 (`capture_other_water`)

实际外供液态水按处理来源状态识别，或同组成质量配对内部液态收水；固态冰由本节点 internal_ice_receipt 接收。拆分来源，避免与直接取水及内部循环通量重复；handover 随鱼批次水由 handover_material_receipt 所有，本卡仅非随批次运行收水。

- 选定流：其他供应水或配对内部收水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购捕捞登陆冷却用冰 (`capture_ice`)

仅实际外购用于捕捞船上登陆非冻结处理的水冰；自制冰记录水和制造能量一次及内部账，不加第二份外购冰上游负荷。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 移出的野生金枪鱼属或鲣鱼生物量 (`capture_target_biomass`)

按证据记录捕捞责任下目标物种整鱼生物量，包括保留、放回及丢弃分区；不虚构死亡或种群抵扣。

- 选定流：移出的野生金枪鱼属或鲣鱼生物量
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际直接取水 (`capture_abstracted_water`)

实际按来源介质直接取水，排除外购供应和循环通量；计量或以校准泵时流量计算，不强制淡水。

- 选定流：实际直接取水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 单独计量的液态水 (`capture_internal_water_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture_mass`

###### 单独计量的固态水冰 (`capture_internal_water_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture_mass`



###### 供生产者处理的保留整条金枪鱼或鲣鱼 (`capture_whole_target`)

实际捕获整鱼按记录可活可死，尚未自身去内脏；事件时间交接和预冷状态随下一真实节点接收，不固定为最终去内脏公斤数。

- 选定流：供生产者处理的保留整条金枪鱼或鲣鱼
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 交废物接收方的渔获 (`capture_catch_waste`)

实际岸上或船上交处理的废物，排除产品和向自然释放，保留去向及接收证据。

- 选定流：交废物接收方的渔获
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际丢弃至水体的死亡渔获 (`capture_dead_discard`)

按物种及处置背景拆分实际释放至水域的死亡目标非目标生物量，无统一丢弃系数。

- 选定流：实际丢弃至水体的死亡渔获
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际向大气排放的化石二氧化碳 (`capture_fossil_co2`)

仅节点所有真实燃料燃烧的直接化石二氧化碳，适配时排至未指定大气；用实际燃料碳氧化化石比例或可追溯直接测量，无统一因子、不重标生物呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_emissions`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有证据的向大气蒸发水 (`capture_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅本节点有测量或验证模型支持的蒸发水，不作任意质量补平项，不把全部用水等于消耗。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_capture_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：生产者致死、放血和去内脏 (`conditioning`)

按实际事件、阶段、交接编号及日期时间记录本节点；保留物理质量库存账、资源所有权和独立 LCA 归属视图，未激活条件不默认产生交换。

#### 输入

##### 产品流

###### 实际内部收取的固态水冰 (`conditioning_internal_ice_receipt`)

仅接收另一实际节点转交的固态水冰，按冰状态、物理质量和交接编号与来源节点 internal_water 输出的冰分项配对。不是外购 fixed ice、液态收水、同节点自制冰或第二份冰制造负荷；handover 节点本卡仅收非随鱼批次运行冰，随鱼批次冰由 handover_material_receipt 所有，互斥不可重复。

- 选定流：实际内部收取的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass`
- 数量范围：可替换宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入实际致死或去内脏阶段的鱼 (`conditioning_fish_receipt`)

与紧前实际节点配对，记录自捕整鱼或部分处理的整鱼带头鱼活死冷却分级鳃状态；不接收首次交接后外购转售鱼。

- 选定流：进入实际致死或去内脏阶段的鱼
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际中国平均电网低压电力 (`conditioning_cn_power`)

仅真实交付用户的中国平均电网低于 1 kV 交流电，以有证据千瓦时换算为 MJ；不是船载柴油发电、其他电压、绿电合同或其他国家。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_conditioning_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他实际电力供应 (`conditioning_other_power`)

仅真实独立供应组合电压电力；船载自发电记辅助能量账，其发电燃料排放只归属一次，不作第二份外购电力负荷。

- 选定流：其他实际电力供应
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_conditioning_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 匹配的外供处理工业用水 (`conditioning_treated_water`)

仅用途匹配的真实外供处理工业用水产品，不是原海淡水取水、饮用水声明或总循环量。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他供应水或配对内部收水 (`conditioning_other_water`)

实际外供液态水按处理来源状态识别，或同组成质量配对内部液态收水；固态冰由本节点 internal_ice_receipt 接收。拆分来源，避免与直接取水及内部循环通量重复；handover 随鱼批次水由 handover_material_receipt 所有，本卡仅非随批次运行收水。

- 选定流：其他供应水或配对内部收水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购捕捞登陆冷却用冰 (`conditioning_ice`)

仅实际外购用于捕捞船上登陆非冻结处理的水冰；自制冰记录水和制造能量一次及内部账，不加第二份外购冰上游负荷。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际直接取水 (`conditioning_abstracted_water`)

实际按来源介质直接取水，排除外购供应和循环通量；计量或以校准泵时流量计算，不强制淡水。

- 选定流：实际直接取水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 单独计量的液态水 (`conditioning_internal_water_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_mass`

###### 单独计量的固态水冰 (`conditioning_internal_water_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_mass`



###### 实际整理后的带头去内脏鱼体 (`conditioning_carcass`)

保留头及实际保留鳃、按约定沥水的真实整理鱼体；下一节点可为分级冷藏包装或交接，不假定器官得率。

- 选定流：实际整理后的带头去内脏鱼体
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 去内脏完成前实际转出的保留头部鱼 (`conditioning_partially_prepared_fish`)

仅限真实中间道次向实际下一节点交接尚未完成去内脏或仅部分整理的带头鱼，例如有记录的先降温后继续去内脏。记录实际活死、放血、内脏及鳃、等级和温度状态、原始实测质量及配对事件、道次、转移编号。去内脏保持待完成；后续返回与真实接收道次配对。同份物料同道次与已完成去内脏输出互斥，不是第二次鱼体销售或固定最终 1 千克。最终交接仍须完成去内脏并满足全部食用及未冻结限定。

- 选定流：去内脏完成前实际转出的保留头部鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_conditioning_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_conditioning_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_conditioning_partially_prepared_fish
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 整理中拒收并交废物处置的鱼 (`conditioning_rejected_fish`)

实际损坏不接受且送处理的鱼，与去内脏及预期降级销售分开；缺失食用决定的是待定库存，不自动作废物。

- 选定流：整理中拒收并交废物处置的鱼
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际向水体释放的移出组织 (`conditioning_organ_release`)

仅记录向自然真实释放的器官血液，识别物质材料介质及管理背景；与废水组分排放和交处理分开。

- 选定流：实际向水体释放的移出组织
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际向大气排放的化石二氧化碳 (`conditioning_fossil_co2`)

仅节点所有真实燃料燃烧的直接化石二氧化碳，适配时排至未指定大气；用实际燃料碳氧化化石比例或可追溯直接测量，无统一因子、不重标生物呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_emissions`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有证据的向大气蒸发水 (`conditioning_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅本节点有测量或验证模型支持的蒸发水，不作任意质量补平项，不把全部用水等于消耗。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 在 conditioning 实际放归环境水体的存活鱼 (`conditioning_actual_live_fish_return`)

仅在本道次实际接收存活鱼且确实放归已识别存活个体时启用：保留物种、整鱼及头内脏鳃状态、存活证据、原始实测质量、事件或道次及时间、受纳水体和适用许可或情境。此节点对实际接收后的放归负责，不回填为捕捞留存前放归，也不虚构返向转移。与继续转出产品、废物和期末库存互斥；不假定放归、存活系数或抵扣。

- 选定流：在 conditioning 实际放归环境水体的存活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_conditioning_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_conditioning_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_conditioning_actual_live_fish_return
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 在 conditioning 实际释放入水的死亡整鱼或鱼体物料 (`conditioning_actual_dead_fish_release`)

仅限本道次拒收或死亡整鱼、鱼体有记录的实际直接环境去向；识别物种、头内脏鳃状态、原始质量、事件、受纳水体及适用管理或许可证据。不规定为合法处置路线。移出器官或血液、废水组分、送处理鱼、有意产品及库存分开；同一物料不重复计数，也不改记为捕捞阶段损失。

- 选定流：在 conditioning 实际释放入水的死亡整鱼或鱼体物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_conditioning_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_conditioning_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_conditioning_actual_dead_fish_release
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：实际食用及去向分级 (`grade`)

按实际事件、阶段、交接编号及日期时间记录本节点；保留物理质量库存账、资源所有权和独立 LCA 归属视图，未激活条件不默认产生交换。

#### 输入

##### 产品流

###### 实际内部收取的固态水冰 (`grade_internal_ice_receipt`)

仅接收另一实际节点转交的固态水冰，按冰状态、物理质量和交接编号与来源节点 internal_water 输出的冰分项配对。不是外购 fixed ice、液态收水、同节点自制冰或第二份冰制造负荷；handover 节点本卡仅收非随鱼批次运行冰，随鱼批次冰由 handover_material_receipt 所有，互斥不可重复。

- 选定流：实际内部收取的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：按 cp_grade_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_mass`
- 数量范围：可替换宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入实际去向分级的鱼 (`grade_fish_receipt`)

紧前实际整鱼或带头去内脏鱼的整理保鲜状态；分类可在去内脏前后或再次进行，配对交接保留状态。

- 选定流：进入实际去向分级的鱼
- 流属性/单位：Mass / kg
- 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际中国平均电网低压电力 (`grade_cn_power`)

仅真实交付用户的中国平均电网低于 1 kV 交流电，以有证据千瓦时换算为 MJ；不是船载柴油发电、其他电压、绿电合同或其他国家。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_grade_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他实际电力供应 (`grade_other_power`)

仅真实独立供应组合电压电力；船载自发电记辅助能量账，其发电燃料排放只归属一次，不作第二份外购电力负荷。

- 选定流：其他实际电力供应
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_grade_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 匹配的外供处理工业用水 (`grade_treated_water`)

仅用途匹配的真实外供处理工业用水产品，不是原海淡水取水、饮用水声明或总循环量。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他供应水或配对内部收水 (`grade_other_water`)

实际外供液态水按处理来源状态识别，或同组成质量配对内部液态收水；固态冰由本节点 internal_ice_receipt 接收。拆分来源，避免与直接取水及内部循环通量重复；handover 随鱼批次水由 handover_material_receipt 所有，本卡仅非随批次运行收水。

- 选定流：其他供应水或配对内部收水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购捕捞登陆冷却用冰 (`grade_ice`)

仅实际外购用于捕捞船上登陆非冻结处理的水冰；自制冰记录水和制造能量一次及内部账，不加第二份外购冰上游负荷。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际直接取水 (`grade_abstracted_water`)

实际按来源介质直接取水，排除外购供应和循环通量；计量或以校准泵时流量计算，不强制淡水。

- 选定流：实际直接取水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 单独计量的液态水 (`grade_internal_water_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_mass`

###### 单独计量的固态水冰 (`grade_internal_water_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_mass`



###### 接受进入预期食用路线的鱼 (`grade_accepted_food`)

按物种整鱼或带头去内脏形态及处理状态记录实际接受等级；已接受整鱼仍需自身去内脏才可参考交付，明确去向及下一节点。

- 选定流：接受进入预期食用路线的鱼
- 流属性/单位：Mass / kg
- 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 实际送废物处置的分级拒收物 (`grade_waste`)

仅实际送处理的拒收物；接受状态不明保留独立库存，降级销售不能同时是废物。

- 选定流：实际送废物处置的分级拒收物
- 流属性/单位：Mass / kg
- 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际向大气排放的化石二氧化碳 (`grade_fossil_co2`)

仅节点所有真实燃料燃烧的直接化石二氧化碳，适配时排至未指定大气；用实际燃料碳氧化化石比例或可追溯直接测量，无统一因子、不重标生物呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_grade_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_emissions`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有证据的向大气蒸发水 (`grade_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅本节点有测量或验证模型支持的蒸发水，不作任意质量补平项，不把全部用水等于消耗。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_grade_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 在 grade 实际放归环境水体的存活鱼 (`grade_actual_live_fish_return`)

仅在本道次实际接收存活鱼且确实放归已识别存活个体时启用：保留物种、整鱼及头内脏鳃状态、存活证据、原始实测质量、事件或道次及时间、受纳水体和适用许可或情境。此节点对实际接收后的放归负责，不回填为捕捞留存前放归，也不虚构返向转移。与继续转出产品、废物和期末库存互斥；不假定放归、存活系数或抵扣。

- 选定流：在 grade 实际放归环境水体的存活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_grade_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_grade_actual_live_fish_return
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 在 grade 实际释放入水的死亡整鱼或鱼体物料 (`grade_actual_dead_fish_release`)

仅限本道次拒收或死亡整鱼、鱼体有记录的实际直接环境去向；识别物种、头内脏鳃状态、原始质量、事件、受纳水体及适用管理或许可证据。不规定为合法处置路线。移出器官或血液、废水组分、送处理鱼、有意产品及库存分开；同一物料不重复计数，也不改记为捕捞阶段损失。

- 选定流：在 grade 实际释放入水的死亡整鱼或鱼体物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_grade_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_grade_actual_dead_fish_release
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：生产者非冻结冷却和冷藏维持 (`chill`)

按实际事件、阶段、交接编号及日期时间记录本节点；保留物理质量库存账、资源所有权和独立 LCA 归属视图，未激活条件不默认产生交换。

#### 输入

##### 产品流

###### 实际内部收取的固态水冰 (`chill_internal_ice_receipt`)

仅接收另一实际节点转交的固态水冰，按冰状态、物理质量和交接编号与来源节点 internal_water 输出的冰分项配对。不是外购 fixed ice、液态收水、同节点自制冰或第二份冰制造负荷；handover 节点本卡仅收非随鱼批次运行冰，随鱼批次冰由 handover_material_receipt 所有，互斥不可重复。

- 选定流：实际内部收取的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chill_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_mass`
- 数量范围：可替换宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入实际非冻结冷却或冷藏阶段的鱼 (`chill_fish_receipt`)

按实际整鱼去内脏、待定接受等级及活死记录，可早于整理或分级；内部进料不固定为最终参考质量。

- 选定流：进入实际非冻结冷却或冷藏阶段的鱼
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际中国平均电网低压电力 (`chill_cn_power`)

仅真实交付用户的中国平均电网低于 1 kV 交流电，以有证据千瓦时换算为 MJ；不是船载柴油发电、其他电压、绿电合同或其他国家。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_chill_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他实际电力供应 (`chill_other_power`)

仅真实独立供应组合电压电力；船载自发电记辅助能量账，其发电燃料排放只归属一次，不作第二份外购电力负荷。

- 选定流：其他实际电力供应
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_chill_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 匹配的外供处理工业用水 (`chill_treated_water`)

仅用途匹配的真实外供处理工业用水产品，不是原海淡水取水、饮用水声明或总循环量。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他供应水或配对内部收水 (`chill_other_water`)

实际外供液态水按处理来源状态识别，或同组成质量配对内部液态收水；固态冰由本节点 internal_ice_receipt 接收。拆分来源，避免与直接取水及内部循环通量重复；handover 随鱼批次水由 handover_material_receipt 所有，本卡仅非随批次运行收水。

- 选定流：其他供应水或配对内部收水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购捕捞登陆冷却用冰 (`chill_ice`)

仅实际外购用于捕捞船上登陆非冻结处理的水冰；自制冰记录水和制造能量一次及内部账，不加第二份外购冰上游负荷。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际直接取水 (`chill_abstracted_water`)

实际按来源介质直接取水，排除外购供应和循环通量；计量或以校准泵时流量计算，不强制淡水。

- 选定流：实际直接取水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 单独计量的液态水 (`chill_internal_water_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_mass`

###### 单独计量的固态水冰 (`chill_internal_water_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chill_mass`



###### 离开实际冷却冷藏阶段的未冻结鱼 (`chill_fish_transfer`)

保留真实去内脏前后分级鳃状态、质量温度时间及下一交接；冷却不等于食用接受，也不逆转既往失控。

- 选定流：离开实际冷却冷藏阶段的未冻结鱼
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 实际腐败拒收鱼交处理 (`chill_fish_waste`)

仅实际废物去向鱼，若有活中间体则含贮存死亡；区分测得滴液、仍在产品内组织与鱼体废物。

- 选定流：实际腐败拒收鱼交处理
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际向大气排放的化石二氧化碳 (`chill_fossil_co2`)

仅节点所有真实燃料燃烧的直接化石二氧化碳，适配时排至未指定大气；用实际燃料碳氧化化石比例或可追溯直接测量，无统一因子、不重标生物呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chill_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_emissions`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有证据的向大气蒸发水 (`chill_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅本节点有测量或验证模型支持的蒸发水，不作任意质量补平项，不把全部用水等于消耗。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_chill_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 在 chill 实际放归环境水体的存活鱼 (`chill_actual_live_fish_return`)

仅在本道次实际接收存活鱼且确实放归已识别存活个体时启用：保留物种、整鱼及头内脏鳃状态、存活证据、原始实测质量、事件或道次及时间、受纳水体和适用许可或情境。此节点对实际接收后的放归负责，不回填为捕捞留存前放归，也不虚构返向转移。与继续转出产品、废物和期末库存互斥；不假定放归、存活系数或抵扣。

- 选定流：在 chill 实际放归环境水体的存活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_chill_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_chill_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_chill_actual_live_fish_return
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 在 chill 实际释放入水的死亡整鱼或鱼体物料 (`chill_actual_dead_fish_release`)

仅限本道次拒收或死亡整鱼、鱼体有记录的实际直接环境去向；识别物种、头内脏鳃状态、原始质量、事件、受纳水体及适用管理或许可证据。不规定为合法处置路线。移出器官或血液、废水组分、送处理鱼、有意产品及库存分开；同一物料不重复计数，也不改记为捕捞阶段损失。

- 选定流：在 chill 实际释放入水的死亡整鱼或鱼体物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_chill_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_chill_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_chill_actual_dead_fish_release
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：保护性整理包装 (`present`)

按实际事件、阶段、交接编号及日期时间记录本节点；保留物理质量库存账、资源所有权和独立 LCA 归属视图，未激活条件不默认产生交换。

#### 输入

##### 产品流

###### 实际内部收取的固态水冰 (`present_internal_ice_receipt`)

仅接收另一实际节点转交的固态水冰，按冰状态、物理质量和交接编号与来源节点 internal_water 输出的冰分项配对。不是外购 fixed ice、液态收水、同节点自制冰或第二份冰制造负荷；handover 节点本卡仅收非随鱼批次运行冰，随鱼批次冰由 handover_material_receipt 所有，互斥不可重复。

- 选定流：实际内部收取的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：按 cp_present_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_mass`
- 数量范围：可替换宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入保护性整理包装的鱼 (`present_fish_receipt`)

实际配对的包装前产品整理分级冷藏状态；处理顺序来自事件记录，而非节点列表。

- 选定流：进入保护性整理包装的鱼
- 流属性/单位：Mass / kg
- 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际中国平均电网低压电力 (`present_cn_power`)

仅真实交付用户的中国平均电网低于 1 kV 交流电，以有证据千瓦时换算为 MJ；不是船载柴油发电、其他电压、绿电合同或其他国家。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_present_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他实际电力供应 (`present_other_power`)

仅真实独立供应组合电压电力；船载自发电记辅助能量账，其发电燃料排放只归属一次，不作第二份外购电力负荷。

- 选定流：其他实际电力供应
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_present_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 匹配的外供处理工业用水 (`present_treated_water`)

仅用途匹配的真实外供处理工业用水产品，不是原海淡水取水、饮用水声明或总循环量。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他供应水或配对内部收水 (`present_other_water`)

实际外供液态水按处理来源状态识别，或同组成质量配对内部液态收水；固态冰由本节点 internal_ice_receipt 接收。拆分来源，避免与直接取水及内部循环通量重复；handover 随鱼批次水由 handover_material_receipt 所有，本卡仅非随批次运行收水。

- 选定流：其他供应水或配对内部收水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购捕捞登陆冷却用冰 (`present_ice`)

仅实际外购用于捕捞船上登陆非冻结处理的水冰；自制冰记录水和制造能量一次及内部账，不加第二份外购冰上游负荷。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际直接取水 (`present_abstracted_water`)

实际按来源介质直接取水，排除外购供应和循环通量；计量或以校准泵时流量计算，不强制淡水。

- 选定流：实际直接取水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 单独计量的液态水 (`present_internal_water_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_present_mass`

###### 单独计量的固态水冰 (`present_internal_water_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_present_mass`



###### 向后转交的整理包装鱼 (`present_fish_transfer`)

测得不含包材冰水的鱼净质量，记录实际头内脏鳃分级冷藏状态和交接；包装不创造食用接受。

- 选定流：向后转交的整理包装鱼
- 流属性/单位：Mass / kg
- 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 包装呈现期间实际交处理的拒收鱼 (`present_actual_fish_treatment`)

仅限本道次实际送有记录处理接收方的整鱼或鱼体，保留状态、原因、原始质量及事件。不是一次性包材废物、有意验收其他产品、环境释放或身份不明待检库存；验收失败不删除负担。

- 选定流：包装呈现期间实际交处理的拒收鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_present_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_present_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_present_actual_fish_treatment
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际向大气排放的化石二氧化碳 (`present_fossil_co2`)

仅节点所有真实燃料燃烧的直接化石二氧化碳，适配时排至未指定大气；用实际燃料碳氧化化石比例或可追溯直接测量，无统一因子、不重标生物呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_present_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_emissions`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有证据的向大气蒸发水 (`present_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅本节点有测量或验证模型支持的蒸发水，不作任意质量补平项，不把全部用水等于消耗。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_present_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 在 present 实际放归环境水体的存活鱼 (`present_actual_live_fish_return`)

仅在本道次实际接收存活鱼且确实放归已识别存活个体时启用：保留物种、整鱼及头内脏鳃状态、存活证据、原始实测质量、事件或道次及时间、受纳水体和适用许可或情境。此节点对实际接收后的放归负责，不回填为捕捞留存前放归，也不虚构返向转移。与继续转出产品、废物和期末库存互斥；不假定放归、存活系数或抵扣。

- 选定流：在 present 实际放归环境水体的存活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_present_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_present_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_present_actual_live_fish_return
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 在 present 实际释放入水的死亡整鱼或鱼体物料 (`present_actual_dead_fish_release`)

仅限本道次拒收或死亡整鱼、鱼体有记录的实际直接环境去向；识别物种、头内脏鳃状态、原始质量、事件、受纳水体及适用管理或许可证据。不规定为合法处置路线。移出器官或血液、废水组分、送处理鱼、有意产品及库存分开；同一物料不重复计数，也不改记为捕捞阶段损失。

- 选定流：在 present 实际释放入水的死亡整鱼或鱼体物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_present_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_present_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_present_actual_dead_fish_release
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：首次生产者食用交接 (`handover`)

按实际事件、阶段、交接编号及日期时间记录本节点；保留物理质量库存账、资源所有权和独立 LCA 归属视图，未激活条件不默认产生交换。

#### 输入

##### 产品流

###### 实际内部收取的固态水冰 (`handover_internal_ice_receipt`)

仅接收另一实际节点转交的固态水冰，按冰状态、物理质量和交接编号与来源节点 internal_water 输出的冰分项配对。不是外购 fixed ice、液态收水、同节点自制冰或第二份冰制造负荷；handover 节点本卡仅收非随鱼批次运行冰，随鱼批次冰由 handover_material_receipt 所有，互斥不可重复。

- 选定流：实际内部收取的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handover_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_mass`
- 数量范围：可替换宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 首次生产者交接接收的鱼 (`handover_fish_receipt`)

完成必要自身整理和接受后，精确接收最后实际处理节点的鱼；在最终分母选定前保留测得物理质量。

- 选定流：首次生产者交接接收的鱼
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际中国平均电网低压电力 (`handover_cn_power`)

仅真实交付用户的中国平均电网低于 1 kV 交流电，以有证据千瓦时换算为 MJ；不是船载柴油发电、其他电压、绿电合同或其他国家。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_handover_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他实际电力供应 (`handover_other_power`)

仅真实独立供应组合电压电力；船载自发电记辅助能量账，其发电燃料排放只归属一次，不作第二份外购电力负荷。

- 选定流：其他实际电力供应
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_handover_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 匹配的外供处理工业用水 (`handover_treated_water`)

仅用途匹配的真实外供处理工业用水产品，不是原海淡水取水、饮用水声明或总循环量。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他供应水或配对内部收水 (`handover_other_water`)

实际外供液态水按处理来源状态识别，或同组成质量配对内部液态收水；固态冰由本节点 internal_ice_receipt 接收。拆分来源，避免与直接取水及内部循环通量重复；handover 随鱼批次水由 handover_material_receipt 所有，本卡仅非随批次运行收水。

- 选定流：其他供应水或配对内部收水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购捕捞登陆冷却用冰 (`handover_ice`)

仅实际外购用于捕捞船上登陆非冻结处理的水冰；自制冰记录水和制造能量一次及内部账，不加第二份外购冰上游负荷。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际直接取水 (`handover_abstracted_water`)

实际按来源介质直接取水，排除外购供应和循环通量；计量或以校准泵时流量计算，不强制淡水。

- 选定流：实际直接取水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 单独计量的液态水 (`handover_internal_water_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover_mass`

###### 单独计量的固态水冰 (`handover_internal_water_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover_mass`



###### 单独计量的液态水 (`handover_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover_mass`

###### 单独计量的固态水冰 (`handover_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover_mass`



###### 首次生产者交接的野生带头去内脏食用金枪鱼和鲣鱼 (`handover_final`)

真实首次生产者食用交接接受的带头去内脏金枪鱼属或 Katsuwonus pelamis 鱼体净质量；注明鳃保留移除，不重构整鱼、不含包材游离水冰及移出内脏。

- 选定流：首次生产者交接的野生带头去内脏食用金枪鱼和鲣鱼
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover_mass`
- 数量范围：参考量定义；实际批次仍需称重
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 交接拒收后实际交废物的物料 (`handover_waste`)

仅实际拒收失败并交废物的鱼或材料及接收方；不抹去失败批次负荷，不把待定退回物作最终产品。

- 选定流：交接拒收后实际交废物的物料
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际向大气排放的化石二氧化碳 (`handover_fossil_co2`)

仅节点所有真实燃料燃烧的直接化石二氧化碳，适配时排至未指定大气；用实际燃料碳氧化化石比例或可追溯直接测量，无统一因子、不重标生物呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handover_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_emissions`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有证据的向大气蒸发水 (`handover_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅本节点有测量或验证模型支持的蒸发水，不作任意质量补平项，不把全部用水等于消耗。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_handover_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 在 handover 实际释放入水的死亡整鱼或鱼体物料 (`handover_actual_dead_fish_release`)

仅限本道次拒收或死亡整鱼、鱼体有记录的实际直接环境去向；识别物种、头内脏鳃状态、原始质量、事件、受纳水体及适用管理或许可证据。不规定为合法处置路线。移出器官或血液、废水组分、送处理鱼、有意产品及库存分开；同一物料不重复计数，也不改记为捕捞阶段损失。

- 选定流：在 handover 实际释放入水的死亡整鱼或鱼体物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依 cp_handover_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：按 conditional_interface_envelopes 采用真实身份及单位的独立包络；证据不足保持未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_handover_actual_dead_fish_release
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：实际集鱼装置与浮标服务 (`fad_service`)

按实际事件、阶段、交接编号及日期时间记录本节点；保留物理质量库存账、资源所有权和独立 LCA 归属视图，未激活条件不默认产生交换。

#### 输入

##### 产品流

###### 实际中国平均电网低压电力 (`fad_service_cn_power`)

仅真实交付用户的中国平均电网低于 1 kV 交流电，以有证据千瓦时换算为 MJ；不是船载柴油发电、其他电压、绿电合同或其他国家。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_fad_service_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_fad_service_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他实际电力供应 (`fad_service_other_power`)

仅真实独立供应组合电压电力；船载自发电记辅助能量账，其发电燃料排放只归属一次，不作第二份外购电力负荷。

- 选定流：其他实际电力供应
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_fad_service_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_fad_service_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 实际向大气排放的化石二氧化碳 (`fad_service_fossil_co2`)

仅节点所有真实燃料燃烧的直接化石二氧化碳，适配时排至未指定大气；用实际燃料碳氧化化石比例或可追溯直接测量，无统一因子、不重标生物呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_fad_service_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_fad_service_emissions`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：共享船舶港口资产及未分割服务 (`shared_resources`)

按实际事件、阶段、交接编号及日期时间记录本节点；保留物理质量库存账、资源所有权和独立 LCA 归属视图，未激活条件不默认产生交换。

#### 输入

##### 产品流

###### 实际内部收取的固态水冰 (`shared_resources_internal_ice_receipt`)

仅接收另一实际节点转交的固态水冰，按冰状态、物理质量和交接编号与来源节点 internal_water 输出的冰分项配对。不是外购 fixed ice、液态收水、同节点自制冰或第二份冰制造负荷；handover 节点本卡仅收非随鱼批次运行冰，随鱼批次冰由 handover_material_receipt 所有，互斥不可重复。

- 选定流：实际内部收取的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：按 cp_shared_resources_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_shared_resources_mass`
- 数量范围：可替换宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际中国平均电网低压电力 (`shared_resources_cn_power`)

仅真实交付用户的中国平均电网低于 1 kV 交流电，以有证据千瓦时换算为 MJ；不是船载柴油发电、其他电压、绿电合同或其他国家。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_shared_resources_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_shared_resources_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他实际电力供应 (`shared_resources_other_power`)

仅真实独立供应组合电压电力；船载自发电记辅助能量账，其发电燃料排放只归属一次，不作第二份外购电力负荷。

- 选定流：其他实际电力供应
- 流属性/单位：Net calorific value / MJ
- 数量规则：按 cp_shared_resources_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_shared_resources_energy`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 匹配的外供处理工业用水 (`shared_resources_treated_water`)

仅用途匹配的真实外供处理工业用水产品，不是原海淡水取水、饮用水声明或总循环量。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_shared_resources_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他供应水或配对内部收水 (`shared_resources_other_water`)

实际外供液态水按处理来源状态识别，或同组成质量配对内部液态收水；固态冰由本节点 internal_ice_receipt 接收。拆分来源，避免与直接取水及内部循环通量重复；handover 随鱼批次水由 handover_material_receipt 所有，本卡仅非随批次运行收水。

- 选定流：其他供应水或配对内部收水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_shared_resources_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购捕捞登陆冷却用冰 (`shared_resources_ice`)

仅实际外购用于捕捞船上登陆非冻结处理的水冰；自制冰记录水和制造能量一次及内部账，不加第二份外购冰上游负荷。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_shared_resources_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际直接取水 (`shared_resources_abstracted_water`)

实际按来源介质直接取水，排除外购供应和循环通量；计量或以校准泵时流量计算，不强制淡水。

- 选定流：实际直接取水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_shared_resources_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 单独计量的液态水 (`shared_resources_internal_water_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared_resources_mass`

###### 单独计量的固态水冰 (`shared_resources_internal_water_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared_resources_mass`



##### 废物流

##### 基本流

###### 实际向大气排放的化石二氧化碳 (`shared_resources_fossil_co2`)

仅节点所有真实燃料燃烧的直接化石二氧化碳，适配时排至未指定大气；用实际燃料碳氧化化石比例或可追溯直接测量，无统一因子、不重标生物呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定（`fixed`）
- 流属性/单位：Mass / kg
- 数量规则：按 cp_shared_resources_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_shared_resources_emissions`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有证据的向大气蒸发水 (`shared_resources_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅本节点有测量或验证模型支持的蒸发水，不作任意质量补平项，不把全部用水等于消耗。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_shared_resources_mass`
- 数量范围：可替换的宽泛暂定筛选估计，不是默认数量或允许界限
  - 范围角色：QA 筛查（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `physical_then_lca` | all inventory | 保留两个标记视图：未分配物理接收转移产出损失库存及节点时期共用资源一次归属，之后按正数接受最终净公斤归一；另保留单输出 LCA 归属清单负荷及分配矩阵。输出份额仅作用于相关负荷归属交换，不缩减鱼体器官水物理分区，不在下游交接再分配。 |  |
| `attribution_order` | bait_supply; capture; conditioning; grade; present; handover | 先分割独立计量责任并归属直接预期产品负荷。对真正联合剩余负荷，仅在该渔业处理边界有论证时用物理因果关系，否则对实际接受产量及同交接可比价值在声明期内一致经济分配并作不确定敏感性。保留边界分子分母零值处理和替代敏感性，不虚构零负荷替代或生态抵扣。 |  |
| `output_set` | bait_supply; capture; conditioning; grade; present; handover | 在真实外部交接枚举目标其他渔获、独立器官下脚料钓饵产品及接受其他等级。内部转移不创造新预期输出。废物活体放回死亡排放保留库存及随产品物理包材分开分类，移除器官本身不证明共产品。 |  |
| `trip_period_assets` | capture; fad_service; shared_resources | 声明航次批次作业期边界及真实阶段：出航搜索捕捞处理返航闲置清洁维护、集鱼装置浮标布放回收更换退役、船舶港口资产服务。无产出期保留于相应作业负荷池，不除零或删除。使用观察服务能力时间使用及期初期末库存，无统一寿命；定量定稿前解决更换退役证据缺口。 |  |
| `shared_once` | all nodes | 逐一对共享船舶发电机冷库港口设施集鱼装置浮标外购服务识别真实使用者时期，记录计量分割或有依据能力时间份额，份额核对至完整所有池并扣除已含直接责任。重复处理阶段不继承第二份制造负荷或重复输出分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bait_supply_mass` | `bait_supply` | 材料转移和库存 | measured material/stock record | 物种材料；湿质量；头内脏鳃状态；活死；来源去向；事件阶段交接编号；时间；等级接受；期初期末库存；真实最终接受净公斤；水冰包材排除；测量不确定度 | 校准秤计量仪或可追溯实测供应接收记录，真实状态分类事实与数值数量分开，配对交接并保留水冰组织钓饵材料所有去向。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_bait_supply_energy` | `bait_supply` | 能量燃料所有权 | energy record | 燃料材料组成；供应；计量期初期末；MJ 或 kWh；发电燃料产出；真实使用节点时期；服务已含范围；完整航次阶段；真实最终接受净公斤 | 读取校准燃料能量表储罐库存供应记录，自发电另记并防止燃料加自发电重复负荷，保留真实换算证据。 | MJ; kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_bait_supply_service` | `bait_supply` | 真实供应服务单位 | service record | 供应者；任务范围；发票数量；真实功能单位；属性单位支撑；已含资源清单；使用方；服务时期；资产使用寿命；份额；真实最终接受净公斤 | 保留真实供应发票功能单位及包含清单范围，记录使用者时期能力时间使用，不虚构公斤服务或静默未决支撑。 | actual service unit | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_bait_supply_emissions` | `bait_supply` | 真实物质介质排放 | emissions record | 物质种态粒径；混合物组分关系；介质；实际燃料碳化石比例氧化或直接释放测量；因子来源单位；事件；不确定度；真实最终接受净公斤 | 使用可追溯实际直接测量或有记录物质特定燃料过程模型，保留因子来源单位不确定度，拆分真实混合身份但不将总量组分重复。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_capture_mass` | `capture` | 材料转移和库存 | measured material/stock record | 物种材料；湿质量；头内脏鳃状态；活死；来源去向；事件阶段交接编号；时间；等级接受；期初期末库存；真实最终接受净公斤；水冰包材排除；测量不确定度 | 校准秤计量仪或可追溯实测供应接收记录，真实状态分类事实与数值数量分开，配对交接并保留水冰组织钓饵材料所有去向。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_capture_energy` | `capture` | 能量燃料所有权 | energy record | 燃料材料组成；供应；计量期初期末；MJ 或 kWh；发电燃料产出；真实使用节点时期；服务已含范围；完整航次阶段；真实最终接受净公斤 | 读取校准燃料能量表储罐库存供应记录，自发电另记并防止燃料加自发电重复负荷，保留真实换算证据。 | MJ; kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_capture_service` | `capture` | 真实供应服务单位 | service record | 供应者；任务范围；发票数量；真实功能单位；属性单位支撑；已含资源清单；使用方；服务时期；资产使用寿命；份额；真实最终接受净公斤 | 保留真实供应发票功能单位及包含清单范围，记录使用者时期能力时间使用，不虚构公斤服务或静默未决支撑。 | actual service unit | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_capture_emissions` | `capture` | 真实物质介质排放 | emissions record | 物质种态粒径；混合物组分关系；介质；实际燃料碳化石比例氧化或直接释放测量；因子来源单位；事件；不确定度；真实最终接受净公斤 | 使用可追溯实际直接测量或有记录物质特定燃料过程模型，保留因子来源单位不确定度，拆分真实混合身份但不将总量组分重复。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_conditioning_mass` | `conditioning` | 材料转移和库存 | measured material/stock record | 物种材料；湿质量；头内脏鳃状态；活死；来源去向；事件阶段交接编号；时间；等级接受；期初期末库存；真实最终接受净公斤；水冰包材排除；测量不确定度 | 校准秤计量仪或可追溯实测供应接收记录，真实状态分类事实与数值数量分开，配对交接并保留水冰组织钓饵材料所有去向。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_conditioning_energy` | `conditioning` | 能量燃料所有权 | energy record | 燃料材料组成；供应；计量期初期末；MJ 或 kWh；发电燃料产出；真实使用节点时期；服务已含范围；完整航次阶段；真实最终接受净公斤 | 读取校准燃料能量表储罐库存供应记录，自发电另记并防止燃料加自发电重复负荷，保留真实换算证据。 | MJ; kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_conditioning_service` | `conditioning` | 真实供应服务单位 | service record | 供应者；任务范围；发票数量；真实功能单位；属性单位支撑；已含资源清单；使用方；服务时期；资产使用寿命；份额；真实最终接受净公斤 | 保留真实供应发票功能单位及包含清单范围，记录使用者时期能力时间使用，不虚构公斤服务或静默未决支撑。 | actual service unit | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_conditioning_emissions` | `conditioning` | 真实物质介质排放 | emissions record | 物质种态粒径；混合物组分关系；介质；实际燃料碳化石比例氧化或直接释放测量；因子来源单位；事件；不确定度；真实最终接受净公斤 | 使用可追溯实际直接测量或有记录物质特定燃料过程模型，保留因子来源单位不确定度，拆分真实混合身份但不将总量组分重复。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_grade_mass` | `grade` | 材料转移和库存 | measured material/stock record | 物种材料；湿质量；头内脏鳃状态；活死；来源去向；事件阶段交接编号；时间；等级接受；期初期末库存；真实最终接受净公斤；水冰包材排除；测量不确定度 | 校准秤计量仪或可追溯实测供应接收记录，真实状态分类事实与数值数量分开，配对交接并保留水冰组织钓饵材料所有去向。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_grade_energy` | `grade` | 能量燃料所有权 | energy record | 燃料材料组成；供应；计量期初期末；MJ 或 kWh；发电燃料产出；真实使用节点时期；服务已含范围；完整航次阶段；真实最终接受净公斤 | 读取校准燃料能量表储罐库存供应记录，自发电另记并防止燃料加自发电重复负荷，保留真实换算证据。 | MJ; kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_grade_service` | `grade` | 真实供应服务单位 | service record | 供应者；任务范围；发票数量；真实功能单位；属性单位支撑；已含资源清单；使用方；服务时期；资产使用寿命；份额；真实最终接受净公斤 | 保留真实供应发票功能单位及包含清单范围，记录使用者时期能力时间使用，不虚构公斤服务或静默未决支撑。 | actual service unit | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_grade_emissions` | `grade` | 真实物质介质排放 | emissions record | 物质种态粒径；混合物组分关系；介质；实际燃料碳化石比例氧化或直接释放测量；因子来源单位；事件；不确定度；真实最终接受净公斤 | 使用可追溯实际直接测量或有记录物质特定燃料过程模型，保留因子来源单位不确定度，拆分真实混合身份但不将总量组分重复。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_chill_mass` | `chill` | 材料转移和库存 | measured material/stock record | 物种材料；湿质量；头内脏鳃状态；活死；来源去向；事件阶段交接编号；时间；等级接受；期初期末库存；真实最终接受净公斤；水冰包材排除；测量不确定度 | 校准秤计量仪或可追溯实测供应接收记录，真实状态分类事实与数值数量分开，配对交接并保留水冰组织钓饵材料所有去向。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_chill_energy` | `chill` | 能量燃料所有权 | energy record | 燃料材料组成；供应；计量期初期末；MJ 或 kWh；发电燃料产出；真实使用节点时期；服务已含范围；完整航次阶段；真实最终接受净公斤 | 读取校准燃料能量表储罐库存供应记录，自发电另记并防止燃料加自发电重复负荷，保留真实换算证据。 | MJ; kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_chill_service` | `chill` | 真实供应服务单位 | service record | 供应者；任务范围；发票数量；真实功能单位；属性单位支撑；已含资源清单；使用方；服务时期；资产使用寿命；份额；真实最终接受净公斤 | 保留真实供应发票功能单位及包含清单范围，记录使用者时期能力时间使用，不虚构公斤服务或静默未决支撑。 | actual service unit | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_chill_emissions` | `chill` | 真实物质介质排放 | emissions record | 物质种态粒径；混合物组分关系；介质；实际燃料碳化石比例氧化或直接释放测量；因子来源单位；事件；不确定度；真实最终接受净公斤 | 使用可追溯实际直接测量或有记录物质特定燃料过程模型，保留因子来源单位不确定度，拆分真实混合身份但不将总量组分重复。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_present_mass` | `present` | 材料转移和库存 | measured material/stock record | 物种材料；湿质量；头内脏鳃状态；活死；来源去向；事件阶段交接编号；时间；等级接受；期初期末库存；真实最终接受净公斤；水冰包材排除；测量不确定度 | 校准秤计量仪或可追溯实测供应接收记录，真实状态分类事实与数值数量分开，配对交接并保留水冰组织钓饵材料所有去向。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_present_energy` | `present` | 能量燃料所有权 | energy record | 燃料材料组成；供应；计量期初期末；MJ 或 kWh；发电燃料产出；真实使用节点时期；服务已含范围；完整航次阶段；真实最终接受净公斤 | 读取校准燃料能量表储罐库存供应记录，自发电另记并防止燃料加自发电重复负荷，保留真实换算证据。 | MJ; kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_present_service` | `present` | 真实供应服务单位 | service record | 供应者；任务范围；发票数量；真实功能单位；属性单位支撑；已含资源清单；使用方；服务时期；资产使用寿命；份额；真实最终接受净公斤 | 保留真实供应发票功能单位及包含清单范围，记录使用者时期能力时间使用，不虚构公斤服务或静默未决支撑。 | actual service unit | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_present_emissions` | `present` | 真实物质介质排放 | emissions record | 物质种态粒径；混合物组分关系；介质；实际燃料碳化石比例氧化或直接释放测量；因子来源单位；事件；不确定度；真实最终接受净公斤 | 使用可追溯实际直接测量或有记录物质特定燃料过程模型，保留因子来源单位不确定度，拆分真实混合身份但不将总量组分重复。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_handover_mass` | `handover` | 材料转移和库存 | measured material/stock record | 物种材料；湿质量；头内脏鳃状态；活死；来源去向；事件阶段交接编号；时间；等级接受；期初期末库存；真实最终接受净公斤；水冰包材排除；测量不确定度 | 校准秤计量仪或可追溯实测供应接收记录，真实状态分类事实与数值数量分开，配对交接并保留水冰组织钓饵材料所有去向。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_handover_energy` | `handover` | 能量燃料所有权 | energy record | 燃料材料组成；供应；计量期初期末；MJ 或 kWh；发电燃料产出；真实使用节点时期；服务已含范围；完整航次阶段；真实最终接受净公斤 | 读取校准燃料能量表储罐库存供应记录，自发电另记并防止燃料加自发电重复负荷，保留真实换算证据。 | MJ; kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_handover_service` | `handover` | 真实供应服务单位 | service record | 供应者；任务范围；发票数量；真实功能单位；属性单位支撑；已含资源清单；使用方；服务时期；资产使用寿命；份额；真实最终接受净公斤 | 保留真实供应发票功能单位及包含清单范围，记录使用者时期能力时间使用，不虚构公斤服务或静默未决支撑。 | actual service unit | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_handover_emissions` | `handover` | 真实物质介质排放 | emissions record | 物质种态粒径；混合物组分关系；介质；实际燃料碳化石比例氧化或直接释放测量；因子来源单位；事件；不确定度；真实最终接受净公斤 | 使用可追溯实际直接测量或有记录物质特定燃料过程模型，保留因子来源单位不确定度，拆分真实混合身份但不将总量组分重复。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_fad_service_mass` | `fad_service` | 材料转移和库存 | measured material/stock record | 物种材料；湿质量；头内脏鳃状态；活死；来源去向；事件阶段交接编号；时间；等级接受；期初期末库存；真实最终接受净公斤；水冰包材排除；测量不确定度 | 校准秤计量仪或可追溯实测供应接收记录，真实状态分类事实与数值数量分开，配对交接并保留水冰组织钓饵材料所有去向。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_fad_service_energy` | `fad_service` | 能量燃料所有权 | energy record | 燃料材料组成；供应；计量期初期末；MJ 或 kWh；发电燃料产出；真实使用节点时期；服务已含范围；完整航次阶段；真实最终接受净公斤 | 读取校准燃料能量表储罐库存供应记录，自发电另记并防止燃料加自发电重复负荷，保留真实换算证据。 | MJ; kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_fad_service_service` | `fad_service` | 真实供应服务单位 | service record | 供应者；任务范围；发票数量；真实功能单位；属性单位支撑；已含资源清单；使用方；服务时期；资产使用寿命；份额；真实最终接受净公斤 | 保留真实供应发票功能单位及包含清单范围，记录使用者时期能力时间使用，不虚构公斤服务或静默未决支撑。 | actual service unit | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_fad_service_emissions` | `fad_service` | 真实物质介质排放 | emissions record | 物质种态粒径；混合物组分关系；介质；实际燃料碳化石比例氧化或直接释放测量；因子来源单位；事件；不确定度；真实最终接受净公斤 | 使用可追溯实际直接测量或有记录物质特定燃料过程模型，保留因子来源单位不确定度，拆分真实混合身份但不将总量组分重复。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_shared_resources_mass` | `shared_resources` | 材料转移和库存 | measured material/stock record | 物种材料；湿质量；头内脏鳃状态；活死；来源去向；事件阶段交接编号；时间；等级接受；期初期末库存；真实最终接受净公斤；水冰包材排除；测量不确定度 | 校准秤计量仪或可追溯实测供应接收记录，真实状态分类事实与数值数量分开，配对交接并保留水冰组织钓饵材料所有去向。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_shared_resources_energy` | `shared_resources` | 能量燃料所有权 | energy record | 燃料材料组成；供应；计量期初期末；MJ 或 kWh；发电燃料产出；真实使用节点时期；服务已含范围；完整航次阶段；真实最终接受净公斤 | 读取校准燃料能量表储罐库存供应记录，自发电另记并防止燃料加自发电重复负荷，保留真实换算证据。 | MJ; kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_shared_resources_service` | `shared_resources` | 真实供应服务单位 | service record | 供应者；任务范围；发票数量；真实功能单位；属性单位支撑；已含资源清单；使用方；服务时期；资产使用寿命；份额；真实最终接受净公斤 | 保留真实供应发票功能单位及包含清单范围，记录使用者时期能力时间使用，不虚构公斤服务或静默未决支撑。 | actual service unit | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |
| `cp_shared_resources_emissions` | `shared_resources` | 真实物质介质排放 | emissions record | 物质种态粒径；混合物组分关系；介质；实际燃料碳化石比例氧化或直接释放测量；因子来源单位；事件；不确定度；真实最终接受净公斤 | 使用可追溯实际直接测量或有记录物质特定燃料过程模型，保留因子来源单位不确定度，拆分真实混合身份但不将总量组分重复。 | kg | 每个真实事件阶段交接及期末 | 完整航次及代表作业服务期，包括返航无产出清洁维护更换退役 | 本真实节点及其供应接收方 | 每 1 kg 参考流 | 校准溯源、完整批次、事件配对、供应发票、实际接受证据及独立 QA 数据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `physical_normalization` | all inventory rows | 先以真实期初接收转移产出损失期末库存闭合未分配账并使共享节点时期资源只归属一次；之后除正数接受最终净公斤。独立 LCA 归属视图按第 7 节仅一次施加相关输出份额，保留原账矩阵且不缩减质量分区。 | actual node records; accepted final net kg; allocation matrix | per 1 kg reference flow |  |
| `carcass_partition` | conditioning | 实际整鱼接收加期初鱼等于本道次互斥的真实部分整理或已完成去内脏带头鱼转移、移出器官血鳃各去向、拒收损失及期末鱼；水包材分账。物理质量先未分配，保留鳃组织在鱼体而不再列移出，溶血混合组分不得重复。 | cp_conditioning_mass; paired transfers | physical closure and actual yield |  |
| `cold_history` | grade; chill; handover | 按同批物种捕捞死亡处理交接时间连续拼接温度记录、偏离及适用接受证据；缺失区间不默认为受控，后续降温不逆转历史；无固定数值阈值。 | actual lot history; instruments; acceptance decision | traceable state and acceptance gap decision | fda-histamine-2024 |
| `water_fates` | all inventory rows | 对真实供应取水内部配对冰融水分账，逐期核对产品携带、转移、处理、向真实介质排水、有证据蒸发及库存；循环通量不是新取水，污染组分与混合物流量分别核对不重复。 | actual node mass and fate records | water/ice physical balance and identity-specific discharges |  |
| `direct_emissions` | all inventory rows | 用实际单物质测量或真实燃料碳组成化石比例氧化及有来源因子计算；保留模型代数单位原始因子与独立验证及不确定度，因子不由流 UUID 推导。 | node-specific emission protocol; actual fuel; factor/source | actual substance-specific release |  |
| `range_replacement` | all inventory rows | 暂定上界仅用于初筛，不是允许限值或用量填充值。对每个真实身份状态节点单位使用独立历史作业样本或匹配供应数据建立有记录包络及不确定度；不能以本批最大值验证本批。缺失经验支撑保留缺口，异常调查而不截断。 | independent campaign/supplier data; actual node protocol | independent QA envelope or explicit evidence gap |  |
| conditional_interface_envelopes | conditioning_actual_live_fish_return; conditioning_actual_dead_fish_release; grade_actual_live_fish_return; grade_actual_dead_fish_release; chill_actual_live_fish_return; chill_actual_dead_fish_release; present_actual_live_fish_return; present_actual_dead_fish_release; handover_actual_dead_fish_release; conditioning_partially_prepared_fish; present_actual_alternative_fish_product; present_actual_fish_treatment | 对每项列明条件角色，定量 QA 前实例化真实身份、状态、节点、道次、分子单位及匹配正最终公斤。U_<row_id> 是同分子单位、明确标明实物或 LCA 视图的非负有限上界，由独立代表作业期最大值乘预声明且 >=1 的裕量，或匹配独立供方或设计包络建立。保留独立来源或原始样本、范围、换算、分母、视图及不确定性，不用目标批次自身最大值验证自身。符号、旧暂定筛选界限或检查器通过不提供数值证据。服务单位、属性和单位组缺口仍阻断定稿；真实处理公斤仅在核实供方原生参考后可用。不截断或虚构零。 | 独立作业期或供方证据；真实角色和单位；最终公斤；声明视图 | 独立证据 U 上界或明确未决缺口 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_gate` | handover_final | 物种学名野生来源带头去内脏非冻结实际鳃等级接受及首次交接证据齐全；未知不能默认为通过。 | 渔获物种鉴定、原始处理接受交接记录 |
| `mass_and_fates` | all inventory rows | 保持实际湿质量、配对交接、互斥去向库存测量不确定度；临时范围不代替真实数据。 | 校准记录、收发库存账、独立 QA 数据 |
| `cold_trace` | grade; chill; handover | 同批捕捞至交接时间温度历史和偏离接受有证据，缺失明确，不认证安全。 | 传感器校准及原始时间温度、适用接受决定 |
| `periods_services` | all nodes | 完整航次失败无产出返航清洁维护更换退役及真实服务包含范围，声明各资源所有权。 | 航次活动、资产寿命使用、发票及归属矩阵 |
| `quantitative_release` | all inventory rows | 具体交换需真实数量明确属性单位核实身份及其证据，汇总未决卡不是最终交换；披露各缺口和覆盖。 | 实际数量、身份细节、支撑数据及缺口表 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_bait_supply_feed` | `bait_supply`; 输入; 产品流 | 必须辨认并分别采集“实际钓饵维持饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅有限钓饵维持实际使用的饲料，按配方及供应负荷识别；不是金枪鱼养成日粮。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_oxygen` | `bait_supply`; 输入; 产品流 | 必须辨认并分别采集“实际交付的钓饵维持氧气”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅真实外供、交付状态明确的氧气；曝气空气不是瓶装氧。单独确认身份和质量换算。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_fuel` | `bait_supply`; 输入; 产品流 | 必须辨认并分别采集“实际单独归属燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅本节点真实燃料组成供应，排除其他节点或服务已含燃料；capture 包含归属的出航搜索捕捞失败事件返航，未另归属共用燃料仅由 shared_resources 所有。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_consumables` | `bait_supply`; 输入; 产品流 | 必须辨认并分别采集“实际清洁及运行消耗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按配方用途识别真实清洁消毒滤材等，排除独立钓饵饲料包材燃料资产材料；不暗示强制化学处理。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_incidental_biomass` | `bait_supply`; 输入; 基本流 | 必须辨认并分别采集“自捕钓饵中的实际兼捕生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：在自捕钓饵事件中实际移出的非钓饵目标或兼捕物种；逐一对应保留预期产品活体放回死亡释放处理去向，不计背景生物存在。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_wild_bait` | `bait_supply`; 输入; 基本流 | 必须辨认并分别采集“实际移出的野生钓饵生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物种、事件和水域记录自捕钓饵的实际移出；仅天然存在不算移出。保留自捕钓饵资源和兼捕。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_supplied` | `bait_supply`; 输出; 产品流 | 必须辨认并分别采集“自捕并供金枪鱼捕捞的钓饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用相同交接编号、物种状态和质量与 capture 收饵配对，保留上游资源责任；自有钓饵不是无负荷。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_other_catch` | `bait_supply`; 输出; 产品流 | 必须辨认并分别采集“钓饵渔业其他预期产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际接受的独立预期产品，注明买方用途和交接；不是兼捕丢弃生物的汇总。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_internal_water` | `bait_supply`; 输出; 产品流 | 必须辨认并分别采集“实际内部转交的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：用事件阶段交接编号状态与接收节点精确配对，不是外部取水销售排放；排除已含其他材料转移的水冰。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_mortality_waste` | `bait_supply`; 输出; 废物流 | 必须辨认并分别采集“送处理的死亡及未用钓饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料及处理记录交付废物接收方的死亡或未用钓饵；排除退回库存、产品销售和实际环境释放。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_operating_waste` | `bait_supply`; 输出; 废物流 | 必须辨认并分别采集“实际废运行材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按接收方记录真实废容器滤材清洁残留等，排除独立包装内脏渔具制冷剂维护废物。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_live_return` | `bait_supply`; 输出; 基本流 | 必须辨认并分别采集“放回水域的活钓饵或兼捕生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物种状态、接收水体和事件记录真实活体放回；无避免生产或生态抵扣，不与保留生物量重复。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_dead_release` | `bait_supply`; 输出; 基本流 | 必须辨认并分别采集“释放至水体的死亡钓饵渔业生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物种及水体记录实际死亡生物量释放，与活体放回、废物处理分开；记录许可背景，不假定允许。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_other_air` | `bait_supply`; 输出; 基本流 | 必须辨认并分别采集“其他实际具体物质大气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质种态粒径介质拆分真实尾气或过程污染物，保留节点燃料因子证据；NOx、VOC或颗粒物汇总不是精确身份，排除独立化石二氧化碳及 chill 制冷剂。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_emissions` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_water_discharge` | `bait_supply`; 输出; 基本流 | 必须辨认并分别采集“实际向环境排水及组分释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际接收介质及独立识别组分，包括实际直接排水；水冰融水污染物组织不能在组分与混合物清单重复，需测量模型去向及真实管理背景。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_gear_material` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际捕捞渔具材料接收”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际接收的网钩线及小艇渔具维护材料，保留物理期初期末库存去向；可复用制造按真实服务记录归属，不按每网全新渔具；集鱼装置组件留 fad_service。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_purchased_bait` | `capture`; 输入; 产品流 | 必须辨认并分别采集“外购捕捞钓饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际依赖钓饵的渔具，识别物种材料活性及供应生产准备运输；拆分具体身份，围网不强制用饵。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_own_bait` | `capture`; 输入; 产品流 | 必须辨认并分别采集“接收的自捕钓饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：与 bait_supply_supplied 精确配对，不是外购饵或第二次野生移出；供饵负荷仅归属一次。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_fuel` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际单独归属燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅本节点真实燃料组成供应，排除其他节点或服务已含燃料；capture 包含归属的出航搜索捕捞失败事件返航，未另归属共用燃料仅由 shared_resources 所有。 流属性/单位：Mass / kg 数量规则：按 cp_capture_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_consumables` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际清洁及运行消耗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按配方用途识别真实清洁消毒滤材等，排除独立钓饵饲料包材燃料资产材料；不暗示强制化学处理。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_incidental_biomass` | `capture`; 输入; 基本流 | 必须辨认并分别采集“实际移出的兼捕海洋生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅按物种状态记录实际移出或卷入的非目标生物量；无可量化移出交换的逃逸或单纯相互作用记辅助账。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_other_products` | `capture`; 输出; 产品流 | 必须辨认并分别采集“其他实际预期渔获产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际买方用途交接记录保留的非参考物种或其他独立销售渔获；售养殖的野生活鱼不属于参考范围。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_unused_bait_product` | `capture`; 输出; 产品流 | 必须辨认并分别采集“回收可用钓饵的转交或销售”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际回收或未花用的可用钓饵向独立产品接收方交付；仍在船内持有的是库存，不是输出。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_internal_water` | `capture`; 输出; 产品流 | 必须辨认并分别采集“实际内部转交的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：用事件阶段交接编号状态与接收节点精确配对，不是外部取水销售排放；排除已含其他材料转移的水冰。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_retired_gear_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“回收退役渔具交处理”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际回收废损渔具材料交处理，区别保留可用渔具库存及海上丢失，保留接收方资产时期证据。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_bait_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“送废物处理的回收钓饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际回收或未花用后交处理的钓饵，核对来源，不能把使用量当作消失。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_operating_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“实际废运行材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按接收方记录真实废容器滤材清洁残留等，排除独立包装内脏渔具制冷剂维护废物。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_live_release` | `capture`; 输出; 基本流 | 必须辨认并分别采集“实际放回的目标或兼捕活渔获”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：以物种状态事件接收水域识别保留前活体放回，不同时列作死亡丢弃或最终输出。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_bait_release` | `capture`; 输出; 基本流 | 必须辨认并分别采集“实际释放至海洋环境的钓饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际释放丢失或被野生生物取食的钓饵，识别材料及接收水域，与船内库存回收分开；使用有证据的去向观察或明确不确定模型。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_lost_gear` | `capture`; 输出; 基本流 | 必须辨认并分别采集“实际遗失至水体的渔具材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料事件接收介质记录网线钩等真实丢失，排除回收废物及 fad_service 所有的集鱼装置材料，无幽灵捕捞负抵扣。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_other_air` | `capture`; 输出; 基本流 | 必须辨认并分别采集“其他实际具体物质大气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质种态粒径介质拆分真实尾气或过程污染物，保留节点燃料因子证据；NOx、VOC或颗粒物汇总不是精确身份，排除独立化石二氧化碳及 chill 制冷剂。 流属性/单位：Mass / kg 数量规则：按 cp_capture_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_emissions` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_water_discharge` | `capture`; 输出; 基本流 | 必须辨认并分别采集“实际向环境排水及组分释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际接收介质及独立识别组分，包括实际直接排水；水冰融水污染物组织不能在组分与混合物清单重复，需测量模型去向及真实管理背景。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_packaging_receipt` | `conditioning`; 输入; 产品流 | 必须辨认并分别采集“随鱼批次物理接收的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅真实从紧前处理节点随批次接收的保护包材，按交接编号物理材料质量配对；不是新外购、鱼净质量或第二份上游制造负荷。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_fuel` | `conditioning`; 输入; 产品流 | 必须辨认并分别采集“实际单独归属燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅本节点真实燃料组成供应，排除其他节点或服务已含燃料；capture 包含归属的出航搜索捕捞失败事件返航，未另归属共用燃料仅由 shared_resources 所有。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_consumables` | `conditioning`; 输入; 产品流 | 必须辨认并分别采集“实际清洁及运行消耗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按配方用途识别真实清洁消毒滤材等，排除独立钓饵饲料包材燃料资产材料；不暗示强制化学处理。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_packaging_transfer` | `conditioning`; 输出; 产品流 | 必须辨认并分别采集“随鱼批次物理转交的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅真实留在批次并交下一实际节点的材料，配对数量编号；自有保留可复用容器留库存。材料质量与可复用制造归属及最终鱼质量分开。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_organ_product` | `conditioning`; 输出; 产品流 | 必须辨认并分别采集“实际销售的肝卵或其他移出器官”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按组织状态接收方交接拆分真实销售接受的器官或下脚料钓饵产品；不凭价值假设自动视为共产品。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_internal_water` | `conditioning`; 输出; 产品流 | 必须辨认并分别采集“实际内部转交的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：用事件阶段交接编号状态与接收节点精确配对，不是外部取水销售排放；排除已含其他材料转移的水冰。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_packaging_waste` | `conditioning`; 输出; 废物流 | 必须辨认并分别采集“实际拆除并交处理的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅真实拆除并交处理的包材及材料接收方；不是仍随鱼包材保留复用容器运行消耗废物或销售可用材料。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_organ_waste` | `conditioning`; 输出; 废物流 | 必须辨认并分别采集“交处理的移出内脏鳃和血”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按接收方拆分实际组织血液废物转移；不重复计入已在废水中测得的溶血或售为产品的组织。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_operating_waste` | `conditioning`; 输出; 废物流 | 必须辨认并分别采集“实际废运行材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按接收方记录真实废容器滤材清洁残留等，排除独立包装内脏渔具制冷剂维护废物。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_other_air` | `conditioning`; 输出; 基本流 | 必须辨认并分别采集“其他实际具体物质大气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质种态粒径介质拆分真实尾气或过程污染物，保留节点燃料因子证据；NOx、VOC或颗粒物汇总不是精确身份，排除独立化石二氧化碳及 chill 制冷剂。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_emissions` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_water_discharge` | `conditioning`; 输出; 基本流 | 必须辨认并分别采集“实际向环境排水及组分释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际接收介质及独立识别组分，包括实际直接排水；水冰融水污染物组织不能在组分与混合物清单重复，需测量模型去向及真实管理背景。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_packaging_receipt` | `grade`; 输入; 产品流 | 必须辨认并分别采集“随鱼批次物理接收的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅真实从紧前处理节点随批次接收的保护包材，按交接编号物理材料质量配对；不是新外购、鱼净质量或第二份上游制造负荷。 流属性/单位：Mass / kg 数量规则：按 cp_grade_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_fuel` | `grade`; 输入; 产品流 | 必须辨认并分别采集“实际单独归属燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅本节点真实燃料组成供应，排除其他节点或服务已含燃料；capture 包含归属的出航搜索捕捞失败事件返航，未另归属共用燃料仅由 shared_resources 所有。 流属性/单位：Mass / kg 数量规则：按 cp_grade_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_consumables` | `grade`; 输入; 产品流 | 必须辨认并分别采集“实际清洁及运行消耗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按配方用途识别真实清洁消毒滤材等，排除独立钓饵饲料包材燃料资产材料；不暗示强制化学处理。 流属性/单位：Mass / kg 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_packaging_transfer` | `grade`; 输出; 产品流 | 必须辨认并分别采集“随鱼批次物理转交的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅真实留在批次并交下一实际节点的材料，配对数量编号；自有保留可复用容器留库存。材料质量与可复用制造归属及最终鱼质量分开。 流属性/单位：Mass / kg 数量规则：按 cp_grade_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_other_product` | `grade`; 输出; 产品流 | 必须辨认并分别采集“其他预期等级或去向产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际独立接受的较低食用等级或非参考产品，记录用途状态接收方；转养活鱼或非食用钓饵独立分类且不进参考分母。 流属性/单位：Mass / kg 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_internal_water` | `grade`; 输出; 产品流 | 必须辨认并分别采集“实际内部转交的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：用事件阶段交接编号状态与接收节点精确配对，不是外部取水销售排放；排除已含其他材料转移的水冰。 流属性/单位：Mass / kg 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_packaging_waste` | `grade`; 输出; 废物流 | 必须辨认并分别采集“实际拆除并交处理的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅真实拆除并交处理的包材及材料接收方；不是仍随鱼包材保留复用容器运行消耗废物或销售可用材料。 流属性/单位：Mass / kg 数量规则：按 cp_grade_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_operating_waste` | `grade`; 输出; 废物流 | 必须辨认并分别采集“实际废运行材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按接收方记录真实废容器滤材清洁残留等，排除独立包装内脏渔具制冷剂维护废物。 流属性/单位：Mass / kg 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_other_air` | `grade`; 输出; 基本流 | 必须辨认并分别采集“其他实际具体物质大气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质种态粒径介质拆分真实尾气或过程污染物，保留节点燃料因子证据；NOx、VOC或颗粒物汇总不是精确身份，排除独立化石二氧化碳及 chill 制冷剂。 流属性/单位：Mass / kg 数量规则：按 cp_grade_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_emissions` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_water_discharge` | `grade`; 输出; 基本流 | 必须辨认并分别采集“实际向环境排水及组分释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际接收介质及独立识别组分，包括实际直接排水；水冰融水污染物组织不能在组分与混合物清单重复，需测量模型去向及真实管理背景。 流属性/单位：Mass / kg 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_packaging_receipt` | `chill`; 输入; 产品流 | 必须辨认并分别采集“随鱼批次物理接收的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅真实从紧前处理节点随批次接收的保护包材，按交接编号物理材料质量配对；不是新外购、鱼净质量或第二份上游制造负荷。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_refrigerant` | `chill`; 输入; 产品流 | 必须辨认并分别采集“实际制冷剂补充”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：识别真实制冷剂种类及补入量，补入不全是排放；核对期初期末库存回收及测得泄漏。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_fuel` | `chill`; 输入; 产品流 | 必须辨认并分别采集“实际单独归属燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅本节点真实燃料组成供应，排除其他节点或服务已含燃料；capture 包含归属的出航搜索捕捞失败事件返航，未另归属共用燃料仅由 shared_resources 所有。 流属性/单位：Mass / kg 数量规则：按 cp_chill_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_consumables` | `chill`; 输入; 产品流 | 必须辨认并分别采集“实际清洁及运行消耗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按配方用途识别真实清洁消毒滤材等，排除独立钓饵饲料包材燃料资产材料；不暗示强制化学处理。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_packaging_transfer` | `chill`; 输出; 产品流 | 必须辨认并分别采集“随鱼批次物理转交的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅真实留在批次并交下一实际节点的材料，配对数量编号；自有保留可复用容器留库存。材料质量与可复用制造归属及最终鱼质量分开。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_internal_water` | `chill`; 输出; 产品流 | 必须辨认并分别采集“实际内部转交的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：用事件阶段交接编号状态与接收节点精确配对，不是外部取水销售排放；排除已含其他材料转移的水冰。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_packaging_waste` | `chill`; 输出; 废物流 | 必须辨认并分别采集“实际拆除并交处理的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅真实拆除并交处理的包材及材料接收方；不是仍随鱼包材保留复用容器运行消耗废物或销售可用材料。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得真实数量并保持未分配物理账和共用节点时期资源一次归属；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节一次归属并保留原账矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_recovered_refrigerant` | `chill`; 输出; 废物流 | 必须辨认并分别采集“回收废制冷剂交处理”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：真实回收物交处理，不同时作大气泄漏；可用回收品销售需独立产品分类。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_operating_waste` | `chill`; 输出; 废物流 | 必须辨认并分别采集“实际废运行材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按接收方记录真实废容器滤材清洁残留等，排除独立包装内脏渔具制冷剂维护废物。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_refrigerant_release` | `chill`; 输出; 基本流 | 必须辨认并分别采集“实际向大气泄漏的制冷剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际单物质或混合组分确认身份及大气介质；用维护充注平衡及不确定度，不用统一泄漏率。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_other_air` | `chill`; 输出; 基本流 | 必须辨认并分别采集“其他实际具体物质大气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质种态粒径介质拆分真实尾气或过程污染物，保留节点燃料因子证据；NOx、VOC或颗粒物汇总不是精确身份，排除独立化石二氧化碳及 chill 制冷剂。 流属性/单位：Mass / kg 数量规则：按 cp_chill_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_emissions` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_water_discharge` | `chill`; 输出; 基本流 | 必须辨认并分别采集“实际向环境排水及组分释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际接收介质及独立识别组分，包括实际直接排水；水冰融水污染物组织不能在组分与混合物清单重复，需测量模型去向及真实管理背景。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_present_materials` | `present`; 输入; 产品流 | 必须辨认并分别采集“实际包装与保护材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分实际布套内衬箱标签等材料及供应状态和重复使用所有权；记录实际外购或带配对交接编号的紧前内部收材，共用可复用制造服务归属留资产账，已包含上游材料不再添加第二份制造负荷。 流属性/单位：Mass / kg 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_present_fuel` | `present`; 输入; 产品流 | 必须辨认并分别采集“实际单独归属燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅本节点真实燃料组成供应，排除其他节点或服务已含燃料；capture 包含归属的出航搜索捕捞失败事件返航，未另归属共用燃料仅由 shared_resources 所有。 流属性/单位：Mass / kg 数量规则：按 cp_present_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_present_consumables` | `present`; 输入; 产品流 | 必须辨认并分别采集“实际清洁及运行消耗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按配方用途识别真实清洁消毒滤材等，排除独立钓饵饲料包材燃料资产材料；不暗示强制化学处理。 流属性/单位：Mass / kg 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_present_materials_transfer` | `present`; 输出; 产品流 | 必须辨认并分别采集“随鱼物理转交的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际一次性或转移所有权包材质量与 handover 收材或下一实际节点配对，独立于参考鱼；保留可复用容器是库存，不虚构销售质量。 流属性/单位：Mass / kg 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_present_internal_water` | `present`; 输出; 产品流 | 必须辨认并分别采集“实际内部转交的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：用事件阶段交接编号状态与接收节点精确配对，不是外部取水销售排放；排除已含其他材料转移的水冰。 流属性/单位：Mass / kg 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_present_actual_alternative_fish_product` | `present`; 输出; 产品流 | 必须辨认并分别采集“在 present 实际独立验收的非参考鱼产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅限具物种、真实鱼体形态状态用途、实测质量及外部接收交接的实际独立有意并验收的其他鱼输出。与参考产品、较早外售、废物、直接释放及待检库存互斥。仅检验失败或假想价值不构成共产品；保留自身输出归属证据及真实交接门。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：依 cp_present_mass 采集本角色实际数量：先闭合未分配实物接收、转移、产出、损失与库存，共用节点或期间资源仅归属一次，再按第 8 节除以正最终验收净鱼体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次，保留实物账及分配矩阵，不以输出份额缩减质量分区。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_present_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_present_waste` | `present`; 输出; 废物流 | 必须辨认并分别采集“包装拒收物及废保护材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料接收方记录实际处置物，排除跨交接包材及保留可复用库存。 流属性/单位：Mass / kg 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_present_operating_waste` | `present`; 输出; 废物流 | 必须辨认并分别采集“实际废运行材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按接收方记录真实废容器滤材清洁残留等，排除独立包装内脏渔具制冷剂维护废物。 流属性/单位：Mass / kg 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_present_other_air` | `present`; 输出; 基本流 | 必须辨认并分别采集“其他实际具体物质大气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质种态粒径介质拆分真实尾气或过程污染物，保留节点燃料因子证据；NOx、VOC或颗粒物汇总不是精确身份，排除独立化石二氧化碳及 chill 制冷剂。 流属性/单位：Mass / kg 数量规则：按 cp_present_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_emissions` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_present_water_discharge` | `present`; 输出; 基本流 | 必须辨认并分别采集“实际向环境排水及组分释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际接收介质及独立识别组分，包括实际直接排水；水冰融水污染物组织不能在组分与混合物清单重复，需测量模型去向及真实管理背景。 流属性/单位：Mass / kg 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_material_receipt` | `handover`; 输入; 产品流 | 必须辨认并分别采集“随批次接收的包装或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅带配对编号从紧前节点随鱼批次转移的实际包材固态冰游离水；此卡拥有随批次材料收货，handover_other_water 仅拥有不随鱼批次的节点运行收水，互斥不可重复。不是新外购或第二份负荷。 流属性/单位：Mass / kg 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_fuel` | `handover`; 输入; 产品流 | 必须辨认并分别采集“实际单独归属燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅本节点真实燃料组成供应，排除其他节点或服务已含燃料；capture 包含归属的出航搜索捕捞失败事件返航，未另归属共用燃料仅由 shared_resources 所有。 流属性/单位：Mass / kg 数量规则：按 cp_handover_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_consumables` | `handover`; 输入; 产品流 | 必须辨认并分别采集“实际清洁及运行消耗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按配方用途识别真实清洁消毒滤材等，排除独立钓饵饲料包材燃料资产材料；不暗示强制化学处理。 流属性/单位：Mass / kg 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_other_products` | `handover`; 输出; 产品流 | 必须辨认并分别采集“交接时其他独立接受产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际非参考预期产品及形态用途接收方，包括不重叠的已接受物种等级；不进参考分母，不重复更早外部输出。 流属性/单位：Mass / kg 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_packaging` | `handover`; 输出; 产品流 | 必须辨认并分别采集“实际跨首次生产者交接的包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅测得转移包材质量，独立于参考鱼及可复用资产制造责任；不自动作为经济分配共产品。 流属性/单位：Mass / kg 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_ice_transfer` | `handover`; 输出; 产品流 | 必须辨认并分别采集“实际跨交接的冰或游离水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：随交付实际冰或游离水单独识别称量计量，排除鱼净质量及排水处理去向。 流属性/单位：Mass / kg 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_internal_water` | `handover`; 输出; 产品流 | 必须辨认并分别采集“实际内部转交的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：用事件阶段交接编号状态与接收节点精确配对，不是外部取水销售排放；排除已含其他材料转移的水冰。 流属性/单位：Mass / kg 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_operating_waste` | `handover`; 输出; 废物流 | 必须辨认并分别采集“实际废运行材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按接收方记录真实废容器滤材清洁残留等，排除独立包装内脏渔具制冷剂维护废物。 流属性/单位：Mass / kg 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_other_air` | `handover`; 输出; 基本流 | 必须辨认并分别采集“其他实际具体物质大气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质种态粒径介质拆分真实尾气或过程污染物，保留节点燃料因子证据；NOx、VOC或颗粒物汇总不是精确身份，排除独立化石二氧化碳及 chill 制冷剂。 流属性/单位：Mass / kg 数量规则：按 cp_handover_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_emissions` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_water_discharge` | `handover`; 输出; 基本流 | 必须辨认并分别采集“实际向环境排水及组分释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际接收介质及独立识别组分，包括实际直接排水；水冰融水污染物组织不能在组分与混合物清单重复，需测量模型去向及真实管理背景。 流属性/单位：Mass / kg 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fad_service_materials` | `fad_service`; 输入; 产品流 | 必须辨认并分别采集“实际集鱼装置建造更换材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：识别服务期实际接收的筏网绳锚浮标组件；按观察服务寿命和使用归属制造，不假定每网全资产质量。 流属性/单位：Mass / kg 数量规则：按 cp_fad_service_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_fad_service_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fad_service_battery` | `fad_service`; 输入; 产品流 | 必须辨认并分别采集“实际浮标电池或供电材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际电池更换材料的化学体系供应库存服务记录；太阳能运行不等于零制造责任，不自动千瓦时换公斤。 流属性/单位：Mass / kg 数量规则：按 cp_fad_service_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_fad_service_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fad_service_fuel` | `fad_service`; 输入; 产品流 | 必须辨认并分别采集“实际单独归属燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅本节点真实燃料组成供应，排除其他节点或服务已含燃料；capture 包含归属的出航搜索捕捞失败事件返航，未另归属共用燃料仅由 shared_resources 所有。 流属性/单位：Mass / kg 数量规则：按 cp_fad_service_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_fad_service_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fad_service_retrieved_product` | `fad_service`; 输出; 产品流 | 必须辨认并分别采集“转移其他所有者的可用集鱼装置材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际外部转交的可用资产组件及剩余寿命接收方；自有回收重布资产留库存服务账。 流属性/单位：Mass / kg 数量规则：按 cp_fad_service_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_fad_service_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fad_service_waste` | `fad_service`; 输出; 废物流 | 必须辨认并分别采集“回收退役集鱼装置浮标材料交处理”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际回收废损组件电池及明确处理，与可用转售回收库存海上丢失分开。 流属性/单位：Mass / kg 数量规则：按 cp_fad_service_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_fad_service_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fad_service_lost_material` | `fad_service`; 输出; 基本流 | 必须辨认并分别采集“实际遗失至海洋的集鱼装置浮标材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按地点日期回收努力接收介质记录真实组件材料丢失，保留事件资产关联，无假定年损失或环境抵扣。 流属性/单位：Mass / kg 数量规则：按 cp_fad_service_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_fad_service_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fad_service_other_air` | `fad_service`; 输出; 基本流 | 必须辨认并分别采集“其他实际具体物质大气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质种态粒径介质拆分真实尾气或过程污染物，保留节点燃料因子证据；NOx、VOC或颗粒物汇总不是精确身份，排除独立化石二氧化碳及 chill 制冷剂。 流属性/单位：Mass / kg 数量规则：按 cp_fad_service_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_fad_service_emissions` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_shared_resources_asset_material` | `shared_resources`; 输入; 产品流 | 必须辨认并分别采集“共享船舶港口更换维护材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产使用节点和时期记录实际更换维护材料；资产隐含负荷与物理材料使用及供应服务分开核对。 流属性/单位：Mass / kg 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_shared_resources_fuel` | `shared_resources`; 输入; 产品流 | 必须辨认并分别采集“实际单独归属燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅本节点真实燃料组成供应，排除其他节点或服务已含燃料；capture 包含归属的出航搜索捕捞失败事件返航，未另归属共用燃料仅由 shared_resources 所有。 流属性/单位：Mass / kg 数量规则：按 cp_shared_resources_energy 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_shared_resources_consumables` | `shared_resources`; 输入; 产品流 | 必须辨认并分别采集“实际清洁及运行消耗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按配方用途识别真实清洁消毒滤材等，排除独立钓饵饲料包材燃料资产材料；不暗示强制化学处理。 流属性/单位：Mass / kg 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_shared_resources_asset_product` | `shared_resources`; 输出; 产品流 | 必须辨认并分别采集“实际售出的可用退役资产材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：真实接受的可用设备材料外售及接收方状态；保留资产是库存，不自动避免产品抵扣。 流属性/单位：Mass / kg 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_shared_resources_internal_water` | `shared_resources`; 输出; 产品流 | 必须辨认并分别采集“实际内部转交的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：用事件阶段交接编号状态与接收节点精确配对，不是外部取水销售排放；排除已含其他材料转移的水冰。 流属性/单位：Mass / kg 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_shared_resources_operating_waste` | `shared_resources`; 输出; 废物流 | 必须辨认并分别采集“实际废运行材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按接收方记录真实废容器滤材清洁残留等，排除独立包装内脏渔具制冷剂维护废物。 流属性/单位：Mass / kg 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_shared_resources_other_air` | `shared_resources`; 输出; 基本流 | 必须辨认并分别采集“其他实际具体物质大气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质种态粒径介质拆分真实尾气或过程污染物，保留节点燃料因子证据；NOx、VOC或颗粒物汇总不是精确身份，排除独立化石二氧化碳及 chill 制冷剂。 流属性/单位：Mass / kg 数量规则：按 cp_shared_resources_emissions 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_emissions` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_shared_resources_water_discharge` | `shared_resources`; 输出; 基本流 | 必须辨认并分别采集“实际向环境排水及组分释放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际接收介质及独立识别组分，包括实际直接排水；水冰融水污染物组织不能在组分与混合物清单重复，需测量模型去向及真实管理背景。 流属性/单位：Mass / kg 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_supply_service` | `bait_supply`; inputs; product | 逐项识别并独立计量“实际外购节点服务”包含的实际交换；这些采集和换算责任全部适用：仅真实外购服务，逐供应者、任务、发票功能单位及包含资源拆分；服务单位不是材料公斤。最终交换前落实具体单位属性和核实身份，否则在辅助服务账保留真实发票量及未决支撑。 流属性/单位：Service quantity / service unit 数量规则：按 cp_bait_supply_service 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_service` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_bait_supply_water_waste` | `bait_supply`; outputs; waste | 逐项识别并独立计量“废水及收集清洗残留物交处理”包含的实际交换；这些采集和换算责任全部适用：按组成接收方记录真实废物转移，溶血仅计一次；混合物质量平衡与组分排放分开，不把直接环境排水作处理。 流属性/单位：Mass / kg 数量规则：按 cp_bait_supply_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_bait_supply_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_capture_service` | `capture`; inputs; product | 逐项识别并独立计量“实际外购节点服务”包含的实际交换；这些采集和换算责任全部适用：仅真实外购服务，逐供应者、任务、发票功能单位及包含资源拆分；服务单位不是材料公斤。最终交换前落实具体单位属性和核实身份，否则在辅助服务账保留真实发票量及未决支撑。 流属性/单位：Service quantity / service unit 数量规则：按 cp_capture_service 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_service` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_capture_water_waste` | `capture`; outputs; waste | 逐项识别并独立计量“废水及收集清洗残留物交处理”包含的实际交换；这些采集和换算责任全部适用：按组成接收方记录真实废物转移，溶血仅计一次；混合物质量平衡与组分排放分开，不把直接环境排水作处理。 流属性/单位：Mass / kg 数量规则：按 cp_capture_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_capture_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_conditioning_service` | `conditioning`; inputs; product | 逐项识别并独立计量“实际外购节点服务”包含的实际交换；这些采集和换算责任全部适用：仅真实外购服务，逐供应者、任务、发票功能单位及包含资源拆分；服务单位不是材料公斤。最终交换前落实具体单位属性和核实身份，否则在辅助服务账保留真实发票量及未决支撑。 流属性/单位：Service quantity / service unit 数量规则：按 cp_conditioning_service 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_service` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_conditioning_water_waste` | `conditioning`; outputs; waste | 逐项识别并独立计量“废水及收集清洗残留物交处理”包含的实际交换；这些采集和换算责任全部适用：按组成接收方记录真实废物转移，溶血仅计一次；混合物质量平衡与组分排放分开，不把直接环境排水作处理。 流属性/单位：Mass / kg 数量规则：按 cp_conditioning_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_conditioning_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_grade_service` | `grade`; inputs; product | 逐项识别并独立计量“实际外购节点服务”包含的实际交换；这些采集和换算责任全部适用：仅真实外购服务，逐供应者、任务、发票功能单位及包含资源拆分；服务单位不是材料公斤。最终交换前落实具体单位属性和核实身份，否则在辅助服务账保留真实发票量及未决支撑。 流属性/单位：Service quantity / service unit 数量规则：按 cp_grade_service 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_service` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_grade_water_waste` | `grade`; outputs; waste | 逐项识别并独立计量“废水及收集清洗残留物交处理”包含的实际交换；这些采集和换算责任全部适用：按组成接收方记录真实废物转移，溶血仅计一次；混合物质量平衡与组分排放分开，不把直接环境排水作处理。 流属性/单位：Mass / kg 数量规则：按 cp_grade_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_grade_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_chill_service` | `chill`; inputs; product | 逐项识别并独立计量“实际外购节点服务”包含的实际交换；这些采集和换算责任全部适用：仅真实外购服务，逐供应者、任务、发票功能单位及包含资源拆分；服务单位不是材料公斤。最终交换前落实具体单位属性和核实身份，否则在辅助服务账保留真实发票量及未决支撑。 流属性/单位：Service quantity / service unit 数量规则：按 cp_chill_service 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_service` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_chill_water_waste` | `chill`; outputs; waste | 逐项识别并独立计量“废水及收集清洗残留物交处理”包含的实际交换；这些采集和换算责任全部适用：按组成接收方记录真实废物转移，溶血仅计一次；混合物质量平衡与组分排放分开，不把直接环境排水作处理。 流属性/单位：Mass / kg 数量规则：按 cp_chill_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_chill_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_present_service` | `present`; inputs; product | 逐项识别并独立计量“实际外购节点服务”包含的实际交换；这些采集和换算责任全部适用：仅真实外购服务，逐供应者、任务、发票功能单位及包含资源拆分；服务单位不是材料公斤。最终交换前落实具体单位属性和核实身份，否则在辅助服务账保留真实发票量及未决支撑。 流属性/单位：Service quantity / service unit 数量规则：按 cp_present_service 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_service` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_present_water_waste` | `present`; outputs; waste | 逐项识别并独立计量“废水及收集清洗残留物交处理”包含的实际交换；这些采集和换算责任全部适用：按组成接收方记录真实废物转移，溶血仅计一次；混合物质量平衡与组分排放分开，不把直接环境排水作处理。 流属性/单位：Mass / kg 数量规则：按 cp_present_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_present_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_handover_service` | `handover`; inputs; product | 逐项识别并独立计量“实际外购节点服务”包含的实际交换；这些采集和换算责任全部适用：仅真实外购服务，逐供应者、任务、发票功能单位及包含资源拆分；服务单位不是材料公斤。最终交换前落实具体单位属性和核实身份，否则在辅助服务账保留真实发票量及未决支撑。 流属性/单位：Service quantity / service unit 数量规则：按 cp_handover_service 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_service` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_handover_water_waste` | `handover`; outputs; waste | 逐项识别并独立计量“废水及收集清洗残留物交处理”包含的实际交换；这些采集和换算责任全部适用：按组成接收方记录真实废物转移，溶血仅计一次；混合物质量平衡与组分排放分开，不把直接环境排水作处理。 流属性/单位：Mass / kg 数量规则：按 cp_handover_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_handover_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_fad_service_service` | `fad_service`; inputs; product | 逐项识别并独立计量“实际外购节点服务”包含的实际交换；这些采集和换算责任全部适用：仅真实外购服务，逐供应者、任务、发票功能单位及包含资源拆分；服务单位不是材料公斤。最终交换前落实具体单位属性和核实身份，否则在辅助服务账保留真实发票量及未决支撑。 流属性/单位：Service quantity / service unit 数量规则：按 cp_fad_service_service 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_fad_service_service` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_shared_resources_service` | `shared_resources`; inputs; product | 逐项识别并独立计量“实际外购节点服务”包含的实际交换；这些采集和换算责任全部适用：仅真实外购服务，逐供应者、任务、发票功能单位及包含资源拆分；服务单位不是材料公斤。最终交换前落实具体单位属性和核实身份，否则在辅助服务账保留真实发票量及未决支撑。 流属性/单位：Service quantity / service unit 数量规则：按 cp_shared_resources_service 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_service` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_shared_resources_maintenance_waste` | `shared_resources`; outputs; waste | 逐项识别并独立计量“实际共享维护和退役废物”包含的实际交换；这些采集和换算责任全部适用：废油滤芯部件等真实维护废物按材料接收方拆分，不同时为可用产品或泄漏基本排放。 流属性/单位：Mass / kg 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_shared_resources_water_waste` | `shared_resources`; outputs; waste | 逐项识别并独立计量“废水及收集清洗残留物交处理”包含的实际交换；这些采集和换算责任全部适用：按组成接收方记录真实废物转移，溶血仅计一次；混合物质量平衡与组分排放分开，不把直接环境排水作处理。 流属性/单位：Mass / kg 数量规则：按 cp_shared_resources_mass 取得本卡实际接收、转移、产出、损失或资源量，保持未分配物理账并使共用节点时期资源仅归属一次；物理闭合后除正数接受最终净公斤；独立单输出 LCA 视图按第 7 节归属一次并保留未分配账及矩阵。 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集后计算（`calculated_from_collection`） 采集协议：`cp_shared_resources_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference_scope` | handover_final | 核对野生金枪鱼属或 Katsuwonus pelamis、保留头、已去内脏实际鳃状态、未冻结鲜冷藏、食用接受和真实首次生产者交接。其他鲣类养殖圈养活整未去内脏终品去头鱼片鱼柳鱼排内脏冻融加工品不进分母。 | `un-cpc3-notes` |
| `sequence_and_pairs` | all nodes | 每个选定节点重访有真实事件阶段交接编号，前后状态兼容且内部质量配对；最终交接前完成必要整理实际去向分级食用冷链历史证据，节点排列不替代证据。 |  |
| `physical_closure` | all nodes | 对鱼组织钓饵水冰包材运行材料分别核对未分配质量：期初加接收等于真实产出加损失加期末，在声明测量不确定度内。环境移出与外购供应内部转移分开，标记缺失去向，不用蒸发强行补平。 |  |
| `quantitative_gap` | all inventory | 每个真实身份单位状态节点有范围记录及独立 QA 包络。暂定筛选估计不是测量默认或接受允许限值，异常需调查而非截断假通过。真实数量经验支撑服务单位转换物质身份去向缺失保留数据缺口，未决汇总角色不能定稿定量交换。 |  |
| `cold_acceptance` | grade; chill; handover | 以适用且有记录市场主管要求和实际接受核对捕捞至交接真实连续历史，包括偏离纠正决定缺失时段。不产生通用阈值仅当前温度通过或食品安全认证。 | `fda-histamine-2024` |
| `ownership_allocation` | all nodes | 核对完整预期输出外部交接、直接分割联合归属优先顺序、同边界价值、真实生产模式清洁换批无产出返航期全部资产使用者。每所有池份额只覆盖一次，物理平衡保持未分配，下游份额不再应用。 |  |
| `gear_delta` | capture; bait_supply; fad_service | 逐事件校验真实渔具鱼群关联及钓饵小艇集鱼装置投入损失责任。不同渔具事件仅以不重叠渔获归属共存作业期。自捕饵保留自身捕捞维持资源，放回自然及保护物种说明无生态抵扣。 | `noaa-tuna-gear` |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 以前景实测为基础的野生带头去内脏金枪鱼鲣鱼生产数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅在物种来源形态首次交接实际技术时期一致且具体交换身份数量补齐后用于 process 或 lifecyclemodel 投影 |
| excluded_use | 不得作为全 CPC 叶等效、养殖活鱼未去内脏去头加工冻融产品、后商贩门、食品安全认证或未决数量的完整数据 |
| required_metadata | 物种产地水域日期、渔具鱼群关联、实际处理事件、净质量鳃状态、完整冷链接受、首次交接、航次作业期、产品集合、分配矩阵、供应服务及资产边界 |
| required_quality_disclosure | 真实数据覆盖、代表性校准不确定度、物理闭合、独立 QA 和暂定范围、未决身份属性单位数量、失败无产出及服务包含所有权 |
| update_trigger | 物种边界形态交接实际技术冷链接受或供应资产归属变化；补齐身份数量证据及经验范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes | official_guidance | United Nations Statistics Division. CPC Version 3.0 Explanatory Notes (30 June 2025), 04251. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类物种来源背景；拟议 PCR 更窄，不等同整叶范围。 |
| noaa-tuna-gear | official_guidance | NOAA Fisheries. West Coast Highly Migratory Species Fisheries and Gear. https://www.fisheries.noaa.gov/west-coast/sustainable-fisheries/west-coast-highly-migratory-species-fisheries-and-gear | 真实捕捞渔具变体定性背景；无统一围网集鱼装置路线或性能因子。 |
| noaa-yellowfin | official_guidance | NOAA Fisheries. Pacific Yellowfin Tuna. https://www.fisheries.noaa.gov/species/pacific-yellowfin-tuna | 仅物种区域渔具聚集例子，不作全球影响合法性燃料集鱼装置因子。 |
| fao-tuna-handling-2025 | official_guidance | FAO Common Oceans. First few minutes are key in handling tuna caught one-by-one (1 April 2025). https://www.fao.org/in-action/commonoceans/newsroom/news-and-stories/news-detail/first-few-minutes-are-key-in-handling-tuna-caught-one-by-one/en | 致死放血去内脏去鳃非冻结冷却保护性包装的定性路线；无数值默认或照搬统一顺序。 |
| fda-histamine-2024 | official_guidance | US FDA. FDA Issues Final Compliance Policy Guide for Scombrotoxin (Histamine)-forming Fish and Fishery Products (2024). https://www.fda.gov/food/hfp-constituent-updates/fda-issues-final-compliance-policy-guide-scombrotoxin-histamine-forming-fish-and-fishery-products | 仅风险历史理由：已形成组胺不能由后续清洗冻结加热移除；不将美国限值全球化。 |
