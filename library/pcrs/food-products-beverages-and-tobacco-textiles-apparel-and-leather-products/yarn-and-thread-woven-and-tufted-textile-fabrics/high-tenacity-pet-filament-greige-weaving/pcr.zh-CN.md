---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.high-tenacity-pet-filament-greige-weaving
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 高强 PET 长丝机织坯布制造

## 1. 范围与适用性

本方法覆盖采购已牵伸高强 PET 连续长丝经纬纱，经整经、穿综穿筘、机械引纬织造、检验和卷装形成的本色、未上浆、未涂覆机织坯布。纺织纤维组成为全 PET，供后续工业用布加工。此为 CPC 26710 的收窄代表路线，不代表整个分类已经覆盖 [unsd-cpc-2025]。制造商原件证明高强聚酯坯布和未处理机织物的商业存在，但不证明任何厂家均采用本路线或没有上浆 [ulong-greige]; [mehler-company-2025]。

未覆盖尼龙及其他聚酰胺、粘胶长丝、其他聚合物及共混、短纤纱、扁条织物、交角铺层粘结网格、轮胎帘子布、狭幅带、针织物和非织造布。也不覆盖纱线聚合/熔纺/牵伸、现场加捻或变形、上浆及退浆、洗涤、染色、印花、热定形、压光、浸渍、涂层或层压。本方法选定的是不进行这些工序的实际路线；如实际存在，须在使用前另行审查和扩展，不能漏项套用。制造商对干整理、湿整理和涂层明确区分，因此坯布不能自动当作成品整理布 [mehler-company-2025]。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.high-tenacity-pet-filament-greige-weaving |
| classification_refs | CPC 3.0: 26710 (narrower; 仅分类上下文) |
| covered_products | 全 PET 高强长丝、本色未上浆未涂覆的全幅机织坯布 |
| excluded_products | 其他材料、非高强纱、短纤、扁条、粘结网格、帘子布、狭幅带、针织及非织造物；任何现场染整、上浆、加捻或热定形路线 |
| representative_product | 高强 PET 长丝机织坯布 |
| production_route | 已准备高强长丝筒子 → 整经与穿综穿筘 → 机械织造 → 检验、卷装与交付 |
| market_state | 织厂厂门合格坯布卷；在染整和工业制品加工之前 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供组成和结构明确、用于下游加工的高强长丝机织坯布 |
| How much | 1 kg 合格净坯布 |
| How well | 声明经纬纱高强等级和检测依据、线密度、组织、经纬密度、有效幅宽、实测克重、含水与油剂状态、拉伸及外观验收要求；阈值来自实际订单和测试 |
| How long or cycle | 一个已验收生产批次；不声称使用寿命 |
| reference_flow_link | `finished_greige` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 高强 PET 长丝机织坯布 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | PET 及来源；经纬高强证书与检测方法；来料牵伸、捻度、油剂、含水和筒子态；全 PET 组成；未上浆证明；机械织造方式；组织、密度、有效幅宽、克重和验收标准；净质量调湿和去皮；卷芯和包覆；工厂、地域、电压、时段；归属公用工程、排放监测和边界排除 |

所有必需限定信息须进入具体数据集。本参考为质量声明单位，不表示不同强度、组织、用途或使用寿命之间的功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_output 使用校准秤测同批合格净布质量，扣芯和包覆，不含废品，记录调湿状态。 |
| `area_conversion` | 面积或长度统计 | 质量和面积 | kg; m2 | 只用同批有效幅宽、净长度和实测克重换算；记录 A = L × W，净质量 = A × G / 1000（L 为 m，W 为 m，G 为 g/m2）。不得使用目录名义克重作产量。 |
| `energy_units` | 电力 | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 保留公开流能量参考属性和电表 kWh；1 kWh = 3.6 MJ，不按质量计电力。 |
| `material_balance` | 纱、布和废物 | 质量 | kg | 统一含水和油剂基准，核对领用、退回、库存、经轴余纱、净布、废物和实测释放；油剂和含水变化不是 PET 损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购已牵伸、已完成所需捻度和油剂处理的高强 PET 长丝筒子，已到织厂接收点 |
| starting_condition_role | 外部纱线投入，非纤维生产或农业生产 |
| product_classification_scope | CPC 26710 中收窄的高强 PET 机织坯布；不覆盖其他路线 |
| recursive_input_rule | 内部经轴和在制布为批次转移，不重复记外购；如输入同类外购坯布，只记一次并链接上游，但必须审查不同的再加工路线 |
| upstream_dataset_requirement | 分别链接符合材料牌号和来料态的高强长丝、实际电力及包装供给；纱上游油剂不重复计为现场施加 |
| disclosure | 织造前景为 gate-to-gate；声明地域、时段、来料态、实际工序、公用工程、排放数据及未链接上游 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | 制造 | 纳入接收和整经、穿综穿筘、织造、检验、卷装、包装及归属辅机。机械引纬不代表所有机织方式；喷气或喷水工艺未经本路线覆盖。 | `mehler-engineered-fabrics` |
| `boundary_finish` | 边界终点 | 止于未整理坯布，不把制造商可选整理列为必需工序；实际整理不许隐去，须先扩展方法。 | `mehler-company-2025` |
| `boundary_services` | 公用工程与释放 | 纳入可归属环境控制与抽吸用电及实际机械油补充和排出。若有加湿用水、清洗、冷媒泄漏、包装废物或其他释放，按具体物质另设原子交换和采集协议；饮用水资源、购买工艺水、废水和环境排放分别处理。未测量状态明确为缺口，不能默认为零。 |  |
| `boundary_exclusions` | 上下游 | 资源开采、聚合、长丝制造和来料运输不在本前景；农业原料因全 PET 路线不纳入；下游染整、工业制品组装、运输、消费和报废不纳入。声明设备和基础设施排除及其影响；未链接所有上游前不得声称完整 cradle-to-gate。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `prepare` | 长丝接收、整经与织机准备 | required | 所声明机械机织坯布路线 | 同一连接前景阶段 | 每 1 kg 参考流 |
| `weave` | 机械织造及归属公用工程 | required | 所声明机械机织坯布路线 | 同一连接前景阶段 | 每 1 kg 参考流 |
| `release` | 检验、卷装与包装交付 | required | 所声明机械机织坯布路线 | 同一连接前景阶段 | 每 1 kg 参考流 |

必须保留各子工序的批次与计量记录。经轴、织机在制布和检验前布为内部转移，由批号及质量衔接，不再增添一次外部投入。条件行仅在真实发生时纳入；不发生须证据支持，缺测须披露。

### 过程：长丝接收、整经与织机准备（`prepare`）

接收筒子、核验高强证书与来料状态、整经和穿综穿筘；记经轴净纱、残余和内部转移。不在此生产长丝或强制加捻上浆。

#### 输入

##### 产品流

###### 高强 PET 长丝经纱（`warp_pet_yarn`）

采购已经牵伸的高强连续 PET 长丝筒子经纱，证明组成、强度、线密度、捻度、油剂和含水状态。整经不含聚合、熔纺和牵伸。本未上浆路线须有无需上浆即可织造的实证。

- 选定流：高强 PET 长丝经纱
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_material 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`mehler-engineered-fabrics`

###### 交流电（`prepare_electricity`）

纳入可归属的电机、抽吸、照明、空压机供气和环境控制用电，避免重复计算。此身份仅适用于实际中国用户端小于 1 kV 的电网平均供电；其他地域、电压或供电方式须另行核验身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 / kWh
- 数量规则：依据 cp_energy 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废弃聚对苯二甲酸乙二醇酯（`prepare_pet_waste`）

仅在确有外送废弃物时记录：本阶段分选的 PET 纱头、布边或不合格布须说明具体形态、残留油剂和去向。内部回用为转移，不是外送废物。此身份不用于混合聚合物、含油废物或处理产物。

- 选定流：废弃聚对苯二甲酸乙二醇酯 `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_waste 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：机械织造及归属公用工程（`weave`）

采用已声明的机械引纬设备形成经纬交织，记录运行、停机、断头、布边和抽吸。不得以粘结交角铺层替代交织，或默认喷气/喷水。

#### 输入

##### 产品流

###### 高强 PET 长丝纬纱（`weft_pet_yarn`）

将采购的已准备纬纱筒子投入织机。纬纱牌号与经纱分别声明；纺织纤维组成须全部为 PET，不含农业共混纤维。

- 选定流：高强 PET 长丝纬纱
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_material 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 交流电（`weave_electricity`）

纳入可归属的电机、抽吸、照明、空压机供气和环境控制用电，避免重复计算。此身份仅适用于实际中国用户端小于 1 kV 的电网平均供电；其他地域、电压或供电方式须另行核验身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 / kWh
- 数量规则：依据 cp_energy 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 矿物润滑油（`loom_oil`）

条件项：仅记录织机或归属空压机实测补加的矿物油；区分纱线油剂与机械润滑油。闭路循环油不反复计为耗用，须纳入库存变化。合成润滑油须另设原子行。

- 选定流：矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_material 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废弃聚对苯二甲酸乙二醇酯（`weave_pet_waste`）

仅在确有外送废弃物时记录：本阶段分选的 PET 纱头、布边或不合格布须说明具体形态、残留油剂和去向。内部回用为转移，不是外送废物。此身份不用于混合聚合物、含油废物或处理产物。

- 选定流：废弃聚对苯二甲酸乙二醇酯 `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_waste 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 废矿物润滑油（`spent_loom_oil`）

条件项：称量实际排出并跨越厂界的废矿物润滑油，声明污染物和去向；不得在本行合并含油抹布、废水或 PET 布边。

- 选定流：废矿物润滑油
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_waste 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 颗粒物，粒径未特指（`pet_particles_air`）

仅在织造、抽吸或已证实的无组织源有实测颗粒物排入空气时纳入。公开身份为空气、子介质及粒径未指定，只能用于该测量范围。保留 PET 来源，区分大气排放与过滤收集物；已知粒径或子介质时须核验更具体流；缺少监测不等于零。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_air 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：

### 过程：检验、卷装与包装交付（`release`）

按实际订单检验外观、尺寸、克重与拉伸性能，分离废品，称合格净布，卷装和包装；不以标称目录值替代验收实测，不包含后续染整。

#### 输入

##### 产品流

###### 交流电（`release_electricity`）

纳入可归属的电机、抽吸、照明、空压机供气和环境控制用电，避免重复计算。此身份仅适用于实际中国用户端小于 1 kV 的电网平均供电；其他地域、电压或供电方式须另行核验身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 / kWh
- 数量规则：依据 cp_energy 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 圆纸筒（`paper_core`）

仅在纸芯卷装交付时纳入。依据实际追踪记录纸芯净购入质量和复用次数；不得替代塑料芯，也不把可复用经轴作为一次性包装。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_pack 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：

###### 聚乙烯薄膜（`pe_wrap`）

仅在实际采用单一聚乙烯薄膜包覆时纳入。声明厚度、组成、再生比例和净领用质量；不得选用农膜、多层复合膜或挤出服务身份。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_pack 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 高强 PET 长丝机织坯布（`finished_greige`）

合格全幅机织坯布卷，处于下游处理之前。产品质量扣除纸芯、包覆、不合格段和可移除包装；记录经纬纱高强证书及实际组织、幅宽、克重和验收试验。

- 选定流：高强 PET 长丝机织坯布
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：

##### 废物流

###### 废弃聚对苯二甲酸乙二醇酯（`release_pet_waste`）

仅在确有外送废弃物时记录：本阶段分选的 PET 纱头、布边或不合格布须说明具体形态、残留油剂和去向。内部回用为转移，不是外送废物。此身份不用于混合聚合物、含油废物或处理产物。

- 选定流：废弃聚对苯二甲酸乙二醇酯 `04d3fab8-c5d0-41c5-87b6-449116c1dbab`
- 流属性/单位：质量 / kg
- 数量规则：依据 cp_waste 的本批实际记录取得净交换量，除以 cp_output 同批合格净坯布千克数；保留计量单位及条件适用性。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | 批次记录 | 优先用分表和专属领用将负荷直接归到实际批次，保留工厂台账；不分配为另一个内部经轴或布中间体。 |  |
| `allocation_shared` | 共有设备 | 用工厂验证的实测功率乘运行时间分配电机负荷；共有抽吸和空压机用实测服务量或经验证运行负荷分配，计入停机。只有证明质量与需求成比例才可质量分配；保留驱动、分母和敏感性，不给默认系数。 |  |
| `allocation_waste` | 退回、废布及次级品 | 内部退回与库存按质量守恒核对；外送废物不给自动回收替代收益。可销售次级布须说明价格与数量及是否为副产品，先物理分离可归属负荷；不能物理分离时以实际物理关系或实测收入选择并披露分配、敏感性和边界。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | release | 合格净布 | 称重和质量放行 | 批号；毛重；芯与包覆去皮；调湿；合格长度；幅宽；克重；检验 | 用校准秤测合格净布 kg，去皮，剔除废段；面积统计只用 area_conversion 实测换算 | kg | 每批与每卷 | 实际报告时段所有批次 | 所声明织厂与产品路线 | 每 1 kg 参考流 | 秤校准；检验与调湿记录 |
| `cp_material` | prepare; weave | 经纬纱及机械油 | 称重、领退和库存 | 牌号；组成；高强证书；质量；油剂；水分；领用退回；库存；经轴余纱；油补加 | 校准称重与采购、批次、库存联核，区分经纬纱与机械油 | kg | 每批与油补加事件 | 同批及跨期库存 | 整经和织造及归属辅机 | 每 1 kg 参考流 | 供应证明；秤校准；库存核对 |
| `cp_energy` | prepare; weave; release | 分阶段用电 | 分表和运行日志 | 起止 kWh；设备；运行停机；抽吸和环境控制归属；地域；电压；分配驱动 | 匹配批次和电表时段，核对各阶段及辅机与全厂表，避免重复 | kWh | 每计量间隔 | 同批全部运行与停机 | 所声明工厂与设备 | 每 1 kg 参考流 | 表计校准；电费与分配表 |
| `cp_waste` | prepare; weave; release | PET废物和废油 | 分选称重与转移 | 批号；物质；形态；去皮质量；污染；内部回用；去向 | 分别称每项废物并核对出厂单与内部回用；油与纱布分开 | kg | 每次收集与外送 | 同报告期 | 本前景及厂界 | 每 1 kg 参考流 | 转移凭证；秤校准；不发生证据 |
| `cp_air` | weave | 空气颗粒物 | 排气和无组织监测 | 源点；浓度；流量；时间；粒径；介质；滤除；检出限 | 对实际释放点采样，按同期浓度、气量和时长积分取得 kg；声明粒径和介质，滤除物不是排放；未监测不可零填 | kg | 实际监测及批次关联 | 声明代表性与缺测时段 | 实际织造和抽吸排口 | 每 1 kg 参考流 | 监测报告；检出限；捕集和代表性 |
| `cp_pack` | release | 纸芯与聚乙烯薄膜 | 包装称重与领用 | 组件；组成；净领退；复用；批次和去皮 | 分别测每个组件净质量，核对采购和复用，仅分配实际消耗 | kg | 每批包装 | 同报告期 | 本产品卷装 | 每 1 kg 参考流 | 物料规格；称重；复用台账 |


### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch` | 所有清单行 | 各非参考行的实测净交换量除以 cp_output 同批合格净布 kg；成品行固定为 1 kg。先执行现场可核实的归属分配。 | cp_output; cp_material; cp_energy; cp_waste; cp_air; cp_pack | 每 1 kg 参考流交换 |  |
| `convert_area_records` | finished_greige | 按 area_conversion 的 L、W、G 实测值算面积与质量，核对称重；未核验的名义参数不能使用。 | cp_output; area_conversion | 合格净布 kg |  |
| `reconcile_pet` | warp_pet_yarn; weft_pet_yarn; prepare_pet_waste; weave_pet_waste; release_pet_waste | 在同含水油剂基准下核对纱净领用与合格布、PET废物、实际排放和在制库存变化；记录差额及测量不确定性，不凭差额编造排放。 | cp_material; cp_output; cp_waste; cp_air | 质量闭合及差额 |  |


### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_identity` | 纱及参考产品 | 经纬纱均须有高强等级和 PET 组成证据，实证未上浆、未染整来料与终点；制造商范例不是本厂认证。 | 供应证书；订单；工艺和验收 |
| `quality_coverage` | 全部记录 | 声明实际时段、产量、换批和停机、所有前景阶段及公用工程覆盖；不得将一次测试当行业范围。 | 批次、表计与生产日志 |
| `quality_uncertainty` | 计量与排放 | 校准、采样、检出限及真实不确定性须记录；缺测、不发生和适用范围不同，不能混同。 | 校准和监测报告 |
| `quality_sources` | 公开资料 | 官方分类只支持分类边界，厂家资料只支持产品与工序存在；不提供默认配方、能耗、损耗、寿命或环境性能。 | `unsd-cpc-2025`; `ulong-greige`; `mehler-company-2025`; `mehler-engineered-fabrics` |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_applicability` | 产品与路线 | 核对全 PET 高强经纬纱及未上浆、机械织造、未整理坯布终点；含未覆盖工序则此方法不适用，分类码不能替代验证。 | `unsd-cpc-2025`; `mehler-company-2025` |
| `validate_measurement` | 参考与清单 | 参考成品行须为 1 kg 合格净布且匹配参考名称；所有行链接协议、匹配批次 kg 分母；面积需实测换算，电力保留能量属性。 |  |
| `validate_completeness` | 数据集 | 逐工序核对投入、输出、内部转移、废物、公用工程和条件项，记录真实缺口；缺监测或边界不清为不确定，非完整通过。 |  |
| `validate_identity` | 每个交换 | 一行一个物质和交换，核对公开流材料、路线、地域、介质及参考属性；UUID缺口明确，不强配。空参考身份仅作为候选证据缺口，不代表方法批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经核对路线的厂门坯布制造前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在组成、强度、组织和前景边界匹配时链接至后续整理或工业织物模型；先补充并核验上游 |
| excluded_use | 全 CPC 覆盖；粘结网格、其他聚合物、喷气/喷水或染整路线；完整生命周期、寿命或功能等价的无据声明 |
| required_metadata | 所有参考限定；批次与阶段；实测净质量、面积换算、表计及分配；高强纱牌号与上游；纸芯包覆；公用工程及释放 |
| required_quality_disclosure | gate-to-gate与未链接上游；测量及采样覆盖、不确定性、条件不发生依据、缺测与未解决身份；设备和基础设施排除 |
| update_trigger | 材料、纱牌号、来料态、上浆或整理、引纬方式、组织、克重、含水、供电、公用工程、包装或分配变化 |

## 11. 数据来源

| 来源编号 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, PDF及印刷第123页; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 26710 多路线分类边界，非工艺或环保因子 |
| `ulong-greige` | handbook | U-LONG, Industrial Polyester 500D High Tenacity Greige Fabric TA5136A; https://www.u-long.com/en/product/TA5136A.html | Specification和产品说明证明高强聚酯坯布存在；名义规格不作工厂转换或质量阈值 |
| `mehler-company-2025` | handbook | MEHLER Company & Products, May 2025 brochure, PDF第2页（无印刷页码），Engineered Fabrics栏; https://mehler-ep.com/wp-content/uploads/2025/07/MEHLER_Image_brochure_202505.pdf | 未处理织物及干/湿整理与涂层的区分，不规定本站必需配方 |
| `mehler-engineered-fabrics` | handbook | MEHLER Engineered Fabrics; https://mehler-ep.com/products/engineered-fabrics/ | 产品与多阶段工序说明，整经、织造、检验；列举选项不代表每项必需 |


网页按 2026-10-06 查询快照使用；制造商商业说明不能替代独立科学审查或工厂实测，也不证明健康、法规符合性或寿命。所有配方、设置、能耗、损耗、产量和分配驱动由真实工厂协议采集，无默认数值。
