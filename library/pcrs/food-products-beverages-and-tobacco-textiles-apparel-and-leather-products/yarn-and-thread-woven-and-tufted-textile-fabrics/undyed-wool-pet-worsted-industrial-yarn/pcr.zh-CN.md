---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.undyed-wool-pet-worsted-industrial-yarn
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未染色羊毛／PET 精梳混纺工业纱


## 1. 范围与适用性

本制造 PCR 适用于分别接收已制备毛条和 PET 条子，经精梳环锭纺路线制造的未染色、未上浆羊毛／聚对苯二甲酸乙二醇酯（PET）短纤单纱。羊毛占纤维质量低于 85%；须提供实际羊毛／PET 配方及归入所声明羊毛纱类别的依据。代表产品为后续织造用批量工业纱，卷绕于纸芯并装入瓦楞纸箱。分类名称不能证明所有混纺纱或所有工艺路线均已覆盖。

排除的路线／产品：粗梳及半精梳纺；转杯、自捻、包芯及长丝纱；股线／缆线；非 PET 混纺组分；零售纱；原毛接收、洗毛、炭化、制条及场内复精梳；染色、漂白、防缩处理、上浆、蒸纱／热定形及纱线湿整理。购入已制备纤维的加工属于上游。畜牧养殖、石化纤维生产、织造、服装、消费使用及寿命终结均不隐含纳入本前景边界。实际工厂存在排除工序时须明确扩展逐过程清单，并另行审查适用性。

既有方法 `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-synthetic-staple-fibres-containing-less-than-85-by-wei-6a02e796` 的总适用范围允许任意已声明非合成共纤维，包括羊毛，而非仅限于棉。若生产从已混合条子开始且满足其组成、工艺和成品状态要求，应复用该方法；不得仅因 CPC 编码或代表 UUID 不同而创建另一成品身份。本 PCR 专用于分别接收未混合毛条和 PET 条子、场内执行配比混合及针梳制备的声明路线，增加两种来料分别称量、干纤维配比控制、混合均匀性、道次追溯和阶段移交平衡规则。它不将旧方法未描述的厂内混合工序假称为旧方法覆盖内容。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.undyed-wool-pet-worsted-industrial-yarn |
| classification_refs | CPC 3.0: 26330; narrower |
| covered_products | 由分别购入的已制备毛条／条子生产、羊毛纤维质量占比低于 85% 的未染色羊毛／PET 精梳工业单纱 |
| excluded_products | 第 1 节所列其他组分与路线；羊毛达到 85%；缝纫线；零售纱 |
| representative_product | 未染色羊毛／PET 精梳混纺工业纱，羊毛占纤维质量低于 85% |
| production_route | 分别接收毛条／条子；配方控制混合；针梳／牵伸；搓捻粗纱；环锭纺；清纱／络筒；检验及批量包装 |
| market_state | 工厂交付关口声明的非零售工业卷装、未染色、未上浆单纱 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供后续纺织制造用羊毛／PET 精梳单纱 |
| How much | 1 千克验收纱净质量 |
| How well | 符合实际采购方的组成、支数、捻度、强力、条干、含湿及卷装规格；不设默认性能等级 |
| How long or cycle | 所声明交付关口的一个验收制造批次；不声称使用寿命 |
| reference_flow_link | `finished_yarn_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未染色羊毛／PET 精梳混纺工业纱，羊毛占纤维质量低于 85% |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 羊毛及 PET 纤维质量占比；分类依据；羊毛物种；原生／再生状态；毛条／条子加工及油剂状态；纤维长度及细度；单纱支数体系／数值；捻向／捻度；含湿／调湿基准；未染色／未上浆状态；采购方验收规格；纸芯及外箱皮重；工业卷装配置；纳入过程；地理范围；报告期 |

必需限定信息须逐项在数据包元数据、过程说明或参考流备注中声明。参考净质量按所声明基准包括实际纱线水分和残留纺纱油剂，排除支撑物及运输包装。纤维组成按仅包含纤维的干质量占比计算，排除残留油剂与包装；不得由卷装毛质量推断。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤称量验收纱净质量，扣除实测纸芯及纸箱皮重；每项质量核对使用声明的含湿基准。 |
| fibre_fraction | 纤维组成 | Mass fraction | kg/kg | 使用组成测试或可追溯纯纤维配方记录；羊毛比例低于 0.85，羊毛与 PET 比例在同一干纤维基准下合计为一。不规定固定混纺配方。 |
| energy_unit | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 保留公开能量属性与电表单位；若按 MJ 交换，记录 1 kWh = 3.6 MJ。不得将电力改写为 Mass。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂分别接收购入的未染色洗净精梳毛条和已制备未混合 PET 条子 |
| starting_condition_role | 前景混合过程的上游已制备产品输入 |
| product_classification_scope | CPC 26330 内限定的制造路线；不声称覆盖整个子类 |
| recursive_input_rule | 购入已混合条子、粗纱或纱不能替代本路线两种分开来料而仍声称完整覆盖；此类起始条件需改用适用的既有方法或另行声明阶段清单，来料上游只链接一次 |
| upstream_dataset_requirement | 分别匹配毛条／条子生产、纤维来源、PET 路线及再生状态、供电、润滑剂和包装数据集；披露每项缺口 |
| disclosure | 仅制造边界；不声称完整 cradle-to-gate。声明排除的农业、纤维制造、运输及整理；报告共享公用工程、中间库存、回收与废物 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| method_selection | 起始条件及过程分工 | 新稿要求分开购入毛条和 PET 条子并在场内混合／针梳。若从已混合条子起步且满足既有低合成纤维混纺纱方法，则复用该方法。制条供应商的上游应截止于各自未混合条子，不得包含已计入本前景的羊毛／PET 混合和针梳道次；保留加工地点、移交批次、实测输入量与边界图作为核对证据。 |  |
| boundary_required | 制造路线 | 纳入实际混合、针梳／牵伸、搓捻粗纱、环锭纺、清纱／络筒、检验和包装及其受控直接交换。道数、温度与产率来自工厂记录。 | `woolmark-spinning-2020`; `woolmark-worsted-spinning` |
| boundary_water | 干法路线及湿加工 | 洗毛／染色废水属于相应上游或扩展湿加工过程。场内加湿、水性油剂或湿清洁须单独列供应水与实际废水行，并记录边界扩展；水资源不得代替供应水或废水。 | `woolmark-spinning-2020` |
| boundary_emissions | 直接交换 | 每种实际化学品、燃料、制冷剂、废物及排放须计量并单独列行。供电排放留在上游；不能仅因发生纺纱便假设燃烧 CO2 或粉尘质量。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| top_blending_preparation | 毛条／PET 条子混合、针梳、牵伸与搓捻粗纱 | required | 声明路线的实际工序；可选交换仅在发生时纳入 | 前景制造 | 1 kg 最终验收参考纱净质量 |
| ring_spinning_winding | 环锭纺、清纱与络筒 | required | 声明路线的实际工序；可选交换仅在发生时纳入 | 前景制造 | 1 kg 最终验收参考纱净质量 |
| inspection_packing | 检验、放行与工业包装 | required | 声明路线的实际工序；可选交换仅在发生时纳入 | 前景制造 | 1 kg 最终验收参考纱净质量 |

### 过程：毛条／PET 条子混合、针梳、牵伸与搓捻粗纱 （`top_blending_preparation`）

#### 输入

##### 产品流

###### 毛条毛线类 （`wool_top_input`）

接收未染色、已洗净并精梳的毛条；供应商加工与含湿基准属于其上游数据集。正式流显示名称在此指待纺毛条，不指已纺纱。

- 选定流：毛条毛线类 `a19fde0b-23f4-4ab7-9832-317affa7ab44`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：逐批称量投入毛条净质量，扣除退料并调整库存变化；归属质量除以最终验收纱净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_materials`
- 来源：`woolmark-spinning-2020`

###### 聚对苯二甲酸乙二醇酯短纤维条子，未混合且已制备至精梳纺纱来料状态 （`pet_sliver_input`）

接收已明确规格的 PET 条子，而非未制备的散短纤或预混合棉条。由真实供应商证据记录聚合物、纤维长度、细度、油剂及原生／再生状态。

- 选定流：聚对苯二甲酸乙二醇酯短纤维条子，未混合且已制备至精梳纺纱来料状态
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：逐批称量投入 PET 条子净质量，按最终验收纱净质量归一化；采集实际混纺配方，不采用默认比例。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_materials`
- 来源：`woolmark-spinning-2020`

###### 交流电 （`prep_electricity`）

计量混合、针梳、牵伸和搓捻粗纱的电机、吸风及归属车间通风电耗。该身份为用户侧低于 1 kV 的交流电；背景供电数据集须匹配实际地理范围。


本选定 UUID 仅适用于实际 CN（中国）用户端低于 1 kV 的电网平均消费供电。其他地域、供电技术或电压须另核实身份及匹配供应方数据，不能沿用本选定 UUID。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：归属实测电量 kWh 除以最终验收纱净质量；不采用默认机器功率或运行时间。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_energy`
- 来源：`woolmark-spinning-2020`

###### 合成酯纺纱润滑剂，未稀释配制产品 （`ester_lubricant_input`）

仅在场址实际施加这一供应商明确的未稀释合成酯润滑剂时纳入。供应商已施加的油剂留在毛条／条子上游清单；其他配方或水乳液须另设原子身份及水行。

- 选定流：合成酯纺纱润滑剂，未稀释配制产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量配制产品净领用质量，按最终验收纱净质量归一化；仅在证实未使用时记录 not_applicable。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_materials`
- 来源：`woolmark-spinning-2020`

#### 输出

##### 产品流

###### 未染色羊毛／PET 搓捻粗纱 （`rub_roving_output`）

将混合牵伸后的搓捻粗纱追溯至细纱批次。它是内部中间体，不是额外销售参考产品。

- 选定流：未染色羊毛／PET 搓捻粗纱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量移交粗纱净质量，调整中间库存，按最终验收纱净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_materials`
- 来源：`woolmark-spinning-2020`

##### 废物流

###### 捕集的羊毛／PET 松散纤维废物 （`prep_captured_fibre_waste`）

采集本过程分离的羊毛／PET 松散飞花和落纤；声明组成及回收／处理去向。内部回用须单独核对，不计为外运废物。

- 选定流：捕集的羊毛／PET 松散纤维废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：逐批称量单独收集的废物净质量，按最终验收纱净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_materials`
- 来源：`woolmark-spinning-2020`

##### 基本流

###### 颗粒物 (PM10) （`prep_pm10_air`）

仅在捕集后确有 PM10 跨越环境边界排入空气且接收子介质未指定时纳入；必须有粒径区分的 PM10 监测。捕集废物与总粉尘是不同交换。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 PM10 浓度、对应排气体积和运行时间；换算排放质量 kg 后按最终验收纱净质量归一化。不得由损耗比例推定排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prep_pm10`
- 来源：`woolmark-spinning-2020`

### 过程：环锭纺、清纱与络筒 （`ring_spinning_winding`）

#### 输入

##### 产品流

###### 未染色羊毛／PET 搓捻粗纱 （`rub_roving_input`）

接收前道制备的同一组成粗纱；核对移交、储存和退料，不重复附加上游负荷。

- 选定流：未染色羊毛／PET 搓捻粗纱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将接收粗纱净质量与 rub_roving_output 核对，再按最终验收纱净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spin_materials`
- 来源：`woolmark-spinning-2020`

###### 交流电 （`spin_electricity`）

计量环锭纺、络筒、清纱、吸风和接头用压缩空气的归属制气电耗；内部压缩空气是内部服务，其电量只计一次。


本选定 UUID 仅适用于实际 CN（中国）用户端低于 1 kV 的电网平均消费供电。其他地域、供电技术或电压须另核实身份及匹配供应方数据，不能沿用本选定 UUID。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：归属实测电量 kWh 除以最终验收纱净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spin_energy`
- 来源：`woolmark-spinning-2020`

###### 圆纸筒 （`paper_core_input`）

该圆纸芯仅适用于声明的工业卷装配置。记录新纸芯净耗用；可复用筒管须有周转及实际更换证据。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量纸芯皮重并核对领用／退回数量；纸芯耗用 kg 按最终验收纱净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spin_materials`
- 来源：`woolmark-spinning-2020`

#### 输出

##### 产品流

###### 未染色羊毛／PET 单纱，已络筒且待最终放行 （`wound_yarn_output`）

移交卷装单纱至检验；保留组成、支数、捻度及含湿记录。该移交不重复计作销售。

- 选定流：未染色羊毛／PET 单纱，已络筒且待最终放行
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量移交纱净质量，排除纸芯；按最终验收纱净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spin_materials`
- 来源：`woolmark-spinning-2020`

##### 废物流

###### 羊毛／PET 清纱废纱 （`clearing_yarn_waste`）

将清纱切除和断头修剪废纱与松散飞花分别收集；保留实际纤维组成及去向。

- 选定流：羊毛／PET 清纱废纱
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量收集废纱质量，按最终验收纱净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spin_materials`
- 来源：`woolmark-spinning-2020`

###### 捕集的羊毛／PET 松散纤维废物 （`spin_captured_fibre_waste`）

单独记录细纱及络筒吸风捕集的松散纤维，区别于排放颗粒物和清纱废纱。

- 选定流：捕集的羊毛／PET 松散纤维废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量捕集纤维废物净质量，按最终验收纱净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spin_materials`
- 来源：`woolmark-spinning-2020`

##### 基本流

###### 颗粒物 (PM10) （`spin_pm10_air`）

仅纳入实测残余 PM10 向空气未指定子介质的排放。不得将排放设为必然，也不得把全部纺织飞花换算为 PM10。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测 PM10 浓度、对应排气体积和运行时间；计算每最终验收纱净质量的排放 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spin_pm10`
- 来源：`woolmark-spinning-2020`

### 过程：检验、放行与工业包装 （`inspection_packing`）

#### 输入

##### 产品流

###### 未染色羊毛／PET 单纱，已络筒且待最终放行 （`wound_yarn_input`）

接收对应络筒批次，进行质量放行与包装；核对拒收批次及库存变化。

- 选定流：未染色羊毛／PET 单纱，已络筒且待最终放行
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量接收纱净质量，排除纸芯，按最终验收纱净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`woolmark-spinning-2020`

###### 瓦楞纸箱 （`corrugated_box_input`）

按实际批量工业交付纳入一种瓦楞纸箱规格。实际使用的袋、捆扎带或标签须另列具体交换，不并入纸箱质量。


仅在供应方证据确认原件所列原生纤维 16.6%、再生纤维 83.4% 及匹配生产路线时采用本纸箱 UUID。这些比例是身份适用条件，不是默认包装配方，也不要求所有纱线产品使用此纸箱。其他组成或路线须另核实身份；保留实际组件质量和供应方规格，不将纸板原料替代成品纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量代表性纸箱并核对净领用数量；耗用 kg 按最终验收纱净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`woolmark-spinning-2020`

###### 交流电 （`pack_electricity`）

计量检验、搬运和包装电耗，包括归属照明及通风电耗；避免与纺纱电表重复。


本选定 UUID 仅适用于实际 CN（中国）用户端低于 1 kV 的电网平均消费供电。其他地域、供电技术或电压须另核实身份及匹配供应方数据，不能沿用本选定 UUID。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：归属实测电量 kWh 除以最终验收纱净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_energy`
- 来源：`woolmark-spinning-2020`

#### 输出

##### 产品流

###### 未染色羊毛／PET 精梳混纺工业纱，羊毛占纤维质量低于 85% （`finished_yarn_output`）

经真实质量验收后，以非零售工业卷装放行声明的未染色羊毛／PET 精梳单纱。纱净质量排除全部纸芯及外包装。

- 选定流：未染色羊毛／PET 精梳混纺工业纱，羊毛占纤维质量低于 85%
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_yarn`
- 来源：`woolmark-spinning-2020`

##### 废物流

###### 包装废弃物，纸板 （`discarded_box_output`）

仅纳入该交付关口丢弃的破损瓦楞纸箱；退回未用纸箱属于库存，不是废物。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量废弃瓦楞纸箱净质量，按最终验收纱净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_materials`
- 来源：`woolmark-spinning-2020`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | 共享电力与服务 | 优先采用过程细分与独立计量。共享电机、吸风或压缩机须记录实测物理需求或运行时间依据，并检验其代表性；不同支数或技术间不能默认仅按质量分配。 | `ghg-product-2011` |
| allocation_recovery | 内部退料及外运废物 | 内部回用只核对一次，不重复计原生纤维投入或给予避免负荷信用。分别称量外运纤维废物与清纱废纱并记录处理。出售回收流须先记录废物／共产品属性，方可决定分配。 | `ghg-product-2011` |
| allocation_coproduct | 实际共产品 | 若细分无法避免分配，须论证内在物理关系；只有物理关系不可用时，才可使用有记录的经济或其他关系。披露份额、时期、实际采用的价格及敏感性。不提供固定信用或价格。 | `ghg-product-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep_materials | top_blending_preparation | wool_top_input; pet_sliver_input; ester_lubricant_input; rub_roving_output; prep_captured_fibre_waste | 称重及批次记录 | 批次标识；材料 SKU；组成；制备／油剂状态；毛／皮／净质量；接收；领用；退料；库存变化；移交批次；废物去向；最终验收纱净质量 | 经校准的秤；匹配领用／退回、供应商及移交记录；逐一计量材料及废物 | kg | 每批或每班 | 完整代表性报告期；披露缺失批次及异常运行 | 声明制造场址及纳入过程 | 每 1 kg 参考流 | 校准、原始记录、分配及核对；条件行的未发生／监测证据 |
| cp_prep_energy | top_blending_preparation | prep_electricity | 电表记录 | 电表标识；起止读数；供电电压；负荷；共享负荷依据；最终验收纱净质量 | 经校准分表；共享服务记录物理需求分配 | kWh | 每批或每班 | 完整代表性报告期；披露缺失批次及异常运行 | 声明制造场址及纳入过程 | 每 1 kg 参考流 | 校准、原始记录、分配及核对；条件行的未发生／监测证据 |
| cp_prep_pm10 | top_blending_preparation | prep_pm10_air | 粒径区分排放记录 | 采样点；PM10 浓度；干排气体积；运行时间；仪器单位；空气子介质；最终验收纱净质量 | 采用经验证的 PM10 粒径选择采样，匹配气体体积及时间；保留未检出限、采样覆盖及未排放证据 | kg; mg/m3; m3; h | 代表性监测运行期 | 完整代表性报告期；披露缺失批次及异常运行 | 声明制造场址及纳入过程 | 每 1 kg 参考流 | 校准、原始记录、分配及核对；条件行的未发生／监测证据 |
| cp_spin_materials | ring_spinning_winding | rub_roving_input; paper_core_input; wound_yarn_output; clearing_yarn_waste; spin_captured_fibre_waste | 称重及批次记录 | 批次标识；材料 SKU；组成；制备／油剂状态；毛／皮／净质量；接收；领用；退料；库存变化；移交批次；废物去向；最终验收纱净质量 | 经校准的秤；匹配领用／退回、供应商及移交记录；逐一计量材料及废物 | kg | 每批或每班 | 完整代表性报告期；披露缺失批次及异常运行 | 声明制造场址及纳入过程 | 每 1 kg 参考流 | 校准、原始记录、分配及核对；条件行的未发生／监测证据 |
| cp_spin_energy | ring_spinning_winding | spin_electricity | 电表记录 | 电表标识；起止读数；供电电压；负荷；共享负荷依据；最终验收纱净质量 | 经校准分表；共享服务记录物理需求分配 | kWh | 每批或每班 | 完整代表性报告期；披露缺失批次及异常运行 | 声明制造场址及纳入过程 | 每 1 kg 参考流 | 校准、原始记录、分配及核对；条件行的未发生／监测证据 |
| cp_spin_pm10 | ring_spinning_winding | spin_pm10_air | 粒径区分排放记录 | 采样点；PM10 浓度；干排气体积；运行时间；仪器单位；空气子介质；最终验收纱净质量 | 采用经验证的 PM10 粒径选择采样，匹配气体体积及时间；保留未检出限、采样覆盖及未排放证据 | kg; mg/m3; m3; h | 代表性监测运行期 | 完整代表性报告期；披露缺失批次及异常运行 | 声明制造场址及纳入过程 | 每 1 kg 参考流 | 校准、原始记录、分配及核对；条件行的未发生／监测证据 |
| cp_pack_materials | inspection_packing | wound_yarn_input; corrugated_box_input; discarded_box_output | 称重及批次记录 | 批次标识；材料 SKU；组成；制备／油剂状态；毛／皮／净质量；接收；领用；退料；库存变化；移交批次；废物去向；最终验收纱净质量 | 经校准的秤；匹配领用／退回、供应商及移交记录；逐一计量材料及废物 | kg | 每批或每班 | 完整代表性报告期；披露缺失批次及异常运行 | 声明制造场址及纳入过程 | 每 1 kg 参考流 | 校准、原始记录、分配及核对；条件行的未发生／监测证据 |
| cp_pack_energy | inspection_packing | pack_electricity | 电表记录 | 电表标识；起止读数；供电电压；负荷；共享负荷依据；最终验收纱净质量 | 经校准分表；共享服务记录物理需求分配 | kWh | 每批或每班 | 完整代表性报告期；披露缺失批次及异常运行 | 声明制造场址及纳入过程 | 每 1 kg 参考流 | 校准、原始记录、分配及核对；条件行的未发生／监测证据 |
| cp_final_yarn | inspection_packing | finished_yarn_output | 验收批次及秤记录 | 批次；纱卷装毛质量；纸芯皮重；纸箱皮重；其他逐项称量包装皮重；验收纱净质量；含湿；干纤维组成；支数；捻度；验收结果 | 经校准的秤，结合实验室／供应商组成及采购方验收证据；保留批次含湿测量 | kg | 每个验收批次 | 报告期全部放行批次 | 同一工厂及声明卷装配置 | 验收纱净质量求和；finished_yarn_output 为每 1 kg 参考流的 1 千克 | 秤校准；皮重试验；含湿／质量测试；放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | 所有清单行 | 将报告期各归属交换除以同一关联批次、同一含湿基准下的最终验收纱净质量。保留两侧工序移交质量；中间输出不是额外功能单位。 | 交换记录；cp_final_yarn；分配记录 | 每 1 kg 参考流的交换 |  |
| net_yarn_mass | finished_yarn_output | 纱净质量等于卷装毛质量减去单独实测纸芯、纸箱及每项其他实际包装组件；不得假设皮重或含湿修正。 | cp_final_yarn | 验收纱净质量 kg |  |
| pm10_mass | prep_pm10_air; spin_pm10_air | 在相容干基参考条件下，排放 kg = PM10 mg/m3 乘以排气 m3 再除以 1000000；流量记录须按对应运行时间积分。归一化前保留粒径区分及检出限。 | cp_prep_pm10; cp_spin_pm10 | 实测 PM10 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_blend_control | 厂内混合与针梳 | 逐批保留两种来料干纤维质量依据、配方实称量、道数、混合均匀性试验及对应粗纱移交记录。不同纤维的含湿率或残留油剂须由真实测量／供应商证据分开核定，不能由湿毛重量推算羊毛比例；缺失时组成保持未核实。 | 供应商制备记录；含湿及油剂分析；配方称量；均匀性测试；道次追溯 |
| dq_composition | 毛条至纱链条 | 追溯分别投入的羊毛及 PET、供应商处理／油剂和验收批次组成；区别干纤维比例与含湿纱质量。 | 供应商凭证；配方；测试结果 |
| dq_mass | 全部材料移交 | 在同一含湿基准核对接收、退料、库存、移交、验收、拒收及废物数量；调查未解释差异，不设默认损耗容差。 | 批次平衡；秤及含湿记录 |
| dq_energy | 电力 | 绘制包含吸风／压缩空气及通风的计量边界；避免遗漏及重复，披露共享分配不确定性。 | 电表图；分配表 |
| dq_emission | PM10 及废物 | 区别捕集与释放；总粉尘测试不是 PM10 证据。缺少监测表示未知，不是零；记录未检出限及排放条件。 | 采样报告；废物移交证据 |
| dq_representative | 数据集 | 记录场址、时期、支数／配方组合、覆盖产量及缺失工序；保留路线记录，不移用其他工厂产率。 | 生产日历；覆盖及不确定性报告 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | 参考产品 | 要求实际羊毛／PET 配方、羊毛干纤维质量占比低于 85%、非零售单纱及未染色／未上浆精梳路线。独立核对分类依据；本 PCR 不代表整个 CPC 覆盖。 | `unsd-cpc-2025` |
| validate_basis | 全部行 | 要求 1 千克验收参考纱净质量、完整必需限定信息、关联采集协议及同一最终纱分母。核对中间移交质量，纱净质量排除包装。 |  |
| validate_boundary | 纳入过程 | 未经扩展的数据集若包含复精梳、湿整理、蒸纱或不同混纺组分，则不适用。逐一记录实际材料及公用工程；遗漏与未计量直接排放保留为覆盖不完整。 | `woolmark-spinning-2020` |
| validate_uuid | 流身份 | 逐个核验所选 UUID 的公开身份、参考属性、材料态、路线及基本流接收介质；未解决行须保持具体并登记。候选身份缺口不代表发布或方法学批准。 |  |
| validate_pm10 | PM10 行 | 仅在粒径区分证据及所选空气子介质适用时使用 PM10 kg；不得用总粉尘、捕集纤维废物或无相应条件的城市／高烟囱流替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明羊毛／PET 精梳工业纱的制造前景清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 经适用性、身份及数据审查后，作为匹配的纺织制造中间输入 |
| excluded_use | 整个 CPC 覆盖；未链接上下游过程的完整 cradle-to-gate 或消费足迹；其他组分或排除路线；比较性能或认证声明 |
| required_metadata | 全部参考限定信息；场址／时期；过程图；供应商及上游数据集身份；流属性单位；清单分母；分配；包装／皮重；废物去向 |
| required_quality_disclosure | 质量平衡；校准；产量覆盖；排除项；未计量排放；未解决 UUID；供给代理及敏感性；不确定性 |
| update_trigger | 配方、毛条／条子处理、纺纱或络筒路线、供给组合、包装、监测证据或实质数据质量变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | United Nations Statistics Division. CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed page 119, 26320–26340. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于含毛量及非零售分类语境；该页不规定制造路线 |
| woolmark-spinning-2020 | handbook | The Woolmark Company. Worsted and woollen spinning — Facilitator Guide, 2020. PDF/printed pages 50, 66–67, 72, 74, 83 and 247. https://www.woolmarklearningcentre.com/globalassets/woolmark-learning-centre/10-resources/facilitator-guides/gd2891-worsted-woollen-spinning-facilitator-guide_2020_final.pdf | 羊毛／聚酯精梳混纺、制备、含湿、粗纱、纺纱及纺后工序区分。仅教育工艺语境；不采用历史试验数值、配方、性能或商标要求 |
| ghg-product-2011 | official_guidance | WRI/WBCSD. Product Life Cycle Accounting and Reporting Standard, 2011, printed page 63, PDF page 65, Tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 历史通用分配层级，为透明选择提供依据；无纺织专用数值比例或完整 LCA 批准 |
| woolmark-worsted-spinning | handbook | The Woolmark Company. Worsted Spinning, undated current publisher page, sections Drawing and Worsted Spinning. https://www.woolmark.com/industry/product-development/wool-processing/worsted-spinning/ | 当前针梳、牵伸／搓捻粗纱、单纱、清纱／络筒路线语境；不采用性能或生产参数 |
