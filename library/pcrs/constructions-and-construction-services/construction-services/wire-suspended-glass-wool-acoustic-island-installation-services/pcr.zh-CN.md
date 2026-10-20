---
pcr_id: pcr.constructions-and-construction-services.construction-services.wire-suspended-glass-wool-acoustic-island-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢丝悬吊玻璃棉吸声岛安装服务

## 1. 范围与适用性

本 PCR 适用于将一块工厂完成饰面的玻璃棉吸声岛，通过四根配套可调钢丝水平悬吊于既有且已验收的结构固定点的首次安装。代表性路线采用 Ecophon Solo Square 1200 × 1200 × 40 mm，以及 IG402 方案 1 中单块水平板的步骤。该供应商仅作为示例：其他产品必须证明玻璃棉材质、成品状态、四点钢丝拓扑和允许的板内锚固接口相同。

不包括结构锚固点施工或钻孔、直接支架固定、单点悬吊、倾斜或叠层板、开孔、现场裁板或涂装、完整吊顶龙骨系统、附加灯具或管线等荷载、振动隔离及使用中房间的声学性能评估。安装验收确认固定方式和声明的几何状态。实验室吸声数据本身不能证明房间混响或声级性能。来源：`ecophon-ig402-2024`、`ecophon-solo-square-spec`、`un-cpc3-notes-2025`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.wire-suspended-glass-wool-acoustic-island-installation-services |
| classification_refs | CPC 3.0 54790 — 其他建筑完工和装修服务；建议 narrower 关系 |
| covered_products | 采用四根可调悬吊钢丝及配套吸声板锚件的单块、水平、未裁切玻璃棉吸声岛首次安装 |
| excluded_products | 单点或直接支架、倾斜或叠层、岩棉或石棉板、结构固定点施工、完整吊顶系统及房间声学调试 |
| representative_product | Ecophon Solo Square 1200 × 1200 × 40 mm，配 Connect Adjustable wire hangers 和 Connect Absorber anchors；IG402 方案 1 的单块水平板路线 |
| production_route | 接收并识别部件；核验已验收支撑接口；标记板内锚件位置；安装吸声板锚件；托举板材；连接四根钢丝；在支撑状态下调整；调平、检查防脱连接并交付 |
| market_state | 签署交付验收时的安装服务，尚未进入正常使用阶段 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一块指定水平玻璃棉吸声岛的首次安装 |
| How much | 1 item |
| How well | 板材和四点钢丝组件配套；结构支撑接口已验收；按批准的产品说明和项目布局核验防脱连接、水平、布局、悬吊深度及净距 |
| How long or cycle | 从首次安装到签字验收的一次作业事件，包含验收前可归属的整改；不假定声学使用寿命 |
| reference_flow_link | `accepted_island_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收的水平四点钢丝悬吊玻璃棉吸声岛安装服务 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 板材制造商、型号及材质；名义尺寸及饰面；单块水平未裁切配置；四点钢丝吊件和吸声板锚件编号；实际钢丝长度及锚件位置；已验收结构固定点编号及承载证据；悬吊深度、布局和净距；场址与安装日期；验收标准及检查记录；实际板材和五金数量；上游交付与共享资源边界 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| counted_service | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 仅将一项完整验收的单块吸声岛安装计为 1 item。板数、面积、等效吸声面积及质量属于描述或部件计量，不能替代安装服务数量；按 cp_handover 记录配置。 |
| material_accounting | panel_input; suspension_components; usable_returns; installation_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 区分板数和实际净质量。kg 应由可追溯的实际部件记录或称重获得，排除包装；近似板材质量既不是完整已安装组件质量，也不是通用换算系数。 |
| energy_records | installation_electricity | Energy | kWh | 记录工具、充电和动力作业平台实际耗电及计量或归属边界。仅有工具额定功率不等于能耗。上游电力采用其他单位时保留单位和换算证据。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成品板材及配套悬吊部件已送达场址供货门；适宜的既有结构固定点已安装、核验并验收；作业区可进入 |
| starting_condition_role | 声明的既有实物接口；并不表示结构支撑施工的全生命周期负担为零 |
| product_classification_scope | CPC 3.0 54790 中较窄的吸声板安装子类；振动隔离不在本范围内 |
| recursive_input_rule | 如同类安装工作外包，应使用实际边界的分包安装服务投入，并移除重叠的直接建模作业。不得递归地用本 PCR 替代上游负担数据集，也不得重复计算同一已验收吸声岛。 |
| upstream_dataset_requirement | 要求板材、五金、电力、作业平台及相关运输或处理数据集匹配实际材质、技术、地理和交付门；声明交付态投入数据集是否已包括到场运输和包装制造。 |
| disclosure | 记录先前的结构锚固验收、确切四点钢丝路线、工具及托举作业和整改纳入情况、上游交付门、废物去向，以及已计量、估算和无法取得的活动。新的结构固定点施工需另设过程并披露，不属于本 PCR。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| support_interface | island_install | 托举前核验既有固定点布局和实际组件的承载能力。遵循选定的制造商路线，不套用支架路线扭矩、单点几何、倾斜或叠层限制或附加荷载许可。 | `ecophon-ig402-2024` |
| assembly_gate | island_install | 纳入部件接收拆包、板面标记和吸声板锚件安装、临时托举支撑、四根钢丝连接调整及验收前检查。使用工具、充电、作业平台、耗材或清理时记录其活动。按照指南在板材受到支撑的状态下调整。 | `ecophon-ig402-2024` |
| handover_limit | accepted_island_installation | 按确切说明和项目要求确认防脱、部件配套、位置、水平、悬吊深度和净距。拒收或未检查的吸声岛不是已验收输出。使用、后续维护拆除及经证明的房间声学改善不属于本次事件。 | `ecophon-ig402-2024`; `ecophon-solo-square-spec` |
| waste_release_split | installation_waste; airborne_release | 收集的包装、破损板、钢丝边料和捕集残渣按去向作为废物离开。实际空气释放必须具有物质或粒径/纤维分级、接收空气区室及数量证据；捕集粉尘不是空气排放。缺证据属于缺口，不等于零。 |  |
| `system_boundary_rule_5` | foreground_system_boundary | 工具、充电器和作业平台为同一工程内多个吸声岛安装实例服务时，属于共享基础设施。识别每项共享资产、所有使用该资产的吸声岛或事件、有限的服务或充电期间、实测使用或有证据的物理归属依据，以及唯一的负担责任方。优先直接记录，并将各分配份额与共享实测总量核对。供应商设备寿命由其服务数据集提供，不编造安装时间对应的寿命。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |


### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：配套可调钢丝悬吊和吸声板锚固部件 (`suspension_components`)

过程／待建立交换的方向／类型：`island_install` / `inputs` / `product`.

代表性单板路线记录四个配套可调钢丝吊点及四个配套板内吸声板锚点；纳入实际钢丝组件、锁扣或挂钩，以及规定安装的罩杯或转接件。既有结构固定点是先前接口，不是新消耗部件。构建交换时分别记录具体部件身份。

- 采集对象：配套可调钢丝悬吊和吸声板锚固部件
- 流属性/单位：Mass / kg
- 数量规则：按部件身份记录实际领用悬吊部件净 kg，并核对安装数量、长度、替换、退回和废物。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`ecophon-ig402-2024`

范围证据需求：指南规定连接拓扑，不能据此获得 kg 范围。使用实际部件重量和匹配的安装配置，不采用近似板材质量换算。

#### 采集要求：实际使用的安装搬运和清理耗材 (`handling_consumables`)

过程／待建立交换的方向／类型：`island_install` / `inputs` / `product`.

条件性语义卡片，覆盖本次事件实际使用的一次性防护和干式清理材料。按实际材质拆分并核实各自身份；可重复使用设备归入作业平台服务边界。

- 采集对象：实际使用的安装搬运和清理耗材
- 流属性/单位：Mass / kg
- 数量规则：按材质记录实际可归属消耗 kg；未消耗时记录明确的未使用观察。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

范围证据需求：采集路线特定耗材记录；不预设耗材用量。

#### 采集要求：实际使用的临时板材托举和作业平台服务 (`access_service`)

过程／待建立交换的方向／类型：`island_install` / `inputs` / `product`.

记录实际托举、支撑及高处作业服务小时和设备配置。如果供应商服务数据已含设备能耗，应明确该边界，不再重复添加同一电力。不假定设备小时到板数的换算。

- 采集对象：实际使用的临时板材托举和作业平台服务
- 流属性/单位：Duration / h
- 数量规则：根据设备或操作记录及事件归属确定实际可归属服务 h；仅凭未使用证据方可记零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`
- 来源：`ecophon-ig402-2024`

范围证据需求：场址作业平台和托举方式不同，记录实际服务时长，不设通用安装时间先验。

#### 采集要求：作为可用产品退回的板材、部件和重复使用包装 (`usable_returns`)

过程／待建立交换的方向／类型：`island_install` / `outputs` / `product`.

条件性退出项，覆盖确实可用且退回供应商或仓库、或转交另一工程的板材、悬吊件和重复使用包装，按原产品或材质和去向识别。记录包装保管责任与期初期末库存，避免将重复使用包装误记废物或再次扣减净投入。安装失败须整改后才能验收；并非所有拆下物都可再用。

- 采集对象：作为可用产品退回的板材、部件和重复使用包装
- 流属性/单位：Mass / kg
- 数量规则：按具体产品或材质记录实际退回净 kg；保留板材、部件和包装数量及交接凭据，并将拆下、替换、重新分配和保留库存一次性核对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`

范围证据需求：按实际处置量化退回，不预设残值或避免生产抵扣。

#### 采集要求：交付至有记录处理接收门的安装包装废物 (`packaging_waste`)

过程／待建立交换的方向／类型：`island_install` / `outputs` / `waste`.

按实际材质和接收方再使用、再生或处置路线记录拆包废物。作为产品退回的可重复使用包装，必须与已经指定为废物的包装区分。

- 采集对象：交付至有记录处理接收门的安装包装废物
- 流属性/单位：Mass / kg
- 数量规则：按材质和去向记录实际净 kg；在声明的下游数据集边界内，将实际废物运输或处理负担计入一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：针对到货型号和包装实测包装质量并拆分去向，不设通用包装比例。

#### 采集要求：废弃板材、悬吊件和捕集清理残渣 (`installation_waste`)

过程／待建立交换的方向／类型：`island_install` / `outputs` / `waste`.

条件性语义卡片，覆盖损坏玻璃棉板、废弃紧固件或钢丝边料及捕集粉尘残渣。按材质和去向拆分玻璃棉、金属和其他残余物；排除本事件外的场址施工废物。湿清理产生实际废水时一并记录。

- 采集对象：废弃板材、悬吊件和捕集清理残渣
- 流属性/单位：Mass / kg
- 数量规则：按材质、状态和接收去向记录实际净 kg，关联失败或替换事件及废物接收凭据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：采集可归属拒收品和残渣实测数据，不假定玻璃棉废弃系数或再生回收率。

#### 采集要求：有证据时安装活动向空气释放的已识别物质 (`airborne_release`)

过程／待建立交换的方向／类型：`island_install` / `outputs` / `elementary`.

条件性语义卡片；选取具体交换前必须有实际报告的物质或颗粒/纤维分级、接收空气区室、事件和计量或因子依据。不能仅凭玻璃棉一词选取通用颗粒物 UUID；捕集残余物属于废物。

- 采集对象：有证据时安装活动向空气释放的已识别物质
- 流属性/单位：Mass / kg
- 数量规则：按已识别物质或分级记录进入指定空气区室的实测 kg，或由独立证据支持计算的 kg。调查搬运或锚件安装可能的释放；缺少证据须披露，不能将无数据视为零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

范围证据需求：本 PCR 未确立直接排放因子或纤维粒径分布。估算前获取适用路线和材质的监测或经过审查的适用因子。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| island_install | 接收、四点钢丝悬吊、检查与交付 | required | 本范围内所有安装 | 将成品板、四根可调钢丝和板内吸声板锚件集成到已验收支撑上；整改保留在本节点；在本节点边界记录可用退回产品及废弃拒收品 | 1 item 已验收安装 |

所有卡片均属于本次安装事件。条件性资源或退出卡片只针对实际前景交换实例化，并分别确定具体材质、物质和去向身份。不存在预期联产品。验收前的内部重新调平或部件替换仍在 `island_install` 内，其额外材料和资源保留。来源：`ecophon-ig402-2024`。

### 过程：接收、四点钢丝悬吊、检查与交付 (`island_install`)

#### 输入

##### 产品流

###### 场址供货门的工厂饰面玻璃棉吸声岛板材 (`panel_input`)

记录归属于本次安装的玻璃棉成品板，包括验收前所需替换板。已验收安装服务不同于上游吸声板制造输出。

- 选定流：场址供货门的工厂饰面玻璃棉吸声岛板材
- 流属性/单位：Number of items / item
- 数量规则：实际接收或领用于该事件的板数，与未用退回、损坏废弃板及已验收吸声岛核对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：`ecophon-solo-square-spec`

范围证据需求：不规定通用板材损失或成品率范围。设定校验范围前采集可比型号和场址的接收及拒收记录。

###### 实际使用的板内锚件工具、充电和动力作业平台电力 (`installation_electricity`)

选定图示使用动力起子安装吸声板锚件。实际使用时计入拧紧、充电和动力托举耗电，并为共享充电提供归属依据。不得因结构锚固点已预装而假设用电为零。

- 选定流：实际使用的板内锚件工具、充电和动力作业平台电力
- 流属性/单位：Energy / kWh
- 数量规则：本次事件实际计量或有记录归属的 kWh；保留设备、电表、充电及共享负载证据。零值必须证明实际获准路线未使用动力资源。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`
- 来源：`ecophon-ig402-2024`

范围证据需求：定义能耗校验范围前采集可比事件实测数据及工具或托举使用情况。额定功率不是能量数量。

###### 实际用于安装清理的供水 (`cleaning_water`)

选定路线不要求假定湿清理步骤。仅在实际安装记录显示清理供水时实例化；不把后续日常维护纳入本事件。

- 选定流：实际用于安装清理的供水
- 流属性/单位：Mass / kg
- 数量规则：实际可归属供水 kg；记录水源和用途。液体离开边界时，按实际废物流记录去向和数量，不假定全部蒸发。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

范围证据需求：该干式固定路线没有通用需水量依据；发生湿清理时采集实际清理记录。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的水平四点钢丝悬吊玻璃棉吸声岛安装服务 (`accepted_island_installation`)

真实参考输出是一块指定吸声岛在防脱连接、布局、水平、高度及净距检查后的签字安装验收。已供货板材、部分悬挂板以及房间声学性能属于其他状态。

- 选定流：已验收的水平四点钢丝悬吊玻璃棉吸声岛安装服务
- 流属性/单位：Number of items / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handover`
- 来源：`ecophon-ig402-2024`; `ecophon-solo-square-spec`

范围决定：1 item 是精确定义的参考量，不是经验成品率范围。采集已验收与拒收事件数，用于后续成品率校验。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_service_output | island_install | 唯一预期输出为已验收安装服务。保留验收前所有可归属材料、动力工具或平台消耗、清理、失败尝试和整改。可用退回产品和废物为处置退出项，不是预期联产品。 |  |
| shared_event_attribution | island_install | 同一工程包含多个吸声岛时，识别事件和使用方。优先直接记录；依据有记录的实测使用或合理物理驱动量归属实际共享资源总量，使份额合计等于事件总量。不同配置分层保留，不假定数量相等意味着等效。 |  |
| reject_return_treatment | usable_returns; installation_waste | 每项拒收应关联 island_install 内整改或有记录的可用退回/废物退出。拒收不计入验收数量。未用库存退回只核对一次；不得抵扣失败安装工作，假设损坏品可再用，或在未另行声明下游方法时声称避免原生制造或再生抵扣。 |  |
| access_energy_boundary | access_service; installation_electricity | 记录服务供应商和期间、可归属平台小时及已含的设备、燃料或充电负担。使电力边界与实际服务数据集匹配，每项操作只有一个负担责任方。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_components | island_install | 板材、悬吊件和可用退回产品 | 接收、领用、计数、称重和退回记录 |event_id; component_id; model; material; dimensions; finish; received_count; installed_count; replaced_count; returned_count; opening_stock; closing_stock; actual_net_mass; wire_length; anchor_position; destination; transfer_id; packaging_id; packaging_count; custody_owner|清点并识别板材和每项安装悬吊件；kg 行使用经校准称重或可追溯的确切部件净质量记录；核对接收、库存和退回，单独保留已验收结构固定点证据。 汇总细则：每参考流的可归属净部件数量；可用退回只核对一次，不移除失败作业实际消耗的资源 记录重复使用包装的材质、数量、净质量、保管交接及期初期末库存。| item; kg; mm | 每次安装及退回或替换 | 完整事件直至验收及归属退回处置 | 一个声明场址及配置分层 | 每参考流 | 发票、部件资料、秤量证据、安装照片、库存和退回凭据 |
| cp_resources | island_install | 耗材、电力、作业平台及条件性水 | 电表、设备日志、领用和清理记录 | event_id; resource_id; material; amount; unit; device; meter_start; meter_end; charging_boundary; equipment_id; service_start; service_end; service_hours; consumers; asset_id; period_start; period_end; attribution_driver; included_service_burdens; no_use_evidence |计量实际耗电及分配充电；识别工具、托举及有证据的手动替代方案；记录耗材或水供应及平台服务时长；披露供应商边界和共享事件归属。 汇总细则：按有记录物理证据一次性分配共享总量，再将可归属事件总量除以验收安装数量，获得每参考流数量| kg; kWh; h | 每次资源使用或共享事件 | 完整安装，含整改和清理 | 同一场址、事件和配置分层 | 每参考流 | 电表读数及校准、日志、领用记录、供应商范围、分配核对和实际未使用观察 |
| cp_handover | island_install | 已验收安装服务 | 检查和签字验收 | event_id; island_id; panel_model; dimensions; material; four_wire_route; suspension_part_ids; support_fixing_ids; support_acceptance; capacity_evidence; anchor_positions; retention; level; suspension_depth; layout; clearance; inspection_date; failed_checks; corrective_actions; acceptance_signature; accepted_count |按确切产品路线和项目布局检查；核验既有支撑验收、四个防脱连接以及支撑状态下的调整；签字验收前记录实际几何和整改。 汇总细则：仅计签字验收吸声岛；每参考流为 1 item| item; mm | 每块吸声岛及整改复检 | 首次安装直至签字验收 | 已识别的吸声岛和场址 | 每参考流 | 签字检查表、批准布局和说明、支撑验收及照片 |
| cp_waste | island_install | 包装、拒收材料及捕集残渣 | 称重和去向清单 | event_id; waste_id; material; state; source_operation; reject_id; net_mass; destination; carrier; receiving_gate; transfer_id; treatment_scope |按材质和去向分开称量实际包装及废弃材料或残渣；将拒收与替换、退回核对；任何湿清理产生的实际液态废物均须识别。 汇总细则：每参考流按废物身份和去向汇总可归属 kg；每项废物运输或处理负担只归属一次| kg | 每次废物退出 | 完整事件及归属废物交接 | 仅可归属场址作业 | 每参考流 | 秤量及皮重证据、废物凭据、运输和去向记录、库存拒收核对 |
| cp_air | island_install | 条件性直接空气释放 | 活动评估、监测或适用因子记录 | event_id; operation; material; substance; particle_or_fibre_fraction; receiving_compartment; method; measured_concentration; volume_or_activity; factor; factor_basis; captured_mass; release_mass; uncertainty; no_release_evidence; missing_evidence |评估实际搬运和锚件安装；保留具有物质或分级及空气区室的监测或经过审查的适用因子；区分捕集废物。分别记录有依据的未发生与数据无法取得。 汇总细则：按识别物质汇总每参考流释放量并保留方法与覆盖；不得以零替代缺数据| kg | 每项相关操作或有记录代表性监测期间 | 所有相关事件，含清理 | 指定作业地点及接收空气区室 | 每参考流 | 监测或因子适用性、活动记录、不确定性、捕集和去向证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| event_normalization | all inventory rows | 对每个配置分层，将可归属事件数量除以签字验收安装数量，得到每参考流数量；保留排除或失败作业的负担归属，不以仅供货板数作分母。验收数量为零时，不能生成已验收安装服务数据集。 | event quantities; accepted_count; cp_handover; relevant node protocol | 每 1 item 已验收安装的数量 |  |
| component_reconciliation | panel_input; suspension_components; usable_returns; installation_waste | 在一致的数量或质量基准上，将期初库存加接收量与安装部件、可用退回、废弃部件和期末库存核对；保留替换事件关联及确切部件称量证据。不得由名义板重推断完整组件 kg。 | cp_components; cp_waste | 部件平衡及缺记录标记 |  |
| shared_resources | installation_electricity; access_service; handling_consumables; cleaning_water | 按有记录的物理驱动量将每项共享事件总量分配至实际使用方；核对份额与总量，保留服务数据集的能耗边界，然后使用 event_normalization。 | cp_resources; cp_handover | 已归属资源数量及边界核对 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| route_identity | all inventory rows | 保留玻璃棉身份、成品单块水平状态、确切型号和四点钢丝接口。不得混合其他悬吊拓扑，亦不推定其他制造商等效。 | 确切产品说明、部件记录和安装照片 |
| support_gate | accepted_island_installation | 记录既有结构固定点验收及承载证据，并提供防脱连接和几何状态签字检查；支撑未知或防脱不合格时不能生成验收输出。 | cp_handover; 已批准项目布局; ecophon-ig402-2024 |
| coverage | all inventory rows | 覆盖整个事件和整改；披露缺数量、不确定归属、条件性未使用及上游交付或处理边界。无法取得直接释放证据时保持明确。 | 所有节点协议、平衡和缺数据登记 |
| representativeness | all inventory rows | 报告场址、日期、配置、施工或平台方式、计量覆盖和测量不确定性。仅合并兼容且已声明的配置，保留原事件分母。 | 事件登记、cp_components、cp_resources、cp_handover |
| identity_resolution | all inventory rows | 最终 TIDAS 交换前，核实每个实际具体产品、废物或基本流身份及其流属性/单位链。条件性语义卡片是记录要求，不是具体交换 UUID。 | 具体交换详情、支持链确认及去向证据 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| route_and_gate | accepted_island_installation | 缺少匹配的单块水平四点钢丝配置、已验收支撑证据、全部防脱连接或签字安装检查时，拒绝该验收输出记录。房间声学结果不能替代此交付门。 | `ecophon-ig402-2024` |
| inventory_completeness | island_install | 核对板材、悬吊件、可用退回、拒收和包装；计入动力安装板内锚件及实际作业平台、充电和清理。条件性零使用必须有观察记录，不得由既有结构固定点推定。 | `ecophon-ig402-2024` |
| reject_ownership | usable_returns; installation_waste | 每块不合格吸声岛均关联整改或退出。未解决拒收不计入验收数量；重复安装和替换部件的负担仅归属一次。 |  |
| quantity_and_ranges | all inventory rows | 确认归一化至签字验收服务数量、实际 kg 或数量身份及匹配单位。不规定通用成品率、安装时间、组件质量、能耗或废物范围；记录证据需求，使用校验范围前取得路线特定参考数据。 |  |
| emission_and_identity | airborne_release; all inventory rows | 每项具体交换须有实际材质、物质或分级、接收去向或区室及适用计量或因子证据。缺少身份或活动数据仍须披露，不接受宽泛颗粒物身份或无依据零值。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对指定四点钢丝水平玻璃棉吸声岛配置的前景安装事件数据包 |
| downstream_use | secondary_dataset; background_dataset；在交换身份核实后形成下游 process 和 lifecyclemodel 投影 |
| allowed_use | 采用实际上游和去向数据集，模拟兼容板材、支撑接口和作业平台条件下声明的首次安装事件 |
| excluded_use | 结构锚固施工、其他固定方式、完整吊顶、附加荷载、正常使用维护拆除、通用房间声学收益或未记录的质量/面积等效安装 |
| required_metadata | 配置与部件、场址和日期、支撑验收、声明交付门、验收数量、实际几何、采集和计算方法、上游交付及平台能耗边界、拒收退回和废物去向 |
| required_quality_disclosure | 数据覆盖及不确定性、条件性未使用证据、直接释放数据缺口、未解决身份、范围证据缺失及共享资源归属 |
| update_trigger | 板材材质尺寸、悬吊拓扑、支撑或验收要求、安装实践、边界或供应商范围、来源说明或数据覆盖变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ecophon-ig402-2024 | handbook | Ecophon，Installation guide IG402（2024.11），Solo Square M402；产品页面 https://www.ecophon.com/en/products/free-hanging-units-and-baffles/solo/solo-square/ ；IG402 方案 1 单块水平板图示，第 1、3–8 页 | 四点钢丝路线、板内锚件安装、托举支撑、调整、路线几何及与其他方案的区分 |
| ecophon-solo-square-spec | handbook | Ecophon Solo Square 技术规格，第 1 页。https://www.ecophon.com/globalassets/media/pdf-and-documents/specification-texts/pdf/solo/solo-square.pdf | 玻璃棉成品板身份、安装方法依赖、防脱挂钩和锚件；实验室吸声数据属于产品描述，不是房间性能 |
| un-cpc3-notes-2025 | official_guidance | 联合国统计司，CPC Version 3.0 explanatory notes（2025 年 6 月 30 日），54790，第 298 页。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 室内墙面或顶面吸声板/砖安装属于 54790，排除振动隔离 |
