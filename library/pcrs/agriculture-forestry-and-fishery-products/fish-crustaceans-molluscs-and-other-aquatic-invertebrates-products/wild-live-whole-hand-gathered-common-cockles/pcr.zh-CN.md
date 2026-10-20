---
pcr_id: pcr.wild-live-whole-hand-gathered-common-cockles
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 野生手采活体完整带壳普通鸟蛤

## 1. 范围与适用性

本方法仅涵盖自然潮间带贝床手工采集的野生普通鸟蛤（Cerastoderma edule），在有意净化前由采集者首次实物交付时验收的活体完整原生带壳形态。耙采、过筛及装袋是有证据实际任务，足行、船或车辆进出依记录确定。这是食物链中间产品，并非即食保证。[nrw-dee-cockle-management; fao-bivalve-depuration-2008]

排除其他蛤、鸟蛤或蚶、养殖及管理移植养成、水力吸采、泵铲、螺旋桨冲洗及箱式拖捞；观赏、死亡冷藏、去壳、冷冻、熟制、干燥、盐渍、盐水保存或其他加工保存输出。接受 CPC narrower 边并不覆盖整个野生多物种活鲜冷藏叶。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-whole-hand-gathered-common-cockles |
| classification_refs | CPC 3.0 04451; narrower |
| covered_products | 有意净化前采集者首次交付的野生手采活体完整带壳 Cerastoderma edule |
| excluded_products | 其他物种路线；养殖或移植养成；门前有意净化；死亡、去壳、保存及观赏形态 |
| representative_product | Cerastoderma edule |
| production_route | 自然潮间带贝床 → 手采耙采过筛装袋 → 实际条件性门前处理 → 首次实物接收验收 |
| market_state | 活体完整原生带壳；食物链买方可后续净化 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采集者首次交付的手采活体完整带壳 Cerastoderma edule |
| How much | 1 千克验收动物净质量 |
| How well | 活体；物种核实；完整原生带壳；实际买方验收和处理目的；无即食主张 |
| How long or cycle | 有证据潮次航次批次及报告期间，包括全部可归属支持返程、清洁、暂存及资产阶段 |
| reference_flow_link | `handover_accepted_live` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 采集者首次交付的手采活体完整带壳 Cerastoderma edule |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 科学物种；自然野生贝床地点日期潮次；手工方式及实际进出；生命及壳状态；清洁沥水去皮基准；节点轮次顺序旁路；暂存目的条件；接收者及首次实物门；处理责任；产出等级；批次报告及库存服务期间；供方包含项；方法和不确定性 |

全部必需限定信息须在数据集元数据、产品参考说明或过程注释声明。游离水、沉积物、非产品生物及袋具容器须独立计量；原生壳与动物固有水分仍为动物质量。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以校准秤称量验收活体完整动物净质量；记录同批毛重去皮、游离水沥水清洁状态及买方验收。无独立证据不得肉重换算或水分校正。 |
| `native_units` | 所有清单行 | 各具体交换实际核实属性 | actual native unit | 保留分子单位及服务气体原生条件；换算须可追溯计量、相容单位及证据。质量支持不证明服务或气体体积支持。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 手工移出前已识别潮间带贝床自然野生 Cerastoderma edule |
| starting_condition_role | natural_resource_context |
| product_classification_scope | CPC 3.0 04451; narrower |
| recursive_input_rule | 外购同类动物即使有供方数据集，也超出本自然贝床手采者参考；不得混入其验收产出或重建其采捕。内部转移仅保留有证据原始范围内采捕及一次携带负荷。动物来源不明即阻断范围匹配。 |
| upstream_dataset_requirement | 外部燃料、水、物料、服务及资产须核实供方清单；范围单位地域技术时间及包含项相符 |
| disclosure | 物种贝床、实际任务期间、首次接收者门、生物物料库存、处理排除、预期产出、服务所有者及未解证据 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `wild_start` | gather | 从有证据潮间带贝床自然存在的 Cerastoderma edule 开始，不含管理养殖。采捕独立于后续清洁，将其从该环境移出；自然生长不是零影响养殖数据集。外购捕获物超出本采捕参考，不得混入其验收产出，也不得表示为第二次环境采捕。 | `nrw-dee-cockle-management` |
| `first_gate` | handover | 止于采集者向接收者首次有证据的实物验收，活体完整原生带壳，且先于有意净化、卫生性移植或养成。买方后续净化、发运、分销及食用排除。首次出售前由采集者净化的路线超出本窄方法，绝不能因此漏负荷；浸泡目的不明即阻断匹配。该门不证明即食安全。 | `fao-bivalve-depuration-2008` |
| `conditional_nodes` | all nodes | 仅激活实际独立责任；清洁、目的地分选、有界存活维持及呈交可交叉、重复、旁路。索引节点、轮次、事件及状态，保留采集中筛分及最终验收，不虚构独立分级。分选须实际至少两个已命名目的地状态及各自交接。不得通用化本地尺寸、季节、配额或工具阈值。 | `nrw-dee-cockle-management` |
| `all_duties` | all nodes | 每个活动节点完整记录自有资源、服务、排放、物料及包装接收、预期产出、库存、损失及去向，包括采捕中装袋。即使首次交付在离岸地点，仍纳入可归属的全部进出、返程、待机、清洁、维护及支持时段；买方后续物流排除。手采不证明燃料、扰动或生态影响为零。 | `nrw-dee-cockle-management` |
| `physical_ledger` | all nodes | 完整实物流量账与分配后的 LCA 数量分开。两侧以转移编号配对状态、数量、单位、保管责任及实际期间；内部动物、水、包装不再购买，循环水不重复计入。逐物料平衡核对期初、外部接收、自然移出及有证据生物或物料交换，与期末、转移、预期产出及损失去向；不同物质不可求和，湿质量变化不可强当动物收率。 |  |
| `fate_media` | all nodes | 区分进入技术系统接收者的受控废物或液体与向实际水、气、土的直接基本流。物种、生命状态、存活不确定性及实际生境归还独立于排放记录。不假定不存在生物摄取、渗出、粪便、假粪及呼吸；相关时须物质组分账及不确定性，不得走化石碳或壳固碳捷径。 |  |
| `periods` | all nodes | 声明潮次或航次批次、清洁换批和暂存时段、报告期间及工具容器资产获取、使用、替换、退役阶段。识别每个共享使用者和期间及带来源库存结转。替换、终止及库存不确定性不得用通用寿命或年化因子掩盖。 |  |
| `boundary_operating_responsibility` | 全部直接资源及排放 | own/owned、自有/自营表示本前景直接运营或控制并承担燃料/资源消费责任，不以设备法律产权为筛选条件。租赁或借用但自营的设备也纳入；供应方综合服务已含的组成不得重复直接计入。此定义适用于燃料、燃烧、水、压缩及资产/服务记录，一个事件只有一个责任方。 |  |

## 6. 过程清单结构

本稿“自有/自营/owned”表示本前景直接运营或控制并承担燃料、资源或压缩责任，不以设备法律产权为筛选条件；租赁或借用但自营供油的设备同样纳入。供应方综合服务已包含的组成不得再直接重复计入。

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `gather` | 手工采集及可归属的进出作业 | required | 实际自然贝床手采、耙采、过筛及装袋，包括进出现场和可归属的支持、返程时段。 | foreground_responsibility | 每 1 kg 参考流 |
| `clean` | 初次外部清洁 | conditional | 仅实际在门前开展独立冲洗或外部杂物去除责任时纳入；不得含有意净化。 | foreground_responsibility | 每 1 kg 参考流 |
| `sort` | 独立目的地分选 | conditional | 仅独立作业形成至少两个有证据的品质或目的地状态时纳入；采集中筛分或最终验收本身不得激活重复节点。 | foreground_responsibility | 每 1 kg 参考流 |
| `hold` | 有界活体状态维持 | conditional | 仅实际门前短时保护、控温或以存活维持为目的的湿式暂存时纳入，不含净化或移植；目的及条件须有证据。 | foreground_responsibility | 每 1 kg 参考流 |
| `present` | 独立防护呈交 | conditional | 仅独立门前防护装载或标识时纳入；采集节点已计的袋具不得在此再购买或制造。 | foreground_responsibility | 每 1 kg 参考流 |
| `handover` | 采集者首次实物交付 | required | 在有意净化、卫生性移植或管理养成前，由实际接收者验收活体完整带壳鸟蛤。 | reference_handover | 每 1 kg 参考流 |

本表排列责任而非强制流水线。采集移出及初筛、后续独立分选、最终买方验收仅在有证据时承担不同责任。每个活动节点登记实际进出状态、转移编号和接收节点轮次；条件性总括卡枚举零、一或多个真实交换。旁路保留直接转移，重复轮次保留事件归属。

### 过程：手工采集及可归属的进出作业（`gather`）

实际自然贝床手采、耙采、过筛及装袋，包括进出现场和可归属的支持、返程时段。

#### 输入

##### 产品流

###### 实际用电点电力（`gather_electricity`）

仅实际供应时记录，保留国家、供方、电压、表计时段及服务包含项。手工不等于默认零能耗，也不得默认中国电网；kWh 转 MJ 须支持相容且披露换算。

- 选定流：电力
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: Energy units `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_gather 取得实际 gather_electricity 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gather`
- 数量范围: 针对 gather_electricity 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_gather_electricity
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

无默认交换；任何真实附加交换须有证据并依实际边界分类。

##### 基本流

###### 从自然贝床移出的野生 Cerastoderma edule（`gather_wild_cockles`）

按贝床、潮次、批次计量在损失或放流前移出的目标整动物。该环境移出不是购买的养殖苗种，也不是最终验收质量；保留实际资源身份及来源区室。

- 选定流：从自然贝床移出的野生 Cerastoderma edule
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_gather 取得实际 gather_wild_cockles 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gather`
- 来源: `nrw-dee-cockle-management`
- 数量范围: 针对 gather_wild_cockles 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_gather_wild_cockles
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

#### 输出

##### 产品流

###### 采集交接时的活体完整带壳鸟蛤（`gather_live_transfer`）

实际离开本责任的保留活体完整目标动物，列明下游节点或轮次、或首次交付，以及转移编号、状态和质量。下个节点不必是表中下一行；这是内部吞吐，不能再作最终验收产出。

- 选定流：采集交接时的活体完整带壳鸟蛤
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_gather 取得实际 gather_live_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gather`
- 数量范围: 针对 gather_live_transfer 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_gather_live_transfer
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

###### 化石二氧化碳至空气，未指定（`gather_fossil_co2`）

仅实际自营化石燃烧直接向空气排放 CO2 时记录。用实际燃料及化石碳份额和有证据氧化或排放因子推导；排除动物生物源呼吸及已含于供方服务的排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定模式: fixed
- 数量规则: 由 cp_gather 取得实际 gather_fossil_co2 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_gather`
- 数量范围: 针对 gather_fossil_co2 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_gather_fossil_co2
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

### 过程：初次外部清洁（`clean`）

仅实际在门前开展独立冲洗或外部杂物去除责任时纳入；不得含有意净化。

#### 输入

##### 产品流

###### 内部活体完整带壳鸟蛤接收（`clean_live_receipt`）

仅记录本系统原始范围内采捕、实际上游节点及轮次、动物状态、净质量、保管责任及配对转移编号。旁路节点不产生交换；外购动物不得进入参考池，也不得将内部接收固定为 1 kg。

- 选定流：内部活体完整带壳鸟蛤接收
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_clean 取得实际 clean_live_receipt 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_clean`
- 数量范围: 针对 clean_live_receipt 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_clean_live_receipt
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际用电点电力（`clean_electricity`）

仅实际供应时记录，保留国家、供方、电压、表计时段及服务包含项。手工不等于默认零能耗，也不得默认中国电网；kWh 转 MJ 须支持相容且披露换算。

- 选定流：电力
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: Energy units `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_clean 取得实际 clean_electricity 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_clean`
- 数量范围: 针对 clean_electricity 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_clean_electricity
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

无默认交换；任何真实附加交换须有证据并依实际边界分类。

##### 基本流

#### 输出

##### 产品流

###### 已外部清洁的活体完整带壳鸟蛤（`clean_live_transfer`）

实际离开本责任的保留活体完整目标动物，列明下游节点或轮次、或首次交付，以及转移编号、状态和质量。下个节点不必是表中下一行；这是内部吞吐，不能再作最终验收产出。

- 选定流：已外部清洁的活体完整带壳鸟蛤
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_clean 取得实际 clean_live_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_clean`
- 数量范围: 针对 clean_live_transfer 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_clean_live_transfer
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

###### 化石二氧化碳至空气，未指定（`clean_fossil_co2`）

仅实际自营化石燃烧直接向空气排放 CO2 时记录。用实际燃料及化石碳份额和有证据氧化或排放因子推导；排除动物生物源呼吸及已含于供方服务的排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定模式: fixed
- 数量规则: 由 cp_clean 取得实际 clean_fossil_co2 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_clean`
- 数量范围: 针对 clean_fossil_co2 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_clean_fossil_co2
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

### 过程：独立目的地分选（`sort`）

仅独立作业形成至少两个有证据的品质或目的地状态时纳入；采集中筛分或最终验收本身不得激活重复节点。

#### 输入

##### 产品流

###### 内部活体完整带壳鸟蛤接收（`sort_live_receipt`）

仅记录本系统原始范围内采捕、实际上游节点及轮次、动物状态、净质量、保管责任及配对转移编号。旁路节点不产生交换；外购动物不得进入参考池，也不得将内部接收固定为 1 kg。

- 选定流：内部活体完整带壳鸟蛤接收
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_sort 取得实际 sort_live_receipt 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_sort`
- 数量范围: 针对 sort_live_receipt 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_sort_live_receipt
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际用电点电力（`sort_electricity`）

仅实际供应时记录，保留国家、供方、电压、表计时段及服务包含项。手工不等于默认零能耗，也不得默认中国电网；kWh 转 MJ 须支持相容且披露换算。

- 选定流：电力
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: Energy units `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_sort 取得实际 sort_electricity 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_sort`
- 数量范围: 针对 sort_electricity 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_sort_electricity
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

无默认交换；任何真实附加交换须有证据并依实际边界分类。

##### 基本流

#### 输出

##### 产品流

###### 目的地分选后保留的活体完整带壳鸟蛤（`sort_live_transfer`）

实际离开本责任的保留活体完整目标动物，列明下游节点或轮次、或首次交付，以及转移编号、状态和质量。下个节点不必是表中下一行；这是内部吞吐，不能再作最终验收产出。

- 选定流：目的地分选后保留的活体完整带壳鸟蛤
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_sort 取得实际 sort_live_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_sort`
- 数量范围: 针对 sort_live_transfer 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_sort_live_transfer
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

###### 化石二氧化碳至空气，未指定（`sort_fossil_co2`）

仅实际自营化石燃烧直接向空气排放 CO2 时记录。用实际燃料及化石碳份额和有证据氧化或排放因子推导；排除动物生物源呼吸及已含于供方服务的排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定模式: fixed
- 数量规则: 由 cp_sort 取得实际 sort_fossil_co2 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_sort`
- 数量范围: 针对 sort_fossil_co2 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_sort_fossil_co2
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

### 过程：有界活体状态维持（`hold`）

仅实际门前短时保护、控温或以存活维持为目的的湿式暂存时纳入，不含净化或移植；目的及条件须有证据。

#### 输入

##### 产品流

###### 内部活体完整带壳鸟蛤接收（`hold_live_receipt`）

仅记录本系统原始范围内采捕、实际上游节点及轮次、动物状态、净质量、保管责任及配对转移编号。旁路节点不产生交换；外购动物不得进入参考池，也不得将内部接收固定为 1 kg。

- 选定流：内部活体完整带壳鸟蛤接收
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_hold 取得实际 hold_live_receipt 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_hold`
- 数量范围: 针对 hold_live_receipt 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_hold_live_receipt
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际用电点电力（`hold_electricity`）

仅实际供应时记录，保留国家、供方、电压、表计时段及服务包含项。手工不等于默认零能耗，也不得默认中国电网；kWh 转 MJ 须支持相容且披露换算。

- 选定流：电力
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: Energy units `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_hold 取得实际 hold_electricity 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_hold`
- 数量范围: 针对 hold_electricity 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_hold_electricity
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

无默认交换；任何真实附加交换须有证据并依实际边界分类。

##### 基本流

#### 输出

##### 产品流

###### 有界维持后的活体完整带壳鸟蛤（`hold_live_transfer`）

实际离开本责任的保留活体完整目标动物，列明下游节点或轮次、或首次交付，以及转移编号、状态和质量。下个节点不必是表中下一行；这是内部吞吐，不能再作最终验收产出。

- 选定流：有界维持后的活体完整带壳鸟蛤
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_hold 取得实际 hold_live_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_hold`
- 数量范围: 针对 hold_live_transfer 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_hold_live_transfer
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

###### 化石二氧化碳至空气，未指定（`hold_fossil_co2`）

仅实际自营化石燃烧直接向空气排放 CO2 时记录。用实际燃料及化石碳份额和有证据氧化或排放因子推导；排除动物生物源呼吸及已含于供方服务的排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定模式: fixed
- 数量规则: 由 cp_hold 取得实际 hold_fossil_co2 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_hold`
- 数量范围: 针对 hold_fossil_co2 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_hold_fossil_co2
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

### 过程：独立防护呈交（`present`）

仅独立门前防护装载或标识时纳入；采集节点已计的袋具不得在此再购买或制造。

#### 输入

##### 产品流

###### 内部活体完整带壳鸟蛤接收（`present_live_receipt`）

仅记录本系统原始范围内采捕、实际上游节点及轮次、动物状态、净质量、保管责任及配对转移编号。旁路节点不产生交换；外购动物不得进入参考池，也不得将内部接收固定为 1 kg。

- 选定流：内部活体完整带壳鸟蛤接收
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_present 取得实际 present_live_receipt 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_present`
- 数量范围: 针对 present_live_receipt 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_present_live_receipt
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际用电点电力（`present_electricity`）

仅实际供应时记录，保留国家、供方、电压、表计时段及服务包含项。手工不等于默认零能耗，也不得默认中国电网；kWh 转 MJ 须支持相容且披露换算。

- 选定流：电力
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: Energy units `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_present 取得实际 present_electricity 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_present`
- 数量范围: 针对 present_electricity 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_present_electricity
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

无默认交换；任何真实附加交换须有证据并依实际边界分类。

##### 基本流

#### 输出

##### 产品流

###### 待首次交付的受保护活体完整带壳鸟蛤（`present_live_transfer`）

实际离开本责任的保留活体完整目标动物，列明下游节点或轮次、或首次交付，以及转移编号、状态和质量。下个节点不必是表中下一行；这是内部吞吐，不能再作最终验收产出。

- 选定流：待首次交付的受保护活体完整带壳鸟蛤
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_present 取得实际 present_live_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_present`
- 数量范围: 针对 present_live_transfer 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_present_live_transfer
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

###### 化石二氧化碳至空气，未指定（`present_fossil_co2`）

仅实际自营化石燃烧直接向空气排放 CO2 时记录。用实际燃料及化石碳份额和有证据氧化或排放因子推导；排除动物生物源呼吸及已含于供方服务的排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定模式: fixed
- 数量规则: 由 cp_present 取得实际 present_fossil_co2 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_present`
- 数量范围: 针对 present_fossil_co2 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_present_fossil_co2
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

### 过程：采集者首次实物交付（`handover`）

在有意净化、卫生性移植或管理养成前，由实际接收者验收活体完整带壳鸟蛤。

#### 输入

##### 产品流

###### 内部活体完整带壳鸟蛤接收（`handover_live_receipt`）

仅记录本系统原始范围内采捕、实际上游节点及轮次、动物状态、净质量、保管责任及配对转移编号。旁路节点不产生交换；外购动物不得进入参考池，也不得将内部接收固定为 1 kg。

- 选定流：内部活体完整带壳鸟蛤接收
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_handover 取得实际 handover_live_receipt 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_handover`
- 数量范围: 针对 handover_live_receipt 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_handover_live_receipt
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际用电点电力（`handover_electricity`）

仅实际供应时记录，保留国家、供方、电压、表计时段及服务包含项。手工不等于默认零能耗，也不得默认中国电网；kWh 转 MJ 须支持相容且披露换算。

- 选定流：电力
- 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: Energy units `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: 由 cp_handover 取得实际 handover_electricity 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_handover`
- 数量范围: 针对 handover_electricity 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_handover_electricity
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

无默认交换；任何真实附加交换须有证据并依实际边界分类。

##### 基本流

#### 输出

##### 产品流

###### 采集者首次交付的手采活体完整带壳 Cerastoderma edule（`handover_accepted_live`）

唯一最终参考：有证据的首次实物接收时验收的活体完整原生带壳动物净质量；接收者可能仍须后续净化。排除独立游离水、沉积物、其他生物及包装；该输出不表示即食安全认证。

- 选定流：采集者首次交付的手采活体完整带壳 Cerastoderma edule
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_handover`
- 来源: `reference-normalization-identity`
- 数量范围: 参考归一身份，非动物收率
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `method_formula`
  - 来源: `reference-normalization-identity`

##### 废物流

##### 基本流

###### 化石二氧化碳至空气，未指定（`handover_fossil_co2`）

仅实际自营化石燃烧直接向空气排放 CO2 时记录。用实际燃料及化石碳份额和有证据氧化或排放因子推导；排除动物生物源呼吸及已含于供方服务的排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: Mass units `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定模式: fixed
- 数量规则: 由 cp_handover 取得实际 handover_fossil_co2 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_handover`
- 数量范围: 针对 handover_fossil_co2 的未解独立证据要求
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: U_handover_fossil_co2
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `event_ownership` | all inventory rows | 先按有证据的节点、轮次、期间消耗，唯一归属各实物事件或服务并保留总量核对和供方包含项。此所有者归属先于独立共产品分配，不得把同一事件全量分到各节点。 |  |
| `product_hierarchy` | intended outputs | 列明预期物种、等级及接收门。优先可计量因果细分；无法细分时论证物理因果关系，无适当物理关系时才用有证据经济关系。不得默认湿质量或收入。记录实际方法、因子、分母、代表性及敏感性。放流生物、残余、拒收和废物非自动预期产出或替代抵扣。 |  |
| `later_split` | successive output splits | 真实后续产品分流时，将剩余携带上游负荷池与真正共享后续负荷分给有证据目的地。此前已外部化的产品份额不再入池；不得重分原始全部负荷，也不得令后出预期产品捕获负荷为零。产品专属后续负荷只随自身输出。 |  |
| `cross_period` | stocks and shared assets | 将每项服务资产关联实际使用节点期间，以有证据使用量或因果服务基准归属，并保留未用或待机能力决策、替换和末端处理。动物物料包装库存及附随负荷仅按可追溯来源结转一次；跨期不新增购买或捕获，不设默认寿命。 |  |
| `denominator` | reference output | 仅用同一产出集期间的正验收活体完整带壳鸟蛤净质量归一分配数量。实物来源去向数量保持未加权。无验收参考产出的批次期间按声明的负荷池、库存、其他产出或损失方法保留负荷，不得除零、丢失败作业或将负荷置零。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_gather` | `gather` | 全部实际 gather 接口及交换子记录 | 计量、作业库存服务和验收账 | 批次潮次航次；事件轮次节点；日期起止时长；实际手工工具进出路线船车及返程支持所有者；动物来源；贝床物种生命壳状态；处理目的温度盐度气体组成压力温度及干预；毛重去皮净重游离水沉积；物质区室原生单位；表计燃料库存；供方包含项；资产服务期间寿命；包装重复用；进出接收者及配对转移编号；生物交换损失去向；预期产出；归属池因子分母；独立范围证据及不确定性 | 校准秤表及可追溯日志票据接收记录；动物与水、杂物、容器分称；实测生物组分变化或披露不确定性。核对配对记录及服务包含项；不得以缺记录推零。 | kg; MJ; actual native units | 每个实际事件轮次转移及库存期初期末 | 完整潮次航次批次及报告服务期间，包括零验收产出事件 | 实际贝床船车岸上设施及节点 gather | 每 1 kg 参考流 | 校准、身份生命证据；原始平衡保管；供方期间范围；因子及独立范围来源；缺失敏感性 |
| `cp_clean` | `clean` | 全部实际 clean 接口及交换子记录 | 计量、作业库存服务和验收账 | 批次潮次航次；事件轮次节点；日期起止时长；实际手工工具进出路线船车及返程支持所有者；动物来源；贝床物种生命壳状态；处理目的温度盐度气体组成压力温度及干预；毛重去皮净重游离水沉积；物质区室原生单位；表计燃料库存；供方包含项；资产服务期间寿命；包装重复用；进出接收者及配对转移编号；生物交换损失去向；预期产出；归属池因子分母；独立范围证据及不确定性 | 校准秤表及可追溯日志票据接收记录；动物与水、杂物、容器分称；实测生物组分变化或披露不确定性。核对配对记录及服务包含项；不得以缺记录推零。 | kg; MJ; actual native units | 每个实际事件轮次转移及库存期初期末 | 完整潮次航次批次及报告服务期间，包括零验收产出事件 | 实际贝床船车岸上设施及节点 clean | 每 1 kg 参考流 | 校准、身份生命证据；原始平衡保管；供方期间范围；因子及独立范围来源；缺失敏感性 |
| `cp_sort` | `sort` | 全部实际 sort 接口及交换子记录 | 计量、作业库存服务和验收账 | 批次潮次航次；事件轮次节点；日期起止时长；实际手工工具进出路线船车及返程支持所有者；动物来源；贝床物种生命壳状态；处理目的温度盐度气体组成压力温度及干预；毛重去皮净重游离水沉积；物质区室原生单位；表计燃料库存；供方包含项；资产服务期间寿命；包装重复用；进出接收者及配对转移编号；生物交换损失去向；预期产出；归属池因子分母；独立范围证据及不确定性 | 校准秤表及可追溯日志票据接收记录；动物与水、杂物、容器分称；实测生物组分变化或披露不确定性。核对配对记录及服务包含项；不得以缺记录推零。 | kg; MJ; actual native units | 每个实际事件轮次转移及库存期初期末 | 完整潮次航次批次及报告服务期间，包括零验收产出事件 | 实际贝床船车岸上设施及节点 sort | 每 1 kg 参考流 | 校准、身份生命证据；原始平衡保管；供方期间范围；因子及独立范围来源；缺失敏感性 |
| `cp_hold` | `hold` | 全部实际 hold 接口及交换子记录 | 计量、作业库存服务和验收账 | 批次潮次航次；事件轮次节点；日期起止时长；实际手工工具进出路线船车及返程支持所有者；动物来源；贝床物种生命壳状态；处理目的温度盐度气体组成压力温度及干预；毛重去皮净重游离水沉积；物质区室原生单位；表计燃料库存；供方包含项；资产服务期间寿命；包装重复用；进出接收者及配对转移编号；生物交换损失去向；预期产出；归属池因子分母；独立范围证据及不确定性 | 校准秤表及可追溯日志票据接收记录；动物与水、杂物、容器分称；实测生物组分变化或披露不确定性。核对配对记录及服务包含项；不得以缺记录推零。 | kg; MJ; actual native units | 每个实际事件轮次转移及库存期初期末 | 完整潮次航次批次及报告服务期间，包括零验收产出事件 | 实际贝床船车岸上设施及节点 hold | 每 1 kg 参考流 | 校准、身份生命证据；原始平衡保管；供方期间范围；因子及独立范围来源；缺失敏感性 |
| `cp_present` | `present` | 全部实际 present 接口及交换子记录 | 计量、作业库存服务和验收账 | 批次潮次航次；事件轮次节点；日期起止时长；实际手工工具进出路线船车及返程支持所有者；动物来源；贝床物种生命壳状态；处理目的温度盐度气体组成压力温度及干预；毛重去皮净重游离水沉积；物质区室原生单位；表计燃料库存；供方包含项；资产服务期间寿命；包装重复用；进出接收者及配对转移编号；生物交换损失去向；预期产出；归属池因子分母；独立范围证据及不确定性 | 校准秤表及可追溯日志票据接收记录；动物与水、杂物、容器分称；实测生物组分变化或披露不确定性。核对配对记录及服务包含项；不得以缺记录推零。 | kg; MJ; actual native units | 每个实际事件轮次转移及库存期初期末 | 完整潮次航次批次及报告服务期间，包括零验收产出事件 | 实际贝床船车岸上设施及节点 present | 每 1 kg 参考流 | 校准、身份生命证据；原始平衡保管；供方期间范围；因子及独立范围来源；缺失敏感性 |
| `cp_handover` | `handover` | 全部实际 handover 接口及交换子记录 | 计量、作业库存服务和验收账 | 批次潮次航次；事件轮次节点；日期起止时长；实际手工工具进出路线船车及返程支持所有者；动物来源；贝床物种生命壳状态；处理目的温度盐度气体组成压力温度及干预；毛重去皮净重游离水沉积；物质区室原生单位；表计燃料库存；供方包含项；资产服务期间寿命；包装重复用；进出接收者及配对转移编号；生物交换损失去向；预期产出；归属池因子分母；独立范围证据及不确定性 | 校准秤表及可追溯日志票据接收记录；动物与水、杂物、容器分称；实测生物组分变化或披露不确定性。核对配对记录及服务包含项；不得以缺记录推零。 | kg; MJ; actual native units | 每个实际事件轮次转移及库存期初期末 | 完整潮次航次批次及报告服务期间，包括零验收产出事件 | 实际贝床船车岸上设施及节点 handover | 每 1 kg 参考流 | 校准、身份生命证据；原始平衡保管；供方期间范围；因子及独立范围来源；缺失敏感性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_identity` | handover_accepted_live | 定义上的参考产出恰为 1 千克；实际验收活体净质量在归一前独立计量，不是收率因子。 | cp_handover | 参考数量 | `reference-normalization-identity` |
| `physical_reconciliation` | 所有清单行 | 按实际事件库存分别核对未加权动物、水、沉积物和包装账；内部配对转移只在系统汇总相消，不删除节点记录。 | cp_gather; cp_clean; cp_sort; cp_hold; cp_present; cp_handover | 组分平衡及缺口 |  |
| `attribution_ledger` | 所有清单行 | 应用 event_ownership 后执行 product_hierarchy、later_split、cross_period、denominator，保留原始量及按正参考分母唯一归属量和全部因子证据。 | cp_gather; cp_clean; cp_sort; cp_hold; cp_present; cp_handover | 归属清单及敏感性 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `product_trace` | reference output | 物种野生路线活体完整状态首次实物门及接收处理目的相符；每项验收动物批次须追溯原始范围内采捕，并从参考池排除外购捕获物。 | 贝床作业接收记录、壳及生命检查、处理所有者 |
| `complete_balances` | all nodes | 保留所有实际事件库存期间、独立组分平衡、完整原始吞吐和全部去向区室；缺失非零。 | 配对编号校准库存废物接收生物记录及不确定性 |
| `quantitative_evidence` | all rows | 定性来源不提供经验 Range、分配排放因子、寿命、单位换算或存活率；须独立代表性支持，否则披露未解待审缺口。 | 原始记录及独立数据方法范围单位时间技术适用性和敏感性 |
| `collect_gather_fuel` | `gather`; 输入; 产品流: 实际自营化石或其他燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际自营设备、船、车的燃料条件记录身份、实物交付及库存变化、组成和实测换算。已含供方投入的服务不得重复直接燃料；化石与生物源部分分开。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 由 cp_gather 取得实际 gather_fuel 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_fuel 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_fuel 单位: MJ 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_water_product` | `gather`; 输入; 产品流: 供水产品或实际内部水转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按组成、质量及用途区分外供水和内部转移水，记录来源、卫生用途及转移或取水编号。循环为库存移动，不是重复购买或取水；普通工业水不构成食品接触用水或海水身份依据。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_water_product 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_water_product 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_water_product 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_services` | `gather`; 输入; 产品流: 实际进出、设备及共享服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际服务以各自原生单位拆出交换，明确范围、供方、节点及期间所有者和所含燃料、能源、排放、资产项目。识别船、车、工具、暂存的共享使用者及有证据寿命和使用量；保留零产出及可归属的返程、待机和支持责任；不得默认加入人员食物或基础代谢。 流属性/单位: Actual native service property / actual native service unit; 数量规则: 由 cp_gather 取得实际 gather_services 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_services 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_services 单位: actual native service unit 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_materials_packages` | `gather`; 输入; 产品流: 辅助材料及袋具容器供给或转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际记录耙具、筛具修理、清洁剂、标识、防护材料并按身份和用途拆分；区分新增外供、可重复用器具期初期末库存及内部配对包装转移，记录质量或件数、清洁责任及有证据寿命。不得假设向动物施加消毒剂。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_materials_packages 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_materials_packages 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_materials_packages 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_internal_residue_receipt` | `gather`; 输入; 废物流: 实际受控内部残余物接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一范围内节点/轮次接收受控残余物或废物保管时，按固体/液体、物种或物质、状态、组成、质量、时间及发送/接收配对编号分别记录；与真实发送废物流配对并核对库存。不是活体参考输入、外购产品或自动返工/回收/处理路线。继承归属一次；同一残余物的最终处理或环境释放只计实际责任方，不在每次内部交接重复。仅同节点留存无需新增交换；不存在此交接时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_gather 获取实际 gather_internal_residue_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_internal_residue_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_water_abstraction` | `gather`; 输入; 基本流: 实际从环境取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际海水、地表淡水或地下水区室及独立取水编号记录计量或有依据取水；不得把环境潮汐整体运动或已作为产品供入的同一水再计取水。归还水与消耗分开。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_water_abstraction 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_water_abstraction 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_water_abstraction 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_biological_uptake` | `gather`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_gather 获取实际 gather_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_incidental_removal` | `gather`; 输入; 基本流: 实际移出的伴生物及外来贝床物质 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际物种/材料、活死状态、贝床/潮次和质量，记录采捕同时移出的非目标生物、泥沙、壳碎屑或外来附着物，逐项配对保留、释放、废弃及库存去向。排除目标鸟蛤原生壳/体内水及已计于 gather_wild_cockles 的质量；不是默认伴捕量、无影响声明或影响因子。 仅记录实际跨入前景边界的移出物；原位扰动不是该输入。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_gather 获取实际 gather_incidental_removal 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_incidental_removal 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_other_intended` | `gather`; 输出; 产品流: 有证据时的独立预期目的地产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项列明真实预期等级或目的地、物种、状态、数量、价值及接收者。仅有意生产的市场输出进入共产品分配；非参考等级在数据包中用独立输出编号，不得同时进入验收分母。拒收或死亡物并非自动可售。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_other_intended 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_other_intended 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_other_intended 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_package_transfer` | `gather`; 输出; 产品流: 交接的可重复用或防护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 包装转移与动物质量分开计量，标明重复用保管责任及目的地，配对内部转移并核对归还、留存、售出容器。购买后留在库存的袋不是第二产出；不得重复制造负荷。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_package_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_package_transfer 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_package_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_internal_water_transfer` | `gather`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_gather 获取实际 gather_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_solid_waste` | `gather`; 输出; 废物流: 受控动物、沉积物、工具和包装废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际组成和接收者或处理拆分死亡、拒收动物、壳、沉积物、附着生物、损坏工具及包装。区分临时内部残余物转移与外部废物；废物不得变成免费共产品或负捕获量。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_solid_waste 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_solid_waste 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_solid_waste 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_contained_liquid` | `gather`; 输出; 废物流: 受控废水及生物沉积悬液 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际受控液体进入技术系统处理或接收者记录，分开游离水、固体、粪便、假粪、渗出物及化学组成，保留处理所有者及包含的排放。不得再把同一受控污染物计直接释放。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_contained_liquid 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_contained_liquid 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_contained_liquid 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_water_release` | `gather`; 输出; 基本流: 向实际水体区室直接排水及物质释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际无控直接释放时记录，识别海水、地表淡水或地下水接收区室及每一物质、沉积物或生物沉积数量和化学基准，与载体水质量独立。溶解生物源碳不是化石尾气 CO2；不得因动物湿润而虚构排水。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_water_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_water_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_water_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_organism_release` | `gather`; 输出; 基本流: 向实际生境直接归还活体或死亡生物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际无控归还目标动物、伴捕或其他生物的条件记录，分开物种、生命状态、数量或质量、地点、原因及存活不确定性。不是共产品、负捕获或碳排放；保留来源移出和去向账，不得假定相消。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_organism_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_organism_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_organism_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_other_air` | `gather`; 输出; 基本流: 其他实际空气排放含生物气体交换 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际物质及空气区室拆分污染物种、粒径组分及生物源呼吸，保留来源和不确定性。不得强将 NOx 或颗粒物宽泛标签绑定 UUID 或化石 CO2。若呼吸摄取实质相关，应另录实测资源交换；不得以壳质量或总呼吸获得固碳抵扣。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_other_air 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_other_air 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_other_air 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_gather_soil_release` | `gather`; 输出; 基本流: 实际向土壤无控释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅岸上实际无控残余物或污染物释放时，按物质及土壤区室记录；不得自动写成海水排放、受控废物或尾气转排水。不存在时说明不适用。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_gather 取得实际 gather_soil_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_gather` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 gather_soil_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_gather_soil_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_gather`;  |
| `collect_clean_fuel` | `clean`; 输入; 产品流: 实际自营化石或其他燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际自营设备、船、车的燃料条件记录身份、实物交付及库存变化、组成和实测换算。已含供方投入的服务不得重复直接燃料；化石与生物源部分分开。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 由 cp_clean 取得实际 clean_fuel 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_fuel 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_fuel 单位: MJ 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_water_product` | `clean`; 输入; 产品流: 供水产品或实际内部水转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按组成、质量及用途区分外供水和内部转移水，记录来源、卫生用途及转移或取水编号。循环为库存移动，不是重复购买或取水；普通工业水不构成食品接触用水或海水身份依据。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_water_product 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_water_product 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_water_product 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_services` | `clean`; 输入; 产品流: 实际进出、设备及共享服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际服务以各自原生单位拆出交换，明确范围、供方、节点及期间所有者和所含燃料、能源、排放、资产项目。识别船、车、工具、暂存的共享使用者及有证据寿命和使用量；保留零产出及可归属的返程、待机和支持责任；不得默认加入人员食物或基础代谢。 流属性/单位: Actual native service property / actual native service unit; 数量规则: 由 cp_clean 取得实际 clean_services 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_services 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_services 单位: actual native service unit 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_materials_packages` | `clean`; 输入; 产品流: 辅助材料及袋具容器供给或转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际记录耙具、筛具修理、清洁剂、标识、防护材料并按身份和用途拆分；区分新增外供、可重复用器具期初期末库存及内部配对包装转移，记录质量或件数、清洁责任及有证据寿命。不得假设向动物施加消毒剂。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_materials_packages 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_materials_packages 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_materials_packages 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_internal_residue_receipt` | `clean`; 输入; 废物流: 实际受控内部残余物接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一范围内节点/轮次接收受控残余物或废物保管时，按固体/液体、物种或物质、状态、组成、质量、时间及发送/接收配对编号分别记录；与真实发送废物流配对并核对库存。不是活体参考输入、外购产品或自动返工/回收/处理路线。继承归属一次；同一残余物的最终处理或环境释放只计实际责任方，不在每次内部交接重复。仅同节点留存无需新增交换；不存在此交接时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_clean 获取实际 clean_internal_residue_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_internal_residue_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_water_abstraction` | `clean`; 输入; 基本流: 实际从环境取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际海水、地表淡水或地下水区室及独立取水编号记录计量或有依据取水；不得把环境潮汐整体运动或已作为产品供入的同一水再计取水。归还水与消耗分开。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_water_abstraction 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_water_abstraction 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_water_abstraction 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_biological_uptake` | `clean`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_clean 获取实际 clean_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_other_intended` | `clean`; 输出; 产品流: 有证据时的独立预期目的地产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项列明真实预期等级或目的地、物种、状态、数量、价值及接收者。仅有意生产的市场输出进入共产品分配；非参考等级在数据包中用独立输出编号，不得同时进入验收分母。拒收或死亡物并非自动可售。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_other_intended 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_other_intended 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_other_intended 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_package_transfer` | `clean`; 输出; 产品流: 交接的可重复用或防护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 包装转移与动物质量分开计量，标明重复用保管责任及目的地，配对内部转移并核对归还、留存、售出容器。购买后留在库存的袋不是第二产出；不得重复制造负荷。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_package_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_package_transfer 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_package_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_internal_water_transfer` | `clean`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_clean 获取实际 clean_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_solid_waste` | `clean`; 输出; 废物流: 受控动物、沉积物、工具和包装废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际组成和接收者或处理拆分死亡、拒收动物、壳、沉积物、附着生物、损坏工具及包装。区分临时内部残余物转移与外部废物；废物不得变成免费共产品或负捕获量。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_solid_waste 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_solid_waste 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_solid_waste 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_contained_liquid` | `clean`; 输出; 废物流: 受控废水及生物沉积悬液 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际受控液体进入技术系统处理或接收者记录，分开游离水、固体、粪便、假粪、渗出物及化学组成，保留处理所有者及包含的排放。不得再把同一受控污染物计直接释放。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_contained_liquid 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_contained_liquid 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_contained_liquid 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_water_release` | `clean`; 输出; 基本流: 向实际水体区室直接排水及物质释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际无控直接释放时记录，识别海水、地表淡水或地下水接收区室及每一物质、沉积物或生物沉积数量和化学基准，与载体水质量独立。溶解生物源碳不是化石尾气 CO2；不得因动物湿润而虚构排水。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_water_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_water_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_water_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_organism_release` | `clean`; 输出; 基本流: 向实际生境直接归还活体或死亡生物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际无控归还目标动物、伴捕或其他生物的条件记录，分开物种、生命状态、数量或质量、地点、原因及存活不确定性。不是共产品、负捕获或碳排放；保留来源移出和去向账，不得假定相消。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_organism_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_organism_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_organism_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_other_air` | `clean`; 输出; 基本流: 其他实际空气排放含生物气体交换 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际物质及空气区室拆分污染物种、粒径组分及生物源呼吸，保留来源和不确定性。不得强将 NOx 或颗粒物宽泛标签绑定 UUID 或化石 CO2。若呼吸摄取实质相关，应另录实测资源交换；不得以壳质量或总呼吸获得固碳抵扣。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_other_air 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_other_air 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_other_air 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_clean_soil_release` | `clean`; 输出; 基本流: 实际向土壤无控释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅岸上实际无控残余物或污染物释放时，按物质及土壤区室记录；不得自动写成海水排放、受控废物或尾气转排水。不存在时说明不适用。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_clean 取得实际 clean_soil_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_clean` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 clean_soil_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_clean_soil_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_clean`;  |
| `collect_sort_fuel` | `sort`; 输入; 产品流: 实际自营化石或其他燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际自营设备、船、车的燃料条件记录身份、实物交付及库存变化、组成和实测换算。已含供方投入的服务不得重复直接燃料；化石与生物源部分分开。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 由 cp_sort 取得实际 sort_fuel 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_fuel 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_fuel 单位: MJ 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_water_product` | `sort`; 输入; 产品流: 供水产品或实际内部水转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按组成、质量及用途区分外供水和内部转移水，记录来源、卫生用途及转移或取水编号。循环为库存移动，不是重复购买或取水；普通工业水不构成食品接触用水或海水身份依据。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_water_product 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_water_product 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_water_product 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_services` | `sort`; 输入; 产品流: 实际进出、设备及共享服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际服务以各自原生单位拆出交换，明确范围、供方、节点及期间所有者和所含燃料、能源、排放、资产项目。识别船、车、工具、暂存的共享使用者及有证据寿命和使用量；保留零产出及可归属的返程、待机和支持责任；不得默认加入人员食物或基础代谢。 流属性/单位: Actual native service property / actual native service unit; 数量规则: 由 cp_sort 取得实际 sort_services 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_services 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_services 单位: actual native service unit 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_materials_packages` | `sort`; 输入; 产品流: 辅助材料及袋具容器供给或转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际记录耙具、筛具修理、清洁剂、标识、防护材料并按身份和用途拆分；区分新增外供、可重复用器具期初期末库存及内部配对包装转移，记录质量或件数、清洁责任及有证据寿命。不得假设向动物施加消毒剂。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_materials_packages 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_materials_packages 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_materials_packages 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_internal_residue_receipt` | `sort`; 输入; 废物流: 实际受控内部残余物接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一范围内节点/轮次接收受控残余物或废物保管时，按固体/液体、物种或物质、状态、组成、质量、时间及发送/接收配对编号分别记录；与真实发送废物流配对并核对库存。不是活体参考输入、外购产品或自动返工/回收/处理路线。继承归属一次；同一残余物的最终处理或环境释放只计实际责任方，不在每次内部交接重复。仅同节点留存无需新增交换；不存在此交接时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_sort 获取实际 sort_internal_residue_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_internal_residue_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_water_abstraction` | `sort`; 输入; 基本流: 实际从环境取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际海水、地表淡水或地下水区室及独立取水编号记录计量或有依据取水；不得把环境潮汐整体运动或已作为产品供入的同一水再计取水。归还水与消耗分开。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_water_abstraction 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_water_abstraction 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_water_abstraction 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_biological_uptake` | `sort`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_sort 获取实际 sort_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_other_intended` | `sort`; 输出; 产品流: 有证据时的独立预期目的地产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项列明真实预期等级或目的地、物种、状态、数量、价值及接收者。仅有意生产的市场输出进入共产品分配；非参考等级在数据包中用独立输出编号，不得同时进入验收分母。拒收或死亡物并非自动可售。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_other_intended 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_other_intended 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_other_intended 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_package_transfer` | `sort`; 输出; 产品流: 交接的可重复用或防护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 包装转移与动物质量分开计量，标明重复用保管责任及目的地，配对内部转移并核对归还、留存、售出容器。购买后留在库存的袋不是第二产出；不得重复制造负荷。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_package_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_package_transfer 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_package_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_internal_water_transfer` | `sort`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_sort 获取实际 sort_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_solid_waste` | `sort`; 输出; 废物流: 受控动物、沉积物、工具和包装废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际组成和接收者或处理拆分死亡、拒收动物、壳、沉积物、附着生物、损坏工具及包装。区分临时内部残余物转移与外部废物；废物不得变成免费共产品或负捕获量。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_solid_waste 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_solid_waste 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_solid_waste 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_contained_liquid` | `sort`; 输出; 废物流: 受控废水及生物沉积悬液 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际受控液体进入技术系统处理或接收者记录，分开游离水、固体、粪便、假粪、渗出物及化学组成，保留处理所有者及包含的排放。不得再把同一受控污染物计直接释放。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_contained_liquid 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_contained_liquid 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_contained_liquid 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_water_release` | `sort`; 输出; 基本流: 向实际水体区室直接排水及物质释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际无控直接释放时记录，识别海水、地表淡水或地下水接收区室及每一物质、沉积物或生物沉积数量和化学基准，与载体水质量独立。溶解生物源碳不是化石尾气 CO2；不得因动物湿润而虚构排水。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_water_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_water_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_water_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_organism_release` | `sort`; 输出; 基本流: 向实际生境直接归还活体或死亡生物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际无控归还目标动物、伴捕或其他生物的条件记录，分开物种、生命状态、数量或质量、地点、原因及存活不确定性。不是共产品、负捕获或碳排放；保留来源移出和去向账，不得假定相消。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_organism_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_organism_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_organism_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_other_air` | `sort`; 输出; 基本流: 其他实际空气排放含生物气体交换 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际物质及空气区室拆分污染物种、粒径组分及生物源呼吸，保留来源和不确定性。不得强将 NOx 或颗粒物宽泛标签绑定 UUID 或化石 CO2。若呼吸摄取实质相关，应另录实测资源交换；不得以壳质量或总呼吸获得固碳抵扣。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_other_air 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_other_air 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_other_air 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_soil_release` | `sort`; 输出; 基本流: 实际向土壤无控释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅岸上实际无控残余物或污染物释放时，按物质及土壤区室记录；不得自动写成海水排放、受控废物或尾气转排水。不存在时说明不适用。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得实际 sort_soil_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 sort_soil_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_sort_soil_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_hold_fuel` | `hold`; 输入; 产品流: 实际自营化石或其他燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际自营设备、船、车的燃料条件记录身份、实物交付及库存变化、组成和实测换算。已含供方投入的服务不得重复直接燃料；化石与生物源部分分开。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 由 cp_hold 取得实际 hold_fuel 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_fuel 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_fuel 单位: MJ 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_water_product` | `hold`; 输入; 产品流: 供水产品或实际内部水转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按组成、质量及用途区分外供水和内部转移水，记录来源、卫生用途及转移或取水编号。循环为库存移动，不是重复购买或取水；普通工业水不构成食品接触用水或海水身份依据。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_water_product 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_water_product 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_water_product 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_services` | `hold`; 输入; 产品流: 实际进出、设备及共享服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际服务以各自原生单位拆出交换，明确范围、供方、节点及期间所有者和所含燃料、能源、排放、资产项目。识别船、车、工具、暂存的共享使用者及有证据寿命和使用量；保留零产出及可归属的返程、待机和支持责任；不得默认加入人员食物或基础代谢。 流属性/单位: Actual native service property / actual native service unit; 数量规则: 由 cp_hold 取得实际 hold_services 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_services 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_services 单位: actual native service unit 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_materials_packages` | `hold`; 输入; 产品流: 辅助材料及袋具容器供给或转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际记录耙具、筛具修理、清洁剂、标识、防护材料并按身份和用途拆分；区分新增外供、可重复用器具期初期末库存及内部配对包装转移，记录质量或件数、清洁责任及有证据寿命。不得假设向动物施加消毒剂。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_materials_packages 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_materials_packages 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_materials_packages 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_gas_supply` | `hold`; 输入; 产品流: 实际使用时的活体维持气体供给 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅有证据的供气或曝气服务，按实际组成、压力温度、原生单位及范围记录；区分空气、氧气及供方压缩包含项。不得推定工业氧气身份、氧剂量或强制气体干预。 流属性/单位: Actual native gas property / actual native gas unit; 数量规则: 由 cp_hold 取得实际 hold_gas_supply 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_gas_supply 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_gas_supply 单位: actual native gas unit 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_internal_residue_receipt` | `hold`; 输入; 废物流: 实际受控内部残余物接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一范围内节点/轮次接收受控残余物或废物保管时，按固体/液体、物种或物质、状态、组成、质量、时间及发送/接收配对编号分别记录；与真实发送废物流配对并核对库存。不是活体参考输入、外购产品或自动返工/回收/处理路线。继承归属一次；同一残余物的最终处理或环境释放只计实际责任方，不在每次内部交接重复。仅同节点留存无需新增交换；不存在此交接时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_hold 获取实际 hold_internal_residue_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_internal_residue_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_water_abstraction` | `hold`; 输入; 基本流: 实际从环境取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际海水、地表淡水或地下水区室及独立取水编号记录计量或有依据取水；不得把环境潮汐整体运动或已作为产品供入的同一水再计取水。归还水与消耗分开。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_water_abstraction 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_water_abstraction 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_water_abstraction 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_biological_uptake` | `hold`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_hold 获取实际 hold_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_other_intended` | `hold`; 输出; 产品流: 有证据时的独立预期目的地产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项列明真实预期等级或目的地、物种、状态、数量、价值及接收者。仅有意生产的市场输出进入共产品分配；非参考等级在数据包中用独立输出编号，不得同时进入验收分母。拒收或死亡物并非自动可售。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_other_intended 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_other_intended 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_other_intended 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_package_transfer` | `hold`; 输出; 产品流: 交接的可重复用或防护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 包装转移与动物质量分开计量，标明重复用保管责任及目的地，配对内部转移并核对归还、留存、售出容器。购买后留在库存的袋不是第二产出；不得重复制造负荷。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_package_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_package_transfer 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_package_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_internal_water_transfer` | `hold`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_hold 获取实际 hold_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_solid_waste` | `hold`; 输出; 废物流: 受控动物、沉积物、工具和包装废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际组成和接收者或处理拆分死亡、拒收动物、壳、沉积物、附着生物、损坏工具及包装。区分临时内部残余物转移与外部废物；废物不得变成免费共产品或负捕获量。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_solid_waste 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_solid_waste 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_solid_waste 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_contained_liquid` | `hold`; 输出; 废物流: 受控废水及生物沉积悬液 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际受控液体进入技术系统处理或接收者记录，分开游离水、固体、粪便、假粪、渗出物及化学组成，保留处理所有者及包含的排放。不得再把同一受控污染物计直接释放。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_contained_liquid 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_contained_liquid 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_contained_liquid 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_water_release` | `hold`; 输出; 基本流: 向实际水体区室直接排水及物质释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际无控直接释放时记录，识别海水、地表淡水或地下水接收区室及每一物质、沉积物或生物沉积数量和化学基准，与载体水质量独立。溶解生物源碳不是化石尾气 CO2；不得因动物湿润而虚构排水。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_water_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_water_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_water_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_organism_release` | `hold`; 输出; 基本流: 向实际生境直接归还活体或死亡生物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际无控归还目标动物、伴捕或其他生物的条件记录，分开物种、生命状态、数量或质量、地点、原因及存活不确定性。不是共产品、负捕获或碳排放；保留来源移出和去向账，不得假定相消。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_organism_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_organism_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_organism_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_other_air` | `hold`; 输出; 基本流: 其他实际空气排放含生物气体交换 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际物质及空气区室拆分污染物种、粒径组分及生物源呼吸，保留来源和不确定性。不得强将 NOx 或颗粒物宽泛标签绑定 UUID 或化石 CO2。若呼吸摄取实质相关，应另录实测资源交换；不得以壳质量或总呼吸获得固碳抵扣。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_other_air 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_other_air 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_other_air 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_hold_soil_release` | `hold`; 输出; 基本流: 实际向土壤无控释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅岸上实际无控残余物或污染物释放时，按物质及土壤区室记录；不得自动写成海水排放、受控废物或尾气转排水。不存在时说明不适用。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_hold 取得实际 hold_soil_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 hold_soil_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_hold_soil_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_hold`;  |
| `collect_present_fuel` | `present`; 输入; 产品流: 实际自营化石或其他燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际自营设备、船、车的燃料条件记录身份、实物交付及库存变化、组成和实测换算。已含供方投入的服务不得重复直接燃料；化石与生物源部分分开。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 由 cp_present 取得实际 present_fuel 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_fuel 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_fuel 单位: MJ 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_water_product` | `present`; 输入; 产品流: 供水产品或实际内部水转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按组成、质量及用途区分外供水和内部转移水，记录来源、卫生用途及转移或取水编号。循环为库存移动，不是重复购买或取水；普通工业水不构成食品接触用水或海水身份依据。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_water_product 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_water_product 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_water_product 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_services` | `present`; 输入; 产品流: 实际进出、设备及共享服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际服务以各自原生单位拆出交换，明确范围、供方、节点及期间所有者和所含燃料、能源、排放、资产项目。识别船、车、工具、暂存的共享使用者及有证据寿命和使用量；保留零产出及可归属的返程、待机和支持责任；不得默认加入人员食物或基础代谢。 流属性/单位: Actual native service property / actual native service unit; 数量规则: 由 cp_present 取得实际 present_services 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_services 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_services 单位: actual native service unit 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_materials_packages` | `present`; 输入; 产品流: 辅助材料及袋具容器供给或转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际记录耙具、筛具修理、清洁剂、标识、防护材料并按身份和用途拆分；区分新增外供、可重复用器具期初期末库存及内部配对包装转移，记录质量或件数、清洁责任及有证据寿命。不得假设向动物施加消毒剂。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_materials_packages 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_materials_packages 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_materials_packages 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_internal_residue_receipt` | `present`; 输入; 废物流: 实际受控内部残余物接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一范围内节点/轮次接收受控残余物或废物保管时，按固体/液体、物种或物质、状态、组成、质量、时间及发送/接收配对编号分别记录；与真实发送废物流配对并核对库存。不是活体参考输入、外购产品或自动返工/回收/处理路线。继承归属一次；同一残余物的最终处理或环境释放只计实际责任方，不在每次内部交接重复。仅同节点留存无需新增交换；不存在此交接时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_present 获取实际 present_internal_residue_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_present_internal_residue_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_water_abstraction` | `present`; 输入; 基本流: 实际从环境取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际海水、地表淡水或地下水区室及独立取水编号记录计量或有依据取水；不得把环境潮汐整体运动或已作为产品供入的同一水再计取水。归还水与消耗分开。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_water_abstraction 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_water_abstraction 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_water_abstraction 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_biological_uptake` | `present`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_present 获取实际 present_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_present_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_other_intended` | `present`; 输出; 产品流: 有证据时的独立预期目的地产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项列明真实预期等级或目的地、物种、状态、数量、价值及接收者。仅有意生产的市场输出进入共产品分配；非参考等级在数据包中用独立输出编号，不得同时进入验收分母。拒收或死亡物并非自动可售。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_other_intended 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_other_intended 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_other_intended 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_package_transfer` | `present`; 输出; 产品流: 交接的可重复用或防护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 包装转移与动物质量分开计量，标明重复用保管责任及目的地，配对内部转移并核对归还、留存、售出容器。购买后留在库存的袋不是第二产出；不得重复制造负荷。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_package_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_package_transfer 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_package_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_internal_water_transfer` | `present`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_present 获取实际 present_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_present_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_solid_waste` | `present`; 输出; 废物流: 受控动物、沉积物、工具和包装废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际组成和接收者或处理拆分死亡、拒收动物、壳、沉积物、附着生物、损坏工具及包装。区分临时内部残余物转移与外部废物；废物不得变成免费共产品或负捕获量。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_solid_waste 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_solid_waste 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_solid_waste 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_contained_liquid` | `present`; 输出; 废物流: 受控废水及生物沉积悬液 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际受控液体进入技术系统处理或接收者记录，分开游离水、固体、粪便、假粪、渗出物及化学组成，保留处理所有者及包含的排放。不得再把同一受控污染物计直接释放。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_contained_liquid 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_contained_liquid 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_contained_liquid 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_water_release` | `present`; 输出; 基本流: 向实际水体区室直接排水及物质释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际无控直接释放时记录，识别海水、地表淡水或地下水接收区室及每一物质、沉积物或生物沉积数量和化学基准，与载体水质量独立。溶解生物源碳不是化石尾气 CO2；不得因动物湿润而虚构排水。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_water_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_water_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_water_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_organism_release` | `present`; 输出; 基本流: 向实际生境直接归还活体或死亡生物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际无控归还目标动物、伴捕或其他生物的条件记录，分开物种、生命状态、数量或质量、地点、原因及存活不确定性。不是共产品、负捕获或碳排放；保留来源移出和去向账，不得假定相消。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_organism_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_organism_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_organism_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_other_air` | `present`; 输出; 基本流: 其他实际空气排放含生物气体交换 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际物质及空气区室拆分污染物种、粒径组分及生物源呼吸，保留来源和不确定性。不得强将 NOx 或颗粒物宽泛标签绑定 UUID 或化石 CO2。若呼吸摄取实质相关，应另录实测资源交换；不得以壳质量或总呼吸获得固碳抵扣。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_other_air 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_other_air 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_other_air 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_soil_release` | `present`; 输出; 基本流: 实际向土壤无控释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅岸上实际无控残余物或污染物释放时，按物质及土壤区室记录；不得自动写成海水排放、受控废物或尾气转排水。不存在时说明不适用。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_present 取得实际 present_soil_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 present_soil_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_present_soil_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_handover_fuel` | `handover`; 输入; 产品流: 实际自营化石或其他燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际自营设备、船、车的燃料条件记录身份、实物交付及库存变化、组成和实测换算。已含供方投入的服务不得重复直接燃料；化石与生物源部分分开。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 由 cp_handover 取得实际 handover_fuel 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_fuel 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_fuel 单位: MJ 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_water_product` | `handover`; 输入; 产品流: 供水产品或实际内部水转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按组成、质量及用途区分外供水和内部转移水，记录来源、卫生用途及转移或取水编号。循环为库存移动，不是重复购买或取水；普通工业水不构成食品接触用水或海水身份依据。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_water_product 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_water_product 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_water_product 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_services` | `handover`; 输入; 产品流: 实际进出、设备及共享服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际服务以各自原生单位拆出交换，明确范围、供方、节点及期间所有者和所含燃料、能源、排放、资产项目。识别船、车、工具、暂存的共享使用者及有证据寿命和使用量；保留零产出及可归属的返程、待机和支持责任；不得默认加入人员食物或基础代谢。 流属性/单位: Actual native service property / actual native service unit; 数量规则: 由 cp_handover 取得实际 handover_services 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_services 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_services 单位: actual native service unit 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_materials_packages` | `handover`; 输入; 产品流: 辅助材料及袋具容器供给或转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际记录耙具、筛具修理、清洁剂、标识、防护材料并按身份和用途拆分；区分新增外供、可重复用器具期初期末库存及内部配对包装转移，记录质量或件数、清洁责任及有证据寿命。不得假设向动物施加消毒剂。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_materials_packages 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_materials_packages 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_materials_packages 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_internal_residue_receipt` | `handover`; 输入; 废物流: 实际受控内部残余物接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一范围内节点/轮次接收受控残余物或废物保管时，按固体/液体、物种或物质、状态、组成、质量、时间及发送/接收配对编号分别记录；与真实发送废物流配对并核对库存。不是活体参考输入、外购产品或自动返工/回收/处理路线。继承归属一次；同一残余物的最终处理或环境释放只计实际责任方，不在每次内部交接重复。仅同节点留存无需新增交换；不存在此交接时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_handover 获取实际 handover_internal_residue_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_internal_residue_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_water_abstraction` | `handover`; 输入; 基本流: 实际从环境取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际海水、地表淡水或地下水区室及独立取水编号记录计量或有依据取水；不得把环境潮汐整体运动或已作为产品供入的同一水再计取水。归还水与消耗分开。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_water_abstraction 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_water_abstraction 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_water_abstraction 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_biological_uptake` | `handover`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_handover 获取实际 handover_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_other_intended` | `handover`; 输出; 产品流: 有证据时的独立预期目的地产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项列明真实预期等级或目的地、物种、状态、数量、价值及接收者。仅有意生产的市场输出进入共产品分配；非参考等级在数据包中用独立输出编号，不得同时进入验收分母。拒收或死亡物并非自动可售。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_other_intended 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_other_intended 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_other_intended 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_package_transfer` | `handover`; 输出; 产品流: 交接的可重复用或防护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 包装转移与动物质量分开计量，标明重复用保管责任及目的地，配对内部转移并核对归还、留存、售出容器。购买后留在库存的袋不是第二产出；不得重复制造负荷。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_package_transfer 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_package_transfer 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_package_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_internal_water_transfer` | `handover`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_handover 获取实际 handover_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_solid_waste` | `handover`; 输出; 废物流: 受控动物、沉积物、工具和包装废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际组成和接收者或处理拆分死亡、拒收动物、壳、沉积物、附着生物、损坏工具及包装。区分临时内部残余物转移与外部废物；废物不得变成免费共产品或负捕获量。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_solid_waste 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_solid_waste 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_solid_waste 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_contained_liquid` | `handover`; 输出; 废物流: 受控废水及生物沉积悬液 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际受控液体进入技术系统处理或接收者记录，分开游离水、固体、粪便、假粪、渗出物及化学组成，保留处理所有者及包含的排放。不得再把同一受控污染物计直接释放。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_contained_liquid 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_contained_liquid 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_contained_liquid 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_water_release` | `handover`; 输出; 基本流: 向实际水体区室直接排水及物质释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际无控直接释放时记录，识别海水、地表淡水或地下水接收区室及每一物质、沉积物或生物沉积数量和化学基准，与载体水质量独立。溶解生物源碳不是化石尾气 CO2；不得因动物湿润而虚构排水。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_water_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_water_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_water_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_organism_release` | `handover`; 输出; 基本流: 向实际生境直接归还活体或死亡生物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际无控归还目标动物、伴捕或其他生物的条件记录，分开物种、生命状态、数量或质量、地点、原因及存活不确定性。不是共产品、负捕获或碳排放；保留来源移出和去向账，不得假定相消。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_organism_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_organism_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_organism_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_other_air` | `handover`; 输出; 基本流: 其他实际空气排放含生物气体交换 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际物质及空气区室拆分污染物种、粒径组分及生物源呼吸，保留来源和不确定性。不得强将 NOx 或颗粒物宽泛标签绑定 UUID 或化石 CO2。若呼吸摄取实质相关，应另录实测资源交换；不得以壳质量或总呼吸获得固碳抵扣。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_other_air 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_other_air 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_other_air 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_soil_release` | `handover`; 输出; 基本流: 实际向土壤无控释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅岸上实际无控残余物或污染物释放时，按物质及土壤区室记录；不得自动写成海水排放、受控废物或尾气转排水。不存在时说明不适用。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_handover 取得实际 handover_soil_release 数量；按实际身份角色拆分，保留未加权实物数量及按正验收参考质量唯一分配的数量。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 针对 handover_soil_release 的未解独立证据要求 范围角色: `qa_guardrail` 下限: 0 上限: U_handover_soil_release 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `transport_cargo_scope` | 任何适用的门前运输、返程与共享运输服务 | 按实际运输服务原生单位采集货载与距离；货载包括实际同行的水、冰与容器，不以净动物/鱼体参考质量替代。记录装载、空返与零产出期间的实际燃料/服务负担及其归属。完整运输服务与自有燃料、电力、资产和直接释放范围互斥；保留返程与复用容器责任。 | 实际货载、距离、行程、容器与供应商服务范围记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_gate` | reference product | 核实 Cerastoderma edule、自然贝床、手工作业、生命状态、完整原生壳、实际首次实物接收者及处理目的。机械吸采、泵铲、螺旋桨冲洗或箱式拖捞、管理移植养成、其他物种、死亡去壳冷冻熟制保存形态或门前有意净化不得判范围相符。 |  |
| `card_identity` | all inventory rows | 最终数据集交换前核实每项实际具体流及独立属性单位组支持；未解语义总括卡不是可执行 UUID。记录精确来源、供方、区室和状态，不以名称排序推定身份； |  |
| `mass_check` | reference and transfers | 核对校准去皮净重记录，含原生壳和固有体内水，排除游离水、沉积物、其他生物及包装。按状态组分核对内部配对和库存，不假定肉至整贝或水分因子；死亡物不得留在活体参考。 |  |
| `inventory_complete` | all active nodes | 核实每个活动责任及旁路轮次、自有资源、辅助袋具工具及全部受控无控去向，包括归还生物、岸上接收者和生物不确定性。实际零值或不适用须解释，不得虚构处理、加冰、供气或排放。 |  |
| `range_check` | all inventory rows | 每项 0..U_<row_id> 是未解的独立 Range 证据要求，非经验上界、允许最大值、默认估值或截断规则。数值筛查前须独立代表性证据及基准单位，保留调查真实异常值。最终 1..1 仅表达归一身份，绝非收率。 |  |
| `allocation_check` | output and event ledger | 核对唯一事件所有者、全部预期目的地、渐进剩余负荷池、供方包含项、期间资产库存分配及零产出责任。通过不表示法律合规、可持续认证、食品安全或 UUID 与 Range 证据完整。 |  |
| `validate_atomic_completion` | 所有适用采集义务与具体清单交换 | 必须逐一落实第8节每项适用采集义务的具体物理/化学交换及其独立数量、原生单位、组成/状态、范围依据或明确的不确定性证据、原始记录、归一化、实际去向/接收环境及兼容的核实 UUID。未落实任何适用项则最终数据包不完整且验证失败；未知不等于零。集合总量不得复制给各项，完整服务与自有燃料/电力/直接释放不得重复。内部转移不固定为最终1 kg。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground dataset; secondary_dataset/background_dataset only after evidence review |
| downstream_use | 本精确首次采集者产品系统的核实 process 及 lifecyclemodel 投影 |
| allowed_use | 物种手工野生路线活体完整门相同，场址期间相容，实际交换已解 |
| excluded_use | 整个 CPC 叶等同；养殖机械替代；净化加工死亡产出；食品安全法律可持续认证；从未解符号取数值默认 |
| required_metadata | 全部参考限定信息、批次期间范围、实际节点轮次库存及供方边界、具体交换身份、归属及来源证据 |
| required_quality_disclosure | 身份范围因子库存生物不确定性、已执行跳过检查、覆盖代表性；映射不自动表示就绪 |
| update_trigger | 物种贝床方式处理目的门供方资产单位归属变更、新独立 Range 或身份证据或来源更正 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| nrw-dee-cockle-management | official_guidance | Natural Resources Wales, Dee Estuary Cockle Fishery Order (2008) management plan; https://naturalresourceswales.gov.uk/about-us/what-we-do/strategies-plans-and-policies/dee-estuary-cockle-fishery-order-2008-management-plan/?lang=en ; retrieved 2026-10-10 | 仅定性物种手采耙采过筛装袋进出上岸接口；无地方法律数值、数量因子或可持续保证 |
| fao-bivalve-depuration-2008 | official_guidance | Lee, Lovatelli and Ababouch, FAO Fisheries Technical Paper 511 (2008), abstract and ch7 pp39–40; https://www.fao.org/4/i0201e/i0201e00.htm ; retrieved 2026-10-10 | 定性净化前处理运输和有意净化区别；无普遍处理强制或危害去除保证 |
| un-cpc3-explanatory-notes-2025 | official_guidance | UN Statistics Division, CPC 3.0 explanatory notes (30 June 2025), printed pp50,78; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; retrieved 2026-10-10 | 仅分类边界，非产品路线 UUID 或数量真值 |
| reference-normalization-identity | method_factor | 参考流及 reference_identity 中定义：声明参考产出为 1 千克 | 仅最终 1..1 归一身份，非收率或实测界限 |
