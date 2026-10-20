---
pcr_id: pcr.constructions-and-construction-services.construction-services.existing-single-storey-precast-concrete-industrial-building-roof-and-cladding-connection-seismic-retrofit-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有单层预制混凝土工业建筑屋面与围护连接抗震改造服务


## 1. 范围与适用性

适用于保留的经评估单层预制钢筋混凝土工厂或普通生产装配车间建筑的一项完整屋面与围护连接协调抗震改造干预。输入起点为已调查既有建筑的基础、柱、屋面、围护、几何和使用状态，输出为项目实际批准方案下的工程师与业主签署完成。包括临时隔离防护支撑、通达钻孔准备、屋面至梁及板柱板梁约束连接、必要界面修补、相应拆换物、检查试验复验与缺陷闭合。不得把单次连接作业、材料采购或围护维护代替完整交付。`reluis-industrial-retrofit-2024`。

排除新建完整建筑、整体重建、通用仓库、化工电力采矿及专用制造土建设施、仅设备约束或仅围护维护、未来运营与维护及未来地震后果。实际基础柱和传力路径评估不得省略；全面合规若需要其他加固，必须计入真实工程范围并披露，不能仅靠连接工程声称全面达标。工程完成不保证等同新规范设计建筑或未来地震风险数值。研究案例荷载系数、螺栓尺寸、年份与失效概率不作为默认设计值。

2012意大利工业厂房历史技术指南区分局部快速措施与后续整体抗震评估，强调连接与主结构相互作用及基础柱评估。此处仅作物理路线与门槛背景，实际当地批准设计适用；不引用其历史法规、比例、周期或尺寸作默认。 `reluis-dpc-industrial-guidelines-2012`.

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.existing-single-storey-precast-concrete-industrial-building-roof-and-cladding-connection-seismic-retrofit-services |
| classification_refs | CPC 3.0 54121; narrower; separate mapping review required |
| covered_products | 保留单层预制混凝土普通厂房或车间的屋面围护连接协调改造完成服务 |
| excluded_products | 新建资产；重建；通用仓库；专用厂设施；单一连接或维护；设备约束 |
| representative_product | 一栋已调查厂房按自身批准方案与签署门槛完成的连接改造 |
| production_route | 评估与范围批准；临时保护通达；屋面与围护连接整合；检查试验纠正复验；竣工验收 |
| market_state | 既有建筑保留状态下的改造服务已签署完成，非新增建筑资产 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成的屋面与围护连接协调抗震改造干预 |
| How much | 1 item |
| How well | 满足真实批准连接方案、试验、竣工核验及缺陷闭合签署完成门槛 |
| How long or cycle | 一次已完成干预，跨评估准备、连接施工、纠正复验及签署验收阶段；不预设寿命或未来地震效果 |
| reference_flow_link | `accepted_connection_retrofit` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| product_flow | 已完成的屋面与围护连接协调抗震改造干预 |
| flow_property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| unit_group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | item |
| required_qualifiers | building_id; intervention_id; location; use; storeys; structural_geometry; retained_condition; roof_cladding_system; columns_foundations_assessment; load_path; connection_strategy; seismic_demand; design_level; approved_scope; test_convention; signed_gate; completion_date; exclusions |


N 为完整合格且唯一的建筑干预数量，必须大于零。同一建筑的板件、螺栓、工种或复验不得扩大 N。不同几何、保留状态、连接方案、抗震需求和设计水平必须显式区分，不能仅凭计件而判定等价。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| count_completed | accepted_connection_retrofit | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N>0，唯一完整签署完成建筑干预；数量为 1 item。 |
| native_units | all inventory rows | 各实际流原生属性 | item; kg; m2; m; m3; kWh; kg*km | 保持原生供应与匹配可用外退单位；其他真实单位必须独立展开并核实支持身份，禁止统一强转质量。 |
| physical_conversion | all inventory rows | 有据物理换算 | 相容实际单位 | 保存原始操作数、温度及单位、成分或密度条件、因子来源；附加质量视图不叠加；燃料不得以热值替代电量或计件。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已调查并保留的单层预制钢筋混凝土工业建筑，记录既有损伤、连接、基础柱、几何、使用与隔离条件。 |
| starting_condition_role | 保留既有资产的干预起点，不是新购建筑。 |
| product_classification_scope | 普通工业厂房车间的施工修缮范围，CPC仅为外部映射背景。 |
| recursive_input_rule | 分包连接施工按其真实中间服务输入，完整BOM及供应方资源仅计一次，不递归采购本PCR完整输出。 |
| upstream_dataset_requirement | 每一新增材料、能源、测试、租赁及运输须匹配真实原生单位、状态、供应门槛与完整负荷范围；缺口阻断最终数据。 |
| disclosure | 披露实际场址、保留状态、批准范围、阶段、临时资源、连接设计、检查试验、共享覆盖及排除。 |


### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_scope | integration | 上述评估至签署完成全程保有；基础柱需求与传力路径不能从声称的整体合规中隐去。局部准备、拆换和界面修补无独立处理交付，留在整合节点。 | reluis-industrial-retrofit-2024 |
| boundary_resources | integration | 现场直接、分包、租赁、运输、人员出行、测试复验、备件、临时公用工程及废物均归属一次；完整供应或服务BOM不得重复采购。 |  |
| boundary_reject | integration | 未合格连接在 integration 内纠正复验，拒收期不计 N；失败材料进入真实废物或核实可用外退，保留已发生负荷。 |  |
| boundary_environment | integration | 按真实发生展开直接取水、气体取用或向水气土释放的专用实测基本交换；产品供应、受控废物与环境释放状态分开。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：按项目设计的围护板至柱及梁连接组件 (`cladding_connection_assemblies`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

记录经评估方案实际要求的板柱和板梁连接组件，包括实际约束与更换件。不得套用海报螺栓尺寸或统一紧固方案。

- 采集对象：按项目设计的围护板至柱及梁连接组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按实际SKU与配置使用 本节相应计算规则；安装、失败施工与更换尝试属于活动记录，同一件不得重复购入计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：`reluis-industrial-retrofit-2024`

范围证据需求：须取得实际批准连接明细、SKU物料清单数量、屋面或围护界面几何、收货存货平衡、失败安装更换及计数不确定性；无通用每栋螺栓数或海报尺寸证据。

#### 采集要求：实际按质量供应的局部界面修补与连接耗材 (`repair_consumables`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

仅展开项目实际使用的界面修补、锚固或防护产品，明确配方、状态及供应门槛。新增数量保留未退回损耗及失败施工耗材。

- 采集对象：实际按质量供应的局部界面修补与连接耗材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对实际质量供应产品按千克使用 本节相应计算规则；对计件、面积、长度或体积原生输入建立独立质量视图时须用 本节相应计算规则，且不得叠加。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：

范围证据需求：须有实际配方状态、收货皮重称量、局部界面修补尺寸、拒收工作耗用、期末库存及匹配可用外退；无通用修补质量或密度证据。

#### 采集要求：实际按面积供应的临时防护与界面片材 (`temporary_sheet_supplies`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

有实际发生时记录用于临时隔离、防护或必要界面施工的新增片材，明确材质、厚度、覆盖范围及保留可用库存。

- 采集对象：实际按面积供应的临时防护与界面片材
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：按平方米使用 本节相应计算规则；同一可复用片材重复铺设不得重复计为采购。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：

范围证据需求：须有实际原生面积或长度尺寸、厚度规格、铺设及库存状态、重复使用与新增收货、期末结转和已接纳可用外退记录；部署次数本身不等于新增供应。

#### 采集要求：实际按长度供应的界面与临时工程产品 (`temporary_linear_supplies`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

有实际发生时记录密封、固定或临时防护线性产品，保留尺寸与供应状态，真实新增收货与结转可用库存分开。

- 采集对象：实际按长度供应的界面与临时工程产品
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：按实际规格以米使用 本节相应计算规则；不得以建筑面积替代长度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：

范围证据需求：须有实际原生面积或长度尺寸、厚度规格、铺设及库存状态、重复使用与新增收货、期末结转和已接纳可用外退记录；部署次数本身不等于新增供应。

#### 采集要求：实际按体积供应的现场燃料上游供应 (`site_fuel`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

有实际发生时燃料属于上游产品输入，明确载能体、等级、体积状态与温度；上游供应与燃烧数量不同。其他原生燃料单位必须展开独立交换，不得强转为体积。

- 采集对象：实际按体积供应的现场燃料上游供应
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：供应量使用 本节相应计算规则，实际燃烧使用 本节相应计算规则；未退回废弃及损失保留上游负荷，禁止用无法解释的差额推定燃烧。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`
- 来源：

范围证据需求：须有实际载能体等级、原生体积条件、库存收货外退记录、实测燃烧或完整互斥去向、非燃废损不确定性及未知损失调查；无默认燃烧比例或热值替代证据。

#### 采集要求：进场安装与试验实际现场用电 (`site_electricity`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

有实际发生时用电覆盖钻孔、通达、局部修补及全部试验复验时段；区分服务内含与单独采购电量，防止重叠。按总输入记录，不得净扣输出、内部循环或内部损失。真实外供电必须新增独立实测产品输出交换，带接收门槛与归属。真实现场发电必须按明确供应方范围展开其载能体、资产及释放资源一次，不得视为无负荷发电。数据生产中须独立核实实际电量支持身份。

- 采集对象：进场安装与试验实际现场用电
- 流属性/单位：Energy / kWh
- 数量规则：计量可归属千瓦时并用 本节相应计算规则 除以 N 一次；保留供电单位与有据换算，不得以低位热值、高位热值或计件替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_power`
- 来源：

范围证据需求：须有实际总表读数、校准单位、项目份额、全部安装试验复验时段及服务内含与另供电覆盖；无通用每干预千瓦时证据。

#### 采集要求：实际完成的评估连接试验与验收服务成果 (`provider_test_services`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

仅在供应方确实交付可识别计件实体成果时展开，例如项目试验活动或签署工程核验。价格或人工小时不构成计件等价。其他原生服务单位必须以其属性及单位独立展开。

- 采集对象：实际完成的评估连接试验与验收服务成果
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按验收实体服务成果数量 / N 记录并匹配完整上游范围；另计未覆盖的人员出行、试验能耗、备件、租赁与废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_provider`
- 来源：

范围证据需求：须有服务方实际验收实体成果、原生服务属性单位、完成门槛、上游覆盖及未覆盖出行能耗试验备件；发票价格或小时本身不能确定计件数量。

#### 采集要求：按全生命周期归属的共享通达支撑钻孔与试验资产 (`shared_assets`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

共享平台、临时支撑、钻具和试验设备按整机等价计量时，必须识别真实资产并匹配整机全生命周期数据集。列出全部项目、节点、时段及外部使用方；租金本身不足。

- 采集对象：按全生命周期归属的共享通达支撑钻孔与试验资产
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：使用资产等价数量 = (job_driver / life_driver) / N，驱动单位须兼容且有实测记录，范围包括制造、维护、更换及寿命终结。不得再加每驱动服务视图。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assets`
- 来源：

范围证据需求：须有真实资产、兼容项目及全部使用方全寿命驱动、观测寿命历史和有据剩余、维护更换终止寿命终结、不确定性敏感性与更新；无通用资产寿命或项目比例证据。

#### 采集要求：材料临时资产与废物实际归属运输周转量 (`freight`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `product`.

实际边界运输包括供应方或服务方尚未覆盖的交货、退回与废物运输段，记录车辆、载荷份额、距离、空返及覆盖范围。

- 采集对象：材料临时资产与废物实际归属运输周转量
- 流属性/单位：mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则：按实际质量与距离单位用 本节相应计算规则 得到 kg*km，再除以 N 一次；空返通过兼容全路线数据集或显式车辆资源归属，不得编造运输质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freight`
- 来源：

范围证据需求：须有实际载荷质量与原生单位、归属份额、路线距离单位、空返记录及供应服务覆盖与不确定性；无通用运距或满载假设证据。

#### 采集要求：实际直接环境取水 (`direct_environmental_water`)

过程／待建立交换的方向／类型：`integration` / `inputs` / `elementary`.

确有地表水或地下水直接取用时，作为独立基本输入，与产品供水分开。必须明确真实水体、地点、取水许可、表计、体积口径与时段；没有直接取水则不建立交换。

- 采集对象：实际直接环境取水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：可归属实测取水体积 / N；按水源核对表计，不得将取水等同供水或消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_releases`
- 来源：

范围证据需求：须有实际水源水质、校准体积读数、直接取水或产品供水角色、事件状态与去向平衡、不确定性及复用结转；无通用每栋用水或排水比例证据。

#### 采集要求：向外退回的可用计件产品 (`usable_count_returns`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `product`.

仅记录已核实可用外退品，须与实际进货SKU、质量、状态、所有权及原生单位匹配。期末库存和拆下的历史构件不属于新增产品外退。

- 采集对象：向外退回的可用计件产品
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按 本节相应计算规则 声明的总投入带出口或净消耗口径仅扣减一次，记录外退量 / N，不再给予额外避免生产抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：

范围证据需求：须有实际外退转移、接收验收、可用质量状态及匹配进货SKU原生单位，并明确总投入或净消耗口径；期末库存与可用历史拆回部件属于不同状态。

#### 采集要求：向外退回的可用质量供应产品 (`usable_mass_returns`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `product`.

仅记录已核实可用外退品，须与实际进货SKU、质量、状态、所有权及原生单位匹配。期末库存和拆下的历史构件不属于新增产品外退。

- 采集对象：向外退回的可用质量供应产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 本节相应计算规则 声明的总投入带出口或净消耗口径仅扣减一次，记录外退量 / N，不再给予额外避免生产抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：

范围证据需求：须有实际外退转移、接收验收、可用质量状态及匹配进货SKU原生单位，并明确总投入或净消耗口径；期末库存与可用历史拆回部件属于不同状态。

#### 采集要求：向外退回的可用面积供应片材 (`usable_area_returns`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `product`.

仅记录已核实可用外退品，须与实际进货SKU、质量、状态、所有权及原生单位匹配。期末库存和拆下的历史构件不属于新增产品外退。

- 采集对象：向外退回的可用面积供应片材
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：按 本节相应计算规则 声明的总投入带出口或净消耗口径仅扣减一次，记录外退量 / N，不再给予额外避免生产抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：

范围证据需求：须有实际外退转移、接收验收、可用质量状态及匹配进货SKU原生单位，并明确总投入或净消耗口径；期末库存与可用历史拆回部件属于不同状态。

#### 采集要求：向外退回的可用长度供应产品 (`usable_length_returns`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `product`.

仅记录已核实可用外退品，须与实际进货SKU、质量、状态、所有权及原生单位匹配。期末库存和拆下的历史构件不属于新增产品外退。

- 采集对象：向外退回的可用长度供应产品
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：按 本节相应计算规则 声明的总投入带出口或净消耗口径仅扣减一次，记录外退量 / N，不再给予额外避免生产抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：

范围证据需求：须有实际外退转移、接收验收、可用质量状态及匹配进货SKU原生单位，并明确总投入或净消耗口径；期末库存与可用历史拆回部件属于不同状态。

#### 采集要求：向外退回的可用体积供应产品 (`usable_volume_returns`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `product`.

仅记录已核实可用外退品，须与实际进货SKU、质量、状态、所有权及原生单位匹配。期末库存和拆下的历史构件不属于新增产品外退。

- 采集对象：向外退回的可用体积供应产品
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按 本节相应计算规则 声明的总投入带出口或净消耗口径仅扣减一次，记录外退量 / N，不再给予额外避免生产抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：

范围证据需求：须有实际外退转移、接收验收、可用质量状态及匹配进货SKU原生单位，并明确总投入或净消耗口径；期末库存与可用历史拆回部件属于不同状态。

#### 采集要求：实际受控拆除材料与现场废物分项 (`removed_and_site_wastes`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `waste`.

按实测废物身份、类别及处理目的地展开历史连接或界面拆除物、失败新增组件、边角料、容器收集粉尘、包装及污染残余。历史资产不得作为负新增采购。现场纠正留在整合节点，场外出口保留转移标识。实际可用历史拆回部件必须单独记录真实回收产品状态，不属于未用新增产品匹配外退。若受控废水以原生体积交付处理，必须按立方米新增专用废物交换，计量体积状态、接收方、处理及运输覆盖；不得改为直接环境基本排放。

- 采集对象：实际受控拆除材料与现场废物分项
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净废物质量 / N；废物处理与运输仅覆盖一次，保留全部应承担新增材料上游负荷；不得预设回收率或再生抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

范围证据需求：须有实测分项类别、历史或新增来源、干湿或含水基准、净质量皮重、接收方及处理运输门槛。原生体积受控废水须独立废物交换与体积状态记录；无通用废物比例证据。

#### 采集要求：向空气实际排放的逐物种物质 (`actual_air_species`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `elementary`.

实际燃烧、钻孔粉尘或化学品使用存在排放时，必须按实测物种或粒径分级与接收介质展开具体基本交换。完整物种因子与部分成分模型属于不同方法，不得编造尾气污染物、VOC总量或以安全限值充当排放量。

- 采集对象：向空气实际排放的逐物种物质
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用 本节相应计算规则 按实测质量、匹配活动量乘物种因子、或实际全流体释放量乘有据成分与去向计算，再除以 N 一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_releases`
- 来源：

范围证据需求：须有实际物质粒径与接收介质、实测释放质量或兼容活动量物种因子及单位来源，或实际全流体释放和有据成分去向。保留捕集回收与非叠加视图；无默认物种、基于安全说明书的排放量或重复因子成分证据。

#### 采集要求：向明确环境实际释放的全液体 (`direct_liquid_release`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `elementary`.

只有向明确接收环境直接释放的液体才属于基本输出，受控送去处理的废水属于废物。必须展开实际接收水体身份和实测体积，另识别真实污染物种；全液体与组分视图不得叠加。

- 采集对象：向明确环境实际释放的全液体
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：实测直接液体释放体积 / N；保留状态、温度及有据体积基准；不得默认排水等于进水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_releases`
- 来源：

范围证据需求：须有实测实际直接全液体体积状态及接收水土去向、独立受控处理转移和另有证据的组分物种；不得默认进出水相等或叠加全流体与物种负荷。

#### 采集要求：向水或土壤实际排放的逐物种物质 (`actual_water_soil_species`)

过程／待建立交换的方向／类型：`integration` / `outputs` / `elementary`.

实际泄漏或直接排水存在时，必须按物质、接收分室与去向展开。受控废物、回收期末库存、可用外退及未受控损失属于互斥去向。若存在按原生体积状态计量的环境气体取用或释放，还必须按实际气体身份、压力、温度及其单位新增专用实测交换。

- 采集对象：向水或土壤实际排放的逐物种物质
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 本节相应计算规则 得到实际释放质量与接收介质 / N；不得将总泄漏同时列为回收材料和排放物种，也不得重复叠加全流体质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_releases`
- 来源：

范围证据需求：须有实际物质粒径与接收介质、实测释放质量或兼容活动量物种因子及单位来源，或实际全流体释放和有据成分去向。保留捕集回收与非叠加视图；无默认物种、基于安全说明书的排放量或重复因子成分证据。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| integration | 保留厂房连接整合与验证 | required | 全部范围内干预 | 整合屋面及围护连接并完成签署验收 | 1 item |

屋面至梁及围护板至柱、梁为不同组件角色，由批准连接策略整合进保留主结构。结构连接、耗能或约束件与实际界面修补材料均按清单记录。检查不合格连接在本节点返工复验，失败材料的场外出口使用转移标识连接至接收方，不能形成第二个合格输出。共享资产覆盖施工、通达、修补及试验阶段与其他项目、节点、时段，详见 cp_assets。

### 过程：保留厂房连接整合与验证（`integration`）

#### 输入

##### 产品流

###### 按项目设计的屋面至梁约束组件 （`roof_connection_assemblies`）

按实际SKU、配置与安装界面逐项记录连接件、板件、紧固件、约束或耗能组件。采购完整组件时仅计一次完整物料清单，另购零件保留独立身份。既有屋面与梁属于保留起始状态。

- 选定流：按项目设计的屋面至梁约束组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：对每种实际计件品按 本节相应计算规则 核对存货；不得把安装数量等同新增采购量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：`reluis-industrial-retrofit-2024`

范围证据需求：须取得实际批准连接明细、SKU物料清单数量、屋面或围护界面几何、收货存货平衡、失败安装更换及计数不确定性；无通用每栋螺栓数或海报尺寸证据。

###### 现场准备与试验实际供应的产品水 （`product_water`）

有实际发生时，采购或公用设施供水作为技术系统产品输入，与直接环境取水区分，记录来源、水质、表计及实际准备、清理或试验用途。

- 选定流：现场准备与试验实际供应的产品水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按立方米使用 本节相应计算规则 与计量供水记录；区分可用退水与期末库存，不得仅凭供水量推断排水或消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_supply`
- 来源：

范围证据需求：须有实际水源水质、校准体积读数、直接取水或产品供水角色、事件状态与去向平衡、不确定性及复用结转；无通用每栋用水或排水比例证据。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的屋面与围护连接协调抗震改造干预 （`accepted_connection_retrofit`）

经评估的既有单层预制钢筋混凝土厂房或车间，完成项目设计安装、必要检查试验、传力路径与竣工核验、缺陷闭合及工程师和业主签署完成后，形成一个干预成果。建筑仅计一次，不按屋面板、螺栓、工种或试验次数计数。

- 选定流：已完成的屋面与围护连接协调抗震改造干预
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：采集计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate`
- 来源：`reluis-industrial-retrofit-2024`

范围证据需求：须有唯一建筑干预标识、实际范围几何、必要试验、缺陷闭合及工程师业主签署门槛证明 N>0。恰为 1 item 是归一化，不是实测完成率或风险降低。

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_stock | supplies and returns | 逐SKU单位采用 gross-with-outlets：S=opening_attributed+net_receipts-closing_carried，usable_return 作为匹配产品出口；或 consumed-only：输入 S-usable_return 且该退回仅作非叠加审计视图。必须声明一种，扣退恰好一次。内部发料不是新购，期末库存不是外退，未退废损保留上游负荷。 |  |
| allocation_assets | shared_assets | 采用 cp_assets 全部使用方与全寿命驱动记录，整机等价=(job_driver/life_driver)/N，匹配制造、维护、更换及寿命终结完整数据。或在实际数据生产明确改用生命周期完整每驱动服务时，服务量=job_driver/N 并匹配同单位负荷；两种视图不合并、不重复归一化。不得编造寿命；保留观测历史、有据剩余、终止、更换、来源、不确定性、敏感性及更新。 |  |
| allocation_failures | integration | 无默认共产品抵扣；失败施工、复验与损耗归属已完成干预，拒收或未完工不计 N；实际可用回收物与废物分开，另有功能产品须作独立审查而非默认避免负荷。 |  |
| allocation_phases | integration | 枚举评估准备、连接施工、纠正复验和最终签署验收的实际起止时段，按 event_id 将投入、资产、出口及事件归属 phase_id/period_id，并记录逐时段归属决定。资产制造、维护、更换、终止及寿命终结保留全寿命链接；阶段间发料或结转不产生第二次采购或第二次完成输出。未明确更换或终止处理阻断最终数据。 |  |

## 8. 前景数据采集计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | integration | 已验收干预成果 | 建筑验收台账 | building_id; intervention_id; site_id; job_id; event_id; phase_id; period_id; phase_start; phase_end; assessment_preparation_phase; installation_phase; correction_retest_phase; acceptance_phase; event_phase_link; attribution_decision; survey_date; building_use; storeys; structural_geometry; roof_type; cladding_type; retained_condition; columns_foundations_assessment; load_path; seismic_demand; design_level; approved_scheme; actual_installed_connections; inspection_records; anchor_test_records; as_built_verification; defect_status; engineer_signoff; owner_signoff; completion_date; unique_completed_count_N | 检查批准调查、安装、试验、竣工记录与已闭合缺陷签署完成记录，仅接纳完整范围内建筑干预。 汇总细则：N 个唯一完成干预；每参考流 1 item | item | 逐干预及最终移交 | 实际从起始调查到签署完成；相关库存按完整原范围保留 | 具名场址与干预；共享资产列全部使用方 | 每参考流 | 签署门槛；去重标识 |
| cp_supply | integration | 新增供应与可用外退 | 原生库存与转移台账 | site_id; job_id; intervention_id; process_id; campaign_id; batch_id; event_id; phase_id; period_id; supplier_id; sku; formulation; state; native_property; native_unit; opening_attributed; external_gross; tare; net_receipts; internal_issue; installed_quantity; closing_carried; usable_return; return_unit; return_transfer_id; return_quality; nonreturned_waste; loss; convention; dimension; thickness; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; mass_view_source; conversion_factor; conversion_unit; conversion_source; N | 按实际SKU与原生单位核对收货、供应票据、校准表计秤及可用外退验收，历史拆除与新增库存分开。 汇总细则：calc_stock 与 calc_mass_view；可归属数量 / N，每参考流仅归一化一次 | actual native item, kg, m2, m or m3 | 每次收货、外退及期末 | 实际从起始调查到签署完成；相关库存按完整原范围保留 | 具名场址与干预；共享资产列全部使用方 | 每参考流 | 库存闭合；无重复扣退 |
| cp_fuel | integration | 燃料供应与真实燃烧 | 燃料库存及互斥去向记录 | site_id; job_id; intervention_id; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; carrier; grade; native_unit; volume_state; density; density_unit; density_state; density_source; temperature; temperature_unit; pressure; pressure_unit; opening_attributed; external_gross; tare; net_receipts; closing_carried; usable_return; measured_burn; burn_method; burn_meter; nonburned_waste; uncontained_loss; carry; total_spill_audit; recovered_closing; fate_uncertainty; unknown_loss_investigation; conversion_factor; conversion_unit; conversion_source; N | 采用校准燃烧计量或经审计完整互斥原生单位去向记录；调查未知损失而非分配给燃烧。 汇总细则：calc_stock 供应及 calc_fuel_fates 燃烧 / N，每参考流一次 | m3 with state; other actual native units expanded | 逐燃料事件及结账 | 实际从起始调查到签署完成；相关库存按完整原范围保留 | 具名场址与干预；共享资产列全部使用方 | 每参考流 | 校准；去向完整；不确定性 |
| cp_power | integration | 真实电力 | 表计记录 | site_id; job_id; intervention_id; asset_id; event_id; phase_id; period_id; meter_id; meter_source; opening_reading; closing_reading; gross_import; gross_export; export_register; onsite_generation; generation_source; generation_resource_coverage; internal_circulation; internal_losses; supplied_unit; job_share; attribution_driver; driver_unit; provider_coverage; conversion_factor; conversion_unit; conversion_source; N | 读取校准总输入及输出计量登记和真实现场发电表，核对来源、供应方范围与实际归属驱动及单位。内部循环损失不得净扣输出；真实外供独立输出、现场发电资源展开一次，区分共享与复验用电。 汇总细则：可归属计量电量 / N，每参考流一次 | kWh; actual supplied unit retained | 每施工与试验阶段 | 实际从起始调查到签署完成；相关库存按完整原范围保留 | 具名场址与干预；共享资产列全部使用方 | 每参考流 | 表计来源与兼容上游电力 |
| cp_provider | integration | 已完成供应方成果 | 实体服务验收与覆盖记录 | site_id; job_id; intervention_id; provider_id; service_id; event_id; phase_id; period_id; actual_completed_result; native_property; native_unit; accepted_quantity; coverage_manufacture; coverage_materials; coverage_travel; coverage_energy; coverage_water; coverage_spares; coverage_rental; coverage_waste; upstream_dataset; excluded_resources; N | 核实真实已完成实体成果及完整上游边界，其他原生单位服务另展开，不得把价格或小时转成件。 汇总细则：匹配已完成实体数量 / N，每参考流一次；未覆盖资源显式补计一次 | item for actual counted result; others expanded | 逐服务及验收 | 实际从起始调查到签署完成；相关库存按完整原范围保留 | 具名场址与干预；共享资产列全部使用方 | 每参考流 | 验收；覆盖矩阵；上游门槛 |
| cp_assets | integration | 共享资产生命周期归属 | 资产寿命与使用台账 | site_id; job_id; intervention_id; asset_id; consumer_job_id; consumer_node_id; event_id; phase_id; period_id; service_period; driver_name; driver_unit; job_driver; life_driver; observed_history; observed_life; evidenced_remainder; replacement_schedule; termination_condition; manufacture_scope; maintenance_scope; replacement_scope; end_of_life_scope; lifecycle_dataset; evidence_source; uncertainty; sensitivity; update_trigger; N | 枚举全部资产使用方、项目、节点与时段；采用已观测完整寿命，或观测历史加有据剩余寿命、更换、终止与寿命终结。寿命或覆盖缺口阻断最终数据。 汇总细则：(job_driver / life_driver) / N 整机等价，每参考流一次；不再加每驱动视图 | compatible actual driver and whole-asset item | 逐使用及寿命更新 | 全部使用方完整生命周期：制造、全部项目节点时段、维护、更换、终止及寿命终结；不限制于本次调查至完工。 | 具名场址与干预；共享资产列全部使用方 | 每参考流 | 全部使用方；完整生命周期；敏感性与更新证据 |
| cp_freight | integration | 运输边界覆盖 | 载荷距离发运记录 | site_id; job_id; intervention_id; provider_id; vehicle_id; event_id; phase_id; period_id; transfer_id; cargo_identity; load_mass; mass_unit; distance; distance_unit; route; load_share; empty_return; upstream_coverage; vehicle_resources; conversion_factor; conversion_source; N | 核对发运、已接纳外退及废物转移票据，保留实际载荷与路线单位、内含空返和覆盖缺项。 汇总细则：calc_freight 后除以 N，每参考流一次；上游运输段无重叠 | kg*km from actual units | 逐行程及路线闭合 | 实际从起始调查到签署完成；相关库存按完整原范围保留 | 具名场址与干预；共享资产列全部使用方 | 每参考流 | 票据；路线；回程覆盖 |
| cp_waste | integration | 受控废物与拒收工作 | 废物转移及缺陷路径台账 | site_id; job_id; intervention_id; event_id; phase_id; period_id; transfer_id; origin; historic_or_new; waste_identity; hazard_class; gross_mass; tare; net_mass; mass_unit; measured_volume; volume_unit; volume_state; moisture; moisture_basis; dry_wet_basis; recovered_historic_state; rejected_connection_id; correction_loop; final_route; receiver; treatment_gate; transport_coverage; treatment_coverage; no_credit; N | 分项称量实际废物，核对缺陷连接纠正复验和场外接收记录，区分可用产品外退、回收期末库存及废物。 汇总细则：可归属废物净质量 / N，每参考流一次；拒收状态不得计入 N | kg; other native waste units independently expanded | 逐缺陷、拆除及转移 | 实际从起始调查到签署完成；相关库存按完整原范围保留 | 具名场址与干预；共享资产列全部使用方 | 每参考流 | 称量；接收方与缺陷闭合证据 |
| cp_releases | integration | 直接环境取用与释放 | 实测基本流及物种记录 | site_id; job_id; intervention_id; asset_id; event_id; phase_id; period_id; substance; particle_fraction; receiving_medium; water_body; location; permit; direction; measured_mass; mass_unit; measured_volume; volume_unit; volume_state; temperature; temperature_unit; pressure; pressure_unit; matched_activity; activity_unit; species_factor; factor_unit; factor_basis; factor_source; whole_fluid_release; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; method_choice; complete_species_factor; captured_waste; recovered_closing; nonadditive_view; uncertainty; N | 实测真实物种与介质，或采用兼容完整物种因子，或有据全流体成分与去向。记录实际直接水气角色并展开专用具体交换；无发生须有证据，不得默认零。 汇总细则：calc_species 或实测直接体积 / N，每参考流一次；全流体与组分视图不叠加 | kg species; m3 actual water; actual native gas units expanded | 逐取用、释放与试验事件 | 实际从起始调查到签署完成；相关库存按完整原范围保留 | 具名场址与干预；共享资产列全部使用方 | 每参考流 | 物种与介质；因子兼容；去向闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | all inventory rows | q_normalized = attributable_quantity / N；先按同一场址、项目、阶段、时段归属，再按每参考流除以 N 一次。 | attributable_quantity; N; cp_gate | 每参考流原生单位数量 |  |
| calc_stock | roof_connection_assemblies; cladding_connection_assemblies; repair_consumables; temporary_sheet_supplies; temporary_linear_supplies; product_water; site_fuel; usable_count_returns; usable_mass_returns; usable_area_returns; usable_length_returns; usable_volume_returns | net_receipts = external_gross - tare; S = opening_attributed + net_receipts - closing_carried；按 allocation_stock 所选口径，gross-with-outlets 输入 S、匹配出口 usable_return；consumed-only 输入 S-usable_return、退回仅作非叠加审计。均除以 N 一次。 | opening_attributed; external_gross; tare; closing_carried; usable_return; convention; N; cp_supply; cp_fuel | 无重复扣退的原生输入与匹配外退 |  |
| calc_mass_view | all inventory rows | 独立质量视图仅按实际SKU尺寸或体积、密度、状态、含水率、温度及单位与来源建立；保持维度相容，并声明与原生物理清单不叠加，禁止无据按件或面积换质量。 | sku; dimension; thickness; density; density_unit; moisture; temperature; temperature_unit; mass_view_source; cp_supply | 有据且非叠加的质量视图 |  |
| calc_fuel_fates | site_fuel; actual_air_species; actual_water_soil_species | 优先实际计量 measured_burn；或以完整审计互斥原生单位去向确定燃烧。退回、非燃废弃、未受控损失及结转互斥；total_spill_audit 仅审计，recovered_closing 已在 closing_carried 内，未知损失调查不得残差推燃烧。 | measured_burn; burn_method; usable_return; nonburned_waste; uncontained_loss; carry; total_spill_audit; recovered_closing; fate_uncertainty; unknown_loss_investigation; cp_fuel | 实际燃烧活动与独立非燃去向 |  |
| calc_freight | freight | freight_work = load_mass_kg * distance_km * load_share；保留质量与距离原单位及换算因子；按覆盖矩阵处理空返及未覆盖车辆资源，再除以 N 一次。 | load_mass; mass_unit; distance; distance_unit; load_share; empty_return; upstream_coverage; conversion_factor; conversion_source; N; cp_freight | 每参考流 kg*km 与未覆盖资源 |  |
| calc_species | actual_air_species; actual_water_soil_species | 在实测物种质量、匹配活动量*完整物种因子、实际全流体释放量*有据成分*去向三种中选实际有效方法；完整因子不得再次乘成分或去向。逐物种与介质除以 N 一次，全流体与组分视图不叠加。 | measured_mass; matched_activity; activity_unit; species_factor; factor_unit; factor_basis; factor_source; whole_fluid_release; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; method_choice; complete_species_factor; N; cp_releases | 每参考流实际物种与接收介质质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_gate | integration | 具名建筑、真实批准范围及完整闭合验收记录；工程完成不代表全球通用规范、未来风险或与新楼等效。 | reluis-industrial-retrofit-2024 |
| quality_complete | all inventory rows | 真实SKU、供应门槛、原生单位、覆盖范围与排放介质必须明确；缺失资源、寿命驱动或实际水气角色会阻断最终数据，不得凭PCR候选通过而视为零。 | 收货/测试/表计/服务覆盖/资产寿命/环境记录 |
| quality_trace | all inventory rows | 按 site_id、job_id、intervention_id、实际资产、事件、阶段与时段关联，不同单位状态禁止相加；保存原始操作数、不确定性、敏感性及更新触发。 | 可追溯原始记录与质量审计 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_connection_retrofit | 核对 N>0 唯一完整干预、参考名称和输出行、实际基础柱及传力路径评估、批准连接方案、检查试验与签署缺陷闭合；禁止板件螺栓或复验扩大 N。 | reluis-industrial-retrofit-2024 |
| validate_stock | all supply and return rows | 原生单位与实际状态匹配，核对存货、总量净量口径、可用外退恰好一次、历史拆除无负采购、损耗保留。 |  |
| validate_shared | shared_assets; provider_test_services; freight | 共享资产所有使用方、节点、时段与全寿命证据完整；整机或服务视图仅一种。服务实际成果与单位、租赁测试备件临时水电人员运输及空返覆盖不得重复或遗漏；缺口阻断。 |  |
| validate_rework | integration | 拒收连接留在本节点返工复验，真实废物及可用外退去向有记录；拒收未闭合不得计合格输出，负荷不因失败消失。 |  |
| validate_environment | all elementary rows | 必须按实际物种、接收介质、原生水气取放量与完整原始操作数展开；产品、废物、基本流分开，非叠加全流体与物种视图，因子不得重复乘成分去向。 |  |
| validate_phases | integration | 检查逐时段边界、事件与投入资产出口链接、归属决定及更换终止记录；阶段间与共享生命周期负荷不重复，未明确更换或终止阻断最终数据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 具名保留厂房连接改造服务的前景数据包，供后续过程或生命周期模型投影 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际范围、起始状态、连接策略与签署门槛兼容的已完成工业厂房改造建模 |
| excluded_use | 新建整栋资产；通用安全证书；未来地震绩效保证；其他建筑用途或技术未经复核替代 |
| required_metadata | 具名建筑及干预标识；全部参考限定；N与计数口径；时段、范围、工艺、服务覆盖、共享寿命、资源与环境清单 |
| required_quality_disclosure | 资料缺口与不确定性；真实验收证据；排放及换算来源；全寿命归属与敏感性；数值范围证据限制 |
| update_trigger | 批准设计或保留状态变化；补充验收或库存；实际SKU服务及环境证据更正；共享寿命更换与终止更新 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| reluis-industrial-retrofit-2024 | literature | https://www.reluis.it/wp-content/uploads/2024/12/14_Poster_Penna_WP3_T2a.pdf | 仅工业建筑段的既有单层预制RC案例、屋面及围护连接类型、传统与耗能改造和因地制宜局限；不作通用数值默认或新楼等效保证。 |
| unsd-cpc3-54121-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed p. 283, subclass 54121. | 普通工业建筑施工修缮与采矿电力化工及专用制造设施排除的分类范围，非工艺计量来源。 |
| reluis-dpc-industrial-guidelines-2012 | official_guidance | https://www.reluis.it?wpdmdl=4968&ind=4101 | 2012历史工业厂房技术指南前言及第3.3–3.5节：局部与整体阶段、连接相互作用、基础柱与实际评估；非现行全球法规或通用数值默认。 |
