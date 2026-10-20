---
pcr_id: pcr.copper-crimp-pex-potable-water-pipe-installation-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 铜环压接PEX-B饮用水管道安装服务

## 1. 范围与适用性

本PCR覆盖建筑内部采用认可倒刺管件与铜压接环的PEX-B饮用水冷热管道安装，由可进入线路和声明接口开始，到支撑、机械连接、检查、水压试验、记录及签署验收完成。代表范围为1/2、3/4和1 in管材；不同口径、冷热功能和支路BOM须声明。夹箍、扩口、推插、非饮用水、厂内管材制造及其他专业工程不在此路线内。下述六协议定义任务实测方法，厂家资料约束相容性和工序，不提供通用施工耗用量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.copper-crimp-pex-potable-water-pipe-installation-services |
| classification_refs | CPC 3.0 54621 Water plumbing services; narrower |
| covered_products | 建筑内部铜环压接PEX-B饮用水管道安装，含认可倒刺接口和安装方验收责任 |
| excluded_products | 器具、热水器、市政主管、结构工程、专业额定防火/保温；夹箍、扩口、推插；后续运行 |
| representative_product | 1/2–1 in PEX-B冷热饮用水支路，实际口径与管件BOM明确 |
| production_route | 进场保管、切割准备、铜环压接/支撑、水压试验及纠正、冲洗/条件消毒、签署交付 |
| market_state | 已安装、支撑、检查、试验并记录的验收服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已验收实体管材中心线所代表的安装服务 |
| How much | 1 m |
| How well | 相容部件、通止规检查、适用水压试验、纠正完成及签署验收 |
| How long or cycle | 从任务开始至验收及残余结束核对；自有资产另索引制造、使用、维护/更换、退役及所有使用期间 |
| reference_flow_link | `accepted_installation` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 已验收铜环压接PEX-B饮用水管道安装 |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | 建筑/任务与期间；实际PEX-B供应商SKU；口径；冷热功能；支路及实体管段ID；接口/端点；铜环及管件BOM；支撑/穿孔保护；水压试验条件/结果；纠正和验收边界；实测D；源数据边界 |

签署验收时按最终唯一实体管段ID计量 D。包含插口/倒刺内保留插入段及弯曲/松弛段真实中心线；排除管件/阀/分配器本体长度、余料、拆除/拒收段与库存。记录各最终管段材料、口径、热/冷用途、支路及验收端点。即使共用线路，冷热管仍是不同实体。将实际切段/竣工记录与端点、插入和弯曲记录核对；总交货或领用长度不是 D。返工拆分新设最终ID并关联拆除ID。重复图纸、重叠测试段和复测不增加长度。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| accepted_length | reference product | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | D为cp_acceptance最终唯一验收管段的实际材料中心线长度总和；各交换数量分子除以同一正D。插入/真实弯曲松弛段计入，管件本体和拆除/拒收/库存段排除。 |
| material_conversion | incoming_packaging; pex_tube; barbed_fittings; copper_crimp_rings; support_and_protection; compatible_seal_material; disinfection_product; cleaning_consumables; unused_product_return | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 逐SKU实测质量或精确件数/长度乘匹配kg系数；库存、可用退回和残余单列，不施用于电力/资产时长。 |
| water_and_constituent | supplied_test_flush_water; dispatched_wastewater; water_to_air; aqueous_release_constituent | Mass | kg | 体积须配实际温度/密度；载体水与组分质量不重复合计；源gal约定须先确认。 |
| asset_and_event | owned_equipment_attribution; hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 资产份额按真实活动/寿命活动归属；服务只计完整合同事件。真实小时租赁保留其计量并待Duration核实，禁止改为计件。 |
| metered_energy | installation_electricity | Energy | kWh | 只用cp_energy实际外供计量及因果份额；Energy/kWh支撑未核实，不能改用NCV或材料质量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已就绪可进入建筑内部线路、约定供水和终端接口、安装方保管边界的部件供应 |
| starting_condition_role | 声明前景起点条件，非安装服务投入或排除既有工程的抵扣 |
| product_classification_scope | CPC 3.0 54621的窄范围铜环压接PEX-B饮用水安装 |
| recursive_input_rule | 同类外购安装若实际存在，记录其供应商责任及交付边界；不得将同一任务递归为自身投入，新增独立责任须范围复核。 |
| upstream_dataset_requirement | 匹配实际材料、制剂及服务的到场供应，涵盖边界和交付/包装责任明确；未含部分保留缺口。 |
| disclosure | 起终接口、就绪条件、排除工程、任务期间、供应数据集/包装边界、资产及租赁责任、未闭合及身份/范围缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| installation_owner | install_accept | 同一安装责任涵盖接收/领用、管道布设、切割准备、铜环压接装配、支撑保护、水压试验及纠正、验收、可用退回与残余发运。阶段日志不是额外服务交换或过程节点。 | `sharkbite-pex-2021`; `rwc-piping-2024` |
| accepted_gate | accepted_installation | 交付须具备相容认可的管材/管件/环、实际支撑与穿孔保护、通止规检查记录、适用水压试验及完成纠正/冲洗要求。记录项目规范和实际压力、温度、时长、结果；不得套用气压试验、推插或扩口路线程序。 | `sharkbite-pex-2021`; `rwc-piping-2024` |
| starting_interfaces | foreground_boundary | 起点为已声明可进入的建筑内部线路、约定供水/终端接口及安装方保管边界的部件供应。就绪是条件，不是消耗工程。排除并披露器具、热水器、市政主管、结构工程、专业防火/保温及已装管道后续使用/维护。 |  |
| landed_supply | upstream_inputs | 要求匹配的到场部件与制剂供应数据集，披露交付与包装边界。不得将运输负荷默认为零或重复上游已含包装制造。独立运输责任或不同安装分包须在扩展前复核范围/卡集。 |  |
| reject_owner | rework_and_exits | install_accept在失败及纠正全过程保留原材料、电、水和服务负担。内部纠正关联失败接头/管段及最终验收管段；可用退回与不可用废物区分。仅凭实际接收方记录回收/降级，不生成假定抵扣。 | `sharkbite-pex-2021` |
| resource_periods | shared_assets | 资产制造、使用、实际维护/更换及退役/终止按所有使用任务/节点和报告期间建立索引。当前安装任务是全寿命使用者之一；永久安装硬件另列。租赁方资产负担属于合同服务边界。 |  |
| physical_pools | material_and_water | 按相容SKU/材料/状态池，以总进入、库存变化、可用退回、保留安装材料及实测残余出流闭合。载体水平衡与化学组分及任何碳检查分开；混合质量合计或资产份额均不是安装材料交换。不得由闭合残差创造氧气或任何推断损失交换。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：按材料和供应责任记录的进场包装 (`incoming_packaging`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

接收时记录实际包装材料和批次，称量或用同批包装件数与皮重核对。即使部件供货已包含包装制造，也保留包装实体来源池。仅实际单独建模的包装供应激活额外包装投入负担；追溯退回、复用、库存和废弃去向。 范围证据需求：需要批次重量、组成、包装规格、实际复用/退回周期及供应数据集边界。废包装不能证明未记录的进场量；尚无通用 kg/m 区间。

- 采集对象：按材料和供应责任记录的进场包装
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_materials实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

#### 采集要求：每项自有可复用资产的归属份额 (`owned_equipment_attribution`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

对实际切管器、压接工具、通止规、钻机、充电器、水压泵、仪表或作业平台记录型号、序列号和所有权。制造与实际维护/更换资源包以实测本任务活动量除以有证据的同基准全寿命活动量归属，乘实际资产件数后除以 D。小数 item 表示资产份额，不是安装材料或按小时租赁。 范围证据需求：需要制造/BOM或匹配数据集、维护、更换、退役/终止记录、所有使用任务与期间、本任务活动及寿命分母不确定性。每任务计整台、假定寿命、固定复用次数或通用截断均不能建立区间。

- 采集对象：每项自有可复用资产的归属份额
- 流属性/单位：Number of items / item
- 数量规则：按上述cp_services实测各实际交换的item数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`sharkbite-pex-2021`; `rwc-piping-2024`

#### 采集要求：按SKU记录的认可倒刺管件及接口部件 (`barbed_fittings`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

记录实际认可的管件、阀或分配器的材料、口径、SKU及支路/终端职责。称量领用量或使用精确SKU的件数质量证据；保留更换与可用退回。管件和阀体属于BOM，不向 D 增加长度。 范围证据需求：需要拓扑特定的管件/阀/分配器、验收与更换件数、SKU kg/item及退回。kg/m区间须来自支路和终端配置可比的任务。

- 采集对象：按SKU记录的认可倒刺管件及接口部件
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_materials实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`sharkbite-pex-2021`

#### 采集要求：按SKU记录的支撑、紧固件和保护套 (`support_and_protection`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

每种实际支撑、紧固件及套管分别称量或以有证据的件数质量换算，关联验收管道几何和穿孔。认可支撑须保护管材并适应该线路；材料与可复用作业平台资产分开。 范围证据需求：需要实际间距、终端约束、龙骨/楼板穿孔位置、紧固件SKU及安装/退回质量。支撑间距限制是几何条件，不是通用耗用区间。

- 采集对象：按SKU记录的支撑、紧固件和保护套
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_materials实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`sharkbite-pex-2021`

#### 采集要求：按SKU记录的实际清洁或查漏耗材 (`cleaning_consumables`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

仅实际消耗的肥皂、擦拭物或其他相容清洁产品激活。记录SKU、清洁/查漏事件、领用内容物、可用退回及容器/残留皮重。纠正过程中使用的材料仍归属安装。 范围证据需求：需要清洁对象/面积或测试接头数、事件、SKU剂量和容器重量。需形成可比剂量/事件及事件/m观测；不能统一假设质量区间。

- 采集对象：按SKU记录的实际清洁或查漏耗材
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_materials实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`rwc-piping-2024`

#### 采集要求：按供应商和配置记录的完整合同支持事件 (`hired_support_service`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

item卡仅在真实完整合同定义的设备/作业平台服务事件时激活。记录供应商、事件定义、交付配置、完成证据及实际使用者份额。按小时租赁保留真实小时数量，须明确Duration支撑及范围/计量复核；不能换成一个计件事件。 范围证据需求：需要实际合同参考单位、事件完整性或真实小时基准、配置/能力、供应商制造/维护/燃料/电力涵盖及所有使用者。真实小时Duration未解决；尚无通用事件/m区间。

- 采集对象：按供应商和配置记录的完整合同支持事件
- 流属性/单位：Number of items / item
- 数量规则：按上述cp_services实测各实际交换的item数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：

#### 采集要求：按SKU记录的可用原状产品退回 (`unused_product_return`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `product`.

记录实际跨安装保管边界的可用原状产品退回，保持原进场SKU与状态。称量或采用相同已核实件数/长度质量换算。总投入与显式退回均可审计，防止已在别处净扣的退回再次扣减。 范围证据需求：需要逐SKU的总领用、库存变化和实测可用退回。不支持默认退回率或混合材料退回身份。

- 采集对象：按SKU记录的可用原状产品退回
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_materials实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

#### 采集要求：按材料和接收方记录的干包装及余料废物 (`dry_material_waste`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

实际发运时逐干废物流称毛重和容器皮重。包装关联进场来源池，余料关联领用管材/部件。材料、状态及接收方分别识别；实际收集的钻孔粉尘属于废物。混合质量合计仅作台账诊断。 范围证据需求：需要称量发运记录及材料/状态特定接收方证据。安装部件标称质量不能建立废弃率区间。

- 采集对象：按材料和接收方记录的干包装及余料废物
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_residuals实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：按接收方记录的不可用拒收或拆除部件 (`rejected_component_waste`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

通止规失败、损坏件或试验失败/纠正事件关联原领用部件及 install_accept。称量拆除不可用管材、管件和环，或用精确SKU件数质量证据，记录实际废物去向。已退役件ID不得继续计入验收 D。 范围证据需求：需要完整失败、拆除、返工、发运覆盖及实际接收方分类。无默认缺陷率；有证据的零值要求完整事件覆盖。

- 采集对象：按接收方记录的不可用拒收或拆除部件
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_residuals实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：污染擦拭物、容器及配方残留 (`contaminated_solid_waste`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

称量实际污染废物流毛重和皮重，保留组成、状态及接收方准入。区分可复用退回产品和空的可回收包装。供应配方质量不能证明蒸发量，污染容器也不自动属于干包装流。 范围证据需求：需要配方特定残留、容器皮重及接收方分类。不支持默认损失率或供应化学品全部蒸发的假设。

- 采集对象：污染擦拭物、容器及配方残留
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_residuals实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：交付下水道或废水处理方的用后水 (`dispatched_wastewater`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

逐出流水测收集质量，或以体积配合皮重、密度/温度和组成量化。唯一水流及接收方关联复用和保留库存。同一份水不得既记处理/下水道交付又记直接环境排放。 范围证据需求：需要实际收集/交付计量、组成、复用及保留证据。新鲜供应和几何充水容量不能确定出流废水或区间。

- 采集对象：交付下水道或废水处理方的用后水
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_water实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：

#### 采集要求：材料特定的空气颗粒物粒级 (`airborne_particulate`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `elementary`.

仅有大气排放证据时激活。识别基材/材料、工具、捕集措施、粒径组分及实际空气接收分室。以监测排放或独立支撑的匹配系数乘实测活动量量化；收集的粉尘仍为废物。 范围证据需求：需要材料/工具/控制/粒径特定监测或系数及实际活动量。未闭合材料平衡是数据缺口，不是不可见粉尘或通用排放量。

- 采集对象：材料特定的空气颗粒物粒级
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_residuals实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`
- 来源：

#### 采集要求：进入实际空气分室的水蒸气 (`water_to_air`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `elementary`.

仅独立有证据的水蒸发激活。使用实测暴露/质量损失或匹配安装条件的已核实模型，并识别实际空气分室。排除化学蒸气、保留水与捕集液体；水量平衡残差本身不是排放。 范围证据需求：需要实际条件的蒸发测量/模型证据。尚无蒸发比例；不得重复化学溶剂损失。

- 采集对象：进入实际空气分室的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_water实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：

#### 采集要求：逐实际物质记录的直接水体排放 (`aqueous_release_constituent`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `elementary`.

仅有证据且获准直接进入明确环境水体分室的排放激活。测排放体积和逐物质浓度/质量，载体水单独识别。污染物/活性物质质量不是第二份实体体积水。同一排放排除下水道/处理交付。 范围证据需求：需要接收分室、实际载体/组分身份及浓度/流量证据。不能从消毒剂领用量推断余氯；混合废水不是基本流纯水身份。

- 采集对象：逐实际物质记录的直接水体排放
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_water实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| install_accept | 安装与验收 | required | 声明安装范围实际发生 | 单一安装到验收责任，含返工与残余 | 1 m accepted_installation |

接收、准备、装配、测试、纠正和交付是同一节点阶段；无重复就绪交换。拒收包括管材损伤、不可用管件、通止规失败与试压失败。按实际状态纠正，拆除ID退役；可用原状退回、干废物、不可用拒收件及污染残余按实际去向离开，待决状态保持未决。

### 过程：安装与验收（`install_accept`）

#### 输入

##### 产品流

###### 按口径和SKU记录的饮用水PEX-B管材（`pex_tube`）

逐实际等级、口径和SKU称量进场量，或用可追溯领用长度与匹配供应商质量系数换算。总进入量包含后来切除或废弃的部分，不能以验收管长替代。库存与实际可用退回单列。 范围证据需求：RWC PDF第44页给出1/2、3/4、1 in分别为0.054、0.103、0.170 lb/ft的标称系数。使用前须核实SKU、供应商公差、管道布设、插入、切割、余料与返工；它们不是每验收m耗用kg的实测区间。

- 选定流：按口径和SKU记录的饮用水PEX-B管材
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_materials实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`rwc-piping-2024`

###### 按认可口径记录的铜压接环（`copper_crimp_rings`）

每个压接管端使用对应认可口径的环。记录初装和更换环事件，以称量或精确SKU kg/item获得质量。保留环承担永久机械连接，压接工具使用另列。 范围证据需求：成功压接管端数约束保留环数；仍需实际拒收/更换事件与环质量。不能据此得到通用环数/m或质量公差区间。

- 选定流：按认可口径记录的铜压接环
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_materials实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`sharkbite-pex-2021`

###### 相容的轻微穿孔密封产品（`compatible_seal_material`）

仅安装方职责内的轻微非结构封闭激活。识别基材、接口及相容供应配方；按容器皮重称量领用、退回和残留内容物。独立负责的额定防火封堵及保温系统排除。 范围证据需求：需要实际穿孔数、环隙几何、配方、施用体积/密度和容器核算。没有通用密封剂 kg/m先验。

- 选定流：相容的轻微穿孔密封产品
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_materials实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`sharkbite-pex-2021`

###### 外供饮用水试压及冲洗用水（`supplied_test_flush_water`）

按水源、计量区间和水压试验/冲洗/消毒事件计量新鲜外供水。以实际体积和可追溯温度密度换算，或直接称量。内部回收复用与保留水单列；重复充水仅在新供应跨界进入时增加投入。 范围证据需求：RWC PDF第44页1/2、3/4、1 in的0.009、0.018、0.030 source gal/ft仅诊断一次充水。美制液体加仑解释是须确认的声明约定。分段、复测、回收、保留及冲洗终点决定实际用量；容量不是耗用区间。

- 选定流：外供饮用水试压及冲洗用水
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_water实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`rwc-piping-2024`

###### 认可的供应消毒制剂（`disinfection_product`）

仅实际调试要求相容化学消毒时激活。记录供应配方、浓度、投加批次、容器皮重、领用/退回内容物和溶液去向。供应混合物质量与活性化学品质量是不同数量。 范围证据需求：需要实际投加体积、配方活性比例、批次浓度、接触条件和残留/处置记录。规定浓度或接触时间不是制剂 kg/m区间。

- 选定流：认可的供应消毒制剂
- 流属性/单位：Mass / kg
- 数量规则：按上述cp_water实测各实际交换的kg数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`rwc-piping-2024`

###### 安装供电计量边界的电力（`installation_electricity`）

按工具、水泵、自有工具充电及实际纠正/复测计量外供kWh。保留起止读数、校准与事件时段；其他使用者耗电仅凭记录的因果份额扣除。能量不是称量材料或件数质量换算。后续建筑运行排除。 范围证据需求：Energy/kWh支撑身份仍未解决。需要可比计量事件、待机/充电责任、所有使用者及验收产出份额才能形成kWh/m区间；管材质量系数或NCV身份不能替代。

- 选定流：安装供电计量边界的电力
- 流属性/单位：Energy / kWh
- 数量规则：按上述cp_energy实测各实际交换的kWh数量分子除以D。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收铜环压接PEX-B饮用水管道安装（`accepted_installation`）

签署验收时按最终唯一实体管段ID计量 D。包含插口/倒刺内保留插入段及弯曲/松弛段真实中心线；排除管件/阀/分配器本体长度、余料、拆除/拒收段与库存。记录各最终管段材料、口径、热/冷用途、支路及验收端点。即使共用线路，冷热管仍是不同实体。将实际切段/竣工记录与端点、插入和弯曲记录核对；总交货或领用长度不是 D。返工拆分新设最终ID并关联拆除ID。重复图纸、重叠测试段和复测不增加长度。 范围证据需求：归一化产出恰为一个参考米，不是实测成品率区间。仍须验收分母证据及排除/待决/拒收工作追溯，保留配置差异。

- 选定流：已验收铜环压接PEX-B饮用水管道安装
- 流属性/单位：Length / m
- 数量规则：1 m
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_acceptance`
- 来源：`accepted-length-normalization`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_intended_service | accepted_installation | 唯一预期产品为验收安装。可用库存退回和废物/残余出流是保管去向，不是预期共产品。先细分真实独立计量任务；总领用及显式退回保持一致，不重复净扣。 |  |
| failed_work_burden | install_accept | 失败检查、试验与纠正工作均留在验收任务数量分子中。待决/未解决或拒收长度不增加 D。回收材料按有证据边界离开并披露处理；不自动生成避免产品抵扣或抹去负担。 |  |
| asset_lifetime_share | owned_equipment_attribution | 每项精确自有资产用实际件数乘本任务服务活动/有记录全寿命服务活动，两者采用同一因果基准。匹配制造/维护资源包一次涵盖实际更换及终止。列出所有使用者和期间、核对份额并披露剩余寿命不确定性。寿命/更换/终止证据缺失阻止归属最终确定。 |  |
| provider_and_period_owner | hired_support_service; installation_electricity | 供应商已含制造、维护、燃料及电力不再重复计入前景资产/能耗。真实共享事件或计量能耗仅按所有使用者的实际使用归属。记录逐期决定和事件ID；已按寿命归属资源不再次年化，原资产与更换资产不作为同时整台投入。 |  |

## 8. 前景数据采集、计算与质量规则

D是唯一验收管段实际中心线m总和。各交换的数量分子按自己的属性/单位采集；各相容材料池记录总进入G、期初/期末库存、保留安装量、可用退回U及实际残余出流，库存内部调拨不重复跨界进入。按SKU核对领用与期初领入的口径，防止重复记录。水的外供F、内部复用、保留R、处理交付W、有证据蒸发V及直接环境载体水分开；溶质/污染物另有物种浓度台账，不能与体积水重加。闭合残差是缺口而不是自动排放。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_accept | accepted_installation | 验收台账 | 任务；期间；最终管段ID；退役ID；材料；口径；冷热；支路；验收端点；实际中心线长度；插入/弯曲/松弛；试验段ID；签署边界 | 将实际切段/竣工长度与最终端点、保留插入段及弯曲/松弛记录核对；核验唯一实体ID和签署验收。排除管件本体、拆除/拒收段和库存。 | m | 每最终管段及验收 | 全部安装/纠正事件至签署边界 | 声明建筑安装任务；资产全使用者/期间另列 | 每参考流 | 校准长度记录；竣工资料；通止规及水压试验结果 |
| cp_materials | install_accept | incoming_packaging; pex_tube; barbed_fittings; copper_crimp_rings; support_and_protection; compatible_seal_material; cleaning_consumables; unused_product_return | 材料保管台账 | 任务；期间；批次；SKU/材料/状态；总进入；期初/期末库存；安装保留质量；可用退回；包装责任；件数/长度；kg系数；皮重；纠正ID | 用校准秤及皮重逐材料/包装/制剂和退回称量，或用可追溯精确SKU件数/长度质量证据。保留嵌入包装实体来源池而不重复上游负担。 | kg | 每次接收、领用、退回及结束核对 | 全部任务事件含更换 | 声明建筑安装任务；资产全使用者/期间另列 | 每参考流 | 秤校准；供应商系数；领退记录；包装边界证据 |
| cp_water | install_accept | supplied_test_flush_water; disinfection_product; dispatched_wastewater; water_to_air; aqueous_release_constituent | 水与组分台账 | 任务；期间；水流/来源/接收方；事件；起止读数；体积；温度/密度；新鲜；复用；保留；废水；蒸发方法；物种/浓度；配方/SKU；活性比例；领用/退回质量；容器皮重 | 按批次/SKU与容器皮重称量供应消毒制剂及可用退回，记录浓度、剂量和残余去向。外部取水及实际出流分别计量，核对内部复用和保留水。蒸发仅用实际条件测量/模型量化；直接排放须有接收分室和逐组分证据。 | kg | 每次充水、复测、冲洗、消毒及排水 | 全部调试含纠正 | 声明建筑安装任务；资产全使用者/期间另列 | 每参考流 | 表校准；密度证据；接收方凭证；组分测量 |
| cp_energy | install_accept | installation_electricity | 电表台账 | 任务；期间；工具/泵/充电器；起止kWh；校准；时段；待机；其他使用者；因果份额；供应商涵盖 | 读取实际安装/试验/充电时段的校准外供电表；保留其他使用者因果扣除记录并核对供应商能耗涵盖。能量不称重。 | kWh | 每供电计量时段 | 全部任务及纠正，排除后续运行 | 声明建筑安装任务；资产全使用者/期间另列 | 每参考流 | 表读数；校准；事件及使用者份额记录 |
| cp_services | install_accept | owned_equipment_attribution; hired_support_service | 资产及服务台账 | 任务；期间/阶段；资产型号/序列号/件数；所有者；制造资源包；维护/更换/终止事件；全部使用者；本任务活动；寿命活动；合同/事件定义；完整事件；供应商涵盖 | 识别每项精确资产及全部使用任务/期间；采集同基准本任务与寿命活动及真实维护/更换/退役历史。只计真实完整供应商事件；真实小时租赁另保留待计量复核。 | item | 每次资产使用/服务及生命周期事件 | 资产制造至使用/维护/更换/退役；全部报告期间 | 声明建筑安装任务；资产全使用者/期间另列 | 每参考流 | 资产履历；寿命证据；合同；全使用者份额核对 |
| cp_residuals | install_accept | dry_material_waste; rejected_component_waste; contaminated_solid_waste; airborne_particulate | 残余及纠正台账 | 任务；期间；失败管段/接头；更换ID；来源池；材料/状态；毛重/皮重；捕集/空气排放；粒级；工具/控制；接收方；发运；监测/系数/活动 | 逐接收方废物流称量；失败/更换材料关联 install_accept及原领用。直接颗粒物仅按实际监测或已核实匹配材料/工具/控制系数与实测活动量量化。捕集粉尘仍为废物。 | kg | 每次纠正、收集、排放及发运 | 全部任务含失败工作及收尾 | 声明建筑安装任务；资产全使用者/期间另列 | 每参考流 | 校准秤；发运单；失败谱系；排放监测/系数证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | incoming_packaging; pex_tube; barbed_fittings; copper_crimp_rings; support_and_protection; compatible_seal_material; cleaning_consumables; unused_product_return | 每实际材料/SKU/状态交换的 kg 数量分子除以 D；包装仅在供应负担单独建模时激活。总进入与退回不可两次净扣。 | actual_kg; D; cp_materials; cp_acceptance | kg per reference flow |  |
| formulation_normalize | disinfection_product | 实际供应配方kg数量分子除以D；活性比例单列，不能替代供应混合物质量或推断余氯。 | formulation_mass; active_fraction; D; cp_water; cp_acceptance | kg per reference flow | |
| owned_asset_normalize | owned_equipment_attribution | 实际资产件数 × 本任务服务活动 / 有记录同基准全寿命服务活动 / D；制造/实际维护/更换资源包以精确资产匹配，所有任务和期间份额核对，缺寿命/终止证据不得最终确定。 | asset_count; job_activity; lifetime_activity; D; cp_services; cp_acceptance | item per reference flow |  |
| service_normalize | hired_support_service | 真实完整合同事件件数 × 有证据当前任务份额 / D；按小时租赁不是计件事件，保留实际小时量待Duration支撑与范围复核。 | complete_events; actual_share; D; cp_services; cp_acceptance | item per reference flow |  |
| energy_normalize | installation_electricity | 实际计量kWh扣有证据其他用户份额后除以D，核对供应商涵盖和充电边界；不使用质量换算。 | meter_kWh; actual_share; D; cp_energy; cp_acceptance | kWh per reference flow |  |
| water_normalize | supplied_test_flush_water; dispatched_wastewater; water_to_air | 分别以各水流实际kg除以D；体积乘实证温度密度仅作用于匹配流，复用不重记新鲜投入，蒸发须独立证据。 | stream_volume; stream_density; actual_mass; D; cp_water; cp_acceptance | kg per reference flow |  |
| residual_normalize | dry_material_waste; rejected_component_waste; contaminated_solid_waste | 各实际分类、状态、接收方的发运净kg除以D；拆除件关联原领用和失败事件。 | gross; tare; actual_stream; D; cp_residuals; cp_acceptance | kg per reference flow |  |
| emission_normalize | airborne_particulate; aqueous_release_constituent | 逐物质/粒级/分室实测kg或匹配独立系数乘实测活动量后除以D。水体组分可用实测体积乘该物质浓度及相容单位换算，不从残差推排放。 | actual_substance_mass; measured_activity; matched_factor; D; cp_residuals; cp_water; cp_acceptance | kg per reference flow |  |
| reference_output | accepted_installation | 实录验收产出 D m 除以验收长度数值 D 得 1 m；仅最终唯一验收实体管段决定 D。 | D; cp_acceptance | 1 m |  |
| nominal_pipe_factor | pex_tube | 仅匹配RWC SKU/口径时，源lb/ft × 0.45359237 / 0.3048 得kg/m；1/2、3/4、1 in分别0.08036085、0.15328089、0.25298787。标称点系数不等于总领用/验收m区间。 | matching_SKU; source_factor; actual_length | conditional kg estimate | `rwc-piping-2024` |
| fill_geometry_diagnostic | supplied_test_flush_water | 仅匹配SKU/口径时用0.009、0.018、0.030 source gal/ft诊断一次几何充水。源文未明确US，须先确认美制液体加仑约定方可用3.785411784 L/gal及0.3048 m/ft，实际供应商单位记录优先。不是新鲜水需求或废水默认量。 | matching_SKU; actual_length; confirmed_volume_convention | one-fill diagnostic | `rwc-piping-2024` |

### 数据质量要求

| requirement_id | 适用对象 | 要求（Requirement） | 证据 |
| --- | --- | --- | --- |
| same_job_basis | all inventory rows | 所有协议使用同一任务、期间、正D及验收配置；保持原始数量分子、换算因子和单位。未知发生状态标为未知，零值仅有完整覆盖时允许。 | 六协议逐行追踪 |
| source_applicability | all inventory rows | 保留实际厂家/SKU、版本、质量条件、仪表校准与量测误差。厂家通止规/水压/相容性要求与实际项目规范核对，不以等待或接触时长冒充Duration投入。 | 供应商原始资料及项目验收记录 |
| phase_and_asset_completeness | owned_equipment_attribution; hired_support_service | 逐资产/服务记录所有使用节点、任务和期间；制造、使用、维护/更换及退役/终止事件共享同一索引。实际寿命活动分母、剩余寿命及维护责任未知时不得完成归属。 | cp_services全使用者及生命周期台账 |
| range_incoming_packaging | incoming_packaging | 范围证据需求：需要批次重量、组成、包装规格、实际复用/退回周期及供应数据集边界。废包装不能证明未记录的进场量；尚无通用 kg/m 区间。 | cp_materials |
| range_owned_equipment_attribution | owned_equipment_attribution | 范围证据需求：需要制造/BOM或匹配数据集、维护、更换、退役/终止记录、所有使用任务与期间、本任务活动及寿命分母不确定性。每任务计整台、假定寿命、固定复用次数或通用截断均不能建立区间。 | cp_services |
| range_pex_tube | pex_tube | 范围证据需求：RWC PDF第44页给出1/2、3/4、1 in分别为0.054、0.103、0.170 lb/ft的标称系数。使用前须核实SKU、供应商公差、管道布设、插入、切割、余料与返工；它们不是每验收m耗用kg的实测区间。 | cp_materials |
| range_barbed_fittings | barbed_fittings | 范围证据需求：需要拓扑特定的管件/阀/分配器、验收与更换件数、SKU kg/item及退回。kg/m区间须来自支路和终端配置可比的任务。 | cp_materials |
| range_copper_crimp_rings | copper_crimp_rings | 范围证据需求：成功压接管端数约束保留环数；仍需实际拒收/更换事件与环质量。不能据此得到通用环数/m或质量公差区间。 | cp_materials |
| range_support_and_protection | support_and_protection | 范围证据需求：需要实际间距、终端约束、龙骨/楼板穿孔位置、紧固件SKU及安装/退回质量。支撑间距限制是几何条件，不是通用耗用区间。 | cp_materials |
| range_compatible_seal_material | compatible_seal_material | 范围证据需求：需要实际穿孔数、环隙几何、配方、施用体积/密度和容器核算。没有通用密封剂 kg/m先验。 | cp_materials |
| range_supplied_test_flush_water | supplied_test_flush_water | 范围证据需求：RWC PDF第44页1/2、3/4、1 in的0.009、0.018、0.030 source gal/ft仅诊断一次充水。美制液体加仑解释是须确认的声明约定。分段、复测、回收、保留及冲洗终点决定实际用量；容量不是耗用区间。 | cp_water |
| range_disinfection_product | disinfection_product | 范围证据需求：需要实际投加体积、配方活性比例、批次浓度、接触条件和残留/处置记录。规定浓度或接触时间不是制剂 kg/m区间。 | cp_water |
| range_cleaning_consumables | cleaning_consumables | 范围证据需求：需要清洁对象/面积或测试接头数、事件、SKU剂量和容器重量。需形成可比剂量/事件及事件/m观测；不能统一假设质量区间。 | cp_materials |
| range_installation_electricity | installation_electricity | 范围证据需求：Energy/kWh支撑身份仍未解决。需要可比计量事件、待机/充电责任、所有使用者及验收产出份额才能形成kWh/m区间；管材质量系数或NCV身份不能替代。 | cp_energy |
| range_hired_support_service | hired_support_service | 范围证据需求：需要实际合同参考单位、事件完整性或真实小时基准、配置/能力、供应商制造/维护/燃料/电力涵盖及所有使用者。真实小时Duration未解决；尚无通用事件/m区间。 | cp_services |
| range_unused_product_return | unused_product_return | 范围证据需求：需要逐SKU的总领用、库存变化和实测可用退回。不支持默认退回率或混合材料退回身份。 | cp_materials |
| range_dry_material_waste | dry_material_waste | 范围证据需求：需要称量发运记录及材料/状态特定接收方证据。安装部件标称质量不能建立废弃率区间。 | cp_residuals |
| range_rejected_component_waste | rejected_component_waste | 范围证据需求：需要完整失败、拆除、返工、发运覆盖及实际接收方分类。无默认缺陷率；有证据的零值要求完整事件覆盖。 | cp_residuals |
| range_contaminated_solid_waste | contaminated_solid_waste | 范围证据需求：需要配方特定残留、容器皮重及接收方分类。不支持默认损失率或供应化学品全部蒸发的假设。 | cp_residuals |
| range_airborne_particulate | airborne_particulate | 范围证据需求：需要材料/工具/控制/粒径特定监测或系数及实际活动量。未闭合材料平衡是数据缺口，不是不可见粉尘或通用排放量。 | cp_residuals |
| range_dispatched_wastewater | dispatched_wastewater | 范围证据需求：需要实际收集/交付计量、组成、复用及保留证据。新鲜供应和几何充水容量不能确定出流废水或区间。 | cp_water |
| range_water_to_air | water_to_air | 范围证据需求：需要实际条件的蒸发测量/模型证据。尚无蒸发比例；不得重复化学溶剂损失。 | cp_water |
| range_aqueous_release_constituent | aqueous_release_constituent | 范围证据需求：需要接收分室、实际载体/组分身份及浓度/流量证据。不能从消毒剂领用量推断余氯；混合废水不是基本流纯水身份。 | cp_water |
| range_accepted_installation | accepted_installation | 范围证据需求：归一化产出恰为一个参考米，不是实测成品率区间。仍须验收分母证据及排除/待决/拒收工作追溯，保留配置差异。 | cp_acceptance |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_and_gate | install_accept | 核对实际PEX-B饮用水冷热范围、铜环压接/倒刺路线及声明接口。验收须追溯检查、适用水压试验/冲洗及所有纠正；假定试验结果或其他连接路线不是验收证据。 | `sharkbite-pex-2021`; `rwc-piping-2024` |
| denominator_integrity | accepted_installation | D须为最终唯一验收实体管段的正长度；包含插入及实际弯曲/松弛段，排除管件本体和拆除/待决/拒收/库存段。核对冷热和返工ID谱系；测试重叠和重复到访不增加参考产出。 |  |
| identity_and_units | all inventory rows | 条件卡扩展为精确实际材料/SKU/状态/接收方交换，在下游发布前逐项核实UUID及支撑链。未知发生状态保持未知。保留Energy/kWh及真实小时Duration缺口，不用NCV或计件事件替代。 |  |
| balance_and_fate | install_accept | 在相容池内检查投入、退回、库存、保留材料及实际残余。水分配须区分外供、复用、保留、废水、有证据蒸发及直接载体/组分。不得重复去向或以残差推排放；披露未闭合量及不确定性。 |  |
| assets_and_periods | owned_equipment_attribution; hired_support_service | 核对精确所有权、所有使用者及相关制造/使用/维护/更换/退役期间、一致因果寿命分母及真实服务合同。核对逐期份额与供应商/前景重复涵盖。更换或终止未知阻止最终归属。 |  |
| evidence_quality | all inventory rows | 要求下述六协议记录完整、来源适用及逐卡范围证据需求。标称点系数和质量条件不是实测服务归一化区间。零值须有覆盖记录，缺记录不是零。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 基于前景实测的安装到验收服务数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 明确配置/接口/验收边界的一米铜环压接PEX-B饮用水安装，以及其下游process/lifecyclemodel投影 |
| excluded_use | 夹箍、扩口、推插及其他材料连接；全建筑系统；器具/热水器/市政主管；管道运营寿命；未核实身份的最终发布 |
| required_metadata | 位置/任务/期间、SKU/口径/冷热/支路BOM、最终管段ID和D方法、接口、试验/纠正及验收、供应/包装/资产/服务边界、六协议及来源版本 |
| required_quality_disclosure | 各身份及Energy/Duration支撑缺口、逐卡范围证据需求、计量/因果分配不确定性、未闭合量、寿命/维护/终止证据与未覆盖责任 |
| update_trigger | 路线/材料/SKU、接口、验收规范、供货边界、资产/合同、计量或来源证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| sharkbite-pex-2021 | handbook | https://www.sharkbite.com/sites/default/files/files/sharkbite-pex-install-guide-2021-02.pdf | PDF第5页铜环压接/通止规及限制，第6页支撑。用于路线、相容性、损坏件及支撑责任；热膨胀示例不作耗用系数。 |
| rwc-piping-2024 | handbook | https://www.sharkbite.com/sites/default/files/files/RWC-Piping-Systems-Install-Guide-2024.pdf | PDF第18页铜环压接，第44页尺寸/标称质量/容量，第46页条件消毒，第47页水压试验。用于路线和条件点系数；源gal约定须确认，其他路线试验不得移用。 |
| accepted-length-normalization | method_factor | 本PCR第3及8节：验收长度归一化恒等式与cp_acceptance计量 | 本地数学方法：各实录任务数量除以以m计的正验收长度数值D；归一化产出为1 m。不声称外部实证系数或区间。 |
