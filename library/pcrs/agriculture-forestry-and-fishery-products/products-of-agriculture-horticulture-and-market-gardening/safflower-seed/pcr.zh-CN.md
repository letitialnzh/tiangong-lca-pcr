---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.safflower-seed
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 红花籽

## 1. 适用范围

本规则为农场门交付的完整、未加工红花（Carthamus tinctorius）籽粒建立前景数据包。纳入一年生作物栽培、独立收获过程，以及在交接前实际完成的初次清选、分级、干燥或短期贮存。排除榨油、粕生产、农场门后运输及消费。固定参考流代表收获籽粒，不能证明经认证或处理的播种用种产出。须披露品种与已知的油酸/亚油酸类型、灌溉、收获路线、等级、实测水分和交接点。来源中的区域收购水分限值不作为全球统一限值。[uc-safflower-production; wisconsin-safflower]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.safflower-seed |
| classification_refs | CPC 3.0 01446 红花籽；在考虑播种用种处理时，本未加工籽粒路线窄于整个分类叶节点。 |
| covered_products | 用于油籽、鸟食或其他已声明未加工籽粒市场的完整收获红花籽。 |
| excluded_products | 提取的油、压榨饼或粕、花、牧草、加工饲料，以及使用固定籽粒 UUID 表示的认证或处理播种用种。 |
| representative_product | 在实体农场门按实测水分和等级交付的完整合格红花籽粒。 |
| production_route | 上级活动为一年生红花作物栽培。旱作与灌溉为不同管理路线，灌溉增加水与泵送能耗清单。直收为上级收获技术；割晒加捡拾为条件性替代技术，增加作业趟次和田间晾干阶段。每批两种收获方式互斥。[uc-safflower-production; wisconsin-safflower] |
| market_state | 完整未加工籽粒，可为收获原态或初次清选态；实际农场门内干燥须声明。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 农场交付的完整合格红花籽粒。 |
| How much | 按实测交付水分计 1 kg。 |
| How well | 声明品种/油脂类型、市场等级、杂质/清选状态、损伤和实测水分。 |
| How long or cycle | 一个已识别田块作物周期及关联收获、门前处理批次。 |
| reference_flow_link | `safflower_grading` 的最终合格产出；如门前干燥则为 `safflower_stabilization` 的最终合格产出。 |

| Field | Value |
| --- | --- |
| Reference amount | 按实际交付水分计 1 kg 完整合格红花籽粒。 |
| Reference product flow | Safflower seed `30eacea6-7a8a-457f-a766-c93480303927` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 地点及作物年份；已知的品种/油脂类型；旱作或灌溉；直收或割晒/捡拾；实测水分；清选与等级；门前干燥/贮存；市场去向；实体交接点。 |
| Binding | `fixed` |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格籽粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用最终批次实测质量和水分；不得未经调整以湿收获重替代。 |
| `dry_matter` | 不同水分状态 | Mass | kg | 以湿重 kg ×（1 − 实测水分质量分数）比较干物质，并保留两端的湿重和水分记录。 |
| `field_yield` | 作物周期 | 质量/面积 | kg/ha | 最终合格质量除以收获面积；识别另售低等级产品。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 记录田块面积、前茬/土地利用、整地、种子来源、周期开始时土壤养分与水分条件。 |
| starting_condition_role | 红花年度管理生产起点；不得假设投入品没有上游负担。 |
| product_classification_scope | 完整收获红花籽粒；处理或认证播种用种需单独核实产品身份。 |
| recursive_input_rule | 播种投入使用其实际种用种子上游数据集；不得递归地将本籽粒产出当作认证种子供给。 |
| upstream_dataset_requirement | 采购种子、肥料、植保品、燃料、电力、供水和门前承包服务需关联适用上游数据集，缺口须披露。 |
| disclosure | 田块/年份、农场门、产品状态和水分、灌溉、收获路线、实际门前处理、拒收物去向及数据缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `field_to_gate` | 前景系统 | 纳入作物管理、独立收获及交接前实际初清、分级、干燥、贮存。立地植株与收集籽粒分属不同状态，以显示收获损失。 | uc-safflower-production; wisconsin-safflower |
| `route_delta` | 生产与收获 | 灌溉田增加实测用水和泵送负担；旱作不虚构灌溉。割晒/捡拾增加割倒、田间晾干和捡拾观测；直收批次不含这些作业。每批只能选一路线。 | uc-safflower-production; wisconsin-safflower |
| `conditional_nodes` | 初次处理 | 清选、干燥、贮存仅在交接前实际发生时纳入；加州或美国中西部水分目标不是全球条件。 | uc-safflower-production; wisconsin-safflower |
| `downstream` | 排除项 | 榨油、粕加工和农场门后运输在外。另售残余物或低等级品需记录质量、去向与负担归属。 | uc-safflower-production; wisconsin-safflower |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `safflower_cultivation` | 红花作物管理 | required | 每个田块/作物年，声明旱作或灌溉。 | 培育结籽立地植株并交给收获。 | 田块面积与投入账。 |
| `safflower_harvest` | 籽粒收获 | required | 每批直收或条件性割晒/捡拾。 | 将收集籽粒与植株分离并记录田间损失。 | 收获称重与路线日志。 |
| `safflower_conditioning` | 籽粒初次处理 | conditional | 交接前实际初清。 | 将收获原态转为完整籽粒，分出筛下物。 | 进出质量与能耗。 |
| `safflower_grading` | 等级及去向分选 | required | 每个交付批次均分类。 | 分出合格、降级、拒收状态及交接方向。 | 等级票据与质量平衡。 |
| `safflower_stabilization` | 农场门内干燥或贮存 | conditional | 实际门前稳定处理。 | 将可用籽粒变为实测稳定交付状态。 | 质量、水分、能耗、时长。 |

所有作业按田块/作物周期和关联收获或处理批次编号。返工清选物返回原批次，不构成新作物产出。收获与生长、初清分开，因为其设备、收集状态交接和田间损失各不相同。留田秸秆/颖壳与未收获籽粒损失分别作为田间观测记录及去向；两者均非已核实的基本流排放，也非合格农场门籽粒。[uc-safflower-production; wisconsin-safflower]

### 过程：红花作物管理（`safflower_cultivation`）

#### 投入

##### 产品流

###### 播种用种（`planting_seed`）

记录进入各田块的实际红花播种用种。在核实适用的种用种子流 UUID 前，不得借用收获籽粒产出 UUID 表示种用投入。

- 选定流：红花播种用种，身份待核实
- 流属性/单位：Mass / kg
- 数量规则：按田块及作物周期记录实际播种质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每田块作物周期。
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：wisconsin-safflower
- 数量范围：地区播种量示例，供复核
  - 范围角色：常见范围（`typical_range`）
  - 下限：22
  - 上限：34
  - 单位：kg seed/ha
  - 基准：一个作物周期每公顷；加州 20–30 lb/acre 的地区行播或条播示例，不是通用限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`uc-safflower-production`

###### 农业养分与肥料投入（`safflower_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每田块作物周期。
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`wisconsin-safflower`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg product/ha
  - 基准：一个作物周期每公顷、每种肥料产品单列；仅暂定筛查，以田间施用记录替代
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保材料（`crop_protection`）

按制剂和施用事件分别记录实际使用的除草剂、杀菌剂或其他植保品；未使用的类别不列投入量。

- 选定流：实际施用植保品，在产品特定查询前身份待核实
- 流属性/单位：产品 Mass / kg
- 数量规则：按田块及事件记录领用或施用产品质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每田块作物周期。
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg product/ha
  - 基准：一个作物周期每公顷、每种植保或助收产品单列；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water`）

仅灌溉田包含供水，记录水源和事件。旱作田声明路线，不虚构供水行的投入量。

- 选定流：灌溉供水，待按水源核实身份
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合分组：`irrigation-water`
- 数量规则：按田块及事件计量或凭证记录供水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每灌溉田作物周期。
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha
  - 基准：一个作物周期每公顷；雨养路线为零，灌溉路线以实测取水或送水为准；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间作业燃料（`field_fuel`）

记录拖拉机及其他栽培作业实际燃料，排除由独立收获节点负责的收获燃料。

- 选定流：田间设备用实际移动机械燃料，待按载体核实身份
- 流属性/单位：体积 / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：按田间作业计量或分配燃料升数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每田块作物周期。
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：L/ha
  - 基准：一个作物周期每公顷；归属的田间作业及分燃料实测升数；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉泵送电力（`pump_electricity`）

灌溉田采用电力泵送时，电力与供水、液体燃料分别记录。其他泵送能源需在前景包中按实际载体另列。

- 选定流：灌溉泵送外购电力，待按供应核实身份
- 流属性/单位：能源 / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：按田块及作物周期计量泵送电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每灌溉田作物周期。
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kWh/ha
  - 基准：一个作物周期每公顷；条件性电动机械或灌溉泵送的实测电量；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

仅当适用方法与实测活动数据支持特定田间基本流排放时，前景包才按物种分别添加带方法、数量和已核实身份的交换；本规则不规定笼统的“田间排放”交换。

#### 产出

##### 产品流

###### 立地结籽植株（`standing_crop`）

管理生产的产出是交给收获过程的成熟立地作物，不是另一份已售籽粒。

- 选定流：立地红花作物，内部状态
- 流属性/单位：面积 / ha
- 数量规则：记录收获田块面积和成熟交接。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期。
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：ha/ha cultivated
  - 基准：每一实测栽培公顷只与收获田块关联一次
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：籽粒收获（`safflower_harvest`）

#### 投入

##### 产品流

###### 收获设备燃料（`harvest_fuel`）

记录实际联合收割燃料，割晒/捡拾批次还要分记割倒与捡拾燃料。若承包服务上游数据集已含设备燃料，不得再重复计入同一燃料。

- 选定流：收获设备用实际移动机械燃料，待按载体核实身份
- 流属性/单位：体积 / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：按设备作业趟次及关联收获批次记录升数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每收获批次。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：L/ha
  - 基准：每一收获公顷，按实际路线和机械燃料计量；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 承包收获服务（`harvest_service`）

若由承包商收获，单独记录采购服务与直接燃料，并披露服务上游数据集是否已包含燃料与设备。

- 选定流：实际承包收获服务，待按供应方/服务类型核实身份
- 流属性/单位：服务 / 有凭证设备作业小时
- 数量规则：按批次记录发票上的设备小时或其他有据服务量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每收获批次。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：h/ha
  - 基准：每一收获公顷，承包机械工时与燃料分开记录；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 收集的原态籽粒（`raw_grain`）

称量含杂质、实测水分的未清选籽粒，交给初清或分级。

- 选定流：收获红花籽粒，内部初清前状态
- 流属性/单位：Mass / kg
- 数量规则：每批称重并测水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每收获批次。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg raw seed/ha
  - 基准：每一收获公顷；首次调理前原籽粒的暂定宽幅筛查，以称重记录替代
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：籽粒初次处理（`safflower_conditioning`）

#### 投入

##### 产品流

###### 收获原态籽粒投入（`conditioning_seed_input`）

称量进入初次清选的收获籽粒，返工清选的拒收批次须关联原运行。

- 选定流：收获红花籽粒，内部初清前状态
- 流属性/单位：Mass / kg
- 数量规则：按清选运行记录进料质量及实测水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清选运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清选电力（`conditioning_electricity`）

计入实际清选设备的电量；共用计量时段仅按吞吐量或有据运行时间分配一次。

- 选定流：清选外购电力，待按供应核实身份
- 流属性/单位：能源 / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：每次清选运行的实测或有据分配电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清选运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg processed seed
  - 基准：每 kg 进入实际清选、分选、干燥或贮存作业的籽粒；仅暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清选燃料（`conditioning_fuel`）

仅设备确用发动机清选时计入燃料，并与电力分载体记录；同一机器服务不可重复计数。

- 选定流：实际清选设备燃料，待按载体核实身份
- 流属性/单位：体积 / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：清选运行消耗或有据分配的燃料升数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清选运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：L liquid fuel/kg processed seed
  - 基准：每 kg 进入实际调理或干燥作业的籽粒；仅液体燃料筛查，其他载体另行换算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 备好的完整籽粒（`prepared_seed`）

清选后的完整籽粒交给分级；这是内部状态，不是第二次销售。

- 选定流：备好的完整红花籽粒，内部状态
- 流属性/单位：Mass / kg
- 数量规则：称量清选质量并实测水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清选运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 筛下物（`screenings`）

将破碎籽、空籽、杂草籽和壳片按实际回收、销售或弃置方向分类。

- 选定流：红花籽清选筛下物，身份待核实
- 流属性/单位：Mass / kg
- 数量规则：按去向称量或核算移除质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每清选运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：等级与去向分选（`safflower_grading`）

#### 投入

##### 产品流

###### 待分级籽粒批次（`grade_input`）

依据已声明买方要求将收获原态或清选籽粒分类，并记录分流前质量和水分。

- 选定流：完整红花籽粒，内部投入状态
- 流属性/单位：Mass / kg
- 数量规则：记录进入批次质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分级批次。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 合格未加工籽粒等级（`accepted_seed`）

完整合格籽粒交农场门销售或实际门前干燥；仅将最终交付质量计为参考产出。

- 选定流：Safflower seed `30eacea6-7a8a-457f-a766-c93480303927`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：`fixed`
- 数量规则：按实测水分称量合格籽粒。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终农场门籽粒。
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 另售降级籽粒（`downgraded_seed`）

若低等级品实际销售，单独称量并识别去向；不得默认其为废物或并入合格质量。

- 选定流：降级红花籽粒，身份待核实
- 流属性/单位：Mass / kg
- 数量规则：按去向称量另售低等级质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每分级批次。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 不合格拒收物（`grade_reject`）

拒收物须关联原分级运行及再清选、可证回收或弃置路径；未返工合格前不计入参考产出。

- 选定流：拒收红花籽粒，身份待核实
- 流属性/单位：Mass / kg
- 数量规则：称量拒收质量及最终去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分级批次。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：农场门内干燥或贮存（`safflower_stabilization`）

#### 投入

##### 产品流

###### 稳定处理前可用籽粒（`stabilization_seed_input`）

记录实际门前干燥或贮存运行的完整合格籽粒进料批次、质量和水分。

- 选定流：完整红花籽粒，内部稳定处理前状态
- 流属性/单位：Mass / kg
- 数量规则：按运行实测进料质量和水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每稳定处理运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥燃料（`dryer_fuel`）

若交接前实际使用燃料干燥设备，按载体记录燃料升数，独立于籽粒与电量。

- 选定流：干燥机用实际固定燃烧燃料，待按载体核实身份
- 流属性/单位：体积 / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`stationary-combustion-fuel`
- 数量规则：每次干燥运行实测或有据分配燃料升数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每稳定处理运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：L liquid fuel/kg processed seed
  - 基准：每 kg 进入实际调理或干燥作业的籽粒；仅液体燃料筛查，其他载体另行换算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥电力（`dryer_electricity`）

记录干燥风机或控制系统实际电耗；不得与燃料或籽粒质量混为一行。

- 选定流：干燥外购电力，待按供应核实身份
- 流属性/单位：能源 / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：每次干燥运行实测或有据分配电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每稳定处理运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg processed seed
  - 基准：每 kg 进入实际清选、分选、干燥或贮存作业的籽粒；仅暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 贮存电力（`storage_electricity`）

交接前实际贮存时，按已记录贮存期单独记录通风或搬运电量，不与主动干燥合并。

- 选定流：农场门内贮存外购电力，待按供应核实身份
- 流属性/单位：能源 / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：按批次实测或有据分配电量及贮存时长。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每稳定处理运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization`
- 来源：wisconsin-safflower
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg processed seed
  - 基准：每 kg 进入实际清选、分选、干燥或贮存作业的籽粒；仅暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 门前稳定籽粒（`stabilized_seed`）

实测最终质量/水分取代干燥前分级质量成为参考产出；不施加全球统一目标水分。

- 选定流：Safflower seed `30eacea6-7a8a-457f-a766-c93480303927`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：`fixed`
- 数量规则：按实际水分称量最终合格籽粒。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 最终农场门籽粒。
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization`
- 来源：uc-safflower-production; wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 损坏籽粒（`stabilization_reject`）

识别实际霉变或损伤籽粒，记录质量和弃置/回收去向。

- 选定流：损伤红花籽，身份待核实
- 流属性/单位：Mass / kg
- 数量规则：按去向称量不合格质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每稳定处理运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization`
- 来源：wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥蒸发水（`drying_water`）

以进出质量和水分计算实际水分损失，不将其当作已售籽粒或干物质损失。

- 选定流：进入空气的水，语义基本流
- 流属性/单位：Mass / kg
- 数量规则：扣除另计干物质拒收后，以进出湿质量差计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每干燥运行。
- 基准类型：过程产出（`process_output`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stabilization`
- 来源：wisconsin-safflower
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_seed_product` | 常规作物 | 当秸秆留田、未收集籽粒为损失、筛下物/拒收物被弃置时，将栽培和收获负担归于合格籽粒；不得预设这些状态是可售联产品。 | uc-safflower-production; wisconsin-safflower |
| `separate_sale` | 另售低等级品或残余物 | 若低等级籽粒、筛下物或秸秆实际销售，测量质量和去向，并在使用数据集前记录过程细分或合理分配；不提供默认经济分配比例。 | uc-safflower-production; wisconsin-safflower |
| `run_attribution` | 共用运行 | 投入关联作物周期，收获、清选、干燥和换线能耗关联实际批次/运行。共用计量时段按吞吐量或有据时间仅分配一次，包含再清选能耗但不重复计入返回的种子。 | uc-safflower-production; wisconsin-safflower |
| `reject_exclusion` | 返工 | 合格参考质量不含拒收物，除非关联返工运行使其重新达标；返回物不是新增农场产出。 | uc-safflower-production; wisconsin-safflower |

## 8. 前景数据采集、计算与质量规则

流卡中的数量范围是归一化前的复核触发条件，不是清单默认值或通用合格限值。数量必须采用实际田块、批次和作业记录；超出暂定筛查范围时，应核查路线、地区、单位及计量质量。地区播种量仅为示例。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field` | `safflower_cultivation` | 田间投入与灌溉 | 田间日志、发票和计量表 | field_id, area_ha, crop_year, seed_kg, product_id, applied_kg, fuel_L, irrigation_m3, pump_kWh, route | 核对领用日志和计量表 | ha; kg; L; m3; kWh | 每次事件 | 全作物周期 | 每田块 | 按田块/年份/投入品求和 | 发票、日志、计量及面积记录 |
| `cp_harvest` | `safflower_harvest` | 收获与田间损失 | 作业日志、称重、水分检测 | lot_id, field_id, direct_or_windrow, dates, fuel_L, service_hours, grain_kg, moisture, straw_chaff_kg, uncaptured_seed_kg, residue_fate | 逐批称量并分别观察残体与未收获籽粒 | kg; fraction; L | 每批 | 收获期 | 田块及路线 | 每批只记录一次路线和质量 | 称重票、作业日志、水分检测 |
| `cp_conditioning` | `safflower_conditioning` | 清选与筛下物 | 运行账及计量 | run_id, lot_id, in_kg, out_kg, screenings_kg, electricity_kWh, fuel_L, return_id, destinations | 称量进出物并计量能源 | kg; kWh 或燃料单位 | 每次运行 | 交接前 | 农场或门前承包方 | 关联返回并核对质量 | 称重、计量、去向票 |
| `cp_grade` | `safflower_grading` | 等级及交接 | 分级/销售票 | lot_id, grade, accepted_kg, downgrade_kg, reject_kg, moisture, gate_date, destinations | 按已声明买方等级分选并称重 | kg; fraction | 每批 | 交接前 | 农场门 | 最终合格质量只汇总一次 | 等级及称重票 |
| `cp_stabilization` | `safflower_stabilization` | 实际干燥/贮存 | 干燥及仓储日志 | run_id, lot_id, inlet_kg, outlet_kg, inlet_moisture, outlet_moisture, dryer_fuel_L, dryer_electricity_kWh, storage_electricity_kWh, duration, reject_kg | 两端称重测水分并计量能源 | kg; fraction; 能源单位; days | 每次运行 | 交接前 | 农场/承包方 | 干物质平衡，最终合格只计一次 | 称重、水分、能源记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_yield` | 田块作物周期 | 最终合格 kg ÷ 收获 ha，附实测水分；披露另售低等级产品。 | accepted_kg, area_ha | kg/ha | wisconsin-safflower |
| `mass_balance` | 收获至交接 | 原态籽粒 = 最终合格 + 降级 + 拒收 + 过程干物质损失 + 净失水；返工返回只计一次并解释差额。 | 关联批次/运行质量与水分 | 平衡差额与去向 | uc-safflower-production; wisconsin-safflower |
| `dry_matter_balance` | 干燥 | 进出干质量各为湿重 kg ×（1 − 实测水分分数）；另报移除干物质。 | 进出质量及水分 | 干物质及蒸发水 | wisconsin-safflower |
| `shared_run` | 共用设备时段 | 按实测吞吐量或有据时间对计量时段能源分配一次；记录混用产品的换线。 | 总计量、运行、吞吐/时间 | 每次运行能源 | wisconsin-safflower |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity` | 最终产品 | 证明完整籽粒、农场门、实测水分及合格等级；播种用种主张需不同的已核实身份。 | 销售、等级、UUID 身份记录 |
| `routes` | 生产/收获 | 每田块识别旱作或灌溉、每批识别直收或割晒；额外作业需单列。 | 田间供水及收获日志 |
| `completeness` | 质量和能源 | 关联田块、收获、清选、分级、干燥，披露缺失计量、估算的共用负担和质量平衡差额。 | 关联称重、水分、计量记录 |
| `period` | 时间范围 | 声明作物年和实际门前贮存期；无聚合规则时不得混合年份。 | 作物及贮存日志 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `valid_identity` | 参考产出 | 要求籽粒 UUID `30eacea6-7a8a-457f-a766-c93480303927`、Mass 属性及单位组、kg、实测水分、等级和农场门；拒绝用该固定籽粒身份表示播种用种。 | uc-safflower-production; wisconsin-safflower |
| `valid_routes` | 田块与收获批次 | 每田块须有旱作/灌溉状态、每批恰有直收或割晒/捡拾一路线；选择灌溉或割晒时须有新增记录。 | uc-safflower-production; wisconsin-safflower |
| `valid_nodes` | 条件性处理 | 启用清选或干燥/贮存节点时须有相连进出质量、能源和拒收去向；未执行节点不得虚构负担或全球水分门槛。 | uc-safflower-production; wisconsin-safflower |
| `valid_balance` | 分级、返工、共用运行 | 按关联批次以声明容差核对合格、降级、拒收及干燥失水；秸秆/颖壳与未收获籽粒作为不同去向分别观察，不虚构基本流交换；拒收物须有去向，重新合格前须有返工链接；共用能源只计一次。 | uc-safflower-production; wisconsin-safflower |
| `valid_scope` | 数据集用途 | 排除榨油/粕加工；披露另售残余物或筛下物及归属方法。 | uc-safflower-production; wisconsin-safflower |

## 10. 发布数据集档案

| Field | Value |
| --- | --- |
| dataset_role | 作物与首个农场门籽粒前景数据包；发布前仍须方法评审。 |
| downstream_use | `secondary_dataset`；仅当地区、年份、路线、等级和水分具代表性时可作 `background_dataset`。 |
| allowed_use | 路线及状态已声明、可比的农场门完整未加工红花籽粒。 |
| excluded_use | 播种用种、提取油、粕、加工饲料、交接点或水分未知状态。 |
| required_metadata | 作物年、地区、田块面积、品种/油脂类型、灌溉、收获路线、等级、实测水分、处理、贮存、分配、交接点和 UUID。 |
| required_quality_disclosure | 田块/批次覆盖、实测与分配值、平衡差额、未解析流身份及区域适用性。 |
| update_trigger | 新核实的播种用种身份、市场路线改变、新一手记录、区域实践改变或产品流修订。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| uc-safflower-production | extension_guidance | 加州大学农业与自然资源部，《Safflower Production in California》，出版物 21565，https://oilseeds.ucdavis.edu/sites/g/files/dgvnsk14771/files/inline-files/21565e.pdf | 收获模式、损失、农场处理与下游油/粕界限；加州阈值仅适用于当地。 |
| wisconsin-safflower | extension_guidance | 威斯康星大学与明尼苏达大学推广机构，《Safflower》，Alternative Field Crops Manual（1992），https://corn.aae.wisc.edu/Crops/Safflower.aspx | 作物系统、灌溉、收获、清选、干燥及收购/贮存区别。 |
