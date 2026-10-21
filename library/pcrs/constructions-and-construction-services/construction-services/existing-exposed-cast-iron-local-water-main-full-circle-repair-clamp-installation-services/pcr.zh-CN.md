---
pcr_id: pcr.existing-exposed-cast-iron-local-water-main-full-circle-repair-clamp-installation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有已暴露铸铁本地饮用水干管全包围修补卡箍安装服务

## 1. 范围与适用性

本PCR适用于既有已暴露并稳固的铸铁本地饮用水干管上，一个经确认的局部孔洞或针孔缺陷的有界修补作业。供水运营方授权隔离并泄压后，安装实际相容的工厂制造单片式不锈钢全包围带垫片修补卡箍。服务包括增量清洁、相容润滑、定位、分级紧固和复拧、必要的压力检漏及卫生收尾，直至签署修补验收。既有干管予以保留。

代表性路线为实际批准使用的SS1型单片式组件，采用其实际标准SBR垫片，除非另行规定实际相容的其他胶料。Romac资料说明该路线，并不规定通用品牌、扭矩、压力、可修缺陷尺寸或每个SKU均获饮用水认证。实际当前批准的地区产品说明、供水方要求和现场条件具有约束力。安大略2020年程序是有明确日期的官方技术示例；网页更新时间不使其成为普遍适用或当前项目的法律。不得将维持水流条件下使用修补套筒的例外自动应用于本泄压路线。

排除新管线及支管、污水或燃气或蒸汽管、长距离干管、管段更换、带压安装、开孔或支口连接、用卡箍连接分离管端、剪断或失去支承的结构性断裂、完整沟槽开挖与恢复、供水运行及后续维护。实际要求的收尾试验必须完成，或由边界明确的服务方完成并在最终交付前纳入其实际资源及结果；无人承担的未来试验不能形成已验收产出。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-exposed-cast-iron-local-water-main-full-circle-repair-clamp-installation-services |
| classification_refs | CPC 3.0 54251；较窄候选子集；映射接受须另行决定 |
| covered_products | 在声明的已暴露、稳固、泄压路线中，已验收的本地饮用水铸铁干管单缺陷卡箍安装修补 |
| excluded_products | 新干管；管段更换；带压或开孔卡箍；管道连接套；分离管端结构修补；沟槽开挖及恢复；运行 |
| representative_product | 实际适配的单片式不锈钢全包围卡箍及相容SBR垫片，具有批准的外径范围、缺陷覆盖及饮用水文件 |
| production_route | 保留管道修补部位准备确认并移交，再将卡箍安装集成，完成实际机械及卫生要求并签署有界修补移交 |
| market_state | 声明放行点的已完成且验收服务；保留管道不作为新产品销售，不形成避免更换信用 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 既有已暴露铸铁本地饮用水干管单缺陷全包围卡箍安装修补验收服务 |
| How much | 1 item，即一个实际验收、具有唯一最终标识的单缺陷修补作业 |
| How well | 唯一修补及缺陷标识；本地饮用水干管功能；保留铸铁管的实际外径、状态及可修补缺陷范围；实际单片式卡箍SKU、适用外径范围、长度、垫片及饮用水认证文件；授权隔离和泄压；污染分类及采用的主管要求和安装说明版本；实际扭矩、复拧、压力检漏及卫生验收标准、结果和服务方；交付及移交责任方；报告、作业及资产期间。 |
| How long or cycle | 一个工单修补周期，包括验收前失败尝试、复拧复测及必要卫生收尾；关联作业、报告期间和完整资产寿命；不设干管延寿通用值 |
| reference_flow_link | `accepted_repair` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 既有已暴露铸铁本地饮用水干管单缺陷全包围卡箍安装修补验收服务 |
| 参考流属性 | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 唯一修补及缺陷标识；本地饮用水干管功能；保留铸铁管的实际外径、状态及可修补缺陷范围；实际单片式卡箍SKU、适用外径范围、长度、垫片及饮用水认证文件；授权隔离和泄压；污染分类及采用的主管要求和安装说明版本；实际扭矩、复拧、压力检漏及卫生验收标准、结果和服务方；交付及移交责任方；报告、作业及资产期间。 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `measure_repair_count` | `accepted_repair`；参考流 | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N为唯一签署最终验收的修补标识数，必须为正。螺栓、卡箍分片、尝试次数和干管长度均不是验收作业；失败与重复作业负担保留并除以N。 |
| `measure_transfer` | `qualified_host`; `host_to_install`; `retained_host` | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 按唯一缺陷及移交标识配对确认后的保留管道部位；重复准备是循环，不是新增管道制造或最终验收数。 |
| `measure_physical` | 材料、水、燃料、残余物流和运输行 | 实际核实的交换流属性 | 实际核实的交换单位 | 采用校准后的去皮净内容量，在对外退回前记录去皮后、未扣对外退回的供给总量；体积转质量须有实际密度、状态和温度，运输须有实际货重与距离。不得由计数、公称管径、板厚规格或设计上限推算质量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 既有已暴露并稳固的铸铁本地饮用水干管及已识别局部缺陷；声明供水方授权隔离、泄压、进入现场和污染前提 |
| starting_condition_role | 仅为保留管道状态；不新增干管制造上游负担；仍纳入增量准备及作业造成损伤的补救 |
| product_classification_scope | 本地管线施工服务中的有界修补子集；开挖属于独立沟槽责任 |
| recursive_input_rule | 不得将本修补服务递归替换为整条干管生产数据集。同类采购辅助修补服务须有不重叠的有界交付点及实际服务方证据。 |
| upstream_dataset_requirement | 按实际供应商交付点记录完整卡箍组件、单独供应耗材和服务资源；完整寿命资产及实际运输仅计一次；已含包装、组件、服务不得重复纳入 |
| disclosure | 指明供水运营方、现场进入及沟槽排水方、准备和安装方、收尾试验方、恢复方以及获授权的供水移交方；标识作业、事件、报告期间和排除接口。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_host` | `prepare_host` | 仅在实际外径、缺陷、管况及卡箍相容性审查后接受已暴露稳固的保留铸铁管；清除密封区污物和锈蚀，不虚构新管投入。作业损伤及补救由实际责任方承担，未解决不得移交。 | `romac-install-2024`; `romac-submittal-2024` |
| `boundary_interfaces` | 两个节点及外部接口 | 完整开挖及恢复由声明的通道或沟槽责任方承担。修补期间实际需要的增量防护和卫生条件，包括必要的持续排水，须明确资源责任方；有界采购辅助服务仅计一次。不虚构开挖节点。 | `un-cpc3-2025`; `ontario-watermain-2020` |
| `boundary_components` | `install_accept` | 保留的合格管道部位与完整工厂卡箍垫片组件角色不同。组件数据集中已含壳体、螺栓、垫片、工厂润滑或涂层及包装仅计一次；仅另记实际额外供应或更换物。不作分离管端连接套或开孔支口。 | `romac-install-2024`; `romac-submittal-2024` |
| `boundary_mechanical` | `install_accept` | 按实际当前SKU说明确认规格与范围、平展清洁的垫片尾端、居中覆盖缺陷、适配润滑及规定的分级均匀紧固和复拧；修补放行前须完成隐蔽前实际压力检漏并通过标准。 | `romac-install-2024` |
| `boundary_hygiene` | `install_accept` | 供水方声明采用的主管要求及版本、污染分类、允许的消毒、冲洗、采样、中和及放行标准和责任方。签署有界验收前须纳入实际全部必需试验、结果和资源；明确后续供水运行恢复责任。省略采样须记录实际适用的豁免，不得假定水洁净或套用带压套筒例外。 | `ontario-watermain-2020` |
| `boundary_baseline` | 保留干管、运行水及修补周期 | 既有干管制造及选定起点以前运行漏水位于本增量修补边界外；不给避免更换或减少漏水信用。记录起点后增量排水、冲洗、试验用水及作业释放。 |  |
| `boundary_periods` | 资产、存货、作业及服务方 | 按作业、节点、期间索引准备、安装、清洁、复测和验收事件。纳入工具、泵及防护资源完整寿命中可归属的制造、维护、更换和寿命终结负担，避免重复单列运行和已打包资源。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际单独供应的清洁及防护耗材 (`prep_supplies`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

按实际供应商交付点分别记录清洁剂、消耗刷具、布和防护一次性用品及净内容，保留实际产品化学身份、批准和包装边界。纳入准备中实际未包含在其他供货或服务包中的的清洁围控衬垫、吸附材料和防护耗材，不能仅由废物输出反推投入；可复用围控设备属于prep_assets。

- 采集对象：实际单独供应的清洁及防护耗材
- 流属性/单位：Mass / kg
- 数量规则：实际去皮后、未扣对外退回的供给总量材料净质量去皮后、对外退回前除以N；核对期初期末存货及结转负担。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_p_materials`

数量范围证据需求：须有实际批次质量、收货领用、皮重及范围记录；无每修补kg默认值或假定溶剂。

#### 采集要求：准备设备实际供给燃料 (`prep_fuel`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

明确实际燃料、设备和供应责任方。上游燃料供应须包括所有未退回燃料，包括未燃废物和实际损失。采用 S_fuel 配合互斥实际出口，或按声明的消耗供应口径仅扣除匹配的可用对外退料一次。已燃燃料是单独的燃烧活动量，不能替代上游供应量。

- 采集对象：准备设备实际供给燃料
- 流属性/单位：Mass / kg
- 数量规则：上游产品量 = S_fuel/N；按声明的匹配可用退料口径，也可采用 (S_fuel-unburned_return_kg)/N。保留未退回的未燃废物及损失的供应负荷；按 calc_fuel 单独计算燃烧活动。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_p_utilities`

数量范围证据需求：须有实际燃料记录和出口核对；无默认燃料种类、密度、消耗或碳因子。

#### 采集要求：准备工具及防护资产的完整寿命归属份额 (`prep_assets`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

实际可复用清洁工具、泵和进入现场防护资产的准备份额，覆盖全部使用者的制造、维护、更换和寿命终结。直接运行及服务包已含工具不得重复负担。

- 采集对象：准备工具及防护资产的完整寿命归属份额
- 流属性/单位：Count / item
- 数量规则：逐资产以目标节点服务量除以相容完整寿命服务总量，再除以N，单位为资产当量item；实际上游资产数据集仅缩放一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_p_assets`

数量范围证据需求：须有实际资产标识、寿命覆盖、相容服务驱动量和全部使用者期间总量；可用有依据的在用资产前瞻剩余寿命及不确定性，不虚构寿命。

#### 采集要求：实际未打包的准备供应运输 (`prep_freight`)

过程／待建立交换的方向／类型：`prepare_host` / `inputs` / `product`.

逐次明确准备供应的实际模式、服务方、货物和路段；排除上游已含配送。空车行程按实际燃料或服务分配，不虚构货物。

- 采集对象：实际未打包的准备供应运输
- 流属性/单位：mass*distance / kg*km
- 数量规则：实际货重kg乘载货路段km乘归属份额求和，再除以N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_p_freight`

数量范围证据需求：须有实际净货重、共载、行驶距离、服务边界及空返资源；无直线距离或公称装载默认值。

#### 采集要求：可安装实际修补卡箍的合格清洁保留管道部位 (`qualified_host`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `product`.

一个可识别的保留缺陷部位具有清洁相容密封区，实际卡箍与外径及缺陷匹配已获确认；向install_accept移交记录服务方、时间及移交标识。此处不产出新管道或完成修补。

- 采集对象：可安装实际修补卡箍的合格清洁保留管道部位
- 流属性/单位：Count / item
- 数量规则：唯一合格移交标识数除以N，并与安装输入配对；重复清洁为关联内部循环。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_p_host`
- 来源：`romac-install-2024`

数量范围证据需求：须有实际签署的确认移交台账；一个管道状态不等于一个最终验收修补或新干管质量。

#### 采集要求：实际对外退回的未用准备产品或未燃燃料 (`prep_returns`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `product`.

仅真实对外供应商或保管责任转移、且处于实际产品状态的退回。将批次及上游负担与原去皮后未扣退回的供给总量关联；保留存货不是输出。

- 采集对象：实际对外退回的未用准备产品或未燃燃料
- 流属性/单位：Mass / kg
- 数量规则：实际对外退回净质量除以N，不能先从总输入扣除后又计输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_p_materials`

数量范围证据需求：须有实际退回凭证、接收方、批次皮重及接受数量；无假定退回比例。

#### 采集要求：实际捕集清洁残渣及用后准备耗材 (`prep_solid_waste`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `waste`.

按组成、危险性及废物接收路线区分清除的锈蚀污物、污染布、包装和实际含燃料废物。保留管道不是拆除废物。

- 采集对象：实际捕集清洁残渣及用后准备耗材
- 流属性/单位：Mass / kg
- 数量规则：实际接收称量净质量除以N；分开干固体、附带水和污染物，不与废水重复。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_p_residuals`

数量范围证据需求：须有实际废物转移、组成水分和接收处理证据；无默认废铁或回收信用。

#### 采集要求：实际准备未捕集释放的物种及接收介质 (`prep_releases`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `elementary`.

区分实际整股未围控液体与报告物种；每个基本流交换须有实际物质身份及空气、水或土壤接收介质。捕集废物、化学投加量和未解释残差不是排放。整股液体质量仅为物理平衡运算量；直接水基本流交换须另行具有实际水身份、接收方、属性及核实数量，不能使用通用混合物流。

- 采集对象：实际准备未捕集释放的物种及接收介质
- 流属性/单位：Mass / kg
- 数量规则：逐个核实物种或物质及接收介质，以实际实测kg或有明确质量体积浓度基准的浓度乘排出体积后除以N。整股液体质量仅归独立物理台账，不是本基本流交换数量；不得把物种子集视为整股混合物或重复计算同一影响。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_p_residuals`
- 来源：`ontario-watermain-2020`

数量范围证据需求：须有实际出口介质、物质、浓度基准、体积、检出限及捕集释放互斥平衡；不假定零，也不将投加量等同排放。

#### 采集要求：准备设备向空气直接燃烧排放的实际物种 (`prep_combustion`)

过程／待建立交换的方向／类型：`prepare_host` / `outputs` / `elementary`.

直接建模燃料时纳入实际直接燃烧物种；不重复已含燃烧的采购能源或服务数据集。宽泛污染物标签须落实为实际物种或粒径。

- 采集对象：准备设备向空气直接燃烧排放的实际物种
- 流属性/单位：Mass / kg
- 数量规则：实际燃烧燃料kg乘相容的实际物种因子kg/kg燃料，或实测物种质量，再除以N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_p_utilities`

数量范围证据需求：须有实际燃料、设备、减排、物种因子或测量和因子范围证据；无默认CO2或NOx身份及因子。

#### 采集要求：可安装实际修补卡箍的合格清洁保留管道部位 (`host_to_install`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

接收prepare_host状态，匹配缺陷、修补及移交标识和实际相容清洁密封区。准备负担承接一次，保留管道制造仍在本修补边界外。

- 采集对象：可安装实际修补卡箍的合格清洁保留管道部位
- 流属性/单位：Count / item
- 数量规则：匹配合格部位移交数除以N；返回prepare_host的循环明确关联，不形成新增验收作业。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_host`
- 来源：`romac-install-2024`

数量范围证据需求：须有实际配对移交及密封区、外径、缺陷相容证据；不用卡箍数或管长倍增。

#### 采集要求：实际单独供应的消毒及中和产品 (`hygiene_chemicals`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

按实际配方、浓度和服务方拆分消毒剂、清洁剂和除氯产品交换；采用实际主管要求及管道、垫片、饮用水相容批准。产品溶液质量不同于活性化学品质量和释放残余。

- 采集对象：实际单独供应的消毒及中和产品
- 流属性/单位：Mass / kg
- 数量规则：去皮后、未扣退回的实际配方供给总质量除以N；浓度及活性质量换算须有实际溶液基准，必要时另有实际密度和状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_materials`
- 来源：`ontario-watermain-2020`

数量范围证据需求：须有实际主管批准化学品配方、批次存货、浓度和必要处理记录；安大略示例浓度不是通用修补剂量。

#### 采集要求：安装及收尾设备实际供给燃料 (`install_fuel`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

明确燃料、设备及责任方，并采用 calc_fuel 声明的同一上游供应口径。未退回的未燃废物和损失仍保留供应负荷。可用对外退料、捕集废物和整股未围控燃料与燃烧活动互斥；只有匹配的可用退料可以扣减供应量一次。

- 采集对象：安装及收尾设备实际供给燃料
- 流属性/单位：Mass / kg
- 数量规则：上游产品量 = S_fuel/N；按声明的匹配可用退料口径，也可采用 (S_fuel-unburned_return_kg)/N。保留未退回的未燃废物及损失的供应负荷；按 calc_fuel 单独计算燃烧活动。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_i_utilities`

数量范围证据需求：须有实际购燃料、领用、存量、燃烧分配、退回、废物、释放及服务包范围；无默认燃料密度或空车虚构货物。

#### 采集要求：紧固试验泵送及卫生资产的完整寿命归属份额 (`install_assets`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

实际可复用扭矩扳手、试压泵、采样、防倒流及防护装置份额包含相容完整寿命制造、维护、更换和寿命终结。排除直接建模燃料电力及服务包已含资产，避免重复。

- 采集对象：紧固试验泵送及卫生资产的完整寿命归属份额
- 流属性/单位：Count / item
- 数量规则：目标节点相容服务量除以跨全部节点、作业、期间的完整寿命相容服务量，再除以N，单位资产当量item。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_i_assets`

数量范围证据需求：须有实际校准资产标识、服务驱动量、全部使用者及寿命覆盖，以及在用资产前瞻情景和不确定性；无默认寿命。

#### 采集要求：实际未包含在其他供货或服务包中的卡箍及收尾供应运输 (`install_freight`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

卡箍、耗材和样品运输实际载货路段具有真实货物、模式和距离。不重复计服务方或其他输入已含运输；人员服务或空返按其实际服务燃料边界记录。

- 采集对象：实际未包含在其他供货或服务包中的卡箍及收尾供应运输
- 流属性/单位：mass*distance / kg*km
- 数量规则：实际货重kg乘路段km乘目标份额求和除以N；仅适用时采用kg*km参考及核实的t*km换算因子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_i_freight`

数量范围证据需求：须有实际称重货物包装边界、载货、行驶距离和共载分配；不由计数推质量，不用公称装载。

#### 采集要求：实际单独采购的有界机械卫生试验及防护辅助服务 (`closure_provider`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

每个具体Count交换是一个实际计数的有界服务方服务事件，具有自己的服务标识、完成活动和交付点，且服务方参考流、属性、单位匹配Count/item。可包括供水防护排水、压力检漏、卫生、采样实验室及中和；声明实际已含资源结果并排除直接行重复。实际参考流或属性使用其他物理单位的服务须建立自身匹配的具体交换属性单位，不能默认为本Count卡。

- 采集对象：实际单独采购的有界机械卫生试验及防护辅助服务
- 流属性/单位：Count / item
- 数量规则：按已声明匹配Count/item参考，实际完成的有界服务事件数除以N。一个事件及其已含活动只计一次；实际资源结果必须覆盖交付前全部必要收尾职责。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_closure`
- 来源：`ontario-watermain-2020`; `romac-install-2024`

数量范围证据需求：须有实际计数事件标识、服务方交付点参考属性单位、合同、主要资源和标准通过证据；任意服务单位或纸面未来试验不能替代已完成计数事件。

#### 采集要求：实际单独供应的安装清洁围控及采样耗材 (`install_consumables`)

过程／待建立交换的方向／类型：`install_accept` / `inputs` / `product`.

有条件纳入未包含在其他供货或服务包中的实际吸附材料、泄漏围控衬垫、清洁布、防护一次性用品、样品瓶试剂及其他安装试验清洁耗材。按实际材料配方和服务方拆分，仅在证明已含于另一输入或有界服务包时排除；可复用装置属于资产。

- 采集对象：实际单独供应的安装清洁围控及采样耗材
- 流属性/单位：Mass / kg
- 数量规则：去皮后、未扣实际对外退回的供给材料总质量kg除以N；核对最终保留去向、存货及单独记录的废物释放。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_materials`

数量范围证据需求：须有实际材料SKU、供货及包范围、净重皮重和保管存货记录；不假定服务方已含这些供应，不设通用剂量。

#### 采集要求：实际对外退回的未用配方产品或未燃燃料 (`install_returns`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `product`.

仅实际对外转移、处于真实产品状态的未用润滑剂、消毒中和配方、其他质量计耗材或未燃燃料。排除完整卡箍退回，其另设Count卡。保留批次与原未扣退回输入的负担桥接；期末保留存货不是输出。

- 采集对象：实际对外退回的未用配方产品或未燃燃料
- 流属性/单位：Mass / kg
- 数量规则：实际退回配方、材料或燃料净质量kg除以N；输入保持去皮后未扣退回总量，同一退回不能先净扣后又计输出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_materials`

数量范围证据需求：须有实际质量计退回凭证、接收接受状态、净重皮重和批次负担证据；无退回比例或卡箍计数转质量默认值。

#### 采集要求：实际废弃卡箍及用后安装采样废物 (`install_solid_waste`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `waste`.

按实际组成、危险性和接收方区分失败更换卡箍、单独废弃件、包装、污染一次性用品、样品废物及捕集含燃料废物。保留管道不是新增拆除废物；服务方已处理废物不重复。

- 采集对象：实际废弃卡箍及用后安装采样废物
- 流属性/单位：Mass / kg
- 数量规则：包括失败尝试和复测的实际废物净质量除以N；水分、干固体和液体分别核对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_residuals`

数量范围证据需求：须有实际转移票据、称重、组成水分、处理去向及不合格品处置；无默认废料率或避免钢材信用。

#### 采集要求：安装或收尾实际未围控释放的物种及接收方 (`install_releases`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `elementary`.

整股未围控液体记入物理平衡，再按真实空气、水、土壤接收方记录实际基本流物种。排出残余消毒剂不同于投加溶液或活性氯；反应、保留、捕集及中和须有实际证据。整股液体质量仅为物理账运算量；直接水基本流交换须另有实际水身份、接收方、属性和核实数量，不能用通用混合物。

- 采集对象：安装或收尾实际未围控释放的物种及接收方
- 流属性/单位：Mass / kg
- 数量规则：按每个核实物种物质及接收介质，以实际实测kg或有明确质量体积浓度基准的浓度乘排出体积后除以N。整股液体仅记独立物理账，不是此基本流交换量；不将物种子集视为整股混合物或重复计算同一影响。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_i_residuals`
- 来源：`ontario-watermain-2020`

数量范围证据需求：须有实际出口接收方物种、浓度基准、检出限、体积状态、反应中和及收集记录；不把未解释残差作为排放，不自动置零。

#### 采集要求：安装及收尾向空气直接燃烧排放的实际物种 (`install_combustion`)

过程／待建立交换的方向／类型：`install_accept` / `outputs` / `elementary`.

直接燃烧排放须有实际燃料、设备、物种、减排措施及接收方；不重复服务方或采购能源已含排放。

- 采集对象：安装及收尾向空气直接燃烧排放的实际物种
- 流属性/单位：Mass / kg
- 数量规则：燃烧燃料kg乘相容实际物种因子kg/kg燃料，或实测物种质量，再除以N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_i_utilities`

数量范围证据需求：须有实际燃料、设备、因子或实测物种及燃烧出口物理平衡证据；不使用宽泛污染物近似UUID或默认因子。

## 6. 过程清单结构

采用离散工单作业模式。`prepare_host`负责清洁和确认至合格管道部位移交，并负责其残余物流；`install_accept`负责在保留管道上安装卡箍、复拧、重复试验及必要卫生收尾直至验收。移交标识配对两侧，不增加修补数或保留管道的上游制造负担。清洁、扭矩、试验、采样及授权属于节点内职责，除非存在实际独立有界的采购服务。准备不合格返回`prepare_host`内部；卡箍或试验不合格返回`install_accept`内部，或经明确关联的移交返回准备。更换的失败卡箍仅按实际退回产品或废物离场，不形成验收作业。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_host` | 准备并确认保留管道的修补部位 | required | 声明起点的每个作业 | 独立清洁确认职责；保留管道转为清洁相容密封区并移交 | 唯一合格缺陷移交；最终负担按验收修补数N归一化 |
| `install_accept` | 安装卡箍并完成修补验收 | required | 合格管道部位及实际相容工厂卡箍 | 安装集成、紧固、机械及卫生收尾；签署修补移交 | 已验收唯一作业数N |


### 过程：准备并确认保留管道的修补部位 (`prepare_host`)

#### 输入

##### 产品流

###### 修补起点的保留已暴露稳固铸铁本地饮用水干管缺陷部位 (`retained_host`)

已经存在管道的状态接口流，不是购买或新干管制造。实际局部缺陷、外径、管况、稳固、隔离泄压及进入现场和污染责任必须满足起始资格。

- 选定流：修补起点的保留已暴露稳固铸铁本地饮用水干管缺陷部位
- 流属性/单位：Count / item
- 数量规则：关联修补和工单标识的实际唯一缺陷部位输入数除以验收数N；不附加保留管道制造上游负担。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_p_host`
- 来源：`romac-install-2024`

数量范围证据需求：实际缺陷管道台账及资格记录确定唯一事件数；无默认管长、卡箍数或缺陷密度。

###### 实际供应的准备及卫生进入条件用水 (`prep_water`)

实际供水交付点的清洁和已纳入卫生防护用水。起点后供水方排水与新增供水分别计量；不计起点前运行漏水。

- 选定流：实际供应的准备及卫生进入条件用水
- 流属性/单位：Mass / kg
- 数量规则：实测供应水质量除以N；无法取得质量时，仅按实际表计体积乘实测状态温度下有证据的密度换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_p_water`
- 来源：`ontario-watermain-2020`

数量范围证据需求：须有实际表计称重、水质、换算密度温度和服务方边界；无固定冲洗体积。

###### 准备设备实际采购电力 (`prep_power`)

实际单独供应的准备、清洁、泵送电力按真实供应或接电交付点记录；服务包已含电力不再计入。

- 选定流：准备设备实际采购电力
- 流属性/单位：Energy / kWh
- 数量规则：表计差乘实际倍率和节点分配份额后除以N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_p_utilities`

数量范围证据需求：须有实际电力来源、表计期间、设备使用者范围和核实的具体交换支持；无假定时长或每修补kWh。

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 实际收集并送处理的准备废水 (`prep_wastewater`)

清洁排水等实际收集液体交给污水或处理接收方时属于废物转移，包含实际污染物及水分；同一捕集液体不再作为直接释放。

- 选定流：实际收集并送处理的准备废水
- 流属性/单位：Mass / kg
- 数量规则：实际转移整股液体净质量除以N；表计体积换算须有实际密度、温度、状态。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_p_residuals`
- 来源：`ontario-watermain-2020`

数量范围证据需求：须有实际接收方、液体数量、采样和路线证据；污染物质量之和不是整股液体数量。

##### 基本流

### 过程：安装卡箍并完成修补验收 (`install_accept`)

#### 输入

##### 产品流

###### 实际完整单片式不锈钢全包围修补卡箍及相容垫片组件 (`complete_clamp`)

实际工厂卡箍组件包含壳体、螺栓、护板、垫片以及已含涂层包装，仅跨供应商交付点一次。记录SKU、认证尺寸范围、覆盖缺陷适配和实际饮用水文件；引用标准胶料为SBR，不能假定EPDM。

- 选定流：实际完整单片式不锈钢全包围修补卡箍及相容垫片组件
- 流属性/单位：Count / item
- 数量规则：未扣对外退回的实际完整供应组件数除以N；仅对组件包之外实际单独更换件另记。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_materials`
- 来源：`romac-submittal-2024`; `romac-ss1`

数量范围证据需求：须有实际SKU计数、批准BOM、供应商交付点及包范围；网页与PDF板厚差异阻止默认组成或质量；可申请NSF61/372不证明所有SKU均获证。

###### 实际单独供应的批准垫片润滑剂 (`gasket_lubricant`)

粗糙铸铁密封区所需润滑剂须与实际垫片、管道和饮用水要求相容；记录实际配方批准，排除组件上游已含的工厂润滑。

- 选定流：实际单独供应的批准垫片润滑剂
- 流属性/单位：Mass / kg
- 数量规则：去皮后、未扣对外退回的实际润滑剂供给总质量除以N；包括实际重复涂用与失败耗用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_materials`
- 来源：`romac-install-2024`

数量范围证据需求：须有实际产品SDS、饮用水及垫片相容性、包装净重存货和涂用记录；无标准润滑剂或剂量。

###### 压力试验冲洗及卫生收尾的实际供应水 (`test_flush_water`)

纳入交付前压力检漏、冲洗、消毒和采样置换实际单独供应的水。起点后排出管内水作为保留管道内容贡献另记，不作为第二次购水输入。

- 选定流：压力试验冲洗及卫生收尾的实际供应水
- 流属性/单位：Mass / kg
- 数量规则：实测供应水净质量除以N；体积转质量须有实际密度温度状态；保留复测和重复冲洗数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_water`
- 来源：`ontario-watermain-2020`; `romac-install-2024`

数量范围证据需求：须有实际表计、水源水质、试验冲洗排水、保管及服务范围记录；无公称管容积或自动冲洗豁免。

###### 卡箍安装及试验实际采购电力 (`install_power`)

纳入未包含在其他供货或服务包中的电动紧固、泵送、试验及卫生设备实际电力；手动紧固不虚构用电。

- 选定流：卡箍安装及试验实际采购电力
- 流属性/单位：Energy / kWh
- 数量规则：表计差乘实际倍率和目标节点份额后除以N。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_i_utilities`

数量范围证据需求：须有实际接电服务方、表计、运行期间及核实交换支持；缺少实际功率证据不得由时长转为能源。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 既有已暴露铸铁本地饮用水干管单缺陷全包围卡箍安装修补验收服务 (`accepted_repair`)

仅实际适配获准、垫片平展清洁、分级扭矩复拧符合要求、机械卫生标准通过、缺陷闭合并签署有界放行的唯一最终作业计数。移交元数据明确获授权恢复方及供水运行恢复责任方。 N个唯一最终验收修补标识除以N等于1 item，N为正。失败卡箍试验、重复尝试、螺栓及分片不增加验收产出。

- 选定流：既有已暴露铸铁本地饮用水干管单缺陷全包围卡箍安装修补验收服务
- 流属性/单位：Count / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_host`
- 来源：`romac-install-2024`; `ontario-watermain-2020`

数量范围证据需求：实际签署验收台账及全部必要收尾结果服务方确定N与准确参考；不设数值性能寿命范围。

###### 实际对外接受的未用完整卡箍组件退回 (`clamp_returns`)

仅实际向外转移并获接收方作为产品接受的完整未用组件计数。按实际SKU和数量拆分，匹配原complete_clamp总供给输入及负担保管。保留存货和已用废弃失败卡箍不属于未用完整产品退回。

- 选定流：实际对外接受的未用完整卡箍组件退回
- 流属性/单位：Count / item
- 数量规则：实际获接受的对外完整组件数按SKU除以N；不先从卡箍总输入扣除后再计输出。若下游实际需要质量，仅采用实际对应实测SKU净质量kg/item，另行记录换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_clamp_returns`

数量范围证据需求：须有实际退回票据、接收接受、SKU、完整产品状态及组件计数；无默认卡箍质量、BOM、板厚或计数转质量。

##### 废物流

###### 实际收集并送处理的试验冲洗消毒废水 (`install_wastewater`)

转移至明确污水或处理接收方的实际收集整股液体属于废物，并保留实际污染物、消毒残余及中和状态；同一液体不能再次作为直接释放。

- 选定流：实际收集并送处理的试验冲洗消毒废水
- 流属性/单位：Mass / kg
- 数量规则：实际转移整股液体质量除以N；表计体积换算须有实际密度温度状态；组分质量另记组成记录。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_i_residuals`
- 来源：`ontario-watermain-2020`

数量范围证据需求：须有实际转移体积质量、接收方、水化学品平衡、中和及采样；不假定全部投加量均为废水氯。

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_repair` | 全部修补周期资源 | 尽可能直接归属唯一修补标识；准备、失败卡箍、清洁、复拧及重复试验负担仍除以验收数N。废弃作业及回收废物不产生联产品、验收数或替代信用。 |  |
| `allocation_shared` | 共用人员、设备及有界服务方 | 识别全部使用作业、节点、期间及物理服务驱动量；采用实测驱动量份额，其总和须与声明总量一致。共用工单的准备、出行及空返、卫生与清洁仅计一次。采购服务包排除直接资源重复计入。 |  |
| `allocation_asset_life` | `prep_assets`; `install_assets` | 按有证据的目标服务量除以跨全部作业、节点和期间的相容完整寿命服务总量分配完整寿命负担。可采用已完成寿命实测历史，或在用资产有依据的剩余服务、更换、终止和寿命终结前瞻情景并报告不确定性和更新；缺少分母或寿命覆盖不得定稿。不设默认寿命，也不要求先观察尚未发生的退役。 |  |
| `allocation_stock` | 供应、退回及保留存货 | 输入去皮后、未扣对外退回的供给总量先于实际对外退回记录。期末保留存货是具有结转上游负担的余额，不是对外交换；期初存货须带入有证据的原负担。采购收货与内部领用是备选边界，不得重复。分别维护SKU计数与材料质量账。按收货或领用与最终保留安装或去向、对外退回、捕集废物、实际释放及期末存货核对；最终保留去向排除另记损失和出口，投加或使用是中间活动，不能再作为一个可加最终出口。按同一保管边界核对上游负担。 |  |


## 8. 前景数据采集、计算与质量规则

按声明边界记录实际前景交换及服务方资源。协议专属于实际节点；下列原始字段名为字面量，翻译保持不变。单位覆盖所采集的运算量，不代表通用物理因子。下游交换生成前核实实际服务方参考单位和具体交换支持。未知身份及未闭合平衡保留为不完整证据，不能置零。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_p_host` | `prepare_host` | 保留及合格管道部位与修补验收状态 | inspection_and_acceptance_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; transfer_id; pipe_OD_mm; host_condition; defect_extent_mm; pipe_material; local_main_function; isolation_record; depressurisation_record; hygiene_authority_edition; contamination_class; clamp_SKU; gasket_compound; potable_document; torque_instruction_edition; torque_values_units; retorque_times; pressure_test_criterion_units; pressure_test_result; hygiene_criteria; sample_result; closure_owner; reinstatement_owner; utility_release_owner; acceptance_status; acceptance_signature; gate_time | 按批准的当前产品和采用的主管要求说明核实供水方授权起始条件、合格移交及最终放行；配对移交标识，并按唯一最终验收修补标识去重。保留失败与重复事件关联。 | item | 每个缺陷、移交、尝试及最终交付 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 签署检查、实际SKU及批准文件、扭矩压力和卫生结果以及明确责任方；不得只以未来收尾纸面说明替代 |
| `cp_p_materials` | `prepare_host` | 供应、退回、存货与上游负担保管 | lot_custody_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; lot_id; product_identity; formulation; concentration_value; concentration_basis; SKU; quantity_count; gross_mass_kg; tare_kg; net_mass_kg; volume_L; density_kg_per_L; temperature_C; physical_state; opening_stock_count; closing_stock_count; receipts_count; final_retained_count; outward_returns_count; discarded_count; opening_stock_kg; opening_burden_reference; receipts_kg; issues_kg; dosed_activity_kg; final_retained_destination_kg; outward_returns_kg; waste_kg; whole_release_kg; closing_stock_kg; closing_burden_reference; receiver; return_acceptance; upstream_gate | 实际去皮称量净内容，在对外退回前记录去皮后、未扣对外退回的供给总量；按SKU保留实际卡箍计数。核对收货或领用边界、期初带入负担与期末结转负担，匹配真实退回凭证。具体交换前须确认实际化学品配方、浓度和相容性。 | kg; item; L | 每批次、领用、退回、使用及期间存货结账 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 校准称量、SKU/BOM及实际包装净重；保管、存货及负担桥接；不得由网页板厚推质量 |
| `cp_p_water` | `prepare_host` | 供应水及起点后管内存量排水 | water_meter_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; source_id; water_quality; meter_id; meter_start; meter_end; meter_multiplier; meter_unit; supplied_volume_m3; supplied_mass_kg; density_kg_per_m3; temperature_C; physical_state; post_start_drained_mass_kg; rain_contribution_kg; retained_host_moisture_kg; waste_fluid_mass_kg; direct_fluid_release_kg; returned_water_kg; retained_water_kg; measurement_uncertainty | 每次准备、试验、冲洗或消毒事件读取水源及使用计量表或秤；实际供应水与起点后实际排出管内存量以及有证据的天气或水分贡献分别记录。核对液体接收方及服务包范围。 | kg; m3 | 每次用水、排水、试验及复测 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 校准表计、质量换算实际密度、水质来源和出口记录；排除起点前漏水 |
| `cp_p_utilities` | `prepare_host` | 电力、燃料及直接燃烧 | meter_and_fuel_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; energy_source; equipment_id; meter_start_kWh; meter_end_kWh; meter_multiplier; node_share; fuel_identity; gross_fuel_kg; fuel_volume_L; density_kg_per_L; temperature_C; physical_state; opening_fuel_kg; closing_fuel_kg; unburned_return_kg; captured_unburned_waste_kg; whole_uncontained_fuel_kg; incident_total_spill_kg; burned_fuel_kg; fuel_boundary_choice; substance; emission_factor_kg_per_kg_fuel; factor_source; factor_scope; abatement; measured_emission_kg; receiver_medium | 按节点和事件计量实际能源，核对燃料存量、去皮后、未扣对外退回的供给总量或仅消耗边界及互斥未燃出口。事故泄漏总量只校验其分项。直接燃烧采用实际适配因子或物种测量值；排除服务方或能源数据集已含排放。 | kWh; kg; L | 每个表计燃料区间及排放基准 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 校准记录、燃料密度状态、存量出口日志以及实际因子适用性和物种接收介质证据 |
| `cp_p_assets` | `prepare_host` | 完整寿命资产及共用节点归属 | asset_life_service_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; asset_id; manufacture_burden_reference; maintenance_events; replacement_events; termination_scenario; EOL_burden_reference; operation_exclusions; service_driver_unit; target_node_service; all_consumers; consumer_periods; observed_life_service; prospective_remaining_service; complete_life_service; scenario_source; forecast_observed_labels; uncertainty; sensitivity; update_date | 逐项列出可复用资产全部节点、作业及期间使用者，以及制造、维护、更换和寿命终结覆盖。以实测相容目标服务份额缩放；允许已完成寿命实测历史，或有依据并区分预测和实测的在用资产剩余寿命情景。 | item; 实际相容服务驱动量单位 | 每次资产服务、期间及情景更新 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 完整寿命边界、分母及份额核对证据；缺少覆盖或分母不得定稿 |
| `cp_p_freight` | `prepare_host` | 实际未包含在其他供货或服务包中的运输及共用行程责任 | transport_leg_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; consignment_id; leg_id; mode; vehicle_provider; cargo_mass_kg; cargo_tare_kg; loaded_distance_km; target_share; all_consumers; empty_leg_km; empty_leg_fuel_kg; actual_service_scope; included_delivery; measured_uncertainty | 逐模式和路段使用实际货物净重和实际载货行驶距离；按声明物理驱动量分配共载并核对全部使用者总量。空车及人员服务路段按实际燃料或有界采购服务记录一次。 | kg; km; kg*km | 每个载货及空返路段 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 发运、称量、距离及服务范围记录；无虚构货物、公称装载或重复已含配送 |
| `cp_p_residuals` | `prepare_host` | 固体废物、捕集液体及直接释放 | outlet_and_receiver_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; outlet_id; material_or_substance; receiver; receiver_medium; capture_state; waste_route; gross_mass_kg; tare_kg; net_mass_kg; dry_solids_kg; associated_water_kg; whole_fluid_mass_kg; volume_m3; density_kg_per_m3; temperature_C; physical_state; concentration_value; concentration_basis; concentration_kg_per_m3; measured_species_kg; detection_limit; reaction_retention_kg; neutralisation_record; incident_id; incident_total_kg; exclusive_partition_id | 识别每个捕集废物转移或未围控直接出口及接收方；称量整股液体和固体，并按明确基准分析实际物种。记录实际处理、中和及检出限；未闭合平衡须调查，不能虚构排放。 | kg; m3; kg/m3 | 每次废物转移、释放、采样及事故 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 废物凭证、样品保管链、物种介质及整股液体互斥分项；同一质量不得既计废物又计排放 |
| `cp_i_host` | `install_accept` | 保留及合格管道部位与修补验收状态 | inspection_and_acceptance_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; transfer_id; pipe_OD_mm; host_condition; defect_extent_mm; pipe_material; local_main_function; isolation_record; depressurisation_record; hygiene_authority_edition; contamination_class; clamp_SKU; gasket_compound; potable_document; torque_instruction_edition; torque_values_units; retorque_times; pressure_test_criterion_units; pressure_test_result; hygiene_criteria; sample_result; closure_owner; reinstatement_owner; utility_release_owner; acceptance_status; acceptance_signature; gate_time | 按批准的当前产品和采用的主管要求说明核实供水方授权起始条件、合格移交及最终放行；配对移交标识，并按唯一最终验收修补标识去重。保留失败与重复事件关联。 | item | 每个缺陷、移交、尝试及最终交付 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 签署检查、实际SKU及批准文件、扭矩压力和卫生结果以及明确责任方；不得只以未来收尾纸面说明替代 |
| `cp_i_materials` | `install_accept` | 供应、退回、存货与上游负担保管 | lot_custody_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; lot_id; product_identity; formulation; concentration_value; concentration_basis; SKU; quantity_count; gross_mass_kg; tare_kg; net_mass_kg; volume_L; density_kg_per_L; temperature_C; physical_state; opening_stock_count; closing_stock_count; receipts_count; final_retained_count; outward_returns_count; discarded_count; opening_stock_kg; opening_burden_reference; receipts_kg; issues_kg; dosed_activity_kg; final_retained_destination_kg; outward_returns_kg; waste_kg; whole_release_kg; closing_stock_kg; closing_burden_reference; receiver; return_acceptance; upstream_gate | 实际去皮称量净内容，在对外退回前记录去皮后、未扣对外退回的供给总量；按SKU保留实际卡箍计数。核对收货或领用边界、期初带入负担与期末结转负担，匹配真实退回凭证。具体交换前须确认实际化学品配方、浓度和相容性。 | kg; item; L | 每批次、领用、退回、使用及期间存货结账 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 校准称量、SKU/BOM及实际包装净重；保管、存货及负担桥接；不得由网页板厚推质量 |
| `cp_i_water` | `install_accept` | 供应水及起点后管内存量排水 | water_meter_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; source_id; water_quality; meter_id; meter_start; meter_end; meter_multiplier; meter_unit; supplied_volume_m3; supplied_mass_kg; density_kg_per_m3; temperature_C; physical_state; post_start_drained_mass_kg; rain_contribution_kg; retained_host_moisture_kg; waste_fluid_mass_kg; direct_fluid_release_kg; returned_water_kg; retained_water_kg; measurement_uncertainty | 每次准备、试验、冲洗或消毒事件读取水源及使用计量表或秤；实际供应水与起点后实际排出管内存量以及有证据的天气或水分贡献分别记录。核对液体接收方及服务包范围。 | kg; m3 | 每次用水、排水、试验及复测 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 校准表计、质量换算实际密度、水质来源和出口记录；排除起点前漏水 |
| `cp_i_utilities` | `install_accept` | 电力、燃料及直接燃烧 | meter_and_fuel_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; energy_source; equipment_id; meter_start_kWh; meter_end_kWh; meter_multiplier; node_share; fuel_identity; gross_fuel_kg; fuel_volume_L; density_kg_per_L; temperature_C; physical_state; opening_fuel_kg; closing_fuel_kg; unburned_return_kg; captured_unburned_waste_kg; whole_uncontained_fuel_kg; incident_total_spill_kg; burned_fuel_kg; fuel_boundary_choice; substance; emission_factor_kg_per_kg_fuel; factor_source; factor_scope; abatement; measured_emission_kg; receiver_medium | 按节点和事件计量实际能源，核对燃料存量、去皮后、未扣对外退回的供给总量或仅消耗边界及互斥未燃出口。事故泄漏总量只校验其分项。直接燃烧采用实际适配因子或物种测量值；排除服务方或能源数据集已含排放。 | kWh; kg; L | 每个表计燃料区间及排放基准 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 校准记录、燃料密度状态、存量出口日志以及实际因子适用性和物种接收介质证据 |
| `cp_i_assets` | `install_accept` | 完整寿命资产及共用节点归属 | asset_life_service_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; asset_id; manufacture_burden_reference; maintenance_events; replacement_events; termination_scenario; EOL_burden_reference; operation_exclusions; service_driver_unit; target_node_service; all_consumers; consumer_periods; observed_life_service; prospective_remaining_service; complete_life_service; scenario_source; forecast_observed_labels; uncertainty; sensitivity; update_date | 逐项列出可复用资产全部节点、作业及期间使用者，以及制造、维护、更换和寿命终结覆盖。以实测相容目标服务份额缩放；允许已完成寿命实测历史，或有依据并区分预测和实测的在用资产剩余寿命情景。 | item; 实际相容服务驱动量单位 | 每次资产服务、期间及情景更新 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 完整寿命边界、分母及份额核对证据；缺少覆盖或分母不得定稿 |
| `cp_i_freight` | `install_accept` | 实际未包含在其他供货或服务包中的运输及共用行程责任 | transport_leg_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; consignment_id; leg_id; mode; vehicle_provider; cargo_mass_kg; cargo_tare_kg; loaded_distance_km; target_share; all_consumers; empty_leg_km; empty_leg_fuel_kg; actual_service_scope; included_delivery; measured_uncertainty | 逐模式和路段使用实际货物净重和实际载货行驶距离；按声明物理驱动量分配共载并核对全部使用者总量。空车及人员服务路段按实际燃料或有界采购服务记录一次。 | kg; km; kg*km | 每个载货及空返路段 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 发运、称量、距离及服务范围记录；无虚构货物、公称装载或重复已含配送 |
| `cp_i_residuals` | `install_accept` | 固体废物、捕集液体及直接释放 | outlet_and_receiver_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; outlet_id; material_or_substance; receiver; receiver_medium; capture_state; waste_route; gross_mass_kg; tare_kg; net_mass_kg; dry_solids_kg; associated_water_kg; whole_fluid_mass_kg; volume_m3; density_kg_per_m3; temperature_C; physical_state; concentration_value; concentration_basis; concentration_kg_per_m3; measured_species_kg; detection_limit; reaction_retention_kg; neutralisation_record; incident_id; incident_total_kg; exclusive_partition_id | 识别每个捕集废物转移或未围控直接出口及接收方；称量整股液体和固体，并按明确基准分析实际物种。记录实际处理、中和及检出限；未闭合平衡须调查，不能虚构排放。 | kg; m3; kg/m3 | 每次废物转移、释放、采样及事故 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 废物凭证、样品保管链、物种介质及整股液体互斥分项；同一质量不得既计废物又计排放 |
| `cp_i_closure` | `install_accept` | 有界服务方卫生试验防护与修补收尾 | bounded_service_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; service_id; actual_reference_unit; service_quantity; service_event_id; provider_flow_property; provider_reference_unit; event_gate; adopted_authority_edition; classification_record; activity_scope; direct_resource_exclusions; included_water_kg; included_chemicals_kg; included_energy_units; included_assets; included_travel; pressure_result; flushing_result; disinfectant_result; sampling_requirement; sample_chain_of_custody; laboratory_result; neutralisation_result; release_criterion; criterion_pass; provider_signature; gate_time; utility_return_to_service_owner | 核实具有匹配Count/item参考属性及单位的实际计数有界服务事件和主要活动、结果，以覆盖必要机械和卫生收尾，包括供水方承担的防护排水以及采样实验室资源。accepted_repair前确认实际完成所有必需标准，并记录后续获授权的供水运行及恢复接口。 | item; 实际已含资源单位 | 每个有界服务、样品、结果及放行 | 声明工单起点至验收交付，包括循环；关联报告及资产期间 | 实际修补现场及声明服务方或供应交付点；指明外部接口 | per reference flow | 实际合同、交付点、参考、主要资源证据及标准通过记录；核对排除的直接资源；不得保留无人负责的未来试验 |
| `cp_i_clamp_returns` | `install_accept` | 实际对外接受的完整组件产品退回 | counted_product_return_record | repair_id; work_order_id; event_id; period_id; provider_id; accepted_count_N; lot_id; clamp_SKU; gross_received_count; returned_count; return_ticket; recipient; recipient_acceptance; intact_product_state; transfer_time; matched_SKU_net_mass_kg_per_item; mass_conversion_need | 按SKU计数实际完整对外组件，匹配接收方接受凭证、保管移交票据与原未扣对外退回的收货总量；只有下游实际需要且实测对应SKU净质量时才转为质量。 | item; kg/item 仅限有实际证据的下游换算 | 每次完整组件对外退回 | 声明修补工单周期与存货期间 | 实际修补现场、供应商及退回接收方 | per reference flow | 计数退回票据、SKU完整状态及接收方接受；不作为存货输出，不用默认质量或板厚推BOM |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | 全部清单行 | 逐行 q_ref = 实际归属数量 / N，保留原物理行单位。N为唯一最终验收修补数且必须为正；内部移交数量保留独立事件台账。 | 节点专属协议及cp_i_host; 实际归属行数量与accepted_count_N | 每1 item验收修补的行物理单位 |  |
| `calc_mass` | `prep_supplies`; `prep_water`; `prep_fuel`; `prep_returns`; `prep_solid_waste`; `prep_wastewater`; `gasket_lubricant`; `hygiene_chemicals`; `test_flush_water`; `install_fuel`; `install_consumables`; `install_returns`; `install_solid_waste`; `install_wastewater` | 净内容kg = 总称量kg - 皮重kg。采用实测体积时 质量kg = 体积m3 * 实际密度kg/m3，或 体积L * 实际密度kg/L；记录实际温度及状态。产品计数转质量须有实际SKU 质量kg/item。未扣对外退回的收货总量或领用先于对外退回。 | 适用节点cp_materials、cp_water、cp_utilities或cp_residuals；实际原始称重、体积、密度、温度、状态及SKU净重 | 实际物理净质量kg，另除以N |  |
| `calc_power` | `prep_power`; `install_power` | 归属电力kWh = (meter_end_kWh - meter_start_kWh) * meter_multiplier * node_share；除以N。实际份额须与完整计量使用者范围核对。 | cp_p_utilities; cp_i_utilities; 实际表计、倍率、node_share/N | 每个验收修补的kWh |  |
| `calc_freight` | `prep_freight`; `install_freight` | 运输kg*km = sum(cargo_mass_kg * loaded_distance_km * target_share)；除以N，货重去皮。仅在实际交换使用已支持单位时采用已核实 1 t*km = 1000 kg*km。空返采用实际独立服务或燃料，不虚构货物。 | cp_p_freight; cp_i_freight; 货重、路段距离、目标份额和accepted_count_N | 每个验收修补的kg*km |  |
| `calc_assets` | `prep_assets`; `install_assets` | 资产当量item = target_node_service / complete_life_service，再除以N。在用情景 complete_life_service = observed_life_service + 有证据的prospective_remaining_service；采用相同相容驱动量单位及覆盖，包含全部使用者和期间。以此份额缩放实际完整寿命上游负担一次。 | cp_p_assets; cp_i_assets; 相容目标及完整寿命服务、预测实测标签、完整寿命负担覆盖与accepted_count_N | 每个修补的资产当量item和归属完整寿命负担 |  |
| `calc_fuel` | `prep_fuel`; `install_fuel`; `prep_combustion`; `install_combustion` | S_fuel = opening_fuel_kg + gross_fuel_kg - closing_fuel_kg；gross_fuel_kg 是扣对外退料前的外部燃料净内容物，不含容器或车辆皮重。在同一有界油箱／事件范围内，burned_fuel_kg = S_fuel - unburned_return_kg - captured_unburned_waste_kg - whole_uncontained_fuel_kg；最终出口互斥，事故泄漏总量仅作审计。上游燃料输入采用 S_fuel/N 配合实际出口，或按声明的匹配可用退料口径采用 (S_fuel-unburned_return_kg)/N，且不得再次给予退料扣减／抵扣。两种供应口径均保留所有未退回的未燃废物及损失的供应负荷。burned_fuel_kg 仅用于匹配的燃烧活动，不能作为唯一上游供应量。 | cp_p_utilities; cp_i_utilities; 存量、去皮后、未扣对外退回的供给总量、互斥出口和边界选择 | 每 N 的上游燃料供应 kg，以及单独的实际燃烧活动 kg |  |
| `calc_combustion` | `prep_combustion`; `install_combustion` | 排放kg = burned_fuel_kg * 实际适用的emission_factor_kg_per_kg_fuel，或实际measured_emission_kg，按每个已核实物种及接收方分别计算，再除以N。因子来源、燃料、设备、减排措施和基准必须匹配。 | cp_p_utilities; cp_i_utilities; 实际燃烧燃料、物种因子来源或实测排放 | 每个验收修补向实际空气接收环境释放的物种kg |  |
| `calc_releases` | `prep_releases`; `install_releases` | 物种kg = 实际concentration_kg_per_m3 * 排出volume_m3，或measured_species_kg，再除以N；记录浓度基准及单位换算证据。未称量时，整股液体质量kg = 实际volume_m3 * 实际density_kg_per_m3；物种之和不等于整股液体质量。投加、保留反应、捕集和中和数量分别保留证据，不假定已排放；整股液体仅作物理台账，不作为通用混合物基本流。 | cp_p_residuals; cp_i_residuals; 浓度基准、排出体积、密度温度状态、物种及介质 | 每个修补实际物种kg及独立整股液体物理平衡 |  |
| `calc_stock_bridge` | `prep_supplies`; `prep_returns`; `complete_clamp`; `gasket_lubricant`; `hygiene_chemicals`; `install_consumables`; `install_returns`; `clamp_returns` | 在一个收货或领用边界分别维护Count/item SKU账及Mass/kg材料配方账。期初存货 + 实际收货或领用 = 最终保留安装或去向 + 实际对外退回 + 捕集废物 + 实际整股释放 + 期末存货。最终保留去向排除另记损失出口；投加使用是中间活动，不能作为另一可加最终出口。采用实际相容批次数据，将期初带入及收货上游负担对应于实际使用、退回去向及期末结转。不得同时计算收货和内部领用。 | cp_p_materials; cp_i_materials; cp_i_clamp_returns; 实际独立SKU计数字段(opening_stock_count, receipts_count, final_retained_count, outward_returns_count, discarded_count, closing_stock_count)及材料质量字段；批次保管及期初期末负担引用 | 无虚构期末存货输出的物理存货与上游负担桥接 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `quality_route` | 管道部位、组件及参考产出 | 须有实际干管、外径、缺陷、卡箍、垫片、饮用水批准和交付资格；网页与PDF板厚冲突须由实际SKU文件解决，不推断BOM。 | cp_p_host; cp_i_host; cp_i_materials; 实际制造商及供水方批准 |
| `quality_closure` | 验收修补及有界收尾服务方 | 须有实际采用主管要求及产品版本、责任、机械卫生标准和结果；省略试验须证明不适用，未来无人负责试验阻止最终计数。 | cp_i_host; cp_i_closure; 批准程序、结果及责任方 |
| `quality_completeness` | 每个清单行 | 采集起点至交付全部尝试、退回、存货、废物释放出口和服务方资源。用检出限和平衡差异调查区分未知与零。 | 全部节点专属协议；保管、校准计量及接收证据 |
| `quality_assets` | 共用资产、作业与期间 | 须有完整寿命服务和负担覆盖、全部使用者、前瞻情景来源及不确定性和更新政策；无依据分母或更换、终止、寿命终结缺口阻止定稿。 | cp_p_assets; cp_i_assets; 完整寿命与全部使用者记录 |
| `quality_identity` | 下游具体交换 | 最终TIDAS交换前确认实际供应商、服务方、材料、废物、物种及支持身份；候选语义汇总卡不允许近似或虚构UUID。 | 实际前景身份及独立详情支持核实 |
| `quality_periods` | 工单、循环、存货和共用服务 | 声明起止、节点事件期间关联及服务责任；核对共用准备、清洁、出行和变化存货负担，避免重复归属。 | 各CP的work_order_id/event_id/period_id/provider_id；使用者总量及存货桥接 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_qualification` | `prepare_host`; `host_to_install` | 拒绝未经确认的保留管道部位、缺乏证据的缺陷或外径与卡箍匹配、未获授权的隔离泄压，以及尚未解决的作业损伤；保留清洁密封区及移交证据。 | `romac-install-2024`; `romac-submittal-2024` |
| `validate_assembly` | `install_accept` | 明确保留管道部位和实际完整卡箍组件的不同角色；要求垫片平展清洁、缺陷居中、实际按说明紧固复拧，并通过隐蔽前机械验收标准；不得作连接套、开孔或分离管端修补。 | `romac-install-2024` |
| `validate_hygiene` | `accepted_repair`; `closure_provider` | 要求实际采用的主管要求所规定的污染分类，卫生、冲洗、采样、中和标准及结果和实际责任服务方；最终产出前完成实际必需的全部收尾。记录适用豁免证据，以及获授权的恢复和供水移交接口。 | `ontario-watermain-2020` |
| `validate_count_reject` | 参考计数、工单作业及循环 | N仅计具有唯一标识、签署最终验收的修补；拒收尝试、卡箍、试验及重复制备、复拧、复测均保留负担，并明确关联节点的返工、退回或废物路径。失败尝试不增加最终计数。 |  |
| `validate_resources` | 共享资产或服务方、存货及全部期间 | 核对全部使用者和期间、完整寿命资产及前瞻情景证据、直接运行与服务包边界、货运及空驶服务、存货数量和上游负担桥接，避免重复分配。寿命覆盖或分母缺失时不能完成最终数据集。 |  |
| `validate_outlets` | 材料、水、燃料、废物和基本流释放 | 在扣除真实对外退回前记录去皮供给总量；存货不是向外流。燃料出口互斥，整股未围控液体与物种分别计量，事故总泄漏仅作审计。化学投加量不等于释放，未闭合残差不自动作为排放；须有实际废物接收方、物质、介质和平衡证据。 |  |
| `validate_candidate` | 前景数据包及下游交换生成 | 数据集生成前要求全部适用协议与限定信息、实际单位、换算运算量、不确定性及经核实的具体最终交换。候选或校验通过不证明SKU饮用水批准、数量真实性、主管要求符合性或UUID已经核实。 |  |
| `validate_fuel_supply` | prep_fuel; install_fuel; prep_combustion; install_combustion | 分别核对 S_fuel、可用退料、未退回的未燃废物／损失及燃烧活动。未退回的泄漏燃料或废燃料即使不产生燃烧 CO2，也保留上游供应负荷；不得采用仅燃烧量的上游输入或重复扣除退料。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset; 前景修补数据包的下游process或lifecyclemodel投影 |
| allowed_use | 路线、质量及交付限定信息匹配的已声明单缺陷、已暴露铸铁本地饮用水干管卡箍修补子集 |
| excluded_use | 整条管线建造或运行；带压、开孔或连接套路线；管道更换；无证据的寿命或水密性等同主张；未验收作业 |
| required_metadata | 唯一修补及缺陷标识；本地饮用水干管功能；保留铸铁管外径、状态及有证据的缺陷范围；实际单片式卡箍SKU、范围、长度、垫片及饮用水认证；获授权的隔离泄压；污染分类及采用的主管要求和安装说明版本；实际扭矩复拧、压力检漏和卫生标准、结果与服务方；交付和移交责任方；报告、作业及资产期间。 |
| required_quality_disclosure | 服务方及接口、实际收尾标准和结果、不确定性、缺失身份、实测与计算记录、拒收循环、存货及负担桥接、资产寿命情景、时间地域技术覆盖及排除的服务 |
| update_trigger | 获准卡箍、垫片、饮用水文件、保留管道部位、缺陷、压力、采用的卫生主管要求、服务方边界、证据、资产情景、供应组合或放行标准变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | 联合国CPC第3.0版解释性说明，2025年6月30日，印刷页286；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 本地干管修补子集及沟槽开挖排除 |
| romac-ss1 | handbook | Romac SS1官方产品网页；https://www.romac.com/ss1 | 与铸铁适配的单片式全包围路线；实际规格、压力和认证适用性；不提供通用BOM |
| romac-install-2024 | handbook | Romac文件10-9-0036，2024年11月20日，第1–2页；https://www.romac.net/Installation-Instructions/SS123-install.pdf | 清洁润滑、居中及垫片就位、分级紧固和复拧、回填前检漏及不得作连接套 |
| romac-submittal-2024 | handbook | Romac文件10-8-0014，2024年12月3日，第1页；https://www.romac.net/Submittals/CLAMPS/ss1-2-3-sub.pdf | 工厂组件、标准SBR垫片及可申请的NSF61/372；须确认实际BOM和版本 |
| ontario-watermain-2020 | official_guidance | 安大略2020年干管消毒程序，2020年8月，前言及第2–3节；https://www.ontario.ca/page/water-main-disinfection-procedure | 有明确日期的供水方污染分类、卫生、冲洗、采样、脱氯、修补记录及获授权恢复供水责任技术示例；以实际采用的主管要求为准 |

这些来源支持上述分类、产品路线、技术说明及卫生和交付责任。通用归一化、实物核算、货运、燃料、存货及负担桥接、完整寿命分配公式属于本PCR声明的方法，由节点专属前景采集协议提供证据；不主张它们是联合国、Romac或安大略发布的公式。
