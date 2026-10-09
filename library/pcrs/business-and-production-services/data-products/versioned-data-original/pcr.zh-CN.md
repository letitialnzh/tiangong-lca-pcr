---
status: candidate
pcr_id: pcr.business-and-production-services.data-products.versioned-data-original
language: zh-CN
sync_with: pcr.en-US.md
---

# 版本明确的数据原件生产

## 1. 范围与适用性

本 PCR 覆盖通过接触与观察现象、记录、组织及存储其信息所形成的可识别数字信息内容。输出为归属与控制主体明确、能够投入生产活动的一份完整版本数据原件。范围同时包括原始观测和可追溯既有数据的编制，前景清单由实际声明路线决定。例如，范围明确的天气观测数据库或可识别的业务记录汇编。对象是包括模式、溯源、文档和所要求质量结果的信息产品，不是某种文件格式或一次销售。[un-cpc3-data; w3c-dcat3; noaa-ghcnd]

排除数据库管理软件及其他软件原件、物理存储介质、加密资产、品牌或特许资产、作为独立原件的研究或勘探结论、娱乐及在线消费内容、仅以服务形式出售的受托编制活动、下载和持续访问或托管服务。研究项目可以产生可分离的数据产品，但不得把其完整科学原件重新标为数据。数字文件可以承载数据，但其制作未必形成新的数据原件。[un-cpc3-data; w3c-dcat3]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.data-products.versioned-data-original |
| classification_refs | CPC 3.0: 83710 Data |
| covered_products | 用于生产的版本明确数字信息原件及原始数据库，内容清单范围明确 |
| excluded_products | 软件；物理介质；加密资产；研究或设计原件；消费内容；编制服务；下载及托管 |
| representative_product | 一份可识别观测数据库版本，声明变量、总体或地点、时期、质量标志和复用条件；GHCN-Daily 说明版本引用实践，不要求所有产品走天气观测路线 |
| production_route | 界定内容与采集设计；获取或观察及记录；整合与组织；校验或纠正；文档编制并封存一份原件 |
| market_state | 已完成并数字存储的信息原件，可按声明条件复用于生产；归属、控制和访问限制明确 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 形成可检索、有文档的数字信息原件，用于声明的生产目的 |
| How much | 声明内容及版本的一份完整原件包；1 件 |
| How well | 实际验收规范限定变量或模式、覆盖范围、完整性、分辨率、质量标志、溯源、完整性校验及允许复用；不虚构准确度阈值 |
| How long or cycle | 从项目起始到所声明版本封存截止的一次有界形成周期；观测覆盖期与生产时长分开，不设默认资产寿命 |
| reference_flow_link | reference_data |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 版本明确的数据原件包 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 原件标识；版本和内容清单；模式或变量；来源溯源；总体、空间和时间覆盖；分辨率；缺失情况及质量标志；验收和完整性结果；归属、控制及复用权；生产路线和场址；形成期及截止；上游数据复用和供应商边界 |

显示单位 item 与公开数量单位 Item(s) 完全相同，不是质量、货币、用户或字节。必需限定信息应写入所形成数据集的元数据及验收证据。没有内容及质量定义的一件产品不能用于等效比较。同一内容的不同序列化文件和重复备份不增加原件数量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 按 cp_original 的内容与版本签认清单计一份完整声明原件。不换算质量，不按字节归一化，不按许可数量扩增。 |
| electricity_unit | 电力行 | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开参考属性及能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`。电表采集 kWh，按 calculate_energy 的 3.6 MJ/kWh 换算为 MJ [nist-si-conversion]。 |
| information_metrics | 内容及分配元数据 | 实际单位的记录数量、容量及时长 | 分别记录 item、byte、s | 将实际字节、记录条数、预留时长和传输数据分别记录；不存在其与一件内容质量或电量的通用关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际观测接触或采集起始，或接收可识别既有数据，到原件封存完成 |
| starting_condition_role | 声明原件形成的前景门；接收既有数据不消除其上游形成负担 |
| product_classification_scope | 符合 CPC Data 含义的生产性信息内容，与文件格式无关 |
| recursive_input_rule | 将复用源数据版本分别作为输入，保留溯源和守恒的上游负担份额；止于声明的上游数据集，不在使用原件中再次计算同一观测 |
| upstream_dataset_requirement | 匹配实际范围的供应商数据形成、电网供电、自有设备和外购作业清单；缺失关联应披露，不能置零 |
| disclosure | 形成与观测时期；来源截止和先前版本；自有与供应商接口；物理采集路线；设备、冷却、存储和网络边界；排除项及缺失上游层 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_cycle | 全部生产阶段 | 纳入原件封存前可归属的规划、接触、观测或记录、导入、组织、校验、纠正重跑、文档及存储。失败作业和舍弃记录仍是生产活动，但不计为验收输出。 | un-cpc3-data; unece-gsbpm52 |
| boundary_physical | 观测 | 逐一映射实际现场、实验室、调查、传感及扫描路线。实际燃料、运输、每种试剂或耗材、水、废物及有记录的直接释放须添加独立具体交换。判定不存在须有路线证据，电子数据输出不能成为排除物理采集的理由。 | un-cpc3-data; unece-gsbpm52 |
| boundary_assets | 计算及仪器 | 纳入供应商清单之外可识别自有设备的可归属清单。设备生产或处置属于上游层，不是本地基础流释放。形成期内冷却、网络及临时存储须计量或采用范围明确的供应商清单。 | gsf-sci110 |
| boundary_after_gate | 副本及运行 | 封存后的下载、用户访问、长期托管、更新及数据使用属于独立过程。初始形成负担按明确复用台账进入下游，不将原件全部负担重复计入每次下载。新内容版本计入实际增量工作和披露的复用负担。 | un-cpc3-data; w3c-dcat3 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| planning | 内容与采集设计 | required | 全部原件，实际设计及构建工作量 | 原件形成 | 每声明的参考流 |
| observation | 获取与记录 | required | 实际来源获取及记录；仅在发生时包括自有物理采集 | 原件形成 | 每声明的参考流 |
| organization | 整合与组织 | required | 实际模式映射、清洗、索引及处理；转换按路线纳入 | 原件形成 | 每声明的参考流 |
| validation | 质量与完整性检查 | required | 按声明验收规则检查；无通用插补要求 | 原件形成 | 每声明的参考流 |
| sealing | 文档编制与原件封存 | required | 一份完整版本清单和有界存储截止 | 原件形成 | 每声明的参考流 |
| infrastructure | 自有支持设备 | conditional | 自有设备用于形成且未包括在外购供应商清单中 | 原件形成 | 每声明的参考流 |

每行表示一个交换，各过程电量池互不重叠。空的废物或基础流小节表示不规定通用释放，不表示真实场址交换为零。数据集生产须按 boundary_physical 补齐全部有记录的路线交换；外购电力排放属于其上游供电清单。

### 过程：内容与采集设计（`planning`）

#### 输入

##### 产品流

###### 交流电 (`planning_electricity`)

归属于本阶段的电量，包括实测边界内按记录分配的预留闲置、冷却、存储和网络负担。本 UUID 仅适用于实际中国电网平均用户端低于1 kV 供电。供电条件不同时，应另列匹配身份，核验前保留未解决。cp_energy 计量作业及重试，使用 calculate_energy，不重复计入供应商已包含的电量。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 每声明的参考流的实测可归属数量; cp_energy.
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_energy`
- 来源： `gsf-sci110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：获取与记录（`observation`）

#### 输入

##### 产品流

###### 交流电 (`observation_electricity`)

归属于本阶段的电量，包括实测边界内按记录分配的预留闲置、冷却、存储和网络负担。本 UUID 仅适用于实际中国电网平均用户端低于1 kV 供电。供电条件不同时，应另列匹配身份，核验前保留未解决。cp_energy 计量作业及重试，使用 calculate_energy，不重复计入供应商已包含的电量。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 每声明的参考流的实测可归属数量; cp_energy.
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_energy`
- 来源： `gsf-sci110`

###### 既有观测数据包 (`source_data`)

条件纳入：一份可识别的既有观测数据版本通过获取、接收（包括免费或开放数据）或复用进入编制。绑定其清单、源变量、覆盖、质量标志及复用权。按实际范围的数据包计数，保留有依据的上游形成份额，不把复制字节当作新观测事实。本形成周期内新开展的自有原始观测则须采用实际观测路线清单。

- 选定流： 既有观测数据包
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 每声明的参考流的实测可归属数量; cp_source.
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_source`
- 来源： `w3c-dcat3`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：整合与组织（`organization`）

#### 输入

##### 产品流

###### 交流电 (`organization_electricity`)

归属于本阶段的电量，包括实测边界内按记录分配的预留闲置、冷却、存储和网络负担。本 UUID 仅适用于实际中国电网平均用户端低于1 kV 供电。供电条件不同时，应另列匹配身份，核验前保留未解决。cp_energy 计量作业及重试，使用 calculate_energy，不重复计入供应商已包含的电量。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 每声明的参考流的实测可归属数量; cp_energy.
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_energy`
- 来源： `gsf-sci110`

###### 数据编制作业 (`compute_job`)

条件纳入：外部供应商交付一次完成且范围唯一的数据编制作业。记录作业标识、转换、数据版本、运行及预留资源、时长和实际供应商清单范围。按日志计完成作业，不按支付金额计量；缺失的冷却、设备、存储和网络须另补。替代同一内含电力或设备交换，不能重复相加。

- 选定流： 数据编制作业
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 每声明的参考流的实测可归属数量; cp_provider.
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_provider`
- 来源： `gsf-sci110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：质量与完整性检查（`validation`）

#### 输入

##### 产品流

###### 交流电 (`validation_electricity`)

归属于本阶段的电量，包括实测边界内按记录分配的预留闲置、冷却、存储和网络负担。本 UUID 仅适用于实际中国电网平均用户端低于1 kV 供电。供电条件不同时，应另列匹配身份，核验前保留未解决。cp_energy 计量作业及重试，使用 calculate_energy，不重复计入供应商已包含的电量。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 每声明的参考流的实测可归属数量; cp_energy.
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_energy`
- 来源： `gsf-sci110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：文档编制与原件封存（`sealing`）

#### 输入

##### 产品流

###### 交流电 (`sealing_electricity`)

归属于本阶段的电量，包括实测边界内按记录分配的预留闲置、冷却、存储和网络负担。本 UUID 仅适用于实际中国电网平均用户端低于1 kV 供电。供电条件不同时，应另列匹配身份，核验前保留未解决。cp_energy 计量作业及重试，使用 calculate_energy，不重复计入供应商已包含的电量。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 每声明的参考流的实测可归属数量; cp_energy.
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_energy`
- 来源： `gsf-sci110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 版本明确的数据原件包 (`reference_data`)

恰好一份内容及版本明确、按实际质量规范验收且清单封存的完整原件。包括信息和必需文档，不按每个重复文件、销售、下载或许可计数。必需内容存在数据缺失时保留声明标志；验收不意味着法律或科学批准。

- 选定流： 版本明确的数据原件包
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 1 件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_original`
- 来源： `un-cpc3-data`

##### 废物流

##### 基本流

### 过程：自有支持设备（`infrastructure`）

#### 输入

##### 产品流

###### 数据生产计算服务器 (`server_hardware`)

条件纳入：一台可识别自有计算服务器用于形成。绑定实际型号、处理器、内存、存储及上游设备清单。记录预留时长、有证据的安装寿命和容量份额，保留不确定性，按 allocation_device 分配设备清单。通用服务代理不能确定该设备身份。

- 选定流： 数据生产计算服务器
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 每声明的参考流的实测可归属数量; cp_device.
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_device`
- 来源： `gsf-sci110`

###### 电子观测数据记录仪 (`logger_hardware`)

条件纳入：一台可识别电子仪器为本原件记录观测。绑定所测变量、校准的传感及记录配置、地点和供电接口。利用率及安装寿命采用现场证据；不在设备清单内的探头、电池及其他实际更换组件须作为独立交换。

- 选定流： 电子观测数据记录仪
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则： 每声明的参考流的实测可归属数量; cp_device.
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准： 每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议： `cp_device`
- 来源： `gsf-sci110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | 共享数据项目 | 先按电表、采集日志和作业标识拆分项目及阶段工作量，再分配。保留未分配残差和失败工作。不在缺少因果实测关系时默认按收入、许可、用户或数据字节份额分配。 | gsf-sci110; unece-gsbpm52 |
| allocation_compute | 共享电量 | 将可归属实测作业、存储或网络份额与同一设施电表时期核对，包含预留闲置和冷却范围。流量或存储指标是须说明并核对的归属驱动，绝非通用电量换算。 | gsf-sci110 |
| allocation_device | server_hardware; logger_hardware | 采用实际设备清单中可归属形成周期的份额。预留计算设备按预留时长与有证据安装寿命之比及预留资源与总资源之比分配。非计算传感设备须以其自身实测因果利用率为依据。不虚构寿命，不重复供应商设备。 | gsf-sci110 |
| allocation_reuse | source_data 及联合原件版本 | 将上游源内容及保留先前版本工作与增量形成分别追溯。下游共享原件负担时，以明确有限的输出或使用情景建立守恒受益台账，报告复用假设敏感性。副本不增加信息形成。联合研究或软件输出须实际拆分；未解决的联合归属须审查。 | un-cpc3-data; w3c-dcat3 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_original | sealing | 参考输出 | acceptance_record | 原件标识；版本；文件或校验和；内容范围；模式；来源权利及控制；验收标准及结果；覆盖；质量标志；完成截止；完整数量 | 检查原始内容及生产者验收记录，对等效序列化去重并绑定一份完整声明原件 | item | 版本完成时 | 整个声明形成周期 | 全部原件生产场址及供应商 | 每声明的参考流 | 签认版本清单及可复现验收或完整性结果 |
| cp_energy | planning; observation; organization; validation; sealing | 阶段电力 | meter_record | 电表标识；起止；阶段或作业；地域；电压；kWh；预留及闲置负荷；冷却、存储及网络接口；分配份额；供应商重叠 | 采用校准电表或与设施总量核对的已核验遥测；绑定互斥阶段区间、重跑及共享负荷归属 | kWh | 每次作业及形成区间 | 全部形成周期，包括失败工作 | 实际自有供电；供应商范围另列 | 每声明的参考流 | 校准、工作量日志、电表核对和缺失覆盖 |
| cp_source | observation | 既有观测数据集 | source_record | 来源标识及版本；数据包数量；变量及覆盖；标志；权利；上游形成清单；受益份额；接收字节；谱系 | 检查接收原件及溯源，按已定义数据包计数；核验兼容性、权利和上游负担台账，不由大小估算能耗 | item | 每次接收来源版本 | 声明输出版本的全部来源 | 实际供应商及接收场址 | 每声明的参考流 | 来源清单、获取记录、上游清单和复用台账 |
| cp_provider | organization | 编制作业 | provider_record | 作业标识；源及输出版本；完整作业数量；转换；资源及时长；供应商电力、设备、网络、存储及冷却边界 | 检查供应商作业验收日志和匹配的作业清单；保留重试及范围排除，核对计费指标但不把货币当数量 | item | 每次供应商完成作业 | 声明形成周期 | 实际供应商设施 | 每声明的参考流 | 作业清单、范围明确供应商清单和内含交换排重台账 |
| cp_device | infrastructure | 单台设备 | asset_record | 设备型号及配置；上游清单；安装寿命；预留时长；预留与总资源；实际传感工作占用；校准；更换件；供应商纳入 | 检查设备台账、配置、寿命证据及利用日志；分别采集服务器和仪器的因果份额 | item | 每台设备及项目时期 | 形成周期和有证据设备寿命 | 实际自有设备 | 每声明的参考流 | 资产记录、利用证据及寿命或分配敏感性 |

物理观测须保留实际方法、抽样或调查覆盖、设备及校准、现场或实验室地点、采集期和全部独立输入输出记录。每个新增原子交换须绑定采集协议，记录真实属性、单位、方法、覆盖和相同每原件基准。路线遗漏阻止完整数据集声明；纯数字编制须证明观测负担已在可识别上游来源中。

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_energy | planning_electricity; observation_electricity; organization_electricity; validation_electricity; sealing_electricity | 可归属实测 kWh 乘以 3.6 换算为 MJ；保留阶段及供电接口。 | cp_energy; kWh | MJ | gsf-sci110; nist-si-conversion |
| calculate_original | all inventory rows | 阶段、供应商及来源拆分后，将可归属声明原件的非重复交换量汇总；输出恰好为 1 件。显式保留分子单位及上游份额。 | cp_original; cp_energy; cp_source; cp_provider; cp_device | 每声明的参考流 | un-cpc3-data; gsf-sci110 |
| calculate_metrics | 内容元数据 | 按声明规范记录实际完整性、有效及拒绝记录条数、字节大小和覆盖。这些表征内容，不将字节或记录转换为 MJ 或新增原件。 | cp_original; source and validation logs | 声明质量及内容指标 | w3c-dcat3; unece-gsbpm52; noaa-ghcnd |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_content | reference_data | 绑定来源谱系、覆盖、版本、模式、缺失、标志、转换和权利或控制。区分观测与插补记录，保留实际执行检查；验收标准由实际生产者定义。 | cp_original; cp_source; w3c-dcat3; noaa-ghcnd |
| quality_cycle | 全部过程 | 覆盖实际场址、采集及生产时期、失败作业、纠正、临时副本及封存存储。披露电表缺失时期、外部来源负担及供应商排除。 | cp_energy; cp_provider; unece-gsbpm52 |
| quality_identity | 全部输入 | 复核公开身份、参考属性及单位组、供电条件、实际设备和上游版本。空 UUID 保留为候选缺口，不能证明供应商清单可用。 | cp_device; cp_source; cp_provider |
| quality_uncertainty | 分配及数据代表性 | 报告工作量及电表不确定性、未知份额、设备寿命敏感性、观测覆盖限制及复用情景敏感性。不以虚构基准替代前景证据。 | cp_energy; cp_device; source/reuse ledger |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_product | reference_data | 要求一份完整可识别的生产性信息原件，实际归属或控制明确，质量证据已声明。拒绝把副本、许可、文件格式转换、单纯编制服务、软件或消费内容当作等效原件。 | un-cpc3-data; w3c-dcat3 |
| validate_basis | all inventory rows | 要求两种语言均使用一致的每声明参考流基准，绑定采集记录、数量输出并保留分子单位。拒绝任意质量、字节转电量或货币转件数换算。 | gsf-sci110; w3c-dcat3 |
| validate_route | 观测及处理 | 任何实际观测路线、供应商接口、公用工程、材料、废物、直接释放或上游来源负担未知或遗漏，均判数据集完整性不通过。条件行仅在有路线证据时可不存在；不虚构排放填充空小节。 | un-cpc3-data; unece-gsbpm52 |
| validate_conservation | 共享工作及复用内容 | 核对阶段电表、供应商内含流、设备份额、联合输出和有限复用台账。拒绝每副本重复原件负担以及把未解释分配残差隐为零。 | gsf-sci110; w3c-dcat3 |
| validate_coverage | 数据集声明 | 列明已执行及跳过检查、缺失物理及上游层、身份缺口和不确定性。仅前景形成不是完整从摇篮到门或生命周期结果；元数据符合性不代表科学、隐私或法律批准。 | un-cpc3-data; w3c-dcat3; gsf-sci110 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一份声明完整数据产品版本的原件形成前景清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 证据补齐后，作为可追溯上游数据产品输入，明确来源及复用分配并匹配内容质量 |
| excluded_use | 按字节、用户、许可或收入的通用影响；非等效数据比较；仅前景的完整生命周期声明；已批准准确性或法律状态 |
| required_metadata | 全部参考限定；场址及时期；方法及路线台账；来源谱系及上游清单；供应商和自有资产范围；电表及单位；复用分配及封存截止 |
| required_quality_disclosure | 身份及路线缺口；数据覆盖及缺失；实际验收结果；电表或分配不确定性；设备寿命及复用敏感性；跳过层 |
| update_trigger | 新信息或版本范围；观测、来源权利、供应商、场址、设备、质量方法、封存截止或实测能源及复用分配改变 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-data | official_guidance | 联合国统计司 CPC3.0，83710，解释说明纳入、注1–3及排除：https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/83710 | 信息产品、归属或控制和软件、介质、消费排除；无 LCA 因子 |
| w3c-dcat3 | standard | W3C《数据目录词汇》版本3，2024年8月22日推荐；第5、6.6、6.8、9、11、14节：https://www.w3.org/TR/2024/REC-vocab-dcat-3-20240822/ | 数据集与分发形式区别，版本、权利及质量元数据；DCAT 范围自身不证明 CPC 适用性 |
| unece-gsbpm52 | official_guidance | 联合国欧洲经济委员会《通用统计业务过程模型》5.2版（2025年5月，2025年6月 CES 认可）；采集及处理，段落93–114：https://unece.github.io/GSBPM-5.2/ | 获取、整合、校验和按路线纠正；统计框架，不要求统一插补，无能耗系数 |
| gsf-sci110 | standard | 绿色软件基金会《软件碳强度规范》1.1.0；Energy 和 Embodied emissions 节：https://sci.greensoftware.foundation/ | 仅实测计算能耗范围和预留时间或资源设备归属；无默认寿命，不是完整数据 LCA 得分 |
| noaa-ghcnd | dataset | NOAA NCEI GHCN-Daily 说明文件3.35版；标题及版本引用和第III节数据文件格式、MFLAG/QFLAG/SFLAG；数据集 DOI10.7289/V5D21VHZ：https://www.ncei.noaa.gov/pub/data/ghcn/daily/readme.txt | 真实版本观测数据库示例及来源、质量标志；仅天气数据特定元数据，无生产者数量或通用质量阈值 |
| nist-si-conversion | official_guidance | NIST SP811（2008），附录 B.8 K，千瓦时转焦耳精确因子：https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8 | 1 kWh = 3.6 × 10^6 J = 3.6 MJ，仅精确单位换算；历史表格，不采用其2019年前基本单位定义或生产系数 |
