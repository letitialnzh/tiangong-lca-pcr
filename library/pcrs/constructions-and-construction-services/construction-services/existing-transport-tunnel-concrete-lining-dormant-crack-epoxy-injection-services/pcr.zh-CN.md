---
pcr_id: pcr.existing-transport-tunnel-concrete-lining-dormant-crack-epoxy-injection-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 既有交通隧道混凝土衬砌静止裂缝环氧注浆修复服务

## 1. 范围与适用性

本 PCR 适用于既有公路或铁路交通隧道保留混凝土衬砌中，经工程师判定合格的静止裂缝，采用实际适配的低黏度双组分环氧材料实施压力注浆。包括本次作业的施工接近与防护、成因与位移评估、清理和基层处理、表面封缝与注浆嘴、计量配料与混合、注浆、排料与清理、规定养护、检查、缺陷闭环及签字修复验收。原衬砌保留在位。

排除新建隧道或衬砌、矿山或水工隧道、活动位移裂缝、静水压力下或有积水时的注浆、弹性聚氨酯止水灌浆、大规模混凝土更换、结构加固、隧道交通运营及后续修复。静止裂缝子集是本 PCR 要求工程师批准的边界；示例产品数据表并未证明所有活动裂缝均不能处理。树脂实验室强度或本次有限作业通过验收，均不能保证结构承载力恢复、水密性或隧道剩余寿命。

本次阅读的美国 Sikadur52 产品数据表为 Edition 9.23.2014，美国产品网页当前仍链接该版本。它支持工艺路线识别，不能提供普遍适用的现行施工参数。实际作业应采用所在地区现行的产品资料、标签和 SDS，并遵循批准的工法与业主要求；保留其修订日期和适用性批准。本 PCR 不规定通用注浆压力、注浆嘴间距、组分密度、质量配比、kg/m 用量或养护时长。来源：`un-cpc3-2025`；`sika-sikadur52-us-2014`。
## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-transport-tunnel-concrete-lining-dormant-crack-epoxy-injection-services |
| classification_refs | CPC 3.0 54222；narrower 语义子集；拟议映射仍须单独接受 |
| covered_products | 既有交通隧道混凝土衬砌静止裂缝通过验收的环氧注浆修复服务 |
| excluded_products | 新建资产或衬砌；矿山或水工隧道；活动或承受静水压力的裂缝；聚氨酯堵漏；重大加固或更换 |
| representative_product | 保留交通隧道衬砌中，经业主验收、记录分支几何的唯一处理裂缝路径 |
| production_route | 有限修复作业：资格确认与基层处理；注浆嘴和已固化表面封缝；实际 A/B 计量混合；压力注浆；清理与规定养护；验证及缺陷闭环 |
| market_state | 业主签字验收时的有限已完成修复服务；不包含未来维护或隧道运营 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 既有交通隧道混凝土衬砌静止裂缝通过验收的环氧注浆修复服务 |
| How much | 通过验收的唯一处理裂缝路径 1 m；总验收路径长度 L 以 m 测量 |
| How well | 工程师批准的静止裂缝、完好的保留衬砌、无积水且不在静水压力下施工；实际材料适配且施工前状态合格；实际充填、养护及业主要求的验证均通过；缺陷闭环并签字验收 |
| How long or cycle | 从资格确认及施工接近准备至验收的一次有限修复作业；记录基层处理、注浆、养护与验收期间，共享资产覆盖其完整寿命；不假设后续服役寿命 |
| reference_flow_link | `accepted_crack_repair` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 既有交通隧道混凝土衬砌静止裂缝验收环氧注浆修复 |
| 参考流属性 | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` |
| 参考单位组 | 长度单位组 `838aaa22-0117-11db-92e3-0800200c9a66` |
| 参考单位 | m |
| 必需限定信息 | 隧道公路或铁路用途及位置；裂缝段和分支图及唯一路径计量方法；宽度、深度及其单位和不确定性；衬砌状态和结构作用；成因与位移评估；湿度与压力状态；实际组分、封缝和注浆嘴身份；批准的工法和注明日期的地区资料；注浆压力、时间、体积单位与容差来源；养护记录；验证方法、阈值单位与业主来源；验收长度 L 和验收日期 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `unique_length` | 参考产品 | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` | m | L 为 cp_acceptance 测得的验收唯一处理裂缝路径。对裂缝段取并集以剔除重叠和重复注浆；按批准的图纸每条分支仅计一次。隧道中心线长度、注浆嘴、裂缝两侧或施工遍数均不增加 L。L 为零或验收不完整时，不产生正的参考输出。 |
| `component_conversion` | resin_a; hardener_b; seal_paste; cleaner; water; fuel | 质量 | kg | 采用扣除实际容器或车辆皮重后的材料净质量，尚未扣减对外退回量。实际供货体积仅能使用该材料在记录温度和状态下实测或供应商证实的密度及相容单位换算。独立记录 A/B 体积配料；体积比不等于质量比。几何形状本身不能证明空隙体积或吸收树脂量。 |
| `utilities_units` | electricity; purchased_air; transport | 实际交换流属性 | kWh; m3; kg*km | 保留电表能量单位和供应边界。外购压缩空气体积须记录压力、温度、参考条件与单位；同一供气不得同时计入现场压缩机能耗与外购空气。运输采用货物净质量 kg 乘实际距离 km；仅在支持身份与单位相容时，t*km 等于 1000 kg*km。 |
| `emission_units` | direct_species; fluid_release | 质量 | kg | 记录确定物质、受纳介质、实际实测或模型依据及捕集、留存和反应项。整股未受控流体与已报告的部分物种量须区分；100% 固含量不能证明零排放。未知残差不作为排放。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有完好的保留混凝土隧道衬砌及工程师确认合格的静止裂缝，记录成因和位移、尺寸、施工接近条件及湿度和压力状态；基层处理纳入边界，不假定已完成 |
| starting_condition_role | 保留主体的状态条件；无新衬砌交换流或更换抵扣 |
| product_classification_scope | 有限交通隧道修复服务；排除水工或矿山隧道工程 |
| recursive_input_rule | 分包商提供同类修复时，记录其实际有限验收服务与声明边界；使用其上游数据集，不递归重建相同作业或重复计入本方材料及公用工程 |
| upstream_dataset_requirement | 实际供货组分、耗材、公用工程、运输、资产和废物处理数据集，应匹配产品、状态、地区和期间，并声明已包含的包装或服务边界 |
| disclosure | 声明保留主体、所有基层处理和测试、作业与批次及期间边界、实际供应门槛、保管权、运输分段、共享资产、不合格项，以及遗漏或未测交换流及其后果 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `host_and_route` | crack_treatment | 负责实际增量基层处理或移除、作业导致的局部小修及防护，直到签字验收。保留衬砌不计为新混凝土生产；不计避免更换抵扣。除非有实际独立物理交接证据，材料处理、封缝、混合、养护和检查作为一个完整作业。 | un-cpc3-2025; sika-sikadur52-us-2014 |
| `qualification` | crack_treatment | 要求基层完好、清洁、适配，且静止裂缝获工程师批准；记录污染物及移除、干燥或潮湿但无积水状态、无静水压力注浆、批准的注浆嘴及表面封缝，并在注浆前验证封缝固化。实际地区资料和业主批准决定适用性与施工限制。 | sika-sikadur52-us-2014 |
| `job_completeness` | crack_treatment | 纳入施工接近、防护、通风、压缩机或外购空气、计量混合、注浆、排料、清理、养护防护和测试。列出修复作业与混合批次、准备或切换、返工及截至验收的全部期间；未通过验收的作业仍保留负担。 | sika-sikadur52-us-2014 |
| `custody_boundary` | crack_treatment | 在实际对外退回产品之前记录扣除皮重后的总收货或领用量；保留期末库存不是对外产品交换。核对期初库存负担、采购、内部领用、使用、退回及期末结转负担。区分产品退回、废物和直接释放；供应商已包含的包装或服务不能重复计入。 |  |
| `asset_boundary` | equipment_share | 纳入实际注浆、混合、施工接近、通风、压缩和防护资产完整寿命中的制造、维护、更换与寿命终结负担。列举所有节点、作业和期间的使用者；剔除已单列燃料、耗材或备件及工具的重复资产覆盖。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际供应的清洗或排料化学品 (`cleaner`)

过程／待建立交换的方向／类型：`crack_treatment` / `inputs` / `product`.

条件适用：每种实际适配清洗或排料配方，应按供货湿态和作业用途单独记录。区分设备清洗与混凝土基层处理；不得稀释注浆树脂。 数量范围证据需求：需要实际批准清洗剂身份及 SDS、供货数量、留存或捕集及废物或释放记录；不能由 100% 固含量推断无溶剂。

- 采集对象：实际供应的清洗或排料化学品
- 流属性/单位：质量 / kg
- 数量规则：实际供应且扣除皮重后的清洗或排料材料总量，以验收 L 为分母，并核对去向和各出口。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`sika-sikadur52-us-2014`

#### 采集要求：实际基层处理、清理与围控耗材 (`consumables`)

过程／待建立交换的方向／类型：`crack_treatment` / `inputs` / `product`.

条件适用：将实际供应的磨料、擦拭物、过滤器、遮蔽或防护、泄漏吸收剂、清理或围控用品及局部小修材料，展开为各自身份的交换流；不得把异质材料加成一个流。避免与设备维护或供应商覆盖重复。 数量范围证据需求：需要实际基层处理方法、防护、清理及泄漏围控方案、分项材料收货或领用与去向；不能使用共同材料因子。

- 采集对象：实际基层处理、清理与围控耗材
- 流属性/单位：质量 / kg
- 数量规则：每种不同耗材实际供应且扣除皮重后的总量，以验收 L 为分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

#### 采集要求：实际外购电力 (`electricity`)

过程／待建立交换的方向／类型：`crack_treatment` / `inputs` / `product`.

计量本次作业应承担的注浆、混合、施工接近、通风、照明、清洗及现场压缩用电；按实际供电边界和供应商分别展开。 数量范围证据需求：需要实际回路、表计期间、设备负荷证据和共享时间记录，包括养护防护和失败作业；须核实实际交换的 Energy 支持身份。

- 采集对象：实际外购电力
- 流属性/单位：能量 / kWh
- 数量规则：实际应归属的外购电量，以验收 L 为分母；单独测得的非本作业负荷仅扣减一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`

#### 采集要求：实际供应燃料的整股流体投入 (`fuel`)

过程／待建立交换的方向／类型：`crack_treatment` / `inputs` / `product`.

条件适用：每种实际燃料配方单独记录。存在未用退回、废物或释放时采用扣除皮重后的边界总投入；由互斥出口另行计算燃烧活动量。事故总泄漏量不能再扣一次。 数量范围证据需求：需要实际燃料身份、总量、体积换算所需密度及状态温度、燃烧和出口记录；无通用消耗量或燃料因子。

- 采集对象：实际供应燃料的整股流体投入
- 流属性/单位：质量 / kg
- 数量规则：实际供应燃料总质量，以验收 L 为分母，核对期初和期末库存、对外未用燃料、捕集和未受控整股流体出口；燃烧活动量另由平衡计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`

#### 采集要求：实际应归属的货运服务 (`transport`)

过程／待建立交换的方向／类型：`crack_treatment` / `inputs` / `product`.

条件适用：每段实际货物、车辆、方式和路线按供应商及已包含边界证据分别展开；交货、真实退回与废物运输仅计一次。空驶及人员或施工接近服务需实际独立处理，不能虚构货物。 数量范围证据需求：需要实际扣除皮重的货物质量、距离、装载及供应商边界；无通用运输距离。

- 采集对象：实际应归属的货运服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：各分段实际货物净质量 kg 乘实际距离 km，再取本作业应归属量，以验收 L 为分母；不重复计入供应商已含交付或废物处理运输。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transport`

#### 采集要求：实际完整寿命设备服务份额 (`equipment_share`)

过程／待建立交换的方向／类型：`crack_treatment` / `inputs` / `product`.

将每项实际注浆泵或混合设备、压缩机、施工接近、防护及通风资产展开为各自匹配的服务份额。分摊负担份额本身不意味着新的实体机器进入作业。 数量范围证据需求：需要实际资产身份、完整寿命已观察或已观察加有据未来服务分母、制造维护更换及寿命终结覆盖与不确定性；缺少证据时不能最终定稿。

- 采集对象：实际完整寿命设备服务份额
- 流属性/单位：数量 / item
- 数量规则：每项资产的完整寿命等价份额等于本作业应归属服务量除以全部使用者完整寿命服务量，再以验收 L 为分母；与匹配的完整寿命负担范围配对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assets`

#### 采集要求：实际退出作业保管权的未用质量计量材料或燃料 (`product_returns`)

过程／待建立交换的方向／类型：`crack_treatment` / `outputs` / `product`.

条件适用：未用树脂 A、B、封缝膏、清洗剂、燃料及其他按质量计量的材料，应按不同身份、状态和保管权分别展开真实对外退回。它们不是保留期末库存、内部移动或废物。与总投入身份匹配，不得先抵减投入再另计退回。 数量范围证据需求：需要签字保管权凭证、匹配的总投入批号、身份及状态、质量 kg 和实际去向；无通用退回比例。

- 采集对象：实际退出作业保管权的未用质量计量材料或燃料
- 流属性/单位：质量 / kg
- 数量规则：每种未用材料或燃料退出作业保管权、扣除皮重后的实际质量 kg，以验收 L 为分母；匹配总投入身份及状态和声明的负担转移。未声明负担处理时不得计退回抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

#### 采集要求：实际退出作业保管权的未用一次性注浆嘴 (`port_returns`)

过程／待建立交换的方向／类型：`crack_treatment` / `outputs` / `product`.

条件适用：逐一记录跨越作业保管权边界退回的实际未用一次性注浆嘴身份及配置，匹配 injection_ports 总投入。保留库存、已安装或拆除的废弃注浆嘴及内部移动分别处理。 数量范围证据需求：需要签字对外保管权凭证、匹配的总投入注浆嘴身份及配置和实际数量；无通用注浆嘴退回比例。

- 采集对象：实际退出作业保管权的未用一次性注浆嘴
- 流属性/单位：数量 / item
- 数量规则：各未用一次性注浆嘴退出作业保管权的实际数量 item，以验收 L 为分母；匹配总投入身份及声明负担转移，不得先抵减投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

#### 采集要求：实际捕集的混凝土基层处理碎屑 (`concrete_debris`)

过程／待建立交换的方向／类型：`crack_treatment` / `outputs` / `waste`.

条件适用：收集实际有限基层处理或作业导致的局部小修产生的碎屑；不能把保留主体作为整体拆除。污染和清洁废物按实际不同去向分别展开。 数量范围证据需求：需要实际基层处理方法、污染和湿度、捕集质量及接收方记录；几何形状不能证明碎屑质量。

- 采集对象：实际捕集的混凝土基层处理碎屑
- 流属性/单位：质量 / kg
- 数量规则：实际捕集碎屑净质量，以验收 L 为分母；扣除容器皮重并排除另报水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

#### 采集要求：实际丢弃的环氧及清洗残余物 (`epoxy_waste`)

过程／待建立交换的方向／类型：`crack_treatment` / `outputs` / `waste`.

条件适用：按状态、组分和接收方分别展开实际已固化或未固化的 A/B 或混合树脂、封缝膏、排料残余物、擦拭物和污染过滤器。不采用单一通用危险废物因子。 数量范围证据需求：需要实际状态和组分、净称重、批次或事故关联及废物交接接收记录；无通用不合格或排料比例。

- 采集对象：实际丢弃的环氧及清洗残余物
- 流属性/单位：质量 / kg
- 数量规则：各身份实际对外废物净质量，以验收 L 为分母；留存或捕集材料与直接环境释放分别计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

#### 采集要求：实际废弃供货包装及拆除注浆嘴 (`packaging_waste`)

过程／待建立交换的方向／类型：`crack_treatment` / `outputs` / `waste`.

条件适用：按材料、残余污染和接收方，分别展开实际空容器、包装材料和废弃注浆嘴。可复用包装只有在真实对外保管权有凭证时，才作为实际产品退回。 数量范围证据需求：需要实际包装或注浆嘴材料、皮重与残余物分离、称重及保管权或处理证据；无假定包装因子。

- 采集对象：实际废弃供货包装及拆除注浆嘴
- 流属性/单位：质量 / kg
- 数量规则：各包装或拆除注浆嘴废物的实际对外净质量，以验收 L 为分母；不再次计入供货产品数据集已含制造负担。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

#### 采集要求：实际向环境介质直接释放的已确定物种 (`direct_species`)

过程／待建立交换的方向／类型：`crack_treatment` / `outputs` / `elementary`.

条件适用：每项已确定的实测或有据模型物质及受纳介质分别展开，包括实际燃料燃烧、常规树脂或清洗剂释放及粒径明确的未捕集粉尘。排除由 fluid_release 负责的事故组分；每个物质、介质与事件只有一个负责者。100% 固含量不证明零排放；不自动选用通用 VOC 或 NOx 组合 UUID。 数量范围证据需求：需要实际 SDS 及物种、介质、燃烧燃料活动量、适配因子或实测、捕集与反应依据；未知质量残差不自动作为排放。

- 采集对象：实际向环境介质直接释放的已确定物种
- 流属性/单位：质量 / kg
- 数量规则：实际物种释放质量，以验收 L 为分母，由实测记录，或明确有据的物种活动量及因子和捕集、留存、反应平衡获得。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`

#### 采集要求：实际释放至环境介质的已确定事故组分 (`fluid_release`)

过程／待建立交换的方向／类型：`crack_treatment` / `outputs` / `elementary`.

条件适用：每次实际事故释放均展开为已确定的组分或物质及受纳介质基本流。未受控燃料、树脂、清洗剂或污染水的整股质量仅留在物理事故、材料或燃料账簿中。组分释放量取实际实测值，或由有据整股流体质量、实际组成比例与介质特定去向得到；已报告的部分物种不代表整股流体。每个物质、介质和事件仅在此负责一次，并从 direct_species 排除。 数量范围证据需求：需要实际事故质量或体积及密度、状态和温度、回收和捕集、实际组分比例及比例基准、介质和归趋证据或组分实测；无通用混合配方基本流或默认释放比例。

- 采集对象：实际释放至环境介质的已确定事故组分
- 流属性/单位：质量 / kg
- 数量规则：各已确定事故组分及介质的实际实测释放组分 kg / L，或实际未受控整股流体 kg 乘有据组分质量分数再乘实际介质特定释放或归趋比例 / L。整股流体仅用于审计，不作为通用基本流交换；不重复计算整股与部分物种或 direct_species。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| crack_treatment | 一体化资格确认、材料处理、注浆、养护与修复验收 | required | 处于合格静止裂缝交通隧道修复边界内 | 有限作业及实际混合、注浆批次中的前景材料处理 | 验收唯一处理裂缝路径 L m |

### 过程：一体化裂缝处理与验收（`crack_treatment`）

施工前状态为工程师确认合格的保留衬砌静止裂缝。输出为签字验收时已注浆、养护并验证的有限修复。表面封缝、组分混合、等待和检查在此没有单独物理交接证据。准备、排料和失败批次或返工仍由该节点负责；只有缺陷闭环并通过规定验证后，不合格部分才可转为验收输出。

#### 输入

##### 产品流


###### 实际供货门槛的环氧树脂 A 组分（`resin_a`）

逐一记录实际供货的适配树脂 A 配方。扣除皮重后的边界总收货量或期初库存领出量，应与配料、对外退回和期末库存分别记录。 数量范围证据需求：需要实际配方、收货及配料质量、吸收量、排料和退回记录及验收裂缝几何；产品数据表覆盖率或 2:1 体积比不能确定 kg/m。

- 选定流：实际供货门槛的环氧树脂 A 组分
- 流属性/单位：质量 / kg
- 数量规则：实际进入本次作业、扣除皮重后的 A 组分总量，按批号独立核对并以验收 L 为分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`sika-sikadur52-us-2014`

###### 实际供货门槛的环氧固化剂 B 组分（`hardener_b`）

实际配套 B 组分按独立供货配方与批号记录，不能替代为通用纯胺，也不能由体积配料推断质量比。 数量范围证据需求：需要实际 B 身份、密度和状态、总收货量及批次配料；无通用质量比或固化剂用量强度（kg/m）。

- 选定流：实际供货门槛的环氧固化剂 B 组分
- 流属性/单位：质量 / kg
- 数量规则：实际进入本次作业、扣除皮重后的 B 组分总量，按批号独立核对并以验收 L 为分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`sika-sikadur52-us-2014`

###### 实际适配的表面封缝膏（`seal_paste`）

逐一记录实际表面封缝配方及供货状态；涉及分别供货组分时分别记录。注浆前封缝固化是门槛，不构成独立产品。 数量范围证据需求：需要实际封缝体系、预封缝固化记录、几何及注浆嘴、施工与废物记录；无通用每米裂缝封缝质量。

- 选定流：实际适配的表面封缝膏
- 流属性/单位：质量 / kg
- 数量规则：本次修复实际供应且扣除皮重后的封缝材料总量，按配方独立核对并以验收 L 为分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`sika-sikadur52-us-2014`

###### 实际一次性注浆嘴（`injection_ports`）

逐一记录实际一次性注浆嘴的材料及配置；可复用注浆嘴计入资产服务。区分安装、移除、回收和丢弃数量，避免重复。 数量范围证据需求：需要实际体系对应的间距、几何及安装或回收数量；注浆嘴数量不等于验收裂缝长度。

- 选定流：实际一次性注浆嘴
- 流属性/单位：数量 / item
- 数量规则：各身份实际供应的一次性注浆嘴总数，以验收 L 为分母；实际交换如需质量换算，应保留匹配的单件质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`sika-sikadur52-us-2014`

###### 实际供应的作业用水（`water`）

条件适用：仅记录实际获批并实施的清洗、抑尘或测试用供水，注明去向及干燥或潮湿状态合格依据。 数量范围证据需求：需要实际清洗或测试路线、实际用水计量或收货记录及废水、留存、天气水量平衡；不预设用水。

- 选定流：实际供应的作业用水
- 流属性/单位：质量 / kg
- 数量规则：实际供水质量，以验收 L 为分母；体积换算需要实际水状态、温度和密度证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`

###### 实际外购压缩空气（`purchased_air`）

条件适用：仅计实际外购空气；该供应不得同时承担现场压缩机能耗。记录符合批准路线的空气品质和压力。 数量范围证据需求：需要实际供应边界、实测体积和参考条件及批准用途；无通用耗气强度或压力。

- 选定流：实际外购压缩空气
- 流属性/单位：体积 / m3
- 数量规则：实际外购空气在记录的参考压力和温度条件下的数量，以验收 L 为分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`

##### 废物流

本路线不接收作为处理进料的废物。

##### 基本流

对于作为产品供应的材料，不另增默认基本资源开采流。

#### 输出

##### 产品流

###### 既有交通隧道混凝土衬砌静止裂缝验收环氧注浆修复（`accepted_crack_repair`）

业主签字验收、已注浆并养护的唯一裂缝路径，规定验证通过且缺陷闭环。重复施工、注浆嘴、裂缝面或未验收段均不产生额外输出。 数量范围证据需求：1 m 为精确参考定义，不是经验产率范围；须有实际唯一验收 L、几何及验收不确定性。

- 选定流：既有交通隧道混凝土衬砌静止裂缝验收环氧注浆修复
- 流属性/单位：长度 / m
- 数量规则：1 m
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 来源：`sika-sikadur52-us-2014`

##### 废物流

###### 实际收集并送处理的废水（`wastewater`）

条件适用：按接收方和处理门槛记录实际收集的清洗或测试水及污染物；纳入湿度和水量平衡，不能假设全部供水变为废水。 数量范围证据需求：需要实际收集体积或质量，换算时的密度、温度和状态、组分及接收方；无默认排水比例。

- 选定流：实际收集并送处理的废水
- 流属性/单位：质量 / kg
- 数量规则：实际对外废水净质量，以验收 L 为分母；处理建模涉及的浓度或负荷须实测。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `accepted_campaign` | crack_treatment | 直接将有限作业及批次投入、输出、准备或切换、排料和清理，以及所有注浆、养护、测试失败和返工负担，归属到验收唯一裂缝路径 L。验收未决或 L 为零的作业属于不完整，不是零负担服务。分支和重复施工不得增加输出。共享作业事件仅由一方负责；不同作业采用实测因果时间或活动量，记录分摊核对，不默认按树脂价值分配。 |  |
| `return_and_stock_burden` | resin_a; hardener_b; seal_paste; injection_ports; cleaner; water; consumables; fuel; product_returns; port_returns | 按批号、状态和期间分别建立物理量及上游负担账簿：期初库存保留结转负担，新增总收货引入匹配负担，对外退回转移已声明实际负担，保留期末库存结转负担且不构成对外交换。作业归属负担加对外转移负担加期末负担，应与期初加新增负担一致。内部领用不是额外采购收货。不自动计入退回、回收或避免生产抵扣。 |  |
| `shared_asset_life` | equipment_share | 对每项资产列举包括本节点的全部作业、节点和期间；用实测且相容的服务驱动量分配一次完整寿命负担。已结束寿命采用观察到的服务和退役；在役资产将已观察历史与有据的未来剩余服务、更换、终止和寿命终结情景结合，标明来源、不确定性、敏感性及更新。覆盖范围或分母缺失时不得定稿。避免重复直接运行燃料、另计备件或耗材及工具覆盖，或其他资产或租赁数据集。 |  |
| `period_and_reject` | crack_treatment | 将基层处理、批次、注浆、养护防护、验证及缺陷闭环与实际期间及同一作业关联。未用退回产品保留身份和保管权；失败或丢弃材料按实际产品退回、返工或废物路径处理。不合格材料或未完成修复不贡献验收长度。跨期间共用设备与库存保持一套关联负担平衡，不重复收费。 |  |


## 8. 前景数据采集、计算与质量规则

所有数量以实际记录产生，并以验收 L 为分母；条件适用语义卡在下游数据集定稿前，应展开为各个不同实际交换身份。不存在须有证据，不能假设为零。原始字段保留明确的计量单位和实际容差来源。

### 数据采集协议


| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | crack_treatment | 验收裂缝及资格确认 | 测绘；业主验收 | job_id; period_id; tunnel_use; lining_state; structural_role; cause_movement_assessment; segment_id; branch_id; start_end_coordinates_m; unique_segment_length_m; crack_width_mm; crack_depth_mm; geometry_uncertainty_mm; moisture_state; standing_water_observation; hydrostatic_pressure_state; approved_method_revision; current_regional_PDS_revision; current_label_revision; current_SDS_revision; product_suitability_approval; seal_cure_record; batch_id; injection_pressure_value; injection_pressure_unit; injection_pressure_tolerance; injection_volume_value; injection_volume_unit; injection_duration_value; injection_duration_unit; substrate_temperature_C; ambient_temperature_C; cure_start_end_UTC; cure_duration_h; cure_condition_records; verification_method; verification_result_value; verification_result_unit; acceptance_threshold_value; acceptance_threshold_unit; acceptance_tolerance; owner_criteria_source; defect_id; defect_closure; acceptance_signatory; accepted_date; accepted_length_L_m | 施工前测绘裂缝图与尺寸，规定验证后测绘验收段。记录实际清洁、完好、装嘴及封缝固化的施工前状态、配料及注浆记录和产品特定养护条件；将带单位的业主阈值和容差追溯至注明日期的来源。验收唯一段取并集求和得到 L；排除未验收段及重复施工，并保留其负担。 | m; mm; 实际压力、体积和时间单位; C; h | 每个裂缝段、批次和验收 | 资格确认至签字验收，包括失败及重复作业 | 同一有限保留衬砌和作业 | per reference flow | 批准的图纸、校准及不确定性、注明日期的工法和产品及业主标准、签字验收及缺陷闭环 |
| cp_material | crack_treatment | 供货材料及对外产品退回 | 批号质量与保管权账簿 | job_id; period_id; batch_id; lot_id; concrete_identity; supplied_state; supplier_boundary; receipt_gross_kg; receipt_container_tare_kg; receipt_net_kg; opening_stock_kg; opening_stock_count_items; new_receipt_kg; new_receipt_count_items; internal_issue_kg; internal_issue_count_items; dose_A_volume_value; dose_A_volume_unit; dose_B_volume_value; dose_B_volume_unit; volume_value; volume_unit; density_value; density_unit; density_temperature_C; density_state; density_source_revision; count_items; unit_mass_kg_per_item; used_kg; actual_dosed_kg; outward_return_kg; outward_return_count_items; return_custody_receipt; closing_stock_kg; closing_stock_count_items; installed_retained_kg; installed_retained_count_items; captured_waste_kg; captured_waste_count_items; port_disposition_event_id; port_disposition_record; uncontained_release_kg; reaction_mass_terms_kg; opening_burden_record; new_burden_record; return_burden_transfer; closing_burden_carry_forward; included_packaging_services | 在抵减任何退回之前称量毛重和皮重，或采用可追溯供应商净含量并核验收货。分别保留身份、状态和批号账簿，以及实际组分体积配料；每次体积换算均采集密度、温度、状态和单位，数量换质量时采集单件质量。核对期初库存与新增收货，不把期初库存内部领用计为第二次投入。实际配料或使用量属于中间活动，不是可相加的最终去向；安装或留存量排除单独记录的退回、废物和释放出口。质量计量材料退回按 kg、一次性注浆嘴退回按 item，核对实际匹配总投入及对外保管权；期末库存和负担独立保留。一次性注浆嘴丢弃数量 item 采用实际事件或去向凭证，不从污染混合废物 kg 推断；废物质量另行实测或用实际匹配单件质量证实。材料去向项须有记录，不能假定损耗。 | kg; item; 实际体积和密度单位; C | 每次收货、领用、批次、退回及期末库存 | 作业全部期间，含期初和期末平衡 | 每种实际材料或批号及供货门槛 | per reference flow | 经校准的秤、供应商实际标签或 SDS 和密度证据、保管权凭证及物理量和上游负担核对 |
| cp_utilities | crack_treatment | 电力、燃料及外购空气 | 表计；燃料和空气账簿 | job_id; period_id; batch_id; equipment_id; utility_identity; supplier_boundary; meter_start_kWh; meter_end_kWh; nonjob_kWh; service_time_h; power_kW; fuel_opening_kg; fuel_gross_receipt_kg; fuel_container_tare_kg; fuel_net_receipt_kg; fuel_closing_kg; fuel_unused_return_kg; fuel_captured_waste_kg; fuel_uncontained_wholefluid_kg; fuel_other_outlet_kg; fuel_volume_value; fuel_volume_unit; fuel_density_value; fuel_density_unit; fuel_temperature_C; fuel_state; fuel_density_source; incident_total_spill_kg; purchased_air_volume_m3; air_pressure_value; air_pressure_unit; air_temperature_C; air_reference_conditions; air_quality; air_supply_boundary; factor_source_revision | 读取注浆、混合、施工接近、通风及养护防护的实际回路和表计。共享负荷采用实测服务时间或负荷及记录的因果分摊；核对整个运行期间。燃料总投入及对外出口用于确定燃烧活动量；事故总量仅核查互斥分区。外购空气参考条件和现场压缩机边界用于避免重复供气。 | kWh; h; kW; kg; 实际体积、密度和压力单位; C; m3 | 每个表计期间、燃料转移、批次及事故 | 准备至闭环，包括空闲、养护及失败作业 | 实际设备回路和燃料或空气供应商 | per reference flow | 表计校准、实测驱动量、库存或保管权及出口核对和实际供应条件 |
| cp_transport | crack_treatment | 货运服务 | 货物与路线分段记录 | job_id; period_id; leg_id; cargo_identity; vehicle_mode; provider; gross_cargo_container_kg; container_tare_kg; net_cargo_kg; actual_distance_km; loading_share; empty_leg_treatment; outward_return_link; waste_transfer_link; included_delivery_boundary | 各分段的实际货物净质量与实际路线距离配对；披露装载、共享分段及空驶处理方法。核实供货产品或接收方处理是否已包含此运输，仅保留一个负责者。 | kg; km; kg*km | 每一实际分段 | 本作业全部交货、退回与废物运输 | 实际起点、终点和供应商 | per reference flow | 运单、保管权记录、路线证据及供应商边界核查 |
| cp_assets | crack_treatment | 完整寿命设备份额 | 资产服务及负担历史或情景 | job_id; asset_id; asset_configuration; consuming_job_id; consuming_node_id; consuming_period_id; service_driver_unit; job_service; all_consumer_observed_service; future_remaining_service; complete_life_service; manufacture_burden_scope; maintenance_history; replacement_history; observed_retirement_EOL; future_replacement_scenario; future_termination_EOL_scenario; forecast_source; forecast_uncertainty; sensitivity_cases; excluded_direct_fuel; excluded_spares_consumables_tools; rental_included_scope; update_trigger | 分别记录注浆或混合、压缩机、施工接近或防护及通风资产，列举每个使用者和期间。采用相容实测因果服务单位；获取完整寿命制造、维护、更换及寿命终结覆盖，明确区分已观察与有据未来部分。记录租赁范围并消除重叠；测试分母不确定性，证据改变时更新。 | item 等价份额; 实际服务驱动单位 | 每个资产服务期间及情景更新 | 完整已观察寿命，或已观察历史加有据的未来剩余寿命 | 每项资产全部使用作业、节点及期间 | per reference flow | 资产台账、服务记录、负担数据集范围、已观察退役或有据且注明来源的未来情景；覆盖或分母不完整时不得定稿 |
| cp_waste | crack_treatment | 实际废物出口 | 净称重；接收方记录 | job_id; period_id; batch_id; incident_id; waste_identity; material_state; wet_dry_basis; composition; contamination; container_gross_kg; container_tare_kg; net_waste_kg; water_content_kg; wastewater_volume_value; wastewater_volume_unit; wastewater_density_value; wastewater_density_unit; wastewater_temperature_C; wastewater_state; concentration_value; concentration_unit; receiver; treatment_gate; custody_transfer; included_transport | 按实际身份、状态和接收方区分混凝土碎屑、已固化或未固化环氧或封缝及清洗残余物、擦拭物或过滤器、废水及包装或拆除注浆嘴。称量毛重和皮重；明确水与污染物；仅在密度、状态和温度有据时换算体积。核实接收方及已包含运输，区分真实对外产品退回与环境释放。 | kg; 实际体积、密度和浓度单位; C | 每次移除、容器及保管权转移 | 整个作业，包括失败与清理 | 实际产生节点及去向 | per reference flow | 称重证据、组分或湿度记录、签字接收转移凭证及处理边界 |
| cp_emissions | crack_treatment | 直接及事故已确定组分释放 | 实测；活动量因子；事故平衡 | job_id; period_id; batch_id; incident_id; concrete_substance; CAS_or_identity; receiving_medium; particle_size_basis; measurement_value; measurement_unit; sampling_duration_h; instrument_calibration; emission_activity; activity_unit; emission_factor_value; emission_factor_unit; factor_source_revision; fuel_burned_kg; actual_SDS_revision; component_mass_fraction; composition_fraction_basis; composition_fraction_source_revision; medium_fate_fraction; fate_fraction_basis; fate_fraction_source_revision; incident_constituent_measured_kg; retained_kg; captured_kg; reaction_terms_kg; incident_total_kg; recovered_product_kg; captured_waste_kg; uncontained_wholefluid_kg; liquid_volume_value; liquid_volume_unit; liquid_density_value; liquid_density_unit; liquid_temperature_C; liquid_state; host_moisture_kg; weather_water_kg; balance_uncertainty_kg | 基本流交换前确定物质与介质；采用实际实测，或相容且记录明确的物种活动量、因子和控制条件。各流体事故仅在物理账簿中分为回收产品、捕集废物和未受控整股流体，不再次扣减事故总量。基本流交换采用实际实测释放组分 kg，或整股流体 kg 乘有据组分质量分数及介质特定归趋比例，并保留比例基准、来源及不确定性。整股配方不作为基本流交换。每个物质、介质和事件仅由一方负责，将 fluid_release 事故组分从 direct_species 排除，避免整股与部分物种重复。区分供水、干固体、保留主体水分及有据天气水量；调查未知残差，不直接分配为排放。 | kg; 实际活动量、因子、测量、体积和密度单位; C; h | 每个相关批次或事故及排放实测期间 | 全部作业及实际排放时长 | 实际节点及受纳介质 | per reference flow | SDS 或组分、因子适用性或实测质量控制、捕集回收记录及含不确定性的平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_union` | accepted_crack_repair | L = 验收唯一裂缝段并集的长度，单位 m；归一化参考输出量 = 1 m；排除未通过验收或不完整裂缝段及重复施工。 | cp_acceptance; 验收裂缝段图 | L m 及 1 m 参考服务 |  |
| `job_intensity` | resin_a; hardener_b; seal_paste; injection_ports; cleaner; water; consumables; electricity; fuel; purchased_air; product_returns; port_returns; concrete_debris; epoxy_waste; wastewater; packaging_waste | 对每个单独确定身份的交换，强度 = 实际应归属作业数量 / L；L 为验收唯一裂缝路径，单位 m。分子保留作业失败或重复施工量；L 为零时不产生输出。 | cp_acceptance; cp_material; cp_utilities; cp_waste; 实际交换数量 | 各实际交换单位每 1 m 验收裂缝路径 |  |
| `net_and_volume` | resin_a; hardener_b; seal_paste; cleaner; water; fuel; wastewater; fluid_release | 净质量 = 毛重 - 实际容器或车辆皮重，在扣除对外退回前计算。需要时，质量 kg = 实际体积乘身份、状态及温度特定密度，并采用有据单位换算；数量换质量 = 实际数量乘实测匹配单件质量。体积配料比按原单位核查，不假定为质量比。 | cp_material; cp_utilities; cp_waste; cp_emissions; 实际密度及单位 | 可追溯净质量及实际原始配料记录 |  |
| `material_custody` | resin_a; hardener_b; seal_paste; injection_ports; cleaner; water; consumables; product_returns; port_returns | 对各批号及状态采用一致物理单位，期初库存 + 新增扣皮总收货 = 安装或留存材料 + 对外未用退回 + 捕集废物 + 实际未受控整股流体释放 + 保留期末库存 + 有据反应或其他项，并注明不确定性。安装或留存材料排除每项另记损失或出口；实际配料或使用量为中间活动，不能作为可相加的最终去向。期初库存内部领用是移动，不是额外收货。一次性注浆嘴按 item 核对同样互斥的去向。期初负担 + 新增负担 = 作业归属负担 + 对外转移负担 + 期末结转负担。 | cp_material; cp_waste; cp_emissions; 保管权及负担账簿 | 各批号及期间物理量和上游负担闭合 |  |
| `fuel_activity` | fuel; direct_species; fluid_release | 燃烧燃料 kg = 期初燃料 + 新增扣皮总燃料 - 期末燃料 - 对外未用退回 - 捕集燃料废物 - 未受控整股燃料 - 有据其他未燃烧出口。事故总泄漏量 = 回收产品 + 捕集废物 + 未受控整股流体，不再次扣减；各互斥出口仅记录一次。 | cp_utilities; cp_waste; cp_emissions | 燃烧 kg 及已核对流体出口；强度除以 L |  |
| `freight_activity` | transport | 各分段运输强度 = 实际货物净质量 kg 乘实际 km 乘有据作业份额 / L。保留相容供应商边界及 kg*km 参考；仅在支持身份确认后，从 t*km 换算时乘 1000。 | cp_transport; cp_acceptance | kg*km 每 1 m 验收裂缝路径 |  |
| `asset_fraction` | equipment_share | 对每项资产，强度 item 等价份额 = （应归属本作业服务量 / 全部使用者完整寿命服务量）/ L；份额乘匹配的完整寿命制造、维护、更换与寿命终结负担。服务分子及分母采用相同实际驱动单位。已观察和有据未来部分及覆盖重叠均应明确。 | cp_assets; cp_acceptance; 完整寿命负担范围 | 资产特定等价份额及负担每 1 m 验收裂缝路径 |  |
| `species_release` | direct_species | 对每个常规物质、介质和事件，强度 kg = 实际实测释放 kg / L，或实际相容活动量乘记录明确的物种特定因子乘适用未捕集比例 / L。因子要求燃烧活动时，使用燃烧燃料活动量；明确留存、捕集与反应，不能假定 100% 固含量为零释放。排除分配给 fluid_release 的事故组分交换；每个物质、介质和事件仅一方负责，不能采用通用混合配方基本流交换。 | cp_emissions; cp_utilities; cp_acceptance; 实际因子或测量及控制 | 物种与介质特定 kg 每 1 m 验收裂缝路径 |  |
| `fluid_partition` | fluid_release | 仅物理账簿：未受控整股流体 kg = 事故总量 kg - 回收产品 kg - 捕集废物 kg，使用互斥实测出口并注明不确定性。各已确定组分及介质基本流交换的强度 kg = 实测释放组分 kg / L，或未受控整股流体 kg 乘有据组分质量分数乘实际介质特定释放或归趋比例 / L。保留实际比例基准、来源及不确定性；整股配方仅用于审计，已报告物种子集不代表整股流体总量，不允许与 direct_species 或整股及部分物种影响交换重复。 | cp_emissions; cp_waste; cp_material; cp_utilities; cp_acceptance | 整股流体仅物理账簿；已确定组分及介质 kg 每 1 m 验收裂缝路径 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `gate_quality` | accepted_crack_repair | 追溯实际静止裂缝成因或位移评估、完好适配基层及湿度和压力施工前状态、实际封缝固化及产品适用性；记录注浆、养护、验证的单位、实际阈值和容差及注明日期的业主来源。长度签字验收前所有缺陷须闭环。 | cp_acceptance; sika-sikadur52-us-2014 |
| `separate_identity` | 所有清单行 | 每个实际材料、公用工程、废物和排放须有具体身份、状态、供应商或接收方、实际流属性及单位和最终核实 UUID。条件适用卡在数据集定稿前须拆分；未解决不能视为证实不存在。 | 实际标签、SDS、保管权及详情和支持身份核实 |
| `range_quality` | 所有清单行 | 提出数量强度范围前，采集实际几何、吸收量、批次、准备、排料、废物、公用工程和共享设备证据。精确 1 m 定义不是经验产率先验；示例实验室数据不是通用现场性能或消耗量。 | 关联协议及每张卡的数量范围证据需求 |
| `closure_quality` | 所有清单行 | 核对物理量、保管权和上游负担平衡；报告计量精度、缺失与不确定性。不采用通用残差排放、期末库存输出、先抵减后再计退回或隐藏的重复供应商、资产、服务边界。 | cp_material; cp_utilities; cp_waste; cp_emissions; cp_assets |
| `life_quality` | equipment_share | 所有使用者期间及完整寿命覆盖和分母须有证据。在役未来情景须有依据、标识及敏感性测试和更新触发条件；覆盖缺失时不能定稿。 | cp_assets |
| `period_quality` | crack_treatment | 保留修复作业、混合及注浆批次、失败或返工关联以及基层处理、注浆、养护和验收日期；核对跨期间库存及资产结转，共享事件负担由一方负责。 | 全部节点协议 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | crack_treatment | 拒绝超出范围的新建或重大更换、活动或静水压力裂缝、聚氨酯止水及水工或矿山隧道；保留主体不承担新衬砌负担或避免更换抵扣。 | un-cpc3-2025; sika-sikadur52-us-2014 |
| `validate_gate` | accepted_crack_repair | 要求记录合格施工前状态、实际适配地区材料或工法、注浆前表面封缝固化、完整实际注浆与养护记录，以及注明业主来源并带单位的验证标准、结果和容差、缺陷闭环及签字验收。实验室强度或经过的时间本身不构成验收。 | sika-sikadur52-us-2014 |
| `validate_length` | accepted_crack_repair | 重新计算验收唯一路径并集及 L；每条分支仅计一次，不能用隧道长度、注浆嘴、裂缝面、施工遍数或未解决不合格项替代。确认每项交换采用相同正的验收 L 分母，并且失败、准备或排料作业仅完整保留一次。 |  |
| `validate_custody` | 所有清单行 | 审计退回前扣除皮重后的总收货量、内部移动、对外保管权、保留期末库存及结转负担。核实实际整股流体燃料出口及燃烧计算，不重复扣减事故量；捕集、废物与基本流释放保持区别。 |  |
| `validate_assets` | equipment_share | 核实每个共享资产使用者及期间、完整寿命范围和相容实测服务驱动量；在役资产的已观察历史加有据未来情景，包括更换、终止、寿命终结、不确定性、敏感性及更新。覆盖或分母缺失时不能定稿；消除重叠直接燃料、备件、工具或租赁覆盖。 |  |
| `validate_identity_and_emissions` | 所有清单行 | 最终数据集交换绑定前核实具体身份、流属性和单位；不以近似树脂生产、新隧道或聚氨酯身份替代修复服务。核查实际物种、介质及捕集、留存和反应、流体分区、天气水量和主体水分；100% 固含量不能证明零释放。明确记录范围、UUID 和材料证据缺失。 |  |
| `validate_campaign` | crack_treatment | 追溯全部批次与基层处理、注浆、养护、验证期间、准备或切换及不合格项至本节点和实际返工、废物或产品退回去向。未解决失败不得作为验收输出；共享作业因果分摊须跨期间仅核对一次。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 有限修复服务的前景数据包，带下游 process 或 lifecyclemodel 投影 |
| downstream_use | secondary_dataset; background_dataset，用于实际相容隧道维护服务 |
| allowed_use | 匹配已验收的保留交通隧道混凝土衬砌静止裂缝环氧注浆修复，并声明几何、状态、材料及验收门槛 |
| excluded_use | 新隧道或衬砌、活动或静水压力裂缝、聚氨酯堵漏、重大更换或加固、通用树脂制造、隧道运营，或无证据寿命、结构、水密性主张 |
| required_metadata | 位置、公路或铁路隧道及衬砌；成因及静止资格；裂缝段、分支、宽度和深度；实际材料及供货状态；注明日期的地区资料及业主工法和标准；作业、批次和期间；验收 L 及签字者；公用工程、运输、接收方和资产边界 |
| required_quality_disclosure | 未解决具体 UUID 及证据、实际单位参考流用量或数量范围不确定性、缺失、库存及保管权和负担平衡、失败或返工作业、实际排放及介质、共享资产已观察或未来情景及敏感性 |
| update_trigger | 批准材料、工法或门槛变化，裂缝位移或湿度与压力状态变化，验收长度或几何、供应商、公用工程、接收方边界、排放证据、资产服务或寿命情景变化，或记录纠正 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国统计司，CPC Version 3.0 解释性说明，2025 年 6 月 30 日，印刷页 285；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 交通隧道建造或修复分类范围及相邻水工隧道排除 |
| sika-sikadur52-us-2014 | handbook | Sika US，Sikadur52 产品数据表 Edition 9.23.2014，两页，美国产品网页当前链接；https://usa.sika.com/dam/dms/us01/0/Sikadur%2052.pdf | 双组分低黏度环氧路线；清洁完好、干燥或潮湿但无积水；实际体积配料；压力注浆前注浆嘴及表面封缝固化；不得稀释或在静水压力下注浆；场址特定现行资料要求；实验室数据局限 |
