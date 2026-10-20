---
pcr_id: pcr.existing-asphalt-runway-wet-saw-cut-transverse-grooving-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有沥青跑道湿式锯切横向矩形刻槽服务

## 1. 范围与适用性

本 PCR 涵盖在经确认适于刻槽的既有沥青跑道上，以湿式金刚石锯片锯切横向矩形槽的服务，包括集成式连续浆液收集、连续清理、可归属的设备布置和试验段作业、实际施工致损修复以及经验收的维修交还。适用于实际项目采用 FAA AC 150/5370-10H 第 P-621 项矩形槽几何要求和检测程序，并明确项目选定条款的情况。不包括混凝土、塑性成槽或梯形槽、金刚石磨削、重大既有路面修复、新跑道或新沥青层制造、排水与灯光安装、化学表面处理，以及后续飞机或机场运行。刻槽验收本身不保证摩擦系数、使用寿命或全天候安全。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-asphalt-runway-wet-saw-cut-transverse-grooving-services |
| classification_refs | CPC 3.0 54213; narrower |
| covered_products | 既有完好沥青跑道增量施工形成的、经验收的横向矩形湿式锯切刻槽服务 |
| excluded_products | 新路面；混凝土或梯形槽；磨削；重大既有缺陷修复；机场运行 |
| representative_product | 在签署空侧维修交还记录时，经验收且已清理的沥青刻槽平面面积 |
| production_route | 经确认适于刻槽的保留沥青 → 湿式金刚石锯切与连续真空回收和清理 → 分区检测验收的表面 |
| market_state | 场址特定的已完成施工改造服务；不形成独立新路面资产 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 既有沥青跑道经验收的横向矩形湿式锯切刻槽服务 |
| How much | 1 m2 经验收且不重复计算的刻槽平面面积 |
| How well | 明确项目采用的 P-621 槽几何要求、分区检测验收、清洁状态与修复完成要求 |
| How long or cycle | 一次有边界的占用与刻槽施工期，包括可归属的试验段、作业窗口和返工；不承诺全寿命性能 |
| reference_flow_link | `accepted_grooving` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 既有沥青跑道经验收的横向矩形湿式锯切刻槽服务 |
| 参考流属性 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | 面积单位组 `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 跑道/场址与坐标；保留沥青适用状态；占用日期；槽方向/宽度/深度/间距与采用的单位制；不刻槽区域；机器/刀头/作业批次标识；分区样本与验收；浆液去向；致损修复；验收面积与签署交还记录 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `accepted_area` | `accepted_grooving` | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 以验收刻槽平面多边形并集测得 A，排除边缘/灯具/接缝不刻槽区、未解决的不合格区及未处理间隙。重复锯切只计一次。每参考流输出数量严格为 1 m2；所有可归属施工期数量除以正值 A。 |
| `groove_geometry` | `accepted_grooving` | 长度 | mm | 记录项目采用的单位制和准确规范。P-621 SI 标称宽度 6 mm (+2/-0)、深度 6 mm (±2)、间距 38 mm (-3/+0)，槽方向垂直于中线；保留实际分区验收分布和线形要求，不把标称尺寸作为资源消耗因子。原文标称 SI 间距 38 mm (-3/+0) 与另列验收最小间距 34 mm 是不同原文条款，存在算术差异；逐字保留两者，并在验收前取得负责工程师对项目采用条款优先级及处理方式的说明。不默默等同经取整的 SI/英制条款，也不创造通用修正限值。 |
| `quantity_custody` | `fuel_supply`, `diamond_blades`, `lubricant_supply`, `remedy_materials`, `packaging_supply`, `unused_returns` | 质量 | kg | 计量未抵扣对外退回的产品领用总量，去除车辆/容器皮重。按具体身份记录真实对外退回、保留期末库存、消耗/转化及释放量。体积转质量必须采用实际产品在明确温度下的密度；不得假设水或燃料密度。 |
| `freight_units` | `freight_service` | 质量*距离 | kg*km | 采用净货物 kg 乘以实际分段距离 km；从已列单位 t*km 转换时，每 t*km 为 1000 kg*km。不得把车辆行驶距离与货物运输服务混淆。 |
| `energy_units` | `electricity_supply` | 能量 | kWh | 保留实测电量 kWh 及实际供电边界。不得用热值能量替代通用电力 Energy 身份；燃料质量和电能为不同物理量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在获准空侧占用时接收的既有完好稳定沥青跑道；既有凸起、凹陷、严重开裂/剥落或缺陷区已由明确责任方修复，并确认可刻槽。 |
| starting_condition_role | 保留既有路面接口；不是新供应完整跑道，也不代表增量施工无负担。 |
| product_classification_scope | CPC 3.0 54213 内较窄的跑道改造服务；PCR 身份不由分类叶节点推导。 |
| recursive_input_rule | 单独购入的同类刻槽服务按实际验收面积和供应交接点记录，并采用上游数据集；不得递归虚构保留跑道制造，也不得重复分包资源。 |
| upstream_dataset_requirement | 实际供水、燃料、锯片、润滑剂、修复产品、电力、运输、包装、各项资产服务及外部处理均采用经验证匹配的上下游数据集，并声明覆盖边界。 |
| disclosure | 来料基底/状态与既有修复责任方；项目采用的 P-621 与单位制；施工期/作业窗口；设备布置/试验段纳入情况；实际修复责任；资产/覆盖、供应与接收交接点；不刻槽区、天气及库存结转。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `retained_host` | `groove_finish` | 保留既有沥青既有路面，不新增完整跑道上游负担，也不计避免更换信用。纳入增量占用、导线、试验段、湿式切割、收集、清理、运输和施工致损修复。既有重大修复另定边界并明确责任。 | `faa-p621-2018` |
| `continuous_capture` | `groove_finish` | 实际采用湿式金刚石锯切、集成式连续浆液真空收集和连续清理。计入供水和经批准的实际残余物处置。不得将浆液进入机场雨水管网作为常规排放；若冻结条件妨碍立即清除碎屑/排水，则不得开展本路线。 | `faa-p621-2018` |
| `equipment_blades` | `diamond_blades` | 记录与沥青硬度匹配的机器/刀头及锯片配置、单次成槽能力、深度/线形控制和一致的锯片磨耗/直径。P-621 至少 0.5 m 宽多槽切割能力为设备资格要求，不是面积产能或耗水因子。 | `faa-p621-2018` |
| `airside_gate` | `accepted_grooving` | 仅在实测几何/分区验收、连续清理完成、残余物交接有据、指定致损修复验收及签署维修交还后结束。后续机场/飞机运行及摩擦/寿命声明不属于本输出。 | `faa-p621-2018` |
| `campaign_asset_boundary` | `capital_service` | 按施工期占用/作业窗口、设备布置/试验段/返工和每项实际资产的制造、使用、维护、更换、寿命终结阶段建立索引。跨作业共享的锯切/真空/清洁/罐车/发电/计量及实际进入、防护、围控、修复设备，包括有边界的服务商物理资源，必须按完整寿命归属；从资产覆盖中明确排除已直接计入的燃料、电力和工具行。 |  |
| `actual_exchange_expansion` | 所有清单行 | 条件性材料/服务/物质卡是前景采集义务。将每一种实际身份、交接状态、服务商/接收方和属性展开为独立交换；不得将不同产品、废物或物种合并绑定或相加。记录有证据的不发生状态；未知活动不等于零。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：设备供给交接点的实际发动机燃料牌号 (`fuel_supply`)

过程／待建立交换的方向／类型：`groove_finish` / `inputs` / `product`.

仅在采用燃烧设备时适用。每种实际燃料牌号单独解析为交换，不得合计不同燃料。锯切、真空、清理、布置和修复的需求只计一次。实际由燃烧设备承担的进入、防护、修复和有边界服务商资源亦只计一次。 数量范围证据需求：必须取得燃料牌号、发动机负荷和实际作业记录；FAA 留空产能条款和槽尺寸公差不构成耗油依据。

- 采集对象：设备供给交接点的实际发动机燃料牌号
- 流属性/单位：质量 / kg
- 数量规则：按去皮但未抵扣退回的领用燃料总量除以 A；另根据退回、保留库存、已收集废物及分开的实际释放推导燃烧量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`
- 来源：`faa-p621-2018`

#### 采集要求：实际供给的适配沥青刻槽金刚石锯片或刀头节块 (`diamond_blades`)

过程／待建立交换的方向／类型：`groove_finish` / `inputs` / `product`.

明确供应完整锯片还是更换节块，以及结合剂/材料、直径和适配刀头。不同供应身份分别记录。新旧锯片混用、磨损和直径差异须满足采用的 P-621 要求；直接工具供应不再纳入资产维护覆盖，避免重复。 数量范围证据需求：必须取得实际供应质量、磨损、更换及剩余可用服务记录；最小切割头宽度不是锯片耗用因子。

- 采集对象：实际供给的适配沥青刻槽金刚石锯片或刀头节块
- 流属性/单位：质量 / kg
- 数量规则：可归属施工期的去皮锯片或节块供应总量除以 A；包括说明负担的期初可用工具库存转入、真实退回及期末库存平衡。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`faa-p621-2018`

#### 采集要求：实际按货物区分的施工期运输服务 (`freight_service`)

过程／待建立交换的方向／类型：`groove_finish` / `inputs` / `product`.

供应商或接收方数据集未涵盖的进退场、水/燃料/工具配送及残余物收集均纳入。空车移动以实际车辆服务记录说明，不虚构货物质量；不得同时计入运输服务与直接车辆燃料。 数量范围证据需求：必须取得实际货物、分段距离、车辆装载和服务商边界；不存在默认距离或返程装载系数。

- 采集对象：实际按货物区分的施工期运输服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：按各运输方式/服务商分开，将实际可归属净货物 kg 乘以各段 km 后求和，再除以 A。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

#### 采集要求：每项实际施工资产的完整寿命服务份额 (`capital_service`)

过程／待建立交换的方向／类型：`groove_finish` / `inputs` / `product`.

列出锯切机、集成真空系统、外部回收/罐车/清洁设备、实际发电机和计量仪器，以及使用时的进入、防护、围控和施工致损修复设备。有边界第三方服务商物理资源按覆盖证据只纳入一次；批准文件不是物理供应。跨多个期间/作业使用的资产涵盖完整制造、维护、更换和寿命终结；直接燃料/电力及金刚石工具不在资本覆盖中重复纳入。 数量范围证据需求：在役资产需实测服务历史及有依据的剩余服务/更换/终止/寿命终结情景与敏感性；已退役资产采用实际完整寿命。寿命分母未知则阻止定稿。

- 采集对象：每项实际施工资产的完整寿命服务份额
- 流属性/单位：物品数量 / item
- 数量规则：各项单独识别资产的可归属施工期服务量除以有证据的完整寿命服务量，再除以 A，以资产等价 item 表示。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

#### 采集要求：实际单独供应的施工期包装材料 (`packaging_supply`)

过程／待建立交换的方向／类型：`groove_finish` / `inputs` / `product`.

仅在实际包装进入保管范围时适用。上游已含的供应商包装保留物理平衡，但不再增加第二次上游供应负担；另购包装单独计入。作为耐用资产的托盘/容器采用完整寿命服务处理。 数量范围证据需求：须取得实际包装组成、净质量、重复使用、真实退回和库存记录；不得假设通用包装比例。

- 采集对象：实际单独供应的施工期包装材料
- 流属性/单位：质量 / kg
- 数量规则：按材料和保管交接点分开，实际去皮包装供应总量除以 A。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际单独供应的泄漏清理或围控耗材 (`cleanup_consumables`)

过程／待建立交换的方向／类型：`groove_finish` / `inputs` / `product`.

仅在施工期泄漏/清理实际使用供应吸附剂、擦拭物或围控产品时适用。分别识别实际产品、组成、状态、供应商及用途；不得合计不同耗材。供应商/服务商已含产品只计一次。使用后污染产品作为 spent_fluids 下组成特定的废物交换离场，所收集液体只计一次。 数量范围证据需求：必须有实际泄漏/清理事件、供应产品记录、净质量及受污染废物接收路线；不假设常规消耗、泄漏频率、配方或通用范围。

- 采集对象：实际单独供应的泄漏清理或围控耗材
- 流属性/单位：质量 / kg
- 数量规则：每种实际清理耗材的去皮领用总量除以 A，并记录期初库存负担转入、真实对外退回及保留期末库存平衡。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：从明确环境资源实际抽取的水 (`abstracted_water`)

过程／待建立交换的方向／类型：`groove_finish` / `inputs` / `elementary`.

仅在从明确地表水或地下水源直接取水时适用。购入供水属于 supplied_water；内部回用不构成新增取水交换。 数量范围证据需求：必须提供取水计量、获准水源及不确定度记录；不得从供水量或回收浆液量推断取水比例。

- 采集对象：从明确环境资源实际抽取的水
- 流属性/单位：体积 / m3
- 数量规则：按资源类型和地点分别计量的直接环境取水量除以 A。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

#### 采集要求：实际从施工期保管范围向外退回的未使用供应产品 (`unused_returns`)

过程／待建立交换的方向／类型：`groove_finish` / `outputs` / `product`.

仅在有文件记录的供应商或其他持有方物理交接时适用。分别保留燃料牌号、锯片配置、润滑剂配方、修复材料和包装身份，与总领用输入口径匹配。留在保管范围的期末库存是结转平衡，不是对外交换。不自动计避免生产信用。 数量范围证据需求：真实退回单据和称量确定数量；不得假设退回率，也不得合计不同材料。

- 采集对象：实际从施工期保管范围向外退回的未使用供应产品
- 流属性/单位：质量 / kg
- 数量规则：每种不同供应产品实际对外退回的净去皮数量除以 A；不得已在输入中抵扣后再次作为退回输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：接收交接点的实际废金刚石锯片或节块 (`spent_blades`)

过程／待建立交换的方向／类型：`groove_finish` / `outputs` / `waste`.

协调工具供应、剩余可用库存、产品退回、进入浆液或空气的磨耗和收集废工具。钢基体与磨料组成必须有实际证据。保留供未来作业使用的可用工具是库存，不是废物。 数量范围证据需求：须提供废工具称量、更换和磨耗证据；不得假设废物等于供应质量或每施工期全部报废。

- 采集对象：接收交接点的实际废金刚石锯片或节块
- 流属性/单位：质量 / kg
- 数量规则：按完整锯片或节块及接收方分别记录实际离场净废工具质量，再除以 A。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`
- 来源：`faa-p621-2018`

#### 采集要求：实际分类收集的施工包装废物 (`packaging_waste`)

过程／待建立交换的方向／类型：`groove_finish` / `outputs` / `waste`.

仅在实际包装被弃置时适用。区分真实可重用产品退回、废物及保留包装；不得绑定混合纸/塑料/木材身份，也不自动计回收信用。 数量范围证据需求：须有实际组成、去皮接收单据与退回/库存平衡；不规定通用废弃比例。

- 采集对象：实际分类收集的施工包装废物
- 流属性/单位：质量 / kg
- 数量规则：按包装材料和接收方记录实际对外废弃净质量，再除以 A。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`

#### 采集要求：送至明确接收方的实际收集废燃料、润滑剂或受污染清理耗材 (`spent_fluids`)

过程／待建立交换的方向／类型：`groove_finish` / `outputs` / `waste`.

仅在燃料排放收集、换油或泄漏回收时适用。燃料与润滑剂废物分开建立交换；与总领用、保留库存、可用产品退回及实际释放量一致。总泄漏量分成收集和释放部分，不得再次扣除。污染吸附剂、擦拭物或围控产品按实际污染组成和接收方建立独立废物交换；不得同时将其含液总质量与重复的单独吸附液体质量相加。 数量范围证据需求：必须有事故/换油记录、净质量、组成和接收确认；不假设废物比例。

- 采集对象：送至明确接收方的实际收集废燃料、润滑剂或受污染清理耗材
- 流属性/单位：质量 / kg
- 数量规则：按实际配方、污染状态和接收方分别记录已收集废物对外净量，再除以 A。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`

#### 采集要求：向空气释放的实际单独识别燃烧物质 (`combustion_emissions`)

过程／待建立交换的方向／类型：`groove_finish` / `outputs` / `elementary`.

仅在实际现场燃烧时适用。UUID 绑定前须确认每种物质与接收空气区室；NOx、VOC 或颗粒物集合名称不是固定物质身份。外购电力或运输数据集的上游尾气不在此重复计入。 数量范围证据需求：须有发动机/燃料及运行条件特定实测，或适用性和不确定度明确的因子；本 PCR 不给通用排放因子或物种拆分比例。

- 采集对象：向空气释放的实际单独识别燃烧物质
- 流属性/单位：质量 / kg
- 数量规则：针对实际发动机/燃料/物种，将燃烧活动量乘以适用的有据物种因子，或采用实测物种质量，再除以 A。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`

#### 采集要求：向空气实际释放且已单独表征的切割逸散颗粒 (`fugitive_particles`)

过程／待建立交换的方向／类型：`groove_finish` / `outputs` / `elementary`.

仅在湿式切割和真空收集仍存在实测或证实逸散时适用。已收集细料计入浆液；回收固体中的锯片磨耗不再计为空气排放。未知平衡差额须调查，不得直接认定粉尘。 数量范围证据需求：必须有作业特定释放测量、粒径与组成证据；不得直接转用干切割因子或假设去除效率。

- 采集对象：向空气实际释放且已单独表征的切割逸散颗粒
- 流属性/单位：质量 / kg
- 数量规则：按物质/粒径和空气区室实测逃逸质量，再除以 A。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`faa-p621-2018`

#### 采集要求：向明确环境实际释放的单独识别液体或物质 (`liquid_release`)

过程／待建立交换的方向／类型：`groove_finish` / `outputs` / `elementary`.

仅在有证据的环境释放时适用，包括实际水排放/蒸发或燃料/润滑剂事故。不同物质与介质分别建立交换；水体积转质量仅用有据密度/温度。采用 P-621 时禁止浆液进入雨水管网，不得将其作为常规模拟处置。 数量范围证据需求：必须有实际事故、获准出口或实测蒸发记录，必要密度以及介质/物种证据；未闭合水量不得自动计作排放。

- 采集对象：向明确环境实际释放的单独识别液体或物质
- 流属性/单位：质量 / kg
- 数量规则：按物质与接收介质计量实际释放质量，再除以 A，与事故收集废物区分。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`faa-p621-2018`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `groove_finish` | 湿式锯切刻槽与浆液回收耦合作业 | `required` | 经确认可刻槽的既有沥青和获批作业占用 | 从保留完好沥青至经验收清洁刻槽面积的表面加工；切割和回收物理耦合 | 1 m2 经验收不重复平面面积 |

施工期由记录完整的每日作业窗口与锯切遍数组成。设备布置、导线、非通行区域试验段、切割、集成收集、清理、分区计量与实际致损修复属于同一责任。已切割但仍待浆液清除或验收的表面是未完工状态，不能作为独立交接产品。不得仅为文件或检测另设节点。

### 过程：湿式锯切刻槽与浆液回收耦合作业（`groove_finish`）

#### 输入

##### 产品流

###### 场址供水交接点购入的刻槽与清理用水（`supplied_water`）

按实际饮用水或工艺水等级和供应商分别记录。去除罐体/容器皮重；不得用环境取水替代购入供水。 数量范围证据需求：已审阅来源未提供跨场址适用的耗水数值范围；确定限值前，取得水表不确定度及按机器、沥青、槽几何和回收回路划分的施工期分布。

- 选定流：场址供水交接点购入的刻槽与清理用水
- 流属性/单位：体积 / m3
- 数量规则：本施工期实际外购进水总计量除以验收面积 A；不含内部循环。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`faa-p621-2018`

###### 刻槽设备接电点的实际外购电力（`electricity_supply`）

仅在外部供电时适用，声明实际电压、供应商/电力组合及连接交接点。已通过发电机燃料覆盖的电力不得再作为外购电力输入。计入实际用电的进入/防护/修复设备及有边界服务商资源，明确所有权与覆盖重叠。 数量范围证据需求：取得实际分表精度、作业窗口负荷和不确定度；未明确动力设备时不能采用通用资源先验。

- 选定流：刻槽设备接电点的实际外购电力
- 流属性/单位：能量 / kWh
- 数量规则：单独计量的施工期可归属活动外购电量除以 A。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`faa-p621-2018`

###### 实际供应的设备润滑剂配方（`lubricant_supply`）

仅在存在可归属润滑作业时适用。分别解析各配方和供应状态；可回收油、保留库存与事故释放是不同出口。服务商已含机器润滑剂不得重复计入负担。 数量范围证据需求：针对实际设备取得产品说明和实测补加/更换/退回记录；没有合理的通用润滑油因子。

- 选定流：实际供应的设备润滑剂配方
- 流属性/单位：质量 / kg
- 数量规则：发入施工期保管范围的实际润滑剂去皮总量除以 A。期初库存负担转入和期末保留库存结转遵循 custody_and_stocks。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

###### 实际单独供应的施工致损修复材料（`remedy_materials`）

仅在指定施工致损修复时适用。每种实际沥青修补混合料、结合料、密封剂或其他产品分别建立经验证交换；本卡为采集义务，不构成混合的通用材料总量。既有重大修复位于本服务之外，并明确责任方和来料完好接口。 数量范围证据需求：仅实际批准的修复与实测批次记录可确定供应；不规定假设缺陷率或修复配方。

- 选定流：实际单独供应的施工致损修复材料
- 流属性/单位：质量 / kg
- 数量规则：每种实际修复材料的去皮供应总量除以 A；分别保留身份对应的出口及库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`faa-p621-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 既有沥青跑道经验收的横向矩形湿式锯切刻槽服务（`accepted_grooving`）

利用地理定位边界与签署分区验收记录计量不重复验收刻槽平面面积 A；不刻槽、不合格及未完工区不计入 A。重复锯切不得增加面积。非通行区域试验段负担按规则归属，不虚构可销售共产品。 数量范围证据需求：准确的 1 m2 定义参考流，不是经验产率范围。实际施工期 A 及其计量不确定度必须由测量边界与验收记录确定；不规定施工期最小面积。

- 选定流：既有沥青跑道经验收的横向矩形湿式锯切刻槽服务
- 流属性/单位：面积 / m2
- 数量规则：1 m2
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`faa-p621-2018`

##### 废物流

###### 送至明确废物接收方的湿态沥青刻槽回收浆液（`captured_slurry`）

连续集成回收形成切割细料与水的实际混合物。声明沥青/结合料/骨料特征、锯片磨耗污染、湿态及批准处理去向。若沉降干固体和分离废水沿不同路线离场，建立独立实际交换，避免重复湿浆液组分。不假定雨水管网排放或回收信用。 数量范围证据需求：称量去皮并采样实际湿质量和干固体；槽几何仅作核查，不能替代实际密度/含水率/组成，也不构成通用废物率。

- 选定流：送至明确废物接收方的湿态沥青刻槽回收浆液
- 流属性/单位：质量 / kg
- 数量规则：向各明确接收方实际交接的净湿浆液质量除以 A；分别报告水、干固体与库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`
- 来源：`faa-p621-2018`

###### 施工致沥青损坏修复产生的实际分类碎料（`remedy_debris`）

仅在指定的本施工期致损修复时适用，并关联原 groove_finish 作业窗口及最终修复验收。不得改称废弃新跑道产品，也不得默默混入已计量切割浆液。 数量范围证据需求：必须有实际损坏范围、碎料交接及保留/回用量记录；不存在通用不合格比例。

- 选定流：施工致沥青损坏修复产生的实际分类碎料
- 流属性/单位：质量 / kg
- 数量规则：按组成和接收方分开记录实际移除修复碎料对外净量，再除以 A。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residuals`
- 来源：`faa-p621-2018`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `campaign_attribution` | 所有清单行 | 将直接施工期记录归属于验收面积 A。即使设备布置、批准试验段、机器定位、清理、停工与返工区域不是可销售验收输出，仍保留其负担。混合作业单优先单独计量，否则采用有据因果机器时间/服务依据并披露敏感性；价格不是默认分配依据。 |  |
| `run_attribution` | `groove_finish` | 每项领用、用水/能源需求、废物收集、换线、锯片更换和修复均关联机器/刀头/日期/作业批次与窗口。施工期汇总前，将共享布置/清理负担仅一次分给实际受益作业。跨遍数和作业批次的验收多边形去重。 |  |
| `asset_complete_life` | `capital_service` | 逐资产列出全部作业/节点/报告期及完整制造、维护、更换与寿命终结覆盖。先用实际施工期服务量除以相同驱动指标下的完整寿命服务量，再除以 A；已完成寿命采用实际历史，在役资产采用有据剩余服务/更换/终止/寿命终结情景。标记实测/预测组成、敏感性、分母证据和更新触发；覆盖或分母缺失阻止定稿。 |  |
| `no_duplicate_burden` | 所有清单行 | 保留既有路面不作为新生产资产。机器燃料/电力、金刚石锯片、润滑、运输和处理各自只归属一次：披露供应商/数据集包含项，从资本或捆绑服务中排除重复覆盖。不假设避免施工/回收信用或共产品分配。 |  |
| `reject_retention` | `groove_finish` | 几何不合格、浆液未清除和损坏路面在指定修复与验收前保持未完工/不合格状态。返工返回 groove_finish 并保留初次及重复作业全部负担；废弃物以已识别废物离场。未解决/放弃区域计入负担但不计入验收面积。 | `faa-p621-2018` |
| `custody_and_stocks` | 所有清单行 | 若对外退回作为输出，则去皮材料/燃料领用总量不得再减退回。期初实物库存及其尚未消耗的上游负担从上期保管/期间台账仅转入一次；新领用产品按实际供应交接点计入。归属已用/转化量与实际对外退回/废物/释放量，不能再次对转入期初库存计入负担。保留期末实物库存及其未消耗上游负担结转下一保管/期间台账，不形成对外交换。说明归一化施工清单与库存转移如何跨期守恒全部上游负担，避免遗漏期初负担或再次计入期末库存。产品退回、收集废物和实际环境释放为互斥出口；总事故泄漏须分项且不能重复扣除。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `groove_finish` | 验收面积与槽几何 | 前景实测/日志记录 | site_id; runway_coordinates; campaign_id; work_window; machine_id; head_id; pass_id; polygon_vertices_m; excluded_polygon_vertices_m; accepted_polygon_vertices_m; rejected_polygon_vertices_m; control_strip_area_m2; groove_width_mm; groove_depth_mm; groove_spacing_mm; orientation_deg; alignment_deviation_mm; alignment_length_m; edge_clearance_m; light_clearance_mm; joint_clearance_mm; zone_id; test_time; instrument_range_mm; instrument_resolution_mm; adopted_unit_system; specification_revision; acceptance_signature; handback_time | 测量平面多边形并集 A、不刻槽区及单独记录的试验段；保留采用的 P-621 几何/线形值、原单位制样本与签署分区验收。P-621 SI 线形为 23 m 内 ±38 mm，每 150 m 可重新定位；原文标称 SI 间距 38 mm (-3/+0) 与另列验收最小间距 34 mm 作为不同条款保留，验收前取得项目采用优先级/差异处理文件。不默默调和取整 SI/英制值。分区分布按所声明准则执行。宽度/深度仪器量程 ≥12 mm、分辨率 ≤0.13 mm；间距量程 ≥80 mm、分辨率 ≤0.5 mm。采用英制时保留实际对应原文准则，不互换取整阈值。 | m2; mm; m; degree | 每次定位锯切抽查及采用的分区频率；每次最终验收 | 整个施工期及可归属布置/试验段/返工与库存交接 | 明确跑道、机器/刀头、作业窗口与供应/接收交接点 | per reference flow | 经校准测量和量规；每刀头五区各连续五槽、每日 ≥3 轮；采用 SI 时 P-621 深度/宽度分布 ≥90% 不小于 5 mm、≥60% 不小于 6 mm、≤10% 超过 8 mm；保留准确原文阈值约定、调整、边缘/灯具/接缝不刻槽区和签名。不得以仪器分辨率扩大容许公差。 |
| `cp_water` | `groove_finish` | 购入/抽取水、内部回用与水平衡 | 前景实测/日志记录 | water_source; provider; water_grade; meter_id; meter_start_m3; meter_end_m3; tank_open_m3; tank_close_m3; reused_m3; slurry_water_kg; host_moisture_kg; weather_water_kg; release_water_kg; density_kg_m3; density_temperature_C | 分别计量实际外购和环境取水；跟踪内部循环、罐存、湿/干浆液分析、有据既有路面含水/天气水及实际水释放/蒸发。外部进入量除以 A；需质量体积转换时仅采用实际密度/温度。 | m3; kg; kg/m3; degC | 每次补水/取水/作业窗口及施工期闭合 | 整个施工期及可归属布置/试验段/返工与库存交接 | 明确跑道、机器/刀头、作业窗口与供应/接收交接点 | per reference flow | 水表校准、罐量核对、水源/许可/供应商文件、配对湿/干样本与水平衡；调查差额，不假定排放。 |
| `cp_fuel` | `groove_finish` | 燃料领用、燃烧活动与出口 | 前景实测/日志记录 | fuel_grade; equipment_id; issue_gross_kg; container_tare_kg; opening_stock_kg; opening_stock_upstream_burden; closing_stock_upstream_burden; outward_return_kg; closing_stock_kg; waste_collected_kg; total_spill_kg; spill_collected_kg; spill_released_kg; density_kg_m3; temperature_C; operating_hours | 按实际牌号推导去皮总领用与实物平衡，将期初库存及尚未消耗上游负担仅转入一次，将保留期末库存及剩余负担结转下一保管/期间台账；不重复计入负担或遗漏历史库存负担。燃烧 kg = 期初 + 领用 - 期末 - 可用对外退回 - 收集废物 - 实际环境释放；收集泄漏只在废物中计一次，释放泄漏只在释放中计一次。总泄漏为审计拆分项，不再扣除。分别将输入/输出与燃烧活动除以 A。 | kg; kg/m3; degC; h | 每次领用、作业窗口、退回和事故 | 整个施工期及可归属布置/试验段/返工与库存交接 | 明确跑道、机器/刀头、作业窗口与供应/接收交接点 | per reference flow | 秤/交付密度证据；牌号与设备匹配；互斥保管出口和平衡不确定度；不得净输入后再重复退回。 |
| `cp_energy` | `groove_finish` | 外购电力 | 前景实测/日志记录 | provider; connection_id; meter_id; voltage_V; meter_start_kWh; meter_end_kWh; work_window; equipment_id; generator_boundary; overlap_dataset | 分表计量可归属外部用电，汇总前按实际时间/负荷依据分配共享负荷期间，然后除以 A；确认已通过燃料计入的发电机供电。 | kWh; V | 每个作业窗口及可归属布置/清理 | 整个施工期及可归属布置/试验段/返工与库存交接 | 明确跑道、机器/刀头、作业窗口与供应/接收交接点 | per reference flow | 电表校准、供应商边界、负荷归属与零重复发电机燃料计入负担；保留不确定度及实际供电限定信息。 |
| `cp_materials` | `groove_finish` | 不同供应工具、润滑剂、修复材料、包装与未使用退回 | 前景实测/日志记录 | product_id; formulation; supplier; lot_id; supplied_gross_kg; tare_kg; opening_stock_kg; opening_stock_upstream_burden; closing_stock_upstream_burden; outward_return_kg; closing_stock_kg; incorporated_or_used_kg; waste_kg; released_kg; blade_diameter_mm; blade_wear_mm; replacement_time; damage_zone_id; supplier_included_coverage | 每种具体身份记录去皮领用总量、期初实物及未消耗上游负担转入、真实对外退回、保留期末实物及未消耗上游负担结转。跨期台账归属仅一次，不重复计入负担或遗漏期初负担。实际使用的不同吸附剂/擦拭物/围控产品及其污染废物组成亦纳入。协调耗用、工具磨耗、废物/释放与修复留存。保留批准兼容锯片/修复说明，避免重复捆绑包装/润滑计入负担；各独立交换除以 A。 | kg; mm | 每次接收/领用/更换/退回、修复与闭合 | 整个施工期及可归属布置/试验段/返工与库存交接 | 明确跑道、机器/刀头、作业窗口与供应/接收交接点 | per reference flow | 批次/秤/皮重、供应商组成和保管凭据；锯片一致性与施工致损修复关联；保留库存负担结转，不作为对外输出。 |
| `cp_transport` | `groove_finish` | 实际运输分段与覆盖 | 前景实测/日志记录 | cargo_identity; mode; provider; leg_id; origin; destination; net_cargo_kg; distance_km; loaded_trip; empty_vehicle_distance_km; vehicle_service_record; supplier_included_coverage; fuel_overlap | 逐运输方式/服务商段将实际净货物 kg 乘实际 km，仅归属有据施工货物后除以 A；保留空车段实际车辆记录及明确模型/数据集边界，不虚构空车吨数。 | kg; km; kg*km | 每次配送/进退场/收集分段 | 整个施工期及可归属布置/试验段/返工与库存交接 | 明确跑道、机器/刀头、作业窗口与供应/接收交接点 | per reference flow | 运单、地图/里程表、装载记录；核实 kg*km 链和 t*km 因子 1000；供应商覆盖避免重复直接车辆燃料。 |
| `cp_assets` | `groove_finish` | 完整寿命资产服务与共享受益方 | 前景实测/日志记录 | asset_id; asset_type; manufacture_dataset; maintenance_dataset; replacement_dataset; eol_dataset; coverage_exclusions; consumer_job; consumer_node; reporting_period; observed_service; campaign_service; forecast_remaining_service; service_driver_unit; replacement_scenario; termination_scenario; eol_scenario; uncertainty; sensitivity; update_date | 列出实际使用的每项锯切/真空/罐车/清洁/发电/计量资产，以及实际进入/防护/围控/修复设备；有边界第三方资源只计一次，记录完整寿命覆盖及全部受益方/期间。逐资产计算施工服务/完整寿命服务，再除以 A；分子分母服务驱动指标一致。退役资产用完整实测历史，在役资产用实测历史加有据剩余服务及更换/终止/寿命终结情景。 | item; actual documented driver unit | 每项资产/作业窗口及生命周期情景更新 | 整个施工期及可归属布置/试验段/返工与库存交接 | 明确跑道、机器/刀头、作业窗口与供应/接收交接点 | per reference flow | 覆盖矩阵排除已直接计入的锯片、燃料、电力、润滑和运输。必须有分母来源、实测/预测标记、不确定度/敏感性和更新触发；证据缺失阻止定稿。 |
| `cp_residuals` | `groove_finish` | 浆液、废工具、包装、液体与修复碎料 | 前景实测/日志记录 | residual_identity; composition; receiver; waste_code; wet_gross_kg; tare_kg; dry_solids_kg; water_kg; opening_residual_stock_kg; closing_residual_stock_kg; removed_asphalt_dry_kg; blade_wear_kg; spill_collected_kg; damage_zone_id; transfer_time; treatment_coverage | 按具体身份和接收方称量外运残余物净量；配对干固体/水样区分湿浆液、脱水细料和分离水，避免重复组分。关联废锯片/磨耗与实际修复碎料，污染清理耗材按独立组成/接收方交换记录且吸收液体只计一次；保留残余物库存为闭合平衡。核对批准处置文件，并将必要处理只计一次。 | kg | 每次收集/交接/采样及闭合 | 整个施工期及可归属布置/试验段/返工与库存交接 | 明确跑道、机器/刀头、作业窗口与供应/接收交接点 | per reference flow | 经校准称量/皮重、代表性与干固体方法、接收确认和保管凭据、保留既有路面水分及细料/工具平衡；不假定密度或回收信用。 |
| `cp_emissions` | `groove_finish` | 发动机物种、逸散颗粒及实际环境释放 | 前景实测/日志记录 | equipment_id; fuel_grade; burned_fuel_kg; substance; particle_size_um; receiving_medium; compartment; measured_release_kg; factor_value; factor_unit; factor_source; factor_applicability; factor_uncertainty; total_spill_kg; collected_spill_kg; released_spill_kg; water_density_kg_m3; temperature_C | 逐实际物质/介质采用实测释放或燃烧燃料乘有据适用物种因子并确保单位匹配。记录方法、发动机/负荷/燃料与不确定度；空气颗粒需粒径/组成。事故总量拆分为收集与释放；实际水排放/蒸发需出口/计量，转换时需密度。实际物种质量除以 A。 | kg; um; declared factor unit; kg/m3; degC | 每个适用作业窗口/测试及每次事故 | 整个施工期及可归属布置/试验段/返工与库存交接 | 明确跑道、机器/刀头、作业窗口与供应/接收交接点 | per reference flow | 方法/因子来源和适用性；物种/区室明确；不得以差额作为排放、绑定泛称 NOx/VOC 身份或重复供应商电力/运输排放。 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `campaign_normalization` | 所有清单行 | 各独立可归属施工期交换量除以正值验收多边形并集 A，得到每 1 m2 数量。参考服务严格为 1 m2。重复锯切不扩大 A；失败/放弃区域与试验段负担按披露的因果关系保留归属。 | cp_acceptance; 相关行协议; 独立施工期交换量; A | 各独立交换的参考归一化数量 |  |
| `burned_fuel_balance` | `fuel_supply`, `combustion_emissions`, `spent_fluids`, `unused_returns`, `liquid_release` | 逐实际牌号，燃烧燃料 = 期初库存 + 去皮领用总量 - 期末库存 - 可用对外退回 - 收集废物 - 实际释放。总泄漏量拆分为收集与释放部分，不再作为扣除项。 | cp_fuel; cp_materials; cp_residuals; cp_emissions | 用于适用因子的燃烧燃料 kg；分开的总输入与各出口每参考流数量 |  |
| `asset_share` | `capital_service` | 资产等价份额 = 施工期服务量除以完整寿命服务量；参考数量 = 份额除以 A。各作业/期间采用相同物理驱动指标和完整寿命；在役资产采用实测加有据预测；完整覆盖且排除直接行。 | cp_assets; cp_acceptance | 每项具体资产等价 item 每参考流数量 |  |
| `cargo_leg_service` | `freight_service` | 各实际服务商/运输方式下，净货物 kg 乘分段 km 求和后除以 A；仅用因子 1000转换 t*km。空车段服务遵循实际有据车辆数据集边界。 | cp_transport; cp_acceptance | 各实际运输身份每参考流 kg*km |  |
| `combustion_species` | `combustion_emissions` | 各实际发动机/燃料/物种，物种 kg = 燃烧燃料 kg 乘适用因子 kg 物种/kg 燃料，或实际实测物种 kg；除以 A。其他因子单位使用前需有据相容活动量转换，不得假设热值。 | cp_fuel; cp_emissions; cp_acceptance | 各明确物种/空气区室每参考流 kg |  |
| `wet_residual_closure` | `captured_slurry`, `spent_blades`, `liquid_release`, `fugitive_particles` | 同一外运批次净湿浆液 = 实测水 + 干固体。将移除既有路面干物质和锯片磨耗与回收固体、实际逸散颗粒及残余物库存协调；另以外部供水、既有路面含水、天气、浆液、库存及实际释放/蒸发核对水平衡。未知差额保持调查。 | cp_water; cp_materials; cp_residuals; cp_emissions | 独立质量/水闭合与不确定度提示；不虚构排放 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `dq_actual_route` | `groove_finish` | 完整占用和实际设备/刀头/日期/遍数链路、经确认沥青及采用几何；不得由 CPC 或支付单价推断数量。 | cp_acceptance; 批准方法; 来料状态与交还记录 |
| `dq_complete_campaign` | 所有清单行 | 涵盖布置/试验段、有效切割、连续回收/清理、待机窗口、换线、更换、施工致损修复和最终处置，不设置无证据零值。 | 全部关联协议；库存与期间协调 |
| `dq_uncertainty` | 所有清单行 | 保留水表/电表/秤/测量/采样误差、时间波动、归属与情景不确定度；最终限值前取得相容经验范围。严格 1 m2 是参考定义，不是实测产率。 | 校准证书、配对样本、实际作业数据、情景敏感性 |
| `dq_asset_evidence` | `capital_service` | 记录全部服务期间/受益方、完整寿命来源和有据预测组成；不采用通用寿命、不重复直接工具覆盖，也不要求观察尚未发生的未来退役。 | cp_assets 覆盖矩阵与分母/情景证据 |
| `dq_final_binding` | 所有清单行 | 最终 TIDAS 交换前核实各具体身份/支持链；披露未解决卡身份/数量证据，并禁止绑定概念性集合卡。 | 已验证身份依据与可逐行定位 manifest 元数据 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `check_scope_start` | `groove_finish` | 核查保留既有沥青范围、来料完好、既有修复明确责任方、实际项目采用规范、获批方法/导线/试验段、占用日期和实际天气适宜性。不得将新路面 30 天养护条款作为已确认稳定既有沥青的通用等待规则。 | `faa-p621-2018` |
| `check_geometry_zone` | `accepted_grooving` | 核查项目对原文标称间距 38 mm (-3/+0) 与另列验收最小 34 mm 的有据处理/条款优先级，保留原文，不创造通用修正或默默等同 SI/英制。核查项目采用的 P-621 几何/线形、边缘/灯具/接缝不刻槽区及签署采样结果。P-621 每机器/刀头/日期在横向五区各测中间锯片附近连续五槽，每日至少三轮。记录采用单位制的仪器量程/分辨率及实际验收/调整阈值；表面变化可能需要更多检测。 | `faa-p621-2018` |
| `check_unique_area` | `accepted_grooving` | 要求正值验收多边形并集 A、不刻槽区及验收/不合格/未完工协调；不得采用刀片长度、槽空隙截面积、重复遍数之和或试验段共产品。参考/输出属性为 Area、数量为 1 m2，支持链独立核实；服务 UUID 未解决则阻止最终交换绑定。 |  |
| `check_custody_balance` | 所有清单行 | 核查跨期的期初实物/上游负担转入和期末保留库存结转各一次，再逐具体身份将去皮领用总量加期初库存与可用对外退回、期末库存、转化/消耗、收集废物及有证据释放协调。燃烧燃料由互斥出口推导。浆液湿质量、干固体、水及锯片磨耗与实际移除沥青、含水率/天气项闭合；未知差额须调查，不自动作为排放。 |  |
| `check_asset_and_runs` | `capital_service` | 要求制造/使用/维护/更换/寿命终结索引、全部受益作业/期间、有据完整寿命分母和实测/预测标记、情景敏感性与更新。确认共享作业、锯片、燃料、电力或资本负担不重复。情景或归属证据缺失阻止完成。 |  |
| `check_reject_and_cleanup` | `groove_finish` | 每个不合格/损坏区须关联重复作业或有据退出、全部可归属修复与最终交还、连续清理及批准残余物接收方，不假定下水道处置。不合格/未完工表面不得作为验收输出。 | `faa-p621-2018` |
| `check_identity_range` | 所有清单行 | 最终 UUID 绑定前，核查实际交换身份、状态、交接点、方向、供应商/接收方、物种和介质及属性/单位。须有适用本行的采集协议/计算及有依据范围或明确证据需求；技术槽规范不得推导通用资源/缺陷/寿命/排放因子。未知数量保持披露并阻止定稿。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 既有沥青跑道刻槽验收面积的增量施工改造前景服务包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 保留沥青、湿式横向矩形锯切路线、采用几何、施工期与验收交接点一致的跑道改造服务；下游 process/lifecyclemodel 投影 |
| excluded_use | 新路面资产制造、其他基底/成槽技术、完整机场运行、摩擦系数或使用寿命保证、避免更换信用 |
| required_metadata | 场址/跑道坐标；保留既有路面确认与既有修复责任方；实际合同/单位制；施工期/作业/刀头/天气；面积与不刻槽区；实测槽几何和验收；产品/供应商/接收方交接；供应/库存/废物平衡；设备与完整寿命情景 |
| required_quality_disclosure | 未解决身份、范围证据缺失、水表/秤/测量不确定度、实际波动、采集覆盖、归属假设、实测与预测资产寿命、排放因子及物种、残余物去向、排除/未完工区域 |
| update_trigger | 几何/基底、路线、供应商/接收方、能源、设备/锯片、缺陷路线、资产情景、合同、验收或材料证据变化；最终交换发布前解决流身份 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | `official_guidance` | 联合国 CPC 第 3.0 版解释性说明，2025 年 6 月 30 日，印刷页284；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 跑道施工、修复与改造分类范围 |
| `faa-p621-2018` | `official_guidance` | FAA AC 150/5370-10H，2018 年 12 月 21 日，勘误更新于 2020 年 8 月 19 日，第 P-621 项印刷页537–540；https://www.faa.gov/documentLibrary/media/Advisory_Circular/150-5370-10H.pdf | 采用的矩形几何、既有路面确认、湿式锯切设备、连续收集/清理、试验段、致损修复、分区检测与验收面积 |
