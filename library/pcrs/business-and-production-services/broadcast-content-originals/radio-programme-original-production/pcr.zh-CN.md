---
pcr_id: pcr.business-and-production-services.broadcast-content-originals.radio-programme-original-production
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 广播节目原创资产制作

## 1. 范围与适用性

本PCR覆盖可受知识产权保护、面向无线播出制作的原创广播内容，从明确的制作任务及既有投入开始至完整原创资产验收。包括新闻专题、广播剧、纪录节目、音乐节目、短内容原创及原创直播节目脚本包，前提是完整可识别资产。录制音频为代表路线；直播脚本路线须声明脚本/提示单载体，并区分后续表演及传输。来源声音录音本身不自动等于广播原创资产。[来源：`un-cpc-radio-originals`、`un-cpc-sound-originals`、`ebu-radio-production-2023`]

排除并非按广播原创资产任务制作的独立声音录音原创资产、电视原创资产、传输服务、单纯频道编排、单纯许可、实体媒体制造及消费者下载。原创制作、副本、分发及听众使用属于不同活动；一项计数不推定相同时长或质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.broadcast-content-originals.radio-programme-original-production |
| classification_refs | CPC 3.0 84611 |
| covered_products | 面向无线播出的完整可受知识产权保护广播节目原创资产 |
| excluded_products | 独立来源声音录音；电视原创资产；传输；下载；不含制作的许可 |
| representative_product | 版本固定且声明时长的验收原创录制广播节目 |
| production_route | 任务/脚本→组件创作或获取→剪辑/混音或原创脚本包整编→核对验收 |
| market_state | 按声明权利持有或移交的可复用原创资产；不推定法定批准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制作一项完整且身份明确的广播节目原创资产 |
| How much | 一项验收原创资产；声明准确时长、组件及版本 |
| How well | 有据的项目完整性、编辑及技术验收规格；仅在实际采用时应用EBU建议 |
| How long or cycle | 一个制作周期至验收，包含修订及失败录制；声明未来复用期，不假定寿命 |
| reference_flow_link | `radio_original` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 广播节目原创资产 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 项目/原创ID；版本；完整节目/系列/片段范围；标题/类型/语言；面向无线播出用途；准确时长；音频或脚本载体；音频适用时采样率/位深/声道/格式；验收日期/规格/结果；组件来源；所有权/允许复用；制作期/场址；供电地域/电压 |

item为公开Item(s)的单件计数别名；中文“件”为同一计数，不是质量或字节。每份数据集须声明全部必需限定。权利、收入及听众数量不属于物理参考量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `original_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 采用cp_acceptance计数一项完整验收原创资产；副本和播出次数不增加产出。 |
| `electricity_unit` | prep_electricity; record_electricity; finish_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开能量属性；按1 kWh = 3.6 MJ将实测kWh转MJ。不进行字节到能量换算。 |
| `service_unit` | recording_service; hosted_storage | 时间 | h | 小时表示指定供应商服务，不是通用能耗系数或原创节目时长；固定容量、人员及覆盖。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 项目开始时明确的任务、既有来源投入和已安装设施；不假定投入无负荷 |
| starting_condition_role | foreground_start |
| product_classification_scope | 广播节目原创资产制作；CPC为定位信息，不是身份层级 |
| recursive_input_rule | 既有原创资产为带版本及声明负荷份额的上游投入；不递归重新制作，不重复计算内部组件制作 |
| upstream_dataset_requirement | 核实的电力、材料、来源原创资产、服务、交通及设备数据集；披露上游缺失阶段 |
| disclosure | 场址/时间；原创层级；自营/外包作业；辅助负荷；验收存储截止；排除及上游缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_creation` | 纳入实际策划、制作、返工、剪辑/混音或脚本整编、质量检查及验收。直播脚本路线说明真实作业，不虚构录音。 | un-cpc-radio-originals; ebu-radio-production-2023 |
| `boundary_downstream` | 区分后续传输/播出、下载、长期归档及听众设备；制作只计一次，并明确下游复用分配。 | ebu-radio-production-2023; un-sna-originals-2008 |
| `boundary_actual` | 筛查全部场址实际公用工程、燃料、耗材、交通、废物及直接排放。本行卡定义常见原子交换，不是所有项目流。真实发生时须增加独立交换，核实身份或明确缺口。不能因仅示例电力就认定发电燃料或制冷剂损失不存在。仅前景数据集不得声称完整从摇篮到大门覆盖。 |  |

## 6. 过程清单结构

电力驱动音频/脚本制作不预设基础流。保留直接排放筛查；实际排放须有物种、化石/生物来源及受纳环境证据并另列行。供应商电力排放不是本地直接排放。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| prepare | 策划与脚本准备 | required | 真实作业；声明逐行条件 | foreground_production | 每声明的参考流 |
| create_content | 节目组件创作与获取 | required | 真实作业；声明逐行条件 | foreground_production | 每声明的参考流 |
| finish | 剪辑核对与原创资产验收 | required | 真实作业；声明逐行条件 | foreground_production | 每声明的参考流 |

### 过程： 策划与脚本准备 (`prepare`)

#### 输入

##### 产品流

###### 交流电 (`prep_electricity`)

计量归属策划、脚本及办公辅助电量。本身份仅适用于中国电网平均供电、到用户且低于1千伏；其他供电须另行核验身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每声明的参考流的归属实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 未涂布无磨木浆印刷纸（woodfree，以化学浆为主） (`script_paper`)

仅在实际打印脚本时纳入；称量领用和退回纸张。纯数字作业无需纸。纸袋、涂布纸或再生纸属于其他身份。

- 选定流：未涂布无磨木浆印刷纸（woodfree，以化学浆为主）
- 流属性/单位：质量 / kg
- 数量规则：每声明的参考流的归属实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

### 过程： 节目组件创作与获取 (`create_content`)

#### 输入

##### 产品流

###### 交流电 (`record_electricity`)

计量归属录制、监听及含通风的录音室辅助用电。本身份仅适用于中国电网平均供电、到用户且低于1千伏。排除外购服务已包含的电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每声明的参考流的归属实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 外景声音录制服务 (`recording_service`)

仅适用于外包外景录音；明确场次、人员、设备、交通及交付覆盖；保留供应商环境清单和真实服务小时，不使用发票金额。

- 选定流：外景声音录制服务
- 流属性/单位：时间 / h
- 数量规则：每声明的参考流的归属实测交换数量；cp_service。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：

###### 电容式传声器 (`microphone_share`)

仅适用于使用自有电容式传声器。按利用记录和有据服务活动归属真实设备制造，不设默认寿命。服务已包含的租赁设备不重复计入。

- 选定流：电容式传声器
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按 cp_equipment 和 allocate_equipment 取得一件完整资产的归属制造份额，作为每声明的参考流的设备投入；保留跨项目／期间累计台账，另核运行及租赁服务内含范围。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_equipment`
- 来源：

###### 验收合格声音录音原创资产 (`source_audio`)

仅适用于节目采用既有外部录音。识别版本、允许用途和归属制作负荷。新制内部组件不另列为外部投入；版税属于元数据。

- 选定流：验收合格声音录音原创资产
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每声明的参考流的归属实测交换数量；cp_asset_input。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset_input`
- 来源：

###### 汽油乘用车旅客运输 (`location_travel`)

仅在实际采用该路线外景出行时纳入；实测旅客距离及项目份额。供应商已涵盖交通不重复计入；其他车辆路线须另列具体行。

- 选定流：汽油乘用车旅客运输
- 流属性/单位：旅客运输 / person*km
- 数量规则：每声明的参考流的归属实测交换数量；cp_travel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_travel`
- 来源：

### 过程： 剪辑核对与原创资产验收 (`finish`)

#### 输入

##### 产品流

###### 交流电 (`finish_electricity`)

计量剪辑、混音、质量检查、导出及操作者自有验收前存储电量。本身份仅适用于中国电网平均供电、到用户且低于1千伏；第三方存储服务已包含电量不重复计入。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每声明的参考流的归属实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 音频制作计算机工作站 (`workstation_share`)

在此一次归属三个过程使用的真实工作站制造，采用声明配置、利用记录及有据服务分母；不将成本或功率转为设备质量。

- 选定流：音频制作计算机工作站
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：按 cp_equipment 和 allocate_equipment 取得一件完整资产的归属制造份额，作为每声明的参考流的设备投入；保留跨项目／期间累计台账，另核运行及租赁服务内含范围。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_equipment`
- 来源：

###### 音频项目托管存储服务 (`hosted_storage`)

仅适用于固定声明容量、冗余及地域的外购验收前存储。保留真实容量时间台账、归属服务小时及供应商清单；字节不推定kWh。验收后归档使用属于下游。

- 选定流：音频项目托管存储服务
- 流属性/单位：时间 / h
- 数量规则：每声明的参考流的归属实测交换数量；cp_service。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：

#### 输出

##### 产品流

###### 广播节目原创资产 (`radio_original`)

声明版本的一项完整验收原创资产。只有完整指定系列作为整项原创资产时才将系列计为一项。独立完整片段可作为原创资产。文件副本不增加原创资产数量。

- 选定流：广播节目原创资产
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 件
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`un-cpc-radio-originals`; `ebu-radio-production-2023`

##### 废物流

###### 废未涂布无磨木浆印刷纸（woodfree，以化学浆为主） (`script_paper_waste`)

仅在弃置脚本纸时纳入；称量该单独收集纸流并记录处理。它是废物交换，不是基础排放或默认回收抵扣。

- 选定流：废未涂布无磨木浆印刷纸（woodfree，以化学浆为主）
- 流属性/单位：质量 / kg
- 数量规则：每声明的参考流的归属实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_shared` | 优先细分项目作业并区分供应商。用实测功率曲线和有据作业/设备占用归属共享计量总量；论证空闲/辅助份额并核对分配总量。存储采用真实容量时间及供应商清单，不采用通用kWh/GB。不按销售额、版税或听众数分配。 |  |
| `allocate_original` | 联合制作原创资产优先细分；否则记录有物理支持的共享作业关系、份额及敏感性。失败录制/修订保留在验收原创资产中。防止母节目/组件重复计算；权利移交不是新原创制作。 | ebu-radio-production-2023; un-sna-originals-2008 |
| `allocate_equipment` | 以跨全部项目和期间的持久资产台账归属真实设备制造。项目实测使用仅为分子；分母须覆盖有依据的实际寿命、累计服务活动或经论证预计寿命，并开展敏感性分析和后续核对。跨全部项目及期间的累计制造份额不得超过1，不得在新项目或观察期间重置。仅观察期间的方法只分配已归属该期间的制造负担份额，不能每个期间投入整件设备清单。寿命、分母或期间份额未知须明确审查；不预设寿命或质量。避免服务、租赁及设备重复计入，不自动赋予废物替代收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | finish | radio_original | 原创台账 | ID；版本；范围；时长；格式；验收；权利；组件 | 检查验收音频/脚本包及真实编辑/技术记录；区分原创与副本 | item | 每项作业及验收 | 完整制作含返工 | 全部声明自营/供应商场址 | 每声明的参考流 | 可追溯日志；适用时校准仪表；供应商清单；核对 |
| cp_energy | prepare; create_content; finish | electricity | 电表记录 | 电表；kWh；时间戳；作业；场址；电压；功率曲线；辅助；分配 | 分表计量作业或以实测设备功率及日志核对区间电表；转MJ，区分供应商覆盖 | MJ | 每项作业及验收 | 完整制作含返工 | 全部声明自营/供应商场址 | 每声明的参考流 | 可追溯日志；适用时校准仪表；供应商清单；核对 |
| cp_material | prepare; finish | script_paper; script_paper_waste | 称量记录 | 纸种；领用/退回/废物kg；库存；处理；项目 | 称量真实投入/退回及单独收集废物；核对库存和使用 | kg | 每项作业及验收 | 完整制作含返工 | 全部声明自营/供应商场址 | 每声明的参考流 | 可追溯日志；适用时校准仪表；供应商清单；核对 |
| cp_service | create_content; finish | recording_service; hosted_storage | 供应商记录 | 供应商；场次/存储小时；容量；人员；冗余；地域；交付；覆盖投入 | 获取真实场次或容量时间日志及供应商清单，识别包含的电力/设备 | h | 每项作业及验收 | 完整制作含返工 | 全部声明自营/供应商场址 | 每声明的参考流 | 可追溯日志；适用时校准仪表；供应商清单；核对 |
| cp_equipment | create_content; finish | microphone_share; workstation_share | 利用记录 | 持久资产ID；型号；配置；制造清单；项目作业使用量；有依据的全寿命／累计服务分母及其覆盖范围；预计寿命依据和敏感性；期间已归属制造份额；本项目份额；跨全部项目和期间的历史及累计份额；服务／租赁内含范围；后续核对 | 关联实体资产、作业记录及跨项目／期间制造份额台账，按 allocate_equipment 论证分母。观察期仅分配已归属该期的份额，累计不得超过1；未知分母或期间份额保留审查，不以新项目或新期间重置整件制造。 | item | 每项作业及验收 | 完整制作含返工 | 全部声明自营/供应商场址 | 每声明的参考流 | 可追溯日志；适用时校准仪表；供应商清单；核对 |
| cp_asset_input | create_content | source_audio | 资产来源 | 来源ID/版本；组件；权利；制作负荷；复用份额 | 核实供应商原创制作清单及声明使用份额；单独保留费用 | item | 每项作业及验收 | 完整制作含返工 | 全部声明自营/供应商场址 | 每声明的参考流 | 可追溯日志；适用时校准仪表；供应商清单；核对 |
| cp_travel | create_content | location_travel | 行程日志 | 车辆；汽油路线；乘员；km；作业；供应商覆盖 | 读取真实行程记录并核对旅客距离及项目份额 | person*km | 每项作业及验收 | 完整制作含返工 | 全部声明自营/供应商场址 | 每声明的参考流 | 可追溯日志；适用时校准仪表；供应商清单；核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_conversion` | prep_electricity; record_electricity; finish_electricity | MJ = 归属实测kWh × 3.6；保留原创资产分母。 | cp_energy; measured kWh | 每声明的参考流的MJ |  |
| `original_normalization` | all inventory rows | 相同声明范围的同类验收原创资产，将每种归属交换总量除以真实验收数量。不同原创资产先按项目归属，再单独报告。每声明的参考流产出恰为1件。 | cp_acceptance; attributable exchange totals | 每声明的参考流的交换数量 |  |
| `service_reconciliation` | recording_service; hosted_storage | 将指定服务消耗小时与供应商活动清单核对；时间及容量本身不确立电能。 | cp_service; supplier inventory | 每声明的参考流的服务数量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_identity` | radio_original | 固定原创版本、完整层级、时长及真实委托验收规格。响度/峰值目标按采用规格，不设通用默认；不推定法律或EBU批准。 | cp_acceptance; ebu-radio-production-2023 |
| `quality_activity` | all inventory rows | 覆盖完整制作/返工及场址；核对计量、库存、供应商及设备分配。缺失数据披露不确定性，不设零。 | cp_energy; cp_material; cp_service; cp_equipment |
| `quality_representative` | radio_original | 声明类型、格式、录制/直播路线及来源复用；仅计数不能比较不同时长/质量。 | cp_acceptance |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_reference` | 要求完整验收原创资产、全部限定及关联radio_original的恰为1件产出。拒绝将播出、下载或权利付款作为原创产出。 | un-cpc-radio-originals; ebu-radio-production-2023 |
| `validate_coverage` | 检查制作/返工及自营/供应商区分；拒绝隐瞒辅助、存储、交通、耗材或排放遗漏。声明身份/上游缺口，缺失时禁止完整生命周期声称。 |  |
| `validate_units` | 检查计数及归一化；保留电力能量/MJ、设备计数、服务小时及旅客距离单位。仅名称不能确立路线、地域、属性或UUID适用性。 |  |
| `validate_equipment_shares` | 核验持久资产ID、使用分子、有依据的全寿命／累计服务分母及期间已归属份额；跨全部项目和期间累计制造份额不得超过1。未知分母或期间份额须明确审查，不能将一个观察期当成完整寿命或每期重计整件制造。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | original_asset_production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按透明复用分配，作为声明广播/复制/使用情景的明确原创制作投入 |
| excluded_use | 未限定的完整广播/收听足迹；仅计数比较；法律批准 |
| required_metadata | 参考限定；来源层级；场址/期间；路线；自营/供应商覆盖；数据集版本；分配 |
| required_quality_disclosure | 前景/上游覆盖；身份缺口；计量/供应商支持；设备不确定性；排除及敏感性 |
| update_trigger | 原创版本/范围/路线更新；设备/场址/供电变化；实质分配或验收变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc-radio-originals | official_guidance | UNSD CPC 3.0 subclass 84611 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84611 | 原创广播内容身份及无线播出用途；无能耗因子 |
| un-cpc-sound-originals | official_guidance | UNSD CPC 3.0 subclass 96113 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/96113 | 声音录音重叠及来源组件区分 |
| ebu-radio-production-2023 | official_guidance | EBU Tech 3401, November 2023, §1.2 p.6, §2 pp.7–8, §4 pp.8–10. https://tech.ebu.ch/docs/tech/tech3401.pdf | 节目层级及制作/分发区分；仅实际采用时应用建议；无环境因子 |
| un-sna-originals-2008 | official_guidance | UN et al., System of National Accounts 2008, §§10.115–10.116 p.207; §6.208 onwards. https://unstats.un.org/unsd/nationalaccount/docs/SNA2008.pdf | 仅使用原创/副本历史概念区分；不采用货币分配，不声称现行法律/寿命 |
