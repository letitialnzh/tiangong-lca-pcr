---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-coniferous-wood-other
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 林道交付的其他用途针叶工业圆木

## 1. 范围与适用性

本 PCR 覆盖未经加工、供锯切、单板、制浆及人造板以外工业用途的针叶圆木，包括电杆、桩材、柱材、栅栏、坑木、木丝、食用菌栽培及类似用途的原木。应按预定用途及实物造材分类，不得仅因等级较低而将锯材、纸浆材或燃料材改列为“其他”。交付点为林道集材点已分选、待公路运输的原木。场外长途运输、防腐、机械加工、削片和成品制造均不在范围内。来源：`unsd-cpc-03119`、`fao-jfsq-definitions`、`fao-wood-harvesting`。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-coniferous-wood-other |
| classification_refs | CPC 3.0 `03119`（拟议的精确匹配） |
| covered_products | 供电杆、桩、柱、栅栏、坑木、木丝、食用菌、火柴木块等其他用途的未经加工针叶工业圆木 |
| excluded_products | 锯材原木、单板原木、纸浆材、人造板材、燃料木、非针叶原木、已加工或防腐的木制品 |
| representative_product | 林道集材点按收到状态计量、未经防腐的针叶杆柱材造材 |
| production_route | 经营林分 → 伐倒与集运 → 造材、分级、测尺及林道分选 |
| market_state | 有皮或去皮、未经加工的原木，位于林道集材点且尚未长途运输 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 林道交付的其他用途针叶工业圆木 |
| How much | 按收到状态计 1 kg 可销售原木；另报同批次皮下实积 m³ |
| How well | 声明针叶树种、用途、等级、长度/径级、有无树皮及含水状态 |
| How long or cycle | 一个采伐批次/作业期；林分负担关联相应经营期和采伐批次 |
| reference_flow_link | `roundwood_other_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Roundwood of coniferous wood, other `3dbbedd2-fb9d-478e-a4b4-4a76a4d97804` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 树种/混合组成；地区和林分经营制度；天然/人工来源；采伐系统；预定用途和等级；原木长度与径级；有无树皮；含水状态；批次质量及皮下体积；批次特定质量—体积换算；采伐期；林道交付点；副产品集合及分配方法 |

已核实的平台产品流引用属性为 Mass、单位为 kg，而非体积属性。FAO 所用皮下 m³ 是强制并行报告量，不是该 UUID 的单位。来源：`fao-jfsq-definitions`。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 林道目标原木 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | 收到状态 kg | 称量净木材质量，记录树皮和含水状态。 |
| `underbark_volume` | 每种可销售造材 | 实积 | 皮下 m³ | 按声明的方法测尺；仅有皮上尺寸时记录适合树种和批次的扣皮方法。 |
| `mass_volume_bridge` | 参考产品及副产品批次 | 质量与实积 | kg/m³ | 按同一树种/批次/造材实测收到状态 kg 除以皮下 m³，不使用通用密度。 |
| `cross_period_normalization` | 林分及采伐负担 | 质量与实积 | 各期间 kg、m³ | 在分配前将造林、抚育、间伐、采伐、损失及设施服务关联林分和期间。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

## 5. 系统边界

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 确定的针叶林分/作业区，记录树种、天然或人工来源、权属、经营历史和采伐许可；立木并非默认零负担。 |
| starting_condition_role | 进入林分至林道前景链的经营性生物生产来源。 |
| product_classification_scope | 仅目标其他用途原木；另记锯/单板材、纸浆/板材用木、燃料材等造材。 |
| recursive_input_rule | 若投入是另一圆木类别，其上游数据集只保留一次，不重复叠加同一林分或采伐负担。 |
| upstream_dataset_requirement | 实际采购投入和服务采用匹配的数据集，代理数据需披露。 |
| disclosure | 林分/批次、地区、经营期、营林、采伐设备、集运距离、交付点、全部产出、树皮/含水、测尺、质量换算及设施分配。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_stand_to_roadside` | 全部节点 | 纳入可归属的林分作业、伐倒、场内集运、造材、分选、测尺及集材点作业。生物生产、采伐和分级各有独立状态及交付。排除场外运输和后续处理/制造。 | `fao-wood-harvesting`; `fao-jfsq-definitions` |
| `boundary_output_classes` | 林道产出 | 分列目标原木、其他可销售造材、回收物和未回收枝桠。留在林内的枝桠既不是输出产品也不是废物流交换。 | `unsd-cpc-03119`; `fao-jfsq-definitions` |
| `boundary_period_asset` | 林分与共用道路/集材点 | 按期间关联造林/抚育、间伐、主伐、道路/集材点服务、扰动和更换；跨节点/期间的共用服务只计一次。 | `fao-wood-harvesting` |
| `boundary_direct_release_coverage` | `managed_stand`; `harvest_extraction`; `roadside_assortment` | 逐一核对所有实际启用节点的现场燃烧、实际施用及逸散/泄漏，按 cp_direct_release_managed_stand; cp_direct_release_harvest_extraction; cp_direct_release_roadside_assortment 建立唯一活动—物质—接收介质记录。购买燃料或化学品的上游数据不能替代其现场使用排放；对供应商服务已包含的同一活动须核实覆盖并避免重复。无活动须有证据，缺失数据不能默认为零。此要求不扩大原有产品门或下游使用边界，也不假定任何燃烧、施肥、药剂或设备必然发生。 |  |

## 6. 过程清单结构

清单报告层与过程计量层：各卡数量统一报告为每 1 kg 参考流，原始数量、同批次过程产出、物料状态和期间归属仍由采集协议及计算规则逐项保留。投入负荷先直接归属，并按第 7 节分配共用负荷；实物交接量和副产品量保留未分配物料账，随后分别除以同边界、同期间的正值最终参考产品数量，不能分配缩减质量平衡。中间交接不得重复计入最终输出。Range 使用各块明确声明的原有分母；过程输出基准的 Range 先在局部过程检查，不得直接与参考流基准量比较。需要换算 Range 时，用实测过程产出/最终参考数量比例以及仅适用于负荷的已审查归属系数换算上下限，保留原始限值与依据；不得假定该比例为 1。每种能源载体、肥料配方、物料及物质保持自身单位，不能相加不同单位。最终参考输出由合格批次数量除以自身得到；拒收物、包装和非参考等级不进入分母。

各卡的启用条件按林分、任务和批次记录判定；未使用与资料缺失分别标记。能源、肥料及其他通用投入按过程和需求类别保留汇总卡；具体能源品种、配方及供应规格在数据集建模时展开为经核实的实际交换，不要求逐规格新增 PCR 卡。产品状态、交接点或去向的独立边界要求仍须分别表达。燃料以质量、供电以电量、服务以其参考单位计量，体积换算保留有据密度；不得对 L、kg、kWh 或 h 使用同一数量范围。相邻节点的同批次输出／输入共用兼容物料身份，过程交付点保存在批次记录中。通用平台流可在其范围兼容且限定信息由前景记录完整承载时使用；不得仅因平台名称未列树种或采用质量计量就排除。
### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_stand` | 针叶林分经营生产 | `required` | 声明林分历史和经营活动 | 生物生产和立木交付 | 林分/采伐批次 |
| `harvest_extraction` | 伐倒、造材及集运 | `required` | 声明采伐来源和路线 | 从立木到集材点混合原木 | 集材点混合体积/质量 |
| `roadside_assortment` | 林道分级与交付 | `required` | 考虑目标和非目标状态 | 分选、计量、交付 | 1 kg 目标原木及全产出集 |

各条件卡按独立物料、能源和用途定义。逐卡核实启用条件、实际配方／供应规格和计量依据，再实例化具体交换。

### Process: 针叶林分经营生产 (`managed_stand`)

本节点 `managed_stand` 必须完成 `cp_direct_release_managed_stand` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

经营对象是针叶林分。营林投入和共用道路按真实期间分配。交付为采伐区的可采立木，而非林道原木。未回收生物量是林内损失或库存变化，并非产品。

#### Inputs

##### Product flows

###### 造林用针叶苗木（`conifer_seedlings`）

仅在有造林或补植记录时启用。声明树种、种源、裸根／容器苗、苗龄／规格及苗圃交付点；不同苗木形态分别记录。将交付苗木归属相应林分阶段。没有栽植的天然更新批次不建立苗木交换.

- 选定流：针叶苗木；按树种、种源及苗木形态解析身份；UUID 未解析
- 流属性/单位：苗木数量 / item
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_management`
- 来源：`fao-planted-forest-management`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：item/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 直播造林用针叶树种子（`conifer_seeds`）

仅在有直播记录时启用。记录树种、种源、纯度、水分、处理状态、交付种子质量和播种面积。购入苗木在苗圃使用的种子属于苗木上游，不在此重复计入.

- 选定流：直播用针叶树种子；按树种及处理状态解析身份；UUID 未解析
- 流属性/单位：供应状态种子质量 / kg
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_management`
- 来源：`fao-planted-forest-management`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 林分实际施用肥料（`stand_fertilizer`）

仅在前景林分有施肥记录时启用。每种商品配方分别实例化交换；保留 N/P/K 成分、产品质量、日期和面积。养分质量单独计算，不作为肥料产品交换数量。购入苗木上游的苗圃施肥不重复计入.

- 选定流：记录配方的实际施用肥料产品；UUID 未解析
- 流属性/单位：商品肥料产品质量 / kg
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_management`
- 来源：`fao-planted-forest-management`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 造林及抚育实际供应水（`stand_watering_water`）

仅在有前景浇灌计量记录时启用。记录水源、供应水等级／处理状态、仪表和泵送边界。供应产品水与直接取水是独立角色；发生直接取水时另按资源及环境介质建立记录。降雨不作为供应水.

- 选定流：按记录水源及处理状态确定的供应浇灌水；UUID 未解析
- 流属性/单位：供应水体积 / m3
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_management`
- 来源：`fao-planted-forest-management`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：m3/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 实际植被控制或保护药剂（`stand_protection_product`）

仅在有化学植被控制或树木保护记录时启用。记录产品、活性物质及浓度、剂型、施用产品质量、日期和面积。逐配方解析身份；排放需另有物质及受纳介质证据。机械除草不代表存在药剂投入.

- 选定流：实际商品保护药剂配方；每种配方单独交换；UUID 未解析
- 流属性/单位：商品制剂质量 / kg
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_management`
- 来源：`fao-planted-forest-management`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 实际造林及抚育作业——能源投入（`stand_energy`）

按本过程实际用能启用一张汇总卡，不在 PCR 中按燃料品种或供电规格拆卡。建模时依据记录展开各实际能源交换，分别核实 UUID、供应规格及计量单位；计入承包服务或现场发电的能源负担不得重复计算。

- 选定流：本过程实际燃料或电力供应；按实际能源展开，汇总卡不绑定单一 UUID
- 流属性/单位：实际燃料质量 / kg；电力 / kWh；原始 L 记录及质量换算依据分别保留
- 数量规则：逐种实际能源按记录的量值和单位归属本过程，再按下列基准归一；不直接相加 kg 与 kWh，不将缺失记录填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_management`
- 来源：`fao-wood-harvesting`
- 数量范围：实际燃料质量的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)
- 数量范围：实际电力的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kWh/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)



###### 实际造林及抚育作业——声明服务边界的承包作业（`stand_service`）

任务：实际造林及抚育作业。仅在承包服务数据集以明确任务／设备的作业小时为参考时启用。记录供应商、任务、技术、服务单位及包含的燃料、设备和排放。服务单位不同时另建相应计量的任务卡。服务数据集已包含的组成不再通过独立燃料或机械投入重复计负担.

- 选定流：记录作业、设备及服务边界的承包服务；UUID 未解析
- 流属性/单位：实测设备作业时间 / h
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_management`
- 来源：`fao-wood-harvesting`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：h/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

无默认输出废物；若实际移出废物应单独记录。

##### Elementary flows

不指定通用排放 UUID；直接排放须明确物质和受纳介质。

#### Outputs

##### Product flows

###### 可采针叶立木（`standing_wood_handover`）

经营生产向采伐节点交接的内部立木状态。

- 选定流：立木 `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；另保留同批次皮下实积 m3
- 数量规则：固定 Mass 交换以 kg 表示：使用同一可采树干木质存量的实测质量，或具有相同批次、含水率和树皮覆盖口径的实测质量／体积关系；不得套用默认密度。按作业区核对可采立木、采下原木和保留损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_stand_inventory_at_managed_stand`
- 来源：`fao-jfsq-definitions`
- 数量范围：暂定宽泛立木至目标产品筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 目标原木的可采立木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

不设默认废物产出；枯损和未回收木材为库存/损失披露，除非实物移出。

##### Elementary flows

不指定通用基本流产出。

### Process: 伐倒、造材及集运 (`harvest_extraction`)

本节点 `harvest_extraction` 必须完成 `cp_direct_release_harvest_extraction` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

采伐独立地将木材从林分中移除并集运到集材点。附带损伤木和未回收枝桠记入损失台账。只有实物移出的产品或废物才成为前景交换。

#### Inputs

##### Product flows

###### 针叶立木投入（`standing_wood_input`）

与同一林分调查和采伐批次关联的内部立木投入。

- 选定流：立木 `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；另保留同批次皮下实积 m3
- 数量规则：固定 Mass 交换以 kg 表示：使用同一可采树干木质存量的实测质量，或具有相同批次、含水率和树皮覆盖口径的实测质量／体积关系；不得套用默认密度。同一林分批次只结转一次，不重复叠加上游负担。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_stand_inventory_at_harvest_extraction`
- 来源：`fao-wood-harvesting`
- 数量范围：同批次结转筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 目标原木的内部投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 伐倒、造材及集运——能源投入（`harvest_energy`）

按本过程实际用能启用一张汇总卡，不在 PCR 中按燃料品种或供电规格拆卡。建模时依据记录展开各实际能源交换，分别核实 UUID、供应规格及计量单位；计入承包服务或现场发电的能源负担不得重复计算。

- 选定流：本过程实际燃料或电力供应；按实际能源展开，汇总卡不绑定单一 UUID
- 流属性/单位：实际燃料质量 / kg；电力 / kWh；原始 L 记录及质量换算依据分别保留
- 数量规则：逐种实际能源按记录的量值和单位归属本过程，再按下列基准归一；不直接相加 kg 与 kWh，不将缺失记录填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_harvest_energy`
- 来源：`fao-wood-harvesting`
- 数量范围：实际燃料质量的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)
- 数量范围：实际电力的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kWh/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)



###### 伐倒、造材及集运——设备实际消耗润滑剂（`harvest_lubricant`）

任务：伐倒、造材及集运。仅在润滑剂用量与燃料分别记录时启用。明确链条油、液压油或发动机润滑油及配方，不同用途／产品分别实例化交换。体积记录按有据密度换算。保留泄漏、废油收集及接收记录，不假定排放或处置路线.

- 选定流：记录配方及用途的润滑剂；UUID 未解析
- 流属性/单位：润滑剂产品质量 / kg
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_harvest_energy`
- 来源：`fao-wood-harvesting`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 伐倒、造材及集运——声明服务边界的承包作业（`harvest_service`）

任务：伐倒、造材及集运。仅在承包服务数据集以明确任务／设备的作业小时为参考时启用。记录供应商、任务、技术、服务单位及包含的燃料、设备和排放。服务单位不同时另建相应计量的任务卡。服务数据集已包含的组成不再通过独立燃料或机械投入重复计负担.

- 选定流：记录作业、设备及服务边界的承包服务；UUID 未解析
- 流属性/单位：实测设备作业时间 / h
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_harvest_energy`
- 来源：`fao-wood-harvesting`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：h/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

无默认废物投入。

##### Elementary flows

无通用基本流投入；实际交换须明确受纳介质。

#### Outputs

##### Product flows

###### 集材点混合针叶圆木（`mixed_roundwood_output`）

从作业区实物移出、分选前抵达集材点的原木。

- 选定流：集材点内部混合未加工针叶圆木；具体身份未解析
- 流属性/单位：Mass / kg，另报皮下实积 m³
- 数量规则：汇总抵达集材点且尚未按用途分级的已移出原木。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_landing_scale_at_harvest_extraction`
- 来源：`fao-jfsq-definitions`
- 数量范围：暂定宽泛回收原木筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 目标原木的已回收原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

不设默认枝桠废物流；为处置而移出的物料须另记并核实废物身份。

##### Elementary flows

直接排放须有具体物质、受纳介质、活动和因子证据。

### Process: 林道分级与交付 (`roadside_assortment`)

本节点 `roadside_assortment` 必须完成 `cp_direct_release_roadside_assortment` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

混合原木分为互斥的目标、锯/单板材、纸浆/板材用木、燃料材及拒收状态。每一产出状态仅有一个去向和林道交付。可销售非目标原木是副产品而非损失；未回收枝桠不是交换。

#### Inputs

##### Product flows

###### 林道分级装卸——能源投入（`grading_energy`）

按本过程实际用能启用一张汇总卡，不在 PCR 中按燃料品种或供电规格拆卡。建模时依据记录展开各实际能源交换，分别核实 UUID、供应规格及计量单位；计入承包服务或现场发电的能源负担不得重复计算。

- 选定流：本过程实际燃料或电力供应；按实际能源展开，汇总卡不绑定单一 UUID
- 流属性/单位：实际燃料质量 / kg；电力 / kWh；原始 L 记录及质量换算依据分别保留
- 数量规则：逐种实际能源按记录的量值和单位归属本过程，再按下列基准归一；不直接相加 kg 与 kWh，不将缺失记录填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_assortment_energy`
- 来源：`fao-wood-harvesting`
- 数量范围：实际燃料质量的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)
- 数量范围：实际电力的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kWh/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)


###### 集材点混合原木投入（`mixed_roundwood_input`）

未分选集材点批次向林道分级的内部转移。

- 选定流：来自 `harvest_extraction` 的内部混合原木；具体身份未解析
- 流属性/单位：Mass / kg 和皮下实积 m³
- 数量规则：同一集材点批次只结转一次，与分选产出及损失核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_landing_scale_at_roadside_assortment`
- 来源：`fao-jfsq-definitions`
- 数量范围：同批次结转筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：100
  - 单位：kg/kg 参考产品
  - 基准：每 1 kg 目标原木的集材点混合原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

无常规废物投入。

##### Elementary flows

无通用基本流投入。

#### Outputs

##### Product flows

###### 其他用途针叶圆木产出（`roundwood_other_output`）

在林道交付点放行的可销售目标造材。

- 选定流：针叶圆木、其他 `3dbbedd2-fb9d-478e-a4b4-4a76a4d97804`
并行计量：另报同批次皮下实积 m³，保留树皮、含水率和质量—体积换算依据。

- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
计量说明：林道称量目标原木并归一化为恰好 1 kg 参考产品，保留同批次体积/含水记录。

- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：方法公式（`method_formula`）
- 来源：`fao-jfsq-definitions`
- 数量范围：声明参考产品恒等量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：归一化目标产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-jfsq-definitions`

###### 林道验收的针叶锯材原木（`coproduct_sawlog`）

仅在同一采伐批次实际形成并分别销售此造材时启用。记录针叶树种、原木形态、预定用途、买方等级、树皮／水分、实测数量及林道接收方。每根原木只属于一个等级／用途和一次最终交付；以其他用途出售的剔除材归入对应产品。按实际产品限定解析具体流；任何 kg/m3 换算须有同批次证据。

- 选定流：林道验收的针叶锯材原木；UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；另记匹配的皮下木材实积
- 数量规则：分别计量此造材的未分配实物总量 Q_B，仅以同一边界和期间的正值最终参考数量 R 归一化，q_B = Q_B/R；不得对共产品实物量乘共享负荷分配系数。共享环境负荷单独归属；只有记录确认无该产出时才记零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_assortment_outputs`
- 来源：`fao-jfsq-definitions`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 林道验收的针叶旋切／刨切单板原木（`coproduct_veneer_log`）

仅在同一采伐批次实际形成并分别销售此造材时启用。记录针叶树种、原木形态、预定用途、买方等级、树皮／水分、实测数量及林道接收方。每根原木只属于一个等级／用途和一次最终交付；以其他用途出售的剔除材归入对应产品。按实际产品限定解析具体流；任何 kg/m3 换算须有同批次证据。

- 选定流：林道验收的针叶旋切／刨切单板原木；UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；另记匹配的皮下木材实积
- 数量规则：分别计量此造材的未分配实物总量 Q_B，仅以同一边界和期间的正值最终参考数量 R 归一化，q_B = Q_B/R；不得对共产品实物量乘共享负荷分配系数。共享环境负荷单独归属；只有记录确认无该产出时才记零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_assortment_outputs`
- 来源：`fao-jfsq-definitions`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 林道验收的针叶纸浆／人造板用圆木（`coproduct_pulp_panel`）

仅在同一采伐批次实际形成并分别销售此造材时启用。记录针叶树种、原木形态、预定用途、买方等级、树皮／水分、实测数量及林道接收方。每根原木只属于一个等级／用途和一次最终交付；以其他用途出售的剔除材归入对应产品。按实际产品限定解析具体流；任何 kg/m3 换算须有同批次证据。

- 选定流：林道验收的针叶纸浆／人造板用圆木；UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；另记匹配的皮下木材实积
- 数量规则：分别计量此造材的未分配实物总量 Q_B，仅以同一边界和期间的正值最终参考数量 R 归一化，q_B = Q_B/R；不得对共产品实物量乘共享负荷分配系数。共享环境负荷单独归属；只有记录确认无该产出时才记零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_assortment_outputs`
- 来源：`fao-jfsq-definitions`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 林道销售用于能源的针叶薪材原木（`coproduct_fuelwood`）

仅在同一采伐批次实际形成并分别销售此造材时启用。记录针叶树种、原木形态、预定用途、买方等级、树皮／水分、实测数量及林道接收方。每根原木只属于一个等级／用途和一次最终交付；以其他用途出售的剔除材归入对应产品。按实际产品限定解析具体流；任何 kg/m3 换算须有同批次证据。

- 选定流：林道销售用于能源的针叶薪材原木；UUID 未解析
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；另记匹配的皮下木材实积
- 数量规则：分别计量此造材的未分配实物总量 Q_B，仅以同一边界和期间的正值最终参考数量 R 归一化，q_B = Q_B/R；不得对共产品实物量乘共享负荷分配系数。共享环境负荷单独归属；只有记录确认无该产出时才记零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_assortment_outputs`
- 来源：`fao-jfsq-definitions`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Waste flows

###### 剔除后作为废物移出的未处理原木（`removed_rejected_logs`）

仅在此已识别物料作为废物实物移出至有记录的接收方／处理路线时启用。将林道剔除原木与可销售薪材、树皮及留林枝桠分开；为木材平衡保留匹配的皮下体积。留存物料记入库存／损失台账，可销售物料归入相应产品卡。成分未明或受污染物料在选 UUID 前须另建成分特定卡。

- 选定流：未处理针叶剔除原木废物；UUID 未解析
- 流属性/单位：收到状态物料质量 / kg
- 数量规则：按接收方、批次及日期分别计量实物移出物流，保留含水／树皮口径，并与同批次物料台账核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_removed_waste`
- 来源：`fao-jfsq-definitions`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：100
  - 单位：kg/kg
  - 基准：1 kg 收到状态其他用途针叶圆木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### Elementary flows

无物质和受纳介质特定证据时不指定通用基本流产出。

## 7. 分配与副产品处理

下述分配规则是本 PCR 自行选择的方法，不是 FAO 统计定义规定的 LCA 分配要求。FAO 来源仅支持产品区分和皮下体积惯例。须结合实际联合生产系统论证所选物理分配依据，并保留所要求的敏感性比较。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct_first` | 所有节点 | 优先将直接记录的活动归于实际林分、批次和造材。列全可销售产出类别及林道交付点；区分副产品、留林枝桠和移出废物。 | `fao-wood-harvesting`; `fao-jfsq-definitions` |
| `allocation_shared_volume` | 联合林分及采伐负担 | 在相同交付点和期间按实测皮下 m³ 将剩余共同负担分配给所有可销售原木造材。记录分母、扣皮、零产出批次及另一合理物理基准的敏感性；不将未回收枝桠当作可销售产出分配。 | `fao-jfsq-definitions` |
| `allocation_period` | 造林、抚育、间伐和主伐 | 每项投入、产出、扰动和更换事件均关联林分阶段及报告期。按声明生产期内可归属的采获皮下体积归集林分负担，间伐产出只计一次，不规定通用轮伐期。 | `fao-wood-harvesting` |
| `allocation_shared_asset` | 共用道路、集材点和机械 | 确定所有使用节点及服务期。有使用日志时按实测使用、否则按服务期内有证据的采获体积分摊建设、维护及运营，且只计一次。 | `fao-wood-harvesting` |
| `physical_ledger_before_allocation` | 实物台账与分配后负荷 | 原始物料平衡、交接和共产品数量均保留未分配实物值：q_B = Q_B/R。共享负荷单独按本 PCR 的分配规则计算 b_ref = B_shared * a_ref/R；直接负荷直接归属，期间与产出份额各只应用一次。R 是选定的最终参考输出量，排除内部转移。不得把负荷系数 a_ref 乘到原始共产品或交接数量上；分配后单产品过程投影须与未分配的整包物料台账明确区分。 |  |

## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand_management` | `managed_stand` | 营林投入及共用道路 | 林分计划、发票、活动日志 | 林分；阶段；日期；树种；天然/人工；投入/服务；数量；设施 ；种苗树种／形态；肥料成分；药剂活性成分／浓度；水源／处理；供应规格；启用／缺失标记；实际任务／服务边界；燃料等级／密度；电压／组合；任务工时| 核对计划、发票和现场日志；原始汇总操作：先归期间、再归批次/产出；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | item; kg; L; m3; kWh; h; ha; year | 每项活动和年度结算 | 造林至采伐 | 来源作业区及共用设施 | 每 1 kg 参考流 | 许可、发票、GIS 计划和签认日志 |
| `cp_stand_inventory_at_managed_stand` | `managed_stand` | 立木和损失 | 森林调查及采伐清单 | 林分；树种；径级；树高；可采体积；树皮；枯损；日期 ；同批次质量／体积样本；实测密度；水分；树皮覆盖口径；质量估算／称量方法；换算不确定度; event_id; transfer_id; counterparty_process_id | 现场调查及测尺；原始汇总操作：核对立木、移出和留存；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 皮下 m³；有称量时 kg | 采前和采后 | 相关林分阶段 | 来源林分 | 每 1 kg 参考流 | 样地及测尺校准 |
| `cp_stand_inventory_at_harvest_extraction` | `harvest_extraction` | 立木和损失 | 森林调查及采伐清单 | 林分；树种；径级；树高；可采体积；树皮；枯损；日期 ；同批次质量／体积样本；实测密度；水分；树皮覆盖口径；质量估算／称量方法；换算不确定度; event_id; transfer_id; counterparty_process_id | 现场调查及测尺；原始汇总操作：核对立木、移出和留存；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | 皮下 m³；有称量时 kg | 采前和采后 | 相关林分阶段 | 来源林分 | 每 1 kg 参考流 | 样地及测尺校准 |
| `cp_harvest_energy` | `harvest_extraction` | 采伐能源/服务 | 机械及燃料日志 | 机械；任务；工时；燃料；电力；集运距离；设施 ；燃料等级／密度；电压／供应组合；润滑用途／配方；承包边界；启用／缺失标记| 仪表、领料单、发票；原始汇总操作：按任务汇总，共用服务只分摊一次；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg; L; kWh; h; km | 每班或每批 | 采伐期 | 作业区至集材点 | 每 1 kg 参考流 | 票据及仪表 |
| `cp_landing_scale_at_harvest_extraction` | `harvest_extraction` | 混合原木和交接 | 称量及集材点清单 | 批次；树种；根数；长度；直径；树皮；质量；含水；测尺方法; event_id; transfer_id; counterparty_process_id | 地磅和原木测尺；原始汇总操作：核对投入、分选、库存及损失；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg；皮下 m³；含水率 % | 每车/批 | 采伐期 | 林道集材点 | 每 1 kg 参考流 | 校准、清单及采样 |
| `cp_landing_scale_at_roadside_assortment` | `roadside_assortment` | 混合原木和交接 | 称量及集材点清单 | 批次；树种；根数；长度；直径；树皮；质量；含水；测尺方法; event_id; transfer_id; counterparty_process_id | 地磅和原木测尺；原始汇总操作：核对投入、分选、库存及损失；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg；皮下 m³；含水率 % | 每车/批 | 采伐期 | 林道集材点 | 每 1 kg 参考流 | 校准、清单及采样 |
| `cp_assortment_outputs` | `roadside_assortment` | 目标和副产出 | 分选、库存及销售单 | 批次；用途；等级；去向；长度；直径；树皮；质量；体积；库存 | 等级检查和称量/测尺；原始汇总操作：互斥产出类别；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg；皮下 m³ | 每批及期末 | 采伐期 | 林道集材点 | 每 1 kg 参考流 | 买方规格、分选和称量单 |
| `cp_assortment_energy` | `roadside_assortment` | 林道分级装卸柴油及电力 | 设备、仪表及领料记录 | 设备；任务；批次；燃料等级／密度；kg/L；kWh；电压／供应组合；工时；启用／缺失 | 计量及核对领料和任务日志；原始汇总操作：直接按任务归属，共用使用按处理量／工时归属一次；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg; L; kWh; h | 每班／批次 | 林道分选至交付 | 林道集材点 | 每 1 kg 参考流 | 仪表校准、燃料票据及日志 |
| `cp_removed_waste` | `roadside_assortment` | 分别移出的木质／树皮废物 | 称量、筛分及接收票据 | 批次；物料；是否处理／污染；质量／体积；含水；树皮；筛孔；接收方；处理；日期 | 逐物流称量／测尺并核对接收单；原始汇总操作：分开产品、回流、移出废物和留存；按相同计量口径核对；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg; m3 | 每批及每次移出 | 采伐至林道交付 | 实际发生节点 | 每 1 kg 参考流 | 校准、成分／含水检测及接收票据 |
| `cp_direct_release_managed_stand` | `managed_stand` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_harvest_extraction` | `harvest_extraction` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_roadside_assortment` | `roadside_assortment` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_volume` | 各造材批次 | `kg_per_m3 = measured_as_received_kg / measured_underbark_m3`，限同树种、含水状态和批次，不采用通用密度。 | 实测 kg、皮下 m³、树皮和含水记录 | 换算因子及不确定性 | `fao-jfsq-definitions` |
| `calc_output_balance` | 集材点全部产出 | `mixed_kg = target_kg + non_target_kg + removed_waste_kg + measured_stock_or_loss_change_kg`；另按皮下口径核对 m³。 | 采伐、分选和库存单 | 平衡及异常日志 | `fao-jfsq-definitions` |
| `calc_normalize` | 实物台账与环境负荷的最终参考归一化 | R 为同一批次、边界和期间的最终验收其他用途原木收到状态质量（正值 kg），共产品和内部转移不进入分母。未分配物料、转移及共产品总量 Q 按 q_phys = Q/R 报告；仅对环境负荷 B 先完成一次有据直接、期间、产出和资产归属，再按 b_ref = B_attributed/R 报告。物理台账不乘负荷分配系数；已按最终参考数量报告的值不得再次相除。 | 未分配实物台账 Q；环境负荷 B；有据归属；匹配参考数量 R | 每 1 kg 目标原木的数量 | `fao-wood-harvesting` |
| `calculate_direct_release_ledger` | `managed_stand`; `harvest_extraction`; `roadside_assortment` | 每一唯一事件、物质和介质的原始释放量 E 取实测值，或按已引用适用方法从活动量 A 与同口径因子 EF 计算；只有方法确实为简单因子模型时才用 E = A * EF，先验证单位及治理边界。不同物质或介质不相加；原始释放台账保持未分配。对归属后的负荷总量仅除以匹配的正值最终参考数量 R 一次；已有最终参考强度不再归一化，共用事件仅分配一次。未解释物料差不自动转成排放，缺因子不等于零。 | cp_direct_release_managed_stand; cp_direct_release_harvest_extraction; cp_direct_release_roadside_assortment；现有排放卡；供应商覆盖；参考数量 | 按节点/物质/介质分列的原始与归属量及未解决缺口 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 各产出批次 | 树种、预定用途、等级、状态和去向须与来源类别及选定参考流一致。 | 分选单及买方规格 |
| `dq_mass_volume` | 全部原木产出 | 保存校准称量、测尺、扣皮、含水采样、批次 kg/m³ 换算及不确定性；只有体积数据不能直接实例化 Mass UUID。 | 地磅、测尺及采样单 |
| `dq_completeness` | 全链条 | 核对林分、采伐、集材点、分选产出、燃料、库存、枝桠及共用设施，不重复计负担。 | 签认平衡及分配台账 |
| `dq_temporal` | 跨期林分 | 声明阶段、间伐/主伐、报告期、设施服务、扰动及更换。 | 林分及事件台账 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考产品 | 要求林道其他用途针叶原木归一化为恰好收到状态 1 kg，采用已核实的 Mass 流/属性/单位组，另有实测皮下 m³；不得把 Mass UUID 声称为体积属性。 | `unsd-cpc-03119`; `fao-jfsq-definitions` |
| `validate_category` | 林道产出集 | 核实树种与用途；锯/单板材、纸浆/板材用木、燃料材、非针叶及处理/加工木制品不可作为参考产品；其他产出只计一次。 | `unsd-cpc-03119`; `fao-jfsq-definitions` |
| `validate_balance` | 采伐及分选 | 核对质量和皮下体积；分别披露留林生物量、移出废物、未售库存和副产品。 | `fao-jfsq-definitions` |
| `validate_period_asset` | 共用活动 | 将每个林分阶段及共用道路/集材点服务期追溯到唯一台账；拒绝缺失扰动/更换处理或重复收费。 | `fao-wood-harvesting` |
| `validate_identity_coverage` | 条件性交换 | 最终交换须有实际物料/状态、方向、类型、属性/单位和已核实 UUID；语义伞形卡不能被伪装成固定身份发布。 | `fao-wood-harvesting` |
| `validate_card_activation_units` | 全部细化卡 | 核实每张卡启用条件及实际物料／配方／任务／供应规格；资料缺失不得记作零。各卡数量和 Range 采用单一相容属性／单位；保留燃料密度和木材质量／体积转换证据。核对承包服务已包含组成，防止与燃料、设备及排放重复计负担。 | `fao-wood-harvesting` |
| `validate_direct_release_coverage` | `managed_stand`; `harvest_extraction`; `roadside_assortment` | 对每个实际启用节点，以活动清单逐项核对 cp_direct_release_managed_stand; cp_direct_release_harvest_extraction; cp_direct_release_roadside_assortment：记录应为有量的具体基本流、证据充分的上游服务覆盖，或有证据的无相关活动。缺失/不明不是零，须作为数据包完整性阻断项。检查每种实际物质及介质的量、方法因子单位、具体 UUID 和既有卡/服务覆盖，防止漏排或重复；空分组、购买电力的上游排放或其他节点的单一 CO2 卡不能代替本节点的现场释放核对。共享资产服务不得产生重复物理排放事件。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 林分至林道的前景数据集；仅在已声明树种、用途、地区和采伐路线相符时可作为二级/背景数据 |
| downstream_use | 用于兼容的其他用途针叶原木及下游系统的 process 和 lifecyclemodel 构建 |
| allowed_use | 按质量归一化、实测皮下体积并完整分配副产品的林道原木清单 |
| excluded_use | 不得自动替代锯材原木、单板原木、纸浆材、燃料材、非针叶材、工厂门产品或已处理产品 |
| required_metadata | PCR 身份/版本；林分/批次；树种；地区；经营/采伐系统；用途；等级；树皮/含水；交付点；期间；kg 和皮下 m³；换算；副产品；分配 |
| required_quality_disclosure | 原始记录覆盖、质量/体积不确定性、暂定范围、未解析条件身份、期间及共用设施归属、上游代理数据 |
| update_trigger | 用途、树种、采伐技术、地区、道路服务、测量换算或经审查范围/身份依据变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-03119` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03119 | 产品身份、用途及子类边界 |
| `fao-jfsq-definitions` | `official_guidance` | https://www.fao.org/forestry-fao/7800-0944787ecbf6036088182f841ab15fe42.pdf | 工业圆木类别、林道库存、皮下体积及副产出区别 |
| `fao-wood-harvesting` | `official_guidance` | https://www.fao.org/sustainable-forest-management-toolbox/modules/wood-harvesting/2/en?tabInx=0 | 规划、伐倒、集运、集材点、道路及过程分解 |
| `fao-planted-forest-management` | official_guidance | https://www.fao.org/sustainable-forest-management-toolbox/modules/management-of-planted-forests/1/en?tabInx=1; https://www.fao.org/4/AC601E/ac601e03.htm | 有条件的造林种苗、施肥、植被保护及浇灌投入；不规定通用施用率 |
