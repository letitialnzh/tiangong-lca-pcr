---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-crabs-live-fresh-or-chilled
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 首次生产者交接的带壳野生食用整蟹

## 1. 范围与适用性

本 PCR 覆盖唯一实际首次生产者/采集者交接点的野生捕获原生壳食用整蟹，每批次声明活、鲜或非冻结冷却状态。躯体保有背甲及实际附肢状态：缺肢不意味着虚构完整质量。食品接收条件、壳/蜕壳和躯体状态依据实际买方及适用辖区证据，不设跨物种通用最低值。湿整蟹净质量参考既不是可食肉，也不是活/鲜换算。直接野生海洋和内陆捕捞仅在声明实际栖境及渔具场景时纳入。

排除分离腿/螯或肉、熟/冻/加工保存产品、观赏或苗种/放养产出、水产养殖、刻意育肥、受控养成及诱导蜕壳生产。有界维持性暂养仅在不以生产生长为目的时纳入。采购已完成交易的整蟹不能重新启动首次生产者边界。CPC 04311 包含更广的带壳/不带壳类别，本方法有意仅覆盖上述整蟹首次交接范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-crabs-live-fresh-or-chilled |
| classification_refs | cpc:3.0:04311 (narrower) |
| covered_products | 原生壳野生食用整蟹；首次生产者交接点的实际活/鲜/冷却状态 |
| excluded_products | 分离部件/肉、熟/冻/加工品、非食品观赏/苗种、水产养殖/养成/育肥/诱导蜕壳及后续商贩交接点 |
| representative_product | 有实际附肢及壳状态记录、状态明确的野生食用整蟹批次；不默认物种或重建完整肢体 |
| production_route | capture -> 需要时实际分级前 live_hold/fresh_chill -> grading -> 需要时实际分级后维持/冷却 -> presentation；每操作事件只有唯一位置、状态及责任归属；capture 为渔具差异父节点 |
| market_state | 每批次唯一实际物种/状态/等级/交接点，带壳整蟹且食品用途合格、未冻结；散装或包装但参考质量不含包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| what | 首次生产者交接的带壳野生食用整蟹，声明实际活/鲜/冷却状态 |
| how_much | 1 kg 湿整蟹净质量 |
| how_well | 保有实际原生壳整躯体/背甲及附肢状态；声明物种、壳/蜕壳等级、活力/生命状态、温度状态及有记录食品接收；排除外部水、冰和包装 |
| how_long_or_cycle | 一个报告期内声明捕捞航次/投放、实际交接前暂养/处理批次及首次交接日期；保留期初/期末库存与前后资产服务期间 |
| reference_flow_link | `crabs_first_handover` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 首次生产者交接的带壳野生食用整蟹，声明实际活/鲜/冷却状态 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种/分类单元；野生来源；实际海洋/内陆水体及捕捞区；捕捞和交接日期；渔具方法与强度；壳/蜕壳及食品等级；实际躯体/附肢状态；活/鲜/冷却生命-温度状态；食品接收证据；湿净质量及去皮方法；首次交接所有权/地点；实际暂养/冷却激活；报告/库存期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以校准秤称量合格整蟹，去除外部水/冰并扣除全部容器、捆扎及包装皮重。保留原生壳/体液及实际附肢。不假定可食产率、数量-质量或缺肢系数。采用 cp_presentation；最终产出为 1 kg。 |
| `energy_metering` | 实际采购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 在实际供应边界记录计量 kWh 或 MJ；kWh 到 MJ 使用 3.6。燃料升数须供应者在声明条件下实测密度，绝不默认。气体体积须验证压力/温度/纯度换算后才可记质量交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际捕捞前处于声明天然水体中的野生蟹及兼捕分类单元；无自有育苗/生长阶段 |
| starting_condition_role | 天然捕捞场景，不是零负荷采购食用蟹 |
| product_classification_scope | 仅带壳野生食用整蟹；窄于 CPC 3.0 04311 |
| recursive_input_rule | 同类别蟹作为饵料采购时，为另行识别的供应投入，含此前捕捞负荷及非参考用途，不递归生成本食品产出；已交易整蟹转售不属于首次生产者参考路线 |
| upstream_dataset_requirement | 须实际交接点/状态兼容的上游饵/饲料、燃料/电、渔具/资产、包装、水/气及处理数据集或供应者实测包；未解决投入保留缺口，不计零负荷 |
| disclosure | 声明生产者/操作单元、栖境/物种/渔具、实际节点所有权/激活、首次交接点、时间/库存边界、兼捕与放流、全部预期产出及分配；不形成跨多站点联合平均 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_capture` | all nodes | 从野生资源采捕开始，含归属准备、燃料供应、饵料、渔具及资本服务；止于实际首次生产者/采集者交接。在该点之前的自有处理与运输，无论地点，均纳入。已经通过生产者交接点的采购整蟹、零售/商贩暂养、养成、育肥和诱导蜕壳不属于参考路线。 | `wild-crab-foreground-method` |
| `boundary_states` | grading; live_hold; fresh_chill; presentation | 实际船上暂养或冷却可发生在分级之前。操作阶段记录为 pre_sort 或 post_sort；留置渔获可先经 live_hold/fresh_chill 再分级，只有完成分级且食品接收合格的最终批次才进入 presentation。每一暂养/冷却事件只有唯一时间/阶段、只计一次，即使同一节点分别实施分级前与分级后事件。分级 -> 实际 live_hold 和/或 fresh_chill -> 呈现不是强制链条。旁路保持实际状态及转移记录。活体降温可与前期活体维持共存；死亡鲜品不进入活体暂养。每一损失或死亡事件均须重新确定去向及适用食品接收，不从缺失信息推断未激活状态或鲜品回收。 | `wild-crab-foreground-method` |
| `boundary_gear` | capture | capture 为技术父节点。笼壶投放、饵料、绳/浮标、浸泡及起收，与绳线、抄网或刮捕的强度、清单和栖境接触证据不同。同一次作业只有唯一实际方法；不同方法仅以独立索引强度/渔获记录在同一航次共存。技术差异由当前操作者及渔具证据确定，不由路线标签确定。 | `wild-crab-foreground-method` |
| `boundary_water` | live_hold; fresh_chill; presentation | 区分采购水、直接取水、内部循环、蒸发、库存变化、收集废水与直接回流。溶解污染物质量与载体水质量不重复；直接物质按实际化学基准及介质拆分。清洗不被假定为净化或食品安全认证。 | `wild-crab-foreground-method` |
| `boundary_shared` | capture; grading; live_hold; fresh_chill; presentation | 按实际消费节点及服务期间索引共享船舶/甲板、暂养槽、码头冷库、制冰机及周转容器。一个资产或带操作服务事件只有唯一负荷责任归属及完整分配台账。自有辅助电/冰在责任节点内计量，不为同一自产出另加采购电/冰，也不重复下游服务燃料。 | `wild-crab-foreground-method` |
| `boundary_secondary_bait` | capture | 加工副产品饵是此前产品系统的次级材料，不是零负荷野生资源。按实际供应者识别原产品、分离/回收交接、保存/运输及本次投饵点；实验文献仅支持该路线确实存在，不推断当前批次配方或性能。若前景没有该投入，则此条件接口不激活。 | `cerbule-secondary-bait-2023`; `wild-crab-foreground-method` |

## 6. 过程清单结构

### 过程图谱

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | 野生蟹捕捞与起获 | required | 所有纳入批次 | 从声明水域起获野生渔获；留置渔获交给实际分级前保存或分级节点 | 每 1 kg 参考流；保留实测节点产出 |
| `grading` | 整批渔获分拣与去向分级 | required | 全部留置渔获均须确定实际等级或去向 | 区分合格食用整蟹、其他预期上岸产品、活体放流与剔除物 | 每 1 kg 参考流；保留实测节点产出 |
| `live_hold` | 首次交接前的有界活体维持 | conditional | 实际活蟹在首次交接前接受自有维持干预；pre_sort 保留待分级状态，post_sort 保留实际验收状态；排除养成、育肥或诱导蜕壳 | 维持活体状态，明确分开存活、符合鲜品条件的转流与死亡损失 | 每 1 kg 参考流；保留实测节点产出 |
| `fresh_chill` | 鲜食处理与非冻结冷却 | conditional | 食品用途合格整蟹批次实际发生交接前自有鲜品处理、计划状态转换或非冻结冷却 | 记录实际活/鲜/冷却的前后状态，不进行冻结、烹煮或取肉 | 每 1 kg 参考流；保留实测节点产出 |
| `presentation` | 生产者呈现与首次交接 | required | 全部最终参考批次，无论包装或散装 | 在唯一首次生产者/采集者交接点呈现选定实际整蟹食品状态 | 每 1 kg 参考流；保留实测节点产出 |

### 过程：野生蟹捕捞与起获 (`capture`)

捕捞节点拥有航次准备、首次交接前的出返航、投放、浸泡、起收与起获责任。这是采捕责任，不是受控生长或独立原料预处理服务。渔具作业记录须区分笼壶、延绳/手线、抄网/刮捕或其他有证据的方法。笼壶强度记录投放与回收数量、饵料投放、浸泡时长、串联绳/垂直绳/浮标、逃逸及丢失。其他渔具须自行记录强度与底接触，不可套用笼数或饵料假设。起获可交出活蟹或已死亡但符合食品用途接收条件的整蟹，须声明实际状态与处理时间。上岸生物量和渔具丢失质量均不能单独代表生态损害。

#### 输入

##### 产品流

###### 中国电网平均低于 1 kV 的用户侧交流电 (`capture_cn_electricity`)

仅适用实际匹配的中国低压供电；计量归属本节点的电量。其他地域/电压/组合不适用。按 3.6 将计量 kWh 转为 MJ；不把自发电与其燃料作为两项采购负荷叠加。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- 绑定：`fixed`

- 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_capture`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_capture_cn_electricity

  - 单位：MJ

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 声明供应边界的其他实际采购电力 (`capture_other_electricity`)

仅用于不匹配中国固定卡的采购电力，按实际地域、电压、供应者/组合拆分；不是船上自发电的替代。须提供供电证据。

- 选定流：声明供应边界的其他实际采购电力

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_capture`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_capture_other_electricity

  - 单位：MJ

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 实际供应的捕捞渔具及甲板清洁水 (`capture_cleaning_water`)

仅指实际自有渔具/甲板清洁水，记录处理、供应者及库存变化，不是蟹体留存水或强制渔获清洗步骤。若为直接取水而非供水，须按实际水源实例化独立基本流提取并确认其身份。

- 选定流：实际供应的捕捞渔具及甲板清洁水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_capture`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_capture_cleaning_water

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单独计量的液态水 (`capture_internal_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`

###### 单独计量的固态水冰 (`capture_internal_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`



###### 分级入口的未分拣留置野生渔获 (`capture_retained_catch`)

以物种/状态、时间、湿质量和转移编号把全部留置目标及兼捕分类单元对应至实际下一节点。目标整蟹部分可在分级前进入 live_hold 或 fresh_chill，再去分级；非蟹兼捕物另行转至分级或实际去向。不可把全部留置渔获称为最终合格整蟹质量。独立捕获的饵料另行标识，不在此处及参考产品中重复计入。

- 选定流：分级入口的未分拣留置野生渔获

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_capture`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_capture_retained_catch

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 废物流

##### 基本流

###### 排入未细分空气的化石源二氧化碳 (`capture_fossil_co2`)

仅用于实际自有化石燃烧且接收介质为此未细分空气的情形。质量须据独立燃料组成和氧化/排放方法或实测排放取得，不得从此身份或通用系数推得。排除采购电力/服务的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 绑定：`fixed`

- 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_capture`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_capture_fossil_co2

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 实际直接回流的甲板/渔具清洁水 (`capture_direct_washwater`)

此处仅记录实际载体水质量及接收介质；重要直接物质另在 capture_dissolved_cleaning_releases 记录。排除已按作业废物收集的水/物质；浓度测量缺失或排放未知不等于零。

- 选定流：实际直接回流的甲板/渔具清洁水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_capture`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_capture_direct_washwater

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

### 过程：整批渔获分拣与去向分级 (`grading`)

以转移编号核对来自捕捞及实际 pre_sort 暂养/冷却的未分拣渔获，不重复其前身转移。列明物种、壳/蜕壳状态、相关时的性别、躯体/附肢状态及每一实际食品等级。不可用转换系数虚构缺失肢体质量：称量实际合格整躯体，并保留买方或主管机构接收记录。尺寸不足或禁止留置个体不能自动当作降级食品。每一其他物种上岸产品或非参考等级均有独立交接与分配状态。活体放流返回声明的环境；死亡弃置物及留置废物按实际独立去向记录。即使售出，分离腿/螯仍不属于参考产品。

#### 输入

##### 产品流

###### 单独计量的液态水 (`grading_internal_water_ice_receipt_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`

###### 单独计量的固态水冰 (`grading_internal_water_ice_receipt_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`



###### 中国电网平均低于 1 kV 的用户侧交流电 (`grading_cn_electricity`)

仅适用实际匹配的中国低压供电；计量归属本节点的电量。其他地域/电压/组合不适用。按 3.6 将计量 kWh 转为 MJ；不把自发电与其燃料作为两项采购负荷叠加。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- 绑定：`fixed`

- 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_grading`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_grading_cn_electricity

  - 单位：MJ

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 声明供应边界的其他实际采购电力 (`grading_other_electricity`)

仅用于不匹配中国固定卡的采购电力，按实际地域、电压、供应者/组合拆分；不是船上自发电的替代。须提供供电证据。

- 选定流：声明供应边界的其他实际采购电力

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_grading`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_grading_other_electricity

  - 单位：MJ

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 从捕捞接收的未分拣留置野生渔获 (`grading_catch`)

接收实际 capture_retained_catch 和/或 pre_sort 的 hold_live_survivors、hold_eligible_fresh 或 chill_accepted_food，逐项按转移编号及分类单元/状态质量配对。保留全部此前处理负荷及实测损失；不把原捕获物和其保存后继物计为两份分级输入。内部转移不重复采购上游负荷。

- 选定流：从捕捞接收的未分拣留置野生渔获

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_grading`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_grading_catch

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 实际供应的分级设备清洁水 (`grading_cleaning_water`)

仅指实际自有设备清洁，不虚构产品清洗或预处理路线。明确水源、处理、供应者及质量；若为直接取水，则须独立实际水源基本流提取。

- 选定流：实际供应的分级设备清洁水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_grading`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_grading_cleaning_water

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单独计量的液态水 (`grading_internal_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`

###### 单独计量的固态水冰 (`grading_internal_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`



###### 分级出口合格活体食用整蟹 (`grading_live_food`)

按实际原生壳整躯体与附肢状态、食品等级和活力接收；交给实际 live_hold、fresh_chill 或 presentation。按转移区分互斥去向，不把此中间物计为第二最终参考产品。

- 选定流：分级出口合格活体食用整蟹

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_grading`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_grading_live_food

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 分级出口合格已死亡鲜或冷却食用整蟹 (`grading_fresh_food`)

仅限独立证明食品接收合格且处于实际鲜/冷却状态的渔获；记录死亡/处理历史及接收证据，不默认把不明活体死亡转成食品。交给实际 fresh_chill 或直接 presentation。

- 选定流：分级出口合格已死亡鲜或冷却食用整蟹

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_grading`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_grading_fresh_food

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 废物流

##### 基本流

###### 排入未细分空气的化石源二氧化碳 (`grading_fossil_co2`)

仅用于实际自有化石燃烧且接收介质为此未细分空气的情形。质量须据独立燃料组成和氧化/排放方法或实测排放取得，不得从此身份或通用系数推得。排除采购电力/服务的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 绑定：`fixed`

- 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_grading`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_grading_fossil_co2

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 实际直接回流的分级设备清洁水 (`grading_direct_washwater`)

此处仅识别实际载体水，化学排放另在 grading_dissolved_cleaning_releases 记录；核对清洁输入、收集废物、留存与蒸发。同一数量不重复计入作业废物，绝不把水质量当化学物质量。

- 选定流：实际直接回流的分级设备清洁水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_grading`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_grading_direct_washwater

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

### 过程：首次交接前的有界活体维持 (`live_hold`)

仅凭带时间的所有权与干预记录激活。量化输入活体质量、槽养或干法暂养方式、时长、温度及实际存活情况；不规定通用时长、氧气剂量、密度或盐度。有界维持性投喂仍是真实投入及损失来源；以生长、育肥或蜕壳生产为目的则排除。存活个体保持活态；pre_sort 存活量须直接去分级或经有记录 pre_sort 冷却再去分级；post_sort 合格存活量可去呈现或实际 post_sort 鲜品/冷却。死亡从不计为活体产率：只有独立证明符合适用规定的鲜食转流，才可带新状态记录沿 pre_sort/post_sort 路线转移，且不可跳过待完成分级，否则归为废物。存活状态未知是数据缺口，不是默认存活。不激活时，实际捕捞或分级活体转至记录的下一节点，相关时保留待分级状态；不虚构暂养输入、公用工程或存活产率。

#### 输入

##### 产品流

###### 单独计量的液态水 (`live_hold_internal_water_ice_receipt_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_hold`

###### 单独计量的固态水冰 (`live_hold_internal_water_ice_receipt_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_hold`



###### 中国电网平均低于 1 kV 的用户侧交流电 (`live_hold_cn_electricity`)

仅适用实际匹配的中国低压供电；计量归属本节点的电量。其他地域/电压/组合不适用。按 3.6 将计量 kWh 转为 MJ；不把自发电与其燃料作为两项采购负荷叠加。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- 绑定：`fixed`

- 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_live_hold`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_live_hold_cn_electricity

  - 单位：MJ

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 声明供应边界的其他实际采购电力 (`live_hold_other_electricity`)

仅用于不匹配中国固定卡的采购电力，按实际地域、电压、供应者/组合拆分；不是船上自发电的替代。须提供供电证据。

- 选定流：声明供应边界的其他实际采购电力

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_live_hold`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_live_hold_other_electricity

  - 单位：MJ

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 有界维持入口活体野生整蟹，声明分级状态 (`hold_live_crabs`)

测量分级前来自 capture、实际仍存活的 pre_sort chill_accepted_food，或分级后来自 grading_live_food、实际仍存活的 post_sort chill_accepted_food 的实际活体整蟹转移，带转移编号、pre_sort/post_sort 阶段、到达时间、状态及湿质量。分级前保留待定等级，所有存活/转流均先经分级才到最终交接点；死亡/鲜品批次不得进入活体存活分母。

- 选定流：有界维持入口活体野生整蟹，声明分级状态

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_live_hold`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_hold_live_crabs

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 实际外供暂养用水 (`hold_water_supplied`)

按实际处理、盐度及供应者拆分供应淡水、处理工艺水或海水，不互换不兼容身份。不重复采购已在 hold_water_abstracted 直接提取的水量。

- 选定流：实际外供暂养用水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_live_hold`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_hold_water_supplied

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单独计量的液态水 (`live_hold_internal_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_hold`

###### 单独计量的固态水冰 (`live_hold_internal_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_hold`



###### 有界维持后存活的野生整蟹，声明分级状态 (`hold_live_survivors`)

实测保有实际壳/附肢状态的活体存活量。pre_sort 产出须直接去分级，或经实际 pre_sort fresh_chill 后再去分级；只有 post_sort 食品接收合格产出才可去 presentation 或有记录 post_sort fresh_chill。排除死亡、结转库存及任何生长/蜕壳生产批次。

- 选定流：有界维持后存活的野生整蟹，声明分级状态

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_live_hold`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_hold_live_survivors

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 从活体维持独立验收转为鲜食的整蟹 (`hold_eligible_fresh`)

不是活体存活量。必须有实际死亡/发运记录及独立适用食品接收，否则归 hold_mortality。pre_sort 转流仍须去分级，可先经 pre_sort fresh_chill；只有已完成分级的 post_sort 合格转流才可去 presentation 或 post_sort fresh_chill。不假定可食回收。

- 选定流：从活体维持独立验收转为鲜食的整蟹

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_live_hold`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_hold_eligible_fresh

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 废物流

###### 收集并交外部处理接收者的暂养废水 (`hold_effluent_collected`)

在技术系统交接点计量实际排水质量、组成及接收者；按声明纳入处理负荷，不对同一未处理废水另计直接接收水污染负荷。

- 选定流：收集并交外部处理接收者的暂养废水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_live_hold`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_hold_effluent_collected

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 基本流

###### 排入未细分空气的化石源二氧化碳 (`live_hold_fossil_co2`)

仅用于实际自有化石燃烧且接收介质为此未细分空气的情形。质量须据独立燃料组成和氧化/排放方法或实测排放取得，不得从此身份或通用系数推得。排除采购电力/服务的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 绑定：`fixed`

- 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_live_hold`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_live_hold_fossil_co2

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 直接返回声明接收环境的水 (`hold_water_return`)

记录直接回流水质量、接收水体和实际处理；与收集废水及耗水、留存水、蒸发和泄漏区分。水量不是营养物质量。

- 选定流：直接返回声明接收环境的水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_live_hold`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_hold_water_return

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

### 过程：鲜食处理与非冻结冷却 (`fresh_chill`)

须区分活体降温与已死亡的鲜/冷却食品状态。分别记录活体输入、已合格接收的死亡输入或合格鲜品转流；生命状态丧失时必须有适用规定允许的状态转换与鲜品接收记录。不得把原因不明的活体死亡重新标注为冷却品即当作可售食品。即时交接的鲜品不被强制要求冷却；不激活本节点时，分级鲜品可按实际鲜品状态及经历时间直接进入交接呈现。自制冰作为本节点内部辅助台账，计入水、电/燃料、直接排放及损失，同时不得重复采购其产出冰。下方固定冰身份仅用于实际采购的捕捞冷却冰。

#### 输入

##### 产品流

###### 单独计量的液态水 (`fresh_chill_internal_water_ice_receipt_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_chill`

###### 单独计量的固态水冰 (`fresh_chill_internal_water_ice_receipt_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_chill`



###### 中国电网平均低于 1 kV 的用户侧交流电 (`fresh_chill_cn_electricity`)

仅适用实际匹配的中国低压供电；计量归属本节点的电量。其他地域/电压/组合不适用。按 3.6 将计量 kWh 转为 MJ；不把自发电与其燃料作为两项采购负荷叠加。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- 绑定：`fixed`

- 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_fresh_chill`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_fresh_chill_cn_electricity

  - 单位：MJ

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 声明供应边界的其他实际采购电力 (`fresh_chill_other_electricity`)

仅用于不匹配中国固定卡的采购电力，按实际地域、电压、供应者/组合拆分；不是船上自发电的替代。须提供供电证据。

- 选定流：声明供应边界的其他实际采购电力

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_fresh_chill`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_fresh_chill_other_electricity

  - 单位：MJ

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 进入鲜品处理或冷却的状态明确食用整蟹 (`chill_whole_food`)

分级前接收来自 capture 或 pre_sort live_hold 的唯一实际目标整蟹转移；分级后接收 grading/post_sort live_hold 转移。记录 pre_sort/post_sort 阶段及实际活体、独立食品接收合格死亡鲜品或已冷却状态。相关时保留待分级状态；跟踪计划转换及接收，不混合活与死库存。

- 选定流：进入鲜品处理或冷却的状态明确食用整蟹

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_fresh_chill`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_chill_whole_food

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 上岸港口供应点采购的捕捞冷却冰 (`chill_purchased_ice`)

仅限实际外供船上/上岸捕捞冷却介质。分别计量到货与消耗冰量，记录库存变化，额外冰不计蟹净质量。不适用于自制冰或其他供应/产品场景。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 绑定：`fixed`

- 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_fresh_chill`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_chill_purchased_ice

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 实际外供鲜品处理或自制冰用水 (`chill_water_supplied`)

记录供应者、处理和盐度；自制冰在此计实际水与公用工程，不使用采购冰卡。食品接触用途须实际主管机构/产品接收证据，不假定卫生效果。

- 选定流：实际外供鲜品处理或自制冰用水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_fresh_chill`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_chill_water_supplied

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单独计量的液态水 (`fresh_chill_internal_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_chill`

###### 单独计量的固态水冰 (`fresh_chill_internal_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fresh_chill`



###### 实际鲜品处理或非冻结冷却后合格食用整蟹 (`chill_accepted_food`)

pre_sort 整蟹产出带实际状态、物种、躯体状态、质量及时间去分级；post_sort 食品接收合格产出去 presentation；实际冷却后仍存活且随后暂养的批次可在相同分级阶段转 hold_live_crabs。死亡或未知活力不能进入此活体接口，每次事件必须有唯一顺序与转移编号。独立记录活体存活，并保留全部分级前处理负荷。此为实测中间物，不自动等于 1 kg，绝不是冻/熟/分割产出。

- 选定流：实际鲜品处理或非冻结冷却后合格食用整蟹

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_fresh_chill`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_chill_accepted_food

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 废物流

##### 基本流

###### 排入未细分空气的化石源二氧化碳 (`fresh_chill_fossil_co2`)

仅用于实际自有化石燃烧且接收介质为此未细分空气的情形。质量须据独立燃料组成和氧化/排放方法或实测排放取得，不得从此身份或通用系数推得。排除采购电力/服务的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 绑定：`fixed`

- 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_fresh_chill`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_fresh_chill_fossil_co2

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 直接返回接收环境的实际融冰水或工艺水 (`chill_direct_water`)

记录实际直接回流水，重要伴随溶解物按物质另行拆分；排除收集废介质，避免把载体水当作污染物。

- 选定流：直接返回接收环境的实际融冰水或工艺水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_fresh_chill`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_chill_direct_water

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

### 过程：生产者呈现与首次交接 (`presentation`)

仅在分级及食品接收完成后，按转移编号接收来自 grading、post_sort live_hold 或 post_sort fresh_chill 的实测最终合格状态，同一批次不得叠加三种备选输入。活体销售须维持存活，其他销售须保持声明的鲜/冷却条件。容器、捆扎、衬垫、标签和冷却介质质量不计入参考整蟹净质量。包装、周转容器清洗及交接处理仅在首次交接前由生产者拥有时纳入；散装路线记录实际周转箱/搬运需求或有证据的不存在，不虚构包装。首次交接按实际记录可在船上、岸边或生产者集货点；之后商贩暂养、零售、外部加工及配送排除。最终卡在每一批次实例化为唯一实际物种/状态/交接点，不混合不兼容身份。

#### 输入

##### 产品流

###### 单独计量的液态水 (`presentation_internal_water_ice_receipt_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`

###### 单独计量的固态水冰 (`presentation_internal_water_ice_receipt_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`



###### 中国电网平均低于 1 kV 的用户侧交流电 (`presentation_cn_electricity`)

仅适用实际匹配的中国低压供电；计量归属本节点的电量。其他地域/电压/组合不适用。按 3.6 将计量 kWh 转为 MJ；不把自发电与其燃料作为两项采购负荷叠加。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- 绑定：`fixed`

- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_presentation`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_presentation_cn_electricity

  - 单位：MJ

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 声明供应边界的其他实际采购电力 (`presentation_other_electricity`)

仅用于不匹配中国固定卡的采购电力，按实际地域、电压、供应者/组合拆分；不是船上自发电的替代。须提供供电证据。

- 选定流：声明供应边界的其他实际采购电力

- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ

- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_presentation`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_presentation_other_electricity

  - 单位：MJ

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 首次生产者交接前状态明确的最终食用整蟹 (`presentation_whole_food`)

每批次仅接收来自分级或 post_sort 暂养/fresh_chill 的唯一实际最终转移；pre_sort 转移在分级之前不能成为最终产出。拆分物种及活/鲜/冷却状态、实际躯体状态与食品接收条件。核对输入/输出湿质量基准，不加入包装或冰质量。

- 选定流：首次生产者交接前状态明确的最终食用整蟹

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_presentation`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_presentation_whole_food

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 实际供应的容器清洗或交接处理水 (`presentation_water`)

仅用于实际自有交接前清洗/处理，带水源/处理及质量；不是固定清洗要求或净化证明。避免重复前节点已实施和核算的清洗。

- 选定流：实际供应的容器清洗或交接处理水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_presentation`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_presentation_water

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单独计量的液态水 (`presentation_water_ice_handover_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`

###### 单独计量的固态水冰 (`presentation_water_ice_handover_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`



###### 单独计量的液态水 (`presentation_internal_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`

###### 单独计量的固态水冰 (`presentation_internal_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`



###### 首次生产者交接的带壳野生食用整蟹，声明实际活/鲜/冷却状态 (`crabs_first_handover`)

唯一最终参考产出：实际合格蟹体保有原生壳及实际附肢状态，以湿净质量计，排除外部水/冰/包装。每批次实例化唯一实际物种、壳/蜕壳等级、生命/温度状态、食品接收条件及交接点；不平均混合活/死状态，不使用可食肉换算。

- 选定流：首次生产者交接的带壳野生食用整蟹，声明实际活/鲜/冷却状态

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：1 千克

- 数值来源模式：固定值 (`fixed_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：方法公式 (`method_formula`)

- 采集协议：`cp_presentation`

- 来源：`wild-crab-foreground-method`

- 数量范围：参考定义范围

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：1

  - 上限：1

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 随验收批次实际发出的实物包装 (`presentation_packaging_handover`)

与蟹净质量、拒收及期末存量分开记录跨边界一次性包装实物质量及所有权。周转箱在资产流转账保留完整实物发出、返还及存量质量，与更换制造服务份额分开；不得因发出而推断废物去向或独立分配的食品共产品。实际散装不虚构包装。

- 选定流：随验收批次实际发出的实物包装

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_presentation`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_presentation_packaging_handover

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 废物流

###### 交实际接收者的收集容器清洗废水 (`presentation_effluent`)

记录水量/质量、实际组成及处理交接；如实际直接环境排放，则须改为分别明确的基本流水/物质交换并披露符合性。

- 选定流：交实际接收者的收集容器清洗废水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_presentation`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_presentation_effluent

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

##### 基本流

###### 排入未细分空气的化石源二氧化碳 (`presentation_fossil_co2`)

仅用于实际自有化石燃烧且接收介质为此未细分空气的情形。质量须据独立燃料组成和氧化/排放方法或实测排放取得，不得从此身份或通用系数推得。排除采购电力/服务的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 绑定：`fixed`

- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_presentation`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_presentation_fossil_co2

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

###### 实际直接排放的容器清洁水 (`presentation_direct_water`)

仅指交接点实际直接回流，带接收环境及水质量；与 presentation_effluent 对同一数量互斥。分别计入蒸发、库存变化及留存水。

- 选定流：实际直接排放的容器清洁水

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg

- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。

- 数值来源模式：计算值 (`calculated_value`)

- 适用范围：场址特定 (`site_specific`)

- 归一化基准：每 1 kg 参考流

- 基准类型：参考流 (`reference_flow`)

- 证据类型：由采集记录计算 (`calculated_from_collection`)

- 采集协议：`cp_presentation`

- 来源：`wild-crab-foreground-method`

- 数量范围：独立参考调查协议筛查范围；非默认用量

  - 范围角色：QA 校验 (`qa_guardrail`)

  - 下限：0

  - 上限：U_presentation_direct_water

  - 单位：kg

  - 基准：每 1 kg 参考流

  - 基准类型：参考流 (`reference_flow`)

  - 证据类型：方法公式 (`method_formula`)

  - 来源：`wild-crab-foreground-method`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_output` | capture; grading | 先分离实际专用强度及下游等级处理以避免分配。不可分离的捕捞联产品剩余共同强度负荷，按各自首次独立交接的有记录上岸湿质量分配至全部预期留置产品；同一参考批次的食品等级只计一次。披露物理驱动为何代表共同作业，价值/强度明显不同则检验经济分配敏感性。不能证明合理驱动时保留联产品数据包并阻断单产品声明，不静默选择份额。 | `wild-crab-foreground-method` |
| `allocation_losses` | all nodes | 活体放流、死亡弃置、死亡损失、食品剔除和废物是物理去向，不因有质量就变成预期联产品。其捕捞/处理/处置负荷归属造成这些活动的留置预期产品，披露实际归趋，不自动给予替代、生态、饵回用或负生物量信用。确为销售的非参考产出须独立产品作用及交接记录。 | `wild-crab-foreground-method` |
| `allocation_periods` | all nodes | 索引航次、投放、暂养批次、处理运行和报告期；纳入归属声明渔业的空载/失败航次。以带日期转移及死亡核对蟹与饵料期初/期末库存；伴随负荷随期末库存结转，在以后交接时只释放一次。按实际服务历史、更换及剩余寿命归属船舶/渔具/槽/制冰机及箱资本，不用通用寿命或每航次新采购。 产品保管交接边界与资源服务核算期间分开：海上首次交接不移至港口，但以实际航次期间账一次归属必要的生产者返航、怠速及返航周期准备；记录实际结束时间及分属其他航次的服务份额。买方分销与后续无关捕捞不纳入本批，不得把返航同时计入下一航次。 | `wild-crab-foreground-method` |
| `allocation_shared` | all nodes | 共享船舶、泵和冷库作业采用实测燃料/电或运行时长及有证据负荷；槽/箱仅在能代表实际服务时采用占用质量-时间或服务循环。每事件先分配至消费节点/期间，仍联合时再分至预期产品；份额和须为一。区分物理内部转移与采购服务。清洗/换批和返还只有唯一运行归属，不在另一节点重复。 | `wild-crab-foreground-method` |
| `allocation_secondary_bait` | capture_bait | 原则上继承与供方联产品分配一致的原捕捞/加工份额，并加入分离、回收、保存与运输负荷；废物与产品状态及分离点须由供应者证明。若供方使用截断，必须在供需边界一致、明确披露且开展替代继承敏感性分析；不能默认废弃物身份或零负荷。回收事件及前系统份额只计一次，不自动给予避免处置信用。 | `wild-crab-foreground-method` |

## 8. 前景数据采集、计算与质量规则

声明前景采集方法：每个实际节点保有按批次/投放/事件关联的台账。以校准秤称量湿生物量和材料；仅在具有同物种/状态代表性质量样本及其不确定度时保留原始计数换算。计量供应公用工程并核对储罐/资产/渔具库存。实际质量交换与直接物质排放须身份特定单位和独立供应、测量或排放方法证据；定性路线来源不提供数量系数。未分配物理视图在确认相匹配且为正的状态合格最终验收净质量后，对完整航次实测材料分区归一化。另列的单输出 LCA 视图须先确定共产品份额再计算分配负荷，不得把完整联合航次负荷声称为单一物种专属负荷。共享资源服务归属不是共产品分配。

范围方法：每一激活的非最终行，从同物种/状态/渔具及测量范围的独立代表性参考调查，或有记录供应者/设计包络建立 U_row，按该参考调查自身验收产出，并在与目标一致且明确标注的物理或 LCA 视图中归一化；不将已分配量与未分配量比较。保留预先选定的不确定度裕量、抽样设计、样本量及可比性论证；不以目标批次最大值校验同一批次。下限 0 表示物理数量非负，不允许把缺失数据填零。此处不虚构数值 U。独立包络缺失时，数据生产者记录范围证据缺口并补测，不能声称通过定量校验。越界实测值保留并调查。最终 1 到 1 范围仅来自参考定义。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | 全部实际 capture 交换作用，按身份/状态拆分 | 节点特定配对测量、事件及供应者记录 |航次/投放/批次/转移/事件编号；节点与期间；物种/材料/物质/状态；pre_sort/post_sort 阶段及实际事件顺序；质量及单位；期初/期末库存；燃料/电/水/气/资产/渔具事件；接收者/介质；所有权/分配份额；验收最终净千克；独立参考调查及 U_row 证据; 渔具类型/构型/材料；投放与回收数量；浸泡/起收时长；饵物种/状态及投放/回收/损失；按分类单元和去向的渔获；船舶/燃料/渔具库存；幽灵捕捞/缠绕/底接触观察 | 采用校准湿/净称重，分离外部水并扣除容器皮重；计量公用工程、核对库存与实际物种/状态转移；采样浓度/材料组成或保留兼容供应者/系数证据。记录本节点特定的渔具/暂养/处理条件及损失去向。 | 按身份计 kg；能量 MJ；保留原始数量/时长/温度/体积及换算 | 每一实际批次、投放、发运或材料事件；按运行区间匹配计量 | 完整声明航次/批次及报告期，含失败航次、期末库存及带日期更换 | 一个声明生产者/操作单元及本节点，不混合无关船队/站点 | 每 1 kg 参考流 | 秤/计量校准、原始日志及时间、食品/状态接收、可追溯供应者/组成/系数记录、库存/转移核对、独立 U_row 证据及覆盖缺口 |
| `cp_grading` | `grading` | 全部实际 grading 交换作用，按身份/状态拆分 | 节点特定配对测量、事件及供应者记录 |航次/投放/批次/转移/事件编号；节点与期间；物种/材料/物质/状态；pre_sort/post_sort 阶段及实际事件顺序；质量及单位；期初/期末库存；燃料/电/水/气/资产/渔具事件；接收者/介质；所有权/分配份额；验收最终净千克；独立参考调查及 U_row 证据; 实际输入前身/状态；相关时的壳/蜕壳/性别；躯体/附肢状态；等级与食品接收；各等级/去向质量；放流活力及接收者；分离部件和组织损失 | 采用校准湿/净称重，分离外部水并扣除容器皮重；计量公用工程、核对库存与实际物种/状态转移；采样浓度/材料组成或保留兼容供应者/系数证据。记录本节点特定的渔具/暂养/处理条件及损失去向。 | 按身份计 kg；能量 MJ；保留原始数量/时长/温度/体积及换算 | 每一实际批次、投放、发运或材料事件；按运行区间匹配计量 | 完整声明航次/批次及报告期，含失败航次、期末库存及带日期更换 | 一个声明生产者/操作单元及本节点，不混合无关船队/站点 | 每 1 kg 参考流 | 秤/计量校准、原始日志及时间、食品/状态接收、可追溯供应者/组成/系数记录、库存/转移核对、独立 U_row 证据及覆盖缺口 |
| `cp_live_hold` | `live_hold` | 全部实际 live_hold 交换作用，按身份/状态拆分 | 节点特定配对测量、事件及供应者记录 |航次/投放/批次/转移/事件编号；节点与期间；物种/材料/物质/状态；pre_sort/post_sort 阶段及实际事件顺序；质量及单位；期初/期末库存；燃料/电/水/气/资产/渔具事件；接收者/介质；所有权/分配份额；验收最终净千克；独立参考调查及 U_row 证据; pre_sort/post_sort 阶段；活体进出及到达/离开时间；槽/干法方式；温度/时长；死亡及独立鲜品接收；维持投喂；气体纯度/压力/温度；补水/回流/蒸发；进出水物质浓度 | 采用校准湿/净称重，分离外部水并扣除容器皮重；计量公用工程、核对库存与实际物种/状态转移；采样浓度/材料组成或保留兼容供应者/系数证据。记录本节点特定的渔具/暂养/处理条件及损失去向。 | 按身份计 kg；能量 MJ；保留原始数量/时长/温度/体积及换算 | 每一实际批次、投放、发运或材料事件；按运行区间匹配计量 | 完整声明航次/批次及报告期，含失败航次、期末库存及带日期更换 | 一个声明生产者/操作单元及本节点，不混合无关船队/站点 | 每 1 kg 参考流 | 秤/计量校准、原始日志及时间、食品/状态接收、可追溯供应者/组成/系数记录、库存/转移核对、独立 U_row 证据及覆盖缺口 |
| `cp_fresh_chill` | `fresh_chill` | 全部实际 fresh_chill 交换作用，按身份/状态拆分 | 节点特定配对测量、事件及供应者记录 |航次/投放/批次/转移/事件编号；节点与期间；物种/材料/物质/状态；pre_sort/post_sort 阶段及实际事件顺序；质量及单位；期初/期末库存；燃料/电/水/气/资产/渔具事件；接收者/介质；所有权/分配份额；验收最终净千克；独立参考调查及 U_row 证据; pre_sort/post_sort 阶段；实际前后生命-温度状态；干预及发运时间；转换/死亡及食品接收；外供或自制冰；实际冰消耗/库存变化；自制冰水/电/燃料及直接排放；融水去向 | 采用校准湿/净称重，分离外部水并扣除容器皮重；计量公用工程、核对库存与实际物种/状态转移；采样浓度/材料组成或保留兼容供应者/系数证据。记录本节点特定的渔具/暂养/处理条件及损失去向。 | 按身份计 kg；能量 MJ；保留原始数量/时长/温度/体积及换算 | 每一实际批次、投放、发运或材料事件；按运行区间匹配计量 | 完整声明航次/批次及报告期，含失败航次、期末库存及带日期更换 | 一个声明生产者/操作单元及本节点，不混合无关船队/站点 | 每 1 kg 参考流 | 秤/计量校准、原始日志及时间、食品/状态接收、可追溯供应者/组成/系数记录、库存/转移核对、独立 U_row 证据及覆盖缺口 |
| `cp_presentation` | `presentation` | 全部实际 presentation 交换作用，按身份/状态拆分 | 节点特定配对测量、事件及供应者记录 |航次/投放/批次/转移/事件编号；节点与期间；物种/材料/物质/状态；pre_sort/post_sort 阶段及实际事件顺序；质量及单位；期初/期末库存；燃料/电/水/气/资产/渔具事件；接收者/介质；所有权/分配份额；验收最终净千克；独立参考调查及 U_row 证据; 已完成分级及实际最终前身；物种/整躯体/附肢与食品接收；首买方、所有权/地点/时间；实际生命-温度状态；蟹毛/净质量；实测皮重/外部水/冰；容器更换/使用循环/返还及清洗事件 | 采用校准湿/净称重，分离外部水并扣除容器皮重；计量公用工程、核对库存与实际物种/状态转移；采样浓度/材料组成或保留兼容供应者/系数证据。记录本节点特定的渔具/暂养/处理条件及损失去向。 | 按身份计 kg；能量 MJ；保留原始数量/时长/温度/体积及换算 | 每一实际批次、投放、发运或材料事件；按运行区间匹配计量 | 完整声明航次/批次及报告期，含失败航次、期末库存及带日期更换 | 一个声明生产者/操作单元及本节点，不混合无关船队/站点 | 每 1 kg 参考流 | 秤/计量校准、原始日志及时间、食品/状态接收、可追溯供应者/组成/系数记录、库存/转移核对、独立 U_row 证据及覆盖缺口 |

对所有非最终行采用 lot_attribution：原始采集值与分配/归一化后的计算交换分开保存。化石 CO2 采用实际燃料组成及独立排放方法，或实测排放记录，再按归属/最终质量归一化；方法参数须有相容组成/氧化/测量依据。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_attribution` | 所有清单行 | 明确保留两种标注视图。先对完整声明群体、航次或运行核对未作共产品分配的实际接收、转移、产品、损失及存量；内部转移按相同状态与单位配对并保留实测质量。以有证据的服务份额，将共享资源或服务事件一次归属实际使用节点及期间，不用共产品份额缩小产品、生物量、水或废物分区。将此物理清单除以相匹配且为正的最终验收净千克。再根据第 7 节共产品规则，仅分配一次并另行生成标注的单输出 LCA 负荷或清单投影，同时保留未分配清单及分配矩阵。不得用已分配交换检验未分配物理闭合、在下游再次乘输出份额，或把内部数量设为最终 1 kg。 | 节点协议；分配台账；验收最终净质量；库存历史 | 每 1 kg 参考流归属交换 | `wild-crab-foreground-method` |
| `reference_envelope` | 所有非最终行范围 | 对每个实际实例化身份、状态、节点及 pre_sort/post_sort 作业段分别建立 U_row。采用独立代表性参考批次归一化量的最大值乘预先声明且不小于 1 的不确定性裕度，或具有同单位和基准的供应商设计包络乘该裕度；保留原始量、参考净千克、样本量、适用范围及裕度依据。目标批次不得参与建立其自身上界，多物质集合卡不能共用池化上界。缺少独立证据则该实例范围未实例化，不能声称数值 QA 通过或完成定量数据包。 | 独立调查记录；范围；不确定度裕量 | U_row | `wild-crab-foreground-method` |
| `conditional_interface_envelopes` | capture_internal_water_ice_transfer; grading_internal_water_ice_receipt; grading_internal_water_ice_transfer; live_hold_internal_water_ice_receipt; live_hold_internal_water_ice_transfer; fresh_chill_internal_water_ice_receipt; fresh_chill_internal_water_ice_transfer; presentation_internal_water_ice_receipt; presentation_actual_source_water; presentation_internal_water_ice_transfer; presentation_water_ice_handover; presentation_packaging_handover | 对每张明确列出的条件接口卡，在实际身份、状态、节点、作业段及单位实例化后，以独立代表性参考运行的同视图归一化最大值乘预先声明且不小于 1 的裕度，或同单位与基准供应设计包络建立 U_row。保留样本、来源、基准及不确定性；不得用目标批次建立自身上界。服务单位及支持未核实或独立包络缺失均是未解决实例，不能声称数值 QA 通过，不填零。水冰与包装的实物流转和服务折算量分别闭合。 | 独立参考记录；实际单位与基准 | U_row | `wild-crab-foreground-method` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_scope` | 参考批次 | 追溯野生来源、物种/渔具/栖境、实际食品/躯体/生命状态及首次交接点；不平均不兼容状态，不推断未知活力。 | 捕捞、分级、状态接收及发运记录 |
| `quality_amounts` | 全部实际交换 | 采用代表性时间覆盖，含失败强度、计量不确定度及供应范围；身份/数量/范围证据缺失归为缺口，不填零。 | 校准、供应者/详细记录及独立参考调查日志 |
| `quality_impact` | 捕捞及放流 | 即使表征未覆盖，仍保留兼捕、损伤、延迟归趋不确定性、丢失渔具、幽灵捕捞及栖境接触观察；未评价影响不报告成无影响。 | 观察员/操作者记录及明确评价局限 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_capture_fuel` | `capture`; 输入; 产品流 | 必须辨认并分别采集“自有 capture 作业实际供应燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按牌号、供应者及储罐平衡采集燃料，包括实际船舶、发电机或移动设备使用；排除已包含在采购带操作服务中的燃料。不把淡水船柴油身份用于海洋路线。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_materials_assets` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际作业材料及归属的资产更换”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按身份及实际投入质量拆分润滑剂、清洗/消毒材料、维修件和可复用资产材料。此卡仅计实测材料质量及归属更换量，不把小时、航次或带操作服务折算成虚构千克；实际资产/服务活动以原单位保存在辅助台账中，服务数据集按该实际单位另行实例化。捕捞渔具仅在 capture_gear 记录一次，不在 capture_materials_assets 重复。资产事件附使用寿命、使用记录及残值去向；不得重复计入已包含在带操作服务中的材料或燃料。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_bait` | `capture`; 输入; 产品流 | 必须辨认并分别采集“投放时的实际饵料，明确物种与保存状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅用于实际使用饵料的笼壶、绳线或其他渔具。采购整饵鱼、渔业联产品或配制饵分别作为供应投入，含上游生产/回收及保存负荷。鲜、冻和配制饵不是可互换身份。自捕饵为单独核算的捕捞产出/投入转移，含作业强度，不是无负荷提取或二次采购。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_gear` | `capture`; 输入; 产品流 | 必须辨认并分别采集“记录服务期间更换或分摊的渔具材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料、构型、所有权及实际服务使用记录笼壶、网片或框架、底绳/垂直绳、浮标、配重和释放装置；非笼壶路线记录自身不同渔具。不把每次投放当作整套新渔具采购。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_wild_biomass` | `capture`; 输入; 基本流 | 必须辨认并分别采集“按分类单元从声明栖境捕获的野生水生生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按分类单元和实际湿质量基准记录目标及兼捕生物量，包含观察到的放流/弃置去向。不漏掉兼捕生物量，不在缺少代表性个体实测质量时从数量虚构质量。野生资源提取不是采购饲料或负向信用。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_water_abstracted` | `capture`; 输入; 基本流 | 必须辨认并分别采集“实际直接提取的 capture 设备清洁水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在实际直接取水时激活，按真实淡水/海洋水源记录实测取水及处理；采购水与内部循环不得再次计作直接取水。归属本节点独立协议，分别核对回流、收集废水、蒸发及库存。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_internal_water_ice_transfer` | `capture`; 输出; 产品流 | 必须辨认并分别采集“实际转至其他声明节点的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际有计量的条件水冰转移，保留接收节点卡及相同来源、状态、组成、事件/作业段编号、量与单位；核对期初期末存量及融化蒸发去向。不是环境排放或独立销售共产品，不重复资源提取或供应负荷。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_operating_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“按实际去向分类收集的作业维护废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别记录废润滑剂、废清洗液、损坏零件与污染材料，附实际废物类别、组成和接收者。同一质量不得同时作为收集废物和直接环境排放。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_retrieved_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“交废物接收者的回收饵料残留与非食品渔获”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅指从环境中实际回收并送交处理的材料；饵料残留与蟹死亡物分开，保留废物去向及所有权。后续废物处理负荷遵从声明边界；不自动给予避免产品信用。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_other_air_emissions` | `capture`; 输出; 基本流 | 必须辨认并分别采集“按物质与介质拆分的其他实际直接空气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按明确物质、相关时的粒径及空气介质拆分燃料污染物、制冷剂泄漏或其他实际直接排放；不可把 NOx/VOC/PM 集合项强配到虚构单一物种。保留系数或分析证据，核对充注/回收库存。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_live_release` | `capture`; 输出; 基本流 | 必须辨认并分别采集“按分类单元记录放回原水生栖境的活体”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际放流分类单元、湿质量或可追溯换算数量、活力、地点/时间与捕获转移。不得假定放流后必然存活；观察到的损伤/未知结局须另行披露，不作为负向捕捞影响。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_dead_discard` | `capture`; 输出; 基本流 | 必须辨认并分别采集“返回声明水体的死亡弃置生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：区分死亡渔获与活体放流，并区分回收废物与直接排水材料。记录分类单元、去向和时间；本 PCR 不提供环境归趋或降解系数。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_bait_release` | `capture`; 输出; 基本流 | 必须辨认并分别采集“未回收而释放至水生环境的饵料材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：依据实际抽样或有记录的损失评估核对投饵、回收、库存与被食/未回收部分；未知摄食/损失不等于零。此物理生物量台账不能在缺乏组成/归趋证据时替代溶解营养物排放。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_lost_gear` | `capture`; 输出; 基本流 | 必须辨认并分别采集“留在环境中的丢失渔具材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料与实际接收环境拆分丢失绳网、塑料浮标、金属及其他部件；后续回收作为有日期、唯一责任归属的独立事件记录。另保留非质量的缠绕、幽灵捕捞和底接触观察，质量本身不能量化这些影响。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_dissolved_cleaning_releases` | `capture`; 输出; 基本流 | 必须辨认并分别采集“直接排放的 capture 清洁物质，按化学基准与接收介质拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：每项重要清洁化学物、润滑物或其他直接水排物须独立实际物质/质量基准及接收水体，采用实测浓度/流量或有记录排放评估，扣除重复入口已有负荷。此为污染物质量，不是载体水质量；排除已收集送处理废物。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_capture` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_fuel` | `grading`; 输入; 产品流 | 必须辨认并分别采集“自有 grading 作业实际供应燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按牌号、供应者及储罐平衡采集燃料，包括实际船舶、发电机或移动设备使用；排除已包含在采购带操作服务中的燃料。不把淡水船柴油身份用于海洋路线。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_materials_assets` | `grading`; 输入; 产品流 | 必须辨认并分别采集“实际作业材料及归属的资产更换”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按身份及实际投入质量拆分润滑剂、清洗/消毒材料、维修件和可复用资产材料。资产事件附使用寿命、使用记录及残值去向；不得重复计入已包含在带操作服务中的材料或燃料。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_internal_water_ice_receipt` | `grading`; 输入; 产品流 | 必须辨认并分别采集“实际内部接收的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际从其他声明节点转入时启用。按实际水冰状态、来源所有者及转移/事件/作业段编号拆分，配对发送端实测量与组成，不新增取水、购买或生产负荷。同节点循环仅属辅助存量账，不形成新转移；排除其他材料卡已含的载体。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_water_abstracted` | `grading`; 输入; 基本流 | 必须辨认并分别采集“实际直接提取的 grading 设备清洁水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在实际直接取水时激活，按真实淡水/海洋水源记录实测取水及处理；采购水与内部循环不得再次计作直接取水。归属本节点独立协议，分别核对回流、收集废水、蒸发及库存。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_other_landings` | `grading`; 输出; 产品流 | 必须辨认并分别采集“独立交接的其他预期留置产品或非参考等级”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：列明分类单元、实际食品或非食品作用、若有分离部件、质量、接收者及首次交接点。食品用途合格蟹尺寸等级仅在状态、交接点与产品限定真实匹配时可并入参考批次，且不可同时计入其他上岸产品。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_internal_water_ice_transfer` | `grading`; 输出; 产品流 | 必须辨认并分别采集“实际转至其他声明节点的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际有计量的条件水冰转移，保留接收节点卡及相同来源、状态、组成、事件/作业段编号、量与单位；核对期初期末存量及融化蒸发去向。不是环境排放或独立销售共产品，不重复资源提取或供应负荷。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_operating_waste` | `grading`; 输出; 废物流 | 必须辨认并分别采集“按实际去向分类收集的作业维护废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别记录废润滑剂、废清洗液、损坏零件与污染材料，附实际废物类别、组成和接收者。同一质量不得同时作为收集废物和直接环境排放。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_rejects` | `grading`; 输出; 废物流 | 必须辨认并分别采集“送废物管理的留置分级剔除物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际接收者记录死亡/非食品蟹、未售分离材料及其他留置剔除物。作为废物处置的活体不自动等于合法放流，保留实际去向。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_other_air_emissions` | `grading`; 输出; 基本流 | 必须辨认并分别采集“按物质与介质拆分的其他实际直接空气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按明确物质、相关时的粒径及空气介质拆分燃料污染物、制冷剂泄漏或其他实际直接排放；不可把 NOx/VOC/PM 集合项强配到虚构单一物种。保留系数或分析证据，核对充注/回收库存。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_live_release` | `grading`; 输出; 基本流 | 必须辨认并分别采集“放回声明水生栖境的分级活体”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录在本节点实施的放流，对应分级输入并排除 capture_live_release。保留物种、活力、地点/时间、适用去向规定，并单列未知延迟死亡。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_direct_discard` | `grading`; 输出; 基本流 | 必须辨认并分别采集“直接释放至声明环境的分级死亡弃置物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅用于已识别材料/介质的实际直接环境排放，不得与 grading_rejects 的送交材料重复；禁止的处置作为不符合项，不通过归一化掩盖。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_dissolved_cleaning_releases` | `grading`; 输出; 基本流 | 必须辨认并分别采集“直接排放的 grading 清洁物质，按化学基准与接收介质拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：每项重要清洁化学物、润滑物或其他直接水排物须独立实际物质/质量基准及接收水体，采用实测浓度/流量或有记录排放评估，扣除重复入口已有负荷。此为污染物质量，不是载体水质量；排除已收集送处理废物。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_grading` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_hold_fuel` | `live_hold`; 输入; 产品流 | 必须辨认并分别采集“自有 live_hold 作业实际供应燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按牌号、供应者及储罐平衡采集燃料，包括实际船舶、发电机或移动设备使用；排除已包含在采购带操作服务中的燃料。不把淡水船柴油身份用于海洋路线。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_hold_materials_assets` | `live_hold`; 输入; 产品流 | 必须辨认并分别采集“实际作业材料及归属的资产更换”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按身份及实际投入质量拆分润滑剂、清洗/消毒材料、维修件和可复用资产材料。资产事件附使用寿命、使用记录及残值去向；不得重复计入已包含在带操作服务中的材料或燃料。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hold_gas` | `live_hold`; 输入; 产品流 | 必须辨认并分别采集“按物质、纯度与交付状态拆分的实际暂养供气”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在实际交付氧气或其他气体时计入，须实测质量或经验证的状态特定换算。气泵吹入空气不等于采购氧气。不得把工厂体积氧身份重标为交付压缩气体千克身份。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hold_feed` | `live_hold`; 输入; 产品流 | 必须辨认并分别采集“投喂时的实际有界维持饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际组成、供应者、干湿状态与上游负荷；仅有无投喂操作证据时可为零。纳入残饵与排泄去向。刻意生长/育肥或诱导蜕壳意味着此批次不属于仅捕捞参考范围。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_hold_internal_water_ice_receipt` | `live_hold`; 输入; 产品流 | 必须辨认并分别采集“实际内部接收的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际从其他声明节点转入时启用。按实际水冰状态、来源所有者及转移/事件/作业段编号拆分，配对发送端实测量与组成，不新增取水、购买或生产负荷。同节点循环仅属辅助存量账，不形成新转移；排除其他材料卡已含的载体。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hold_water_abstracted` | `live_hold`; 输入; 基本流 | 必须辨认并分别采集“从实际淡水或海洋水源直接提取的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：在物理取水口只记录一次取水，含补水与损失；内部循环另设计量/日志，不重复记资源提取。淡水与海水作为不同具体交换。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_hold_internal_water_ice_transfer` | `live_hold`; 输出; 产品流 | 必须辨认并分别采集“实际转至其他声明节点的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际有计量的条件水冰转移，保留接收节点卡及相同来源、状态、组成、事件/作业段编号、量与单位；核对期初期末存量及融化蒸发去向。不是环境排放或独立销售共产品，不重复资源提取或供应负荷。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_hold_operating_waste` | `live_hold`; 输出; 废物流 | 必须辨认并分别采集“按实际去向分类收集的作业维护废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别记录废润滑剂、废清洗液、损坏零件与污染材料，附实际废物类别、组成和接收者。同一质量不得同时作为收集废物和直接环境排放。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hold_mortality` | `live_hold`; 输出; 废物流 | 必须辨认并分别采集“不合格死亡物、残饵及收集暂养固体”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按组成与接收者拆分蟹体、残饵和污泥。死亡存量不得保留在活体期末库存或参考产出中。收集的污泥/水混合物不同时计为直接排放。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_hold_other_air_emissions` | `live_hold`; 输出; 基本流 | 必须辨认并分别采集“按物质与介质拆分的其他实际直接空气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按明确物质、相关时的粒径及空气介质拆分燃料污染物、制冷剂泄漏或其他实际直接排放；不可把 NOx/VOC/PM 集合项强配到虚构单一物种。保留系数或分析证据，核对充注/回收库存。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hold_dissolved_releases` | `live_hold`; 输出; 基本流 | 必须辨认并分别采集“直接释放至接收水的实际溶解物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按化学基准及接收水拆分实测营养物、盐、清洗剂及其他物质；采用配对进出水浓度与水量，不重复计入入口已有物质或把水质量当污染物。不通用地把氮换成氨。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_hold 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_live_hold` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fresh_chill_fuel` | `fresh_chill`; 输入; 产品流 | 必须辨认并分别采集“自有 fresh_chill 作业实际供应燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按牌号、供应者及储罐平衡采集燃料，包括实际船舶、发电机或移动设备使用；排除已包含在采购带操作服务中的燃料。不把淡水船柴油身份用于海洋路线。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_fresh_chill` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fresh_chill_materials_assets` | `fresh_chill`; 输入; 产品流 | 必须辨认并分别采集“实际作业材料及归属的资产更换”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按身份及实际投入质量拆分润滑剂、清洗/消毒材料、维修件和可复用资产材料。资产事件附使用寿命、使用记录及残值去向；不得重复计入已包含在带操作服务中的材料或燃料。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_fresh_chill` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fresh_chill_internal_water_ice_receipt` | `fresh_chill`; 输入; 产品流 | 必须辨认并分别采集“实际内部接收的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际从其他声明节点转入时启用。按实际水冰状态、来源所有者及转移/事件/作业段编号拆分，配对发送端实测量与组成，不新增取水、购买或生产负荷。同节点循环仅属辅助存量账，不形成新转移；排除其他材料卡已含的载体。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_fresh_chill` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_water_abstracted` | `fresh_chill`; 输入; 基本流 | 必须辨认并分别采集“自有鲜品处理的实际直接取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅限实际直接水源提取，区分淡水/海洋水源及处理投入；排除已采购水与内部循环。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_fresh_chill` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fresh_chill_internal_water_ice_transfer` | `fresh_chill`; 输出; 产品流 | 必须辨认并分别采集“实际转至其他声明节点的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际有计量的条件水冰转移，保留接收节点卡及相同来源、状态、组成、事件/作业段编号、量与单位；核对期初期末存量及融化蒸发去向。不是环境排放或独立销售共产品，不重复资源提取或供应负荷。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_fresh_chill` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fresh_chill_operating_waste` | `fresh_chill`; 输出; 废物流 | 必须辨认并分别采集“按实际去向分类收集的作业维护废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别记录废润滑剂、废清洗液、损坏零件与污染材料，附实际废物类别、组成和接收者。同一质量不得同时作为收集废物和直接环境排放。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_fresh_chill` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_rejects` | `fresh_chill`; 输出; 废物流 | 必须辨认并分别采集“不合格食品剔除物、收集残留与废冷却介质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际组成/接收者分开未接收死亡、损伤整躯体及收集融冰/水。不把所有死亡称为鲜食品，不把收集介质同时计为直接回流水。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_fresh_chill` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_fresh_chill_other_air_emissions` | `fresh_chill`; 输出; 基本流 | 必须辨认并分别采集“按物质与介质拆分的其他实际直接空气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按明确物质、相关时的粒径及空气介质拆分燃料污染物、制冷剂泄漏或其他实际直接排放；不可把 NOx/VOC/PM 集合项强配到虚构单一物种。保留系数或分析证据，核对充注/回收库存。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_fresh_chill` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_chill_dissolved_releases` | `fresh_chill`; 输出; 基本流 | 必须辨认并分别采集“鲜品处理直接排水中的实际溶解物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按组成、质量基准及接收水拆分每一实际化学/生物源物质。负荷来自实测流量/浓度及入口背景，不从蟹损失或载体水质量假定换算。排除交处理的废物。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_fresh_chill 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_fresh_chill` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_fuel` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“自有 presentation 作业实际供应燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按牌号、供应者及储罐平衡采集燃料，包括实际船舶、发电机或移动设备使用；排除已包含在采购带操作服务中的燃料。不把淡水船柴油身份用于海洋路线。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_materials_assets` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际作业材料及归属的资产更换”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按身份及实际投入质量拆分润滑剂、清洗/消毒材料、维修件和可复用资产材料。资产事件附使用寿命、使用记录及残值去向；不得重复计入已包含在带操作服务中的材料或燃料。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_packaging` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“生产者交接点实际初级包装与呈现材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料及实际新用/周转状态拆分容器、捆扎、衬垫和标签。周转箱计归属更换或有证据的服务份额，不在每航次计全质量；保留返还库存、损坏和清洗责任。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_internal_water_ice_receipt` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际内部接收的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际从其他声明节点转入时启用。按实际水冰状态、来源所有者及转移/事件/作业段编号拆分，配对发送端实测量与组成，不新增取水、购买或生产负荷。同节点循环仅属辅助存量账，不形成新转移；排除其他材料卡已含的载体。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_actual_source_water` | `presentation`; 输入; 基本流 | 必须辨认并分别采集“从已识别自然水源实际提取的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际由包装交接节点直接取水时启用，按淡水海水来源与地点拆分，保留质量或实际状态密度换算、取水责任及实际返还蒸发存量；不得借用工业处理水 UUID 或重复外购、内部水。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_internal_water_ice_transfer` | `presentation`; 输出; 产品流 | 必须辨认并分别采集“实际转至其他声明节点的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际有计量的条件水冰转移，保留接收节点卡及相同来源、状态、组成、事件/作业段编号、量与单位；核对期初期末存量及融化蒸发去向。不是环境排放或独立销售共产品，不重复资源提取或供应负荷。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_water_ice_handover` | `presentation`; 输出; 产品流 | 必须辨认并分别采集“随验收批次交接的实际保护水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际状态、来源与实测质量记录随批次跨首次交接边界的剩余保护水冰，与动物净质量及包装完全分开，核对融化水、存量、返还及一次供应或自产负荷；附带材料不自动成为废物或独立分配共产品。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_operating_waste` | `presentation`; 输出; 废物流 | 必须辨认并分别采集“按实际去向分类收集的作业维护废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别记录废润滑剂、废清洗液、损坏零件与污染材料，附实际废物类别、组成和接收者。同一质量不得同时作为收集废物和直接环境排放。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_rejects` | `presentation`; 输出; 废物流 | 必须辨认并分别采集“首次交接剔除整蟹及包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别称量剔除蟹与包装，记录活力、食品/非食品状态、接收者及原因。剔除物不得增加合格参考净质量，返还周转箱属于资产库存而非自动废物。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_other_air_emissions` | `presentation`; 输出; 基本流 | 必须辨认并分别采集“按物质与介质拆分的其他实际直接空气排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按明确物质、相关时的粒径及空气介质拆分燃料污染物、制冷剂泄漏或其他实际直接排放；不可把 NOx/VOC/PM 集合项强配到虚构单一物种。保留系数或分析证据，核对充注/回收库存。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_dissolved_releases` | `presentation`; 输出; 基本流 | 必须辨认并分别采集“交接清洁直接排水中的实际物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：每项重要清洁化学物或溶解物须实际身份、浓度/流量基准及接收介质，与载体水及收集处理废物分开。不暗示卫生或通用毒性结果。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 (`calculated_value`) 适用范围：场址特定 (`site_specific`) 归一化基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：由采集记录计算 (`calculated_from_collection`) 采集协议：`cp_presentation` 来源：`wild-crab-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference lot | 核实野生来源、实际物种/栖境、整躯体/原生壳及附肢状态、壳/蜕壳与食品等级、实际活/鲜/冷却状态及首次交接点。拒绝分离部件、熟/冻肉及受控生长/蜕壳批次。实际状态/交接点或食品接收缺失将阻断最终参考，不假定活体/默认路线。 | `wild-crab-foreground-method` |
| `validate_balance` | all nodes | 按物种/状态检查期初库存 + 收货 = 合格转移 + 其他预期产出 + 实际损失/放流 + 期末库存，仅按独立测得水或材料变化调整。内部转移配对一次并要求交换非负。最终 1 kg 分母不把上游渔获或活体输入固定为 1 kg。 | `wild-crab-foreground-method` |
| `validate_technology` | capture | 按投放核对渔具投放/回收/丢失/再回收及饵料投放/回收/消耗/剩余。观察到的幽灵捕捞、缠绕、底接触和未知归趋须在质量合计外保留。每项非笼壶差异须实际方法特定的强度、渔获和影响记录证实，不借用种群状态、可持续渔业或通用无栖境影响声明。 | `wild-crab-foreground-method` |
| `validate_hold_state` | live_hold; fresh_chill; presentation | 活体存活、合格鲜品转流和不合格死亡互斥。鲜品转流须独立记录实际死亡/处理历史及适用接收证据；不明死亡仍为缺口或剔除。检查节点激活、前后状态、批次时间及旁路转移等价性。不从日志缺失推断零时长暂养或不存在饲料/供气/废水。 | `wild-crab-foreground-method` |
| `validate_ranges` | all cards | 对已提供非最终范围，核对其每 1 kg 参考流的相同分子单位及 reference_envelope 下独立 U_row 证据。无范围的卡记录尚未解决的独立范围证据需求，不声称已有协议推导区间。数值 QA 前须从独立代表性调查期或供应方证据建立各实例包络，保留适用范围、样本量及不确定度；缺证据即为缺口，不得称 QA 通过或填默认量、零。真实越界值保留并调查，不截断。最终 1..1 kg 仅为参考归一化。 | `wild-crab-foreground-method` |
| `validate_ownership` | all nodes | 检查全部预期产出/交接、失败航次负荷、库存结转、共享节点/期间份额及包装返还。每个物理燃料、水、带操作服务或资产事件只有唯一负荷归属；不得漏记或重复供应者上游负荷及实际直接排放。材料与水台账分别于污染物/物种台账检查。 | `wild-crab-foreground-method` |
| `validate_binding` | all exchanges | 下游过程发布前，每项实际交换须分别确认具体身份、属性、单位及相关地域/状态/介质。有条件集合卡可实例化多个实际物质/材料，绝不固定为通用 UUID。固定电/冰/CO2 卡仅适用其声明条件，数量系数须独立证据。身份与计量校验不认证食品安全或渔业可持续性。 | `wild-crab-foreground-method` |
| `validate_secondary_bait` | capture_bait | 核对原系统、回收/供应交接、实际配方/状态、继承或截断决定及重复负荷；没有供应证据时保留缺口，不采用实验捕获效率、可持续性断言或负碳信用。 | `cerbule-secondary-bait-2023`; `wild-crab-foreground-method` |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明首次交接点的野生捕捞食用整蟹前景生产包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明的实际匹配野生物种/栖境/渔具及整蟹食品状态/交接点，且下游具体交换已验证、数量完整 |
| excluded_use | 肉/部件、水产养殖/诱导蜕壳/生长、冻/熟品、零售交接点、可食份换算、可持续或食品安全认证 |
| required_metadata | 全部参考限定；操作单元；实际节点激活；转移/状态/所有权台账；报告/库存/资产期间；预期产出及分配 |
| required_quality_disclosure | 身份及范围缺口、定性来源局限、计量/抽样不确定性、实际上游覆盖、未表征生态影响及替代分配敏感性 |
| update_trigger | 物种/渔具/躯体状态/交接点、暂养/冷却路线、辖区接收条件、供应者/能源组合、死亡/兼捕模式、资产服务期间变化，或新增数量/身份依据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 04311 野生蟹较广产品范围，不作路线或数量配方 |
| noaa-traps-pots | official_guidance | https://www.fisheries.noaa.gov/national/bycatch/fishing-gear-traps-and-pots | 笼壶饵料、绳/浮标、投放与相互作用的定性问题；不提供通用比率或风险降低数量 |
| noaa-blue-crab-commercial | official_guidance | https://www.fisheries.noaa.gov/species/blue-crab/commercial | 美国蓝蟹备选捕捞渔具及壳/蜕壳与可食份区分的示例；不提供通用物种生物学、法规或质量系数 |
| wild-crab-foreground-method | method_factor | 本 PCR 第 4–9 节声明前景方法：校准湿净称量；实际转移/库存及归属台账；独立参考包络筛查 | 自包含采集、归一化、参考定义及有条件范围方法，不是已发表经验数据集或虚构数值来源 |
| cerbule-secondary-bait-2023 | literature | Cerbule K, Grimsmo L, Herrmann B, Grimaldo E. Heliyon 9(3), e13820 (2023). https://doi.org/10.1016/j.heliyon.2023.e13820 | 雪蟹笼壶渔业加工副产品饵的实际实验路线；仅支持来源/回收边界问题，不提供当前批次配方、用量、捕获效率或生命周期信用。 |
