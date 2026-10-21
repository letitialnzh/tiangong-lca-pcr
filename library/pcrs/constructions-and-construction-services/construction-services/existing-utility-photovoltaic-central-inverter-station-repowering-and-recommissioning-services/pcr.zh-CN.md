---
pcr_id: pcr.constructions-and-construction-services.construction-services.existing-utility-photovoltaic-central-inverter-station-repowering-and-recommissioning-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有公用事业级光伏集中式逆变站换装与重新投运服务

## 1. 范围与适用性

本 PCR 涵盖已识别既有公用事业级地面光伏集中式逆变站的有限功能换装与重新投运，保留合格阵列、土建基础、兼容既有中压变压器及并网接口。该服务改变既有发电站，而不是交付新电厂或单独逆变器。其输出要求实际兼容性证据及在全部核准功能门槛通过后的运营方签署验收。[sma-utility-repowering; sma-pv-commissioning; epri-inverter-repowering-abstract-2024]

制造商提供保留中压变压器的集中式逆变器路线，以及无法保留变压器时的另一整站路线；仅前者在本范围内。“与多数兼容”不是实际站核实。排除屋顶/家用/仅组串式逆变器、电池、组件或阵列更换、中压变压器更换、厂内逆变器修理、新全厂建设及后续发电。不将宣传电压、质保、发电提升或寿命承诺作为通用设计规则。[sma-utility-repowering]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.existing-utility-photovoltaic-central-inverter-station-repowering-and-recommissioning-services |
| classification_refs | CPC 3.0 54262; narrower |
| covered_products | 保留实际合格中压变压器/阵列/基础并以验收重新投运结束的既有地面光伏集中式逆变站换装。 |
| excluded_products | 新全厂；家用/屋顶/仅组串式路线；电池；中压变压器/组件/阵列更换；厂内修理；后续发电。 |
| representative_product | 已验收的既有公用事业级光伏集中式逆变站换装与重新投运服务 |
| production_route | 核准隔离/拆除 → 实际换装及接口集成 → 配置/全部规定测试/复测 → 缺陷关闭及签署重新投运。 |
| market_state | 已完成验收的有限站改造服务；不含预测运行性能。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| what | 已验收的既有公用事业级光伏集中式逆变站换装与重新投运服务 |
| how_much | 1 item |
| how_well | 一座具名站，具备核准实际保留接口兼容性、完整功能报告、缺陷关闭及运营方签署验收；声明实际配置。 |
| how_long_or_cycle | 从核准隔离/拆除到安装、重新投运/复测及签署验收的一个实际有限作业批次，覆盖全部实际报告期间；不含后续发电周期。 |
| reference_flow_link | `accepted_station_service` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已验收的既有公用事业级光伏集中式逆变站换装与重新投运服务 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | item |
| required_qualifiers | 站/场址标识; 地面公用事业级路线; 实际直流/交流额定值; 转换拓扑; 保留/更换物料清单; 保留中压变压器/阵列/基础兼容性; 核准地方/制造商方法; 固件/保护/SCADA/电网控制状态; 批次/阶段/期间; 完整测试/缺陷关闭; 签署/日期; 无 MWp/kWh 等价 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| count_reference | accepted_station_service | Count | item | N>0 是唯一完成全部验收的站数，不是逆变器件数、堆栈数、测试尝试、容量或 kWh。保持实际分子原生单位 / N。 |
| native_measurement | 实际供给部件、移出及供应商 | 实际兼容原生属性 | 实际核实原生单位 | 保持件数/长度/质量供给及可用退回原生台账。独立需要的质量或水/燃料体积换算要求匹配实际规格、密度/状态/温度/单位/来源；件数不能替代能量、时间或供应商覆盖。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别的合格既有地面光伏站，保留阵列/基础/中压变压器/并网接口，具备旧逆变器及核准作业方案。 |
| starting_condition_role | 既有宿主状态接口，不是新制造采购。 |
| product_classification_scope | CPC 3.0 54262; narrower |
| recursive_input_rule | 不得把同一已完成站服务作为自身投入采购。真正有界分包识别实际范围/原生活动及上游覆盖，责任唯一且不重复前景作业。 |
| upstream_dataset_requirement | 实际新设备/供给、公用工程、供应商服务、运输、资产寿命份额及处理要求兼容上游数据集及显式覆盖；排除保留宿主制造。 |
| disclosure | 实际保留/更换台账、先前状态、合格兼容性、地方/制造商门槛、N、全部阶段/期间、供应商/资源责任、旧设备去向及剩余数据缺口。 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_gate | 保留接口 | 仅纳入保留阵列、土建基础、中压变压器及并网接口均合格的既有公用事业级地面光伏集中式逆变站。须核准实际直流/交流电压、电流、功率、转换拓扑、机械安装、保护/接地及控制/通信兼容性。中压变压器须更换时不适用本选定子集。 | sma-utility-repowering; epri-inverter-repowering-abstract-2024 |
| job_boundary | 前景起止 | 起点为合格的已识别既有站及核准作业/隔离方案。负责直流/交流隔离、放电及上锁、安全拆除、新设备及实际接口安装、配置、全部规定功能测试、缺陷关闭及运营方签署重新投运交接。要求主管实际适用的地方/制造商程序；无通用电压跨度、测试次数、产率或质保。 | sma-utility-repowering; sma-pv-commissioning; sma-industrial-services |
| host_state | 既有宿主资产 | 既有阵列、中压变压器、基础及旧逆变器是初始状态接口，不是新采购制造。负责增量作业和旧设备拆除/去向。禁止从新供给扣旧逆变器、避免资产信用或未来发电、收入及寿命延长信用。排除新全电厂、组件/阵列换装、屋顶/家用/仅组串式路线、电池、中压变压器更换、厂内逆变器修理及后续运行。 | sma-utility-repowering; unsd-cpc3-powerplant-services |
| coverage_owner | 资源责任 | 为各直接/供应商/租赁/运输/资产/备件事件指定单一资源责任及完整上游覆盖。完整成品设备包与其覆盖物料清单互为排他采购。保留实际增量清洁/围控/测试物料及供应商支付资源；有证据的未使用可确定缺省，未知覆盖不得视为零。 |  |
| campaign_phase | 有限服务批次 | 声明实际作业/批次起止与隔离拆除、安装、重新投运/复测及验收阶段和报告期间。各库存、投入、资产使用、事件、移出及输出保留作业/场址/站/批次/小批次/事件/阶段/期间标识；仅对适用记录填写资产标识。失败或中止作业仍归属实际作业；N=0 或验收门槛不完整阻止归一化数据集。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：离散换装接口部件 (`interface_parts_count`)

过程／待建立交换的方向／类型：`station_integration` / `inputs` / `product`.

记录经合格设计要求、独立供应的端子/转接组件、开关保护装置、传感器、控制或通信部件、机械紧固件及冷却备件。按实际展开零个、一个或多个具体 SKU；排除已由厂内设备包覆盖的全部部件。

- 采集对象：实际按件供货的换装转接、保护、接地、冷却及控制部件
- 流属性/单位：Count / item
- 数量规则：各实际离散 SKU 的归属数量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`

范围证据需求：使用实际核准物料清单、交付及保留/更换台账；营销兼容性不能提供件数范围。

#### 采集要求：独立供货电缆与导体长度 (`interface_cable_length`)

过程／待建立交换的方向／类型：`station_integration` / `inputs` / `product`.

保留导体材质、截面、绝缘、电压等级及实测交付/安装/边角料状态。不得强迫按长度交付或可用退回的电缆转为质量。确需独立废物质量视图时须取得实际规格对应的测量。

- 采集对象：实际按长度供货的指定直流、交流、接地及通信电缆
- 流属性/单位：Length / m
- 数量规则：各实际电缆规格归属的原生长度 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`

范围证据需求：采集本站几何条件对应的实际敷设长度、备用长度及裁切/退回证据；无通用每兆瓦电缆比例。

#### 采集要求：按质量供货的安装与围控材料 (`installation_mass_supplies`)

过程／待建立交换的方向／类型：`station_integration` / `inputs` / `product`.

包括实际用于安装、断接及清洁的密封剂、润滑剂、清洁剂、吸附剂、临时围控及其他增量物料。记录配方与供货状态；保留基础不再次采购。已安装产品质量、使用活动、收集残余及排放物种是不同视图。

- 采集对象：实际按质量供货的安装、清洗及围控产品
- 流属性/单位：Mass / kg
- 数量规则：各实际 SKU 归属的净质量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`

范围证据需求：取得实际设计和 SKU 特定的实测库存/使用/去向证据；缺省须有未使用记录，不得因缺发票而视为零。

#### 采集要求：实际作业设备供给燃料 (`fuel_supply`)

过程／待建立交换的方向／类型：`station_integration` / `inputs` / `product`.

仅对实际发生且拥有资源责任的提升、移动工具、备用测试供电和运输燃料记录。上游供给燃料包括已燃烧部分及未退回的废物/损失；燃烧活动不等于上游采购量。体积计量时保留实际燃料规格及密度证据。 燃烧活动要求实际测量或带声明不确定性的已审计完整去向平衡；未知损失不得自动当作已燃烧燃料。

- 采集对象：供应给归属设备的实际指定燃料
- 流属性/单位：Mass / kg
- 数量规则：归属燃料供应质量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`

范围证据需求：取得实际燃料库存、收货、退回、燃烧、废弃及损失记录；不假定柴油消耗或默认零燃料。

#### 采集要求：归属货运服务 (`freight_service`)

过程／待建立交换的方向／类型：`station_integration` / `inputs` / `product`.

在未被上游或处理服务商覆盖时，负责设备包交付、旧逆变器移出、退货及废物的实际运输分段。保留载荷分配、空返及方式；不得为每站重复整车载荷或以铭牌容量乘站数。

- 采集对象：新设备、物料及向外移出物的实际分运单货运
- 流属性/单位：mass*distance / kg*km
- 数量规则：归属实际质量距离服务量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`

范围证据需求：采集每个归属分段的实际货物质量、实测路线距离及拼载归属。

#### 采集要求：有界专业重新投运与集成服务 (`specialist_service`)

过程／待建立交换的方向／类型：`station_integration` / `inputs` / `product`.

采购有界服务时，识别供应商、范围、实际完成测试结果与资源覆盖。电网模拟仅在实际合同采用时纳入，并非强制。价格、工时或一次到访不构成已完成站的件数。展开实际原生行，逐一独立核实支持链。

- 采集对象：以经核实原生单位记录的实际有界专业服务
- 流属性/单位：实际核实原生属性 / 实际原生单位
- 数量规则：归属已完成的原生服务活动量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`

范围证据需求：要求实际供应商范围/结果及完整上游资源声明；供应商资源缺失阻止最终定稿。

#### 采集要求：共享提升与测试资产服务 (`shared_asset_service`)

过程／待建立交换的方向／类型：`station_integration` / `inputs` / `product`.

识别每项实际资产及全部使用作业/节点/阶段/期间。无论自有、租赁或供应商提供，均以单一资源责任方纳入制造、维护、替换件及寿命终结。不得仅凭租赁小时推定完整寿命归属。精确选择一种已核实上游视图：整资产当量数量 = 实际作业驱动量 / 完整寿命驱动量，单位资产当量含完整寿命负担；或完整生命周期每驱动单位服务数量 = 实际作业驱动量，每原生服务单位负担 = 完整寿命负担 / 完整寿命驱动量。不得混用小时数量与无量纲资产份额。

- 采集对象：实际按完整寿命归属的提升、工具、测试负载及模拟器资产服务
- 流属性/单位：实际核实原生属性 / 实际原生单位
- 数量规则：实际选定原生资产当量数量或原生服务驱动量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assets`

范围证据需求：取得完整已观察服务寿命，或已观察历史加有证据的剩余服务、替换、终止及寿命终结；要求实际兼容驱动量以及不确定性/敏感性/更新。

#### 采集要求：实际外部供应废物处理 (`waste_treatment_service`)

过程／待建立交换的方向／类型：`station_integration` / `inputs` / `product`.

将电子废物、包装、收集燃料、受污染吸附剂及废水与实际接收者和处理覆盖匹配。仅有废物移出并不提供上游处理清单。有界供应商已覆盖处理时排除此重复采购，并保留覆盖链接。

- 采集对象：以原生单位记录的实际废物特定授权处理服务
- 流属性/单位：实际核实原生属性 / 实际原生单位
- 数量规则：归属实际已处理原生数量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`

范围证据需求：采集接收者特定的原生实测服务量与资源/处理声明；笼统回收不足以满足要求。

#### 采集要求：拆除历史设备移交经核实再使用 (`removed_reusable_equipment`)

过程／待建立交换的方向／类型：`station_integration` / `outputs` / `product`.

保留旧序列号、状态评估、接收者及可再用证明。既有设备是初始宿主状态，其移出不得从新逆变器清单中扣除。被划为废物的物件只进入 removed_electronic_waste。

- 采集对象：再使用交接状态的实际拆除历史集中式逆变器或可用部件
- 流属性/单位：Count / item
- 数量规则：实际向外移交可再用历史设备的原生件数 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exits`

范围证据需求：取得实际旧设备件数及去向证据；不假定残值、再用率或避免新设备信用。

#### 采集要求：可用新件供给向外退回 (`usable_count_returns`)

过程／待建立交换的方向／类型：`station_integration` / `outputs` / `product`.

每次向外退回须与新供给库存台账及可用状态证据匹配。内部领用、移动及结转期末库存不是向外退货。采用一种声明的上游供给约定，禁止重复退回信用。

- 采集对象：实际退回的可用新设备包或离散部件
- 流属性/单位：Count / item
- 数量规则：各新 SKU 实际向外退回的可用原生件数 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exits`

范围证据需求：实测件数并匹配 SKU/序列号/退货单据；无通用退回比例。

#### 采集要求：可用新电缆长度向外退回 (`usable_length_returns`)

过程／待建立交换的方向／类型：`station_integration` / `outputs` / `product`.

保持与供给兼容的长度、规格、卷盘及接收方台账；保留物理长度移出不要求通用质量换算或退回信用。

- 采集对象：实际向外退回的指定可用电缆长度
- 流属性/单位：Length / m
- 数量规则：实际向外退回的可用电缆长度 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exits`

范围证据需求：采集实际实测可用退回长度及规格特定证据。

#### 采集要求：可用新质量供给及燃料向外退回 (`usable_mass_returns`)

过程／待建立交换的方向／类型：`station_integration` / `outputs` / `product`.

分开维护燃料及各化学品/材料台账；保留皮重、状态及污染证据。可用退回燃料仅从燃烧活动排除一次；未退回废物和损失保留供给负担。

- 采集对象：实际向外退回的可用按质量供货产品或燃料
- 流属性/单位：Mass / kg
- 数量规则：按实际 SKU 分列的向外可用退回质量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exits`

范围证据需求：使用实际去皮测量质量及匹配的收货/库存记录。

#### 采集要求：拆除历史逆变器电子废物 (`removed_electronic_waste`)

过程／待建立交换的方向／类型：`station_integration` / `outputs` / `waste`.

负责安全拆除、存储、移交及实际处理边界。称量旧逆变器/部件或使用可追溯同物件净质量；与可再用旧设备互斥。不得仅由“逆变器”推断危险类别或回收产率；使用实际辖区/接收者记录。

- 采集对象：交付授权接收者的实际已分类拆除逆变器或电子部件废物
- 流属性/单位：Mass / kg
- 数量规则：实际已分类向外电子废物净质量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exits`

范围证据需求：采集实际类别、净质量、转移凭证、接收者及处理证据；不设旧/新质量固定比例。

#### 采集要求：安装、废弃新部件及包装废物 (`new_supply_waste`)

过程／待建立交换的方向／类型：`station_integration` / `outputs` / `waste`.

分开记录电缆边角料、包装、失效新电子器件、清洁剂/吸附剂及未用且不可退材料；各自保留匹配的上游供给负担。厂内设备包质量与物理废物子台账不是重复采购。返工保持内部状态，直至实际移出、最终保留或关闭。

- 采集对象：实际分别分类的新供给、电缆、包装及围控废物
- 流属性/单位：Mass / kg
- 数量规则：按类别记录的实际向外废物净质量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exits`

范围证据需求：要求实际分列废物类别、兼容称量及供给至去向核对，不采用通用废物百分比。

#### 采集要求：收集的未燃烧废燃料 (`nonburned_fuel_waste`)

过程／待建立交换的方向／类型：`station_integration` / `outputs` / `waste`.

从燃烧活动排除收集的未燃烧燃料，保留供给负担及实际废物去向。回收到可用期末库存的溢漏属于期末库存，不是此移出；总溢漏仅用于审计，不是另一流。

- 采集对象：实际收集的受污染或未使用废燃料
- 流属性/单位：Mass / kg
- 数量规则：实际向外移出的收集未燃烧废燃料质量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exits`

范围证据需求：要求实测收集质量、污染、库存核对及接收者；未划清互斥去向前不得用差额推断燃烧。

#### 采集要求：按接收介质列示的实际燃烧污染物种 (`direct_combustion_species`)

过程／待建立交换的方向／类型：`station_integration` / `outputs` / `elementary`.

仅展开实际物种和介质，并核对因子地域/技术/燃料适用性及收集比例。已燃烧燃料物理平衡和物种清单是不可相加的视图。安全读数、供应燃料质量、理论残差或笼统废气名称不能确定物质排放。

- 采集对象：进入实际接收介质的已识别燃烧物种
- 流属性/单位：Mass / kg
- 数量规则：由实测释放或有效燃烧活动因子得到的实际物种质量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_releases`

范围证据需求：取得实际燃料/发动机/负荷/因子或实测物种/介质证据及不确定性；无默认废气组成。

#### 采集要求：实际常规或事故物质释放 (`direct_incident_species`)

过程／待建立交换的方向／类型：`station_integration` / `outputs` / `elementary`.

实际存在未围控燃料/清洁剂/冷却液/润滑剂释放时负责记录，区分常规与事故责任方并识别物种、接收介质、产品组成及去向。实际保留库存、可用退回、收集废物及处理仅扣除一次。仅凭安全数据表组成、无挥发性有机物或合规声明不能确定排放量。 本行显式包括实际存在的常规清洁相关物质或粉尘释放及事故。每个常规区间或事故事件具有单一责任方及独立事件标识；不得漏掉常规排放或在两类之间重复事件。

- 采集对象：实际已识别释放至空气、水或土壤的物种
- 流属性/单位：Mass / kg
- 数量规则：按事件及介质记录的实际释放物种质量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_releases`

范围证据需求：要求实际事件数量、测量或有效组成去向证据及接收介质标识；事故证据缺失不等于零。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| station_integration | 既有站换装与重新投运 | required | 实际合格保留中压变压器/阵列/基础的集中式逆变器路线 | 独立集成/交接责任，内部包含拆除、安装及重新投运阶段 | 1 item accepted_station_service |

一个独立服务责任拥有全部内部阶段。不以虚构采购的中间站流连接各阶段。实际部件角色包括成品集中式逆变器、独立机械/电气/保护/接地/冷却/控制/通信部件及指定电缆；保留宿主接口维持状态。集成服务、直接资源及共享测试/提升资产具备显式责任。门槛失败留在实际阶段内部返工或进入有证据退回/废物路线；拒收站不得作为验收输出。[sma-utility-repowering; sma-pv-commissioning; sma-industrial-services]

### 过程：既有站换装与重新投运 (`station_integration`)

#### 输入
##### 产品流

###### 替换用成品集中式逆变器设备包（`replacement_central_inverter`）

识别制造商、准确型号、序列号、直流/交流额定值、转换拓扑及设备包内容。仅当核实的供货基准确为完整交付原生单位时按件记录。厂内集成电子器件、冷却及保护已含在上游，不得再次采购同一物料清单。

- 选定流：实际交付的公用事业级光伏成品集中式逆变器设备包
- 流属性/单位：Count / item
- 数量规则：在声明的总量含移出或匹配可用退回仅一次约定下，归属实际原生供给设备包数量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`

范围证据需求：取得按站记录的实际核准设备包数量及内容；不存在每站通用逆变器件数或容量等价关系。

###### 增量供应清洗与测试水（`water_supply`）

纳入全部实际直接及供应商支付的水；区分采购、现场再循环、收集废水及实际释放。仅用相匹配的密度、状态、温度、单位及来源将实测体积换算为质量。本规则不规定采用水冷。

- 选定流：实际供应的清洗、围控及测试用水
- 流属性/单位：Mass / kg
- 数量规则：归属供应水质量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`

范围证据需求：采集实际清洁/测试方法及校准表计或交付记录；本路线无通用需水量。

###### 作业期间外部输入电力（`electricity_import`）

分别计量隔离、安装辅助、参数配置、测试、重复测试及供应商设备的输入电量。保留来源、电压及时间区间。独立电能属性支持与具体交换须独立核实；不得以热值替代。

- 选定流：用于站内作业及重新投运的实际电网或供应电力
- 流属性/单位：Energy / kWh
- 数量规则：归属外部输入电量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`

范围证据需求：使用实际分时分表或有证据的共表归属；不采用文献每站千瓦时默认值。

#### 输出
##### 产品流

###### 已验收的既有公用事业级光伏集中式逆变站换装与重新投运服务（`accepted_station_service`）

仅在核准的保留阵列/中压变压器/基础兼容性、机械/电气/保护/接地/SCADA/电网控制测试、缺陷关闭、规定报告及运营方签署重新投运验收全部完成后，才计入唯一标识站。N 为作业批次中此类站标识的正数数量，逐站仅计一次。

- 选定流：已验收的既有公用事业级光伏集中式逆变站换装与重新投运服务
- 流属性/单位：Count / item
- 数量规则：1 item
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`

范围证据需求：精确 1 是参考归一化，不是经验产率。采集 N 及全部规定签署门槛；失败尝试不增加 N。

###### 实测向外测试电力输出（`test_electricity_export`）

独立于输入电力及既有阵列发电，记录来源、区间与接口。这是实际附带实测移出，不是未来发电或联产品目标。默认施工负担不得作电量净扣或避免电网信用；另经授权的后果模型须在本归属型数据集之外披露。

- 选定流：在核准接口实测输出的重新投运测试电力
- 流属性/单位：Energy / kWh
- 数量规则：实际向外输出的重新投运电量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`

范围证据需求：要求实际输出表计及作业因果归属；不假定发电提升量或输出等于输入。

##### 废物流

###### 收集的清洗及测试废水（`contained_wastewater`）

追踪罐/批次、水源、污染物、回收与处理接收者；收集液体不是基本流排水。实际上游处理服务仅纳入一次；收集不取消上游用水责任。

- 选定流：实际收集并移交授权处理的废水
- 流属性/单位：Mass / kg
- 数量规则：实际向外移交的收集废水质量 / N。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_exits`

范围证据需求：使用实际称量或状态兼容的体积/密度记录及接收者证据；不假定废水比例。

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| supply_convention | 新供给库存与去向 | 对各实际 SKU 及原生单位，S = 归属期初库存 + 外部去皮毛收货量 - 结转期末库存。内部领用不是收货。声明总量含移出约定：上游负担对应 S，可用向外退回作为独立物理移出；或仅消耗约定：上游负担对应 S 减去一次匹配可用向外退回量。不得另给退回信用。所有安装/使用、未退回废物和未围控损失保留供给负担；最终安装保留排除废物、退回及释放。 |  |
| historical_exit | 拆除历史设备 | 将旧序列号及任何独立实测质量分为有证据可再用设备、实际电子废物及暂存待定状态。同一序列号不得同时为再用输出和电子废物。再用不是此服务新增的预期联产品，不给任意替代信用。最终去向缺失是质量缺口，绝不是负的新投入。 |  |
| repeat_mode | 批次与返工处理 | 本服务为有限作业/批次生产。测试失败、安装拒收、清洁、准备、动员、切换、重复配置及补救拆除留在实际站/批次分子中。每个返工环或可用退回/废物移出链接至原集成事件。仅完成全部验收后逐站计一次；计划兆瓦、逆变堆栈、尝试次数或部分修复站不得增加 N。共享批次资源采用实际因果实测驱动量，并披露全使用者分母与单一责任。 |  |
| asset_attribution | 共享资产完整寿命 | 对各实际提升机、工具、测试负载或电网模拟器，完整寿命负担包括制造 + 维护 + 替换 + 寿命终结。按实际作业驱动量 / 兼容完整寿命驱动量分配，覆盖全部作业、节点及期间，包括本批次以外。提供完整已观察寿命，或已观察历史加有证据的剩余使用、替换、终止及寿命终结，并附不确定性、敏感性及更新触发。覆盖/分母缺失阻止最终数据；添加直接资产负担前须核对租赁或供应商覆盖。 |  |
| electricity_separation | 重新投运电力 | 外部输入、外部测试输出、进入测试的保留阵列发电、内部循环、测试负载耗散及损失须保持独立且区间一致的物理台账。内部循环是审计活动，不是另一采购流；测试负载设备/资源须有责任归属。禁止用输出抵输入或预测发电；不得自动产生负施工负担或避免电网信用。不主张通用可再生电联产品分配。 |  |
| fuel_species_views | 物理及物种台账 | 燃料期末可用库存、向外可用退回、未燃烧废物、未围控损失及燃烧活动互斥。总溢漏仅供审计；回收进入可用期末库存的溢漏已属期末。整产品/燃料物理平衡与按介质列示物种基本交换为不可相加视图。物种仅来自实测或适用活动因子/组成去向证据，并将收集库存/退回/废物/处理排除一次。 |  |

## 8. 前景数据采集、计算及质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | station_integration | 参考与兼容性门槛 | station_register | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; station_serial; retained_array_id; retained_mvt_id; retained_foundation_id; dc_ac_ratings; topology; mechanical_interface; earthing_protection; firmware_control_scada; approved_method; isolation_record; test_result; defect_closure; report_id; acceptance_signature; acceptance_date; N | 连接主管核准设计与实际隔离/安装/测试/重新投运记录。核实实际中压变压器兼容性；营销声称多数兼容不足。最终站标识去重并排除失败或不完整门槛。 汇总：N = 完成全部验收的唯一站标识正数数量；参考输出 1 item；其他归属数量 / N，每参考流。 | item | 每站、每次测试/复测及签署验收 | 实际作业开始至签署验收，全部阶段及报告期间 | 实际站及保留接口 | 每参考流 | 合格设计、序列号台账、完整功能报告及签字 |
| cp_supply | station_integration | 新部件及质量供给 | sku_stock | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; sku_id; serial_or_reel; specification; package_bom_coverage; native_quantity; native_unit; opening_stock; gross_receipts; tare; internal_issue; closing_stock; installed_retained; usable_outward_return; waste_exit; uncontained_loss; convention; supplier_record | 以兼容原生单位核对实际 SKU 交付/库存/安装/退回记录。匹配设备包覆盖和部件采购排除。最终保留库存、物理活动和移出分开；独立质量视图须有来源。 汇总：calc_supply 归属原生供给量 / N，每参考流；保留独立 SKU 台账。 | actual native unit | 每次收货、库存期末、安装及移出 | 全部作业阶段及结转报告期间 | 实际直接及供应商供给 | 每参考流 | 匹配发票、皮重、物料清单、安装及退回记录 |
| cp_utilities | station_integration | 实际公用工程及测试能量台账 | meter_ledger | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; resource_id; source_id; meter_id; interval_start; interval_end; imported_quantity; exported_quantity; retained_array_test_generation; internal_circulation; dumped_load; losses; water_quantity; quantity_unit; density; density_unit; material_state; temperature; conversion_source; shared_driver; shared_total; owner; temperature_unit | 读取校准区间表计或记录实际因果份额；分开电网输入、输出、保留发电、循环及耗散测试负载。实际水体积转质量时保留同状态密度/温度/单位/来源。最终交换生成前核实实际能量支持。 汇总：各归属公用工程投入或实际输出 / N，每参考流；内部循环和耗散负载仅为审计物理状态。 | kWh; kg | 每个实际公用工程区间及测试/复测事件 | 完整作业及供应商期间，不含后续运行 | 已识别站及归属共用表计 | 每参考流 | 表计校准、区间平衡、责任及换算证据 |
| cp_fuel | station_integration | 供给燃料及燃烧活动 | fuel_balance | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; fuel_sku; equipment_id; opening_usable; gross_receipts; tare; closing_usable; outward_usable_return; burned_activity; nonburned_waste; uncontained_loss; total_spill_audit; recovered_spill_closing; quantity; unit; density; density_unit; material_state; temperature; conversion_source; convention; owner; measured_volume; volume_unit; burned_measurement_method; balance_audit; uncertainty; unknown_loss; temperature_unit | 采用兼容质量或附实际规格密度/状态/温度/来源的体积测量。结合设备日志核对互斥库存、退回、燃烧、废物及损失；保留未燃烧废物/损失的上游负担。 要求实测燃烧或已审计完整去向平衡及不确定性；未解决损失不得成为燃烧活动。 汇总：归属上游燃料供给 / N，每参考流；燃烧活动独立保留用于 calc_species。 | kg | 每次燃料收货、使用、期末或损失/退回事件 | 全部作业及归属供应商阶段/期间 | 各实际燃料责任方/设备 | 每参考流 | 燃料单、油罐读数、设备日志及质量平衡闭合 |
| cp_services | station_integration | 供应商、处理及货运 | provider_shipment | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; provider_id; contract_id; scope; completed_result; native_quantity; native_unit; upstream_resources; coverage_matrix; shipment_id; transport_mode; payload_mass; payload_unit; distance; distance_unit; empty_return; shared_load_driver; shared_total; receiver; treatment_record; owner | 将实际完成服务及资源声明与合同、实际货运分段及废物接收者匹配。要求原生单位兼容及上游边界，直接与供应商内含资源精确识别一次。 汇总：实际归属供应商原生活动或 kg*km / N，每参考流；不以价格转件数。 | actual native unit; kg*km | 每个有界服务、货运、处理批次及发票覆盖期末 | 完整作业及实际上游服务期间 | 服务本站的实际供应商/路线/接收者 | 每参考流 | 合同、已完成测试、资源声明、运单及接收单 |
| cp_assets | station_integration | 完整寿命共享资产归属 | asset_life | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; asset_identity; consuming_jobs_nodes; manufacture; maintenance; replacements; termination; end_of_life; observed_history; observed_driver; evidenced_remainder; remainder_driver; whole_life_driver; job_driver; driver_unit; coverage; uncertainty; sensitivity; update_trigger; provider_inclusion; owner; selected_native_view; native_unit; remainder_source; replacement_source; termination_source; eol_source; last_update; next_update | 列出全部使用者及期间。取得完整已观察寿命或已观察历史加有证据的剩余/替换/终止/寿命终结。作业分子及全寿命分母须使用完全兼容的驱动定义，并核对供应商/租赁覆盖。 汇总：精确选择一种经核实视图。每参考流资产当量数量 = (实际作业驱动量 / 完整寿命驱动量) / N；每参考流完整生命周期原生服务驱动数量 = 实际作业原生服务驱动量 / N。仅一次匹配对应的生命周期完整上游单位负担。不得缺失分母；不得混用视图。 | actual compatible native service driver | 每次资产使用、维护/替换及证据更新 | 跨全部作业及期间的完整寿命，加本作业阶段份额 | 各实际共享提升/测试/工具资产的全部使用者 | 每参考流 | 资产历史、有证据未来服务、替换/寿命终结、不确定性及敏感性 |
| cp_exits | station_integration | 物理退回、拆除设备及废物 | exit_manifest | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; exit_id; supply_or_old_asset_id; sku_or_serial; quantity; unit; net_tare; measured_mass; measured_length; material_state; density; density_unit; temperature; conversion_source; usable_condition; waste_class; temporary_stock; receiver; destination; treatment_coverage; transfer_pair; owner; temperature_unit | 将实际旧序列号或新供给 SKU 与实测原生移出及合格再用/废物/退回状态匹配；分开暂存库存。仅在实际独立需要且实测时使用质量。匹配接收者/处理并防止可再用与废物重复输出。 汇总：各实际向外原生数量 / N，每参考流；不使用负的新投入或重复退回信用。 | item; m; kg | 每次向外移出、中间库存期末及接收者确认 | 实际拆除至最终接收者确认，包括结转期间 | 本站旧设备及新供给移出 | 每参考流 | 序列号/SKU 台账、称量、状态及授权接收文件 |
| cp_releases | station_integration | 物种及接收介质证据 | release_event | job_id; station_id; site_id; asset_id; campaign_id; batch_id; event_id; phase; period; event_type; resource_owner; product_sku; fuel_equipment; species; receiving_medium; measured_release; activity; activity_unit; factor; factor_unit; factor_applicability; composition; fate_fraction; captured_stock; outward_return; captured_waste; treatment; release_quantity; quantity_unit; uncertainty; absence_evidence; factor_source; composition_basis; composition_source; fate_basis; fate_source; physical_release_unit; complete_factor_coverage | 采用实际实测物种释放或有效燃烧活动因子/组成去向链并识别实际介质。分开常规与事故事件及整产品物理审计；收集/退回/废物/处理仅排除一次。仅安全浓度或安全数据表不足。 汇总：实际物种至介质释放质量 / N，每参考流；与物理产品/燃料台账不可相加。 | kg | 每个实际常规区间或事故；每个实际物种/介质 | 全部作业及归属供应商阶段/期间 | 实际释放位置及接收介质 | 每参考流 | 校准测量或适用因子/组成去向证据及事故日志 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_direct | replacement_central_inverter,interface_parts_count,interface_cable_length,installation_mass_supplies,water_supply,fuel_supply,electricity_import,freight_service,specialist_service,shared_asset_service,removed_reusable_equipment,usable_count_returns,usable_length_returns,usable_mass_returns,test_electricity_export,removed_electronic_waste,new_supply_waste,contained_wastewater,nonburned_fuel_waste,direct_combustion_species,direct_incident_species,waste_treatment_service | 对各实际原生交换，数量 = 归属实际原生数量 / N。N 来自 cp_acceptance，是最终验收唯一站的正数数量。保持分子单位及互斥角色；这是直接每参考归属，不是质量/容量换算。 | actual native quantity; N; relevant node-owned protocol | 每参考流原生交换 |  |
| calc_supply | replacement_central_inverter,interface_parts_count,interface_cable_length,installation_mass_supplies,fuel_supply,usable_count_returns,usable_length_returns,usable_mass_returns | S = 归属期初库存 + 外部去皮毛收货量 - 结转期末库存；总量含移出使用 S 作为上游并保留独立物理可用退回，仅消耗使用 S 减去一次匹配向外可用退回。内部领用不是收货。未退回废物/损失仍含上游；无额外退回信用。 | cp_supply; cp_fuel; cp_exits; declared supply convention | 归属原生供给与独立物理移出 |  |
| calc_fuel | fuel_supply,nonburned_fuel_waste | 燃烧活动 = 期初可用燃料 + 外部去皮收货 - 期末可用燃料 - 向外可用退回 - 未燃烧废物 - 未围控未燃烧损失。各去向互斥；总溢漏仅审计，回收溢漏已在期末可用库存。上游供给遵循 calc_supply，不仅对应燃烧活动。 燃烧活动须实测或由已审计完整去向平衡及声明不确定性支持；未知/未测损失保持未解决，不得自动归作燃烧。 | cp_fuel; cp_exits; actual specification | 独立燃烧活动与燃料物理平衡 |  |
| calc_electricity | electricity_import,test_electricity_export | 分别记录区间一致的输入、实际输出、保留阵列测试发电、内部循环、耗散负载及损失。实际作业因果份额归属一次；内部循环为不可相加审计活动。不得从输入电力或施工负担扣除输出或预测发电。 | cp_utilities; actual meter intervals and owner | 独立实际电力台账 |  |
| calc_freight | freight_service | 实际归属货运活动 = 实际货物质量 kg 乘实际分段距离 km 的总和，附有证据的载荷及空返归属。仅含未被上游/供应商覆盖的分段。通过 calc_direct 将归属 kg*km 除以 N。 | cp_services; shipment payload; leg distance; ownership | 实际 kg*km 服务 |  |
| calc_provider | specialist_service,waste_treatment_service | 采用与范围、结果及上游资源覆盖匹配的已完成实际供应商原生活动。实际作业份额仅归属一次；价格/小时不转件数，单独处理移出不是处理服务清单。 | cp_services; actual provider and native support | 有界原生供应商服务 |  |
| calc_asset | shared_asset_service | 精确选择一种已核实实际上游视图。资产当量视图：原生数量 = 实际作业驱动量 / 完整寿命驱动量，单位资产当量上游负担 = 制造 + 维护 + 替换 + 寿命终结。完整生命周期每驱动单位服务视图：原生服务数量 = 实际作业驱动量，单位原生驱动量上游负担 = 完整寿命负担 / 完整寿命驱动量。两者得到作业负担 = 完整寿命负担乘实际作业驱动量 / 完整寿命驱动量。选择前核实实际原生单位及覆盖；不得混用小时与无量纲份额。采用覆盖全部作业/节点/期间的完整已观察寿命，或已观察历史加有来源证据的剩余/替换/终止/寿命终结，附不确定性、敏感性及更新。选定原生数量仅除以 N 一次。 | cp_assets; compatible all-life denominator; coverage matrix | 作业归属完整寿命资产负担 |  |
| calc_exit | removed_reusable_equipment,usable_count_returns,usable_length_returns,usable_mass_returns,removed_electronic_waste,new_supply_waste,contained_wastewater,nonburned_fuel_waste | 依据序列号/SKU、状态、类别及接收者证据，将实际向外数量分配至一个互斥原生移出角色。结转期末库存不是向外移出。旧可再用设备与旧电子废物互斥；新可用退回仅与 calc_supply 匹配一次。件数/长度移出不需虚构质量换算；独立需要的废物质量须有实际同规格证据。 | cp_exits; cp_supply; cp_fuel; receiver | 实际互斥向外物理数量 |  |
| calc_species | direct_combustion_species,direct_incident_species | 实际物种释放 = 实测实际物种质量，或适用实际活动乘有效物种/介质因子，或实际释放产品数量乘有证据的组成及去向。保留/收集库存、可用退回、废物及处理仅排除一次；保留不确定性。不得仅以物理残差、安全浓度、安全数据表或无挥发性有机物声明作为排放质量。整产品和物种视图不可相加。 完整活动至物种排放因子已包含其声明组成/去向；除非该因子定义明确要求，不得再次乘组成或去向。 | cp_releases; cp_fuel; cp_exits; actual species and receiving medium | 实际物种/介质质量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| q_identity | 参考标识及配置 | 要求保留/更换物料清单、实际额定值/拓扑、固件/保护/控制状态、站标识、场址、设计及验收日期；不得主张 MWp/kWh 等价。 | cp_acceptance 及设计/序列号记录 |
| q_coverage | 资源覆盖及去向 | 完整覆盖全部实际直接及供应商资源、库存/去向、运输、废物及处理。实际未使用须显式举证；未解决数量、资源责任、支持链或废物去向仍为最终数据阻断项，不是零。 | 全部节点所属协议及覆盖矩阵 |
| q_ranges | 范围及不确定性 | 采集站/配置特定的观察分布、实际设计限值及不确定性。不提供通用材料/能量/测试产率或服务寿命。使用默认估算或主张发布就绪前须解决范围证据需求。 | 实际前景范围证据及敏感性 |
| q_period | 时间完整性 | 覆盖全部实际批次阶段、复测及结转期间，并纳入资产已观察历史/有证据剩余。记录替换/终止/寿命终结并按实际变化更新；不任意年化。 | 阶段/期间/事件连接及完整寿命资产记录 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_gate | 验收及保留接口 | 要求 N>0、唯一站标识、实际兼容保留的中压变压器/阵列/基础及完成核准机械/电气/保护/接地/SCADA/电网控制测试门槛、缺陷关闭、报告及运营方签字。缺失或失败门槛阻止验收输出。 | sma-utility-repowering; sma-pv-commissioning; sma-industrial-services |
| v_stock | 原生库存及互斥移出 | 核对各 SKU/原生单位、设备包部件排除、总量含移出或仅消耗约定、旧/新设备及互斥可用/废物/释放/期末角色。禁止任意质量换算、负的新投入或重复退回/信用。 |  |
| v_energy | 重新投运资源及物种 | 保持输入/输出/保留发电/循环/耗散负载台账独立，实际资源负责一次并保留包括废物/损失的供给燃料负担。核实实际燃烧活动/物种/介质证据及不可相加物理视图。禁止自动能量信用或理论排放推断。 |  |
| v_loops_periods | 返工及期间覆盖 | 将每次失败/中止/重复测试、安装拒收、清洁/准备/切换事件及资源链接至实际批次/小批次/事件/阶段/期间及原节点。未解决拒收不计验收；共享事件不得跨期间重复。 |  |
| v_assets | 共享供应商及资产 | 要求完整实际服务结果/上游覆盖及完整寿命制造/维护/替换/寿命终结资产证据，并有覆盖全部作业/期间的兼容作业/全寿命驱动量。剩余、替换、终止、分母或覆盖缺失阻止定稿；检查直接/供应商/租赁重复及敏感性。 |  |
| v_binding | 最终交换标识 | 最终数据集前核实各实际流、原生属性及单位支持，包括独立电能和实际供应商/资产链。产品标识未解决的候选不具备发布就绪性；检查通过不能核实外部标识或物理前景数据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景站换装服务数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同合格既有公用事业级地面光伏集中式逆变器保留变压器服务，披露配置及验收可比性；下游 process/lifecyclemodel 投影。 |
| excluded_use | 通用新电厂、通用逆变器供给、组件/变压器更换、电池、家用/仅组串式路线、容量或电量等价、未来避免影响主张。 |
| required_metadata | 实际站/场址/序列号标识、保留/更换物料清单、额定值/拓扑、合格变压器/基础/阵列接口、固件/保护/SCADA/电网状态、实际地方/制造商方法、测试/缺陷报告、签署/日期、N、批次/阶段/期间、资源责任及旧设备去向。 |
| required_quality_disclosure | 实际数量/范围证据、未解决实际 UUID/支持链、供应商及资产上游覆盖/寿命分母、库存/退回约定、测试能量分离、释放不确定性、去向缺失及敏感性；存在阻断项时不主张发布。 |
| update_trigger | 站配置/保留变压器、实际核准路线/门槛、供应商范围/资源覆盖、接收者/去向、UUID 支持、计量、资产剩余/替换/终止/寿命终结改变或出现实质新前景证据。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-powerplant-services | official_guidance | United Nations Statistics Division, CPC Ver.3.0 explanatory notes, 30 June 2025, subclass 54262, printed p.287; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 重型发电厂/设备建设、修理及改造的分类范围；不用于方法数量。 |
| sma-utility-repowering | extension_guidance | SMA America, Repowering utility; https://www.sma-america.com/repowering-utility | 集中式逆变器换装及可能保留中压变压器；多数兼容不等于实际兼容或设计保证。 |
| sma-pv-commissioning | extension_guidance | SMA Solar Technology, Commissioning large-scale PV power plants; https://www.sma.de/en/products/services-warranty/commissioning-large-scale-pv-power-plants | 安装核查、配置、完整功能测试及重新投运报告。 |
| sma-industrial-services | extension_guidance | SMA America, Services for Industrial Systems; https://www.sma-america.com/service-support/services-for-industrial-systems | 机械/电气就绪及完整直流—逆变器—交流测试路径；仅实际选用时纳入电网模拟。 |
| epri-inverter-repowering-abstract-2024 | literature | R. Dhakal, EPRI report 3002029900, 1 November 2024, Repowering and Retrofitting of Solar Inverters: A Field Case Study [Slides], OSTI 2476025 abstract only; https://www.osti.gov/biblio/2476025 | 仅摘要层面支持不同制造商换装的机械/电气/通信兼容性问题；不声称全文方法或性能。 |
