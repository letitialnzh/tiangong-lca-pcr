---
pcr_id: pcr.constructions-and-construction-services.constructions.specialized-manufacturing-facility-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 专用制造设施交付

## 1. 范围与适用性

本PCR覆盖交付的物理专用制造设施：化学品化合物药品设施、高炉焦炉铸铁厂及其他未另分类专用制造设施。每个具体记录声明真实制造功能场址配置及验收安装系统。独立方法需求在于普通工业建筑及厂门设备方法缺少的专用施工安装验收界面。`un-cpc-manufacturing-2025`定义分类背景，分类本身不是创建身份理由。

排除普通工业建筑53121、矿业工程53261、发电设施53262、独立污水净水厂53253、废物焚烧核材料加工设施53290、施工服务及运行制造产品产出。附属环保设备仅属于明确声明制造实体及其功能范围。基本前景涵盖真实施工至记录验收终点；供应制造运行生产后续维护重衬拆除分开。不主张默认寿命每设施质量或完整上游全寿命覆盖。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.specialized-manufacturing-facility-delivery |
| classification_refs | CPC 3.0 53269 |
| covered_products | 已验收专用化学药品高炉焦炉铸铁及其他适用制造设施 |
| excluded_products | 普通建筑；矿发电独立净水废物焚烧核材料设施；服务；运行产品 |
| representative_product | 一个有真实专用工艺公用系统登记的完整验收设施 |
| production_route | 真实土建结构、路线特定化学热工安装、公用连接测试交付 |
| market_state | 声明场址冷热验收状态的已安装物理实体；真实容量需证据限定 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明专用制造功能的已安装物理系统 |
| How much | 1件，一个有真实几何及容量产品时间基准的验收设施 |
| How well | 完整声明安装范围真实结构材料配置项目特定验收签认；无假定性能批准 |
| How long or cycle | 一次有记录施工验收周期；后续运行服务时间在参考外，需另有证据 |
| reference_flow_link | reference_facility |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收专用制造设施 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | 件 |
| 必需限定信息 | 场址国家；目标制造产品路线；真实尺寸结构；真实容量产品时间基准；起始资产；安装设备内含范围；材料状态；供应门端；施工期间；真实冷热测试验收终点；遗漏后续阶段边界 |

真实前景数据包必须声明必需限定信息。参考产品UUID在精确设施核实前留空；数量属性兼容或不同水泥厂路线不证明产品身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 参考量恰为1 item，即一个已验收物理专用制造设施。item为公开Item(s)单个计数单位，中文显示件。cp_acceptance记录同设施。所有清单行协议按每声明的参考流汇总。 |
| geometry_configuration | reference product | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_acceptance保留竣工占地高度基础管廊尺寸容器工作容积及真实容量产品时间基准。几何容量是限定，不假定数量面积质量换算。仅比较相同功能范围验收；不设寿命。 |
| volume_state | ready_mix; soil_disposal; water_supply; freshwater_abstraction; freshwater_discharge; washwater | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留真实体积状态：浇筑前新鲜混凝土、原状松方土、供水与受体排水。质量换算需同状态实测密度温度含水，并在cp_civil、cp_ground和cp_water保留原始换算记录；不设密度。 |
| diesel_mass | diesel | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留公开Mass/kg。升计量用真实批次密度；供应热值化石生物份额为独立证据，不作质量排放默认值。cp_utilities核对收存退耗。 |
| electricity_energy | electricity_lv; electricity_mv | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开Net calorific value能量组；1 kWh=3.6 MJ为单位换算，不假定燃料低位热值。cp_utilities记录真实地域用户电压供应组合计量；避免低中压发电机重叠。 |
| component_mass | liquid_pump; cooling_pump; induction_furnace; distribution_transformer; steel_form_panel; crane_manufacture_share | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准完整构件称重或同配置可追溯供应净称重BOM，排包装及重复嵌套。每设施构件kg输入不是杜撰设施质量。cp_install、cp_thermal和cp_assets保留内含范围。 |
| cable_length | low_voltage_cable | 长度 `838aaa23-0117-11db-92e3-0800200c9a66` | m | 保留公开Length/m。cp_install按规格实测收装退废长度。仅对应实测可追溯净kg/m支持质量换算；不重复内含导体绝缘。 |
| gas_primary_volume | oxygen; purge_nitrogen | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留各公开气体Volume/m3主属性。cp_gas_volume、cp_purge采真实同参考状态耗气体积，称重时保留原始净kg。气体压力温度纯度须匹配供应参考条件；净kg除以同状态有据kg/m3密度取得m3。未知密度状态保留审查，不假定标准体积或改写Mass属性。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 测量新建棕地场址，声明留存资产清理修复供应接收门端 |
| starting_condition_role | 记录施工起点，不隐含零负担土地设备 |
| product_classification_scope | CPC3.0 53269背景下物理专用制造设施及官方排除 |
| recursive_input_rule | 留存外购同类设施模块为识别上游资产，保留供应负担历史；不递归重建隐藏入新产出 |
| upstream_dataset_requirement | 分别链接匹配建材设备生产供应，或声明不可用界面截断；不默认完整上游 |
| disclosure | 场址路线系统基线；供应现场制作内含；真实运输测试；资产份额环境缺口；遗漏上游运行维护拆除 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_stage | dataset | 基本范围从记录场地状态及声明供应接收门端进场产品开始，涵盖可归属运输场地土建专用安装连接施工支持及至移交真实验收。供应生产另链接背景。施工交付前景不证明完整摇篮到厂门或全寿命覆盖。 | `un-cpc-manufacturing-2025` |
| boundary_route | chemical; thermal; utilities | 要求项目功能系统登记。化学药品核对真实容器转移分离围护洁净公用；铸造核对熔炼造型搬运抽风；高炉核对壳内衬装料鼓风冷却煤气；焦炉核对砌体加热炉门装料集气。技术按真实路线条件，不是普遍必需。其他专用路线也须证明实体功能闭合。真实必需但缺失的安装系统组分耗材残余释放均增补独立物理具体行及记录；未解决范围不声称完整数据集。 | `ifc-foundries-2007`; `jrc-iron-steel-2013`; `ontario-chemical-storage-2007`; `ifc-pharma-biotech-2007` |
| boundary_embedded | all inventory rows | 按真实施工包选择供应构件或现场制作边界。不把完整容器炉电缆及内含金属内衬控制重复。接收安装运输测试分开。同体积预拌现场拌制不重叠。纳入真实临时工程分包，或披露供应方不可用截断。 | `usace-concrete-1994` |
| boundary_acceptance | acceptance | 声明机械冷热验收终点及真实测试。试水吹扫烘干能耗试剂试料产品废物释放均列单独交换。不假定热验收不存在免费；可售试产品及正常生产用真实活动物料平衡拆分。冷检查不授予工艺产能监管批准。 |  |
| boundary_later | dataset | 移交后制造运行维护后续重衬更换最终拆除修复与基本交付分开。扩展研究需独立有依据寿命计划实物量拆除去向；无默认寿命回收抵扣。起始复用基础设备须披露既有负担修复。 | `ifc-construction-2007` |
| boundary_environment | site_plant; civil | 直接释放需治理后真实来源活动证据。区分供水淡水资源收集废液受体排水。评估真实土地转化占用污染土粉尘排水噪声。缺失真实污染土地行在识别量化前保留披露。未测不是零；废物转移不是基础释放。 | `ifc-construction-2007` |

## 6. 过程清单结构

独立设备耗材行卡是条件性前景采集候选，不证明每个设施都需要该技术。真实项目图纸供应规格及安装测试说明确定物理形态合金工况配置和是否发生。外部来源仅支持声明的物理记录背景；来源空栏依赖已声明真实前景协议，须项目核实。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| logistics | 进场运输与接收 | required | 每个真实运输方式需独立行 | 前景施工交付 | 每声明的参考流 |
| ground | 场地准备与地基工程 | required | 始终记录基线；仅实际实施时计物理工程 | 前景施工交付 | 每声明的参考流 |
| civil | 工艺基础、板与围护 | conditional | 新改混凝土基础地坪台座或液体围护 | 前景施工交付 | 每声明的参考流 |
| structure | 设备支承、管廊与钢结构安装 | conditional | 真实范围内钢支承或现场制作安装 | 前景施工交付 | 每声明的参考流 |
| chemical | 化学与药品工艺安装 | conditional | 真实适用化学药品或容器管道路线 | 前景施工交付 | 每声明的参考流 |
| thermal | 炉体、焦炉与铸造安装 | conditional | 真实高炉焦炉铸造或其他热工制造路线 | 前景施工交付 | 每声明的参考流 |
| utilities | 永久公用、冷却与环保系统 | required | 核对每个真实安装公用环保系统 | 前景施工交付 | 每声明的参考流 |
| site_plant | 施工设备、公用与真实释放 | required | 跨施工包活动带标签；无重复公用投入 | 前景施工交付 | 每声明的参考流 |
| acceptance | 测试、调试与移交 | required | 真实约定交付状态；冷热测试分别追溯 | 前景施工交付 | 每声明的参考流 |

### 过程：进场运输与接收（`logistics`）

#### 输入

##### 产品流

###### 进场设备和材料公路货运（`road_freight`）

仅实际公路路段：保留货物吨数、公里运距、车型装载及空返处理。厂门产品不含本段；其他运输方式需独立行。

- 选定流：进场设备和材料公路货运
- 流属性/单位：质量*距离 / t*km
- 数量规则：由cp_transport取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_transport`
- 来源：`ifc-construction-2007`

### 过程：场地准备与地基工程（`ground`）

#### 输入

##### 产品流

###### 碎石，16/32粒级（`subbase_16_32`）

仅基础底基层实际16/32碎石；记录粒级及质量状态。本UUID不规定必须使用此粒级；其他粒级另列原子行。

- 选定流：碎石，16/32粒级 `4f197bee-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_ground取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_ground`
- 来源：`usace-concrete-1994`

#### 输出

##### 废物流

###### 送处置的未污染开挖矿质土（`soil_disposal`）

仅分类和去向核实后的实际外运废土；区分实测原状松方。场内再用为内部转移；污染土另列行。

- 选定流：送处置的未污染开挖矿质土
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：由cp_ground取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_ground`
- 来源：`ifc-construction-2007`

### 过程：工艺基础、板与围护（`civil`）

#### 输入

##### 产品流

###### 浇筑前新鲜硅酸盐水泥预拌混凝土（`ready_mix`）

仅外购湿混凝土：保留真实配方强度暴露等级、票据体积退料及安装几何。现场浇筑养护仍为前景。同体积不再计拌制组分。

- 选定流：浇筑前新鲜硅酸盐水泥预拌混凝土
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：由cp_civil取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_civil`
- 来源：`usace-concrete-1994`

###### 水泥，普通硅酸盐水泥，42.5MPa（`cement_42_5`）

仅使用此真实强度等级水泥的现场拌制；核实配方供货批次。其他等级胶凝组分分别列行；不设默认配方。

- 选定流：水泥，普通硅酸盐水泥，42.5MPa `89fb85db-c8dc-426c-a4cd-52de2184a31b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_civil取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_civil`
- 来源：`usace-concrete-1994`

###### 混凝土拌制用水洗硅质砂（`washed_sand`）

仅现场拌制：计量砂质量粒级矿物组成及含水；保留实测含水修正，不重复外购混凝土内含砂。

- 选定流：混凝土拌制用水洗硅质砂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_civil取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_civil`
- 来源：`usace-concrete-1994`

###### 碎石，16/32粒级（`batch_gravel_16_32`）

仅现场拌制真实此粒级，保留含水和批次质量。用途与底基层分开；其他粒级另列行。

- 选定流：碎石，16/32粒级 `4f197bee-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_civil取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_civil`
- 来源：`usace-concrete-1994`

###### 钢筋，钢制建筑材料（`reinforcing_bar`）

仅C≤0.2%的真实厂端热轧低合金钢筋且在现场切弯前。核对证书收货安装质量及下脚料。其他合金形态另核身份。

- 选定流：钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_civil取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_civil`
- 来源：`usace-concrete-1994`

###### 设备底座用水泥基无收缩灌浆料（`anchor_grout`）

仅底座锚固实际灌浆；记录干态配制质量及独立拌水。需供应商胶凝添加剂配方；普通水泥不是成品灌浆料。

- 选定流：设备底座用水泥基无收缩灌浆料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_civil取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_civil`
- 来源：`usace-concrete-1994`

###### 可复用成品钢模板面板（`steel_form_panel`）

仅真实面板：保留同资产实测质量及有依据无量纲项目制造份额。所有项目期间复用累计份额不得超过一。作业清洗损失另计；累计服务活动未知时保留审查。

- 选定流：可复用成品钢模板面板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同资产可追溯净质量乘有依据的无量纲项目制造份额；保留cp_assets物理范围和累计台账
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`usace-concrete-1994`

#### 输出

##### 废物流

###### 硬化硅酸盐水泥混凝土施工碎块（`concrete_rubble`）

仅真实废弃硬化混凝土送记录接收方；分开新鲜退料污染残余。混合建筑垃圾处置不是此混凝土材料。

- 选定流：硬化硅酸盐水泥混凝土施工碎块
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_waste取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`ifc-construction-2007`

###### 送处理的硅酸盐水泥混凝土洗涤废液（`washwater`）

仅实际收集车辆工具洗液送处理；记录体积采样固体pH及接收方。技术圈废液不是水排放。分离固体另列行。

- 选定流：送处理的硅酸盐水泥混凝土洗涤废液
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：由cp_waste取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`ifc-construction-2007`

### 过程：设备支承、管廊与钢结构安装（`structure`）

#### 输入

##### 产品流

###### 热轧大型材（`rolled_section`）

仅真实铁或非合金钢热轧大型材，未超出公开热轧热拉挤压类别进一步加工，且在现场制作前供应。记录等级未进一步加工交付状态；合金型材成品钢梁另核身份。真实现场切焊吊装涂装另计。

- 选定流：热轧大型材 `cbeefeb8-2dfc-48f5-b643-f35aed0d52a1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_structure取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_structure`
- 来源：

###### 钢制设备基础锚栓（`anchor_bolt`）

实际锚栓须等级几何及可追溯实测单件质量。供应总成不含螺母垫圈时另列。类型未指定紧固件不证明锚固性能。

- 选定流：钢制设备基础锚栓
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_structure取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_structure`
- 来源：`usace-concrete-1994`

###### 药皮碳钢焊条（`welding_electrode`）

仅真实现场药皮焊条，保留规格耗用质量残头及焊接记录。焊丝气体及其他焊条配方另列。

- 选定流：药皮碳钢焊条
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_structure取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_structure`
- 来源：

###### 乙炔（`acetylene`）

仅真实用于切割的C2H2厂端供应产品；计消耗净量排除瓶皮，溶剂另平衡。氧为独立交换，不由乙炔推定。

- 选定流：乙炔 `0ee52d35-6fea-4c7a-8922-fe2164a5d84b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_structure取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_structure`
- 来源：

###### 氧气（`oxygen`）

仅现场切割实际分子O2，CAS7782-44-7，气态供应且匹配工厂混合生产接口。保留公开主属性Volume/m3；记录纯度供气计量压力温度、校准净气体体积及供应方参考状态相容性。原始净kg量须除以同纯度压力温度下有依据密度，保留原始kg密度，不用默认密度。运输交付另链接。原件受控类型为Product flow/CPC基本化学品；遗留基本流通用说明不授权把它当氧资源或排放。液氧混合焊气另核身份。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：由cp_gas_volume取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_gas_volume`
- 来源：

#### 输出

##### 废物流

###### 送回收的清洁碳钢现场制作下脚料（`steel_offcut`）

仅真实清洁下脚料，记录合金涂层质量回收界面。CN厂内废钢不单独证明本现场废物。无自动避免钢生产抵扣。

- 选定流：送回收的清洁碳钢现场制作下脚料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_waste取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste`
- 来源：`ifc-construction-2007`

### 过程：化学与药品工艺安装（`chemical`）

#### 输入

##### 产品流

###### 成品碳钢常压化学品储罐（`storage_tank`）

仅实际储罐：记录化学相容防腐工作容积壳体内衬完整性。基础围堰为独立现场施工。其他材质压力等级另列。

- 选定流：成品碳钢常压化学品储罐
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_install取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_install`
- 来源：`ontario-chemical-storage-2007`

###### 成品不锈钢搅拌压力反应器（`reactor`）

仅真实供应反应器，保留合金压力温度容积搅拌夹套仪表内含范围。不在无重叠拆分之前把内含制造再次拆为钢材。

- 选定流：成品不锈钢搅拌压力反应器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_install取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_install`
- 来源：`ifc-pharma-biotech-2007`

###### 成品不锈钢蒸馏塔（`distillation_column`）

仅真实蒸馏路线，保留壳内件保温内含范围合金高径服务规格。不要求每个化学药品设施都使用。

- 选定流：成品不锈钢蒸馏塔
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_install取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_install`
- 来源：`ifc-pharma-biotech-2007`

###### 泵（`liquid_pump`）

仅公开液体泵类别内真实厂端泵。记录类型接液材质工况电机完整性。用校准称重或可追溯同配置净质量保留Mass/kg，不杜撰每泵质量。

- 选定流：泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_install取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_install`
- 来源：`ifc-pharma-biotech-2007`

###### 钢管和空心型材（`welded_process_pipe`）

仅真实圆截面厂端焊接钢管，保留合金直径壁厚压力化学相容证据。现场组装前供应；不是方矩空心型材无缝管阀管件保温或已安装网络。每种实际追加产品各列行。

- 选定流：钢管和空心型材 `370d14a6-55f3-4fdd-90b2-84751125ff00`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_install取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_install`
- 来源：`ontario-chemical-storage-2007`

### 过程：炉体、焦炉与铸造安装（`thermal`）

#### 输入

##### 产品流

###### 钢板材（`furnace_plate`）

仅实际C0.1–0.2%厂端轧制且未进一步热处理的钢板。不对完整供应炉内含壳体重复计入。其他等级成品壳另核身份。

- 选定流：钢板材 `818105f5-d33e-4dd8-bbc0-fc1ad29d9173`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_thermal取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal`
- 来源：`jrc-iron-steel-2013`

###### 完整无芯感应熔炼炉（`induction_furnace`）

仅实际供应铸造感应炉，保留容量基准线圈电源倾动内衬内含范围。完整炉内含制造不再列壳线圈内衬重复；现场组装测试仍为前景。

- 选定流：完整无芯感应熔炼炉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_thermal取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal`
- 来源：`ifc-foundries-2007`

###### 焦炉砌筑用硅质耐火砖（`silica_brick`）

仅真实硅砖炭化室加热墙；保留成分几何收货安装切废质量及砌筑。历史BREF只支持物理配置，不给默认厚温消耗。

- 选定流：焦炉砌筑用硅质耐火砖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_thermal取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal`
- 来源：`jrc-iron-steel-2013`

###### 定型高铝耐火砖（`alumina_brick`）

仅真实定型烧结铝硅砖Al2O3>48%，供应烧成1350–1450°C匹配。上游身份限定不是现场运行温度。记录内衬分区及安装废弃质量；不是硅镁炭砖。

- 选定流：定型高铝耐火砖 `773fbca7-3575-483c-b38d-c017771979b3`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_thermal取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal`
- 来源：`jrc-iron-steel-2013`

###### 高炉炉缸用炭质耐火块（`carbon_block`）

仅真实炭块炉缸施工，保留等级孔隙尺寸安装质量。焦炭煤矸石砖铝炭材料不同。

- 选定流：高炉炉缸用炭质耐火块
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_thermal取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal`
- 来源：`jrc-iron-steel-2013`

###### 感应炉内衬用硅质干式捣打料（`silica_ramming`）

仅真实内衬配方，保留粒度粘结剂及供应商安装烘干要求。混凝土砂通用耐火混合不证明此配制产品。

- 选定流：感应炉内衬用硅质干式捣打料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_thermal取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal`
- 来源：`ifc-foundries-2007`

###### 成品钢制焦炉炉门总成（`coke_oven_door`）

仅真实炉门，保留密封耐火内含；安装调整为前景。焦炭煤气是运行产品，不是炉门总成。

- 选定流：成品钢制焦炉炉门总成
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_thermal取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal`
- 来源：`jrc-iron-steel-2013`

###### 完整砂型造型机（`sand_moulding_machine`）

仅真实砂型设备，保留工装控制内含。其他铸造路线不强制使用；永久机器制造计一次，不推定运行型砂为施工消耗。

- 选定流：完整砂型造型机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_thermal取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_thermal`
- 来源：`ifc-foundries-2007`

### 过程：永久公用、冷却与环保系统（`utilities`）

#### 输入

##### 产品流

###### 完整袋式过滤除尘器（`baghouse`）

仅真实永久袋式除尘，保留壳滤风机控制内含及管界面。炭阳极静电除尘器不是此系统。其他环保技术需独立核实行。

- 选定流：完整袋式过滤除尘器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_install取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_install`
- 来源：`ifc-foundries-2007`

###### 泵（`cooling_pump`）

仅永久冷却回路真实厂端液体泵，保留可追溯同配置完整净质量电机内含。移交后冷却水运行不在基本交付内。

- 选定流：泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_install取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_install`
- 来源：`jrc-iron-steel-2013`

###### 低压电缆（`low_voltage_cable`）

仅实际CN厂门低压电缆，GB/T12706.1-2020及供货规格匹配。记录导体金属绝缘护套芯截面内含。保留公开Length/m；敷设为前景。其他地域规格另核身份。

- 选定流：低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位：长度 `838aaa23-0117-11db-92e3-0800200c9a66` / m
- 数量规则：由cp_install取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_install`
- 来源：

###### 完整油浸式配电变压器（`distribution_transformer`）

仅真实公用变压器，保留可追溯完整质量真实电压kVA油内含。发电厂排除。不在无匹配配置时套400kVA风场产品。

- 选定流：完整油浸式配电变压器
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_install取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_install`
- 来源：

### 过程：施工设备、公用与真实释放（`site_plant`）

#### 输入

##### 产品流

###### 柴油（`diesel`）

仅带标签机械发电机真实耗用产品。公开Mass/kg且未特指牌号配方地域；记录真实供应牌号化石份额及升计量密度。燃料生产运输现场燃烧分开。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_utilities取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_utilities`
- 来源：`ifc-construction-2007`

###### 交流电（`electricity_lv`）

仅实际中国大陆CN电网平均用户端<1kV供电。保留Net calorific value及公开能量组；表计kWh以1 kWh=3.6 MJ换算。其他地域组合电压另核。发电机燃料不是此供电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：由cp_utilities取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_utilities`
- 来源：`ifc-construction-2007`

###### 交流电（`electricity_mv`）

仅实际中国大陆CN电网平均用户端1–35kV供电，独立计量无低压重复。保留Net calorific value能量组及真实变压损耗界面。不套废物焚烧发电组合。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：由cp_utilities取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_utilities`
- 来源：`ifc-construction-2007`

###### 供应施工现场的处理淡水（`water_supply`）

仅真实技术圈供水，按抑尘拌制养护测试带标签。记录供应处理地域交付门端。内部循环不是新供水。香港水处理厂门水不能代表未限定地域现场供水。

- 选定流：供应施工现场的处理淡水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：由cp_water取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water`
- 来源：`ifc-construction-2007`

###### 起重汽车（`crane_manufacture_share`）

仅实际完整已制造起重汽车（CPC49115），匹配公开工厂生产混合接口，实测底盘起重配置净kg乘有依据无量纲项目制造份额。其他移动起重机型、独立起重系统零件须另核原子行；不限制设施路线或遗漏其真实负担。所有项目期间复用累计制造份额最多一。燃料作业实际维护另计；寿命服务分母未知须审查，不每项目重置全部制造。

- 选定流：起重汽车 `3d73143c-e111-4f03-905c-82f7dcad0a1f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：同资产可追溯净质量乘有依据的无量纲项目制造份额；保留cp_assets物理范围和累计台账
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_assets`
- 来源：`ifc-construction-2007`

##### 基本流

###### 淡水（`freshwater_abstraction`）

仅真实自然直接淡水取用；记录水源流域取水国家支持国别短缺使用。可再生淡水资源不是未指定水海水供水废水。不得重复供水上游取水。

- 选定流：淡水 `5fdac403-9f2c-4a10-b8d6-5367cc9d2d9b`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：由cp_water取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water`
- 来源：`ifc-construction-2007`

#### 输出

##### 基本流

###### 二氧化碳（化石源）（`fossil_co2`）

仅有证据即时外部化石CO2，CAS124-38-9，air/unspecified。用实测或审查真实燃料碳化石份额氧化平衡。不由燃料存在设因子，不套生物源土壤长期。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_emissions取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emissions`
- 来源：`ifc-construction-2007`

###### 一氧化氮（`nitrogen_monoxide`）

仅有证据分子NO，CAS10102-43-9，即时air/unspecified；保留采样排气状态体积。NOx-as-NO2不量化分子NO；氮N2O身份不同。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_emissions取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emissions`
- 来源：`ifc-construction-2007`

###### 二氧化氮（`nitrogen_dioxide`）

仅有证据分子NO2，CAS10102-44-0，即时air/unspecified。NOx-as-NO2当量需组分或另一精确限定未解决交换，不按名字换算。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_emissions取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emissions`
- 来源：`ifc-construction-2007`

###### 颗粒物 (PM2.5)（`fine_particles`）

仅治理后真实外部PM2.5，即时air/unspecified，有粒径特定实测建模来源。职业浓度不是释放。不与PM10总量重叠。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_emissions取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emissions`
- 来源：`ifc-construction-2007`

###### 颗粒物 (PM2.5 - PM10)（`coarse_particles`）

仅独立支持>2.5–10微米外部粒级，即时air/unspecified。不是全部PM10煤烟废物沉积土。记录真实扬尘源含水治理粒级基准。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_emissions取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emissions`
- 来源：`ifc-construction-2007`

###### 颗粒物，粒径未特指（`unspecified_particles`）

仅有证据外部颗粒释放但无有效粒级拆分，air/unspecified。同源替代总量，不与重叠细粗粒级相加；保留不确定性。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由cp_emissions取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emissions`
- 来源：`ifc-construction-2007`

###### 水（`freshwater_discharge`）

仅真实CAS7732-18-5液态水直接入淡水，记录降水测试排水源及受体。不是供水资源蒸气污水系统海排。溶质固体需独立实测交换；水体积不证明清水零污染。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：由cp_water取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water`
- 来源：`ifc-construction-2007`

###### 向室外空气释放的施工声暴露（`noise_air`）

仅真实量化声暴露，保留时段计权频率仪器声压时间受体几何。dB为对数，不是可加质量或由发动机推定交换。声学属性LCIA链接在有支持前保持审查。

- 选定流：向室外空气释放的施工声暴露
- 流属性/单位：声暴露 / Pa2*s
- 数量规则：由cp_emissions取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_emissions`
- 来源：`ifc-construction-2007`

### 过程：测试、调试与移交（`acceptance`）

#### 输入

##### 产品流

###### 氮气（`purge_nitrogen`）

仅实际中国工厂接口工业气态N2，供应于调试吹扫检漏；保留纯度真实供气参考气态压力温度、供应方相容性、净耗体积及放残去向。保留公开主属性Volume/m3。称重时cp_purge仍保留净kg瓶皮库存退量，仅凭匹配压力温度同纯度气态有据密度换成m3；状态密度未知须审查。其他地域灌装补气液氮须独立核实原子身份；不推定吹扫或排放发生。

- 选定流：氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：由cp_purge取得实测可归属交换总量；保留声明物理状态单位路线；不设默认量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_purge`
- 来源：

#### 输出

##### 产品流

###### 已验收专用制造设施（`reference_facility`）

一个为声明制造功能及安装清单验收的完整场址特定物理设施。几何容量基准验收与第3节匹配；不杜撰质量寿命。局部工程不声称完整设施交付。

- 选定流：已验收专用制造设施
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 件
- 数值来源模式：固定值 (`fixed_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_acceptance`
- 来源：`un-cpc-manufacturing-2025`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all inventory rows | 优先按物理系统实测拆施工包。共享公用运输用真实计量载荷活动，分配总数核对原数。成本名义容量地坪面积不是不同专用系统默认动因。未知归属保留审查。 |  |
| allocation_assets | steel_form_panel; crane_manufacture_share | 同资产持久台账覆盖所有项目期间复用。项目制造份额无量纲，以实际归属服务对有依据总服务支持。累计份额≤1。总寿命活动既往归属未知须审查，不每项目重置全部制造。燃料真实维护损失另计，不重复租赁服务内含。 |  |
| allocation_trial | acceptance | 验收试产品与设施产出分开。尽可能按真实测试活动时间物料平衡拆分；残余共产品分配需审查物理依据采集量。废料外运为废物，除非记录产品状态接收功能另证。无自动替代抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

每个协议按每声明的参考流，以各行单位汇总真实可归属交换总量，保留原始记录及同一验收设施。详细换算资产份额关系仍保留于计量计算规则。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_transport | logistics | 运输路段 | 货物路线记录 | 货物构件；实测吨数；各段公里；承运载荷；空返；供应门端 | 核对票据真实路线承运数据；分开方式及内含运输负担 | t*km | 每次货物 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_ground | ground | 场地底基层 | 测量工程量记录 | 起始状态资产；场址多边形；前后标高；原状松方；集料粒级质量；土污染接收方 | 使用真实测量地磅开挖台账；核场内复用外运，无默认松胀粒级 | m3; kg | 每次活动测量 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_civil | civil | 混凝土钢筋灌浆 | 供货批次浇筑检验 | 配方强度暴露；湿混凝土m3；干组分kg；含水；安装尺寸；钢筋灌浆kg；退料；养护测试水；验收 | 核原始票据校准批次读数测量几何。保留项目基础模板锚件质量记录；历史USACE记录不规定当前合规配方 | m3; kg | 每次供货批次浇筑 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_structure | structure | 现场钢作 | 材料制作吊装台账 | 等级尺寸；收装kg；焊接规格；焊条气体kg；吊装时数；废料；涂料溶剂身份耗用 | 核材料证书真实制作表焊吊记录；每种真实涂料溶剂释放分别增补 | kg | 每构件活动 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_install | chemical; utilities | 永久设备管道 | 供货内含安装 | 标签类型合金；压力温度工况；容量几何；完整净kg；供应称重BOM；内含；电缆芯截面m；供应门端；连接测试 | 用真实供应称重或校准完整构件称重BOM及安装签认。逐标签核工艺仪表公用连接，不重复内含 | kg; m | 每交装标签 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_thermal | thermal | 炉体内衬施工 | 分区安装记录 | 路线尺寸；内衬区；配方等级；供装废kg；壳钢板；内含制造；砌捣烘干说明及实测能温历史 | 核真实供图分区安装。必要养护烧结烘干条件来自真实供应，不用历史BREF运行温度。试料释放另记录 | kg | 每分区安装烘干 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_utilities | site_plant | 现场燃料电力 | 表计燃料台账 | 资产施工包时间；kg或升密度；燃料牌号化石份额；kWh；地域用户电压供应组合；发电机输出；存退；损耗界面 | 读校准分包表；核收存退并标实际土作混凝土吊切烘干验收。发电机燃料与电网分开，电量不重复 | kg; MJ | 每计量区间领料 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_water | site_plant; civil; acceptance | 现场水排水 | 表计水质去向 | 供应水源流域国家；处理；各用途m3；循环；留存蒸发；降水；受体介质；废物直接路径；相关盐度溶质固体 | 按状态受体计真实外部供排。内部循环分开。证据平衡测试养护废物路径；直接排水不意味清水零污染。其他受体需精确身份 | m3 | 每区间测试排放 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_waste | ground; civil; structure; thermal; acceptance | 分流残余 | 转移称量分析 | 单成分状态；污染；kg/m3体积基准；接收回收处理；退存；采样 | 用真实分流废物票；核收装存退及每残余，无默认损耗。每真实包装耐火机械维护废物独立增补 | kg; m3 | 每转移 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_emissions | site_plant | 外部释放声学 | 测量或审查来源活动模型 | 标签活动；物种CAS；化石来源；即时长期；介质子介质；kg；排气体积状态；治理粒级；不确定性；声压时间频率计权受体 | 测真实外部释放或保留审查匹配源模型因子真实活动。保留缺测不确定性。分开分子NO/NO2无重叠粒级；浓度不是清单质量。声学属性方法仍审查 | kg; Pa2*s | 每来源时段测试 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_assets | civil; site_plant | 复用制造归属 | 持久全项目寿命台账 | 唯一资产配置；实测净kg；项目服务活动；有依据总服务寿命；无量纲份额；全部既往后续归属；维护损失；不确定性 | 核同资产净质量及跨项目期间复用累计制造份额。总服务既往归属未知审查；不每项目全部制造。作业活动租赁内含分开 | kg; dimensionless | 每归属复用 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_acceptance | acceptance | 设施交付测试 | 竣工登记验收签认 | 一设施号场址；目标产品路线；系统标签内含；真实尺寸；真实容量产品时间基准；起始资产日期；约定冷热终点；测试投入产出废物释放；遗漏 | 核竣工图工程测量及真实机电工艺验收签认。每测试返工缺测均记录。证书仅证自身范围，不默认运行寿命批准 | item | 每测试最终移交 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_purge | acceptance | 真实氮气调试吹扫 | 供应质量台账吹扫记录 | 测试标签时间；N2纯度；供应参考压力温度；供应方参考状态相容；校准收存退耗气体m3；称重时净氮kg满空瓶皮；有证据同状态气体密度kg/m3；放残去向 | 核实际校准供应库存退量，取得真实验收测试耗氮体积。称重仍保留净kg瓶皮；体积=净耗kg/记录匹配压力温度同纯度气体密度kg/m3。直接体积读数采用相同已记录气体参考状态；不设默认密度标准状态假定。状态密度未知须审查。设施产出计数仍在cp_acceptance；真实供应商项目说明确定吹扫是否发生 | m3 | 每供氮退气吹扫测试 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |
| cp_gas_volume | structure | 现场切割实际供氧 | 校准气体体积供应切割台账 | O2纯度CAS；供应工厂接口；真实压力温度相容参考状态；校准收存退耗m3；若称重则净kg瓶皮同状态有据密度kg/m3；真实切割施工包 | 在记录匹配压力温度下核供应库存退量取得真实耗气体积。若有称重则保留kg；m3=净kg/同纯度状态有据密度kg/m3。保留原始换算记录；状态密度供应参考相容未知须审查。不用名义瓶容标准密度默认值，不替代混合焊气液氧 | m3 | 每供应退量实际切割作业 | 全部真实施工验收期间 | 声明场址项目可追溯分包 | 每声明的参考流 | 原始记录校准核对不确定性；缺证仍为缺口 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_reconciliation | all inventory rows | 每声明的参考流按各行单位保留真实归属总量。按物理身份核收存安装退残余测试。缺数未知；内转不是新外部投入。无默认配方损耗每设施质量寿命。 | all collection protocols | 每声明的参考流真实总量 |  |
| unit_preservation | diesel; electricity_lv; electricity_mv; low_voltage_cable; road_freight | 仅以同状态证据采集参数转换分子单位；保留原始最终值。产出仍1件。电缆Length/m、电力Net calorific value/MJ、运输真实吨公里，不假定容量面积分母。 | cp_transport; cp_utilities; cp_install | 每声明的参考流兼容行量 |  |
| asset_attribution | steel_form_panel; crane_manufacture_share | 同资产可追溯净kg质量乘有依据无量纲项目制造份额。保留总服务证据及跨项目期间复用累计≤1。未知分母审查；为输入kg量，不是设施参考质量。 | cp_assets | 每声明的参考流资产归属kg |  |
| release_quantification | fossil_co2; nitrogen_monoxide; nitrogen_dioxide; fine_particles; coarse_particles; unspecified_particles; freshwater_discharge; noise_air | 采用真实释放受体。因子模型需审查匹配活动物质状态治理不确定性。浓度换算需同状态采样体积显式量纲证据。核对重叠粒级水路径。燃料材料存在不是排放量。 | cp_emissions; cp_water; cp_utilities | 有证据单一释放 | `ifc-construction-2007` |
| gas_volume_conversion | oxygen; purge_nitrogen | V=净耗气体kg/rho，rho为同气体纯度实际记录参考压力温度下有据kg/m3。保留原始实测净kg库存退量瓶皮、rho证据及最终V m3，或该同状态直接校准V。不杜撰密度、不强制无据换算；状态rho供应相容未知须审查。分母仍为一个验收设施，不是设施质量。 | cp_gas_volume; cp_purge | 每声明的参考流真实气体m3 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_entity | dataset | 一个可识别物理设施需真实功能路线几何容量基准安装范围移交状态。单基础炉货物普通建筑不是完整交付。 | cp_acceptance; un-cpc-manufacturing-2025 |
| route_closure | chemical; thermal; utilities | 图纸台账核对所有系统专用分包测试。初始行不证明完整BOM；增补真实缺失具体设备材料废物释放。记录遗漏，核对前无全覆盖声明。 | cp_install; cp_thermal; cp_acceptance |
| measurement | all inventory rows | 全施工验收覆盖原始记录校准分包归属不确定性。保留分子物理状态共分母。缺测审查不是零；不支持换算仍审查。 | all collection protocols |
| identity | all inventory rows | 公开主属性单位成分状态技术地域限制供应门端保持精确。身份不证明数量发生供应完整科学批准。空身份保留精确行。 | public original; supplier records; cp_install |
| environment | site_plant | 记录来源化石生物份额CAS物种即时长期介质子介质粒级。土地声覆盖明确；职业浓度捕集粉尘技术圈废液不是外部释放。 | cp_emissions; cp_water; cp_ground |
| asset_conservation | steel_form_panel; crane_manufacture_share | 跨所有项目复用保留有依据寿命总活动及累计制造份额台账。未知分母既往归属为审查缺口，不每项目重置。 | cp_assets |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset | 按官方排除核实专用制造功能；拒绝服务普通建筑矿发电独立净污水废物焚烧核材料加工产出替代。 | `un-cpc-manufacturing-2025` |
| validate_basis | all inventory rows | 参考对象reference_facility产出所有行协议分母须与1件和真实验收范围一致。真实几何容量，无杜撰质量面积寿命换算。构件kg电缆m能量为分子。 |  |
| validate_inventory | dataset | 核真实施工包构件内含测试分包。避免预拌现场拌制、炉内含重复。缺身份数量阶段验收明确登记，阻止对应完整声明。 | `usace-concrete-1994` |
| validate_assets | steel_form_panel; crane_manufacture_share | 核同配置净质量、有依据服务份额及所有项目期间复用累计≤1。未知寿命活动既往归属审查；租赁服务直接作业负担不重叠。 |  |
| validate_environment | site_plant; civil | 需真实释放匹配物质介质属性。NO不同于NO2/N2O；NOx-as-NO2非分子NO2。粒级无重叠；水资源供水排水废物不同。声身份及真实未测土地污染范围保留审查披露。 | `ifc-construction-2007` |
| validate_status | dataset | 投影可检查不授予发布科学方法批准法律合规。后续批准需独立审查及身份供应证据完整。不从交付前景推导全寿命结果。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset：场址特定专用设施施工验收交付 |
| downstream_use | 声明制造路线的独立施工阶段或基础设施投入；上游建材设备生产另链接 |
| allowed_use | 真实验收实体及功能范围物理可比设施；分别披露仅施工和已链接上游结果 |
| excluded_use | 无额外合格阶段证据时，排除通用面积基准、运行化学铸造生铁焦炭产出、施工服务、全寿命或法律环境批准 |
| required_metadata | 场址国家；目标产品路线；竣工尺寸；真实容量产品时间基准；系统安装内含清单；起始资产；施工测试日期；冷热验收；供应门端供应方；计数单位；全部增补排除 |
| required_quality_disclosure | 实测估算缺测行；未解决身份界面；上游覆盖；资产份额；测试产品边界；排放水声土地缺口；不确定性；移交后排除阶段 |
| update_trigger | 功能路线几何设备容量供应状态施工验收方法实测活动公开身份变化；比较扩展寿命前独立审查 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc-manufacturing-2025 | official_guidance | 联合国统计司CPC3.0解释，2025年6月30日，第277、281–282页；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅物理分类排除；无工程数量 |
| usace-concrete-1994 | official_guidance | USACE EM1110-2-2000《土木工程混凝土标准实践》，1994年2月1日，第7-6节/图7-1/9-1节，印刷7-6/7-8/9-1页，PDF68/70/80页；https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-2-2000.pdf | 仅历史准备浇筑质量记录；无当前批准默认配方消耗 |
| ifc-construction-2007 | official_guidance | 世界银行集团/IFC一般EHS指南第4节施工退役，2007年4月30日，印刷89–91页/PDF1–3页；https://www.ifc.org/content/dam/ifc/doc/2000/2007-general-ehs-guidelines-construction-and-decommissioning-en.pdf | 实际现场活动环境定性筛查；无默认排放因子当前合规声明 |
| ifc-foundries-2007 | official_guidance | IFC铸造EHS指南，2007年4月30日，附录A第16–18页；https://www.ifc.org/content/dam/ifc/doc/2000/2007-foundries-ehs-guidelines-en.pdf | 历史炉造型物理配置；不转用运行炉料容量排放 |
| jrc-iron-steel-2013 | official_guidance | 欧委会JRC钢铁生产BREF，2013 EUR25521 EN，DOI10.2791/97469；第5.1.2.2节211页/6.1.3节292页，PDF239/320页；https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | 仅历史焦炉硅砖高炉内衬冷却煤气配置；无默认施工设计运行因子 |
| ontario-chemical-storage-2007 | official_guidance | 安大略环境部化学品废物储存设施环境保护指南，2007年5月，第2节储罐管道/第3节二次围护；https://www.ontario.ca/page/guidelines-environmental-protection-measures-chemical-and-waste-storage-facilities | 仅历史定性材料基础围护相容；不采用数值要求当前法律批准 |
| ifc-pharma-biotech-2007 | official_guidance | IFC药品与生物技术制造EHS指南，2007年4月30日，第2–3页；https://www.ifc.org/content/dam/ifc/doc/2000/2007-pharma-biotech-ehs-guidelines-en.pdf | 仅历史反应分离蒸馏公用环保物理配置背景。真实合金搅拌压力状态安装初次调试需供应项目记录；不转用运行溶剂氮能耗排放量 |
