---
pcr_id: pcr.constructions-and-construction-services.constructions.local-cable-network-works
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 本地电缆网络及附属工程交付

## 1. 范围与适用性

本规则适用于按实际场址及本地网络功能验收交付的电力、通信、电视电缆工程，以及本地配电变压站、变电站和带天线的传输塔实体。工程可为线路段、站点或明确界定的组合；须以实测边界、配置及验收状态识别，不能仅由分类代码建立产品身份。[联合国分类解释](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf)第280–281页提供范围依据。

方法需求是施工工程量与验收实体之间的可追溯关系，包括管沟和基础、敷设接续、站塔安装、恢复以及跨工程共用设备归属。电缆、导体或设备厂门制造方法只覆盖上游接口。排除长距离通信及输电、铁路专用电气化完整系统、电缆制造本身、单独安装服务和网络运营服务。按实际本地服务功能与边界区分长距离网络，不仅按电压或长度判定。

各路线以真实施工记录选择；不得用一个低压电缆案例代表全部本地工程。必要工序为实际交付实体的施工记录闭合和验收；管沟、架空、站塔、水下段按配置纳入。以下原子行不保证覆盖任一工程的全部材料：实际存在的其他组件、燃料、气体、废物、污染物及生态扰动须补充独立行与证据后才能声称清单完整。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.local-cable-network-works |
| classification_refs | CPC 3.0 53252; context only / 仅分类背景 |
| covered_products | 验收交付的本地电力、通信或电视电缆网络及实际附属站塔工程 |
| excluded_products | 长距离网络；整套铁路电气化；电缆厂门产品；单独施工服务；运营服务 |
| representative_product | 端点与回路明确的本地电缆线段，含其实际管道、接续、支承及验收恢复接口 |
| production_route | 按实际工程选取地下、架空、站塔及本地水下段；不预设全部同时存在 |
| market_state | 实际施工完成并验收交付的安装实体；记录通电或仅就绪状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在指定本地端点之间提供已安装的电力或通信连接，或交付配置明确的本地配电站、带天线传输塔实体 |
| How much | 一个独立验收实体；同时声明实测路线m、各回路电缆m、管孔数、站房m2、塔高m及实际额定容量等适用参数 |
| How well | 有真实竣工几何、组件规格、接续与接地、适用电气或光学试验和结构检查记录；不由本PCR授予合规或通电批准 |
| How long or cycle | 一次实际施工至验收交付周期，记录起止日期；不指定运行寿命 |
| reference_flow_link | `reference_product_local_cable_works` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已交付本地电缆网络工程 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | 件 |
| 必需限定信息 | 实体ID与场址；本地网络用途与端点；实际地下/架空/站塔/水下配置；实测几何；实际电压、容量或纤芯与电视信号规格；新建与保留组件；竣工及验收状态；施工日期；起始与交付接口；排除阶段；上游覆盖 |

件是公开物品数量单位组中Item(s)的显示别名，指上述同一个完整验收实体。长度、面积、容量是实测配置限定，不自动成为同一个参考产出，也不提供通用每公里、每平方米或每栋质量。参考产品UUID未解决。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_count` | 参考产品及验收产出 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | 件 | 参考数量固定为1件；所有清单、采集和计算按每声明的参考流归一化，不以采购合同或未完成工程计数。 |
| `geometry_and_cable_length` | 路线与电缆限定 | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | 按竣工测量区分路线长度、电缆长度、纤芯长度、回路并列和预留；m不能替代kg或item。 |
| `physical_mass` | 关联材料及余料的辅助质量平衡与设备归属记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实际状态称量，声明湿干基准；体积或长度转质量须有同批次密度或kg/m实测依据。设备质量仅支持制造归属，不是工程参考质量。 必需的质量/kg约束辅助记录，不替代长度或件数型交换主属性。管材电缆保留长度/m，完整接头、变压器保留物品数量/item；cp_materials/cp_cables关联行、批次、配置、领用量及独立实测kg或有据换算。不得把辅助质量作为第二笔制造交换。 |
| `energy_basis` | 燃料与施工电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开净热值属性；实测kWh乘3.6得到MJ。燃料kg乘批次MJ/kg；体积燃料先用实际密度换算kg。未知热值或密度不得猜测。 |
| `water_basis` | 供水、取水、直接排水及按体积计量的液体废物行；不包括按湿质量计量的drill_slurry | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按接口独立计量真实液体体积，保留水质、来源与受体；不混用资源取水、技术圈水或排放。废drill_slurry按cp_waste保留实测湿基质量/kg，包含滞留水及矿物固体；辅助体积须有同状态密度，不替代或重复计入该废物交换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 材料及设备交付接口、实际运输始点和现场初始状态；既有设施按实测接口记录 |
| starting_condition_role | foreground construction and delivery |
| product_classification_scope | local cable-network and ancillary civil entities |
| recursive_input_rule | 购入同类既有工程不递归当成本次新建产出；按已交付接口和历史负担声明，并单计实际改造 |
| upstream_dataset_requirement | 各购入产品的真实厂门制造背景与所需运输单独匹配；若缺失，声明未覆盖上游，不称完整摇篮到交付 |
| disclosure | 明确现场施工至验收的前景模块；逐段记录上游、运输、既有构件、场外处理、运行维护及拆除覆盖 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `construction_boundary` | 在记录的验收边界内纳入实际收货运输、放线、场地准备、土方、敷设接续、基础、站塔安装、试验、返工及恢复。按工序记录实际设备与公用活动；site-operations共用行不重复下游阶段总量。 | `spen-secondary-civil-2026` |
| `upstream_interface` | 电缆、管道、混凝土、变压器及其他购入物制造留在上游；施工不自动复写工厂清单。运输、外部废物处理为独立链接阶段并披露覆盖。 |  |
| `later_stages` | 运行电耗、网损、未来维护更换和最终拆除默认不在施工模块。若需要，独立建模有依据的实际期间或明确情景，保持参考功能一致并记录维护几何、拆除活动及废物去向；没有默认寿命或终端回收信用。 |  |
| `special_routes` | 非开挖或水下段保留实际钻孔、铺设埋设几何、流体配方、船舶设备小时、弃料、损失及受体介质。不以明挖假设替代路线；不能因缺少可表征基本流身份就宣称生态或噪声效应不存在。 | `itu-optical-cables-2009` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| site-operations | 收货、测量、运输与现场作业 | required | 所有交付工程；仅实际活动 | foreground construction | 每声明的参考流 |
| underground-civil | 地下管沟与穿越工程 | conditional | 实际地下路线或基础、电缆沟开挖；区分既有管道复用、明挖和非开挖穿越 | foreground construction | 每声明的参考流 |
| aerial-support | 架空支承与电缆悬挂 | conditional | 实际架空线或服务本地的传输塔；区分新建与保留支承 | foreground construction | 每声明的参考流 |
| cable-placement | 电缆敷设、接续与终端 | conditional | 实际新建或更换的本地电力、通信或电视电缆 | foreground construction | 每声明的参考流 |
| station-tower | 本地配电站与天线安装 | conditional | 交付工程内实际包含站点或天线设施；施工与安装设备分别计量 | foreground construction | 每声明的参考流 |
| marine-placement | 本地水下电缆敷设 | conditional | 仅有证据的服务本地的水下段；船舶铺设、埋设及岸端接口分别记录 | foreground construction | 每声明的参考流 |
| reinstatement | 恢复与施工废物外运 | conditional | 交付前实际扰动的表面恢复或施工废物外运 | foreground construction | 每声明的参考流 |
| acceptance | 检查、试验与验收交付 | required | 所有工程；试验与实际电气、光学、结构或天线配置相符 | foreground construction | 每声明的参考流 |

每行仅在该实际交换发生且身份限定相符时填写；未发生须留可核实不适用理由，缺证据不得写零。共用电力、燃料与水协议按process_id拆分原始活动后在site-operations汇总一次。工程配置不同的真实额外材料必须扩展原子行，不能填入下面已有名字。

### 过程：收货、测量、运输与现场作业（`site-operations`）

按供方票据验收实际电缆盘、组件与设备；测量端点、既有管线和验收工程占地。用实际吊装搬运设备卸货堆放，安装实际临时防护及交通设施，记录进退场与货运段。逐设备按工单计怠速、燃料、临电及用水时段。区分外包货运与自营运输，防止重复燃料。既有管道、杆及站资产是实测接口，不是新制造产出。

#### 输入

##### 产品流

###### 柴油（`site_diesel`）

仅现场发动机实际使用的石油馏分柴油，核实配方、硫等级及供货接口。用实测kg和批次净热值表达MJ；数据库次要质量比不作为燃料换算系数。生物燃料碳另计。

- 选定流：柴油 `fbd79004-188c-47a4-900b-96005d994690`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：实测现场发动机燃料能量；排除货运数据集已覆盖的运输燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`

###### 交流电（`site_electricity_lv`）

仅实际CN用户端低于1kV的电网平均消费组合。按工单分开现场机械、牵引、接续及试验电力；其他地域或电压需另核身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：实测kWh换算MJ；不与发电燃料重复
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`

###### 交流电（`site_electricity_mv`）

仅实际CN用户端1–35kV供电；与低于1kV电表及下游变压环节区分。这是施工电力，不是交付网络运行电力。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：该实际供电电压层级实测kWh换算MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`

###### 自来水（`site_supply_water`）

UUID仅限实际香港水处理厂门端的处理水生产与供应。另核真实运输、配水链接；其他地域另核身份。仅记录实际养护、清洗与抑尘用水；不采用1000kg/m3默认密度。

- 选定流：自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：与实际现场用途关联的匹配供水实测m3
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

###### 电缆盘公路货运（`road_freight`）

仅实际卡车运输且未包含在交付背景数据集中；其他交付物及废物路线分别记录运输批次并增加原子运输行。

- 选定流：电缆盘公路货运
- 流属性/单位：Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：实际吨数乘路线公里，保留空载回程处理及分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_logistics`

###### 液压挖掘机（`excavator_manufacturing_share`）

条件性实际挖掘机制造归属，与燃料分开。测量同配置设备净质量及有记录的无量纲活动份额；跨项目、期间、重复使用的累计份额不得超过一。寿命活动未知时保留审查；其他工具另核身份及记录。

- 选定流：液压挖掘机
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测设备kg乘有依据的制造归属份额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equipment`

##### 基本流

###### 地下水（`groundwater_abstraction`）

仅实际淡地下水、CAS7732-18-5、从已识别含水层跨可更新水资源边界抽取用于现场降水。在单元过程中记录真实取水国家以供国家相关表征，不推断稀缺等级。雨水进入及外购水另计；披露移除水与受体，不假定消耗。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按含水层与抽水时段实测取水m3
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

#### 输出

##### 基本流

###### 二氧化碳（化石源）（`fossil_co2_air`）

仅实际即时向外界空气、未指定子介质释放的化石二氧化碳。须有实际设备化石碳与氧化依据；不能仅凭购入燃料判定燃烧排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅实际测量或独立证据支持的特定物种kg；证据缺失为未解决，不是零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`

###### 一氧化氮（`molecular_no_air`）

仅实测分子NO、CAS10102-43-9、即时外界空气/未指定子介质释放；不是汇总NOx、NO2或N2O。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅实际测量或独立证据支持的特定物种kg；证据缺失为未解决，不是零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`

###### 二氧化氮（`molecular_no2_air`）

仅分子NO2、CAS10102-44-0、即时外界空气/未指定子介质释放。以NO2当量报告的NOx不是分子NO2；必要时保留未解决的物种分解。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅实际测量或独立证据支持的特定物种kg；证据缺失为未解决，不是零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`

###### 颗粒物 (PM2.5)（`pm25_air`）

仅分别识别的尾气或逸散作业经控制后实际即时向外界空气/未指定子介质释放的PM2.5。不等同于TSP、工作场所粉尘或总PM10。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅实际测量或独立证据支持的特定物种kg；证据缺失为未解决，不是零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-construction-dust-1995`

###### 颗粒物 (PM2.5 - PM10)（`coarse_pm_air`）

仅实际控制后即时外界空气/未指定子介质释放的大于2.5且不超过10微米粒级；防止与PM2.5和总PM10重叠。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：仅实际测量或独立证据支持的特定物种kg；证据缺失为未解决，不是零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`epa-construction-dust-1995`

###### 水（`freshwater_discharge`）

仅实际液态水直接进入已识别淡水受体，CAS7732-18-5。排除资源取水、供水、水蒸气、含盐受体及送处理废液。实测溶解污染物另列；本行只代表水。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：在受纳水体排放点实测真实直接排水m3；发生现场处理时计量处理后排放，未处理时仍记录真实直接排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

### 过程：地下管沟与穿越工程（`underground-civil`）

探明既有管线并放样实际管沟、井室、基础或穿越几何。明挖记录挖掘机破碎作业、支护、实际降水、分类弃土、管道定位、实测垫层回填、压实以及实际基础配筋、混凝土浇筑养护。复用管道检查通管及清洁，不虚构新土方。非开挖记录钻机与空压机泵活动、孔道、实际钻井液各组分和返流泥浆处理；插管及岸端穿越接口独立记录。用取样与去向证据区别直接排放和废液送处理。

#### 输入

##### 产品流

###### 高密度聚乙烯电缆保护管（`hdpe_duct`）

仅实际敷设于管沟或穿越段的HDPE管；保留内径、壁厚、孔管数量及既有管道接口。PVC与混凝土管另列。

- 选定流：高密度聚乙烯电缆保护管
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：实际供入m与安装m、退回及余料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`itu-optical-cables-2009`

###### 电缆垫层用级配硅砂（`bedding_sand`）

仅实际指定的垫层或回填级配硅砂；记录导热回填配方与粒级。内部复用的现场土不是进口砂投入。

- 选定流：电缆垫层用级配硅砂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量kg；实测体积换算须有批次堆积密度及含水基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

###### 预拌水泥基混凝土（`cast_concrete`）

仅厂拌后以湿态实际供入管道、井室、基础或板的混凝土。记录等级、胶凝材料、含水、密度和交付阶段。不得用预制构件或无关风场身份替代。现场拌制须拆分实际配料行且不再重复计预拌混凝土。

- 选定流：预拌水泥基混凝土
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：提货单湿kg或体积乘核实批次密度；另保留几何m3
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`spen-secondary-civil-2026`

###### 钢筋，钢制建筑材料（`reinforcement`）

仅实际厂门热轧低合金钢筋、C≤0.2%、未涂覆且状态匹配；购入预制产品内含钢筋不重复计入。

- 选定流：钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可归属消耗钢材kg，含切割损耗及安装前损坏、拒收物料；采用cp_materials收货、库存、退回平衡，安装kg及各废物流分别核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`spen-secondary-civil-2026`

###### 加工膨润土钻井粉（`bentonite_drilling`）

仅非开挖穿越实际使用的膨润土粉，注明加工等级及配制状态。膨润土基本资源流不能替代该购入产品。聚合物添加剂分别另列。

- 选定流：加工膨润土钻井粉
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量干粉kg，记录含水基准与钻井液批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`itu-optical-cables-2009`

#### 输出

##### 废物流

###### 剩余开挖矿质土（`surplus_excavated_soil`）

仅实际挖出并外运的剩余矿质土；记录污染分类与去向。内部回填留在土方台账；实际岩石与污染土分别拆行。

- 选定流：剩余开挖矿质土
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：湿/干kg一致称量，或实测体积配真实密度及含水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 废膨润土钻井泥浆（`drill_slurry`）

仅实际离场送处理的废泥浆；在声明湿质量基准中包含水与矿质固体。直接排水及内部循环另计。

- 选定流：废膨润土钻井泥浆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量湿kg并测固体及含水比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 送处理的含泥降水废液（`dewatering_effluent`）

仅实际送至外部处理接口的液体，不使用淡水基本排放身份替代废物转移。

- 选定流：送处理的含泥降水废液
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：外运接口实测m3与取样组分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`

### 过程：架空支承与电缆悬挂（`aerial-support`）

测量实际跨距、杆塔位置及保留支承。基础在underground-civil实测施工，再用实际起重设备或安装方法立杆组塔，安装锚固及指定附件，按项目记录核对定位与紧固。绑扎式电缆安装或核实实际承力线、滑轮及绑扎线，按实际放盘牵引绑扎作业敷设并测预留与垂度；自承路线使用其实际固定配置。记录等电位接地并逐验收跨检查。共用支承须有受益者及制造分配台账。

#### 输入

##### 产品流

###### 镀锌钢线路杆组件（`galvanized_pole`）

仅实际新建钢支承，明确镀层及交付组件内含附件；既有保留杆声明历史及接口处理。木杆与混凝土杆另列。

- 选定流：镀锌钢线路杆组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明配置下实测组件净kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

###### 镀锌钢承力线（`messenger_wire`）

仅通信电缆悬挂实际另供的承力线；排除厂制内含加强件。

- 选定流：镀锌钢承力线
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际净kg与安装长度及实测kg/m核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`itu-optical-cables-2009`

###### 不锈钢电缆绑扎线（`lashing_wire`）

仅实际不锈钢绑扎线，与承力线及电缆分计；自承式电缆不必有该行。

- 选定流：不锈钢电缆绑扎线
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际消耗净kg，核对余线与退回
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`itu-optical-cables-2009`

### 过程：电缆敷设、接续与终端（`cable-placement`）

检查线盘及管道桥架架空接口，确定实际牵引或气吹方案，按电缆供方特定限值记录滚轮、卷扬机、空压机及敷设时段。记录张力、弯曲半径、规格、安装电缆长度与预留作为真实验收依据，不设默认润滑或损耗百分比。仅制作实际电力接头终端或光纤接续，安装实际密封、接续盒和等电位连接；实际另供的光纤保护套、接头密封件、树脂等逐项列行。交付前试验与缺陷引起的更换留在本施工周期。

#### 输入

##### 产品流

###### 低压电缆（`lv_cable`）

仅实际CN厂门且与GB/T12706.1-2020、电压范围、导体、芯数、截面、绝缘及护套匹配的电缆。厂制内含组件保留内含边界；运输、安装另计。其他规格另核身份。

- 选定流：低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则： 按m计可归属电缆消耗量=总收货+期初库存−经核实退回或转移−期末可复用库存。纳入安装边料、验收前损坏及替换消耗；安装验收长度与保留预留段另行核对。保留Length/m，不推断每米电缆质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cables`

###### 中压电缆（`mv_cable`）

仅实际CN厂门、符合GB/T12706.2-2020且声明芯数、导体、电压、绝缘与护套的服务本地路线电缆。中压本身不使网络成为长距离网络。

- 选定流：中压电缆 `6cfb5366-3e9b-4356-8d18-eb27c432fbaf`
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：实际消耗电缆m，保留回路与芯数区分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cables`

###### 有护套光纤电缆（`optical_cable`）

仅实际光缆，记录光纤数量、单/多模、护套、铠装与抗拉构件配置；通用铜铝电缆身份不适用。

- 选定流：有护套光纤电缆
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：实际消耗有护套光缆m，不是纤芯m
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cables`
- 来源：`itu-optical-cables-2009`

###### 75欧姆电视同轴电缆（`television_coaxial`）

仅实际75欧姆电视分配电缆，明确导体、介质及屏蔽配置；其他阻抗或铜通信结构另列。

- 选定流：75欧姆电视同轴电缆
- 流属性/单位：Length `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：实际消耗电缆m
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cables`

###### 水基聚合物电缆牵引凝胶（`pulling_gel`）

仅实际已识别配方且供方确认适用于实际护套；保留安全资料及组分，不作为每次牵引的默认润滑物。

- 选定流：水基聚合物电缆牵引凝胶
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量实际使用kg，扣除未用退回凝胶
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

###### 密封低压电缆接头套件（`power_joint`）

仅实际交付且与低压电缆及接续配置匹配的接头套件；购入组件已内含的接头不再计套件。其他电压及终端套件另列。

- 选定流：密封低压电缆接头套件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：实际消耗套件数量，扣除未用退回
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

###### 光纤接续盒（`fibre_closure`）

仅实际完整接续盒；注明端口、密封及纤芯容量。厂制内含保护套不重复计。

- 选定流：光纤接续盒
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：安装接续盒与交付前消耗更换件数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`itu-optical-cables-2009`

###### 木制电缆盘（`wooden_drum`）

仅电缆背景未内含且另行归属的实际木盘制造。记录净质量、序列号、退回复用历史及守恒份额；完整退回盘不是废物。

- 选定流：木制电缆盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测木盘kg乘有依据归属份额
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equipment`

#### 输出

##### 废物流

###### 绝缘铜电缆余料（`copper_cable_offcut`）

仅实际作为废物外运的绝缘铜余料；不是纯铜废料、铝电缆或光缆。发生后分别拆行；保留绝缘与污染状态。

- 选定流：绝缘铜电缆余料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分类容器实际称量净kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

### 过程：本地配电站与天线安装（`station-tower`）

只施工实际实测的基础、板、排水、集油配置及围护；区分交付的预制外壳与砌筑屋顶门施工。按序列号与配置记录吊装定位实际变压器开关设备或本地塔天线，再安装指定锚固、馈线、接地及保护控制接口。使用实际吊装设备小时与施工公用量，不用估算运行年电耗。厂制内含油气电子器件留在购入组件边界；实际现场充装或释放须独立物质及活动证据。按实际交付类型记录结构定位螺栓、电气接地及天线验收。

#### 输入

##### 产品流

###### 变压器（`distribution_transformer`）

仅实际厂门完整400kVA、10/0.4kV且结构、冷却及供入组件边界匹配的变压器。该身份不覆盖其他额定值或完整站点。购入变压器已内含的油不重复购入计数。

- 选定流：变压器 `734249ea-34e6-471b-a05a-f5b26b818167`
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：按cp_materials统计本交付实际消耗的全部匹配变压器，包含安装前损坏及失效、拒收后的替换消耗；核对收货、退回或转移及库存。安装验收件数另存，其他额定值另留未解决身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`spen-secondary-install-2025`

###### 11千伏环网开关设备单元（`local_switchgear`）

仅实际11kV单元，声明绝缘介质及保护配置。220kV GIS身份不适用；各气体实际充装或泄漏发生时分别记录。

- 选定流：11千伏环网开关设备单元
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：按cp_materials收货、库存、退回平衡统计实际可归属消耗的完整单元，含安装或验收前损坏、拒收并被替换的单元；安装验收件数另存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`spen-secondary-install-2025`

###### 烧结黏土砌筑砖（`station_brick`）

仅实际砌砖站房；没有默认建筑质量或墙厚。砂浆及其他安装围护组分须分别记录。

- 选定流：烧结黏土砌筑砖
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际供入并消耗的砖净kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`spen-secondary-civil-2026`

###### 水泥砂砌筑砂浆（`station_mortar`）

仅实际供入的预拌湿砌筑砂浆，声明配方及含水；现场拌制则以独立水泥、砂和拌合水行替代。

- 选定流：水泥砂砌筑砂浆
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际湿kg；没有通用水泥砂配比
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

###### 玻璃纤维增强聚合物变电站外壳（`prefab_enclosure`）

仅实际预制GRP外壳；定义内含屋顶、门及地板以避免重复建筑组分行。不同时假定砌筑路线。

- 选定流：玻璃纤维增强聚合物变电站外壳
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可归属的已消耗外壳净kg，包含验收前损坏、报废并被替换的外壳；按cp_materials核对收货、退回或转移及库存变化。验收外壳kg及尺寸另行保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`spen-secondary-civil-2026`

###### 镀锌钢本地传输塔组件（`transmission_tower`）

仅实际服务本地的塔钢组件，声明高度、截面、镀锌及内含螺栓。风机塔筒及风场特定电缆塔不可替代。基础投入在underground-civil另计。

- 选定流：镀锌钢本地传输塔组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测供入塔净kg，保留安装及螺栓记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

###### 室外无线电传输天线组件（`antenna_unit`）

仅本地服务塔实际天线，声明频段、端口及配置；不在组件内含的馈线及安装件分别记录。

- 选定流：室外无线电传输天线组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：按cp_materials统计实际可归属消耗的完整天线件数，包含失效或拒收后的替换消耗，扣除经核实退回、转移及期末可复用库存；安装验收件数另行记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

###### 裸铜接地导体（`earthing_conductor`）

仅实际另供且连接站、塔及相关电缆等电位接续的铜导体；厂制内含导体不作为额外投入。

- 选定流：裸铜接地导体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际称量导体kg，与安装长度及实测kg/m核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`spen-secondary-install-2025`

### 过程：本地水下电缆敷设（`marine-placement`）

实际服务本地的水下段测量真实海河床及岸端路线，用实际铺缆船或岸端牵引定位电缆，逐项记录实际埋设、开沟、喷射或保护工序。船舶推进及船载设备能源、付费服务接口、埋设几何和岸端接续终端工作须有真实日志。按物质及受纳介质记录扰动沉积物、实际排水、资源取用及废物去向；仅购入船用轻柴油不能证明这些释放。不为海水取用、海床弃置或生态效应赋造假数量或淡水身份。

#### 输入

##### 产品流

###### 船用轻柴油（`marine_gas_oil`）

仅实际服务本地电缆铺设或埋设船燃料；记录牌号、来源、净热值及负载作业时段。本行不采用通用公路柴油身份；燃料与运输服务路线不同时代表相同船舶作业。

- 选定流：船用轻柴油
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：实际船燃料kg乘批次净热值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`itu-optical-cables-2009`

#### 输出

##### 废物流

###### 外运的疏浚矿质沉积物（`marine_sediment`）

仅实际挖出并外运处理的沉积物，注明盐度、固体、污染物及去向；海床再分布不自动成为废物外运或海水资源交换。

- 选定流：外运的疏浚矿质沉积物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际外运批次湿kg及取样固体比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

### 过程：恢复与施工废物外运（`reinstatement`）

安装后检查实际回填压实，只按实测扰动路面绿化带或站表面恢复真实层次和面层，撤除实际临时设施。适用时计量压路机、摊铺、切割和清洁活动。按状态分类余料、拆除路面、混凝土残余及实际包装，称量外运并核实受方处理接口。完整退回复用盘及同边界内复用材料记作退回或内部转移，不作为废物抵扣。

#### 输入

##### 产品流

###### 管沟恢复用热拌沥青混合料（`asphalt_reinstatement`）

仅恢复实测扰动面积及指定层厚的实际沥青表面；不是整条道路建设产出。保留配方及厂至现场交付状态。

- 选定流：管沟恢复用热拌沥青混合料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量交付混合料kg，与实测层体积及实际密度核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`

#### 输出

##### 废物流

###### 拆除的沥青路面料（`removed_asphalt`）

仅实际挖除并离场的路面料，记录煤焦油及污染筛查与去向；声明工程内部复用为内部转移。

- 选定流：拆除的沥青路面料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际外运净kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

###### 废弃硬化水泥基混凝土（`concrete_waste`）

仅交付前实际外运的硬化残余或拆除混凝土，与新拌退回混凝土及内含钢筋区分。

- 选定流：废弃硬化水泥基混凝土
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实际外运净kg并声明钢筋处理
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`

### 过程：检查、试验与验收交付（`acceptance`）

检查竣工几何及交付配置，核对线盘材料与废物台账，只开展与实体匹配、项目实际指定的电气绝缘导通等电位、光损耗OTDR、塔锚固结构或天线检查。保留仪器校准、测试条件、缺陷、修复复测及签署验收。实际试验电力与返工耗材在现场公用材料记录归属一次。声明约定交付状态及延后工作或通电接口；验收就绪不是猜测运行寿命或监管批准。

#### 输出

##### 产品流

###### 已交付本地电缆网络工程（`reference_product_local_cable_works`）

一个实际验收、唯一识别的本地电缆网络或附属土木实体。端点或场址边界、安装配置及验收状态定义该实体；服务合同或一包电缆不是该产出。

- 选定流：已交付本地电缆网络工程
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：1 件
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handover`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `shared_works_allocation` | 交付实体是施工产出。先区分电力通信共沟、共杆、站点及进退场的实测分支活动再分配。不可分残余采用实际工作推导并披露的因果指标，例如开挖截面乘长度或实测设备时间，分母覆盖所有受益者。电压、造价或电缆数量份额不自动具有因果性。 |  |
| `reusable_capital_conservation` | 可复用设备及盘保留按序列号绑定的累计制造台账。仅兼容活动及分母有证据时，份额=项目归属活动/有依据的全寿命活动；跨项目、期间和复用份额总和不超过一。该份额乘同配置实测质量或数量，与运行活动分计。全寿命活动未知保留审查，不每项目重置完整制造。 |  |
| `waste_and_recovery` | 施工余料与挖出土不自动成为共产品。记录废物状态及去向；不扣除猜测避免的原生材料负担。另有证据的产品或回收边界须披露分配模型并使用独立去向数据集。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_handover | acceptance | accepted entity | acceptance dossier | 实体ID；端点；场址边界；路线m；分回路电缆m；站房m2；塔高m；电压容量纤芯规格；安装范围；竣工验收日期；试验状态 | 测量竣工几何，核对签署交付、回路表及实际试验，记录通电或仅就绪状态 | item; m; m2 | 每次验收及修订 | 实际施工开始至验收，含返工 | 声明实体及归属活动 | 每声明的参考流 | 原始票据、校准、样品、工程签署记录与缺口清单 |
| cp_materials | underground-civil; aerial-support; cable-placement; station-tower; reinstatement | individual material input | delivery and installation ledger | row_id；批次；供方；等级；状态；净kg；m或件；密度；含水；收货；退回；位置；内含组件；组件位号；失效及替换量；可归属期初期末库存；经核实转移 | 称量票据及净交付；核对设计量、实际安装、退回与余料；每项体积长度换算有独立支持；各原生单位的投入量=可归属总收货+期初库存−经核实退回或转移−期末可复用库存。纳入验收前失效及返工消耗；安装验收量与废物分别核对，不抵消制造负担。 | kg; m; item | 每批及每次安装 | 实际施工开始至验收，含返工 | 声明实体及归属活动 | 每声明的参考流 | 原始票据、校准、样品、工程签署记录与缺口清单 |
| cp_cables | cable-placement | individual cable input | reel and circuit ledger | 盘ID；规格；电缆m；路线m；芯数；回路；预留；退回m；拒收m；接续终端位置 ；可归属期初期末电缆库存m；总收货电缆m；经核实退回转移m；实际消耗的损坏边料替换m | 校准计米器核对盘标识及竣工回路测量；记录未安装损失及验收前实际更换  电缆消耗m=可归属总收货+期初库存−经核实退回或转移−期末可复用库存；纳入实际消耗的边料损坏替换，安装长度与可复用余料分别核对。每项电缆行均记录这些量，平衡不只适用于设备件数或组件面积。 | m; kg | 每盘及每回路 | 实际施工开始至验收，含返工 | 声明实体及归属活动 | 每声明的参考流 | 原始票据、校准、样品、工程签署记录与缺口清单 |
| cp_utilities | site-operations; underground-civil; aerial-support; cable-placement; station-tower; marine-placement; reinstatement; acceptance | individual fuel and electricity | meter and fuel log | 设备ID；process_id；日期；表起止；kWh；燃料kg；燃料体积；实际密度；批次MJ/kg；地域；电压；化石生物比例 | 读实际电表及称量加油票；作业、怠速、返工归属一次；船舶活动独立标记 | MJ; kWh; kg | 每班、电表时段及燃料批次 | 实际施工开始至验收，含返工 | 声明实体及归属活动 | 每声明的参考流 | 原始票据、校准、样品、工程签署记录与缺口清单 |
| cp_water | site-operations; underground-civil | supply, abstraction and dispatch | separate water meters and samples | 接口；来源；含水层；受体；m3；水质；样品；处理；循环；日期；方向；未转移或外运 | 供水、抽水、送处理及直接排放分开计量；核对湿过程水及滞留含水；记录咸淡水受体 | m3 | 每时段及排水批次 | 实际施工开始至验收，含返工 | 声明实体及归属活动 | 每声明的参考流 | 原始票据、校准、样品、工程签署记录与缺口清单 |
| cp_logistics | site-operations; marine-placement; reinstatement | individual freight service | shipment records | 批次ID；材料行；起终点；净t；路线km；卡车；载货空载段；分配；背景内含 | 称量实际载货并记录行驶路线及空载回程，核对供方运输边界 | t*km | 每趟 | 实际施工开始至验收，含返工 | 声明实体及归属活动 | 每声明的参考流 | 原始票据、校准、样品、工程签署记录与缺口清单 |
| cp_equipment | site-operations; cable-placement | capital manufacture attribution | serial cumulative-use ledger | 序列号；配置；净kg；数量；项目小时周期；有依据全寿命活动；已有份额；未来份额；修理范围 | 称量同配置或核数量；审计完整活动分母与分配历史，不完整时保留不确定性 | kg; item; dimensionless share | 每次使用及台账更新 | 实际施工开始至验收，含返工 | 声明实体及归属活动 | 每声明的参考流 | 原始票据、校准、样品、工程签署记录与缺口清单 |
| cp_waste | underground-civil; cable-placement; marine-placement; reinstatement | individual waste output | dispatch and composition record | row_id；批次；湿干kg；含水；固体；污染；废物类别；去向；处理；退回产品标记 | 分类称量实际外运，保留转移单及受方回执，排除内部转移 | kg; m3 | 每批外运 | 实际施工开始至验收，含返工 | 声明实体及归属活动 | 每声明的参考流 | 原始票据、校准、样品、工程签署记录与缺口清单 |
| cp_emissions | site-operations; underground-civil; aerial-support; cable-placement; station-tower; marine-placement; reinstatement; acceptance | individual elementary emission | species and compartment evidence | process_id；设备；燃料碳；化石生物比例；氧化依据；代表性物种浓度；取样体积；真实外排气体流量；释放时段；积分外排体积；温压；干湿气基准；代表覆盖；颗粒切割；控制效率证据；介质；时点；方法限制；噪声观察 | 用真实外界释放测量或独立路线特定质量平衡模型证据；区分环境背景、室内暴露、NOx当量与真实物种；明确未获支持的噪声表征 | kg; sampling units | 每作业或有依据时段 | 实际施工开始至验收，含返工 | 声明实体及归属活动 | 每声明的参考流 | 原始票据、校准、样品、工程签署记录与缺口清单 |

### 计算规则

| rule_id | Applies to | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `entity_normalization` | 所有交换 | q_ref = Q_attributed / N_accepted，其中N_accepted为相同配置、各自可追溯验收实体数量；一个独立工程N_accepted=1。先正确归属再归一化，不将不同功能工程合并。 | cp_handover; relevant row protocol | 每声明的参考流的原子数量 |  |
| `geometric_material_conversion` | 长度体积记录的材料 | kg = 实测m3 × 同批次kg/m3，或实测m × 同配置kg/m；密度、含水与状态一致。预拌混凝土保留湿kg及几何m3，不推断配比。 | cp_materials; cp_cables | 转换后的真实材料质量 |  |
| `energy_conversion` | 电力及燃料 | MJ = kWh × 3.6；燃料MJ = 实测kg × 批次净热值MJ/kg。燃料体积先乘实际kg/体积密度，禁止采用虚构默认值。 | cp_utilities | 各燃料及电压层级MJ |  |
| `freight_activity` | 电缆盘货运 | t*km = Σ各实际货运段净t × 路线km，回程及共享分配明确。运输背景已含燃料时不得再加同一运输燃料排放。 | cp_logistics | 声明实体归属货运活动 |  |
| `species_emission` | 条件性按质量计量的污染物基础排放；不包括按体积计量的水资源及水排放 | 释放kg由代表性物种浓度×同一代表时段真实外排气体流量积分或总外排体积并换算单位，或有依据物种质量平衡得到；温压、干湿基准须一致。采样体积只支持样品质量与代表性，不代表工序总外排体积。化石CO2可由实测化石碳×有依据氧化比例×44/12计算；未知浓度、总外排体积或其他输入保留审查。颗粒切割及介质必须相符。供水、取水及承载水排放按water_basis与cp_water保留各自计量m3及受纳接口，水中污染物另列物种质量行。 | cp_emissions | 明确物种与介质的kg |  |
| `water_balance` | 实际液体水 | 独立核对供水+取水+其他实测入水=直接排水+送处理液体+保留含水+有依据蒸发±实测存量变化；内部循环不重复计。体积状态不兼容时须真实换算，不把废液污染物质量合并为水质量。 | cp_water; cp_waste | 水接口闭合及残余披露 |  |

### 数据质量要求

| requirement_id | Applies to | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_identity | 所有交换 | 核实物质、工艺、地域、组件内含、公开主属性、单位及状态；未解决身份和未发生须区别。 | 供方原始规格、公开身份及现场配置 |
| dq_geometry | 参考实体 | 保留端点、场址及竣工几何，区分电缆m、路线m与纤芯m，实测面积、塔高与实际容量有来源。 | cp_handover; cp_cables |
| dq_completeness | 各实际路线 | 逐工序核对材料、能源、现场水、废物、排放、额外组分及施工噪声；未支持的生态和噪声影响保留范围缺口，不称全寿命。 | 工程量表、设备日志、废物及排放账与缺口 |
| dq_time | 现场数量 | 时间范围包含怠速、实际返工及验收；日期、分表归属与校准可追溯，估算与实测区分。 | 工单、仪表与校准 |
| dq_acceptance | 交付 | 结构、接地、电气或光学测试适用于实际配置，缺陷处理可追溯；历史手册不能替代当前项目规格或批准。 | cp_handover |
| dq_capital | 复用归属 | 全寿命分母和累计份额有证据；未知时保留审查，不把每个项目视为全新制造。 | cp_equipment |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `reference_and_function_check` | 须有一个已识别验收实体及全部适用功能、配置、几何限定。参考产出为1件，所有清单采集计算分母为每声明的参考流。没有明确功能等效研究，不比较不同配置实体。 |  |
| `identity_check` | 拒绝公开直读身份与物质、地域、电压、结构、介质或主属性冲突的UUID；保留精确未解决行。候选参考产品身份仍未解决，发布前须解决。 |  |
| `physical_and_coverage_check` | 核对实测尺寸材料平衡、密度热值换算、条件工序、废物去向、水接口及互斥颗粒粒级。缺少实际数据、制造分母未知、排放无依据或噪声表征缺口须审查或声明覆盖不完整，不作为物理验证通过。 |  |
| `handover_check` | 须有与路线匹配的真实检查交付证据；不由清单推断通电或运行许可。在任何更广生命周期声明前核实前景与上游、后续阶段的独立覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground construction and delivery dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 配置及接口匹配的本地电缆工程施工模块；经明确链接的上游、运输或后续模型 |
| excluded_use | 未经补足覆盖的全寿命或完整摇篮到交付声明；长距离及铁路完整系统；厂门电缆制造；网络运营；无功能等效的每公里比较 |
| required_metadata | 参考实体、功能、实测几何、配置、接口、施工期间、实际工序、地域供电、背景及运输链接、验收状态与归属台账 |
| required_quality_disclosure | 实测估算、损耗、材料状态、身份缺口、上游后续覆盖、噪声生态缺口、历史文献限制、设备复用分母及不确定性 |
| update_trigger | 竣工几何配置、工艺路线、供方身份、仪表、能源结构、验收接口或废物去向发生实质变化 |

## 11. 数据源

| 来源id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc-local-cables-2025 | official_guidance | [UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, pp. 280–281](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 本地电力、通信、电视与附属站塔实体范围，区别长距离；不提供工程量或寿命。 |
| itu-optical-cables-2009 | handbook | [ITU-T, Optical fibres, cables and systems (2009), chapter 3 pp. 61–89; chapter 4 pp. 91–111](https://www.itu.int/dms_pub/itu-t/opb/hdb/t-hdb-out.10-2009-1-pdf-e.pdf) | 历史定性光缆安装、地下、非开挖、架空及水下路线与接续背景。只用于工序分解；非当前设计限值、必需路线或通用消耗定额。 |
| spen-secondary-civil-2026 | official_guidance | [SPEN SUB-03-017, Issue 9, May 2026, sections 10.6–10.10, 12–13, pp. 15–27](https://www.spenergynetworks.co.uk/userfiles/file/SUB-03-017.pdf) | 实际二次变电站土建、围护、竣工资料、现场质量记录背景；仅SPEN覆盖条件直接适用，其他工程须项目证据。非普遍结构尺寸或配比。 |
| spen-secondary-install-2025 | official_guidance | [SPEN SUB-02-006, Issue 7, December 2025, sections 10–16, pp. 6–13](https://www.spenergynetworks.co.uk/userfiles/file/SUB-02-006.pdf) | 实际地面二次变电站安装和验收过程、设备边界背景；资料低压侧400/230V的特定网络条件不成为所有工程强制配置。 |
| eirgrid-cable-records-2026 | official_guidance | [EirGrid CDS-GFS-00-001-R2.1, 27 March 2026, sections 2.1–2.5 and record schedules, pp. 8, 13–14](https://cms.eirgrid.ie/sites/default/files/publications/CDS-GFS-00-001-R2-110kV-220kV-400kV-Cable-Specification.pdf) | 对照110/220/400kV爱尔兰输电工程的材料、拉缆、接续与验收记录体系；仅背景比较，不将全管道、高压限值或维护保证移植成本地工程要求。 |
| epa-construction-dust-1995 | official_guidance | [US EPA AP-42 section 13.2.3 Heavy Construction Operations, January 1995, pp. 1–2](https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf) | 历史按施工组成作业评价粉尘的限制与控制背景；不采用历史平均因子或将总尘当PM2.5。当前排放需实际证据。 |
