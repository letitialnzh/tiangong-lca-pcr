---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rape-or-colza-seed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 油菜籽

## 1. 范围与适用性

本 PCR 适用于一年生作物生产、在农场门交付的完整未加工油菜籽中的油料商品籽路线。范围包括田间生物生产、籽粒收获、初级清选、达到交付状态所需的调理以及批次分级。油菜籽大类中的播种种子市场路线还需要额外的种子等级调理和身份依据，本 PCR 的商品籽参考流不代表该路线。芥菜籽、菜籽油、菜籽粕、压榨和精炼不属于完整油菜籽产品类别。若达到声明交付状态需要委托场外清选或干燥，不得借“农场门”名称将其隐去；应声明地点并计入到该状态的服务。下述地域分级例子不将加拿大等级强加于其他市场。来源：`unsd-cpc-01443`、`manitoba-canola-management`、`cgc-canola-grading`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rape-or-colza-seed |
| classification_refs | CPC 3.0 01443，油菜籽 |
| covered_products | 油料商品籽路线的完整未加工油菜籽；适用时包括符合 canola 品质的籽粒 |
| excluded_products | 芥菜籽；菜籽油；菜籽粕；压榨或精炼品。播种种子市场批次须有独立核实的参考流及附加路线规则，方可为该分支提供指导。 |
| representative_product | 一年生管理作物生产、交付的完整未加工 canola 籽粒 |
| production_route | 年度田间生产；割晒后捡拾联合收割或直接联合收割；初级清选；条件性干燥或通风；分级。两种收获方式对同一地块或作业批次互斥，但可在同一农场以不同批次并存。割晒路线增加割晒、田间熟化和捡拾；直接收割省去这些步骤，须有其自身的荚裂损失证据。两者继承相同的作物生产及籽粒交付规则。 |
| market_state | 农场门完整籽粒，声明实际含水率、等级、绿籽、杂质及调理状态 |

来源：`manitoba-canola-management`、`canola-council-harvest`、`cgc-canola-grading`。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明的农场门交付点被接受的完整未加工油菜籽 |
| How much | 1 kg 净合格籽粒，按交付时实测湿基含水率计 |
| How well | 声明作物种类/市场类别、等级或合同规格、绿籽及杂质；不进行榨油 |
| How long or cycle | 一个作物年度或可识别生产季 |
| reference_flow_link | `accepted_seed` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Rape or colza seed `be87e81e-303f-4607-a1f5-0cb5ef2d8f74` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 作物种类和市场类别；作物年度；地区；收获路线；湿基含水率；等级/合同规格；绿籽与杂质；清选和干燥/通风状态；农场门交付地点 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `accepted_seed` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实测湿基含水率报告净合格籽粒质量；剔除筛下物、所选参考等级以外的降级批次和废弃籽粒。 |
| `moisture_conversion` | 调理前后批次质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 如需换算到声明的比较含水率，仅用实测湿基含水率计算：换算质量 = 实称质量 × (1 − 实测含水率) / (1 − 比较含水率)；同时保留实称质量。 |
| `field_normalization` | 田间投入与排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用实测批次产量将作物年度田间总量归因到合格籽粒；单独保留地块面积和生产季作为审计基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 播种时已备耕的耕地和购入或自留的播种种子；须声明前茬残体和土壤碳初始状态。 |
| starting_condition_role | 作物年度田间生产的起点；不得假定种子或整地无负荷。 |
| product_classification_scope | 完整未加工油菜籽中的油料商品籽路线；其他油料籽、芥菜籽和已加工油不在范围内。播种种子市场分支须有附加规则及单独核实的流。 |
| recursive_input_rule | 如用同类收获籽粒作生产投入，保留其上游数据集，不将其递归生成本年度产出。播种种子是有独立上游供应的投入。 |
| upstream_dataset_requirement | 为播种种子、肥料、植保材料、能源及购入服务配套时空相符的背景数据集。 |
| disclosure | 声明地块面积、作物年度、土地管理历史、收获路线、调理地点、等级制度、含水率基准及残体去向。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `field_to_gate` | 作物年度前景 | 纳入播种及管理直至收获、清选、实际稳定处理、分级和农场门交付；单列达到所述产品状态所需的委托作业。 | `manitoba-canola-lca` |
| `straw_fate` | 收获残体 | 按实际去向记录还田、移出利用或焚烧的秸秆和颖壳；还田残体不得计作销售共产品；将还田残体氮计入土壤排放计算。 | `manitoba-canola-management`, `ipcc-2019-soils` |
| `grade_state` | 籽粒批次 | 清选筛下物、合格等级、可用降级籽粒和废弃物分别记录去向，并与原料籽粒平衡；不能仅通过干燥重新贴标签来消除绿籽问题。 | `cgc-canola-grading` |
| `stabilization` | 潮湿或温热籽粒 | 仅当交付前实际进行通风、冷却或干燥时纳入。记录处理前后含水率、温度和损失；不假定每批次均须干燥。 | `manitoba-canola-management`, `manitoba-canola-lca` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_management` | 田间生物生产 | required | 每个年度作物批次 | 播种及管理生长；移交成熟田间作物而非籽粒 | 播种面积、年度投入和产量 |
| `harvest` | 收获与籽粒获取 | required | 每个作物批次 | 独立的割晒/捡拾或直接联合收割、脱粒；移交未清选籽粒并追踪荚裂及残体去向 | 收获作业批次及原料籽质量 |
| `conditioning` | 初级清选及条件性稳定处理 | required | 清选必有；仅在实际进行时纳入通风或干燥 | 原料籽变为清洁整粒籽；潮湿或温热籽粒得到稳定处理，筛下物及损失退出 | 处理前后质量与含水率 |
| `grading` | 质量分级与交付 | required | 每个交付批次 | 清洁籽粒按合格、降级和废弃去向分类 | 等级批次质量与样品结果 |

田间油菜是受管理的生物生产对象。种子、肥料、植保、水和田间能源属于管理投入；收获另设割取及脱粒作业，因为籽粒获取有独立的损失和作业边界。割晒与直接收割改变收获拓扑、燃料记录、田间熟化间隔和荚裂校验；灌溉与雨养等生产变体在同一田间管理父活动下改变水投入及水源核查。每个地块/作业或调理批次仅记录一次；批次用电、清洁和换批负荷跟随其服务的批次。灌溉生产须记录灌溉取水、泵送能源及服务地块；雨养生产不纳入这些流。来源：`manitoba-canola-management`、`canola-council-harvest`、`canola-council-establishment`。

### 过程：田间生物生产（`crop_management`）

#### 输入

##### 产品流

###### 播种用种子（`planting_seed`）

记录进入作物生产的认证或自留播种用种子；它是投入，不是收获参考产品。

- 选定流：Rape/colza planting seed
- 流属性/单位：Mass / kg
- 数量规则：播种面积对应的称重或发票数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`manitoba-canola-management`
- 数量范围：来源支持的场景性典型区间
  - 范围角色：典型范围（`typical_range`）
  - 下限：4.3
  - 上限：6.5
  - 单位：kg/ha
  - 基准：将 3.8–5.8 磅/英亩的示例播种量换算为 kg/ha；仅对应特定千粒重和出苗率，并非通用限值。
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`canola-council-seeding-rate`

###### 农业养分与肥料投入（`crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`manitoba-canola-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：2000
  - 单位：kg/ha
  - 基准：按 separately recorded fertilizer product masses per cultivated hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保产品（`crop_protection`）

按产品及施用量记录种子、杂草、病害和虫害防治投入。

- 选定流：Crop protection product
- 流属性/单位：Mass or Volume / kg or L
- 数量规则：播种面积对应的施用日志数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`manitoba-canola-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg or L/ha
  - 基准：按 each separately recorded crop-protection formulation per treated hectare in its declared unit 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间作业能源（`field_energy`）

记录播种、整地、喷施和实际灌溉的燃料及外购电力。

- 选定流：Diesel or electricity
- 流属性/单位：Volume or Energy / L fuel or kWh electricity
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：作物地块对应的计量或机械日志用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_operations`
- 来源：`manitoba-canola-lca`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ/ha
  - 基准：按 field fuel and electricity converted to energy per cultivated hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本类无单独记录的流。

##### 基本流

###### 灌溉取水（`irrigation_water`）

如有灌溉，环境取水与购买的供水产品分别记录。

- 选定流：Water, unspecified natural source
- 流属性/单位：Volume / m3
- 数量规则：作物地块的计量取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha
  - 基准：按 irrigation withdrawal per cultivated hectare; conditional route 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 成熟田间油菜作物（`standing_crop`）

该中间作物状态移交收获过程，不得再次计作可销售籽粒。

- 选定流：Standing rape/colza crop
- 流属性/单位：Mass / kg
- 数量规则：地块面积与估算生物量；与收获籽粒及残体核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`manitoba-canola-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：50000
  - 单位：kg biomass/ha
  - 基准：按 standing crop biomass per cultivated hectare; do not equate with clean seed yield 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本类无单独记录的流。

##### 基本流

###### 农田土壤氧化亚氮（`field_n2o`）

使用声明的区域方法，以施氮及还田残体氮计算直接和间接氧化亚氮。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg N2O
- 数量规则：根据已记录施氮量及残体去向作方法计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`ipcc-2019-soils`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/ha
  - 基准：按 calculated managed-soil N2O per cultivated hectare; retain factor-method audit 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获与籽粒获取（`harvest`）

#### 输入

##### 产品流

###### 割晒机与联合收割机燃料（`harvest_fuel`）

将田间燃料对应实际割晒或直接联合收割批次，包括捡拾与脱粒。

- 选定流：移动机械燃料，柴油载体
- 流属性/单位：Volume / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：作业燃料记录或机械工时换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`canola-council-harvest`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：L/ha
  - 基准：按 swather and combine fuel per harvested hectare; route specific 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本类无单独记录的流。

##### 基本流

本类无单独记录的流。

#### 输出

##### 产品流

###### 未清选收获籽粒（`raw_seed`）

联合收割机卸粮后、去杂或农场干燥前称量籽粒。

- 选定流：Rape/colza seed, raw
- 流属性/单位：Mass / kg
- 数量规则：每收获批次地磅质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`manitoba-canola-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg/ha
  - 基准：按 raw harvested seed per harvested hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 移出田间另作利用的秸秆（`removed_straw`）

仅在秸秆确实移出并利用时单列产品输出；否则计入田间残体。

- 选定流：Rape/colza straw
- 流属性/单位：Mass / kg dry matter
- 数量规则：称量或测量移出干质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`
- 来源：`ipcc-2019-soils`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg dry/ha
  - 基准：按 dry removed straw per harvested hectare; conditional sale or use 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 荚裂或洒落籽粒损失（`harvest_reject`）

记录留在田间或收获时洒落的籽粒损失，绝不计为合格农场门产品。

- 选定流：Lost rape/colza seed
- 流属性/单位：Mass / kg
- 数量规则：田间损失抽样或投入产出核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`canola-council-harvest`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg raw harvested seed
  - 基准：按 shattered or spilled seed per kilogram captured raw seed; severe losses need review 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

本类无单独记录的流。

### 过程：初级清选及条件性稳定处理（`conditioning`）

#### 输入

##### 产品流

###### 清选、干燥与通风能源（`conditioning_energy`）

按实际调理批次记录电力和燃料；仅常温通风时不得计入干燥燃料。

- 选定流：Electricity or fuel
- 流属性/单位：Volume or Energy / L fuel or kWh electricity
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：计量或设备运行时间乘额定消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：`manitoba-canola-lca`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg raw seed
  - 基准：按 cleaning, drying and aeration fuel and electricity converted to energy per kilogram raw seed 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本类无单独记录的流。

##### 基本流

本类无单独记录的流。

#### 输出

##### 产品流

###### 已调理整粒籽粒（`prepared_seed`）

将清选及必要稳定化后的整粒籽粒移交分级，不进行压榨或榨油。

- 选定流：Rape/colza seed, cleaned
- 流属性/单位：Mass / kg
- 数量规则：清选及干燥后的批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：`manitoba-canola-lca`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg dry/kg dry raw seed
  - 基准：按 prepared dry seed per kilogram incoming dry raw seed 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 废物流

###### 清选筛下物与杂质（`screenings`）

将可降级利用的筛下物与真正废物分开，记录各自去向。

- 选定流：Canola screenings
- 流属性/单位：Mass / kg
- 数量规则：按去向称量筛下物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：`cgc-canola-grading`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg dry/kg dry raw seed
  - 基准：按 dry screenings per kilogram incoming dry raw seed 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 基本流

###### 干燥蒸发水分（`drying_water`）

依据干燥前后批次质量与实测湿基含水率计算水分去除量。

- 选定流：Water to air
- 流属性/单位：Mass / kg
- 数量规则：根据批次含水率测量作质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 来源：`manitoba-canola-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg raw seed
  - 基准：按 water evaporated per kilogram incoming wet raw seed 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

### 过程：质量分级与交付（`grading`）

#### 输入

##### 产品流

###### 分级及装卸能源（`grade_handling_energy`）

在农场门边界内发生时记录取样、转运与分级的电力或燃料。

- 选定流：Electricity or fuel
- 流属性/单位：Volume or Energy / L fuel or kWh electricity
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：每等级批次的计量或机械日志
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cgc-canola-grading`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg prepared seed
  - 基准：按 grading and handling fuel and electricity converted to energy per kilogram prepared seed 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本类无单独记录的流。

##### 基本流

本类无单独记录的流。

#### 输出

##### 产品流

###### 合格未加工油菜籽（`accepted_seed`）

在交付点逐等级称量合格籽粒，并保留含水率、绿籽及杂质限定信息。

- 选定流：Rape or colza seed `be87e81e-303f-4607-a1f5-0cb5ef2d8f74`
- 流属性/单位：Mass / kg
- 数量规则：逐批次合格交付质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cgc-canola-grading`
- 数量范围：参考产出恒等式
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference seed
  - 基准：净合格产出等于所声明的 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

###### 降级籽粒批次（`downgraded_seed`）

将降级但仍可利用批次的去向和销售或用途与所选参考等级分别声明。

- 选定流：Rape/colza seed, downgraded
- 流属性/单位：Mass / kg
- 数量规则：逐批次称量降级籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cgc-canola-grading`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading input
  - 基准：按 downgraded seed per kilogram prepared seed entering grading 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 废物流

###### 剔除或污染籽粒（`rejected_seed`）

若批次无法回收利用，记录处置路径，不计入参考产品质量。

- 选定流：Rejected rape/colza seed
- 流属性/单位：Mass / kg
- 数量规则：称量废弃质量并保存处置记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 声明交付点合格籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`cgc-canola-grading`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading input
  - 基准：按 rejected seed per kilogram prepared seed entering grading 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 基本流

本类无单独记录的流。

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_seed_output` | 合格及降级籽粒 | 同一籽粒产品按等级批次进行实体质量分流；同一籽粒质量不得重复分配，废弃籽粒不构成合格参考产出。 | `cgc-canola-grading` |
| `straw_decision` | 移出秸秆 | 只有在有证据证明秸秆出售或转移作生产性利用时，才将其列为独立共产品。分别记录籽粒与秸秆的质量和交接点。可分开的割取、打捆及移出负荷直接归于秸秆；不可分开的田间与收获负荷，按同期农场门经济价值在合格籽粒与已售秸秆之间分配。披露价格、份额及全部归于籽粒的敏感性结果。留田或粉碎还田秸秆是田间残体，不是共产品；废物不取得分配份额。每项产出和负荷仅计入一个交接及一次归属。 | `manitoba-canola-management`, `ipcc-2019-soils` |
| `run_attribution` | 田间、收获、清选及分级作业 | 用实际作业记录将计量投入、产出及清洁/换批负荷分配给服务的地块或批次；记录共用负荷分配键，每项仅计一次。返工籽粒保留原有负荷，仅增加返工能耗。 | `manitoba-canola-lca` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `crop_management` | 种子、肥料、植保及灌溉 | 发票及田间施用日志 | field_id, date, product, mass, nutrient analysis, water source and volume | 将采购与田间施用量核对 | kg; m3 | 每次施用 | 完整作物年度 | 每块地 | 按地块及物质汇总，再关联合格籽粒 | 发票、校准及土壤测试 |
| `cp_operations` | `crop_management` | 整地、播种及喷施能源 | 计量与机械日志 | field_id, operation, hours, fuel, electricity | 燃料领用及计量记录 | L; kWh | 每次作业 | 完整作物年度 | 每块地 | 汇总并按记录工时分配共用设备 | 燃料票据及机械日志 |
| `cp_harvest` | `harvest` | 路线、原料籽及荚裂损失 | 联合收割机及地磅记录 | field_id, route, run_id, date, raw_mass, moisture, fuel, loss_sample | 区分割晒与直接收割批次；称量籽粒并抽样损失 | kg; %; L | 每次作业 | 收获季 | 每块地/作业批次 | 去重后汇总作业批次 | 校准秤及田间损失样本 |
| `cp_residues` | `harvest` | 秸秆和颖壳去向 | 田间记录及装车票据 | field_id, retained_area, removed_dry_mass, destination, burn_event | 田间检查及装车称重 | ha; kg dry | 每次收获 | 收获季 | 每块地 | 核对移出与留田份额 | 装车票据及照片 |
| `cp_conditioning` | `conditioning` | 清选、干燥、通风及筛下物 | 批次作业记录 | lot_id, before_mass, after_mass, before_moisture, after_moisture, temperature, energy, screenings_mass, destination | 每次处理称重及采样 | kg; %; °C; kWh; L | 每批次/处理 | 收获至交付 | 每批次 | 汇总能源并保留批次质量平衡 | 秤、含水率仪及计量日志 |
| `cp_grading` | `grading` | 合格、降级及废弃籽粒 | 等级证书及交付票据 | lot_id, grade, green_seed, dockage, accepted_mass, downgraded_mass, reject_mass, destination | 代表性采样及交付称重 | kg; % | 每个交付批次 | 交付季 | 每批次 | 按最终去向汇总一次 | 样品报告及称重票据 |
| `cp_emissions` | `crop_management` | 农田土壤排放 | 计算表 | field_id, N_inputs, returned_residue_N, method_version, factors, climate | 对记录的活动量应用声明的本地因子或 IPCC 方法 | kg N; kg N2O | 每年 | 完整作物年度 | 每块地 | 汇总直接与间接排放，避免重复氮库 | 因子引用与计算审计 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_grade_mass` | 交付批次 | 合格质量 = 已称量合格批次之和；降级及废弃质量分别求和；每批次仅有一个最终去向。 | 批次票据与等级结果 | kg 合格籽粒 | `cgc-canola-grading` |
| `dry_matter_balance` | 调理 | 守恒籽粒干物质为批次质量 × (1 − 湿基含水率)，扣除实测筛下物及物理损失；标记无法解释的差额，不强行并入合格产出。 | 处理前后质量、含水率、筛下物 | kg 籽粒干物质及 kg 除去的水 | `manitoba-canola-management` |
| `soil_n2o` | 田间氮 | 使用声明的因子计算直接及间接 N2O，区分肥料氮与还田残体氮；同一排放结果不得在多个节点重复使用。 | 氮投入、残体去向及本地因子 | kg N2O | `ipcc-2019-soils` |
| `normalized_inventory` | 田间及批次记录 | 将正确归因的作物年度或批次总量除以净合格参考籽粒质量，保留原始总量和面积。 | 已核对记录及合格质量 | 每 kg 清单 | `manitoba-canola-lca` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 籽粒产品 | 核实作物身份，区分油菜籽、芥菜籽、播种种子及加工油。 | 田间记录、交付等级 |
| `dq_mass` | 籽粒批次 | 使用校准秤及湿基含水率读数，展示原料、清洁、合格及损失质量平衡。 | 地磅及仪表检查 |
| `dq_routes` | 收获及调理 | 保留地块/作业及批次 ID，避免互斥收获路线、实际通风/干燥及任何返工重复计入。 | 作业日志与批次谱系 |
| `dq_grade` | 等级状态 | 保留适用于声明市场的绿籽、杂质及废弃检验，并识别所有降级去向。 | 等级报告及销售/退货票据 |
| `dq_emissions` | 田间排放 | 识别因子、地区、方法版本、施氮及残体去向；缺乏本地数据时报告局限。 | 计算表及来源记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product` | 参考流 | 若数据包把油、粕、芥菜籽或播种种子市场批次记入本已核实的油料商品籽参考流，则拒绝；须具备所有参考限定信息。 | `unsd-cpc-01443` |
| `validate_routes` | 收获 | 每次收获作业选择割晒/捡拾或直接联合收割，同一面积不可同时选择；核对相应割取燃料、熟化间隔和路线特定损失记录。 | `canola-council-harvest` |
| `validate_mass_balance` | 籽粒链 | 结合实测含水率核对原料籽、清洁籽、合格、降级、废弃、筛下物、水分去除及损失状态；同一内部中间流不得再计为最终产出。 | `manitoba-canola-management`, `cgc-canola-grading` |
| `validate_rework` | 规格外籽粒 | 任何返回清选或干燥的批次应追溯原批次，仅增加增量服务，并核实最终降级、回收或废弃去向；废弃批次未经成功处理记录不得改计为合格。 | `cgc-canola-grading` |
| `validate_storage` | 调理 | 若交付状态经冷却或干燥，须有处理前后含水率、温度及实际能耗记录；未进行处理时不得套用通用干燥负荷。 | `manitoba-canola-lca` |
| `validate_shared_load` | 批次作业 | 将每项能耗、清洁或换批记录对应到作业批次或期间及分配键；检查合计等于计量投入且只计一次。 | `manitoba-canola-lca` |
| `validate_irrigation` | 田间路线 | 灌溉地块须记录实测取水量、水源及泵送能源；雨养地块不得套用假定灌溉清单。 | `canola-council-establishment` |
| `validate_residue` | 秸秆与田间排放 | 确认秸秆移出或留田去向，并核对其与残体氮排放和任何共产品分配的一致性。 | `ipcc-2019-soils` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整未加工油菜籽的农场门前景生产数据集 |
| downstream_use | `secondary_dataset`；供食品、饲料、榨油或其他下游系统使用的 `background_dataset` |
| allowed_use | 等级、含水率、地理、作物年度和管理路线相符的完整籽粒供应 |
| excluded_use | 芥菜籽、播种用种子、菜籽油或菜籽粕，以及未报告场外调理的系统 |
| required_metadata | 作物身份、面积、地区、年度、产量、路线占比、等级规格、湿基含水率、绿籽及杂质、残体去向和调理地点 |
| required_quality_disclosure | 原始记录覆盖率、批次质量平衡、来源/因子版本、未解决的流 UUID 绑定、区域代理数据的使用及等级迁移限制 |
| update_trigger | 作物或市场类别、路线、等级基准、含水率管理、区域排放因子或可用原始记录发生变化 |

## 11. 数据源

| 来源 ID | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-01443` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/01443 | 产品类别边界 |
| `manitoba-canola-management` | `extension_guidance` | https://www.gov.mb.ca/agriculture/crops/crop-management/canola.html | 栽培、割晒、收获、含水率及秸秆管理 |
| `manitoba-canola-lca` | `dataset` | https://www.gov.mb.ca/agriculture/environment/climate-change/life-cycle-assessment-of-agriculture-in-manitoba.html | 农场门周期、籽粒处理与条件性通风 |
| `canola-council-harvest` | `extension_guidance` | https://www.canolacouncil.org/canola-encyclopedia/harvest-management/ | 割晒与直接联合收割路线及荚裂损失 |
| `cgc-canola-grading` | `official_guidance` | https://www.grainscanada.gc.ca/en/grain-quality/official-grain-grading-guide/10-canola-rapeseed/grading-factors.html | 杂质与明显绿籽分类 |
| `ipcc-2019-soils` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 农田土壤直接与间接 N2O 及残体氮核算 |
| `canola-council-establishment` | `extension_guidance` | https://www.canolacouncil.org/canola-encyclopedia/plant-establishment/environmental-effects/ | 灌溉作为条件性管理生产路线 |
| `iso-14044-lci` | `standard` | https://www.iso.org/standard/38498.html | 生命周期清单定量参考与投入/产出核算框架；本文 0–1 物料份额及 1 kg 参考产出界限来自代数关系，并非 ISO 给出的经验率。 |
| `canola-council-seeding-rate` | `extension_guidance` | https://www.canolacouncil.org/canola-encyclopedia/plant-establishment/seeding-rate/ | 将 3.8–5.8 磅/英亩的示例播种量换算为 kg/ha；仅对应特定千粒重和出苗率，并非通用限值。 |
