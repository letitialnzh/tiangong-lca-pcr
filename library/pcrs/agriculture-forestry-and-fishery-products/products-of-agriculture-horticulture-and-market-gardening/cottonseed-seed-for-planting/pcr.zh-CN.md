---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cottonseed-seed-for-planting
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 播种用棉籽

## 1. 范围与适用性

本规则适用于管理栽培的棉花种子田产出的、在声明农场门交接点已清洁且具有播种活力的种子级棉籽。实体路线涵盖种植、籽棉采收、轧花分离、种子调制、等级筛选，以及实际发生的交付前稳定化或种子处理。即使轧花或调制由场外承包，只要发生于声明交接前，仍纳入本产品系统；不能仅凭地点标签截断供应链。本规则描述生产组合，但汇总前须保留农场、轧花厂和调制批次的追溯。不得以棉纤维、压榨用棉籽或棉油、棉粕的数据集替代参考产品。[来源：`unsd-cpc-01431`、`usda-aphis-cotton-seed-2012`、`usda-ars-ginning-2015`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cottonseed-seed-for-planting |
| classification_refs | CPC 3.0 01431（仅作映射背景） |
| covered_products | 供播种、清洁且经质量分级的活棉籽；声明品种和处理状态。 |
| excluded_products | 棉纤维；用于压榨、制油或饲料的棉籽；棉油和棉粕；轧花前的籽棉；没有播种等级证据的种子。 |
| representative_product | 种子繁殖用棉花种植后取得的清洁播种用棉籽。 |
| production_route | 管理栽培种子田→籽棉采收→轧花分离→可选机械或酸脱绒→种子清洁分级→可选稳定化/处理→合格种子交接。灌溉与雨养是栽培替代路线；机械与酸脱绒是调制替代路线。只有市场规格接受时才可声明不脱绒。 |
| market_state | 声明农场门交易点的清洁、有活力、种子级棉籽；披露包装和处理状态。 |

灌溉路线在管理栽培父活动中增加计量的灌溉水和抽水能耗；雨养路线没有灌溉工序。两路线可在生产组合中并存，但须保留独立田块记录。酸脱绒在材料处理父活动中增加试剂、中和、废液和通风记录；机械脱绒记录机械能耗和去除的短绒。逐批选择实际路线，不可叠加互斥的脱绒路径。[来源：`usda-aphis-cotton-seed-2012`、`usda-ams-nop-5029`、`usda-ams-acid-delinting`]

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 经栽培和调制、供播种的合格棉籽 |
| How much | 1 kg 合格种子的净质量 |
| How well | 声明品种、种子等级、纯度/发芽率证据、水分、脱绒和处理状态 |
| How long or cycle | 一个已识别的棉花生长季及其关联调制批次 |
| reference_flow_link | `seed_release` 的合格输出；拒收和非播种用种不计入参考质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Cottonseed, seed for planting `5ec327e3-1046-4478-9010-0733b798aa56` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种/种子级别；地理位置/季节；纯度和发芽率检测；水分；脱绒路线；种子处理状态；生产和调制场址；交接所有权 |
| 绑定模式 | `fixed` |

已核实的平台流指农场门的清洁种子级生产组合。前景数据包须说明农场与承包轧花/调制厂的空间差异，并计入交接前服务。本规则不预设通用纯度、发芽率或水分数值；应报告适用种子标准和实测批次结果。[来源：`usda-aphis-cotton-seed-2012`]

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格参考种子 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用合格种子净质量；扣除包装、残留绒/杂质和拒收种子。 |
| `mass_reconciliation` | 采收、轧花和调制 | Mass | kg | 记录收货态质量和水分；在可比水分基准下比较全部进出物料状态。 |
| `input_consistency` | 试剂、肥料、棉纤维和拒收种子 | Mass | kg | 归一化前把供应商数量换算到相同的记录质量基准；不可从通用轧花比率推测种子产量。 |
| `energy_consistency` | 机械、轧花和调制能耗 | 已声明能源属性 | kWh 或 MJ | 燃料与电力分开保留；单位变化时声明换算系数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 有明确播种材料来源、管理期和土地历史的棉花栽培田。 |
| starting_condition_role | 前景管理型生物生产，随后分别追踪采收和调制物料状态。 |
| product_classification_scope | 仅最终合格交接点的播种级棉籽；籽棉及轧花产物仍是中间物或共产品。 |
| recursive_input_rule | 建立下一茬棉花所购的播种用种作为投入，使用其自身上游数据集；不可由本前景批次递归生成。 |
| upstream_dataset_requirement | 为外购播种材料、肥料、植保品、燃料、电力、水服务、脱绒试剂及重要的承包调制服务关联供应方数据集。 |
| disclosure | 声明农场/轧花/调制场址、交接前服务所有权、生长季、灌溉、采收和轧花方式、脱绒及处理路线、拒收物和全部有意销售输出。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `full_pre_gate_chain` | 参考产品 | 计入种植投入、田间作业、采收、运送至轧花/调制、轧花、清洁、分级、条件性脱绒/稳定化/处理及关联废物处理，直至合格种子交接；场外承包也须计入。 | `usda-aphis-cotton-seed-2012`; `usda-ars-ginning-2015` |
| `separate_output_states` | 轧花及调制 | 按实际去向分别记录棉纤维、播种用种、非播种用种、短绒、轧花杂物、残余物和废物；拒收质量不得计入合格种子。 | `usda-ars-ginning-2015`; `usda-ams-acid-delinting` |
| `route_condition` | 脱绒 | 酸脱绒为条件工序；实际使用时记录酸、水、中和剂、废液及去除的绒。机械路线记录能耗和去除物。不编造酸化学路径、转化效率或通用产率。 | `usda-ams-nop-5029`; `usda-ams-acid-delinting` |
| `field_emissions` | 管理土壤 | 依据记录的氮来源和声明的地区方法计算直接及间接 N2O；没有记录因子时不赋予通用排放量。 | `ipcc-2019-soils-ch11` |
| `post_gate_exclusion` | 合格种子 | 排除声明交接后的配送、所售种子的播种、棉油加工、压榨及后续作物生产。 | `unsd-cpc-01431` |
| `shared_asset_boundary` | 共享轧花及调制资产 | 轧花计量、种子清洁机或通风设备等共享资产，按实际使用它的田块/批次节点和服务时段归属；计量或机时依据只登记一次。 | `usda-ars-ginning-2015` |
| `reporting_period` | 生产组合 | 单一期间覆盖已识别的生长季及关联调制期。若实际发生库存跨期结转或多年贮存，应先作为独立情形采集和披露，再行汇总。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_management` | 棉花种子田管理 | 必需 | 所有种子作物；灌溉子路线仅在实际使用时 | 管理型生物生产；管理土壤投入和采前在田作物 | 面积、季节及投入台账 |
| `seed_cotton_harvest` | 籽棉采收 | 必需 | 独立采收工序和田块至轧花批次 | 从田间生长中取得籽棉；记录田间损失 | 采收 kg 与田块面积 |
| `gin_separation` | 轧花及初级调制 | 必需 | 交接前农场自营或承包轧花厂 | 分离棉纤维与带绒棉籽；移除杂物 | 籽棉投入、棉纤维、带绒棉籽、杂物 |
| `seed_delinting` | 种子脱绒/材料处理 | 条件性 | 机械、酸或有依据的不脱绒路线 | 去除剩余绒；仅酸路线设化学反应子节点 | 带绒与脱绒种子、试剂和残余物 |
| `seed_grading` | 清洁与分级 | 必需 | 种子等级筛选 | 分离合格、返工、降级种子和废物 | 投入及各等级输出质量 |
| `seed_stabilization` | 水分稳定化与可选处理 | 条件性 | 交接前实际发生的干燥、冷却、贮存或处理 | 保持种子活力；记录处理材料 | 进出种子、能耗和处理记录 |
| `seed_release` | 合格种子交接 | 必需 | 检验和处置决定后 | 声明放行种子质量与最终市场状态 | 合格净重 kg 与检验结果 |

轧花厂可处理多农场物料，调制厂也可处理多批次。批次生产须保留种子批次、作业批次或连续时段边界、换线及共享计量时段；轧花计量和调制设备等共享资产/服务仅归属使用批次一次。该作物及其关联调制期构成单一期间，不预设库存跨期结转。[来源：`usda-ars-ginning-2015`、`usda-ams-acid-delinting`]

### 过程：棉花种子田管理（`crop_management`）

#### 输入

##### 产品流

###### 播种用种（`planting_seed_input`）

记录种子田播入的外购种子质量并关联其独立上游数据集。

- 选定流：Cotton planting seed
- 流属性/单位：Mass / kg
- 数量规则：记录种子田播入的外购种子质量并关联其独立上游数据集。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：usda-aphis-cotton-seed-2012
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/ha
  - 基准：按 seed planted per cultivated hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`usda-aphis-cotton-seed-2012`
- 数量范围：暂定肥料产品 QA 筛选范围
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：50000
  - 单位：kg/ha
  - 基准：每公顷分别记录的肥料和粪肥产品质量总和；仅用于筛查，不是默认值、强制限值或实测记录替代值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 植保产品（`field_crop_protection_products`）

逐项记录每种植保产品的配方、有效成分含量、施用时间和田块。

- 选定流：具名植保产品
- 流属性/单位：产品质量 / 视情况采用 kg 产品和 kg 有效成分
- 数量规则：记录每种实际产品、配方、用量、施用时间和田块，并分别保留产品质量和有效成分质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：`usda-aphis-cotton-seed-2012`
- 数量范围：暂定植保产品 QA 筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50000
  - 单位：kg/ha
  - 基准：每公顷分别记录的植保产品质量总和；仅用于筛查，不是默认值、强制限值或实测记录替代值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water`）

灌溉田记录取水或供水量及抽水服务；雨养田声明无灌溉。

- 选定流：Irrigation water
- 流属性/单位：已声明流属性 / m3
- 绑定模式：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合分组：`irrigation-water`
- 数量规则：灌溉田记录取水或供水量及抽水服务；雨养田声明无灌溉。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_inputs`
- 来源：usda-aphis-cotton-seed-2012
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：m3/ha
  - 基准：按 withdrawn or delivered irrigation water per cultivated hectare; conditional route 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 在田籽棉（`standing_seed_cotton`）

把可采籽棉作为栽培节点向独立采收节点的交接状态计量，或由采收记录核对。

- 选定流：Standing seed cotton
- 流属性/单位：Mass / kg
- 数量规则：把可采籽棉作为栽培节点向独立采收节点的交接状态计量，或由采收记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：usda-aphis-cotton-seed-2012
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg/ha
  - 基准：按 harvestable seed cotton per cultivated hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 管理土壤氧化亚氮（`soil_n2o`）

按记录的氮投入和已声明的地区方法计算田间直接 N2O；间接 N2O 如建模应分列。

- 选定流：Dinitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：按记录的氮投入和已声明的地区方法计算田间直接 N2O；间接 N2O 如建模应分列。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_soil_emissions`
- 来源：ipcc-2019-soils-ch11
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/ha
  - 基准：按 calculated direct soil N2O per cultivated hectare; retain factor-method audit 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：籽棉采收（`seed_cotton_harvest`）

#### 输入

##### 产品流

###### 采收能耗（`harvest_energy`）

按田块和采收事件记录实际摘棉或拔棉路线的燃料或电力。

- 选定流：Harvest fuel or electricity
- 流属性/单位：已声明流属性 / MJ
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：按田块和采收事件记录实际摘棉或拔棉路线的燃料或电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：usda-aphis-cotton-seed-2012
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：MJ/ha
  - 基准：按 measured harvest fuel and electricity converted to energy per harvested hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收集的籽棉（`collected_seed_cotton`）

在田块出口称量收集的籽棉；关联轧花入料批次，不能作为最终播种用种计量。

- 选定流：Seed cotton, as harvested
- 流属性/单位：Mass / kg
- 数量规则：在田块出口称量收集的籽棉；关联轧花入料批次，不能作为最终播种用种计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：usda-ars-ginning-2015
- 数量范围：来源支持的场景性典型区间
  - 范围角色：典型范围（`typical_range`）
  - 下限：1128
  - 上限：6002
  - 单位：kg/ha
  - 基准：已发表田间研究籽棉产量的最小值与最大值；仅对应所研究地区、品种和年度，并非通用产量限值。
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`usda-ars-cotton-yield-2004`

##### 废物流

###### 田间残留和损失（`field_residue_loss`）

分别记录未收集籽棉和移出的废物；留田残余物属于土壤归还投入，不应视为跨边界废物；说明去向。

- 选定流：Cotton field residues and harvest loss
- 流属性/单位：Mass / kg
- 数量规则：分别记录未收集籽棉和移出的废物；留田残余物属于土壤归还投入，不应视为跨边界废物；说明去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`
- 来源：usda-aphis-cotton-seed-2012
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：20000
  - 单位：kg/ha
  - 基准：按 measured uncollected seed cotton and removed residues per harvested hectare 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：轧花及初级调制（`gin_separation`）

#### 输入

##### 产品流

###### 采收籽棉入料（`gin_seed_cotton_input`）

记录轧花入料的籽棉批次质量和水分，包括承包场址转运。

- 选定流：Seed cotton, as harvested
- 流属性/单位：Mass / kg
- 数量规则：记录轧花入料的籽棉批次质量和水分，包括承包场址转运。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gin_balance`
- 来源：usda-ars-ginning-2015
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg reference seed
  - 基准：按 gin intake per kilogram final accepted planting seed 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 轧花电力和燃料（`gin_energy`）

记录轧花厂实测能耗，并把共享计量时段归入已追踪的籽棉作业。

- 选定流：Gin electricity or fuel
- 流属性/单位：已声明流属性 / MJ
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：记录轧花厂实测能耗，并把共享计量时段归入已追踪的籽棉作业。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared_services`
- 来源：usda-ars-ginning-2015
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg gin intake
  - 基准：按 fuel and electricity converted to energy per kilogram seed cotton entering gin 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 轧出棉纤维（`gin_lint_output`）

称量轧花交接点可销售棉纤维；其为有意共产品，与播种种子分列。

- 选定流：Cotton lint
- 流属性/单位：Mass / kg
- 数量规则：称量轧花交接点可销售棉纤维；其为有意共产品，与播种种子分列。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gin_balance`
- 来源：usda-ars-ginning-2015
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg dry/kg dry gin intake
  - 基准：按 dry lint per kilogram dry seed cotton entering gin 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

###### 有意产出的带绒棉籽（`gin_fuzzy_seed`）

逐批称量调制前分离的带绒棉籽；区分播种候选与非播种去向。

- 选定流：Cottonseed, fuzzy after ginning
- 流属性/单位：Mass / kg
- 数量规则：逐批称量调制前分离的带绒棉籽；区分播种候选与非播种去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gin_balance`
- 来源：usda-ars-ginning-2015
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg dry/kg dry gin intake
  - 基准：按 dry fuzzy seed per kilogram dry seed cotton entering gin 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 废物流

###### 轧花杂物（`gin_trash`）

计量杂物，并依据记录的去向分类为已售副产品、回收物或处置废物。

- 选定流：Gin trash
- 流属性/单位：Mass / kg
- 数量规则：计量杂物，并依据记录的去向分类为已售副产品、回收物或处置废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gin_balance`
- 来源：usda-ars-ginning-2015
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg dry/kg dry gin intake
  - 基准：按 dry trash per kilogram dry seed cotton entering gin 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 基本流

### 过程：种子脱绒与材料处理（`seed_delinting`）

#### 输入

##### 产品流

###### 脱绒用带绒种子（`fuzzy_seed_for_delint`）

追踪进入实际机械或酸脱绒作业的轧花批次；有依据的不脱绒路线绕过本节点。

- 选定流：Cottonseed, fuzzy after ginning
- 流属性/单位：Mass / kg
- 数量规则：追踪进入实际机械或酸脱绒作业的轧花批次；有依据的不脱绒路线绕过本节点。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delint_balance`
- 来源：usda-ams-acid-delinting
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg fuzzy seed available
  - 基准：按 fuzzy seed routed to delinting per kilogram fuzzy seed separated 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

###### 脱绒酸投入（`delint_acid`）

酸法路线逐作业记录脱绒酸的实际身份、浓度和质量。

- 选定流：脱绒酸
- 流属性/单位：质量 / kg
- 数量规则：逐作业记录该产品实际用量；不指定通用剂量或反应产率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delint_balance`
- 来源：`usda-ams-nop-5029`; `usda-ams-acid-delinting`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg treated fuzzy seed
  - 基准：酸法路线每 kg 处理毛棉籽的脱绒酸产品质量；仅作宽幅筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`usda-ams-nop-5029`; `usda-ams-acid-delinting`

###### 脱绒工艺水（`delint_process_water`）

酸法路线逐作业单独记录外供工艺水；回用水按内部流单列，不重复计量。

- 选定流：脱绒工艺水
- 流属性/单位：质量 / kg
- 绑定模式：`parameterized`
- 流集合：`flow-set.water-use`
- 流集合版本：`0.2.0`
- 流集合分组：`process-water`
- 数量规则：逐作业记录该产品实际用量；不指定通用剂量或反应产率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delint_balance`
- 来源：`usda-ams-nop-5029`; `usda-ams-acid-delinting`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg treated fuzzy seed
  - 基准：酸法路线每 kg 处理毛棉籽的外供工艺水质量；仅作宽幅筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`usda-ams-nop-5029`; `usda-ams-acid-delinting`

###### 脱绒中和剂投入（`delint_neutralizer`）

酸法路线逐作业记录实际中和剂身份、浓度和质量。

- 选定流：脱绒中和剂
- 流属性/单位：质量 / kg
- 数量规则：逐作业记录该产品实际用量；不指定通用剂量或反应产率。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delint_balance`
- 来源：`usda-ams-nop-5029`; `usda-ams-acid-delinting`
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg treated fuzzy seed
  - 基准：酸法路线每 kg 处理毛棉籽的中和剂产品质量；仅作宽幅筛查
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）
  - 来源：`usda-ams-nop-5029`; `usda-ams-acid-delinting`

###### 脱绒能耗（`delint_energy`）

按路线和作业记录机械或酸脱绒设备能耗，包含实际使用的干燥和通风。

- 选定流：Delinting energy
- 流属性/单位：已声明流属性 / MJ
- 绑定模式：`parameterized`
- 流集合：`flow-set.energy-supply`
- 流集合版本：`0.2.0`
- 数量规则：按路线和作业记录机械或酸脱绒设备能耗，包含实际使用的干燥和通风。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_shared_services`
- 来源：usda-ams-acid-delinting
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg treated fuzzy seed
  - 基准：按 delinting energy per kilogram fuzzy seed treated 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 脱绒种子（`delinted_seed`）

称量处理后的种子并交给分级；若使用酸路线，记录残酸及中和状态。

- 选定流：Cottonseed, delinted
- 流属性/单位：Mass / kg
- 数量规则：称量处理后的种子并交给分级；若使用酸路线，记录残酸及中和状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delint_balance`
- 来源：usda-ams-acid-delinting
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg treated fuzzy seed
  - 基准：按 post-treatment seed per kilogram fuzzy seed entering treatment 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 去除的短绒（`removed_linters`）

计量去除的短绒；依其清洁/污染状态和实际去向分类为销售、回收或废物。

- 选定流：Cotton linters
- 流属性/单位：Mass / kg
- 数量规则：计量去除的短绒；依其清洁/污染状态和实际去向分类为销售、回收或废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delint_balance`
- 来源：usda-ams-acid-delinting
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg dry/kg dry fuzzy seed
  - 基准：按 dry removed linters per kilogram dry fuzzy seed treated 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 废物流

###### 酸性废液及污染残余物（`acid_residue`）

酸路线按实际去向记录已反应的绒、过量或未反应酸液、中和产物、粉尘与废水；回流试剂留在节点内，未处理残余物不是产品。

- 选定流：Acid delinting effluent and residue
- 流属性/单位：Mass / kg
- 数量规则：酸路线按实际去向记录已反应的绒、过量或未反应酸液、中和产物、粉尘与废水；回流试剂留在节点内，未处理残余物不是产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delint_balance`
- 来源：usda-ams-acid-delinting
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg treated fuzzy seed
  - 基准：按 acid-route effluent and contaminated residues per kilogram fuzzy seed treated; route conditional 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：种子清洁与分级（`seed_grading`）

#### 输入

##### 产品流

###### 分级入料种子（`grading_input`）

记录来自脱绒或有依据旁路的入料批次质量和状态。

- 选定流：Cottonseed entering grading
- 流属性/单位：Mass / kg
- 数量规则：记录来自脱绒或有依据旁路的入料批次质量和状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_balance`
- 来源：usda-ams-acid-delinting
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg reference seed
  - 基准：按 seed entering grading per kilogram final accepted planting seed 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格等级种子（`accepted_grade`）

称量满足声明纯度与活力规格的种子，交至稳定化或放行。

- 选定流：Cottonseed, planting grade
- 流属性/单位：Mass / kg
- 数量规则：称量满足声明纯度与活力规格的种子，交至稳定化或放行。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_balance`
- 来源：usda-aphis-cotton-seed-2012
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading input
  - 基准：按 accepted grade per kilogram seed entering grading 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

###### 返工及降级种子（`rework_downgrade`）

区分再清洁返工环路、作为非播种用种销售和回收去向；复检前不得计入合格量。

- 选定流：Cottonseed, off-grade
- 流属性/单位：Mass / kg
- 数量规则：区分再清洁返工环路、作为非播种用种销售和回收去向；复检前不得计入合格量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_balance`
- 来源：usda-ams-acid-delinting
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading input
  - 基准：按 rework and downgraded lot per kilogram seed entering grading; count once 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 废物流

###### 分选拒收物（`sorting_reject`）

记录废物及处置；可供其他用途的降级活种须分列。

- 选定流：Seed cleaning rejects
- 流属性/单位：Mass / kg
- 数量规则：记录废物及处置；可供其他用途的降级活种须分列。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grade_balance`
- 来源：usda-ams-acid-delinting
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg grading input
  - 基准：按 rejected material per kilogram seed entering grading 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 基本流

### 过程：种子稳定化与可选处理（`seed_stabilization`）

#### 输入

##### 产品流

###### 稳定化前种子（`seed_pre_stabilize`）

记录实际干燥、冷却、储存或处理前的批次状态和水分。

- 选定流：Planting-grade cottonseed before stabilization
- 流属性/单位：Mass / kg
- 数量规则：记录实际干燥、冷却、储存或处理前的批次状态和水分。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization`
- 来源：usda-aphis-cotton-seed-2012
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg reference seed
  - 基准：按 seed entering stabilization per kilogram final accepted planting seed 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 处理材料及服务（`seed_treatment_input`）

若实际施用，逐批记录各处理制剂、用量和服务；未处理批次应明确标注。

- 选定流：Declared seed-treatment products
- 流属性/单位：Mass / kg
- 数量规则：若实际施用，逐批记录各处理制剂、用量和服务；未处理批次应明确标注。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization`
- 来源：usda-ams-nop-5029
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg treated seed
  - 基准：按 treatment formulations per kilogram treated seed; conditional route and separate products 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 稳定化种子（`stabilized_seed`）

记录干预后种子质量及实测水分/发芽率，交给放行检验。

- 选定流：Planting-grade stabilized cottonseed
- 流属性/单位：Mass / kg
- 数量规则：记录干预后种子质量及实测水分/发芽率，交给放行检验。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization`
- 来源：usda-aphis-cotton-seed-2012
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg seed before treatment
  - 基准：按 seed after stabilization per kilogram input seed; allow added treatment mass 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 贮存或处理损失（`stabilization_loss`）

记录受损或失活种子及处理残余物的实际处置或降级路径。

- 选定流：Off-grade seed and treatment residue
- 流属性/单位：Mass / kg
- 数量规则：记录受损或失活种子及处理残余物的实际处置或降级路径。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_stabilization`
- 来源：usda-ams-nop-5029
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg seed before treatment
  - 基准：按 damaged or lost seed per kilogram input seed 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 基本流

### 过程：合格播种用种放行（`seed_release`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行播种用种（`reference_seed_output`）

在最终交接点称量合格种子净质量，并关联批次质量和路线证据。

- 选定流：Cottonseed, seed for planting `5ec327e3-1046-4478-9010-0733b798aa56`
- 流属性/单位：Mass / kg
- 数量规则：在最终交接点称量合格种子净质量，并关联批次质量和路线证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：usda-aphis-cotton-seed-2012
- 数量范围：参考产出恒等式
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference seed
  - 基准：净合格产出等于所声明的 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 废物流

###### 放行失败批次（`failed_release`）

根据记录路径返工、降级或处置放行失败批次；不计入参考质量。

- 选定流：Cottonseed failing release
- 流属性/单位：Mass / kg
- 数量规则：根据记录路径返工、降级或处置放行失败批次；不计入参考质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格播种用棉籽
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：usda-aphis-cotton-seed-2012
- 数量范围：临时 QA 宽区间；超界须核查，不能替代实测值
  - 范围角色：QA 筛查界限（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg release-lot input
  - 基准：按 failed seed per kilogram lot entering release 及所列单位作宽区间筛查；逐批使用实测与计算记录，超界须说明；该值不是默认值或合规限值
  - 基准类型：过程产出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`iso-14044-lci`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `joint_gin_output` | 轧花分离 | 有独立计量和质量记录时先分开实体子工序。对无法分开的棉纤维与带绒棉籽联合轧花负担，按批次有意销售输出的干质量分配，并展示质量和份额。轧花杂物只有在有记录证明为有意销售产品时才取得份额；处置废物不取得份额。由于纤维与种子的经济功能不同，有价格资料时另给经济分配敏感性结果。 | `usda-ars-ginning-2015` |
| `seed_grade_attr` | 分级和调制 | 分别列示播种用种、可销售非播种棉籽及可销售短绒。不能分开的共同调制负担按可销售输出实测干质量分配；脱绒、分级、返工和处理负担直接归属实际接受作业的批次。披露可销售输出集合和份额。 | `usda-ams-acid-delinting` |
| `reject_loop` | 分级、稳定化和放行 | 返工物料及重复能耗始终关联原生产批次，直至最终处置。失败批次转为非播种用种时属降级共产品；处置物为废物，不取得输出分配。返回批次不得两次计入合格种子。 | `usda-ams-acid-delinting` |
| `shared_service` | 农场、轧花与调制 | 将共享机械、轧花计量、通风、建筑和清洗归于有记录的使用田块/批次及时段；优先用实测机时或能耗，仅在工况可比时以处理量分摊。每项共享负担仅归属一次。 | `usda-ars-ginning-2015` |
| `production_mix` | 灌溉/雨养田块及调制路线 | 先按各路线合格种子质量分别计算，再仅按合格种子质量加权最终结果。清单披露中保持互斥的脱绒路线与处理状态分列。 | `usda-aphis-cotton-seed-2012`; `usda-ams-nop-5029` |

干质量规则是本 PCR 对共同物料分离服务作出的归属决定，须明确披露，并非声称质量与经济功能等同。记录收货水分及换算基准。输出所有权或计量不完整时，将分配标为无法判定，不得把全部轧花负担归于种子。[来源：`usda-ars-ginning-2015`、`usda-ams-acid-delinting`]

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `crop_management` | 播种、肥料、植保、灌溉和田间燃料 | 田间台账和发票 | 田块、季节、播种 kg、产品及养分 kg、施用日、灌溉 m3、抽水能耗、面积 | 供应记录、仪表和施用日志 | kg、m3、MJ、ha | 每次施用 | 一个生长季 | 每个种子田 | 逐田汇总；共享作业按实测面积或机时分摊 | 带日期发票、校准及水表证据 |
| `cp_soil_emissions` | `crop_management` | 管理土壤氮投入及排放 | 计算工作表 | 矿物和有机氮 kg、残茬氮、土壤/地区、排放因子、灌溉状态 | 田间氮台账及已声明 IPCC/国家方法 | kg N 和 kg N2O | 每季 | 一个生长季 | 每个种子田 | 直接与间接路径分算；N2O-N 只换算一次 | 因子来源、假设和工作表 |
| `cp_harvest` | `seed_cotton_harvest` | 籽棉采收、损失和能耗 | 采收日志 | 田块、日期、采收籽棉 kg、水分、损失估计、残茬去向、燃料/能耗 | 地磅、采收日志和田间检查 | kg、MJ | 每次采收 | 一个生长季 | 每个种子田 | 汇总匹配采收批次并核对轧花入料 | 称重单及燃料记录 |
| `cp_gin_balance` | `gin_separation` | 籽棉、棉纤维、带绒种子和杂物 | 轧花作业台账 | 批次/作业号、来源田块、入料 kg/水分、纤维 kg、带绒种子 kg、杂物 kg、去向 | 轧花称重及销售/转移凭证 | kg | 每次轧花作业 | 关联采收及调制期 | 每厂每批 | 逐作业做质量平衡后汇总可追溯批次 | 秤校准和销售记录 |
| `cp_delint_balance` | `seed_delinting` | 脱绒路线、试剂和残余物 | 调制批次台账 | 批次/作业号、机械/酸/旁路、入料带绒种子 kg、酸/水/中和剂 kg、脱绒种子 kg、短绒 kg、废液/废物 kg | 批次计量、化学品库存及废物联单 | kg | 每次调制作业 | 关联种子批次 | 每厂每批 | 核对进出物料和试剂的干基等量 | 化学品发票、计量及废物记录 |
| `cp_shared_services` | `gin_separation` | 共享能耗、清洗和设施 | 服务计量日志 | 计量时段、kWh/燃料、机时、活动作业号、换线/清洗、建筑使用 | 公用事业计量和维护记录 | kWh、MJ、h | 每作业或计量时段 | 关联调制期 | 轧花和调制场址 | 按能耗或机时把每项共享服务仅归属一次 | 计量日志与分摊表 |
| `cp_grade_balance` | `seed_grading` | 合格、返工、降级和废物状态 | 分级台账 | 批次、入料 kg、纯度、发芽率、合格 kg、返工 kg、非播种 kg、废物 kg、去向 | 称重、实验室报告和处置日志 | kg、% | 每批每次返工 | 调制期 | 每个调制场址 | 追踪重复处理和最终去向；合格质量不重复 | 实验室证明和称重记录 |
| `cp_stabilization` | `seed_stabilization` | 稳定化前后种子状态及处理 | 贮存或处理日志 | 批次、前后 kg/水分/发芽率、日期、能耗、处理产品及 kg、残余/损害 kg | 批次称重、水分和发芽试验、处理计量 | kg、%、MJ | 每批每事件 | 交接前区间 | 每个调制场址 | 各事件投入只汇总一次并关联最终批次 | 检验、处理标签和计量日志 |
| `cp_release` | `seed_release` | 合格参考种子净量 | 放行和交货台账 | 批次、合格净 kg、品种/级别、纯度、发芽率、水分、脱绒/处理路线、交接日、失败 kg 及去向 | 认证/检验证明和最终称重单 | kg、% | 每个放行批次 | 一个销售季 | 每个生产/调制主体 | 仅汇总唯一合格批次号 | 签署的检验、放行和移交记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 投入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalized_input` | 全部前景数量 | 每 kg 数量 = 批次归属数量 / 唯一合格种子 kg。 | 过程数量；合格种子质量 | 归一化数量 |  |
| `dry_mass` | 轧花与调制输出 | 干质量 = 收货态质量 ×（1 − 实测水分比例）；比较的物流采用同一水分约定。 | 收货态 kg；实测水分 | 干 kg |  |
| `joint_share` | 无法分开的联合服务 | 输出份额 = 可销售输出干 kg / 全部有意销售输出干 kg 之和；共同负担只分配一次。 | 可销售输出干质量；共同服务量 | 归属负担 | `usda-ars-ginning-2015` |
| `field_n2o` | 管理土壤 | 采用选定的地区 IPCC/国家直接与间接路径公式；保存全部氮投入、因子和单位。 | 氮来源清单；地区；选定因子 | 按路径划分的 kg N2O | `ipcc-2019-soils-ch11` |
| `mix_average` | 生产组合 | 路线负担之和 / 路线分配后唯一合格种子质量之和。 | 路线负担；合格种子质量 | 每 kg 生产组合 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `identity` | 放行种子 | 匹配品种、种子级别、播种用途、批次检测和已核实的参考流身份。 | 放行证明和称重单 |
| `coverage` | 田间至放行 | 关联农田、采收、轧花作业、调制批次和合格种子输出；披露承包商记录缺口。 | 跨场址批次链 |
| `balance` | 轧花与调制 | 按实测水分核对进出质量并解释差额；棉纤维或拒收物不得默认为零。 | 物料平衡表与水分检测 |
| `route_quality` | 条件工序 | 记录灌溉/雨养、酸/机械/无脱绒、种子处理状态及关联投入和废物。 | 作业台账 |
| `temporal` | 生产组合 | 采用已识别的生长季和关联调制期；披露较旧代理数据及变化。 | 带日期台账和计量时段 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 |
| --- | --- | --- |
| `seed_identity` | 参考输出 | 要求已核实流 UUID、合格净重、播种用途、品种/级别、发芽率/纯度证据及已声明水分；拒绝油籽或纤维替代。 |
| `gate_completeness` | 边界 | 核实所有交接前农场、轧花、运输和调制节点或承包服务均计入一次；披露实际交接点和所有权。 |
| `mass_and_outputs` | 轧花与调制 | 以水分可比的平衡核对籽棉、棉纤维、带绒种子、短绒、合格和降级种子、杂物及废物去向；合格质量不可重复。 |
| `route_exclusivity` | 生产与处理 | 每批要求灌溉/雨养田块证据及一种有依据的脱绒路线；酸路线须有反应物、中和和残余物记录；处理状态应明确。 |
| `batch_trace` | 共享作业 | 将计量表、换线、清洗和共享设施关联使用批次与时段；每项共享负担只归属一次。 |
| `reject_resolution` | 分级与放行 | 每项不合格质量均有返工、降级、回收或处置路径；重复处理不能凭空增加合格质量。 |
| `allocation_audit` | 多输出服务 | 要求实测可销售输出质量、份额合计为一、优先直接归属负担；有价格时给经济分配敏感性结果；证据缺失则标记无法判定。 |
| `soil_n2o_basis` | 田间排放 | 核实逐来源氮投入、地区因子来源、直接/间接排放区分及 N2O-N 换算。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 播种用棉籽前景生产组合数据集 |
| downstream_use | `secondary_dataset`；供下游种子供应、棉花种植过程及生命周期模型投影使用的 `background_dataset` |
| allowed_use | 路线、种子等级和声明交接点匹配的清洁播种级棉籽。 |
| excluded_use | 棉纤维、未处理籽棉、压榨用棉籽、棉油/棉粕、交接后配送或由放行种子种植的作物。 |
| required_metadata | 参考流 UUID 和质量；品种/种子级别；地区与生长季；农场/轧花/调制链；灌溉、采收、轧花和脱绒路线；处理；水分、纯度和发芽率；输出去向及分配份额。 |
| required_quality_disclosure | 记录覆盖、承包商数据缺口、检测和校准、水分换算、田间排放方法、分配及经济敏感性、代理数据和不确定性。 |
| update_trigger | 新种子标准或流身份；路线/交接点变化；更好的轧花或调制记录；地区田间排放因子变化。 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-01431` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/01431 | 播种用种的产品边界。 |
| `usda-aphis-cotton-seed-2012` | literature | https://www.aphis.usda.gov/sites/default/files/12_18501p.pdf | 籽棉栽培、轧花、脱绒和认证播种用种的质量背景。 |
| `usda-ars-ginning-2015` | official_guidance | https://www.ars.usda.gov/research/publications/publication/?seqNo115=309523 | 轧花物料状态及棉纤维、种子、杂物的去向。 |
| `usda-ams-nop-5029` | official_guidance | https://www.ams.usda.gov/rules-regulations/organic/handbook/5029 | 条件性酸脱绒和处理披露；有机限制仅适用于认证有机路线。 |
| `usda-ams-acid-delinting` | literature | https://www.ams.usda.gov/sites/default/files/media/Hydrogen%20Chloride%20Petition.pdf | 酸脱绒反应器、中和、清洁、分级及拒收路径；仅作过程描述，并非通用试剂用量。 |
| `ipcc-2019-soils-ch11` | method_factor | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接及间接 N2O 计算的氮投入依据。 |
| `usda-ars-gin-stand` | official_guidance | https://www.ars.usda.gov/southeast-area/stoneville-ms/cotton-ginning-research/docs/overview-of-a-cotton-gin/page-7/ | 轧花时棉纤维与种子的实体分离。 |
| `iso-14044-lci` | `standard` | https://www.iso.org/standard/38498.html | 生命周期清单定量参考与投入/产出核算框架；本文 0–1 物料份额及 1 kg 参考产出界限来自代数关系，并非 ISO 给出的经验率。 |
| `usda-ars-cotton-yield-2004` | `literature` | https://www.ars.usda.gov/research/publications/publication/?seqNo115=138898 | 已发表田间研究籽棉产量的最小值与最大值；仅对应所研究地区、品种和年度，并非通用产量限值。 |
