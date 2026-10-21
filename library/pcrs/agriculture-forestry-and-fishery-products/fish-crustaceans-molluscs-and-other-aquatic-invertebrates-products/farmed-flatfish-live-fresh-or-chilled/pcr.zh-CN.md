---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-flatfish-live-fresh-or-chilled
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 养殖整条比目鱼，活、鲜或冷藏

## 1. 范围与适用性

本方法覆盖首次生产者交付的实际养殖来源食用整条比目鱼。在比目鱼分类范围内独立确认实际物种，不从旧物种手册推导分类。整鱼指未去头未去内脏。最终状态须证实为活或鲜/冷藏;物种、生产阶段与水条件保持实际数据事实。分类范围依据 CPC 解释说明;更窄的交付门与形态依据明确的前景方法。

历史 FAO 大菱鲆和牙鲆描述仅支持定性阶段问题。其旧绩效、温度、密度、饵料系数、药物、价格、分类及胚胎时长陈述不构成当前定量默认值或处方。当前现场记录决定实际繁殖、健康材料、盐度、水技术与条件。UF/IFAS 通用 RAS 来源支持处理与水质问题，不是比目鱼生产配方。来源：`un-cpc3-2025`、`fao-turbot-2009`、`fao-flounder-culture`、`uf-ifas-ras-fa099`、`flatfish-foreground-method`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-flatfish-live-fresh-or-chilled |
| classification_refs | CPC 3.0 04232; narrower 关系 |
| covered_products | 养殖来源食用比目鱼，首次生产者交付时为未去头未去内脏的活、鲜或冷藏整鱼 |
| excluded_products | 野生鱼;观赏/非食用苗种或饲料鱼;作为最终产品的卵/配子;去头/去内脏鱼、鱼片/鱼肉、卵/肝、冻结或深加工产品 |
| representative_product | 已识别养殖食用整鱼群;实际物种必填，大菱鲆仅为定性例子 |
| production_route | 自有孵化/仔鱼定居与育苗，或有记录购入阶段，随后底栖育成、独立收获及实际 live_gate 或 whole_chill 状态。生物父过程为 hatchery/nursery/growout;水系统技术差异附着于这些父过程。 |
| market_state | 每交付批次仅一种实际状态：活体或整鱼鲜/冷藏。声明物种、现场盐度及水系统拓扑，不强制所有比目鱼均为海水养殖。 |

## 3. 参考流

### 功能单位

| 字段 | 值 |
| --- | --- |
| What | 首次生产者交付的实际合格养殖食用整条比目鱼 |
| How much | 1 kg 净湿鱼体生物量，排除水、冰、氧、包装及不合格拒收品 |
| How well | 实际物种、未去头未去内脏整鱼形态、养殖来源及食用适宜性;必须证实一种活或鲜/冷藏状态 |
| How long or cycle | 记录实际亲鱼周期、孵化/仔鱼/定居/育苗/育成期间及收获、暂养和发运日期;含延续生物量、资产服务期、更换与终止事件 |
| reference_flow_link | `flatfish_gate_release` |

### 参考流对象

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 首次生产者交付的实际状态养殖食用整条比目鱼 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种/分类证据;养殖来源;食用用途与适宜性;未去头未去内脏整鱼;实际活/鲜/冷藏状态;自有/购入起始阶段;单元水源/盐度与拓扑;鱼群/现场/期间;净质量与皮重;底面积/占用;自有时的变态/定居;收获/处理/发运记录;实际首次生产者门;上游负荷覆盖;处理/排口去向;分配和不确定性 |

仅一个已证实实际状态分支向 declared_gate_release 交接：有活鱼证据时为 live_gate，有鲜/冷藏证据时为 whole_chill。最终验收交付节点拥有唯一参考输出及实测正值合格净质量分母；其输入为所选分支独立实测交接量，不固定为1千克。不得合并两路或推断未知状态。拒收与损失独立计量；混合状态批次须拆分并保留全部限定信息和共同负荷。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用校准秤称量实际合格净整鱼，扣除皮重、水、氧和冰;不合格死亡/拒收不进分母但保留负荷。来源：flatfish-foreground-method。 |
| `cohort_count_mass` | 存量及鱼转移 | Mass | kg | 尾数转质量须实际代表性物种/阶段/鱼群取样体重及不确定性或直接称量;无统一每千克尾数或卵转鱼系数。来源：flatfish-foreground-method。 |
| `water_mass` | 水卡 | Mass | kg | 体积转 kg 时记录实际密度/盐度/温度;取水、外供、循环和最终排水保持分别识别。来源：flatfish-foreground-method。 |
| `energy_units` | 能源卡 | Net calorific value | MJ | 保留原计量/发票单位，kWh 按 3.6 转 MJ;区分购入热能与产生它的燃料和电力。来源：flatfish-foreground-method。 |
| `substance_basis` | 饲料;化学品;排放 | Mass | kg | 保留饲料干湿质量/水分、配方材料与活性成分、氮磷元素与实际物质基准;仅据声明组成、摩尔关系或实测密度转换。来源：flatfish-foreground-method。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际自有亲鱼/卵/仔鱼阶段，或有记录购入的卵、仔鱼、幼鱼阶段；逐实际阶段接续其余自有生产并保留上游负担 |
| starting_condition_role | 物理前景起始阶段及明确上游数据集接口 |
| product_classification_scope | CPC 3.0 04232 中养殖来源食用整条比目鱼子集;独立证实来源、形态、用途与门 |
| recursive_input_rule | 同类别购入鱼记录为实际阶段限定输入并附上游数据集边界;递归编制止于有记录供应商门，不抹去或重复上游生产 |
| upstream_dataset_requirement | 要求实际阶段/物种/来源、供应门、地域/时间、饲料/水/能源覆盖、成活/损失及归属相容;缺失负荷明确为数据缺口 |
| disclosure | 声明自有与购入阶段、所有选定水路线、资源/处理所有权、实际最终状态、首次交付、跨期延续及门后排除活动 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_scope` | all processes | 包含实际自有门前阶段及上游购入输入、收获与所选处理，止于首次生产者交付。排除门后运输、养殖、零售、烹饪和食用。 | `flatfish-foreground-method` |
| `boundary_parent` | hatchery; nursery; growout | 将自有/购入生物替代附着于受控生产父过程。实际阶段购入仅替代被省略自有阶段，不重复节点，不设零负荷苗种。 | `flatfish-foreground-method` |
| `boundary_biological_delta` | hatchery; nursery; growout | 每个实际阶段声明一个自有或购入阶段选项;不同阶段可共存，但同一阶段/鱼群不能同时包含供应商生产及自有重复生产。差异改变上游数据集覆盖与自有饲料/水/能源/健康及排放清单、阶段计数/质量和成活计算，以及繁殖/变态证据。仅自有繁殖阶段选择实际自然/诱导/人工繁殖，并证实对应处理/材料清单。 | `flatfish-foreground-method` |
| `boundary_water` | all water-using processes | 每单元期间确定实际流水、网箱或 RAS 拓扑，保留来源阶段处理/反冲洗/消毒与能源关联。环境取水、外供水、内部循环及最终排水相互区分。 | `flatfish-foreground-method` |
| `boundary_state` | growout; harvest; live_gate; whole_chill | 仅据实际鲜/冷藏发运记录启用 whole_chill；未启用必须证实活体交付。逐事件保留鱼体状态与适用性证据：活鱼可进入所选路线；自然死亡鱼仅在独立证实仍符合食用鲜品条件时进入 whole_chill，否则为死亡废物流，未知适用性不能算产品。同一鱼不得既计产品又计死亡废物。鲜/冷藏路线的实际致死前有界暂养及资源/损失由 whole_chill 承担，live_gate 不启用。每批仅一个最终输出；内部转移保持实测量而非固定 1 kg。 | `flatfish-foreground-method` |
| `boundary_shared` | all processes | 对共享泵、增氧、冷热、生物滤池、排水处理、亲鱼和池/网箱按实际使用者、鱼群及期间计量或分配一次，保留服务期、更换、终止及剩余能力记录。 | `flatfish-foreground-method` |
| `boundary_fate` | all processes | 在来源阶段记录死亡、拒收、逃逸、残饵/废培养物、废水/污泥、燃烧及制冷剂/物质释放。内部处理转移仅关联一次最终去向;未观察不等于零。 | `flatfish-foreground-method` |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `hatchery` | 亲鱼、孵化和仔鱼生产 | conditional | 实际自有亲鱼、孵卵或仔鱼生产 | 前景责任;实际批次或连续单元期间 | 每 1 kg 参考流 |
| `livefood` | 自有仔鱼活饵培养 | conditional | 实际自有微藻、轮虫、卤虫或其他已识别活饵培养 | 前景责任;实际批次或连续单元期间 | 每 1 kg 参考流 |
| `nursery` | 定居幼鱼培育 | conditional | 育成前实际自有育苗阶段 | 前景责任;实际批次或连续单元期间 | 每 1 kg 参考流 |
| `growout` | 底栖比目鱼育成 | required | 实际所选生产 | 前景责任;实际批次或连续单元期间 | 每 1 kg 参考流 |
| `harvest` | 独立比目鱼收获 | required | 实际所选生产 | 前景责任;实际批次或连续单元期间 | 每 1 kg 参考流 |
| `live_gate` | 最终门验收前有界活体暂养与包装 | conditional | 发运记录证实交付活的整条食用鱼且 whole_chill 未启用 | 前景责任;实际批次或连续单元期间 | 每 1 kg 参考流 |
| `whole_chill` | 最终门验收前致死前有界暂养及整鱼鲜品或冷藏保鲜 | conditional | 实际致死或发运鲜/冷藏整鱼；该批不启用 live_gate 节点 | 前景责任;实际批次或连续单元期间 | 每 1 kg 参考流 |
| `treatment` | 自有废水及固体处理 | conditional | 实际现场处理接收来源阶段排放 | 前景责任;实际批次或连续单元期间 | 每 1 kg 参考流 |
| `declared_gate_release` | 实际状态的最终验收与生产者交付 | required | 每个合格交付批次；仅接收一个已证实状态分支 | 唯一最终门、参考数量与验收拒收记录；不虚构重复包装或冷藏活动 | 最终验收净鱼体1千克 |

以下各过程按实际鱼群、单元、批次/生产批段或连续报告期间索引。已纳入过程的资源/排放卡以实际使用/释放为条件，不规定通用必用材料。共享计量和现场公用工程/处理转移仅归属一次，账簿保留每个来源阶段需求。条件性零不能代替证据缺失。辅助资产/供应服务记录保留实际供应单位、服务期、活动及使用者分配;未解析服务不用虚构 kg 交换表示。

### 过程：亲鱼、孵化和仔鱼生产 (`hatchery`)

受控生物生产父过程为 hatchery。按实际选择自然、诱导或人工繁殖，不规定统一激素做法。跟踪亲鱼取得、维持、更换和淘汰及跨产卵周期归属，以及孵化、卵黄消耗、开口摄食、变态、底栖定居和驯食;购入卵或仔鱼仅替代此前自有阶段并保留上游负荷。卵和仔鱼计数与实际鱼体湿质量分开。活的定居幼鱼交给育苗或育成。以下阶段资源与排放含清洁、健康事件、温光控制和启动。

#### 输入

##### 产品流

###### 外供经处理工业工艺水 (`hatchery_treated_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际外供且具备鱼接触/用途适宜性记录的处理工业水，排除自取/内部循环及供应商处理重复;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hatchery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 中国电网平均低压交流电消费组合到用户 (`hatchery_cn_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定： `fixed`
- 数量规则： 仅购入到用户的中国电网平均低于 1 kV 交流电，计量实际适用设备;其他供电单列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hatchery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 其他实际购入电力 (`hatchery_other_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：其他实际购入电力
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 实际地区、供应者、电压和组合不符合中国供电卡时使用，逐一识别供应;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hatchery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际供应且声明交付状态的氧气 (`hatchery_oxygen`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际供应且声明交付状态的氧气
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 测量实际氧气质量并识别纯度、压力、交付状态和供应者;现场空气/曝气计入设备能源而非购入氧;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hatchery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 从自有处理接收的内部回收水 (`hatchery_recovered_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：从自有处理接收的内部回收水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 仅实际从 treatment_reused_water 接收的内部回收水;按来源/接收阶段、转移事件编号、质量、期间及水质证据匹配。排除外供水和取水，不是总循环量或避免负荷抵扣。内部输出/输入数量匹配一次;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hatchery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

#### 输出

##### 产品流

###### 活的定居比目鱼幼鱼 (`hatchery_juveniles`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：活的定居比目鱼幼鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 记录有变态/定居证据后的实际转移湿鱼质量及尾数，排除水与失败/死亡仔鱼;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hatchery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

###### 不合格死亡或拒收整鱼 (`hatchery_mortality`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：不合格死亡或拒收整鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 称量实际鱼体并记录尾数、原因、阶段、食用资格与处置;损失保留生产负荷，只有食用适宜性证据齐备才转为合格鲜品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hatchery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

###### 直接向声明受纳水体排水 (`hatchery_water_release`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：直接向声明受纳水体排水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 以流量/时长/位置将实际环境排口水质量报告一次;处理转移归废水卡，营养物/物质负荷分列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hatchery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 向未细分空气排放的化石二氧化碳 (`hatchery_fossil_co2`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际直接化石燃烧;由计量燃料及独立证据因子或实测排放得出，不能是生物源 CO2、CO2eq 或购入气体;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hatchery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际逃逸比目鱼生物量 (`hatchery_escape`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际逃逸比目鱼生物量
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按物种、尾数、代表性鱼群称量支持的质量估计、来源单元和受纳栖境记录实际逃逸，不推定死亡或计为交付产品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_hatchery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：自有仔鱼活饵培养 (`livefood`)

仅实际自培时，以独立活饵批次供应孵化场。计入种源或休眠卵、营养盐、强化介质、实际水源、光照/加热/曝气能源、化学品、培养失败、收获损失、废培养液及释放。购入活饵改为孵化场上游输入;同批次不得重复计入购买与自培生产。活饵湿生物量排除培养水;计数或细胞密度仅作辅助，除非代表性质量测量支持转换。

#### 输入

##### 产品流

###### 外供经处理工业工艺水 (`livefood_treated_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际外供且具备鱼接触/用途适宜性记录的处理工业水，排除自取/内部循环及供应商处理重复;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_livefood`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 中国电网平均低压交流电消费组合到用户 (`livefood_cn_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定： `fixed`
- 数量规则： 仅购入到用户的中国电网平均低于 1 kV 交流电，计量实际适用设备;其他供电单列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_livefood`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 其他实际购入电力 (`livefood_other_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：其他实际购入电力
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 实际地区、供应者、电压和组合不符合中国供电卡时使用，逐一识别供应;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_livefood`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际供应且声明交付状态的氧气 (`livefood_oxygen`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际供应且声明交付状态的氧气
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 测量实际氧气质量并识别纯度、压力、交付状态和供应者;现场空气/曝气计入设备能源而非购入氧;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_livefood`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 从自有处理接收的内部回收水 (`livefood_recovered_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：从自有处理接收的内部回收水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 仅实际从 treatment_reused_water 接收的内部回收水;按来源/接收阶段、转移事件编号、质量、期间及水质证据匹配。排除外供水和取水，不是总循环量或避免负荷抵扣。内部输出/输入数量匹配一次;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_livefood`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 直接向声明受纳水体排水 (`livefood_water_release`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：直接向声明受纳水体排水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 以流量/时长/位置将实际环境排口水质量报告一次;处理转移归废水卡，营养物/物质负荷分列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_livefood`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 向未细分空气排放的化石二氧化碳 (`livefood_fossil_co2`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际直接化石燃烧;由计量燃料及独立证据因子或实测排放得出，不能是生物源 CO2、CO2eq 或购入气体;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_livefood`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：定居幼鱼培育 (`nursery`)

受控生物生产父过程为 nursery。接收自有孵化或有记录的购入阶段定居幼鱼，保留实际变态/定居及饵料转换证据。按适用性记录可用接触底面积、占用日期、鱼体质量/计数及分级/互食损失，不设置面积放养默认值。将实际幼鱼湿质量与尾数交给育成。直接购入可育成幼鱼时省去本自有节点并承接上游生产负荷。

#### 输入

##### 产品流

###### 外供经处理工业工艺水 (`nursery_treated_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际外供且具备鱼接触/用途适宜性记录的处理工业水，排除自取/内部循环及供应商处理重复;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 中国电网平均低压交流电消费组合到用户 (`nursery_cn_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定： `fixed`
- 数量规则： 仅购入到用户的中国电网平均低于 1 kV 交流电，计量实际适用设备;其他供电单列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 其他实际购入电力 (`nursery_other_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：其他实际购入电力
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 实际地区、供应者、电压和组合不符合中国供电卡时使用，逐一识别供应;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际供应且声明交付状态的氧气 (`nursery_oxygen`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际供应且声明交付状态的氧气
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 测量实际氧气质量并识别纯度、压力、交付状态和供应者;现场空气/曝气计入设备能源而非购入氧;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际进入本阶段的活比目鱼群 (`nursery_stock`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际进入本阶段的活比目鱼群
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 实际接收已识别自有上游节点或有记录购入幼鱼阶段的湿鱼质量和尾数，上游负荷计一次;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 从自有处理接收的内部回收水 (`nursery_recovered_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：从自有处理接收的内部回收水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 仅实际从 treatment_reused_water 接收的内部回收水;按来源/接收阶段、转移事件编号、质量、期间及水质证据匹配。排除外供水和取水，不是总循环量或避免负荷抵扣。内部输出/输入数量匹配一次;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

#### 输出

##### 产品流

###### 实际转给下一阶段的活鱼 (`nursery_fish`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际转给下一阶段的活鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 净湿生物量与尾数关联下一阶段及来源鱼群、成活和定居/底面积占用记录;内部转移不固定为 1 kg;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

###### 不合格死亡或拒收整鱼 (`nursery_mortality`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：不合格死亡或拒收整鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 称量实际鱼体并记录尾数、原因、阶段、食用资格与处置;损失保留生产负荷，只有食用适宜性证据齐备才转为合格鲜品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

###### 直接向声明受纳水体排水 (`nursery_water_release`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：直接向声明受纳水体排水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 以流量/时长/位置将实际环境排口水质量报告一次;处理转移归废水卡，营养物/物质负荷分列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 向未细分空气排放的化石二氧化碳 (`nursery_fossil_co2`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际直接化石燃烧;由计量燃料及独立证据因子或实测排放得出，不能是生物源 CO2、CO2eq 或购入气体;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际逃逸比目鱼生物量 (`nursery_escape`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际逃逸比目鱼生物量
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按物种、尾数、代表性鱼群称量支持的质量估计、来源单元和受纳栖境记录实际逃逸，不推定死亡或计为交付产品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_nursery`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：底栖比目鱼育成 (`growout`)

受控生物生产父过程为 growout。对已识别食用比目鱼群投喂并管理至实际可收获状态。测量可用底面积及占用时间，不假定所有鱼像圆体鱼一样利用水体积。技术差异按适用性附着于 hatchery/nursery/growout：实际泵送流水、证实的平底网箱或现场证实的 RAS，改变取水、电力、过滤、生物滤池、消毒、污泥/反冲洗和释放要求。不同单元可共存，但同一单元期间须确定一种拓扑;循环水为内部活动，不能反复计为取水。

#### 输入

##### 产品流

###### 外供经处理工业工艺水 (`growout_treated_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际外供且具备鱼接触/用途适宜性记录的处理工业水，排除自取/内部循环及供应商处理重复;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 中国电网平均低压交流电消费组合到用户 (`growout_cn_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定： `fixed`
- 数量规则： 仅购入到用户的中国电网平均低于 1 kV 交流电，计量实际适用设备;其他供电单列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 其他实际购入电力 (`growout_other_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：其他实际购入电力
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 实际地区、供应者、电压和组合不符合中国供电卡时使用，逐一识别供应;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际供应且声明交付状态的氧气 (`growout_oxygen`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际供应且声明交付状态的氧气
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 测量实际氧气质量并识别纯度、压力、交付状态和供应者;现场空气/曝气计入设备能源而非购入氧;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际进入本阶段的活比目鱼群 (`growout_stock`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际进入本阶段的活比目鱼群
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 实际接收已识别自有上游节点或有记录购入幼鱼阶段的湿鱼质量和尾数，上游负荷计一次;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 从自有处理接收的内部回收水 (`growout_recovered_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：从自有处理接收的内部回收水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 仅实际从 treatment_reused_water 接收的内部回收水;按来源/接收阶段、转移事件编号、质量、期间及水质证据匹配。排除外供水和取水，不是总循环量或避免负荷抵扣。内部输出/输入数量匹配一次;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

#### 输出

##### 产品流

###### 实际移交收获的养殖整条比目鱼 (`growout_fish`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流： 实际移交收获的养殖整条比目鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 将实测净湿质量及尾数与 harvest_ready_fish、来源鱼群和移出/回收事件匹配，分别记录活体与自然死亡状态。自然死亡鱼只有独立证实仍符合食用鲜品条件且实际走 whole_chill 时才作为产品移交；其他死亡计废物流，未知适用性不作为产品，同一鱼不得重复计两种去向。保留全部先前负担、成活及底面积占用记录；内部量不固定为 1 kg；每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

###### 不合格死亡或拒收整鱼 (`growout_mortality`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：不合格死亡或拒收整鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 称量实际鱼体并记录尾数、原因、阶段、食用资格与处置;损失保留生产负荷，只有食用适宜性证据齐备才转为合格鲜品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

###### 直接向声明受纳水体排水 (`growout_water_release`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：直接向声明受纳水体排水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 以流量/时长/位置将实际环境排口水质量报告一次;处理转移归废水卡，营养物/物质负荷分列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 向未细分空气排放的化石二氧化碳 (`growout_fossil_co2`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际直接化石燃烧;由计量燃料及独立证据因子或实测排放得出，不能是生物源 CO2、CO2eq 或购入气体;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际逃逸比目鱼生物量 (`growout_escape`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际逃逸比目鱼生物量
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按物种、尾数、代表性鱼群称量支持的质量估计、来源单元和受纳栖境记录实际逃逸，不推定死亡或计为交付产品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_growout`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：独立比目鱼收获 (`harvest`)

从实际池、流水槽或网箱移出鱼，或回收已有独立食用鲜品适用性证据的整鱼，形成按状态分别计量的收获批。该节点负责移出/回收、集鱼、网具/泵和分拣损失，独立于生长及后续致死或保鲜。逐来源鱼群和事件记录活体、合格鲜品、拒收、逃逸及不合格死亡；同一鱼不得既作产品又作死亡废物。活整鱼可进入所选 live_gate 或 whole_chill；已合格鲜整鱼只能进入 whole_chill，未知食用适用性不得算产品。内部输入输出保持实测量并携带先前负担。养殖收获不因此成为野生捕捞来源。

#### 输入

##### 产品流

###### 外供经处理工业工艺水 (`harvest_treated_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际外供且具备鱼接触/用途适宜性记录的处理工业水，排除自取/内部循环及供应商处理重复;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 中国电网平均低压交流电消费组合到用户 (`harvest_cn_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定： `fixed`
- 数量规则： 仅购入到用户的中国电网平均低于 1 kV 交流电，计量实际适用设备;其他供电单列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 其他实际购入电力 (`harvest_other_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：其他实际购入电力
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 实际地区、供应者、电压和组合不符合中国供电卡时使用，逐一识别供应;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际供应且声明交付状态的氧气 (`harvest_oxygen`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际供应且声明交付状态的氧气
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 测量实际氧气质量并识别纯度、压力、交付状态和供应者;现场空气/曝气计入设备能源而非购入氧;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际进入收获或回收的养殖比目鱼 (`harvest_ready_fish`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流： 实际进入收获或回收的养殖比目鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按移出/回收事件匹配 growout_fish 的实际来源单元、鱼群、状态、净湿质量与尾数；活体与独立证实食用适宜的鲜整鱼分别记录，后者仅交 whole_chill。不合格或未知适用性的死亡鱼不计产品；与废物流去向互斥，保留先前负担，不固定 1 kg；每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 从自有处理接收的内部回收水 (`harvest_recovered_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：从自有处理接收的内部回收水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 仅实际从 treatment_reused_water 接收的内部回收水;按来源/接收阶段、转移事件编号、质量、期间及水质证据匹配。排除外供水和取水，不是总循环量或避免负荷抵扣。内部输出/输入数量匹配一次;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

#### 输出

##### 产品流

###### 状态选择前的已收获整条比目鱼 (`harvest_collected_fish`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：状态选择前的已收获整条比目鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按事件记录扣除收获损失及拒收后的实际净整鱼湿质量/尾数与状态；活鱼交所选 live_gate 或 whole_chill，独立证实合格的鲜整鱼仅交 whole_chill。同一鱼不重复计死亡废物；与下游输入逐批匹配并携带全部先前负担，不固定为最终 1 kg；每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

###### 不合格死亡或拒收整鱼 (`harvest_mortality`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：不合格死亡或拒收整鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 称量实际鱼体并记录尾数、原因、阶段、食用资格与处置;损失保留生产负荷，只有食用适宜性证据齐备才转为合格鲜品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

###### 直接向声明受纳水体排水 (`harvest_water_release`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：直接向声明受纳水体排水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 以流量/时长/位置将实际环境排口水质量报告一次;处理转移归废水卡，营养物/物质负荷分列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 向未细分空气排放的化石二氧化碳 (`harvest_fossil_co2`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际直接化石燃烧;由计量燃料及独立证据因子或实测排放得出，不能是生物源 CO2、CO2eq 或购入气体;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际逃逸比目鱼生物量 (`harvest_escape`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际逃逸比目鱼生物量
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按物种、尾数、代表性鱼群称量支持的质量估计、来源单元和受纳栖境记录实际逃逸，不推定死亡或计为交付产品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_harvest`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：有界活体暂养、包装与生产者交付 (`live_gate`)

在首个生产者门前通过实际有界恢复/暂养、氧/水/温控及包装装载维持已收获整鱼活性。记录暂养时长、健康适宜性、运输水、氧、包装复用/清洗及门前损失，不隐藏后续受控育成。所装活鱼净生物量排除水、氧和包装。门后配送在边界外。

#### 输入

##### 产品流

###### 外供经处理工业工艺水 (`live_gate_treated_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际外供且具备鱼接触/用途适宜性记录的处理工业水，排除自取/内部循环及供应商处理重复;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 中国电网平均低压交流电消费组合到用户 (`live_gate_cn_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定： `fixed`
- 数量规则： 仅购入到用户的中国电网平均低于 1 kV 交流电，计量实际适用设备;其他供电单列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 其他实际购入电力 (`live_gate_other_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：其他实际购入电力
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 实际地区、供应者、电压和组合不符合中国供电卡时使用，逐一识别供应;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际供应且声明交付状态的氧气 (`live_gate_oxygen`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际供应且声明交付状态的氧气
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 测量实际氧气质量并识别纯度、压力、交付状态和供应者;现场空气/曝气计入设备能源而非购入氧;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 供活体交付的实际收获活整条比目鱼 (`live_gate_fish`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流： 供活体交付的实际收获活整条比目鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 仅接收 harvest_collected_fish 中实际存活且适宜活体交付的整鱼，逐批匹配状态、事件、实际净湿质量/尾数及先前负担；不接收鲜/死亡鱼。扣除边界内暂养损失后才形成最终产品，内部输入不等于最终 1 kg；每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 从自有处理接收的内部回收水 (`live_gate_recovered_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：从自有处理接收的内部回收水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 仅实际从 treatment_reused_water 接收的内部回收水;按来源/接收阶段、转移事件编号、质量、期间及水质证据匹配。排除外供水和取水，不是总循环量或避免负荷抵扣。内部输出/输入数量匹配一次;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

#### 输出

##### 产品流

###### 送最终生产者门验收的活养殖食用整条比目鱼 (`live_gate_final`)

本卡是所选状态预交付阶段的真实鱼体交接，不是最终参考输出；实际状态、批次和交接号必须与唯一最终验收节点一致。

- 选定流：送最终生产者门验收的活养殖食用整条比目鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：仅所选实际状态分支记录向 declared_gate_release 交付的实测净鱼体质量，按最终验收合格净交付质量归一化；不得固定为1千克；采用 cp_live_gate 及最终 cp_gate_release 配对交接、拒收和损失记录。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流;实际普通数量，内部转移不得固定
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`
##### 废物流

###### 不合格死亡或拒收整鱼 (`live_gate_mortality`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：不合格死亡或拒收整鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 称量实际鱼体并记录尾数、原因、阶段、食用资格与处置;损失保留生产负荷，只有食用适宜性证据齐备才转为合格鲜品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

###### 直接向声明受纳水体排水 (`live_gate_water_release`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：直接向声明受纳水体排水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 以流量/时长/位置将实际环境排口水质量报告一次;处理转移归废水卡，营养物/物质负荷分列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 向未细分空气排放的化石二氧化碳 (`live_gate_fossil_co2`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际直接化石燃烧;由计量燃料及独立证据因子或实测排放得出，不能是生物源 CO2、CO2eq 或购入气体;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际逃逸比目鱼生物量 (`live_gate_escape`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际逃逸比目鱼生物量
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按物种、尾数、代表性鱼群称量支持的质量估计、来源单元和受纳栖境记录实际逃逸，不推定死亡或计为交付产品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_live_gate`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：整鱼鲜品或冷藏保鲜及交付 (`whole_chill`)

接收收获活整鱼进行实际致死与整鱼鲜/冷藏处理；只有已独立证实食用适宜性时才可接收实际自然死亡但仍合格的鲜整鱼，不能仅凭自然死亡推断食用安全。鲜/冷藏批的全部实际致死前有界暂养由本节点承担，记录起止时间、存活、维护饵料、水、氧、热/电及损失；不启用 live_gate 或将其最终卡当内部输入，也不隐藏管理育成。保持未去头未去内脏形态，记录致死/死亡及处理时间、温度、冰、清洗、制冷、泄漏、拒收鱼与废水。不含去内脏、去头、切片或冻结。实际养殖用冰是独立需求，不能复用捕捞船用冰身份。包装装载计至首次生产者交付；产品质量排除冰/水/包装。

#### 输入

##### 产品流

###### 外供经处理工业工艺水 (`whole_chill_treated_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际外供且具备鱼接触/用途适宜性记录的处理工业水，排除自取/内部循环及供应商处理重复;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 中国电网平均低压交流电消费组合到用户 (`whole_chill_cn_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定： `fixed`
- 数量规则： 仅购入到用户的中国电网平均低于 1 kV 交流电，计量实际适用设备;其他供电单列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 其他实际购入电力 (`whole_chill_other_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：其他实际购入电力
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 实际地区、供应者、电压和组合不符合中国供电卡时使用，逐一识别供应;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际供应且声明交付状态的氧气 (`whole_chill_oxygen`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际供应且声明交付状态的氧气
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 测量实际氧气质量并识别纯度、压力、交付状态和供应者;现场空气/曝气计入设备能源而非购入氧;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 供鲜或冷藏交付的实际收获整条比目鱼 (`whole_chill_fish`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流： 供鲜或冷藏交付的实际收获整条比目鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按 harvest_collected_fish 匹配实际净湿质量/尾数、来源批、事件与先前负担，分别记录进入致死前暂养/致死的活鱼和已有独立食用适宜性证据的鲜整鱼；未知或不合格死亡鱼不接收为产品，不与死亡废物重复。该节点保留暂养、致死及冷藏损失，内部输入不固定最终 1 kg；每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际养殖整鱼保鲜冰 (`whole_chill_ice`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际养殖整鱼保鲜冰
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 计量实际鲜/冷藏批用冰及来源;购入或自制资源仅计一次;融冰排除鱼质量，不替代为捕捞船用冰;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 从自有处理接收的内部回收水 (`whole_chill_recovered_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：从自有处理接收的内部回收水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 仅实际从 treatment_reused_water 接收的内部回收水;按来源/接收阶段、转移事件编号、质量、期间及水质证据匹配。排除外供水和取水，不是总循环量或避免负荷抵扣。内部输出/输入数量匹配一次;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

#### 输出

##### 产品流

###### 送最终生产者门验收的鲜或冷藏养殖食用整条比目鱼 (`whole_chill_final`)

本卡是所选状态预交付阶段的真实鱼体交接，不是最终参考输出；实际状态、批次和交接号必须与唯一最终验收节点一致。

- 选定流：送最终生产者门验收的鲜或冷藏养殖食用整条比目鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：仅所选实际状态分支记录向 declared_gate_release 交付的实测净鱼体质量，按最终验收合格净交付质量归一化；不得固定为1千克；采用 cp_whole_chill 及最终 cp_gate_release 配对交接、拒收和损失记录。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流;实际普通数量，内部转移不得固定
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`
##### 废物流

###### 不合格死亡或拒收整鱼 (`whole_chill_mortality`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：不合格死亡或拒收整鱼
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 称量实际鱼体并记录尾数、原因、阶段、食用资格与处置;损失保留生产负荷，只有食用适宜性证据齐备才转为合格鲜品;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

###### 直接向声明受纳水体排水 (`whole_chill_water_release`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：直接向声明受纳水体排水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 以流量/时长/位置将实际环境排口水质量报告一次;处理转移归废水卡，营养物/物质负荷分列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 向未细分空气排放的化石二氧化碳 (`whole_chill_fossil_co2`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际直接化石燃烧;由计量燃料及独立证据因子或实测排放得出，不能是生物源 CO2、CO2eq 或购入气体;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际逃逸比目鱼生物量 (`whole_chill_escape`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际逃逸比目鱼生物量
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 仅记录鲜/冷藏批致死前有界暂养实际活鱼逃逸，按物种、尾数、同鱼群代表性称重估算湿质量、来源单元、事件和接收栖息地归属；不推断死亡，不计交付产品或死亡废物。逐事件匹配存量/转移台账，仅证实未发生才记零；每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_whole_chill`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：自有废水及固体处理 (`treatment`)

以唯一转移/事件编号接收来源阶段废水、反冲洗水、废培养液及固体，按实际分离/处理设备处理，并将最终废物交接和环境排放计一次。识别 hatchery/livefood/nursery/growout/harvest/live_gate/whole_chill 各贡献者、处理期间与使用单元。来源阶段直接排放改在其来源报告;内部处理转移不得同时计为环境直接排放。回用水保持内部流;核对最终氮/磷及实际健康用物质种类。

#### 输入

##### 产品流

###### 外供经处理工业工艺水 (`treatment_treated_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：仅实际外购且与该UUID一致的经处理工业过程水可使用此绑定。供应规格与现场证据必须证明其水质、盐度适用于明确的动物接触、载水、清洗或制冰用途；不得假定现场使用工业水。实际取水、淡水/海水、其他等级及内循环须分别独立核实身份与数量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际外供且具备鱼接触/用途适宜性记录的处理工业水，排除自取/内部循环及供应商处理重复;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_treatment`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 中国电网平均低压交流电消费组合到用户 (`treatment_cn_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 绑定： `fixed`
- 数量规则： 仅购入到用户的中国电网平均低于 1 kV 交流电，计量实际适用设备;其他供电单列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_treatment`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 其他实际购入电力 (`treatment_other_power`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：其他实际购入电力
- 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 实际地区、供应者、电压和组合不符合中国供电卡时使用，逐一识别供应;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_treatment`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 10000
  - 单位： MJ
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 实际供应且声明交付状态的氧气 (`treatment_oxygen`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际供应且声明交付状态的氧气
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 测量实际氧气质量并识别纯度、压力、交付状态和供应者;现场空气/曝气计入设备能源而非购入氧;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_treatment`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

###### 内部来源阶段废水及处理回流 (`treatment_return_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：内部来源阶段废水及处理回流
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 按唯一来源转移编号实测接收水质量，与来源废物输出内部匹配，不增第二次外部负荷;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_treatment`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 基本流

#### 输出

##### 产品流

###### 实际回收供内部复用的水 (`treatment_reused_water`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：实际回收供内部复用的水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 计量实际回收交给确定阶段的水，附质量/处理证据;仅内部循环，不抵扣外供水;每 1 kg 参考流。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_treatment`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

##### 废物流

##### 基本流

###### 直接向声明受纳水体排水 (`treatment_water_release`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：直接向声明受纳水体排水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 以流量/时长/位置将实际环境排口水质量报告一次;处理转移归废水卡，营养物/物质负荷分列;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_treatment`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

###### 向未细分空气排放的化石二氧化碳 (`treatment_fossil_co2`)

使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 绑定： `fixed`
- 数量规则： 仅实际直接化石燃烧;由计量燃料及独立证据因子或实测排放得出，不能是生物源 CO2、CO2eq 或购入气体;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。
- 数值来源模式： `calculated_value`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_treatment`
- 来源： `flatfish-foreground-method`
- 数量范围： 实际数量的可替换暂定筛查范围
  - 范围角色： `qa_guardrail`
  - 下限： 0
  - 上限： 1000
  - 单位： kg
  - 基准： 每 1 kg 参考流
  - 基准类型： `reference_flow`
  - 证据类型： `reasoned_estimate`

### 过程：实际状态的最终验收与生产者交付（`declared_gate_release`）

此节点是实际生产者门验收与放行责任。仅接收 live_gate_final 或 whole_chill_final 之一，按所选批次实际状态接收；两路不合并且不视为等价服务。所有实际操作资源在其真正责任节点记录一次；本节点不自动增加另一套冷藏、包装或运输。

#### 输入

##### 产品流

###### 最终验收接收的实际状态养殖食用整条比目鱼 (`flatfish_gate_receipt`)

按实际物种、整条未去头未去内脏状态、养殖及食用资格和批次交接证据记录；未知状态不得放行，不得沿用另一分支UUID。

- 选定流：最终验收接收的实际状态养殖食用整条比目鱼
- 流属性/单位：Mass / kg
- 数量规则：所选分支实测交接净鱼体质量，独立记录验收拒收和损失，按最终合格净交付质量归一化，不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_release`

#### 输出

##### 产品流

###### 首次生产者交付的实际状态养殖食用整条比目鱼 (`flatfish_gate_release`)

按实际物种、整条未去头未去内脏状态、养殖及食用资格和批次交接证据记录；未知状态不得放行，不得沿用另一分支UUID。

- 选定流：首次生产者交付的实际状态养殖食用整条比目鱼
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_release`

##### 废物流

###### 最终验收拒收并送处置的整条养殖比目鱼 (`flatfish_gate_rejects`)

按实际物种、整条未去头未去内脏状态、养殖及食用资格和批次交接证据记录；未知状态不得放行，不得沿用另一分支UUID。

- 选定流：最终验收拒收并送处置的整条养殖比目鱼
- 流属性/单位：Mass / kg
- 数量规则：实际不合格且送实证处置去向的净鱼体实测质量，保留其上游负荷，按最终合格净交付质量归一化；仅有证据证明无拒收时为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_release`

##### 基本流

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_precedence` | common burdens | 先拆分独立计量阶段。剩余共同负荷用有证据的因果活动：泵/冷热/氧需求、处理实测负荷，或可代表实际占用的底面积-时间。记录驱动及分母，不假定湿鱼质量必然有因果关系。 | `ghg-product-allocation-2011`; `flatfish-foreground-method` |
| `allocation_outputs` | intended products | 在实际交付点枚举所有目标销售输出，包括食用规格等级、独立出售苗种/卵或合格淘汰亲鱼（如有）。内部转移不是额外产品。死亡/废物负荷保留在生产，不自动给予避免负荷抵扣。 | `ghg-product-allocation-2011`; `flatfish-foreground-method` |
| `allocation_fallback` | remaining common burdens | 无法建立因果物理关系时，用实际同期间价格和数量论证共同交付点经济比例，披露合理替代的敏感性。可比输出采用同一方法，不无解释混用。 | `ghg-product-allocation-2011`; `flatfish-foreground-method` |
| `allocation_period` | cohorts; assets; broodstock | 索引实际批次/连续单元期间、清洁换批、期初/期末活存量及转移负荷。未完成鱼群负荷仅结转一次;亲鱼维持按有证据产卵输出/周期分担，不虚构寿命。记录更换、淘汰和终止去向。 | `ghg-product-allocation-2011`; `flatfish-foreground-method` |
| `allocation_assets` | shared assets and contracted services | 枚举泵、池、网箱、冷库、运输/装载或承包服务的所有使用节点与期间。按共同电表/发票/事件编号去重。未知服务身份保留在辅助供应者活动账并用实际单位，不构造泛化 kg 服务。 | `ghg-product-allocation-2011`; `flatfish-foreground-method` |
| `allocation_internal_extension` | all exchanges | 比目鱼前景方法将本分配顺序用于资源、非温室气体交换以及排放。此为明确内部扩展，不宣称完全符合产品标准。 | `ghg-product-allocation-2011`; `flatfish-foreground-method` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_hatchery` | `hatchery` | 所有实际阶段输入、转移与去向 | 原始计量、鱼群、健康、发票及实验室记录 | 鱼群/单元/来源阶段/事件/转移编号;物种/阶段/尾数;代表性净湿取样体重与皮重;期初/期末存量;阶段饲料水分;实际材料/物质/供应者/状态;原量/单位;水源/盐度/温度/密度/流量/时长/背景;氮磷物种及化学;底面积及占用日期;计量/燃料/冷热/氧;清洁/健康剂量;制冷剂充注/补充/回收;废水/污泥/拒收/死亡/逃逸及目的地;最终状态/门;资产/服务期及分配驱动 | 校准称量/计量、实际发票与存量核对、代表性鱼群取样及不确定性;时间匹配进出水实验室结果和实际释放的验证组成/因子;明确保留未计量缺口 | kg; MJ; count; m2; day; source volume/density/concentration units | 每转移、投喂/健康/清洁/收获/发运事件;按适当运行间隔计量及排口取样 | 完整相关生物周期及匹配报告期，含启动与跨期 | 仅实际所选单元及关联共享服务 | 每 1 kg 参考流 | 校准、交接链、取样方案、实验室质控/检出限、发票、核对存量/去向及分配账;现场路线证据 |
| `cp_livefood` | `livefood` | 所有实际阶段输入、转移与去向 | 原始计量、鱼群、健康、发票及实验室记录 | 鱼群/单元/来源阶段/事件/转移编号;物种/阶段/尾数;代表性净湿取样体重与皮重;期初/期末存量;阶段饲料水分;实际材料/物质/供应者/状态;原量/单位;水源/盐度/温度/密度/流量/时长/背景;氮磷物种及化学;底面积及占用日期;计量/燃料/冷热/氧;清洁/健康剂量;制冷剂充注/补充/回收;废水/污泥/拒收/死亡/逃逸及目的地;最终状态/门;资产/服务期及分配驱动 | 校准称量/计量、实际发票与存量核对、代表性鱼群取样及不确定性;时间匹配进出水实验室结果和实际释放的验证组成/因子;明确保留未计量缺口 | kg; MJ; count; m2; day; source volume/density/concentration units | 每转移、投喂/健康/清洁/收获/发运事件;按适当运行间隔计量及排口取样 | 完整相关生物周期及匹配报告期，含启动与跨期 | 仅实际所选单元及关联共享服务 | 每 1 kg 参考流 | 校准、交接链、取样方案、实验室质控/检出限、发票、核对存量/去向及分配账;现场路线证据 |
| `cp_nursery` | `nursery` | 所有实际阶段输入、转移与去向 | 原始计量、鱼群、健康、发票及实验室记录 | 鱼群/单元/来源阶段/事件/转移编号;物种/阶段/尾数;代表性净湿取样体重与皮重;期初/期末存量;阶段饲料水分;实际材料/物质/供应者/状态;原量/单位;水源/盐度/温度/密度/流量/时长/背景;氮磷物种及化学;底面积及占用日期;计量/燃料/冷热/氧;清洁/健康剂量;制冷剂充注/补充/回收;废水/污泥/拒收/死亡/逃逸及目的地;最终状态/门;资产/服务期及分配驱动 | 校准称量/计量、实际发票与存量核对、代表性鱼群取样及不确定性;时间匹配进出水实验室结果和实际释放的验证组成/因子;明确保留未计量缺口 | kg; MJ; count; m2; day; source volume/density/concentration units | 每转移、投喂/健康/清洁/收获/发运事件;按适当运行间隔计量及排口取样 | 完整相关生物周期及匹配报告期，含启动与跨期 | 仅实际所选单元及关联共享服务 | 每 1 kg 参考流 | 校准、交接链、取样方案、实验室质控/检出限、发票、核对存量/去向及分配账;现场路线证据 |
| `cp_growout` | `growout` | 所有实际阶段输入、转移与去向 | 原始计量、鱼群、健康、发票及实验室记录 | 鱼群/单元/来源阶段/事件/转移编号;物种/阶段/尾数;代表性净湿取样体重与皮重;期初/期末存量;阶段饲料水分;实际材料/物质/供应者/状态;原量/单位;水源/盐度/温度/密度/流量/时长/背景;氮磷物种及化学;底面积及占用日期;计量/燃料/冷热/氧;清洁/健康剂量;制冷剂充注/补充/回收;废水/污泥/拒收/死亡/逃逸及目的地;最终状态/门;资产/服务期及分配驱动 | 校准称量/计量、实际发票与存量核对、代表性鱼群取样及不确定性;时间匹配进出水实验室结果和实际释放的验证组成/因子;明确保留未计量缺口 | kg; MJ; count; m2; day; source volume/density/concentration units | 每转移、投喂/健康/清洁/收获/发运事件;按适当运行间隔计量及排口取样 | 完整相关生物周期及匹配报告期，含启动与跨期 | 仅实际所选单元及关联共享服务 | 每 1 kg 参考流 | 校准、交接链、取样方案、实验室质控/检出限、发票、核对存量/去向及分配账;现场路线证据 |
| `cp_harvest` | `harvest` | 所有实际阶段输入、转移与去向 | 原始计量、鱼群、健康、发票及实验室记录 | 鱼群/单元/来源阶段/事件/转移编号;物种/阶段/尾数;代表性净湿取样体重与皮重;期初/期末存量;阶段饲料水分;实际材料/物质/供应者/状态;原量/单位;水源/盐度/温度/密度/流量/时长/背景;氮磷物种及化学;底面积及占用日期;计量/燃料/冷热/氧;清洁/健康剂量;制冷剂充注/补充/回收;废水/污泥/拒收/死亡/逃逸及目的地;最终状态/门;资产/服务期及分配驱动 | 校准称量/计量、实际发票与存量核对、代表性鱼群取样及不确定性;时间匹配进出水实验室结果和实际释放的验证组成/因子;明确保留未计量缺口 | kg; MJ; count; m2; day; source volume/density/concentration units | 每转移、投喂/健康/清洁/收获/发运事件;按适当运行间隔计量及排口取样 | 完整相关生物周期及匹配报告期，含启动与跨期 | 仅实际所选单元及关联共享服务 | 每 1 kg 参考流 | 校准、交接链、取样方案、实验室质控/检出限、发票、核对存量/去向及分配账;现场路线证据 |
| `cp_live_gate` | `live_gate` | 所有实际阶段输入、转移与去向 | 原始计量、鱼群、健康、发票及实验室记录 | 鱼群/单元/来源阶段/事件/转移编号;物种/阶段/尾数;代表性净湿取样体重与皮重;期初/期末存量;阶段饲料水分;实际材料/物质/供应者/状态;原量/单位;水源/盐度/温度/密度/流量/时长/背景;氮磷物种及化学;底面积及占用日期;计量/燃料/冷热/氧;清洁/健康剂量;制冷剂充注/补充/回收;废水/污泥/拒收/死亡/逃逸及目的地;最终状态/门;资产/服务期及分配驱动 | 校准称量/计量、实际发票与存量核对、代表性鱼群取样及不确定性;时间匹配进出水实验室结果和实际释放的验证组成/因子;明确保留未计量缺口 | kg; MJ; count; m2; day; source volume/density/concentration units | 每转移、投喂/健康/清洁/收获/发运事件;按适当运行间隔计量及排口取样 | 完整相关生物周期及匹配报告期，含启动与跨期 | 仅实际所选单元及关联共享服务 | 每 1 kg 参考流 | 校准、交接链、取样方案、实验室质控/检出限、发票、核对存量/去向及分配账;现场路线证据 |
| `cp_whole_chill` | `whole_chill` | 所有实际阶段输入、转移与去向 | 原始计量、鱼群、健康、发票及实验室记录 | 鱼体状态及独立食用适宜性证据；致死/死亡时间；致死前暂养起止、存活、维护饵料及去向；鱼群/单元/来源阶段/事件/转移编号;物种/阶段/尾数;代表性净湿取样体重与皮重;期初/期末存量;阶段饲料水分;实际材料/物质/供应者/状态;原量/单位;水源/盐度/温度/密度/流量/时长/背景;氮磷物种及化学;底面积及占用日期;计量/燃料/冷热/氧;清洁/健康剂量;制冷剂充注/补充/回收;废水/污泥/拒收/死亡/逃逸及目的地;最终状态/门;资产/服务期及分配驱动 | 校准称量/计量、实际发票与存量核对、代表性鱼群取样及不确定性;时间匹配进出水实验室结果和实际释放的验证组成/因子;明确保留未计量缺口 | kg; MJ; count; m2; day; source volume/density/concentration units | 每转移、投喂/健康/清洁/收获/发运事件;按适当运行间隔计量及排口取样 | 完整相关生物周期及匹配报告期，含启动与跨期 | 仅实际所选单元及关联共享服务 | 每 1 kg 参考流 | 校准、交接链、取样方案、实验室质控/检出限、发票、核对存量/去向及分配账;现场路线证据 |
| `cp_treatment` | `treatment` | 所有实际阶段输入、转移与去向 | 原始计量、鱼群、健康、发票及实验室记录 | 鱼群/单元/来源阶段/事件/转移编号;物种/阶段/尾数;代表性净湿取样体重与皮重;期初/期末存量;阶段饲料水分;实际材料/物质/供应者/状态;原量/单位;水源/盐度/温度/密度/流量/时长/背景;氮磷物种及化学;底面积及占用日期;计量/燃料/冷热/氧;清洁/健康剂量;制冷剂充注/补充/回收;废水/污泥/拒收/死亡/逃逸及目的地;最终状态/门;资产/服务期及分配驱动 | 校准称量/计量、实际发票与存量核对、代表性鱼群取样及不确定性;时间匹配进出水实验室结果和实际释放的验证组成/因子;明确保留未计量缺口 | kg; MJ; count; m2; day; source volume/density/concentration units | 每转移、投喂/健康/清洁/收获/发运事件;按适当运行间隔计量及排口取样 | 完整相关生物周期及匹配报告期，含启动与跨期 | 仅实际所选单元及关联共享服务 | 每 1 kg 参考流 | 校准、交接链、取样方案、实验室质控/检出限、发票、核对存量/去向及分配账;现场路线证据 |
| `cp_gate_release` | `declared_gate_release` | 最终鱼体接收、拒收和唯一参考放行 | 校准称重、批次与验收台账 | 批次；所选分支与配对交接号；实际物种和状态；到门净鱼体；毛重/皮重；水冰包装；拒收与处置；损失；验收合格净交付质量；买方/门/时间；操作资源所有者 | 校准秤核对同批次到门、拒收及最终验收净鱼体；排除水冰包装，逐项核对实际状态与资格，收集损失、去向和资源归属；未知不能当零 | kg | 每批次及最终交付 | 相同所选状态批次和报告期 | 唯一声明生产者交付门 | 每 1 kg 参考流 | 校准、称重、实际状态、配对交接、验收和处置证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | 所有清单行 | 汇总匹配鱼群/期间实际可归属阶段量，各自除以交付合格净湿鱼质量 kg，报告每 1 kg 参考流。仅计实际所选最终状态;保留实际内部转移产出。 | 原始量;分配比例;实际净交付鱼质量;cp_harvest;cp_live_gate;cp_whole_chill | 原相容属性/单位的归一化交换 | `flatfish-foreground-method` |
| `count_mass` | 鱼与活饵转移 | 仅取样可信时以实际鱼群计数乘代表性实测个体湿生物量;保留排水/扣皮、分层和不确定性。卵/细胞计数无统一鱼质量等价。 | 实际计数;实测样本质量;样本计数;皮重;阶段 | 实际阶段限定湿生物量 | `flatfish-foreground-method` |
| `outfall_load` | 直接物质释放 | 经明确背景、物种/元素及单位转换后，积分匹配流量乘时长乘浓度，保留净/总选择及不确定性。饲料投入平衡估计须组成、保留生长和全部移出去向;不将饲料营养投入等同直接排放。 | 流量;时长;进出浓度;物质基准;实验室质控 | 向已识别介质排放的实际物质 kg | `flatfish-foreground-method` |
| `combustion_leak` | 燃料排放及逸散释放 | 用实际燃料量及独立支持组成/排放因子或直接测量;区分化石/生物碳。制冷剂按实际物质/事件核对期初充注、补充、回收及期末量，不规定默认因子。 | 实际燃料/充注;核实因子或监测;事件及设备记录 | 按来源阶段和受纳空气的实际物质 kg | `flatfish-foreground-method` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 参考及路线 | 独立识别实际物种、养殖/食用用途、整鱼状态、门和各自有/购入阶段;证实当前拓扑，不引入大菱鲆配方。 | 分类记录;供应商/现场/发运证据 |
| `quality_closure` | 鱼群及环境 | 核对全部存量阶段与转移编号、生长、饲料水分、死亡/逃逸/拒收;保留各阶段去向和排口实验室质控;披露剩余平衡与检出限。 | 原始账、校准和实验室质控 |
| `quality_coverage` | 全部数量 | 不得以无声零值替代省略自有阶段、资源、排放或供应负荷。声明实测、计算或估计覆盖及不确定性;暂定 QA 范围不补缺失观测。 | 覆盖与不确定性登记;flatfish-foreground-method |
| `quality_attribution` | 共同期间/产品/资产 | 单一驱动/期间账枚举全部使用者和输出，并一次核对计量/发票总额，含亲鱼、未完成鱼群、更换及服务活动。 | 分配账及敏感性;ghg-product-allocation-2011 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_hatchery_other_water` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 明确饮用水、淡水或外供海水身份、供应者及处理，与工业工艺水区分;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_fuel` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“实际设备或备用发电机燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各实际燃料及净质量，若体积计量则附密度，记录设备和燃烧去向;不替代为渔船燃料;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_heat` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“外供加热或冷却能源”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则： 计量实际购入热能及供应者，不重复计入产生同一冷热的自有燃料或电力;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_chemicals` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“实际健康、清洁或水处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 逐项列实际材料、配方/活性成分、用量/事件、授权/现场记录及去向，不规定必用药物;仅实际使用时含缓冲盐类或处理介质;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_brood` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“实际上游亲鱼、卵或仔鱼”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 逐实际购入物种、材料与生命阶段分别实例化亲鱼、卵或仔鱼，记录来源、供应商门、上游负担及接续自有阶段；区分补充亲鱼与跨期保有量。记录实际湿质量及辅助卵数/尾数，仔鱼用同阶段代表性样本称重，不能将卵数通用换算为鱼质量；每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_feed` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“分阶段亲鱼及仔鱼饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各购入饲料、活饵或自有 livefood 转移，记录干湿质量、水分和阶段，残饵单列;活饵生产不免费;按每 1 kg 参考流归属。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_refrigerant` | `hatchery`; 输入; 产品流 | 必须辨认并分别采集“实际供应给阶段设备的制冷剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅实际供应/充注至已识别设备的具体制冷剂;关联期初/新装/补充/回收/期末充注及服务期，不自动等同泄漏;共享设备分配一次;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_abstraction` | `hatchery`; 输入; 基本流 | 必须辨认并分别采集“实际按水源区分的取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅自环境取水，明确淡水/半咸水/海水水源;实测质量或体积配实际密度;排除外供及重复循环;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_co_products` | `hatchery`; 输出; 产品流 | 必须辨认并分别采集“实际独立出售的孵化场产品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 枚举实际出售卵、苗种或合格淘汰亲鱼、用途/状态及交付点;不是最终食用比目鱼参考;明确归属共同负荷;每 1 kg 参考流实际湿质量。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_effluent` | `hatchery`; 输出; 废物流 | 必须辨认并分别采集“交付处理的废水或废培养液”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 计量实际水及负荷/化学品、处理转移编号和目的地;不是环境直接释放;现场转移属内部流;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_solids` | `hatchery`; 输出; 废物流 | 必须辨认并分别采集“实际固体、污泥、废材料及包装废品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 区分各废物身份、干湿基准、污染、残饵或失败培养物、收集位置和目的地，不自动给予副产品抵扣;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_nutrients` | `hatchery`; 输出; 基本流 | 必须辨认并分别采集“实际向水体释放的氮磷物种”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：实例化各实测/建模实际氮磷物种及受纳介质;保留元素/物种基准、浓度、背景、流量、时长及实验室质控;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_substances` | `hatchery`; 输出; 基本流 | 必须辨认并分别采集“其他实际直接物质排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：按物质、空气/水/土壤介质及证据实例化实际健康物质、消毒剂、燃烧污染物或处理气体，不用无证据零值或泛污染物 UUID;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_hatchery_leak` | `hatchery`; 输出; 基本流 | 必须辨认并分别采集“实际制冷剂或其他逸散物质泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 记录向空气释放的实际物质充注、补充、回收及泄漏事件平衡，识别本阶段制冷设备，不假设统一制冷剂;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_hatchery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_other_water` | `livefood`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 明确饮用水、淡水或外供海水身份、供应者及处理，与工业工艺水区分;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_fuel` | `livefood`; 输入; 产品流 | 必须辨认并分别采集“实际设备或备用发电机燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各实际燃料及净质量，若体积计量则附密度，记录设备和燃烧去向;不替代为渔船燃料;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_heat` | `livefood`; 输入; 产品流 | 必须辨认并分别采集“外供加热或冷却能源”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则： 计量实际购入热能及供应者，不重复计入产生同一冷热的自有燃料或电力;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_chemicals` | `livefood`; 输入; 产品流 | 必须辨认并分别采集“实际健康、清洁或水处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 逐项列实际材料、配方/活性成分、用量/事件、授权/现场记录及去向，不规定必用药物;仅实际使用时含缓冲盐类或处理介质;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_culture` | `livefood`; 输入; 产品流 | 必须辨认并分别采集“活饵种源、休眠卵、营养和强化物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 分开各实际供应培养物及干湿组成，记录批次饵料/营养投入，不假设藻/轮虫/卤虫免费;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_refrigerant` | `livefood`; 输入; 产品流 | 必须辨认并分别采集“实际供应给阶段设备的制冷剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅实际供应/充注至已识别设备的具体制冷剂;关联期初/新装/补充/回收/期末充注及服务期，不自动等同泄漏;共享设备分配一次;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_abstraction` | `livefood`; 输入; 基本流 | 必须辨认并分别采集“实际按水源区分的取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅自环境取水，明确淡水/半咸水/海水水源;实测质量或体积配实际密度;排除外供及重复循环;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_food` | `livefood`; 输出; 产品流 | 必须辨认并分别采集“实际培养的仔鱼活饵”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 实际沥水活饵湿生物量交给确定仔鱼投喂事件，保留辅助生物/细胞计数及核实取样质量转换;失败培养物归废物;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_effluent` | `livefood`; 输出; 废物流 | 必须辨认并分别采集“交付处理的废水或废培养液”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 计量实际水及负荷/化学品、处理转移编号和目的地;不是环境直接释放;现场转移属内部流;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_solids` | `livefood`; 输出; 废物流 | 必须辨认并分别采集“实际固体、污泥、废材料及包装废品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 区分各废物身份、干湿基准、污染、残饵或失败培养物、收集位置和目的地，不自动给予副产品抵扣;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_nutrients` | `livefood`; 输出; 基本流 | 必须辨认并分别采集“实际向水体释放的氮磷物种”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：实例化各实测/建模实际氮磷物种及受纳介质;保留元素/物种基准、浓度、背景、流量、时长及实验室质控;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_substances` | `livefood`; 输出; 基本流 | 必须辨认并分别采集“其他实际直接物质排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：按物质、空气/水/土壤介质及证据实例化实际健康物质、消毒剂、燃烧污染物或处理气体，不用无证据零值或泛污染物 UUID;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_livefood_leak` | `livefood`; 输出; 基本流 | 必须辨认并分别采集“实际制冷剂或其他逸散物质泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 记录向空气释放的实际物质充注、补充、回收及泄漏事件平衡，识别本阶段制冷设备，不假设统一制冷剂;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_livefood` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_other_water` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 明确饮用水、淡水或外供海水身份、供应者及处理，与工业工艺水区分;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_fuel` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“实际设备或备用发电机燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各实际燃料及净质量，若体积计量则附密度，记录设备和燃烧去向;不替代为渔船燃料;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_heat` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“外供加热或冷却能源”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则： 计量实际购入热能及供应者，不重复计入产生同一冷热的自有燃料或电力;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_chemicals` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“实际健康、清洁或水处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 逐项列实际材料、配方/活性成分、用量/事件、授权/现场记录及去向，不规定必用药物;仅实际使用时含缓冲盐类或处理介质;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_feed` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“实际阶段专用比目鱼饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各饲料和原料来源、干湿基准及水分，按鱼群/日期计量领用/退回及残饵;不设统一饵料系数;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_refrigerant` | `nursery`; 输入; 产品流 | 必须辨认并分别采集“实际供应给阶段设备的制冷剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅实际供应/充注至已识别设备的具体制冷剂;关联期初/新装/补充/回收/期末充注及服务期，不自动等同泄漏;共享设备分配一次;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_abstraction` | `nursery`; 输入; 基本流 | 必须辨认并分别采集“实际按水源区分的取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅自环境取水，明确淡水/半咸水/海水水源;实测质量或体积配实际密度;排除外供及重复循环;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_co_products` | `nursery`; 输出; 产品流 | 必须辨认并分别采集“其他实际独立销售鱼”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 列明实际物种、规格、用途、交付市场状态及归属决定;内部等级转移不计出售总量;每 1 kg 参考流实际质量。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_effluent` | `nursery`; 输出; 废物流 | 必须辨认并分别采集“交付处理的废水或废培养液”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 计量实际水及负荷/化学品、处理转移编号和目的地;不是环境直接释放;现场转移属内部流;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_solids` | `nursery`; 输出; 废物流 | 必须辨认并分别采集“实际固体、污泥、废材料及包装废品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 区分各废物身份、干湿基准、污染、残饵或失败培养物、收集位置和目的地，不自动给予副产品抵扣;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_nutrients` | `nursery`; 输出; 基本流 | 必须辨认并分别采集“实际向水体释放的氮磷物种”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：实例化各实测/建模实际氮磷物种及受纳介质;保留元素/物种基准、浓度、背景、流量、时长及实验室质控;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_substances` | `nursery`; 输出; 基本流 | 必须辨认并分别采集“其他实际直接物质排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：按物质、空气/水/土壤介质及证据实例化实际健康物质、消毒剂、燃烧污染物或处理气体，不用无证据零值或泛污染物 UUID;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_nursery_leak` | `nursery`; 输出; 基本流 | 必须辨认并分别采集“实际制冷剂或其他逸散物质泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 记录向空气释放的实际物质充注、补充、回收及泄漏事件平衡，识别本阶段制冷设备，不假设统一制冷剂;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_nursery` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_other_water` | `growout`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 明确饮用水、淡水或外供海水身份、供应者及处理，与工业工艺水区分;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_fuel` | `growout`; 输入; 产品流 | 必须辨认并分别采集“实际设备或备用发电机燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各实际燃料及净质量，若体积计量则附密度，记录设备和燃烧去向;不替代为渔船燃料;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_heat` | `growout`; 输入; 产品流 | 必须辨认并分别采集“外供加热或冷却能源”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则： 计量实际购入热能及供应者，不重复计入产生同一冷热的自有燃料或电力;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_chemicals` | `growout`; 输入; 产品流 | 必须辨认并分别采集“实际健康、清洁或水处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 逐项列实际材料、配方/活性成分、用量/事件、授权/现场记录及去向，不规定必用药物;仅实际使用时含缓冲盐类或处理介质;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_feed` | `growout`; 输入; 产品流 | 必须辨认并分别采集“实际阶段专用比目鱼饲料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各饲料和原料来源、干湿基准及水分，按鱼群/日期计量领用/退回及残饵;不设统一饵料系数;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_refrigerant` | `growout`; 输入; 产品流 | 必须辨认并分别采集“实际供应给阶段设备的制冷剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅实际供应/充注至已识别设备的具体制冷剂;关联期初/新装/补充/回收/期末充注及服务期，不自动等同泄漏;共享设备分配一次;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_abstraction` | `growout`; 输入; 基本流 | 必须辨认并分别采集“实际按水源区分的取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅自环境取水，明确淡水/半咸水/海水水源;实测质量或体积配实际密度;排除外供及重复循环;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_co_products` | `growout`; 输出; 产品流 | 必须辨认并分别采集“其他实际独立销售鱼”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 列明实际物种、规格、用途、交付市场状态及归属决定;内部等级转移不计出售总量;每 1 kg 参考流实际质量。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_effluent` | `growout`; 输出; 废物流 | 必须辨认并分别采集“交付处理的废水或废培养液”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 计量实际水及负荷/化学品、处理转移编号和目的地;不是环境直接释放;现场转移属内部流;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_solids` | `growout`; 输出; 废物流 | 必须辨认并分别采集“实际固体、污泥、废材料及包装废品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 区分各废物身份、干湿基准、污染、残饵或失败培养物、收集位置和目的地，不自动给予副产品抵扣;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_nutrients` | `growout`; 输出; 基本流 | 必须辨认并分别采集“实际向水体释放的氮磷物种”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：实例化各实测/建模实际氮磷物种及受纳介质;保留元素/物种基准、浓度、背景、流量、时长及实验室质控;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_substances` | `growout`; 输出; 基本流 | 必须辨认并分别采集“其他实际直接物质排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：按物质、空气/水/土壤介质及证据实例化实际健康物质、消毒剂、燃烧污染物或处理气体，不用无证据零值或泛污染物 UUID;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_growout_leak` | `growout`; 输出; 基本流 | 必须辨认并分别采集“实际制冷剂或其他逸散物质泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 记录向空气释放的实际物质充注、补充、回收及泄漏事件平衡，识别本阶段制冷设备，不假设统一制冷剂;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_growout` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_other_water` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 明确饮用水、淡水或外供海水身份、供应者及处理，与工业工艺水区分;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_fuel` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“实际设备或备用发电机燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各实际燃料及净质量，若体积计量则附密度，记录设备和燃烧去向;不替代为渔船燃料;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_heat` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“外供加热或冷却能源”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则： 计量实际购入热能及供应者，不重复计入产生同一冷热的自有燃料或电力;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_chemicals` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“实际健康、清洁或水处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 逐项列实际材料、配方/活性成分、用量/事件、授权/现场记录及去向，不规定必用药物;仅实际使用时含缓冲盐类或处理介质;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_gear` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“实际收获材料及设备更换”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 按实际使用和损失计量网、筐和耗材或更换材料;可复用资产使用期见辅助账;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_refrigerant` | `harvest`; 输入; 产品流 | 必须辨认并分别采集“实际供应给阶段设备的制冷剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅实际供应/充注至已识别设备的具体制冷剂;关联期初/新装/补充/回收/期末充注及服务期，不自动等同泄漏;共享设备分配一次;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_abstraction` | `harvest`; 输入; 基本流 | 必须辨认并分别采集“实际按水源区分的取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅自环境取水，明确淡水/半咸水/海水水源;实测质量或体积配实际密度;排除外供及重复循环;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_effluent` | `harvest`; 输出; 废物流 | 必须辨认并分别采集“交付处理的废水或废培养液”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 计量实际水及负荷/化学品、处理转移编号和目的地;不是环境直接释放;现场转移属内部流;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_solids` | `harvest`; 输出; 废物流 | 必须辨认并分别采集“实际固体、污泥、废材料及包装废品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 区分各废物身份、干湿基准、污染、残饵或失败培养物、收集位置和目的地，不自动给予副产品抵扣;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_nutrients` | `harvest`; 输出; 基本流 | 必须辨认并分别采集“实际向水体释放的氮磷物种”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：实例化各实测/建模实际氮磷物种及受纳介质;保留元素/物种基准、浓度、背景、流量、时长及实验室质控;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_substances` | `harvest`; 输出; 基本流 | 必须辨认并分别采集“其他实际直接物质排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：按物质、空气/水/土壤介质及证据实例化实际健康物质、消毒剂、燃烧污染物或处理气体，不用无证据零值或泛污染物 UUID;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_harvest_leak` | `harvest`; 输出; 基本流 | 必须辨认并分别采集“实际制冷剂或其他逸散物质泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 记录向空气释放的实际物质充注、补充、回收及泄漏事件平衡，识别本阶段制冷设备，不假设统一制冷剂;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_harvest` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_other_water` | `live_gate`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 明确饮用水、淡水或外供海水身份、供应者及处理，与工业工艺水区分;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_fuel` | `live_gate`; 输入; 产品流 | 必须辨认并分别采集“实际设备或备用发电机燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各实际燃料及净质量，若体积计量则附密度，记录设备和燃烧去向;不替代为渔船燃料;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_heat` | `live_gate`; 输入; 产品流 | 必须辨认并分别采集“外供加热或冷却能源”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则： 计量实际购入热能及供应者，不重复计入产生同一冷热的自有燃料或电力;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_chemicals` | `live_gate`; 输入; 产品流 | 必须辨认并分别采集“实际健康、清洁或水处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 逐项列实际材料、配方/活性成分、用量/事件、授权/现场记录及去向，不规定必用药物;仅实际使用时含缓冲盐类或处理介质;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_maintenance_feed` | `live_gate`; 输入; 产品流 | 必须辨认并分别采集“活体交付前有界暂养实际维护饵料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅纳入活体交付批实际门前有界暂养使用的维护饵料，逐材料记录来源、湿/干质量、含水率、投喂事件、暂养时段及残饵去向；证实未投喂才记零。不得虚构配方、重复 growout 或 whole_chill 饵料或将管理育成藏入暂养；按实际活体交付参考鱼质量归一化，每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_packing` | `live_gate`; 输入; 产品流 | 必须辨认并分别采集“实际整鱼包装及复用容器”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各实际包装材料、件数、实测皮重、复用次数、清洗与更换;包装/运输水不属食用生物量;仅门前装载;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_refrigerant` | `live_gate`; 输入; 产品流 | 必须辨认并分别采集“实际供应给阶段设备的制冷剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅实际供应/充注至已识别设备的具体制冷剂;关联期初/新装/补充/回收/期末充注及服务期，不自动等同泄漏;共享设备分配一次;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_abstraction` | `live_gate`; 输入; 基本流 | 必须辨认并分别采集“实际按水源区分的取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅自环境取水，明确淡水/半咸水/海水水源;实测质量或体积配实际密度;排除外供及重复循环;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_effluent` | `live_gate`; 输出; 废物流 | 必须辨认并分别采集“交付处理的废水或废培养液”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 计量实际水及负荷/化学品、处理转移编号和目的地;不是环境直接释放;现场转移属内部流;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_solids` | `live_gate`; 输出; 废物流 | 必须辨认并分别采集“实际固体、污泥、废材料及包装废品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 区分各废物身份、干湿基准、污染、残饵或失败培养物、收集位置和目的地，不自动给予副产品抵扣;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_nutrients` | `live_gate`; 输出; 基本流 | 必须辨认并分别采集“实际向水体释放的氮磷物种”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：实例化各实测/建模实际氮磷物种及受纳介质;保留元素/物种基准、浓度、背景、流量、时长及实验室质控;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_substances` | `live_gate`; 输出; 基本流 | 必须辨认并分别采集“其他实际直接物质排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：按物质、空气/水/土壤介质及证据实例化实际健康物质、消毒剂、燃烧污染物或处理气体，不用无证据零值或泛污染物 UUID;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_live_gate_leak` | `live_gate`; 输出; 基本流 | 必须辨认并分别采集“实际制冷剂或其他逸散物质泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 记录向空气释放的实际物质充注、补充、回收及泄漏事件平衡，识别本阶段制冷设备，不假设统一制冷剂;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_live_gate` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_other_water` | `whole_chill`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 明确饮用水、淡水或外供海水身份、供应者及处理，与工业工艺水区分;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_fuel` | `whole_chill`; 输入; 产品流 | 必须辨认并分别采集“实际设备或备用发电机燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各实际燃料及净质量，若体积计量则附密度，记录设备和燃烧去向;不替代为渔船燃料;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_heat` | `whole_chill`; 输入; 产品流 | 必须辨认并分别采集“外供加热或冷却能源”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则： 计量实际购入热能及供应者，不重复计入产生同一冷热的自有燃料或电力;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_chemicals` | `whole_chill`; 输入; 产品流 | 必须辨认并分别采集“实际健康、清洁或水处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 逐项列实际材料、配方/活性成分、用量/事件、授权/现场记录及去向，不规定必用药物;仅实际使用时含缓冲盐类或处理介质;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_maintenance_feed` | `whole_chill`; 输入; 产品流 | 必须辨认并分别采集“致死前有界暂养实际维护饵料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅纳入鲜/冷藏批实际致死前有界暂养使用的维护饵料，逐材料记录来源、湿/干质量、含水率、投喂事件、暂养时段及残饵去向；证实未投喂才记零。不得虚构配方、重复 growout 饵料或将管理育成藏入暂养；按实际交付参考鱼质量归一化，每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_packing` | `whole_chill`; 输入; 产品流 | 必须辨认并分别采集“实际整鱼包装及复用容器”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各实际包装材料、件数、实测皮重、复用次数、清洗与更换;包装/运输水不属食用生物量;仅门前装载;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_refrigerant` | `whole_chill`; 输入; 产品流 | 必须辨认并分别采集“实际供应给阶段设备的制冷剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅实际供应/充注至已识别设备的具体制冷剂;关联期初/新装/补充/回收/期末充注及服务期，不自动等同泄漏;共享设备分配一次;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_abstraction` | `whole_chill`; 输入; 基本流 | 必须辨认并分别采集“实际按水源区分的取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅自环境取水，明确淡水/半咸水/海水水源;实测质量或体积配实际密度;排除外供及重复循环;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_effluent` | `whole_chill`; 输出; 废物流 | 必须辨认并分别采集“交付处理的废水或废培养液”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 计量实际水及负荷/化学品、处理转移编号和目的地;不是环境直接释放;现场转移属内部流;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_solids` | `whole_chill`; 输出; 废物流 | 必须辨认并分别采集“实际固体、污泥、废材料及包装废品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 区分各废物身份、干湿基准、污染、残饵或失败培养物、收集位置和目的地，不自动给予副产品抵扣;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_nutrients` | `whole_chill`; 输出; 基本流 | 必须辨认并分别采集“实际向水体释放的氮磷物种”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：实例化各实测/建模实际氮磷物种及受纳介质;保留元素/物种基准、浓度、背景、流量、时长及实验室质控;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_substances` | `whole_chill`; 输出; 基本流 | 必须辨认并分别采集“其他实际直接物质排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：按物质、空气/水/土壤介质及证据实例化实际健康物质、消毒剂、燃烧污染物或处理气体，不用无证据零值或泛污染物 UUID;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_whole_chill_leak` | `whole_chill`; 输出; 基本流 | 必须辨认并分别采集“实际制冷剂或其他逸散物质泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 记录向空气释放的实际物质充注、补充、回收及泄漏事件平衡，识别本阶段制冷设备，不假设统一制冷剂;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_whole_chill` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_other_water` | `treatment`; 输入; 产品流 | 必须辨认并分别采集“其他实际外供水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 明确饮用水、淡水或外供海水身份、供应者及处理，与工业工艺水区分;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_fuel` | `treatment`; 输入; 产品流 | 必须辨认并分别采集“实际设备或备用发电机燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 识别各实际燃料及净质量，若体积计量则附密度，记录设备和燃烧去向;不替代为渔船燃料;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_heat` | `treatment`; 输入; 产品流 | 必须辨认并分别采集“外供加热或冷却能源”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ 数量规则： 计量实际购入热能及供应者，不重复计入产生同一冷热的自有燃料或电力;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_chemicals` | `treatment`; 输入; 产品流 | 必须辨认并分别采集“实际健康、清洁或水处理材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 逐项列实际材料、配方/活性成分、用量/事件、授权/现场记录及去向，不规定必用药物;仅实际使用时含缓冲盐类或处理介质;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_refrigerant` | `treatment`; 输入; 产品流 | 必须辨认并分别采集“实际供应给阶段设备的制冷剂”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅实际供应/充注至已识别设备的具体制冷剂;关联期初/新装/补充/回收/期末充注及服务期，不自动等同泄漏;共享设备分配一次;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_incoming_solids` | `treatment`; 输入; 废物流 | 必须辨认并分别采集“交给自有处理的内部来源阶段固体及污泥”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 按唯一转移编号、干湿质量及污染基准接收实际来源阶段固体、污泥和废培养物;与来源废物输出匹配一次并保留处理目的地;每 1 kg 参考流。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_abstraction` | `treatment`; 输入; 基本流 | 必须辨认并分别采集“实际按水源区分的取水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 仅自环境取水，明确淡水/半咸水/海水水源;实测质量或体积配实际密度;排除外供及重复循环;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_effluent` | `treatment`; 输出; 废物流 | 必须辨认并分别采集“交付处理的废水或废培养液”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 计量实际水及负荷/化学品、处理转移编号和目的地;不是环境直接释放;现场转移属内部流;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_solids` | `treatment`; 输出; 废物流 | 必须辨认并分别采集“实际固体、污泥、废材料及包装废品”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 区分各废物身份、干湿基准、污染、残饵或失败培养物、收集位置和目的地，不自动给予副产品抵扣;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_nutrients` | `treatment`; 输出; 基本流 | 必须辨认并分别采集“实际向水体释放的氮磷物种”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：实例化各实测/建模实际氮磷物种及受纳介质;保留元素/物种基准、浓度、背景、流量、时长及实验室质控;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_substances` | `treatment`; 输出; 基本流 | 必须辨认并分别采集“其他实际直接物质排放”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 条件集合卡：按物质、空气/水/土壤介质及证据实例化实际健康物质、消毒剂、燃烧污染物或处理气体，不用无证据零值或泛污染物 UUID;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_treatment_leak` | `treatment`; 输出; 基本流 | 必须辨认并分别采集“实际制冷剂或其他逸散物质泄漏”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：使用本阶段实际材料、供应或受纳介质证据;存在多种材料或物质时分别实例化具体交换。 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则： 记录向空气释放的实际物质充注、补充、回收及泄漏事件平衡，识别本阶段制冷设备，不假设统一制冷剂;记录实际来源阶段、单元、鱼群、事件和期间，并计入适用清洁/启动。将可归属总量除以实际交付参考生物量;仅证实未使用时记零。 数值来源模式： `calculated_value` 适用范围： `site_specific` 归一化基准： 每 1 kg 参考流 基准类型： `reference_flow` 证据类型： `calculated_from_collection` 采集协议： `cp_treatment` 来源： `flatfish-foreground-method` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference lot | 核实实际物种的独立分类证据、养殖来源、人类食用用途、未去头未去内脏整鱼及首次生产者门。CPC 标签或大菱鲆例子不能证明这些事实。 | `flatfish-foreground-method` |
| `validate_branch` | live_gate_final; whole_chill_final; flatfish_gate_release | 仅一个有证据的活或鲜/冷藏预交付分支接入最终门；独立实测分支交接量和验收损失须与唯一最终1千克参考输出核对。不得固定分支交接为1千克或合并状态。未知状态或食用适宜性使完整性失败。 | `flatfish-foreground-method` |
| `validate_phases` | hatchery; livefood; nursery; growout | 自有仔鱼记录须证实开口摄食、变态、定居与饵料转换;购入阶段须识别上游覆盖。检查各阶段饲料干湿基准、尾数/代表性体重、接触底面积/占用与成活，不设统一密度/饵料系数/温度。 | `flatfish-foreground-method` |
| `validate_topology` | water; energy; treatment | 要求实际单元期间水图、水源和计量;RAS 须有实际循环、过滤/生物滤池、固体/反冲洗及处理证据。确认取水/外供/循环区分、当前能源供应者及处理所有权。 | `flatfish-foreground-method` |
| `validate_closure` | all processes | 核对各阶段尾数与湿生物量、转移、生长、死亡、逃逸、拒收及最终交付；保留不确定性。逐事件核对 growout_fish → harvest_ready_fish → harvest_collected_fish → 所选状态输入：鲜整鱼须独立适用性证据且仅进 whole_chill，live_gate 仅接活鱼，产品与死亡废物互斥。鲜/冷藏批致死前暂养资源和损失由 whole_chill 唯一承担，保留维护饵料和逃逸等实际去向。所有实际阶段资源、清洁/健康事件、直接释放和废物转移关联唯一来源单元/鱼群/期间及最终去向；核对饲料营养/材料和处理平衡，保留物质、浓度、背景、流量、时长及实验室 QA。 | `flatfish-foreground-method` |
| `validate_detection` | direct release and concentration records | 保留原始结果、检出/定量限、取样背景及分析不确定性。未检出不自动为零，披露经论证有界估计或缺口。扣除进水后出现负浓度/负负荷时触发取样/背景审查;保留原始值，不截为零，也不在无独立物理吸收及边界证据时宣称环境移除。 | `flatfish-foreground-method` |
| `validate_attribution` | common resources; periods; products | 检查完整输出/使用者清单、阶段/运行/期间边界、结转和更换/终止事件、驱动与分母总计、共享发票/电表及内部流/上游负荷无重复。 | `flatfish-foreground-method` |
| `validate_ranges` | all cards | 优先使用前景测量。所有暂定 reasoned_estimate 范围均可替换的 QA 筛查，不是设计/运行限值或替代值;审查异常并据证据扩展，不截断。零值须证明未使用而非记录缺失。 | `flatfish-foreground-method` |
| `validate_identity` | all exchanges | 最终 TIDAS 使用前解析各实际具体产品/废物/基本交换及相容属性/单位。条件集合卡须确定实际不同物质/材料与目的地。固定身份证据不能证明数量、排放因子或发布就绪。 | `flatfish-foreground-method` |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |
| `validate_final_gate` | declared_gate_release | 仅一个有证据的实际状态分支接入；参考表、鱼体状态和最终放行记录一致。以该最终门合格净质量作为全记录唯一分母，核对到门量、验收拒收、损失和输出；内部转移不得固定为1千克。所有操作资源仅在实际责任节点记录一次，未知状态、分母或去向使数据包不完整并失败。 | `flatfish-foreground-method` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景数据包;覆盖公开的已完成 secondary_dataset 或 background_dataset |
| downstream_use | 使用已解析具体交换身份的来源支持 process 与 lifecyclemodel 投影 |
| allowed_use | 相同声明物种/阶段、来源、整鱼状态、水拓扑、地域/时间与首次养殖场门，或经论证适配并分析敏感性 |
| excluded_use | 统一比目鱼配方;自动活/冷藏等价;冻结/去内脏/鱼片指导;身份未解析的最终 TIDAS 交换;无条件全行业均值 |
| required_metadata | PCR 版本;物种/来源/用途;阶段、单元/鱼群与期间;整鱼形态/状态;门;输出质量/尾数;水与饲料路线;面积占用;上游覆盖;分配;来源 |
| required_quality_disclosure | 测量/取样质量、损失闭合、处理/排放方法与物质基准、未解析身份/活动、暂定 QA 范围及不确定性 |
| update_trigger | 物种、起始阶段、饲料、水拓扑、现场/能源供应者、健康管理、交付状态、损失、分配或新增已审查证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | UN Statistics Division, CPC 3.0 explanatory notes (2025), pp. 40–43. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类范围;访问 2026-10-09 |
| `fao-turbot-2009` | official_guidance | FAO (2009), Cultured aquatic species fact sheet, Psetta maxima. https://www.fao.org/fishery/docs/DOCUMENT/aquaculture/CulturedSpecies/file/en/en_turbot.htm | 仅定性孵化/驯食/育成、收获及整鱼形态例子;访问 2026-10-09 |
| `fao-flounder-culture` | official_guidance | FAO, Biology and culture of selected species, section 2.5. https://www.fao.org/4/Y2257E/y2257e05.htm | 仅定性变态/定居、饵料转换和底面积占用问题，不采用历史分类/数值处方;访问 2026-10-09 |
| `uf-ifas-ras-fa099` | extension_guidance | UF/IFAS, Fish Health Management Considerations in Recirculating Aquaculture Systems—Part 1, FA099. https://ask.ifas.ufl.edu/publication/FA099 | 仅通用实际 RAS 水质、过滤和生物安全类别;访问 2026-10-09 |
| `ghg-product-allocation-2011` | standard | WRI/WBCSD (2011), Product Life Cycle Accounting and Reporting Standard, chapter 9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分配优先顺序及敏感性，不宣称完全合规;访问 2026-10-09 |
| `flatfish-foreground-method` | method_factor | 本 PCR 第 3–9 节自定义内部方法，不是外部观测数据集。 | 交付门/形态边界、测量及采集/计算规则、阶段/去向账、跨期归属、单位换算及 1–1 kg 内部参考恒等。宽泛非参考筛查范围另标 reasoned_estimate，不是经验因子。 |
