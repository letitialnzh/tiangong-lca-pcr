---
pcr_id: pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-non-coniferous-wood-sawlogs-and-veneer-logs
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非针叶锯木原木与单板原木

## 1. 范围与适用性

本 PCR 用于在唯一声明的林道边生产者交付门生产非针叶圆材前景数据包，其用途为锯材、枕木或单板。纳入粗方整形圆材、木瓦与桶板木段、火柴短材，以及专用于单板的瘿木或根 [unsd-roundwood-scope]。用途而非外形本身区分本类别与纸浆/板材、其他用途圆材。排除成品锯材、单板片、化学处理木材、针叶木和薪材。

生产者必须明确实际阔叶树种、来源、林分类型、经营历史、采伐体系与木料状态。人工林、萌芽林、有经营的天然林、未经营天然林及林外树木并非可互换标签或默认路线。来源用于建立作业责任，不提供通用产率、轮伐期、密度或碳因子 [fao-wood-harvesting]。特殊单板根/瘿木商品批次使用同一最终门与质量基准，但必须声明其独特采集与制备作业。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.roundwood-of-non-coniferous-wood-sawlogs-and-veneer-logs |
| classification_refs | cpc:3.0:03121 |
| covered_products | 非针叶锯木与单板原木、枕木圆材、粗方整形圆材、木瓦/桶板木段、火柴短材以及专用于单板的瘿木/根 |
| excluded_products | 针叶原木；纸浆/板材/其他用途/薪材圆材；成品锯材或单板；处理产品 |
| representative_product | 林道边已分级非针叶锯木或单板原木批次 |
| production_route | 实际有记录林分来源、采伐/移出、集材、初级制备与用途分级；仅启用有证据的实际路线差异 |
| market_state | 林道边生产者交付的未加工或粗方整形圆材，声明实际树皮/含水率/等级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足声明的下游用途规格的非针叶锯木原木与单板原木 |
| How much | 在声明的林道边交付门，1 kg 接收状态参考类别木料 |
| How well | 实际树种、尺寸/形态、等级、用途、树皮状态及含水率基准与验收证据；不设通用阔叶木规格 |
| How long or cycle | 实际生长/经营周期及采伐作业期；适用时列明造林、抚育、间伐、更新/萌芽和最终采伐期间 |
| reference_flow_link | `roadside_saw_veneer_logs` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 林道边交付的非针叶锯木原木与单板原木 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 实际树种; 来源/场址; 林分与经营模式; 龄组/周期/作业期; 采伐体系; 锯材/枕木/单板用途; 适用的特殊短材/根/瘿木形态; 等级/尺寸; 树皮; 含水率及计量基准; 唯一林道边交付门; 同批换算证据 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mass_reference` | 参考及木料转移 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用树皮与含水率范围一致的接收状态净质量。批次称重或使用同批实测质量/实积桥接；不得使用通用阔叶木密度。 |
| `volume_bridge` | 体积记录 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留原始实积或层积、树皮惯例、含水率与实测密度。层积不等于实积；密度不确定性随换算传播。 |
| `component_units` | 投入类别汇总卡 | 实际属性 | 实际兼容单位 | 建模时展开实际载体、配方与服务。分别保留燃料 kg/L、电力 kWh、材料 kg、水 kg 或 m3、苗木数量及服务 h；禁止异单位相加。 |
| `nutrient_basis` | 肥料 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 区分肥料产品质量与养分质量并报告检测含量；不得假设氮比例或施肥。 |
| `carbon_basis` | 碳、土壤及残余物台账 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 独立记录干物质、实际碳含量、含水率基准与碳库期间；碳存量既不是参考湿质量，也不是自动避免排放。 |

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `provisional_range_evidence_policy` | 所有 Range 及实际交换 | 各实际交换的相容属性 | 各实际交换的原生单位 | 所有 reasoned_estimate Range 仅为候选方法的暂定复核提示，不是实测分布、允许损失率、默认用量或排放因子。不得截断、回填或强制拟合实际数据；超界须核对状态、单位、边界、库存和证据。完成数据包前，须用可追溯实测记录或适用且已审查的定量来源逐项确定实际量和不确定性。缺失量、因子或流身份必须保留为缺口并阻止完整性声明，不能用通过范围筛查代替证据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 有记录的经营生长责任或购入等效经营立木；或披露来源/历史的实际天然来源移出 |
| starting_condition_role | 明确生产/来源接口，绝非零负荷声明 |
| product_classification_scope | 仅参考锯木/单板/枕木类别；单独标识其他产出 |
| recursive_input_rule | 购入同类别已制备原木须保留供应方门、数量与上游数据集；不得递归重建已建模的林分/采伐/制备负荷 |
| upstream_dataset_requirement | 等效经营立木或购入原木数据包必须披露所含期间、来源、树皮/含水率、碳处理及门；缺失是数据缺口而非零 |
| disclosure | 实际来源、路线拓扑、起止门、周期、外包活动、排除阶段、共享资产、上游缺漏及碳/土壤/土地变化处理 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `roadside_end` | 整个数据包 | 止于林道边生产者交付；排除外送工厂运输、锯切/旋切、化学处理、使用及寿命终结。 | `unsd-roundwood-scope` |
| `source_and_removal` | 林分与采伐 | 生物生长/来源责任区别于采伐移出与制备。采伐承担从来源移出责任；同一作业不增设重复资源移出节点。经营产品输入与天然基本资源输入不得同时表示同一生物量。 | `fao-wood-harvesting` |
| `actual_route` | 替代路线 | 林分母活动为有记录经营生产：人工更新增加苗木/造林记录；萌芽保留树桩/再生及关联采次；经营天然更新保留实际抚育历史。未经营天然来源绕过虚构经营生长。采伐/制备母活动允许实际短材、全干/全树或单板根/瘿木移出；记录拓扑、投入、损失及校验变化，同一批次互斥路线不得相加。 | `fao-wood-harvesting` |
| `site_ledgers` | 全部场址活动 | 按实际面积及期间保留生长/移出/剩余存量、土壤/枯木/残余物、土地占用/转化及碳台账。适用时记录实际物质/介质排放、用水与泄漏；不得自动赋予碳中性、固碳或替代信用。 | |
| `period_assets` | 共享基础设施 | 明确道路、堆场及设备、使用节点与服务期间。保留造林、抚育、间伐与最终采伐负荷份额和周期终结/替换事件，避免服务与自营投入清单重复。 | |
| `route_handoffs` | 过程边界 | 记录伐根侧木料、集材场木料、制备木料与林道边用途状态。组合设备可合并节点，但保留接口并每项作业仅计一次。现场残余物非外运废物；可售残余物为产品。 | `fao-wood-harvesting` |
| `boundary_direct_release_coverage` | `stand`; `harvest`; `extraction`; `preparation`; `grading` | 逐一核对所有实际启用节点的现场燃烧、实际施用及逸散/泄漏，按 cp_direct_release_stand; cp_direct_release_harvest; cp_direct_release_extraction; cp_direct_release_preparation; cp_direct_release_grading 建立唯一活动—物质—接收介质记录。购买燃料或化学品的上游数据不能替代其现场使用排放；对供应商服务已包含的同一活动须核实覆盖并避免重复。无活动须有证据，缺失数据不能默认为零。此要求不扩大原有产品门或下游使用边界，也不假定任何燃烧、施肥、药剂或设备必然发生。 |  |

按实际入场状态与所有权选择路线。外购已采收、已集运、已整理或已分级的相容原料，可在真实接收节点进入；此前已完成的操作不得再列为强制前景，也不得再投入立木或生物资源来重复来源。接收卡须记录实际物料、等级、湿/干基准、接收门、上游数据集及过程覆盖；无相应接收卡时新增实际接收交换。跳过操作不等于删除上游负荷；不得跳过实际发生的工序，最终参考产品、质量和交付门保持不变。

## 6. 过程清单结构

清单报告层与过程计量层：各卡数量统一报告为每 1 kg 参考流，原始数量、同批次过程产出、物料状态和期间归属仍由采集协议及计算规则逐项保留。投入负荷先直接归属，并按第 7 节分配共用负荷；实物交接量和副产品量保留未分配物料账，随后分别除以同边界、同期间的正值最终参考产品数量，不能分配缩减质量平衡。中间交接不得重复计入最终输出。Range 使用各块明确声明的原有分母；过程输出基准的 Range 先在局部过程检查，不得直接与参考流基准量比较。需要换算 Range 时，用实测过程产出/最终参考数量比例以及仅适用于负荷的已审查归属系数换算上下限，保留原始限值与依据；不得假定该比例为 1。每种能源载体、肥料配方、物料及物质保持自身单位，不能相加不同单位。最终参考输出由合格批次数量除以自身得到；拒收物、包装和非参考等级不进入分母。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `stand` | 有记录阔叶林分经营 | conditional | 自有经营生长责任；否则等效上游立木包或披露实际天然来源 | 生物生产及期间关联 | kg 经营可采伐立木产出 |
| `harvest` | 采伐与资源移出 | conditional | 仅当该操作实际位于前景内；外购已达该状态的相容原料时跳过已完成操作，并保留上游负荷。 | 采伐/捕获/移出，非重复生产 | kg 伐倒商品木 |
| `extraction` | 集材至森林集材场 | conditional | 实际伐根至集材场移动；组合操作仅计一次 | 森林前景内运输 | kg 集材场木料 |
| `preparation` | 圆材初级制备 | conditional | 实际去枝/截断/粗方整形/可选去皮；不重复短材作业 | 原始至制备状态接口 | kg 已制备圆材 |
| `grading` | 用途分级与林道边交付 | required | 全部实际批次等级/去向记录 | 参考产出及独立去向共同产出 | 1 kg 林道边参考类别产出 |

能源、肥料及类似可变投入采用条件性类别卡，不要求每种变体一个强制交换。建模时按实际交换展开并核实身份与各自单位。以下每项暂定 Range 仅是宽泛 QA 筛查：超限需提供证据与审查，不可截断、视为默认清单或将缺数据当零。实际额外出售的残余物或薪材必须在产出台账中记录各自具体身份和门，不得悄然塞进参考产出。


### 过程：有记录阔叶林分经营 (`stand`)

本节点 `stand` 必须完成 `cp_direct_release_stand` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 林分经营能源投入 (`stand_energy`)

按实际条件展开燃料或电力载体；不同单位的载体数量不得相加。

- 选定流：林分经营能源投入
- 流属性/单位：实际燃料质量 / kg；实际电量 / kWh；L 与密度另行保留
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_stand`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kWh)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 林分经营肥料投入 (`stand_fertilizer`)

一张条件性肥料类别卡；分别采集实际配方及养分含量，不假定施肥。

- 选定流：林分经营肥料投入
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_stand`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 造林与经营材料投入 (`stand_materials`)

按条件分别采集苗木、防护材料、灌溉水和植保材料及其实际单位；天然更新不等于购入苗木。

- 选定流：造林与经营材料投入
- 流属性/单位：实际组分各自属性 / kg、count、m3 或 h，分别记录
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_stand`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (count)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：count
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (m3)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：m3
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (h)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：h
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 林分经营及共享资产服务 (`stand_services`)

仅在未计入自营投入时记录外包造林、抚育及道路/设备服务份额；明确使用节点和服务期间。

- 选定流：林分经营及共享资产服务
- 流属性/单位：实际服务时间 / h
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_stand`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (h)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：h
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 有记录林分生长从空气吸收的二氧化碳 (`stand_carbon_uptake`)

仅在声明的碳核算方法结合生长、移出量、残余物与碳库台账报告吸收时纳入；不得自动赋予负排放或信用。

- 选定流：二氧化碳（生物源） `da174fac-e567-42d3-99b5-a688913dc88e`
- 绑定：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
碳计量方法：由实际生长、干物质及碳库台账按 carbon_and_emissions 方法计算吸收量并归一化；不可直接把参考湿质量当碳吸收。

- 数量规则：将按上述方法计算并归属的实际吸收量除以同批次正值最终参考产品质量；湿木材质量不代表碳吸收。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stand`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 经营阔叶林可采伐立木 (`stand_managed_stock`)

有经营证据的林分或人工林在林地的条件性可采伐蓄积；必须声明实际树种和龄组。未经营天然生物量不是该产品。

- 选定流：立木 `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定：`fixed`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_stand`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

### 过程：采伐与资源移出 (`harvest`)

本节点 `harvest` 必须完成 `cp_direct_release_harvest` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 经营阔叶林可采伐立木 (`harvest_managed_stock`)

仅使用林分经营或等效上游数据集转入的有经营证据的立木；同一木料不得再次作为天然资源输入。

- 选定流：立木 `43034c5e-4265-48bc-bd6d-eb64fb5dd78a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定：`fixed`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 采伐与资源移出能源投入 (`harvest_energy`)

一张实际能源载体条件性类别卡；排除已计入承包服务或前景发电机的燃料。

- 选定流：采伐与资源移出能源投入
- 流属性/单位：实际燃料质量 / kg；实际电量 / kWh；L 与密度另行保留
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kWh)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 采伐与移出服务 (`harvest_services`)

条件性承包和共享设备服务；记录来源边界、机时和包含的作业。

- 选定流：采伐与移出服务
- 流属性/单位：实际服务时间 / h
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (h)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：h
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 从有记录天然来源移出的非针叶木生物量 (`harvest_natural_biomass`)

实际天然来源起始条件下的条件性资源输入；明确资源与环境区室。同一生物量与产品立木输入互斥。

- 选定流：从有记录天然来源移出的非针叶木生物量
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 伐根侧交付集材的非针叶伐倒木 (`harvest_felled_wood`)

集材前的伐倒商品木；记录实际短材、全干或全树状态，质量不含未收集立木生物量。

- 选定流：伐根侧交付集材的非针叶伐倒木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 外运废物处理的采伐残余物 (`harvest_residue_waste`)

仅记录跨边界进行废物处理的残余物；现场保留物进入土壤/碳/残余物台账，出售残余物为产品共同产出。

- 选定流：外运废物处理的采伐残余物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 实际采伐燃烧向空气排放 (`harvest_air_emissions`)

条件性汇总卡：逐项记录实际排放物质、化石/生物来源、接收介质及估算方法；未具体化混合物不得绑定一个 UUID。

- 选定流：实际采伐燃烧向空气排放
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_harvest`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

### 过程：集材至森林集材场 (`extraction`)

本节点 `extraction` 必须完成 `cp_direct_release_extraction` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 伐根侧交付集材的非针叶伐倒木 (`extraction_felled_wood`)

核对实际转入状态及同批质量与采伐产出；内部转移不是另一独立参考产品。

- 选定流：伐根侧交付集材的非针叶伐倒木
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_extraction`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 森林集材能源投入 (`extraction_energy`)

在一张类别卡中记录滑集、转运或索道集材实际载体；保留各载体单位及实际距离/地形。

- 选定流：森林集材能源投入
- 流属性/单位：实际燃料质量 / kg；实际电量 / kWh；L 与密度另行保留
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_extraction`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kWh)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 集材与共享通行服务 (`extraction_services`)

采用实际外包集材及分摊通行道路/设备服务；由机时/距离记录确定份额，不默认按森林面积分配。

- 选定流：集材与共享通行服务
- 流属性/单位：实际服务时间 / h
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_extraction`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (h)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：h
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 制备前运抵森林集材场的非针叶木料 (`extraction_landing_wood`)

集材场交付先于声明的初级制备；保留树皮、含水率、附枝及全干状态限定。

- 选定流：制备前运抵森林集材场的非针叶木料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_extraction`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

### 过程：圆材初级制备 (`preparation`)

本节点 `preparation` 必须完成 `cp_direct_release_preparation` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 制备前运抵森林集材场的非针叶木料 (`preparation_landing_wood`)

同批集材场输入；已完成制备的短材不得经过重复虚拟造材过程。

- 选定流：制备前运抵森林集材场的非针叶木料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 原木初级制备能源投入 (`preparation_energy`)

实际去枝、截断及条件性去皮载体在一张类别卡内分别采集；不含加工成成品的锯切或旋切单板。

- 选定流：原木初级制备能源投入
- 流属性/单位：实际燃料质量 / kg；实际电量 / kWh；L 与密度另行保留
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kWh)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 制备耗材与服务投入 (`preparation_materials`)

按条件分别采集润滑材料、替换切削耗材及外包制备服务并保留原单位；避免自营投入与服务重叠。

- 选定流：制备耗材与服务投入
- 流属性/单位：实际组分各自属性 / kg、count、m3 或 h，分别记录
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (count)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：count
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (m3)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：m3
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (h)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：h
  - 基准：每 1 kg 本过程主要木料产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 用途分级前的已制备非针叶圆材 (`preparation_ready_wood`)

可进行用途分级的未加工圆材；粗方整形或特殊单板短材/根/瘿木必须保留实际状态与用途。

- 选定流：用途分级前的已制备非针叶圆材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 外运废物处理的树皮与制备剔除物 (`preparation_bark_waste`)

仅记录实际废物外运；可售树皮和截余材另作为预期产品产出报告，现场残余物进入独立台账。

- 选定流：外运废物处理的树皮与制备剔除物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_preparation`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 本过程主要木料产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

### 过程：用途分级与林道边交付 (`grading`)

本节点 `grading` 必须完成 `cp_direct_release_grading` 的直接释放覆盖核对。实际发生的每种物质/介质须展开为本节点的输出基本流，并关联实测量或有据计算；已有排放卡接入同一事件记录，不重复生成。未发生、上游服务已覆盖和资料缺失必须区分；空基本流分组不能代替此项核对。

#### 输入

##### 产品流

###### 用途分级前的已制备非针叶圆材 (`grading_ready_wood`)

声明全部转入制备形态并记录可售及剔除去向份额，不改变实际物理状态。

- 选定流：用途分级前的已制备非针叶圆材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_grading`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 林道边参考类别产出
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 分级与林道边交付能源投入 (`grading_energy`)

条件性分选/装卸载体；采集止于林道边生产者交付门，不含外送工厂运输。

- 选定流：分级与林道边交付能源投入
- 流属性/单位：实际燃料质量 / kg；实际电量 / kWh；L 与密度另行保留
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_grading`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 林道边参考类别产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kWh)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kWh
  - 基准：每 1 kg 林道边参考类别产出；分别适用于实际各组分，不合计异单位
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 分级与林道边作业服务 (`grading_services`)

结合等级和去向记录，仅计入一次实际分级、作业和共享堆场服务。

- 选定流：分级与林道边作业服务
- 流属性/单位：实际服务时间 / h
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_grading`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (h)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：h
  - 基准：每 1 kg 林道边参考类别产出
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 林道边交付的非针叶锯木原木与单板原木 (`roadside_saw_veneer_logs`)

唯一参考产出：用于锯材、枕木或单板的圆材，包括相应特殊短材、木段、瘿木及根；保留用途、等级、树皮与含水率。

- 选定流：林道边交付的非针叶锯木原木与单板原木
并行计量与支持信息：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`

- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
计量说明：按 normalize_once 将非零验收参考批次质量除以自身质量，得到精确 1 kg 参考产出。

- 数量规则：1 千克
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_grading`
- 来源：`unsd-roundwood-scope`

- 数量范围：由验收质量自归一化得到的精确参考数量 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 林道边参考类别产出
  - 基准类型：`reference_flow`
  - 证据类型：`calculated_from_collection`

###### 林道边非针叶纸浆与板材圆材 (`roadside_pulp_panel_wood`)

用于纸浆或人造板的条件性独立共同产出；不属于参考类别产率。森林木片是不同状态，需另列实际产出。

- 选定流：林道边非针叶纸浆与板材圆材
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_grading`
- 来源：`unsd-roundwood-scope`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 林道边参考类别产出
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 林道边其他用途非针叶圆材 (`roadside_other_wood`)

条件性未加工其他用途圆材，如杆木/桩木/坑木；排除锯木/单板/纸浆/薪材及成品或处理产品。

- 选定流：阔叶圆木、其他 `b8b84d78-13c2-4dab-9b6d-8e7d9dc32f3b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定：`fixed`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_grading`
- 来源：`unsd-roundwood-scope`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 林道边参考类别产出
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 外运废物处理的分级剔除物 (`grading_reject_waste`)

实际转入废物处理的剔除物；降级销售不意味着木料是废物，也不得假设给予信用。

- 选定流：外运废物处理的分级剔除物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采集不重复的组分或同批转移总量 Q；以匹配边界和期间的最终验收参考质量 M_ref（kg，正值）为唯一最终分母，数量为 Q/M_ref。若原记录为局部过程强度 q_i = Q/O_i，则先乘实测 O_i/M_ref；已按最终参考质量报告的数量不再相除。实物转移和共同产出保留未分配台账；仅对环境负荷另行应用尚未计入的期间及产出归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：`collected_record`
- 采集协议：`cp_grading`
- 来源：`fao-wood-harvesting`

- 数量范围：各实际组分的暂定宽泛 QA 筛查，不是默认值 (kg)
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 林道边参考类别产出
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`


## 7. 分配与共同产出处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `destination_set` | 分级与此前产出 | 将锯木/单板/枕木产出与实际纸浆/板材、其他用途、薪材及可售残余物核对；记录全部去向与门。剔除废物及现场残余物不可与预期产品互换。 | `unsd-roundwood-scope` |
| `attribution_decision` | 共享生产 | 先分离可直接归属作业。不可分负荷需要一个由实际过程驱动支持的有记录因果分配决策；无因果依据时使用同期数量/价格论证所选物理或经济方法及敏感性。不设通用质量或收入系数。 | |
| `cycle_allocation` | 生长与采伐期间 | 索引造林、抚育、萌芽/更新、间伐及最终采伐；核对初始、剩余与移出存量。将每项负荷/产出/资产关联其期间与采次；不得每次采伐都承担完整轮伐负荷，也不得不披露地遗漏未完成周期。 | |
| `shared_service` | 道路、堆场及设备 | 使用实测机时、使用/距离或其他有理由驱动，向确定节点及期间分配共享服务；已包含承包负荷须排除重叠自营资产/燃料。 | |
| `no_credit_default` | 木料、废物与碳 | 报告总交换及实际处理。不得自动赋予残余物替代、碳储存信用或避免负荷；显式场景独立于参考生产记录。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stand` | `stand` | 投入、存量、碳及场址台账 | 经营及存量记录 | 树种/龄组/来源/面积；初末存量；造林/抚育/投入；含水率/密度/碳；期间；实际资源/土壤/土地事件 | 林班记录、发票、实测调查及供应方记录；原始汇总操作：分离阶段、产出份额与组分，一次归一化；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg；原始体积/面积/数量；实际组分单位 | 每项事件与存量调查 | 实际完整适用生产周期 | 确定林班/场址 | 每 1 kg 参考流 | 调查不确定性；检测；来源历史；期间核对 |
| `cp_harvest` | `harvest` | 来源移出、产出及排放 | 采伐记录 | 批次/来源模式；立木转入质量或天然资源；采伐树木/形态；燃料/服务；移出/剩余/残余质量；排放物质/介质/方法 | 称重或同批桥接；作业日志；实测或有记录排放估算；原始汇总操作：核对来源/存量/移出；分离物质及来源；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg；实际载体单位；h | 每批次与作业 | 实际采伐期 | 确定来源林班 | 每 1 kg 参考流 | 地磅校准；路线及林班记录；方法不确定性 |
| `cp_extraction` | `extraction` | 转移与通行服务 | 运输记录 | 投入/产出批次质量/状态；距离/地形；载体；机时；通行份额；实际损失 | 批次追踪与设备/服务日志；原始汇总操作：核对同批转移，仅分摊使用服务；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg；实际载体单位；h | 每次移动 | 实际作业期 | 来源至命名集材场 | 每 1 kg 参考流 | 匹配批次号；计量及服务范围证据 |
| `cp_preparation` | `preparation` | 制备投入及产出 | 制备记录 | 转入/制备 kg；树皮/含水率；作业；耗材/服务；截余/树皮去向；根/瘿形态 | 称重、批次核对、设备日志与发票；原始汇总操作：核对制备木料、共同产出/废物/残余及含水率变化；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg；实际组分单位；h | 每批与作业 | 实际作业期 | 命名集材场/堆场 | 每 1 kg 参考流 | 校准；实测含水率；重复作业检查 |
| `cp_grading` | `grading` | 参考与去向产出 | 分级及发运记录 | 投入/产出 kg；树种/形态/等级；锯材/枕木/单板或其他去向；树皮/含水率；门；价格/驱动；能源/服务 | 分级单、磅单及林道边验收记录；原始汇总操作：汇总实际去向，参考产出仅归一为 1 kg 一次；最终参考流归一化只执行一次：原始批次总量除以同一边界、期间的正值最终参考产品数量；局部单位过程产出量乘以实测过程产出/最终参考数量比例，并仅对尚未分配的负荷应用必要的已审查归属系数；已按最终参考数量报告的量保持不变，不能再次相除。物料交接、余额及共产品数量先保留未分配实物流账，不用负荷分配系数缩减物料平衡。 | kg；实际组分单位；h | 每批与发运 | 实际采伐/发运期间 | 声明的林道边门 | 每 1 kg 参考流 | 验收规格；客户用途证据；可追溯核对 |
| `cp_direct_release_stand` | `stand` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_harvest` | `harvest` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_extraction` | `extraction` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_preparation` | `preparation` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |
| `cp_direct_release_grading` | `grading` | 逐节点实际直接释放及覆盖判定 | 活动、测量及方法证据台账 | site; process_id; lot/cohort; period; event_id; activation/evidence; carrier/formulation; activity_amount/unit; substance/species/particle_basis; receiving_medium; fossil/biogenic_origin; method/source/version/applicability; factor/value/unit; conversion; abatement_scope; measured_release; supplier_service_coverage; existing_row_id; shared_event_owner; allocation_state; reference_total | 将本节点输入/施用/设备日志逐项匹配排放事件；以实测或有适用性证据的方法和因子确定每一物质/介质的量。保留因子来源、单位换算、治理设备及不确定性；因子已含治理时不得再扣减。核对现有排放卡和承包服务，仅计一次；对未覆盖事件生成具体输出基本流，保留具体 UUID 核实证据。缺方法、量或身份时不能把数据包称为完整。 | 每种物质/介质的 kg；保留活动原单位 | 每次事件及批次/报告期核对 | 与节点活动及最终参考批次匹配的期间 | 实际活动场址；共用事件唯一归属 | 每 1 kg 参考流 | 仪表/测试；活动记录；方法和因子原始出处；服务范围；去重及完整性表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_once` | 每项清单 | 最终参考质量 M_ref 为匹配边界/期间的正值验收 kg；实物数量 q_phys = Q/M_ref。局部强度 q_i = Q/O_i 时，q_phys = q_i * O_i/M_ref；已按最终参考量报告的不再相除。环境负荷 q_burden = B_attributed/M_ref，其中 B_attributed 仅包含一次有据期间/产出归属；归属系数不能缩减实物平衡。 | 实际总量；产出集；分摊驱动；验收参考质量 | 每 kg 参考产出组分数量 |  |
| `mass_bridge` | 木料体积记录 | 净质量 = 同批实测实积乘兼容接收状态实测密度；层积换算需独立实测因子 | 同批体积/密度；树皮/含水率；换算不确定性 | 兼容 kg | |
| `stock_balance` | 生物与移出台账 | 同面积、期间及属性基准下，期初存量加实际生长/转入减移出/损失等于期末存量 | 调查及采伐记录；期间/来源模式 | 存量/移出核对；不重复资源输入 | |
| `carbon_and_emissions` | 实际基本流报告 | 使用明确声明的场址适用方法及采集活动/物质/介质；核对干碳存储、吸收/移出/残余及报告释放，不假设信用或中性 | 实际干物质/碳；期间；排放方法与活动 | 独立物质/区室数量及不确定性 | |
| `component_reconciliation` | 类别卡 | 展开实际零/一/多个交换，保留每项具体身份/属性/单位；数量与 Range 检查逐组分进行 | 发票/计量/配方/服务；实际路线 | 具体交换台账，不是异单位总和 | |
| `calculate_direct_release_ledger` | `stand`; `harvest`; `extraction`; `preparation`; `grading` | 每一唯一事件、物质和介质的原始释放量 E 取实测值，或按已引用适用方法从活动量 A 与同口径因子 EF 计算；只有方法确实为简单因子模型时才用 E = A * EF，先验证单位及治理边界。不同物质或介质不相加；原始释放台账保持未分配。对归属后的负荷总量仅除以匹配的正值最终参考数量 R 一次；已有最终参考强度不再归一化，共用事件仅分配一次。未解释物料差不自动转成排放，缺因子不等于零。 | cp_direct_release_stand; cp_direct_release_harvest; cp_direct_release_extraction; cp_direct_release_preparation; cp_direct_release_grading；现有排放卡；供应商覆盖；参考数量 | 按节点/物质/介质分列的原始与归属量及未解决缺口 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `traceable_lots` | 木料状态 | 关联场址/龄组/作业期、中间状态及去向验收 | 批次号、存量及发运台账 |
| `compatible_mass` | 计量 | 报告树皮/含水率基准、原单位、校准与换算不确定性 | 同批称重/调查/检测记录 |
| `actual_routes` | 替代路线 | 为每项路线差异及排除/合并作业提供证据；投入缺失不等于零 | 当前作业/供应方记录 |
| `cycle_and_assets` | 分摊 | 核对未完成期间、共享服务及全部产出份额 | 期间/服务/驱动台账 |
| `quantitative_evidence` | 范围与因子 | 有证据时以审查后的场址证据替代暂定筛查范围；方法/因子需来源与适用性 | 来源及实测不确定性记录 |
| `identity_completeness` | 最终具体交换 | 创建下游交换前核实实际流与支撑身份 | 身份证据与限定信息对齐 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference_gate` | 参考产出 | 名称/链接匹配真实产品产出；唯一 kg 质量基准及林道边门；实际用途须属于锯木/单板/枕木类别。 | `unsd-roundwood-scope` |
| `state_chain` | 过程图 | 核对木料状态与批次号；组合节点不得重复集材/制备/移出或产生竞争参考产出。 | `fao-wood-harvesting` |
| `origin_mode` | 来源与路线差异 | 核实实际经营/来源/历史；经营载体不得表示无证据天然来源。各批次仅启用有证据人工/萌芽/天然与技术差异。 | |
| `quantity_and_units` | 清单 | 每项数量具备协议、基准及 Range；保留组分单位与质量/体积桥接。解释异常；不得由缺数据推断零。 | |
| `output_and_attribution` | 产品/废物/残余物 | 完整去向集及有理由的产出/期间/共享资产分摊；不得存在无解释损失、重复负荷或假设替代。 | |
| `site_and_carbon` | 场址台账 | 核对存量、碳、土壤/残余及土地变化期间；明确实际排放物质/接收介质与核算方法。 | |
| `concrete_identities` | 数据集构建 | 具体 UUID/属性/单位必须符合实际状态、门、来源、去向与单位；类别汇总卡不是一个具体交换。 | |
| `validate_direct_release_coverage` | `stand`; `harvest`; `extraction`; `preparation`; `grading` | 对每个实际启用节点，以活动清单逐项核对 cp_direct_release_stand; cp_direct_release_harvest; cp_direct_release_extraction; cp_direct_release_preparation; cp_direct_release_grading：记录应为有量的具体基本流、证据充分的上游服务覆盖，或有证据的无相关活动。缺失/不明不是零，须作为数据包完整性阻断项。检查每种实际物质及介质的量、方法因子单位、具体 UUID 和既有卡/服务覆盖，防止漏排或重复；空分组、购买电力的上游排放或其他节点的单一 CO2 卡不能代替本节点的现场释放核对。共享资产服务不得产生重复物理排放事件。 |  |

- 按入场状态逐节点核对 required/conditional 激活与上游覆盖；外购已达状态原料不得重复此前生长、采收或整理，分类相同不能替代状态及门点匹配。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 有记录非针叶锯木/单板原木类别的前景生产数据包 |
| downstream_use | secondary_dataset；background_dataset；下游 process 与 lifecyclemodel 投影 |
| allowed_use | 同一林道边门、质量/含水率/树皮基准与实际路线的声明参考类别供给 |
| excluded_use | 成品木材/单板或处理产品；送厂门；纸浆/板材/薪材/其他用途参考；通用阔叶密度、碳或路线默认值 |
| required_metadata | 树种、来源/场址、林分模式、期间/龄组、采伐/制备体系、特殊形态、尺寸/等级/用途、门、质量/含水率/树皮、上游及分摊规则 |
| required_quality_disclosure | 来源/数量不确定性；不完整期间/场址台账；上游遗漏；暂定筛查；未解身份及实际校验覆盖 |
| update_trigger | 新树种/形态或去向规格；路线/门、经营、期间分摊、来源方法、实测换算或具体身份改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-roundwood-scope` | official_guidance | UNSD CPC 产品说明 03121，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/03121 ；访问于 2026-10-08 | 产品纳入/排除及用途分类，不提供数量因子 |
| `fao-wood-harvesting` | official_guidance | FAO 可持续森林经营工具箱，Wood harvesting，https://www.fao.org/sustainable-forest-management-toolbox/modules/wood-harvesting/2/en?tabInx=1 ；访问于 2026-10-08 | 采伐、集材、集材场制备及替代技术责任，不提供通用数量参数 |
