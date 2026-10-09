---
pcr_id: pcr.business-and-production-services.brand-assets.registered-trademark-franchise-original
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 自行形成并登记的商标与特许原始资产


## 1. 范围与适用性

本 PCR 覆盖自行形成、具有特定品牌名称法定登记所有权，且意在通过允许他人使用而获益的原始商标与特许资产（un-cpc3-trademarks）。覆盖文字、图形及其他实际登记标识，以及经销、生产加工或商业模式特许的原始资产；资产不是每次许可。以一套版本、登记范围和体系内容明确的完整资产包作为生产参考，不按权利价值、收入、用户、下载、注册件数或虚构物理质量计量。

排除许可服务、通向被标记产品/概念的研发、营销渠道咨询和日常权利管理；也排除独立软件、数据、设计、艺术原件及复制品/广播产品。图形设计和研发原件可作为实际输入，但不能由其方法替代品牌所有权与特许体系形成边界。登记确立身份，环境负荷来自实际活动，不是法律权利本身。经营者根据真实记录划定资产形成期，纳入失败尝试、返工和初始建牌活动；后续常规经营、推广、许可支持和加盟门店商品生产另划范围。不得只计登记按键而宣称完整资产生产。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.brand-assets.registered-trademark-franchise-original |
| classification_refs | CPC 3.0 83960 |
| covered_products | 自行形成并登记的原始商标及特许资产；各实际登记标识与特许类型 |
| excluded_products | 许可、权利管理、渠道咨询、研发服务；独立设计/软件/数据/艺术原件及复制品 |
| representative_product | 已登记商标与特许原始资产包 |
| production_route | 真实资产定义与检索 → 标识/品牌及适用特许体系形成 → 登记及档案 → 版本完成与首次交付；记录实际迭代与外包 |
| market_state | 具有法定登记所有权且内容/版本完整、供声明的他人使用获益意图的原始资产；不声称获环境或合规批准 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 形成一套可识别的原始商标或特许资产 |
| How much | 一个已完成、指定版本和登记范围的资产包 |
| How well | 声明所有者、标识、地域/类别、登记凭据、原创来源、完整内容、特许类型与专有知识/手册条件、使用/复用权和局限 |
| How long or cycle | 一个真实形成周期至登记与初次交付截止点；无默认商业寿命或许可期限 |
| reference_flow_link | reference_product_original |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已登记商标与特许原始资产包 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 资产/项目编号；版本及完整包内清单；自行形成与供他人使用意图；登记所有者、标识、地域、商品/服务类别及状态证据；特许类型与体系内容；原创/既有资产来源；权利与复用限制；形成日期/截止点；迭代及失败归属；真实地域与供电电压；设施/外包/初始交付边界；上游完整性 |


上述限定信息须随数据包交付。一件是声明完整资产包的计数，简写 item 与公开 Item(s) 为同一数量单位；不证明不同品牌、类别组合或特许体系功能等价。一个包可含若干登记件，但不得以登记件数替换包产量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_asset 按内容与登记凭据验收一个完整指定版本；item 为 Item(s) 的同值显示简写。 |
| same_reference | 所有清单行 | 资产包计数 | item | 每个交换量与采集汇总均按每声明的参考流；交换分子保持其实际单位，不以金钱、许可、字节或质量换算资产。 |
| energy_unit | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | cp_energy 采集真实 kWh；1 kWh = 3.6 MJ，保持同一供电接口。设备预订时间或网络 GB 不能直接当作电量。 |
| hardware_mass | portable_computer_share | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_hardware 用校准秤或可追溯净质量记录确认同一完整配置，排除运输包装；设备份额不能由售价推导。 |


质量属性对应千克单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；净热值属性对应 MJ 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`。物品数量与上述物理量互不替换。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实原始资产形成项目起点；声明继承品牌、设计、研发成果、工具与设备及既有库存 |
| starting_condition_role | 前景资产形成，显式关联上游供给 |
| product_classification_scope | CPC 3.0 83960 |
| recursive_input_rule | 继承商标/特许原始资产按一次明确复用输入关联其上游负荷与受益者台账；内部展开同一负荷则替代输入行 |
| upstream_dataset_requirement | 实际供货状态、地域/年份、设备配置、服务商交付与包含范围、废物接收/处理；缺失层不得当作零 |
| disclosure | 资产内容、登记范围、形成期与活动归属、失败尝试、内外部边界、初始存储/传输、设施遗漏；前景边界不等于完整 cradle-to-gate |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| formation | 所有过程 | 纳入实际规格/检索、标识与建牌活动、适用特许知识体系形成、登记、版本整理及首次交付。形成截止点由项目/登记/验收原件共同界定，不能默认只含电子申请。 | un-cpc3-trademarks; wipo-franchise-2019 |
| routes | 所有实际路线 | 按真实活动账建立路线到交换的完整台账。列示纸张、手册、活动制作与便携计算机为有条件具体行，并非缩小类别。实际印刷、其他标识媒介、试验、差旅、加热/冷却、水、服务器、场地和外包技术圈交付必须分别展开为适用原子交换；未经展开不得宣称完整。 | un-cpc3-trademarks; wipo-franchise-2019 |
| later_activities | 资产及后续利用 | 分别建模后续许可/权利管理、日常推广、加盟培训支持、复制下载、长期托管、门店运行、被标记商品制造与消费；初始交付定义实际存储/网络活动范围，网络 GB 不换算为默认 kWh。原始资产形成负荷只保留一次。 | un-cpc3-trademarks; wipo-franchise-2019 |
| provider_scope | 自有及服务商资源 | 一份有实际范围的外购交付作为一个技术圈服务产品；取得其活动与上游依据。若已含电力/设备/制作则不再重复自有行；仅有费用或报告计数而缺服务商清单不能建立完整上游环境结果。 | gsf-sci-1-1-0 |
| direct_releases | 基础流 | 不假定电子资产形成直接排放。对实际燃烧、印刷、材料加工、制冷剂逸散和废水操作逐项筛查；有实测或可靠因素证据时分别建立明确物质、化石/生物来源、介质/子介质、状态和数量的基础流。技术圈水和废物与资源水分开；电力/设备上游排放保留在上游数据集。 | gsf-sci-1-1-0 |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| definition | 资产规格与检索 | required | 所有资产；外包检索仅在实际采购时 | 前景资产形成 | 每声明的参考流 |
| development | 品牌与特许资产形成 | required | 所有资产；声明实际标识、建牌活动和特许体系路线 | 前景资产形成 | 每声明的参考流 |
| registration | 所有权登记与档案 | required | 实际完成所有权法定登记；纸质路线有条件纳入 | 前景资产形成 | 每声明的参考流 |
| completion | 资产完成与首次交付 | required | 所有资产截至指定版本和截止点 | 前景资产形成 | 每声明的参考流 |
| support | 共享计算基础设施 | conditional | 创制中使用自有设备；服务商设备留在服务商范围 | 前景资产形成 | 每声明的参考流 |


### 过程：资产规格与检索 (`definition`)

#### 输入

##### 产品流

###### 交流电 (`definition_electricity`)

仅用于本阶段实际中国用户端低于 1 kV 的电网平均供电。按适用情况计量工作站、初始存储/传输及可归属冷却，防止共享电表重复计入；其他地域或电压须采用另行核验的交换。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将每声明的参考流可归属实测电量从 kWh 换为 MJ；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：`gsf-sci-1-1-0`

###### 商标在先权检索报告 (`clearance_report`)

有条件纳入为声明标识、商品/服务类别及地域采购的报告。其为有服务商范围说明的一份交付报告，不代表可注册保证或特许费支付。

- 选定流：商标在先权检索报告
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按每声明的参考流统计实际可归属的限定范围报告数量；cp_services。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_services`
- 来源：`un-cpc3-trademarks`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：品牌与特许资产形成 (`development`)

#### 输入

##### 产品流

###### 交流电 (`development_electricity`)

仅用于本阶段实际中国用户端低于 1 kV 的电网平均供电。按适用情况计量工作站、初始存储/传输及可归属冷却，防止共享电表重复计入；其他地域或电压须采用另行核验的交换。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将每声明的参考流可归属实测电量从 kWh 换为 MJ；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：`gsf-sci-1-1-0`

###### 原创图形标识设计包 (`design_original_input`)

有条件纳入形成品牌时使用的单独取得或既有图形原件。声明创作者、版本与复用份额；若内部设计在此展开则替代本交换。文字、声音等其他标识不强制采用图形设计。

- 选定流：原创图形标识设计包
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按每声明的参考流记录原件包归属份额；cp_services。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_services`
- 来源：`un-cpc3-trademarks`

###### 品牌建立活动制作交付件 (`campaign_delivery`)

有条件纳入原始资产形成期实际外包的建牌活动制作交付件，明确媒介、内容、验收与内含制作范围。后续日常推广另划边界；服务商未含的传播、出行或场地运行须按实际分别建立原子交换。

- 选定流：品牌建立活动制作交付件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按每声明的参考流记录实际可归属活动交付份额；cp_services。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_services`
- 来源：`un-cpc3-trademarks`

###### 特许经营操作手册编制交付件 (`manual_delivery`)

有条件纳入商业模式特许体系指定版本操作手册的外包编制。经销或生产加工特许声明其实际专有知识/体系规格，操作手册不普遍强制。内部编制归入开发电力与实际资源行。

- 选定流：特许经营操作手册编制交付件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按每声明的参考流记录实际验收手册交付份额；cp_services。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_services`
- 来源：`wipo-franchise-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：所有权登记与档案 (`registration`)

#### 输入

##### 产品流

###### 交流电 (`registration_electricity`)

仅用于本阶段实际中国用户端低于 1 kV 的电网平均供电。按适用情况计量工作站、初始存储/传输及可归属冷却，防止共享电表重复计入；其他地域或电压须采用另行核验的交换。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将每声明的参考流可归属实测电量从 kWh 换为 MJ；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：`gsf-sci-1-1-0`

###### 商标所有权登记审查服务 (`registration_examination`)

实际交付的单件登记申请审查，记录主管机构、地域及商品/服务类别，并含本形成周期可归属的不成功申请。费用不是交换量；保留主管机构/供应商活动依据。登记证明确立资产身份，不证明环境清单完整。

- 选定流：商标所有权登记审查服务
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按每声明的参考流统计实际审查申请数量；cp_services。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_services`
- 来源：`un-cpc3-trademarks`

###### 无涂层无木纸 (`dossier_paper`)

有条件纳入作为档案插页/加工输入供应的无涂层无木纸。测量净耗用质量与库存变化；印刷文件、涂布纸及成品文具是其他身份。所有实际墨水或印刷服务须另列。

- 选定流：无涂层无木纸 `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按每声明的参考流记录实测纸张净耗用量；cp_paper。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_paper`
- 来源：`un-cpc3-trademarks`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废弃未印刷无涂层无木纸边角料 (`unprinted_paper_scrap`)

有条件纳入实际纸张准备产生且无墨水、胶黏剂及保密印刷内容的边角料。称量并记录接收方/处理；印刷或污染废纸须另列。不能由纸张输入身份推定废纸身份。

- 选定流：废弃未印刷无涂层无木纸边角料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按每声明的参考流记录实测移交边角料；cp_paper。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_paper`
- 来源：`un-cpc3-trademarks`

##### 基本流

### 过程：资产完成与首次交付 (`completion`)

#### 输入

##### 产品流

###### 交流电 (`completion_electricity`)

仅用于本阶段实际中国用户端低于 1 kV 的电网平均供电。按适用情况计量工作站、初始存储/传输及可归属冷却，防止共享电表重复计入；其他地域或电压须采用另行核验的交换。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将每声明的参考流可归属实测电量从 kWh 换为 MJ；cp_energy。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy`
- 来源：`gsf-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已登记商标与特许原始资产包 (`reference_product_original`)

一套完整自行形成的原始资产，具有已法定登记的品牌所有权，适用时包括声明的特许体系内容。记录所有权、地域/类别、包内内容及版本；文件、登记件或获许可者不另算资产产量。

- 选定流：已登记商标与特许原始资产包
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 件
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_asset`
- 来源：`un-cpc3-trademarks`; `wipo-franchise-2019`

##### 废物流

##### 基本流

### 过程：共享计算基础设施 (`support`)

#### 输入

##### 产品流

###### 重量不超过 10 千克的便携式自动数据处理机，如笔记本电脑、笔记本和次级笔记本电脑 (`portable_computer_share`)

有条件纳入自有完整便携计算机，核对已制造、工厂交付身份及不超过 10 kg 的实测配置质量。用有记录的设备时间/资源份额及有依据的分摊期间归属制造负荷，不默认质量或寿命。若研究纳入供货运输和退役则另列；服务器和外围设备身份另列。

- 选定流：重量不超过 10 千克的便携式自动数据处理机，如笔记本电脑、笔记本和次级笔记本电脑 `c4cb6070-944d-41be-a231-a0a2b9477174`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按每声明的参考流以实测设备净质量乘有依据的设备归属份额；cp_hardware。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_hardware`
- 来源：`gsf-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| shared_activity | 共享形成活动 | 先通过项目与阶段作业记录细分，单独归属失败尝试及返工；不可细分的共享资源用可解释的物理作业/时间/占用证据分摊，保留完整期间总量与所有受益者核对，不按售价或许可收入臆配。该选择是本前景采集要求，不是 CPC/WIPO 给出的数值比例。 | gsf-sci-1-1-0 |
| asset_lineage | 既有原件与共产品 | 记录设计/研发/品牌等原件的版本与负荷来源以及所有受益资产；分摊份额须可复核且总和不超过来源负荷。多个登记地区不自动成为多个产品；只有独立可验收交付件才是共产品。若真实经济分配必须研究，则独立列示依据与敏感性，不默认价格权重。 | un-cpc3-trademarks |
| copies | 许可与复制 | 不得向每次许可、下载或加盟重复计入整套原创负荷。若下游研究要分摊形成负荷，另声明真实使用/复用基准与期间、范围及不确定性，不能把未来用户预测作为本生产参考产量。废纸不默认避免负荷收益。 | un-cpc3-trademarks |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_asset | completion | reference_product_original | 验收台账 | 资产/项目编号；版本；内容清单；所有者/标识/地域/类别；登记原件；自行形成；交付/截止；特许内容；失败尝试 | 逐件以登记原件及完整包内内容验收，核对同一项目和版本，不将文件/注册/许可数当产量 | item | 每次验收 | 完整实际形成周期 | 所有者及实际参与场址 | 每声明的参考流 | 原件、内容哈希、验收及变更台账 |
| cp_energy | definition; development; registration; completion | electricity rows | 电表与作业记录 | 场址/地域；电压；阶段/作业编号；时间；实测 kWh；冷却/存储/传输范围；总表；归属依据 | 用校准电表、工作站测量或服务商实测电量，与作业记录核对全部归属份额；预订量不能替代实测电量 | kWh | 每个计量期间与作业 | 同一完整形成期及初始交付 | 实际场址及服务商明确接口 | 每声明的参考流 | 校准记录、总表对账、分摊残差及不确定性 |
| cp_services | definition; development; registration | specific purchased deliveries | 交付与供应商活动 | 报告/活动/手册/设计/申请编号；版本；范围；验收；归属份额；内含能源/设备；供应商上游；重复项 | 逐件核对实际限定范围交付和供应商原始活动；按服务类型分别计数及归属，不由费用推导环境量 | item | 每次交付 | 完整形成周期含失败审查 | 实际供应商/主管机构边界 | 每声明的参考流 | 合同交付规格、原件、供应商清单及上游缺口 |
| cp_paper | registration | dossier_paper; unprinted_paper_scrap | 物料与移交称重 | 纸种/状态；期初/期末库存；领用；净耗用 kg；未印刷边角料 kg；接收/处理；其他污染废纸 | 核对实际纸种和插页加工状态；用校准秤或可追溯净质量记录分别计量耗用及无污染边角料；其他墨水/废纸另列 | kg | 每批及库存期间 | 同一形成期 | 实际档案准备及废物移交界面 | 每声明的参考流 | 称量、库存/料单和接收处理凭据 |
| cp_hardware | support | portable_computer_share | 设备质量与使用台账 | 设备编号/配置；校准净质量 kg；用途；实际占用/预留作业时间；可用资源；有依据实际使用寿命或经论证的预计使用寿命；制造负担累计分摊台账；全部受益作业 | 对同一完整配置称重或直读可追溯净质量记录，排除包装，核对不超过 10 kg；用占用/资源与有依据的分摊期间建立设备份额并与全部作业核对 | kg | 设备变更及每个作业期间 | 形成期与设备分摊期间分别声明 | 自有设备；服务商内含设备排除重复 | 每声明的参考流 | 称重、配置清单、设备生产数据集、期间依据和归属核对 |


### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| meter_conversion | definition_electricity; development_electricity; registration_electricity; completion_electricity | 每声明的参考流的实测可归属电量乘 3.6 MJ/kWh。保留总表和负荷记录；冷却与其他场地电量不得重复。 | cp_energy | 每声明的参考流的 MJ | gsf-sci-1-1-0 |
| equipment_share | portable_computer_share | 将同一配置实测净质量乘有依据时间份额及资源份额，得到每声明的参考流可归属 kg。分摊期间与资源份额须由设备台账支持并避免重复；不复制 SCI 示例寿命或把碳因子作为质量。 | cp_hardware | 每声明的参考流的设备 kg | gsf-sci-1-1-0 |
| equipment_life_conservation | portable_computer_share | 制造负担的分摊期间须对应有依据实际使用寿命，或经论证且附敏感性分析及后续核对的预计寿命。对同一设备清单跨全部项目和期间核对累计制造负担份额，总份额不得超过一；不得在每个项目或年度重置整台设备制造负担。寿命或资源依据未知时须审查。 | cp_hardware | 可审计设备累计分摊 | gsf-sci-1-1-0 |
| delivered_scope | clearance_report; design_original_input; campaign_delivery; manual_delivery; registration_examination | 逐种限定交付分别统计实际计数及有依据归属份额，按每声明的参考流汇总；不把不相同的服务计数合并为同一交换。 | cp_services | 各服务每声明的参考流的 item | un-cpc3-trademarks |
| paper_records | dossier_paper; unprinted_paper_scrap | 分别按净领用与库存记录核对耗用、按移交称重核对边角料，均按每声明的参考流；文件载体、损耗与退回分别对账，不编造损耗率。 | cp_paper | 各纸张交换每声明的参考流的 kg | un-cpc3-trademarks |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| asset_identity | reference_product_original | 登记凭据和包内内容与同一版本匹配；没有所有权登记的申请草案不冒充目标成品；不推定健康、商业成功或合规批准。 | cp_asset |
| complete_routes | 所有过程 | 真实活动路线逐项与原子交换对照；缺失供应商、设施、运输、实体制作或基础流依据明确标为缺口，不当作零。 | cp_energy; cp_services; cp_paper; cp_hardware |
| representation | 数据集 | 声明真实年代、地域、项目类型、各阶段覆盖、被排除层和不确定性；单一资产不代表全部品牌或特许行业。 | project and provider originals |
| rights_reuse | 既有资产及交付 | 公开使用/复用条件及版权/保密局限；不能用许可份额作为未经证明的环境等价；敏感原始台账可保留在所有者处但可供审查。 | cp_asset; cp_services |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| reference_integrity | reference_product_original | 验证一件完整已登记资产的版本/内容/所有权以及全部限定信息；参考产品名称须等于成品输出行。未确定流身份与科学审查不得冒充审批。 | un-cpc3-trademarks |
| inventory_completeness | 所有清单行 | 逐行核对单一交换、方向、类型、属性、单位、条件及协议，双语保持相同 row_id。中国低压电力仅用于实际匹配接口；设备质量及纸张状态必须核对；公开物品数量不可改成质量。 | gsf-sci-1-1-0 |
| no_double_count | 活动与原件台账 | 对账共享电量、设备份额、供应商内含范围、失败活动及既有原件；后续许可、复制或商品生产与原始资产生产分开。 | un-cpc3-trademarks; gsf-sci-1-1-0 |
| bounded_claim | 完整性声明 | 实际路线未展开、供应商上游缺失、身份/条件不匹配或计量关系未证明时保留缺口及 review；不得声称完整 cradle-to-gate。每个真实直接排放需物质/来源/介质证据，不能默认零也不能伪造必然排放。 | un-cpc3-trademarks; wipo-franchise-2019 |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明原始商标/特许资产形成前景的数据集，关联明确上游层 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在内容/版本/登记范围与使用条件匹配时作为特定资产形成输入；由下游单独论证利用份额 |
| excluded_use | 未经匹配的品牌比较；每次许可/下载重复原始负荷；仅申请冒充成品；特许商品或门店运营足迹；缺层却声称完整 cradle-to-gate |
| required_metadata | 全部参考限定信息；实际形成期与截止；路线/活动/交换台账；原创来源与复用；采集协议及供应商接口；登记与验收原件 |
| required_quality_disclosure | 覆盖与缺口、未解决身份、测量/分摊不确定性、供应商层、代表性、权利局限、排放筛查及设施/交付排除 |
| update_trigger | 资产版本、登记地域/类别/所有者、特许内容、真实形成路线、供应商、电网、设备或复用证据改变 |


## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-trademarks | official_guidance | UNSD, CPC3.0 subclass83960, explanatory inclusion/note/exclusions; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/83960 | 自行形成、法定登记所有权与类别排除；不提供 LCA 数量或审批 |
| wipo-franchise-2019 | official_guidance | WIPO, In Good Company: Managing Intellectual Property Issues in Franchising (2019), publication1035, printed pp11–12 (PDF13–14); https://www.wipo.int/edocs/pubdocs/en/sme/1035/wipo_pub_1035.pdf | 历史概念性特许类型与商业模式手册/控制条件；不采用金额、寿命或当前法律结论 |
| gsf-sci-1-1-0 | standard | Green Software Foundation, Software Carbon Intensity Specification1.1.0, Energy and Embodied emissions; https://sci.greensoftware.foundation/ | 仅用于真实计算活动的电量及设备时间/资源份额归属方法；不采用默认数值，不代表整资产 LCA |
