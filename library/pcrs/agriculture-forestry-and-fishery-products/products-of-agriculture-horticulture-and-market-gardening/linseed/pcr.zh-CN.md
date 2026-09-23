---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.linseed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 亚麻籽

## 1. 范围与适用性

本规则适用于一年生亚麻从种植到农场门交付的亚麻籽。当前可用的固定参考流为未加工油用籽粒，因此本材料 PCR 对 CPC 01441 全叶类的关系为 `narrower`。单独声明的播种用种子等级可共用栽培和收获路线，但须有额外的种子批次清选、纯度与发芽率证据、独立产品流身份及独立交付。范围包括整地、播种、田间管理、收获、首次清选与分级，以及交付前必要的通风或干燥。直接联合收获与先割晒后联合收获是两种可选路线。若实测含水率已满足声明的销售或储存状态，可不经机械干燥而交付。亚麻油压榨、纤维加工以及出门后的工业仓储和运输不在范围内。秸秆只有实际出售时才构成共同产品。[manitoba-flax-management] [cfia-common-seed]

## 2. 产品类别标识

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.linseed` |
| classification_refs | CPC 3.0 `01441` 亚麻籽；通用种用产出身份未核实时，材料参考流关系为 `narrower` |
| covered_products | 农场门交付的未加工亚麻籽或 solin 油用籽粒。播种用种生产作为条件分支描述，但在独立产出流核实前不得作为已验证参考产品。 |
| excluded_products | 压榨亚麻油和饼粕；加工后的亚麻纤维和纺织品；仅产秸秆的生产系统 |
| representative_product | 一季生亚麻田产出的散装已清选亚麻籽 |
| production_route | 父活动 `module.activity.managed-biological-production` 是一年生田间栽培。收获技术可为直接联合收获或割晒后联合收获，后者增加割晒作业及田间风干阶段；同一田块部分互斥，不同部分可以分别记录。父活动 `module.activity.primary-conditioning-node` 是首次清选；分级形成独立的质量状态交付。若需通风或干燥，则增加电力或燃料及失水核算。播种用种子批次另需种子等级清选、纯度/发芽率检验及独立的门口身份。各路线差异须有田块、设备和批次记录支持。[manitoba-flax-management] [cfia-common-seed] |
| market_state | 未加工油用籽粒，须声明实际含水率、等级、品种或 solin 属性及农场门交接点；播种用种批次必须使用另行核实的参考流。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 农场门交付的未加工亚麻籽 |
| How much | 1 kg 净合格籽粒 |
| How well | 对油用参考流，声明品种/solin 状态、实测湿基含水率、杂质等级及是否清选或干燥；不得用固定 10% 水分质量代替实际交付质量。播种用种子的产出需要独立参考流和经核实的种子批次身份。[manitoba-flax-management] [cfia-common-seed] |
| How long or cycle | 一个有记录的一年生种植周期及其产出的籽粒批次 |
| reference_flow_link | `linseed_grading` 的合格净产出；须与收获籽粒及降级、拒收量核对 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f` |
| Reference flow property | 质量 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 亚麻品种或 solin 属性；种植年和地区；农场与田块范围；实测湿基含水率；杂质或降级等级；油用市场用途；直收或割晒路线；实际调质；农场门交接点 |
| Binding | `fixed` |

## 4. 计量和单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `linseed_net_mass` | 参考及中间籽粒 | 质量 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 各交接点记录实测湿质量，扣除皮重和分离的杂质。 |
| `linseed_moisture` | 调质前后籽粒 | 湿基含水率 | % | 记录批次实测水分和测定方法；比较不同水分状态的质量时按干物质守恒换算，并披露失水和非水损失。 |
| `area_normalization` | 田间投入和排放 | 面积 | ha | 使用收获面积和核对后的批次质量将田间总量归一到每 kg 合格籽粒；不得以区域默认产量冒充前景实测产量。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 亚麻种植周期开始时的已准备农田，须披露前茬及残留物状态 |
| starting_condition_role | 农田为承接情境；外购种子、肥料、药剂、能源和水作为携带上游负荷的产品投入。 |
| product_classification_scope | 农场门交付的亚麻油用籽粒；合格播种用种批次须有独立核实的产出流，不得使用固定籽粒参考流。不包含后续制油或纤维加工。 |
| recursive_input_rule | 外购或留用播种亚麻籽是本周期投入，不得把本周期产出作为零负荷投入循环引用；应标识其种用或籽粒来源。 |
| upstream_dataset_requirement | 外部投入须关联有适当地区和时间代表性的上游数据集；田间直接排放及土地、残茬假设另行报告。 |
| disclosure | 披露前茬、土壤和灌溉情境、耕作及收获路线、田块面积、种植年、实际等级与水分、秸秆去向、调质及共同产品分摊。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_field_gate` | 种植周期 | 纳入播种、田间管理和收获，以及农场内首次清选、分级和必要的稳定处理，直至声明的农场门批次交付；若出售播种用种子，另纳入独立的种子等级调质与检验。不纳入榨油、纤维加工或出门运输。 | `manitoba-flax-management`, `cfia-common-seed` |
| `boundary_route` | 收获 | 每一田块部分只指派直收或割晒后收获一种路线；若成熟后使用干燥剂，须记录。不可对同一籽粒同时计入两种收获路线。 | `manitoba-flax-management` |
| `boundary_straw` | 收获生物量 | 记录秸秆留田、出售移出或焚烧及相关作业、田间排放处理；不能因有秸秆就假定已出售。 | `manitoba-flax-management`, `ipcc-2019-managed-soils` |
| `boundary_conditioning` | 籽粒 | 仅在实际操作时纳入干燥或通风，标识处理前后水分、能源和批次交接。曼尼托巴资料区分约 10% 水分可收获与长期储存约 8–9% 的较安全状态；应依据实测批次要求，不能设定普遍固定目标。 | `manitoba-growing-flax` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `flax_cultivation` | 一年生亚麻田间栽培 | `required` | 每块种植田 | 管理后的成熟田间作物，含投入和田间交换 | 田块和种植周期 |
| `flax_harvest` | 割晒或直收及脱粒 | `required` | 每块田只选一种路线 | 将籽粒从成熟作物分离，并记录秸秆及田间损失 | 收获作业批次 |
| `linseed_cleaning` | 首次籽粒清选 | `required` | 若直接交付联合收获机清选籽粒，记录无额外处理 | 将糠秕和杂质从原始籽粒分离 | 入料批次 |
| `linseed_stabilization` | 通风或干燥 | `conditional` | 为满足声明水分状态而实际进行 | 将湿籽粒转为稳定状态，并核算失水和能源 | 调质批次 |
| `linseed_grading` | 批次分级和农场门交接 | `required` | 每个交付批次 | 分离合格、降级、拒收和废弃状态 | 门口批次 |
| `linseed_seed_grade` | 播种用种子批次调质与农场门交接 | `conditional` | 批次以播种用途出售 | 额外种子批次清选、检验与独立交接 | 种子批次 |

栽培按田块和周期记录。收获按田块和机器作业单独编号，以观察割晒、脱粒、损失和燃料。清选、调质及分级按批次记录。共用设备的换批、清扫及空转能耗，只能依据有记录的作业时间或处理质量分摊一次，并核对田块与批次的对应关系。[manitoba-flax-management]

### 过程：一年生亚麻田间栽培（`flax_cultivation`）

#### 输入

##### 产品流

###### 播种材料（`linseed_sowing_input`）

外购或留种亚麻种子进入田块；其来源应与产出的籽粒分开标识。

- 选定流：亚麻播种用种子；待按实际购入材料确认身份
- 流属性/单位：质量 / kg
- 数量规则：田块和种植周期的播种量记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田块和种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`manitoba-flax-management`
- 数量范围：来源支持的典型播种量区间
  - 范围角色：典型范围（`typical_range`）
  - 下限：39
  - 上限：63
  - 单位：kg/ha
  - 基准：35–56 磅/英亩亚麻播种量换算为千克/公顷；限于所引曼尼托巴条件
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`manitoba-growing-flax`

###### 农业养分与肥料投入（`flax_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田块和种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`manitoba-flax-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：50000
  - 单位：kg/ha
  - 基准：按 separately recorded fertilizer or manure product mass per cultivated hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 施用植保产品（`linseed_crop_protection`）

分别记录实际除草剂、杀菌剂和杀虫剂的有效成分及田块；未施用则为零。[manitoba-flax-management]

- 选定流：实际植保产品；每一清单实例对应一种产品，身份待施用记录确认
- 流属性/单位：质量 / kg
- 数量规则：每块田实记的产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田块和种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`manitoba-flax-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/ha
  - 基准：按 separately recorded crop-care formulation mass per cultivated hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械燃料（`linseed_field_fuel`）

记录整地、播种和田间管理设备实际使用的柴油或其他燃料。

- 选定流：实际移动机械燃料产品，身份待设备记录确认
- 流属性/单位：能源 / MJ
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：计量或作业记录的田间燃料能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田块和种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ/ha
  - 基准：按 field-machine fuel energy per cultivated hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间电力（`linseed_field_electricity`）

将水泵或其他田间管理设备的电力与燃料分开记录。

- 选定流：电力产品，身份待电表记录确认
- 流属性/单位：能源 / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：计量的田间电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田块和种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：5000
  - 单位：kWh/ha
  - 基准：按 field electricity per cultivated hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供给的灌溉水（`linseed_irrigation_water`）

仅在灌溉水作为产品跨越过程边界供应时记录；直接环境取水另行记录。

- 选定流：灌溉水产品，身份待供应记录确认
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合分组：`irrigation-water`
- 数量规则：计量的供给灌溉水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田块和种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha
  - 基准：按 irrigation delivered per cultivated hectare; conditional route 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设废弃物投入；外来有机改良物按实际身份作为产品投入记录。

##### 基本流

###### 环境灌溉取水（`linseed_water_withdrawal`）

若前景边界内直接从环境取灌溉水，须单独记录来源和体积，不与购入水产品重复。

- 选定流：环境取水，具体区室和身份待场址记录确认
- 流属性/单位：体积 / m3
- 数量规则：适用时的计量取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田块和种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha
  - 基准：按 water withdrawn per cultivated hectare; conditional route and separately reconciled with delivery 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

管理后的田间成熟作物作为内部状态交给 `flax_harvest`，由 `cp_field_area` 编号；它不是独立产品交换或销售。

##### 废物流

田间残茬不预设为废物流，其实际去向在收获过程判定。

##### 基本流

###### 管理土壤氮排放（`linseed_soil_n2o`）

用记录的肥料、粪肥及返田残茬氮，按照适用的地区方法或 IPCC 2019 方法计算直接和间接 N2O，避免残茬氮重复计入。[ipcc-2019-managed-soils]

- 选定流：向空气排放的氧化亚氮；具体基本流身份待方法和区室绑定
- 流属性/单位：质量 / kg N2O
- 数量规则：`calc_soil_n2o`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：田块和种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_soil_emissions`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/ha
  - 基准：按 calculated managed-soil N2O per cultivated hectare; retain factor-method audit 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：割晒或直收及脱粒（`flax_harvest`）

#### 输入

##### 产品流

收获节点接收有记录的成熟田块状态及面积；不得将其另计为外购产品。

###### 收获机械燃料（`linseed_harvest_fuel`）

按田间作业记录联合收获机及适用时割晒作业的燃料。[manitoba-flax-management]

- 选定流：收获用实际移动机械燃料产品，身份待作业记录确认
- 流属性/单位：能源 / MJ
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：每次收获作业的燃料记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：收获作业
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`manitoba-flax-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ/ha
  - 基准：按 harvest fuel energy per harvested hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收前干燥剂（`linseed_desiccant`）

仅记录生理成熟后实际施用的干燥剂；它不是必选投入。[manitoba-flax-management]

- 选定流：实际干燥剂产品，身份待施用记录确认
- 流属性/单位：质量 / kg
- 数量规则：每田块实际施用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：收获作业
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：`manitoba-flax-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/ha
  - 基准：按 preharvest desiccant formulation per treated hectare; conditional route 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

收获过程不预设废物流投入。

##### 基本流

除已记录的灌溉或燃料供应外，不规定额外田间资源取用。

#### 输出

##### 产品流

###### 原始收获亚麻籽（`linseed_raw_grain`）

脱粒后的籽粒进入首次清选；记录实测湿质量及水分、种皮损伤和田间损失。[manitoba-flax-management]

- 选定流：亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- 流属性/单位：质量 / kg
- 数量规则：扣除皮重的联合收获籽粒实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：收获作业
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg/ha
  - 基准：按 raw harvested linseed grain per harvested hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 出售的亚麻秸秆（`linseed_sold_straw`）

只有实测且真正出售的秸秆才是预期共同产品，须记录质量及买方交接。否则按实际去向分为留田、焚烧或废弃。[manitoba-flax-management]

- 选定流：亚麻秸秆，身份待实际销售规格确认
- 流属性/单位：质量 / kg
- 数量规则：实测出售质量；无出售时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：收获作业
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_straw_fate`
- 来源：`manitoba-flax-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg dry/ha
  - 基准：按 dry removed straw sold per harvested hectare; zero without sale 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 移出处理的不可用秸秆（`linseed_straw_waste`）

只记录为处置而移出、且没有产品用途的秸秆；留田生物量不是本废物流。

- 选定流：送处置亚麻秸秆，身份待本地处置路线确认
- 流属性/单位：质量 / kg
- 数量规则：实测移出处置质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：收获作业
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_straw_fate`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg dry/ha
  - 基准：按 dry removed straw discarded per harvested hectare; exclude field-retained residue 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

留田和焚烧秸秆属于残茬去向，不是基本产品流。其氮及实际燃烧排放通过 `cp_straw_fate` 和 `calc_soil_n2o` 计算，不得重复计数。[ipcc-2019-managed-soils]

### 过程：首次籽粒清选（`linseed_cleaning`）

#### 输入

##### 产品流

###### 进入清选的原始籽粒（`linseed_cleaning_input`）

将已称量的收获原始批次关联到本清选节点。

- 选定流：亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- 流属性/单位：质量 / kg
- 数量规则：实测入料籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：入料批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg reference grain
  - 基准：按 raw grain entering cleaning per kilogram accepted oilseed reference 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清选电力（`linseed_cleaning_electricity`）

对实际动力清选计量用电；联合收获机清选后无额外作业时记零。

- 选定流：电力产品，身份待电表记录确认
- 流属性/单位：能源 / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：计量的清选电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：入料批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg raw grain
  - 基准：按 cleaning electricity per kilogram raw grain treated 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设废物流投入。

##### 基本流

不预设直接基本流投入；电力或燃料的上游负荷随产品投入处理。

#### 输出

##### 产品流

###### 首次清选后的籽粒（`linseed_cleaned_grain`）

清选后的籽粒按需进入水分稳定过程，再进入分级过程。[manitoba-flax-management]

- 选定流：亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- 流属性/单位：质量 / kg
- 数量规则：清选后实测籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：清选批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg dry/kg dry raw grain
  - 基准：按 first-cleaned dry grain per kilogram dry raw grain 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 废物流

###### 清选出的杂物（`linseed_cleaning_reject`）

除非有明确的产品去向，杂草籽、糠秕和碎屑作为废弃物移出，不计入合格籽粒。[manitoba-flax-management]

- 选定流：清选拒收物，身份待实测组成与去向确认
- 流属性/单位：质量 / kg
- 数量规则：入料湿质量减清选后湿质量，按水分变化校正；或直接测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：清选批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 来源：`manitoba-flax-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg dry/kg dry raw grain
  - 基准：按 removed dry matter per kilogram dry raw grain 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 基本流

机械清选不预设直接排放；若设备现场燃烧燃料，按实际燃料路线记录尾气。

### 过程：通风或干燥（`linseed_stabilization`）

#### 输入

##### 产品流

###### 已清选湿籽粒（`linseed_damp_grain`）

只有实际进行通风或干燥时，实测湿批次进入本节点；否则绕过本节点。

- 选定流：亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- 流属性/单位：质量 / kg
- 数量规则：实测入料湿质量及含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：调质批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg reference grain
  - 基准：按 damp grain entering stabilization per kilogram accepted oilseed reference 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 通风或干燥电力（`linseed_drying_electricity`）

按调质批次记录风机与干燥机的实际用电。[manitoba-growing-flax]

- 选定流：电力产品，身份待电表记录确认
- 流属性/单位：能源 / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：批次计量用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：调质批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：`manitoba-growing-flax`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg damp grain
  - 基准：按 aeration or drying electricity per kilogram damp grain treated 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥机燃料（`linseed_drying_fuel`）

若使用燃料干燥机，按能源载体和批次记录实际燃料。[manitoba-growing-flax]

- 选定流：干燥机用实际固定燃烧燃料产品，身份待设备记录确认
- 流属性/单位：能源 / MJ
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`stationary-combustion-fuel`
- 数量规则：批次实记燃料能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：调质批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：`manitoba-growing-flax`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg damp grain
  - 基准：按 dryer fuel energy per kilogram damp grain treated 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

稳定处理不预设废物流投入。

##### 基本流

不预设直接资源投入；现场燃烧排放应根据已记录燃料和所选方法计算。

#### 输出

##### 产品流

###### 稳定后的籽粒（`linseed_stable_grain`）

籽粒按实测含水率离开本节点，并记录与该操作相关的降温及农场内暂存。[manitoba-growing-flax]

- 选定流：亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- 流属性/单位：质量 / kg
- 数量规则：实测处理后湿质量及含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：调质批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg dry/kg dry damp grain
  - 基准：按 stabilized dry grain per kilogram incoming dry grain 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 废物流

###### 变质或洒落的调质拒收物（`linseed_conditioning_reject`）

不可用籽粒应分离并送有记录的处置或回收路线，不得留在合格产量中。

- 选定流：亚麻籽拒收物，身份待实际去向确认
- 流属性/单位：质量 / kg
- 数量规则：实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：调质批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg conditioning input
  - 基准：按 spoiled or spilled grain per kilogram conditioning input 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 基本流

###### 蒸发水分（`linseed_evaporated_water`）

根据处理前后实测质量与水分计算除去的水，与干籽粒损失或洒落分开。

- 选定流：水蒸气；基本流身份待本地流约定确认
- 流属性/单位：质量 / kg
- 数量规则：`calc_moisture_balance`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：调质批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg damp grain
  - 基准：按 evaporated water per kilogram incoming damp grain 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

### 过程：批次分级与农场门交接（`linseed_grading`）

#### 输入

##### 产品流

###### 待分级籽粒（`linseed_grading_input`）

实测已清选、必要时已稳定的批次进入分级；其上游中间产物不能重复计为外购投入。

- 选定流：亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- 流属性/单位：质量 / kg
- 数量规则：实测分级入料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分级批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg reference grain
  - 基准：按 grain entering grading per kilogram accepted oilseed reference 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设废物流投入。

##### 基本流

不预设直接环境资源取用。

#### 输出

##### 产品流

###### 农场门合格亚麻籽（`linseed_accepted`）

这是唯一的合格未加工籽粒参考产出，须具有声明的等级、水分和销售交接点。

- 选定流：亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- 流属性/单位：质量 / kg
- 数量规则：农场门净称重的合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交付批次
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 数量范围：参考产出恒等式
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference grain
  - 基准：净合格产出等于所声明的 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

###### 降级出售籽粒（`linseed_downgraded`）

低等级籽粒只有单独计量、出售且明确去向时才作为预期产品；记录等级，不得加入合格参考质量。[manitoba-flax-management]

- 选定流：亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- 流属性/单位：质量 / kg
- 数量规则：单独称量的降级出售质量；未出售时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交付批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 来源：`manitoba-flax-management`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading input
  - 基准：按 downgraded sold grain per kilogram grading input 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 废物流

###### 未出售的拒收籽粒（`linseed_grade_reject`）

声明回到 `linseed_cleaning` 再清选、回收或处置的去向。返回批次只关联一次，拒收过程不能形成额外合格产量。

- 选定流：不可销售亚麻籽拒收物，身份待实际去向确认
- 流属性/单位：质量 / kg
- 数量规则：实测拒收质量和每次再清选循环
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：交付批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading input
  - 基准：按 unsaleable grain per kilogram grading input 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 基本流

分级不预设直接排放；实际设备燃料或电力在对应作业中记录。

### 过程：播种用种子批次调质与农场门交接（`linseed_seed_grade`）

#### 输入

##### 产品流

###### 转入播种用种子资格判定的籽粒（`linseed_seed_grade_input`）

单独识别的收获批次进入额外种子等级清选和纯度、发芽率检验。其质量不得计入油用籽粒的合格或降级产出。[cfia-common-seed]

- 选定流：亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`，仅作为尚未取得种用资格的入料
- 流属性/单位：质量 / kg
- 数量规则：称量的转入批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：种子批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_grade`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg harvested grain
  - 基准：按 grain diverted to conditional seed-grade route per kilogram harvested grain 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

###### 种子等级清选能源（`linseed_seed_cleaning_energy`）

按批次记录额外种子等级清选的能源。[cfia-common-seed]

- 选定流：实际电力或燃料能源载体，每一清单实例对应一种载体；身份待仪表记录确认
- 流属性/单位：能源 / kWh 或 MJ
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：批次实记清选能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：种子批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_grade`
- 来源：`cfia-common-seed`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg seed-grade input
  - 基准：按 seed-cleaner energy per kilogram seed-grade input after electricity and fuel conversion 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种子处理产品（`linseed_seed_treatment`）

仅在实际处理种子批次时记录所用材料。[cfia-common-seed]

- 选定流：实际种子处理产品，身份待处理记录确认
- 流属性/单位：质量 / kg
- 数量规则：批次实记产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：种子批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_grade`
- 来源：`cfia-common-seed`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg treated seed
  - 基准：按 seed treatment formulation per kilogram treated seed; conditional route 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种子纯度及发芽率检验服务（`linseed_seed_testing`）

记录用于确定销售等级的取样与实验室检验服务。[cfia-common-seed]

- 选定流：种子检验服务，身份待服务方记录确认
- 流属性/单位：服务 / 次
- 数量规则：批次实记检验次数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：种子批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_grade`
- 来源：`cfia-common-seed`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：tests/lot
  - 基准：按 purity and germination tests per declared seed-grade lot 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设废物流投入。

##### 基本流

不预设直接基本流投入。

#### 输出

##### 产品流

###### 合格播种用亚麻籽（`linseed_planting_seed`）

只有预期播种用途、纯度和发芽率结果、种子等级决定及独立销售交接均有记录的批次才是种用产品。将本分支作为参考流前，须核实平台 UUID。[cfia-common-seed]

- 选定流：播种用亚麻籽；独立平台流 UUID 待确认
- 流属性/单位：质量 / kg
- 数量规则：称量的合格种用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：种子批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_grade`
- 来源：`cfia-common-seed`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg seed-grade input
  - 基准：按 qualified seed per kilogram grain entering seed-grade route; output UUID unresolved 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

###### 降级销售为油用的籽粒（`linseed_seed_downgrade`）

未达种用等级但仍可作为油用籽粒出售时，只在最终油用分级交接点计入一次，并声明等级和质量。[cfia-common-seed]

- 选定流：亚麻籽 `b5ee43d6-cd60-48df-8ac2-c3bc5ca9011f`
- 流属性/单位：质量 / kg
- 数量规则：称量的降级籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：种子批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_grade`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg seed-grade input
  - 基准：按 non-qualifying grain sold as oilseed per kilogram seed-grade input 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 废物流

###### 种子清选拒收物（`linseed_seed_reject`）

清出的杂物或不可销售种子应送有记录的回收或处置路线，不计入两类合格产出。

- 选定流：种子清选拒收物，身份待组成和去向确认
- 流属性/单位：质量 / kg
- 数量规则：称量的拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：种子批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_grade`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg seed-grade input
  - 基准：按 seed cleaning rejects per kilogram seed-grade input 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 基本流

不预设直接排放；实际设备能源按对应路线记录。

## 7. 分配与共同产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_single_grain` | 籽粒和秸秆 | 首先确认是否实际出售秸秆或单独出售降级籽粒。留田秸秆和田间损失是残留物，不是共同产品。合格与降级籽粒质量分别记录。 | `manitoba-flax-management` |
| `allocation_biophysical` | 多个出售产出 | 对可分离的收集、打捆和处理作业先直接归属。不可分的田间及收获负荷，若有合理物理因果关系则按该关系分配；否则按种植年实际出门价格与销售质量的收入份额分配，披露份额并对质量份额做敏感性分析。返田残茬不得作为已售产出分配。 | `manitoba-flax-management`, `eu-pef-allocation` |
| `allocation_batch` | 共用作业 | 为田块部分、收获作业及调质批次编号；共用清扫、干燥机启动及换批能源仅按实测作业时间或处理量归属一次，先核对总量，再分配给合格、降级和拒收产出。 | `manitoba-growing-flax` |
| `allocation_rework` | 再清选或降级籽粒 | 再清选增加实际能源和损失，归入其关联批次，不新增初级籽粒生产。回收出售的籽粒只在最终交接点计数一次；废弃拒收物不获产品抵扣。 | `manitoba-flax-management` |
| `allocation_seed` | 种用与油用产出 | 将额外的种子等级清选、处理和检验直接归属种用批次。不可分的栽培与收获负荷，仅按声明的共同负荷方法在最终出售的种用、油用和秸秆产出之间分配；种用批次降级后只在最终油用交接点计数。 | `cfia-common-seed` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_area` | `flax_cultivation` | 田块和作物 | 田间记录 | 田块编号、年份、品种、前茬、播种与收获面积、土壤、灌溉 | 农场记录和 GIS | ha | 每周期 | 全种植周期 | 每块田 | 仅累加不重叠的收获面积 | 田块图、播种记录 |
| `cp_field_inputs` | `flax_cultivation` | 种子、养分、药剂、燃料、水 | 采购和作业记录 | 产品身份、数量、养分或有效成分、施用日期、田块、机械燃料、水源 | 发票、施用和仪表记录 | kg、L、kWh、m3 | 每次施用 | 全种植周期 | 每块田 | 按材料和田块求和并核对库存 | 发票、仪表校准 |
| `cp_soil_emissions` | `flax_cultivation` | 管理土壤排放 | 田间及方法记录 | 氮投入、粪肥氮、残茬量及氮、土壤、气候、排放方法与因子 | 田间记录和声明的方法 | kg N、kg N2O | 每周期 | 全种植周期 | 每块田 | 每个氮库只应用所选方法一次 | 因子版本、计算表 |
| `cp_harvest` | `flax_harvest` | 籽粒、路线、燃料、田间损失 | 收获记录 | 田块、作业编号、直收或割晒、面积、湿籽粒质量、水分、燃料、干燥剂、估计损失 | 地磅、收割机和作业记录 | ha、kg、%、L | 每次作业 | 收获季 | 每田块/作业 | 不重叠田块部分关联批次 | 称重票、设备日志 |
| `cp_straw_fate` | `flax_harvest` | 秸秆和残茬 | 残茬及销售记录 | 秸秆质量、干物质、销售票、留田、焚烧或处置、打捆燃料 | 地磅、田间记录和发票 | kg 干物质、L | 每田块/作业 | 收获季 | 每块田 | 核对收获、移出和留田份额 | 买方单据、田间照片 |
| `cp_conditioning` | `linseed_cleaning` | 清选和稳定处理 | 批次作业记录 | 批次、处理前后质量与水分、杂物、变质、电力与燃料、运行时间 | 地磅、水分仪、设备仪表 | kg、%、kWh、L | 每批和每次作业 | 收获至交付 | 每批次 | 关联重复处理，不重复计质量或能耗 | 磅秤及仪表校准 |
| `cp_grading` | `linseed_grading` | 合格、降级、拒收 | 交付和等级票 | 批次、净质量、等级、水分、买方、降级、拒收和返工去向 | 交付磅秤、等级检验和销售票 | kg、% | 每交付批次 | 收获至交付 | 每批次 | 汇总最终互斥产出状态 | 签收票及等级票 |
| `cp_seed_grade` | `linseed_seed_grade` | 播种用种子、降级籽粒、拒收物 | 种子批次及检验记录 | 批次、转入质量、额外清选和处理、纯度、发芽率、种子等级、买方、合格及拒收质量 | 交付磅秤、种子检验合格证明和作业记录 | kg、%、kWh | 每种子批次 | 收获至交付 | 每种子批次 | 核对种用、油用降级和拒收量，避免重复计数 | 签发的种子检验及销售记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_lot_yield` | 每块田 | 最终籽粒产出 kg / 收获 ha，合格、降级及拒收状态分开保留 | 交付质量、田块关联、面积 | 按等级和田块的产量 | `manitoba-flax-management` |
| `calc_moisture_balance` | 通风或干燥批次 | 干物质 = 入料湿质量 ×（1 − 入料湿基含水率）；预期出料湿质量 = 守恒干物质 /（1 − 出料湿基含水率），另扣实测干物质拒收量 | 配对质量和水分、拒收量 | 失水量及质量平衡余差 | `manitoba-growing-flax` |
| `calc_soil_n2o` | 管理农田土壤 | 对已记录的化肥、有机肥和残茬氮应用声明的地区方法或 IPCC 2019 直接与间接 N2O 方法；已出售或焚烧残茬不计入返田残茬氮 | 田间氮和残茬记录、方法因子 | 分途径 kg N2O | `ipcc-2019-managed-soils` |
| `calc_allocation` | 有共同产品的种植年 | 可分作业直接归属；仅对其余共同负荷按合理因果基础或实际销售价值份额分配，并做质量份额敏感性分析 | 销售质量、价格、共同负荷 | 各销售产出的负荷份额 | `eu-pef-allocation` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 核实未加工亚麻籽身份、品种、水分和等级；油或纤维数据集不可替代；种用数据集须按独立分支验证。 | 交付票、批次检验 |
| `dq_seed_identity` | 播种用种子分支 | 种用数据集须有独立平台流身份、用途记录、纯度/发芽率检验及种子等级交接；只有油用参考流 UUID 不足以代表种用。 | 种子证明、销售票、流身份核查 |
| `dq_completeness` | 田间至交付链 | 核对田块面积和籽粒批次、清选与水分损失、合格/降级/拒收产出、秸秆残茬，以及重要施用品和能源。 | 田间及批次平衡 |
| `dq_time` | 前景数据 | 采用一个有记录的种植年，若跨年合并须披露；每项作业和产出均须关联田块、作业或批次，不可重复分摊共用负荷。 | 日期记录和票据 |
| `dq_method` | 排放及分配 | 声明因子、地区适用性、不确定性及实际共同产品价格或因果基础；不可暗中混用残茬返田和焚烧假设。 | 方法工作表及来源 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 交付批次 | 要求亚麻籽、实际水分和等级、种植年及农场门交接；排除油和纤维。若种用分支作为参考流，须有独立平台流及检验支持的等级。 | `manitoba-flax-management`, `cfia-common-seed` |
| `validate_routes` | 田块和批次 | 每块田的每一部分只选直收或割晒一种路线；只有有操作日志时才设干燥/通风节点，并须有处理前后水分、能源及交接。 | `manitoba-flax-management`, `manitoba-growing-flax` |
| `validate_outputs` | 籽粒与秸秆 | 将合格、降级、拒收、返工和失水状态与入料批次核对；记录各秸秆去向及销售交接；留田或焚烧秸秆不能作为已售共同产品。 | `manitoba-flax-management` |
| `validate_runs` | 田块、设备与批次 | 将共用投入、清扫/换批、产出和返工关联同一作业或期间；每项共用负荷和最终产品仅计一次。 | `manitoba-growing-flax` |
| `validate_residue_n` | 土壤排放 | 分别展示返田、移出和焚烧残茬氮，避免 N2O 计算重复。 | `ipcc-2019-managed-soils` |
| `validate_seed_branch` | 播种用种子批次 | 核对转入籽粒、合格种子、油用降级和拒收物；要求纯度/发芽率证据、额外调质记录以及经核实的种用 UUID，才可验证种用数据集。 | `cfia-common-seed` |

## 10. 发布数据集属性

| Field | Value |
| --- | --- |
| dataset_role | 农场门亚麻籽生产前景数据集 |
| downstream_use | `secondary_dataset`；当地区、年份、交接点和质量具有代表性时可作为 `background_dataset` |
| allowed_use | 对声明含水率和等级的未加工油用亚麻籽进行建模，并明确共同产品处理；条件性种用分支须另有经核实的产出流及种子等级证据 |
| excluded_use | 榨油、纤维加工或独立于农场的出门后仓储和运输；种用仅在独立种子分支和经核实的种用流下允许 |
| required_metadata | 农场地区、田块与种植年、品种/solin 属性、油用或播种用途、面积与产量、水分与杂质等级、收获路线、调质及适用时的种子检验、秸秆去向、分配方法、上游投入地区与年份 |
| required_quality_disclosure | 投入记录缺失、测量和等级不确定性、共用设备分摊、土壤排放方法、共同产品价格与敏感性、场址和时间代表性 |
| update_trigger | 种植管理或收获路线、交付质量、秸秆市场、排放方法或数据年份发生足以改变清单的变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `manitoba-flax-management` | `extension_guidance` | 曼尼托巴农业厅，[亚麻生产与管理](https://www.gov.mb.ca/agriculture/crops/crop-management/flax-and-solin/index.html) | 一年生种植作业、收获选择、等级降级、秸秆去向和水分背景 |
| `manitoba-growing-flax` | `extension_guidance` | 曼尼托巴农业厅，[亚麻种植资料](https://www.gov.mb.ca/agriculture/crops/seasonal-reports/pubs/growing-flax.pdf) | 清选、收获、籽粒水分、储存通风与秸秆处理 |
| `ipcc-2019-managed-soils` | `method_factor` | IPCC，[2019 年修订版第 4 卷第 11 章：管理土壤 N2O 及施用石灰和尿素产生的 CO2](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf) | 氮投入与作物残茬核算、直接和间接土壤 N2O 方法 |
| `cfia-common-seed` | `official_guidance` | 加拿大食品检验局，[普通种子销售要求](https://inspection.canada.ca/en/plant-health/seeds/seed-industry-advisories/common-seed) | 种子销售的纯度和发芽率检验、等级决定、标签和批次交接 |
| `eu-pef-allocation` | `official_guidance` | 欧盟委员会，[建议 2013/179/EU，产品环境足迹的多功能分配层级](https://eur-lex.europa.eu/eli/reco/2013/179/oj/eng) | 过程细分、物理关系与经济分配的层级 |
| `iso-14044-lci` | `standard` | https://www.iso.org/standard/38498.html | 生命周期清单定量参考与投入/产出核算框架；本文 0–1 物料份额及 1 kg 参考产出界限来自代数关系，并非 ISO 给出的经验率。 |
