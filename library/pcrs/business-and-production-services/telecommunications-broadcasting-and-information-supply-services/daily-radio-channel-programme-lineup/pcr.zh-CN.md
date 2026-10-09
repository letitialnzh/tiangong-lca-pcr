---
pcr_id: pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.daily-radio-channel-programme-lineup
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 电台每日频道节目编排

## 1. 范围与适用性

适用于电台将节目、直播与衔接内容组合为完整每日编排并交给他人分发的交付对象。包括全录播、全直播及混合编排；不能只选一个短节目替代整日编排。官方分类将该集合与广播原创资产和广播服务分开（`unsd-cpc3-2025`，第444页）。编排输出包含实际音频或经双方验收的节目引用及直播交接接口、时间表和技术元数据；仅出售抽象排期咨询不属于该对象。

参考量按一份完整每日交付计数，不按质量、收入、许可价格或听众数计量。不同语言、广告插入版本、节目类型、播出时段、重复节目比例和交接技术条件须分层；技术差异不可自动推断环境优势。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.daily-radio-channel-programme-lineup |
| classification_refs | CPC 3.0 84621 — Radio channel programmes |
| covered_products | 供他人分发的完整电台每日录播、直播和混合节目编排 |
| excluded_products | 单个广播原创母版；录音原创资产；音频下载或面向听众的流媒体；发射和订阅分发服务；设备制造；排期咨询 |
| representative_product | 验收合格的电台每日频道节目编排 |
| production_route | 节目接收核验 → 编排与衔接 → 按需直播 → 交付检查与交接 |
| market_state | 一个已明确电台、日期、版本和接收方的完整每日编排交付 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 向其他分发方提供电台一个完整播出日的节目集合 |
| How much | 1份完整每日编排，按实际日程涵盖全部计划节目 |
| How well | 节目顺序、时间、引用可用性、直播接口、音频和元数据均符合接收方记录的验收规范 |
| How long or cycle | 一个明确起止时间和时区的电台播出日；记录实际时长，不默认24小时；重播和留存期另行记录 |
| reference_flow_link | reference_product_daily_lineup |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格的电台每日频道节目编排 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | 件 |
| 必需限定信息 | 电台与编辑服务；日期、时区、起止时间、实际时长；语言；编排版本与资产列表；录播和直播比例；广告版本；格式、采样率、声道和音量策略；版权及复用范围；交接点及接收验收；制作与分发分界；地域和电压；存储期限与共享分摊；设备及原创资产边界 |

件与公开单位组的 Item(s) 表示相同的单个计数单位。只有完整每日编排通过验收才能计为一件；重新传输同一版本不增加编排件数。必需限定信息必须进入数据包；权利描述限定可用交付，不是物理质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | 件 | 用 cp_delivery 采集一份完整验收日编排的身份和时间；所有清单均为每声明的参考流。实际时长限定交付，不作质量转换。 |
| `electricity_unit` | ingest_electricity, schedule_electricity, live_electricity, handoff_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开主属性及能量单位组 93a60a57-a3c8-11da-a746-0800200c9a66；真实电表kWh乘3.6转换为MJ。不可将GB、CPU小时或音频秒数直接当能量。 |
| `service_count` | source_programme_master, hosted_playout_day, contribution_link_day | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | 件 | 分别限定一份已批准音频节目母版、一个已定义的每日托管播出包、一个每日贡献链路交付包。以实际合同和活动记录核对；费用与数据流量不能独立决定交换量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别且有权使用的节目母版或实际直播贡献在编排方接收点可用 |
| starting_condition_role | 前景制作输入；新原创制作是单独上游模块，可由内部团队提供但须单独归属 |
| product_classification_scope | 完整每日广播频道节目集合，供他人分发 |
| recursive_input_rule | 已编排节目集合若用于重编，只计一次实际输入及增量编排，不递归重建原日编排 |
| upstream_dataset_requirement | 匹配原始内容、外购电力、外包托管和贡献链路的代表性数据集；声明是否包含设备与设施制造 |
| disclosure | 该前景从接收核验至完整每日交接；缺失上游和资本设备时不能宣称完整从摇篮到大门；列明实测能耗、上游原件边界、分摊、存储、未测活动和排除项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_delivery` | daily assembly | 纳入接收、资产校验、编排、衔接、所需存储、实际直播混合、验收和向分发方交接。包括失败交接重试与真实返工能耗。 | `unsd-cpc3-2025`; `ebu-radio-workflow-2023` |
| `sb_separate_distribution` | downstream | 交接点以外的FM/DAB发射、用户网络分发、听众播放和终端制造单独建模，不并入频道集合；若组织同时经营，按接口记录拆分。 | `unsd-cpc3-2025`; `ebu-radio-workflow-2023` |
| `sb_actual_resources` | facilities and supporting activities | 纳入实测或可解释归属的工作站、服务器、播出设备、存储和冷却供电及制作支持照明。设备与设施制造、员工通勤、长期档案为默认边界外项，须披露。现场直接燃烧、制冷剂泄漏、耗材或设备更换若实际归属制作则须扩展为独立原子行并采集；没有证据不设必然排放。 | `ebu-radio-workflow-2023` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `programme_ingest` | 节目接收与核验 | required | 所有交付；文件和直播接收按实际路线 | 前景制作 | 1 件完整每日编排 |
| `lineup_assembly` | 每日编排与衔接 | required | 全部已批准节目和衔接安排 | 前景制作 | 1 件完整每日编排 |
| `live_contribution` | 直播贡献制作与混合 | conditional | 仅实际前景直播操作 | 前景制作 | 1 件完整每日编排 |
| `delivery_handoff` | 验收、存储与交接 | required | 完整每日编排交付给他人 | 前景制作 | 1 件完整每日编排 |

### 过程：节目接收与核验 (`programme_ingest`)

#### 输入

##### 产品流

###### 已批准音频节目母版 (`source_programme_master`)

有录播内容时纳入；每个具体母版与版本分别记录，不以版权费用代表生产负担。直播自产内容不再记作外购母版。

- 选定流： 已批准音频节目母版
- 流属性/单位： 物品数量 / 件
- 数量规则： 实际节目母版的归属份额；每声明的参考流
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_assets`
- 来源： `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

###### 交流电 (`ingest_electricity`)

记录本工序及其可归属支持设备的实测用电，按 cp_energy 计量。该UUID仅适用于中国、到用户的电网平均组合且交付电压<1 kV；其他地域或电压须独立选取匹配身份，不得沿用。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 / MJ
- 数量规则： 本工序归属电表kWh按 electricity_unit 转为MJ；每声明的参考流
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源： `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

### 过程：每日编排与衔接 (`lineup_assembly`)

#### 输入

##### 产品流

###### 交流电 (`schedule_electricity`)

记录本工序及其可归属支持设备的实测用电，按 cp_energy 计量。该UUID仅适用于中国、到用户的电网平均组合且交付电压<1 kV；其他地域或电压须独立选取匹配身份，不得沿用。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 / MJ
- 数量规则： 本工序归属电表kWh按 electricity_unit 转为MJ；每声明的参考流
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源： `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

### 过程：直播贡献制作与混合 (`live_contribution`)

#### 输入

##### 产品流

###### 交流电 (`live_electricity`)

记录本工序及其可归属支持设备的实测用电，按 cp_energy 计量。该UUID仅适用于中国、到用户的电网平均组合且交付电压<1 kV；其他地域或电压须独立选取匹配身份，不得沿用。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 / MJ
- 数量规则： 本工序归属电表kWh按 electricity_unit 转为MJ；每声明的参考流
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源： `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

本工序仅处理实际直播衔接与混合。复杂现场采录、新闻采访、出行或活动制作须归入独立原创贡献模块，并链接其清单；不把全部直播内容假设为纯工作站音频。

### 过程：验收、存储与交接 (`delivery_handoff`)

#### 输入

##### 产品流

###### 交流电 (`handoff_electricity`)

记录本工序及其可归属支持设备的实测用电，按 cp_energy 计量。该UUID仅适用于中国、到用户的电网平均组合且交付电压<1 kV；其他地域或电压须独立选取匹配身份，不得沿用。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 / MJ
- 数量规则： 本工序归属电表kWh按 electricity_unit 转为MJ；每声明的参考流
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_energy`
- 来源： `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

###### 每日托管播出交付包 (`hosted_playout_day`)

仅外包存储及播出时纳入一项明确服务；合同说明音频版本、期限、冗余和系统边界。若供应商已含电力、冷却及硬件负担，本地不得重复添加；内部自营不使用此行。

- 选定流： 每日托管播出交付包
- 流属性/单位： 物品数量 / 件
- 数量规则： 记录实际交付的合同包归属数量；每声明的参考流
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_services`
- 来源： `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

###### 每日贡献链路交接包 (`contribution_link_day`)

仅实际外包将编排或直播信号送至分发方交接接口时纳入；是一个明确贡献链路服务，不包括观众网络。需供应商原始活动数据；传输GB不能直接换算kWh。

- 选定流： 每日贡献链路交接包
- 流属性/单位： 物品数量 / 件
- 数量规则： 记录实际交付的合同链路包归属数量；每声明的参考流
- 数值来源模式： 前景记录 (`foreground_record`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_services`
- 来源： `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

#### 输出

##### 产品流

###### 验收合格的电台每日频道节目编排 (`reference_product_daily_lineup`)

完整已验收每日编排的唯一输出。保留节目表、资产引用、直播接口和验收记录；交付重试不增加产量。

- 选定流： 验收合格的电台每日频道节目编排
- 流属性/单位： 物品数量 / 件
- 数量规则： 1 件
- 数值来源模式： 固定值 (`fixed_value`)
- 适用范围： 场址特定 (`site_specific`)
- 归一化基准： 每声明的参考流
- 基准类型： 参考流 (`reference_flow`)
- 证据类型： 采集记录 (`collected_record`)
- 采集协议： `cp_delivery`
- 来源： `ebu-radio-workflow-2023`; `unsd-cpc3-2025`

本清单不预设直接基础流排放或物理废物：删除音频文件不是物质废物流，外购电力的电厂排放属于上游。实际现场燃烧、制冷剂损失或耗材废弃不得遗漏，应在构建具体数据包时按 sb_actual_resources 独立扩展并核验；没有实测证据时不套用制造业排放清单。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_metering` | shared equipment | 优先独立计量和任务分离；共用电表用实测任务功耗与运行时间归属，不能用售价或听众数臆配。cp_energy记录活跃、待机、存储保留、冷却及其他用户份额，分摊和必须覆盖实测总量。待机按记录的预留使用时间分配并做敏感性分析。 |  |
| `alloc_original_reuse` | source_programme_master | 将原始制作清单单独保存。cp_assets定义完整且不重叠的已证实复用集合，并记录各日的归属权重，总和为一；同等完整使用可按已证实次数等分，不预设次数或寿命。片段使用须有时长与制作因果关系依据；未证明时保留审查。权利交易不免除内容负担，也不得每次播放再加全部原始成本。 |  |
| `alloc_variants` | line-up variants and retries | 分离语言、广告、地域版本及独立输出的增量任务。共用编排负担按记录的实际作业关系分摊，不能将母版、清单表和验收回执当三件共产品；失败重试的负担归入已交付编排。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | delivery_handoff | reference product | 验收记录 | 电台；日程版本；日期；时区；起止时间；实际时长；资产完整性；接收方；验收结果 | 逐日与资产清单、文件校验及交接日志对照，仅计完整已验收版本 | 件 | 每次完整交付 | 整个编排生产和交接期 | 编排方及交接接口 | 每声明的参考流 | 接收验收与完整性记录 |
| cp_energy | programme_ingest; lineup_assembly; live_contribution; delivery_handoff | electricity | 电表和作业记录 | 电表起止kWh；设备；任务；运行和待机时间；地域；电压；冷却；存储期限；共享权重 | 经核验电表和设备功耗采样结合任务日志，去除重叠，计入返工与可归属支持耗能 | kWh | 每工序或时间间隔 | 包括编排准备、交接及所需存储期 | 声明的场址及自营设备 | 每声明的参考流 | 校准、完整电表平衡及共享任务账本 |
| cp_assets | programme_ingest | source programme | 资产和上游清单记录 | 每个母版ID与版本；原始制作清单；复用集合；该日归属份额；时长；使用权 | 核对实际节目资产表与独立原创清单，完整使用和片段使用分别保留依据 | 件 | 每母版及编排 | 编排涉及的制作与复用期 | 实际来源制作方及编排方 | 每声明的参考流 | 原始制作数据集与不重复归属审计 |
| cp_services | delivery_handoff | external service | 合同交付和供应商原始数据 | 具体包ID；服务类型；日程；期限；容量；流量；供应商能耗；硬件边界；共享归属；接收回执 | 分别核对实际托管包与贡献链路包，交付回执和供应商清单；流量仅作容量核对，不作默认能量换算 | 件 | 每合同包 | 完整合同服务期 | 声明的实际供应商 | 每声明的参考流 | 服务边界、供应商原件与电力不重复账本 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `energy_conversion` | ingest_electricity, schedule_electricity, live_electricity, handoff_electricity | 每声明的参考流，实测归属kWh乘3.6得到MJ；四工序用电必须不重叠，校验其和与归属电表总量。 | cp_energy | MJ，每声明的参考流 |  |
| `asset_attribution` | source_programme_master | 每声明的参考流，记录各具体母版的实测归属份额并链接其独立原始制作清单；全复用集合权重之和必须为一，保持片段关系证据。 | cp_assets | 母版份额，每声明的参考流 |  |
| `service_attribution` | hosted_playout_day, contribution_link_day | 每声明的参考流，使用实际合同包数量及证实共享份额；链接匹配的供应商清单，不使用GB到能量的默认系数。 | cp_services | 合同包份额，每声明的参考流 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference_product_daily_lineup | 每日交付完整且可识别，实际时长、录播直播比例、版本和复用权明确；整日交付不能用单个节目代替。 | cp_delivery; unsd-cpc3-2025 |
| `dq_technical` | audio and handoff | 记录接收方的格式、完整性及音量策略验收。只有声明采用EBU策略时按声明版次核验，不将其作为全球强制规范。 | cp_delivery; ebu-radio-workflow-2023 |
| `dq_representative` | all inventory rows | 单日实例仅代表该实例；声称频道代表值须覆盖工作日、周末、重播与直播差异及声明期间，保留逐日分布。不得设默认能耗。 | cp_delivery; cp_energy |
| `dq_missing` | all inventory rows | 缺测、供应商无原始清单、复用份额未证实、身份未解决均为明确缺口，不能写为零。 | cp_assets; cp_services; cp_energy |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference` | reference product | 确认唯一完整每日输出、计数单位、实际时间、验收和全部限定信息；其他产品边界的数据包不适用。 | `unsd-cpc3-2025` |
| `vr_energy` | electricity rows | 检查电表总量与归属、3.6转换、电压和地域；供应商服务已含的电力不可再次记账。 |  |
| `vr_originals` | source assets and services | 检查原始制作与复用权重、接口边界、合同包的实际单位和活动原件；计数不能取代供应商物理清单。未证实份额要求审查。 |  |
| `vr_completeness` | whole dataset | 逐工序检查必需及实际条件活动。缺口与默认排除必须可见；上游或设备制造缺失时不能称完整生命周期。只有实际直接发生且身份和环境介质核实的基础流才加入，不从电网排放推定现场排放。 | `ebu-radio-workflow-2023` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整每日频道编排的前景制作数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 边界和技术配置相同的频道交付建模；与独立分发、播放模块衔接 |
| excluded_use | 单个原创作品、下载、听众小时、发射覆盖、软件或硬件生产的替代数据；无上下游证据的完整生命周期声称 |
| required_metadata | 全部参考限定信息、工序覆盖、地域、电压、实测供电、原创及服务数据集、复用集合、归属方法、条件活动、交接验收 |
| required_quality_disclosure | 计量不确定性、抽样代表性、缺失供应商原件、未解决身份、设备边界、原始复用及闲置分配敏感性 |
| update_trigger | 日程或版本、录播直播比例、服务供应商、系统/电力条件、存储保留、原始复用集合或交接规范改变 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, PDF/printed p.444. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 整日节目集合与原创资产、广播服务的类别边界；不提供计量系数 |
| ebu-radio-workflow-2023 | official_guidance | European Broadcasting Union, Tech 3401, November 2023, §2 Figure 4 p.7; §§3–4 pp.8–10. https://tech.ebu.ch/docs/tech/tech3401.pdf | 制作与分发接口及音量元数据；不是能耗或通用音频门槛证据 |
