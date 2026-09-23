---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cassava
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 农场门木薯鲜根

## 1. 范围与适用性

本 PCR 适用于田间栽培的木薯（*Manihot esculenta*）贮藏根，以完整、新鲜、未经加工的状态在农场门交付。前景过程包括茎段建植、田间生长、块根采挖及出门前分选。生产组合须保留实际品种、食用或工业用途类别、地区、田间周期和销售路线。参考产品不含木薯片、粉、淀粉、发酵食品、去皮或上蜡鲜根，以及下游运输和工厂加工。茎段属于种植投入或另行申报的预期产出，不是块根质量。鲜根快速劣变与机械损伤使采收到农场门时间和剔除质量成为必要的批次记录 [fao-fresh-root-handling]。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cassava` |
| classification_refs | CPC 3.0 `01520` 木薯；分类仅作映射语境，不定义 PCR 身份 |
| covered_products | 田间生产的完整新鲜木薯贮藏根 |
| excluded_products | 木薯片、粉、淀粉、去皮、发酵、上蜡或干燥块根；作为参考产品的茎和叶 |
| representative_product | 已声明农场门市场类别的完整木薯鲜根 |
| production_route | 茎段建植 → 田间生长 → 块根采挖 → 农场门鲜根分选 |
| market_state | 鲜品、未经加工；Production mix, at farm gate |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 农场门接收的完整新鲜木薯贮藏根 |
| How much | 净鲜质量 1 kg |
| How well | 已声明品种和鲜根市场类别，剔除受损与拒收根 |
| How long or cycle | 实际种植至采挖周期及采收到出门间隔；跨越的各日历期间投入仅归因一次 |
| reference_flow_link | `gate` 的 `marketable_roots` 产出 |

| Field | Value |
| --- | --- |
| 参考数量 | 合格鲜根净重 1 kg |
| 参考产品流 | Cassava `98eeec70-fa0d-41c5-967f-6b6dd000b5f7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种；地区；种植与采挖日期；作物周期；鲜根用途/市场类别；采收到农场门用时；合格与剔除标准；有实测时的含水状态 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_fresh_mass` | 参考及全部块根流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 统一称量完整块根鲜质量；排除泥土及容器，披露皮重与含水观测。 |
| `area_to_reference` | 田间和采挖活动 | 面积 | ha | 将周期总量除以农场门合格鲜根质量；不得把采出总产量等同参考产量。 |
| `lot_balance` | 农场门分选 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 接收量 = 合格量 + 降级量 + 剔除量 + 实测质量差；各类别采用同一批次出门点。 |
| `cutting_count` | 种植材料 | 计数 | pieces | 清点可用茎段；若 LCA 交换需以质量表示，另存实测单段质量换算。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 种植时的土地及声明为购入或留存的健康茎段；记录前茬、留种来源及田龄。 |
| starting_condition_role | 作物周期自材料建植起；购入茎段等产品的上游生产另接背景过程。 |
| product_classification_scope | 完整木薯鲜根，独立于 CPC 编码。 |
| recursive_input_rule | 本周期或前期留存茎材是有据可查的内部转移；仅连接其生产周期一次，避免产品自循环。 |
| upstream_dataset_requirement | 对购入茎段、肥料、植保品、能源及外供水连接适宜上游数据集；披露身份未解之处。 |
| disclosure | 声明作物周期、地块/灌溉制度、茎材来源、采挖和分级状态、至农场门时间及有意生产的茎材共产品。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `fresh_root_gate` | 产出边界 | 在农场门称量完整合格鲜根后停止。仅纳入实际发生的边界内短暂停放与分选，排除工业干燥、提淀粉、切片、上蜡及下游运输。 | `fao-fresh-root-handling` |
| `cutting_origin` | 建植 | 将无性繁殖茎段作为种植材料，追踪购入与留种供应，避免重复分配上游茎材生产负担。 | `iita-cassava-agronomy` |
| `harvest_separation` | 采挖 | 采挖事件与田间管理分开，以核对采出根、未采出损失、叶片和茎秆。 | `fao-cassava-cultivation` |
| `grade_states` | 农场门分选 | 区分合格参考根、降级可用根及弃置根；记录各去向及采收至分选延迟。 | `fao-fresh-root-handling` |
| `period_link` | 跨期作物周期 | 每项投入和产出按所属作物周期与报告期归因一次；必要时将建植投入结转至跨年收获。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field` | 木薯建植与田间生长 | required | 每个作物周期 | 茎段建植、管理与田间植株移交 | 每公顷作物周期 |
| `harvest` | 鲜根采挖与茎材去向 | required | 每个收获事件 | 从田间植株采出块根并区分茎材与残体 | 每公顷采挖作物 |
| `gate` | 鲜根分选与农场门移交 | required | 每个交货批次 | 区分合格、降级及剔除鲜根 | 每吨接收鲜根 |

### 过程：木薯建植与田间生长（`field`）

#### 输入

##### 产品流

###### 种植茎段（`stem_cuttings`）

按购入或留存茎材记录实际种植的健康茎段数量.

- 选定流：Cassava stem cuttings
- 流属性/单位：pieces
- 数量规则：按购入或留存茎材记录实际种植的健康茎段数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷建植作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_register`
- 数量范围：地区种植密度示例，按每株一段茎材换算；以田间记录替换
  - 范围角色：典型范围（`typical_range`）
  - 下限：10000
  - 上限：15000
  - 单位：pieces/ha
  - 基准：每公顷建植作物；地区每公顷 10,000–15,000 株示例按每株一段茎材换算；以田间记录替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-cassava-cultivation`

###### 农业养分与肥料投入（`field_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_register`
- 来源：
- 数量范围：合并养分产品 QA 筛查；实际物料与含水率优先
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg product/ha
  - 基准：每公顷作物周期分别记录的矿质肥料、有机肥、石灰及含养分改良剂产品质量总和
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 植保产品（`crop_protection`）

按作业记录剂型及施用产品质量.

- 选定流：Crop protection product
- 流属性/单位：kg
- 数量规则：按作业记录剂型及施用产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_register`
- 数量范围：商品质量的暂定 QA 筛查，非有效成分
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/ha
  - 基准：每公顷作物周期；商品质量的暂定 QA 筛查，非有效成分
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外供灌溉水（`irrigation_water`）

记录计量或有据可查的外供灌溉水量；降雨不作为采购产品.

- 选定流：Irrigation water
- 流属性/单位：m3
- 绑定模式：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合分组：`irrigation-water`
- 数量规则：记录计量或有据可查的外供灌溉水量；降雨不作为采购产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_register`
- 数量范围：暂定 QA 筛查；无灌溉时为零
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha
  - 基准：每公顷作物周期；暂定 QA 筛查；无灌溉时为零
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械液体燃料（`field_fuel`）

记录整地、种植及田间管理的实际燃料体积.

- 选定流：移动机械燃料，实际液体载体
- 流属性/单位：L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：记录整地、种植及田间管理的实际燃料体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_register`
- 数量范围：仅对液体燃料的暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1500
  - 单位：L/ha
  - 基准：每公顷作物周期；仅对液体燃料的暂定 QA 筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间用电（`field_electricity`）

记录灌溉或田间作业的计量用电，排除下游加工.

- 选定流：Electricity
- 流属性/单位：kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：记录灌溉或田间作业的计量用电，排除下游加工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_register`
- 数量范围：暂定 QA 筛查；不用电时为零
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kWh/ha
  - 基准：每公顷作物周期；暂定 QA 筛查；不用电时为零
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 移交采挖的田间木薯植株（`standing_crop`）

记录栽培面积及成熟采挖事件；内部移交不另计市场产品.

- 选定流：Standing cassava crop
- 流属性/单位：ha
- 数量规则：记录栽培面积及成熟采挖事件；内部移交不另计市场产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷采挖作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_register`
- 数量范围：田间至采挖的面积移交恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：ha/ha
  - 基准：每公顷采挖作物；田间至采挖的面积移交恒等关系
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 土壤直接排放氧化亚氮（`soil_n2o`）

依据记录的氮投入及作物残体，按明确选定的本地或 IPCC 方法测算土壤直接 N2O.

- 选定流：Nitrous oxide to air
- 流属性/单位：kg
- 数量规则：依据记录的氮投入及作物残体，按明确选定的本地或 IPCC 方法测算土壤直接 N2O
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷作物周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_register`
- 来源：`ipcc-2019-soils`
- 数量范围：仅为暂定筛查，不是 IPCC 排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg N2O/ha
  - 基准：每公顷作物周期；仅为暂定筛查，不是 IPCC 排放因子
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：鲜根采挖与茎材去向（`harvest`）

#### 输入

##### 产品流

###### 接收田间植株（`standing_crop_input`）

关联田间生产移交的同一面积及采收事件.

- 选定流：Standing cassava crop
- 流属性/单位：ha
- 数量规则：关联田间生产移交的同一面积及采收事件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷采挖作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_register`
- 数量范围：移交采挖的面积恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：ha/ha
  - 基准：每公顷采挖作物；移交采挖的面积恒等关系
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 块根采挖燃料（`harvest_fuel`）

使用机械采挖或装载时记录实际液体燃料.

- 选定流：移动机械燃料，实际液体载体
- 流属性/单位：L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：使用机械采挖或装载时记录实际液体燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷采挖作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_register`
- 数量范围：机械化路线适用的暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：L/ha
  - 基准：每公顷采挖作物；机械化路线适用的暂定 QA 筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采出木薯鲜根（`lifted_roots`）

在农场门分选前称量所有采出鲜根，包括随后剔除的根.

- 选定流：Fresh cassava roots after lifting
- 流属性/单位：kg
- 数量规则：在农场门分选前称量所有采出鲜根，包括随后剔除的根
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷采挖作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_register`
- 数量范围：宽幅暂定收获 QA 筛查；另行核对可售产量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/ha
  - 基准：每公顷采挖作物；宽幅暂定收获 QA 筛查；另行核对可售产量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 留作繁殖的茎材（`retained_stems`）

记录有意留作下季种植的茎材质量；出售茎材属于独立预期共产品.

- 选定流：Cassava planting stems
- 流属性/单位：kg
- 数量规则：记录有意留作下季种植的茎材质量；出售茎材属于独立预期共产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷采挖作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_register`
- 数量范围：留种时适用的暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg/ha
  - 基准：每公顷采挖作物；留种时适用的暂定 QA 筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作为共产品出售的种植茎材（`marketed_stems`）

称量有意作为共产品出售的茎材，并记录独立买家和价格.

- 选定流：Cassava planting stems
- 流属性/单位：kg
- 数量规则：称量有意作为共产品出售的茎材，并记录独立买家和价格
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷采挖作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_register`
- 数量范围：暂定 QA 筛查；仅茎材出售时适用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg/ha
  - 基准：每公顷采挖作物；暂定 QA 筛查；仅茎材出售时适用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 留田叶片和未收集茎秆（`field_residue`）

估测或称量留田非销售叶和茎秆；不得重复计入留种茎材.

- 选定流：Cassava field residues
- 流属性/单位：kg
- 数量规则：估测或称量留田非销售叶和茎秆；不得重复计入留种茎材
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷采挖作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_register`
- 数量范围：湿态田间残体的暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50000
  - 单位：kg/ha
  - 基准：每公顷采挖作物；湿态田间残体的暂定 QA 筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 未采出或断裂留田块根（`unlifted_loss`）

在样方内估测未采出损失，与已称量采出根分开.

- 选定流：Uncollected cassava root loss
- 流属性/单位：kg
- 数量规则：在样方内估测未采出损失，与已称量采出根分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷采挖作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_register`
- 数量范围：未采出鲜根损失的暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg/ha
  - 基准：每公顷采挖作物；未采出鲜根损失的暂定 QA 筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：鲜根分选与农场门移交（`gate`）

#### 输入

##### 产品流

###### 送至农场门分选的采出鲜根（`received_roots`）

把实测质量关联至同批次采出根，并记录采挖与分选时间.

- 选定流：Fresh cassava roots after lifting
- 流属性/单位：kg
- 数量规则：把实测质量关联至同批次采出根，并记录采挖与分选时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷采挖作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_lot`
- 数量范围：暂定 QA 筛查；须与采挖移交核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/ha
  - 基准：每公顷采挖作物；暂定 QA 筛查；须与采挖移交核对
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农场门分选用电（`gate_electricity`）

仅在分选、称量或短暂停放用电时记录计量用电.

- 选定流：Electricity
- 流属性/单位：kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：仅在分选、称量或短暂停放用电时记录计量用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨接收鲜根
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_lot`
- 数量范围：用电处理路线适用的暂定 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh/t
  - 基准：每吨接收鲜根；用电处理路线适用的暂定 QA 筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门可售木薯鲜根（`marketable_roots`）

称量农场门合格完整鲜根，并注明品种、用途类别、状态及采后时间.

- 选定流：Cassava `98eeec70-fa0d-41c5-967f-6b6dd000b5f7`
- 绑定模式：`fixed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量农场门合格完整鲜根，并注明品种、用途类别、状态及采后时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷采挖作物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_lot`
- 数量范围：宽幅暂定产量 QA 筛查；以合格鲜根实测质量为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/ha
  - 基准：每公顷采挖作物；宽幅暂定产量 QA 筛查；以合格鲜根实测质量为准
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级但仍可用的鲜根（`downgraded_roots`）

仅在降级根作为预期可用鲜根出售或移交时单独称量.

- 选定流：Fresh cassava roots, downgraded
- 流属性/单位：kg
- 数量规则：仅在降级根作为预期可用鲜根出售或移交时单独称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨接收鲜根
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_lot`
- 数量范围：物理分流 QA 筛查；降级销售路线适用
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/t
  - 基准：每吨接收鲜根；物理分流 QA 筛查；降级销售路线适用
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 剔除的受损或劣变鲜根（`rejected_roots`）

称量断裂、腐败等剔除根并记录去向；不得改标为参考产品.

- 选定流：Rejected cassava roots
- 流属性/单位：kg
- 数量规则：称量断裂、腐败等剔除根并记录去向；不得改标为参考产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨接收鲜根
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_lot`
- 数量范围：物理分流 QA 筛查；不是允许的废弃率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/t
  - 基准：每吨接收鲜根；物理分流 QA 筛查；不是允许的废弃率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `single_root_output` | 合格与降级鲜根等级 | 若两等级均作为鲜木薯销售，分别保留质量与价值。优先细分等级特有分选负担；共享上游负担遵循声明的研究分配方法。 | `iso-14044` |
| `stem_coproduct` | 有意出售的茎或叶 | 出售的种植茎材或叶片是独立预期产出，不得混入块根产量或废物。可行时通过过程细分避免分配；否则使用有据可查的物理因果关系；无法证实时按同期产量和价格记录计算农场门经济份额，并做敏感性分析。 | `iso-14044` |
| `residue_burden` | 剔除根和田间残体 | 栽培与采挖负担保留在作物系统；田间还田、处置及后续回收分别记录；不得使用未经验证的替代产品抵扣。 | `iso-14044` |
| `period_attribution` | 跨报告年作物周期 | 将种植和田间管理投入仅一次分配至已标识收获周期，保留日期与阶段，不把同一留种茎材或资产负担重复归到两周期。 |  |

## 8. 前景数据采集、计算与质量规则

第 6 节范围是特定来源示例或刻意宽泛的暂定 QA 筛查，不提供默认交换量或通用合格限值；数量以实测前景记录为准。条件路线未发生时数量为零，范围不意味着必须使用。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_register` | `field` | 种植与管理交换、田间面积、土壤直接 N2O | 地块登记、发票、仪表记录 | field_id, cycle_id, planting_date, stem_origin, planted_pieces, material_product, product_mass, water_m3, fuel_L, electricity_kWh, N_input, residue_return, area_ha | 将发票、施用日志和表计与田间作业核对；记录选定 N2O 方法 | mixed | 每次作业 | 全部种植至采挖周期 | 每个地块 | 按地块周期汇总，与批次关联后除以合格块根 kg | 采购发票、田间日志、仪表读数、方法工作表 |
| `cp_harvest_register` | `harvest` | 采出根、茎材、残体及块根损失 | 采收和样方记录 | field_id, cycle_id, lifting_time, lifted_root_kg, retained_stem_kg, marketed_stem_kg, residue_kg, unlifted_sample_kg, fuel_L | 校准秤与代表性损失样方 | kg, L, ha | 每次采挖 | 全部收获批次 | 每块田/每次采挖 | 核对采出和未采出部分；避免茎材重复计数 | 称重单、样方设计、机械日志 |
| `cp_gate_lot` | `gate` | 鲜根等级与用时 | 接收、分级及发运单据 | lot_id, harvest_time, receipt_time, dispatch_time, received_kg, accepted_kg, downgraded_kg, rejected_kg, grade, destination, electricity_kWh | 校准进出秤、外观质量检查和带时间戳单据 | kg, h, kWh | 每个农场门批次 | 采挖至发运 | 每个农场门 | 按批次核对接收与全部去向；仅合并相同市场类别 | 秤校准、票据、剔除原因与照片 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_normalization` | 全部交换 | 每 kg 参考产品交换量 = 已分配的周期/批次交换量 ÷ 合格鲜根 kg；存在预期共产品时使用有据可查的分配份额。 | 关联周期、批次质量和分配份额 | 每 kg 参考产品交换量 |  |
| `gate_mass_reconciliation` | 农场门 | 差额 = 接收鲜根 kg − 合格 kg − 降级 kg − 剔除 kg；调查未计损失或秤差。 | 农场门票据质量 | 质量差额 |  |
| `cycle_period_linkage` | 全部过程 | 按地块/周期关联作业与收获记录，并按日历期间分类；合并报告不得重复记录。 | field_id, cycle_id, 日期 | 单周期清单及期间追溯 |  |
| `soil_n2o_method` | 土壤排放 | 使用明确记录的辖区或 IPCC 2019 管理土壤方法及氮投入，披露因子、单位及直接/间接排放范围。 | 肥料 N、残体 N、土壤及方法数据 | 按路线得到 kg N2O | `ipcc-2019-soils` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `lot_identity` | 全部块根流 | 在采挖、分选、发运间使用稳定的地块、作物周期及批次 ID。 | 可关联票据 |
| `root_condition` | 参考产品 | 报告品种、用途类别、损伤/剔除规则及实测采挖至出门用时。 | 分级单与时间戳 |
| `mass_completeness` | 采挖和农场门 | 解释非零农场门差额、未采出损失及剔除根去向；量化缺失观测。 | 称重和抽样记录 |
| `temporal_completeness` | 作物周期 | 纳入跨报告期建植投入及留种茎材转移，且仅计一次。 | 带日期田间登记 |
| `source_compatibility` | 上游流 | 记录关联背景数据的地区、技术和单位匹配性；列出尚未确认的流身份。 | 数据包元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference_identity` | 参考流 | 要求已核实的木薯产品流、Mass 属性及规定农场门 kg；不得以木薯片、粉、淀粉或上蜡根替代参考产品。 |  |
| `range_review` | 全部流卡 | 核对每个范围的基准、单位与证据；推理区间仅作暂定 QA 提示，不是清单默认值。 |  |
| `balance_check` | 块根流 | 关联采出与农场门接收批次；核对合格、降级、剔除及记录差额，不得重复计数。 |  |
| `time_to_gate` | 质量 | 每批要求采挖和出门时间及损伤/剔除标准，因为鲜根迅速劣变。 | `fao-fresh-root-handling` |
| `coproduct_check` | 茎材和等级 | 要求预期产出身份、移交、分配份额，且无重复抵扣或负担。 | `iso-14044` |
| `period_check` | 跨期作物 | 核实每条种植、管理、采收及留种茎材记录仅归属于一个周期并仅分配一次。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 农场门完整木薯鲜根的前景生产数据集 |
| downstream_use | 经复核后作为过程或生命周期模型中的 `secondary_dataset`、`background_dataset` |
| allowed_use | 与所声明品种/市场类别、地区、作物及处理制度兼容的农场门用途 |
| excluded_use | 加工木薯、默认繁殖茎材、超出实测门前处理的储藏、鲜根质量未声明的用途 |
| required_metadata | 作物周期、地点、品种、茎材来源、种植与采收日期、批次等级、鲜根用途类别、合格质量及共产品方法 |
| required_quality_disclosure | 计量与抽样覆盖、农场门质量平衡、损伤/剔除比例、出门用时、范围仅作 QA、来源及分配不确定性 |
| update_trigger | 品种、路线、市场类别、处理用时、投入制度、分配方法或来源证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-cassava-cultivation` | `official_guidance` | https://www.fao.org/4/x5032e/x5032e01.htm | 茎段繁殖、地区种植株数与采收 |
| `iita-cassava-agronomy` | `literature` | https://cgspace.cgiar.org/items/e78b8dc2-da35-4306-9eeb-bae56727242a | 茎段健康、田间管理和块根生产 |
| `fao-fresh-root-handling` | `official_guidance` | https://www.fao.org/4/x5415e/x5415e04.htm | 采后损伤与快速生理劣变 |
| `fao-global-cassava-strategy` | `official_guidance` | https://www.fao.org/4/j1255e/j1255e04.htm | 特定情境的鲜根产量示例 |
| `ipcc-2019-soils` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 土壤 N2O 计算方法选择与披露 |
| `iso-14044` | `standard` | ISO 14044:2006, https://www.iso.org/standard/38498.html | 分配优先顺序和研究披露 |
