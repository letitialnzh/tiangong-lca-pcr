---
pcr_id: pcr.existing-unbound-gravel-road-regravelling-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有无结合料碎砾石道路重新铺砾维修服务

## 1. 范围与适用性

本PCR适用于一项有明确范围的既有道路重新铺砾维修合同。既有道路须结构适用、非高架、采用无结合料天然碎砾石路面。翻松并整形留用路面，消除相关坑槽、车辙和高路肩，恢复规定路拱与排水，再供应、均料和铺撒规定的天然磨耗层集料。实际批准工法采用时计入调湿和机械碾压；完成整饰后交付具体桩号路段。FHWA第3.18–3.21节说明该顺序；其中示例数量不作为通用规格。

排除新建道路成形、结构性路基重建、沥青或混凝土面层、化学稳定或抑尘结合剂、再生沥青或受污染集料路线、新建桥梁/隧道/涵洞、交通运营及周期养护计划。该维修所需的局部路侧排水修正须纳入本范围，或明确由无重复负担的其他责任方承担。结构不适用的既有道路不属于本路线，不能用铺新砾石掩盖问题。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-unbound-gravel-road-regravelling-services |
| classification_refs | cpc:3.0:54211；较窄维修子集；分类不确立产品身份 |
| covered_products | 适用既有无结合料道路的天然碎砾石磨耗层维修验收服务 |
| excluded_products | 新建或结构性重建道路；有结合料或化学处理面层；再生沥青路线；后续交通与养护 |
| representative_product | 既有路面准备后重新铺砾并验收的一项具体桩号范围路段 |
| production_route | 既有道路适用性确认 → 翻松/整形与排水准备门槛 → 天然集料收货总量（扣皮重，未预扣退货）、堆条/均料/铺撒 → 实际调湿与碾压 → 几何、材料与压实验收 |
| market_state | 客户签署交接时的场址特定竣工维修服务；既有道路留在原位 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收的既有无结合料碎砾石道路重新铺砾维修服务 |
| How much | 1 item：一项实际维修合同路段，声明桩号、宽度与处理面积；不同尺寸路段的件数不具等价性 |
| How well | 既有道路适用；准备后的路拱/排水合格；规定集料级配/塑性/含水、均匀层厚及实际合同几何/压实条件合格，缺陷关闭 |
| How long or cycle | 从适用性确认至签署交接的一次有界维修作业；声明起止日期、全部报告期及准备/铺设/返工阶段；不承诺未来交通寿命 |
| reference_flow_link | `accepted_regravelling` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收的既有无结合料碎砾石道路重新铺砾维修服务 |
| 参考流属性 | 数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 计数单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 道路ID；准确桩号/宽度/面积；初始结构和表面状态；规定路拱/排水；集料来源、天然属性、级配/塑性与收货含水量；实际铺撒/完工层几何及密度试验基准；实际调湿/碾压工法；验收标准来源/公差/结果；日期、天气与签署维修交接 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| counted_contract | 参考产品 | 数量 | item | 1 item仅代表声明的验收合同路段，不代表一公里或一吨集料。按cp_accepted_regravelling记录实际面积、长度、厚度与验收；几何强度指标仅为派生披露。 |
| aggregate_state | new_aggregate; aggregate_return; rejected_layer | 质量 | kg | 分别记录湿态收货总质量（扣皮重，未预扣退货）、安装材料、实际退货与期末库存；同批次记录含水量和实际干质量换算。松散体积不等于完工体积；换算前测量密度与状态。 |
| native_service_units | prep_plant; finish_plant; aggregate_haul; finish_water_product; finish_water_abstraction; prep_electricity; finish_electricity | 实际原生属性 | h; tkm; m3; kWh | 保留实际时长、货运、水体积和电量单位；数据集绑定前核实支持链。体积转质量须有该批水/材料的实测密度、温度与含水基准；不使用计数替代或通用收缩、燃料、排放因子。 |
| receipt_mass_basis | new_aggregate; host_surplus; prep_removed_waste; aggregate_return; rejected_layer | 质量 | kg | 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已确认适用的既有无结合料天然碎砾石道路，记录病害、路拱/排水与结构适用性；新集料处于声明的上游供给门 |
| starting_condition_role | 留用的既有道路及原位库存，不是新采购集料或新建道路输出 |
| product_classification_scope | 非高架道路施工服务的有界维修子集；不自动包含整条道路建造 |
| recursive_input_rule | 既往道路维修数据集可说明留用状态，但不是新采购同类别服务。实际分包准备按真实接口只记录一次，明确责任方及负担覆盖。 |
| upstream_dataset_requirement | 实际集料供给、能源、物流与机具支持数据，门槛和单位相符并包含生产及相关生命周期负担；缺失覆盖保留为数据缺口 |
| disclosure | 声明维修桩号/报告期、留用边界、排水责任、供应商运输覆盖、实际返工/出口、库存结转和机具生命周期归属；无避免替换信用 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| bounded_host | prepare_host | 原道路建造在本次增量维修范围之外。计入实际翻松、整形、必要排水修正和搬运/移除；原位留用材料不是免费采购投入或负废物。 | fhwa-gravel-2015 |
| physical_gates | prepare_host; regravel_finish | 准备阶段仅在路拱/排水和病害修正满足实际条件后交接同一原位道路。铺设阶段在该父状态上完成新层。文件/收据是证据，不是额外过程输出。 | fhwa-gravel-2015 |
| supply_ownership | regravel_finish | 实际集料上游生产及实际进场/退货/废物、水和设备物流由全维修主账只计一次。供给已含的采石处理或运输不再重复前景建模。收货为总量（扣皮重，未预扣退货）；期末库存结转其负担，另列真实向外退货。 | fhwa-gravel-2015 |
| asset_boundary | prep_plant; finish_plant | 每台共用平地机、压路机、洒水车及交通控制工具须识别两节点和其他任务/报告期。通过真实供应商覆盖或完整寿命资产账覆盖制造、调遣、使用/维护、更换和寿命终结；披露缺口，不指定任意寿命。 |  |
| water_release | regravel_finish | 区分采购水、直接环境取水和内部回用。捕集径流/废水按真实交接记录；只有实际到达指定接收介质的水/物质才记录基本流释放。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际道路准备机具服务 (`prep_plant`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

分别记录实际平地机、翻松机、排水搬运设备和交通控制/工具服务，带供应商、资产和覆盖范围；嵌入式准备操作归本节点。

- 采集对象：实际道路准备机具服务
- 流属性/单位：时长 / h
- 数量规则：按实际资产/供应商展开应归属的运行、待机和调遣服务时长；cp_prep_plant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_plant`

数量范围证据需求：采集本路况、桩号和工法的真实资产小时区间及归属不确定性；无通用生产率或寿命。

#### 采集要求：按供给牌号区分的实际准备机具燃料 (`prep_fuel`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.


本节点真实上游燃料供应，尚未扣除可用向外退出量。按 fuel_supply_fate 保留未退回废物/损失的供应负荷，并单独确定燃烧活动。保留真实燃料牌号、设备工况、供应商覆盖、密度/状态和计量不确定性。

- 采集对象：按供给牌号区分的实际准备机具燃料
- 流属性/单位：质量 / kg
- 数量规则：真实上游供应燃料质量 G_fuel 仅除以声明参考单位下独立实测的正值验收批量 D_fuel 一次；保留各互斥燃料去向，按第8节另行确定实际燃烧 B_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_fuel`

数量范围证据需求：按实际机具负荷/闲置及维修长度采集燃料消耗区间；体积换算须实际密度和温度。

#### 采集要求：实际向外交接的可用既有道路剩料 (`host_surplus`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `product`.

仅有实际向外可用材料批次及产品交接证明时作产品输出。原位留用材料和期末库存是内部余额。

- 采集对象：实际向外交接的可用既有道路剩料
- 流属性/单位：质量 / kg
- 数量规则：按身份/去向记录实际向外可用剩料总质量（扣皮重，未预扣退货）；不存在出口须有证据；cp_host_surplus。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_host_surplus`

数量范围证据需求：采集称量向外批次数量区间、含水和不确定性；不假设可用比例或替代信用。

#### 采集要求：按粒径区分的实际准备粉尘大气释放 (`prep_dust`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `elementary`.

只计翻松和整形期间实测或有适用模型支持的矿物颗粒释放；按实际粒径组分和室外空气介质展开。

- 采集对象：按粒径区分的实际准备粉尘大气释放
- 流属性/单位：质量 / kg
- 数量规则：由实测速率与实际时长或有据适用活动量/因子计算真实作业物质/粒径质量，区分计算与直接测量；cp_prep_dust。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prep_dust`

数量范围证据需求：采集具体物质/粒径的监测或方法不确定性及真实含水/活动/控制资料；无泛PM身份或默认因子。

#### 采集要求：实际准备燃烧尾气物种 (`prep_exhaust`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `elementary`.

仅在前景负责燃烧时，分别记录真实物种及空气接收介质；燃料质量不是尾气质量。

- 采集对象：实际准备燃烧尾气物种
- 流属性/单位：质量 / kg
- 数量规则：由实测速率与实际时长或有据适用活动量/因子计算真实作业物种质量，区分计算与直接测量；cp_prep_exhaust。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prep_exhaust`

数量范围证据需求：采集实际燃料/发动机/控制和物种特定因子不确定性或实测区间；无泛尾气交换。

#### 采集要求：供应商覆盖之外的实际全维修物流 (`aggregate_haul`)

过程／待建立交换的方向／类型：`regravel_finish` / `inputs` / `product`.

regravel_finish为单一主责物流账，每个真实维修运输腿只计一次：新集料、准备可用剩料/废物、整饰退货/废物、水及设备调遣。展开实际承运人/车辆/货物身份；准备材料出口仍归prepare_host，运输通过责任矩阵分配，不另建采购节点。

- 采集对象：供应商覆盖之外的实际全维修物流
- 流属性/单位：运输服务 / tkm
- 数量规则：按真实运输腿记录货物质量和路线距离服务，声明装载/空返分配及供应商覆盖；cp_aggregate_haul。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_aggregate_haul`

数量范围证据需求：对全部真实维修运输腿采集货物/距离和装载/空返范围，含准备出口、水和设备；无默认距离或利用率。

#### 采集要求：实际铺设与压实机具服务 (`finish_plant`)

过程／待建立交换的方向／类型：`regravel_finish` / `inputs` / `product`.

分别记录真实平地机/均料设备、洒水车、压路机和交通控制/工具供应商；水/压路机纳入取决于实际批准操作。

- 采集对象：实际铺设与压实机具服务
- 流属性/单位：时长 / h
- 数量规则：按资产/供应商记录实际应归属服务小时，含真实闲置与调遣归属；cp_finish_plant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_plant`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：采集实际遍数、层状态及资产条件的运行时间和完整寿命归属不确定性；不假设压路机数量、寿命或生产率。

#### 采集要求：本维修实际环境取水 (`finish_water_abstraction`)

过程／待建立交换的方向／类型：`regravel_finish` / `inputs` / `elementary`.

只有从识别环境源实际直接取水才是基本流输入；实际泵送/处理在本节点记录，不与采购水重复。

- 采集对象：本维修实际环境取水
- 流属性/单位：体积 / m3
- 数量规则：按水源记录真实计量直接取水；cp_finish_water_abstraction。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_water_abstraction`

数量范围证据需求：采集水源特定取水区间、计量/许可证据及真实水源状态；无假设消耗或水转kg。

#### 采集要求：实际向外退回的可用新集料 (`aggregate_return`)

过程／待建立交换的方向／类型：`regravel_finish` / `outputs` / `product`.

只有产品交接状态的真实向外可用集料才是退货；原位剩料/期末库存与废物交接拒收料是不同状态。

- 采集对象：实际向外退回的可用新集料
- 流属性/单位：质量 / kg
- 数量规则：按批次/接收方记录真实向外可用退货总量（扣皮重，未预扣退货），不事先从投入净扣；cp_aggregate_return。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_aggregate_return`

数量范围证据需求：采集真实退货称量区间、含水与交接不确定性；无默认退货率或避免集料信用。

#### 采集要求：实际捕集并外送处理的径流或废水 (`captured_runoff`)

过程／待建立交换的方向／类型：`regravel_finish` / `outputs` / `waste`.

只有调湿径流/清理水实际捕集且向外处理时作废物交换；明确悬浮材料及真实液体状态。

- 采集对象：实际捕集并外送处理的径流或废水
- 流属性/单位：质量 / kg
- 数量规则：按流/接收方记录实际外送废水质量，体积转质量仅用实测密度；cp_captured_runoff。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_captured_runoff`

数量范围证据需求：采集真实捕集体积/质量范围、液体密度/固体和交接不确定性；不假设全部加水成为废水。

#### 采集要求：按粒径区分的实际铺层粉尘大气释放 (`finish_dust`)

过程／待建立交换的方向／类型：`regravel_finish` / `outputs` / `elementary`.

分别记录实际矿物粉尘物种/粒径和空气接收介质，区分集料损失、捕集尘及维修作业外后续交通排放。

- 采集对象：按粒径区分的实际铺层粉尘大气释放
- 流属性/单位：质量 / kg
- 数量规则：由实测速率与实际时长或有据适用活动量/因子计算真实作业物种/粒径质量，区分计算与直接测量；cp_finish_dust。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_dust`

数量范围证据需求：采集实际活动、含水、控制和粒径特定排放不确定性；无泛PM UUID或未来交通默认值。

#### 采集要求：实际新层整饰燃烧尾气物种 (`finish_exhaust`)

过程／待建立交换的方向／类型：`regravel_finish` / `outputs` / `elementary`.

仅在前景负责发动机运行时，将实际燃烧释放展开到每项已核实物种和空气介质。

- 采集对象：实际新层整饰燃烧尾气物种
- 流属性/单位：质量 / kg
- 数量规则：由实测速率与实际时长或有据适用活动量/因子计算真实作业物种质量，区分计算与直接测量；cp_finish_exhaust。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish_exhaust`

数量范围证据需求：采集发动机/燃料/控制及物种特定测量或因子不确定性；不将燃料质量等同排放质量。

#### 采集要求：维修实际向环境介质释放的水 (`finish_water_release`)

过程／待建立交换的方向／类型：`regravel_finish` / `outputs` / `elementary`.

仅在实测或有闭合水衡算及实际接收介质支持时，分别记录蒸发、渗入或排放。溶解/悬浮污染物须有各自物种和数量。

- 采集对象：维修实际向环境介质释放的水
- 流属性/单位：体积 / m3
- 数量规则：按已识别路径记录真实水释放体积；cp_finish_water_release。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_water_release`

数量范围证据需求：采集实测或路径支持的体积区间和水衡算不确定性；加水不自动等于消耗或污染物释放。

#### 采集要求：按牌号区分的实际铺设、洒水和碾压燃料 (`finish_fuel`)

过程／待建立交换的方向／类型：`regravel_finish` / `inputs` / `product`.

按每个真实 SKU、组成/状态及保管关系建立独立原子交换。本要求不是通用集合流。真实完整的采购总成可采用其经核实的整包边界，已含部件不再额外采购。

本节点真实上游燃料供应，尚未扣除可用向外退出量。按 fuel_supply_fate 保留未退回废物/损失的供应负荷，并单独确定燃烧活动。保留真实燃料牌号、设备工况、供应商覆盖、密度/状态和计量不确定性。

- 采集对象：按牌号区分的实际铺设、洒水和碾压燃料
- 流属性/单位：质量 / kg
- 数量规则：真实上游供应燃料质量 G_fuel 仅除以声明参考单位下独立实测的正值验收批量 D_fuel 一次；保留各互斥燃料去向，按第8节另行确定实际燃烧 B_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_fuel`

数量范围证据需求：采集真实消耗区间和分配不确定性；体积换算须实测密度/温度；无默认每面积燃料。

#### 采集要求：以废物交接的实际准备移除物 (`prep_removed_waste`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `waste`.

按每个真实 SKU、组成/状态及保管关系建立独立原子交换。本要求不是通用集合流。真实完整的采购总成可采用其经核实的整包边界，已含部件不再额外采购。

按材料、废物状态和处理去向区分实际移除泥沙/土/碎砾石/杂物；不得将异质移除物加总为一个交换。

- 采集对象：以废物交接的实际准备移除物
- 流属性/单位：质量 / kg
- 数量规则：按已识别流记录真实向外废物总量（扣皮重，未预扣退货）；cp_prep_removed_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_removed_waste`

数量范围证据需求：采集各流称量范围、不确定性、含水/状态和处置证据；无默认移除比例。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare_host | 留用道路翻松、整形与准备 | required | 适用既有道路在新层铺设前需要有记录的准备 | 独立成形责任：有病害既有几何状态变为验收翻松/整形路拱和排水交接状态 | 同一实际合同桩号和准备面积 |
| regravel_finish | 新无结合料磨耗层铺设与整饰 | required | 准备门槛通过后；工法要求时采用实际调湿/碾压 | 留用父状态的表面整饰：集料交付总量（扣皮重，未预扣退货）、嵌入式均料/铺撒、实际压实和验收维修 | 1 item验收的桩号有界维修 |

留用道路交接是内部原位状态，不是新资产或第二项最终服务。准备失败在prepare_host内循环；级配、层几何或压实不合格在regravel_finish内返工，仅物理上需要时返回准备。事件账保留产生节点、重复操作和真实边界出口。均料是嵌入式整饰，不是独立销售配方。准备承担独立道路几何变化，翻松/调理不另设材料处理节点；新层整饰承担其最终几何，不另设制品成形或装配节点。

### 过程：既有道路翻松、整形与铺砾前准备 (`prepare_host`)

#### 输入

##### 产品流

###### 实际准备阶段电力供给 (`prep_electricity`)

使用时按实际供应记录本节点计量采购电力，不重复机具/供应商覆盖。

- 选定流：实际准备阶段电力供给
- 流属性/单位：能量 / kWh
- 数量规则：实际可归属计量电量；未用时有证据声明；cp_prep_electricity。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_electricity`

数量范围证据需求：由电表/任务记录采集作业电量区间、电表精度与分配；不假设电网或消耗。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 重新铺砾交接时准备完成的既有道路 (`prepared_host`)

内部原位道路接口保留原道路身份和材料；不是新路生产、采购道路或第二项最终维修。

- 选定流：重新铺砾交接时准备完成的既有道路
- 流属性/单位：数量 / item
- 数量规则：声明路段/状态下独立实测的批准道路交接计数，除以正值验收合同路段数 N_host；两节点按同一交接 ID 和状态配对。同一路段比值为一须有实际门槛证据，不能由最终产出默认赋值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepared_host`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：采集真实门槛计数、路段几何及测量/检查不确定性；观测到的计数比一不是通用中间量边界。

##### 废物流

##### 基本流

### 过程：新无结合料磨耗层铺设与整饰 (`regravel_finish`)

#### 输入

##### 产品流

###### 新磨耗层铺设接收的已准备既有道路 (`host_to_finish`)

同一留用原位路段通过内部准备门槛接收；实际准备负担只计一次，不加新建整路负担。

- 选定流：新磨耗层铺设接收的已准备既有道路
- 流属性/单位：数量 / item
- 数量规则：声明路段/状态下独立实测的批准道路交接计数，除以正值验收合同路段数 N_host；两节点按同一交接 ID 和状态配对。同一路段比值为一须有实际门槛证据，不能由最终产出默认赋值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_host_to_finish`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：独立确定关联交接实测计数/状态、交接测量不确定性和门槛公差；不得假设已验收或中间量等于最终参考量。

###### 供给门处实际规定天然磨耗层集料 (`new_aggregate`)

每一实际天然采石/破碎或砾石批次须与供给级配、来源、含水和磨耗层用途匹配；不能用采石开挖或沥青流替代。

- 选定流：供给门处实际规定天然磨耗层集料
- 流属性/单位：质量 / kg
- 数量规则：按供应商/批次记录退货前实际收货总质量（扣皮重，未预扣退货）；cp_new_aggregate。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_new_aggregate`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：采集批次收货/领用质量区间、含水、松散/铺设密度和规定级配/塑性限值；FHWA收缩/厚度示例不作默认。

###### 实际调湿采购水 (`finish_water_product`)

只有外部供给水作为产品投入；区分其来源/处理、供给已含运输、真实环境取水和内部回用。

- 选定流：实际调湿采购水
- 流属性/单位：体积 / m3
- 数量规则：本维修实际采购领用水毛体积；cp_finish_water_product。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_water_product`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：采集实测采购体积区间、精度及真实分配损失；转kg须有实际密度和温度。

###### 实际新层整饰电力供给 (`finish_electricity`)

使用时按供给和覆盖记录整饰/试验真实电量，不重复供应商已含电力。

- 选定流：实际新层整饰电力供给
- 流属性/单位：能量 / kWh
- 数量规则：实际应归属计量电量；未用须有证据；cp_finish_electricity。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_electricity`

数量范围证据需求：采集实测kWh区间和分配不确定性；不假设电网或面积系数。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收的既有无结合料碎砾石道路重新铺砾维修服务 (`accepted_regravelling`)

具体桩号有界维修在留用道路上完成规定天然磨耗层并关闭缺陷，于签署交接时完成；不产出整条新路或未来交通服务。

- 选定流：验收的既有无结合料碎砾石道路重新铺砾维修服务
- 流属性/单位：数量 / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_accepted_regravelling`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：一项验收路段定义精确；采集几何、密度/含水、材料和验收试验区间及规定公差；无通用层厚或道路寿命范围。

##### 废物流

###### 以废物移除的实际拒收集料或新层材料 (`rejected_layer`)

分别记录真实向外以废物交接的拒收天然集料流；原位重新平整/碾压材料在本节点内部循环，不作废物出口或验收输出。

- 选定流：以废物移除的实际拒收集料或新层材料
- 流属性/单位：质量 / kg
- 数量规则：按流和去向记录实际向外拒收料质量；cp_rejected_layer。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rejected_layer`

数量范围证据需求：从缺陷和废物凭证采集各流拒收/移除质量与不确定性；无默认拒收率。

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_repair | accepted_regravelling | 最终预期产出只有一项维修服务；不合格桩号不计入验收输出。全部失败操作、返工、复验及资源保留在最终维修中；无避免新路或替代信用。 |  |
| asset_attribution | prep_plant; finish_plant | 用实际资产记录列出节点、其他任务和报告期。按有证据的完整服务边界及实测利用量分配完整寿命制造、维护/更换和寿命终结负担；保留闲置/调遣归属与终结假设。事件/资产ID只有一个责任方；供应商服务覆盖不得与单列机具/燃料重复。 已结束寿命资产采用实测历史服务。在役资产可使用有依据的未来剩余服务、更换/终止和寿命终结情景；区分预测与观测，披露完整寿命利用量分母、来源、不确定性/敏感性及更新触发。不编造未来退役日期或默认寿命；缺少有据完整覆盖或分母才构成数据缺口，资产仍在役本身不阻止建模。 |  |
| period_custody | 所有清单行 | 将收货/领用、留用道路交接、返工、退货、验收和资产更换/终结关联至有日期的报告期。期初库存加收货总量（扣皮重，未预扣退货）须与安装、向外退货/废物、实测损失和期末库存核对。库存及负担向后期只结转一次；不得先净扣退货又记录向外流。 |  |
| outward_material | host_surplus; aggregate_return; prep_removed_waste; rejected_layer | 每个实际向外批次按法定交接和去向区分可用产品退货/剩料、废物或真实环境释放。回收或销售不自动产生联产品信用；有证据披露采用的分配并闭合负担与运输责任。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep_plant | prepare_host | 实际道路准备机具服务 | 实际场址/供应商记录 | asset_id; provider; task; event_id; start_time; end_time; service_hours_h; idle_hours_h; other_job_consumers; period; manufacture_maintenance_replacement_end_of_life_scope; utilization_denominator; attribution_share | 使用计时表/任务日志和供应商范围；列出本节点、整饰及其他合同/报告期，按asset_attribution一致分配完整寿命服务。 | h | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 保留全部寿命阶段证据、更换/终结决策及燃料/机具服务单一归属；时长支持链仍需核实。 已结束寿命资产采用实测历史服务。在役资产可使用有依据的未来剩余服务、更换/终止和寿命终结情景；区分预测与观测，披露完整寿命利用量分母、来源、不确定性/敏感性及更新触发。不编造未来退役日期或默认寿命；缺少有据完整覆盖或分母才构成数据缺口，资产仍在役本身不阻止建模。 |
| cp_prep_fuel | prepare_host | 按供给牌号区分的实际准备机具燃料 | 实际场址/供应商记录 | fuel_grade; asset_id; period; opening_kg; gross_issues_kg; closing_kg; other_job_kg; density_kg_per_m3; temperature_C; fuel_service_owner; outward_return_kg; outward_transfer_kg; transfer_owner; spill_kg; spill_medium_or_waste_receiver; spill_treatment; actual_consumed_kg; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | 核对领用、油箱和任务计量日志，共用消耗只归属本节点一次并保留校准和换算。期初加领用总量（扣容器皮重，未预扣退回）须与实际消耗、期末、真实退货/转移、泄漏闭合；实际处置按交接类型关联不同产品/废物/基本流，不计燃烧。 按 fuel_supply_fate 分列供应与燃烧；采集各互斥去向、真实分母及单位，保留未退回废物/损失的供应负荷，披露未知去向。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 真实燃料收据与实测密度；无默认消耗或燃烧因子；去向不明量不能视为已耗燃料，记录衡算缺口。 |
| cp_prep_electricity | prepare_host | 实际准备阶段电力供给 | 实际场址/供应商记录 | meter_id; supplier; event_id; start_kWh; end_kWh; period; other_job_kWh; attribution_share; service_scope | 读取校准电表或可追溯供应商分表，明确唯一节点/事件责任。 | kWh | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 保留原生kWh；准确能量属性支持链是单独声明的缺口。 |
| cp_prepared_host | prepare_host | 重新铺砾交接时准备完成的既有道路 | 实际场址/供应商记录 | road_id; segment_id; start_chainage_m; end_chainage_m; width_m; area_m2; crown_percent; crossfall_percent; longitudinal_grade_percent; distress; drainage_scope_owner; criterion_source; criterion_tolerance; inspection_result; gate_date; transfer_id | 测量实际桩号、宽度和高程，按合同标准检查修正病害和排水，记录签署铺前门槛并与host_to_finish配对。 | item | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 保留结构适用性、实测几何/单位和公差；不合格准备在本节点返工并承担重复负担。 |
| cp_host_surplus | prepare_host | 实际向外交接的可用既有道路剩料 | 实际场址/供应商记录 | lot_id; material_identity; gross_kg; tare_kg; moisture_percent; destination; product_custody; period; dispatch_id; transport_owner | 称量实际发运可用剩料并保留收方/产品交接证据；同批次不能同时作废物。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 校准称重、目的地及留用负担处理；无负的原生集料投入。 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| cp_prep_removed_waste | prepare_host | 以废物交接的实际准备移除物 | 实际场址/供应商记录 | waste_id; substance_material; waste_status; gross_kg; tare_kg; moisture_percent; producing_task; period; carrier; receiving_facility; treatment; transport_owner | 将废物转移/地磅记录与真实准备任务和去向关联，分别核对留用材料和产品出口。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 真实交接类型、接收方和运输责任；全部准备及返工废物保留在维修负担。 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| cp_prep_dust | prepare_host | 按粒径区分的实际准备粉尘大气释放 | 实际场址/供应商记录 | event_id; activity; material_identity; particle_fraction; medium; mass_kg; sampling_method; detection_limit; actual_moisture_percent; control_state; period; factor_source; uncertainty; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty | 测量排放或用有实际活动数据的适用方法；区分产生、捕集及真正空气释放。保留实际方法/因子出版物或原始试验引用、单位、机具/燃料/材料/含水/控制/地域适用性、活动量、采样外推和传播不确定性；派生作业总量不是直接测量。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 粒径/介质和方法适用性；不把移除集料质量自动变为空气粉尘。 |
| cp_prep_exhaust | prepare_host | 实际准备燃烧尾气物种 | 实际场址/供应商记录 | asset_id; fuel_grade; species; medium; emission_mass_kg; activity; engine_control; method_source; uncertainty; period; service_scope_owner; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty | 用实际发动机/燃料记录和有据物种方法或测量，保留供应商已覆盖排放的剔除。保留方法/因子来源、单位、实际技术/燃料/材料/含水/控制/地域适用性、活动量、采样外推与传播不确定性；派生总量不冒充直接测量。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 物质身份和接收介质；无无来源氧化或排放因子。 |
| cp_host_to_finish | regravel_finish | 新磨耗层铺设接收的已准备既有道路 | 实际场址/供应商记录 | transfer_id; road_id; segment_id; start_chainage_m; end_chainage_m; area_m2; preparation_gate_date; criterion_source; criterion_tolerance; receiving_inspection; period | 将交接ID和实际测量路段与准备交接配对，铺撒前检查实际物理状态。 | item | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 无第二次采购或上游道路收费；保留准备负担，不重复参考输出。 |
| cp_new_aggregate | regravel_finish | 供给门处实际规定天然磨耗层集料 | 实际场址/供应商记录 | lot_id; supplier; natural_origin; material_grade; grading_test; plasticity_test; gross_kg; tare_kg; moisture_percent; loose_density_kg_per_m3; placed_density_kg_per_m3; receipt_date; installed_kg; outward_return_kg; waste_kg; closing_stock_kg; source_gate; haul_coverage | 核对地磅收货总量（扣皮重，未预扣退货）与货单、实际铺设/安装材料、向外退货/拒收及期末库存；体积换算前测量对应状态密度。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 批次质量可追溯且秤经校准；不先净扣后再退货，留库材料结转其负担。 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| cp_aggregate_haul | regravel_finish | 供应商覆盖之外的实际全维修物流 | 实际场址/供应商记录 | leg_id; producing_node; leg_owner; cargo_lot_asset_id; carrier; vehicle; source; destination; cargo_t; distance_km; empty_distance_km; loading_basis; period; supplier_provider_scope | 采用regravel_finish主责的全维修物流账，核对真实发运/承运记录及producing_node/leg_owner矩阵，覆盖准备/整饰出口、供给和调遣。按实际装载/空返方法计算吨公里，剔除供应商已含运输。 | tkm | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | leg_id唯一，产生节点和主责清楚；材料出口归原节点，运输数量和负担不在原节点重复。实际货物/距离单位；运输支持链未核实。 |
| cp_finish_water_product | regravel_finish | 实际调湿采购水 | 实际场址/供应商记录 | water_supplier; supply_state; meter_id; received_m3; issued_m3; closing_m3; return_m3; internal_reuse_m3; temperature_C; density_kg_per_m3; period; supply_transport_scope | 读取校准收货/领用表或可追溯洒水车供水记录，核对水箱库存和实际调湿；内部循环不作新供给。 | m3 | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 不假设降雨、采购水和取水等价；零用量须实际工法证据。 |
| cp_finish_water_abstraction | regravel_finish | 本维修实际环境取水 | 实际场址/供应商记录 | source_id; environmental_compartment; permit; meter_id; abstracted_m3; period; reuse_m3; pump_energy_owner; temperature_C; density_kg_per_m3 | 读取校准取水表及水源/许可记录，区分环境取水、采购供给和回用。 | m3 | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 须真实水源介质及水支持/单位链；未使用也须明确记录。 |
| cp_finish_plant | regravel_finish | 实际铺设与压实机具服务 | 实际场址/供应商记录 | asset_id; provider; event_id; operation; start_time; end_time; service_hours_h; idle_hours_h; pass_count; other_node_job_consumers; period; lifecycle_scope; utilization_denominator; attribution_share | 使用实际小时/任务日志与供应商覆盖，和共用资产账配对；制造、维护/更换和寿命终结在全部任务/报告期只计一次。 | h | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 不遗漏资本阶段或重复单列燃料；保留真实更换/终结和覆盖缺口。 已结束寿命资产采用实测历史服务。在役资产可使用有依据的未来剩余服务、更换/终止和寿命终结情景；区分预测与观测，披露完整寿命利用量分母、来源、不确定性/敏感性及更新触发。不编造未来退役日期或默认寿命；缺少有据完整覆盖或分母才构成数据缺口，资产仍在役本身不阻止建模。 |
| cp_finish_fuel | regravel_finish | 按牌号区分的实际铺设、洒水和碾压燃料 | 实际场址/供应商记录 | fuel_grade; asset_id; event_id; period; opening_kg; issues_kg; closing_kg; other_job_kg; density_kg_per_m3; temperature_C; service_scope_owner; outward_return_kg; outward_transfer_kg; transfer_owner; spill_kg; spill_medium_or_waste_receiver; spill_treatment; actual_consumed_kg; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | 核对燃料领用、库存与机具活动，计入重复铺撒/碾压，共用消耗唯一分配。期初加领用总量（扣容器皮重，未预扣退回）须与实际消耗、期末、真实向外退货/转移及泄漏闭合；实际处置按交接类型关联不同产品/废物/基本流，不计燃烧。 按 fuel_supply_fate 分列供应与燃烧；采集各互斥去向、真实分母及单位，保留未退回废物/损失的供应负荷，披露未知去向。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 校准计量和真实批次密度；不自动等同尾气；去向不明不能算燃烧，记录衡算缺口。 |
| cp_finish_electricity | regravel_finish | 实际新层整饰电力供给 | 实际场址/供应商记录 | meter_id; supplier; event_id; opening_kWh; closing_kWh; period; other_job_kWh; attribution_share; service_scope | 读取真实校准电表/分表和可追溯任务记录，责任范围内计入返工和试验。 | kWh | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 保留原生kWh；能量支持链与供应商身份须核实。 |
| cp_accepted_regravelling | regravel_finish | 验收的既有无结合料碎砾石道路重新铺砾维修服务 | 实际场址/供应商记录 | road_id; segment_id; start_chainage_m; end_chainage_m; width_m; treated_area_m2; layer_thickness_mm; crown_percent; longitudinal_grade_percent; moisture_percent; compacted_density_kg_per_m3; density_test_method; grading; plasticity; actual_water_roller_method; weather; criterion_source; criterion_tolerance; test_result; defect_id; rework_closeout; handover_date; reporting_period; client_signoff | 测量实际完工路段，按现行合同条件进行规定材料/几何/含水/压实试验，保留签署验收和全部缺陷/复验关闭。实际桩号/面积作为限定信息，不作为计数等价输出。 | item | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 不计未验收桩号，不设通用性能目标；保留完整准备、维修及返工负担。 |
| cp_aggregate_return | regravel_finish | 实际向外退回的可用新集料 | 实际场址/供应商记录 | dispatch_id; lot_id; material_identity; gross_kg; tare_kg; moisture_percent; recipient; product_custody; transport_owner; period; input_receipt_id | 用发运称量和接收方记录，与new_aggregate收货总量（扣皮重，未预扣退货）及期末库存核对，真实负担/退货处理只保留一次。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 不得出口留库材料或将同一拒收批次分类两次。 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| cp_rejected_layer | regravel_finish | 以废物移除的实际拒收集料或新层材料 | 实际场址/供应商记录 | defect_id; originating_event; stream_id; material_identity; reason; rework_path; gross_kg; tare_kg; moisture_percent; waste_status; recipient; treatment; transport_owner; period | 将级配/几何/压实不合格关联真实返工或移除记录，称量向外废物；替换集料和重复操作计入维修。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 关闭每个拒收路径，不与可用退货、原位库存或真实粉尘释放重复。 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| cp_captured_runoff | regravel_finish | 实际捕集并外送处理的径流或废水 | 实际场址/供应商记录 | stream_id; receiver; treatment; captured_m3; mass_kg; density_kg_per_m3; temperature_C; solids_test; waste_custody; period; transport_owner | 读取真实水箱/称量与接收方记录，结合不确定性核对加水、留存含水、回用与真实释放。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 废物去向和密度证据；不同时重复作基本流水/污染物释放。 |
| cp_finish_dust | regravel_finish | 按粒径区分的实际铺层粉尘大气释放 | 实际场址/供应商记录 | event_id; operation; aggregate_lot; substance; particle_fraction; medium; mass_kg; activity; moisture_percent; controls; sampling_method; method_source; uncertainty; period; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty | 用真实场地采样或有实际操作输入的合理方法，计入返工排放，仅扣确证捕集量。保留方法/因子出版物或原始试验引用、单位、实际技术/燃料/材料/含水/控制/地域适用性、活动量、采样外推及传播不确定性；派生作业总量不是直接测量。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 须真实粒径和接收介质；无证据不使用散料转粉尘系数。 |
| cp_finish_exhaust | regravel_finish | 实际新层整饰燃烧尾气物种 | 实际场址/供应商记录 | asset_id; fuel_grade; species; medium; mass_kg; fuel_activity; engine_control; method_source; uncertainty; event_id; period; coverage_owner; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty | 使用真实发动机/燃料日志和适用有据物种方法或测量，防止与机具/供应商数据集重复。保留实际方法/因子引用、单位、技术/燃料/材料/含水/控制/地域适用性、活动量、采样外推和传播不确定性；派生总量不是直接测量。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 保留化学身份、介质和方法有效性；无泛尾气交换或默认因子。 |
| cp_finish_water_release | regravel_finish | 维修实际向环境介质释放的水 | 实际场址/供应商记录 | pathway_id; source_water; medium; release_m3; moisture_retained_m3; reuse_m3; captured_outward_m3; measured_inflow_m3; storage_change_m3; density_kg_per_m3; temperature_C; method_source; uncertainty; period; new_aggregate_incoming_water_m3; retained_host_initial_water_m3; retained_host_final_water_m3; rainfall_m3; external_runon_m3; rainfall_runon_evidence; unmatched_gap_m3 | 核对实测供水/取水、储存/留存水分、回用与捕集废水，各环境路径独立有据。纳入新集料和留用道路初末实测含水、跨界材料水，仅有证据时纳入真实有影响降雨/外来径流。这些是衡算边界项，不是额外采购水或信用；缺测保留明确衡算缺口。 | m3 | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 无证据不将残差派往空气/水/土壤；真实物种释放单独展开，体积支持链须核实。 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| repair_normalization | 所有清单行 | 将本验收合同路段唯一归属节点的真实事件汇总，含返工，按每参考流表达数量。regravel_finish主责物流账通过产生节点/运输腿责任矩阵使每腿只计一次。内部道路交接配对，不重复最终输出。 | 节点事件ID；合同验收；全部节点协议 | 一项声明验收维修的交换数量 |  |
| aggregate_reconcile | new_aggregate; aggregate_return; rejected_layer | 在相同含水/状态核对期初库存加收货总量（扣皮重，未预扣退货），与安装材料、真实向外可用退货、向外废物、有据损失和期末库存闭合。只用实际密度推导松散/压实体积；FHWA示例不是换算因子。 | cp_new_aggregate; cp_aggregate_return; cp_rejected_layer; 实际密度/含水试验 | 批次材料衡算和结转库存负担 | fhwa-gravel-2015 |
| service_attribution | prep_plant; finish_plant | 按实测利用量及有据闲置/调遣/终结处理，将共用资产完整寿命负担归属真实节点/任务/报告期；事件只有一个责任方，不与单列燃料/能源/运输重复。 | cp_prep_plant; cp_finish_plant; 完整资产生命周期账；全部使用者/报告期 | 应归属机具服务和覆盖缺口 |  |
| fuel_consumption | prep_fuel; finish_fuel | 同一燃料、节点及事件范围采用fuel_supply_fate：B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel，要求完整、独立有证据且互斥的最终去向。G_fuel已扣期末库存，内部领用不得再作外部收货。扣除实际未燃烧废物和未收集燃料损失，不能扣事故泄漏总量。回收并留在期末库存的燃料已从G_fuel扣除；回收进入废物的燃料只在W_fuel计一次。未知去向保留缺口，不推定燃烧。只有有证据的B_fuel驱动燃烧排放；上游燃料供应仍按声明出口约定采用G_fuel。 | cp_prep_fuel; cp_finish_fuel; 退货/转移/泄漏去向记录 | 实际牌号特定消耗交换及单独归属出口 |  |
| emission_calculation | prep_dust; prep_exhaust; finish_dust; finish_exhaust | 按实测排放速率乘实际活动时长，或真实适用活动量乘有据物种/粒径特定因子，计算作业排放质量。记录方法/因子来源、单位、实际机具/燃料/材料/含水/控制与接收介质适用性、采样/外推和传播不确定性；派生总量不是直接测量。 | 真实速率/时长或活动量/因子及方法引用；全部四项排放协议 | 计算的真实作业排放及方法/证据缺口披露 |  |
| water_balance | finish_water_product; finish_water_abstraction; captured_runoff; finish_water_release | 将采购/取水、库存变化、新集料带入含水、留用道路初末含水与真实有影响降雨/外来径流，和留存水、捕集出流及有据释放核对。天气/材料含水是实测衡算项，不是额外采购或信用。内部回用配对；任何缺测项保留缺口，不自动当蒸发。转kg使用实际密度/温度。 | cp_finish_water_product; cp_finish_water_abstraction; cp_new_aggregate; cp_captured_runoff; cp_finish_water_release; 既有道路含水和实际天气/径流证据 | 路径数量、不确定性及未闭合衡算缺口 |  |
| fuel_supply_fate | finish_fuel; prep_fuel | 对每种真实燃料身份及互不重叠的节点/事件期间，G_fuel = 期初可用燃料 + 外部接收量 - 期末可用燃料库存（含设备油箱）；扣除容器皮重，边界内领用/转移不再作新增接收。G_fuel 为真实可用向外退回 U_fuel、向外转移 X_fuel、收集的未燃燃料 W_fuel 和未收集燃料 P_fuel 扣除之前的物理产品输入总量。各去向互斥并分别解析实际产品、废物流或物质/介质身份；泄漏事件总量仅作核查，不重复扣除。W_fuel 和 P_fuel 指所含燃料质量，不是受污染吸附物或废水的总质量。仅在完整且有证据的去向台账下，B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel；未知去向保留缺口，不假定已燃烧。只有有独立依据的 B_fuel 驱动燃烧排放。所有未退回的未燃燃料、废物和损失均保留上游供应负荷；真实可用退出物仅可携带有记录的原始未用材料负荷，不再次扣减净输入或给予避免生产信用。期初/期末库存负荷只结转一次。各物理量仅除以 D_fuel 一次；D_fuel 为本 PCR 第3-4节规定的参考单位下独立实测的正值验收批量（验收体积、面积、轴向长度、钢材质量或完整验收计数），不是燃料量或中间产出。现有 actual_consumed/燃料消耗字段是燃烧活动记录，不能替代上游输入 G_fuel。供应商已含燃料和排放只设一个责任方，不重复加入重叠的前景供应或燃烧。 | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |
| actual_host_handoff | prepared_host; host_to_finish | 从签署验收的合同路段 ID 独立记录 N_host，每个完整验收声明路段仅计一次，不同几何分别保留。每个真实准备/接收门槛记录批准交接 ID、当前状态、时间和实测几何，由这些记录确定交接计数。仅配对相同物理状态/交接；真实纠正交接保留实际活动及原负荷一次。道路身份接口不是新采购道路或共产品。各实测门槛计数除以 N_host；不由最终参考量一推定中间计数，不将重复准备计作另一验收路段。 | cp_prepared_host; cp_host_to_finish; accepted segment IDs; actual handoff IDs/state/count; N_host | paired actual host gate quantities |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| qualified_geometry | prepared_host; accepted_regravelling | 保留实际道路适用性、铺前门槛、最终桩号/宽度/面积/厚度/路拱/排水、材料/含水/密度方法、单位、标准来源与公差。 | 测量/试验/检查及签署门槛记录 |
| complete_events | 所有清单行 | 覆盖每批次/操作/报告期，含返工/复验、有日期物理ID与有据未使用声明；缺失不等于零。 | 有日期账本、运输腿责任矩阵和缺陷关闭 |
| honest_ranges | 所有清单行 | 数据集定稿前以真实采集/计算不确定性替换具体数量范围证据需求；精确计数定义不确立材料/能源/生产率范围。 | 测量精度、真实样本区间、方法适用性 |
| real_identities | 所有清单行 | 绑定前核实每项实际不同材料/供应商/废物/物种/属性/单位链；保留原生单位与实际范围，不加总异质物或选近似UUID。 | 供应商/接收方/物质及已核实支持证据 |
| full_asset_life | prep_plant; finish_plant | 覆盖制造、使用/维护/更换和寿命终结/终止；全部使用者/任务/报告期、实测利用量、真实供应商覆盖与缺口。 | 完整寿命供应商/资产材料 |
| uncertainty_coverage | 所有清单行 | 记录原始测量/采样及计算不确定性、密度/含水、库存/退货/转移/泄漏交接、真实排放方法和分配敏感性；保留实际集料/既有道路含水及天气/径流水衡算项和未闭合缺口。 | 校准、实际试验、原始记录、方法引用和情景披露 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| host_gate | prepare_host | 要求初始适用性、实际翻松/整形/排水修正及铺前验收门槛。排水责任不明或结构不适用时不采用本路线。 | fhwa-gravel-2015 |
| repair_gate | accepted_regravelling | 核实实际桩号、天然集料来源/级配/塑性/含水、均匀完工几何、实际规定压实/质量试验、天气和签署交接；不假设通用厚度、收缩或未来寿命。 | fhwa-gravel-2015 |
| balance_paths | 所有清单行 | 结合不确定性检查收货总量（扣皮重，未预扣退货）/领用材料和水衡算、留用道路处理、内部回用、真实向外交接及期末库存；库存/退货或负担不重复。计验收输出前关闭全部缺陷/复验/返工路径。 |  |
| asset_periods | prep_plant; finish_plant | 检查共用资产完整阶段、全部使用者/报告期、利用量分母、更换/终结和单一事件归属；生命周期/支持链覆盖缺失阻止数据集定稿。 |  |
| identity_range | 所有清单行 | 将条件材料/服务/废物/物质需求展开为实际不同交换。核实准确流/属性/单位身份及每项实际数值不确定性；不将泛粉尘当作粒径组分或把燃料当作尾气。缺失数据明确记录，不等于零。 |  |
| validate_fuel_supply_fate | finish_fuel; prep_fuel | 按实际燃料协议、库存和供应商覆盖核查 G_fuel、B_fuel 及各互斥去向。未退回的未燃废物/损失保留上游负荷；去向、燃料组分或正值 D_fuel 未解决时，不得宣称燃料定量清单完整。不以燃烧活动替代采购燃料，不同时扣减泄漏总量及其各组成去向。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一次验收有界重新铺砾维修的前景数据包，支持process/lifecyclemodel投影 |
| downstream_use | secondary_dataset；门槛、单位和完整上游范围匹配时可作background_dataset |
| allowed_use | 声明的适用天然碎砾石道路及实际合同的增量维修建模 |
| excluded_use | 完整新路、结构重建、有结合料/再生路线、未来交通运营、等价寿命或避免替换主张 |
| required_metadata | 参考限定信息；实际两节点门槛；供给总量（扣皮重，未预扣退货）与出口交接；日期/报告期；来源及运输覆盖；资产使用者与完整寿命边界 |
| required_quality_disclosure | 测量/不确定性覆盖；拒收/返工桩号；身份/支持链和范围缺口；供应商覆盖；生命周期归属与库存结转 |
| update_trigger | 既有道路适用性、维修范围、集料/来源、批准铺设/验收工法、实际机具/覆盖、排水责任或证据变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| fhwa-gravel-2015 | official_guidance | 美国联邦公路管理局，Gravel Roads Construction and Maintenance Guide，2015年8月，第3.18–3.21节，印刷页71–74。https://www.fhwa.dot.gov/construction/pubs/ots15002.pdf | 新铺砾前准备；松散与完工状态差别；实际运输/铺撒控制；堆条/均料/铺撒及实际调湿/碾压。示例数量不是PCR默认值。 |
