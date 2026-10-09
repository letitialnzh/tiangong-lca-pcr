---
pcr_id: pcr.business-and-production-services.research-and-development-services.own-account-research-development-original
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 自行开发的研究与开发原件


## 1. 范围与适用性

本 PCR 覆盖开发起始时没有合同或已知买方、拟出售的自行开发科研原创知识：包括发明、产品及过程的有记录思想、计划、蓝图或配方（un-cpc3-originals）。涵盖实际实验室、计算、现场、调查及混合研究路线，不仅是数字文档编制。识别新颖研究问题、证据路线与原件完成门槛。实体原型可以支持原件，但参考输出是知识资产。专利既非必需，也不证明科学有效性。

排除受托研究服务输出、常规测试、没有研究知识目标的设计概念、矿产勘探成果、作为独立软件产品的软件原件、通用数据产品、品牌或特许资产、文学艺术原件、广播及下载。构成已识别科研结果的必要软件和数据保留在成果包中，不重复作为独立输出。下游工业设计原件属于自身边界。混合研究与设计的分类由实际交付对象判断，而非文件扩展名。计数是声明生产单位，并不证明无关原件的功能等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.research-and-development-services.own-account-research-development-original |
| classification_refs | CPC 3.0 81400 |
| covered_products | 自行开发、拟出售且起始无合同或已知买方的发明、产品或过程科研知识原件，版本明确 |
| excluded_products | 受托研发服务；CPC 83920设计原件；软件、数据、下载或广播产品；勘探、艺术及品牌资产 |
| representative_product | 自行开发的研究与开发原创成果包 |
| production_route | 问题与假设 → 实际研究及迭代 → 证据评估 → 完整版本成果包；声明具体实验和支持设施 |
| market_state | 已完成、拟出售或许可其识别知识的原件；声明实际权利及限制，不假设许可期限 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 创作一份可识别科研原创知识成果包，而非提供未限定的研究工时 |
| How much | 一份声明版本的完整原创成果包 |
| How well | 记录研究目标、原创性证据、研究的不确定性、方法、数据或试样、验证结果、限制、完整性及复用条件；不声称专利、安全或方法学批准 |
| How long or cycle | 一个从项目起始至有记录完成的实际创作周期；记录日期，不设通用寿命或后续使用时长 |
| reference_flow_link | reference_product_original |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 自行开发的研究与开发原创成果包 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 项目及原件标识；版本及内容清单；自行开发起始事实与拟出售用途；研究领域及目标；实际路线及规模；完整性验收；证据与复现限制；地域与场址；创作日期；权利与复用限制；储存和完成截止；上游及复用分配；设备和供应方范围 |

必需限定信息须记录于数据集元数据、过程说明或参考流描述。同一已完成原件不按专利、权利要求、用户、副本或下载重复计数。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | item 为公开 Item(s) 的显示别名，系数1。用 cp_original 记录一份完整声明原件；不得由货币或字节推导知识质量、权利量或原件数量。 |
| energy_interface | all electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | cp_energy 记录实测kWh；同一能源接口用1 kWh = 3.6 MJ。保留公开参考属性、地域及电压。GB、CPU工时及网络流量本身不计量电力。 |
| same_original_basis | all inventory rows | Original package count | item | 所有清单及采集结果采用每声明的参考流这一版本基准。原始kg、MJ及设备或服务件数作为分子；不将知识输出换算为质量。 |

质量属性 `93a60a56-a3c8-11da-a746-0800200b9a66` 引用质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`，参考单位kg。净热值引用能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`，参考单位MJ。上述单位用于具体投入及输出交换，不用于知识原件的数量。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际项目起始，识别已有知识、试样及设施；不把复用原件既往负担假设为零 |
| starting_condition_role | 前景采集边界，连接上游供给 |
| product_classification_scope | CPC 3.0 81400 |
| recursive_input_rule | 对复用或外购研究原件，用匹配上游清单及明确受益账本仅计一次；内部展开工作替代相应外购交换 |
| upstream_dataset_requirement | 匹配实际供给态、地域年份、设备配置、试剂纯度、供应方工作范围及处理技术；完整生命周期声明前量化缺失层 |
| disclosure | 项目起止、实际方法、失败分支、复用知识、内外购边界、重要性及未知清单；仅前景不等于完整摇篮到大门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_creation | all processes | 纳入假设与计划、包括失败试验的研究、证据评估、原件文档及直至完成的归属设施。实际旅行、采暖、冷却、仪器、原型及耗材须筛选重要性并实例化为具体交换；薪酬不是物理流。 | un-cpc3-originals; oecd-frascati-2015; gsf-sci-1-1-0 |
| boundary_routes | investigation | 实验室、中试、现场、调查及计算每条实际路线均须建立方法至清单登记。各材料、能源载体、处理及有依据基础排放分别展开。所列条件行是具体路线条目，不是通用完整实验配方；缺少路线证据阻断完整性。 | oecd-frascati-2015 |
| boundary_research_end | prototypes and pilot plants | 解决不确定性的研究试验纳入创作周期。后续常规制造及商业运行分开；混用中试运行与实体产品须细分，不把全部装置负担归于知识。 | oecd-frascati-2015 |
| boundary_distribution | original reuse and delivery | 复制下载、后续托管及网络交付、许可管理和发明使用与原件创作分开。明确声明任何初次转移截止。复用须带原件负担账本，不将全部创作清单重复计入每个副本。 | un-cpc3-originals |
| boundary_provider | owned and purchased computing | 自有实测公用工程及设备清单与完整外购计算服务分开；记录实际供应方作业、储存及流量和有记录清单。供应方服务替代其内含电力和硬件；缺失层保留未知。 | gsf-sci-1-1-0 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| conception | 研究问题、假设与计划 | required | 所有原件 | 前景创作 | 每声明的参考流 |
| investigation | 实际研究与迭代 | required | 实际方法，包括理论、实验或研究数据采集 | 前景创作 | 每声明的参考流 |
| evaluation | 研究证据评估 | required | 所有原件；不要求发明成功 | 前景创作 | 每声明的参考流 |
| consolidation | 原件有记录完成 | required | 所有原件 | 参考输出 | 每声明的参考流 |
| infrastructure | 支持设备隐含清单 | conditional | 实际自有设备且未内含于外购服务 | 上游分配投入 | 每声明的参考流 |

这些阶段是作业细分，不是四个额外原件。汇总项目时内部证据及草稿转移抵消。实际存在的未覆盖化学反应、场址排水、燃料燃烧、冷却泄漏或原型路线，均是必需清单扩展问题，不套用通用制造业排放。理论或社会科学原件不必消耗液氮或实验室水。

### 过程： 研究计划 (`conception`)

#### 输入

##### 产品流

###### 交流电 (`conception_electricity`)

计量归属于本原件的文献分析、假设形成与研究计划用电。此 UUID 仅适用于中国电网平均消费组合、用户端低于1千伏供电；其他地域或接口必须使用对应身份。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 每声明的参考流的实测归属数量；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源： `gsf-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程： 研究 (`investigation`)

#### 输入

##### 产品流

###### 交流电 (`investigation_electricity`)

记录实际实验、模拟、研究数据采集及失败或重复作业电量。此 UUID 仅适用于中国用户端低于1千伏的电网平均供电，不得替代为电厂输出。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 每声明的参考流的实测归属数量；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源： `gsf-sci-1-1-0`

###### 去离子水 (`laboratory_water`)

条件纳入：实验路线实际使用的外购纯净去离子水，制备路线为离子交换或反渗透。记录实测质量；现场制水须改为原水、纯化及浓水清单，并替换本外购水边界。

- 选定流： 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 每声明的参考流的实测归属数量；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_material`
- 来源： `oecd-frascati-2015`

###### 液氮 (`cryogenic_nitrogen`)

条件纳入：实际低温实验或试样保存，使用纯度至少99.9%、供应记录匹配液态空气分馏路线的液氮。计量消耗量并包括归属的储存损失；外购气态氮是另一身份。

- 选定流： 液氮 `dd17be27-229a-4236-ae93-29835cf7e1a8`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 每声明的参考流的实测归属数量；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_material`
- 来源： `oecd-frascati-2015`

###### 15毫升聚丙烯离心管 (`pp_tube`)

条件纳入：实际使用此具体耗材时记录。称量其聚合物质量；15毫升是容量，不是聚合物质量换算依据。管盖若为不同材料须另列；其他实际试剂、试样、容器或原型组件均须各列原子交换。

- 选定流： 15毫升聚丙烯离心管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 每声明的参考流的实测归属数量；cp_material。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_material`
- 来源： `oecd-frascati-2015`

###### 拉伸试验研究报告 (`tensile_report`)

条件纳入：外部提供方交付用于解决声明研究问题的限定范围拉伸试验报告。声明试验方法、试样身份、次数和报告完整性。完整供应方清单替代其内含电力及材料行；普通工厂验收测试不是此交换。

- 选定流： 拉伸试验研究报告
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 每声明的参考流的实测归属数量；cp_service。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_service`
- 来源： `oecd-frascati-2015`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废15毫升聚丙烯离心管 (`pp_tube_waste`)

条件纳入：此实际废弃离心管离开研究场址时记录。计量质量、污染、残留化学物身份及接收处理方式。不得把受污染实验室聚合物当作洁净回收料；保留试样属于库存而非废物。

- 选定流： 废15毫升聚丙烯离心管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 每声明的参考流的实测归属数量；cp_waste。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源： `oecd-frascati-2015`

##### 基本流

###### 二氮 (`nitrogen_air`)

条件纳入：所代表观测期内有记录的分子氮排放至空气、未指定子介质。采用排气实测或区分保留、转移及释放氮的库存衡算。这不是大气资源提取、长期排放，也不是NO、NO2或N2O。

- 选定流： 二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 每声明的参考流的实测归属数量；cp_emission。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_emission`
- 来源： `oecd-frascati-2015`

### 过程： 评估 (`evaluation`)

#### 输入

##### 产品流

###### 交流电 (`evaluation_electricity`)

计量研究结果的可复现性检查、分析及验证用电。仅中国用户端低于1千伏电网平均供电适用此身份；该计量池与研究过程分开。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 每声明的参考流的实测归属数量；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源： `gsf-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程： 原件完成 (`consolidation`)

#### 输入

##### 产品流

###### 交流电 (`consolidation_electricity`)

计量直至声明原件完成门槛的文档编制、最终完整性检查及储存用电。仅适用于中国用户端低于1千伏电网平均供电；无限期托管和后续下载另列。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 每声明的参考流的实测归属数量；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源： `gsf-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 自行开发的研究与开发原创成果包 (`reference_product_original`)

一份完整且版本明确的科研原件：其识别的知识内容、支持证据与复用条件组成声明成果包。副本、专利、权利要求、下载事件或潜在被许可人不增加原件数量。

- 选定流： 自行开发的研究与开发原创成果包
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 1 件
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_original`
- 来源： `un-cpc3-originals`

##### 废物流

##### 基本流

### 过程： 支持硬件 (`infrastructure`)

#### 输入

##### 产品流

###### 研究计算服务器 (`server_hardware`)

条件纳入：此具体自有服务器支持原件创作，其隐含清单尚未计入外购服务。绑定型号、硬件配置及供应方数据集，按有证据的时间及预留资源份额分配设备清单。其他工作站、仪器、建筑或网络资产须各列具体行。

- 选定流： 研究计算服务器
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 每声明的参考流的实测归属数量；cp_asset。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_asset`
- 来源： `gsf-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all shared research inputs | 首先用实际计量、预约及领料记录细分项目作业与输出。不默认以收入、专利数或预期用户作为物理份额。记录因果驱动及未分配余量；未知共享负担不为零。 | un-cpc3-originals; oecd-frascati-2015; gsf-sci-1-1-0 |
| allocation_compute | shared computing facilities | 采用实际实测能源及可解释的作业、资源或时间归属，包括预留闲置容量与冷却边界。能源归属须与设施计量核对；储存或流量指标是分配证据，不是通用kWh系数。 | gsf-sci-1-1-0 |
| allocation_device | server_hardware | 按预留时间相对有证据安装寿命及预留资源份额，归属具体设备清单。采集实际设备、寿命及容量记录，不假设服务器寿命。仅在供应方清单未内含同一资产时适用。 | gsf-sci-1-1-0 |
| allocation_original | knowledge reuse, failed branches and pilot products | 限定原件项目保留全部归属失败及重复试验。复用知识和共同产生原件须用守恒受益账本追踪，不以无限未来许可稀释。商业中试产品与研究使用用实际物理运行记录细分；未解决共同归属须审查。 | oecd-frascati-2015; un-cpc3-originals |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_original | consolidation | reference output | acceptance_record | 项目；原件标识；版本；内容目录；完整包数量；日期；起始买方及合同事实；拟出售用途；权利与限制 | 检查原始研究记录与完成清单，按内容身份去重并验证自行开发起始及成果包完整性 | item | 完成时 | 完整创作周期 | 全部生产场址及合作方 | 每声明的参考流 | 签署内容目录及原始记录，不宣称科学批准 |
| cp_energy | conception; investigation; evaluation; consolidation | electricity | meter_record | 阶段；电表；时间戳；地域；电压；kWh；归属作业；闲置及冷却边界；供应方内含范围 | 校准分表或与实际设施计量核对的可验证遥测；披露因果作业分配与计量覆盖 | kWh | 每次运行及项目期间 | 完整创作周期，包括失败试验 | 自有设施；外购供应方另列 | 每声明的参考流 | 校准、设施核对、作业账本及缺失时间披露 |
| cp_material | investigation | individual material input | issue_record | 具体化学物或材料；CAS及组成；状态与纯度；质量；库存变化；方法与运行；供应方；损失 | 称量或使用可追溯质量领退料记录；体积转质量时在记录条件下实测密度；连接每条实际路线的试剂及试样 | kg | 每次实验及库存核对 | 门槛内全部试验及储存 | 实际实验室、现场及中试场址 | 每声明的参考流 | 衡算、供应证明、方法及物料清单、库存核对 |
| cp_service | investigation | external tensile-test report | provider_record | 供应方；试验方法；试样；运行次数；完整报告；公用工程、材料及硬件范围；项目归属 | 检查实际订单及报告；取得报告单位及范围声明匹配的供应方清单 | item | 每次交付 | 项目创作周期 | 实际供应方 | 每声明的参考流 | 供应方报告及清单；内含流排除账本 |
| cp_waste | investigation | individual waste output | transfer_record | 废物身份；聚合物质量；污染物身份；保留库存；运输；接收路线 | 计量分离废物并核对联单；记录组分及残留物质、实际场外处理，不假设洁净回收 | kg | 每次转移 | 全部项目废物及期末库存 | 实际场址及接收处理 | 每声明的参考流 | 称重及废物联单；污染评估 |
| cp_emission | investigation | dinitrogen to air | measurement_record | 氮投入；库存；回收；转移；排气；化学身份；期间；空气子介质 | 实测排气释放，或用实测库存、保留及转移量核对氮质量衡算；披露不确定性并验证即时空气介质 | kg | 每次运行及库存期间 | 所代表观测期间 | 实际实验场址 | 每声明的参考流 | 排气或库存记录；介质与化学身份检查 |
| cp_asset | infrastructure | specific server input | asset_record | 服务器型号及配置；上游清单；预留时间；安装寿命；预留及总容量；供应方重复检查 | 检查资产台账及预留日志；论证实际安装寿命估计及设备数据集匹配；保留寿命与容量假设敏感性 | item | 每项资产及项目期间 | 创作周期及有记录资产寿命 | 实际自有服务器 | 每声明的参考流 | 资产证据、容量日志、清单完整性及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_energy | all electricity rows | 将归属记录kWh乘3.6得到MJ；保留同一接口与声明原件基准。 | cp_energy; kWh | MJ | gsf-sci-1-1-0 |
| calculate_project_amount | all inventory rows | 仅汇总归属于一份声明原件且未重复的交换量；项目细分及共享份额须预先记录。参考输出恰为一件完整成果包。 | cp_original; stage records; beneficiary ledger | per declared reference flow | un-cpc3-originals; oecd-frascati-2015; gsf-sci-1-1-0 |
| calculate_nitrogen_release | nitrogen_air | 核对实际氮投入及期初库存与期末库存、回收转移氮和实测释放。调查未解释衡算余量，不将其全部声明为排放。 | cp_material; cp_emission | kg per declared reference flow | oecd-frascati-2015 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | reference output | 绑定实际内容版本、自行开发起始、完整性及复用限制；计数本身不证明可比知识质量。 | cp_original; un-cpc3-originals |
| quality_routes | investigation | 每项实际研究方法连接完整路线原子投入、输出、废物及有依据释放；区分不存在与未知。 | method logs; cp_material; cp_waste; cp_emission |
| quality_time | all processes | 采用包括失败试验及场址供应方变化的全部声明创作期间；量化缺失期间并披露代表性。 | dated project and meter records |
| quality_upstream | all inputs | 验证供应方清单、物理属性、单位、地域时间匹配及硬件范围；未解决身份是候选缺口，不是可用批准数据集。 | direct identity checks; supplier evidence |
| quality_uncertainty | allocation and quantities | 报告计量不确定性、项目归属余量、设备寿命敏感性、复用原件溯源及范围排除；无通用产率或能源基准。 | measured and allocation evidence |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_original | reference_product_original | 拒绝把重复副本、权利要求或下载计作新原件，或把受托服务改称自行开发。验证必需限定信息及一份完整版本。 | un-cpc3-originals |
| validate_measurement | all inventory rows | 要求双语均采用每声明的参考流、关联原始记录、分子单位及有记录能源换算。不虚构知识质量或流量至kWh关系。 | gsf-sci-1-1-0 |
| validate_routes | investigation | 实际路线存在未解释材料、废物、水去向、直接排放或试验边界时，数据集完整性不通过。不无证据将条件缺失视为零。 | oecd-frascati-2015 |
| validate_double_count | shared assets and providers | 核对供应方与自有范围、阶段计量池及原件受益份额；拒绝同一电力、设备、外购报告或原件创作负担重复计入。 | gsf-sci-1-1-0; un-cpc3-originals |
| validate_identity | UUID-bearing and unresolved rows | 验证公开流物质、供给路线、参考属性、单位组及基础流子介质。空身份及缺失供应方层必须明确保留；解决前阻断完整可用数据集声明。 | un-cpc3-originals; oecd-frascati-2015; gsf-sci-1-1-0 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一份完整可识别科研知识成果包的原件创作前景清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 证据补齐后，作为研究、设计或产品模型的可追溯上游原件投入，并明确复用归属 |
| excluded_use | 按专利、货币、用户或下载的通用影响；科学或法律批准状态；仅前景即声称完整生命周期；不等效知识资产比较 |
| required_metadata | 参考必需限定信息；过程路线登记；实际场址及期间；所有交换单位及采集记录；上游供应方版本及范围；复用及资产分配账本 |
| required_quality_disclosure | 未知身份、缺失路线及层、计量不确定性、归属余量、设备寿命敏感性及知识可比性限制 |
| update_trigger | 新原件版本或知识范围；研究路线变化；新供应方设备；完成截止、复用账本或实测记录修订 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-originals | official_guidance | 联合国统计司CPC 3.0解释，81400及83920：https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/81400 ；https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/83920 | 经济产品边界、自行开发起始及科研与设计区分；不提供LCA定量因子 |
| oecd-frascati-2015 | official_guidance | OECD《弗拉斯卡蒂手册2015》，DOI 10.1787/9789264239012-en；§§2.5–2.8、2.32–2.36、2.49–2.54及表2.3；印刷页44–45、51–52、60–62（PDF页46–47、53–54、62–64） | 研发活动、不确定性、原型及中试商业分界；统计定义不是LCA分配因子或实测消耗 |
| gsf-sci-1-1-0 | standard | 绿色软件基金会，软件碳强度规范1.1.0，Energy、Embodied emissions、Software boundary及Quantification method：https://sci.greensoftware.foundation/ | 仅计算能源及资产归属；迁用实测作业原则，不把SCI碳评分视为完整原件LCA |
