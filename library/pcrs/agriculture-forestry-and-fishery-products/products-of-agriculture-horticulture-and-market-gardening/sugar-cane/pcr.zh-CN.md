---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-cane
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 甘蔗

## 1. 范围与适用性

本 PCR 规范平台所声明农业田间交接点的合格成熟甘蔗茎前景生产。范围包括新植蔗建植、每个所代表的宿根期、田间管理、人工或机械收获、绿色收获或收获前预烧披露、田间调理、残体、损失及结转蔗蔸责任。范围排除交接点后的运输，以及全部压榨、制汁、澄清、蒸发、糖、糖蜜和乙醇制造。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sugar-cane |
| classification_refs | CPC 3.0: 01802 Sugar cane |
| covered_products | 在农业田间交接点验收的成熟收获甘蔗茎，包括 Saccharum officinarum 或已声明的商业甘蔗杂交种 |
| excluded_products | 蔗糖或加工糖；蔗汁；糖浆；糖蜜；乙醇；蔗渣；作为种蔗销售的种植材料；田间交接后的运输与加工 |
| representative_product | 合格成熟收获甘蔗茎，并非加工蔗糖 |
| production_route | 平台流未声明路线。本 PCR 要求披露管理的新植蔗和/或宿根蔗生产及人工或机械收获；同一田块批次事件的绿色收获与收获前预烧路线互斥。 |
| market_state | 精确平台 gate `Natural mix, at agricultural fields` 的鲜成熟蔗茎，已切梢并去除过量叶/蔗叶及明显附着土壤；声明水分、品种、预烧状态、收获方式与验收条件 |

管理生物生产母过程为 field_production。新植蔗与宿根蔗可在声明作物序列中共存，但在单一期别身份上互斥。人工/机械及绿色/预烧替代路线附属于收获；所选路线改变的每项拓扑、投入、排放、残体路线和数据要求均须记录。

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 精确平台 gate `Natural mix, at agricultural fields` 的合格成熟收获甘蔗茎 |
| How much | 1 kg |
| How well | 满足所声明批次关于品种或杂交种、成熟度、水分、预烧状态、收获方式、蔗梢/叶、杂质、损伤和明显附着土壤的验收要求 |
| How long or cycle | 声明完整作物序列中的一个已识别新植蔗或宿根蔗收获期；共享建植负荷按实际合格产出归属 |
| reference_flow_link | accepted_sugarcane_stalks |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Saccharum officinarum `d56c6f6a-8f2e-4351-8362-18a710ac31f0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 精确 gate `Natural mix, at agricultural fields`；平台未声明处理路线；鲜成熟蔗茎；物种或杂交种；新植蔗或宿根期；作物序列标识；绿色或预烧收获；人工或机械收获；水分基准；蔗梢/叶与杂质状态；验收等级；地理与收获日期 |
| Binding | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考蔗茎 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用声明田间交接点的净鲜质量；不得以蔗糖、干物质或工厂接收质量替代。 |
| `moisture_alignment` | 蔗茎、蔗梢、蔗叶与损失质量平衡 | 带水分基准的质量 | kg | 声明湿基或干基，并使用配对样本将比较质量换算到共同基准。 |
| `nutrient_product_basis` | 合并养分供应 | 实际产品质量与养分分析 | kg product; kg nutrient | 每种实际产品仅采集一次；依据保留的分析值计算养分投入，不设独立 PCR 肥料卡。 |
| `period_normalization` | 新植与宿根期 | 质量、面积与期间标识 | kg; ha; period | 将各期记录按合格产出归一化，共享建植仅在实际声明的收获序列间摊销。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 建植前的新植蔗田，或从已识别前一收获期结转的有活力宿根蔗蔸 |
| starting_condition_role | 初始田间条件或跨期中间物；不得作为无负荷且未追踪的投入 |
| product_classification_scope | CPC 3.0: 01802 Sugar cane |
| recursive_input_rule | 购入并用作种植材料的甘蔗作为带上游数据集的投入；保留蔗蔸仅从前一收获期关联一次，不递归表示为合格商品甘蔗 |
| upstream_dataset_requirement | 购入种蔗、产品与能源须有上游数据集；要求产地、数量、质量和交接一致 |
| disclosure | 声明地理、田块、作物序列及期间标识、新植/宿根状态、建植与终止、灌溉、养分和植保管理、收获技术、绿色/预烧状态、残体路线、交接、产出集合与分配 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_handoff` | 完整路线 | 边界止于农业田间交接的合格收获蔗茎；排除交接后的全部运输与工厂转化。 | `fao-sugarcane-water-2012` |
| `boundary_period_series` | 新植蔗与宿根蔗 | 列举新植建植、每个所代表宿根期及最终终止；蔗蔸与共享负荷仅跨期关联一次。 | `fao-sugarcane-water-2012` |
| `boundary_harvest_routes` | 收获 | 每个田块批次事件声明人工或机械技术，并在绿色收获或收获前预烧中恰选其一；报告改变的能源、排放、损失、蔗叶及蔗蔸影响。 | `sra-harvest-manual-2014`; `fao-cane-environment-1997` |
| `boundary_residue_exclusivity` | 蔗梢、叶片、蔗叶残体与蔗蔸 | 将每个残体份额仅一次分配至留田、预期移除、焚烧、回收、处置或跨期蔗蔸，并保留干物质及氮基准。 | `ipcc-managed-soils-2019` |
| `boundary_conditioning` | 田间调理 | 包括田间交接所需的切梢、叶/蔗叶分离、明显土壤去除及装载；排除压榨及蔗汁或糖加工。 | `sra-harvest-manual-2014` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 新植蔗建植与宿根田间生产 | required | 从整地或声明结转蔗蔸至成熟立蔗 | 管理生物生产母过程；按期标识新植/宿根路线 | 1 kg 合格参考产品 |
| `harvest` | 甘蔗收获 | required | 人工或机械；每个田块批次仅可选绿色收获或收获前预烧之一 | 收获/采集母过程，具有针对蔗茎、蔗叶、蔗蔸与损失的替代技术和生物路线差异 | 1 kg 合格参考产品 |
| `field_conditioning` | 田间初级处理与农业田间交接 | required | 在声明交接前切梢、叶/蔗叶去除、明显土壤去除及装载 | 将原始收集蔗茎初级处理为合格已准备蔗茎；排除工厂加工 | 1 kg 合格参考产品 |

### 过程: 新植蔗建植与宿根田间生产 (`field_production`)

#### 投入

##### 产品流

###### 用于新植蔗建植的种蔗 (`planting_cane`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 种蔗茎段或蔗种块
- 流属性/单位: Mass / kg
- 数量规则: 进入新植蔗田的有活力种植材料实测鲜质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_cycle`
- 来源: `fao-sugarcane-water-2012`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.20
  - 单位: kg
  - 基准: 声明作物序列内每 kg 合格甘蔗的种植材料
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 合并农业养分供应 (`agricultural_nutrient_supply`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 实际矿质肥、有机肥、石灰及含养分改良剂
- 流属性/单位: Mass / kg
- 绑定模式: `parameterized`
- Flow Set: `flow-set.agricultural-nutrient-supply`
- Flow Set version: `0.3.0`
- 数量规则: 汇总实际产品实测质量，同时保留产品身份、养分分析、施用日期和田块
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源: `ipcc-managed-soils-2019`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.05
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的全部养分供应产品
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 植保产品 (`crop_protection_inputs`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 植保产品
- 流属性/单位: Mass / kg
- 数量规则: 施用于所代表田块及作物期的制剂产品实测量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_inputs`
- 来源: `sra-weed-manual-2021`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.005
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的制剂产品
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 田间作业能源载体 (`field_energy_supply`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 田间作业实际使用的燃料或电力
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 按仪表或票据记录并仅一次归属到田块及作物期的能源载体用量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_operation_energy`
- 来源:
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: MJ
  - 基准: 每 kg 合格甘蔗的宽范围筛查能源
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 废物流

本过程与方向无此类流。

##### 基本流

###### 灌溉水取用 (`irrigation_water_withdrawal`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 按声明来源环境区室取用的水
- 流属性/单位: Volume / m3
- 数量规则: 实测到田灌溉水，并按有据输水边界修正
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_irrigation`
- 来源: `fao-sugarcane-water-2012`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: m3
  - 基准: 每 kg 合格甘蔗的灌溉取水
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 农业土地占用 (`land_occupation`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 农业土地占用
- 流属性/单位: Area*time / m2*a
- 数量规则: 种植面积乘以所代表的新植蔗或宿根蔗期间，再按合格产出归一化
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_field_cycle`
- 来源: `fao-sugarcane-water-2012`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.0001
  - 上限: 0.02
  - 单位: m2*a
  - 基准: 每 kg 合格甘蔗的土地占用
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


#### 产出

##### 产品流

###### 转入收获的成熟立蔗 (`mature_standing_cane`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 成熟立地甘蔗作物
- 流属性/单位: Mass / kg
- 数量规则: 估算或实测可供关联收获事件收取的成熟蔗茎质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_cycle`
- 来源: `fao-sugarcane-water-2012`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 2
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的立地蔗茎质量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 废物流

###### 田间生长损失与失败生物质 (`field_growth_loss`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 失败或不可收获甘蔗生物质
- 流属性/单位: Mass / kg
- 数量规则: 实测或抽样未转入收获的生物质，并记录去向
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_cycle`
- 来源:
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的宽范围失败生物质筛查值
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 基本流

###### 管理土壤直接氧化亚氮 (`managed_soil_n2o`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 管理土壤向空气排放的氧化亚氮
- 流属性/单位: Mass / kg
- 数量规则: 依据田块特定氮投入与所声明 IPCC 层级计算，本 PCR 不内置默认因子
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源: `ipcc-managed-soils-2019`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.001
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的直接 N2O 筛查范围
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 淋溶与径流氮损失 (`nitrogen_leaching_runoff`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 向水体或田外区室排放的已报告氮物质
- 流属性/单位: Mass / kg
- 数量规则: 依据实测氮源、场地条件和声明方法计算，并保留物质及环境区室
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_field_emissions`
- 来源: `ipcc-managed-soils-2019`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.01
  - 单位: kg N
  - 基准: 每 kg 合格甘蔗的氮损失筛查范围
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


### 过程: 甘蔗收获 (`harvest`)

#### 投入

##### 产品流

###### 进入收获的成熟立蔗 (`standing_cane_input`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 成熟立地甘蔗作物
- 流属性/单位: Mass / kg
- 数量规则: 同一田块、作物期及收获事件对应田间生产的关联产出质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_harvest_lot`
- 来源: `mass-balance-identity`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 2
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的立地蔗茎投入
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 收获能源载体 (`harvest_energy_supply`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 人工辅助或机械收获实际使用的燃料或电力
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 按仪表或票据记录并关联田块批次及收获路线的能源
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_operation_energy`
- 来源: `sra-harvest-manual-2014`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: MJ
  - 基准: 每 kg 合格甘蔗的收获能源
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 废物流

本过程与方向无此类流。

##### 基本流

本过程与方向无此类流。

#### 产出

##### 产品流

###### 预期产出：收集的甘蔗茎 (`collected_cane_stalks`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 田间调理前收获的甘蔗茎
- 流属性/单位: Mass / kg
- 数量规则: 称量后转入田间调理的收集蔗茎质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_lot`
- 来源: `sra-harvest-manual-2014`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.5
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的收集蔗茎
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 预期利用的蔗梢或蔗叶残体产出 (`intended_harvest_residue_output`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 具有预期用途的分离蔗梢或蔗叶残体
- 流属性/单位: Mass / kg
- 数量规则: 作为独立预期产出离田的干基或湿基实测质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residue_routes`
- 来源: `fao-cane-environment-1997`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的预期残体产出
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 预期产出：跨期宿根蔗蔸 (`ratoon_stubble_carry_forward`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 留作宿根再生的有活力甘蔗蔗蔸
- 流属性/单位: Area / ha
- 数量规则: 记录收获后有意保留有活力蔗蔸的田块面积
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_field_cycle`
- 来源: `fao-sugarcane-water-2012`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.02
  - 单位: ha
  - 基准: 每 kg 合格甘蔗对应的保留宿根面积
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 废物流

###### 收获田间损失与受损甘蔗 (`harvest_field_loss`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 收获中遗留、损失或损坏的甘蔗
- 流属性/单位: Mass / kg
- 数量规则: 抽样或核对未进入收集蔗茎产出的物料，并记录其去向
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_lot`
- 来源: `sra-harvest-manual-2014`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.5
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的收获损失
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 留田或丢弃的蔗梢与蔗叶残体 (`retained_or_discarded_trash`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 无独立预期用途的甘蔗蔗梢与蔗叶残体
- 流属性/单位: Mass / kg dry matter
- 数量规则: 计量或估算干物质，并仅指定返田、移除、焚烧、回收或处置中的一条路线
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_residue_routes`
- 来源: `ipcc-managed-soils-2019`; `fao-cane-environment-1997`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: kg dry matter
  - 基准: 每 kg 合格甘蔗的非产品蔗叶残体
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 基本流

###### 收获前焚烧排放 (`preharvest_burn_emissions`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 收获前焚烧向空气排放的已声明污染物种
- 流属性/单位: Mass / kg
- 数量规则: 绿色收获时为零；否则依据焚烧干物质量及声明方法逐物种计算
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_residue_routes`
- 来源: `ipcc-managed-soils-2019`; `fao-cane-environment-1997`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的全物种筛查量；每条交换仍须保持物种特定
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


### 过程: 田间初级处理与农业田间交接 (`field_conditioning`)

#### 投入

##### 产品流

###### 进入田间调理的收集甘蔗 (`collected_cane_input`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 田间调理前收获的甘蔗茎
- 流属性/单位: Mass / kg
- 数量规则: 同一田块批次及收获事件的关联收集蔗茎质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_lot`
- 来源: `mass-balance-identity`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1.5
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的调理入口量
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 田间调理能源载体 (`conditioning_energy_supply`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 切梢、去叶及装载实际使用的燃料或电力
- 流属性/单位: Energy / MJ
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则: 按仪表或票据记录并关联调理批次及遍次的能源
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_operation_energy`
- 来源: `sra-harvest-manual-2014`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: MJ
  - 基准: 每 kg 合格甘蔗的调理能源
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 废物流

本过程与方向无此类流。

##### 基本流

本过程与方向无此类流。

#### 产出

##### 产品流

###### 农业田间交接的合格成熟甘蔗茎 (`accepted_sugarcane_stalks`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: Saccharum officinarum（甘蔗）`d56c6f6a-8f2e-4351-8362-18a710ac31f0`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- 绑定模式: `fixed`
- 数量规则: 恰好 1 kg 满足声明批次限定信息的合格成熟甘蔗茎
- 数值来源模式: 固定值 (`fixed_value`)
- 适用范围: 通用 (`generic`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 方法公式 (`method_formula`)
- 来源: `mass-balance-identity`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: 参考流恒等
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 方法公式 (`method_formula`)
  - 来源: `mass-balance-identity`

###### 具有预期用途的调理残体 (`conditioned_residue_coproduct`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 具有独立预期去向的分离蔗梢、叶片或蔗段
- 流属性/单位: Mass / kg
- 数量规则: 作为已声明共产品离开调理过程的称量质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源: `fao-cane-environment-1997`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.5
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的调理共产品
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 废物流

###### 不合格或拒收甘蔗 (`offspec_cane`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 受损、污染或其他被拒收甘蔗
- 流属性/单位: Mass / kg
- 数量规则: 称量拒收质量，并分配至返工、降级、回收或处置，且不得与合格产出重复
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源: `mass-balance-identity`
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.5
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的拒收甘蔗
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:

###### 移除土壤与非产品蔗叶杂物 (`removed_soil_and_trash`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 交接前移除的过量附着土壤及蔗叶杂物
- 流属性/单位: Mass / kg
- 数量规则: 称量或抽样移除物料，并记录其去向
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_lot`
- 来源:
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.5
  - 单位: kg
  - 基准: 每 kg 合格甘蔗移除的土壤与蔗叶杂物
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


##### 基本流

###### 调理粉尘排放至空气 (`conditioning_dust`)

按关联田块、作物期、收获事件或批次记录该流，并保留其状态与去向。

- 选定流: 按实测粒径级别报告的空气颗粒物
- 流属性/单位: Mass / kg
- 数量规则: 实测或计算无组织颗粒物质量，并保留粒径身份
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 1 kg 农业田间交接的合格成熟甘蔗茎
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_lot`
- 来源:
- 数量范围: 完整定量 QA 范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 0.01
  - 单位: kg
  - 基准: 每 kg 合格甘蔗的宽范围粉尘筛查值
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)
  - 来源:


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_period_series` | 新植蔗与宿根蔗 | 将各期特定投入直接归属。建植、长期整地及终止负荷按声明作物序列的实际合格产出摊销；不得采用通用宿根次数，也不得在各期重复分配共享负荷。 | `fao-sugarcane-water-2012` |
| `allocation_outputs` | 蔗茎与预期残体产出 | 列举每个独立预期产出及其交接。存在因果关系时采用有据物理关系，否则采用披露的经济分配。无预期产品状态的残体仍为残体或废物，默认不给予避免负荷抵扣。 | `mass-balance-identity` |
| `allocation_routes` | 田块批次与收获事件 | 将投入、产出、清洁、切换及共享机械作业关联到一个田块批次事件，并按实测作业时间、面积或吞吐量仅分配一次共享负荷。 | `mass-balance-identity` |
| `allocation_rework_reject` | 不合格甘蔗与返回物料 | 返工或降级甘蔗保留既有负荷，仅增加增量作业，并在其最终互斥去向仅计量一次；拒收物不得同时成为合格产出。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | raw_fields | 采集方法 | unit | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle` | `field_production` | 作物序列、土地、种植、立蔗、失败生物质与蔗蔸 | 田块登记；秤；调查 | field; crop_series; period; plant_or_ratoon; area; establishment; termination; input_mass; output_mass; moisture | 核对田块登记、收获称量和面积调查 | ha; kg; % | 每个事件与期间 | 完整声明作物序列 | 每个田块 | 保留逐期记录；共享负荷归属后才汇总合格产出 | 田块图；带日期登记；校准秤；作物序列关联 |
| `cp_field_inputs` | `field_production` | 养分与植保产品 | 票据；施用日志；分析 | field; period; product; amount; formulation; nutrient_analysis; date; treated_area | 核对票据和施用记录；每种产品仅保留一次 | kg; L; kg nutrient | 每次施用 | 每个新植或宿根期 | 每个田块 | 按实际产品和期间汇总；期间归属后归一化 | 票据；标签；分析；施用者日志 |
| `cp_irrigation` | `field_production` | 灌溉取水 | 仪表；泵日志 | source_compartment; delivered_volume; conveyance_boundary; field; period | 校准仪表或有据泵计算 | m3 | 每次灌溉 | 每个所代表期间 | 每个田块与水源 | 按水源与期间汇总到田水量 | 仪表校准；泵曲线；日志 |
| `cp_operation_energy` | `all` | 燃料与电力 | 票据；仪表；机械日志 | process; field_lot; period; route; carrier; amount; runtime; shared_operation | 将仪表或票据与机械小时核对 | L; kg; kWh; MJ | 每次作业 | 从建植至交接 | 每个田块批次与机械 | 按有据因子换算并仅一次分配共享使用 | 票据；仪表校准；小时日志 |
| `cp_field_emissions` | `field_production` | 管理土壤与氮损失 | 计算记录 | N_by_source; residue_N; lime; urea; field_conditions; tier; factors; compartments | 对采集田间投入应用声明的现行方法 | kg N; kg emission | 每个期间 | 每个新植或宿根期 | 每个田块 | 汇总前逐田块期间计算 | 方法版本；因子溯源；计算表 |
| `cp_harvest_lot` | `harvest` | 蔗茎、损失、技术与预烧状态 | 秤；收获机监测器；抽样日志 | field_lot; date; manual_or_mechanical; green_or_burnt; standing_mass; collected_mass; loss_mass; moisture; damage | 称量收集甘蔗，并采用代表性前后对比或田间损失抽样 | kg; % | 每个田块批次事件 | 每个收获期 | 每个田块批次 | 水分对齐并闭合投入与产出 | 秤校准；抽样方案；路线声明 |
| `cp_residue_routes` | `harvest` | 蔗梢、蔗叶、焚烧与蔗蔸 | 样方；秤；路线日志 | field_lot; fraction; wet_mass; dry_matter; N_content; retained; removed; burned; intended_use; disposal; stubble_area | 代表性抽样与互斥去向核对 | kg; kg dry matter; ha | each harvest event | 每个收获期 | 每个田块批次 | 将每个份额恰分配至一个去向 | 抽样方案；实验室结果；去向凭证；焚烧记录 |
| `cp_conditioning_lot` | `field_conditioning` | 入口、合格蔗茎、共产品、拒收物、移除物与粉尘 | 秤；批次日志；样品 | lot; pass; inlet_mass; accepted_mass; coproduct_mass; reject_mass; removed_mass; moisture; destination; dust_measurement | 称量每个入口与出口；抽样水分和杂质 | kg; % | 每个批次与遍次 | 从收获至田间交接 | 每个批次 | 汇总各遍次且不重复返回物料；水分对齐质量平衡 | 秤校准；批次身份；验收记录；去向证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_period_attribution` | 共享建植与终止 | 分配至期别的负荷 = 共享负荷 × 该期合格质量 / 声明序列合格总质量；仅在有据时采用其他因果关系 | shared burdens; accepted mass by period | period-attributed burden | `fao-sugarcane-water-2012` |
| `calc_mass_closure` | 收获与调理 | 水分对齐投入 = 合格产出 + 预期产出 + 留存物料 + 损失 + 拒收物 + 其他离开量 ± 实测库存变化 | all inlet and outlet masses; moisture | mass-closure residual | `mass-balance-identity` |
| `calc_residue_exclusivity` | 蔗梢、蔗叶与蔗蔸 | 抽样残体总量 = 留田 + 预期移除 + 焚烧 + 回收/处置 + 蔗蔸类别，各份额互斥 | residue dry matter; destinations; N content | residue mass and N by route | `ipcc-managed-soils-2019` |
| `calc_soil_emissions` | 管理土壤排放 | 对采集的养分产品、作物残体路线、石灰、尿素和场地条件应用声明的现行 IPCC 或获接受区域层级；保留气体及环境区室身份 | field input and residue records; factors | species-specific emissions | `ipcc-managed-soils-2019` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 保留平台 UUID、物种或杂交种、农业田间交接、成熟度、水分、预烧状态、收获方式及验收条件。 | flow record; lot acceptance |
| `dq_periods` | crop series | 覆盖建植、每个纳入宿根期、最终终止及每次合格收获；识别缺失或不完整期间。 | field register; crop-series reconciliation |
| `dq_routes` | harvest and residues | 要求互斥的绿色/预烧状态，以及具质量与干物质证据的残体互斥去向。 | harvest log; sampling; destination records |
| `dq_completeness` | all processes | 报告初级数据覆盖、缺失数据、暂定估算、秤与仪表校准、质量闭合及 Range 例外。 | coverage table; calibration; QA report |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求声明的产品、质量属性和质量单位组 UUID、1 kg 数量及全部必需限定信息；拒绝将其解释为蔗糖或加工糖。 |  |
| `validate_period_series` | 新植与宿根期 | 要求作物序列与期间标识、建植与终止边界、逐期合格产出及每项共享负荷的一次披露归属；阻止缺失或重复归属期间。 | `fao-sugarcane-water-2012` |
| `validate_route_delta` | 收获替代路线 | 每个事件要求收获母活动、人工/机械状态及绿色/预烧状态恰选其一，并为改变的投入、排放、损失、残体和蔗蔸要求提供当前证据。 | `sra-harvest-manual-2014`; `fao-cane-environment-1997` |
| `validate_nutrient_cardinality` | 每个过程 | 每个过程至多允许一张合并矿质肥、有机肥、石灰及含养分改良剂的产品投入卡；该卡仅绑定无 group 的 flow-set.agricultural-nutrient-supply 版本 0.3.0。禁止独立 N、P、K、粪肥、堆肥、石灰或改良剂卡。 |  |
| `validate_output_routes` | 蔗茎、残体、蔗蔸、损失与拒收物 | 每种状态须有一个互斥交接或去向，每个独立预期产出须作出明确分配决定；防止同一残体或甘蔗占据两个状态。 | `ipcc-managed-soils-2019`; `mass-balance-identity` |
| `validate_rework` | 不合格物料 | 将每种拒收状态关联至返工、降级、回收或处置；保留既有负荷，仅一次增加增量作业，并在解决前从合格产出中排除。 | `mass-balance-identity` |
| `validate_runs` | 田块批次、事件与遍次 | 将投入、产出、清洁、切换和共享作业关联到一个期间、事件或遍次，并仅一次归属共享负荷。 | `mass-balance-identity` |
| `validate_ranges` | 全部流卡 | 每张定量流卡恰好要求一条完整数量范围，包括下限、上限、单位、基准、基准类型、证据类型及来源字段，并在英文、中文和结构化输出中对齐。 | `mass-balance-identity` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 农业田间交接的合格成熟收获甘蔗茎前景生产数据集 |
| downstream_use | secondary_dataset；经代表性审查后可作 background_dataset |
| allowed_use | 需要声明农业田间交接鲜成熟甘蔗茎的 LCA 与足迹研究 |
| excluded_use | 蔗糖、加工糖、蔗汁、糖浆、糖蜜、乙醇、蔗渣、种蔗、田间后运输或未披露的工厂加工 |
| required_metadata | 地理；作物年份；田块与作物序列标识；新植/宿根期；物种或杂交种；建植与终止；灌溉；管理；绿色/预烧及人工/机械收获；水分；验收；残体；蔗蔸；产出去向；分配 |
| required_quality_disclosure | 逐期初级数据覆盖；校准；抽样；缺失数据；暂定范围；路线证据；水分对齐质量闭合；因子版本；期间及产出归属；Range 例外 |
| update_trigger | 平台身份、田间交接、作物序列设计、新植/宿根组合、建植、灌溉、养分 Flow Set、收获/预烧技术、调理、残体去向、产出状态、分配或排放方法发生实质变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sugarcane-water-2012` | `official_guidance` | FAO, Crop yield response to water, Chapter 3.4 Herbaceous crops, https://www.fao.org/4/i2800e/i2800e07.pdf | 新植蔗、宿根蔗、作物期、收获路线、蔗茎状态及田间生产边界 |
| `fao-cane-environment-1997` | `official_guidance` | FAO, Cane, sugar and the environment, https://www.fao.org/4/x4988e/x4988e01.htm | 绿色收获、预烧区分及残体去向 |
| `sra-harvest-manual-2014` | `extension_guidance` | Sugar Research Australia, Harvesting Best Practice Manual, https://sugarresearch.com.au/wp-content/uploads/2017/02/Harvesting-Best-Practice-Manual-FINAL-LR.pdf | 人工/机械作业记录、绿色/预烧路线差异、损失、蔗叶、质量及宿根影响 |
| `sra-weed-manual-2021` | `extension_guidance` | Sugar Research Australia, Weed Management Manual, https://sugarresearch.com.au/wp-content/uploads/2024/08/Weed-Management-Manual_2021_Web_F.pdf | 新植/宿根杂草管理路线及植保记录要求 |
| `ipcc-managed-soils-2019` | `method_factor` | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤排放；肥料、石灰、尿素及互斥残体路线计算 |
| `mass-balance-identity` | `method_factor` | 质量守恒与单次计量恒等式 | 过程关联、闭合、共产品、期间及返工校验 |
