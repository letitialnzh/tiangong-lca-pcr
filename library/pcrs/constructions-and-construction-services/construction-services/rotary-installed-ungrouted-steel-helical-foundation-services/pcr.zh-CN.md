---
pcr_id: pcr.rotary-installed-ungrouted-steel-helical-foundation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 无灌浆旋入式钢制螺旋桩基础安装服务

## 1. 范围与适用性

本 PCR 适用于新建工程中经设计的无灌浆钢制螺旋桩基础首次安装：以旋转为主、轴向推力配合旋入，采用螺栓连接引导节与延长节，并安装获批的单独供应钢制传力桩帽或适配件。终点为基础与上部结构之间已验收的钢制传力接口，能够承接由另一责任方建设的上部结构。以实际项目设计、合格施工、地下设施避让、终止条件及要求的试验为准。[chance-helical-installation-2017]

排除冲击、振动或压入施工；灌浆挤土螺旋桩和微型桩；地锚拉结；既有建筑托换或顶升；混凝土基础、地梁和开挖合同；工厂桩制造；后续上部结构及使用。为安装实际新增的通行条件或接口工程必须纳入并明确归属，否则记为未解决的路线适用性缺口。大量开挖、混凝土或不兼容的场地整治需要另行治理的数据包，不得静默删除。CPC 54512 的范围大于本旋入路线。[un-cpc3-2025]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.rotary-installed-ungrouted-steel-helical-foundation-services |
| classification_refs | CPC 3.0 54512 基础服务；拟定 narrower 关系 |
| covered_products | 新建工程中，在获批钢制桩帽/适配件接口处验收的无灌浆旋入式钢制螺旋桩基础安装服务 |
| excluded_products | 打入/压入/振入桩；灌浆桩；地锚；既有建筑托换；混凝土基础/地梁；完整建筑；仅工厂桩供应 |
| representative_product | 一个具有明确桩清单和传力接口的实际工程安装合同组 |
| production_route | 接收工厂预制/涂覆引导节与延长节 → 旋入及螺栓装配 → 钢制桩帽集成 → 工程师要求时的载荷试验及返工 → 验收接口 |
| market_state | 已签署基础接口交付的现场安装服务；不代表工厂钢材或完整上部结构 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在钢制传力接口处验收的指定无灌浆旋入式钢制螺旋桩基础安装服务 |
| How much | 1 item，即一个实际验收合同组，而非一根假设桩 |
| How well | 获批设计/位置/角度/引导节/延长节/桩帽配置，项目扭矩及深度终止条件，以及要求的载荷—位移试验验收；缺陷已关闭 |
| How long or cycle | 从进场到接口交付的一次实际安装活动；保留跨报告期日期和共用资产完整生命周期分摊，不设通用建筑使用寿命 |
| reference_flow_link | `accepted_foundation_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 在钢制桩帽接口处验收的无灌浆旋入式钢制螺旋桩基础服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 合同/场地/组 ID；获批工程师及厂家文件版本；施工资格；桩位置、数量、角度、螺旋叶片/桩身/引导节/延长节/连接清单；实际深度及经校准的扭矩历史；桩帽及承载用途；试验启动条件和载荷—位移证据；失败桩/反力桩处置；已签署接口验收日期；供应者/服务覆盖及分摊期间 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 一个验收合同组对应一个参考物品。桩数、钢材 kg、深度 m 和载荷 kN 是配置属性；不得用通用因子转换为等效基础服务。 |
| gross_material | lead_sections, extension_sections, coupling_bolts, steel_caps, cap_bolts | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实际零件/批次记录组件总收货/领用质量、留存库存和真实外退。按件计量时采用该零件特定且可追溯的质量，不设统一桩质量。 |
| native_energy | installation_electricity, test_electricity | 能量 | kWh | 保留原生 kWh 计量。在交付具体交换前须核实完整 Energy 支撑身份；仅已核实能量单位组不够。 |
| project_measurement | installed_pile_assembly, accepted_foundation_service | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 记录实际扭矩 Nm、深度 m、角度 deg，以及指令要求时的 rpm 与每转进尺 m/rev；试验载荷 kN、位移 mm、保持时间 s 应有校准仪器、规定容差及验收文件版本。这些是质量/原始字段，不是可以互换的交换数量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已声明地层/地下设施条件和工程桩清单的合格新建工程场地；供应门处预制涂覆钢节；通行准备条件及归属已有记录 |
| starting_condition_role | 地层是保留的环境起始存量，不是采购材料或必然外运的土。原有通行设施仅在实际已存在且不属于本合同时作为起始基础设施。 |
| product_classification_scope | 较广基础服务中的有界无灌浆旋入式钢制螺旋桩安装 |
| recursive_input_rule | 同类别安装服务分包时，以一个有界供应者数据包表示其物理施工及上游覆盖；移除重叠本地清单，保持其实际输出/接口与供货组件的区别。 |
| upstream_dataset_requirement | 实际预制/涂覆引导节、延长节、桩帽及五金的指定供应门数据集；实际燃料/电力/货运；自有资产完整生命周期的生产、维护和寿命终结或已核实的供应者覆盖。不重复钢材成型/镀锌。 |
| disclosure | 场地基线；通行/准备工程归属；供应者门；所有失败/补救/反力桩；条件性试验；实际排放/废物去向；材料总量对账；期间及共用资产矩阵 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| rotary_boundary | 所有过程 | 包括进场、供应组件和实际物流、旋转驱动/推力、延长节连接、所有可归属失败/反力/补救位置、桩帽集成、指定试验和缺陷关闭。不得把灌浆或混凝土基础负荷藏在本路线内。 | chance-helical-installation-2017 |
| enabling_owner | rotary_install | 实际临时通行、地下设施防护和障碍物处理资源须明确物理归属。可重复使用垫板进入资产分摊；消耗材料、货运、能量和实际移除物须有具体交换。实际工程不能表示时停止前景定稿并经审查扩展清单，不得把所需工程声明为原有设施。 | chance-helical-installation-2017 |
| ground_and_waste | rotary_install | 旋转挤土不表示外运弃土。实际移除障碍物/土只有在身份、数量、保管责任和去向明确时记录；保留地层不是废物输出或避免处置收益。可用钢节退回、废钢和基本流释放的归属不同。 | chance-helical-installation-2017 |
| asset_periods | 所有过程 | 识别旋转承载机、扭矩头、驱动适配件、通行垫板、桩帽工具、试验千斤顶/泵和反力设备。跟踪投用、本工程及其他工程/报告期使用、维护、更换和寿命终结；以单一矩阵和事件归属按实际服务分摊完整生命周期负荷。寿命/覆盖证据缺失仍是阻断项，不得视为零资本负荷。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际可重复使用旋转承载机的完整寿命份额 (`rotary_carrier_asset`)

过程／待建立交换的方向／类型：`rotary_install` / `inputs` / `product`.

独立承载机是可重复使用资本产品，不是安装钢材。其生产、维护/更换和寿命终结份额覆盖本节点，并分别记录其他工程/期间。 数量范围证据需求：需要实际资产身份、投用/退役、同工况寿命服务分母、节点使用记录及其他消费者矩阵；不假定寿命，不把每合同一整台机器视为消耗。

- 采集对象：实际可重复使用旋转承载机的完整寿命份额
- 流属性/单位：物品数量 / item
- 数量规则：以实际资产物品的分数表示本节点服务占完整寿命服务的份额，运行燃料/电力单列。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_install_assets`

#### 采集要求：实际可重复使用旋转扭矩头及匹配驱动适配件的完整寿命份额 (`rotary_head_asset`)

过程／待建立交换的方向／类型：`rotary_install` / `inputs` / `product`.

实际扭矩头和适配件单独供应时记录为独立资产；本卡仅覆盖一个实际配置且有供货证据的组装件，不将无关工具身份相加。 数量范围证据需求：取得实际组装件清单、扭矩额定能力/校准、组件更换历史及完整寿命服务证据；分开不兼容寿命，不虚构统一比例。

- 采集对象：实际可重复使用旋转扭矩头及匹配驱动适配件的完整寿命份额
- 流属性/单位：物品数量 / item
- 数量规则：配置扭矩头/适配件组装件的实际分数物品份额，供应和寿命不同的组件必须另行列出。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_install_assets`

#### 采集要求：实际可重复使用临时通行垫板的完整寿命份额 (`temporary_access_mats_asset`)

过程／待建立交换的方向／类型：`rotary_install` / `inputs` / `product`.

为本合同组实际铺设可重复使用垫板时纳入。各独立垫板规格分别交换，记录实际铺设/移除工作和能量，不得视为免费原有通道。 数量范围证据需求：需要实际垫板数量/规格、租赁或自有覆盖、占用/载荷工况记录、生产/维护/寿命终结和其他期间使用；消耗骨料/通行工程需经审查扩展清单。

- 采集对象：实际可重复使用临时通行垫板的完整寿命份额
- 流属性/单位：物品数量 / item
- 数量规则：按受载使用及完整寿命服务计算匹配垫板类型的分数物品份额，包括可归属铺设/移除资源。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_install_assets`

#### 采集要求：安装组件及设备的实际货运服务 (`installation_freight`)

过程／待建立交换的方向／类型：`rotary_install` / `inputs` / `product`.

按实际载荷/车辆/供应门记录进场、场间及可归属设备调运各运输段；产品和货运数据集覆盖不得重叠。退货与废物运输保留各自事件/去向归属。 数量范围证据需求：逐段采集票据、路线距离、载荷、载货/空载分摊及供应者已含货运覆盖；无通用距离或质量替代，Transport 支撑须独立核实。

- 采集对象：安装组件及设备的实际货运服务
- 流属性/单位：运输量 / t*km
- 数量规则：实际载荷吨数乘实际载货路线 km 得到实测 t*km，披露真实空载段方法；不兼容货运服务分别交换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_logistics`

#### 采集要求：跨越安装边界实际退回的可用引导节 (`lead_returns`)

过程／待建立交换的方向／类型：`rotary_install` / `outputs` / `product`.

仅对可用未安装或拔出后重新合格的引导节实际对外保管转移计退货。场内留存是期末库存；失效不可用节是废物。 数量范围证据需求：需要对外接收单、状态/重新合格证据、准确零件质量及接收归属；不假定退货百分比，不先扣净输入再重复输出。

- 采集对象：跨越安装边界实际退回的可用引导节
- 流属性/单位：质量 / kg
- 数量规则：按批次及状态实测总外退引导节质量；保持总供应输入并对账负荷，不自动计替代收益。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`

#### 采集要求：跨越安装边界实际退回的可用延长节 (`extension_returns`)

过程／待建立交换的方向／类型：`rotary_install` / `outputs` / `product`.

可用延长节退货保留实际型号、保管、状态及结转负荷；移除试验/反力节需要记录再用资格。 数量范围证据需求：实际接收保管单、拔除/检验结果、组件质量及期末库存决定退货量；无通用回收比例。

- 采集对象：跨越安装边界实际退回的可用延长节
- 流属性/单位：质量 / kg
- 数量规则：按供货批次实测真实外退延长节质量；留存库存只进入库存对账。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`

#### 采集要求：送至已记录废物接收方的实际废弃钢桩节及切割废钢 (`installation_steel_waste`)

过程／待建立交换的方向／类型：`rotary_install` / `outputs` / `waste`.

损坏引导节/延长节、不可回收反力/失败节及实际修剪碎屑仅在丢弃时为废物。按实际等级/涂层/污染和去向分流，不汇总实质不同废物，也不把废钢视为验收基础输出。 数量范围证据需求：取得称重联单、实际切割长度/采用时的零件质量及污染/处理证据；无默认废钢率或避免原生钢收益。

- 采集对象：送至已记录废物接收方的实际废弃钢桩节及切割废钢
- 流属性/单位：质量 / kg
- 数量规则：按失败桩/切割事件和接收方计量实际废弃钢材流；等级/状态/去向不同时使用独立身份。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_waste`

#### 采集要求：供应螺旋桩组件实际废弃的木质垫料 (`timber_packaging_waste`)

过程／待建立交换的方向／类型：`rotary_install` / `outputs` / `waste`.

实际废弃木包装时启动；供应者已含包装上游不得再次采购。退回可重复使用垫料属于保管/库存记录，对外退出时需要自己的具体交换。 数量范围证据需求：以实际包装清单、质量、退回/再用记录和废物接收单建立区间；无通用包装增量。

- 采集对象：供应螺旋桩组件实际废弃的木质垫料
- 流属性/单位：质量 / kg
- 数量规则：按处理方式及接收方实际称重废木质量；已处理/未处理或污染身份分开。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_waste`

#### 采集要求：实际燃烧排入空气的粒径小于2.5微米颗粒物 (`installation_pm25`)

过程／待建立交换的方向／类型：`rotary_install` / `outputs` / `elementary`.

实际有文件证据的燃烧 PM2.5 释放时启动。不得把 PM10、总尘、黑碳或地层扰动等同于 PM2.5；其他实测物质需要分别识别的交换。 数量范围证据需求：需要实际尾气测量或被接受的精确设备/工况因子、粒级定义、活动量和不确定度；通用柴油烟或道路粉尘不能界定本行。

- 采集对象：实际燃烧排入空气的粒径小于2.5微米颗粒物
- 流属性/单位：质量 / kg
- 数量规则：实际测量 PM2.5 质量，或以经验证的设备/工况特定因子乘记录活动量，保留颗粒粒级及空气介质。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_install_emissions`

#### 采集要求：实际可重复使用钢制桩帽安装工具的完整寿命份额 (`cap_tool_asset`)

过程／待建立交换的方向／类型：`cap_accept` / `inputs` / `product`.

本卡代表一个实际独立供应可重复使用工具规格；实质不同工具/寿命分别交换。将连接工况及实际覆盖匹配到完整寿命服务记录。 数量范围证据需求：采集工具身份、使用/投用/退役及更换证据、其他工程/期间和服务商实际资本覆盖；不假定每合同组消耗一整件工具或假定寿命。

- 采集对象：实际可重复使用钢制桩帽安装工具的完整寿命份额
- 流属性/单位：物品数量 / item
- 数量规则：本节点使用除以同工况完整寿命服务得到实际分数工具物品，含维护/更换/寿命终结覆盖。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_assets`

#### 采集要求：实际可重复使用载荷试验千斤顶和泵组装件的完整寿命份额 (`test_equipment_asset`)

过程／待建立交换的方向／类型：`cap_accept` / `inputs` / `product`.

工程师要求载荷试验时启动。仅有文件证据的单一供应千斤顶/泵组装件可在本卡表示；独立千斤顶/泵、梁及反力装置分别记录资产和寿命，不汇总匿名设备。反力桩本身材料/工作在 rotary_install。 数量范围证据需求：需要实际载荷计划、校准千斤顶/泵组装件清单、反力装置身份及覆盖、服务寿命使用/维护/寿命终结记录；不假定试验或通用载荷/保持时间。

- 采集对象：实际可重复使用载荷试验千斤顶和泵组装件的完整寿命份额
- 流属性/单位：物品数量 / item
- 数量规则：按试验/复试使用记录与实际完整寿命服务计算组装件物品分数；使用反力架/梁时另添实际资产交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_assets`

#### 采集要求：实际可重复使用载荷试验反力架或梁的完整寿命份额 (`test_reaction_frame_asset`)

过程／待建立交换的方向／类型：`cap_accept` / `inputs` / `product`.

实际试验计划采用单独供应反力架/梁时启动；各配置资产与千斤顶/泵和已安装反力桩分别识别。保留架设/移除资源，采用配重时计实际物流。 数量范围证据需求：采集实际架/梁清单、试验配置、工况/服务历史、维护、更换、寿命终结以及其他工程/期间；不得假定千斤顶覆盖已含反力系统。

- 采集对象：实际可重复使用载荷试验反力架或梁的完整寿命份额
- 流属性/单位：物品数量 / item
- 数量规则：按可归属试验/复试服务与有文件支持的完整寿命分母计算配置反力架/梁物品分数。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_assets`

#### 采集要求：跨越边界实际退回的可用钢制传力桩帽 (`cap_returns`)

过程／待建立交换的方向／类型：`cap_accept` / `outputs` / `product`.

仅实际对外可用桩帽/适配件保管转移为退货；期末留存只在余额中。不合格不可用桩帽进入分类废物。 数量范围证据需求：需要接收单、准确状态/设计身份、零件质量和库存账关闭；不假定可重复使用比例或自动避免生产收益。

- 采集对象：跨越边界实际退回的可用钢制传力桩帽
- 流属性/单位：质量 / kg
- 数量规则：实测可用桩帽总外退质量，保留总收货及实际组件身份。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cap_materials`

#### 采集要求：实际废弃钢制桩帽及连接五金废物 (`cap_steel_waste`)

过程／待建立交换的方向／类型：`cap_accept` / `outputs` / `waste`.

实际不可用不合格桩帽/螺栓或切割残余送记录废物接收方；按实际等级/涂层/污染及去向分别记录，仍归属验收合同组。 数量范围证据需求：采集联单称重、物品身份和不合格状态处置，含重复桩帽尝试；无默认废钢率或回收替代收益。

- 采集对象：实际废弃钢制桩帽及连接五金废物
- 流属性/单位：质量 / kg
- 数量规则：按桩帽/缺陷事件及接收方实测匹配废钢流质量；不得与安装废钢重复。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cap_waste`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rotary_install | 旋入安装与延长节螺栓装配 | required | 实际设计的无灌浆旋入桩安装 | 引导节/延长节/连接组件装配集成为已安装桩组装件；包含实际准备/障碍物工作 | 按桩和用途记录实际已安装组装件并交给 cap_accept；所有失败/反力工作按最终参考流归属 |
| cap_accept | 钢制桩帽集成及条件性试验验收 | required | 实际获批钢制桩帽/接口连接；仅工程师指定或指示时载荷试验 | 已安装桩与钢制桩帽/五金装配集成为已验收传力接口 | 1 item 已验收基础合同组；交付前纳入试验及返工资源 |


已安装桩的交接是具有桩/转移 ID 以及实际数量、深度和扭矩证据的物理装配状态；属于内部流转，不是另一项销售服务。条件性载荷试验包含在 cap_accept 中；文件收取或仅检验不是独立生产节点。失败/反力桩返回 rotary_install 进行拔除/重装，成本和环境负荷保留在同一合同组。

### 过程：旋入安装与延长节螺栓装配 (`rotary_install`)

#### 输入

##### 产品流

###### 实际预制镀锌钢制螺旋桩引导节 (`lead_sections`)

按获批型号、叶片/桩身配置和涂层，在实际供应门接收工厂预制/涂覆引导节。包括永久、失败、更换和反力试验位置；供应者已含连接件/螺栓保留在原供货单内。 数量范围证据需求：取得实际桩清单的零件特定供应者质量或校准批次称重及总收货记录，含失败/试验引导节；无通用引导节 kg 或叶片数量换算。

- 选定流：实际预制镀锌钢制螺旋桩引导节
- 流属性/单位：质量 / kg
- 数量规则：分配到本参考合同组的实测引导节总收货/领用质量；保留期初/期末库存及真实外退账。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`
- 来源：`chance-helical-installation-2017`



###### 实际预制镀锌钢制螺旋桩延长节 (`extension_sections`)

实际延长节及整体连接套属于供应产品；追加深度和失败尝试归属本工程。不重复锻造/镀锌负荷。 数量范围证据需求：采集延长节长度、桩身/壁厚/型号特定质量、实际数量、总收货和退回；仅项目深度不能确定 kg，指南示例尺寸不是通用现行规格。

- 选定流：实际预制镀锌钢制螺旋桩延长节
- 流属性/单位：质量 / kg
- 数量规则：按型号/批次及工程领用记录实际延长节总供应质量，含更换和反力桩。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`
- 来源：`chance-helical-installation-2017`



###### 实际单独供应的螺旋桩延长节连接螺栓 (`coupling_bolts`)

仅纳入延长节供货尚未包含的单独供应螺栓；实际等级/尺寸/涂层身份分别记录。 数量范围证据需求：实际螺栓供货单、包装质量/数量和经核实零件质量建立区间并检查组件已含情况；无通用螺栓增量。

- 选定流：实际单独供应的螺旋桩延长节连接螺栓
- 流属性/单位：质量 / kg
- 数量规则：归属实际安装合同组的单独供应螺栓总质量；供应者已含时为零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_materials`
- 来源：`chance-helical-installation-2017`



###### 供应旋入安装机械的实际柴油 (`installation_diesel`)


本节点真实上游燃料供应，尚未扣除可用向外退出量。按 fuel_supply_fate 保留未退回废物/损失的供应负荷，并单独确定燃烧活动。保留真实燃料牌号、设备工况、供应商覆盖、密度/状态和计量不确定性。数量范围证据需求：采用完整施工期油箱/表计期初、收货、领用和期末记录、设备工况及分摊不确定度；无通用升/桩或能量因子。

- 选定流：供应旋入安装机械的实际柴油
- 流属性/单位：质量 / kg
- 数量规则：真实上游供应燃料质量 G_fuel 仅除以声明参考单位下独立实测的正值验收批量 D_fuel 一次；保留各互斥燃料去向，按第8节另行确定实际燃烧 B_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_energy`



###### 电动安装设备的实际电网电力 (`installation_electricity`)

实际电动旋转设备、充电或其他安装用电时启动；电力保留原生能量计量及实际供应组合。 数量范围证据需求：采集校准表计时段、充电覆盖、待机和实际工况分摊记录；无固定 kWh/桩，不以 Count 替代 Energy。

- 选定流：电动安装设备的实际电网电力
- 流属性/单位：能量 / kWh
- 数量规则：启动时归属本合同组/节点的计量 kWh，记录充电及损耗边界。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_energy`



###### 实际单独消耗的液压补充油 (`hydraulic_topup`)

实际计量本节点补充油消耗时纳入；循环使用的设备充油不是自动消耗，完整寿命维护油不得再次计入。 数量范围证据需求：记录实际等级、加注质量、回收、维护归属及泄漏事件；不假定每运行小时永久消耗油量。

- 选定流：实际单独消耗的液压补充油
- 流属性/单位：质量 / kg
- 数量规则：实际单独油品领用量经可用库存对账；识别油品等级和消耗原因。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_energy`



##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交付桩帽集成的实际旋入螺栓装配钢制螺旋桩组装件 (`installed_pile_assembly`)

物理内部交接识别实际桩位、引导节/延长节、深度、角度、扭矩和处置。永久桩与反力/试验桩分别标记；失败/未验收尝试不得增加最终验收服务数量。 数量范围证据需求：采集实际安装清单、转移验收、失败/反力数量和设计终止记录；一个服务的合同组参考并不规定桩数。

- 选定流：交付桩帽集成的实际旋入螺栓装配钢制螺旋桩组装件
- 流属性/单位：物品数量 / item
- 数量规则：按桩 ID 和用途实际转移的已安装组装件数量；不固定为一，不再次作为最终服务销售。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_records`
- 来源：`chance-helical-installation-2017`



##### 废物流

###### 送至授权接收方的实际单独移除废液压油 (`spent_hydraulic_oil`)

本工程拥有实际维护移油事件时启动；循环充油不是废物输出，完整寿命维护不得再次计入。记录实际配方/污染和接收方。 数量范围证据需求：取得移油/接收方称重、维护事件归属、油品等级及污染；对账留存液体、补油、回收油和实际泄漏，不假定损失率。

- 选定流：送至授权接收方的实际单独移除废液压油
- 流属性/单位：质量 / kg
- 数量规则：本次实际移除废油流的计量质量；不自动等于补油质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_waste`



###### 从桩位移除并实际废弃的矿物障碍物 (`removed_obstruction`)

本路线内获批的实际偶发移除时启动，须有准确实际矿物/土身份及保管。不同污染土、岩石、埋设建筑废物或可再用回收料需分别正确类型交换，或审查路线适用性。 数量范围证据需求：采集障碍物事件/位置、批准、实际组成/污染、地磅或具有实际堆积密度证据的实测体积、接收方及准备资源；无通用弃土产率。

- 选定流：从桩位移除并实际废弃的矿物障碍物
- 流属性/单位：质量 / kg
- 数量规则：送至记录接收方的实际称重匹配矿物流；旋转挤土保留地层且未移除时为零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_install_waste`



##### 基本流

###### 现场安装燃烧实际排入空气的化石二氧化碳 (`installation_fossil_co2`)

本节点实际拥有现场化石燃料燃烧时启动；识别二氧化碳及空气介质，排除供应者数据中已含燃料上游生产排放。 数量范围证据需求：取得实际燃料质量/碳含量及燃烧/滞留证据或校准尾气测量；无默认碳含量、因子或推定生物碳比例。

- 选定流：现场安装燃烧实际排入空气的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：按实际燃料组成/氧化证据和有记录碳平衡测量或计算本合同组实际化石 CO2。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_install_emissions`



### 过程：钢制桩帽集成及条件性试验验收 (`cap_accept`)

#### 输入

##### 产品流

###### 交付桩帽集成的实际旋入螺栓装配钢制螺旋桩组装件 (`installed_pile_feed`)

与 installed_pile_assembly 对应的内部交接采用相同转移/桩 ID、用途及实际数量；其上游负荷向最终合同组只传递一次。 数量范围证据需求：对账实际成对转移数量/ID 及被扣留失败位置；取得配置、深度、扭矩和反力用途证据，不假定一根桩对应一个服务。

- 选定流：交付桩帽集成的实际旋入螺栓装配钢制螺旋桩组装件
- 流属性/单位：物品数量 / item
- 数量规则：按转移 ID 记录实际接收进入集成的组装件数量；不得用参考流固定进料数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cap_records`
- 来源：`chance-helical-installation-2017`



###### 实际单独供应的获批钢制传力桩帽或适配件 (`steel_caps`)

获批供应钢制桩帽/适配件将已安装桩连接到指定新结构承载接口。记录准确供应配置和涂层，不纳入混凝土桩帽或地梁。 数量范围证据需求：需要实际获批图纸、清单、零件数/质量或称重、总收货、不合格件及退货；无通用 kg/桩帽或假定承载力。

- 选定流：实际单独供应的获批钢制传力桩帽或适配件
- 流属性/单位：质量 / kg
- 数量规则：按设计和批次记录实际供应桩帽/适配件总质量，含不合格/更换件；退货和期末库存单列。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cap_materials`
- 来源：`chance-helical-installation-2017`



###### 实际单独供应的钢制桩帽连接螺栓 (`cap_bolts`)

仅实际单独供应且桩帽包未含螺栓/紧固件时启动；不同等级/涂层规格须分别交换。 数量范围证据需求：采集准确获批紧固件清单、供应已含检查、零件质量/数量和更换/库存；无通用五金百分比。

- 选定流：实际单独供应的钢制桩帽连接螺栓
- 流属性/单位：质量 / kg
- 数量规则：按实际组件清单及安装合同组记录单独供应连接螺栓总质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cap_materials`



###### 实际厂家认可的镀锌表面修补涂料 (`field_repair_coating`)

仅实际获批的现场切割/受损镀锌表面修补时启动；需要准确供应配方/状态。工厂涂层已在组件供货中，不在此重复。其他实际准备/修补耗材须分别识别交换。 数量范围证据需求：取得实际获批产品/TDS、修补面积及领用/施用/废物计量，必要时有湿/干或挥发含量证据；无通用锌含量、修补剂量或湿干因子。

- 选定流：实际厂家认可的镀锌表面修补涂料
- 流属性/单位：质量 / kg
- 数量规则：实际单独领用修补产品湿质量总量，应用、残余、退回和期末库存对账。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cap_materials`



###### 桩帽集成及载荷试验设备的实际柴油 (`cap_test_diesel`)


本节点真实上游燃料供应，尚未扣除可用向外退出量。按 fuel_supply_fate 保留未退回废物/损失的供应负荷，并单独确定燃烧活动。保留真实燃料牌号、设备工况、供应商覆盖、密度/状态和计量不确定性。数量范围证据需求：需要油箱/表计质量或具有实际密度/温度的体积、完整试验期和待机记录及跨节点对账；无固定试验燃料。

- 选定流：桩帽集成及载荷试验设备的实际柴油
- 流属性/单位：质量 / kg
- 数量规则：真实上游供应燃料质量 G_fuel 仅除以声明参考单位下独立实测的正值验收批量 D_fuel 一次；保留各互斥燃料去向，按第8节另行确定实际燃烧 B_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cap_energy`



###### 桩帽工具及载荷试验装置的实际电网电力 (`test_electricity`)

实际方法用电驱动桩帽工具及试验千斤顶/泵/数据装置时启动，含复试；不得再次记供应者/服务商电力。 数量范围证据需求：取得表计/校准、时段、辅助/待机及服务商覆盖、实际试验计划和工况；无 kWh/试验默认值或不支持的 Energy 身份。

- 选定流：桩帽工具及载荷试验装置的实际电网电力
- 流属性/单位：能量 / kWh
- 数量规则：归属桩帽/试验节点及参考合同组的实测 kWh，保留原生能量单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cap_energy`



##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 在钢制桩帽接口处验收的无灌浆旋入式钢制螺旋桩基础服务 (`accepted_foundation_service`)

获批桩/桩帽安装、扭矩/深度记录和要求试验/复试通过且处置已关闭之后，一个实际合同组为预期输出。终点先于另一责任方建设的上部结构。 数量范围证据需求：采集已签署合同组验收和完整桩/配置/扭矩/深度/桩帽/试验证据；一个物品定义参考，不提供通用桩数、承载力、钢材 kg 或寿命。

- 选定流：在钢制桩帽接口处验收的无灌浆旋入式钢制螺旋桩基础服务
- 流属性/单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cap_records`
- 来源：`chance-helical-installation-2017`



##### 废物流

###### 所供应镀锌表面修补涂料的实际废物残余 (`repair_coating_waste`)

实际修补产品残余送至记录废物接收方时启动。保留实际配方/湿状态、容器皮重及危险状态；包装和其他清洁产品须分别具体交换。 数量范围证据需求：需要实际领用/施用/残余产品称重、容器皮重、供应配方和废物接收单；实际挥发物质/介质若释放须单独记录，不作为无法解释的缺失质量。

- 选定流：所供应镀锌表面修补涂料的实际废物残余
- 流属性/单位：质量 / kg
- 数量规则：实测涂料残余质量，排除实测可用退回和期末库存；不假定湿干换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cap_waste`



##### 基本流

###### 桩帽及试验燃烧实际排入空气的化石二氧化碳 (`cap_fossil_co2`)

桩帽/试验设备实际化石燃烧时启动；明确空气介质和节点归属，能源生产上游排放保留在供应者数据集。 数量范围证据需求：需要准确燃料量/组成/氧化或校准尾气计量及不确定度；无任意 CO2 因子，不重复旋入事件。

- 选定流：桩帽及试验燃烧实际排入空气的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：本节点实际实测 CO2 或燃料组成碳平衡结果，含复试。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cap_emissions`



## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_service | accepted_foundation_service | 验收合同组是预期最终输出；不得假设废钢、保留地层或临时反力桩为联产品。交付多个产品时按实际独立合同组和资源分开。 |  |
| rework_retention | 所有过程 | 深度/扭矩失败、钢节损坏、错位、不合格桩帽或载荷试验保留全部尝试、追加钢节、能量、移位、拔除、反力桩工作和复试。链接循环/事件 ID 及最终再用/退回/废弃处置；未解决失败不得成为验收输出。 | chance-helical-installation-2017 |
| gross_stock_return | 所有材料行 | 按实际身份对账期初库存加总收货与安装/消耗、真实外退可用品、已计量废物/损失及期末留存库存。不得先在输入扣净退货再重复输出。期末库存携带声明负荷结转，不是对外交换；实际再用组件保留先前分摊历史。 收货/领用总量指已扣车辆或容器皮重、尚未预扣退货或向外转移的材料总量，不是地磅满载车辆总重。记录 gross_kg 与 tare_kg 时相减得到进入物料衡算的材料质量；真实对外流与留存库存分别处理。|  |
| shared_complete_life | 资产行 | 每项独立资产采用记录的本工程/节点实际物理服务除以同单位同工况的实际完整寿命服务；将份额用于生产、维护/更换和寿命终结，不重复运行燃料。索引其他消费工程/节点/报告期并对账总份额。采用有界供应者服务时，记录实际资本和运行覆盖并移除本地重叠行。  生命周期已结束的资产采用实测完整寿命历史；仍在役资产可采用有依据的未来剩余服务、更换、终止及寿命终结情景。将预测与已观察事实分开，记录分母/来源、不确定度及敏感性，在实际使用、更换或退役变化时更新。不得伪造未来 retirement_date 或任意假定默认寿命；只有缺少有依据的完整寿命覆盖或分母才阻断定稿。|  |
| period_events | 所有过程 | 声明进场/开始、各安装/试验/返工事件、验收及库存期末/期初期间，以及资产投用/更换/退役。每个事件只归属一次；期间间对账结转库存及剩余资产负荷，不得在年末重置寿命。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_install_materials | rotary_install | 引导节/延长节/单独螺栓及真实外退可用品 | 零件/批次库存及保管账 | contract_id; period_id; pile_id; purpose; part_id; model; grade; coating; opening_kg; gross_receipts_kg; gross_issues_kg; installed_kg; outward_returns_kg; waste_kg; closing_kg; unit_mass_kg; weighing_uncertainty_kg; receipt_id | 使用校准秤或可追溯零件特定供应者质量称重；数量对应型号和供货单。将期初加总收货与安装、真实外退、废物及期末留存库存对账，不重复扣净；包含反力/失败/补救位置。 | kg; part count; actual length m | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 匹配零件/批次数、校准及供应已含证据；超出实测不确定度的残差应调查；保留库存负荷结转，不设固定损失或范围。 |
| cp_install_energy | rotary_install | 实际安装柴油/电力/液压补充油 | 表计/油箱/维护事件记录 | contract_id; period_id; event_id; equipment_id; purpose; fuel_grade; fuel_kg; fuel_opening_kg; fuel_receipts_kg; fuel_closing_kg; fuel_returns_kg; fuel_transfer_out_kg; unburned_spill_kg; spill_disposition; fuel_volume_L; fuel_density_kg_per_L; density_temperature_C; electricity_kWh; oil_grade; oil_added_kg; oil_recovered_kg; operating_h; standby_h; provider_coverage; measurement_uncertainty; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | 使用校准表计和油箱对账计量全工程燃料/能量/油。实际消耗燃料为期初加收货减期末、实际可用外退/转供和未燃泄漏/损失；链接这些处置，不增加重复的通用产品退货交换。燃烧 CO2 仅采用实际燃烧燃料，不采用退回/转供/泄漏燃料；体积转 kg 使用实际批次密度及温度。分开承载机及其他节点事件 ID；包含待机/拔除/反力工作，避免服务商/寿命维护重复。 按 fuel_supply_fate 分列供应与燃烧；采集各互斥去向、真实分母及单位，保留未退回废物/损失的供应负荷，披露未知去向。 | kg; L; kg/L; degC; kWh; h | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 完整期初/收货/期末对账、密度证据及表计校准；实际工况/活动和供电组合；最终交换前独立核实 Energy 支撑，不假定燃料/油因子。 |
| cp_install_assets | rotary_install | 承载机/扭矩头/适配件/通行垫板完整寿命资产份额 | 资产寿命及消费期间矩阵 | contract_id; asset_id; supplied_assembly_id; component_id; node_id; period_id; job_id; commissioning_date; use_h; mat_loaded_use_days; lifetime_same_duty_h; lifetime_same_duty_days; maintenance_event_id; replacement_event_id; retirement_date; production_coverage; end_of_life_coverage; share_uncertainty | 识别各供应资产；按节点/工程/期间划分实际同工况服务，以工程节点使用除以有依据的完整寿命分母。承载机/扭矩头/工具工况用小时，垫板用实际受载占用天数；不得把 h/天视为产品交换单位；分数资产 item 携带资本份额。独立寿命组件分开。 | item; h; days | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 实际寿命/服务记录、剩余寿命/更换/退役证据和完整寿命负荷范围；所有消费者份额求和且不得重复归属。缺有依据的分母/完整覆盖阻断最终资产分摊，不假定寿命。 |
| cp_install_logistics | rotary_install | 两节点实际组件/设备货运 | 运输段/载荷/供应门记录 | contract_id; leg_id; period_id; consuming_node; physical_exchange_owner_node; custody_event_id; origin; destination; carrier_mode; payload_kg; loaded_distance_km; empty_distance_km; return_leg; supplier_included_gate; equipment_mobilization; uncertainty | 各实际进场/场间/退货/废物运输段只记一次，含两节点桩帽/试验用品、可用组件/燃料退回和废物接收方运输。本货运行及 rotary_install 的 cp_install_logistics 是唯一物理交换归属；consuming_node 标记 cap_accept 需求而不再本地交换。custody_event_id 与 leg_id 对应退货/废物记录。用实际载荷吨数乘载货公里，记录实际空载段/供应者方法；按目的节点划分而不再设本地货运行，不兼容货运身份分开。 | t*km; kg; km | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 票据/路线/载荷和供应门证据；实际空载/共载分摊；交换交付前核实完整兼容 Transport 支撑，不设默认距离或收益。 |
| cp_install_records | rotary_install | 已安装组装件交接及每次尝试 | 桩/转移/竣工/缺陷记录 | contract_id; pile_id; purpose; attempt_id; transfer_id; design_revision; manufacturer_revision; lead_id; extension_ids; bolt_ids; position_coordinates_m; angle_deg; depth_m; torque_Nm; torque_sampling_depth_m; rotation_rpm; advance_m_per_rev; shaft_torque_limit_Nm; required_min_effective_torque_Nm; specified_min_depth_m; effective_torque_rule; instrument_id; calibration_date; specified_tolerance; acceptance_source; disposition; event_date | 按现行获批工程师/厂家程序记录每根实际永久/失败/反力桩及尝试。记录经校准的安装扭矩历史/深度/角度，以及指令要求的转速/进尺，含实际单位、容差和文件条款。确认工程师授权偏离，并与 cap_accept 配对物理转移；采用项目终止条件，不采用指南例值或扭矩—承载力因子。 | item; m; deg; Nm; rpm; m/rev | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 授权施工者及仪器校准；完整扭矩/深度记录和获批偏离；实际桩数/配置和不合格处置；交接对应一致及位置可追溯。 |
| cp_install_waste | rotary_install | 钢材/木材/废油/偶发矿物废物退出 | 分类废物联单及事故账 | contract_id; event_id; pile_id; period_id; waste_identity; grade; coating; contamination; waste_status; gross_kg; tare_kg; net_kg; volume_m3; actual_bulk_density_kg_per_m3; destination; receiver_id; custody_receipt; treatment_coverage; spill_id; uncertainty | 对各实际独立识别流称重并保留接收方/保管证据；体积换算矿物质量须实测实际堆积密度。区分真实可用退回、库存、废物和事故释放，不自动假设弃土；移除/准备工作燃料和设备只记一次。 | kg; m3; kg/m3 | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 地磅/皮重/校准、废物分类和接收单；废油寿命维护归属；实际障碍物批准；物料/去向未知触发路线适用性审查或清单扩展。 |
| cp_install_emissions | rotary_install | 实际化石 CO2、PM2.5及其他逐项识别释放 | 排放计量或特定因子/组成模型 | contract_id; event_id; period_id; equipment_id; fuel_kg; carbon_mass_fraction; oxidation_fraction; retained_carbon_kg; species; medium; particle_fraction; measured_release_kg; factor_value; factor_unit; factor_source; activity_value; activity_unit; uncertainty | 采用校准计量或实际燃料碳/氧化平衡计算化石 CO2，保留碳转 CO2 分子量换算来源。PM2.5 需匹配的实测粒级或准确设备/工况因子及实际活动。其他每种实际物质/介质或泄漏成分均需独立具体交换，不替换为汇总 NOx/VOC/粉尘。 | kg; actual factor/activity units | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 保留来源/化学/校准、化石/生物碳基准、粒级/介质及不确定度；明确审查尾气和事故完整性。供应者上游排放与本地直接释放归属不同，不用未核实默认因子。 |
| cp_cap_materials | cap_accept | 实际桩帽/螺栓/修补涂料及可用桩帽退回 | 获批清单及库存/保管账 | contract_id; period_id; pile_id; cap_id; drawing_revision; bolt_id; supplier_included_components; coating_product; product_revision; opening_kg; gross_receipts_kg; gross_issues_kg; installed_or_applied_kg; returns_kg; waste_kg; closing_kg; volatile_fraction; repair_area_m2; uncertainty | 采集实际获批钢制接口清单及分别供应质量。仅被要求且实际使用时称量获批镀锌表面修补产品，保留湿态/施用/残余/挥发证据。按身份对账总供应、外退及结转库存，不重复工厂涂层或包内螺栓。 | kg; m2; actual supplied composition units | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 获批图纸/产品说明、实际零件质量/校准、供货单及退回单；不同材料变体分开。不设通用桩帽质量、剂量、固体或挥发比例。 |
| cp_cap_energy | cap_accept | 实际桩帽/试验柴油及电力 | 表计/油箱/事件能量账 | contract_id; period_id; event_id; equipment_id; pile_id; test_id; test_required; fuel_grade; fuel_kg; fuel_opening_kg; fuel_receipts_kg; fuel_closing_kg; fuel_returns_kg; fuel_transfer_out_kg; unburned_spill_kg; spill_disposition; fuel_volume_L; fuel_density_kg_per_L; density_temperature_C; electricity_kWh; operating_h; standby_h; provider_coverage; uncertainty; G_fuel; B_fuel; U_fuel; X_fuel; W_fuel_contained_mass; P_fuel_contained_mass; closing_usable_tank_stock; D_fuel; D_fuel_unit; fate_completeness; fuel_supply_burden_owner | 按事件计量实际桩帽工作、试验和复试。实际消耗燃料为期初加收货减期末、可用外退/转供及单独记录未燃泄漏/损失；保管/事故只链接一次，仅实际燃烧燃料用于燃烧排放。保留表计/油箱对账，体积供油时记录实际密度/温度。包含辅助及反力系统搬运，与旋入节点事件归属和服务商覆盖对账。 按 fuel_supply_fate 分列供应与燃烧；采集各互斥去向、真实分母及单位，保留未退回废物/损失的供应负荷，披露未知去向。 | kg; L; kg/L; degC; kWh; h | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 校准/密度和完整试验事件/活动记录；不规定强制试验量、通用燃料因子或能量转数量；核实实际 Energy 身份链。 |
| cp_cap_assets | cap_accept | 工具/千斤顶泵/反力架完整寿命份额 | 资产寿命及消费工程/期间矩阵 | contract_id; asset_id; supplied_assembly_id; component_id; node_id; job_id; period_id; commissioning_date; use_h; lifetime_same_duty_h; maintenance_event_id; replacement_event_id; retirement_date; production_coverage; end_of_life_coverage; share_uncertainty | 分别记录各实际桩帽工具、试验千斤顶/泵和反力架/梁，除非有兼容寿命的单一供应组装件证据。按实际节点服务除以完整寿命同工况服务分摊，含试验/复试架设/移除；反力桩钢材/工作保留在 rotary_install，不再次作为架生产记账。 | item; h | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 实际组装件/校准/服务记录、其他消费期间/工程、更换和退役证据；资本/运行服务商覆盖对账；缺有依据的寿命分母或完整终止覆盖阻断最终分摊。 |
| cp_cap_records | cap_accept | 成对桩进料及验收合同接口 | 物理交接、桩帽连接、试验和验收记录 | contract_id; period_id; pile_id; transfer_id; purpose; cap_id; connection_method; fastening_torque_Nm; specified_tolerance; test_required; test_plan_revision; load_acceptance_limit_value; load_acceptance_limit_unit; displacement_acceptance_limit_value; displacement_acceptance_limit_unit; hold_acceptance_limit_value; hold_acceptance_limit_unit; criterion_clause; test_id; reaction_pile_ids; load_kN; displacement_mm; hold_s; instrument_id; calibration_date; acceptance_source; defect_id; retest_id; disposition; accepted_group_count; signed_handover_date | 实际已安装桩进料与旋入节点输出配对。记录获批桩帽/适配件连接及实际紧固条件；仅按实际工程师计划载荷试验，记录校准载荷/位移/保持时间及准确验收条件。关闭各失败/反力/复试处置，并取得签署基础接口验收后才声明一个最终服务物品。 | item; Nm; kN; mm; s | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 合格施工者、实际仪器/容差/来源证据及工程师批准；验收位置不留未解决缺陷；匹配转移 ID 和验收数量；无通用承载力或试验设置。 |
| cp_cap_waste | cap_accept | 实际钢材及涂料废物退出 | 分类废物联单/残余账 | contract_id; period_id; event_id; pile_id; waste_identity; supplied_coating_product; grade; coating; contamination; wet_state; gross_kg; tare_kg; net_kg; receiver_id; destination; treatment_coverage; custody_receipt; uncertainty | 分别称量实际钢材和湿涂料残余流，区分可用退回及期末库存。按实际供应配方对账施用/留存/废物及实际挥发释放；实际包装/清洁废物身份另列。 | kg | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 实际分类联单/皮重和接收方证据；匹配桩帽/修补事件；不假定废钢或湿干因子，不重复安装废物，不静默丢弃未知释放。 |
| cp_cap_emissions | cap_accept | 实际桩帽/试验化石 CO2及其他分别分类释放 | 排放计量或准确燃料组成模型 | contract_id; period_id; event_id; equipment_id; test_id; fuel_kg; carbon_mass_fraction; oxidation_fraction; retained_carbon_kg; species; medium; measured_release_kg; actual_factor_source; activity; uncertainty | 采用实际燃料碳/氧化、滞留碳和分子量换算证据，或校准尾气计量。最终定稿前将每种其他实际修补涂料挥发物质/介质和试验燃烧污染物分别具体交换；不得使用通用 VOC 或湿涂料水分排放身份。 | kg; actual composition/activity units | 适用时每次收货/领用/使用/转移/试验/返工/退出事件及期末 | 完整实际合同活动，含进场、失败/反力桩、复试及验收；链接先前/后续库存与资产寿命期间 | 实际场地、供应批次/服务商及具名设备/事件，不混入无关工程 | per reference flow | 实际组成/计量及因子兼容性、空气/土/水介质、不确定度、活动完整性及跨节点归属；燃料上游排放单列。 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| event_normalization | 所有清单行 | 将归属验收合同组且唯一拥有的实际事件数量求和，按参考流报告。内部转移在组边界抵消，物理进料数量保持实际值。 | 合同/事件/期间 ID；cp_install_records；cp_cap_records；相关节点协议 | 每参考流实际交换数量 |  |
| direct_release_calculation | installation_fossil_co2, installation_pm25, cap_fossil_co2 | 以实际实测释放 kg 为原始输入或使用有文件的特定来源模型。CO2：由实际燃烧燃料质量和实测/有来源碳组成计算氧化化石碳，滞留/未氧化碳只处理一次；乘有文件支持的 CO2 与碳分子量比，保留来源和单位。PM2.5：准确设备/工况/粒级因子乘实际匹配活动量，仅按有文件支持单位因子换算。各唯一归属释放事件按参考流求和；传播仪器、组成/因子及活动不确定度，不设通用排放因子。 | 节点排放及燃料协议；实际计量/组成/因子来源；实际单位换算证据 | 每参考流实际物质特定排放 kg 及不确定度区间 |  |
| component_balance | lead_sections, extension_sections, coupling_bolts, steel_caps, cap_bolts | 同一身份期初库存加总收货等于安装/消耗加真实外退可用品加已计量废物/损失加期末库存。实际差异用实测不确定度调查，不虚构平衡交换。 | 节点材料及废物协议；实际总收货和期末库存 | 已对账物理库存/保管平衡及声明结转负荷 |  |
| asset_service_share | rotary_carrier_asset, rotary_head_asset, temporary_access_mats_asset, cap_tool_asset, test_equipment_asset, test_reaction_frame_asset | 实际节点同工况服务除以有文件支持的完整寿命同工况服务得到分数资产 item；使用单一消费期间矩阵将份额用于实际完整寿命资本/维护/寿命终结负荷。燃料/能量单列，定稿前解决缺失寿命/终止证据。 | cp_install_assets；cp_cap_assets；实际资产生命周期及消费记录 | 每参考流资产特定分数物品和完整寿命归属负荷 |  |
| freight_measurement | installation_freight | 实际载荷 kg 除以 1000 得到吨；乘实际载货路线 km 得到 t*km，空载/共载分摊及供应门覆盖分别有文件。 | cp_install_logistics；实际运输段/服务商记录 | 每参考流实际吨公里 |  |
| fuel_supply_fate | installation_diesel; cap_test_diesel | 对每种真实燃料身份及互不重叠的节点/事件期间，G_fuel = 期初可用燃料 + 外部接收量 - 期末可用燃料库存（含设备油箱）；扣除容器皮重，边界内领用/转移不再作新增接收。G_fuel 为真实可用向外退回 U_fuel、向外转移 X_fuel、收集的未燃燃料 W_fuel 和未收集燃料 P_fuel 扣除之前的物理产品输入总量。各去向互斥并分别解析实际产品、废物流或物质/介质身份；泄漏事件总量仅作核查，不重复扣除。W_fuel 和 P_fuel 指所含燃料质量，不是受污染吸附物或废水的总质量。仅在完整且有证据的去向台账下，B_fuel = G_fuel - U_fuel - X_fuel - W_fuel - P_fuel；未知去向保留缺口，不假定已燃烧。只有有独立依据的 B_fuel 驱动燃烧排放。所有未退回的未燃燃料、废物和损失均保留上游供应负荷；真实可用退出物仅可携带有记录的原始未用材料负荷，不再次扣减净输入或给予避免生产信用。期初/期末库存负荷只结转一次。各物理量仅除以 D_fuel 一次；D_fuel 为本 PCR 第3-4节规定的参考单位下独立实测的正值验收批量（验收体积、面积、轴向长度、钢材质量或完整验收计数），不是燃料量或中间产出。现有 actual_consumed/燃料消耗字段是燃烧活动记录，不能替代上游输入 G_fuel。供应商已含燃料和排放只设一个责任方，不重复加入重叠的前景供应或燃烧。 | opening fuel; external receipts; closing intact fuel; U_fuel; X_fuel; W_fuel; P_fuel; D_fuel; actual node fuel protocol and fate evidence | G_fuel product input; independently supported B_fuel; separately resolved exclusive outlets |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_and_gate | 所有流卡 | 交付 TIDAS 交换前，实际身份、供应状态、用途、保管/废物状态和基本流介质/粒级须与经核实具体流和独立核实属性/单位链匹配。候选未解析卡不是最终交换 UUID。 | 准确供应者/产品/接收方记录；平台详情/属性/单位组链；manifest 具名未解析条目 |
| range_and_uncertainty | 所有流卡 | 由实际获批配置及完整施工记录取得逐卡缺失范围证据，仅对声明门及分母导出可追溯经验或计量不确定度区间。一个参考物品是定义，不是物理强度界限。 | 实际最小/最大或不确定度方法、仪器/规格证据、样本/事件覆盖及排除；不将指南例值作为默认 |
| period_completeness | 所有过程 | 包含失败/补救/反力位置、临时通行、进场、所有供应/退出运输段、待机、复试和实际排放。跨期每事件记一次；期初/期末库存和完整寿命资产与其他工程对账。 | 事件覆盖账、消费期间矩阵、接收单、交付及例外登记 |
| project_gate | accepted_foundation_service | 以现行实际工程师/厂家指令和获批偏离决定扭矩/深度/角度/桩帽/试验限值。记录全部计量单位、校准仪器、规定容差及准确验收来源。 | 竣工桩清单；扭矩历史；获批桩帽/连接清单；试验启动/载荷—位移证据；已签署缺陷关闭及接口交付 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_and_gate | accepted_foundation_service | 确认新建工程旋入、推力配合、无灌浆及获批钢制桩帽接口。要求的扭矩/深度和条件性载荷试验须按现行实际获批指令满足；不宣称上部结构或建筑验收。 | chance-helical-installation-2017; un-cpc3-2025 |
| transfer_and_reference | installed_pile_assembly, installed_pile_feed, accepted_foundation_service | 对账成对物理转移 ID/数量/配置/用途；保留实际进料量，且仅将一个验收组输出计为 1 item。失败/反力组装件不得冒充验收服务数量。 | chance-helical-installation-2017 |
| reject_closure | 所有过程 | 每项失败/不合格钢节/桩帽/试验须链接返工/更换/退回/废物处置并保留负荷。缺少关闭或反力/补救资源阻断最终前景验收。 | chance-helical-installation-2017 |
| custody_balance | 所有材料及废物行 | 按准确身份、期间和保管检查总收货、真实外退、安装/消耗/废物/损失和结转期末库存。不得扣净退货后重复输出、导出留存库存或采用无依据回收收益。 |  |
| asset_and_period | 资产行 | 按所有消费节点/工程/期间及投用/维护/更换/退役证据检查各共用资产。资本、运行及寿命终结覆盖只求和一次；未解决寿命分母/终止覆盖/服务商重叠阻断最终交换生产。 |  |
| release_and_range | 所有流卡 | 审查逐卡范围需求及实际排放/废物完整性；具体交换绑定前核实原生物理单位及实际物质/介质/粒级。未知流或支撑 UUID、未知实际界限仍为声明缺口，不虚构近似身份。 |  |
| enabling_complete | rotary_install | 实际通行/地下设施防护/障碍物工作须有明确材料、设备、能量、货运及退出归属。必要但未表示工程，或路线外大量开挖/混凝土整治，在审查清单扩展前阻断路线定稿。 | chance-helical-installation-2017 |
| validate_fuel_supply_fate | installation_diesel; cap_test_diesel | 按实际燃料协议、库存和供应商覆盖核查 G_fuel、B_fuel 及各互斥去向。未退回的未燃废物/损失保留上游负荷；去向、燃料组分或正值 D_fuel 未解决时，不得宣称燃料定量清单完整。不以燃烧活动替代采购燃料，不同时扣减泄漏总量及其各组成去向。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明验收合同组的前景安装数据包及 process、lifecyclemodel 投影 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际匹配的无灌浆旋入式钢制螺旋桩基础安装及获批钢制桩帽接口，披露配置/门和完整施工资源 |
| excluded_use | 通用基础平均；打入/灌浆/托换桩；完整建筑；无证据将另一载荷用途、地质、配置或寿命宣称等效；身份未解析的最终 TIDAS 交换 |
| required_metadata | 合同/场地/组及日期；工程师/厂家版本；地下设施及通行基线；合格施工者；竣工桩/桩帽清单；扭矩/深度/角度条件；实际试验计划/结果；供应门；库存及不合格/反力处置；资产/期间矩阵 |
| required_quality_disclosure | 实际计量及不确定度/范围覆盖；缺失准确流/支撑身份；条件启动及准备工程排除；完整寿命资产及物流覆盖；数据期间；缺陷关闭；候选限制 |
| update_trigger | 地层/设计/组件/供应状态、桩帽接口、终止/试验验收或获批指令变化；实际准备范围、服务商覆盖、共用资产寿命/期间数据或已解决身份/范围证据变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| chance-helical-installation-2017 | handbook | Hubbell CHANCE Helical Piles Installation Instructions，Part C3031833，Revision A 11/17，第1–8页。https://hubbellcdn.com/installationmanuals/TD04203E_Helical%20Piles%20Inst%20Sheet.pdf | 旋转安装、组件接口、扭矩/深度记录、获批变更、条件性试验、反力桩和桩帽交付；例值不是通用现行默认值 |
| un-cpc3-2025 | official_guidance | 联合国 CPC Version 3.0 explanatory notes，2025年6月30日，54512及相邻54511类。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 基础服务分类及更窄旋入边界；排除开挖和混凝土工作 |
