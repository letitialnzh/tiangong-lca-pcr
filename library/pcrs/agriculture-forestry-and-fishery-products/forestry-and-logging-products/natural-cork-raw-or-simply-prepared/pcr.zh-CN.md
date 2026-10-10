---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.natural-cork-raw-or-simply-prepared
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 天然软木，原始或简单处理

## 1. 范围与适用性

本 PCR 覆盖声明初级生产者交接处一个实际原始采收或简单清理、静置、水煮及稳定化的天然软木批次。逐批声明实际树种、初剥/二剥/再生剥取、物理形态、背皮包含、含水、等级及交接点。水煮为条件操作，原始交付不要求水煮；完整不规则采收树皮板不属于几何加工块。

排除去背软木、粗略方整或成型块/板/条、破碎/颗粒/粉状软木、作为参考产品的废软木、聚结物、软木塞及其他制造品。不得把这些下游类别藏入简单处理。参考量不是原始与处理状态按固定等价品质混合的产品。

所含来源责任由实际生产记录决定：活树反复剥皮、有据的萌芽林伐后木/皮提取接口或已采收采购批次。不得对反复剥皮默认木材伐采。剥皮后林分仍有生物库存，整树质量及假定碳储存都不能成为树皮输出。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.natural-cork-raw-or-simply-prepared |
| classification_refs | cpc:3.0:03220 |
| covered_products | 合格原始或简单清理/静置/水煮天然软木，未去背且无制造几何形状 |
| excluded_products | 去背或粗略方整/成型软木；颗粒/粉状软木；参考废软木；聚结物；软木塞；成品软木制品 |
| representative_product | 声明生产者交接处一个实际验收树皮板或不规则软木批次 |
| production_route | 归属林分管理及实际树皮提取，只跟随实际转运/静置、简单水煮/稳定化、分级及条件包装；已采收采购从披露进料接口开始 |
| market_state | 原始或简单处理初级软木，须声明实际状态、等级及生产者交接点 |

受管理生产母活动为 stand_management。相对于活树反复产皮，实际萌芽林路线改变来源责任、伐后木材投入及独立交付木材归属；移除母活动为 bark_stripping，不另建第二个强制移除节点。依据采收及木/皮交接记录，为每一来源部分选择实际反复剥皮或萌芽林接口。不同实际部分只有独立台账才能并存；采购原软木不意味着重新执行其来源操作。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明初级生产者交接处一个实际合格天然软木批次 |
| How much | 收到状态净量 1 kg，排除运输包装 |
| How well | 声明树种、剥取类型、允许物理处理状态、未去除背皮包含、含水及验收等级 |
| How long or cycle | 实际采收批组、林分阶段、提取作业期、场地/水煮运行、储存期间及交付期间；不预设剥取间隔 |
| reference_flow_link | `cork_handover` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 声明生产者交接处合格原始或简单处理天然软木 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 树种；来源林分及批次；初剥/二剥/再生剥取；实际反复剥皮/萌芽林/采购路线；实际原始/静置/水煮状态；形态；背皮包含；收到状态净质量；含水方法及基准；等级；交接点；来源负担覆盖；采收及报告期间 |

每个前景数据包须披露这些限定条件。一个实际批次状态提供最终参考输出；中间投入及输出保留自身实测量、含水及状态，不采用默认产率或通用状态换算。

## 4. 量测与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在验收交接处校准净称量，排除包装及其他等级；所有清单量采用每 1 kg 参考流，分母来自 cp_handover 同一验收批次。 |
| `state_mass` | 软木投入及中间输出 | 质量 | kg | 按声明湿/干基记录含水，并先匹配来源批次、日期及背皮包含再核对湿质量、软木干物质及水；不使用通用密度、膨胀率或干湿因子。 |
| `energy_carriers` | 能源汇总卡 | 能量 | MJ | 分别保留燃料量及热值基准、计量电力及供热，有据换算；不得把人工或原生服务单位换成能源。 |
| `service_units` | 服务及运输交换 | 实际服务属性 | 实际服务单位 | 服务卡小时只覆盖按小时计量的服务；实际 tonne-km、面积或资产采购保留独立具体交换及核实支持，不虚构小时等价。 |
| `water_balance` | 简单水煮及静置 | 质量 | kg | 区分供水/直接取水、循环、软木保留水、液体出口、实际水蒸气及溶解/悬浮软木物质；湿质量变化不等于蒸发。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别受管理林分/批组、实际自然树皮来源或实测进料交接处上游已生产软木/木材批次 |
| starting_condition_role | 来源生产或已生产技术系统投入，按实际来源责任选择 |
| product_classification_scope | 原始或简单处理天然软木；排除下游去背/成型/颗粒软木及制造品 |
| recursive_input_rule | 已生产同类别软木投入保留实际进料状态、已核实上游覆盖及实测量；不递归重建先前树皮采收或重复自然资源移除 |
| upstream_dataset_requirement | 采购树皮/木材/软木须有来源生产及提取覆盖；缺失负担是披露的数据缺口，不是零影响投入 |
| disclosure | 实际工序激活、来源部分及责任方、贡献林分/场址、阶段/作业期/运行/库存期间、服务边界、最终状态及实际交接点 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `source_ownership` | 来源及移除 | 对同一树皮部分只选一个来源表示：受管理生产投入、已生产萌芽林木/皮投入或实际基本自然树皮资源；实际伐采只归属一次，保留活树库存不当作采收软木。 | `fao-cork-primary-handling` |
| `operation_activation` | 过程图 | 仅激活实际自有交接前操作；采购可绕过自有林分/移除/静置/水煮。qualification_handover 始终负责最终称重验收；绕过操作仍须保留实测交接。 | |
| `primary_gate` | 初级处理 | 包含实际简单静置/水煮/稳定化及验收，不包含后续去背、几何制造、研磨、制塞或配送；原始输出不要求水煮。 | `unsd-cpc3-notes`; `apcor-cork-transformation` |
| `source_delta` | stand_management 及 bark_stripping | 反复剥皮与萌芽林接口对每一来源部分互斥，以实际树/木/皮清单及木材输出责任证明差异；不得无据母活动或默认伐采。 | `fao-cork-primary-handling` |
| `period_sites` | 完整路线 | 将建立、维护、反复采收、实际替换/终止、场地库存及交付期间关联贡献场址；核对树皮与软木期初/期末库存。按批组及期间区分负担份额，不采用通用采收周期。 | |
| `shared_owner` | 资产及服务 | 列出每项共享道路、场地、锅炉或设备使用者及期间，依据服务实测量只归属一次；包含式外包操作不得重复计入所含公用工程或直接排放。 | |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_management` | 受管理软木林分生产 | conditional | 声明边界内实际负责可归属林分建立/维护 | 受管理生物生产及分阶段树皮交接，按来源记录替代生产差异 | 实测归属未剥树皮，不是整树质量 |
| `bark_stripping` | 树皮采收及资源移除 | conditional | 实际负责反复剥皮或声明萌芽林木/皮提取 | 来源生产与处理间独立采收/资源移除，记录实际技术路线差异 | 移除交接处实测原始树皮 |
| `rest_and_transfer` | 初级露天静置及交接前转运 | conditional | 边界内实际发生交接前静置/储存/搬运 | 可用采收树皮变为静置树皮的稳定化、库存期间及场址追踪 | 实测静置软木批次 |
| `simple_boiling` | 简单水煮及稳定化 | conditional | 交接前实际发生允许简单水煮/稳定化 | 声明批次/连续运行中的原始/静置至处理状态初级整理 | 实测处理软木批次 |
| `qualification_handover` | 分级、展示及生产者交接 | required | 每个参考批次须在实际声明交接点合格验收 | 实际原始/静置/处理状态分级及条件包装展示，最终交接 | 1 kg 验收参考产品 |

采收/移除独立，是因为它把来源背景中的归属树皮变为采收原软木；静置及水煮则负责后续物理状态及水变化。这些活动义务共用上述声明节点，不重复建立操作。生产模式为实际提取作业期及场地/水煮/验收批次或连续运行，逐运行关联启动、清理、换批、投入、输出及库存。

以下卡片以实际已识别交换为条件，不是强制配方。汇总卡可在前景数据集中解析为零、一或多个具体交换，每项有实际身份及核实支持；每节点常见能源/物料供应用一张卡，不因词汇而拆分。

全部非参考 Range 均为暂定 QA 筛选（`reasoned_estimate`），不是实测证据、允许边界、量值默认或已发表经验范围。10 kg 上限用于宽泛供给/包装筛选，20 kg 用于粗略软木进料/损失/排放筛选，100 kg 用于粗略用水或木材接口，1000 MJ 或 h 以及 10000 m2a 是特意宽泛的强度/服务/土地数量级标记。零允许实际条件交换不发生。超界须记录供审查，不得截断、替代前景记录或编造值；已知原生服务单位须其独立筛选。参考范围 1..1 仅是声明归一化恒等，不是采收产率。
### 过程：受管理软木林分生产（`stand_management`）

#### 输入

##### 产品流

###### 林分建立与维护材料（`stand_materials`）

按声明软木林分阶段归属实际苗木、改良材料、防护材料及维护用品；逐一确定实际材料，不预设施肥配方。

- 选定流：林分建立与维护材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stand`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 林分管理能源（`stand_energy`）

用一张条件汇总卡记录实际燃料、电力或热量；先保留载体及原单位，再有据换算为 MJ；人工或资产服务小时不得进入本卡。

- 选定流：林分管理能源
- 流属性/单位：能量 / MJ
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stand`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 林分管理与共享资产服务（`stand_services`）

记录实际归属的育苗、维护、通行道路或设备服务小时，列出资产使用者及期间；包含式采购服务不得重复计入已含燃料、材料和尾气。

- 选定流：林分管理与共享资产服务
- 流属性/单位：时间 / h
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stand`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

不预设此角色发生实际交换；任何有据边界跨越须按正确具体类型披露。

##### 基本流

###### 软木林分土地占用（`stand_land`）

记录归属于软木及其他林分产品的实际地类、面积及时间；m2a 是面积时间而非树皮产量，实际土地转化事件另行确定具体交换。

- 选定流：软木林分土地占用
- 流属性/单位：面积时间 / m2a
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stand`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：m2a
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

#### 输出

##### 产品流

###### 林分交接处归属的未剥软木树皮（`standing_bark`）

只表示交给剥取环节的归属树皮生产交接量，不是整株活树净质量；记录树皮计量及林龄批组，留存树体库存不是年度产品输出。

- 选定流：林分交接处归属的未剥软木树皮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stand`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际交接的其他林分预期产品（`stand_other_goods`）

在负责的林分事件列出实际独立木材、薪材或其他预期产品及交接；不得将留存生物量或凋落物视为销售共产品。

- 选定流：实际交接的其他林分预期产品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stand`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

不预设此角色发生实际交换；任何有据边界跨越须按正确具体类型披露。

##### 基本流

###### 林分管理直接物质排放（`stand_direct_emissions`）

仅记录所含干预实际报告的具体物质及接收介质，要求物质、区室及计算证据；不自动计入生物碳吸收、避免排放或整树固碳抵扣。

- 选定流：林分管理直接物质排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stand`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：树皮采收及资源移除（`bark_stripping`）

#### 输入

##### 产品流

###### 受管理树皮生产投入（`managed_bark_feed`）

当前景自有或采购相应上游生产时，按同一实测树皮批组匹配 standing_bark；同一部分不得再次登记基本树皮资源移除。

- 选定流：受管理树皮生产投入
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stripping`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 提取接口处带软木的萌芽林木材（`coppice_wood_feed`）

仅用于实际萌芽林伐后木材与树皮接口，披露木材量、源生产及伐采责任；不是活立木反复剥皮的默认整树投入。

- 选定流：提取接口处带软木的萌芽林木材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stripping`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 树皮剥取与提取能源（`stripping_energy`）

用一张卡记录剥取及声明提取接口的实际燃料、电力或热量；手工剥皮不意味着动力伐采或人体代谢清单。

- 选定流：树皮剥取与提取能源
- 流属性/单位：能量 / MJ
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stripping`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 剥取设备及提取服务（`stripping_services`）

记录来源接口实际分配的设备或提取服务小时；披露伐采是否由本系统负责或已包含在采购木材中。

- 选定流：剥取设备及提取服务
- 流属性/单位：时间 / h
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stripping`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

不预设此角色发生实际交换；任何有据边界跨越须按正确具体类型披露。

##### 基本流

###### 自然来源移除的软木树皮（`natural_bark_resource`）

只记录声明湿干基准及来源的实际未由上游受管理或已采收产品表示的自然树皮资源移除；排除已由 managed_bark_feed 或 coppice_wood_feed 表示的部分。

- 选定流：自然来源移除的软木树皮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stripping`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

#### 输出

##### 产品流

###### 移除交接处原始采收软木（`raw_bark`）

剥取交接处实测收到状态树皮板或不规则初剥、二剥、再生软木，注明背皮包含及来源批次；内部原料投入不得固定为最终 1 kg。

- 选定流：移除交接处原始采收软木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stripping`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 移除交接处其他预期产品（`stripping_other_goods`）

仅记录声明萌芽林接口实际独立交付的木材或其他预期产品；匹配来源责任，不得在第二交接点重复 stand_other_goods。

- 选定流：移除交接处其他预期产品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stripping`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 交给实际接收方的提取废物（`stripping_waste`）

按状态及接收方记录实际跨越废物边界的丢弃树皮碎块或偶发材料；留在来源地的材料披露在移除台账，不虚构为外运废物。

- 选定流：交给实际接收方的提取废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stripping`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 提取直接物质排放（`stripping_emissions`）

仅记录实际现场尾气或其他实测具体物质排放，注明污染物及接收区室；不用笼统尾气 UUID，不重复包含式服务排放。

- 选定流：提取直接物质排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_stripping`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：初级露天静置及交接前转运（`rest_and_transfer`）

#### 输入

##### 产品流

###### 进入实际静置及转运的原软木（`rest_cork_feed`）

计量来自 raw_bark 或采购已采收批次的原树皮；声明进料含水及处理状态，上游覆盖只登记一次。

- 选定流：进入实际静置及转运的原软木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_rest`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 静置场及交接前转运能源（`rest_energy`）

用一张条件卡记录实际自营搬运及场地操作的燃料、电力或热量；不默认动力干燥或后续配送。

- 选定流：静置场及交接前转运能源
- 流属性/单位：能量 / MJ
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_rest`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 静置场储存及转运服务（`rest_services`）

记录实际设备或场地服务小时；运输服务保留其原服务单位并形成独立具体交换，不得把 tonne-km 换成小时或 MJ。

- 选定流：静置场储存及转运服务
- 流属性/单位：时间 / h
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_rest`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

不预设此角色发生实际交换；任何有据边界跨越须按正确具体类型披露。

##### 基本流

不预设此角色发生实际交换；任何有据边界跨越须按正确具体类型披露。

#### 输出

##### 产品流

###### 初级交接处静置软木（`rested_cork`）

计量实际露天静置及交接前搬运后的软木批次，随后进入可选水煮或验收；分别记录库存变化及雨水吸收，不预设静置时长或密度膨胀。

- 选定流：初级交接处静置软木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_rest`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 静置场作为废物转移的不合格材料（`rest_rejects`）

记录实际作为废物转移的劣变、污染材料或搬运损失，注明源批次、去向及负担；可销售的降级软木不属于此废物流。

- 选定流：静置场作为废物转移的不合格材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_rest`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 软木静置排向未细分空气的水蒸气（`rest_water_air`）

仅记录实测或平衡推导的排向未细分空气水蒸气；雨水吸收、排液、软木干物质损失及未知挥发物不能改称蒸发；已知具体空气区室需其独立身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_rest`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 静置及转运实际直接物质排放（`rest_direct_emissions`）

仅在本节点负责的燃料或设备操作实际产生现场物质排放时适用，记录具体物质、相关粒径或组分、实际接收区室，以及实测量或有据活动因子计算。排除rest_water_air 已记录的水蒸气及供应服务已含排放。缺物质或活动证据为披露缺口，不置零、不绑定通用污染物 UUID。

- 选定流：静置及转运实际直接物质排放
- 流属性 / 单位：质量 / kg
- 流属性 UUID：93a60a56-a3c8-11da-a746-0800200b9a66
- 单位组 UUID：93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：实际可归属交换的实测量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_rest`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：简单水煮及稳定化（`simple_boiling`）

#### 输入

##### 产品流

###### 进入简单水煮的软木（`boiling_cork_feed`）

只在声明交接点前实际简单水煮时计量原始或静置软木，记录处理前状态；未处理原软木批次不使用本卡。

- 选定流：进入简单水煮的软木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_boiling`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 供应的水煮及清洗水（`boiling_supplied_water`）

计量跨技术系统供应边界的产品用水，记录供应状态及供应方；浴液循环不是重复新水投入，同一供水不得再列为直接基本资源取水。

- 选定流：供应的水煮及清洗水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_boiling`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 简单水煮及稳定化能源（`boiling_energy`）

用一张卡记录实际燃料、电力或热量，按水煮运行记录热量及浴液，含启动换批；不规定水煮时长、温度、膨胀率或含水因子。

- 选定流：简单水煮及稳定化能源
- 流属性/单位：能量 / MJ
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_boiling`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 水煮设备及稳定化服务（`boiling_services`）

记录独立供应时归属的水煮设备或场地服务小时；列出共享使用者及运行边界，包含式服务与独立计量能源不得重复负担。

- 选定流：水煮设备及稳定化服务
- 流属性/单位：时间 / h
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_boiling`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

不预设此角色发生实际交换；任何有据边界跨越须按正确具体类型披露。

##### 基本流

###### 简单水煮直接资源取水（`boiling_direct_water`）

只用于注明实际水体来源、水质及资源区室的直接取水；对同一水量与 boiling_supplied_water 互斥。

- 选定流：简单水煮直接资源取水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_boiling`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

#### 输出

##### 产品流

###### 交接处简单水煮并稳定化软木（`simply_prepared_cork`）

计量实际简单水煮及稳定化后的树皮板，不含去背或几何成型；声明保留水分、批次等级及验收前状态。

- 选定流：交接处简单水煮并稳定化软木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_boiling`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 转移处理的软木水煮废水（`boiling_wastewater`）

在处理接收接口计量实际含溶解提取物及悬浮物的废水；内部循环不是外部出口，直接环境排放需另定具体物质及实际接收介质。

- 选定流：转移处理的软木水煮废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_boiling`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 简单水煮固体不合格料及残余物（`boiling_solid_rejects`）

记录实际跨废物边界的分离污物、不可用软木及浴液残余物，确定去向及组成；回收可销售材料则在实际交接点作为预期产品。

- 选定流：简单水煮固体不合格料及残余物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_boiling`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 水煮及稳定化排向未细分空气的水蒸气（`boiling_water_air`）

只记录实际水蒸气，区分液体排污、溶解提取物移除及软木保留水分；仅在声明实际未细分空气区室时使用，不猜测全部湿质量损失。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_boiling`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 简单水煮直接物质排放（`boiling_direct_emissions`）

按实际区室及燃料或控制证据记录条件性现场燃烧或其他具体污染物排放；浴液提取物不是笼统空气 VOC 交换。

- 选定流：简单水煮直接物质排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_boiling`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：分级、展示及生产者交接（`qualification_handover`）

#### 输入

##### 产品流

###### 进入验收的软木批次（`handover_cork_feed`）

计量来自实际最后接口或已生产采购的原始、静置或简单水煮批次；不能按哪个投入有 UUID 推断状态，内部进料仍须实测而非 1 kg。

- 选定流：进入验收的软木批次
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 交接包装与展示材料（`handover_packaging`）

用一张条件卡记录实际防护、标识及装载展示包装材料；披露可回用资产、周转、包装损失及接收方，软木净量排除这些材料。

- 选定流：交接包装与展示材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 验收及包装能源（`handover_energy`）

用一张卡记录交接点前分级、称重及条件包装的实际燃料、电力或热量；此处不负责下游软木塞制造或运输。

- 选定流：验收及包装能源
- 流属性/单位：能量 / MJ
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 验收与展示服务（`handover_services`）

记录交接边界内分级、称重及共享设备服务小时；列出已含公用工程，禁止对包含式服务重复登记投入。

- 选定流：验收与展示服务
- 流属性/单位：时间 / h
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000
  - 单位：h
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

不预设此角色发生实际交换；任何有据边界跨越须按正确具体类型披露。

##### 基本流

不预设此角色发生实际交换；任何有据边界跨越须按正确具体类型披露。

#### 输出

##### 产品流

###### 声明生产者交接处合格原始或简单处理天然软木（`cork_handover`）

此预期输出仅表示实际验收参考批次，记录树种、剥取类型、原始或静置或水煮状态、完整背皮包含、含水及等级；所选净输出排除包装及其他等级。

- 选定流：声明生产者交接处合格原始或简单处理天然软木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 数量范围：参考归一化恒等
  - 范围角色：qa_guardrail
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：collected_record

###### 声明交接处其他预期天然软木等级（`handover_other_grades`）

列出实际独立验收的共产品等级或可销售降级批次的接收方及数量，排除 cork_handover；此初级交接点不假定工业颗粒或软木塞产品。

- 选定流：声明交接处其他预期天然软木等级
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 验收及包装作为废物转移的不合格料（`handover_waste`）

记录产生节点及接收方明确的实际不合格软木、杂质或包装废物；退回软木按实际上游节点记录并保留已发生负担，不重复最终验收。

- 选定流：验收及包装作为废物转移的不合格料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` (单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`) / kg
- 数量规则：实测实际归属交换
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 验收交接实际直接物质排放（`handover_direct_emissions`）

仅在本节点负责的燃料或设备操作实际产生现场物质排放时适用，记录具体物质、相关粒径或组分、实际接收区室，以及实测量或有据活动因子计算。排除上游节点已负责的排放及供应服务已含排放。缺物质或活动证据为披露缺口，不置零、不绑定通用污染物 UUID。

- 选定流：验收交接实际直接物质排放
- 流属性 / 单位：质量 / kg
- 流属性 UUID：93a60a56-a3c8-11da-a746-0800200b9a66
- 单位组 UUID：93a60a57-a4c8-11da-a746-0800200c9a66
- 数量规则：实际可归属交换的实测量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 数量范围：暂定宽泛 QA 筛选，不是默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `output_owner` | 每项来源/移除/验收输出 | 列出全部预期产品及实际交接，含实际林分产品、萌芽林木材及其他合格软木等级；区分留存生物量、损失、不合格料及废物，同一产品不得在两个模型接口销售。 | |
| `subdivision_first` | 产品共同负担 | 先细分独立计量生产及操作；剩余共同林分/提取或多等级负担，依据实际输出数据披露因果物理分配。若无可辩护物理关系，采用同期间及市场交接点有据经济份额并披露敏感性。不默认按整树与树皮库存质量分配，不自动替代抵扣。 | |
| `period_share` | 林分阶段及库存期间 | 按证据把建立、维护、采收及实际替换/终止归给批组及期间；按实际使用分配场地/锅炉/储存服务。旧库存负担结转，不当作新采收产品；未知阶段归属阻断最终具体数据集完成。 | |
| `run_share` | 批次或连续作业 | 将共同启动、清理及换批归属记录的运行及参与批次，份额核对为一个共同运行总量。水煮浴液/循环、静置及包装只计一次。 | |
| `asset_share` | 共享基础设施 | 列出每共享资产或服务实际使用节点及期间，以有据服务使用量、分母、非软木使用者及剩余份额归属；不得重复包含式上游服务与自有资产或公用工程。 | |
| `reject_path` | 所有产生节点 | 在产生节点把不合格材料关联实际返工、降级、回收或废物接收方。退回批次保留已发生负担及返工投入，不计第二最终输出；验收净软木排除未解决不合格料并保留真实废物负担。 | |

## 8. 前景数据采集、计算与质量规则

每项协议汇总均采用 cp_handover 同一验收软木批次净 kg；独立记录土地面积时间、剩余输出份额、运输原生量及新水与浴液循环，共同参考基准不得引入第二分母或重复转移。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand` | stand_management | 林分投入、归属树皮、土地及其他产品 | 林分/批组/服务记录 | 树种；林分/来源 id；建立维护阶段；面积日期；采收历史；归属树皮量；材料；能源载体；服务资产/使用者；独立输出；排放物质/介质 | 收集来源责任记录，交接称量树皮并匹配阶段/事件清单；明确区分材料、服务、产品及留存库存 | 分别记录实际 kg、MJ、h、m2a | 每阶段/事件及报告期 | 实际建立至覆盖采收及相关替换/终止 | 每贡献林分 | 每 1 kg 参考流 | 可追溯责任、校准量、面积时间图及阶段份额核对 |
| `cp_stripping` | bark_stripping | 来源投入、原树皮、服务、木材、废物及排放 | 提取作业期记录 | 反复/萌芽林路线；来源部分；进料树皮/木量；伐采责任；初剥/二剥/再生；背皮包含；原始湿量；含水基准；独立木材交接；留存材料；燃料服务；废物接收方；污染物/区室 | 称量提取接口，记录实际树/木接口、来源责任、偶发及留存材料；独立记录具体直接物质 | 分别记录实际 kg、MJ、h | 每提取来源批次/作业期 | 实际采收及覆盖报告期 | 每来源/移除场址 | 每 1 kg 参考流 | 来源权限及责任、校准、库存输出核对及接收记录 |
| `cp_rest` | rest_and_transfer |软木转运、能源、服务、不合格料及水及直接排放 | 场地/转运/库存记录 |批次；进料/期末量；处理状态；含水方法；期初/期末库存；日期；实际雨水吸收/排液；服务路线；能源；水蒸气基准；不合格料/接收方；具体排放物质/相关粒径组分；接收区室；实际燃料设备活动；实测量或活动因子证据 |静置前后称量匹配批次，记录库存及实际水变化；计量服务及水的独立平衡，不把全部质量损失视为蒸发；逐物质实测或有据计算直接排放，不重复供应服务及水蒸气 | 分别记录实际 kg、MJ、h，保留运输原生单位 | 每批次/转运及库存期间 | 实际静置及交付期间 | 每场地及转运责任方 | 每 1 kg 参考流 | 配对批次、含水测试、实际路线及完整期初期末库存 |
| `cp_boiling` | simple_boiling | 软木、供水/取水、热、服务及出口 | 运行/浴液/稳定化记录 | 批次；进料/输出湿量；含水；批次/连续模式；运行日期；实际温度时间；新水来源；循环；保留水/水蒸气/液体；溶解悬浮物；能源；共享服务；清理换批；接收方；污染物 | 计量实际进料/新水及出水，称量软木并检测含水/提取物；独立追踪循环浴液，计量能源及实际运行清理换批 | 分别记录实际 kg、MJ、h | 每实际运行/浴液及稳定化批次 | 实际处理及稳定化期间 | 每水煮设备及稳定化责任方 | 每 1 kg 参考流 | 仪表校准、匹配湿干水平衡、运行总量及实际处理接收方 |
| `cp_handover` | qualification_handover |最终软木、其他等级、包装、能源、服务及不合格料及直接排放 | 验收/包装/交付记录 |来源批次；实际状态；树种；剥取类型；形态背皮；毛皮净量；含水方法基准；等级；各等级接收方；交接点日期；包装材料复用；服务；拒收退回路径；具体排放物质/相关粒径组分；接收区室；实际燃料设备活动；实测量或活动因子证据 |用经校准秤称量排除包装的验收软木，识别实际状态及等级；核对全部其他输出库存及实际展示复用；逐物质实测或有据计算直接排放，不重复供应服务及水蒸气 | 分别记录实际 kg、MJ、h | 每验收批次及对应分级/包装运行 | 实际验收及交付报告期 | 每贡献交接场址 | 每 1 kg 参考流 | 校准称量、匹配验收交付单、等级阈值及接收退回证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `record_normalization` | 所有清单行 | 汇总匹配批次覆盖下每项独立识别归属交换，除以同一验收参考批次净 kg；最终验收产品为声明 1 kg 参考流。保留实际分子单位及有据上游/共享输出份额。 | 过程记录；验收净质量；cp_handover | 每 1 kg 参考流数量 | |
| `state_reconciliation` | 软木及水台账 | 核对实测进料加实际加入及期初库存，对照验收/其他产品、废物、实际基本出口及期末库存；分别追踪软木干物质、水及提取物，解释残差而不自动采用蒸发或产率因子。 | 配对批次；含水基准；雨水/用水；库存接收记录 | 透明状态及水平衡 | |
| `aggregation` | 多场址及跨期数据 | 列出每场址及来源部分，在匹配产品/状态/交接覆盖下汇总归属量及验收净质量，再由总量导出质量加权强度；披露排除贡献者及异质性，不无权重平均场址强度或重复转移批次。 | 场址/期间 id；验收质量；归属记录 | 有代表性的覆盖批次清单 | |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `identity_quality` | 全部交换及参考 | 最终数据集须声明实际产品/物质、来源、状态、交接点、介质及核实具体 UUID/支持；汇总或未解决身份不等于获准最终交换 | 精确身份及支持证据、验收及接收记录 |
| `coverage_quality` | 阶段、场址及运行 | 列出每贡献林分/场址及自有阶段/运行，关联全部数量事件至其边界，记录场址权重/异质性及实际绕过操作 | 阶段场址登记、来源份额、分配核对 |
| `mass_quality` | 投入、库存及输出 | 保持匹配批次净湿量、干物质及水平衡，记录雨水吸收、溶解物、储存变化及实际去向；行业/FAO 示范数字不是默认因子 | 配对称量、含水方法、浴液及库存平衡 |
| `range_quality` | 全部卡 | 暂定数字筛选仅是作者推理，有审查当地经验范围时须替换；超界触发说明而不是截断或自动拒绝，不混淆不存在、缺记录及实测零 | 采集观测、不确定性声明及超界审查 |
| `burden_quality` | 上游及共享操作 | 缺来源、库存、期间、资产或不合格料负担均是数据缺口，披露未解决份额及敏感性，不赋零、通用寿命或假定碳抵扣 | 来源覆盖、使用节点及期间份额、不确定性证据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_gate` | 最终参考 | 要求一个实际允许原始/简单状态及生产者交接点并有完整限定条件；拒绝下游去背/成型/颗粒/成品参考，不因某状态有 UUID 而替代实际状态。 | `unsd-cpc3-notes` |
| `reference_check` | cork_handover 及数量 | 确认最终净量 1 kg、全部清单每 1 kg 参考流及 cp_handover 匹配分母，其他进料/转移仍实测而非固定参考量。 | |
| `route_check` | 来源及过程图 | 验证母活动/来源差异证据、同一来源部分互斥表示及实际操作激活，含实际萌芽林伐采/木材责任；缺来源状态不得默认未激活。 | |
| `balance_check` | 质量、库存及水 | 核对自有接口湿干软木、留存库存、加入量、液体/水蒸气/提取物出口、损失及其他产品，调查残差及暂定筛选超界而不替代真实记录。 | |
| `owner_check` | 运行、场址、期间及共享负担 | 要求完整场址/阶段/运行及份额登记，含实际清理换批和替换终止；共同负担核对为一个总量，不重复来源库存、资产、服务或上游排放。 | |
| `destination_check` | 分级、包装及不合格料 | 列出全部实际等级/产品接收方、废物处理及返工/退回路径；验收排除未解决不合格料，披露包装复用及使用结束而不计入软木净量。 | |
| `identity_check` | 具体数据集交换 | 核实每项实际具体交换的精确 UUID 及属性单位支持，说明各直接污染物及实际区室；语义汇总、笼统 VOC/粉尘或未解决产品 UUID 不是核实交换。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | 同一实际软木状态及交接点的 secondary_dataset; background_dataset |
| allowed_use | 已披露负担及实际处理的声明原始/简单处理软木批次来源生产或消耗 |
| excluded_use | 自动代理去背/成型/颗粒/聚结软木、软木塞或成品；整树碳抵扣；未区分原始处理状态混合 |
| required_metadata | 树种；剥取类型；来源状态；背皮包含；含水基准；等级；自有/绕过节点；母活动/差异来源路线；交接点；日期；贡献者；来源覆盖；库存及负担归属 |
| required_quality_disclosure | 完整性、校准、分配汇总证据、原生单位换算、经验及暂定 Range、不合格料去向、身份支持缺口及不确定性 |
| update_trigger | 产品状态、来源责任路线、处理、交接点、等级、场址期间组合、分配、证据或具体交换身份改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | UNSD CPC 3.0 解释注释，03220 及 31921/31922；https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf；访问 2026-10-08 | 原始/简单类别及下游软木形态排除，不提供量值因子 |
| `fao-cork-primary-handling` | official_guidance | FAO《温带及北方阔叶树非木材林产品》第 6 章；https://www.fao.org/4/y4351e/y4351e0a.htm；访问 2026-10-08 | 反复树皮采收与实际萌芽林木/皮来源背景及初级处理；不采用历史树龄、间隔、产量或统计 |
| `apcor-cork-transformation` | extension_guidance | APCOR Transformation Process；https://apcor.pt/en/transformation-process；访问 2026-10-08 | 静置、水煮、稳定化与下游制造区分；不采用示范时间、含水及膨胀数值 |

上述采集、负担责任、归一化及 QA 实施是声明的前景方法。来源说明只提供路线及类别背景，不是固定清单配方、因子、法定采收阈值或通用数字 Range。
