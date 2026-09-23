---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sesame-seed
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 芝麻籽

## 1. 适用范围

本 PCR 涵盖芝麻（Sesamum indicum）从播种至农场门交付的完整、未经加工籽粒。分别记录田间生产、采收脱粒、初次清选、按实际发生的干燥稳定化及分级。雨养与灌溉是田间生产的两种路线；易裂荚品种可采用割取、田间晾干和人工脱粒，抗裂荚品种可采用联合收获。必须逐田块和批次记录实际路线、能源和籽粒损失。榨油、脱壳、烘焙及研磨属于下游。固定平台流代表收获的商品籽粒，不能冒充经核实的播种用种产出。[ncstate-sesame-2026; tamu-sesame-2007]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sesame-seed` |
| classification_refs | CPC 3.0 `01444`；籽粒路线对应 narrower 范围 |
| covered_products | 完整的商品芝麻籽粒，声明颜色和市场等级 |
| excluded_products | 任何用于播种的芝麻种子，不论是否经过认证；脱壳、烘焙、研磨籽粒；芝麻油与粕 |
| representative_product | 收获并进行实际初次清选的完整芝麻籽粒 |
| production_route | 一年生芝麻田间管理；雨养或灌溉；人工／田间脱粒或联合收获；初次清选及按需干燥 |
| market_state | 农场门未经加工的完整籽粒，记录水分、杂质及破损状态 |

narrower 映射反映已核实的商品籽粒流；种用路线须另行核实产出流身份和方法。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 农场门验收的完整芝麻籽粒 |
| How much | 净重 1 kg |
| How well | 声明品种、颜色、等级、水分、杂质及破损籽粒比例 |
| How long or cycle | 一个种植周期直至农场门交付 |
| reference_flow_link | `accepted_gate_seed` |

| Field | Value |
| --- | --- |
| Reference amount | 净重 1 kg 完整芝麻籽粒 |
| Reference product flow | Sesame seed `fa13af02-bb6e-4d44-a4a8-6464c0eece63` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 农场和收获年份；品种与裂荚性状；雨养或灌溉；人工或机械采收；水分、损伤、杂质、颜色和等级；农场门前实际清选干燥 |
| Binding | `fixed` |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_gate_mass` | 参考产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按交付时实际水分下验收的完整籽粒净重计量，不得暗中换算为干物质。 |
| `mass_balance` | 采收、清选及交付 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将已捕获籽粒与验收、降级、拒收和清选损失核对，并考虑水分变化；捕获前的田间损失另行报告。 |
| `area_yield` | 田间记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留原始面积和投入记录，按验收的农场门质量归一化种植周期清单。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 播种前田块，声明前茬和土地状态；购入种子及其他投入带独立上游负荷。 |
| starting_condition_role | 声明的种植周期起点，不表示投入无环境负荷。 |
| product_classification_scope | 仅完整的商品芝麻籽粒。 |
| recursive_input_rule | 播种的芝麻作为计量投入，不得将本农场门产出回填自身种植模型；需采用独立上游种子数据集或披露缺口。 |
| upstream_dataset_requirement | 将实际使用的种子、肥料、农药、燃料、电力及外购服务连接至独立上游数据集。 |
| disclosure | 田块、年份、水分管理、品种性状、采收路线、农场门前处理、交付地点、拒收路径和残茬去向。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `crop_boundary` | 田间至农场门 | 包括实际播种、田间管理、采收、初次清选、分级及农场门前干燥，也包括交付前的外包作业。 | `ncstate-sesame-2026`; `tamu-sesame-2007` |
| `capture_boundary` | 成熟田间植株 | 将采收与生长分开：裂荚、人工或割台捕获、脱粒决定回收质量和损失。 | `ncstate-sesame-2026` |
| `downstream_boundary` | 农场门之后 | 排除交付后运输、食品加工、榨油、脱壳和烘焙。 | `tamu-sesame-2007` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_management` | 芝麻田间管理 | required | 每个田块／周期，声明雨养或灌溉 | 培育成熟蒴果；灌溉增加供水及抽水记录 | 每验收 kg 的田间投入 |
| `harvest_thresh` | 籽粒采收脱粒 | required | 按品种和实际作业声明人工／田间脱粒或联合收获 | 捕获原籽，记录落粒和设备损失 | 每田块／批次捕获 kg |
| `first_clean_dry` | 初次清选及稳定化 | conditional | 实际清选或干燥时纳入，否则声明旁路 | 去除糠屑杂质，必要时稳定高水分籽粒 | 每遍进出质量及能源 |
| `grade_gate` | 分级和农场门放行 | required | 每个交付批次 | 区分验收、降级及拒收去向 | 农场门净重 kg |

田间管理以田块及种植周期为单位；采收和清选以批次及运行遍数为单位。每次运行须连接其来源田块，清洗和切换能源只计一次。按 `cp_harvest` 调查裂荚、割取／割台及脱粒前的田间留存籽粒和残体损失，记录方法与去向；它们不是交付出去的废物流，也不是可销售产出。不合格籽粒批次可返回清选、降级销售，或在有记录的决策后成为废弃物；返工后保留原负荷并增加实际处理负荷。

### 过程：芝麻田间管理（`crop_management`）

#### 投入

##### 产品流

###### 播种用种（`sowing_seed`）

购入或自留播种材料作为独立上游产品记录，固定商品籽粒 UUID 不代表任何播种用种。

- 选定流：独立核实的芝麻播种材料
- 流属性/单位：Mass / kg
- 数量规则：逐田块实际播种 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收农场门 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 数量范围：地区播种量示例，供复核
  - 范围角色：常见范围（`typical_range`）
  - 下限：1.1
  - 上限：3.4
  - 单位：kg seed/ha
  - 基准：一个作物周期每公顷；北卡 1 lb/acre 与得州 3 lb/acre 的地区播种示例，不是通用限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ncstate-sesame-2026`; `tamu-sesame-2007`

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
- 归一化基准：每验收农场门 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`ncstate-sesame-2026`
- 数量范围：合并养分产品 QA 筛查；以前景记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg product/ha
  - 基准：每作物公顷分别记录的矿质肥料、有机肥、石灰及含养分改良剂产品质量总和；仅用于筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 施用植保品（`protection_input`）

逐配方记录实际使用的除草剂、杀虫剂或杀菌剂及有效成分和浓度；不得假定必然施用。

- 选定流：按配方识别的施用植保品
- 流属性/单位：Mass / kg
- 数量规则：田块周期内该配方实际施用 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收农场门 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`ncstate-sesame-2026`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg product/ha
  - 基准：一个作物周期每公顷、每种植保或助收产品单列；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 施用采收辅助品（`harvest_aid_input`）

仅在实际施用干燥剂或其他采收辅助品时纳入，保留产品身份和施用记录。

- 选定流：按配方识别的采收辅助品
- 流属性/单位：Mass / kg
- 数量规则：采收前实际施用 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收农场门 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`ncstate-sesame-2026`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg product/ha
  - 基准：一个作物周期每公顷、每种植保或助收产品单列；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械燃料（`field_fuel`）

记录实际播种、中耕、喷施或抽水作业的燃料；共用设备按作业时间或面积分摊。

- 选定流：按燃料种类识别的田间机械燃料
- 流属性/单位：Volume / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：计量或票据记录归于田块周期的升数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收农场门 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：L/ha
  - 基准：一个作物周期每公顷；归属的田间作业及分燃料实测升数；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间电力（`field_electricity`）

仅在实际使用时记录灌溉抽水或其他田间作业的计量电量。

- 选定流：供应田间作业的电力
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：归于该田块周期的计量 kWh。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收农场门 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kWh/ha
  - 基准：一个作物周期每公顷；条件性电动机械或灌溉泵送的实测电量；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water`）

灌溉生产路线增加计量供水量及水源；雨养田块声明未灌溉。

- 选定流：供给作物的灌溉水
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合分组：`irrigation-water`
- 数量规则：计量或记录供给田块周期的水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收农场门 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 来源：`tamu-sesame-2007`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha
  - 基准：一个作物周期每公顷；雨养路线为零，灌溉路线以实测取水或送水为准；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 成熟作物交接（`mature_crop`）

成熟植株是交给采收过程的田间生物中间状态，不是第二项农场门产品。

- 选定流：田间成熟芝麻植株，中间状态
- 流属性/单位：Mass / kg
- 数量规则：依据田间采样估计植株籽粒质量，连接田块和年份至采收批次；面积保留在 `cp_field`。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每种植周期
- 基准类型：种植周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50000
  - 单位：kg/ha
  - 基准：一个作物周期每公顷；暂定田间生物量筛查，不是第二个可售籽粒产出
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：籽粒采收脱粒（`harvest_thresh`）

#### 投入

##### 产品流

###### 采收机械燃料（`harvest_fuel`）

记录实际割取、脱粒或联合收获机械的燃料。易裂荚品种割取、田间晾干、捆扎及人工脱粒工时留在 `cp_harvest`；联合收获记录机械遍数。单个采收批次不得同时默认使用两条技术路线。[ncstate-sesame-2026]

- 选定流：按燃料种类识别的采收机械燃料
- 流属性/单位：Volume / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`mobile-machinery-fuel`
- 数量规则：采收批次实际消耗升数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每捕获 kg
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：L/ha
  - 基准：每一收获公顷，按实际路线和机械燃料计量；仅暂定筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 捕获的原籽（`raw_seed`）

清选前称量已脱粒籽粒，记录水分、可见杂质和破损状态。

- 选定流：完整芝麻原籽，内部中间品
- 流属性/单位：Mass / kg
- 数量规则：逐田块／批次称量捕获质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每捕获 kg
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
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

### 过程：初次清选及稳定化（`first_clean_dry`）

#### 投入

##### 产品流

###### 待清选原籽（`seed_to_clean`）

连接同一收获批次，不新建独立供应。

- 选定流：完整芝麻原籽，内部中间品
- 流属性/单位：Mass / kg
- 数量规则：称量进入批次的原籽。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每准备完成 kg
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_condition`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清选电力（`cleaning_electricity`）

仅计入实际清选遍数的电力；旁路清选的批次无清选电量。

- 选定流：供应籽粒清选设备的电力
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：按批次和遍数计量 kWh。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每准备完成 kg
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_condition`
- 来源：`tamu-sesame-2007`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg processed seed
  - 基准：每 kg 进入实际清选、分选、干燥或贮存作业的籽粒；仅暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥电力（`drying_electricity`）

仅在农场门前实际稳定水分时纳入风机或电热干燥电量。

- 选定流：供应籽粒干燥设备的电力
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`electricity-supply`
- 数量规则：按批次和干燥遍数计量 kWh。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每准备完成 kg
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_condition`
- 数量范围：暂定宽幅 QA 筛查；以现场记录替代
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg processed seed
  - 基准：每 kg 进入实际清选、分选、干燥或贮存作业的籽粒；仅暂定筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥燃料（`drying_fuel`）

仅在农场门前实际采用燃料加热干燥时纳入，声明燃料身份。

- 选定流：按燃料种类识别的干燥用固定燃烧燃料
- 流属性/单位：Volume / L
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 流集合分组：`stationary-combustion-fuel`
- 数量规则：按批次和干燥遍数计量或票据记录升数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每准备完成 kg
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_condition`
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

###### 准备完成的完整籽粒（`prepared_seed`）

实际除杂和必要的水分稳定化后交给分级，记录处理前后水分和质量。

- 选定流：准备完成的完整芝麻籽，内部中间品
- 流属性/单位：Mass / kg
- 数量规则：称量处理后批次质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每准备完成 kg
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_condition`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 不合格完整籽粒（`offspec_seed`）

将可再清选或降级的完整芝麻籽粒与杂物筛下物分开。记录返清选、买方或最终处置决策；只有实际售出的批次在农场门成为单独产品。

- 选定流：不合格完整芝麻籽，内部中间品
- 流属性/单位：Mass / kg
- 数量规则：逐遍称量不合格籽粒及最终去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每准备完成 kg
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_condition`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 杂物筛下物（`screening_chaff`）

将作为废弃物离开清选过程的糠屑和杂物单独记录，与可回收的不合格籽粒区分。

- 选定流：糠屑和杂物筛下物
- 流属性/单位：Mass / kg
- 数量规则：逐清选遍数称量去除的筛下物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每准备完成 kg
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_condition`
- 来源：`tamu-sesame-2007`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：分级和农场门放行（`grade_gate`）

#### 投入

##### 产品流

###### 待分级完整籽粒（`seed_to_grade`）

对已准备批次分级；若明确旁路清选，则直接采用对应捕获批次。

- 选定流：完整芝麻籽，内部中间品
- 流属性/单位：Mass / kg
- 数量规则：称量分级投入质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 kg
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate`
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

###### 验收农场门籽粒（`accepted_gate_seed`）

唯一固定参考产出是按实际等级和水分验收的未经加工完整芝麻籽粒。

- 选定流：Sesame seed `fa13af02-bb6e-4d44-a4a8-6464c0eece63`
- 流属性/单位：Mass / kg
- Binding: `fixed`
- 数量规则：农场门称量验收净重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 验收农场门籽粒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关物料转移节点的实测籽粒；应用守恒前核对实际水分和混料
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级销售籽粒（`downgraded_seed`）

已销售的低等级批次独立于参考产出，保留买方和用途凭证。

- 选定流：按去向区分的降级完整芝麻籽粒
- 流属性/单位：Mass / kg
- 数量规则：降级出售的称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 未售拒收籽粒（`gate_reject`）

追踪返清选、回收或处置；返工仍承担原种植及采收负荷。

- 选定流：按去向区分的拒收芝麻
- 流属性/单位：Mass / kg
- 数量规则：逐最终路径称量拒收质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每验收 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate`
- 数量范围：物料守恒 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg linked incoming seed
  - 基准：每 kg 进入相关分选或干燥节点的实测籽粒；降级、废弃或失水分别非负，合计须平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配和共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_product` | 籽粒及留田秸秆和损失 | 种植负荷归于可销售籽粒；留田秸秆、田间未回收籽粒及未售籽粒不是参考产出。记录残茬实际去向。 | `ncstate-sesame-2026` |
| `grade_split` | 验收及降级出售籽粒 | 等级和质量分别记录。两者均出售时按籽粒实物质量分配共同负荷并披露份额和分级标准；经济分配仅限有理由且有同期价格凭据的例外。 | `tamu-sesame-2007` |
| `sold_residue` | 有意出售秸秆或糠屑 | 若残余物进入市场，记录干质量和去向，在放行前复核多产出分配；不得假设零负荷。 | `ncstate-sesame-2026` |
| `run_rework` | 共用设备及返清选 | 依据记录时间或质量对共用机械、清洗和切换各分配一次。返工批次保留原负荷并增加每次实际处理负荷，中间质量不重复计量。 | `tamu-sesame-2007` |

## 8. 前景数据采集、计算和质量规则

流卡中的数量范围是归一化前的复核触发条件，不是清单默认值或通用合格限值。数量必须采用实际田块、批次和作业记录；超出暂定筛查范围时，应核查路线、地区、单位及计量质量。地区播种量仅为示例。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field` | `crop_management` | 种植投入及水 | 田间日志及发票 | 田块；面积；年份；品种；水分路线；田间采样籽粒质量；各投入品身份及质量；燃料 L；电量 kWh；灌溉 m3 | 将施用和仪表日志连接至田块 | kg; L; kWh; m3; ha | 每次作业 | 全种植周期 | 全部纳入田块 | 汇总实际投入，共用作业只分摊一次 | 发票、仪表和施用记录 |
| `cp_harvest` | `harvest_thresh` | 捕获、损失、残茬 | 采收日志及田间调查 | 田块；批次；裂荚性状；采收方式；燃料；人工；原籽 kg；水分；损失估计；残茬路径 | 称量批次，按声明方法调查损失 | kg; h; L; percent | 每批次 | 全采收期 | 每田块／批次 | 将批次连接至田间周期，汇总实际运行 | 称重、水分及损失记录 |
| `cp_condition` | `first_clean_dry` | 清选、干燥和拒收 | 批次日志及仪表 | 批次；遍数；进出质量和水分；清选 kWh；干燥 kWh；干燥燃料 L；不合格籽粒 kg 及路径；筛下物 kg 及路径 | 每遍称量检测或记录旁路 | kg; percent; kWh; L | 每遍 | 农场门之前 | 农场及外包交付前场所 | 每遍只计一次 | 称重、仪表、检测及处置票据 |
| `cp_gate` | `grade_gate` | 验收和其他等级 | 分级及交付票据 | 批次；验收 kg；水分；颜色；杂质；破损籽；等级；降级／拒收 kg 及路径 | 交付前称量检查并分级 | kg; percent | 每批次 | 收获年份 | 每交付点 | 仅汇总验收量作分母，保留其他去向 | 签收票据及质检报告 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reconcile_seed` | 收获至交付 | 估计田间可收籽粒 = 已捕获籽粒 + 另行调查的田间损失。对捕获后批次，捕获量 = 验收量 + 降级量 + 拒收量 + 清选损失 + 水分变化调整；调查剩余差额。 | 称重、水分及田间损失记录 | 核对后的批次质量平衡及独立田间损失记录 | `tamu-sesame-2007`; `ncstate-sesame-2026` |
| `normalize_gate` | 所有归属清单 | 归属投入／排放总量除以验收农场门净重，保留田块和批次连接。 | 投入、分配和交付记录 | 每 kg 清单 |  |
| `capture_loss_rate` | 采收路线比较 | 报告调查的损失籽粒占估计可收籽粒比例，同时声明方法及不确定性。 | 损失调查和捕获量 | 捕获损失比例 | `ncstate-sesame-2026` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `product_identity` | 最终产品 | 核实完整芝麻籽、品种、颜色、等级和农场门状态，不得替代种用籽。 | 种植和销售记录 |
| `mass_moisture` | 采收和交付 | 保留原始称重和水分检测；披露估计和无法解释的平衡差。 | 称重及检测单 |
| `route_coverage` | 田间和批次 | 证明田块／批次覆盖完整以及返工、降级出售、废物和残茬的最终路径。 | 田间、批次及处置日志 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 农场门产品 | 要求固定完整籽粒 UUID、质量属性和单位组、kg 及实际交付状态；不得用本流表示油、脱壳籽或种用籽。 |  |
| `validate_routes` | 田间和采收 | 要求雨养／灌溉和人工／联合收获选择及品种与批次证据；灌溉计入抽水，不得同时默认两种采收路线。 | `ncstate-sesame-2026`; `tamu-sesame-2007` |
| `validate_loss_grades` | 采收和清选 | 要求损失方法、水分、清选／干燥遍数或旁路、验收／降级／拒收路径；拒收籽粒不得计入验收量。 | `ncstate-sesame-2026`; `tamu-sesame-2007` |
| `validate_run_burdens` | 共用机械及返工 | 各运行、清洗／切换及返工遍数仅计一次，解决无法解释的质量差额。 |  |

## 10. 发布数据集概要

| Field | Value |
| --- | --- |
| dataset_role | 农场门完整芝麻籽粒前景数据集 |
| downstream_use | 经审查可作 `secondary_dataset`、`background_dataset` |
| allowed_use | 区域、年份、路线、水分和等级相近的农场门商品芝麻籽粒 |
| excluded_use | 任何播种用种产出；油、粕、脱壳、烘焙或研磨产品；把地方推广投入量当作通用值 |
| required_metadata | 农场及年份、田块面积、品种和裂荚性状、水分及采收路线、批次关系、交付点、水分、颜色和等级 |
| required_quality_disclosure | 覆盖和缺失投入、计量或估算损失、共用批次归属、拒收及残茬路径、上游种子身份 |
| update_trigger | 核实新种用流、明显不同的采收或清选路线、交付边界或分配证据变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ncstate-sesame-2026` | `extension_guidance` | NC State Extension, Sesame Production Fact Sheet (2026), https://content.ces.ncsu.edu/sesame-production-fact-sheet | 生物生产、裂荚、采收路线、损失和水分 |
| `tamu-sesame-2007` | `extension_guidance` | Texas A&M AgriLife Research and Extension Center, Sesame Production Guide (2007), https://sanangelo.tamu.edu/agronomy/agronomy-publications/sesame-production-guide/ | 灌溉差异、联合收获破损、初次清选和分级 |
