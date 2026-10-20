---
pcr_id: pcr.mechanically-surface-anchored-prefabricated-park-bench-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 预制公园长椅机械表面锚固安装服务

## 1. 范围与适用性

本 PCR 适用于在已验收、相容的既有钢筋混凝土板上，首次对工厂整装、四脚独立式／表面安装公园长椅实施机械表面锚固，交付已安装长椅的交接服务。Austin 长椅是示例路线，不是强制品牌。其 10/2009 历史指南确认工厂整装及四脚独立式机械安装细节；实际施工须依据当前项目专用长椅与锚栓说明及核实的混凝土相容性。排除悬臂式、环氧锚固、新板／钻孔基础／铺砖施工、现场家具制造、后续维护以及长椅使用和寿命终结。CPC 3.0 54400 包含街道家具安装，但本较窄 PCR 仅覆盖所定义路线。来源：`lf-austin-installation-2009`；`un-cpc3-notes-2025`；`lf-austin-product`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.mechanically-surface-anchored-prefabricated-park-bench-installation-services |
| classification_refs | CPC 3.0 54400；拟采用 narrower 关系 |
| covered_products | 在相容且验收合格的既有混凝土上首次机械表面锚固工厂整装四脚公园长椅，并验收交接 |
| excluded_products | 悬臂或环氧体系；新基础／混凝土板；现场座面／支架制造；未锚固摆放；后续维护 |
| representative_product | Austin 有靠背／无靠背四脚独立式／表面安装长椅，按订购扶手整装供货 |
| production_route | 验收混凝土／设计；保护摆放；拆滑垫；调平；标记／移开；钻孔；压缩空气清孔；复位；机械锚固；检查并闭环纠正 |
| market_state | 签署现场交接时完整验收安装，声明实际型号与锚栓配置 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完整工厂整装四脚公园长椅的验收合格机械表面锚固 |
| How much | 1 item 完整验收合格安装 |
| How well | 长椅调平且无损坏；按实际获批设计／当前说明安装并紧固全部必需机械锚栓；混凝土相容性已核实；纠正闭环且签署交接 |
| How long or cycle | 从收到供货及宿主验收到签署交接的一次首次安装作业；不假设使用寿命或维护周期 |
| reference_flow_link | `accepted_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格的预制公园长椅机械表面锚固安装服务 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 实际长椅型号／长度／材料／表面处理／支架／扶手；锚栓 SKU／数量／设计／当前说明；混凝土强度／养护／厚度／状态／钢筋／边距及间距相容性；调平布置；场址／日期；验收／纠正证据；上游供应及服务边界 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| count_reference | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 仅计完整验收合格安装；长椅、腿、座面或锚栓数量不能作为安装等价量。 |
| retain_measurements | 清单记录 | 实际交换属性 | 有记录的实际单位 | 保留原生质量、数量、能源及服务测量。质量须来自实测或可追溯 SKU 质量；缺少实际证据时不得把几何或时间转换为质量／能源。最终交换构建前核实各支持流属性及单位组；未解决的 Energy／Duration 或服务支持不得借用计数支持。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 收到工厂整装长椅及单独供应的机械锚固五金；既有钢筋混凝土板已建成，并已对实际锚栓／长椅体系明确验收 |
| starting_condition_role | 上游供应交接和已验收既有宿主界面；未知既有混凝土不默认验收合格 |
| product_classification_scope | CPC 3.0 54400 中较窄的街道家具安装服务子集 |
| recursive_input_rule | 购入同类别安装贡献时，以实际交接／覆盖范围作为有界分包投入；不得递归重建或把已完成安装冒充未安装长椅。 |
| upstream_dataset_requirement | 分别使用上游长椅、五金、包装及实际资源／服务数据集，声明地域／时间／技术及已含运输／能源；保留未解决覆盖，不虚构代理。 |
| disclosure | 记录宿主证据、权属、实际说明、收货／验收日期、库存／退回、纠正历史及全部共享资产使用方／期间。既有板生产在本服务交接以外；新要求的混凝土施工改变边界。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| host_gate | bench_install | 钻孔前确认实际长椅／锚栓设计，混凝土状态／强度／养护／厚度及相容的钢筋、边距／间距。历史指南数字仅限定其体系；不推断通用锚栓扭矩、载荷试验或混凝土验收默认值。 | `lf-austin-installation-2009` |
| field_integration | bench_install | 把所供完整长椅、单独锚栓／垫圈及条件性调平件整合到宿主界面。纳入摆放、钻孔、压缩空气清孔、紧固及检查；不得虚构现场座面／支架组装。 | `lf-austin-installation-2009` |
| sharing_scope | 资源与物流 | 识别每项实际钻机／压缩机／吊装／通行资产及服务期间、所有使用方作业／节点／期间，包括 bench_install，及有界供应方覆盖。仅有一个本地节点不能消除其他作业共享使用。 |  |
| correction_gate | bench_install | 松动／失效固定、支架不平、表面损伤或未验收混凝土阻止验收输出。bench_install 内记录纠正及重复资源／材料使用；未解决缺陷保留为拒收。重大修复、环氧替代或新宿主施工须复核边界。 | `lf-austin-installation-2009` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：机械套管锚栓与不锈钢垫圈 (`mechanical_hardware`)

过程／待建立交换的方向／类型：`bench_install` / `inputs` / `product`.

实际获批锚栓／垫圈的身份与数量独立于所供长椅跨越边界；示例长椅供货不含安装五金。按实际锚栓和垫圈展开交换；不包含环氧体系。

- 采集对象：机械套管锚栓与不锈钢垫圈
- 流属性/单位：Mass / kg
- 数量规则：按实际 SKU 及实测或可追溯单件质量记录跨入所声明作业边界的五金毛收货量／领用量；分别记录安装量、损失量、向外转移的可用退回量及期末库存，不得又从投入中净扣同一退回量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`lf-austin-installation-2009`

范围证据需求：需要实际锚固设计、固定点数量、SKU 质量和损失记录；指南尺寸属于具体系统细节，不是通用五金消耗范围。

#### 采集要求：条件性不锈钢调平垫片或额外垫圈 (`level_shims`)

过程／待建立交换的方向／类型：`bench_install` / `inputs` / `product`.

仅在实际调平需要时纳入额外部件，并与锚栓中已计入的垫圈区分。应先调平再紧固，以防支架损伤。

- 采集对象：条件性不锈钢调平垫片或额外垫圈
- 流属性/单位：Mass / kg
- 数量规则：记录实际单独供应、跨入作业边界的调平材料毛收货量／领用量，分别记录使用、损坏、向外退回和期末库存，不得重复扣减。已证实未触发时无此交换，不以任意零质量代替。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`lf-austin-installation-2009`

范围证据需求：需要实测高差、获批垫片布置和实际质量；不得设定虚构的垫片用量。

#### 采集要求：收货状态的运输保护包装 (`packaging_supply`)

过程／待建立交换的方向／类型：`bench_install` / `inputs` / `product`.

逐项识别所收包膜、泡沫、托盘等材料及供应方覆盖范围。仅在包装供应未被长椅／供应方数据集覆盖时，才建立本独立承载负担的产品交换。已覆盖包装仍按实际质量保留实物保管／去向账，但不增加第二次包装供应交换。

- 采集对象：收货状态的运输保护包装
- 流属性/单位：Mass / kg
- 数量规则：长椅／供应方覆盖范围以外独立供应的包装，按材料记录实际毛收货量。上游已包含时保留实测保管／去向数量，不再添加本项第二次供应负担，也不以任意零值替代实际质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`lf-austin-installation-2009`

范围证据需求：建立包装范围前需要供应方装箱单、实测包装质量及上游包装覆盖证据。

#### 采集要求：压缩空气清孔服务 (`compressed_air_service`)

过程／待建立交换的方向／类型：`bench_install` / `inputs` / `product`.

以压缩空气清孔是明确的安装任务。记录压缩机／气源身份、压力／供气基准、有效清孔时间及能源覆盖；另行表征所夹带的钻孔释放。时间是供应方服务计量基准，不是把空气体积换算为时间。

- 采集对象：压缩空气清孔服务
- 流属性/单位：Duration / h
- 数量规则：记录实际清孔服务小时数及有凭据的压缩机供应负担；供应方实际单位不同时保留原始单位，在最终数据集构建前核实具体交换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`
- 来源：`lf-austin-installation-2009`

范围证据需求：需要实测运行／空转时间、供气证据及实际供应方服务边界；不支持通用空气量、时间或能源因子。

#### 采集要求：条件性共享吊装通行与工具供应服务 (`equipment_services`)

过程／待建立交换的方向／类型：`bench_install` / `inputs` / `product`.

按实际资产／供应方区分吊装、作业通行、钻机／工具供应、维护和磨损的覆盖。不得推断每项作业均使用起重机；人工搬运不虚构动力服务。

- 采集对象：条件性共享吊装通行与工具供应服务
- 流属性/单位：Duration / h
- 数量规则：记录适用资产服务小时数及可归属维护／磨损；依据实际情况展开零、一或多个服务，避免重复计入其数据集已含能源。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`
- 来源：`lf-austin-installation-2009`

范围证据需求：需要实际设备类型、服务期间、使用情况、全部使用方及供应方纳入范围，才能建立时间／寿命／磨损区间；未指定的 Duration 支持保持未解决。

#### 采集要求：实际进场与退回运输服务 (`freight`)

过程／待建立交换的方向／类型：`bench_install` / `inputs` / `product`.

核实长椅、五金、包装以及适用退回／废物外运的实际车辆／承运方、路线、货物和载荷分配。长椅制造交接与送达交接的运输覆盖不得重叠。

- 采集对象：实际进场与退回运输服务
- 流属性/单位：Mass*length / t*km
- 数量规则：逐段用实际货物质量乘实际有载距离计算；空载／共享路段保留有依据的分配，并核对供应数据集重叠。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_logistics`

范围证据需求：需要实际货物质量、距离、载荷及回程记录才能建立运输区间；不设定长椅质量或默认交付距离。

#### 采集要求：安装拒收后或作为可用余量退回供应方的整张长椅 (`bench_returns`)

过程／待建立交换的方向／类型：`bench_install` / `outputs` / `product`.

从 bench_install 退回供应方的完整长椅须记录状态、序列号、实际接收方保管责任确认及转移凭证。安装验收拒收不同于供应方拒绝接收。核实其实际可用／可退产品状态；属于废物时转入 discarded_materials。该长椅不是已验收安装输出。现场保留库存或尚无实际接收的拟退回，不构成向外产品交换。

- 采集对象：安装拒收后或作为可用余量退回供应方的整张长椅
- 流属性/单位：Number of items / item
- 数量规则：记录实际向外转移的完整长椅，并关联收货与拒收事件，不赋予避免生产信用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需要按原因和接收方记录实际退回／拒收；无通用退回率。

#### 采集要求：向外转移的可用拆下滑垫包装及多余五金 (`usable_returns`)

过程／待建立交换的方向／类型：`bench_install` / `outputs` / `product`.

为锚固而拆下的独立式滑垫、可复用包装及未用完好五金，仅实际转移供复用／退回时作为独立材料产品。记录各材料、状态、质量、接收方及保管责任；现场保留材料计入期末库存。

- 采集对象：向外转移的可用拆下滑垫包装及多余五金
- 流属性/单位：Mass / kg
- 数量规则：按去向记录实际向外可用材料质量，每份实物只计一次。毛投入加明确向外退回，不得再净扣采购量或赋予替代信用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`lf-austin-installation-2009`

范围证据需求：需要滑垫／包装组成、可复用数量、接收方确认及库存核对；潜在复用性不能确定退回量。

#### 采集要求：实际丢弃的长椅五金包装及修补残余 (`discarded_materials`)

过程／待建立交换的方向／类型：`bench_install` / `outputs` / `waste`.

按材料／危险性及去向展开实际不可修复长椅部件、失效锚栓、损坏滑垫／包装、用后修补容器与残余。bench_install 负责生成及后续运输／处理覆盖；不得把完好退回产品当废物。

- 采集对象：实际丢弃的长椅五金包装及修补残余
- 流属性/单位：Mass / kg
- 数量规则：计量各废物转移并取得处理接收凭据，包括纠正损失；排除 captured_drilling_dust 已单列的粉尘。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：建立损失／丢弃范围前需要称重废物联单、实际组成及处理、固定失败记录。

#### 采集要求：收集的混凝土钻孔碎屑及粉尘 (`captured_drilling_dust`)

过程／待建立交换的方向／类型：`bench_install` / `outputs` / `waste`.

钻孔和压缩空气清理从既有混凝土板产生碎屑。记录收集物、颗粒／组成证据和实际废物去向；既有混凝土板施工负担不是新的材料投入。

- 采集对象：收集的混凝土钻孔碎屑及粉尘
- 流属性/单位：Mass / kg
- 数量规则：按干／湿基准计量收集碎屑及处理转移；区分收集质量与进入空气的颗粒物，避免重复释放。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`
- 来源：`lf-austin-installation-2009`

范围证据需求：需要实际孔几何、混凝土表征、收集方法及实测碎屑；缺少有依据的密度和收集证据时，孔尺寸本身不能确定质量。

#### 采集要求：钻孔清理及条件性修补的实际已表征空气释放 (`airborne_releases`)

过程／待建立交换的方向／类型：`bench_install` / `outputs` / `elementary`.

按有证据的粒径／物质及空气接收环境展开实际未捕集颗粒物。触发局部补漆时，单独表征报告的溶剂物种和释放基准；总 VOC 或笼统粉尘不能绑定固定污染物身份。本机械路线不引入环氧 VOC。

- 采集对象：钻孔清理及条件性修补的实际已表征空气释放
- 流属性/单位：Mass / kg
- 数量规则：采用实测释放量或有适用证据、关联采集记录的释放方法，保留排放／捕集分流及不确定性；不得把修补产品质量等同排放质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`
- 来源：`lf-austin-installation-2009`

范围证据需求：需要颗粒组成／粒径、接收环境、控尘观察及质量／排放测量；修补释放另需配方／物种及实际施工／固化证据。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| bench_install | 长椅与混凝土板机械装配整合及验收 | required | 相容且验收合格的既有混凝土及实际机械体系；条件性材料／服务依记录活动触发 | 负责组件界面、钻孔／清理／紧固、检查和闭环返工；供应方退回及实际废物出口均源于此 | 1 item 验收合格安装 |


### 过程：长椅与混凝土板机械装配整合及验收 (`bench_install`)

#### 输入

##### 产品流

###### 供应交接状态的工厂整装四脚公园长椅 (`assembled_bench`)

完整长椅到货时已装好指定支架及订购扶手。保留实际型号、长度、材料、表面处理、支架与扶手配置；不得以原料金属／木材替代，也不得虚构现场组件组装。

- 选定流：供应交接状态的工厂整装四脚公园长椅
- 流属性/单位：Number of items / item
- 数量规则：记录进入作业的完整长椅数量，包括替换件，并通过序列号／批次及去向核对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`lf-austin-installation-2009`; `lf-austin-product`

范围证据需求：先获得该配置及可比作业的交货、验收与替换数量记录，再建立供应量相对于验收输出量的区间。

###### 钻孔与现场工具的实际电力 (`electricity`)

记录现场／供应方／电压及电钻、紧固、充电、清理的计量边界。压缩机或租赁服务用电，仅在相应服务数据集未包含时在此计入。

- 选定流：钻孔与现场工具的实际电力
- 流属性/单位：Energy / kWh
- 数量规则：计量可归属电量；区分直接电表、经记录的共享分配和服务已含电力。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

范围证据需求：需要电表记录、任务时间、设备运行状态及全部共享使用方；额定功率本身或假定的 Energy 支持身份不能确定有效范围。

###### 条件性局部表面损伤修补材料 (`touchup_material`)

仅实际轻微机械搬运损伤且在交接前完成修复时触发。识别获批补漆配方、用量及固化／清洗要求。大面积重新表面处理或化学锚固须进行超出本干式机械路线的边界复核。

- 选定流：条件性局部表面损伤修补材料
- 流属性/单位：Mass / kg
- 数量规则：计量实际消耗的修补产品，保留固体／溶剂组成及处置信息；记录证实未使用时为零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_repairs`
- 来源：`lf-austin-installation-2009`

范围证据需求：需要实际获批产品、损伤面积、实测用量及制造商组成；不假设正常涂装消耗。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的预制公园长椅机械表面锚固安装服务 (`accepted_installation`)

一张完整的实际长椅已调平且无损坏，并在验收合格、相容的既有钢筋混凝土上完成所有必需连接的机械固定。全部纠正已闭环，签署的现场交接记录标识长椅和锚栓。

- 选定流：验收合格的预制公园长椅机械表面锚固安装服务
- 流属性/单位：Number of items / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`lf-austin-installation-2009`

范围证据需求：恰好一个验收合格安装定义参考量，不是产率范围；通过作业验收／拒收历史量化验收不确定性。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| retain_corrections | bench_install | 保留全部安装尝试、钻孔／清理、失败锚栓和轻微修补对验收作业的负担；验收计数排除未解决拒收。内部纠正是 bench_install 内循环，不是第二份成功产品。分别追踪可用供应方退回、库存和丢弃；不假定回收或避免生产信用。 |  |
| shared_attribution | 共享资源 | 根据实际因果服务时间／负载证据，在完整资产使用方账及声明期间内分配计量或供应方记录负担；枚举本作业及其他使用节点／作业／期间。披露所选驱动及未分配余额。无驱动证据时保留分配不完整，不默认均分或虚构寿命。 |  |
| coverage_overlap | 材料与服务边界 | 每项实物事件和上游负担只有一个责任方。毛收货加明确向外退回，不得再从采购扣同一退回。期初／期末库存核对独立于跨边界退回。区分供应方已含电力／燃料／空气／设备／运输与单独计量交换，不能二者叠加。 |  |
| no_coproduct_default | 向外可用产品 | 可用滑垫／包装／五金及供应方退回长椅属于有凭据的保管责任出口，不自动成为经济联产品。保留作业负担而不赋替代信用；实际多输出分配须另有证据复核。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | bench_install | 长椅五金垫片包装收货及使用 | 收货与材料账 | job_id; model; serial_lot; sku; actual_configuration; supply_gate; received_count; measured_mass; unit_mass_basis; opening_stock; closing_stock; installed; damaged; return_id; upstream_coverage | 记录跨入作业边界的五金／垫片毛收货量／领用量，再分别核对安装、损失、实际向外退回及期末库存，不从投入净扣同一退回。采用校准称重或供应方 SKU 质量。已被上游包含的包装仅保留保管／去向账，不建第二次供应交换，并保留实际质量。记录从长椅拆下的滑垫而不虚构新增滑垫投入。以完整验收安装数归一化可归属作业总量，核对失败尝试。 | item; kg | 每次收货／使用／库存变化 | 包括纠正在内的整个首次安装作业 | 实际作业及供应方交接 | per reference flow | 可追溯发票、秤核查、SKU 质量、库存／转移记录及配置一致性 |
| cp_resources | bench_install | 电力压缩空气共享资产及服务 | 电表与服务账 | job_id; asset_id; provider; meter_start; meter_end; native_unit; operating_hours; idle_hours; air_delivery; pressure; service_period; consumer_id; consumer_driver; total_driver; included_energy; maintenance_coverage | 计量直接使用，记录压缩机清孔和实际吊装／工具时段。在各共享账内枚举全部使用方和期间，说明因果驱动并与总负担核对。保留实际供气和供应方单位。根据服务覆盖只计电力一次；作业可归属总量除以验收数。 | kWh; h; 实际供应方单位 | 每项任务／服务时段及共享期间结账 | 完整作业及完整相关共享服务期间 | 实际现场／作业及共享资产的全部外部使用方 | per reference flow | 电表校准、压缩机／供应方记录、任务日志、全部使用方账及重叠／驱动证据 |
| cp_logistics | bench_install | 材料退回与废物货运 | 路线与货物记录 | job_id; leg_id; carrier; vehicle; origin; destination; loaded_distance; actual_cargo_mass; load_share; empty_leg; transfer_id; upstream_transport_coverage | 采用运输／转移凭证及有证据的路线／货物质量；按实际物流证据分配共享／空载路段，声明所供数据集重叠并核对向外接收方。可归属服务除以验收数。 | t*km; kg; km | 每个实际路段 | 收货至交接及归属的退回／废物路段 | 为作业服务的实际路线 | per reference flow | 承运单据、路线证据、货物称重、载荷账及数据集边界对比 |
| cp_repairs | bench_install | 条件性轻微表面修补 | 损伤修复日志 | job_id; damage_id; area; approved_product; formulation; used_mass; solids; solvent_species; curing; method; waste_id; approval; closure | 记录实际机械损伤、获批轻微修复和实测产品消耗。关联释放／残余证据及签署闭环；不把修补变成正常涂装路线。作业总量除以验收数；重大工作触发边界复核。 | kg; 实际修补单位 | 每次实际修复或证实未使用 | 验收前完整作业 | 实际受损长椅及修补供应方 | per reference flow | 获批产品资料／组成、实测用量、照片及签署修复闭环 |
| cp_acceptance | bench_install | 验收参考输出 | 检查与交接 | job_id; bench_serial; model; length; material; finish; support; arms; anchor_sku; fixing_count; current_instructions; slab_evidence; level; fastener_check; defects; correction_closure; accepted_count; signoff_date | 钻孔前检查实际混凝土／锚栓相容性，全部纠正后检查成品安装长椅。逐项核对必需固定点、调平及支架／表面状态与当前说明、签署交接。仅计完整验收安装；分母排除未解决拒收。 | item | 每次验收及纠正闭环 | 首次安装至签署交接 | 实际安装长椅及宿主界面 | per reference flow | 设计／当前说明、混凝土记录、施工前后检查及客户签署验收 |
| cp_fates | bench_install | 长椅退回可用滑垫包装五金及丢弃 | 保管库存与废物账 | job_id; transfer_id; source_receipt; material; condition; count; measured_mass; fate; recipient; receipt_ack; opening_stock; closing_stock; reject_cause; treatment; hazard | 把实际向外转移与收货及状态配对。区分整张长椅退回、可用材料退回、保留库存及实际废物；bench_install 负责拒收／纠正出口。按材料称重并核对接收方／处理；同一退回不得扣两次。作业总量除以验收数。 | item; kg | 每次转移／拒收及库存结账 | 整个作业及有记录的关联向外去向 | 作业边界与实际接收方 | per reference flow | 接收方确认、秤、库存平衡、拒收照片及废物／处理接收凭据 |
| cp_releases | bench_install | 收集碎屑空气颗粒物及条件性修补释放 | 碎屑与排放记录 | job_id; bore_id; concrete_composition; particle_size; captured_mass; moisture_basis; uncollected_release; substance; compartment; measurement_method; capture_efficiency_evidence; repair_id; uncertainty; treatment_id | 计量收集碎屑，并按物质／粒径及空气接收环境单独表征未捕集释放；适用排放计算保留实际活动及方法不确定性。轻微修补关联产品组成和实际释放条件。按声明基准核对捕集／排放质量，避免把全部移除混凝土当作空气释放或把全部修补产品当溶剂；除以验收数。 | kg; 实际采样单位 | 每次钻孔／清理及实际修补 | 全部安装及纠正任务 | 实际长椅安装暴露／控制条件 | per reference flow | 采样／秤质量、方法适用性、材料／物种证据、处理接收及不确定性声明 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_job | 非参考清单 | q_ref = q_job / N; N = 声明可比作业批内完整验收安装数；保留全部可归属纠正负担并披露拒收作业处理。N 为零时不得归一化。 | q_job; accepted_count N; linked collection protocol | q_ref 每参考流 |  |
| stock_custody | 材料账 | 按一致材料／单位，核对期初库存加收货与安装／消耗、实际向外可用退回、丢弃及期末库存。退回是明确出口，不得又从毛收货扣除。 | cp_materials; cp_fates; transfer_id | 核对后的材料／保管责任账 |  |
| shared_ledger | 共享资源流 | 按完整已声明使用期间，有凭据的因果 job_driver / total_driver 分配实际共享负担；核对全部使用方份额及未分配余额。服务边界排除已单列的包含能源。 | cp_resources; consumer ledger; provider coverage | 可归属资源量与披露余额 |  |
| freight_activity | 货运 | 逐个有证据的有载路段，用货物吨数乘实际公里数，保留实际载荷／空载回程分配证据。不得虚构质量或距离。 | cp_logistics | 按实际路段的 t*km |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| actual_identity | 全部交换 | 最终数据集交换前核实实际型号／SKU／供应方／物质、状态、接收环境及属性／单位。条件性汇总卡仅在实际记录后展开；未解决身份仍是阻断项。 | 供应资料、供应方细节及具体身份／支持确认 |
| host_and_gate | 参考流 | 未知既有混凝土不验收；保留实际相容性及说明证据、全部必需固定点及缺陷闭环。历史尺寸是示例体系证据。 | cp_acceptance; `lf-austin-installation-2009` |
| complete_job | 全部数量 | 覆盖收货至最终纠正／验收、库存／保管责任、共享期间及向外废物；披露缺电表、释放表征及供应方覆盖。 | 全部关联协议和核对记录 |
| range_evidence | 全部流卡 | 此处未有证据支持通用清单区间。编写范围前获得各卡具体实际观察／方法不确定性；准确参考量是定义。未测排放或服务数量不得表为零。 | 关联协议、各卡范围证据需求及不确定性证据 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_gate | 作业 | 需要悬臂／环氧、未验收混凝土或新板／基础施工时不适用本路线；钻孔前必须具备当前实际长椅／锚栓说明和相容混凝土。 | `lf-austin-installation-2009` |
| handover_complete | accepted_installation | 须有完整调平无损安装长椅、全部指定机械固定点、纠正闭环及签署交接；拒收／退回长椅不是验收输出。 | `lf-austin-installation-2009` |
| inventory_complete | bench_install | 核对独立供应长椅／五金／垫片、保护包装、实际钻孔／清孔电力和压缩空气、实际资产／物流、可用滑垫／包装／库存、收集废物及已表征空气释放。仅触发时记录实际轻微修补。 | `lf-austin-installation-2009` |
| shared_and_fates | 分配 | 检查完整资产使用方／期间、可归属驱动证据及每项负担单一责任方。不得服务／能源重叠、退回重复扣减、虚构回收信用或把库存当退回交换。 |  |
| binding_and_uncertainty | 最终前景数据集 | 全部具体交换须核实身份／属性／单位；不得用笼统粉尘／VOC UUID 或借用服务支持。即使候选结构检查通过，未解决记录／范围／支持仍须明确披露为不完整。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 具有明确上游供应和已验收既有宿主界面的首次安装服务前景数据包 |
| downstream_use | secondary_dataset; background_dataset; 下游 process 与 lifecyclemodel 投影 |
| allowed_use | 相同合格交接状态下，所声明可比整装四脚公园长椅的首次机械表面锚固 |
| excluded_use | 家具制造、悬臂／环氧锚固、新基础／混凝土板、维护／使用／寿命终结、安全设计或未指定长椅体系之间的通用等价 |
| required_metadata | 全部参考限定信息；作业／场址／时间；实际说明及宿主／设计验收；供应方／服务边界；使用方账；库存／保管责任及纠正 |
| required_quality_disclosure | 未解决具体流／支持身份；缺失数量／范围；释放表征；实际共享分配／重叠；条件触发及验收覆盖 |
| update_trigger | 长椅／锚栓／宿主体系或说明变化；服务边界改变；材料／表面修补或重新表面处理变化；新增已核实身份或数量／范围证据 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-notes-2025 | official_guidance | 联合国 CPC 3.0 解释性说明，2025年6月30日，第290页：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 54400 街道家具安装范围；仅较窄类别的分类背景 |
| lf-austin-installation-2009 | handbook | Landscape Forms Austin 长椅说明 10/2009，第1及4页四脚独立式机械表面安装细节：https://files.landscapeforms.com/production/uploads/products/austin-bench/resources/LF_AustinBench_Installation_Guide.pdf?dm=1711139817 | 工厂整装；独立五金；保护搬运；滑垫／调平；标记／移开／钻孔／压缩空气清理；实际锚栓紧固；有条件历史体系路线 |
| lf-austin-product | handbook | Landscape Forms 当前 Austin 长椅产品页：https://www.landscapeforms.com/products/austin-bench | 当前四脚独立式／表面安装及扶手／靠背选项；不提供清单数量或项目专用工程设计 |
