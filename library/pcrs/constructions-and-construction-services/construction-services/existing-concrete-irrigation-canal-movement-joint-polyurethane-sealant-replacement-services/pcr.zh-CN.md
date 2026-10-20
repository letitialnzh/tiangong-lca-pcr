---
pcr_id: pcr.construction-services.existing-concrete-irrigation-canal-movement-joint-polyurethane-sealant-replacement-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有混凝土灌溉渠道变形缝聚氨酯密封胶更换服务

## 1. 范围与适用性

本PCR适用于保留的混凝土灌溉渠道变形缝中失效弹性密封胶的有界更换。实际路线采用获准且相容的单组分湿气固化聚氨酯体系及规定底涂、背衬；拆除、表面制备、实际作业引起的局部轻微修补、施胶、保护、完整所需固化和验收均归该服务。[sika-civil-water-joints; sika-pro3-purform-2024]

不包括新渠道成形或衬砌、大规模边缘重建、埋置止水带更换、机械锁固预制密封条、双组分或促进剂体系、供水渡槽、管道、通航运河、大坝或堤防，以及后续输水。需核实渠道的灌溉用途；CPC54234范围宽于本维修服务。[un-cpc3-2025]

引用的新西兰产品表用于说明路线，不构成所有渠道或区域产品的适用批准。实际水化学、浸水和水头、位移、基面及旧残留物相容性、区域说明和通水前完整固化均需项目或制造商批准。表干或实验室每日毫米固化速率不能单独作为接缝放行依据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-concrete-irrigation-canal-movement-joint-polyurethane-sealant-replacement-services |
| classification_refs | CPC 3.0 54234; narrower; 灌溉及防洪水利工程一般施工服务 |
| covered_products | 保留混凝土灌溉渠道中施用式单组分聚氨酯变形缝密封胶更换的验收服务 |
| excluded_products | 新渠道或衬砌；供水或通航结构；大规模边缘修补；埋置止水带；预制密封条；双组分或促进剂路线 |
| representative_product | 一个完整有界灌溉渠道变形缝重密封并按声明暴露条件验收 |
| production_route | 失效胶拆除并取得干燥坚实表面资格 → 背衬、底涂及单组分施胶 → 保护至完整所需固化及业主验收 |
| market_state | 业主交接时已安装、已固化、已粘结的接缝重密封服务；既有渠道保留在位 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采用获准单组分聚氨酯体系，对既有混凝土灌溉渠道变形缝进行验收合格重密封 |
| How much | 1 m验收合格接缝中心线；实际完整验收接缝长度 L，单位m |
| How well | 几何、位移、暴露条件、旧残留物及区域体系相容性获准；表面坚实清洁干燥；密封粘结及修整正确；完整所需固化和缺陷关闭；业主验收包括所需粘结或渗漏检查 |
| How long or cycle | 一个跨实际报告期间的拆除、制备、施胶、保护固化和验收事件，无通用使用寿命 |
| reference_flow_link | `accepted_joint_reseal` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 既有混凝土灌溉渠道验收合格的单组分聚氨酯接缝重密封服务 |
| 参考流属性 | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` |
| 参考单位组 | 长度单位组 `838aaa22-0117-11db-92e3-0800200c9a66` |
| 参考单位 | m |
| 必需限定信息 | 灌溉用途；业主和接缝ID；完整验收中心线L；位移、宽深、水头和水化学；保留构件状态；旧新材料相容性；获准区域密封胶、底涂及背衬；制备与完整固化标准；粘结或渗漏要求；恢复通水授权；提供者；报告期间 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_length | 参考产品 | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` | m | 通过 cp_accept 以校准卷尺或测量及接缝图计量唯一验收中心线L；双面、背衬、胶道和失败尝试均不能扩大L。仅完整通过门槛的接缝贡献长度。 |
| material_state | sealant_supplied; concrete_primer; repair_mortar; preparation_cleaner; application_test_water | 质量 | kg | 采用未扣向外退回、但已扣真实皮重的供应净内容物总量。包装数或名义体积不是质量；任何换算均需实际数量、具体产品密度及温度状态证据，采用 cp_prep_material 或 cp_apply_material。 |
| backing_length | polyethylene_backing; backing_returns | 长度 | m | 实际供应背衬长度与直径或截面独立于最终中心线记录；裁切、搭接或废料不改变验收L。 |
| transport_activity | prep_transport; apply_transport | 质量*距离 | kg*km | 各运输区段按不含车容器皮重的实际净货重kg乘载货距离km。kg*km为原生单位；仅按核实单位支持和真实区段量使用1 t*km = 1000 kg*km。 |
| energy_preservation | prep_electricity; apply_electricity | 能量 | kWh | 保留实测电力kWh，不从热值属性推定能量UUID。最终数据集须核实实际供应交换的属性单位支持。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 保留混凝土灌溉渠道的失效施用式密封缝；记录获准隔离、降排水、可达性及实际损伤污染 |
| starting_condition_role | 保留构件条件，不是新渠道采购；拆除制备纳入前景 |
| product_classification_scope | CPC54234下的灌溉水利修复；供水和通航用途排除 |
| recursive_input_rule | 购入同类别重密封服务替代其明确拥有的作业；保留输入边界，不同时计入承包商明细和该分包服务已含内容 |
| upstream_dataset_requirement | 实际密封胶、底涂、背衬、耗材、公用工程、物流、处理和资产分摊需地域、时间、技术及包含边界相容的上游数据集 |
| disclosure | 列明各提供者、构件条件、隔离责任、增量抽水或导流及保护、轻微修补、试验、失败、实际期间桥接和上游排除 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| retained_host | 所有清单行 | 排除历史整条渠道建设及未来输水；不论付款方均纳入当前增量拆除、轻微作业补救、抽水清理、施胶、固化保护和所需试验资源。无避免新建渠道信用。 | un-cpc3-2025; sika-pro3-purform-2024 |
| prepare_gate | prepare_joint | 输入为失效受污密封及保留混凝土；清除不相容残留和松散物、修补实际轻微边缘损伤、除尘；坚实清洁干燥表面和几何条件须记录放行后交 reseal_joint。底涂不能代替良好制备；大规模重建超出范围。 | sika-pro3-purform-2024 |
| application_gate | reseal_joint | 输入为合格表面；获准区域体系及项目粘结试验须覆盖旧残留、位移及水暴露、水头、化学条件。安装规定闭孔PE背衬、底涂及即用单组分胶，修整保护，通水前核实完整所需固化、所需检查及业主验收。无独立混合或表干输出。 | sika-pro3-purform-2024; sika-civil-water-joints |
| stock_custody | 所有清单行 | 外部收货总量与内部领料台账分开。向外产品退回为实际保管出口，不先扣输入；期末库存不是输出交换。期初上游负担及期末结转随实物批次跨期桥接；供应方已含包装或服务仅计一次。 |  |
| fluid_outlets | prep_fuel; apply_fuel; prep_spill; apply_spill; prep_combustion; apply_combustion; curing_release | 另列退回、废物或释放时采用燃料总量；按互斥未燃烧出口和库存推导燃烧活动。总泄漏仅供审计，分为回收、处理、库存外滞留和整未收容流体，不再次扣总量。整流体kg为事故或燃料物理台账；基本交换必须是已识别组分和介质，按实测物种或有证据组成、归趋比例计算。整流体与部分物种视图不可相加；库存外污染残留是互斥出口，已计期末库存时不得再次扣除。 |  |
| period_asset_boundary | prep_assets; apply_assets | 拆除、施胶、固化保护、试验、失败和交接逐期间索引。共享设备与临时工程列明所有作业、节点和期间；完整制造、维护、更换、报废覆盖需已观测或有依据的剩余寿命情景。直接燃料、备件及供应服务已含设备不能与分摊资产负担重复。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际获准的制备清洁配方 (`preparation_cleaner`)

过程／待建立交换的方向／类型：`prepare_joint` / `inputs` / `product`.

仅在获准清洁方法实际采用时纳入；每种实际配方、批次独立建交换，保留污染物及旧残留物相容性信息，不能将混合溶剂清洁剂当作通用单一物质。

数量范围证据需求：需实际获准配方、领料重量、向外退回及残留测量；无通用溶剂损失系数。

- 采集对象：实际获准的制备清洁配方
- 流属性/单位：质量 / kg
- 数量规则：来自可追溯外部收货或库存批次、未扣向外退回量的实际净内容物供料千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_material`
- 来源：`sika-pro3-purform-2024`

#### 采集要求：实际接缝表面制备磨料或消耗性工具材料 (`abrasive_consumable`)

过程／待建立交换的方向／类型：`prepare_joint` / `inputs` / `product`.

按实际刷磨、研磨或喷砂方法纳入不同消耗材料。可重复用工具本体归入资产分摊；磨耗、更换及碎屑分别追踪。每种材料只选一种真实边界：建模退回或未消耗废物出口时采用供料总量；只记消耗量时，不再计入同一交换中已扣除的未消耗出口，不能混用两种边界。

数量范围证据需求：需实际工法、磨料材料、磨耗或领料重量及工具数据集包含边界。

- 采集对象：实际接缝表面制备磨料或消耗性工具材料
- 流属性/单位：质量 / kg
- 数量规则：每种实际材料千克 / L；明确选择供料总量并列出口，或只计消耗量且不重复列已扣除出口。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_material`
- 来源：`sika-pro3-purform-2024`

#### 采集要求：实际制备设备供应燃料配方 (`prep_fuel`)

过程／待建立交换的方向／类型：`prepare_joint` / `inputs` / `product`.

仅在实际采用燃烧设备时纳入，各燃料单列。采用供应总量，并以库存及互斥的退回、废物、未收容流体出口推导燃烧活动；已由购入发电电力覆盖的发电机燃料不再计入。

数量范围证据需求：需实际燃料等级、批次、期初、收货、期末、去皮质量或实际体积、密度、温度及所有未燃烧出口，无通用燃烧量。

- 采集对象：实际制备设备供应燃料配方
- 流属性/单位：质量 / kg
- 数量规则：实际供应净内容物燃料总量千克 / L；另行从燃料台账推导燃烧千克。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_utilities`

#### 采集要求：实际制备货物运输服务 (`prep_transport`)

过程／待建立交换的方向／类型：`prepare_joint` / `inputs` / `product`.

实际耗材、设备和废物运输按路线、方式、提供者及载货区段拆分。同一区段可选直接车辆运行清单或采购运输服务，不能重复。披露空返处理和服务包含边界，不虚构货物。

数量范围证据需求：需实际地磅皮重、运单货物、路线千米、车辆或方式、返程及服务边界。

- 采集对象：实际制备货物运输服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：各归属载货区段的实际净货重千克 × 距离千米之和 / L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prep_logistics`

#### 采集要求：制备设备与临时工程的分摊服务 (`prep_assets`)

过程／待建立交换的方向／类型：`prepare_joint` / `inputs` / `product`.

按实际磨机、集尘器、泵、通道或隔离设施逐项展开条件性服务，不将异类设备加成一个产品。列明所有使用节点、作业和期间后，逐资产记录完整寿命服务份额。

数量范围证据需求：需实际资产清单、完整制造、维护、更换及报废覆盖，以及已观测或有证据的未来服务驱动量；缺少分母则不能完成数据集。

- 采集对象：制备设备与临时工程的分摊服务
- 流属性/单位：物品数量 / item
- 数量规则：逐实际资产：归属的实测服务驱动量 / 完整寿命服务驱动量，再除以 L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prep_assets`

#### 采集要求：实际制备清理围护与吸附耗材 (`prep_containment_consumable`)

过程／待建立交换的方向／类型：`prepare_joint` / `inputs` / `product`.

实际一次性围护衬材、清理擦拭物、吸附物按不同材料和污染去向展开。可复用围护归资产服务，磨料磨耗仍分开。建模真实退回或未消耗废物时使用供料总量；只计消耗量时不重复列同一交换已扣除的未消耗出口。

数量范围证据需求：需实际清理围护方法、不同材料批次、去皮供用料重量、退回、污染出口及提供者包含边界；无默认吸附剂比例。

- 采集对象：实际制备清理围护与吸附耗材
- 流属性/单位：质量 / kg
- 数量规则：逐实际材料千克 / L，明确选择供应总量或只计消耗量的互斥边界。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_material`

#### 采集要求：实际向外退回的制备材料 (`prep_returns`)

过程／待建立交换的方向／类型：`prepare_joint` / `outputs` / `product`.

仅实际可用清洁剂、修补材料或燃料跨保管边界退回时纳入，按产品、批次、状态和实际属性拆分。它不是负输入、回收废物或留存期末库存。返回库存的上游负担随物料转移一次。

数量范围证据需求：需实际出库回执、身份、保管责任和未消耗数量，不假定退回率。

- 采集对象：实际向外退回的制备材料
- 流属性/单位：质量 / kg
- 数量规则：实际去皮向外产品退回千克 / L，并与供料总量和负担台账对应。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_outlets`

#### 采集要求：拆除的失效旧密封胶与旧背衬废物 (`removed_sealant`)

过程／待建立交换的方向／类型：`prepare_joint` / `outputs` / `waste`.

可分离时按实际材质、危险性和去向区分旧胶与旧背衬；不能分离时采用有证据的复合废物身份。拆除旧构件库存不虚构新材料上游负担。

数量范围证据需求：需旧胶、背衬的实际组成、拆除称重、接收方及危险污染信息；仅旧截面几何不足。

- 采集对象：拆除的失效旧密封胶与旧背衬废物
- 流属性/单位：质量 / kg
- 数量规则：实际去皮拆除物外运千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_outlets`
- 来源：`sika-pro3-purform-2024`

#### 采集要求：实际局部混凝土边缘碎屑与收集矿物粉尘 (`concrete_debris`)

过程／待建立交换的方向／类型：`prepare_joint` / `outputs` / `waste`.

实际混凝土碎屑与收集粉尘在身份或路径不同时分列；不把空气逸散部分加进已称重收集物。旧构件水分及矿物固体与新修补材料分别记录。

数量范围证据需求：需实际碎屑重量、必要的水分与固体信息及接收方；不计整条渠道拆除，不假定干重。

- 采集对象：实际局部混凝土边缘碎屑与收集矿物粉尘
- 流属性/单位：质量 / kg
- 数量规则：按实际去向的净碎屑千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_outlets`
- 来源：`sika-pro3-purform-2024`

#### 采集要求：收集的制备冲洗水或化学残留物 (`prep_liquid_waste`)

过程／待建立交换的方向／类型：`prepare_joint` / `outputs` / `waste`.

实际含水冲洗液、回收清洁液、污染吸附物按组成及接收方分列；收集废物不是基本流释放。混合物平衡不能重复计入原清洁剂、水与去除污染物。

数量范围证据需求：需实际收集质量或体积、密度和状态、内容物或固体及处置记录；不假定用水全部变为废液。

- 采集对象：收集的制备冲洗水或化学残留物
- 流属性/单位：质量 / kg
- 数量规则：实际分材料收集并外运的净废物千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_outlets`
- 来源：`sika-pro3-purform-2024`

#### 采集要求：实际制备材料包装废物 (`prep_packaging`)

过程／待建立交换的方向／类型：`prepare_joint` / `outputs` / `waste`.

按实际包装材质、污染及处理路径分列；包装生产仅在供应产品数据集或独立上游组分中计一次。留存、复用容器归库存或资产，不列丢弃出口。

数量范围证据需求：需包装材质皮重、污染、复用和接收记录，无通用包装比例。

- 采集对象：实际制备材料包装废物
- 流属性/单位：质量 / kg
- 数量规则：实际丢弃包装材料的净质量（仅扣称量容器皮重）千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_outlets`

#### 采集要求：按实际物种与粒径区分的制备空气颗粒物 (`prep_dust`)

过程／待建立交换的方向／类型：`prepare_joint` / `outputs` / `elementary`.

仅实际测量或有证据模型支持的空气释放纳入，需实际物质、粒径及受纳空气分室。抽尘收集物归废物；质量差额不自动成为排放。

数量范围证据需求：需实际颗粒物口径、空气去向、捕集证据、代表性系数和活动不确定性，无通用扬尘比例。

- 采集对象：按实际物种与粒径区分的制备空气颗粒物
- 流属性/单位：质量 / kg
- 数量规则：实际测量或有适用来源系数支持的物种、粒径释放千克 / L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prep_releases`

#### 采集要求：实际制备燃烧排入空气的各物种 (`prep_combustion`)

过程／待建立交换的方向／类型：`prepare_joint` / `outputs` / `elementary`.

各实际污染物独立交换，按核实的物种、空气分室、燃烧燃料活动和具体设备、燃料、控制系数计算。不能把燃料质量当成二氧化碳，也不重复上游电力或运输服务排放。

数量范围证据需求：需实际设备、燃料技术、燃烧质量和有单位、范围的系数或物种监测；NOx、VOC总称不能直接绑定单一物质UUID。

- 采集对象：实际制备燃烧排入空气的各物种
- 流属性/单位：质量 / kg
- 数量规则：逐实际物种：推导的燃烧燃料活动 × 适配且有证据的系数 / L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prep_releases`

#### 采集要求：实际制备事故组分向指定环境的释放 (`prep_spill`)

过程／待建立交换的方向／类型：`prepare_joint` / `outputs` / `elementary`.

每个条件性基本交换必须是实际受纳介质中的已识别组分或物种。整配方未收容流体质量保留在事故和燃料燃烧物理台账中，不作为基本化学身份。直接测定组分释放，或按整流体及有证据组成、归趋或释放比例推导。回收、收集、库存外滞留及期末库存部分互斥；整流体与部分物种视图不可相加。实际物种或介质未知时不能选定最终交换。

数量范围证据需求：需事故整流体分配、组分和介质身份、实测物种或有来源和质量口径的组成、归趋比例；无通用配方UUID或默认释放比例。

- 采集对象：实际制备事故组分向指定环境的释放
- 流属性/单位：质量 / kg
- 数量规则：逐实际组分与受纳介质：实测物种千克，或整未收容流体千克 × 有证据组分质量分数 × 介质特定归趋或释放分数，再除以 L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prep_releases`

#### 采集要求：实际施胶遮蔽与保护耗材 (`masking_consumable`)

过程／待建立交换的方向／类型：`reseal_joint` / `inputs` / `product`.

条件性胶带、一次性胶嘴、擦拭物或保护膜按实际材料拆成独立交换。可复用保护归资产台账；供应服务已含材料不重复计上游负担。

数量范围证据需求：需不同实际材质、净重、复用状态及处置或退回证据，不采用混合耗材平均值。

- 采集对象：实际施胶遮蔽与保护耗材
- 流属性/单位：质量 / kg
- 数量规则：逐实际材料供应净内容物总量千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_material`

#### 采集要求：实际施胶保护与试验设备燃料 (`apply_fuel`)

过程／待建立交换的方向／类型：`reseal_joint` / `inputs` / `product`.

实际保护、抽水和试验设备供应的每种燃料配方独立记录。供应总量及互斥未燃烧出口、库存用于推导燃烧活动；购入公用工程或服务覆盖的直接燃料不重复计入。

数量范围证据需求：需实际等级、批次、质量或体积密度温度、期初期末、退回、废物、泄漏分配及设备工时。

- 采集对象：实际施胶保护与试验设备燃料
- 流属性/单位：质量 / kg
- 数量规则：实际供应燃料净内容物总量千克 / L；排放使用另行推导的燃烧活动。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_utilities`

#### 采集要求：实际施胶货物运输服务 (`apply_transport`)

过程／待建立交换的方向／类型：`reseal_joint` / `inputs` / `product`.

按方式和提供者拆分实际密封胶、底涂、背衬交付及设备、出口运输区段。同一区段的分包运输不能同时列为采购服务和车辆燃料清单，披露空返处理。

数量范围证据需求：需实际运单质量、皮重、载货距离、方式及供应方已含交付边界。

- 采集对象：实际施胶货物运输服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：各归属载货区段的实际净货重千克 × 路程千米之和 / L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_apply_logistics`

#### 采集要求：施胶保护与试验资产的分摊服务 (`apply_assets`)

过程／待建立交换的方向／类型：`reseal_joint` / `inputs` / `product`.

按实际胶枪、泵、通道或保护、试验资产逐项展开条件性需求。每项完整寿命份额覆盖制造、维护、更换及报废，列明所有使用节点、作业和期间；在用资产明确提供剩余服务预测证据。

数量范围证据需求：需资产ID、完整寿命覆盖和驱动量、有证据的退役、更换和报废情景、敏感性及更新；无通用寿命。

- 采集对象：施胶保护与试验资产的分摊服务
- 流属性/单位：物品数量 / item
- 数量规则：逐实际资产：归属的实测服务驱动量 / 完整寿命服务驱动量，再除以 L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_apply_assets`

#### 采集要求：湿气固化密封胶实际吸收的空气水分 (`cure_moisture_uptake`)

过程／待建立交换的方向／类型：`reseal_joint` / `inputs` / `elementary`.

条件性反应输入是参与实际单组分固化的空气水分，与供应清理试验水、保留混凝土水分和雨水不同。仅用实际配方反应或现场质量证据，不按相对湿度假定吸水。

数量范围证据需求：需实际配方化学计量，或受控湿态固化质量与反应产物数据，以及现场状态、来源和不确定性；未知湿至固化残差不能当吸水量。

- 采集对象：湿气固化密封胶实际吸收的空气水分
- 流属性/单位：质量 / kg
- 数量规则：有实际反应证据的吸水千克 / L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_apply_releases`
- 来源：`sika-pro3-purform-2024`

#### 采集要求：实际向外退回的施胶材料 (`apply_returns`)

过程／待建立交换的方向／类型：`reseal_joint` / `outputs` / `product`.

实际未用密封胶、底涂、清洗剂或燃料跨保管边界退回时，逐配方、批次拆分。留存期末库存仍在内部，并结转其上游负担。

数量范围证据需求：需实际出库、保管责任、产品状态以及对应供料总量和库存负担桥接；不假定退回或信用。

- 采集对象：实际向外退回的施胶材料
- 流属性/单位：质量 / kg
- 数量规则：实际去皮向外产品退回千克 / L，与供应总量及负担台账对应。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_outlets`

#### 采集要求：实际施胶化学残留与失效密封材料废物 (`application_waste`)

过程／待建立交换的方向／类型：`reseal_joint` / `outputs` / `waste`.

按实际组成和接收方拆分未固化胶、拒收返工固化切除物、底涂或清洗残液、污染吸附物。返工保留所有负担，修复验收门槛闭合前不计合格长度。

数量范围证据需求：需实际湿态或固化状态、配方、净废物称重、拒收拆除事件及接收方，不假定湿至固化留存率或处置系数。

- 采集对象：实际施胶化学残留与失效密封材料废物
- 流属性/单位：质量 / kg
- 数量规则：逐实际材料外运净废物千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_outlets`
- 来源：`sika-pro3-purform-2024`

#### 采集要求：实际施胶包装与未污染边角废料 (`apply_packaging`)

过程／待建立交换的方向／类型：`reseal_joint` / `outputs` / `waste`.

实际铝塑包装、塑料、纸板和未污染PE边角料按材料及路径分列。污染化学包装归对应化学废物。留存可复用容器不列丢弃出口，包装上游负担仅计一次。

数量范围证据需求：需实际包装皮重、材质、污染、PE边角重量及接收证据，无固定每包装废物系数。

- 采集对象：实际施胶包装与未污染边角废料
- 流属性/单位：质量 / kg
- 数量规则：按实际材料、去向丢弃的净质量千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_outlets`

#### 采集要求：实际收集的施胶清理或试验废水 (`captured_test_water`)

过程／待建立交换的方向／类型：`reseal_joint` / `outputs` / `waste`.

收集供处理的条件性水流与化学残液及直接环境排放分开。记录实际污染物、湿固体、接收方和混合物净质量，不把输入水重复相加。实际直接排放需另识别物质及受纳介质。

数量范围证据需求：需实际收集和接收记录、水、固体及污染物、实测体积密度或质量；不假定全部试验水均为废物。

- 采集对象：实际收集的施胶清理或试验废水
- 流属性/单位：质量 / kg
- 数量规则：按实际去向收集的净水或废水千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_outlets`

#### 采集要求：实际施胶清洗与湿气固化各物种释放 (`curing_release`)

过程／待建立交换的方向／类型：`reseal_joint` / `outputs` / `elementary`.

每种实际释放物种及受纳介质需配方、反应或监测证据。底涂清洗剂挥发物和湿气固化化学过程不能从低单体、EC1plus、VOC标签推定；实测吸水与反应项同保留构件水分、天气水分及平衡残差分开。

数量范围证据需求：需实际物种、介质、湿态与固化质量、固含量或挥发分、吸水和反应产物、现场固化及收集残留的不确定性证据；缺失平衡不是排放。

- 采集对象：实际施胶清洗与湿气固化各物种释放
- 流属性/单位：质量 / kg
- 数量规则：逐实际物种：监测释放量，或实际适用配方、反应和活动计算量 / L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_apply_releases`
- 来源：`sika-pro3-purform-2024`

#### 采集要求：实际施胶保护与试验燃烧物种 (`apply_combustion`)

过程／待建立交换的方向／类型：`reseal_joint` / `outputs` / `elementary`.

仅实际燃烧设备纳入；每种污染物需实际设备、燃料、控制与空气分室，使用互斥出口核算后的燃烧活动。购入电力、运输或供应服务已覆盖的排放不重复。

数量范围证据需求：需实际燃料设备系数、单位、范围、控制和燃烧活动或监测，无通用燃烧排放系数。

- 采集对象：实际施胶保护与试验燃烧物种
- 流属性/单位：质量 / kg
- 数量规则：逐实际物种：推导的燃烧燃料活动 × 适配且有证据的系数 / L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_apply_releases`

#### 采集要求：实际施胶事故组分向指定环境的释放 (`apply_spill`)

过程／待建立交换的方向／类型：`reseal_joint` / `outputs` / `elementary`.

每个条件性基本交换必须是实际受纳介质中的已识别组分或物种。整配方未收容流体质量保留在事故和燃料燃烧物理台账中，不作为基本化学身份。直接测定组分释放，或按整流体及有证据组成、归趋或释放比例推导。回收、收集、库存外滞留及期末库存部分互斥；整流体与部分物种视图不可相加。实际物种或介质未知时不能选定最终交换。

数量范围证据需求：需事故整流体分配、组分和介质身份、实测物种或有来源和质量口径的组成、归趋比例；无通用配方UUID或默认释放比例。

- 采集对象：实际施胶事故组分向指定环境的释放
- 流属性/单位：质量 / kg
- 数量规则：逐实际组分与受纳介质：实测物种千克，或整未收容流体千克 × 有证据组分质量分数 × 介质特定归趋或释放分数，再除以 L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_apply_releases`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prepare_joint | 拆除失效密封并确认混凝土表面资格 | required | 每次范围内更换；轻微修补、清理、抽水资源按实际工作条件纳入 | material_treatment_responsibility | 交给 reseal_joint 的实测合格制备中心线，非最终验收输出 |
| reseal_joint | 施用体系保护完整固化并验收接缝 | required | 每次范围内更换；所需试验检查与返工归本责任 | surface_or_property_finishing_responsibility | 来自完整验收接缝L的1m验收重密封中心线 |

两个责任分别拥有实际物理状态和记录交接；收货、混合、固化和文件工作不独立设节点。表面或几何放行失败在 prepare_joint 内重做。粘结、固化、修整或渗漏失败按需由 reseal_joint 返回制备拆除；重复资源和废物保留原节点及事件ID，验收长度仅计一次。实际提供者可不同，但必须保留完整验收门槛。

### 过程：拆除失效密封并确认混凝土表面资格 (`prepare_joint`)

#### 输入

##### 产品流

###### 实际制备或渗漏相关清理的供应水 (`preparation_water`)

仅记录实际切割后冲洗、清理或增量降排水辅助所需、跨越制备边界的购入或供应水。既有渠道内的水不自动视为供应产品水；若实际从环境取水，应按实际水源另列基本流。

数量范围证据需求：需实际计量或称重的作业用水及制备方法；体积换算还需密度，无每米默认量。

- 选定流：实际制备或渗漏相关清理的供应水
- 流属性/单位：质量 / kg
- 数量规则：实际供应水千克 / L；体积计量换算需实际水密度及温度、状态证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_material`
- 来源：`sika-pro3-purform-2024`

###### 实际相容的局部接缝边缘修补材料 (`repair_mortar`)

仅纳入本次密封更新所需的实际局部轻微边缘修补。不同砂浆或树脂组分及实际拌合水分别记录；大量结构重建不在范围内。表面放行前核实实际修补材料固化状态。

数量范围证据需求：需实际损伤体积、获准修补产品及收货、领料、出口记录；无通用砂浆量或假定密度。

- 选定流：实际相容的局部接缝边缘修补材料
- 流属性/单位：质量 / kg
- 数量规则：实际轻微修补所供应、未扣退回的净内容物材料千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_material`
- 来源：`sika-pro3-purform-2024`

###### 实际制备用电供应 (`prep_electricity`)

计量切割、研磨、集尘、清洁及实际增量抽水或干燥所耗、可归属制备的电力，标明提供者和电源。采购完整服务时不重复计入服务已包含用电。

数量范围证据需求：需实际电表、运行时段、提供者边界及共享负载测量分摊；无默认功率或工时。

- 选定流：实际制备用电供应
- 流属性/单位：能量 / kWh
- 数量规则：归属制备的实际计量电量千瓦时 / L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prep_utilities`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成资格确认的既有混凝土灌溉渠道接缝表面 (`prepared_joint`)

清除旧密封胶、污染物和粉尘，完成实际轻微修补，核实混凝土坚实、清洁、干燥及几何条件后交给施胶节点。试验和相容性条件明确由施胶负责。保留混凝土不构成新生产质量。

数量范围证据需求：需实际接缝图、制备长度及表面和几何放行记录；含后续失败或排除区段时可超过验收长度，不假定一比一。

- 选定流：已完成资格确认的既有混凝土灌溉渠道接缝表面
- 流属性/单位：长度 / m
- 数量规则：实测放行的制备中心线米 / L；台账保留失败与重复制备数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare_gate`
- 来源：`sika-pro3-purform-2024`

##### 废物流

##### 基本流

### 过程：施用体系保护完整固化并验收接缝 (`reseal_joint`)

#### 输入

##### 产品流

###### 已完成资格确认的既有混凝土灌溉渠道接缝表面 (`qualified_joint_input`)

从 prepare_joint 接收同一实际制备服务及对应中心线和表面放行记录。内部链接仅承接一次制备负担；已列组分清单时不再重复购买同一完整制备服务。

数量范围证据需求：需签署的制备和接收长度以及未放行、返工排除记录；不固定等于最终1米。

- 选定流：已完成资格确认的既有混凝土灌溉渠道接缝表面
- 流属性/单位：长度 / m
- 数量规则：与 prepared_joint 同一事件、批次的实际接收合格中心线米 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_gate`
- 来源：`sika-pro3-purform-2024`

###### 实际供应的单组分湿气固化聚氨酯密封胶 (`sealant_supplied`)

湿态供应配方总量与固化留存密封材料不同。记录获准的区域产品、批次、货架及储存状态和供应边界。通用聚氨酯树脂或低单体、VOC标签不能证明供应身份或释放数量。

数量范围证据需求：需湿态配方领料重量、退回、留存库存及湿态至固化质量或反应证据；新西兰密度及包装覆盖米数不是通用值。

- 选定流：实际供应的单组分湿气固化聚氨酯密封胶
- 流属性/单位：质量 / kg
- 数量规则：实际收货或库存批次所供应、未扣退回的湿胶净内容物总量千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_material`
- 来源：`sika-pro3-purform-2024`

###### 实际相容的混凝土接缝底涂配方 (`concrete_primer`)

采用实际区域系统获准的混凝土底涂，与清洁液、密封胶分别记录。新西兰产品表对混凝土列出 Primer-3 N；实际底涂说明、闪干和相容性需采集，不能跨地区假定。

数量范围证据需求：需实际配方、领退料重量、湿固体或挥发分数据以及获准施工和闪干记录。

- 选定流：实际相容的混凝土接缝底涂配方
- 流属性/单位：质量 / kg
- 数量规则：实际供应、未扣退回的底涂净内容物总量千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_material`
- 来源：`sika-pro3-purform-2024`

###### 实际闭孔聚乙烯背衬棒 (`polyethylene_backing`)

记录获准直径、截面、安装深度和状态的实际闭孔PE棒。切段和废料会使实际棒长区别于接缝中心线；背衬不能当密封胶质量。

数量范围证据需求：需实际截面、直径、供应、安装、裁切、退回长度及批准记录，无默认棒重或直径。

- 选定流：实际闭孔聚乙烯背衬棒
- 流属性/单位：长度 / m
- 数量规则：实际供应棒材总长米 / L；退回及留存库存按同一原生长度台账记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_material`
- 来源：`sika-pro3-purform-2024`

###### 实际获准的工具清洗配方 (`tooling_cleaner`)

仅实际用于未固化工具清洗时纳入，与底涂和制备清洁剂分列。新西兰表列出 Remover-208；实际区域清洗剂及相容性优先，固化材料采取机械去除。

数量范围证据需求：需实际清洗产品、工法及称重领料、退回、回收液记录，无默认溶剂蒸发量。

- 选定流：实际获准的工具清洗配方
- 流属性/单位：质量 / kg
- 数量规则：实际供应、未扣退回的清洗剂净内容物总量千克 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_material`
- 来源：`sika-pro3-purform-2024`

###### 实际施胶固化保护与试验用电 (`apply_electricity`)

计量施胶枪、临时保护、干燥、抽水和试验的实际负载，覆盖完整所需固化及验收，包括承包方资源。被动空气湿气固化不意味着必需电加热。

数量范围证据需求：需实际设备、电表时段、负载分摊和完整固化试验覆盖，无假定加热或按实验室固化时间推算用电。

- 选定流：实际施胶固化保护与试验用电
- 流属性/单位：能量 / kWh
- 数量规则：归属施胶、保护和试验的实测电量千瓦时 / L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_apply_utilities`

###### 实际供应的施胶清理与所需试验用水 (`application_test_water`)

仅实际增量清理或要求的渗漏、粘结验证用水纳入施胶试验责任。不纳入后续灌溉输水，也不把保留渠道水自动当供应产品。实际环境取水需按水源另列基本输入。

数量范围证据需求：需实际试验或清理方法、水源和供应、计量数量及换算时的密度状态，无默认试验水量。

- 选定流：实际供应的施胶清理与所需试验用水
- 流属性/单位：质量 / kg
- 数量规则：实际归属供应水千克 / L；体积换算需实际密度及温度、状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_material`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 既有混凝土灌溉渠道验收合格的单组分聚氨酯接缝重密封服务 (`accepted_joint_reseal`)

只有系统、几何和暴露条件获准、旧残留物相容、坚实干燥表面放行、背衬底涂施胶修整保护完成、完整所需固化得到核实、缺陷关闭且业主要求的粘结或渗漏验证通过后，才能交付已安装服务。按1米归一化不能使不完整接缝放行。

数量范围证据需求：精确1米是定义而非经验数量范围；采集完整验收接缝 L 及门槛和公差，不以表干时间、实验室固化速率、双面倍数或拒收长度替代。

- 选定流：既有混凝土灌溉渠道验收合格的单组分聚氨酯接缝重密封服务
- 流属性/单位：长度 / m
- 数量规则：1 m
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_accept`
- 来源：`sika-pro3-purform-2024`; `sika-civil-water-joints`

###### 实际向外退回的闭孔聚乙烯背衬棒 (`backing_returns`)

仅实际未用棒材跨保管边界退回时纳入，保留获准材质、截面和原生长度。它不是废物或留存期末库存，对应供应棒材总量不先扣退回。

数量范围证据需求：需实际出库、保管责任、截面及实测长度，并与供料总量和库存负担桥接对应，无名义退回比例。

- 选定流：实际向外退回的闭孔聚乙烯背衬棒
- 流属性/单位：长度 / m
- 数量规则：实际向外退回棒长米 / L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_apply_outlets`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| no_coproduct | 所有清单行 | 本服务不假定可售联产品。保留混凝土、旧胶拆除物和拒收作业不是验收服务。实际回收材料路径另列，不自动给予替代信用。 |  |
| rework_burden | prepare_joint; reseal_joint | 制备失败在 prepare_joint 内循环；施胶、粘结、固化或渗漏失败由 reseal_joint 返回实际责任节点。重复投入、保护、试验、拆除及出口均保留作业负担，完整验收长度只进分母一次。未修复缺陷阻止验收。 | sika-pro3-purform-2024 |
| shared_assets | prep_assets; apply_assets | 逐资产采用实际使用支持的物理服务驱动量，如实测运行时间或活动量，并列明所有作业、节点和期间。分子为实际作业服务；分母覆盖完整已观测寿命，或已观测服务加有证据的未来剩余服务、更换、终止和报废情景。制造、维护、更换、报废各计一次；排除已单列燃料备件。缺少完整覆盖或分母不能完成最终数据集。 |  |
| period_bridge | 所有清单行 | 列明拆除、施胶、保护固化、试验返工和验收日期及报告期间。未完作业负担结转至验收作业，不在期间截断时放行未固化输出。共享事件按作业、节点、期间归属一次。期初库存负担加收货总量负担等于归属已用或外运负担加期末结转；披露退回废物，期末库存不是向外流。 |  |
| service_overlap | prep_transport; apply_transport; prep_electricity; apply_electricity; prep_assets; apply_assets | 记录提供者包含矩阵；采购完整服务与其已含能源、设备、包装、物流为替代表示。内部 prepared_joint 转移负担，不再次购买同一完整处理。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prep_material | prepare_joint | 不同材料与库存 | 实际前景记录 | job_id; joint_id; period_id; event_id; material_id; formulation; product_revision; lot_id; supplier; state; opening_stock_native; gross_receipt_native; internal_issue_native; outward_return_native; retained_closing_stock_native; native_unit; gross_weight_kg; container_tare_kg; net_content_kg; actual_volume_L; actual_density_kg_per_L; density_temperature_degC; density_state; density_source; backing_length_m; backing_diameter_mm; opening_burden; receipt_burden; closing_carried_burden; inclusion_boundary | 记录外部收货总量和内部领料，避免重复负担。先以毛重减真实皮重，再核对退回；每产品批次对应退回、留存库存、安装消耗过程及最终废物。实际体积换质量时用该配方批次在所记温度状态下密度；背衬用实际m和截面。期间库存负担与 cp_accept 的验收L链接；按归属作业原生量除L。 | kg; L; kg/L; degC; m; mm | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 校准秤表；供应批次说明；签署保管责任及库存负担桥接；无名义包装密度默认值 |
| cp_prep_utilities | prepare_joint | 电力与不同燃料 | 实际前景记录 | job_id; node_id; period_id; event_id; provider; equipment_id; energy_source; meter_start_kWh; meter_end_kWh; shared_load_driver; fuel_id; fuel_grade; opening_fuel_kg; gross_fuel_receipt_kg; closing_fuel_kg; outward_fuel_return_kg; fuel_waste_kg; recovered_spill_kg; retained_contaminated_residue_outside_stock_kg; whole_uncontained_fuel_kg; fuel_volume_L; fuel_density_kg_per_L; fuel_density_temperature_degC; fuel_density_state; runtime_h; included_service | 读取实际电表并按有依据的共享负载分摊。燃料实物台账列明互斥未燃烧出口；回收泄漏仅记最终退回、废物或留存去向一次。库存外污染滞留不得与期末库存重复扣除；单独推导燃烧燃料。体积换算用实际密度温度状态。列明全部固化、抽水和试验提供者；作业量除验收L。 | kWh; kg; L; kg/L; degC; h | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 计量校准；油罐收货和保管记录；不再扣事故总量；服务包含矩阵 |
| cp_prep_logistics | prepare_joint | 不同实际运输区段 | 实际前景记录 | job_id; node_id; period_id; leg_id; consignment_id; provider; mode; cargo_id; loaded_gross_kg; vehicle_container_tare_kg; net_cargo_kg; loaded_distance_km; empty_return_distance_km; inclusion_boundary; attribution_driver | 对应实际运单和路线；货物kg为毛重减车容器皮重。逐区段按净货重kg乘载货km，使用明确实际分摊并披露空返处理；归属活动除验收L。采购同段服务时不重复列车辆燃料。 | kg; km; kg*km | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 地磅运输GPS记录；路线提供者及已含交付约定；kg*km支持链 |
| cp_prep_assets | prepare_joint | 不同资产完整寿命服务份额 | 实际前景记录 | asset_id; node_id; job_id; period_id; manufacture_dataset; manufacture_boundary; maintenance_history; replacement_history; end_of_life_route; direct_fuel_spares_excluded; service_driver_unit; job_driver; all_node_job_period_drivers; observed_life_driver; forecast_remaining_driver; forecast_source; termination_replacement_scenario; forecast_EOL_route; uncertainty; sensitivity; update_date | 逐资产盘点完整制造、维护、更换和报废。已结束寿命用历史；在用寿命用观测驱动量加有证据的未来剩余服务情景，预测更换、终止和报废明确标为预测。按作业节点驱动量除完整寿命总量，再除验收L；追踪全部使用者，不重复燃料备件。缺少覆盖或驱动量证据不能完成。 | item; 实际声明的服务驱动单位 | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 资产登记历史及有依据预测来源、不确定性、敏感性、更新；完整范围内逐资产份额和为一 |
| cp_prep_outlets | prepare_joint | 不同保管出口与留存余额 | 实际前景记录 | job_id; node_id; period_id; event_id; outlet_id; material_id; formulation; state; destination; receiver; custody_dispatch; gross_weight_kg; tare_kg; net_weight_kg; actual_volume_L; density_kg_per_L; density_temperature_degC; solids_kg; water_kg; returned_backing_m; contamination; waste_manifest; upstream_burden_transferred; retained_closing_stock | 称量实际净材料出口并记录接收方及保管责任。每材料状态路径展开为独立产品退回或废物；背衬退回保留m。区分旧构件材料、新修补、收集液和包装；固体水分平衡不重复混合物。期末库存及结转负担留在内部，向外量除验收L。 | kg; L; kg/L; degC; m | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 校准秤和收货单；废物分类；不把负输入与退回重复，不虚构期末库存输出 |
| cp_prep_releases | prepare_joint | 实际物种与未收容流体释放 | 实际前景记录 | job_id; node_id; period_id; event_id; substance_id; formulation_id; species; particle_size; receiving_medium; monitored_mass_kg; monitoring_method; factor_value; factor_numerator_unit; factor_activity_unit; factor_source; equipment_fuel_technology; burned_activity; wet_mass_kg; retained_cured_mass_kg; actual_solids_fraction; actual_volatile_fraction; moisture_uptake_kg; reaction_extent; reaction_extent_basis; formulation_water_demand_kg_per_kg; water_demand_source; reaction_product_kg; weather_water_kg; retained_host_water_kg; captured_mass_kg; spill_total_audit_kg; recovered_outlet_kg; retained_contaminated_residue_outside_stock_kg; whole_uncontained_fluid_kg; constituent_mass_fraction; fraction_mass_basis; composition_source; medium_release_fraction; fate_fraction_basis; fate_source; uncertainty | 实际物种粒径介质可测量，或按行适用来源系数和匹配活动计算。湿态固化质量及反应水项仅用实际配方证据；未知残差保留缺口。事故总量仅分配审计，最终出口互斥，不再次扣总量；库存外污染残留与期末库存互斥。整未收容配方是物理台账，不是基本身份；各组分按实测，或整流体乘有来源和口径的组成及介质释放分数。部分物种视图与整流体不可相加。实际反应吸水另按实际化学计量或反应专属测量，不按湿度或未知差额推定。释放和吸水各除验收L。 | kg; 实际因子及活动量单位 | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 实际监测或系数范围、单位、来源；反应配方、组成归趋和不确定性证据；标签不是排放系数 |
| cp_apply_material | reseal_joint | 不同材料与库存 | 实际前景记录 | job_id; joint_id; period_id; event_id; material_id; formulation; product_revision; lot_id; supplier; state; opening_stock_native; gross_receipt_native; internal_issue_native; outward_return_native; retained_closing_stock_native; native_unit; gross_weight_kg; container_tare_kg; net_content_kg; actual_volume_L; actual_density_kg_per_L; density_temperature_degC; density_state; density_source; backing_length_m; backing_diameter_mm; opening_burden; receipt_burden; closing_carried_burden; inclusion_boundary | 记录外部收货总量和内部领料，避免重复负担。先以毛重减真实皮重，再核对退回；每产品批次对应退回、留存库存、安装消耗过程及最终废物。实际体积换质量时用该配方批次在所记温度状态下密度；背衬用实际m和截面。期间库存负担与 cp_accept 的验收L链接；按归属作业原生量除L。 | kg; L; kg/L; degC; m; mm | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 校准秤表；供应批次说明；签署保管责任及库存负担桥接；无名义包装密度默认值 |
| cp_apply_utilities | reseal_joint | 电力与不同燃料 | 实际前景记录 | job_id; node_id; period_id; event_id; provider; equipment_id; energy_source; meter_start_kWh; meter_end_kWh; shared_load_driver; fuel_id; fuel_grade; opening_fuel_kg; gross_fuel_receipt_kg; closing_fuel_kg; outward_fuel_return_kg; fuel_waste_kg; recovered_spill_kg; retained_contaminated_residue_outside_stock_kg; whole_uncontained_fuel_kg; fuel_volume_L; fuel_density_kg_per_L; fuel_density_temperature_degC; fuel_density_state; runtime_h; included_service | 读取实际电表并按有依据的共享负载分摊。燃料实物台账列明互斥未燃烧出口；回收泄漏仅记最终退回、废物或留存去向一次。库存外污染滞留不得与期末库存重复扣除；单独推导燃烧燃料。体积换算用实际密度温度状态。列明全部固化、抽水和试验提供者；作业量除验收L。 | kWh; kg; L; kg/L; degC; h | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 计量校准；油罐收货和保管记录；不再扣事故总量；服务包含矩阵 |
| cp_apply_logistics | reseal_joint | 不同实际运输区段 | 实际前景记录 | job_id; node_id; period_id; leg_id; consignment_id; provider; mode; cargo_id; loaded_gross_kg; vehicle_container_tare_kg; net_cargo_kg; loaded_distance_km; empty_return_distance_km; inclusion_boundary; attribution_driver | 对应实际运单和路线；货物kg为毛重减车容器皮重。逐区段按净货重kg乘载货km，使用明确实际分摊并披露空返处理；归属活动除验收L。采购同段服务时不重复列车辆燃料。 | kg; km; kg*km | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 地磅运输GPS记录；路线提供者及已含交付约定；kg*km支持链 |
| cp_apply_assets | reseal_joint | 不同资产完整寿命服务份额 | 实际前景记录 | asset_id; node_id; job_id; period_id; manufacture_dataset; manufacture_boundary; maintenance_history; replacement_history; end_of_life_route; direct_fuel_spares_excluded; service_driver_unit; job_driver; all_node_job_period_drivers; observed_life_driver; forecast_remaining_driver; forecast_source; termination_replacement_scenario; forecast_EOL_route; uncertainty; sensitivity; update_date | 逐资产盘点完整制造、维护、更换和报废。已结束寿命用历史；在用寿命用观测驱动量加有证据的未来剩余服务情景，预测更换、终止和报废明确标为预测。按作业节点驱动量除完整寿命总量，再除验收L；追踪全部使用者，不重复燃料备件。缺少覆盖或驱动量证据不能完成。 | item; 实际声明的服务驱动单位 | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 资产登记历史及有依据预测来源、不确定性、敏感性、更新；完整范围内逐资产份额和为一 |
| cp_apply_outlets | reseal_joint | 不同保管出口与留存余额 | 实际前景记录 | job_id; node_id; period_id; event_id; outlet_id; material_id; formulation; state; destination; receiver; custody_dispatch; gross_weight_kg; tare_kg; net_weight_kg; actual_volume_L; density_kg_per_L; density_temperature_degC; solids_kg; water_kg; returned_backing_m; contamination; waste_manifest; upstream_burden_transferred; retained_closing_stock | 称量实际净材料出口并记录接收方及保管责任。每材料状态路径展开为独立产品退回或废物；背衬退回保留m。区分旧构件材料、新修补、收集液和包装；固体水分平衡不重复混合物。期末库存及结转负担留在内部，向外量除验收L。 | kg; L; kg/L; degC; m | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 校准秤和收货单；废物分类；不把负输入与退回重复，不虚构期末库存输出 |
| cp_apply_releases | reseal_joint | 实际物种与未收容流体释放 | 实际前景记录 | job_id; node_id; period_id; event_id; substance_id; formulation_id; species; particle_size; receiving_medium; monitored_mass_kg; monitoring_method; factor_value; factor_numerator_unit; factor_activity_unit; factor_source; equipment_fuel_technology; burned_activity; wet_mass_kg; retained_cured_mass_kg; actual_solids_fraction; actual_volatile_fraction; moisture_uptake_kg; reaction_extent; reaction_extent_basis; formulation_water_demand_kg_per_kg; water_demand_source; reaction_product_kg; weather_water_kg; retained_host_water_kg; captured_mass_kg; spill_total_audit_kg; recovered_outlet_kg; retained_contaminated_residue_outside_stock_kg; whole_uncontained_fluid_kg; constituent_mass_fraction; fraction_mass_basis; composition_source; medium_release_fraction; fate_fraction_basis; fate_source; uncertainty | 实际物种粒径介质可测量，或按行适用来源系数和匹配活动计算。湿态固化质量及反应水项仅用实际配方证据；未知残差保留缺口。事故总量仅分配审计，最终出口互斥，不再次扣总量；库存外污染残留与期末库存互斥。整未收容配方是物理台账，不是基本身份；各组分按实测，或整流体乘有来源和口径的组成及介质释放分数。部分物种视图与整流体不可相加。实际反应吸水另按实际化学计量或反应专属测量，不按湿度或未知差额推定。释放和吸水各除验收L。 | kg; 实际因子及活动量单位 | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 实际监测或系数范围、单位、来源；反应配方、组成归趋和不确定性证据；标签不是排放系数 |
| cp_prepare_gate | prepare_joint | 合格制备交接 | 实际前景记录 | job_id; joint_id; period_id; event_id; original_sealant; residue_compatibility; host_condition; minor_repair_product; repair_cure_release; preparation_method; released_length_m; joint_width_mm; joint_depth_mm; movement_mm; surface_temperature_degC; dewpoint_degC; moisture_method; dryness_result; cleanliness_result; soundness_result; geometry_tolerance_source; approver; handoff_date | 记录失效接缝及实际拆除保留状态；轻微修补固化、除尘后按实际规定检查坚实、清洁、干燥和几何，记录获准公差来源及方法。逐事件汇总唯一放行制备长度，对应施胶接收长度，再以最终验收L归一化；重复尝试保留追溯。 | m; mm; degC; 实际水分测试单位 | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 签署表面放行及项目特定获准说明；不把PDS地坪宽深或露点设置普遍强加给其他体系 |
| cp_apply_gate | reseal_joint | 施胶接口与完整固化 | 实际前景记录 | job_id; joint_id; period_id; event_id; prepared_event_id; received_length_m; regional_product; instruction_revision; formulation_lot; primer_id; backing_profile; width_mm; depth_mm; movement_mm; water_head_m; water_chemistry; exposure_temperature_degC; substrate_temperature_degC; air_temperature_degC; relative_humidity_percent; dewpoint_degC; primer_flashoff_min; application_start_utc; cure_start_utc; protection_end_utc; cure_verification_method; cure_required_criterion; cure_actual_result; criterion_source; adhesion_trial; inspection_result; leakage_test_pressure_kPa; leakage_test_duration_min; test_method; acceptance_tolerance_source; rework_event; water_release_authority | 接收具体合格表面事件；区域体系、旧残留、水头、化学、位移及项目粘结试验取得项目或制造商批准。记录实际几何、天气、底涂条件、保护和完整固化标准及结果。仅所需实际试验记录方法、单位和公差来源；表干或实验室固化速率不足以证明完整固化。返工链接原责任节点，全部事件负担结转至最终验收。 | m; mm; degC; %; min; kPa; 实际化学参数及试验单位 | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 签署的获准产品说明、试验现场固化及业主记录；标准未知或失败未关闭则阻止输出 |
| cp_accept | reseal_joint | 唯一最终验收中心线 | 实际前景记录 | job_id; joint_id; mapped_segments; period_id; acceptance_date_utc; start_station_m; end_station_m; unique_accepted_length_L_m; survey_method; calibration; full_joint_gate_closed; cure_release_id; required_test_release_id; defect_closure_id; owner_acceptance_id; authorised_water_return | 通过校准卷尺或测量及区段端点图，计量唯一完整验收中心线；不按双面、背衬或胶道重复。完整验收接缝合计为L；失败、未固化、未放行长度在全部门槛闭合前贡献零。定义1m参考，用归属作业量除实测L，同时保留完整接缝验收要求。 | m | 每事件和批次并逐报告期间核对 | 完整作业，包括失败尝试直至验收 | 实际渠道接缝及责任提供者 | per reference flow | 测量校准及签署完整门槛、试验、缺陷、业主记录；要求正L，不推定未固化验收 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| length_intensity | 所有清单行 | 逐独立交换，强度 = 声明单位的作业归属数量 / 验收完整接缝中心线 L（m）。参考输出精确1 m；内部制备接收长度保持实测，负担只转移一次。 | 实际作业数量; L; cp_accept | 每参考流交换量 |  |
| actual_density_conversion | preparation_water; application_test_water; preparation_cleaner; repair_mortar; sealant_supplied; concrete_primer; tooling_cleaner; prep_fuel; apply_fuel | 净内容物kg = 实称毛重kg - 真实容器皮重kg。仅实际以体积记录时，质量kg = 实际体积L × 该配方批次在记录温度状态的密度kg/L。燃料行使用所链接公用工程协议的 fuel_volume_L × fuel_density_kg_per_L 及 fuel_density_temperature_degC、fuel_density_state。名义包装数或密度不能替代证据，输入不能先扣退回。 | gross_weight_kg; container_tare_kg; actual_volume_L; actual_density_kg_per_L; density_temperature_degC; density_state; density_source; fuel_volume_L; fuel_density_kg_per_L; fuel_density_temperature_degC; fuel_density_state; cp_prep_material; cp_apply_material; cp_prep_utilities; cp_apply_utilities | 未扣退回的材料净内容物总量kg |  |
| fuel_burned_activity | prep_fuel; apply_fuel; prep_combustion; apply_combustion | 燃烧燃料kg = 期初燃料kg + 实际收货燃料总量kg - 期末燃料kg - 实际向外未燃烧退回kg - 未燃烧废物kg - 期末库存外滞留污染燃料kg - 整未收容燃料kg。回收泄漏仅进入最终互斥出口。库存外污染残留与期末库存互斥，已计入期末库存时不得再扣。事故总泄漏仅审计，不再次扣除。 | cp_prep_utilities; cp_apply_utilities; cp_prep_outlets; cp_apply_outlets; cp_prep_releases; cp_apply_releases | 用于物种计算的实际燃烧燃料活动 |  |
| transport_work | prep_transport; apply_transport | 各载货区段活动kg*km = 实际净货重kg × 载货距离km；归属区段合计除L。实际提供者用t*km时，1 t*km = 1000 kg*km，保留单位组所列系数及真实货物路线。 | net_cargo_kg; loaded_distance_km; cp_prep_logistics; cp_apply_logistics; cp_accept | 每参考流运输强度kg*km |  |
| asset_share | prep_assets; apply_assets | 逐实际资产，完整寿命服务份额 = 实际作业节点服务驱动量 / 完整寿命驱动量；在用资产的完整寿命驱动量 = 已观测量 + 有依据的未来剩余量。完整制造、维护、更换和报废清单乘份额再除L，剔除已单列燃料备件。完整寿命中所有作业节点期间份额合计为一。 | job_driver; observed_life_driver; forecast_remaining_driver; 完整资产清单; cp_prep_assets; cp_apply_assets; cp_accept | 逐资产每参考流分摊服务和清单 |  |
| species_release | prep_dust; prep_combustion; apply_combustion; curing_release; prep_spill; apply_spill | 逐实际物种、粒径、介质，释放kg = 监测kg，或实际匹配活动 × 有证据且单位为kg/活动单位的系数。事故组分用实测物种kg，或 whole_uncontained_fluid_kg × constituent_mass_fraction × medium_release_fraction；各比例须有实际来源及质量、归趋口径。整流体只是事故台账量，不是基本身份。每项释放只选一种核算路径。湿气固化反应和湿至固化留存需实际配方现场证据，不从低单体、VOC标签或未知残差换算。实际释放除L。 | monitored_mass_kg; factor_value; factor_numerator_unit; factor_activity_unit; factor_source; 匹配的燃烧、反应或材料活动; whole_uncontained_fluid_kg; constituent_mass_fraction; fraction_mass_basis; composition_source; medium_release_fraction; fate_fraction_basis; fate_source; cp_prep_releases; cp_apply_releases; cp_accept | 每参考流物种特定释放强度kg |  |
| stock_material_bridge | preparation_water; application_test_water; preparation_cleaner; abrasive_consumable; prep_containment_consumable; repair_mortar; sealant_supplied; concrete_primer; polyethylene_backing; backing_returns; tooling_cleaner; prep_returns; apply_returns; application_waste; curing_release; cure_moisture_uptake | 逐材料状态及原生单位：期初库存 + 外部收货总量 = 向外产品退回 + 留存期末库存 + 互斥最终安装或留存材料、向外废物及实际整未收容流体出口；中间消耗或领用仅为过程台账移动，不能与其自身废物释放相加。内部领料不另作一次收货。背衬保留m，区分最终安装、退回、留存及实测裁切废长，质量换算另需证据。组分、反应及物种台账单独保留，不与整流体物理出口相加。反应平衡分列实际空气吸水、供应水、保留构件或天气水分及有证据反应产物，它们不是通用原料损失。湿至固化平衡还需反应、水分及水项证据；未知残差阻止闭合而非成为排放。期初上游负担 + 收货负担 = 已用或外运负担 + 期末结转，不重复领料负担。 | cp_prep_material; cp_apply_material; cp_prep_outlets; cp_apply_outlets; cp_apply_releases | 核对后的实物和上游负担台账 |  |
| atmospheric_reaction_intake | cure_moisture_uptake | 实际空气反应吸水kg = 反应专属实测输入，或实际反应配方数量 × 同量口径的配方特定有证据需水量；要求实际反应程度和状态，并区分反应产物、构件、天气及供应水。仅湿度或未知湿至固化残差不足以证明吸水。实际吸水kg除L。 | moisture_uptake_kg; wet_mass_kg; retained_cured_mass_kg; reaction_product_kg; 实际反应程度及配方特定化学计量和来源; weather_water_kg; retained_host_water_kg; cp_apply_releases; cp_accept | 每参考流实际空气水分输入kg |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_quality | 所有清单行 | 条件性角色展开为不同实际材料、配方、提供者、废物、物种及介质身份。最终数据集前核实UUID、类型及属性单位支持；未知身份明确未解决，不能采用最近匹配。 | 实际供应方、接收方、物种证据及核实详情和支持行 |
| representative_range | 所有清单行 | 每卡均列实际证据需求；采集代表性重复作业不确定性、实际几何条件与完整性。制造商地坪包装覆盖、实验室固化密度及标签不构成现场消耗或释放分布。 | 采集协议记录；sika-pro3-purform-2024 |
| acceptance_quality | accepted_joint_reseal | 记录实际获准几何、公差、相容性、暴露、水头、完整固化方法结果、所需试验、缺陷关闭和业主放行；缺少实际标准阻止最终服务。 | cp_prepare_gate; cp_apply_gate; cp_accept |
| balance_quality | 所有清单行 | 核对实际去皮供料总量、旧保留构件拆除、新修补、库存退回废物释放及期初期末负担。干固体、供应水、保留构件或天气水分及反应水分别记录。 | 含不确定性及未解决残差的批次事件材料平衡 |
| period_quality | prep_assets; apply_assets; accepted_joint_reseal | 覆盖全部拆除、施胶、保护固化、试验、返工期间及完整资产寿命。未来剩余寿命、更换、终止、报废来源分母及敏感性有据；覆盖未知不能完成。 | 作业节点期间矩阵及资产登记、来源、预测更新 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_validation | 所有清单行 | 核实灌溉渠道维修用途及排除项；供水、通航、新衬砌或大规模结构重建不能采用本类别。 | un-cpc3-2025 |
| gate_validation | accepted_joint_reseal | 要求表面放行，项目或区域体系和相容性、暴露、水头、位移批准，完整所需固化证据，实际所需粘结渗漏验证、缺陷关闭，以及恢复通水前业主验收。仅表干或实验室速率不足。 | sika-pro3-purform-2024; sika-civil-water-joints |
| length_validation | accepted_joint_reseal; prepared_joint; qualified_joint_input | 参考为完整验收接缝的唯一中心线1m。要求正实测L、相同图示交接及验收事件；双面、棒材、胶道、返工不能增加L。内部长度保持实测。 |  |
| outlet_validation | 所有清单行 | 核对未扣退回的去皮收货总量、互斥出口、库存负担桥接和旧新材料状态。部分物种总和不能当整未收容流体，事故总量不得再次扣除；未知残差不是基本排放。 |  |
| period_asset_validation | prep_assets; apply_assets; accepted_joint_reseal | 全部节点作业期间、失败循环和共享驱动量明确，完整制造维护更换报废覆盖。已结束寿命的观测记录或有证据的未来剩余服务情景支持分母终止；缺证阻止最终数据集。不重复燃料、备件或服务负担。 |  |
| identity_validation | 所有清单行 | 最终交换需核实准确身份及支持；候选未解决行不授权替换为通用树脂、清洁剂、废物或物种。保留实际单位和来源范围。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 有界验收合格既有渠道接缝重密封前景数据包 |
| downstream_use | secondary_dataset; background_dataset; 下游process及lifecyclemodel投影 |
| allowed_use | 具有完整验收接缝、声明计量提供者及期间边界的实际相容单组分聚氨酯维修作业 |
| excluded_use | 通用密封胶规范；新渠道或衬砌；供水渡槽、通航、大坝、管道；大规模重建；促进剂、双组分、预制体系；未固化或拒收密封；寿命或避免更换信用 |
| required_metadata | PCR身份版本；灌溉用途及接缝图；完整L；区域体系批次；几何水头位移水化学；构件残留相容性；制备完整固化试验业主放行；提供者；报告期间；资产分配及包含边界 |
| required_quality_disclosure | 实际测量来源日期不确定性；未解决身份数量；供应方地域时间技术；排除或不完整释放；材料和库存负担平衡；观测预测资产覆盖；失败返工事件 |
| update_trigger | 区域说明产品暴露几何变化；新前景数量证据；固化试验失败；实际提供者包含或资产剩余寿命情景修订；新核实身份 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国统计司CPC第3.0版解释性说明，2025年6月30日，印刷页285–286；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 54234灌溉修复恢复范围及54231供水排除；不用于数量 |
| sika-civil-water-joints | handbook | Sika土木工程接缝密封，第9节水基础设施接缝；https://www.sika.com/en/construction/joint-sealing/civil-engineering.html | 渠道水管理接缝和聚氨酯路线背景；非通用区域产品或水头批准 |
| sika-pro3-purform-2024 | handbook | Sika (NZ) Sikaflex PRO-3 Purform产品数据表，2024年11月，版本03.04，文件020515010000000028，第1–5页；https://nzl.sika.com/dam/dms/nz01/t/sikaflex-pro-3-purform.pdf | 单组分湿气固化路线、坚实清洁干燥表面及旧胶清除、轻微边缘修补、混凝土底涂、闭孔PE背衬、即用与清洁；区域和实验室限制及项目基面测试。地坪几何、包装覆盖和实验室表干固化密度不构成通用渠道数量或完整固化验收。 |
