---
pcr_id: pcr.farmed-live-whole-sea-cage-atlantic-cod
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 海水网箱养殖活体完整大西洋鳕

## 1. 范围与适用性

本PCR适用于挪威大西洋鳕（Gadus morhua）：购入孵化场来源幼鱼，经海水网箱养成、活体收获、分选和活鱼运输船交付，在首次加工方屠宰前实物接收时仍为活体完整鱼。所选场门是中间生产者交付点，并不声称所有养殖鳕鱼均以活鱼形式零售。FAO描述孵化育苗至网箱养殖及活鱼运输船送往屠宰场的路线；Norcod第一方资料佐证孵化场和鱼苗至海水养成阶段。上述资料仅支持定性路线选择。

排除野生捕捞幼鱼及捕捞后育肥、野生成年鱼、其他鳕形目鱼类、全陆基养成，以及在参考场门前已屠宰、放血、去内脏、切片或冷冻的鱼。排除下游屠宰、死鱼包装、零售、烹饪和消费。不设通用饲料转化率、放养密度、死亡率、用药、光周期效果、周期长度或运输温度。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.farmed-live-whole-sea-cage-atlantic-cod |
| classification_refs | cpc:3.0:04242 |
| covered_products | 挪威孵化场来源海水网箱大西洋鳕，在首次加工方屠宰前实物接收时为活体完整鱼 |
| excluded_products | 野生幼鱼育肥；野生成年鱼；其他鳕形目；全陆基养成；死鱼、放血、去内脏、切片或冷冻参考鱼 |
| representative_product | 指定挪威海水网箱群体的活体完整 Gadus morhua |
| production_route | 购入孵化幼鱼 → 海水网箱管理养成 → 活体网箱收获 → 活鱼分级及去向分选 → 活鱼运输船保活及交付 |
| market_state | 加工方屠宰前实物接收的完整活鱼 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 指定首次加工方屠宰前实物接收的验收完整活体大西洋鳕 |
| How much | 1 kg 验收鱼净质量 |
| How well | 核实 Gadus morhua、孵化来源、海水网箱路线和实际活体验收；包含鱼体，排除自由载水和设备皮重 |
| How long or cycle | 从购入幼鱼接收到最终活体验收的实际群体周期；保留全部报告年、期初期末库存、收获航次、失败周期和服务时期 |
| reference_flow_link | `cod_processor_receipt` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 首次加工方屠宰前实物接收的活体完整大西洋鳕 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种；孵化幼鱼来源及上游育苗覆盖；挪威养殖场及网箱技术；群体与时期；活体完整状态；首次加工方屠宰前实际实物接收；等级与去向；验收日期；鱼净质量称重或抽样尾数换算；载水与皮重扣除；死亡和拒收处理；服务归属与分配 |

这些限定信息须出现在前景数据包元数据或等效明确字段中。只有交易日期而无实际活体验收，不能定义本参考流。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准秤或可追溯校准称重记录，在实物接收时称量验收完整活鱼，扣除自由载水和设备皮重；采用 cp_acceptance。 |
| count_mass | cod_juveniles; cod_ready; harvest_cod; cod_collected; sort_cod; cod_sorted; delivery_cod; cod_processor_receipt | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 尾数换算须保留原始尾数、代表性批次活鱼净质量样本、抽样设计及不确定性；不得使用通用幼鱼或成鱼尾数质量因子。 |
| native_units | all inventory rows | 实际交换属性 | 实际本征单位 | 保留燃料原始质量或体积及密度证据、电力kWh/MJ换算、水体积、服务功能单位和化学或元素基准；不得将服务自动换算为质量。 |
| substance_basis | growout_aquatic; growout_air; harvest_releases; sort_direct_releases; delivery_releases; delivery_air | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明化学物种及接收介质；区分营养元素与化合物质量、化石与生物源碳、载水体积与新增污染负荷。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别孵化和育苗供应商交付养殖场的购入活体 Gadus morhua 幼鱼，携带完整上游负荷 |
| starting_condition_role | 生物投入边界，并非无负荷起点 |
| product_classification_scope | CPC 04242内所选孵化来源海水网箱大西洋鳕路线；该分类叶还包含本PCR排除的产品 |
| recursive_input_rule | 同类幼鱼或活鳕投入须保留物种、状态、场门与上游谱系；完整供应商数据集或明确上游子模型仅计入一次，并检查循环及重复 |
| upstream_dataset_requirement | 孵化、育苗、饲料、能源、耗材、服务、资产及交付投入须有适用地理、技术和状态的上游覆盖；缺失须披露为数据缺口 |
| disclosure | 声明实际孵化来源、接收场门、养殖场及网箱群体、报告年、服务包含项、资产边界、损失、库存结转、分配、不确定性和排除项 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | cod_growout; cod_harvest; cod_sort; cod_live_delivery | 将孵化育苗留在购入幼鱼上游。前景养成在网箱生产活鱼；独立收获将鱼活体移出；分选区分验收、降级和拒收去向；保活使鱼在活鱼运输船交付期间保持可用活体状态。 | fao-cod-2010; norcod-sea-route |
| boundary_gate | cod_live_delivery | 终点为有证据的加工方实物活体接收，先于放血、去内脏和屠宰；缺少活体场门证据不能默认采用本参考。 | fao-cod-2010; cod-accounting-method |
| boundary_support | all inventory rows | 纳入实际养成设备清洁、辅助工作船、收获搬运、保活及物流。不得为活鱼水舱虚构独立鱼体预处理或产品包装作业。实际辅助交换在使用节点逐项展开。 | cod-accounting-method |
| boundary_periods | cod_growout; cod_harvest; cod_sort; cod_live_delivery | 对幼鱼接收、海水群体生长、分批收获、交付、空置清洁、失败、资产更换及终止按全部相关报告年索引。期初期末群体库存结转负荷，不重复分配。 | cod-accounting-method |
| boundary_shared | growout_services; harvest_services; sort_services; delivery_services | 为网箱系泊、投喂系统、工作船、活鱼运输船及公用设施建立唯一共享账，列明使用节点、群体及服务时期。每节点仅承担有证据份额；综合供应商和直接组成项实行独占归属。 | cod-accounting-method |
| boundary_generation | growout_electricity; growout_fuel; harvest_electricity; harvest_fuel; sort_electricity; sort_services; sort_direct_releases; delivery_electricity; delivery_fuel | 现场发电已列燃料及直接排放时，所发电力仅作内部能量转移，不再增加购电上游负荷。外购电的供应商发电上游仅计一次。计量并区分外购、自发电和转移，确定唯一发电机归属及明确燃料电力边界。 | cod-accounting-method |
| boundary_losses | all inventory rows | 结合生物生长、有意转移、死亡、逃逸及库存核对尾数、生物量和饲料；不得强迫幼鱼质量等于最终质量。账目损失不自动成为废物或基本流交换。不设生态或营养物移除信用。 | cod-accounting-method |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| cod_growout | 海水网箱养成 | required | 所选孵化来源海水网箱路线 | 管理生物群体生产，按批次群体及报告时期索引 | 交给收获节点的实测活鱼生物量 |
| cod_harvest | 活鱼网箱收获 | required | 实际为交付进行活体移出 | 独立从生产环境收集，按事件航次索引 | 交给分选节点的已收获活鳕 |
| cod_sort | 活鱼分级与去向分选 | required | 装载前实际去向决策 | 区分验收等级、降级退回及拒收状态，按批次索引 | 验收活鱼交付批次及声明的次级状态 |
| cod_live_delivery | 保活与活鱼运输船交付 | required | 所选加工方活体接收渠道 | 在装载、航程及验收期间保持完整活体状态 | 加工方接收的1 kg验收净质量完整活鳕 |

群体可能在网箱及报告期之间重叠。记录实际作业模式与事件边界，不预设每年单批。每次转移两端使用同一编号；内部产品输出不是额外最终产品。即使多个等级共用一张语义卡，等级去向账也须列明实际每个等级。不预设未记录的次级产品。

### 过程：海水网箱养成（`cod_growout`）

本节点记录实际群体、事件和时期；条件卡仅按实际记录展开。各节点输入输出状态及交接由过程图和对应卡片明确。

#### 输入

##### 产品流

###### 孵化场来源活体大西洋鳕幼鱼（`cod_juveniles`）

保留供应商孵化、育苗至幼鱼交付的负荷；记录物种、来源、尾数和抽样净质量。排除野生捕捞幼鱼。

- 选定流：孵化场来源活体大西洋鳕幼鱼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_cod_juveniles
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付的鳕鱼饲料（`cod_feed`）

逐项记录实际配方、含水基准、供应商和交付；区分期初期末饲料库存、投喂量和未用处置量。不设默认配方或饲料转化率。

- 选定流：交付的鳕鱼饲料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_cod_feed
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养成用电（`growout_electricity`）

计量投喂、辅助设施和实际使用的光周期照明，能分表则分表；照明不代表能保证抑制性成熟。

- 选定流：养成用电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 单位组：能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_growout_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设交换；记录并分类实际跨边界的此类交换。

##### 基本流

不预设交换；记录并分类实际跨边界的此类交换。

#### 输出

##### 产品流

###### 待收获的活体网箱养殖大西洋鳕（`cod_ready`）

记录交接给收获节点的群体生物量、转移编号及活体状态。该项为内部转移，不是第二项最终产品。

- 选定流：待收获的活体网箱养殖大西洋鳕
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_cod_ready
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

##### 基本流

###### 养成直接燃烧向未特定空气排放的化石二氧化碳（`growout_fossil_co2`）

仅计算实际直接化石燃烧；排除生物呼吸、生物源碳及综合服务供应商排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：fixed
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_growout_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：活鱼网箱收获（`cod_harvest`）

本节点记录实际群体、事件和时期；条件卡仅按实际记录展开。各节点输入输出状态及交接由过程图和对应卡片明确。

#### 输入

##### 产品流

###### 待收获的活体网箱养殖大西洋鳕（`harvest_cod`）

匹配 cod_ready 的转移编号及实测生物量；收获负责将鱼移出网箱，独立于生物生长或屠宰。

- 选定流：待收获的活体网箱养殖大西洋鳕
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_harvest
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_harvest_cod
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获用电（`harvest_electricity`）

记录实际泵送、搬运或提升用电；不得预设技术或用电需求。

- 选定流：收获用电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 单位组：能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_harvest
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_harvest_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设交换；记录并分类实际跨边界的此类交换。

##### 基本流

不预设交换；记录并分类实际跨边界的此类交换。

#### 输出

##### 产品流

###### 待分选的已收获活体大西洋鳕（`cod_collected`）

在分选交接点记录存活收获鱼，分别记录杂物及鱼损失。

- 选定流：待分选的已收获活体大西洋鳕
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_harvest
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_cod_collected
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


##### 废物流

##### 基本流

###### 收获直接燃烧向未特定空气排放的化石二氧化碳（`harvest_fossil_co2`）

仅计算归属收获节点的直接化石燃料排放，排除生物碳及综合服务负荷。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：fixed
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_harvest
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_harvest_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：活鱼分级与去向分选（`cod_sort`）

本节点记录实际群体、事件和时期；条件卡仅按实际记录展开。各节点输入输出状态及交接由过程图和对应卡片明确。

#### 输入

##### 产品流

###### 待分选的已收获活体大西洋鳕（`sort_cod`）

与入口 cod_collected 匹配，并保留批次及转移编号。

- 选定流：待分选的已收获活体大西洋鳕
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_sort
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sort`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_sort_cod
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 分选用电（`sort_electricity`）

按分选事件记录实际活鱼分选设备和辅助用电。

- 选定流：分选用电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 单位组：能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_sort
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sort`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_sort_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设交换；记录并分类实际跨边界的此类交换。

##### 基本流

不预设交换；记录并分类实际跨边界的此类交换。

#### 输出

##### 产品流

###### 待装活鱼运输船的验收活体大西洋鳕（`cod_sorted`）

逐项记录实际验收等级、交付批次、活体状态及保活交接。等级名称和阈值来自记录，不由本PCR预设。

- 选定流：待装活鱼运输船的验收活体大西洋鳕
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_sort
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sort`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_cod_sorted
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：保活与活鱼运输船交付（`cod_live_delivery`）

本节点记录实际群体、事件和时期；条件卡仅按实际记录展开。各节点输入输出状态及交接由过程图和对应卡片明确。

#### 输入

##### 产品流

###### 待装活鱼运输船的验收活体大西洋鳕（`delivery_cod`）

匹配 cod_sorted 批次及实测装载质量；保留保活干预前的存活状态。

- 选定流：待装活鱼运输船的验收活体大西洋鳕
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_delivery_cod
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保活用电（`delivery_electricity`）

记录实际采用的循环水、增氧及温控用电，并与综合服务电力区分。

- 选定流：保活用电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 单位组：能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_delivery_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 条件性供应氧气（`delivery_oxygen`）

实际供应时记录外购氧气规格、纯度及净使用量；不预设氧气默认投入。

- 选定流：氧气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_delivery_oxygen
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不预设交换；记录并分类实际跨边界的此类交换。

##### 基本流

###### 条件性活鱼运输船直接海水取水（`delivery_seawater`）

仅在模型拥有直接取水时记录计量或有据估算的水源及实际取水量；循环使用不重复计作取水。

- 选定流：条件性活鱼运输船直接海水取水
- 流属性/单位：体积 / m3
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_delivery_seawater
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


#### 输出

##### 产品流

###### 首次加工方屠宰前实物接收的活体完整大西洋鳕（`cod_processor_receipt`）

与参考分母使用同一验收鱼净质量接收记录。验证实际活体实物接收先于放血、去内脏或屠宰；仅有商业场门标签不足以证明。

- 选定流：首次加工方屠宰前实物接收的活体完整大西洋鳕
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance`
- 来源：`cod-accounting-method`
- 数量范围：同一验收活鱼净质量记录的归一化恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`cod-accounting-method`

##### 废物流

##### 基本流

###### 条件性载鱼海水返排（`delivery_water_return`）

记录实际接收区室与返排体积，并与取水及回用账匹配；该项不是鱼质量或生态信用。

- 选定流：条件性载鱼海水返排
- 流属性/单位：体积 / m3
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_delivery_water_return
  - 单位：m3
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 活鱼交付直接燃烧向未特定空气排放的化石二氧化碳（`delivery_fossil_co2`）

仅在本节点拥有其负荷时计算活鱼运输船直接化石燃烧；排除呼吸及综合供应商排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：fixed
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_delivery`
- 来源：`cod-accounting-method`
- 数量范围：未解决的暂定筛选证据需求；未声明经验界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_delivery_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all inventory rows | 首先将独立计量投入及事件归属节点、群体、批次和时期。本活鳕路线未能细分的共同作业负荷按有证据的因果服务使用量分配，例如计量电力、船时或有依据的网箱占用及生物量时间；披露选择依据及替代方法。 | cod-accounting-method |
| allocation_outputs | sort_secondary; delivery_returns; cod_processor_receipt | 列明实际有意验收等级、单独销售降级活鱼和其他有意输出及实物交接。先细分；剩余同质活鳕共同负荷按有意销售等级的验收活鱼净质量分配，说明质量驱动适用理由。不同功能或状态须另行审查分配决策。不设默认替代信用。 | cod-accounting-method |
| allocation_rejects | growout_waste; harvest_waste; sort_waste; delivery_waste | 拒收、死鱼和废物不自动成为共产品。其应计生产及处理负荷保留在责任群体或输出；退回活体库存仅携带一次所分配负荷，不计最终销售质量。 | cod-accounting-method |
| allocation_period | all inventory rows | 随存活群体库存跨年结转累计幼鱼及养成负荷，一致分配分批收获并核对剩余库存。失败群体、空置辅助、清洁及非生产服务须留在应计账中；披露再分配或终止处理，不得删除或重复分配。 | cod-accounting-method |
| allocation_assets | growout_services; harvest_services; sort_services; delivery_services | 使用实际资产清单、有依据的服务寿命、维护更换及各使用节点时期的服务份额；全部份额仅耗尽一次纳入负荷。不设默认寿命。综合外购服务与显式燃料、电力、资本及直接排放组成项相互排斥。 | cod-accounting-method |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_growout | cod_growout | 幼鱼、饲料、辅助投入、养成生物量、废物及排放 | 供应商、仪表、群体及排放记录 | 物种来源；幼鱼尾数及样本质量；饲料组成含水量及库存；网箱群体年；投入；仪表；资产服务编号与份额；死亡逃逸；废物去向；排放物种介质及因子模型来源 | 核对采购投喂库存记录、校准仪表及生物量样本；每项条件交换独立展开；仅用适用因子或实测浓度负荷计算物质 | kg; kWh; m3; 各服务本征单位 | 每次接收、投喂核算期及事件 | 完整群体及期初期末时期，含失败周期 | 指定挪威养殖场、网箱及供应商 | 每 1 kg 参考流 | 发票；校准；抽样；供应商覆盖；资产账；模型因子不确定性 |
| cp_harvest | cod_harvest | 移出、搬运、燃料服务、已收获活鱼及损失 | 航次事件及转移记录 | 群体；收获事件；转移编号；活体进出生物量尾数；燃料电力；服务归属；死亡逃逸；实际废物和直接排放物种介质 | 配对网箱移出与分选交接记录；计量实际拥有负荷的投入；保留事故及去向证据 | kg; kWh; 各服务本征单位 | 每次收获航次事件 | 所选时期全部群体收获及失败移出 | 指定网箱及收获船 | 每 1 kg 参考流 | 签署交接；秤；日志；服务发票；燃料因子来源 |
| cp_sort | cod_sort | 活鱼分级、验收、降级、退回及拒收状态 ；实际直接物质排放| 批次等级去向记录 | 进出转移编号；活体状态；实际每个等级阈值；净质量尾数样本；去向；电力；耗材服务；弃置处理 ；直接燃料活动及化学身份；接收介质；元素化合物及化石生物源基准；实测负荷或适用因子模型；供应商排除项；单列排放| 将输入收获批次匹配全部去向状态；取得实际等级标准及独立计量投入 ；测量实际直接排放或用适用记录活动因子计算，保留唯一分选归属并排除供应商及单列负荷重复| kg; kWh; 各耗材服务本征单位 | 每个分选批次及去向事件 | 所选群体报告年全部验收及拒收批次 | 指定分选地点及接收方 | 每 1 kg 参考流 | 等级票；称重抽样；接收方验收；废物接收单 ；排放测量因子来源与不确定性|
| cp_delivery | cod_live_delivery | 保活、航程、自有投入、服务、退回、废物及排放 | 装载、船舶、活体状态及排水记录 | 批次；路线时间；活体装载接收；燃料电力氧气；实际取水回用返排；温度氧气观测；服务包含项；死亡拒收鱼；排水成分介质；设备清洁事件 | 核对装载、实物接收及损失；采集实际存活观测、仪表及服务包含项；展开各条件交换，并区分取水背景及新增负荷 | kg; kWh; m3; 各服务本征单位 | 每次装载、航程、排水及接收 | 活鱼运输船完整任务至加工方首次活体接收 | 指定船舶路线及接收加工方 | 每 1 kg 参考流 | 航程日志；活体验收；仪表；接收单；水样；因子模型来源 |
| cp_acceptance | cod_live_delivery | 最终活体参考产品 | 实物验收及校准称重记录 | 物种；孵化来源；群体批次；加工方；时间；屠宰前活体状态；鱼及载水毛质量；自由水皮重；验收活鱼净质量；拒收；使用时的尾数样本证据 | 采用经校准设备称量验收完整活鱼，或核对可追溯校准接收重量；记录载水皮重扣除和屠宰前活体状态，配对装载验收 | kg | 每个实物接收批次 | 所选群体时期全部最终参考批次 | 首次加工方实物接收场门 | 每 1 kg 参考流 | 校准；签署活体接收；皮重核查；样本不确定性；场门时间戳 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| same_reference_normalization | all inventory rows | 各项归属实际交换除以同一应计群体输出范围的验收活鱼净质量；保留原始本征单位及数量。最终参考是验收质量除以同一验收质量，不是产率估算。 | 节点协议；cp_acceptance；分配账 | 每 1 kg 参考流交换数量 | cod-accounting-method |
| cohort_reconciliation | cod_growout; cod_harvest; cod_sort; cod_live_delivery | 核对期初库存、购入、生物生长、内部转移、期末库存、有意输出、死亡及逃逸；分别保留尾数和生物量证据。生物生长使幼鱼质量与最终质量不能简单相等。 | 群体饲料转移验收损失记录 | 可追溯库存及负荷结转，不重复转移 | cod-accounting-method |
| direct_release_calculation | growout_aquatic; growout_fossil_co2; growout_air; harvest_fossil_co2; harvest_releases; delivery_releases; delivery_fossil_co2; delivery_air | 使用适用的实测负荷、浓度流量或有据燃料饲料物质平衡因子；保留物质、元素化合物基准、介质、技术及不确定性。去除背景和综合供应商重叠；不设默认排放因子。 | 节点活动；测量；因子来源；服务归属 | 参考基准上各实际物质负荷 | cod-accounting-method |
| range_resolution | all inventory rows | 除最终1..1归一化恒等关系，0..U_row表示未解决筛选证据需求，绝非观测或已接受经验界限。每项展开交换须按自身属性和本征单位独立批准U_instance，记录证据、审查人及范围；汇总界限不能覆盖混合交换。 | 实际交换范围；节点协议；经审查范围证据 | 独立可替换筛选界限或明确未解决证据 | cod-accounting-method |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 匹配各实际交换身份、状态、场门、属性、本征单位、方向和去向；最终数据集交换须核实具体身份。 | 供应商和接收记录；身份支持核实 |
| quality_completeness | all inventory rows | 在完整群体和服务时期保留全部投入、辅助、服务、废物、排放、失败及期初期末库存。缺值是缺口，不自动为零。 | 群体核对及节点覆盖账 |
| quality_uncertainty | all inventory rows | 披露抽样、秤仪表、因子模型、时间地理及上游数据不确定性。各暂定上限在单独审查前仍未解决。 | 校准；样本；来源适用性；不确定性及界限决策记录 |
| quality_live_gate | cod_processor_receipt | 确认实际存活完整鱼在屠宰前实物验收；独立记录存活失败、拒收及退回。不保证通用存活、保质期或食品安全。 | 签署实物接收、状态观测及时间戳 |
| quality_translation | all inventory rows | 双语规则、卡片编号、单位、数量及来源角色与规范结构化投影一致。 | 配对文本及投影比较 |
| `collect_growout_fuel` | `cod_growout`; 输入; 产品流: 养成直接化石燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 记录养殖工作船和发电机燃料品种及实测使用量；排除已归属综合外购服务的燃料。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_growout`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_growout_fuel 单位：kg 基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_growout`; `cod-accounting-method` |
| `collect_growout_management` | `cod_growout`; 输入; 产品流: 条件性养成管理物料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项展开实际药物、消毒剂、网具耗材或其他以质量计量的物料，并记录组成和用途；不得预设必须用药。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_growout`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_growout_management 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_growout`; `cod-accounting-method` |
| `collect_growout_water` | `cod_growout`; 输入; 产品流: 供应的辅助与清洁用水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 记录设备清洁和辅助用途实际供应水量及水源。网箱自然接触水体不视作计量取水。 流属性/单位: 体积 / m3; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_growout`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_growout_water 单位：m3 基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_growout`; `cod-accounting-method` |
| `collect_growout_services` | `cod_growout`; 输入; 产品流: 条件性养成共享资产与服务使用 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按本征服务单位逐项展开网箱、系泊、投喂系统、工作船或合同服务；小时仅适用于按时间计量的情形。记录资产编号、使用节点、时期、更换与独占负荷归属。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 服务时间 / h; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_growout`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_growout_services 单位：h 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_growout`; `cod-accounting-method` |
| `collect_growout_waste` | `cod_growout`; 输出; 废物流: 条件性养成收集废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按废物类别和接收处理方逐项记录实际收集死鱼、废弃饲料、报废网具及化学品容器。逃逸与未收集死亡保留在群体账中，除非有实际交换证据。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_growout`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_growout_waste 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_growout`; `cod-accounting-method` |
| `collect_growout_aquatic` | `cod_growout`; 输出; 基本流: 条件性养成物质向海水排放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项展开有证据的营养物质、粪便或饲料损失成分、药物残留或呼吸物质，声明化学身份、接收海水区室及元素或化合物基准。不得将整条损失鱼直接视作基本流，也不得重复计入整项废物及其成分。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_growout`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_growout_aquatic 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_growout`; `cod-accounting-method` |
| `collect_growout_air` | `cod_growout`; 输出; 基本流: 条件性其他养成空气污染物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项展开有报告的燃烧污染物种类、计量基准与接收空气介质；宽泛的氮氧化物、硫氧化物或颗粒物标签不能直接确定具体身份。排除本节点独立 fossil_co2 卡已计入的化石二氧化碳。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_growout; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_growout`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_growout_air 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_growout`; `cod-accounting-method` |
| `collect_harvest_fuel` | `cod_harvest`; 输入; 产品流: 收获直接化石燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 记录移出网箱作业实际工作船或发电机燃料及事件编号。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_harvest; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_harvest`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_harvest_fuel 单位：kg 基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_harvest`; `cod-accounting-method` |
| `collect_harvest_services` | `cod_harvest`; 输入; 产品流: 条件性收获资产与服务使用 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按本征单位展开实际提升、泵送、船只和合同收获服务，保留共同的共享资产账及交接归属。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 服务时间 / h; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_harvest; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_harvest`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_harvest_services 单位：h 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_harvest`; `cod-accounting-method` |
| `collect_harvest_waste` | `cod_harvest`; 输出; 废物流: 条件性收获收集废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项记录实际收集死鱼和废弃物料及去向；意外逃逸是账目事件，不自动视作废物交付。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_harvest; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_harvest`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_harvest_waste 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_harvest`; `cod-accounting-method` |
| `collect_harvest_releases` | `cod_harvest`; 输出; 基本流: 条件性收获物质排放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按接收介质和化学基准展开实际清洁径流成分及直接空气污染物。未计量整鱼损失不等于污染物质量。排除本节点独立 fossil_co2 卡已计入的化石二氧化碳。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_harvest; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_harvest`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_harvest_releases 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_harvest`; `cod-accounting-method` |
| `collect_sort_services` | `cod_sort`; 输入; 产品流: 条件性分选服务与耗材使用 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按本征单位展开各项实际分选服务，并单独计量其耗材；不得将独立交换隐藏在时间数量中。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 服务时间 / h; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_sort; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_sort`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_sort_services 单位：h 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`; `cod-accounting-method` |
| `collect_sort_secondary` | `cod_sort`; 输出; 产品流: 条件性独立有意活鳕产品输出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别展开降级但仍以活鱼出售的鱼、返回养成的鱼及其他有意去向；识别买方或接收网箱与交接。退回仍为库存转移，不默认视作共产品。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_sort; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_sort`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_sort_secondary 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`; `cod-accounting-method` |
| `collect_sort_waste` | `cod_sort`; 输出; 废物流: 送处理的拒收鳕及分选废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按处理去向记录实际弃置或死亡鱼；拒收鱼不能仅因有质量而成为有意产品。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_sort; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_sort`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_sort_waste 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`; `cod-accounting-method` |
| `collect_sort_direct_releases` | `cod_sort`; 输出; 基本流: 条件性分选直接物质排放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅按事件记录展开实际发生于分选节点的燃烧或其他直接排放。各物质须有独立化学身份、接收空气水土区室、元素或化合物及化石或生物源基准、数量方法和按本征单位独立审查的U_instance。排放留在分选节点；排除供应商综合负荷已含排放及任何单列排放，包括单独计入的化石二氧化碳。不预设排放或固定身份。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_sort; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_sort`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_sort_direct_releases 单位：kg 基准：每 1 kg 参考流；各实际物质须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`; `cod-accounting-method` |
| `collect_delivery_fuel` | `cod_live_delivery`; 输入; 产品流: 活鱼交付直接化石燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅在前景直接拥有其负荷时记录实际活鱼运输船推进及辅助燃料。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_delivery`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_delivery_fuel 单位：kg 基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_delivery`; `cod-accounting-method` |
| `collect_delivery_services` | `cod_live_delivery`; 输入; 产品流: 条件性活鱼运输船保活与物流服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按本征单位及路线展开实际供应商服务、设备、水处理和船舶运力使用。综合服务拥有其声明的燃料、电力、资本和直接排放；单独列入清单的组成项须从该服务负荷中排除。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 服务时间 / h; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_delivery`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_delivery_services 单位：h 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_delivery`; `cod-accounting-method` |
| `collect_delivery_returns` | `cod_live_delivery`; 输出; 产品流: 条件性接收退回活鱼或次级有意产品输出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按去向、验收和负荷处理展开实际活体拒收但保留的鱼或单独销售的鱼；不得将其计入验收参考质量。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_delivery`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_delivery_returns 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_delivery`; `cod-accounting-method` |
| `collect_delivery_waste` | `cod_live_delivery`; 输出; 废物流: 条件性活鱼交付收集废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按处理去向展开收集死鱼、废滤材及其他实际废物。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_delivery`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_delivery_waste 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_delivery`; `cod-accounting-method` |
| `collect_delivery_releases` | `cod_live_delivery`; 输出; 基本流: 条件性活鱼交付向接收水体排放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物种和接收区室展开实测或建模的营养、粪便、药物或清洁成分。载水返排体积与污染物质量分别记录，并区分取水背景与新增负荷。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_delivery`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_delivery_releases 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_delivery`; `cod-accounting-method` |
| `collect_delivery_air` | `cod_live_delivery`; 输出; 基本流: 条件性其他活鱼交付空气污染物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 依据适用发动机及燃料证据逐项展开实际直接污染物种类和空气区室。排除本节点独立 fossil_co2 卡已计入的化石二氧化碳。每个实际交换须有独立身份、属性本征单位及独立U_instance；所列单位仅为声明的情形。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 每 1 kg 参考流的实际归属数量；保留原始记录并采用 cp_delivery; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 由采集计算（`calculated_from_collection`）; 采集协议: `cp_delivery`; 来源: `cod-accounting-method` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：未解决的暂定筛选证据需求；未声明经验界限 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_delivery_air 单位：kg 基准：每 1 kg 参考流；每项实际交换须按自身本征单位独立审查U_instance 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_delivery`; `cod-accounting-method` |
| `transport_cargo_scope` | 任何适用的门前运输、返程与共享运输服务 | 按实际运输服务原生单位采集货载与距离；货载包括实际同行的水、冰与容器，不以净动物/鱼体参考质量替代。记录装载、空返与零产出期间的实际燃料/服务负担及其归属。完整运输服务与自有燃料、电力、资产和直接释放范围互斥；保留返程与复用容器责任。 | 实际货载、距离、行程、容器与供应商服务范围记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | cod_processor_receipt | 本参考拒绝野生来源养成幼鱼、其他物种路线或接收前屠宰鱼；要求全部限定信息及上游幼鱼覆盖。 | fao-cod-2010; cod-accounting-method |
| validate_measurement | all inventory rows | 验证统一1 kg验收活鱼净质量基准、本征单位换算、批次尾数样本、载水皮重扣除及节点专属采集链接。最终1..1仅为归一化恒等关系。 | cod-accounting-method |
| validate_outputs | cod_sort; cod_live_delivery | 列明每项等级去向、验收输出、独立有意次级产品、退回、拒收和废物及交接；核对转移，防止同一条鱼两次最终声明。 | cod-accounting-method |
| validate_mode_period | all inventory rows | 检查实际群体批次及重叠报告期、进出和清洁换批事件、分批收获、失败周期及期初期末负荷只结转一次。 | cod-accounting-method |
| validate_shared | growout_services; harvest_services; sort_services; delivery_services | 检查各命名资产服务使用节点及时期、因果驱动、总份额、有依据资产寿命更换及综合服务与直接组成项独占归属。 | cod-accounting-method |
| validate_environment | all elementary rows | 要求实际物质、接收介质及基准；区分直接化石碳与呼吸，避免废物成分或服务排放重复；自然海水接触和损失生物量不自动成为基本流或信用。 | cod-accounting-method |
| validate_ranges | all inventory rows | 独立解决U_instance后才能将范围作为经验验收限；数量证据或身份缺失仍是缺口，即使结构检查通过。 | cod-accounting-method |
| `validate_atomic_completion` | 所有适用采集义务与具体清单交换 | 必须逐一落实第8节每项适用采集义务的具体物理/化学交换及其独立数量、原生单位、组成/状态、范围依据或明确的不确定性证据、原始记录、归一化、实际去向/接收环境及兼容的核实 UUID。未落实任何适用项则最终数据包不完整且验证失败；未知不等于零。集合总量不得复制给各项，完整服务与自有燃料/电力/直接释放不得重复。内部转移不固定为最终1 kg。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 供应挪威孵化来源网箱养殖鳕鱼至加工方屠宰前活体接收的前景包及下游process/lifecyclemodel |
| allowed_use | 匹配物种、路线、活体完整状态、场门、地理及有记录时期质量假设 |
| excluded_use | 野生捕捞或野生幼鱼育肥；其他鳕形目；全陆基养成；屠宰去内脏切片冷冻鱼；未补充阶段的下游屠宰零售烹饪 |
| required_metadata | 参考限定信息；节点转移群体账；上游孵化育苗及投入覆盖；本征单位；分配；共享服务归属；时期资产；实际范围证据 |
| required_quality_disclosure | 覆盖及缺口；未解决身份范围；仪表样本因子不确定性；损失拒收；活体验收；时间地理适用性；上游排除项 |
| update_trigger | 路线、幼鱼来源、养殖饲料服务技术、活体场门、分配、资产、时期、来源因子或数据质量变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-cod-2010 | official_guidance | Håkon Otterå，FAO养殖水生物种资料 Gadus morhua，文本更新2010-11-26；https://www.fao.org/fishery/culturedspecies/gadus_morhua/en/en ；检索2026-10-12 | 孵化幼鱼、海水网箱及活鱼运输船送屠宰场的定性路线；无数字默认值 |
| norcod-sea-route | literature | Norcod，The Snow Cod，https://www.norcod.com/the-snow-cod ；检索2026-10-12；第一方企业路线资料 | 仅佐证孵化鱼苗至海水路线；不采用商业可持续性主张、时间规格饲料比例或药物默认值 |
| cod-accounting-method | method_factor | 本PCR第3–9节：声明的所选场门及前景核算计量方法 | 活鱼净质量归一化、条件交换范围解决、节点群体时期服务归属及明确分配；并非外部经验因子或实测范围 |
