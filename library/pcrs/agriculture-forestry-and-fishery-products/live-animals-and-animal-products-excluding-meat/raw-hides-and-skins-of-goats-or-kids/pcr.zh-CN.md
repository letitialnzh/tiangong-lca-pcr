---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-goats-or-kids
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 山羊或羔羊原皮

## 1. 适用范围

本规则涵盖实际独立回收、未经鞣制的新鲜或初步防腐山羊及羔羊原皮，适用于屠宰以及合法且质量合格的倒毙动物回收。仍留在胴体上的皮不构成独立产品。必须申报物种、来源、状态、等级、实际剥皮／回收／防腐交接点及报告期间。排除绵羊皮、毛皮用途的生毛皮、分离毛纤维、铬鞣蓝湿皮、其他皮革以及交接后的运输。上游山羊养殖可能跨期间提供肉、乳、纤维或繁殖服务，其负担必须关联，不得默认为零。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-hides-and-skins-of-goats-or-kids |
| classification_refs | CPC 3.0 `02954` |
| covered_products | 实际独立回收的新鲜、冷藏、干燥、盐腌或盐水处理且未经进一步加工的山羊／羔羊原皮 |
| excluded_products | 绵羊／羊羔及其他物种皮、毛皮用途生毛皮、分离毛纤维、蓝湿皮和成品革 |
| representative_product | 1 kg 净销售质量的山羊／羔羊原皮 |
| production_route | 与路线兼容的上游养殖 → 实际屠宰或合法倒毙回收及独立剥皮 → 首次清洁修整 → 等级分选 → 可选防腐 → 实际交接点的保护性交付 |
| market_state | 新鲜或初步防腐；申报物种、水分、留存盐、等级及交接点 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在实际交接点销售的一批独立回收山羊或羔羊原皮 |
| How much | 1 kg 净销售皮质量；不含可拆除包装及游离盐水 |
| How well | 山羊／羔羊物种、合法来源、路线、等级、新鲜／冷藏／干燥／盐腌／盐水状态、水分及留存盐 |
| How long or cycle | 实测终末事件至交接批次，与实际养殖及共享服务期间关联 |
| reference_flow_link | `raw_goat_skin` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际交接点的山羊或羔羊原皮 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 山羊或羔羊；实际回收；合法来源；等级；新鲜／防腐路线；水分；留存盐；净质量不含包装；交接点；动物与设施期间 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_sale_mass` | 参考及可销售中间皮 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在每个实际状态及交接点称量净皮；扣除可移除包装及游离盐水。 |
| `state_mass` | 新鲜与防腐状态比较 | Mass | kg | 测量皮防腐前后质量、水分损失及留存盐；不得采用通用新鲜至防腐换算因子。 |
| `period_meter` | 共享能源及上游动物服务 | Energy and time | kWh, h | 先按实际报告期间保留能源载体计量及服务工时，再归一化至每 kg。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 归一化数量 = 可归属数量 × 声明参考数量 / 实测合格参考产出数量。归一化只执行一次，不得再次除以已使用的分母。 |

## 5. 系统边界

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 进入屠宰的可识别活山羊／羔羊，或依法可回收的倒毙遗体；关联路线兼容的上游养殖数据集而不重复其交换。 |
| starting_condition_role | 活畜屠宰为 Product；倒毙遗体仅在实际法律角色为 Waste 时用 Waste。若倒毙回收为 Product，生成交换前须另行核实匹配的 Product 身份。 |
| product_classification_scope | CPC 3.0 `02954` 山羊／羔羊原皮，不含毛皮用途原毛皮或加工皮革。 |
| recursive_input_rule | 采购的同类别原皮进入整理时保留自身上游数据集；不得当作新剥取皮，也不再分配原动物负担。 |
| upstream_dataset_requirement | 与实际状态、交接点相容的物种、肉／乳／纤维／繁殖历史及期间、终末路线、实际共产品、盐、能源及包装数据。 |
| disclosure | 动物与批次标识、上游边界、合法回收、实际剥皮、产品集合、分配、期间、共享设施、等级、状态及交接。 |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `animal_link` | 上游与终末节点 | 山羊养殖由路线兼容上游数据集承载，涵盖肉／乳／纤维／繁殖历史。若上游已计屠宰，前景终末节点不得重计其负担，只保留交接台账。 | `fao-small-ruminant` |
| `independent_skin` | 终末剥皮 | 剥皮或合法回收独立于养殖及首次整理。仅实际分离且可销售的皮进入本 PCR；带皮胴体不得虚构原皮。 | `fao-small-ruminant` |
| `actual_gate` | 各路线 | 边界止于鞣制前的实际剥皮、屠宰场、合法回收或防腐交接点；排除后续配送及制革。早期新鲜皮交接时省略未发生的后续节点。 | `un-cpc-3`; `fao-hides` |
| `state_destinations` | 整理至交接 | 识别湿态／整理态、合格／降级／淘汰及新鲜／防腐状态与各自交接。新鲜皮跳过防腐；包装保护但不增加净皮质量。 | `fao-hides`; `fao-small-ruminant` |
| `shared_asset_scope` | 剥皮、整理、分级、防腐及交接 | 识别共享房间、计量表、防腐架和复用容器；列出使用节点及期间，每项负担只分配一次。 | `fao-hides` |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `removal` | 终末事件与独立剥皮 | required | 已记录路线 | 记录实际屠宰或合法倒毙回收；剥皮与整理分离。 | 实测批次 |
| `conditioning` | 首次原皮整理 | conditional | 实际交接前进行了初次整理 | 仅记录实际清洁、去肉或修边，形成整理后交接状态。 | 实测批次 |
| `grading` | 等级与去向分选 | conditional | 实际交接前进行了分选 | 区分合格、降级可售与淘汰去向。 | 实测批次 |
| `preservation` | 条件性原皮防腐 | conditional | 仅实际防腐 | 仅纳入实际冷藏、干燥、盐腌或盐水处理；新鲜销售绕过。 | 实测批次 |
| `gate` | 保护性交接与实际交付 | required | 已记录路线 | 在申报交接点保护并转交一次原皮产品。 | 实测批次 |

### Process: 终末事件与独立剥皮 (`removal`)

#### Inputs

##### Product flows

###### 已记录屠宰的活山羊或羔羊 (`live_goat`)

进入实际屠宰的活山羊或羔羊.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：进入实际屠宰的活山羊或羔羊（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：将活畜标识与质量匹配兼容的上游养殖数据集；终末事件只计一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_removal`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 合法可回收的倒毙山羊遗体 (`fallen_body`)

依法作为废物流管理的倒毙山羊或羔羊遗体.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：依法作为废物流管理的倒毙山羊或羔羊遗体（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：仅在实际法律角色为废物流、质量允许回收时使用；不得虚构肉类产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_removal`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows

#### Outputs

##### Product flows

###### 独立剥取的湿态山羊原皮 (`wet_skin`)

独立剥皮后的未鞣制新鲜山羊或羔羊皮.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：独立剥皮后的未鞣制新鲜山羊或羔羊皮（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：仅实际回收时单独称量；仍附着胴体的皮不是独立产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_removal`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际可销售肉或胴体共产品 (`actual_meat`)

屠宰产生的真实可销售肉或胴体.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：屠宰产生的真实可销售肉或胴体（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：只记录实际独立销售交接；倒毙回收不预设此项。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_removal`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他真实终末共产品 (`other_terminal`)

其他实际上市的终末产品（如有）.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：其他实际上市的终末产品（如有）（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：分列物质身份与交接；不得把乳、纤维或繁殖服务与屠宰产品混为一流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_removal`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 不可销售的终末残余物 (`terminal_waste`)

送往已记录处置途径的不可销售屠宰或倒毙遗体残余物.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：送往已记录处置途径的不可销售屠宰或倒毙遗体残余物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：称量残余物并记录合法处置；不得计作可销售皮张。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_removal`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows


### Process: 首次原皮整理 (`conditioning`)

#### Inputs

##### Product flows

###### 进入初次整理的湿皮 (`raw_input`)

来自剥皮节点的湿态山羊或羔羊原皮.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：来自剥皮节点的湿态山羊或羔羊原皮（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按批次及质量与剥皮输出仅匹配一次；采购皮需兼容上游数据集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际初洗用水 (`wash_water`)

仅实际使用时投入初洗的工艺水.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：仅实际使用时投入初洗的工艺水（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：计量实际用水；未清洗则此交换为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 初步整理原皮 (`prepared_skin`)

未鞣制、经初洗修整的山羊或羔羊原皮.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：未鞣制、经初洗修整的山羊或羔羊原皮（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：分级前称量初步整理皮并记录所含水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 去肉及修边废料 (`conditioning_waste`)

不可销售的肉屑、修边料与清洗固体物.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：不可销售的肉屑、修边料与清洗固体物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：分别于整理皮记录质量和实际处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows


### Process: 等级与去向分选 (`grading`)

#### Inputs

##### Product flows

###### 进入分级的整理皮 (`grading_input`)

进入分选的初步整理山羊或羔羊皮.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：进入分选的初步整理山羊或羔羊皮（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按批次及质量与整理节点仅衔接一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 合格等级原皮 (`accepted_skin`)

符合销售标准的山羊或羔羊原皮.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：符合销售标准的山羊或羔羊原皮（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：逐一记录申报等级及后续防腐或直接交接。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 降级但可售的原皮 (`downgraded_skin`)

降级但可独立销售的山羊或羔羊原皮.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：降级但可独立销售的山羊或羔羊原皮（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：仅作为原皮实际销售时使用；记录买方与交接点。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 分级后不可销售废料 (`grading_reject`)

未按原皮销售的淘汰皮张部分.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：未按原皮销售的淘汰皮张部分（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：记录淘汰原因、质量与处置；不得自动给予回收抵扣。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows


### Process: 条件性原皮防腐 (`preservation`)

#### Inputs

##### Product flows

###### 防腐前可用原皮 (`preservation_input`)

进入实际防腐工序的合格或降级原皮.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：进入实际防腐工序的合格或降级原皮（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：新鲜皮直接交接时省略此过程；追踪进料状态与质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 计量的盐或其他允许防腐介质 (`preservative`)

实际使用的盐、盐水成分或其他允许介质.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：实际使用的盐、盐水成分或其他允许介质（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：识别物质并计量投入；不设通用用盐量或固定流身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 实际冷藏或干燥的能源 (`preservation_energy`)

防腐中实际使用的电、燃料或其他能源载体.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：防腐中实际使用的电、燃料或其他能源载体（UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：按载体与期间计量；未实施能源干预时省略。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kWh per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 防腐后未鞣制原皮 (`preserved_skin`)

冷藏、干燥、盐腌或盐水处理但未鞣制的山羊或羔羊原皮.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：冷藏、干燥、盐腌或盐水处理但未鞣制的山羊或羔羊原皮（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：保护性包装前计量销售状态质量、留存盐与水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 防腐残余废料 (`preservation_waste`)

废盐水、淘汰皮及其他实际防腐残余物.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：废盐水、淘汰皮及其他实际防腐残余物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：分列液体与固体处置并记录质量，不得隐去水分损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows


### Process: 保护性交接与实际交付 (`gate`)

#### Inputs

##### Product flows

###### 进入交接保护的可售原皮 (`saleable_skin_input`)

来自剥皮、分级或防腐节点、在申报交接点实际可销售的山羊／羔羊原皮。

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：来自剥皮、分级或防腐节点、在申报交接点实际可销售的山羊／羔羊原皮（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：每批仅接入一个对应路线的回收、分级或防腐输出，不得将不同路线重复计入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保护性交接材料 (`protective_material`)

实际使用的可重复或一次性保护包装.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：实际使用的可重复或一次性保护包装（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：记录材料和复用次数；包装质量不计入净皮参考量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### 实际交接处的山羊或羔羊原皮 (`raw_goat_skin`)

净销售质量的新鲜或防腐未鞣制山羊或羔羊原皮.

参考产出的原始记录：每个销售批次只在实际剥皮、屠宰场、回收或防腐交接点记录一次最终输出；未经过的上游分支可省略。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 实际交接点的山羊或羔羊原皮
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate`
- 数量范围：归一化参考量
  - 范围角色：允许范围（`allowed_range`）
  - 下限: 1
  - 上限: 1
  - 单位: kg per functional unit
  - 基准: 每 1 kg 净销售原皮
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### Waste flows

###### 被淘汰包装及交接残余 (`packaging_reject`)

未复用的保护材料与交接淘汰物.

分母与范围要求：每实际记录批次；最终结果按 1 kg 净销售原皮归一

- 选定流：未复用的保护材料与交接淘汰物（UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：与原皮产品分开记录实际处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate`
- 数量范围：暂定完整性筛查，不是默认产率
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限: 0
  - 上限: 1000000
  - 单位: kg per lot
  - 基准: 每批实际测量质量或服务量，仅初步筛查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Elementary flows


## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `animal_phase` | 肉／乳／纤维／繁殖历史 | 将上游投入、动物服务、替换及终止事件关联实际期间与产品。可辩护时使用实物因果；否则使用已披露的经济关系并做敏感性分析。不得默认原皮承担零或全部终生负担。 | `fao-small-ruminant` |
| `terminal_output_set` | 屠宰与倒毙回收 | 列出实际独立销售的皮、肉／胴体及其他终末产品和交接；共同负担仅在真实目标产品间分配，份额合计为一。倒毙回收不预设肉产品。残余物和 Waste 不自动是共产品。 | `fao-small-ruminant` |
| `grade_and_state` | 分选和防腐 | 合格及降级等级仅在实际独立销售时构成不同产品；淘汰皮、废盐水及修边料按实测去向处置。损失不得抵作可销售产出。 | `fao-hides` |
| `shared_period` | 共享场址与容器 | 依据实测工时或吞吐量，在实际使用节点、批次和期间间分摊房间、防腐架、计量表及复用容器负担；每项服务只计一次并披露方法。 | `fao-hides` |

## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_removal` | `removal` | 实际终末事件及独立剥皮 | 动物事件票据 | 动物与批次标识、物种、来源路线、合法状态、活体／遗体质量、剥皮、皮／肉／其他产品、Waste、交接点、期间 | 屠宰／回收票据、校准磅秤、上游数据集关联；原始汇总要求：匹配一项遗体投入与真实产出及已记录损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, event | 每事件 | 动物服务与终末期间 | 实际来源与剥皮场址 | 每参考流 | 票据、秤校准、合法文件；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_conditioning` | `conditioning` | 首次整理后的皮状态 | 加工批次 | 投入皮、水、整理后皮、修边料、水分、批次、时间 | 批次单、水表及校准秤；原始汇总要求：按状态与处理协调质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, h | 每批 | 参考生产期间 | 实际整理场址 | 每参考流 | 计量与秤校准；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_grading` | `grading` | 合格／降级／淘汰去向 | 等级台账 | 投入批次、等级、合格、降级、淘汰质量与去向 | 秤及销售／发运单据；原始汇总要求：划分实际等级与淘汰去向。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg | 每批 | 参考生产期间 | 分级场址 | 每参考流 | 等级与发运证据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_preservation` | `preservation` | 实际防腐或冷藏 | 防腐批次 | 投入状态及质量、盐／介质、能源载体、产出状态／质量、水分、留存盐、废液、时间 | 批次单、计量表和实验室／秤记录；原始汇总要求：分列新鲜绕行与各干预措施。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, kWh, h | 每防腐批 | 实际防腐期间 | 防腐场址 | 每参考流 | 批次、校准与检测记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_gate` | `gate` | 净销售原皮与包装 | 发运批次 | 投入状态、等级、毛重、游离盐水、包装皮重／复用、净皮质量、交接点、去向 | 发运秤、容器台账及发票；原始汇总要求：每销售批仅有一项最终净皮产出。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg, event | 每发运批 | 参考交接期间 | 实际交接场址 | 每参考流 | 发运与皮重票据；可追溯分子、合格参考产出分母及归一化计算表 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `net_reference` | 交接 | 净皮质量＝发运总称重－可拆除包装－游离盐水；用实测净 kg 归一化可归属清单。 | 总重、包装皮重、游离盐水、批次标识 | 每 1 kg 净销售原皮清单 | `un-cpc-3` |
| `state_balance` | 各准备节点 | 逐状态核对投入质量与实际加水／盐，及产出皮、残余物、排放盐水和实测水分变化；不使用通用换算。 | 批次质量、水分、盐、水、损失 | 已记录状态转换 | `fao-small-ruminant` |
| `attribution_check` | 动物与共享资产 | 每个真实多产品节点及服务期间归属份额合计为一；不得重复计算动物阶段、房间、计量表或容器。 | 产品销售、实物驱动量、期间、服务记录 | 每最终 kg 的归属负担 | `fao-hides` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `legal_trace` | 每张回收皮 | 核实山羊／羔羊身份、终末路线、合法及质量合格回收、真实独立销售及交接点。 | 动物票据、合法及发运记录 |
| `state_trace` | 各质量转换 | 区分湿态、整理态、分级态、新鲜态及防腐态；记录水分、留存盐和包装皮重。 | 校准秤、检测、批次台账 |
| `period_complete` | 上游与共享服务 | 关联肉／乳／纤维／繁殖期间、终末事件、资产及每个使用节点；记录排除和分支绕行。 | 上游数据集、计量表和期间台账 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `category_gate` | 参考产品 | 拒绝绵羊、毛皮用途原毛皮、鞣制蓝湿皮及非原皮皮革；要求物种、状态及实际鞣制前交接点。 | `un-cpc-3` |
| `separation` | 终末节点 | 核查皮已物理回收并独立销售；带皮胴体不虚构产出。按实际路线及合法角色匹配活畜 Product 或倒毙遗体 Waste。 | `fao-small-ruminant` |
| `route_balance` | 各节点 | 按批次标识及实测质量从剥皮追踪至唯一最终交接；协调合格、降级、淘汰、留存盐、游离盐水及可解释的水分变化。 | `fao-small-ruminant` |
| `outputs_periods` | 分配 | 核实真实肉／乳／纤维／繁殖产品集、期间、共享使用节点与分配份额；禁止默认零／全皮负担和重复计入。 | `fao-hides` |
| `identity_resolution` | 具体数据集交换 | 形成最终交换前将每项未解析产品／废物流／基本流身份核实至与状态和交接点相容的详情流；待确认流身份 只是暂定范围而非 UUID。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 山羊／羔羊原皮生产前景包，候选方法 |
| downstream_use | 状态、交接点、期间、路线与身份匹配时可作 `secondary_dataset`；`background_dataset` |
| allowed_use | 合法来源、状态及交接点明确的独立销售未鞣制山羊／羔羊原皮 |
| excluded_use | 绵羊／毛皮／皮革、虚构带皮胴体产出、未披露回收或未核实的固定交换 |
| required_metadata | 物种、合法来源、终末事件、等级、状态、水分、留存盐、期间、交接点、分配及包装 |
| required_quality_disclosure | 实测与估算量、上游兼容性、共享资产分配、未解析 UUID 及 QA 范围局限 |
| update_trigger | 路线、分类、皮状态、流身份、量化证据或交接点变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3` | `official_guidance` | [联合国 CPC 3.0 解释说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 原皮分类与加工品边界 |
| `fao-small-ruminant` | `official_guidance` | [FAO，小反刍动物屠宰手册，第 10 章](https://www.fao.org/4/X6552E/X6552E10.htm) | 实际剥皮、初步防腐及残余物 |
| `fao-hides` | `official_guidance` | [FAO，Hides and Skins](https://www.fao.org/4/i0523e/i0523e.pdf) | 原皮收集、质量、分级与防腐 |
