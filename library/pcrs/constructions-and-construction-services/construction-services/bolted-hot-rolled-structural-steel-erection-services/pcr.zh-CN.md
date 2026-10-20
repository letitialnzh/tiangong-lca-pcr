---
pcr_id: pcr.constructions-and-construction-services.construction-services.bolted-hot-rolled-structural-steel-erection-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 螺栓连接热轧结构钢安装服务

## 1. 范围与适用性

本规则适用于工厂制作的热轧钢柱、梁和支撑通过现场永久螺栓连接完成的安装服务。实际责任范围内的钢垫片、柱脚完成和灌浆、附带表面准备及补涂、临时支撑控制及清理属于完整作业。使用实际施工和验收记录，不预设耗用率、设计性能或统一工期。

工厂制作、结构现场焊接、冷弯型钢框架、独立完整涂装或防火施工、新基础及锚固件制造和整栋建筑施工不在范围内。出现这些工作或真实独立交接时，须重新审查范围。FHWA 检查指引识别起吊、现场连接、支承找正及现场涂覆责任；OSHA 材料仅支持起始接口和稳定性职责的识别，不作为普遍验收阈值或 LCA 消耗数据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.bolted-hot-rolled-structural-steel-erection-services |
| classification_refs | CPC 3.0 54550; narrower |
| covered_products | 现场永久螺栓连接的工厂制作热轧钢柱、梁及支撑安装服务 |
| excluded_products | 工厂制作；结构现场焊接；冷弯框架；独立完整涂装或防火施工；新基础及锚固件制造；整栋建筑施工 |
| representative_product | 找正且稳定、已验收永久螺栓钢组合体的安装服务 |
| production_route | 收货堆放 → 起吊和初始连接 → 找正和永久螺栓连接 → 责任内柱脚和修补完成 → 临时支撑解除和验收 |
| market_state | 按实际已验收永久净钢质量计量的完成安装服务；不是交付钢材自身的制造服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已验收永久螺栓热轧结构钢组合体的安装服务 |
| How much | 1 千克已验收永久净钢 S；每个作业只计唯一保留钢组分 |
| How well | 实际项目找正及永久连接检查、稳定性、责任内柱脚及附带修补完成和受控临时支撑解除均已验收 |
| How long or cycle | 一个实际完整安装作业，涵盖收货堆放、起吊和初始连接、找正和永久螺栓连接、责任内柱脚和修补完成、支撑解除和验收的实际时段及报告期；无默认天数或建筑寿命 |
| reference_flow_link | `reference_service` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 螺栓连接热轧结构钢安装服务 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 项目及场址; 构件编号和钢级; 制作和原厂涂层状态; 永久连接及垫片清单; 完整产品与钢组分桥接; 基础和锚固接口放行; 实际阶段及报告期; 安装设备和服务覆盖; 项目检查及验收关口; 灌浆和补涂责任; 临时支撑解除; 库存和拒收去向 |

必需限定项须保留在数据包元数据、参考流说明或等效字段。未达到关口的组合体不形成此参考输出。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| accepted_steel_basis | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | S 是唯一验收永久构件、连接和钢垫片的实际净钢质量，采用 cp_steel_erect_material 独立计量；按 derive_accepted_steel 和 normalize_concrete_exchange 生成每 1 kg 参考流，不以进场完整涂覆产品质量代替 S。 |
| same_state_bridges | fabricated_steel_members; permanent_connection_steel; base_completion_products; incidental_surface_repair_products; tool_temporary_replacement_products; diesel_fuel; water_supplied; lubricants_other_operating_products; packaging_received; direct_freshwater_abstraction; reference_service; usable_material_exits; returnable_packaging_exit; steel_scrap_waste; coating_grout_residue_waste; captured_preparation_solids; packaging_waste; oily_consumable_waste; collected_wastewater_slurry; fossil_co2_air; other_engine_species_air; physical_particulate_air; volatile_species_air; water_vapour_air; specific_direct_water_releases | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用实测同状态称重或可追溯质量记录及供应商组分桥接解释数量、体积、钢和涂层转换；长度、面积和设计几何本身不确定质量。湿废物、纯水和干组分不得混同。 |
| utility_service_units | electricity; hired_equipment_services | Energy; Duration | kWh; h | 电量保留 kWh，服务保留实际小时，不能以热值、人工时或复合面积时间等属性替代。各具体交换须核实自己的支持身份及换算；缺口须披露。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

质量行的支持链为上列 Mass 与 Units of mass，kg 为参考单位。实际辅助长度或面积记录如需身份引用，分别采用 Length `838aaa23-0117-11db-92e3-0800200c9a66` / Units of length `838aaa22-0117-11db-92e3-0800200c9a66` 和 Area `93a60a56-a3c8-19da-a746-0800200c9a66` / Units of area `93a60a57-a3c8-18da-a746-0800200c9a66`；这些观测不生成额外产品。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已放行基础及锚固接口、现有几何和荷载路径、通行条件及有构件编号和连接清单的交付构件 |
| starting_condition_role | 观测的接口条件；既有资产不是此安装服务新制造的产品 |
| product_classification_scope | 分类仅为映射背景；本服务限于永久现场螺栓连接的热轧构件安装 |
| recursive_input_rule | 遇到同类先前安装服务时按实际供应商、状态、责任边界及交接记录，不递归重建既有支承、不复制验收钢输出；另一个责任方真实交接须审查 |
| upstream_dataset_requirement | 提供实际制作状态构件、连接产品、材料、公用工程和设备服务的供应链数据及边界；供应商已含负荷只计一次，未知供应链覆盖须披露 |
| disclosure | 披露起始放行证据、施工期、各方责任、设备覆盖、实际验收与解除、在制品和拒收状态及未决数据 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_start | steel_erect | 从已放行的基础、锚固及通行接口和已标识交付构件开始。把既有支承几何、荷载路径及接口放行作为起始条件观测，不为设计批准、几何或就绪状态虚构产品卡。 | osha-steel-site |
| boundary_assembly | steel_erect | 负责起吊、初始连接、找正、永久现场螺栓连接及实际责任内钢垫片、非钢柱脚完成、附带表面准备和补涂及清理。组件角色为制作好的柱、梁、支撑及永久螺栓、螺母、垫圈、连接板和垫片。初始连接或起重机脱钩不等于最终验收；采用实际项目连接检查及稳定性关口。 | fhwa-inspection-steel; osha-steel-stability |
| boundary_gate | reference_service | 终止于一项有记录的找正、永久螺栓连接且稳定的已验收组合体，全部实际责任内灌浆或柱脚及表面修补义务和受控临时支撑解除均须完成。不适用义务须有证据；未决义务阻止宣布到达该关口。不含后续建筑使用或拆除。 | steel-erection-accounting-method; osha-steel-stability |
| boundary_phases | steel_erect | 按实际日期和报告期索引收货和堆放、起吊和初始连接、找正和永久螺栓连接、责任内柱脚和修补完成、支撑解除和验收各阶段。每笔材料、设备、公用工程、输出、返工和替换事件均关联其阶段和责任方。保留未结库存及未完成期间，不把它们提前转为验收。 | steel-erection-accounting-method |
| boundary_node | steel_erect | 由一个负责节点拥有完整安装作业及其内部修配、重拧螺栓和补涂循环。阶段记录、库存移动及既有资产状态变化是观测，不是独立产品。真实存在的另一个责任方材料状态交接须有转移标识，并明确审查节点和边界，不得删除该交接。 | steel-erection-accounting-method |
| boundary_scope_review | steel_erect | 工厂制作、计划或必需的结构现场焊接、冷弯型钢框架、独立完整涂装或防火施工、新基础和锚固件制造及整栋建筑施工均在本类别之外。实际工作与此相反时须在完成前审查范围并记录交接；附带修配不授权扩大制作路线。 | steel-erection-accounting-method |
| boundary_assets | steel_erect | 标识起重机、登高及物流设备、临时支撑和共用仪表及所有实际使用方和使用期。可复用资产质量及保管情况作为观测；制造、维护和运行遵循实际服务商或自有边界和有证据的归属，不假定寿命，也不计入整件资产负荷。 | steel-erection-accounting-method |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：永久钢连接件及垫片 (`permanent_connection_steel`)

过程／待建立交换的方向／类型：`steel_erect` / `inputs` / `product`.

按永久连接清单记录实际螺栓、螺母、垫圈、连接板和钢垫片；必须有发生证据，清单未知时保留缺口。各具体 SKU 和状态分别计量，并区分完整产品与钢组分质量。数量范围需要实际验收连接及垫片清单和实测质量，不采用统一的螺栓与构件质量比例。只有唯一永久保留的钢进入 S。

- 采集对象：永久钢连接件及垫片
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：责任范围内的非钢柱脚完成产品 (`base_completion_products`)

过程／待建立交换的方向／类型：`steel_erect` / `inputs` / `product`.

仅在安装方承担该工作时纳入实际非钢灌浆或其他柱脚完成产品；发生状态记录为是、否或未决。记录供应配方质量、实际柱脚几何、混合状态和施工量。数量范围需要灌浆配方、填充体积及实测同状态换算。另购拌合水归入 water_supplied，配方内水保留在本产品中；灌浆不进入 S。

- 采集对象：责任范围内的非钢柱脚完成产品
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：附带表面准备及补涂产品 (`incidental_surface_repair_products`)

过程／待建立交换的方向／类型：`steel_erect` / `inputs` / `product`.

纳入安装责任内实际获准的附带表面准备化学品、磨料和补涂材料；独立完整涂装须审查范围。每个具体产品和状态及其施用或清理事件仅记录一次。数量范围需要修补面积、涂膜体系、固含量或覆盖率及施用和清理记录。新增产品与原厂涂层、另加水、润滑品及固体工具替换件分开；配方质量不等于排放物种质量。

- 采集对象：附带表面准备及补涂产品
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：消耗的修配工具及临时支撑替换材料 (`tool_temporary_replacement_products`)

过程／待建立交换的方向／类型：`steel_erect` / `inputs` / `product`.

记录实际固体切割和钻孔耗材及消耗性临时支撑替换材料，事件状态为是、否或未决。数量范围需要实际工具和修配及替换发放、使用记录和当前状态质量。可重复使用支撑资产在资产台账中观测；永久连接钢、表面修补磨料、流体、水和包装各有互斥角色。不得把全部可重复使用资产质量计作消耗性替换。

- 采集对象：消耗的修配工具及临时支撑替换材料
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：其他运行润滑品及流体 (`lubricants_other_operating_products`)

过程／待建立交换的方向／类型：`steel_erect` / `inputs` / `product`.

逐项标识实际运行油品和流体及另购泄漏或清理载体，各保留自己的 SKU、状态及发放、维护或泄漏事件。数量范围需要这些事件及实测质量或密度桥接。本角色排除灌浆、涂覆和表面准备产品、固体工具替换件、燃油、水及包装。服务商已涵盖的维护产品不是额外自有投入；仅凭可用油量不能定量受污染布料废物。

- 采集对象：其他运行润滑品及流体
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：单独供应的安装设备服务 (`hired_equipment_services`)

过程／待建立交换的方向／类型：`steel_erect` / `inputs` / `product`.

对实际起重、登高或物流设备服务，标识供应商、设备以及已含燃油、维护和资本覆盖。数量范围需要真实占用及工况时段和独立 S；人工时间及假定班次不能替代。各服务分别解析并核实 Duration 和小时支持链。实体器具质量是资产观测，不是另一笔消耗服务或未用退货。

- 采集对象：单独供应的安装设备服务
- 流属性/单位: Duration / h
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_asset`
- 来源: `steel-erection-accounting-method`

#### 采集要求：安装作业收到的包装 (`packaging_received`)

过程／待建立交换的方向／类型：`steel_erect` / `inputs` / `product`.

包装随货到达或单独发放时，标识实际材料、当前状态和保管责任。数量范围需要供应商及拆包记录、实测包装质量和退回及复用覆盖。构件产品质量若按不含包装规定，包装须排除；否则提供实测分离桥接。跟踪可复用包装库存，不反复计入全部制造负荷，也不将其作为钢质量 S。

- 采集对象：安装作业收到的包装
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：直接淡水取用 (`direct_freshwater_abstraction`)

过程／待建立交换的方向／类型：`steel_erect` / `inputs` / `elementary`.

只有实际直接从环境取水才是基本输入，须标识淡水来源和介质。数量范围需要独立取水计量、实际作业需求和独立纯水组分平衡。不得把供应商供水再次表示为环境取水。取水状态未知时保留缺口，用水需求差额不能产生取水交换。

- 采集对象：直接淡水取用
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_release`
- 来源: `steel-erection-accounting-method`

#### 采集要求：可用材料退回及转出 (`usable_material_exits`)

过程／待建立交换的方向／类型：`steel_erect` / `outputs` / `product`.

按具体 SKU、状态及接收方记录实际可用未用材料退回或另有证据的转移。已用可复用设备归还属于资产保管，不属本未用材料角色。数量范围需要相匹配可用量、实测出库及接收确认；异质退货百分比不能定义一条流。在制品留存是库存观测。回收或降级需要实际目的地，不能由构件失踪推定。

- 采集对象：可用材料退回及转出
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：离开保管边界的可退包装 (`returnable_packaging_exit`)

过程／待建立交换的方向／类型：`steel_erect` / `outputs` / `product`.

按身份、状态和接收方记录实际可复用包装退回或转移。数量范围需要相应可用包装及保管、出库记录。对每个物件和事件，退回、留存复用及丢弃包装是互斥去向。退回不自动产生避免新包装的抵扣；所有权或负荷边界变化须披露。

- 采集对象：离开保管边界的可退包装
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：现场废钢及拒收钢废物 (`steel_scrap_waste`)

过程／待建立交换的方向／类型：`steel_erect` / `outputs` / `waste`.

记录实际修配边角料或作为废物出库的拒收钢，保留构件及状态、实测质量和接收方。数量范围需要现场修配及拒收事件和独立可用钢库存；工厂制作废料平均值不能规定现场损耗。留待返工或在制的拒收物不是已出库废物，也不进入验收 S。不得把随废钢去除的涂层再次作为完整残余物计入。

- 采集对象：现场废钢及拒收钢废物
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：丢弃的涂层或灌浆残余物 (`coating_grout_residue_waste`)

过程／待建立交换的方向／类型：`steel_erect` / `outputs` / `waste`.

实际涂层和灌浆残余物须分别具有具体废物状态和处理接收方；本条件角色不是一个混合固定身份。数量范围需要原厂涂层、新增产品及水组分池和施用、去除记录。湿残余物包括有证据的含水部分；钢质量 S 不是可用涂层池。残余物与捕集固体、含油废物及浆液互斥归属。

- 采集对象：丢弃的涂层或灌浆残余物
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：丢弃的包装 (`packaging_waste`)

过程／待建立交换的方向／类型：`steel_erect` / `outputs` / `waste`.

逐项记录实际丢弃包装的材料、状态和处理接收方。数量范围需要相匹配包装可用量、实测废物及独立观测污染物。互斥核对退回、复用、留存库存和废物；污染物不能仅从包装质量推导。同一物件不得同时作为可用包装转出报告。

- 采集对象：丢弃的包装
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：含油运行及清理耗材废物 (`oily_consumable_waste`)

过程／待建立交换的方向／类型：`steel_erect` / `outputs` / `waste`.

实际含油耗材须明确油品或流体、载体或布料或吸收材料、含水状态和接收方。数量范围需要独立可用组分池和实测废物状态质量。仅凭油量不能约束湿布或吸收材料混合物。分清服务商维护覆盖，同一油、载体或水部分不得进入其他废物流；泄漏状态未知不等于零。

- 采集对象：含油运行及清理耗材废物
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

#### 采集要求：其他实际发动机排放物质 (`other_engine_species_air`)

过程／待建立交换的方向／类型：`steel_erect` / `outputs` / `elementary`.

仅将实际有证据的发动机物质展开为分别识别的空气交换，保留报告物种或总量口径及适用子介质。数量范围需要确切物质及口径、发动机、燃油、工况和适用因子或模型不确定性；本概念角色没有有用的通用界限。未决物种不得使用通用 NOx、SOx 或污染物 UUID。物种覆盖未知时仍属不完整。

- 采集对象：其他实际发动机排放物质
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_release`
- 来源: `steel-erection-accounting-method`

#### 采集要求：作业产生的未捕集空气颗粒 (`physical_particulate_air`)

过程／待建立交换的方向／类型：`steel_erect` / `outputs` / `elementary`.

对实际颗粒释放，标识粒径和组成、源材料及空气子介质。数量范围需要来源池可用量及独立支撑的产生和捕集或实测释放。不得假定粉尘百分比，也不得把未找到的捕集固体变为空气颗粒。排除已在捕集固体、废钢或浆液中的部分；区分材料粉尘与燃烧物种。

- 采集对象：作业产生的未捕集空气颗粒
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_release`
- 来源: `steel-erection-accounting-method`

#### 采集要求：实际挥发化学物种空气排放 (`volatile_species_air`)

过程／待建立交换的方向／类型：`steel_erect` / `outputs` / `elementary`.

对实际挥发释放，逐一明确化学组分和接收空气子介质。数量范围需要原厂涂层或新增清洁及涂覆产品的配方和确切组分质量、施用或去除及有支撑的去向数据。产品质量不等于 VOC 排放质量。留存涂膜、收集残余物和未捕集释放须使用互斥组分份额；去除或挥发未知时保留缺口。

- 采集对象：实际挥发化学物种空气排放
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_release`
- 来源: `steel-erection-accounting-method`

#### 采集要求：物质特定的直接水体排放 (`specific_direct_water_releases`)

过程／待建立交换的方向／类型：`steel_erect` / `outputs` / `elementary`.

对实际直接环境排水，逐一标识物质、源水或污染物口径及接收水介质。数量范围需要实测排放体积、浓度或直接质量和实际接收介质；本条件角色没有有用的通用数值界限。收集送往处理的废水不等于该基本排放。纯水核算与污染物质量分开，去向未知时保留未决。

- 采集对象：物质特定的直接水体排放
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_release`
- 来源: `steel-erection-accounting-method`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| steel_erect | 完整螺栓钢安装作业 | required | 本规则范围内每项实际作业 | 责任内五阶段安装、返工循环及验收交接 | 每 1 kg 参考流；S 为唯一已验收永久净钢 |

构件、连接及涂层缺陷的返工状态在 steel_erect 内关联原事件，分别记录批准修配、重拧、补涂、可用退回、废物出库或留存未决在制品。库存、就绪检查和阶段变化不新增节点；真正独立交接则触发范围和节点审查。实际设备、临时支撑和仪表按全部使用阶段及期间登记。

### 过程：完整螺栓钢安装作业（`steel_erect`）

#### 输入

##### 产品流

###### 交付的工厂制作热轧钢构件（`fabricated_steel_members`）

柱、梁及支撑以实际制作及涂覆状态跨入现场安装边界，是本路线的必需投入。逐件标识构件编号、钢级和涂层体系。完整交付状态的产品质量与有证据的钢、原厂涂层及其他组分分别记录。建立数量范围需要实际构件质量、组分桥接、验收钢质量以及退回、废料和在制品观测；涂覆产品质量除以 S 未必等于一。只核对相匹配的构件及组分池。

- 选定流: 交付的工厂制作热轧钢构件
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

###### 柴油（`diesel_fuel`）

在已证实发生时记录自有或单独计量设备实际燃烧的柴油，包括应归属的怠速、试验和返工。固定身份为通用柴油，不断言牌号、炼厂或化石比例。数量范围需要经校准的库存和仪表、实际设备及完整工况时段与独立 S。交付燃油、燃烧燃油及库存变化必须核对；有效吊装功不等于燃油质量，服务商已含燃油不再计入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_utility`
- 来源: `steel-erection-accounting-method`

###### 归属的电力供应（`electricity`）

实际耗用时明确来源、电压及供应商，保留以 kWh 计量的 Energy。数量范围需要仪表拓扑、完整时段、设备工况及独立 S。先直接归属，再分配共用电表余额；各使用方合计不得超过实测供应。具体交换仍须核实 Energy 支持身份，热值属性不能替代。

- 选定流: 归属的电力供应
- 流属性/单位: Energy / kWh
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_utility`
- 来源: `steel-erection-accounting-method`

###### 供应的作业及清理水（`water_supplied`）

记录湿作业及清理实际购入或供应的水，以发生证据为准而不假定用水。数量范围需要实测取用、循环及回水和独立支撑的纯水组分去向。体积转质量需要实际同状态密度。排除已内含于购入配方的水及已作为直接取水记录的同一数量。内部循环不是新的外部输入。

- 选定流: 供应的作业及清理水
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_utility`
- 来源: `steel-erection-accounting-method`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 螺栓连接热轧结构钢安装服务（`reference_service`）

本项是以永久净钢质量 S 计量的已验收安装服务，不是组件投入的再次销售。只有在找正、永久螺栓检查、稳定性、全部实际责任内柱脚及修补完成和受控临时支撑解除均有证据后，才计入唯一验收保留的构件、永久连接件和钢垫片。依据构件及连接记录和钢组分桥接独立求得正值 S。排除临时物、非钢灌浆和涂层、退回、废钢及未决在制品。只有参考数量自身为 S/S = 1 千克。

- 选定流: 螺栓连接热轧结构钢安装服务
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

- 数量范围: 验收钢自身归一化
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: `reference_flow`
  - 证据类型: `calculated_from_collection`
  - 来源: `steel-erection-accounting-method`

##### 废物流

###### 捕集的表面准备固体（`captured_preparation_solids`）

发生表面准备时记录捕集固体及实际母体钢和涂层组分、新加磨料、捕集方法和接收方。数量范围需要这些可用池和独立实测收集状态。同一来源部分的捕集固体与未捕集空气颗粒为互斥去向。内含水及混合涂层组分需要实测桥接；闭合残差不是已收集粉尘。

- 选定流: 捕集的表面准备固体
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

###### 收集的废水及清理浆液（`collected_wastewater_slurry`）

只有实际收集并送往处理的废水或切割、清理浆液才是废物输出。独立标识接收方、湿态、纯水质量及夹带干固体和化学品。数量范围需要实际供水、收集及捕集和组分记录。夹带固体不得另作为干态出库废物；未收集排水和蒸发各需证据，不由平衡缺项推定。

- 选定流: 收集的废水及清理浆液
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_material`
- 来源: `steel-erection-accounting-method`

##### 基本流

###### 二氧化碳（化石源），排放至未特指空气（`fossil_co2_air`）

对有证据的燃烧，根据实测燃油碳和物种数据或有记录的相容模型定量化石 CO2。本固定身份特指未特指空气，不得改标为其他子介质。已识别 CO2 的碳不得超过独立测得的燃烧化石碳；44/12 上限是碳质量约束，不是柴油质量排放因子，也不宣称完全氧化。不得为闭合燃油质量而虚构氧气输入或其他物种。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_release`
- 来源: `steel-erection-accounting-method`; `carbon-oxidation-identity`

- 数量范围: 独立燃烧化石碳约束
  - 范围角色: QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 3.6666666666666665
  - 单位: kg CO2/kg fossil carbon burned
  - 基准: 每 kg 独立测得燃烧化石碳；上限为 44/12
  - 基准类型: `fuel_inventory`
  - 证据类型: `method_formula`
  - 来源: `carbon-oxidation-identity`

###### 水蒸气，排放至未特指空气（`water_vapour_air`）

仅对独立支撑的湿作业实际蒸发使用本 H2O 排至未特指空气身份。数量范围需要分别实测的可用纯水组分池及适用蒸发测量或模型。配方水、供水及其他有证据来源与干组分分开；核对留存水、废水及实际排放。残差不是水蒸气，无蒸发须有证据；不同子介质需要自己的身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 每项实际具体交换独立计量和归属的数量仅一次除以 S。
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_steel_erect_release`
- 来源: `steel-erection-accounting-method`

## 7. 分配与副产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all inventory rows | 先归属直接计量的构件、连接和阶段活动。对真实共享的起重机、登高设备和仪表使用，列出全部使用作业或节点及期间，保留责任内怠速、试验和返工，然后仅依据有记录的因果使用或占用证据分配未归属余额。记录逐期份额及不确定性；份额不得重叠，并须与实测覆盖核对。 | steel-erection-accounting-method |
| allocation_provider | hired_equipment_services; diesel_fuel; electricity; lubricants_other_operating_products | 增加自有燃油、电力、维护或资本负荷前，读取每项服务边界。服务商已含负荷只计一次。对自有可复用起重机、工具或临时支撑，以有证据的实际服务能力或寿命、使用及损坏或替换记录归属制造负荷；寿命或覆盖未知时保留缺口，不设默认复用次数。 | steel-erection-accounting-method |
| allocation_rework | steel_erect; reference_service | 把构件或连接检查失败、涂层损伤和未验收组合体关联原构件、节点和期间。获准修配、重拧螺栓或补涂的负荷保留在 steel_erect 内。分别记录实际退回、降级、回收、废物或留存在制品去向。成功返工后每项永久钢组分只验收计量一次；重复安装和未决拒收质量均不得扩大 S。 | steel-erection-accounting-method |
| allocation_exits | usable_material_exits; returnable_packaging_exit; steel_scrap_waste | 实际可用退回不是已验收安装服务，也不自动产生避免产品抵扣。保留出库身份、状态、所有权和接收方。明确报告废物处理责任及任何单独审查的回收分配，不以异质退回或废钢抵扣参考质量。已用设备归还是保管事件，不是未用材料转出。 | steel-erection-accounting-method |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_steel_erect_material | steel_erect | 材料、产品、废物及验收 S | 称重、构件及连接和去向台账 | event_id；批次/配置；process_id；阶段；时间戳/期间；责任方；角色；actual_identity/current_state；native_amount/unit；measured_same_state_bridge；receiver/medium；证据；不确定性 | 使用经校准称重或可追溯同状态供应商质量记录；核对构件编号、连接清单、完整产品与组分桥接和验收及去向文件。实际基础及锚固放行、几何、检查及库存作为背景记录观测。由唯一验收永久钢组分测量 S，不用平衡残差。 | 千克；原生数量/体积附实测桥接 | 每笔收货、发放、返工、验收、退回或出库；期间边界盘库 | 从起始接口放行至完成验收；全阶段及所有实际报告期，含未结期间和库存边界 | 实际安装场址及声明的设备/服务责任边界 | 每 1 kg 参考流 | 校准、供应商组分数据、永久验收清单、检查及解除签字、保管及废物票据 |
| cp_steel_erect_utility | steel_erect | 燃油、电力及供水 | 仪表、库存及设备工况日志 | event_id；批次/配置；process_id；阶段；时间戳/期间；责任方；角色；actual_identity/current_state；native_amount/unit；measured_same_state_bridge；receiver/medium；证据；不确定性 | 读取经校准仪表和期初期末库存及交付、来源和状态及设备工况。包括责任内怠速、试验及返工。余额归属前标记服务商覆盖和直接归属。液体体积仅用有证据实际状态密度换算，保留原生 kWh。 | 千克；kWh；原生表计单位附桥接 | 每个表计或库存时段及工况事件，包括中断 | 从起始接口放行至完成验收；全阶段及所有实际报告期，含未结期间和库存边界 | 实际安装场址及声明的设备/服务责任边界 | 每 1 kg 参考流 | 仪表拓扑及校准、收据、密度证据、完整工况日志及服务商覆盖 |
| cp_steel_erect_asset | steel_erect | 租用服务及可复用资产观测 | 服务、保管、共享使用及替换日志 | event_id；批次/配置；process_id；阶段；时间戳/期间；责任方；角色；actual_identity/current_state；native_amount/unit；measured_same_state_bridge；receiver/medium；证据；不确定性 | 将每项实际起重、登高、物流或临时支撑资产关联服务商或自有覆盖、保管和使用及占用时段、全部使用方和期间。观测质量而不视为消耗。自有时取得实际制造能力或寿命、使用、损坏及替换证据，否则保留缺口。 | 小时；资产观测千克；原生服务单位 | 每次租用、保管转移、使用时段、损坏、替换和解除 | 从起始接口放行至完成验收；全阶段及所有实际报告期，含未结期间和库存边界 | 实际安装场址及声明的设备/服务责任边界 | 每 1 kg 参考流 | 合同、设备标识、工况及占用和全部使用方日志、实际寿命及使用和损坏文件 |
| cp_steel_erect_release | steel_erect | 直接资源取用及物质特定释放 | 来源、介质、采样及模型日志 | event_id；批次/配置；process_id；阶段；时间戳/期间；责任方；角色；actual_identity/current_state；native_amount/unit；measured_same_state_bridge；receiver/medium；证据；不确定性 | 对实际取水、排放及排水记录确切物质或报告口径、环境介质、来源池和阶段。使用经校准直接测量或有记录的相容物种及去向模型，输入及不确定性须实测。化石碳及纯水池分开；记录捕集及处理关联，不由闭合推导排放。 | 物质千克；原生采样单位附实测桥接 | 每项实际释放或取水事件或有证据模型时段 | 从起始接口放行至完成验收；全阶段及所有实际报告期，含未结期间和库存边界 | 实际安装场址及声明的设备/服务责任边界 | 每 1 kg 参考流 | 发生证据、样本及校准、实际燃油碳和配方数据、模型或因子适用性及接收介质 |

各协议的汇总规则仅声明最终基准；汇总前按每个具体身份、状态和接收方或物质及介质分别取得原生数量、同状态桥接和责任份额，再除以独立 S。参考项为 S/S。异质台账总量仅用于 QA，服务数量与资产质量观测分开，共用仪表先直接归属再核对余额；纯水和化石碳分别检查。

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| derive_accepted_steel | reference_service | S = 已验收构件、永久连接及钢垫片中唯一实际永久保留净钢质量之和；各钢组分依据实测完整状态物件和有记录组分桥接求得。要求 S > 0 及完整关口证据；排除临时物、非钢灌浆或涂层、退回、废钢及在制品。 | cp_steel_erect_material; 已验收构件及连接清单; 实测完整状态与钢桥接 | S，千克 | steel-erection-accounting-method |
| normalize_concrete_exchange | all inventory rows | 对每项独立识别具体交换，用有证据同状态桥接把原生事件数量转成必需单位，归属责任份额，再把作业数量分子仅一次除以 S。不同 SKU、状态和接收方或物质及介质的数量分子分开。只有 reference_service 使用 S/S = 1 千克；混合台账总量为 QA，不是交换。 | cp_steel_erect_material; cp_steel_erect_utility; cp_steel_erect_asset; cp_steel_erect_release; S | 具体单位/每 1 kg 参考流 | steel-erection-accounting-method |
| compatible_pool_check | all inventory rows | 在一个相容身份及状态或有证据组分池内，将期初库存加实际投入与独立观测保留结合量、期末库存及互斥实际转出和释放比较。差异和不确定性记为发现项，不解算未测交换。原厂涂层、新增涂层和灌浆、干组分及纯水去向分开。 | cp_steel_erect_material; cp_steel_erect_utility; cp_steel_erect_release; 相容身份及组分桥接 | 池特定 QA 残差及不确定性 | steel-erection-accounting-method |
| fossil_carbon_check | fossil_co2_air | 已识别化石 CO2 质量 <= 独立测得燃烧化石碳 * 44/12。由实际燃烧燃油及有证据碳和化石比例取得化石碳；不假定通用柴油化石比例或完全氧化。本项仅约束 CO2 碳，不是燃烧总质量平衡。 | cp_steel_erect_utility; cp_steel_erect_release; 实际燃烧化石碳 | 化石碳 QA 约束 | carbon-oxidation-identity |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_concrete_identity | all inventory rows | 实际发生状态记为是、否或未决，不发生和零值须有证据。将条件角色展开为各具体 SKU、状态及接收方或物质及介质，并在最终交换使用前核实流和支持身份；不得使用概念条件角色或无支持替代身份。 | 发生台账；身份、状态和接收方证据 |
| quality_denominator | reference_service; fabricated_steel_members; permanent_connection_steel | 核对验收构件编号及永久连接和垫片清单、完整交付状态质量及独立有证据钢和原厂涂层组分。要求正值纯钢 S 和完整项目关口。设计几何或发票质量不能静默替代验收组分质量。 | 经校准同状态质量及桥接记录；签署验收 |
| quality_range_needs | all inventory rows | 此处只有参考归一化和化石碳恒等式两个数值范围。其余每行在声称数值先验前须取得卡片特定数量证据需求：按适用情况取得实际质量及组分、灌浆几何和配方、修补面积和涂膜、工具事件、工况及仪表、纯水去向、服务时段、包装保管、废物状态及接收方或确切排放物质及模型。保留各未决范围需求和物理 QA，不设任意上限或残差生成交换。 | 逐卡范围证据台账；来源适用性及不确定性 |
| quality_exclusive_roles | all inventory rows | 每个事件及材料部分在柱脚或灌浆、附带表面修补、固体工具及临时替换、运行流体、燃油或电力、单独供水和包装之间只归属一次。配方内水在购入产品中跟踪。对每个有证据组分采用互斥留存、退回、捕集、废物及环境去向。 | 事件与角色台账及相容组分桥接 |
| quality_period_ownership | steel_erect | 覆盖全部实际阶段和期间、收货及库存、责任内怠速及试验和返工、资产使用、替换、退回及终止。配对真实跨责任方转移，列出全部共享使用方。要求归属覆盖、服务商排除及自有资本实际寿命和使用证据；缺失时段或未知去向保留缺口。 | 完整阶段事件日志；合同；全部使用方分配核对 |
| quality_release_pools | direct_freshwater_abstraction; fossil_co2_air; other_engine_species_air; physical_particulate_air; volatile_species_air; water_vapour_air; specific_direct_water_releases | 纯水可用量及去向、燃油化石碳及物种约束和干材料池是独立有证据 QA。不得混淆完整湿废物与水质量、燃油与 CO2、捕集固体与未捕集颗粒或处理废物与直接环境释放。记录方法、来源状态相容性、检测限及模型不确定性。 | 独立相容池、纯水及碳和物种检查 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_gate | reference_service | 要求正值独立实测 S，以及构件和连接验收、实际找正及螺栓检查、稳定性、责任内完成和受控支撑解除证据。收货重量或初始连接本身不能通过。排除退回、废钢、临时物及未验收在制品。 | steel-erection-accounting-method |
| validate_identity | all inventory rows | 最终交换生成前，明确每个具体材料及 SKU 和状态、服务及接收方或基本物质及介质。固定通用柴油、化石 CO2 排至未特指空气和 H2O 排至未特指空气保留其真实身份限制。独立核实流属性和单位组链；未决条件角色不是具体 UUID。 | steel-erection-accounting-method |
| validate_measurement | all inventory rows | 检查原生数量分子、同状态换算、协议责任、唯一事件及仅一次除以 S。只有参考项自身归一为一。完整涂覆产品投入质量不得以保留净钢替换。范围缺口和发生状态未知须明确保留；任意数值界限不能证明完整性。 | steel-erection-accounting-method |
| validate_phases | steel_erect | 检查实际五阶段及报告期日志、全部构件和资产及公用工程和输出关联与归属决定。返工、替换和终止须明确状态和去向。未结期间或缺失解除义务阻止作业定稿，不得静默带入已验收输出。 | steel-erection-accounting-method |
| validate_shared | hired_equipment_services; diesel_fuel; electricity | 核对共享资产或服务、全部使用方和期间、直接归属与余额份额。对照自有行检查服务商燃油、资本和维护是否重复覆盖。缺失自有寿命或使用证据时保留披露缺口，不计全部资产制造，也不设零负荷。 | steel-erection-accounting-method |
| validate_fates | all inventory rows | 只闭合相容材料及状态或有证据组分池，包括期初期末库存。纯水及化石碳检查分别进行。区分捕集与未捕集、湿与干及产品、废物、环境去向。残差是发现项，绝不虚构交换；不得将燃油千克等同 CO2 千克或虚构氧气。 | steel-erection-accounting-method; carbon-oxidation-identity |
| validate_scope | steel_erect | 应用本类别前审查任何另一个责任方交接、结构现场焊接或独立制作及完整涂装。记录实际本地或项目验收要求；安全指引示例不提供默认最终螺栓准则、设计容差或清单耗用率。 | fhwa-inspection-steel; osha-steel-site; osha-steel-stability |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际螺栓热轧结构钢安装作业的前景数据包 |
| downstream_use | 在身份及质量条件满足后用于 LCA process 或 lifecyclemodel 投影及实际供应链连接 |
| allowed_use | 在相同边界、验收关口、永久净钢基准及披露条件下构建或比较实际安装数据 |
| excluded_use | 钢材制作或建筑全生命周期的替代数据；普遍施工性能或法规合规证明；未决身份的最终交换 |
| required_metadata | 参考流所有限定项、完整阶段和期间日志、S 及组分桥接、实际物种及介质、设备和服务覆盖、共享分配及去向责任 |
| required_quality_disclosure | 身份及支持缺口；未决发生和范围证据；测量和模型不确定性；数据期间与覆盖；未结在制品及拒收；资本寿命和供应商边界缺口；已做及跳过检查和完整性 |
| update_trigger | 构件或涂层及连接状态、责任边界、永久连接路线、设备和服务覆盖、验收要求、计量桥接、排放方法或新证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fhwa-inspection-steel | official_guidance | FHWA, Construction Program Management and Inspection Guide, Appendix D, Structural Steel (updated 2017-06-27), https://www.fhwa.dot.gov/construction/cpmi04d2.cfm | 识别起吊、现场连接检查、支承找正及现场清理和涂覆责任；不提供通用耗用率或验收容差 |
| osha-steel-site | official_guidance | OSHA eTools, Steel Erection, Site Preparation, https://www.osha.gov/etools/steel-erection/site-preparation | 起始基础和锚固接口、堆放、起吊规划及责任识别；美国安全背景，不作为清单数量或普遍阈值 |
| osha-steel-stability | official_guidance | OSHA eTools, Steel Erection, Structural Stability, https://www.osha.gov/etools/steel-erection/structural-stability | 临时稳定、支撑及受控解除职责；初始连接要求不替代实际最终永久连接验收 |
| steel-erection-accounting-method | method_factor | Normative method defined in this PCR, sections 3–9: accepted net permanent steel, concrete-event normalization and exclusive compatible-pool accounting | 本 PCR 定义的验收净钢、事件归一化、实际责任及互斥材料和期间核算方法；不声称外部实测耗用率 |
| carbon-oxidation-identity | method_factor | Normative carbon-mass identity: one CO2 molecule contains one C atom; CO2/C mass ratio 44/12 on the declared conventional atomic-mass basis | 仅约束独立燃烧化石碳可形成的 CO2 碳质量；不提供柴油碳比例、完全氧化假设或排放因子 |
