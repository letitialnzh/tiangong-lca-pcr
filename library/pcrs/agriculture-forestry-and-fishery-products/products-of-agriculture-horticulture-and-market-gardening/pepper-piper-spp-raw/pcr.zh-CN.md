---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pepper-piper-spp-raw
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 生产者发运时的整粒未加工胡椒属胡椒

## 1. 范围和适用性

本规则适用于生产者发运时保持整粒、未经压碎或磨粉的胡椒属（*Piper* spp.）胡椒果。鲜果与经初级干燥的整粒果均可纳入，但必须分别声明物理状态，不能在未经实测水分换算时混合。代表性路线为黑胡椒（*Piper nigrum*）多年生藤本栽培、采收、初级清理与干燥、整粒分级。白胡椒或绿色整粒胡椒路线须另外记录成熟度以及实际发生的浸泡、去果皮等处理；鲜果直接发运路线不含干燥。压碎、磨粉、提取或混合加工的胡椒、辣椒属（*Capsicum*）和多香果属（*Pimenta*）果实、以及发运后的环节均不适用。分类边界依据 `un-cpc3`，生产路线依据 `fao-ecocrop-pepper`、`kau-pepper-harvest`。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pepper-piper-spp-raw |
| classification_refs | CPC 3.0 `01651`，未加工胡椒属胡椒 |
| covered_products | 整粒未磨粉的胡椒属果实，鲜品或经初级干燥，须声明物种、形态及水分 |
| excluded_products | 压碎、磨粉、提取或混配的胡椒属胡椒；辣椒属和多香果属胡椒 |
| representative_product | 经初级干燥的整粒黑胡椒（*Piper nigrum*） |
| production_route | 多年生藤本管理 → 采收 → 视路线进行初级清理/干燥 → 分级 → 发运 |
| market_state | 生产者出厂的整粒果实，声明颜色/形态、鲜干状态、等级和水分 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 生产者发运时的整粒未加工胡椒属胡椒果 |
| How much | 1 kg 净合格果实 |
| How well | 声明物种、整粒形态、黑/白/绿处理路线、水分和等级 |
| How long or cycle | 指定采收季的产出；建植投入按有证据的生产年份归属 |
| reference_flow_link | `pepper_grading` 的合格产出 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 经初级干燥的整粒黑胡椒；UUID 待核 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种；整粒未磨粉；黑/白/绿路线；鲜/干状态；水分；等级；生产者发运点；采收期 |
| Reference identity status | `unresolved` |

已核实的鲜品天工流 UUID 为 `1015c13e-e71a-4eb4-8a03-9ce3e096cee5`，其描述是“鲜品，未加工”，因此不绑定到干燥代表产品。干品参考流在身份复核前保持未映射；不得直接等同鲜品与干品质量。

## 4. 测量和单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | 合格胡椒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量扣除包装、废品和异物后的整粒净重。 |
| `moisture` | 状态换算 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用配对实测的湿基含水率：干状态 kg = 鲜品 kg × (1 − 鲜品含水率) / (1 − 干品含水率)；保留两次原始称量。 |
| `period` | 多年生投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按有证据的生产年份归属建植和补植负担，再按合格产品 kg 归一化。 |

## 5. 系统边界

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 报告期初的受管理胡椒属藤本、地块、支撑设施和上游投入 |
| starting_condition_role | 前景初始存量与上游供给接口，含应归属的建植阶段 |
| product_classification_scope | CPC 01651 整粒未磨粉胡椒属果实；区分水分与处理路线 |
| recursive_input_rule | 外购同类胡椒作为独立投入，附上游数据集和来源；不得在本前景系统重复创建其种植过程。 |
| upstream_dataset_requirement | 与来源匹配的种植材料、肥料、水、燃料、电力及外购胡椒数据集 |
| disclosure | 物种、地块、藤龄、采收期、鲜干状态、水分、处理步骤、等级、损耗、废品与去向 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_dispatch` | 所有路线 | 纳入应归属的建植、栽培、采收、实际进行的初级处理和分级，止于生产者发运；不含磨粉、提取、零售及后续运输。 | `un-cpc3`; `fao-ecocrop-pepper` |
| `boundary_branch` | 鲜/黑/白/绿路线 | 只记录实际进行的干燥、浸泡和去果皮，并追踪投入、废水及残余物；干品不可把干燥过程作为零负担忽略。 | `fao-ecocrop-pepper`; `kau-pepper-harvest` |
| `boundary_soil` | 施肥地块 | 根据记录的氮和改良剂投入及已声明的因子，计算土壤直接与间接 N₂O 及适用的石灰/尿素 CO₂。 | `ipcc-2019-afolu11` |
| `boundary_shared` | 支撑、泵和干燥设施 | 列出使用过程和年份；共享资产负担只计一次。 | `fao-ecocrop-pepper` |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pepper_cultivation` | 多年生藤本栽培 | `required` | 建植与补植投入归属于受益采收期 | 藤上胡椒果 | 地块-年份与采收 kg |
| `pepper_harvest` | 果实采收 | `required` | 与藤本管理分开记录采摘 | 鲜采果 | 采收批次 kg |
| `pepper_conditioning` | 初级处理 | `conditional` | 实际清理、干燥、浸泡或去果皮时纳入；鲜品直接发运可省略 | 整粒已处理果 | 成对称量及水分 |
| `pepper_grading` | 分级和发运 | `required` | 区分合格、降级与废品 | 参考产品 | 合格净重 kg |

栽培形成藤上果实；采收作为独立活动摘下鲜果，送往初级处理或直接分级。初级处理把整粒果送交分级。合格等级和可销售降级果各有去向；每批废品必须记录返工、回收或处置路径。返工批次携带原负担一次并回到注明的产生节点。

### Process: 多年生藤本栽培（`pepper_cultivation`）

#### Inputs

##### Product flows

###### 栽培投入（`cultivation_inputs`）

按材料及年份分别记录种植材料、支撑物、肥料、改良剂、灌溉和燃料，不合并为一个交换。

- 选定流：实际栽培投入；各材料 UUID 待核
- 流属性/单位：质量 / kg；水 / m3；燃料 / L
- 数量规则：按材料和地块-年份汇总田间与供货记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：地块-年份和合格胡椒产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cultivation`

##### Waste flows

修剪藤蔓、废支撑物和容器按实测回收或处置路线记入 `cp_residues`。

##### Elementary flows

仅在水直接从环境抽取而非采购时，将环境取水记录为输入。

#### Outputs

##### Product flows

藤上果实转交 `pepper_harvest`，只是中间状态，不另作销售产品。

##### Waste flows

藤本残余物按质量与去向记录在 `cp_residues`。

##### Elementary flows

将管理土壤气体分别记录为各物质的输出交换。

###### 管理土壤氧化亚氮排放（`soil_nitrous_oxide_emission`）

根据记录的氮投入和地块年度活动量计算直接与间接 N₂O。与二氧化碳分开计量，并在绑定 UUID 前核验受纳空气子介质。

- 选定流：排入空气的氧化亚氮；受纳空气子介质待核验
- 流属性/单位：质量 / kg N2O
- 数量规则：将 `calc_soil_gases` 应用于氮投入和声明的 N₂O 因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：地块-年份，再归一到合格胡椒产出
- 基准类型：氮投入（`n_input`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cultivation`
- 来源：`ipcc-2019-afolu11`

###### 石灰或尿素投入产生的二氧化碳（`soil_amendment_carbon_dioxide_emission`）

仅在石灰或尿素使用情况及选定方法支持直接 CO₂ 计算时纳入。与 N₂O 分开计量，并在绑定 UUID 前核验受纳空气子介质。

- 选定流：石灰或尿素产生的二氧化碳排入空气；受纳空气子介质待核验
- 流属性/单位：质量 / kg CO2
- 数量规则：将 `calc_soil_gases` 应用于记录的石灰或尿素投入及声明的 CO₂ 因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：地块-年份，再归一到合格胡椒产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cultivation`
- 来源：`ipcc-2019-afolu11`

### Process: 果实采收（`pepper_harvest`）

#### Inputs

##### Product flows

藤上果实来自栽培节点；实际采收燃料或电力另行记录。

##### Waste flows

不预设废物流投入。

##### Elementary flows

设备直接排放须有活动量与因子证据，避免重复计算上游燃料负担。

#### Outputs

##### Product flows

###### 鲜采整粒果（`fresh_berries`）

在初级处理前逐批称重并记录采收成熟度。

- 选定流：胡椒属鲜采整粒果；中间状态 UUID 待核
- 流属性/单位：质量 / kg
- 数量规则：按批次汇总接收称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：采收批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest`

##### Waste flows

损伤果和田间损耗不计入合格产量，并依 `cp_residues` 记录去向。

##### Elementary flows

无实测或方法计算证据时不预设基本流产出。

### Process: 初级处理（`pepper_conditioning`）

#### Inputs

##### Product flows

###### 鲜果与处理投入（`conditioning_inputs`）

把鲜果、干燥能耗、实际浸泡或清洗用水分别记录；露天日晒不等于购入热能。

- 选定流：整粒鲜果与实际路线投入；各交换 UUID 待核
- 流属性/单位：质量 / kg；能源 / kWh；水 / m3
- 数量规则：配对批次称量与计量表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：处理批次产出
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`
- 来源：`kau-pepper-harvest`

##### Waste flows

不预设废物流投入。

##### Elementary flows

仅对直接从环境取用的水记录环境取水。

#### Outputs

##### Product flows

###### 已处理整粒果（`prepared_berries`）

记录清理或干燥后的整粒质量、水分及黑/白/绿路线，随后移交分级。

- 选定流：已处理整粒胡椒；干燥状态 UUID 待核
- 流属性/单位：质量 / kg
- 数量规则：净产出称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：处理批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning`

##### Waste flows

脱落果梗、损伤果及去除的果皮按质量和去向记入 `cp_residues`。

##### Elementary flows

水分蒸发用成对质量/水分平衡计算；涉水路线记录废水量、处理和接收环境，具体 UUID 待核。

### Process: 分级与发运（`pepper_grading`）

#### Inputs

##### Product flows

将鲜果或已处理整粒批次接入分级。外购同类胡椒附独立上游数据集；分级耗电记录于 `cp_grading`。

##### Waste flows

返工废品须与原始批次关联。

##### Elementary flows

机械分级不预设基本流产出。

#### Outputs

##### Product flows

###### 合格整粒未加工胡椒（`accepted_pepper`）

仅符合已声明等级和水分要求的可售整粒果计入参考产出；它与可售降级果分别是预期产出。

- 选定流：整粒未加工胡椒；干燥状态 UUID 待核
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：校准称量的发运净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格未加工胡椒
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`

###### 可售降级整粒胡椒（`downgraded_pepper`）

逐批称量不同销售等级并记录去向；这是另一项预期产出，干燥状态 UUID 待核。

- 选定流：整粒未加工胡椒；干燥状态 UUID 待核
- 流属性/单位：质量 / kg
- 数量规则：降级批次实测净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分级投入
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading`

##### Waste flows

###### 分级废品（`grading_rejects`）

逐批称量不合格果和异物，声明返工、回收或处置去向，不计入合格 kg。

- 选定流：实际废品材料；按去向核对 UUID
- 流属性/单位：质量 / kg
- 数量规则：批次实测废品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分级投入
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residues`

##### Elementary flows

机械分级不预设基本流产出。

## 7. 分配和联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocate_periods` | 建植与补植 | 将藤本和支撑负担归于有证据的生产年份与产出，保留非生产建植与终止事件，每项负担只计一次。 | `fao-ecocrop-pepper` |
| `allocate_shared` | 共享支撑、泵和干燥设施 | 列出使用方和服务年份，按实测使用或有记录的物理代理分配，并使分配总量与记录总量一致。 | `fao-ecocrop-pepper` |
| `allocate_grades` | 可售整粒等级 | 功能相同时按实测质量划分共同负担；差异显著时另证分配规则。废品不获得联产品抵扣。 | `un-cpc3` |
| `allocate_rework` | 返工或回收果 | 原批次负担保留，增量返工负担只加一次；回收抵扣须有去向和方法证据。 | `kau-pepper-harvest` |

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation` | `pepper_cultivation` | 藤本、支撑、投入与土壤气体 | 地块-年份台账 | 地块、年份、种植/补植、材料、养分、用量、供应方、计量 | 发票、田间记录、计量表 | kg、株、m3、kWh、L | 每次事件 | 建植至采收 | 各地块 | 按材料和年份汇总后归属服务期 | 发票、养分证明、计量表 |
| `cp_harvest` | `pepper_harvest` | 藤上与鲜采果 | 采收批次 | 地块、日期、物种、成熟度、鲜果 kg、田间损耗、能耗 | 称量与田间记录 | kg、kWh、L | 每批 | 全部报告采收 | 各地块 | 汇总不重复批次 | 称量单与追踪 |
| `cp_conditioning` | `pepper_conditioning` | 状态换算、能源、水和损耗 | 处理批次 | 批次、进出 kg、前后水分、能源、水、废水、路线 | 称量、检测和计量表 | kg、%、kWh、m3 | 每批 | 全部处理批次 | 各设施 | 成对质量/水分平衡 | 批次单与检测 |
| `cp_grading` | `pepper_grading` | 合格与降级产出 | 等级台账 | 批次、物种、状态、水分、等级、合格/降级 kg、买方 | 称量与发运单 | kg、% | 每批 | 全部发运 | 各设施 | 扣除废品后汇总合格量 | 称量单与销售单 |
| `cp_residues` | 所有节点 | 废品、返工与残余物 | 去向台账 | 原批次、材料、kg、返回节点、去向 | 称量与接收凭证 | kg | 每次事件 | 同一采收期 | 各场址 | 各路线只计一次 | 称量与接收凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_conditioning_balance` | 干燥与清理 | 进料 kg = 整粒产出 kg + 分离固体 + 蒸发水 + 其他记录损耗；调查无法解释的差值。 | 成对重量、水分、残余物 | 平衡后的批次产出 | `kau-pepper-harvest` |
| `calc_soil_gases` | 管理型土壤 | 用 IPCC 土壤直接/间接 N₂O 及适用的石灰/尿素 CO₂ 方程、地块-年份活动量和已声明因子计算。 | 氮/改良剂投入及因子 | 各气体 kg | `ipcc-2019-afolu11` |
| `calc_intensity` | 全部节点 | 在共享资产和返工校核后汇总归属投入，按相同物理状态的合格 kg 归一化。 | 台账与合格 kg | 每参考 kg 的交换 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产出 | 核实胡椒属物种、整粒状态、物理状态及生产者发运点。 | 分类与流身份复核 |
| `dq_mass` | 采收至发运 | 关联批次、重量、水分、等级及废品路线，披露平衡差。 | 称量与检测 |
| `dq_period` | 多年生资产 | 确认建植、生产、补植和终止年份及使用方。 | 地块与资产台账 |
| `dq_coverage` | 投入与排放 | 披露缺失计量、估计值、因子选择和未解 UUID。 | 完整性记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 拒绝加工、压碎、磨粉、非胡椒属或状态不明产品；发布前须取得经复核的干品流 UUID。 | `un-cpc3` |
| `validate_balance` | 采收、处理、分级 | 必须记录水分，并按已声明测量容差校核投入、合格、降级、废品与水分损失。 | `kau-pepper-harvest` |
| `validate_route` | 过程图 | 校核栽培 → 采收 → 可选处理 → 分级的交接，以及各等级、废品和返工路径。 | `fao-ecocrop-pepper` |
| `validate_shared` | 多年生/共享资产 | 每项归属资产注明服务年份和使用方，分配总和等于记录总量且只计一次。 | `fao-ecocrop-pepper` |
| `validate_soil` | 施肥地块 | 报告氮活动量及直接/间接因子，对相关但未计算的土壤排放作标记。 | `ipcc-2019-afolu11` |

## 10. 发布数据集属性

| Field | Value |
| --- | --- |
| dataset_role | 生产者发运时整粒未加工胡椒属胡椒的前景生产数据集 |
| downstream_use | 仅供物种、状态、地区、时期及边界相符的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 水分和形态相符的每 kg 整粒未加工胡椒供应 |
| excluded_use | 磨粉、加工或非胡椒属产品；不加限定的鲜干替代；发运后环节 |
| required_metadata | 物种、颜色/形态、水分、等级、地区、时期、发运点、路线、资产归属及流身份复核 |
| required_quality_disclosure | 原始数据比例、质量平衡、缺失投入、因子、废品去向和 UUID 缺口 |
| update_trigger | 新状态/路线、修订流身份、CPC 范围、水分基准或重要场址-年份数据变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3` | official_guidance | 联合国统计司，CPC 3.0 解释性说明，01651 与 23921，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品边界 |
| `fao-ecocrop-pepper` | official_guidance | FAO Ecocrop，*Piper nigrum*，https://ecocrop.apps.fao.org/ecocrop/srv/en/cropView?id=1714 | 栽培路线和状态 |
| `kau-pepper-harvest` | extension_guidance | 喀拉拉农业大学，胡椒采收与处理，https://www.celkau.in/Crops/spices/pepper/harvesting.php | 采收与初级处理 |
| `ipcc-2019-afolu11` | method_factor | IPCC《2019 年细化指南》第 4 卷第 11 章，https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理型土壤气体 |
