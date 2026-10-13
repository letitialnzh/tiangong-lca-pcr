---
pcr_id: pcr.community-social-and-personal-services.audio-original-assets.sound-recording-original-production
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 录音原创资产制作

## 1. 范围与适用性

声音、语言和音乐的数字或模拟原始录音制作，从确定项目和既有输入开始，直至验收并初次交付身份明确的完整录音资产。涵盖录音室、外景、语言、音乐及环境声音录制，并纳入交付物实际要求的编辑、混音、合成或母带处理。须声明原件为原始录音、批准混音或母带，以及构成完整原件的组件集合，不能默认只是一份文件。不统一强制母带处理阶段或采样率。[来源：`un-cpc-sound-originals`]

排除未录音的现场表演、单独脚本、不以原创资产为输出的纯录音劳动、实体媒体批量复制、后续下载和流播、广播传输、独立软件或数据资产，以及无制作活动的权利交易。为广播制作的录音也可能是广播原创：同一资产的制作清单只计一次，明确共享和组件边界。超出源录音的广播编辑组装属于新增工作；分类或整体知识产权出售不构成新的制作事件。[来源：`un-cpc-radio-originals`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.community-social-and-personal-services.audio-original-assets.sound-recording-original-production |
| classification_refs | CPC 3.0 96113 |
| covered_products | 身份明确的数字或模拟声音、语言和音乐原始录音；所有实际采用的制作路线 |
| excluded_products | 未录音脚本或现场活动；复制、下载及广播运行；纯服务劳动；纯权利转售 |
| representative_product | 声明制作阶段、版本及组件集合的验收完整数字录音原件 |
| production_route | 项目准备 → 实际采录或录音创作 → 按需实际编辑、混音或母带处理 → 核验完整资产并初次交付 |
| market_state | 在明确权利及技术验收条件下持有或转移的可复用录音原件，不推断法律批准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制作并初次交付一个身份明确的完整录音原件 |
| How much | 一个验收原件，声明精确时长、制作阶段、声道及组件层级 |
| How well | 实际委托规范及核验完整性、可播放原件载体、来源和允许复用条件；不虚构质量等级 |
| How long or cycle | 完整创作周期，包含重做及验收交付；披露未来复用期间，不假定资产寿命 |
| reference_flow_link | `accepted_original` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整录音原件 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | 件 |
| 必需限定信息 | 原件及项目ID；版本；名称及声音、语言或音乐类别；原始录音、混音或母带阶段；完整录音次、歌曲、专辑或声音库范围及组件层级；精确时长；数字或模拟路线；编码、采样率、位深、声道或模拟带格式、带速及轨道；原生及转换格式；实际验收规范、结果和日期；初次交付及备份范围与截止点；来源；允许复用及权利；制作场址及期间；自有与供应商覆盖；电力地域与电压 |

件与公开 Item(s) 为同一数量单位；item 是其单件英文别名。数据包须声明全部限定信息。权利、收入、听众数、字节数及载体质量均不能替代原件数。明确集合组件，避免同时将整套及每个组件作为独立完整输出重复计数。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `original_count` | reference product | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | 件 | 用 cp_acceptance 计数验收完整原件；内部录音次、副本和后续使用不增加产出。 |
| `electricity_unit` | prep_electricity; capture_electricity; finish_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留已核验公开能量属性；实测 kWh × 3.6 转为 MJ，不改变参考分母。 |
| `carrier_unit` | blank_tape; discarded_tape | 质量 | kg | 用 cp_carrier 单独采集实体带材；长度换算须有实际供应商线质量或可追溯称重，不由录音时长换算。 |
| `service_unit` | recording_service; mastering_service; hosted_storage | 时间 | h | 计量所声明供应商活动并核对其清单；场次或容量时间本身不等于能量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 确定录音项目、既有来源输入和已安装设施；不将输入或设施视为无负荷 |
| starting_condition_role | foreground_start |
| product_classification_scope | 录音原件创作及初次验收交付；分类不建立另一个原件身份 |
| recursive_input_rule | 既有版本录音以明确上游制作份额进入；内部采录属于前景；父资产及组件份额须核对 |
| upstream_dataset_requirement | 核验的电力、载体、来源原件、服务、出行及设备制造清单；披露缺项 |
| disclosure | 阶段及组件层级；实际操作、场址和期间；自有与供应商划分；设施支持；备份及交付截止点；下游排除和上游缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_creation` | 纳入实际准备、录音及创作、重做、处理、技术核验、验收前存储及首次约定交付。按真实路线选择操作；并非所有录音都要求混音或母带版本。 | un-cpc-sound-originals |
| `boundary_stage` | 声明验收阶段及支持组件。音乐录制原始轨、批准混音和母带属于不同交接阶段；先前负荷仅向下传递一次，不能反复作为独立新创作。 | academy-delivery-2025 |
| `boundary_downstream` | 分别记录实际验收及首次约定交付完成端点，两者均完成时才结束创作边界；保留两端点之间可归属的存储、支持、服务及设备活动。单列该边界之后的持续保存、后续媒体复制、下载、流播、传输及收听。记录初次交付实际使用的网络活动、实体载体及运输；不预设网络能耗系数。 |  |
| `boundary_actual` | 筛查实际设施公用工程、燃料、释放、耗材、设备、出行及废物。此处缺少的每个实际交换须增补具体单行；不假定发电机或制冷剂排放。供电排放属于上游。上游清单缺失时不得声称完整摇篮到大门。 |  |

## 6. 过程清单结构

以下卡片描述常见单独交换，依各行条件纳入。不预设电气录音存在基本流释放。实际释放须有实测物种、化石或生物来源、受纳介质及单独核验的基本流身份；即使没有释放也保留筛查。数据集须将真实新增设备、实体交付硬盘、包装及运输路线各自列为独立交换；示例卡片不构成零负荷豁免。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| prepare | 确定并准备录音项目 | required | 实际项目操作；适用各行条件 | foreground_production | 每声明的参考流 |
| capture | 采录或创作录制声音 | required | 实际数字或模拟路线；保留既有组件来源 | foreground_production | 每声明的参考流 |
| finish | 处理、核验并初次交付完整原件 | required | 仅实际处理；母带处理依验收阶段条件纳入 | foreground_production | 每声明的参考流 |

### 过程：确定并准备录音项目（`prepare`）

#### 输入

##### 产品流

###### 交流电（`prep_electricity`）

计量准备、试录和项目支持的归属电量。此 UUID 仅适用于中国电网平均组合、到用户、低于1千伏的供电。其他供电须单独核验具体流并采用同一实测核算。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每声明的参考流的归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

### 过程：采录或创作录制声音（`capture`）

#### 输入

##### 产品流

###### 交流电（`capture_electricity`）

计量录制、监听、录音机充电及实际录音室通风和支持用电。适用同一中国低于1千伏条件；排除已由供应商清单覆盖的电量，避免重复。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每声明的参考流的归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 未录制的模拟磁性音频带（`blank_tape`）

仅在实际模拟录制或混音写带时纳入。依据供应商记录明确带材牌号、基膜、涂层、宽度和长度，称量领用及退回带材。这是物理载体，不是原创资产；不假定带材配方。

- 选定流：未录制的模拟磁性音频带
- 流属性/单位：质量 / kg
- 数量规则：每声明的参考流的归属实测交换量；cp_carrier。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carrier`
- 来源：

###### 电容式传声器（`microphone_share`）

仅在实际使用自有电容式传声器时纳入，明确型号及制造数据集；以有依据的利用记录归属制造份额。其他传声器类型须独立成行；服务已含设备不得重复计入。

- 选定流：电容式传声器
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：每声明的参考流的归属实测交换量；cp_equipment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_equipment`
- 来源：

###### 配置明确的音频录音机（`recorder_share`）

仅在使用独立自有录音机时纳入。明确数字或模拟型号、通道、录音介质及配置。制造份额基于实际利用记录，不能由额定功率或虚构寿命推导。

- 选定流：配置明确的音频录音机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：每声明的参考流的归属实测交换量；cp_equipment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_equipment`
- 来源：

###### 外景声音录制场次服务（`recording_service`）

仅在外包采录时纳入。明确场次、人员、设备、出行及交付物，取得供应商清单和实际场次小时数。如交付的是既有原件，则用 source_original，不重复计入相同负荷。

- 选定流：外景声音录制场次服务
- 流属性/单位：时间 / h
- 数量规则：每声明的参考流的归属实测交换量；cp_service。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：

###### 身份明确的既有录音原件（`source_original`）

仅在新原件采用外部制作的既有录音时纳入。声明来源版本、允许复用条件和所归属制作份额。内部新录音次仍属于前景操作，不作为重复上游输入；许可费是元数据。

- 选定流：身份明确的既有录音原件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：每声明的参考流的归属实测交换量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 汽油乘用车旅客运输（`location_travel`）

仅在实际采用该路线开展制作出行时纳入。保留旅程距离、乘员和项目份额；不重复计入供应商已覆盖出行。其他方式须独立具体交换。

- 选定流：汽油乘用车旅客运输
- 流属性/单位：旅客运输 / person*km
- 数量规则：每声明的参考流的归属实测交换量；cp_travel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_travel`
- 来源：

### 过程：处理、核验并初次交付完整原件（`finish`）

#### 输入

##### 产品流

###### 交流电（`finish_electricity`）

计量编辑、混音、实际母带处理、核验、验收前备份及运营者侧交付用电。适用同一中国低于1千伏条件。记录实际处理时数及支持用电；不从录音时长或 GB 推算电量。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每声明的参考流的归属实测交换量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 配置明确的音频制作计算机工作站（`workstation_share`）

在此一次计入各制作阶段使用的工作站制造归属量，保留实际配置及有依据的利用分母。数字音频工作站处理及合成须记录为实际操作；不预设工作站或寿命。

- 选定流：配置明确的音频制作计算机工作站
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：每声明的参考流的归属实测交换量；cp_equipment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_equipment`
- 来源：

###### 录音母带处理场次服务（`mastering_service`）

仅在声明的验收阶段实际需要且外包母带处理时纳入。固定交付格式、通道、版本及供应商范围，采集真实场次小时及供应商清单。原始录音原件不要求虚构母带处理。

- 选定流：录音母带处理场次服务
- 流属性/单位：时间 / h
- 数量规则：每声明的参考流的归属实测交换量；cp_service。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：

###### 托管音频项目存储服务（`hosted_storage`）

仅在验收及初次交付前外购项目存储时纳入。固定容量、地域、冗余和保留时间，按容量时间记录与供应商清单及其实际服务小时接口核对。验收后归档运行单列；GB 不等于 kWh。

- 选定流：托管音频项目存储服务
- 流属性/单位：时间 / h
- 数量规则：每声明的参考流的归属实测交换量；cp_service。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：

#### 输出

##### 产品流

###### 验收完整录音原件（`accepted_original`）

一个声明阶段和版本的验收完整原件，包含所定义组件及初次交付包。录音次、歌曲、专辑或声音库只有在明确作为完整验收资产时才计为一件。文件、声道、分轨及安全副本不增加原件数。

- 选定流：验收完整录音原件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：1 件
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`un-cpc-sound-originals`

##### 废物流

###### 废弃模拟磁性音频带（`discarded_tape`）

仅在制作中实际弃置带材时纳入；称量该分类废物流并保留组成及处置证据。作为原件载体交付的录制带不是废物。不自动主张回收替代收益。

- 选定流：废弃模拟磁性音频带
- 流属性/单位：质量 / kg
- 数量规则：每声明的参考流的归属实测交换量；cp_carrier。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carrier`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_shared` | 优先拆分作业。根据真实设备实测功率、占用及任务记录归属共享表计量；说明待机、通风和支持份额，核对全部分配。供应商存储和网络清单采用实际容量时间、传输及服务范围，不按价格或通用 kWh/GB 分配。 |  |
| `allocate_original` | 优先拆分联合制作的原件；否则证明物理共享工作份额并作敏感性披露。失败录音次及修订归属验收资产。组件与集合、原始轨与混音及母带、广播与录音重叠负荷均须可追溯且只计一次；权利或版税出售不是共产品。 |  |
| `allocate_equipment` | 以跨全部项目和期间的持久资产台账归属真实设备制造。项目实测使用仅为分子；分母须覆盖有依据的实际寿命、累计服务活动或经论证预计寿命，并开展敏感性分析和后续核对。跨全部项目及期间的累计制造份额不得超过1，不得在新项目或观察期间重置。仅观察期间的方法只分配已归属该期间的制造负担份额，不能每个期间投入整件设备清单。寿命、分母或期间份额未知须明确审查；不预设寿命或质量。避免服务、租赁及设备重复计入，不自动赋予废物替代收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | finish | accepted_original | 原件验收台账 | ID；版本；阶段；层级；时长；编码或模拟格式；验收结果；交付；权利 | 检查完整原件、组件、播放及实际约定技术和权利记录；核对副本及先前阶段ID | 件 | 每个验收原件 | 完整制作及重做到初次交付 | 全部运营者和供应商场址 | 每声明的参考流 | 原件校验和或模拟载体ID；签署验收；组件台账 |
| cp_energy | prepare; capture; finish | electricity | 表计及作业记录 | 表计；时间戳；kWh；任务；场址；电压；功率曲线；待机及支持；供应商覆盖 | 分表计量作业或结合实测设备功率、占用日志核对区间表计；将实测 kWh 转为 MJ | MJ | 每个录音及处理交付区间 | 全部项目工作含失败录音及备份 | 全部纳入场址 | 每声明的参考流 | 经校准表计；作业日志；分配总量核对 |
| cp_carrier | capture; finish | blank_tape; discarded_tape | 载体平衡 | 牌号；基膜及涂层；宽度；长度；领用、退回、保留和弃置kg；处置 | 实际称量带材或采用已核验牌号特定实测线质量；单独核对已交付载体与废物 | kg | 每次领用、退回及弃置 | 全部声明的模拟工作 | 运营者及相关供应商 | 每声明的参考流 | 校准称重；供应商规格；库存及处置台账 |
| cp_equipment | capture; finish | microphone_share; recorder_share; workstation_share | 设备利用记录 | 资产ID；型号；配置；制造清单；实际任务时数；有依据寿命或累计服务活动；经论证预计寿命；期间份额；以往累计份额；分配份额；剩余份额；敏感性；后续核对；实际验收时间；实际首次约定交付完成时间；两端点之间可归属活动 | 将真实设备与制造清单及作业记录相连；核验寿命或服务活动分母及跨项目、跨期间持久台账。仅观察期间核算只分配已归属期间份额，核对累计份额不超过1。分母或份额未知须审查，不预设寿命 | 件 | 每项目及设备变更 | 覆盖实际验收及首次约定交付完成的全部项目活动，以两者较晚的实际记录端点截止，不假定重合 | 纳入场址的自有设备 | 每声明的参考流 | 持久资产台账；寿命及期间份额证据；累计份额守恒；敏感性；后续核对 |
| cp_service | capture; finish | recording_service; mastering_service; hosted_storage | 供应商活动台账 | 供应商；场次或服务h；容量；地域；冗余；交付；电力、设备及出行覆盖；实际验收时间；实际首次约定交付完成时间；两端点之间可归属活动 | 获取场次或存储活动及供应商清单，核对容量时间及服务小时定义，避免自有与供应商重复 | h | 每供应商交付或区间 | 覆盖实际验收及首次约定交付完成的全部项目活动，以两者较晚的实际记录端点截止，不假定重合 | 声明供应商及场址 | 每声明的参考流 | 供应商环境清单；活动台账；范围核对 |
| cp_asset | capture | source_original | 来源资产出处 | 来源ID及版本；阶段；组件；权利；上游负荷；份额 | 核验原件出处、允许复用及制作清单；与版税单列明确归属份额 | 件 | 每来源组件 | 上游清单代表的实际来源制作 | 已识别来源制作方 | 每声明的参考流 | 上游数据集；权利记录；父资产与组件核对 |
| cp_travel | capture | location_travel | 旅程记录 | 汽车路线；汽油；km；乘员；目的；供应商覆盖 | 读取真实旅程和项目占用份额，核对旅客距离并排除重复供应商运输 | person*km | 每次旅程 | 全部实际制作出行 | 制作地点 | 每声明的参考流 | 行程日志；路线及乘员记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_conversion` | prep_electricity; capture_electricity; finish_electricity | MJ = 归属实测 kWh × 3.6；保留原分母。 | cp_energy; 实测kWh | 每声明的参考流的MJ |  |
| `original_normalization` | all inventory rows | 同质且声明范围相同的原件，将每项归属总量除以实际验收数。不同资产先按项目归属，分别报告。参考输出恰为1件。 | cp_acceptance; 归属总量 | 每声明的参考流的交换量 |  |
| `provider_reconciliation` | recording_service; mastering_service; hosted_storage | 按供应商清单核对实际声明活动；时长或容量本身不能确定能量。 | cp_service; 供应商清单 | 每声明的参考流的服务量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_original` | accepted_original | 固定阶段、完整层级、版本及实际验收规范。音乐仅在已采用时适用交付建议；语言或环境声音原件采用其实际规范。 | cp_acceptance; academy-delivery-2025 |
| `quality_format` | accepted_original | 记录原生及交付分辨率、格式、声道布局及元数据出处；转换文件不意味着新内容或更高来源分辨率。国会图书馆偏好属于保存指导，不是通用委托要求。 | cp_acceptance; loc-audio-formats |
| `quality_activity` | all inventory rows | 核对完整操作、物料库存、支持、设备及供应商；披露缺失计量或上游清单及不确定性，不设为零。核验设备跨全部项目及期间累计份额、寿命或服务活动分母及后续更新；无依据分母或期间份额保留待审查。 | cp_energy; cp_carrier; cp_equipment; cp_service |
| `quality_representative` | accepted_original | 声明类型、路线、时长、阶段、组件复用及代表总体。一个计数不能证明不同原件的可比性。 | cp_acceptance |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_reference` | 要求全部限定信息、一个验收完整录音资产及关联 accepted_original 的1件输出；拒绝将未录音脚本、使用、费用或副本作为原件输出。 | un-cpc-sound-originals |
| `validate_overlap` | 核验阶段、集合及组件和广播与录音关系。复用既有原件须有可追溯上游份额；不能因另一分类或权利出售重新计入共同制作负荷。 | un-cpc-radio-originals |
| `validate_coverage` | 检查各真实路线、重做、备份、初次交付和支持活动；筛查释放并保留原子化增补。核对运营者与供应商归属；完整生命周期声明前须披露缺失身份及上游负荷。拒绝每项目或期间重置整件资产制造清单及累计资产份额超过1；寿命、分母或期间份额无依据时须审查。 |  |
| `validate_units` | 保留原件计数、物理载体质量、电力MJ、供应商小时及旅客距离。检查公开身份路线、属性及单位而非仅名称；不将GB直接映射为kWh，不改写公开属性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | original_asset_production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在明确复用分配下作为广播、视听、复制、下载或收听情景的可追溯录音原件输入 |
| excluded_use | 缺乏下游过程时的完整收听、广播或下载足迹；纯计数比较；法律或方法学批准 |
| required_metadata | 全部参考限定；阶段、集合及组件谱系；真实路线；场址及期间；运营者、供应商及上游覆盖；数据集版本；实际分配基准 |
| required_quality_disclosure | 计量及身份缺口；上游完整性；设备分母不确定性；排除操作；分配敏感性及来源限制 |
| update_trigger | 新原件、阶段、版本或范围；录音、处理或交付路线、设备、供电及验收条件变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-sound-originals | official_guidance | 联合国统计司CPC 3.0次级96113解释。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/96113 | 数字或模拟声音、语言和音乐原件范围；不提供环境因子 |
| un-cpc-radio-originals | official_guidance | 联合国统计司CPC 3.0次级84611解释。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84611 | 录音与广播重叠；不因分类而重复制作 |
| academy-delivery-2025 | handbook | Recording Academy P&E Wing，《Delivery Recommendations for Recorded Music Projects》，2025，印刷页4–8（PDF页6–10）。https://naras.a.bigcontent.io/v1/static/PE_Guidebook_241016 | 音乐原始轨、组件、阶段及模拟与数字交付区分；建议仅在采用时适用；不提供默认能耗或归档寿命 |
| loc-audio-formats | official_guidance | 美国国会图书馆《Recommended Formats Statement》IV Audio Works，ii A/C，当前网页声明。https://www.loc.gov/preservation/resources/rfs/audio.html | 无介质依赖的原生及交付格式与元数据描述；仅保存偏好 |
