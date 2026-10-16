---
pcr_id: pcr.farmed-live-whole-flow-through-common-cuttlefish
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 流水养殖活体完整普通乌贼

## 1. 范围与适用性

本方法规定人工来源普通乌贼 Sepia officinalis 的前景数据生产：经过直接孵化幼体培育和海水流水养成，直至首次实际接收方验收完整、活体、从未冷冻、非观赏用途的动物。其范围窄于分类小类。实际交付活动必须有应用现场记录；不能据实验养殖研究宣称商业发运、盈利、食品健康、福利或法律资格。

Capaz 等记录了 Ramalhete 的人工卵、活草虾育苗饲料、解冻草虾养成饲料、砂滤／沉降海水与曝气／遮光。称重动物随后返回水池；繁殖与科研取样范围限制了证据的解释。试验年龄、体型、性别比例、饲料量、流量、池尺寸、温度、化学剂量、成本及时间均不是 PCR 默认值。这些来源背景事实仅支持路线拆解（`capaz-cuttlefish-2020`）。下述收集、保管和核算要求为明确声明的前瞻方法（`cuttlefish-accounting-method`），不是论文中的商业观测。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-flow-through-common-cuttlefish |
| classification_refs | cpc:3.0:04462；Farmed cuttle fish and squid, live, fresh or chilled；较窄方法范围 |
| covered_products | 人工来源 Sepia officinalis，经过直接孵化幼体培育与海水流水养成，以完整、活体、从未冷冻、非观赏状态交付 |
| excluded_products | 鱿鱼；其他乌贼物种；直接野生捕捞；观赏动物；鲜死、冷藏死亡、冷冻、干燥、盐渍、烟熏、去内脏或其他加工的最终动物；被当作交付的科研取样返回 |
| representative_product | 葡萄牙 Faro 的 Ramalhete 人工生产背景下普通乌贼 Sepia officinalis |
| production_route | 人工卵与投喂活草虾的直接孵化幼体培育；投喂解冻草虾的幼年／成年海水流水养成；应用特定独立收集、分级、实际有界暂养或有证据绕过、保护性呈现与实际接收 |
| market_state | 首次实际接收方处完整、活体、从未冷冻、非观赏用途动物；不作论文商业交付声明 |

## 3. 参考流

### 功能单位

| 字段 | 值 |
| --- | --- |
| What | 首次实际接收方验收的完整活体从未冷冻养殖 Sepia officinalis |
| How much | 1 kg 净动物湿质量；A 为同一已验收批次的正净质量，单位 kg |
| How well | 实际物种、人工谱系、完整身体、活体及从未冷冻状态、非观赏去向、验收等级和独立实际接收 |
| How long or cycle | 声明群体与报告期间，覆盖继承繁殖服务、卵／育苗、养成、失败期间、清洁、更换、期末库存、实际暂养和接收前保管；缩小为实际非繁殖期间须有证据 |
| reference_flow_link | `live_receipt_reference` |

### 参考流对象

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 首次实际接收方验收的完整活体从未冷冻养殖普通乌贼 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种; 人工谱系与接收阶段; 实际地点和报告／群体期间; 直接孵化幼体育苗和流水路线; 完整活体从未冷冻状态; 非观赏用途; 实际等级和独立数量／规格观察; 净动物湿质量方法与不确定性; 排除载水／自由水和皮重; 暂养 active/bypass/unknown 证据; 首次实际接收方和所有接收前路段; 繁殖／后代／亲体／库存负担台账 |

构建实际数据包时，必需限定信息须在元数据、产品说明、过程备注或等效记录中声明。缺失限定信息时参考定义不完整。最终交换使用前须独立核实真实产品及支持身份。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | A = 同批已验收完整活体动物净湿质量，单位 kg；在实际接收时独立采用校准称量与实际载水／自由水及包装皮重分离方法计量，动物原生本体水保留。记录操作与不确定性，不规定可能产生应激的科研方法；使用 cp_receipt。A 必须为正。 |
| live_count_mass | animal transfer and stocks | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留独立数量、规格／等级和活体状态观测。如由数量估算质量，采用同一实际批次／状态下有代表性活体样本的称量、抽样设计和不确定性；不得用物种平均体重或论文换算常数。 |
| native_units | all inventory rows | 实际原生属性 | 实际原生单位 | 逐交换以原生属性／单位计量；海水为 Volume/m3，电力为 Energy/kWh，资产服务时间为 h，货运为 t.km。分配和除以 A 前保留原生数量，不把全部交换强制转为 Mass，不以饲料湿质量代替营养物质量。 |
| paired_states | internal transfers and stocks | 实际原生属性 | 实际原生单位 | 匹配输出／输入标识、状态、数量、单位、批次、期间和继承负担。期初／期末库存及活体／包装／水返回保持同状态关联。差额需要实际损失或状态变化证据，非最终交接不能强制为 1 kg。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际记录的人工卵、孵化幼体、幼年个体或亲体以及期初动物／饲料／资产库存，具有谱系与继承负担；声明哪些阶段在场内发生 |
| starting_condition_role | 有证据的前景截断，保留上游繁殖、育苗、养成、饲料与物流服务，不能无来源截断 |
| product_classification_scope | CPC 3.0 04462 范围更广；本 PCR 仅覆盖一种人工来源物种、流水路线和完整活体从未冷冻边界 |
| recursive_input_rule | 按实际阶段／状态、数量和继承负担记录同类别接收或返回动物；在声明且有证据的供应方边界停止追溯，关联所需上游数据集或明确经审查的缺口，不无限递归或重置负担 |
| upstream_dataset_requirement | 供应方人工来源、繁殖／育苗服务、饲料捕捞／养殖和冷链、能源／水／材料／服务及取得运输数据集，或具有相容范围的原始证据 |
| disclosure | 实际地点、群体／期间、阶段覆盖、继承上游服务、全部失败与繁殖输出、库存、共享资产／服务寿命、暂养状态、全部接收前移动、分配、缺失记录与不确定性 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | foreground_route | 将来源支持的人工生产与应用记录证明的最终收集和实际接收区分。论文监测循环将动物返回，不能代表收获／销售。科研麻醉、性别鉴定、DNA、标记与破坏性取样不是生产处方。 | `capaz-cuttlefish-2020`; `cuttlefish-accounting-method` |
| boundary_phases | managed_culture | 全周期分配保留全部实际繁殖服务、卵、孵化幼体、亲体、失败群体、期初／期末库存和终止。保留的未孵化后代携带繁殖服务；更窄的实际非繁殖期间须有证明和继承上游负担。 | `cuttlefish-accounting-method` |
| boundary_holding | bounded_holding | 仅由观测区间／干预记录选择 active；bypass 须匹配分级直接至呈现交接。unknown 是缺口，不能是零或绕过。保留前后实际活体状态、投入和损失。 | `cuttlefish-accounting-method` |
| boundary_support | supporting services | 通过实测服务和分配建模实际砂滤、沉降、曝气／遮光及共享水池／过滤器／泵／曝气设备／饲料冷库。列出每个消费节点与期间。完整服务排除已覆盖组件／排放，组件模型排除完整服务。 | `capaz-cuttlefish-2020`; `cuttlefish-accounting-method` |
| boundary_gate | delivery | 边界是独立接收方首次实际验收完整活体动物，不论付款方。纳入此前每次移动、装卸、等待和失败交付；分别记录载水／包装及实际返回。排除后续使用和处置。 | `cuttlefish-accounting-method` |
| boundary_fate | all inventory rows | 每项条件性流卡仅依据实际实例展开为零、一项或多项具有原生属性／单位、状态、时间、去向和证据的交换。不使用须有证据；未知不等于零。配对内部水／物质／包装／动物交接和库存／返回台账，识别全部预期输出、实际损失、废物和环境排放，不虚构发生。 | `cuttlefish-accounting-method` |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| water_supply | 海水预处理与实际废水管理 | required | 来源背景为砂滤、沉降和曝气；保留实际废水路由 | 供水支持服务 | 声明海水及废水体积 |
| feed_preparation | 活草虾和解冻草虾的供应与准备 | required | 活体育苗饲料及来源为冷冻的解冻养成饲料；实际储存和清洁 | 前景饲料准备 | 实际供应状态下实测饲料 |
| managed_culture | 人工繁殖、直接孵化幼体培育与流水养成 | required | 实际人工起始条件与所有声称的生产阶段 | 受管理生物生产 | 实测完整活体动物、后代与库存 |
| final_collection | 从养殖环境独立实施非返回式收集 | required | 应用记录证明面向交付的移除，而非取样返回 | 独立收集 | 实测已收集完整活体动物 |
| grading | 实际活体产品分级与去向判定 | required | 已收集批次的实际分级和去向记录 | 分级与分选 | 实测合格、其他与返回状态 |
| bounded_holding | 分级后的有界活体暂养 | conditional | 仅观测到启止与干预的暂养为 active；bypass 需直接交接证据；unknown 阻止完成 | 活体状态保全 | 有界区间后实测完整活体动物 |
| presentation | 活体保护性呈现 | required | 发运前实际保护安排，包括有证据的可复用容器 | 包装与呈现 | 实测呈现动物以及另列水／包装 |
| delivery | 首次实际接收前的全部移动与验收 | required | 所有内部／外部接收前路段，无论付款方和所有权 | 交付与交接 | 1 kg 已验收活体完整动物净湿质量 |

每项条件性语义流卡仅由实际观测实例展开。输出／输入对共享交接标识和同一物理状态／原生数量；转交 water_supply 的水性废物在两侧均为废物。载水、包装、动物库存与返回独立于参考动物质量。条件性服务时间的原生单位为 h，而非材料质量。实际服务若使用其他原生属性／单位，须为该实例声明匹配的已核实属性和单位，不能强制塞入时间卡。

### 过程：海水预处理与实际废水管理（`water_supply`）

记录原始取水及另行购入的水、实际砂滤／沉降／曝气处理链、计量、水质、反冲洗以及每个用水阶段。本节点负责取水和实际处理，各接收节点负责其实际收到的供水。不得假定普遍存在废水处理或特定污染物。

#### 输入

##### 产品流

###### 该节点实际供应的电力（海水预处理与实际废水管理）（`water_supply_electricity`）

条件性计量本节点实际用电，保留电表区间、供应和分配。如用设备记录计算，逐实际实例保留实测功率／负载／运行时间、公式、因子与来源。

- 选定流：该节点实际供应的电力（海水预处理与实际废水管理）
- 流属性/单位：Energy / kWh
- 数量规则：逐项独立观测实际 kWh；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_supply`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_water_supply_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际接收的非电热量（海水预处理与实际废水管理）（`water_supply_heat`）

条件性逐项记录实际购入热／蒸汽能源服务的原生 MJ、状态、热量计量表或供应商能源数量、有用热边界和事件。若实际交换蒸汽／材料质量，须另保留其质量。排除完整服务已覆盖热量，不假定实际购买热量。

- 选定流：该节点实际接收的非电热量（海水预处理与实际废水管理）
- 流属性/单位：Energy / MJ
- 数量规则：逐项独立观测实际 MJ；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_supply`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_water_supply_heat
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 场内实际废水管理接收的水性废物（`incoming_effluent`）

仅当本节点实际管理来自 feed_preparation、managed_culture、final_collection、grading、bounded_holding、presentation 或 delivery 的废水时纳入；逐项展开每次匹配接收。作为废物交接时，两侧流类型均为 waste。

- 选定流：场内实际废水管理接收的水性废物
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_supply`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_incoming_effluent
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 实际从海洋环境抽取的海水（`raw_seawater`）

在环境边界计量原始海洋取水，其他节点不得重复该抽取。记录来源、体积、取水状态、季节和返回目的地。处理后供水是另一项技术系统内部交接。

- 选定流：实际从海洋环境抽取的海水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_supply`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_raw_seawater
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 向实际路线节点供应的预处理海水（`conditioned_seawater`）

分别计量向 managed_culture、feed_preparation、final_collection、bounded_holding 和 presentation 实际供给的同状态海水，保留交接标识及实测体积，不能由论文流量或水池尺寸推断需求。砂滤／沉降／曝气处理水在使用端不是新的环境取水。

- 选定流：向实际路线节点供应的预处理海水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_supply`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_conditioned_seawater
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际返回环境的处理或未处理水（`water_environment_return`）

条件性记录向实际海洋／淡水／土壤去向排放的实测水体积、处理状态及关联的进出水记录。该体积与另行量化的各具体物质的实际排放质量及向场外转移的废水分开。

- 选定流：场址水管理排出的载体水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_supply`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_water_environment_return
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：活草虾和解冻草虾的供应与准备（`feed_preparation`）

保留供应商提供的物种与捕捞／养殖来源、上游负担、活体或冷冻交货状态以及储存、解冻和准备过程。投喂量不等于摄食量。对所有实际饲料消费者和期间分配冷藏、准备、清洁和残余处理。

#### 输入

##### 产品流

###### 为孵化幼体饲料接收的活草虾（`received_live_shrimp`）

记录实际 Palaemonetes varians 身份、活体状态、批次湿质量、如使用则记录独立数量，以及捕捞或养殖来源、上游生产／捕捞、运输和损失。伴随载水另行记录。

- 选定流：为孵化幼体饲料接收的活草虾
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_preparation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_received_live_shrimp
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 为后续解冻饲料接收的冷冻草虾（`received_frozen_shrimp`）

记录实际虾身份、冷冻状态与净饲料湿质量、供应来源、上游负担、冷藏和既往加工。饲料冷冻不意味着参考动物经过冷冻。

- 选定流：为后续解冻饲料接收的冷冻草虾
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_preparation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_received_frozen_shrimp
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际购入或供应的饲料准备与清洁用水（`feed_water`）

条件性计量独立识别的淡水或海水供应、用途与状态。如来自 water_supply，匹配海水交接；购入水携带上游服务，不重复记作原始环境取水。

- 选定流：实际购入或供应的饲料准备与清洁用水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_preparation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_feed_water
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际供应的电力（活草虾和解冻草虾的供应与准备）（`feed_preparation_electricity`）

条件性计量本节点实际用电，保留电表区间、供应和分配。如用设备记录计算，逐实际实例保留实测功率／负载／运行时间、公式、因子与来源。

- 选定流：该节点实际供应的电力（活草虾和解冻草虾的供应与准备）
- 流属性/单位：Energy / kWh
- 数量规则：逐项独立观测实际 kWh；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed_preparation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_feed_preparation_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际接收的非电热量（活草虾和解冻草虾的供应与准备）（`feed_preparation_heat`）

条件性逐项记录实际购入热／蒸汽能源服务的原生 MJ、状态、热量计量表或供应商能源数量、有用热边界和事件。若实际交换蒸汽／材料质量，须另保留其质量。排除完整服务已覆盖热量，不假定实际购买热量。

- 选定流：该节点实际接收的非电热量（活草虾和解冻草虾的供应与准备）
- 流属性/单位：Energy / MJ
- 数量规则：逐项独立观测实际 MJ；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_preparation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_feed_preparation_heat
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 向直接孵化幼体培育供应的活草虾（`prepared_live_feed`）

向 managed_culture 匹配交接活体饲料，保留质量、状态、时间和批次；准备损失及饲料期初／期末库存另行记录。

- 选定流：向直接孵化幼体培育供应的活草虾
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_preparation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_prepared_live_feed
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向实际养殖或暂养供应的解冻草虾（`prepared_thawed_feed`）

向 managed_culture 匹配交接解冻状态饲料；仅有实际投喂证据时才供应 bounded_holding。各次交接单独实测并保留状态和批次。

- 选定流：向实际养殖或暂养供应的解冻草虾
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_preparation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_prepared_thawed_feed
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 该节点产生的实际水性废物（活草虾和解冻草虾的供应与准备）（`feed_preparation_aqueous_waste`）

条件性记录实际交至 water_supply 或场外处理接收方的水，在两侧匹配相同标识、状态、数量和期间。夹带组分单列；排除另行记录的直接环境排水。

- 选定流：该节点产生的实际水性废物（活草虾和解冻草虾的供应与准备）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_preparation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_feed_preparation_aqueous_waste
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 该节点直接向环境排放的实际水（活草虾和解冻草虾的供应与准备）（`feed_preparation_water_release`）

仅当本节点负责环境交接时，条件性记录实际直接排放体积、接收介质、水质、本底负荷和去向。排除仍向其他节点／处理交接的水、交给接收方的载水及另行量化的各具体物质的实际排放质量。

- 选定流：该节点直接向环境排放的实际水（活草虾和解冻草虾的供应与准备）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_preparation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_feed_preparation_water_release
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：人工繁殖、直接孵化幼体培育与流水养成（`managed_culture`）

分别索引人工卵供应与繁殖服务、投喂活草虾的直接孵化幼体培育，以及投喂解冻草虾的幼年／成年海水流水养成。台账须包含繁殖、可孵化和失败卵、亲体、死亡、监测返回、清洁、更换与终止。缩小为实际非繁殖期间须有证据，并继承上游服务负担。

#### 输入

##### 产品流

###### 向直接孵化幼体培育实际投喂的活草虾（`nursery_live_feed`）

按同状态接收 prepared_live_feed；将投喂量与摄食量独立区分，保留饲喂阶段、拒食／残余去向和来源。

- 选定流：向直接孵化幼体培育实际投喂的活草虾
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_nursery_live_feed
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养成或繁殖服务期间投喂的解冻草虾（`growout_thawed_feed`）

按同状态接收 prepared_thawed_feed，分别按阶段、群体和期间记录；不能将论文投喂率、饲料成本或试验时长作为清单默认值。

- 选定流：养成或繁殖服务期间投喂的解冻草虾
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_thawed_feed
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 人工养殖接收的预处理海水（`culture_seawater`）

匹配 conditioned_seawater 的接收计量、来源、实际处理、养殖阶段和期间。温度、盐度和氧仅为实际状态／水质观测，不是交换的动物质量或论文规定值。

- 选定流：人工养殖接收的预处理海水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_culture_seawater
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 监测后返回养殖的活体完整动物（`sampling_live_in`）

条件性与 sampling_live_out 匹配同一批动物；独立记录返回数量／状态及实际死亡或失踪动物。继承原有负担，不能重复作为动物产品输出或新增生产抵扣。

- 选定流：监测后返回养殖的活体完整动物
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sampling_live_in
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际供应的电力（人工繁殖、直接孵化幼体培育与流水养成）（`managed_culture_electricity`）

条件性计量本节点实际用电，保留电表区间、供应和分配。如用设备记录计算，逐实际实例保留实测功率／负载／运行时间、公式、因子与来源。

- 选定流：该节点实际供应的电力（人工繁殖、直接孵化幼体培育与流水养成）
- 流属性/单位：Energy / kWh
- 数量规则：逐项独立观测实际 kWh；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_managed_culture_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际接收的非电热量（人工繁殖、直接孵化幼体培育与流水养成）（`managed_culture_heat`）

条件性逐项记录实际购入热／蒸汽能源服务的原生 MJ、状态、热量计量表或供应商能源数量、有用热边界和事件。若实际交换蒸汽／材料质量，须另保留其质量。排除完整服务已覆盖热量，不假定实际购买热量。

- 选定流：该节点实际接收的非电热量（人工繁殖、直接孵化幼体培育与流水养成）
- 流属性/单位：Energy / MJ
- 数量规则：逐项独立观测实际 MJ；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_managed_culture_heat
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 从养殖交至最终收集的活体完整普通乌贼（`culture_to_collection`）

记录从实际生产环境向独立最终收集交接的动物阶段、活体状态、净湿质量和数量；单独计量该交接并保留后续损失，不能固定为 1 kg。

- 选定流：从养殖交至最终收集的活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_culture_to_collection
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 从养殖交至最终收集的实际既有载水（`culture_water_to_collection`）

条件性记录独立收集时伴随动物的既有养殖水，记录状态、体积、水质、时间和匹配 culture_water_collection_input 的标识。它不是新增供水或第二次环境取水；实际新增载水另有流卡。

- 选定流：从养殖交至最终收集的实际既有载水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_culture_water_to_collection
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 为实际监测暂时移出的活体完整动物（`sampling_live_out`）

仅实际实施监测／取样时记录同状态循环。记录移出质量／数量、保管、时间、动物状态和返回标识；不能视为最终收集或销售。不规定科研操作。

- 选定流：为实际监测暂时移出的活体完整动物
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_sampling_live_out
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 该节点产生的实际水性废物（人工繁殖、直接孵化幼体培育与流水养成）（`managed_culture_aqueous_waste`）

条件性记录实际交至 water_supply 或场外处理接收方的水，在两侧匹配相同标识、状态、数量和期间。夹带组分单列；排除另行记录的直接环境排水。

- 选定流：该节点产生的实际水性废物（人工繁殖、直接孵化幼体培育与流水养成）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_managed_culture_aqueous_waste
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 该节点直接向环境排放的实际水（人工繁殖、直接孵化幼体培育与流水养成）（`managed_culture_water_release`）

仅当本节点负责环境交接时，条件性记录实际直接排放体积、接收介质、水质、本底负荷和去向。排除仍向其他节点／处理交接的水、交给接收方的载水及另行量化的各具体物质的实际排放质量。

- 选定流：该节点直接向环境排放的实际水（人工繁殖、直接孵化幼体培育与流水养成）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_managed_culture`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_managed_culture_water_release
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：从养殖环境独立实施非返回式收集（`final_collection`）

本责任将待交付动物从其生产环境移出。原论文用网和桶称重后将动物返回，不能提供收获或销售记录。须识别实际独立收集事件、设备与载水、活体状态、伴随物、损失及向分级的交接，不得照搬科研干预。

#### 输入

##### 产品流

###### 进入独立最终收集的活体完整普通乌贼（`collection_animals`）

与 culture_to_collection 匹配批次、活体状态、质量、数量、期间与继承负担。最终收集是面向发运的实际非返回式移除，不能重标 sampling_live_out。

- 选定流：进入独立最终收集的活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_collection`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collection_animals
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 从养殖接收的实际既有载水（`culture_water_collection_input`）

条件性按同状态接收 culture_water_to_collection 的体积、水质、时间和标识；该既有水不产生新增供水或取水负担。后续向分级的交接、实际废水与直接排放分别核对。

- 选定流：从养殖接收的实际既有载水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_collection`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_culture_water_collection_input
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立收集期间实际使用的预处理海水（`collection_carrier_water`）

条件性计量与 conditioned_seawater 或其他有证据的供水匹配的实际新增载水；动物原生本体水仍包含在动物湿质量内。

- 选定流：独立收集期间实际使用的预处理海水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_collection`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collection_carrier_water
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际供应的电力（从养殖环境独立实施非返回式收集）（`final_collection_electricity`）

条件性计量本节点实际用电，保留电表区间、供应和分配。如用设备记录计算，逐实际实例保留实测功率／负载／运行时间、公式、因子与来源。

- 选定流：该节点实际供应的电力（从养殖环境独立实施非返回式收集）
- 流属性/单位：Energy / kWh
- 数量规则：逐项独立观测实际 kWh；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_collection`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_final_collection_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际接收的非电热量（从养殖环境独立实施非返回式收集）（`final_collection_heat`）

条件性逐项记录实际购入热／蒸汽能源服务的原生 MJ、状态、热量计量表或供应商能源数量、有用热边界和事件。若实际交换蒸汽／材料质量，须另保留其质量。排除完整服务已覆盖热量，不假定实际购买热量。

- 选定流：该节点实际接收的非电热量（从养殖环境独立实施非返回式收集）
- 流属性/单位：Energy / MJ
- 数量规则：逐项独立观测实际 MJ；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_collection`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_final_collection_heat
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 交至分级的已收集未分级活体完整普通乌贼（`collected_to_grading`）

向 collected_grading_input 交接同状态质量／数量和活体状态，保留独立收集事件及时间。收集损失、伴随物和载水分开记录。

- 选定流：交至分级的已收集未分级活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_collection`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collected_to_grading
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 伴随已收集动物交至分级的实际载水（`collection_water_to_grading`）

条件性按同状态匹配 grading_carrier_water，单独计量自由水，不并入动物质量或水性废物。

- 选定流：伴随已收集动物交至分级的实际载水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_collection`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collection_water_to_grading
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 最终收集期间实际返回的可存活动物（`collection_live_return`）

条件性按同状态向 collect_culture_returned_live 返回实测质量／数量、原因、时间和携带负担。返回部分不属于收集后交付批次。

- 选定流：最终收集期间实际返回的可存活动物
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_collection`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collection_live_return
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 该节点产生的实际水性废物（从养殖环境独立实施非返回式收集）（`final_collection_aqueous_waste`）

条件性记录实际交至 water_supply 或场外处理接收方的水，在两侧匹配相同标识、状态、数量和期间。夹带组分单列；排除另行记录的直接环境排水。

- 选定流：该节点产生的实际水性废物（从养殖环境独立实施非返回式收集）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_collection`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_final_collection_aqueous_waste
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 该节点直接向环境排放的实际水（从养殖环境独立实施非返回式收集）（`final_collection_water_release`）

仅当本节点负责环境交接时，条件性记录实际直接排放体积、接收介质、水质、本底负荷和去向。排除仍向其他节点／处理交接的水、交给接收方的载水及另行量化的各具体物质的实际排放质量。

- 选定流：该节点直接向环境排放的实际水（从养殖环境独立实施非返回式收集）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_collection`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_final_collection_water_release
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：实际活体产品分级与去向判定（`grading`）

接收已收集的活体完整动物，记录实际判据及全部等级／去向：合格活体交付、其他可用产品、返回养殖或重新分级的活体，以及实际废物。只有不发生的证据才能支持零；等级阈值和价值由场址实际记录确定。

#### 输入

##### 产品流

###### 为分级接收的已收集未分级活体完整普通乌贼（`collected_grading_input`）

匹配 collected_to_grading。记录实际规格／数量、活体状态、身体完整性、验收判据、用途和去向；分级不能凭空规定致死、修整或冷冻。

- 选定流：为分级接收的已收集未分级活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_collected_grading_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 为重新分级接收的暂养、呈现或交付返回活体（`grading_live_returns`）

条件性接收 holding_live_reject、presentation_live_return 或 delivery_live_return，匹配原输出、保管、同状态活体数量、原因和继承负担。不得将接收方拒收批次混入已验收质量。

- 选定流：为重新分级接收的暂养、呈现或交付返回活体
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_grading_live_returns
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 伴随已收集或返回动物接收的实际载水（`grading_carrier_water`）

条件性按同状态匹配 collection_water_to_grading，或在交付记录证明实际返回此处时匹配 carrier_water_return；保留体积、水质和去向，不计作动物产品。

- 选定流：伴随已收集或返回动物接收的实际载水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_grading_carrier_water
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际供应的电力（实际活体产品分级与去向判定）（`grading_electricity`）

条件性计量本节点实际用电，保留电表区间、供应和分配。如用设备记录计算，逐实际实例保留实测功率／负载／运行时间、公式、因子与来源。

- 选定流：该节点实际供应的电力（实际活体产品分级与去向判定）
- 流属性/单位：Energy / kWh
- 数量规则：逐项独立观测实际 kWh；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_grading`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_grading_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际接收的非电热量（实际活体产品分级与去向判定）（`grading_heat`）

条件性逐项记录实际购入热／蒸汽能源服务的原生 MJ、状态、热量计量表或供应商能源数量、有用热边界和事件。若实际交换蒸汽／材料质量，须另保留其质量。排除完整服务已覆盖热量，不假定实际购买热量。

- 选定流：该节点实际接收的非电热量（实际活体产品分级与去向判定）
- 流属性/单位：Energy / MJ
- 数量规则：逐项独立观测实际 MJ；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_grading_heat
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 分级后的合格活体完整普通乌贼（`graded_accepted`）

实际合格等级交至 bounded_holding，或有绕过证据时直接交至 presentation。记录等级、活体从未冷冻状态、净动物湿质量、数量和交接标识，不能同时计入两条路径。

- 选定流：分级后的合格活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_graded_accepted
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 从分级实际返回养殖的可存活动物（`graded_culture_return`）

条件性按同状态匹配 collect_culture_returned_live，记录不适合交付但仍存活状态、数量、原因和继承负担。它不同于降级销售或废物。

- 选定流：从分级实际返回养殖的可存活动物
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_graded_culture_return
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 从分级交至暂养或呈现的实际载水（`graded_carrier_water`）

条件性按同状态向 holding_seawater 或 presentation_carrier_water 交接实际水，记录体积、水质、批次和时间，不假定载水持续伴随。实际废水和直接排放使用各自流卡。

- 选定流：从分级交至暂养或呈现的实际载水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_graded_carrier_water
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 该节点产生的实际水性废物（实际活体产品分级与去向判定）（`grading_aqueous_waste`）

条件性记录实际交至 water_supply 或场外处理接收方的水，在两侧匹配相同标识、状态、数量和期间。夹带组分单列；排除另行记录的直接环境排水。

- 选定流：该节点产生的实际水性废物（实际活体产品分级与去向判定）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_grading_aqueous_waste
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 该节点直接向环境排放的实际水（实际活体产品分级与去向判定）（`grading_water_release`）

仅当本节点负责环境交接时，条件性记录实际直接排放体积、接收介质、水质、本底负荷和去向。排除仍向其他节点／处理交接的水、交给接收方的载水及另行量化的各具体物质的实际排放质量。

- 选定流：该节点直接向环境排放的实际水（实际活体产品分级与去向判定）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_grading_water_release
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：分级后的有界活体暂养（`bounded_holding`）

分别记录独立区间之前和之后可用的活体完整动物，以及实际用水、曝气和任何实际投喂或其他干预。包含损失、拒收和水的去向。该节点不是强制延续养成；有证据的绕过将同一合格状态直接交至呈现。

#### 输入

##### 产品流

###### 分级后为有界暂养接收的合格活体完整普通乌贼（`holding_accepted_input`）

仅 active 时按同状态接收 graded_accepted，保留批次、等级、活体状态、净动物湿质量和暂养开始。绕过没有暂养清单，但须有直接交接证明。

- 选定流：分级后为有界暂养接收的合格活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bounded_holding`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_accepted_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有界暂养期间实际供应的预处理海水（`holding_seawater`）

仅 active 时匹配 conditioned_seawater 或 graded_carrier_water，保留相同实际状态、用途、体积、曝气和水质。不能由论文养成水池推断暂养。

- 选定流：有界暂养期间实际供应的预处理海水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bounded_holding`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_seawater
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有界暂养期间实际投喂的解冻草虾（`holding_feed`）

仅记录证明该区间实际投喂时纳入，匹配 prepared_thawed_feed，按饲料状态和批次独立计量，保留残余和上游负担。

- 选定流：有界暂养期间实际投喂的解冻草虾
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bounded_holding`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_feed
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际供应的电力（分级后的有界活体暂养）（`bounded_holding_electricity`）

条件性计量本节点实际用电，保留电表区间、供应和分配。如用设备记录计算，逐实际实例保留实测功率／负载／运行时间、公式、因子与来源。

- 选定流：该节点实际供应的电力（分级后的有界活体暂养）
- 流属性/单位：Energy / kWh
- 数量规则：逐项独立观测实际 kWh；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_bounded_holding`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_bounded_holding_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际接收的非电热量（分级后的有界活体暂养）（`bounded_holding_heat`）

条件性逐项记录实际购入热／蒸汽能源服务的原生 MJ、状态、热量计量表或供应商能源数量、有用热边界和事件。若实际交换蒸汽／材料质量，须另保留其质量。排除完整服务已覆盖热量，不假定实际购买热量。

- 选定流：该节点实际接收的非电热量（分级后的有界活体暂养）
- 流属性/单位：Energy / MJ
- 数量规则：逐项独立观测实际 MJ；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bounded_holding`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_bounded_holding_heat
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 有界暂养后的合格活体完整普通乌贼（`held_to_presentation`）

仅 active 时实测交至 held_presentation_input，保留结束时间、实际保活干预、等级、活体状态和损失。不设固定存活率、时长或货架期。

- 选定流：有界暂养后的合格活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bounded_holding`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_held_to_presentation
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有界暂养后实际拒收的可存活动物（`holding_live_reject`）

条件性按匹配标识、状态、数量和负担交至 grading_live_returns 或 collect_culture_returned_live；实际死亡物应归废物。

- 选定流：有界暂养后实际拒收的可存活动物
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bounded_holding`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_holding_live_reject
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 从有界暂养交至呈现的实际载水（`held_carrier_water`）

仅 active 时按同状态匹配 presentation_carrier_water，记录数量、水质和批次，不能假定全部暂养水都伴随动物。

- 选定流：从有界暂养交至呈现的实际载水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bounded_holding`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_held_carrier_water
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 该节点产生的实际水性废物（分级后的有界活体暂养）（`bounded_holding_aqueous_waste`）

条件性记录实际交至 water_supply 或场外处理接收方的水，在两侧匹配相同标识、状态、数量和期间。夹带组分单列；排除另行记录的直接环境排水。

- 选定流：该节点产生的实际水性废物（分级后的有界活体暂养）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bounded_holding`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_bounded_holding_aqueous_waste
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 该节点直接向环境排放的实际水（分级后的有界活体暂养）（`bounded_holding_water_release`）

仅当本节点负责环境交接时，条件性记录实际直接排放体积、接收介质、水质、本底负荷和去向。排除仍向其他节点／处理交接的水、交给接收方的载水及另行量化的各具体物质的实际排放质量。

- 选定流：该节点直接向环境排放的实际水（分级后的有界活体暂养）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bounded_holding`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_bounded_holding_water_release
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：活体保护性呈现（`presentation`）

识别进入节点的未暂养或已暂养合格动物、实际保护性呈现以及交付移动的交接。载水、包装与动物本体质量分开。记录可重复使用物品的所有权、寿命、返回、清洁、损坏与使用终止。移动归 delivery，不能在此重复。

#### 输入

##### 产品流

###### 分级后的合格活体完整普通乌贼（`unheld_presentation_input`）

仅有绕过证据时按同状态接收 graded_accepted；实际直接交接证明 bounded_holding 绕过。暂养状态未知不能选择该路径。

- 选定流：分级后的合格活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_unheld_presentation_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 有界暂养后的合格活体完整普通乌贼（`held_presentation_input`）

仅 active 时按同状态接收 held_to_presentation，保留实际批次／状态／数量／时间与负担，内部数量独立于最终验收质量。

- 选定流：有界暂养后的合格活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_held_presentation_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 活体保护性呈现实际使用的预处理海水（`presentation_carrier_water`）

条件性识别供应或复用载水的来源／状态，按实际同状态匹配 conditioned_seawater、graded_carrier_water、held_carrier_water 或 carrier_water_return 的体积，不能重复环境取水。动物原生本体水另属动物质量。

- 选定流：活体保护性呈现实际使用的预处理海水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_carrier_water
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际供应的电力（活体保护性呈现）（`presentation_electricity`）

条件性计量本节点实际用电，保留电表区间、供应和分配。如用设备记录计算，逐实际实例保留实测功率／负载／运行时间、公式、因子与来源。

- 选定流：该节点实际供应的电力（活体保护性呈现）
- 流属性/单位：Energy / kWh
- 数量规则：逐项独立观测实际 kWh；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_presentation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际接收的非电热量（活体保护性呈现）（`presentation_heat`）

条件性逐项记录实际购入热／蒸汽能源服务的原生 MJ、状态、热量计量表或供应商能源数量、有用热边界和事件。若实际交换蒸汽／材料质量，须另保留其质量。排除完整服务已覆盖热量，不假定实际购买热量。

- 选定流：该节点实际接收的非电热量（活体保护性呈现）
- 流属性/单位：Energy / MJ
- 数量规则：逐项独立观测实际 MJ；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_heat
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 经过保护性呈现发运的活体完整普通乌贼（`presented_animals`）

按同状态向 delivery_animals 交接实测净动物质量／数量、等级、呈现方式和保管。自由水和包装使用各自流卡，不能并入动物质量。

- 选定流：经过保护性呈现发运的活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presented_animals
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 伴随活体动物发运的实际载水（`presented_water`）

条件性按同状态向 delivery_water 单独交接实测体积、来源和保管，不与动物或包装质量合并。

- 选定流：伴随活体动物发运的实际载水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presented_water
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 从呈现实际返回的可存活动物（`presentation_live_return`）

条件性按同状态将实测数量和携带负担返回 grading_live_returns 或 collect_culture_returned_live，不能把拒收质量藏入最终验收。

- 选定流：从呈现实际返回的可存活动物
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_live_return
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 该节点产生的实际水性废物（活体保护性呈现）（`presentation_aqueous_waste`）

条件性记录实际交至 water_supply 或场外处理接收方的水，在两侧匹配相同标识、状态、数量和期间。夹带组分单列；排除另行记录的直接环境排水。

- 选定流：该节点产生的实际水性废物（活体保护性呈现）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_aqueous_waste
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 该节点直接向环境排放的实际水（活体保护性呈现）（`presentation_water_release`）

仅当本节点负责环境交接时，条件性记录实际直接排放体积、接收介质、水质、本底负荷和去向。排除仍向其他节点／处理交接的水、交给接收方的载水及另行量化的各具体物质的实际排放质量。

- 选定流：该节点直接向环境排放的实际水（活体保护性呈现）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_presentation_water_release
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：首次实际接收前的全部移动与验收（`delivery`）

记录实际发运和每一次移动，包括装卸、中间保管，直至首次独立实际接收。发票不足以证明该接收。将已验收的活体从未冷冻动物与包装／水交接分别记录，同时保留拒收、返回和损失。接收后的使用不在参考边界内。

#### 输入

##### 产品流

###### 为交付接收的已保护性呈现活体完整普通乌贼（`delivery_animals`）

按同状态接收 presented_animals，保留净动物湿质量、数量、等级、状态、时间、保管和继承负担。不论付款方，记录至首次实际接收的全部运输及处理。

- 选定流：为交付接收的已保护性呈现活体完整普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_animals
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 为活体交付接收的实际载水（`delivery_water`）

条件性按同状态接收 presented_water，体积独立于动物湿质量和包装皮重，持续记录至实际交接、返回或废弃去向。

- 选定流：为活体交付接收的实际载水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_water
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际供应的电力（首次实际接收前的全部移动与验收）（`delivery_electricity`）

条件性计量本节点实际用电，保留电表区间、供应和分配。如用设备记录计算，逐实际实例保留实测功率／负载／运行时间、公式、因子与来源。

- 选定流：该节点实际供应的电力（首次实际接收前的全部移动与验收）
- 流属性/单位：Energy / kWh
- 数量规则：逐项独立观测实际 kWh；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 该节点实际接收的非电热量（首次实际接收前的全部移动与验收）（`delivery_heat`）

条件性逐项记录实际购入热／蒸汽能源服务的原生 MJ、状态、热量计量表或供应商能源数量、有用热边界和事件。若实际交换蒸汽／材料质量，须另保留其质量。排除完整服务已覆盖热量，不假定实际购买热量。

- 选定流：该节点实际接收的非电热量（首次实际接收前的全部移动与验收）
- 流属性/单位：Energy / MJ
- 数量规则：逐项独立观测实际 MJ；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_heat
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 首次实际接收方验收的完整活体从未冷冻养殖普通乌贼（`live_receipt_reference`）

1 千克；用 cp_receipt 采集的同一实际已验收批次正净动物湿质量 A 除以同一个 A。保留动物原生本体水，排除自由／载水、伴随物及包装。实际记录须证明接收验收、活体状态、物种、完整身体、从未冷冻和非观赏用途。

- 选定流：首次实际接收方验收的完整活体从未冷冻养殖普通乌贼
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_receipt`
- 来源：`reference-mass-identity`
- 数量范围：同一正验收批次 A/A 恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-mass-identity`

###### 向首次实际接收方交接的实际载水（`recipient_carrier_water`）

条件性实测同状态水交接、去向和保管，不能并入参考动物质量或接收后处置。接收前返回或排放的水另行路由。

- 选定流：向首次实际接收方交接的实际载水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_recipient_carrier_water
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收边界之前或当时实际返回的可复用载水（`carrier_water_return`）

条件性按实际接收记录将同状态实测返回匹配 presentation_carrier_water 或 grading_carrier_water，保留体积、水质、保管和继承服务，不自动给返回抵扣或虚构处置取水。

- 选定流：接收边界之前或当时实际返回的可复用载水
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_carrier_water_return
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 验收前实际拒收并返回的可存活完整动物（`delivery_live_return`）

条件性记录实际同状态数量、活体状态、原因和继承负担，匹配 grading_live_returns 或 collect_culture_returned_live。返回批次不属于已验收 A，保留失败交付负担。

- 选定流：验收前实际拒收并返回的可存活完整动物
- 流属性/单位：Mass / kg
- 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_live_return
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 该节点产生的实际水性废物（首次实际接收前的全部移动与验收）（`delivery_aqueous_waste`）

条件性记录实际交至 water_supply 或场外处理接收方的水，在两侧匹配相同标识、状态、数量和期间。夹带组分单列；排除另行记录的直接环境排水。

- 选定流：该节点产生的实际水性废物（首次实际接收前的全部移动与验收）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_aqueous_waste
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 该节点直接向环境排放的实际水（首次实际接收前的全部移动与验收）（`delivery_water_release`）

仅当本节点负责环境交接时，条件性记录实际直接排放体积、接收介质、水质、本底负荷和去向。排除仍向其他节点／处理交接的水、交给接收方的载水及另行量化的各具体物质的实际排放质量。

- 选定流：该节点直接向环境排放的实际水（首次实际接收前的全部移动与验收）
- 流属性/单位：Volume / m3
- 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`cuttlefish-accounting-method`
- 数量范围：暂定且未确立的不确定性；须有独立观测
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivery_water_release
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| attribute_precedence | foreground burdens | 首先拆分可独立计量的事件、阶段、输出和服务，再对共享生产／资产／服务负担采用有记录的因果物理分配，按与该负担相适应的实际占用、运行时间或计量需求分配。保留理由及敏感性；不设通用份额或论文生产率默认值。 | `cuttlefish-accounting-method` |
| attribute_outputs | intended outputs | 列出已验收活体动物、每个实际其他动物等级、转交的可孵化后代或亲体、可用伴随物及库存与交接。保留的可孵化后代和亲体携带负担进入下期；未孵化后代是结转繁殖服务，不是交付成体。残余和废物不能自动提升为共产品或获得避免产品抵扣。 | `cuttlefish-accounting-method` |
| attribute_economic | inseparable joint burdens | 仅当拆分与因果物理分配不能解决实际联产负担时，采用同期间／市场／状态可比的非负生产者出厂门净销售值，且总分母必须为正，包含有依据的保留库存估值。一致剔除税、共同边界外运费和无关收入。值缺失、零或负时须有合理替代及敏感性，不能按利润分配或默设负份额。 | `cuttlefish-accounting-method` |
| attribute_periods | cohorts periods and shared services | 索引卵／繁殖服务、直接孵化幼体育苗、养成、收集、等级、暂养、呈现、交付、清洁／换批、闲置及失败期间、资产更换和终止。期初数量和继承负担结转至期末库存与下期接收。共享资产寿命、使用和寿终依据实际证据和全部消费者，包含其他设施输出，而非仅成功参考批次。 | `cuttlefish-accounting-method` |
| attribute_once | all exchanges | 每个事件、服务和物理交接只有一个归属。内部输出／输入是连接，不是两次独立负担采购或最终产品。完整服务不与组件燃料／电力／资产／排放重复；核对全部消费者份额，并在归一至已验收 A 前结转失败／拒收／返回批次负担。 | `cuttlefish-accounting-method` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_water_supply | water_supply | 本节点全部实际原生流实例 | 原始记录与测量 | 取水来源／体积与水状态；砂滤／沉降／曝气实际链与区间；每个供水消费者／标识／体积／水质；实际废水接收与状态；处理／绕过；排水去向／体积；进水本底及排水组分浓度／负荷；反冲洗／污泥；计量器；能源与资产消费者／寿命；事件／交接／库存标识；校准；原生属性／单位；计算实例公式／因子来源和不确定性；已验收 A 关联 | 计量海洋取水，分别计量实际供应体积和匹配废水接收，识别实际处理及环境排放归属。在匹配区间采集实际进出水体积／浓度，保留物质／介质，仅在具有明确实测输入／公式／因子来源及本底修正时计算净排放。称量实际处理残余并保留校准及共享服务消费者。一次分配及除以 A 前保留原生数量；定性文献不是数量记录。 | kg; m3; kWh; MJ; h; t.km，按各实际实例使用 | 每次实际事件／交接／阶段及有记录的连续计量区间 | 全部实际群体／报告和服务期间，包含失败、库存、清洁与终止 | 海水预处理与实际废水管理及匹配交接 | per 1 kg reference flow | 校准和节点特定原始记录；匹配标识；独立数量／状态；资产／期间／输出份额；逐实例实测输入／公式／因子来源及不确定性 |
| cp_feed_preparation | feed_preparation | 本节点全部实际原生流实例 | 原始记录与测量 | 供应商／物种／捕捞或养殖来源；接收活体／冷冻状态和净饲料质量；活体／冷冻／解冻期初期末库存；冷库温度／时间和计量区间；解冻前后实测质量和滴液；活体／解冻准备饲料交接与质量；清洁水／材料；残余去向；储存／准备资产及用户；事件／交接／库存标识；校准；原生属性／单位；计算实例公式／因子来源和不确定性；已验收 A 关联 | 核实供应批次／来源和上游捕捞／养殖／冷链范围，独立称量各状态的接收及实际准备饲料，核对期初期末库存、实测残余与解冻水。匹配活／解冻交接的阶段和消费者；计量并分配实际冷库／准备／清洁服务，不能从投喂量推断摄食。一次分配及除以 A 前保留原生数量；定性文献不是数量记录。 | kg; m3; kWh; MJ; h; t.km，按各实际实例使用 | 每次实际事件／交接／阶段及有记录的连续计量区间 | 全部实际群体／报告和服务期间，包含失败、库存、清洁与终止 | 活草虾和解冻草虾的供应与准备及匹配交接 | per 1 kg reference flow | 校准和节点特定原始记录；匹配标识；独立数量／状态；资产／期间／输出份额；逐实例实测输入／公式／因子来源及不确定性 |
| cp_managed_culture | managed_culture | 本节点全部实际原生流实例 | 原始记录与测量 | 人工谱系；接收卵／孵化幼体／幼年个体／亲体阶段／质量／数量；繁殖服务、卵批／可孵化性／孵育；直接孵化幼体育苗和成体／养成阶段；群体／期间；活／解冻投喂与残余；供水／水质；实际失败／死亡；监测移出返回；期末库存；含既有水／伴随物的独立收集交接；清洁／终止；共享资产／用户；事件／交接／库存标识；校准；原生属性／单位；计算实例公式／因子来源和不确定性；已验收 A 关联 | 由实际卵、育苗和养成记录建立阶段／群体库存与繁殖服务台账，独立计量质量／数量／状态和继承负担。匹配实际饲料／水及活体／监测返回，区分保留未孵化后代、转交可用输出及实际失败。将非返回式养殖交接及伴随既有水／物质与新增供给分别计量，并保留全部清洁、更换和终止期间。一次分配及除以 A 前保留原生数量；定性文献不是数量记录。 | kg; m3; kWh; MJ; h; t.km，按各实际实例使用 | 每次实际事件／交接／阶段及有记录的连续计量区间 | 全部实际群体／报告和服务期间，包含失败、库存、清洁与终止 | 人工繁殖、直接孵化幼体培育与流水养成及匹配交接 | per 1 kg reference flow | 校准和节点特定原始记录；匹配标识；独立数量／状态；资产／期间／输出份额；逐实例实测输入／公式／因子来源及不确定性 |
| cp_final_collection | final_collection | 本节点全部实际原生流实例 | 原始记录与测量 | 实际非返回事件／时间及生产环境；接收活体完整动物数量／质量／继承负担；养殖既有载水／伴随物；实际新增载水；实际设备／能源／服务；已收集动物交接；水与物质的可用／返回／废物／环境去向；活体返回与收集损失；事件／交接／库存标识；校准；原生属性／单位；计算实例公式／因子来源和不确定性；已验收 A 关联 | 观察面向发运的实际独立移除，区别科研取样返回。在养殖接收和分级交接时称量或核对同状态动物、既有水和伴随物，另外计量新增供水。记录实际可用伴随物、返回、损失及直接排放／废物去向，每个设备／操作事件只有一个归属。一次分配及除以 A 前保留原生数量；定性文献不是数量记录。 | kg; m3; kWh; MJ; h; t.km，按各实际实例使用 | 每次实际事件／交接／阶段及有记录的连续计量区间 | 全部实际群体／报告和服务期间，包含失败、库存、清洁与终止 | 从养殖环境独立实施非返回式收集及匹配交接 | per 1 kg reference flow | 校准和节点特定原始记录；匹配标识；独立数量／状态；资产／期间／输出份额；逐实例实测输入／公式／因子来源及不确定性 |
| cp_grading | grading | 本节点全部实际原生流实例 | 原始记录与测量 | 已收集和返回批次／状态／质量／数量；实际验收／规格／等级判据与测量；全部合格／其他可用／返回／废物去向与接收方／时间；载水接收和交接／去向；暂养 active/bypass/unknown 选择；分级材料／能源／设备；事件／交接／库存标识；校准；原生属性／单位；计算实例公式／因子来源和不确定性；已验收 A 关联 | 独立记录实际输入状态与观察到的等级／去向决定，再计量每项输出动物状态和水交接。合格批次匹配实际暂养或有证据直接呈现，活体返回匹配接收节点，其他可用产品匹配实际接收方；实际废物单列，不虚构通用等级阈值。一次分配及除以 A 前保留原生数量；定性文献不是数量记录。 | kg; m3; kWh; MJ; h; t.km，按各实际实例使用 | 每次实际事件／交接／阶段及有记录的连续计量区间 | 全部实际群体／报告和服务期间，包含失败、库存、清洁与终止 | 实际活体产品分级与去向判定及匹配交接 | per 1 kg reference flow | 校准和节点特定原始记录；匹配标识；独立数量／状态；资产／期间／输出份额；逐实例实测输入／公式／因子来源及不确定性 |
| cp_bounded_holding | bounded_holding | 本节点全部实际原生流实例 | 原始记录与测量 | active/bypass/unknown 证据；实际开始／结束；输入输出合格批次／状态／质量／数量；干预类型；供水／载水体积、水质和曝气；实际投喂如有；能源载体／设备；活体拒收／死亡；水交接／废物／排放；直接绕过交接记录；事件／交接／库存标识；校准；原生属性／单位；计算实例公式／因子来源和不确定性；已验收 A 关联 | active 区间观测干预前后可用活体状态、实际有界启止、用水／曝气及任何有证据的投喂／干预，独立计量输出动物／水、拒收／损失和去向。bypass 保留分级直接至呈现的匹配证据；unknown 不能变成零行或绕过。该区间与养成分开。一次分配及除以 A 前保留原生数量；定性文献不是数量记录。 | kg; m3; kWh; MJ; h; t.km，按各实际实例使用 | 每次实际事件／交接／阶段及有记录的连续计量区间 | 全部实际群体／报告和服务期间，包含失败、库存、清洁与终止 | 分级后的有界活体暂养及匹配交接 | per 1 kg reference flow | 校准和节点特定原始记录；匹配标识；独立数量／状态；资产／期间／输出份额；逐实例实测输入／公式／因子来源及不确定性 |
| cp_presentation | presentation | 本节点全部实际原生流实例 | 原始记录与测量 | 实际合格未暂养／已暂养输入选择；活体批次／状态／质量／数量；载水来源／体积／水质；包装材料／皮重／所有权／新增或复用／周转；期初期末／返回包装库存和状态；实际保护安排；清洁／修理／损坏／寿终；动物／水／包装发运标识；事件／交接／库存标识；校准；原生属性／单位；计算实例公式／因子来源和不确定性；已验收 A 关联 | 核实实际未暂养／暂养路径和活体保护，分别称量动物与包装皮重并计量载水，保留动物原生本体水。计量包装库存／返回／新增供给、可归属周转／寿命、清洁／修理和拒收，分别匹配动物、载水和包装的交付接收，不在此记货运或重复移动。一次分配及除以 A 前保留原生数量；定性文献不是数量记录。 | kg; m3; kWh; MJ; h; t.km，按各实际实例使用 | 每次实际事件／交接／阶段及有记录的连续计量区间 | 全部实际群体／报告和服务期间，包含失败、库存、清洁与终止 | 活体保护性呈现及匹配交接 | per 1 kg reference flow | 校准和节点特定原始记录；匹配标识；独立数量／状态；资产／期间／输出份额；逐实例实测输入／公式／因子来源及不确定性 |
| cp_delivery | delivery | 本节点全部实际原生流实例 | 原始记录与测量 | 发运动物／水／包装标识与数量；所有接收前路段／时间／距离／方式／承运／付款／保管；实际动物／水／包装载荷及共载；装卸／等待归属；完整货运或组件范围；燃料／电力／资产时间；实际接收方和验收时间／活体状态／等级／净质量 A；副产品／拒收／返回／水／包装去向；事件／交接／库存标识；校准；原生属性／单位；计算实例公式／因子来源和不确定性；已验收 A 关联 | 将每次实际移动和保管记录核对至首次独立实际接收，不论付款方。以实测载荷／距离／共载计算实际 t.km；货运载荷含载水和皮重，但动物 A 不含。装卸／等待仅归完整货运或单独实测组件操作之一。通过 cp_receipt 匹配实际已验收 A，并单独计量每次拒收、返回和水／包装交接。一次分配及除以 A 前保留原生数量；定性文献不是数量记录。 | kg; m3; kWh; MJ; h; t.km，按各实际实例使用 | 每次实际事件／交接／阶段及有记录的连续计量区间 | 全部实际群体／报告和服务期间，包含失败、库存、清洁与终止 | 首次实际接收前的全部移动与验收及匹配交接 | per 1 kg reference flow | 校准和节点特定原始记录；匹配标识；独立数量／状态；资产／期间／输出份额；逐实例实测输入／公式／因子来源及不确定性 |
| cp_receipt | delivery | 验收参考产品质量与实际验收 | 校准称量及接收观察 | 同批标识；接收方；接收日期／时间；物种；来源；完整／活体／从未冷冻／非观赏证据；实际等级；数量；净动物湿质量 A；毛重／皮重／载水自由水操作；秤校准；如采用抽样则记录同批样重／设计／不确定性 | 使用校准秤，实际分离载水／自由水及包装皮重，独立称量已验收完整活体动物，保留动物原生本体水；核对同批独立数量／状态及接收方实际验收。如由数量抽样换算，称量同批同状态有代表性活体样本并保留不确定性。 | kg | 每个实际已验收批次和接收事件 | 实际接收时同一正验收批次及完整接收前群体分配 | 首次实际接收方；delivery 节点 | per 1 kg reference flow | 校准；原始净重／毛重／皮重／水方法；接收保管／状态记录；独立数量／等级；同批抽样设计与不确定性；正 A |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| reference_identity | live_receipt_reference | A / A = 1; A 为 cp_receipt 实际独立采集的同一正已验收净动物湿质量。 | A; cp_receipt | 1 kg 参考流 | `reference-mass-identity` |
| period_ledger | all inventory rows | 将每项实测或计算的可归属原生数量，在一次有记录的事件／期间／输出分配后除以已验收 A；保留原生数量、分配份额、来源记录及每参考流单位。内部饲料或交接不固定为最终质量。 | 原生数量；分配台账；A；节点协议；cp_receipt | 每 1 kg 参考流原生数量 | `cuttlefish-accounting-method` |
| actual_energy | actual calculated electricity instances | 采用实测电表差值或设备实测功率、负载及运行时间；逐实际实例保留公式、因子及来源、期间和分配，在除以 A 前明确换算原生能源单位。论文流量／池设置不是实测电力投入。 | 电表起止或实测功率／负载／运行时间；公式和因子来源；节点协议；A | 每 1 kg 参考流计算电力 | `cuttlefish-accounting-method` |
| actual_release | actual calculated release instances | 采用实际实测活动／浓度、采样体积或实测燃料及适用的物质特定因子，保留逐实例公式、因子来源、介质、本底修正和不确定性。不能从饲料类型推断污染物身份或设通用排放默认值。 | 实测实例输入；物质和介质；公式；因子来源；节点协议；A | 每 1 kg 参考流计算的已识别排放 | `cuttlefish-accounting-method` |
| actual_freight | collect_delivery_transport | 每个与组件范围相容的实际路段，将实际载荷吨数乘实际 km 距离，并仅一次应用有记录的共载分配；保留载水／包装载荷及所有接收前路段。 | 实际载荷；距离；方式；路段；共载份额；cp_delivery；A | 每 1 kg 参考流 t.km | `cuttlefish-accounting-method` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | animal and feed lots | 证明实际物种、人工谱系、接收阶段、最终活体从未冷冻状态、非观赏用途和实际保管。定性文献只支持路线选择，不支持采集数量。 | 供应和群体谱系；实际状态、等级和接收记录 |
| quantity_quality | all rows | 保留校准／皮重／载水分离、独立数量／等级、配对交接、库存台账及同批抽样不确定性。经验校验范围需独立历史／场址参考样本，不能用当前批次最大值验证自身。 | 秤／计量记录；交接／库存标识；抽样设计；独立 QA 数据集 |
| coverage_quality | periods nodes and assets | 覆盖失败和闲置期间、完整声称繁殖、死亡、饲料准备／残余、清洁／换批、共享资产与全部消费者、实际包装周转及所有接收前移动。条件未知阻止完成。 | 事件台账；资产／服务寿命台账；消费者份额；实际 active/bypass 证明 |
| range_quality | all ranges | 除最终同批恒等式外，0..U_row 不确定性范围是没有已确立有限上限的暂定推理占位，不是实测值、默认值、限额或零证据。最终数据集使用前须由独立实际观测及经审查不确定性替代。 | 实际独立记录和经审查的数量／不确定性推导 |
| binding_quality | all exchange cards and collection obligations | 最终 TIDAS 交换使用前，每个实际独立供应、废物、排放和动物状态须有已核实的具体流／属性／单位身份；条件性汇总流卡不是自动 UUID 绑定。 | 确切详情／属性／单位证据及方法审查 |
| `collect_water_supply_materials` | `water_supply`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的消耗材料（海水预处理与实际废水管理）. 条件性分别识别本节点实际清洁、监测、修理或防护材料，记录配方、作用、数量和上游负担；排除另列饲料、水和包装。不规定科研麻醉、标记或 DNA 操作。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_water_supply` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_water_supply_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_water_supply_service` | `water_supply`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的设备与共享资产服务（海水预处理与实际废水管理）. 条件性仅计量设备／共享资产实际运行或占用服务时间，保留资产身份、所有消费者、服务期间、安装、维护、更换、闲置／失败期间和寿终。h 不是所有供应商服务的强制单位：其他实际服务在最终绑定前须独立申报其原生属性／单位及实测数量。完整购买服务不重复其已覆盖的组件能源、材料、资产和排放；组件建模排除完整服务。delivery 的 h 仅包含完整货运范围外另有证据的处理／等待／设备；货运已覆盖装卸不得重复。 <br> - 流属性/单位：Service duration / h <br> - 数量规则：逐项独立观测实际 h；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_water_supply` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_water_supply_service <br> - 单位：h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_water_supply_fuel` | `water_supply`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按质量计量非电能源载体（海水预处理与实际废水管理）. 条件性逐项记录以原生质量计量的实际液体／固体燃料物质／状态、数量、用途、供应上游负担和设备／事件，保留实测 kg 及任何可追溯密度／能量换算输入和因子来源。排除完整服务已覆盖载体；不能把燃料放入消耗材料卡。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_water_supply` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_water_supply_fuel <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_water_supply_gaseous_fuel` | `water_supply`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按体积计量气体能源载体（海水预处理与实际废水管理）. 条件性逐项记录以原生 m3 计量的实际气体燃料物质、温压和参考体积条件、数量、用途、上游供应负担与事件，保留实测体积及任何换算因子来源。排除完整服务覆盖，不强制将气体体积改为 kg 或 h。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_water_supply` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_water_supply_gaseous_fuel <br> - 单位：m3 <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_water_supply_solid_waste` | `water_supply`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点产生的实际固体废物（海水预处理与实际废水管理）. 条件性按本节点实际情况分别识别死亡动物、拒收材料、饲料残余、清洁污泥或损坏消耗品，保留湿／干状态、去向及处理责任。可用产品和保留库存不是废物。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_water_supply` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_water_supply_solid_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_water_supply_releases` | `water_supply`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际识别的直接排放（海水预处理与实际废水管理）. 仅按实际物质和接收介质条件性记录。区分原始直接实测排放质量，与由实测浓度／体积或实测活动量及适用因子计算的原始排放质量。原始直接实测为 collected_record；因子／浓度推算及参考归一化数量为 calculated_value/calculated_from_collection。逐实例保留物质／形态或粒径、空气／水／土壤介质、时间、实测活动／浓度、采样体积、公式、因子／来源和不确定性。排除进水本底及完整服务已覆盖排放，宽泛有机物／污染物名称不能确定身份。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_water_supply 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_water_supply` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_water_supply_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_feed_opening_stock` | `feed_preparation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：携带继承冷链负担的期初饲料库存. 条件性记录各活体／冷冻／解冻状态的期初原生湿质量，保留既往数量、损失和已分配负担。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_feed_preparation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_feed_opening_stock <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_feed_preparation_materials` | `feed_preparation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的消耗材料（活草虾和解冻草虾的供应与准备）. 条件性分别识别本节点实际清洁、监测、修理或防护材料，记录配方、作用、数量和上游负担；排除另列饲料、水和包装。不规定科研麻醉、标记或 DNA 操作。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_feed_preparation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_feed_preparation_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_feed_preparation_service` | `feed_preparation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的设备与共享资产服务（活草虾和解冻草虾的供应与准备）. 条件性仅计量设备／共享资产实际运行或占用服务时间，保留资产身份、所有消费者、服务期间、安装、维护、更换、闲置／失败期间和寿终。h 不是所有供应商服务的强制单位：其他实际服务在最终绑定前须独立申报其原生属性／单位及实测数量。完整购买服务不重复其已覆盖的组件能源、材料、资产和排放；组件建模排除完整服务。delivery 的 h 仅包含完整货运范围外另有证据的处理／等待／设备；货运已覆盖装卸不得重复。 <br> - 流属性/单位：Service duration / h <br> - 数量规则：逐项独立观测实际 h；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_feed_preparation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_feed_preparation_service <br> - 单位：h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_feed_preparation_fuel` | `feed_preparation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按质量计量非电能源载体（活草虾和解冻草虾的供应与准备）. 条件性逐项记录以原生质量计量的实际液体／固体燃料物质／状态、数量、用途、供应上游负担和设备／事件，保留实测 kg 及任何可追溯密度／能量换算输入和因子来源。排除完整服务已覆盖载体；不能把燃料放入消耗材料卡。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_feed_preparation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_feed_preparation_fuel <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_feed_preparation_gaseous_fuel` | `feed_preparation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按体积计量气体能源载体（活草虾和解冻草虾的供应与准备）. 条件性逐项记录以原生 m3 计量的实际气体燃料物质、温压和参考体积条件、数量、用途、上游供应负担与事件，保留实测体积及任何换算因子来源。排除完整服务覆盖，不强制将气体体积改为 kg 或 h。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_feed_preparation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_feed_preparation_gaseous_fuel <br> - 单位：m3 <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_feed_closing_stock` | `feed_preparation`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：携带已分配负担的期末饲料库存. 条件性按实际活体／冷冻／解冻状态、批次和保管方实测库存；匹配下期同状态期初库存，不重复记作采购或重置负担。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_feed_preparation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_feed_closing_stock <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_feed_preparation_solid_waste` | `feed_preparation`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点产生的实际固体废物（活草虾和解冻草虾的供应与准备）. 条件性按本节点实际情况分别识别死亡动物、拒收材料、饲料残余、清洁污泥或损坏消耗品，保留湿／干状态、去向及处理责任。可用产品和保留库存不是废物。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_feed_preparation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_feed_preparation_solid_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_feed_preparation_releases` | `feed_preparation`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际识别的直接排放（活草虾和解冻草虾的供应与准备）. 仅按实际物质和接收介质条件性记录。区分原始直接实测排放质量，与由实测浓度／体积或实测活动量及适用因子计算的原始排放质量。原始直接实测为 collected_record；因子／浓度推算及参考归一化数量为 calculated_value/calculated_from_collection。逐实例保留物质／形态或粒径、空气／水／土壤介质、时间、实测活动／浓度、采样体积、公式、因子／来源和不确定性。排除进水本底及完整服务已覆盖排放，宽泛有机物／污染物名称不能确定身份。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_feed_preparation 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_feed_preparation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_feed_preparation_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_received_captive_animals` | `managed_culture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：接收的人工来源卵、孵化幼体、幼年个体或亲体. 逐项记录实际起始生物材料的物种、阶段、活体／可孵化状态、实际湿质量与独立数量、人工繁殖谱系、供应商、日期、继承的繁殖／育苗／养成负担和运输。卵不能等同已交付成体质量。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_received_captive_animals <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_culture_opening_stock` | `managed_culture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：期初人工活体动物与可孵化后代库存. 按阶段和批次条件性实测期初卵、直接孵化幼体、幼年／成年个体与亲体数量，保留继承数量和负担。繁殖服务随其后代和库存结转；未孵化卵不是已交付活体动物输出。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_culture_opening_stock <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_culture_returned_live` | `managed_culture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际返回养殖的可存活动物. 条件性接收 final_collection、grading、bounded_holding、presentation 或 delivery 返回的同状态活体，匹配输出标识，保留实测质量、数量、活体状态、时间和继承负担。返回不是新生产或负损失。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_culture_returned_live <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_culture_matter_return_input` | `managed_culture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：从最终收集实际返回养殖的伴随物. 条件性按同状态接收 collect_collection_matter_return，记录身份、实测质量、原因、时间和继承负担；不能假定返回或重复记作新购材料。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_culture_matter_return_input <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_managed_culture_materials` | `managed_culture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的消耗材料（人工繁殖、直接孵化幼体培育与流水养成）. 条件性分别识别本节点实际清洁、监测、修理或防护材料，记录配方、作用、数量和上游负担；排除另列饲料、水和包装。不规定科研麻醉、标记或 DNA 操作。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_managed_culture_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_managed_culture_service` | `managed_culture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的设备与共享资产服务（人工繁殖、直接孵化幼体培育与流水养成）. 条件性仅计量设备／共享资产实际运行或占用服务时间，保留资产身份、所有消费者、服务期间、安装、维护、更换、闲置／失败期间和寿终。h 不是所有供应商服务的强制单位：其他实际服务在最终绑定前须独立申报其原生属性／单位及实测数量。完整购买服务不重复其已覆盖的组件能源、材料、资产和排放；组件建模排除完整服务。delivery 的 h 仅包含完整货运范围外另有证据的处理／等待／设备；货运已覆盖装卸不得重复。 <br> - 流属性/单位：Service duration / h <br> - 数量规则：逐项独立观测实际 h；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_managed_culture_service <br> - 单位：h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_managed_culture_fuel` | `managed_culture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按质量计量非电能源载体（人工繁殖、直接孵化幼体培育与流水养成）. 条件性逐项记录以原生质量计量的实际液体／固体燃料物质／状态、数量、用途、供应上游负担和设备／事件，保留实测 kg 及任何可追溯密度／能量换算输入和因子来源。排除完整服务已覆盖载体；不能把燃料放入消耗材料卡。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_managed_culture_fuel <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_managed_culture_gaseous_fuel` | `managed_culture`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按体积计量气体能源载体（人工繁殖、直接孵化幼体培育与流水养成）. 条件性逐项记录以原生 m3 计量的实际气体燃料物质、温压和参考体积条件、数量、用途、上游供应负担与事件，保留实测体积及任何换算因子来源。排除完整服务覆盖，不强制将气体体积改为 kg 或 h。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_managed_culture_gaseous_fuel <br> - 单位：m3 <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_culture_matter_to_collection` | `managed_culture`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：伴随养殖动物交至最终收集的实际其他物质. 条件性逐项识别实际伴随的非动物材料，记录身份／状态、实测质量、批次和匹配 collect_culture_matter_collection_input 的标识。不假定伴随物发生或可用去向；收集端记录实际可用交付、废物或返回。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_culture_matter_to_collection <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_culture_other_products` | `managed_culture`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际交付的可用后代或其他预期人工动物产品. 条件性记录向其他实际用途独立交接的可孵化卵、孵化幼体或亲体，逐项标明阶段／状态、用途、实际接收方与数量。它们需要分配，不能冒充成体参考。保留的未孵化后代属于携带繁殖服务的库存。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_culture_other_products <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_culture_closing_stock` | `managed_culture`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：期末人工活体动物、亲体与可孵化后代库存. 条件性记录各阶段和群体的期末数量／状态及继承的已分配负担，匹配下期期初库存。保留活体不是未申报交付、零负担汇或处置。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_culture_closing_stock <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_managed_culture_solid_waste` | `managed_culture`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点产生的实际固体废物（人工繁殖、直接孵化幼体培育与流水养成）. 条件性按本节点实际情况分别识别死亡动物、拒收材料、饲料残余、清洁污泥或损坏消耗品，保留湿／干状态、去向及处理责任。可用产品和保留库存不是废物。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_managed_culture_solid_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_managed_culture_releases` | `managed_culture`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际识别的直接排放（人工繁殖、直接孵化幼体培育与流水养成）. 仅按实际物质和接收介质条件性记录。区分原始直接实测排放质量，与由实测浓度／体积或实测活动量及适用因子计算的原始排放质量。原始直接实测为 collected_record；因子／浓度推算及参考归一化数量为 calculated_value/calculated_from_collection。逐实例保留物质／形态或粒径、空气／水／土壤介质、时间、实测活动／浓度、采样体积、公式、因子／来源和不确定性。排除进水本底及完整服务已覆盖排放，宽泛有机物／污染物名称不能确定身份。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_managed_culture 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_managed_culture` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_managed_culture_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_culture_matter_collection_input` | `final_collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：伴随养殖动物接收的实际其他物质. 条件性逐项按同状态接收 collect_culture_matter_to_collection，保留身份、质量、批次和交接。按实际去向核对可用 collect_collection_usable_incidentals、废物或返回。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_final_collection` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_culture_matter_collection_input <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_final_collection_materials` | `final_collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的消耗材料（从养殖环境独立实施非返回式收集）. 条件性分别识别本节点实际清洁、监测、修理或防护材料，记录配方、作用、数量和上游负担；排除另列饲料、水和包装。不规定科研麻醉、标记或 DNA 操作。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_final_collection` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_final_collection_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_final_collection_service` | `final_collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的设备与共享资产服务（从养殖环境独立实施非返回式收集）. 条件性仅计量设备／共享资产实际运行或占用服务时间，保留资产身份、所有消费者、服务期间、安装、维护、更换、闲置／失败期间和寿终。h 不是所有供应商服务的强制单位：其他实际服务在最终绑定前须独立申报其原生属性／单位及实测数量。完整购买服务不重复其已覆盖的组件能源、材料、资产和排放；组件建模排除完整服务。delivery 的 h 仅包含完整货运范围外另有证据的处理／等待／设备；货运已覆盖装卸不得重复。 <br> - 流属性/单位：Service duration / h <br> - 数量规则：逐项独立观测实际 h；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_final_collection` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_final_collection_service <br> - 单位：h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_final_collection_fuel` | `final_collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按质量计量非电能源载体（从养殖环境独立实施非返回式收集）. 条件性逐项记录以原生质量计量的实际液体／固体燃料物质／状态、数量、用途、供应上游负担和设备／事件，保留实测 kg 及任何可追溯密度／能量换算输入和因子来源。排除完整服务已覆盖载体；不能把燃料放入消耗材料卡。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_final_collection` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_final_collection_fuel <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_final_collection_gaseous_fuel` | `final_collection`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按体积计量气体能源载体（从养殖环境独立实施非返回式收集）. 条件性逐项记录以原生 m3 计量的实际气体燃料物质、温压和参考体积条件、数量、用途、上游供应负担与事件，保留实测体积及任何换算因子来源。排除完整服务覆盖，不强制将气体体积改为 kg 或 h。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_final_collection` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_final_collection_gaseous_fuel <br> - 单位：m3 <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_usable_incidentals` | `final_collection`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际交至其他接收方的可用伴随物. 条件性识别具有独立用途和接收方的非动物材料；没有可用交接时，将实际拒收物归为废物而非共产品。不假定其发生。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_final_collection` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_usable_incidentals <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_collection_matter_return` | `final_collection`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：从收集实际返回养殖的伴随物. 条件性按同状态向 collect_culture_matter_return_input 交接，记录身份、实测质量、用途、时间与携带负担；将实际返回与场外可用交付、废物分别记录。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_final_collection` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_collection_matter_return <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_final_collection_solid_waste` | `final_collection`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点产生的实际固体废物（从养殖环境独立实施非返回式收集）. 条件性按本节点实际情况分别识别死亡动物、拒收材料、饲料残余、清洁污泥或损坏消耗品，保留湿／干状态、去向及处理责任。可用产品和保留库存不是废物。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_final_collection` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_final_collection_solid_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_final_collection_releases` | `final_collection`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际识别的直接排放（从养殖环境独立实施非返回式收集）. 仅按实际物质和接收介质条件性记录。区分原始直接实测排放质量，与由实测浓度／体积或实测活动量及适用因子计算的原始排放质量。原始直接实测为 collected_record；因子／浓度推算及参考归一化数量为 calculated_value/calculated_from_collection。逐实例保留物质／形态或粒径、空气／水／土壤介质、时间、实测活动／浓度、采样体积、公式、因子／来源和不确定性。排除进水本底及完整服务已覆盖排放，宽泛有机物／污染物名称不能确定身份。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_final_collection 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_final_collection` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_final_collection_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_grading_materials` | `grading`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的消耗材料（实际活体产品分级与去向判定）. 条件性分别识别本节点实际清洁、监测、修理或防护材料，记录配方、作用、数量和上游负担；排除另列饲料、水和包装。不规定科研麻醉、标记或 DNA 操作。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_grading` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_grading_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_grading_service` | `grading`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的设备与共享资产服务（实际活体产品分级与去向判定）. 条件性仅计量设备／共享资产实际运行或占用服务时间，保留资产身份、所有消费者、服务期间、安装、维护、更换、闲置／失败期间和寿终。h 不是所有供应商服务的强制单位：其他实际服务在最终绑定前须独立申报其原生属性／单位及实测数量。完整购买服务不重复其已覆盖的组件能源、材料、资产和排放；组件建模排除完整服务。delivery 的 h 仅包含完整货运范围外另有证据的处理／等待／设备；货运已覆盖装卸不得重复。 <br> - 流属性/单位：Service duration / h <br> - 数量规则：逐项独立观测实际 h；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_grading` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_grading_service <br> - 单位：h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_grading_fuel` | `grading`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按质量计量非电能源载体（实际活体产品分级与去向判定）. 条件性逐项记录以原生质量计量的实际液体／固体燃料物质／状态、数量、用途、供应上游负担和设备／事件，保留实测 kg 及任何可追溯密度／能量换算输入和因子来源。排除完整服务已覆盖载体；不能把燃料放入消耗材料卡。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_grading` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_grading_fuel <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_grading_gaseous_fuel` | `grading`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按体积计量气体能源载体（实际活体产品分级与去向判定）. 条件性逐项记录以原生 m3 计量的实际气体燃料物质、温压和参考体积条件、数量、用途、上游供应负担与事件，保留实测体积及任何换算因子来源。排除完整服务覆盖，不强制将气体体积改为 kg 或 h。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_grading` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_grading_gaseous_fuel <br> - 单位：m3 <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_graded_other_usable` | `grading`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际交至相应接收方的其他可用完整动物等级. 条件性记录降级或其他预期活体产品的实际等级、用途和接收方，单独计量并分配负担。死亡／冷冻／加工动物不能作活体参考；保留其实际副产品身份。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_grading` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_graded_other_usable <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_grading_solid_waste` | `grading`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点产生的实际固体废物（实际活体产品分级与去向判定）. 条件性按本节点实际情况分别识别死亡动物、拒收材料、饲料残余、清洁污泥或损坏消耗品，保留湿／干状态、去向及处理责任。可用产品和保留库存不是废物。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_grading` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_grading_solid_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_grading_releases` | `grading`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际识别的直接排放（实际活体产品分级与去向判定）. 仅按实际物质和接收介质条件性记录。区分原始直接实测排放质量，与由实测浓度／体积或实测活动量及适用因子计算的原始排放质量。原始直接实测为 collected_record；因子／浓度推算及参考归一化数量为 calculated_value/calculated_from_collection。逐实例保留物质／形态或粒径、空气／水／土壤介质、时间、实测活动／浓度、采样体积、公式、因子／来源和不确定性。排除进水本底及完整服务已覆盖排放，宽泛有机物／污染物名称不能确定身份。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_grading 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_grading` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_grading_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_bounded_holding_materials` | `bounded_holding`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的消耗材料（分级后的有界活体暂养）. 条件性分别识别本节点实际清洁、监测、修理或防护材料，记录配方、作用、数量和上游负担；排除另列饲料、水和包装。不规定科研麻醉、标记或 DNA 操作。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_bounded_holding` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_bounded_holding_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_bounded_holding_service` | `bounded_holding`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的设备与共享资产服务（分级后的有界活体暂养）. 条件性仅计量设备／共享资产实际运行或占用服务时间，保留资产身份、所有消费者、服务期间、安装、维护、更换、闲置／失败期间和寿终。h 不是所有供应商服务的强制单位：其他实际服务在最终绑定前须独立申报其原生属性／单位及实测数量。完整购买服务不重复其已覆盖的组件能源、材料、资产和排放；组件建模排除完整服务。delivery 的 h 仅包含完整货运范围外另有证据的处理／等待／设备；货运已覆盖装卸不得重复。 <br> - 流属性/单位：Service duration / h <br> - 数量规则：逐项独立观测实际 h；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_bounded_holding` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_bounded_holding_service <br> - 单位：h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_bounded_holding_fuel` | `bounded_holding`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按质量计量非电能源载体（分级后的有界活体暂养）. 条件性逐项记录以原生质量计量的实际液体／固体燃料物质／状态、数量、用途、供应上游负担和设备／事件，保留实测 kg 及任何可追溯密度／能量换算输入和因子来源。排除完整服务已覆盖载体；不能把燃料放入消耗材料卡。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_bounded_holding` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_bounded_holding_fuel <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_bounded_holding_gaseous_fuel` | `bounded_holding`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按体积计量气体能源载体（分级后的有界活体暂养）. 条件性逐项记录以原生 m3 计量的实际气体燃料物质、温压和参考体积条件、数量、用途、上游供应负担与事件，保留实测体积及任何换算因子来源。排除完整服务覆盖，不强制将气体体积改为 kg 或 h。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_bounded_holding` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_bounded_holding_gaseous_fuel <br> - 单位：m3 <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_bounded_holding_solid_waste` | `bounded_holding`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点产生的实际固体废物（分级后的有界活体暂养）. 条件性按本节点实际情况分别识别死亡动物、拒收材料、饲料残余、清洁污泥或损坏消耗品，保留湿／干状态、去向及处理责任。可用产品和保留库存不是废物。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_bounded_holding` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_bounded_holding_solid_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_bounded_holding_releases` | `bounded_holding`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际识别的直接排放（分级后的有界活体暂养）. 仅按实际物质和接收介质条件性记录。区分原始直接实测排放质量，与由实测浓度／体积或实测活动量及适用因子计算的原始排放质量。原始直接实测为 collected_record；因子／浓度推算及参考归一化数量为 calculated_value/calculated_from_collection。逐实例保留物质／形态或粒径、空气／水／土壤介质、时间、实测活动／浓度、采样体积、公式、因子／来源和不确定性。排除进水本底及完整服务已覆盖排放，宽泛有机物／污染物名称不能确定身份。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_bounded_holding 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_bounded_holding` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_bounded_holding_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_package` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际保护容器和呈现材料. 逐项识别实际包装／材料及作用、新增／复用所有权、实测皮重和状态。对复用品使用实测寿命／周转分配；不假定单次包装或免费复用资产。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_package <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_package_return` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：为呈现实际返回的可复用保护包装. 条件性匹配 delivery 的同材料／状态／数量返回，保留既往负担、状态、清洁、修理和损失，不作新增原生包装供应。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_package_return <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_package_opening_stock` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际期初保护包装库存. 条件性按材料、状态和所有权实测同状态期初包装，保留继承服务负担和前期期末标识，不能视为原生材料供应。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_package_opening_stock <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_materials` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的消耗材料（活体保护性呈现）. 条件性分别识别本节点实际清洁、监测、修理或防护材料，记录配方、作用、数量和上游负担；排除另列饲料、水和包装。不规定科研麻醉、标记或 DNA 操作。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_service` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的设备与共享资产服务（活体保护性呈现）. 条件性仅计量设备／共享资产实际运行或占用服务时间，保留资产身份、所有消费者、服务期间、安装、维护、更换、闲置／失败期间和寿终。h 不是所有供应商服务的强制单位：其他实际服务在最终绑定前须独立申报其原生属性／单位及实测数量。完整购买服务不重复其已覆盖的组件能源、材料、资产和排放；组件建模排除完整服务。delivery 的 h 仅包含完整货运范围外另有证据的处理／等待／设备；货运已覆盖装卸不得重复。 <br> - 流属性/单位：Service duration / h <br> - 数量规则：逐项独立观测实际 h；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_service <br> - 单位：h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_fuel` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按质量计量非电能源载体（活体保护性呈现）. 条件性逐项记录以原生质量计量的实际液体／固体燃料物质／状态、数量、用途、供应上游负担和设备／事件，保留实测 kg 及任何可追溯密度／能量换算输入和因子来源。排除完整服务已覆盖载体；不能把燃料放入消耗材料卡。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_fuel <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_gaseous_fuel` | `presentation`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按体积计量气体能源载体（活体保护性呈现）. 条件性逐项记录以原生 m3 计量的实际气体燃料物质、温压和参考体积条件、数量、用途、上游供应负担与事件，保留实测体积及任何换算因子来源。排除完整服务覆盖，不强制将气体体积改为 kg 或 h。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_gaseous_fuel <br> - 单位：m3 <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_package_closing_stock` | `presentation`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际期末保护包装库存. 条件性按材料、状态和所有权实测同状态期末包装，匹配下期 collect_package_opening_stock，携带服务／更换／终止及继承负担，不与已发运或已返回包装重复。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_package_closing_stock <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presented_package` | `presentation`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：伴随活体动物发运的实际保护包装. 按同状态向 collect_delivery_package 独立交接实际材料／皮重／状态／所有权、复用及最终交接或返回记录。包装负担随分配后的服务结转，不在两个节点重复。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presented_package <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_solid_waste` | `presentation`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点产生的实际固体废物（活体保护性呈现）. 条件性按本节点实际情况分别识别死亡动物、拒收材料、饲料残余、清洁污泥或损坏消耗品，保留湿／干状态、去向及处理责任。可用产品和保留库存不是废物。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_solid_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_presentation_releases` | `presentation`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际识别的直接排放（活体保护性呈现）. 仅按实际物质和接收介质条件性记录。区分原始直接实测排放质量，与由实测浓度／体积或实测活动量及适用因子计算的原始排放质量。原始直接实测为 collected_record；因子／浓度推算及参考归一化数量为 calculated_value/calculated_from_collection。逐实例保留物质／形态或粒径、空气／水／土壤介质、时间、实测活动／浓度、采样体积、公式、因子／来源和不确定性。排除进水本底及完整服务已覆盖排放，宽泛有机物／污染物名称不能确定身份。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_presentation 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_presentation` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_presentation_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_package` | `delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：为活体交付接收的实际保护包装. 按同状态接收 collect_presented_package，保留皮重／材料／复用／所有权，分别记录实际去向或返回。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_package <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_transport` | `delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：实际首次接收前的货运服务. 条件性逐段记录实际货运，采用动物、载水、包装在内的实测载荷、距离、方式、装卸、承运方和共载份额。内部移动和客户付款段仍在范围内。完整货运服务排除其已覆盖的燃料／电力／车辆／排放重复计量；组件模型不再纳入完整货运。 <br> - 流属性/单位：Transport service / t.km <br> - 数量规则：逐项独立观测实际 t.km；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_transport <br> - 单位：t.km <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_fuel` | `delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：首次接收前按组件建模的移动实际用燃料. 条件性逐项识别燃料／状态、实测质量或可追溯密度换算、方式和路段，保留上游供应。排除已由完整货运服务覆盖的路段。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_fuel <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_materials` | `delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的消耗材料（首次实际接收前的全部移动与验收）. 条件性分别识别本节点实际清洁、监测、修理或防护材料，记录配方、作用、数量和上游负担；排除另列饲料、水和包装。不规定科研麻醉、标记或 DNA 操作。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_materials <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_service` | `delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的设备与共享资产服务（首次实际接收前的全部移动与验收）. 条件性仅计量设备／共享资产实际运行或占用服务时间，保留资产身份、所有消费者、服务期间、安装、维护、更换、闲置／失败期间和寿终。h 不是所有供应商服务的强制单位：其他实际服务在最终绑定前须独立申报其原生属性／单位及实测数量。完整购买服务不重复其已覆盖的组件能源、材料、资产和排放；组件建模排除完整服务。delivery 的 h 仅包含完整货运范围外另有证据的处理／等待／设备；货运已覆盖装卸不得重复。 <br> - 流属性/单位：Service duration / h <br> - 数量规则：逐项独立观测实际 h；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_service <br> - 单位：h <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_gaseous_fuel` | `delivery`; 输入; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际使用的按体积计量气体能源载体（首次实际接收前的全部移动与验收）. 条件性逐项记录以原生 m3 计量的实际气体燃料物质、温压和参考体积条件、数量、用途、上游供应负担与事件，保留实测体积及任何换算因子来源。排除完整服务覆盖，不强制将气体体积改为 kg 或 h。 <br> - 流属性/单位：Volume / m3 <br> - 数量规则：逐项独立观测实际 m3；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_gaseous_fuel <br> - 单位：m3 <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_recipient_package` | `delivery`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：向首次实际接收方交接的实际保护包装. 条件性记录同状态包装交接、保管／复用责任，不捏造接收后处置负担。实际返回包装使用 collect_package_return_output。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_recipient_package <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_package_return_output` | `delivery`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：接收边界之前或当时实际返回的可复用保护包装. 条件性按同状态匹配 collect_presentation_package_return 或下期期初库存输入，保留数量／材料、状态、既往服务负担及实际清洁／修理去向。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_package_return_output <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_other_output` | `delivery`; 输出; 产品流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：验收前实际交接的其他可用动物产品. 条件性实际完整动物副产品须识别活／死／状态、用途和实际接收方，区别于已验收参考和废物，保留分配与全部失败移动负担。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_other_output <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_solid_waste` | `delivery`; 输出; 废物流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点产生的实际固体废物（首次实际接收前的全部移动与验收）. 条件性按本节点实际情况分别识别死亡动物、拒收材料、饲料残余、清洁污泥或损坏消耗品，保留湿／干状态、去向及处理责任。可用产品和保留库存不是废物。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_solid_waste <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `collect_delivery_releases` | `delivery`; 输出; 基本流 | 逐一识别本范围内实际发生的每个具体物理或化学交换，并补充独立清单卡；不得把本采集范围作为一个流。每卡须独立确定物质/物种、状态、流类型、属性、原生单位、数量、证据、归一化、去向与UUID。不得把本范围总量、共同上限或UUID复制给各子卡。每项实际交换按其真实来源和去向确定最终方向及产品/废物/基本流类型；本采集范围不指定通用交换类型。 采集范围：该节点实际识别的直接排放（首次实际接收前的全部移动与验收）. 仅按实际物质和接收介质条件性记录。区分原始直接实测排放质量，与由实测浓度／体积或实测活动量及适用因子计算的原始排放质量。原始直接实测为 collected_record；因子／浓度推算及参考归一化数量为 calculated_value/calculated_from_collection。逐实例保留物质／形态或粒径、空气／水／土壤介质、时间、实测活动／浓度、采样体积、公式、因子／来源和不确定性。排除进水本底及完整服务已覆盖排放，宽泛有机物／污染物名称不能确定身份。 <br> - 流属性/单位：Mass / kg <br> - 数量规则：逐项独立观测实际 kg；将可归属原生数量除以已验收 A，保留实际记录：cp_delivery 及 cp_receipt 的已验收 A。计算实例在分配前保留实际公式、实测输入、因子与来源。 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：由采集计算（`calculated_from_collection`） <br> - 采集协议：`cp_delivery` <br> - 来源：`cuttlefish-accounting-method` <br> - 数量范围：暂定且未确立的不确定性；须有独立观测 <br> - 范围角色：不确定性范围（`uncertainty_range`） <br> - 下限：0 <br> - 上限：U_delivery_releases <br> - 单位：kg <br> - 基准：每 1 kg 参考流 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：推理估算（`reasoned_estimate`） | 本过程采集协议、原始记录和逐流身份、数量、范围及去向证据 |
| `dq_logistics_water_balance` | 运输、服务和水/营养物平衡 | 运输实际载荷包括随行水、冰、包装及其他货物；空返或调位虽无产品载荷仍有活动负荷，须以实际燃料/距离/车辆服务及明确分配计入，不能以零吨公里消去。完整服务与其已覆盖燃料、材料、资产和直接排放不得重复计入。外部取水、供水产品、内部循环和实际返排水分别计量；内部循环不得再从外部取水中重复扣减。净营养物增量/滞留只用于独立平衡诊断，不自动成为负基本流、负排放或避免负荷。 | 实际载荷和车辆活动记录、服务覆盖、同批水/物质平衡与方法证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | live_receipt_reference | 要求正 A、一个最终已验收动物输出、匹配实际接收、活体／完整／从未冷冻的物种及用途证明，保留本体水并排除自由／载水／包装。A/A 是唯一 1..1 恒等式。 | `reference-mass-identity`; `cuttlefish-accounting-method` |
| validate_route | process map | 要求实际独立收集、等级／去向、暂养 active 或有证据绕过、保护性呈现和全部接收前移动。取样返回不能满足收获或实际接收；状态未知是不完整。 | `cuttlefish-accounting-method` |
| validate_ledger | all inventory rows | 按状态／原生属性／单位／数量／批次／期间及负担匹配每次交接、库存和返回，独立核对预期输出、库存、投喂／残余、死亡、伴随物、水性去向及已识别排放。不能将本体水变化或未观察排放当实测以虚构闭合。 | `cuttlefish-accounting-method` |
| validate_attribution | shared outputs periods and assets | 仅一次核对全部输出／期间／共享消费者份额，结转繁殖／后代／亲体和失败期间负担，保留资产寿命／更换／终止，证明经济后备分母／库存估值或合理替代及敏感性。 | `cuttlefish-accounting-method` |
| validate_evidence | collected calculated and provisional evidence | 要求本节点协议和实际记录来源；计算能源／排放须逐实例保留实测输入／公式／因子来源。暂定范围与定性文献不能确定实际数量、法律／食品健康／福利状态、盈利、默认投喂率或商业交付。 | `cuttlefish-accounting-method` |
| `validate_atomic_completion` | 所有适用的逐流采集义务和最终交换 | 只有每项实际发生的交换均有独立原子卡及其自身的数量、属性/原生单位、采集或计算证据、范围/不确定性证据、归一化、实际去向和已验证UUID时，最终数据包才可完成并通过验证。未知身份、活动状态、数量、范围证据或去向会阻断完成；不得视为零、默认为旁路或靠省略义务通过。所有重要具体流须保留自身范围/不确定性证据采集责任；符号上限不是实证范围。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 以实际原始采集和声明计算产生的 foreground_dataset |
| downstream_use | 完成方法审查、实际交换身份核实及数量／质量验证后，具体填充的 process 或 lifecyclemodel 投影可在匹配边界下支持 secondary_dataset 或 background_dataset 使用 |
| allowed_use | 保留声明的库存／繁殖／服务分配和不确定性的来源相容完整活体人工 Sepia officinalis 路线及实际场址／期间／边界 |
| excluded_use | 外推整个 CPC 小类；鱿鱼或其他物种；直接野生捕捞；观赏、死亡或加工参考状态；论文商业／利润／食品健康／福利／法律认证；自动采用暂定数量或未解决汇总身份 |
| required_metadata | 物种／谱系／起始阶段；实际地点／群体／期间；来源及上游数据集关联；产品状态／等级／用途；质量／数量／水／皮重方法；暂养状态；实际接收边界／物流；交接／库存／返回标识；全部输出；服务／资产寿命和消费者；分配与具体交换 |
| required_quality_disclosure | 实际原始记录覆盖、失败期间和库存结转；不确定性／校准／抽样；暂定范围替代或未解决情况；量化计算输入／因子来源；身份及方法审查；排除的服务组件；缺失状态／记录 |
| update_trigger | 物种／来源／生产模式／饲料／水系统变化；阶段、繁殖分配、资产寿命或消费者变化；暂养／呈现／边界或物流变化；新增测量／因子／身份或实质数据缺口 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| capaz-cuttlefish-2020 | literature | Capaz et al. (2020), Control of Zootechnology Leads to Improved Cuttlefish (Sepia officinalis, L.) Reproduction Performance up to Pre-industrial Levels, Frontiers in Marine Science 7:112. https://doi.org/10.3389/fmars.2020.00112；访问日期 2026-10-12 | Culture Methodology 与 Data and Sample Collection：仅支持人工卵／育苗／养成、水／曝气／遮光、饲料及取样返回／繁殖范围背景，不支持数值默认或商业实际接收 |
| cuttlefish-accounting-method | method_factor | 本 PCR 第 3–9 节明确声明的前瞻人工乌贼前景核算方法 | 本节点采集、原生单位／参考归一化、完整阶段／输出／库存／返回／服务台账、来源局限、条件状态、实际接收边界和分配；未来实际记录提供数量 |
| reference-mass-identity | method_factor | 同一正验收批次归一化恒等式 A/A=1；A 由 cp_receipt 独立采集 | 仅用于最终参考输出与 1..1 范围；是核算恒等式而非存活／收率／默认假设 |
