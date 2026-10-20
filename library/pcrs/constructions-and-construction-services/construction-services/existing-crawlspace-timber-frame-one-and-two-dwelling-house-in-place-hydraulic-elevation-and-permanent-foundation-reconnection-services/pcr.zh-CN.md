---
pcr_id: pcr.constructions-and-construction-services.construction-services.existing-crawlspace-timber-frame-one-and-two-dwelling-house-in-place-hydraulic-elevation-and-permanent-foundation-reconnection-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有爬行空间基础木框架一户和两户住宅原位液压抬升及永久基础重接服务

## 1. 范围与适用性

本 PCR 适用于经结构条件确认、原支承于爬行空间基础、包含一户或两户的既有保留木框架住宅，采用原位液压抬升并与永久工程基础、永久通行设施和恢复的公用设施重接的完整服务。参考对象是对一栋实体住宅完成验收的干预。一栋包含两户的住宅计一栋，而非两个产出。

从具名的已评估既有住宅及实际批准的抬升、基础、防洪标高、通行和公用设施方案开始。纳入断接、准备性拆除、必要土方、临时支承和抬升设备、新建或加高基础及养护、下放锚固、永久楼梯/平台、公用设施重接与测试、损伤修复、复测和缺陷关闭。实际使用的临时公用设施和临时通道也纳入。FEMA 历史资料仅支持实体工艺路径；实际适用要求及合格工程设计须从本项目取得。本 PCR 不提供抬升操作指令、通用抬升尺寸、默认洪水基准、BFE、超高或安全系数。

排除板式基础连同地坪板抬升、纯砌体和制造式/移动住宅；迁往另一场址；新建住宅、取代原保留住宅的重建、新增住宅单元的扩建；未完成交付门槛的临时抬升；未来洪灾、保险、居住运行及后续维护。既有住宅制造属于保留基线，不作为新购住宅投入或负信用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.existing-crawlspace-timber-frame-one-and-two-dwelling-house-in-place-hydraulic-elevation-and-permanent-foundation-reconnection-services |
| classification_refs | CPC 3.0 54111; 较窄的服务范围，分类不决定方法学身份 |
| covered_products | 经永久基础、通行和公用设施恢复验收的既有木框架爬行空间住宅抬升服务 |
| excluded_products | 新建建筑; 场址迁移; 连同地坪板抬升; 纯砌体或移动住宅; 未完成临时抬升; 新增住宅单元 |
| representative_product | 已验收的保留木框架住宅原位抬升及永久基础重接服务 |
| production_route | 评估既有住宅 → 断接与准备 → 液压抬升/临时支承 → 工程基础/养护 → 下放和锚固 → 永久通行和公用设施 → 检查/测试/缺陷关闭与交付 |
| market_state | 在业主及实际要求的主管机关签署验收时完成的项目特定建筑改造服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已验收的保留木框架住宅原位抬升及永久基础重接服务 |
| How much | 1 栋验收合格且唯一的实体住宅 |
| How well | 满足实际批准的结构和防洪标高要求；永久基础和锚固检查合格；最终标高测量完成；永久疏散通道安全；公用设施恢复并测试完成；缺陷关闭且签署交付 |
| How long or cycle | 从项目准备至最终验收的一次完整干预，包括失败尝试和返工 |
| reference_flow_link | `accepted_elevation` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已验收的保留木框架住宅原位抬升及永久基础重接服务 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 件数单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | item |
| required_qualifiers | house_id; dwelling_count; timber_frame_condition; original_crawlspace; structural_assessment; site_id; jurisdiction; permit_id; flood_datum; required_elevation; surveyed_final_elevation; foundation_design; anchorage_inspection; permanent_access; utility_reconnection_tests; defect_closure; acceptance_date; reporting_period |

所有必需限定信息均须声明。建筑面积口径、抬升高度及实际基础/公用设施配置仅作为可比性描述；不能把住户、抬升循环、千斤顶或面积换算成验收住宅数量。N 是声明作业批次中最终验收合格且唯一的住宅 ID 正数计数。拒收或未完成住宅不得进入 N；其归属的尝试和资源留在批次分子，披露边界及中止项目。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `count_reference` | accepted_elevation | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N > 0，按唯一验收实体住宅 ID 计数；两户住宅仍计一栋。所有行按每参考流表达，先汇总项目数量，再且仅除以 N 一次。 |
| `native_units` | 材料及可用退回行 | 实际原生属性 | 实际供应单位 | 按 SKU 保留 Count、Area、Length、Volume 和 Mass。供应及匹配的可用退回须单位和状态相同；不得强制全部转为 Mass。完整供应包不得重复购买其已覆盖组成。 |
| `conversion_state` | 所有换算行 | 实际相容属性 | 实际目标单位 | 保留原生数量/单位及换算因子/单位/来源；密度换算须采集实际 SKU、交付/安装状态、密度及 density_unit、水分/基准、温度及 temperature_unit。湿质量、干固体、交付松散体积及安装压实体积是不可加和的视图。 |
| `fuel_energy` | 燃料和电力 | 实际燃料 Volume 或 Mass; 实际电力 Energy | m3 或 kg; kWh | 上游燃料供应不同于物种计算所用实际燃烧量。电力采用总计量供应及出口/临时配电损失，并明确所有权；金额、小时、NCV/GCV 或 item 不得替代 Energy。 |
| `freight_work` | 货运 | mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` | kg*km | 每程采用实际装载质量 kg 乘实际载货距离 km，识别空返和上游覆盖；不得将住宅数量乘距离当作货运质量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具名且评估合格、原爬行空间基础的保留木框架住宅，记录原基础/公用设施/通行条件以及实际工程许可方案 |
| starting_condition_role | 保留母体和历史基线；无新住宅采购 |
| product_classification_scope | 完整原位住宅改造集成服务，范围窄于 CPC 3.0 54111 |
| recursive_input_rule | 有界分包任务按实际完成的实体结果及原生单位纳入一次；与本类别同范围的整项服务不得递归替代未记录的前景作业 |
| upstream_dataset_requirement | 材料/服务供应数据须可追溯至实际原生单位、技术、地域、交付门槛和完整上游范围；最终数据生产前解析具体交换 UUID |
| disclosure | 保留/拆除基线；项目设计及适用法律/日期；占用/临时公用设施；全部贡献者、库存、供应商边界、修复及退出去向；实际验收门槛 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `period_boundary` | 全部作业及资产生命周期阶段 | 报告批次明确列出准备/断接、抬升/支承、基础/养护、下放/锚固、通行/公用设施恢复和验收阶段及其实际报告期间。各资源、库存结转、失败、修复、更换和终止事件关联实际阶段/期间及唯一归属方，验收产出关联最终验收。跨期结转仅转移一次，不重新采购。共享资产生命周期包括制造、所有项目使用、维护、更换和寿命终止，不虚构日历寿命。 |  |
| `integrated_gate` | 整项服务 | 按实际方案拥有基础混凝土/灌浆/填料/钢筋、锚栓/连接件、通行组件和管线/电缆/配件。与保留结构集成，以永久锚固检查、最终标高测量、安全楼梯/平台、公用设施恢复测试及缺陷关闭签署验收为门槛。 | fema-house-elevation-1997 |
| `temporary_and_damage` | 全部作业阶段 | 拥有断接/抬升准备、钢梁/千斤顶/垫架及其他临时支承、实际临时楼梯/公用设施、设备调遣、养护/测试、实际原基础拆除/碎料和实际损伤修复。撤场不消除这些负荷。 | fema-house-elevation-1997 |
| `baseline_and_outlets` | 保留母体与退出 | 保留住宅和旧基础不是新材料采购。记录实际拆除历史材料及去向，不作负采购。可用新供材料退回和库存结转须区别于拆除旧资产。不默认避免新建、避免洪灾或回收信用。 | fema-house-elevation-1997 |
| `provider_ownership` | 供应商与资产 | 直接承包商、移屋专业商、基础/通行/公用设施工种、租赁和运输/测试供应商间，每事件仅一个资源所有者。核实供应商对燃料/电力/材料、临时支承资产及完整生命周期负荷的覆盖；缺少实体覆盖阻断最终数据。共享千斤顶/泵、钢梁/垫架、工具和测量/测试资产须覆盖所有消费者/项目/节点/期间。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：原生体积的基础及土方供应 (`volume_materials`)

过程／待建立交换的方向／类型：`house_elevation` / `inputs` / `product`.

实际 SKU/状态的混凝土、灌浆和必要填料用于永久基础与通行工程；交付体积与安装几何量分开，纳入废料。预拌供应已包括其组成。按原生体积独立供应的本项目液压油/润滑剂补加在此纳入，排除供应商/资产维护范围已覆盖数量。

数量范围证据需求：采集各实际混凝土/灌浆/填料 SKU 和交付体积票据、批准基础几何、实际超挖、损失和安装状态。质量/干固体/压实体积比较须实际密度、水分、状态、温度及单位；无通用基础体积。

- 采集对象：原生体积的基础及土方供应
- 流属性/单位：Volume / m3
- 数量规则：按 库存收支方法 计算 S_volume / N，各实际 SKU 单独记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：原生质量的永久和临时消耗材料 (`mass_materials`)

过程／待建立交换的方向／类型：`house_elevation` / `inputs` / `product`.

实际按质量供应的钢筋、胶凝或其他材料、修补耗材和独立供应包装；完整混凝土/组件包已覆盖组成不得重复采购。按原生质量独立供应的本项目液压油/润滑剂在此纳入，排除已由供应商/资产维护覆盖数量。

数量范围证据需求：采集实际质量供应 SKU、等级/状态、毛重/皮重、期初/期末和退回实测量、修复消耗及废物不确定性。干质量与湿态/含流体视图分开；无通用钢筋或修补质量。

- 采集对象：原生质量的永久和临时消耗材料
- 流属性/单位：Mass / kg
- 数量规则：按 库存收支方法 计算 S_mass / N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：原生长度的通行及公用设施材料 (`length_materials`)

过程／待建立交换的方向／类型：`house_elevation` / `inputs` / `product`.

实际按长度供应的木材/型材、管道、导管和电缆，用于永久楼梯/平台及恢复合格公用设施，实际消耗的临时工程材料也纳入。

数量范围证据需求：采集实际线性 SKU、截面/直径、交付及切割长度、接头余量、可用退回和残余废物。记录实际管线/电缆/通行配置；无每栋通用长度或无证据长度转质量因子。

- 采集对象：原生长度的通行及公用设施材料
- 流属性/单位：Length / m
- 数量规则：按 库存收支方法 计算 S_length / N，保留各 SKU 和尺寸。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：原生面积的板片和表面材料 (`area_materials`)

过程／待建立交换的方向／类型：`house_elevation` / `inputs` / `product`.

实际按面积供应的板材/膜材和片材，用于基础界面、通行或损伤修复，声明厚度/状态/SKU。

数量范围证据需求：采集各板片/膜材 SKU、厚度、交付面积、实际覆盖/搭接/边角料和同口径退回面积。厚度/密度转质量是独立不可加和视图；无每栋通用面积。

- 采集对象：原生面积的板片和表面材料
- 流属性/单位：Area / m2
- 数量规则：按 库存收支方法 计算 S_area / N，采购搭接和边角料保持纳入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：原生件数的锚固通行及公用设施组件 (`count_materials`)

过程／待建立交换的方向／类型：`house_elevation` / `inputs` / `product`.

实际以 item 供应的锚栓、连接件、配件以及完整楼梯/通行或公用设施组件包。包内组成保持在供应商范围；租赁复用千斤顶和原保留住宅不是新消耗组件。

数量范围证据需求：采集实际锚固/配件/组件包身份、数量、损坏/退回件数及组成覆盖。件数取决于实际工程和包配置，不假定每栋螺栓/千斤顶/楼梯数量。

- 采集对象：原生件数的锚固通行及公用设施组件
- 流属性/单位：Count / item
- 数量规则：按 库存收支方法 计算 S_count / N，注明实际 SKU 和包覆盖。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际原生单位的移动机械及临时发电燃料 (`fuel_supply`)

过程／待建立交换的方向／类型：`house_elevation` / `inputs` / `product`.

按实际产品和交付状态记录抬升泵、车辆和临时发电机的燃料上游供应。按实际原生 Mass/kg 或 Volume/m3 记录，不强制换算。

数量范围证据需求：采集各实际燃料身份和原生 Mass 或 Volume 收货/库存、实测燃烧或完整互斥去向审计、不确定性和不明损失调查。组成/状态/温度相关换算仅是有证据可选比较，不强制体积基准；无默认燃烧或泄漏率。

- 采集对象：实际原生单位的移动机械及临时发电燃料
- 流属性/单位：实际原生燃料属性 / 实际原生 Mass 或 Volume 单位
- 数量规则：按 库存收支方法 计算 S_fuel / N；燃烧量另由 燃料去向方法 确定。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`

#### 采集要求：有界分包及测试服务的实体完成结果 (`provider_services`)

过程／待建立交换的方向／类型：`house_elevation` / `inputs` / `product`.

实际移屋专业、土方、基础、通行、给排水/电气、检查/测试或临时公用设施服务的尚未分解部分。记录实体完成数量和相匹配的完整上游覆盖；金额或人工小时不构成件数服务等价。

数量范围证据需求：采集实际实体完成结果数量、原生单位、供应商边界和完整上游资源覆盖。观察服务界限须结果/门槛等价；金额或人工时长不能给出件数服务范围。

- 采集对象：有界分包及测试服务的实体完成结果
- 流属性/单位：实际服务属性 / 实际原生单位
- 数量规则：按核实的原生单位记录实际完成服务结果 / N；所含与未含资源核对一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

#### 采集要求：完整生命周期的抬升支承及施工资产服务 (`shared_assets`)

过程／待建立交换的方向／类型：`house_elevation` / `inputs` / `product`.

液压千斤顶/泵、抬升钢梁/垫架、工具、测量/测试和其他复用设备，包括供应商/租赁资产。以相容实际驱动量，将完整制造、维护、更换和寿命终止负荷分配至所有消费者/项目/节点/期间。

数量范围证据需求：采集全部资产消费者的 job_driver 和相容 lifetime_driver、观察历史及有证据余期使用/更换/终止/EOL、完整生命周期清单、不确定性和敏感性。无默认设备寿命、小时转资产或缺少生命周期时置零。

- 采集对象：完整生命周期的抬升支承及施工资产服务
- 流属性/单位：实际资产或服务属性 / 实际匹配单位
- 数量规则：选择 asset_equivalent = (job_driver / lifetime_driver) / N 并匹配实际资产单位负荷，或 service_quantity = job_driver / N 并匹配完整生命周期每驱动量服务负荷；不得同时使用。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

#### 采集要求：材料设备及拆除物的实际货运 (`freight`)

过程／待建立交换的方向／类型：`house_elevation` / `inputs` / `product`.

逐程使用实际货物质量和距离；区别材料、抬升/支承设备调遣和废物运输、空返及分包商已覆盖的移动。

数量范围证据需求：逐实际程采集货物 kg 与距离 km、载荷份额、空返和供应商覆盖及各项不确定性/来源。观察工作量界限须同实体路线和范围；不假定交付距离。

- 采集对象：材料设备及拆除物的实际货运
- 流属性/单位：mass*distance / kg*km
- 数量规则：归属各程实际 cargo_kg * distance_km 求和 / N；披露空返处理和共享载荷分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

#### 采集要求：可用项目供应材料的匹配对外退回 (`usable_returns`)

过程／待建立交换的方向／类型：`house_elevation` / `outputs` / `product`.

按原 SKU、状态和单位，将实际对外可用供应材料退回关联收货。期末库存属于结转，不是外退。拆除历史住宅/基础材料不是新采购退回。

数量范围证据需求：采集实际外退可用材料 SKU、匹配收货、状态、原生单位、数量及选定总投入并列退出或消耗口径下的不确定性。排除期末结转和历史拆除物；无默认退回比例。

- 采集对象：可用项目供应材料的匹配对外退回
- 流属性/单位：实际匹配原生属性 / 实际匹配原生单位
- 数量规则：退回台账 / N；选择总投入并列退出的 S，或消耗口径 S 减匹配可用外退一次，不再另给信用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：拆除基础碎料修复拒收物及消耗工程废物 (`solid_waste`)

过程／待建立交换的方向／类型：`house_elevation` / `outputs` / `waste`.

按实际去向区分拆除历史基础/保留结构、新购废料/边角料、损坏临时材料、包装和修补拒收物。危险性、水分和回收/处置去向均取实际记录；弃置燃料/流体另行跟踪。

数量范围证据需求：采集各拆除/拒收材料实际来源、湿/干状态、净称量、水分/基准、回收/处置去向及处理证据。历史可用产品须独立实际产品输出台账；无通用碎料质量或回收率。

- 采集对象：拆除基础碎料修复拒收物及消耗工程废物
- 流属性/单位：Mass / kg
- 数量规则：按来源及处理路径的实际净废物质量 / N；不退回的供应废物保留上游负荷。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

#### 采集要求：实际养护清洗设施测试及临时废水 (`wastewater`)

过程／待建立交换的方向／类型：`house_elevation` / `outputs` / `waste`.

实际收集后排入下水道或外运处理的水，注明污染/状态和处理去向。不假定供水全部成为废水；保留水、蒸发和直接环境排放另行核对。

数量范围证据需求：按事件采集实测废水体积、污染和接收处理去向，含表计/票据不确定性。直接环境排出须独立基本流退出，不属于本废物处理流；无固定供水转废水比例。

- 采集对象：实际养护清洗设施测试及临时废水
- 流属性/单位：Volume / m3
- 数量规则：按实际去向计量的归属废水 / N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

#### 采集要求：回收燃料液压流体及污染吸附物废物 (`contained_fluids`)

过程／待建立交换的方向／类型：`house_elevation` / `outputs` / `waste`.

实际处理的收集泄漏、未燃弃置燃料、排出液压流体和吸附物。回收至期末库存的流体已属结转，不得在此重复计入。

数量范围证据需求：采集回收/收集流体身份、相容原生数量、污染、吸附物状态及实际去向；核对互斥退回/结转/燃烧/未燃废物/未收集损失。总泄漏仅审计，回收期末已结转；无通用流体损失比例。

- 采集对象：回收燃料液压流体及污染吸附物废物
- 流属性/单位：实际流体或废物属性 / 实际原生单位
- 数量规则：按身份和相容原生单位记录实际未燃收集废物/流体退出 / N，与退回、燃烧、未收集损失和期末结转互斥。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`

#### 采集要求：实际具名物质向实际受纳介质的排放 (`species_release`)

过程／待建立交换的方向／类型：`house_elevation` / `outputs` / `elementary`.

逐项解析实际燃烧、液压/燃料泄漏、施工粉尘或受扰历史材料释放的物质/物种及空气/水/土壤受纳介质。整股流体质量与收集废物是不可加和视图，不假定为物种排放。

数量范围证据需求：采集实际物质及介质、实测释放或匹配实际活动和因子基准/来源，或整股流体释放及有证据组成/去向。要求单位相容、不确定性和无重复乘数；无通用 VOC/粉尘/CO2 或液压流体物种因子。

- 采集对象：实际具名物质向实际受纳介质的排放
- 流属性/单位：Mass / kg
- 数量规则：实测物种质量，或实际匹配燃烧/活动 * 有效物种 EF，或实际整股流体释放 * 有证据的组成 * 去向比例；仅除以 N 一次。完整物种 EF 不再乘组成/去向。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `house_elevation` | 保留住宅抬升与永久重接 | required | 合格保留木框架爬行空间住宅；项目特定批准方案 | 断接、抬升/支承、基础、锚固、通行、公用设施和最终验收的一体化责任 | 1 item 验收服务 |

### 过程：保留住宅抬升与永久重接（`house_elevation`）

实际记录显示直接环境取水或排放时，数据生产者必须新增独立的 house_elevation 基本流输入/输出交换，记录实际介质和原生单位、cp_water 归属、计量及去向核对；购水或废水处理均不能替代。历史拆除物仍可用且作为产品离开时，必须新增独立实际产品输出台账，按身份/状态/原生数量和接收方记录，并关联 cp_waste 来源/转移证据；其既不是新货 usable_returns，也不是 solid_waste。这些实际数据扩展继承归一化、范围证据、具体身份核实和唯一归属要求；是否发生未知属于数据缺口。

阶段台账识别准备/断接、抬升/临时支承、基础/养护、下放/锚固、通行/公用设施及最终检查。任何抬升失败、基础/连接缺陷或保留结构损伤均记录为不合格状态，关联回 house_elevation 修复/复测；拆除材料按实际回收或处置去向退出。未完成工程无验收产品输出。内部转移、重复抬升和安装量属于活动证据，不是新增采购或额外服务产出。

#### 输入

##### 产品流

###### 施工养护测试及临时公用设施供水（`water_supply`）

计量或追溯实际购入且归属本项目的基础养护、设施测试及临时场址/住宅供水。实际存在直接环境取水时，与产品供水分开。

数量范围证据需求：采集表计分辨率/校准、实际养护/测试/临时用水区间、保留/循环水及各实测废水/环境去向；观察界限采用相同供水边界和单位。不假定耗水量或供排比例。

- 选定流：施工养护测试及临时公用设施供水
- 流属性/单位：Volume / m3
- 数量规则：归属供水量 / N；供应、内部循环和排出分别追溯。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

###### 抬升施工测试及临时公用设施总购电（`electricity_supply`）

实际供应商/电力组合、总表/分表及纳入的临时住宅/场址配电损失；任何出口另记，并与供应商资源所有权核对。

数量范围证据需求：采集实际总购入/出口表计区间、供应商/电力组合、临时配电损失及供应商归属不确定性。明确 Energy 支持和单位相容性；无每栋通用电量或净出口信用。

- 选定流：抬升施工测试及临时公用设施总购电
- 流属性/单位：Energy / kWh
- 数量规则：归属总购入电量 / N；不自动将出口抵扣。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

#### 输出

##### 产品流

###### 已验收的保留木框架住宅原位抬升及永久基础重接服务（`accepted_elevation`）

对一栋保留合格住宅完成永久基础锚固、最终标高测量、永久通行、公用设施恢复测试、缺陷关闭及业主/实际要求主管机关签署交付的一体化干预。

数量范围证据需求：验收输出严格为归一化的 1 item。证据是 N 个唯一实体住宅 ID 及永久基础/通行/设施的完整测量验收；不寻找一项服务周围的经验范围，不把未完成尝试当产率。

- 选定流：已验收的保留木框架住宅原位抬升及永久基础重接服务
- 流属性/单位：Count / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `single_service` | 验收输出和拒收物 | 一栋保留实体住宅达到一体化门槛即一项服务。不从住户、临时抬升、残值或避免洪灾推定联产品。准备、失败、复测和不退回废物留在分子；失败/不合格作业回到产生节点 house_elevation 或实际退出，不进入 N。 |  |
| `stock_balance` | 材料燃料及可用退回 | S = attributed_opening + external_net_receipts - carried_closing，收货以实测毛重/皮重修正。内部领用或安装活动不是新采购。声明总投入并列退出的 S，或消耗口径 S 减匹配可用外退一次。所有不退回废物/损失保留上游；不再给退回信用，不减历史拆除资产。 |  |
| `asset_lifecycle` | 共享资产和供应商 | shared_assets 仅选择一种相容表达。lifetime_driver 覆盖所有消费者/项目/节点/期间；采用已观察完整寿命，或观察历史加有证据的余期使用、更换、终止和寿命终止。记录来源、不确定性、敏感性和更新触发。完整制造/维护/更换/寿命终止清单使用同一分母；项目小时不得除以价格或断言寿命。不得合并等效资产与每驱动量服务视图或重复除以 N。 |  |
| `period_attribution` | 所有阶段和资产 | 列出实际阶段/期间边界和事件 ID；资源、资产、库存结转、更换及最终输出关联一次。保留期间分子所有权与结转转移；核对生命周期历史及有证据余期/终止/EOL。缺少未来寿命或终止证据阻断最终资产分配；新证据到来后更新，防止重复归属。 |  |
| `recovery_boundary` | 拆除物和再生投入 | 实际再生投入须记录来源、回收门槛、继承/截断方法和负荷归属，不重复此前制造。不默认再生含量或避免处置信用。本路径不强制采购再生材料；保留母体属基线，实际回收退出另报。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `house_elevation` | 验收服务 | 测量与验收 | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; dwelling_count; timber_frame_condition; original_crawlspace; structural_assessment; permit_id; jurisdiction; flood_datum; required_elevation; surveyed_final_elevation; foundation_design; anchorage_inspection; permanent_access; utility_reconnection_tests; defect_closure; acceptance_date; accepted_flag | 读取实际批准设计和现行当地要求；按唯一住宅 ID 核对测量、检查、设施测试和签署验收 汇总细则：唯一验收住宅 N；每参考流；N 排除未完成/失败住宅 ID | item | 每栋住宅及最终门槛 | 全部归属准备至最终关闭及库存边界 | 声明项目场址及归属供应商地点 | 每参考流 | 测量基准和校准；设计/许可版本；签署检查和关闭 |
| `cp_materials` | `house_elevation` | 原生材料库存和可用退回 | 库存与交付 | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit; gross_receipt; tare; net_receipt; opening_stock; closing_stock; installed_activity; outward_return; return_match_id; transfer_id; package_scope; stock_method | 核对收货、盘存和发运；保留各原生 SKU 状态及匹配外退；区别历史拆除物 汇总细则：各原生 S 按声明退出口径一次 / N；不加安装领用 | 实际原生单位 | 每次收货领用退回及库存边界 | 全部归属准备至最终关闭及库存边界 | 声明项目场址及归属供应商地点 | 每参考流 | 供应票据；校准体积/计数/称量记录；库存核对 |
| `cp_water` | `house_elevation` | 供水废水及其他实际水去向 | 表计与处置 | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit; supply_meter_start; supply_meter_end; wastewater_quantity; destination; retained_water; evaporation; direct_discharge; quality; meter_id; abstraction_medium; abstraction_quantity; abstraction_unit; discharge_medium; discharge_quantity; discharge_unit; occurrence_evidence | 计量归属供应并采集实际排放/处理记录；不将供应等同废水，核对不同去向 汇总细则：各归属实体水去向 / N；内部循环不可加和 | m3 | 每表计区间及排放 | 全部归属准备至最终关闭及库存边界 | 声明项目场址及归属供应商地点 | 每参考流 | 表计校准；去向票据；不确定性及水平衡 |
| `cp_fuel` | `house_elevation` | 燃料库存燃烧回收流体及损失 | 燃料及流体去向 | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit; fuel_identity; fluid_identity; opening_stock; gross_receipt; tare; closing_stock; outward_return; measured_burn; nonburned_waste; uncontained_loss; recovered_to_closing; total_spill_audit; fate_record; uncertainty; unknown_loss_investigation | 直接计量实际燃烧，或审计完整互斥原生单位去向；退回、未燃废物、未收集损失和结转互斥。不得以不明残差推断燃烧。液压流体单独跟踪；总泄漏仅审计，回收期末已在结转 汇总细则：供应为 S_fuel/N；实际燃烧/活动仅用于 cp_emissions；各实体去向一次 / N | 实际相容燃料/流体原生单位 | 每次加油燃烧泄漏退出及边界盘存 | 全部归属准备至最终关闭及库存边界 | 声明项目场址及归属供应商地点 | 每参考流 | 燃料票据/表计及校准储罐；完整核对；不明损失调查 |
| `cp_energy` | `house_elevation` | 总购电出口和临时配电损失 | 表计与供应商 | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; meter_id; supplier_mix; import_start; import_end; export_start; export_end; distribution_losses; allocation_driver; allocation_unit; coverage; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit | 读取总购入/出口表计及临时公用设施份额，识别供应商资源覆盖和实际能量单位支持 汇总细则：归属总购入 / N；出口/损失/现场发电分别披露，不自动给信用 | kWh | 每阶段表计区间 | 全部归属准备至最终关闭及库存边界 | 声明项目场址及归属供应商地点 | 每参考流 | 校准表计；供应商/电力组合/门槛；所有权证据 |
| `cp_providers` | `house_elevation` | 有界服务的实体完成结果 | 供应商实体记录 | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; completed_result; result_quantity; result_property; result_unit; acceptance_record; included_resources; excluded_resources; upstream_scope; dataset_gate; coverage_gap; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit | 核实实体完成结果和上游原生单位覆盖；核对直接/供应商拥有的燃料材料资产运输测试及临时公用设施 汇总细则：每个独立有界实体服务 / N 一次；缺少覆盖阻断最终数据 | 实际服务原生单位 | 每项服务及覆盖修订 | 全部归属准备至最终关闭及库存边界 | 声明项目场址及归属供应商地点 | 每参考流 | 供应商清单/范围声明和实体签署结果 |
| `cp_assets` | `house_elevation` | 共享抬升支承工具及测量资产 | 资产生命周期和驱动量 | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; asset_id; consumer_job_node_period_ids; job_driver; driver_unit; observed_life_driver; observed_history_driver; evidenced_remaining_driver; lifetime_driver; driver_source; manufacture_inventory; maintenance_inventory; replacement_inventory; eol_inventory; termination_evidence; uncertainty; sensitivity; update_trigger; representation; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit | 在全部消费者间以相同单位匹配项目与完整生命周期驱动量。观察完整寿命或证明余期、更换、终止/EOL，覆盖租赁和供应商资产 汇总细则：选择等效资产或完整生命周期每驱动量服务；每参考流汇总一次 | 实际资产单位或相容服务驱动量单位 | 每次资产使用及生命周期更新 | 所有消费者/项目/节点/期间的完整制造/使用/维护/更换/EOL生命周期，包括有证据余期 | 声明项目场址及归属供应商地点 | 每参考流 | 资产日志；全寿命范围；有证据余期；维护/更换/EOL来源 |
| `cp_transport` | `house_elevation` | 归属货运程 | 货运清单 | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; leg_id; cargo_id; cargo_kg; distance_km; mass_unit; distance_unit; empty_return; load_share; vehicle_route; provider_coverage; transfer_id; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit | 逐程匹配实际货物称重和路线距离；披露空返处理和上游已覆盖移动 汇总细则：实际 cargo_kg * distance_km 求和 / N 一次；空返另有证据 | kg*km | 每归属程 | 全部归属准备至最终关闭及库存边界 | 声明项目场址及归属供应商地点 | 每参考流 | 货单；称量；路线记录及覆盖核对 |
| `cp_waste` | `house_elevation` | 历史拆除物新废物及拒收退出 | 废物称重与去向 | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; origin_historic_or_new; material_identity; rejected_state; rework_event_id; recovery_disposal_route; destination; wet_mass; dry_mass_view; moisture; moisture_basis; ticket_id; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; temperature; temperature_unit; reusable_product_identity; reusable_state; usable_native_quantity; usable_native_unit; receiving_party; transfer_id | 每个拆除/拒收状态追溯至 house_elevation 修复、回收或处置；称量实际去向退出；临时资产退回与废物分开 汇总细则：每实际来源/去向质量 / N；拒收作业不进入验收 N | kg | 每次拒收修复和废物退出 | 全部归属准备至最终关闭及库存边界 | 声明项目场址及归属供应商地点 | 每参考流 | 废物票据；危险性识别；修复/退出关联和关闭 |
| `cp_emissions` | `house_elevation` | 物种介质及匹配释放活动 | 计量或因子 | site_id; job_id; house_id; campaign_id; batch_id; event_id; phase_id; period_id; record_id; owner; provider_id; substance; receiving_medium; measured_species_mass; measured_mass_unit; activity; activity_unit; activity_source; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; whole_fluid_release; whole_fluid_unit; method_selected; coverage; native_amount; native_unit; conversion_factor; conversion_factor_unit; conversion_source; sku; material_state; density; density_unit; moisture; moisture_basis; temperature; temperature_unit | 采用实际物种/介质实测质量、相容活动/物种 EF 或有证据整股流体组成/去向。SDS 危害限值及无 VOC 声明不是数量；整股流体实体审计不可加和 汇总细则：独立有证据物种-介质质量一次 / N；完整 EF 不再乘组成/去向 | kg | 每次实测释放或匹配活动区间 | 全部归属准备至最终关闭及库存边界 | 声明项目场址及归属供应商地点 | 每参考流 | 计量 QA 或因子/来源相容性；实际燃烧关联；去向和不确定性证据 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `stock_balance` | volume_materials; mass_materials; length_materials; area_materials; count_materials; fuel_supply; usable_returns | S = attributed_opening + external_net_receipts - carried_closing; 选择总投入并列退出的 S，或消耗口径 S 减匹配可用外退一次；所选数量仅除以 N 一次。 | cp_materials; cp_fuel; cp_acceptance; opening; gross; tare; closing; matched return; N | 每参考流原生单位供应和退回数量 |  |
| `fuel_fates` | fuel_supply; contained_fluids; species_release | 采用实际计量燃烧或完整互斥原生单位去向审计，并记录不确定性和不明损失调查。退回、未燃废物、未收集损失和结转互斥；不以不明残差推断燃烧；总泄漏仅审计。 | cp_fuel; actual burn; native fate quantities; uncertainty; investigation | 各自角色的供应、燃烧和互斥流体去向 |  |
| `asset_share` | shared_assets | asset_equivalent = (job_driver / lifetime_driver) / N 或 service_quantity = job_driver / N，并匹配完整生命周期每驱动量负荷；选择一种表达。 | cp_assets; job_driver; lifetime_driver; full lifecycle inventory; N | 每参考流完整资产或服务分配数量 |  |
| `freight_work` | freight | 货运工作量 = sum(cargo_kg * distance_km) / N; 空返范围及载荷份额另有证据。 | cp_transport; cargo_kg; distance_km; load_share; N | 每参考流实际货运 kg*km |  |
| `species_mass` | species_release | 物种-介质量 = 实测物种质量，或匹配活动 * 完整物种 EF，或实际整股流体释放 * 有证据组成 * 去向；仅除以 N 一次。完整物种 EF 不再乘组成/去向。 | cp_emissions; cp_fuel; activity; factor; composition; fate; actual species and medium; N | 每参考流实际物种-介质 kg |  |
| `direct_aggregation` | all inventory rows | 各归属分子按同一批次汇总；仅除以 N 一次，得到每参考流。accepted_elevation 输出为 1 item。历史保留母体、内部转移及重复供应商资源不是新供应。 | all process-owned protocols; unique accepted house IDs; N | 一致的单一参考流清单 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `gate_quality` | house_elevation | 实际结构资格、许可/设计、当地洪水基准及要求、最终标高测量、永久基础/锚固、安全通行、恢复设施测试及签署缺陷关闭；不完整门槛属数据缺口。 | cp_acceptance 及实际现行项目主管机关 |
| `physical_coverage` | 全部清单 | 完整纳入直接/供应商/租赁/测试/运输/临时公用设施资源、原生单位、库存退出及失败工程；缺失数据不得用金额或零替代。 | 各协议与供应商范围核对 |
| `conversion_quality` | 换算和排放 | 保留原始操作数、相容单位、状态/水分/温度单位及换算/组成/去向/因子来源；按实际角色保留不确定性和范围证据。 | cp_materials; cp_fuel; cp_emissions 及来源文件 |
| `temporal_quality` | 项目和共享资产 | 共同 house/job/site/campaign/batch/event/phase/period ID；全部资产消费者及全寿命驱动量；披露任何住宅合并的代表性。 | 全部协议；资产生命周期证据 |
| `identity_quality` | 最终交换 | 最终数据生产前解析具体 SKU/供应商/去向/物种 UUID 和属性/单位组。语义伞卡不是固定交换身份。 | 具体交换详情和支持确认 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `acceptance_check` | 参考产品 | 要求 N > 0 且实体住宅唯一并最终验收，具备全部交付门槛/限定证据。两户住宅计一栋；待完成抬升、千斤顶和抬升循环不能进入 N。 |  |
| `resource_check` | 库存供应商共享资产 | 核查原生单位收货/期初/期末/匹配退回、单一库存方法、供应商完整资源覆盖及全部消费者/期间上一种相容资产生命周期分配；无重复采购、信用或归一化。 |  |
| `reject_check` | 返工和废物 | 抬升失败、支承/基础/连接缺陷和损伤关联 house_elevation 修复/复测或有证据退出；全部尝试和不退回废物保留负荷；未完成服务不得成为验收产出。 |  |
| `fate_check` | 燃料水废物排放 | 核查互斥实测燃烧/去向和不明损失调查；实际介质/物种及相容因子/组成/去向证据。回收结转不是额外废物，供应不必然等于燃烧/排出，整股流体视图不可加和。 |  |
| `period_check` | 全部阶段和资产 | 核查阶段/期间/事件关联、库存结转和最终验收期间；核对更换/终止及生命周期余期证据，保持唯一归属且无重复负荷。 |  |
| `support_check` | 全部行 | 要求双语语义/数量/协议完整对齐、有效结构化指纹及实际交换/支持身份核实。缺少原生服务/Energy/资产支持或供应商覆盖不完整阻断最终数据包。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | 符合木框架爬行空间范围及实际交付门槛的完整保留住宅抬升/重接服务 |
| excluded_use | 新住宅建造、场址迁移、连同地坪板抬升、移动住宅、未完成抬升、未来洪灾/保险收益或住宅运行能耗 |
| required_metadata | house_id; dwelling_count; timber_frame_condition; original_crawlspace; structural_assessment; site_id; jurisdiction; permit_id; flood_datum; required_elevation; surveyed_final_elevation; foundation_design; anchorage_inspection; permanent_access; utility_reconnection_tests; defect_closure; acceptance_date; reporting_period; floor_area_convention; lift_height; prior_condition; retained_removed_schedule; temporary_utility_state; provider_scope; stock_method; native_units; asset_lifecycle_method; actual_current_design_sources |
| required_quality_disclosure | 覆盖和缺口；实际门槛证据；失败/未完成作业；未解析交换/支持身份；完整供应商及共享资产范围；范围/换算/去向不确定性；历史指南局限 |
| update_trigger | 保留住宅范围、基础/抬升/通行/设施设计、适用当地要求或基准、供应商覆盖、实际排放证据、共享资产余期/更换/EOL或验收门槛变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| fema-house-elevation-1997 | official_guidance | https://www.govinfo.gov/content/pkg/GOVPUB-HS5_100-PURL-LPS73856/pdf/GOVPUB-HS5_100-PURL-LPS73856.pdf | FEMA《Protecting Your Home from Flood Damage》1997年修订第三版、2003年 Region III 汇编；PDF19–20页住宅抬升和爬行空间实体路径。PDF22页历史规定不作为现行法律、默认 BFE/超高或通用设计标准。实际项目方案及前景记录提供现行要求和数量。 |
