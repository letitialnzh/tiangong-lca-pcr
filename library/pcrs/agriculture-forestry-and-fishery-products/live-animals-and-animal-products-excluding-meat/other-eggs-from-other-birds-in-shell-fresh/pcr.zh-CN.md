---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-eggs-from-other-birds-in-shell-fresh
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他鸟类非孵化用鲜壳蛋

## 1. 范围与适用性

本规则覆盖在生产者农场门口以实际非孵化用途交付的其他鸟类鲜态带壳蛋，包括食用及有记录的其他未孵化用途，而非仅限人食用餐桌蛋。排除鸡蛋、孵化蛋、破壳、液态、保存或加工蛋及孵出鸟类。管理型产蛋、独立收蛋与农场门口交付为必需过程；场内分选和防护包装仅在实际实施时纳入。按物种和批次保留质量、枚数、等级、用途、安全性、储存时长和条件及真实门槛。每 kg 质量不表示跨物种等营养或等功能。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-eggs-from-other-birds-in-shell-fresh |
| classification_refs | CPC 3.0: 02322 其他鸟类鲜壳蛋 |
| covered_products | 其他鸟类鲜态带壳蛋，实际以非孵化用途交付，包括食用及有记录的其他用途。 |
| excluded_products | 鸡蛋、孵化蛋、破壳/液态/加工蛋、孵出鸟类及交付后加工。 |
| representative_product | 农场门口实测一 kg 其他鸟类完整鲜壳蛋。 |
| production_route | 管理型鸟群产蛋为母过程；有证据的物种和笼养、舍养、户外路线改变饲料、水、粪污、清洁、破损及储存清单与质控。互斥鸟群路线分别归一化，随后是独立收集和条件性分选/包装。 |
| market_state | 鲜态、带壳、非孵化用途交付，声明物种、枚数、质量、等级、安全状态、包装与门槛。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际生产者农场门口交付的其他鸟类非孵化用鲜壳蛋。 |
| How much | 一 kg 实测可交付带壳质量；保留枚数及本批平均质量。 |
| How well | 完整、安全、鲜态，声明物种、等级、用途与储存条件。 |
| How long or cycle | 声明的鸟群产蛋及报告期间，关联育成与退出。 |
| reference_flow_link | `reference_eggs` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 农场门口其他鸟类非孵化用鲜壳蛋 `c533a91e-a111-484e-a6a5-8fb8d3c41363` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种/品系；批次枚数与实测质量；等级、安全与非孵化用途；时间/温度/湿度；包装；实际门槛；鸟群期间 |

已核实的 CPC 02322 产品/质量 UUID 与明确的农场门口带壳参考流及末端产出相符；它不授权鸡蛋、孵化蛋、加工蛋、仅按枚计数或其他交付门槛的交换。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mass` | 参考蛋 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量不含包装的带壳质量，并按物种与批次核对各节点及库存。 |
| `count` | 所记录枚数到本批实测质量的换算 | 枚数及实测质量 | eggs; kg | 将枚数保留为独立观测量。仅用本批实测或代表性抽样均重求得本批质量；不可套用跨物种均重，也不可声称枚数本身具有质量属性。 |
| `feed` | 饲料 | 质量 | kg 原样；kg 干物质 | 合并饲料原样与干物质数据前保留实测换算与来源。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 入群鸟或场内育成历史，以及购入饲料、供应水、能源、健康用品及条件性包装。 |
| starting_condition_role | 管理型产蛋经独立收集、条件性分选/包装至农场门口交付。 |
| product_classification_scope | CPC 3.0 02322；鸡蛋、孵化与加工蛋、淘汰鸟及粪污具有独立身份。 |
| recursive_input_rule | 外购同类蛋保留供应商数据集与独立转移，不得重复建立上游产蛋或计作本场产出。 |
| upstream_dataset_requirement | 鸟、饲料、水、能源、用品及包装的上游数据须按物种、状态、供应商、地域和技术匹配。 |
| disclosure | 声明物种、路线、鸟群与阶段、节点门槛、破损/转用/废弃、储存条件、共同产出、共享设施及归属。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `farm_gate` | 全部路线 | 纳入产蛋、独立收集和实际场内分选/包装直至生产者农场门口；排除下游孵化、加工与配送。 | `fao-codex-eggs`; `fao-leap-poultry` |
| `route_delta` | 物种/饲养路线 | 相对于管理型产蛋母过程，凭证实各鸟群饲料、水、垫料/粪污、清洁、能源及储存的清单与质控差异。 | `fao-codex-eggs`; `fao-leap-poultry` |
| `collection` | 新产蛋 | 独立收蛋前后计数、称量并记录破损；场内转移并非最终销售。 | `fao-codex-eggs`; `fao-leap-poultry` |
| `conditional` | 分选/包装 | 分选须至少两个真实去向及交付；包装须记录材料、复用及防护前后状态。 | `fao-codex-eggs`; `fao-leap-poultry` |
| `period_assets` | 鸟群/共享设施 | 育成、产蛋、退出以及共用禽舍/收集/分选设施按节点和期间归属，来源负担仅计一次。 | `fao-codex-eggs`; `fao-leap-poultry` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `laying` | 管理型产蛋 | required | 所有覆盖路线。 | 独立记录状态、损失及交付。 | kg 带壳蛋及枚数。 |
| `collection` | 独立收蛋 | required | 所有覆盖路线。 | 独立记录状态、损失及交付。 | kg 带壳蛋及枚数。 |
| `sorting` | 生产者端用途分选 | conditional | 仅场内实际实施时。 | 独立记录状态、损失及交付。 | kg 带壳蛋及枚数。 |
| `packing` | 生产者端防护包装 | conditional | 仅场内实际实施时。 | 独立记录状态、损失及交付。 | kg 带壳蛋及枚数。 |
| `handover` | 农场门口交付 | required | 所有覆盖路线。 | 独立记录状态、损失及交付。 | kg 带壳蛋及枚数。 |

### 过程： 管理型产蛋 (`laying`)

#### 输入

##### 产品流

###### 入群产蛋鸟 (`birds`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 入群产蛋鸟
- 流属性/单位： 质量 / kg 活体质量
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_flock`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 10
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 饲料与补充物 (`feed`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 饲料与补充物
- 流属性/单位： 质量 / kg 原样
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_feed`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 供应水 (`water`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 供应水
- 流属性/单位： 体积 / L
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： L/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 禽舍能源载体 (`energy`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 禽舍能源载体
- 流属性/单位： 能量 / MJ
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： MJ/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

无预设交换；实际发生时逐项核实。

##### 基本流

无预设交换；实际发生时逐项核实。

#### 输出

##### 产品流

###### 新产带壳蛋 (`laid_eggs`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 新产带壳蛋
- 流属性/单位： 质量 / kg；保留枚数
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_lots`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 独立销售的淘汰鸟 (`spent_birds`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 独立销售的淘汰鸟
- 流属性/单位： 质量 / kg 活体质量
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_flock`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 未独立销售的粪污 (`manure`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 未独立销售的粪污
- 流属性/单位： 质量 / kg 湿重；保留氮量
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_manure`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

无预设交换；实际发生时逐项核实。

### 过程： 独立收蛋 (`collection`)

#### 输入

##### 产品流

###### 从产蛋节点接收的蛋 (`collect_in`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 从产蛋节点接收的蛋
- 流属性/单位： 质量 / kg 带壳
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_lots`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

无预设交换；实际发生时逐项核实。

##### 基本流

无预设交换；实际发生时逐项核实。

#### 输出

##### 产品流

###### 完整收集蛋 (`collected`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 完整收集蛋
- 流属性/单位： 质量 / kg 带壳
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_lots`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 收集时破损或不安全蛋 (`broken`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 收集时破损或不安全蛋
- 流属性/单位： 质量 / kg
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_lots`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

无预设交换；实际发生时逐项核实。

### 过程： 生产者端用途分选 (`sorting`)

#### 输入

##### 产品流

###### 进入分选的完整蛋 (`sort_in`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 进入分选的完整蛋
- 流属性/单位： 质量 / kg 带壳
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

无预设交换；实际发生时逐项核实。

##### 基本流

无预设交换；实际发生时逐项核实。

#### 输出

##### 产品流

###### 合格非孵化用蛋 (`accepted`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 合格非孵化用蛋
- 流属性/单位： 质量 / kg 带壳
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 独立接收的转用途蛋 (`diverted`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 独立接收的转用途蛋
- 流属性/单位： 质量 / kg 带壳
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 不安全且未获接收的废弃蛋 (`rejects`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 不安全且未获接收的废弃蛋
- 流属性/单位： 质量 / kg
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

无预设交换；实际发生时逐项核实。

### 过程： 生产者端防护包装 (`packing`)

#### 输入

##### 产品流

###### 进入包装的合格蛋 (`pack_in`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 进入包装的合格蛋
- 流属性/单位： 质量 / kg 带壳
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_pack`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 防护包装材料 (`package`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 防护包装材料
- 流属性/单位： 质量或件数 / kg 或件
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_pack`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

无预设交换；实际发生时逐项核实。

##### 基本流

无预设交换；实际发生时逐项核实。

#### 输出

##### 产品流

###### 包装后受保护的蛋 (`protected`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 包装后受保护的蛋
- 流属性/单位： 质量 / kg 带壳
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_pack`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

无预设交换；实际发生时逐项核实。

##### 基本流

无预设交换；实际发生时逐项核实。

### 过程： 农场门口交付 (`handover`)

#### 输入

##### 产品流

###### 进入农场门口交付的蛋 (`handover_in`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

- 选定流： 进入农场门口交付的蛋
- 流属性/单位： 质量 / kg 带壳
- 数量规则： 按实际物种、批次及节点计量，并与相邻节点和库存核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_gate`
- 来源： `fao-codex-eggs`
- 数量范围： 暂定且可替换的宽泛筛查范围
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 100
  - 单位： kg/kg reference
  - 基准： 非合规限值；以审查后的批次数据替代
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

无预设交换；实际发生时逐项核实。

##### 基本流

无预设交换；实际发生时逐项核实。

#### 输出

##### 产品流

###### Fresh non-hatching other-bird eggs at farm gate (`reference_eggs`)

按物种、批次及实际节点记录实物身份与去向；不得从名称推断其他状态。

分母与范围要求：每 kg 农场门口交付的其他鸟类非孵化用鲜壳蛋

参考产出的原始记录：实测交付鲜壳蛋质量，按一 kg 归一化并保留枚数。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- 选定流： Fresh non-hatching other-bird eggs at farm gate `c533a91e-a111-484e-a6a5-8fb8d3c41363`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定 (`fixed`)
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_gate`
- 来源： `fao-codex-eggs`
- 数量范围： 参考归一化恒等式
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg reference
  - 基准： 实测参考产出除以自身
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：方法公式 (`method_formula`)
  - 来源： `fao-leap-poultry`

##### 废物流

无预设交换；实际发生时逐项核实。

##### 基本流

无预设交换；实际发生时逐项核实。

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `cooutputs` | 蛋、淘汰鸟及外售粪污 | 先直接归属可分过程。仅对实证独立交付的共同产出使用实测物理因果分摊；否则用同期农场门口经济份额并披露敏感性。废物不获产品份额。 | `fao-codex-eggs`; `fao-leap-poultry` |
| `period` | 育成/产蛋/退出 | 入群/育成负担仅在实际产蛋服务期分配一次，并核对期初期末鸟群存量。 | `fao-codex-eggs`; `fao-leap-poultry` |
| `shared` | housing/collection/分选/包装 assets | 记录每个使用节点与期间；按实测占用、工时或吞吐分摊，份额合计等于来源总量。 | `fao-codex-eggs`; `fao-leap-poultry` |
| `grade` | 合格、转用与废弃 | 每个状态仅在一个交付点计一次；孵化转用须有适用性，加工转用须有合法接收，否则为损失或废物。 | `fao-codex-eggs`; `fao-leap-poultry` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_flock` | `laying` | 鸟群入群/退出与移交 | 原始台账 | 鸟群入群/退出与移交 | 台账、校准秤、表计及移交票据；原始汇总要求：按物种、鸟群、节点及期间汇总，除以实测参考 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; count; use-specific | 每批/每月 | 全部报告期间 | 生产农场 | 每参考流 | 有日期的票据、校准及平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_feed` | `laying` | 饲料与干物质 | 原始台账 | 饲料与干物质 | 台账、校准秤、表计及移交票据；原始汇总要求：按物种、鸟群、节点及期间汇总，除以实测参考 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; count; use-specific | 每批/每月 | 全部报告期间 | 生产农场 | 每参考流 | 有日期的票据、校准及平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_utilities` | `laying` | 水与能源 | 原始台账 | 水与能源 | 台账、校准秤、表计及移交票据；原始汇总要求：按物种、鸟群、节点及期间汇总，除以实测参考 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; count; use-specific | 每批/每月 | 全部报告期间 | 生产农场 | 每参考流 | 有日期的票据、校准及平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | `laying` | 粪污质量、氮与去向 | 原始台账 | 粪污质量、氮与去向 | 台账、校准秤、表计及移交票据；原始汇总要求：按物种、鸟群、节点及期间汇总，除以实测参考 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; count; use-specific | 每批/每月 | 全部报告期间 | 生产农场 | 每参考流 | 有日期的票据、校准及平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_lots` | `collection` | 批次枚数、质量与破损蛋 | 原始台账 | 批次枚数、质量与破损蛋 | 台账、校准秤、表计及移交票据；原始汇总要求：按物种、鸟群、节点及期间汇总，除以实测参考 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; count; use-specific | 每批/每月 | 全部报告期间 | 生产农场 | 每参考流 | 有日期的票据、校准及平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_sort` | `sorting` | 合格、转用与废弃 grade mass | 原始台账 | 合格、转用与废弃 grade mass | 台账、校准秤、表计及移交票据；原始汇总要求：按物种、鸟群、节点及期间汇总，除以实测参考 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; count; use-specific | 每批/每月 | 全部报告期间 | 生产农场 | 每参考流 | 有日期的票据、校准及平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_pack` | `packing` | 包装材料与复用 | 原始台账 | 包装材料与复用 | 台账、校准秤、表计及移交票据；原始汇总要求：按物种、鸟群、节点及期间汇总，除以实测参考 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; count; use-specific | 每批/每月 | 全部报告期间 | 生产农场 | 每参考流 | 有日期的票据、校准及平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_gate` | `handover` | 物种、用途、枚数、质量与门槛 | 原始台账 | 物种、用途、枚数、质量与门槛 | 台账、校准秤、表计及移交票据；原始汇总要求：按物种、鸟群、节点及期间汇总，除以实测参考 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; count; use-specific | 每批/每月 | 全部报告期间 | 生产农场 | 每参考流 | 有日期的票据、校准及平衡；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `balance` | 蛋节点 | 在测量不确定度内，投入=合格+转用+废弃+库存变化。 | 批次质量与库存 | 核对后的 kg | `fao-codex-eggs` |
| `normalization` | 清单 | 实际鸟群/期间总量除以同范围实测交付鲜壳蛋 kg。 | 期间总量与交付质量 | per-kg 清单 | `fao-leap-poultry` |
| `asset` | 共享设施 | 依据实测服务驱动量分配的总量必须等于原始负担。 | 设施总量与节点使用 | 仅归属一次的负担 | `fao-leap-poultry` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | 参考蛋 | 证明非鸡、鲜态带壳、实际非孵化用途及生产者门口。 | 批次移交票据 |
| `coverage` | 节点 | 必需节点完整；条件节点仅凭实际操作启用。 | 操作日志 |
| `balance` | 蛋/损失 | 核对每个节点的枚数、质量、等级、废弃及库存。 | 称量及分选台账 |
| `shared` | 期间/设施 | 保留鸟群、期间、路线及共享使用证据，不得重复计入。 | 原始活动记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `identity_gate` | 参考蛋 | 要求非鸡、鲜态带壳、实测一 kg、实际非孵化用途及真实生产者门口；非食用的未孵化用途仍可纳入。 | `fao-codex-eggs` |
| `route_gate` | 节点 | Laying and independent collection required, 分选/包装 evidence-based; species and housing differences change 清单 or QA. | `fao-codex-eggs`; `fao-leap-poultry` |
| `grade_gate` | grades | 分选须至少两个真实去向；孵化/加工转用须有适用性及合法接收；破损蛋不得充作参考产出。 | `fao-codex-eggs` |
| `attribution_gate` | co-outputs/期间/设施 | 核实各交付、服务期间与分配总量，不得跨节点或期间重复。 | `fao-leap-poultry` |
| `uuid_gate` | concrete downstream exchanges | 进入下游 TIDAS 过程前逐项核实 UUID、属性及单位；空白项不得强绑。 | `fao-leap-poultry` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 其他鸟类非孵化用鲜壳蛋的生产者前景数据包。 |
| downstream_use | `secondary_dataset` or `background_dataset` 经审查并解析具体交换后。 |
| allowed_use | 具有物种、路线、非孵化交付和实测质量的鲜壳蛋。 |
| excluded_use | 鸡蛋、孵化/加工蛋、交付后活动及跨物种等功能主张。 |
| required_metadata | Species, flock, period, route, 节点, use, grade, count/mass, storage, packing, co-products and attribution. |
| required_quality_disclosure | 节点平衡、暂定 Range、未解析身份及物种/路线和分配不确定性。 |
| update_trigger | 产品边界、用途、路线、节点、分配或已核实身份发生变化。 |

## 11. 数据来源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `fao-codex-eggs` | official_guidance | FAO/WHO Codex, Code of Hygienic Practice for Eggs and Egg Products, https://www.fao.org/4/i1111e/i1111e.pdf | 鲜蛋安全、收集、破损、转用及时间/温度/湿度管理。 |
| `fao-leap-poultry` | official_guidance | FAO LEAP, Greenhouse gas emissions and fossil energy use from poultry supply chains (2016), https://openknowledge.fao.org/handle/20.500.14283/i6421en | 家禽路线、期间及共同负担框架；具体物种数量仍需实测。 |
