---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-mushrooms
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 野生食用蘑菇

## 1. 范围与适用性

本 PCR 涵盖从无管护自然来源采集、由声明采集者或初级生产者发运的一个已取得合格身份的实际物种鲜或冷藏食用蘑菇子实体批次。野生来源由来源和采集记录确立，不凭物种、森林地址或商品名称推断。无管护采集不同于管理增产或有意生产 [unsd-wild-mushrooms]。排除松露、培育蘑菇、基质/菌种/接种操作及为提高蘑菇产量实施的生境干预。本 PCR 不指导辨菇食用，也不认证食品安全；身份未确认或未取得合格身份的菌类不得声明为食用参考产品。

仅在声明发运前实际执行时，纳入简单清理、修剪、分级、实际鲜品保鲜储存及生产者包装。排除干燥、脱水、冷冻、烹制、盐渍、罐藏、化学保藏等加工产品，以及下游分销、零售、消费者储存和使用。鲜/干贸易状态和野生采集/培育来源相互不同 [fao-fungi-use]。不规定通用采集产率、冷链配方或鲜干比。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.wild-edible-mushrooms |
| classification_refs | cpc:3.0:03232；拟议 narrower 鲜/冷藏初级范围 |
| covered_products | 实际已取得合格身份的无管护采集鲜/冷藏食用蘑菇子实体，排除松露 |
| excluded_products | 培育或有意管护生产的蘑菇；松露；基质或菌种；干燥/冷冻/加工产品；身份未确认或未合格菌类 |
| representative_product | 声明生产者发运点的一个实际合格物种/等级已采鲜蘑菇批次 |
| production_route | 无管护采集及实际转运；条件初级清理/修剪/分级；条件鲜品保鲜；最终验收及实际包装 |
| market_state | 鲜/冷藏子实体净批次，声明实际等级、水分、操作状态及交接门 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明采集者或初级生产者发运点的一个实际鲜/冷藏野生食用蘑菇批次 |
| How much | 1 kg 验收子实体产品交付时实际状态净质量，排除包装及另行剔除的土杂/修剪物 |
| How well | 实际物种及有记录的食用合格身份、野生来源、等级、修剪/异物及水分基准 |
| How long or cycle | 实际采集行程/季节、操作批次、门前储存区间及发运时间；说明周转资产分配期间 |
| reference_flow_link | `wild_mushroom_dispatch` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 声明采集者或初级生产者发运点的鲜或冷藏野生食用蘑菇 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 实际物种及食用合格身份记录；无管护野生来源/场址；采集行程及季节；鲜/冷藏状态；成熟度/等级；土杂及修剪边界；水分基准；温度/时间记录；实际发运门；净质量与包装排除 |

所有限定项必须存在于前景数据包。参考描述一个实际已合格批次，不表示不同物种可以互换，也不表示无组成证据的商品混合平均。

## 4. 计量与单位规则

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用校准秤测量验收交付时实际状态净质量；排除包装及另行剔除材料。仅所连接的最终验收输出为 1 kg。 |
| `fresh_mass_bridge` | 蘑菇及残留质量行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按匹配批次/时间边界计量输入鲜批次、附带土壤、修剪物、添加/留存水、库存变化及输出；水分变化不支持通用干物质或鲜干因子。 |
| `energy_basis` | 能源汇总卡 | 能源 | MJ | 保留记录燃料质量/体积及电量 kWh；仅用有记录且匹配的低位热值/密度或精确 3.6 MJ 每 kWh 换算。记录实际燃料及换算证据；MJ 卡不包含服务小时。 |
| `service_basis` | 服务汇总卡 | 服务时长 | h | 用实际计量服务/资产小时及有记录的使用者份额；不虚构付款、步行、距离或劳动向能源的换算。 |
| `water_basis` | 用水输入及废水 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用实测质量或实际兼容体积密度证据；同一数量的外供产品水与直接取水互斥。区分液体排水、蒸发、留存水及溶解物。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 自有采集责任的实际无管护来源，或在实际接入节点的已核实上游已采野生鲜品；不虚构培育阶段 |
| starting_condition_role | 有记录的采集/来源责任，或上游已采产品交接 |
| product_classification_scope | 仅鲜/冷藏初级无管护蘑菇批次；CPC 03232 narrower 部分覆盖，不证明全叶类均为鲜态 |
| recursive_input_rule | 已采同类输入按实测状态及匹配上游负担计入一次；不得重加同一自然移除或采集 |
| upstream_dataset_requirement | 可追溯野生来源、批次/状态/交接门、合格身份及兼容上游方法；缺失前驱负担披露为缺口，不假定为零 |
| disclosure | 来源场址、实际负责节点、采集及储存期间、接入和发运门、包装/复用边界、弃物去向及排除项 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `wild_origin` | 来源与参考 | 要求证明无管护采集的记录；培育或有意增产路线在范围外。生境关联不证明野生来源。 | `unsd-wild-mushrooms` |
| `actual_route` | 所有节点 | 从记录选择实际采集、初级处理和鲜品保鲜责任；绕过未执行节点，将最后实际上游状态连接最终验收，每份材料和负担仅分配一次。 | `fao-fungi-collection` |
| `source_removal` | 采集 | 采集同时负责资源移除及收获：来源接口、移除鲜子实体及实测下游采集状态。不另建第二移除节点或虚构管护生产。另行记录附带矿物及现场保留残留。 | `fao-fungi-collection` |
| `producer_gate` | 交接 | 结束于实际采集者/初级生产者发运门。包含实际门前展示包装；排除下游分销及制造。原料/鲜态与保藏/干态不假定等同。 | `fao-fungi-use` |
| `state_destinations` | 初级处理及保鲜 | 区分预期选定等级、其他合格产品、不合格/复检批次、修剪物、废水及腐败物。每个材料出口有实际状态及去向；未知不合格去向不得计作验收产品。 | |
| `shared_period_sites` | 所有节点 | 列明来源场址、行程、操作批次和储存期间，以及共享资产使用者和服务边界。清洁换批、替换、维修及寿终一次记录于正确批次/期间；披露实际通行影响，不从采集时长虚构生境面积占用。 | |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `collection` | 无管护采集与资源移除 | conditional | 实际采集责任位于声明系统内，未由上游已采产品负责 | 前景收集 | 实测已采鲜批次、来源/移除台账及实际行程 |
| `conditioning` | 初级处理与分级 | conditional | 发运前实际执行清理/修剪/分级 | 前景初级整理 | 实测鲜品输入及全部验收等级/弃物交接 |
| `preservation` | 门前鲜品保鲜与储存 | conditional | 发运前实际执行鲜/冷藏保鲜或储存 | 有界保鲜 | 实测可用鲜品输入/输出及实际时间/温度 |
| `handover` | 最终验收包装与生产者交接 | required | 每个验收最终批次 | 前景验收与展示包装 | 1 kg 净验收参考输出 |

行程及操作/储存批次采用批次索引。实际移动由负责节点或有记录的供应商负责，不虚构过程。所有实测中间原料可不同于最终质量。条件汇总卡仅展开为实际零个/一个/多个已识别交换，各自具有属性/单位/UUID 证据；不强加未使用投入。
### 过程：无管护采集与资源移除 (`collection`)

#### 输入

##### 产品流

###### 采集燃料与电力（`collection_energy`）

对本节点负责的设备或实际到达行程所用外购燃料、电力设置条件汇总卡。步行和劳动不意味着燃料或代谢交换。包含全部投入的运输服务不得与其中燃料重复计入。

- 选定流：采集燃料与电力
- 流属性/单位：能源 / MJ
- 数量规则：按 cp_collection 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 采集耗材（`collection_materials`）

按材料及使用份额记录实际消耗工具和携行容器替换，不设通用设备配方。下述按服务核算的可重复使用资产不再包含在本消耗数量中。

- 选定流：采集耗材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_collection 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 共享采集资产与到达服务（`collection_services`）

按可归属资产或服务小时计量的条件汇总卡，记录实际服务名称、使用行程、期间及全体使用者分母。付款或许可费用本身不是物理服务数量；包含全部投入的供应商服务保留其实际清单边界。

- 选定流：共享采集资产与到达服务
- 流属性/单位：服务时长 / h
- 数量规则：按 cp_collection 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

不规定跨界流；记录实际未发生角色。

##### 基本流

###### 从自然来源移除的无管护野生蘑菇子实体（`wild_resource`）

移除台账仅记录从声明的无管护生境实际采集的鲜子实体，不包含土壤、枯落物、宿主树生物量或菌类基质。自然资源移除与上游已采集产品输入不得重复代表同一数量。

- 选定流：从自然来源移除的无管护野生蘑菇子实体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_collection 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 随采集批次移除的附带土壤矿物（`collection_incidental_soil`）

仅实际随批次物理移除的附着土壤矿物时适用；与可食子实体资源质量分开记录。在原地刷除留下的材料属于披露的来源处保留去向，不是输出数量。

- 选定流：随采集批次移除的附带土壤矿物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_collection 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 采集交接点的已采鲜蘑菇（`gathered_raw`）

向实际转运、初级处理或发运交接的已采原料批次，记录物种、来源、采集时间，另计附带土壤和异物。该中间数量按实测，不固定为最终一千克。

- 选定流：采集交接点的已采鲜蘑菇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_collection 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 采集弃物跨界进入处理（`collection_reject`）

仅实际移除并送往声明处理去向的弃物跨越废物边界。未采子实体留在来源处；现场保留修剪物属于披露的残留去向，不得同时作为废物输出与基本排放。

- 选定流：采集弃物跨界进入处理
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_collection 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际命名的采集直接排放（`collection_direct_emissions`）

对实际负责的燃烧或设备运行所产生、已识别直接物质设置条件汇总卡，逐物质说明数量、方法及接收区室。包含全部投入的供应商服务负责其排放；不施加通用因子、猜测污染物或人体代谢排放。

- 选定流：实际命名的采集直接排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_collection 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_collection`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：初级处理与分级 (`conditioning`)

#### 输入

##### 产品流

###### 进入初级处理的已采鲜蘑菇批次（`conditioning_feed`）

输入为实测上游采集交接量，或外购已采野生批次，前驱负担保留一次。来源证据必须排除培育批次；原料中的土壤、修剪物和水不得默认为验收食用产品质量。

- 选定流：进入初级处理的已采鲜蘑菇批次
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 初级处理燃料与电力（`conditioning_energy`）

对清理、修剪、分选和门前移动所用实际外购燃料、电力设置一条条件汇总卡，不假定电动清洗设备或必需热处理。

- 选定流：初级处理燃料与电力
- 流属性/单位：能源 / MJ
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 初级处理外供水（`conditioning_water`）

仅记录实际清洗或设备清洁所需作为产品供应的水；无水刷理没有用水输入。同一水量若直接取自环境，仅属于基本水资源卡。

- 选定流：初级处理外供水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 初级处理耗材（`conditioning_materials`）

对实际清洁剂和一次性操作材料设置一条条件汇总卡，保留实际配方名称及用途；不规定用于判定野生蘑菇合格的化学品。

- 选定流：初级处理耗材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 共享初级处理服务（`conditioning_services`）

按实测服务小时在使用者及期间之间分配实际共享操作台、搬运设备和合同服务；不在服务边界内的专用能源和材料另计。

- 选定流：共享初级处理服务
- 流属性/单位：服务时长 / h
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

不规定跨界流；记录实际未发生角色。

##### 基本流

###### 初级处理直接取水（`conditioning_direct_water`）

从有记录的来源按实际淡水类型和地点直接取水时适用。核实来源特定的基本流身份；同一供水不得再作为产品水计入。仅凭有证据且兼容的密度换算体积。

- 选定流：初级处理直接取水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 初级处理交接点的清理分级鲜蘑菇（`conditioned_fresh`）

仍保持鲜态的已整理选定批次交接至实际保鲜或最终验收。保留物种、等级、修剪及异物判定；不意味着干燥、烹制或保质期等同。

- 选定流：初级处理交接点的清理分级鲜蘑菇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 其他验收等级产品的独立交接（`other_grade_goods`）

列明每个实际验收的食用低等级或其他预期产品批次及其物种、等级和买方交接点。仅有预期用途及交接证据时作为共同输出；身份不明或未取得合格身份的蘑菇不属于食用产品。

- 选定流：其他验收等级产品的独立交接
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 送往处理的修剪物土杂及不合格蘑菇（`conditioning_reject`）

按实际成分及去向展开的一条废物汇总卡。原始台账分别记录可食修剪物、土壤异物和腐败或未合格子实体；复检循环保留来源负担，不产生新增验收质量。

- 选定流：送往处理的修剪物土杂及不合格蘑菇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 进入处理的初级处理废水（`conditioning_wastewater`）

实测排出的清洗或清洁废液进入实际废水处理边界。记录溶解固体和留存水；废水不是蒸发水，也不是未计量的直接排放。

- 选定流：进入处理的初级处理废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际命名的初级处理直接排放（`conditioning_direct_emissions`）

对实际负责的燃烧或设备运行所产生、已识别直接物质设置条件汇总卡，逐物质说明数量、方法及接收区室。包含全部投入的供应商服务负责其排放；不施加通用因子、猜测污染物或人体代谢排放。

- 选定流：实际命名的初级处理直接排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_conditioning 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：门前鲜品保鲜与储存 (`preservation`)

#### 输入

##### 产品流

###### 进入门前保鲜的可用鲜蘑菇（`preservation_feed`）

来自实际前驱节点或已核实上游采集来源的可用批次实测量。该批次保持鲜态；不包含冷冻、干燥或化学保藏输出。

- 选定流：进入门前保鲜的可用鲜蘑菇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_preservation 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 鲜品保鲜燃料与电力（`preservation_energy`）

对声明门前期间实际制冷、通风和冷藏所用燃料、电力设置一条条件汇总卡。不设通用温度、时长或能源配方；包含全部投入的外购制冷服务排除重复电力。

- 选定流：鲜品保鲜燃料与电力
- 流属性/单位：能源 / MJ
- 数量规则：按 cp_preservation 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 含制冷剂补充的鲜品保鲜材料（`preservation_materials`）

按实际名称和功能核实制冷剂、冰或其他保鲜材料；计量补充、回收和库存变化。充注回路不自动等于排放；冰不得同时作为供水和制冷材料计入。

- 选定流：含制冷剂补充的鲜品保鲜材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_preservation 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 共享鲜品保鲜资产服务（`preservation_services`）

采用占用和计量证据，将实际共享冷库或合同制冷服务小时归属物种批次与储存期间。闲置容量和假定寿命均不提供通用每千克负担。

- 选定流：共享鲜品保鲜资产服务
- 流属性/单位：服务时长 / h
- 数量规则：按 cp_preservation 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

不规定跨界流；记录实际未发生角色。

##### 基本流

不规定跨界流；记录实际未发生角色。

#### 输出

##### 产品流

###### 保鲜交接点的鲜或冷藏蘑菇（`preserved_fresh`）

向最终生产者验收交接的仍可用鲜或冷藏批次实测量，记录实际温度、时长和质量状态。稳定状态声明需要批次证据，不保证保质期。

- 选定流：保鲜交接点的鲜或冷藏蘑菇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_preservation 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 保鲜腐败批次及材料废物（`preservation_spoilage`）

实际腐败蘑菇、废弃材料或作为废物转移的回收制冷剂按不同成分和处理去向核实。退回或复检数量关联原批次并计量一次。

- 选定流：保鲜腐败批次及材料废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_preservation 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 鲜品保鲜向未指定空气区室排放的水蒸气（`preservation_water_vapour`）

实际从鲜批次蒸发至未指定空气区室的实测或平衡推导水量时适用；不代表全部质量损失、液体排水、呼吸碳或未知挥发物。已知特定空气区室需另行核实对应身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_preservation 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际命名的鲜品保鲜直接排放（`preservation_direct_emissions`）

对分别计量、明确命名的制冷剂泄漏或其他已识别直接物质及接收介质设置条件汇总卡。未知制冷剂、燃烧物种或呼吸气体成分属于身份和数据缺口，不强行绑定单一 UUID；排除上列水蒸气。

- 选定流：实际命名的鲜品保鲜直接排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_preservation 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_preservation`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：最终验收包装与生产者交接 (`handover`)

#### 输入

##### 产品流

###### 进入生产者最终验收的实际鲜蘑菇批次（`handover_feed`）

来自最后实际上游状态的实测批次，包括无初级处理和冷藏时的直接采集发运。每份数量仅由一种输入表征负责，并连接一次前驱负担。

- 选定流：进入生产者最终验收的实际鲜蘑菇批次
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_handover 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 生产者最终操作燃料与电力（`handover_energy`）

对最终称量、门前操作和包装设备实测能源设置一条条件汇总卡；零售配送、烹制和消费者储存位于本门外。

- 选定流：生产者最终操作燃料与电力
- 流属性/单位：能源 / MJ
- 数量规则：按 cp_handover 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 生产者交接包装材料（`handover_packaging`）

按成分、质量和重复使用或一次性状态记录实际箱筐、衬材或其他保护材料。蘑菇净质量排除包装。周转容器分配一次计入实际复用、修理、返还和寿终记录。

- 选定流：生产者交接包装材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_handover 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 共享最终称量与包装展示服务（`handover_services`）

记录实际可归属的称量、分选和包装资产小时；列明所有使用批次与报告期间。门前物流归于实际责任主体，不默认为分销投入。

- 选定流：共享最终称量与包装展示服务
- 流属性/单位：服务时长 / h
- 数量规则：按 cp_handover 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

不规定跨界流；记录实际未发生角色。

##### 基本流

不规定跨界流；记录实际未发生角色。

#### 输出

##### 产品流

###### 声明采集者或初级生产者发运点的鲜或冷藏野生食用蘑菇（`wild_mushroom_dispatch`）

声明最终生产者发运门的验收参考批次。记录无管护野生来源、取得合格身份的实际物种、鲜或冷藏状态、净质量、修剪异物、水分等级及温度时间。仅该验收输出固定为参考量；包装和此前原料分别实测。

- 选定流：声明采集者或初级生产者发运点的鲜或冷藏野生食用蘑菇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：声明参考归一化恒等关系
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`collected_record`

###### 生产者最终交接的其他合格鲜品（`handover_other_goods`）

生产者门实际独立发运其他合格鲜品物种/等级批次时适用，记录各自验收、净质量和去向。从初级处理内部转移的等级不同时在该较早交接点作为已销售共同产品；清单标签区分内部转移和独立跨界出口。未知或未取得合格身份的菌类仍排除于食用产品。

- 选定流：生产者最终交接的其他合格鲜品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_handover 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 最终验收弃物及包装废物（`handover_reject`）

实际不合格蘑菇及破损包装进入明确处理出口；回收利用或低等级销售需要有证据的独立预期产品角色，不采用处置信用。保留弃物负担，从验收净质量中排除弃物。

- 选定流：最终验收弃物及包装废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_handover 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际命名的交接直接排放（`handover_direct_emissions`）

对实际负责的燃烧或设备运行所产生、已识别直接物质设置条件汇总卡，逐物质说明数量、方法及接收区室。包含全部投入的供应商服务负责其排放；不施加通用因子、猜测污染物或人体代谢排放。

- 选定流：实际命名的交接直接排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_handover 实测可归属数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 数量范围：宽泛暂定推理 QA 筛查
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

## 7. 分配与共同产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `output_ownership` | 已采/已整理/验收产品 | 列明所有实际预期物种/等级产品及其交接。内部转移向后传递负担，不是独立最终产品。来源处保留材料、废物、身份未确认菌类和腐败批次不默认为共同产品。 | |
| `attribution_order` | 多种预期产品 | 首先细分独立计量的采集/操作批次和过程。对真正共享的剩余操作，采用有证据的物理因果，如实际行程/容器使用或服务占用。无可辩护物理驱动时，用记录的同期生产者净价值，进行敏感性分析并记录决定。不采用通用质量/价值份额或替代信用。 | |
| `loss_and_return` | 弃物及复检路径 | 在重复清理/复检中将负担保留于原批次；每次返回关联来源初级处理或验收节点。总体质量平衡中循环材料计一次，不作为新增采集。仅新取得合格身份的验收质量进入最终分母；处理保留可归属负担，无自动负信用。 | |
| `shared_asset_period` | 共享服务及包装 | 索引每项车辆、工具、冷库或周转容器资产，以及全部使用节点/批次/期间和全体使用者。用兼容总使用记录分配实测使用/占用，记录闲置/替换/修理/寿终决定，避免同一使用同时计入购买与包含全部投入的服务负担。不假定寿命或永久复用。 | |
| `site_period_aggregation` | 场址和时间汇总 | 按兼容实际物种/状态/交接门边界汇总可归属交换及验收输出质量，用总数相除，不平均场址比率。保留各场址/行程/季节覆盖、缺失贡献者、权重和代表性决定。期初/期末库存防止同一批次在采集和后续发运期间重复计入。 | |

## 8. 前景数据采集计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_collection` | collection | 来源及已采批次；能源/材料/服务；附带物/弃物/排放 | 来源行程台账 | 实际物种；食用合格身份记录；无管护来源/场址；通行/行程；采集时间；子实体质量；附带土壤；原料输出；保留或输出残留；燃料/电量；耗材；服务小时/使用者；命名排放/区室；去向 | 核实来源记录和可追溯校准称重；用日志/计量/供应商记录核对实际负责操作；保留物质特定排放计量或实际燃料因子证据 | kg；MJ；h 分开原始字段 | 每次实际行程和材料交接 | 实际行程和采集季节 | 列明来源场址及责任主体 | 每 1 kg 参考流 | 来源证明；合格身份；校准秤；原始日志；边界和因子证据 |
| `cp_conditioning` | conditioning | 鲜原料、水、等级、修剪物、废水及自有操作 | 操作批次台账 | 批次/物种/来源；输入鲜品/土壤质量；修剪物；全部等级；复检连接；外供或直接水/来源；留存水；废水固体/去向；能源/材料/服务；命名排放/区室；期初/期末库存 | 校准匹配批次称重、实际水表、状态/去向及服务边界记录；分别记录每个因子或推导排放 | kg；MJ；h 分开原始字段 | 每个批次/换批和交接 | 实际操作批次和清洁事件 | 声明整理场址及来源批次 | 每 1 kg 参考流 | 秤/表核查；批次状态台账；来源排除；处理记录 |
| `cp_preservation` | preservation | 鲜库存、能源/材料/服务、腐败/水及命名排放 | 鲜品储存台账 | 批次/物种；期初/输入/输出/期末质量；时间/温度；水分；冷凝/排水；失水；呼吸损失证据；能源；冰/制冷剂材料及库存；泄漏/回收/区室；服务占用/使用者；腐败去向 | 匹配校准库存称重和实际温度/期间/计量日志；核对水/材料平衡，独立识别排放计量或经论证物质特定因子 | kg；MJ；h 分开原始字段 | 每个储存批次、事件和出口 | 实际门前储存区间 | 每个自有冷藏/储存场址及服务边界 | 每 1 kg 参考流 | 校准记录；批次质量；计量；泄漏库存核对；缺失损失披露 |
| `cp_handover` | handover | 验收净参考量、包装、弃物及最终操作 | 发运验收台账 | 实际物种/来源合格身份；前驱状态；净/毛/皮重；修剪/土杂边界；水分/等级；交接门/时间/温度；包装质量/复用/返还；弃物/其他产品去向；能源/服务/使用者；命名排放；库存 | 用校准秤称量并排除包装；核对验收、上游批次及发运记录；检查有记录的产品合格身份，不用 AI 推断可食性 | kg；MJ；h 分开原始字段 | 每次验收发运和弃物事件 | 实际发运时间及资产使用期间 | 声明采集者或初级生产者门 | 每 1 kg 参考流 | 净/皮重核查；验收和来源追溯；复用台账；质量合格身份记录 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_normalization` | 所有清单行 | 将每个实际可归属交换总数除以匹配的验收发运净千克，保留分子单位。所连接最终产品为 1 kg，不是采集产率。 | 可归属交换；验收发运净质量；cp_handover | 每 1 kg 参考流的交换 | |
| `lot_mass_reconcile` | 材料及库存台账 | 用期初库存加实际输入核对期末库存、全部预期输出、跨界废物、来源处保留残留及有依据环境损失。附带土壤另计。报告不闭合、计量不确定性和未知损失；绝不把不明鲜质量损失视作水蒸发。 | 匹配来源/批次/期间称重；水和土壤记录；全部去向 | 闭合批次台账或明确缺口 | |
| `energy_conversion` | 能源汇总卡 | 保留载体数量；需换算时采用有记录实际载体低位热值/密度，或实测电量每 kWh 3.6 MJ；核实包含全部投入的服务排除项。 | 实际载体数量；兼容因子证据 | 载体特定能源量 | |
| `shared_use` | 共享资产及期间 | 以同一服务期间兼容实测使用者使用量除以全体使用量，分配有记录总服务负担；保留闲置/维修/替换决定及实际多输出规则。 | 使用节点/期间服务使用；总使用台账；负担边界 | 一次归属的服务份额 | |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `identity_quality` | 参考及输入批次 | 保留实际物种、食用合格身份记录、无管护来源证明和状态；拒绝培育或有意增产批次。本方法不提供辨菇或食用建议。 | 来源及合格验收记录 |
| `physical_quality` | 材料/库存/水平衡 | 按共同边界记录原始鲜输入、矿物、修剪物、验收等级、腐败、吸水/失水和库存。不移植干重贸易数据或历史物种产率。 | 匹配校准批次台账及不确定性 |
| `operational_quality` | 过程选择及保鲜 | 使用时必须提供实际路线、责任主体、温度/时间、服务边界和材料/制冷剂身份；无制冷不假定启用，未知活动不视作零。 | 行程/批次/储存日志及供应商证据 |
| `coverage_quality` | 汇总 | 列明全部来源场址、物种批次、行程、季节和期间、排除项及输出权重；仅对兼容参考产品论证汇总；不完整场址覆盖应披露，不以猜测生境产率扩展。 | 场址期间覆盖和代表性记录 |
| `range_quality` | 每张卡 | 所有非参考数量范围均为宽泛暂定推理 QA 筛查，不是采集事实、经验典型值、配方或强制上限。10 kg/kg 筛查覆盖数量级可变原料/损失/材料比；20 kg/kg 覆盖条件清洁用水吞吐；100 MJ/kg 覆盖从人工零能源到机械操作冷藏；10 h/kg 覆盖共享服务强度。参考 1..1 仅表达声明归一化。无论筛查如何，前景数量都要求所连接协议。审查异常值并用实际证据替换范围；绝不用估算截断、拒绝或填充缺值。 | 实际协议及审查判断；不采用 FAO 数值来源 |
| `identity_resolution` | 全部交换 | 每个实际交换必须核实为具体流/属性/单位身份，匹配物质/来源/状态/交接门/区室。条件汇总卡本身不是通用交换。 | 详细身份及支持证据随生产包保留 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `check_scope` | 参考及来源 | 核实实际无管护采集物种、有记录食用合格身份、鲜/冷藏状态及生产者门；排除松露、有意生产和排除加工状态。 | `unsd-wild-mushrooms` |
| `check_reference` | wild_mushroom_dispatch | 核实 1 kg 验收净输出、关联卡、实际限定项、校准净质量和所有行相同参考分母；输入及中间输出仍按实测。 | |
| `check_balance` | 所有实际节点 | 核对批次、矿物/异物、水、修剪物、腐败及库存；每份数量的外供/直接水以及前驱/自然移除互斥。不明损失或负库存保留为缺口。 | |
| `check_conditional_paths` | 过程图 | 选择实际负责的采集/初级处理/保鲜，连接原料及输出状态，前驱负担计一次。每条复检循环或弃物出口追溯来源；弃物质量不属于验收输出。 | |
| `check_attribution` | 场址期间及输出集合 | 确认每个预期产品交接及分配优先顺序、批次换批连接、全部场址期间和共享资产/服务/复用使用者。不得遗漏贡献者、重复最终产品或期间/服务负担。 | |
| `check_identity` | 具体交换 | 核实流类型/方向、实际材料/污染物身份、交接门/来源或接收区室、属性/单位和各支持引用；不自动接受近似匹配、未知制冷剂或泛粉尘身份。 | |
| `check_evidence` | 数量及范围 | 要求关联原始协议、兼容换算因子和可追溯实际操作。暂定 QA 筛查不能提供缺值或证明有效冷链条件；异常值触发审查，不截断。 | |

## 10. 发布数据集说明

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个合格实际鲜/冷藏野生物种批次的前景采集/初级操作数据集 |
| downstream_use | 仅对兼容声明鲜/冷藏生产者门状态用作 secondary_dataset 或 background_dataset |
| allowed_use | 在完整流身份及质量披露下，可追溯建模无管护采集和实际门前操作 |
| excluded_use | 培育、生境增产、松露、干燥/冷冻/加工输出、未知可食性保证、消费者营养或避免生产信用 |
| required_metadata | 实际物种/合格身份、来源及场址、行程/季节、节点责任主体、状态/交接门、等级/水分/土杂/修剪、时间/温度、净质量、包装/复用、输出去向及分配决定 |
| required_quality_disclosure | 实测覆盖、缺失上游/身份/损失证据、不闭合及不确定性、暂定筛查、场址期间权重、因子兼容性及实际服务边界 |
| update_trigger | 来源/物种/状态/交接门或操作变化；温度/期间变化；材料或制冷剂身份变化；新证据、供应商/资产/复用变化或输出去向变更 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-wild-mushrooms` | official_guidance | UNSD CPC 3.0 03232，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03232 ；检索 2026-10-08 | 无管护采集与有意管护/培育范围；不证明全叶类仅鲜品 |
| `fao-fungi-collection` | official_guidance | FAO，Wild edible fungi，第 3 章，https://www.fao.org/4/y5489e/y5489e07.htm ；检索 2026-10-08 | 采集/来源/通行责任及与管理的区分；不采用示例和历史产率为默认值 |
| `fao-fungi-use` | official_guidance | FAO，Wild edible fungi，第 4 章，https://www.fao.org/4/y5489e/y5489e08.htm ；检索 2026-10-08 | 不同采集/培育及鲜/干市场状态；不是当前通用培育限制或量化因子 |
