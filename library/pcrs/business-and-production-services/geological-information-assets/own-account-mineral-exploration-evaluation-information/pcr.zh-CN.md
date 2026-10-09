---
pcr_id: pcr.business-and-production-services.geological-information-assets.own-account-mineral-exploration-evaluation-information
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 自营矿产勘探与评价信息

## 1. 范围与适用性

本 PCR 覆盖自营形成的可识别矿产勘探与评价信息资产，涉及固体矿产、石油及天然气，包括初次勘探及可区分的后续再评价。所有者可保留、出售或许可信息。参考对象是有关声明矿床或远景区及评价阶段的原创知识，不是通用咨询小时、发现的矿床或采矿许可证（un-cpc3-exploration）。纳入对该原件有贡献的全部实际调查路线，包括失败工作。

独立委托的地质咨询、地球物理或钻探服务不作为参考产品，但可作投入。排除常规采矿或生产钻探、商业开采与选矿、天然资源存量、许可或权利交易、通用研发原件、软件原件、通用数据库、品牌、广播及下载。集成在勘探资产中的地理证据和解释模型是组件；独立软件或数据资产保留独立清单。不要求原件发现经济储量。单件清单只有在范围及质量明确时才有意义；无关项目不可视为等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.geological-information-assets.own-account-mineral-exploration-evaluation-information |
| classification_refs | CPC 3.0 83413 |
| covered_products | 自营原创矿产勘探与评价信息及独立定义的再评价版本 |
| excluded_products | 仅服务交付；矿产存量；开采产出；权利；独立研发、软件或数据原件；复制件 |
| representative_product | 自营矿产勘探与评价信息包 |
| production_route | 项目定义 → 实际调查、采样与试验工作 → 分析 → 解释与评价 → 原件完成；声明条件性物理方法 |
| market_state | 完成的原件供自用或出售、许可；明确实际复用权和访问条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 形成有关声明远景区或项目矿产赋存及评价的原创信息 |
| How much | 一个声明版本及范围的完整原创信息包 |
| How well | 明确地理范围、矿种、方法、证据完整性、空间与深度覆盖、评价阶段、不确定性、完整性和实际复用限制；不暗示储量或合规认证 |
| How long or cycle | 一个实际形成或再评价周期，至有记录的完成节点；报告日期，不假设经济寿命 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 自营矿产勘探与评价信息包 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 原件及项目标识；版本及文件目录；自营所有权；远景区坐标及坐标系；范围、深度及矿种；固体矿产或油气路线；评价阶段；起止日期；实际方法及失败工作；样品与化验溯源及不确定性；验收；权利及复用条件；交付与存储截止点；供应方和设备分配；上游完整性 |

数据集须声明全部必需限定信息。item 对应公开单位 Item(s) 的一个单位，不是一张地图、一个钻孔、一吨矿产、一次下载、一项许可或一个用户。一包可含多个不可分割文件及实物样品；仅计一个原件产出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 采用 cp_original 记录恰好一个完整版本；item 为 Item(s)，系数为 1。不得编造物理质量或从收入、储量或字节推导产出数量。 |
| same_basis | all inventory rows | 原件包数量 | item | 每行及协议均采用每声明的参考流；各交换分子保留其物理单位。 |
| electricity_conversion | all electricity rows | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开参考属性。按 1 千瓦时 = 3.6 兆焦将实测电量转为兆焦。匹配电表边界；不得将存储或网络吉字节、处理器小时直接换成电量。 |
| physical_state | drilling_fluid, tap_water, diesel | 按具体身份声明的体积或质量 | 立方米或千克 | 保留主属性：钻井液为体积/立方米，自来水和柴油为质量/千克。体积转质量须有实际组成、温度及实测密度；不用通用密度。 |

质量 `93a60a56-a3c8-11da-a746-0800200b9a66` 对应质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`（千克）；体积 `93a60a56-a3c8-22da-a746-0800200c9a66` 对应体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`（立方米）；净热值对应能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`（兆焦）。这些属性用于交换，不表示信息的质量。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 确定项目立项或再评价起点、既有证据及实际所有权和供应状态 |
| starting_condition_role | 前景原件资产形成，不是资源开采 |
| product_classification_scope | 自营勘探与评价信息；声明地理及方法范围 |
| recursive_input_rule | 复用既有勘探原件作为独立投入，保留溯源及已分摊上游负荷。不得在新版本中递归重建或重复其原始形成负荷。 |
| upstream_dataset_requirement | 要求相容的公用工程、材料、设备及服务数据集，明确供应方、地域、年份、配置和边界。缺失层保留为已披露截断。 |
| disclosure | 完整项目路线、失败工作、自营与外购台账、历史投入、运输、设施、收尾、初始存储及移交和排除项。仅前景不等于完整从摇篮到大门。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_project | all processes | 纳入原件完成前可归属的规划、调查、分析、解释及记录，包括失败钻孔及无结论试验。实际运输、营地、供暖制冷及首次交付须分别计量物理交换，不采用工资或财务许可费。 | un-cpc3-exploration; un-sna2008-exploration |
| boundary_route | survey, drilling, analysis | 使用条件卡片前记录实际路线台账。仅在实施时纳入地质填图、地球化学或地球物理工作、航空或海洋调查、钻探及评价试验。每种实际燃料、试剂、样品容器、井材料、废物及有依据的释放须扩展独立卡片；必要路线证据缺失阻断完整性。 | un-sna2008-exploration; jorc2012-reporting |
| boundary_make_buy | all processes | 拆分自营操作与完整外购服务。供应方报告为技术投入，不是第二个勘探原件。不叠加其内含燃料、电力及设备；缺少供应方清单应标未知。自营实验室须有实际化验方法对应的物理清单。 | jorc2012-reporting |
| boundary_reuse | completion | 原件形成与后续复制、下载、许可管理、存储和网络运行、矿山开发使用分开。实测首次包装、存储及移交可在明确截止点下纳入；不假设寿命、数据中心或吉字节转能耗因子。 | un-cpc3-exploration |
| boundary_disturbance | infrastructure | 纳入可归属本项目的实际勘探扰动、恢复及剩余义务，明确面积、时长、前后土地状态、封孔及水处理。不自动将勘探钻台归为商业矿产开采用地。不假设矿山关闭负荷或通用土地、排放因子。 | un-sna2008-exploration |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| planning | 项目定义与既有证据评价 | required | 全部原件 | 前景形成或已分摊支持 | 每声明的参考流 |
| survey | 现场调查与采样 | conditional | 实际开展地质、地球化学、地球物理、航空或海洋调查 | 前景形成或已分摊支持 | 每声明的参考流 |
| drilling | 勘探钻探与试验工作 | conditional | 实际开展试验钻探、钻孔、探槽或评价试验 | 前景形成或已分摊支持 | 每声明的参考流 |
| analysis | 样品分析与质量控制 | conditional | 实际开展样品制备和分析测试 | 前景形成或已分摊支持 | 每声明的参考流 |
| evaluation | 解释与评价 | required | 全部原件；声明评价深度 | 前景形成或已分摊支持 | 每声明的参考流 |
| completion | 原创信息完成与首次移交 | required | 全部原件 | 前景形成或已分摊支持 | 每声明的参考流 |
| infrastructure | 设备制造分摊与勘探场地收尾 | conditional | 存在可归属的设备或受扰场地 | 前景形成或已分摊支持 | 每声明的参考流 |

条件卡片描述具体交换，不是通用钻探或化验配方。项目过程图须覆盖每种实际方法，包括油气地球物理调查及评价，不限于水基固体矿产示例。缺失路线卡片或供应方清单时不得声称数据集完整。原件合并清单消去内部样品与草稿转移；保留样品不属于市场共产品。

### 过程：项目定义与既有证据评价（`planning`）

#### 输入

##### 产品流

###### 交流电 （`planning_electricity`）

仅用于实际中国用户端低于 1 千伏的电网供电。计量本阶段可归属的项目用电；不同地域、电压或供应方须另核适用身份。排除已包含在完整外购服务中的电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 兆焦
- 数量规则：采用 cp_energy 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-sna2008-exploration`

### 过程：现场调查与采样（`survey`）

#### 输入

##### 产品流

###### 交流电 （`survey_electricity`）

仅用于实际中国用户端低于 1 千伏的电网供电。计量本阶段可归属的项目用电；不同地域、电压或供应方须另核适用身份。排除已包含在完整外购服务中的电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 兆焦
- 数量规则：采用 cp_energy 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-sna2008-exploration`

###### 矿产远景地球物理调查报告 （`survey_report`）

条件性外购报告，明确调查方法、范围、测线间距及分辨率。按一个供应方交付物记录，不采用未限定服务小时；保留其清单，避免前景重复计入车辆和电力。

- 选定流：矿产远景地球物理调查报告
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_services 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：`un-sna2008-exploration`

### 过程：勘探钻探与试验工作（`drilling`）

#### 输入

##### 产品流

###### 交流电 （`drilling_electricity`）

仅用于实际中国用户端低于 1 千伏的电网供电。计量本阶段可归属的项目用电；不同地域、电压或供应方须另核适用身份。排除已包含在完整外购服务中的电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 兆焦
- 数量规则：采用 cp_energy 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-sna2008-exploration`

###### 柴油 （`diesel`）

仅用于项目自营钻机、发电机或运输实际消耗的石油柴油；保留设备分记录及调查、钻探、收尾的归属。声明牌号及混合组成。生物燃料须独立身份及碳源分拆。完整外购钻探服务替代其内含投入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用 cp_material 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`un-sna2008-exploration`

###### 勘探试验钻探完工报告 （`drilling_service`）

仅用于外购试验钻探，明确孔号、深度、直径、工艺、回收率及完工状态。米数及小时保留为支持原始字段。供应方边界须明确动员、钻进、燃料、钻井液和收尾；不叠加重复的自营钻机清单。

- 选定流：勘探试验钻探完工报告
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_services 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：`un-sna2008-exploration`

###### 自来水 （`tap_water`）

仅用于钻探或样品切割实际使用的外供处理后自来水；不得替代河水取用、地下水或循环泥浆。公开主属性为质量；称重或用现场可追溯密度和计量体积换算，不假设泥浆密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用 cp_material 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`un-sna2008-exploration`

###### 水基钻井液 （`drilling_fluid`）

仅用于与声明配方和状态相符的外购水基钻井液。记录外部补充体积、库存和退回；内部循环不重复算消耗。现场配制则须分别记录实测水和每种实际添加剂。

- 选定流：水基钻井液 `d3d85653-d482-49b8-95cb-facfd757965f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / 立方米
- 数量规则：采用 cp_material 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`un-sna2008-exploration`

##### 基本流

###### 河水 （`river_abstraction`）

条件性直接取自确定流域河流的水，不是外购水；声明过程取水国家以采用国家特定表征，计量总取水，另记回流水地点及水质，区分取水与耗水。不得将循环量等同取水量。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / 立方米
- 数量规则：采用 cp_water 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`un-sna2008-exploration`

#### 输出

##### 废物流

###### 钻井岩屑 （`cuttings`）

仅用于水基钻探实际外运处理的岩屑；声明岩石组成、水分、泥浆污染和处理接收方。排除保留岩芯样品及油基岩屑。回填岩屑另记录去向。

- 选定流：钻井岩屑 `a813d7ec-7db6-4922-be7e-130d41033c6c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用 cp_waste 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`un-sna2008-exploration`

###### 废水基勘探钻井液 （`spent_fluid`）

仅在实际产生时记录固液分离后作为废物外运的独立废液；声明溶解组分、悬浮固体、危险组分及处理。它不是河水，也不是基本水排放。

- 选定流：废水基勘探钻井液
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / 立方米
- 数量规则：采用 cp_waste 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`un-sna2008-exploration`

##### 基本流

###### 二氧化碳（化石源） （`fossil_co2`）

仅用于已证明直接化石燃烧向未指定室外空气的即时排放。采用积分实测排放或基于实际燃料碳含量、氧化及残留碳的现场碳平衡，不设默认因子。不用于土地利用碳、长期、土壤、水体或供应方排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用 cp_emission 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`un-sna2008-exploration`

###### 二氧化氮 （`nitrogen_dioxide`）

仅用于实际燃烧向未指定室外空气即时排放且独立定量的分子态二氧化氮。保留物种、子介质及时间。一氧化氮、氧化亚氮及按二氧化氮当量表示的总氮氧化物不等于本交换；无测量或因子支持应标未知，不填零。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / 千克
- 数量规则：采用 cp_emission 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：`un-sna2008-exploration`

### 过程：样品分析与质量控制（`analysis`）

#### 输入

##### 产品流

###### 交流电 （`analysis_electricity`）

仅用于实际中国用户端低于 1 千伏的电网供电。计量本阶段可归属的项目用电；不同地域、电压或供应方须另核适用身份。排除已包含在完整外购服务中的电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 兆焦
- 数量规则：采用 cp_energy 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`jorc2012-reporting`

###### 矿产勘探样品化验报告 （`assay_report`）

一个外购报告对应确定样品批次及具名分析方法、待测物、检出限和质量控制。不得以地下水挥发性有机物检测代替。自营实验室须将服务替换为对应实际方法的制样、化验电力、试剂、坩埚和废物流。

- 选定流：矿产勘探样品化验报告
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_services 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：`jorc2012-reporting`

### 过程：解释与评价（`evaluation`）

#### 输入

##### 产品流

###### 交流电 （`evaluation_electricity`）

仅用于实际中国用户端低于 1 千伏的电网供电。计量本阶段可归属的项目用电；不同地域、电压或供应方须另核适用身份。排除已包含在完整外购服务中的电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 兆焦
- 数量规则：采用 cp_energy 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-sna2008-exploration`

### 过程：原创信息完成与首次移交（`completion`）

#### 输入

##### 产品流

###### 交流电 （`completion_electricity`）

仅用于实际中国用户端低于 1 千伏的电网供电。计量本阶段可归属的项目用电；不同地域、电压或供应方须另核适用身份。排除已包含在完整外购服务中的电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / 兆焦
- 数量规则：采用 cp_energy 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-sna2008-exploration`

#### 输出

##### 产品流

###### 自营矿产勘探与评价信息包 （`reference_product`）

一个完整版本的原件，覆盖声明项目、证据及评价范围，包含成功、失败及无结论的调查。支持文件是组件，不另算原件。

- 选定流：自营矿产勘探与评价信息包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：1 件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_original`
- 来源：`un-cpc3-exploration`

### 过程：设备制造分摊与勘探场地收尾（`infrastructure`）

#### 输入

##### 产品流

###### 地质评价工作站 （`workstation`）

按实际配置及项目使用量占实测总使用量的比例，条件性分摊工作站制造及寿命末端负荷。不得每个文件均分配一台全新工作站，或重复计入计算供应方清单已含硬件。

- 选定流：地质评价工作站
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_equipment 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equipment`
- 来源：`un-sna2008-exploration`

###### 矿产勘探钻机 （`drill_rig`）

按实际钻机配置、实测项目钻机小时及有记录的全寿命使用量，条件性分摊隐含清单；不假设整机质量或寿命。完整外购钻探不得重复计入钻机制造。

- 选定流：矿产勘探钻机
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_equipment 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_equipment`
- 来源：`un-sna2008-exploration`

###### 勘探钻孔封闭与场地恢复完工报告 （`closure_report`）

条件性实际外购勘探收尾，明确钻孔及钻台。供应方范围与清单分别明确封堵、恢复、燃料及废物；排除未来矿山关闭。自营收尾须以物理交换和实测土地变化替代。

- 选定流：勘探钻孔封闭与场地恢复完工报告
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则：采用 cp_services 的实际可归属交换量；按每声明的参考流合计可归属记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_services`
- 来源：`un-sna2008-exploration`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_project | all processes | 将可识别场址、钻孔、化验、计算及记录直接归属原件。先拆分无关矿业生产及其他原件。共享工作采用实测因果使用量和有记录的受益对象台账；披露残余，因果关系不确定时作敏感性分析。不按矿产价值、收入、许可价格或假定发现成功率分配。 | un-sna2008-exploration |
| allocation_original | reference_product | 原件只形成一次。新评价复用时携带有明确记录的既有资产清单份额；复制和许可不重新形成原件。对声明信息有贡献的失败或负面调查归入该包；放弃的独立项目保留自身负荷，不以零成功率转嫁未来采矿。 | un-cpc3-exploration; un-sna2008-exploration |
| allocation_equipment | infrastructure | 自有设备制造及寿命末端采用实际配置和可追溯全寿命使用量。共享设施及计算用电须计量或采用经过验证的现场作业分配，包含待机及辅助份额。不假设全部设备为新设备，也不仅凭作业时长推导电量。除非证明真实市场产品及一致分配，废物按废物处理。 | un-sna2008-exploration |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_original | completion | reference_product | acceptance record | 项目标识；版本；所有权；坐标及坐标系；矿种；方法；证据目录；验收；起止日期；限制 | 核对签署完成记录与内容清单、地理范围、证据溯源及限制；一个验收原件版本 | item | 完成时 | 含失败工作的完整实际形成周期 | 全部贡献场址及供应方 | 每声明的参考流 | 可追溯原件；校准；经核对的覆盖与分配；不确定性 |
| cp_energy | all processes | electricity | meter record | 电表标识；阶段；时间戳；电量；作业量；共享分配；辅助用能；地域；电压；供应方范围 | 使用经校准分表时段或经过验证的设施与作业台账；包括阶段辅助用电及声明截止点前初始存储交付；排除完整供应方内含用电 | kWh | 每阶段及计量时段 | 含失败工作的完整实际形成周期 | 全部贡献场址及供应方 | 每声明的参考流 | 可追溯原件；校准；经核对的覆盖与分配；不确定性 |
| cp_material | drilling | diesel; tap_water; drilling_fluid | physical inventory | 交换；牌号；组成；库存；供货；退回；消耗；温度；密度；设备；钻孔 | 核对经校准称重或体积计量与供货库存退回平衡；千克和立方米分开，以现场换算排除内部循环 | kg; m3 | 每次供货及钻探班次 | 含失败工作的完整实际形成周期 | 全部贡献场址及供应方 | 每声明的参考流 | 可追溯原件；校准；经核对的覆盖与分配；不确定性 |
| cp_services | survey; drilling; analysis; infrastructure | purchased report | supplier record | 供应方；报告标识；方法；范围、钻孔或样品；深度；检出限；质量控制；清单边界；内含公用工程；运输；收尾 | 将验收的具体交付与供应方原始清单关联；区分费用、报告数量和实测工作量；核验原件自营所有权 | item | 每次验收交付 | 含失败工作的完整实际形成周期 | 全部贡献场址及供应方 | 每声明的参考流 | 可追溯原件；校准；经核对的覆盖与分配；不确定性 |
| cp_waste | drilling | cuttings; spent_fluid | waste transfer record | 来源；岩石相；液体配方；湿质量；固体；水分；体积；污染物；去向；联单；保留样品 | 岩屑称重，分离废液计量；核对回收、保留及回填；每项废物及处理分开 | kg; m3 | 每次移交 | 含失败工作的完整实际形成周期 | 全部贡献场址及供应方 | 每声明的参考流 | 可追溯原件；校准；经核对的覆盖与分配；不确定性 |
| cp_emission | drilling | fossil_co2; nitrogen_dioxide | measured emission record | 排放源；物种；化石比例；时长；浓度；废气流量；校准；燃料碳；氧化；残留碳；介质；时间 | 按实际运行积分物种特定实测质量，或对化石二氧化碳采用有记录的现场碳平衡；保留方法不确定性及采用因子时的来源。氮氧化物当量不是分子态二氧化氮；其他实测物种独立记录 | kg | 每作业周期 | 含失败工作的完整实际形成周期 | 全部贡献场址及供应方 | 每声明的参考流 | 可追溯原件；校准；经核对的覆盖与分配；不确定性 |
| cp_water | drilling | river_abstraction | water meter record | 河流及流域；取水口；日期；体积；回流体积；接收环境；水质；循环 | 经校准取水计量及独立回流记录；明确流域及时间，不以废水替代资源取用 | m3 | 每班次 | 含失败工作的完整实际形成周期 | 全部贡献场址及供应方 | 每声明的参考流 | 可追溯原件；校准；经核对的覆盖与分配；不确定性 |
| cp_equipment | infrastructure | workstation; drill_rig | equipment utilisation record | 设备标识；配置；隐含数据集；项目使用量；实测全寿命总使用量；维修；退役；供应方排除项 | 将资产台账与项目及全寿命使用记录关联；分摊实际设备份额，不编造重量或寿命；披露不完整寿命记录及敏感性 | item | 项目及资产记录更新时 | 含失败工作的完整实际形成周期 | 全部贡献场址及供应方 | 每声明的参考流 | 可追溯原件；校准；经核对的覆盖与分配；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_aggregation | all inventory rows | 合计可归属这个原件且不重复的实测交换量，以每声明的参考流表示。共享实测份额先分配再合并；参考产出为 1 件。保留每种分子单位。 | cp_original; cp_energy; cp_material; cp_services; cp_waste; cp_emission; cp_water; cp_equipment | 每声明的参考流 | un-cpc3-exploration |
| energy_conversion | all electricity rows | 将已记录的可归属电量乘以 3.6，以同一接口的兆焦表示。不对原件数量另作换算。 | cp_energy | MJ |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | reference_product | 原件身份及版本、自营性质、地理深度矿种范围和验收须可核验。报告不可获得数据及不确定性。 | cp_original; un-cpc3-exploration |
| quality_geology | survey; drilling; analysis; evaluation | 固体矿产路线保留样品代表性及回收率、钻探方法、化验精度偏差、坐标、组合样及解释置信度；JORC 表 1 是有限范围报告指导，不是 LCA 批准。油气须有实际储层、地震、井评价证据及适用制度；不得称为 JORC 认证。 | cp_services; jorc2012-reporting |
| quality_inventory | all inventory rows | 不设默认燃料用量、组成、化验配方、寿命、排放因子、回流水或净产量。要求实际记录、缺失层披露及截断敏感性。历史证据仅定义概念，除非证明可代表当前项目。 | all collection protocols |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | 要求准确的单件产出链接及名称、声明版本及限定信息、溯源和所有权。披露候选未解决身份；它们不代表已核验产品供应方或方法学批准。 | un-cpc3-exploration |
| validate_scope | all processes | 将每项实际调查、钻孔、试验、失败分支、化验、运输、计算、交付及收尾与过程覆盖及自营外购台账核对。未知供应方或路线清单使生命周期完整性无结论。 | un-sna2008-exploration |
| validate_measurement | all inventory rows | 要求双语一致的每声明的参考流、完整协议、分子单位、能量及密度换算、共享份额及库存平衡。不以千克或货币归一化信息。 |  |
| validate_release | all elementary and waste rows | 每项基本流或废物交换均须有实际发生证据及物种或物理身份。直接环境排放须区分介质及子介质、即时或长期排放；碳排放还须区分化石或生物来源。河水取用保留河流及流域、取水日期和体积，并另记回流地点、体积及水质。技术系统内的废物移交保留组成及状态、数量、去向和移交记录。废液不是环境水。不悄然将未知排放置零，也不以总氮氧化物代替分子态二氧化氮。分别使用 `cp_emission`、`cp_water` 和 `cp_waste` 提供排放、取水和废物移交证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明范围的原创信息形成清单；在明确复用台账下作为后续评价或矿业研究的分摊投入 |
| excluded_use | 储量估值或认证；通用每吨采矿因子；服务小时基准；未作复用核算的逐复制下载负荷；存在未解决层时的完整生命周期声明 |
| required_metadata | 全部参考限定信息；地域及年份；实际路线；计量及供应方边界；库存和分配台账；单位；原始证据；供应方相容性 |
| required_quality_disclosure | 接受输入；已执行及跳过检查；完整性；发现；地质不确定性；失败工作；缺失身份或供应方；历史证据限制；截断敏感性 |
| update_trigger | 新版本、范围深度矿种或评价阶段；证据、路线、供应方、方法、权利或分配改变 |

## 11. 数据源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-exploration | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp.426–427, 83411–83413. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 自营信息边界及相邻服务；不提供 LCA 因子 |
| un-sna2008-exploration | official_guidance | System of National Accounts 2008, §§10.106–10.108, pp.206–207. https://unstats.un.org/unsd/nationalaccount/docs/SNA2008.pdf | 历史概念范围：调查、钻探、支持运输及再评价。货币资本估值不是物理分配或现行监管指令。不采用数量或寿命默认值。 |
| jorc2012-reporting | standard | JORC, Australasian Code for Reporting of Exploration Results, Mineral Resources and Ore Reserves, 2012 edition, Table 1 §§1–3, pp.26–29. https://www.jorc.org/docs/JORC_code_2012.pdf | 仅在适用报告制度内支持固体矿产采样、化验及报告质量；不规定油气要求或 LCA 配方因子。数据集声明实际报告标准。 |
