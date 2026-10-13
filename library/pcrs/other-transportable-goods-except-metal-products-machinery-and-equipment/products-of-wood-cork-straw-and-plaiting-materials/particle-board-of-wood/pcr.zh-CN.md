---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.particle-board-of-wood
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 未饰面 UF 胶合木质刨花板（树脂制备经逐项核算）

## 1. 范围与适用性

本 PCR 适用于通过干法铺装和热压、以未改性 UF 胶结的未定向、未饰面平板木质颗粒板。一个数据集声明一组树种/来源混合、表芯层粒度、树脂配方、目标密度和厚度、出厂含水率及压制路线。不同配方、密度/厚度等级及连续与批次压制须按实测队列分开；不规定通用工况区间或行业配方。[usda-handbook-2021; epa-pb-2002]

UF 制备是明确的前景阶段，可在板材厂内，也可扩展至能提供实际原料、能源、得率及排放记录的已识别供方。外购甲醛水溶液从树脂反应器上游开始；由甲醇制造甲醛仍归其背景供货数据集。采购胶黏剂若只标明 UF/MUF/PF/pMDI 家族，不足以支持本路线。须掌握实际树脂配方及每种另加化学品；供方特定、经核实的商品配方可支持后续经审查路线，不在此静默替换。不采用供方平均配方。[wilson-resins-2010]

排除具有定向或独特大片架构的 OSB/waferboard；竹、亚麻、蔗渣等非木原料；基于纤维的 MDF/硬质纤维板；单板/层压或纸饰面/涂漆板；模压件；防腐处理回收木；MUF、PF、pMDI 等其他胶结剂；成分不明蜡乳液。专门生产的未处理木片、锯木共产品及回收清洁实木分别声明。CPC 3.0:31431 是范围背景；本有限路线是 narrower 候选，不代表完整分类覆盖。[usda-handbook-2021; corrim-pb-2024]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.particle-board-of-wood |
| classification_refs | CPC 3.0 31431; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 原料逐项核算的未改性 UF 胶结未饰面平压木质刨花板 |
| excluded_products | OSB；waferboard；非木板；纤维板；饰面/涂层板；模压产品；不明或其他胶结配方 |
| representative_product | 一组经接受的木材树种/来源、粒形、UF 配方、密度、厚度及含水率队列 |
| production_route | 木料分选/细化 → 干燥 → UF 合成/混拌逐项核算 → 铺装 → 热压 → 冷却 → 砂光/定尺 → 堆垛/包装 |
| market_state | 板材厂门验收未饰面板；运输包装另计 |

## 3. 参考流

质量声明单位支持供应链 LCI；不确立相等的安装建筑服务或参考使用寿命。

| 字段 | 值 |
| --- | --- |
| What | 供应所声明等级的未饰面木质刨花板 |
| How much | 1 千克验收净板材 |
| How well | 声明密度、厚度、含水基准、力学等级及甲醛检测方法/等级；不得无依据声称等级 |
| How long or cycle | 一次厂门交付；寿命不在本单位内 |
| reference_flow_link | `finished_panel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 刨花板 `4f19ca17-7b3b-11dd-ad8b-0800200c9a66` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 树种及来源份额；专门料/共产品/回收状态；污染物接受条件；湿/干质量约定；颗粒架构；实际 UF 配方及批次检测；树脂固形物/游离甲醛；蜡/催化剂身份；实测含水率下密度；实际厚度/尺寸；层数；干法铺装；压机类型、温度、压力、停留/速度；干燥直/间接热及燃料来源；冷却/砂光/未饰面状态；力学及甲醛检测方法/等级；地区及期间；扩展树脂供方边界；分配及包装 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 | kg | 采用声明出厂含水率下验收净板质量，排除包装；用 cp_reference 采集 Q。每项清单分母均为每 1 kg 参考流。 |
| `moisture_basis` | 木料及板材物理账 | 质量 | kg | 干基 u = 水质量 / 绝干质量；湿质量 = 干质量 × (1+u)。湿基 w = u/(1+u)。采用同样本烘干或经验证仪表记录；木材水分与树脂反应/稀释水分开。[usda-handbook-2021] |
| `volume_conversion` | 按体积计的木片、气体及板材元数据 | 体积及实测质量 | m3; kg | 板体积 = 各件实际长 × 宽 × 厚之和；板材密度采用匹配净质量和含水率。木片 UUID 3fa2a6a7-224c-4d99-bd55-a214f0a83161 仅确认物料身份及 Volume/m3，不证明堆积体积。分开实测湿千克、松散堆积体积 Vb、供方/背景固定参考数量 A_provider 及其单位/实体或堆积约定，以及以该约定表示的实测期间需求体积 V_provider。取得供方/背景的实体/堆积定义、含水/状态及堆积约定；以兼容定义实测同批实体体积 Vs、湿堆积密度 rho_b、实体密度 rho_s 及堆积因子 k = Vs/Vb。仅经验证的匹配状态转换可得到 V_provider；供方过程缩放 n_provider = V_provider/A_provider，原生 Volume 交换以 V_provider/Q 表达 m3/kg，均只进行一次对应缩放/归一。A_provider 保持供方固定参考数量，不变成实测需求或每 kg 数量；数据库次级质量/体积系数不是实测密度或堆积因子。A_provider/定义/转换未知时数量链接不完整，即使 UUID 正确。气体体积同样要求供方/背景参考条件及匹配状态。[fao-ubet-volume; usda-handbook-2021] |
| `recipe_basis` | 树脂及添加剂 | 质量 | kg | 记录每项实际采购成分/配方；产品与有效成分/固形物千克分别披露。不重复计溶液水或内部 UF 树脂交接。不从行业平均比例推断 UF 用量。[wilson-resins-2010] |
| `energy_basis` | 能源及有效热 | 具有明确物理基准的能量 | MJ | 电力 MJ = 实测 kWh × 3.6。燃料低位热值输入和实测净交付热分开；不假设锅炉效率。蒸汽/热水有效热须有供回流量/焓、压力、温度及凝结水/损失记录，并匹配背景定义。蒸汽 MJ 属性本身不够。[epa-pb-2002; epa-boiler-2022] |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 板材厂已识别外购木料及已识别 UF 反应器批次检测的外购甲醛水溶液/尿素；这些门前供应链接入背景 |
| starting_condition_role | 所采集门状态，不是无负荷起点 |
| product_classification_scope | CPC 3.0:31431; narrower |
| recursive_input_rule | 外部同类板不是原木料捷径；本路线排除回收施胶板。内部修边返料是内部账，不是新增采购参考流 |
| upstream_dataset_requirement | 来源特定林业/削片及共产品分配；化学品制造；燃料及供电；回收作业；运输；废物处理。合成已扩展为前景时，不再同时计外购 UF 背景 |
| disclosure | 板材及树脂场址、所有门与所有权、来源树种、原物料状态、纳入热/治理、上游阶段、库存变化、排除阶段、分配和不确定性 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all datasets | 仅声明的平压 UF 胶合未饰面木板符合。审查每项原料和制备阶段；专门木片承担林业和制备负荷；共产品承担合理来源阶段负荷。扩展树脂供方须保留实际得率及交接量。 | `usda-handbook-2021`; `wilson-resins-2010`; `corrim-pb-2024` |
| `boundary_heat` | heat and emissions | 纳入实际干燥燃料/直燃、独立自有锅炉、压机供热、氧化治理燃料、湿法治理及辅助电力。同一计量时段或排放流只计一次。AP42 锅炉证据不把锅炉排放变为干燥因子。外购热不在当前列举的自有燃料路线内，须另核实供货及净热基准。 | `epa-pb-2002`; `epa-boiler-2022` |
| `boundary_recovery` | recovered wood | 要求前用途/处理、污染检测、废物/产品法定状态、回收/分选/清洁/运输及损失记录。再生不是零负荷证据；声明循环分配约定及敏感性，保留实际回收负荷。 | `corrim-pb-2024` |
| `boundary_downstream` | all datasets | 止于验收已包装板材厂门，包装交换与板材质量分开。施工、使用期甲醛暴露、寿命、处置及 D 模块抵扣须另建情景；不移植 75 年假设或报告寿终平均情景。 | `corrim-pb-2024` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `uf_board` | UF 制备及木质刨花板制造逐项核算 | required | 一个声明配方及板材队列，UF 反应器及木材厂来源可解析 | aggregated_foreground | 1 千克验收净板材 |

实物阶段分别计量：木料接收/分选 → 细化/筛分 → 干燥 → 批次制备 UF 施胶 → 干法铺装 → 热压 → 冷却 → 砂光/修边 → 堆垛/包装。UF 反应器 → 混拌是实测湿树脂/固形物交接；干燥/锅炉 → 压机是实测热交接。供方树脂转运、表芯层分流、回收木得率、修边返料和清洁细料供燃料链接两端数量相等。这些是聚合单元内的实物链接，不生成第二个成品板输出。外售/废物/排放保留为外部清单行。[corrim-pb-2024，表9；epa-pb-2002，图10.6.2-1]

### 过程：UF 制备及板材制造逐项核算（`uf_board`）

#### 输入

##### 产品流

###### 木片（`dedicated_chips`）
每项木片交换的数量基准条件：保留 Volume 身份，但实测堆积 Vb、湿质量及供方/背景固定参考量 A_provider、转换后的期间体积 V_provider 彼此不同。记录实际上游数据集的实体/堆积约定、同批树种、含水/状态及实测堆积因子 k = Vs/Vb。定义/状态匹配后才由实测需求转换得到 V_provider，再以 V_provider/A_provider 缩放供方过程；原生交换量为 V_provider/Q。A_provider 不随需求改变；转换未知时数量链接仍未决。不得将数据库次级质量系数当密度。[fao-ubet-volume]


为本板专门由木料生产并外购的未处理木片；保留树种、来源林业和完整削片负荷。实测松散体积、同批湿基堆积密度及含水率；不得假设为零负荷剩余物。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：队列归属及匹配实体/堆积、含水/状态转换后得到同期 V_provider，原生交换量为 V_provider/Q（m3/kg），仅归一一次。供方过程缩放另为 V_provider/A_provider；A_provider 是固定供方参考数量及其约定，不是需求体积。实物堆积体积本身不证明供方约定；转换证据缺失时数量链接未决。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed`
- 来源：`corrim-pb-2024`

###### 木片（`coproduct_chips`）
每项木片交换的数量基准条件：保留 Volume 身份，但实测堆积 Vb、湿质量及供方/背景固定参考量 A_provider、转换后的期间体积 V_provider 彼此不同。记录实际上游数据集的实体/堆积约定、同批树种、含水/状态及实测堆积因子 k = Vs/Vb。定义/状态匹配后才由实测需求转换得到 V_provider，再以 V_provider/A_provider 缩放供方过程；原生交换量为 V_provider/Q。A_provider 不随需求改变；转换未知时数量链接仍未决。不得将数据库次级质量系数当密度。[fao-ubet-volume]


由多输出锯木厂或单板厂销售并外购的未处理木片。即使物理流 UUID 相同，也与专门生产木片分账；取得来源阶段分配记录。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：队列归属及匹配实体/堆积、含水/状态转换后得到同期 V_provider，原生交换量为 V_provider/Q（m3/kg），仅归一一次。供方过程缩放另为 V_provider/A_provider；A_provider 是固定供方参考数量及其约定，不是需求体积。实物堆积体积本身不证明供方约定；转换证据缺失时数量链接未决。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed`
- 来源：`corrim-pb-2024`

###### 作为共产品销售的未处理锯木锯末（`coproduct_sawdust`）

未施胶木锯末原料，不是木屑燃料或空气粉尘；称量湿质量、含水率并记录来源负荷。

- 选定流：作为共产品销售的未处理锯木锯末
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed`
- 来源：`corrim-pb-2024`

###### 作为共产品销售的未处理刨削刨花（`coproduct_shavings`）

未施胶的刨削刨花；记录共产品生成前是否已由供方干燥，分配适用的上游干燥负荷。

- 选定流：作为共产品销售的未处理刨削刨花
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed`
- 来源：`corrim-pb-2024`

###### 尿素（`urea`）

原始记录中分开树脂反应用尿素和后加游离尿素捕醛剂；仅合并同一化学品交换。以产品千克计，不用氮千克。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`wilson-resins-2010`

###### 树脂合成用甲醛水溶液，批次成分经检测（`formaldehyde_solution`）

一个实际供货溶液产品；要求批次甲醛、甲醇稳定剂和水的质量分数及供方上游定义。不得假定实验室福尔马林配方。物理化学品/水账记录其成分，不再重复作为采购输入。

- 选定流：树脂合成用甲醛水溶液，批次成分经检测
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`wilson-resins-2010`

###### 氢氧化钠（`naoh`）

仅用于已核实牌号的工业固体氢氧化钠；记录纯度与实际干产品质量。若采购不同水溶液，须另行解析该配方；另加稀释水单列。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`wilson-resins-2010`

###### 甲酸（`formic_acid`）

实际 UF 批次配方中存在时，逐项记录调 pH 用甲酸；记录商品浓度和有效成分，不假设用量。

- 选定流：甲酸 `b2fe4c3e-d4e6-40be-93ee-e47d512b8309`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`wilson-resins-2010`

###### 硫酸铵（`ammonium_sulfate`）

用于调 pH 或固化时单列硫酸铵；区分合成阶段和板材施胶阶段用量。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`wilson-resins-2010`

###### 氯化铵（`ammonium_chloride`）
交付催化剂身份仍未决；反应器/吸收塔状态及按体积计候选不能与称重固体交货互换。使用前解析实际供方牌号/状态。


仅在实际投料记录确认时列氯化铵固化催化剂；不设泛称固化剂流。不同催化剂须在数据集完成前增加各自原子行。

- 选定流：氯化铵，交付固体固化催化剂
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`epa-pb-2002`

###### 石蜡（`paraffin`）

石油馏分石蜡以本体或熔融形式添加，按蜡称重。乳化剂身份不明的蜡乳液不在本配方范围；不得替用废塑料再生石蜡。

- 选定流：石蜡 `17bff97f-179d-49d4-9e97-5128bd6020a6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_recipe`
- 来源：`usda-handbook-2021`; `epa-pb-2002`

###### 工艺用水（`process_water`）

外购经处理工艺水用于树脂稀释、混拌、清洁、湿法治理或冷却补水。按阶段记录；内部回用水和化学溶液已有的水不算新增采购。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`corrim-pb-2024`

###### 交流电（`electricity`）

已核实电压等级的电网平均交付交流电；纳入碎料制备、树脂反应器、干燥风机、铺装、压机、冷却、砂光、包装、锅炉辅机和治理设备。不同供电方式或电压须另用已核实流。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`corrim-pb-2024`

###### 气态天然气（`natural_gas`）
气体数量基准条件：保留气态天然气身份，但计量体积 Vm、供方/背景固定参考量 A_provider 及转换后的期间需求体积 V_provider 分开。取得两种状态的绝对 T/P、干/湿约定、水含量、气体组成及压缩因子 Z；采用校准的匹配状态转换及实际背景 m3 定义。转换只求 V_provider，供方过程缩放为 V_provider/A_provider，原生交换为 V_provider/Q；A_provider 保持固定。组成、Z 或参考条件未知时数量链接仍未决，不是零量。


存在时纳入管道气态天然气，用于直燃干燥机、自有锅炉或氧化治理。保留各阶段独立计量；记录压力、温度、压缩因子、体积参考条件及供方热量基准。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：经匹配 T/P、组成、干湿和 Z 转换得到同期可归属 V_provider，原生交换量为 V_provider/Q（m3/kg），仅归一一次。供方过程缩放另为 V_provider/A_provider；A_provider 是固定供方参考数量及其约定，不是需求体积。状态/定义未知时数量链接未决。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`
- 来源：`corrim-pb-2024`

###### 木片（`wood_fuel`）
每项木片交换的数量基准条件：保留 Volume 身份，但实测堆积 Vb、湿质量及供方/背景固定参考量 A_provider、转换后的期间体积 V_provider 彼此不同。记录实际上游数据集的实体/堆积约定、同批树种、含水/状态及实测堆积因子 k = Vs/Vb。定义/状态匹配后才由实测需求转换得到 V_provider，再以 V_provider/A_provider 缩放供方过程；原生交换量为 V_provider/Q。A_provider 不随需求改变；转换未知时数量链接仍未决。不得将数据库次级质量系数当密度。[fao-ubet-volume]


仅指外购清洁未施胶木片燃料。记录树种、来源及上游负荷、湿基堆积密度、含水率和实际低位热值。已计入进料的内部细料在内部燃料账记录，不再采购计数。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：队列归属及匹配实体/堆积、含水/状态转换后得到同期 V_provider，原生交换量为 V_provider/Q（m3/kg），仅归一一次。供方过程缩放另为 V_provider/A_provider；A_provider 是固定供方参考数量及其约定，不是需求体积。实物堆积体积本身不证明供方约定；转换证据缺失时数量链接未决。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`
- 来源：`epa-boiler-2022`; `epa-pb-2002`

###### 柴油（`diesel`）

场内自有移动设备的实际柴油；要求牌号、化石/生物混合组成及来源数据集，不用固定式发动机代理。外部运输燃料归其服务数据集。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`
- 来源：`corrim-pb-2024`

###### 聚乙烯薄膜（`pe_film`）

实际聚乙烯包装膜质量，排除周转包装；背景中区分采购原生/再生份额，不以挤出服务替代材料。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`corrim-pb-2024`

###### 钢打包带（`steel_strap`）

仅指质量组成为 99% Fe 和 1% C、组成/路线与已核实记录匹配的回收再加工未涂层钢打包带；不存在时标明不存在，其他实际绑带须增加独立核实行。

- 选定流：钢打包带 `56fe4f71-b594-4b55-8553-c87f2516737d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`corrim-pb-2024`

###### 未处理实木包装垫条（`wood_sticker`）

单项分隔堆垛板材的木垫条；净材料质量和周转次数来自包装记录，不是纸标签。

- 选定流：未处理实木包装垫条
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_pack`
- 来源：`corrim-pb-2024`

###### 前景供料公路货运服务（`inbound_road_freight`）

木料及化学品供货的车型、载重明确的外部公路服务，包括扩展供方边界中的树脂转运。不重复计入场内设备。其他运输方式另列流。

- 选定流：前景供料公路货运服务
- 流属性/单位：Transport service / t.km
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`corrim-pb-2024`

##### 废物流

###### 回收未处理实木，未施胶，用于碎料制备（`recovered_clean_wood`）

仅纳入经金属去除和污染检测后接受、来源可追溯的清洁实木。排除防腐处理材、涂漆材和施胶板材；明确记录回收、分选、清洁、损失和前生命周期负荷约定。

- 选定流：回收未处理实木，未施胶，用于碎料制备
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_feed`
- 来源：`corrim-pb-2024`

##### 基本流

#### 输出

##### 产品流

###### 刨花板（`finished_panel`）

厂门验收冷却、砂光、定尺的未饰面平压 UF 木质刨花板，排除包装。树脂制造与成品堆垛保留在同一聚合前景中，避免重复产品参考。

- 选定流：刨花板 `4f19ca17-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_reference`
- 来源：`corrim-pb-2024`

###### 作为共产品销售的清洁未施胶木细料（`sold_clean_fines`）

仅指有实际销售及下游用途证据、离开聚合边界的物料。内部返料或燃烧不是外部共产品。

- 选定流：作为共产品销售的清洁未施胶木细料
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`corrim-pb-2024`

##### 废物流

###### UF 胶合不合格木质刨花板（`rejected_panel`）

施胶不合格板外送处理；保留干木材、树脂、含水率和污染组成。

- 选定流：UF 胶合不合格木质刨花板
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`corrim-pb-2024`; `epa-pb-2002`

###### 外送处理的 UF 刨花板砂光粉尘（`captured_sanding_dust`）

仅指被捕集并外送处理的固体粉尘；区分内部回用、燃料和空气颗粒物。含树脂粉尘不是清洁木燃料。

- 选定流：外送处理的 UF 刨花板砂光粉尘
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`corrim-pb-2024`; `epa-pb-2002`

###### 回收实木分选出的废钢（`sorted_steel_reject`）

回收料分选输出；金属质量纳入回收得率和接收再生商，不计入木板质量。

- 选定流：回收实木分选出的废钢
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`corrim-pb-2024`; `epa-pb-2002`

###### 清洁木剩余物锅炉底灰（`bottom_ash`）

仅指自有锅炉底灰，须有灰碳及矿物检测、处理联单，与飞灰分开。

- 选定流：清洁木剩余物锅炉底灰
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`epa-boiler-2022`

###### 清洁木剩余物锅炉飞灰（`fly_ash`）

锅炉捕集飞灰，与底灰和排放烟尘分开；核对燃料与治理设备。

- 选定流：清洁木剩余物锅炉飞灰
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`epa-boiler-2022`

###### UF 树脂反应器含水排放液（`resin_purge`）

送处理的实际不合格液体排放；检测水、游离甲醛、甲醇、尿素以及已固化/未固化固形物。

- 选定流：UF 树脂反应器含水排放液
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`wilson-resins-2010`

###### 刨花板湿法治理废水（`process_effluent`）

湿法治理或设备清洁废水送场外处理。记录去向以及悬浮物/水中分析物；不再将其同时记作直接排入自然界。

- 选定流：刨花板湿法治理废水
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`corrim-pb-2024`; `epa-pb-2002`

##### 基本流

###### 二氧化碳（生物源）（`co2_bio`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。即使某 GWP 报告口径不计生物 CO2，LCI 仍保留本流。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 二氧化碳（化石源）（`co2_fossil`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 一氧化碳（生物源）（`co_bio`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 一氧化碳（化石源）（`co_fossil`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 甲烷 (生物源)（`methane_bio`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 甲烷 (化石源)（`methane_fossil`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 一氧化二氮（`nitrous_oxide`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 一氧化氮（`nitric_oxide`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 二氧化氮（`nitrogen_dioxide`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 二氧化硫（`sulfur_dioxide`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 甲醛（`formaldehyde_air`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 甲醇（`methanol_air`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 乙醛（`acetaldehyde_air`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：乙醛 `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 苯酚（`phenol_air`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：苯酚 `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 乙醇（`ethanol_air`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：乙醇 `08a91e70-3ddc-11dd-9349-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 丙醛（`propanal_air`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：丙醛 `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### α-蒎烯，立体构型未特指（`alpha_pinene_air`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。若检测区分立体构型则据实解析；无证据不得替用单一对映体。

- 选定流：α-蒎烯，立体构型未特指
- 流属性/单位：Mass / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 颗粒物 (PM2.5)（`pm25`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。采用 calc_pm 的互斥粒径核算；不得叠加嵌套的 PM10 和 PM2.5 累计量。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 颗粒物 (PM2.5 - PM10)（`pmcoarse`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。采用 calc_pm 的互斥粒径核算；不得叠加嵌套的 PM10 和 PM2.5 累计量。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 颗粒物（> PM10）（`pmover10`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。采用 calc_pm 的互斥粒径核算；不得叠加嵌套的 PM10 和 PM2.5 累计量。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

###### 水蒸气（`water_vapour`）

本单一物种向室外空气排放，子介质未特指；树脂储存/反应器、干燥、压制、冷却、整理、锅炉及治理出口的来源记录分别保留。采用物种质量检测或经验证场址平衡；VOC 总量、NOx 总量或校正流不能替代本交换。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：库存调整和队列归属后的每 1 kg 参考流记录交换；采集协议保留绝对总量及 cp_reference 的分母 Q。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`epa-pb-2002`; `epa-boiler-2022`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_separation` | wood inputs and outputs | 首先细分或用实测因果驱动分开专门木料、树脂、热及治理负荷。外购锯木共产品须有供方分配文件；联合来源负荷的干质量分配是与所引研究一致的声明基准，不是零价格或零负荷证明。若经济属性不同使质量归属不确定，保留价格/其他分配敏感性。 | `corrim-pb-2024` |
| `allocation_physical` | all physical exchanges | 保留未分配的质量、水、碳以及内部热/木材/树脂交接。分配份额用于独立环境负荷账，不乘到实物共产品输出、库存或内部链接数量。返修边料/细料不是独立外售产品。包装及专用处理归属相应产品。 | `corrim-pb-2024` |
| `allocation_heat` | shared heat equipment | 按各接收端实测净有效热分配共享锅炉/树脂供热负荷；不用仅燃料推测效率或仅蒸汽质量份额。披露外送热及损失。热电联产不在本路线内，除非另加入经审查分配及电力交换。 | `epa-boiler-2022`; `wilson-resins-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference` | uf_board | 验收净板 | 计量及可追溯记录 | 队列；树种/来源；等级；厚/长/宽；净质量 Q；出厂含水率；包装皮重；不合格/退货/期初期末库存 | 校准净称重；验收与厚度测量；含水率采用烘干或经烘干验证的校准仪表。准备：Q 为同期间库存调整后的验收板质量，排除不合格与包装。 | kg; m; moisture fraction | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |
| `cp_feed` | uf_board | 各木料来源和几何 | 计量及可追溯记录 | 交货；供方过程/门；树种；专门料/共产品/回收状态；湿质量；松散堆积 Vb；按供方定义独立测实体 Vs；湿堆积 rho_b；实体 rho_s；堆积 k = Vs/Vb；供方/背景参考量 A_provider 及单位/实体或堆积约定；转换后的期间需求 V_provider；供方缩放 n_provider；来源及参考含水/状态；污染物；库存；来源分配；回收得率；损失去向 | 逐批隔离称重/采样；取得供方林业/削片/锯木阶段记录；回收木污染接受及分选质量平衡。逐来源调整库存，保留表芯层与回用链接。体积链接前取得实际供方/背景参考 A_provider 及定义；用校准体积/质量方法实测同批密度/堆积及匹配含水/状态。数据库系数不是密度；由匹配实测求 V_provider，供方缩放为 V_provider/A_provider；原生交换按 V_provider/Q 仅归一一次。A_provider 保持固定，未知转换保持未决。 | kg; m3; moisture fraction | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |
| `cp_recipe` | uf_board | 各 UF 成分及添加剂 | 计量及可追溯记录 | 实际批次号；供方/场址；完整化学配方；交货牌号/浓度；甲醛/甲醇/水检测；原料千克；固形物/游离尿素/游离甲醛；摩尔比；pH；反应时间/温度；批次得率；交付树脂；压制催化剂/蜡剂量 | 校准原料投料、交货证书及批次固形物/游离甲醛检测；核对反应器进料、水、树脂、排放液和排放。扩展供方记录采用实际交付板材队列的树脂批次；不猜测平均化学品拆分。 | kg; mass fraction; temperature; time; pH | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |
| `cp_water` | uf_board | 采购工艺水 | 计量及可追溯记录 | 仪表；用途/阶段；取用；另加稀释水；冷却补水；湿治理用水；回用水；废水；蒸发；库存 | 计量外购处理水；与采购分开核对溶液已有水及树脂缩合水；区分内部循环水。 | kg; m3 | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |
| `cp_energy` | uf_board | 交付电力 | 计量及可追溯记录 | 仪表；电压；供方/电网/地区/年份；kWh；设备/阶段；负荷小时；批次/队列；共享接收端 | 分表计量树脂、制备、干燥风机、压机、整理、热辅机及治理；唯一时段与场址总表和实际共享驱动核对。实测 kWh 转 MJ。 | kWh; MJ | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |
| `cp_fuel` | uf_board | 各外部及内部燃料 | 计量及可追溯记录 | 燃料号/物种/来源；牌号/混合组成；供方；仪表；湿质量；体积；密度；含水率；碳；低位热值；绝对 T/P；干湿约定；水含量；气体组成；Z；计量 Vm；背景参考 A_provider 及单位/m3定义；转换后的期间需求 V_provider；供方缩放 n_provider；木片 Vs/Vb/rho_b/rho_s/k 及供方定义；干燥/锅炉/氧化器/移动设备；库存；内部清洁细料分流 | 逐燃烧设备计量/称重；取得供方/背景气体 T/P、组成、干湿及 Z 定义和实际参考 A_provider；检测场址木料体积/质量/含水/热值并匹配实体/堆积 A_provider 定义。实物测量与解析后的供货量分开；A_provider 固定；匹配转换得到 V_provider，供方缩放为 V_provider/A_provider，原生交换按 V_provider/Q 仅归一一次；未知定义/转换保持未决。核对外部木料、内部清洁燃料分流和灰。不得把施胶剩余物作清洁未处理燃料。 | kg; m3; MJ | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |
| `cp_heat` | uf_board | 内部有效热 | 计量及可追溯记录 | 接收端；供回质量和焓；温度/压力；凝结水；蒸汽品质；时段；损失；燃料输入；树脂/干燥/压机需求；外送热 | 校准热表或按实际水/汽状态采用供回焓差平衡；核实净交付热，链接两端匹配。全部接收端/损失与燃料及锅炉账核对；未知热基准仍未决。 | kg; MJ; temperature; pressure | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |
| `cp_pack` | uf_board | 各包装组件 | 计量及可追溯记录 | 薄膜聚合物；绑带牌号/路线；木垫条树种；交货/使用/退回质量；周转次数；队列；包装皮重 | 逐组件称重，核对采购、库存及退回/周转；Q 排除包装。声称清单完整前，其他实际包装组件须各自单列。 | kg | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |
| `cp_residue` | uf_board | 各共产品/废物 | 计量及可追溯记录 | 行/物料；来源/阶段；湿/干千克；含水率；树脂/污染；内部回用/燃烧；销售数量/价格；灰碳；液体检测；处理去向；库存 | 隔离校准称重和去向联单。内部剩余物保留链接账；区分清洁/施胶、底灰/飞灰及液流。检测处理相关成分；负荷分配前保留完整实物数量。 | kg; mass fraction | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |
| `cp_air` | uf_board | 各室外空气净排放物种 | 计量及可追溯记录 | 物种/CAS；排气/无组织源号；阶段；治理序列；质量浓度；实际/标准干气流；氧/水修正；运行小时；启停；化石/生物来源；PM 粒径/可过滤/可凝结；检出限 | 物种特定合格烟道/源检测及流量监测，覆盖代表批次/季节/运行负荷；净治理出口与捕集物和未处理入口分开。分别测 NO 与 NO2，否则保留未决物种拆分；不虚构 NOx 拆分。明确碳来源和检出限；未分物种 VOC/PM 保留为未定量覆盖缺口，不虚构物种。 | kg; mass/volume; gas volume/time | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |
| `cp_transport` | uf_board | 入厂公路服务 | 计量及可追溯记录 | 货运；起终点；实际运输湿质量；距离；车型/载重；空返；方式；树脂供方转运；承运数据集 | 用称重票和承运路线/载重记录；按方式计算实际货运吨公里。排除已在自有燃料账的场内柴油，避免重复上游运输。 | t.km | 每批/每批料及计量时段；期间端点 | 完整声明核算期间，含季节及启停变化 | 同产品队列；具名树脂供方及板材场址；披露全部共享接收端 | 每 1 kg 参考流 | 校准；证书；原始日志；核对；不确定性及缺口 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | x_i = 经归属及库存调整的交换总量 / Q；Q 为 cp_reference 验收净成品板千克。参考输出是 1 千克。另保留绝对实物总量及归属记录。 | cp_reference; all row collection protocols | 归一化清单 | `corrim-pb-2024` |
| `calc_chip_supply_volume` | dedicated_chips; coproduct_chips; wood_fuel | 同批/状态且实体/堆积定义匹配时，k = Vs/Vb，m_wet = rho_b × Vb = rho_s × Vs。若 A_provider 的参考定义为相同堆积基准，则 V_provider = Vb；若为兼容实体基准，则 V_provider = Vs = k × Vb。参考含水/状态不同时，先把守恒干木质量换到供方参考含水率及对应实测密度/堆积条件；不得跨状态复用来源 k 或密度。明确声明固定 A_provider、单位、定义及证据，并保留转换后期间 V_provider。供方过程缩放 n_provider = V_provider/A_provider；原生交换按 V_provider/Q 仅归一一次，不改变 A_provider。A_provider/k/状态未知时链接不完整；FAO 典型因子或数据库次级属性系数不是实测转换。 | cp_feed; cp_fuel; fixed supplier/background A_provider and definition; matched measurements; Q | 固定供方参考量、原始及匹配期间体积、过程缩放与每 kg 原生交换分账 | `fao-ubet-volume`; `usda-handbook-2021` |
| `calc_gas_supply_volume` | natural_gas | 相同干组成且气体物质的量守恒时，V_provider = Vm × (Pm/Pb) × (Tb/Tm) × (Zb/Zm)，温度/压力用绝对量，b 为背景参考状态。湿气仪表须先按实测水蒸气份额作经验证干湿修正再用此式；组成不同或 Z/参考条件不充分时须进一步供方核实，不假设理想气体转换。实际 Vm、转换后期间 V_provider 及固定 A_provider 分开保留；n_provider = V_provider/A_provider，原生交换按 V_provider/Q 仅归一一次。 | cp_fuel; fixed supplier/background A_provider and T/P/composition/wet-dry/Z; Q | 匹配期间体积 V_provider、固定 A_provider、过程缩放及原生 m3/kg 分账 | `epa-pb-2002` |
| `calc_wood_water` | wood and panel ledgers | m_dry = m_wet/(1+u)；u = (m_wet-m_dry)/m_dry；w = u/(1+u)。核对干木料、留存树脂/添加剂、带入/另加/生成水、成品、外部废物/排放及库存变化；内部回用只在聚合时抵消，保留匹配阶段交接。 | cp_reference; cp_feed; cp_recipe; cp_water; cp_residue; cp_air | 干木料及水平衡 | `usda-handbook-2021` |
| `calc_recipe` | UF recipe and retained resin | 原料/配方组分质量 = 实际投料产品千克 × 批次检测质量分数。按实际向板材队列交接树脂量归属供方批次输入/损失；保留反应得率、缩合水及损失平衡。不把内部液 UF 再记一次外部输入，不把尿素与甲醛输入质量之和等同于固化干聚合物质量。 | cp_recipe; cp_water; cp_air; cp_residue | 成分及留存固形物账 | `wilson-resins-2010` |
| `calc_heat` | heat receivers and fuel | 电力 MJ = kWh × 3.6。燃料能量 = 声明基准实测燃料量 × 匹配实测低位热值。有效热 = 供出质量 × 供出焓 − 回流质量 × 回流焓，并校正有记录损失/凝结水。核对接收端总量；未知焓/参考条件时不得形成可用热量。 | cp_energy; cp_fuel; cp_heat | 输入能量及净有效热分开 | `epa-boiler-2022` |
| `calc_air` | species emissions | 同基准实测物种浓度 × 干气体积按实际运行时间积分；独立实测无组织源只添加一次。采用一致水分/氧/温度修正及不确定性。不从产品舱测浓度、LCIA CO2 当量或以碳计 VOC 总量推断场址千克。 | cp_air | 单物种室外空气净质量 | `epa-pb-2002` |
| `calc_pm` | pm25; pmcoarse; pmover10 | 同一来源、期间及可过滤/可凝结定义下：PM2.5 区间 = 累计 PM2.5；PM2.5–PM10 区间 = 累计 PM10 − 累计 PM2.5；>PM10 区间 = 总 PM − 累计 PM10。结果须非负且累计量实测兼容。可凝结 PM 须按有记录粒径证据归属，否则另留未决交换；不得填零或猜测 PM 拆分。 | cp_air | 三个不重叠区间 | `epa-pb-2002`; `epa-boiler-2022` |
| `calc_carbon` | wood/fuel/resin physical balances | 采用实测干物料碳和化石/生物来源。核对板材、销售物、剩余物/灰、库存、CO2、CO、甲烷及各实测有机物种中的碳。仅以经验证剩余碳平衡乘 44/12 推导 CO2，按来源分开；LCI 保留生物 CO2，储存生物碳与 LCIA 分开披露。上游已计木材生长时不在厂内自动增加负 CO2。 | cp_feed; cp_recipe; cp_fuel; cp_residue; cp_air; cp_reference | 分开的化石/生物碳平衡 | `corrim-pb-2024`; `epa-boiler-2022` |
| `calc_allocation` | environmental burden ledger only | 合格联合来源输出 a_j = 输出 j 干质量 / 合格输出总干质量；B_j = a_j × 联合负荷 + j 专用负荷。经济敏感性采用期间匹配销售额，共享热采用实测有效热份额。实物输出及内部链接保留完整实测数量。 | cp_feed; cp_residue; cp_heat; actual joint burdens and prices | 分配后的环境负荷账 | `corrim-pb-2024` |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_cohort` | all rows | 同一配方/规格/期间 Q；保留来源和供方范围、采样代表性及期初期末库存。本方法本身没有取得工厂记录。 | cp_reference; cp_feed; cp_recipe |
| `quality_complete` | all flows | 评估每项实际化学品、燃料、包装组件、废物及物种。未测、不可获得、低于检出限和实际不存在是不同状态。新增实际成分或燃料路线须加原子行并核实身份后才能声称完整；不设胶黏剂家族或 VOC 总量行。 | cp_recipe; cp_fuel; cp_pack; cp_air |
| `quality_evidence` | numeric parameters | 用主要场址/供方计量或独立论证的精确路线因子，保留来源定位、单位、控制/设备/树种/燃料适用性及不确定性。CORRIM 2021/2022 板材及 Wilson 2005 树脂平均值不是通用场址量；本稿不规定数值区间。 | original records and source applicability |
| `quality_identity` | all UUIDs and gaps | 流 UUID 仅是身份；核对类型、介质、配方、交付状态/路线、参考属性和单位与实际交换。已核实 Volume/m3 不确立实际供方/背景参考量 A_provider；实体/堆积木片定义、同批堆积/含水及气体 T/P/组成/干湿/Z 须支持链接。空 UUID 是未决，不是零量或数据库不存在证明。不以校正流或无关立体异构体/物种替代。 | identity and support evidence |

各协议聚合前先准备唯一、经归属与库存调整的期间总量；各交换总量除以同一 cp_reference 的 Q 千克验收净板。供方树脂批次先按实际交接给板材队列的量归属。保留绝对数量和所得每 1 kg 参考流数值。不采用单机采集基准。

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | 声明全部限定信息及唯一同队列参考输出。不能仅以 CPC 标签确立未饰面木质刨花板身份；扩展供方配方及成品状态须一致。 | `usda-handbook-2021` |
| `validate_balance` | all physical exchanges | Q 排除包装/不合格。核对实物质量/水/碳、实际木料损失、UF 反应/交接得率以及完整内部链接等量；环境分配独立。缺测或负 PM 差量仍未决。 | `corrim-pb-2024`; `wilson-resins-2010` |
| `validate_emissions` | air and heat | 明确物种、室外空气子介质、来源和单位；不叠加嵌套 PM、不用 VOC 总量代理、不猜测 NOx 拆分、不删生物 CO2。原始日志中自有锅炉和干燥边界分开。蒸汽 MJ 无经核实净供回基准时未决。 | `epa-pb-2002`; `epa-boiler-2022` |
| `validate_release` | data package | 声称可用数据集前，解决全部适用 UUID/单位、供方/背景参考量 A_provider 及木片/气体转换、配方、热和排放缺口，论证不存在行，增加缺失原子交换，并提供原始记录及分配敏感性。候选方法及软件检查不代表独立科学批准。 | `corrim-pb-2024` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用于适用性经核实的所声明木板产品供应模型输入 |
| allowed_use | 接入精确上游供应和废物处理后的从摇篮到厂门 LCI；区分扩展树脂前景与仅板材厂活动 |
| excluded_use | OSB、非木/纤维/饰面/模压产品；其他/未知树脂路线；使用暴露、服务等效、寿终抵扣；缺数据时发布 |
| required_metadata | 全部参考限定；板材/树脂场址及门；参考 UUID/属性/单位；Q；供方/配方/木料来源；热及排放方法；包装和分配 |
| required_quality_disclosure | 时间/地域/队列覆盖、计量和缺口、检出限、未决身份、分配约定/敏感性、独立实物碳及环境账 |
| update_trigger | 配方/木来源/污染/等级/密度/厚度/含水/压机/热/治理改变；供方数据修订或流身份纠正 |

## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `usda-handbook-2021` | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), chapters 4 (moisture), 10 (adhesives), 11 pp. 11–11 to 11–12 (particleboard). https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 颗粒与 OSB/纤维架构、干法铺装及含水定义；仅定性范围，不采用通用配方/密度 |
| `corrim-pb-2024` | literature | Puettmann, CORRIM, Cradle-to-grave Life Cycle Assessment of North American Particleboard, November 2023; revised April 3, 2024 (after March 22 ASTM verification). Sections 3.2.4–3.2.8 pp.18–19; 6.1 pp.26–27; 6.3/Table 9 pp.27–29. https://corrim.org/wp-content/uploads/2024/07/PB-Cradle-to-grave-LCA-Final.pdf | 2021/2022 调查，12 厂（美国9/加拿大3），来源及过程结构、共产品分配；不移植地区加权配方/能源/密度、下游寿命或处置情景 |
| `epa-pb-2002` | official_guidance | US EPA AP-42 Section 10.6.2 Particleboard Manufacturing, June 2002, pp.10.6.2-1–5, Figure 10.6.2-1, emissions tables with original device/fuel/control footnotes. https://www.epa.gov/sites/default/files/2020-10/documents/c10s06-2.pdf | 制造阶段、板材架构区别、干燥/压机/整理物种和治理；历史平均因子不是场址默认值 |
| `epa-boiler-2022` | official_guidance | US EPA AP-42 Section 1.6 Wood Residue Combustion In Boilers, March 2022, sections 1.6.1–1.6.3 and Tables 1.6-1/1.6-2 footnotes. https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf | 独立锅炉燃料、燃烧/治理和颗粒物/物种范围；不将因子移植给施胶燃料或干燥机 |
| `wilson-resins-2010` | literature | Wilson, Life-cycle inventory of formaldehyde-based resins used in wood composites in terms of resources, emissions, energy and carbon, Wood and Fiber Science 42 (2010), 125–143, manufacturing process pp.127–128 and UF material inventory. https://corrim.org/wp-content/uploads/2017/12/WFS_SI_LCI_Formaldehyde-based_Resins_in_Wood_Composites-Resources_Emissions_Energy_Carbon.pdf | 美国2005树脂调查，仅采用原料/反应器/pH/固形物结构；原件主要从甲醇制甲醛起始，与本稿外购水溶液不同；不采用调查配方用量 |
| `fao-ubet-volume` | official_guidance | FAO, Unified Bioenergy Terminology (UBET), Section 5.1.3 Mass, Volume and Density. https://www.fao.org/4/j4504e/j4504e08.htm | 区分实体/堆积体积及与含水率相关的密度；仅定义，实际供方/背景 A_provider 和同批实测转换；不采用表列典型因子/密度 |
