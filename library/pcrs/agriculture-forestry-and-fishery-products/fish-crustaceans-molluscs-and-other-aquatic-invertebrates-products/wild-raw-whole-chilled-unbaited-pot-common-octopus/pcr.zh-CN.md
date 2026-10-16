---
pcr_id: pcr.wild-raw-whole-chilled-unbaited-pot-common-octopus
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 无饵陶制栖藏罐野生整只原料冰鲜普通章鱼

## 1. 范围与适用性

本 PCR 是刻意限定的采捕至首次交接方法，不是整个 CPC 叶项的描述。仅覆盖东大西洋/地中海用无饵无釉陶制栖藏罐捕获的野生 Octopus vulgaris sensu stricto，首次采捕者向接收方实物交接验收时为整只未去内脏原料、实际冰鲜且未冻结。实际记录的冷却是选择条件，不是所有登陆均已冷却的经验结论。IPMA 记录的短航次首次销售样本未冷却；Codex 提供定性处理指南，并非该路线的证明。

不包括有饵笼捕、其他栖藏材料、养殖、净制分切、故意去腕、嫩化/揉打/滚揉、淡水浸泡、人为增重加水/添加剂、冻结/解冻或活体参考产品。自然愈合腕损伤不自动使整只动物失去资格，应记录实际状态。不因此作出即食安全、合法性、零兼捕或可持续性结论。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.wild-raw-whole-chilled-unbaited-pot-common-octopus` |
| classification_refs | cpc:3.0:04471; narrower |
| covered_products | 首次采捕者交接验收的整只原料冰鲜普通章鱼 |
| excluded_products | 第1节所列其他物种/路线/状态；接收方后续加工 |
| representative_product | 野生整只未去内脏原料冰鲜 O. vulgaris sensu stricto |
| production_route | capture；prepare；sort；chill；present；handover；仅实际支持活动；责任图，不是强制时序 |
| market_state | 首次交接整只原料冰鲜、未冻结产品；不是即食认证 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 首次采捕者交接验收的整只原料冰鲜普通章鱼 |
| How much | 1 kg 沥去游离水后的动物净湿质量 |
| How well | 记录物种、整只未去内脏状态、实际冰鲜历史及验收；无人为增重处理 |
| How long or cycle | 实际航次/批次及完整报告时期；纳入冷却前、贮存/运输、渔具供应/修理/损失/终止阶段及结转 |
| reference_flow_link | `octopus_handover` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 首次采捕者交接验收的整只原料冰鲜普通章鱼 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 狭义物种鉴定; 采捕区及日期; 野生来源; 无饵陶制栖藏罐渔具; 航次/批次/时期; 整只未去内脏状态及自然腕损伤; 实际冷却前/冷却温度-时间及未冻结历史; 无增重/嫩化处理; 沥水净质量/皮重方法; 接收方实物终点/时间; 服务/资源责任; 库存及共享资产归因 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按记录的可重复沥水程序，使用经校准的秤称量同一实物验收批次，扣除实际容器皮重、冰和游离水。保留原有内脏/相连腕，记录自然愈合损伤。不得按售价/只数推定净质量或强制套用完好八腕质量。 |
| mass_energy | 所有清单行 | 按各行声明质量和能量 | kg; kWh | 保留原始单位及换算证据；g/1000 和 t×1000 得 kg，需换算时 kWh×3.6 得 MJ。无独立证据不得将水总量换成污染物质量或将服务单位换成 kg。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 野生自然栖息地及实际栖藏罐采捕，不是外购或养殖章鱼 |
| starting_condition_role | 声明的前景采捕边界，递归供应上游资源/资产 |
| product_classification_scope | cpc:3.0:04471; narrower |
| recursive_input_rule | 所选参考产品不纳入外购同类别动物。此类批次应分开并采用兼容上游方法；内部同批移交仅传递一次既有负荷，不重复采捕。 |
| upstream_dataset_requirement | 实际燃料、电力、冰、水、材料、资产及全包服务采用兼容供应商/场址/时期/地域技术数据集；披露缺口 |
| disclosure | 实际航次/批次/状态/终点、完整时期台账、库存/损失、直接/供应商责任、有意产出、服役寿命证据及归因 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| exclusive_resource_events | all nodes | 将每笔实物供应/使用事件划入唯一兼容资源卡：专门渔业冰、水、容器、共享资产、供应商全包服务或其余燃料/耗材。通用耗材不重复专门供应。区分资产/容器实物保管移动及仅计一次的服务/供应负荷；实际向内空容器返还是 containers_in 接收，而 containers_at_gate 仅记录向外交接。记录库存和方向，不将返还移动视为新采购或联产品。 |  |
| chronology | all nodes | 过程图是责任图，不要求必须等到分选后才冷却。实际加冰/冷却可以从采得时立即开始，并贯穿整理/分选/装盛/交付。记录每次真实交接的按时间顺序状态、温度-时间及批次/移交编号；将每次早期、重复或持续保冷事件关联唯一实际资源责任节点及协议，不漏记或重复电力、冰、水或设备。冷却前标签不允许最终批次未冷却。 |  |
| support_instances | support | 按运行/资源责任方、场址、时期、服务/资产/处理编号、使用节点及实物流入/流出状态识别每个实际支持实例。cp_support 仅是这些真实支持实例的协议，不是合成的全流程责任方。产出归因前闭合相同移交的交接双方实物量；归因 LCA 份额不能替代实物质量闭合。改变实际直接释放责任方须有对应节点/协议记录。 |  |
| ecological_ledger | capture | 为目标/兼捕生物保留物种、死活状态、数量/质量、捕获/释放地点及时间、留存去向、渔具损失及实际栖息地扰动观察。该实物/生态记录与归因 LCA 量分开；动物移除或释放不自动成为已核实基本生物量交换。任何此类交换须采用另行论证的具体模型，不得虚构 UUID、断言零兼捕或计入可持续性/避免生产抵扣。 |  |
| capture_context | capture | 始于东大西洋/地中海自然栖息地野生动物及实际无饵无釉陶制栖藏罐操作；纳入布罐、浸罐/提罐、去返程、无捕获/支持航次及实际丢失渔具。野生生长不是养殖生产。依据可追溯鉴定选择狭义物种，不采用全球物种复合群标签。 | fao-traps-pots; ipma-polqual-2017; fao-cephalopods-vol3 |
| selected_chilled_state | chill | 冰鲜且未冻结子路线是本 PCR 的选择，不代表所有葡萄牙登陆。须有截至验收的实际加冰/冷却、冷却前时长及温度/时间记录；未冷却、活体参考、冻结、解冻、去内脏或嫩化批次不符合选择。Codex 提供指南，而 IPMA 来源样本未冷却。 | ipma-polqual-2017; codex-fish-2012 |
| operation_owner | all nodes | 前景直接运行指运行/资源责任，包括实际资源由前景控制的租赁或承包设备，不等于法律产权。供应商全包服务在 support_service 仅建模一次，排除重复直接资源/排放/资产。归因前记录供应商与前景责任。 |  |
| physical_first | all nodes | 先保留完整航次/批次/事件/时期实物台账和唯一资源责任方，再按第7节归因实际有意产出。保留全船队零产出时期、结转库存、渔具供应/修理/更换/寿命终结和闲置/支持返程事件；不得因合格产出为零就省略。既有负荷仅传递一次。 |  |
| water_residual_owner | all nodes | 归因前按来源/去向/移交编号配对每笔真实内部可用水和受控废物移交。仅实际自然环境到前景取水才是基本摄取；同节点循环和库存移动是子台账。实际直接释放或外部最终处理交接须有唯一责任方。废水总量与物质质量拆分，不隐含回收/返工或重复采购。 |  |
| gate | handover | 纳入首次接收方实物验收前采捕者实际运输和持续保冷；记录地点/时间、动物净质量及各终点前事件责任方。排除买方加工、去内脏、嫩化、下游配送、烹饪及使用。该 LCA 终点不是食品安全、合法性或可持续性认证。 |  |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | 无饵栖藏罐采捕 | required | 所选路线；仅记录实际资源 | 海床布罐、浸罐、提罐及船舶航次，包括零捕获航次 | 每 1 kg 参考流 |
| `prepare` | 整只动物初步整理 | required | 所选路线；仅记录实际资源 | 去除脱落的外来杂物；仅实际发生时冲洗，不去内脏、不作增水处理 | 每 1 kg 参考流 |
| `sort` | 去向与状态分选 | required | 所选路线；仅记录实际资源 | 识别合格整只批次、其他有意产品等级及拒收去向 | 每 1 kg 参考流 |
| `chill` | 实际加冰与冷藏 | required | 所选路线；仅记录实际资源 | 承担所选整只动物批次的实际初始/持续冷却；记录真实事件时序及冰鲜、未冻结交接状态 | 每 1 kg 参考流 |
| `present` | 装盛与容器准备 | required | 所选路线；仅记录实际资源 | 将冰鲜动物装入可识别容器；不改变动物质量口径 | 每 1 kg 参考流 |
| `handover` | 采捕者交付与实物验收 | required | 所选路线；仅记录实际资源 | 纳入实物验收前采捕者实际岸上运输和持续保冷；截至首次接收方实物验收 | 每 1 kg 参考流 |
| `support` | 共享支持与残余物处理 | required | 所选路线；仅记录实际资源 | 承担实际共享资产、可用水供应及受控残余物保管/处理，不承担产品加工 | 每 1 kg 参考流 |

节点区分责任和实测状态移交，不要求独立建筑或人员。航次/批次批处理关联完整报告时期、清洁/换批、零产出运行及共享资源。条件材料/服务卡按实际实例化零、一或多笔交换，不强制虚构活动。采捕是独立移除，初步整理是去杂/实际冲洗，分选声明去向，冷却责任承担实际初始/持续冷却事件，不强制其真实时序，装盛保护该状态，交接纳入终点前交付但不重复冷却生产。

### 过程：无饵栖藏罐采捕 (`capture`)

#### 输入

##### 产品流

###### capture 的外购电力 (`capture_energy`)

仅记录交付本节点直接运行设备的实际电力。识别供应商/电网、地点、时期及电表；拆分不同供应，并排除已含在供应商全包服务中的电力。保留 kWh，不作泛化地域替代。

- 选定流：电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 按 cp_capture 采集 capture_energy 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_capture`
- 数量范围： 尚未解决的逐行独立 U_capture_energy 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_capture_energy
  - 单位： kWh
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_capture_energy，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采得的整只普通章鱼 (`collected_out`)

记录从 capture 到 prepare 的同批动物实际净湿质量，使用同一移交编号并核对实测状态、时间及交接双方。这是内部产品移交，不是重新采购、环境移除或另一笔最终销售。既有负荷只传递一次，不得强制将进料设为 1 千克。

- 选定流：采得的整只普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 cp_capture 采集 collected_out 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_capture`
- 数量范围： 尚未解决的逐行独立 U_collected_out 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_collected_out
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_collected_out，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

###### capture 的直接化石二氧化碳 (`capture_fossil_co2`)

仅记录本节点前景直接燃烧排向未指定空气的实际化石 CO2，单位为 kg CO2。记录燃料碳含量和化石比例或实测排放；排除生物源碳、动物呼吸、上游电力及供应商全包尾气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 按 cp_capture 采集 capture_fossil_co2 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_capture`
- 数量范围： 尚未解决的逐行独立 U_capture_fossil_co2 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_capture_fossil_co2
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_capture_fossil_co2，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：整只动物初步整理 (`prepare`)

#### 输入

##### 产品流

###### 采得的整只普通章鱼 (`collected_in`)

记录从 capture 到 prepare 的同批动物实际净湿质量，使用同一移交编号并核对实测状态、时间及交接双方。这是内部产品移交，不是重新采购、环境移除或另一笔最终销售。既有负荷只传递一次，不得强制将进料设为 1 千克。

- 选定流：采得的整只普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 cp_prepare 采集 collected_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_prepare`
- 数量范围： 尚未解决的逐行独立 U_collected_in 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_collected_in
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_collected_in，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### prepare 的外购电力 (`prepare_energy`)

仅记录交付本节点直接运行设备的实际电力。识别供应商/电网、地点、时期及电表；拆分不同供应，并排除已含在供应商全包服务中的电力。保留 kWh，不作泛化地域替代。

- 选定流：电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 按 cp_prepare 采集 prepare_energy 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_prepare`
- 数量范围： 尚未解决的逐行独立 U_prepare_energy 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_prepare_energy
  - 单位： kWh
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_prepare_energy，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 初步整理后的整只普通章鱼 (`prepared_out`)

记录从 prepare 到 sort 的同批动物实际净湿质量，使用同一移交编号并核对实测状态、时间及交接双方。这是内部产品移交，不是重新采购、环境移除或另一笔最终销售。既有负荷只传递一次，不得强制将进料设为 1 千克。

- 选定流：初步整理后的整只普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 cp_prepare 采集 prepared_out 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_prepare`
- 数量范围： 尚未解决的逐行独立 U_prepared_out 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_prepared_out
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_prepared_out，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

###### prepare 的直接化石二氧化碳 (`prepare_fossil_co2`)

仅记录本节点前景直接燃烧排向未指定空气的实际化石 CO2，单位为 kg CO2。记录燃料碳含量和化石比例或实测排放；排除生物源碳、动物呼吸、上游电力及供应商全包尾气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 按 cp_prepare 采集 prepare_fossil_co2 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_prepare`
- 数量范围： 尚未解决的逐行独立 U_prepare_fossil_co2 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_prepare_fossil_co2
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_prepare_fossil_co2，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：去向与状态分选 (`sort`)

#### 输入

##### 产品流

###### 初步整理后的整只普通章鱼 (`prepared_in`)

记录从 prepare 到 sort 的同批动物实际净湿质量，使用同一移交编号并核对实测状态、时间及交接双方。这是内部产品移交，不是重新采购、环境移除或另一笔最终销售。既有负荷只传递一次，不得强制将进料设为 1 千克。

- 选定流：初步整理后的整只普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 cp_sort 采集 prepared_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_sort`
- 数量范围： 尚未解决的逐行独立 U_prepared_in 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_prepared_in
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_prepared_in，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### sort 的外购电力 (`sort_energy`)

仅记录交付本节点直接运行设备的实际电力。识别供应商/电网、地点、时期及电表；拆分不同供应，并排除已含在供应商全包服务中的电力。保留 kWh，不作泛化地域替代。

- 选定流：电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 按 cp_sort 采集 sort_energy 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_sort`
- 数量范围： 尚未解决的逐行独立 U_sort_energy 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_sort_energy
  - 单位： kWh
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_sort_energy，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 用于冷却的合格整只普通章鱼 (`accepted_out`)

记录从 sort 到 chill 的同批动物实际净湿质量，使用同一移交编号并核对实测状态、时间及交接双方。这是内部产品移交，不是重新采购、环境移除或另一笔最终销售。既有负荷只传递一次，不得强制将进料设为 1 千克。

- 选定流：用于冷却的合格整只普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 cp_sort 采集 accepted_out 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_sort`
- 数量范围： 尚未解决的逐行独立 U_accepted_out 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_accepted_out
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_accepted_out，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

###### sort 的直接化石二氧化碳 (`sort_fossil_co2`)

仅记录本节点前景直接燃烧排向未指定空气的实际化石 CO2，单位为 kg CO2。记录燃料碳含量和化石比例或实测排放；排除生物源碳、动物呼吸、上游电力及供应商全包尾气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 按 cp_sort 采集 sort_fossil_co2 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_sort`
- 数量范围： 尚未解决的逐行独立 U_sort_fossil_co2 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_sort_fossil_co2
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_sort_fossil_co2，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：实际加冰与冷藏 (`chill`)

#### 输入

##### 产品流

###### 用于冷却的合格整只普通章鱼 (`accepted_in`)

记录从 sort 到 chill 的同批动物实际净湿质量，使用同一移交编号并核对实测状态、时间及交接双方。这是内部产品移交，不是重新采购、环境移除或另一笔最终销售。既有负荷只传递一次，不得强制将进料设为 1 千克。

- 选定流：用于冷却的合格整只普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 cp_chill 采集 accepted_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_chill`
- 数量范围： 尚未解决的逐行独立 U_accepted_in 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_accepted_in
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_accepted_in，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### chill 的外购电力 (`chill_energy`)

仅记录交付本节点直接运行设备的实际电力。识别供应商/电网、地点、时期及电表；拆分不同供应，并排除已含在供应商全包服务中的电力。保留 kWh，不作泛化地域替代。

- 选定流：电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 按 cp_chill 采集 chill_energy 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_chill`
- 数量范围： 尚未解决的逐行独立 U_chill_energy 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_chill_energy
  - 单位： kWh
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_chill_energy，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 海洋捕捞保冷用外购冰 (`purchased_fishery_ice`)

仅记录专为所选海洋章鱼批次登陆/首次实物验收前保冷而实际外购的渔业用冰。记录票据、供应商、冰质量、水质及使用事件。现场制冰应记 support_water_out 及其实际生产资源，不得再记外购冰；冰不计入参考动物质量。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 按 cp_chill 采集 purchased_fishery_ice 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_chill`
- 来源： `codex-fish-2012`
- 数量范围： 尚未解决的逐行独立 U_purchased_fishery_ice 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_purchased_fishery_ice
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_purchased_fishery_ice，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已实际冷却的整只普通章鱼 (`chilled_out`)

记录从 chill 到 present 的同批动物实际净湿质量，使用同一移交编号并核对实测状态、时间及交接双方。这是内部产品移交，不是重新采购、环境移除或另一笔最终销售。既有负荷只传递一次，不得强制将进料设为 1 千克。

- 选定流：已实际冷却的整只普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 cp_chill 采集 chilled_out 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_chill`
- 数量范围： 尚未解决的逐行独立 U_chilled_out 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_chilled_out
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_chilled_out，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

###### chill 的直接化石二氧化碳 (`chill_fossil_co2`)

仅记录本节点前景直接燃烧排向未指定空气的实际化石 CO2，单位为 kg CO2。记录燃料碳含量和化石比例或实测排放；排除生物源碳、动物呼吸、上游电力及供应商全包尾气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 按 cp_chill 采集 chill_fossil_co2 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_chill`
- 数量范围： 尚未解决的逐行独立 U_chill_fossil_co2 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_chill_fossil_co2
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_chill_fossil_co2，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：装盛与容器准备 (`present`)

#### 输入

##### 产品流

###### 已实际冷却的整只普通章鱼 (`chilled_in`)

记录从 chill 到 present 的同批动物实际净湿质量，使用同一移交编号并核对实测状态、时间及交接双方。这是内部产品移交，不是重新采购、环境移除或另一笔最终销售。既有负荷只传递一次，不得强制将进料设为 1 千克。

- 选定流：已实际冷却的整只普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 cp_present 采集 chilled_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_present`
- 数量范围： 尚未解决的逐行独立 U_chilled_in 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_chilled_in
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_chilled_in，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### present 的外购电力 (`present_energy`)

仅记录交付本节点直接运行设备的实际电力。识别供应商/电网、地点、时期及电表；拆分不同供应，并排除已含在供应商全包服务中的电力。保留 kWh，不作泛化地域替代。

- 选定流：电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 按 cp_present 采集 present_energy 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_present`
- 数量范围： 尚未解决的逐行独立 U_present_energy 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_present_energy
  - 单位： kWh
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_present_energy，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 装盛后的整只冰鲜普通章鱼 (`presented_out`)

记录从 present 到 handover 的同批动物实际净湿质量，使用同一移交编号并核对实测状态、时间及交接双方。这是内部产品移交，不是重新采购、环境移除或另一笔最终销售。既有负荷只传递一次，不得强制将进料设为 1 千克。

- 选定流：装盛后的整只冰鲜普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 cp_present 采集 presented_out 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_present`
- 数量范围： 尚未解决的逐行独立 U_presented_out 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_presented_out
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_presented_out，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

###### present 的直接化石二氧化碳 (`present_fossil_co2`)

仅记录本节点前景直接燃烧排向未指定空气的实际化石 CO2，单位为 kg CO2。记录燃料碳含量和化石比例或实测排放；排除生物源碳、动物呼吸、上游电力及供应商全包尾气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 按 cp_present 采集 present_fossil_co2 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_present`
- 数量范围： 尚未解决的逐行独立 U_present_fossil_co2 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_present_fossil_co2
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_present_fossil_co2，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：采捕者交付与实物验收 (`handover`)

#### 输入

##### 产品流

###### 装盛后的整只冰鲜普通章鱼 (`presented_in`)

记录从 present 到 handover 的同批动物实际净湿质量，使用同一移交编号并核对实测状态、时间及交接双方。这是内部产品移交，不是重新采购、环境移除或另一笔最终销售。既有负荷只传递一次，不得强制将进料设为 1 千克。

- 选定流：装盛后的整只冰鲜普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 cp_handover 采集 presented_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_handover`
- 数量范围： 尚未解决的逐行独立 U_presented_in 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_presented_in
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_presented_in，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### handover 的外购电力 (`handover_energy`)

仅记录交付本节点直接运行设备的实际电力。识别供应商/电网、地点、时期及电表；拆分不同供应，并排除已含在供应商全包服务中的电力。保留 kWh，不作泛化地域替代。

- 选定流：电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 按 cp_handover 采集 handover_energy 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_handover`
- 数量范围： 尚未解决的逐行独立 U_handover_energy 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_handover_energy
  - 单位： kWh
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_handover_energy，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 首次采捕者交接验收的整只原料冰鲜普通章鱼 (`octopus_handover`)

仅纳入声明的无饵陶罐路线捕获、实际冰鲜且未冻结，并经实物验收的 Octopus vulgaris sensu stricto 整只未去内脏原料。动物沥去游离水后的净湿质量包括头部、胴体、内脏及相连腕，记录自然愈合的腕损伤；排除容器、冰、游离水及可去除的体外杂物。以首次接收方实物验收为终点，不以付款或发票为准。

- 选定流：首次采捕者交接验收的整只原料冰鲜普通章鱼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： `fixed_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_handover`
- 数量范围： 参考归一化恒等关系，不是经验产率范围
  - 范围角色： `qa_guardrail`
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `calculated_from_collection`

##### 废物流

##### 基本流

###### handover 的直接化石二氧化碳 (`handover_fossil_co2`)

仅记录本节点前景直接燃烧排向未指定空气的实际化石 CO2，单位为 kg CO2。记录燃料碳含量和化石比例或实测排放；排除生物源碳、动物呼吸、上游电力及供应商全包尾气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 按 cp_handover 采集 handover_fossil_co2 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_handover`
- 数量范围： 尚未解决的逐行独立 U_handover_fossil_co2 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_handover_fossil_co2
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_handover_fossil_co2，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：共享支持与残余物处理 (`support`)

#### 输入

##### 产品流

###### support 的外购电力 (`support_energy`)

仅记录交付本节点直接运行设备的实际电力。识别供应商/电网、地点、时期及电表；拆分不同供应，并排除已含在供应商全包服务中的电力。保留 kWh，不作泛化地域替代。

- 选定流：电力
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; unit_group `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则： 按 cp_support 采集 support_energy 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_support`
- 数量范围： 尚未解决的逐行独立 U_support_energy 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_support_energy
  - 单位： kWh
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_energy，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### support 的直接化石二氧化碳 (`support_fossil_co2`)

仅记录本节点前景直接燃烧排向未指定空气的实际化石 CO2，单位为 kg CO2。记录燃料碳含量和化石比例或实测排放；排除生物源碳、动物呼吸、上游电力及供应商全包尾气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 按 cp_support 采集 support_fossil_co2 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_support`
- 数量范围： 尚未解决的逐行独立 U_support_fossil_co2 要求；使用前须批准
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： U_support_fossil_co2
  - 单位： kg
  - 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_fossil_co2，不得采用被检查批次最大值；不是数值默认值
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivide | all nodes | 优先按独立计量的事件/节点和产出实际拆分。完整实物量与产出归因 LCA 量分开保留。对不可避免共享事件，在归一化前记录因果分配依据及所有有意产出份额；不得用动物产率抹去无捕获航次或生态记录。 |  |
| output_decision | other_intended_grades; support_recovered_material | 列明实际独立有意产出、等级去向及交接，再论证物理因果归因。若无可辩护物理关系，只可将有记录的经济归因作为披露的备选，使用一致的实际时期/等级价格并做敏感性分析。不规定默认方法、价格、分配份额或替代抵扣。残余物/拒收物/死亡废物/释放物不默认成为产品。 |  |
| period_asset | support_shared_assets | 按实际制造/供应、布设、修理、闲置、更换/损失和终止阶段及使用节点/时期索引。按有证据的寿命/服务分母归因记录服务，累计份额核对为一并结转未用库存。不设默认陶罐寿命、航次数或年捕获量。缺少终止/更换或完整时期证据时不得定稿。 |  |
| normalize | all inventory rows | 将每行有依据的产出归因数量除以同一所选批次/时期的验收净湿质量，得到每 1 kg 参考流。不得对零产出时期单独归一化；保留其负荷并依依据结转至报告产出，或披露未解决归因。内部产品移交保留实际质量并只传递一次既有负荷，不各自设为 1 千克。 |  |

## 8. 前景数据采集、计算及质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | 无饵栖藏罐采捕 | 原始实物台账及可归因数据集台账 | 航次/批次/事件/时期；行/物质/材料；来源/接收方；物种/状态；毛重/皮重/沥水/净质量；单位；仪表；时间/温度；责任方；支持实例/场址/时期/服务或资产编号及使用节点；移交编号；期初/期末库存；有意产出；分配依据/份额；独立 U 证据 | 仅本节点采用经校准秤/仪表、带日期航次/渔具/冷却/验收日志、票据及供应商原始记录。识别实际直接或全包责任；配对移交并在归因前核对原始实物库存。handover 称量验收且沥去游离水的动物净质量，保留自然腕状态。 | kg; kWh; native service unit | 每事件/批次及完整时期，包括零产出及清洁 | 完整声明时期及有证据的共享资产服役阶段/结转 | 实际 capture 操作及可识别供应商交接 | 每 1 kg 参考流 | 秤/仪表校准；原始日期日志；成对移交收据；冰鲜/未冻结历史；库存核对；供应商范围；归因及独立 U 批准 |
| `cp_prepare` | `prepare` | 整只动物初步整理 | 原始实物台账及可归因数据集台账 | 航次/批次/事件/时期；行/物质/材料；来源/接收方；物种/状态；毛重/皮重/沥水/净质量；单位；仪表；时间/温度；责任方；支持实例/场址/时期/服务或资产编号及使用节点；移交编号；期初/期末库存；有意产出；分配依据/份额；独立 U 证据 | 仅本节点采用经校准秤/仪表、带日期航次/渔具/冷却/验收日志、票据及供应商原始记录。识别实际直接或全包责任；配对移交并在归因前核对原始实物库存。handover 称量验收且沥去游离水的动物净质量，保留自然腕状态。 | kg; kWh; native service unit | 每事件/批次及完整时期，包括零产出及清洁 | 完整声明时期及有证据的共享资产服役阶段/结转 | 实际 prepare 操作及可识别供应商交接 | 每 1 kg 参考流 | 秤/仪表校准；原始日期日志；成对移交收据；冰鲜/未冻结历史；库存核对；供应商范围；归因及独立 U 批准 |
| `cp_sort` | `sort` | 去向与状态分选 | 原始实物台账及可归因数据集台账 | 航次/批次/事件/时期；行/物质/材料；来源/接收方；物种/状态；毛重/皮重/沥水/净质量；单位；仪表；时间/温度；责任方；支持实例/场址/时期/服务或资产编号及使用节点；移交编号；期初/期末库存；有意产出；分配依据/份额；独立 U 证据 | 仅本节点采用经校准秤/仪表、带日期航次/渔具/冷却/验收日志、票据及供应商原始记录。识别实际直接或全包责任；配对移交并在归因前核对原始实物库存。handover 称量验收且沥去游离水的动物净质量，保留自然腕状态。 | kg; kWh; native service unit | 每事件/批次及完整时期，包括零产出及清洁 | 完整声明时期及有证据的共享资产服役阶段/结转 | 实际 sort 操作及可识别供应商交接 | 每 1 kg 参考流 | 秤/仪表校准；原始日期日志；成对移交收据；冰鲜/未冻结历史；库存核对；供应商范围；归因及独立 U 批准 |
| `cp_chill` | `chill` | 实际加冰与冷藏 | 原始实物台账及可归因数据集台账 | 航次/批次/事件/时期；行/物质/材料；来源/接收方；物种/状态；毛重/皮重/沥水/净质量；单位；仪表；时间/温度；责任方；支持实例/场址/时期/服务或资产编号及使用节点；移交编号；期初/期末库存；有意产出；分配依据/份额；独立 U 证据 | 仅本节点采用经校准秤/仪表、带日期航次/渔具/冷却/验收日志、票据及供应商原始记录。识别实际直接或全包责任；配对移交并在归因前核对原始实物库存。handover 称量验收且沥去游离水的动物净质量，保留自然腕状态。 | kg; kWh; native service unit | 每事件/批次及完整时期，包括零产出及清洁 | 完整声明时期及有证据的共享资产服役阶段/结转 | 实际 chill 操作及可识别供应商交接 | 每 1 kg 参考流 | 秤/仪表校准；原始日期日志；成对移交收据；冰鲜/未冻结历史；库存核对；供应商范围；归因及独立 U 批准 |
| `cp_present` | `present` | 装盛与容器准备 | 原始实物台账及可归因数据集台账 | 航次/批次/事件/时期；行/物质/材料；来源/接收方；物种/状态；毛重/皮重/沥水/净质量；单位；仪表；时间/温度；责任方；支持实例/场址/时期/服务或资产编号及使用节点；移交编号；期初/期末库存；有意产出；分配依据/份额；独立 U 证据 | 仅本节点采用经校准秤/仪表、带日期航次/渔具/冷却/验收日志、票据及供应商原始记录。识别实际直接或全包责任；配对移交并在归因前核对原始实物库存。handover 称量验收且沥去游离水的动物净质量，保留自然腕状态。 | kg; kWh; native service unit | 每事件/批次及完整时期，包括零产出及清洁 | 完整声明时期及有证据的共享资产服役阶段/结转 | 实际 present 操作及可识别供应商交接 | 每 1 kg 参考流 | 秤/仪表校准；原始日期日志；成对移交收据；冰鲜/未冻结历史；库存核对；供应商范围；归因及独立 U 批准 |
| `cp_handover` | `handover` | 采捕者交付与实物验收 | 原始实物台账及可归因数据集台账 | 航次/批次/事件/时期；行/物质/材料；来源/接收方；物种/状态；毛重/皮重/沥水/净质量；单位；仪表；时间/温度；责任方；支持实例/场址/时期/服务或资产编号及使用节点；移交编号；期初/期末库存；有意产出；分配依据/份额；独立 U 证据 | 仅本节点采用经校准秤/仪表、带日期航次/渔具/冷却/验收日志、票据及供应商原始记录。识别实际直接或全包责任；配对移交并在归因前核对原始实物库存。handover 称量验收且沥去游离水的动物净质量，保留自然腕状态。 | kg; kWh; native service unit | 每事件/批次及完整时期，包括零产出及清洁 | 完整声明时期及有证据的共享资产服役阶段/结转 | 实际 handover 操作及可识别供应商交接 | 每 1 kg 参考流 | 秤/仪表校准；原始日期日志；成对移交收据；冰鲜/未冻结历史；库存核对；供应商范围；归因及独立 U 批准 |
| `cp_support` | `support` | 共享支持与残余物处理 | 原始实物台账及可归因数据集台账 | 航次/批次/事件/时期；行/物质/材料；来源/接收方；物种/状态；毛重/皮重/沥水/净质量；单位；仪表；时间/温度；责任方；支持实例/场址/时期/服务或资产编号及使用节点；移交编号；期初/期末库存；有意产出；分配依据/份额；独立 U 证据 | 仅本节点采用经校准秤/仪表、带日期航次/渔具/冷却/验收日志、票据及供应商原始记录。识别实际直接或全包责任；配对移交并在归因前核对原始实物库存。handover 称量验收且沥去游离水的动物净质量，保留自然腕状态。 | kg; kWh; native service unit | 每事件/批次及完整时期，包括零产出及清洁 | 完整声明时期及有证据的共享资产服役阶段/结转 | 实际 support 操作及可识别供应商交接 | 每 1 kg 参考流 | 秤/仪表校准；原始日期日志；成对移交收据；冰鲜/未冻结历史；库存核对；供应商范围；归因及独立 U 批准 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_balance | 所有清单行 | 逐材料/状态/节点/时期核对期初库存 + 实际流入 = 实际流出 + 期末库存，记录实测转换及相关自然增减；不得增加虚构流强制平衡。 | 期初/期末库存；实际移交；实测转换 | 核对后的原始实物台账 |  |
| attributed_normalization | 所有清单行 | 每笔有实物责任的行按第7节记录的有意产出份额仅分配一次，除以所选报告产出的实际验收动物净湿质量。完整实物台账及零产出结转单独保留；最终参考为 1 千克，不是每笔内部移交。 | 实物行数量；有依据分配份额；验收动物净湿质量；cp_handover | 每 1 kg 参考流 |  |
| direct_emission | 直接基本输出 | 采用实测物质质量或有记录的燃料/材料清单 × 独立有证据的物质特定因子，并采用兼容化石份额和接收分隔；本 PCR 不提供因子。 | 实测物质或实际清单/因子证据；实际责任方 | 实际分隔中的逐物质质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | reference product | 狭义物种、野生渔具路线、整只未去内脏原料状态及实物终点；实际未冻结冰鲜历史 | 鉴定/捕获/渔具/冷却/接收日志 |
| completeness | all nodes | 完整时期、全部有意产出和零产出事件、资产/库存/结转及责任关联水/残余物/动物移交 | 原始台账及核对、归因决定 |
| measurement | all inventory rows | 逐行单位、校准原始测量、供应商范围及独立 U 批准；不得虚构数量或通用污染物身份 | 校准/原始测量、来源/因子支持及事先独立校验范围证据 |
| limits | all inventory rows | 披露未解决流/支持身份、U 数值、归因或缺失原始数据；最终 TIDAS 投影前解决具体交换 | 数据包明确缺口及敏感性记录 |
| `collect_capture_materials_fuels` | `capture`; 输入; 产品流: capture 的实际燃料及耗材 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质、规格、供应商、状态及质量逐一实例化实际材料或燃料。仅在使用处纳入直接运行燃料、油品、清洁剂和小耗材；记录燃料混配及化石份额。不允许饵料，动物处理不允许饲料、嫩化或增重化学品。不得重复共享支持资产或供应商全包投入。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_capture 采集 capture_materials_fuels 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_capture_materials_fuels 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_capture_materials_fuels 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_capture_materials_fuels，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_capture`;  |
| `collect_capture_residual_to_support` | `capture`; 输出; 废物流: capture 移交支持节点的受控残余物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录从本节点跨界至 support 的实际受控残余物：按组成、质量、容器、去向及移交编号拆分拒收动物、脱落杂物、污损材料和收集液体。以相同移交记录与 support_residual_in 配对。本节点直接释放不构成该移交，应记在本节点基本输出。废物不自动成为返工物或有意产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_capture 采集 capture_residual_to_support 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_capture_residual_to_support 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_capture_residual_to_support 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_capture_residual_to_support，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_capture`;  |
| `collect_capture_other_direct_releases` | `capture`; 输出; 基本流: capture 的其他独立识别直接释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐一实例化实际直接释放的物质、颗粒粒径类别或制冷剂及接收空气/水/土壤分隔；污染物质量不是废水总量或尾气总量。仅本节点拥有直接释放责任时，纳入化石 CO2 之外的燃料尾气、泄漏、清洗/冷却排水、动物流出的游离水及废物处理排放。同节点水循环是子台账，不是新的取水。不得虚构零值或通用污染 UUID。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_capture 采集 capture_other_direct_releases 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_capture_other_direct_releases 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_capture_other_direct_releases 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_capture_other_direct_releases，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_capture`;  |
| `collect_prepare_materials_fuels` | `prepare`; 输入; 产品流: prepare 的实际燃料及耗材 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质、规格、供应商、状态及质量逐一实例化实际材料或燃料。仅在使用处纳入直接运行燃料、油品、清洁剂和小耗材；记录燃料混配及化石份额。不允许饵料，动物处理不允许饲料、嫩化或增重化学品。不得重复共享支持资产或供应商全包投入。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_prepare 采集 prepare_materials_fuels 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_prepare` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_prepare_materials_fuels 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_prepare_materials_fuels 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_prepare_materials_fuels，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_prepare`;  |
| `collect_prepare_usable_water_in` | `prepare`; 输入; 产品流: 移交至 prepare 的可用水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录由 support 或其他明确用水节点实际移交本节点的可用水，按水源、水质及物理状态拆分。以发送方、接收方、移交编号、质量及时期与实际发送方 support_water_out 或 usable_water_out 配对，不重复外购水或自然取水负荷。这仅允许实际卫生/冲洗或冷却介质处理，不允许浸泡或人为吸水增重。留在同节点内的水不产生新的边界交换。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_prepare 采集 prepare_usable_water_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_prepare` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_prepare_usable_water_in 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_prepare_usable_water_in 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_prepare_usable_water_in，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_prepare`;  |
| `collect_prepare_usable_water_out` | `prepare`; 输出; 产品流: prepare 移出的实际可用水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录向另一明确用水节点或 support 实际移交的可用水，保留来源水质/状态及实际发送方/接收方/时间/质量/库存责任。按移交编号与接收方 usable_water_in 或 support_water_return_in 配对。不得把废水改称可用水、虚构支持节点中转，或把同节点循环/库存移动当成新边界交换。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_prepare 采集 prepare_usable_water_out 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_prepare` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_prepare_usable_water_out 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_prepare_usable_water_out 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_prepare_usable_water_out，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_prepare`;  |
| `collect_prepare_residual_to_support` | `prepare`; 输出; 废物流: prepare 移交支持节点的受控残余物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录从本节点跨界至 support 的实际受控残余物：按组成、质量、容器、去向及移交编号拆分拒收动物、脱落杂物、污损材料和收集液体。以相同移交记录与 support_residual_in 配对。本节点直接释放不构成该移交，应记在本节点基本输出。废物不自动成为返工物或有意产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_prepare 采集 prepare_residual_to_support 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_prepare` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_prepare_residual_to_support 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_prepare_residual_to_support 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_prepare_residual_to_support，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_prepare`;  |
| `collect_prepare_other_direct_releases` | `prepare`; 输出; 基本流: prepare 的其他独立识别直接释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐一实例化实际直接释放的物质、颗粒粒径类别或制冷剂及接收空气/水/土壤分隔；污染物质量不是废水总量或尾气总量。仅本节点拥有直接释放责任时，纳入化石 CO2 之外的燃料尾气、泄漏、清洗/冷却排水、动物流出的游离水及废物处理排放。同节点水循环是子台账，不是新的取水。不得虚构零值或通用污染 UUID。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_prepare 采集 prepare_other_direct_releases 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_prepare` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_prepare_other_direct_releases 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_prepare_other_direct_releases 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_prepare_other_direct_releases，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_prepare`;  |
| `collect_sort_materials_fuels` | `sort`; 输入; 产品流: sort 的实际燃料及耗材 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质、规格、供应商、状态及质量逐一实例化实际材料或燃料。仅在使用处纳入直接运行燃料、油品、清洁剂和小耗材；记录燃料混配及化石份额。不允许饵料，动物处理不允许饲料、嫩化或增重化学品。不得重复共享支持资产或供应商全包投入。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_sort 采集 sort_materials_fuels 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_sort_materials_fuels 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_sort_materials_fuels 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_sort_materials_fuels，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_other_intended_grades` | `sort`; 输出; 产品流: 其他独立有意整只动物等级 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐一实例化实际有意等级/产品，记录各自接收方交接、物种、状态、质量及归因决定。仍留在所选最终批次中的等级不是第二种产品；拒收物、丢弃捕获物及死亡废物不会仅因有质量就成为联产品。其他物种须有各自兼容的方法。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_sort 采集 other_intended_grades 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_other_intended_grades 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_other_intended_grades 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_other_intended_grades，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_residual_to_support` | `sort`; 输出; 废物流: sort 移交支持节点的受控残余物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录从本节点跨界至 support 的实际受控残余物：按组成、质量、容器、去向及移交编号拆分拒收动物、脱落杂物、污损材料和收集液体。以相同移交记录与 support_residual_in 配对。本节点直接释放不构成该移交，应记在本节点基本输出。废物不自动成为返工物或有意产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_sort 采集 sort_residual_to_support 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_sort_residual_to_support 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_sort_residual_to_support 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_sort_residual_to_support，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_sort_other_direct_releases` | `sort`; 输出; 基本流: sort 的其他独立识别直接释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐一实例化实际直接释放的物质、颗粒粒径类别或制冷剂及接收空气/水/土壤分隔；污染物质量不是废水总量或尾气总量。仅本节点拥有直接释放责任时，纳入化石 CO2 之外的燃料尾气、泄漏、清洗/冷却排水、动物流出的游离水及废物处理排放。同节点水循环是子台账，不是新的取水。不得虚构零值或通用污染 UUID。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_sort 采集 sort_other_direct_releases 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_sort_other_direct_releases 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_sort_other_direct_releases 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_sort_other_direct_releases，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`;  |
| `collect_chill_materials_fuels` | `chill`; 输入; 产品流: chill 的实际燃料及耗材 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质、规格、供应商、状态及质量逐一实例化实际材料或燃料。仅在使用处纳入直接运行燃料、油品、清洁剂和小耗材；记录燃料混配及化石份额。不允许饵料，动物处理不允许饲料、嫩化或增重化学品。不得重复共享支持资产或供应商全包投入。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_chill 采集 chill_materials_fuels 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_chill` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_chill_materials_fuels 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_chill_materials_fuels 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_chill_materials_fuels，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_chill`;  |
| `collect_chill_usable_water_in` | `chill`; 输入; 产品流: 移交至 chill 的可用水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录由 support 或其他明确用水节点实际移交本节点的可用水，按水源、水质及物理状态拆分。以发送方、接收方、移交编号、质量及时期与实际发送方 support_water_out 或 usable_water_out 配对，不重复外购水或自然取水负荷。这仅允许实际卫生/冲洗或冷却介质处理，不允许浸泡或人为吸水增重。留在同节点内的水不产生新的边界交换。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_chill 采集 chill_usable_water_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_chill` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_chill_usable_water_in 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_chill_usable_water_in 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_chill_usable_water_in，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_chill`;  |
| `collect_chill_usable_water_out` | `chill`; 输出; 产品流: chill 移出的实际可用水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录向另一明确用水节点或 support 实际移交的可用水，保留来源水质/状态及实际发送方/接收方/时间/质量/库存责任。按移交编号与接收方 usable_water_in 或 support_water_return_in 配对。不得把废水改称可用水、虚构支持节点中转，或把同节点循环/库存移动当成新边界交换。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_chill 采集 chill_usable_water_out 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_chill` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_chill_usable_water_out 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_chill_usable_water_out 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_chill_usable_water_out，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_chill`;  |
| `collect_chill_residual_to_support` | `chill`; 输出; 废物流: chill 移交支持节点的受控残余物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录从本节点跨界至 support 的实际受控残余物：按组成、质量、容器、去向及移交编号拆分拒收动物、脱落杂物、污损材料和收集液体。以相同移交记录与 support_residual_in 配对。本节点直接释放不构成该移交，应记在本节点基本输出。废物不自动成为返工物或有意产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_chill 采集 chill_residual_to_support 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_chill` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_chill_residual_to_support 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_chill_residual_to_support 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_chill_residual_to_support，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_chill`;  |
| `collect_chill_other_direct_releases` | `chill`; 输出; 基本流: chill 的其他独立识别直接释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐一实例化实际直接释放的物质、颗粒粒径类别或制冷剂及接收空气/水/土壤分隔；污染物质量不是废水总量或尾气总量。仅本节点拥有直接释放责任时，纳入化石 CO2 之外的燃料尾气、泄漏、清洗/冷却排水、动物流出的游离水及废物处理排放。同节点水循环是子台账，不是新的取水。不得虚构零值或通用污染 UUID。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_chill 采集 chill_other_direct_releases 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_chill` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_chill_other_direct_releases 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_chill_other_direct_releases 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_chill_other_direct_releases，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_chill`;  |
| `collect_present_materials_fuels` | `present`; 输入; 产品流: present 的实际燃料及耗材 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质、规格、供应商、状态及质量逐一实例化实际材料或燃料。仅在使用处纳入直接运行燃料、油品、清洁剂和小耗材；记录燃料混配及化石份额。不允许饵料，动物处理不允许饲料、嫩化或增重化学品。不得重复共享支持资产或供应商全包投入。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_present 采集 present_materials_fuels 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_present_materials_fuels 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_present_materials_fuels 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_present_materials_fuels，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_usable_water_in` | `present`; 输入; 产品流: 移交至 present 的可用水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录由 support 或其他明确用水节点实际移交本节点的可用水，按水源、水质及物理状态拆分。以发送方、接收方、移交编号、质量及时期与实际发送方 support_water_out 或 usable_water_out 配对，不重复外购水或自然取水负荷。这仅允许实际卫生/冲洗或冷却介质处理，不允许浸泡或人为吸水增重。留在同节点内的水不产生新的边界交换。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_present 采集 present_usable_water_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_present_usable_water_in 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_present_usable_water_in 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_present_usable_water_in，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_containers_in` | `present`; 输入; 产品流: 实际容器及装盛材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 指明实际筐、箱、衬垫及标签、皮重和一次性/可重复使用状态。按实测服务及实际更换/损失历史归因可重复使用容器的供应，不假定每批耗用一个容器。动物净质量须单独记录。供应商全包租赁容器不得再记采购。实际向内空容器返还在此作为单独识别的实物接收记录，不是另一笔供应负荷。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_present 采集 containers_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_containers_in 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_containers_in 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_containers_in，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_usable_water_out` | `present`; 输出; 产品流: present 移出的实际可用水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录向另一明确用水节点或 support 实际移交的可用水，保留来源水质/状态及实际发送方/接收方/时间/质量/库存责任。按移交编号与接收方 usable_water_in 或 support_water_return_in 配对。不得把废水改称可用水、虚构支持节点中转，或把同节点循环/库存移动当成新边界交换。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_present 采集 present_usable_water_out 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_present_usable_water_out 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_present_usable_water_out 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_present_usable_water_out，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_residual_to_support` | `present`; 输出; 废物流: present 移交支持节点的受控残余物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录从本节点跨界至 support 的实际受控残余物：按组成、质量、容器、去向及移交编号拆分拒收动物、脱落杂物、污损材料和收集液体。以相同移交记录与 support_residual_in 配对。本节点直接释放不构成该移交，应记在本节点基本输出。废物不自动成为返工物或有意产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_present 采集 present_residual_to_support 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_present_residual_to_support 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_present_residual_to_support 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_present_residual_to_support，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_present_other_direct_releases` | `present`; 输出; 基本流: present 的其他独立识别直接释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐一实例化实际直接释放的物质、颗粒粒径类别或制冷剂及接收空气/水/土壤分隔；污染物质量不是废水总量或尾气总量。仅本节点拥有直接释放责任时，纳入化石 CO2 之外的燃料尾气、泄漏、清洗/冷却排水、动物流出的游离水及废物处理排放。同节点水循环是子台账，不是新的取水。不得虚构零值或通用污染 UUID。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_present 采集 present_other_direct_releases 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_present` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_present_other_direct_releases 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_present_other_direct_releases 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_present_other_direct_releases，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_present`;  |
| `collect_handover_materials_fuels` | `handover`; 输入; 产品流: handover 的实际燃料及耗材 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质、规格、供应商、状态及质量逐一实例化实际材料或燃料。仅在使用处纳入直接运行燃料、油品、清洁剂和小耗材；记录燃料混配及化石份额。不允许饵料，动物处理不允许饲料、嫩化或增重化学品。不得重复共享支持资产或供应商全包投入。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_handover 采集 handover_materials_fuels 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_handover_materials_fuels 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_handover_materials_fuels 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_handover_materials_fuels，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_usable_water_in` | `handover`; 输入; 产品流: 移交至 handover 的可用水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录由 support 或其他明确用水节点实际移交本节点的可用水，按水源、水质及物理状态拆分。以发送方、接收方、移交编号、质量及时期与实际发送方 support_water_out 或 usable_water_out 配对，不重复外购水或自然取水负荷。这仅允许实际卫生/冲洗或冷却介质处理，不允许浸泡或人为吸水增重。留在同节点内的水不产生新的边界交换。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_handover 采集 handover_usable_water_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_handover_usable_water_in 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_handover_usable_water_in 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_handover_usable_water_in，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_usable_water_out` | `handover`; 输出; 产品流: handover 移出的实际可用水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录向另一明确用水节点或 support 实际移交的可用水，保留来源水质/状态及实际发送方/接收方/时间/质量/库存责任。按移交编号与接收方 usable_water_in 或 support_water_return_in 配对。不得把废水改称可用水、虚构支持节点中转，或把同节点循环/库存移动当成新边界交换。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_handover 采集 handover_usable_water_out 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_handover_usable_water_out 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_handover_usable_water_out 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_handover_usable_water_out，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_containers_at_gate` | `handover`; 输出; 产品流: 交接点装盛材料及周转容器保管权 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录随验收产品向外交付的包装或离开前景的空容器交接；以与 containers_in 相同的容器编号单独关联留存库存。实际向内返还属于 containers_in 接收，不是在此输出。这不是动物联产品，也不是第二次容器隐含供应负荷；接收方后续处理位于该终点之外，除非容器在声明服务期内实际返还。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_handover 采集 containers_at_gate 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_containers_at_gate 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_containers_at_gate 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_containers_at_gate，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_residual_to_support` | `handover`; 输出; 废物流: handover 移交支持节点的受控残余物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录从本节点跨界至 support 的实际受控残余物：按组成、质量、容器、去向及移交编号拆分拒收动物、脱落杂物、污损材料和收集液体。以相同移交记录与 support_residual_in 配对。本节点直接释放不构成该移交，应记在本节点基本输出。废物不自动成为返工物或有意产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_handover 采集 handover_residual_to_support 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_handover_residual_to_support 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_handover_residual_to_support 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_handover_residual_to_support，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_handover_other_direct_releases` | `handover`; 输出; 基本流: handover 的其他独立识别直接释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐一实例化实际直接释放的物质、颗粒粒径类别或制冷剂及接收空气/水/土壤分隔；污染物质量不是废水总量或尾气总量。仅本节点拥有直接释放责任时，纳入化石 CO2 之外的燃料尾气、泄漏、清洗/冷却排水、动物流出的游离水及废物处理排放。同节点水循环是子台账，不是新的取水。不得虚构零值或通用污染 UUID。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_handover 采集 handover_other_direct_releases 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_handover_other_direct_releases 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_handover_other_direct_releases 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_handover_other_direct_releases，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_handover`;  |
| `collect_support_water_return_in` | `support`; 输入; 产品流: 实际从其他前景节点接收的可用水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅纳入实际移交至真实支持实例的可用水返还或交接；按发送方/接收方/移交编号/状态/质量/时间与来源 usable_water_out 行配对。保留库存责任及实测处理需求。这不是采购、自然取水、废物接收或自动清洁水回收。其他节点间直接移交不要求经过支持节点。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_support 采集 support_water_return_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_water_return_in 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_water_return_in 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_water_return_in，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `collect_support_water_purchase` | `support`; 输入; 产品流: 实际使用的外部供水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项实例化实际卫生、冲洗或制冰所用外购水供应，记录来源、水质及实测质量。排除另记的自然取水；供应商全包处理负荷仅计在相应数据集中。区分水库存和内部移交，不自动使用工业过程水代理。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_support 采集 support_water_purchase 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_water_purchase 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_water_purchase 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_water_purchase，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `collect_support_shared_assets` | `support`; 输入; 产品流: 实际栖藏罐渔具、船舶及共享资产供应 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项列明无釉陶制栖藏罐、绳、浮标、船舶及实际冷却/贮存设备，记录材料质量、服役日期、修理、损失及退役。有饵笼、PVC 栖藏物及轮胎不属于该路线。关联所有使用节点/时期和有证据的归因份额；船舶推进燃料记在实际运行节点，不隐含于第二笔资产数量。不设默认寿命或每次捕获更换假设。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_support 采集 support_shared_assets 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_shared_assets 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_shared_assets 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_shared_assets，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `collect_support_service` | `support`; 输入; 产品流: 实际供应商全包支持及物流服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项实例化实际供应服务、供应商、地域/技术范围、原生实测单位及所含资源；最终交换生成前取得兼容流属性/单位支持。全包上游数据集仅归因一次。排除同一服务的重复燃料、电力、尾气及资本。前景直接运行指运行/资源责任，不是资产法律所有权。 流属性/单位: 供应商定义的流属性 / native service unit; 数量规则: 按 cp_support 采集 support_service 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_service 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_service 单位： native service unit 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_service，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `collect_support_materials_fuels` | `support`; 输入; 产品流: support 的实际燃料及耗材 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质、规格、供应商、状态及质量逐一实例化实际材料或燃料。仅在使用处纳入直接运行燃料、油品、清洁剂和小耗材；记录燃料混配及化石份额。不允许饵料，动物处理不允许饲料、嫩化或增重化学品。不得重复共享支持资产或供应商全包投入。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_support 采集 support_materials_fuels 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_materials_fuels 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_materials_fuels 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_materials_fuels，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `collect_support_residual_in` | `support`; 输入; 废物流: 接收并实际保管或处理的受控残余物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 每笔实际残余物接收须与其来源节点 residual_to_support 记录一一配对，保留组成、状态、质量、移交编号及跨期结转。其他节点直接释放时不得虚构接收。保管不等于处理，实际最终处理责任方和去向只识别一次。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_support 采集 support_residual_in 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_residual_in 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_residual_in 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_residual_in，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `collect_support_water_abstraction` | `support`; 输入; 基本流: 实际自然环境取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录从声明海域或其他自然水源直接取得的水，记录水源分隔、地点、质量、水质及抽水事件。这是唯一自然环境到前景的跨界；外购水、已取用水制成的冰及循环水不是新的环境摄取。相关抽水资源只记录一次。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_support 采集 support_water_abstraction 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_water_abstraction 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_water_abstraction 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_water_abstraction，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `collect_support_water_out` | `support`; 输出; 产品流: 内部供应的可用水或现场制冰 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐项实例化实际向 prepare、chill、present 或 handover 供应的可用液态水或现场制冰；区分状态和去向，并与对应 usable_water_in 卡配对。按物理关系核对融化/库存转换，不默认向所有节点发送同一数量。现场制冰不是 purchased_fishery_ice。同节点循环或库存水移动仅入子台账。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_support 采集 support_water_out 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_water_out 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_water_out 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_water_out，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `collect_support_recovered_material` | `support`; 输出; 产品流: 实际独立有意回收材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录直接运行处理实际回收、且独立有意交给明确接收方/用途的材料，记录实测组成和质量。不得由废物发运就假定发生回收；实际发生时披露归因决定，不自动计入避免负荷抵扣。实际处理直接释放归属 support_other_direct_releases 和 support_fossil_co2。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_support 采集 support_recovered_material 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_recovered_material 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_recovered_material 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_recovered_material，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `collect_support_external_waste` | `support`; 输出; 废物流: 实际送往外部处理的残余物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按实际去向和接收供应商拆分固废、拒收动物、废油、容器及收集废水。废水总量与污染物质量分别记录。供应商全包处理数据集覆盖其自身处理排放，不得在此重复建模。内部库存/保管变化不是最终处置，不自动获得替代抵扣。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_support 采集 support_external_waste 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_external_waste 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_external_waste 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_external_waste，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `collect_support_other_direct_releases` | `support`; 输出; 基本流: support 的其他独立识别直接释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 逐一实例化实际直接释放的物质、颗粒粒径类别或制冷剂及接收空气/水/土壤分隔；污染物质量不是废水总量或尾气总量。仅本节点拥有直接释放责任时，纳入化石 CO2 之外的燃料尾气、泄漏、清洗/冷却排水、动物流出的游离水及废物处理排放。同节点水循环是子台账，不是新的取水。不得虚构零值或通用污染 UUID。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; unit_group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 cp_support 采集 support_other_direct_releases 实物记录；完整事件/时期台账与有记录的产出归因份额分开保留，再将该归因量除以同一验收动物净湿质量，得到每 1 kg 参考流。采用实际独立识别的交换，不是假定值。; 数值来源模式: `calculated_value`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `calculated_from_collection`; 采集协议: `cp_support` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围： 尚未解决的逐行独立 U_support_other_direct_releases 要求；使用前须批准 范围角色： `qa_guardrail` 下限： 0 上限： U_support_other_direct_releases 单位： kg 基准： 每 1 kg 参考流；据独立历史/场址能力证据建立 U_support_other_direct_releases，不得采用被检查批次最大值；不是数值默认值 基准类型： `reference_flow` 证据类型： `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_support`;  |
| `transport_cargo_scope` | 任何适用的门前运输、返程与共享运输服务 | 按实际运输服务原生单位采集货载与距离；货载包括实际同行的水、冰与容器，不以净动物/鱼体参考质量替代。记录装载、空返与零产出期间的实际燃料/服务负担及其归属。完整运输服务与自有燃料、电力、资产和直接释放范围互斥；保留返程与复用容器责任。 | 实际货载、距离、行程、容器与供应商服务范围记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| instantiated_ranges | all inventory rows | 每张伞形卡展开多笔实际交换时，为每笔交换指定独立实例编号、物质/材料、状态、流属性/单位、去向/接收分隔、采集证据及独立论证的 U。父卡逐行 U 标签仅是未解决模板，既不是所有实例共用的界限，也不是合计上限。不得未经独立论证兼容性就将一个实例的证据或 U 套给另一个。 |  |
| selection | reference product | 要求可追溯 O. vulgaris sensu stricto、东大西洋/地中海地点、野生无饵陶罐采捕、整只未去内脏原料状态、实际冰鲜且未冻结历史及首次接收方实物验收。排除其他物种复合群成员、有饵笼/PVC/轮胎、养殖、故意切腕、揉打/滚揉、浸泡/添加剂、冻结/解冻、去内脏或活体参考批次。 |  |
| ledgers | all inventory rows | 核对动物经 capture、prepare、sort、chill、present 到 handover 的实物量及留存/拒收/释放/库存去向、自然腕损伤及实际含水变化。动物进料不是每节点产出1；参考质量排除冰/游离水/皮重。分配前独立核对水/冰、容器、燃料和残余物、实际责任方及库存结转。 |  |
| provisional_limits | all inventory rows | 每个非最终 Range 都是尚未解决的逐行 U 要求，不是实测上界、典型值或代入数字的许可。使用前须据独立历史/来源/能力证据建立并批准 U；同一批次最大值不得自我验证。采用实际记录并调查偏离；缺少 U、流身份/支持或过程记录仍是须披露的缺口。 |  |
| ownership | all nodes | 检查单节点协议、全部零产出/运行/换批时期、完整有意产出及分配份额、共享基础设施使用方/寿命阶段、成对可用水/残余物移交及唯一直接释放/处理责任方。未发生活动须有明确证据，不得虚构零值。结构校验不核实外部身份或食品安全。 |  |
| `validate_atomic_completion` | 所有适用采集义务与具体清单交换 | 必须逐一落实第8节每项适用采集义务的具体物理/化学交换及其独立数量、原生单位、组成/状态、范围依据或明确的不确定性证据、原始记录、归一化、实际去向/接收环境及兼容的核实 UUID。未落实任何适用项则最终数据包不完整且验证失败；未知不等于零。集合总量不得复制给各项，完整服务与自有燃料/电力/直接释放不得重复。内部转移不固定为最终1 kg。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 实际具体交换核实后，将前景采捕/首次交接数据包投影为 process/lifecyclemodel |
| allowed_use | 物种/渔具/状态/地区/时期/终点兼容并披露实际证据的研究 |
| excluded_use | 整个叶项或全球物种复合群代理、有饵/养殖/冻结/加工/活体路线、消费者安全/合法/可持续性主张 |
| required_metadata | 全部参考限定信息、节点/供应商责任、完整时期、有意产出份额及资产/库存边界 |
| required_quality_disclosure | 原始测量、代表性、归因敏感性、未解决 UUID/支持/U/数据缺口；无虚构默认值 |
| update_trigger | 物种/路线/状态/终点、来源知识、供应商/电网、资产服务或归因证据改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-cephalopods-vol3 | official_guidance | FAO, Cephalopods of the World, vol3, printed p41; https://www.fao.org/4/i3489e/i3489e.pdf | 仅定性支持 O. vulgaris sensu stricto 分类及地中海/中东北大西洋分布边界；不支持全球物种复合群等同或数值清单因子 |
| fao-traps-pots | handbook | FAO, Fishing with traps and pots, Octopus squid and cuttlefish pots and traps; https://www.fao.org/4/x2590e/x2590e07.htm | 无饵陶制栖藏罐采捕的区分；不提供渔具耗量、浸罐时间或影响数值因子 |
| ipma-polqual-2017 | official_guidance | IPMA, POLQUAL report RCT-IPMA-SD-16, 2017, printed pp16–18; https://www.ipma.pt/export/sites/ipma/bin/docs/publicacoes/ipma/rct-ipma-sd-16.pdf | 葡萄牙普通章鱼栖藏罐与有饵笼的区分。其短航次首次销售样本未冷却；不是加冰批次或本 PCR 所选处理状态的证据。 |
| codex-fish-2012 | official_guidance | FAO/WHO, Code of Practice for Fish and Fishery Products, 2012, section15, printed pp202/204; https://www.fao.org/4/i2382e/i2382e.pdf | 仅提供鲜头足类冷却/贮存及污染控制定性指南；不提供章鱼路线实际观察、寿命/冰比数值、安全或监管认证 |
