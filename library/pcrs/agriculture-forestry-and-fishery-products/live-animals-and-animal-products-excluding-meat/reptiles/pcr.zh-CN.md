---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.reptiles
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 活爬行动物

## 1. 范围与适用性

本 PCR 适用于在实际人工繁育者或获授权活体捕获者交接门交付的、已鉴定物种的活爬行动物，可包括符合条件的蛇、蜥蜴、鳄类与龟鳖类。必须逐物种核验合法来源与真实生产路线；CPC 分类本身不等于保护动物交易许可。圈养繁育与合法野外采集的负担不可混同。两栖类、死体、皮、肉、作为单独商品的卵、屠宰及门后买方运输不属于活体参考产品。温度、照明、饲料、水陆饲养和福利措施应按物种及实际场址记录，不能采用通用默认值。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.reptiles` |
| classification_refs | CPC 3.0 `02195` |
| covered_products | 物种明确且有人工繁育或合法野外来源证明的活爬行动物 |
| excluded_products | 两栖类；死体、皮、肉、分离的卵；来源不明或禁止交易的动物；下游运输和使用 |
| representative_product | 来源交接门的一种已声明爬行动物实测活体质量 1 kg |
| production_route | 人工繁育/饲养或有法律记录的活体采集；每批仅采用一种来源路线 |
| market_state | 活体、未加工，状况与来源有记录 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在来源交接门的一种已声明活爬行动物 |
| How much | 实测活体质量 1 kg，并记录个体数及体型等级 |
| How well | 存活且符合实际交接条件；物种、健康、来源及合法状态经核验 |
| How long or cycle | 声明繁殖群、饲养阶段或捕获行动以及共享服务的全部期间 |
| reference_flow_link | `live_handover` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 物种限定的活爬行动物 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种/分类单元；数量；体型/年龄组；质量；人工或野外来源及许可；司法辖区；健康/状况；群组或捕获行动；实际交接门 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_live_mass` | 参考与活体转移 | 质量 | kg | 在实际交接门称量活体，保留数量及体型组；不得跨物种套用通用 kg/只换算。 |
| `m_input_mass` | 饲料、存栏和废物 | 质量 | kg | 使用实测湿基/采购状态；另行披露干物质换算。 |
| `m_time` | 群组、捕获行动及共享设施 | 时间 | 天或声明期间 | 将投入、死亡、产出和资产归入实际期间，不假定通用寿命。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 人工路线：期初种用/幼体存栏的数量、质量和既有负担，或带供应商负担的购入个体。捕获路线：获许可的来源种群/进入权与实际行动，不虚构繁育存栏。 |
| starting_condition_role | 种用/幼体存栏为生物性产品投入或披露的期初资产；野生种群是捕获背景，不是零负担购入动物。 |
| product_classification_scope | CPC 3.0 `02195` 的活爬行动物，须经物种及合法状态核验。 |
| recursive_input_rule | 购入同类别活体只关联一次上游来源数据集；内部饲养至交接转移不算第二次最终销售。 |
| upstream_dataset_requirement | 购入动物、饲料和服务的供应物种、来源、门、地区与负担；受管制来源须有许可。 |
| disclosure | 分类单元、来源代码/许可、出处、数量/质量、状况、群组/行动、死亡、真实副产品、共享资产、路线与交接门。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_legal` | 每批 | 在将活体建模为可销售产出前核验物种及合法来源。CITES 或国内来源代码需进一步核查，不能视为通用许可。 | `un-cpc-2025`; `woah-reptiles-2024`; `cites-guide-2022` |
| `b_routes` | 人工或野外来源 | 人工路线包括真实繁育/饲养、存栏、饲料、水和环境控制；采集路线包括获授权捕获和实际暂养，不虚构人工饲养期。止于实际来源交接。 | `woah-reptiles-2024` |
| `b_shared` | 共享饲养室、温控、池和设备 | 将实测服务仅一次分配给使用的群组、捕获/暂养节点和期间；排除买方运输、屠宰和目的地使用。 | `woah-reptiles-2024` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `captive` | 繁育和饲养活爬行动物 | conditional | 有证据的人工来源 | 受管理生物生产 | 每 kg 验收活体产出 |
| `capture` | 合法活体采集与短期暂养 | conditional | 有效野外采集授权，且同批不采用人工路线 | 独立活体捕获 | 每 kg 验收活体产出 |
| `handover` | 核验并交接活爬行动物 | required | 任一路线实际来源门 | 最终活体验收 | 每 kg 验收活体产出 |

人工节点管理有名录的存栏及其真实投饲、供水、物种适配环境控制与健康检查。捕获节点从有记录的合法来源独立取得活体并记录暂养、损失与交接，不继承人工路线投入。交接是单独的状况、数量、质量与合法文件核验门。卵、蜕皮等仅在另行销售且有自己交接门时是独立产品；常规残余物和死体不是活体产品。共享房间、加温水和设备按实际节点与期间服务分配。

### Process: 繁育和饲养活爬行动物（`captive`）

#### Inputs

##### Product flows

###### 购入种用或幼体动物（`captive_stock`）

记录物种、来源、数量、质量及上游负担；期初存栏不得重复入账。

分母与范围要求：每 kg 验收活体产出

- 选定流：物种限定的活爬行动物存栏
- 流属性/单位：质量 / kg
- 数量规则：实测接收存栏或分配至群组的期初存栏
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stock`
- 数量范围：暂定非负存栏核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；非允许上限
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 物种适配饲料（`captive_feed`）

记录真实饲料身份；仅在确有使用时包括采购的饵料动物，不假定通用爬行动物食谱。

分母与范围要求：每 kg 验收活体产出

- 选定流：供应指定群组的真实饲料或饵料
- 流属性/单位：质量 / kg
- 数量规则：实测供应量扣除期末库存及另记损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 数量范围：暂定非负饲料核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；由物种记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮用、池用或清洁供水（`captive_water`）

记录实际供应的水，资料允许时区分各用途。

分母与范围要求：每 kg 验收活体产出

- 选定流：供应爬行动物设施的水
- 流属性/单位：质量 / kg
- 数量规则：按群组和期间计量或核对供水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 数量范围：暂定非负用水核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；依饲养模式调查异常
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 环境控制能源（`captive_energy`）

按所选物种和场址记录供热、照明、过滤或湿度控制的真实能源载体。

分母与范围要求：每 kg 验收活体产出

- 选定流：爬行动物设施能源载体
- 流属性/单位：能量 / MJ
- 数量规则：将计量能源归至群组和服务期间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 数量范围：暂定非负设施能源核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：MJ/kg 活体产出
  - 基准：每 kg 验收活体产出；无通用爬行动物默认值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

不预设常规废物投入。

##### Elementary flows

不预设常规基本流投入；若有直接取水，应区别于商品供水。

#### Outputs

##### Product flows

###### 转至验收的活体动物（`captive_live`）

内部群组转移只测量一次，不是额外最终销售。

分母与范围要求：每 kg 验收活体产出

- 选定流：离开饲养节点的物种限定活爬行动物
- 流属性/单位：质量 / kg
- 数量规则：转移时实测活体质量和数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live`
- 数量范围：活体转移核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 最终活体产出
  - 基准：每 kg 验收活体产出；须核对质量平衡
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立销售的爬行动物卵（`captive_eggs`）

仅记录有自己身份及交接门、真实单独销售的爬行动物卵；卵不属于活体参考产品。

分母与范围要求：每 kg 验收活体产出

- 选定流：单独销售的物种限定爬行动物卵
- 流属性/单位：质量 / kg
- 数量规则：单独实测销售量和交接门
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定副产品核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；无独立交接则为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立销售的蜕皮材料（`captive_shed_product`）

仅记录在自己有记录的产品门真实单独销售的蜕皮材料，区别于爬行动物卵。

分母与范围要求：每 kg 验收活体产出

- 选定流：单独销售的物种限定爬行动物蜕皮材料
- 流属性/单位：质量 / kg
- 数量规则：单独称量且开票的蜕皮材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定独立销售蜕皮材料核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；无独立销售则为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 人工饲养死亡动物（`captive_mortality`）

按物种和处置路线记录死体，绝不能算验收活体产出。

分母与范围要求：每 kg 验收活体产出

- 选定流：人工饲养死亡的爬行动物体
- 流属性/单位：质量 / kg
- 数量规则：称量或核对每次处置事件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定生物残余物核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；调查死亡事件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 未售爬行动物卵送处理（`captive_unsold_eggs`）

废弃卵须与死体及蜕皮材料分开；真实交换再按处理目的地拆分。

分母与范围要求：每 kg 验收活体产出

- 选定流：送往有记录处理的未售爬行动物卵
- 流属性/单位：质量 / kg
- 数量规则：按状态和处理路线实测废弃卵
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定未售卵核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；披露处理目的地
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 未售蜕皮材料送处理（`captive_unsold_shed`）

废弃蜕皮材料须与死体和卵分开，并记录真实处理目的地。

分母与范围要求：每 kg 验收活体产出

- 选定流：送往有记录处理的未售爬行动物蜕皮材料
- 流属性/单位：质量 / kg
- 数量规则：按处理路线实测废弃蜕皮材料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定废弃蜕皮核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；披露处理目的地
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废池水或清洁废水（`captive_wastewater`）

记录送往处理或下水道的越界废水；直接排入环境则应为基本流。

分母与范围要求：每 kg 验收活体产出

- 选定流：送往处理的爬行动物设施废水
- 流属性/单位：质量 / kg
- 数量规则：实测或水量平衡推导的排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_resources`
- 数量范围：暂定废水核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；与供水核对
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

###### 实测场址直接排放（`captive_emission`）

只记录有名称和接收介质、经实测或有来源方法建模的物质；不指定通用排放 UUID。

分母与范围要求：每 kg 验收活体产出

- 选定流：排入指定环境介质的有名污染物
- 流属性/单位：质量 / kg
- 数量规则：物质特定实测或有记录计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 数量范围：暂定非负排放核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；须有物质特定证据
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### Process: 合法活体采集与短期暂养（`capture`）

#### Inputs

##### Product flows

###### 捕获和暂养耗材（`capture_supplies`）

记录实际网具、陷阱、安全容器或购入耗材；可重复设备按使用期间分配。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实捕获与暂养材料
- 流属性/单位：质量 / kg
- 数量规则：领用记录及共享设备分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 数量范围：暂定捕获材料核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；包括分配的重复使用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 暂养供水（`capture_water`）

仅在实际供应时计入短期暂养供水；不假定所有爬行动物有共同需水量。

分母与范围要求：每 kg 验收活体产出

- 选定流：活体采集/暂养供水
- 流属性/单位：质量 / kg
- 数量规则：计量或记录真实供应水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 数量范围：暂定捕获供水核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；仅实际供水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

不预设常规废物投入。

##### Elementary flows

不指定通用野外种群耗竭流；合法采集与环境交换建模分开披露。

#### Outputs

##### Product flows

###### 合法捕获的活爬行动物（`capture_live`）

按物种、状况和许可记录离开捕获/暂养节点的活体；这是内部转移，不是第二次最终销售。

分母与范围要求：每 kg 验收活体产出

- 选定流：物种限定、合法捕获的活爬行动物
- 流属性/单位：质量 / kg
- 数量规则：离开暂养处时实测活体质量及数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live`
- 数量范围：捕获转移核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；核对捕获和验收记录
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 活体捕获过程死亡动物（`capture_mortality`）

记录真实死亡及去向；死体不能成为活体产出。

分母与范围要求：每 kg 验收活体产出

- 选定流：捕获过程死亡的爬行动物体
- 流属性/单位：质量 / kg
- 数量规则：按处置路线记录事件数量及质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定捕获损失核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；调查事件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废弃捕获耗材（`capture_discarded_supplies`）

只有在节点实际废弃网具、陷阱或容纳材料时记录，须与动物死亡分开。

分母与范围要求：每 kg 验收活体产出

- 选定流：送往有记录处理的捕获与暂养废弃耗材
- 流属性/单位：质量 / kg
- 数量规则：按材料及处理路线称量或核对废弃耗材
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定捕获耗材废物核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；仅实际废弃
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

不预设未测量的直接排放。

### Process: 核验并交接活爬行动物（`handover`）

#### Inputs

##### Product flows

###### 进入来源门核验的活体（`handover_live_input`）

仅记录所选来源路线的一次内部转移；同批不得同时计入人工及捕获产出。

分母与范围要求：每 kg 验收活体产出

- 选定流：来源节点的物种限定活爬行动物
- 流属性/单位：质量 / kg
- 数量规则：实测到达质量和数量，与来源离开记录核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live`
- 数量范围：活体投入核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 验收活体产出
  - 基准：每 kg 验收活体产出；核对来源路线记录
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交接时的物种适配容纳材料（`handover_containment`）

仅计入随批交付或生产者门前消耗的一次性材料；可重复笼具为共享资产。

分母与范围要求：每 kg 验收活体产出

- 选定流：真实活体容纳材料
- 流属性/单位：质量 / kg
- 数量规则：实测领用材料；适用时分配重复使用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_resources`
- 数量范围：暂定容纳材料核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 活体产出
  - 基准：每 kg 验收活体产出；披露笼具重复使用
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

不预设常规废物投入。

##### Elementary flows

不预设常规基本流投入。

#### Outputs

##### Product flows

###### 来源门验收活爬行动物（`live_handover`）

一批一种合格物种，保持存活并有合法文件。记录数量及实测质量；不得代入无物种限定 UUID。

分母与范围要求：每 1 kg 验收活爬行动物

参考产出的原始记录：从实测验收活体质量归一化为 1 kg 参考量 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

- 选定流： 物种限定的活爬行动物
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live`
- 数量范围：准确参考归一化
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考流
  - 基准：每 1 kg 验收活爬行动物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 拒收且返回来源的活体（`handover_live_return`）

仅记录真实返回人工或捕获暂养处的活体，既非销售也非死亡/废物；须与到达量和验收量核对。活体再次经过同一道门不得重复计算动物或负担。若退回后再生产，须另记该责任，不可隐含为第二次验收。

分母与范围要求：每 kg 验收活体产出

- 选定流：返回来源的物种限定活爬行动物
- 流属性/单位：质量 / kg
- 数量规则：实测返回活体质量和数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live`
- 数量范围：暂定活体退回核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 验收活体产出
  - 基准：每 kg 验收活体产出；内部退回非第二次销售
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 活体交接时死亡动物（`handover_mortality`）

只有交接时死亡动物是废物；退回来源的活体是上文单独产品转移。

分母与范围要求：每 kg 验收活体产出

- 选定流：来源门送往有记录处理的爬行动物死体
- 流属性/单位：质量 / kg
- 数量规则：按类别记录真实拒收数量、质量和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs`
- 数量范围：暂定交接拒收核查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/kg 验收活体产出
  - 基准：每 kg 验收活体产出；不包括活体退回
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

交接时不预设通用直接排放。

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_output` | 人工节点 | 列明所有独立预期活体与非活体产出及交接门。先划分可分离活动；剩余联合负担采用有证据的质量或其他因果驱动并披露敏感性。未售卵/蜕皮及死体为残余物/废物。 | `mass-balance-identity`; `woah-reptiles-2024` |
| `a_period` | 人工群组或捕获行动 | 将存栏、设施、饲料、损失和活体关联实际期间；期初存栏和共享资产在真实产出及服务期间只分配一次；不假定通用寿命，不重复计内部转移。 | `mass-balance-identity` |
| `a_shared` | 加温房间、池、笼具及操作服务 | 记录每个使用节点/群组和期间；按实测服务时间、能源/水或有依据的能力驱动分配，不在最终交接再次计费。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stock` | `captive` | 期初/购入爬行动物 | 存栏及来源 | 物种、来源、许可、数量、质量、类别、日期、供应商、既有负担 | 核对进场和期初台账；原始汇总要求：存栏只分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、只 | 每次接收和期初 | 全群组 | 繁育场 | 每参考流 | 许可、供应商、秤记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_resources` | `captive`, `capture`, `handover` | 饲料、水、能源、耗材、共用笼具 | 计量、发票、领用/服务日志 | 投入身份、数量、单位、节点、群组、期间、复用、排水 | 计量或核对发票和库存；原始汇总要求：真实消耗只分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、MJ、天 | 每次领用及每月 | 全群组/行动 | 前景节点 | 每参考流 | 日志、发票、表计、分配表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_live` | `captive`, `capture`, `handover` | 活体转移及验收产出 | 数量、称量、验收 | 物种、来源、授权、个体号、数量、体型、质量、健康、日期、门 | 在每道门称量并检查活体；原始汇总要求：将验收质量归一为 1 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、只 | 每次交接 | 全群组/行动 | 来源场址 | 每参考流 | 秤、身份及健康记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_outputs` | `captive`, `capture`, `handover` | 副产品、死亡与拒收 | 销售、事件及处置 | 物种、事件、质量、数量、去向、日期、门 | 实测或核对事件日志；原始汇总要求：区分产品、废物及内部退回。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、只 | 每次事件 | 全期间 | 场址/行动 | 每参考流 | 凭证及事件日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_emission` | `captive` | 直接排放 | 监测或方法 | 有名物质、接收介质、质量、期间、方法 | 直接监测或有来源的计算；原始汇总要求：按产出归一。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 监测期间 | 全群组 | 设施 | 每参考流 | 测试报告及校准；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_reference` | 验收活体产出 | 合计同一物种已验收活体实测质量；将分配的清单归一至 1 kg。核对数量、来源转移与拒收/死亡去向。 | `cp_live`, `cp_outputs` | kg 验收活体 | `mass-balance-identity` |
| `c_water` | 人工路线废水 | 供水减去实测滞留、蒸发及另计排放；能直接计量时优先实测。 | `cp_resources` | kg 废水 | `mass-balance-identity` |
| `c_period` | 存栏与共享服务 | 将消耗归于群组/行动和期间；联合服务按计量使用或有记录时间分配，总份额只计一次。 | `cp_stock`, `cp_resources`, `cp_outputs` | 每 kg 验收产出的分配投入 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_identity` | 每批 | 核验学名、合法来源及司法辖区；拒绝来源不明/被禁来源。 | 来源/许可及法律核查 |
| `q_mass` | 参考与损失 | 各门经校准的活体质量、数量、体型组和状况；不跨物种使用平均 kg/只。 | 称量及验收日志 |
| `q_period` | 群组、行动和共享资产 | 投入、产出、死亡及期间完整，有分配记录及期初期末存栏。 | 台账和核对表 |
| `q_flow` | UUID 交换 | 绑定前确认精确流、属性、单位组、类型及门；未解析 UUID 保持空白。 | 平台详情及支持行证据 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_legal` | 活体产出 | 缺少物种、获授权来源、状况或实际来源门即失败；分类不能证明合法性。 | `un-cpc-2025`; `woah-reptiles-2024`; `cites-guide-2022` |
| `v_routes` | 来源过程 | 每批必须有且仅有一条经证实来源路线。人工路线需要存栏/群组记录；捕获路线需要许可/行动，不能继承虚构繁育投入。 | `woah-reptiles-2024` |
| `v_balance` | 质量与产出 | 核对期初/购入或捕获质量、存栏变化、验收活体、死亡及真实副产品；内部转移及同门活体退回只计一次。后续再生产须有独立责任和记录。 | `mass-balance-identity` |
| `v_shared` | 多期间与共享资产 | 每项投入、资产、产出及损失有节点/期间归属；份额合于观察服务量，不在两道门重复计费。 | `mass-balance-identity` |
| `v_identity` | 全部卡片 | 待确认流身份卡须有具体选择；最终交换须在发布前核实物种/状态/方向/属性/单位及门。 | `un-cpc-2025` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 一种合法活爬行动物及单一来源路线的前景数据包 |
| downstream_use | 具体身份与质量审核后可作为候选 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 与已声明数据包物种、来源、技术、地区及门相符的用途 |
| excluded_use | 全部爬行动物通用因子、两栖类或死体产品、非法交易、屠宰或买方运输 |
| required_metadata | 物种、合法来源/许可、路线、场址、群组/行动、数量、活体质量、体型/状况、门、期间及实际流选择证据 |
| required_quality_disclosure | 覆盖、存栏/死亡平衡、实测、暂定范围、分配及未解析 UUID |
| update_trigger | 新物种、来源法律、人工模式、捕获授权、饲养制度、门或流身份改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | [联合国 CPC 3.0 说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 活爬行动物分类边界 |
| `woah-reptiles-2024` | official_guidance | [WOAH 陆生动物法典第 7.14 章](https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_aw_reptiles.htm) | 物种适配操作、福利及来源文件 |
| `cites-guide-2022` | official_guidance | [CITES 贸易数据库指南](https://trade.cites.org/cites_trade_guidelines/en-CITES_Trade_Database_Guide.pdf) | 区分所报野外、人工和牧养来源代码；代码本身非许可 |
| `mass-balance-identity` | method_factor | 质量守恒与实测前景投入/产出核对 | 归一化、存栏、水及共享服务核对 |
