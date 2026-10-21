---
pcr_id: pcr.existing-hospital-negative-pressure-source-isolation-suite-envelope-services-retrofit-and-validation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有医院负压源隔离套间围护与设施改造及验证服务


## 1. 范围与适用性

本PCR覆盖既有医院一套源隔离负压套间围护及建筑设施完整改造：患者卧室、入口门厅及独立卫浴构成一次协同验收工程。调查邻接临床使用、保留能力约束及批准多专业范围。NHS HBN 04-01 Supplement 1（2025年7月公布、内部2024修订）支撑England实践与测试逻辑；各项目按实际本地标准与批准偏离执行。不设全类别ACH、Pa、寿命、测试消耗或杀菌率默认。

整座新建筑方法的起点不同，不能覆盖污染旧系统释放、隐藏围护首装测试与负压源套间验证链。风机安装、密封清洁是组成任务，不等同套间整体验收服务。保护正压、中性卧室PPVL、整病区、仅便携HEPA及后续临床使用不属本类。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-hospital-negative-pressure-source-isolation-suite-envelope-services-retrofit-and-validation-services |
| classification_refs | CPC 3.0 54129 (narrower) |
| covered_products | 既有医院卧室+门厅+卫浴源隔离负压围护设施改造及验证 |
| excluded_products | 新医院；整病区；保护正压；PPVL；仅便携HEPA；诊疗；日常运行年检 |
| representative_product | 已验收既有医院负压源隔离套间改造服务 |
| production_route | 释放拆除 → 围护设施及首装泄漏 → 可清洁饰面 → 最终调试验证 → 签收 |
| market_state | 既有医院套间经批准完成的现场工程 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整验收源隔离负压套间改造服务 |
| How much | 1 item |
| How well | 按批准实际设计、缺陷闭合并完成临床IPC后勤通风验证签收 |
| How long or cycle | 实际清场至最终验收，含返工重测及报告阶段；不假定运行寿命 |
| reference_flow_link | `accepted_suite` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| product_flow | 已验收既有医院负压源隔离套间改造服务 |
| flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | item |
| required_qualifiers | suite_id; retained_hospital_location; source_negative_mode; bedroom_lobby_ensuite_layout; suite_volume; retained_services; adjacent_occupancy; actual_design_standards; authorised_deviations; first_fix_test; final_test_convention; validation_independence; acceptance_scope; phase_period |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| suite_count | accepted_suite | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N>0唯一完整验收套间；每套一次，不按房间床位患者日测试风机。每参考流输出1 item。 |
| native_state | all inventory rows | 实际原生属性 | 实际原生单位 | 保留供应外退原生单位。独立质量换算需实际SKU密度状态水分温度单位、来源不确定性；不可与原生采购相加。气体体积须温压参考条件。能量时间须自身支持，不以数量或热值替代。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具名既有医院套间、勘察状态与安全临床设施释放 |
| starting_condition_role | 既有资产背景；归属实际改造资源 |
| product_classification_scope | CPC 3.0 54129 narrower |
| recursive_input_rule | 同类分包按完整物理服务及覆盖范围记录；展开缺失活动，不重复购入内部材料或验收输出。 |
| upstream_dataset_requirement | 实际具体投入承包身份及完整供应运输资产覆盖，否则明确缺口阻断最终数据 |
| disclosure | 保留更换表、临床围挡、实际设计偏离、范围归属、阶段测试验证签收 |


### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| actual_state_exits | all processes | 最终数据还必须按实际状态展开：可用历史拆出物以单独Product出口按原生单位记录，保留historical_receiver、historical_transfer及质量接收，不与新供可用外退合并，不作负新购；以体积计量的收集废液须独立Waste交换，保留容积单位及接收人；实际直接取水或向环境排水须独立Elementary输入/输出，保留实际来源接收介质容积状态与去向，不藏入Mass卡。以质量计的废物及物种卡仅覆盖对应质量账本，物理流体与其组成物种为非加和视图。 |  |
| power_boundary | clearance_electricity; envelope_services_electricity; finishing_electricity; validation_electricity | 按唯一事件责任方分别记录总输入、总外送电力、实际来源及保留现场发电、施工测试循环和损失，不以外送或未来运行节约净扣输入。实际外送必须实例化独立实测产品输出并记录接收方；实际发电须将其燃料、资产、释放及完整供应商覆盖计入一次。 |  |
| scope_start | all processes | 从勘察的既有医院套间、邻接在用临床区及保留系统状态开始；临床/IPC负责腾空、去污释放及围挡批准，后勤负责旧气水电通风隔离安全交接。纳入实际临床连续性与围挡资源；历史建筑既不新购也不负抵扣。 | nhs-isolation-hbn0401-supp1-2025 |
| sequence_gate | envelope_services; finishing; validation | 板到板、外墙、贯穿孔、门窗及设施永久密封须在吊顶饰面盖板遮蔽前首装测试；修复复测后才交饰面。完整安装后再最终泄漏与调试验证；采用NHS程序时密封施工方不得自验泄漏。 | nhs-isolation-hbn0401-supp1-2025 |
| negative_gate | validation | 仅用批准源隔离负压设计：卧室相对门厅走廊负压、卫浴相对卧室负压，并记录实际门厅策略、气流方向、稳定器稳态响应、风机故障信号、仪表、压差监测报警及水消防接口检查。记录实际适用设计标准与授权偏离；NHS England推荐、示例ACH/Pa及耐火等级不作通用默认。 | nhs-isolation-hbn0401-supp1-2025 |
| complete_resources | all processes | 直接及承包租赁的人工支持材料、临供接驳、出行货运、测试清洁、备件重做及共享资产生命周期负荷均实际归属一次。承包行须有实际完成物理结果、原生数量和完整上游范围；缺失覆盖含未披露场外工作会阻断最终数据。 |  |
| expand_actual | all processes | 最终数据前必须将集合卡展开为具体SKU/承包商/物种交换。供应和匹配可用外退保留数量面积长度体积质量原生单位。燃料、直接取水及实际直接水气排放须有独立计量交换、状态介质，不得藏在服务或废物卡。不得假设病原体千克、VOC比例、制冷剂损失、放空气或废水去向。 |  |
| scope_end | all processes | 以缺陷闭合、项目要求独立胜任验证及完整工程签收结束，记录实际VSG/授权工程师和医院临床IPC后勤职责。排除新整院、整病区、保护正压/PPVL、仅便携HEPA、诊疗设备及后续护理维护年检；不承诺感染预防或患者结局。 | nhs-isolation-hbn0401-supp1-2025 |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际工序消耗品及更换材料 (`clearance_consumables`)

过程／待建立交换的方向／类型：`clearance` / `inputs` / `product`.

按实际SKU展开本节点耗材、PPE、袋、密封件、测试材料与备件；非质量供货另建原生单位交换。

- 采集对象：实际工序消耗品及更换材料
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_clearance
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clearance`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按本节点实际耗材、防护用品、密封、测试或备件SKU采集原生供货量、皮重、期初期末、匹配可用外退、失败施工耗用及测量不确定性；不设每套间默认耗材量。

#### 采集要求：实际承包商服务与共享临时资产 (`clearance_provider_assets`)

过程／待建立交换的方向／类型：`clearance` / `inputs` / `product`.

展开实际承包商完成的物理结果，以及临床连续性、围挡通行、测试租赁资产。各原生数量匹配完整上游范围；费用或工时不能换成已完成服务数量。

- 采集对象：实际承包商服务与共享临时资产
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：实际归属数量 / N；原始操作数保留于cp_clearance
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clearance`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：逐实际供应商已完成成果记录原生服务数量、门槛及上游覆盖；共享资产记录选定的整资产或完整生命周期服务视图、兼容项目与全部消费者全寿命驱动量、观察历史及剩余更换终止报废来源、不确定性、敏感性与更新。不以费用或工时换计件，也不假定寿命。

#### 采集要求：实际归属货运服务 (`clearance_freight`)

过程／待建立交换的方向／类型：`clearance` / `inputs` / `product`.

记录本节点拥有的供货、拆出物与设备运输实际载荷及路线；以明确完整承运范围纳入空返，防止服务包货运重复。

- 采集对象：实际归属货运服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：实际归属数量 / N；原始操作数保留于cp_clearance
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clearance`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：逐实际运输段采集实载质量及单位、实载路线距离及单位、有因果依据的共载归属、空返活动和承运商上游覆盖及称重距离不确定性。空载段须有服务或车辆活动证据，不虚构正货重；不设默认运距。

#### 采集要求：实际向外退还可用余料 (`clearance_usable_returns`)

过程／待建立交换的方向／类型：`clearance` / `outputs` / `product`.

仅纳入与SKU、状态和原收货匹配的实际可用外退，保持供应原生单位；期末结存不算外退。

- 采集对象：实际向外退还可用余料
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：实际归属数量 / N；原始操作数保留于cp_clearance
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clearance`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按匹配供货SKU及原生单位记录真实外退数量、接收方验收和可用状态，并声明总投入带出口或净消耗口径。期末库存和历史拆下可用品分属其他记录；不设通用退回率或抵扣。

#### 采集要求：实际收集并交付处理的废物 (`clearance_contained_waste`)

过程／待建立交换的方向／类型：`clearance` / `outputs` / `waste`.

按材料、污染危害状态及实际接收处理展开计量废物；包装、拆出的历史构件和用过的滤材/PPE与新材料损耗分开；收集废液按实际原生体积计量。

- 采集对象：实际收集并交付处理的废物
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_clearance
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clearance`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：计量实际分类材料、污染及物态、扣皮废物量和接收处理运输覆盖，保留历史或新增来源。按原生体积交付的废液须独立计量为废物交换；不设默认废物率、回收率或强制质量换算。

#### 采集要求：向明确接收介质的实际物质排放 (`clearance_actual_releases`)

过程／待建立交换的方向／类型：`clearance` / `outputs` / `elementary`.

只展开实际测得物种与接收介质，或有效匹配活动及物种因子；实际有燃烧、涂装清洁、制冷剂或医气排放时纳入。感染风险不等于测得病原体排放；密闭废物不作基本流。

- 采集对象：向明确接收介质的实际物质排放
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_clearance
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clearance`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：须有实际事件、物质或粒径及接收介质和实测物种质量，或匹配活动量及有效因子单位来源，或实测整流体释放及有据成分去向与不确定性。捕集废物、整流体与物种审计视图分开；不得从感染风险推病原体量或采用默认泄漏排放因子。

#### 采集要求：实际工序消耗品及更换材料 (`envelope_services_consumables`)

过程／待建立交换的方向／类型：`envelope_services` / `inputs` / `product`.

按实际SKU展开本节点耗材、PPE、袋、密封件、测试材料与备件；非质量供货另建原生单位交换。

- 采集对象：实际工序消耗品及更换材料
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按本节点实际耗材、防护用品、密封、测试或备件SKU采集原生供货量、皮重、期初期末、匹配可用外退、失败施工耗用及测量不确定性；不设每套间默认耗材量。

#### 采集要求：施工与测试实际电力 (`envelope_services_electricity`)

过程／待建立交换的方向／类型：`envelope_services` / `inputs` / `product`.

计量本节点临时围挡、工具和重测电力；依已声明服务包覆盖范围将承包商用电纳入一次。

- 采集对象：施工与测试实际电力
- 流属性/单位：能量 / kWh
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：采集按来源分开的总输入、总外送表计，本节点实际测试复测及临时围挡用电、现场发电与供应商覆盖、归属驱动量及单位和表计不确定性；不用净账单或每套间默认kWh。

#### 采集要求：实际供应清洁或测试水 (`envelope_services_water`)

过程／待建立交换的方向／类型：`envelope_services` / `inputs` / `product`.

记录清洗、冲洗及重测计量供水；本行是产品供应，直接取水须另建实际来源/介质基本流输入。

- 采集对象：实际供应清洁或测试水
- 流属性/单位：体积 / m3
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按本节点事件采集实际供水来源品质、校准体积、保留及循环存水、受控送处理与环境直排去向和水平衡不确定性；供水量不能证明排水量。

#### 采集要求：实际承包商服务与共享临时资产 (`envelope_services_provider_assets`)

过程／待建立交换的方向／类型：`envelope_services` / `inputs` / `product`.

展开实际承包商完成的物理结果，以及临床连续性、围挡通行、测试租赁资产。各原生数量匹配完整上游范围；费用或工时不能换成已完成服务数量。

- 采集对象：实际承包商服务与共享临时资产
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：逐实际供应商已完成成果记录原生服务数量、门槛及上游覆盖；共享资产记录选定的整资产或完整生命周期服务视图、兼容项目与全部消费者全寿命驱动量、观察历史及剩余更换终止报废来源、不确定性、敏感性与更新。不以费用或工时换计件，也不假定寿命。

#### 采集要求：实际归属货运服务 (`envelope_services_freight`)

过程／待建立交换的方向／类型：`envelope_services` / `inputs` / `product`.

记录本节点拥有的供货、拆出物与设备运输实际载荷及路线；以明确完整承运范围纳入空返，防止服务包货运重复。

- 采集对象：实际归属货运服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：逐实际运输段采集实载质量及单位、实载路线距离及单位、有因果依据的共载归属、空返活动和承运商上游覆盖及称重距离不确定性。空载段须有服务或车辆活动证据，不虚构正货重；不设默认运距。

#### 采集要求：实际离散门、风机、控制与接口组件 (`component_count`)

过程／待建立交换的方向／类型：`envelope_services` / `inputs` / `product`.

记录安装组件实际SKU数量及完整上游制造；工厂整包内BOM不重复采购。

- 采集对象：实际离散门、风机、控制与接口组件
- 流属性/单位：物品数量 / item
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按实际套间组件明细及完整整包物料边界记录门、风机、控制和接口SKU件数、原生收货外退、损坏更换及计数不确定性；房间数或设备容量不能决定组件数量。

#### 采集要求：实际按面积供应的围护及风管板材 (`component_area`)

过程／待建立交换的方向／类型：`envelope_services` / `inputs` / `product`.

采用外部供应实际净面积与匹配可用外退，不将安装面积再算采购。

- 采集对象：实际按面积供应的围护及风管板材
- 流属性/单位：面积 / m2
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：计量实际独立供应围护或风管板材SKU的面积状态、尺寸、裁切搭接口径、库存外退废物及不确定性；安装表面积是独立活动视图，不是第二笔采购或套间数量。

#### 采集要求：实际按长度供应的风管管道电缆与密封材 (`component_length`)

过程／待建立交换的方向／类型：`envelope_services` / `inputs` / `product`.

记录实际SKU截面规格及供货长度；换算质量为独立非加和视图。

- 采集对象：实际按长度供应的风管管道电缆与密封材
- 流属性/单位：长度 / m
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按实际电缆、风管、管道或密封SKU截面等级记录原生收货外退长度、边角料、安装路线和测量不确定性；必要质量视图须有实际兼容密度尺寸且不可叠加。

#### 采集要求：安装调试实际供应医用气体 (`commissioning_medical_gas`)

过程／待建立交换的方向／类型：`envelope_services` / `inputs` / `product`.

仅实际工程含此项时记录物种纯度、供应数量及温压参考状态；计量放空气体另进物种排放，旧存气体不作新采购。

- 采集对象：安装调试实际供应医用气体
- 流属性/单位：体积 / m3
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：仅实际工程含此项时，记录气体物种纯度、新供与原存充注的区别、校准数量及参考温压和单位、实际保留退回放空去向与不确定性。不假定吹扫量、纯度、气体状态换算或全部供气放空。

#### 采集要求：实际向外退还可用余料 (`envelope_services_usable_returns`)

过程／待建立交换的方向／类型：`envelope_services` / `outputs` / `product`.

仅纳入与SKU、状态和原收货匹配的实际可用外退，保持供应原生单位；期末结存不算外退。

- 采集对象：实际向外退还可用余料
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按匹配供货SKU及原生单位记录真实外退数量、接收方验收和可用状态，并声明总投入带出口或净消耗口径。期末库存和历史拆下可用品分属其他记录；不设通用退回率或抵扣。

#### 采集要求：实际收集并交付处理的废物 (`envelope_services_contained_waste`)

过程／待建立交换的方向／类型：`envelope_services` / `outputs` / `waste`.

按材料、污染危害状态及实际接收处理展开计量废物；包装、拆出的历史构件和用过的滤材/PPE与新材料损耗分开；收集废液按实际原生体积计量。

- 采集对象：实际收集并交付处理的废物
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：计量实际分类材料、污染及物态、扣皮废物量和接收处理运输覆盖，保留历史或新增来源。按原生体积交付的废液须独立计量为废物交换；不设默认废物率、回收率或强制质量换算。

#### 采集要求：向明确接收介质的实际物质排放 (`envelope_services_actual_releases`)

过程／待建立交换的方向／类型：`envelope_services` / `outputs` / `elementary`.

只展开实际测得物种与接收介质，或有效匹配活动及物种因子；实际有燃烧、涂装清洁、制冷剂或医气排放时纳入。感染风险不等于测得病原体排放；密闭废物不作基本流。

- 采集对象：向明确接收介质的实际物质排放
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_envelope_services
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_envelope_services`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：须有实际事件、物质或粒径及接收介质和实测物种质量，或匹配活动量及有效因子单位来源，或实测整流体释放及有据成分去向与不确定性。捕集废物、整流体与物种审计视图分开；不得从感染风险推病原体量或采用默认泄漏排放因子。

#### 采集要求：实际工序消耗品及更换材料 (`finishing_consumables`)

过程／待建立交换的方向／类型：`finishing` / `inputs` / `product`.

按实际SKU展开本节点耗材、PPE、袋、密封件、测试材料与备件；非质量供货另建原生单位交换。

- 采集对象：实际工序消耗品及更换材料
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_finishing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按本节点实际耗材、防护用品、密封、测试或备件SKU采集原生供货量、皮重、期初期末、匹配可用外退、失败施工耗用及测量不确定性；不设每套间默认耗材量。

#### 采集要求：实际承包商服务与共享临时资产 (`finishing_provider_assets`)

过程／待建立交换的方向／类型：`finishing` / `inputs` / `product`.

展开实际承包商完成的物理结果，以及临床连续性、围挡通行、测试租赁资产。各原生数量匹配完整上游范围；费用或工时不能换成已完成服务数量。

- 采集对象：实际承包商服务与共享临时资产
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：实际归属数量 / N；原始操作数保留于cp_finishing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：逐实际供应商已完成成果记录原生服务数量、门槛及上游覆盖；共享资产记录选定的整资产或完整生命周期服务视图、兼容项目与全部消费者全寿命驱动量、观察历史及剩余更换终止报废来源、不确定性、敏感性与更新。不以费用或工时换计件，也不假定寿命。

#### 采集要求：实际归属货运服务 (`finishing_freight`)

过程／待建立交换的方向／类型：`finishing` / `inputs` / `product`.

记录本节点拥有的供货、拆出物与设备运输实际载荷及路线；以明确完整承运范围纳入空返，防止服务包货运重复。

- 采集对象：实际归属货运服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：实际归属数量 / N；原始操作数保留于cp_finishing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：逐实际运输段采集实载质量及单位、实载路线距离及单位、有因果依据的共载归属、空返活动和承运商上游覆盖及称重距离不确定性。空载段须有服务或车辆活动证据，不虚构正货重；不设默认运距。

#### 采集要求：实际向外退还可用余料 (`finishing_usable_returns`)

过程／待建立交换的方向／类型：`finishing` / `outputs` / `product`.

仅纳入与SKU、状态和原收货匹配的实际可用外退，保持供应原生单位；期末结存不算外退。

- 采集对象：实际向外退还可用余料
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：实际归属数量 / N；原始操作数保留于cp_finishing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按匹配供货SKU及原生单位记录真实外退数量、接收方验收和可用状态，并声明总投入带出口或净消耗口径。期末库存和历史拆下可用品分属其他记录；不设通用退回率或抵扣。

#### 采集要求：实际收集并交付处理的废物 (`finishing_contained_waste`)

过程／待建立交换的方向／类型：`finishing` / `outputs` / `waste`.

按材料、污染危害状态及实际接收处理展开计量废物；包装、拆出的历史构件和用过的滤材/PPE与新材料损耗分开；收集废液按实际原生体积计量。

- 采集对象：实际收集并交付处理的废物
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_finishing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：计量实际分类材料、污染及物态、扣皮废物量和接收处理运输覆盖，保留历史或新增来源。按原生体积交付的废液须独立计量为废物交换；不设默认废物率、回收率或强制质量换算。

#### 采集要求：向明确接收介质的实际物质排放 (`finishing_actual_releases`)

过程／待建立交换的方向／类型：`finishing` / `outputs` / `elementary`.

只展开实际测得物种与接收介质，或有效匹配活动及物种因子；实际有燃烧、涂装清洁、制冷剂或医气排放时纳入。感染风险不等于测得病原体排放；密闭废物不作基本流。

- 采集对象：向明确接收介质的实际物质排放
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_finishing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：须有实际事件、物质或粒径及接收介质和实测物种质量，或匹配活动量及有效因子单位来源，或实测整流体释放及有据成分去向与不确定性。捕集废物、整流体与物种审计视图分开；不得从感染风险推病原体量或采用默认泄漏排放因子。

#### 采集要求：实际工序消耗品及更换材料 (`validation_consumables`)

过程／待建立交换的方向／类型：`validation` / `inputs` / `product`.

按实际SKU展开本节点耗材、PPE、袋、密封件、测试材料与备件；非质量供货另建原生单位交换。

- 采集对象：实际工序消耗品及更换材料
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_validation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_validation`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按本节点实际耗材、防护用品、密封、测试或备件SKU采集原生供货量、皮重、期初期末、匹配可用外退、失败施工耗用及测量不确定性；不设每套间默认耗材量。

#### 采集要求：实际承包商服务与共享临时资产 (`validation_provider_assets`)

过程／待建立交换的方向／类型：`validation` / `inputs` / `product`.

展开实际承包商完成的物理结果，以及临床连续性、围挡通行、测试租赁资产。各原生数量匹配完整上游范围；费用或工时不能换成已完成服务数量。

- 采集对象：实际承包商服务与共享临时资产
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：实际归属数量 / N；原始操作数保留于cp_validation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_validation`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：逐实际供应商已完成成果记录原生服务数量、门槛及上游覆盖；共享资产记录选定的整资产或完整生命周期服务视图、兼容项目与全部消费者全寿命驱动量、观察历史及剩余更换终止报废来源、不确定性、敏感性与更新。不以费用或工时换计件，也不假定寿命。

#### 采集要求：实际归属货运服务 (`validation_freight`)

过程／待建立交换的方向／类型：`validation` / `inputs` / `product`.

记录本节点拥有的供货、拆出物与设备运输实际载荷及路线；以明确完整承运范围纳入空返，防止服务包货运重复。

- 采集对象：实际归属货运服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：实际归属数量 / N；原始操作数保留于cp_validation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_validation`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：逐实际运输段采集实载质量及单位、实载路线距离及单位、有因果依据的共载归属、空返活动和承运商上游覆盖及称重距离不确定性。空载段须有服务或车辆活动证据，不虚构正货重；不设默认运距。

#### 采集要求：实际向外退还可用余料 (`validation_usable_returns`)

过程／待建立交换的方向／类型：`validation` / `outputs` / `product`.

仅纳入与SKU、状态和原收货匹配的实际可用外退，保持供应原生单位；期末结存不算外退。

- 采集对象：实际向外退还可用余料
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：实际归属数量 / N；原始操作数保留于cp_validation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_validation`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按匹配供货SKU及原生单位记录真实外退数量、接收方验收和可用状态，并声明总投入带出口或净消耗口径。期末库存和历史拆下可用品分属其他记录；不设通用退回率或抵扣。

#### 采集要求：实际收集并交付处理的废物 (`validation_contained_waste`)

过程／待建立交换的方向／类型：`validation` / `outputs` / `waste`.

按材料、污染危害状态及实际接收处理展开计量废物；包装、拆出的历史构件和用过的滤材/PPE与新材料损耗分开；收集废液按实际原生体积计量。

- 采集对象：实际收集并交付处理的废物
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_validation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_validation`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：计量实际分类材料、污染及物态、扣皮废物量和接收处理运输覆盖，保留历史或新增来源。按原生体积交付的废液须独立计量为废物交换；不设默认废物率、回收率或强制质量换算。

#### 采集要求：向明确接收介质的实际物质排放 (`validation_actual_releases`)

过程／待建立交换的方向／类型：`validation` / `outputs` / `elementary`.

只展开实际测得物种与接收介质，或有效匹配活动及物种因子；实际有燃烧、涂装清洁、制冷剂或医气排放时纳入。感染风险不等于测得病原体排放；密闭废物不作基本流。

- 采集对象：向明确接收介质的实际物质排放
- 流属性/单位：质量 / kg
- 数量规则：实际归属数量 / N；原始操作数保留于cp_validation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_validation`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：须有实际事件、物质或粒径及接收介质和实测物种质量，或匹配活动量及有效因子单位来源，或实测整流体释放及有据成分去向与不确定性。捕集废物、整流体与物种审计视图分开；不得从感染风险推病原体量或采用默认泄漏排放因子。

#### 采集要求：实际按面积供应的可清洁饰面系统 (`finish_area`)

过程／待建立交换的方向／类型：`finishing` / `inputs` / `product`.

按每个真实 SKU、组成/状态及保管关系建立独立原子交换。本要求不是通用集合流。真实完整的采购总成可采用其经核实的整包边界，已含部件不再额外采购。

记录实际墙地顶可清洁饰面及胶涂系统；不设通用消毒效率或涂层排放因子。

- 采集对象：实际按面积供应的可清洁饰面系统
- 流属性/单位：面积 / m2
- 数量规则：实际归属数量 / N；原始操作数保留于cp_finishing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：记录实际可清洁饰面SKU系统、原生供货与安装表面积、母体首次检漏放行、裁切搭接、匹配外退、修补拒收、饰面检查及面积不确定性；不设默认厚度、杀菌效能或每套间饰面面积。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| clearance | 临床释放、围挡与选择性拆除 | required | 实际完整工程 | 已签署既有套间临床/IPC释放、旧水气电通风系统隔离及拆出物去向；保留结构不作新采购。 | 每参考流 |
| envelope_services | 围护密封与建筑设施集成 | required | 实际完整工程 | 板到板墙体、接缝、贯穿孔、门窗、送排风管及风机、压差稳定器、监测报警控制与实际水电医气消防接口；覆盖前先做首装测试。 | 每参考流 |
| finishing | 可清洁饰面与最终清洁 | required | 实际完整工程 | 首装围护释放后才安装吊顶、墙地饰面及设施盖板；可清洁饰面与清洁完成后交最终测试。 | 每参考流 |
| validation | 调试、独立验证与套间验收 | required | 实际完整工程 | 最终泄漏、实际负压源隔离气流压差链、稳定器响应、风机故障、仪表监测报警及水消防接口测试；缺陷闭合并签字验收。 | 每参考流 |

### 过程：临床释放、围挡与选择性拆除（`clearance`）

已签署既有套间临床/IPC释放、旧水气电通风系统隔离及拆出物去向；保留结构不作新采购。

#### 输入

##### 产品流

###### 施工与测试实际电力（`clearance_electricity`）

计量本节点临时围挡、工具和重测电力；依已声明服务包覆盖范围将承包商用电纳入一次。

- 选定流：施工与测试实际电力
- 流属性/单位：能量 / kWh
- 数量规则：实际归属数量 / N；原始操作数保留于cp_clearance
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clearance`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：采集按来源分开的总输入、总外送表计，本节点实际测试复测及临时围挡用电、现场发电与供应商覆盖、归属驱动量及单位和表计不确定性；不用净账单或每套间默认kWh。

###### 实际供应清洁或测试水（`clearance_water`）

记录清洗、冲洗及重测计量供水；本行是产品供应，直接取水须另建实际来源/介质基本流输入。

- 选定流：实际供应清洁或测试水
- 流属性/单位：体积 / m3
- 数量规则：实际归属数量 / N；原始操作数保留于cp_clearance
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_clearance`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按本节点事件采集实际供水来源品质、校准体积、保留及循环存水、受控送处理与环境直排去向和水平衡不确定性；供水量不能证明排水量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：围护密封与建筑设施集成（`envelope_services`）

板到板墙体、接缝、贯穿孔、门窗、送排风管及风机、压差稳定器、监测报警控制与实际水电医气消防接口；覆盖前先做首装测试。

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：可清洁饰面与最终清洁（`finishing`）

独立饰面承包方在盖板遮蔽接缝前接收签署的已漏测首装母状态。记录套间转移ID、检查的基层围护状态、首装释放报告日期、各系统实际饰面面积、安装可清洁性检查及拒收修复记录。完成的可清洁状态签交调试验证团队；内部交接仅为活动证据，不是第二次套间采购或最终合格输出。实际项目如将饰面嵌入其他责任，应保留单一归属并披露边界，不重复采购饰面服务。

首装围护释放后才安装吊顶、墙地饰面及设施盖板；可清洁饰面与清洁完成后交最终测试。

#### 输入

##### 产品流

###### 施工与测试实际电力（`finishing_electricity`）

计量本节点临时围挡、工具和重测电力；依已声明服务包覆盖范围将承包商用电纳入一次。

- 选定流：施工与测试实际电力
- 流属性/单位：能量 / kWh
- 数量规则：实际归属数量 / N；原始操作数保留于cp_finishing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：采集按来源分开的总输入、总外送表计，本节点实际测试复测及临时围挡用电、现场发电与供应商覆盖、归属驱动量及单位和表计不确定性；不用净账单或每套间默认kWh。

###### 实际供应清洁或测试水（`finishing_water`）

记录清洗、冲洗及重测计量供水；本行是产品供应，直接取水须另建实际来源/介质基本流输入。

- 选定流：实际供应清洁或测试水
- 流属性/单位：体积 / m3
- 数量规则：实际归属数量 / N；原始操作数保留于cp_finishing
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按本节点事件采集实际供水来源品质、校准体积、保留及循环存水、受控送处理与环境直排去向和水平衡不确定性；供水量不能证明排水量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：调试、独立验证与套间验收（`validation`）

最终泄漏、实际负压源隔离气流压差链、稳定器响应、风机故障、仪表监测报警及水消防接口测试；缺陷闭合并签字验收。

#### 输入

##### 产品流

###### 施工与测试实际电力（`validation_electricity`）

计量本节点临时围挡、工具和重测电力；依已声明服务包覆盖范围将承包商用电纳入一次。

- 选定流：施工与测试实际电力
- 流属性/单位：能量 / kWh
- 数量规则：实际归属数量 / N；原始操作数保留于cp_validation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_validation`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：采集按来源分开的总输入、总外送表计，本节点实际测试复测及临时围挡用电、现场发电与供应商覆盖、归属驱动量及单位和表计不确定性；不用净账单或每套间默认kWh。

###### 实际供应清洁或测试水（`validation_water`）

记录清洗、冲洗及重测计量供水；本行是产品供应，直接取水须另建实际来源/介质基本流输入。

- 选定流：实际供应清洁或测试水
- 流属性/单位：体积 / m3
- 数量规则：实际归属数量 / N；原始操作数保留于cp_validation
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_validation`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：按本节点事件采集实际供水来源品质、校准体积、保留及循环存水、受控送处理与环境直排去向和水平衡不确定性；供水量不能证明排水量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收既有医院负压源隔离套间改造服务（`accepted_suite`）

一套有唯一编号的卧室+门厅+独立卫浴整体改造通过实际多专业验收门槛；失败仍在返工，不计合格输出。

- 选定流：已验收既有医院负压源隔离套间改造服务
- 流属性/单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_validation`
- 来源：`nhs-isolation-hbn0401-supp1-2025`

范围证据需求：恰为1 item仅表示参考归一化。由唯一完整卧室、入口前室及独立卫浴套间标识、首次及最终测试记录、缺陷关闭和项目特定签署验证验收证明实际N>0；重复测试和独立房间均不增加产出。

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| single_suite | N为唯一完整验收套间ID正数量；卧室+门厅+卫浴合为一次，不按工种房间床位尝试或时长拆计。失败、废件、返工重测损失保留负荷，闭合前不计合格输出；可回收构件按实际去向退出，不设推测替代抵扣。 |  |
| stock_ownership | S = 归属期初库存 + 扣皮重外部收货 - 结转期末库存。内部领用安装不作新收货。选择总供货配匹配可用外退，或消耗量口径只扣一次外退并披露。未退废物损失保留上游，期末库存不是外退；历史拆除物不抵扣新供应。 |  |
| shared_lifecycle | 识别临时围挡、通行、测试租赁资产及四节点和全部其他工程节点期间消费者。以兼容实际job_driver / full_life_driver归属完整制造维护更换终处置。全寿命使用已观测完整寿命或观测历史加有证据剩余更换终止终处置，保留来源不确定性敏感性更新。选择资产等价数量(job_driver/full_life_driver)/N，或完整生命周期服务数量job_driver/N配每驱动负荷；不可混用重复归一化或杜撰寿命。 |  |
| periods | 用实际阶段期间事件索引清场、遮蔽前首装、饰面、调试返工和最终验证验收。跨报告期每笔共享收货测试更换仅归属一次；汇总前对账转移期初期末。未解决终止更换覆盖阻断最终化；不按假设服役寿命年化施工。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_clearance | clearance | clearance_consumables; clearance_electricity; clearance_water; clearance_provider_assets; clearance_freight; clearance_usable_returns; clearance_contained_waste; clearance_actual_releases | foreground_record | site_id; job_id; suite_id; campaign_id; batch_id; event_id; phase_id; period_id; row_id; sku_or_species; asset_id; provider_id; transfer_id; timestamp; native_quantity; native_unit; opening_stock; external_receipts; tare; carried_closing_stock; usable_outward_return; installed_quantity; waste_quantity; retained_old_quantity; meter_start; meter_end; temperature; temperature_unit; pressure; pressure_unit; door_closed_state; first_fix_report; first_fix_release_date; concealed_work_date; finish_area; finish_area_unit; finish_inspection; finish_handoff; reference_state; density; density_unit; moisture; conversion_factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; receiving_medium; activity; activity_unit; species_factor; species_factor_unit; species_factor_source; measured_burn; nonburned_waste; uncontained_loss; total_spill_audit; recovered_closing_stock; load_mass; load_mass_unit; distance; distance_unit; empty_return_scope; upstream_coverage; job_driver; full_life_driver; driver_unit; observed_life; evidenced_remainder; replacement; termination; end_of_life; uncertainty; acceptance_record; N; accepted_suite_ids; moisture_basis; density_source; conversion_unit; conversion_source; factor_numerator_unit; factor_denominator_unit; factor_uncertainty; composition_unit; composition_uncertainty; fate_unit; fate_uncertainty; unknown_loss_investigation; fuel_balance_uncertainty; asset_manufacture_source; asset_maintenance_source; asset_replacement_source; asset_end_of_life_source; asset_life_source; all_consumer_ids; all_job_ids; all_node_ids; all_period_ids; full_life_start; full_life_end; allocation_decision; allocation_source; allocation_uncertainty; sensitivity_method; sensitivity_result; evidence_update_date; evidence_update_trigger; contained_effluent_id; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_receiver; direct_water_source; direct_water_medium; direct_water_volume; direct_water_volume_unit; direct_water_destination; clinical_release_record; ipc_approval; decant_scope; decontamination_method; decontamination_quantity; decontamination_release; containment_design; temporary_clinical_continuity_scope; isolated_service_id; isolation_method; safe_service_release; old_water_clearance; old_gas_clearance; historical_removed_id; historical_state; historical_native_quantity; historical_native_unit; historical_receiver; historical_transfer; historical_quality_acceptance; electricity_source; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_provider_scope; test_load; circulation; distribution_loss; energy_unit; power_attribution_driver; power_driver_unit; power_source_record; export_recipient | 采集校准仪表称重、原生收退库存对账、承包物理完成与完整资产范围；匹配临床释放、转移、废物去向及节点签字测试。记录重测等全部实际数量并证明未发生项。 汇总本节点实际归属数量后除以N一次，保持原生台账及互斥去向。 | 各行实际原生单位 | 每收货事件测试及阶段闭合 | 本节点实际工期含返工；共享资产另外覆盖全部消费者完整制造维护更换终处置寿命及观测历史与有证据剩余 | 具名医院套间及可归属承包场外资源；资产跨全部消费者节点工程期间 | 每参考流 | 校准记录、覆盖矩阵、胜任签字、不确定性与对账 |
| cp_envelope_services | envelope_services | envelope_services_consumables; envelope_services_electricity; envelope_services_water; envelope_services_provider_assets; envelope_services_freight; envelope_services_usable_returns; envelope_services_contained_waste; envelope_services_actual_releases; component_count; component_area; component_length; commissioning_medical_gas | foreground_record | site_id; job_id; suite_id; campaign_id; batch_id; event_id; phase_id; period_id; row_id; sku_or_species; asset_id; provider_id; transfer_id; timestamp; native_quantity; native_unit; opening_stock; external_receipts; tare; carried_closing_stock; usable_outward_return; installed_quantity; waste_quantity; retained_old_quantity; meter_start; meter_end; temperature; temperature_unit; pressure; pressure_unit; reference_state; density; density_unit; moisture; conversion_factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; receiving_medium; activity; activity_unit; species_factor; species_factor_unit; species_factor_source; measured_burn; nonburned_waste; uncontained_loss; total_spill_audit; recovered_closing_stock; load_mass; load_mass_unit; distance; distance_unit; empty_return_scope; upstream_coverage; job_driver; full_life_driver; driver_unit; observed_life; evidenced_remainder; replacement; termination; end_of_life; uncertainty; acceptance_record; N; accepted_suite_ids; moisture_basis; density_source; conversion_unit; conversion_source; factor_numerator_unit; factor_denominator_unit; factor_uncertainty; composition_unit; composition_uncertainty; fate_unit; fate_uncertainty; unknown_loss_investigation; fuel_balance_uncertainty; asset_manufacture_source; asset_maintenance_source; asset_replacement_source; asset_end_of_life_source; asset_life_source; all_consumer_ids; all_job_ids; all_node_ids; all_period_ids; full_life_start; full_life_end; allocation_decision; allocation_source; allocation_uncertainty; sensitivity_method; sensitivity_result; evidence_update_date; evidence_update_trigger; contained_effluent_id; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_receiver; direct_water_source; direct_water_medium; direct_water_volume; direct_water_volume_unit; direct_water_destination; adopted_standard; authorised_deviation; approved_source_negative_mode; envelope_geometry; room_volume; volume_unit; first_fix_condition; first_fix_test_pressure; first_fix_pressure_unit; first_fix_measured_leakage; first_fix_leakage_unit; first_fix_criterion; first_fix_method; first_fix_calibration; permitted_temporary_seals; first_fix_timestamp; concealment_timestamp; first_fix_defect; first_fix_retest; first_fix_signatory; first_fix_release; actual_component_schedule; fire_damper_interface; water_interface; electrical_interface; medical_gas_species; medical_gas_purity; supplied_gas_volume; gas_volume_unit; gas_reference_temperature; gas_temperature_unit; gas_reference_pressure; gas_pressure_unit; vented_gas_quantity; vented_gas_unit; retained_gas_quantity; gas_return_quantity; electricity_source; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_provider_scope; test_load; circulation; distribution_loss; energy_unit; power_attribution_driver; power_driver_unit; power_source_record; export_recipient | 采集校准仪表称重、原生收退库存对账、承包物理完成与完整资产范围；匹配临床释放、转移、废物去向及节点签字测试。记录重测等全部实际数量并证明未发生项。 汇总本节点实际归属数量后除以N一次，保持原生台账及互斥去向。 | 各行实际原生单位 | 每收货事件测试及阶段闭合 | 本节点实际工期含返工；共享资产另外覆盖全部消费者完整制造维护更换终处置寿命及观测历史与有证据剩余 | 具名医院套间及可归属承包场外资源；资产跨全部消费者节点工程期间 | 每参考流 | 校准记录、覆盖矩阵、胜任签字、不确定性与对账 |
| cp_finishing | finishing | finishing_consumables; finishing_electricity; finishing_water; finishing_provider_assets; finishing_freight; finishing_usable_returns; finishing_contained_waste; finishing_actual_releases; finish_area | foreground_record | site_id; job_id; suite_id; campaign_id; batch_id; event_id; phase_id; period_id; row_id; sku_or_species; asset_id; provider_id; transfer_id; timestamp; native_quantity; native_unit; opening_stock; external_receipts; tare; carried_closing_stock; usable_outward_return; installed_quantity; waste_quantity; retained_old_quantity; meter_start; meter_end; temperature; temperature_unit; pressure; pressure_unit; reference_state; density; density_unit; moisture; conversion_factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; receiving_medium; activity; activity_unit; species_factor; species_factor_unit; species_factor_source; measured_burn; nonburned_waste; uncontained_loss; total_spill_audit; recovered_closing_stock; load_mass; load_mass_unit; distance; distance_unit; empty_return_scope; upstream_coverage; job_driver; full_life_driver; driver_unit; observed_life; evidenced_remainder; replacement; termination; end_of_life; uncertainty; acceptance_record; N; accepted_suite_ids; moisture_basis; density_source; conversion_unit; conversion_source; factor_numerator_unit; factor_denominator_unit; factor_uncertainty; composition_unit; composition_uncertainty; fate_unit; fate_uncertainty; unknown_loss_investigation; fuel_balance_uncertainty; asset_manufacture_source; asset_maintenance_source; asset_replacement_source; asset_end_of_life_source; asset_life_source; all_consumer_ids; all_job_ids; all_node_ids; all_period_ids; full_life_start; full_life_end; allocation_decision; allocation_source; allocation_uncertainty; sensitivity_method; sensitivity_result; evidence_update_date; evidence_update_trigger; contained_effluent_id; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_receiver; direct_water_source; direct_water_medium; direct_water_volume; direct_water_volume_unit; direct_water_destination; parent_transfer_id; parent_first_fix_release; parent_inspected_condition; finishing_responsible_party; actual_finish_system; supplied_finish_area; actual_installed_finish_area; finish_area_unit; cleanability_requirement; finish_inspection; finish_reject; finish_repair; finish_acceptance; finish_handoff_id; finish_handoff_date; receiver; electricity_source; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_provider_scope; test_load; circulation; distribution_loss; energy_unit; power_attribution_driver; power_driver_unit; power_source_record; export_recipient | 采集校准仪表称重、原生收退库存对账、承包物理完成与完整资产范围；匹配临床释放、转移、废物去向及节点签字测试。记录重测等全部实际数量并证明未发生项。 汇总本节点实际归属数量后除以N一次，保持原生台账及互斥去向。 | 各行实际原生单位 | 每收货事件测试及阶段闭合 | 本节点实际工期含返工；共享资产另外覆盖全部消费者完整制造维护更换终处置寿命及观测历史与有证据剩余 | 具名医院套间及可归属承包场外资源；资产跨全部消费者节点工程期间 | 每参考流 | 校准记录、覆盖矩阵、胜任签字、不确定性与对账 |
| cp_validation | validation | validation_consumables; validation_electricity; validation_water; validation_provider_assets; validation_freight; validation_usable_returns; validation_contained_waste; validation_actual_releases; accepted_suite | foreground_record | site_id; job_id; suite_id; campaign_id; batch_id; event_id; phase_id; period_id; row_id; sku_or_species; asset_id; provider_id; transfer_id; timestamp; native_quantity; native_unit; opening_stock; external_receipts; tare; carried_closing_stock; usable_outward_return; installed_quantity; waste_quantity; retained_old_quantity; meter_start; meter_end; temperature; temperature_unit; pressure; pressure_unit; reference_state; density; density_unit; moisture; conversion_factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; receiving_medium; activity; activity_unit; species_factor; species_factor_unit; species_factor_source; measured_burn; nonburned_waste; uncontained_loss; total_spill_audit; recovered_closing_stock; load_mass; load_mass_unit; distance; distance_unit; empty_return_scope; upstream_coverage; job_driver; full_life_driver; driver_unit; observed_life; evidenced_remainder; replacement; termination; end_of_life; uncertainty; acceptance_record; N; accepted_suite_ids; moisture_basis; density_source; conversion_unit; conversion_source; factor_numerator_unit; factor_denominator_unit; factor_uncertainty; composition_unit; composition_uncertainty; fate_unit; fate_uncertainty; unknown_loss_investigation; fuel_balance_uncertainty; asset_manufacture_source; asset_maintenance_source; asset_replacement_source; asset_end_of_life_source; asset_life_source; all_consumer_ids; all_job_ids; all_node_ids; all_period_ids; full_life_start; full_life_end; allocation_decision; allocation_source; allocation_uncertainty; sensitivity_method; sensitivity_result; evidence_update_date; evidence_update_trigger; contained_effluent_id; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_receiver; direct_water_source; direct_water_medium; direct_water_volume; direct_water_volume_unit; direct_water_destination; suite_type; adopted_standard; approved_design_airflow; airflow_unit; measured_supply_airflow; measured_extract_airflow; actual_room_volume; volume_unit; airflow_direction; door_closed_state; bedroom_lobby_pressure; bedroom_corridor_pressure; ensuite_bedroom_pressure; lobby_corridor_pressure; final_leakage; leakage_unit; final_test_pressure; test_pressure_unit; final_leakage_criterion; final_leakage_test_method; stabiliser_response; stabiliser_steady_state; fan_failure_test; nurse_station_fault_signal; estates_fault_signal; gauge_calibration; monitor_test; alarm_test; fire_interface_test; actual_water_test; actual_water_temperature; water_temperature_unit; water_test_location; actual_medical_gas_interface_test; validation_timestamp; validator_identity; validator_competence; validator_independence; validation_scope; defect_register; defect_closure; ae_approval; vsg_approval; clinical_ipc_signoff; estates_signoff; signed_acceptance; electricity_source; gross_import_start; gross_import_end; gross_export_start; gross_export_end; onsite_generation_quantity; onsite_generation_provider_scope; test_load; circulation; distribution_loss; energy_unit; power_attribution_driver; power_driver_unit; power_source_record; export_recipient | 采集校准仪表称重、原生收退库存对账、承包物理完成与完整资产范围；匹配临床释放、转移、废物去向及节点签字测试。记录重测等全部实际数量并证明未发生项。 汇总本节点实际归属数量后除以N一次，保持原生台账及互斥去向。 | 各行实际原生单位 | 每收货事件测试及阶段闭合 | 本节点实际工期含返工；共享资产另外覆盖全部消费者完整制造维护更换终处置寿命及观测历史与有证据剩余 | 具名医院套间及可归属承包场外资源；资产跨全部消费者节点工程期间 | 每参考流 | 校准记录、覆盖矩阵、胜任签字、不确定性与对账 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_native | all inventory rows | 各实际具体交换以归属工程数量除N一次，最终套间输出为1 item；保留原分子与N。 | native_quantity; N; cp_clearance; cp_envelope_services; cp_finishing; cp_validation | 每参考流原生交换 |  |
| stock_balance | all inventory rows | S = 归属期初库存 + 扣皮重外部收货 - 结转期末库存。内部领用安装不作新收货。选择总供货配匹配可用外退，或消耗量口径只扣一次外退并披露。未退废物损失保留上游，期末库存不是外退；历史拆除物不抵扣新供应。 | opening_stock; external_receipts; tare; carried_closing_stock; usable_outward_return | 对账供应与匹配外退台账 |  |
| fuel_fates | all inventory rows | 实际用燃料时供应上游与燃烧量分开。采集实测燃烧或经审计完整互斥原生单位去向平衡及不确定性未知损失调查。退还、未燃废物、未收集损失、结存互斥；总泄漏仅审计，回收结存已在期末；不得把不明残差当燃烧。 | measured_burn; external_receipts; opening_stock; usable_outward_return; nonburned_waste; uncontained_loss; carried_closing_stock; total_spill_audit; recovered_closing_stock | 有证据实际燃烧及其他互斥去向 |  |
| species_release | clearance_actual_releases; envelope_services_actual_releases; finishing_actual_releases; validation_actual_releases | 使用实测物种质量，或实际匹配活动乘物种因子，或实际整流体释放乘有证据组成及接收介质去向。完整物种因子不再乘组成去向；整流体与物种视图非加和。SDS、安全限值、无VOC声称不是排放量。 | native_quantity; activity; species_factor; composition; fate; receiving_medium; factor_source; composition_source; fate_source | 每参考流按介质实际物种质量 |  |
| freight_work | clearance_freight; envelope_services_freight; finishing_freight; validation_freight | 各运输段实际千克载荷乘千米距离求和 / N；披露承运空返上游范围，不加服务已覆盖燃料。 | load_mass; load_mass_unit; distance; distance_unit; empty_return_scope; N | 每参考流kg*km货运 |  |
| shared_asset | clearance_provider_assets; envelope_services_provider_assets; finishing_provider_assets; validation_provider_assets | 识别临时围挡、通行、测试租赁资产及四节点和全部其他工程节点期间消费者。以兼容实际job_driver / full_life_driver归属完整制造维护更换终处置。全寿命使用已观测完整寿命或观测历史加有证据剩余更换终止终处置，保留来源不确定性敏感性更新。选择资产等价数量(job_driver/full_life_driver)/N，或完整生命周期服务数量job_driver/N配每驱动负荷；不可混用重复归一化或杜撰寿命。 | job_driver; full_life_driver; driver_unit; observed_life; evidenced_remainder; replacement; termination; end_of_life; N | 一种完整生命周期归属资产或服务视图 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | 最终交换前核实具体SKU承包物种、类型方向状态门槛属性单位及支持行；集合卡不是固定身份。 | 详情行及实际规格 |
| completeness | all inventory rows | 覆盖实际全部阶段承包临床临供及共享寿命；零需证据，未知作阻断，记录测量不确定性。 | 覆盖矩阵、原生记录、资产寿命及范围对账 |
| gate | accepted_suite | 首装遮蔽前与最终独立测试证据区分；医院签署人承担实际职责，不外推临床结局。 | 带日期测试及签署门槛记录 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| acceptance | 拒绝提前验收、缺少套间组成、模式未知、首装证据缺失、要求独立却自验、未批准偏离或未闭合缺陷。保留校准气流压差泄漏原始数据、条件、首装最终时间、稳定器风机故障监测报警仪表结果、水消防接口、独立验证范围与多专业签收。 | nhs-isolation-hbn0401-supp1-2025 |
| inventory_complete | 对账原生收货库存外退安装废物；区分历史拆出物、包装和新材废件。实际零须证据，未知保留缺口。核实具体身份属性单位上游覆盖和承包资产，展开直接水气物种。检查燃料去向物种因子货运单位及全寿命消费者，防止重复和无依据抵扣。 |  |
| comparability | 仅在披露实际套间布局体积、邻接使用、保留能力、标准模式、测试惯例阶段范围后比较，并按N归一化一次。数量阈值时长物种均需项目证据，不取指南默认。原生属性支持或覆盖缺失阻断最终数据，即使候选结构检查通过。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景改造服务数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际兼容既有医院源隔离负压套间完整改造；下游process/lifecyclemodel投影 |
| excluded_use | 新整院、PPVL保护正压、感染结局、患者日及后续运行 |
| required_metadata | 全部参考限定；地域日期；保留更换清单；N；节点阶段承包归属；原生单位上游范围；实际标准偏离；首装最终测试；验证人签收 |
| required_quality_disclosure | 身份支持数量缺口；排除项；不确定性；分配共享寿命证据；来源地域限制；验证范围与缺失覆盖 |
| update_trigger | 套间模式布局、保留设施、标准偏离、承包范围、实测活动、测试门槛或资产寿命证据改变 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| nhs-isolation-hbn0401-supp1-2025 | official_guidance | https://www.england.nhs.uk/wp-content/uploads/2009/12/health-building-note-04-01-supplement-1-july-2025.pdf | NHS England HBN 04-01 Supplement 1，2025年7月公布/2024修订：范围规划、源隔离负压围护设施、附录A/B时序验证；推荐及地域有限，不作通用数量默认。 |
| unsd-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC3.0解释说明印刷283页54129医院施工修理改造背景；不作PCR身份或数量证据。 |
