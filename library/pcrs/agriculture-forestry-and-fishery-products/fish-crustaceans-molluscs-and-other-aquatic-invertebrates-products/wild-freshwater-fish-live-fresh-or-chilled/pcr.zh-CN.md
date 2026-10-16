---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-freshwater-fish-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 野生淡水食用鱼，活、鲜或冷藏

## 1. 范围与适用性

本 PCR 适用于野生淡水有鳍食用鱼，以一个实际活、鲜或冷藏批次的完整未加工鱼形式在首次登陆点交接。数据集声明物种、淡水栖息地和野生捕捞来源；内陆咸淡水或海水渔业不自动属于淡水。短期保鲜不改变野生来源。排除养殖鱼、观赏鱼、苗种/饵料等非食用产出、野生鲑科鱼、冻鱼、鱼片、分离鱼肝/鱼卵及其他加工品；联合国 CPC 3.0 注释区分相邻养殖、观赏、非食用、野生鲑科、冻鱼及所列加工品分类（`un-cpc3-notes`）。另行地，本 PCR 特意选择较窄的“声明淡水水体捕捞、完整未加工、首次登陆交接”边界；CPC 鱼产品类别本身不证明淡水物种仅可在淡水捕获，也不证明所有去头/去内脏但非鱼片产品都被该分类排除。

路线包括捕捞、实际开展时的保鲜，以及首次登陆呈装与交接。同一参考批次的保活与冷藏分支互斥；仅在有实际记录时，立即鲜鱼登陆可绕过保鲜。状态、水来源或交接地点未知表示数据缺口，不是默认路线。本规则不提供跨物种食用功能等价、加工收率、法规许可或通用渔业绩效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.wild-freshwater-fish-live-fresh-or-chilled |
| classification_refs | CPC 3.0 04211；仅作为分类背景 |
| covered_products | 首次登陆点交接的完整野生淡水食用有鳍鱼，实际活、鲜或冷藏状态；分别声明物种与等级 |
| excluded_products | 养殖鱼；观赏与其他非食用鱼；野生鲑科鱼；海水/咸淡水鱼；冻鱼；鱼片；鱼肝/鱼卵及加工产出 |
| representative_product | 在首次登陆点作为食用产品交接的完整野生淡水鲤鱼批次；仅为示例，不限定物种 |
| production_route | 内陆野生捕捞后，经有证据的保活或冷藏，或立即鲜鱼登陆，再首次登陆点交接 |
| market_state | 每个数据集参考批次声明一个实际完整鱼的活、鲜或冷藏状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| what | 首次登陆点交接的完整野生淡水食用鱼 |
| how_much | 1 kg |
| how_well | 声明物种/等级且一个实际活、鲜或冷藏状态的验收完整未加工鱼；记录活鱼存活或实际时间温度/验收观察 |
| how_long_or_cycle | 已识别捕捞航次或作业季及登陆批次；共享渔具与船舶服务关联实际服务期间、更换与退役事件 |
| reference_flow_link | `freshwater_landing_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 野生淡水鱼，活的，新鲜的或冷藏的 `71a18b97-ce6e-4a8d-adab-159854459ca8` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 野生来源；物种；淡水水体与捕捞地点；航次/渔具；登陆时间地点；实际活/鲜/冷藏状态；完整状态；登陆等级；净生物质量方法；验收批次及首次交接；报告期间；实际保鲜路线 |

各状态均使用同一个首次登陆点交接门槛。船上或登陆点暂养属于边界内；运至加工商、其他地点集运商、零售商或消费者的后续配送在边界外。无需可选产出选择器：`freshwater_landing_product` 始终为唯一实际最终产出。使用保持声明活鱼状态的有记录方法，扣除或分开排水/称量水、冰与容器。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用经校准的秤称量验收完整鱼净生物质量；排除载体水、冰和容器，保留毛重、皮重与处理记录。 |
| internal_mass | whole_catch; landing_catch; preserved_whole_lot; dispatch_lot | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 实测实际内部批次转移并在同一状态/时间口径核对两端。按每 1 kg 参考流归一化实测转移，不将内部转移固定为 1 kg。 |
| water_mass | supplied_process_water; direct_freshwater_withdrawal; effluent_to_treatment; direct_water_return; dispatch_supplied_water | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用质量记录；仅有体积计量时须记录水状态、密度换算与不确定性。区分供应、取用、循环、处理和直接回排。 |
| electricity_conversion | cn_low_voltage_electricity; other_capture_electricity; other_preservation_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 电能记录为 kWh，使用能量单位组 93a60a57-a3c8-11da-a746-0800200c9a66 的 3.6 MJ/kWh 换算；平台属性名称不表示燃烧电力。 |
| combustion_basis | capture_fossil_co2; capture_carbon_monoxide; other_capture_emissions; preservation_fossil_co2; preservation_other_emissions | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留实际污染物种类、受纳介质和因子口径；没有证据换算时不等同 CO2 当量、碳质量、按 NO2 表示的 NOx、元素营养物或颗粒分级。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 捕捞前声明自然淡水水体中的野生鱼种群；记录捕捞生物质移除与实际资源 |
| starting_condition_role | 自然资源起始背景，随后实测捕捞；不是管理养殖或无负荷外购鱼 |
| product_classification_scope | 完整野生淡水食用鱼语义类别，关联 CPC 3.0 04211，但分类本身不定义路线 |
| recursive_input_rule | 若购买已登陆完整鱼继续处理，保留供应商捕捞/登陆负荷一次并声明扩展门槛；不能将外购鱼改标为本地新捕捞，缺乏匹配边界证据时不能使用此首次登陆产出。 |
| upstream_dataset_requirement | 燃料、饵料、渔具、水、电、冰、氧、材料和资产均需匹配供应数据集；增殖/放流来源须披露并调查可归属上游放流负荷，不自动设为零 |
| disclosure | 物种、栖息地、野生/放流来源、渔具及栖息地相互作用、船舶/人工模式、期间、共享资产、兼捕释放、实际保鲜与门槛、排放与水核算、排除项及缺失影响表征 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_capture | inland_capture | 包括生物质移除、捕捞努力、燃料燃烧、饵料、材料/渔具更换、兼捕、实际损失及返回首次登陆的航次。捕捞移除自然鱼，保鲜只稳定已收集产品。 | fao-inland-fisheries |
| boundary_preservation | landing_preservation | 包括交接前实际船上和登陆点保活或冷藏；记录干预前后可用状态、资源、损失及转至交接的交付。立即鲜鱼登陆仅可凭证据绕过。 | fao-fish-handling; fao-live-transport |
| boundary_ice | supplied_chilling_ice; supplied_process_water; cn_low_voltage_electricity; other_preservation_energy | 外购冰计匹配供应生产一次；现场制冰在此计实际水、能源、设备与制冷剂负荷，保留内部制冰/用冰台账，并排除同量第二次外购冰负荷。 | fao-fish-handling |
| boundary_dispatch | landing_dispatch | 包括首次登陆收集者/买方交接前实际呈装/包装，记录包装前鱼状态、保护角色及周转容器状态；排除后续配送、加工与烹饪。 |  |
| boundary_assets | capture_gear; spent_gear; dispatch_packaging; all processes | 实际共享船舶、池体、制冰机、登陆设施及周转箱须入资产清单；记录消耗节点与期间、寿命/服务使用证据、更换与退役。通过独立具体交换纳入可归属上游资产/服务负荷并披露有理由排除。 |  |
| boundary_environment | all processes | 追踪留存、释放、逃逸与死亡渔获、栖息地相互作用和遗失渔具、实际取水/排水、燃烧及制冷剂排放。物种/种群与渔具影响记录伴随 LCI；单个资源交换不表征生物多样性、资源耗竭或栖息地影响，须披露 LCIA 方法覆盖与缺口。 | fao-inland-fisheries |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| inland_capture | 内陆捕捞 | required | 实际野生淡水捕捞，船舶或非船舶作业 | 移除野生生物质并交付实测留存完整渔获 | 每 1 kg 参考流的实测批次资源 |
| landing_preservation | 登陆交接前实际保鲜 | conditional | 有证据的保活或冷藏干预；仅无干预立即鲜鱼登陆可绕过 | 在同一首次登陆交接前稳定留存完整鱼 | 每 1 kg 参考流的实测输入与输出生物质量 |
| landing_dispatch | 首次登陆呈装与交接 | required | 每个参考批次；仅实际包装时计包装投入 | 验收实际完整鱼批次并在登陆点交给首位买方 | 1 kg 参考流 |

航次以批次/作业季记录；连续登陆作业须定义闭合报告期间与匹配批次台账。清洗、制冰、换批与待机资源关联实际使用批次/期间。以下条件性材料卡须按实际展开为零、一或多个具体交换，语义卡不能作为最终 TIDAS 身份。

所有非最终数量范围均为宽泛暂定作者筛查估算，不是经验值或许可限制。上界特意覆盖低产航次、损失较大批次与不同暂养时间：生物质/材料 100 kg，燃料/其他能源材料或污染物 1,000 kg，水 100,000 kg，保鲜电力 10,000 kWh，化石 CO2 10,000 kg。这些不是正常作业指标；超界须调查并保留实际值而不截断，获得证据后以批次/路线证据替换。最终 1–1 kg 范围来自参考定义（`net-mass-reference-definition`）。

### 过程：内陆捕捞（`inland_capture`）

#### 输入

##### 产品流

###### 淡水渔船柴油（`capture_diesel`）

仅记录内陆渔船实际燃烧的柴油，并保留发动机和航次记录；岸上或人工捕捞可以没有船用燃料。

条件身份：该流仅表示有船舶、发动机及淡水捕捞航次记录支持的淡水渔船在捕捞角色中的实际柴油燃烧；不代表海洋船舶、岸上泵、道路运输、养殖场或其他柴油使用，后者须独立匹配身份及数量。

- 选定流：柴油 `5e0406d3-2763-4f93-a921-b3028853c24b`
- 绑定：fixed
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：分配至参考批次的实测柴油消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture_energy`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 捕捞实际使用的电力供应（`other_capture_electricity`）

记录岸上或电动船捕捞实际外购电力，保留供应地点、电压与计量表；电能独立于燃料质量核算，中国登陆保鲜电力身份不自动匹配捕捞用途。

- 选定流：捕捞实际使用的电力供应
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：捕捞实际电能计量值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_capture_energy`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 从自然环境移除的野生淡水鱼生物质（`wild_biomass_removal`）

按物种和淡水水体记录捕捞移除的鱼，包括留存渔获与实测未回归损失；释放个体另记，禁止默认为无负荷外购鱼或养殖苗种。

- 选定流：从自然环境移除的野生淡水鱼生物质
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按声明捕捞核算口径实测从淡水种群移除的生物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catch`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 保鲜前留存的完整淡水渔获（`whole_catch`）

目标物种实际留存批次转入保鲜或直接转入登陆交接；两端称重并识别同批次，此卡不是最终登陆产品交换。

- 选定流：保鲜前留存的完整淡水渔获
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测内部留存鱼转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catch`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送处置的死亡渔获（`capture_discards`）

仅记录交给有证据废物接收方的死亡或拒收渔获；返回水体的鱼不论存活与否须进入渔获与栖息地记录，不能虚构处置交换。

- 选定流：送处置的死亡渔获
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：称量并送往记录废物去向的死亡或拒收鱼质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_catch`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的化石二氧化碳（`capture_fossil_co2`）

记录船上实际燃烧排放并与燃料上游供应区分；固定身份为即时化石 CO2 入未指定空气，仅在未报告更细空气子介质时使用，实际指定介质须独立核实匹配身份。采用实测化石碳或可追溯发动机/燃料因子，说明氧化率与生物源比例，不给默认排放因子。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：fixed
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测或可追溯计算的化石二氧化碳入空气质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_combustion`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排入空气的一氧化碳（`capture_carbon_monoxide`）

在发动机测试或适用因子有证据时记录一氧化碳，保留物质与空气受纳介质，上游供应不得重复此排放。

- 选定流：排入空气的一氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测或可追溯计算的一氧化碳入空气质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_combustion`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：登陆交接前实际保鲜（`landing_preservation`）

#### 输入

##### 产品流

###### 进入保鲜的完整渔获（`landing_catch`）

仅在首次登陆交接前实际保活或冷藏时启用；匹配 whole_catch 并保留实测数量；立即鲜鱼交接可绕过此过程。

- 选定流：进入保鲜的完整渔获
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测内部输入完整鱼质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外部供应的处理工艺水（`supplied_process_water`）

仅用于适合实际鱼处理、保活、清洗或现场制冰的外部处理水供应；按用途计量并保留供应水质证据，不能计作直接取水或重复累计循环水。

本卡仅表示一个实际外供水交换，不假定使用工业过程水。保留实测水量及实际来源、处理、等级、盐度和用途。按实际动物接触、载水、清洗或制冰用途验证水质适用性，完成数据包前须独立解决实际供水的精确身份，不继承工业水UUID。

- 选定流：实际外供处理水
- 绑定： 未解决（`unresolved`）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：保鲜边界内各声明用途的实测供应水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_landing_preservation`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 中国用户侧低压电网电力（`cn_low_voltage_electricity`）

仅用于中国实际低于 1 kV 的电网平均消费供电；计量保活增氧、制冷、现场制冰与清洗份额，此卡不限定产品类别必须在中国。

条件身份：此绑定仅适用于该节点实际购入的中国电网平均消费组合、低于1 kV的交流电。核实地区、电压、供应方/组合和实际用量；其他地区、电压、合同组合或自发电须分别独立核实身份与记录，不假定供应或使用。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 绑定：fixed
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：分配至本批次的中国低压供电实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_energy`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保鲜实际使用的其他电力供应（`other_preservation_electricity`）

非中国电力或其他电压/供应商须展开为真实供电，并独立匹配能量属性与 kWh；发动机驱动制冷燃料在 other_preservation_energy 记录。不得重复同一电表或默认所有场址中国供电。

- 选定流：保鲜实际使用的其他电力供应
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：实测非中国或其他供应保鲜电能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_energy`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购鱼冷藏冰（`supplied_chilling_ice`）

仅冷藏批次使用此外购船上/登陆冷藏介质；冰质量与鱼净质量分记，同一份冰的供应生产负荷取代现场制冰投入。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 绑定：fixed
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际冷藏批次添加的实测外购冰量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购压缩气态氧（`live_oxygen`）

仅在保活分支实际投氧时记录，保留供应商、纯度、压缩气态及交付质量；空气增氧计为电力而非外购氧，冷藏批次不使用此卡。

- 选定流：外购压缩气态氧
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测外购压缩气态氧消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际保鲜后的完整鱼（`preserved_whole_lot`）

实测离开本过程并转入同一登陆交接的可用活鱼或冷藏批次；活鱼记录存活，冷藏鱼记录时间温度；每批次仅一个实际最终状态。

- 选定流：实际保鲜后的完整鱼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际保鲜后的实测内部完整鱼转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送废物接收方的保鲜拒收鱼（`landing_losses`）

记录退出销售的实际死亡/拒收材料及接收方；保活死亡须有处置记录才为废物，实际合法转售其他用途则为独立识别副产品。

- 选定流：送废物接收方的保鲜拒收鱼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：送实际废物接收方的拒收鱼称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 转送处理的废水（`effluent_to_treatment`）

仅记录实际送处理商或单独建模现场处理的废水，记录组成与接收方；直接地表水排放须进入基本流输出。

- 选定流：转送处理的废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：交付记录处理边界的实测废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_landing_preservation`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 保鲜发动机排入空气的化石二氧化碳（`preservation_fossil_co2`）

仅实际燃料驱动制冷或现场制冰时记录；此发动机即时化石 CO2 独立于捕捞发动机排放及电力/冰供应负荷，未报告更细空气子介质时才使用未指定空气身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：fixed
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测或可追溯计算的实际保鲜发动机化石 CO2 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_combustion`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 直接返回淡水环境的水（`direct_water_return`）

仅在有证据直排口时记录，分开记录受纳水体、水质量与时间及污染物质量；送处理废水不计入此直接回排。

- 选定流：直接返回淡水环境的水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：直接排至淡水环境的实测载体水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_landing_preservation`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：首次登陆呈装与交接（`landing_dispatch`）

#### 输入

##### 产品流

###### 进入登陆交接的完整鱼（`dispatch_lot`）

保鲜启用时匹配 preserved_whole_lot，立即鲜鱼登陆有证据时匹配 whole_catch；每批次仅一个输入来源，不重复两路或把缺失状态默认为鲜鱼。

- 选定流：进入登陆交接的完整鱼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实际内部完整鱼输入转移的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交接时新增外部供应的载体或清洗水（`dispatch_supplied_water`）

仅记录适合实际用途的新增外部处理水；保鲜已接收核算的水通过水台账带入，不再次外购计量，载体水不进入鱼净生物质量。

本卡仅表示一个实际外供水交换，不假定使用工业过程水。保留实测水量及实际来源、处理、等级、盐度和用途。按实际动物接触、载水、清洗或制冰用途验证水质适用性，完成数据包前须独立解决实际供水的精确身份，不继承工业水UUID。

- 选定流：实际外供处理水
- 绑定： 未解决（`unresolved`）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：交接新增供应水的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_landing_dispatch`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 野生淡水鱼，活、鲜或冷藏（`freshwater_landing_product`）

首次登陆收集者/买方交接的完整食用鱼，且仅一个实际状态；排除运至加工商/零售商的后续运输，称量验收鱼净生物质量并扣除水、冰及包装，不设置竞争最终产品交换。

- 选定流：野生淡水鱼，活的，新鲜的或冷藏的 `71a18b97-ce6e-4a8d-adab-159854459ca8`
- 绑定：fixed
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_dispatch`
- 来源：`net-mass-reference-definition`
- 数量范围：定义的参考数量
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`net-mass-reference-definition`

##### 废物流

###### 交接时拒收的完整鱼（`dispatch_fish_rejects`）

记录从验收最终批次排除的鱼及实际处置；区分降价/降级销售产品和门槛外后续配送损失。

- 选定流：交接时拒收的完整鱼
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：本门槛拒收并交废物接收方鱼的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch`
- 数量范围：暂定筛查估算；用实际路线证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | 所有过程 | 先分开物种/等级批次及独立计量活动，直接可追溯资源与质量损失归属实际批次；列出所有可售留存物种/等级及首次交接。 | ghg-product-allocation |
| allocation_residual | 共享航次与登陆负荷 | 不可分剩余负荷在有可辩护因果关系时采用有证据因果份额，否则披露按同期登陆物种/等级收入的经济份额，报告全部产量、价格和敏感性；各产出份额合计为一，不给通用分配比例。 | ghg-product-allocation |
| allocation_losses | 全部渔获与废物 | 死亡/拒收前资源计入成功及其他预期产出的负荷核算；释放、逃逸和丢弃鱼不获替代信用，仅实际合法销售为副产品，内部转移跨节点抵消且无销售信用。 |  |
| allocation_period | 资产与所有过程 | 识别建造/服务、维护/更换、退役阶段及实际航次/报告期间。按有记录使用/寿命分配渔具、船舶、制冰机、暂养池和箱体服务；保留期初/期末库存、更换与终止证据，不跨期间重复计同一次更换。 |  |
| allocation_shared | 共享基础设施与服务 | 列出每项实际共享资产/服务及全部使用节点/批次/期间，以计量使用或有证据服务份额计一次；记录未使用/待机及清洗/换批处理，同一冰供应、燃烧、水、池或容器跨节点仅计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_capture_energy | inland_capture | capture_diesel; other_capture_energy; other_capture_electricity | 计量与燃料台账 | 航次；发动机；燃料组成；采购；油箱期初/期末；补充；实际消耗；其他能源 | 航次仪表核对加油/油箱记录，体积发票保留密度证据与实际供应身份。 | kg; kWh | 每航次 | 匹配作业季 | 实际船舶或岸上作业 | 每 1 kg 参考流 | 发票；仪表校准；航次台账 |
| cp_capture_materials | inland_capture | capture_bait | 材料台账 | 航次；饵料物种/组成；供应商；供应/未用量；损失去向 | 称量实际饵料投入与余量，保留匹配上游来源。 | kg | 每航次 | 匹配作业季 | 实际渔具 | 每 1 kg 参考流 | 称重；发票；供应商来源 |
| cp_catch | inland_capture | wild_biomass_removal; whole_catch; other_retained_sales; capture_discards | 渔获与登陆台账 | 航次；物种；水体；渔具；捕获/留存/释放/死亡/逃逸生物质；目标与兼捕等级；转移/销售去向 | 使用经校准称重渔获/登陆记录及可追溯物种/捕捞日志；释放/逃逸估测说明不确定性，核对资源移除与去向。 | kg | 每航次与批次 | 捕捞至同一登陆 | 声明淡水渔业 | 每 1 kg 参考流 | 秤校准；转移单；释放观察；物种鉴定 |
| `cp_assets_inland_capture` | `inland_capture` | capture_gear; spent_gear; shared assets | 资产与服务台账 | 资产；材料；购置；服务寿命；使用小时/次数；使用者；期间；更换；退役；废物去向；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 记录实际服务与材料更换，匹配组成清单或上游资产数据集及有记录服务分配。；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次更换及期间结束 | 实际服务期间 | 全部声明使用节点 | 每 1 kg 参考流 | 资产台账；服务日志；废物接收单；寿命证据 |
| `cp_assets_landing_preservation` | `landing_preservation` | capture_gear; spent_gear; shared assets | 资产与服务台账 | 资产；材料；购置；服务寿命；使用小时/次数；使用者；期间；更换；退役；废物去向；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 记录实际服务与材料更换，匹配组成清单或上游资产数据集及有记录服务分配。；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次更换及期间结束 | 实际服务期间 | 全部声明使用节点 | 每 1 kg 参考流 | 资产台账；服务日志；废物接收单；寿命证据 |
| `cp_assets_landing_dispatch` | `landing_dispatch` | capture_gear; spent_gear; shared assets | 资产与服务台账 | 资产；材料；购置；服务寿命；使用小时/次数；使用者；期间；更换；退役；废物去向；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 记录实际服务与材料更换，匹配组成清单或上游资产数据集及有记录服务分配。；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每次更换及期间结束 | 实际服务期间 | 全部声明使用节点 | 每 1 kg 参考流 | 资产台账；服务日志；废物接收单；寿命证据 |
| cp_combustion | inland_capture | capture_fossil_co2; capture_carbon_monoxide; other_capture_emissions | 测量或因子计算 | 航次；发动机；燃料质量/组成；实测污染物；介质；因子来源/版本/分母；氧化；粒径；不确定性 | 使用实际尾气测量或可追溯适用发动机/燃料因子与活动记录；逐种报告物质口径，含缺失污染物及渔具损失物质。 | kg | 每适用发动机/航次 | 匹配作业季 | 实际发动机与受纳介质 | 每 1 kg 参考流 | 测试或因子来源；燃料核对；方法适用性 |
| cp_preservation | landing_preservation | landing_catch; supplied_chilling_ice; live_oxygen; actual_preservation_materials; preserved_whole_lot; landing_losses | 批次处理与材料台账 | 批次；输入/输出净生物质；实际状态；时间温度或存活；暂养时长；冰来源/使用；氧供应商/纯度/质量；材料；拒收/接收方 | 称量匹配输入/输出批次及实际保鲜投入；活鱼与冷藏分记，保留现场制冰台账及无干预证据。 | kg | 每批次 | 捕捞至首次登陆交接 | 实际船上或登陆点保鲜 | 每 1 kg 参考流 | 秤校准；发票；存活/温度日志；处置单 |
| cp_preservation_energy | landing_preservation | cn_low_voltage_electricity; other_preservation_electricity; other_preservation_energy | 能源计量台账 | 批次；场址；地点；供应商；电压；仪表读数；保活泵/增氧；制冷；制冰；清洗；待机；发动机燃料 | 计量实际设施能源并核对用途和共享期间，区分外购冰供应商能源与现场能源。 | kWh; kg | 每批次或闭合期间 | 匹配捕捞/登陆作业季 | 实际供应商与用途节点 | 每 1 kg 参考流 | 仪表校准；能源账单；分配核对 |
| `cp_water_landing_preservation` | `landing_preservation` | supplied_process_water; dispatch_supplied_water; direct_freshwater_withdrawal; effluent_to_treatment; direct_water_return; direct_discharge_substances | 水与排放台账 | 批次；水源/质量；供应/取水质量；内部循环；制冰/融冰；带走载体水；处理接收；直排口/受纳水体；物质/浓度；制冷剂种类/泄漏；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 测量各外部水流与去向，体积记录保留密度/状态换算；按匹配监测导出物质负荷，不假定废水组成；追踪实际制冷剂入空气泄漏。；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每批次与排口监测期间 | 匹配边界期间 | 实际取水、供应与排口 | 每 1 kg 参考流 | 仪表校准；水质测试；排口采样；处理单；制冷剂维护日志 |
| `cp_water_landing_dispatch` | `landing_dispatch` | supplied_process_water; dispatch_supplied_water; direct_freshwater_withdrawal; effluent_to_treatment; direct_water_return; direct_discharge_substances | 水与排放台账 | 批次；水源/质量；供应/取水质量；内部循环；制冰/融冰；带走载体水；处理接收；直排口/受纳水体；物质/浓度；制冷剂种类/泄漏；原始共享台账唯一编号；本节点实际份额；全部受益者核对 | 测量各外部水流与去向，体积记录保留密度/状态换算；按匹配监测导出物质负荷，不假定废水组成；追踪实际制冷剂入空气泄漏。；使用同一共享原始台账并独立核对本节点份额，不复制其他节点总量或重复承担同项负荷。 | kg | 每批次与排口监测期间 | 匹配边界期间 | 实际取水、供应与排口 | 每 1 kg 参考流 | 仪表校准；水质测试；排口采样；处理单；制冷剂维护日志 |
| cp_preservation_combustion | landing_preservation | preservation_fossil_co2; preservation_other_emissions | 测量或因子计算 | 批次；制冷/制冰发动机；燃料质量与化石碳；污染物；空气介质；测试/因子来源/版本/分母；不确定性 | 采用实际保鲜发动机测试或可追溯适用因子及独立实测活动，保留物质口径，不与捕捞燃料或电力/冰供应重复。 | kg | 每实际发动机/批次 | 匹配登陆期间 | 实际保鲜发动机 | 每 1 kg 参考流 | 发动机测试或因子来源；燃料/仪表核对 |
| cp_dispatch | landing_dispatch | dispatch_lot; dispatch_packaging; freshwater_landing_product; packaging_rejects; dispatch_fish_rejects | 验收交接台账 | 批次；实际输入路线/状态；物种/等级；毛重/皮重/验收鱼净质量；冰/水/容器质量；买方/门槛/时间；价格；材料质量/周转；拒收去向 | 使用经校准秤称量验收完整鱼净生物质，扣除冰、载体水和包装；核对验收、首次登陆收据、批次及输入转移；称量实际包装与拒收。 | kg | 每交接批次 | 同一航次/登陆作业季 | 首次登陆交接地点 | 每 1 kg 参考流 | 秤校准；验收/转移收据；实际状态与门槛证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| lot_normalization | 所有清单行 | 对闭合批次/作业季汇总实际可归属实测交换，除以同范围验收完整鱼最终净生物质量，报告每 1 kg 参考流；保留原始总量和披露分配份额。 | 匹配协议记录；验收最终净生物质；分配台账 | 每 1 kg 参考流的交换 | net-mass-reference-definition |
| water_reconciliation | 水台账 | 核对外部供应水、直接取水及期初水，与期末水、带走载体水、冰/融冰、送处理、直排及有证据蒸发/损失；内部循环记录但不是新增外部投入。 | cp_water_landing_preservation; cp_water_landing_dispatch; cp_preservation; cp_dispatch | 闭合水台账及不确定性 |  |
| catch_reconciliation | 渔获台账 | 在同一声明采样/状态口径核对目标/兼捕留存、释放、逃逸、死亡材料和批次期初/期末库存与捕获个体；两端内部转移匹配，不造固定 1 kg 中间收率。 | cp_catch; cp_preservation; cp_dispatch | 匹配生物质台账及不确定性 |  |
| combustion_calculation | 直接排放 | 对实际燃料活动采用有记录适用物质特定测量/因子方法，保留碳源与分母；上游供应与前景发动机排放为分开数据集，不得重叠。 | cp_capture_energy; cp_combustion; cp_preservation_energy; cp_preservation_combustion; 实际因子/测试记录 | 每 1 kg 参考流的物质/介质特定质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | 参考与渔获 | 核实野生淡水食用来源、排除物种/产品边界、声明实际状态及同一首次登陆门槛。 | 物种/来源日志；实际验收/门槛记录；un-cpc3-notes |
| quality_completeness | 所有过程 | 覆盖成功及零/失败航次、全部预期兼捕销售、释放、实际废物、能源/水与材料，区分实际零和缺失。 | 闭合作业季台账；缺失数据登记 |
| quality_conditions | 保鲜与交接 | 记录鱼干预前后状态与实际分支，立即鲜鱼绕过须无干预证据；不假定活转冷藏等价或默认氧/冰比。 | 批次观察；存活或时间温度记录 |
| quality_periods | 资产、航次与共享服务 | 匹配实际期间与使用者，保留资产/服务/更换/退役和待机/换批处理。 | cp_assets_inland_capture; cp_assets_landing_preservation; cp_assets_landing_dispatch；计量分配台账 |
| quality_environment | 资源与排放 | 保留资源移除、栖息地/渔具/兼捕证据、物质/介质排放及水去向，披露方法、不确定性和未支持 LCIA 影响。 | 渔获观察；发动机因子/测试；水监测；LCIA 范围 |
| quality_estimates | 全部数量范围 | 以路线特定证据替换暂定筛查估算；超界调查而不改实测值为范围端点。 | 范围证据与超界调查 |
| quality_binding | 实际具体交换 | 核实实际流 UUID、类型、属性/单位和供应商/状态/介质；语义卡须在 TIDAS 发布前独立核实实际交换身份。 | 身份核实记录保存在 PCR 内容外 |
| `dq_inventory_completion` | 所有逐流清单完善要求 | 为每项实际物理或化学交换建立独立卡片，记录过程、方向、流类型、各自实测数量、原生单位、最终参考归一化、适用性、去向、UUID和独立范围证据。不得把集合总量、原集合筛选范围或一个UUID复制给所有子交换。仅有证据证明未发生时可记不适用；未知不等于零。适用责任未完成时，最终数据包不完整且校验失败。 | 逐流覆盖台账、原始计量、身份、去向和范围证据 |
| `dq_complete_other_capture_energy` | `inland_capture`; 输入; 产品流 | 必须辨认并分别采集“捕捞实际使用的其他燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：汽油等实际液体/固体燃料的条件性语义卡；按材料分别计量并匹配上游供应，外购电力另有能量卡，淡水渔船柴油身份不通用。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：实测实际液体或固体燃料质量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_capture_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_gear` | `inland_capture`; 输入; 产品流 | 必须辨认并分别采集“渔具更换材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按组成、服务使用量和使用期间记录实际渔网、钓线及其他更换材料；此卡表示组成材料需求，不限定通用尼龙材料。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：分配至本航次和产出的实测更换材料份额 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_assets_inland_capture` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_capture_bait` | `inland_capture`; 输入; 产品流 | 必须辨认并分别采集“实际捕捞饵料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在使用饵料渔具时记录；记录物种或材料、状态和供应商，保留上游捕捞或生产负荷及水中损失。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：实际航次供应的实测饵料量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_capture_materials` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_other_retained_sales` | `inland_capture`; 输出; 产品流 | 必须辨认并分别采集“实际销售的其他留存渔获”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：逐项记录实际出售的兼捕物种或等级及登陆交接，即使不属于本 PCR 参考产品也须进入分配台账。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：按物种与等级实测可售兼捕质量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_catch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_spent_gear` | `inland_capture`; 输出; 废物流 | 必须辨认并分别采集“送废物处理的废渔具”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按材料组成记录送收集、回收或处置的废渔具；遗失渔具不计入此处理量并单独追踪。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：有接收证据的废渔具称重分配量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_assets_inland_capture` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_other_capture_emissions` | `inland_capture`; 输出; 基本流 | 必须辨认并分别采集“其他有证据的燃烧或渔具损失物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅按实际物质记录展开，例如明确报告为二氧化氮的排放或已识别遗失聚合物；保留 NOx 报告口径与颗粒粒径，不能把 NOx 总量改名为二氧化氮分子或使用泛污染 UUID。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：保留介质及因子口径的实际物质实测质量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_combustion` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_other_preservation_energy` | `landing_preservation`; 输入; 产品流 | 必须辨认并分别采集“保鲜实际发动机燃料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅实际发动机驱动制冷或现场制冰时记录；燃料材料、发动机和质量独立于电力及捕捞柴油，具体清单须加入实测或可追溯物质特定发动机排放，不重复捕捞排放。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：实测保鲜发动机燃料质量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_preservation_energy` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_actual_preservation_materials` | `landing_preservation`; 输入; 产品流 | 必须辨认并分别采集“实际清洗或保鲜材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际组成记录条件性清洗材料或制冷剂更换/泄漏补充，记录合法使用与去向；不规定消毒制度或未经证实的化学技术。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：逐种识别材料的实测实际用量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_preservation` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_direct_freshwater_withdrawal` | `landing_preservation`; 输入; 基本流 | 必须辨认并分别采集“从实际水体直接取用淡水”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅记录前景边界内从河流/湖泊/地下水源实际抽取的自然水及取水口；供应水已有上游取水，池内循环不重复计为取水。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：直接取用淡水的计量质量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_water_landing_preservation` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_preservation_other_emissions` | `landing_preservation`; 输出; 基本流 | 必须辨认并分别采集“保鲜发动机排入空气的其他实际污染物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按实际一氧化碳及其他测量或因子支持的污染物分别展开，保留 NOx 报告口径和颗粒粒径；匹配实际保鲜发动机/燃料/测试及空气介质，不沿用捕捞活动数量。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：实际保鲜发动机实测或可追溯计算的污染物质量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_preservation_combustion` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_direct_discharge_substances` | `landing_preservation`; 输出; 基本流 | 必须辨认并分别采集“直排或制冷剂泄漏的实际物质”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：按证据将各污染物展开为物质、受纳介质和实测浓度/负荷；区分磷元素与磷酸盐并保留氮口径，实际制冷剂种类入空气泄漏另记；不使用泛污水污染 UUID 或假定组成。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：物质特定的直接排放实测质量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_water_landing_preservation` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_dispatch_packaging` | `landing_dispatch`; 输入; 产品流 | 必须辨认并分别采集“登陆实际包装组成材料”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：仅在首次交接前包装时记录；袋、箱与周转容器按材料、供应商及周转次数分记，分配实测更换/服务份额，不按每航次全额计周转容器。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：实测包装组成材料消耗或周转材料分配份额 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_dispatch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |
| `dq_complete_packaging_rejects` | `landing_dispatch`; 输出; 废物流 | 必须辨认并分别采集“登陆交接产生的包装废物”涵盖的每项实际交换，以下各项采集、数量和归一化责任仍适用：记录门槛内实际损坏/拒收包装及去向；随买方带走包装或周转容器记为交接元数据，不虚构当前门槛废物。 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg 数量规则：送实际接收方的包装废物实测质量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1 kg 参考流 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_dispatch` 按每项具体交换分别落实原生单位、实测量、去向和独立范围证据；本责任不提供子项数量、默认值或允许范围；须独立建立每项子交换的范围证据。禁止漏报实际交换。 | 所链接采集协议的逐流原始记录、身份和去向证据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | 参考产品 | 要求野生淡水食用物种及完整未加工实际活/鲜/冷藏状态，拒绝排除的养殖、观赏、鲑科、冻鱼或加工品替代。 | un-cpc3-notes |
| validate_reference | freshwater_landing_product | 要求 1 kg 验收鱼净质量及一个实际首次登陆交接；排除载体水、冰与包装，各声明状态均用同一参考行。 | net-mass-reference-definition |
| validate_route | 过程图与转移 | 交接须一个有证据输入路线；每参考批次保活与冷藏互斥，实际状态/操作未知阻止完成；核对两端实际转移质量，仅有立即鲜鱼证据可绕过保鲜。 |  |
| validate_resources | 捕捞与保鲜 | 要求生物质移除、实际船舶/人工模式、完整燃料/渔具/饵料/设施及可归属共享资产；缺失资源不作零，区分供应冰和现场生产并保留真实供应商/地点/电压身份。 |  |
| validate_environment | 基本流与废物卡 | 直接排放须物质与受纳介质、实际因子/测试口径，区分直接取水/回排与供应/处理路径，要求实际废物接收方；披露渔获/栖息地日志及方法覆盖缺口，拒绝虚构通用耗竭或污染 UUID。 |  |
| validate_outputs | 预期产出集合 | 列明物种/等级销售及交接、数量、价格，区分释放/残余/废物，执行明确分配优先级并验证份额/核对；同一销售不在多个门槛重复报告，内部转移无产出信用。 |  |
| validate_periods_shared | 资产与所有过程 | 关联航次、作业季/连续期间、清洗/换批、阶段、更换/退役及全部资产使用者，拒绝共同资源或资产跨节点/期间重复分配。 |  |
| validate_measurement | 所有清单行 | 要求匹配测量/属性/单位、每 1 kg 参考流基准、采集协议和使用时透明密度/能量或物质换算；不采用未测量通用鱼重、收率、死亡、冰或燃料因子。 |  |
| validate_bindings_ranges | 所有清单行 | 按实际状态、门槛和支持行确认固定身份，以核实实际身份展开条件性语义卡；暂定推理范围仅筛查记录，不能提供虚假经验值或截断超界值。 |  |
| `validate_inventory_completion` | 所有具体交换及第8节逐流完善责任 | 核查每项适用 dq_complete 责任均已形成独立实测且身份核实的交换卡；逐项确认数量、原生单位、Range证据、归一化、接收介质、去向和不重复归属。任一实际子交换、数量、身份或去向未落实均使最终数据包不完整并校验失败；未知不得填零。静态PCR检查不能替代这些证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 从野生淡水完整食用鱼捕捞至首次登陆交接的前景数据包 |
| downstream_use | secondary_dataset; background_dataset；仅在实际具体身份与数据证据完整后投影为 flow、process 和 lifecyclemodel |
| allowed_use | 声明物种/水体、实际渔具与期间、一个实际活/鲜/冷藏状态及匹配首次登陆门槛；聚合保留披露物种/状态/路线份额 |
| excluded_use | 养殖；海水或咸淡水鱼；观赏/非食用及鲑科参考；加工/零售/烹饪；通用渔业绩效；跨物种/状态食用服务等价；仅凭资源流映射声称完整栖息地/生物多样性评估 |
| required_metadata | 参考限定条件；航次/作业季或连续期间；兼捕/损失/释放台账；保鲜分支及时间/存活记录；资产使用者/服务期间；实际能源与材料供应；门槛与验收净生物质 |
| required_quality_disclosure | 数据覆盖与不确定性；失败航次；分配/期间假设；放流来源负荷调查；UUID 缺口；暂定范围；尾气/水方法；实际废物；排除资本或直接影响及 LCIA 覆盖 |
| update_trigger | 物种/来源/水体、渔具/发动机、实际状态/门槛、保鲜模式、供应商/电压、冰来源、存活/损失、共享资产分配、排放路线变化或新实测证据 |

## 11. 数据源

以下全部外部网页来源检索日期为 2026-10-09。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-notes | official_guidance | 联合国 CPC 3.0 解释注释，2025-06-30，印刷页 40–41。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类纳入/排除，不提供捕捞数量或环境因子 |
| fao-inland-fisheries | official_guidance | FAO 内陆渔业。https://www.fao.org/inland-fisheries/en/ | 内陆水域提取与生态背景；淡水限制由本 PCR 另行定义 |
| fao-fish-handling | handbook | FAO 渔船用冰及冷海水，第 4 章。https://www.fao.org/4/y5013e/y5013e07.htm | 立即处理、冷藏及冰来源/服务定性角色；海水示例、温度规定和定量冰比不移植为内陆通用因子 |
| fao-live-transport | handbook | FAO 活鱼运输。https://www.fao.org/4/T8389E/T8389E06.htm | 保活、氧/水处理与损失的定性依据；不采用历史用药制度或通用存活因子 |
| net-mass-reference-definition | method_factor | 本 PCR 第 3–4 节：验收完整鱼净质量参考归一化恒等关系。 | 最终 1 kg 验收鱼、精确 1–1 kg 参考范围和实际批次归一化，不是经验渔业绩效数据集 |
| ghg-product-allocation | standard | GHG Protocol 产品生命周期核算与报告标准，第 9 章分配。https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf （检索于 2026-10-09） | 分配方法政策：细分、因果物理关系、披露经济后备方法；不提供渔业绩效因子 |
