---
pcr_id: pcr.business-and-production-services.digital-content.musical-audio-download-delivery
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 音乐音频下载交付


## 1. 范围与适用性

本 PCR 涵盖可下载并存储在本地设备上的音乐录音电子文件交付。包括单曲和完整专辑、有损和无损格式、新旧录音、自有和外包交付基础设施。每个数据集绑定一个明确文件包和发布版本。实质方法需求是区分一次文件准备、共享存储和重复传输，并验证完成的本地副本且不倍增原创制作负担。来源：`un-cpc3-music`；`bandcamp-formats`。

排除没有本地文件交付的实时或流媒体音频、非音乐音频和有声书、视频下载、广播节目、作为参考输出的音乐作品或录音原创资产、实体录制载体、软件原件、数据库及仅涉及权利或许可的交易。下载资格本身不代表交付完成。核心前景从已验收源录音开始，到接收设备上的文件验收结束。原创制作及硬件制造作为分别链接的上游层；后续收听及留存为下游使用。本方法是交付清单，不声称完整音乐产品 cradle-to-gate 生命周期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.digital-content.musical-audio-download-delivery |
| classification_refs | CPC 3.0: 84321 |
| covered_products | 完整本地存储音乐音频文件包；声明单曲或专辑配置 |
| excluded_products | 流媒体；广播；非音乐音频；视频；实体载体；原件和仅权利销售 |
| representative_product | 一个明确音乐曲目的验收下载；专辑配置采用相同完整文件包方法 |
| production_route | 已验收母版 → 文件准备与验收 → 源站及缓存托管 → 传输 → 本地文件验收 |
| market_state | 已交付音乐音频文件包，版本与使用条件明确 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付所声明音乐音频录音文件包的完整可用本地副本 |
| How much | 1 件；一次成功完整文件包交付 |
| How well | 确切发布版本和曲目表、声明编码及音频参数；按有记录的检查验收字节完整性与解码可播放性 |
| How long or cycle | 一次下载直至本地文件验收；实际准备和托管区间归属于已观察交付群组；不暗含收听寿命 |
| reference_flow_link | `accepted_download` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完整音乐音频下载 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 录音及发布标识；曲目顺序与文件包配置；音频时长；编码及容器、适用的码率模式或采样率与位深；声道配置；文件清单、校验值与实际字节；附带封面及元数据；复用和使用条件；验收端点和方法；群组期间及验收数量；托管、缓存、备份区间和副本数；网络段及接收设备类型；供应商范围；电力地域与电压；原创及硬件层链接 |

在数据集元数据或等效记录中声明所有限定信息。item 是公开单位 Item(s) 的显示简写，换算系数为 1，计数对象是完整交付文件包。它既非 kg 数量，也非版权、用户或销售单位。专辑与单曲是不同配置；件数相同不代表功能等效。来源：`un-cpc3-music`；`bandcamp-formats`。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | accepted_download | 物品数量 | item | 1 件 = 一份完整验收下载文件包；cp_acceptance 对重试和日志事件去重。字节、音频分钟、购买次数和权利不能替代交付文件包计数。 |
| energy_conversion | prepare_electricity; hosting_electricity; network_electricity; receiving_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开电能属性；1 kWh = 3.6 MJ 为精确换算。区分 W 功率和 kWh 能量；记录电表积分区间。来源：nist-si-conversion。 |
| scope_units | all inventory rows | 声明交换属性 | 声明行单位 | 母版、供应商作业和硬件只按真实定义及可归属份额计数。存储及传输字节保留为活动记录；不得未经证明将字节换成能量或权利换成质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 版本、来源及使用条件已知的验收音乐录音母版 |
| starting_condition_role | 前景交付接口；原创制作保留为单独识别的上游层 |
| product_classification_scope | 可下载并在本地存储的音乐录音；分类是描述信息，不是分配边界 |
| recursive_input_rule | 已准备音乐文件在供应商接口仅记一次；不重复其上游编码或原创制作 |
| upstream_dataset_requirement | 取得兼容的录音制作、硬件及供应商清单用于链接层；披露不可用层 |
| disclosure | 说明端点、责任、原创与硬件链接、存储期间、供应商重叠、接收端覆盖及下游排除 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_delivery | delivery_system | 纳入实际文件接收、格式准备或核验、发布质量检查、源站及缓存存储和副本、传输尝试以及本地接收直至完整性验收。站址或供应商划分不能排除必要网络段；缺数据须明确覆盖不完整。 | un-cpc3-music; bandcamp-formats |
| boundary_layers | recording_master; server_hardware; router_hardware; receiving_computer | 核心前景始于源录音验收之后。录音、表演及作曲制作单独报告，仅链接有证据的可归属上游清单。硬件生产和寿命终结位于明确资产或供应商层。不得将仅前景电力称为完整产品 LCA。 | gsf-sci110 |
| boundary_actual | all inventory rows | 每项实际燃料、化学品、冷却供水、废水、固体废物、材料、附加设备及有依据的基础流排放均须单独原子行，采用实测数量和属性。电力运行下载没有必然厂内 CO2、NOx 或水排放。上游电力排放不是直接排放。缺项须有路线证据；未解决身份不是截断。 | gsf-sci110 |
| boundary_use | post_acceptance | 核心交付排除验收后离线收听、声明下载验收后的留存、用户出行、无关平台浏览或流媒体、广告及仅权利交易。完整音乐使用比较须分别加入匹配的播放、留存、设备和原创制作情景。 | un-cpc3-music |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| preparation | 源接收、文件准备与发布质量检查 | required | 所有下载；只有实际格式转换时转码 | 交付准备 | 一份完整验收下载 |
| hosting | 源站及缓存托管 | required | 实际托管区间与副本；自有或供应商路线 | 存储 | 一份完整验收下载 |
| delivery | 网络传输与本地验收 | required | 所有实际传输段与接收端点 | 交付 | 一份完整验收下载 |

这些卡片定义独立交换，不给通用数量，也不代表完整场址物料表。实际自有操作使用实测电力和设备行；外包操作使用具备完整上游范围且经过核验的供应商交付行。混合路线划分不重叠段。这些行均不允许遗漏地域不匹配的供电或接收设备。

### 过程：文件准备 (`preparation`)

#### 输入

##### 产品流

###### 交流电 (`prepare_electricity`)

用于接收、必要时编码、元数据组装及发布质量检查的电力。包括失败尝试和可归属的共享计算负载。

本选定 UUID 仅适用于真实中国电网平均用户端低于 1 kV 供电。其他电力地域、电压或供电路线保留交换并单独核验匹配身份；类别范围仍是全球。逐阶段独立计量，避免重复供应商已包含电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每声明的参考流的实测可归属数量；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci110`

###### 音乐录音数字母版 (`recording_master`)

条件性上游链接交换：经识别且验收的音乐录音母版，按证据将其创作负担份额归属于本下载群组。复用母版不会因每份副本而重新物理制作。保留独立录音制作清单和受益用途台账；许可价格不能计量环境负担。该层不可用时披露上游未链接，不能认定创作负担为零。

- 选定流：音乐录音数字母版
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每声明的参考流的实测可归属数量；cp_master。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_master`
- 来源：`gsf-sci110`

###### 音乐音频转码作业 (`transcode_job`)

条件性：外部供应商实际为该音乐版本交付一项明确转码作业。定义源与目标格式、文件清单、作业完成及包含的电力和设备范围。将一项完成的批次作业分配给真实受益交付；供应商已涵盖的操作不能再计自有电力。已兼容的现成文件不必重新编码。

- 选定流：音乐音频转码作业
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每声明的参考流的实测可归属数量；cp_provider。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_provider`
- 来源：`gsf-sci110`

###### 计算服务器 (`server_hardware`)

条件性：用于准备或托管的一台明确自有计算服务器的可归属生产及寿命终结份额。按实际设备配置计数，以有证据的安装寿命和预留时间、资源份额归属，跨不重叠阶段仅计一次。不能以泛化软件服务替代，也不能每次下载计整台服务器。

- 选定流：计算服务器
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每声明的参考流的实测可归属数量；cp_device。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_device`
- 来源：`gsf-sci110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流


### 过程：托管 (`hosting`)

#### 输入

##### 产品流

###### 交流电 (`hosting_electricity`)

用于实际源站和缓存存储区间、读取以及本版本群组预留容量的电力。可归属时包括实测冷却和空闲范围，备份及冗余单独记录。存储字节时间只是需要与电表核对的活动驱动量，不是电能。

本选定 UUID 仅适用于真实中国电网平均用户端低于 1 kV 供电。其他电力地域、电压或供电路线保留交换并单独核验匹配身份；类别范围仍是全球。逐阶段独立计量，避免重复供应商已包含电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每声明的参考流的实测可归属数量；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci110`

###### 音乐音频文件托管预留交付 (`hosting_reservation`)

条件性外包替代：供应商定义的一项托管预留交付，绑定文件版本、容量、区间及副本配置。取得底层存储活动和电力、设备清单，再按交付归属已涵盖部分。单有金额发票不足以支撑。自有行排除供应商已涵盖的同一负担。

- 选定流：音乐音频文件托管预留交付
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每声明的参考流的实测可归属数量；cp_provider。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_provider`
- 来源：`gsf-sci110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流


### 过程：下载与验收 (`delivery`)

#### 输入

##### 产品流

###### 交流电 (`network_electricity`)

用于所声明责任边界内实测前景下载传输设备和接入网络的电力。将会话流量、重试和共享预留负载与同期间电表或供应商清单核对。不能将 GB 乘以虚构的 kWh/GB 系数；远端供应商涵盖的传输使用 transmission_session。

本选定 UUID 仅适用于真实中国电网平均用户端低于 1 kV 供电。其他电力地域、电压或供电路线保留交换并单独核验匹配身份；类别范围仍是全球。逐阶段独立计量，避免重复供应商已包含电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每声明的参考流的实测可归属数量；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci110`

###### IP分组路由器 (`router_hardware`)

条件性：一台明确自有路由器参与传输边界。按有记录的容量预留、时间及安装寿命证据归属其生产和寿命终结份额。实际交换机、光终端或存储驱动器是不同设备，存在时须分别增加行，本路由器不能充当代理。

- 选定流：IP分组路由器
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每声明的参考流的实测可归属数量；cp_device。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_device`
- 来源：`gsf-sci110`

###### 音乐音频下载传输会话 (`transmission_session`)

条件性：外部网络供应商交付明确端到端会话段。绑定端点、传输文件校验值、有效和重传字节、连接技术、时间及涵盖的设备和电力层。一份成功交付包可能需要多次尝试；供应商流量计数不能定义最终验收输出。

- 选定流：音乐音频下载传输会话
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每声明的参考流的实测可归属数量；cp_provider。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_provider`
- 来源：`gsf-sci110`

###### 交流电 (`receiving_electricity`)

用于明确本地设备接收、写入、实际存在时解压和检查交付文件直至验收的可归属电力。采用受控实测会话或有效设备遥测，并披露采样。后续离线播放、留存及重复收听属于独立使用情景。

本选定 UUID 仅适用于真实中国电网平均用户端低于 1 kV 供电。其他电力地域、电压或供电路线保留交换并单独核验匹配身份；类别范围仍是全球。逐阶段独立计量，避免重复供应商已包含电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：每声明的参考流的实测可归属数量；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci110`

###### 下载接收计算机 (`receiving_computer`)

条件性计算机接收路线：一台实际接收计算机的可归属份额，声明配置及实测会话使用。其他接收设备仍在范围内，但须有各自原子设备身份及证据；本计算机不能代理智能手机。记录安装寿命和预留资源，不虚构设备寿命或质量。

- 选定流：下载接收计算机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：每声明的参考流的实测可归属数量；cp_device。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_device`
- 来源：`gsf-sci110`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整音乐音频下载 (`accepted_download`)

所声明音乐录音版本的一份验收交付文件包：一首曲目或一个声明的完整专辑，绑定有序曲目表、编码及完整性检查。仅计完成的本地交付，不计销售、点击、流媒体播放、部分传输或重复日志事件。失败作业仍保留在投入台账。

- 选定流：完整音乐音频下载
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 件
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 来源：`un-cpc3-music`; `bandcamp-formats`

##### 废物流

##### 基本流


## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | all inventory rows | 分配前拆分阶段、版本群组及自有与供应商段。采用真实工作负载遥测及不重叠电表范围；将已归属份额及残余之和与观察总量核对。收入、许可价值和用户数不是物理份额。 | gsf-sci110 |
| allocation_storage_network | hosting_electricity; network_electricity | 存储容量时间和传输字节仅可在实际预留负载、技术及电表或供应商核对支持下用于实测因果归属。报告空闲容量、副本、重传和接收端范围。不规定通用每 GB 能耗因子或任意冷却乘数。 | gsf-sci110 |
| allocation_device | server_hardware; router_hardware; receiving_computer | 对每个明确设备采用实际有记录的安装寿命、预留时间和资源容量份额。核对全部受益用途，不能重复供应商已涵盖硬件。不同设备及非计算材料须有各自记录；不提供默认寿命或质量。 | gsf-sci110 |
| allocation_original | recording_master; transcode_job | 将原创录音制作及可复用编码作业与增量下载分开。对同一母版及版本跨下载、流媒体和实体发行用途建立守恒有限受益台账。优先实测拆分；闭合群组分配须披露观察期间、排除受益用途及敏感性。不能按虚构未来销售量分摊完整母版负担，也不能每次下载计整份母版。 | un-cpc3-music |
| allocation_attempts | accepted_download | 将研究交付群组可归属的失败编码或传输活动纳入投入；仅以完整本地验收交付归一化。同一版本群组中的重复成功下载作为不同已交付副本，但重复日志不能增加输出。 | un-cpc3-music |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | delivery | 完整输出 | acceptance_record | 发布标识；有序文件及曲目；校验值；编码和音频参数；字节；时长；端点；会话标识；尝试次数；完整验收数；权利与使用条件 | 将服务器交付事件与本地文件清单、完整性和解码验收或有记录的接收端采样证据核对；按事件标识去重并区分部分传输 | item | 每份交付文件包 | 声明完整群组区间 | 源站、网络及实际接收端点 | 每声明的参考流 | 版本清单；测试结果；日志；采样和失败记录 |
| cp_energy | preparation; hosting; delivery | 阶段电力 | meter_record | 电表；起止；阶段及作业；kWh；地域及电压；共享预留；冷却和空闲范围；会话、存储及流量日志；分配份额；供应商重叠 | 使用经校准电表或有效遥测，在实际不重叠阶段区间积分；核对场址总量和群组负载包括重试；接收设备会话单独测试 | kWh | 每次作业和实测区间 | 准备及实际存储和传输区间 | 全部实测自有段和接收端样本 | 每声明的参考流 | 校准；原始遥测；期间核对；采样不确定性 |
| cp_master | preparation | 上游母版份额 | source_record | 母版标识及版本；验收；文件；来源及使用条件；制作清单；受益发布及使用群组；分配份额；截止点 | 查阅验收母版和原创制作清单；记录实际受益用途拆分及守恒上游份额；未解决原创层单独记录 | item | 每次源及版本台账更新 | 实际制作及受益用途报告范围 | 录音制作者及发行方 | 每声明的参考流 | 源清单；上游记录；分配与敏感性台账 |
| cp_provider | preparation; hosting; delivery | 具体供应商交付 | supplier_record | 供应商；限定作业、预留或会话标识；版本；区间；容量和字节；定义的件单位；验收完成；电力与硬件清单；受益份额 | 取得供应商活动和匹配清单，明确端点及包含层；将计费作业、预留和会话与验收核对并拆分自有重叠 | item | 每次供应商交付及期间 | 匹配准备、存储及传输群组 | 实际供应商及网络段 | 每声明的参考流 | 合同范围；清单；原始活动；重叠核对 |
| cp_device | preparation; delivery | 具体硬件份额 | asset_record | 设备标识、型号和配置；设备数；生产及寿命终结清单；安装寿命证据；预留时间及资源；总容量；阶段受益用途 | 将实际资产台账和供应商设备清单与负载预留日志核对；证明寿命并跨全部受益用途拆分设备份额 | item | 每种配置及预留期间 | 实际安装寿命和研究预留区间 | 自有准备及托管、网络和接收设备 | 每声明的参考流 | 资产记录；设备清单；寿命证据；负载份额 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_energy | prepare_electricity; hosting_electricity; network_electricity; receiving_electricity | 将每声明的参考流的可归属采集 kWh 乘以 3.6 转为 MJ。保留实测物理归属及不重叠供应商范围。 | cp_energy | 每声明的参考流的 MJ | nist-si-conversion |
| calculate_cohort | all inventory rows | 将每项实测可归属群组交换与同一发布配置及区间的完整验收文件包数核对，再将归属数量除以该件数。分子保留失败作业。保留归一化前总量及正分母。 | cp_acceptance; cp_energy; cp_provider; cp_master; cp_device | 每声明的参考流的交换 | un-cpc3-music; gsf-sci110 |
| calculate_device | server_hardware; router_hardware; receiving_computer | 按有证据安装寿命中的已记录预留时间份额及总容量中的预留资源份额得出可归属设备份额；将其用于实际明确设备清单并跨受益用途核对，再按群组归一化。不指定默认寿命或容量。 | cp_device; cp_acceptance | 每声明的参考流的可归属设备件数份额 | gsf-sci110 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | accepted_download | 绑定录音版本、实际字节、时长、编码、曲目顺序、完整性及来源和使用条件；此处验收是制作者验收，不是科学或法律认证。 | cp_acceptance; cp_master |
| quality_representative | all inventory rows | 声明地域、报告期间、格式、网络及接收设备分布；加权采样需真实群组权重。不能把一个中国电表外推至全球网络。 | cp_energy; cp_provider; cp_acceptance |
| quality_complete | all inventory rows | 报告未测接收端或供应商、不可用原创和设备层、容量归属不确定性及全部重试、空闲及备份缺口。缺少上游或传输层代表覆盖不完整，不是零交换。 | cp_energy; cp_device; cp_provider; cp_master |
| quality_uncertainty | allocation_original; allocation_device | 保留记录存储范围、原创受益用途、设备寿命、接收端采样及共享资源归属的敏感性；不提供默认生产系数。 | cp_master; cp_device; cp_energy |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_download | 按 cp_acceptance、确切产品名称及全部必需限定信息检查 1 件完整验收文件包。不能将点击、权利、收入、流媒体、部分文件或重复事件作为输出。 | un-cpc3-music; bandcamp-formats |
| validate_units | all inventory rows | 检查计数、属性及单位兼容性、精确 kWh 至 MJ 换算、属性至单位组链接和每声明参考流分母。不能为强配 UUID 替换公开主属性；拒绝无依据字节至能量或版权至质量换算。 | nist-si-conversion |
| validate_overlap | delivery_system | 核对不重叠电表及供应商层、设备份额、原创受益份额、存储区间和重试。经核验中国电力 UUID 须真实地域及电压匹配；其他地域仍在范围内并需另行匹配身份。 | gsf-sci110 |
| validate_coverage | dataset | 检查每项实际生产及交付阶段、附加原子交换和未解决层披露。批准前须独立适用性及科学审查；结构检查不认证环境影响、法律使用、音频保真度或完整生命周期覆盖。 | un-cpc3-music; gsf-sci110 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 音乐下载交付前景清单，上游原创、硬件及供应商层单独识别 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 证据完成后，作为声明音乐使用模型中的匹配下载投入，文件包质量和范围须一致 |
| excluded_use | 通用每首歌、字节、用户或许可影响；从仅交付数据声称完整音乐生命周期；流媒体或广播代理；不等专辑和单曲比较 |
| required_metadata | 全部参考限定信息；原创及版本谱系；群组总量；电表和供应商端点；硬件份额；地域和电压；存储及重试范围；单位换算；分配及附加交换 |
| required_quality_disclosure | 未解决身份及科学审查；原创、硬件、供应商及接收端缺口；采样、分配及时间不确定性；范围限制 |
| update_trigger | 录音或文件版本、编码、文件包大小、质量、供应商、网络及设备路线、地域、存储范围、验收或分配证据变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-music | official_guidance | UNSD, CPC Version 3.0, Code 84321, Explanatory note: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84321 | 当前官方文件及本地存储边界；不提供 LCA 系数 |
| bandcamp-formats | handbook | Bandcamp Help Center, Which audio format should I download?, 12 June 2026: https://get.bandcamp.help/en/articles/15263285-which-audio-format-should-i-download | 当前第一方有损、无损格式和元数据示例；不强制平台、保真门槛或默认文件大小 |
| gsf-sci110 | standard | Green Software Foundation, Software Carbon Intensity Specification 1.1.0; Energy, Embodied emissions, Software boundary and Quantification method: https://sci.greensoftware.foundation/ | 按真实前景证据适配计算范围和设备归属原则；不声称完整 SCI 或音乐 LCA 符合性 |
| nist-si-conversion | official_guidance | NIST SP 811 (2008), Appendix B.8 K, kilowatt hour: https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8 | 仅采用精确 1 kWh = 3.6 MJ；历史表格不用于 2019 年以前 SI 基本定义或生产强度 |
