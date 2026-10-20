---
pcr_id: pcr.construction-services.existing-long-distance-single-mode-optical-fibre-fusion-splice-repair-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有长途单模光纤单纤熔接修复服务

## 1. 范围与适用性

本PCR适用于已声明的长途陆地电信网络中既有全介质单模光纤的有界修复。采用足够的既有余长，以单纤电弧熔接连接两个实际兼容的保留纤端；每一验收连接均须完成保护、光学与机械验证、盘纤整理，并在保留的可用密封接头盒重新密封及检查合格后交付。边界包括获授权的安全光隔离、进入及现场防护、接头盒重新开启、切回、机械剥纤、清洁、切割、对准及程序选择、电弧熔接、检查、保护套管加热、布纤、盒体作业，以及直至业主签署验收的全部失败尝试。[corning-single-fibre-fusion-2020; corning-retained-closure-2019]

排除新线路或光缆制造、新光缆插段及长段切除更换、新接头盒体、本地/FTTH/楼内网络、海底工程、电力电缆、多模光纤、带状批量熔接、机械接续、连接器/尾纤安装及后续网络运行。余长不足、纤型不兼容或保留盒体/接口失效时，须转入其他路线，不能添加通用材料后仍套用本PCR。本类别窄于长途通信及电力线路服务分类，不覆盖其中的电力线路服务。[un-cpc3-2025]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-long-distance-single-mode-optical-fibre-fusion-splice-repair-services |
| classification_refs | CPC 3.0 54242; narrower; 长途通信及电力线路（电缆）一般施工服务 |
| covered_products | 既有长途陆地光缆中，在保留的可重新开启密封接头盒内完成验收的永久单模单纤对熔接修复连接 |
| excluded_products | 新光缆插段/线路/盒体；本地/FTTH；海底；电力；多模；带状批量熔接；机械接续；连接器及尾纤 |
| representative_product | 指定保留接头盒内，以实际兼容保留纤端及匹配热缩保护套管修复并验收的一条已标识纤对连接 |
| production_route | 单一接头盒作业批次：隔离/进入/开盒；保留纤端准备；熔接；机械及光学验证；保护/布纤；密封/检查；签署验收 |
| market_state | 在有界业主交接点完成的场址特定修复服务，明确实际纤型、接头盒和验收配置 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一条已标识并验收的永久单纤对熔接修复连接 |
| How much | 1 item；N为声明作业/批次中最终验收的唯一纤对连接ID的正数数量 |
| How well | 实际单模纤端兼容；机械判据、指定波长/方法/阈值的校准光学结果、保护及满足弯曲要求的整理、保留接头盒密封/检查和签署验收全部完成 |
| How long or cycle | 从动员/隔离至接头盒最终验收的有限修复批次，包含返工及归属于该批次的充电；另行声明事件/报告期及共享工具制造、维护、更换、终止和报废阶段；不承诺使用寿命 |
| reference_flow_link | `accepted_fibre_pair_repair` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收长途单模单纤对熔接修复服务 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 长途陆地网络功能；网络/作业/接头盒/纤对ID；既有纤型与兼容性；足够余长；保护套管及盘纤器配置；熔接机/程序及校准；机械判据/结果；光学方法/波长/阈值/结果，OTDR接续损耗采用双向平均；密封/检查要求及结果；缺陷关闭；业主验收；地域/日期；实际投入/废物/释放边界 |

一个计数单位指完成全部所属接头盒关卡后的一条验收连接，不指一个盒、一米光缆、一根套管、一次电弧或尝试。对于正数最终唯一验收N，N/N恰为每参考流一条验收连接；重复准备、失败电弧、丢弃套管、共享开盒/密封和测试均须归属于最终验收N。不同纤型/盒体配置不会因同用item而自动等效。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| accepted_connection_count | accepted_fibre_pair_repair | Count | item | 按cp_acceptance中的最终唯一验收纤对ID计数。仅在机械/光学/保护及所属接头盒关卡完成后计一次；N须为正数。 |
| native_material_ledger | splice_protectors; fibre_cleaner; preparation_consumables; closure_reseal_materials; outward_protector_returns; outward_material_returns; fibre_sharps; other_solid_waste | 实际原生属性 | 实际原生单位 | 保留每种材料/SKU的Count、Length、Mass或Volume原生台账。数量平衡须有实际丢弃Count，不能由污染混合废物kg推算套管丢弃数量。Count转质量须有匹配SKU实测单位质量；体积转质量须由cp_materials提供体积单位、密度、状态、温度及来源。 |
| optical_method | accepted_fibre_pair_repair | 光学测试结果 | 声明测试单位 | 熔接机目视/估算损耗不能替代实际校准光学测量。准确OTDR接续损耗须在每个声明波长使用双向读数及其平均。采用实际业主判据；光学损耗不能证明抗拉性能。[corning-single-fibre-fusion-2020] |
| utility_measurement | electricity_supply; direct_fuel; closure_test_gas | Energy或Mass | MJ或kg | 区分充电/电表边界与燃料/气体台账。kWh按3.6 MJ/kWh换算；气体Volume转Mass须有实际压力、温度、组成、密度/状态及可追溯方法。不预设单次电弧或通用气量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已声明既有长途陆地光缆，兼容全介质单模纤端、足够修复余长及合格保留可用可重新开启密封接头盒；须获授权并实施光隔离 |
| starting_condition_role | 既有生产性状态接口：分别标识左右保留纤端、保留光缆/护套、盘纤器及盒体；不是新购材料、历史制造费用或避免更换信用 |
| product_classification_scope | CPC 3.0 54242内较窄的长途通信线路修复服务；排除电力/本地/海底服务 |
| recursive_input_rule | 同类别外部修复分包须声明其已完成有界范围、实际参考量和上游负荷证据；资源只分配一次，不得通过同一验收ID递归，也不得同时计入分包与自有修复产出 |
| upstream_dataset_requirement | 实际新增保护套管、清洁剂、擦拭物、密封材料、公用工程、进入、运输及共享资产供应链须具备技术/地域/期间适用的上游覆盖。仅在实际单位兼容、确切包含工作有证据且无重叠时，供应商服务才可替代直接资源 |
| disclosure | 声明保留接口状态、隔离、纤型/余长、批次/期间、实际材料及能源台账边界、所有尝试、共同接头盒/测试分配、外部服务、资产及释放；缺失信息不得当作零 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| repair_gate | splice_repair | 保留一体责任以连接左右既有纤端与新的保护接口；保留盒体/盘纤器接收受保护连接。除非有实际独立清单交接证据，准备、电弧/加热、验证和密封应属于同一过程。完成状态及签署关卡须包含实际机械及光学检查、保护、布纤和接头盒验收。 | corning-single-fibre-fusion-2020; corning-retained-closure-2019 |
| incremental_scope | splice_repair | 纳入实际新增隔离/进入/遮蔽、清洁、锐物收集、密封件更换、批准测试气体或压缩机操作、失败尝试、复测、运输和撤场，即使由供应商付费。保留光缆和接头盒为状态输入；检查作业损伤，需换盒体/插入光缆段则阻止本路线。 | corning-single-fibre-fusion-2020; corning-retained-closure-2019 |
| event_and_asset_phases | splice_repair | 按作业、接头盒和事件期间索引每次设置、清洁/转换、纤对尝试、接头盒测试和最终验收。跨所有使用作业另列工具制造、维护/更换、服务期及终止/报废；期初/期末库存携带实际上游负荷跨期结转。 |  |
| physical_ledger | all inventory rows | 每种材料选择总收货并显式记录外部输出或仅消耗采购处理，两者互斥。总量先扣实际皮重、后处理外退。投加/使用为中间活动；最终安装/保留目的地须排除另记废物/释放/退回。内部领用不是第二次外收；期末库存不是对外交换。 |  |
| whole_gas_and_species | closure_test_gas; elementary_releases | 整股洁净空气/氮气混合物物理台账记录实际释放质量及最终目的地，不是通用基本流气体排放。基本流组分须有身份/组成/去向/介质证据，且与整股混合物视图不可相加。实际接头盒批准的压力/扭矩及释压程序控制作业，不设通用参数。 | corning-retained-closure-2019 |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：新增准备清洁收集及进入防护消耗品 (`preparation_consumables`)

过程／待建立交换的方向／类型：`splice_repair` / `inputs` / `product`.

将实际擦拭物、锐物容器、吸附物、准备/盒体清洁用水及临时防护材料展开为分别标识的具体流。区分一次性材料与可重复资产分配。标明供水和废水责任；有实际未使用/未产生的记录的材料不虚设采购。

- 采集对象：新增准备清洁收集及进入防护消耗品
- 流属性/单位：Mass / kg
- 数量规则：各实际材料归属(opening_stock + gross_receipt - closing_stock) kg / N，匹配库存负荷/退回约定并有自身原生单位换算支持，不同单位不相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`corning-single-fibre-fusion-2020`; `corning-retained-closure-2019`

范围证据需求：须有实际准备、现场暴露、清洁及收集日志、供应身份及实测质量/原生单位换算；无通用擦拭物/水/吸附物定额。

#### 采集要求：实际新增保留接头盒重新密封材料 (`closure_reseal_materials`)

过程／待建立交换的方向／类型：`splice_repair` / `inputs` / `product`.

按兼容接头盒说明和实际SKU展开替换密封件/垫片、润滑脂、胶带及其他批准材料。保留盒体/盘纤器及未变密封件不是新材料。套件供应与组分供应互斥，共同接头盒作业仅计一次。

- 采集对象：实际新增保留接头盒重新密封材料
- 流属性/单位：Mass / kg
- 数量规则：实际新增同SKU归属(opening_stock + gross_receipt - closing_stock) kg / N，匹配库存负荷/退回约定，必要时有实测匹配单位质量或密度。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`corning-retained-closure-2019`

范围证据需求：采集实际接头盒型号/重新开启说明、复用/更换决定和实测供应；有日期的示例规程不提供通用密封质量或每纤套件范围。

#### 采集要求：修复设备及进入作业实际直接燃料供应 (`direct_fuel`)

过程／待建立交换的方向／类型：`splice_repair` / `inputs` / `product`.

按配方展开实际发电机/进入设备或直接建模车辆燃料。采用总收货/库存/最终出口；购买运输服务时排除其已覆盖直接燃料。有实际纯电运行证据时燃料可条件性为零，不设最低值。

- 采集对象：修复设备及进入作业实际直接燃料供应
- 流属性/单位：Mass / kg
- 数量规则：归属批次(opening_stock_kg + gross_receipt_kg - closing_stock_kg) / N，匹配库存负荷/退回约定；burned_kg另行核对作为排放活动。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`

范围证据需求：须有实际燃料类型、净收货、期初/期末库存、燃烧证据和最终泄漏/退回/废物去向。不得从租赁小时或通用消耗因子推断燃烧。

#### 采集要求：实际购买的修复物流运输服务 (`transport_service`)

过程／待建立交换的方向／类型：`splice_repair` / `inputs` / `product`.

仅在真正交付兼容质量距离服务时记录实际购买的人员设备、物料及移除物货运/服务路段。小时或车公里价格不能建立吨公里。直接建模车辆资源由燃料、电力、资产和释放负责一次，不属于此服务。

- 采集对象：实际购买的修复物流运输服务
- 流属性/单位：mass*distance / t*km
- 数量规则：实际不重叠归属sum(payload_net_tonnes * route_km) t*km / N，声明空载/回程分配且不与直接车辆重叠。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

范围证据需求：采集实际起讫点、载荷、路线距离、回程/空载及供应商边界；拒绝假设平均运距或由修复价格换算吨公里。

#### 采集要求：分配的完整寿命修复工具及进入资产供应 (`shared_asset_supply`)

过程／待建立交换的方向／类型：`splice_repair` / `inputs` / `product`.

将实际熔接机/加热器、切割刀、剥纤钳、光学测试器/光源/接收机、可重复锐物/工具、充电器/电池、遮蔽/进入设备及适用气瓶展开为实际资产身份。分配包含全部作业/节点/期间的制造、维护、更换及报废，排除直接运行与已负责的备件/消耗品/供应商覆盖。只有完整范围/结果及实际兼容参考单位有记录时，有界租赁才能替代。

- 采集对象：分配的完整寿命修复工具及进入资产供应
- 流属性/单位：Count / item
- 数量规则：各实际完整寿命资产driver_job / driver_all_consumers的item，再 / N，关联完整制造、维护、更换及报废负荷和所有使用方期间。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

范围证据需求：须有完整已观察寿命，或已观察历史加有依据剩余寿命、更换/终止/报废情景、不确定性及更新触发；所有使用方兼容驱动量分母为必需。无通用工具寿命或价格小时转item。

#### 采集要求：实际对外可复用材料退回 (`outward_material_returns`)

过程／待建立交换的方向／类型：`splice_repair` / `outputs` / `product`.

按材料身份及保管和实物交接记录展开实际跨边界退回的未使用洁净质量计量物料/燃料/气体。原生计数套管退回属于outward_protector_returns，不属于本质量卡。边界内期末库存不是外退。不预设退回或避免生产信用。

- 采集对象：实际对外可复用材料退回
- 流属性/单位：Mass / kg
- 数量规则：质量计量材料实际归属外退return_native_quantity kg / N；与期末库存及原生计数套管退回区分。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

范围证据需求：采集实际退回质量计量物料身份、状态、净质量、接收方及保管和实物交接记录。无通用退回率，不强制原生套管退回Count转Mass。

#### 采集要求：实际对外未使用保护套管退回 (`outward_protector_returns`)

过程／待建立交换的方向／类型：`splice_repair` / `outputs` / `product`.

记录发往已标识接收方并有保管及实物交接记录的实际未使用匹配套管SKU Count。原生数量退回与安装/丢弃套管及期末库存分开；除非独立质量视图有必要且有证据，否则不要求质量换算。不预设避免生产信用。

- 采集对象：实际对外未使用保护套管退回
- 流属性/单位：Count / item
- 数量规则：实际归属同SKU未使用return_native_quantity item / N；保留原生Count，不强制换质量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

范围证据需求：采集匹配SKU、实际未使用退回Count、状态、接收方及保管和实物交接记录。无通用退回率，不得由混合废物kg推断Count。

#### 采集要求：移除的光纤玻璃锐物及相关涂覆废物 (`fibre_sharps`)

过程／待建立交换的方向／类型：`splice_repair` / `outputs` / `waste`.

在受控且已标识收集中记录保留光纤切回/切割产生的实际玻璃锐物和涂层碎片，包括重复准备。按真实责任/组成展开独立组分或实际复合废物，不计新光纤制造，不替代为通用原生玻璃。

- 采集对象：移除的光纤玻璃锐物及相关涂覆废物
- 流属性/单位：Mass / kg
- 数量规则：实际归属净废物kg / N；微量无法直接称量时须验证匹配实测切除长度/单位质量换算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`corning-single-fibre-fusion-2020`

范围证据需求：须有实际移除长度/涂层/光纤几何或校准净称量、容器皮重及去向证据；不提供通用切回长度、玻璃密度或损失率。

#### 采集要求：实际丢弃套管擦拭物密封件包装及收集废物 (`other_solid_waste`)

过程／待建立交换的方向／类型：`splice_repair` / `outputs` / `waste`.

按实际污染和授权接收方展开失败套管、使用后擦拭物/吸附物、更换密封件、包装及其他固废。cp_materials另存丢弃套管Count，不以混合废物实测kg替代。捕集清洁剂/燃料属于本实际废物，不是额外环境释放。

- 采集对象：实际丢弃套管擦拭物密封件包装及收集废物
- 流属性/单位：Mass / kg
- 数量规则：按不重叠流/接收方记录实际归属净废物kg / N，排除另负责光纤锐物/废水，保留丢弃原生套管Count。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`

范围证据需求：采集分选/组成、净皮重、适用失败/丢弃SKU Count及接收路线；无通用危险分类或废物转产品信用。

#### 采集要求：向声明受纳介质的实际已识别基本流释放 (`elementary_releases`)

过程／待建立交换的方向／类型：`splice_repair` / `outputs` / `elementary`.

仅在物质/组分或粒径身份及空气/水/土壤介质明确后，展开实际常规清洁剂挥发、燃烧组分、泄漏/测试气体组分和事故释放。采用实测结果或有效组成/去向/活动因子计算。整股燃料/清洁剂/测试混合气与组分视图不可相加；捕集残余仍为废物或库存。不明残差不是排放，禁止通用VOC/NOx/油混合物近似身份。

- 采集对象：向声明受纳介质的实际已识别基本流释放
- 流属性/单位：Mass / kg
- 数量规则：各实际物质-介质实测或有效活动因子/组成去向释放kg / N，排除捕集/退回/保留部分及重复整股混合物视图。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`

范围证据需求：提出范围前须采集实际物质/介质、配方、实测质量或有效因子范围、活动/状态/去向及不确定性。低VOC/SDS/认证或质量平衡残差不是释放因子或零证据。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| splice_repair | 单纤修复与保留接头盒验收一体过程 | required | 已声明长途陆地单模单纤路线，保留光缆/纤端/余长/接头盒合格 | 单一连接及最终验收责任；区分保留左右纤端、新保护套管及实际更换密封件角色；有限接头盒批次及失败尝试返工回路 | 1 item验收纤对修复 |

一体节点负责隔离/进入、纤端准备、电弧连接、分别机械/光学评估、保护/布纤及共同接头盒密封/检查。保留纤端及宿主接口角色属于状态证据，不是新供交换。实际外购连接作业须有已完成范围/单位和互斥资源责任；电弧及套管加热不是独立能量转换节点。

按批次、接头盒、纤对/尝试及期间索引所有材料、充电、设置、清洁/转换、测试及移除事件。机械/光学不合格接续在splice_repair内部返回重新准备/熔接，保留先前负荷及产生的锐物/套管；密封不合格返回盒体作业及复测。拒收或缺陷未关闭均不计最终产品；回收/退回/废物去向保持标识。共享设置/密封/测试批次负荷按因果驱动量仅向验收纤对分配一次，适用时单独计量个体负荷。
保留左右纤端、光缆/盘纤器及可用接头盒为可追溯状态接口角色，本修复对其新制造归属为零；实际新增准备、状态确认及修复造成损伤的负荷仍须负责。

### 过程：单纤修复与保留接头盒验收一体过程 (`splice_repair`)

#### 输入

##### 产品流

###### 匹配的单纤热缩熔接保护套管 (`splice_protectors`)

记录与实际光纤和盘纤器匹配的新供保护套管。安装数量、失败/更换数量、未使用外退及库存分别记录；重新开盒不代表重新购买保留套管。套管内含部件仍属于其供货边界。

- 选定流：匹配的单纤热缩熔接保护套管
- 流属性/单位：Count / item
- 数量规则：同SKU归属(opening_stock + gross_receipt - closing_stock)的item / N，携带库存上游负荷；仅消耗约定只扣一次匹配外退供应，核对实际安装/丢弃/退回Count。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`corning-single-fibre-fusion-2020`

范围证据需求：建立每连接套管范围前，须采集匹配SKU、验收/失败/更换/丢弃Count、期初/期末库存及总收货。不得假设通用尺寸、一次成功率或质量。

###### 实际批准的光纤清洁剂配方 (`fibre_cleaner`)

逐一标识实际批准清洁剂配方、SDS、供应浓度及包装边界。记录扣皮重收货、库存、退回、实际清洁用量、捕集残余及有证据的释放；合格实际路线有无化学品证据时，不强制虚设化学品。

- 选定流：实际批准的光纤清洁剂配方
- 流属性/单位：Mass / kg
- 数量规则：实际配方归属(opening_stock + gross_receipt - closing_stock) kg / N，匹配库存负荷/退回约定，体积记录须有效实际密度换算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`corning-single-fibre-fusion-2020`

范围证据需求：采集该纤对/接头盒作业实际配方、净数量及使用/回收记录；SDS组成不是排放因子，也不能建立通用用量范围。

###### 修复充电加热测试及进入作业归属电力 (`electricity_supply`)

纳入熔接机、加热器、OTDR/光源/接收机、电池充电在声明计量边界内的损失、照明/遮蔽/进入以及实际采用本地压缩机的用电。将作业前后充电匹配到本作业；仅电弧估算遗漏其他负荷。购买气体与压缩机为同一测试气体供应的互斥责任。

- 选定流：修复充电加热测试及进入作业归属电力
- 流属性/单位：Energy / MJ
- 数量规则：不重叠归属实测及共享充电电力MJ / N，记录kWh用3.6 MJ/kWh，有证据的shared_driver_job/shared_driver_total分配。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_power`
- 来源：`corning-single-fibre-fusion-2020`; `corning-retained-closure-2019`

范围证据需求：建立能源范围前须采集充电/电表边界、校准读数、电量状态/时间证据及批次驱动量；无通用单次电弧、套管加热或充电因子。

###### 实际购买的批准接头盒测试气体 (`closure_test_gas`)

仅在接头盒说明及实际修复要求时记录实际购买洁净干燥空气或氮气配方。本地压缩机空气改由电力/燃料/资产及实测气体台账负责，不再计第二次购买供应。临时测试/释放及复测关联接头盒ID；气瓶通常为可重复资产，除非实际包装供应含有它。

- 选定流：实际购买的批准接头盒测试气体
- 流属性/单位：Mass / kg
- 数量规则：购买批次归属(opening_mass_kg + gross_receipt_kg - closing_mass_kg) / N，匹配库存负荷/退回约定；压缩机气体仅为不重复活动证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gas`
- 来源：`corning-retained-closure-2019`

范围证据需求：采集气源、组成、实际净质量或经状态校正体积/密度、测试次数及批准参数/结果。示例接头盒不提供通用瞬时泄漏测试压力、时长或质量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收长途单模单纤对熔接修复服务 (`accepted_fibre_pair_repair`)

唯一最终参考产品为一条已标识、由兼容保留单模纤端形成的连接，须通过实际机械判据、校准光学验收、热缩保护/满足弯曲要求布纤及所属保留接头盒重新密封/要求检查，并获业主签署。最终唯一验收ID定义N；重复失败电弧、尝试或套管不是额外产出。

- 选定流：已验收长途单模单纤对熔接修复服务
- 流属性/单位：Count / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`corning-single-fibre-fusion-2020`; `corning-retained-closure-2019`

范围证据需求：恰为1 item是声明归一化定义，即正数唯一最终验收N的N/N，不是经验成品率或寿命范围。实际纤型、程序、机械判据、波长/光学阈值及接头盒检查仍须作业证据。

##### 废物流

###### 实际收集的清洁或事故废水 (`wastewater`)

记录实际送往处理的收集液体清洁残余或事故水，注明组成及责任。溶解清洁剂/污染物包含在废混合液中。采用封闭干式清洁且无废水时记录实际未使用/未产生的记录；未受控排放须另有组分/介质证据。

- 选定流：实际收集的清洁或事故废水
- 流属性/单位：Mass / kg
- 数量规则：实际归属实测废水kg / N；体积记录须有效实际密度/状态/温度/来源换算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`

范围证据需求：采集实际体积/质量、污染物、处理接收方及适用无排放证据；不得从SDS推断废水或零排放。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| individual_and_common | all inventory rows | 将个体实测修复资源分配到纤对ID。实际共同接头盒/设置/测试/转换资源按有记录的因果实测驱动量在所有受益验收纤对间划分；先核对份额总和等于完整批次数量，再除N。不得对每根纤维分别计整盒/整轮测试。不预设联产品；实际可复用外退为独立退回，不自动给避免信用。 |  |
| retain_failed_attempts | splice_repair | 将所有机械/光学失败接续及密封/复测负荷留在原始批次。返工关联splice_repair；每个最终验收纤对ID仅计一次，丢弃锐物/套管/密封件保留实际出口。无验收批次不能形成有效正N数据集，须另行披露。 | corning-single-fibre-fusion-2020; corning-retained-closure-2019 |
| asset_and_period_allocation | shared_asset_supply | 按兼容实测服务驱动量将每项实际完整寿命资产分配到所有作业/节点/期间，包括无关作业。采用完整已观察寿命，或已观察历史加有证据的剩余服务、维护/更换、终止/报废情景，并提供不确定性/敏感性/更新。分子分母边界一致；缺少寿命覆盖或分母阻止最终数据集。直接运行/备件/供应商包互斥。 |  |
| stock_and_provider_ownership | all inventory rows | 期初/期末库存携带上游负荷跨实际期间；核对收货、内部领用及最终目的地而不重复计量。购买运输、气体/压缩机、套件/组分及租赁/直接资产各有一名已记录责任方；价格/小时不定义流数量也不免除完整覆盖。 |  |
| campaign_supply_attribution | splice_protectors; fibre_cleaner; preparation_consumables; closure_reseal_materials; direct_fuel; closure_test_gas | 批次供应量为同一SKU/原生单位及上游负荷边界的期初结转库存加新外部收货减期末结转库存。仅用新收货/N不能代表修复供应。总收货带出口约定保留实际退回为输出；仅消耗约定只扣一次匹配退回供应。用于排放活动的燃料燃烧量与供应量另行区分。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | splice_repair | 最终验收连接及所有尝试/关卡状态 | foreground_record | job_id; campaign_id; closure_id; fibre_pair_id; left_fibre_type; right_fibre_type; compatibility; slack_length; isolation_authorisation; attempt_id; splicer_id; program; mechanical_criterion; mechanical_result; optical_method; wavelengths; threshold; optical_reading_forward; optical_reading_reverse; bidirectional_average; calibrated_result; protector_id; organiser_route; closure_instruction; seal_result; required_leak_check; defects_closed; acceptance_signature; event_period; N | 核对授权网络/功能、兼容纤端及余长，记录每次失败/返工尝试。按实际波长/判据分别读取机械结果与校准光学结果；OTDR接续损耗计算双向平均。仅在保护/布纤及所属保留接头盒关卡完成后释放，计唯一最终验收ID。 | item; 实际测试单位；声明长度 | 每次尝试、测试及最终交接 | 动员/隔离至批次最终验收 | 声明作业/接头盒及所有相关共享使用方 | 每参考流 | 签署关卡记录、校准测试、接头盒追溯；不得用目视估计替代 |
| cp_materials | splice_repair | 原生单位供应库存最终目的地及实际外退 | foreground_record | job_id; campaign_id; closure_id; fibre_pair_id; attempt_id; period; material_id; SKU; formulation; SDS; native_property; native_unit; ledger_convention; opening_stock; gross_receipt; tare; closing_stock; installed_retained_final; discarded_native_quantity; return_native_quantity; release_native_quantity; internal_issue; used_activity; native_quantity; matching_unit_mass; volume_unit; density; state; temperature; conversion_source; destination; upstream_carry | 测量先扣皮重、未净除退回的实际总收货和期初/期末库存；保留每种材料Count/Length/Mass/Volume原生台账。标识实际最终安装去向及丢弃/退回/释放原生数量。Count质量换算仅采用实际匹配SKU单位质量；体积换算仅采用实际密度/状态/温度/来源。投加/使用仅为活动，不是额外最终目的地。 | 实际原生单位；质量展开用kg | 每次收货、领用、使用、库存及出口 | 同一批次及库存跨期 | 声明作业/接头盒及所有相关共享使用方 | 每参考流 | 交付/称量记录、实际丢弃套管Count、换算证据、保管及实物交接、库存结转及边界核对 |
| cp_power | splice_repair | 计量修复及压缩机电力并包含充电 | foreground_record | job_id; campaign_id; closure_id; period; device_id; meter_boundary; meter_start; meter_end; meter_unit; charging_event; battery_state_start; battery_state_end; charging_loss_scope; shared_driver_job; shared_driver_total; supplied_compressor_scope; overlap_exclusions | 读取校准且不重叠的电表/充电器，以有证据的驱动量/电量状态分配作业前后充电。纳入加热/测试/进入/照明/压缩机实际负荷及声明边界内充电损失；不得以电弧次数作为能源。 | kWh或MJ; 量纲兼容驱动量 | 每次运行/充电事件 | 批次及归属充电期间 | 声明作业/接头盒及所有相关共享使用方 | 每参考流 | 计量校准、充电分配、损失边界及互斥覆盖 |
| cp_fuel | splice_repair | 直接实际燃料供应燃烧及未燃烧去向 | foreground_record | job_id; campaign_id; period; plant_id; fuel_id; formulation; opening_stock_kg; gross_receipt_kg; tare_kg; closing_stock_kg; nonburned_return_kg; nonburned_waste_kg; uncontained_whole_fuel_kg; spill_total_audit_kg; recovered_spill_destination; burned_kg; measured_activity; factor_source; provider_overlap | 采用同范围扣皮重物理燃料台账，按实测运行核对燃烧。总泄漏只作审计；回收泄漏只进入一次最终库存/退回/废物。保留回收燃料归期末库存，不再减除。核对车辆/发电机直接范围与购买服务。 | kg; 活动/因子单位 | 每次收货、运行、事故及库存边界 | 同批次、归属运行及库存期间 | 声明作业/接头盒及所有相关共享使用方 | 每参考流 | 燃料身份、保管及实物交接、库存/燃烧核对、事故去向及重叠证据 |
| cp_gas | splice_repair | 购买或本地压缩接头盒测试气体及最终出口 | foreground_record | job_id; campaign_id; closure_id; period; source_mode; gas_identity; composition; opening_mass_kg; gross_receipt_kg; closing_mass_kg; outward_return_kg; other_final_outlet_kg; released_whole_gas_kg; volume; volume_unit; pressure; temperature; density; state; conversion_source; required_test; test_result; compressor_energy_owner; repeat_test_id | 测量实际净气体质量或有效状态校正体积换算；记录购买/压缩机模式及要求的重复/释放事件。整股混合物最终去向与有证据基本流组分分开；实际接头盒批准程序控制参数。 | kg; 实际体积/状态单位 | 每次接头盒测试及气体库存移动 | 批次/复测及供应期间 | 声明作业/接头盒及所有相关共享使用方 | 每参考流 | 实际接头盒说明、气体组成/状态换算、测试结果及互斥供应责任 |
| cp_transport | splice_repair | 实际购买运输质量距离及直接模式排除 | foreground_record | job_id; campaign_id; period; leg_id; provider; mode; origin; destination; payload_net_tonnes; route_km; empty_return_scope; provider_service_boundary; service_unit; direct_resource_owner; allocation_driver | 读取每个购买质量距离路段的实际交付/运输记录及距离。记录空载/回程分配及供应商覆盖；无实际兼容服务证据不得由人员小时/价格/车公里换成吨公里。 | t; km; t*km | 每个路段 | 实际动员至移除/撤场 | 声明作业/接头盒及所有相关共享使用方 | 每参考流 | 载荷/路线记录、实际服务单位、空载路段及直接资源互斥 |
| cp_assets | splice_repair | 完整寿命共享资产全部使用方及期间 | foreground_record | asset_id; configuration; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; observed_history; completed_observed_life; prospective_remaining_service; remaining_service_source; termination_scenario; uncertainty; sensitivity; update_trigger; job_id; node_id; period; consumer_register; driver_unit; driver_job; driver_all_consumers; bundle_exclusions; operating_resource_owner; upstream_coverage | 建立实际工具/进入资产完整寿命清单，列举所有作业/节点/期间、维护/更换及终止/报废。分子及所有使用方分母采用兼容实测驱动量；未完整观察寿命须论证剩余寿命情景。排除直接运行/备件/其他服务重叠。 | item 完整资产当量；兼容实际驱动量 | 每次使用及寿命/情景更新 | 完整已观察寿命或已观察历史加有依据预期剩余及报废 | 声明作业/接头盒及所有相关共享使用方 | 每参考流 | 完整覆盖/分母、情景来源及敏感性；缺覆盖阻止最终数据集 |
| cp_waste | splice_repair | 移除材料实际净废物及去向 | foreground_record | job_id; campaign_id; closure_id; attempt_id; period; waste_stream_id; material_origin; contamination; net_mass_kg; tare_kg; removed_length; length_unit; matching_unit_mass; measured_conversion_source; volume; density; state; temperature; destination; receiver; custody; captured_material_owner; treatment_scope | 扣容器皮重称量实际分类废物；微量光纤以实际涂层/纤型验证实测长度/单位质量换算。另存丢弃原生Count。实际废水及捕集残余记录保管及实物交接，不重复组分释放。 | kg; 实际长度/体积换算单位 | 每次收集/出口及失败尝试 | 所有准备、返工、密封及最终清理 | 声明作业/接头盒及所有相关共享使用方 | 每参考流 | 校准净测量、换算/组成及接收方记录；无通用废物类别 |
| cp_emissions | splice_repair | 实际组分-介质常规及事故释放 | foreground_record | job_id; campaign_id; closure_id; period; event_id; event_owner; substance_identity; species_or_particle_size; receiving_medium; measurement_method; measured_release_kg; actual_activity; activity_unit; emission_factor; factor_unit; factor_source; composition_fraction; fate_fraction; state_conditions; captured_fraction; whole_mixture_owner; uncertainty | 先标识实际组分/粒径及受纳介质，采用实测或单位与范围匹配的有效活动因子/组成去向模型。区分常规/事故责任；整股混合物台账不可与组分相加；排除库存、捕集、退回和废物。残差不能直接填入释放。 | kg; 匹配的活动/因子单位 | 每类实际常规/事故及监测事件 | 批次及归属运行期间 | 声明作业/接头盒及所有相关共享使用方 | 每参考流 | 物质/介质证据、实测或有效因子来源、去向及不确定性；不得由SDS推断排放 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_normalisation | splice_protectors; fibre_cleaner; preparation_consumables; closure_reseal_materials; electricity_supply; direct_fuel; closure_test_gas; transport_service; shared_asset_supply; outward_protector_returns; outward_material_returns; fibre_sharps; other_solid_waste; wastewater; elementary_releases | 每参考流清单量 = 自身原生单位的完整批次归属数量 / N；N = 全部关卡完成后唯一最终验收纤对ID。个体和共同资源只分配一次；N为零时无有效正N数据集。 | cp_acceptance; each applicable own-node collection protocol; attributable campaign amount; N | 每1 item验收修复的各实际交换 |  |
| material_ledger | splice_protectors; fibre_cleaner; preparation_consumables; closure_reseal_materials; outward_protector_returns; outward_material_returns | 每SKU/原生单位批次供应量 = opening_stock + gross_receipt - closing_stock，匹配同SKU/单位的结转上游负荷。总收货带出口保留实际外退为输出；仅消耗只扣一次匹配退回供应。物理核对：opening_stock + gross_receipt = closing_stock + installed_retained_final + discarded_native_quantity + return_native_quantity + release_native_quantity。总收货先扣皮重再处理退回；used_activity/internal_issue不可相加。总收货带出口记录总量及每个出口；仅消耗供应仅排除一次对应外退供应，不混用约定。质量换算：Count * matching_unit_mass或Volume * density，仅在实际匹配单位/状态/温度/来源齐备时采用。 | cp_materials; opening_stock; gross_receipt; closing_stock; installed_retained_final; discarded_native_quantity; return_native_quantity; release_native_quantity; native_quantity; matching_unit_mass; density; conversion_source | 核对的实际原生供应/退回及支持的质量展开 |  |
| electricity_total | electricity_supply | 归属MJ = 不重叠实测kWh * 3.6 MJ/kWh + 实测MJ + 共享充电MJ * shared_driver_job / shared_driver_total。同边界实测总量已含损失时不得再加；仅压缩机模式纳入实际本地压缩机电力。 | cp_power; meter_start; meter_end; meter_unit; shared_driver_job; shared_driver_total; supplied_compressor_scope | accepted_normalisation之前的归属电力MJ |  |
| fuel_burn_balance | direct_fuel | 批次燃料供应量 = opening_stock_kg + gross_receipt_kg - closing_stock_kg，携带匹配上游负荷；总收货带出口保留外退输出，仅消耗只扣一次匹配退回供应。另行计算burned_kg = opening_stock_kg + gross_receipt_kg - closing_stock_kg - nonburned_return_kg - nonburned_waste_kg - uncontained_whole_fuel_kg。所有未燃烧出口为互斥最终去向；保留回收泄漏仍在closing_stock_kg，spill_total_audit_kg不减除。采用实际选定总量/消耗供应约定，不重复净除出口。 | cp_fuel; opening_stock_kg; gross_receipt_kg; closing_stock_kg; nonburned_return_kg; nonburned_waste_kg; uncontained_whole_fuel_kg | accepted_normalisation之前的实际燃烧燃料及供应台账 |  |
| gas_ledger | closure_test_gas | 购买气体批次供应量 = opening_mass_kg + gross_receipt_kg - closing_mass_kg并匹配上游负荷结转；总收货带出口保留实际退回输出，仅消耗只扣一次匹配退回供应。物理核对：opening_mass_kg + gross_receipt_kg = closing_mass_kg + outward_return_kg + other_final_outlet_kg + released_whole_gas_kg，各出口互斥。购买气量遵循实际供应台账；压缩机模式气体为活动，电力/燃料/资产另负责，不重复购买气体。体积换算须实际状态/压力/温度/组成/密度/来源。 | cp_gas; opening_mass_kg; gross_receipt_kg; closing_mass_kg; outward_return_kg; other_final_outlet_kg; released_whole_gas_kg; source_mode; density; conversion_source | accepted_normalisation之前的实际整股气体供应及物理核对 |  |
| transport_activity | transport_service | 购买运输活动 = 不重叠leg_id的实际payload_net_tonnes * route_km之和，含声明供应商空载/回程分配。直接模式车辆资源排除在购买服务覆盖之外。 | cp_transport; payload_net_tonnes; route_km; leg_id; empty_return_scope; allocation_driver | accepted_normalisation之前的实际归属t*km |  |
| asset_service_share | shared_asset_supply | 一项实际完整寿命资产的完整资产当量 = driver_job / driver_all_consumers。该当量关联完整manufacture_scope + maintenance_scope + replacement_events + end_of_life_scope；分母覆盖同寿命范围全部作业/节点/期间。必要时使用已观察历史加有依据剩余寿命并披露不确定性/敏感性；不得只分配购价或省略寿命阶段。 | cp_assets; driver_job; driver_all_consumers; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; prospective_remaining_service; termination_scenario | accepted_normalisation之前的实际完整资产当量及关联上游寿命负荷 |  |
| waste_total | fibre_sharps; other_solid_waste; wastewater | 实际废物质量 = 不重叠已标识流中net_mass_kg之和；收集总量扣皮重。微量光纤或液体换算须匹配实测换算/状态证据。已含在废物中的捕集清洁剂/燃料不是第二份可相加废物或排放。 | cp_waste; net_mass_kg; tare_kg; removed_length; matching_unit_mass; measured_conversion_source; volume; density | accepted_normalisation之前按流/接收方的实际废物kg |  |
| species_release | elementary_releases | 组分释放kg = 实际measured_release_kg，或actual_activity * 有效emission_factor，或实际整股供给/使用质量 * composition_fraction * 有证据fate_fraction；每事件/组分/介质选择一个有依据方法。单位/状态/覆盖一致；排除捕集库存/退回/废物，不加整股混合物与组分视图。 | cp_emissions; measured_release_kg; actual_activity; emission_factor; factor_source; composition_fraction; fate_fraction; captured_fraction; whole_mixture_owner | accepted_normalisation之前的实际组分-介质kg |  |
| otdr_bidirectional | accepted_fibre_pair_repair | 每个声明波长的准确OTDR接续损耗 = (optical_reading_forward + optical_reading_reverse) / 2，须匹配校准轨迹/事件；与实际业主阈值比较，并独立判断实际机械判据。 | cp_acceptance; optical_reading_forward; optical_reading_reverse; wavelengths; threshold; mechanical_criterion | 实际bidirectional_average及独立关卡判定 | corning-single-fibre-fusion-2020 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceable_acceptance | accepted_fibre_pair_repair | 实际长途陆地功能、兼容纤端ID/余长、独立机械及光学关卡、保护/布纤和所属保留接头盒验收为必需，不设通用损耗/扭矩/压力。 | cp_acceptance；实际业主判据及接头盒说明；corning-single-fibre-fusion-2020; corning-retained-closure-2019 |
| complete_campaign | all inventory rows | 所有尝试、清洁/设置/转换、重密封/复测、归属充电、最终出口及撤场覆盖完整实际期间；条件资源未使用须实际记录，未知仍为缺口。 | 事件登记及所有关联本节点协议 |
| balance_and_units | splice_protectors; fibre_cleaner; preparation_consumables; closure_reseal_materials; direct_fuel; closure_test_gas; outward_material_returns | 核对原生单位、皮重、库存、实际丢弃Count、独立最终去向和上游库存结转；不得以残差推排放或混合废物推Count。 | cp_materials; cp_fuel; cp_gas；换算/保管及实物交接记录 |
| assets_and_service | shared_asset_supply; transport_service | 实际完整上游范围、兼容单位/驱动量、全部使用方/寿命阶段及剩余寿命情景覆盖为必需；缺分子/分母或供应商覆盖阻止最终数据集。 | cp_assets; cp_transport；上游供应及互斥矩阵 |
| release_specificity | elementary_releases | 须明确物质/组分/粒径、介质、有效数量方法/因子/去向及不确定性。不得近似通用VOC/NOx、由SDS推排放或整股混合物/组分重复。 | cp_emissions；实际测量/因子证据 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_route | splice_repair | 本类别拒绝本地/FTTH/海底/电力/多模/带状/机械/连接器或新插段/盒体作业。路线指定前验证长途陆地网络功能、保留可用接口、兼容既有纤端和足够余长。 | un-cpc3-2025; corning-single-fibre-fusion-2020 |
| validate_gate | accepted_fibre_pair_repair | 要求实际机械判据/结果、校准光学方法/波长/阈值/结果、准确接续损耗采用OTDR双向平均、保护/布纤及所属接头盒密封/要求检查，关闭缺陷并获业主签署。仅熔接机估计损耗、套管加热或盒数不能通过。 | corning-single-fibre-fusion-2020; corning-retained-closure-2019 |
| validate_count_rework | all inventory rows | N须为正数唯一最终验收纤对ID；排除未解决/拒收尝试，保留全部前序尝试负荷。核对事件、设置/转换、测试/复测、充电及废物与批次/接头盒/期间，避免共同作业负荷重复分配。 |  |
| validate_balance | all inventory rows | 按一个声明约定核对自身原生单位库存、扣皮重总收货及互斥安装/保留/退回/废物/释放出口。验证实际丢弃套管Count、匹配单位质量及密度/状态换算。燃料总泄漏仅审计；整股气体/流体平衡不是通用基本流交换。 |  |
| validate_assets_periods | shared_asset_supply; transport_service | 列举全部资产/服务使用方及期间，并包含制造、维护/更换、终止/报废；论证剩余寿命、分母、不确定性/敏感性及更新。缺寿命/供应商范围、单位换算无支持或重叠阻止最终数据集。保留库存上游结转且不重复归属。 |  |
| validate_releases | elementary_releases | 须有实际物质-介质和实测或有效活动因子/组成去向证据；区分常规/事故及整股混合物/组分视图。捕集残余只归实际废物/库存/退回一次，不作为环境释放。 |  |
| validate_final_exchange | all inventory rows | 构建最终过程前，将每个实际展开的下游交换解析为一个已验证具体流及兼容属性/单位。条件伞形卡不是固定身份；分别披露实际未使用/未产生、未解析和不完整数据。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 具有来源支持路线、实际采集协议及透明归一化的前景修复数据包 |
| downstream_use | secondary_dataset; background_dataset；有界下游process或lifecyclemodel投影 |
| allowed_use | 实际声明业主/接头盒关卡处，具有兼容时间/地域/技术范围的长途陆地单模单纤熔接修复配置 |
| excluded_use | 本地/FTTH、新线路/光缆插段/盒体、电力/海底、多模/带状批量/机械/连接器作业；后续网络运行或避免停机/更换信用；通用性能或寿命等效 |
| required_metadata | 网络/作业/批次/接头盒/纤对ID；实际保留状态及余长；程序/套管/盘纤器；机械/光学判据及结果；接头盒关卡/验收；N；尝试/期间；材料/能源/服务/资产边界；具体身份及单位；上游覆盖 |
| required_quality_disclosure | 实际实测与计算数量；原生台账及换算；共同负荷分配；库存结转；完整资产寿命/全部使用方驱动量及未来情景不确定性；供应商重叠；释放/组分；未解决证据及身份限制 |
| update_trigger | 网络功能、兼容纤型/余长、熔接机/套管/接头盒说明、实际判据、投入配方/供应商、供应/资产/服务边界、实测批次表现、剩余寿命/报废情景或释放证据改变 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国统计司，CPC第3.0版解释性说明，2025年6月30日，印刷页286；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 长途通信线路修复分类范围及本地线路排除；不是流数量或方法因子 |
| corning-single-fibre-fusion-2020 | handbook | Corning AN103，《单纤熔接》，2020年5月发布、替代2009年6月版，第1-8页；https://www.corning.com/content/dam/corning/catalog/coc/documents/application-notes/AN103.pdf | 兼容单纤电弧路线、准备、独立机械/光学评估、准确双向OTDR损耗、保护及满足弯曲要求整理；实际采用说明与业主判据控制 |
| corning-retained-closure-2019 | handbook | Corning SRP 78-8130-1910-2，第9版，2019年8月，第8-11节，尤其第15-17页；https://www.corning.com/catalog/coc/documents/standard-recommended-procedures/H78-8130-1910-2-9.pdf | 保留接头盒盘纤/密封及临时洁净干燥空气/氮气瞬时泄漏检查/释放/重新开启路线；参数及材料特定于实际兼容盒体，不是通用数量 |
