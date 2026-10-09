---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.citrus-pectin-powder
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 柑橘果胶粉制造：蔗糖标准化乙醇路线

## 1. 范围与适用性

本PCR适用于作为食品胶凝、增稠或稳定配料的特定蔗糖标准化非酰胺化柑橘果胶粉制造。覆盖采购清洗干燥柑橘皮、水相盐酸提取、澄清、浓缩、乙醇沉淀与洗涤、干燥、粉碎、实测蔗糖混配和包装。不规定食品加工配方，也不建立食品安全合规结论。产品身份与商业标准化依据jecfa-pectins-2007和hf-pectin-2026，单元操作依据ippa-process。

UNSD将果胶物质列入CPC 23999这一多样剩余子类（unsd-cpc-2025，印刷/PDF第112页）。本范围明确更窄：其他植物提取物、琼脂/瓜尔胶/角豆增稠剂、麦芽提取物、甜点制品、蛋白浓缩物、替代品、口香糖、茶和甜味剂均仍未覆盖。苹果/甜菜原料、主动脱酯/酰胺化、非乙醇沉淀、缓冲盐及非食品用途须另行评估路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.citrus-pectin-powder |
| classification_refs | CPC 3.0 23999; narrower; unsd-cpc-2025 |
| covered_products | 声明盐酸/乙醇路线生产的蔗糖标准化非酰胺化柑橘果胶粉 |
| excluded_products | 其他CPC 23999产品；苹果或甜菜果胶；酰胺化、主动脱酯或盐沉淀果胶；含添加缓冲盐或防腐剂的配方；非食品用途等级 |
| representative_product | 蔗糖标准化非酰胺化柑橘果胶粉 |
| production_route | 采购清洗干燥柑橘皮 → 水相盐酸提取与过滤 → 浓缩 → 乙醇沉淀、洗涤与滤饼分离 → 干燥粉碎 → 蔗糖标准化、检验与包装；实际运行时纳入内部溶剂回收 |
| market_state | 工厂门验收合格干粉配料净质量，排除包装；保留实测残余水分；无保质期保证 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明果胶配料用于后续食品配方；不假定不同产品胶凝性能等效 |
| How much | 1 kg验收合格交付粉末净质量 |
| How well | 声明柑橘来源、无酰胺化或主动脱酯、蔗糖比例、果胶检验含量、水分、酯化度、胶凝强度/黏度检验方法及实际批次验收规格 |
| How long or cycle | 一次制造并在工厂门交付；后续使用与储存寿命不属于本单位 |
| reference_flow_link | `reference_product_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 蔗糖标准化非酰胺化柑橘果胶粉 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 柑橘种类与皮原料预处理；盐酸浓度；乙醇纯度与来源；无酰胺化/主动脱酯；蔗糖与果胶质量分数；残留水分；酯化度与功能试验结果；批次验收；场址/年份；包装组件；溶剂回收配置；公用工程供应 |

数据包必须包含必需限定信息。1 kg参考量是交付混合粉末，不是1 kg化学纯果胶或干基果胶。产品比较另需实际功能性能和配方背景；本PCR不构成食品安全批准。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference_product_output | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用报告生产期验收合格粉末净质量B，排除包装、不合格批次与重复内部返工；通过cp_product采集B。全部交换归一化为每1 kg参考流。 |
| `wet_dry_basis` | 柑橘皮、滤饼、粉末与残渣 | 质量 | kg | 按接收湿质量记录各物流，并在相同湿质量基准下实测水分数 w、乙醇分数 e 及其他挥发物分数 v。非挥发性干固形物 = 湿质量 × (1 - w - e - v)；只有确认不存在时才可将 e 或 v 置为 0。不得将乙醇计入干固形物；若检验值已包含挥发损失，不得再次扣除乙醇。不得以干固形物质量替代交付产品质量。 |
| `solution_basis` | 酸液、乙醇与碱液 | 质量 | kg | 保留实际溶液质量与实测质量分数c；有效成分=溶液质量×c是单独衡算量，不可据此静默改写流参考属性。 |
| `utility_basis` | 电力与蒸汽热 | 能量，保留已核验属性 | MJ | 保留电力净热值与热量总热值参考属性。计量kWh按1 kWh = 3.6 MJ转换。蒸汽质量必须结合实测供回焓，不能编造每千克热量因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 清洗干燥柑橘皮、采购酸液、乙醇、蔗糖、处理水、电力、蒸汽热和包装交付至制造场址 |
| starting_condition_role | 进入门到门制造前景的技术圈投入 |
| product_classification_scope | 仅声明柑橘果胶粉路线，是CPC 23999果胶物质的较窄代表 |
| recursive_input_rule | 任何采购果胶中间体按匹配上游数据集一次记录并声明入口工序；不递归重建上游提取，也不视为零负荷 |
| upstream_dataset_requirement | 衔接柑橘种植/果汁共产品分配与皮原料清洗干燥、化学品和蔗糖生产、水处理、电网供电、蒸汽生成、包装生产、纳入时的入厂运输，以及外部废物处理。仅前景不构成完整摇篮到工厂门 |
| disclosure | 声明场址/年份、入口状态、批次路线、公用工程、内部回用、外部废物去向、上游衔接及缺口；排除后续食品制备、消费、分销及包装终末处理 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | 声明制造路线 | 纳入实际发生的提取、过滤、浓缩、沉淀、洗涤、分离、干燥、粉碎、混配、包装与归属于生产的清洗；cp_utilities还覆盖实际内部回收设备。 | `ippa-process`; `efsa-pectin-manufacture-2017` |
| `boundary_external_links` | 采购投入与废物移交 | 记录实际供应与处理衔接。称为残渣的柑橘皮不自动具有零上游负荷；果汁/皮原料上游分配必须有依据。公用工程锅炉燃烧和外部处理排放在实测前景之外。 |  |
| `boundary_no_default_emissions` | 基本交换 | 声明实测物质、接收介质与子介质。不由工序名称推断必然存在CO2、NOx、甲烷或污染物排放；证据表明遗漏交换时须扩展实际原子行。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `extract_clarify` | 柑橘皮接收、水相酸提取与澄清 | `required` | 对声明的提取路线始终纳入 | 前景制造 | 每 1 kg 参考流；衔接中间体质量 |
| `concentrate_precipitate` | 浓缩、乙醇沉淀、洗涤与溶剂管理 | `required` | 始终纳入；内部溶剂回收仅在实际运行时纳入 | 前景制造 | 每 1 kg 参考流；衔接中间体质量 |
| `dry_blend_pack` | 干燥、粉碎、蔗糖标准化、检验与包装 | `required` | 对标准化可销售粉末始终纳入 | 前景制造 | 每 1 kg 参考流；衔接中间体质量 |
| `sanitation` | 设备清洗与废水移交 | `required` | 始终纳入；碱液行仅在实际使用该化学品时纳入 | 前景制造 | 每 1 kg 参考流；衔接中间体质量 |

### 过程： 柑橘皮接收、水相酸提取与澄清 (`extract_clarify`)

检查干燥柑橘皮接收记录与水分，以盐酸酸化的热水溶液提取，再过滤分离不溶性柑橘皮。30%试剂行仅适用于实际采购该浓度试剂的情形。提取温度、停留时间、pH和过滤配置从运行记录采集，本PCR不规定食品加工或安全参数。[ippa-process; efsa-pectin-manufacture-2017]

#### 输入

##### 产品流

###### 清洗干燥的柑橘皮 (`peel_input`)

采集清洗干燥柑橘皮的接收净质量与水分，排除打包包装并核对库存变动。

- 选定流： 清洗干燥的柑橘皮
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_material采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`

###### 工艺用水 (`extraction_water`)

计量进入提取与稀释的处理水，不重复计入柑橘皮或酸液所带的水。

- 选定流： 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_material采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`

###### 盐酸 (`hydrochloric_acid`)

仅适用于实际质量分数30%的盐酸溶液；采集溶液质量与检验浓度，不作纯HCl质量。其他浓度须使用独立核验身份。

- 选定流： 盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_material采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`

###### 交流电 (`extract_clarify_electricity`)

采集分配到本工序的用户端电力。此UUID仅适用于匹配的CN电网平均1–35 kV用户端中压消费组合供电；保留实际供应国家、电压、供应商和交付边界。其他国家、其他电压或发电侧供电须采用重新核实的匹配身份及供应商数据；不得将此UUID或其provider作为全球默认。保留原净热值参考属性和已核实能量单位链；实测kWh按1 kWh = 3.6 MJ转换。

- 选定流： 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用cp_utilities采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`

###### 蒸汽工艺热 (`extract_clarify_heat`)

按热量计或实测蒸汽质量与供回焓差记录工业锅炉提供的蒸汽热，单位MJ。锅炉燃料与烟囱排放属于衔接的供应过程，不重复列入该热量交换。

- 选定流： 蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位： 总热值, 高位热值 `93a60a56-a3c8-14da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用cp_utilities采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 澄清的柑橘果胶水相提取液 (`clarified_extract_output`)

称量送往浓缩的澄清提取液，保留溶解固形物浓度与配对移交记录。

- 选定流： 澄清的柑橘果胶水相提取液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_intermediate采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_intermediate`

###### 饲料用湿态脱果胶柑橘皮 (`peel_residue_feed`)

仅在有文件证明作为可用饲料共产品出售或移交时纳入；记录湿质量、干物质与接收方验收。不存在时声明不适用。

- 选定流： 饲料用湿态脱果胶柑橘皮
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_residue采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_residue`

##### 废物流

###### 湿态脱果胶柑橘皮残渣 (`peel_residue_waste`)

只记录送往废物处理的湿态脱果胶柑橘皮，测量水分并记录处理去向，不得同时将同一质量计为饲料共产品。

- 选定流： 湿态脱果胶柑橘皮残渣
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_residue采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_residue`

##### 基本流

### 过程： 浓缩、乙醇沉淀、洗涤与溶剂管理 (`concentrate_precipitate`)

从澄清提取液蒸发水分，以未变性乙醇沉淀果胶，洗涤并机械分离湿滤饼。若在场址回收溶剂，纳入实际计量的蒸馏、冷凝与冷却。乙醇循环总量与新补充量、回收量分别采集；内部循环不是新采购，也不产生替代产品抵扣。这是选定乙醇路线，并非所有果胶的必需工艺。[ippa-process; vincent-citrus-2015]

#### 输入

##### 产品流

###### 交流电 (`concentrate_precipitate_electricity`)

采集分配到本工序的用户端电力。此UUID仅适用于匹配的CN电网平均1–35 kV用户端中压消费组合供电；保留实际供应国家、电压、供应商和交付边界。其他国家、其他电压或发电侧供电须采用重新核实的匹配身份及供应商数据；不得将此UUID或其provider作为全球默认。保留原净热值参考属性和已核实能量单位链；实测kWh按1 kWh = 3.6 MJ转换。

- 选定流： 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用cp_utilities采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`

###### 蒸汽工艺热 (`concentrate_precipitate_heat`)

按热量计或实测蒸汽质量与供回焓差记录工业锅炉提供的蒸汽热，单位MJ。锅炉燃料与烟囱排放属于衔接的供应过程，不重复列入该热量交换。

- 选定流： 蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位： 总热值, 高位热值 `93a60a56-a3c8-14da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用cp_utilities采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`

###### 澄清的柑橘果胶水相提取液 (`clarified_extract_input`)

采用与clarified_extract_output配对的质量，不重复增加上游负荷。

- 选定流： 澄清的柑橘果胶水相提取液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_intermediate采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_intermediate`

###### 乙醇 (`ethanol_makeup`)

以交付液体质量计量新补充未变性乙醇，并测量纯度与含水量。上游供应须匹配实际来源与检验值；该物质身份不证明食品级或生物/化石来源。内部回收液不计为采购。

- 选定流： 乙醇 `df7bb021-85c3-4d72-ad46-29e83afe64e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_solvent采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_solvent`

###### 工艺用水 (`precipitation_water`)

仅计量外加洗涤、稀释和冷却补水；内部水循环单独记录。

- 选定流： 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_material采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 洗涤后的湿态非酰胺化柑橘果胶滤饼 (`wet_cake_output`)

称量移交干燥工序的洗涤后湿滤饼，分别测定水与残留乙醇的质量分数。

- 选定流： 洗涤后的湿态非酰胺化柑橘果胶滤饼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_intermediate采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_intermediate`

##### 废物流

###### 未处理的柑橘果胶生产废水 (`solvent_process_wastewater`)

计量经实际回收后送外部处理的工艺废液；保留乙醇浓度、pH与处理衔接，不以水资源基本流替代该废物流。

- 选定流： 未处理的柑橘果胶生产废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_effluent采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_effluent`

##### 基本流

###### 乙醇 (`concentrate_precipitate_ethanol_air`)

仅适用于有实测依据的乙醇即时排放至室外空气、子介质未指定情形。采用化学物质特定监测或闭合溶剂衡算；未闭合乙醇损失不自动等于空气排放。其他子介质须另选身份。

- 选定流： 乙醇 `08a91e70-3ddc-11dd-9349-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_emissions采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_emissions`

###### 水蒸气 (`concentrate_precipitate_water_air`)

仅在实际向室外空气、子介质未指定排放水蒸气时纳入；通过水分与冷凝液衡算确定水质量。场址内冷凝回用的水不属于该排放。

- 选定流： 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_emissions采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_emissions`

### 过程： 干燥、粉碎、蔗糖标准化、检验与包装 (`dry_blend_pack`)

干燥洗涤后的滤饼，粉碎过筛，检验粉末，按实测量加入精制蔗糖混合并包装合格产品。残留水分属于交付产品净质量。分别记录不合格品、除尘收集物与返工。主动脱酯、酰胺化、缓冲盐混配与防腐剂使用不属于本代表路线。[ippa-process; hf-pectin-2026]

#### 输入

##### 产品流

###### 交流电 (`dry_blend_pack_electricity`)

采集分配到本工序的用户端电力。此UUID仅适用于匹配的CN电网平均1–35 kV用户端中压消费组合供电；保留实际供应国家、电压、供应商和交付边界。其他国家、其他电压或发电侧供电须采用重新核实的匹配身份及供应商数据；不得将此UUID或其provider作为全球默认。保留原净热值参考属性和已核实能量单位链；实测kWh按1 kWh = 3.6 MJ转换。

- 选定流： 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用cp_utilities采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`

###### 蒸汽工艺热 (`dry_blend_pack_heat`)

按热量计或实测蒸汽质量与供回焓差记录工业锅炉提供的蒸汽热，单位MJ。锅炉燃料与烟囱排放属于衔接的供应过程，不重复列入该热量交换。

- 选定流： 蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位： 总热值, 高位热值 `93a60a56-a3c8-14da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用cp_utilities采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`

###### 洗涤后的湿态非酰胺化柑橘果胶滤饼 (`wet_cake_input`)

采用与wet_cake_output配对、且水与乙醇含量一致的记录。

- 选定流： 洗涤后的湿态非酰胺化柑橘果胶滤饼
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_intermediate采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_intermediate`

###### 精制结晶蔗糖 (`standardizing_sucrose`)

称量每批用于标准化的精制结晶蔗糖，保留证书与配方，不从名义胶凝强度推断添加量。

- 选定流： 精制结晶蔗糖
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_material采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`

###### 纸袋纸、牛皮纸 (`paper_bag`)

采用牛皮纸外袋时纳入；称量纸袋组件，排除单独的内衬。其他包装设计须另列原子行。

- 选定流： 纸袋纸、牛皮纸 `0a8faf13-9861-4805-bcee-a212c6dceb04`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_material采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`

###### 低密度聚乙烯薄膜（PE-LD） (`polyethylene_liner`)

仅在采用LDPE内衬时纳入；只称量低密度聚乙烯薄膜，不包括复合或混合材料包装。

- 选定流： 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_material采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 蔗糖标准化非酰胺化柑橘果胶粉 (`reference_product_output`)

1 千克验收合格的蔗糖标准化非酰胺化柑橘果胶粉净质量，排除全部包装。

- 选定流： 蔗糖标准化非酰胺化柑橘果胶粉
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： `fixed_value`
- 适用范围： `product_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `calculated_from_collection`
- 采集协议： `cp_product`

##### 废物流

###### 废弃的干态柑橘果胶粉 (`discarded_pectin`)

仅在存在无法回用的不合格或收集干果胶粉时纳入；称量实际废弃量并记录去向。返工粉末留在内部，不再同时列作废物输出。

- 选定流： 废弃的干态柑橘果胶粉
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_residue采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_residue`

##### 基本流

###### 乙醇 (`dry_blend_pack_ethanol_air`)

仅适用于有实测依据的乙醇即时排放至室外空气、子介质未指定情形。采用化学物质特定监测或闭合溶剂衡算；未闭合乙醇损失不自动等于空气排放。其他子介质须另选身份。

- 选定流： 乙醇 `08a91e70-3ddc-11dd-9349-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_emissions采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_emissions`

###### 水蒸气 (`dry_blend_pack_water_air`)

仅在实际向室外空气、子介质未指定排放水蒸气时纳入；通过水分与冷凝液衡算确定水质量。场址内冷凝回用的水不属于该排放。

- 选定流： 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_emissions采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_emissions`

### 过程： 设备清洗与废水移交 (`sanitation`)

纳入归属于生产的设备漂洗、清洗、泵送与废水移交。50%氢氧化钠溶液行仅适用于该实际采购溶液；实际使用的其他清洗剂须增加独立识别的原子行。本边界中的废水处理通过外部后续数据集衔接，不据此推断向环境排放废水。

#### 输入

##### 产品流

###### 交流电 (`sanitation_electricity`)

采集分配到本工序的用户端电力。此UUID仅适用于匹配的CN电网平均1–35 kV用户端中压消费组合供电；保留实际供应国家、电压、供应商和交付边界。其他国家、其他电压或发电侧供电须采用重新核实的匹配身份及供应商数据；不得将此UUID或其provider作为全球默认。保留原净热值参考属性和已核实能量单位链；实测kWh按1 kWh = 3.6 MJ转换。

- 选定流： 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 采用cp_utilities采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_utilities`

###### 工艺用水 (`cleaning_water`)

计量归属于本产品生产期的清洗与漂洗水，排除已记录的回用水。

- 选定流： 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_material采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`

###### 氢氧化钠溶液，50% (`cleaning_caustic`)

仅在实际使用采购的质量分数50%氢氧化钠溶液时纳入；称量溶液补充量并保留检验值。稀释水单独记录。此化学品和浓度不是必需清洗配方。

- 选定流： 氢氧化钠溶液，50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_material采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_material`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 果胶设备碱性清洗废水 (`cleaning_effluent`)

计量移交外部废水处理的碱性清洗废水，保留pH与溶解化学物质分析，避免与solvent_process_wastewater重复。

- 选定流： 果胶设备碱性清洗废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则： 采用cp_effluent采集每 1 kg 参考流的交换量；保留声明的适用条件。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流
- 基准类型： `reference_flow`
- 证据类型： `collected_record`
- 采集协议： `cp_effluent`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用设备与公用工程 | 优先采用产品生产期分表计量和分别观察的操作。cp_utilities记录实测因果驱动量，并将分配份额与场址总量核对。不按假定市场平均值分配蒸汽、电力或清洗。 |  |
| `allocation_spent_peel` | 脱果胶柑橘皮 | 采用cp_residue将每批脱果胶皮实物移交一次分类为废物或有记录的可用饲料共产品。存在共同生产时，采集全部产品量、干物质、可分操作的计量，以及剩余物理关系证据。缺乏已核验关系的共用负荷须方法学审查；不提供自动湿质量分配或饲料替代抵扣。 | `vincent-citrus-2015` |
| `allocation_internal_recycle` | 溶剂、水与果胶返工 | 通过质量衡算处理内部循环，不以负采购或外部共产品计量。纳入回收公用工程和排污处理；只有实际外售回收溶剂才可能为共产品，并须独立核验行、身份、数量和分配评估。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | dry_blend_pack | reference product | weighing | 批次ID；合格粉末净质量B；毛重/皮重；水分；蔗糖比例；酯化度；批次检验结果 | 经校准净重称量与批次放行记录，排除包装、不合格品与重复返工；保留实际胶凝/黏度检验方法 |kg 计算：汇总合格B；输出表示为每 1 kg 参考流.| 每批 | 完整报告生产期的全部合格批次 | 单场址声明粉末生产线 | 每 1 kg 参考流 | 秤校准；放行证书；批次与库存核对 |
| cp_material | all | atomic incoming material | weighing_and_metering | row_id；批次；毛重/皮重；计量读数；期初/末库存；水分；溶液浓度；供应检验值；使用体积时的密度 | 独立物料领用记录、校准秤与水表；仅用实测温度对应密度换算体积；包装组件独立记录 |kg 计算：归属外部净消耗 / B；每 1 kg 参考流.| 每批及生产期核对 | 与B相同报告生产期 | 实际工序入口，包括生产清洗 | 每 1 kg 参考流 | 发票；检验值；收发记录；库存衡算；校准 |
| cp_intermediate | extract_clarify; concentrate_precipitate; dry_blend_pack | paired pectin intermediate | weighing | 移交ID；起点/终点；湿质量；含水分数；乙醇分数；溶解固形物 | 校准罐体/移交称量与配对批次采样；两侧衔接同一中间体 |kg 计算：匹配移交质量 / B；每 1 kg 参考流；汇总前景时抵消内部移交.| 每次移交 | 与B同生产期，纳入在制品库存变动 | 仅内部工序接口 | 每 1 kg 参考流 | 移交配对；浓度检验；库存核对 |
| cp_utilities | all | electricity and steam heat separately | metering | process_id；计量起止读数；kWh；电压；电网地域；热量MJ；蒸汽质量；供回压力与焓；因果分配驱动量 | 对含蒸发、溶剂回收与清洗的设备分表计量；采用热量计或实测蒸汽/焓；核对场址总量 |MJ 计算：归属MJ / B；每 1 kg 参考流.| 连续计量并按生产期核对 | 与B相同完整生产期，含启动停机 | 仅用户端电力与交付蒸汽热 | 每 1 kg 参考流 | 仪表校准；电网/蒸汽交付记录；驱动量文件 |
| cp_solvent | concentrate_precipitate; dry_blend_pack | ethanol makeup and recovery balance | mass_balance | 新补充质量；乙醇检验值；循环总量；回收液质量/检验值；期初/末库存；排污；滤饼残留；实测排放 | 称量移交与罐体库存、检验各溶液，保留溶剂回收运行记录；冷却水/热量及电力在cp_utilities采集 |kg 计算：新交付补充量 / B；每 1 kg 参考流；内部循环不计外部消耗.| 每批；生产期衡算 | 与B同生产期 | 整个溶剂循环及干燥机残留 | 每 1 kg 参考流 | 罐体校准；乙醇检验；回收与排污记录 |
| cp_residue | extract_clarify; dry_blend_pack | spent peel and discarded pectin separately | weighing | row_id；移交批次；湿质量；干物质；废弃或饲料状态；接收方；可分操作计量；全部共产品量 | 称量每批实际残渣移交并核验废物处理或饲料验收；核对不合格粉末与返工 |kg 计算：各互斥出口质量 / B；每 1 kg 参考流.| 每次移交/每批 | 与B同生产期 | 工序残渣出口 | 每 1 kg 参考流 | 联单；接收方验收；水分检验；分配证据 |
| cp_effluent | concentrate_precipitate; sanitation | process and cleaning effluent separately | metering_and_sampling | 出口；液体质量；体积；密度/温度；乙醇浓度；pH；采样组成；接收处理 | 独立废水计量与代表性采样；体积转质量采用实测密度；区分外部移交和内部冷凝液回用 |kg 计算：移交液体质量 / B；每 1 kg 参考流.| 每次排出并按生产期核对 | 与B同生产期，含清洗 | 外部废水处理移交点 | 每 1 kg 参考流 | 仪表；密度；分析；处理接收凭证 |
| cp_emissions | concentrate_precipitate; dry_blend_pack | ethanol and water vapour separately | monitoring_and_balance | 物质；气体流量；浓度；运行时长；排放位置；水/乙醇投入与库存；收集冷凝液；产品残留；治理 | 采用化学物质特定监测或独立闭合物质衡算；区分室外空气、室内空气与长期排放。不将不明溶剂损失分配为空气排放 |kg 计算：实测物质质量 / B；每 1 kg 参考流.| 代表性生产/启动/停机监测 | 与B同生产期；声明监测缺口 | 仅跨场址边界的实际排放 | 每 1 kg 参考流 | 采样质量保证；不确定性；衡算闭合；介质证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_campaign` | 所有清单行 | 各归属生产期交换除以合格粉末净质量B（kg），报告每 1 kg 参考流。参考产品输出为1 kg。汇总前先配对内部移交。 | B; cp_product; cp_material; cp_intermediate; cp_utilities; cp_solvent; cp_residue; cp_effluent; cp_emissions | 每 1 kg 参考流的交换量 |  |
| `energy_conversion` | 电力行 | kWh乘以3.6转换为MJ；保留核验的净热值属性与实际供应状态。 | cp_utilities | 每 1 kg 参考流的MJ |  |
| `composition_balance` | 柑橘皮、果胶滤饼、产品与溶剂 | 衡算检查采用相同湿质量基准下分别实测的分数：非挥发性干固形物 = 湿物流质量 × (1 - 水分数 - 乙醇分数 - 其他挥发物分数)；乙醇质量 = 湿物流质量 × 乙醇分数。将挥发物分数置为零前须确认不存在；若检验值包含挥发损失，避免重复扣除。分别核对水、乙醇、非挥发性固形物、内部回收与库存变化。蔗糖属于非挥发性固形物，但不属于果胶固形物；残留乙醇两者均不属于。内部转移保留实际湿质量，参考流保留交付产品质量。 | cp_material; cp_intermediate; cp_solvent; cp_product | 独立水、乙醇与固形物衡算及披露的未闭合量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_product` | 合格粉末 | 保留批次特定果胶身份、酯化度、蔗糖比例、水分与功能试验结果。不得将供应商声明扩展为食品安全或用途授权。历史JECFA证据仅用于身份。 | cp_product; jecfa-pectins-2007; hf-pectin-2026 |
| `quality_complete` | 前景生产期 | 覆盖全部批次、启动停机、清洗、不合格品处置与回用库存变化。实际存在遗漏助剂、过滤介质或包装组件时扩展原子清单，不用集合标签替代。 | cp_material; cp_utilities; cp_residue |
| `quality_identity` | 所有行 | 使用已核验公开身份、原参考属性/单位与实际路线/介质。未解决身份与上游代表性缺口须可见，不静默替代为通用食品或废水流。 | Supplier assays; medium records; verified flow definitions |
| `quality_uncertainty` | 衡算与监测 | 报告仪表/检验不确定性、缺失时段、衡算与未解决分配；按实测不确定性评估未闭合量，不编造通用容差。 | cp_intermediate; cp_solvent; cp_effluent; cp_emissions |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考产品 | 要求1 kg合格混合粉末净质量输出、reference_product_output衔接、全部限定信息与cp_product。不得将纯果胶、湿滤饼或纯糖输出校验为本产品。 | `jecfa-pectins-2007` |
| `validate_route` | 过程清单 | 要求每个声明工序、匹配中间体移交与场址公用工程的证据。条件性残渣/饲料、碱液、包装和基本行须有实测纳入依据或明确不存在说明。缺少必需记录属于不完整，不是零。 | `ippa-process` |
| `validate_balance` | 溶剂、水、固形物与分配 | 检查物理交换非负、B为正、溶液检验一致、中间体移交匹配、质量衡算闭合，且无废物/饲料或回用抵扣重复。未解决未闭合量、组成、身份或分配阻止作出确定数据集结论。 |  |
| `validate_electricity_supply` | 电力行及关联provider | 按供应记录核对国家、电压、消费/生产组合与用户端/发电侧边界。UUID 3d76981f-964a-4865-b588-0e067a2a1163仅限匹配的CN电网平均1–35 kV用户端中压消费组合供电；其他供电须采用重新核实的身份及供应商数据。不得将此UUID或其provider作为全球默认。此身份条件不将产品方法的适用地域限定为CN。保留原净热值参考属性、已核实能量单位链和1 kWh = 3.6 MJ转换。 |  |
| `validate_boundary_claim` | 数据集完整性 | 缺少核验上游和外部处理衔接的门到门前景不得声称完整摇篮到工厂门。LCA校验不建立食品安全、健康声称或监管批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明果胶粉路线的门到门制造前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按声明组成与上游覆盖，将匹配粉末配料衔接至后续食品配方 |
| excluded_use | 全CPC 23999覆盖；纯果胶功能等效；通用其他食品数据集；其他果胶路线；安全批准；无上游衔接的完整摇篮到工厂门 |
| required_metadata | 产品/批次、组成与水分、功能试验方法、提取与溶剂路线、场址/年份、净产出B、供应和处理衔接、公用工程状态、回收配置、残渣状态与分配依据 |
| required_quality_disclosure | 实际计量/采样覆盖、不确定性、缺失身份、上游/处理缺口、衡算未闭合量、排除操作与未解决分配 |
| update_trigger | 柑橘原料预处理、配方、酸/溶剂等级、脱酯/酰胺化、能源供应、回收系统、残渣去向、包装或重要数据覆盖变化 |

## 11. 数据源

| 来源ID | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc-2025 | official_guidance | UNSD CPC 3.0解释说明，2025年6月30日，印刷/PDF第112页，23999。 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (访问于 2026-10-05 UTC) | 仅较窄果胶物质分类背景 |
| jecfa-pectins-2007 | official_guidance | FAO JECFA专论4（2007），PECTINS，独立规格PDF第1页：定义与商品描述。 https://www.fao.org/fileadmin/user_upload/jecfa_additives/docs/monograph4/additive-306-m4.pdf (访问于 2026-10-05 UTC) | 仅历史身份与水相提取/乙醇兼容性；不采用为当前安全批准或工厂参数限值 |
| ippa-process | handbook | 国际果胶生产商协会，How is Pectin Made?，步骤1-5，出版者未注明日期网页。 https://pectinproducers.com/factsheet-hub/how-is-pectin-made/ (访问于 2026-10-05 UTC) | 定性当前制造路线；无通用收率、能耗、配方或必需标准化比例 |
| vincent-citrus-2015 | handbook | Vincent Corporation，Citrus Pectin，2015年10月15日，Spent Pectin Peel与乙醇分离章节。 https://www.vincentcorp.com/content/citrus-pectin/ (访问于 2026-10-05 UTC) | 仅历史路线特定残渣/饲料与分离实例；不采用为当前市场数量、必需设备或洗涤浓度 |
| hf-pectin-2026 | handbook | Herbstreith & Fox，果胶基因技术状态声明，2026年1月2日，v15，第1页。 https://www.herbstreith-fox.de/wp-content/uploads/2026/01/GMO-Pectin.pdf (访问于 2026-10-05 UTC) | 制造商对柑橘原料与可能蔗糖标准化的佐证；仅该供应商，不作通用GMO/安全声称 |
| efsa-pectin-manufacture-2017 | official_guidance | EFSA ANS专家组（2017），果胶（E 440i）与酰胺化果胶（E 440ii）再评价，第3.1.3节制造过程，DOI:10.2903/j.efsa.2017.4866；https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2017.4866 (访问于 2026-10-06 UTC) | 历史技术描述，支持盐酸水相提取、乙醇分离及替代路线；不采用数值运行范围或食品安全结论。 |
