---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-live-fish-for-aquaculture-seed-broodstock-or-feed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水产养殖种苗、亲本或饲料用途的野生活鱼

## 1. 范围与适用性

本 PCR 适用于由首次采集方交接、具有一项明确水产养殖用途的野生捕获活鱼：种苗、亲本或活鱼饲料。适用于实际物种与栖息地已披露的淡水、半咸水及海洋捕获区域。已孵化仔鱼、鱼苗、幼鱼和活体成鱼可以纳入；不规定最低商品规格。CPC 是映射背景，用途、野生来源及交接边界共同定义本方法 [un-cpc-2025]。

捕获、损失分离、有限时段保活和活体呈现是不同责任。从自然界采集不包括接收方的放养、繁殖或增养。临时恢复本身不确立养殖来源。如果交接前的投喂、管理性生长或繁殖实际生产了养殖鱼，应记录该边界并选择养殖方法，不能继续采用本野生参考。本 PCR 将严格完整批次台账作为内部核算要求 [wild-live-method-2026]。

排除观赏鱼、直接供人食用鱼、仅供研究鱼、休闲垂钓饵鱼、死饲料鱼、鱼粉或鱼油、作为最终产品的鱼卵或配子，以及非鱼类种苗或活饵生物。未孵化鱼卵不得用最终活鱼参考表示。不同物种、生命阶段和用途不会因质量相同而获得功能等价性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-live-fish-for-aquaculture-seed-broodstock-or-feed |
| classification_refs | CPC 3.0 04191; narrower 关系 |
| covered_products | 实际用于水产养殖种苗、亲本或活鱼饲料的野生活鱼，按一项声明用途和一个批次定义 |
| excluded_products | 观赏、直接供人食用、仅供研究或休闲饵鱼、养殖生产鱼、死亡或加工饲料、未孵化鱼卵或配子及非鱼类生物 |
| representative_product | 首次采集方交接的可追溯野生捕获存活幼鱼种苗批次；不是通用物种或规格 |
| production_route | 野生捕获与分离 → 实际采用时的有限时段活体暂养 → 实际采用时采集方控制的交接前转运 → 活体呈现装载及采集方首次交接 |
| market_state | 存活活鱼，附尾数、实测净湿生物量、声明用途与生命阶段 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采集方首次交接、具有一项声明水产养殖用途的合格野生活鱼 |
| How much | 1 kg 存活鱼净湿生物量，排除水、气体、冷却材料、容器与不合格鱼 |
| How well | 核实物种与来源；按所选用途记录种苗阶段及接收方适用性、亲本成熟度与适用性，或活鱼饲料适用性；具有实际存活和健康记录，不作通用存活保证 |
| How long or cycle | 声明捕获航次或季节、暂养转运进出时间、出货批次与报告期；适用时跨年追溯期初期末存量及资产服务期间 |
| reference_flow_link | `handover_live_fish_gate` |

### 参考流对象

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 采集方首次交接的声明水产养殖用途野生活鱼 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种; 野生捕获来源与水体或盐度; 捕获日期、航次和渔具; 声明种苗、亲本或活鱼饲料用途; 生命阶段; 尾数及代表性称重方法; 存活净湿质量; 观察死亡及健康适用性; 所选暂养转运阶段与时长; 批次来源混合份额; 采集方交接门、时间戳和接收方验收; 报告期 |

1 kg 分母为内部定义的归一化，不是外部观察产率或接收方存活保证。质量之外还应保留尾数和按用途区分的质量信息 [wild-live-method-2026]。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `live_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_gate_mass，在校准设备上按有记录且维持存活的沥水去皮程序称量验收活鱼；扣除水、气体、包装和剔除鱼。记录测量时间、尾数和抽样不确定性。 |
| `count_mass` | 所有鱼体转移 | Mass | kg | 采用实际批次代表性称重和计数；保留个体或样本质量、抽样设计、变异和计数不确定性。绝不使用通用每千克尾数、鱼卵尾数转鱼质量或水体积转鱼质量因子 [wild-live-method-2026]。 |
| `energy_units` | 电力与热能 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表 kWh；仅在与核实的能量单位组相容时按 3.6 MJ/kWh 转为 MJ；区分热量、冷量和电力。燃料保留实际材料质量和有依据的热值 [wild-live-method-2026]。 |
| `substance_basis` | 水、化学品及直接排放 | Mass | kg | 按实际密度将水体积转为质量，保留盐度和来源。分别记录配方产品与活性物质质量。直接水中排放须具备浓度、流量、时长、背景、元素或物种基准、单位与实验室质量证据；无合理转换不得将 N 改名硝酸盐或总磷改名磷酸盐 [wild-live-method-2026]。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 所选捕获活动开始前命名野生栖息地内的活鱼；不假定自有孵化场或管理性生产 |
| starting_condition_role | 自然捕获背景；记录实际移除、栖息地与渔具相互作用及捕获努力量 |
| product_classification_scope | 声明水产养殖种苗、亲本或活鱼饲料用途的野生活鱼；窄于全部其他非食用野生活鱼 |
| recursive_input_rule | 外购同类别批次应通过有记录的供应方交接门保留核实的野生来源及上游捕获暂养负荷；上游数据集仅关联一次，自有前景排除重复的上游操作 |
| upstream_dataset_requirement | 供应材料、电力、燃料、实物资产及外购鱼须有相容阶段或交接门数据集，披露地域、技术、时间及分配；缺失上游证据应作为明确缺口，不得视为零负荷 |
| disclosure | 声明所有权和交接门、实际顺序及省略条件、捕获栖息地、航次批次混合、期初期末存量、死亡去向、外包活动、共享船舶水箱供氧制冷车辆使用者及服务期间 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_capture` | capture | 捕获从自然界移除鱼，并止于分离出的存活渔获。预期渔获、保留的附带产品、主动释放、死亡渔获及遗失渔具须独立于后续活体暂养记录。 | fao-cba-2011; wild-live-method-2026 |
| `b_holding` | holding | 纳入实际有限时段的恢复、适应与健康控制，从存活进入至存活离开。记录时长和生物量轨迹；管理性生产区间不适用。死亡、剩饵、废水和逃逸归属本阶段。 | wild-live-method-2026 |
| `b_gate` | transfer; handover | 采集方实际控制的交接前运输及燃料、活体支持与损失仅计一次。呈现装载包容或保护活鱼，止于采集方首次交接；接收方运输、放养及养殖始于边界之外。实际无包装直接装载仍须交接检查。 | wild-live-method-2026 |
| `b_assets` | all selected processes | 记录船舶、水箱、曝气供氧设备、制冷、重复使用容器和车辆，以及全部使用节点与服务期间、制造替换维护及终端去向。计量运行负荷不得与资产负荷重叠。实际自有发电、制氧、供热冷或制水须包含完整上游资源及排放，并分配服务负荷，不能重复购入供应。通用外包服务采用单独的供应方活动台账和相容单位；不得虚构 kg 交换。 | wild-live-method-2026 |
| `b_periods` | all selected processes | 将捕获航次季节、暂养批次、转运行程、出货批次、清洗换批及期初期末存量关联到有日期的报告期。记录边界存量与结转负荷，资产替换及退役仅计一次。 | wild-live-method-2026 |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | 野生捕获与活体渔获分离 | `required` | 所有所选批次均来自有记录的野生捕捞。 | 野生栖息地至分离出的存活渔获；独立于后续保活。 | 实际活体质量与尾数；每 1 kg 参考流 |
| `holding` | 有限时段恢复与活体暂养 | `conditional` | 交接前实际开展恢复、适应或暂养，且未进行水产养殖生产。 | 存活渔获至维持存活的鱼；记录进出与时长。 | 实际活体质量与尾数；每 1 kg 参考流 |
| `transfer` | 采集方控制的交接前转运 | `conditional` | 在声明的首次交接门之前实际发生采集方控制的运输。 | 边界内实测活体装载至收到的活体。 | 实际活体质量与尾数；每 1 kg 参考流 |
| `handover` | 活体装载呈现与采集方首次交接 | `required` | 每个验收批次均检查并交接；仅在实际使用时计入包装。 | 存活活鱼至一个合格交接产品；接收方配送和养殖位于边界外。 | 实际活体质量与尾数；每 1 kg 参考流 |

捕获声明为航次或岸边批次；暂养声明为离散批次或连续占用期间；转运为实际行程；装载为出货批次。节点表示责任：转运和暂养的实际先后由时间戳及关联确定，不能由表格顺序推断。不普遍要求船舶、包装、投喂、处理或运输技术。混批保留来源份额；每个实物批次及共享操作只有一个核算责任方 [wild-live-method-2026]。

下列各卡描述实际阶段角色。材料或物质集合卡在最终数据发布前须拆分为每项观察到的具体交换及相容身份。每个有限数量范围是初始可替换的审查筛选；超限值须记录审查，绝不能截断。零值须有未使用或未发生事件的记录。最终 1–1 kg 范围是归一化恒等式。内部活体转移保留实测数量及尾数；以验收交接生物量归一化其分配数量，不得假定为最终 1 kg。

### 过程：野生捕获与活体渔获分离 (`capture`)

#### 输入

##### 产品流

###### 购入中国电网平均低压交流电 (`capture_electricity_cn`)

仅限实际向用户交付的中国电网平均低于 1 kV 交流电；排除自发电及其他电源。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定：`fixed`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 该阶段其他购入电力 (`capture_electricity_other`)

实际其他地域、电压、供应方或供电组合；同一电量不得与符合条件的中国电力行重复。

- 选定流：该阶段其他购入电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 适合鱼体接触的外供处理工艺水 (`capture_supplied_water`)

仅限有文件证明适合实际鱼体接触的外供处理工业工艺水；不包括自取水、海水、循环水或重复的供应方处理。

本卡仅表示一个实际外供水交换，不假定使用工业过程水。保留实测水量及实际来源、处理、等级、盐度和用途。按实际动物接触、载水、清洗或制冰用途验证水质适用性，完成数据包前须独立解决实际供水的精确身份，不继承工业水UUID。

- 选定流：实际外供处理水
- 绑定： 未解决（`unresolved`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 该阶段其他外供水 (`capture_other_supplied_water`)

不符合处理工艺水行的实际外供淡水、半咸水或海水；区分供应方和盐度。

- 选定流：该阶段其他外供水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 维持活体存活的交付氧气 (`capture_oxygen`)

仅计实际交付气体，记录压缩、纯度、相态和供应方条件。称量消耗或采用有文件依据的气体状态转换；曝气电耗另计。

- 选定流：维持活体存活的交付氧气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际淡水渔船柴油 (`capture_freshwater_diesel`)

仅限条件适用的淡水渔船柴油；不用于海洋捕捞、岸边机械、暂养设备或车辆。

条件身份：该流仅表示有船舶、发动机及淡水捕捞航次记录支持的淡水渔船在捕捞角色中的实际柴油燃烧；不代表海洋船舶、岸上泵、道路运输、养殖场或其他柴油使用，后者须独立匹配身份及数量。

- 选定流：柴油 `5e0406d3-2763-4f93-a921-b3028853c24b`
- 绑定：`fixed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

无该类常规交换；实际出现时按真实身份与证据记录。

##### 基本流

###### 从实际栖息地移除的野生鱼生物量 (`capture_wild_fish_removal`)

按物种和栖息地记录目标鱼及附带鱼的实际移除；测量来源湿生物量与尾数，将存活保留鱼、死亡渔获、预期副产品和后续释放关联同一捕获事件。栖息地与渔具影响作为评价资料保留。不得使用产品身份，不得假定自然移除等于最终 1 kg。

- 选定流：从实际栖息地移除的野生鱼生物量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 捕获后分离出的野生存活鱼 (`capture_live_catch`)

按捕获批次、用途及下一所选节点记录实测存活湿生物量与尾数；该中间输出不固定为 1 kg。

- 选定流：捕获后分离出的野生存活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 送实际处理的死鱼与不合格剔除物 (`capture_dead_rejects`)

记录该阶段实际死亡或剔除物湿质量、尾数与去向；非废物销售拆分为独立副产品并分配负荷。不得计入存活输出。

- 选定流：送实际处理的死鱼与不合格剔除物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 交由处理方的废水 (`capture_wastewater`)

按去向记录实际废水交付；同一批交付污染物不得在本阶段再次计为环境排放。

- 选定流：交由处理方的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 直接排向受纳环境的水 (`capture_returned_water`)

记录直接回排水的受纳水体、盐度、温度状态、体积与密度；排除交付处理方的水。

- 选定流：直接排向受纳环境的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 直接燃烧排向未特指空气的化石二氧化碳 (`capture_fossil_co2`)

仅计实际化石燃料直接燃烧排向未特指空气的排放；使用实测燃料及独立论证的碳含量和氧化因子。排除供应方排放、生物源 CO2、呼吸和 CO2 当量。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_capture`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：有限时段恢复与活体暂养 (`holding`)

#### 输入

##### 产品流

###### 购入中国电网平均低压交流电 (`holding_electricity_cn`)

仅限实际向用户交付的中国电网平均低于 1 kV 交流电；排除自发电及其他电源。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定：`fixed`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 该阶段其他购入电力 (`holding_electricity_other`)

实际其他地域、电压、供应方或供电组合；同一电量不得与符合条件的中国电力行重复。

- 选定流：该阶段其他购入电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 适合鱼体接触的外供处理工艺水 (`holding_supplied_water`)

仅限有文件证明适合实际鱼体接触的外供处理工业工艺水；不包括自取水、海水、循环水或重复的供应方处理。

本卡仅表示一个实际外供水交换，不假定使用工业过程水。保留实测水量及实际来源、处理、等级、盐度和用途。按实际动物接触、载水、清洗或制冰用途验证水质适用性，完成数据包前须独立解决实际供水的精确身份，不继承工业水UUID。

- 选定流：实际外供处理水
- 绑定： 未解决（`unresolved`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 该阶段其他外供水 (`holding_other_supplied_water`)

不符合处理工艺水行的实际外供淡水、半咸水或海水；区分供应方和盐度。

- 选定流：该阶段其他外供水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 维持活体存活的交付氧气 (`holding_oxygen`)

仅计实际交付气体，记录压缩、纯度、相态和供应方条件。称量消耗或采用有文件依据的气体状态转换；曝气电耗另计。

- 选定流：维持活体存活的交付氧气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 进入有限时段暂养的野生存活鱼 (`holding_fish_in`)

实测并关联捕获或前一节点的活体生物量与尾数，承接上游负荷；混批保留来源份额和此前损失记录。

- 选定流：进入有限时段暂养的野生存活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

无该类常规交换；实际出现时按真实身份与证据记录。

##### 基本流

#### 输出

##### 产品流

###### 离开有限时段暂养的野生存活鱼 (`holding_live_out`)

关联下一节点的实际存活出场生物量与尾数；核对暂养损失和跨期存量，绝不规定 1 kg 内部转移。

- 选定流：离开有限时段暂养的野生存活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 送实际处理的死鱼与不合格剔除物 (`holding_dead_rejects`)

记录该阶段实际死亡或剔除物湿质量、尾数与去向；非废物销售拆分为独立副产品并分配负荷。不得计入存活输出。

- 选定流：送实际处理的死鱼与不合格剔除物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 交由处理方的废水 (`holding_wastewater`)

按去向记录实际废水交付；同一批交付污染物不得在本阶段再次计为环境排放。

- 选定流：交由处理方的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 直接排向受纳环境的水 (`holding_returned_water`)

记录直接回排水的受纳水体、盐度、温度状态、体积与密度；排除交付处理方的水。

- 选定流：直接排向受纳环境的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 直接燃烧排向未特指空气的化石二氧化碳 (`holding_fossil_co2`)

仅计实际化石燃料直接燃烧排向未特指空气的排放；使用实测燃料及独立论证的碳含量和氧化因子。排除供应方排放、生物源 CO2、呼吸和 CO2 当量。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 从实际暂养围护设施逃逸的鱼 (`holding_escapes`)

按物种、受纳栖息地、事件、估计尾数及实测个体质量记录逃逸鱼及不确定性；区分有记录的主动释放。

- 选定流：从实际暂养围护设施逃逸的鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_holding`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：采集方控制的交接前转运 (`transfer`)

#### 输入

##### 产品流

###### 购入中国电网平均低压交流电 (`transfer_electricity_cn`)

仅限实际向用户交付的中国电网平均低于 1 kV 交流电；排除自发电及其他电源。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定：`fixed`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 该阶段其他购入电力 (`transfer_electricity_other`)

实际其他地域、电压、供应方或供电组合；同一电量不得与符合条件的中国电力行重复。

- 选定流：该阶段其他购入电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 适合鱼体接触的外供处理工艺水 (`transfer_supplied_water`)

仅限有文件证明适合实际鱼体接触的外供处理工业工艺水；不包括自取水、海水、循环水或重复的供应方处理。

本卡仅表示一个实际外供水交换，不假定使用工业过程水。保留实测水量及实际来源、处理、等级、盐度和用途。按实际动物接触、载水、清洗或制冰用途验证水质适用性，完成数据包前须独立解决实际供水的精确身份，不继承工业水UUID。

- 选定流：实际外供处理水
- 绑定： 未解决（`unresolved`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 该阶段其他外供水 (`transfer_other_supplied_water`)

不符合处理工艺水行的实际外供淡水、半咸水或海水；区分供应方和盐度。

- 选定流：该阶段其他外供水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 维持活体存活的交付氧气 (`transfer_oxygen`)

仅计实际交付气体，记录压缩、纯度、相态和供应方条件。称量消耗或采用有文件依据的气体状态转换；曝气电耗另计。

- 选定流：维持活体存活的交付氧气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 采集方转运装载的野生存活鱼 (`transfer_fish_in`)

记录前一所选节点的实际净活体装载质量与尾数；单列包装和水，并记录装载时间。

- 选定流：采集方转运装载的野生存活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

无该类常规交换；实际出现时按真实身份与证据记录。

##### 基本流

#### 输出

##### 产品流

###### 交接前转运后收到的野生存活鱼 (`transfer_live_out`)

采集方接收点的实际收到净活体质量与尾数，含途中损失和接收时间；不含接收方交接后配送。

- 选定流：交接前转运后收到的野生存活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 送实际处理的死鱼与不合格剔除物 (`transfer_dead_rejects`)

记录该阶段实际死亡或剔除物湿质量、尾数与去向；非废物销售拆分为独立副产品并分配负荷。不得计入存活输出。

- 选定流：送实际处理的死鱼与不合格剔除物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 交由处理方的废水 (`transfer_wastewater`)

按去向记录实际废水交付；同一批交付污染物不得在本阶段再次计为环境排放。

- 选定流：交由处理方的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 直接排向受纳环境的水 (`transfer_returned_water`)

记录直接回排水的受纳水体、盐度、温度状态、体积与密度；排除交付处理方的水。

- 选定流：直接排向受纳环境的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 直接燃烧排向未特指空气的化石二氧化碳 (`transfer_fossil_co2`)

仅计实际化石燃料直接燃烧排向未特指空气的排放；使用实测燃料及独立论证的碳含量和氧化因子。排除供应方排放、生物源 CO2、呼吸和 CO2 当量。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 采集方控制转运期间的逃逸鱼 (`transfer_escapes`)

记录实际逃逸事件、物种、受纳栖息地、尾数及代表性个体质量与不确定性；区分死鱼与主动释放。明确记录未发生事件，不得假定为零。

- 选定流：采集方控制转运期间的逃逸鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transfer`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：活体装载呈现与采集方首次交接 (`handover`)

#### 输入

##### 产品流

###### 购入中国电网平均低压交流电 (`handover_electricity_cn`)

仅限实际向用户交付的中国电网平均低于 1 kV 交流电；排除自发电及其他电源。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定：`fixed`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 该阶段其他购入电力 (`handover_electricity_other`)

实际其他地域、电压、供应方或供电组合；同一电量不得与符合条件的中国电力行重复。

- 选定流：该阶段其他购入电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 适合鱼体接触的外供处理工艺水 (`handover_supplied_water`)

仅限有文件证明适合实际鱼体接触的外供处理工业工艺水；不包括自取水、海水、循环水或重复的供应方处理。

本卡仅表示一个实际外供水交换，不假定使用工业过程水。保留实测水量及实际来源、处理、等级、盐度和用途。按实际动物接触、载水、清洗或制冰用途验证水质适用性，完成数据包前须独立解决实际供水的精确身份，不继承工业水UUID。

- 选定流：实际外供处理水
- 绑定： 未解决（`unresolved`）
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 该阶段其他外供水 (`handover_other_supplied_water`)

不符合处理工艺水行的实际外供淡水、半咸水或海水；区分供应方和盐度。

- 选定流：该阶段其他外供水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 维持活体存活的交付氧气 (`handover_oxygen`)

仅计实际交付气体，记录压缩、纯度、相态和供应方条件。称量消耗或采用有文件依据的气体状态转换；曝气电耗另计。

- 选定流：维持活体存活的交付氧气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 活体呈现装载前的野生存活鱼 (`handover_fish_in`)

实测来自最后所选上游节点的活鱼；路线关联不得重复计直接捕获与经暂养或转运的数量。

- 选定流：活体呈现装载前的野生存活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

无该类常规交换；实际出现时按真实身份与证据记录。

##### 基本流

#### 输出

##### 产品流

###### 采集方首次交接的声明水产养殖用途野生活鱼 (`handover_live_fish_gate`)

唯一按声明用途合格的活鱼输出，排除死亡或剔除鱼、水、氧气和包装。实际净湿生物量附尾数及生命阶段、健康与适用性证据。

- 选定流：采集方首次交接的声明水产养殖用途野生活鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_gate_mass`
- 来源：`wild-live-method-2026`
- 数量范围：内部归一化恒等式
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`wild-live-method-2026`

##### 废物流

###### 送实际处理的死鱼与不合格剔除物 (`handover_dead_rejects`)

记录该阶段实际死亡或剔除物湿质量、尾数与去向；非废物销售拆分为独立副产品并分配负荷。不得计入存活输出。

- 选定流：送实际处理的死鱼与不合格剔除物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 交由处理方的废水 (`handover_wastewater`)

按去向记录实际废水交付；同一批交付污染物不得在本阶段再次计为环境排放。

- 选定流：交由处理方的废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 直接排向受纳环境的水 (`handover_returned_water`)

记录直接回排水的受纳水体、盐度、温度状态、体积与密度；排除交付处理方的水。

- 选定流：直接排向受纳环境的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 直接燃烧排向未特指空气的化石二氧化碳 (`handover_fossil_co2`)

仅计实际化石燃料直接燃烧排向未特指空气的排放；使用实测燃料及独立论证的碳含量和氧化因子。排除供应方排放、生物源 CO2、呼吸和 CO2 当量。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 活体装载交接期间的逃逸鱼 (`handover_escapes`)

记录实际逃逸事件、物种、受纳栖息地、尾数及代表性个体质量与不确定性；区分死鱼与主动释放。明确记录未发生事件，不得假定为零。

- 选定流：活体装载交接期间的逃逸鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handover`
- 来源：`wild-live-method-2026`
- 数量范围：可替换的暂定作者校验范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

## 7. 分配与副产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | all retained catch | 列明所选种苗、亲本或活鱼饲料输出及全部其他预期保留产品，逐项记录状态、数量、自有交接点和去向。区分附带释放、死鱼及废物。同一批次不得在捕获、暂养和交接三处作为三个销售产品。 | wild-live-method-2026 |
| `a_precedence` | shared capture and operations | 优先细分或分表计量；否则以实际努力量或资源使用论证因果性物理关系。不同活鱼用途之间不能自动采用质量因果分配。缺少合理物理关系时，采用有记录的同期交接经济价值并开展敏感性分析，披露币种和价格覆盖。 | ghg-product-2011 |
| `a_losses` | mortality, rejects, release and escapes | 在任何合理副产品分配前，将全部实际负荷及处理保留在所研究输出系统内。不得设置零负荷死亡产品或避免野生移除信用。销售的次级输出须有明确分配决定，不得静默改成废物。 | wild-live-method-2026 |
| `a_shared` | shared assets, utilities and providers | 列明每项船舶、暂养水箱、水泵、制冷、车辆、重复使用容器或外包活动在记录服务期内的全部使用者。采用分表计量或有依据且具因果性的使用小时、占用或努力量；份额合计对实测负荷只分配一次，含闲置和清洗份额。 | wild-live-method-2026 |
| `a_period` | trips, continuous holding and carryover | 将航次燃料渔获归入相应航次；合理时以占用和时间分配连续公用工程。清洗换批关联实际运行。期初鱼体及资产负荷只结转一次，核对期末存量和退役资产；不得每报告年重复计入全部制造或同一存留鱼体。 | wild-live-method-2026 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | capture | 全部实际阶段交换 | 仪表、日志、发票、抽样、分析及去向记录 | 批次航次运行报告期；来源使用者；材料物质；数量；尾数；状态；时间戳；水源盐度流量；浓度形态背景；去向；因子；分配 | 校准仪表秤具和可追溯供应记录；阶段进出活体尾数及代表性称重；定时流量加权分析；按供应方边界核对燃料、资产、清洗及全部去向 | kg; MJ; 保留原始 kWh、体积、尾数、时间及物质单位 | 每批次行程、连续仪表及每次损失清洗事件 | 完整所选航次、暂养区间、转运、出货与报告期 | 实际捕获采集地点及命名供应方 | 每 1 kg 参考流 | 校准；抽样设计；实验室空白检出限不确定性；来源凭据；使用者报告期台账 |
| `cp_holding` | holding | 全部实际阶段交换 | 仪表、日志、发票、抽样、分析及去向记录 | 批次航次运行报告期；来源使用者；材料物质；数量；尾数；状态；时间戳；水源盐度流量；浓度形态背景；去向；因子；分配 | 校准仪表秤具和可追溯供应记录；阶段进出活体尾数及代表性称重；定时流量加权分析；按供应方边界核对燃料、资产、清洗及全部去向 | kg; MJ; 保留原始 kWh、体积、尾数、时间及物质单位 | 每批次行程、连续仪表及每次损失清洗事件 | 完整所选航次、暂养区间、转运、出货与报告期 | 实际捕获采集地点及命名供应方 | 每 1 kg 参考流 | 校准；抽样设计；实验室空白检出限不确定性；来源凭据；使用者报告期台账 |
| `cp_transfer` | transfer | 全部实际阶段交换 | 仪表、日志、发票、抽样、分析及去向记录 | 批次航次运行报告期；来源使用者；材料物质；数量；尾数；状态；时间戳；水源盐度流量；浓度形态背景；去向；因子；分配 | 校准仪表秤具和可追溯供应记录；阶段进出活体尾数及代表性称重；定时流量加权分析；按供应方边界核对燃料、资产、清洗及全部去向 | kg; MJ; 保留原始 kWh、体积、尾数、时间及物质单位 | 每批次行程、连续仪表及每次损失清洗事件 | 完整所选航次、暂养区间、转运、出货与报告期 | 实际捕获采集地点及命名供应方 | 每 1 kg 参考流 | 校准；抽样设计；实验室空白检出限不确定性；来源凭据；使用者报告期台账 |
| `cp_handover` | handover | 全部实际阶段交换 | 仪表、日志、发票、抽样、分析及去向记录 | 批次航次运行报告期；来源使用者；材料物质；数量；尾数；状态；时间戳；水源盐度流量；浓度形态背景；去向；因子；分配 | 校准仪表秤具和可追溯供应记录；阶段进出活体尾数及代表性称重；定时流量加权分析；按供应方边界核对燃料、资产、清洗及全部去向 | kg; MJ; 保留原始 kWh、体积、尾数、时间及物质单位 | 每批次行程、连续仪表及每次损失清洗事件 | 完整所选航次、暂养区间、转运、出货与报告期 | 实际捕获采集地点及命名供应方 | 每 1 kg 参考流 | 校准；抽样设计；实验室空白检出限不确定性；来源凭据；使用者报告期台账 |
| `cp_gate_mass` | handover | 验收存活鱼净湿质量 | 称重验收记录 | 物种；用途；生命阶段；尾数；样本质量；沥水鱼质量；皮重；存活性；剔除；时间；接收方；批次来源份额 | 使用校准秤按有记录且维持存活的沥水去皮程序称量验收活鱼；计数换算采用实际批次代表性样本称重；排除包装、水与不合格鱼 | kg | 每个出货批次 | 捕获至首次交接，含期初期末存量 | 实际采集方首次交接门 | 每 1 kg 参考流 | 秤具校准；去皮沥水方法；样本代表性；鱼体计数；按用途的接收方验收 |


供应方活动台账记录合同与供应方、操作及边界、功能活动、物理单位、相容属性和单位验证、期间、受益方、数量、分配，以及数据集是否已包含公用工程或资产。在核实具体服务身份及相容参考属性前，仅作为辅助证据。不得仅为填充流卡而转换为 kg [wild-live-method-2026]。

水质分析保留元素或物种单位、采样时点、流量时长、背景及校准实验室质量证据。记录检出限、明确的未检出处理及不确定性；未检出不自动等于零。共享废水须有唯一阶段事件责任方及有记录的上游使用者份额，防止直接排放重复计入。实际呼吸和排泄作为生物排放独立于化石燃烧筛查；缺少可用因子应披露为缺口 [wild-live-method-2026]。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_cohort` | 阶段数量 | 每项归属的实际阶段交换除以同一正值验收交接活鱼净湿生物量；保留原始阶段湿质量与尾数。匹配报告期并分配后，每个来源批次贡献仅汇总一次。 | 阶段记录; 验收交接生物量; 分配台账 | 每 1 kg 参考流数量 | wild-live-method-2026 |
| `count_conversion` | 鱼体计数 | 仅依据实际代表性个体或样本湿质量及实际尾数估计批次湿质量；保留样本权重、变异与不确定性，不设通用计数因子。 | 样本称重; 抽样设计; 尾数 | 批次 kg 与不确定性 | wild-live-method-2026 |
| `cohort_reconcile` | 活鱼 | 期初活鱼加捕获或收到鱼，等于验收活体交接加期末活鱼、副产品、死亡、剔除、有记录释放逃逸及其他已识别损失；对全部去向守恒核对尾数，另以有记录的饲料吸收、代谢、呼吸、排泄、水分变化及抽样不确定性核对湿生物量。期初期末存量携带先前负荷至实际终端去向；这些解释不允许将管理性增养纳入保活。 | 有日期的批次来源台账 | 核对后的活鱼历史 | wild-live-method-2026 |
| `waterborne_load` | 直接排放物质 | 对实测浓度、实际排水流量及时长积分，披露背景校正和准确质量或物种换算；保留负差或不确定差异待审查，不静默视为去除信用。 | 分析记录; 流量; 时长; 背景; 单位 | 向实际介质排放的各命名物质 kg | wild-live-method-2026 |
| `combustion_load` | 化石源直接排放 | 按实际燃烧化石燃料碳量及论证的氧化和分子转换因子计算，或采用相容实测排放；保留燃料、因子来源与不确定性，不假定流身份提供因子。 | 燃料记录; 独立论证因子 | 化石 CO2 及其他准确物质 kg | wild-live-method-2026 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_trace` | 参考及中间产品 | 混批前后保留实际物种、野生地点航次、用途、生命阶段和批次组成；来源不完整不能用通用物种名修复。 | 捕获转运记录；接收方验收 |
| `dq_viability` | 交接门 | 仅称量合格活鱼；报告尾数、大小分布、实际存活健康与用途适用性。种苗发育、亲本成熟适用性和活鱼饲料适用性须有不同接收方证据。 | 校准去皮抽样记录；检查出货文件 |
| `dq_complete` | 每个所选节点 | 筛查实际燃料、电力、水源、氧气、实物冷却健康饲料清洗投入、产品、附带渔获、固体、废水、直接物质、泄漏和逃逸。明确记录未使用角色，未知项为缺口。 | 阶段平衡、仪表、发票、实验室质量及去向凭据 |
| `dq_range` | 每张卡 | 有实际记录或经审查的经验来源证据时替换暂定作者范围。调查异常，不将实际数据截断至筛选范围。 | 范围审查与不确定性说明 |
| `dq_period` | 共享及结转负荷 | 对完整期间核对使用者份额、存量及资产事件；披露数据年龄、缺失季节及代表性。 | 有日期的分配、资产与批次台账 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_capture_fuel` | `capture`; 输入; 产品流 | 必须辨认并分别采集“该阶段消耗的其他燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际海洋或岸边设备及其他不相容捕捞燃料；排除单列的淡水渔船柴油。保留燃料身份及体积换质量所需的实测密度。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_thermal_energy` | `capture`; 输入; 产品流 | 必须辨认并分别采集“以实测热能表达的购入热量或冷量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：以该阶段实际使用为条件。按真实材料或供应方拆分具体交换；有记录的未使用可为零，缺失记录不能视为零。仅表示实际热能；通用服务不能使用虚构的 kg。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_materials` | `capture`; 输入; 产品流 | 必须辨认并分别采集“实际搬运、温控与健康管理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：以该阶段实际使用为条件。按真实材料或供应方拆分具体交换；有记录的未使用可为零，缺失记录不能视为零。逐项识别盐、消毒剂、获准健康管理产品、润滑剂、清洗材料、冷却材料或其他实物耗材；不强制任何处理，不使用食用渔获冰流身份。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_gear` | `capture`; 输入; 产品流 | 必须辨认并分别采集“捕捞渔具及船舶实物替换材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际网具、陷阱、钓线或替换材料按有证据的服役航次分配；存续资产及制造负荷通过设施台账关联，不向每个航次重复全额计入。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_abstracted_water` | `capture`; 输入; 基本流 | 必须辨认并分别采集“从声明环境直接取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按水体与盐度记录实际取水；外部入流仅计一次，保留体积、密度、日期和位置。内部循环作为辅助活动。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_co_products` | `capture`; 输出; 产品流 | 必须辨认并分别采集“在各自交接点保留的其他预期渔获产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：列出实际销售的每种保留渔获及物种、状态、尾数或质量、去向和交接点；仅有证据时可声明无此输出。附带放生不是销售副产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_solid_waste` | `capture`; 输出; 废物流 | 必须辨认并分别采集“送处理的废耗材与分离固体”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际清洗固体、废滤材、损坏渔具、散落材料或包装剔除物；区分组成、去向与危害属性。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_substance_releases` | `capture`; 输出; 基本流 | 必须辨认并分别采集“实际分物质直接排放与制冷剂泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：条件性具体角色集合：实际跨入环境的每种氮磷形态、健康产品残留、尾气物质或颗粒级别、泄漏润滑剂、制冷剂和渔具材料均使用独立身份、介质与物质 kg 基准。水中负荷采用浓度、流量、时长及背景校正。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_released_catch` | `capture`; 输出; 基本流 | 必须辨认并分别采集“返回声明栖息地的活体附带渔获”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际保留或释放物种、尾数、湿质量测量、时间、地点与观察状态；不得计避免捕捞信用或假定释放后存活。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_capture` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_fuel` | `holding`; 输入; 产品流 | 必须辨认并分别采集“该阶段消耗的其他燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：该阶段设备或车辆实际燃料，含燃料规格、实测用量及体积转换的密度。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_holding` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_thermal_energy` | `holding`; 输入; 产品流 | 必须辨认并分别采集“以实测热能表达的购入热量或冷量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：以该阶段实际使用为条件。按真实材料或供应方拆分具体交换；有记录的未使用可为零，缺失记录不能视为零。仅表示实际热能；通用服务不能使用虚构的 kg。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_holding` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_materials` | `holding`; 输入; 产品流 | 必须辨认并分别采集“实际搬运、温控与健康管理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：以该阶段实际使用为条件。按真实材料或供应方拆分具体交换；有记录的未使用可为零，缺失记录不能视为零。逐项识别盐、消毒剂、获准健康管理产品、润滑剂、清洗材料、冷却材料或其他实物耗材；不强制任何处理，不使用食用渔获冰流身份。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_holding` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_maintenance_feed` | `holding`; 输入; 产品流 | 必须辨认并分别采集“有限时段活体暂养的实际维持性饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际饲料身份、湿干基准、剩饵、目的、时长和生物量轨迹。实际增养或繁殖使该路线不适用；不得将养殖隐藏为暂养。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_holding` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_abstracted_water` | `holding`; 输入; 基本流 | 必须辨认并分别采集“从声明环境直接取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按水体与盐度记录实际取水；外部入流仅计一次，保留体积、密度、日期和位置。内部循环作为辅助活动。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_holding` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_solid_waste` | `holding`; 输出; 废物流 | 必须辨认并分别采集“送处理的废耗材与分离固体”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际剩余维持性饲料、清洗固体、废滤材、损坏渔具、散落材料或包装剔除物；区分组成、去向与危害属性。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_holding` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_holding_substance_releases` | `holding`; 输出; 基本流 | 必须辨认并分别采集“实际分物质直接排放与制冷剂泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：条件性具体角色集合：实际跨入环境的每种氮磷形态、健康产品残留、尾气物质或颗粒级别、泄漏润滑剂、制冷剂和渔具材料均使用独立身份、介质与物质 kg 基准。水中负荷采用浓度、流量、时长及背景校正。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_holding` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_transfer_fuel` | `transfer`; 输入; 产品流 | 必须辨认并分别采集“该阶段消耗的其他燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：该阶段设备或车辆实际燃料，含燃料规格、实测用量及体积转换的密度。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_transfer` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_transfer_thermal_energy` | `transfer`; 输入; 产品流 | 必须辨认并分别采集“以实测热能表达的购入热量或冷量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：以该阶段实际使用为条件。按真实材料或供应方拆分具体交换；有记录的未使用可为零，缺失记录不能视为零。仅表示实际热能；通用服务不能使用虚构的 kg。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_transfer` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_transfer_materials` | `transfer`; 输入; 产品流 | 必须辨认并分别采集“实际搬运、温控与健康管理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：以该阶段实际使用为条件。按真实材料或供应方拆分具体交换；有记录的未使用可为零，缺失记录不能视为零。逐项识别盐、消毒剂、获准健康管理产品、润滑剂、清洗材料、冷却材料或其他实物耗材；不强制任何处理，不使用食用渔获冰流身份。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_transfer` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_transfer_abstracted_water` | `transfer`; 输入; 基本流 | 必须辨认并分别采集“从声明环境直接取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按水体与盐度记录实际取水；外部入流仅计一次，保留体积、密度、日期和位置。内部循环作为辅助活动。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_transfer` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_transfer_solid_waste` | `transfer`; 输出; 废物流 | 必须辨认并分别采集“送处理的废耗材与分离固体”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际清洗固体、废滤材、损坏渔具、散落材料或包装剔除物；区分组成、去向与危害属性。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_transfer` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_transfer_substance_releases` | `transfer`; 输出; 基本流 | 必须辨认并分别采集“实际分物质直接排放与制冷剂泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：条件性具体角色集合：实际跨入环境的每种氮磷形态、健康产品残留、尾气物质或颗粒级别、泄漏润滑剂、制冷剂和渔具材料均使用独立身份、介质与物质 kg 基准。水中负荷采用浓度、流量、时长及背景校正。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_transfer` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_fuel` | `handover`; 输入; 产品流 | 必须辨认并分别采集“该阶段消耗的其他燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：该阶段设备或车辆实际燃料，含燃料规格、实测用量及体积转换的密度。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_thermal_energy` | `handover`; 输入; 产品流 | 必须辨认并分别采集“以实测热能表达的购入热量或冷量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：以该阶段实际使用为条件。按真实材料或供应方拆分具体交换；有记录的未使用可为零，缺失记录不能视为零。仅表示实际热能；通用服务不能使用虚构的 kg。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_materials` | `handover`; 输入; 产品流 | 必须辨认并分别采集“实际搬运、温控与健康管理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：以该阶段实际使用为条件。按真实材料或供应方拆分具体交换；有记录的未使用可为零，缺失记录不能视为零。逐项识别盐、消毒剂、获准健康管理产品、润滑剂、清洗材料、冷却材料或其他实物耗材；不强制任何处理，不使用食用渔获冰流身份。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_packaging` | `handover`; 输入; 产品流 | 必须辨认并分别采集“实际活鱼容器与保护包装材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际一次性袋、箱、内衬或封口材料；重复使用水箱或容器采用实测替换材料与核实使用次数。水气另计；包装质量不得并入鱼质量。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_abstracted_water` | `handover`; 输入; 基本流 | 必须辨认并分别采集“从声明环境直接取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按水体与盐度记录实际取水；外部入流仅计一次，保留体积、密度、日期和位置。内部循环作为辅助活动。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_solid_waste` | `handover`; 输出; 废物流 | 必须辨认并分别采集“送处理的废耗材与分离固体”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际清洗固体、废滤材、损坏渔具、散落材料或包装剔除物；区分组成、去向与危害属性。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_handover_substance_releases` | `handover`; 输出; 基本流 | 必须辨认并分别采集“实际分物质直接排放与制冷剂泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：条件性具体角色集合：实际跨入环境的每种氮磷形态、健康产品残留、尾气物质或颗粒级别、泄漏润滑剂、制冷剂和渔具材料均使用独立身份、介质与物质 kg 基准。水中负荷采用浓度、流量、时长及背景校正。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：以该阶段归属的实测数量除以同一验收交接活鱼净湿生物量；保留原始质量、尾数、时间及分配证据。 数值来源模式：`calculated_value` 适用范围：`site_specific` 归一化基准：每 1 kg 参考流 基准类型：`reference_flow` 证据类型：`calculated_from_collection` 采集协议：`cp_handover` 来源：`wild-live-method-2026` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_scope` | reference | 拒绝未知用途、非野生来源、非活体状态、隐藏为暂养的管理性生产、排除产品或缺失交接门身份。不同物种、生命阶段或用途不能仅凭 kg 等同。 | un-cpc-2025; wild-live-method-2026 |
| `v_mass` | all inventory rows | 确认唯一最终 1 kg 参考、实际去皮沥水及计数质量证据、共同分母和单位、实测中间数量、完整排除死亡剔除，以及非零验收生物量。 | wild-live-method-2026 |
| `v_route` | process map | 要求实际所选顺序、进出状态、独立捕获暂养、声明转运边界和活体交接。每项条件省略须有证据；未知活动不等于不开展。 | wild-live-method-2026 |
| `v_inventory` | every selected node | 检查每项材料角色、来源去向与终端处理、外部与循环水、供应方处理与直接排放、物质介质具体性及上游直接排放区分。缺失的重要合理流须披露为缺口。 | wild-live-method-2026 |
| `v_attribution` | outputs, modes, periods and assets | 检查完整预期输出与交接、所选方法优先级、使用者份额、批次连续运行及换批、存量结转、替换及终端事件。未解释的重复核算或损失不通过。 | ghg-product-2011; wild-live-method-2026 |
| `v_identity` | exchange identities | 最终交换须有核实相容的具体流、属性与单位身份；条件材料集合须实际展开。未核实产品或支持身份保留为明确数据缺口，不确立发布准备状态。 | wild-live-method-2026 |
| `v_quality` | ranges and evidence | 每项数量须有基准、条件、协议证据和有限数量范围。确认实际前景优先，解释异常与不确定性，不将初始作者范围或历史饲养示例当作强制场址表现。 | wild-live-method-2026 |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 水产养殖用途前景数据包，作为构建 process 或 lifecyclemodel 的上游活鱼供应 |
| allowed_use | 匹配野生来源、物种生命阶段、声明用途、捕获暂养路线、地域时间与采集方首次交接门，并披露质量身份 |
| excluded_use | 食用或观赏鱼、养殖生产鱼、未孵化鱼卵、死亡加工饲料、接收方养殖运输、无依据生物等价或未解决具体交换身份的数据发布 |
| required_metadata | PCR及版本；物种用途阶段；野生来源航次渔具；批次尾数湿质量；交接接收方；所选路线时长；地域时间；分配副产品；共享资产期间；上游数据集及核实交换 |
| required_quality_disclosure | 抽样校准；观察存活健康用途适用性；损失附带渔获释放逃逸；不确定性；上游代理缺口；暂定范围；代表性；执行及跳过检查 |
| update_trigger | 物种用途交接门变化、实际管理性生产、新捕获暂养路线、重要投入废水或健康变化、资产服务分配变化、新身份证据或权威指导修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | 联合国统计司，CPC 3.0 解释说明，2025年6月30日，第40–43页；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ；获取日期 2026-10-09 | 野生养殖、非食用观赏食用分类边界；不提供数值清单默认值 |
| `fao-cba-2011` | official_guidance | FAO，《Aquaculture development 6: Use of wild fishery resources for capture-based aquaculture》，2011，摘要、§§3.1.2.2、3.2.1及5.5.1；https://www.fao.org/4/ba0059e/ba0059e.pdf ；获取日期 2026-10-09 | 捕获使用区分、活体材料用途、搬运死亡及来源追溯的定性证据；严格完整台账属于本 PCR 方法 |
| `fao-live-handling` | handbook | FAO，《Selected aspects of warmwater fish culture》，第6章，活鱼搬运与运输；https://www.fao.org/4/T8389E/T8389E06.htm ；获取日期 2026-10-09 | 仅支持水氧、大小年龄与搬运的定性考虑；无通用密度温度剂量或存活默认值 |
| `ghg-product-2011` | standard | WRI/WBCSD，《Product Life Cycle Accounting and Reporting Standard》，2011，第9章；https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ；获取日期 2026-10-09 | 分配优先级与披露；不声称符合完整标准，不自动提供避免负荷信用 |
| `wild-live-method-2026` | method_factor | 本 PCR 第3–9节，水产养殖用途野生活鱼测量、边界及分配方法，2026 | 内部定义的 1 kg 归一化、完整批次阶段使用者台账、测量平衡协议与验证；不是外部观察或生物表现默认值 |
