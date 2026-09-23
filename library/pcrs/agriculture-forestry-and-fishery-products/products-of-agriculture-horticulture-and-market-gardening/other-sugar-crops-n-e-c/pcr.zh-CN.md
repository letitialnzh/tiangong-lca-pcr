---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-sugar-crops-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他糖料作物，未另分类

## 1. 范围与适用性

本 PCR 覆盖农场生产的糖槭树液、以糖用为目的种植的高粱秆，以及甜叶菊叶片，边界止于各自声明的收获或初级调制交接点。每个数据集只能选择一种作物、一个物种、一个植物部位、一种用途、一种商品状态和一个交接点。三条路线仅共享质量参考数量；其交换、产量、路线和环境负荷不得合并为一份清单。

纳入归属于所声明生产期的建植和管理、田间或糖槭林作业、收获或采汁，以及达到所声明交接点所需的初级调制。甜叶菊须声明鲜叶或干叶；本 PCR 的示范路线和范围采用干叶。排除糖或甜味剂提取、枫糖浆浓缩、高粱汁提取或发酵、甜菊醇糖苷提取/精制以及后续制造。其他物种或产品状态必须使用单独的前景记录和证据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-sugar-crops-n-e-c` |
| classification_refs | `CPC 3.0: 01809`（未映射；分类仅用于发现，不代表可以混合产品） |
| covered_products | 未加工糖槭树液；糖用高粱秆；鲜甜叶菊叶或干甜叶菊叶，每个数据集单独建模 |
| excluded_products | 普通高粱籽粒或种子；糖、糖浆、提取汁液、发酵产品、精制甜菊醇糖苷及混合作物清单 |
| representative_product | 每个数据集选择一条作物路线和一种商品状态 |
| production_route | 多年生糖槭林管理、打孔采汁和收集；一年生糖用高粱种植和收秆；或甜叶菊叶片种植、收获以及声明的鲜/干调制 |
| market_state | 未加工树液、收获高粱秆或收获/初级调制叶片，均须声明交接点和含水状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一种作物专属的原始产品：糖槭树液、糖用高粱秆或甜叶菊叶片；只能选一种 |
| How much | 所选产品在声明交接点的 1 kg；保留作物、植物部位、含水率和商品状态限定信息 |
| How well | 记录物种/品种（如已知）、作物用途、采收或取汁方式、含水率/状态、等级和去向 |
| How long or cycle | 糖槭为一个声明的采汁季；高粱为一个作物周期；甜叶菊为一次收获或一个声明的多茬季 |
| reference_flow_link | 产品身份未解决，尚无经核实的 UUID。不得替换为高粱籽粒、糖浆、糖或甜味剂流。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 上述路线对应的收获产品；UUID 未解决 |
| 参考流属性 | 质量 |
| 参考单位组 | 质量单位组；UUID 未解决 |
| 参考单位 | kg |
| 必需限定信息 | 唯一作物分支；物种/品种；植物部位；糖料用途；鲜/干状态和含水率；地理位置；生产期；作物专属交接点；等级；分配和多期处理 |
| 绑定模式 | 省略；精确参考产品 UUID 尚未解决 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | 所有路线 | 质量 | kg | 在声明交接点称量所选产品净质量；记录含水率及任何体积换算。不得合计不同作物产品。 |
| `measure_maple_season` | 糖槭 | 质量；面积；时间 | kg；ha；采汁季 | 记录树孔数、采集日期、树液总量/质量、损失、密度换算依据及生产林面积。 |
| `measure_sorghum_stalk` | 糖用高粱 | 质量；面积 | kg；ha | 在压榨或提汁前称量收获的高粱秆；报告品种、收获阶段、含水率、种植面积及单独销售的籽粒。 |
| `measure_stevia_leaf` | 甜叶菊 | 质量；面积；含水率 | kg；ha；质量分数 | 干燥时分别称量鲜叶和干叶；披露含水率和干物质换算。 |
| `measure_inputs` | 所有路线 | 按流类别 | kg、m3、kWh、plant 或记录单位 | 保留采购/施用数量和功能身份；播种质量、活体数量、水量和能源载体应分别记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 作物专属的已种植或已建成生产群体；建植负荷必须纳入或明确关联并分摊到所代表的生产期 |
| starting_condition_role | 收获或取汁前的受管理生物生产 |
| product_classification_scope | 声明的农场或初级调制交接点原始糖料作物产品；不含下游甜味剂制造 |
| recursive_input_rule | 购入种子、苗木、插穗和其他繁殖材料属于独立的上游产品输入；不得把本 PCR 的收获参考产品当作其自身的种植输入。 |
| upstream_dataset_requirement | 繁殖材料上游数据须匹配作物身份、材料类型、地点、时期和交接点；若建植早于数据期，报告其负荷是纳入、排除还是由经审计的关联数据集表示。 |
| disclosure | 披露路线分支、群体/作物阶段、交接点、含水率、纳入作业、可选作业、共享资产和未解析流身份。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_single_branch` | 数据集 | 仅选择糖槭树液、糖用高粱秆或甜叶菊叶片之一及一种产品状态；合并清单不符合要求。 | `src_unsd_cpc01809`; `src_fao_sugar_crops` |
| `boundary_maple` | 糖槭 | 纳入林地管理、打孔、收集及农场端原树液交接；排除树液浓缩和糖浆制造。 | `src_unsd_cpc01809`; `src_umaine_maple_2025` |
| `boundary_sorghum` | 糖用高粱 | 纳入以糖料为用途的作物管理和收秆；籽粒收获及高粱秆提汁不属于本产品清单，除非同一过程另有单独计量的共产品。 | `src_fao_sweet_sorghum_cultivation`; `src_fao_sweet_sorghum_harvest`; `src_fao_sugar_crops` |
| `boundary_stevia` | 甜叶菊 | 纳入受管理的叶片生产、收获及声明的叶片稳定化/初级调制；排除甜菊醇糖苷提取、纯化和配制。 | `src_ukys_stevia`; `src_jecfa_stevia` |
| `boundary_period` | 多年生或多茬生产 | 将建植、维护、更新、生产期收获和终止归属至所声明时期；保留所选方法并避免重复分配。 | `src_umaine_maple_2025`; `src_sweet_project_stevia_lca` |
| `boundary_shared_assets` | 共享农场资产 | 按实测使用驱动因子分配共享机械、道路、干燥设施和人工；披露驱动因子并避免重复计入。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `maple_sap_route` | 糖槭林管理、打孔和原树液收集 | conditional | 所选产品仅为 *Acer saccharum* 糖槭树液时使用。 | 多年生受管理生产和资源采集 | 每个声明采汁季的原树液 kg 及 1 kg 参考流 |
| `sweet_sorghum_stalk_route` | 糖用高粱种植和收秆 | conditional | 所选产品仅为以糖或糖浆原料为目的种植的高粱秆时使用。 | 一年生作物生产和收获 | 每个作物周期收获高粱秆 kg 及 1 kg 参考流 |
| `stevia_dried_leaf_route` | 甜叶菊种植、采叶和农场干燥 | conditional | 仅当 *Stevia rebaudiana* 叶片在交接点声明为干叶时使用。鲜叶数据集须声明不同状态并省略干燥。 | 受管理叶片生产、收获和初级稳定化 | 每次收获周期的干叶 kg 及 1 kg 参考流 |

### 过程：糖槭林管理、打孔和原树液收集（`maple_sap_route`）

#### 输入

##### 产品流

###### 糖槭建植和更新苗木（`maple_planting_stock`）
记录用于建植或更新所代表糖槭林的苗木。保留树木数量和生产期；UUID 未解决。
- 选定流：糖槭苗木/繁殖材料（UUID 未解决）
- 流属性/单位：数量 / plant
- 数量规则：按林地和时期记录种植及更新树木数量；将建植苗木分配至所声明的生产采汁季。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采汁季及每 kg 原树液
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_maple_field_records`
- 来源：`src_umaine_maple_2025`
- 数量范围：暂定林木存量分配筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：plant-equivalent/tap-season
  - 基准：每个生产采汁季的暂定更新苗木分摊；应以林木清查及寿命记录替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 合并肥料和养分供应（`maple_nutrient_supply`）
此条件性总括卡覆盖糖槭林实际使用的所有矿质肥、有机肥及养分改良剂；具体交换由前景记录决定。
- 选定流：农业肥料和养分供应
- 流属性/单位：质量 / kg
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：汇总本过程实际肥料和养分改良剂产品质量；生成数据集时保留产品和养分组成。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 原树液及每个采汁季
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maple_field_records`
- 来源：`src_umaine_maple_2025`
- 数量范围：暂定养分产品筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg fertilizer product/kg raw sap
  - 基准：宽泛条件性筛查，不代表默认施用率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`maple_irrigation_water`）
仅当所代表林地实施灌溉时纳入；采集的树液不属于灌溉水或工艺用水。
- 选定流：灌溉水供应
- 流属性/单位：质量或体积 / m3
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：记录仪表计量或其他实测灌溉水量；未灌溉时记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 原树液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maple_field_records`
- 数量范围：暂定灌溉筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：m3/kg raw sap
  - 基准：条件性林地灌溉量；雨养糖槭林可为零
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 林地和打孔取汁能源（`maple_energy_supply`）
采集林地维护、打孔设备和树液收集所用购入或现场能源；不含糖浆浓缩。
- 选定流：田间和收集作业能源供应
- 流属性/单位：能量 / kWh
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按路线和时期记录各能源载体燃料及电力消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 原树液
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maple_field_records`
- 数量范围：暂定取汁能耗筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg raw sap
  - 基准：仅打孔和收集的宽泛筛查区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 原糖槭树液（`maple_sap_output`）
在浓缩或制糖浆之前称量或测量采集的原树液；UUID 未解决。
- 选定流：交接时原糖槭树液（UUID 未解决）
- 流属性/单位：质量 / kg
- 数量规则：按采汁季记录合格原树液产出；将清单交换归一化至 1 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 原树液
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maple_field_records`
- 来源：`src_umaine_maple_2025`
- 数量范围：已发表的每树孔全季树液产量（近似质量换算）
  - 范围角色：典型范围（`typical_range`）
  - 下限：18.9
  - 上限：56.8
  - 单位：kg sap/tap-season
  - 基准：缅因大学报告每个树孔每季 5–15 US gallons；以约 1 kg/L 转换，仅用于筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`src_umaine_maple_2025`

### 过程：糖用高粱种植和收秆（`sweet_sorghum_stalk_route`）

#### 输入

##### 产品流

###### 糖用高粱种子（`sorghum_seed_input`）
记录所声明糖用作物播种的购入或留种。不得将收获籽粒替代为参考产品；UUID 未解决。
- 选定流：用于播种的糖用高粱种子（UUID 未解决）
- 流属性/单位：质量 / kg
- 数量规则：记录播种种子质量及建立的有效植株群体；保留品种和播种率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 收获高粱秆
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorghum_field_records`
- 来源：`src_fao_sweet_sorghum_cultivation`
- 数量范围：暂定播种量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.02
  - 单位：kg seed/kg harvested stalk
  - 基准：宽泛首轮筛查；以种子发票和播种记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 合并肥料和养分供应（`sorghum_nutrient_supply`）
此条件性总括卡覆盖该作物过程实际使用的所有矿质肥、有机肥及养分改良剂。
- 选定流：农业肥料和养分供应
- 流属性/单位：质量 / kg
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：汇总实际肥料和养分改良剂产品质量；在生成数据集中保留产品身份和养分组成。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 收获高粱秆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorghum_field_records`
- 来源：`src_fao_sweet_sorghum_cultivation`
- 数量范围：暂定养分产品筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg fertilizer product/kg harvested stalk
  - 基准：宽泛条件性筛查，不代表默认施用率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`sorghum_irrigation_water`）
仅记录灌溉；雨养作物不将降雨列为清单输入。
- 选定流：灌溉水供应
- 流属性/单位：质量或体积 / m3
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按种植面积和作物周期记录仪表计量或实测灌溉量；雨养田记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 收获高粱秆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorghum_field_records`
- 数量范围：暂定灌溉筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：m3/kg harvested stalk
  - 基准：宽泛条件性估计；以田间计量或灌溉计划替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间和收获能源（`sorghum_energy_supply`）
记录田间作业和收秆使用的燃料及电力；不含下游提汁。
- 选定流：田间和收获作业能源供应
- 流属性/单位：能量 / kWh
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按路线和作物周期记录各能源载体消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 收获高粱秆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorghum_field_records`
- 数量范围：暂定田间能耗筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg harvested stalk
  - 基准：种植和收获作业的宽泛筛查区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农药和作物保护产品（`sorghum_crop_protection`）
如有施用，应在数据包中分别记录每种实际制剂和施用；本总括卡不授权选择 UUID。身份 UUID 未解决。
- 选定流：施用于糖用高粱的作物保护产品（UUID 未解决）
- 流属性/单位：质量 / kg
- 数量规则：按有效成分、制剂、对象和日期记录产品施用质量；未使用时记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 收获高粱秆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorghum_field_records`
- 数量范围：暂定作物保护产品筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg formulated product/kg harvested stalk
  - 基准：宽泛条件性筛查，不是推荐施用率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 糖用高粱秆（`sorghum_stalk_output`）
在作物交接点、压榨或提汁前称量收获高粱秆。范围来自已发表试验，不代表所有品种或地区；UUID 未解决。
- 选定流：收获时糖用高粱秆（UUID 未解决）
- 流属性/单位：质量 / kg
- 数量规则：按作物周期记录合格高粱秆质量和含水率；交换归一化至 1 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 收获高粱秆
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sorghum_field_records`
- 来源：`src_fao_sweet_sorghum_cultivation`; `src_fao_sweet_sorghum_harvest`
- 数量范围：FAO 报告的新鲜高粱秆田间试验产量
  - 范围角色：典型范围（`typical_range`）
  - 下限：33750
  - 上限：52103
  - 单位：kg fresh stalk/ha
  - 基准：品种和播种日期试验产量；本地场址产量应以现场数据为准
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`src_fao_sweet_sorghum_cultivation`

### 过程：甜叶菊种植、采叶和农场干燥（`stevia_dried_leaf_route`）

#### 输入

##### 产品流

###### 甜叶菊种苗（`stevia_planting_material`）
记录实际使用的种苗或无性繁殖材料类型及更新率。UUID 未解决。
- 选定流：甜叶菊苗木或生根插穗（UUID 未解决）
- 流属性/单位：数量 / plant
- 数量规则：按田块和收获周期记录建植和补苗数量；将建植材料分配至所代表的生产期。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干叶及每个建植/收获周期
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_stevia_field_records`
- 来源：`src_sweet_project_stevia_lca`
- 数量范围：公开种植密度及首年干叶产量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：35
  - 单位：plant-equivalent/kg dried leaves
  - 基准：某希腊生产案例约为 60,000–70,000 株/ha、2,000 kg 干叶/ha；并非通用种植率
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`src_sweet_project_stevia_lca`

###### 合并肥料和养分供应（`stevia_nutrient_supply`）
此条件性总括卡覆盖甜叶菊田间使用的所有矿质肥、有机肥及养分改良剂；具体交换由前景记录决定。
- 选定流：农业肥料和养分供应
- 流属性/单位：质量 / kg
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：汇总实际肥料和养分改良剂产品质量；在生成数据集中保留养分分析。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干叶
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stevia_field_records`
- 来源：`src_ukys_stevia`
- 数量范围：暂定养分产品筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg fertilizer product/kg dried leaves
  - 基准：宽泛条件性筛查；以施用记录和养分分析替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`stevia_irrigation_water`）
仅记录灌溉；降雨作为场址条件单独报告，不作为购入产品输入。
- 选定流：灌溉水供应
- 流属性/单位：质量或体积 / m3
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按田块和周期记录仪表计量或实测灌溉量；未灌溉时记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干叶
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stevia_field_records`
- 数量范围：暂定灌溉筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：m3/kg dried leaves
  - 基准：宽泛条件性估计；以田间用水记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间和干燥能源（`stevia_energy_supply`）
仅在实际使用时纳入田间机械及农场干燥能源；报告干燥技术和进/出料含水率。
- 选定流：田间和叶片干燥能源供应
- 流属性/单位：能量 / kWh
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按收获批次记录各能源载体的田间和干燥能耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 干叶
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stevia_field_records`
- 数量范围：暂定田间和干燥能耗筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg dried leaves
  - 基准：覆盖低能耗日晒和机械干燥的宽泛筛查估算；以计量能源数据替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农药和作物保护产品（`stevia_crop_protection`）
如有使用，记录实际作物保护制剂和施用情况；不指定通用 UUID。
- 选定流：施用于甜叶菊的作物保护产品（UUID 未解决）
- 流属性/单位：质量 / kg
- 数量规则：记录产品质量、制剂、有效成分、防治对象、日期和处理面积；未使用时记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 干叶
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stevia_field_records`
- 数量范围：暂定作物保护产品筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg formulated product/kg dried leaves
  - 基准：宽泛条件性筛查，不是推荐施用率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干甜叶菊叶（`stevia_leaf_output`）
在声明的干叶交接点记录叶片质量，并保留含水率和干燥损失记录。此区域案例范围不能作为通用产量；UUID 未解决。
- 选定流：农场交接时干燥的 *Stevia rebaudiana* 叶片（UUID 未解决）
- 流属性/单位：质量 / kg
- 数量规则：按收获周期记录合格干叶质量、残余含水率和等级；交换归一化至 1 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 干叶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stevia_field_records`
- 来源：`src_sweet_project_stevia_lca`; `src_ukys_stevia`
- 数量范围：已报告的希腊田间案例干叶产量
  - 范围角色：典型范围（`typical_range`）
  - 下限：2000
  - 上限：4000
  - 单位：kg dried leaves/ha
  - 基准：某首年和多年合作社田间案例；保留本地品种、年份和收获次数
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`src_sweet_project_stevia_lca`

## 7. 分配与共产品处理

每份清单只核算一条作物分支。如果同一林地或田块在声明时期产出多个预期产品，先评估能否按田块、作业、收获或批次拆分；若不可行，则选择并说明与研究问题一致的物理或经济分配驱动因子，记录全部产品和交接点，并对重要替代方案进行敏感性分析。只有在有意采收且作为有用产品离开过程时，槭木材、高粱籽粒和甜叶菊茎才属于共产品。除非记录了真实用途和交接点，叶片、顶部、根、杂草、拒收物、树液泄漏和田间损失均为残余物或废物。多年资产和共享设备只计入一次，并按实测生产面积、使用量、采汁季或机械时间分配；不得在时期或产品间重复归属。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_maple_field_records` | `maple_sap_route` | 林木存量；养分产品；灌溉；能源；原树液 | 林木、采购、施用、仪表和生产记录 | species; stand_id; trees_planted; replacements; taps; tap_dates; sap_mass_or_volume; density_basis; nutrients; irrigation; fuel; electricity; area; losses; co_products; gate | 核对发票、林地图、仪表、打孔日志和经校准的秤 | plant; kg; m3; kWh; ha | 每项作业和每个采汁季 | 完整代表性采汁季 | 每片所代表的糖槭林 | 按林地和采汁季汇总；建植负荷按声明生产期年化 | 供应商记录；田地图；校准秤和仪表检查 |
| `cp_sorghum_field_records` | `sweet_sorghum_stalk_route` | 种子；养分产品；灌溉；能源；作物保护；高粱秆产出 | 种子、田间作业、施用、仪表和收获记录 | cultivar; crop_purpose; seed_mass; area; sowing_date; fertilizer_product; nutrient_analysis; irrigation; fuel; electricity; pesticide; harvest_date; stalk_mass; moisture; grain; residues; rejects; gate | 核对发票、田间日志、仪表、施用记录和经校准的收获秤 | kg; m3; kWh; ha; 质量分数 | 每项作业和每个作物周期 | 完整代表性作物周期 | 每块所代表的田地 | 按田块和作物周期汇总；分别保留籽粒和高粱秆数量 | 种子标签；发票；施用日志；校准秤；仪表记录 |
| `cp_stevia_field_records` | `stevia_dried_leaf_route` | 种苗；养分产品；灌溉；能源；作物保护；干叶 | 种植、田间作业、施用、仪表、干燥批次和生产记录 | cultivar; planting_stock_type; plants; replacements; area; harvest_dates; fertilizer_product; nutrient_analysis; irrigation; fuel; electricity; pesticide; fresh_leaf_mass; dried_leaf_mass; moisture; drying_loss; residues; gate | 核对田间记录、发票、仪表、干燥机日志和经校准的秤 | plant; kg; m3; kWh; ha; 质量分数 | 每项作业及每个收获/干燥批次 | 完整代表性收获与干燥周期 | 每块所代表的田地及干燥设备 | 按收获周期汇总合格干叶；核对鲜叶投入、干叶产出、含水率、拒收物和残余物 | 种苗发票；施用日志；校准秤；含水率检测；干燥机仪表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_maple_sap_mass` | 糖槭 | 仅使用实测密度将树液体积换算为质量，或披露筛查换算；保留原始体积。 | 体积；密度；采汁季 | kg 原树液 | `src_umaine_maple_2025` |
| `calc_sorghum_yield` | 糖用高粱 | 仅在记录了作物面积时用收秆质量除以面积进行面积产量比较；不得从籽粒产量推算秆质量。 | 高粱秆质量；面积；含水率 | kg/ha 和 kg 参考流 | `src_fao_sweet_sorghum_cultivation`; `src_fao_sweet_sorghum_harvest` |
| `calc_stevia_dry_matter` | 甜叶菊 | 分开报告鲜叶和干叶质量；仅用实测含水率计算干物质，并保留干燥损失。 | 鲜叶质量；干叶质量；含水率 | kg 干叶及干物质分数 | `src_ukys_stevia` |
| `calc_period_share` | 多年生及多茬路线 | 按记录的生产期/产量或实测使用驱动因子分配建植和共享资产；同一资产不得在多个时期重复计入。 | 建植；生产年份；时期产量；资产使用 | 时期归属库存 | `src_umaine_maple_2025`; `src_sweet_project_stevia_lca` |
| `calc_soil_emissions` | 受管理田地 | 如需计算直接土壤排放，应依据所报氮投入、气候/土壤条件和声明的清单方法进行计算，并披露因子和不确定性。本 PCR 不指定未经核实的排放 UUID 或通用因子。 | 施氮；土壤和气候数据；所选方法 | 方法专属直接土壤排放 | `src_ipcc_managed_soils` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_route_identity` | 所有数据集 | 命名一种作物、物种、植物部位、用途、商品状态和交接点；不得混合不同路线。 | 田块图、作物记录、产品说明和称重记录 |
| `quality_product_state` | 所有数据集 | 报告含水率、等级、拒收物和质量基准；区分鲜品、干品和加工品状态。 | 校准秤、含水率检测、分拣和批次记录 |
| `quality_inputs` | 所有数据集 | 将种子/种苗、养分产品、水、能源和作物保护施用与发票、仪表和田间日志核对；明确记录零使用。 | 采购记录、施用日志、田间日志、仪表 |
| `quality_range` | 所有数据集 | 将每个前景数量与卡片范围比较；说明异常值并以本地一手数据替换暂定估算。范围仅作筛查，不是允许值。 | 范围核查表、来源或推理估算记录及纠正说明 |
| `quality_attribution` | 共享及多年生系统 | 披露时期和共产品分配、资产使用驱动因子及重要选择的敏感性。 | 分配工作表和产品交接记录 |

## 9. 校验规则

- `validate_single_branch`：每份数据集仅有一条路线、一个物种、一种植物部位、一种用途、一种产品状态和一个交接点。
- `validate_reference_identity`：在确认精确原始产品身份及质量属性/单位组前，参考产品 UUID 保持空白；不得以籽粒、糖浆、糖或提取甜味剂作代理。
- `validate_process_chain`：所选路线须有建植/管理、收获或打孔采集及声明的初级调制记录；排除下游提取和制造。
- `validate_mass_and_moisture`：核对收获/采集质量、鲜/干质量、含水率、损失、拒收物和共产品；不得重复计量。
- `validate_flow_set_binding`：每个过程最多一张合并的 `flow-set.agricultural-nutrient-supply@0.3.0` 输入卡且不带 group；能源使用集合级 `flow-set.energy-supply@0.2.0`；灌溉仅绑定 `flow-set.water-use@0.2.0` 的 `irrigation-water` 组。
- `validate_uuid_resolution`：生成最终交换前，依据实际记录展开每张参数化卡并核实具体兼容 UUID、属性和单位。独立解析未覆盖的输入和输出；本候选稿中未解析的身份继续留空。
- `validate_period_allocation`：核对建植、生产、更新、重复采叶/采汁和终止；避免重复分摊资产或田地负荷。
- `validate_coproduct_and_reject`：将每个预期共产品、降级产品、返工品、残余物和废物追踪至唯一去向；拒收物不得计入合格参考产出。
- `validate_extraction_exclusion`：系统边界内不得包含糖浆浓缩、高粱汁/甜味剂提取或发酵、甜菊醇糖苷提取/精制。
- `validate_range_and_quality`：核查每张卡的范围、单位、基准、来源适用范围和前景数值；超出范围需调查，不能把暂定范围视为合规限值。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 在声明农场或初级调制交接点核算一种原始糖料作物产品的前景数据集 |
| downstream_use | `secondary_dataset`；完成代表性和身份审查后可作 `background_dataset` |
| allowed_use | 具有一致物种、部位、用途、商品状态、含水率、路线、时期、交接点和分配方法的作物专属供应建模 |
| excluded_use | 混合路线或状态的产品比较；糖浆、糖、提取汁液、发酵品、纯化甜味剂或下游制造 |
| required_metadata | 作物分支；物种/品种；植物部位；用途；地理位置；时期；路线；建植/林地阶段；面积；收获/采汁模式；产品质量；含水率；等级；交接点；投入；共享资产；分配；未解析身份 |
| required_quality_disclosure | 一手数据占比；UUID 缺口；含水率及质量平衡；范围超限；暂定范围；时期和共产品归属；田间排放方法；来源的地理和技术局限 |
| update_trigger | 参考 UUID 经核实；出现新的来源范围证据；产品状态、作物、交接点、技术、Flow Set 版本或分配方法变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `src_unsd_cpc01809` | official_guidance | UNSD CPC 2.1, 01809, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/01809 | 所列作物示例和类别边界证据 |
| `src_fao_sweet_sorghum_cultivation` | official_guidance | FAO, Sweet sorghum cultivation, https://www.fao.org/4/t4470e/t4470e05.htm | 高粱路线及已报告秆产量试验 |
| `src_fao_sweet_sorghum_harvest` | official_guidance | FAO, Sweet sorghum harvest stage, https://www.fao.org/4/t4470e/t4470e07.htm | 收获时期和秆糖分变化 |
| `src_fao_sugar_crops` | official_guidance | FAO, sugar-crop purpose distinctions, https://www.fao.org/4/x9892e/X9892e06.htm | 区分糖用高粱与籽粒用途 |
| `src_umaine_maple_2025` | official_guidance | University of Maine Cooperative Extension, Maple syrup production for the beginner, updated 2025, https://extension.umaine.edu/publications/7036e/ | 打孔、采集、季节产量和糖槭林记录 |
| `src_ukys_stevia` | official_guidance | University of Kentucky Center for Crop Diversification, Stevia, https://ccd.uky.edu/sites/default/files/2024-11/ccd-cp-055_stevia.pdf | 甜叶菊收获、叶片处理、干燥和含水率记录 |
| `src_jecfa_stevia` | standard | FAO/JECFA, Steviol glycosides monograph, https://www.fao.org/fileadmin/templates/agns/pdf/jecfa/cta/63/Steviol.pdf | 区分收获叶片和提取甜味剂的边界 |
| `src_sweet_project_stevia_lca` | literature | SWEET project stevia cultivation and LCA case, https://pmc.ncbi.nlm.nih.gov/articles/PMC9839952/ | 区域性种植密度和干叶产量案例；非通用数据 |
| `src_ipcc_managed_soils` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 受管理土壤氮排放方法的输入和不确定性披露 |
