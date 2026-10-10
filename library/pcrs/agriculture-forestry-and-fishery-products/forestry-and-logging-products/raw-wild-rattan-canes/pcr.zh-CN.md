---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.raw-wild-rattan-canes
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 新鲜野生原藤条

## 1. 范围与适用性

本PCR用于为从未经栽培森林采集、在真实初级采集者发运地点交付的新鲜成熟圆藤茎生成前景清单。向上追溯以这一验收实体输出为起点，而非以整个分类下的植物材料列表为起点。仅在保持表皮完整时允许去除松附叶鞘/刺及实际定尺截断。需证实物种、尺寸、来源、水分及处理历史。

排除人工林/栽培藤条、有意干燥/调湿干燥、油处理／热处理（curing）、熏蒸、表皮刮除、剥皮、劈分、弯曲/加工/编织制品及家具。竹、芦苇、秸秆及其他填充材料不属于本产品。历史路线说明仅支持可能发生的作业，不提供通用数量、现行采集合法性或可持续采收声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.raw-wild-rattan-canes |
| classification_refs | CPC 3.0 03252；拟采用narrower语义覆盖 |
| covered_products | 初级采集者发运时的新鲜成熟野生圆藤茎，表皮完整，明确实际去叶鞘及定尺整理情况 |
| excluded_products | 栽培茎；干燥、处理（curing）、熏蒸、刮表皮、剥皮或劈分茎；加工制品；其他植物材料 |
| representative_product | 完整表皮的新鲜野生原藤条 |
| production_route | 野生茎采收/移除；实际初步去叶鞘/定尺整理；分级验收；条件性鲜态暂存；成束及采集者发运 |
| market_state | 新鲜圆茎原料，不是已加工藤条或编结制品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 真实初级采集者发运时验收的完整表皮新鲜野生圆藤茎原料 |
| How much | 1千克净验收鲜茎质量，排除绑扎物、包装、异物及已去除叶鞘 |
| How well | 声明物种、成熟来源证据、买方验收、直径/可用长度、水分、完整表皮及实际缺陷 |
| How long or cycle | 声明采集作业期及报告期；实际采收/整理/暂存/发运日期和跨期库存；不假定轮伐期或保质期 |
| reference_flow_link | `rattan_dispatch` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完整表皮的新鲜野生原藤条 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物物种/混合物；未经栽培森林来源及地点；成熟证据；茎/表皮/叶鞘状态；直径及可用长度等级；买方等级及缺陷；鲜态水分方法/时间/基准；采收与发运日期；实际采集者交付地点/接收方；净质量与扣皮方法；处理历史；批次及贡献场址；归属期 |

在前景元数据或等效数据包说明中声明所有必需限定信息。缺少限定信息是数据缺口，不是平均默认值。净鲜质量不等于干质量、成束毛重或线性长度，也不证明等级间功能等效。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 依据cp_dispatch使用经校准的称重及扣皮记录采集净验收鲜茎质量；将可归属批次交换归一化到每 1 kg 参考流。 |
| `fresh_basis` | 所有茎交接 | 质量 | kg | 保留同期鲜质量及水分观测；不得以干量或毛量替代。核对实测质量变化、叶鞘/茎移除、库存及损失，不强制所有交接等于最终参考量。 |
| `count_length_conversion` | 数量、长度或成束来源记录 | 质量 | kg | 依据cp_dispatch将来源数量/长度关联到同一批次的实测净验收质量；不得假定每根或每米重量，不得按名义束数作分母。 |
| `native_exchange_units` | 条件性物料、能源、服务及释放卡 | 各具体核实属性 | 本征单位 | 保留实际物质/载能体/服务单位及记录的换算；不加总不同分子单位，不将能源和运输强制改为千克。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明的未经栽培森林来源中的成熟藤；或已有可追溯来源移除及上游采收一次性独立证据的采收批次 |
| starting_condition_role | 自采的来源接口，或明确的购入产品递归截断点及匹配上游采收覆盖 |
| product_classification_scope | 仅新鲜圆野生藤茎；不是整个03252类别，也不包括栽培/已加工藤条 |
| recursive_input_rule | 购入的同类采收/整理投入为产品交接，需匹配上游数据，不是当前场址的第二次天然移除；披露上游截断、覆盖、身份及损失 |
| upstream_dataset_requirement | 匹配物种/来源/鲜态/交付点/数量基准的供给方采收数据，加实际投入、能源、运输及资产支持数据集；缺口阻止最终定稿 |
| disclosure | 场址及来源单元，报告期/作业期，实际可选作业/绕过，所有权及交付，库存/退回，共享资产，其他输出，分配及排除项 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `wild_source_ownership` | 来源与采收 | 自采在同一节点纳入茎资源移除与采收，与后续去叶鞘/定尺整理独立。不得在第二节点重复移除、编造栽培或将购入藤条记为基本流投入。 | fao-rattan-resource; fao-thailand-rattan-route |
| `state_limit` | 每批与交付 | 保持表皮完整；单独记录去叶鞘。刮除表皮、处理（curing）、化学保存、熏蒸、有意干燥或劈分应触发排除状态退出，不得改名为验收鲜藤。 | fao-rattan-glossary; fao-rattan-resource |
| `actual_route` | 整理、分级、暂存、发运 | 从净发运质量向上追溯实际交接；整理/暂存可有证据地绕过。相同鲜态实体产品不必在每个内部节点获得新身份。真实交付点相容性仍需来源/交接证据。 | fao-thailand-rattan-route |
| `loss_and_destinations` | 所有物料流动 | 区分验收等级、另售降级品、返工循环、在来源地回归的附带天然残余、管理丢弃及实测直接释放；记录所有实际去向及库存差。 | fao-rattan-resource |
| `site_period_assets` | 共同边界 | 列明贡献来源场址、采集者单元、采收/暂存/发运期及共享工具、车辆或遮护服务。各实测贡献仅归属一次；披露替换、期初/期末库存及缺失覆盖。 | |
| `dispatch_cut` | 最终交付 | 纳入实际采集者侧装载/成束及边界内转运；排除下游运输、超出明确允许的去叶鞘/刺及定尺截断的加工、制造、零售使用及处置。包装不属于净茎参考质量。 | fao-thailand-rattan-route |
| `boundary_direct_release_coverage` | `wild_harvest`; `primary_prepare`; `grade_accept`; `fresh_hold`; `collector_dispatch` | 逐一核对所有实际启用节点的现场燃烧、实际施用及逸散/泄漏，按 cp_direct_release_wild_harvest; cp_direct_release_primary_prepare; cp_direct_release_grade_accept; cp_direct_release_fresh_hold; cp_direct_release_collector_dispatch 建立唯一活动—物质—接收介质记录。购买燃料或化学品的上游数据不能替代其现场使用排放；对供应商服务已包含的同一活动须核实覆盖并避免重复。无活动须有证据，缺失数据不能默认为零。此要求不扩大原有产品门或下游使用边界，也不假定任何燃烧、施肥、药剂或设备必然发生。 |  |

按实际入场状态与所有权选择路线。外购已采收、已集运、已整理或已分级的相容原料，可在真实接收节点进入；此前已完成的操作不得再列为强制前景，也不得再投入立木或生物资源来重复来源。接收卡须记录实际物料、等级、湿/干基准、接收门、上游数据集及过程覆盖；无相应接收卡时新增实际接收交换。跳过操作不等于删除上游负荷；不得跳过实际发生的工序，最终参考产品、质量和交付门保持不变。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `wild_harvest` | 野生林地采收 | conditional | 在声明的未经栽培森林中实际自营移除/采收时纳入。外购已采收茎材在实际接收节点进入，核实野生来源及匹配上游移除/采收覆盖，不重复天然移除。 | 新鲜采收圆茎交予初步整理；采收负责移除，不负责整理。 | 每 1 kg 参考流；实际内部数量 |
| `primary_prepare` | 初步去叶鞘与定尺整理 | `conditional` | 实际去除松附叶鞘及刺或定尺截断，且不去除表皮。 | 整理后的新鲜圆茎交予分级；已满足要求时绕过。 | 每 1 kg 参考流；实际内部数量 |
| `grade_accept` | 分级与去向验收 | `required` | 每批均有声明的买方验收及等级/去向记录。 | 区分验收茎、降级销售、不合格退回或丢弃。 | 每 1 kg 参考流；实际内部数量 |
| `fresh_hold` | 鲜态保护性暂存 | `conditional` | 实际进行有边界的暂存/保护，不进行有意干燥、处理（curing）或化学处理。 | 相同的新鲜完整表皮验收茎交予发运；不声称统一保质期。 | 每 1 kg 参考流；实际内部数量 |
| `collector_dispatch` | 成束与初级采集者发运 | `required` | 记录真实交付；仅在实际使用时纳入成束及绑扎。 | 真实采集者发运时的1千克净验收鲜藤条；排除下游加工/运输。 | 每 1 kg 参考流；实际内部数量 |

采收与整理采用声明的批次/作业期模式，不假定连续工厂运行。每次实际作业、清理、工具替换或切换事件均有场址、期间及批次归属键。共享负担在消费节点间仅记录一次。分级退回关联primary_prepare；后续不合格鲜批次可返回grade_accept，保留既有负担且不重复最终销售。去向或处理历史未知时不得验收。

内部藤产品交接数量为净茎质量；实际附着叶鞘、附带植被或土壤依据cp_harvest及cp_prepare在单独关联的实体输入/交接台账中随料流动。该台账明确材料及来源介质，记录进入和交接的附带数量，将每次后续天然回归或管理丢弃与茎移除分别核对。购入附带物料继承供给方产品记录，不产生当前场址的第二次天然取出。

共同投入、能源及服务每节点保留一张条件汇总卡。具体物质、载能体、去向及单位由实际记录提供，并在最终创建交换前核实。无实际使用的服务保持零；不能仅因存在卡片而编造清洗、冷却、化学品或机动燃料。直接释放汇总卡需在绑定前明确物质及接收介质。以下非参考暂定数量范围为作者宽泛筛选提示，不是默认值，不强制执行；不属于已发表允许范围，也不证明该流实际发生。

### 过程：野生林地采收 （`wild_harvest`）

本节点 `wild_harvest` 必须完成 `cp_direct_release_wild_harvest` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

新鲜采收圆茎交予初步整理；采收负责移除，不负责整理。

#### 输入

##### 产品流

###### 实际物料、能源及服务投入 （`wild_harvest_supplies`）

条件汇总卡：记录实际使用的零个、一个或多个已核实具体交换，包括工具/共享资产服务及可归属的边界内转运。保留各交换自身属性/单位；劳动时间是归属观测量，不编造为产品交换。

- 选定流：实际物料、能源及服务投入
- 流属性/单位：每个核实具体交换的属性 / 本征单位
- 数量规则：记录实际可归属批次数量，并按cp_harvest及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
数量范围证据要求：在明确具体交换、参考属性、比较单位和归一化分母前，不规定数值界限。保留关联协议的实测数量。若建立定量 QA 筛选，须记录其适用物料或服务、路线及期间、经审查证据和推导；数值与上下界采用同一明确单位及分母。换单位时，数值与上下界同步换算。证据尚不具备时，定量范围筛选不可用并披露为缺口；缺少筛选不能提供默认量，也不证明完整性。

##### 废物流

##### 基本流

###### 实际附着天然叶鞘及附带物料 （`harvest_attached_natural_material`）

条件性实体输入台账：记录与茎一起从环境移除的实际叶鞘、附带植被或土壤。分别记录物质/材料及来源介质，并在实际存在时将其附着数量交接到整理。不得计入净茎移除或验收参考质量。后续回归/丢弃需与此输入核对；不存在时不假定土壤或其他附带物。

- 选定流：实际附着天然叶鞘及附带物料
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_harvest及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest`
- 来源：`fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 从未经栽培森林移除的野生藤茎生物质 （`wild_rattan_removal`）

在环境/技术圈接口记录自采藤茎移除量，按声明鲜态基准包括可归属的丢弃茎段。留存植株不是购入产品；需成熟来源证据。附着叶鞘/异物应单独核对，不盲目计入净验收茎质量。

- 选定流：从未经栽培森林移除的野生藤茎生物质
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_harvest及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 新鲜采收野生圆藤茎 （`harvested_rattan`）

新切圆茎，声明实际叶鞘/刺/可用长度状况，交予整理；已满足要求时直接交予分级。计量实际数量；不因其投入最终参考产品而自动设为1千克。

- 选定流：新鲜采收野生圆藤茎
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_harvest及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 实际丢弃物料及包装 （`wild_harvest_discard`）

按记录纳入实际外运丢弃藤条/叶鞘/异物或废包装，并声明接收处理及废物分类。不得自动将林地残余变为管理废物。返工/降级不等同丢弃。

- 选定流：实际丢弃物料及包装
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_harvest及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际回归林地的天然植物残余 （`harvest_residue_return`）

记录实际留在/返回来源地的植物部分及环境去向。区分茎生物质、叶鞘及附带植被；不能凭汇总质量断定化学身份或碳信用。

- 选定流：实际回归林地的天然植物残余
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_harvest及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际按物质区分的直接释放 （`wild_harvest_direct_releases`）

条件汇总卡：在绑定具体交换前识别每项实际污染物/物质、接收介质及数量基准；仅在证实时纳入实测水蒸气损失。排除供给数据集已承担的上游燃料排放；不能将生物质移除直接作为排放。

- 选定流：实际按物质区分的直接释放
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_harvest及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_harvest`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：初步去叶鞘与定尺整理 （`primary_prepare`）

本节点 `primary_prepare` 必须完成 `cp_direct_release_primary_prepare` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

整理后的新鲜圆茎交予分级；已满足要求时绕过。

#### 输入

##### 产品流

###### 新鲜采收野生圆藤茎 （`prepare_feed`）

核对采收交接或单独有证据的购入采收批次。购入料仅一次接入匹配的上游采收数据；当前采集者清单不得再次记录其林地移除。

- 选定流：新鲜采收野生圆藤茎
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_prepare及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际物料、能源及服务投入 （`primary_prepare_supplies`）

条件汇总卡：记录实际使用的零个、一个或多个已核实具体交换，包括工具/共享资产服务及可归属的边界内转运。保留各交换自身属性/单位；劳动时间是归属观测量，不编造为产品交换。

- 选定流：实际物料、能源及服务投入
- 流属性/单位：每个核实具体交换的属性 / 本征单位
- 数量规则：记录实际可归属批次数量，并按cp_prepare及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
数量范围证据要求：在明确具体交换、参考属性、比较单位和归一化分母前，不规定数值界限。保留关联协议的实测数量。若建立定量 QA 筛选，须记录其适用物料或服务、路线及期间、经审查证据和推导；数值与上下界采用同一明确单位及分母。换单位时，数值与上下界同步换算。证据尚不具备时，定量范围筛选不可用并披露为缺口；缺少筛选不能提供默认量，也不证明完整性。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整表皮的新鲜野生原藤条 （`prepared_rattan`）

仅在实际进行时去除松附叶鞘/刺并整理长度；硅化表皮保持完整。表皮刮除、有意干燥、油/热处理（curing）、熏蒸或化学保藏超出本PCR范围；明确允许的去叶鞘/刺及定尺截断不在此排除之列。将相同鲜态实体产品交予分级验收。

- 选定流：完整表皮的新鲜野生原藤条
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_prepare及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 实际丢弃物料及包装 （`primary_prepare_discard`）

按记录纳入实际外运丢弃藤条/叶鞘/异物或废包装，并声明接收处理及废物分类。不得自动将林地残余变为管理废物。返工/降级不等同丢弃。

- 选定流：实际丢弃物料及包装
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_prepare及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际回归环境的天然叶鞘及茎残余 （`prepare_residue_return`）

按去向记录实际叶鞘及截断茎部分；交给产品买方或废物管理者的物料不是基本流回归。不得重复计入采收回归。

- 选定流：实际回归环境的天然叶鞘及茎残余
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_prepare及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际按物质区分的直接释放 （`primary_prepare_direct_releases`）

条件汇总卡：在绑定具体交换前识别每项实际污染物/物质、接收介质及数量基准；仅在证实时纳入实测水蒸气损失。排除供给数据集已承担的上游燃料排放；不能将生物质移除直接作为排放。

- 选定流：实际按物质区分的直接释放
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_prepare及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：分级与去向验收 （`grade_accept`）

本节点 `grade_accept` 必须完成 `cp_direct_release_grade_accept` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

区分验收茎、降级销售、不合格退回或丢弃。

#### 输入

##### 产品流

###### 完整表皮的新鲜野生原藤条 （`grade_feed`）

接收完整表皮鲜圆茎，包括符合条件的采收绕行料及正确关联的退回批次。记录物种、尺寸、水分及实际缺陷；此节点为内部验收决策，不是新市场身份。

- 选定流：完整表皮的新鲜野生原藤条
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_grade及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际物料、能源及服务投入 （`grade_accept_supplies`）

条件汇总卡：记录实际使用的零个、一个或多个已核实具体交换，包括工具/共享资产服务及可归属的边界内转运。保留各交换自身属性/单位；劳动时间是归属观测量，不编造为产品交换。

- 选定流：实际物料、能源及服务投入
- 流属性/单位：每个核实具体交换的属性 / 本征单位
- 数量规则：记录实际可归属批次数量，并按cp_grade及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
数量范围证据要求：在明确具体交换、参考属性、比较单位和归一化分母前，不规定数值界限。保留关联协议的实测数量。若建立定量 QA 筛选，须记录其适用物料或服务、路线及期间、经审查证据和推导；数值与上下界采用同一明确单位及分母。换单位时，数值与上下界同步换算。证据尚不具备时，定量范围筛选不可用并披露为缺口；缺少筛选不能提供默认量，也不证明完整性。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整表皮的新鲜野生原藤条 （`accepted_rattan`）

验收声明等级后交予鲜态暂存或直接发运；分别标记和计量所有验收等级。不编造统一直径、长度或缺陷阈值。

- 选定流：完整表皮的新鲜野生原藤条
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_grade及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际降级销售或返工退回藤茎 （`rattan_other_destination`）

条件汇总卡：列明每个实际等级/去向、买方交付或返回primary_prepare。返工是内部循环，不是第二次最终销售；超出许可状态的有意加工应单独声明边界退出，不是验收参考输出。

- 选定流：实际降级销售或返工退回藤茎
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_grade及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 实际丢弃物料及包装 （`grade_accept_discard`）

按记录纳入实际外运丢弃藤条/叶鞘/异物或废包装，并声明接收处理及废物分类。不得自动将林地残余变为管理废物。返工/降级不等同丢弃。

- 选定流：实际丢弃物料及包装
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_grade及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

### 过程：鲜态保护性暂存 （`fresh_hold`）

本节点 `fresh_hold` 必须完成 `cp_direct_release_fresh_hold` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

相同的新鲜完整表皮验收茎交予发运；不声称统一保质期。

#### 输入

##### 产品流

###### 完整表皮的新鲜野生原藤条 （`hold_feed`）

按同一批次/等级计量验收鲜茎投入；暂存本身不改变产品身份。

- 选定流：完整表皮的新鲜野生原藤条
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_hold及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hold`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际物料、能源及服务投入 （`fresh_hold_supplies`）

条件汇总卡：记录实际使用的零个、一个或多个已核实具体交换，包括工具/共享资产服务及可归属的边界内转运。保留各交换自身属性/单位；劳动时间是归属观测量，不编造为产品交换。

- 选定流：实际物料、能源及服务投入
- 流属性/单位：每个核实具体交换的属性 / 本征单位
- 数量规则：记录实际可归属批次数量，并按cp_hold及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hold`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
数量范围证据要求：在明确具体交换、参考属性、比较单位和归一化分母前，不规定数值界限。保留关联协议的实测数量。若建立定量 QA 筛选，须记录其适用物料或服务、路线及期间、经审查证据和推导；数值与上下界采用同一明确单位及分母。换单位时，数值与上下界同步换算。证据尚不具备时，定量范围筛选不可用并披露为缺口；缺少筛选不能提供默认量，也不证明完整性。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整表皮的新鲜野生原藤条 （`held_rattan`）

实际保护性暂存后交予发运的相同完整表皮鲜圆茎。排除任何有意调湿干燥、浸水化学处理、熏蒸或处理（curing）；报告经过时间及水分变化，不假定保鲜效果。

- 选定流：完整表皮的新鲜野生原藤条
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_hold及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hold`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 实际丢弃物料及包装 （`fresh_hold_discard`）

按记录纳入实际外运丢弃藤条/叶鞘/异物或废包装，并声明接收处理及废物分类。不得自动将林地残余变为管理废物。返工/降级不等同丢弃。

- 选定流：实际丢弃物料及包装
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_hold及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hold`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际按物质区分的直接释放 （`fresh_hold_direct_releases`）

条件汇总卡：在绑定具体交换前识别每项实际污染物/物质、接收介质及数量基准；仅在证实时纳入实测水蒸气损失。排除供给数据集已承担的上游燃料排放；不能将生物质移除直接作为排放。

- 选定流：实际按物质区分的直接释放
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_hold及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hold`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：成束与初级采集者发运 （`collector_dispatch`）

本节点 `collector_dispatch` 必须完成 `cp_direct_release_collector_dispatch` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

真实采集者发运时的1千克净验收鲜藤条；排除下游加工/运输。

#### 输入

##### 产品流

###### 完整表皮的新鲜野生原藤条 （`dispatch_feed`）

核对grade_accept或fresh_hold的验收投入及符合条件的内部退回料。最终发运量排除去向未明的不合格品，投入量保持实测，不固定为参考数量。

- 选定流：完整表皮的新鲜野生原藤条
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_dispatch及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际物料、能源及服务投入 （`collector_dispatch_supplies`）

条件汇总卡：记录实际使用的零个、一个或多个已核实具体交换，包括工具/共享资产服务及可归属的边界内转运。保留各交换自身属性/单位；劳动时间是归属观测量，不编造为产品交换。

- 选定流：实际物料、能源及服务投入
- 流属性/单位：每个核实具体交换的属性 / 本征单位
- 数量规则：记录实际可归属批次数量，并按cp_dispatch及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
数量范围证据要求：在明确具体交换、参考属性、比较单位和归一化分母前，不规定数值界限。保留关联协议的实测数量。若建立定量 QA 筛选，须记录其适用物料或服务、路线及期间、经审查证据和推导；数值与上下界采用同一明确单位及分母。换单位时，数值与上下界同步换算。证据尚不具备时，定量范围筛选不可用并披露为缺口；缺少筛选不能提供默认量，也不证明完整性。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整表皮的新鲜野生原藤条 （`rattan_dispatch`）

初级采集者发运时的实际净验收鲜茎质量；保持表皮完整并声明买方/来源限定信息。同一产品身份可用于相容内部交接；实际发运地点/交付需独立证据，不能由过程名推定。

- 选定流：完整表皮的新鲜野生原藤条
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：声明的参考输出归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：(R/R) × 1 kg = 1 kg，R 为匹配的正验收最终净质量；仅为归一化恒等式
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集计算（`calculated_from_collection`）

参考归一化恒等式：R > 0 kg 为关联采集协议计量的同批次、同边界及同期间最终产品验收净质量，排除包装、拒收物及其他产品。归一化参考输出为 (R/R) × 1 kg = 1 kg。1..1 区间用于核对该恒等式，不代表得率或原始 R 计量的不确定性；原始计量及其不确定性须另行保留。

##### 废物流

###### 实际丢弃物料及包装 （`collector_dispatch_discard`）

按记录纳入实际外运丢弃藤条/叶鞘/异物或废包装，并声明接收处理及废物分类。不得自动将林地残余变为管理废物。返工/降级不等同丢弃。

- 选定流：实际丢弃物料及包装
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_dispatch及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际按物质区分的直接释放 （`collector_dispatch_direct_releases`）

条件汇总卡：在绑定具体交换前识别每项实际污染物/物质、接收介质及数量基准；仅在证实时纳入实测水蒸气损失。排除供给数据集已承担的上游燃料排放；不能将生物质移除直接作为排放。

- 选定流：实际按物质区分的直接释放
- 流属性/单位：质量 / kg
- 数量规则：记录实际可归属批次数量，并按cp_dispatch及cp_dispatch的实测净发运质量归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch`
- 来源：`fao-rattan-glossary`; `fao-rattan-resource`; `fao-thailand-rattan-route`
- 数量范围：暂定非强制筛选提示，不作为默认量或允许阈值
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：千克
  - 基准：每 1 kg 参考流；按各具体交换分别筛选，不汇总不同物质/单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `output_precedence` | 参考等级及其他预期输出 | 先划分可独立计量的活动。只有实体服务关系有证据时，才按同期净鲜质量将剩余共同采集者负担归属到实际销售鲜茎等级；否则最终定稿前记录有证据的因果基准及敏感性。不得自动为叶鞘、修整残余或林地残余授予信用。 | |
| `rework_burdens` | 不合格、退回及降级批次 | 将已发生负担保留在关联退回批次上，并仅一次增加实际重复整理。退回不是新的移除或最终发运输出。排除加工状态退出及降级销售保留明确的负担及交付决策。 | |
| `shared_asset_periods` | 工具、车辆、遮护及服务 | 识别所有消费节点/批次和服务期间；使用实测使用量/时间/载荷或有证据的容量份额。记录资产服务寿命、替换及终止证据，不给出统一寿命。防止重复计入已含组件的服务及其能源/资产负担。 | |
| `stocks_sites` | 作业期、报告期与场址 | 将期初/期末库存及跨期交接与保留负担核对。按同一参考边界加总场址层面可归属数量及净验收质量，不使用无权重的场址均值；披露排除及代表性。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_harvest` | wild_harvest | 资源移除、采收茎、残余、实际投入/释放 | 来源与批次日志 | 批次；物种；来源单元/地点；野生来源；成熟度；移除/茎/叶鞘质量；日期；实际工具/服务；天然回归；丢弃去向；物质/介质；资产/使用键 | 来源检查及可追溯校准称重、投入计量/票据、实际去向观察；将来源茎质量不确定性与验收发运质量分开披露 | kg及各具体本征单位 | 每次采集批次/事件 | 采收作业期及报告期 | 每个森林来源及采集者单元 | 每 1 kg 参考流 | 来源/物种证据，校准秤/扣皮记录，交接及去向凭证；不能仅凭历史来源声称合法性 |
| `cp_prepare` | primary_prepare | 接收/整理茎、去叶鞘/定尺及不合格品 | 整理批次记录 | 批次；供给方/采收关联；进/出质量；实际叶鞘及表皮状态；截断；退回；投入；排放；场址/日期；服务 | 称量实际交接/移除；检查作业前后表皮；保留购入投入的上游身份/处理声明；记录实际计量及处置 | kg及各具体本征单位 | 每个作业批次/事件 | 实际整理日期及库存期间 | 整理单元及匹配供给方 | 每 1 kg 参考流 | 前后表皮观察，同批称重及上游覆盖核对 |
| `cp_grade` | grade_accept | 分级验收、降级品、退回及废物 | 验收与去向登记 | 批次；物种；直径/长度等级；水分；缺陷；等级标准；验收质量；其他等级/去向质量；接收方；循环关联；日期 | 按声明买方标准检查并称量每个实际等级/去向；无替代去向时明确记录零输出 | kg及各具体本征单位 | 每批及等级决策 | 分级日期及报告期 | 贡献分级/采集者单元 | 每 1 kg 参考流 | 验收凭证及无统一等级阈值的完整输出平衡 |
| `cp_hold` | fresh_hold | 实际鲜态暂存、进出库存、不合格品/释放 | 暂存区间及库存记录 | 批次；场址；期初/期末/进出质量；时间；水分方法/时间；保护；实际投入/服务；直接物质/介质；不合格品 | 记录实际有边界暂存区间、同期称重/水分及实际保护投入；不编造用水或制冷剂 | kg及各具体本征单位 | 每批/暂存区间 | 实际暂存日期及跨期库存 | 每个实际暂存单元 | 每 1 kg 参考流 | 批次关联库存平衡、鲜态及处理历史证据、实际计量/使用记录 |
| `cp_dispatch` | collector_dispatch | 净验收参考质量、包装、交付及共同归属 | 校准称重与发运登记 | 批次；植物物种；来源及表皮/叶鞘状态；等级；水分基准/时间；直径/长度；记录的根数/束数/长度；净验收鲜质量；扣皮；包装/复用；接收方/地点/日期；期间/场址；投入及不合格数量；共享资产及消费节点 | 使用经校准的秤称量验收鲜茎，记录扣皮并排除所有包装和异物；核对实际买方验收、来源批次、处理状态及真实初级采集者交付 | kg及各具体本征单位 | 每发运批次及归属事件 | 采收到发运期间及跨期库存 | 所有贡献采集者及来源单元 | 每 1 kg 参考流 | 校准/扣皮、验收/发运凭证、状态照片/检查、同批单位换算及完整输出/资产登记 |
| `cp_direct_release_wild_harvest` | `wild_harvest` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_primary_prepare` | `primary_prepare` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_grade_accept` | `grade_accept` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_fresh_hold` | `fresh_hold` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_collector_dispatch` | `collector_dispatch` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |

所有协议汇总单元格采用共同的每 1 kg 参考流基准。以下计算规则明确实测发运分母及保留的本征分子单位；协议特定的场址/批次/期间、处理状态及去向记录仍为必需。内部退回不进入最终验收质量，购入料移除不重复计入，库存不重复报告为输出。随料包装、绑扎物及可复用支撑需单独计数/扣皮，追踪真实交付/退回/不合格去向及复用周期，并排除在净茎质量之外；采集者包装不包括下游配送。

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_to_reference` | 所有清单行 | 按物质/载能体/服务加总可归属实际交换数量，再除以实测净验收鲜发运质量，单位kg；保留分子单位，生成每 1 kg 参考流。 | cp_harvest; cp_prepare; cp_grade; cp_hold; cp_dispatch | 每 1 kg 参考流的归属数量 | |
| `transfer_balance` | 茎及残余交接 | 在可比的同期水分基准上，核对期初库存加实际接收量与验收交接、单独其他输出、实测残余/异物、损失及期末库存；无法解释的差额保持为披露数据缺口，不编造排放。 | 全部批次及去向登记 | 关联核对的物料平衡 | |
| `site_aggregation` | 多场址及跨期数据包 | 对交接/资产记录去重后，加总场址/期间可归属负担及匹配净验收鲜质量；无匹配质量权重时不平均已分别归一化的场址值。 | 场址/期间台账；验收发运登记 | 共同边界聚合及贡献者披露 | |
| `calculate_direct_release_ledger` | `wild_harvest`; `primary_prepare`; `grade_accept`; `fresh_hold`; `collector_dispatch` | 每一唯一事件、物质和介质的原始释放量 E 取实测值，或按已引用适用方法从活动量 A 与同口径因子 EF 计算；只有方法确实为简单因子模型时才用 E = A * EF，先验证单位及治理边界。不同物质或介质不相加；原始释放台账保持未分配。对归属后的负荷总量仅除以匹配的正值最终参考数量 R 一次；已有最终参考强度不再归一化，共用事件仅分配一次。未解释物料差不自动转成排放，缺因子不等于零。 | cp_direct_release_wild_harvest; cp_direct_release_primary_prepare; cp_direct_release_grade_accept; cp_direct_release_fresh_hold; cp_direct_release_collector_dispatch；现有排放卡；供应商覆盖；参考数量 | 按节点/物质/介质分列的原始与归属量及未解决缺口 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `rattan_identity` | 每个纳入批次 | 证实植物藤、野生未经栽培来源、成熟度、鲜圆茎、完整表皮及实际去叶鞘/定尺整理。仅凭商品名、许可证或HS标签不能证明该实体边界。 | 来源检查、供给方/采收追溯及处理记录 |
| `fresh_measurement` | 数量及换算 | 同批校准净鲜质量及同期水分；披露方法不确定性和换算覆盖；不借用干鲜系数或每根重量。 | 校准、扣皮、称重及水分记录 |
| `complete_contributors` | 场址、期间及共享资产 | 列明实际贡献者、采收/整理/暂存/发运阶段、期初/期末库存、替换及终止；保留唯一归属键及每项纳入份额的证据。 | 关联场址/期间/资产台账及代表性决策 |
| `output_routes` | 等级、退回及丢弃物料 | 每个等级、返工循环及边界退出都有真实去向、交付、数量及负担决策；未用可选路线有未发生证据。 | 买方验收、交接及处置/退回记录 |
| `exchange_identity` | 每个最终具体交换 | 在最终数据生产前核实准确流UUID、支持属性/单位及对物料状态/来源/介质的适用性；汇总卡不是最终交换。 | 随前景数据包保留的具体身份及相容性证据 |
| `dq_range_units_evidence` | 可变单位卡的具体交换 | 建立定量筛选前，明确具体交换、参考属性、比较单位及分母、适用性、经审查证据和推导。保留数值与上下界一致换算的记录；同一实物数量采用等价单位时应得到相同筛选结果。未解决筛选须明确披露，不能作为数量或完整性证据。 | 关联采集协议；属性/单位及换算记录；相容证据和推导；未解决筛选清单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference_gate` | 参考输出 | 确认rattan_dispatch为真实验收产品输出，等于1千克净鲜茎参考，并有匹配物种/来源/状态/等级/水分/真实交付限定信息；包装及不合格品不得进入参考质量。 | fao-rattan-glossary; fao-rattan-resource |
| `origin_state` | 每个纳入批次 | 拒绝栽培、有意干燥/处理（curing）/熏蒸/刮表皮/劈分产品及未知状态/来源。流UUID或买方标签不能替代来源状态证据。 | fao-rattan-glossary |
| `quantity_relationship` | 每个清单行 | 确认每 1 kg 参考流基准、本征分子单位完整性、关联采集/归一化及实测内部交接量；不得假定根数换质量或干量换鲜量。 | |
| `route_reconciliation` | 过程图、输出及不合格品 | 检查每个实际可选激活/绕过、等级/去向、退回及废物路径；匹配交接对，不将内部退回计为最终输出，也不重复购入料的天然移除。 | |
| `multi_axis_attribution` | 场址、期间、模式及资产 | 检查唯一场址/批次/作业/期间键及资产消费者、切换/清理关联、跨期库存和输出归属；不得遗漏贡献者或重复共同负担。 | |
| `identity_and_evidence` | 最终交换及范围 | 最终交换需具体已核实身份及支持；保留逐卡数量范围的证据层级。推理筛选不是默认值且不强制执行，不能代替实测值或使数据集具备发表资格。 | |
| `validate_direct_release_coverage` | `wild_harvest`; `primary_prepare`; `grade_accept`; `fresh_hold`; `collector_dispatch` | 对每个实际启用节点，以活动清单逐项核对 cp_direct_release_wild_harvest; cp_direct_release_primary_prepare; cp_direct_release_grade_accept; cp_direct_release_fresh_hold; cp_direct_release_collector_dispatch：记录应为有量的具体基本流、证据充分的上游服务覆盖，或有证据的无相关活动。缺失/不明不是零，须作为数据包完整性阻断项。检查每种实际物质及介质的量、方法因子单位、具体 UUID 和既有卡/服务覆盖，防止漏排或重复；空分组、购买电力的上游排放或其他节点的单一 CO2 卡不能代替本节点的现场释放核对。共享资产服务不得产生重复物理排放事件。 |  |

- 按入场状态逐节点核对 required/conditional 激活与上游覆盖；外购已达状态原料不得重复此前生长、采收或整理，分类相同不能替代状态及门点匹配。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景采集数据包及其过程/生命周期投影 |
| downstream_use | 仅在真实边界、数量、身份及质量审查后作为secondary_dataset或background_dataset |
| allowed_use | 匹配的野生新鲜圆形完整表皮藤原料、记录的初级采集者交付点及相容声明等级 |
| excluded_use | 人工林或处理/干燥/剥皮/劈分藤条；家具/编结制品；所有植物材料；无支持功能替代或可持续性/碳信用声明 |
| required_metadata | 物种/来源、状态/表皮/叶鞘、尺寸/等级/水分、真实交付点/日期/接收方、净鲜质量、场址/期间贡献者、可选路线状态、库存/退回、归属及准确交换身份 |
| required_quality_disclosure | 计量不确定性、来源/时间/场址覆盖、实际输出集合、排除、缺失证据、共享资产决策及暂定范围限制 |
| update_trigger | 来源/物种/状态/表皮处理、等级或交付点、真实路线、物料数量、贡献者、资产归属、身份/支持或更强范围/方法证据改变 |

## 11. 数据来源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `fao-rattan-resource` | `official_guidance` | FAO藤物种、资源及用途；https://www.fao.org/4/y2783e/y2783e05.htm；访问2026-10-09 | 植物茎身份、野生与栽培供给、去叶鞘与下游藤衍生物区分；不提供数值默认 |
| `fao-rattan-glossary` | `official_guidance` | FAO藤术语表；https://www.fao.org/4/Y5232E/y5232e04.htm；访问2026-10-09 | 新鲜原料状态、独立表皮移除/干燥/处理（curing）/熏蒸加工；不提供处理配方或阈值 |
| `fao-thailand-rattan-route` | `official_guidance` | FAO历史泰国国家报告的藤采集；https://www.fao.org/4/X2649E/X2649E06.htm；访问2026-10-09 | 可能的野生采集、去叶鞘、定尺及未进行工厂前处理的贸易交付；不提供现行法律、产量或通用地理 |
| `unsd-cpc3-notes` | `official_guidance` | UNSD CPC3.0说明，印刷页40；https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf；访问2026-10-09 | 仅分类成员关系，不证明全范围语义等效 |
| `wco-hs2022-rattan` | `official_guidance` | WCO HS2022第14章，1401.20藤；https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0214_2022e.pdf?la=en；访问2026-10-09 | 藤属于植物编结材料；不提供实体状态或清单默认值 |
