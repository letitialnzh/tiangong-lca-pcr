---
pcr_id: pcr.construction-services.existing-long-distance-steel-pipeline-preimpregnated-glass-polyurethane-composite-wrap-repair-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有长距离钢管道预浸玻纤/聚氨酯复合包覆修复服务

## 1. 范围与适用性

本PCR涵盖对已暴露且有支承的既有陆上长距离碳钢管道非贯穿、非泄漏外部金属损失缺陷实施工程外部增强并完成验收的有界服务，采用工厂预浸玻纤湿气固化聚氨酯包覆材料、实际获批填料/底涂和现行工程设计。修复承包方负责鉴定、准备、安装、完整规定固化、适用检查/试验、返工及签署交接。制造商更广的应用列表不得扩大本子集范围。

输出是针对唯一缺陷完成验收的修复服务，而非新管、增强材料生产或后续流体输送。设计配置须作为限定条件声明；按件计量修复不构成通用等价性声称。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-long-distance-steel-pipeline-preimpregnated-glass-polyurethane-composite-wrap-repair-services |
| classification_refs | CPC 3.0 54241 — 长距离管道一般施工服务；拟议narrower覆盖 |
| covered_products | 既有长距离碳钢管外部金属损失的玻纤/PU预浸复合增强工程验收修复 |
| excluded_products | 泄漏/贯穿、内缺陷、裂纹/凹陷/焊缝修复；城市干管；仅厂内管道；套筒/卡箍；碳纤维/环氧湿法铺层；热修/后固化路线；换管/新管道；开挖/回填；后续输送运行 |
| representative_product | 采用XT-FP类工厂预浸料及获批相容填料/底涂的合格非泄漏外部腐蚀修复 |
| production_route | 检查/设计及运行状态控制 → 表面准备 → 实际填料/底涂 → 活化/工程铺层/压实 → 完整规定湿气固化 → 必需检查/试验/返工 → 签署验收 |
| market_state | 在既有暴露管道上完成并签署验收的场址特定修复服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| what | 既有长距离钢管道外部金属损失复合包覆工程验收修复 |
| how_much | 1 item |
| how_well | 现行获批工程缺陷适用性、几何、体系、铺层及完整固化/检查/试验要求，并有最终签署验收 |
| how_long_or_cycle | 一个声明的修复施工批次，包括设置/返工至最终验收；记录阶段日期和库存期间，以及全部使用工程/期间的可重复资产完整生命周期阶段；不保证修复寿命 |
| reference_flow_link | `accepted_repair` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 既有长距离钢管道外部金属损失复合包覆工程验收修复 |
| 参考流属性 | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 唯一缺陷/设计ID；陆上长距离功能；碳钢牌号/直径/壁厚；非泄漏外部金属损失几何/适用性；暴露且有支承的宿主；实际介质/压力/温度状态；体系/SKU/说明；包覆长度/宽度/层数/搭接/方向；表面、固化和试验结果；技师资质；验收日期；施工批次/资产期间和覆盖 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| accepted_count | accepted_repair | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N = 唯一最终验收缺陷修复数量；N > 0。不得计入卷数、层数、道次、尝试或未验收缺陷。直径、壁厚、缺陷和包覆几何为限定条件，而非质量分母。 |
| native_unit_ledgers | all inventory rows | Actual native property | Actual compatible unit | 保留各SKU原生Length、Area、Count或Mass及同单位向外退回。仅采用有独立证据且相容的实际宽度/含量/密度/状态换算；不得强制原生退回转为质量。 |
| paired_component_state | filler_components; primer_components | Mass | kg | 采购套件/组分归属、实投组分质量、已混中间活动、固化留存质量和残余是不同不可加总账。预浸料已含PU树脂。 |
| medium_species_state | process_medium; identified_releases | Mass | kg | 全介质库存/捕集/回注/试验账与已识别物种/介质基本流交换分开；体积换算须有实际压力、温度和组成证据。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有已暴露且有支承的合格管道缺陷及原有内容物/支承，具有实际压力/运行状态及现行获批设计；不包括开挖或新管制造 |
| starting_condition_role | 有界修复处理的既有宿主状态接口 |
| product_classification_scope | 仅限长距离管道施工服务中的所声明预浸料外部金属损失修复子集 |
| recursive_input_rule | 实际先前同类修复须披露为既有状态或具有确切范围的独立有界购入服务；不得递归重新采购本工程或整条管道 |
| upstream_dataset_requirement | 实际相容的含树脂预浸料、组分/套件范围、辅助投入、归属损失/消耗介质、能源/燃料、货运、有界服务商、完整生命周期资产及实际废物处理；每个覆盖范围有一个责任方 |
| disclosure | 宿主/缺陷/设计/体系状态；承包方/服务商责任；施工批次、批量、库存和资产生命周期期间；实际排除、数量、换算、缺口、不确定性和交接证据 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| qualified_host | composite_repair | 从已暴露并有支承的既有陆上长距离碳钢管道、合格非贯穿非泄漏外部金属损失缺陷、内容物及支承状态开始。既有宿主制造不得重新购入。 | csnri-xt-ps-0625; csnri-transmission-corrosion-case |
| design_gate | composite_repair | 现行获批工程设计与体系说明必须在签署验收前确定缺陷适用性、运行/压力状态、表面轮廓/清洁度、填料/底涂相容性、活化、包覆尺寸/层数/搭接/方向及适用完整固化/检查/试验标准。宣传合规不等于完整标准审读或通用批准。 | csnri-xt-ps-0625; csnri-xt-product-page |
| embedded_route | composite_repair | 鉴定、准备、内嵌组分混合/铺放及湿气固化形成一个修复处理责任。不存在独立交接的配方、反应或装配产品；其全部资源和残余均纳入本节点。 | csnri-xt-ps-0625 |
| operating_interface | composite_repair | 负责实际修复引起的隔离、排空、降压、吹扫、恢复及试验，包括服务商支付物资、能源和介质去向。既有内容物为状态接口；实际消耗/损失内容物一次承担上游供应。无泄漏不能证明无工程诱发排放。 |  |
| prepreg_system | prepreg_length; prepreg_area; prepreg_count; prepreg_mass; filler_components; primer_components | 工厂玻纤/PU预浸料连同树脂仅采购一次。采用实际相容体系填料和底涂；套件与组分采购互斥，但A/B实际投料及已混/固化/废物状态仍须核对。 | csnri-xt-ps-0625 |
| complete_resources | all inventory rows | 负责所有实际准备/磨料/清洗/活化/围护/压实/固化/试验投入、水、能源、直接燃料、货运、有界服务商和资产范围。未知即缺口；条件性零值须有实际不存在证据。包装、残余、清洗/试验水及排放须保留去向。 |  |
| run_period_boundary | composite_repair | 索引工程/缺陷批次、准备/安装/固化/试验/返工日期及期初期末库存期间；将设置、清理和换批关联至产生施工批次。资产范围跨越全部消费工程/节点/期间的制造、使用/维护/更换、终止和寿命终结。 |  |
| rework_exit | composite_repair | 表面鉴定失败、铺层不正确、固化不完整及验收失败均保持未验收。重新检查/准备/拆除/施作/固化/试验留在composite_repair；拆下拒收材料关联repair_wastes、可用退回关联原生出口、已识别排放关联实际事件。 |  |
| medium_disjoint_outlets | process_medium; identified_releases | 全介质最终出口必须互斥：opening + external_supply = closing + usable_outward_return + consumed_transformed + collected_waste + uncontained_loss。closing包括全部留存/回收库存。captured/reinjected及使用/投料量属于中间审计视图，而非额外最终出口；vented是uncontained_loss的子集，不是额外出口。不得将捕集与回注/退回/期末库存，或放空与损失重复扣除。工程归属介质上游供应与物种/介质基本流排放仍为不同不可加总视图。 |  |
| scope_exclusions | composite_repair | 排除泄漏/贯穿、内缺陷/裂纹/凹陷/焊缝修复、城市干管、仅厂内管道、套筒/卡箍、碳纤维/环氧湿法铺层、热修/后固化路线、换管、开挖/回填、新管道及后续产品输送。不作避免换管/新管道或下游输送抵扣。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：获批填料各组分供应 (`filler_components`)

过程／待建立交换的方向／类型：`composite_repair` / `inputs` / `product`.

逐一实例化实际获批配方组分。采购完整套件与采购独立组分属于互斥上游视图；即便采购套件也须保留A/B组分实物混合分账。不得猜测配比，也不得用预浸料树脂替代。

数量范围证据需求：实际获批填料/底涂SKU、现行组分配比及实测投料、留存质量和残余量；无默认配比或通用每次修复质量。

- 采集对象：获批填料各组分供应
- 流属性/单位：Mass / kg
- 数量规则：实际归属组分质量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filler_components`

- 来源：`csnri-xt-ps-0625`

#### 采集要求：获批底涂各组分供应 (`primer_components`)

过程／待建立交换的方向／类型：`composite_repair` / `inputs` / `product`.

逐一实例化实际获批配方组分。采购完整套件与采购独立组分属于互斥上游视图；即便采购套件也须保留A/B组分实物混合分账。不得猜测配比，也不得用预浸料树脂替代。

数量范围证据需求：实际获批填料/底涂SKU、现行组分配比及实测投料、留存质量和残余量；无默认配比或通用每次修复质量。

- 采集对象：获批底涂各组分供应
- 流属性/单位：Mass / kg
- 数量规则：实际归属组分质量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primer_components`

- 来源：`csnri-xt-ps-0625`

#### 采集要求：按质量计量的实际辅助修复物资 (`ancillary_mass`)

过程／待建立交换的方向／类型：`composite_repair` / `inputs` / `product`.

按本原生单位实例化实际表面清洗化学品、喷砂磨料、围护、获批保护涂层、压实/脱模薄膜、擦拭及检测耗材等。活化、表面处理、固化、隔离/吹扫和检查资源均须明确责任方，包括服务商支付的资源；不得猜测为零。

数量范围证据需求：本工程实际准备、活化、围护、固化和试验规范、SKU单位及实测数量/去向。

- 采集对象：按质量计量的实际辅助修复物资
- 流属性/单位：Mass / kg
- 数量规则：实际归属辅助物资原生数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ancillary_mass`

#### 采集要求：按长度计量的实际辅助修复物资 (`ancillary_length`)

过程／待建立交换的方向／类型：`composite_repair` / `inputs` / `product`.

按本原生单位实例化实际表面清洗化学品、喷砂磨料、围护、获批保护涂层、压实/脱模薄膜、擦拭及检测耗材等。活化、表面处理、固化、隔离/吹扫和检查资源均须明确责任方，包括服务商支付的资源；不得猜测为零。

数量范围证据需求：本工程实际准备、活化、围护、固化和试验规范、SKU单位及实测数量/去向。

- 采集对象：按长度计量的实际辅助修复物资
- 流属性/单位：Length / m
- 数量规则：实际归属辅助物资原生数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ancillary_length`

#### 采集要求：按面积计量的实际辅助修复物资 (`ancillary_area`)

过程／待建立交换的方向／类型：`composite_repair` / `inputs` / `product`.

按本原生单位实例化实际表面清洗化学品、喷砂磨料、围护、获批保护涂层、压实/脱模薄膜、擦拭及检测耗材等。活化、表面处理、固化、隔离/吹扫和检查资源均须明确责任方，包括服务商支付的资源；不得猜测为零。

数量范围证据需求：本工程实际准备、活化、围护、固化和试验规范、SKU单位及实测数量/去向。

- 采集对象：按面积计量的实际辅助修复物资
- 流属性/单位：Area / m2
- 数量规则：实际归属辅助物资原生数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ancillary_area`

#### 采集要求：按件数计量的实际辅助修复物资 (`ancillary_count`)

过程／待建立交换的方向／类型：`composite_repair` / `inputs` / `product`.

按本原生单位实例化实际表面清洗化学品、喷砂磨料、围护、获批保护涂层、压实/脱模薄膜、擦拭及检测耗材等。活化、表面处理、固化、隔离/吹扫和检查资源均须明确责任方，包括服务商支付的资源；不得猜测为零。

数量范围证据需求：本工程实际准备、活化、围护、固化和试验规范、SKU单位及实测数量/去向。

- 采集对象：按件数计量的实际辅助修复物资
- 流属性/单位：Count / item
- 数量规则：实际归属辅助物资原生数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ancillary_count`

#### 采集要求：修复归属的工艺、吹扫及试验介质供应 (`process_medium`)

过程／待建立交换的方向／类型：`composite_repair` / `inputs` / `product`.

仅将实际修复引起的损失或消耗及实际外购吹扫/试验介质纳入上游归属。原管道内容物属于既有状态接口。核对捕集/回注/退回和压力恢复，不得重新采购未改变的存量；无泄漏不代表修复诱发排放为零。

数量范围证据需求：实际流体/气体身份、组成、修复诱发活动及存量/捕集/退回/去向测量；混合物放空质量不等于基本流物种身份。

- 采集对象：修复归属的工艺、吹扫及试验介质供应
- 流属性/单位：Mass / kg
- 数量规则：实际归属供应或消耗介质质量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_medium`

#### 采集要求：修复燃料上游供应 (`fuel_supply`)

过程／待建立交换的方向／类型：`composite_repair` / `inputs` / `product`.

按实际牌号实例化未由上游服务覆盖的直接设备或运输燃料。上游供应包括未退回废燃料和未围控损失以及实际燃烧量。

数量范围证据需求：实际燃料身份、库存/收货/出口数据及换算所需相容密度；燃烧排放另需实际因子/物种。

- 采集对象：修复燃料上游供应
- 流属性/单位：Mass / kg
- 数量规则：实际归属燃料供应质量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_supply`

#### 采集要求：完成的有界修复支持任务服务 (`bounded_provider`)

过程／待建立交换的方向／类型：`composite_repair` / `inputs` / `product`.

仅当真实服务商按item定义完成的有界任务，且有实际结果和上游资源覆盖时使用。角色可包括合格工程/NDT、隔离/吹扫或作业通达。价格、人工小时、租赁天数及最终修复本身并非本任务单位；若使用须另行获得实际单位。

数量范围证据需求：实际服务商原生任务单位、完成证据和上游范围；无通用服务身份或任意小时转件数。

- 采集对象：完成的有界修复支持任务服务
- 流属性/单位：Count / item
- 数量规则：实际完成有界任务件数 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bounded_provider`

#### 采集要求：完整生命周期可重复修复设备归属 (`shared_assets`)

过程／待建立交换的方向／类型：`composite_repair` / `inputs` / `product`.

实例化实际喷砂/压缩、测量/NDT、通达、压实及其他可重复资产。分数资产等效量须对应覆盖制造、维护、更换和寿命终结的完整生命周期上游范围；租赁和服务商设备也须明确同样的范围责任。

数量范围证据需求：实际资产全寿命负担范围、实测工程驱动量和全部使用方分母、剩余/更换/寿命终结及不确定性证据；仅租赁时间不足。

- 采集对象：完整生命周期可重复修复设备归属
- 流属性/单位：Count / item
- 数量规则：实际归属完整生命周期资产等效件数 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared_assets`

#### 采集要求：按质量计量的可用物资向外退回 (`usable_return_mass`)

过程／待建立交换的方向／类型：`composite_repair` / `outputs` / `product`.

按原SKU和相容原生单位记录实际向外跨界的可用物资，包括适用时未开封或可用卷材余量/组分及未燃烧燃料。结转期末库存不是向外退回。不得只为平账将长度/面积/件数退回强制转为质量。

数量范围证据需求：实际向外数量、SKU、单位、状态、接收方及归属视图；不假定回收抵扣或质量换算。

- 采集对象：按质量计量的可用物资向外退回
- 流属性/单位：Mass / kg
- 数量规则：实际可用向外退回原生数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_usable_return_mass`

#### 采集要求：按长度计量的可用物资向外退回 (`usable_return_length`)

过程／待建立交换的方向／类型：`composite_repair` / `outputs` / `product`.

按原SKU和相容原生单位记录实际向外跨界的可用物资，包括适用时未开封或可用卷材余量/组分及未燃烧燃料。结转期末库存不是向外退回。不得只为平账将长度/面积/件数退回强制转为质量。

数量范围证据需求：实际向外数量、SKU、单位、状态、接收方及归属视图；不假定回收抵扣或质量换算。

- 采集对象：按长度计量的可用物资向外退回
- 流属性/单位：Length / m
- 数量规则：实际可用向外退回原生数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_usable_return_length`

#### 采集要求：按面积计量的可用物资向外退回 (`usable_return_area`)

过程／待建立交换的方向／类型：`composite_repair` / `outputs` / `product`.

按原SKU和相容原生单位记录实际向外跨界的可用物资，包括适用时未开封或可用卷材余量/组分及未燃烧燃料。结转期末库存不是向外退回。不得只为平账将长度/面积/件数退回强制转为质量。

数量范围证据需求：实际向外数量、SKU、单位、状态、接收方及归属视图；不假定回收抵扣或质量换算。

- 采集对象：按面积计量的可用物资向外退回
- 流属性/单位：Area / m2
- 数量规则：实际可用向外退回原生数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_usable_return_area`

#### 采集要求：按件数计量的可用物资向外退回 (`usable_return_count`)

过程／待建立交换的方向／类型：`composite_repair` / `outputs` / `product`.

按原SKU和相容原生单位记录实际向外跨界的可用物资，包括适用时未开封或可用卷材余量/组分及未燃烧燃料。结转期末库存不是向外退回。不得只为平账将长度/面积/件数退回强制转为质量。

数量范围证据需求：实际向外数量、SKU、单位、状态、接收方及归属视图；不假定回收抵扣或质量换算。

- 采集对象：按件数计量的可用物资向外退回
- 流属性/单位：Count / item
- 数量规则：实际可用向外退回原生数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_usable_return_count`

#### 采集要求：实际分类修复废物 (`repair_wastes`)

过程／待建立交换的方向／类型：`composite_repair` / `outputs` / `waste`.

按实际组成、状态和处理目的地实例化去除涂层/腐蚀物/喷砂残渣、边角料或被拒收固化预浸料、未混与已混填料/底涂残余、废耗材/包装、污染清洗/试验水和介质及未退回废燃料。保留上游供应负担；送处理废物不是基本流排放。

数量范围证据需求：实际分类组成/状态、实测质量和处理目的地；无默认废物比例或虚构废物身份。

- 采集对象：实际分类修复废物
- 流属性/单位：Mass / kg
- 数量规则：实际向外废物质量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_repair_wastes`

#### 采集要求：实际已识别基本流物种排放 (`identified_releases`)

过程／待建立交换的方向／类型：`composite_repair` / `outputs` / `elementary`.

仅根据实际例行/事故、粉尘、燃烧、固化/清理及修复诱发工艺介质事件实例化已识别污染物物种和受纳介质。全气体/流体平衡是不可加总实物视图。捕集/回注/库存/退回/收集废物只排除一次；余额、SDS或“无VOC”声称不能识别排放。

数量范围证据需求：实际物种、介质、实测排放或有效匹配因子/活动/组成/去向；未知不得置零或由库存余额推断。

- 采集对象：实际已识别基本流物种排放
- 流属性/单位：Mass / kg
- 数量规则：实际释放至指定介质的已识别物种质量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_identified_releases`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| composite_repair | 一体化工程预浸复合修复 | required | 合格既有暴露且有支承的非泄漏外部金属损失缺陷和获批工程体系 | 工程/缺陷批次处理；鉴定/设计、实际压力状态控制、准备、组分投料、活化/铺层、完整固化、检查/试验、清理及重复作业循环，具有声明废物/退回/排放出口 | 1 item accepted_repair |

### 过程：一体化工程预浸复合修复 (`composite_repair`)

每个事件均属于其工程、缺陷、批次和日期/期间。准备和固化为内嵌责任，不得虚构中间采购。不合格表面、错误包覆、固化不完整及试验失败回到本节点进行纠正/拆除/重施；拒收残余通过实际废物出口、可用退回通过原生产品出口、物种排放通过已识别事件离开。

#### 输入

##### 产品流

###### 按长度供应的工厂玻纤/聚氨酯预浸料 (`prepreg_length`)

仅适用于以本原生单位供应的工厂玻纤湿气固化聚氨酯预浸料SKU；其中已含树脂。每个SKU只选一个采购计量视图，不得再采购其组成玻纤和树脂。

数量范围证据需求：实际SKU、供应单位、宽度/卷含量、工程铺层和实测损失；不得采用通用层数或宣传耗量。

- 选定流：按长度供应的工厂玻纤/聚氨酯预浸料
- 流属性/单位：Length / m
- 数量规则：实际归属原生预浸料数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prepreg_length`

- 来源：`csnri-xt-ps-0625`

###### 按面积供应的工厂玻纤/聚氨酯预浸料 (`prepreg_area`)

仅适用于以本原生单位供应的工厂玻纤湿气固化聚氨酯预浸料SKU；其中已含树脂。每个SKU只选一个采购计量视图，不得再采购其组成玻纤和树脂。

数量范围证据需求：实际SKU、供应单位、宽度/卷含量、工程铺层和实测损失；不得采用通用层数或宣传耗量。

- 选定流：按面积供应的工厂玻纤/聚氨酯预浸料
- 流属性/单位：Area / m2
- 数量规则：实际归属原生预浸料数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prepreg_area`

- 来源：`csnri-xt-ps-0625`

###### 按件数供应的工厂玻纤/聚氨酯预浸料 (`prepreg_count`)

仅适用于以本原生单位供应的工厂玻纤湿气固化聚氨酯预浸料SKU；其中已含树脂。每个SKU只选一个采购计量视图，不得再采购其组成玻纤和树脂。

数量范围证据需求：实际SKU、供应单位、宽度/卷含量、工程铺层和实测损失；不得采用通用层数或宣传耗量。

- 选定流：按件数供应的工厂玻纤/聚氨酯预浸料
- 流属性/单位：Count / item
- 数量规则：实际归属原生预浸料数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prepreg_count`

- 来源：`csnri-xt-ps-0625`

###### 按质量供应的工厂玻纤/聚氨酯预浸料 (`prepreg_mass`)

仅适用于以本原生单位供应的工厂玻纤湿气固化聚氨酯预浸料SKU；其中已含树脂。每个SKU只选一个采购计量视图，不得再采购其组成玻纤和树脂。

数量范围证据需求：实际SKU、供应单位、宽度/卷含量、工程铺层和实测损失；不得采用通用层数或宣传耗量。

- 选定流：按质量供应的工厂玻纤/聚氨酯预浸料
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生预浸料数量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prepreg_mass`

- 来源：`csnri-xt-ps-0625`

###### 供应的准备、活化及试验用水 (`water_supply`)

包括实际清洗、活化/湿润、试验、冲洗和清理用水。环境湿度是条件而非购入水；留存实物账中单列有证据的环境水分吸收。

数量范围证据需求：实际用水、活化说明、试验介质记录、计量校准和去向；无默认水/卷比例。

- 选定流：供应的准备、活化及试验用水
- 流属性/单位：Mass / kg
- 数量规则：实际归属供应水质量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_supply`


###### 直接修复电力 (`electricity`)

记录未计入有界服务商或租赁服务的实际表面准备、压缩机、照明、固化条件控制、隔离及试验电力。“无需加热/后固化”不代表零电力。

数量范围证据需求：实际计量电力及完整共享使用记录；无通用每次修复电量。

- 选定流：直接修复电力
- 流属性/单位：Energy / kWh
- 数量规则：实际归属电量 / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`


###### 实际归属货运服务 (`freight`)

包括供应商/服务商覆盖之外的实际送货、向外退回和废物运输。包装及载荷质量、路线、装载归属和空车调配须有实际证据；不作避免货运抵扣。

数量范围证据需求：实际载荷、路线、装载及覆盖证据；无固定运距或载荷。

- 选定流：实际归属货运服务
- 流属性/单位：mass*distance / kg*km
- 数量规则：实际归属货运kg*km / N
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freight`


##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 既有长距离钢管道外部金属损失复合包覆工程验收修复 (`accepted_repair`)

每个不同的合格缺陷ID仅在工程铺层、完整规定湿气固化、适用检查/试验、缺陷闭环和签署验收后计数。返工留在本节点内，不新增验收修复数量。

数量范围证据需求：仅为精确归一化：每参考流1 item；这不是收率，也不表示不同设计等价。

- 选定流：既有长距离钢管道外部金属损失复合包覆工程验收修复
- 流属性/单位：Count / item
- 数量规则：1 item
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_accepted_repair`

- 来源：`csnri-xt-ps-0625`; `csnri-transmission-corrosion-case`

##### 废物流

##### 基本流

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| sole_accepted_service | composite_repair | 将本有界施工批次归属至唯一且为正的N个验收修复，并声明设计/几何/体系限定条件；不预设有用副产品。材料平衡及使用/投料中间量不可加总。 |  |
| stock_supply_view | all inventory rows | 每个实际SKU/原生单位的归属供应 = 归属期初库存 + 外部去皮毛收货 - 期末结转库存；上游供应与之匹配。内部领用不是新收货；期末库存结转供应负担，不是向外退回。毛量附出口视图保留匹配可用退回；消耗量视图从供应中一次扣除该退回，绝不另加退回抵扣。未退回废物/损失保留上游负担。 |  |
| fuel_outlets | fuel_supply; identified_releases | 分别核对燃烧燃料、可用未燃退回、未退回废物、未围控损失及期末库存。仅实际燃烧量驱动相容燃烧因子，它不是上游供应量。总泄漏只作审计；期末库存中的回收泄漏不得再记损失。 |  |
| repeat_job_burden | composite_repair | 所有设置、清理/换批、失败尝试、拆除拒收层、重复固化/试验和缺陷闭环均归属实际批次及正值最终验收N。失败/缺失关口不产生验收输出；不得以尝试、层数或毛准备缺陷数为分母。 |  |
| asset_full_life | shared_assets | 各资产归属等效量 = 工程相容实测驱动量 / 全部使用方完整寿命驱动量。范围包括制造、维护、更换和寿命终结，在所有工程/节点/期间仅计一次。采用完整已观察寿命，或已观察历史加有证据剩余、更换/终止/寿命终结及不确定性/敏感性/更新。分母缺失或遗漏消费者阻止定稿。 |  |
| ownership_exclusivity | electricity; fuel_supply; freight; bounded_provider; shared_assets | 直接能源、运输段、服务商/租赁设备、资产及备件各有一个责任方。有界服务商单位须匹配完工资源/结果和声明上游覆盖；未覆盖资源直接计入。不得再加已在上游覆盖的资源。价格或小时不能证明Count。 |  |
| medium_fate_exclusivity | process_medium; identified_releases; repair_wastes | 实际消耗/损失工艺介质一次归属上游，并核对捕集/回注/库存/退回/废物/排放。全介质实物与物种/介质基本流视图不可加总；不得由不明余额推导排放，也不作避免运行抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_prepreg_length | composite_repair | prepreg_length | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; lot; native_unit; opening; receipts; tare; closing; return; installed; waste; loss; width; roll_content; conversion_evidence | 核对标识卷材、领用/收货/库存记录及实际原生量；保存宽度、每卷含量和独立换算证据。 | m | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_prepreg_area | composite_repair | prepreg_area | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; lot; native_unit; opening; receipts; tare; closing; return; installed; waste; loss; width; roll_content; conversion_evidence | 核对标识卷材、领用/收货/库存记录及实际原生量；保存宽度、每卷含量和独立换算证据。 | m2 | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_prepreg_count | composite_repair | prepreg_count | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; lot; native_unit; opening; receipts; tare; closing; return; installed; waste; loss; width; roll_content; conversion_evidence | 核对标识卷材、领用/收货/库存记录及实际原生量；保存宽度、每卷含量和独立换算证据。 | item | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_prepreg_mass | composite_repair | prepreg_mass | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; lot; native_unit; opening; receipts; tare; closing; return; installed; waste; loss; width; roll_content; conversion_evidence | 核对标识卷材、领用/收货/库存记录及实际原生量；保存宽度、每卷含量和独立换算证据。 | kg | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_filler_components | composite_repair | filler_components | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; component; kit_id; supply_scope; opening; receipts; tare; closing; return; dosed; retained; unmixed_waste; mixed_waste; loss; ratio_instruction | 称量各组分和残余物；核对收货、库存、实投质量、现行获批配比及固化留存与已混/未混废物。 | kg | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_primer_components | composite_repair | primer_components | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; component; kit_id; supply_scope; opening; receipts; tare; closing; return; dosed; retained; unmixed_waste; mixed_waste; loss; ratio_instruction | 称量各组分和残余物；核对收货、库存、实投质量、现行获批配比及固化留存与已混/未混废物。 | kg | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_ancillary_mass | composite_repair | ancillary_mass | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; role; sku; event_id; opening; receipts; tare; closing; return; used; retained; waste; loss; provider_owner | 按原生SKU和事件计量核对各必需物资；依据采用的施工说明和工程记录证明确实不存在的用量。 | kg | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_ancillary_length | composite_repair | ancillary_length | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; role; sku; event_id; opening; receipts; tare; closing; return; used; retained; waste; loss; provider_owner | 按原生SKU和事件计量核对各必需物资；依据采用的施工说明和工程记录证明确实不存在的用量。 | m | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_ancillary_area | composite_repair | ancillary_area | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; role; sku; event_id; opening; receipts; tare; closing; return; used; retained; waste; loss; provider_owner | 按原生SKU和事件计量核对各必需物资；依据采用的施工说明和工程记录证明确实不存在的用量。 | m2 | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_ancillary_count | composite_repair | ancillary_count | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; role; sku; event_id; opening; receipts; tare; closing; return; used; retained; waste; loss; provider_owner | 按原生SKU和事件计量核对各必需物资；依据采用的施工说明和工程记录证明确实不存在的用量。 | item | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_water_supply | composite_repair | water_supply | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; water_source; event_id; meter; density_state; opening; supplied; closing; returned; retained; wastewater; released; actual_volume; volume_unit; actual_mass; mass_unit; density; density_unit; temperature; temperature_unit; conversion_source | 按事件计量或称量水；体积转质量须有相容的密度/状态证据。核对留存、退回、收集废水和实际排放。 | kg | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_process_medium | composite_repair | process_medium | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; medium; composition; event_id; pressure_state; opening; external_supply; closing; captured; reinjected; return; consumed; wastewater; vented; lost; density_state; actual_volume; volume_unit; actual_mass; mass_unit; density; density_unit; pressure; pressure_unit; temperature; temperature_unit; composition_basis; conversion_source; usable_outward_return; consumed_transformed; collected_waste; uncontained_loss | 采用实际隔离/排空/降压/吹扫/试验/恢复方案和计量质量、组分及去向；体积换算只能采用相容压力、温度和组成证据。 | kg | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_electricity | composite_repair | electricity | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; meter_id; event_id; start; end; electricity; shared_driver; provider_owner | 分表计量或取得设备/事件能源原始记录并完成共享归属；保留电量单位，最终交换创建前核实实际支持链。 | kWh | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_fuel_supply | composite_repair | fuel_supply | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; fuel_grade; opening; receipts; closing; return; burned; waste; uncontained_loss; recovered_to_stock; total_spill; event_id; actual_volume; volume_unit; actual_mass; mass_unit; density; density_unit; temperature; temperature_unit; conversion_source | 核对称量/计量库存和净皮重收货，保证燃烧、退回、废弃和损失互斥；总泄漏量只作审计，回收并留在期末库存的泄漏物不再次作为损失。 | kg | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_freight | composite_repair | freight | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; leg_id; cargo; actual_payload; distance; load_share; empty_leg; service_scope; provider_owner | 逐运输段核对实际kg载荷和km路线、装载及空车归属和上游覆盖；不得同时再将已购运输服务记为燃料采购。 | kg*km | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_bounded_provider | composite_repair | bounded_provider | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; provider; task_id; native_unit; completed_tasks; result; resources_covered; exclusions; event_id | 取得服务商原始范围、任务单位定义、完工结果及资源/资产/能源/废物覆盖；所有未覆盖资源直接确定责任方。 | item | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_shared_assets | composite_repair | shared_assets | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; asset_id; lifecycle_scope; consumer_id; job_driver; whole_life_driver; observed_history; evidenced_remainder; maintenance; replacement; termination; eol; uncertainty; driver_unit; remainder_source; sensitivity; update_date | 登记完整已观察寿命中全部使用方/工程/节点/期间，或已观察历史加有证据的剩余寿命、更换、终止和寿命终结。采用相容实测驱动量；估计剩余寿命必须提供敏感性/更新证据。完整覆盖缺失则阻止定稿。 | item | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_accepted_repair | composite_repair | accepted_repair | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; design_id; geometry; pressure_state; system; substrate_result; layup_record; cure_conditions; cure_result; test_result; rework_id; accepted; acceptance_date | 保存唯一缺陷/设计/验收登记及实际几何、压力、材料体系和签署关口；排除缺失、失败或未闭环关口。N为所声明施工批次中唯一且为正的最终验收数量。 | item | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_usable_return_mass | composite_repair | usable_return_mass | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; original_input_row; native_unit; return_id; quantity; condition; destination; attribution_view | 计量实际向外退回并取得接收方确认；与相同SKU/单位供应账及毛量附出口或消耗量视图一次匹配。 | kg | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_usable_return_length | composite_repair | usable_return_length | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; original_input_row; native_unit; return_id; quantity; condition; destination; attribution_view | 计量实际向外退回并取得接收方确认；与相同SKU/单位供应账及毛量附出口或消耗量视图一次匹配。 | m | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_usable_return_area | composite_repair | usable_return_area | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; original_input_row; native_unit; return_id; quantity; condition; destination; attribution_view | 计量实际向外退回并取得接收方确认；与相同SKU/单位供应账及毛量附出口或消耗量视图一次匹配。 | m2 | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_usable_return_count | composite_repair | usable_return_count | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; sku; original_input_row; native_unit; return_id; quantity; condition; destination; attribution_view | 计量实际向外退回并取得接收方确认；与相同SKU/单位供应账及毛量附出口或消耗量视图一次匹配。 | item | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_repair_wastes | composite_repair | repair_wastes | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; waste_id; producing_event; material; state; tare; net_mass; destination; treatment; return_exclusion; release_exclusion | 称量分类向外废物并保存转移/处理证据；核对残余和收集液计量及实际路线，排除可用退回和排放。 | kg | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |
| cp_identified_releases | composite_repair | identified_releases | foreground_record | job_id; defect_id; campaign_id; batch_id; phase; period; event_id; event_owner; routine_or_incident; species; receiving_medium; activity; burned_fuel; composition; factor; factor_basis; capture; fate; measured_release; method; uncertainty; activity_unit; factor_unit; factor_source; composition_source; fate_source | 采用物种/介质直接测量或有效实际活动-因子/组成-去向证据；区分燃烧活动和上游燃料供应，防止事故与例行记录重叠。 | kg | 每个实际事件及库存/验收核对 | 包括设置/清理/换批/返工的完整施工批次；shared_assets采用完整资产寿命 | 声明管道修复批次及所有归属服务商/资产消费者 | 每参考流 | 校准测量；原始记录；责任方及关口/去向核对；实际角色特定Range证据 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_actual | prepreg_length; prepreg_area; prepreg_count; prepreg_mass; filler_components; primer_components; ancillary_mass; ancillary_length; ancillary_area; ancillary_count; water_supply; process_medium; electricity; fuel_supply; freight; bounded_provider; shared_assets; usable_return_mass; usable_return_length; usable_return_area; usable_return_count; repair_wastes; identified_releases | 归一数量 = 实际归属原生数量 / N；N = 声明施工批次中唯一最终验收缺陷ID。不得以尝试、包覆、层数或未验收缺陷为分母。 | 实际原始数量；N；各行关联cp | 每1 item参考修复数量 |  |
| stock_attribution | prepreg_length; prepreg_area; prepreg_count; prepreg_mass; filler_components; primer_components; ancillary_mass; ancillary_length; ancillary_area; ancillary_count; water_supply; process_medium; fuel_supply | 供应 = 归属期初库存 + 外部去皮毛收货 - 期末结转库存。毛量附出口视图保留匹配可用退回；消耗量供应 = 供应 - 匹配可用向外退回，只扣除一次且无退回抵扣。未退回废物/损失保留供应负担。 | SKU; native_unit; opening; receipts; tare; closing; return; outlet state | 按SKU和原生单位的实际归属供应 |  |
| component_reconciliation | filler_components; primer_components | 对各组分将实际投料质量与相容已混中间体、固化留存、已混/未混废物和有证据损失状态核对；中间量不可加总。套件/组分采购视图互斥；不得猜测配比。 | 组分质量；实际获批配比；批次状态；残余；供应范围 | 组分和混合状态实物审计，而非重复交换 |  |
| burn_activity | fuel_supply; identified_releases | 燃烧活动 = 实际燃烧燃料；以互斥出口核对库存与燃烧 + 可用未燃退回 + 未退回废物 + 未围控损失 + 期末库存。上游供应不限于燃烧量。总泄漏只作审计；期末回收泄漏不是额外损失。 | 实际燃料库存/收货/出口；燃料牌号；实际相容因子 | 燃料供应及独立燃烧活动 |  |
| freight_work | freight | 货运活动 = 按归属运输段及实际装载/空车归属与覆盖求和的实际kg载荷 * 实际km；防止服务商/供应商重复。 | leg_id; actual_payload; distance; load_share; empty_leg; coverage | 除以N之前的kg*km |  |
| asset_attribution | shared_assets | 资产等效量 = 工程相容实测驱动量 / 全部使用方完整寿命驱动量；全寿命范围包括制造 + 维护 + 更换 + 寿命终结，各仅一次。采用完整已观察寿命或已观察历史 + 有证据剩余/更换/终止/寿命终结；保留不确定性/敏感性/更新；覆盖缺失阻止定稿。 | asset_id；全寿命范围；全部使用方/期间驱动量；已观察历史；有证据剩余；更换；EOL | 除以N之前的归属完整生命周期资产等效量 |  |
| medium_reconciliation | process_medium | 全介质最终出口必须互斥：opening + external_supply = closing + usable_outward_return + consumed_transformed + collected_waste + uncontained_loss。closing包括全部留存/回收库存。captured/reinjected及使用/投料量属于中间审计视图，而非额外最终出口；vented是uncontained_loss的子集，不是额外出口。不得将捕集与回注/退回/期末库存，或放空与损失重复扣除。工程归属介质上游供应与物种/介质基本流排放仍为不同不可加总视图。 | opening; external_supply; closing; usable_outward_return; consumed_transformed; collected_waste; uncontained_loss; actual state/composition records | 归一前互斥全介质实物平衡；中间审计不可加总 |  |
| species_release | identified_releases | 物种排放 = 直接测量至实际介质的已识别物种质量，或实际相容活动 * 匹配因子并处理组成/去向/捕集。全介质实物视图不可加总；不得由余额/SDS/无VOC推断物种或排放。 | 实际物种/介质；实测排放或相容活动/因子/组成/去向；例行/事故责任方 | 除以N之前的已识别物种质量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| complete_gate | accepted_repair | 保存缺陷测绘、工程设计、技师资质、获批说明版本、压力/运行状态、准备/铺层/完整固化/试验证据和签署验收。 | cp_accepted_repair |
| complete_inventory | all inventory rows | 从设置至最终闭环完整采集批次，包括失败作业及全部服务商支付资源；记录不存在、缺口和不确定性，不得补零。 | 事件及责任方登记 |
| state_and_native | all inventory rows | 保存SKU原生单位、校准、净皮重、批次/组分状态、退回状态/目的地和实际状态特定换算证据。 | 供应商及计量记录 |
| asset_complete_life | shared_assets | 保存全部使用方全寿命驱动量、已观察历史及任何有证据剩余和更换/终止/寿命终结、不确定性敏感性和更新日期。不得任意假设寿命。 | cp_shared_assets |
| identity_and_factors | all inventory rows | 数据生产时核实具体流/支持身份；采用因子时标明确切来源/版本/活动/状态/地域/物种/介质，并单独报告支持缺口。 | 身份及因子证据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| eligibility_and_gate | accepted_repair | 核实既有长距离碳钢非泄漏外部金属损失及获批设计/说明；缺陷不适用、鉴定缺失、规定完整固化未完成、必需试验失败或未签署验收时阻止验收输出。 | csnri-xt-ps-0625 |
| count_denominator | all inventory rows | N必须为同一声明批次/限定条件下唯一且为正的最终验收缺陷ID；全部归一量与N核对，防止层/卷/尝试重复。 |  |
| native_stock_reconcile | all inventory rows | 检查SKU/单位互斥供应/退回视图、完整期初-收货-期末-出口核对、预浸树脂包含、套件/组分互斥、组分投料及安装/留存与废物/排放状态；未解决平衡阻止定稿。 |  |
| run_rework_linkage | composite_repair | 检查设置、清理、换批、失败材料拆除、重施、重固化及重试的批次/事件/期间关联；拒收修复不得进入N，也不得无声明路径离开。 |  |
| asset_period_coverage | shared_assets | 检查全部使用方及生命周期阶段/期间，包括剩余/更换/终止/寿命终结、相容驱动量和完整分母及敏感性/更新。覆盖缺失或制造/维护/租赁/服务商范围重复阻止定稿。 |  |
| species_fate | identified_releases | 检查物质/物种和受纳介质、例行/事故责任方、实测或匹配活动-因子/组成-去向、燃烧量分离及捕集/退回/废物排除。无VOC/SDS/库存余额不能证明零值或身份。 |  |
| range_scope | all inventory rows | 最终数量前要求实际角色特定Range证据。宣传温度、层厚/硬度/固化时间及混合技术案例总量不是通用耗量/收率或验收默认值。初凝时间不等于完整固化。 | csnri-xt-ps-0625 |
| exchange_readiness | all inventory rows | 每个最终交换要求实际具体已核实身份、支持属性/单位及原始数量/覆盖证据。可记录条件性实际不存在；未知即不完整。自动目标检查本身不能核实身份或发布准备度。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset；验收有界服务的下游process及lifecyclemodel投影 |
| allowed_use | 实际匹配的既有钢制长距离管道外部非泄漏金属损失预浸料修复，披露工程限定条件、完整工程清单和关口 |
| excluded_use | 通用包覆配方或修复寿命；泄漏/内缺陷/裂纹/凹陷修复；卡箍/套筒；换管/新管道或后续输送；避免换管抵扣 |
| required_metadata | 宿主和缺陷/设计ID；地点/日期；体系/说明/SKU；压力/介质；几何/铺层；验收；N；库存/视图和责任方；期间/资产范围；换算及来源版本 |
| required_quality_disclosure | 实际数据覆盖、校准、Range证据、生命周期/服务商完整性、不确定性/敏感性、确切流/支持及因子准备度、缺失记录和条件性不存在 |
| update_trigger | 缺陷/设计/体系/说明或验收关口变化；实际新SKU/服务商身份；库存/去向修正；新资产历史/剩余/更换/终止/寿命终结或因子；代表性工程组合变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | 联合国统计司，CPC Version 3.0解释说明（2025年6月30日），54241；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类背景；狭义类别边界为明确编写规则 |
| csnri-xt-ps-0625 | literature | CSNRI SynthoGlass XT产品说明PS_0625，完整第1–2页；https://www.cs-nri.com/wp-content/uploads/2023/04/CSNRI_PS_SynthoGlass-XT_Web-1.pdf | 仅工厂玻纤/PU预浸料、湿气固化、填料/底涂/预浸体系角色及条件性技术数据。初凝/固化表、层厚、硬度和宣传合规不是通用工程数量或现场验收。 |
| csnri-xt-product-page | literature | CSNRI SynthoGlass XT现行产品页面；https://www.cs-nri.com/product/syntho-glass-xt/ | 现行产品路线/应用背景；不证明实际设计批准、配方、数量或完整标准已审读 |
| csnri-transmission-corrosion-case | literature | CSNRI，Composites take on air-to-soil interface corrosion on gas；https://www.cs-nri.com/case_study/composites-take-on-air-to-soil-interface-corrosion-on-gas/ | 输气背景、设计修复/准备和受训安装；混合技术及案例总量不是XT专属范围 |

上述库存、燃料、货运和资产代数是本PCR明确的前景采集/核算规则。制造商文件仅支持所陈述产品/路线事实，不是这些原创LCA核算规则的依据。
