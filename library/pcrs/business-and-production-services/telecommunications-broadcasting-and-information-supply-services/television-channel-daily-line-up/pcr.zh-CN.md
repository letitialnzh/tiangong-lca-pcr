---
pcr_id: pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.television-channel-daily-line-up
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电视频道每日节目编排集合

## 1. 范围与适用性

适用于供他方分发的一个电视频道每日节目编排集合，包括取得的节目、直播信号、广告及台标等实际组成，采用文件、实时信号或混合交付。每日集合以频道的实际播出日及其完整计划窗口定义，不预设全天 24 小时播出。参见 `cpc-tv-lineup-2025` 第 444 页。单个电视广播原创、电影原创、面向用户下载、流媒体内容、无线播出及用户订阅分发服务不作为本参考产品。

电视特有的视频格式适配、音画同步、多音轨及字幕可用性、质检和最终频道编排完整性构成方法需求。音频频道的方法只能复用通用计量协议，不能代表电视配置和验收；原创制作方法可支持上游素材，但不覆盖频道每日编排交付。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.telecommunications-broadcasting-and-information-supply-services.television-channel-daily-line-up |
| classification_refs | CPC 3.0 84622 |
| covered_products | 文件、实时信号及混合交付的完整每日电视频道编排 |
| excluded_products | 单个原创、纯许可交易、观众侧分发和观看、设备制造 |
| representative_product | 电视频道每日节目编排集合 |
| production_route | 素材接收与核对 → 编排及必要适配 → 质检 → 向分发方验收交付 |
| market_state | 具备声明的复用权与交付条件、经接收方验收的版本化每日编排 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 向他方分发者提供可分发的完整电视频道每日节目编排 |
| How much | 一个频道一个声明播出日的完整编排集合 |
| How well | 按当前合同记录画面格式、帧率、声道、同步、字幕、权利及质检验收，不设通用合规批准 |
| How long or cycle | 一个声明的频道播出日窗口；记录起止时刻、时区、实际时长及重播 |
| reference_flow_link | reference_product_lineup |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 电视频道每日节目编排集合 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 频道；播出日窗口与时区；编排版本；所有内容及来源版本；视频和音频配置；字幕；复用权；交付端点与路线；验收；设备及上游边界 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_reference | reference product | 物品数量 | item | item 是公开单位 Item(s) 的显示简写；1 件为一个完整频道日编排，不是一个节目、一位观众或一份权利。不得以质量替代。 |
| electricity_measurement | electricity_lv; electricity_mv; electricity_other | 能量；UUID 行保留净热值 | MJ | 采用 cp_energy；电表 kWh 转为 MJ 时 1 kWh = 3.6 MJ。网络 GB、节目时长和价格不能直接换算为电力。 |

电力 UUID 行的基准属性为净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`，单位组为 `93a60a57-a3c8-11da-a746-0800200c9a66`（参考 MJ）。这是公开身份的能量计量属性，不表示电力发生燃烧。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 取得并可用于编排的版本明确的节目原件及实时信号；供应商制作边界已披露 |
| starting_condition_role | foreground_start |
| product_classification_scope | 供他方分发的每日电视频道节目集合 |
| recursive_input_rule | 同类既有编排作为来源输入时登记来源版本、实际使用份额及已含边界，避免递归重建或重复归属 |
| upstream_dataset_requirement | 外购内容、质检、传送、电力及纳入的设备须关联边界匹配的上游数据集；无数据时报告缺口 |
| disclosure | 前景起点至验收交付；完整上游及设备未证明前不得声称完整 cradle-to-gate |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_handoff | 纳入接收、编排、重做、必要转码、音画同步检查、字幕轨核对、实际存储及交付前监看/播出。向他方交付后的编码分发、观众设备与观看不在本前景。 | cpc-tv-lineup-2025; bbc-file-quality-2020 |
| boundary_route | 无需转码的直通素材不得虚加转码；实时路由必须记录实时监看及实际资源。合同要求不同则保留配置差异。 | bbc-file-quality-2020 |
| boundary_physical | 不假定燃烧、制冷剂泄漏、用水或物理废物为节目编排必然交换。实际发生时按明确物质、介质、实测数量逐行扩展；电网排放由上游电力承担。 | cpc-tv-lineup-2025 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| assembly | 素材接收与每日编排 | required | 全部路线 | foreground_production | 1 item |
| quality_handoff | 视听核对、适配与交付 | required | 全部路线；转码及外包仅实际发生时 | foreground_production | 1 item |
| utility_support | 计量与设备支持 | required | 实际设施；供电行按电表选择且不重复 | foreground_production | 1 item |

### 过程：素材接收与每日编排（`assembly`）

采用作业日志、编排清单和验收记录确认实际工序；该过程电力统一计入 utility_support，避免重复。

#### 输入

##### 产品流

###### 供频道编排使用的电视广播原创节目 （`programme_original`）

逐一记录每个取得的原创节目及版本。这是技术圈内容投入，不是许可价格。依披露的实际复用计划归属原创制作份额，不得在每天重播时重复计入完整原创制作。

- 选定流：供频道编排使用的电视广播原创节目
- 流属性/单位：物品数量 / item
- 数量规则：按 cp_content 采集每声明的参考流的实际归属数量；无默认数值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_content`
- 来源：`cpc-tv-lineup-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：视听核对、适配与交付（`quality_handoff`）

采用作业日志、编排清单和验收记录确认实际工序；该过程电力统一计入 utility_support，避免重复。

#### 输入

##### 产品流

###### 电视节目文件质量检查服务 （`qc_service`）

仅在实际外购质检时使用；一件是合同定义的一次完整质检交付。记录文件范围、修订版及验收报告；若服务数据集已包括供应商电力，公用设施行不再计入该电力。

- 选定流：电视节目文件质量检查服务
- 流属性/单位：物品数量 / item
- 数量规则：按 cp_services 采集每声明的参考流的实际归属数量；无默认数值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：`cpc-tv-lineup-2025`

###### 电视频道信号贡献链路传送服务 （`handoff_service`）

仅在使用外部贡献链路向验收分发方传送时使用；一件是一次定义明确的完整传送会话。记录端点、信号时长、冗余和日志。排除分发方向观众的传输。

- 选定流：电视频道信号贡献链路传送服务
- 流属性/单位：物品数量 / item
- 数量规则：按 cp_services 采集每声明的参考流的实际归属数量；无默认数值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_services`
- 来源：`cpc-tv-lineup-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 电视频道每日节目编排集合（`reference_product_lineup`）

此输出是由他方分发者验收的完整频道日编排；以 cp_acceptance 核对窗口、素材、配置及版本。

- 选定流：电视频道每日节目编排集合
- 流属性/单位：物品数量 / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`cpc-tv-lineup-2025`

##### 废物流

##### 基本流

### 过程：计量与设备支持（`utility_support`）

采用作业日志、编排清单和验收记录确认实际工序；该过程电力统一计入 utility_support，避免重复。

#### 输入

##### 产品流

###### 交流电 （`electricity_lv`）

仅用于已记录电表处实际中国电网平均用户端供电且供电电压低于 1 kV 的情况。包括归属的接收、编排、视频适配、监看、存储、交付前播出及设施支持电力。电压是供电电表电压，不是工作站适配器电压。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 / MJ
- 数量规则：按 cp_energy 采集每声明的参考流的实际归属数量；无默认数值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`cpc-tv-lineup-2025`

###### 交流电 （`electricity_mv`）

仅用于实际中国电网平均用户端 1–35 kV 供电。对同一电表供电不得与低压消费重复计入；该测量边界内包括场内下游变压损耗。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：按 cp_energy 采集每声明的参考流的实际归属数量；无默认数值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`cpc-tv-lineup-2025`

###### 场址供电电表处供应的交流电 （`electricity_other`）

仅用于实际供电不属于上述两种中国电网平均电压情形时。说明实际地域、电压与供电路线，并取得匹配的上游数据集；没有证据不得用中国身份替换该未解决身份。

- 选定流：场址供电电表处供应的交流电
- 流属性/单位：能量 / MJ
- 数量规则：按 cp_energy 采集每声明的参考流的实际归属数量；无默认数值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`cpc-tv-lineup-2025`

###### 广播播出服务器 （`server_share`）

仅在研究声明纳入资本设备时使用。一件是实际完整的指定服务器配置。按 allocation_equipment 中有依据的完整安装服务期或相符累计服务分母及持续制造份额台账归属生产数据集。观察期间只分配已论证归属该期间的制造份额，不重置整台服务器生产负担。服务分母或台账覆盖未知时须审查，不得给出最终归属数量；不设默认寿命。实际存在的监视器、存储阵列及更换部件须拆为独立配置明确的交换。

- 选定流：广播播出服务器
- 流属性/单位：物品数量 / item
- 数量规则：按 allocation_equipment 和 cp_equipment，将真实服务器数量乘以有依据且归属本声明参考流的无量纲制造份额；未知份额保留审查，无默认数值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_equipment`
- 来源：`cpc-tv-lineup-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocation_resource | 优先单独计量。共享工作站、服务器、存储、监看及设施电力采用实测作业耗用或由日志验证的资源占用进行归属；记录总电量、所有占用者、分配分母、空闲与冗余处理并核对总和。GB 不等于 kWh，不按售价或观众数臆配。 |  |
| allocation_content | 取得原创节目的使用权不是物理生产量。按 cp_content 披露原创的独立生产数据集、各版本及实际使用/复用计划所归属的份额；无可信复用分母时报告上游缺口及敏感性，不把全部原创制作重计到每次重复交付。 | cpc-tv-lineup-2025 |
| allocation_versions | 主版本、重做及真实冗余交付的资源均纳入；多频道、多语言和多配置版本采用可解释的实际资源归属。不得把未完成编排计作完整产出。 |  |
| allocation_equipment | 按 cp_equipment 为同一资产保留单一制造边界及覆盖全部项目、期间和受益者的持续台账。份额采用真实可归属服务活动除以有依据的完整安装服务期或相符累计服务分母，活动单位须一致；经论证预测须附敏感性分析及后续核对。累计已分配制造份额不得超过一。观察期间内只分配已论证归属该期间的制造份额，不重新投入整件资产生产负担。分母、既往份额或台账覆盖未知时须审查，不得给出最终归属制造数量或完整设备覆盖声明。这是前景核算控制，不规定数值寿命或分类因子。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_content | assembly | programme_original | asset ledger | 素材编号；版本；来源；原件制作数据集；实际复用计划；归属份额；权利范围 | 核对接收清单、合同与真实复用日志，不把价格当数量 | item | 逐素材 | 同一频道日及其真实复用期间 | 来源和接收设施 | 每声明的参考流 | 完整素材版本清单及分母证据 |
| cp_services | quality_handoff | qc_service; handoff_service | supplier record | 供应商；交付定义；会话；端点；配置；能耗覆盖；验收 | 核对合同、供应商数据集、交付日志及已含范围 | item | 逐交付 | 声明频道日 | 外部质检和贡献链路 | 每声明的参考流 | 报告及防重复边界核对 |
| cp_energy | utility_support | electricity_lv; electricity_mv; electricity_other | meter record | 电表；地域；供电电压；路线；起止读数；作业及所有占用者；空闲；存储；冷却；冗余；单位 | 经校准电表与作业日志同步采集，核对共享归属、整站损耗和供应商已含电量 | MJ | 各作业与计量间隔 | 包含完整声明频道日、准备及重做 | 实际工作站、服务器与设施电表 | 每声明的参考流 | 电表校准、发票和电量归属总和 |
| cp_equipment | utility_support | server_share | equipment record | 持续资产编号；服务器配置及件数；上游制造边界；真实可归属服务活动及单位；有依据完整安装服务期或相符累计服务分母；全部项目/期间/受益者；既往份额；本次无量纲份额；已论证期间制造份额；累计已分配/剩余份额；预测敏感性及后续核对 | 以有支持总服务分母核对同资产清单和完整使用/分配台账；累计制造份额不超过一，各期分配不超过其先前已论证份额。分母或台账覆盖未知须审查，不假定寿命或重置 | item; dimensionless share; actual service activity units | 逐资产及研究期，并更新累计台账 | 声明频道日观察期及有依据完整/累计服务期间 | 声明纳入的资本设备；保留全部受益期间 | 每声明的参考流 | 资产身份/配置、有支持分母、累计守恒及期间份额证据 |
| cp_acceptance | quality_handoff | reference_product_lineup | acceptance record | 频道；日期；时区；窗口；版本；素材；持续时间；格式；声轨；字幕；权利；缺段；重做；接收方 | 核对最终编排、文件或实时信号、验收日志及当前交付规格，记录完整性 | item | 逐频道日 | 完整声明日及相关准备 | 编排设施至他方交付端点 | 每声明的参考流 | 签收、视听质检与完整窗口核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| energy_conversion | electricity_lv; electricity_mv; electricity_other | 归属的电表电量以每声明的参考流表达；kWh 转 MJ 使用 3.6，保留原记录，不以流属性名称臆造其他转换。 | cp_energy | 每声明的参考流的 MJ |  |
| count_complete | reference_product_lineup | 一个验收完整频道日计为 1 item；同一交付重复文件不增加参考产出。 | cp_acceptance | 1 item | cpc-tv-lineup-2025 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_configuration | all inventory rows | 覆盖全部真实路由及必需质量配置，不用最易处理片段替代完整频道日；当前合同决定验收。 | cp_acceptance; bbc-file-quality-2020 |
| quality_energy | electricity_lv; electricity_mv; electricity_other | 使用同期实际地域和供电电压，披露共享资源归属、未测范围及供应商已含负荷。 | cp_energy |
| quality_upstream | programme_original; server_share | 披露原创及设备生产覆盖和复用/服务期证据；未覆盖不能标为零。 | cp_content; cp_equipment |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_reference | 参考名与输出行相同；输出为 1 item 完整频道日；素材、时区、窗口、版本、权利和验收缺失时参考定义不完整。 | cpc-tv-lineup-2025 |
| validate_inventory | 每行只有一个交换；按真实供电选择行且不重复；上游排放不得冒充直接基本流；无身份或无测量不得假定有数据。 |  |
| validate_boundary | 核对素材制作、外包服务、设备和传输的数据集边界及归属总和；前景交付结果不自动等同全生命周期或方法学批准。 |  |
| validate_equipment | 对 server_share 核验相同配置、有支持完整服务分母及覆盖全部受益者/期间的持续台账；累计制造份额不得超过一，期间内分配不得超过已论证期间份额。拒绝按每个播出日/项目/期间重置制造负担。分母或既往份额覆盖未知时须审查，不得给出最终设备归属或完整设备覆盖声明。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 频道每日编排至他方验收交付的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 配置及窗口匹配的下游分发模型输入；披露边界下的编排路线比较 |
| excluded_use | 自动代表单个原创作品、广播传输、用户观看、全部生命周期或许可经济价值 |
| required_metadata | 频道、播出日、窗口/时区、版本、路由、视听配置、权利、验收、供电、原创与设备边界 |
| required_quality_disclosure | 计量覆盖、共享归属、复用分母、缺失上游、未解决身份、历史技术证据限制 |
| update_trigger | 配置、路由、供应商、编排窗口、供电或真实资源耗用改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc-tv-lineup-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes (30 June 2025), p. 444. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 类别及原创、每日编排、广播/分发之间的边界；无数量系数 |
| bbc-file-quality-2020 | standard | BBC, Technical Specification for the Delivery of Television Programmes as AS-11 Files, BBC File v5.1.0 (2020), p. 22, §§3.3–3.5. https://downloads.bbc.co.uk/scotland/commissioning/TechnicalDeliveryStandardsBBCFile.pdf | 仅为历史 AS-11 文件质检及合规验收实例；不是现行普遍门槛或频道日能耗。数据生产采用当前真实交付协议。 |
