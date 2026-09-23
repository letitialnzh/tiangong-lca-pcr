---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.hop-cones
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 啤酒花球果

## 1. 范围与适用性

本 PCR 覆盖多年生受管理啤酒花园从建园至声明农场门交付的完整球果。包括建园、作物管理、收获、球果分离、清理和分级。常规路线可止于合格湿鲜球果；仅当声明交付物为干燥完整球果且干燥由报告农场或纳入的前景经营者控制时，才纳入干燥。

管理对象为支撑系统上种植的雌性 *Humulus lupulus*。人工选择性采摘与机械整蔓收获是收获活动的替代实现，其拓扑、能源、收集物料和糠屑不同。数据集必须声明路线，不得在缺少实测权重时合并互斥作业。造粒、粉碎、萃取、酿造、商户储藏、下游包装和出门运输均排除。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.hop-cones |
| classification_refs | CPC 3.0:01659 Hop cones |
| covered_products | 农场门合格完整啤酒花球果，状态为湿鲜或路线声明的干燥完整球果 |
| excluded_products | 颗粒、粉末、萃取物、精油、酿造产品、繁殖植株、嫩芽、叶、蔓和根 |
| representative_product | 多年生受管理啤酒花园生产的可销售完整球果 |
| production_route | 多年生生产、收获、球果分离和分级；人工与机械收获作为声明的替代路线并存；干燥为条件过程 |
| market_state | 供即时使用的合格湿鲜球果，或仅在明确纳入干燥时的干燥完整球果 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 路线声明的农场门合格啤酒花球果 |
| How much | 净质量 1 kg |
| How well | 符合所报告验收规格的完整球果，不含叶、茎、糠屑和不合格球果 |
| How long or cycle | 在按有证据的生产寿命分摊建园和共享资产的模型内，一个声明的收获期 |
| reference_flow_link | 湿鲜路线取 `grading_handoff` 的合格净产出；干燥路线取 `conditional_drying` 的合格净产出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 湿鲜或干燥完整球果状态；水分或干物质基准及测试方法；品种；收获路线；收获日期或批次；地理位置；验收等级；农场门交付点；是否纳入干燥 |
| 绑定模式 | `fixed` |

所有限定信息均为必填。参考流是声明状态下的合格球果质量，不是田间作物、整蔓、收获机混合物、糠屑、不合格物或干物质。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分级后计量合格球果净质量；扣除容器皮重并排除叶、茎、糠屑和不合格物。 |
| `moisture_state` | 湿鲜和干燥路线 | 质量分数或干物质分数 | kg/kg 或 % | 记录取样与测试方法和时间；没有批次特定水分分数时不得换算状态。 |
| `area_period_conversion` | 园地清单 | 每占地面积和期间的质量或服务 | 声明单位/ha/year | 归一化至合格产出前，把每条记录关联至园地面积、作物年份和生命周期阶段。 |
| `drying_reconciliation` | 条件干燥 | 质量 | kg | 在同一批次基准下核算湿料投入、干燥合格产出、不合格物和移除水分。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 啤酒花建园入口处已整备农业土地，种植材料、基础设施、养分、水、植保产品和能源作为投入跨越边界 |
| starting_condition_role | 多年生啤酒花园前景系统起点 |
| product_classification_scope | CPC 3.0:01659 完整啤酒花球果 |
| recursive_input_rule | 外购同类球果作为独立上游产品投入，不得重新标记为自有农场生产；种植根茎或植株是种植材料而非球果参考流 |
| upstream_dataset_requirement | 对种植材料、基础设施材料、能源、水、养分和植保产品采用可追溯上游数据集，并在建模时解析为具体 UUID |
| disclosure | 园地位置和面积、建园年份、所代表阶段、品种、棚架和灌溉配置、收获路线、湿鲜/干燥交付、干燥所有权、报告期及排除的资本品 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_yard` | 园地生产 | 纳入建园、种植、棚架/支撑和灌溉基础设施、作物管理及田间排放；把各项关联至建园、生产、替换或终止期间。 | `cornell-hop-yard-2017`; `cordella-hop-lca-2026` |
| `boundary_harvest_separate` | 收获 | 独立建模收获，因为它从多年生生产中移出产物，且人工与机械路线形成不同收集状态和负荷。 | `uf-ifas-hop-harvest-2019` |
| `boundary_conditioning` | 分离与分级 | 纳入球果分离、叶和糠屑移除、分级及即时透气处置。 | `uf-ifas-hop-harvest-2019`; `penn-state-hop-production` |
| `boundary_wet_route` | 湿鲜路线 | 止于合格分级湿鲜球果；排除干燥、烘房资产和后续储藏。 | `penn-state-hop-production` |
| `boundary_dried_route` | 干燥路线 | 仅对明确声明、由前景控制的干燥完整球果交付纳入干燥；记录前状态、水分、能源、损失和后状态。 | `cornell-hop-yard-2017` |
| `boundary_rejects` | 分级与干燥 | 分开合格、降级、单次返工、不合格和糠屑状态，并记录每项去向。 | `penn-state-hop-production` |
| `boundary_downstream` | 所有路线 | 排除造粒、萃取、酿造、商户储藏、下游包装和出门运输。 | `penn-state-hop-production` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yard_production` | 啤酒花建园与多年生生产 | required | 所有路线 | 建立并管理雌性啤酒花植株，将成熟含球果作物交付收获 | 占地公顷和作物年份，与归属窗口内合格产出核对 |
| `harvest_capture` | 收获与捕集 | required | 所有路线 | 移出球果或含球果整蔓并形成按批次索引的收集状态 | 各批次或收获期的收获投入与收集混合物 |
| `grading_handoff` | 球果分离、清理、分级和湿鲜交付 | required | 所有路线 | 分离球果并分类合格、降级、返工、不合格和糠屑状态 | 批次质量平衡 |
| `conditional_drying` | 完整球果干燥与稳定化 | conditional | 仅干燥完整球果交付 | 稳定合格湿鲜球果并交付干燥完整球果 | 批次湿料、能源、移除水分和干燥产出 |

### 过程：啤酒花建园与多年生生产（`yard_production`）

该季节性过程按园地和作物年份索引。建园、未成熟、生产、替换和终止阶段保持可区分。

#### 输入

##### 产品流

###### 种植与共享园地基础设施（`establishment_infrastructure`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：雌性啤酒花种植材料、棚架杆、钢丝、锚、绳和灌溉资产
- 数量规则：记录每种具体材料、安装或替换年份、服务面积、使用节点和有证据的服务寿命；在其服务期间的合格产出中仅分摊一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明生产寿命情景内每 1 kg 路线声明的农场门合格啤酒花球果
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_yard_assets`
- 来源：`cornell-hop-yard-2017`; `cordella-hop-lca-2026`
- 数量范围：暂定归属建园材料校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg material/kg accepted hop cones
  - 基准：每 1 kg 合格产出仅归属一次的种植和基础设施材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分供应合并项（`agricultural_nutrient_supply`）

本过程所有矿质肥料、有机肥和含养分改良剂仅使用这一张卡。实际产品及养分分析仍分别采集。

- 选定流：啤酒花园使用的农业养分供应产品
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：记录每种实际产品质量、养分分析、日期、方式和处理面积，仅在本合并项汇总产品质量；每种实际产品解析为具体 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每占地公顷和作物年份，再归一化至同一归属期间的合格产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_inputs`
- 来源：`penn-state-hop-production`
- 数量范围：暂定养分产品总质量校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg product/ha/year
  - 基准：每占地公顷和作物年份所有养分产品的施用态质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：灌溉水
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按地块和日期计量或计算输送水量；降雨不是供应的产品流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每占地公顷和灌溉周，再归一化至作物年份合格产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yard_operations`
- 来源：`penn-state-hop-production`
- 数量范围：来源支持的每周灌溉背景范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：254
  - 上限：508
  - 单位：m3/ha/week
  - 基准：一个灌溉周内每公顷输送 1 至 2 英寸水
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`penn-state-hop-production`

###### 植保与冠层管理投入（`field_operations_inputs`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：场址报告的植保与冠层管理产品
- 数量规则：记录每种具体材料、适用时的活性成分、浓度、数量、作业、地块和日期；最终交换生成前逐一解析产品投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每占地公顷和作物年份，再归一化至合格产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yard_operations`
- 来源：`cornell-hop-yard-2017`; `cordella-hop-lca-2026`
- 数量范围：暂定施用产品质量校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg product/ha/year
  - 基准：每占地公顷和作物年份分别识别的植保与冠层管理产品质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间能源供应（`field_energy`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。

- 选定流：建园、引蔓、修剪、喷施、灌溉和其他田间作业使用的能源载体与外购电力
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：记录实际载体、数量、设备或仪表、作业、地块和作物年份；每种载体解析为具体产品流 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每占地公顷和作物年份，再归一化至合格产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yard_operations`
- 来源：`cordella-hop-lca-2026`
- 数量范围：暂定田间能源校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：MJ/ha/year
  - 基准：每占地公顷和作物年份按低位热值计的载体能量及换算为 MJ 的外购电力
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 直接田间排放（`direct_field_emissions`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：由已记录田间投入造成的、按物质及环境介质明确的空气、水体和土壤排放
- 数量规则：采用声明方法和采集的施用、土壤、天气及管理字段计算每种物质和介质；不得绑定宽泛污染物名称。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每占地公顷和作物年份，再归一化至合格产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emissions`
- 数量范围：暂定按物质田间排放校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：kg substance/ha/year
  - 基准：每占地公顷和作物年份分别识别的各物质和环境介质
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 交付收获的成熟含球果作物（`mature_crop_handoff`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：收获接口处成熟含球果整蔓或选择性采摘球果
- 数量规则：按路线一致地计量收获湿物料，并关联园地、品种和批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 路线声明的农场门合格啤酒花球果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_balance`
- 来源：`uf-ifas-hop-harvest-2019`
- 数量范围：暂定作物交付比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：50
  - 单位：kg wet harvested material/kg accepted hop cones
  - 基准：每 1 kg 合格产出跨越收获接口的物料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 田间残余物和未收集损失（`field_residues_losses`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：留在田间或未收集的修剪物、叶、废蔓和球果
- 数量规则：分别记录每种状态和去向，并从合格产品中排除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 路线声明的农场门合格啤酒花球果
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_balance`
- 数量范围：暂定残余与损失校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg wet residue/kg accepted hop cones
  - 基准：每 1 kg 合格产出的已报告残余和损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：收获与捕集（`harvest_capture`）

田间人工采摘、室内人工采摘和机械剥离是按批次索引的替代实例。投入、产出、清洗和换型事件仅归属于实际实例一次。

#### 输入

##### 产品流

###### 收获能源与服务（`harvest_energy`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：用于切蔓、放蔓、场内移动、采摘或剥离批次的燃料、电力和承包设备服务
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：记录实际载体或服务、数量、机器、路线、批次及共享运行事件；解析每项具体投入 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 交付分离的物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_operations`
- 来源：`uf-ifas-hop-harvest-2019`
- 数量范围：暂定收获能源校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg collected material
  - 基准：所选收获实例每 kg 交付分离物料的能源
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收集的收获混合物（`collected_harvest_mixture`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：选择性采摘湿鲜球果或机械收集的球果、叶和茎混合物
- 数量规则：分离前称重并声明物理状态和收获路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 路线声明的农场门合格啤酒花球果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_balance`
- 来源：`uf-ifas-hop-harvest-2019`
- 数量范围：暂定收集混合物比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：30
  - 单位：kg wet mixture/kg accepted hop cones
  - 基准：每 1 kg 合格产出交付分离的收集物料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获损失和伴随物料（`harvest_losses`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：切蔓、放蔓、移动或采摘期间损失或在分离交付前移除的物料
- 数量规则：核对收获投入和收集产出，并记录去向或田间留存。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 收获投入
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_balance`
- 数量范围：暂定收获损失分数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg harvest input
  - 基准：损失和伴随物料质量除以收获投入质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：球果分离、清理、分级和湿鲜交付（`grading_handoff`）

进入物料为声明的收获产出。所有产出均归为合格湿鲜球果、有去向的降级球果、单次返工返回、不合格球果或送往声明路线的糠屑/残余物。

#### 输入

##### 产品流

###### 分离与分级能源（`separation_energy`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：采摘、筛分、气流分离、输送、清理和分级使用的燃料与电力
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按批次记录实际载体和数量；启动、清洗和换型仅归属运行一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 分离投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_batch`
- 来源：`uf-ifas-hop-harvest-2019`
- 数量范围：暂定分离能源校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg separation input
  - 基准：每 kg 进入物料的分离和分级运行能源
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格湿鲜啤酒花球果（`accepted_wet_cones`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：分级后称量合格湿鲜球果净质量；湿鲜路线以此为参考产出，干燥路线以此为干燥投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格湿鲜啤酒花球果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_batch`
- 来源：`penn-state-hop-production`
- 数量范围：参考产出恒等
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg accepted wet hop cones
  - 基准：仅湿鲜参考路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 降级或可返工球果（`downgraded_cones`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：有已记录降级、回收或单次返工去向的规格外完整球果
- 数量规则：按处置称量；把返工关联至产生批次，成功再分级前不得计为合格。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 分离投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_batch`
- 数量范围：暂定降级与返工分数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg separation input
  - 基准：降级或可返工球果质量除以分离投入质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 糠屑与不合格球果（`chaff_rejects`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：分级后分离的叶、茎、糠屑和不合格球果
- 数量规则：分别称量糠屑和不合格球果并记录还田、回收、处理或处置去向；全部从合格产出排除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 分离投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_batch`
- 来源：`penn-state-hop-production`
- 数量范围：暂定糠屑与不合格分数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.95
  - 单位：kg/kg separation input
  - 基准：糠屑和不合格球果合计质量除以分离投入质量，同时仍分别记录组成
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：完整球果干燥与稳定化（`conditional_drying`）

湿鲜路线不启用该节点。其可用投入是合格湿鲜球果，稳定化交付物是合格干燥完整球果。能源、清洗和共享干燥机负荷仅归属实际批次或服务期一次。

#### 输入

##### 产品流

###### 供干燥的合格湿鲜球果（`wet_cones_for_drying`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：称量投入，并在干燥前立即测试批次水分或干物质。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 初始球果干物质
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 来源：`cornell-hop-yard-2017`
- 数量范围：来源支持的干燥前湿质量比例
  - 范围角色：典型范围（`typical_range`）
  - 下限：3.85
  - 上限：5
  - 单位：kg wet cones/kg initial cone dry matter
  - 基准：干燥前球果干物质为 20 至 26%
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`cornell-hop-yard-2017`

###### 干燥能源供应（`drying_energy`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：热源、风机、装卸和批次清洗使用的实际燃料与电力
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：按批次记录每种载体和数量；通过计量或已记录产能时间仅归属一次共享干燥服务。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格干燥完整啤酒花球果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 来源：`cornell-hop-yard-2017`
- 数量范围：暂定干燥能源校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：50
  - 单位：MJ/kg accepted dried whole cones
  - 基准：每 kg 合格干燥产出的全部批次干燥能源
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格干燥完整啤酒花球果（`accepted_dried_cones`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：在声明水分下称量干燥与最终分级后的合格完整球果；仅在干燥路线中作为参考产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格干燥完整啤酒花球果
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 来源：`cornell-hop-yard-2017`
- 数量范围：参考产出恒等
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg accepted dried whole cones
  - 基准：仅干燥参考路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 干燥不合格物（`drying_rejects`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：干燥后不合格且有声明去向的球果或碎片
- 数量规则：按批次称量并从合格产出排除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 进入干燥的湿鲜球果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 数量范围：暂定干燥不合格分数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg wet cones entering drying
  - 基准：干燥不合格质量除以湿料投入质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥移除水分（`drying_water_to_air`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：干燥期间由球果水分形成的空气排水
- 数量规则：湿料投入水分减去合格干燥球果及不合格物中保留水分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 进入干燥的湿鲜球果
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch`
- 来源：`mass-balance-identity`; `cornell-hop-yard-2017`
- 数量范围：物理水分损失分数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg water/kg wet cones entering drying
  - 基准：移除水分除以湿料投入质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_no_co_product_default` | 生产 | 合格球果是唯一参考产品。残余物、糠屑、不合格物和田间损失不获得避免负荷，除非有记录的有价产出要求经论证的分配。 |  |
| `allocation_productive_life` | 多年生阶段 | 在声明情景内汇总建园、未成熟、生产、替换和终止记录，并除以同期合格产出；不得重复分摊建园。 | `cordella-hop-lca-2026` |
| `allocation_shared_infrastructure` | 共享资产 | 把棚架、灌溉、收获和干燥资产关联至所有使用节点和服务期；按服务面积时间、实测使用或产能时间仅归属一次。 | `cordella-hop-lca-2026` |
| `allocation_batches` | 收获、分级与干燥 | 直接记录归入实际批次；启动、清洗和换型按实测使用、处理质量或产能时间仅分配一次。 |  |
| `allocation_rework_rejects` | 规格外状态 | 保留至产生节点的负荷。单次返工仅增加返工负荷且不是第二份合格产出；边界退出及抵扣均需去向和方法。 |  |
| `allocation_route_exclusivity` | 湿鲜与干燥路线 | 每数据集选择一个参考路线。湿鲜路线排除干燥；干燥路线仅一次纳入湿鲜球果链和干燥。 | `penn-state-hop-production` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yard_assets` | `yard_production` | 建园、种植和共享资产 | 发票、地图、材料表和替换日志 | yard_id; area; phase; cultivar; material_uuid; count; mass; installation_year; replacement_year; service_area; consuming_nodes; service_life | 关联至地图地块的实物清单 | count; kg; ha; year | 每次安装或替换 | 完整声明情景 | 资产和服务地块 | 在服务面积和期间仅归属一次 | 有日期的发票、图纸、日志和照片 |
| `cp_nutrient_inputs` | `yard_production` | 所有养分产品 | 采购和施用记录 | product_uuid; name; product_mass; nutrient_analysis; dry_matter; date; block; method; treated_area | 合并前分别采集每种产品 | kg product; kg nutrient; ha | 每次施用 | 每个代表年份 | 处理地块 | 按产品和年份汇总并保留分析 | 发票、标签和校准施用日志 |
| `cp_yard_operations` | `yard_production` | 水、植保、冠层投入和田间能源 | 仪表、施用、燃料和作业日志 | date; block; input_uuid; active_ingredient; quantity; unit; water_volume; equipment; operation; runtime | 仪表或校准施用记录 | m3; kg; L; kWh; MJ; h | 每次作业 | 每个代表年份 | 地块和设备 | 按具体投入和年份汇总，不合并不同单位 | 校准、发票和日志 |
| `cp_field_emissions` | `yard_production` | 直接排放 | 计算输入 | input identity; nutrient or active amount; soil; weather; irrigation; incorporation; method; compartment | 应用声明的物质特定方法 | kg substance/ha/year | 每次施用及年度计算 | 每个代表年份 | 处理地块 | 按物质和介质计算 | 完整计算表和方法版本 |
| `cp_harvest_balance` | `yard_production`; `harvest_capture` | 交付、收集物、残余和损失 | 批次票和称重日志 | lot_id; yard_id; cultivar; route; input_mass; collected_mass; residue_mass; loss; destination; timestamps | 校准称重或有记录的核算 | kg wet mass | 每批次 | 每次收获 | 园地和批次 | 核对投入与唯一产出、残余和损失 | 校准和监管链 |
| `cp_harvest_operations` | `harvest_capture` | 能源、清洗和换型 | 燃料、仪表和机器日志 | lot_id; route; machine; carrier_uuid; quantity; runtime; event | 关联运行的仪表或载体领用记录 | L; kWh; MJ; h | 每次运行和事件 | 每次收获 | 机器和批次 | 共享事件仅归属一次 | 仪表和运行日志 |
| `cp_grading_batch` | `grading_handoff` | 所有等级状态和能源 | 批次、称重、分级和仪表记录 | lot_id; input_mass; accepted_mass; downgraded_mass; rework_mass; reject_mass; chaff_mass; destination; moisture; carrier_uuid; energy | 校准称重、去向编码和仪表记录 | kg; %; MJ | 每批次和返工 | 每次收获 | 批次和设备 | 核对所有唯一状态，不重复计算返回 | 校准、分级单和收据 |
| `cp_drying_batch` | `conditional_drying` | 湿料、水分、能源、干燥产出和水 | 批次单、称、含水测试和仪表 | batch_id; lot_id; wet_mass; initial_moisture; test_method; carrier_uuid; energy; temperature; duration; dried_mass; final_moisture; reject_mass | 按批次称量、取样水分和计量能源 | kg; %; MJ; °C; h | 每批次 | 每次干燥路线收获 | 批次和干燥机 | 闭合干物质和总质量，能源仅归属一次 | 校准和经验证水分记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_productive_life` | 建园和资产 | 汇总情景内各阶段归属负荷，并除以同面积、同期间累计合格质量。 | phase, asset, area, period and accepted-output records | burden/kg accepted cones | `cordella-hop-lca-2026` |
| `calc_route_yield` | 作物年份和路线 | 农场门合格质量除以占地面积，并报告状态和水分。 | accepted mass; area; state; moisture | kg/ha/year | `penn-state-hop-production` |
| `calc_grading_balance` | 收获和分级 | 投入减去唯一的合格、降级、不合格、糠屑和损失状态；返工返回是转移。 | all lot masses and state codes | closure mass and ratio | `mass-balance-identity` |
| `calc_drying_water` | 干燥 | 湿料投入×初始水分−合格干燥产出×最终水分−不合格质量×不合格水分。 | batch masses and moisture fractions | kg water to air | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 与固定 UUID 一并保留品种、状态、等级、水分、收获日期和交付。 | 批次规格 |
| `dq_temporal` | 多年生系统 | 覆盖声明建园和生产寿命情景，或识别外推年份及替换假设。 | 多年记录 |
| `dq_completeness` | 清单 | 纳入建园、养分、水、植保、田间能源、基础设施、排放、收获、不合格物和条件干燥。 | 过程/协议矩阵 |
| `dq_measurement` | 质量、水和能源 | 可用时使用校准仪器，并披露估算、取样和不确定性。 | 校准和计算 |
| `dq_route` | 替代路线 | 人工/机械收获及湿鲜/干燥交付保持分开，除非提供有证据的权重。 | 路线记录 |
| `dq_flow_resolution` | 投入与排放 | 实际产品投入解析为经验证 UUID；基本流保留物质和介质特异性。 | 解析记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求固定 Hop cones、Mass 和单位组 UUID、1 kg 合格产出及全部限定信息。 |  |
| `validate_route_exclusivity` | 路线 | 只允许一个湿鲜或干燥交付；湿鲜无干燥清单，干燥有一个关联干燥节点并声明父活动和路线差异。 | `penn-state-hop-production` |
| `validate_periods` | 多年期归属 | 要求阶段处理、累计产出、归属期间和证据，并拒绝重复归属。 | `cordella-hop-lca-2026` |
| `validate_shared_assets` | 共享基础设施 | 要求资产身份、使用节点和期间、服务边界、归属驱动及重复负荷检查。 |  |
| `validate_nutrient_cardinality` | 每个过程 | 至多允许一张产品投入养分卡；仅绑定无 group 的 `flow-set.agricultural-nutrient-supply` `0.3.0`，实际产品分别采集。 |  |
| `validate_batch_linkage` | 收获、分级与干燥 | 投入、产出、能源、清洗和换型均需批次 ID，并拒绝重复计算共享负荷。 |  |
| `validate_mass_balance` | 收获、分级与干燥 | 在披露不确定度内核对合格、降级、返工、不合格、糠屑、损失和水分状态。 | `mass-balance-identity` |
| `validate_reject_routing` | 规格外物料 | 每项降级、返工、回收或丢弃状态具有一个产生节点和下一状态；未解决不合格物不得进入合格产出。 |  |
| `validate_drying` | 干燥路线 | 要求初/终水分、测试方法、批次质量、能源和验收状态。20–26% 初始干物质和 8–10% 目标水分仅作 QA 背景，不是通用限值。 | `cornell-hop-yard-2017` |
| `validate_ranges` | 所有流卡 | 每卡恰好一个完整数量范围，且英文、中文和 structured 数值一致。 |  |
| `validate_exclusions` | 边界 | 拒绝造粒、萃取、酿造、商户储藏、下游包装和出门运输。 | `penn-state-hop-production` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 路线声明农场门啤酒花球果的前景生产数据集 |
| downstream_use | 匹配状态、地理、品种、时间和边界后用作二手或背景数据集 |
| allowed_use | 湿鲜或干燥完整球果农场门归因建模；仅与状态和多年期归属兼容的数据集比较 |
| excluded_use | 颗粒、萃取物、酿造产品、种植材料或需要已排除下游过程的系统 |
| required_metadata | PCR id/version；固定流 UUID；地理；园地面积和建园年；归属期；品种；收获路线；状态；水分方法/结果；等级；基础设施处理；年份和来源 |
| required_quality_disclosure | 前景覆盖、估算比例、缺失年份、生产寿命假设、UUID 解析、质量平衡闭合、校准、路线权重和推理估算 |
| update_trigger | 园地配置、品种、产量、养分或灌溉制度、收获技术、基础设施寿命、干燥、交付状态、规格或证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `uf-ifas-hop-harvest-2019` | extension_guidance | University of Florida IFAS Extension, Campbell and Pearson, *Harvest Techniques for Hops (Humulus lupulus)*, ENH1314/EP578, https://doi.org/10.32473/edis-ep578-219 | 多年生/棚架背景、收获路线、分离、伴随物料和即时处理 |
| `penn-state-hop-production` | extension_guidance | Penn State Extension, *Hop Production*, https://extension.psu.edu/hop-production | 湿鲜/干燥路线、灌溉、养分管理、成熟度及叶/糠屑移除 |
| `cornell-hop-yard-2017` | extension_guidance | Cornell Hops, Weldon, Gent and Gadoury, *Five considerations before ever planting your first hop*, November 2017, https://hops.cals.cornell.edu/grower-resources/five-considerations-before-ever-planting-your-first-hop/ | 永久园地、建园、共享设备、初始干物质及干燥终点背景 |
| `cordella-hop-lca-2026` | literature | Cordella et al., *Uncovering the environmental burden of hops: a spatially resolved agricultural LCA for modern beer supply chains*, International Journal of Life Cycle Assessment (2026), https://doi.org/10.1007/s11367-026-02651-y | 农场门过程覆盖、建园、棚架、田间作业、干燥和多年期归属 |
| `mass-balance-identity` | method_factor | 应用于批次记录的质量守恒恒等式 | 收获、分级与干燥核算及水分计算 |
