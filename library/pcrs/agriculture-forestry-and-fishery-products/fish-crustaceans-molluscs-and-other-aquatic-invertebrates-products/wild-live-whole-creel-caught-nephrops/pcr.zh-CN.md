---
pcr_id: pcr.wild-live-whole-creel-caught-nephrops
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 野生笼捕完整活体挪威海螯虾

## 1. 范围与适用性

本 PCR 涵盖野生笼捕 Nephrops norvegicus，在首次有据生产者实物交接时仍为食用完整原生带壳活体。须声明实际肢体/壳状态；完整不保证无损伤。活体维持边界不包括有意增养或育肥。笼捕是明确的方法范围限制，不是可持续性排名。

纳入的有界活体暂养仅采用有据海水型系统；非浸水/干式或喷雾暂养变体须另行证据及方法审查，本 PCR 不涵盖。排除拖网捕获、所有其他龙虾/虾物种、水产养殖、观赏用途、仅尾部或去壳/加工肉（scampi 等商品名本身不定义产品状态）、死亡鲜/冷藏、熟制、冻制、解冻或添加剂处理参考产品。实际产生的范围外状态输出仍在产生节点按有证据其他预期产品、废物、环境返归或未决去向核算，不得删除或作为活体参考验收。不作食品安全批准、法律许可、死亡率、货架期或生物多样性绩效断言。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-whole-creel-caught-nephrops |
| classification_refs | CPC 3.0 04341; narrower |
| covered_products | 首次生产者交接的野生笼捕完整原生带壳活体食用 Nephrops norvegicus |
| excluded_products | 拖网；其他物种；养殖；观赏；死亡；尾/肉；加工/冻制/解冻形式；非浸水/干式或喷雾活体暂养变体 |
| representative_product | 声明实际状态的一批笼捕活体挪威海螯虾 |
| production_route | 笼捕 → 按记录顺序的真实分选/暂养/保护事件 → 首次生产者交接；条件事件可绕过 |
| market_state | 活体、完整、原生带壳、食用；实际商业等级与状况 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 首次生产者交接的笼捕完整活体食用 Nephrops norvegicus |
| How much | 1 kg |
| How well | 活体且按声明食用目的验收；实际壳/肢体状况、等级与验收记录；不是安全认证 |
| How long or cycle | 声明批次、完整应归属笼捕航次及暂养时段；明确关联资产获取/使用/替换/退役及期初期末负担期间，无统一时长 |
| reference_flow_link | `producer_handover_accepted_reference` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 首次生产者交接的笼捕完整活体挪威海螯虾 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Nephrops norvegicus; 野生/笼捕来源; 捕获海区/时间及船舶/航次; 批次/pass 谱系; 活体/完整/原生带壳及实际肢体/壳状态; 等级及食用接收方; 交接地点/时间/保管责任与实物验收; 动物净湿称量/皮重/可分离水; 实际暂养/保护状态; 完整服务期间; 其他输出去向; 供应边界及不确定性 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_live_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用经校准称量及有记录皮重、可分离水去除测定同批验收活体动物净湿质量。含原生壳与体内水，不含箱、管具或游离海水。数量/等级类别为辅助信息，不用统一尾数质量系数。 |
| state_pass_ledger | creel_capture_wild_removal; creel_capture_live_transfer; creel_capture_other_intended; creel_capture_animal_waste; creel_capture_live_release; live_grading_live_receipt; live_grading_live_transfer; live_grading_other_intended; live_grading_animal_waste; live_grading_live_release; live_holding_live_receipt; live_holding_live_transfer; live_holding_other_intended; live_holding_animal_waste; live_holding_live_release; live_protection_live_receipt; live_protection_live_transfer; live_protection_other_intended; live_protection_animal_waste; live_protection_live_release; producer_handover_live_receipt; producer_handover_accepted_reference; producer_handover_other_intended; producer_handover_animal_waste; producer_handover_live_release | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按事件/pass 保留实际状态与单位。动物质量变化保留实际吸水/渗出液、脱落物及库存；不强制进出相等。非质量服务/能源保留原始单位，不加进动物 kg 平衡。 |
| energy_conversion | creel_capture_fuel; creel_capture_electricity; live_grading_fuel; live_grading_electricity; live_holding_fuel; live_holding_electricity; live_protection_fuel; live_protection_electricity; producer_handover_fuel; producer_handover_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量 kWh，按 1 kWh = 3.6 MJ 换算。燃料采用有据低位热值、组成及原始数量；不得无据将升或服务小时等同 MJ。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 起笼/投放前野生海洋 Nephrops 捕获环境；实际购买供应及完整应归属航次，不是购买最终活体动物 |
| starting_condition_role | 来源至收集输出的捕捞责任，独立于后续分级/活体维持 |
| product_classification_scope | CPC 3.0 04341 为 narrower 映射：仅野生笼捕完整原生带壳食用活体 |
| recursive_input_rule | 不得递归把购买同类别活体改称野生捕捞。显式接收同类别批次须有可追溯上游捕捞数据集及独立声明汇总边界；不得替代本来源边界，也不将内部转移计为新产出。 |
| upstream_dataset_requirement | 供应、资产及服务须身份/地区/技术/期间相容；披露至供应门内容和明确不可用背景链接，不抹除前景数量 |
| disclosure | 岸上/海上首次实物交接、实际事件顺序及绕过、生产者返航/待机/维护覆盖、共享使用方、资产服务期间、活体状况及全部去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_scope | reference product | 仅声明的笼捕活体为参考；相邻拖网/死亡/加工产品须用其他方法。来源仅证明定性路线接口，不定义数量/法律/可持续性约束。 | un-cpc3-notes; seafish-nephrops-creels |
| b_events | all process nodes | 图中节点是责任类别，不是强制时序。声明每项实际事件/pass、进出状态、前后事件和转移责任；分级可在暂养或保护前后并可重复。独立分级、暂养或保护未发生时绕过；捕捞初始筛选及最终验收仍由真实捕捞/交接节点负责；交接独立于包装承担真实本地资源与损失。 | seafish-nephrops-creels; seafish-nephrops-live-handling-1993 |
| b_period | complete attributable producer service | 实物交接门排除验收后买方运输/配送，但不截断完整航次/服务期间应归属的必要生产者返程、空载、待机、清洁、维护、资产替换或退役。记录获取、使用及服务终了期间与责任；无统一寿命。零输出期间须经有据期初期末结转保留负担，不可抹除或除以零。 |  |
| b_water | actual water and live maintenance | 暂养可绕过；实际发生有界暂养时，仅涵盖有据海水型系统，不包括非浸水/干式或喷雾变体。不强制具体海水系统、管具、氧气、禁食、温度或时长。记录实际适用状态控制证据，不强加历史试验条件。购水、直接取水、循环、蒸发、排水及物料载体水分别记录；不把循环作为新增供水，也不假定冰适用于活体。 | seafish-nephrops-creels; seafish-nephrops-live-handling-1993 |
| b_external | each actual output at every node | 每组分每事件记录唯一实际去向：内部转移/库存、独立预期外部产品、实际废物接收方、环境返归或明确未决去向。生命状态、商业等级、食品验收及法律背景分别记录；失败不代表合法共产品。记录实际许可/接收方接受，本 PCR 不授予许可。 |  |

## 6. 过程清单结构

作业模式为航次/批次制，记录笼具投放/起笼、渔获处理及真实门前活体维持时段。共享清洁/切换及服务事件有唯一责任和明确使用方，不复制进每个节点。生物相互作用、笼捕努力量、生境接触及渔具遗失观察保留科学原始量度，不虚构动物 kg 或影响可忽略断言。

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| creel_capture | 笼捕与初始起捕 | required | 仅纳入野生笼捕。 | 前景责任；实际事件/pass 责任 | 每 1 kg 参考流 |
| live_grading | 活体选择与去向分级 | conditional | 实际发生独立质量/去向分级；捕捞阶段初始起捕筛选和最终交接验收各保留自身事件责任。 | 前景责任；实际事件/pass 责任 | 每 1 kg 参考流 |
| live_holding | 短期活体状态维持 | conditional | 实际发生交接前活体暂养或有界的生命状态维持干预。 | 前景责任；实际事件/pass 责任 | 每 1 kg 参考流 |
| live_protection | 交接前保护与呈现 | conditional | 交接前实际发生独立保护、装箱、标识或呈现。 | 前景责任；实际事件/pass 责任 | 每 1 kg 参考流 |
| producer_handover | 首次生产者活体交接 | required | 发生有证据的首次生产者实物交接及验收。 | 前景责任；实际事件/pass 责任 | 每 1 kg 参考流 |

### 过程： 笼捕与初始起捕 (`creel_capture`)

从海洋捕获环境收集野生渔获；记录投放、起笼、饵料及完整应归属船舶航次。初始释放归属本节点；收集的目标活体状态移交至实际下一事件。捕捞独立于后续状态维持或分级，不是人工养殖。

#### 输入

##### 产品流

###### 按供应地区及供应方区分的实际电力 (`creel_capture_electricity`)

实际供应边界内单独购买电力时记录；区分电网供应和自发电。计量 kWh 须可追溯至 MJ；发电机燃料和发电输出不得重复表示同一供电负担。不以任何国家电网作默认。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_creel_capture`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_creel_capture_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定通用交换；实际适用接口须归入正确类型，不编造数量。

##### 基本流

#### 输出

##### 产品流

###### 笼捕完整活体挪威海螯虾内部转移 (`creel_capture_live_transfer`)

转至下一事件的实际目标完整活体状态；按 pass 计量并配对真实接收，不强制表格顺序，也不推定最终 1 kg 数量。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：笼捕完整活体挪威海螯虾内部转移
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_creel_capture`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_creel_capture_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际前景向未细分空气排放的化石二氧化碳 (`creel_capture_fossil_co2`)

仅当未细分空气为有据介质时，记录自有前景燃烧有证据的化石 CO2。保留燃料碳/氧化证据或实测排放，区分生物呼吸；不计整体供应服务已含尾气。更具体的实际介质须独立确认。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_creel_capture`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_creel_capture_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程： 活体选择与去向分级 (`live_grading`)

捕捞阶段起捕筛选与释放仍归捕捞责任。独立质量/去向分级接收实际完整活体状态，分别评估生命状态、状况及商业等级，并记录真实合格活体转移、其他预期产品、允许的活体放归、死亡物料及未决去向。每项选择事件仅归属一次，仅按真实事件重复。最终实物验收归 producer_handover，不重复记为分级事件。

#### 输入

##### 产品流

###### 笼捕完整活体挪威海螯虾接收 (`live_grading_live_receipt`)

来自上一事件的实际同批活体接收；配对转移编号、状态、动物净湿质量、时间及保管责任。不得将内部接收固定为最终参考数量。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：笼捕完整活体挪威海螯虾接收
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_grading`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_grading_live_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 按供应地区及供应方区分的实际电力 (`live_grading_electricity`)

实际供应边界内单独购买电力时记录；区分电网供应和自发电。计量 kWh 须可追溯至 MJ；发电机燃料和发电输出不得重复表示同一供电负担。不以任何国家电网作默认。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_grading`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_grading_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定通用交换；实际适用接口须归入正确类型，不编造数量。

##### 基本流

#### 输出

##### 产品流

###### 笼捕完整活体挪威海螯虾内部转移 (`live_grading_live_transfer`)

转至下一事件的实际目标完整活体状态；按 pass 计量并配对真实接收，不强制表格顺序，也不推定最终 1 kg 数量。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：笼捕完整活体挪威海螯虾内部转移
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_grading`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_grading_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际前景向未细分空气排放的化石二氧化碳 (`live_grading_fossil_co2`)

仅当未细分空气为有据介质时，记录自有前景燃烧有证据的化石 CO2。保留燃料碳/氧化证据或实测排放，区分生物呼吸；不计整体供应服务已含尾气。更具体的实际介质须独立确认。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_grading`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_grading_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程： 短期活体状态维持 (`live_holding`)

接收完整活体并在记录时段维持实际可用活体状态；输出经计量活体状态，或记录实际死亡、拒收物料和释放。仅在实际使用时记录水槽、单体管、海水循环、曝气、氧气及温控。不暗示生长、存活或货架期保证。

#### 输入

##### 产品流

###### 笼捕完整活体挪威海螯虾接收 (`live_holding_live_receipt`)

来自上一事件的实际同批活体接收；配对转移编号、状态、动物净湿质量、时间及保管责任。不得将内部接收固定为最终参考数量。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：笼捕完整活体挪威海螯虾接收
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_holding`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_holding_live_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 按供应地区及供应方区分的实际电力 (`live_holding_electricity`)

实际供应边界内单独购买电力时记录；区分电网供应和自发电。计量 kWh 须可追溯至 MJ；发电机燃料和发电输出不得重复表示同一供电负担。不以任何国家电网作默认。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_holding`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_holding_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定通用交换；实际适用接口须归入正确类型，不编造数量。

##### 基本流

#### 输出

##### 产品流

###### 笼捕完整活体挪威海螯虾内部转移 (`live_holding_live_transfer`)

转至下一事件的实际目标完整活体状态；按 pass 计量并配对真实接收，不强制表格顺序，也不推定最终 1 kg 数量。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：笼捕完整活体挪威海螯虾内部转移
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_holding`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_holding_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际前景向未细分空气排放的化石二氧化碳 (`live_holding_fossil_co2`)

仅当未细分空气为有据介质时，记录自有前景燃烧有证据的化石 CO2。保留燃料碳/氧化证据或实测排放，区分生物呼吸；不计整体供应服务已含尾气。更具体的实际介质须独立确认。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_holding`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_holding_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程： 交接前保护与呈现 (`live_protection`)

接收实际完整活体产品状态，形成下一实际移交的受保护活体状态。识别一次性材料、可重复使用的管具和周转箱及其保管责任；本节点不包括买方配送。保护不产生第二份动物参考产品，也不将重复使用资产视为一次性包装。

#### 输入

##### 产品流

###### 笼捕完整活体挪威海螯虾接收 (`live_protection_live_receipt`)

来自上一事件的实际同批活体接收；配对转移编号、状态、动物净湿质量、时间及保管责任。不得将内部接收固定为最终参考数量。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：笼捕完整活体挪威海螯虾接收
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_protection`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_protection_live_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 按供应地区及供应方区分的实际电力 (`live_protection_electricity`)

实际供应边界内单独购买电力时记录；区分电网供应和自发电。计量 kWh 须可追溯至 MJ；发电机燃料和发电输出不得重复表示同一供电负担。不以任何国家电网作默认。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_protection`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_protection_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定通用交换；实际适用接口须归入正确类型，不编造数量。

##### 基本流

#### 输出

##### 产品流

###### 笼捕完整活体挪威海螯虾内部转移 (`live_protection_live_transfer`)

转至下一事件的实际目标完整活体状态；按 pass 计量并配对真实接收，不强制表格顺序，也不推定最终 1 kg 数量。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：笼捕完整活体挪威海螯虾内部转移
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_protection`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_protection_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 实际前景向未细分空气排放的化石二氧化碳 (`live_protection_fossil_co2`)

仅当未细分空气为有据介质时，记录自有前景燃烧有证据的化石 CO2。保留燃料碳/氧化证据或实测排放，区分生物呼吸；不计整体供应服务已含尾气。更具体的实际介质须独立确认。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_protection`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_live_protection_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程： 首次生产者活体交接 (`producer_handover`)

从实际上一节点直接接收最终活体批次，包括绕过暂养或保护时。负责最终称量、活体验收、实际搬运需求和本地损失。参考产品仅从本节点输出一次；期初期末库存及拒收动物不得默认为验收输出。

#### 输入

##### 产品流

###### 笼捕完整活体挪威海螯虾接收 (`producer_handover_live_receipt`)

来自上一事件的实际同批活体接收；配对转移编号、状态、动物净湿质量、时间及保管责任。不得将内部接收固定为最终参考数量。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：笼捕完整活体挪威海螯虾接收
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_producer_handover`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_producer_handover_live_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 按供应地区及供应方区分的实际电力 (`producer_handover_electricity`)

实际供应边界内单独购买电力时记录；区分电网供应和自发电。计量 kWh 须可追溯至 MJ；发电机燃料和发电输出不得重复表示同一供电负担。不以任何国家电网作默认。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：电力
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_producer_handover`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_producer_handover_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不规定通用交换；实际适用接口须归入正确类型，不编造数量。

##### 基本流

#### 输出

##### 产品流

###### 首次生产者交接的笼捕完整活体挪威海螯虾 (`producer_handover_accepted_reference`)

仅为首次有据生产者交接验收的食用完整活体 Nephrops norvegicus。动物净湿质量含原生壳及体内水，不含可分离水和容器；1 kg 表示归一化身份，不是产率或存活率。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：首次生产者交接的笼捕完整活体挪威海螯虾
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_producer_handover`
- 来源：`seafish-nephrops-creels`; `reference-normalization-identity`
- 数量范围：参考归一化身份，不是产率界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`reference-normalization-identity`

##### 废物流

##### 基本流

###### 实际前景向未细分空气排放的化石二氧化碳 (`producer_handover_fossil_co2`)

仅当未细分空气为有据介质时，记录自有前景燃烧有证据的化石 CO2。保留燃料碳/氧化证据或实测排放，区分生物呼吸；不计整体供应服务已含尾气。更具体的实际介质须独立确认。

对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_producer_handover`
- 来源：`seafish-nephrops-creels`
- 数量范围：暂定独立证据包络；不是经验阈值或默认数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：U_producer_handover_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_physical | all cards and process passes | 先保留未分配实物/原始单位账：期初库存 + 接收/起捕 = 转移 + 独立产品 + 废物 + 环境返归 + 期末库存 + 明确有据水/物料变化或未决残差。动物、饵料、包装及水账分别核算并按组成关联；服务/能源不加入动物质量。配对内部转移并保留负担，不将其视为新生产。实物数量按同批正的最终验收动物净 kg 归一化；分配份额不得闭合质量或掩盖损失。 |  |
| a_coproduct | every actual independent external output at creel_capture; live_grading; live_holding; live_protection; producer_handover | 枚举真实验收预期输出及独立交接。先以计量细分避免共产品分配。剩余真正共享生产者活动优先选择航次/处理计量支持的因果实物关系并记录；否则采用期间、等级和交接价格匹配的一致经济份额，披露价格/数量证据及敏感性。不强制质量分配，不给零价值废物信用，也不自动替代。LCA 分配与实物数量分开，所选份额仅作用于归属共享负担一次，交接不得重复既有拆分。已在有证据外部交接点离开的产品份额保持不变，不重新开启。剩余内部物流后来真实分出新验收预期产品及继续参考流时，仅将其仍携带的上游负担池及随后真正共享负担，按既定分配优先级在这个新分离点拆分一次。较晚认定为产品不意味着共同捕捞负担为零。后续专属负担归实际接收产品；不得仅因交接门或等级变化再次应用同一拆分。缺证据则阻止最终分配；检验失败本身不能创造共产品。 |  |
| a_shared | shared vessels; hauling equipment; holding tanks; tubes/crates; quay facilities; utilities and services | 识别每项共享资产/服务、全部使用节点/其他产品及完整服务期间。先直接计量独占消耗；残余负担按有据因果服务需求分摊，例如实际设备小时或有配置证据的占用暂养容量-时间，不任意等分。包括其他使用方、替换/退役及结转负担在内，各份额须合计责任总量；排除服务方已含制造/能源/废物。节点账仅归属每事件一次，与后续仅一次共产品分配分开。 |  |
| a_period | trip; haul; lot; event/pass; holding interval; asset service and reporting periods | 把渔获、供应、清洁/切换、返程/待机/维护及获取/替换/退役关联真实期间与使用方。跨期核对期初期末活体库存及相关结转负担。零参考输出期间保留有据负担，待有证据服务/期间归属；不得除零、删除、虚构产出，或仅因其他批次成功就惯常转嫁。不得重复年化或反复计整件资产。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_creel_capture | creel_capture | 全部实际节点责任卡；区分身份/状态/pass 记录 | 校准计量；日志；发票；验收及保管责任记录 | 航次/批次/事件/pass 编号；前后事件及转移编号；物种；活/死及完整/状况；等级；净湿/毛/皮重/可分离水质量；尾数；接收方/用途；期初期末库存；物料身份/组成；原始数量/单位；燃料低位热值/碳；电表；服务小时/服务方包含项；供水/取水/循环/排水/蒸发；实际条件/时间；全部去向；共享使用方；资产期间；独立 U 证据；不确定性  适用时辅助条件：温度数值及声明温标（如 °C），其他数值条件及各自声明单位；事件开始/结束时间戳及时区；经过时间数值及 min/h 单位；活/死、鲜/冷藏、未经冻结等状态类别及其证据； | 以经校准秤及实际皮重称量同状态批次；计量公用工程和服务小时，或保留注明范围供应商记录；核对事件日志、库存和接收方。捕捞起捕/返归用可追溯渔获观察称量，无法称量时估计须有据。交接采用校准验收动物净活体质量及接收单。不用统一换算或缺失当零。  适用温度由经校准传感器并附位置时间记录采集，时长依据事件时间戳，类别依据可追溯状态/历史记录。辅助描述不属于 kg 清单量，不提供通用温度或时长限值。 | kg; MJ; h; actual native units; categorical state/time | 每实际事件/pass 及转移；适用仪表/日志按相应时段；每资产事件 | 完整应归属航次/服务期间及相连库存/资产期初期末期间 | 本节点实际船舶、暂养/保护场址或交接地点；声明其他使用方 | 每 1 kg 参考流 | 校准/皮重记录；配对转移及接收方记录；计量/发票核对；库存及期间闭合；服务方范围；独立范围包络证据及未决残差 |
| cp_live_grading | live_grading | 全部实际节点责任卡；区分身份/状态/pass 记录 | 校准计量；日志；发票；验收及保管责任记录 | 航次/批次/事件/pass 编号；前后事件及转移编号；物种；活/死及完整/状况；等级；净湿/毛/皮重/可分离水质量；尾数；接收方/用途；期初期末库存；物料身份/组成；原始数量/单位；燃料低位热值/碳；电表；服务小时/服务方包含项；供水/取水/循环/排水/蒸发；实际条件/时间；全部去向；共享使用方；资产期间；独立 U 证据；不确定性  适用时辅助条件：温度数值及声明温标（如 °C），其他数值条件及各自声明单位；事件开始/结束时间戳及时区；经过时间数值及 min/h 单位；活/死、鲜/冷藏、未经冻结等状态类别及其证据； | 以经校准秤及实际皮重称量同状态批次；计量公用工程和服务小时，或保留注明范围供应商记录；核对事件日志、库存和接收方。捕捞起捕/返归用可追溯渔获观察称量，无法称量时估计须有据。交接采用校准验收动物净活体质量及接收单。不用统一换算或缺失当零。  适用温度由经校准传感器并附位置时间记录采集，时长依据事件时间戳，类别依据可追溯状态/历史记录。辅助描述不属于 kg 清单量，不提供通用温度或时长限值。 | kg; MJ; h; actual native units; categorical state/time | 每实际事件/pass 及转移；适用仪表/日志按相应时段；每资产事件 | 完整应归属航次/服务期间及相连库存/资产期初期末期间 | 本节点实际船舶、暂养/保护场址或交接地点；声明其他使用方 | 每 1 kg 参考流 | 校准/皮重记录；配对转移及接收方记录；计量/发票核对；库存及期间闭合；服务方范围；独立范围包络证据及未决残差 |
| cp_live_holding | live_holding | 全部实际节点责任卡；区分身份/状态/pass 记录 | 校准计量；日志；发票；验收及保管责任记录 | 航次/批次/事件/pass 编号；前后事件及转移编号；物种；活/死及完整/状况；等级；净湿/毛/皮重/可分离水质量；尾数；接收方/用途；期初期末库存；物料身份/组成；原始数量/单位；燃料低位热值/碳；电表；服务小时/服务方包含项；供水/取水/循环/排水/蒸发；实际条件/时间；全部去向；共享使用方；资产期间；独立 U 证据；不确定性  适用时辅助条件：温度数值及声明温标（如 °C），其他数值条件及各自声明单位；事件开始/结束时间戳及时区；经过时间数值及 min/h 单位；活/死、鲜/冷藏、未经冻结等状态类别及其证据； | 以经校准秤及实际皮重称量同状态批次；计量公用工程和服务小时，或保留注明范围供应商记录；核对事件日志、库存和接收方。捕捞起捕/返归用可追溯渔获观察称量，无法称量时估计须有据。交接采用校准验收动物净活体质量及接收单。不用统一换算或缺失当零。  适用温度由经校准传感器并附位置时间记录采集，时长依据事件时间戳，类别依据可追溯状态/历史记录。辅助描述不属于 kg 清单量，不提供通用温度或时长限值。 | kg; MJ; h; actual native units; categorical state/time | 每实际事件/pass 及转移；适用仪表/日志按相应时段；每资产事件 | 完整应归属航次/服务期间及相连库存/资产期初期末期间 | 本节点实际船舶、暂养/保护场址或交接地点；声明其他使用方 | 每 1 kg 参考流 | 校准/皮重记录；配对转移及接收方记录；计量/发票核对；库存及期间闭合；服务方范围；独立范围包络证据及未决残差 |
| cp_live_protection | live_protection | 全部实际节点责任卡；区分身份/状态/pass 记录 | 校准计量；日志；发票；验收及保管责任记录 | 航次/批次/事件/pass 编号；前后事件及转移编号；物种；活/死及完整/状况；等级；净湿/毛/皮重/可分离水质量；尾数；接收方/用途；期初期末库存；物料身份/组成；原始数量/单位；燃料低位热值/碳；电表；服务小时/服务方包含项；供水/取水/循环/排水/蒸发；实际条件/时间；全部去向；共享使用方；资产期间；独立 U 证据；不确定性  适用时辅助条件：温度数值及声明温标（如 °C），其他数值条件及各自声明单位；事件开始/结束时间戳及时区；经过时间数值及 min/h 单位；活/死、鲜/冷藏、未经冻结等状态类别及其证据； | 以经校准秤及实际皮重称量同状态批次；计量公用工程和服务小时，或保留注明范围供应商记录；核对事件日志、库存和接收方。捕捞起捕/返归用可追溯渔获观察称量，无法称量时估计须有据。交接采用校准验收动物净活体质量及接收单。不用统一换算或缺失当零。  适用温度由经校准传感器并附位置时间记录采集，时长依据事件时间戳，类别依据可追溯状态/历史记录。辅助描述不属于 kg 清单量，不提供通用温度或时长限值。 | kg; MJ; h; actual native units; categorical state/time | 每实际事件/pass 及转移；适用仪表/日志按相应时段；每资产事件 | 完整应归属航次/服务期间及相连库存/资产期初期末期间 | 本节点实际船舶、暂养/保护场址或交接地点；声明其他使用方 | 每 1 kg 参考流 | 校准/皮重记录；配对转移及接收方记录；计量/发票核对；库存及期间闭合；服务方范围；独立范围包络证据及未决残差 |
| cp_producer_handover | producer_handover | 全部实际节点责任卡；区分身份/状态/pass 记录 | 校准计量；日志；发票；验收及保管责任记录 | 航次/批次/事件/pass 编号；前后事件及转移编号；物种；活/死及完整/状况；等级；净湿/毛/皮重/可分离水质量；尾数；接收方/用途；期初期末库存；物料身份/组成；原始数量/单位；燃料低位热值/碳；电表；服务小时/服务方包含项；供水/取水/循环/排水/蒸发；实际条件/时间；全部去向；共享使用方；资产期间；独立 U 证据；不确定性  适用时辅助条件：温度数值及声明温标（如 °C），其他数值条件及各自声明单位；事件开始/结束时间戳及时区；经过时间数值及 min/h 单位；活/死、鲜/冷藏、未经冻结等状态类别及其证据； | 以经校准秤及实际皮重称量同状态批次；计量公用工程和服务小时，或保留注明范围供应商记录；核对事件日志、库存和接收方。捕捞起捕/返归用可追溯渔获观察称量，无法称量时估计须有据。交接采用校准验收动物净活体质量及接收单。不用统一换算或缺失当零。  适用温度由经校准传感器并附位置时间记录采集，时长依据事件时间戳，类别依据可追溯状态/历史记录。辅助描述不属于 kg 清单量，不提供通用温度或时长限值。 | kg; MJ; h; actual native units; categorical state/time | 每实际事件/pass 及转移；适用仪表/日志按相应时段；每资产事件 | 完整应归属航次/服务期间及相连库存/资产期初期末期间 | 本节点实际船舶、暂养/保护场址或交接地点；声明其他使用方 | 每 1 kg 参考流 | 校准/皮重记录；配对转移及接收方记录；计量/发票核对；库存及期间闭合；服务方范围；独立范围包络证据及未决残差 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_physical | all inventory rows | 保留未分配事件数量及组成/库存变化，内部转移仅配对一次，按正的最终验收参考 kg 表示每项实物/原始单位数量。另行保留仅一次 LCA 共享负担分配；不以经济份额缩放动物平衡。 | 节点协议；实际最终活体净质量；库存及转移记录 | 每 1 kg 参考实物清单；另标记已分配 LCA 清单 |  |
| c_power | creel_capture_electricity; live_grading_electricity; live_holding_electricity; live_protection_electricity; producer_handover_electricity | MJ = kWh × 3.6；保留计量范围并区分购电与发电。 | metered kWh | MJ |  |
| c_fossil | creel_capture_fossil_co2; live_grading_fossil_co2; live_holding_fossil_co2; live_protection_fossil_co2; producer_handover_fossil_co2 | 采用实际计量化石 CO2 或有据燃料专属化石碳、氧化及碳转 CO2 关系。声明证据与不确定性；不提供通用系数、不含生物呼吸、不重复整体服务已含排放。 | 实际燃料/排放记录；碳及氧化证据；服务方范围 | kg fossil CO2 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | reference and all exchanges | 在具体交换 UUID 前确认物种、野生笼捕来源、门口活体/完整状态、角色、流类型、单位/属性及实际地区/服务方/去向。条件总括卡按实际展开为零/一/多身份，不借近似匹配。 | 捕捞/验收记录及独立身份/支持确认 |
| q_complete | all nodes and periods | 保留真实启用/绕过、pass 顺序、本地资源、损失、全部去向、实物库存及完整生产者/服务期间；有据未发生与未知分开。 | 节点协议、期间/责任账及未解释残差披露 |
| q_range | every card | 每 0..U 筛查须有按身份/状态/pass 区分的独立证据，单位为本卡单位每最终参考 kg。U 在实例化前为未决候选包络，不是经验界限/默认。最终 1..1 仅为归一化。超范围值保留调查，不裁剪或把未知置零。 | 独立供应商/设计/历史期间证据，不是被检批次最大值 |
| q_context | actual data package | 披露计量/估计不确定性、时空代表性、物种/等级混合、背景缺口及未决分配/支持。不从分类或历史摘要推断法律/安全/存活/生态断言。 | 原始记录；来源角色限制；假设与敏感性 |
| `collect_creel_capture_bait` | `creel_capture`; 输入; 产品流: 按物种和供应状态区分的实际饵料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际购买或外部接收的饵料；记录物种、来源、冻制/盐制/鲜活状态、解冻沥水变化及供应组成。内部再用须配对，不是第二次购入；饵料去向独立于动物输出核算。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_bait 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_fuel` | `creel_capture`; 输入; 产品流: 自有前景设备实际供入燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅在实际发生前景燃烧时记录；识别燃料组成、供应边界及计量低位热值能量。保留原始燃料数量和有据的燃料专属换算；不计入供应商整体服务中已包含的燃料。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_fuel 单位：MJ 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_supplied_water` | `creel_capture`; 输入; 产品流: 按实际水质与来源区分的外部供水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际购买海水或淡水时，分别记录来源、水质、处理及交付边界。供水不是直接取水或内部循环；不得假定淡水适于活体暂养。载体水须核对且不得重复计供水。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_supplied_water 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_materials` | `creel_capture`; 输入; 产品流: 按身份区分的实际耗材与替换材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际独立接收的耗材、渔具/管具/周转箱替换件或保护材料；展开为真实组分身份，区分重复使用资产、内部返还、新购及使用终了去向。 本输入包含实际内部附件/容器接收，按转移编号、身份、状态、实测质量及保管责任与上一 accessory_transfer 输出配对。外购与期初期末库存分开；仅库存结转不是交换。不得把同一接收重复当新购或计入其他材料/服务卡。资产制造仅在有证据服务期内分摊，不在每次使用计整件替换质量。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_materials 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_gas_chemicals` | `creel_capture`; 输入; 产品流: 按组成区分的实际气体或化学产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际氧气、清洁剂、制冷剂补充或其他有据辅助品；分别区分交付身份、浓度、载体及用途。这不是强制处理、适用性保证或单一固定流；按实际事件记录残留及泄漏。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_gas_chemicals 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_services` | `creel_capture`; 输入; 产品流: 实际独立供应的设备或搬运服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际服务按记录的设备/搬运服务小时计量；区分供应商和服务单位，不把费用、动物或混合服务换为虚构 kg 流。记录所含能源、材料及基础设施以排除重复。非按小时计量的服务须用真实单位并独立确认支持身份后形成最终交换。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: 设备或搬运服务时长 / h; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_services 单位：h 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_wild_removal` | `creel_capture`; 输入; 基本流: 从海洋环境起捕的野生动物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物种及状态分开记录实际起捕的目标和偶获动物。每项起捕组分须对应留存渔获、初始释放、损失或库存；不重复增加相同的购买动物输入。不得把起捕前未观测逃逸虚构为称量交换。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_wild_removal 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_water_abstraction` | `creel_capture`; 输入; 基本流: 按来源环境介质区分的实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际环境取水，以计量值或有据的流量与时间确定，并声明来源介质。循环水和外部供水不计为本次新取水。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_water_abstraction 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_other_intended` | `creel_capture`; 输出; 产品流: 按身份及验收去向区分的实际其他独立预期产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为有证据的外部预期产品，须有实际接收方、接受用途、生命/物料状态、等级、数量及唯一交接责任。展开不同输出；其他物种或范围外死亡产品仅在实际被接受时计入。检验失败本身不证明产品身份或合法性。内部目标转移不是共产品。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_other_intended 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_accessory_transfer` | `creel_capture`; 输出; 产品流: 与动物分开的实际附件/容器责任转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际与活体批次随行或另行返还的管具、周转箱、保护材料或其他附件；每项物料、实际实物质量、再用/保管责任及接收/去向与动物净 kg 分开记录。随产品交付附件不自动成为独立预期共产品；不在每次转移重复计资产制造。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_accessory_transfer 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_animal_waste` | `creel_capture`; 输出; 废物流: 按去向区分的实际死亡或拒收动物废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际发生在本事件的动物废物，包括有据的脱落身体物料，按状态和处理接收方分开。不用默认死亡率，也不自动视为有用产品；不重复活体释放或其他预期输出，不把暂养或交接死亡倒记为捕捞损失。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_animal_waste 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_material_waste` | `creel_capture`; 输出; 废物流: 实际废耗材及服务责任残余废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际跨界交予处理方的废物；按身份及责任区分饵料残余、废渔具、管具、容器或清洁残余。再用物品属于内部库存/转移，不是废物；整体服务已含废物不再重复。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_material_waste 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_wastewater_service` | `creel_capture`; 输出; 废物流: 实际交予外部处理的废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际跨越技术圈处理边界的废水；保留水/盐/固体组成及去向。同一水流不得同时计直接排放；溶解组分不得重复计为完整动物质量。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_wastewater_service 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_live_release` | `creel_capture`; 输出; 基本流: 实际向海洋环境释放的活体动物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际活体放归，须记录物种/状态、地点、时间及适用接受证据；区分主动释放与意外逃逸。仅记录生物起捕/返归，不断言存活、影响可忽略或法律许可。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_live_release 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_direct_discharge` | `creel_capture`; 输出; 基本流: 按接收介质区分的实际直接排水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录计量直接环境排水及盐度/温度/组成与接收介质；区分蒸发与保留水。污染物按物质分别计量，不重复载体水质量。同一水流不得再计为交付废水处理服务。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_direct_discharge 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_creel_capture_other_emissions` | `creel_capture`; 输出; 基本流: 按身份及介质区分的实际其他排放物质 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际发生的尾气污染物、制冷剂泄漏、蒸发水或物料遗失；展开至每项计量物质与介质，记录物种、基准及不确定性。不把混合尾气/NOx 标签或遗失复合笼具绑定为单一基本流 UUID，也不把缺失证据说成实测零。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_creel_capture` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_creel_capture`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_creel_capture_other_emissions 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_creel_capture`; `seafish-nephrops-creels` |
| `collect_live_grading_fuel` | `live_grading`; 输入; 产品流: 自有前景设备实际供入燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅在实际发生前景燃烧时记录；识别燃料组成、供应边界及计量低位热值能量。保留原始燃料数量和有据的燃料专属换算；不计入供应商整体服务中已包含的燃料。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_fuel 单位：MJ 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_supplied_water` | `live_grading`; 输入; 产品流: 按实际水质与来源区分的外部供水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际购买海水或淡水时，分别记录来源、水质、处理及交付边界。供水不是直接取水或内部循环；不得假定淡水适于活体暂养。载体水须核对且不得重复计供水。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_supplied_water 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_materials` | `live_grading`; 输入; 产品流: 按身份区分的实际耗材与替换材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际独立接收的耗材、渔具/管具/周转箱替换件或保护材料；展开为真实组分身份，区分重复使用资产、内部返还、新购及使用终了去向。 本输入包含实际内部附件/容器接收，按转移编号、身份、状态、实测质量及保管责任与上一 accessory_transfer 输出配对。外购与期初期末库存分开；仅库存结转不是交换。不得把同一接收重复当新购或计入其他材料/服务卡。资产制造仅在有证据服务期内分摊，不在每次使用计整件替换质量。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_materials 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_gas_chemicals` | `live_grading`; 输入; 产品流: 按组成区分的实际气体或化学产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际氧气、清洁剂、制冷剂补充或其他有据辅助品；分别区分交付身份、浓度、载体及用途。这不是强制处理、适用性保证或单一固定流；按实际事件记录残留及泄漏。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_gas_chemicals 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_services` | `live_grading`; 输入; 产品流: 实际独立供应的设备或搬运服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际服务按记录的设备/搬运服务小时计量；区分供应商和服务单位，不把费用、动物或混合服务换为虚构 kg 流。记录所含能源、材料及基础设施以排除重复。非按小时计量的服务须用真实单位并独立确认支持身份后形成最终交换。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: 设备或搬运服务时长 / h; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_services 单位：h 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_water_abstraction` | `live_grading`; 输入; 基本流: 按来源环境介质区分的实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际环境取水，以计量值或有据的流量与时间确定，并声明来源介质。循环水和外部供水不计为本次新取水。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_water_abstraction 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_other_intended` | `live_grading`; 输出; 产品流: 按身份及验收去向区分的实际其他独立预期产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为有证据的外部预期产品，须有实际接收方、接受用途、生命/物料状态、等级、数量及唯一交接责任。展开不同输出；其他物种或范围外死亡产品仅在实际被接受时计入。检验失败本身不证明产品身份或合法性。内部目标转移不是共产品。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_other_intended 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_accessory_transfer` | `live_grading`; 输出; 产品流: 与动物分开的实际附件/容器责任转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际与活体批次随行或另行返还的管具、周转箱、保护材料或其他附件；每项物料、实际实物质量、再用/保管责任及接收/去向与动物净 kg 分开记录。随产品交付附件不自动成为独立预期共产品；不在每次转移重复计资产制造。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_accessory_transfer 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_animal_waste` | `live_grading`; 输出; 废物流: 按去向区分的实际死亡或拒收动物废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际发生在本事件的动物废物，包括有据的脱落身体物料，按状态和处理接收方分开。不用默认死亡率，也不自动视为有用产品；不重复活体释放或其他预期输出，不把暂养或交接死亡倒记为捕捞损失。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_animal_waste 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_material_waste` | `live_grading`; 输出; 废物流: 实际废耗材及服务责任残余废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际跨界交予处理方的废物；按身份及责任区分饵料残余、废渔具、管具、容器或清洁残余。再用物品属于内部库存/转移，不是废物；整体服务已含废物不再重复。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_material_waste 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_wastewater_service` | `live_grading`; 输出; 废物流: 实际交予外部处理的废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际跨越技术圈处理边界的废水；保留水/盐/固体组成及去向。同一水流不得同时计直接排放；溶解组分不得重复计为完整动物质量。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_wastewater_service 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_live_release` | `live_grading`; 输出; 基本流: 实际向海洋环境释放的活体动物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际活体放归，须记录物种/状态、地点、时间及适用接受证据；区分主动释放与意外逃逸。仅记录生物起捕/返归，不断言存活、影响可忽略或法律许可。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_live_release 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_direct_discharge` | `live_grading`; 输出; 基本流: 按接收介质区分的实际直接排水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录计量直接环境排水及盐度/温度/组成与接收介质；区分蒸发与保留水。污染物按物质分别计量，不重复载体水质量。同一水流不得再计为交付废水处理服务。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_direct_discharge 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_grading_other_emissions` | `live_grading`; 输出; 基本流: 按身份及介质区分的实际其他排放物质 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际发生的尾气污染物、制冷剂泄漏、蒸发水或物料遗失；展开至每项计量物质与介质，记录物种、基准及不确定性。不把混合尾气/NOx 标签或遗失复合笼具绑定为单一基本流 UUID，也不把缺失证据说成实测零。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_grading` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_grading`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_grading_other_emissions 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_grading`; `seafish-nephrops-creels` |
| `collect_live_holding_fuel` | `live_holding`; 输入; 产品流: 自有前景设备实际供入燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅在实际发生前景燃烧时记录；识别燃料组成、供应边界及计量低位热值能量。保留原始燃料数量和有据的燃料专属换算；不计入供应商整体服务中已包含的燃料。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_fuel 单位：MJ 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_supplied_water` | `live_holding`; 输入; 产品流: 按实际水质与来源区分的外部供水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际购买海水或淡水时，分别记录来源、水质、处理及交付边界。供水不是直接取水或内部循环；不得假定淡水适于活体暂养。载体水须核对且不得重复计供水。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_supplied_water 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_materials` | `live_holding`; 输入; 产品流: 按身份区分的实际耗材与替换材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际独立接收的耗材、渔具/管具/周转箱替换件或保护材料；展开为真实组分身份，区分重复使用资产、内部返还、新购及使用终了去向。 本输入包含实际内部附件/容器接收，按转移编号、身份、状态、实测质量及保管责任与上一 accessory_transfer 输出配对。外购与期初期末库存分开；仅库存结转不是交换。不得把同一接收重复当新购或计入其他材料/服务卡。资产制造仅在有证据服务期内分摊，不在每次使用计整件替换质量。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_materials 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_gas_chemicals` | `live_holding`; 输入; 产品流: 按组成区分的实际气体或化学产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际氧气、清洁剂、制冷剂补充或其他有据辅助品；分别区分交付身份、浓度、载体及用途。这不是强制处理、适用性保证或单一固定流；按实际事件记录残留及泄漏。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_gas_chemicals 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_services` | `live_holding`; 输入; 产品流: 实际独立供应的设备或搬运服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际服务按记录的设备/搬运服务小时计量；区分供应商和服务单位，不把费用、动物或混合服务换为虚构 kg 流。记录所含能源、材料及基础设施以排除重复。非按小时计量的服务须用真实单位并独立确认支持身份后形成最终交换。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: 设备或搬运服务时长 / h; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_services 单位：h 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_water_abstraction` | `live_holding`; 输入; 基本流: 按来源环境介质区分的实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际环境取水，以计量值或有据的流量与时间确定，并声明来源介质。循环水和外部供水不计为本次新取水。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_water_abstraction 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_other_intended` | `live_holding`; 输出; 产品流: 按身份及验收去向区分的实际其他独立预期产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为有证据的外部预期产品，须有实际接收方、接受用途、生命/物料状态、等级、数量及唯一交接责任。展开不同输出；其他物种或范围外死亡产品仅在实际被接受时计入。检验失败本身不证明产品身份或合法性。内部目标转移不是共产品。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_other_intended 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_accessory_transfer` | `live_holding`; 输出; 产品流: 与动物分开的实际附件/容器责任转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际与活体批次随行或另行返还的管具、周转箱、保护材料或其他附件；每项物料、实际实物质量、再用/保管责任及接收/去向与动物净 kg 分开记录。随产品交付附件不自动成为独立预期共产品；不在每次转移重复计资产制造。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_accessory_transfer 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_animal_waste` | `live_holding`; 输出; 废物流: 按去向区分的实际死亡或拒收动物废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际发生在本事件的动物废物，包括有据的脱落身体物料，按状态和处理接收方分开。不用默认死亡率，也不自动视为有用产品；不重复活体释放或其他预期输出，不把暂养或交接死亡倒记为捕捞损失。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_animal_waste 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_material_waste` | `live_holding`; 输出; 废物流: 实际废耗材及服务责任残余废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际跨界交予处理方的废物；按身份及责任区分饵料残余、废渔具、管具、容器或清洁残余。再用物品属于内部库存/转移，不是废物；整体服务已含废物不再重复。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_material_waste 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_wastewater_service` | `live_holding`; 输出; 废物流: 实际交予外部处理的废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际跨越技术圈处理边界的废水；保留水/盐/固体组成及去向。同一水流不得同时计直接排放；溶解组分不得重复计为完整动物质量。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_wastewater_service 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_live_release` | `live_holding`; 输出; 基本流: 实际向海洋环境释放的活体动物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际活体放归，须记录物种/状态、地点、时间及适用接受证据；区分主动释放与意外逃逸。仅记录生物起捕/返归，不断言存活、影响可忽略或法律许可。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_live_release 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_direct_discharge` | `live_holding`; 输出; 基本流: 按接收介质区分的实际直接排水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录计量直接环境排水及盐度/温度/组成与接收介质；区分蒸发与保留水。污染物按物质分别计量，不重复载体水质量。同一水流不得再计为交付废水处理服务。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_direct_discharge 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_holding_other_emissions` | `live_holding`; 输出; 基本流: 按身份及介质区分的实际其他排放物质 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际发生的尾气污染物、制冷剂泄漏、蒸发水或物料遗失；展开至每项计量物质与介质，记录物种、基准及不确定性。不把混合尾气/NOx 标签或遗失复合笼具绑定为单一基本流 UUID，也不把缺失证据说成实测零。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_holding` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_holding`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_holding_other_emissions 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_holding`; `seafish-nephrops-creels` |
| `collect_live_protection_fuel` | `live_protection`; 输入; 产品流: 自有前景设备实际供入燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅在实际发生前景燃烧时记录；识别燃料组成、供应边界及计量低位热值能量。保留原始燃料数量和有据的燃料专属换算；不计入供应商整体服务中已包含的燃料。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_fuel 单位：MJ 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_supplied_water` | `live_protection`; 输入; 产品流: 按实际水质与来源区分的外部供水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际购买海水或淡水时，分别记录来源、水质、处理及交付边界。供水不是直接取水或内部循环；不得假定淡水适于活体暂养。载体水须核对且不得重复计供水。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_supplied_water 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_materials` | `live_protection`; 输入; 产品流: 按身份区分的实际耗材与替换材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际独立接收的耗材、渔具/管具/周转箱替换件或保护材料；展开为真实组分身份，区分重复使用资产、内部返还、新购及使用终了去向。 本输入包含实际内部附件/容器接收，按转移编号、身份、状态、实测质量及保管责任与上一 accessory_transfer 输出配对。外购与期初期末库存分开；仅库存结转不是交换。不得把同一接收重复当新购或计入其他材料/服务卡。资产制造仅在有证据服务期内分摊，不在每次使用计整件替换质量。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_materials 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_gas_chemicals` | `live_protection`; 输入; 产品流: 按组成区分的实际气体或化学产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际氧气、清洁剂、制冷剂补充或其他有据辅助品；分别区分交付身份、浓度、载体及用途。这不是强制处理、适用性保证或单一固定流；按实际事件记录残留及泄漏。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_gas_chemicals 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_services` | `live_protection`; 输入; 产品流: 实际独立供应的设备或搬运服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际服务按记录的设备/搬运服务小时计量；区分供应商和服务单位，不把费用、动物或混合服务换为虚构 kg 流。记录所含能源、材料及基础设施以排除重复。非按小时计量的服务须用真实单位并独立确认支持身份后形成最终交换。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: 设备或搬运服务时长 / h; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_services 单位：h 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_water_abstraction` | `live_protection`; 输入; 基本流: 按来源环境介质区分的实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际环境取水，以计量值或有据的流量与时间确定，并声明来源介质。循环水和外部供水不计为本次新取水。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_water_abstraction 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_other_intended` | `live_protection`; 输出; 产品流: 按身份及验收去向区分的实际其他独立预期产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为有证据的外部预期产品，须有实际接收方、接受用途、生命/物料状态、等级、数量及唯一交接责任。展开不同输出；其他物种或范围外死亡产品仅在实际被接受时计入。检验失败本身不证明产品身份或合法性。内部目标转移不是共产品。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_other_intended 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_accessory_transfer` | `live_protection`; 输出; 产品流: 与动物分开的实际附件/容器责任转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际与活体批次随行或另行返还的管具、周转箱、保护材料或其他附件；每项物料、实际实物质量、再用/保管责任及接收/去向与动物净 kg 分开记录。随产品交付附件不自动成为独立预期共产品；不在每次转移重复计资产制造。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_accessory_transfer 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_animal_waste` | `live_protection`; 输出; 废物流: 按去向区分的实际死亡或拒收动物废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际发生在本事件的动物废物，包括有据的脱落身体物料，按状态和处理接收方分开。不用默认死亡率，也不自动视为有用产品；不重复活体释放或其他预期输出，不把暂养或交接死亡倒记为捕捞损失。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_animal_waste 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_material_waste` | `live_protection`; 输出; 废物流: 实际废耗材及服务责任残余废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际跨界交予处理方的废物；按身份及责任区分饵料残余、废渔具、管具、容器或清洁残余。再用物品属于内部库存/转移，不是废物；整体服务已含废物不再重复。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_material_waste 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_wastewater_service` | `live_protection`; 输出; 废物流: 实际交予外部处理的废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际跨越技术圈处理边界的废水；保留水/盐/固体组成及去向。同一水流不得同时计直接排放；溶解组分不得重复计为完整动物质量。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_wastewater_service 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_live_release` | `live_protection`; 输出; 基本流: 实际向海洋环境释放的活体动物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际活体放归，须记录物种/状态、地点、时间及适用接受证据；区分主动释放与意外逃逸。仅记录生物起捕/返归，不断言存活、影响可忽略或法律许可。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_live_release 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_direct_discharge` | `live_protection`; 输出; 基本流: 按接收介质区分的实际直接排水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录计量直接环境排水及盐度/温度/组成与接收介质；区分蒸发与保留水。污染物按物质分别计量，不重复载体水质量。同一水流不得再计为交付废水处理服务。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_direct_discharge 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_live_protection_other_emissions` | `live_protection`; 输出; 基本流: 按身份及介质区分的实际其他排放物质 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际发生的尾气污染物、制冷剂泄漏、蒸发水或物料遗失；展开至每项计量物质与介质，记录物种、基准及不确定性。不把混合尾气/NOx 标签或遗失复合笼具绑定为单一基本流 UUID，也不把缺失证据说成实测零。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_live_protection` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_live_protection`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_live_protection_other_emissions 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_protection`; `seafish-nephrops-creels` |
| `collect_producer_handover_fuel` | `producer_handover`; 输入; 产品流: 自有前景设备实际供入燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅在实际发生前景燃烧时记录；识别燃料组成、供应边界及计量低位热值能量。保留原始燃料数量和有据的燃料专属换算；不计入供应商整体服务中已包含的燃料。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_fuel 单位：MJ 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_supplied_water` | `producer_handover`; 输入; 产品流: 按实际水质与来源区分的外部供水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际购买海水或淡水时，分别记录来源、水质、处理及交付边界。供水不是直接取水或内部循环；不得假定淡水适于活体暂养。载体水须核对且不得重复计供水。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_supplied_water 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_materials` | `producer_handover`; 输入; 产品流: 按身份区分的实际耗材与替换材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际独立接收的耗材、渔具/管具/周转箱替换件或保护材料；展开为真实组分身份，区分重复使用资产、内部返还、新购及使用终了去向。 本输入包含实际内部附件/容器接收，按转移编号、身份、状态、实测质量及保管责任与上一 accessory_transfer 输出配对。外购与期初期末库存分开；仅库存结转不是交换。不得把同一接收重复当新购或计入其他材料/服务卡。资产制造仅在有证据服务期内分摊，不在每次使用计整件替换质量。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_materials 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_gas_chemicals` | `producer_handover`; 输入; 产品流: 按组成区分的实际气体或化学产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际氧气、清洁剂、制冷剂补充或其他有据辅助品；分别区分交付身份、浓度、载体及用途。这不是强制处理、适用性保证或单一固定流；按实际事件记录残留及泄漏。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_gas_chemicals 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_services` | `producer_handover`; 输入; 产品流: 实际独立供应的设备或搬运服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际服务按记录的设备/搬运服务小时计量；区分供应商和服务单位，不把费用、动物或混合服务换为虚构 kg 流。记录所含能源、材料及基础设施以排除重复。非按小时计量的服务须用真实单位并独立确认支持身份后形成最终交换。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: 设备或搬运服务时长 / h; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_services 单位：h 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_water_abstraction` | `producer_handover`; 输入; 基本流: 按来源环境介质区分的实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录实际环境取水，以计量值或有据的流量与时间确定，并声明来源介质。循环水和外部供水不计为本次新取水。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_water_abstraction 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_other_intended` | `producer_handover`; 输出; 产品流: 按身份及验收去向区分的实际其他独立预期产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为有证据的外部预期产品，须有实际接收方、接受用途、生命/物料状态、等级、数量及唯一交接责任。展开不同输出；其他物种或范围外死亡产品仅在实际被接受时计入。检验失败本身不证明产品身份或合法性。内部目标转移不是共产品。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_other_intended 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_accessory_transfer` | `producer_handover`; 输出; 产品流: 与动物分开的实际附件/容器责任转移 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际与活体批次随行或另行返还的管具、周转箱、保护材料或其他附件；每项物料、实际实物质量、再用/保管责任及接收/去向与动物净 kg 分开记录。随产品交付附件不自动成为独立预期共产品；不在每次转移重复计资产制造。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_accessory_transfer 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_animal_waste` | `producer_handover`; 输出; 废物流: 按去向区分的实际死亡或拒收动物废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际发生在本事件的动物废物，包括有据的脱落身体物料，按状态和处理接收方分开。不用默认死亡率，也不自动视为有用产品；不重复活体释放或其他预期输出，不把暂养或交接死亡倒记为捕捞损失。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_animal_waste 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_material_waste` | `producer_handover`; 输出; 废物流: 实际废耗材及服务责任残余废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际跨界交予处理方的废物；按身份及责任区分饵料残余、废渔具、管具、容器或清洁残余。再用物品属于内部库存/转移，不是废物；整体服务已含废物不再重复。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_material_waste 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_wastewater_service` | `producer_handover`; 输出; 废物流: 实际交予外部处理的废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际跨越技术圈处理边界的废水；保留水/盐/固体组成及去向。同一水流不得同时计直接排放；溶解组分不得重复计为完整动物质量。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_wastewater_service 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_live_release` | `producer_handover`; 输出; 基本流: 实际向海洋环境释放的活体动物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅为实际活体放归，须记录物种/状态、地点、时间及适用接受证据；区分主动释放与意外逃逸。仅记录生物起捕/返归，不断言存活、影响可忽略或法律许可。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_live_release 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_direct_discharge` | `producer_handover`; 输出; 基本流: 按接收介质区分的实际直接排水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录计量直接环境排水及盐度/温度/组成与接收介质；区分蒸发与保留水。污染物按物质分别计量，不重复载体水质量。同一水流不得再计为交付废水处理服务。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_direct_discharge 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `collect_producer_handover_other_emissions` | `producer_handover`; 输出; 基本流: 按身份及介质区分的实际其他排放物质 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 实际发生的尾气污染物、制冷剂泄漏、蒸发水或物料遗失；展开至每项计量物质与介质，记录物种、基准及不确定性。不把混合尾气/NOx 标签或遗失复合笼具绑定为单一基本流 UUID，也不把缺失证据说成实测零。 对每项实际条件交换，先保留未分配实物/原始单位记录、事件/pass 和责任，再按正的已验收参考 kg 表示实物数量。真正共享的 LCA 负担按第 7 节另行仅分配一次；不得分配动物实物平衡、将未知编为零，或重复整体供应服务负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 按 `cp_producer_handover` 记录实际数量；每 1 kg 参考流；适用时区分每项具体身份和 pass。; 数值来源模式: 计算值（`calculated_value`）; 适用范围: 场址特定（`site_specific`）; 归一化基准: 每 1 kg 参考流; 基准类型: 参考流（`reference_flow`）; 证据类型: 采集计算（`calculated_from_collection`）; 采集协议: `cp_producer_handover`; 来源: `seafish-nephrops-creels` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定独立证据包络；不是经验阈值或默认数量 范围角色：QA 校验（`qa_guardrail`） 下限：0 上限：U_producer_handover_other_emissions 单位：kg 基准：每 1 kg 参考流；U 须按本身份/状态/pass 以独立供应商、设计或独立历史期间证据实例化；不得用被检批次自身最大值，不裁剪数据。 基准类型：参考流（`reference_flow`） 证据类型：推理估算（`reasoned_estimate`） | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_producer_handover`; `seafish-nephrops-creels` |
| `transport_cargo_scope` | 任何适用的门前运输、返程与共享运输服务 | 按实际运输服务原生单位采集货载与距离；货载包括实际同行的水、冰与容器，不以净动物/鱼体参考质量替代。记录装载、空返与零产出期间的实际燃料/服务负担及其归属。完整运输服务与自有燃料、电力、资产和直接释放范围互斥；保留返程与复用容器责任。 | 实际货载、距离、行程、容器与供应商服务范围记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_reference | producer_handover_accepted_reference | 唯一实际最终验收笼捕完整活体食用 Nephrops 输出，同批动物净湿质量为正；参考链接/名称/状态/属性/单位匹配。非活体或范围外路线输出不得入分母。 |  |
| v_balance | all events and destinations | 核对未分配节点/pass 动物与组分账、真实配对接收/转移、期初期末库存、真实水变化、废物/释放及验收独立输出。记录未解释残差；经济分配不是闭合。捕捞后死亡归属实际节点；输出去向互斥。 |  |
| v_mode_period | trip/lot; shared events; service periods | 核实实际启用、事件顺序、切换/清洁、供应方包含项、全部共享使用方、返程/待机/维护及获取/替换/退役期间。检查份额及结转负担仅一次、零输出期间处理和最终交接不重复共产品分配。 |  |
| v_ranges_units | all cards | 检查每卡有量纲 Range、最终归一化身份、独立 U 证据、原始服务单位及支持身份、电力换算和质量/皮重/水基准。缺 U/支持/UUID 证据保持未决；检查成功不是经验或发布就绪结论。 |  |
| v_sources | product and methodology claims | 来源使用仅限明确引用的定性接口/分类或历史摘要。没有适用现行证据时，拒绝普遍混获、死亡、货架期、影响、法律、温度、时长或资产寿命断言。 | seafish-nephrops-creels; seafish-nephrops-live-handling-1993 |
| `validate_atomic_completion` | 所有适用采集义务与具体清单交换 | 必须逐一落实第8节每项适用采集义务的具体物理/化学交换及其独立数量、原生单位、组成/状态、范围依据或明确的不确定性证据、原始记录、归一化、实际去向/接收环境及兼容的核实 UUID。未落实任何适用项则最终数据包不完整且验证失败；未知不等于零。集合总量不得复制给各项，完整服务与自有燃料/电力/直接释放不得重复。内部转移不固定为最终1 kg。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 完整前景包在具体身份及缺失证据解决后投影为 process/lifecyclemodel |
| allowed_use | 声明物种、笼捕路线、完整食用活体门、实际地区/期间与服务方范围，披露不确定性 |
| excluded_use | 拖网、养殖、其他物种、死亡/加工/观赏形式、买方配送、安全/法律/存活/可持续认证，或把未决数量当核实数据 |
| required_metadata | 全部参考限定信息；范围/事件/pass 图；单位及支持身份；节点协议；原始/实物/分配账；全部输出去向；完整期间；分配及供应方包含项；来源与版本 |
| required_quality_disclosure | 代表性、计量与估计、不确定性、独立范围包络、残差、背景、未决身份/支持与分配；不因结构完整暗示就绪 |
| update_trigger | 物种/路线/状态/门、实际处理/供应方范围、来源/范围证据、共享基础设施/服务期间、身份/支持或分配背景变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes | official_guidance | UN CPC Ver.3.0 explanatory notes, 30 June 2025, printed p.47; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类范围；完整活体笼捕边界更窄，不代表整叶覆盖。 |
| seafish-nephrops-creels | official_guidance | Seafish, Pots and Trap - Nephrops; https://www.seafish.org/responsible-sourcing/fishing-gear-database/gear/pots-and-trap-nephrops/ ; accessed 2026-10-10 | 仅定性笼具、饵料、分选、管具及海水接口；不引入普遍数量、低混获、存活或环境绩效断言。 |
| seafish-nephrops-live-handling-1993 | literature | M. Jacklin, Assessment of Stress and Mortality of the Prawn (Nephrops norvegicus) During Live Handling from Vessel to Market, Seafish ref.32441, 01 August 1993; https://www.seafish.org/document/?id=32441 ; summary accessed 2026-10-10 | 仅核实历史报告网页摘要：区分处理阶段并记录真实干预。不使用全文断言、试验比例或推荐条件；排除交接门外出口运输。 |
| reference-normalization-identity | method_factor | Reference Flow definition in section 3 of this PCR: the inventory is expressed for exactly 1 kg accepted reference output. | 仅数学归一化身份，不是产率、实测存活率或经验界限。 |
