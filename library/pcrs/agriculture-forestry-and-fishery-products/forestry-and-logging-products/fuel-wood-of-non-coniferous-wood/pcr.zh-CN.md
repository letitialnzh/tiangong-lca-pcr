---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.fuel-wood-of-non-coniferous-wood
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 生产者交付的非针叶原燃料木

## 1. 范围与适用性

适用于声明的生产者路旁或采集点交付的未处理非针叶原形燃料木。实际非针叶来源和燃料去向有记录时，木段、劈材、细枝、柴捆、粗棒、藤茎、树桩与根材可以纳入。树种混合、树皮、形态、水分及实际来源是必需身份事实，不能使用统一阔叶木平均值。排除针叶燃料木、工业用原木、机制木片或颗粒或压块、木炭、化学处理木或拆建废木、燃烧、交付热量以及零售配送。来源控制依据 unsd-nonconifer-fuelwood 和 fao-woodfuel-planting；fao-fuelwood-harvesting 的木炭供应示例只支持作业识别，不支持木炭输出或换算因子。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.fuel-wood-of-non-coniferous-wood |
| classification_refs | cpc:3.0:03132 |
| covered_products | 实际木段、劈材、细枝、柴捆、粗棒、藤茎、树桩或根材形态的未处理非针叶原燃料木，生产者交付时声明燃料去向 |
| excluded_products | 针叶燃料木；工业木材输出；处理木或回收拆建废木；机制木质燃料；木炭；燃烧产物；零售配送燃料 |
| representative_product | 注明树种、树皮及实收水分，在生产者路旁交付的非针叶劈材 |
| production_route | 管理林分、萌芽林或选择采伐，或单独追踪此前形成木质残材的收集；实际集材、截短、自然风干后核验并由生产者交付 |
| market_state | 未处理原形木材实收净状态，声明自然水分及原形态，排除包装；没有统一窑干等级 |

管理生产母活动为 stand_management。萌芽林保留有证据的萌芽桩或根系并按反复萌芽采伐建立索引；每次萌芽采伐不重复苗木建植。选择采伐或带保留木萌芽林可以留下保留树并产生独立木材输出，须按产品及期间归因。移除树桩或根材意味着终止该部分保留萌芽桩，须有实际重建决定，不能假定持续萌芽收益。residue_collection 接收原形成枝材、修枝材或采伐残材及其记录的负荷移交。不同来源可按披露比例并存，但同一木质部分不能兼属多个来源。harvest_removal 与 primary_preparation 母活动支持真实人工或机械及伐区或路旁截短差异：设备、能源载体及内部移交地点发生变化，只有标签变化不成立。来源、萌芽桩、采伐及设备记录须证明实际选择（fao-woodfuel-planting；fao-dry-forest-silviculture；fao-fuelwood-harvesting）。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在声明生产者路旁或采集点验收的非针叶原燃料木净量 |
| How much | 1 kg 合格木材实收净质量，含声明树皮与水分，排除包装和异物 |
| How well | 声明非针叶树种或混合、来源、原形态、树皮、实际水分基准、燃料去向与验收批次质量；不编造阔叶木密度或热值 |
| How long or cycle | 实际报告期间，林分建植、苗木或萌芽或选择采伐阶段、采伐事件及交付前库存结转关联验收交付批次 |
| reference_flow_link | nonconifer_fuelwood_handover |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生产者路旁或采集点交付的非针叶原燃料木 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 非针叶树种及混合；林分或树木或残材来源；来源及再生方式；原形态及树皮；净总质量和水分基准；实际采集与交付点；燃料去向；验收质量；报告期间与库存群组 |

仅最终卡固定为归一化参考量。内部湿木、风干前投入和库存仍实测。交付前自然风干可以改变水分，但不意味着加工零售燃料；实际输出形态或交付点超出所选身份时须单独核实身份，不能重命名原木流。构建数据包时须声明全部限定信息并使用交付验收记录；来源、交付点或水分未知属于数据缺口。

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_gate_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用 cp_dispatch 配对经校准毛重、皮重及异物记录，获得实际生产者交付点验收实收木材净质量；不能改成干质量或热量输出。 |
| water_dry_bridge | 各来源和移交木材 | 质量 | kg | 记录采样状态及湿基或干基水分定义。用配对批次核对实际湿质量、水和干木质；分别校正回湿、树皮与劣化，不用通用干燥损失。 |
| volume_mass_bridge | 任何实积或堆积体积记录 | 体积及质量 | m3 and kg | 记录实积、散装或堆积、孔隙及树皮约定，并用配对场址、树种、形态、水分的密度或称重证据。堆积立方米不是实积，阔叶木不是统一密度。 |
| energy_carrier_bridge | 能源语义卡 | 能量 | MJ | 保留原载体与单位；仅用精确单位关系将电量换算为能量，燃料数量则需配对热值及单位证据。无默认低位热值。外购能源或服务不能重复其内含燃料交换。 |
| resource_carbon_ledger | 立木移除及库存变化 | 干质量及碳质量 | kg | 记录实际移除干生物量、保留萌芽桩或根或叶库存、干碳证据、土地利用变化及期间。木材含碳不自动等于固碳信用或使用阶段排放。需要的场址直接排放须注明物质、介质和方法证据。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 有管理和库存记录的实际非针叶林分或树木，或此前形成并带上游负荷移交的未处理木质投入 |
| starting_condition_role | 实际采伐移除或收集前的来源和库存初始化，不是默认无负荷 |
| product_classification_scope | 生产者交付时用作燃料的非针叶原木；工业用木共产品独立标识 |
| recursive_input_rule | 外购同类木材在实际接收点记录并解析唯一上游数据集；同一部分不重复执行此前林分管理、资源移除或采伐 |
| upstream_dataset_requirement | 使用兼容来源或管理、外购能源或材料或服务及废物处理数据集；记录供应边界、缺口及归因责任 |
| disclosure | 树种及来源；再生或来源方式；管理和移除责任方；来源及生产者交付点；土地和初始碳库存；共产品；库存期间；处理状态；载体或供应方组合；缺失数据 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| producer_gate | 全部操作 | 仅纳入该木材可归因实际来源管理、移除或收集、集材和交付前整理核验；客户配送、制炭及燃烧在外。 | fao-fuelwood-harvesting; unsd-nonconifer-fuelwood |
| removal_ownership | harvest_removal; residue_collection | 采伐与资源移除是同一实际移除事件的两种责任，不是两次能源作业。管理 standing_stock_handoff 通过 managed_stock_feed 投入并带负荷责任；同一木质部分不能同时作为 wood_resource_removed 投入。仅在实际自然移除且不存在已归因技术圈立木投入表示时使用环境资源卡。无论交换表示方式如何，均保留物理移除和库存台账。林分生长在移除之前，整理在实测采集移交之后。已移除外购木或残材携带上游负荷，不再记录立木资源交换。 | fao-woodfuel-planting; fao-fuelwood-harvesting |
| residue_state | 来源残材及剔除物 | 区分采集木材、独立销售共产品、场外废物及现场保留材料。富养分叶片或萌芽桩不自动为废物，回收不意味零上游负荷。 | fao-woodfuel-planting |
| shared_period_boundary | stand_management; shared_assets | 索引建植、各苗木或萌芽或选择采伐、重植或终止事件、库存结转及服务期间；初始资本或维护、能源及共享道路负荷放入单一不重叠台账。 | fao-woodfuel-planting; fao-dry-forest-silviculture |
| conditional_operation | 来源及整理 | 从记录选取实际来源、设备和处理；记录省略过程及零使用。不使用统一萌芽轮伐期、采伐产量或风干时间；同一部分不强制同时新采伐和回收残材。 | fao-dry-forest-silviculture; fao-fuelwood-harvesting |
| `boundary_direct_release_coverage` | `stand_management`; `harvest_removal`; `residue_collection`; `primary_preparation`; `qualification_dispatch`; `shared_assets` | 逐一核对所有实际启用节点的现场燃烧、实际施用及逸散/泄漏，按 cp_direct_release_stand_management; cp_direct_release_harvest_removal; cp_direct_release_residue_collection; cp_direct_release_primary_preparation; cp_direct_release_qualification_dispatch; cp_direct_release_shared_assets 建立唯一活动—物质—接收介质记录。购买燃料或化学品的上游数据不能替代其现场使用排放；对供应商服务已包含的同一活动须核实覆盖并避免重复。无活动须有证据，缺失数据不能默认为零。此要求不扩大原有产品门或下游使用边界，也不假定任何燃烧、施肥、药剂或设备必然发生。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| stand_management | 非针叶林分与萌芽林管理 | conditional | 实际管理林分、薪炭林或林外树木投入可归因时；不得重复上游来源数据集已包含的管理。 | 管理生物生产母活动；立木库存移交采伐，不是最终交付 | 每 1 kg 参考流 |
| harvest_removal | 采伐与资源移除 | conditional | 前景实际移除立木、枯木、茎材、树桩或根材时；来源台账排除已移除外购木和重复残材移除。 | 来源至采集的采伐和资源移除责任；伐区材料移交 | 每 1 kg 参考流 |
| residue_collection | 收集此前形成的木质残材 | conditional | 实际收集非针叶枝材、修枝材或采伐残材而非新采伐时；保留原有负荷移交。 | 替代来源收集责任；采集原燃料木投入移交 | 每 1 kg 参考流 |
| primary_preparation | 路旁截短与初级处理 | conditional | 生产者交付前实际截短、劈分、清理或自然风干时；未发生操作不纳入。 | 初级处理母活动；截短原木移交，不是机制木片或窑干零售产品 | 每 1 kg 参考流 |
| qualification_dispatch | 核验与生产者交付 | required | 每个声明参考批次；须记录实际验收与最终质量。 | 分级分选；声明移交点的参考燃料木和独立非燃料去向 | 每 1 kg 参考流 |
| shared_assets | 共享通行设施与设备归因 | conditional | 实际道路、堆场、秤或工具服务多个节点、来源、输出或期间时。 | 单一共享服务台账，按消费节点和期间归因 | 每 1 kg 参考流 |

### 过程：非针叶林分与萌芽林管理 (`stand_management`)

本节点 `stand_management` 必须完成 `cp_direct_release_stand_management` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

管理生物生产母活动；立木库存移交采伐，不是最终交付. 实际管理林分、薪炭林或林外树木投入可归因时；不得重复上游来源数据集已包含的管理。

#### 输入

##### 产品流

###### 建植使用的非针叶种苗 (`planting_stock`)

记录实际树种、种源种苗净质量与成活建植事件；保留原有萌芽桩时不存在新种苗投入。

- 选定流: 建植使用的非针叶种苗
- 流属性/单位: Mass / kg
- 数量规则: 记录实际树种、种源种苗净质量与成活建植事件；保留原有萌芽桩时不存在新种苗投入。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_management
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 实际林分管理肥料和改良材料 (`management_materials`)

用一条语义卡记录实际肥料或改良产品，保留各产品及养分分析；具体交换为零、一条或多条，由记录决定，不猜测氮用量。

- 选定流: 实际林分管理肥料和改良材料
- 流属性/单位: Mass / kg
- 数量规则: 用一条语义卡记录实际肥料或改良产品，保留各产品及养分分析；具体交换为零、一条或多条，由记录决定，不猜测氮用量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_management
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 林分管理实际能源载体 (`management_energy`)

保留一条能源卡；记录计量电力、实际燃料和机械作业及原单位与有依据的换算，不重复外购服务已含能源。

- 选定流: 林分管理实际能源载体
- 流属性/单位: Energy / MJ
- 数量规则: 保留一条能源卡；记录计量电力、实际燃料和机械作业及原单位与有依据的换算，不重复外购服务已含能源。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_management
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 1000
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 供应管理林分的灌溉水 (`irrigation_water`)

仅纳入作为实际供应产品跨越边界的水，注明供应方及供给点。从自然直接取水属于 direct_water_abstraction，不属于该产品卡；降雨排除。

- 选定流: 供应管理林分的灌溉水
- 流属性/单位: Mass / kg
- 数量规则: 按供应方及供给点测量实际灌溉供水产品；环境直接取水单独记录，不绑定该产品身份。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_management
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 10000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

##### 基本流

###### 实际非针叶生长场地土地占用 (`land_occupation`)

按林分或萌芽桩群组及土地用途类别测量面积和归因占用时间；另外披露土地利用转换和初始碳库存，不得预设零变化。

- 选定流: 实际非针叶生长场地土地占用
- 流属性/单位: Area-time / m2a
- 数量规则: 按林分或萌芽桩群组及土地用途类别测量面积和归因占用时间；另外披露土地利用转换和初始碳库存，不得预设零变化。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_management
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 10000
  - 单位: m2a
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 非针叶林分管理实际直接取水 (`direct_water_abstraction`)

只有实际直接地表水或地下水取水跨越该环境资源边界。具体交换须声明确切水源及隔室并核验。外购水及降雨不是该交换；灌溉使用不能再次计数同一次取水。

- 选定流: 非针叶林分管理实际直接取水
- 流属性/单位: Mass / kg
- 数量规则: 按来源及水表测量实际取水，供给与取水责任及实际水平衡与供给产品 irrigation_water 分开。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_management
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或用水因子
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 10000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

#### 输出

##### 产品流

###### 管理非针叶可采伐立木生物量 (`standing_stock_handoff`)

实测库存或可采伐群组移交，不固定为一千克移除量。这是携带管理负荷的内部接口，不再作为第二条自然资源移除交换；保留萌芽桩与叶片仍在库存台账。

- 选定流: 管理非针叶可采伐立木生物量
- 流属性/单位: Mass / kg
- 数量规则: 实测库存或可采伐群组移交，不固定为一千克移除量。这是携带管理负荷的内部接口，不再作为第二条自然资源移除交换；保留萌芽桩与叶片仍在库存台账。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_management
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

##### 基本流

### 过程：采伐与资源移除 (`harvest_removal`)

本节点 `harvest_removal` 必须完成 `cp_direct_release_harvest_removal` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

来源至采集的采伐和资源移除责任；伐区材料移交. 前景实际移除立木、枯木、茎材、树桩或根材时；来源台账排除已移除外购木和重复残材移除。

#### 输入

##### 产品流

###### 采伐接收的管理非针叶立木库存 (`managed_stock_feed`)

将实际管理 standing_stock_handoff 与接收采伐事件和来源群组配对，保留湿质量、水分、树皮、树种及已归因管理负荷。同一木质部分的该产品接口与 wood_resource_removed 属于互斥表示；不是第二次购买自然资源，也不是固定最终参考量。

- 选定流: 采伐接收的管理非针叶立木库存
- 流属性/单位: Mass / kg
- 数量规则: 测量归属配对采伐事件和管理移交的实际湿立木库存投入；保留物理移除台账，不重复环境资源交换责任。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_harvest
- 来源: fao-woodfuel-planting; fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是固定投入或产率上限
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 采伐与集材实际能源载体 (`harvest_energy`)

用一条实际能源卡记录人工或机械采伐、伐区截短及至下一移交点的集材；人工劳动为作业记录，不视为假定化石燃料。

- 选定流: 采伐与集材实际能源载体
- 流属性/单位: Energy / MJ
- 数量规则: 用一条实际能源卡记录人工或机械采伐、伐区截短及至下一移交点的集材；人工劳动为作业记录，不视为假定化石燃料。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_harvest
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 1000
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

##### 基本流

###### 实际从自然移除的非针叶木质资源 (`wood_resource_removed`)

仅在同一木质部分没有已归因技术圈立木投入表示时，按来源、植物部位及碳基准结合配对水分干物质记录报告实际移除干木质资源。managed_stock_feed 表示的材料不记录该交换。两种情况下均保留物理移除及碳库存台账，表示方式不能抹去真实移除。

- 选定流: 实际从自然移除的非针叶木质资源
- 流属性/单位: Dry mass / kg
- 数量规则: 仅在该部分没有已归因 managed_stock_feed 或其他技术圈立木投入时测量实际干自然木质移除；保留唯一交换责任方及物理移除台账。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_harvest
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

#### 输出

##### 产品流

###### 采集的待燃料整理非针叶原木 (`harvested_raw_wood`)

在伐区或采集移交点称量实际木材及树皮并记录树种、形态与水分；内部投入不固定为最终参考数量，配对集材距离与去向。

- 选定流: 采集的待燃料整理非针叶原木
- 流属性/单位: Mass / kg
- 数量规则: 在伐区或采集移交点称量实际木材及树皮并记录树种、形态与水分；内部投入不固定为最终参考数量，配对集材距离与去向。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_harvest
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 采伐移交点的独立工业用木共产品 (`industrial_wood_coproduct`)

与燃料木分开测量实际锯用、单板用、杆材、纸浆、板材或其他工业用木并声明各移交点；此卡按实际身份展开，不假定木材共产品必然存在。

- 选定流: 采伐移交点的独立工业用木共产品
- 流属性/单位: Mass / kg
- 数量规则: 与燃料木分开测量实际锯用、单板用、杆材、纸浆、板材或其他工业用木并声明各移交点；此卡按实际身份展开，不假定木材共产品必然存在。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_harvest
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

###### 移交废物处理的采伐剔除物 (`removed_harvest_rejects`)

仅记录移除并跨越废物处理移交点的剔除物及实际组成与去向；现场保留采伐残材属于库存或残材披露，不是该废物交换，也不是销售燃料木。

- 选定流: 移交废物处理的采伐剔除物
- 流属性/单位: Mass / kg
- 数量规则: 仅记录移除并跨越废物处理移交点的剔除物及实际组成与去向；现场保留采伐残材属于库存或残材披露，不是该废物交换，也不是销售燃料木。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_harvest
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 基本流

###### 实际采伐化石燃料燃烧向空气排放的二氧化碳 (`harvest_fossil_co2`)

仅依据现场燃料燃烧记录与声明的兼容因子计算化石二氧化碳；排除上游燃料生产、燃料木使用阶段燃烧及假定避免排放。此身份为未细分空气；已知具体空气子隔室须另核实实际身份，不得自动重命名。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 绑定: fixed
- 数量规则: 仅依据现场燃料燃烧记录与声明的兼容因子计算化石二氧化碳；排除上游燃料生产、燃料木使用阶段燃烧及假定避免排放。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: `cp_emissions_at_harvest_removal`
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

### 过程：收集此前形成的木质残材 (`residue_collection`)

本节点 `residue_collection` 必须完成 `cp_direct_release_residue_collection` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

替代来源收集责任；采集原燃料木投入移交. 实际收集非针叶枝材、修枝材或采伐残材而非新采伐时；保留原有负荷移交。

#### 输入

##### 产品流

###### 此前形成的未处理非针叶木质残材 (`prior_woody_residue`)

记录修枝、枝材或采伐来源、原形成事件、移交状态、水分及上游负荷责任。同一部分不得同时作为立木与已移除材料来源。

- 选定流: 此前形成的未处理非针叶木质残材
- 流属性/单位: Mass / kg
- 数量规则: 记录修枝、枝材或采伐来源、原形成事件、移交状态、水分及上游负荷责任。同一部分不得同时作为立木与已移除材料来源。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_residue
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 木质残材收集实际能源载体 (`collection_energy`)

一条卡记录实际收集、当地移动及装载能源；保留实际运输载荷与距离，不重复原采伐能源。

- 选定流: 木质残材收集实际能源载体
- 流属性/单位: Energy / MJ
- 数量规则: 一条卡记录实际收集、当地移动及装载能源；保留实际运输载荷与距离，不重复原采伐能源。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_residue
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 1000
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采集的待燃料整理未处理非针叶木材 (`collected_residue_wood`)

测量采集移交点接收的原木质部分；木质量不包含土、石及异物，记录树皮并单独保留剔除质量。

- 选定流: 采集的待燃料整理未处理非针叶木材
- 流属性/单位: Mass / kg
- 数量规则: 测量采集移交点接收的原木质部分；木质量不包含土、石及异物，记录树皮并单独保留剔除质量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_residue
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

###### 离开收集过程进入实际废物处理的剔除物 (`residue_collection_rejects`)

仅记录实际移交场外的废物，注明污染和处理；未收集的富养分叶片及保留残材不是外购废物交换。

- 选定流: 离开收集过程进入实际废物处理的剔除物
- 流属性/单位: Mass / kg
- 数量规则: 仅记录实际移交场外的废物，注明污染和处理；未收集的富养分叶片及保留残材不是外购废物交换。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_residue
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 基本流

### 过程：路旁截短与初级处理 (`primary_preparation`)

本节点 `primary_preparation` 必须完成 `cp_direct_release_primary_preparation` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

初级处理母活动；截短原木移交，不是机制木片或窑干零售产品. 生产者交付前实际截短、劈分、清理或自然风干时；未发生操作不纳入。

#### 输入

##### 产品流

###### 进入截短或自然风干的非针叶原木 (`preparation_feed`)

将实际总投入质量、水分、树皮及树种与 harvested_raw_wood 或 collected_residue_wood 配对；保存配对批次记录，不把投入强制为一千克。

- 选定流: 进入截短或自然风干的非针叶原木
- 流属性/单位: Mass / kg
- 数量规则: 将实际总投入质量、水分、树皮及树种与 harvested_raw_wood 或 collected_residue_wood 配对；保存配对批次记录，不把投入强制为一千克。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_preparation
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 截短与初级处理实际能源载体 (`preparation_energy`)

一条实际能源卡记录发生的截短、劈分及搬运；自然风干不表示购买热量，保留原能源单位及因子证据。

- 选定流: 截短与初级处理实际能源载体
- 流属性/单位: Energy / MJ
- 数量规则: 一条实际能源卡记录发生的截短、劈分及搬运；自然风干不表示购买热量，保留原能源单位及因子证据。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_preparation
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 1000
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 截短或自然风干的非针叶原燃料木投入 (`prepared_raw_wood`)

测量移交核验的整理原木并保留实际水分与形态；仍为原木段、劈材或枝棒，不是机制木片或标准化干燥零售燃料。此内部移交不固定为参考量。

- 选定流: 截短或自然风干的非针叶原燃料木投入
- 流属性/单位: Mass / kg
- 数量规则: 测量移交核验的整理原木并保留实际水分与形态；仍为原木段、劈材或枝棒，不是机制木片或标准化干燥零售燃料。此内部移交不固定为参考量。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_preparation
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

###### 移交废物处理的整理剔除物 (`preparation_rejects`)

仅在实际去向为废物处理时记录废锯屑、树皮或污染木；有用的回收产品木段进入验收或非燃料输出台账。

- 选定流: 移交废物处理的整理剔除物
- 流属性/单位: Mass / kg
- 数量规则: 仅在实际去向为废物处理时记录废锯屑、树皮或污染木；有用的回收产品木段进入验收或非燃料输出台账。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_preparation
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 基本流

###### 交付前自然风干向空气释放的水蒸气 (`seasoning_water_vapour`)

用配对湿质量和干物质库存测量区分蒸发水与干木质劣化，降雨或回湿另行核对；不使用通用干燥损失率。此水蒸气身份为未细分空气；已知具体空气子隔室须核实其自身实际身份，不能套用此通用隔室。

- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 绑定: fixed
- 数量规则: 用配对湿质量和干物质库存测量区分蒸发水与干木质劣化，降雨或回湿另行核对；不使用通用干燥损失率。
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_preparation
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 截短向空气排放的粒径小于二点五微米颗粒物 (`preparation_pm25`)

仅纳入实际设备边界有证据的空气细颗粒物释放，来源特定测量或因子应匹配捕集控制；大块锯屑不自动等于细颗粒物，其他报告污染物须有自身物质及介质记录。此细颗粒物身份为未细分空气；已知具体空气子隔室及其他粒径组分须独立核实实际身份。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: Mass / kg
- 绑定: fixed
- 数量规则: 仅纳入实际设备边界有证据的空气细颗粒物释放，来源特定测量或因子应匹配捕集控制；大块锯屑不自动等于细颗粒物，其他报告污染物须有自身物质及介质记录。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: `cp_emissions_at_primary_preparation`
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 1
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

### 过程：核验与生产者交付 (`qualification_dispatch`)

本节点 `qualification_dispatch` 必须完成 `cp_direct_release_qualification_dispatch` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

分级分选；声明移交点的参考燃料木和独立非燃料去向. 每个声明参考批次；须记录实际验收与最终质量。

#### 输入

##### 产品流

###### 进入生产者核验的非针叶原木 (`dispatch_intake`)

记录来自选定来源或整理移交的实际木材及库存结转；为实测接收量，不是固定最终净质量；无整理时来源木材直接进入。

- 选定流: 进入生产者核验的非针叶原木
- 流属性/单位: Mass / kg
- 数量规则: 记录来自选定来源或整理移交的实际木材及库存结转；为实测接收量，不是固定最终净质量；无整理时来源木材直接进入。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: unsd-nonconifer-fuelwood
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 生产者核验与装载实际能源载体 (`dispatch_energy`)

一条卡记录生产者交付点实际称量、分选及装载能源；排除客户配送，避免重复已购买搬运服务内能源。

- 选定流: 生产者核验与装载实际能源载体
- 流属性/单位: Energy / MJ
- 数量规则: 一条卡记录生产者交付点实际称量、分选及装载能源；排除客户配送，避免重复已购买搬运服务内能源。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 1000
  - 单位: MJ
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 生产者路旁或采集点交付的非针叶原燃料木 (`nonconifer_fuelwood_handover`)

实际非针叶未处理原形木材在生产者路旁或采集点作为燃料验收。仅此输出为最终参考，含声明树皮及水分，不含包装和异物；实际形态及交付点须兼容具体身份。

- 选定流: 生产者路旁或采集点交付的非针叶原燃料木
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: fixed_value
- 适用范围: product_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: unsd-nonconifer-fuelwood
- 数量范围: 最终归一化参考定义
  - 范围角色: qa_guardrail
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: collected_record

###### 生产者分选移交点的独立非燃料木产品 (`nonfuel_destination`)

测量实际分流至独立工业或其他非燃料产品的材料，记录身份与去向，并与来源阶段共产品核对，同一木材不重复计数。

- 选定流: 生产者分选移交点的独立非燃料木产品
- 流属性/单位: Mass / kg
- 数量规则: 测量实际分流至独立工业或其他非燃料产品的材料，记录身份与去向，并与来源阶段共产品核对，同一木材不重复计数。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: fao-woodfuel-planting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

###### 生产者核验后作为废物移交的剔除物 (`dispatch_rejects`)

记录实际跨越废物移交点的不合格或污染材料；降级但作为合格燃料木售出的批次是自身合格产品批次，不自动作为废物。

- 选定流: 生产者核验后作为废物移交的剔除物
- 流属性/单位: Mass / kg
- 数量规则: 记录实际跨越废物移交点的不合格或污染材料；降级但作为合格燃料木售出的批次是自身合格产品批次，不自动作为废物。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_dispatch
- 来源: unsd-nonconifer-fuelwood
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 基本流

### 过程：共享通行设施与设备归因 (`shared_assets`)

本节点 `shared_assets` 必须完成 `cp_direct_release_shared_assets` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

单一共享服务台账，按消费节点和期间归因. 实际道路、堆场、秤或工具服务多个节点、来源、输出或期间时。

#### 输入

##### 产品流

###### 已归因的共享林区通行与堆场服务 (`shared_access_service`)

按林分或来源、消费节点、报告期间和预期输出测量实际服务使用；通过单一台账只分配一次道路与堆场负荷，仅在服务供应未包含时展开底层实际交换。

- 选定流: 已归因的共享林区通行与堆场服务
- 流属性/单位: Service / h
- 数量规则: 按林分或来源、消费节点、报告期间和预期输出测量实际服务使用；通过单一台账只分配一次道路与堆场负荷，仅在服务供应未包含时展开底层实际交换。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_shared
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

###### 已归因的共享设备与测量服务 (`shared_equipment_service`)

记录实际锯、劈木机、拖拉机或秤服务时间及使用寿命和维修边界；按有证据的使用量在采伐、收集、整理和交付间归因，排除节点能源卡已计燃料。

- 选定流: 已归因的共享设备与测量服务
- 流属性/单位: Service / h
- 数量规则: 记录实际锯、劈木机、拖拉机或秤服务时间及使用寿命和维修边界；按有证据的使用量在采伐、收集、整理和交付间归因，排除节点能源卡已计燃料。
- 数值来源模式: foreground_record
- 适用范围: site_specific
- 归一化基准: 每 1 kg 参考流
- 基准类型: reference_flow
- 证据类型: collected_record
- 采集协议: cp_shared
- 来源: fao-fuelwood-harvesting
- 数量范围: 可替换暂定宽泛质量筛查，不是允许上限或产率
  - 范围角色: qa_guardrail
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每 1 kg 参考流
  - 基准类型: reference_flow
  - 证据类型: reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide_first | 全部预期输出 | 分配前先分离实测作业和输出去向。列举燃料木、各工业木材及其他独立非燃料产品，单独降级不成为废物。剩余共享负荷使用声明且有证据的物理因果关系；缺少时报告经济分配数据和敏感性，不暗中选择比例。不自动赋予替代信用。 | fao-woodfuel-planting |
| unique_handoff | 全部木质部分 | 一个木质部分只在一个外部预期产品移交点计数。库存整理交付内部移交在组合数据包内抵消；来源木材与交付分流须核对，不重复。场外废物带实际处理边界。 | fao-fuelwood-harvesting |
| temporal_source | 林分与萌芽桩群组 | 用披露群组期间台账在实际采伐事件与预期输出间归因建植管理；区分保留萌芽桩再生、重植和树桩根材终止。结转库存及损失关联实际期间；不用统一轮伐期，不对每次萌芽采伐重计建植。 | fao-woodfuel-planting; fao-dry-forest-silviculture |
| single_shared_owner | 共享通行与设备 | 保留一个资产服务总量，列消费方和期间，按实测使用只分配一次；给每个输出分配前核对总量。节点能源排除服务内含能源。外购已移除木数据集与前景立木移除不能同时拥有同一负荷。 | fao-fuelwood-harvesting |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_management | stand_management | 管理及库存移交 | 前景事件及原始测量 | 林分或树种；来源地图；萌芽桩群组；建植重植终止事件；种苗；实际材料及产品分析；水；能源载体及原单位；面积时间；库存及可采伐质量；消费输出和期间 | 用林分登记、发票、仪表和配对库存调查；区分初始苗木与各保留萌芽桩采伐。 | carrier-native; kg; m2a | 逐事件批次或服务期间 | 实际报告期间和相关历史源阶段 | 林分或来源及轮伐阶段 | 每 1 kg 参考流 | 校准与来源移交凭证、配对台账、因子依据和不确定性 |
| cp_harvest | harvest_removal | 采伐移除木材与共产品 | 前景事件及原始测量 | 事件来源树种部位；管理责任方；移除湿干质量；保留生物量；燃料设备；集材路径载荷；全部产品废物去向；来源碳与土地利用证据 | 将授权来源地图与采伐集材记录、配对称重水分样本、产品交付及废物联单配对。 | kg; carrier-native; km | 逐事件批次或服务期间 | 实际报告期间和相关历史源阶段 | 采伐事件与下一移交点 | 每 1 kg 参考流 | 校准与来源移交凭证、配对台账、因子依据和不确定性 |
| cp_residue | residue_collection | 此前形成原木质来源收集 | 前景事件及原始测量 | 原形成事件；树种部位；产品或废物状态；移交与上游负荷责任方；湿干及异物质量；实际收集能源载荷距离；保留与采集材料 | 使用来源供应方及形成移交记录、收集称重和采样；保留原负荷移交而非假定残材免费无负荷。 | kg; carrier-native; km | 逐事件批次或服务期间 | 实际报告期间和相关历史源阶段 | 收集事件与来源 | 每 1 kg 参考流 | 校准与来源移交凭证、配对台账、因子依据和不确定性 |
| cp_preparation | primary_preparation | 原木至截短风干木移交 | 前景事件及原始测量 | 配对投入输出批次；树种形态树皮；总净湿干质量；水分基准；回湿；残材废物；库存期间；能源载体单位；实测实积堆积及密度配对 | 配对接收出料称重及水分干物质样本；解释蒸发水之前核对库存与剔除物。 | kg; m3; carrier-native | 逐事件批次或服务期间 | 实际报告期间和相关历史源阶段 | 处理批次与库存区间 | 每 1 kg 参考流 | 校准与来源移交凭证、配对台账、因子依据和不确定性 |
| cp_dispatch | qualification_dispatch | 最终参考产品、独立产品与剔除物 | 前景事件及原始测量 | 批次树种来源形态交付点；验收等级；燃料去向；毛重；皮重；异物；实收净质量；湿干基水分；树皮；验收剔除分流去向；库存入出；能源 | 使用经校准秤称量实际验收木材；核对接收木、验收燃料木、独立分流非燃料产品、废物与库存变化；排除包装。 | kg; carrier-native | 逐事件批次或服务期间 | 实际报告期间和相关历史源阶段 | 生产者验收交付批次 | 每 1 kg 参考流 | 校准与来源移交凭证、配对台账、因子依据和不确定性 |
| cp_shared | shared_assets | 共享资产服务与期间归因 | 前景事件及原始测量 | 资产服务编号；建设维护维修边界；实际使用寿命；期间；消费者；作业小时；相关面积载荷距离；分配键；内含能源；计费责任方 | 用资产登记和服务作业计量；在全部消费节点及期间核对单一总台账，排除其他地方已含费用。 | h; underlying-native units | 逐事件批次或服务期间 | 实际报告期间和相关历史源阶段 | 资产服务期间及全部消费者 | 每 1 kg 参考流 | 校准与来源移交凭证、配对台账、因子依据和不确定性 |
| `cp_emissions_at_harvest_removal` | `harvest_removal` | 实际物质特定直接释放 | 前景事件及原始测量 | 设备来源；物质种类粒径；空气水土介质；直接边界；实测释放或因子与原活动单位；因子来源和不确定性；捕集控制；归属过程期间; event_id; transfer_id; counterparty_process_id | 优先场址实测，否则采用明确引用并匹配实际载体设备控制的因子；其他实际污染物单独记录，不把大颗粒粉尘视为细颗粒物。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg; activity-native | 逐事件批次或服务期间 | 实际报告期间和相关历史源阶段 | 实际排放操作与期间 | 每 1 kg 参考流 | 校准与来源移交凭证、配对台账、因子依据和不确定性 |
| `cp_emissions_at_primary_preparation` | `primary_preparation` | 实际物质特定直接释放 | 前景事件及原始测量 | 设备来源；物质种类粒径；空气水土介质；直接边界；实测释放或因子与原活动单位；因子来源和不确定性；捕集控制；归属过程期间; event_id; transfer_id; counterparty_process_id | 优先场址实测，否则采用明确引用并匹配实际载体设备控制的因子；其他实际污染物单独记录，不把大颗粒粉尘视为细颗粒物。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg; activity-native | 逐事件批次或服务期间 | 实际报告期间和相关历史源阶段 | 实际排放操作与期间 | 每 1 kg 参考流 | 校准与来源移交凭证、配对台账、因子依据和不确定性 |
| `cp_direct_release_stand_management` | `stand_management` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_harvest_removal` | `harvest_removal` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_residue_collection` | `residue_collection` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_primary_preparation` | `primary_preparation` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_qualification_dispatch` | `qualification_dispatch` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_shared_assets` | `shared_assets` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |

每条汇总规则明确按每 1 kg 参考流报告，但这不是原始采集分母。保留原林分面积时间、湿干批次质量、来源库存、载体能源、运输载荷距离和服务小时及其原单位。先核对记录，分配合理共享输出期间负荷，只换算实际测量单位一次，然后仅除以实际验收交付净质量一次。内部投入和失水仍实测；返回原始数据须能够重现每个归一化值。Range 分母保留声明的物理筛查基准；筛查不是产率、默认数量或排除阈值。

来源台账按实际群组、采伐事件和负荷责任方把 standing_stock_handoff 关联 managed_stock_feed。对各木质部分须确定交换表示为已归因技术圈立木投入或实际自然资源移除，两者不得兼用。即使投入为技术圈表示，仍须观测实际移除干生物量、保留库存及碳变化。外购此前已移除残材或投入沿原上游移交处理。

暂定 Range 量级为主观宽泛筛查桶，不是 FAO 实测或统计阈值：种苗材料用 10 kg，实测原投入剔除物或水蒸气用 100 kg，共享立木库存或独立产品池用 1,000 kg，是为了容纳远大于单个最终批次的来源池。能源 1,000 MJ、水 10,000 kg、占用 10,000 m2a、服务 100 h 同样为可变来源期间、低产量操作及净交付前归因保留宽空间。化石二氧化碳 100 kg 和细颗粒物 1 kg 仅为宽泛释放提示，不是燃料因子或物理排放限值。零下界容纳实际缺省的条件操作。这些作者选择的数量级不声称产率、密度、效率、面积或污染物分布；只有最终 1..1 kg 范围定义归一化参考量。所有筛查外的准确实测都应保留，核对实际原基准归因及不确定性，再以经审查当地证据替换暂定筛查，不能删交换或截断数值。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_net | nonconifer_fuelwood_handover | 从实际毛质量扣除实测皮重和异物得到验收实收木材净量，保留声明树皮和水分；最终分母仅采用实际验收合格燃料木。 | cp_dispatch | 验收木材净质量 | unsd-nonconifer-fuelwood |
| normalize_actual_records | 所有清单行 | 完成实际单位换算及输出期间归因后，按每 1 kg 参考流报告实际可归因交换；只除以配对验收交付净质量一次，保留原基准和内部移交；无固定内部产率。 | cp_management; cp_harvest; cp_residue; cp_preparation; cp_dispatch; cp_shared; cp_emissions_at_harvest_removal; cp_emissions_at_primary_preparation | 参考基准交换 | fao-fuelwood-harvesting |
| matched_wood_balance | 木材移交与风干 | 按配对批次核对湿木、水、干木质、树皮、异物、保留库存、剔除物和产品去向。一致采用实测湿基或干基水分定义，只使用匹配场址树种形态水分的体积桥接；区分蒸发、干物质劣化和降雨回湿。 | cp_harvest; cp_residue; cp_preparation; cp_dispatch | 核对库存及材料水台账 | fao-fuelwood-harvesting |
| direct_releases | 实际直接释放 | 使用声明实测释放或明确记录且匹配载体设备控制的因子及精确活动单位，注明物质和接收介质；不在此归因下游燃料木燃烧排放。无有依据清单方法时碳库存报告不是负排放。 | cp_emissions_at_harvest_removal; cp_emissions_at_primary_preparation; cp_management; cp_harvest | 直接释放和独立碳库存记录 | fao-fuelwood-harvesting |
| `calculate_direct_release_ledger` | `stand_management`; `harvest_removal`; `residue_collection`; `primary_preparation`; `qualification_dispatch`; `shared_assets` | 每一唯一事件、物质和介质的原始释放量 E 取实测值，或按已引用适用方法从活动量 A 与同口径因子 EF 计算；只有方法确实为简单因子模型时才用 E = A * EF，先验证单位及治理边界。不同物质或介质不相加；原始释放台账保持未分配。对归属后的负荷总量仅除以匹配的正值最终参考数量 R 一次；已有最终参考强度不再归一化，共用事件仅分配一次。未解释物料差不自动转成排放，缺因子不等于零。 | cp_direct_release_stand_management; cp_direct_release_harvest_removal; cp_direct_release_residue_collection; cp_direct_release_primary_preparation; cp_direct_release_qualification_dispatch; cp_direct_release_shared_assets；现有排放卡；供应商覆盖；参考数量 | 按节点/物质/介质分列的原始与归属量及未解决缺口 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| species_source | 全部木材 | 核实实际非针叶植物身份或披露混合、来源部位、未处理状态和燃料非燃料去向；未知树种不替换为统一阔叶木。 | 来源地图；供应来源声明；批次采样 |
| matched_quantity | 全部数量桥接 | 秤校准、水分样本、库存日期、体积约定和换算证据须匹配相同树种形态来源批次；量化不确定性和缺失覆盖。 | cp_harvest; cp_residue; cp_preparation; cp_dispatch |
| period_completeness | 管理来源及共享负荷 | 覆盖实际建植、各相关采伐再生、终止重植、报告期间及期初期末库存；披露观测而非编造轮伐期或产量。 | cp_management; cp_shared |
| quantitative_evidence | 全部 Range 卡 | 暂定推理筛查可以替换，仅作质量提示，不是最大允许用量、损失产率系数或出版级默认值。保留真实值证据，解释超出筛查的观测，不删除真实流。 | 原始记录；实际因子；配对平衡；不确定性 |
| concrete_identity | 全部交换身份 | 最终数据集交换前解析实际载体服务产品废物物质及兼容属性单位介质的已核实 UUID；语义总括卡不是猜测的单一交换。披露缺失身份，不编造。 | 实际交换详情及支持身份核验 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | nonconifer_fuelwood_handover | 核实实际最终生产者交付点和限定信息，卡与参考身份一致，归一化合格燃料木实收净质量恰为 1 kg；包装土石不是参考木材。 | unsd-nonconifer-fuelwood |
| validate_source_choice | stand_management; harvest_removal; residue_collection | 解析各部分实际来源及母活动差异证据，不重复采伐和此前形成材料收集；移除萌芽桩根后不能默认继续萌芽；声明省略过程和零使用证据。 | fao-woodfuel-planting; fao-dry-forest-silviculture |
| validate_balance | 全部木和水 | 核对实际接收、预期产品、废物、保留材料、库存结转、水分和干物质变化，不把所有交付前质量固定为 1 kg；没有配对体积热值证据属于缺口，不用默认常数。 | fao-fuelwood-harvesting |
| validate_attribution | 全部输出与期间 | 要求完整预期输出及各移交点、明确归因优先次序、林分萌芽桩群组台账、共享消费方服务期间和唯一负荷责任方；报告敏感性并防止建植资产能源重复。 | fao-woodfuel-planting; fao-fuelwood-harvesting |
| validate_exchange | 每条清单卡 | 根据记录展开实际零一或多条总括交换，核实具体 UUID 属性单位及排放物质介质，保留原物理基准并恰一次换算和验收质量归一化；两张所示空气卡未覆盖的实际污染物仍须有物质特定记录与证据。 | fao-fuelwood-harvesting |
| `validate_direct_release_coverage` | `stand_management`; `harvest_removal`; `residue_collection`; `primary_preparation`; `qualification_dispatch`; `shared_assets` | 对每个实际启用节点，以活动清单逐项核对 cp_direct_release_stand_management; cp_direct_release_harvest_removal; cp_direct_release_residue_collection; cp_direct_release_primary_preparation; cp_direct_release_qualification_dispatch; cp_direct_release_shared_assets：记录应为有量的具体基本流、证据充分的上游服务覆盖，或有证据的无相关活动。缺失/不明不是零，须作为数据包完整性阻断项。检查每种实际物质及介质的量、方法因子单位、具体 UUID 和既有卡/服务覆盖，防止漏排或重复；空分组、购买电力的上游排放或其他节点的单一 CO2 卡不能代替本节点的现场释放核对。共享资产服务不得产生重复物理排放事件。 |  |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 声明生产者交付点非针叶原燃料木前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 有实际边界归因的合格非针叶原燃料木来源管理收集整理及生产者交付清单 |
| excluded_use | 针叶或工业原木替代；未注明平均阔叶木；木燃烧、制炭颗粒或木片生产；热量参考；统一干燥零售或客户配送交付点 |
| required_metadata | 树种组合；来源部位；萌芽苗木选择采伐或残材来源；原形态树皮水分；来源与生产者交付点；期间库存周期；载体服务供应方；产品废物移交；分配及土地碳责任 |
| required_quality_disclosure | 实际覆盖及实测计算值；采用的密度水分干物质热值证据；排放因子边界；暂定范围；省略零使用操作；未解析身份支持及数量缺口；跨期共享负荷敏感性 |
| update_trigger | 来源树种组合、管理采伐整理技术、生产者交付点、参考质量、供应方、归因、因子或实测绩效变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-nonconifer-fuelwood | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03132 | 非针叶原燃料木形态及分类边界 |
| fao-woodfuel-planting | official_guidance | https://www.fao.org/4/AC125E/ac125e03.htm | 场址树种特定薪炭林、萌芽林分管理、林外树木、残材及多产品来源；不采用统一数量 |
| fao-fuelwood-harvesting | handbook | https://www.fao.org/4/x5328e/x5328e04.htm | 移除集材、截短劈分、路旁测量、干燥储存及可变原木搬运；不采用木炭数量 |
| fao-dry-forest-silviculture | official_guidance | https://www.fao.org/4/w4442e/w4442e0b.htm | 萌芽选择采伐保留树再生差异及实际来源跨期要求 |
