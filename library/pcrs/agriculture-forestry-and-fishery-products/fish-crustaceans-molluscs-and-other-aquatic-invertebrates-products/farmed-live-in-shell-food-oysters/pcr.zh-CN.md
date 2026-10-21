---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-live-in-shell-food-oysters
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 生产者首次交接的养殖食用带原生壳活牡蛎

## 1. 范围与适用性

本规则覆盖一个声明生产者作业单元内从实际苗种进入阶段，经自营管理育成与独立采收，到首次生产者交接的食用带原生壳活牡蛎。只纳入实际承担且在交接前的调理、净化、活体存放和呈现；不把分类标签当作技术配方。单个数据包声明真实物种、场址、群体、季节及责任边界。天然海水营养贡献不等于免费自营孵化藻饵；“养殖无饵料”不适用于所有受控阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-live-in-shell-food-oysters |
| classification_refs | CPC 3.0 04422; narrower |
| covered_products | 首次生产者交接的养殖食用整只带原生壳活牡蛎；冷却后仍须存活 |
| excluded_products | 野生成贝、最终苗种、死亡鲜品冷藏品、去壳肉、半壳加工品、冷冻烹调品、珍珠及单独贝壳 |
| representative_product | 生产者首次交接的养殖食用带原生壳活牡蛎 |
| production_route | 实际野生采苗、自营早期生产或按实际阶段外购，然后管理育成、独立采收、条件性调理及交接；技术差异属于明确母活动 |
| market_state | 食用带原生壳活体，保留实际等级和处理状态；不等价于肉质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产者首次交接的养殖食用带原生壳活牡蛎 |
| How much | 1 kg |
| How well | 实际合格食用等级及活体状态；只计原生壳、组织和天然保留体液净质量 |
| How long or cycle | 声明完整群体育成至交接周期及实际报告期间；期初期末活体存量和负荷结转，资产跨期服务可追溯 |
| reference_flow_link | `dispatch_food_handover` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生产者首次交接的养殖食用带原生壳活牡蛎 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种；实际场址及水域；养殖来源和苗种购买阶段；群体及日期期间；活体及原生壳状态；实际市场等级与食用验收证据；附着基质剔除方法；实际处理及责任；交接位置及买方；计量和不确定性 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 经校准秤计量交接批次牡蛎净质量，剔除包装、外来基质污附着物和游离水冰，保留原生壳组织及天然体液；采用 cp_dispatch_mass。仅合格活体计为参考，最终行数量为 1 千克。 |
| `stage_count_mass` | 所有苗种和存量质量行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 数量、尺寸及倍性为独立记录，不是质量。用同物种、阶段、状态和群体的代表性称重样本及误差将数量换成质量；外来附着壳剔除，不套用成贝肉产率或历史幼体重量。 |
| `water_mass` | 水和水载体 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 水体积须按实际盐度、温度和密度证据换成质量；分别记录循环流量、新取水、外供水、携水、排水及存量，不假定统一密度。 |
| `energy_units` | 能源输入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保持实际能源载体及供应状态，以经核实单位组换算 1 kWh = 3.6 MJ；不得用燃料质量代替能量而不记录对应实际热值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际自营野生稚贝采集或早期生产入口，或者携带匹配上游负荷的外购卵幼体稚贝苗种实际交接阶段 |
| starting_condition_role | 群体、阶段和责任明确的前景入口，非将缺失阶段视作零负荷 |
| product_classification_scope | CPC 04422 的较窄食用活体原生壳首次交接子范围 |
| recursive_input_rule | 同类牡蛎用于种苗或亲贝时按实际上游阶段及真实身份记录，切断递归展开但不切断已有负荷；内部返养按同群体存量结转，不重新购买或重复生产。 |
| upstream_dataset_requirement | 供应商阶段、物种、场址、运输载体、基质及责任相符的上游数据；缺口与替代及不确定性须披露，不默认为零 |
| disclosure | 逐群体实际阶段和旁路、技术母活动差异、一次交接、期间和资产服务、活体净质量、采购负荷、净化责任及验收限制 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_entry` | 相关过程及完整前景数据包 | 纳入从野生稚贝采集、自营亲贝卵幼体入口或有记录的购买阶段开始，经管理育成、独立采收至生产者首次交接的实际自营阶段。外购眼点幼体进入附着；外购已附着稚贝进入实际暂养或直接育成；外购可育成苗种绕过未发生的采集、孵化、附着及暂养。任何购买均不得视为无负荷。 | `farmed-oyster-foreground-method`; `fao-oyster-production` |
| `boundary_live` | 相关过程及完整前景数据包 | 仅最终带原生壳活食用牡蛎质量合格。外附基质、污附着物、泥沙、游离水、冷却介质及包装排除；包含原生壳、组织及天然保留体液。死亡、去壳、冷冻烹调、珍珠或单独贝壳、最终苗种及野生成贝产品不属于本类别。 | `farmed-oyster-foreground-method`; `un-cpc-3-oysters` |
| `boundary_route` | 相关过程及完整前景数据包 | 受管理生物母活动为藻培养、孵化附着暂养及育成。野生稚贝与孵化来源群体为替代入口路线，不是同一动物的双重供应。底播、离底、悬挂差异属于 growout，实际采苗和采收技术属于各自母活动。记录装备、能源、基质、水、损失、监测及存量台账的实际差异；技术仅在子批次不重叠或时期明确时并存。 | `farmed-oyster-foreground-method`; `fao-oyster-production` |
| `boundary_handoffs` | 相关过程及完整前景数据包 | 以实际事件顺序而非固定节点表顺序连接 harvest、conditioning、grading、depuration 和 live_holding。每次重访使用独立 event_id/pass_id/transfer_id，入口只接收紧邻实际前序的同一群体状态和实测量；保留待分级、等级已验收、待处理和实际已放行限定。至少一次实际分级及首次交接验收必须完成，任何必要处理或状态未知均不得成为最终合格食用量。旁路没有虚构资源，重复节点不重复历史负荷或同一事件；处理后若实际需要复查，则记录新的真实分级事件。 | `farmed-oyster-foreground-method` |
| `boundary_depuration` | 相关过程及完整前景数据包 | 清洗排沙与卫生净化移养为不同责任。仅纳入生产者实际负责的交接前处理及其适用许可、放行证据、水、能源、耗材、排液及损失。处理责任或验收未知属于未解决事项，不得自动旁路。若实际首次交接早于独立买方处理，则排除买方处理并披露限制；本 PCR 不认证安全或通用毒素去除。 | `farmed-oyster-foreground-method`; `fda-nssp-context` |
| `boundary_inputs` | 相关过程及完整前景数据包 | 外购阶段投入须有物种、阶段、载体基质、地域及负荷边界相符的上游数据集。自营藻生产和供应为成对内部链，不得同时计外购饵料及重复自营负荷。开放水域天然浮游植物为环境生物贡献，不得虚构外购饵料；孵化或受控暂养的饵料及施肥仍为实际投入。 | `farmed-oyster-foreground-method` |
| `boundary_secondary` | 相关过程及完整前景数据包 | 回收贝壳基质为再生材料，因为其跨越先前产壳或回收系统进入本系统。声明来源及回收、清洗、运输交接，保留负荷与明确论证的截断，并仅在一个系统计入采集准备。不得假定贝壳免费无负荷，或将外来壳计入活牡蛎参考质量。 | `farmed-oyster-foreground-method` |
| `boundary_services` | 相关过程及完整前景数据包 | 使用一个声明生产者作业单元及批次群体、报告期索引。纳入可归属船舶、泵、槽体、棚架、净化存放及发运资产、清洗换批、维修及退役。外部服务采用实际数量属性及发票范围；其数据集包含燃料或装备时不得再作为自有清单重复计入。不采用联邦式多场址平均或推测通用服务份额。 | `farmed-oyster-foreground-method` |
| `boundary_credits` | 相关过程及完整前景数据包 | 按实际物质及接收介质记录直接排水、生物沉积、遗失装备、死亡及底质接触证据。不自动给予固碳、壳碳、避免废物、营养盐移除或生态服务负抵扣。任何后续影响主张均需另行治理的完整方法、反事实及实测证据，不属于本默认清单。 | `farmed-oyster-foreground-method` |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `spat_collection` | 自营野生稚贝采集 | conditional | 仅当在管理育成前实际自营采集野生稚贝时纳入；外购苗种绕过本节点 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `algal_culture` | 自营藻类饵料培养 | conditional | 仅当为已启用的孵化、附着或暂养节点在前景责任内生产藻类饵料时纳入 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `hatchery` | 自营亲贝及幼体孵化 | conditional | 仅纳入实际自营亲贝、受精卵或幼体阶段；外购眼点幼体绕过未发生的早期孵化阶段 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `settlement` | 自营附着或异地附苗 | conditional | 仅当实际自营进行幼体附着时纳入；外购已附着稚贝或育成苗种绕过本节点 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `nursery` | 自营牡蛎苗种暂养 | conditional | 仅纳入采得、附着或外购稚贝之后实际自营的暂养；已适合育成的苗种直接进入育成 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `growout` | 牡蛎管理育成 | required | 所有覆盖牡蛎在采收前均经历实际自营管理育成阶段 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `harvest` | 管理牡蛎独立采收 | required | 实际从声明育成情境中移出管理活牡蛎 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `conditioning` | 清洗及排沙 | conditional | 实际自营交接前清洗或排沙，按真实顺序独立记录；缺少则状态不变旁路至下一实际节点 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `grading` | 去向判定及市场分级 | required | 每个最终批次均进行实际活体状态、市场验收及去向检查；机械分级仅在实际发生时纳入 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `depuration` | 实际交接前卫生净化或移养 | conditional | 仅纳入生产者在首次交接前实际承担且有实际适用许可及放行证据的处理；未知不得视为未启用 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `live_holding` | 实际交接前活体存放及冷却 | conditional | 仅纳入首次交接前生产者实际负责的活体存放或冷却；直接发运绕过本节点 | 前景生产及实际状态交接 | 每 1 kg 参考流 |
| `dispatch` | 生产者首次呈现及交接 | required | 每个合格批次在实际生产者首次交接时称重、标识或建档；包装仅在使用时纳入 | 前景生产及实际状态交接 | 每 1 kg 参考流 |

各节点按实际群体批次、培养批次、采收作业及交付批次记录；可按报告期汇总但保留期初期末存量、跨期生长及返养。内部成对交换仅表示物理交接，节点负荷不因汇总抵销而消失。未发生的条件性卡没有正交换，缺失记录不是零。语义总括卡须按实际物质、状态、去向及属性拆成具体交换；质量不适用的服务不能强行填入质量卡。每张非最终卡使用第 8 节两视图程序：保留未作共产品分配的物理量，以匹配的最终验收活体净千克归一化；共享资源服务事件只归属一次，共产品 LCA 分配另列且仅计一次。不得将内部苗种或采收饲入量固定为最终 1 kg。

### 过程：自营野生稚贝采集 (`spat_collection`)

本独立采集边界终止于称重或计数抽样的附着稚贝交接，而非食用成贝采收。声明水域、物种、采苗器布设、采集作业及损失；采苗器与附着基质不属于牡蛎体质量。

#### 输入

##### 产品流

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`spat_collection_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_spat_collection_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_spat_collection_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`spat_collection_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_spat_collection_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

###### 从声明水域采集的野生牡蛎稚贝 (`spat_collection_wild_spat`)

记录实际物种、资源区室及采集量；不得从食用成贝反推身份。

- 选定流：从声明水域采集的野生牡蛎稚贝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_spat_collection_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

#### 输出

##### 产品流

###### 供自营暂养或育成的采得活附着稚贝 (`spat_collection_spat_transfer`)

交接编号与暂养或育成苗种输入配对；将牡蛎生物量与附着的外来基质分别计量。

- 选定流：供自营暂养或育成的采得活附着稚贝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_spat_collection_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 向另一实际自有节点交接的水 (`spat_collection_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_spat_collection_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 外送声明处理去向的实际废水或咸水排液 (`spat_collection_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_spat_collection_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`spat_collection_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_spat_collection_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`spat_collection_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_spat_collection_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：自营藻类饵料培养 (`algal_culture`)

母活动为受管理的生物饵料生产，而非开放水域育成中未购入的浮游植物。记录实际培养批次及每个使用节点。外购藻饵携带供应商负荷进入使用节点；同一饵料不得同时建模两种供应。

#### 输入

##### 产品流

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`algal_culture_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_algal_culture_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_algal_culture_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`algal_culture_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_algal_culture_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 向另一实际自有节点交接的水 (`algal_culture_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_algal_culture_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 送往声明处理去向的失败藻培养物 (`algal_culture_failed`)

仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。

- 选定流：送往声明处理去向的失败藻培养物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_algal_culture_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 外送声明处理去向的实际废水或咸水排液 (`algal_culture_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_algal_culture_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`algal_culture_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_algal_culture_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`algal_culture_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_algal_culture_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：自营亲贝及幼体孵化 (`hatchery`)

管理母活动为牡蛎早期生命生产。声明亲贝、卵或幼体进入阶段，物种和倍性仅按证据填写。来自自营育成的亲贝为保留负荷的成对内部转移，不是再次购入的动物。不预设通用催产操作或幼体存活率。

#### 输入

##### 产品流

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`hatchery_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_hatchery_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_hatchery_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`hatchery_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_hatchery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转交自营附着阶段的活变态能力牡蛎幼体 (`hatchery_larvae`)

与附着幼体输入配对；明确数量、抽样质量、群体、物种及变态能力条件。

- 选定流：转交自营附着阶段的活变态能力牡蛎幼体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_hatchery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 在独立孵化交接点实际出售的剩余活幼体 (`hatchery_sold_larvae`)

仅纳入群体及变态能力状态相符的实际独立销售；不计入食用牡蛎分母，保留可归属孵化藻培养负荷，不得将同一幼体同时转入自营附着。

- 选定流：在独立孵化交接点实际出售的剩余活幼体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_hatchery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 向另一实际自有节点交接的水 (`hatchery_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_hatchery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`hatchery_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_hatchery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`hatchery_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_hatchery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 外送声明处理去向的实际废水或咸水排液 (`hatchery_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_hatchery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：自营附着或异地附苗 (`settlement`)

早期生命生产的替代生物实施方式：自有幼体或外购具变态能力幼体进入自营附着。单体苗与贝壳附着苗的实际基质不同；不得设定固定等价关系或将外来壳质量计入牡蛎生物量。

#### 输入

##### 产品流

###### 接收用于自营附着的活牡蛎幼体 (`settlement_larvae`)

为本阶段实际外购或与孵化配对的转移；缺少自营孵化表示旁路，不表示外购幼体负荷为零。

- 选定流：接收用于自营附着的活牡蛎幼体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_settlement_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`settlement_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_settlement_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_settlement_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`settlement_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_settlement_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转交暂养或育成的活附着牡蛎稚贝 (`settlement_spat`)

记录单体苗或附着苗；分离外来基质并以完全相同状态配对下游苗种输入。

- 选定流：转交暂养或育成的活附着牡蛎稚贝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_settlement_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 在独立附着交接点实际出售的剩余活稚贝 (`settlement_sold_spat`)

仅纳入实际独立销售，分别识别牡蛎生物量及基质；不得同时计作内部暂养育成转移或最终食用质量。

- 选定流：在独立附着交接点实际出售的剩余活稚贝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_settlement_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 向另一实际自有节点交接的水 (`settlement_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_settlement_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 外送声明处理去向的实际废水或咸水排液 (`settlement_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_settlement_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`settlement_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_settlement_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`settlement_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_settlement_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：自营牡蛎苗种暂养 (`nursery`)

管理暂养母活动保留实际陆基或海基暂养及上升流、围护技术差异：实际发生时记录泵送、饵料来源、围护及存量变化。环境天然营养与人为供应或培养饵料属于不同角色。

#### 输入

##### 产品流

###### 暂养入口的活采得、附着或外购稚贝 (`nursery_spat`)

仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。

- 选定流：暂养入口的活采得、附着或外购稚贝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_nursery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`nursery_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_nursery_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_nursery_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`nursery_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_nursery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转交自营育成的活牡蛎苗种 (`nursery_seed`)

仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。

- 选定流：转交自营育成的活牡蛎苗种
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_nursery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 暂养交接点出售的活剩余苗种 (`nursery_surplus`)

区分出售苗种共产品与内部育成转移；出售苗种不计入食用牡蛎分母。

- 选定流：暂养交接点出售的活剩余苗种
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_nursery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 向另一实际自有节点交接的水 (`nursery_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_nursery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 外送声明处理去向的实际废水或咸水排液 (`nursery_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_nursery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`nursery_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_nursery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`nursery_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_nursery_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：牡蛎管理育成 (`growout`)

声明一个生产者或作业单元及群体、养殖区边界。底播、棚架网袋离底及悬挂系统为本管理母活动的有证据替代方案：分别需要底质准备与接触、棚架网袋维护、绳索浮体锚具及船舶作业的实际清单、服务期和损失。仅可对可追溯子批次或时期并存，不设通用技术产率。采收为独立移出责任，不能将尚在水中的存量作为销售输出。

#### 输入

##### 产品流

###### 来自实际自营阶段或在育成入口外购的活牡蛎苗种 (`growout_seed`)

为实际采得稚贝、附着稚贝、暂养苗或外购可育成苗；选择实际接口，记录数量及阶段特定的代表性净体质量。

- 选定流：来自实际自营阶段或在育成入口外购的活牡蛎苗种
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`growout_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_growout_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`growout_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 从育成实际移交采收责任的活牡蛎子群体 (`growout_stock`)

仅记录实际移交采收责任的子群体，按牡蛎自身净质量或匹配抽样量与 harvest_stock 配对。全场在养评估及未转移动物仍为辅助存量记录，不是本输出。采收后的破损、死亡或损失在 harvest 单独记录，不回改为不等量配对。

- 选定流：从育成实际移交采收责任的活牡蛎子群体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 向另一实际自有节点交接的水 (`growout_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 送处理的收集死亡牡蛎 (`growout_collected_mortality`)

仅记录养成阶段实际收集并交给有记录处理方的死亡牡蛎。保留物种、数量、原生壳体及身体湿质量、含水率、事件和接收方；排除清除附着物、沉积物、器材及单独移除液体。未收集死亡不是已收集废物。独立建立本流的范围或计量不确定度证据。混合移除废物总量不提供本流数量；独立质量或去向未知时须阻断完成，不得填默认值或零。

- 选定流：送处理的收集死亡牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_growout_mass 独立计量收集死亡牡蛎湿 kg，再将未分配物理量除以相匹配的正值最终验收牡蛎净 kg。实际损失及处理责任仅计一次，不复制混合总量或范围。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_mass`
- 来源：`farmed-oyster-foreground-method`

###### 送处理的养成清除附着物 (`growout_removed_biofouling`)

仅记录实际独立识别并交给有记录处理方的养成清除附着物废物流。保留材料／生物组成、湿质量、含水率、移除事件和接收方；不同实际物理流或处理路线须独立建卡计量。排除死亡牡蛎、松散沉积物、器材及单独移除液体。不得继承死亡流的 UUID、数值范围或数量。若混合移除记录不能支持独立数量，须保留证据缺口并阻断完成，不得编造拆分比例。

- 选定流：送处理的养成清除附着物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 cp_growout_mass 独立计量本项清除附着物流的湿 kg，再将未分配物理量除以相匹配的正值最终验收牡蛎净 kg。独立建立自身范围或计量不确定度证据，核对实际处理仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_mass`
- 来源：`farmed-oyster-foreground-method`

###### 外送声明处理去向的实际废水或咸水排液 (`growout_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 留在声明水环境区室的未收集牡蛎死亡物 (`growout_uncollected_mortality`)

明确物种、状态、接收区室及估算质量不确定性，与收集废物区分；不得作为通用避免处置抵扣。

- 选定流：留在声明水环境区室的未收集牡蛎死亡物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`growout_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`growout_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_growout_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：管理牡蛎独立采收 (`harvest`)

记录作物或群体、场址日期、手采耙采拖捞或吊取技术及对应作业量。将移出与生物生长及后续清洗排沙分离。底质扰动及伴生生物需要实际现场证据，不得假定无害。

#### 输入

##### 产品流

###### 从管理育成接收的可采收活牡蛎 (`harvest_stock`)

与实际移交子群体的 growout_stock 在相同责任边界、状态及实测量不确定性内配对。不得将全场在养估计强设为已转移质量；未转移动物保留育成存量，采收责任内损失单独记录。

- 选定流：从管理育成接收的可采收活牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_harvest_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`harvest_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_harvest_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_harvest_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`harvest_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_harvest_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调理或分级前采得的活带壳牡蛎 (`harvest_live`)

仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。

- 选定流：调理或分级前采得的活带壳牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_harvest_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 向另一实际自有节点交接的水 (`harvest_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_harvest_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 外送声明处理去向的实际废水或咸水排液 (`harvest_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_harvest_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`harvest_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_harvest_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`harvest_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_harvest_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：清洗及排沙 (`conditioning`)

记录原始活牡蛎、外附泥沙污附着物及清洁后的活体状态。机械清洗或海水排沙不构成卫生净化、病原去除或食品安全证明。自有循环水不得重复记为外购水；记录淡水或咸水来源及排放去向。

#### 输入

##### 产品流

###### 进入实际清洗或排沙的状态明确活带壳牡蛎 (`conditioning_raw`)

从紧邻实际前序 harvest_live、grading_accepted、depuration_released 或 live_holding_live 接收唯一配对转移；保留待分级及处理限定和实测量，不把未验收状态暗中升格为食用。

- 选定流：进入实际清洗或排沙的状态明确活带壳牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_conditioning_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`conditioning_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_conditioning_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_conditioning_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`conditioning_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_conditioning_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清洗或排沙后转至实际下一责任的活牡蛎 (`conditioning_clean`)

按真实顺序交给 grading_live、depuration_accepted、live_holding_entry 或已具备交付资格的 dispatch_live_entry；保留群体、清洁、分级及处理状态，不因清洗宣称卫生放行。

- 选定流：清洗或排沙后转至实际下一责任的活牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_conditioning_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 向另一实际自有节点交接的水 (`conditioning_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_conditioning_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 外送声明处理去向的实际废水或咸水排液 (`conditioning_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_conditioning_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`conditioning_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_conditioning_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`conditioning_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_conditioning_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：去向判定及市场分级 (`grading`)

对采收或清洗排沙后的活牡蛎分类：验收食用等级、活未达规格返回自营育成、实际存在时独立出售的其他活产品，以及死亡、非食用或拒收废物。声明每个实际等级及交接；不存在的去向须说明，不虚构正输出。不设统一尺寸、肉产率或壳肉换算。

#### 输入

##### 产品流

###### 接收用于实际等级及去向判定的状态明确活牡蛎 (`grading_live`)

按交接编号接收紧邻实际 harvest_live、conditioning_clean、depuration_released 或 live_holding_live 事件，保持群体、实测量、清洁与处理限定；同一批重复检查须为不同实际事件，不重复其前序转移。

- 选定流：接收用于实际等级及去向判定的状态明确活牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`grading_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_grading_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`grading_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 市场等级已验收、食用与处理状态明确的活带壳牡蛎 (`grading_accepted`)

市场尺寸等级通过不等于卫生放行。明确待处理或已放行及实际允许用途；按真实顺序转入清洗、净化、存放或交付。待必要处理状态不能作为最终合格食用量。仅声明功能等价且分别记录产率的等级可共用参考。

- 选定流：市场等级已验收、食用与处理状态明确的活带壳牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 返回自营育成的活未达规格牡蛎 (`grading_undersize`)

配对 growout_returns 内部回路；不计销售或验收参考量，每次经过不得重新分配整批历史负荷。

- 选定流：返回自营育成的活未达规格牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 在其他声明交接点独立出售的活牡蛎产品 (`grading_other_live`)

记录实际苗种、其他市场产品或有证据的独立外部处理用活产品身份、用途、限制和独立销售交接点。不是已放行食用量，也不计最终参考分母；同一动物不能再作为内部转移或最终食用品重复。

- 选定流：在其他声明交接点独立出售的活牡蛎产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 向另一实际自有节点交接的水 (`grading_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 实际送废物处理的死亡或不合格牡蛎 (`grading_rejected`)

本废物卡仅记录实际废物转移及接收者；不得把仍在养或等待进一步处理的活批次自动变为废物。独立出售待外部处理的活产品应另在 grading_other_live 记录其真实产品作用与交接限定，不在本废物卡重复。

- 选定流：实际送废物处理的死亡或不合格牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 外送声明处理去向的实际废水或咸水排液 (`grading_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`grading_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`grading_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_grading_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：实际交接前卫生净化或移养 (`depuration`)

保持活体产品状态。声明受控水槽净化或移养、实际水域或槽体、时长、消毒技术、监测、转移及放行标准。本条件性保全母活动不声称去除所有毒素或授予食品安全认证。若首次交接发生在独立买方处理之前，则排除该下游处理并披露实际验收和用途限制。不规定通用时长、药剂量或法律标准。 移养不得假定为短期水槽净化：识别实际迁移运输、接收水域、日期及生产者责任。持续生长属于 growout，并记录接收场址存量、期间及实际生物投入和损失；仅有证据的卫生调理责任归于本节点。声明作业单元之外的独立买方或场址不得暗中纳入。历史指导本身不能授权受污染或含毒素牡蛎放行。

#### 输入

##### 产品流

###### 进入生产者实际负责净化或移养的状态明确活牡蛎 (`depuration_accepted`)

从紧邻实际 harvest_live、conditioning_clean、grading_accepted 或 live_holding_live 接收唯一配对转移；可尚待市场分级，必须保留真实来源、处理前状态及实际适用许可。输入名称不意味着已经食用放行。

- 选定流：进入生产者实际负责净化或移养的状态明确活牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_depuration_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`depuration_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_depuration_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_depuration_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`depuration_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_depuration_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际净化或移养后放行的活带壳食用牡蛎 (`depuration_released`)

实际处理记录及现行适用辖区证据支持本次处理放行，不假定通用无病原状态。按实际顺序交给 conditioning_raw、grading_live、live_holding_entry 或具备全部交付资格的 dispatch_live_entry；尚待分级时不能直接成为最终食用品。

- 选定流：实际净化或移养后放行的活带壳食用牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_depuration_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 向另一实际自有节点交接的水 (`depuration_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_depuration_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 外送声明处理去向的实际废水或咸水排液 (`depuration_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_depuration_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`depuration_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_depuration_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`depuration_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_depuration_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：实际交接前活体存放及冷却 (`live_holding`)

保全后的输出仍为带原生壳活体。记录实际水槽或干式存放、停留时长、温度历程、曝气或制冷、死亡及实际使用时的水氧。冷却不构成死亡鲜品或冷藏品新路线。即使延迟也仅计一次交接前处理资源；不假设通用存放饵料或供氧。

#### 输入

##### 产品流

###### 进入实际存放的分级与处理状态明确活牡蛎 (`live_holding_entry`)

从紧邻实际 harvest_live、conditioning_clean、grading_accepted 或 depuration_released 接收唯一配对转移，保留待分级、待处理或已放行状态。未知活力不得作为活体输入，不混合未披露卫生状态。

- 选定流：进入实际存放的分级与处理状态明确活牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_live_holding_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 按纯度及交付状态识别的实际交付氧气 (`live_holding_oxygen`)

仅纳入实际供氧；计量交付质量，不用未核实气体体积换算或工厂状态近似匹配。

- 选定流：按纯度及交付状态识别的实际交付氧气
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_live_holding_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`live_holding_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_live_holding_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_live_holding_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`live_holding_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_live_holding_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 存放或冷却后转至下一实际责任的活牡蛎 (`live_holding_live`)

按实际顺序交给清洗、分级、净化或具备全部交付资格的发运，保留群体、活体、等级及处理限定；不将尚待必要验收的批次直接并入最终食用参考。

- 选定流：存放或冷却后转至下一实际责任的活牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_live_holding_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 向另一实际自有节点交接的水 (`live_holding_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_live_holding_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 送实际处理的存放死亡及拒收牡蛎 (`live_holding_mortality`)

死亡物不计入活体参考质量；披露实际非食用或废物处理，不预设销售抵扣。

- 选定流：送实际处理的存放死亡及拒收牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_live_holding_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 外送声明处理去向的实际废水或咸水排液 (`live_holding_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_live_holding_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`live_holding_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_live_holding_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`live_holding_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_live_holding_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

### 过程：生产者首次呈现及交接 (`dispatch`)

验收活牡蛎按记录的旁路从分级、实际净化或活体存放进入。记录一次实物交接、实际买方验收及产品包装分离。包装用于保护或呈现活带壳产品；散装无包装交付仍有可记录最终交接。交接之后运输、买方净化、开壳、烹饪及最终使用均排除。

#### 输入

##### 产品流

###### 最终生产者交接准备时接收的验收活牡蛎 (`dispatch_live_entry`)

只接收紧邻实际 harvest_live、conditioning_clean、grading_accepted、depuration_released 或 live_holding_live 的一个配对转移。无论末段节点名称如何，实际分级、食用用途及适用处理放行必须已完成且在本交接仍有效；否则未完成，不得自动旁路。保持同一物种、原生壳、活体及处理限定。

- 选定流：最终生产者交接准备时接收的验收活牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_dispatch_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际节点消耗的中国电网平均低于 1 kV 交流电 (`dispatch_electricity_cn`)

仅在地域、电压及消费组合完全相符时使用；其他供应另建未核实电力交换。自发电不得并入外购电网消耗。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定模式：`fixed`
- 数量规则：依据 cp_dispatch_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_dispatch_energy`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：1000000
  - 单位：MJ
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际外供经过处理的工业工艺水 (`dispatch_water_supply`)

仅代表实际相符的外供经处理工艺水产品；不得代替未经处理海水取用、槽体循环水或食品级质量认证。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_dispatch_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 生产者首次交接的养殖食用带原生壳活牡蛎 (`dispatch_food_handover`)

在实际生产者首次交接点的一种最终合格带原生壳整只活食用产品，不含外来基质、污附着物、游离水、冰及包装。包含原生壳、组织及天然保留体液；计量此精确状态。

- 选定流：生产者首次交接的养殖食用带原生壳活牡蛎
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：method_formula
- 采集协议：`cp_dispatch_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：参考归一化定义，非生物产率
  - 范围角色：qa_guardrail
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：method_formula
  - 来源：`farmed-oyster-foreground-method`

###### 向另一实际自有节点交接的水 (`dispatch_internal_water_transfer`)

仅记录实际跨节点水转移，以同一状态、质量、事件及交接编号配对接收节点 other_water_supply。该发送不是环境排放或独立销售，不再次计取水负荷。饵料培养液已包含的载体水只在配对物料组成台账说明，不额外重复本交换。

- 选定流：向另一实际自有节点交接的水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_dispatch_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 废物流

###### 外送声明处理去向的实际废水或咸水排液 (`dispatch_wastewater`)

按处理去向及污染拆分；直接回流或排放水进入基本流行，同一水流不得同时计两者。

- 选定流：外送声明处理去向的实际废水或咸水排液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_dispatch_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

##### 基本流

###### 实际直接燃烧排入未细分空气的化石二氧化碳 (`dispatch_fossil_co2`)

仅纳入符合未细分空气区室的实际化石燃烧；使用实测燃料、碳含量及氧化证据，分离生物源碳和外包排放，不得将 UUID 视为排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定模式：`fixed`
- 数量规则：先按第 8 节以实际节点燃料质量、化石碳份额及独立氧化或排放方法证据计算直接化石 CO2。依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_dispatch_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

###### 实际蒸发至空气的水 (`dispatch_water_evaporation`)

所绑定身份的排放子介质为未细分的空气。实际证据已明确更具体空气子介质时，须在数据集定稿前核实并选用对应身份。仅在实际重要蒸发时记录实测或有证据的水质量、期间及接收空气区室，并与取水、供应、内部交接、载体及存量核对。不得作为无证据的补平衡量，不与水蒸气已计其他排放重复。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_dispatch_mass`
- 来源：`farmed-oyster-foreground-method`
- 数量范围：暂定筛选包络，非默认量或通用允许限值
  - 范围角色：qa_guardrail
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：reference_flow
  - 证据类型：reasoned_estimate

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_output` | 相关过程及完整前景数据包 | 列出实际最终食用等级、独立出售苗种亲贝或其他活产品及各交接点；区分内部苗种、活未达规格返养、存量、废物及环境损失。先细分实测作业。不可避免的共同生产采用有记录的因果物理驱动；若不存在可辩护物理关系，则使用同期间实际可比净价的经济价值并做敏感性分析。不得同时计替代抵扣，或在节点间为减小参考负荷而改变方法。 | `farmed-oyster-foreground-method` |
| `allocation_period` | 相关过程及完整前景数据包 | 跨实际期间关联从采集早期生命至采收的所有群体，以及期初期末在养动物及累积负荷、资产取得更换退役和清洗事件。按实际寿命服务单位或使用量分配实测资产服务，并按退役证据修订估计；未采收和返养存量负荷结转，并核对期初加新增与外送、损失、期末负荷。不设任意通用寿命或年产率。 | `farmed-oyster-foreground-method` |
| `allocation_shared` | 相关过程及完整前景数据包 | 对共用船舶、泵、水处理、槽体、仓储和周转箱按事件资产编号列出使用节点和期间。按实测运行小时、计量体积能源、面积时间或其他因果服务份额仅分配一次；所有使用者份额核对为一个总量。各节点使用自己的协议，但不得重复共同原始事件。同一供应范围的外部服务与自营运行互斥。 | `farmed-oyster-foreground-method` |
| `allocation_returns` | 相关过程及完整前景数据包 | 分级活未达规格返养仍属群体存量，与 growout_returns 配对；保留苗种亲贝同样携带历史负荷，不新增销售、购买或整批重置。增加实际返养再处理资源和死亡，不得将同一原始负荷重复分配入回路。死亡拒收物不计最终活质量；实际处理负荷保留在产生批次，除非明确共产品细分证据支持其他处理。 | `farmed-oyster-foreground-method` |
| `allocation_secondary` | 相关过程及完整前景数据包 | 在实际回收交接点一致应用声明的再生壳继承或截断，对外购及自有回收材料披露前后准备负荷并检查重复计数。附在销售牡蛎上的壳在实际分离外送前不构成独立壳共产品；原生壳仍属整只产品，不虚构壳销售或固碳抵扣。 | `farmed-oyster-foreground-method` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_spat_collection_mass` | `spat_collection` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 自营野生稚贝采集 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_spat_collection_energy` | `spat_collection` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 自营野生稚贝采集 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_algal_culture_mass` | `algal_culture` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 自营藻类饵料培养 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_algal_culture_energy` | `algal_culture` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 自营藻类饵料培养 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_hatchery_mass` | `hatchery` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 自营亲贝及幼体孵化 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_hatchery_energy` | `hatchery` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 自营亲贝及幼体孵化 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_settlement_mass` | `settlement` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 自营附着或异地附苗 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_settlement_energy` | `settlement` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 自营附着或异地附苗 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_nursery_mass` | `nursery` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 自营牡蛎苗种暂养 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_nursery_energy` | `nursery` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 自营牡蛎苗种暂养 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_growout_mass` | `growout` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失；独立实测死亡牡蛎湿质量／数量及清除附着物湿质量／组成／含水率；移除及处理回执标识；分离证据及未解决混合移除缺口 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 牡蛎管理育成 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_growout_energy` | `growout` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 牡蛎管理育成 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_harvest_mass` | `harvest` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 管理牡蛎独立采收 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_harvest_energy` | `harvest` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 管理牡蛎独立采收 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_conditioning_mass` | `conditioning` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 清洗及排沙 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_conditioning_energy` | `conditioning` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 清洗及排沙 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_grading_mass` | `grading` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 去向判定及市场分级 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_grading_energy` | `grading` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 去向判定及市场分级 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_depuration_mass` | `depuration` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 实际交接前卫生净化或移养 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_depuration_energy` | `depuration` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 实际交接前卫生净化或移养 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_live_holding_mass` | `live_holding` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 实际交接前活体存放及冷却 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_live_holding_energy` | `live_holding` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 实际交接前活体存放及冷却 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_dispatch_mass` | `dispatch` | 节点材料、生物体、水、存量及排放质量 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 节点负责人员在每个实际事件以经校准秤或匹配抽样称重及存量台账计量；水量用实际状态密度，排放按实测或声明实际因子证据；与源目标交接、供应商及处理接收单核对，不重复共用事件。 | kg | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 生产者首次呈现及交接 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |
| `cp_dispatch_energy` | `dispatch` | 节点实际能源输入 | 原始记录及计量、匹配供应商证据 | 群体批次；日期期间；事件资产及交接编号；前序后序；实际活体阶段物种和状态；材料物质与来源去向；毛重皮重净重和外来基质剔除；数量和代表性质量样本；水量密度盐度及槽存量；表计和能源载体；期初期末动物燃料装备存量；归属份额；碳及排放因子依据；误差及缺失 | 读取节点分表和实际能源发票，按装备运行日志归属共表；保留实际供应地域电压，按经核实 3.6 换算 kWh 至 MJ，不重复自发电与外购电。 | MJ | 逐事件、交接和批次；表计按连续记录或覆盖完整运行期 | 完整声明群体周期及其各报告期间，跨期存量与资产服务可追溯 | 仅声明作业单元内 生产者首次呈现及交接 节点，保留实际水域与供应边界 | 每 1 kg 参考流 | 秤和表计校准、独立代表样本、批次路线与交接单、活体验收及授权放行、存量和共享事件对账、密度因子来源和误差、缺口处置 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `foreground_normalization` | 所有非最终清单行 | 明确保留两种标注视图。先对完整声明群体、航次或运行核对未作共产品分配的实际接收、转移、产品、损失及存量；内部转移按相同状态与单位配对并保留实测质量。以有证据的服务份额，将共享资源或服务事件一次归属实际使用节点及期间，不用共产品份额缩小产品、生物量、水或废物分区。将此物理清单除以相匹配且为正的最终验收净千克。再根据第 7 节共产品规则，仅分配一次并另行生成标注的单输出 LCA 负荷或清单投影，同时保留未分配清单及分配矩阵。不得用已分配交换检验未分配物理闭合、在下游再次乘输出份额，或把内部数量设为最终 1 kg。 | 节点量及归属台账；cp_dispatch_mass 合格净质量；对应节点协议 | 每 1 kg 参考流的实际交换 | `farmed-oyster-foreground-method` |
| `stage_mass_conversion` | 苗种和存量计数 | 阶段净生物量 = 实际数量 × 同群体同阶段同状态代表性个体净质量；剔除外来基质，分别传播抽样误差。仅实测阶段样本可作转换，不套用肉率。 | 实际数量、代表性称重样本、基质皮重及节点协议 | 阶段净质量及不确定性 | `farmed-oyster-foreground-method` |
| `emission_accounting` | 实际节点 fossil_co2 及其他直接排放卡 | 按实际燃料及碳含量氧化证据或与实际技术燃料期间相符的已声明因子计算直接化石二氧化碳；分列生物源碳及其他精确物质。再按节点归属和最终合格净质量归一化；没有通用默认排放因子。 | 节点燃料、化石碳、氧化或实际因子来源、接收区室及对应 mass 协议 | 明确介质的直接排放质量及不确定性 | `farmed-oyster-foreground-method` |
| `cohort_stock_reconciliation` | 群体和返养存量 | 逐群体核对期初活体数量 + 实际进入 = 采出或外送 + 死亡及其他损失 + 期末活体数量；生物质量另计生长和实际输入输出，不强迫跨生长等质量。对累积负荷独立核对期初 + 新增 = 外送归属 + 损失归属 + 期末结转；内部回路不得虚增购买或参考销售。 | 节点群体数量质量；期初期末及返养交接；新增及归属负荷 | 可审计数量、质量及负荷结转 | `farmed-oyster-foreground-method` |
| `environmental_nutrition_model` | growout_natural_nutrition | 仅在声明的场址模型和独立校准证据充分时，按实际环境观测、群体活体生物量及期间计算同化环境生物物质量 f(observations, biomass, time)。保留实际代数表达式、参数单位与来源、原始量、独立校准与验证、物种阶段及干湿质量基准和不确定性，再按两视图规则归一化。不得仅以成贝增重或过滤总量冒充同化摄取；缺少模型或实际观测为未解决定量缺口，不能填零或完成该数据包。 | 实际观测；独立校准模型；参数与单位；群体及期间 | 同化环境生物物质量及不确定性 | `farmed-oyster-foreground-method` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_live_gate` | dispatch_food_handover | 实际活体验收、物种、养殖来源、交接和净质量必须一致；基质剔除和体液保留方法明确 | 校准称重、独立样本、批次与买方验收、适用授权 |
| `dq_stage_coverage` | 全路径 | 逐节点真实启用、旁路、源目标及阶段采购上游负荷完整；缺失不是零，年龄尺寸倍性不能代替物种阶段事实 | 群体路线、采购单、节点协议及缺口清单 |
| `dq_temporal_shared` | 跨期群体和共享资产 | 完整周期覆盖，期初期末活体和累积负荷、资产服务及共用表计按相同事件期间核对，真实死亡或无产出期间仍有负荷 | 资产服务和终止记录、存量、事件份额及对账 |
| `dq_empirical_ranges` | 所有卡及范围 | 暂定包络不得代替实际量；经验范围须用独立可比批次建立并保留支持样本及适用条件，所有密度、因子和质量转换保留证据误差 | 独立采样、校准、适用性及不确定性报告 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_spat_collection_collectors` | `spat_collection`; 输入; 产品流 | 必须辨认并分别采集“布设的采苗器及再生贝壳附着基质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：声明各材料、原产壳系统、回收清洗交接及实际服务份额；外来附着基质不得计入参考分母。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_other_energy` | `spat_collection`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_spat_collection_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_fuel` | `spat_collection`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_assets_services` | `spat_collection`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_other_water_supply` | `spat_collection`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_operating_consumables` | `spat_collection`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_raw_water` | `spat_collection`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_incidental_biomass` | `spat_collection`; 输入; 基本流 | 必须辨认并分别采集“本事件实际移入或移除的非目标伴生生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本责任事件实际从命名环境移除的非目标生物，按物种、状态及净质量拆分，以核对活体返还或收集死亡废物。不得重复目标野生稚贝、管理牡蛎存量或已由上游责任转移包含的同一生物；开放水域存在本身不构成提取。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_dead_spat` | `spat_collection`; 输出; 废物流 | 必须辨认并分别采集“移出并送往声明处理去向的死亡稚贝和污附着物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际处理去向区分死亡稚贝与采苗器污附着物；向环境处置须另行确定基本流。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_operating_waste` | `spat_collection`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_incidental` | `spat_collection`; 输出; 基本流 | 必须辨认并分别采集“活体返还原水域的伴生生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录物种及实际释放状态和去向；不抵消采集负荷，也不代表已证实存活。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_discharge` | `spat_collection`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spat_collection_other_emissions` | `spat_collection`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_spat_collection_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_spat_collection_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_inoculum` | `algal_culture`; 输入; 产品流 | 必须辨认并分别采集“已识别的藻类接种物或种源”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_nutrients` | `algal_culture`; 输入; 产品流 | 必须辨认并分别采集“按配方识别的实际藻培养营养盐及气体添加物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分实际配方、营养质量基准及气体身份；二氧化碳供应不等于大气碳移除。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_other_energy` | `algal_culture`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_algal_culture_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_fuel` | `algal_culture`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_assets_services` | `algal_culture`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_other_water_supply` | `algal_culture`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_operating_consumables` | `algal_culture`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_raw_water` | `algal_culture`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_feed` | `algal_culture`; 输出; 产品流 | 必须辨认并分别采集“交付声明自营使用节点的培养藻饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量湿培养液质量、干生物量或浓度；配对交接及接收浓度、水载体和阶段。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_operating_waste` | `algal_culture`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_discharge` | `algal_culture`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_algal_culture_other_emissions` | `algal_culture`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_algal_culture_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_algal_culture_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_feed` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“供应实际亲贝或幼体阶段的藻饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用自营藻培养输出或外购供应商流及实际湿干浓度；不得以环境浮游植物替代培养藻饵。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_other_energy` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_hatchery_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_fuel` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_assets_services` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_other_water_supply` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_operating_consumables` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_raw_water` | `hatchery`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_mortality` | `hatchery`; 输出; 废物流 | 必须辨认并分别采集“送处理的孵化死亡物、无活力卵及幼体残余物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_operating_waste` | `hatchery`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_discharge` | `hatchery`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_other_emissions` | `hatchery`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_feed` | `settlement`; 输入; 产品流 | 必须辨认并分别采集“自营附着期间供应的藻饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_other_energy` | `settlement`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_settlement_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_fuel` | `settlement`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_assets_services` | `settlement`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_other_water_supply` | `settlement`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_operating_consumables` | `settlement`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_raw_water` | `settlement`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_failed` | `settlement`; 输出; 废物流 | 必须辨认并分别采集“送处理的未附着或死亡幼体及废附着基质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_operating_waste` | `settlement`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_discharge` | `settlement`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_settlement_other_emissions` | `settlement`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_feed` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“自营暂养实际供应的饵料或施肥材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分饵料与肥料或池塘增肥，并记录实际营养及排放物种；两者均非普遍必需。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_other_energy` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_nursery_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_fuel` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_assets_services` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_other_water_supply` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_operating_consumables` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_raw_water` | `nursery`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_dead` | `nursery`; 输出; 废物流 | 必须辨认并分别采集“送处理的暂养死亡物及移除污附着物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_operating_waste` | `nursery`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_discharge` | `nursery`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_other_emissions` | `nursery`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_nursery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_nursery_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_gear` | `growout`; 输入; 产品流 | 必须辨认并分别采集“按实际材料识别的育成基质、棚架、网袋、绳索、浮体及锚具”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：实际底播、离底或悬挂技术差异；按资产编号记录摊分的隐含材料服务份额、维修更换和损失，不得每次采收重复计全套安装。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_other_energy` | `growout`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_growout_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_fuel` | `growout`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_assets_services` | `growout`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_other_water_supply` | `growout`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_operating_consumables` | `growout`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_natural_nutrition` | `growout`; 输入; 基本流 | 必须辨认并分别采集“按声明水环境来源识别的实际同化环境生物物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：区分实际环境营养与供应饵料，表征物质生物量及接收或来源区室；采用场址实测通量或经独立场址观测校准并声明不确定性的模型，不建立外购饵料交换或自动营养碳移除抵扣。重要证据缺失须披露为数据缺口，不得虚构零摄取。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_raw_water` | `growout`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_broodstock` | `growout`; 输出; 产品流 | 必须辨认并分别采集“作为亲贝转交自营孵化的活牡蛎”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：明确替代去向，不得同时作为采收参考产品；携带可归属存量负荷。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_operating_waste` | `growout`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_biodeposition` | `growout`; 输出; 基本流 | 必须辨认并分别采集“向水体或沉积物的实际实测或模型支持生物沉积组分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按场址证据确定各物质或物种、基准及精确接收介质；不得套用通用粪便 UUID 或将缺测视为零，也不得用负营养盐移除因子替代。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_gear_loss` | `growout`; 输出; 基本流 | 必须辨认并分别采集“进入声明接收环境的实际遗失育成装备材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：区分实际聚合物或材料及水体、沉积物区室；回收作业是实际服务，不代表未回收损失为零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_discharge` | `growout`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_other_emissions` | `growout`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_other_energy` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_harvest_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_fuel` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_assets_services` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_other_water_supply` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_operating_consumables` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_raw_water` | `harvest`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_incidental_biomass` | `harvest`; 输入; 基本流 | 必须辨认并分别采集“本事件实际移入或移除的非目标伴生生物量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本责任事件实际从命名环境移除的非目标生物，按物种、状态及净质量拆分，以核对活体返还或收集死亡废物。不得重复目标野生稚贝、管理牡蛎存量或已由上游责任转移包含的同一生物；开放水域存在本身不构成提取。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_breakage` | `harvest`; 输出; 废物流 | 必须辨认并分别采集“送处理的采收破损或死亡牡蛎及收集杂物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_operating_waste` | `harvest`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_incidental` | `harvest`; 输出; 基本流 | 必须辨认并分别采集“在采收场址实际活体返还的伴生生物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录实际物种及区室；死亡或处置生物须另列输出，不得假设活体。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_discharge` | `harvest`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_other_emissions` | `harvest`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_harvest_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_harvest_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_other_energy` | `conditioning`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_conditioning_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_conditioning_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_fuel` | `conditioning`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_conditioning_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_assets_services` | `conditioning`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_conditioning_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_other_water_supply` | `conditioning`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_conditioning_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_operating_consumables` | `conditioning`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_conditioning_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_raw_water` | `conditioning`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_conditioning_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_removed` | `conditioning`; 输出; 废物流 | 必须辨认并分别采集“送处理的移除泥沙、污附着物及死亡破损牡蛎”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分移除的外来物质与死亡牡蛎，保留不同质量基准及处理去向。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_conditioning_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_operating_waste` | `conditioning`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_conditioning_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_discharge` | `conditioning`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_conditioning_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_conditioning_other_emissions` | `conditioning`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_conditioning_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_conditioning_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_other_energy` | `grading`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_grading_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_grading_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_fuel` | `grading`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_grading_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_assets_services` | `grading`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_grading_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_other_water_supply` | `grading`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_grading_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_operating_consumables` | `grading`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_grading_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_raw_water` | `grading`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_grading_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_operating_waste` | `grading`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_grading_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_discharge` | `grading`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_grading_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_grading_other_emissions` | `grading`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_grading_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_grading_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_treatment` | `depuration`; 输入; 产品流 | 必须辨认并分别采集“实际净化耗材、消毒投入及过滤材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：声明各实际材料、活性浓度、装备及模式；紫外电力为计量能源，不是虚构化学品交换；废材料另列去向。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_other_energy` | `depuration`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_depuration_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_fuel` | `depuration`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_assets_services` | `depuration`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_other_water_supply` | `depuration`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_operating_consumables` | `depuration`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_raw_water` | `depuration`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_rejected` | `depuration`; 输出; 废物流 | 必须辨认并分别采集“送处理的净化死亡或拒收牡蛎及废过滤材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分活拒收批次去向、死亡物及材料废物；放行不通过不得并入合格活体参考输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_operating_waste` | `depuration`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_discharge` | `depuration`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_depuration_other_emissions` | `depuration`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_depuration_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_depuration_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_holding_coolant` | `live_holding`; 输入; 产品流 | 必须辨认并分别采集“按物理状态识别的实际外供冷却介质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：声明介质、接触或隔离及来源；养殖用冰不得继承捕捞渔业用冰身份。自有制冷已计入能源及装备。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_live_holding_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_holding_other_energy` | `live_holding`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_live_holding_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_live_holding_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_holding_fuel` | `live_holding`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_live_holding_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_holding_assets_services` | `live_holding`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_live_holding_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_holding_other_water_supply` | `live_holding`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_live_holding_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_holding_operating_consumables` | `live_holding`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_live_holding_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_holding_raw_water` | `live_holding`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_live_holding_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_holding_operating_waste` | `live_holding`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_live_holding_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_holding_discharge` | `live_holding`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_live_holding_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_holding_other_emissions` | `live_holding`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_live_holding_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_live_holding_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_packaging` | `dispatch`; 输入; 产品流 | 必须辨认并分别采集“实际一次性及可重复使用运输或呈现包装”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：计量实际材料及周转服务份额、清洗和返还台账；包装不计入牡蛎净质量，不得每次运输均计整个可重复使用周转箱。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_other_energy` | `dispatch`; 输入; 产品流 | 必须辨认并分别采集“按供应商及交付状态识别的实际其他外购电力或热能”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分其他地域、电压及能源载体；不得与中国电力或自有燃料消耗重叠。供应商服务清单不得再作为节点直接燃料重复计入。 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则：依据 cp_dispatch_energy 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_energy` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_fuel` | `dispatch`; 输入; 产品流 | 必须辨认并分别采集“按物质识别的自有装备或船舶实际燃料及润滑剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按资产和事件计量购入、期初期末燃料存量及作业；淡水捕捞船柴油不是牡蛎养殖燃料身份。外包服务已包含的燃料不得重复添加。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_assets_services` | `dispatch`; 输入; 产品流 | 必须辨认并分别采集“可归属隐含资产及维修材料质量”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：各实际隐含材料质量或服务份额及使用节点、时期仅记录一次；运行外部服务在前景记录中使用另行核实的实际属性及范围，不得将费用视为千克或重复计自有燃料。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_other_water_supply` | `dispatch`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供或节点间交接水，明确来源与状态”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际来源、盐度、处理及用途分别实例化非固定工业水的外购海水、饮用或其他供应水，或内部接收水。内部接收须与发送节点 internal_water_transfer 配对并携带唯一上游负荷，不重复采购或取水；同节点循环仅记辅助流量，不新增交换。不得与 water_supply 固定卡重叠。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_operating_consumables` | `dispatch`; 输入; 产品流 | 必须辨认并分别采集“实际运行卫生、过滤与气体耗材，按身份拆分”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅计实际发生的清洗消毒、过滤、调水或供气耗材，按配方、纯度、交付状态和实测质量拆分。排除已在藻营养盐、饵料、燃料润滑剂、装备、净化专用投入或氧气卡记录的同一用量。空气泵用能不等于外购氧，未知数量不得填零。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_raw_water` | `dispatch`; 输入; 基本流 | 必须辨认并分别采集“从已识别淡水或咸水环境实际取用的水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分来源、区室及盐度；将一次取用与循环、回流水及天然开放水域暴露区分。体积换质量须有实际密度和状态证据。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_packaging_handover` | `dispatch`; 输出; 产品流 | 必须辨认并分别采集“随合格牡蛎交接的实际包装材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料记录实际随批次交付的一次性包装及所有权交接，完全排除牡蛎参考净质量。周转箱保留所有权、返还及资产服务记录，不把摊分制造质量当作每次实物交付量，也不把包装擅作需要经济分配的独立销售共产品。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_rejects` | `dispatch`; 输出; 废物流 | 必须辨认并分别采集“按去向识别的最终检查拒收物、死亡牡蛎及包装废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录本节点实际发生且有身份、状态、来源去向和计量证据的交换；按实际群体与事件配对交接。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_operating_waste` | `dispatch`; 输出; 废物流 | 必须辨认并分别采集“收集送实际接收者的运行耗材及退役材料废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：分别计量废过滤材料、清洗残余物、容器或更换退役装备材料及实际接收者；排除已在节点死亡、废附苗基质、净化废物或包装拒收卡记录的材料。可用库存或已交付产品不是废物，直接环境损失另列基本流，不预设循环抵扣。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_discharge` | `dispatch`; 输出; 基本流 | 必须辨认并分别采集“向命名接收介质实际直接回流水及排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：拆分回流水总体与每个实测污染物种或浓度及接收区室；不得将总氮直接换成特定硝酸盐身份，或使用通用有机物 UUID 捷径。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_other_emissions` | `dispatch`; 输出; 基本流 | 必须辨认并分别采集“按精确物种及介质识别的其他实际直接排放物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅纳入实际燃烧污染物、制冷剂泄漏或过程排放；分别确定化学物种、粒径或基准及空气、水或土壤区室，不得使用通用混合物 UUID。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_dispatch_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_dispatch_mass` 来源：`farmed-oyster-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_entry` | `hatchery`; inputs; product | 逐项识别并独立计量“进入实际自营孵化阶段的亲贝、受精卵或幼体”包含的实际交换；这些采集和换算责任全部适用：逐群体选择实际进入状态；记录供应商上游阶段或育成内部转移，不得虚构未发生阶段。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_hatchery_broodstock_exit` | `hatchery`; outputs; product | 逐项识别并独立计量“返回自营育成或在声明交接点出售的活亲贝”包含的实际交换；这些采集和换算责任全部适用：区分内部保留存量与独立出售共产品，记录动物或群体标识及携带负荷；本行不属于食用参考输出。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_hatchery_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_hatchery_mass` 来源：`farmed-oyster-foreground-method` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_settlement_cultch` | `settlement`; inputs; product | 逐项识别并独立计量“原生或回收贝壳及其他附着基质”包含的实际交换；这些采集和换算责任全部适用：再生贝壳须识别来源、回收、运输及附苗前准备且仅计一次，应用再生材料负荷规则。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_settlement_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_settlement_mass` 来源：`farmed-oyster-foreground-method` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |
| `dq_complete_growout_returns` | `growout`; inputs; product | 逐项识别并独立计量“返回育成的活未达规格牡蛎或自营亲贝”包含的实际交换；这些采集和换算责任全部适用：配对分级未达规格或孵化亲贝转移；历史群体负荷及当前存量各保留一次，不得重新作为新购苗种起算。 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：依据 cp_growout_mass 采集实际节点数量；按第 8 节两种视图规则先保留未分配物理转移、存量及去向，唯一归属共享资源，再以相匹配最终验收净千克归一化。共产品 LCA 分配另列且仅计一次。 数值来源模式：calculated_value 适用范围：site_specific 归一化基准：每 1 kg 参考流 基准类型：reference_flow 证据类型：calculated_from_collection 采集协议：`cp_growout_mass` 来源：`farmed-oyster-foreground-method` 每项实际子交换必须有独立数量、原生单位、归一化、去向、UUID和Range证据；不得继承集合总量、范围或绑定。未落实则最终数据包不完整且校验失败，未知不等于零。 | 所链接协议的逐流原始记录和身份、去向、范围证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 相关过程及完整前景数据包 | 在唯一实际生产者交接点核实物种、养殖来源、活体状态及原生壳净质量。缺少实际验收或适用法律证据时不得声称食用用途；活体状态本身不足。最终苗种、野生成贝、死亡、去壳、烹饪及冷冻输出排除。 | `farmed-oyster-foreground-method` |
| `validate_routes` | 相关过程及完整前景数据包 | 重建实际群体进入阶段及有序节点路径，包括每个启用可选干预及旁路。外购幼体稚贝苗种跳过未发生早期阶段但保留供应商负荷；不得由分类标签推导强制暂养或净化。最终数据使用前解决未知阶段处理状态。以实际装备、投入类别、存量及监测证据核对每个技术差异。 | `farmed-oyster-foreground-method` |
| `validate_transfers` | 相关过程及完整前景数据包 | 每条内部输出与输入按相同实际状态、实测量及不确定性配对。仅对牡蛎生物净质量接口一致排除外部附苗基质及游离载体水；湿藻培养饵料等供应材料则在两端保留相同的实际湿质量、干物质、浓度及载体基准，并在组成子账保留载体水，不另记重复水交换。实际损失、流量及存量解释差异。匹配小规格与亲贝回用，不作合格销售；生长中带壳存量不假设恒重。仅以正的最终验收活体净质量归一化；无产出或死亡群体期间保留负荷并明确归属，不除零或删除失败生产。 | `farmed-oyster-foreground-method` |
| `validate_water` | 相关过程及完整前景数据包 | 逐节点核对取用外供水、循环、饵料产品携水、蒸发、送处理、直接回排及槽体存量变化。将元素营养或污染物质量基准与总体水分列，不得同时添加全部废水及同一直接排放，或将每次循环视作新投入。 | `farmed-oyster-foreground-method` |
| `validate_resources` | 相关过程及完整前景数据包 | 跨所有节点使用者和期间核对各公用工程表计、燃料存量、发票及资产事件负责人。外购服务不得再加相同自有燃料；自发电仅计一次燃料直接排放，不重复购电。仅精确实际中国低压消费使用该固定流；仅实际外供经处理水使用其固定身份。 | `farmed-oyster-foreground-method` |
| `validate_ranges` | 相关过程及完整前景数据包 | 将已提供范围按暂定推理筛查包络审查，不当作实测得率、默认清单或通用限值。无数值范围的卡保留各自独立范围或计量不确定度采集责任；不得把已删除混合物流范围复制给子流。最终交换完成须逐流取得有独立依据的实际数量及范围／不确定度证据。数值 QA 须依据独立可比调查期／样本及实际状态，不用被检批次最大值自证。真实越界值保留；最终 1 kg 仅为归一化。 | `farmed-oyster-foreground-method` |
| `validate_identities` | 相关过程及完整前景数据包 | 下游数据集发布前，将各具体前景交换解析为已核实的精确物理身份、属性单位及去向；语义总括卡可对应零个一个多个实际交换，不得虚构一个通用身份。身份证据不提供排放因子、密度、保质期或卫生有效性。 | `farmed-oyster-foreground-method` |
| `validate_credits` | 相关过程及完整前景数据包 | 要求损失、排放、装备及场址影响的实际证据与不确定性；不得用一般定性生态效益抵消。不自动给予壳碳、营养盐、废物或生境负抵扣。检查节点本地协议归属、双语机器字段及当前确定性投影。 | `farmed-oyster-foreground-method` |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明作业单元、实际群体和责任边界的前景食用活牡蛎生产数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具同一物种、活带原生壳、净质量、生产路线阶段和交接语义的前景及下游过程或生命周期模型投影 |
| excluded_use | 不匹配状态地域的自动代理；肉质量、野生成贝、最终苗种或加工牡蛎；默认环境抵扣；食品安全认证或未核实最终交换发布 |
| required_metadata | 物种、场址水域、群体日期、实际技术阶段和旁路、供应商入口、最终交接、活体等级净质量、处理责任及验收、所有资产时期与分配方法 |
| required_quality_disclosure | 采样和量测不确定性；采购上游完整性；未核实身份和数据缺口；暂定包络；群体存量、返养和共用资产；环境排放及处理限制 |
| update_trigger | 物种场址、苗种入口、技术设备、责任交接、活体状态、净化规则、资产服务、排放证据、供应商或实测参数发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-oysters` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 04422 分类边界，非生产因子 |
| `fao-oyster-production` | official_guidance | https://www.fao.org/fishery/docs/CDrom/aquaculture/I1129m/file/en/en_pacificcuppedoyster.htm | 历史定性苗种、养殖、采收及调理路线；不采用数值默认值 |
| `noaa-oyster-aquaculture` | official_guidance | https://www.fisheries.noaa.gov/species/eastern-oyster/aquaculture | 仅用于一般孵化和养殖接口；页面混用物种名称，不作为物种特定或抵扣因子证据 |
| `fda-nssp-context` | official_guidance | https://www.fda.gov/food/federal-state-local-tribal-and-territorial-cooperative-human-food-programs/national-shellfish-sanitation-program-nssp | 仅作美国卫生及追溯项目背景；实际主管机关规则和放行证据须另行取得 |
| `farmed-oyster-foreground-method` | method_factor | 本 PCR 第 4、5、7、8、9 节明确规定的采集、归属和计算方法；具体研究须提供实际记录 | 声明的前景方法、归一化、同状态交接、存量、平衡及不确定性检查；不是外部实测数据集 |
