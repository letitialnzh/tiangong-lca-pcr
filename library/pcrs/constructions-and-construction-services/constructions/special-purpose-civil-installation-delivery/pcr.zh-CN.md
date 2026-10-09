---
pcr_id: pcr.constructions-and-construction-services.constructions.special-purpose-civil-installation-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 特殊用途土木设施施工交付

## 1. 范围与适用性

本方法适用于军事工程、卫星发射场、废物堆场/焚烧设施和核材料处理设施的实际实体施工、安装与验收交付。共同对象是有明确场址、系统界面及功能配置的特殊用途设施，不是施工服务或一包建材。CPC 53290 仅提供分类上下文；各路线不能互相替代或视作相同工艺。未另列工程需证明确实不归入其他工程类别，并在项目证据支持下补全其实际路线。

普通建筑及独立道路、桥梁/隧道、港口、水利/坝、电站、矿业、一般制造设施、污水/水处理、体育游憩工程不作为本方法的新实体。设施内附属道路/房屋/公用系统应明确接口并只计一次；必要固定工艺系统不得通过改称“土建壳体”而省略。核路线保留真实核材料处理范围，反应堆发电另属电站；填埋、焚烧和核设施不能因废物一词而合并运营。无默认材料配比、每设施质量、寿命、设计载荷、排放或合规批准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.special-purpose-civil-installation-delivery |
| classification_refs | CPC 3.0 53290 — Other civil engineering works |
| covered_products | 有实测功能配置并验收交付的堡垒/碉堡/掩体/军事靶场及测试中心、卫星发射场、废物堆场与焚烧设施、核材料处理/加工设施；未另列设施须单独证明路线 |
| excluded_products | 施工服务；散装建材及厂门设备；普通建筑；其他专属工程类别；交付后的运营、维护、封场及退役 |
| representative_product | 一个有明确路线、场址、竣工配置和验收范围的完整特殊用途土木设施；不存在可代表全部分支的默认工艺 |
| production_route | 实际场地/土建 → 所需围护/防护/热工/发射/核系统安装 → 真实检验及调试 → 限定实体交付 |
| market_state | 按所声明验收终点交付的固定设施，不是全寿命运营服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际路线及系统界面限定的已建成特殊用途设施，执行声明的场址功能 |
| How much | 一个完整交付实体；实测场址面积、长度/高度、单元体积及真实能力等作为路线特定限定 |
| How well | 与同一竣工规格、工况、组件完整性及实际验收证据相符；不推断监管许可 |
| How long or cycle | 一次从实际施工起点至声明验收交付的周期；不规定使用寿命或未来运营次数 |
| reference_flow_link | `accepted_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收完整特殊用途土木设施 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | 件 |
| 必需限定信息 | 设施编号/路线；场址及界面；完整系统/保留资产登记；实测几何及真实功能容量；结构/材质/工况；施工起止；验收与冷/热/活性试验终点；上游/运输/运营/维护/拆除覆盖及缺口 |

件是公开 Item(s) 的单个数量显示别名。所有清单及采集协议均按每声明的参考流归属，同一参考流就是上述一个实体。场址面积/尺寸/容量用于功能限定；除非另有完整物理关系证据，不得从件数推算面积、长度或质量，也不能以造价、处理吞吐量或假定寿命替代实体。必需限定信息须记录于数据包；缺少即参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | 件 | 输出为 1 件同一验收完整设施；采用 cp_acceptance。全部清单和协议按每声明的参考流归属，item 与件均为公开 Item(s) 的单件别名。 |
| volume_state | fresh_concrete; soil_disposal; site_water; washwater; groundwater; fresh_discharge; shield_concrete | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 采用 cp_civil、cp_waste、cp_water、cp_install 记录实际体积状态；原状/松散土、新拌混凝土、供应/抽取/回排水不得混用。体积转质量仅用同状态、温度/含水/盐度下实测或有依据的密度，不用默认 1000 kg/m3。 |
| sheet_area | hdpe_liner; geotextile | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | cp_liner 按实际供货/安装面积记录厚度、搭接及试样，原始面积分子按每声明的参考流归属；单位面积质量及密度未知时不推算 kg。 |
| electricity_energy | electricity_lv | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留实际公开净热值属性及能量单位组；cp_activity 记录 CN/<1 kV 用户端条件，原始 kWh 按 1 kWh=3.6 MJ 转换，不与柴油质量混用。 |
| asset_share | steel_formwork; crane_share | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_assets 对同配置完整设备/构件实测净质量或可追溯供应方称重，不赋设施总质量；无量纲制造份额另有生命周期活动依据且累计不超过一。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已勘测实际场址、保留/拆除/修复状态及供应方门端/现场接口 |
| starting_condition_role | 记录的施工起点，不是土地、既有工程或设备零负担假设 |
| product_classification_scope | 特殊用途固定设施，按 CPC3.0 53290 上下文及实际排除关系识别 |
| recursive_input_rule | 既有或采购的同类设施模块按真实资产及供应方记录并保留既往负担，不隐含递归创造另一完整实体 |
| upstream_dataset_requirement | 按实际材质、接口和路线另链上游建材/设备及物流，缺失须披露 |
| disclosure | 路线/功能/完整性、场址几何、起止与验收、内含组件、共享资产份额、水/排放/土地/噪声、所有后续阶段及未测缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_entity | reference product | 输出是建成实体设施，包含实现声明功能所需的永久设备/系统及真实验收。独立普通建筑、道路、坝/防洪系统、电站、制造/采矿设施、污水/水处理厂和室外游憩工程归属各自类别；明确共享界面且每项附属资产只计一次。 | `un-cpc-civil-2025` |
| boundary_stage | dataset | 基础前景覆盖实际供应方门端至场址运输、勘测后的场地准备、土建、路线特定安装、临时工程、检验及调试直至声明交付；建材/设备制造通过相容数据集另行链接并披露缺口。这不证明完整从摇篮到门或全寿命覆盖。 | `un-cpc-civil-2025` |
| boundary_route | all inventory rows | 采集前选择真实路线，各行是不同条件交换，不是通用配方。核对完整竣工功能系统登记表：填埋单元/衬层/渗滤液；军事土方防护/结构/靶区/支持；发射台/导流沟/地面流体及控制；焚烧收料/热工/净化/灰渣/回收；核处理/围护/屏蔽/安全。实际缺少的每项组件、配料、试验耗材、包装、废物及排放均须增加一个准确原子行。未另列工程须自行证明路线/系统闭合及排除关系，本 PCR 本身不建立其技术设计。 | `un-cpc-civil-2025`; `epa-industrial-waste-guide`; `dod-firing-ranges-2025`; `nasa-launch-construction-2018`; `jrc-waste-incineration-2019`; `iaea-ssr4-2017` |
| boundary_embedded | all inventory rows | 同一范围采用供货完整组件或其实际现场制造投入，不能两者叠加；钢材/衬里/滤器/控制若已内含，不另计，确属组件外时才另列。既有基础及复用设备须有保留状态、维修和既往负担证据；保持物料/水的内部与外部界面。 | `jrc-waste-incineration-2019`; `iaea-ssr4-2017` |
| boundary_tests | acceptance | 声明实际必需且完成的机械/冷/湿/热/活性试验阶段；终点前实际试验燃料、水、电力、吹扫物质、试料、产物、残留及实测排放须纳入并逐项增加准确行。不得假设必然进行发射/射击/活性核/废物焚烧试验，也不得假设其无负担；必需试验未完成时不得声明完整交付，后续正常运行按记录拆分，试验结果不代表监管批准。 | `dod-firing-ranges-2025`; `nasa-launch-water-test-2018`; `iaea-ssr4-2017` |
| boundary_environment | site_support | 直接资源抽取、购入水、废液转移和液体受纳排放须分开。土地转化/占用需实测前后用途及真实面积/时间；噪声需源/受体、声级、持续时间/频率和方法，不得伪造成可加的质量交换。实际污染物、土壤污染、爆破及海水释放需各自身份/活动证据；缺失表征或实测是缺口，不是零影响。 | `epa-construction-dust-1995`; `epa-concrete-washout-2012` |
| boundary_later | dataset | 交付后的收废/焚烧、发射、军事使用和核材料加工属独立阶段。维护、换衬、构件更新、封场、拆除、放射性退役及去向仅在有依据的计划及工程量下另行建模，不规定默认寿命、废物转换或回收抵扣；施工调试不得隐藏到后续运行。 | `un-cpc-civil-2025`; `iaea-ssr4-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| civil | 场地准备及通用土建施工 | required | 实际勘测/保留场地及声明的土建作业包 | 前景施工 | 每声明的参考流 |
| site_support | 运输、临时工程及施工公用投入 | required | 实际活动及环境交换，不采用默认因子 | 前景支持 | 每声明的参考流 |
| containment | 废物堆场围护及排水安装 | conditional | 实际工程围护/排水堆场或单元；无衬层设计须按实际工程记录，不假设存在衬层 | 路线施工 | 每声明的参考流 |
| military | 军事防护及靶场系统 | conditional | 实际堡垒/碉堡/掩体/靶场/军事测试中心路线 | 路线安装 | 每声明的参考流 |
| launch | 卫星发射土建及永久地面系统 | conditional | 实际卫星发射场及明确地面支持范围 | 路线安装 | 每声明的参考流 |
| thermal | 废物焚烧永久系统 | conditional | 实际废物焚烧设施及真实炉型/净化/回收技术 | 路线安装 | 每声明的参考流 |
| nuclear | 核材料处理围护及安全系统 | conditional | 实际核材料处理/加工；排除反应堆发电及矿石开采 | 路线安装 | 每声明的参考流 |
| acceptance | 检验、调试及实体交付 | required | 实际有记录试验及验收配置，披露不完整试验终点 | 验收 | 每声明的参考流 |

### 过程：场地准备及通用土建施工 (`civil`)

#### 输入

##### 产品流

###### 浇筑前的新拌预拌硅酸盐水泥混凝土 (`fresh_concrete`)

仅记录实际采购、浇筑前在搅拌站门端交付的新拌混凝土，保留供货体积、配合比编号、强度/暴露条件规格和验收票据；运输、泵送、振捣及养护另记。现浇后的混凝土身份不代表本投入；现场拌制必须逐项增加水泥、每种骨料、外加剂及拌合水原子行，不得两条路线重复计量。

- 选定流：浇筑前的新拌预拌硅酸盐水泥混凝土
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_civil 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_civil`
- 来源：`epa-concrete-washout-2012`

###### 钢筋，钢制建筑材料 (`rebar`)

仅适用于实际热轧低合金钢筋且 C ≤ 0.2%、厂门生产混合接口匹配的情况。采集牌号证明以及交付、安装、退回和边角料质量；其他钢筋牌号须另核身份，采购预制组件内含的钢筋不得重复计量。

- 选定流：钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_civil 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_civil`
- 来源：`un-cpc-civil-2025`

###### 碎石 2/32 (`gravel_drainage`)

仅适用于实际未干燥的 2/32 粒级碎石、匹配湿法/干法采石场厂门接口。是否用于排水或基层由项目粒级与过滤设计决定，本 PCR 不规定必用；保留交付湿质量和含水证据，其他粒级、洗涤状态或再生骨料须另设行并核验身份。

- 选定流：碎石 2/32 `4f19a2fb-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_civil 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_civil`
- 来源：`epa-industrial-waste-guide`; `epa-msw-landfills`

#### 输出

##### 废物流

###### 送处理的硬化硅酸盐水泥混凝土边角废料 (`concrete_debris`)

以称重及去向凭据记录离开施工边界的分选硬化混凝土废料；留用回填和退回新拌混凝土分别记录，混合建筑垃圾或再生骨料产品不能确定本废物身份。

- 选定流：送处理的硬化硅酸盐水泥混凝土边角废料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epa-concrete-washout-2012`

###### 送处置的未污染开挖矿质土 (`soil_disposal`)

仅在实际外送处置时记录；分别采集实测原状/松散体积、含水情况、污染评估、废物状态及去向。场内挖填是内部转移，不是外送交换；污染土须另有物料及污染物限定。

- 选定流：送处置的未污染开挖矿质土
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_waste 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`un-cpc-civil-2025`

### 过程：运输、临时工程及施工公用投入 (`site_support`)

#### 输入

##### 产品流

###### 柴油 (`diesel`)

逐设备及作业包记录挖掘机、压实机、水泵、起重机、发电机和可归属交付/返程车辆的实际柴油消耗。此身份未指定牌号、配方、炼制及地域供应，必须声明实际供应方、批次、化石/生物份额和边界；它是燃料，不是燃烧服务或排放量。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_activity 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_activity`
- 来源：

###### 交流电 (`electricity_lv`)

仅实际中国 CN 电网平均消费组合、用户端供电电压 <1 kV 时采用本身份。按作业包分别计量施工、衬膜焊接、设备安装及试验电量；保留公开净热值/MJ 属性，原始 kWh 按 3.6 MJ/kWh 换算。其他国家、电压、合同组合及发电机产出须另核身份，发电机供电不得与其燃料重复计入。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_activity 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_activity`
- 来源：`nist-si-energy`

###### 施工及验收试验供应的液态淡水 (`site_water`)

在声明的场址供水接口计量养护、抑尘、清洗、试压或喷水系统试验的实际供应淡水，声明水源、处理、供应方及配送链接。香港水处理厂门端或韩国土壤淋洗案例均不代表通用现场供水；不得使用水资源或废水身份，内部循环量单列且不重复作为新增供水。

- 选定流：施工及验收试验供应的液态淡水
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_water 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`epa-concrete-washout-2012`; `nasa-launch-water-test-2018`

###### 可复用钢制模板面板制造归属份额 (`steel_formwork`)

仅纳入实际可复用成品模板面板可归属的制造负担。采集同配置面板净质量、资产编号、既往归属和本项目无量纲份额依据；跨全部项目/期间/用途累计份额不得大于一，复用历史或寿命活动未知时须审查。本次运输、清洗及维修按实际数量另记。

- 选定流：可复用钢制模板面板制造归属份额
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测面板净质量 kg 乘有依据的无量纲制造份额；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assets`
- 来源：

###### 移动式施工起重机制造归属份额 (`crane_share`)

使用实际完整起重机配置及有称重依据的供应方净质量，排除运输包装。仅采用累计资产台账支持的寿命活动/受益者份额，不得每个项目重置完整新制造负担；本次燃料、电力、行驶及维修分别按实记录。

- 选定流：移动式施工起重机制造归属份额
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测完整起重机质量 kg 乘有依据的无量纲制造份额；cp_assets。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assets`
- 来源：

##### 基本流

###### 地下水 (`groundwater`)

仅在前景内实际直接抽取淡地下水用于施工、降水或试验时记录。本身份为来自水的可再生物质资源、Volume/m3；采集抽取地点/国家、含水层、计量体积、用途及回排。污染地下水和供应产品水须分开；按实际地域评估表征覆盖，抽水量不自动等于耗水量。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_water 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：

#### 输出

##### 废物流

###### 送处理的收集碱性混凝土清洗废液 (`washwater`)

仅在围护收集的液态清洗废液实际外送处理时记录；计量液体并保留 pH/组成及接收方凭据，沉降混凝土固体另行称重，两者不是一个交换。不得假设直接排入水体或土壤；现场回用废液在跨边界前属内部流。

- 选定流：送处理的收集碱性混凝土清洗废液
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_waste 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epa-concrete-washout-2012`

##### 基本流

###### 二氧化碳（化石源） (`co2_fossil`)

仅记录有证据的化石 CO2 实际即时排入外部空气、子介质未指定的排放；采用燃料特定碳/氧化依据或实测排放并保留治理及活动覆盖，不得因存在柴油而编造因子。生物源 CO2、内部尾气转移、土壤和延迟排放须分开。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_release 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：

###### 一氧化氮 (`no`)

仅在分子 NO（CAS 10102-43-9）实际即时排入外部空气、子介质未指定且有单独实测/依据时记录。以 NO2 当量报告的总 NOx 不能确定本分子数量，不得用 NO2 或 N2O 替代。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_release 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：

###### 二氧化氮 (`no2`)

仅在分子 NO2（CAS 10102-44-0）实际即时排入外部空气、子介质未指定且有单独实测/依据时记录。NOx-as-NO2 不是分子 NO2，错误的 N2O4 同义词也不改变物质定义；须记录准确物种及采样条件。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_release 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：

###### 颗粒物，粒径未特指 (`dust`)

仅适用于治理后实际排入外部空气且粒径未指定的颗粒物。采集源工序、气象、土壤含水/细粒、受纳边界及实测或独立支持的场址排放。历史 AP-42 全场 TSP 施工因子不是 PM2.5/PM10 因子，也不是本类别默认值；已知粒径分级时应增加准确且不重叠的分级身份，不得与本行重复。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_release 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`epa-construction-dust-1995`

###### 水 (`fresh_discharge`)

仅液态水实际直接排入淡水受体时采用本 Emissions to fresh water、Volume/m3 身份。计量回排并记录受纳水体、盐度/组成及处理；溶解或颗粒污染物须按准确物种另列。本行不是供水、资源、水蒸气、海水回排或送处理的收集废液。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_water 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`nasa-launch-water-test-2018`; `epa-concrete-washout-2012`

### 过程：废物堆场围护及排水安装 (`containment`)

#### 输入

##### 产品流

###### 黏土 (`liner_clay`)

仅实际从矿区接口供应的天然黏土采用本原料身份，记录供应方矿物组成、含水情况和交付/运输。压实、分层几何及渗透性是另行实测的施工条件，并非 UUID 保证的属性；原位复用土及土工合成黏土衬层是不同路线。引用的历史美国指南仅提供组件例子，不构成全球强制厚度/渗透性要求。

- 选定流：黏土 `226972bf-eeed-4ec4-a22e-f227e582ca18`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_liner 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liner`
- 来源：`epa-industrial-waste-guide`; `epa-msw-landfills`

###### 填埋场高密度聚乙烯土工膜片材 (`hdpe_liner`)

仅在实际设计采用 HDPE 衬膜时记录；按厚度、树脂牌号、焊缝及检验记录采集供货、焊接/安装、搭接、试样、退回及废弃面积。面积是每设施投入的真实分子，不假定密度或片材质量；韩国生物堆 2 mm 薄板不代表通用填埋衬膜。

- 选定流：填埋场高密度聚乙烯土工膜片材
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_liner 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liner`
- 来源：`epa-industrial-waste-guide`; `epa-msw-landfills`

###### 穿孔高密度聚乙烯渗滤液排水管 (`hdpe_pipe`)

仅在实际排水设计采用时记录。采集净交付/安装管材质量及可追溯的直径、管壁、穿孔、树脂及化学相容规格，长度作为原始几何记录；水泵、土工布和排水介质分别交换。声明单元完整前须逐项量化实际附加衬层/排水组件。

- 选定流：穿孔高密度聚乙烯渗滤液排水管
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_liner 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liner`
- 来源：`epa-industrial-waste-guide`; `epa-msw-landfills`

###### 聚丙烯非织造排水过滤土工布 (`geotextile`)

仅在围护设计实际使用此聚合物及形态时记录，采集交付/安装/废弃面积、单位面积质量、孔径及试验记录；其他聚合物或土工网须另核身份并逐项列行，本行不是选择通用土工合成材料集合的指令。

- 选定流：聚丙烯非织造排水过滤土工布
- 流属性/单位：Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则：采用 cp_liner 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liner`
- 来源：`epa-industrial-waste-guide`; `epa-msw-landfills`

### 过程：军事防护及靶场系统 (`military`)

#### 输入

##### 产品流

###### 弹道防护钢板 (`ballistic_plate`)

仅记录靶场挡板、靶区防护或有设计依据的防护结构中实际采用的弹道钢板，保留合金/热处理、厚度、安装位置及验收牌号。中文名称冲突的普通钢板身份不能代表已验收弹道牌号；堡垒/掩体装甲及门须按真实设计另列，不杜撰爆炸载荷或通用弹道规格。

- 选定流：弹道防护钢板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`dod-firing-ranges-2025`

###### 已安装钢制掩体防护门组件 (`protective_door`)

仅在验收系统登记表中存在实际掩体/堡垒门时记录，采集组件数量、开口尺寸、实测时的质量、规格及验收凭据；门框/铰链只计一次，不推定每个靶场必需本门或军事测试设备。

- 选定流：已安装钢制掩体防护门组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`un-cpc-civil-2025`

###### 已安装靶场抽风机组件 (`range_fan`)

仅实际有顶/围闭靶场配置本抽排系统时记录。保留风机配置、工况及控制接口、安装和验收实测风量/控制试验；实际过滤组件另记，不把室内靶场路线强加给全部室外军事工程。

- 选定流：已安装靶场抽风机组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`dod-firing-ranges-2025`

### 过程：卫星发射土建及永久地面系统 (`launch`)

#### 输入

##### 产品流

###### 钢制发射火焰导流器成品组件 (`flame_deflector`)

仅实际发射场设计采用钢制导流器时记录。采用供应方竣工组件净质量或同范围核对的物料表，排除包装，记录实际支撑、衬层和内含物。NASA 39B 是历史组件例子，不是默认用量、火箭能力或寿命；现场制作钢板/焊接投入应替代同一完整组件负担，不得叠加。

- 选定流：钢制发射火焰导流器成品组件
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`nasa-launch-construction-2018`

###### 已安装发射台喷水系统水泵组件 (`deluge_pump`)

仅实际安装喷水设计时记录，采集数量/型号、真实泵工况、管线/水池接口和调试试验。组件外的储水池、供水管及控制须另列，发射用水数据不能确定施工试验用水需求。

- 选定流：已安装发射台喷水系统水泵组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`nasa-launch-water-test-2018`

###### 奥氏体不锈钢发射场流体管 (`launch_pipe`)

仅实际安装此合金/形态时记录；明确牌号、管壁、压力/温度及输送试验水还是某种推进剂，采集供应方净质量及焊接/试压记录。实际阀门、低温贮槽及其他服务管线须逐项增加；仅在声明验收终点内实际装载推进剂或点火时纳入，并明确物质及排放。

- 选定流：奥氏体不锈钢发射场流体管
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`nasa-launch-construction-2018`; `nasa-launch-water-test-2018`

### 过程：废物焚烧永久系统 (`thermal`)

#### 输入

##### 产品流

###### 已安装回转窑废物焚烧炉组件 (`incinerator`)

仅实际回转窑技术时记录，按供应方物料表声明钢壳、传动、耐火衬及燃烧器内含边界并计量验收供货组件。炉排/流化床/其他热工路线须设准确炉体行；设施还须核对实际收料坑/起重机、消防、锅炉/热回收、烟气处理、灰渣处理、废水及烟囱，单台炉不能代表完整交付焚烧设施。

- 选定流：已安装回转窑废物焚烧炉组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`jrc-waste-incineration-2019`

###### 定型高铝耐火砖 (`refractory`)

仅实际单独供应、Al2O3 >48%、制造烧成温度 1350–1450 °C 的烧结高铝砖且厂门生产混合接口匹配时采用。采集牌号、供应方路线依据及交付/安装/边角料质量，仅计完整炉组件未内含的部分；浇注料、硅质及镁质制品须另核身份，不规定通用衬层配方或更换寿命。

- 选定流：定型高铝耐火砖 `773fbca7-3575-483c-b38d-c017771979b3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`jrc-waste-incineration-2019`

###### 已安装废物焚烧设施袋式除尘器组件 (`baghouse`)

仅实际烟气处理采用袋式过滤时记录。计量供货组件并声明壳体/滤袋/支撑/电机边界、真实工况及验收记录；洗涤器、静电除尘器、吸收剂加料及烟囱为实际独立组件，不把袋式过滤设为唯一路线，也不得为匹配本行而省略实际湿处理系统。

- 选定流：已安装废物焚烧设施袋式除尘器组件
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`jrc-waste-incineration-2019`

### 过程：核材料处理围护及安全系统 (`nuclear`)

#### 输入

##### 产品流

###### 核屏蔽用新拌重质水泥混凝土 (`shield_concrete`)

仅真实核燃料循环设施设计指定本混凝土时记录；采集实际骨料物种、配合比、浇筑状态密度、屏蔽厚度、开口、质量保证及交付/浇筑体积，普通混凝土票据不能证明屏蔽性能。其他屏蔽物料须另列，与普通土建混凝土的体积不得重叠。

- 选定流：核屏蔽用新拌重质水泥混凝土
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`iaea-ssr4-2017`

###### 已安装不锈钢核材料手套箱 (`glovebox`)

仅实际采用手套箱工艺及围护配置时记录；计量已组装验收手套箱，声明供应方材料/衬里/视窗/手套/通风边界、泄漏/围护试验及设备质量保证。不是全部核材料处理都采用手套箱；容器、转移系统、临界安全几何及通风须依据实际系统登记表核对，不从本例推定。

- 选定流：已安装不锈钢核材料手套箱
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`iaea-ssr4-2017`

###### 已安装核设施排风 HEPA 过滤模块 (`hepa`)

仅项目设计实际配置 HEPA 排风模块时记录，保留经试验过滤等级、壳体、密封/风管接口、数量及调试验收。其他过滤/围护技术及内含风机/滤器须逐项核对；冷试验不豁免必需的活性调试，本 LCA 行不代表监管许可。

- 选定流：已安装核设施排风 HEPA 过滤模块
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_install 采集该原子交换实际可归属数量；未发生须有证据，未测不得置零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`iaea-ssr4-2017`

### 过程：检验、调试及实体交付 (`acceptance`)

#### 输出

##### 产品流

###### 已验收完整特殊用途土木设施 (`accepted_installation`)

一个具有明确物理界面、路线和配置的已验收设施，包含实现声明交付功能必需的永久系统。几何/容量和验收终点来自竣工记录；废物单元、发射场、掩体和处理厂不能仅因都计一件而视为可互换，必须识别具体实体。必需调试或系统缺失时不得声明完整实体交付。

- 选定流：已验收完整特殊用途土木设施
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：1 件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 来源：`un-cpc-civil-2025`

## 7. 分配与共产品处理

下列归属要求是本 PCR 的前景核算规则，以实际项目的物理拆分和 cp_assets 台账为依据；分类资料不证明分配系数。未知受益者/活动/寿命数据应保留审查，不赋默认份额。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | construction work packages | 优先用实测物理拆分：交付实体/单元、保留资产、正常运行产出和其他项目受益者分别有可识别记录。共享运输、试验公用投入和土建结构按可追溯计量、实际作业及几何界面归属；单独造价不能建立物理归属，未知份额保留审查。 |  |
| allocation_assets | steel_formwork; crane_share | 建立跨项目/期间/复用资产台账。制造份额无量纲，须有实际寿命活动或合理受益者基准支持，累计已分配份额 ≤1；不得每项目重置完整负担或虚构寿命/次数。实物净质量/配置与份额是不同字段，本次燃料、运输、维修及新增耗材更换另行归属；寿命证据不完整时最终分配负担不能成立。 这是基于 cp_assets 的前景核算要求，不是 CPC 分类规则。若服务可按可比较的真实活动计量，项目份额为可归属项目活动除以有依据的同资产总服务活动；保留既往份额并一致更新公共分母。 |  |
| allocation_residues | waste and trial outputs | 不得自动给予避免生产或能量回收抵扣。分选外送废金属/土/混凝土、退回产品及内部复用分别明确状态、数量及接收方。若有可售调试产物，应拆分实际活动，或以完整平衡和不确定性说明有依据的物理分配；不得用运营处理废物吞吐量替代施工参考量。 | `jrc-waste-incineration-2019`; `epa-concrete-washout-2012` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | acceptance | accepted_installation | 验收登记 | 实体编号；路线；场址/界面；竣工图/实测尺寸；结构及材质；实际容量及单位/工况；保留资产；系统完整性；试验起止/结果/缺口 | 将现场勘测、竣工图、系统/组件登记及签署的交付记录逐项对应同一实体；几何/容量不能用默认值 | item | 每个验收节点及最终交付 | 实际施工至声明交付 | 同一场址及所有限定系统 | 每声明的参考流 | 校准勘测；竣工差异；试验/验收签署与缺口; 每声明的参考流；输出 1 件 |
| cp_civil | civil | 土建原子投入 | 物料及几何台账 | 作业包；逐物料规格；交付/安装/退回/废弃量；配合比票据；强度/暴露规格；原状/新拌状态；密度/含水依据 | 校准称重/体积台账及竣工几何与供货单核对；逐工序记录土方、绑筋、支模、浇筑、压实、养护及实际预制/现场拌制路线 | kg; m3 | 每批/作业包 | 全实际施工期 | 全部土建及附属界面 | 每声明的参考流 | 称重/计量校准、材质票据及平衡差异; 每声明的参考流；分开状态并核对平衡 |
| cp_activity | site_support | diesel; electricity_lv | 计量及活动台账 | 设备/车辆编号；工序；工作时段；地域/电压；电表读数；燃料库存/供货/返还；批次密度/热值/碳来源；行程/载荷及供应接口 | 施工及试验分表计量、校准称重/油量与班报和运输单匹配；子承包完整覆盖，区分燃料、发电产出和用户电力 | kg; kWh; MJ | 每班/行程及试验 | 全施工、物流及声明调试期 | 实际施工设备、运输及所有路线公用系统 | 每声明的参考流 | 表计校准、供应方条件、库存平衡与分配依据; 每声明的参考流；按工作包归属且不重复 |
| cp_water | site_support | site_water; groundwater; fresh_discharge | 分接口水量台账 | 水源/介质；计量接口；起止表量；受纳水体；盐度/温度/组成；试验及回用量；抽取地点/含水层；去向 | 对供水、直接资源抽取、内部回用、围护废液及受纳回排分别计量；闭合水量台账并保留存量/蒸发等实测或审查缺口 | m3 | 每班及每次试验/回排 | 实际施工至交付 | 供水口、井及实际受纳排口 | 每声明的参考流 | 水表校准、水源/去向凭证与组成检测; 每声明的参考流；各接口只计一次 |
| cp_assets | site_support | steel_formwork; crane_share | 累计资产台账 | 资产ID；同配置净质量及称重方法；实物范围；既往项目/份额；实际本次及全寿命活动/受益者；维修/更换；未证寿命 | 以可追溯称重或供应方净质量核对完整配置，跨项目台账计算无量纲制造份额并检查累计 ≤1；未知保持审查 | kg; dimensionless share | 每次进入/退出/复用及归属 | 本次施工及所有已分配生命周期记录 | 真实设备/模板资产及全部受益者 | 每声明的参考流 | 净质量原件、配置及累计份额守恒; 每声明的参考流；制造份额不与本次能耗重叠 |
| cp_liner | containment | liner_clay; hdpe_liner; hdpe_pipe; geotextile | 衬层及排水施工质量保证台账 | 单元ID；几何/厚度/分层；物料规格/湿质量/面积；搭接/接头；焊缝与试样；密实/渗透试验；排水管/过滤组件；损耗去向 | 按实际项目设计记录施工和隐蔽工程验收；核对供货、安装、退回、试样及废料，原件指南不代替当前设计及测试准则 | kg; m2; m3 | 每批/面板/分层/隐蔽验收 | 实际围护施工全期 | 真实单元及排水接口 | 每声明的参考流 | 材料试验、焊缝/压实/渗透检验与竣工图; 每声明的参考流；同物料/状态按单元核对 |
| cp_install | acceptance | 路线特定安装组件 | 系统及安装台账 | 路线/工作包/组件ID；完整配置/BOM边界；净数量/称重/体积；材质/牌号/状态；接口；焊接/安装；实际冷/湿/热/活性试验；耗材/试料/产物/废物/排放 | 逐系统对比供货、安装与竣工验收，校准称重/计量并保留同配置净质量，完整组件与内含材料不能重叠；原子化实际试料及全部附加组件 | item; kg; m3 | 每个组件及每次试验 | 路线安装至声明验收 | 军事/发射/焚烧/核路线实际系统 | 每声明的参考流 | 供应方配置、质保、焊接/泄漏/功能试验及签署; 每声明的参考流；全部系统/试验闭合 |
| cp_waste | civil | soil_disposal; concrete_debris; washwater | 分选废物台账 | 原子物料；生成工序；污染/废物状态；固液相；实测数量；含水/密度及体积状态；内部复用/返还；接收方/运输/处理去向 | 逐物料分别称重或计量并核对转移单，固体与液体不混计；内部流、产品返还及对环境释放分别归类 | kg; m3 | 每车/每次转移 | 全部施工及验收期 | 各实际生成工序和外部接收界面 | 每声明的参考流 | 称重/计量、污染检测和接收凭证; 每声明的参考流；核对存量及去向 |
| cp_release | site_support | co2_fossil; no; no2; dust | 物种及源释放证据 | 真实活动/时段；物种/CAS；化石/生物来源；介质/子介质；治理；采样或因子原件/适用参数；外部释放；土地用途/面积/时间；噪声受体/声级/持续时间 | 实测准确物种外部排放或以独立支持的场址活动及参数计算；记录治理和不确定性，土地/噪声单独观察，不强配质量交换；无资料保持缺口 | kg; environmental context units | 实际排放活动及代表性测量 | 全施工及声明试验 | 实际场址排放源及外部受体 | 每声明的参考流 | 检测/因子原件、介质及活动覆盖/控制证据; 每声明的参考流；物种及不重叠范围分别汇总 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| attribute_entity | all inventory rows | 在同一已验收实体范围内汇总各原子交换实测可归属量；输出为 1 件，分母固定不再除假设质量/面积/寿命。共有界面先实际拆分；未知量保持未知。 | 原始台账；cp_acceptance；实际界面/分配记录 | 每声明的参考流各原子量 |  |
| convert_energy | electricity_lv | MJ = 实测 kWh × 3.6；保留原表读数及真实电压/地域。 | cp_activity；kWh | MJ | `nist-si-energy` |
| convert_density | fresh_concrete; soil_disposal; diesel; site_water; shield_concrete | 仅需质量/体积换算且有同状态密度证据时 kg = 实测 m3 × 同状态 kg/m3；原量、密度方法、温度/含水/盐度和不确定性全部保留，未知密度不能猜值。 | 实测体积；同状态密度证据；对应采集协议 | 可追溯转换后的 kg 及原始 m3 |  |
| allocate_manufacture | steel_formwork; crane_share | 可归属制造等效 kg = 实测同配置资产净 kg × 有依据的无量纲制造份额；每个资产所有项目/期间/复用份额之和 ≤1。寿命活动/受益者证据未知则不得出最终份额；本次运行量另外计。 | cp_assets；净质量及累计份额记录 | 每声明的参考流制造等效 kg 及未解决份额 |  |
| material_balance | all inventory rows | 对相同物料和状态核对：接收量 + 期初存量 = 安装/消耗 + 退回 + 外送废物 + 期末 + 有依据的损失；内部转移不重复计入。不能将不同体积状态或固液相直接相加；所有差异须解释。 | 相同状态台账；原始计量与去向 | 物料平衡及差异披露 | `epa-concrete-washout-2012` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_function | reference product | 同一实体的功能、尺寸/容量、配置及验收范围真实一致，不比较不同设施类型的裸件数 | cp_acceptance 竣工/验收原件 |
| quality_coverage | all inventory rows | 覆盖全部实际工作包/分包、固定系统、试验和原子交换；逐项标记发生、未发生依据、未知及缺口 | 完整系统/BOM及量值/去向台账 |
| quality_source | dataset | 历史来源仅作限定组件/方法例子，不移植设计数值或寿命；当前项目标准和许可另核 | 来源原件、范围/年代及实际项目技术证据 |
| quality_identity | all inventory rows | 材质、形态、路线、地域、主属性/单位及环境介质实际匹配；空身份保持具体行，中文官方名相符 | 已核原件及项目限定信息 |
| quality_time | dataset | 采用实际施工及试验完整时段；供应年份/技术代表性、异常返工和计量缺口透明 | 日程、班报、仪表校准及修正依据 |
| quality_share | steel_formwork; crane_share | 保留同配置净质量和全寿命活动/受益者依据，累计份额守恒；未知不赋默认值 | cp_assets 跨项目审计台账 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset | 按竣工/验收登记表及分类排除范围核验路线、场址和完整物理系统。缺少必需系统/试验应报告不完整，空路线或无关路线不能视为完整设施。 | `un-cpc-civil-2025` |
| validate_basis | all inventory rows | 输出须为同一验收设施的 1 件，清单及协议均按每声明的参考流覆盖；核对实际几何/容量、体积状态、库存/退回/废物及单位换算，不得隐含件数转质量/面积/寿命或无依据密度。 | `un-cpc-civil-2025` |
| validate_identity | all inventory rows | 逐项复核身份的物质/形态、路线、牌号、地域/接口、参考属性和单位组，基础流介质/子介质及时间性质必须匹配；空 UUID 保留具体身份并登记，官方中文名称须相符。燃料存在不证明排放，NOx 当量不证明分子 NO/NO2，未处理废液转移不等于水排放。 | `epa-concrete-washout-2012` |
| validate_closure | dataset | 检查必需及实际条件作业包、安装系统/物料表覆盖、调试记录、环境缺口和累计资产份额；未测量行和省略的重要接口属于未解决覆盖，不能置零。报告已查/跳过范围及不确定性，不得声称完整从摇篮到门、全寿命或监管/方法学批准。 | `iaea-ssr4-2017`; `epa-construction-dust-1995` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 特殊用途设施施工及明确验收交付前景过程数据包 |
| downstream_use | 路线/功能/配置相符的施工评价及经明确链接的扩展设施生命周期研究 |
| allowed_use | 已核实实体及实际施工/测试范围内的清单；上游链接和资产归属按披露条件 |
| excluded_use | 跨路线裸件数比较；默认每设施负担；运营废物处理/发射/核加工因子；自动全寿命/环境合规/方法学批准 |
| required_metadata | PCR及实体ID；路线/场址；实测几何/实际容量；永久系统/BOM内含范围；保留资产；材料状态/供应接口；施工及验收日期；真实试验终点；分配及各阶段接口 |
| required_quality_disclosure | 科学/翻译审查状态另依元数据；数据来源/计量/代表性；未知身份/量值；未覆盖组件/测试/上游/环境及后续阶段；资产份额和不确定性 |
| update_trigger | 功能/系统/几何/材质/路线改变；返工/实际试验终点改变；身份或原件更新；新增可靠量值；资产份额或受益者变化 |

## 11. 数据源

| Source id | 类型 | 文献 | 用途及限制 |
| --- | --- | --- | --- |
| `un-cpc-civil-2025` | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p282; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 实体工程分类及与施工服务的区分；官方未另列范围，不提供设计要求。 |
| `epa-industrial-waste-guide` | official_guidance | US EPA, Guide for Industrial Waste Management, 2003, Chapter7B pp7B-1–7B-36 and introductory scope ppvii–x; https://www.epa.gov/sites/default/files/2016-03/documents/industrial-waste-guide.pdf | 历史非危险工业废物围护组件/设计/安装例子；不涵盖市政/危险/混合放射性/采矿废物，不移植数值设计要求或通用衬层路线。 |
| `dod-firing-ranges-2025` | official_guidance | DoD, UFC4-179-02 Small Arms Ranges, 5 March2020, Change1 13 March2025, §§3-8.1,3-10.2–3-11,4-16,4-21.6, pp16,21–22,40,54–55; https://www.wbdg.org/FFC/DOD/UFC/ufc_4_179_02_2020_c1.pdf | 靶场排水、防护组件及通风验收例子，不代表完整掩体/堡垒设计或全球通用准则。 |
| `nasa-launch-construction-2018` | official_guidance | NASA, Launch Pad39B Flame Trench Nears Completion, 29 May2018, main construction description; https://www.nasa.gov/humans-in-space/launch-pad-39b-flame-trench-nears-completion/ | 历史钢制火焰导流器/导流沟组件例子；项目数量及任务数据不是默认值。 |
| `nasa-launch-water-test-2018` | official_guidance | NASA, Successful Water Flow Test at Launch Pad39B, October2018, main test description; https://www.nasa.gov/image-article/successful-water-flow-test-launch-pad-39b/ | 实际喷水系统验收试验例子；须采集项目试验水/能量，不移植运营用水量。 |
| `jrc-waste-incineration-2019` | official_guidance | European Commission JRC, Waste Incineration BREF, 2019, EUR29971 EN, doi:10.2760/761437, §2.2.1.3.2 p25/PDF59 and rotary-kiln discussion pp47–50/PDF81–84; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC118637/jrc118637_wi_bref_2019_published.pdf | 收料、耐火衬热工及烟气系统安装例子；不是施工工程量表、强制单一技术或运营排放因子。 |
| `iaea-ssr4-2017` | official_guidance | IAEA, Safety of Nuclear Fuel Cycle Facilities, SSR-4, 2017, §1.8 p3, Requirement53 pp82–83 and Requirement54 pp83–89; https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1791_web.pdf | 核燃料循环施工质量保证/竣工及冷/活性调试；不涵盖反应堆/天然矿石加工/废物处置，实际许可及场址准则仍须项目证据。 |
| `epa-concrete-washout-2012` | official_guidance | US EPA, Concrete Washout, EPA833-F-11-006, February2012, pp1–2; https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 历史施工清洗围护、固液分开及回收例子，不移植默认 pH 或排放因子。 |
| `epa-construction-dust-1995` | official_guidance | US EPA, AP-42 §13.2.3 Heavy Construction Operations, January1995 with posted corrections, pp13.2.3-1–2; https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | 历史源工序/气象/治理及 TSP 因子限制，不采用默认面积/月因子或虚构粒径分级。 |
| `nist-si-energy` | official_guidance | NIST SP811 (2008), Guide to the SI, Appendix B.9, Energy table, kilowatt hour→megajoule; https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9 | 精确单位换算 1 kWh=3.6 MJ；此换算不受 2019 年基本单位修订影响，不是燃料热值或排放因子。 |
| `epa-msw-landfills` | official_guidance | US EPA, Municipal Solid Waste Landfills, official overview, composite-liner and leachate-collection description; https://www.epa.gov/landfills/municipal-solid-waste-landfills | 市政填埋场组件例子，与工业废物指南分开；以实际辖区/设计为准，不移植衬层或运营数值准则。 |
