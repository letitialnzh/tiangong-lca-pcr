---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-bovine-animals
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他牛亚科动物活体

## 1. 适用范围

本 PCR 适用于牛亚科中未归入另列的牛属（*Bos*）牛类及水牛/野牛属（*Bubalus*、*Syncerus*、*Bison*）的活体，且仅在逐物种分类决定获得证明后纳入剩余牛类。蓝牛羚（*Boselaphus tragocamelus*）是有条件的实例：ITIS 将其列入牛亚科，但联合国并未明确将该物种列在 CPC 02119，且在 02129 的剩余反刍动物说明中提到羚羊。每个实际批次必须记录分类单元、CPC/HS 判断、合法来源、活体状态及真实交接点，不得同时计入 02119 和 02129。分类或迁移要求本身不等于许可。死亡动物、肉、皮、捕后放归的科研活动以及交接点之后的买方运输均不在范围内。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-bovine-animals` |
| classification_refs | CPC 3.0 `02119`，须有逐物种剩余类决定 |
| covered_products | 有来源证明并在养殖者或获准捕获来源处真实交接的牛亚科剩余类活体；蓝牛羚仅在剩余分类论证获接受时适用 |
| excluded_products | 牛属动物，包括牦牛、野牛、印度野牛和爪哇野牛；水牛属、非洲水牛属和野牛属；逐项审查后归入 02129 的动物；死体及交接后产品 |
| representative_product | 一个合格已申报物种在真实交接点的 1 kg 实测活体质量 |
| production_route | 有记录的圈养/牧场繁育饲养，或单独获准的捕获及活体转移；同一批次不得同时具有两种来源历史 |
| market_state | 活体、未加工，已确认物种/类别、状态和合法来源 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一个已申报物种和来源路线的牛亚科剩余类活体 |
| How much | 1 kg 实测活体质量，并记录头数及个体或批次称量 |
| How well | 核实物种/分类单元、年龄性别类、存活与健康状态、所有权/保管链和合法来源 |
| How long or cycle | 饲养存栏及设施的实际期间，或获得授权的真实捕获行动期 |
| reference_flow_link | `live_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 具物种、来源和交接点限定的其他牛亚科动物活体 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 科学物种名及牛亚科证据；02119 与 02129 分类决定；辖区和授权；养殖/捕获路线；头数；性别年龄类；实测质量；存活状态；存栏/行动期；真实交接点 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live_mass` | 每次活体转移和参考流 | 质量 | kg | 在每一真实交接点记录实测活体质量与头数，不得采用通用 kg/头 系数。 |
| `m_period` | 存栏、捕获和共用设施 | 时间 | 已申报日或期间 | 将实际投入、死亡、移动和产出关联到唯一的存栏/行动期及设施服务期间。 |
| `m_balance` | 活体台账 | 头数及质量 | 头、kg | 对期初/购入、出生或捕获、死亡、活体转移及期末存栏进行不重复的平衡。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 养殖路线：有记录的期初群或购入繁殖/幼畜及其前序负担；捕获路线：明确获准的自由活动来源与行动期，不虚构终生饲养。 |
| starting_condition_role | 受管理生物存栏或合法捕获情境；购入动物为带上游负担的产品投入。 |
| product_classification_scope | 排除另列类别并明确解决蓝牛羚/其他羚羊与 02129 重叠后的逐物种牛亚科剩余类活体。 |
| recursive_input_rule | 对同类购入活体只链接一次前一交接点数据；内部活体转移不是另一最终产品。 |
| upstream_dataset_requirement | 核对购入动物、饲料、供水、能源和服务的供应者、物料身份、地理、单位及交接点；保留来源、保管和迁移许可。 |
| disclosure | 分类单元及 CPC 决定、合法来源、路线、存栏/行动期、实测头数/质量、损失、设施期间、真实交接及未解析身份。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_class` | 每一批次 | 证明属于牛亚科且不属于另列的牛属/水牛野牛属；记录为什么带“羚羊”名称的物种不归入 02129。蓝牛羚是分类推断，不是联合国明确点名。 | `un-cpc3-2025`; `itis-nilgai`; `un-cpc21-2015` |
| `b_managed` | 受管理来源 | 记录真实繁育饲养、购入动物前序负担、饲养及存栏期间变化，直至活体移交。 | `fws-nilgai-zoo-2019` |
| `b_capture` | 获准捕获来源 | 独立捕获节点须有实际合法授权、行动记录、存活动物及目的地交接；捕后放归的科研活动不属于上市活体参考产出。 | `usda-nilgai-capture-2023`; `tahc-exotics-movement` |
| `b_gate` | 两种路线 | 止于一个真实活体来源交接；不含屠宰、尸体产品和交接后买方运输。 | `un-cpc3-2025`; `nandankanan-nilgai-exchange`; `tahc-exotics-movement` |
| `b_shared` | 设施及设备 | 将共用圈舍、供水和操作服务按实际使用节点及期间分配一次。 | `fws-nilgai-zoo-2019` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed` | 繁育饲养合格的剩余类牛亚科动物 | conditional | 有记录的受管理存栏与实际饲养 | 生物生产及活体存栏交接 | 每 kg 验收活体产出 |
| `capture` | 独立捕获并短暂留置合格的剩余类牛亚科动物 | conditional | 有活体转移的真实获准行动，且与受管理来源互斥 | 捕获、福利及损失交接 | 每 kg 验收活体产出 |
| `gate` | 挑选、称量并交接活体动物 | required | 一个真实养殖/捕获来源交接点 | 活体验收及参考产出 | 每 kg 验收活体产出 |

圈养蓝牛羚出生证明受管理繁育可发生；另有蓝牛羚科研捕获证据，但捕后放归**不是**产品路线。下述捕获过程只有在获准且真实转移活体时才适用。每一批次只选一种来源路线；未发生的投入为零须有未使用记录。不能预设另有独立共产品；如确有独立移交产品，应先识别其流与归属。死亡动物及粪肥不是活体产品。

### 过程：繁育饲养合格的剩余类牛亚科动物（`managed`）

#### 输入

##### 产品流

###### 购入的活体繁殖畜或幼畜（`managed_stock`）

保留供应者负担，将期初存栏与新增购入分开记录。

分母与范围要求：每 kg 验收活体产出

- 选定流：逐物种其他牛亚科动物活体存栏；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按类别和进入事件称量购入及期初动物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animals`
- 数量范围：暂定非负存栏筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供给受管理存栏的饲料（`managed_feed`）

计入购入或外供饲料；原地放牧作为土地/管理情境申报，不虚构购入流。

分母与范围要求：每 kg 验收活体产出

- 选定流：按真实物料身份确定的外供饲料；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按存栏与期间从发票或称量记录取得干基/原状质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 数量范围：暂定非负外供饲料筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮用与饲养供水（`managed_water`）

记录计量或分摊的供水，不计雨水。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实供水
- 流属性/单位：质量 / kg
- 数量规则：按实际动物及设施期间计量或核对供水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 数量范围：暂定非负供水筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 受管理设施能源（`managed_energy`）

记录圈舍、供水和操作的实际电力或燃料；按期间分配共用服务。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实能源载体
- 流属性/单位：能源或质量 / kWh 或 kg
- 数量规则：按能源载体、节点及期间计量或核对实际用量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 数量范围：暂定非负设施能源筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kWh 当量/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交由验收的受管理活体动物（`managed_live`）

这是存活动物的内部转移，不是第二次出售。

分母与范围要求：每 kg 验收活体产出

- 选定流：受管理来源出口的逐物种其他牛亚科动物活体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按物种类别和期间称量、计数转移的活体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animals`
- 数量范围：暂定活体转移对账筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 受管理存栏死亡尸体（`managed_deaths`）

按死亡原因和合法处置去向记录，不计作活体产出。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实处置交接点的其他牛亚科动物尸体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按存栏、事件及去向计量死体质量和头数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_losses`
- 数量范围：暂定非负死亡筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 受管理存栏弃置粪肥（`managed_manure`）

此处仅列跨边界的废弃粪肥；若确有单独销售的粪肥，应另立有证据的产品卡。

分母与范围要求：每 kg 验收活体产出

- 选定流：按去向确定的真实弃置粪肥；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：称量或核算收集后弃置的粪肥，不含牧场原地排泄。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_losses`
- 数量范围：暂定非负粪肥筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：独立捕获并短暂留置合格的剩余类牛亚科动物（`capture`）

#### 输入

##### 产品流

###### 行动能源载体（`capture_energy`）

仅计获准捕获/留置行动实际消耗的燃料或电力。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实行动能源载体
- 流属性/单位：能源或质量 / kWh 或 kg
- 数量规则：按行动和活体转移计量或分摊真实能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定非负捕获能源筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kWh 当量/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 短暂留置供水（`capture_water`）

记录真实留置用水；零用水须有未使用记录。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实供给的留置用水
- 流属性/单位：质量 / kg
- 数量规则：按捕获批次与留置期间计量或核对供水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定非负留置用水筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 一次性捕获和福利耗材（`capture_materials`）

保留真实物料身份；可复用器具为跨行动分配的设施服务，不重复计作消耗品。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实一次性捕获/留置物料；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：从发放及消耗记录计数或称量行动耗材。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定非负耗材筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交由验收的存活捕获动物（`captured_live`）

仅记录确实以活体交接的动物；捕后放归不属于本产品路线。

分母与范围要求：每 kg 验收活体产出

- 选定流：获准捕获出口的逐物种其他牛亚科动物活体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按行动、类别与目的地计量存活转移的质量与头数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定活体捕获转移筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 捕获及留置死亡动物（`capture_deaths`）

将死体与存活捕获及合法放归分开记录。

分母与范围要求：每 kg 验收活体产出

- 选定流：捕获路线产生的真实其他牛亚科动物尸体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按行动计量死亡头数/质量及处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_losses`
- 数量范围：暂定非负捕获损失筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：挑选、称量并交接活体动物（`gate`）

#### 输入

##### 产品流

###### 来自唯一来源的活体动物（`gate_in`）

仅链接一次受管理来源或捕获来源的活体转移；购入批次须保留供应者负担。

分母与范围要求：每 kg 验收活体产出

- 选定流：来源至交接点转移的逐物种其他牛亚科动物活体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：称量并核对进入的头数、类别与路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animals`
- 数量范围：暂定进入活体对账筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 适用于物种的活体防护容纳材料（`gate_containment`）

仅计真实一次性容纳材料；可复用箱笼或设施按共用资产服务处理。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实防护容纳材料
- 流属性/单位：质量 / kg
- 数量规则：按验收活体交接实际使用量计数或称量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 数量范围：暂定非负容纳材料筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 真实交接点验收的其他牛亚科动物活体（`live_output`）

这是唯一参考产出，不是跨物种平均流。

分母与范围要求：每 kg 验收活体产出

参考产出的原始记录：加总实测验收活体质量并归一化为 1 kg。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- 选定流： 具物种、来源和交接点限定的其他牛亚科动物活体
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_animals`
- 数量范围：精确参考归一化
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集计算（`calculated_from_collection`）

###### 验收前退回的活体动物（`gate_return`）

仅真实退回来源的活体为产品转移，绝非第二次最终出售或废物。

分母与范围要求：每 kg 验收活体产出

- 选定流：逐物种退回的活体动物；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：称量和计数退回动物；后续重新饲养须链接真实新增责任。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_animals`
- 数量范围：暂定非负活体退回筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 活体交接前死亡动物（`gate_deaths`）

死体具有独立处置去向，不能进入活体参考产出。

分母与范围要求：每 kg 验收活体产出

- 选定流：交接点真实其他牛亚科动物尸体；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：计量交接前死亡头数/质量及处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_losses`
- 数量范围：暂定非负交接损失筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_live_only` | 来源及交接点 | 已申报基线仅有一种预期活体产品；死亡动物、弃置粪肥和科研放归不得分配为共产品。如有单独销售的新增产品，须先有其独立实测交换及明确归属决定。 | `fws-nilgai-zoo-2019` |
| `a_period` | 受管理存栏及捕获行动 | 将期初存栏、投入、损失、替换和验收动物归于真实存栏/行动期及报告期间；不得按假定通用寿命摊销。 | `fws-nilgai-zoo-2019`; `usda-nilgai-capture-2023` |
| `a_shared` | 圈舍、供水和操作设施 | 依记录的使用情况在真实消耗的来源/交接节点及服务期间分配每项共用设施或服务，且只计一次。 | `fws-nilgai-zoo-2019` |
| `a_transfer` | 活体移动 | 来源至交接点的内部转移及退回均为平衡项，绝非新增最终产出。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animals` | `managed`; `gate` | 活体存栏、转移及参考流 | 存栏台账；称量单；保管记录 | 物种；分类单元；来源；类别；头数；活体 kg；事件时间；交接点；接收方；授权 | 标识、称量真实动物并逐批对账；原始汇总要求：只加总一次验收 kg，退回另列。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg | 每次移动及期间结账 | 全部存栏与交接期间 | 单一操作及真实交接点 | 每参考流 | 校准称；身份台账；签收单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_inputs` | `managed`; `gate` | 饲料、供水、能源、容纳材料 | 发票；计量表；物料发放记录 | 物料；数量；单位；供应方；节点；服务期间 | 计量或核对真实供给量；原始汇总要求：按载体/物料加总，共用量只分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；kWh | 每次供给及期间结账 | 完整服务期间 | 实际使用节点 | 每参考流 | 发票；计量表；库存台账；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_capture` | `capture` | 行动与活体捕获 | 许可；行动日志；称量单 | 授权；地点；物种；头数；活体质量；燃料；供水；耗材；放归/死亡/转移；目的地 | 记录获准操作与真实活体交接；原始汇总要求：只有存活且移交的动物成为活体产出。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg；kWh | 每次行动事件 | 真实行动及留置期间 | 获准来源与交接点 | 每参考流 | 许可；日志；签收单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_losses` | `managed`; `capture`; `gate` | 死亡及弃置粪肥 | 兽医；处置；粪肥台账 | 物种；质量；头数；原因；去向；期间 | 按物质分开称量或核对真实损失；原始汇总要求：各废物只加总一次，不含活体退回。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 头；kg | 每次事件及期间结账 | 所有来源及交接期间 | 真实节点 | 每参考流 | 兽医记录；处置收据；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_reference` | 最终活体交接点 | 加总一个交接点的实测验收活体 kg，以此除各边界内数量，并核对头数/质量台账平衡。 | `cp_animals`; `cp_capture`; `cp_losses` | 每 kg 验收活体产出数量 | `tahc-exotics-movement` |
| `c_shared` | 共用服务 | 将有记录的服务按真实使用节点和期间分配一次后再归一化；保留分母及期间证据。 | `cp_inputs`; `cp_animals` | 每 kg 活体产出的归属服务量 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_class` | 每一批次 | 证明分类单元及 02119 相对于 02111/02112/02129 的剩余定位，不得只看俗名。 | 分类学记录；分类决定 |
| `dq_legal` | 每一批次 | 证明来源、保管、迁移/捕获权限和接收方；科研放归不是上市产出。 | 许可；来源及交接记录 |
| `dq_mass` | 参考流及转移 | 实测活体质量和头数，核对退回及死亡，不假定 kg/头。 | 称量单；动物台账 |
| `dq_period` | 存栏/行动及设施 | 覆盖完整报告期间并只分配一次共用负担。 | 服务及事件台账 |
| `dq_uuid` | 最终交换 | 下游 TIDAS 交换发布前核实精确流、流属性和单位组。 | 平台详情及支持行证据 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_class` | 每个数据集 | 拒绝缺少物种、未说明与 02129 重叠，或已归入牛类/水牛/野牛的动物。 | `un-cpc3-2025`; `itis-nilgai`; `un-cpc21-2015` |
| `v_route` | 每一批次 | 要求恰好一种来源路线、真实合法权限和活体转移；捕后放归不得作为产品产出。 | `usda-nilgai-capture-2023`; `tahc-exotics-movement` |
| `v_balance` | 存栏及产出 | 对期初/购入/捕获、出生、转移、退回、死亡和期末存栏进行头数及质量平衡；只有验收活体为参考产出。 | |
| `v_period` | 设施及存栏 | 要求真实服务期间、使用节点及不重复的共用归属；不得假定通用寿命或捕获产率。 | |
| `v_identity` | 未绑定卡片 | 未确认 UUID 留空；最终具体交换须有精确流、流属性和单位组证据。 | |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 前景逐物种牛亚科剩余类活体数据集 |
| downstream_use | `secondary_dataset`；仅在物种/交接点专项审查后可作 `background_dataset` |
| allowed_use | 一个合格物种、已记录的剩余分类、合法来源及真实活体交接 |
| excluded_use | 跨物种平均；无证明捕获或转移；科研放归；死亡动物；交接后运输 |
| required_metadata | 分类单元及分类理由；许可；路线；头数/质量；类别；存栏/行动期；交接点；期间；损失；身份依据 |
| required_quality_disclosure | 法律与分类不确定性、质量测量、清单缺口、暂定 Range 及未解析 UUID |
| update_trigger | 新的官方 CPC/HS 归类、物种/路线变化、迁移限制、交接点变化或核实的流身份 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | [联合国 CPC 3.0 解释说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 另列牛/水牛排除及剩余类别 |
| `un-cpc21-2015` | official_guidance | [联合国 CPC 2.1 与 HS 0102.90 对照](https://unstats.un.org/unsd/classifications/unsdclassifications/cpcv21.pdf) | 剩余牛类分类解释 |
| `itis-nilgai` | dataset | [ITIS 蓝牛羚分类](https://www.itis.gov/servlet/SingleRpt/SingleRpt?search_topic=TSN&search_value=552477) | 牛亚科归属，不是交易许可 |
| `fws-nilgai-zoo-2019` | official_guidance | [美国鱼类与野生动物管理局许可档案中的圈养蓝牛羚出生记录](https://downloads.regulations.gov/FWS-HQ-IA-2019-0102-0003/content.pdf) | 受管理繁育路线证据，不是具体批次授权 |
| `nandankanan-nilgai-exchange` | dataset | [Nandankanan 动物园蓝牛羚交换记录](https://nandankanan.org/mobile/exchange-of-animals.php) | 机构间真实活体移交证据，不证明普遍销售或一概许可 |
| `usda-nilgai-capture-2023` | literature | [USDA ARS 蓝牛羚活体捕获研究摘要](https://www.ars.usda.gov/research/publications/publication/?seqNo115=393616) | 独立捕获及福利问题，不证明产品出售 |
| `tahc-exotics-movement` | official_guidance | [得州动物卫生委员会外来牲畜迁移要求](https://www.tahc.texas.gov/regs/pdf/MovementRequirements_Exotics-Ratites.pdf) | 蓝牛羚活体迁移控制问题，不是普遍法律许可 |
