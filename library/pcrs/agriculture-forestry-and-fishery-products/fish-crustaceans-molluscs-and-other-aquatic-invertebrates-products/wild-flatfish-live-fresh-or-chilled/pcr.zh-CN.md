---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-flatfish-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 生产者首次交接处的完整野生食用比目鱼

## 1. 范围与适用性

本 PCR 覆盖生产者或采集者首次交接处实际野生捕捞的完整食用比目鱼，状态为活体、鲜品或冷藏品。完整指未去头、未去内脏鱼体，不是鱼片、鱼肉或鱼卵。一个已声明船舶或采集者运营单元及可追溯航次或作业期可以包含多个实际物种或渔具事件，但不是多场址联合平均。人工养鱼、野生苗种或饲料或观赏最终用途、去内脏或去头鱼、冻结及加工品均排除。纳入范围由实际首次交付地点与责任决定，不假定港口。官方分类比本完整食用品第一交付边界更宽。[un-cpc3-flatfish]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-flatfish-live-fresh-or-chilled |
| classification_refs | CPC 3.0 04231; narrower |
| covered_products | 首次生产者交接处具有实际物种、等级及活体或鲜品或冷藏状态的完整野生食用比目鱼 |
| excluded_products | 养殖鱼；非食用苗种或饲料或观赏品；去头或去内脏鱼；分离部位或鱼片或鱼肉或鱼卵；冻结或熟制或加工鱼 |
| representative_product | 一个已声明物种与状态批次的完整野生食用比目鱼，不设通用示例物种或换算 |
| production_route | 具有有证据渔具差异的独立捕捞父活动 -> 实际分选前保鲜或旁路 -> 分级 -> 实际分级后保鲜或旁路 -> 交付呈现 |
| market_state | 实际活体、鲜品或冷藏完整食用鱼；不同状态保持独立批次 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际生产者首次交接处验收的完整野生食用比目鱼 |
| How much | 1 kg |
| How well | 有食用验收证据；实际物种、状态与等级；未去头、未去内脏；排除外来水、冰及包装 |
| How long or cycle | 一个声明的交付批次，追溯至航次或作业期、维护或闲置期间、期初期末存量及资产服务期 |
| reference_flow_link | `whole_flatfish_handover` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 生产者首次交接处的完整野生食用比目鱼 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 已核实物种或分类；野生来源；实际水体及海洋或内陆情境；渔具事件；完整未去头未去内脏状况；食用等级及验收证据；活体或鲜品或冷藏状态；主动致死或死亡历史；净质量方法；首次交付边界或所有者或时间；航次或作业期及存量期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤在实际交付边界称量验收完整鱼体净质量；排除包装、冰及外来水，不排除原有器官或自然保留体液。计数须采用相同物种、状态及等级实测样本，不采用通用可食率。 |
| `energy_units` | electricity rows | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表 kWh 并按能量单位组以 1 kWh = 3.6 MJ 换算；不转为千克，也不推定燃料热值。 |
| `water_mass` | water and effluent rows | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用直接质量或结合实测温度及盐度的实际密度处理体积记录；不得将海水、含盐废水或氧气体积强制按水密度换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 明确水体的野生种群与实际捕捞作业量；纳入自有资产及采购投入的上游负担 |
| starting_condition_role | 自然资源至渔获的前景起点，而非人工生物生产 |
| product_classification_scope | CPC 3.0 04231 narrower whole-food first-gate methodology |
| recursive_input_rule | 已通过生产者首次交接的外购完整鱼不属于本参考路线，不能通过递归重写成自有捕捞。作为饵料的外购同类鱼是独立供应投入，保留实际捕捞及保存上游负荷，不属于参考产品。 |
| upstream_dataset_requirement | 每个采购投入或服务均须具有兼容的供应状态、地点、技术及期间；披露遗漏与替代 |
| disclosure | 实际交付边界与所有权；捕捞技术与栖息地；全部启用节点及旁路；状态或存量转换；资产期间；共同输出与分配；定量证据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `capture_primary` | capture; grade; preserve; presentation | 本记录从所声明单一运营单元的野生资源移除开始，纳入外购投入及分配资产的上游负担，终止于实际生产者或采集者首次交接。自然繁殖不是零价格孵化场过程。已通过首次生产者交接的外购同类鱼超出参考路线；实际购入饵料保留独立供应方捕捞与保存负荷，不作为本批自有渔获。 | `foreground-flatfish-method` |
| `state_chain` | all lots | 每笔交接保留物种、观察到的活体或鲜品或冷藏状态、时间、净质量、批次与作业段编号。分选前保鲜通过 preserve_unsorted_in 与 preserved_unsorted 将 captured_unsorted 送至 grade_catch_in；未发生时采用相同状态的直接捕捞至分级边。分级后保鲜通过 preserve_fish_in 与 preserved_food 将 graded_food 送至 presentation_fish_in；未发生时无论此前是否保鲜，均采用相同状态的直接分级至呈现边。一个作业段只产生其对应输出；两段不是对同一已完成输出返工。全部干预、死亡、水或冰存量及损失归入实际作业段记录，capture 承担的船上燃料只记录一次。顺序、状态或食用资格未知时不得定稿。 | `foreground-flatfish-method` |
| `gear_delta` | capture | 将底拖网、固定或定置或刺网、钓线及其他有证据技术声明为 capture 父活动的差异。拖网记录需底接触轨迹、时长、渔具几何及海底情境；被动网具需投放面积或长度、浸泡及回收；钓线需钩数作业量与实际饵料。多种渔具仅可作为分别记录的事件共存；同一事件不能被归入两条竞争路线。保留当前场址证据，不将美国夏鲆表现、法规或资源状态推广至全部比目鱼。 | `noaa-summer-flounder`; `foreground-flatfish-method` |
| `pre_gate_responsibility` | all nodes | 实际第一交付边界前的全部生产者自有活动均纳入，包括交付前岸上移动、清洁及限定暂养。消费者分销、切片、去头或去内脏、冻结、人工养成、苗种或饲料或观赏最终用途及加工超出所覆盖最终产品。若转运就是生产者实际首次交接，则该处即为交付边界，不能自动增加后续港口阶段。 产品保管交接边界与资源服务核算期间分开：海上首次交接不移至港口，但以实际航次期间账一次归属必要的生产者返航、怠速及返航周期准备；记录实际结束时间及分属其他航次的服务份额。买方分销与后续无关捕捞不纳入本批，不得把返航同时计入下一航次。 | `foreground-flatfish-method` |
| `ownership_closure` | all nodes | 为船用燃料、岸上公用工程、共享服务事件、外购水、自然取水、冰生产、废水处理及渔具事件指定唯一承担者。capture 船用燃料包括船上保鲜电力；自制冰投入替代外购冰生产。外部处理或服务投入携带供应方资源，不再重复供应方直接排放。跟踪鱼、水、燃料、渔具、制冷剂及周转容器的期初期末存量。 | `foreground-flatfish-method` |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | 野生捕捞与收集 | `required` | 每个已声明的野生捕捞航次或收集作业期 | 从自然来源至已收集渔获；一个船舶或采集者运营单元 | `captured_unsorted` |
| `grade` | 等级与去向分选 | `required` | 将所有收集批次按实际物种、食用等级及去向分类；仅检验且无剔除的批次须明确说明 | 完整的去向划分；不是第二次捕捞 | `graded_food` |
| `preserve` | 限定暂养与整鱼保鲜 | `conditional` | 实际发生自有交付前分选前及或分级后暂养、致死或冷却；各作业段使用独立编号，缺少的作业段按相同状态旁路 | 具有存量及损失记录的实际可用状态干预 | 每 1 kg 最终参考流；pre_sort 实测 preserved_unsorted，post_grade 实测 preserved_food，各仅在对应实际作业段启用 |
| `presentation` | 交付呈现与生产者首次交接 | `required` | 每个最终参考批次，无论散装还是包装 | 生产者第一交付边界的实际最终状态与鱼体净质量验收 | `whole_flatfish_handover` |

### 过程：野生捕捞与收集 (`capture`)

捕捞从所声明野生来源独立移除生物，不是人工繁育。记录物种、初始活体或鲜品状态及移除时间。完整混合渔获直接进入 grade，或经实际分选前保鲜作业段；冷却及其状态或损失由保鲜作业段承担，而非捕捞生物过程。完整可归属生产者航次，包括出航、搜索、投放、起网、船上设备，以及海上首次交接后必要的实际返航和怠速，均使用唯一 capture 燃料台账。产品保管仍止于首次交接；后续无关捕捞及买方分销排除。分选与保鲜可在实体时间上重叠，但交接及作业段记录须区分责任，不重复数量。

#### 输入

##### 产品流

###### 单独计量的液态水 (`capture_internal_water_ice_receipt_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`

###### 单独计量的固态水冰 (`capture_internal_water_ice_receipt_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`



###### 捕捞准备使用的外购岸电 (`capture_shore_electricity`)

采用实际供应商、电压、地理范围及电表期间；将岸电与已记录船用燃料所发电力分开。

- 选定流：捕捞准备使用的外购岸电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单独计量的液态水 (`capture_internal_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`

###### 单独计量的固态水冰 (`capture_internal_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture`



###### 分选交接处收集的完整未分选渔获 (`captured_unsorted`)

计量捕捞至下一责任交接处的完整混合保留渔获，并记录物种估计、观察到的初始活体或鲜品状态、时间及交接编号。实际分选前保鲜时进入 preserve_unsorted_in，否则保持相同状态直接进入 grade_catch_in。此为非最终输出，不固定为一千克；后续任何冷却状态属于实际保鲜作业段，而非捕捞生物过程。

- 选定流：分选交接处收集的完整未分选渔获
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

##### 废物流

##### 基本流

###### 向未细分空气排放的化石源二氧化碳 (`capture_fossil_co2`)

仅计入由捕捞燃料台账承担的实际直接化石燃料燃烧。使用燃料碳含量或成分证据及独立记录的氧化方法；流身份不提供排放因子。更细分介质须另行核实身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`foreground-flatfish-method`
- 绑定：`fixed`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

### 过程：等级与去向分选 (`grade`)

按交接或作业段编号及观察状态匹配，直接接收 captured_unsorted 或实际分选前保鲜的 preserved_unsorted。各等级合格比目鱼直接进入 presentation，或实际分级后保鲜作业段。其他有意物种或非食用销售、活体放归、直接环境弃置及受管理废物分别记录去向。每张概括卡展开为独立明确的实际交换，不声明通用混合物种 UUID。

#### 输入

##### 产品流

###### 单独计量的液态水 (`grade_internal_water_ice_receipt_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`

###### 单独计量的固态水冰 (`grade_internal_water_ice_receipt_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`



###### 分选接收的完整未分选渔获 (`grade_catch_in`)

接收唯一实测上游交接：分选前保鲜旁路时为 captured_unsorted，实际完成分选前保鲜时为 preserved_unsorted。保留物种及观察状态，包括已冷却未分选渔获，排除冰、容器与外来水。分选不表示每尾输入鱼均已符合食用要求。

- 选定流：分选接收的完整未分选渔获
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 实际供应边界的外购分级电力 (`grade_electricity`)

记录电表读数或有依据的设备运行分配；甲板分级若由船上供电，则使用 capture 承担的燃料台账，不另增加外购电力。

- 选定流：实际供应边界的外购分级电力
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 外部供应的分级或卫生用水 (`grade_water_supply`)

记录供应方及处理状态；此流不是自取海水，也不表示对鱼体进行清洗或去内脏。

- 选定流：外部供应的分级或卫生用水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单独计量的液态水 (`grade_internal_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`

###### 单独计量的固态水冰 (`grade_internal_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade`



###### 按验收或降级食用等级明确的合格完整比目鱼 (`graded_food`)

按物种、观察到的活体或鲜品或冷藏状态及交接记录每个验收或降级食用等级。仅在实际增加分级后保鲜作业段时进入 preserve_fish_in，否则保持相同状态直接进入 presentation_fish_in，即使此前已发生分选前保鲜。食用验收需独立证据，不兼容状态批次保持分开。

- 选定流：按验收或降级食用等级明确的合格完整比目鱼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

##### 废物流

###### 送往外部处理的分级废水 (`grade_wastewater_service`)

记录水质量、组成、服务接收方及污泥交接；如处理属于外部，不得将其后续基本流出水重复作为自有直接排放。

- 选定流：送往外部处理的分级废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

##### 基本流

###### 直接回到接收水体的实际分级回流水 (`grade_direct_water_return`)

将大宗水质量与逐一表征的污染物成分分开计量，核算蒸发与存量变化；回流水不证明水质清洁或污染负荷为零。

- 选定流：直接回到接收水体的实际分级回流水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 实际蒸发至已识别空气区室的水 (`grade_actual_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅实际有证据蒸发时记录，保留实测或模型质量、期间、接收空气及不确定性，并核对进水、转移、存量及其他水去向；不得无证据补平衡或重复水蒸气排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_grade`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：U_grade_actual_water_evaporation
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

### 过程：限定暂养与整鱼保鲜 (`preserve`)

同一保鲜责任可具有分选前作业段（preserve_unsorted_in -> preserved_unsorted -> grade）及分级后作业段（preserve_fish_in -> preserved_food -> presentation）。它们是不同的时间作业段记录，不是虚构返工环路，也不是一个作业段同时输出两种产品。实际时间决定启用哪个作业段；支持捕捞 -> 船上冷却 -> 上岸分级 -> 交付，不虚构先行分选。分选前输出是未经资格确认的混合渔获，其后续食用验收或去向决定由 grade 承担。已是鲜品的渔获不虚构致死。活体降温不等于死亡，死亡与主动致死分别观察。每段仅承担一次全部暂养资源、水或冰存量、放归及损失；全部船上燃料或发电仍归 capture。限定维护可含有记录的饲料，但排除主动养成或育肥。实际顺序、状态或食用资格未知时不得定稿。

#### 输入

##### 产品流

###### 单独计量的液态水 (`preserve_internal_water_ice_receipt_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preserve`

###### 单独计量的固态水冰 (`preserve_internal_water_ice_receipt_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preserve`



###### 进入限定保鲜的合格完整比目鱼 (`preserve_fish_in`)

仅实际分级后保鲜作业段通过本卡接收来自 graded_food 的实测合格完整比目鱼。保留记录的输入状态与生物净质量，不固定为最终一千克。分选前未经资格确认的混合渔获作业段改用 preserve_unsorted_in。

- 选定流：进入限定保鲜的合格完整比目鱼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 用于捕捞渔业船上或上岸港口冷却的冰 (`preserve_capture_ice`)

仅实际外部供应的捕捞冷却冰使用此身份，记录生产或供应边界及采购质量。自制冰采用自有水与能源投入，不再加入外购冰生产负担。冰不属于鱼体质量，活体冷却资格仍须实际观察。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 绑定：`fixed`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 实际限定活体暂养使用的交付氧气 (`preserve_oxygen`)

仅在实际供氧时启用，记录纯度、交付状态及实测千克数。工厂出厂且以体积为参考的氧气流不能自动成为交付质量流；换算须有状态特定证据。

- 选定流：实际限定活体暂养使用的交付氧气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 外部供应的保鲜或暂养用水 (`preserve_water_supply`)

记录实际处理状态及供应方。总循环泵流量不是新增供水；区分补水、自取水与外购水。

- 选定流：外部供应的保鲜或暂养用水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 自有岸上暂养与冷却的外购电力 (`preserve_electricity`)

按时间及供应方限定计量实际泵、冷机与曝气用电。对 capture_fuel 已代表的船上发电，或由外部冷却服务承担的电力，不得再增加外购电力。

- 选定流：自有岸上暂养与冷却的外购电力
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 进入分选前保鲜的完整未分选渔获 (`preserve_unsorted_in`)

仅用于实际分选前暂养或冷却作业。直接与 captured_unsorted 配对；此时尚未完成食用资格及去向分选。记录每个物种与状态、实际生物质量、作业段编号及时间，不能替换为分级后 preserve_fish_in 卡。

- 选定流：进入分选前保鲜的完整未分选渔获
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单独计量的液态水 (`preserve_internal_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preserve`

###### 单独计量的固态水冰 (`preserve_internal_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preserve`



###### 实际保鲜后的合格完整比目鱼 (`preserved_food`)

仅分级后保鲜作业段通过本卡向 presentation 输出合格完整比目鱼。记录损失后的实际状态与实测量，主动致死或死亡不能保留为活体。鲜品或冷藏品食用验收需独立证据。分选前作业段改以 preserved_unsorted 输出至分级。

- 选定流：实际保鲜后的合格完整比目鱼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 交接至分级的完整保鲜后未分选渔获 (`preserved_unsorted`)

这是实际分选前保鲜后交接至 grade_catch_in 的输出，不是已通过食用验收的最终鱼。保留该作业段损失后的观察状态与实测质量。死亡鱼须继续明确识别，以供 grade 食用验收或剔除，不能暗中将分选前鱼体认证为可食用。

- 选定流：交接至分级的完整保鲜后未分选渔获
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

##### 废物流

###### 送往外部处理的暂养水或融冰水 (`preserve_wastewater_service`)

记录实际质量、组成、服务边界及接收方。融冰水来源于供应冰或自有冰，不是第二次淡水取水。

- 选定流：送往外部处理的暂养水或融冰水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

##### 基本流

###### 直接排放的实际保鲜废水水体量 (`preserve_direct_water_return`)

闭合取水、外购水、融冰水、蒸发及池体期初期末存量。循环水属于内部流；直接大宗回流水与成分排放是不同测量，不能替代污染物质量。

- 选定流：直接排放的实际保鲜废水水体量
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 自有岸上保鲜向未细分空气排放的化石源二氧化碳 (`preserve_fossil_co2`)

仅记录由保鲜节点承担的岸上燃料直接排放；capture 承担的船上排放仍留在 capture。独立提供实际燃料组成与排放计算证据，不能以 UUID 选择替代。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 绑定：`fixed`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 自有暂养与冷却实际蒸发的水 (`preserve_evaporated_water`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。当蒸发对水平衡重要时，记录实测或有独立证据的蒸发；排除内部循环及无记录的补平衡数值。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_preserve`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

### 过程：交付呈现与生产者首次交接 (`presentation`)

首次交付呈现在未发生分级后保鲜时接收 graded_food，实际完成分级后作业段时接收 preserved_food；两条路线此前均可能已经发生分选前保鲜。匹配唯一末段来源、观察状态与实测量。不得在交付边界暗中加入致死或冷却。持续暂养资源或损失一直至实际交付边界均归匹配的保鲜作业段；呈现不承担重复暂养事件。散装或包装呈现分别记录实际包装材料或周转；首次交接后的分销在边界之外。

#### 输入

##### 产品流

###### 单独计量的液态水 (`presentation_internal_water_ice_receipt_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`

###### 单独计量的固态水冰 (`presentation_internal_water_ice_receipt_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`



###### 进入交付呈现的合格完整比目鱼 (`presentation_fish_in`)

接收唯一实际末段上游交接：未发生分级后保鲜时为 graded_food，实际完成分级后作业段时为 preserved_food。仅发生分选前保鲜并不选择 preserved_food。匹配物种、观察状态及实测质量，不将接收量固定为一千克。

- 选定流：进入交付呈现的合格完整比目鱼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_presentation`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 外购交付呈现与交付前岸上装卸电力 (`presentation_electricity`)

采用秤、包装设备及自有岸上装卸的实际电表与耗用期间。冷却电力一直至实际交付边界均归属 preserve。

- 选定流：外购交付呈现与交付前岸上装卸电力
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_presentation`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 采购的周转容器清洁用水 (`presentation_water_supply`)

记录第一交付前自有清洁或唯一分配的周转清洁实际供应水，排除已由外部清洁服务承担的资源。

- 选定流：采购的周转容器清洁用水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_presentation`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单独计量的液态水 (`presentation_water_ice_handover_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`

###### 单独计量的固态水冰 (`presentation_water_ice_handover_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`



###### 单独计量的液态水 (`presentation_internal_water_ice_transfer_water`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的液态水
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`

###### 单独计量的固态水冰 (`presentation_internal_water_ice_transfer_ice`)

仅记录该物质在所述过程交接的独立实测质量，使用配对交接号和相同批次、时期。不得将水与冰的集合总量复制到本卡；其载运或保护作用不改变鱼体净参考质量。

- 选定流：单独计量的固态水冰
- 流属性/单位：Mass / kg
- 数量规则：独立计量液态水或固态水冰中的本项质量，按实际最终合格净参考输出归一化；量测换算须有实际密度和相态证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_presentation`



###### 生产者首次交接处的完整野生食用比目鱼 (`whole_flatfish_handover`)

实际首次交接处的一个合格状态、物种及等级批次，未去头、未去内脏。鱼体净质量排除外来水、冰、包装与容器，不采用鱼片得率或可食率换算。自然保留体液采用一致口径。

- 选定流：生产者首次交接处的完整野生食用比目鱼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值 `fixed_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：方法公式 `method_formula`
- 采集协议：`cp_presentation`
- 来源：`foreground-flatfish-method`
- 数量范围：精确最终参考量
  - 范围角色：允许范围 `allowed_range`
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：方法公式 `method_formula`
  - 来源：`foreground-flatfish-method`

##### 废物流

###### 送往外部处理的交付呈现清洁废水 (`presentation_wastewater_service`)

记录实际废物组成及服务接收者。若实际直接排放，则改在直接排放卡中分别明确大宗水与实际成分，不能推定外部服务。

- 选定流：送往外部处理的交付呈现清洁废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_presentation`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

##### 基本流

###### 直接回到环境的实际交付呈现清洁水 (`presentation_direct_water_return`)

仅记录实际直接排放水及接收水体，闭合供水、存量及蒸发，排除已送往外部处理的任何水量。

- 选定流：直接回到环境的实际交付呈现清洁水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_presentation`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 自有岸上装卸向未细分空气排放的化石源二氧化碳 (`presentation_fossil_co2`)

仅计入 presentation_shore_fuel 的实际直接化石燃料燃烧，不重复捕捞船舶、保鲜燃料或外部服务排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_presentation`
- 来源：`foreground-flatfish-method`
- 绑定：`fixed`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

###### 实际蒸发至已识别空气区室的水 (`presentation_actual_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅实际有证据蒸发时记录，保留实测或模型质量、期间、接收空气及不确定性，并核对进水、转移、存量及其他水去向；不得无证据补平衡或重复水蒸气排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：计算值 `calculated_value`
- 适用范围：场址特定 `site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 `reference_flow`
- 证据类型：由采集计算 `calculated_from_collection`
- 采集协议：`cp_presentation`
- 来源：`foreground-flatfish-method`
- 数量范围：暂定宽泛筛选区间，不能作为清单默认值
  - 范围角色：QA 校验 `qa_guardrail`
  - 下限：0
  - 上限：U_presentation_actual_water_evaporation
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 `reference_flow`
  - 证据类型：推理估算 `reasoned_estimate`

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `subdivide_first` | all shared burdens | 优先依据实际记录细分可物理分离的渔具事件、定向物种航次、节点电表及独立供应服务；不得将共同船舶航次同时分配为捕捞和运输服务两次。 | `foreground-flatfish-method` |
| `intended_output_set` | grade_other_intended_products; preserve_nonfood_sale; presentation_nonfood_sale | 列出全部独立有意物种、食用等级或非食用销售输出及实际交接边界。对不可细分的共同捕捞负担，存在可证明的物理因果关系时采用其证据；否则明确采用全部有意输出实际同期出厂净销售收入的经济分配。记录理由、价格、数量、不确定性及质量分配敏感性。有因果细分证据时不得改用经济分配。剔除物、放归物和废物不能仅因有质量就成为有意销售输出；处理负担仍归属生成活动，不自动给予替代抵扣。 | `foreground-flatfish-method` |
| `period_assets` | capture_assets; preserve_assets; presentation_returnable_assets | 按航次或作业期、维护或闲置期、跨截止时点暂养及最终交付批次建立索引。按所声明建造、运行、更换与终止期间的实际服务或使用分配资产，披露残余能力及退役。将期初存量与上期负担、期末存量与未来输出关联，不得双重计费。不假设通用船舶、网具或筐寿命。 | `foreground-flatfish-method` |
| `shared_consumers` | capture; grade; preserve; presentation | 共享资产或服务台账须列明船舶或场址资产、每个使用节点及期间、实测因果分配指标与总和为一的份额。船舶制造及燃料由 capture 承担，并在全部鱼类销售输出间分配，而不是在每个下游节点计入完整资产。岸上共享资产及清洁或换批事件采用电表或因果使用量；替代分配方式及敏感性必须明确记录。不得同时增加外部服务及其全部资源。 | `foreground-flatfish-method` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | 从自然来源至已收集渔获；一个船舶或采集者运营单元 | 测量记录与有支持的派生数量 | event_id；pass_id；航次或作业期；lot/transfer_id；物种；渔具；活体或鲜品或冷藏状况；食用资格；时间或交付边界；承担者；原始数量或单位；期初期末存量；去向；电表或油罐；浓度或碳含量或密度因子及来源；份额指标；最终验收净质量 kg | 采用经校准质量测量、配对交接记录、电表或油罐存量核对及有代表性的状态特定计数或密度样本。概括性卡逐一明确实际交换。capture 另记作业量、底接触、兼捕及渔具事件；grade 记录每种去向；preserve 记录干预、死亡、水与制冷剂闭合；presentation 核实排除冰、水及包装的经校准最终净质量。派生排放保留有独立证据的组成或因子及计算。 | kg; MJ | 每次事件或交接及电表区间；逐航次或作业期及截止点核对 | 完整声明报告期间、维护或闲置事件、期初期末存量及资产服务阶段 | 声明单一运营单元内仅本真实节点 | 每 1 kg 参考流 | 校准；原始凭证；存量或交接闭合；因子来源；独立样本；用独立留出作业期审查替代暂定筛选 |
| `cp_grade` | `grade` | 完整的去向划分；不是第二次捕捞 | 测量记录与有支持的派生数量 | event_id；pass_id；航次或作业期；lot/transfer_id；物种；渔具；活体或鲜品或冷藏状况；食用资格；时间或交付边界；承担者；原始数量或单位；期初期末存量；去向；电表或油罐；浓度或碳含量或密度因子及来源；份额指标；最终验收净质量 kg | 采用经校准质量测量、配对交接记录、电表或油罐存量核对及有代表性的状态特定计数或密度样本。概括性卡逐一明确实际交换。capture 另记作业量、底接触、兼捕及渔具事件；grade 记录每种去向；preserve 记录干预、死亡、水与制冷剂闭合；presentation 核实排除冰、水及包装的经校准最终净质量。派生排放保留有独立证据的组成或因子及计算。 | kg; MJ | 每次事件或交接及电表区间；逐航次或作业期及截止点核对 | 完整声明报告期间、维护或闲置事件、期初期末存量及资产服务阶段 | 声明单一运营单元内仅本真实节点 | 每 1 kg 参考流 | 校准；原始凭证；存量或交接闭合；因子来源；独立样本；用独立留出作业期审查替代暂定筛选 |
| `cp_preserve` | `preserve` | 具有存量及损失记录的实际可用状态干预 | 测量记录与有支持的派生数量 | event_id；pass_id；航次或作业期；lot/transfer_id；物种；渔具；活体或鲜品或冷藏状况；食用资格；时间或交付边界；承担者；原始数量或单位；期初期末存量；去向；电表或油罐；浓度或碳含量或密度因子及来源；份额指标；最终验收净质量 kg  实际服务供应者/范围/功能单位/属性单位组及未解决支持；水冰来源去向和配对编号；实物包装发出/返还/存量；| 采用经校准质量测量、配对交接记录、电表或油罐存量核对及有代表性的状态特定计数或密度样本。概括性卡逐一明确实际交换。capture 另记作业量、底接触、兼捕及渔具事件；grade 记录每种去向；preserve 记录干预、死亡、水与制冷剂闭合；presentation 核实排除冰、水及包装的经校准最终净质量。派生排放保留有独立证据的组成或因子及计算。 | kg; MJ  服务按经核实供应方原生功能单位 provider_service_unit 分别采集，不转为材料千克；| 每次事件或交接及电表区间；逐航次或作业期及截止点核对 | 完整声明报告期间、维护或闲置事件、期初期末存量及资产服务阶段 | 声明单一运营单元内仅本真实节点 | 每 1 kg 参考流 | 校准；原始凭证；存量或交接闭合；因子来源；独立样本；用独立留出作业期审查替代暂定筛选 |
| `cp_presentation` | `presentation` | 生产者第一交付边界的实际最终状态与鱼体净质量验收 | 测量记录与有支持的派生数量 | event_id；pass_id；航次或作业期；lot/transfer_id；物种；渔具；活体或鲜品或冷藏状况；食用资格；时间或交付边界；承担者；原始数量或单位；期初期末存量；去向；电表或油罐；浓度或碳含量或密度因子及来源；份额指标；最终验收净质量 kg  实际服务供应者/范围/功能单位/属性单位组及未解决支持；水冰来源去向和配对编号；实物包装发出/返还/存量；| 采用经校准质量测量、配对交接记录、电表或油罐存量核对及有代表性的状态特定计数或密度样本。概括性卡逐一明确实际交换。capture 另记作业量、底接触、兼捕及渔具事件；grade 记录每种去向；preserve 记录干预、死亡、水与制冷剂闭合；presentation 核实排除冰、水及包装的经校准最终净质量。派生排放保留有独立证据的组成或因子及计算。 | kg; MJ  服务按经核实供应方原生功能单位 provider_service_unit 分别采集，不转为材料千克；| 每次事件或交接及电表区间；逐航次或作业期及截止点核对 | 完整声明报告期间、维护或闲置事件、期初期末存量及资产服务阶段 | 声明单一运营单元内仅本真实节点 | 每 1 kg 参考流 | 校准；原始凭证；存量或交接闭合；因子来源；独立样本；用独立留出作业期审查替代暂定筛选 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `event_normalization` | all inventory rows | 明确保留两种标注视图。先对完整声明群体、航次或运行核对未作共产品分配的实际接收、转移、产品、损失及存量；内部转移按相同状态与单位配对并保留实测质量。以有证据的服务份额，将共享资源或服务事件一次归属实际使用节点及期间，不用共产品份额缩小产品、生物量、水或废物分区。将此物理清单除以相匹配且为正的最终验收净千克。再根据第 7 节共产品规则，仅分配一次并另行生成标注的单输出 LCA 负荷或清单投影，同时保留未分配清单及分配矩阵。不得用已分配交换检验未分配物理闭合、在下游再次乘输出份额，或把内部数量设为最终 1 kg。 | event records; share drivers; final accepted net kg | amount per 1 kg reference flow | `foreground-flatfish-method` |
| `quantity_derivations` | water; exhaust; count-recorded biomass | 计数采用匹配物种及状态的实测质量样本换算；体积采用实际条件特定密度换算；实际排放依据有记录的燃料或碳含量或氧化、设备因子及实际活动量推导。记录每个因子、来源、单位、不确定性及中间计算；本 PCR 除已核实单位换算外不提供数值因子。 | matching samples; density/composition/factor evidence; actual activity | traceable mass/energy/emission quantities | `foreground-flatfish-method` |
| `conditional_interface_envelopes` | capture_internal_water_ice_receipt; capture_internal_water_ice_transfer; grade_internal_water_ice_receipt; grade_internal_water_ice_transfer; grade_actual_water_evaporation; preserve_internal_water_ice_receipt; preserve_external_service; preserve_internal_water_ice_transfer; presentation_internal_water_ice_receipt; presentation_external_service; presentation_actual_source_water; presentation_internal_water_ice_transfer; presentation_water_ice_handover; presentation_actual_water_evaporation | 对每张明确列出的条件接口卡，在实际身份、状态、节点、作业段及单位实例化后，以独立代表性参考运行的同视图归一化最大值乘预先声明且不小于 1 的裕度，或同单位与基准供应设计包络建立 U_row。保留样本、来源、基准及不确定性；不得用目标批次建立自身上界。服务单位及支持未核实或独立包络缺失均是未解决实例，不能声称数值 QA 通过，不填零。水冰与包装的实物流转和服务折算量分别闭合。 | 独立参考记录；实际单位与基准 | U_row | `foreground-flatfish-method` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all lots | 必须明确物种、状态、食用资格及实际第一交付边界承担者，不得从 CPC 或宽泛流标签推定。 | 可追溯物种、渔获、保管及验收记录 |
| `dq_effort` | capture | 代表完整航次、季节条件、渔具共存、返航或怠速及兼捕；披露缺少观察者、空间覆盖及未表征生态后果。 | 航次日志；轨迹；渔具及物种观察 |
| `dq_balance` | all nodes | 记录具有不确定性的存量及交接闭合，披露未解决的非零残差，不虚构补平衡流。 | 校准；配对交接；期初期末清单 |
| `dq_quantitative` | all amounts | 采集实际数量证据。暂定筛选区间不提供因子或实测值，独立留出作业期检查不能用批次自身最大值测试替代。 | 原始测量；独立来源因子；留出样本 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_capture_fuel` | `capture`; 输入; 产品流 | 必须辨认并分别采集“按牌号和供应边界明确的实际船用或采集作业燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按采购量、期初油舱存量、期末存量及有记录的系统外用量核算。区分海洋和内陆捕捞；淡水捕捞柴油身份不能代表海洋燃料。船上全部用能者，包括其他节点的电力，均在船舶台账中只分配一次。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_gear_materials` | `capture`; 输入; 产品流 | 必须辨认并分别采集“按材料明确的捕捞渔具生产与更换”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：将实际使用的网具、网板、底绳、浮子、钓线等按材料及寿命或使用份额展开。不得假设所有比目鱼渔业都采用拖网。丢失与回收渔具分别记录，不自动给予更换抵扣。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_bait` | `capture`; 输入; 产品流 | 必须辨认并分别采集“按物种和来源明确的实际钓饵或其他诱饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在有记录的用饵技术中启用。记录上游生产、保存及未被渔获摄取的饵料；不得为不用饵的网具虚构饵料。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_lubricants` | `capture`; 输入; 产品流 | 必须辨认并分别采集“消耗的润滑剂与维护材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：保留产品成分、补充量、回收废料和溢漏记录；区分消耗量与期初存量。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_assets` | `capture`; 输入; 产品流 | 必须辨认并分别采集“分配的船舶与捕捞设备材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录建造、改装和更换材料清单及所观察到的船舶服务期份额；不得为每个节点或航次重新计入整艘船。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_internal_water_ice_receipt` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际内部接收的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际从其他声明节点转入时启用。按实际水冰状态、来源所有者及转移/事件/作业段编号拆分，配对发送端实测量与组成，不新增取水、购买或生产负荷。同节点循环仅属辅助存量账，不形成新转移；排除其他材料卡已含的载体。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_wild_biomass_removed` | `capture`; 输入; 基本流 | 必须辨认并分别采集“从自然水体移除的野生水生生物量，按物种与水体明确”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际从环境移除的生物，包括保留及随后放归或弃置的渔获。返回环境是另一笔实际事件，不是避免捕获的负排放抵扣。下游发布前须核实适当的生态资源流身份。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_internal_water_ice_transfer` | `capture`; 输出; 产品流 | 必须辨认并分别采集“实际转至其他声明节点的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际有计量的条件水冰转移，保留接收节点卡及相同来源、状态、组成、事件/作业段编号、量与单位；核对期初期末存量及融化蒸发去向。不是环境排放或独立销售共产品，不重复资源提取或供应负荷。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_managed_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“送往受管理处理的捕捞剔除物与废材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际废物组成和接收者分别展开鱼类剔除物、废润滑剂和回收渔具。受管理服务不属于直接基本流排放。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_bait_managed_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“送往受管理处理的实际未用或废饵料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料及接收者记录收集的饵料废物，不得重复直接进入水体的同一饵料。退回存量的可用饵料属期末存量，不是废物或新增采购；按事件核对期初、采购、使用、退回及弃置饵料。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_live_release` | `capture`; 输出; 基本流 | 必须辨认并分别采集“观察到并放回原水体的活体兼捕生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：明确每个物种及接收水体，记录质量或可追溯的按物种计数转质量样本、状况和时间；不得假定放归后存活，也不得抵扣产品负担。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_dead_discard` | `capture`; 输出; 基本流 | 必须辨认并分别采集“直接排入水体的死亡或不合格生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际直接向环境排放时使用本角色，并记录物种、状态、地点与适用许可；送往废物处理者的材料改用 capture_managed_waste，不能重复计入。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_lost_gear` | `capture`; 输出; 基本流 | 必须辨认并分别采集“按材料明确的进入环境的丢失渔具”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按事件编号、水体及材料记录丢失和有证据的回收；为每种实体成分核实适当基本流身份，不得将数量或生态后果默认设为零。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_other_exhaust` | `capture`; 输出; 基本流 | 必须辨认并分别采集“按物质与介质明确的其他实际燃烧排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开实测或有证据计算的物种，例如甲烷、具有明确报告物种基准的氮氧化物、硫化合物和粒径明确的颗粒物。不得将集合标签绑定到单一物质 UUID，也不能用化石二氧化碳代表其他气体。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_spills` | `capture`; 输出; 基本流 | 必须辨认并分别采集“进入实际接收介质的润滑剂或燃料溢漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：依据事件证据明确成分及水、沉积物或土壤接收介质；不得推定通用油排放，也不得重复计入作为废物收集的废油。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_bait_direct_loss` | `capture`; 输出; 基本流 | 必须辨认并分别采集“直接丢失或弃置至明确水体的实际饵料生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际进入环境的饵料材料，明确饵料物种或材料、制备状态、接收水体及事件。此为采购或制备饵料，不是移除的野生生物量、鱼类兼捕、丢失渔具或油。不得重复兼容去向模型已建模的后续分解或营养物排放。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_capture 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_capture` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_supplies` | `grade`; 输入; 产品流 | 必须辨认并分别采集“按产品明确的分选与卫生消耗材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开实际手套、消毒剂配方及清洁材料；如需活性物质另行明确，不设通用配方或剂量。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_grade` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_assets` | `grade`; 输入; 产品流 | 必须辨认并分别采集“分配的岸上分级设备材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际岸上秤、输送与分选设备材料及观察到的服务期份额。船上设备仍留在 capture_assets；共享岸上资产不能在 preserve_assets 或 presentation_returnable_assets 中重复。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_grade` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_internal_water_ice_receipt` | `grade`; 输入; 产品流 | 必须辨认并分别采集“实际内部接收的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际从其他声明节点转入时启用。按实际水冰状态、来源所有者及转移/事件/作业段编号拆分，配对发送端实测量与组成，不新增取水、购买或生产负荷。同节点循环仅属辅助存量账，不形成新转移；排除其他材料卡已含的载体。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_grade` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_water_abstraction` | `grade`; 输入; 基本流 | 必须辨认并分别采集“从明确自然来源取用的实际分级用水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际自取水，区分海水和淡水、取水地点与回流水质；同一次取水不得再增加外购水交换。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_grade` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_other_intended_products` | `grade`; 输出; 产品流 | 必须辨认并分别采集“其他有意保留物种与非食用销售品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际首次交接、物种、用途、数量及价格或物理分配证据展开独立产品。非食用比目鱼不得进入最终食用参考分母。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_grade` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_internal_water_ice_transfer` | `grade`; 输出; 产品流 | 必须辨认并分别采集“实际转至其他声明节点的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际有计量的条件水冰转移，保留接收节点卡及相同来源、状态、组成、事件/作业段编号、量与单位；核对期初期末存量及融化蒸发去向。不是环境排放或独立销售共产品，不重复资源提取或供应负荷。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_grade` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_managed_rejects` | `grade`; 输出; 废物流 | 必须辨认并分别采集“送往受管理处理的分选剔除物与卫生残余物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：明确每种鱼类或非鱼类材料及接收者，排除已销售或已直接排放的物料。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_grade` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_live_release` | `grade`; 输出; 基本流 | 必须辨认并分别采集“放回原水体的活体分选剔除物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录由 grade 承担且未在 capture 记录的放归。配对来源批次、物种、体况及实际放归地点；放归后存活须另有证据。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_grade` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_direct_biomass_discard` | `grade`; 输出; 基本流 | 必须辨认并分别采集“直接排入实际水体的分选剔除生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：将实际直接排放与销售及受管理废物分开；保留原因、状态与物种，不默认具有合法许可，也不声明避免处理抵扣。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_grade` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grade_direct_pollutants` | `grade`; 输出; 基本流 | 必须辨认并分别采集“进入明确水体的实际分级废水成分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实测浓度与流量或有证据的方法展开实际物质，保留总量或溶解态及化学基准，不虚构营养盐组合。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grade 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_grade` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_maintenance_feed` | `preserve`; 输入; 产品流 | 必须辨认并分别采集“第一交付前限定暂养的有记录维护性饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：限定维护暂养实际投喂时，记录饲料类型及残饵去向。主动养成或育肥超出本野生捕捞 PCR；不统一假设暂养必然投喂或绝不投喂。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_shore_fuel` | `preserve`; 输入; 产品流 | 必须辨认并分别采集“自有岸上保鲜设备的实际燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录未计入 capture 船用燃料的实际岸上燃烧。记录牌号、油罐闭合、设备及运行小时；外部服务燃料属于服务供应方。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_refrigerant_makeup` | `preserve`; 输入; 产品流 | 必须辨认并分别采集“按化学身份明确的实际制冷剂加注或更换”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：将期初与期末制冷剂存量、回收及泄漏分开。加注量不等于泄漏量；采用实际化学身份与混合物组成。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_other_supplies` | `preserve`; 输入; 产品流 | 必须辨认并分别采集“实际暂养卫生材料与服务消耗品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开实际消毒剂配方、过滤材料及消耗品；不强制通用药物，也不能仅凭产品投入暗示食用安全效果。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_assets` | `preserve`; 输入; 产品流 | 必须辨认并分别采集“分配的岸上暂养池、冷机与设备材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：采用资产服务期与使用者证据；船舶资产仍由 capture_assets 承担。周转池与设备在批次间分配一次，不按每批计入完整制造。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_internal_water_ice_receipt` | `preserve`; 输入; 产品流 | 必须辨认并分别采集“实际内部接收的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际从其他声明节点转入时启用。按实际水冰状态、来源所有者及转移/事件/作业段编号拆分，配对发送端实测量与组成，不新增取水、购买或生产负荷。同节点循环仅属辅助存量账，不形成新转移；排除其他材料卡已含的载体。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_external_service` | `preserve`; 输入; 产品流 | 必须辨认并分别采集“实际外部供应的保鲜或清洗服务”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际存在本节点负责的首次交接前外包服务时启用。按供应者、服务范围及边界分别实例化实际合同功能量和已核实参考属性单位组。provider_service_unit 是待核实单位变量，不是材料千克；仅供应数据集确有对应参考且实测换算有支持时才能使用处理千克、占用小时或交付冷量。保留原始发票计量，并另列未解决属性单位及数量缺口，核实前不得发布下游交换。纳入匹配供应负荷，不重复服务内供应者公用工程或直接排放，仍保留服务外生产者自有事件。 流属性/单位：实际服务参考属性及单位组待核实 / provider_service_unit 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_water_abstraction` | `preserve`; 输入; 基本流 | 必须辨认并分别采集“从实际自然来源取用的暂养水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录来源水体、盐度类别、进水与排水连接。一次性取水量与反复循环量不同。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_nonfood_sale` | `preserve`; 输出; 产品流 | 必须辨认并分别采集“暂养剔除后实际销售的非食用副产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在有实际买方、用途及实测量的有意销售中启用；与废物及最终食用分母分开，不假定一定存在回收销售市场。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_internal_water_ice_transfer` | `preserve`; 输出; 产品流 | 必须辨认并分别采集“实际转至其他声明节点的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际有计量的条件水冰转移，保留接收节点卡及相同来源、状态、组成、事件/作业段编号、量与单位；核对期初期末存量及融化蒸发去向。不是环境排放或独立销售共产品，不重复资源提取或供应负荷。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_managed_rejects` | `preserve`; 输出; 废物流 | 必须辨认并分别采集“送往受管理处理的暂养死亡物与剔除材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按作业段、材料、原因及受管理接收者分别计量实际死亡或剔除鱼、收集的未用维护饲料、废过滤材料及卫生残余物。排除直接进入水体的残余物、放归鱼、实际销售品及退回可用存量。同一尾鱼不能同时为合格最终食用品与死亡剔除物。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_recovered_refrigerant` | `preserve`; 输出; 废物流 | 必须辨认并分别采集“送往受管理回收的废制冷剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录回收的化学物及接收者；不得将回收充注量作为大气排放，也不默认循环利用抵扣。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_direct_pollutants` | `preserve`; 输出; 基本流 | 必须辨认并分别采集“进入明确水体的实际保鲜废水物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按化学基准、浓度及排水质量或有证据的估计展开实际盐类、有机物或营养物种。排除已由外部处理服务承担的污染物。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_refrigerant_leakage` | `preserve`; 输出; 基本流 | 必须辨认并分别采集“按化学身份明确的实际制冷剂向空气泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：通过包含回收及补充量的有记录制冷剂存量平衡计算；采用实测或有证据的泄漏量而非全部采购量，并在交换绑定前明确各物质或组成。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_other_exhaust` | `preserve`; 输出; 基本流 | 必须辨认并分别采集“按物质与介质明确的其他自有岸上燃烧排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：依据测量或有记录的设备与燃料方法明确实际物种及报告基准，并保留不确定性。不能因未核实身份而推定排放为零。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_feed_direct_loss` | `preserve`; 输出; 基本流 | 必须辨认并分别采集“直接进入明确水体的实际维护性饲料残余物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际直接排放的未摄食或浪费的维护性饲料，保留作业段编号、来源饲料或材料状态及接收水体。收集后送往处理者的残余物进入 preserve_managed_rejects；保留可用饲料属存量。不得重复同一完整残余物去向模型已代表的成分排放负荷。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_live_release` | `preserve`; 输出; 基本流 | 必须辨认并分别采集“实际暂养剔除后放回原水体的活鱼”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按作业段、物种、状况、原水体、时间及适用许可记录实际活体放归。此类鱼不是最终销售食用品、受管理废物，也不是重复的捕捞或分级放归；不假设放归后存活。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preserve_direct_biomass_discard` | `preserve`; 输出; 基本流 | 必须辨认并分别采集“实际直接排入水体的暂养剔除生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录观察到的直接环境排放，保留物种、死亡或状态、作业段编号、接收水体及适用许可。与受管理处理及销售区分；未知或违法处置不能宣称为默认可接受路线。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_preserve 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_preserve` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_packaging` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“按材料明确的实际一次性包装与标签”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：展开实际随鱼跨越交付边界的材料，记录质量及上游供应。包装不进入鱼体净质量分母；散装未包装批次不虚构一次性包装。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_returnable_assets` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“分配的周转筐与交付呈现资产”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录自有资产材料、周转次数、实际退回、清洁承担者、丢失及终止使用。周转筐制造按实际使用分配一次，不按每批完整新筐计入。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_shore_fuel` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际自有交付前岸上装卸燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录第一交付边界前实际岸上装卸；不得重复船舶返航燃料，也不得纳入下游客户分销。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_cleaning_materials` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际交付呈现清洁材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按清洁事件及批次或周转周期明确配方和消耗量，不设通用消毒剂浓度。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_internal_water_ice_receipt` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际内部接收的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际从其他声明节点转入时启用。按实际水冰状态、来源所有者及转移/事件/作业段编号拆分，配对发送端实测量与组成，不新增取水、购买或生产负荷。同节点循环仅属辅助存量账，不形成新转移；排除其他材料卡已含的载体。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_external_service` | `presentation`; 输入; 产品流 | 必须辨认并分别采集“实际外部供应的保鲜或清洗服务”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际存在本节点负责的首次交接前外包服务时启用。按供应者、服务范围及边界分别实例化实际合同功能量和已核实参考属性单位组。provider_service_unit 是待核实单位变量，不是材料千克；仅供应数据集确有对应参考且实测换算有支持时才能使用处理千克、占用小时或交付冷量。保留原始发票计量，并另列未解决属性单位及数量缺口，核实前不得发布下游交换。纳入匹配供应负荷，不重复服务内供应者公用工程或直接排放，仍保留服务外生产者自有事件。 流属性/单位：实际服务参考属性及单位组待核实 / provider_service_unit 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_actual_source_water` | `presentation`; 输入; 基本流 | 必须辨认并分别采集“从已识别自然水源实际提取的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际由包装交接节点直接取水时启用，按淡水海水来源与地点拆分，保留质量或实际状态密度换算、取水责任及实际返还蒸发存量；不得借用工业处理水 UUID 或重复外购、内部水。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_package_handover` | `presentation`; 输出; 产品流 | 必须辨认并分别采集“随验收鱼批次交接的实际包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：将一次性包装质量与鱼体参考质量分开跟踪。周转筐保留所有权及退回周期记录，不作为鱼销售，也不自动作为最终废物。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_nonfood_sale` | `presentation`; 输出; 产品流 | 必须辨认并分别采集“交付呈现阶段的实际非食用回收销售品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录最终食用剔除后有记录的独立销售，保留买方与分配证据，并从验收食用质量中排除这些鱼。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_internal_water_ice_transfer` | `presentation`; 输出; 产品流 | 必须辨认并分别采集“实际转至其他声明节点的水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录实际有计量的条件水冰转移，保留接收节点卡及相同来源、状态、组成、事件/作业段编号、量与单位；核对期初期末存量及融化蒸发去向。不是环境排放或独立销售共产品，不重复资源提取或供应负荷。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_water_ice_handover` | `presentation`; 输出; 产品流 | 必须辨认并分别采集“随验收批次交接的实际保护水或冰”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际状态、来源与实测质量记录随批次跨首次交接边界的剩余保护水冰，与动物净质量及包装完全分开，核对融化水、存量、返还及一次供应或自产负荷；附带材料不自动成为废物或独立分配共产品。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_rejects` | `presentation`; 输出; 废物流 | 必须辨认并分别采集“送往受管理接收方的最终食用剔除物与包装废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量实际剔除鱼体与包装废物，同一尾鱼不能同时在 whole_flatfish_handover 中验收。跨期间暂存的鱼仍属存量，无证据时不能作为最终剔除或已销售输出。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_direct_pollutants` | `presentation`; 输出; 基本流 | 必须辨认并分别采集“排入水体的实际交付呈现清洁水成分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按浓度与水量记录或有依据的方法展开实际成分及化学基准，通用废水标签不是物质身份。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_presentation_other_exhaust` | `presentation`; 输出; 基本流 | 必须辨认并分别采集“其他实际自有岸上装卸尾气物种”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：依据直接测量或有支持的设备与燃料因子明确化学身份、适用粒径及实际接收介质，不提供默认排放量。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_presentation 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：计算值 `calculated_value` 适用范围：场址特定 `site_specific` 归一化基准：每 1 kg 参考流 基准类型：参考流 `reference_flow` 证据类型：由采集计算 `calculated_from_collection` 采集协议：`cp_presentation` 来源：`foreground-flatfish-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_scope` | reference product | 拒绝不符合已核实野生、完整、未去头且未去内脏、食用、生产者首次交接边界的最终批次。声明实际物种或分类、水体及海洋或内陆来源、渔具、食用等级、活体或鲜品或冷藏品状态、干预、时间、实际交付边界与存量期间。CPC04231 只是 narrower 映射情境，不证明完整代码覆盖。 | `un-cpc3-flatfish`; `foreground-flatfish-method` |
| `v_state` | all transfers | 测试捕捞 -> 分选前船上冷却 -> 上岸分级 -> 交付，直接活体或鲜品捕捞 -> 分级 -> 交付，以及分级后保鲜，包括具有唯一作业段编号的双段情况。匹配每笔实际交接、状态与数量及缺少作业段时的相同状态旁路。分选前输出不自动具有食用资格。已是鲜品的鱼不虚构致死，活体输出排除死鱼。死鱼需要独立鲜品或冷藏食用验收，或剔除去向。作业段之间不重复中间输出、资源、死亡或存量；内部输入实测，不固定为最终一千克。 | `foreground-flatfish-method` |
| `v_complete` | all nodes | 在有记录的测量不确定性内闭合物种或鱼体质量划分、有意输出、放归或弃置或废物、水及污染物、燃料、渔具、制冷剂与包装存量。即使缺少已表征 LCA 因子，仍保留底接触、缠绕、兼捕状况与作业量证据；缺少表征须披露，不能报告为零生态影响。 | `foreground-flatfish-method` |
| `v_range` | all flow cards | 除最终参考量的精确范围外，每个 Range 均为明确暂定的筛选区间。非参考区间不是允许范围、场址观察值、默认清单量或合理性证据。超出区间时应调查而非截断；落在区间内也不证明批次有效。定量复用前须用独立留出的已审查作业期证据替代暂定筛选，不得用待评批次最大值作为其自身校验边界。 | `foreground-flatfish-method` |
| `v_identity` | all exchange identities | 下游交换发布前，将每个实际概括性交换明确为一个经核实兼容流。独立核实方向与类型、物质或产品状态、流属性与单位、地理、技术及去向。UUID 观察不提供数量或排放因子。未核实氧气、燃料、最终鱼体、废物与排放保持未明确，不得重命名更窄的淡水柴油或工厂氧气参考。 | `foreground-flatfish-method` |
| `v_attribution` | all periods and outputs |核对同一系统期间全部有意输出与收入或物理分配指标、每个共享使用者份额及期初期末存量负担。检查往返作业量、船上保鲜能源、自制或外购冰、外购服务及直接排放仅计一次。缺少路线特定作业量、放归状况、存量去向或分配证据时不能形成完整前景数据包。 海上交接案例须核对产品保管边界与完整生产者返航服务期间分开，返航负荷一次归属且不转移交接gate。 | `foreground-flatfish-method` |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有已核实交换及前景数量的实际声明完整野生食用比目鱼物种、状态及交付情境 |
| excluded_use | 自动覆盖整个分类代码；养殖或非食用或加工鱼；鱼片或可食率换算；可持续性或合法性认证；通用渔业或生态影响声明 |
| required_metadata | 物种；野生水体；实际技术及作业量；运营承担者；交付边界或时间或状态或食用等级；批次及存量期间；保鲜或旁路路线；全部有意输出；资产、服务及分配 |
| required_quality_disclosure | 测量覆盖、未核实身份、未解决存量或路线或食用验收、暂定筛选证据、分配敏感性及未表征生态后果；不构成食用安全认证 |
| update_trigger | 物种或状态或交付边界、渔具或作业量、边界承担者、公用工程或资产服务、分配、因子或独立定量证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-flatfish` | `official_guidance` | UN Statistics Division, CPC Version 3.0 explanatory notes, 30 June 2025, 04231; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅野生比目鱼分类情境与相邻排除项，不是生产配方 |
| `noaa-summer-flounder` | `official_guidance` | NOAA Fisheries, Summer Flounder; https://www.fisheries.noaa.gov/species/summer-flounder | 美国特定物种的底拖网及网具或钓线情境、底接触与兼捕问题示例；不外推表现、配额或资源状态默认值 |
| `foreground-flatfish-method` | `method_factor` | 本 PCR 第 4 至 9 节声明的完整比目鱼前景核算方法：经校准交付净质量；事件、交接及存量台账；实际条件换算；分配与暂定筛选审查。这是自包含方法，不是实测数据集或外部经验范围。 | 作业采集、计算、质量规则与精确一千克参考恒等；不提供通用数量、密度、排放因子或经验界限 |
