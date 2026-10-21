---
pcr_id: pcr.wild-live-whole-homarus-lobsters
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 首次生产者交接的野生完整活体螯龙虾属食用虾

## 1. 范围与适用性

本 PCR 覆盖首次生产者交接的海洋野生捕捞螯龙虾属（Homarus spp.）实际原壳完整活体食用原体。披露实际缺失附肢和壳体或蜕壳状态，不重构。方法用于前景数据生产，完整核算捕捞航次、实物去向及有界活体处理。不预设国家、具体物种、渔具、暂养时长或温度。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.wild-live-whole-homarus-lobsters` |
| classification_refs | CPC 3.0:04331; narrower |
| covered_products | 首次生产者门食用验收的海洋野生螯龙虾属原壳完整活体原体，按实际原体、附肢及蜕壳状态。 |
| excluded_products | Panulirus、Palinurus、Jasus、Nephrops 及淡水螯虾；养殖、育肥或诱导蜕壳产品；死亡鲜或冷藏原体、分离螯尾肉、冻结或熟制或腌制产品；苗种、亲本或观赏用途；首次门后转售。 |
| representative_product | 实际存活的野生螯龙虾属食用批次，原壳及真实记录状态，于生产渔业首次交接。 |
| production_route | 野生海洋捕捞母活动及实际笼具、网具或其他有证据技术差异；实际分级、有界生产者护理或呈现事件图，不属于水产养殖。 |
| market_state | 实际存活的原壳完整食用原体；实际验收等级、壳体或蜕壳及附肢状态。非冻结降温不能取代存活要求。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 首次生产者食用交接的实际原壳完整活体螯龙虾属虾 |
| How much | 1 千克原体净质量 |
| How well | 当前存活、其自身螯龙虾属身份、实际壳体及附肢、实际食用验收；排除辅助物、游离水及冰质量。 |
| How long or cycle | 声明航次或作业期及相关保活或资产服务期间，从准备至归属返航、维护及首次食用交接；无通用周期或保质期。 |
| reference_flow_link | `live_homarus_food_handover` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 首次生产者食用交接的实际原壳完整活体螯龙虾属虾 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 螯龙虾属物种；野生来源及实际海域；捕捞渔具及航次或批次；存活及处理时间线；实际壳体或蜕壳及附肢状态；去向等级及食用验收证据；原体净质量称量方法；首次生产者门、地点及时间；实际服务和期间边界。 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按 cp_handover_mass 用经校准秤称量实际存活验收批次净原体；扣除计量外部皮重、游离水、冰、绑带及包装，不扣原壳或天然保留体液。件数换质量须有实际同物种同状态计量样本，不用通用个体重。 |
| energy_units | 能量清单 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量耗电及供应身份；1 kWh = 3.6 MJ。燃料采用实际供应质量及有依据热值或碳证据，不虚构通用质量转能量比。 |
| physical_mass | 实物台账 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 t = 1000 kg；1 g = 0.001 kg。保留湿基或供应态、库存及物料边界；未知密度、干物质或气体参比条件不默换。配对转移采用相同边界，排除循环通量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 有记录的野生海洋螯龙虾属捕捞情境与所负责准备、渔具及饵料供应，不是采购生产者门原体或养殖苗种。 |
| starting_condition_role | 自天然种群的前景起捕，并具有上游供给投入和实际服务责任。 |
| product_classification_scope | CPC 3.0:04331；narrower：仅野生完整活体食用螯龙虾属虾 |
| recursive_input_rule | 采购已过首次生产者门的完整螯龙虾属产品属于转售，不纳入本捕捞 PCR。自捕内部道次保留配对身份及负担，不递归采购最终产品。外购或自捕饵料为独立投入用途，采用其实际上游数据集。 |
| upstream_dataset_requirement | 实际饵料、燃料、电力、材料、资产及服务供给须有匹配来源、状态、供方和单位，明确所含负担范围及当前证据。 |
| disclosure | 声明实际批次或事件图、物种及来源、壳体及存活状态、门、航次及返航边界、期间、服务或资产用户、等级或去向集合、水及饵料库存和全部证据缺口。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate_and_responsibility` | 前景边界 | 负责实际野生捕捞直至生产者负责的分级、有界保活或呈现及首次食用交接。纳入所负责出航、饵料或渔具供应、捕捞、转运、归属返航、闲置、清洗和资产服务，即使已在海上交接；不延长门后产品处理。采购首次门后螯龙虾属产品转售及商人暂养排除。 | `noaa-american-lobster` |
| `state_graph` | 所有实际道次 | 捕捞产出存活待分级个体；必须的去向分级建立实际食用验收。保活及呈现可在分级前后发生，仅以不同事件或道次编号及配对转移表示重复。分级前道次保持待验收；分级后状态变化需复检。交接仅接收当前存活且已分级食用批次，与最后节点名称无关。顺序或状态未知是缺口，不可绕过。 |  |
| `technology_delta` | capture | 声明捕捞母活动的实际渔具。笼具、网具或其他有证据渔具在布放或起捕设备、能耗、用饵需求、遗失以及兼捕、栖息地或缠绕观察上存在差异。无饵渔具不规定饵料。不同渔具仅在不同记录事件或责任上并存，不重复同一动物。路线名称不意味着通用影响、渔具寿命或效率结论。 | `noaa-american-lobster` |
| `water_and_service_boundary` | 所有节点 | 分开采集外供、新增自取及配对内部转移；节点内循环是通量，不是新增交换。核对库存、计量排水或处理、随产品或辅助物携带游离水、实际蒸发及融冰，天然体液不视为外来游离水。纯服务以实际发票单位进入辅助台账，最终数据集交换前须确认准确属性或单位；不虚构千克服务。登记包含范围，避免已含燃料、水、材料或上游排放又列直接行。 |  |
| `native_body_and_care` | 所有活体状态 | 原壳、组织及天然保留体液定义实际原体质量；记录物种、蜕壳或壳体及缺失附肢状态，不重构缺失部分。绑带、冰、游离水和容器保留独立实物去向。保活不以生物量生产、育肥或诱导蜕壳为目的；不通用要求浸水、投饲或冰直接接触。实际食用许可与存活状态须对应真实时地，不得从一般物种网页推定。 |  |

## 6. 过程清单结构

过程图顺序是责任清单，不是强制时间顺序。声明实际 production_mode：离散捕捞航次或批次，仅在实际运行时纳入连续共享保活运行，并明确运行或期间起止。记录实际航次、批次、道次、事件、转移以及共享保活运行或服务期间；清洗、切换及无产出期间保留所属作业期。条件节点仅在门前实际实施时启用。真实跨节点交接配对实际状态与质量，共享数量具有唯一责任者。不跨物料边界的纯外包服务、可重复资产使用及库存保留明确辅助台账及实际单位，最终数据集使用前须完成具体交换。

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | 野生捕捞与起捕 | required | 每个纳入批次均具有本系统负责的野生捕捞责任；不含采购首次交接后龙虾的转售。 | 前景责任活动 | captured_live_unsorted；其他实际有意捕获产品 |
| `grade` | 活体状态及去向分级 | required | 每个最终食用批次均有实际状态及去向验收记录。 | 前景责任活动 | graded_live_food；实际其他产品及拒收去向 |
| `live_maintenance` | 有界生产者保活 | conditional | 交接前实际发生生产者负责的保活或非冻结降温，可按记录在分级前或后；不得属于主动养殖增重、育肥或诱导蜕壳。 | 前景责任活动 | maintained_live；死亡、实际其他产品及放归 |
| `presentation` | 活体约束与保护性呈现 | conditional | 交接前实际由生产者负责施加绑带、保护容器或一次性包装。 | 前景责任活动 | presented_live；包装废物及单独交接物料 |
| `handover` | 首次生产者食用交接 | required | 最终活体食用验收后实际首次转出生产渔业系统；可为海上、码头或其他实际生产者门。 | 前景责任活动 | live_homarus_food_handover |

### 过程：野生捕捞与起捕 (`capture`)

从有记录的海域起捕实际野生螯龙虾属个体及兼捕物。捕捞独立于此前自然生长以及后续分级、保活。纳入出航、布放、起捕、生产者负责的转运以及归属返航，即使产品在海上已经交接。

#### 输入

##### 产品流

###### 实际消耗的中国低压电网平均电力 (`capture_cn_low_voltage_electricity`)

仅限实际供用户的中国电网平均小于 1 kV 交流电；以 MJ 计量归属耗电或按 energy_units 换算 kWh。其他地区、电压、可再生合同电力及船上发电不用此卡。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：由 cp_capture_energy 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_energy`
- 数量范围：暂定可替换能量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际其他外供电力 (`capture_other_electricity`)

实际使用时保留外供者、地区、电压、技术及消费边界，各供电分别识别。排除已表示的中国电网消费及自发电重复计数。

- 选定流：实际其他外供电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：由 cp_capture_energy 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_energy`
- 数量范围：暂定可替换能量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际外购处理工业过程用水 (`capture_treated_industrial_water`)

仅限实际供应且技术用途相符的处理工业过程水。不代表原海水、饮用水认证、循环水通量或内部转移。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际其他外供水或内部转移水 (`capture_other_water_receipt`)

按来源、处理及供方展开实际外供水，或以相同编号和边界质量配对内部水转移。排除处理工业供水、自取水及节点内反复循环。

- 选定流：实际其他外供水或内部转移水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际外购捕捞或卸岸保鲜冰 (`capture_capture_ice`)

仅限实际外购且供应用途相符的捕捞或卸岸保鲜冰，可含有记录且适合声明活体产品的间接降温。不强制冰直接接触，不以干冰代替，亦不重复自制冰。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际从海洋环境起捕的野生螯龙虾属生物量 (`wild_homarus_removed`)

计量有记录捕捞事件中起捕的全部目标个体，包括随后放归、死亡或拒收者；不得仅由最终销售反推起捕。此前自然生长不虚构养殖饲料或苗种交换。

- 选定流：实际从海洋环境起捕的野生螯龙虾属生物量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 来源：`noaa-american-lobster`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际直接抽取的海水或其他环境水 (`capture_self_abstracted_water`)

识别实际淡水或海水来源、地点及新增取水计量。新增抽取只计一次；循环及配对产品水接收不属于取水。海水路线不强制淡水。

- 选定流：实际直接抽取的海水或其他环境水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 单独计量的液态水 (`capture_free_water_ice_transfer_water`)

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

###### 单独计量的固态水冰 (`capture_free_water_ice_transfer_ice`)

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



###### 待去向分级的捕获原体活螯龙虾属虾 (`captured_live_unsorted`)

称量实际交给 grade、live_maintenance 或分级前 presentation 的存活捕获物。保留原壳、组织、天然体液、实际附肢或壳体状态、转移编号及待验收状态；属于中间品，不固定为最终 1 千克。

- 选定流：待去向分级的捕获原体活螯龙虾属虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 来源：`noaa-american-lobster`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际向另一前景节点转移的水 (`capture_internal_water_transfer`)

以配对 other_water_receipt、实际质量及来源记录真实跨节点转移。排除节点内泵送通量及已包含在另项载水转移中的水；不是销售、处置或新增取水。

- 选定流：实际向另一前景节点转移的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 实际交外部处理边界的废水 (`capture_wastewater_treatment`)

识别水质量、相关组成及处理接收方，实际融冰、清洗或保活水只计一次。环境排水、随产品携水及内部转移为其他去向。

- 选定流：实际交外部处理边界的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际活体捕获物放归原海洋环境 (`live_catch_return`)

识别目标及兼捕物种、存活、地点和放归事件；环境放归不是销售、废物交运或负生产抵扣。

- 选定流：实际活体捕获物放归原海洋环境
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 来源：`dfo-at-sea-lobster-catch`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际向海洋环境抛弃的死亡捕获物 (`dead_catch_discard`)

仅限有证据的实际环境去向，附物种、质量及适用许可或历史；不重复作为处理废物或活体放归。单列环境问题，不作通用无害抛弃声明。

- 选定流：实际向海洋环境抛弃的死亡捕获物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 来源：`dfo-at-sea-lobster-catch`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际排入环境受纳介质的水 (`capture_water_environment_discharge`)

明确实际海洋或淡水受纳介质、去向、取水与返排及计量排水。物种或物质明确的污染负荷进入 direct_other_emissions；同一水不再分类为处理废物。

- 选定流：实际排入环境受纳介质的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际有证据的向空气蒸发水 (`capture_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅纳入经计量或独立支持的实际蒸发估算，记录受纳空气及不确定性；不得作补足缺失水平衡的任意平差项。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际直接排入未特定空气的化石二氧化碳 (`capture_fossil_co2_air`)

仅限已确认空气区室的直接化石 CO2；按 direct_emissions 由实际相容燃料碳及氧化证据计量或计算。不代表通用燃料系数、上游重复或龙虾生物源呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：活体状态及去向分级 (`grade`)

接收捕捞或先前保活、呈现道次的实际待分级活体。检查物种、原体和壳体状态、附肢、存活及适用食用验收；区分食用验收品、独立有意产品、活体放归、死亡物与废物。分级验收不代表虚设的通用尺寸、法规或安全阈值。

#### 输入

##### 产品流

###### 本节点接收的实际存活完整螯龙虾属虾 (`grade_live_receipt`)

采用实际前道次、配对转移编号、物种、壳体或附肢状态及待分级或已验收状态。只有 handover 接收必须已具备当前最终食用验收；内部接收不假设等于最终参考数量。

- 选定流：本节点接收的实际存活完整螯龙虾属虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际消耗的中国低压电网平均电力 (`grade_cn_low_voltage_electricity`)

仅限实际供用户的中国电网平均小于 1 kV 交流电；以 MJ 计量归属耗电或按 energy_units 换算 kWh。其他地区、电压、可再生合同电力及船上发电不用此卡。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：由 cp_grade_energy 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_energy`
- 数量范围：暂定可替换能量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际其他外供电力 (`grade_other_electricity`)

实际使用时保留外供者、地区、电压、技术及消费边界，各供电分别识别。排除已表示的中国电网消费及自发电重复计数。

- 选定流：实际其他外供电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：由 cp_grade_energy 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_energy`
- 数量范围：暂定可替换能量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际外购处理工业过程用水 (`grade_treated_industrial_water`)

仅限实际供应且技术用途相符的处理工业过程水。不代表原海水、饮用水认证、循环水通量或内部转移。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际其他外供水或内部转移水 (`grade_other_water_receipt`)

按来源、处理及供方展开实际外供水，或以相同编号和边界质量配对内部水转移。排除处理工业供水、自取水及节点内反复循环。

- 选定流：实际其他外供水或内部转移水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际外购捕捞或卸岸保鲜冰 (`grade_capture_ice`)

仅限实际外购且供应用途相符的捕捞或卸岸保鲜冰，可含有记录且适合声明活体产品的间接降温。不强制冰直接接触，不以干冰代替，亦不重复自制冰。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际直接抽取的海水或其他环境水 (`grade_self_abstracted_water`)

识别实际淡水或海水来源、地点及新增取水计量。新增抽取只计一次；循环及配对产品水接收不属于取水。海水路线不强制淡水。

- 选定流：实际直接抽取的海水或其他环境水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 单独计量的液态水 (`grade_free_water_ice_transfer_water`)

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

###### 单独计量的固态水冰 (`grade_free_water_ice_transfer_ice`)

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



###### 已分级食用验收的活螯龙虾属虾 (`graded_live_food`)

计量实际输出原体质量及去向。grade 输出须通过声明食用验收；保活或呈现保留输入的待验收或已验收状态，直到实际分级或复检。配对内部转移、保留事件顺序，不假设内部投入等于最终质量。

- 选定流：已分级食用验收的活螯龙虾属虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际向另一前景节点转移的水 (`grade_internal_water_transfer`)

以配对 other_water_receipt、实际质量及来源记录真实跨节点转移。排除节点内泵送通量及已包含在另项载水转移中的水；不是销售、处置或新增取水。

- 选定流：实际向另一前景节点转移的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 实际交外部处理边界的废水 (`grade_wastewater_treatment`)

识别水质量、相关组成及处理接收方，实际融冰、清洗或保活水只计一次。环境排水、随产品携水及内部转移为其他去向。

- 选定流：实际交外部处理边界的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际活体逸出或获准环境放归 (`grade_live_environment_return`)

仅记录实际识别的存活生物、来源或受纳水体与事件；区分逸出、主动放归和配对内部转移。不假定例行放归或抵扣。

- 选定流：实际活体逸出或获准环境放归
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际进入海洋环境的死亡原体物料 (`grade_dead_environment_destination`)

仅限具原体身份、质量、事件及受纳介质的实际记录环境去向；记录适用许可及问题，不规定为处置路线。排除已交产品或处理接收方物料，不作为活体放归。

- 选定流：实际进入海洋环境的死亡原体物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际排入环境受纳介质的水 (`grade_water_environment_discharge`)

明确实际海洋或淡水受纳介质、去向、取水与返排及计量排水。物种或物质明确的污染负荷进入 direct_other_emissions；同一水不再分类为处理废物。

- 选定流：实际排入环境受纳介质的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际有证据的向空气蒸发水 (`grade_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅纳入经计量或独立支持的实际蒸发估算，记录受纳空气及不确定性；不得作补足缺失水平衡的任意平差项。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际直接排入未特定空气的化石二氧化碳 (`grade_fossil_co2_air`)

仅限已确认空气区室的直接化石 CO2；按 direct_emissions 由实际相容燃料碳及氧化证据计量或计算。不代表通用燃料系数、上游重复或龙虾生物源呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：有界生产者保活 (`live_maintenance`)

接收处于实际待分级或已验收状态的存活批次；在有记录的暂养道次保持相应状态。记录实际水、氧、降温、维护、死亡和活体逸出或放归，不强制浸水、投饲或冰直接接触。自然发生状态变化须记录复检，不视为受控生物生产。

#### 输入

##### 产品流

###### 本节点接收的实际存活完整螯龙虾属虾 (`live_maintenance_live_receipt`)

采用实际前道次、配对转移编号、物种、壳体或附肢状态及待分级或已验收状态。只有 handover 接收必须已具备当前最终食用验收；内部接收不假设等于最终参考数量。

- 选定流：本节点接收的实际存活完整螯龙虾属虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际消耗的中国低压电网平均电力 (`live_maintenance_cn_low_voltage_electricity`)

仅限实际供用户的中国电网平均小于 1 kV 交流电；以 MJ 计量归属耗电或按 energy_units 换算 kWh。其他地区、电压、可再生合同电力及船上发电不用此卡。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：由 cp_live_maintenance_energy 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_energy`
- 数量范围：暂定可替换能量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际其他外供电力 (`live_maintenance_other_electricity`)

实际使用时保留外供者、地区、电压、技术及消费边界，各供电分别识别。排除已表示的中国电网消费及自发电重复计数。

- 选定流：实际其他外供电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：由 cp_live_maintenance_energy 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_energy`
- 数量范围：暂定可替换能量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际外购处理工业过程用水 (`live_maintenance_treated_industrial_water`)

仅限实际供应且技术用途相符的处理工业过程水。不代表原海水、饮用水认证、循环水通量或内部转移。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际其他外供水或内部转移水 (`live_maintenance_other_water_receipt`)

按来源、处理及供方展开实际外供水，或以相同编号和边界质量配对内部水转移。排除处理工业供水、自取水及节点内反复循环。

- 选定流：实际其他外供水或内部转移水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际外购捕捞或卸岸保鲜冰 (`live_maintenance_capture_ice`)

仅限实际外购且供应用途相符的捕捞或卸岸保鲜冰，可含有记录且适合声明活体产品的间接降温。不强制冰直接接触，不以干冰代替，亦不重复自制冰。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 有记录保活系统实际外供氧气 (`live_maintenance_oxygen`)

仅限真实系统使用时的实际送达氧气；识别纯度、气态或液态或压缩状态、供方送达及计量质量或有依据参比条件换算。空气泵送不等于采购纯氧，工业出厂氧本身不能证明此身份。

- 选定流：有记录保活系统实际外供氧气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际直接抽取的海水或其他环境水 (`live_maintenance_self_abstracted_water`)

识别实际淡水或海水来源、地点及新增取水计量。新增抽取只计一次；循环及配对产品水接收不属于取水。海水路线不强制淡水。

- 选定流：实际直接抽取的海水或其他环境水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 单独计量的液态水 (`live_maintenance_free_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_maintenance_mass`

###### 单独计量的固态水冰 (`live_maintenance_free_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_maintenance_mass`



###### 实际保活道次后仍存活的螯龙虾属虾 (`maintained_live`)

计量实际输出原体质量及去向。grade 输出须通过声明食用验收；保活或呈现保留输入的待验收或已验收状态，直到实际分级或复检。配对内部转移、保留事件顺序，不假设内部投入等于最终质量。

- 选定流：实际保活道次后仍存活的螯龙虾属虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际向另一前景节点转移的水 (`live_maintenance_internal_water_transfer`)

以配对 other_water_receipt、实际质量及来源记录真实跨节点转移。排除节点内泵送通量及已包含在另项载水转移中的水；不是销售、处置或新增取水。

- 选定流：实际向另一前景节点转移的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 实际交外部处理边界的废水 (`live_maintenance_wastewater_treatment`)

识别水质量、相关组成及处理接收方，实际融冰、清洗或保活水只计一次。环境排水、随产品携水及内部转移为其他去向。

- 选定流：实际交外部处理边界的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际活体逸出或获准环境放归 (`live_maintenance_live_environment_return`)

仅记录实际识别的存活生物、来源或受纳水体与事件；区分逸出、主动放归和配对内部转移。不假定例行放归或抵扣。

- 选定流：实际活体逸出或获准环境放归
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际进入海洋环境的死亡原体物料 (`live_maintenance_dead_environment_destination`)

仅限具原体身份、质量、事件及受纳介质的实际记录环境去向；记录适用许可及问题，不规定为处置路线。排除已交产品或处理接收方物料，不作为活体放归。

- 选定流：实际进入海洋环境的死亡原体物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际排入环境受纳介质的水 (`live_maintenance_water_environment_discharge`)

明确实际海洋或淡水受纳介质、去向、取水与返排及计量排水。物种或物质明确的污染负荷进入 direct_other_emissions；同一水不再分类为处理废物。

- 选定流：实际排入环境受纳介质的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际有证据的向空气蒸发水 (`live_maintenance_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅纳入经计量或独立支持的实际蒸发估算，记录受纳空气及不确定性；不得作补足缺失水平衡的任意平差项。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际直接排入未特定空气的化石二氧化碳 (`live_maintenance_fossil_co2_air`)

仅限已确认空气区室的直接化石 CO2；按 direct_emissions 由实际相容燃料碳及氧化证据计量或计算。不代表通用燃料系数、上游重复或龙虾生物源呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_live_maintenance_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：活体约束与保护性呈现 (`presentation`)

接收实际存活的待分级或已验收龙虾状态。仅实施有记录的螯部约束或保护，将仍存活批次交给实际下一节点或交接。绑带、游离水、冰及包装不属于原体参考质量。门后分销排除；保护处理本身不等同运输服务。

#### 输入

##### 产品流

###### 本节点接收的实际存活完整螯龙虾属虾 (`presentation_live_receipt`)

采用实际前道次、配对转移编号、物种、壳体或附肢状态及待分级或已验收状态。只有 handover 接收必须已具备当前最终食用验收；内部接收不假设等于最终参考数量。

- 选定流：本节点接收的实际存活完整螯龙虾属虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际消耗的中国低压电网平均电力 (`presentation_cn_low_voltage_electricity`)

仅限实际供用户的中国电网平均小于 1 kV 交流电；以 MJ 计量归属耗电或按 energy_units 换算 kWh。其他地区、电压、可再生合同电力及船上发电不用此卡。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：由 cp_presentation_energy 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_energy`
- 数量范围：暂定可替换能量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际其他外供电力 (`presentation_other_electricity`)

实际使用时保留外供者、地区、电压、技术及消费边界，各供电分别识别。排除已表示的中国电网消费及自发电重复计数。

- 选定流：实际其他外供电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：由 cp_presentation_energy 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_energy`
- 数量范围：暂定可替换能量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际外购处理工业过程用水 (`presentation_treated_industrial_water`)

仅限实际供应且技术用途相符的处理工业过程水。不代表原海水、饮用水认证、循环水通量或内部转移。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际其他外供水或内部转移水 (`presentation_other_water_receipt`)

按来源、处理及供方展开实际外供水，或以相同编号和边界质量配对内部水转移。排除处理工业供水、自取水及节点内反复循环。

- 选定流：实际其他外供水或内部转移水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际外购捕捞或卸岸保鲜冰 (`presentation_capture_ice`)

仅限实际外购且供应用途相符的捕捞或卸岸保鲜冰，可含有记录且适合声明活体产品的间接降温。不强制冰直接接触，不以干冰代替，亦不重复自制冰。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际直接抽取的海水或其他环境水 (`presentation_self_abstracted_water`)

识别实际淡水或海水来源、地点及新增取水计量。新增抽取只计一次；循环及配对产品水接收不属于取水。海水路线不强制淡水。

- 选定流：实际直接抽取的海水或其他环境水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 单独计量的液态水 (`presentation_free_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation_mass`

###### 单独计量的固态水冰 (`presentation_free_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation_mass`



###### 实际保护性呈现后仍存活的螯龙虾属虾 (`presented_live`)

计量实际输出原体质量及去向。grade 输出须通过声明食用验收；保活或呈现保留输入的待验收或已验收状态，直到实际分级或复检。配对内部转移、保留事件顺序，不假设内部投入等于最终质量。

- 选定流：实际保护性呈现后仍存活的螯龙虾属虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际向另一前景节点转移的水 (`presentation_internal_water_transfer`)

以配对 other_water_receipt、实际质量及来源记录真实跨节点转移。排除节点内泵送通量及已包含在另项载水转移中的水；不是销售、处置或新增取水。

- 选定流：实际向另一前景节点转移的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 实际交外部处理边界的废水 (`presentation_wastewater_treatment`)

识别水质量、相关组成及处理接收方，实际融冰、清洗或保活水只计一次。环境排水、随产品携水及内部转移为其他去向。

- 选定流：实际交外部处理边界的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际活体逸出或获准环境放归 (`presentation_live_environment_return`)

仅记录实际识别的存活生物、来源或受纳水体与事件；区分逸出、主动放归和配对内部转移。不假定例行放归或抵扣。

- 选定流：实际活体逸出或获准环境放归
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际进入海洋环境的死亡原体物料 (`presentation_dead_environment_destination`)

仅限具原体身份、质量、事件及受纳介质的实际记录环境去向；记录适用许可及问题，不规定为处置路线。排除已交产品或处理接收方物料，不作为活体放归。

- 选定流：实际进入海洋环境的死亡原体物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际排入环境受纳介质的水 (`presentation_water_environment_discharge`)

明确实际海洋或淡水受纳介质、去向、取水与返排及计量排水。物种或物质明确的污染负荷进入 direct_other_emissions；同一水不再分类为处理废物。

- 选定流：实际排入环境受纳介质的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际有证据的向空气蒸发水 (`presentation_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅纳入经计量或独立支持的实际蒸发估算，记录受纳空气及不确定性；不得作补足缺失水平衡的任意平差项。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际直接排入未特定空气的化石二氧化碳 (`presentation_fossil_co2_air`)

仅限已确认空气区室的直接化石 CO2；按 direct_emissions 由实际相容燃料碳及氧化证据计量或计算。不代表通用燃料系数、上游重复或龙虾生物源呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_presentation_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：首次生产者食用交接 (`handover`)

从最后实际活动接收最终活体批次，不假设固定工序顺序。确认持续存活及当前食用验收，称量原体净质量并记录实际交接。待分级、状态未知或死亡原体不得进入最终分母。后续商人贮存或分销不属于此节点。

#### 输入

##### 产品流

###### 本节点接收的实际存活完整螯龙虾属虾 (`handover_live_receipt`)

采用实际前道次、配对转移编号、物种、壳体或附肢状态及待分级或已验收状态。只有 handover 接收必须已具备当前最终食用验收；内部接收不假设等于最终参考数量。

- 选定流：本节点接收的实际存活完整螯龙虾属虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际消耗的中国低压电网平均电力 (`handover_cn_low_voltage_electricity`)

仅限实际供用户的中国电网平均小于 1 kV 交流电；以 MJ 计量归属耗电或按 energy_units 换算 kWh。其他地区、电压、可再生合同电力及船上发电不用此卡。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：由 cp_handover_energy 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_energy`
- 数量范围：暂定可替换能量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际其他外供电力 (`handover_other_electricity`)

实际使用时保留外供者、地区、电压、技术及消费边界，各供电分别识别。排除已表示的中国电网消费及自发电重复计数。

- 选定流：实际其他外供电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：由 cp_handover_energy 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_energy`
- 数量范围：暂定可替换能量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际外购处理工业过程用水 (`handover_treated_industrial_water`)

仅限实际供应且技术用途相符的处理工业过程水。不代表原海水、饮用水认证、循环水通量或内部转移。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际其他外供水或内部转移水 (`handover_other_water_receipt`)

按来源、处理及供方展开实际外供水，或以相同编号和边界质量配对内部水转移。排除处理工业供水、自取水及节点内反复循环。

- 选定流：实际其他外供水或内部转移水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际外购捕捞或卸岸保鲜冰 (`handover_capture_ice`)

仅限实际外购且供应用途相符的捕捞或卸岸保鲜冰，可含有记录且适合声明活体产品的间接降温。不强制冰直接接触，不以干冰代替，亦不重复自制冰。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换实物质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际直接抽取的海水或其他环境水 (`handover_self_abstracted_water`)

识别实际淡水或海水来源、地点及新增取水计量。新增抽取只计一次；循环及配对产品水接收不属于取水。海水路线不强制淡水。

- 选定流：实际直接抽取的海水或其他环境水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 单独计量的液态水 (`free_water_ice_handover_water`)

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

###### 单独计量的固态水冰 (`free_water_ice_handover_ice`)

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



###### 首次生产者食用交接的实际原壳完整活体螯龙虾属虾 (`live_homarus_food_handover`)

最终输出为首次生产者门实际存活、原壳完整且通过食用验收的螯龙虾属原体，按实际壳体及附肢状态计量。包含原壳、组织和天然保留体液；排除绑带、游离水、冰、容器及标签。同批次仅在一个最终门计数。

- 选定流：首次生产者食用交接的实际原壳完整活体螯龙虾属虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_handover_mass`
- 来源：`mass-balance-identity`
- 数量范围：准确参考归一化恒等式
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

###### 实际向另一前景节点转移的水 (`handover_internal_water_transfer`)

以配对 other_water_receipt、实际质量及来源记录真实跨节点转移。排除节点内泵送通量及已包含在另项载水转移中的水；不是销售、处置或新增取水。

- 选定流：实际向另一前景节点转移的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 实际交外部处理边界的废水 (`handover_wastewater_treatment`)

识别水质量、相关组成及处理接收方，实际融冰、清洗或保活水只计一次。环境排水、随产品携水及内部转移为其他去向。

- 选定流：实际交外部处理边界的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际活体逸出或获准环境放归 (`handover_live_environment_return`)

仅记录实际识别的存活生物、来源或受纳水体与事件；区分逸出、主动放归和配对内部转移。不假定例行放归或抵扣。

- 选定流：实际活体逸出或获准环境放归
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际进入海洋环境的死亡原体物料 (`handover_dead_environment_destination`)

仅限具原体身份、质量、事件及受纳介质的实际记录环境去向；记录适用许可及问题，不规定为处置路线。排除已交产品或处理接收方物料，不作为活体放归。

- 选定流：实际进入海洋环境的死亡原体物料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际排入环境受纳介质的水 (`handover_water_environment_discharge`)

明确实际海洋或淡水受纳介质、去向、取水与返排及计量排水。物种或物质明确的污染负荷进入 direct_other_emissions；同一水不再分类为处理废物。

- 选定流：实际排入环境受纳介质的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际有证据的向空气蒸发水 (`handover_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅纳入经计量或独立支持的实际蒸发估算，记录受纳空气及不确定性；不得作补足缺失水平衡的任意平差项。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换水筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际直接排入未特定空气的化石二氧化碳 (`handover_fossil_co2_air`)

仅限已确认空气区室的直接化石 CO2；按 direct_emissions 由实际相容燃料碳及氧化证据计量或计算。不代表通用燃料系数、上游重复或龙虾生物源呼吸。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover_mass`
- 数量范围：暂定可替换环境质量筛选，不是经验或默认数量
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `physical_then_lca` | 所有清单行 | 保留输入、产品、配对转移、库存和损失的未分配实际实物台账。共享资源事件、节点、期间责任仅归属一次，再除以正的最终验收原体千克数。另标单输出 LCA 视图，对相应输出归属一次，并保留原实物台账及完整分配矩阵。不得用经济份额缩减实物分区、以分配后质量核对未分配闭合或对已归属中间品再次分配。 |  |
| `allocation_precedence` | 实际有意输出 | 列举具接收方及交接的具体验收活体等级与其他独立有意捕获、饵料或死亡食用输出；处置、活体放归、随附包装和内部循环不自动作共产品。首先拆分独立计量活动；不可分联合资源其次采用有证据因果实物消耗；不支持时采用同边界同期间正实际价值份额，披露价格基准及敏感性。缺价值或因果证据是缺口，不默认质量份额或替代抵扣。 |  |
| `period_matrix` | 航次、保活期间及资产 | 索引准备、布放、浸置或起捕、转运、门后返航、闲置或清洗、季节保活、购置、更换及退役。每个实际事件和输出关联航次、批次及期间；失败或无产出期间负担保留在具有相关输出的作业期中，不除以零或丢弃失败航次。根据有证据时间或使用基准将实际资产服务归属其有记录用户和期间；无通用寿命，不每航次重置全部制造。 |  |
| `secondary_bait_attribution` | purchased_secondary_bait; own_bait_receipt | 实际次级饵料保留来源及供方声明在回收交接继承的前系统负担，再一次纳入未包含的回收、制备、贮存或送达。供方证明是已分配有价值副产品时继承该分配；若合理废物截断从回收开始，披露该边界并纳入回收起全部负担。不得再次增加全部原鱼负担或默给残余物零负担。不同截断解释为独立敏感性情景，不同时抵扣。自捕饵料仅继承一次其捕捞归属。 | `fishres-secondary-lobster-bait-2025` |
| `shared_owner` | 共享船舶、设备、设施或服务 | 维护资源范围登记，覆盖实际 capture、grade、live_maintenance、presentation 及 handover 用户和服务期间。共享船舶、起捕机、渔具、暂养池或冷库、可重复筐和外包含资源服务具有唯一责任事件及有记录因果时间、使用或空间矩阵。排除服务已含资源和其他期间份额；分配的可重复资产制造质量不等同交给买方的一次性包装实物。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture_mass` | `capture` | 实际原体、物料、水及生物量去向 | 经校准计量、发票、转移或库存或事件记录及供方一手证据 | 航次；批次；事件；道次；转移；期间；责任者；物种或物质或材料；活体或壳体或附肢及待验收或已验收状态；实际去向；原始数量和单位；期初期末库存；皮重；供方范围；服务实际发票数量及单位；资产用户或使用或更换或退役；时间戳；分级或食用验收；缺失和不确定性; 实际技术或配置；实际供方或来源及地区边界；清洗、切换、闲置或失败事件关联；实际水相、新取水、循环、转移及去向；数量换算证据；渔具规格；布放、起捕、浸置、努力量及地点；饵料来源、接收、布放、未用、回收、回用、废物、释放及库存；事件、兼捕或渔具遗失证据 | 用经校准适用秤或仪表称量实际原体或物料接收、转移、库存及去向。换算须有实际密度、匹配样本或气体条件证据。存活、壳体、分级或验收是分类字段。分开保留节点原始数量及辅助服务或资产单位。闭合未分配实物节点或道次库存与转移，共享资源责任归属一次后用归属实物数量除以正最终验收原体千克数得到每参考实物视图；保留独立第 7 节一次归属单输出 LCA 视图及完整矩阵。 | kg | 每个实际事件或转移及计量间隔；每航次或运行及期间末核对 | 完整声明航次或作业期，含返航、闲置、清洗及失败期间并有实际资产服务历史 | 仅实际 capture 节点责任及声明供方或服务边界 | 每 1 kg 参考流 | 校准及计量范围；原始接收和转移或库存核对；状态或验收及独立定量证据；签认资源、期间或服务分配及不确定性 |
| `cp_capture_energy` | `capture` | 实际节点能量供给 | 经校准计量、发票、转移或库存或事件记录及供方一手证据 | 航次；批次；事件；道次；转移；期间；责任者；物种或物质或材料；活体或壳体或附肢及待验收或已验收状态；实际去向；原始数量和单位；期初期末库存；皮重；供方范围；服务实际发票数量及单位；资产用户或使用或更换或退役；时间戳；分级或食用验收；缺失和不确定性; 实际技术或配置；实际供方或来源及地区边界；清洗、切换、闲置或失败事件关联；实际水相、新取水、循环、转移及去向；数量换算证据；渔具规格；布放、起捕、浸置、努力量及地点；饵料来源、接收、布放、未用、回收、回用、废物、释放及库存；事件、兼捕或渔具遗失证据 | 读取归属实际计量或供方能量记录并保留供给身份；保留原 kWh 或 MJ，仅按 energy_units 换算；燃料进入质量记录。辅助服务或资产单位和分类状态字段分开。保留原始数量、闭合实物节点或道次台账，共享资源责任归属一次后除以正最终验收原体千克数得到每参考实物视图；保留独立第 7 节单输出 LCA 归属及完整矩阵。 | MJ | 每个实际事件或转移及计量间隔；每航次或运行及期间末核对 | 完整声明航次或作业期，含返航、闲置、清洗及失败期间并有实际资产服务历史 | 仅实际 capture 节点责任及声明供方或服务边界 | 每 1 kg 参考流 | 校准及计量范围；原始接收和转移或库存核对；状态或验收及独立定量证据；签认资源、期间或服务分配及不确定性 |
| `cp_grade_mass` | `grade` | 实际原体、物料、水及生物量去向 | 经校准计量、发票、转移或库存或事件记录及供方一手证据 | 航次；批次；事件；道次；转移；期间；责任者；物种或物质或材料；活体或壳体或附肢及待验收或已验收状态；实际去向；原始数量和单位；期初期末库存；皮重；供方范围；服务实际发票数量及单位；资产用户或使用或更换或退役；时间戳；分级或食用验收；缺失和不确定性; 实际技术或配置；实际供方或来源及地区边界；清洗、切换、闲置或失败事件关联；实际水相、新取水、循环、转移及去向；数量换算证据；实际等级判据及食用用途证据；每个验收、拒收或待验收去向；状态变化后复检 | 用经校准适用秤或仪表称量实际原体或物料接收、转移、库存及去向。换算须有实际密度、匹配样本或气体条件证据。存活、壳体、分级或验收是分类字段。分开保留节点原始数量及辅助服务或资产单位。闭合未分配实物节点或道次库存与转移，共享资源责任归属一次后用归属实物数量除以正最终验收原体千克数得到每参考实物视图；保留独立第 7 节一次归属单输出 LCA 视图及完整矩阵。 | kg | 每个实际事件或转移及计量间隔；每航次或运行及期间末核对 | 完整声明航次或作业期，含返航、闲置、清洗及失败期间并有实际资产服务历史 | 仅实际 grade 节点责任及声明供方或服务边界 | 每 1 kg 参考流 | 校准及计量范围；原始接收和转移或库存核对；状态或验收及独立定量证据；签认资源、期间或服务分配及不确定性 |
| `cp_grade_energy` | `grade` | 实际节点能量供给 | 经校准计量、发票、转移或库存或事件记录及供方一手证据 | 航次；批次；事件；道次；转移；期间；责任者；物种或物质或材料；活体或壳体或附肢及待验收或已验收状态；实际去向；原始数量和单位；期初期末库存；皮重；供方范围；服务实际发票数量及单位；资产用户或使用或更换或退役；时间戳；分级或食用验收；缺失和不确定性; 实际技术或配置；实际供方或来源及地区边界；清洗、切换、闲置或失败事件关联；实际水相、新取水、循环、转移及去向；数量换算证据；实际等级判据及食用用途证据；每个验收、拒收或待验收去向；状态变化后复检 | 读取归属实际计量或供方能量记录并保留供给身份；保留原 kWh 或 MJ，仅按 energy_units 换算；燃料进入质量记录。辅助服务或资产单位和分类状态字段分开。保留原始数量、闭合实物节点或道次台账，共享资源责任归属一次后除以正最终验收原体千克数得到每参考实物视图；保留独立第 7 节单输出 LCA 归属及完整矩阵。 | MJ | 每个实际事件或转移及计量间隔；每航次或运行及期间末核对 | 完整声明航次或作业期，含返航、闲置、清洗及失败期间并有实际资产服务历史 | 仅实际 grade 节点责任及声明供方或服务边界 | 每 1 kg 参考流 | 校准及计量范围；原始接收和转移或库存核对；状态或验收及独立定量证据；签认资源、期间或服务分配及不确定性 |
| `cp_live_maintenance_mass` | `live_maintenance` | 实际原体、物料、水及生物量去向 | 经校准计量、发票、转移或库存或事件记录及供方一手证据 | 航次；批次；事件；道次；转移；期间；责任者；物种或物质或材料；活体或壳体或附肢及待验收或已验收状态；实际去向；原始数量和单位；期初期末库存；皮重；供方范围；服务实际发票数量及单位；资产用户或使用或更换或退役；时间戳；分级或食用验收；缺失和不确定性; 实际技术或配置；实际供方或来源及地区边界；清洗、切换、闲置或失败事件关联；实际水相、新取水、循环、转移及去向；数量换算证据；实际暂养时长及水、空气、温度或氧护理条件；存在时实际投饲；存活及原体状态变化 | 用经校准适用秤或仪表称量实际原体或物料接收、转移、库存及去向。换算须有实际密度、匹配样本或气体条件证据。存活、壳体、分级或验收是分类字段。分开保留节点原始数量及辅助服务或资产单位。闭合未分配实物节点或道次库存与转移，共享资源责任归属一次后用归属实物数量除以正最终验收原体千克数得到每参考实物视图；保留独立第 7 节一次归属单输出 LCA 视图及完整矩阵。 | kg | 每个实际事件或转移及计量间隔；每航次或运行及期间末核对 | 完整声明航次或作业期，含返航、闲置、清洗及失败期间并有实际资产服务历史 | 仅实际 live_maintenance 节点责任及声明供方或服务边界 | 每 1 kg 参考流 | 校准及计量范围；原始接收和转移或库存核对；状态或验收及独立定量证据；签认资源、期间或服务分配及不确定性 |
| `cp_live_maintenance_energy` | `live_maintenance` | 实际节点能量供给 | 经校准计量、发票、转移或库存或事件记录及供方一手证据 | 航次；批次；事件；道次；转移；期间；责任者；物种或物质或材料；活体或壳体或附肢及待验收或已验收状态；实际去向；原始数量和单位；期初期末库存；皮重；供方范围；服务实际发票数量及单位；资产用户或使用或更换或退役；时间戳；分级或食用验收；缺失和不确定性; 实际技术或配置；实际供方或来源及地区边界；清洗、切换、闲置或失败事件关联；实际水相、新取水、循环、转移及去向；数量换算证据；实际暂养时长及水、空气、温度或氧护理条件；存在时实际投饲；存活及原体状态变化 | 读取归属实际计量或供方能量记录并保留供给身份；保留原 kWh 或 MJ，仅按 energy_units 换算；燃料进入质量记录。辅助服务或资产单位和分类状态字段分开。保留原始数量、闭合实物节点或道次台账，共享资源责任归属一次后除以正最终验收原体千克数得到每参考实物视图；保留独立第 7 节单输出 LCA 归属及完整矩阵。 | MJ | 每个实际事件或转移及计量间隔；每航次或运行及期间末核对 | 完整声明航次或作业期，含返航、闲置、清洗及失败期间并有实际资产服务历史 | 仅实际 live_maintenance 节点责任及声明供方或服务边界 | 每 1 kg 参考流 | 校准及计量范围；原始接收和转移或库存核对；状态或验收及独立定量证据；签认资源、期间或服务分配及不确定性 |
| `cp_presentation_mass` | `presentation` | 实际原体、物料、水及生物量去向 | 经校准计量、发票、转移或库存或事件记录及供方一手证据 | 航次；批次；事件；道次；转移；期间；责任者；物种或物质或材料；活体或壳体或附肢及待验收或已验收状态；实际去向；原始数量和单位；期初期末库存；皮重；供方范围；服务实际发票数量及单位；资产用户或使用或更换或退役；时间戳；分级或食用验收；缺失和不确定性; 实际技术或配置；实际供方或来源及地区边界；清洗、切换、闲置或失败事件关联；实际水相、新取水、循环、转移及去向；数量换算证据；实际绑带及包装材料、使用、去除或库存；原体与辅助物皮重；实际接收方 | 用经校准适用秤或仪表称量实际原体或物料接收、转移、库存及去向。换算须有实际密度、匹配样本或气体条件证据。存活、壳体、分级或验收是分类字段。分开保留节点原始数量及辅助服务或资产单位。闭合未分配实物节点或道次库存与转移，共享资源责任归属一次后用归属实物数量除以正最终验收原体千克数得到每参考实物视图；保留独立第 7 节一次归属单输出 LCA 视图及完整矩阵。 | kg | 每个实际事件或转移及计量间隔；每航次或运行及期间末核对 | 完整声明航次或作业期，含返航、闲置、清洗及失败期间并有实际资产服务历史 | 仅实际 presentation 节点责任及声明供方或服务边界 | 每 1 kg 参考流 | 校准及计量范围；原始接收和转移或库存核对；状态或验收及独立定量证据；签认资源、期间或服务分配及不确定性 |
| `cp_presentation_energy` | `presentation` | 实际节点能量供给 | 经校准计量、发票、转移或库存或事件记录及供方一手证据 | 航次；批次；事件；道次；转移；期间；责任者；物种或物质或材料；活体或壳体或附肢及待验收或已验收状态；实际去向；原始数量和单位；期初期末库存；皮重；供方范围；服务实际发票数量及单位；资产用户或使用或更换或退役；时间戳；分级或食用验收；缺失和不确定性; 实际技术或配置；实际供方或来源及地区边界；清洗、切换、闲置或失败事件关联；实际水相、新取水、循环、转移及去向；数量换算证据；实际绑带及包装材料、使用、去除或库存；原体与辅助物皮重；实际接收方 | 读取归属实际计量或供方能量记录并保留供给身份；保留原 kWh 或 MJ，仅按 energy_units 换算；燃料进入质量记录。辅助服务或资产单位和分类状态字段分开。保留原始数量、闭合实物节点或道次台账，共享资源责任归属一次后除以正最终验收原体千克数得到每参考实物视图；保留独立第 7 节单输出 LCA 归属及完整矩阵。 | MJ | 每个实际事件或转移及计量间隔；每航次或运行及期间末核对 | 完整声明航次或作业期，含返航、闲置、清洗及失败期间并有实际资产服务历史 | 仅实际 presentation 节点责任及声明供方或服务边界 | 每 1 kg 参考流 | 校准及计量范围；原始接收和转移或库存核对；状态或验收及独立定量证据；签认资源、期间或服务分配及不确定性 |
| `cp_handover_mass` | `handover` | 实际原体、物料、水及生物量去向 | 经校准计量、发票、转移或库存或事件记录及供方一手证据 | 航次；批次；事件；道次；转移；期间；责任者；物种或物质或材料；活体或壳体或附肢及待验收或已验收状态；实际去向；原始数量和单位；期初期末库存；皮重；供方范围；服务实际发票数量及单位；资产用户或使用或更换或退役；时间戳；分级或食用验收；缺失和不确定性; 实际技术或配置；实际供方或来源及地区边界；清洗、切换、闲置或失败事件关联；实际水相、新取水、循环、转移及去向；数量换算证据；实际最终门、地点、时间或接收方；当前存活及食用验收；经校准毛重、原体、辅助物、游离水或冰皮重 | 用经校准适用秤或仪表称量实际原体或物料接收、转移、库存及去向。换算须有实际密度、匹配样本或气体条件证据。存活、壳体、分级或验收是分类字段。分开保留节点原始数量及辅助服务或资产单位。闭合未分配实物节点或道次库存与转移，共享资源责任归属一次后用归属实物数量除以正最终验收原体千克数得到每参考实物视图；保留独立第 7 节一次归属单输出 LCA 视图及完整矩阵。 | kg | 每个实际事件或转移及计量间隔；每航次或运行及期间末核对 | 完整声明航次或作业期，含返航、闲置、清洗及失败期间并有实际资产服务历史 | 仅实际 handover 节点责任及声明供方或服务边界 | 每 1 kg 参考流 | 校准及计量范围；原始接收和转移或库存核对；状态或验收及独立定量证据；签认资源、期间或服务分配及不确定性 |
| `cp_handover_energy` | `handover` | 实际节点能量供给 | 经校准计量、发票、转移或库存或事件记录及供方一手证据 | 航次；批次；事件；道次；转移；期间；责任者；物种或物质或材料；活体或壳体或附肢及待验收或已验收状态；实际去向；原始数量和单位；期初期末库存；皮重；供方范围；服务实际发票数量及单位；资产用户或使用或更换或退役；时间戳；分级或食用验收；缺失和不确定性; 实际技术或配置；实际供方或来源及地区边界；清洗、切换、闲置或失败事件关联；实际水相、新取水、循环、转移及去向；数量换算证据；实际最终门、地点、时间或接收方；当前存活及食用验收；经校准毛重、原体、辅助物、游离水或冰皮重 | 读取归属实际计量或供方能量记录并保留供给身份；保留原 kWh 或 MJ，仅按 energy_units 换算；燃料进入质量记录。辅助服务或资产单位和分类状态字段分开。保留原始数量、闭合实物节点或道次台账，共享资源责任归属一次后除以正最终验收原体千克数得到每参考实物视图；保留独立第 7 节单输出 LCA 归属及完整矩阵。 | MJ | 每个实际事件或转移及计量间隔；每航次或运行及期间末核对 | 完整声明航次或作业期，含返航、闲置、清洗及失败期间并有实际资产服务历史 | 仅实际 handover 节点责任及声明供方或服务边界 | 每 1 kg 参考流 | 校准及计量范围；原始接收和转移或库存核对；状态或验收及独立定量证据；签认资源、期间或服务分配及不确定性 |
| `cp_capture_services` | `capture` | 实际纯外购服务及归属资产服务 | 原始发票、供方一手清单、资产使用及范围登记 | 实际服务功能单位及发票数量；准确供方及服务状态；包含资源；事件或批次或期间；资产编号及用户；寿命或使用或更换或退役证据；分配矩阵；底层物料或能量单位；不确定性 | 保留真实发票单位，不代为千克服务。将所含范围与实物行核对，记录每个实际资产服务用户或期间及一次继承负担；具体交换生成前确认准确服务属性或单位及独立定量校验范围。 | 实际发票功能单位；底层资产活动单位单独保留 | 每个实际服务或资产使用事件及期间末 | 完整声明作业期及实际服务历史 | 实际 capture 服务及资源范围 | 保留实际服务数量及分配矩阵；标明实物活动与独立一次归属 LCA 视图，每 1 kg 参考流。 | 发票、供方范围、使用历史、单位或支持核实及签认归属 |
| `cp_capture_reusable_accessories` | `capture` | 实际可重复筐箱或容器实物库存及交接台账 | 经校准实物称重及配对返还或转移或库存记录 | 容器编号或材料；期初库存；接收；实际载货或空载转移；返还；遗失；处理；期末库存；实物 kg；事件或期间或责任者；另行归属制造或使用 | 按实际质量跟踪每个真实节点或门的可重复容器实物接收、继续交接及返还。区别这些库存转移和服务或资产台账中的每次使用制造归属；最终数据包须实例化实际实物交换或明确库存、交接子台账，不把全部可返容器质量作一次性包装或动物质量。 | kg | 每次实际接收或返还或交接及库存闭合 | 完整作业期，含实际门后容器返还责任 | 实际 capture 容器实物边界 | 每 1 kg 参考流 | 配对容器编号、称重或皮重证据及独立库存闭合 |
| `cp_grade_services` | `grade` | 实际纯外购服务及归属资产服务 | 原始发票、供方一手清单、资产使用及范围登记 | 实际服务功能单位及发票数量；准确供方及服务状态；包含资源；事件或批次或期间；资产编号及用户；寿命或使用或更换或退役证据；分配矩阵；底层物料或能量单位；不确定性 | 保留真实发票单位，不代为千克服务。将所含范围与实物行核对，记录每个实际资产服务用户或期间及一次继承负担；具体交换生成前确认准确服务属性或单位及独立定量校验范围。 | 实际发票功能单位；底层资产活动单位单独保留 | 每个实际服务或资产使用事件及期间末 | 完整声明作业期及实际服务历史 | 实际 grade 服务及资源范围 | 保留实际服务数量及分配矩阵；标明实物活动与独立一次归属 LCA 视图，每 1 kg 参考流。 | 发票、供方范围、使用历史、单位或支持核实及签认归属 |
| `cp_grade_reusable_accessories` | `grade` | 实际可重复筐箱或容器实物库存及交接台账 | 经校准实物称重及配对返还或转移或库存记录 | 容器编号或材料；期初库存；接收；实际载货或空载转移；返还；遗失；处理；期末库存；实物 kg；事件或期间或责任者；另行归属制造或使用 | 按实际质量跟踪每个真实节点或门的可重复容器实物接收、继续交接及返还。区别这些库存转移和服务或资产台账中的每次使用制造归属；最终数据包须实例化实际实物交换或明确库存、交接子台账，不把全部可返容器质量作一次性包装或动物质量。 | kg | 每次实际接收或返还或交接及库存闭合 | 完整作业期，含实际门后容器返还责任 | 实际 grade 容器实物边界 | 每 1 kg 参考流 | 配对容器编号、称重或皮重证据及独立库存闭合 |
| `cp_live_maintenance_services` | `live_maintenance` | 实际纯外购服务及归属资产服务 | 原始发票、供方一手清单、资产使用及范围登记 | 实际服务功能单位及发票数量；准确供方及服务状态；包含资源；事件或批次或期间；资产编号及用户；寿命或使用或更换或退役证据；分配矩阵；底层物料或能量单位；不确定性 | 保留真实发票单位，不代为千克服务。将所含范围与实物行核对，记录每个实际资产服务用户或期间及一次继承负担；具体交换生成前确认准确服务属性或单位及独立定量校验范围。 | 实际发票功能单位；底层资产活动单位单独保留 | 每个实际服务或资产使用事件及期间末 | 完整声明作业期及实际服务历史 | 实际 live_maintenance 服务及资源范围 | 保留实际服务数量及分配矩阵；标明实物活动与独立一次归属 LCA 视图，每 1 kg 参考流。 | 发票、供方范围、使用历史、单位或支持核实及签认归属 |
| `cp_live_maintenance_reusable_accessories` | `live_maintenance` | 实际可重复筐箱或容器实物库存及交接台账 | 经校准实物称重及配对返还或转移或库存记录 | 容器编号或材料；期初库存；接收；实际载货或空载转移；返还；遗失；处理；期末库存；实物 kg；事件或期间或责任者；另行归属制造或使用 | 按实际质量跟踪每个真实节点或门的可重复容器实物接收、继续交接及返还。区别这些库存转移和服务或资产台账中的每次使用制造归属；最终数据包须实例化实际实物交换或明确库存、交接子台账，不把全部可返容器质量作一次性包装或动物质量。 | kg | 每次实际接收或返还或交接及库存闭合 | 完整作业期，含实际门后容器返还责任 | 实际 live_maintenance 容器实物边界 | 每 1 kg 参考流 | 配对容器编号、称重或皮重证据及独立库存闭合 |
| `cp_presentation_services` | `presentation` | 实际纯外购服务及归属资产服务 | 原始发票、供方一手清单、资产使用及范围登记 | 实际服务功能单位及发票数量；准确供方及服务状态；包含资源；事件或批次或期间；资产编号及用户；寿命或使用或更换或退役证据；分配矩阵；底层物料或能量单位；不确定性 | 保留真实发票单位，不代为千克服务。将所含范围与实物行核对，记录每个实际资产服务用户或期间及一次继承负担；具体交换生成前确认准确服务属性或单位及独立定量校验范围。 | 实际发票功能单位；底层资产活动单位单独保留 | 每个实际服务或资产使用事件及期间末 | 完整声明作业期及实际服务历史 | 实际 presentation 服务及资源范围 | 保留实际服务数量及分配矩阵；标明实物活动与独立一次归属 LCA 视图，每 1 kg 参考流。 | 发票、供方范围、使用历史、单位或支持核实及签认归属 |
| `cp_presentation_reusable_accessories` | `presentation` | 实际可重复筐箱或容器实物库存及交接台账 | 经校准实物称重及配对返还或转移或库存记录 | 容器编号或材料；期初库存；接收；实际载货或空载转移；返还；遗失；处理；期末库存；实物 kg；事件或期间或责任者；另行归属制造或使用 | 按实际质量跟踪每个真实节点或门的可重复容器实物接收、继续交接及返还。区别这些库存转移和服务或资产台账中的每次使用制造归属；最终数据包须实例化实际实物交换或明确库存、交接子台账，不把全部可返容器质量作一次性包装或动物质量。 | kg | 每次实际接收或返还或交接及库存闭合 | 完整作业期，含实际门后容器返还责任 | 实际 presentation 容器实物边界 | 每 1 kg 参考流 | 配对容器编号、称重或皮重证据及独立库存闭合 |
| `cp_handover_services` | `handover` | 实际纯外购服务及归属资产服务 | 原始发票、供方一手清单、资产使用及范围登记 | 实际服务功能单位及发票数量；准确供方及服务状态；包含资源；事件或批次或期间；资产编号及用户；寿命或使用或更换或退役证据；分配矩阵；底层物料或能量单位；不确定性 | 保留真实发票单位，不代为千克服务。将所含范围与实物行核对，记录每个实际资产服务用户或期间及一次继承负担；具体交换生成前确认准确服务属性或单位及独立定量校验范围。 | 实际发票功能单位；底层资产活动单位单独保留 | 每个实际服务或资产使用事件及期间末 | 完整声明作业期及实际服务历史 | 实际 handover 服务及资源范围 | 保留实际服务数量及分配矩阵；标明实物活动与独立一次归属 LCA 视图，每 1 kg 参考流。 | 发票、供方范围、使用历史、单位或支持核实及签认归属 |
| `cp_handover_reusable_accessories` | `handover` | 实际可重复筐箱或容器实物库存及交接台账 | 经校准实物称重及配对返还或转移或库存记录 | 容器编号或材料；期初库存；接收；实际载货或空载转移；返还；遗失；处理；期末库存；实物 kg；事件或期间或责任者；另行归属制造或使用 | 按实际质量跟踪每个真实节点或门的可重复容器实物接收、继续交接及返还。区别这些库存转移和服务或资产台账中的每次使用制造归属；最终数据包须实例化实际实物交换或明确库存、交接子台账，不把全部可返容器质量作一次性包装或动物质量。 | kg | 每次实际接收或返还或交接及库存闭合 | 完整作业期，含实际门后容器返还责任 | 实际 handover 容器实物边界 | 每 1 kg 参考流 | 配对容器编号、称重或皮重证据及独立库存闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_normalization | 所有清单行 | 先闭合未分配实际实物节点或道次库存与转移台账，共享资源责任归属一次，再用归属原始实物数量除以正最终验收原体千克数形成实物每参考视图。另按第 7 节输出归属一次形成标明的单输出 LCA 视图，保留原始数量及完整矩阵；实物分区绝不用经济份额相乘。 | 实际原始数量；最终验收原体 kg；事件责任；输出矩阵 | 每参考实物数量；独立标明的单输出 LCA 数量 |  |
| stock_closure | 每个实际节点或道次 | 相同物料边界上：期初库存 + 实际接收 = 实际产品或转移 + 废物 + 环境去向 + 期末库存。原体、饵料、辅助物、水或冰及渔具流分开；记录实际转化及随物料携水，不重复组分质量。不用缺失平衡平差项或重构缺失附肢。 | 实际接收；库存；输出；配对转移编号；转化 | 未分配核对数量 | `mass-balance-identity` |
| direct_emissions | 实际直接排放 | 采用计量排放质量或实际相容消耗燃料 × 有记录的物质明确系数，系数单位、区室及碳或氧化基准须一致；保留系数来源及不确定性。制冷剂充注、回收和泄漏记录核对实际物质。无通用系数、上游重复或对生物源呼吸使用化石身份。 | 实际燃料或排放或泄漏记录；相容独立系数及单位 | 物质明确的直接质量 |  |
| count_mass_conversion | 实际件数物料记录 | 实际件数 × 同材料或规格或状态实测件质量，或具不确定性的有记录代表样本；无通用龙虾、包装、绑带或资产重量。辅助物皮重与原体分开。 | 件数；匹配件质量或样本；不确定性 | 实际实物 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_and_state | 每批次或道次 | 必须具实际物种或来源或野生身份、原体或壳体或附肢状态、存活、分级、食用验收及实际顺序；待验收或未知不能默认最终。 | 捕捞与检查日志；转移或道次图；适用实际验收证据 |
| quantitative_independence | 每项数量或范围 | 保留原单位、校准、换算、期间覆盖及不确定性。声称数值 QA 完整前以独立相容证据替换暂定筛选；不得用批次自身最大值或猜测零值。 | 原始计量记录；独立作业期或供方研究；有记录单位及范围比较 |
| completeness_and_burdens | 每个事件及实际服务 | 完整覆盖全部实物去向、无产出资源、自捕或次级饵料、返航或闲置、共享资产及含资源服务边界。缺具体服务单位或支持项或流身份意味着最终清单不完整，不能默略交换。 | 库存或转移闭合；资产服务台账；供方范围；资源、期间及输出矩阵 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_purchased_primary_bait` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际外供初级饵料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅适用实际需要饵料的渔具：按实际物种或物料及供方首次使用边界称量供应饵料；上游数据集纳入饵料捕捞或生产、处理和送达。外购饵料不得视为免费环境生物量。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`dfo-at-sea-lobster-catch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_purchased_secondary_bait` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际供应的加工残余物或次级物料饵料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际使用时识别加工残余物来源、前系统交接、回收或制备、贮存和运输。按 secondary_bait_attribution 记录供方负担边界；不自动设零负担、避免捕捞抵扣、实验配方或捕获性能系数。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`fishres-secondary-lobster-bait-2025` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_own_bait_receipt` | `capture`; 输入; 产品流 | 必须辨认并分别采集“由独立核算自捕活动内部供应的实际饵料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：用转移及事件编号将另行负责的饵料捕捞或留存兼捕输出与本接收配对。继承其已归属上游负担；同一自捕生物量不得重复计入，亦不称为外购饵料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`dfo-at-sea-lobster-catch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_marine_fuel` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际直接消耗的船舶或场址燃烧燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点负责的实际燃烧燃料，按牌号、组成及送达边界展开。采用经校准质量或密度支持的体积换算；船上发电燃料在此记录，不再作为外购电网电力。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_operating_materials` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际节点运行耗材与更换物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料、用途及供方边界展开实际润滑剂、清洁剂、过滤件、维修或更换件。排除饵料、单列燃料、水、冰、包装、绑带及供方服务已包含物料。无实物转移的纯供应服务以实际单位进入服务台账。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_incidental_biomass_removed` | `capture`; 输入; 基本流 | 必须辨认并分别采集“随捕获物实际起捕的非目标生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：非目标生物跨越捕捞边界时按观察物种或类群及实际质量展开；与留存产品、内部饵料、活体放归及死亡抛弃逐项一次核对。在笼具附近存在不等于起捕。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`dfo-at-sea-lobster-catch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_other_intended_catch` | `capture`; 输出; 产品流 | 必须辨认并分别采集“其他实际独立有意捕获产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按具体物种、活死状态、用途及验收交接展开，仅在有证据时纳入实际可售非参考捕获物。留存兼捕个体不自动成为共产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`dfo-at-sea-lobster-catch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_retained_bait_transfer` | `capture`; 输出; 产品流 | 必须辨认并分别采集“实际留存并转作自用饵料的捕获物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际交给另一次饵料使用的每种留存目标或兼捕物，并配对接收方，或记录饵料期初期末库存。同节点即时回用保留内部台账，不新增外部输入或重复起捕。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`dfo-at-sea-lobster-catch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_external_handoff` | `capture`; 输出; 产品流 | 必须辨认并分别采集“实际向外部使用者交接的回收或未用饵料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：识别实际验收物料、接收方及交易或回用用途。内部回收仍为库存或循环证据，不作为外部共产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`dfo-at-sea-lobster-catch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_free_water_ice_transfer` | `capture`; 输出; 产品流 | 必须辨认并分别采集“随活体转移实际携带的游离水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在随存活原体或容器实际转移时记录，与天然保留体液分开。识别液相或固相、实际计量质量及配对接收方 other_water_receipt；接收者按真实冰相记录，不再新增外购冰投入。节点内留存库存及外部排水为其他去向。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_treatment_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“实际送处理的未用或回收饵料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：称量交给有记录废物接收方的实际不可用饵料，区别于期末库存、有意外售、回收回用和环境损失。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`dfo-at-sea-lobster-catch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_operating_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“实际送处理的报废运行物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按身份及实际废物接收方展开废过滤件、润滑剂、清洁残余物、损坏部件及弃置容器材料。排除另列生物量、饵料、水废物及渔具环境遗失；不在其他节点重复报废输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_bait_environment_release` | `capture`; 输出; 基本流 | 必须辨认并分别采集“实际释放入水的饵料物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际物料和受纳水体量化有证据的被取食、浸出、分散或主动释放饵料；未知饵料消失不能视为已计量排放，原饵料与分解产物不重复。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`dfo-at-sea-lobster-catch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_direct_other_emissions` | `capture`; 输出; 基本流 | 必须辨认并分别采集“实际其他物质明确的直接排放或泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质或形态、介质、方法、系数来源及实际事件展开每项实际污染物、制冷剂、生物源呼吸气体或泄漏物。宽泛污染物标签不得绑定固定身份；缺记录不推断零值或通用系数。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_carried_accessories_receipt` | `grade`; 输入; 产品流 | 必须辨认并分别采集“从前道次接收的实际一次性辅助物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅限从较早呈现道次携来的真实绑带或一次性包装，附配对转移编号及实际材料质量；不重复采购或新增原体质量。按实际节点顺序保留接收、去除、期末库存及继续交接。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_marine_fuel` | `grade`; 输入; 产品流 | 必须辨认并分别采集“实际直接消耗的船舶或场址燃烧燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点负责的实际燃烧燃料，按牌号、组成及送达边界展开。采用经校准质量或密度支持的体积换算；船上发电燃料在此记录，不再作为外购电网电力。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_operating_materials` | `grade`; 输入; 产品流 | 必须辨认并分别采集“实际节点运行耗材与更换物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料、用途及供方边界展开实际润滑剂、清洁剂、过滤件、维修或更换件。排除饵料、单列燃料、水、冰、包装、绑带及供方服务已包含物料。无实物转移的纯供应服务以实际单位进入服务台账。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_carried_accessories_transfer` | `grade`; 输出; 产品流 | 必须辨认并分别采集“实际交给下一处理节点的一次性辅助物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：配对实际下一接收者和计量实物质量，含持续附着绑带；去除后交实际处理另列。此内部转移不推断上游制造归属或经济共产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_free_water_ice_transfer` | `grade`; 输出; 产品流 | 必须辨认并分别采集“随活体转移实际携带的游离水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在随存活原体或容器实际转移时记录，与天然保留体液分开。识别液相或固相、实际计量质量及配对接收方 other_water_receipt；接收者按真实冰相记录，不再新增外购冰投入。节点内留存库存及外部排水为其他去向。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_operating_waste` | `grade`; 输出; 废物流 | 必须辨认并分别采集“实际送处理的报废运行物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按身份及实际废物接收方展开废过滤件、润滑剂、清洁残余物、损坏部件及弃置容器材料。排除另列生物量、饵料、水废物及渔具环境遗失；不在其他节点重复报废输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_direct_other_emissions` | `grade`; 输出; 基本流 | 必须辨认并分别采集“实际其他物质明确的直接排放或泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质或形态、介质、方法、系数来源及实际事件展开每项实际污染物、制冷剂、生物源呼吸气体或泄漏物。宽泛污染物标签不得绑定固定身份；缺记录不推断零值或通用系数。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_grade_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_maintenance_carried_accessories_receipt` | `live_maintenance`; 输入; 产品流 | 必须辨认并分别采集“从前道次接收的实际一次性辅助物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅限从较早呈现道次携来的真实绑带或一次性包装，附配对转移编号及实际材料质量；不重复采购或新增原体质量。按实际节点顺序保留接收、去除、期末库存及继续交接。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_maintenance_marine_fuel` | `live_maintenance`; 输入; 产品流 | 必须辨认并分别采集“实际直接消耗的船舶或场址燃烧燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点负责的实际燃烧燃料，按牌号、组成及送达边界展开。采用经校准质量或密度支持的体积换算；船上发电燃料在此记录，不再作为外购电网电力。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_maintenance_operating_materials` | `live_maintenance`; 输入; 产品流 | 必须辨认并分别采集“实际节点运行耗材与更换物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料、用途及供方边界展开实际润滑剂、清洁剂、过滤件、维修或更换件。排除饵料、单列燃料、水、冰、包装、绑带及供方服务已包含物料。无实物转移的纯供应服务以实际单位进入服务台账。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_maintenance_care_feed` | `live_maintenance`; 输入; 产品流 | 必须辨认并分别采集“实际提供时的有界保活护理饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：本 PCR 不要求投饲。仅纳入有界保活中实际提供且不属于主动生物量生产或育肥路线的护理物料，保留身份、数量及未食、废物或环境去向。记录显示养殖增重时该产品路线排除，不改称保活。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_maintenance_carried_accessories_transfer` | `live_maintenance`; 输出; 产品流 | 必须辨认并分别采集“实际交给下一处理节点的一次性辅助物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：配对实际下一接收者和计量实物质量，含持续附着绑带；去除后交实际处理另列。此内部转移不推断上游制造归属或经济共产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_maintenance_free_water_ice_transfer` | `live_maintenance`; 输出; 产品流 | 必须辨认并分别采集“随活体转移实际携带的游离水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在随存活原体或容器实际转移时记录，与天然保留体液分开。识别液相或固相、实际计量质量及配对接收方 other_water_receipt；接收者按真实冰相记录，不再新增外购冰投入。节点内留存库存及外部排水为其他去向。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_maintenance_operating_waste` | `live_maintenance`; 输出; 废物流 | 必须辨认并分别采集“实际送处理的报废运行物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按身份及实际废物接收方展开废过滤件、润滑剂、清洁残余物、损坏部件及弃置容器材料。排除另列生物量、饵料、水废物及渔具环境遗失；不在其他节点重复报废输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_maintenance_feed_waste` | `live_maintenance`; 输出; 废物流 | 必须辨认并分别采集“实际送处理的未食护理饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际独立处理去向及接收方，区别于库存和废水中物料；若已属于计量处理水组成，不在两股平衡流重复实际质量。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_maintenance_direct_other_emissions` | `live_maintenance`; 输出; 基本流 | 必须辨认并分别采集“实际其他物质明确的直接排放或泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质或形态、介质、方法、系数来源及实际事件展开每项实际污染物、制冷剂、生物源呼吸气体或泄漏物。宽泛污染物标签不得绑定固定身份；缺记录不推断零值或通用系数。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_maintenance_feed_environment` | `live_maintenance`; 输出; 基本流 | 必须辨认并分别采集“实际向环境水体释放的护理饲料或代谢物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅量化有证据的实际物料身份、水介质及事件，相关时含排泄物。区分饲料来源物及原体损失，保留计量基准并避免与已计量排水组成重复。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_restraint_material` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际一次性螯部约束或保护绑带”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在实际施加时记录，识别材料及逐件计量质量或有证据件数转质量。属于辅助材料，不是龙虾原体。可重复约束用具服务进入独立资产台账。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_disposable_protective_pack` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际一次性活龙虾保护包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按具体材料、干湿状态及供方边界记录实际内衬、衬垫、纸箱、标签和容器。区分一次性实物供应、可重复容器制造归属以及降温介质。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_carried_accessories_receipt` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“从前道次接收的实际一次性辅助物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅限从较早呈现道次携来的真实绑带或一次性包装，附配对转移编号及实际材料质量；不重复采购或新增原体质量。按实际节点顺序保留接收、去除、期末库存及继续交接。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_marine_fuel` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际直接消耗的船舶或场址燃烧燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点负责的实际燃烧燃料，按牌号、组成及送达边界展开。采用经校准质量或密度支持的体积换算；船上发电燃料在此记录，不再作为外购电网电力。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_operating_materials` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际节点运行耗材与更换物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料、用途及供方边界展开实际润滑剂、清洁剂、过滤件、维修或更换件。排除饵料、单列燃料、水、冰、包装、绑带及供方服务已包含物料。无实物转移的纯供应服务以实际单位进入服务台账。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presented_accessories_transfer` | `presentation`; 输出; 产品流 | 必须辨认并分别采集“随活体批次实际转移的一次性包装和约束物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：计量实际交给下一内部节点的一次性材料，并配对辅助物转移编号。与龙虾质量分开；不因保护性辅助物虚设第二销售分配。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_free_water_ice_transfer` | `presentation`; 输出; 产品流 | 必须辨认并分别采集“随活体转移实际携带的游离水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在随存活原体或容器实际转移时记录，与天然保留体液分开。识别液相或固相、实际计量质量及配对接收方 other_water_receipt；接收者按真实冰相记录，不再新增外购冰投入。节点内留存库存及外部排水为其他去向。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_operating_waste` | `presentation`; 输出; 废物流 | 必须辨认并分别采集“实际送处理的报废运行物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按身份及实际废物接收方展开废过滤件、润滑剂、清洁残余物、损坏部件及弃置容器材料。排除另列生物量、饵料、水废物及渔具环境遗失；不在其他节点重复报废输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_direct_other_emissions` | `presentation`; 输出; 基本流 | 必须辨认并分别采集“实际其他物质明确的直接排放或泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质或形态、介质、方法、系数来源及实际事件展开每项实际污染物、制冷剂、生物源呼吸气体或泄漏物。宽泛污染物标签不得绑定固定身份；缺记录不推断零值或通用系数。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_accessories_receipt` | `handover`; 输入; 产品流 | 必须辨认并分别采集“随最终批次接收的实际一次性辅助物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：配对前道包装或绑带实物转移，记录未变或去除物料；不重复上游采购。不存在则不虚构。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_marine_fuel` | `handover`; 输入; 产品流 | 必须辨认并分别采集“实际直接消耗的船舶或场址燃烧燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点负责的实际燃烧燃料，按牌号、组成及送达边界展开。采用经校准质量或密度支持的体积换算；船上发电燃料在此记录，不再作为外购电网电力。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_operating_materials` | `handover`; 输入; 产品流 | 必须辨认并分别采集“实际节点运行耗材与更换物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料、用途及供方边界展开实际润滑剂、清洁剂、过滤件、维修或更换件。排除饵料、单列燃料、水、冰、包装、绑带及供方服务已包含物料。无实物转移的纯供应服务以实际单位进入服务台账。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_accessories_handover` | `handover`; 输出; 产品流 | 必须辨认并分别采集“实际跨门交接的一次性辅助物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录跨首次交接门的一次性包装、约束物及其他实际辅助材料，排除可重复资产制造等效质量。属于实物随附，不进入原体分母，也不自动成为经济共产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_free_water_ice_handover` | `handover`; 输出; 产品流 | 必须辨认并分别采集“实际跨首次交接门的游离水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按相态及计量质量，仅记录首次交接时实际随附批次的液态游离水或冰。配对上游接收，并排除于龙虾原体质量、废水及自动独立共产品分配。天然保留体液属于原体，不在此卡。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_operating_waste` | `handover`; 输出; 废物流 | 必须辨认并分别采集“实际送处理的报废运行物料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按身份及实际废物接收方展开废过滤件、润滑剂、清洁残余物、损坏部件及弃置容器材料。排除另列生物量、饵料、水废物及渔具环境遗失；不在其他节点重复报废输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_direct_other_emissions` | `handover`; 输出; 基本流 | 必须辨认并分别采集“实际其他物质明确的直接排放或泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按物质或形态、介质、方法、系数来源及实际事件展开每项实际污染物、制冷剂、生物源呼吸气体或泄漏物。宽泛污染物标签不得绑定固定身份；缺记录不推断零值或通用系数。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover_mass` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_biomass_waste` | `capture`; outputs; waste | 逐项识别并独立计量“实际交处理的捕获残余物或死亡物”包含的实际交换；这些采集和换算责任全部适用：记录具体死亡或拒收原体、脱落组织及实际处理去向；不得将实际验收可售产品强制当作废物，亦不重复环境抛弃。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`dfo-at-sea-lobster-catch` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_lost_capture_gear` | `capture`; outputs; elementary | 逐项识别并独立计量“实际遗失入环境的笼具、绳索或其他捕捞材料”包含的实际交换；这些采集和换算责任全部适用：按观察材料、遗失事件、地点和未回收质量展开；区别于回收废物及计划更换。幽灵捕捞或缠绕观察记入事件台账，不虚构生物量。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_capture_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture_mass` 来源：`dfo-at-sea-lobster-catch` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_grade_alternative_product` | `grade`; outputs; product | 逐项识别并独立计量“实际独立验收的其他龙虾或捕获物产品”包含的实际交换；这些采集和换算责任全部适用：按物种、原体或状态、质量、用途、接收方及交接展开实际非参考输出。可包括实际验收的降级活体或另行验收的死亡食用原体，但均非活体参考产品。仅拒收而无验收用途不构成共产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_grade_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_grade_body_waste` | `grade`; outputs; waste | 逐项识别并独立计量“实际送处理的拒收原体或脱落组织”包含的实际交换；这些采集和换算责任全部适用：以事件编号、实际质量及处理交接识别死亡、状态拒收及脱落组织；待检仍是有身份库存，不自动变废物。排除已销售或环境放归个体。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_grade_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_grade_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_live_maintenance_alternative_product` | `live_maintenance`; outputs; product | 逐项识别并独立计量“实际独立验收的其他龙虾或捕获物产品”包含的实际交换；这些采集和换算责任全部适用：按物种、原体或状态、质量、用途、接收方及交接展开实际非参考输出。可包括实际验收的降级活体或另行验收的死亡食用原体，但均非活体参考产品。仅拒收而无验收用途不构成共产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_live_maintenance_body_waste` | `live_maintenance`; outputs; waste | 逐项识别并独立计量“实际送处理的拒收原体或脱落组织”包含的实际交换；这些采集和换算责任全部适用：以事件编号、实际质量及处理交接识别死亡、状态拒收及脱落组织；待检仍是有身份库存，不自动变废物。排除已销售或环境放归个体。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_live_maintenance_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_live_maintenance_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_presentation_alternative_product` | `presentation`; outputs; product | 逐项识别并独立计量“实际独立验收的其他龙虾或捕获物产品”包含的实际交换；这些采集和换算责任全部适用：按物种、原体或状态、质量、用途、接收方及交接展开实际非参考输出。可包括实际验收的降级活体或另行验收的死亡食用原体，但均非活体参考产品。仅拒收而无验收用途不构成共产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_presentation_body_waste` | `presentation`; outputs; waste | 逐项识别并独立计量“实际送处理的拒收原体或脱落组织”包含的实际交换；这些采集和换算责任全部适用：以事件编号、实际质量及处理交接识别死亡、状态拒收及脱落组织；待检仍是有身份库存，不自动变废物。排除已销售或环境放归个体。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_presentation_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_presentation_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_handover_alternative_product` | `handover`; outputs; product | 逐项识别并独立计量“实际独立验收的其他龙虾或捕获物产品”包含的实际交换；这些采集和换算责任全部适用：按物种、原体或状态、质量、用途、接收方及交接展开实际非参考输出。可包括实际验收的降级活体或另行验收的死亡食用原体，但均非活体参考产品。仅拒收而无验收用途不构成共产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_handover_body_waste` | `handover`; outputs; waste | 逐项识别并独立计量“实际送处理的拒收原体或脱落组织”包含的实际交换；这些采集和换算责任全部适用：以事件编号、实际质量及处理交接识别死亡、状态拒收及脱落组织；待检仍是有身份库存，不自动变废物。排除已销售或环境放归个体。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 数量规则：由 cp_handover_mass 实际原始记录保留未分配实物接收、转移、库存及去向，共享事件、节点或期间责任归属一次后按第 8 节除以正最终验收原体千克数。另按第 7 节对标明的单输出 LCA 视图归属一次；保留实物台账及分配矩阵。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover_mass` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity_scope` | 参考及实际产品 | 要求野生海洋螯龙虾属物种、实际原壳存活完整食用原体、实际附肢或蜕壳状态、来源及首次生产者门。排除刺龙虾、岩龙虾、海螯虾属、淡水螯虾、养殖或育肥、分离部分、死亡或冻结或熟制参考品及非食用苗种、亲本或观赏用途。每项具体最终交换须核实身份及支持项。 | `cpc3-wild-homarus` |
| `closure_and_sequence` | 所有节点道次 | 分别核对原体及兼捕生物量与水、冰、辅助物、渔具或饵料，含期初期末库存、验收其他产品、废物、活体放归、实际死亡及环境损失。匹配转移或道次编号及状态历史，上游投入不固定为 1 千克。检查最终食用交接前实际分级及状态变化后复检；平衡或顺序未知阻断定量完整性。 |  |
| `quantity_and_ranges` | 每项启用具体交换 | 归一化前采集实际数量；零值须有实际未激活角色或计量零证据，不能代表缺数据。暂定推理范围仅为筛选假设，不是默认数量、经验 QA 或法规验收。对展开的每个身份及道次，分别用外部、供方或独立作业期证据及有记录单位、边界和不确定性评价；超暂定范围调查但不截断。不以批次自身最大值验证自身。 |  |
| `attribution_and_route` | 所有资源及输出责任者 | 检查渔具事件互斥及当前证据、实际生产模式与期间、全部有意产品或交接、期间和共享分配矩阵、次级饵料继承及含资源服务范围。保留未分配实物台账及一次标明的单输出 LCA 推导；不得重复捕获、燃料、内部水、自捕饵料、资源责任或二次输出份额。 |  |
| `trace_and_safety` | 完整数据包 | 保留适合实际时地的主管机构或市场验收要求及证据，不将 NOAA 地区说明转为全球法规。记录存活、处理条件及当前放行；低温保活不能使死亡原体复活或逆转不安全历史。须有完整协议、身份、支持项、计量及不确定性证据；检查器成功本身不证明产品安全或清单完整。 |  |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 野生完整活体螯龙虾属生产者前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具完整数量及已核实具体下游身份的已声明实际野生物种、渔具、门及活体食用范围。 |
| excluded_use | 通用全球龙虾平均；未经审查作为养殖、育肥、刺龙虾、Nephrops 或淡水螯虾代理；死亡、部分、冻结或熟制产品；安全或可持续证明；自动生态或避免用饵抵扣。 |
| required_metadata | 物种、野生来源、捕捞技术、事件或批次或道次图、实际活体或壳体或附肢、分级或食用验收、首次生产者门、期间或返航、净原体方法、有意产品、服务及资产范围、分配矩阵以及实际具体流或支持身份。 |
| required_quality_disclosure | 未分配实物及独立 LCA 视图；校准、完整性、定量或身份缺口、暂定范围及不确定性；供方或次级饵料继承及含资源服务证据。 |
| update_trigger | 物种、渔具、门、产品状态、处理顺序、食用要求、饵料来源、供方范围、服务或资产用户、定量证据或已核实身份变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc3-wild-homarus` | official_guidance | UN, CPC Ver.3.0 explanatory notes, 30 June 2025, printed p.47. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类边界；较宽活、鲜或冷藏螯龙虾属叶类，不支持数量或门规则。 |
| `noaa-american-lobster` | official_guidance | NOAA Fisheries, American Lobster. https://www.fisheries.noaa.gov/species/american-lobster | 仅美洲螯龙虾活体市场及实际捕捞渔具示例；不提供全球法规阈值或影响系数。 |
| `dfo-at-sea-lobster-catch` | official_guidance | Fisheries and Oceans Canada, at-sea catch technical report 2890. https://waves-vagues.dfo-mpo.gc.ca/library-bibliotheque/342236.pdf | 条件性饵料来源、兼捕及事件采集角色；不引入数值默认量。 |
| `fishres-secondary-lobster-bait-2025` | literature | An alternative bait for the American lobster fishery composed of fishery by-products to reduce reliance on forage fish. Fisheries Research 286 (2025), 107389. https://doi.org/10.1016/j.fishres.2025.107389 | 仅实际渔业副产品饵料路线存在性；不引入实验配方、相对捕获率或环境抵扣。 |
| `mass-balance-identity` | method_factor | Mass conservation and dimensional normalization; declared physical method in this PCR sections 4 and 8. | 准确参考数量及质量核算恒等式，不代表外部经验数据集。 |
