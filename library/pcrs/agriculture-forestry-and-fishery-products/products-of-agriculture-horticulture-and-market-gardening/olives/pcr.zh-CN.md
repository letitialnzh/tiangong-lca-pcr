---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.olives
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 橄榄鲜果产品类别规则
## 1. 范围与适用性
适用于橄榄园生产、采摘和农场门前实际发生的分级，交付未经压榨或腌制的完整鲜果。桌用与榨油是鲜果去向或等级属性；果油、橄榄渣、盐渍果和装罐果均不属于本参考产品。干旱地与灌溉地、人工与机械采收均须声明。多年生建园负担须与结果年关联。
## 2. 产品类别身份
| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.olives` |
| classification_refs | CPC 3.0 01450 Olives |
| covered_products | 完整橄榄鲜果；桌用、榨油或双用途批次 |
| excluded_products | 腌制橄榄、橄榄油、油渣、叶和木材 |
| representative_product | 农场门完整橄榄鲜果 |
| production_route | 多年生建园、园地管理、采收、条件性分级 |
| market_state | 未经压榨或腌制、农场门可销售鲜果 |

## 3. 参考流
| 字段 | 值 |
| --- | --- |
| What | 农场门完整橄榄鲜果 |
| How much | 1 kg |
| How well | 注明桌用/榨油去向、品种、成熟度、完整性和损伤等级 |
| How long or cycle | 声明收获年和果园阶段；建园负担跨相关结果年分摊 |
| reference_flow_link | 有分级时 accepted_fruit 与售出的 downgraded_fruit 合计；无场内分级时 picked_fruit 为农场门参考鲜果 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Olives `b07470dd-3947-4e02-8058-11967225f927` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种或品种组合；桌用/榨油去向；采收日期与成熟度；损伤/分级；地理和年度；灌溉模式；采收模式；鲜果含水和称重条件 |

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按农场门完整鲜果实测净质量计；容器皮重、油、盐水不得计入。 |
| orchard_area | 多年生果园 | Area | ha | 按实际管理地块面积和生产年记录；建园面积仅为阶段归属分母。 |
| nutrient_basis | 肥料 | Mass | kg product and kg nutrient | 分别保存肥料产品质量与 N、P、K 养分质量，不混用两种基准。 |
| fruit_balance | 采收与分级 | Mass | kg | 同一批次平衡总入场质量、接收果、降级果、拒收果、分离的橄榄枝叶、非植物杂质、损失及库存变化。 |

## 5. 系统边界
含建园、补植、灌溉、养分与植保、修剪、场内能源、鲜果采收，以及实际位于农场门前的分级。土壤排放仅在有适用方法及活动数据时估算，并保留物种与受纳介质。外购树苗、肥料、电力和燃料的上游生产由相应背景数据覆盖。农场门后运输、压榨、腌制、洗涤和包装不在此边界内。
### 边界抽象
| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 建园地块、原有植被、树龄、品种、密度、灌溉设施和基准年 |
| starting_condition_role | 建园及多年期负担的前景起点 |
| product_classification_scope | 完整橄榄鲜果，不以桌用或榨油去向分裂 PCR 身份 |
| recursive_input_rule | 本类别橄榄鲜果再投入时记录真实来源与数量，并终止同类别递归追溯 |
| upstream_dataset_requirement | 外购幼树、材料、水、能源须关联相应上游数据及地区/年份 |
| disclosure | 披露建园期、结果年、补植、分级是否场内及桌用/榨油鲜果去向 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_fresh_fruit | 农场门鲜果 | 仅交付未加工完整鲜果；后续压榨和腌制另建系统。 | ioc-table-olives |
| boundary_periods | 果园树木批次 | 保存建园、非结果、结果、补植与终止年度，不得将建园投入全数压入一个任意采收年。 | ioc-olive-growing |
| boundary_grading | 条件性分级 | 只有实际场内分级才启用分级过程；按批次记录去向和损失。 | uc-harvest-2013 |

## 6. 过程清单结构
### 过程图
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| establish | 果园建植 | 必需（`required`） | 新建果园批次必需；记录非结果期并按期间归属 | 多年度建园 | 公顷已建植果园 |
| manage | 橄榄园管理 | 必需（`required`） | 结果与非结果果园年度 | 受管理生物生产 | 公顷果园年度 |
| harvest | 橄榄鲜果采收 | 必需（`required`） | 结果年度 | 从树体独立采摘并在农场收集 | 千克已采鲜果 |
| sort | 农场内鲜果分级 | 条件性（`conditional`） | 仅当分级或损伤挑选位于农场门之前 | 等级与去向平衡 | 千克入场鲜果 |

### 过程： 果园建植 (`establish`)

#### 输入
##### 产品流
###### 橄榄幼树 （`young_trees`）
记录购入的建园或补植幼树株数，并区别场内繁育。
- 选定流： 橄榄幼树
- 流属性/单位： Count / trees
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_establish`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： trees
  - 基准： 每公顷已建植果园
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 建园灌溉水 （`establish_water`）
计量非结果期建园灌溉水，不把降雨当作产品投入。
- 选定流： 建园灌溉水
- 绑定： 参数化 (`parameterized`)
- 流集： `flow-set.water-use`
- 流集版本： `0.2.0`
- 流集分组： `irrigation-water`
- 流属性/单位： Volume / m3
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_establish`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 20000
  - 单位： m3
  - 基准： 每公顷建园年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 建园机械燃料 （`establish_fuel`）
记录整地和定植的液体燃料；其他能源载体分别建流。
- 选定流：建园移动机械燃料
- 绑定： 参数化 (`parameterized`)
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `mobile-machinery-fuel`
- 流属性/单位： Volume / L
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_establish`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 2000
  - 单位： L
  - 基准： 每公顷已建植果园
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 废物流
无。
##### 基本流
无。
#### 输出
##### 产品流
###### 已建立果园状态 （`established_orchard`）
定植的活果园面积交接到管理期；它不是出售的橄榄产品。
- 选定流： 已建立果园状态
- 流属性/单位： Area / ha
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_establish`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： ha
  - 基准： 每公顷定植面积
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 废物流
无。
##### 基本流
无。
### 过程： 橄榄园管理 (`manage`)

#### 输入
##### 产品流
###### 在管果园面积 （`orchard_state`）
按地块和时期连接建园及补植批次，不重复购入内部状态。
- 选定流： 在管果园面积
- 流属性/单位： Area / ha
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_manage`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1
  - 单位： ha
  - 基准： 每公顷管理果园年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 农业养分与肥料投入（`manage_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型：作物周期 (`crop_cycle`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manage`
- 来源：
- 数量范围：合并养分产品 QA 筛查；实际数量以前景记录为准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg product/ha
  - 基准：每公顷管理果园年度分别记录的矿质肥料、有机肥、石灰及含养分改良剂产品质量总和
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`)

###### 植保产品 （`crop_protection`）
使用时按制剂与有效成分逐项记录植保材料。
- 选定流： 植保产品
- 流属性/单位： Mass / kg product
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_manage`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 200
  - 单位： kg product
  - 基准： 每公顷管理年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 果园灌溉水 （`irrigation_water`）
计量灌溉投入；旱作地块记零而不是缺失。
- 选定流： 果园灌溉水
- 绑定： 参数化 (`parameterized`)
- 流集： `flow-set.water-use`
- 流集版本： `0.2.0`
- 流集分组： `irrigation-water`
- 流属性/单位： Volume / m3
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_manage`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 20000
  - 单位： m3
  - 基准： 每公顷管理年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 果园管理燃料 （`field_fuel`）
记录修剪、割草、喷施与场内设备燃料，避免与外包作业燃料重复。
- 选定流：果园移动机械燃料
- 绑定： 参数化 (`parameterized`)
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `mobile-machinery-fuel`
- 流属性/单位： Volume / L
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_manage`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 2000
  - 单位： L
  - 基准： 每公顷管理年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 灌溉及果园用电 （`pump_electricity`）
有供电时计量抽水及其他果园用电。
- 选定流： 灌溉及果园用电
- 绑定： 参数化 (`parameterized`)
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `electricity-supply`
- 流属性/单位： Energy / kWh
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_manage`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 20000
  - 单位： kWh
  - 基准： 每公顷管理年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 废物流
无。
##### 基本流
无。
#### 输出
##### 产品流
###### 树上橄榄果 （`standing_fruit`）
果园生产期末可采果实的内部状态；利用实收与损失记录平衡。
- 选定流： 树上橄榄果
- 流属性/单位： Mass / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_manage`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： kg
  - 基准： 每公顷采收年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 废物流
###### 离园修剪物 （`pruning_biomass`）
仅离园修剪物构成废物或外运生物质；留园覆盖物留在土壤管理边界内。
- 选定流： 离园修剪物
- 流属性/单位： Mass / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_manage`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 30000
  - 单位： kg
  - 基准： 每公顷管理年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 基本流
###### 土壤氧化亚氮排向空气 （`field_n2o`）
按实际氮投入及适用经审查土壤排放方法计算 N2O-N，换算 N2O 并披露因子。
- 选定流： 土壤氧化亚氮排向空气
- 流属性/单位： Mass / kg N2O
- 数量规则： 以地块年度实际氮投入按披露的适用土壤方法计算
- 数值来源模式： 计算值 (`calculated_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 由采集记录计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ipcc-2019-managed-soils`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50
  - 单位： kg N2O
  - 基准： 每公顷管理年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 硝酸盐排向水体 （`nitrate_loss`）
仅对有记录的淋洗或径流路径计入，并注明受纳水体和氮计量基准。
- 选定流： 硝酸盐排向水体
- 流属性/单位： Mass / kg nitrate-N
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每公顷管理或建园年度；按果园年度鲜果产量换算为每 kg 参考鲜果
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_emissions`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 500
  - 单位： kg nitrate-N
  - 基准： 每公顷管理年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
### 过程： 橄榄鲜果采收 (`harvest`)

#### 输入
##### 产品流
###### 待采树上果 （`fruit_on_tree`）
连接本地块本年度的果园果实状态，不当作外购产品。
- 选定流： 待采树上果
- 流属性/单位： Mass / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： kg
  - 基准： 每公顷采收年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 采收机械燃料 （`harvest_fuel`）
使用机械采收和场内收集时记录燃料；人工采收可为零。
- 选定流：采收移动机械燃料
- 绑定： 参数化 (`parameterized`)
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `mobile-machinery-fuel`
- 流属性/单位： Volume / L
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 1000
  - 单位： L
  - 基准： 每公顷采收年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 废物流
无。
##### 基本流
无。
#### 输出
##### 产品流
###### 已采橄榄鲜果 （`picked_fruit`）
称量进入场内分级的完整果；如未分级，则称量农场门可销售鲜果净量，并将未售损伤果计入采收损失。
- 选定流： 橄榄 `b07470dd-3947-4e02-8058-11967225f927`
- 绑定： 固定 (`fixed`)
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： kg
  - 基准： 每公顷采收年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 废物流
###### 采收损失或未收集果 （`uncollected_fruit`）
估算未出售的落地、未收集或损伤果，并记录观察方法与去向。
- 选定流： 采收损失或未收集果
- 流属性/单位： Mass / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_harvest`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： kg
  - 基准： 每公顷采收年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 基本流
无。
### 过程： 农场内鲜果分级 (`sort`)
仅当该操作在农场门前发生时启用；未发生时没有本过程交换。
#### 输入
##### 产品流
###### 进入农场分级的鲜果 （`incoming_fruit`）
农场分级时采用已称量采收鲜果；未分级则整个过程不启用。
- 选定流： 进入农场分级的鲜果
- 流属性/单位： Mass / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： kg
  - 基准： 每公顷采收年度；仅场内分级时适用
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 农场分级用电 （`sorting_electricity`）
仅在农场门前分级时计量分选设备用电。
- 选定流： 农场分级用电
- 绑定： 参数化 (`parameterized`)
- 流集： `flow-set.energy-supply`
- 流集版本： `0.2.0`
- 流集分组： `electricity-supply`
- 流属性/单位： Energy / kWh
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 5000
  - 单位： kWh
  - 基准： 每公顷采收年度；仅场内分级时适用
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 废物流
无。
##### 基本流
无。
#### 输出
##### 产品流
###### 可销售完整橄榄鲜果 （`accepted_fruit`）
称量接收果，记录桌用或榨油去向、品种、成熟度、损伤等级和批次；此为农场门参考产品。
- 选定流： 橄榄 `b07470dd-3947-4e02-8058-11967225f927`
- 绑定： 固定 (`fixed`)
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 来源： `uc-harvest-2013`; `uc-olive-fly`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： kg
  - 基准： 每公顷采收年度
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 降级但售出的完整橄榄 （`downgraded_fruit`）
记录从预期桌用等级转为榨油果或其他鲜果销售等级的完整果；此处不产油。
- 选定流： 橄榄 `b07470dd-3947-4e02-8058-11967225f927`
- 绑定： 固定 (`fixed`)
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 来源： `uc-harvest-2013`; `uc-olive-fly`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： kg
  - 基准： 每公顷采收年度；仅场内分级时适用
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 废物流
###### 拒收完整橄榄果 （`rejected_fruit`）
称量不销售的完整拒收橄榄果，记录损伤原因和废物去向；不含叶、枝等异物。
- 选定流： 拒收完整橄榄果
- 流属性/单位： Mass / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 50000
  - 单位： kg
  - 基准： 每公顷采收年度；仅场内分级时适用
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 分离出的橄榄叶和细枝 （`olive_vegetative_debris`）
称量从采收批次分离的橄榄叶和细枝，记录处置或场内还田；不得计入果实质量。
- 选定流： 分离出的橄榄叶和细枝
- 流属性/单位： Mass / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 10000
  - 单位： kg
  - 基准： 每公顷采收年度；仅场内分级时适用
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
###### 分离出的非植物杂质 （`extraneous_matter`）
将土壤、石块等非植物杂质与橄榄枝叶分别称量，并记录处置路径。
- 选定流： 分离出的非植物杂质
- 流属性/单位： Mass / kg
- 数量规则： 来自地块年度或批次实测记录；不以范围替代实际值
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每批次采收果；按农场门接收果净质量归一
- 基准类型： 作物周期 (`crop_cycle`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_sort`
- 数量范围： 暂定范围，仅供异常值复核，实际前景记录为准
  - 范围角色： QA 校验 (`qa_guardrail`)
  - 下限： 0
  - 上限： 10000
  - 单位： kg
  - 基准： 每公顷采收年度；仅场内分级时适用
  - 基准类型： 作物周期 (`crop_cycle`)
  - 证据类型： 推理估算 (`reasoned_estimate`)
##### 基本流
无。
## 7. 分配与联产品处理
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| period_attribution | 果园建植 | 以实际建园投入及经记录的预期生产期，按每个受益结果年的可销售鲜果质量分摊；实际终止、补植或严重产量变化时重算，不设通用寿命。 | ioc-olive-growing |
| fruit_grade_attribution | 桌用与榨油果等级 | 同一批次桌用和榨油果的共同田间投入按可销售鲜果质量分配；专属分级或采收投入直接归属其批次，拒收物不得伪作联产品。 | uc-harvest-2013 |
| double_count_prevention | 全部生产阶段 | 同一建园、补植、园地作业或采收活动只记录一次；复合肥按含氮优先、再含磷、再仅含钾归入一张产品投入卡，其余养分含量仅作分析，不生成重复交换。 | mass-balance-identity |

## 8. 前景数据采集、计算与质量规则
所有范围仅用于发现可疑值；为暂定宽幅筛选，不是清单默认值、合格限值或跨地区产量承诺。应以地块和批次原始凭证替代范围，并在发表前用区域性经审查数据改进。
### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_establish | establish | 幼树、土地、水及燃料 | 前景活动原始记录 | 幼树、土地、水及燃料 | 定植与采购凭证、计量表及机械日志 | trees; ha; m3; L | 每次定植事件 | 全部建园和补植年度 | 果园地块 | 按地块与年度求和，并将树木批次关联到结果年 | 定植发票、地块图及计量表读数 |
| cp_manage | manage | 各实物肥料产品、养分组成、植保、灌溉、能源、修剪及果实状态 | 前景活动原始记录 | 各实物肥料产品、养分组成、植保、灌溉、能源、修剪及果实状态 | 从发票或配方取得唯一产品标识、产品质量与氮磷钾分数，结合施用日志、计量表和果实估算 | kg product; kg N/P/K; m3; L; kWh; ha | 每次作业 | 每个管理日历年或作物年 | 果园地块 | 每种实物肥料仅建一条交换；养分按组成分析，全部活动按地块年度汇总 | 发票、组成声明、设备日志、计量表读数及修剪单据 |
| cp_emissions | manage | 直接氧化亚氮与硝酸盐活动数据 | 前景活动原始记录 | 直接氧化亚氮与硝酸盐活动数据 | 记录含氮产品、土壤及受纳介质，应用已声明的当地方法 | kg N; kg N2O; kg nitrate-N | 每年 | 每个管理年度 | 果园地块 | 按物种和受纳介质分别计算 | 氮投入台账及所引用的因子方法 |
| cp_harvest | harvest | 已采与未收集果实、采收燃料 | 前景活动原始记录 | 已采与未收集果实、采收燃料 | 地磅单据与田间损失调查 | kg; L | 每个采收批次 | 完整采收时段 | 地块及批次 | 汇总已采和调查得到的未收集果，并保留采收方式 | 衡器校准、称重单据及调查表 |
| cp_sort | sort | 接收、降级及拒收果、橄榄枝叶、非植物杂质及能源 | 前景活动原始记录 | 接收、降级及拒收果、橄榄枝叶、非植物杂质及能源 | 分级单据、果实/枝叶/杂质分别称重与电表读数 | kg; kWh | 每个分级批次 | 全部场内分级批次 | 农场分级场址及批次 | 平衡总入场质量、各果实等级、橄榄枝叶、其他杂质、损失和库存变化 | 分级单据、衡器校准及计量表日志 |

### 计算规则
| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| annualize_establishment | 新建植与补植树木 | 将实测建园年度投入按受益结果年产出归属，终止和补植时更新。 | 地块树木批次、定植日期、投入日志与结果年鲜果质量 | 每千克接收鲜果所归属的投入千克数 | ioc-olive-growing |
| fruit_reconcile | 采收或分级批次 | 总入场批次 = 接收果 + 降级果 + 拒收果 + 分离枝叶 + 非植物杂质 + 实测损失 + 库存变化。 | 总入场批次称重、各鲜果等级、分离枝叶与非植物杂质 | 千克质量差额 | mass-balance-identity |
| fruit_normalize | 全部果园年度投入 | 地块年度投入 ÷ 同年度相应批次可销售鲜果 kg；无结果年单独保留待分摊。 | 地块年度活动量和可销售鲜果质量 | 每千克参考鲜果 |  |
| nutrient_convert | 养分产品 | 每一实物产品只建一条交换；产品质量乘凭证中各元素养分分数，并保持 N、P、K 与氧化物标示基准。 | 唯一肥料产品标识、产品质量和申报的养分质量分数 | 千克氮、磷和钾 | uc-fertilizing-olives |

### 数据质量要求
| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_periods | 果园树木批次 | 保存建园、非结果、结果、补植和终止时段及分摊版本。 | 地块图和年度台账 |
| dq_route | 鲜果批次 | 保存桌用/榨油去向、品种、成熟度、损伤、采收方式和出门时的鲜果状态。 | 批次及分级单据 |
| dq_mass | 采收与分级 | 校准称重并核对果实平衡；记录缺失、估算与库存变化。 | 衡器校准证据及质量平衡表 |
| dq_inputs | 全部过程投入 | 按实际材料/载体区分投入，不把未发生的条件过程填默认值。 | 计量表、采购凭证和作业日志 |
| dq_emissions | 土壤排放 | 物种、受纳介质、活动量和适用方法均须可追踪；不可解析的流保持未映射。 | 方法记录和氮投入台账 |

## 9. 验证规则
| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | 参考产品 | 核对完整鲜果 UUID、1 kg 净质量和必需限定信息；油、腌制果不能代替鲜果。 | ioc-table-olives |
| validate_periods | 多年生果园批次 | 核对所有建园、非结果、结果、补植和终止期间仅分配一次且可回溯。 | ioc-olive-growing |
| validate_route | 采收与分级 | 记录人工或机械采收及桌用/榨油等级；未启用分级时不产生其投入产出。 | uc-harvest-2013 |
| validate_balance | 鲜果批次 | 复核果实、分离枝叶、非植物杂质及总批次质量平衡，拒收去向和损伤等级；不重复计算内部转移。 | mass-balance-identity |
| validate_range | 每张流卡 | 对暂定范围外记录进行调查，不以范围拒绝有证据的真实观测值。 |  |

## 10. 发布数据集概况
| 字段 | 值 |
| --- | --- |
| dataset_role | 橄榄鲜果的地块/批次前景数据包 |
| downstream_use | `secondary_dataset`；经地区与期间匹配后可作 `background_dataset` |
| allowed_use | 农场门完整鲜果建模，按桌用或榨油鲜果去向拆分 |
| excluded_use | 不能充当橄榄油、腌制果或任意地区/树龄的无条件默认数据 |
| required_metadata | 地块、地区、品种、树龄、建园/结果/补植年、灌溉、采收、分级和果实去向 |
| required_quality_disclosure | 称重与损失核查、跨年度分摊、未映射交换、暂定范围及数据缺口 |
| update_trigger | 地块更新、改植、采收技术、分级位置、质量定义或因子方法变更 |

## 11. 数据来源
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ioc-olive-growing | official_guidance | International Olive Council, Olive Growing, https://www.internationaloliveoil.org/wp-content/uploads/2019/12/Olivicultura_eng.pdf | 建园、管理与采收路径 |
| ioc-table-olives | official_guidance | International Olive Council, Table olives, https://www.internationaloliveoil.org/olive-world/table-olives/ | 鲜果成熟、处理与腌制边界 |
| uc-harvest-2013 | extension_guidance | UC ANR, Mechanical Harvesting of California Table and Oil Olives, 2013, https://ucanr.edu/blog/topics-subtropics/article/mechanical-harvesting-california-table-and-oil-olives | 采收方式与损伤差异 |
| uc-fertilizing-olives | extension_guidance | UC ANR, Fertilizing Olives, https://ucanr.edu/node/107355/printable/print | 场址特定的养分记录 |
| uc-olive-fly | extension_guidance | UC IPM, Olive Fruit Fly, https://ipm.ucanr.edu/agriculture/olive/olive-fruit-fly/ | 随去向变化的果实状况 |
| ipcc-2019-managed-soils | method_factor | IPCC, 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤 N2O 方法与氮投入路径 |
| mass-balance-identity | method_factor | 总入场采收批次 = 接收果 + 降级果 + 拒收果 + 分离枝叶 + 非植物杂质 + 实测处理损失 + 库存变化 | 批次质量平衡 |
