---
pcr_id: pcr.existing-ballasted-plain-track-lifting-lining-and-tamping-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有有砟普通轨道起拨道与捣固维修服务

## 1. 范围与适用性

本PCR适用于符合条件的既有有砟普通铁路轨道的一次有明确边界的几何整正维修作业。保留的钢轨和轨枕按批准的目标几何位置起拨道，同时以振动捣镐填实并压实枕下道砟。纳入作业前测量、封锁与防护、实际必要的道砟整形或补砟、规定的稳定措施、重复作业、缺陷修复、作业后测量及经授权的维修交还。[plasser-tamping-precision; plasser-tamping-control]

排除新建路基或铺轨、钢轨／轨枕／扣件更新、道岔与交叉、无砟轨道、全面道砟挖底清筛或更换、合格既有承载对象边界之外的结构缺陷修复、接触网／信号安装以及列车运输。影响作业的既有缺陷须明确另行修复的实际责任方，并证明起始状态合格。本作业造成的损伤仍归本作业承担。几何测量合格不等于无限速运行或整线运营批准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-ballasted-plain-track-lifting-lining-and-tamping-services |
| classification_refs | CPC 3.0 54212；General construction services of railways中的较窄维修子集 |
| covered_products | 对保留有砟普通轨道进行并验收的起拨道与捣固整正服务 |
| excluded_products | 新建铁路资产；钢轨／轨枕更新；道岔或无砟轨道处理；全面换砟；列车运输 |
| representative_product | 在声明的维修交还界面验收的每米已处理轨道中心线 |
| production_route | 既有轨道资格确认；批准几何目标与封锁；起拨道／捣镐插入／夹持／压实循环；实际整形及稳定措施完成；检查交还 |
| market_state | 轨道业主验收的维修服务，记录实际保留限制 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 既有有砟普通轨道已验收的几何整正维修 |
| How much | 1 m已验收处理轨道中心线 |
| How well | 达到批准的目标几何、道砟支承／断面和规定的稳定及缺陷闭环要求；经业主授权维修交还并记录实际限制 |
| How long or cycle | 一次声明的作业，包括全部封锁窗口和验收交还之前的重复作业；不承诺未来维修寿命；另行声明共享资产完整寿命与报告期间 |
| reference_flow_link | `accepted_track_geometry_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 既有有砟普通轨道已验收起拨道与捣固服务 |
| 参考流属性 | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` |
| 参考单位组 | 长度单位组 `838aaa22-0117-11db-92e3-0800200c9a66` |
| 参考单位 | m |
| 必需限定信息 | 轨道ID与验收里程区间；轨距；保留钢轨／轨枕／道砟状态；批准目标几何及容许偏差／来源；机械／捣固技术；封锁窗口；实际稳定方法；作业后检验覆盖；交还授权方／日期；保留限制与闭环责任 |

前景数据包须声明全部必需限定信息。L为每条已识别轨道的已验收里程区间并集实测长度，单位m。重叠作业、失败作业和重复检验不增加L；平行轨道分别使用ID。L为零或未明确时不得完成数据集。全部作业负荷除以L，包括归属于该验收作业的失败工作。米表示处理服务长度，而非新铺钢轨。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `accepted_length` | 参考产品 | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` | m | 通过cp_acceptance测量已验收中心线里程区间；核对经校准测量的单位、轨道ID和交还签字。一个参考输出为1 m。 |
| `gross_net_tare` | 物料输入与保管权输出 | 质量 | kg | 从毛重称量中扣除车辆／容器皮重；接收数量是向外退回扣减前的实际供应物料总量。保留含水基准及实际批次身份。 |
| `energy_units` | fuel_gross; electricity | 质量；能量 | kg; kWh | 记录实际燃料品种及去皮物料质量，不使用发动机铭牌功率推算。电力采用计量输入kWh；转换须有可追溯的实际单位系数和流属性链。 |
| `geometry_units` | cp_acceptance | 长度；时间 | mm; m; s | 按实际单位记录轨距／水平／方向／起道量、空间基长、degC温度和s作业时长，注明仪器及采用的容许偏差来源；不设通用参数。 |
| `transport_units` | mobilisation_transport | 质量乘距离 | kg*km | 每个运输段采用实际货物kg及重载km；t*km换算须用已核实的列示系数1000。空返纳入服务商边界或明确车辆活动，不虚构货物。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 符合条件的既有保留普通轨道，钢轨、轨枕与道砟状态已知；实际封锁／防护及批准几何目标已具备 |
| starting_condition_role | 既有承载资产与保留存量，不是采购的新轨道或道砟输入 |
| product_classification_scope | 仅CPC 3.0 54212中的既有普通轨道几何整正维修 |
| recursive_input_rule | 外部同类别分包作为有独立边界的采购输入，明确责任方、处理区间及上游范围；排除重复直接资源；最终服务不自递归 |
| upstream_dataset_requirement | 在声明界面使用已核实的实际物料／能源／运输／服务商数据集；披露已含包装、直接运行、维护、工具与资本 |
| disclosure | 作业／窗口／期间ID；既有承载对象基线；供应及退回批次；失败／返工；稳定和防护责任；完整资产寿命和跨期库存；缺失证据 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `retained_host` | track_geometry_correction | 保留轨道／道砟不是新物料输入，亦不产生避免更换信用。纳入增量搬运和实际补砟；必须具备合格作业前状态与验收后状态。 | plasser-tamping-precision; plasser-tamping-control |
| `cycle_owner` | track_geometry_correction | 一个物理成形责任节点拥有相互依赖的起拨道、捣镐插入／夹持及枕下压实循环，不存在独立验收的已起道中间产品。纳入该责任范围内的实际整形、失败循环、清理、作业防护、几何测量及规定稳定措施。 | plasser-tamping-control |
| `handback_owner` | track_geometry_correction | 实际采用的轨道业主准则决定几何、稳定、温度、缺陷、封锁及限速要求。必要追加稳定措施须有实际操作者／资源责任方或明确边界的服务商，不能以未来第三方任务而消失。制造商描述不构成运营授权。 | plasser-tamping-precision |
| `stock_custody` | 物料流 | 按物料核对期初库存加去皮供应总量与嵌入／使用、真实向外退回、废物、有证据排放及期末保留库存。期末库存不是向外交换，其负荷结转。不得先扣减退回再将其作为输出重复记录。 |  |
| `coverage_owner` | 所有清单行 | 每个物理事件仅归属该节点和一个作业／窗口／期间。外购已含服务排除重复直接资源。披露调遣、防护、捣镐／备件、液压补液／排液、清理及完整寿命资产范围；实际不存在须有记录。 |  |
| `period_assets` | shared_asset_service | 列明车队、捣镐／工具、测量和防护设备，以及所有使用作业／节点／期间和制造、维护／更换、寿命终结阶段。将直接记录的燃料与备件同服务商／资产覆盖范围分开。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际机械与辅助燃料供应 (`fuel_gross`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `inputs` / `product`.

对归本节点负责的捣固、整形、直接稳定、防护、清理及场内移动，分别记录每种实际柴油或其他燃料。总输入在真实退回燃料、回收燃料废物或释放扣减之前。排除运输／服务商已含燃料。

数量范围证据需求：需实际燃料品种、计量去皮接收、期初／期末油箱、退回及按运行模式记录的活动；不采用铭牌功率或宣传生产率因子。

- 采集对象：实际机械与辅助燃料供应
- 流属性/单位：质量 / kg
- 数量规则：跨作业边界供应的燃料总质量kg除以L；实际向外退回的未耗燃料另列。另以总期初和期末油箱量计算燃烧活动。通过库存负荷桥接，对本作业使用的期初物料负荷及期末结转负荷各记录一次，不新增第二次期初领用交换或再次扣除期末库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

#### 采集要求：实际捣镐及磨耗部件供应 (`tine_components`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `inputs` / `product`.

分别识别实际捣镐、磨耗镶件或其他部件及其材料、匹配机械、更换事件和供应范围。不假定每次消耗完整机械或全部捣镐。排除完整寿命服务已含部件。

数量范围证据需求：需实际更换／磨耗历史、部件类型及可归属服务寿命；状态相关捣固不规定通用磨耗量。

- 采集对象：实际捣镐及磨耗部件供应
- 流属性/单位：质量 / kg
- 数量规则：按准确兼容部件记录去皮供应总质量并除以L；有证据的共享磨耗另行归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`plasser-tamping-control`

#### 采集要求：其他实际作业更换部件 (`other_spares`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `inputs` / `product`.

对作业记录识别出的实际软管、密封件或其他不同备件设置条件需求；每种实际部件展开为独立身份和数量，绝不合计不同材料。不重复液压液、润滑脂、捣镐或资产／服务商维护。

数量范围证据需求：需实际故障／更换事件、部件组成及范围证据；维护事件日志须证明实际不存在。

- 采集对象：其他实际作业更换部件
- 流属性/单位：质量 / kg
- 数量规则：每种实际不同部件去皮供应总量除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际调遣与物料运输服务 (`mobilisation_transport`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `inputs` / `product`.

记录不同公路／铁路方式、货物、起讫地、道砟／备件交付、机械调遣、废物／退回段以及已含上游运输。空返在服务商边界或明确车辆活动中承担，不虚构货物吨数。维修机械轨行不成为最终列车运输产品。

数量范围证据需求：需实际货物／机械质量、路线、重载段及服务商空返／燃料／资本范围；kg*km本身不能证明完整调遣负荷。

- 采集对象：实际调遣与物料运输服务
- 流属性/单位：质量乘距离 / kg*km
- 数量规则：对各实际运输段的cargo_kg乘loaded_distance_km，按有证据的作业份额求和，再除以L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport`

#### 采集要求：实际有边界的封锁与防护服务 (`protection_service`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `inputs` / `product`.

实际作业防护／封锁资源外供时的条件性服务交换。声明服务包定义、期间、人员／设备及已含能源／资本。直接提供时改用实际燃料、电力、耗材及资产记录；批准文件本身不是外购物理服务。

数量范围证据需求：需实际合同单位、服务包、范围与作业窗口；不默认一个服务包或单位等价。

- 采集对象：实际有边界的封锁与防护服务
- 流属性/单位：数量 / item
- 数量规则：实测实际采购服务数量，声明服务商单位与范围，并除以L；仅真正定义的服务包才使用item。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`

#### 采集要求：实际有边界的必要稳定完成服务 (`stability_service`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `inputs` / `product`.

仅当实际轨道业主方法要求外部动态稳定或其他明确批准稳定措施时纳入。声明技术、轨道区间、通过次数及已含资源边界。直接运行在能源／物料／资产中记录。不推定通用稳定机或无限速交还。

数量范围证据需求：需实际批准稳定方法／合同单位、操作者及资源范围；制造商能力不提供服务包数量。

- 采集对象：实际有边界的必要稳定完成服务
- 流属性/单位：数量 / item
- 数量规则：以已核实服务商单位记录实际采购稳定服务数量并除以L；item仅用于定义的服务包。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：`plasser-tamping-precision`

#### 采集要求：归属的完整寿命设备服务 (`shared_asset_service`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `inputs` / `product`.

识别每台机械、实际使用的整形机／稳定机、未直接计负荷的捣镐／工具、测量／防护设备及支持资产。物品等价份额表示该特定资产声明的完整寿命，不是每次作业消耗整机。有证据覆盖相同寿命阶段时可采用有边界的已核实服务商服务。排除另行记录的燃料、备件和维护。

数量范围证据需求：需每件资产制造／维护／更换／寿命终结范围、观察及预测完整寿命活动、全部使用作业／期间、来源和敏感性；有证据的分母缺失时不得完成。

- 采集对象：归属的完整寿命设备服务
- 流属性/单位：数量 / item
- 数量规则：逐资产计算complete_life_service_fraction = campaign_activity / complete_life_activity；所得物品等价份额除以L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

#### 采集要求：单独供应的实际包装 (`packaging_supply`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `inputs` / `product`.

上游物料服务未含包装时，将实际单独供应的袋、容器或其他包装记录为不同交换。可重复使用容器皮重不是道砟／流体质量；另行拥有时记录实际可重复容器服务，不一次消耗完整容器。

数量范围证据需求：需实际包装材料、所有权、供应商已含负荷及重复使用／退回证据；不再次增加已含于物料的包装生产。

- 采集对象：单独供应的实际包装
- 流属性/单位：质量 / kg
- 数量规则：每种实际包装材料的去皮供应总量除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际直接水资源取用 (`water_withdrawal`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `inputs` / `elementary`.

只有直接资源取用跨越基本流边界。说明地表水或地下水位置和许可；不重复采购水。

数量范围证据需求：需实际取水源／介质、仪表及转换证据；不假定直接取水。

- 采集对象：实际直接水资源取用
- 流属性/单位：质量 / kg
- 数量规则：按每个实际资源／介质记录直接取水实测质量并除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际向外退回的未用道砟 (`ballast_return`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `product`.

仅离开作业保管权、未使用且可用的供应道砟作为产品退回。与移位既有道砟、废物和期末库存区分。接收总输入未按该退回净减；明确随退回批次交接的负荷。

数量范围证据需求：需签认退回重量、含水基准、批次及接收方；不得从仍在现场未用库存推定退回。

- 采集对象：实际向外退回的未用道砟
- 流属性/单位：质量 / kg
- 数量规则：按原始批次实测向外退回去皮道砟质量并除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际向外退回的未耗燃料 (`fuel_return`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `product`.

该退回与燃烧燃料、保留期末油箱库存、回收废物及物种排放互斥。保留实际燃料身份、保管权和随附负荷；燃料总输入不得先净减再重复计数。

数量范围证据需求：需实际退回燃料测量及原始油箱／批次账；不假定退回比例。

- 采集对象：实际向外退回的未耗燃料
- 流属性/单位：质量 / kg
- 数量规则：实测离开作业保管权的未耗燃料质量并除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

#### 采集要求：实际向外退回的未用供应物料 (`other_product_returns`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `product`.

分别展开实际未用液压液、润滑脂、备件及包装退回。不同材料绝不合计。期末库存和整机撤场不是耗材退回。避免与道砟／燃料退回卡重叠。

数量范围证据需求：需物料特定退回文件、批次身份、状态、接收方及负荷结转；未知余量不意味着向外产品。

- 采集对象：实际向外退回的未用供应物料
- 流属性/单位：质量 / kg
- 数量规则：每种准确物料／部件实测向外退回去皮质量除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际移出道砟与轨旁固体废物 (`ballast_solid_waste`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `waste`.

离开保管权的实际不可用余砟、细料或杂物，与重新分布的保留道砟及可用退回分开。按接收和处理区分性质不同或危险废物；排除全面换砟。未知平衡残差不是扬尘。

数量范围证据需求：需实际移出质量、保留／供应来源、含水量、污染、接收方与处理；不设通用损失因子。

- 采集对象：实际移出道砟与轨旁固体废物
- 流属性/单位：质量 / kg
- 数量规则：按实际组成／含水量及处置批次实测去皮废物质量并除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际包装废物 (`packaging_waste`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `waste`.

将实际塑料、金属或纤维包装分别展开。退回可重复容器是保管权退回，保留容器是期末库存，均不被假定为废物。

数量范围证据需求：需实际包装组成、重量与路径；供应商已含上游包装不再产生第二次供应负荷。

- 采集对象：实际包装废物
- 流属性/单位：质量 / kg
- 数量规则：按材料与路径实测废弃包装去皮质量并除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际回收泄漏及清理废物 (`recovered_spill_waste`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `waste`.

事故划分须区分回收流体／废物、实际基本流物种释放及保留残留。实际单独供应的吸附材料在spill_absorbent按准确材料身份记录。分量出口扣除后不再次扣除事故总量。

数量范围证据需求：需事故质量划分、清理输入、回收组分及接收方证据；不设假想常规泄漏率。

- 采集对象：实际回收泄漏及清理废物
- 流属性/单位：质量 / kg
- 数量规则：将实测回收流体、吸附材料及污染固体作为分别识别的废物组分记录并除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_incidents`

#### 采集要求：实际燃烧排向空气的物种 (`exhaust_species`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `elementary`.

采用发动机／燃料／负荷特定证据，分别展开CO2、CH4、N2O及其他实际报告污染物。区分化石／生物碳和NOx报告基准；仅实际物种身份、粒径分量和空气环境区室可绑定。不设总尾气质量交换。

数量范围证据需求：需实际燃烧活动、发动机／燃料／模式因子来源、氧化／碳基准、不确定性及物种／介质；制造商功率不是活动量。

- 采集对象：实际燃烧排向空气的物种
- 流属性/单位：质量 / kg
- 数量规则：对每个已核实物种，以burned_fuel_kg乘适用species_factor_kg_per_kg，或采用实测release_kg；再除以L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`

#### 采集要求：实际搬运扬尘物种及排向空气粒径分量 (`dust_species`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `elementary`.

将实际道砟粉尘物种／粒径分量和接收空气介质与捕集细料废物分开。不将全部搬运道砟或质量平衡残差等同空气颗粒。按实际抑尘／捕集效率计量，出口不重复。

数量范围证据需求：需实测物种／粒径分量，或与道砟、含水量、搬运和控制匹配的有记录来源；不设通用粉尘损失。

- 采集对象：实际搬运扬尘物种及排向空气粒径分量
- 流属性/单位：质量 / kg
- 数量规则：实测空气物种／粒径分量释放，或实际有依据的handling_activity乘匹配因子；除以L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`

#### 采集要求：实际未包容流体物种向接收介质释放 (`oil_release_species`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `elementary`.

按证据分别展开土壤、淡水或空气中的实际液压／燃料／润滑脂组分。油混合物身份不能证明单一基本流物种。回收流体为废物；事故总量只划分一次，不假定全部未回收质量进入水体。

数量范围证据需求：需事故流体组成、回收划分、实际接收介质及物种因子；未知去向仍是数据缺口。

- 采集对象：实际未包容流体物种向接收介质释放
- 流属性/单位：质量 / kg
- 数量规则：按实际介质记录实测或由证据推导的未包容物种质量并除以L。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_incidents`

#### 采集要求：实际向接收介质释放的水 (`water_release`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `elementary`.

仅按介质和实际污染物种记录实际直接排放或蒸发水。平衡采购／取用水、既有承载对象水分、天气、结转及废水保管权；残差不确定性不自动成为排放。

数量范围证据需求：需实际水平衡、出口监测、介质及任何温度／密度／天气证据；不是标准捣固交换。

- 采集对象：实际向接收介质释放的水
- 流属性/单位：质量 / kg
- 数量规则：实际测量跨至已识别环境的水质量并除以L；收集污水是废物流。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`

#### 采集要求：实际排出的服务流体废物 (`removed_fluid_waste`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `waste`.

每个物理上独立的实际废物流、组成/状态及接收方须建立独立原子交换。本采集要求不是合并废物流；真实未分离的物理混合物可使用有证据的混合物身份，已分离去向不得重新合并。

分别记录液压废液、润滑剂及实际污染洗涤水。保留水／固体组成及接收处理。不重复回收泄漏废物、保留油或服务商已含维护处置。

数量范围证据需求：需实际排液／维护记录、流体身份、污染及处理保管权；不假定每次作业年度换液。

- 采集对象：实际排出的服务流体废物
- 流属性/单位：质量 / kg
- 数量规则：按准确流体／污染流实测排出废液质量并除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

#### 采集要求：实际移出的磨损部件废物 (`wear_parts_waste`)

过程／待建立交换的方向／类型：`track_geometry_correction` / `outputs` / `waste`.

每个物理上独立的实际废物流、组成/状态及接收方须建立独立原子交换。本采集要求不是合并废物流；真实未分离的物理混合物可使用有证据的混合物身份，已分离去向不得重新合并。

将实际磨损捣镐、镶件、软管或密封件与更换及接收方对应。保留部件／组成区分；供应给其他方的可用再用件按真实产品保管权记录。不增加资产寿命服务已含整机报废。

数量范围证据需求：需更换事件链接、材料特定移出质量及实际再用／回收／处置证据。

- 采集对象：实际移出的磨损部件废物
- 流属性/单位：质量 / kg
- 数量规则：按不同部件／材料实测移出部件去皮废物质量并除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| track_geometry_correction | 既有普通轨道几何整正与维修交还 | required | 符合条件的保留有砟普通轨道及批准作业；仅实际规定／使用时纳入稳定和补砟 | 含作业前测量、相互依赖循环、实际断面／稳定闭环与交还的成形责任 | 1 m验收处理中心线 |

生产模式为按封锁窗口索引的作业运行，包括逐枕循环、实际空转／准备／转换与重复作业。成形前状态为具有实测几何缺陷及已声明道砟状态的保留轨道。成形后状态为在声明的有限制或无限制维修界面经业主验收的整正轨道。不合格几何／支承／稳定状态在本节点返工并复检；未闭环失败区间不得成为最终输出。移出的余料及废物按真实保管权路径离开。既有保留道砟重新分布是内部存量移动，不是采购或联产品。实际外部稳定服务商只记录一次；直接运行的稳定设备进入本节点资源及资产记录。

### 过程：既有普通轨道几何整正与维修交还（`track_geometry_correction`）

#### 输入

##### 产品流

###### 供应天然铁路补砟（`ballast_topup`）

只有新供应天然铁路道砟跨越采购边界。搬运或重新分布的既有道砟保持为内部存量。保留岩石类型、级配、供应商界面、含水基准和实际验收轨道目的地。

数量范围证据需求：需实际道砟等级／状态、起道形成的补砟缺口及按验收L归集的实测接收记录；制造商循环描述不提供kg/m区间。

- 选定流：供应天然铁路补砟
- 流属性/单位：质量 / kg
- 数量规则：按每种实际道砟规格记录作业去皮接收总质量，再除以L；不扣减退回。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`plasser-tamping-precision`

###### 输入运行电力（`electricity`）

电动／混合设备、测量仪器或防护装置实际耗电时，识别电源、仪表及声明边界的充电损耗。区分服务商已含电力；不假定电气化。

数量范围证据需求：需实际设备供电、分时计量和充电边界；能量支持身份须针对实际交换核实。

- 选定流：输入运行电力
- 流属性/单位：能量 / kWh
- 数量规则：实际可归属作业的电表输入kWh除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 供应液压补充液（`hydraulic_makeup`）

记录归本作业承担的实际补液或维护用液，包括造成的泄漏／修复。分别对应排出流体、回收泄漏、物种排放及保留库存。服务商已含完整寿命维护不再作为直接输入。

数量范围证据需求：需实际流体规格及领用／退回／泄漏记录；补充液不自动等于全系统换液。

- 选定流：供应液压补充液
- 流属性/单位：质量 / kg
- 数量规则：按准确配方记录作业液压流体去皮接收／领用总量并除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

###### 供应润滑脂（`grease`）

润滑脂与液压油和发动机燃料分开。仅纳入记录的本作业增量份额，并记录期初／期末库存及实际退回／废弃去向。

数量范围证据需求：需实际润滑脂身份、称量领用及维护归属；不设通用润滑比例。

- 选定流：供应润滑脂
- 流属性/单位：质量 / kg
- 数量规则：按实际润滑脂规格记录去皮领用总量并除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

###### 采购清理或抑尘水（`supplied_water`）

仅纳入归本节点承担、实际供应给清理或抑尘的水。区分既有承载对象水分与天气；采购服务已含水仍由服务商拥有。

数量范围证据需求：需实际水源、用途、经校准仪表及任何密度转换依据；不根据干式捣固路线推定用水。

- 选定流：采购清理或抑尘水
- 流属性/单位：质量 / kg
- 数量规则：实测采购水质量除以L；体积换算须有实际密度／温度证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

###### 实际泄漏清理吸附材料供应（`spill_absorbent`）

仅记录为本作业事故实际供应的清理吸附材料；吸附材料自身与回收流体及污染既有固体分开。保留材料身份、来源及最终废物保管权。不重复服务商已含清理物料。

数量范围证据需求：需实际事故、吸附材料及实测领用／库存／退回；不假定常规泄漏或清理消耗。

- 选定流：实际泄漏清理吸附材料供应
- 流属性/单位：质量 / kg
- 数量规则：每种实际材料的去皮吸附材料供应总质量除以L。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 既有有砟普通轨道已验收起拨道与捣固服务（`accepted_track_geometry_service`）

唯一最终参考输出是业主授权维修交还时实际验收的整正轨道中心线。L汇总不同已验收区间；重复和失败区间不增加最终输出。保留轨道／几何／支承／稳定／交还限定信息。

数量范围证据需求：准确1 m是参考定义，不是统计过程范围。需实际验收L、测量精度、采用的几何／稳定容许偏差及每一区间的授权；不设通用性能范围。

- 选定流：既有有砟普通轨道已验收起拨道与捣固服务
- 流属性/单位：长度 / m
- 数量规则：1 m
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`plasser-tamping-precision`; `plasser-tamping-control`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `campaign_share` | 所有清单行 | 将可直接归属的数量分配给本作业，再以实测验收L除作业总量。跨作业共享调遣／空转／防护，须按有证据的因果活动在全部接收作业／窗口间分配，份额之和为1。记录驱动量与敏感性，不假定长度解释全部共享事件。 |  |
| `rework_retention` | track_geometry_correction | 失败检验、重复捣固、追加稳定、修复及清理负荷保留在产生这些事件的作业。未验收区间没有验收输出；披露其负荷去向，不得静默排除。每次通过不构成独立输出。 |  |
| `asset_life_share` | shared_asset_service | 对每件资产，根据观察历史及在役资产有依据的预期剩余服务／更换／终止／寿命终结情景，计算完整寿命可归属服务份额。列明全部使用作业／节点／期间；采用有证据且可比较的活动单位、份额之和为1、标记预测、检验敏感性并更新。完整寿命覆盖或分母证据缺失时不得完成。 |  |
| `period_stock` | 物料流；shared_asset_service | 将接收／使用／退回／更换／寿命终结事件归入明确期间，避免跨期库存或资产覆盖重复计负荷。燃料与其他物料以库存负荷桥接关联边界实物总交换与负荷归属：记录实际使用的继承期初库存负荷、结转的期末库存负荷，各与来源期间链接并仅记一次。库存余额均不是虚构向外产品流。实际退回价值或废物回收不自动形成避免产品信用；披露实际选用的负荷交接。 |  |
| `provider_partition` | stability_service; protection_service; mobilisation_transport; shared_asset_service | 每项服务及其已含直接燃料、排放、工具、维护和资本仅保留一个责任方。在有记录的界面划分合同范围与直接清单。退回物料、回收废物与维修服务不被假设为共同销售的联产品。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | track_geometry_correction | 验收长度及前后几何／稳定／交还 | 测量与验收记录 | campaign_id; window_id; period_id; track_id; chainage_start_m; chainage_end_m; accepted_flag; gauge_mm; level_mm; alignment_mm; geometry_base_m; target_geometry; actual_lift_mm; tamping_depth_mm; squeezing_duration_s; vibration_frequency_Hz; hydraulic_pressure_Pa; actual_pass_count; machine_setting_source; ballast_condition; support_profile; stability_method; actual_temperature_degC; geometry_tolerance_mm; temperature_limits_degC; tolerance_source; instrument_id; calibration; pretest_id; posttest_id; defect_id; repeat_pass_id; handback_authority; handback_time_utc; restrictions; closure_owner | 采用经校准的实际系统及已采用空间基长／容许偏差测量前后几何；保留实际捣固深度、夹持时长、振动频率、液压压力与通过次数，以及机械说明／批准参数来源和单位，不设通用数值。保留批准工作／封锁及目标来源。标绘不同验收区间、消除重叠，记录实际稳定证据／缺陷闭环及已签认有限制或无限制交还。L为按轨道识别的验收中心线区间并集米数，不是通过距离。 | m; mm; degC; s; Hz; Pa | 每一处理区间、失败检验、重复作业及交还 | 全部作业窗口、准备／重复／清理及链接的来源期间 | 已识别轨道区间及可归属服务商／资产范围 | per reference flow | 可追溯校准测量、目标／容许偏差采用依据及签认授权；L为零或未明确时阻止完成数据集 |
| cp_materials | track_geometry_correction | 物料供应／库存／退回／废物及水 | 称量、领用与保管权台账 | campaign_id; window_id; period_id; event_id; transfer_id; lot_id; material_identity; part_id; supplier_gate; owner; opening_stock_kg; scale_gross_kg; vehicle_container_tare_kg; gross_receipt_kg; issue_kg; incorporation_or_use_kg; return_kg; waste_kg; released_species_kg; closing_stock_kg; moisture_basis; dry_solids_kg; water_kg; measured_volume_m3; density_kg_per_m3; temperature_degC; weather_water_kg; source_medium; destination; treatment_route; included_upstream_scope | 毛重减车辆／容器皮重，不净减退回。保留准确批次、含水量及库存负荷历史。将向外保管权与移交ID及接收方配对。分别展开每种不同物料／部件／废物，单独追踪既有道砟，校准水表并记录任何实际密度转换。逐物料核对期初加接收与使用／嵌入、退回、废物、有证据释放及期末库存；标记残差。 | kg; m3; kg/m3; degC | 每次接收／领用／退回／更换／废弃及期间期末库存 | 全部作业窗口、准备／重复／清理及链接的来源期间 | 已识别轨道区间及可归属服务商／资产范围 | per reference flow | 秤／表证书、供应文件及签认保管权；保留库存不是输出；不得将未解释残差作为排放 |
| cp_energy | track_geometry_correction | 燃料／电力、燃烧及退回 | 油箱与仪表记录 | campaign_id; window_id; period_id; event_id; machine_id; fuel_identity; engine_technology; load_mode; operating_duration_s; idle_duration_s; initial_tank_kg; volume_m3; density_kg_per_m3; temperature_degC; fuel_gross_kg; fuel_return_kg; recovered_fuel_waste_kg; uncontained_fuel_kg; final_tank_kg; meter_start_kWh; meter_end_kWh; charging_losses_kWh; opening_stock_burden; opening_stock_used_kg; closing_stock_carried_burden; stock_burden_source; supplier_scope; uncertainty | 以去皮质量记录实际供油和油箱；原始记录为体积时，须有计量／温度／密度转换证据。将全部运行及空转窗口归入作业。实物供应总量保持为边界输入；另外记录opening_stock_used_kg及其继承物料负荷、closing_stock_carried_burden，并链接来源期间。总期初／期末油箱量在burn_balance中仅使用一次。不新增第二次期初领用实物交换或再次扣除期末库存；将库存负荷桥接与实际消耗／退回／废弃／释放出口及结转物料负荷核对。以互斥出口计算燃烧，不使用铭牌功率。计量输入电力及实际充电范围；排除服务商已含运行。 | kg; m3; kg/m3; degC; kWh; s | 每次油箱／仪表事件及运行窗口 | 全部作业窗口、准备／重复／清理及链接的来源期间 | 已识别轨道区间及可归属服务商／资产范围 | per reference flow | 经校准油箱／仪表、接收与机械日志；燃料平衡与事故记录核对；实际燃料／来源核实 |
| cp_transport | track_geometry_correction | 调遣、交付、退回及废物物流 | 运输段与服务商记录 | campaign_id; window_id; period_id; leg_id; provider; mode; cargo_identity; cargo_kg; loaded_distance_km; origin; destination; empty_return_scope; service_unit; service_quantity; job_driver; all_job_drivers; included_fuel; included_maintenance; included_capital | 以实际货物重量匹配真实重载段与路线。计算cargo_kg * loaded_distance_km，按全部作业有证据的驱动量分配共享段。自行机械／空返须有明确服务商车辆活动边界，不虚构货物。向外退回与废物运输仅纳入一次，并核对上游界面。 | kg; km; kg*km | 每个实际调遣／交付／退回／废物运输段 | 全部作业窗口、准备／重复／清理及链接的来源期间 | 已识别轨道区间及可归属服务商／资产范围 | per reference flow | 运输票据／路线／重量；服务商范围证据；独立运输段ID避免重复归属 |
| cp_services | track_geometry_correction | 外部防护与必要稳定完成 | 合同与服务交付记录 | campaign_id; window_id; period_id; service_id; provider; service_identity; service_unit; service_quantity; track_intervals; technology; pass_id; stability_approval_source; possession_id; scope_included; scope_excluded; fuel_owner; materials_owner; emissions_owner; capital_owner; acceptance_record | 阅读实际合同单位与服务范围、交付／作业日志及批准稳定准则。定义任何按件服务包；非物品服务使用实际服务商单位。将全部规定稳定／防护事件归给一个责任方。仅按有记录的范围划分排除重复直接数量；批准文件本身不是可计量的实物服务数量。 | 实际服务商单位；仅有明确定义时使用item | 每次服务商事件及作业窗口 | 全部作业窗口、准备／重复／清理及链接的来源期间 | 已识别轨道区间及可归属服务商／资产范围 | per reference flow | 已签认交付、采用方法、验收及完整资源责任矩阵；规定闭环缺失即阻止完成 |
| cp_assets | track_geometry_correction | 完整寿命共享设备归属 | 资产寿命与使用方活动台账 | asset_id; campaign_id; window_id; period_id; consumer_job_id; consumer_node_id; activity_unit; campaign_activity; observed_life_activity; forecast_remaining_activity; manufacture_scope; maintenance_scope; replacement_event; termination_scenario; EOL_scope; source; forecast_label; excluded_direct_fuel_spares; provider_coverage; uncertainty; sensitivity; update_date | 逐件实际资产列明全部使用方和报告期间。退役资产使用观察完整寿命；在役设备须为剩余服务、更换、终止及寿命终结情景提供来源与敏感性依据。以可比较单位推导complete_life_activity = observed_life_activity + forecast_remaining_activity，作业份额 = campaign_activity / complete_life_activity。一致分配各阶段负荷，排除另行记录燃料／备件，全部使用方份额之和为1。 | 实际可比较活动单位；物品等价份额 | 每次资产寿命审查、更换／终止及作业分配 | 全部作业窗口、准备／重复／清理及链接的来源期间 | 已识别轨道区间及可归属服务商／资产范围 | per reference flow | 资产登记、历史／预测来源、完整使用方台账及寿命范围覆盖；不设无依据寿命默认值 |
| cp_emissions | track_geometry_correction | 物种尾气／粉尘／水释放 | 测量或匹配因子计算 | campaign_id; window_id; period_id; event_id; species; receiving_medium; particle_fraction; fossil_biogenic_basis; activity_identity; activity_quantity; activity_unit; measured_release_kg; factor_kg_per_activity_unit; factor_source; engine_mode; ballast_moisture; capture_efficiency; water_input_kg; water_waste_kg; weather_water_kg; retained_host_water_kg; closing_water_kg; uncertainty | 优先采用经校准的实际排放／出口测量；否则保留适用官方／一手因子来源、单位、发动机／燃料／负荷或道砟／含水量／控制匹配及不确定性。分别展开准确物种／介质及粒径分量。燃烧燃料链接cp_energy，粉尘／水链接实际搬运物料及捕集／保管权。不将残差假定为排放。 | kg; 实际活动单位 | 每个报告物种／出口及匹配活动窗口 | 全部作业窗口、准备／重复／清理及链接的来源期间 | 已识别轨道区间及可归属服务商／资产范围 | per reference flow | 实测释放或因子适用记录；分开捕集废物及空气物种；因子／粒径／介质缺口阻止最终交换 |
| cp_incidents | track_geometry_correction | 泄漏划分与回收 | 事故与清理保管权记录 | campaign_id; window_id; period_id; incident_id; fluid_identity; composition_source; total_spill_kg; recovered_fluid_kg; absorbent_input_kg; contaminated_solids_kg; retained_residue_kg; uncontained_fluid_kg; species; evidenced_actual_constituent_fraction; constituent_fraction_source; constituent_fraction_basis; uncontained_species_kg; receiving_medium; receiver; waste_transfer_id; uncertainty | 将每次事故总量划分为互斥回收流体废物、保留残留及uncontained_fluid_kg。分别采集evidenced_actual_constituent_fraction、来源及质量基准，推导每种实际物种／介质释放；部分报告物种之和不是整份流体质量。分别记录供应吸附材料，并将其质量同回收流体分开。回收燃料组分链接燃料燃烧平衡。扣除分量出口后不再次扣除泄漏总量；未知去向保持未明确。 | kg; 组分质量分数kg/kg | 每次实际泄漏及清理移交 | 全部作业窗口、准备／重复／清理及链接的来源期间 | 已识别轨道区间及可归属服务商／资产范围 | per reference flow | 事故评估、组分证据及废物联单；不设通用泄漏率，不重复事故分量 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `divide_campaign` | ballast_topup; fuel_gross; electricity; hydraulic_makeup; grease; tine_components; other_spares; supplied_water; water_withdrawal; packaging_supply; spill_absorbent; ballast_return; fuel_return; other_product_returns; ballast_solid_waste; removed_fluid_waste; wear_parts_waste; packaging_waste; recovered_spill_waste | 对每种不同交换，amount_per_m = attributable_campaign_amount / L；L = cp_acceptance记录的验收唯一中心线长度，单位m。接收输入在退回净减之前；库存负荷移交另行记录。 | 实际作业数量；cp_acceptance; cp_materials; cp_energy; cp_incidents | 每1 m参考服务的实际交换单位 |  |
| `burn_balance` | fuel_gross; exhaust_species | burned_fuel_kg = initial_tank_kg + fuel_gross_kg - final_tank_kg - fuel_return_kg - recovered_fuel_waste_kg - uncontained_fuel_kg；每个出口互斥。事故保留残留纳入最终可归属库存或另行记录未燃烧出口。不再次扣除泄漏总量。 | cp_energy; cp_incidents | 每次作业燃烧的实际燃料kg，与产品总输入分开 |  |
| `leg_activity` | mobilisation_transport | transport_per_m = sum(cargo_kg * loaded_distance_km * evidenced_job_share) / L；全部使用作业的份额之和为1；t*km转kg*km须用系数1000。空返或自行机械采用有证据服务商车辆边界。 | cp_transport; cp_acceptance | 每1 m参考服务的kg*km，并披露完整运输段范围 |  |
| `service_quantity` | protection_service; stability_service | service_per_m = actual_delivered_service_quantity * evidenced_campaign_share / L；须定义服务单位和范围，全部使用作业份额之和为1。 | cp_services; cp_acceptance | 每1 m参考服务的实际服务商单位数量 |  |
| `complete_life_fraction` | shared_asset_service | asset_fraction_per_m = campaign_activity / (observed_life_activity + forecast_remaining_activity) / L；分子与分母采用相同活动单位；退役寿命的forecast_remaining_activity为零。分别保留每件资产份额及完整寿命阶段覆盖；最终归一化之前全部使用方之和为1。 | cp_assets; cp_acceptance | 每1 m中特定完整寿命资产服务的物品等价份额 |  |
| `species_release` | exhaust_species; dust_species; water_release | species_per_m = measured_release_kg / L，或actual_activity * applicable_factor_kg_per_activity_unit / L；每个物种／事件只使用一种方法及实际捕集划分。不合计不同物种或接收介质。 | cp_emissions; cp_energy; cp_materials; cp_acceptance | 每1 m中实际物种／介质的kg |  |
| `incident_partition` | recovered_spill_waste; oil_release_species | 每次事故，total_spill_kg = recovered_fluid_kg + retained_residue_kg + uncontained_fluid_kg；其实际介质的constituent_release_kg = uncontained_fluid_kg * evidenced_actual_constituent_fraction。废物数量仅加入一次单独实测的吸附材料／固体。每个实际出口除以L。 | cp_incidents; cp_energy; cp_acceptance | 每1 m中不同实际废物及物种出口的kg |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `survey_gate` | accepted_track_geometry_service | 轨道ID／里程、实际目标、空间基长、单位、容许偏差／温度来源、经校准测量、前后支承／稳定证据及签认限制须一致。L排除失败与重复区间。 | cp_acceptance记录及实际采用业主准则 |
| `scope_temporal` | 所有清单行 | 覆盖每次作业／窗口／期间，包括空转／准备／转换、清理、失败、重复及闭环；每个事件对应节点和单一责任方；列明资产寿命阶段及跨期库存期间。 | 全部事件／移交ID及期间／使用方台账 |
| `identity_actual` | 所有清单行 | 将条件需求展开为实际不同物料、备件、服务、废物及物种身份；核实流／属性／单位及服务商／物种／介质限定信息。能量／时间支持须实际核实；不得从所供已发布快照推断其他状态不存在。 | 供应商／服务商／物种文件及身份核实 |
| `custody_balance` | 物料流；fuel_gross | 供应总量去皮并先于退回扣减。按身份／含水量核对库存与互斥出口；结转期末库存负荷。分别追踪干固体、水、天气和既有水分。燃烧燃料不同于总交换量。 | cp_materials; cp_energy; cp_incidents |
| `asset_forecast` | shared_asset_service | 要求制造／维护／更换／寿命终结及全部使用方／期间；标记观察／预测剩余寿命、不确定性、终止及更新情景。证据缺失时不得完成，不要求观察未来退役。 | cp_assets及有来源敏感性 |
| `quantity_uncertainty` | 所有清单行 | 不采用通用数量。记录仪器／因子不确定性及范围证据缺失时实际低／高情景敏感性；来源示例、燃料密度及铭牌不确立一般kg/m或kWh/m范围。 | 实际仪器证书、因子和作业变异 |
| `no_duplicate` | 所有清单行 | 交叉核对服务商／物料已含包装、运输、燃料、备件、维护和资本与直接行及寿命范围；库存移交和事故分量只记录一次。 | 资源范围矩阵、保管权台账和使用方份额 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `gate_complete` | accepted_track_geometry_service | 要求合格作业前状态、批准目标、经校准的前后几何与支承／断面／稳定证据、实际采用容许偏差来源、作业缺陷闭环以及经授权交还／限制。不合格区间或重复通过不得增加L。 | plasser-tamping-precision; plasser-tamping-control |
| `run_complete` | track_geometry_correction | 将每次作业／窗口、准备／转换／空转／清理、失败、复检及规定稳定动作对应到责任方和期间；验收输出排除未闭环不合格区间。 |  |
| `material_balance` | 物料流 | 按身份／含水基准核对去皮供应总量和期初／期末库存，以及互斥使用／嵌入、真实向外退回、废物及有证据的物种排放。干固体、水、既有承载对象水分和天气贡献是不同项。调查残差；未知残差不自动成为排放。 |  |
| `fuel_balance` | fuel_gross; fuel_return; recovered_spill_waste; exhaust_species; oil_release_species | 分开燃料接收、期初／期末库存、退回、废物及事故释放分量，以计算燃烧燃料。将每次泄漏总量划分为回收流体、保留残留和实际未围控流体；仅从有证据的未围控分量推导物种／介质释放。保留残留只归入期末库存或其独立未燃烧出口一次；不再次扣除事故总量。因子须匹配实际燃料／发动机／模式及单位。 |  |
| `assets_complete` | shared_asset_service | 要求完整寿命阶段、全部使用方／期间、观察／预测标记、更换／终止／寿命终结情景及来源／分母不确定性；覆盖缺失即阻止完成。排除已另行记录的直接燃料／备件及服务商已含资本。 |  |
| `identity_ranges` | 所有清单行 | 最终交换前核实每种实际不同物料／服务商／物种及其流属性／单位；不得采用推测性通用UUID、物种或粒径分量。以实际路线记录补足明确的范围证据需求，或披露无范围的不确定性；检查器通过不证明数量或外部身份。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 既有普通轨道几何整正验收服务的前景维修数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配的保留有砟普通轨道维修路线、界面、技术、地区及验收长度基准 |
| excluded_use | 新建铁路；道岔／无砟轨道；全面换砟；通用安全／限速或寿命延长收益断言；列车运输 |
| required_metadata | 参考限定信息；作业／窗口／期间及里程；实际机械／服务商；保留限制；验收来源；物料保管权；完整寿命／共享服务归属 |
| required_quality_disclosure | 仪表／测量精度；失败工作；库存平衡；燃料／排放因子及物种；寿命预测／敏感性；上游范围；未确认身份及范围证据需求 |
| update_trigger | 机械、道砟／轨道状态、目标／交还准则、服务商范围、清单期间、资产寿命情景、数量证据或流身份变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations CPC Version 3.0 explanatory notes, 30 June 2025, printed p.284; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 54212分类中的修复／恢复与道砟／钢轨服务背景；不提供LCA数量 |
| plasser-tamping-precision | literature | Plasser & Theurer, Tamping technology: Precision; https://www.plassertheurer.com/en/tamping-technology/precision | 相互依赖的起拨道与捣固、几何测量及独立动态稳定技术能力；不提供通用交还授权或数量 |
| plasser-tamping-control | literature | Plasser & Theurer, The tamping unit that understands the ballast; https://www.plassertheurer.com/en/pt-research/artikel/the-tamping-unit-that-understands-the-ballast | 物理循环、枕下填充／压实、随状态变化的参数与重复作业；研究示例不是通用范围 |
