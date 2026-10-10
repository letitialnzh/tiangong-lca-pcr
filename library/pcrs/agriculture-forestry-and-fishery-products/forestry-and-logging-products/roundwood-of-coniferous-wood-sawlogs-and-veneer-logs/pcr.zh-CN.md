---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-coniferous-wood-sawlogs-and-veneer-logs
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 林道集材点针叶树锯材原木及单板原木

## 1. 范围与适用性

本 PCR 覆盖拟纵向锯切为锯材或铁路枕木，或者拟旋切、刨切为单板的针叶树圆木。产品是在林道集材点交付的原木或短材，而非锯材或单板。粗方木、木瓦坯、桶板坯、火柴坯以及特殊树瘤或根材仅在供上述用途时纳入。产品边界依据 `unsd-cpc-03111` 和 `fao-forest-products-2020`。

前景系统包括可归属于采伐批次的林分经营、伐倒、从伐根至集材点的集运、在实际路线位置进行的打枝与造材、分等，以及林道装车待运交接。短材路线可在伐根附近造材，长材路线可在集材点造材；同一作业只计一次。集材点之后的公路运输和厂内锯切、制单板不纳入（`fao-wood-harvesting`）。

纸浆/板材用材、电杆等其他工业原木、薪材、非针叶树圆木、木材加工残余物、锯材和单板不是参考产品。转作这些市场的降等原木须单独报告为采伐副产品，不计入锯材/单板原木参考体积。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-coniferous-wood-sawlogs-and-veneer-logs |
| classification_refs | CPC 3.0:03111 exact — Roundwood of coniferous wood, sawlogs and veneer logs |
| covered_products | 针叶树锯材原木、单板原木、粗方木、木瓦/桶板坯、火柴坯和特殊单板用途原木 |
| excluded_products | 纸浆/板材用材；其他工业圆木；薪材；非针叶树圆木；成品锯材和单板 |
| representative_product | 林道集材点待取走的 1 m3 去皮实积合格针叶树锯材原木或单板原木 |
| production_route | 经营林分 → 伐倒/移除 → 滑集、集运或索道集材 → 在伐根或集材点打枝造材 → 分等与林道交接 |
| market_state | 未加工圆木或粗方木；可带皮交付，但报告量按去皮实积计 |

经营林分的上层活动可以采用天然更新或人工造林；只有实际发生并有记录时，后者才增加苗木及整地清单。人工/机械采伐、地面/索道集运是对应上层活动的替代实现，燃料、道路和设备记录证明其差异。不同采伐批次可并存不同路线，但同一根原木段不能重复采用两套路线。须记录造材位置（`fao-wood-harvesting`）。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 供锯切或单板制造的合格针叶树锯材原木或单板原木 |
| How much | 林道集材点 1 m3 木材去皮实积 |
| How well | 声明针叶树种、预定用途、原木等级、尺寸及树皮计量约定 |
| How long or cycle | 一个可识别采伐批次及其归属的林分经营阶段，归一到 1 m3；记录采伐年 |
| reference_flow_link | `saw_veneer_log` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 林道集材点针叶树锯材或单板原木；UUID 未解 |
| Reference flow property | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66`；计量为皮下木材实积 |
| Reference unit group | 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | 树种或树种组合；地区及林分类型；采伐系统；原木等级及用途；长度与径级计量约定；去皮体积换算；树皮及含水状态；采伐批次/年份；集材点 gate；副产品分配方法 |

前景数据包必须携带上述限定信息。产品流 UUID 仍未解决。已核实的体积属性及体积单位组仅确认物理属性和单位，不代表产品状态、交付点或产品流身份已匹配。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `underbark_volume` | 参考流及所有圆木等级输出 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 去皮实积 | 采用校准的原木尺寸计算方法，必要时采用本地证据支持的树皮修正；不得将堆积体积或吨直接等同于去皮实积（`fao-forest-products-2020`）。 |
| `wood_balance` | 立木、伐倒木、集材点原木、各等级及残余物 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 去皮实积 | 仅将相同木材组分和同一批次、树皮、尺寸、水分及体积约定的量放在同一个平衡中。可利用主干材投入只与来自该投入的各等级和主干损失核对；未含于投入的枝条、树皮和其他生物质另建组分台账，不能加在主干材输出侧凑平衡。 |
| `fuel_basis` | 移动设备及集材点设备 | 燃料体积或能量；UUID 未解 | L 或 MJ | 保留燃料种类及低位热值方法；现场燃烧只表征一次，不与上游燃料生产重复。 |
| `period_basis` | 抚育及共用道路 | 实际服务量或面积 | ha、h、km 或 m3 | 仅分摊有日期记录且使采伐批次受益的活动，不假设通用轮伐期。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

## 5. 系统边界

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | `managed_conifer_stand_before_attributable_harvest` |
| starting_condition_role | 在可归属的抚育和采伐前，声明林分、地区、经营阶段、合法采伐面积及立木蓄积。 |
| product_classification_scope | 仅针叶树锯材/单板用途等级；其他采出用途为单独副产品或保留残余物。 |
| recursive_input_rule | 外购针叶树原木应连接独立上游数据集，不得为外购原木在本前景模型中递归重开本 PCR。 |
| upstream_dataset_requirement | 对跨边界的外购苗木、燃料、电力、润滑剂、道路材料和承包服务连接上游数据集；现场燃烧与土地经营只建模一次。 |
| disclosure | 声明森林来源、树种、经营阶段、采伐系统、造材位置、集运距离、道路/集材点使用、分等、树皮及体积方法、副产品去向、残余物命运、分配与林道 gate。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_roadside` | 所有批次 | 纳入可归属林分经营、伐倒、集运、初整及分等直至林道装车待运交接；排除集材点后公路运输和木材加工。 | `fao-wood-harvesting` |
| `boundary_route_position` | 长材和短材路线 | 在实际伐根或集材点位置记录打枝造材，投入和残余物只计一次。 | `fao-wood-harvesting` |
| `boundary_residue` | 枝丫、树皮和拒收木 | 出售木材是产品；运出处理材料是废物流；林内保留枝丫是披露的现场损失，不虚构为外运废物流。 | `fao-forest-products-2020` |
| `boundary_shared` | 道路、集材点及设备 | 按记录的机器小时、面积、道路使用或体积等适当驱动量，在受益作业和期间之间仅分摊一次共用服务。 |  |
| `boundary_direct_release_coverage` | `stand_management`; `felling_removal`; `forest_extraction`; `log_preparation`; `grade_handover` | 逐一核对所有实际启用节点的现场燃烧、实际施用及逸散/泄漏，按 cp_direct_release_stand_management; cp_direct_release_felling_removal; cp_direct_release_forest_extraction; cp_direct_release_log_preparation; cp_direct_release_grade_handover 建立唯一活动—物质—接收介质记录。购买燃料或化学品的上游数据不能替代其现场使用排放；对供应商服务已包含的同一活动须核实覆盖并避免重复。无活动须有证据，缺失数据不能默认为零。此要求不扩大原有产品门或下游使用边界，也不假定任何燃烧、施肥、药剂或设备必然发生。 |  |

按实际入场状态与所有权选择路线。外购已采收、已集运、已整理或已分级的相容原料，可在真实接收节点进入；此前已完成的操作不得再列为强制前景，也不得再投入立木或生物资源来重复来源。接收卡须记录实际物料、等级、湿/干基准、接收门、上游数据集及过程覆盖；无相应接收卡时新增实际接收交换。跳过操作不等于删除上游负荷；不得跳过实际发生的工序，最终参考产品、质量和交付门保持不变。

## 6. 过程清单结构

清单报告层与过程计量层：各卡数量统一报告为每 1 m3 参考流，原始数量、同批次过程产出、物料状态和期间归属仍由采集协议及计算规则逐项保留。投入负荷先直接归属，并按第 7 节分配共用负荷；实物交接量和副产品量保留未分配物料账，随后分别除以同边界、同期间的正值最终参考产品数量，不能分配缩减质量平衡。中间交接不得重复计入最终输出。Range 使用各块明确声明的原有分母；过程输出基准的 Range 先在局部过程检查，不得直接与参考流基准量比较。需要换算 Range 时，用实测过程产出/最终参考数量比例以及仅适用于负荷的已审查归属系数换算上下限，保留原始限值与依据；不得假定该比例为 1。每种能源载体、肥料配方、物料及物质保持自身单位，不能相加不同单位。最终参考输出由合格批次数量除以自身得到；拒收物、包装和非参考等级不进入分母。

各卡的启用条件按林分、任务和批次记录判定；未使用与资料缺失分别标记。能源、肥料及其他通用投入按过程和需求类别保留汇总卡；具体能源品种、配方及供应规格在数据集建模时展开为经核实的实际交换，不要求逐规格新增 PCR 卡。产品状态、交接点或去向的独立边界要求仍须分别表达。燃料以质量、供电以电量、服务以其参考单位计量，体积换算保留有据密度；不得对 L、kg、kWh 或 h 使用同一数量范围。相邻节点的同批次输出／输入共用兼容物料身份，过程交付点保存在批次记录中。通用平台流可在其范围兼容且限定信息由前景记录完整承载时使用；不得仅因平台名称未列树种或采用质量计量就排除。
### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand_management` | 林分经营 | conditional | 仅当该操作实际位于前景内；外购已达该状态的相容原料时跳过已完成操作，并保留上游负荷。 | 在伐倒前形成可识别立木蓄积。 | 每参考 m3 对应的可采伐去皮立木 m3 与经营阶段 |
| `felling_removal` | 伐倒与移除 | conditional | 仅当该操作实际位于前景内；外购已达该状态的相容原料时跳过已完成操作，并保留上游负荷。 | 独立于林分经营移除树干，并交给集运过程。 | 每参考 m3 的伐倒树干去皮实积 |
| `forest_extraction` | 林内集运至林道 | conditional | 仅当该操作实际位于前景内；外购已达该状态的相容原料时跳过已完成操作，并保留上游负荷。 | 将伐倒木或短材从伐根转移至集材点，不运输至工厂。 | 每参考 m3 的集材点树干去皮实积 |
| `log_preparation` | 初次打枝与造材 | conditional | 仅当该操作实际位于前景内；外购已达该状态的相容原料时跳过已完成操作，并保留上游负荷。 | 将原树干制成测尺原木，并识别短截材、树皮和损失。 | 每参考 m3 的造材后原木去皮实积 |
| `grade_handover` | 分等与林道交接 | required | 对每根已造材原木按用途和等级分选。 | 分开锯材/单板参考原木、降等产品和处置拒收木。 | 每参考 m3、每等级及去向的去皮实积 |

两条路线按木段互斥：短材路线为伐倒 → 伐区打枝造材 → 集运已造材短材 → 林道分级；长材路线为伐倒 → 集运长树干 → 集材点打枝造材 → 林道分级。过程清单的展示顺序不代表两条路线均采用同一作业顺序。

### 过程：林分经营（`stand_management`）

本节点 `stand_management` 必须完成 `cp_direct_release_stand_management` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 造林用针叶苗木（`conifer_seedlings`）

仅在有造林或补植记录时启用。声明树种、种源、裸根／容器苗、苗龄／规格及苗圃交付点；不同苗木形态分别记录。将交付苗木归属相应林分阶段。没有栽植的天然更新批次不建立苗木交换.

- 选定流：针叶苗木；按树种、种源及苗木形态解析身份；UUID 未解析
- 流属性/单位：苗木数量 / item
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_at_stand_management`
- 来源：`fao-planted-forest-management`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：item/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 直播造林用针叶树种子（`conifer_seeds`）

仅在有直播记录时启用。记录树种、种源、纯度、水分、处理状态、交付种子质量和播种面积。购入苗木在苗圃使用的种子属于苗木上游，不在此重复计入.

- 选定流：直播用针叶树种子；按树种及处理状态解析身份；UUID 未解析
- 流属性/单位：供应状态种子质量 / kg
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_at_stand_management`
- 来源：`fao-planted-forest-management`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 林分实际施用肥料（`stand_fertilizer`）

仅在前景林分有施肥记录时启用。每种商品配方分别实例化交换；保留 N/P/K 成分、产品质量、日期和面积。养分质量单独计算，不作为肥料产品交换数量。购入苗木上游的苗圃施肥不重复计入.

- 选定流：记录配方的实际施用肥料产品；UUID 未解析
- 流属性/单位：商品肥料产品质量 / kg
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_at_stand_management`
- 来源：`fao-planted-forest-management`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 造林及抚育实际供应水（`stand_watering_water`）

仅在有前景浇灌计量记录时启用。记录水源、供应水等级／处理状态、仪表和泵送边界。供应产品水与直接取水是独立角色；发生直接取水时另按资源及环境介质建立记录。降雨不作为供应水.

- 选定流：按记录水源及处理状态确定的供应浇灌水；UUID 未解析
- 流属性/单位：供应水体积 / m3
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_at_stand_management`
- 来源：`fao-planted-forest-management`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：m3/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 实际植被控制或保护药剂（`stand_protection_product`）

仅在有化学植被控制或树木保护记录时启用。记录产品、活性物质及浓度、剂型、施用产品质量、日期和面积。逐配方解析身份；排放需另有物质及受纳介质证据。机械除草不代表存在药剂投入.

- 选定流：实际商品保护药剂配方；每种配方单独交换；UUID 未解析
- 流属性/单位：商品制剂质量 / kg
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_at_stand_management`
- 来源：`fao-planted-forest-management`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 实际造林及抚育作业——能源投入（`stand_energy`）

按本过程实际用能启用一张汇总卡，不在 PCR 中按燃料品种或供电规格拆卡。建模时依据记录展开各实际能源交换，分别核实 UUID、供应规格及计量单位；计入承包服务或现场发电的能源负担不得重复计算。

- 选定流：本过程实际燃料或电力供应；按实际能源展开，汇总卡不绑定单一 UUID
- 流属性/单位：实际燃料质量 / kg；电力 / kWh；原始 L 记录及质量换算依据分别保留
- 数量规则：逐种实际能源按记录的量值和单位归属本过程，再按下列基准归一；不直接相加 kg 与 kWh，不将缺失记录填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_at_stand_management`
- 来源：`fao-wood-harvesting`
- 数量范围：实际燃料质量的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)
- 数量范围：实际电力的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kWh/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)



###### 实际造林及抚育作业——声明服务边界的承包作业（`stand_service`）

任务：实际造林及抚育作业。仅在承包服务数据集以明确任务／设备的作业小时为参考时启用。记录供应商、任务、技术、服务单位及包含的燃料、设备和排放。服务单位不同时另建相应计量的任务卡。服务数据集已包含的组成不再通过独立燃料或机械投入重复计负担.

- 选定流：记录作业、设备及服务边界的承包服务；UUID 未解析
- 流属性/单位：实测设备作业时间 / h
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_stand_at_stand_management`
- 来源：`fao-wood-harvesting`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：h/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

#### 输出

##### 产品流

###### 可采伐针叶树立木（`standing_stemwood`）

可识别的立木生物存量交给伐倒过程；它不是已出售原木，也不产生额外生物碳吸收抵扣。

- 选定流：立木 `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；另保留同批次皮下实积 m3
- 数量规则：固定 Mass 交换以 kg 表示：使用同一可采树干木质存量的实测质量，或具有相同批次、含水率和树皮覆盖口径的实测质量／体积关系；不得套用默认密度。依据采前调查估算可采伐树干体积，并与实际采出量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stand_at_stand_management`
- 来源：`fao-forest-products-2020`
- 数量范围：暂定并行体积 QA 筛查；不是 kg 交换量上下限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：m3 去皮实积
  - 基准：每 1 m3 最终原木；仅筛查并行记录的皮下实积，固定流交换量仍为 kg
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：伐倒与移除（`felling_removal`）

本节点 `felling_removal` 必须完成 `cp_direct_release_felling_removal` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 进入采伐的立木（`standing_stemwood_input`）

同一批次立木进入伐倒过程；不另加外购木材负担。

- 选定流：立木 `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；另保留同批次皮下实积 m3
- 数量规则：固定 Mass 交换以 kg 表示：使用同一可采树干木质存量的实测质量，或具有相同批次、含水率和树皮覆盖口径的实测质量／体积关系；不得套用默认密度。匹配已记录的立木交接量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_stand_at_felling_removal`
- 来源：`fao-forest-products-2020`
- 数量范围：暂定并行体积 QA 筛查；不是 kg 交换量上下限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：m3 去皮实积
  - 基准：每 1 m3 最终原木；仅筛查并行记录的皮下实积，固定流交换量仍为 kg
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 伐倒——能源投入（`felling_energy`）

按本过程实际用能启用一张汇总卡，不在 PCR 中按燃料品种或供电规格拆卡。建模时依据记录展开各实际能源交换，分别核实 UUID、供应规格及计量单位；计入承包服务或现场发电的能源负担不得重复计算。

- 选定流：本过程实际燃料或电力供应；按实际能源展开，汇总卡不绑定单一 UUID
- 流属性/单位：实际燃料质量 / kg；电力 / kWh；原始 L 记录及质量换算依据分别保留
- 数量规则：逐种实际能源按记录的量值和单位归属本过程，再按下列基准归一；不直接相加 kg 与 kWh，不将缺失记录填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fuel_at_felling_removal`
- 来源：`fao-wood-harvesting`
- 数量范围：实际燃料质量的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)
- 数量范围：实际电力的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kWh/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)



###### 伐倒——设备实际消耗润滑剂（`felling_lubricant`）

任务：伐倒。仅在润滑剂用量与燃料分别记录时启用。明确链条油、液压油或发动机润滑油及配方，不同用途／产品分别实例化交换。体积记录按有据密度换算。保留泄漏、废油收集及接收记录，不假定排放或处置路线.

- 选定流：记录配方及用途的润滑剂；UUID 未解析
- 流属性/单位：润滑剂产品质量 / kg
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fuel_at_felling_removal`
- 来源：`fao-wood-harvesting`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

#### 输出

##### 产品流

###### 已伐倒针叶树树干（`felled_stems`）

伐区伐倒后立即形成的可利用针叶树干。短材路线交给伐区造材，长材路线交给集运。留林枝桠记入损失台账，已造材短材另行识别。

- 选定流：已伐倒针叶树树干；UUID 未解
- 流属性/单位：木材去皮实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- 数量规则：将可利用主干材伐倒清单与匹配的集材点接收、库存变化及来自同一主干材投入池的留存损失核对；未包含的枝条和树皮另建组分台账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_at_felling_removal`
- 来源：`fao-forest-products-2020`
- 数量范围：宽泛暂定伐倒树干筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：m3 去皮实积
  - 基准：每 1 m3 最终原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：林内集运至林道（`forest_extraction`）

本节点 `forest_extraction` 必须完成 `cp_direct_release_forest_extraction` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 进入集运的伐倒树干（`felled_stems_input`）

仅在集材点造材前的长材集运路线启用；按批次及声明的打枝状态匹配伐倒树干产出。短材路线改用 prepared_shortwood_input，使每段树干只进入集运一次。

- 选定流：已伐倒针叶树树干；UUID 未解
- 流属性/单位：木材去皮实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- 数量规则：匹配进入地面或索道集运的伐倒树干清单。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_at_forest_extraction`
- 来源：`fao-wood-harvesting`
- 数量范围：匹配集运投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：m3 去皮实积
  - 基准：每 1 m3 最终原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 进入集运的伐区已造材短材（`prepared_shortwood_input`）

仅在短材路线启用。接收伐区 prepared_logs 交付的已打枝截断、未分级针叶原木；记录同批次原木尺寸、皮下材积及伐区交付点，不再计入 felled_stems_input。

- 选定流：未分等已造材针叶树原木；UUID 未解
- 流属性/单位：木材去皮实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- 数量规则：在集运前匹配 prepared_logs 的伐区测尺票据及采伐批次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_landing_at_forest_extraction`
- 来源：`fao-forest-products-2020`
- 数量范围：伐区短材投入匹配筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：m3 去皮实积
  - 基准：每 1 m3 最终原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 伐区至集材点集运——能源投入（`extraction_energy`）

按本过程实际用能启用一张汇总卡，不在 PCR 中按燃料品种或供电规格拆卡。建模时依据记录展开各实际能源交换，分别核实 UUID、供应规格及计量单位；计入承包服务或现场发电的能源负担不得重复计算。

- 选定流：本过程实际燃料或电力供应；按实际能源展开，汇总卡不绑定单一 UUID
- 流属性/单位：实际燃料质量 / kg；电力 / kWh；原始 L 记录及质量换算依据分别保留
- 数量规则：逐种实际能源按记录的量值和单位归属本过程，再按下列基准归一；不直接相加 kg 与 kWh，不将缺失记录填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fuel_at_forest_extraction`
- 来源：`fao-wood-harvesting`
- 数量范围：实际燃料质量的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)
- 数量范围：实际电力的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kWh/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)


###### 伐区至集材点集运——设备实际消耗润滑剂（`extraction_lubricant`）

任务：伐区至集材点集运。仅在润滑剂用量与燃料分别记录时启用。明确链条油、液压油或发动机润滑油及配方，不同用途／产品分别实例化交换。体积记录按有据密度换算。保留泄漏、废油收集及接收记录，不假定排放或处置路线.

- 选定流：记录配方及用途的润滑剂；UUID 未解析
- 流属性/单位：润滑剂产品质量 / kg
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fuel_at_forest_extraction`
- 来源：`fao-wood-harvesting`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

#### 输出

##### 产品流

###### 集材点未分等树干（`landing_stems`）

仅在长材路线启用。未分级长树干抵达林道后尚需集材点打枝／造材，并进入 raw_stems_input。披露集运损坏及损失，不与已造材短材合并。

- 选定流：集材点未分等针叶树树干；UUID 未解
- 流属性/单位：木材去皮实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- 数量规则：测量集材点接收体积并按批次核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_landing_at_forest_extraction`
- 来源：`fao-forest-products-2020`
- 数量范围：宽泛暂定集材量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：m3 去皮实积
  - 基准：每 1 m3 最终原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 集运后抵达林道的已造材短材（`landing_shortwood`）

仅在短材路线启用。集运后在林道交付同批次已打枝截断、未分级针叶原木，进入 prepared_logs_input 分级，不再经过第二次造材。记录尺寸、含水／树皮口径及集运损失。

- 选定流：未分等已造材针叶树原木；UUID 未解
- 流属性/单位：木材去皮实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- 数量规则：按批次汇总实测林道短材接收量，并与伐区投入核对集运损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_landing_at_forest_extraction`
- 来源：`fao-forest-products-2020`
- 数量范围：林道短材接收量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：m3 去皮实积
  - 基准：每 1 m3 最终原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：初次打枝与造材（`log_preparation`）

本节点 `log_preparation` 必须完成 `cp_direct_release_log_preparation` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 实际路线位置的打枝及造材——能源投入（`preparation_energy`）

按本过程实际用能启用一张汇总卡，不在 PCR 中按燃料品种或供电规格拆卡。建模时依据记录展开各实际能源交换，分别核实 UUID、供应规格及计量单位；计入承包服务或现场发电的能源负担不得重复计算。

- 选定流：本过程实际燃料或电力供应；按实际能源展开，汇总卡不绑定单一 UUID
- 流属性/单位：实际燃料质量 / kg；电力 / kWh；原始 L 记录及质量换算依据分别保留
- 数量规则：逐种实际能源按记录的量值和单位归属本过程，再按下列基准归一；不直接相加 kg 与 kWh，不将缺失记录填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fuel_at_log_preparation`
- 来源：`fao-wood-harvesting`
- 数量范围：实际燃料质量的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)
- 数量范围：实际电力的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kWh/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)



###### 实际路线位置的打枝及造材——设备实际消耗润滑剂（`preparation_lubricant`）

任务：实际路线位置的打枝及造材。仅在润滑剂用量与燃料分别记录时启用。明确链条油、液压油或发动机润滑油及配方，不同用途／产品分别实例化交换。体积记录按有据密度换算。保留泄漏、废油收集及接收记录，不假定排放或处置路线.

- 选定流：记录配方及用途的润滑剂；UUID 未解析
- 流属性/单位：润滑剂产品质量 / kg
- 数量规则：按任务、批次和期间采集实测用量；先归属实际使用方再归一化。未发生的活动不启用；缺失记录不能填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fuel_at_log_preparation`
- 来源：`fao-wood-harvesting`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 进入初整的原树干（`raw_stems_input`）

短材路线在集运前于伐区接收 felled_stems；长材路线在集运后于林道接收 landing_stems。记录批次、路线、实际交付点、打枝状态及尺寸，每段树干只选一个造材位置。

- 选定流：待造材的未分等针叶树树干；UUID 未解
- 流属性/单位：木材去皮实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- 数量规则：匹配实际造材位置的来料树干量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_landing_at_log_preparation`
- 来源：`fao-wood-harvesting`
- 数量范围：宽泛暂定原树干筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：m3 去皮实积
  - 基准：每 1 m3 最终原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已造材针叶树原木（`prepared_logs`）

在实际造材交付点形成的已打枝截断、未分级针叶原木／短材。短材路线在伐区交给 prepared_shortwood_input 进行集运；长材路线在集材点直接交给 prepared_logs_input 分级。同一木段不在两个交付点重复计量。

- 选定流：未分等已造材针叶树原木；UUID 未解
- 流属性/单位：木材去皮实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- 数量规则：加总造材后所有去向的原木测尺体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_grades_at_log_preparation`
- 来源：`fao-forest-products-2020`
- 数量范围：宽泛暂定已造材原木筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：m3 去皮实积
  - 基准：每 1 m3 最终原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 分离后作为废物移出的树皮（`removed_bark`）

仅在此已识别物料作为废物实物移出至有记录的接收方／处理路线时启用。记录是否实际剥皮及其位置；树皮质量不等于皮下树干体积。留存物料记入库存／损失台账，可销售物料归入相应产品卡。成分未明或受污染物料在选 UUID 前须另建成分特定卡。

- 选定流：分离的未处理针叶树皮废物；UUID 未解析
- 流属性/单位：收到状态物料质量 / kg
- 数量规则：按接收方、批次及日期分别计量实物移出物流，保留含水／树皮口径，并与同批次物料台账核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_removed_waste_at_log_preparation`
- 来源：`fao-forest-products-2020`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：10000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 作为废物移出的木质截头料（`removed_woody_trim`）

仅在此已识别物料作为废物实物移出至有记录的接收方／处理路线时启用。将截头／木块与树皮、留在现场的枝桠分开。留存物料记入库存／损失台账，可销售物料归入相应产品卡。成分未明或受污染物料在选 UUID 前须另建成分特定卡。

- 选定流：未处理针叶木质截头废料；UUID 未解析
- 流属性/单位：皮下木材实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- 数量规则：按接收方、批次及日期分别计量实物移出物流，保留含水／树皮口径，并与同批次物料台账核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_removed_waste_at_log_preparation`
- 来源：`fao-forest-products-2020`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：20
  - 单位：m3/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

### 过程：分等与林道交接（`grade_handover`）

本节点 `grade_handover` 必须完成 `cp_direct_release_grade_handover` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 林道分选及待装车交付作业——能源投入（`grading_energy`）

按本过程实际用能启用一张汇总卡，不在 PCR 中按燃料品种或供电规格拆卡。建模时依据记录展开各实际能源交换，分别核实 UUID、供应规格及计量单位；计入承包服务或现场发电的能源负担不得重复计算。

- 选定流：本过程实际燃料或电力供应；按实际能源展开，汇总卡不绑定单一 UUID
- 流属性/单位：实际燃料质量 / kg；电力 / kWh；原始 L 记录及质量换算依据分别保留
- 数量规则：逐种实际能源按记录的量值和单位归属本过程，再按下列基准归一；不直接相加 kg 与 kWh，不将缺失记录填作零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_fuel_at_grade_handover`
- 来源：`fao-wood-harvesting`
- 数量范围：实际燃料质量的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)
- 数量范围：实际电力的暂定 QA 筛查
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：1000
  - 单位：kWh/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。；分别用于每种实际能源的对应单位，不是混合能源总量范围
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)


###### 进入分等的已造材原木（`prepared_logs_input`）

短材路线接收集运后的 landing_shortwood，长材路线直接接收集材点造材后的 prepared_logs。按实际路线匹配同批次、原木尺寸及皮下材积，再按互斥预定用途分级。

- 选定流：未分等已造材针叶树原木；UUID 未解
- 流属性/单位：木材去皮实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- 数量规则：匹配已造材原木交接与逐根分等清单。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_grades_at_grade_handover`
- 来源：`fao-forest-products-2020`
- 数量范围：宽泛暂定分等投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：m3 去皮实积
  - 基准：每 1 m3 最终原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 合格锯材或单板原木（`saw_veneer_log`）

拟纵向锯切或旋切、刨切的合格针叶树原木，在林道集材点装车待运状态交接。

- 选定流：林道集材点针叶树锯材或单板原木；UUID 未解
- 流属性/单位：木材去皮实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
计量说明：测尺合格等级，随后将本参考输出归一为恰好 1 m3。

- 数量规则：1 m3
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_grades_at_grade_handover`
- 来源：`unsd-cpc-03111`; `fao-forest-products-2020`
- 数量范围：参考归一化恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：m3 去皮实积
  - 基准：每 1 m3 参考原木
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-normalization-identity`

###### 林道验收的针叶纸浆／人造板用圆木（`coproduct_pulp_panel`）

仅在同一采伐批次实际形成并分别销售此造材时启用。记录针叶树种、原木形态、预定用途、买方等级、树皮／水分、实测数量及林道接收方。每根原木只属于一个等级／用途和一次最终交付；以其他用途出售的剔除材归入对应产品。按实际产品限定解析具体流；任何 kg/m3 换算须有同批次证据。

- 选定流：林道验收的针叶纸浆／人造板用圆木；UUID 未解析
- 流属性/单位：皮下木材实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3；有记录时保留质量及水分
- 数量规则：分别计量此造材的未分配实物总量 Q_B，仅以同一边界和期间的正值最终参考数量 R 归一化，q_B = Q_B/R；不得对共产品实物量乘共享负荷分配系数。共享环境负荷单独归属；只有记录确认无该产出时才记零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_grades_at_grade_handover`
- 来源：`fao-forest-products-2020`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：20
  - 单位：m3/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 林道交付的其他用途未加工针叶工业圆木（`coproduct_other_industrial`）

仅在同一采伐批次实际形成并分别销售此造材时启用。记录针叶树种、原木形态、预定用途、买方等级、树皮／水分、实测数量及林道接收方。每根原木只属于一个等级／用途和一次最终交付；以其他用途出售的剔除材归入对应产品。此已核实 Mass 流以 kg 作为交换数量；体积记录仅按实测同批次 kg/m3 换算。

- 选定流：针叶圆木、其他 `3dbbedd2-fb9d-478e-a4b4-4a76a4d97804`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；另记匹配的皮下木材实积
- 数量规则：分别计量此造材的未分配实物总量 Q_B，仅以同一边界和期间的正值最终参考数量 R 归一化，q_B = Q_B/R；不得对共产品实物量乘共享负荷分配系数。共享环境负荷单独归属；只有记录确认无该产出时才记零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_grades_at_grade_handover`
- 来源：`fao-forest-products-2020`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：10000
  - 单位：kg/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 林道销售用于能源的针叶薪材原木（`coproduct_fuelwood`）

仅在同一采伐批次实际形成并分别销售此造材时启用。记录针叶树种、原木形态、预定用途、买方等级、树皮／水分、实测数量及林道接收方。每根原木只属于一个等级／用途和一次最终交付；以其他用途出售的剔除材归入对应产品。按实际产品限定解析具体流；任何 kg/m3 换算须有同批次证据。

- 选定流：林道销售用于能源的针叶薪材原木；UUID 未解析
- 流属性/单位：皮下木材实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3；有记录时保留质量及水分
- 数量规则：分别计量此造材的未分配实物总量 Q_B，仅以同一边界和期间的正值最终参考数量 R 归一化，q_B = Q_B/R；不得对共产品实物量乘共享负荷分配系数。共享环境负荷单独归属；只有记录确认无该产出时才记零。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_grades_at_grade_handover`
- 来源：`fao-forest-products-2020`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：20
  - 单位：m3/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 剔除后作为废物移出的未处理原木（`rejected_wood`）

仅在此已识别物料作为废物实物移出至有记录的接收方／处理路线时启用。此卡为分级后剔除的整根原木／短材，不含树皮、造材截头料或可销售薪材。留存物料记入库存／损失台账，可销售物料归入相应产品卡。成分未明或受污染物料在选 UUID 前须另建成分特定卡。

- 选定流：未处理针叶剔除原木废物；UUID 未解析
- 流属性/单位：皮下木材实积 [体积属性 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`] / m3
- 数量规则：按接收方、批次及日期分别计量实物移出物流，保留含水／树皮口径，并与同批次物料台账核对。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 m3 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_removed_waste_at_grade_handover`
- 来源：`fao-forest-products-2020`
- 数量范围：暂定非负筛查；非默认投入／产出率
  - 范围角色：QA 校验 (`qa_guardrail`)
  - 下限：0
  - 上限：20
  - 单位：m3/m3
  - 基准：1 m3 皮下实积锯材／单板原木参考产出；区间仅用于调查异常，不替代实测或定义普遍用量。
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_output_set` | 分等与共用采伐作业 | 统计锯材及单板原木等级、纸浆/板材原木、其他工业原木以及有销售时的薪材；每个去向只对应一次交接和实测去皮实积。拒收废物与林内保留枝丫须区别于预定产品。 | `fao-forest-products-2020` |
| `allocation_shared_activity` | 共用林分、伐倒、集运和集材点负担 | 可行时将直接计量的作业分给对应等级；其余共同采伐作业按共同 gate 各销售木材输出的实测去皮实积分配。不采用避免产品抵扣，也不向林内保留枝丫分摊负担。 |  |
| `allocation_period_assets` | 林分阶段、道路、集材点和机器 | 按林分及年份索引造林、抚育、间伐、采伐。依据实际面积、机器小时、道路服务或测量产出，先将共用资产分给受益批次，再按等级分摊。未来采伐受益份额仅结转其实际部分，不重复计同一负担。 |  |
| `physical_ledger_before_allocation` | 实物台账与分配后负荷 | 原始物料平衡、交接和共产品数量均保留未分配实物值：q_B = Q_B/R。共享负荷单独按本 PCR 的分配规则计算 b_ref = B_shared * a_ref/R；直接负荷直接归属，期间与产出份额各只应用一次。R 是选定的最终参考输出量，排除内部转移。不得把负荷系数 a_ref 乘到原始共产品或交接数量上；分配后单产品过程投影须与未分配的整包物料台账明确区分。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand_at_stand_management` | `stand_management` | 造林抚育投入和立木存量 | 林分计划、作业和调查记录 | stand_id; area; species; origin; age/phase; dated material inputs; thinning; standing volume; harvest year ；种苗树种／形态；肥料成分；药剂活性成分／浓度；水源／处理；供应规格；启用／缺失标记；实际任务／服务边界；燃料等级／密度；电压／组合；任务工时；同批次质量／体积样本；实测密度；水分；树皮覆盖口径；质量估算／称量方法；换算不确定度; event_id; transfer_id; counterparty_process_id | 林业调查及物料领用记录；原始汇总操作：将实际分阶段投入归属采伐批次，再按最终参考体积归一；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | item; kg; L; m3; kWh; h; ha; year | 每次林分作业及采伐批次 | 可归属造林直至采伐 | 经营小班 | 每 1 m3 参考流 | 经营计划、样地、发票和采伐许可 |
| `cp_stand_at_felling_removal` | `felling_removal` | 造林抚育投入和立木存量 | 林分计划、作业和调查记录 | stand_id; area; species; origin; age/phase; dated material inputs; thinning; standing volume; harvest year ；种苗树种／形态；肥料成分；药剂活性成分／浓度；水源／处理；供应规格；启用／缺失标记；实际任务／服务边界；燃料等级／密度；电压／组合；任务工时；同批次质量／体积样本；实测密度；水分；树皮覆盖口径；质量估算／称量方法；换算不确定度; event_id; transfer_id; counterparty_process_id | 林业调查及物料领用记录；原始汇总操作：将实际分阶段投入归属采伐批次，再按最终参考体积归一；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | item; kg; L; m3; kWh; h; ha; year | 每次林分作业及采伐批次 | 可归属造林直至采伐 | 经营小班 | 每 1 m3 参考流 | 经营计划、样地、发票和采伐许可 |
| `cp_fuel_at_felling_removal` | `felling_removal` | 机器燃料和共用服务 | 燃料领用及机器小时日志 | machine_id; fuel_type; fuel_L; hours; task; stand_id; lot_id; route_distance ；燃料等级／密度；电压／供应组合；润滑用途／配方；承包边界；启用／缺失标记; event_id; transfer_id; counterparty_process_id | 燃料仪表或经核对的领料与班次日志；原始汇总操作：按任务分配直接燃料，按记录小时分配共用燃料；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg; L; kWh; h; km | 每班次/批次 | 完整采伐作业 | 伐倒及集运机器 | 每 1 m3 参考流 | 仪表校准、发票、班次日志 |
| `cp_fuel_at_forest_extraction` | `forest_extraction` | 机器燃料和共用服务 | 燃料领用及机器小时日志 | machine_id; fuel_type; fuel_L; hours; task; stand_id; lot_id; route_distance ；燃料等级／密度；电压／供应组合；润滑用途／配方；承包边界；启用／缺失标记; event_id; transfer_id; counterparty_process_id | 燃料仪表或经核对的领料与班次日志；原始汇总操作：按任务分配直接燃料，按记录小时分配共用燃料；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg; L; kWh; h; km | 每班次/批次 | 完整采伐作业 | 伐倒及集运机器 | 每 1 m3 参考流 | 仪表校准、发票、班次日志 |
| `cp_fuel_at_log_preparation` | `log_preparation` | 机器燃料和共用服务 | 燃料领用及机器小时日志 | machine_id; fuel_type; fuel_L; hours; task; stand_id; lot_id; route_distance ；燃料等级／密度；电压／供应组合；润滑用途／配方；承包边界；启用／缺失标记; event_id; transfer_id; counterparty_process_id | 燃料仪表或经核对的领料与班次日志；原始汇总操作：按任务分配直接燃料，按记录小时分配共用燃料；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg; L; kWh; h; km | 每班次/批次 | 完整采伐作业 | 伐倒及集运机器 | 每 1 m3 参考流 | 仪表校准、发票、班次日志 |
| `cp_fuel_at_grade_handover` | `grade_handover` | 机器燃料和共用服务 | 燃料领用及机器小时日志 | machine_id; fuel_type; fuel_L; hours; task; stand_id; lot_id; route_distance ；燃料等级／密度；电压／供应组合；润滑用途／配方；承包边界；启用／缺失标记; event_id; transfer_id; counterparty_process_id | 燃料仪表或经核对的领料与班次日志；原始汇总操作：按任务分配直接燃料，按记录小时分配共用燃料；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg; L; kWh; h; km | 每班次/批次 | 完整采伐作业 | 伐倒及集运机器 | 每 1 m3 参考流 | 仪表校准、发票、班次日志 |
| `cp_harvest_at_felling_removal` | `felling_removal` | 伐倒树干与林内保留枝丫 | 伐倒及采出清单 | lot_id; species; pre-harvest volume; felled volume; residual/retained volume; bark method; component_pool; merchantable_stem_definition; branch_bark_inclusion; opening_closing_stock; retained_component; event_id; transfer_id; counterparty_process_id | 按主干材、枝条和树皮分别核对；先标明每个残余物是否来自已计量投入池，未测组分保留缺口，不用平衡差倒算来源。采前样地调查与采后清单；原始汇总操作：核对立木、伐倒和保留数量；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | m3 去皮实积 | 每批次 | 伐倒事件 | 采伐林分 | 每 1 m3 参考流 | 测尺单、样地方法与现场检查 |
| `cp_harvest_at_forest_extraction` | `forest_extraction` | 伐倒树干与林内保留枝丫 | 伐倒及采出清单 | lot_id; species; pre-harvest volume; felled volume; residual/retained volume; bark method; component_pool; merchantable_stem_definition; branch_bark_inclusion; opening_closing_stock; retained_component; event_id; transfer_id; counterparty_process_id | 按主干材、枝条和树皮分别核对；先标明每个残余物是否来自已计量投入池，未测组分保留缺口，不用平衡差倒算来源。采前样地调查与采后清单；原始汇总操作：核对立木、伐倒和保留数量；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | m3 去皮实积 | 每批次 | 伐倒事件 | 采伐林分 | 每 1 m3 参考流 | 测尺单、样地方法与现场检查 |
| `cp_landing_at_forest_extraction` | `forest_extraction` | 集材点及初整接收量 | 集材点原木测尺 | lot_id; route; bucking_position; log_length; diameters; bark factor; moisture; receipt volume; event_id; transfer_id; counterparty_process_id | 经校准的测尺和批次统计；原始汇总操作：按统一计量约定加总并核对交接；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | m3 去皮实积；必要时 kg | 每根原木/批次 | 伐根至集材点 | 林道集材点或伐根短材点 | 每 1 m3 参考流 | 测尺校准与换算工作表 |
| `cp_landing_at_log_preparation` | `log_preparation` | 集材点及初整接收量 | 集材点原木测尺 | lot_id; route; bucking_position; log_length; diameters; bark factor; moisture; receipt volume; event_id; transfer_id; counterparty_process_id | 经校准的测尺和批次统计；原始汇总操作：按统一计量约定加总并核对交接；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | m3 去皮实积；必要时 kg | 每根原木/批次 | 伐根至集材点 | 林道集材点或伐根短材点 | 每 1 m3 参考流 | 测尺校准与换算工作表 |
| `cp_grades_at_log_preparation` | `log_preparation` | 已造材原木与销售等级 | 等级单和发运记录 | lot_id; log_id; species; dimensions; grade; intended_use; destination; volume; buyer; handover_time; event_id; transfer_id; counterparty_process_id | 原木扫描/等级单及发运单；原始汇总操作：按各去向加总核对，合格锯材/单板等级归一为 1 m3；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | m3 去皮实积 | 每根原木/批次 | 造材至林道交接 | 林道集材点 | 每 1 m3 参考流 | 等级规格、测尺单和签收单 |
| `cp_grades_at_grade_handover` | `grade_handover` | 已造材原木与销售等级 | 等级单和发运记录 | lot_id; log_id; species; dimensions; grade; intended_use; destination; volume; buyer; handover_time; event_id; transfer_id; counterparty_process_id | 原木扫描/等级单及发运单；原始汇总操作：按各去向加总核对，合格锯材/单板等级归一为 1 m3；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | m3 去皮实积 | 每根原木/批次 | 造材至林道交接 | 林道集材点 | 每 1 m3 参考流 | 等级规格、测尺单和签收单 |
| `cp_residues_at_log_preparation` | `log_preparation` | 树皮、短截材、拒收木和林内保留枝丫 | 残余物及接收方记录 | residue_type; mass_or_volume; bark_basis; retained_or_removed; destination; treatment; event_id; transfer_id; counterparty_process_id | 地磅、测尺或现场调查；原始汇总操作：分开销售、外运废物和保留物料；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg 树皮；m3 木材 | 每批次 | 采伐至交接 | 林分和集材点 | 每 1 m3 参考流 | 接收票据及现场调查 |
| `cp_residues_at_grade_handover` | `grade_handover` | 树皮、短截材、拒收木和林内保留枝丫 | 残余物及接收方记录 | residue_type; mass_or_volume; bark_basis; retained_or_removed; destination; treatment; event_id; transfer_id; counterparty_process_id | 地磅、测尺或现场调查；原始汇总操作：分开销售、外运废物和保留物料；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg 树皮；m3 木材 | 每批次 | 采伐至交接 | 林分和集材点 | 每 1 m3 参考流 | 接收票据及现场调查 |
| `cp_removed_waste_at_log_preparation` | `log_preparation` | 分别移出的木质／树皮废物 | 称量、筛分及接收票据 | 批次；物料；是否处理／污染；质量／体积；含水；树皮；筛孔；接收方；处理；日期; event_id; transfer_id; counterparty_process_id | 逐物流称量／测尺并核对接收单；原始汇总操作：分开产品、回流、移出废物和留存；按相同计量口径核对；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg; m3 | 每批及每次移出 | 采伐至林道交付 | 实际发生节点 | 每 1 m3 参考流 | 校准、成分／含水检测及接收票据 |
| `cp_removed_waste_at_grade_handover` | `grade_handover` | 分别移出的木质／树皮废物 | 称量、筛分及接收票据 | 批次；物料；是否处理／污染；质量／体积；含水；树皮；筛孔；接收方；处理；日期; event_id; transfer_id; counterparty_process_id | 逐物流称量／测尺并核对接收单；原始汇总操作：分开产品、回流、移出废物和留存；按相同计量口径核对；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。；只采集本节点事件；交接双方按 transfer_id 配对，系统汇总抵销内部转移。共享事件仅归属一个节点，不重复计量。 | kg; m3 | 每批及每次移出 | 采伐至林道交付 | 实际发生节点 | 每 1 m3 参考流 | 校准、成分／含水检测及接收票据 |
| `cp_direct_release_stand_management` | `stand_management` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 m3 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_felling_removal` | `felling_removal` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 m3 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_forest_extraction` | `forest_extraction` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 m3 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_log_preparation` | `log_preparation` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 m3 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_grade_handover` | `grade_handover` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 m3 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_underbark` | 每个木材流 | 汇总之前，按有文件记录的经校准测尺公式和本地实测树皮修正计算；不得采用通用树皮百分比。 | 长度、直径、树皮、测尺方法 | 各批次和等级的去皮实积 m3 | `fao-forest-products-2020` |
| `calc_wood_balance` | 采伐至分等 | 对匹配的可利用主干材池，V_open + V_felled + V_purchased = V_marketed + V_removed_stem_waste + V_retained_stem_loss + V_close + delta，采用同批皮下实积。V_purchased 是从所核对前景系统外实际接收的已采伐/整备木料，不含已在 V_felled 计入的自营木料或内部移交；仅外购路线可令 V_felled=0。delta 仅为披露并调查的有符号未解释计量差，已知库存变化不得藏入 delta，也不得推定排放。留存损失须来源于该投入池；枝条、树皮、特殊根/瘤材及其他未含组分各建同口径实物台账。整包汇总抵消配对内部移交一次。 | 分组分伐倒与外购接收记录；期初/期末库存；各等级与损失来源；配对测尺记录 | 按批次木材体积平衡 | `fao-forest-products-2020` |
| `calc_reference` | 实物台账与环境负荷的最终参考归一化 | R 为同一批次、边界和期间的合格锯材/单板原木皮下实积（正值 m3），降等共产品和内部转移不进入分母。未分配物料、转移及共产品总量 Q 按 q_phys = Q/R 报告；仅对环境负荷 B 先完成一次有据直接、期间、产出和资产归属，再按 b_ref = B_attributed/R 报告。物理台账不乘负荷分配系数；已按最终参考数量报告的值不得再次相除。 | 未分配实物台账 Q；环境负荷 B；有据归属；匹配参考数量 R | 每 1 m3 参考输出的数量 | `reference-normalization-identity` |
| `calc_shared` | 经营和共用资产 | 依据实际服务驱动量，将有日期的服务一次归属受益林分/批次，再按去皮实积在批次共同木材等级中分摊。 | 有日期作业、服务驱动量、批次、等级 | 归属参考等级的作业量 |  |
| `calculate_direct_release_ledger` | `stand_management`; `felling_removal`; `forest_extraction`; `log_preparation`; `grade_handover` | 每一唯一事件、物质和介质的原始释放量 E 取实测值，或按已引用适用方法从活动量 A 与同口径因子 EF 计算；只有方法确实为简单因子模型时才用 E = A * EF，先验证单位及治理边界。不同物质或介质不相加；原始释放台账保持未分配。对归属后的负荷总量仅除以匹配的正值最终参考数量 R 一次；已有最终参考强度不再归一化，共用事件仅分配一次。未解释物料差不自动转成排放，缺因子不等于零。 | cp_direct_release_stand_management; cp_direct_release_felling_removal; cp_direct_release_forest_extraction; cp_direct_release_log_preparation; cp_direct_release_grade_handover；现有排放卡；供应商覆盖；参考数量 | 按节点/物质/介质分列的原始与归属量及未解决缺口 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_log_trace` | 每根原木及等级 | 将林分、采伐批次、树种、等级、预定用途与去向连接至发运记录。 | 采伐许可、测尺单及发运单 |
| `dq_scale` | 木材体积 | 声明测尺方法、校准、树皮换算、含水及尺寸约定；标记不一致单位。 | 测尺及换算工作表 |
| `dq_route` | 采伐路线 | 声明集运方法和造材位置；每项机器作业及输出只计一次。 | 机器及作业日志 |
| `dq_period` | 林分及基础设施 | 记录造林、抚育、采伐阶段及服务年份，并披露缺失历史记录。 | 经营及道路使用日志 |
| `dq_balance` | 投入、等级和残余物 | 核对所有销售及保留去向，披露体积残差或缺失燃料数据。 | 等级统计及燃料核对 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product` | 参考输出 | 要求针叶树种、锯材/单板用途、未加工原木状态和林道 gate；锯材、单板片、纸浆/其他/薪材原木不能作为参考产品。 | `unsd-cpc-03111`; `fao-forest-products-2020` |
| `validate_unit` | 参考及各木材等级 | 参考量要求 1 m3 去皮实积；带皮、质量或堆积体积记录须有文件记录的本地换算。 | `fao-forest-products-2020` |
| `validate_route` | 过程图 | 要求采伐和集运系统有证据、每段树干仅一个造材位置，且不重复计集运或初整负担。 | `fao-wood-harvesting` |
| `validate_destinations` | 集材点等级统计 | 存在的锯材/单板、纸浆/板材、其他工业、薪材或拒收流均须有一个等级、去向、交接点与去皮实积。 | `fao-forest-products-2020` |
| `validate_rework` | 降等及拒收木 | 不默认存在返工回路。如果实际批次重新分等或截断，只记录一次该作业，且不得把同一早期拒收状态同时计作合格输出。 |  |
| `validate_attribution` | 共用和跨期作业 | 核实阶段至批次、资产至使用者的驱动量，先直接分配再按共同体积分摊；保留枝丫不分配负担，也不重复跨批次、期间或等级计量。 |  |
| `validate_uuid` | 最终 TIDAS 交换 | 过程投影前，每个具体交换须解析成一个已核实且流类型、方向、属性、单位及用途匹配的 UUID；未解语义卡不是固定绑定。 |  |
| `validate_card_activation_units` | 全部细化卡 | 核实每张卡启用条件及实际物料／配方／任务／供应规格；资料缺失不得记作零。各卡数量和 Range 采用单一相容属性／单位；保留燃料密度和木材质量／体积转换证据。核对承包服务已包含组成，防止与燃料、设备及排放重复计负担。 | `fao-wood-harvesting` |
| `validate_direct_release_coverage` | `stand_management`; `felling_removal`; `forest_extraction`; `log_preparation`; `grade_handover` | 对每个实际启用节点，以活动清单逐项核对 cp_direct_release_stand_management; cp_direct_release_felling_removal; cp_direct_release_forest_extraction; cp_direct_release_log_preparation; cp_direct_release_grade_handover：记录应为有量的具体基本流、证据充分的上游服务覆盖，或有证据的无相关活动。缺失/不明不是零，须作为数据包完整性阻断项。检查每种实际物质及介质的量、方法因子单位、具体 UUID 和既有卡/服务覆盖，防止漏排或重复；空分组、购买电力的上游排放或其他节点的单一 CO2 卡不能代替本节点的现场释放核对。共享资产服务不得产生重复物理排放事件。 |  |

- 按入场状态逐节点核对 required/conditional 激活与上游覆盖；外购已达状态原料不得重复此前生长、采收或整理，分类相同不能替代状态及门点匹配。

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 针叶树锯材/单板原木从采伐至林道装车待运的前景数据包 |
| downstream_use | gate 与等级相符时，作为锯材或单板生产投入的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 声明地区、等级与去皮体积基准的未加工针叶树锯材/单板原木供应 |
| excluded_use | 无附加数据集时，纸浆/板材用材、电杆、薪材、非针叶树原木、锯切、旋切以及集材点后运输 |
| required_metadata | 树种/林分；经营阶段；地区/年份；采伐系统；造材位置；等级/去向；gate；树皮换算；产出分配；残余物命运 |
| required_quality_disclosure | 实测/估算体积及燃料；树皮证据；平衡残差；共用资产驱动量；缺失阶段；未解 UUID 及暂定范围 |
| update_trigger | 产品用途、森林路线、测尺、经营制度、分配依据、地区或平台核实的流身份发生变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-03111` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03111 | 锯材/单板原木官方边界 |
| `fao-forest-products-2020` | official_guidance | https://www.fao.org/forestry-fao/7800-0944787ecbf6036088182f841ab15fe42.pdf | 圆木类别、排除项、去皮实积单位 |
| `fao-wood-harvesting` | official_guidance | https://www.fao.org/sustainable-forest-management-toolbox/modules/wood-harvesting/2/en?tabInx=0 | 伐倒、集运、集材点及路线区别 |
| `reference-normalization-identity` | method_factor | PCR 恒等关系：参考输出除以自身等于每 1 m3 参考产品的 1 m3 | 参考归一化 |
| `fao-planted-forest-management` | official_guidance | https://www.fao.org/sustainable-forest-management-toolbox/modules/management-of-planted-forests/1/en?tabInx=1; https://www.fao.org/4/AC601E/ac601e03.htm | 有条件的造林种苗、施肥、植被保护及浇灌投入；不规定通用施用率 |
