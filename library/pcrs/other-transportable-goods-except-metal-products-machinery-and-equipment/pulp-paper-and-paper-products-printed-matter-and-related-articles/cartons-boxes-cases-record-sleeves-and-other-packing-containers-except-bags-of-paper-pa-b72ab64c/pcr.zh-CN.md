---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.cartons-boxes-cases-record-sleeves-and-other-packing-containers-except-bags-of-paper-pa-b72ab64c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 未印刷 C 楞淀粉胶接缝常规开槽瓦楞箱

## 1. 范围与适用性

本 PCR 仅覆盖一种箱结构：未印刷、未涂布 C 楞单瓦楞常规开槽箱 FEFCO 0201-G，采用外购瓦楞纸板及水性天然淀粉制造接缝胶。净产品已胶合、扁平交付，供下游撑箱；装货和上下摇盖封合在前景外。FEFCO 区分纸板厂、成箱厂及一体化厂，并明确加工可不印刷。[fefco-box-production; fefco-code-2022]

前景采用电动开槽/压痕、折叠/胶合及调湿，无燃烧或外购蒸汽/热；冲洗液外送处理。排除瓦楞加工、制浆/原纸制造、印刷、涂层、层压、钉合、热熔胶、合成接缝胶、实心纸板折叠盒、模切箱型、办公用品及其他 32153 产品。实际存在的被排除操作须先补齐范围/方法/清单才能使用。油墨/清漆缺省须有订单和领料记录证明：回收原件将油墨视为含着色剂、树脂、载体及添加剂的配方材料，因此不能将未知印刷路线赋零。胶黏剂指南只支持淀粉作为一种制箱选择，不确定剂量，也不保证无排放。[fefco-box-production; fefco-recyclability-2025]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.cartons-boxes-cases-record-sleeves-and-other-packing-containers-except-bags-of-paper-pa-b72ab64c |
| classification_refs | CPC 3.0 32153; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 未印刷未涂布 C 楞单瓦楞 0201-G 扁平胶合箱 |
| excluded_products | 其他箱结构/材料/表面状态；袋和办公用品；上游纸板制造 |
| representative_product | 一片四壁开槽箱，含制造胶合搭接及中线相接外摇盖 |
| production_route | 外购纸板 → 开槽/压痕 → 折叠/淀粉胶合 → 调湿/验收 → 扁平打捆 |
| market_state | 成箱厂门验收净扁平胶合空箱；包装另计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为下游撑箱及容纳提供具有声明订单质量的上述空箱结构 |
| How much | 1 kg |
| How well | 实际尺寸、摇盖/接缝几何、C 楞、纸板等级/水分、接缝验收和客户要求时的抗压/搬运规范；无通用测试值 |
| How long or cycle | 一次制造批次及厂门交付；不规定下游包装寿命/使用次数 |
| reference_flow_link | `box_out` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 0201-G 图纸/尺寸；C 楞单瓦楞；未印刷未涂布；纸种/纤维比例；与参考记录原生 16.6%/再生 83.4% 总纤维身份兼容；实际纸板纤维至少 80% 且含再生材料；胶供货湿干状态/固含量/添加剂；净质量/出厂水分/包装皮重；接缝订单验收；厂址/周期/供电/交付点；废水接收方；上游边界 |

必需限定信息须记入完成的数据包。参考为 1 kg 含出厂水分净纸箱，不是 1 kg 绝干纤维，也不是具有假定重量的一只箱。身份限定与供应方数据集数量/技术兼容性分别核实。参考记录比例不是制造配方或环境负荷分配；兼容性未知时阻止完成数据集验收。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q 为同周期经校准验收净纸箱输出 kg，扣箱束皮重及不合格品，含出厂水分和保留接缝固体；Q 须为正。所有行按每参考流计。 |
| moisture_state | 纸板/胶/产品/残料 | Mass | kg | 分别保留供货湿质量、实测固体/水及实际挥发适用性。胶湿质量不是干淀粉质量。 |
| electric_units | electricity_in | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 使用实际交付电能：已核实能量单位关系 1 kWh = 3.6 MJ。不推算蒸汽热或燃烧效率。 |
| water_volume | water_in | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 计量补水体积。另行实物水账按取样密度和温度换算，不采用数据库假定密度。 |
| particle_bins | 室外空气排放 | Mass | kg | PM2.5、大于 2.5 至 10 及大于 10 为互斥实测空气动力学粒径段。允许兼容累计差值；未知分段保持未决，收集尘另计。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购未印刷未涂布 C 楞纸板及即用水性淀粉胶到成箱厂 |
| starting_condition_role | 门到门成箱起点；仍须上游生产负荷 |
| product_classification_scope | CPC 32153 限定常规开槽箱子集，与 32151 纸板制造分开 |
| recursive_input_rule | 内部复用不跨边界。外购同类箱作再包装须有独立计量输入和供应方切点，不静默抵扣，也不是第二参考输出。 |
| upstream_dataset_requirement | 每项纸板背景包含实际面纸/芯纸制造、瓦楞加工、已含楞峰胶和公用工程一次；接缝胶供应及外购公用工程须有兼容参考基准。声明运输覆盖/端点，并为未覆盖运输单列交换。 |
| disclosure | 实际厂址、周期、来源、水分、前景电动路线、供应方切点、包装组件、接收方及未决基准；继承示例不是实测 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_sheet_box | converter | 从纸板到货开始。包括开槽/压痕、折叠、湿接缝胶合、调湿、验收、捕尘、清洗和厂门打捆及所有归属公用工程。 | fefco-box-production; fefco-code-2022 |
| boundary_upstream | board_in | 供应方制浆/造纸/瓦楞加工及已含淀粉在上游纸板中计一次，不重作成箱输入；不得以平层纸板或仅瓦楞加工结果替代成品箱。 | fefco-box-production |
| boundary_ink | product | 订单、检验及化学品领料证明无印刷/清漆。印刷、涂层或层压变体须先补油墨/印版/清洗剂/废物/物种及公用工程方法。淀粉胶或水性油墨标签不能证明零空气排放。 | fefco-box-production; fefco-recyclability-2025 |
| boundary_residuals | converter | 冲洗液外送处理；本路线无现场生物处理或燃烧。若发现则重审范围并记录实际物种，含生物 CO2，不因温室气体报告口径假定为零。无碎浆机意味着外送边料不是纸厂内部损纸回用。 | ec-paper-bref-2015 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| box_converter | 纸板至扁平纸箱加工及厂门打捆 | required | 上述电动未印刷 C 楞 0201-G 淀粉接缝路线 | foreground | 1 kg reference flow |

单一前景单元聚合同一纸箱在开槽、接缝形成及打捆之间的实际转移。保留阶段仪表及未分配实物质量/水/碳图；任何保留内部链接两端须同量。成品参考输出恰好一个。数据集完成前单列每项实际新增包装、润滑剂、化学品、运输或公用工程交换；该有限清单不证明所有工厂配置完整。

### 过程：纸板成箱加工（`box_converter`）

#### 输入

##### 产品流

###### 外购 C 楞单瓦楞纸板（`board_in`）

两张未印刷未涂布箱板纸夹一层 C 楞芯纸。采集各纸种、纤维来源、到货水分、纸板质量及上游瓦楞加工数据集。该流限定 C/E/F 楞、纤维含量至少 80% 且含再生材料；本稿仅采用 C 楞，不推定通用配浆。楞峰淀粉胶、面纸/芯纸制造及供应方干燥已属上游。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_board`
- 来源：`fefco-box-production`

###### 外购水性淀粉接缝胶（`glue_in`）

将外购即用水性天然淀粉配方施于制造接缝。采集供货湿质量、固含量、淀粉来源/改性、添加剂、SDS 及背景湿干参考基准。不重复投入其载体水或上游配料；现场另加稀释水单列。不得从数据库或回收指南推定胶耗或无 VOC。

- 选定流：淀粉基粘合剂 `2a847cb1-f8c0-4fd4-8c7c-2f26f1dcec70`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_glue`
- 来源：`fefco-recyclability-2025`

###### 另加稀释及清洗自来水（`water_in`）

以 m3 计量实际外部补水。已供胶中的水及内部循环不重复添加。核实供应方交付/处理边界、地区和参考体积；定位的香港供水记录不是通用背景。实物水平衡采用实测温度/密度，不采用记录的筛查质量系数。

- 选定流：自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`fefco-recyclability-2025`

###### 交付低压电力（`electricity_in`）

采用不重叠电表记录纸板搬运、开槽/压痕、折叠/胶合、通风、除尘、清洗和打捆负荷。供电为低于 1 kV 的交流电；声明供应方组合、变压器覆盖和交付点。按已核实能量单位组将电表 kWh 换成 MJ；净热值是数据库实际属性，不是蒸汽焓基准。
 所选记录为中国用户端低于1千伏的电网平均供电；连接供方前核实实际国家、年份、供应组合、变压损耗及交付点。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`fefco-box-production`

###### 纸箱束打包带（`strap_in`）

仅记录扁平箱束实际领用的 PP 打包带；核实聚合物牌号、添加剂、宽度及质量。树脂、纱线、农场捆扎绳及尼龙扎带不能作为已验证打包带身份；UUID 未决。该行不暗含托盘、薄膜或其他包装；数据集完成前须单列实际组件。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`fefco-box-production`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收扁平胶合纸箱（`box_out`）

一种未印刷未涂布 C 楞单瓦楞 FEFCO 0201-G 结构，制造接缝胶合，撑开后上下外摇盖在中线相接；扁平交付，尚未装货和封摇盖。验收净质量含保留接缝胶固体及出厂水分，排除箱束包装和不合格品。参考记录限定原生纤维 16.6%、再生纤维 83.4%：完成数据集采用该 UUID 前核实实际总纤维比例及 provider 基准；这些是身份兼容条件，不是工厂配方、分配份额或消耗默认量。不兼容产品须另核实参考身份，不得静默扩展。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`source_rule`
- 采集协议：`cp_mass`
- 来源：`fefco-box-production`; `fefco-code-2022`

###### 随箱出厂打包带实物 (`strap_dispatch`)

记录随验收合格扁平箱捆跨越厂门的完整实际PP打包带质量，区别于箱净质量、打包带边角料及库存变化。核对领用打包带等于随箱出厂量、实际边角损失和库存增加之和，退料只计一次。这是随货包装，不是另一纸箱功能或共产品；其物理输出不抵消采购带负荷、不产生回收信用，负荷分配不能缩减随货实物质量。成品PP打包带身份仍未解决，BOPP胶带、金属带或涂塑钢丝绳均不能代表它。

- 选定流：聚丙烯打包带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_pack`
- 来源：`fefco-box-production`


##### 废物流

###### 外送瓦楞边料及不合格纸箱（`trim_out`）

该广义纸/纸板废物身份有条件包含实测未印刷瓦楞边料及不合格箱；保留具体 C 楞组成、接缝淀粉污染、水分和接收方验收。与收集细尘分别称量。成箱厂无碎浆机：外送回收属于外部废物，不是造纸厂内部损纸回用，也不自动获得再生产品抵扣。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`fefco-box-production`

###### 捕集纸尘（`dust_out`）

分别称量实际已捕集的工业裁纸粉尘，保留纤维素、填料、淀粉含量、水分、集尘器期初期末库存和实际接收方。此废物流表示已收集粉尘，不是窑灰或大气粒径区间。内部回用不计外送；不得从已测治理后排放再次扣减同一捕集质量。不预设捕集效率或处理路线。

- 选定流： 粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ec-paper-bref-2015`

###### 外送清洗废水（`effluent_out`）

实际单独收集的未经处理接缝设备水性清洗废液须与浓余胶分开。整份混合物湿kg直接实测，或由实测V_eff*rho_eff(T)换算，不作为纯水kg或假定水密度。保留淀粉、添加剂、相关固体和COD、实际水份额及处理接收要求；污染物负荷使用完整实测废水体积。场外处理只链接一次，不另把同一转移作向水直接排放水或污染物，也不作第二份采购水供应。广义废液身份不规定危险性分类或处理路线。

- 选定流： 废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`fefco-recyclability-2025`

###### 单独弃置接缝胶（`glue_waste_out`）

称量实际独立收集、仍为液态的变质或未用天然淀粉水性接缝胶，按完整湿供货形态计量。记录淀粉、其他固体或添加剂、水份额、包装分离和实际接收方。干燥、凝胶或固化残余物须另列适用身份和实物流行；排除已计入清洗废液或废箱的胶。此废液身份不默认危险性、晶圆制造来源、回收率或处置技术。

- 选定流： 废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`fefco-recyclability-2025`

###### 送回收 PP 打包带边料（`strap_waste_out`）

该 PP 废物身份 CAS 为 9003-07-0，路线为机械回收；仅用于分别收集且被该接收方接受的实际 PP 打包带边料。混合聚合物、受污染废物或其他处置路线需要另一兼容身份。备注中的下游回收产率或寿命均不构成前景默认量。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`fefco-box-production`

##### 基本流

###### 排至室外空气的 PM2.5（`pm25_out`）

计量切割/搬运排气和逸散经实际捕集后排出的空气动力学 PM2.5。仅在未建立更具体接收环境时采用室外空气未特指。BREF 造纸精整仅按物理类比提示筛查，不提供成箱厂因子或粒径比例。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`ec-paper-bref-2015`

###### 排至室外的 PM2.5 至 PM10 互斥段（`pmcoarse_out`）

仅记录大于 2.5 至 10 微米的颗粒。仅在采样定义和条件一致时，可用匹配累计 PM10 减 PM2.5 得出本段。不得将累计 PM10 与 PM2.5 相加；未测粒径段保持未决。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`ec-paper-bref-2015`

###### 排至室外的大于 PM10 互斥段（`pmover10_out`）

仅记录经收集控制后排至室外空气的大于 10 微米颗粒。可在条件匹配时采用可比总颗粒减 PM10；负差值和检出限不确定性须审查，不得截零或编造比例。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 来源：`ec-paper-bref-2015`

###### 蒸发进入室外空气的水（`vapour_out`）

采用匹配的纸板/胶/补水/产品/残料/废水/存量水分计量及有测量时的通风湿度修正确定净过程水蒸发。该流是 H2O，CAS 7732-18-5，室外空气未特指；不是取水、锅炉蒸汽或液态排水。不明水平衡残差须审查，不能自动当作蒸发。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按关联协议采集本外部交换并按每参考流归一化；缺失计量保持未决，不赋零。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`fefco-recyclability-2025`

完成工厂清单前，调查实际开槽压线刀具、传动带、涂胶器件、润滑剂、清洁剂及更换耗材，保留真实领退、库存、组成、磨损或服务和完整废弃质量；每项实际交换另列实测原子行，不假定通用寿命、维护包或更换率。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared units | 优先实测细分；按研究范围考察系统扩展；需分配时先论证相关物理关系，再用经济等其他关系并保留敏感性。不提供通用份额。 | eu-pef-allocation-2021 |
| allocation_physical | physical and burden ledgers | 实物账保留实际总产品、废物、水和碳数量及同量内部链接。分配仅施于独立环境负荷账；不得把联产品实物输出乘负荷份额。 | eu-pef-allocation-2021 |
| allocation_waste | trim_out; strap_waste_out | 废物正价本身不构成联产品。保留物料状态、实际接收方/持续用途及废物或产品裁定。不自动给予避免纸/塑料生产抵扣，不对内部返回重复上游负荷；更广泛回收方法须另披露假设。 | eu-pef-allocation-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | box_converter | 参考输出 | 秤/仪表/供方/实验室记录 | 毛重/皮重/净 Q；验收/不合格产量；订单/图纸/0201-G；尺寸；C 楞；纤维比例/纸种；出厂水分；接缝验收；发运/存量 | 经校准净称量和代表性出厂水分测试；核对生产、发运及存量 | kg; mass fraction; dimensions | 每批及匹配阶段时段 | 完整声明代表周期，含启动/停车、不合格品及存量变化 | 声明成箱线及归属共用负荷 | 每参考流 | 校准；SOP；供方定义；样品链；原始记录；不确定性 |
| cp_board | box_converter | 外购纸板 | 秤/仪表/供方/实验室记录 | 供方/纸厂；纸种；C 楞几何；未印刷未涂布声明；再生/原生纤维；填料；纸板质量/水分；领用/返回/期初期末存量；上游瓦楞加工基准 | 逐纸种经校准到货和存量平衡；独立核实供方造纸/瓦楞加工切点 | kg; mass fraction | 每批及匹配阶段时段 | 完整声明代表周期，含启动/停车、不合格品及存量变化 | 声明成箱线及归属共用负荷 | 每参考流 | 校准；SOP；供方定义；样品链；原始记录；不确定性 |
| cp_glue | box_converter | 接缝胶 | 秤/仪表/供方/实验室记录 | 供方/SDS；天然淀粉来源/改性；供货湿质量；固含量；添加剂/CAS/挥发物；计量添加/返回/废料/存量；provider 湿干基准；接缝验收 | 经校准加料/存量平衡、经验证固含量及配方审查；不重复载体水或供货配料 | kg; mass fraction | 每批及匹配阶段时段 | 完整声明代表周期，含启动/停车、不合格品及存量变化 | 声明成箱线及归属共用负荷 | 每参考流 | 校准；SOP；供方定义；样品链；原始记录；不确定性 |
| cp_energy | box_converter | 电力 | 秤/仪表/供方/实验室记录 | 阶段 kWh；仪表覆盖；电压；供方地区/组合；变压器；待机/启动/停车；现场燃烧/热缺省 | 经校准不重叠时段电表和有记录归属共用负荷分配 | kWh; MJ | 每批及匹配阶段时段 | 完整声明代表周期，含启动/停车、不合格品及存量变化 | 声明成箱线及归属共用负荷 | 每参考流 | 校准；SOP；供方定义；样品链；原始记录；不确定性 |
| cp_pack | box_converter | 打包带及其他厂门包装 | 秤/仪表/供方/实验室记录 | PP 带牌号/添加剂/宽度；完整领用/随箱发出/退回质量；期初期末库存；实际边料/损失；成品束皮重；托盘/薄膜/其他组件存在性 | 分别称量领用包装组件；审计全部外部包装；现场重复使用搬运物在内部 | kg | 每批及匹配阶段时段 | 完整声明代表周期，含启动/停车、不合格品及存量变化 | 声明成箱线及归属共用负荷 | 每参考流 | 校准；SOP；供方定义；样品链；原始记录；不确定性 |
| cp_waste | box_converter | 各固态/湿态废物外送 | 秤/仪表/供方/实验室记录 | 流；质量/水分/固体/碳；淀粉/填料/聚合物污染；捕集尘；集尘器存量；内部返回；接收方/处理/验收 | 分别称量批载并代表性取样及保留接收票据；核对集尘器及废物存量 | kg; mass fraction | 每批及匹配阶段时段 | 完整声明代表周期，含启动/停车、不合格品及存量变化 | 声明成箱线及归属共用负荷 | 每参考流 | 校准；SOP；供方定义；样品链；原始记录；不确定性 |
| cp_air | box_converter | 各实际室外排放 | 秤/仪表/供方/实验室记录 | 来源/排气/逸散；空气动力学切割粒径；浓度；气体体积 T/P 湿干；时长；实际捕集；空白/检出限；室外介质；不确定性；挥发物种筛查 | 现场批准的代表性分粒径排气/逸散采样及匹配浓度/体积积分；配方/现场筛查确定缺省或新增物种需要 | kg; gas volume; concentration | 每批及匹配阶段时段 | 完整声明代表周期，含启动/停车、不合格品及存量变化 | 声明成箱线及归属共用负荷 | 每参考流 | 校准；SOP；供方定义；样品链；原始记录；不确定性 |
| cp_water | box_converter | 水、冲洗液及水蒸气 | 秤/仪表/供方/实验室记录 | 外部 m3；温度/密度；纸板/胶/产品/废物水分；独立冲洗液质量/固含量/COD；接收方；水存量；通风湿度/边界 | 经校准水/废水仪表及取样密度/固体；匹配总实物水平衡；调查残差 | m3; kg; mass fraction | 每批及匹配阶段时段 | 完整声明代表周期，含启动/停车、不合格品及存量变化 | 声明成箱线及归属共用负荷 | 每参考流 | 校准；SOP；供方定义；样品链；原始记录；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all non-reference rows | q_i = A_i / Q；A_i 为同周期本行单位的外部交换总量；Q 为验收含出厂水分净纸箱 kg。 | cp_mass; cp_board; cp_glue; cp_energy; cp_pack; cp_waste; cp_air; cp_water | 每参考流行数量 |  |
| electricity_mj | electricity_in | A_MJ = 3.6 * A_kWh；已核实能量单位换算，在声明交付点计量。 | cp_energy | 每参考流 MJ |  |
| solids_water | board/glue/box/wastes | m_solid = m_wet * s；m_water = m_wet * (1-s)；s 是核实方法/挥发适用性的实测固体质量分数。含出厂水分参考质量不变。 | cp_mass; cp_board; cp_glue; cp_waste; cp_water | 独立实物固体及水 |  |
| whole_liquid_mass | effluent_out; glue_waste_out | A_wet_kg = V_m3*rho_mixture(T)，或校准称量整份湿物。水组分质量=A_wet_kg*x_water；保留实际固体和其他成分，污染物负荷采用完整废水体积。按相同Q只归一一次。 | cp_water; cp_waste; cp_mass | 每参考流kg及独立实物水平衡 |  |
| physical_balance | box_converter | 对固体、水及碳分别：输入 = 净产品 + 随货出厂包装 + 外送废物 + 环境排放 + 存量变化；同量内部链接抵消。水质量 = 体积 * 实测密度。实测碳含量和来源；无通用碳比例或 CO2 因子。 | cp_mass; cp_board; cp_glue; cp_pack; cp_water; cp_waste; cp_air | 未分配实物账及残差 |  |
| pm_exclusive | pm25_out; pmcoarse_out; pmover10_out | PM2.5-10 = 匹配累计 PM10 - PM2.5；>10 = 可比总颗粒 - PM10。仅兼容定义/条件/检出限允许相减；调查负差；否则实测互斥段。 | cp_air | 每参考流互斥 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all rows | 核实完整双语名称、适用物种/CAS、物料形态、硬路线、介质/子介质、分类和属性/单位；物理身份不能证明 provider 数量兼容。 | supplier records; direct flow/property/unit records |
| measurement | all protocols | 采用匹配实际厂址/周期、经校准计量及不确定性。缺失数量、未知接收方/粒径比例或兼容性均未决，不赋默认零或继承配方。 | cp_mass; cp_board; cp_glue; cp_energy; cp_pack; cp_waste; cp_air; cp_water |
| emission_coverage | actual route | 筛查粉尘、保留胶/添加剂及实际公用工程/废物设施。完成前添加每种相关原子物种；生物 CO2 实际存在时须保留，即使温室气体账另有口径。声明路线内不假设焚烧/生物降解损失。 | cp_air; cp_glue; cp_energy; cp_waste; actual site diagram |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | product | 核实 0201-G 几何、C 楞单瓦楞、无印刷/涂布及实际湿淀粉接缝；分类名称不能建立方法适用性。 | fefco-code-2022; fefco-box-production |
| validate_reference | box_out | 通过 box_out 或参考 UUID 匹配的产品输出恰好一个，为 1 kg 含出厂水分净纸箱。完成数据集验收前核实记录纤维限定及背景兼容。 |  |
| validate_boundary | box_converter | 上游瓦楞加工/已含胶与成箱接缝胶有别；证明制造或公用工程无重叠，外送冲洗液不重复作直接入水排放。 | fefco-box-production; fefco-recyclability-2025 |
| validate_physical | all rows | 每项协议及数量采用同一正 Q 及每参考流。独立分配账前审查质量/水/碳残差和同量内部链接。 | eu-pef-allocation-2021 |
| validate_air | particle and vapour rows | 三个颗粒段互斥并与收集尘分开；不叠加累计总量。缺失来源/物种计量或不明水残差阻止完整验收；不从未印刷或淀粉标签推定零。 | ec-paper-bref-2015 |
| validate_completeness | dataset | 称数据集完整前解决或明确审查留空 UUID、实际新增包装/化学品/运输及 provider 基准。guidance 身份不是计量证据、科学批准或产品认证。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 向兼容产品包装模型提供空扁平纸箱输入；上游纸板数据集保持独立 |
| allowed_use | 仅实际范围内且完成清单、身份和数量兼容的纸箱 |
| excluded_use | 覆盖全部 CPC 32153；印刷/实心纸板/模切容器；装货包装服务比较；未知纤维/provider 基准 |
| required_metadata | 结构/图纸、尺寸、纸种/纤维比例、净质量/水分、接缝配方、厂门状态、供方切点、地点/周期/公用工程、接收方及运输 |
| required_quality_disclosure | 计量/身份缺口、provider 基准、校准、粒径覆盖、平衡/残差、分配、不确定性及审查状态 |
| update_trigger | 结构/纸板/胶/印刷、供方/能耗/废水路线、包装、周期或材料来源变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| fefco-box-production | extension_guidance | FEFCO, Corrugated board production, publisher snapshot read 2026-10-11; https://www.fefco.org/lca/dscription-of-production-system/corrugated-board-production | 结构、纸板厂/成箱厂/一体化边界及常规开槽箱加工；印刷可缺省；示例与行业均值不作本路线数量。 |
| fefco-code-2022 | standard | FEFCO International Fibreboard Case Code, 2022, 12th edition, pp.5 and 18; https://www.fefco.org/sites/default/files/files/styles/thumbnail/public/FEFCO%20Code_WEBprotected.pdf | 0201 结构图及胶合制造接缝后缀 G；不提供通用几何、质量阈值或认证。 |
| fefco-recyclability-2025 | extension_guidance | FEFCO, Corrugated Packaging Recyclability Guidelines, 2025, fourth edition, p.7 and Annex 1 PDF p.14; https://www.fefco.org/sites/default/files/documents/FEFCO-Recyclability-Guidelines-UPDATE%202025%20final_0.pdf | 箱制造/封合可采用淀粉胶；油墨含树脂/溶剂/添加剂。回收指南不确定胶配方、无 VOC 制造或回收抵扣。 |
| ec-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board BREF, 2015, section 7.1.10 printed p.670/PDF p.708; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 造纸机切割粉尘与边料：仅以定性物理类比提示独立成箱厂粉尘计量。不采用成箱排放因子、能水默认量或纸厂损纸回用假设。 |
| eu-pef-allocation-2021 | official_guidance | Commission Recommendation C(2021) 9332 final / (EU) 2021/2279, Annex I 4.5, pp.63-64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 细分/系统扩展、物理关系及其他有依据分配层级；无固定份额，不声称完整 PEF 符合性。 |
