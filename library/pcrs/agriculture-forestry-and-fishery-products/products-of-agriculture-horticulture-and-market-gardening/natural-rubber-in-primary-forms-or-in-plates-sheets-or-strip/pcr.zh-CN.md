---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.natural-rubber-in-primary-forms-or-in-plates-sheets-or-strip
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 初级形态或板、片、带状天然橡胶

## 1. 范围与适用性

本 PCR 覆盖从受管理的橡胶树生产和割胶，到一条已声明的初级加工路线及其交接点的天然橡胶。允许的终端形态为浓缩胶乳、烟胶片或其他声明胶片等级、绉片胶，以及技术分类橡胶（TSR）或其他声明的块状/粒状初级形态。每个数据集只能选择一种终端形态和路线；不得把这些物理状态不同的产品平均成同一参考状态。排除合成橡胶、加入填料或硫化剂的混炼胶、硫化胶、再生胶和橡胶制成品。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.natural-rubber-in-primary-forms-or-in-plates-sheets-or-strip |
| classification_refs | CPC 3.0: 01950 Natural rubber in primary forms or in plates, sheets or strip |
| covered_products | 在初级加工交接点的已声明天然橡胶浓缩胶乳、RSS 或其他胶片等级、绉片胶、TSR/块状/粒状橡胶 |
| excluded_products | 合成橡胶；天然/合成橡胶混合物；混炼胶或硫化胶；再生胶；胶黏剂；轮胎、手套及其他制成品 |
| representative_product | 由一条可追溯路线生产的一种已声明商品天然橡胶形态 |
| production_route | 多年生橡胶树经营与割胶，随后只连接胶乳浓缩、胶片/RSS、绉片或 TSR/块胶加工中的一条路线 |
| market_state | 已声明的液态或干态初级形态、等级、干胶含量或收到态基准、保存状态和初级加工交接点 |

各替代路线在参考流层面互斥。不同路线清单只能作为分别定量的数据集共存于同一报告包；只有转换到相同物理形态、等级和质量基准后才可汇总，禁止建立通用混合形态参考产品。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在初级加工交接点满足所声明商品等级的一种天然橡胶初级形态 |
| How much | 按声明的干胶或收到态质量基准计 1 kg |
| How well | 声明路线、形态、等级、干胶含量或水分、保存剂/凝固剂状态、合格批状态和交接点 |
| How long or cycle | 覆盖种植园归属、割胶轮次以及产生参考量的加工批次或生产期的声明报告期 |
| reference_flow_link | 只能选择一个终端输出： `latex_concentrate_reference`, `sheet_rss_reference`, `crepe_reference`, or `tsr_block_reference` |

| 字段 | 值 |
| --- | --- |
| 参考量 | 1 kg |
| 参考产品流 | 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 天然橡胶树种或已知无性系；终端形态和路线；商品等级；液态/干态；干胶含量或水分基准；保存或凝固化学品；批次/生产期；地理；交接点 |
| 绑定 | `fixed` |

## 4. 测量与单位规则

| rule_id | 适用于 | 要求属性 | 要求单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明 1 kg 参考量是干胶质量还是收到态质量。没有记录干胶含量和明确换算时不得合并两种基准。 |
| `dry_rubber_conversion` | field latex, concentrate and wet coagulum | Mass and measured dry-rubber content | kg | 干胶质量 = 收到态质量 × 干胶质量分数；保留检测方法、取样时间和批次。 |
| `route_mass_balance` | every tapping and processing batch | Mass | kg | 在同一基准上核对合格橡胶、水、移除的乳清或水分、次级橡胶、保留返工料和损失。 |
| `period_attribution` | establishment and productive years | Mass | kg | 将建园、未投产年份、补植和终止负担在声明生产期的合格产出上仅归属一次。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明无性系/树种、树龄或生产阶段、建园结转负担和土地管理历史的受管理橡胶林 |
| starting_condition_role | 多年生生物生产存量；建园和补植负担被纳入或链接，并在生产期归属 |
| product_classification_scope | 初级加工交接点的一种已声明浓缩胶乳、胶片/RSS、绉片或 TSR/块胶形态天然橡胶 |
| recursive_input_rule | 内部转移的田间胶乳、凝块或次级胶保留上游负担，不得表示为零负担回路；外购同类别材料需要兼容上游数据集 |
| upstream_dataset_requirement | 外购养分、水、能源、化学品、包装和运输服务需要兼容上游数据集；Flow Set 根据前景记录展开为经核实 UUID |
| disclosure | 声明种植园阶段、割胶制度和轮次、路线、终端形态、等级、干胶/水分基准、化学品、能源来源、批次/生产期、拒收/返工去向和交接点 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_plantation` | `plantation_management` | 纳入受管理树木建园归属、维护、养分和供水、能源、病虫草管理及生产性胶乳形成。 | `fao-rubber-products-classification` |
| `boundary_tapping` | `latex_tapping_collection` | 纳入割胶、胶杯收集、采用时的田间保存、收集损失以及实测田间胶乳向初级加工的交付。 | `rubber-board-natural-rubber-forms` |
| `boundary_single_route` | 终端加工 | 参考产品只纳入一条终端路线；其他路线节点不活动且负担为零。 | `rubber-board-natural-rubber-forms` |
| `boundary_latex_concentrate` | `latex_concentration` | 纳入保存、分离/浓缩、稳定、储存和合格浓缩胶乳交接；不纳入下游混炼或制品制造。 | `rubber-board-natural-rubber-forms` |
| `boundary_sheet_rss` | `sheet_rss_processing` | 纳入过滤、受控凝固、压片/成型、干燥或烟熏、分级和胶片交接。 | `rubber-board-natural-rubber-forms` |
| `boundary_crepe` | `crepe_processing` | 纳入凝块制备、洗涤、反复辊炼/绉片、干燥、分级和绉片交接。 | `rubber-board-natural-rubber-forms` |
| `boundary_tsr_block` | `tsr_block_processing` | 纳入原料分选、破碎、洗涤、干燥、压块/块状成型、分级和块胶交接。 | `rubber-board-natural-rubber-forms` |
| `boundary_exclusions` | downstream system | 排除合成聚合物制造、天然/合成橡胶混配、混炼、硫化、制成品加工以及使用/生命末期。 | `fao-rubber-products-classification` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `plantation_management` | 多年生橡胶树经营生产 | `required` | 始终；声明任何替代技术或生物生产路线差异 | 受管理生物生产和跨期归属 | 收集田间胶乳中的 kg 干胶 |
| `latex_tapping_collection` | 胶乳割采、保存与收集 | `required` | 始终；按批次模式记录割胶轮次 | 收获/采集与初级调理 | 交付加工田间胶乳中的 kg 干胶 |
| `latex_concentration` | 胶乳浓缩与稳定 | `conditional` | 批次模式；仅浓缩胶乳参考形态 | 材料处理与稳定 | 1 kg 声明浓缩胶乳 |
| `sheet_rss_processing` | 胶片成型、干燥或烟熏与分级 | `conditional` | 批次模式；仅 RSS 或其他声明胶片参考形态 | 凝固、成型、保存与分级 | 1 kg 合格胶片/RSS |
| `crepe_processing` | 绉片制备、辊炼、干燥与分级 | `conditional` | 批次模式；仅绉片参考形态 | 处理、成型与分级 | 1 kg 合格绉片胶 |
| `tsr_block_processing` | TSR/块胶制备、干燥、压块与分级 | `conditional` | 批次模式；仅 TSR/块状/粒状参考形态 | 处理、成型与分级 | 1 kg 合格 TSR/块胶 |

### 过程：多年生橡胶树经营生产 (`plantation_management`)

#### 输入

##### 产品流

###### 合并肥料与养分供应 (`plantation_nutrients`)

本过程内所有矿质肥料、有机肥和养分改良剂仅记录在这一张过程级卡中；前景记录保留具体产品和养分组成。

- 选定流： 实际肥料和养分产品
- 流属性/单位： 质量/kg or compatible nutrient property/unit
- 绑定： `parameterized`
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set 版本： `0.3.0`
- 数量规则： 归属到生产期的实测数量
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 kg 干胶 delivered in field latex
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_plantation_period`
- 数量范围： 暂定养分投入筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1
  - 单位： kg product/kg dry rubber
  - 基准： 归属到每 kg 干胶的肥料和改良剂产品总量
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 种植园供水 (`plantation_water`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际供水产品
- 流属性/单位： 体积/m3 or 质量/kg
- 绑定： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- 数量规则： 实测供应的灌溉或育苗用水；降雨不是产品投入
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 kg 干胶 delivered in field latex
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_plantation_period`
- 数量范围： 暂定供水筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10
  - 单位： m3/kg dry rubber
  - 基准： 仅供应水
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 种植园能源供应 (`plantation_energy`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际能源载体和公用工程
- 流属性/单位： Carrier-appropriate energy or mass unit
- 绑定： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： 归属到种植园作业的计量或发票能源
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 kg 干胶 delivered in field latex
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_plantation_period`
- 数量范围： 暂定能源筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 20
  - 单位： MJ/kg dry rubber
  - 基准： 归属到种植园作业的外购能源
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不预设通用废物身份。只有当前景记录确定材料、状态、目的地和处理路线时，才增加单独识别的废物交换。

##### 基本流

仅依据具有接收环境舱和经核实 UUID 的场址实测或模型记录，增加物质特定的土地占用/转化、水资源和直接排放交换。

#### 输出

##### 产品流

###### 可割胶乳中的干胶 (`plantation_latex_output`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 绑定： `fixed`
- 数量规则： 由胶乳质量和检测干胶含量计算
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 过程输出
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_latex_batches`
- 数量范围： 输出身份范围
  - 范围角色： `allowed_range`
  - 下限： 1
  - 上限： 1
  - 单位： kg dry rubber
  - 基准： 每 kg 干胶 过程输出
  - 基准类型： `process_output`
  - 证据类型： `method_formula`
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

### 过程：胶乳割采、保存与收集 (`latex_tapping_collection`)

#### 输入

##### 产品流

###### 种植园胶乳转移 (`field_latex_input`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 绑定： `fixed`
- 数量规则： 来自种植园生产、携带负担的内部转移
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 kg 干胶 delivered to primary processing
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_latex_batches`
- 数量范围： 内部转移核对范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1.2
  - 单位： kg dry rubber/kg delivered dry rubber
  - 基准： 记录收集损失前的已收集干胶
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 田间胶乳保存用氨水 (`field_latex_ammonia`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024`
- 流属性/单位： 质量/kg 溶液
- 绑定： `fixed`
- 数量规则： 实测溶液质量和浓度；声明路线不使用氨时为零
- 数值来源模式： `foreground_record`
- 适用范围： `route_specific`
- 归一化基准： 每 kg 干胶 delivered to primary processing
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_latex_batches`
- 数量范围： 暂定保存剂筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.1
  - 单位： kg solution/kg dry rubber
  - 基准： 仅在使用氨水时适用
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 胶乳收集运输服务 (`latex_collection_transport`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际运输服务
- 流属性/单位： Transport work / tkm or compatible service unit
- 绑定： `parameterized`
- Flow Set： `flow-set.transport-service`
- Flow Set 版本： `0.2.0`
- 数量规则： 湿胶乳质量 × 按运输方式实测的路线距离
- 数值来源模式： `calculated_value`
- 适用范围： `route_specific`
- 归一化基准： 每 kg 干胶 delivered
- 基准类型： `transport_service`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_latex_batches`
- 数量范围： 暂定收集距离筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 2
  - 单位： tkm/kg dry rubber
  - 基准： 按干胶归一化的湿胶乳运输功
  - 基准类型： `transport_service`
  - 证据类型： `reasoned_estimate`

##### 废物流

不预设通用废物身份；拒收凝块要么作为携带负担的投入保留到已声明干胶路线，要么按实际去向记录。

##### 基本流

不预设通用基本流输入。

#### 输出

##### 产品流

###### 交付加工的已收集田间胶乳 (`collected_field_latex`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 绑定： `fixed`
- 数量规则： 湿胶乳质量 × 批次干胶质量分数
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 kg 干胶 delivered
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_latex_batches`
- 数量范围： 干胶转移恒等范围
  - 范围角色： `allowed_range`
  - 下限： 1
  - 上限： 1
  - 单位： kg dry rubber
  - 基准： 每 kg 干胶 delivered to the selected terminal route
  - 基准类型： `process_output`
  - 证据类型： `method_formula`
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

### 过程：胶乳浓缩与稳定 (`latex_concentration`)

#### 输入

##### 产品流

###### 浓缩用田间胶乳 (`latex_concentrate_feed`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 绑定： `fixed`
- 数量规则： 合格田间胶乳中携带负担的干胶质量
- 数值来源模式： `calculated_value`
- 适用范围： `route_specific`
- 归一化基准： 每 kg 干胶 in accepted concentrate
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定干胶收率筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1.15
  - 单位： kg feed dry rubber/kg accepted dry rubber
  - 基准： 不含乳清水质量
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 浓缩胶乳稳定用氨水 (`concentrate_ammonia`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024`
- 流属性/单位： 质量/kg 溶液
- 绑定： `fixed`
- 数量规则： 浓缩批次中实测的溶液质量和浓度
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： 每 kg 合格 concentrate on declared basis
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定稳定剂筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.1
  - 单位： kg solution/kg dry rubber
  - 基准： 必须保留实际溶液浓度
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 浓缩过程供水 (`concentrate_water`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际工艺用水产品
- 流属性/单位： 体积/m3
- 绑定： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- 数量规则： 跨越过程边界的计量用水
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 kg 合格 concentrate
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定工艺用水筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.1
  - 单位： m3/kg dry rubber
  - 基准： 供应的工艺用水
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 浓缩过程能源供应 (`concentrate_energy`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际能源载体和公用工程
- 流属性/单位： 与载体相适应的单位
- 绑定： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： 浓缩、泵送和储存的计量能源
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
- 归一化基准： 每 kg 合格 concentrate
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定能源筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 20
  - 单位： MJ/kg dry rubber
  - 基准： 外购能源总量
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不预设通用废物身份。乳清和废水在创建交换前必须有实测组成和实际处理去向。

##### 基本流

不预设通用基本流输入。

#### 输出

##### 产品流

###### 合格浓缩胶乳 (`latex_concentrate_reference`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg
- 绑定： `fixed`
- 数量规则： 恰好 1 kg accepted concentrate on the declared dry-rubber or as-received basis
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
- 归一化基准： 参考流
- 基准类型： `reference_flow`
- 证据类型： `method_formula`
- 来源： `reference-normalization-definition`
- 数量范围： 精确参考量
  - 范围角色： `allowed_range`
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： declared latex-concentrate reference basis
  - 基准类型： `reference_flow`
  - 证据类型： `method_formula`
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

### 过程：胶片成型、干燥或烟熏与分级 (`sheet_rss_processing`)

#### 输入

##### 产品流

###### 胶片生产用田间胶乳 (`sheet_latex_feed`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 绑定： `fixed`
- 数量规则： 进入凝固的田间胶乳干胶质量
- 数值来源模式： `calculated_value`
- 适用范围： `route_specific`
- 归一化基准： 每 kg 合格 dry sheet
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定干胶收率筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1.2
  - 单位： kg feed dry rubber/kg accepted sheet
  - 基准： 干胶质量平衡
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 甲酸凝固剂 (`sheet_formic_acid`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： Formic acid `b2fe4c3e-d4e6-40be-93ee-e47d512b8309`
- 流属性/单位： 质量/kg
- 绑定： `fixed`
- 数量规则： 实测酸产品质量和浓度；声明其他经核实凝固剂时为零
- 数值来源模式： `foreground_record`
- 适用范围： `route_specific`
- 归一化基准： 每 kg 合格 dry sheet
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定凝固剂筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.05
  - 单位： kg product/kg dry sheet
  - 基准： 必须保留实际酸浓度
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 胶片路线供水 (`sheet_water`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际工艺用水产品
- 流属性/单位： 体积/m3
- 绑定： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- 数量规则： 计量的稀释、洗涤和清洁用水
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 kg 合格 dry sheet
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定用水筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.2
  - 单位： m3/kg dry sheet
  - 基准： 供应的工艺用水
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 胶片干燥或烟熏能源 (`sheet_energy`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际能源载体和公用工程
- 流属性/单位： 与载体相适应的单位
- 绑定： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： 按声明风干、烟熏干燥或其他路线计量或计算的能源
- 数值来源模式： `calculated_value`
- 适用范围： `technology_specific`
- 归一化基准： 每 kg 合格 dry sheet
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定干燥能源筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 50
  - 单位： MJ/kg dry sheet
  - 基准： 用于干燥/烟熏的外购或自供能源
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不预设通用废物身份。凝固乳清、洗涤水和次级胶片需要实际身份和去向。

##### 基本流

不预设通用基本流输入。

#### 输出

##### 产品流

###### 合格胶片或 RSS (`sheet_rss_reference`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg
- 绑定： `fixed`
- 数量规则： 恰好 1 kg accepted sheet of the declared grade and moisture basis
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
- 归一化基准： 参考流
- 基准类型： `reference_flow`
- 证据类型： `method_formula`
- 来源： `reference-normalization-definition`
- 数量范围： 精确参考量
  - 范围角色： `allowed_range`
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： 声明的胶片/RSS 形态和等级
  - 基准类型： `reference_flow`
  - 证据类型： `method_formula`
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

### 过程：绉片制备、辊炼、干燥与分级 (`crepe_processing`)

#### 输入

##### 产品流

###### 绉片路线天然橡胶原料 (`crepe_feed`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 绑定： `fixed`
- 数量规则： 声明的胶乳或凝块原料中的干胶质量
- 数值来源模式： `calculated_value`
- 适用范围： `route_specific`
- 归一化基准： 每 kg 合格 dry crepe
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定原料收率筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1.25
  - 单位： kg feed dry rubber/kg accepted crepe
  - 基准： 干胶质量平衡
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 绉片路线供水 (`crepe_water`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际工艺用水产品
- 流属性/单位： 体积/m3
- 绑定： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- 数量规则： 计量的洗涤和辊炼用水
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 kg 合格 dry crepe
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定用水筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.5
  - 单位： m3/kg dry crepe
  - 基准： 供应的工艺用水
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### 绉片辊炼与干燥能源 (`crepe_energy`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际能源载体和公用工程
- 流属性/单位： 与载体相适应的单位
- 绑定： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： 辊炼和干燥的计量能源
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
- 归一化基准： 每 kg 合格 dry crepe
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定能源筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 50
  - 单位： MJ/kg dry crepe
  - 基准： 外购能源总量
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不预设通用废物身份。洗涤水、杂质和次级绉片需要实际身份和去向。

##### 基本流

不预设通用基本流输入。

#### 输出

##### 产品流

###### 合格绉片胶 (`crepe_reference`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg
- 绑定： `fixed`
- 数量规则： 恰好 1 kg accepted crepe rubber of declared grade and moisture basis
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
- 归一化基准： 参考流
- 基准类型： `reference_flow`
- 证据类型： `method_formula`
- 来源： `reference-normalization-definition`
- 数量范围： 精确参考量
  - 范围角色： `allowed_range`
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： 声明的绉片形态和等级
  - 基准类型： `reference_flow`
  - 证据类型： `method_formula`
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

### 过程：TSR/块胶制备、干燥、压块与分级 (`tsr_block_processing`)

#### 输入

##### 产品流

###### TSR/块胶路线天然橡胶原料 (`tsr_feed`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg 干胶
- 绑定： `fixed`
- 数量规则： 分别记录的胶乳、杯凝胶或凝块原料干胶质量
- 数值来源模式： `calculated_value`
- 适用范围： `route_specific`
- 归一化基准： 每 kg 合格 TSR/block rubber
- 基准类型： `process_output`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定原料收率筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1.3
  - 单位： kg feed dry rubber/kg accepted TSR
  - 基准： 干胶质量平衡
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### TSR 路线供水 (`tsr_water`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际工艺用水产品
- 流属性/单位： 体积/m3
- 绑定： `parameterized`
- Flow Set： `flow-set.water-use`
- Flow Set 版本： `0.2.0`
- 数量规则： 计量的原料洗涤和清洁用水
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 kg 合格 TSR/block rubber
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定用水筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.5
  - 单位： m3/kg dry rubber
  - 基准： 供应的工艺用水
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### TSR 破碎与干燥能源 (`tsr_energy`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际能源载体和公用工程
- 流属性/单位： 与载体相适应的单位
- 绑定： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set 版本： `0.2.0`
- 数量规则： 破碎、洗涤、干燥、压制和打包的计量能源
- 数值来源模式： `foreground_record`
- 适用范围： `technology_specific`
- 归一化基准： 每 kg 合格 TSR/block rubber
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定能源筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 50
  - 单位： MJ/kg dry rubber
  - 基准： 外购能源总量
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

###### TSR/块胶初级包装 (`tsr_packaging`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 实际包装产品
- 流属性/单位： 质量/kg or item count
- 绑定： `parameterized`
- Flow Set： `flow-set.packaging-function`
- Flow Set 版本： `0.2.0`
- 数量规则： 实测随合格块胶交付的包装；记录重复使用规则后，排除退回产品系统外的可重复使用包装
- 数值来源模式： `foreground_record`
- 适用范围： `product_specific`
- 归一化基准： 每 kg 合格 TSR/block rubber
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_processing_batch`
- 数量范围： 暂定包装筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 0.1
  - 单位： kg packaging/kg dry rubber
  - 基准： 跨越交接点的包装
  - 基准类型： `process_output`
  - 证据类型： `reasoned_estimate`

##### 废物流

不预设通用废物身份。洗涤水、杂质、次级块胶和包装废料需要实际身份和去向。

##### 基本流

不预设通用基本流输入。

#### 输出

##### 产品流

###### 合格 TSR/块胶 (`tsr_block_reference`)

当前景过程实际使用、产生或转移该项时，按声明路线、状态、批次和交接点记录。

- 选定流： 天然橡胶 `f9f06554-cdcb-422f-b7be-598fdd6cda53`
- 流属性/单位： 质量/kg
- 绑定： `fixed`
- 数量规则： 恰好 1 kg accepted TSR/block/granular rubber of declared grade and moisture basis
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
- 归一化基准： 参考流
- 基准类型： `reference_flow`
- 证据类型： `method_formula`
- 来源： `reference-normalization-definition`
- 数量范围： 精确参考量
  - 范围角色： `allowed_range`
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： 声明的 TSR/块胶形态和等级
  - 基准类型： `reference_flow`
  - 证据类型： `method_formula`
  - 来源： `reference-normalization-definition`

##### 废物流

不预设通用废物输出。

##### 基本流

不预设通用基本流输出。

## 7. 分配与共同产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_perennial_period` | plantation establishment and replacement | 将建园、未投产年份、补植和终止作业归属到声明生产期及合格干胶产出；披露寿命和产量基准并防止重复年化。 |  |
| `allocation_route_separation` | alternative terminal routes | 保持浓缩胶乳、胶片/RSS、绉片和 TSR/块胶清单分离。不得仅因同属 CPC 01950 而跨形态分配或平均。 | `rubber-board-natural-rubber-forms` |
| `allocation_internal_rubber` | 田间胶乳、凝块、次级料与返工料 | 所有内部橡胶转移均携带既有负担。返工料仅一次返回消费批次；降级销售橡胶作为单独定量产品，绝不计入合格参考输出。 |  |
| `allocation_serum_residues` | serum, wastewater and separated non-rubber material | 除非证据证明其为具有独立功能和可测数量的有意共同产品，否则按残余物或废物处理；使用任何分配驱动前必须记录。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_plantation_period` | `plantation_management` | perennial inputs and accepted latex output | farm log, invoice, asset and yield record | stand area; clone/species; phase; establishment inputs; nutrient products; supplied water; energy; replacements; dry-rubber output | reconcile farm records and calibrated meters/scales | native units and kg dry rubber | monthly and annual | complete declared productive period | each plantation and route | attribute period burdens once to dry-rubber output | record completeness, calibration and period reconciliation |
| `cp_latex_batches` | `latex_tapping_collection` | tapping, preservation, collection and latex transfer | tapping-round and batch log | date; plot; wet latex mass; dry-rubber test; preservative product/concentration; coagulum; loss; distance and mode | batch weighing, sampling and route log | kg, fraction, km, tkm | every tapping round/batch | all rounds supplying reported output | plot and collection route | aggregate dry-rubber mass without losing batch identity | scale/test calibration and signed transfer record |
| `cp_processing_batch` | conditional terminal route | feedstock, chemicals, water, energy, outputs and rejects | batch sheet, meter, invoice and laboratory certificate | route; feedstock state; wet/dry mass; DRC/moisture; chemicals/concentrations; water; energy; grade; accepted/rework/reject mass; packaging | direct measurement and batch mass balance | native units and kg | every batch/campaign | all batches producing reference output | each processing facility and technology | aggregate only identical terminal form, grade and basis | meter calibration, laboratory method and closed batch balance |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_rubber` | latex and wet coagulum | 干胶质量 = 收到态质量 × 干胶质量分数 | measured mass; representative DRC test | kg dry rubber | `reference-normalization-definition` |
| `calc_reference_normalization` | all inventory rows | 归一化数量 = 归属数量 ÷ 同基准合格参考产品质量 | attributed amount; accepted mass; basis conversion | amount 每 kg 参考流 | `reference-normalization-definition` |
| `calc_transport` | collection transport | tkm = 运输湿质量（t）× 实际距离（km）；再按合格参考质量归一化 | wet mass; distance; mode; accepted output | tkm/kg 参考流 |  |
| `calc_period_burden` | plantation multi-period inputs | 各阶段负担 × 归属份额求和 ÷ 对应生产期合格产出 | phase records; service life; output; attribution driver | burden/kg dry rubber |  |
| `calc_batch_balance` | each processing batch | 投入干胶 = 合格干胶 + 次级/返工干胶 + 实测干胶损失 | feed and output mass/DRC | reconciled batch balance |  |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考流 and every rubber transfer | Declare form, route, grade, basis, chemistry, gate and UUID compatibility; never substitute synthetic or compounded rubber. | product certificate, batch record and identity audit |
| `dq_route_completeness` | process map | 只能启用一条终端路线；未启用路线没有交换或负担。 | route declaration and process graph |
| `dq_mass_basis` | liquid and wet materials | 保留收到态质量、DRC/水分、检测方法和取样时间；换算必须可复现。 | laboratory certificate and calculation record |
| `dq_temporal` | plantation and processing | 覆盖建园归属、所有割胶轮次和对产出有贡献的每个加工批次。 | period and batch completeness report |
| `dq_mass_balance` | tapping and processing | 逐批核对橡胶质量；调查超过场址声明容差的差异。 | signed mass-balance record |
| `dq_binding` | all inventory cards | 前景生成时将参数化卡解析为经核实的具体 UUID；固定 UUID 保留详情读取证据并匹配角色/属性。 | Flow Set expansion record or detail audit |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | 要求天然橡胶 UUID、质量属性/单位组和所有必需限定信息；拒绝合成、混合、混炼、硫化、再生或制成品橡胶。 | `fao-rubber-products-classification` |
| `validate_one_terminal_form` | process map and reference link | 浓缩胶乳、胶片/RSS、绉片或 TSR/块胶终端节点中只能有一个供应参考流。 | `rubber-board-natural-rubber-forms` |
| `validate_basis_conversion` | wet and dry states | 合并或比较质量基准前，必须有实测 DRC/水分和明确换算。 | `reference-normalization-definition` |
| `validate_nutrient_cardinality` | plantation inputs | 该过程中最多存在一张肥料/养分产品投入卡；它只绑定无 group 的 set-level `flow-set.agricultural-nutrient-supply` 版本 `0.3.0`。 |  |
| `validate_fixed_bindings` | fixed cards | 天然橡胶、甲酸和氨水只使用经详情确认的 UUID 及兼容质量属性；不得从身份核实推导数量证据。 |  |
| `validate_rework_reject` | 次级或拒收橡胶 | 声明返工、降级/回收或废弃去向；保留返工料仅计一次，所有非合格橡胶均排除在参考输出外。 |  |
| `validate_period_attribution` | plantation burdens | 要求阶段、生产寿命、合格产量和归属证据；建园负担遗漏或重复均不通过。 |  |
| `validate_batch_balance` | each terminal route | 核对原料干胶与合格、返工/次级及损失干胶；保持批次和路线可追溯。 |  |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 初级加工交接点一种已声明天然橡胶初级形态的前景生产包 |
| downstream_use | `secondary_dataset`；经独立审查并匹配地理、时间、等级和技术后可作 `background_dataset` |
| allowed_use | 用于终端形态、等级、质量基准和交接点相匹配的 LCA 上游天然橡胶供应 |
| excluded_use | 通用混合形态；合成/混合/混炼/硫化/再生橡胶；橡胶制成品；未增加过程的下游转换 |
| required_metadata | 已知时的树种/无性系；种植园阶段；割胶制度；路线；形态；等级；DRC/水分；化学品；批次/生产期；地理；交接点；拒收/返工去向 |
| required_quality_disclosure | 路线和期间覆盖；质量基准换算；暂定范围；计量/检测质量；质量平衡闭合；Flow Set 展开；固定身份依据 |
| update_trigger | 产品形态、等级、质量基准、路线拓扑、保存/凝固技术、交接点、参考 UUID、Flow Set 版本或分类范围发生变化 |

## 11. 数据来源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `fao-rubber-products-classification` | `official_guidance` | Food and Agriculture Organization of the United Nations, rubber-products classification material, https://www.fao.org/4/x2613e/x2613e2w.htm | Category boundary including natural latex, sheets/crepes and technically specified primary forms; exclusion of downstream rubber products |
| `rubber-board-natural-rubber-forms` | `official_guidance` | Rubber Board, natural-rubber grades and forms guidance, https://www.rubberboard.gov.in/rbfilereader?fileid=1013 | Distinct latex concentrate, RSS, TSR and related market forms; route and grade declaration |
| `reference-normalization-definition` | `method_factor` | This PCR's 1 kg declared-form normalization, DRC conversion and rubber-mass balance | 参考量, exact-output ranges and calculation formulas |
