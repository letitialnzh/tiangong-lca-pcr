---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.fuel-wood-of-coniferous-wood
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原始针叶薪材

## 1. 范围与适用性

本规则适用于在声明生产者路边或收集点交接、用于燃料的原始针叶木。实际短原木、劈裂木段、粗木棒、枝条、捆扎细枝及有证据的原始根或树桩均须保留树种、形态、树皮及来源标识。原始来源标签不证明可持续性或合法采伐。排除阔叶或未识别混合木、工业锯材或单板或纸浆或板材及其他用途原木、制造木片或颗粒、木炭、处理木或拆除回收木、最终热或电及消费者配送。每个具体数据集声明实际纳入的原始形态；统计木炭当量系数不得改变产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.fuel-wood-of-coniferous-wood |
| classification_refs | CPC 3.0 03131 |
| covered_products | 实际原始针叶薪材形态；声明范围内独立计量的初级林业采伐剩余物回收 |
| excluded_products | 阔叶薪材；工业原木；制造木质燃料；木炭；处理或工业回收木；交付能源 |
| representative_product | 生产者收集点交付、可追溯且用于燃料的原始针叶薪材批次 |
| production_route | 声明来源经营或自然或剩余物来源 → 采伐或移除 → 实际集材或准备 → 用途分类与交接 |
| market_state | 净原始木材收到时状态，具有实际水分、树皮及形态；不设统一可燃等级 |

经营来源替代方案继承 stand_management 父责任。造林或更新引入实际经营材料及跨期归属；自然或枯死木移除不继承这些投入。wood_collection 与 wood_preparation 父责任可采用人工、畜力或机械；技术改变实际服务或能源及直接排放记录，不规定必需设备配方。同一质量贡献的来源方案互斥，但可追溯的不同批次可并存。保留实际来源及技术差异证据。

## 3. 参考流

### 功能单位

| 字段 | 值 |
| --- | --- |
| 何种产品 | 声明生产者交接的合格原始针叶薪材 |
| 多少数量 | 1 kg |
| 何种质量 | 记录实际树种、形态、树皮和水分基准、来源及燃料去向；等级依批次确定 |
| 多长时间或周期 | 声明来源群组、采收批次及交接期间；关联生长或资产阶段及期末库存，无统一轮伐期 |
| reference_flow_link | `fuelwood_handover` |

### 参考流定义

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生产者路边或收集点交接的原始针叶薪材 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 针叶树种与来源地块；原始形态及树皮纳入情况；净收到时质量；湿基或干基水分及方法；实际来源和作业路线；能源用途去向；生产者边界；采收或交付期间；库存和上游归属边界 |

## 4. 计量与单位规则

| rule_id | 适用于 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_reference_mass` | reference product | Mass | kg | 称量扣除皮重及异物后的净验收交接木材。仅 fuelwood_handover 固定为 1 千克；所有上游投入、准备转移及损失均保留实测。 |
| `moisture_bridge` | wood mass | Mass | kg | 声明匹配样品的湿基比例 w 或干基比率 u；干质量 = 湿质量 × (1 − w)；w = u / (1 + u)。水分、树皮及样品状态须匹配；无统一干燥损失。 |
| `volume_mass_bridge` | volume-based wood records | Mass | kg | 区分实体与堆积体积。需要时计量批次匹配质量或体积及堆积系数；不得使用统一针叶木密度。热值仅为匹配水分的补充信息，不替代质量参考。 |
| `carrier_units` | operation energy | Energy | MJ | 保留原始燃料、kWh、距离及服务数量；仅当交换需要 MJ 时按 3.6 将 kWh 换为 MJ，恰好一次。燃料质量或体积换算能源须实际文件系数。 |



| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `independent_reference_range` | 非参考量 Range 上限 | 匹配实际交换属性 | 匹配实际交换单位 | reference_record_max 必须来自与待检查批次独立、预先冻结的已审查参考样本或历史期间，并匹配来源、路线、状态、单位和归一化基准。记录样本标识、时间窗口、样本量、推导方法和不确定性；不得用待检查批次自身的最大值检查自身。无独立参考时该上限未确定，保留缺口，使用实际平衡及测量核对，不宣称已通过数值上限校验。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 识别的经营群组、声明自然来源，或具有明确前期负荷交接的可追溯初级采伐剩余物 |
| starting_condition_role | 前景来源边界，不假设零负荷切断 |
| product_classification_scope | CPC 3.0 03131; actual raw conifer fuelwood |
| recursive_input_rule | 购买同类别薪材作为上游投入记录，保留来源、状态、边界及供应商数据集；不得递归重新生成或重复来源及采收负荷 |
| upstream_dataset_requirement | 要求兼容的上游来源或材料或服务数据，或披露缺口及有界估计；缺失时不得声称完整从摇篮到大门边界 |
| disclosure | 来源场址或群组、纳入阶段、未纳入作业、土壤或碳覆盖、实际边界、库存期间、来源或剩余物归属及代表性 |

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `source_partition` | source interfaces | 每份可追溯质量选择一种来源表示：经营转移、自然取用或具有前期归属的剩余物投入。生长、采伐或移除及准备为独立责任；避免重叠，包括未采集生境剩余物。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `declared_gate` | all operations | 仅包括生产者交接前实际来源、集材、截短或劈裂、条件风干、分类及装载。排除下游运输、燃烧及炭化。以木炭为主题的来源仅支持作业分解，不决定最终边界或采用其示例产率。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `cohort_assets` | sites and phases | 列出每个贡献地块、经营或采收或风干期间及共享道路或设备使用者。适用时记录建设、维护、更换及结束；按记录使用归属实际资产服务，不采用默认寿命。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `boundary_direct_release_coverage` | `stand_management`; `wood_collection`; `primary_extraction`; `wood_preparation`; `handover_sorting` | 逐一核对所有实际启用节点的现场燃烧、实际施用及逸散/泄漏，按 cp_direct_release_stand_management; cp_direct_release_wood_collection; cp_direct_release_primary_extraction; cp_direct_release_wood_preparation; cp_direct_release_handover_sorting 建立唯一活动—物质—接收介质记录。购买燃料或化学品的上游数据不能替代其现场使用排放；对供应商服务已包含的同一活动须核实覆盖并避免重复。无活动须有证据，缺失数据不能默认为零。此要求不扩大原有产品门或下游使用边界，也不假定任何燃烧、施肥、药剂或设备必然发生。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_management` | 针叶林分经营 | conditional | 仅当可归属的造林、抚育或更新属于声明的来源边界时 | managed biological production | 归属于 1 kg 参考流；保留原始批次或群组记录 |
| `wood_collection` | 来源木材采伐或移除 | conditional | 仅前景内实际采伐或移除或初级采伐剩余物采集；选择经营、自然或枯死木或剩余物来源，不重复质量 | source-to-collected wood | 归属于 1 kg 参考流；保留原始批次或群组记录 |
| `primary_extraction` | 集材至生产者收集点 | conditional | 仅包括声明生产者交接前实际发生的短途集材 | primary movement | 归属于 1 kg 参考流；保留原始批次或群组记录 |
| `wood_preparation` | 交接前截短、劈裂或风干 | conditional | 仅包括交接前有证据的准备作业；未发生的作业不得虚构投入或损失 | primary conditioning | 归属于 1 kg 参考流；保留原始批次或群组记录 |
| `handover_sorting` | 用途分类及生产者交接 | required | 在实际生产者边界核对合格薪材、转用途木材、拒收料及库存 | grading and final handover | 归属于 1 kg 参考流；保留原始批次或群组记录 |

采用实际季节批次及事件日期，不假设连续工厂。投入、产出、维护或换作业、返工及期初与期末库存记录关联真实批次。不同来源场址或技术按可归属合格产出加权，不采用不加权平均。每张条件卡须实际零或非零证据。

购买的已采集同类别木材按实际声明上游交接进入集材、准备或分类节点。兼容前期负荷仅继承一次，绕过已在前景外完成的林分经营或采集，不得虚构第二次采伐或移除作业。生产者交接仍为必需。


### 过程：针叶林分经营 (`stand_management`)

本节点 `stand_management` 必须完成 `cp_direct_release_stand_management` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 实际造林及抚育材料 (`management_materials`)

实际苗木、配方肥料及其他抚育材料使用一条条件合并卡。数据包内分别识别实际材料；保留配方质量、养分或有效成分换算及供应商范围。非经营自然来源不得继承造林配方。

- 选定流：实际造林及抚育材料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：归属于采收薪材群组的记录材料数量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_management`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

###### 实际作业能源载体 (`stand_management_energy`)

一条条件能源合并卡：按记录识别实际燃料、电力或热载体，可为零条、一条或多条具体能源交换。保留原始载体单位及向 MJ 的已核实换算。若整体外包服务完成该作业，须按原生服务单位独立记录其数量和上游边界，置于此能源卡之外；不得再重复计入其燃料或尾气。

- 选定流：实际作业能源载体
- 流属性/单位：Energy / MJ
- 数量规则：记录的可归属实际载体能源数量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_operation_at_stand_management`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：MJ
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

##### 基本流

###### 实际针叶木来源土地占用 (`land_occupation`)

仅在边界内记录土地类别、地块面积及占用期间；土地转化为独立实际事件，不得从占用推断。无统一轮伐期或土地利用变化负荷。

- 选定流：实际针叶木来源土地占用
- 流属性/单位：Area time / m2*a
- 数量规则：归属于产出群组的实测地块面积时间
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_management`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：m2*a
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

###### 纳入经营生长的大气二氧化碳吸收 (`biogenic_carbon_uptake`)

仅当纳入的生长边界、声明的清单方法及具有独立证据的完整碳台账按 carbon_uptake_reconciliation 支持该交换时记录。声明碳库与干物质基准；净库存变化本身不等于吸收量，后续能源用途不自动获得负信用。不得重复上游数据集已含的吸收。

- 选定流：二氧化碳（生物源） `da174fac-e567-42d3-99b5-a688913dc88e`
- 绑定：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 由完整且有独立证据的干碳池台账及声明方法确定 CO2 吸收，包含采出、转入转出与呼吸/释放；不得仅用净库存变化。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_carbon`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

#### 输出

##### 产品流

###### 可供声明采伐的立木针叶木 (`standing_source_wood`)

经营来源向 wood_collection 的中间交接。计量可归属立木生物量；不是最终交付参考输出，不固定为 1 千克。

- 选定流：可供声明采伐的立木针叶木
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采集批次可获得的可归属实测来源生物量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_source_at_stand_management`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

### 过程：来源木材采伐或移除 (`wood_collection`)

本节点 `wood_collection` 必须完成 `cp_direct_release_wood_collection` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 从经营节点接收的立木针叶木 (`managed_source_feed`)

仅用于经营来源采伐。关联 standing_source_wood 转移并仅继承一次前期负荷；不得把同一生物量又计为自然取用。

- 选定流：从经营节点接收的立木针叶木
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：分配给薪材采集作业的实测来源生物量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_source_at_wood_collection`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

###### 接收用于薪材回收的实测针叶木采伐剩余物 (`residue_source_feed`)

仅用于有独立证据的初级采伐剩余物回收，非工业或拆除回收废物。声明前生产者接口、剩余物状态及归属的上游负荷。同一批料与其他投入表示互斥。

- 选定流：接收用于薪材回收的实测针叶木采伐剩余物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：归属于该批次的实测接收剩余物质量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_source_at_wood_collection`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

###### 实际作业能源载体 (`wood_collection_energy`)

一条条件能源合并卡：按记录识别实际燃料、电力或热载体，可为零条、一条或多条具体能源交换。保留原始载体单位及向 MJ 的已核实换算。若整体外包服务完成该作业，须按原生服务单位独立记录其数量和上游边界，置于此能源卡之外；不得再重复计入其燃料或尾气。

- 选定流：实际作业能源载体
- 流属性/单位：Energy / MJ
- 数量规则：记录的可归属实际载体能源数量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_operation_at_wood_collection`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：MJ
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

##### 基本流

###### 从声明自然来源移除的针叶木生物量 (`natural_wood_withdrawal`)

仅在尚未作为技术系统投入时记录自然或枯死木来源取用。识别活木或死木状态及环境隔室。已具有前期产品归属的采伐剩余物采用其来源台账，不得虚构零负荷自然流。

- 选定流：从声明自然来源移除的针叶木生物量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：归属于声明薪材来源的实测木质资源移除量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_source_at_wood_collection`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

#### 输出

##### 产品流

###### 集材或准备前采集的原始针叶薪材 (`collected_fuelwood`)

实际采伐或移除责任的目标内部转移，独立于林分生长及后续准备。保留原始水分、树皮及形态；数量实测，不强制为 1 千克。

- 选定流：集材或准备前采集的原始针叶薪材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：可追溯到最终批次的实测采集薪材质量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_source_at_wood_collection`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

###### 实际独立交付的工业木材联产品 (`industrial_wood_coproduct`)

真实锯材、单板、纸浆、板材或其他用途批料的条件产出登记卡。数据包须逐项列出实际目标产品及边界，与薪材分开，并采用明确分配决定。

- 选定流：实际独立交付的工业木材联产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测独立目标联产品数量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_source_at_wood_collection`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

##### 废物流

###### 作为废物外运的采集剩余物 (`collection_exported_residues`)

仅记录具有废物去向文件并离开前景的材料。未采集枝条、保留生境木及场内剩余物留在来源台账，不虚构跨边界废物交换。

- 选定流：作为废物外运的采集剩余物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按去向记录的实测外运剩余物质量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_source_at_wood_collection`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

##### 基本流

###### 按物质识别的直接作业大气排放 (`wood_collection_air_emissions`)

仅用于前景直接释放的条件报告卡。逐项识别实测或建模物质、化石或生物碳来源及受纳大气环境；不得为宽泛尾气固定 UUID。排除已含于整体外包服务的排放。

- 选定流：按物质识别的直接作业大气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录或计算的可归属按物质识别直接排放量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_emissions_at_wood_collection`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

### 过程：集材至生产者收集点 (`primary_extraction`)

本节点 `primary_extraction` 必须完成 `cp_direct_release_primary_extraction` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 进入短途集材的已采集针叶薪材 (`extraction_feed`)

实际 collected_fuelwood 转移或直接匹配的来源批次；内部转移仅携带一次前期负荷，不作为额外采收产量。

- 选定流：进入短途集材的已采集针叶薪材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：进入集材的实测质量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_movement`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

###### 实际作业能源载体 (`primary_extraction_energy`)

一条条件能源合并卡：按记录识别实际燃料、电力或热载体，可为零条、一条或多条具体能源交换。保留原始载体单位及向 MJ 的已核实换算。若整体外包服务完成该作业，须按原生服务单位独立记录其数量和上游边界，置于此能源卡之外；不得再重复计入其燃料或尾气。

- 选定流：实际作业能源载体
- 流属性/单位：Energy / MJ
- 数量规则：记录的可归属实际载体能源数量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_operation_at_primary_extraction`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：MJ
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

#### 输出

##### 产品流

###### 准备前位于生产者收集点的原始针叶薪材 (`collection_point_wood`)

向准备或分类节点的实测内部交接；装载及自营短途搬运止于选定生产者收集点。不包括消费者配送，也不是恒定 1 千克产出。

- 选定流：准备前位于生产者收集点的原始针叶薪材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：送至该内部收集点的实测木材质量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_movement`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

##### 废物流

###### 外送实际废物去向的集材损失 (`extraction_losses`)

将实际损失及去向与留在来源处的库存分开；不预设运输损失百分比。

- 选定流：外送实际废物去向的集材损失
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测外送损失质量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_movement`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

##### 基本流

###### 按物质识别的直接作业大气排放 (`primary_extraction_air_emissions`)

仅用于前景直接释放的条件报告卡。逐项识别实测或建模物质、化石或生物碳来源及受纳大气环境；不得为宽泛尾气固定 UUID。排除已含于整体外包服务的排放。

- 选定流：按物质识别的直接作业大气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录或计算的可归属按物质识别直接排放量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_emissions_at_primary_extraction`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

### 过程：交接前截短、劈裂或风干 (`wood_preparation`)

本节点 `wood_preparation` 必须完成 `cp_direct_release_wood_preparation` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 进入截短或风干的原始针叶薪材 (`preparation_feed`)

按实际水分状态实测来自采集或集材的投入。堆积体积不等于实体体积；按形态、树皮、树种及水分匹配换算。

- 选定流：进入截短或风干的原始针叶薪材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：准备前的实测原始投入质量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_preparation`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

###### 实际作业能源载体 (`wood_preparation_energy`)

一条条件能源合并卡：按记录识别实际燃料、电力或热载体，可为零条、一条或多条具体能源交换。保留原始载体单位及向 MJ 的已核实换算。若整体外包服务完成该作业，须按原生服务单位独立记录其数量和上游边界，置于此能源卡之外；不得再重复计入其燃料或尾气。

- 选定流：实际作业能源载体
- 流属性/单位：Energy / MJ
- 数量规则：记录的可归属实际载体能源数量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_operation_at_wood_preparation`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：MJ
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

#### 输出

##### 产品流

###### 交接分类前已准备的原始针叶薪材 (`prepared_fuelwood`)

截短、劈裂或风干的原始薪材；记录实际作业及出口水分。不制造木片、颗粒或木炭。保留实测准备产量及库存变动。

- 选定流：交接分类前已准备的原始针叶薪材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：转移至分类节点的实测准备木材量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_preparation`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

##### 废物流

###### 作为废物外运的准备拒收料及树皮 (`preparation_exported_rejects`)

仅限实际外运废物；可销售树皮或木材须独立识别为联产品，不自动视为废物。保留返工作业去向，拒收料不得计为合格薪材。

- 选定流：作为废物外运的准备拒收料及树皮
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：离开本过程并作为废物的实测拒收质量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_preparation`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

##### 基本流

###### 实际风干过程中蒸发至空气的水 (`seasoning_water_to_air`)

仅在水分及库存证据支持时记录向空气的水损失。分离降雨吸水、排水及干物质损失；不得将统一鲜干产率或历史热带阔叶木案例套用于针叶木。

该选定身份为排向明确未细分大气的水蒸气，仅在披露受纳隔室为 unspecified 时使用；已知具体大气隔室须采用其独立核实的兼容身份，不得自动替换为该泛化隔室。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：fixed
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按匹配实测水分平衡计算的蒸发量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_preparation`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

###### 按物质识别的直接作业大气排放 (`wood_preparation_air_emissions`)

仅用于前景直接释放的条件报告卡。逐项识别实测或建模物质、化石或生物碳来源及受纳大气环境；不得为宽泛尾气固定 UUID。排除已含于整体外包服务的排放。

- 选定流：按物质识别的直接作业大气排放
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录或计算的可归属按物质识别直接排放量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_emissions_at_wood_preparation`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

### 过程：用途分类及生产者交接 (`handover_sorting`)

本节点 `handover_sorting` 必须完成 `cp_direct_release_handover_sorting` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 接收用于最终分类的实际针叶薪材 (`sorting_feed`)

采用最后实际前置节点：采集、集材或准备。不同批次可并存；绕过的作业不得虚构转移。

- 选定流：接收用于最终分类的实际针叶薪材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测接收木材量及可归属库存减少量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

###### 实际作业能源载体 (`handover_sorting_energy`)

一条条件能源合并卡：按记录识别实际燃料、电力或热载体，可为零条、一条或多条具体能源交换。保留原始载体单位及向 MJ 的已核实换算。若整体外包服务完成该作业，须按原生服务单位独立记录其数量和上游边界，置于此能源卡之外；不得再重复计入其燃料或尾气。

- 选定流：实际作业能源载体
- 流属性/单位：Energy / MJ
- 数量规则：记录的可归属实际载体能源数量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_operation_at_handover_sorting`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：MJ
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

#### 输出

##### 产品流

###### 生产者路边或收集点交接的原始针叶薪材 (`fuelwood_handover`)

唯一最终参考输出：净合格原始木材，排除包装及非产品土壤或异物；披露收到时树皮及水分基准。记录实际原始形态及能源用途去向。

- 选定流：生产者路边或收集点交接的原始针叶薪材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_handover`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：参考归一化恒等关系；非产率
  - 范围角色：qa_guardrail
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：calculated_from_collection

###### 实际转用途的可销售木材产品 (`diverted_wood_products`)

逐项列出真实非参考等级或用途产品及其交接；不得隐藏在薪材产率中，也不得声称统一废物切断。

- 选定流：实际转用途的可销售木材产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按声明去向实测的转用途产品质量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

##### 废物流

###### 送至声明废物管理的最终拒收木材 (`handover_rejects`)

实际离开边界的不合格或污染拒收料。重新截切作为关联返工返回 wood_preparation，仅计一次；污染状态未明材料不得进入参考输出。

- 选定流：送至声明废物管理的最终拒收木材
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测最终废物拒收量
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_handover`
- 来源：`fao-fuelwood-harvesting`; `fao-forest-product-definitions`
- 数量范围：按前景记录条件确定的范围；无统一数值默认值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：reference_record_max
  - 单位：kg
  - 基准：每 1 kg 参考流；在采集台账保留实际批次或来源分母
  - 基准类型：reference_flow
  - 证据类型：collected_record

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `attribution_priority` | intended outputs | 优先细分可独立计量来源或作业。不可分共同负荷采用兼容干木或生物量及服务记录支持的物理因果关系；无支持时采用有实际价格及期间的合理经济分配并做敏感性。薪材或剩余物不自动零负荷，不给替代信用。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `output_partition` | stock and rejects | 按批次及交接列出薪材、工业木、转用途产品、废物离场及保留库存。内部转移、回到 wood_preparation 的返工及库存变动不算额外销售；保留其负荷，最终合格交付仅计一次。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `period_shared_assets` | cohorts and consumers | 按明确分母及合计为一的份额，在记录群组、场址、使用节点及期间之间分配生长或经营及共享道路或设备服务。维护或换作业或更换或结束仅关联一次；不得先年化，再于交付时重复分配同一负荷。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

所有协议均保留原始批次、来源面积时间及期间总量及其原始分母。外包服务数量保留原生属性及单位、供应服务包含项，不属于 MJ 能源卡范围。来源或产出或期间归属一次，在匹配记录上换算单位一次，再除以匹配合格净交接 kg 一次，报告每 1 kg 参考流。已归一化记录不再除第二次。这些步骤也适用于合并卡选择的每条具体交换，不把内部投入或中间产出固定为 1 千克。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_management` | stand_management | management inputs/land | cohort records | 地块；树种；造林或抚育日期；材料及原始单位；面积；占用年数；资产ID；产出群组；分配份额 | 可追溯原始记录与校准测量；匹配批次、期间及范围 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_source_at_wood_collection` | `wood_collection` | source/harvest/removal | lot ledger | 来源地块或群组；自然或经营或剩余物状态；活木或死木；形态；树皮；毛重、皮重和净重；水分；实际产出与去向；保留剩余物；前期负荷关联; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_source_at_stand_management` | `stand_management` | source/harvest/removal | lot ledger | 来源地块或群组；自然或经营或剩余物状态；活木或死木；形态；树皮；毛重、皮重和净重；水分；实际产出与去向；保留剩余物；前期负荷关联; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_operation_at_stand_management` | `stand_management` | energy/material service | operation records | 过程与批次；实际载体或服务；供应商；原始数量及单位；燃料系数或 kWh 换算；小时或距离；使用者；服务包含项；零值证据; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_operation_at_wood_collection` | `wood_collection` | energy/material service | operation records | 过程与批次；实际载体或服务；供应商；原始数量及单位；燃料系数或 kWh 换算；小时或距离；使用者；服务包含项；零值证据; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_operation_at_primary_extraction` | `primary_extraction` | energy/material service | operation records | 过程与批次；实际载体或服务；供应商；原始数量及单位；燃料系数或 kWh 换算；小时或距离；使用者；服务包含项；零值证据; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_operation_at_wood_preparation` | `wood_preparation` | energy/material service | operation records | 过程与批次；实际载体或服务；供应商；原始数量及单位；燃料系数或 kWh 换算；小时或距离；使用者；服务包含项；零值证据; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_operation_at_handover_sorting` | `handover_sorting` | energy/material service | operation records | 过程与批次；实际载体或服务；供应商；原始数量及单位；燃料系数或 kWh 换算；小时或距离；使用者；服务包含项；零值证据; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_movement` | primary_extraction | extraction/transport balances | movement tickets | 来源与目的批次；起止边界；搬运净质量；趟次或距离；车辆或畜力或服务；装载利用率；损坏或损失去向；库存 | 可追溯原始记录与校准测量；匹配批次、期间及范围 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_preparation` | wood_preparation | conditioning mass/water | paired batch measurements | 关联批次；作业日期；输入与输出净质量；具有基准及方法的配对水分；实体或堆积体积及实测系数；吸水或排水；树皮或干损失；库存；返工 | 可追溯原始记录与校准测量；匹配批次、期间及范围 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_handover` | handover_sorting | reference/destinations | weighing and dispatch records | 批次、来源和过程；校准秤；毛重、皮重和净验收质量；形态、树皮与水分；能源用途；生产者边界；等级；转用途或废物数量；期初与期末库存；排除包装 | 可追溯原始记录与校准测量；匹配批次、期间及范围 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_emissions_at_stand_management` | `stand_management` | direct substance releases | measurement/factor ledger | 过程或批次；实际燃料或材料；命名物质；大气隔室；化石或生物来源；实测释放或文件系数及原始基准；上游服务包含项；不确定性; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_emissions_at_wood_collection` | `wood_collection` | direct substance releases | measurement/factor ledger | 过程或批次；实际燃料或材料；命名物质；大气隔室；化石或生物来源；实测释放或文件系数及原始基准；上游服务包含项；不确定性; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_emissions_at_primary_extraction` | `primary_extraction` | direct substance releases | measurement/factor ledger | 过程或批次；实际燃料或材料；命名物质；大气隔室；化石或生物来源；实测释放或文件系数及原始基准；上游服务包含项；不确定性; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_emissions_at_wood_preparation` | `wood_preparation` | direct substance releases | measurement/factor ledger | 过程或批次；实际燃料或材料；命名物质；大气隔室；化石或生物来源；实测释放或文件系数及原始基准；上游服务包含项；不确定性; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_emissions_at_handover_sorting` | `handover_sorting` | direct substance releases | measurement/factor ledger | 过程或批次；实际燃料或材料；命名物质；大气隔室；化石或生物来源；实测释放或文件系数及原始基准；上游服务包含项；不确定性; event_id; transfer_id; counterparty_process_id | 可追溯原始记录与校准测量；匹配批次、期间及范围；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_carbon` | stand_management | carbon stock/uptake | matched carbon ledger | 群组或地块；碳库；期初与期末生物量；干物质及实际碳比例；外运与保留库存；上游碳包含项；来源方法 | 可追溯原始记录与校准测量；匹配批次、期间及范围 | 保留原始单位；声明交换单位 | 逐事件或批次及期末结账 | 实际群组及报告期间 | 每个贡献地块或场址及交接点 | 每 1 kg 参考流 | 校准、票据或日志、水分方法、转移ID及核对轨迹 |
| `cp_direct_release_stand_management` | `stand_management` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_wood_collection` | `wood_collection` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_primary_extraction` | `primary_extraction` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_wood_preparation` | `wood_preparation` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_handover_sorting` | `handover_sorting` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_normalization` | all inventory rows | 保留原始总量及单位换算；每份来源或产出或期间份额归属一次；每 1 kg 参考流清单量 = 可归属交换总量 / 匹配净验收交接 kg。仅参考卡报告 1 千克。 | source totals; allocation; cp_handover | per-reference exchange | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `paired_wood_balance` | wood transfers and losses | 采用配对记录核对干木、水、树皮、异物、库存及去向。湿净质量变化不自动等于干物质损失或排放。 | cp_source_at_wood_collection; cp_source_at_stand_management; cp_preparation; cp_handover | reconciled mass/water ledger | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| carbon_uptake_reconciliation | 实际生物源 CO2 吸收 | 仅在声明的清单方法要求且有独立证据支持时记录 CO2 吸收。净碳库存变化不等于吸收量；按相同干碳池/期间核对 C_open + C_atmosphere + C_nonair_in = C_close + C_harvest_out + C_other_out。非大气输入、采出/转出及有证据呼吸或其他释放均须独立记录，池间内部转移只抵消一次；缺项不得仅凭期末减期初推定 C_atmosphere。仅将经该方法核实的 CO2 对应大气碳按 44/12 换算，其他含碳气体单独核对。上游已承接吸收不重复计入，不赋予自动负信用。 | cp_carbon；独立碳池/转移/释放记录；声明清单方法 | 有据 CO2 吸收及未解决缺口 | |
| `site_weighting` | contributing sites | 对可追溯且可比批次的可归属交换总量及合格交接 kg 分别求和再求商，不平均场址比率。保留排除或不具代表性场址披露。 | site records; cp_handover | representative per-reference exchanges | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `calculate_direct_release_ledger` | `stand_management`; `wood_collection`; `primary_extraction`; `wood_preparation`; `handover_sorting` | 每一唯一事件、物质和介质的原始释放量 E 取实测值，或按已引用适用方法从活动量 A 与同口径因子 EF 计算；只有方法确实为简单因子模型时才用 E = A * EF，先验证单位及治理边界。不同物质或介质不相加；原始释放台账保持未分配。对归属后的负荷总量仅除以匹配的正值最终参考数量 R 一次；已有最终参考强度不再归一化，共用事件仅分配一次。未解释物料差不自动转成排放，缺因子不等于零。 | cp_direct_release_stand_management; cp_direct_release_wood_collection; cp_direct_release_primary_extraction; cp_direct_release_wood_preparation; cp_direct_release_handover_sorting；现有排放卡；供应商覆盖；参考数量 | 按节点/物质/介质分列的原始与归属量及未解决缺口 |  |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `traceability` | all lots | 记录树种、形态、来源、场址、日期、边界及上游范围；未识别混合料不是针叶参考 | cp_source_at_wood_collection; cp_source_at_stand_management; cp_handover |
| `measurement_coverage` | mass/water/energy | 校准净质量与匹配水分；缺失换算或零值证据或身份详情是须披露缺口，不是假设值 | cp_preparation; cp_operation_at_stand_management; cp_operation_at_wood_collection; cp_operation_at_primary_extraction; cp_operation_at_wood_preparation; cp_operation_at_handover_sorting |
| `representativeness` | sites and periods | 列出全部贡献者、权重、采收或风干条件、库存结账及纳入或排除资产阶段；保留不确定性及敏感性 | site/cohort ledger |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | fuelwood_handover | 要求实际生产者边界具有唯一最终 1 千克净收到时原始针叶薪材参考、限定条件及具体身份证据；干燥投入及内部转移均不固定为 1 千克。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `validate_route` | source and technology | 验证实际来源或技术证据及父责任和差异记录；不重复经营与自然或剩余物投入，不虚构未发生作业，不将制造木片或木炭或消费者配送纳入本边界。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `validate_measurement` | all inventory rows | 要求中英文及投影基准为同一参考、真实采集关联，原始单位换算及归属恰好一次。合并卡须展开实际具体交换并确认正确方向、类型、属性或单位及身份。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `validate_balance` | lots and periods | 按实际去向核对合格或转用途或拒收或返工或保留库存、水分及干物质；不得有不明生物量产率或统一密度或低位热值，不给无支持碳信用。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `validate_attribution` | cohorts/sites/assets | 检查完整产出集合、共同负荷决定、合计为一份额、场址权重、来源或阶段或事件关联，避免重复共享基础设施或已含服务。实际状态不明或证据缺失阻断相应数据集声明。 | `fao-fuelwood-harvesting`; `fao-forest-product-definitions` |
| `validate_direct_release_coverage` | `stand_management`; `wood_collection`; `primary_extraction`; `wood_preparation`; `handover_sorting` | 对每个实际启用节点，以活动清单逐项核对 cp_direct_release_stand_management; cp_direct_release_wood_collection; cp_direct_release_primary_extraction; cp_direct_release_wood_preparation; cp_direct_release_handover_sorting：记录应为有量的具体基本流、证据充分的上游服务覆盖，或有证据的无相关活动。缺失/不明不是零，须作为数据包完整性阻断项。检查每种实际物质及介质的量、方法因子单位、具体 UUID 和既有卡/服务覆盖，防止漏排或重复；空分组、购买电力的上游排放或其他节点的单一 CO2 卡不能代替本节点的现场释放核对。共享资产服务不得产生重复物理排放事件。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有声明形态、水分、来源及归属的原始针叶薪材生产者边界供应建模 |
| excluded_use | 阔叶替代；制造燃料；交付热或电；无支持的完整森林碳或可持续性声明 |
| required_metadata | 树种、形态、树皮与水分；来源及场址组合；来源、作业及交接边界；参考批次；期间与库存；上游及资产范围；分配与单位换算 |
| required_quality_disclosure | 身份或计量或来源缺口、排除阶段、具体交换覆盖、范围证据、库存结账、不确定性及敏感性 |
| update_trigger | 来源或技术或边界、形态或水分、归属、资产、供应商身份变更，或更好计量及证据 |

## 11. 数据源

| 来源标识 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-fuelwood-conifer` | official_guidance | UNSD CPC 3.0 03131, Fuel wood of coniferous wood; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03131 | 官方类别背景；2026-10-08 通过已审查分类来源读取 |
| `fao-fuelwood-harvesting` | handbook | FAO, Simple technologies for charcoal making, Chapter 3: Harvesting and transporting fuelwood; https://www.fao.org/4/x5328e/x5328e04.htm | 仅支持采伐或搬运或准备分解；2026-10-08 读取；不采用示例木炭或阔叶木数量 |
| `fao-forest-product-definitions` | official_guidance | FAO, Classifications and definitions, Production and trade of wood-based forest products; https://www.fao.org/4/x2613e/x2613e2w.htm | 原始薪材与工业原木或木片或木炭区别；2026-10-08 读取；不采用统计当量作为换算系数 |
