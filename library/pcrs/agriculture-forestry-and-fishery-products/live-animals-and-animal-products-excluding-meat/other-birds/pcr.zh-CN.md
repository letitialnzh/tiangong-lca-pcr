---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-birds
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他鸟类活体

## 1. 适用范围

覆盖 CPC 02194 剩余类别中经物种确认的活鸟，如鸽、鹌鹑、山鹑和雉，交付点为有记录的繁育者门或合法捕获来源门。猛禽与鹦形目仅在具体物种、司法辖区和合法来源均获证实时适用。排除另列的鸡、火鸡、鹅、鸭、珍珠鸡、鸵鸟、鸸鹋及美洲鸵鸟（rhea），也排除蛋、死鸟、肉及买方运输。分类举例不等于保护物种交易许可。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.other-birds` |
| classification_refs | CPC 3.0 `02194` |
| covered_products | 物种和来源有记录的适格其他活鸟 |
| excluded_products | 另列家禽和平胸鸟（包括美洲鸵鸟）；蛋、肉、死鸟及下游运输 |
| representative_product | 实际来源门处一个已声明适格物种的 1 kg 实测活体质量 |
| production_route | 人工繁育/鸟舍饲养或独立合法的野外活体捕获；同一批次二选一 |
| market_state | 在实际来源门活着、未加工并通过验收 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 经物种确认的其他活鸟 |
| How much | 1 kg 实测活体质量，附鸟只数量 |
| How well | 声明物种、年龄/性别类别、健康、活体状态及合法来源 |
| How long or cycle | 声明饲养群期或捕获活动期和共用服务期 |
| reference_flow_link | `live_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 按物种确认的其他活鸟 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种/分类单元；剩余类归属；来源路线；司法辖区与合法来源；数量；质量；年龄/性别类别；健康；群期/活动期；交付门 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live` | 活体参考及转移 | Mass | kg | 按物种和类别称重实际活体批次并核对数量；不得使用通用 kg/只换算系数。 |
| `m_period` | 群期、活动期和共用资产 | Time | 声明的时段 | 将存栏、投入、死亡、产出及共用服务关联至实际时段与阶段。 |
| `m_energy` | 燃料及电力卡 | Energy or mass | kWh or kg | 各实际载体保留原单位；仅在以有披露的供应商热值作暂定 QA 筛查时将燃料换算为 kWh 当量，不虚构固定交换。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 人工路线：期初或购入种鸟/幼鸟及其既有负担。捕获路线：获准的来源活动，不虚构种鸟存栏。 |
| starting_condition_role | 受管理生物存栏/上游产品，或有证明的合法捕获来源情境。 |
| product_classification_scope | 排除其他活鸟类别后的 CPC 3.0 `02194`。 |
| recursive_input_rule | 同类购入活鸟只连接一个上游数据集；内部转移不构成第二次销售。 |
| upstream_dataset_requirement | 按供应者、身份、地理及交付门匹配购入活鸟、饲料及能源；必要时保留捕获许可。 |
| disclosure | 物种、合法来源、路线、数量/质量、群期/活动期、死亡、共同产品、交付门及共用服务期。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_scope` | 每批 | 核验物种、剩余类归属及合法来源。CPC 举例不赋予保护物种交易权。 | `un-cpc-2025`; `woah-wildlife-2021` |
| `b_route` | 生产来源 | 人工饲养包括实际存栏、护理与损失；合法捕获包括真实捕获、短暂暂养及损失，不虚构繁育。边界止于已验收的来源门活体交付。 | `un-cpc-2025`; `woah-wildlife-2021` |
| `b_shared` | 共用资产 | 鸟舍、围栏、用水和处理服务仅按实际使用节点及时段归属一次；排除屠宰及买方运输。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `rear` | 繁育与饲养适格鸟类 | conditional | 具备记录的人工繁育来源 | 受管理生物生产 | 每 kg 活鸟交付 |
| `capture` | 合法捕获并短暂暂养野生鸟类 | conditional | 有合法野生来源证明；与人工繁育互斥 | 独立活体捕获 | 每 kg 活鸟交付 |
| `handover` | 筛选、称重并交付活鸟 | required | 实际来源交付门 | 最终活体验收 | 每 kg 活鸟交付 |

人工饲养记录种鸟、饲料及分期照料直至活体筛选；仅在确有单独销售和交付门时将蛋或羽毛作为独立产品。合法捕获从有证据的活动与活体收容开始，独立于繁育。最终交付门核验物种、活体状态、数量及质量。共用鸟舍及处理设施按实际节点和时段仅归属一次。

### 过程：繁育与饲养适格鸟类 (`rear`)

#### 输入

##### 产品流

###### 引入的活种鸟或幼鸟 (`rear_stock`)

引入的活种鸟或幼鸟按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流：按物种确认的购入或期初活鸟
- 流属性/单位：Mass / kg
- 数量规则：按物种、类别和来源称重引入活鸟
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rear`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 人工饲养鸟群的饲料 (`rear_feed`)

人工饲养鸟群的饲料按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流：实际按物种和生命阶段使用的饲料
- 流属性/单位：Mass / kg
- 数量规则：将投料与期初期末库存核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rear`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供鸟饮用及清洁的水 (`rear_water`)

供鸟饮用及清洁的水按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流：饲养供水
- 流属性/单位：Mass / kg
- 数量规则：计量归属于本节点的供水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rear`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 鸟舍能源供应 (`rear_energy`)

鸟舍能源供应按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流：实际电力或燃料载体
- 流属性/单位：Energy or mass / kWh or kg
- 数量规则：按节点及服务期计量能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rear`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kWh-equivalent/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 进入交付节点的饲养活鸟 (`rear_live`)

进入交付节点的饲养活鸟按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流：按物种确认的饲养活鸟
- 流属性/单位：Mass / kg
- 数量规则：仅对活体内部转移称重一次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rear`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 单独出售的蛋 (`rear_eggs`)

单独出售的蛋仅在实际发生时按具体物种、状态和交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流: 按物种确认并实际出售的蛋
- 流属性/单位: Mass / kg
- 数量规则: 在蛋的交付门称重单独销售的蛋
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_rear`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位: kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 单独出售的羽毛 (`rear_feathers`)

单独出售的羽毛仅在实际发生时按具体物种、状态和交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流: 按物种确认并实际出售的羽毛
- 流属性/单位: Mass / kg
- 数量规则: 在羽毛的交付门称重单独销售的羽毛
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_rear`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位: kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 饲养中死亡的鸟 (`rear_deaths`)

饲养中死亡的鸟仅在实际发生时按具体物种、状态和交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流: 受管理群期死亡的鸟
- 流属性/单位: Mass / kg
- 数量规则: 按时段和处置路线清点并称重死亡鸟
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_losses`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位: kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲养产生的废垫料 (`rear_litter_waste`)

饲养产生的废垫料仅在实际发生时按具体物种、状态和交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流: 按实际废物路线处理的鸟舍废垫料
- 流属性/单位: Mass / kg
- 数量规则: 称重离开受管理节点的废垫料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_losses`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位: kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：合法捕获并短暂暂养野生鸟类 (`capture`)

#### 输入

##### 产品流

###### 实际短暂暂养的供水 (`capture_water`)

实际短暂暂养的供水仅在实际发生时按具体物种、状态和交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流: 暂养实际供水
- 流属性/单位: Mass / kg
- 数量规则: 短暂暂养发生时计量用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_capture`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位: kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 一次性捕获和暂养耗材 (`capture_consumables`)

一次性捕获和暂养耗材仅在实际发生时按具体物种、状态和交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流: 实际使用的垫片或手套
- 流属性/单位: Mass / kg
- 数量规则: 清点或称重耗材，排除可重复使用装备
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议: `cp_capture`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位: kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 捕获及暂养能源 (`capture_energy`)

捕获及暂养能源按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流：实际捕获燃料或电力
- 流属性/单位：Energy or mass / kWh or kg
- 数量规则：记录来源门前捕获活动的实际耗能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kWh-equivalent/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 进入交付节点的捕获活鸟 (`capture_live`)

进入交付节点的捕获活鸟按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流：按物种确认的合法捕获活鸟
- 流属性/单位：Mass / kg
- 数量规则：在短暂暂养出口清点并称重留存活鸟
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 捕获或暂养死亡鸟 (`capture_deaths`)

捕获或暂养死亡鸟按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流：合法捕获活动中死亡的鸟
- 流属性/单位：Mass / kg
- 数量规则：记录死亡事件、物种、数量和质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_losses`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：筛选、称重并交付活鸟 (`handover`)

#### 输入

##### 产品流

###### 待验收的活鸟 (`handover_in`)

待验收的活鸟按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流：来自一个来源节点的实际活鸟转移
- 流属性/单位：Mass / kg
- 数量规则：将一个饲养或捕获批次对应到验收
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的其他活鸟 (`live_handover`)

已验收的其他活鸟按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

参考产出的原始记录：称重已验收活体批次；参考量为一千克 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- 选定流： 按物种确认的其他活鸟
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_handover`
- 数量范围：参考质量一致性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-2006`

##### 废物流

###### 验收前死亡的鸟 (`handover_deaths`)

验收前死亡的鸟按实际发生的物种、状态及交付门登记。

分母与范围要求：每 kg 最终活鸟交付

- 选定流：死亡的拒收鸟体
- 流属性/单位：Mass / kg
- 数量规则：记录质量及处置；不得计入活体产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_losses`
- 数量范围：暂定非负 QA 筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg live-bird handover
  - 基准：每 kg 最终活鸟交付
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共同产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | 独立产品销售 | 区分活鸟及在各自交付门独立出售的蛋或羽毛。优先过程分割和因果归属；不可分时按同一时段实测经济价值及价格证据分配共同负担。未售残余物及死亡鸟为废物。 | `iso-14044-2006` |
| `a_period` | 群期及活动期 | 将存栏、补充、投入和产出归入观察到的群期/活动期及服务期；核对期初期末存栏，补充负担不得重复。 | `iso-14044-2006` |
| `a_shared` | 共用资产及服务 | 按计量消耗或实测使用时间将共用鸟舍、用水及处理服务分配给各节点和时段；披露代理值并避免重复计入。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rear` | `rear` | 存栏、饲料、公用投入及产出 | 群期台账、发票、仪表、磅秤 | 物种、类别、来源、数量、质量、饲料、水、能源、时段、独立销售 | 逐事件核对并核对期初期末库存；原始汇总要求：按群期及产品门汇总。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; bird; kWh | 事件及每期 | 完整群期 | 繁育场 | 每参考流 | 发票、校准称、仪表、销售记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_capture` | `capture` | 合法捕获、能源及活体转移 | 许可及活动记录 | 许可、物种、地点、日期、捕获/释放/死亡数量、质量、能源 | 获准活动记录及活体称重；原始汇总要求：仅汇总留存活鸟。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; bird; kWh | 每次活动 | 完整活动期 | 捕获点 | 每参考流 | 许可和保管链；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_handover` | `handover` | 活体验收 | 验收及磅秤记录 | 物种、来源批次、数量、质量、状态、门、日期 | 称重并检查实际活鸟；原始汇总要求：按物种汇总已验收活体质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; bird | 每批 | 来源门时段 | 各来源门 | 每参考流 | 称重、健康和来源证明；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_losses` | `rear`; `capture`; `handover` | 死亡 | 死亡及处置记录 | 物种、数量、质量、阶段、日期、路线 | 发生时记录死亡；原始汇总要求：从活体验收中排除。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; bird | 每次事件 | 完整群期/活动期 | 实际节点 | 每参考流 | 损失及处置记录；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_balance` | 来源及交付门 | 按物种及时段核对期初＋出生/购入/捕获－释放－死亡－期末＝转移数量；实测质量另行核对。 | 有日期的群期/活动及称重记录 | 数量与质量平衡 | `woah-transport` |
| `c_normalize` | 各清单项 | 将已归属投入或产出除以已验收活体 kg；不使用无物种限定的 kg/只换算。 | 已归属数量与已验收质量 | 每 kg 活鸟数值 | `iso-14044-2006` |
| `c_shared` | 共用服务 | 各节点/时段份额之和等于唯一实测总量；服务负担不得重复归属。 | 仪表与使用台账 | 已归属服务 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_species` | 每批 | 编制清单前识别物种、剩余类代码及合法来源。 | 物种及保管/许可记录 |
| `q_live` | 参考产品 | 已验收产出必须存活且数量与实测质量和来源一致。 | 称重、健康及死亡记录 |
| `q_period` | 跨期及共用服务 | 解释存栏变化、阶段边界及共用份额。 | 群期/活动及服务台账 |
| `q_identity` | 具体交换 | 发布前将未绑定卡或待确认投入解析为相容且已核验的流/属性/单位身份。 | 候选、详情及支持行核验 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | 每批 | 拒绝另列家禽/平胸鸟、死亡产出、物种或来源缺失，以及无许可的保护物种交易。 | `un-cpc-2025`; `woah-wildlife-2021` |
| `v_balance` | 来源及交付门 | 按物种与时段核对出生、购入、捕获、释放、转移、死亡及期末鸟只；内部转移不得作为二次销售。 | `woah-transport` |
| `v_outputs` | 多产出群期 | 核验独立产品门、分配方法、时段一致性以及不向废物分配。 | `iso-14044-2006` |
| `v_shared` | 共用服务 | 核验实际使用者、时段及份额之和对应唯一实测负担。 | `iso-14044-2006` |
| `v_binding` | 具体交换 | 未解析 UUID 或仅有待确认流身份不是最终流身份；核验类型、物种/状态、属性/单位及交付门。 | `un-cpc-2025` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 按物种和来源限定的活鸟前景数据集 |
| downstream_use | 经审查且解析具体身份后，可作次级/背景数据集及过程和生命周期模型投影 |
| allowed_use | 物种、合法来源、路线、状态及来源门一致的用途 |
| excluded_use | 其他家禽、平胸鸟、死鸟、屠宰、买方运输或跨物种平均 |
| required_metadata | 物种、来源、司法辖区、路线、数量、质量、健康、群期/活动期、门、共同产品及分配记录 |
| required_quality_disclosure | 死亡、暂定 QA Range、共用服务代理值、缺失计量及未解析身份 |
| update_trigger | 物种、门、法律、饲养方式、UUID 核验或重要证据变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [联合国 CPC 3.0 解释性说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 鸟类边界及排除 |
| `woah-wildlife-2021` | official_guidance | [WOAH 野生动物贸易审查](https://www.woah.org/app/uploads/2022/08/a-oie-review-wildlife-trade-march2021.pdf) | 合法来源及野生来源谨慎原则 |
| `woah-transport` | official_guidance | [WOAH 陆生动物运输章节](https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/en_chapitre_aw_land_transpt.htm) | 适用时的活体适运及处理问题 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配一致性 |
