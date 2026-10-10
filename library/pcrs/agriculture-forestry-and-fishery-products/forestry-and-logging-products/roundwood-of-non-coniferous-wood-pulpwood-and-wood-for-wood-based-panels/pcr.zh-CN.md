---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-non-coniferous-wood-pulpwood-and-wood-for-wood-based-panels
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非针叶纸浆材及人造板用原木

## 1. 范围与适用性

本 PCR 涵盖在林道生产者交接、拟供纸浆、刨花板、定向刨花板（OSB）或纤维板使用的非针叶原木生产。产品状态与预期用途定义类别，不能仅凭阔叶木密度或分类代码确定。排除针叶木、作为参考的锯材／单板原木、其他用途原木、薪柴、成品板材／纸浆、工业木片／残余、回收木材和化学处理制品。实际替代产品仍作为林业批次副产品单独计量。森林削片不属于本参考路线，需要独立非参考数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-non-coniferous-wood-pulpwood-and-wood-for-wood-based-panels |
| classification_refs | CPC 3.0 03122 |
| covered_products | 纸浆、刨花板、OSB 和纤维板用非针叶原木 |
| excluded_products | 针叶原木；参考锯材／单板／其他用途／薪柴；纸浆／板材；木片及工业残余；回收木材；处理制品 |
| representative_product | 林道交接的非针叶纸浆及人造板用原木 |
| production_route | 实际经营人工林、萌芽／更新林、选择性经营林分或有证据的未经经营天然立木采伐；采伐、集材、初次整备和用途分选。来源及路线实现依批次，不设通用默认。 |
| market_state | 未加工原木，实际水分／树皮状态，林道生产者交接，纸浆／板材用途 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 林道交接的非针叶纸浆及人造板用原木 |
| How much | 1 kg |
| How well | 实际客户纸浆／板材验收；申明树种／来源、尺寸、树皮、水分和缺陷，无通用等级 |
| How long or cycle | 实际采伐批次及经营／林龄组服务期，边界包含时列明建立、间伐、主伐与更新 |
| reference_flow_link | `pulp_panel_roundwood_handover` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 林道交接的非针叶纸浆及人造板用原木 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 非针叶树种; 林分来源／地点／林龄组; 实际经营及采伐路线; 含 OSB 的纸浆／板材用途; 尺寸／质量; 水分惯例及数值; 树皮基准; 采伐批次／日期; 林道生产者终点; 实测质量或同批质量／实体积桥接; 报告及服务期间 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考及内部木材转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留到货实测质量及水分／树皮信息；分摊时区分绝干质量、水和树皮。无通用阔叶木密度。实测实体积仅用有代表性的同批质量／密度及不确定性转换；堆积体积需实测实体积系数。 |
| energy_units | 能源类别 | 实际载能体属性 | kg; kWh | 逐项独立记录燃料和电力。保留升数及实际燃料密度；kWh／MJ 转换需申明相容属性／单位组，不合成混合总量。 |
| fertilizer_n | 肥料及田间排放 | Mass | kg | 产品质量、N 比例与养分质量分开；采集实际配方／施用及适用排放因子，无通用 N 用量。 |
| land_basis | 占用／转变 | 实际土地利用属性 | m2 a; m2 | 占用用实际面积乘期间；转变用有证据前后事件面积，不是同一数量，亦不预设皆伐即转变。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际经营林分建立／生长，或以等效上游数据集支持的申明森林蓄积；仅有证据时采用未经经营天然资源分支 |
| starting_condition_role | foreground_production |
| product_classification_scope | 非针叶纸浆／板材原木；替代木材状态为单独输出，不扩宽参考 |
| recursive_input_rule | 取得的同类原木输入在实际交接终止递归前景追溯，并关联等效上游数据集；仅记录后续作业，不再建第二生长／采伐周期 |
| upstream_dataset_requirement | 等效树种、来源、经营／天然状态、物理状态、水分／树皮基准、终点、时间及产品分摊；记录任何不等效 |
| disclosure | 申明起止、地点／林龄组、路线拓扑、省略上游作业、实际事件及共享资产／期间归属 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_start` | 起点 | 申明地点、树种、林分来源、林龄组及起始日。边界含生长时纳入经营历史；取得立木时要求等效上游数据集并记录排除项。未经经营天然立木不得预设经营。 | `fao-wood-harvesting` |
| `b_operations` | 采伐至分选 | 包括采伐移出、集材、初次整备及用途分选。采伐仅一次拥有来源至伐倒木材交接及资源移出；集材整备拥有伐区至林道整备，而非再次资源移出。仅在完整不重复台账下合并机械。 | `fao-wood-harvesting` |
| `b_gate` | 终点及排除 | 终止于参考原木在林道的生产者交接。排除运厂、制浆、板材、锯解、削片、防腐／处理及使用／终末。森林木片或回收工业残余需要另有证据的非参考数据集，绝非另一参考终点。 | `unsd-cpc-non-conifer-pulp-panel`; `fao-wood-harvesting` |
| `b_routes` | 实际替代路线 | 经营林分是人工造林与萌芽／更新变体的父活动：实际种植与保留伐根改变投入类别及事件／周期台账。逐批选择有证据的来源，不叠加互斥建立事件。采伐整备是短材与长材／全树实现的父活动：去枝截断责任可在节点间移动，集材载荷／燃料记录随之变化。采集实际机械、拓扑和交接；路线标签本身不激活额外负担。 | `fao-wood-harvesting` |
| `b_period_assets` | 期间与共享资产 | 将建立、生长、间伐、主伐、更新、道路建设维护和设备使用关联实际林龄组及服务期间。申明期初期末库存、替换及终止事件；分摊共享负担前核对全部产品、节点与期间。 | `fao-wood-harvesting` |
| `b_conditional_inputs` | 条件类别 | 能源、肥料及服务卡是类别级采集要求。依据实际记录展开零项、一项或多项具体交换，各有经核实身份及原生单位；不得重复承包包已含的燃料、机械或排放。 | `fao-wood-harvesting` |
| `boundary_direct_release_coverage` | `managed-stand`; `harvest-removal`; `extraction-preparation`; `roadside-grading` | 逐一核对所有实际启用节点的现场燃烧、实际施用及逸散/泄漏，按 cp_direct_release_managed_stand; cp_direct_release_harvest_removal; cp_direct_release_extraction_preparation; cp_direct_release_roadside_grading 建立唯一活动—物质—接收介质记录。购买燃料或化学品的上游数据不能替代其现场使用排放；对供应商服务已包含的同一活动须核实覆盖并避免重复。无活动须有证据，缺失数据不能默认为零。此要求不扩大原有产品门或下游使用边界，也不假定任何燃烧、施肥、药剂或设备必然发生。 |  |

按实际入场状态与所有权选择路线。外购已采收、已集运、已整理或已分级的相容原料，可在真实接收节点进入；此前已完成的操作不得再列为强制前景，也不得再投入立木或生物资源来重复来源。接收卡须记录实际物料、等级、湿/干基准、接收门、上游数据集及过程覆盖；无相应接收卡时新增实际接收交换。跳过操作不等于删除上游负荷；不得跳过实际发生的工序，最终参考产品、质量和交付门保持不变。

## 6. 过程清单结构

清单报告层与过程计量层：各卡数量统一报告为每 1 kg 参考流，原始数量、同批次过程产出、物料状态和期间归属仍由采集协议及计算规则逐项保留。投入负荷先直接归属，并按第 7 节分配共用负荷；实物交接量和副产品量保留未分配物料账，随后分别除以同边界、同期间的正值最终参考产品数量，不能分配缩减质量平衡。中间交接不得重复计入最终输出。Range 使用各块明确声明的原有分母；过程输出基准的 Range 先在局部过程检查，不得直接与参考流基准量比较。需要换算 Range 时，用实测过程产出/最终参考数量比例以及仅适用于负荷的已审查归属系数换算上下限，保留原始限值与依据；不得假定该比例为 1。每种能源载体、肥料配方、物料及物质保持自身单位，不能相加不同单位。最终参考输出由合格批次数量除以自身得到；拒收物、包装和非参考等级不进入分母。

条件能源／肥料／服务／排放类别有意保持每过程或每项要求一张卡。依据记录展开实际零项／一项／多项交换，不按品牌、载能体或配方拆 PCR 卡。每个具体交换需要相容 UUID／属性／单位；类别不虚构单一 UUID。除参考归一化外，下述全部数值范围是故意宽泛的暂定推理 QA 筛查，不是森林实测绩效、默认值或可替代原始实测的许可。参考 1..1 筛查来自所选归一化，不是产率观测。无边界交换时也在核对台账记录留场枝桠、库存变化及水分损失。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed-stand` | 经营林分建立及生长 | `conditional` | 申明起点包含实际经营林分生长时；以等效立木上游数据集承接时省略 | foreground_production | 分林龄组与期间的商品立木，kg |
| `harvest-removal` | 采伐及生物资源移出 | conditional | 前景内实际自营采伐/移出时纳入；同批经营与天然来源输入互斥。外购已采伐木料有匹配上游覆盖时绕过。 | harvest_capture | 伐倒非针叶木材在伐区的交接量，kg |
| `extraction-preparation` | 集材及原木初次整备 | conditional | 前景内实际进行集材或首次整备时纳入；有匹配上游覆盖的外购已完成操作绕过，联合作业仅保留一份负荷台账。 | primary_conditioning | 林道待用途分选的整备非针叶原木，kg |
| `roadside-grading` | 林道用途分选及生产者交接 | `required` | 申明合格纸浆及板材原木与全部实际替代用途及拒收去向；不存在的条件输出记零，不得缺失 | grading_sorting | 林道生产者交接的参考纸浆及板材原木，kg |

### 过程： 经营林分建立及生长 (`managed-stand`)

本节点 `managed-stand` 必须完成 `cp_direct_release_managed_stand` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 实际非针叶种植材料 (`stand_planting_material`)

种子、苗木或插条取决于林分来源。采集实际树种和种植事件；萌芽更新不是外购苗木。需要件数—质量转换时保留件数及实测质量。

- 选定流: 实际非针叶种植材料
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_managed_stand`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际肥料投入 (`stand_fertilizer`)

一张条件肥料类别卡；仅在数据集中展开实际配方，分别保留产品质量及包括 N 在内的养分含量。不预设施肥或通用配方。

- 选定流: 实际肥料投入
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_managed_stand`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际能源投入 (`stand_energy`)

一张类别卡涵盖实际燃料与外购电力。前景数据包仅展开实际使用的载能体；燃料 kg 与电力 kWh 分别保留，不合计异类单位；不得重复计入承包服务已包含的能源。

- 选定流: 实际能源投入
- 流属性/单位: 实际燃料 Mass / kg；实际电力能量 / kWh
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_managed_stand`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据 (kg)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 暂定推理 QA 筛查，非实测证据 (kWh)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kWh
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际支撑设备及服务 (`stand_supporting_services`)

条件类别包括实际机械、润滑与维护、承包及共享道路服务。展开实际材料或服务交换，采集原生数量及服务小时；计费打包服务须排除其已包含的自营投入。

- 选定流: 实际支撑设备及服务
- 流属性/单位: 实际材料质量 / kg；实际离散投入数量 / item；实际设备或服务使用 / h
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_managed_stand`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 各实际组件的暂定推理 QA，非实测证据 (kg)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出，逐个相容组件适用，不混合数量
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 各实际组件的暂定推理 QA，非实测证据 (item)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: item
  - 基准: 每 1 kg 参考输出，逐个相容组件适用，不混合数量
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`


##### 废物流

##### 基本流

###### 实际林地占用 (`stand_land_occupation`)

采用有地理定位的面积、实际林龄组期间长度及申明土地利用类型。期间占用归属全部采出产品，不自动全归本批次。

- 选定流: 实际林地占用
- 流属性/单位: 实际交换属性 / m2 a
- 数量规则: 依据活动记录、相容转换／因子及协议计算各实际交换；保留原始数量与不确定性
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_managed_stand`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10000
  - 单位: m2 a
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际土地利用转变 (`stand_land_transformation`)

仅有证据的土地利用变化产生转变交换；在实际数据集分别采集转变前后类型和事件日期。同一林地用途的常规采伐不预设为转换。

- 选定流: 实际土地利用转变
- 流属性/单位: 实际交换属性 / m2
- 数量规则: 依据活动记录、相容转换／因子及协议计算各实际交换；保留原始数量与不确定性
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_managed_stand`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10000
  - 单位: m2
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

#### 输出

##### 产品流

###### 立木（森林生物质，商品蓄积） (`stand_merchantable_stock`)

在林地交给采伐的经营非针叶林龄组立木，而非林道原木。申明实际树种、经营证据、水分／树皮基准以及体积转 kg 时的同批实测密度。通用载体不是树种或未经经营天然林的默认身份。

- 选定流: 立木 `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定: `fixed`
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_managed_stand`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

##### 基本流

###### 实际直接排放至其受纳介质 (`stand_direct_emissions`)

条件类别：逐项采集实际污染物物质或形态、粒径定义与空气／水／土壤受纳介质。燃烧、田间投入及泄漏只依据留存活动记录和申明适用的因子计算；不得为宽泛污染物族绑定 UUID 或将缺证据推为零。

- 选定流: 实际直接排放至其受纳介质
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 依据活动记录、相容转换／因子及协议计算各实际交换；保留原始数量与不确定性
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_managed_stand`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

### 过程： 采伐及生物资源移出 (`harvest-removal`)

本节点 `harvest-removal` 必须完成 `cp_direct_release_harvest_removal` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 立木（森林生物质，商品蓄积） (`harvest_managed_stock`)

仅用于有证据的经营非针叶立木。与林分输出或等效立木上游数据集按批次、状态、水分和数量衔接；采伐运营投入不重复上游生长负担。同批次与未经经营天然资源来源互斥。

- 选定流: 立木 `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定: `fixed`
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_removal`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际能源投入 (`harvest_energy`)

一张类别卡涵盖实际燃料与外购电力。前景数据包仅展开实际使用的载能体；燃料 kg 与电力 kWh 分别保留，不合计异类单位；不得重复计入承包服务已包含的能源。

- 选定流: 实际能源投入
- 流属性/单位: 实际燃料 Mass / kg；实际电力能量 / kWh
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_removal`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据 (kg)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 暂定推理 QA 筛查，非实测证据 (kWh)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kWh
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际支撑设备及服务 (`harvest_supporting_services`)

条件类别包括实际机械、润滑与维护、承包及共享道路服务。展开实际材料或服务交换，采集原生数量及服务小时；计费打包服务须排除其已包含的自营投入。

- 选定流: 实际支撑设备及服务
- 流属性/单位: 实际材料质量 / kg；实际离散投入数量 / item；实际设备或服务使用 / h
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_removal`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 各实际组件的暂定推理 QA，非实测证据 (kg)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出，逐个相容组件适用，不混合数量
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 各实际组件的暂定推理 QA，非实测证据 (item)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: item
  - 基准: 每 1 kg 参考输出，逐个相容组件适用，不混合数量
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`


##### 废物流

##### 基本流

###### 未经经营天然林的木材生物质资源 (`harvest_natural_wood_resource`)

仅当实际未经经营天然立木直接从环境移出、且申明方法将其作为资源输入时使用。采集树种、地点与权属／边界证据；不得绑定经营立木产品。取得的上游产品须另按有证据的产品交换建模，且不得再计资源移出。

- 选定流: 未经经营天然林的木材生物质资源
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_removal`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

#### 输出

##### 产品流

###### 伐区交接的伐倒非针叶木材 (`harvest_felled_wood`)

交给集材的伐倒木材，保留全树／长材／短材及树皮、水分状态。该项为中间产品，不是林道参考输出。留场枝桠与树桩在来源蓄积台账另行核对，不自动记为外运废物。

- 选定流: 伐区交接的伐倒非针叶木材
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_removal`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 实际外送采伐废物 (`harvest_dispatched_waste`)

仅用于实际交给废物接收方的弃置材料；保留组成、去向及交运质量。可销售回收木材另为产品，留场林业残余不是该废物交接。

- 选定流: 实际外送采伐废物
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_harvest_removal`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 基本流

###### 实际直接排放至其受纳介质 (`harvest_direct_emissions`)

条件类别：逐项采集实际污染物物质或形态、粒径定义与空气／水／土壤受纳介质。燃烧、田间投入及泄漏只依据留存活动记录和申明适用的因子计算；不得为宽泛污染物族绑定 UUID 或将缺证据推为零。

- 选定流: 实际直接排放至其受纳介质
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 依据活动记录、相容转换／因子及协议计算各实际交换；保留原始数量与不确定性
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_harvest_removal`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

### 过程： 集材及原木初次整备 (`extraction-preparation`)

本节点 `extraction-preparation` 必须完成 `cp_direct_release_extraction_preparation` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 伐区交接的伐倒非针叶木材 (`landing_felled_wood`)

由 harvest_felled_wood 输入并保持显式转移台账。匹配实际状态及 kg；集材距离／地形和方式为批次限定，不是第二个森林资源移出节点。

- 选定流: 伐区交接的伐倒非针叶木材
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_preparation`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际能源投入 (`landing_energy`)

一张类别卡涵盖实际燃料与外购电力。前景数据包仅展开实际使用的载能体；燃料 kg 与电力 kWh 分别保留，不合计异类单位；不得重复计入承包服务已包含的能源。

- 选定流: 实际能源投入
- 流属性/单位: 实际燃料 Mass / kg；实际电力能量 / kWh
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_preparation`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据 (kg)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 暂定推理 QA 筛查，非实测证据 (kWh)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kWh
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际支撑设备及服务 (`landing_supporting_services`)

条件类别包括实际机械、润滑与维护、承包及共享道路服务。展开实际材料或服务交换，采集原生数量及服务小时；计费打包服务须排除其已包含的自营投入。

- 选定流: 实际支撑设备及服务
- 流属性/单位: 实际材料质量 / kg；实际离散投入数量 / item；实际设备或服务使用 / h
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_preparation`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 各实际组件的暂定推理 QA，非实测证据 (kg)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出，逐个相容组件适用，不混合数量
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 各实际组件的暂定推理 QA，非实测证据 (item)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: item
  - 基准: 每 1 kg 参考输出，逐个相容组件适用，不混合数量
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`


##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 林道待分选的整备非针叶原木 (`landing_prepared_roundwood`)

去枝截断原木，附实际去皮状态，在林道交给用途分选。不得将该未分选混合料等同最终纸浆／板材产品。原木可保留树皮；可选去皮改变树皮及拒收量，不设通用产率。

- 选定流: 林道待分选的整备非针叶原木
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_preparation`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 林道回收树皮及木质整备副产品 (`landing_recovered_bark`)

条件类别用于有买方／用途及实际质量的有意回收产品。数据集中保留树皮与其他木质身份；排除弃置废物和留场物料。不自动给能源替代信用。

- 选定流: 林道回收树皮及木质整备副产品
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_preparation`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 实际外送整备废物 (`landing_preparation_waste`)

交给废物接收方的弃置树皮、截头或污染木材，与回收产品分开。采集组成、接收处理及湿质量是否含土壤或外加水。

- 选定流: 实际外送整备废物
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_extraction_preparation`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 基本流

###### 实际直接排放至其受纳介质 (`landing_direct_emissions`)

条件类别：逐项采集实际污染物物质或形态、粒径定义与空气／水／土壤受纳介质。燃烧、田间投入及泄漏只依据留存活动记录和申明适用的因子计算；不得为宽泛污染物族绑定 UUID 或将缺证据推为零。

- 选定流: 实际直接排放至其受纳介质
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 依据活动记录、相容转换／因子及协议计算各实际交换；保留原始数量与不确定性
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_extraction_preparation`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

### 过程： 林道用途分选及生产者交接 (`roadside-grading`)

本节点 `roadside-grading` 必须完成 `cp_direct_release_roadside_grading` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 林道待分选的整备非针叶原木 (`grading_prepared_roundwood`)

关联 landing_prepared_roundwood 的输入。采集全部树种／水分／树皮分组和保留体积时的实体积方法；不得套用通用阔叶木密度。

- 选定流: 林道待分选的整备非针叶原木
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_roadside_grading`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际能源投入 (`grading_energy`)

一张类别卡涵盖实际燃料与外购电力。前景数据包仅展开实际使用的载能体；燃料 kg 与电力 kWh 分别保留，不合计异类单位；不得重复计入承包服务已包含的能源。

- 选定流: 实际能源投入
- 流属性/单位: 实际燃料 Mass / kg；实际电力能量 / kWh
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_roadside_grading`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据 (kg)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 暂定推理 QA 筛查，非实测证据 (kWh)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: kWh
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 实际支撑设备及服务 (`grading_supporting_services`)

条件类别包括实际机械、润滑与维护、承包及共享道路服务。展开实际材料或服务交换，采集原生数量及服务小时；计费打包服务须排除其已包含的自营投入。

- 选定流: 实际支撑设备及服务
- 流属性/单位: 实际材料质量 / kg；实际离散投入数量 / item；实际设备或服务使用 / h
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_roadside_grading`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: h
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 各实际组件的暂定推理 QA，非实测证据 (kg)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出，逐个相容组件适用，不混合数量
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`
- 数量范围: 各实际组件的暂定推理 QA，非实测证据 (item)
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: item
  - 基准: 每 1 kg 参考输出，逐个相容组件适用，不混合数量
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`


##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 林道交接的非针叶纸浆及人造板用原木 (`pulp_panel_roundwood_handover`)

唯一参考输出：在林道生产者交接、供纸浆、刨花板、OSB 或纤维板使用的非针叶原木。保留用途／质量、树种、来源、水分、树皮、批次／期间及称量证据。木片、工业残余与送达工厂木材不是该输出。

- 选定流: 林道交接的非针叶纸浆及人造板用原木
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
计量说明：合格产品实测量归一化至 1 kg 参考输出

- 数量规则：1 千克
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_roadside_grading`
- 来源: `fao-wood-harvesting`
- 数量范围: 实测批次质量的严格参考归一化
  - 范围角色: `qa_guardrail`
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `calculated_from_collection`

###### 林道非针叶锯材及单板用原木 (`grading_saw_veneer_roundwood`)

仅在实测木材实际售作锯材／单板用途时为条件替代产品。其客户等级／用途及交接量与纸浆／板材合格品分开；降级转纸浆／板材不构成同时第二产品。

- 选定流: 林道非针叶锯材及单板用原木
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_roadside_grading`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 非针叶木原木，其他用途 (`grading_other_use_roundwood`)

在林道交接、实际用作杆柱／桩材或其他有证据非纸浆、非锯材用途的条件其他原木。匹配已确认的通用未加工其他用途身份；排除处理制品、薪柴及纸浆／板材批次。

- 选定流: 阔叶圆木、其他 `b8b84d78-13c2-4dab-9b6d-8e7d9dc32f3b`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定: `fixed`
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_roadside_grading`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 林道实际非针叶薪柴 (`grading_fuelwood`)

以燃料用途出售的条件木材，保留实测质量及实际水分／树皮状态。该项不是纸浆材，不因降级便是废物。申明去向，不自动给予替代燃料信用。

- 选定流: 非针叶树木柴 `aaabc17f-c8db-4493-aa7d-1acb67ee3fa2`
- 绑定: `fixed`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_roadside_grading`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 废物流

###### 实际弃置分选拒收物 (`grading_dispatched_rejects`)

无预期产品用途且有废物交接证据的拒收物。保留原因、组成与处理去向；未售但库存可用木材仍是库存，不自动作废物。

- 选定流: 实际弃置分选拒收物
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 按批次／过程实测实际数量，归一化至 1 kg 参考输出；明确记录有证据的条件性未发生，缺失记录不等于零
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型: `collected_record`
- 采集协议: `cp_roadside_grading`
- 来源: `fao-wood-harvesting`
- 数量范围: 暂定推理 QA 筛查，非实测证据
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每 1 kg 参考输出；分别适用于各实际相容交换
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

##### 基本流

## 7. 分配及副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_direct` | 可分作业 | 首先将可追溯整备、集材及分选活动归属实际批次／输出。分摊共享负担前分离专用作业；无默认副产品或替代信用。 | `fao-wood-harvesting` |
| `a_outputs` | 共享采伐／分选负担 | 列明纸浆／板材原木、锯材／单板原木、其他用途原木、薪柴及回收树皮／木材产品的实际交接及数量。对物理共用木材处理，仅在记录因果理由及水分转换时用一致基准的实测干木质量比例。关系不适用时要求明确合理的经济或其他分摊、同批价格／数量及敏感性；不得静默切换方法或把湿木与水当可比物。 | `fao-wood-harvesting` |
| `a_period` | 林分及事件归属 | 保留实际建立、生长、间伐、主伐及更新期间。在证据支持的服务期内将选定输出分摊规则用于林龄组全部采伐；核对期初期末生物质及建立／替换／终止事件。不得将全部建立负担压在最近采伐，或重复历史间伐。 | `fao-wood-harvesting` |
| `a_assets` | 共享基础设施 | 每项道路、机械或承包服务仅识别一次，并列明全部消费节点／林龄组及实际服务期。用实测设备小时或道路使用／载荷等有证据物理驱动分摊；记录分母、闲置能力、替换及敏感性。负担在消费者间仅分摊一次，不在每个服务和能源项重复。 | `fao-wood-harvesting` |
| `a_residues` | 残余及废物 | 在生物质衡算记录留场枝桠／树桩，不自动当作产品、外运废物或避免燃料。实际售出物料需产品身份与交接；实际弃置需废物身份及接收方。防止同一数量同时作产品和废物。 | `fao-wood-harvesting` |

## 8. 前景数据采集、计算及质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_managed_stand` | `managed-stand` | 全部实际卡及来源／库存核对 | foreground_log | 批次；地点；树种；来源；日期／林龄组；状态／终点；湿干木材及树皮；质量体积桥接；留场枝桠／库存；实际投入；载能体 kg／kWh；肥料／N；设备小时；距离／地形；服务范围；物质／介质／因子；资产期间输出关联 | 校准称量／采样；库存事件及承包记录；票据／计量表；GPS 面积及期间；有记录适用计算因子；原始汇总操作：状态核对及分摊后将实际数量归一化至实测参考 kg；载能体／物质／单位分别处理；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg; item; kWh; h; m2; a | 每批及实际事件；计量表／服务期间核对 | 实际完整林龄组／服务期及代表采伐期间 | 申明林分、林道及消费资产；不无权重混合地点 | 每 1 kg 参考流 | 校准、批次采样、水分／树皮测试、因子及理由、台账闭合、供应商范围证据 |
| `cp_harvest_removal` | `harvest-removal` | 全部实际卡及来源／库存核对 | foreground_log | 批次；地点；树种；来源；日期／林龄组；状态／终点；湿干木材及树皮；质量体积桥接；留场枝桠／库存；实际投入；载能体 kg／kWh；肥料／N；设备小时；距离／地形；服务范围；物质／介质／因子；资产期间输出关联 | 校准称量／采样；库存事件及承包记录；票据／计量表；GPS 面积及期间；有记录适用计算因子；原始汇总操作：状态核对及分摊后将实际数量归一化至实测参考 kg；载能体／物质／单位分别处理；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg; item; kWh; h; m2; a | 每批及实际事件；计量表／服务期间核对 | 实际完整林龄组／服务期及代表采伐期间 | 申明林分、林道及消费资产；不无权重混合地点 | 每 1 kg 参考流 | 校准、批次采样、水分／树皮测试、因子及理由、台账闭合、供应商范围证据 |
| `cp_extraction_preparation` | `extraction-preparation` | 全部实际卡及来源／库存核对 | foreground_log | 批次；地点；树种；来源；日期／林龄组；状态／终点；湿干木材及树皮；质量体积桥接；留场枝桠／库存；实际投入；载能体 kg／kWh；肥料／N；设备小时；距离／地形；服务范围；物质／介质／因子；资产期间输出关联 | 校准称量／采样；库存事件及承包记录；票据／计量表；GPS 面积及期间；有记录适用计算因子；原始汇总操作：状态核对及分摊后将实际数量归一化至实测参考 kg；载能体／物质／单位分别处理；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg; item; kWh; h; m2; a | 每批及实际事件；计量表／服务期间核对 | 实际完整林龄组／服务期及代表采伐期间 | 申明林分、林道及消费资产；不无权重混合地点 | 每 1 kg 参考流 | 校准、批次采样、水分／树皮测试、因子及理由、台账闭合、供应商范围证据 |
| `cp_roadside_grading` | `roadside-grading` | 全部实际卡及来源／库存核对 | foreground_log | 批次；地点；树种；来源；日期／林龄组；状态／终点；湿干木材及树皮；质量体积桥接；留场枝桠／库存；实际投入；载能体 kg／kWh；肥料／N；设备小时；距离／地形；服务范围；物质／介质／因子；资产期间输出关联 | 校准称量／采样；库存事件及承包记录；票据／计量表；GPS 面积及期间；有记录适用计算因子；原始汇总操作：状态核对及分摊后将实际数量归一化至实测参考 kg；载能体／物质／单位分别处理；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg; item; kWh; h; m2; a | 每批及实际事件；计量表／服务期间核对 | 实际完整林龄组／服务期及代表采伐期间 | 申明林分、林道及消费资产；不无权重混合地点 | 每 1 kg 参考流 | 校准、批次采样、水分／树皮测试、因子及理由、台账闭合、供应商范围证据 |
| `cp_direct_release_managed_stand` | `managed-stand` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_harvest_removal` | `harvest-removal` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_extraction_preparation` | `extraction-preparation` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_roadside_grading` | `roadside-grading` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | 实物台账与环境负荷分别归一化 | R 为同一边界、批次和期间的正值最终验收参考质量 kg，排除共产品、内部移交及未验收库存。原始物料、共产品及移交总量 Q 按 q_phys = Q/R 报告，不能乘负荷分配份额。环境负荷 B 仅完成一次有据直接、产出、期间及资产归属后，按 b_ref = B_attributed/R 报告。已按最终参考量报告的数值不再相除；配对内部移交仅在整包汇总抵消，不增加最终输出。 | 未分配实物量 Q；环境负荷 B 及归属记录；匹配正值参考质量 R | native-unit amount per kg | `fao-wood-harvesting` |
| calc_moisture | 湿干／树皮基准 | 申明湿基水分 w 时，干固体 = 湿质量 × (1-w)；一致分开树皮。干基水分需对应转换，不套湿基公式。实测密度仅桥接同批同状态体积和质量。 | measured mass; moisture convention; bark; density | compatible wood mass | `fao-wood-harvesting` |
| calc_land | 土地投入 | 占用 = 面积 × 实际期间 × 有证据归属；转变 = 实际前后事件面积 × 有证据归属，各保留原生单位 | area; dates; event; output shares | m2 a; m2 | `fao-wood-harvesting` |
| calc_emissions | 实际直接排放 | 各物质／介质量 = 留存活动 × 申明适用因子，附化学／单位转换及不确定性。因子有效性或介质未知时留缺口，不用通用排放身份。 | activity; factor/source; species/medium | kg per substance/medium | `fao-wood-harvesting` |
| `calculate_direct_release_ledger` | `managed-stand`; `harvest-removal`; `extraction-preparation`; `roadside-grading` | 每一唯一事件、物质和介质的原始释放量 E 取实测值，或按已引用适用方法从活动量 A 与同口径因子 EF 计算；只有方法确实为简单因子模型时才用 E = A * EF，先验证单位及治理边界。不同物质或介质不相加；原始释放台账保持未分配。对归属后的负荷总量仅除以匹配的正值最终参考数量 R 一次；已有最终参考强度不再归一化，共用事件仅分配一次。未解释物料差不自动转成排放，缺因子不等于零。 | cp_direct_release_managed_stand; cp_direct_release_harvest_removal; cp_direct_release_extraction_preparation; cp_direct_release_roadside_grading；现有排放卡；供应商覆盖；参考数量 | 按节点/物质/介质分列的原始与归属量及未解决缺口 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 参考及全部实际交换 | 实际树种、来源、用途、状态／終点及相容经核实属性／单位／身份；区分条件不存在及剩余缺口 | 批次／客户记录及详情确认支持身份 |
| dq_measurement | 质量、水分及体积 | 追溯校准、代表采样、水干／树皮惯例、同批转换及不确定性；无通用阔叶木因子 | 称量／检测及转换台账 |
| dq_periods | 林龄组及资产 | 实际完整建立至采伐／更新／服务期间，附期初期末库存和替换／终止；不任意年化 | 事件及资产台账 |
| dq_completeness | 输出、服务及排放 | 全部实际输出及废物接收者、类别展开及物质／介质因子；披露缺证据，不虚构零或信用 | 核对批次、服务范围及因子记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_reference` | 参考输出 | 要求唯一参考卡 pulp_panel_roundwood_handover 与参考表的状态、用途、林道终点、kg 基准及全部限定一致。具体数据交换要求核实产品／属性／单位支持；替代输出不是本参考的替代身份。 | `fao-wood-harvesting` |
| `v_links` | 过程交接 | 核对林分—采伐、harvest_felled_wood—landing_felled_wood 及 landing_prepared_roundwood—grading_prepared_roundwood 的批次／状态／数量。内部转移不是额外终产品或上游负担。同一来源批次仅选经营立木或有证据的天然资源／上游来源。 | `fao-wood-harvesting` |
| `v_balance` | 木材及树皮核对 | 按相容湿／干／树皮基准核对输入木材、库存变化、留场残余、全部预期产品、外送废物和有记录的水分变化。留场林业残余记录在来源台账，不虚构外运交换。调查暂定范围超限；范围不是替换实测的许可。 | `fao-wood-harvesting` |
| `v_energy_nutrients` | 投入类别 | 分别保留各燃料 kg 及电力 kWh，绝不相加。升转 kg 使用申明转换因子及实际密度。分别保留肥料产品质量、N 比例及直接排放路径。匹配具体材料／服务身份，移除与打包服务的重叠。 | `fao-wood-harvesting` |
| `v_route_period` | 路线、期间及共享资产 | 核实实际来源及各父活动／路线差异、互斥建立与设备实现、完整事件期间及共享资产分母。缺替换／终止、期初期末库存或消费节点时，不得称完整最终前景包。 | `fao-wood-harvesting` |
| `v_emissions` | 直接排放 | 每项报告的基本排放保留具体物质／形态／粒径基准、受纳介质、活动及适用因子／来源。区分生物与化石碳以及实际泄漏与燃烧。缺因子证据是明确缺口，不是零或虚构通用 UUID。 | `fao-wood-harvesting` |
| `validate_direct_release_coverage` | `managed-stand`; `harvest-removal`; `extraction-preparation`; `roadside-grading` | 对每个实际启用节点，以活动清单逐项核对 cp_direct_release_managed_stand; cp_direct_release_harvest_removal; cp_direct_release_extraction_preparation; cp_direct_release_roadside_grading：记录应为有量的具体基本流、证据充分的上游服务覆盖，或有证据的无相关活动。缺失/不明不是零，须作为数据包完整性阻断项。检查每种实际物质及介质的量、方法因子单位、具体 UUID 和既有卡/服务覆盖，防止漏排或重复；空分组、购买电力的上游排放或其他节点的单一 CO2 卡不能代替本节点的现场释放核对。共享资产服务不得产生重复物理排放事件。 |  |

- 按入场状态逐节点核对 required/conditional 激活与上游覆盖；外购已达状态原料不得重复此前生长、采收或整理，分类相同不能替代状态及门点匹配。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 等效非针叶纸浆／板材原木林业前景；状态及終点匹配的下游纸浆／板材供应输入或 process／lifecyclemodel 投影 |
| excluded_use | 未加物流的工厂到货参考；木片／残余／纸浆／板材／处理木材；未披露代理的不同用途木材或无关树种／路线 |
| required_metadata | 全部参考限定；起止終点；批次／林龄组／事件期间；上游覆盖；所选路线／父活动差异；输出集合；分摊及资产服务台账 |
| required_quality_disclosure | 原始记录覆盖、不确定性／转换、条件不存在、类别展开及经核实具体 UUID、因子适用性、缺口及暂定筛查限制 |
| update_trigger | 树种／来源、经营或机械拓扑、用途／終点、水分／树皮方法、输出分摊、期间／资产范围或证据变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| unsd-cpc-non-conifer-pulp-panel | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03122 | 非针叶原木及纸浆／刨花板／OSB／纤维板用途范围，非工业木片／残余 |
| fao-wood-harvesting | official_guidance | https://www.fao.org/sustainable-forest-management-toolbox/modules/wood-harvesting/2/en?tabInx=1 | 采伐、集材、林道整备及替代技术接口。数量、水分／密度、分摊权重、森林历史及排放因子须来自申明前景协议及有支持场址证据，不源自此通用指导。 |
