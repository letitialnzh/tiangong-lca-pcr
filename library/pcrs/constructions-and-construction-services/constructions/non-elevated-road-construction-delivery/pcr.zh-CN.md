---
pcr_id: pcr.constructions-and-construction-services.constructions.non-elevated-road-construction-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 非高架公路、街道与道路实体的施工交付

## 1. 范围与适用性

本 PCR 描述具有明确地理位置的完整非高架公路、街道、道路、铺面停车区、车道、人行道或自行车路径的实际施工及验收交付，包括所声明的排水、路肩、安全设施和车行/人行下穿或上跨设施。对象是物理土木工程实体，不是施工服务或一包建材。类别区分及穿越设施以 `un-cpc3-constructions-2025` 第277–279页为依据。单纯路面养护不能替代完整交付。

排除高架公路、独立交付的桥梁/高架桥、公路隧道、铁路路基、机场跑道、材料或设备制造及单独出售的施工服务。道路整体穿越设施与独立交付桥梁归属不清时，应先按实际资产台账和业主边界解决再使用本 PCR，不得默默删去穿越设施。施工数据仅覆盖所声明初始工程直至验收。交通使用、运营照明、后期维护更新和最终拆除为独立阶段，不赋予虚构计划或寿命。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.non-elevated-road-construction-delivery |
| classification_refs | CPC 3.0 53211 (context only) |
| covered_products | 非高架道路实体及官方纳入的路径、停车区和道路安全/穿越设施，作为一项声明的验收工程 |
| excluded_products | 高架公路；独立桥梁；公路隧道；铁路；跑道；上游材料；设备；施工服务 |
| representative_product | 一项具有实际附属工程、已验收且场址明确的完整道路区段或有界道路设施 |
| production_route | 实际土方与路基；按实建采用集料/未铺装、沥青、混凝土或模块化路面路线；整体排水与安全工程；检查交付 |
| market_state | 场址安装完成并验收的物理实体；不是按质量归一化的材料或设备产出 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在交付时由已配置道路实体提供所声明车行/人行通行功能 |
| How much | 一项完整验收工程，具有实测桩号/长度、车道/可用宽度、表面积和层/结构尺寸；面积型设施使用测量周界与可用面积。这些是同一工程描述信息，不是可替换清单分母。 |
| How well | 依据实际工程声明竣工几何、预期使用者/交通荷载、路基路面配置、排水安全规格、验收试验结果及不符合项；不默认设计荷载或合规批准 |
| How long or cycle | 一个有记录的施工至验收周期，不评价运营服务期限。后续寿命比较须另有证据支持的性能、维护及报废阶段。 |
| reference_flow_link | `finished_road` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收的完整非高架道路工程 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 场址与项目/资产编号；工程周界和桩号；实测长度及面积；宽度和车道数；路面路线和层尺寸；排水与穿越纳入范围；安全/构件配置；预期用途和荷载依据；初始场地状态；合同规格及验收证据/日期；施工日期；阶段排除项 |

`item` 是公开单位组参考单位 Item(s) 的单件显示别名，计数一项有明确配置的完整工程，不使两个几何不同工程自动功能等效。数据集元数据须提供全部必需限定信息；部分交付或缺失配置不能作为该产出。

## 4. 计量与单位规则

| rule_id | 适用于 | 要求属性 | 要求单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 同一完整验收工程的参考产出为 1 件，采用 cp_delivery 计数。所有清单行及采集汇总按每声明的参考流。不以假定质量、长度或面积替代分母。 |
| physical_quantities | all inventory rows | Mass; Volume; energy; mass*distance; Number of items | kg; m3; MJ; kg*km; item | 保留每个公开身份主属性及单位。称量材料质量；仅在有批次实测密度时将测量体积换算为质量。水按体积计量；保留干湿状态、燃料热值基准与实际运输活动。不将能量或体积改写为 Mass。 属性与单位按行对应：质量/kg、体积/m3、能量/MJ、质量距离/kg*km，完整验收道路参考输出采用物品数量（Number of items）/item；辅助物量不替代该输出件数。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 初始施工前有记录的场地及声明供应商出厂状态的施工产品 |
| starting_condition_role | foreground_start |
| product_classification_scope | 实际工程周界内的完整非高架道路工程；CPC 53211 为覆盖语境 |
| recursive_input_rule | 保留原位既有道路为初始存量，不是新生产道路投入；披露其物理范围及干预。独立购入同类工程须有独立有界上游数据集，不递归计入本产出或重复计既有施工。 |
| upstream_dataset_requirement | 链接独立核验材料、公用工程及设备数据集，明确生产/运输边界、路线、地域和单位。供应商出厂清单本身不证明上游影响完整覆盖。 |
| disclosure | 仅初始施工与验收前景；链接上游模块另报完整性。不是无条件完整 cradle-to-gate 或全寿命结果。 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| b_construction | 纳入交付已配置实体所需实际进退场、场地准备、开挖挖填、路基基层、铺装、排水、穿越、安全、现场水能、返工、临时工程及废物转移。逐任务记录活动，现场支持行仅计一次该任务能耗。 | fhwa-pavement-lca-2016; fhwa-fp24-construction |
| b_upstream | 购买混合料/组件按实际供货状态进入；开采、水泥/钢/沥青制造、批次拌和和设备制造保持上游，除非实际在场内实施并明确另建过程。不同时计购买混合料及其组分。 | fhwa-pavement-lca-2016 |
| b_later | 交通运营、未来维护更换及最终拆除不属初始施工数据集。区别场地准备时拆除既有资产和未来拆除。施工区绕行/延误、土地利用/生物多样性若未独立建模，则披露为评价缺口，不推断零影响。 | fhwa-pavement-lca-2016 |
| b_extensions | 某路线或结构构件未在行卡中列出时，须按实际工程量、原始方法证据及身份核验扩展实际过程和原子交换，方可声称项目完整覆盖。实际安装或实施的爆破、桩基、挡土结构、钢穿越设施、绿化、照明及电子安全设备不能默默省略。 | fhwa-fp24-construction |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| earthworks | 场地准备、开挖与路堤填筑 | conditional | 实际场地清理、既有路面拆除、挖填或路堤 | foreground_process | 每声明的参考流 |
| aggregate | 路基处理与集料层铺筑压实 | conditional | 实际基层/底基层、集料面层或稳定处理 | foreground_process | 每声明的参考流 |
| asphalt | 沥青混合料铺筑、粘层与压实 | conditional | 实际沥青路线；购买混合料、摊铺及碾压 | foreground_process | 每声明的参考流 |
| concrete | 混凝土浇筑、钢筋、接缝与养护 | conditional | 实际混凝土路线、结构或基础；浇筑、振捣、整饰、接缝及养护 | foreground_process | 每声明的参考流 |
| components | 模块化铺装安装 | conditional | 实际模块化混凝土或石材铺装 | foreground_process | 每声明的参考流 |
| drainage_safety | 排水、上下穿越及道路安全设施安装 | conditional | 验收范围实际排水、整体穿越或安全构件 | foreground_process | 每声明的参考流 |
| support | 施工设备运行、现场公用工程与水控制 | required | 全部实际施工活动，公用工程逐项条件纳入 | foreground_process | 每声明的参考流 |
| transport | 施工物流与废物运输 | conditional | 实际材料/设备/废物运输，不预设默认距离 | foreground_process | 每声明的参考流 |
| handover | 检查、返工、清理与完整交付 | required | 完整配置工程，包括验收前返工及清理 | reference_process | 每声明的参考流 |

### 过程：场地准备、开挖与路堤填筑 (`earthworks`)

实际场地清理、既有路面拆除、挖填或路堤. 采用实际设备（按适用情况为挖掘机/平地机/压路机、摊铺机、混凝土泵/振捣器/切缝机或安装设备）及实测任务记录，不预设标准设备组或率。水能与排放见 support，按任务仅归属一次。

#### 输入

##### 产品流

###### 路堤填筑用经选定开挖矿质土 (`imported_fill`)

仅适用于本工程外部输入的合适土料：可归属消耗量=总收货+期初库存−经核实退回或转移−期末可复用库存，均按相符物质及含水状态核对。纳入实际损耗与返工消耗，铺筑量另记。记录来源、类别、含水状态、压实与铺筑。场内挖方转填方为内部转移，不是再次外部投入。

- 选定流: 路堤填筑用经选定开挖矿质土
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

#### 输出

##### 废物流

###### 非危险剩余开挖矿质土 (`spoil_soil`)

仅用于离场的不适用或多余土料：按独立土料批次称重；排除岩石、沥青及污染土。记录场外去向，不自动给原生土替代收益。

- 选定流: 非危险剩余开挖矿质土
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_waste 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `fhwa-pavement-lca-2016`

### 过程：路基处理与集料层铺筑压实 (`aggregate`)

实际基层/底基层、集料面层或稳定处理. 采用实际设备（按适用情况为挖掘机/平地机/压路机、摊铺机、混凝土泵/振捣器/切缝机或安装设备）及实测任务记录，不预设标准设备组或率。水能与排放见 support，按任务仅归属一次。

#### 输入

##### 产品流

###### 道路基层用碎石集料 (`aggregate_base`)

施工碎石基层或未铺装面层时：按规定粒级与含水状态分别称重；核对已铺层几何、退料与损耗。

- 选定流: 道路基层用碎石集料
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

###### 水泥，硅酸盐水泥 (`stabilization_cement`)

仅用于实际施工的水泥稳定土或基层：按批称量规定水泥等级，不规定配比。

- 选定流: 水泥，硅酸盐水泥 `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

###### 熟石灰 (`stabilization_lime`)

仅在规定且实际实施石灰处理时：称量氢氧化钙产品，区分生石灰及产品已有水分。

- 选定流: 熟石灰
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

###### 聚丙烯土工布 (`geotextile`)

仅在安装规定的聚丙烯隔离或加筋织物时：称量接收量和裁切余料；保存牌号、面积及实测单位面积质量。其他聚合物须另列原子行。

- 选定流: 聚丙烯土工布
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

### 过程：沥青混合料铺筑、粘层与压实 (`asphalt`)

实际沥青路线；购买混合料、摊铺及碾压. 采用实际设备（按适用情况为挖掘机/平地机/压路机、摊铺机、混凝土泵/振捣器/切缝机或安装设备）及实测任务记录，不预设标准设备组或率。水能与排放见 support，按任务仅归属一次。

#### 输入

##### 产品流

###### 沥青混合料 (`asphalt_mix`)

仅用于沥青铺筑所接收的集料、结合料和填料混合物：热拌、温拌、冷拌批次分别称重，记录配方、再生含量、接收温度与退料。上游工厂拌和不属施工前景；不重复计入其组成集料和结合料。

- 选定流: 沥青混合料 `ad29a865-2fd6-41da-99d2-9669b9c7984d`
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-fp24-construction`

###### 粘层用阳离子沥青乳液 (`tack_emulsion`)

仅在实际施用该粘层配方时：称量湿乳液，按批次规格记录固形物和水含量。不用天然沥青、氧化沥青或防水卷材替代；其他配方另列行。

- 选定流: 粘层用阳离子沥青乳液
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-fp24-construction`

#### 输出

##### 废物流

###### 未受污染的废沥青路面混合料 (`asphalt_offcut`)

仅用于本次施工拒收混合料或切余料：独立称重，区别场地准备时拆除的既有路面，记录再生去向。场内再利用料保持内部转移。

- 选定流: 未受污染的废沥青路面混合料
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_waste 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `fhwa-pavement-lca-2016`

### 过程：混凝土浇筑、钢筋、接缝与养护 (`concrete`)

实际混凝土路线、结构或基础；浇筑、振捣、整饰、接缝及养护. 采用实际设备（按适用情况为挖掘机/平地机/压路机、摊铺机、混凝土泵/振捣器/切缝机或安装设备）及实测任务记录，不预设标准设备组或率。水能与排放见 support，按任务仅归属一次。

#### 输入

##### 产品流

###### 道路施工用新拌预拌混凝土 (`fresh_concrete`)

仅在路面、基础、涵洞或下穿工程接收新拌混凝土时：称量交付量，或使用批次实测密度与交付体积；保存配合比、水泥种类、暴露条件和稠度。排除供应商浇筑养护服务。场内拌制须建立实际组分行及独立拌和过程。

- 选定流: 道路施工用新拌预拌混凝土
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-fp24-construction`

###### 钢筋，钢制建筑材料 (`rebar`)

仅在安装相符热轧低合金钢筋且 C≤0.2% 时：按钢筋表和交付批次称量，核对搭接、切余与退货。不同钢材规格的传力杆或拉杆另列行。

- 选定流: 钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-fp24-construction`

###### 有机硅接缝密封胶 (`joint_sealant`)

仅在施用该接缝密封胶时：计量质量并记录配方及固化状态；以接缝几何和切缝记录确定覆盖，不设默认施用量。

- 选定流: 有机硅接缝密封胶
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-fp24-construction`

###### 锯切软木模板板材 (`formwork_timber`)

仅在实际使用木模板时：测量树种、含水率和质量，按分配规则 a_reuse 分摊守恒的重复使用份额，记录拆下库存与破损；不在每次使用计入完整制造负担。

- 选定流: 锯切软木模板板材
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

#### 输出

##### 废物流

###### 未受污染的硬化混凝土块 (`concrete_rubble`)

仅在混凝土切除块或拒收硬化混凝土跨场界时：独立称重，区分钢筋及退回新拌混凝土，记录去向。

- 选定流: 未受污染的硬化混凝土块
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_waste 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `fhwa-pavement-lca-2016`

###### 碱性混凝土清洗废水 (`washout_water`)

仅在收集清洗液并送处理时：计量体积、pH、悬浮固体及处理去向；沉淀混凝土污泥另列行。不将未处理废水作为水资源，不假定发生排放。

- 选定流: 碱性混凝土清洗废水
- 流属性/单位: Volume / m3
- 数量规则: 采用 cp_water 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `fhwa-pavement-lca-2016`

###### 沉淀混凝土清洗污泥 (`washout_sludge`)

仅在从清洗收集设施移出沉淀固体时：称湿质量并测含水率，区别送处理的液体。

- 选定流: 沉淀混凝土清洗污泥
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_waste 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_waste`
- 来源: `fhwa-pavement-lca-2016`

### 过程：模块化铺装安装 (`components`)

实际模块化混凝土或石材铺装. 采用实际设备（按适用情况为挖掘机/平地机/压路机、摊铺机、混凝土泵/振捣器/切缝机或安装设备）及实测任务记录，不预设标准设备组或率。水能与排放见 support，按任务仅归属一次。

#### 输入

##### 产品流

###### 预制混凝土铺路块 (`paving_unit`)

仅在安装模块化混凝土铺装时：称量铺路块，核对尺寸、接缝垫层及破损；供应商预制属于上游。

- 选定流: 预制混凝土铺路块
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

###### 花岗岩铺路板 (`stone_slab`)

仅在人行路径安装花岗岩板时：测量板材接收量、切余、厚度和表面状态；其他石材种类另列行。

- 选定流: 花岗岩铺路板
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

### 过程：排水、上下穿越及道路安全设施安装 (`drainage_safety`)

验收范围实际排水、整体穿越或安全构件. 采用实际设备（按适用情况为挖掘机/平地机/压路机、摊铺机、混凝土泵/振捣器/切缝机或安装设备）及实测任务记录，不预设标准设备组或率。水能与排放见 support，按任务仅归属一次。

#### 输入

##### 产品流

###### 预制钢筋混凝土排水管 (`concrete_pipe`)

仅在安装该管型时：称量管段，或以实测长度、直径、壁厚核对供应商单位质量；不以通用管道替代。

- 选定流: 预制钢筋混凝土排水管
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

###### 热浸镀锌钢道路护栏组件 (`guardrail`)

仅用于实际安装规定的组件，包括相符立柱、横梁和紧固件：称量该配置组件，保存构件表、镀层及安装记录。供应商构件制造属于上游；若实际交易不是整套组件，独立购买构件须拆行。

- 选定流: 热浸镀锌钢道路护栏组件
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-fp24-construction`

###### 水性丙烯酸道路标线涂料 (`marking_paint`)

仅用于实际道路标线湿配方：称量供货及退料，保存安全数据表和固含量；溶剂型或热塑标线须另列行及实际排放。

- 选定流: 水性丙烯酸道路标线涂料
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

###### 道路标线逆反射用玻璃珠 (`glass_beads`)

仅在单独施撒玻璃珠时：称量领用及退料，记录等级及施用；排除供货涂料中已计入的玻璃珠。

- 选定流: 道路标线逆反射用玻璃珠
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_material 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `fhwa-pavement-lca-2016`

### 过程：施工设备运行、现场公用工程与水控制 (`support`)

全部实际施工活动，公用工程逐项条件纳入. 采用实际设备（按适用情况为挖掘机/平地机/压路机、摊铺机、混凝土泵/振捣器/切缝机或安装设备）及实测任务记录，不预设标准设备组或率。水能与排放见 support，按任务仅归属一次。

#### 输入

##### 产品流

###### 柴油 (`diesel_site`)

柴油挖掘机、平地机、压路机、摊铺机、水泵或发电机实际运行时：按设备和任务计量油箱或库存平衡，包括怠速。保存化石和生物燃料比例及实际规格，不假定跑道专用身份或排放率。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_energy 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `fhwa-pavement-lca-2016`

###### 交流电 (`electricity_cn_lv`)

仅用于中国电网平均且用户端 <1 kV 的供电：按场址期间和任务计量购电，按 energy_conversion 将实测 kWh 换算为 MJ。其他地域或电压须另列核验行。自发电产出为内部流，不将其燃料与电力同时列为外部输入。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: Net calorific value / MJ
- 数量规则: 采用 cp_energy 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `fhwa-pavement-lca-2016`

###### 自来水 (`tap_water`)

本公开体积身份仅适用于匹配声明水处理厂门端和供水边界的实际香港处理水供应。其他地域或现场交付接口须另核身份，并提供实际上游运输和供水链接，不得使用该地域代理。分别计量调湿、抑尘、养护及清洗用水，排除上游取水和内部循环水；保留体积/m3，不把次要属性中的筛查密度当作默认换算。

- 选定流: 自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位: Volume / m3
- 数量规则: 采用 cp_water 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `fhwa-pavement-lca-2016`

##### 基本流

###### 河水 (`river_abstraction`)

仅在场址直接从河流取水时：计量取水量、来源、日期及用途；区别湖水、地下水与购水。总取水与实测回水分别记录。

- 选定流: 河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位: Volume / m3
- 数量规则: 采用 cp_water 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `fhwa-pavement-lca-2016`

###### 地下水 (`ground_abstraction`)

仅在施工供水或降水抽取地下水时：计量抽水并标识含水层；不推断耗水等于取水。降水外排另需水流路径记录。

- 选定流: 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位: Volume / m3
- 数量规则: 采用 cp_water 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `fhwa-pavement-lca-2016`

#### 输出

##### 废物流

###### 送处理的施工降水外排液 (`dewater_effluent`)

仅用于跨场界交给外部处理接收方的液体：计量抽出液体、固体及污染物特征。直接排入河流不是该技术圈废物；须依据监测另列排放物质及接收介质的基础流行。

- 选定流: 送处理的施工降水外排液
- 流属性/单位: Volume / m3
- 数量规则: 采用 cp_water 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 来源: `fhwa-pavement-lca-2016`

##### 基本流

###### 二氧化碳（化石源） (`co2_air`)

仅用于子介质未特指的室外空气化石燃烧 CO2：按 cp_emission 使用实际化石燃料碳含量、氧化及活动证据推导，或使用相容实测/设备排放数据集。不是生物源 CO2、土地利用变化或长期排放；已知更具体空气子介质时，发布前解决该身份。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_emission 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `fhwa-pavement-lca-2016`

###### 一氧化氮 (`no_air`)

仅用于实际设备尾气中独立定量的 NO，排入子介质未特指的室外空气。保存物种质量；不在此填入以 NO2 当量报告的 NOx、NO2 或 N2O。须相容尾气实测或模型，不设默认因子。

- 选定流: 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_emission 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `fhwa-pavement-lca-2016`

###### 二氧化氮 (`no2_air`)

仅用于独立定量的 NO2 尾气，排入子介质未特指的室外空气；须实际设备及活动证据。以 NO2 当量报告的 NOx 不证明 NO2 物种组成。

- 选定流: 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_emission 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `fhwa-pavement-lca-2016`

###### 颗粒物 (PM10) (`pm10_urban`)

仅用于定量的城市近地面施工无组织 PM10：记录产尘任务、土壤与含水率、交通、气象及控制措施；采用场址相容方法，绝不将历史 AP-42 TSP 面积因子移作 PM10 因子。避免与独立估算的尾气颗粒重叠。

- 选定流: 颗粒物 (PM10) `08a91e70-3ddc-11dd-91c0-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_emission 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `epa-construction-dust-1995`

###### 颗粒物 (PM10) (`pm10_nonurban`)

仅用于定量的非城市近地面施工无组织 PM10；与 pm10_urban 相同逐活动协议，同一排放不得重复计入。不得以低/高烟囱或长期身份替代。

- 选定流: 颗粒物 (PM10) `9fbb53e8-ed5b-11e6-bc64-92361f002671`
- 流属性/单位: Mass / kg
- 数量规则: 采用 cp_emission 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_emission`
- 来源: `epa-construction-dust-1995`

### 过程：施工物流与废物运输 (`transport`)

实际材料/设备/废物运输，不预设默认距离. 采用实际设备（按适用情况为挖掘机/平地机/压路机、摊铺机、混凝土泵/振捣器/切缝机或安装设备）及实测任务记录，不预设标准设备组或率。水能与排放见 support，按任务仅归属一次。

#### 输入

##### 产品流

###### 施工交付用非冷藏卡车货运 (`lorry_transport`)

购买公路运输用于材料、废物或设备时：使用实际货物质量与路线距离、车辆、装载及空载回程处理；逐票独立归属，排除上游数据集已含供应商运输。自有车队另建燃料与尾气，不再作为购买服务重复计入。

- 选定流: 施工交付用非冷藏卡车货运
- 流属性/单位: mass*distance / kg*km
- 数量规则: 采用 cp_transport 实测并归属本完整工程的交换；保留任务/批次及实际物理量。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_transport`
- 来源: `fhwa-pavement-lca-2016`

### 过程：检查、返工、清理与完整交付 (`handover`)

完整配置工程，包括验收前返工及清理. 采用实际设备（按适用情况为挖掘机/平地机/压路机、摊铺机、混凝土泵/振捣器/切缝机或安装设备）及实测任务记录，不预设标准设备组或率。水能与排放见 support，按任务仅归属一次。

#### 输出

##### 产品流

###### 已验收的完整非高架道路工程 (`finished_road`)

1 件

- 选定流: 已验收的完整非高架道路工程
- 流属性/单位: Number of items / item
- 数量规则: 1 件
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_delivery`
- 来源: `un-cpc3-constructions-2025`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| a_task | 优先单独计量任务数量及可识别材料批次。共用公用工程或运输按有负载/燃料证据的实测设备工时、计量体积或实际货票分区；保留分母台账并核对分配总量与原始实测总量。不按合同价格或假定等长分配。 | fhwa-pavement-lca-2016 |
| a_reuse | 设备制造在默认施工前景之外，须披露该缺口。扩展数据集链接时及可重复使用临时工程，维护跨项目统一制造负担台账：使用份额为可归属实际活动除以同资产同制造范围有证据的累计服务活动。各项目、期间、重复使用累计份额不得超过一。分母、未来再用或寿命未知时保持审查；不在每项目重置完整负担。破损/更换独立报告并核对库存。 | fhwa-pavement-lca-2016 |
| a_recycling | 区分内部再用、外运废物及独立核验回收产品。不自动给避免生产收益；保留转移/处理负担并披露实际再生分配边界。独立替代主张须有审查后的反事实、质量和去向证据，不将弃土虚设为共产品。 | fhwa-pavement-lca-2016 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | handover | finished_road | acceptance_record | 项目编号；周界；完整工程验收数量；桩号；长度；宽度；面积；层尺寸；构件表；使用者/荷载依据；验收/日期；缺陷 | 测量竣工几何，以整体资产/构件表核对签署验收记录；仅计数同一完整验收配置。不用预算或支付项目总额替代物理测量。 | item | 验收时及每次范围修正 | 全部施工至验收 | 声明完整工程周界 | 每声明的参考流 | 测量/校准；竣工图；试验记录；签署验收及配置核对 |
| cp_material | all foreground processes | material_input | weighing_record | 任务；批次；供应商；组成；等级；干湿状态；接收/退料；体积换算时密度；铺筑；再用资产台账 ；可归属期初期末可复用库存；经核实转移；实际损耗及返工消耗 | 采用校准地磅/批次秤及接收记录；核对交付、安装量、退料、废物和库存变化。使用几何体积时测量相符批次密度，不取典型值。区分上游出厂和现场安装。  对imported_fill按相符物质和含水基准采用可归属总收货+期初库存−经核实退回或转移−期末可复用库存；消耗与铺筑分别记录。这不替代可复用资产的制造分摊。 | kg | 每批每任务 | 全部工程，含拒收和返工批次 | 供应商接收至安装 | 每声明的参考流 | 校准；交货单；材料平衡；配合比表；再用台账 |
| cp_energy | support | energy_input | meter_record | 设备；任务；起止；怠速；燃料等级/质量；表读数；库存；电压；地域；燃料热值证据 | 在整个工程期计量购买燃料与电力，包括准备、待机及返工；标注开挖、整平、压实、铺筑、抽水、切缝和照明任务。优先校准计量/库存核对，不取通用功率估计。 | kg; MJ; kWh | 每日及任务变化 | 进场至退场及验收 | 实际设备及现场公用工程 | 每声明的参考流 | 油票；库存平衡；计量校准；分配台账 |
| cp_water | support; concrete | water_input_and_liquid_waste | meter_and_sampling_record | 任务；来源；进水；循环；排水；接收方；处理；含水层/河流；pH；固体；采样条件 | 分别计量购水、自然资源取水和废水，绘制内部循环。处理/排放前采样实际清洗或降水液体并记录路径。接收水体污染物质量须有物质特定浓度和相符体积，不使用整包废水基础流。 | m3 | 每来源/接收方及排放事件 | 全部施工用排水 | 实际场址及水源/接收方 | 每声明的参考流 | 计量表；实验室报告；路径/接收记录；水平衡 |
| cp_waste | all foreground processes | solid_waste | transfer_record | 物质；批次；含水率；危险状态；重量；来源；接收方；回收/处置；运输距离 | 独立称量每个物理废物流并核对转移回执；核对材料平衡，区别施工前拆除和新施工损耗；外部废物总量排除内部再用。 | kg | 每次转移 | 全部准备及施工废物 | 场界及实际接收方 | 每声明的参考流 | 磅单；危险性表征；去向回执 |
| cp_emission | support | elementary_emission | measurement_or_activity_model | 物种；介质/子介质；设备/任务；实际燃料/活动；模型/因子/来源；控制；粒径；含水率；气象；不确定性 | 使用有代表性的尾气监测或设备特定已核验模型及实际活动；按工序用适用实测或有记录本地方法单独定量扬尘。保留 NO/NO2 和颗粒粒径区别；未量化排放披露为缺口，不设为零。不采用历史 EPA 通用 TSP 因子。 | kg | 每个实际排放任务/建模期间 | 交付前全部已建模排放 | 实际场址及接收环境 | 每声明的参考流 | 校准；模型/因子来源；活动日志；物种/介质审计；不确定性 |
| cp_transport | transport | freight_input | consignment_record | 货票质量；实测路线距离；货物；车辆；燃料；装载；空载回程；承运边界 | 记录每个实际行程/货票，按精确单位换算计算质量距离。按适用纳入设备进退场及废物运输；不取通用距离或货币代理。 | kg*km | 每行程 | 全部施工物流 | 实际起终点路线 | 每声明的参考流 | 承运单；实测路线；装载；上游重叠审计 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_ledger | all inventory rows | 累加声明完整工程唯一可归属实测记录，参考数量保持一；保留任务分配及构件/库存核对。按长度/面积强度为额外派生视图，须同一工程实测几何，不替代参考产出。 | cp_delivery; cp_material; cp_energy; cp_water; cp_waste; cp_emission; cp_transport | 每声明的参考流交换量 | fhwa-pavement-lca-2016 |
| energy_conversion | electricity_cn_lv | 1 kWh = 3.6 MJ，为精确换算。仅用于实测电能，保留所选 Net calorific value 属性。燃料质量不是电能；热值换算须相符燃料分析及热值基准。 | cp_energy | 每声明的参考流购电量，MJ |  |
| quantity_conversion | fresh_concrete, concrete_pipe, geotextile | 以实际测量体积乘相符实测密度求 kg，或实测织物面积乘相符单位面积质量。记录单位、含水状态、批次及不确定性。不由通用密度或几何推断完整道路质量。 | cp_material | 每声明的参考流材料质量 |  |
| transport_activity | lorry_transport | 每票实际货物 kg 乘实际 km，累加唯一货票。1 吨 = 1000 kg。在链接承运数据集记录载货/空载处理，不重复计服务及自有车队燃料。 | cp_transport | 每声明的参考流 kg*km | fhwa-pavement-lca-2016 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_extent | finished_road | 核实完整验收范围、几何、车道/路径/停车功能、配置及实际验收条件。仅测量面积不证明道路性能等效。 | cp_delivery |
| dq_activity | all inventory rows | 覆盖实际施工日期、气象季节、设备年龄技术、材料供货路线和数量、返工损耗。缺失任务记录保持缺口并披露后果/不确定性。 | cp_material; cp_energy |
| dq_identity | all inventory rows | 每交换选一个物理明确流，核查来源/介质、路线、主属性和单位。未解决或不符身份保持空白，不杜撰；候选标识不授权替代材料。 | flow identities and material specifications |
| dq_balance | all inventory rows | 核对供应商生产运输与前景、材料水平衡、内部再用及废物去向；定量完整性并避免重复负担。不虚构默认强度、配合比、寿命、损耗或批准。 | cp_material; cp_water; cp_waste; allocation ledger |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| v_reference | 拒绝不完整/部分交付、缺失几何配置验收限定信息、工程数量不一致或仅质量/材料产出；finished_road 参考量、协议及清单须同基准。 | un-cpc3-constructions-2025; fhwa-pavement-lca-2016 |
| v_routes | 以声明周界及路线核对全部实建过程构件；具体数据集缺行时先解决再称完整。以实际记录校验层/体积/接收一致性、拒收工程、水路径和废物去向。 | fhwa-fp24-construction |
| v_identity | 核验 UUID 特定化学物理身份、地域、电压、介质子介质、化石生物来源和主属性单位。不混用 NO/NO2/N2O，不混淆水资源与废水，不用集合排放占位。 |  |
| v_completeness | 报告施工覆盖、链接上游完整性、未量化排放/噪声、施工区效应及排除后续阶段。施工噪声须有记录声学指标、方法和接收语境；不把 dB 当可加能量/质量，不杜撰基础流。计量一致性本身不构成科学批准或全寿命性能。 | fhwa-pavement-lca-2016 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一项已配置验收非高架道路实体的施工前景清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有明确几何及上游链接的场址特定初始施工模块；后续与独立后续阶段集成到经过审查的生命周期模型 |
| excluded_use | 无条件全寿命/比较主张；无等效判断的通用每公里/面积代理；仅制造产出；从候选内容推断方法批准或发表 |
| required_metadata | 全部参考限定信息；过程路线图；实测项目台账；供应商/背景边界；分配再用台账；施工期间；身份单位；验收状态 |
| required_quality_disclosure | 实测/估算数据区别；逐任务阶段不确定性和完整性；缺失流身份；噪声/施工区/土地利用缺口；上游覆盖和全部排除阶段 |
| update_trigger | 几何配置、路面路线、材料供应商、设备、水废物路径、验收修正或核验身份/方法证据变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-constructions-2025 | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, pp. 277–279. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 实体服务区分、设施范围及相邻类别排除，不是施工强度来源 |
| fhwa-pavement-lca-2016 | official_guidance | FHWA-HIF-16-014, Pavement Life-Cycle Assessment Framework, July 2016, pp. 2-4, 3-6–3-8, 4-14–4-15. https://rosap.ntl.bts.gov/view/dot/38470/dot_38470_DS1.pdf | 工程几何功能、生命周期阶段区分及逐任务设备物流用水记录。历史方法指引，不作现行法规；不采用示例率、默认寿命和强度值。 |
| fhwa-fp24-construction | standard | FHWA, Standard Specifications for Construction of Roads and Bridges on Federal Highway Projects, FP-24 (2024), Sections 204, 301, 401, 501 and 617; printed pp. 102–103, 236–237, 316–317, 429–430 and 716–717. https://highways.dot.gov/sites/fhwa.dot.gov/files/FP-24.pdf | 条件性土方、分层压实、沥青铺筑、混凝土接缝及护栏安装分解；仅在实际合同纳入时有约束力。不把美国公差、配比、设备组规模或通用合规批准施加到其他工程。 |
| epa-construction-dust-1995 | official_guidance | US EPA, AP-42 Section 13.2.3 Heavy Construction Operations, January 1995 (posted table corrections), pp. 13.2.3-1–13.2.3-2. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | 施工扬尘取决于活动气象，须逐操作评价。历史 TSP 因子局限用于拒绝无条件移用到 PM10；不采用数值因子。 |
