---
pcr_id: pcr.construction-services.existing-local-low-voltage-unarmoured-multicore-cable-resin-cast-straight-joint-repair-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有本地低压无铠装多芯电缆树脂浇注直通接头修复服务

## 1. 范围与适用性

本PCR适用于既有外露且合格、无铠装且无屏蔽、聚合物绝缘多芯本地低压配电电缆端头的有界修复服务，采用认可压接连接器及工厂预配比双组分聚氨酯树脂浇注模壳系统，限于实际认可额定值且不高于1 kV。首先完成授权隔离、验电确认无电和持续安全控制。切退、准备、压接、模壳密封、袋内混合/浇注之前，由业主确认余长、导体/绝缘适配性和环境；之后防护至实际要求的完全固化状态核实、真实电气验收及签署交付。

完全固化验收是本PCR选定子范围，不表示所有产品均禁止其自身适用说明明确允许的提前送电。送电和回填接口需业主明确授权。排除新电缆插入段、新路线、挖沟、建筑装置/回路、电信、长途/高压、铠装/屏蔽/铅包/油纸电缆、分支接头、剪切螺栓、仅冷热缩或可重入凝胶接头、危险区域系统及后续运行。CPC3.0 54252涵盖本地电力电缆修复，本语义边界比分类窄。[un-cpc3-2025; 3m-90na-issue3]

厂商印本文献为90-NA-X配Resin470W、Issue3，虽然URL写92NA。它是路线证据，不是完整现场说明。当前470W网页链接重定向至Resin470；2012年Resin470配方数值和4GS即刻送电营销不能转用于470W或本验收关口。实际交付套件/连接器说明及合格业主准则控制。[3m-90na-issue3; 3m-resins-page]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.existing-local-low-voltage-unarmoured-multicore-cable-resin-cast-straight-joint-repair-services |
| classification_refs | CPC3.0 54252；拟议narrower关系 |
| covered_products | 申报既有本地低压多芯电缆中，一个最终验收、压接连接、完全固化的聚氨酯树脂浇注直通接头修复 |
| excluded_products | 新电缆/路线/挖沟；建筑装置；电信；长途或高压；铠装/屏蔽/铅包/油纸；分支/剪切螺栓/仅收缩/凝胶接头；危险区域作业；后续运行 |
| representative_product | 申报的外露既有无铠装/无屏蔽聚合物多芯本地电力电缆，实际认可≤1 kV套件、兼容压接连接器及工厂配对浇注袋 |
| production_route | 隔离/验电并确认保留端头；切退/准备；压接全部实际芯线；密封模壳；混合/浇注实际配对聚氨酯系统；防护/固化；测试/关闭缺陷；签署验收 |
| market_state | 达到实际要求完全固化状态及电气交付关口的有界接头修复服务，保留既有电缆载体 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一个唯一且完整验收的多芯直通接头修复 |
| How much | 1 item；实际正数N个最终验收接头唯一ID的N/N |
| How well | 声明电缆/芯数/截面积/材质/绝缘/直径/电压及现场环境；认可连接器/模具/压接和套件/树脂/模壳；实际要求完全固化状态及适用电气结果；业主签署验收 |
| How long or cycle | 一次实际修复批次，从受控隔离/进场至准备、连接/浇注、固化防护、测试、缺陷及签署交付；日历期间和共享资产寿命阶段另行索引；不声称运行寿命 |
| reference_flow_link | `accepted_joint` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完全固化并验收的本地低压多芯电缆压接树脂浇注直通接头修复服务 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 接头/现场ID；本地网络功能；电缆/导体/芯数/截面积/绝缘/直径/额定值；保留端头合格条件及余长；套件/树脂袋/连接器/模具/批号；实际固化条件/状态；电气方法/阈值/结果；隔离授权；验收ID；完成期间；送电/回填授权；套件表示模式；服务商/资产/废物边界 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| accepted_count | accepted_joint | Count | item | 采用实际正数N个最终验收接头唯一ID，N/N = 1 item。重复、全部芯线、连接器、树脂袋及米数均不增加参考输出。 |
| native_ledgers | joint_kit; separate_connectors; kit_components; supplementary_materials; count_returns; mass_returns | 实际原生Count或Mass | item; kg | 保留分开的SKU计数及材料/包装净质量台账。计数转质量需实际同SKU单位净质量和范围；体积转质量需实际体积/单位/密度/状态/温度/来源。记录真实丢弃计数，混合废物kg不能求解计数平衡。总投入为扣皮重且尚未抵扣外退。 |
| carrier_units | repair_electricity; job_fuel; job_water; freight; provider_service; shared_assets | 实际Energy; Mass; Mass*distance; Time | kWh; kg; t*km; h | 保留实际载能体及服务单位；仅明确可追溯换算。小时、循环、出勤和item不同，价格不决定单位。整份液体平衡和物质排放为不可加总视图。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有外露合格且隔离/验电无电的电缆端头及保留本地网络；无需新插入电缆段或挖沟；有实际余长/适配性及受控作业进场 |
| starting_condition_role | 保留载体接口，明确归属增量修复负担及移除材料 |
| product_classification_scope | CPC3.0 54252中较窄的修复服务子集；分类是背景，不是重复创建PCR指令 |
| recursive_input_rule | 同类别中外购独立完成修复服务承接上游范围一次；内部重复尝试是本作业事件，不是递归采购或额外验收输出 |
| upstream_dataset_requirement | 实际兼容套件或分解组件数据集；真实另供耗材、公用工程、运输/服务商及完整寿命共享资产，精确声明覆盖和排除 |
| disclosure | 既有电缆状态及合格接口；实际路线及完全固化关口；所有实际事件和期间；失败尝试；总投入/仅消耗选择；库存/皮重/退回；唯一套件表示；服务商/直接/资产范围；真实废物/释放去向 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | joint_repair | 从授权隔离/进场至签署验收完全固化接头保持一个综合责任。保留端头、新兼容压接连接器和实际模壳/树脂防护为不同组件角色；剥除、混合、浇注、等待和测试不产生独立制造节点。实际当前认可说明控制。 | 3m-90na-issue3 |
| boundary_gate | accepted_joint | 记录准备、连接器/模具/压接符合性、密封、实际批号/袋混合及充填、温湿度/固化条件和实际要求的完全固化状态准则。实际连续性/保护导体、绝缘及业主其他要求测试通过，验收前关闭缺陷。目录型式试验数值不是现场测试默认值。产品授权提前送电在本完全固化交付子范围外，并非普遍禁止。 | 3m-90na-issue3 |
| boundary_kit | joint_kit; separate_connectors; kit_components; supplementary_materials | 完整套件上游一次或真实外供分解组件二选一，排除全部捆绑重叠。任一模式都保留实物双室/净包装台账。排除既有电缆制造及避免电缆/停电/损耗抵扣；保留实际准备/防护/测试/清理材料和服务商支付资源。 |  |
| boundary_fates | joint_repair | 纳入作业引发移除、失败压接/充填/固化/复测、保留或废弃树脂/包装、真实泄漏回收及废物处理。安装/保留去向排除已另列废物/释放；中间加注量不是另一最终出口。不假设家庭垃圾路线或根据认证推断零排放。 | 3m-90na-issue3 |
| boundary_periods_assets | shared_assets; provider_service | 实际动员、隔离/准备、连接/浇注、固化/防护、验收/返工和撤场按日历期间索引。共享压接器/模具、仪表和临时机具需全部作业/节点/期间消费者及完整制造/维护/更换/寿命终结范围；保留既有载体不使当前修复免费。服务商、租赁、直接运行和资产/备件各范围只有一个归属。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：组件模式下外购的树脂系统及模壳组件 (`kit_components`)

过程／待建立交换的方向／类型：`joint_repair` / `inputs` / `product`.

只在分解上游模式使用，涵盖单独供应的实际认可配对树脂/固化剂袋、模壳、盖及其他套件组件。按实际身份实例化不同组件交换，不得叠加完整套件采购。依其实际说明保持交付的配对系统完整，不设定配方或部分袋混配比例。净含量、双室和包装子台账与验收接头保留树脂、期末库存、实际退回、废物和真实释放核对。 供应归属包含同范围真实期初库存加扣皮重新收货减承接期末库存及其上游负担；实际退回按声明清单视图处理。

- 采集对象：组件模式下外购的树脂系统及模壳组件
- 流属性/单位：Mass / kg
- 数量规则：按cp_materials及声明退回视图，记录实际匹配组件净kg库存调整后作业归属供应量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`3m-90na-issue3`; `3m-resins-page`

数量范围证据需求：需要真实组件/包装净含量及实测消耗；2012年Resin470数值不能规定470W组成、密度、适用期、固化时间或用量范围。

#### 采集要求：实际增量准备、防护及测试耗材 (`supplementary_materials`)

过程／待建立交换的方向／类型：`joint_repair` / `inputs` / `product`.

按组成和用途实例化实际另供胶带、磨料、清洁剂、擦布、吸附材、手套、围护膜或测试耗材。纳入服务商支付的真实消耗及清理/返工。排除已包含在所选套件数据集中的用品；实际无使用须有记录，不强制假设耗材。水另列归属。已使用或加注质量为中间活动，不是可叠加的最终材料去向。 供应归属包含同范围真实期初库存加扣皮重新收货减承接期末库存及其上游负担；实际退回按声明清单视图处理。

- 采集对象：实际增量准备、防护及测试耗材
- 流属性/单位：Mass / kg
- 数量规则：按cp_materials及声明退回视图，记录实际另供材料净kg库存调整后作业归属供应量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

数量范围证据需求：需要项目实际产品、净量/皮重测量、适配性及独立同类使用证据；未知不等于零。

#### 采集要求：实际用于修复机具直接运行的燃料 (`job_fuel`)

过程／待建立交换的方向／类型：`joint_repair` / `inputs` / `product`.

按实际身份实例化申报作业边界内自有机具及场地车辆燃料。采用扣除皮重且尚未抵扣退回的总投入台账，分别记录真实最终未燃烧去向。已燃烧燃料决定运行排放；采购量不自动等于燃烧量。真正服务商交换已覆盖时排除重复直接覆盖。 供应归属包含同范围真实期初库存加扣皮重新收货减承接期末库存及其上游负担；实际退回按声明清单视图处理。

- 采集对象：实际用于修复机具直接运行的燃料
- 流属性/单位：Mass / kg
- 数量规则：按cp_fuel及声明退回视图，记录实际库存调整后作业归属净燃料kg供应量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`

数量范围证据需求：需要实际燃料身份、称重净收货量或可追溯的体积/密度/状态/温度、库存及设备负荷；无通用耗油率。

#### 采集要求：实际采购的修复材料及废物运输 (`freight`)

过程／待建立交换的方向／类型：`joint_repair` / `inputs` / `product`.

仅采用参考属性兼容的吨公里采购服务，记录实际载荷、各段、空返处理、包装及范围。直接车辆运行则列实际燃料、电力、资产及相关资源，排除重叠运输服务。乘客或出勤小时不得重命名为吨公里。

- 采集对象：实际采购的修复材料及废物运输
- 流属性/单位：Mass*distance / t*km
- 数量规则：按cp_freight记录实际兼容采购承运t*km归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_freight`

数量范围证据需求：需要实际运输活动和承运商数据集范围；不假设距离、载荷或返程系数。

#### 采集要求：实际按小时计量的有界采购修复支持服务 (`provider_service`)

过程／待建立交换的方向／类型：`joint_repair` / `inputs` / `product`.

仅实例化真正另购且参考为时间的支持服务，须有已完成资源/结果范围，例如实际适用的认可隔离或电气测试服务商。核实人员、出行、工具、电力、耗材、废物管理是否包含。价格或出勤次数不能证明小时量。实际服务属性/单位不同，须解析声明匹配的真实交换，不能换成本时间卡；未覆盖资源仍由实物卡归属。

- 采集对象：实际按小时计量的有界采购修复支持服务
- 流属性/单位：Time / h
- 数量规则：按cp_provider记录实际兼容已完成采购支持小时归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_provider`

数量范围证据需求：需要实际合同、时间台账、结果及包含/排除资源范围；通用小时人工不能证明完成接头测试验收。

#### 采集要求：共享修复工具及临时机具的完整寿命服务分摊 (`shared_assets`)

过程／待建立交换的方向／类型：`joint_repair` / `inputs` / `product`.

小时为因果驱动时，记录重复使用压接器/模具、仪表、围栏、临时防护和机具的实际兼容使用小时。列出全部消费作业/节点/期间。提供各资产制造、维护、更换、寿命终结范围，采用已完成观测寿命或已观测历史加有依据的剩余服务、更换/终止及处置情景。其他驱动须有实际属性/单位证据，本卡不将循环次数换成小时。排除直接运行及服务商/租赁已覆盖的工具备件。

- 采集对象：共享修复工具及临时机具的完整寿命服务分摊
- 流属性/单位：Time / h
- 数量规则：按cp_assets及完整寿命范围记录实际兼容因果资产服务小时归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

数量范围证据需求：需要完整寿命负担、完整消费者分母、剩余寿命依据及不确定性/敏感性/更新计划；缺范围或分母阻止最终数据集。

#### 采集要求：实际退至修复边界外的可复用套件或连接器 (`count_returns`)

过程／待建立交换的方向／类型：`joint_repair` / `outputs` / `product`.

记录实际外退的未用套件/连接器SKU，与原生计数收货匹配，声明接收方、状态和交接。内部领用或期末库存不是退回交换。按相同SKU，期初归属数量加外部收货数量核对至互斥的final_used_SKU_count、discarded_count、outward_return_count和closing_carried_count。使用/加注活动不是另一个最终出口。已开套件须有套件转组件的实物转化台账，关联真实源套件计数及组件实物去向；不得从组件质量重构完整套件等价数量。不得从混合污染废物kg推断丢弃数量。仅消耗清单中保留实物交接台账，不重复列退回交换或抵扣。

- 采集对象：实际退至修复边界外的可复用套件或连接器
- 流属性/单位：Count / item
- 数量规则：按cp_materials记录实际匹配SKU外退计数归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

数量范围证据需求：需要实际计数/交接记录及状态相关上游负担处理；不假设未用套件退回率。

#### 采集要求：实际退至修复边界外的未用材料 (`mass_returns`)

过程／待建立交换的方向／类型：`joint_repair` / `outputs` / `product`.

记录实际兼容材料外退净质量，包含接收方认可该状态时另购材料残余。每项身份和包装皮重分开。匹配期初/总收货/期末库存保留上游负担，核对时不重复外部领用或虚构负采购。完整套件模式中其内部组件退回为实物交接子台账，须明确兼容上游套件范围处理，不额外给材料抵扣。 仅消耗清单中保留实物交接台账，不重复列退回交换或抵扣。

- 采集对象：实际退至修复边界外的未用材料
- 流属性/单位：Mass / kg
- 数量规则：按cp_materials记录实际外退净材料kg归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

数量范围证据需求：需要真实接收方、身份、状态、皮重及交接证据；袋内剩余树脂不自动产生回收抵扣。

#### 采集要求：实际退至作业边界外的未燃烧燃料 (`fuel_returns`)

过程／待建立交换的方向／类型：`joint_repair` / `outputs` / `product`.

记录实际外退燃料净量、身份、状态及交接。期初/期末保留燃料为库存，不是外退。回收泄漏物只有真实在最终去向被接收时才为退回，否则归属实际废物或库存一次。 仅消耗清单中保留实物交接台账，不重复列退回交换或抵扣。

- 采集对象：实际退至作业边界外的未燃烧燃料
- 流属性/单位：Mass / kg
- 数量规则：按cp_fuel记录实际外退燃料净kg归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`

数量范围证据需求：需要真实燃料身份、称重或有效换算的净量、接收方及交接证据；不默认回收燃料抵扣。

#### 采集要求：实际退至作业边界外的未用水 (`water_returns`)

过程／待建立交换的方向／类型：`joint_repair` / `outputs` / `product`.

记录真实兼容未用水外退的身份和交接。保留水为期末库存；收集处理的污染水属于废水，不是可复用退回。 仅消耗清单中保留实物交接台账，不重复列退回交换或抵扣。

- 采集对象：实际退至作业边界外的未用水
- 流属性/单位：Mass / kg
- 数量规则：按cp_water记录实际未用水外退净kg归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`

数量范围证据需求：需要真实外退净水kg及接收方/状态证据；未用供水不自动产生退回。

#### 采集要求：实际移除的导体、绝缘及护套废物 (`cable_cuttings`)

过程／待建立交换的方向／类型：`joint_repair` / `outputs` / `waste`.

追踪既有电缆切退和旧接头移除材料，物理分离时按材料分别记录，否则记真实混合组成。这是既有载体移除，不是新购电缆制造。明确接收回收/处置路线、运输及处理范围，不给避免生产抵扣。

- 采集对象：实际移除的导体、绝缘及护套废物
- 流属性/单位：Mass / kg
- 数量规则：按cp_waste记录实际接收方特定移除材料净kg归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`

数量范围证据需求：需要实际切除长度/称重、材料组成及接收记录；不能只用截面积推断导体kg或把废料价值当作生产。

#### 采集要求：实际树脂残余、污染耗材及包装废物 (`resin_pack_waste`)

过程／待建立交换的方向／类型：`joint_repair` / `outputs` / `waste`.

按状态、污染及接收方实例化实际固化/未固化树脂残余、空双室袋/保护外袋、模壳废边、清理/吸附废物和其他套件/耗材包装。包装皮重不是净树脂。验收接头保留的模壳和固化树脂不得列废物。失败浇注拆除物及固化缺陷废物追溯至实际修复尝试。来源中的家庭垃圾措辞不能确立实际废物的法律或技术去向。

- 采集对象：实际树脂残余、污染耗材及包装废物
- 流属性/单位：Mass / kg
- 数量规则：按cp_waste记录实际分别核对的残余及包装净kg归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`3m-90na-issue3`

数量范围证据需求：需要真实固化状态、组件/包装质量、污染、去向及处理证据；无通用家庭垃圾路线。

#### 采集要求：实际交付接收方的未燃烧燃料废物 (`fuel_waste`)

过程／待建立交换的方向／类型：`joint_repair` / `outputs` / `waste`.

记录接收方真实认可的未燃烧燃料废物净质量及污染/状态，仅以该废物为最终去向时纳入回收泄漏物。吸附材质量在resin_pack_waste另列，与其所含燃料不得重复。整份未围控燃料为实物去向审计；仅真实释放物种/介质进入基本流交换。

- 采集对象：实际交付接收方的未燃烧燃料废物
- 流属性/单位：Mass / kg
- 数量规则：按cp_fuel记录实际未燃烧燃料废物净kg归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`

数量范围证据需求：需要真实净燃料组分、污染、接收/处理及泄漏去向证据；无通用整份油类基本流身份。

#### 采集要求：实际物质特定的常规及事故释放 (`actual_releases`)

过程／待建立交换的方向／类型：`joint_repair` / `outputs` / `elementary`.

按真实物质/物种和接收空气、水或土壤介质实例化直接运行及清洁剂/树脂/操作事故释放，适用时记录粒径。采用测量或具有适用证据的组成、去向和系数计算，常规燃料释放与事故释放分别归属事件。不得将整份泄漏树脂/燃料混合物报为通用基本流，或把平衡残差变成排放。整份液体和部分物种视图不可加总。低VOC、室温固化、REACH合规或SDS组成都不是排放系数或零排放证明。

- 采集对象：实际物质特定的常规及事故释放
- 流属性/单位：Mass / kg
- 数量规则：按cp_releases记录实际有证据物种及介质kg归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_releases`
- 来源：`3m-90na-issue3`; `3m-resins-page`

数量范围证据需求：需要真实物种/介质、实测释放或有效配方/去向/系数及不确定性证据；未识别混合物和通用VOC/NOx近似匹配仍未解析。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| joint_repair | 压接、树脂浇注及验收修复的综合作业 | required | 每个范围内修复 | 业主交付的综合修复装配及防护；作业内索引有限配对袋混合批次及实际接头尝试 | 1 item验收接头修复 |

生产为离散作业/尝试及厂商配对树脂袋的有限批次。将套件批号、开袋/混合/浇注/固化时间、清理/换批、全部实际芯线和测试关联接头/尝试ID及日历期间。按因果事件驱动将共享现场准备仅分摊一次到实际验收N。失败压接、空洞充填、固化缺陷或电气失败回到joint_repair对应准备/连接/浇注/测试步骤，保留全部新增资源。移除材料进入真实退回/废物/释放路径；未解决或放弃接头无验收输出。不隐含独立电缆/树脂制造、仅测试或固化等待节点。

空流组表示未规定强制交换；实际适用交换必须依据真实身份、属性/单位和证据实例化。未知资源或去向是数据缺口，不是零。条件性语义族可能在数据生产时需要多个分别解析的交换。

### 过程：压接、树脂浇注及验收修复的综合作业 (`joint_repair`)

#### 输入

##### 产品流

###### 实际配套认可的完整树脂浇注直通接头套件 (`joint_kit`)

仅完整套件上游模式采用本投入。声明实际SKU、交付组件和未包含的连接器。套件内配对的聚氨酯树脂/固化剂袋、模壳、盖、胶带、磨条和手套保留实物子台账，不再作为第二笔采购交换。证明连接器适配性及实际每项套件组件。 供应归属包含同范围真实期初库存加扣皮重新收货减承接期末库存及其上游负担；实际退回按声明清单视图处理。

- 选定流：实际配套认可的完整树脂浇注直通接头套件
- 流属性/单位：Count / item
- 数量规则：按cp_materials及声明退回视图，记录实际原生SKU库存调整后作业归属套件供应量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`3m-90na-issue3`

数量范围证据需求：需要实际适配套件规格、认可电缆尺寸、收货、净包装内容及独立代表性用量记录；选型表是适配边界，不是通用消耗量。

###### 另行供应的认可导体压接连接器 (`separate_connectors`)

逐一记录实际连接器SKU、导体适配性、截面积、芯线身份及存在时的保护导体、模具和压接要求。只涵盖套件数据集未包含或组件模式另供的连接器；已在所选套件上游中的连接器不得重复采购。失败连接器仍保留实际消耗和追溯。 供应归属包含同范围真实期初库存加扣皮重新收货减承接期末库存及其上游负担；实际退回按声明清单视图处理。

- 选定流：另行供应的认可导体压接连接器
- 流属性/单位：Count / item
- 数量规则：按cp_materials及声明退回视图，记录实际原生SKU库存调整后作业归属连接器供应量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`3m-90na-issue3`

数量范围证据需求：需要实际连接器认可、SKU数量及同类接头的验收/失败使用记录；不能默认每接头一个连接器或固定压接次数。

###### 实际向修复作业供应的电力 (`repair_electricity`)

计量实际压接、测试、充电、照明、固化防护及其他用电支持，包含重复作业。手动工具或环境温度固化不证明作业用电为零。电网、发电机及服务商用电边界分清；电池充电损耗在观测供电边界仅归属一次。

- 选定流：实际向修复作业供应的电力
- 流属性/单位：Energy / kWh
- 数量规则：按cp_energy记录实际归属计量供电kWh除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`

数量范围证据需求：需要实际电表/充电记录及代表性工况；不默认工具功率乘小时或固化能耗。

###### 实际用于准备、清理或测试支持的供水 (`job_water`)

记录实际收货及用水，包括仅在认可且实际使用时的冲洗、围护和测试支持。区分并入/保留水、期末库存、真正退回、收集废水及核实的蒸发或释放；湿废物总量或树脂浇注路线不能提供水量。 供应归属包含同范围真实期初库存加扣皮重新收货减承接期末库存及其上游负担；实际退回按声明清单视图处理。

- 选定流：实际用于准备、清理或测试支持的供水
- 流属性/单位：Mass / kg
- 数量规则：按cp_water及声明退回视图，记录实际库存调整后作业归属净水kg供应量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`

数量范围证据需求：需要实测实际用量和去向；不强制用水清洗，不作无证据体积质量换算。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完全固化并验收的本地低压多芯电缆压接树脂浇注直通接头修复服务 (`accepted_joint`)

一个item为实际要求的完全固化状态、电气和签署修复验收关口全部完成后，具有唯一身份的完整多芯直通接头。N为最终验收接头唯一ID的正数计数；参考为N/N = 1 item。所有芯线/连接器、树脂袋、压接、尝试、复测及未完成或拒收接头均不增加N，但保留其归属负担。计数不证明不同配置电缆尺寸、寿命或电气性能相等。

- 选定流：完全固化并验收的本地低压多芯电缆压接树脂浇注直通接头修复服务
- 流属性/单位：Count / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`3m-90na-issue3`

数量范围证据需求：此为精确归一化定义，不是经验收率范围。必须有实际验收ID和关口证据；比较数据集还需代表性配置及实测返工证据。

##### 废物流

###### 实际收集的废水或回收液体废物 (`wastewater`)

只记录实际收集并交接接收方的液体，保留清洁剂/树脂污染及处理身份。回收泄漏物只进入一次实际最终退回、废物或库存去向；总泄漏量为审计事件，不再增加输出。未围控液体进入实物去向核对；基本流物质量是另外的不可加总视图。

- 选定流：实际收集的废水或回收液体废物
- 流属性/单位：Mass / kg
- 数量规则：按cp_water记录实际收集液体废物净kg归属量除以验收N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`

数量范围证据需求：需要实测量、组成及接收方证据；零需证明实际无发生，环境温度固化不能证明零。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_joint | joint_repair | 无预期联产品。将实际全部尝试、切退、混合/浇注清理、防护及测试归属到有界可比批次的真实正数最终验收N。废弃或放弃作业保留负担；N为零的批次不能提供本验收参考数据集。废料出售不是修复联产品或避免生产抵扣。 |  |
| allocation_events | joint_repair | 每个有限袋批次、换批、隔离/准备和清理事件指定唯一归属及期间。直接事件关联真实接头ID，共享事件按记录的因果用量在全部消费者接头间分摊，包含失败尝试。报告不确定性和拒收路径，不得同时直接列事件又将同事件放入共享池。 |  |
| attribution_once | 全部清单行 | 归属只实施一次。使用event_share前记录每个分子的ledger_scope和attribution_state：已归属本工单的数量使用event_share = 1；仅未分摊的共用事件数量使用有证据的因果目标份额，并覆盖全部使用者核对。期初、收货、期末、退回、废物和释放必须采用相同范围及归属状态。不得将已归属工单的数量再次乘以先前份额。 |  |
| allocation_assets | shared_assets | 各实际资产采用全部作业/节点/期间的兼容因果实测驱动。完整寿命制造、维护、更换及处置负担按目标驱动除以完整寿命驱动分摊。采用已完成观测寿命，或观测历史加有依据剩余服务/更换/终止/寿命终结情景、来源、不确定性、敏感性及更新触发。缺分母或范围阻断最终数据集。期间合计仅核对一次，不每年重新分摊全制造。 |  |
| allocation_overlap | joint_repair | 明确一致选择总投入加出口或仅消耗清单处理。总投入扣皮重且在退回抵扣之前，库存保留上游负担。仅消耗视图不得同时给相同退回抵扣。计数和质量实物子台账、整份液体及物种视图、组件及套件范围、运输及直接车辆、服务商及实物资源、资产/备件/租赁范围互相核对，不重复相加。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | joint_repair | 唯一完整验收接头 | foreground_record | joint_id; attempt_id; period_id; cable_id; network_function; conductor_material; cores; CSA_mm2; cable_diameter_mm; insulation; rated_voltage_V; retained_end_slack; isolation_authority; prove_dead_result; connector_SKU; die_id; crimp_pattern; kit_SKU; pouch_lot; mixing_time; fill_time; cure_conditions; full_cured_state_criterion; cure_result; test_method; test_threshold; calibration; test_results; defect_closure; acceptance_time; acceptance_signature; accepted_joint_count_N; energisation_authority; backfill_authority | 核实业主隔离/适配性及实际交付说明。全部芯线和尝试关联唯一接头；保留实际要求完全固化状态、电气结果及最终签署验收ID。N为正数唯一验收ID，不重复计算尝试。 | item; recorded numeric units and categorical attributes | 每笔实际收货、领用、尝试、事件及验收；批次结束核对 | 全部有界作业批次及实际关联资产寿命/服务期间 | 申报修复现场及实际供应商/服务商/接收方范围 | per reference flow | 签署测试、固化证据、实际套件/连接器说明及校准；不得采用目录现场试验默认值 |
| cp_materials | joint_repair | 实际套件/组件/耗材收货、状态及退回 | foreground_record | joint_id; attempt_id; batch_id; period_id; material_id; SKU; kit_mode; included_scope; excluded_scope; opening_attributable_count; gross_received_count; final_used_SKU_count; discarded_count; outward_return_count; closing_carried_count; opening_attributable_net_kg; gross_received_net_kg; package_tare_kg; net_chamber_A_kg; net_chamber_B_kg; used_intermediate_kg; installed_retained_net_kg; discarded_net_kg; outward_return_net_kg; closing_carried_net_kg; actual_released_net_kg; unit_net_mass_kg; quantity_volume; volume_unit; density_kg_per_volume_unit; density_state; density_temperature; density_source; receiver; custody; upstream_burden_carry; event_share; ledger_scope; attribution_state; accepted_joint_count_N; attribution_scope; inventory_view; transformation_id; opened_kit_count_audit; transformation_component_ids; component_net_kg; transformation_component_fates | 记录相同SKU原生计数和称重净质量，分开包装皮重，总投入在抵扣退回之前。期初加外部总收货与期末承接库存、互斥最终已用SKU数量、实际丢弃数量、外退及相应最终质量去向核对。内部领用和中间加注不增加外部交换；核对完整套件/组件范围并保留实物子台账。计数质量或体积质量换算需实际匹配证据。final_used_SKU_count排除另列discarded_count；失败已用套件/连接器只有一个申报原生计数最终去向，不能重复。 作业归属供应量为同范围期初归属库存加扣皮重外部总收货减期末承接库存，并承接上游负担。总投入加出口保留实际外部出口；仅消耗还排除对应实际退回供应一次，不能重复退回抵扣。 原生final_used_SKU_count和discarded_count是互斥最终SKU状态，不是加注/消耗活动。仅真实完整SKU归入丢弃状态时计丢弃数；包装/树脂质量去向不能虚构完整套件丢弃数量。内部加注不可叠加。 已开套件计数是审计活动，经transformation_id关联真实原SKU计数、组件身份/净质量及最终去向。组件实物记录不构成虚构完整套件计数等价；final_used_SKU_count、discarded_count、outward_return_count和closing_carried_count为互斥最终源SKU状态。 | item; kg; declared actual volume unit | 每笔实际收货、领用、尝试、事件及验收；批次结束核对 | 全部有界作业批次及实际关联资产寿命/服务期间 | 申报修复现场及实际供应商/服务商/接收方范围 | per reference flow | 校准秤、收货/标签、同SKU单位质量、批号/双室/净包装证据及退回交接。安装/保留排除另列废物/释放。保留泄漏物在期末库存，回收泄漏物仅进入最终去向一次 |
| cp_energy | joint_repair | 实际电力及兼容用量分摊 | foreground_record | joint_id; attempt_id; period_id; equipment_id; supply_boundary; meter_start_kWh; meter_end_kWh; charging_loss_kWh; included_scope; excluded_scope; event_share; ledger_scope; attribution_state; accepted_joint_count_N | 计量真实供电，以可追溯充电损耗归属核对读数差。归属之前核对直接/共享负荷并排除服务商/发电机重叠。 | kWh | 每笔实际收货、领用、尝试、事件及验收；批次结束核对 | 全部有界作业批次及实际关联资产寿命/服务期间 | 申报修复现场及实际供应商/服务商/接收方范围 | per reference flow | 电表校准，全部消费者分摊合计为观测事件范围；未用电力须有无使用证明 |
| cp_fuel | joint_repair | 燃料总投入、库存、燃烧量及去向 | foreground_record | joint_id; attempt_id; period_id; equipment_id; fuel_identity; opening_attributable_net_kg; gross_received_net_kg; closing_carried_net_kg; outward_return_net_kg; nonburned_waste_net_kg; nonburned_release_net_kg; other_nonburned_final_net_kg; total_spill_audit_kg; recovered_spill_final_destination; retained_spill_in_closing_kg; quantity_volume; volume_unit; density_kg_per_volume_unit; density_state; density_temperature; density_source; package_tare_kg; included_scope; event_share; ledger_scope; attribution_state; accepted_joint_count_N; receiver; custody; treatment_scope; contamination; absorber_fuel_fraction_kg; attribution_scope; inventory_view; upstream_burden_carry | 称量净收货和库存或采用实际可追溯换算。燃烧kg为期初加总收货减期末及互斥未燃烧最终出口。总泄漏仅审计；回收泄漏只进最终去向一次，保留泄漏已在期末库存。实际燃烧燃料及设备关联物种计算，不将整份燃料损失当作通用基本流排放。 作业归属供应量为同范围期初归属库存加扣皮重外部总收货减期末承接库存，并承接上游负担。总投入加出口保留实际外部出口；仅消耗还排除对应实际退回供应一次，不能重复退回抵扣。 | kg; actual volume unit when evidenced | 每笔实际收货、领用、尝试、事件及验收；批次结束核对 | 全部有界作业批次及实际关联资产寿命/服务期间 | 申报修复现场及实际供应商/服务商/接收方范围 | per reference flow | 同期间/边界的收货/库存/去向核对；直接机具范围及换算证据 |
| cp_water | joint_repair | 水和回收液体去向 | foreground_record | joint_id; attempt_id; period_id; water_identity; opening_attributable_net_kg; gross_received_net_kg; closing_carried_net_kg; installed_retained_net_kg; outward_return_net_kg; collected_liquid_waste_net_kg; actual_evaporation_net_kg; uncontained_liquid_net_kg; composition; receiver; treatment_scope; spill_event_id; recovered_spill_destination; event_share; ledger_scope; attribution_state; accepted_joint_count_N; custody; attribution_scope; inventory_view; upstream_burden_carry | 计量真实净收货和最终液体去向；整份液体平衡与另行归属的物质释放为不可加总视图。追踪污染液体接收方，避免把回收液体既当泄漏又当废物输出。 作业归属供应量为同范围期初归属库存加扣皮重外部总收货减期末承接库存，并承接上游负担。总投入加出口保留实际外部出口；仅消耗还排除对应实际退回供应一次，不能重复退回抵扣。 | kg | 每笔实际收货、领用、尝试、事件及验收；批次结束核对 | 全部有界作业批次及实际关联资产寿命/服务期间 | 申报修复现场及实际供应商/服务商/接收方范围 | per reference flow | 水表/秤及接收记录；未用时证明实际无用水；保留未解决去向 |
| cp_freight | joint_repair | 实际采购吨公里服务 | foreground_record | joint_id; period_id; carrier; leg_id; payload_net_t; distance_km; empty_return_scope; included_scope; excluded_scope; carrier_service_tkm; event_share; ledger_scope; attribution_state; accepted_joint_count_N | 采用实测载荷和真实运输段路线或核实兼容承运商服务活动。比较载荷乘距离与声明承运商处理；核对全部消费者及直接车辆范围。 | t*km; t; km | 每笔实际收货、领用、尝试、事件及验收；批次结束核对 | 全部有界作业批次及实际关联资产寿命/服务期间 | 申报修复现场及实际供应商/服务商/接收方范围 | per reference flow | 运单、运输段记录及运输数据集参考/范围；避免重复归属 |
| cp_provider | joint_repair | 已完成实际时间参考支持 | foreground_record | joint_id; period_id; provider_id; service_identity; actual_reference_property; actual_reference_unit; completed_hours; time_records; completed_results; included_scope; excluded_scope; event_share; ledger_scope; attribution_state; accepted_joint_count_N | 核实真正采购服务身份和小时参考、实际小时和已完成支持结果。映射包含/排除实物资源及资产/出行/废物范围，未覆盖资源保留实物卡归属。 | h | 每笔实际收货、领用、尝试、事件及验收；批次结束核对 | 全部有界作业批次及实际关联资产寿命/服务期间 | 申报修复现场及实际供应商/服务商/接收方范围 | per reference flow | 合同、工时单及隔离/测试结果；真实服务单位不匹配须采用实际匹配交换 |
| cp_assets | joint_repair | 完整寿命共享资产及全部消费者 | foreground_record | asset_id; asset_identity; lifetime_phase; period_id; consuming_job_id; consuming_node_id; measured_driver_unit; target_driver_h; complete_life_driver_h; manufacture_scope; maintenance_scope; replacement_scope; EOL_scope; direct_operation_exclusions; provider_rental_exclusions; observed_history; remaining_service_evidence; replacement_scenario; termination_scenario; EOL_scenario; burden_source; burden_uncertainty; sensitivity; update_trigger; accepted_joint_count_N | 汇集全部作业/节点/期间、因果兼容小时、完整寿命组件负担及完整分母。已完成观测寿命或已观测历史加有依据剩余寿命情景必须覆盖制造至寿命终结。仅归属一次，排除直接运行/服务商/租赁/备件。 | h; actual upstream burden units | 每笔实际收货、领用、尝试、事件及验收；批次结束核对 | 全部有界作业批次及实际关联资产寿命/服务期间 | 申报修复现场及实际供应商/服务商/接收方范围 | per reference flow | 资产记录、完整消费者台账、情景来源和不确定性/敏感性；缺范围或分母阻断最终数据集 |
| cp_waste | joint_repair | 实际移除材料、残余及包装去向 | foreground_record | joint_id; attempt_id; batch_id; period_id; waste_identity; origin_material; cure_state; contamination; fraction_net_kg; package_tare_kg; discarded_SKU_count; receiver; custody; transport_scope; treatment_scope; event_share; ledger_scope; attribution_state; accepted_joint_count_N | 称量实际分离组分或可追溯混合组成，区分既有载体切料、固化/未固化树脂、包装及污染耗材。丢弃计数与材料台账配对。每次失败关联实际接收方，不重复包装皮重或保留模壳/树脂。 | kg; item for native discarded-count audit | 每笔实际收货、领用、尝试、事件及验收；批次结束核对 | 全部有界作业批次及实际关联资产寿命/服务期间 | 申报修复现场及实际供应商/服务商/接收方范围 | per reference flow | 称重单、实际组成/固化状态、接收认可及合法路线；不默认家庭垃圾 |
| cp_releases | joint_repair | 实际物种/介质及常规/事故排放 | foreground_record | joint_id; attempt_id; period_id; event_id; event_owner; routine_or_incident; substance_species; particle_size; receiving_medium; measured_species_kg; measurement_method; actual_activity; activity_unit; factor_kg_per_activity_unit; factor_source; factor_applicability; formulation_component_kg; component_fraction; fate_fraction; temperature_state; whole_fluid_audit_kg; calculation_basis; uncertainty; event_share; ledger_scope; attribution_state; accepted_joint_count_N | 采用实际物种测量，或有效活动乘系数、实际组件组成乘去向计算；保留全部操作数证据和单位。区分事故归属及整份液体实物平衡与部分物种视图。不得从未解释平衡残差计算释放。 | kg; actual matching activity units | 每笔实际收货、领用、尝试、事件及验收；批次结束核对 | 全部有界作业批次及实际关联资产寿命/服务期间 | 申报修复现场及实际供应商/服务商/接收方范围 | per reference flow | 仪器证据或当前适用来源/去向证据及不确定性；SDS含量本身不是排放份额或零排放证明 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| material_intake | joint_kit; separate_connectors; kit_components; supplementary_materials | 按实际SKU及唯一所选上游模式，原生item或kg的作业归属供应量 = 期初归属库存加扣皮重外部总收货减期末承接库存，匹配单位、范围及上游负担承接。总投入加出口模式每参考投入 = 此供应量乘event_share除以accepted_joint_count_N，真实外部出口另列。仅消耗模式在分摊前额外排除对应实际退回供应一次，不重复给退回输出抵扣。废物和释放仍是承接负担的去向。套件组件实物子台账不构成虚构的完整套件计数等价。 | cp_materials; gross_received_count; gross_received_net_kg; event_share; accepted_joint_count_N; opening_attributable_count; closing_carried_count; opening_attributable_net_kg; closing_carried_net_kg; inventory_view; outward_return_count; outward_return_net_kg; upstream_burden_carry | 每参考实际SKU投入item或kg |  |
| count_return | count_returns | 每参考退回item = outward_return_count乘event_share除以accepted_joint_count_N。SKU原生计数审计：opening_attributable_count加gross_received_count等于final_used_SKU_count加discarded_count加outward_return_count加closing_carried_count。不得从废物kg推断计数。 | cp_materials; opening_attributable_count; gross_received_count; final_used_SKU_count; discarded_count; outward_return_count; closing_carried_count; event_share; accepted_joint_count_N | 每参考实际匹配外退item |  |
| mass_return | mass_returns | 每参考退回kg = outward_return_net_kg乘event_share除以accepted_joint_count_N。按实际材料质量审计：opening_attributable_net_kg加gross_received_net_kg等于closing_carried_net_kg加installed_retained_net_kg加discarded_net_kg加outward_return_net_kg加actual_released_net_kg。最终去向互斥，used_intermediate_kg不可叠加。套件实物子台账核对不重复采购。 | cp_materials; opening_attributable_net_kg; gross_received_net_kg; closing_carried_net_kg; installed_retained_net_kg; discarded_net_kg; outward_return_net_kg; actual_released_net_kg; event_share; accepted_joint_count_N | 每参考实际材料外退kg及实物核对 |  |
| energy_attribution | repair_electricity | 每参考电力kWh为同边界实际计量kWh加仅在未计入电表时的额外charging_loss_kWh，再乘event_share除以accepted_joint_count_N。实测kWh为meter_end_kWh减meter_start_kWh。 | cp_energy; meter_start_kWh; meter_end_kWh; charging_loss_kWh; event_share; accepted_joint_count_N | 每参考归属供电kWh |  |
| fuel_input | job_fuel | 作业归属燃料供应kg = 期初归属库存加扣皮重总收货减期末承接库存，同身份/范围并承接上游负担。总投入加出口每参考投入为此供应量乘event_share除以accepted_joint_count_N，保留真实外部出口。仅消耗投入另排除对应实际退回燃料一次，不重复退回抵扣。燃烧kg审计 = opening_attributable_net_kg加gross_received_net_kg减closing_carried_net_kg减outward_return_net_kg减nonburned_waste_net_kg减nonburned_release_net_kg减other_nonburned_final_net_kg。未燃烧出口互斥，total_spill_audit_kg不得再扣。回收泄漏只进最终去向一次，保留泄漏已在期末库存；同范围承接库存/上游负担。 | cp_fuel; opening_attributable_net_kg; gross_received_net_kg; closing_carried_net_kg; outward_return_net_kg; nonburned_waste_net_kg; nonburned_release_net_kg; other_nonburned_final_net_kg; event_share; accepted_joint_count_N; inventory_view | 每参考总燃料投入kg及实际燃烧kg审计 |  |
| water_input | job_water | 作业归属供水kg = 期初归属库存加扣皮重总收货减期末承接库存，同身份/范围并承接上游负担。总投入加出口每参考投入为此供应量乘event_share除以accepted_joint_count_N，真实外部出口另列。仅消耗投入另排除对应实际退回水一次，不重复退回抵扣。整份水平衡：opening_attributable_net_kg加gross_received_net_kg等于closing_carried_net_kg加installed_retained_net_kg加outward_return_net_kg加collected_liquid_waste_net_kg加actual_evaporation_net_kg加uncontained_liquid_net_kg，最终去向互斥，未知平衡为缺口。 | cp_water; opening_attributable_net_kg; gross_received_net_kg; closing_carried_net_kg; installed_retained_net_kg; outward_return_net_kg; collected_liquid_waste_net_kg; actual_evaporation_net_kg; uncontained_liquid_net_kg; event_share; accepted_joint_count_N; inventory_view | 每参考实际总供水kg及去向审计 |  |
| freight_attribution | freight | 每参考兼容采购t*km = 实际carrier_service_tkm乘event_share除以accepted_joint_count_N；按兼容运输段/服务处理核对各实际payload_net_t乘distance_km，包括申报空返范围。 | cp_freight; carrier_service_tkm; payload_net_t; distance_km; event_share; accepted_joint_count_N | 每参考实际采购运输t*km |  |
| provider_attribution | provider_service | 每参考兼容已完成采购支持h = completed_hours乘event_share除以accepted_joint_count_N；仅采用真实匹配Time/h服务和已完成资源/结果，声明范围排除。 | cp_provider; completed_hours; event_share; accepted_joint_count_N | 每参考兼容采购支持h |  |
| asset_attribution | shared_assets | 每参考兼容资产服务h = target_driver_h除以accepted_joint_count_N。完整寿命上游负担份额为target_driver_h除以complete_life_driver_h，应用于兼容制造、维护、更换和寿命终结burden_source并排除重叠。完整分母包含全部作业/节点/期间及有依据剩余服务，不再作第二笔直接交换叠加负担。 | cp_assets; target_driver_h; complete_life_driver_h; burden_source; accepted_joint_count_N | 每参考真实兼容资产h及披露上游负担份额 |  |
| waste_attribution | cable_cuttings; resin_pack_waste | 每参考实际组分kg = fraction_net_kg乘event_share除以accepted_joint_count_N，实际载体切料、树脂固化状态/污染和包装分别计算。包装皮重为只记一次的材料组分，不是净树脂。discarded_SKU_count关联原生计数审计，不从混合kg换算。 | cp_waste; fraction_net_kg; event_share; accepted_joint_count_N | 每参考真实接收方特定废物kg |  |
| liquid_waste | wastewater | 每参考实际收集液体kg = collected_liquid_waste_net_kg乘event_share除以accepted_joint_count_N；匹配实际身份、污染、接收方及互斥最终去向，不重复泄漏输出。 | cp_water; collected_liquid_waste_net_kg; event_share; accepted_joint_count_N | 每参考实际收集液体废物kg |  |
| release_attribution | actual_releases | 按各实际物质/物种及接收介质选一个有证据基准：measured_species_kg，或actual_activity乘factor_kg_per_activity_unit并匹配activity_unit和适用性，或formulation_component_kg乘component_fraction乘fate_fraction。每参考归属物种kg为所选有证据物种kg乘event_share除以accepted_joint_count_N。whole_fluid_audit_kg不可叠加，常规/事故归属分开并披露不确定性；缺系数/去向不等于零。 | cp_releases; measured_species_kg; actual_activity; factor_kg_per_activity_unit; formulation_component_kg; component_fraction; fate_fraction; event_share; accepted_joint_count_N | 每参考真实物种及介质kg |  |
| fuel_return | fuel_returns | 每参考实际退回燃料kg = outward_return_net_kg乘event_share除以accepted_joint_count_N；期末库存及实际回收泄漏最终去向保持互斥。 | cp_fuel; outward_return_net_kg; event_share; accepted_joint_count_N | 每参考实际退回燃料kg |  |
| fuel_waste_attribution | fuel_waste | 每参考实际未燃烧燃料废物kg = nonburned_waste_net_kg乘event_share除以accepted_joint_count_N；回收泄漏最终去向和吸附材/燃料组分只核对一次。 | cp_fuel; nonburned_waste_net_kg; event_share; accepted_joint_count_N | 每参考真实未燃烧燃料废物kg |  |
| water_return | water_returns | 每参考实际未用退回水kg = outward_return_net_kg乘event_share除以accepted_joint_count_N，排除期末库存及收集污染废水。 | cp_water; outward_return_net_kg; event_share; accepted_joint_count_N | 每参考实际退回水kg |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_gate | accepted_joint | 实际当前业主/套件/连接器说明和电缆适配性控制。不设通用电压、时间、绝缘电阻、固化或寿命默认值，证明实际要求完全固化状态/电气验收。 | 真实交付说明、校准、批号/固化条件、测试和交付记录 |
| quality_scope | joint_repair | 覆盖实际全部期间、尝试、袋批次、共享事件及资源，包括真实服务商支付消耗；追溯实际无使用、不确定性和未解决缺口。明确比较配置，不把所有计数接头等同。 | 完整验收/拒收ID台账、注明日期范围及不确定性复核 |
| quality_balances | joint_repair | 核对原生Count和Mass台账、包装皮重/双室、真实库存负担承接、互斥安装/退回/废物/释放去向和所选上游模式。未知不等于零，残差不是排放。 | 收货、库存/秤记录、真实丢弃计数、接收/交接及物种证据 |
| quality_life | shared_assets; provider_service | 完整全部消费者、兼容分母、制造/维护/更换/寿命终结范围及预期剩余寿命来源/不确定性/敏感性/更新。核实服务商实际单位及有界结果/资源。缺重要范围阻断最终数据集。 | 完整寿命资产登记、情景记录、供应范围/合同及服务证据 |


## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_route | joint_repair | 本地功能、电缆/连接器/套件不适配、缺隔离授权或外露/余长条件及任一排除的新插入/挖沟/铠装/屏蔽/分支/剪切螺栓/仅收缩/凝胶路线均不符合范围。实际认可≤1 kV额定值控制，不隐含带电作业许可。 | un-cpc3-2025; 3m-90na-issue3 |
| validation_gate | accepted_joint | 必须有实际准备/压接/密封/充填/批号/固化证据、完全固化要求、适用校准电气测试、缺陷关闭及业主签署交付。型式试验数值不是通用现场设置。N仅为正数唯一验收接头，未完成/拒收/重复尝试不增加N。 | 3m-90na-issue3 |
| validation_burden | joint_repair | 核实实际全部作业阶段/期间及有限袋批次、拒收状态/返工环、清理/换批和共享事件归属。每次失败关联修复/废物/退回/保留/释放路径，保留全部归属负担。N=0不能产出验收参考数据集。 |  |
| validation_balance | joint_repair | 检查唯一上游套件模式及各捆绑排除、包括真实丢弃数量的原生计数、净双室/包装/材料库存及互斥最终去向。扣皮重总投入在抵扣退回之前。仅消耗和总投入加出口处理不能重复退回抵扣。核实真实系数/体积转换证据，未知/残差不能变成零或基本流。 |  |
| validation_life | shared_assets; provider_service; freight | 需要完整寿命资产范围、全部作业/节点/期间和兼容实测分母；使用预期剩余服务时需有依据更换/终止/寿命终结情景。缺分母/范围或服务属性/单位/结果未解决，阻断最终数据集。交叉核对直接运行、备件、工具、租赁/服务商及运输重叠。 |  |
| validation_identity_range | joint_repair | 最终数据生产前按真实身份/状态/关口/属性/单位解析每项实际具体交换。条件实际身份需前景证据。独立代表性证据未提供时保留数量范围证据需求；结构检查不证明UUID核实、数量合理性或可发布。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景已完成电缆接头修复服务数据包及下游process/lifecyclemodel投影 |
| downstream_use | 真实身份、数量、范围及复核缺口解决后用于secondary_dataset; background_dataset |
| allowed_use | 声明兼容既有本地低压无铠装/无屏蔽多芯压接树脂浇注完全固化直通接头修复及其实际服务条件 |
| excluded_use | 未确认电缆尺寸/条件或不同关口；新电缆/路线/挖沟；运行寿命收益；分支/铠装/屏蔽/剪切螺栓/仅收缩/凝胶或建筑/电信/高压作业 |
| required_metadata | 全部参考限定信息；真实接头/尝试/袋批次/期间ID；N；地域/时间；关口及测试准则；当前实际说明；套件模式/范围；原生台账；服务商/运输/资产覆盖和去向 |
| required_quality_disclosure | 测量及计算数量；证据需求/未知；返工完整性；实物平衡和去向；身份状态；完整寿命分母/情景来源/不确定性/敏感性/更新；分摊及模式排除 |
| update_trigger | 实际套件/树脂/连接器或电缆/路线改变；验收准则/关口变化；重大作业/返工/资源变化；身份/去向修正；新资产寿命/消费者或服务商范围证据 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国统计司，CPC3.0解释性说明，2025年6月30日，印本286–287页，54252。 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 本地电力电缆修复分类范围及排除；无数量清单系数 |
| 3m-90na-issue3 | handbook | 3M Scotchcast Resin Kit90-NA-X Series, Inline Joint Kit with Resin470W, Issue3，无印本日期，共3页。印本90NA身份与92NA URL不同。 https://multimedia.3m.com/mws/media/2536250O/scotchcast-92na-resin-joints-data-sheet.pdf?fn=scotchcast-92na-resin-joints-ds.pdf | 多芯无屏蔽聚合物低压套件、压接子路线、模壳/配对袋/套件内容；适配性及当前实际说明需求；目录试验及废物措辞不作通用现场默认值 |
| 3m-resins-page | handbook | 3M英国低压树脂及接头页面和链接的Resin470产品页，2026年10月16日访问。 https://www.3m.co.uk/3M/en_GB/electrical-construction-maintenance-uk/solutions/low-voltage-resins-and-joints/ ; https://www.3m.co.uk/3M/en_GB/p/d/b00042792/ | 聚氨酯浇注族及产品身份警示：470W链接重定向470，链接中2012年470 TDS不是可转用的470W数量证据；4GS提前送电营销属于另一产品 |
