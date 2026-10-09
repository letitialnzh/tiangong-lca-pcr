---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-made-up-polyester-microfibre-cleaning-cloths
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 干式制成聚酯微纤维清洁布

## 1. 范围与适用性

本 PCR 覆盖购入已完成染整的针织聚酯微纤维织物，经干式裁剪并缝边制成的未涂层、未浸渍、可重复使用清洁布。布体和缝纫线均为 PET；供应商记录须证明实际成分及织物加工态。原生与再生 PET 投入须分别声明供应商画像，不设默认再生比例。针织聚酯擦拭布是代表性市场产品（`vileda-cleaning-cloths-2025`），不构成工厂配方或清洁性能保证。清洁布属于官方宽泛分类（`unsd-cpc3-notes-2025`）的一部分；本 PCR 不覆盖整项分类。

排除救生衣、救生带、浮力部件、一次性浸渍湿巾、非织造擦拭布、棉布、PET/聚酰胺混纺布、拖把总成、家用床上/餐桌/盥洗布草、地毯及单独织物。排除热封/超声封边以及一体化纺丝、针织、染色、纤维开纤、涂层、洗涤或热定形。实施这些工艺的场址须补充经审查的路线清单后才能声明该画像。前景从可直接裁剪的织物开始，到包装后的合格布结束。农业原料不属于此 PET 路线；聚合物/原料生产和供应商纺织加工属于上游。消费者清洁、洗涤、分销及寿命终结均不在该制造参考范围内。不设使用寿命、洗涤次数、健康或法规批准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-made-up-polyester-microfibre-cleaning-cloths |
| classification_refs | CPC 3.0 27190；较窄语义子集，不声明已接受映射 |
| covered_products | 具有缝边的可重复使用、未涂层针织 PET 微纤维清洁布 |
| excluded_products | 浮力用品；浸渍或非织造擦拭布；棉布及 PET/聚酰胺混纺布；家用布草；热封布；一体化纺织厂路线 |
| representative_product | 具有包缝边的干燥针织聚酯微纤维表面擦拭布 |
| production_route | 接收已完成染整织物；干式排料裁剪；缝纫线缝边；检验、厂内返工及包装 |
| market_state | 已验收、未浸渍的干燥出厂清洁布；包装单独列入清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于手工表面擦拭的可重复使用清洁布 |
| How much | 出厂时 1 kg 合格成品清洁布净质量 |
| How well | 实际产品规格声明尺寸、纤维成分及细度、针织结构、缝边完整性和验收标准；不建立清洁服务等效性 |
| How long or cycle | 一次制造交付；不设默认使用时长或洗涤寿命 |
| reference_flow_link | finished_cloth |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 干燥成品针织聚酯微纤维清洁布 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 擦拭用品类型；尺寸；布体及缝纫线 PET 成分；纤维细度；针织结构；原生/再生成分；来料染色及整理态；缝边；残余水分基准；排除包装的净质量；验收标准；场址地域；报告期；包装配置 |

前景数据包须声明全部限定信息。成品 UUID 尚未解决；织物或纤维 UUID 不能证明成品清洁布身份。质量参考用于制造强度，不用于不同清洁布的清洁服务比较。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用 cp_output，以校准秤称量已验收干燥清洁布并排除包装。所有行采用同一合格产出分母。声明调湿及残余水分；不得暗中将商业质量换为绝干质量。 |
| lot_normalization | 所有清单行 | 行内声明的质量或能量 | kg 或 MJ | 将归属批次的交换数量除以实测合格清洁布净质量 kg，保留各行分子单位。不得除以含包装毛质量或将不合格品计入合格产出。 |
| electricity_conversion | cut_electricity; sew_electricity; pack_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开能量属性及能量单位组；计量 kWh 按 1 kWh = 3.6 MJ 换算。这不表示供热燃料，也不改变电力参考属性。 |
| area_count_conversion | finished_fabric; finished_cloth | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 若原始记录采用面积或布的件数，采集同批次净质量及面积/件数，推导实测单位面积或单件质量。保留原始属性和换算证据；不假定克重或单件重量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入可机械裁剪的已完成染整、干燥、未涂层针织 PET 微纤维织物；声明供应商已实施的染色、开纤和整理 |
| starting_condition_role | 上游纺织产品投入 |
| product_classification_scope | 宽泛制成纺织品类别中，仅限声明的干式缝边 PET 清洁布路线 |
| recursive_input_rule | 来料已制成清洁布作为用于返工的单独外购用品记录；链接其上游数据集，不得计为新织物生产 |
| upstream_dataset_requirement | 与来料匹配的 PET/原料、纱线、针织及供应商染色整理数据，声明再生成分和地域画像；缝纫线及包装各自需要上游数据集 |
| disclosure | 前景场址、报告期、供应商织物态、排除阶段、公用工程覆盖、包装、返工、损失及未解决流身份 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_entry | receipt_cut | 前景从接收可裁剪织物开始，上游纺织负荷保留为链接投入，不重复为前景纤维生产。 | epa-textile-fabrication-2000 |
| boundary_gate | 所有过程 | 纳入接收/排料/裁剪、缝边、检验/返工、包装及可归属公用工程和维护。分别记录收集粉尘、外送废物和经证明的环境排放。 | epa-textile-fabrication-2000 |
| boundary_wet_extension | 路线适用性 | 场内织物湿整理、洗涤、开纤或干燥不属于该干式路线。扩展前须单独建立材料、化学品、技术圈水、废水处理及实测基本流排放清单。不假定干式裁剪产生废水。 | epa-textile-fabrication-2000 |
| boundary_completeness | 数据集声明 | 这是制造前景画像。摇篮到大门声明要求另行记录具有完整覆盖说明的上游数据集和运输链接。分销、使用及寿命终结被排除，不得暗中纳入。 | |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receipt_cut | 织物接收、排料和机械裁剪 | required | 所有覆盖清洁布 | 前景成形；核验织物成分、制定裁剪排料并分别收集边角料和粉尘 | 每 1 kg 参考流 |
| edge_sew | 包缝或缝边 | required | 所有缝边清洁布 | 前景连接；加入缝纫线、检验缝线并记录可归属润滑和返工 | 每 1 kg 参考流 |
| inspect_pack | 最终检验、干式返工及包装 | required | 所有覆盖清洁布 | 前景验收交付；测量净质量并单独领用实际包装 | 每 1 kg 参考流 |

工序间裁片和已缝边布的转移属于厂内流转，核对批次件数/质量，不作为第二次产品交付。薄膜/纸箱、润滑油、收集粉尘及排放均为各工序的条件交换，不是必需配方。若实际存在其他组件、维护化学品或废物，在声明场址完整前须增加化学或物理明确的交换及计量协议。

### 过程：织物接收、排料和机械裁剪 (`receipt_cut`)

#### 输入

##### 产品流

###### 已完成染整的针织聚酯微纤维织物 (`finished_fabric`)

接收可直接裁剪的干燥、未涂层、未浸渍织物。声明 PET 纤维细度、针织结构、再生成分及供应商染整态；不设默认配方。

- 选定流：已完成染整的针织聚酯微纤维织物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量批次领用织物并扣除未使用退库织物。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric`
- 来源：

###### 交流电 (`cut_electricity`)

仅适用于实际中国电网平均用户端低于 1 kV 的供电，记录裁剪与抽尘电量。其他地域、电压或专用发电合同须采用其适用身份。保留净热值, 低位热值及能量单位组（93a60a57-a3c8-11da-a746-0800200c9a66）。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量归属于裁剪的电量；按 3.6 MJ/kWh 将实测 kWh 换算为 MJ。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cut_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 针织 PET 织物裁剪边角料 (`pet_cutting_offcuts`)

单独收集的未涂层织物裁剪边角料。厂内重新裁剪不属于外送废物；声明实际接收方及去向。

- 选定流：针织 PET 织物裁剪边角料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量离厂边角料，排除厂内再利用部分。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cut_waste`
- 来源：`epa-textile-fabrication-2000`

###### 收集的 PET 纤维粉尘 (`pet_collected_dust`)

仅当过滤器或抽尘设备收集粉尘时记录；与边角料分别称量。收集粉尘是废物交换，不是空气排放。

- 选定流：收集的 PET 纤维粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：存在时实测外送收集粉尘质量。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cut_waste`
- 来源：`epa-textile-fabrication-2000`

##### 基本流

###### 颗粒物，粒径未特指 (`airborne_particulates`)

仅当有证据表明报告期内未捕集裁剪粉尘排入空气、子介质未特指且粒径未特指时记录。它不是 PM2.5、长期排放、过滤器收集粉尘或废水固体。不假定必然排放，不提供排放因子。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用有记录的排放质量实测，或有捕集证据支持的场址质量平衡。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`epa-textile-fabrication-2000`

### 过程：包缝或缝边 (`edge_sew`)

#### 输入

##### 产品流

###### PET 缝纫线 (`pet_sewing_thread`)

用于包缝或缝边的一种聚酯缝纫线。声明线的整理态、线密度及 PET 成分；明确排除缝纫线的零售纱线不能替代。

- 选定流：PET 缝纫线
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：通过线轴库存平衡称量耗用缝纫线。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thread`
- 来源：

###### 交流电 (`sew_electricity`)

仅适用于实际中国电网平均用户端低于 1 kV 的供电。计入可归属的设备待机电量；不得重复计入裁剪或包装电量。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量归属于缝边的电量；按 3.6 MJ/kWh 将实测 kWh 换算为 MJ。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sew_energy`
- 来源：

###### 矿物基缝纫机润滑油 (`mineral_lubricating_oil`)

仅在实际缝纫设备使用矿物油润滑时记录。采集产品规格及净补油量；设备初始油量不是持续耗用估计。不同润滑剂须另设行。

- 选定流：矿物基缝纫机润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测领油量，扣除退库量和库存增加量。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_oil`
- 来源：`epa-textile-fabrication-2000`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废矿物基缝纫机润滑油 (`used_mineral_oil`)

仅在实际收集并送出前景场址时记录。不得假定全部投入油都变为该废物；核对滞留油、损失油及实际处理。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量报告期外送收集废油。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_oil`
- 来源：`epa-textile-fabrication-2000`

##### 基本流

### 过程：最终检验、干式返工及包装 (`inspect_pack`)

#### 输入

##### 产品流

###### 聚乙烯薄膜 (`pe_film`)

仅在实际采用非复合聚乙烯薄膜包装时记录。多层复合、涂层或非 PE 薄膜不适用该身份；其他组件须另设明确交换。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量领用薄膜并扣除退库量。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：

###### 瓦楞纸板运输箱 (`corrugated_box`)

仅在实际采用瓦楞纸箱包装时记录；声明再生纤维比例、楞型、质量及来料纸箱状态。不得强制采用不匹配数据库纸箱的纤维比例。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量归属于合格清洁布批次的纸箱。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：

###### 交流电 (`pack_electricity`)

仅适用于实际中国电网平均用户端低于 1 kV 的供电。分别记录检验和包装电量；人工操作可无增量设备电量，但须披露共享照明的归属。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量归属于检验包装的电量；按 3.6 MJ/kWh 将实测 kWh 换算为 MJ。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干燥成品针织聚酯微纤维清洁布 (`finished_cloth`)

已验收、未浸渍且完成缝边的清洁布；净质量排除全部运输包装。记录实际尺寸、布体和缝纫线成分、整理态、残余水分基准及验收标准。

- 选定流：干燥成品针织聚酯微纤维清洁布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：

##### 废物流

###### 不合格已缝边 PET 清洁布 (`rejected_cloth`)

仅在不合格品作为废物外送时记录。厂内返工留在边界内，不得重复计为合格产出。可销售降级布属于另需归属的共产品。

- 选定流：不合格已缝边 PET 清洁布
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别称量废弃不合格布及裁剪边角料。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reject`
- 来源：

###### 非复合聚乙烯包装薄膜边角料 (`pe_film_waste`)

仅在清洁 PE 薄膜边角料离厂时记录。它不是混合塑料废物，也不是随合格产品交付的包装。

- 选定流：非复合聚乙烯包装薄膜边角料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量外送 PE 薄膜边角料。 每 1 kg 参考流；以 cp_output 的同批次合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pack`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivision | 共享生产 | 优先分开批次并对子过程计量。无法避免时，电力采用实测负载及运行日志，材料采用可追溯领料；记录因果覆盖和敏感性，不假定不同尺寸或缝线具有相同质量强度。 | ghg-product-allocation-2011 |
| allocation_coproduct | 降级布或可销售边角料 | 按实际质量、接收方和市场记录区分废物与共产品。不能避免分配时论证物理关系；只有该关系不可用时才论证其他关系，例如分离点经济价值，并检查敏感性。不设默认价格或无负荷信用。 | ghg-product-allocation-2011 |
| allocation_rework | 厂内再利用和返工 | 返工公用工程和缝纫线保留于同批次；每件合格布只计一次。外送废物处理单独记录，不扣减推测的替代织物信用。 | |

引用标准仅支持一般归属推理，不使清洁布数据集成为经认证的温室气体清单，也不指定影响评价方法。仍须前景实测驱动量。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | inspect_pack | 合格清洁布净质量 | 批次称量 | 批次；合格清洁布净质量；件数；尺寸；调湿；残余水分；包装皮重 | 用校准秤称量已验收干燥清洁布并排除包装；剔除不合格批次 | kg | 每批 | 完整报告期 | 最终验收场址 | 每 1 kg 参考流 | 校准证书；验收和皮重记录 |
| cp_fabric | receipt_cut | 已完成染整织物 | 库存称量 | 批次；供应商；PET 成分；纤维细度；再生比例；染色整理态；领用织物；退库 | 称量领用织物及未用退库料；核对库存和供应商规格 | kg | 每批 | 完整报告期 | 接收裁剪场址 | 每 1 kg 参考流 | 秤校准；材料证明；库存账 |
| cp_thread | edge_sew | PET 缝纫线 | 库存称量 | 批次；线规格；线轴毛重及皮重；期初期末库存；退库 | 核对线轴称重库存；区分缝线及废线 | kg | 每批 | 完整报告期 | 缝边工位 | 每 1 kg 参考流 | 线轴皮重；库存及缝线记录 |
| cp_cut_energy | receipt_cut | 裁剪电力 | 电表读数 | 批次；分表；期初期末 kWh；抽尘运行时间；地域；电压；归属驱动量 | 读取裁剪抽尘分表；共享表采用实际运行日志和实测负载核对 | kWh | 每批或计量班次 | 完整报告期 | 裁剪与抽尘供电 | 每 1 kg 参考流 | 表计校准；运行和电压证据 |
| cp_sew_energy | edge_sew | 缝边电力 | 电表读数 | 批次；设备电表；期初期末 kWh；缝边及待机时间；地域；电压 | 读取缝边分表并计入可归属待机；共享表核对实测负载及运行时间 | kWh | 每批或计量班次 | 完整报告期 | 缝边供电 | 每 1 kg 参考流 | 表计校准；设备日志 |
| cp_pack_energy | inspect_pack | 检验包装电力 | 电表读数 | 批次；电表；期初期末 kWh；包装运行时间；照明归属；地域；电压 | 读取检验包装电表；披露可归属共享照明，避免重复电量 | kWh | 每批或计量班次 | 完整报告期 | 检验包装供电 | 每 1 kg 参考流 | 电表及归属记录 |
| cp_cut_waste | receipt_cut | 分别记录 PET 边角料及收集粉尘 | 分类称量 | 批次；流编号；边角料净 kg；单独收集粉尘净 kg；厂内利用；接收方；去向 | 在外送时独立称量每个分类流，扣除容器皮重；记录厂内利用 | kg | 每次清运并关联批次 | 完整报告期 | 裁剪废物出口 | 每 1 kg 参考流 | 皮重；废物交接单；过滤器清理日志 |
| cp_air | receipt_cut | 未捕集空气颗粒物释放 | 排放质量记录 | 批次；粉尘源；实测质量；试验时长；气流量；捕集效率；收集量；粒径状态；环境子介质 | 采用有记录的排放质量实测或实测场址质量平衡；区分浓度与排放质量、捕集粉尘及未测不确定损失 | kg | 代表性运行试验及报告期核对 | 完整报告期及代表性试验 | 实际空气释放边界 | 每 1 kg 参考流 | 试验方法；不确定性；来源和捕集证据；无默认因子 |
| cp_oil | edge_sew | 分别记录矿物油投入和废油 | 维护质量账 | 油规格；批次归属；补油 kg；退库；设备油库存变化；收集废油 kg；接收方 | 分别称量矿物油补充及外送废油；将维护记录归属到所代表生产，并核对滞留油 | kg | 每次维护及报告期核对 | 完整报告期 | 缝边维护 | 每 1 kg 参考流 | 油品说明；库存记录；废物单据 |
| cp_pack | inspect_pack | 分别记录 PE 薄膜、纸箱及 PE 边角料 | 组件称量 | 批次；组件材料；薄膜复合态；纸箱纤维比例及楞型；领用质量；退库；单独 PE 边角料质量 | 分别称量组件；薄膜耗用与交付薄膜、边角料平衡；实测纸箱质量及成分 | kg | 每包装批次 | 完整报告期 | 包装工位与废物出口 | 每 1 kg 参考流 | 包装规格；秤皮重；库存及废物记录 |
| cp_reject | inspect_pack | 废弃不合格品 | 验收质量账 | 批次；不合格原因；不合格净 kg；返工；降级销售；外送废弃 kg；接收方 | 分别称量不合格品；返工追溯至一次最终验收，区分降级销售和废物 | kg | 每批及每次清运 | 完整报告期 | 验收和废物出口 | 每 1 kg 参考流 | 质量日志；返工追溯；废物单据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | 所有清单行 | 将归属批次交换除以合格成品清洁布净质量 kg，保留各交换分子单位。成品行是 1 千克。 | 归属批次交换；合格净质量；cp_output | 每 1 kg 参考流的交换 | |
| convert_electricity | cut_electricity; sew_electricity; pack_electricity | 批次归一化前按 3.6 MJ/kWh 将实测 kWh 换算为 MJ；保留声明的公开能量属性和单位组。 | 计量 kWh；单位换算；电力协议；cp_output | 每 1 kg 参考流的 MJ | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 织物、缝纫线及清洁布 | 核验 PET 成分、针织和整理态、纤维细度及缝边路线。分别声明原生和再生画像；不得从某版目录推断当前配方。 | 供应商证明、产品规格及路线图 |
| dq_mass_balance | 所有固体纺织行 | 在相同水分基准下核对领用织物和缝纫线、合格布、边角料、收集粉尘、不合格品、返工及库存变化；调查无法解释的损失，不得直接认定为粉尘排放。 | 实测批次平衡及不确定性 |
| dq_period | 所有行 | 采用覆盖代表性生产、待机/返工和维护的同一报告期；披露场址/日期、校准、缺失数据和归属比例。不设默认产量、温度、能耗或损耗值。 | 日期记录、电表及秤校准 |
| dq_release | airborne_particulates | 未观察到释放不等于证明零排放；记录治理、试验覆盖及检出限。未知排放保留为明确完整性缺口。保留实际粒径及环境介质；避免重复计入捕集粉尘。 | 排放试验、捕集证据及不确定性 |
| dq_upstream | 织物和包装 | 匹配供应商材料、地域、加工态及再生成分；披露全部未链接上游阶段和实际运输覆盖。 | 上游数据集链接及供应商记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | 产品和路线 | 要求声明限定信息并采用干式针织 PET 缝边路线；该画像拒绝浮力、非织造、浸渍、混纺或场内湿加工声明。 | unsd-cpc3-notes-2025 |
| validate_reference | 所有行 | 要求正的实测合格清洁布净质量并排除包装、finished_cloth 链接及统一每 1 kg 分母；面积/件数投入须可追溯实测质量换算。 | |
| validate_balance | receipt_cut; edge_sew; inspect_pack | 要求材料和能量核对，包含厂内流转及返工，不重复合格产出。区分 PET 废物、收集粉尘和实际环境释放。 | |
| validate_identity | 含 UUID 行 | 检查公开流类型、实际材料、电力地域/电压、参考属性和单位组。空 UUID 须保持披露；检索排名或纤维流不能证明成品身份。 | |
| validate_completeness | 最终数据集 | 将每种实际化学品、包装组件、公用工程、废物及排放列为一个具体交换；用证据说明条件缺省。缺失计量或不确定释放不能表示为完整校验。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 干式缝边针织 PET 微纤维清洁布制造前景清单 |
| downstream_use | secondary_dataset；background_dataset 仅在所代表产品、技术及供应链审查后使用 |
| allowed_use | 声明的 PET 清洁布路线和产品配置，组合适用上游织物/缝纫线/包装及披露的运输 |
| excluded_use | 整项宽泛分类；浮力安全声明；清洁服务等效性；寿命或洗涤次数；自动完整的摇篮到大门或摇篮到坟墓足迹 |
| required_metadata | 限定信息；工厂及报告期；供应商加工态；PET/再生画像；合格净产出及水分基准；工序公用工程；包装；上游和运输链接；条件存在性；未解决身份 |
| required_quality_disclosure | 计量及归属覆盖；质量平衡；缺失/估算交换；捕尘及释放不确定性；边角料/不合格品去向；排除的湿路线和使用阶段 |
| update_trigger | 纤维成分、针织结构、缝边工艺、供应商整理、再生画像、场址电力、包装、回收路线、新核验身份或实测运行证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-notes-2025 | official_guidance | 联合国统计司，CPC Version 3.0 Explanatory Notes，2025 年 6 月 30 日，PDF/印刷第 127 页，2719/27190。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类背景；清洁布和浮力用品共享宽泛条目，不代表共同工艺方法 |
| vileda-cleaning-cloths-2025 | handbook | Vileda Professional Export Product Catalogue 3/2025，PDF/印刷第 12 页，MicroTuff Base。https://catalog.vileda-professional.com/assets/assets/common/downloads/publication.pdf | 针织聚酯清洁布市场实例；不是制造配方、默认尺寸、洗涤寿命、卫生批准或各地域统一成分 |
| epa-textile-fabrication-2000 | official_guidance | 美国 EPA，EPA 745-B-00-008，2000 年 5 月，第 4.2.4 节，印刷第 4-52–4-54 页（PDF 第 115–117 页）。https://ofmpub.epa.gov/apex/guideme_ext/guideme_ext/guideme/file/textile%20processing%20industry.pdf | 仅历史裁剪缝纫及粉尘/废料区分；不作为当前合规要求或排放/耗用因子 |
| ghg-product-allocation-2011 | standard | WRI/WBCSD，Product Life Cycle Accounting and Reporting Standard，2011 年，第 9 章，印刷第 63 页（PDF 第 65 页），表 9.1/9.2。https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般细分及物理关系归属逻辑；不构成认证或数值分配因子 |
