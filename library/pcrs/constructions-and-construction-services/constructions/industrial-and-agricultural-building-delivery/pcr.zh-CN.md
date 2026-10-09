---
pcr_id: pcr.constructions-and-construction-services.constructions.industrial-and-agricultural-building-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 工业与农业建筑交付

## 1. 范围与适用性

本PCR覆盖实际施工并验收的工业生产装配建筑实体（工厂、厂房、车间）以及含筒仓储存设施的农业建筑。参考产品是场址特定交付实体及其声明基础、框架壳体、适用工业地坪、围护、固定建筑服务。有真实工程证据的钢门架、钢筋或预制混凝土、砌体、木结构和农业储存路线均在范围内；钢制示例不重定义类别。

排除采矿、电站、化工相关及铸铁厂等专门制造设施（CPC 53261/53262/53269），排除类别外住宅商业建筑、单售上游建材、施工服务及生产机器。交付建筑内附属办公空间纳入并披露。独立机器、输送、粮食干燥通风工艺设备和工艺吊机设备不属于建筑产品，除非另有证据声明集成范围；真实建筑结构支撑仍纳入。前景边界为施工至交付，交付实体不代表全寿命性能。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.industrial-and-agricultural-building-delivery |
| classification_refs | CPC 3.0 53121 — 工业建筑 |
| covered_products | 有工程特定完整交付范围的验收工业生产装配建筑和农业建筑含储存筒仓 |
| excluded_products | CPC排除专门设施；建筑服务合同；建材包；生产设备；其他用途类别 |
| representative_product | 一栋明确测绘配置的验收工厂车间建筑或一栋农业建筑一座筒仓 |
| production_route | 实际场地准备基础承重安装或壳体装配围护固定服务调试交付；路线特定原子行 |
| market_state | 在声明场址完工并按规定施工装修状态签字交付，不假定生产运行期 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付满足记录工业农业功能的建筑围护结构及声明固定服务 |
| How much | 一完整验收实体；报告明确定义的实测总内部可用面积层数净高真实尺寸；筒仓声明可用储存体积容量及物料基准，不设默认堆密度 |
| How well | 竣工结构体系真实设计性能记录围护工业地坪要求及安装服务验收范围；不设通用设计荷载或合规批准 |
| How long or cycle | 一个有起止日期的真实施工至交付事件；运行寿命不属本参考，后续情景须来源支持 |
| reference_flow_link | reference_building |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完工工业或农业建筑 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | 件 |
| 必需限定信息 | 实体场址编号；工业农业功能排除；交付日期状态；完整安装范围；真实面积定义几何；净高；结构体系；地坪性能证据；适用筒仓实际物料容量基准；路线；上游门端；未计量排除阶段 |

件是公开Item(s)数量单位的显示别名，不是kg或m2。参考输出及全部清单协议分母均为同一声明完整实体。前景包必须包含限定信息；不能按假定平均值换成质量面积或年度服务，比较须真实功能尺寸性能范围匹配。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | 件 | 采用cp_acceptance核实一完整验收实体；所有记录保持同一声明参考流；不强加数值质量M。 |
| actual_geometry | reference product | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 按声明方法竣工尺寸测绘面积；筒仓可用体积m3独立保留；几何描述功能配置，不自动换算输出。 |
| energy_identity | lv_electricity; mv_electricity; diesel | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开净热值参考及能量组。电力kWh按3.6 MJ/kWh；柴油kg至MJ须实际低位热值，升至kg须声明状态实际密度；保留原始记录不确定性。 |
| transport_basis | road_freight |  `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | cp_transport保留实际载质量各段距离；有记录吨公里是同一实体输入服务分子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实记录场址状态及安装前明确供货或场址门端建材设备 |
| starting_condition_role | foreground_starting_point |
| product_classification_scope | 符合声明纳入排除的工业农业交付建筑实体 |
| recursive_input_rule | 复用同类别建筑壳体按真实接收状态门端记录一次；披露继承残余负担修缮，不递归重复全部施工清单 |
| upstream_dataset_requirement | 适配A1–A3材料构件制造及实际A4交付关联须单供并核对内含运输现场过程；关联缺失不能完整声称从摇篮至交付 |
| disclosure | 场地准备既有拆除；产品制造门端；施工阶段临时工程；实际运输固定服务调试；后续运行维护更新最终拆除处理与D阶段排除 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| construction_gate | dataset | 逐真实前景工程包采集至验收交付；清单聚焦施工，不自动完整从摇篮到门；上游产品自带制造负担，不复制制造至现场。 | rics-wlca-2024 |
| route_completeness | all inventory rows | 过程流示例有条件，不是通用工程量表；按真实设计补充每实际水泥骨料添加剂板接缝灌浆紧固卷材服务件废物原子流；不能因身份未解决删除工业农业路线。 | jrc-levels-boq-2021; un-cpc-3-53121 |
| environment_gate | utilities; waste | 区别供水资源取水降排水截留洗水处理排放及各实测物种；施工噪声振动土地未测物种须评估披露，不能杜撰必然交换；直接燃烧发电供给不得重复。 | epa-concrete-washout-2012; epa-construction-dust-2010 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| ground | 场地准备与土方 | required | 按交付设计的真实勘察清理开挖填筑排水；既有拆除另行披露 | foreground | 每声明的参考流 |
| concrete | 基础与结构混凝土及工业地坪 | conditional | 实际现浇基础地坪框架；量测浇筑钢筋整平养护泵送模板 | foreground | 每声明的参考流 |
| frame | 承重框架与砌体安装 | conditional | 真实钢预制木砌体路线，分别限定行；吊机升降平台临时支撑螺栓或焊接校正检验 | foreground | 每声明的参考流 |
| envelope | 屋面墙围护与工业洞口 | conditional | 真实有围护建筑：板保温屋面排水及交付门；敞开农业构筑须披露无围护 | foreground | 每声明的参考流 |
| silo | 农业储存筒仓装配 | conditional | 真实农业筒仓：基础接口壳体屋面锚固密封检修；钢制示例不普适混凝土筒仓 | foreground | 每声明的参考流 |
| services | 工业地坪饰面与固定建筑服务 | conditional | 仅实际交付固定照明配电排水通风消防；附属办公室纳入声明建筑，生产机器排除 | foreground | 每声明的参考流 |
| utilities | 现场设备运行与临时设施 | required | 全部作业实际施工公用工程实测释放；保留阶段设备 | foreground | 每声明的参考流 |
| waste | 施工废物收集与外送 | conditional | 实际废物按物质状态分离并记录真实去向；示例外原子交换须补充 | foreground | 每声明的参考流 |
| transport | 到货与外运废物运输 | conditional | 关联数据未含实际运输段；保留各门端方式 | foreground | 每声明的参考流 |
| handover | 检查调试与验收交付 | required | 有几何结构围护服务范围及签字验收的完整交付实体；保留测试交换 | reference_product | 每声明的参考流 |

### 过程：场地准备与土方 (`ground`)

#### 输入

##### 产品流

###### 地基垫层用碎石 (`subbase`)

使用时记录实际级配、含水率、交付和保留数量；不设通用层厚。

- 选定流： 地基垫层用碎石
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_ground采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_ground`
- 来源： `jrc-levels-boq-2021`

#### 输出

##### 废物流

###### 送出处置的未污染开挖矿质土 (`soil_export`)

仅在作为废物外运时纳入：区别天然和松散体积、污染和去向；回用土不是处置。

- 选定流： 送出处置的未污染开挖矿质土
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 从cp_ground采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_ground`
- 来源： `rics-wlca-2024`

### 过程：基础与结构混凝土及工业地坪 (`concrete`)

#### 输入

##### 产品流

###### 浇筑前交付的预拌混凝土 (`ready_mix`)

用于基础、地坪或框架外供混凝土：保留实际配合比标识、强度暴露规格、票据、泵送浇筑养护和退货；现场拌制须拆为水泥、每种骨料、水及添加剂，不能两路线重复。

- 选定流： 浇筑前交付的预拌混凝土
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 从cp_concrete采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_concrete`
- 来源： `jrc-levels-boq-2021`

###### 钢筋 (`rebar`)

仅用于匹配公开中文身份的实际非合金钢不规则卷材供货。记录供货门端卷材牌号形态称重收货；现场调直切断弯曲作为真实独立前景作业，保留损耗公用工程。直条、已切断弯曲条材、合金钢筋及预制钢筋笼须另核身份，英文泛称不扩大适用性。

- 选定流： 非合金钢条材，不规则卷材 `4f1a1837-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_concrete采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_concrete`
- 来源： `jrc-levels-boq-2021`

###### 胶合板模板 (`formwork`)

使用时记录实际板厚组成面积复用及cp_asset剩余服务；安装接触面积不是全部新板负担。

- 选定流： 胶合板模板
- 流属性/单位： 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- 数量规则： 从cp_concrete采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_concrete`
- 来源： `rics-wlca-2024`

#### 输出

### 过程：承重框架与砌体安装 (`frame`)

#### 输入

##### 产品流

###### 预制混凝土结构柱 (`precast`)

仅用于预制框架：声明实际内含钢筋连接范围及柱交付质量；吊装、灌浆和接缝属于现场过程。

- 选定流： 预制混凝土结构柱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_frame采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`
- 来源： `jrc-levels-boq-2021`

###### 加工成型的结构钢梁 (`steel_beam`)

仅用于钢框架构件：记录截面、牌号、涂层防火及供货门端；厂内切割焊接涂装属上游，除非实际在现场实施。

- 选定流： 加工成型的结构钢梁
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_frame采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`
- 来源： `bcsa-steel-buildings-2003`

###### 加工成型的结构钢柱 (`steel_column`)

仅用于实际钢柱；区分底板、锚栓及内含涂层避免重复；记录校正及连接检查。

- 选定流： 加工成型的结构钢柱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_frame采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`
- 来源： `bcsa-steel-buildings-2003`

###### 窑干针叶锯材 (`timber`)

仅用于采用该状态的木结构路线：记录树种、强度等级、含水率和处理；胶合或处理构件须独立身份。

- 选定流： 窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_frame采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`
- 来源： `jrc-levels-boq-2021`

###### 烧结砖 (`brick`)

仅用于实际烧结黏土砌体：记录砖型孔隙及安装证据；耐火或非烧结制品不适用。

- 选定流： 烧结砖 `aedc2027-2154-4b0e-95fd-9baeb46d4153`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_frame采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`
- 来源： `jrc-levels-boq-2021`

###### 水泥砂砌筑砂浆 (`mortar`)

外供砌筑时保留真实组成含水状态；现场混合时拆为组成物与混合公用工程，不假定砂比例。

- 选定流： 水泥砂砌筑砂浆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_frame采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`
- 来源： `jrc-levels-boq-2021`

###### 结构钢螺栓 (`steel_bolt`)

安装时记录牌号尺寸涂层及称重数量；供应范围不含螺母垫圈时须各自单列。

- 选定流： 结构钢螺栓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_frame采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`
- 来源： `bcsa-steel-buildings-2003`

###### 药芯焊丝 (`welding_wire`)

仅用于实际现场药芯电弧焊：记录焊丝型号组成、消耗质量剩余库存及焊接程序；不是普遍安装必需。

- 选定流： 药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_frame采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`
- 来源： `bcsa-steel-buildings-2003`

###### 氩气焊接保护气 (`argon`)

仅在有记录现场焊接实际供给纯氩时纳入；混合气与二氧化碳保护气另列；量测气瓶净质量或有依据状态换算。

- 选定流： 氩气焊接保护气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_frame采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`
- 来源： `bcsa-steel-buildings-2003`

#### 输出

### 过程：屋面墙围护与工业洞口 (`envelope`)

#### 输入

##### 产品流

###### 镀锌波纹铁板 (`sheet`)

仅用于公开厚度范围0.25–2.5毫米内实际安装的热镀锌波纹板；核验实测厚度涂层牌号及收货；夹芯板和筒仓专用板另列。

- 选定流： 镀锌波纹铁 `b302e292-860a-430a-9dc0-b95e89d4a63e`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_envelope采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_envelope`
- 来源： `bcsa-steel-buildings-2003`

###### 岩棉 (`rock_wool`)

仅用于单独供应安装岩棉：量测实际密度厚度覆面与设计规格；外购夹芯板内含保温不得重复。

- 选定流： 岩矿棉 `3a298360-f298-4a11-999e-11943f142cec`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_envelope采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_envelope`
- 来源： `jrc-levels-boq-2021`

###### 成品钢制工业卷帘门 (`industrial_door`)

仅在安装该门型时纳入：记录洞口尺寸、门体机构门框及附件范围；其他门型须另列。

- 选定流： 成品钢制工业卷帘门
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则： 从cp_envelope采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_envelope`
- 来源： `bcsa-steel-buildings-2003`

#### 输出

### 过程：农业储存筒仓装配 (`silo`)

#### 输入

##### 产品流

###### 镀锌钢粮食筒仓壁板 (`silo_wall`)

仅用于装配钢制农业储存筒仓：记录板几何厚度涂层、内含加强筋螺栓、实测质量和供货安装图；不是通用工业围护板。

- 选定流： 镀锌钢粮食筒仓壁板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_silo采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_silo`
- 来源： `sukup-grain-bins-2026`

###### 镀锌钢粮食筒仓屋面板 (`silo_roof`)

安装时保留实际屋面肋构造及孔口密封范围；供货未含支撑和检修平台须另列。

- 选定流： 镀锌钢粮食筒仓屋面板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_silo采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_silo`
- 来源： `sukup-grain-bins-2026`

###### 聚乙烯粮仓螺栓密封垫圈 (`silo_washer`)

仅在实际使用该制造商型密封垫圈时纳入；称重或用有记录零件质量和安装数量，不用通用聚乙烯树脂代替。

- 选定流： 聚乙烯粮仓螺栓密封垫圈
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_silo采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_silo`
- 来源： `sukup-grain-bins-2026`

###### 镀锌钢粮食筒仓壁加强筋 (`silo_stiffener`)

仅用于实际设计单供加强筋；记录截面涂层安装质量基础连接；不重复壁板供给内含加强筋。

- 选定流： 镀锌钢粮食筒仓壁加强筋
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_silo采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_silo`
- 来源： `sukup-grain-bins-2026`

###### 钢制粮食筒仓基础锚栓 (`silo_anchor`)

仅用于实际基础锚固；记录锚栓类型尺寸涂层称重数量锚固检查；不设通用风荷载埋深。

- 选定流： 钢制粮食筒仓基础锚栓
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_silo采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_silo`
- 来源： `sukup-grain-bins-2026`

#### 输出

### 过程：工业地坪饰面与固定建筑服务 (`services`)

#### 输入

##### 产品流

###### 双组分环氧工业地坪涂料 (`floor_epoxy`)

仅在铺设时纳入：记录实际配方树脂固化剂供给范围、覆盖、混合未用质量与固化；不推断VOC组成排放；分别采购时树脂固化剂单列。

- 选定流： 双组分环氧工业地坪涂料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_services采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_services`
- 来源： `jrc-levels-boq-2021`

###### 绝缘铜芯低压建筑电缆 (`cable`)

属于固定建筑服务时采集导体截面绝缘电压长度及实际产品质量；排除交付外生产机器布线。

- 选定流： 绝缘铜芯低压建筑电缆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_services采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_services`
- 来源： `jrc-levels-boq-2021`

###### 硬聚氯乙烯管 (`drain_pipe`)

仅用于有中国生产来源记录且匹配公开工厂门身份的实际硬聚氯乙烯管：记录尺寸质量及实际排水供水用途；未含管件另列。

- 选定流： UPVC管 `a343bef6-8d18-4594-b1aa-99bc47172684`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_services采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_services`
- 来源： `jrc-levels-boq-2021`

###### 完整LED建筑灯具 (`led`)

安装固定照明时声明灯具驱动安装件及实际测试配置；二极管模块或驱动单件不是完整灯具。

- 选定流： 完整LED建筑灯具
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则： 从cp_services采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_services`
- 来源： `jrc-levels-boq-2021`

###### 消防喷淋头 (`sprinkler`)

仅在交付消防设计含该喷头时纳入：记录类型等级数量测试；管道泵和测试水另列。

- 选定流： 消防喷淋头
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则： 从cp_services采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_services`
- 来源： `jrc-levels-boq-2021`

#### 输出

### 过程：现场设备运行与临时设施 (`utilities`)

#### 输入

##### 产品流

###### 电力 (`lv_electricity`)

仅用于匹配公开身份的中国用户端低于1千伏供电；分表归属开挖泵送吊装焊接围护临设和调试；其他地域电压须另核验行。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 从cp_utilities采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `rics-wlca-2024`

###### 电力 (`mv_electricity`)

仅用于中国用户端1–35千伏供电；记录实际计量点变压损耗且不与低压读数重叠。

- 选定流： 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 从cp_utilities采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `rics-wlca-2024`

###### 柴油 (`diesel`)

用于现场挖机压实机吊机或发电机实际蒸馏柴油：保留净热值属性，采集供油油箱核对及实测低位热值，升换算须密度；声明化石生物份额，燃烧与炼油供给分开。

- 选定流： 柴油 `fbd79004-188c-47a4-900b-96005d994690`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 从cp_utilities采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `rics-wlca-2024`

###### 供给施工场址的处理后自来水 (`mains_water`)

外购时计量养护清洗抑尘系统测试实际水量；供水属技术圈输入，不是自然资源直接取水。

- 选定流： 供给施工场址的处理后自来水
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 从cp_utilities采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_utilities`
- 来源： `rics-wlca-2024`

##### 基本流

###### 水，地下水 (`groundwater`)

仅用于实际地下水直接取水并记录水源日期体积；外购水或开挖抽排水无去向依据不能当资源消耗。

- 选定流： 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 从cp_environment采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_environment`
- 来源： `rics-wlca-2024`

###### 水，河流 (`riverwater`)

仅用于有明确水源的实际河流取水；不适用于湖水废水地下水。

- 选定流： 河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 从cp_environment采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_environment`
- 来源： `rics-wlca-2024`

#### 输出

##### 基本流

###### 二氧化碳（化石） (`fossil_co2`)

仅用于有现场燃烧记录的即时化石CO2至未指定空气排放；保留化石份额和实际燃料碳氧化依据，不重复发电背景燃烧。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_environment采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_environment`
- 来源： `rics-wlca-2024`

###### 一氧化氮 (`nitric_oxide`)

仅在至未指定空气NO有独立测量或设备燃料特定证据时纳入；无物种依据不得把以NO2计总NOx分给NO。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_environment采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_environment`
- 来源： `rics-wlca-2024`

###### 二氧化氮 (`nitrogen_dioxide`)

仅用于单独确认至未指定空气NO2；不是N2O氮亚硝酸盐，也不是假定总NOx份额。

- 选定流： 二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_environment采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_environment`
- 来源： `rics-wlca-2024`

###### 颗粒物（PM10） (`pm10`)

仅用于有证据土方搬运或燃烧的定量PM10至未指定空气释放；保留粒径定义避免分段重叠；不采用历史指南固定扬尘因子。

- 选定流： 颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_environment采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_environment`
- 来源： `epa-construction-dust-2010`

### 过程：施工废物收集与外送 (`waste`)

#### 输入

#### 输出

##### 废物流

###### 硬化混凝土施工边角料 (`concrete_waste`)

仅用于实际分离外运硬化混凝土；退回新拌料及混合拆除碎料状态去向不同。

- 选定流： 硬化混凝土施工边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_waste采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源： `rics-wlca-2024`

###### 送往回收的钢施工边角料 (`steel_waste`)

仅用于有现场切割记录的分离钢边角料；追踪涂层污染去向回收；复用完整构件仍为产品转移。

- 选定流： 送往回收的钢施工边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_waste采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源： `rics-wlca-2024`

###### 聚乙烯包装薄膜废物 (`film_waste`)

仅用于现场拆除的收货包装：量测实际聚合物特定数量及处置；不是原生薄膜供给。

- 选定流： 聚乙烯包装薄膜废物
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 从cp_waste采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源： `rics-wlca-2024`

###### 送出处理的收集混凝土溜槽洗水 (`washwater`)

混凝土设备清洗时采集截留液体体积固体化学组成及去向；分离固体另列；外送属废物，不是自动水排放。

- 选定流： 送出处理的收集混凝土溜槽洗水
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 从cp_waste采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_waste`
- 来源： `epa-concrete-washout-2012`

### 过程：到货与外运废物运输 (`transport`)

#### 输入

##### 产品流

###### 货车 (`road_freight`)

仅用于匹配该服务身份的实际通用公路货运：保留分段载荷质量距离和空返分配；到货与外运废物分阶段标记；避免重复供货数据内含运输。

- 选定流： 货车 `d55f1329-cd61-44c0-8000-9367d38d5634`
- 流属性/单位：  `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则： 从cp_transport采集实测归属交换总量；保留本行单位有记录路线，不设默认数值
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_transport`
- 来源： `rics-wlca-2024`

#### 输出

### 过程：检查调试与验收交付 (`handover`)

#### 输入

#### 输出

##### 产品流

###### 已完工工业或农业建筑 (`reference_building`)

1 件

- 选定流： 已完工工业或农业建筑
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则： 1 件
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：过程输出 (`process_output`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`
- 来源： `un-cpc-3-53121`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | all inventory rows | 首先按建筑阶段承包商分开直接归属记录。真实共享公用工程按实测因果活动时间或有依据物理驱动，保留分母覆盖项目不确定性；无物理依据时经济分配须明确审查。 | ghg-allocation-2011 |
| asset_conservation | utilities; concrete; frame | 设备制造脚手支撑周转模板仅按cp_asset有依据份额计入。全部项目期间复用累计制造负担份额不得超过一，保留剩余并核对预测服务；寿命累计服务未知须审查披露；不能每栋重置全部制造。 | rics-wlca-2024 |
| waste_no_credit | waste | 实际外送废物处理回收负担与验收建筑输出区分；不默认抵扣未来钢混凝土生产；复用回收替代须单独有依据路线一致边界无重复信用。 | rics-wlca-2024 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_ground | ground | 单项实际交换或参考验收 | foreground_records | 场址；开挖边界；地质污染；天然松散体积；级配含水率；称重票据；复用外送去向 | 测绘开挖实际几何称量进出；排水独立追踪并核对保留回用填料 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_concrete | concrete | 单项实际交换或参考验收 | foreground_records | 配方规格；批次到货票；实际浇筑体积；钢筋质量；泵功率；养护水；模板编号复用账；退料废物 | 核对实际到货退货安装几何配筋及供货量；量测浇筑整平养护公用工程，现场拌材分别采集 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_frame | frame | 单项实际交换或参考验收 | foreground_records | 构件编号；物质牌号；加工涂层门端；构件质量；螺栓；焊丝气体；吊装设备小时；连接校正检查；临时支撑 | 核对竣工构件清单交付称重安装状态；保留真实吊装装配连接记录，划清厂内现场 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_envelope | envelope | 单项实际交换或参考验收 | foreground_records | 板型涂层厚度；实测屋面墙洞口几何；交付安装质量；保温密度；排水门；退货废物 | 逐产品测绘核对实际构造；分清内含与单供保温紧固玻璃密封 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_silo | silo | 单项实际交换或参考验收 | foreground_records | 筒仓编号；储存物；直径高度；可用容量定义实际几何；基础接口；壳体屋面加强筋锚固；垫圈密封；检修；独立机械 | 核对制造商真实安装图竣工测绘称重零件壳体屋面连接锚固验收；不设通用堆密度容量换算 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_services | services | 单项实际交换或参考验收 | foreground_records | 固定服务件编号供给范围；电缆管长真实质量；地坪涂料配方；测试能水；调试；排除机器清单 | 逐交付固定服务追踪清单票据调试；分清产品身份实测测试消耗，识别全部补充原子流 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_utilities | utilities | 单项实际交换或参考验收 | foreground_records | 日期阶段设备；地域电压；表计；燃料油箱收退；柴油密度低位热值化石份额；发电输出燃烧范围 | 用经校准场址分包表计；核对库存小时真实设备日志；用实际低位热值换算燃料质量，实际密度换算液体，保留能量属性 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_environment | utilities | 单项实际交换或参考验收 | foreground_records | 排放物CAS；化石生物份额；实际设备燃料载荷；实测浓度流量时间或特定因子来源；介质子介质；取排水去向；粒径 | 仅以经校准测量或明确适配因子真实活动量量化有依据释放取水；保留物种不确定性；明确评估噪声振动土地排水，不用无关流替代 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_waste | waste | 单项实际交换或参考验收 | foreground_records | 物质身份状态；称重计量量；污染；分离；容器；去向；处理门端；固液分离；回收 | 核对废物转移单实际分离收据；混凝土洗水按截留液体及独立固体记录；直接排放须物种特定实测行 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_transport | transport | 单项实际交换或参考验收 | foreground_records | 货单；供收门端；实际载质量；各起终点距离；方式；装载率；空返共享分配 | 从称重货物有记录距离及明确分配求各段运输服务，避免重复产品或处理数据内含运输 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_acceptance | handover | 单项实际交换或参考验收 | foreground_records | 实体场址；工业农业功能；实测面积定义几何；可用净高；结构设计记录；适用筒仓容量物料定义；完整交付清单；检查验收签字 | 按竣工图签字交付检查一完整验收实体；核对真实尺寸功能要求固定系统排除生产机械；不设默认寿命产品质量 | 件；m2；m3 | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |
| cp_asset | utilities | 单项实际交换或参考验收 | foreground_records | 共享资产模板编号；制造边界；本次归属活动；累计实际服务或有依据预测；全部项目时段；分配份额剩余账 | 运行独立量测。仅按有依据寿命累计活动分母分配制造；保持跨项目时段分配账核对预测；分母未知须审查，不能逐项目重置全部负担 | 各行特定kg、m3、m2、MJ、件、t*km | 每次供货作业表计时段及最终交付 | 有起止日期的全部真实施工期及未计量时段 | 声明实体场址及全部可归属分包工程 | 每声明的参考流 | 原始图票校准签字检查质量体积核对不确定性来源 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| project_reconciliation | all inventory rows | 每声明参考流按各行单位保留实际归属总量；逐物理身份核对到货退货库存变化安装量外送废物；内部循环不是新外部输入；不设默认配方损耗每栋质量寿命。 | cp_ground; cp_concrete; cp_frame; cp_envelope; cp_silo; cp_services; cp_utilities; cp_waste; cp_acceptance | 每声明的参考流实际交换总量 | jrc-levels-boq-2021 |
| unit_preservation | diesel; lv_electricity; mv_electricity; road_freight | energy_identity及transport_basis仅用于输入分子单位且保持声明参考流；数据集保留实测密度低位热值实际运输段；几何是配置报告，不是未证输出换算。 | cp_utilities; cp_transport | 每声明的参考流MJ或t*km |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_entity | dataset | 验收范围功能真实几何结构工业地坪固定服务须一致；评估农业储存壳体容量要求；不存在或缺失工程包须明确，示例行不证明完整清单。 | cp_acceptance; cp_silo |
| measurement | all inventory rows | 原始读数票据分包记录覆盖全部项目真实状态；不确定性估计分别报告；缺测不变零。 | all collection protocols |
| identity | all inventory rows | 核验公开身份主属性单位组路线地域及正式双语名；质量体积能量区分；空身份保留精确行且阻止无依据关联。 | supplier/state records; identity evidence |
| environment | utilities; waste | 记录实际化石生物份额CAS介质子介质即时长期粒径；评估真实噪声土地降排水洗水排放去向；披露未测覆盖并按需增补特定实测交换。 | cp_environment; cp_waste |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset | 须符合官方排除的整体验收工业农业建筑筒仓，真实场址功能几何交付状态；拒绝建筑服务建材包或排除专门设施替代。 | un-cpc-3-53121 |
| validate_basis | all inventory rows | 参考表reference_building输出及每行协议分母须同一声明实体；核对分子属性单位物理适配及有依据实测换算；不造kg建筑质量假定容量关系。 |  |
| validate_complete | dataset | 核对全部实际材料过程临设公用工程废物释放含分包调试；身份数量阶段缺失是披露缺口不是零；缺上游后续阶段不得全摇篮到门全寿命声称。 | rics-wlca-2024 |
| validate_asset | utilities; concrete; frame | 跨全部项目期间核对共享设备模板制造份额累计最多一；未知服务分母审查并避免运行重复。 | ghg-allocation-2011 |
| validate_environment | utilities; waste | 须定量证据及适配CAS来源介质子介质；区别NO和NO2保留废物排放去向；投影检查不代表方法或法律批准。 | epa-concrete-washout-2012; epa-construction-dust-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明完整工业农业建筑施工至交付清单；适配上游关联情景；仅真实功能几何交付范围性能匹配时比较 |
| excluded_use | 全寿命默认年度工业运行工艺装置设备清单通用kg/m2建筑换算默认容量密度寿命或法律科学批准 |
| required_metadata | 全部参考限定施工日期真实路线工程包覆盖安装排除机械范围供应阶段门端实测几何容量基准分配属性单位证据 |
| required_quality_disclosure | 测量估计不确定性场址时间技术代表性缺失上游背景关联身份缺口未计量阶段环境覆盖后续阶段排除 |
| update_trigger | 功能结构几何储存基准固定服务交付范围场址供应路线实测清单证据身份改变 |

## 11. 数据源

| 来源标识 | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc-3-53121 | official_guidance | UN Statistics Division, CPC Version 3.0, subclass 53121 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/53121 | 仅支持类别纳入排除，不是施工配方。 |
| bcsa-steel-buildings-2003 | handbook | BCSA, Steel Buildings, publication 35/03 (2003), chapter 3, printed pp.37–41 / PDF pp.49–53. https://www.steelconstruction.info/images/0/03/BCSA_35-03.pdf | 仅历史英国钢建筑构成安装与尺寸解释；不采用默认速率荷载尺寸或当代规范合规，不普适工业建筑。 |
| sukup-grain-bins-2026 | handbook | Sukup Manufacturing Co., Grain Bins, L1132-042026Su ©2026, PDF pp.3 and 9. https://www.sukup.com/assets/brochures/Grain-Bins.pdf | 制造商特定钢农业筒仓连接密封基础接口；不设通用容量牌号设计荷载。 |
| jrc-levels-boq-2021 | official_guidance | European Commission JRC, Level(s) indicator 2.1 v1.1, January 2021, PDF/printed pp.16 and 23–24, Table 2. https://susproc.jrc.ec.europa.eu/product-bureau/sites/default/files/2021-01/UM3_Indicator_2.1_v1.1_34pp.pdf | 原框架用于办公住宅建筑；仅将竣工量核对方法适配真实工业农业工程，不移用类别覆盖材料配方；工业特殊构件须工程证据，不声称Level(s)合规。 |
| rics-wlca-2024 | standard | RICS, Whole life carbon assessment for the built environment, 2nd edition version 3 August 2024, section 5.1.4 printed pp.80–84 / PDF pp.88–92. https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | 施工阶段区分与工程特定证据；不采用默认因子，不声称完整WLCA合规。 |
| epa-construction-dust-2010 | official_guidance | US EPA AP-42 13.2.3 Heavy Construction Operations, January 1995 corrected February 2010, p.13.2.3-1. https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | 仅历史扬尘作业含水关系；不设普遍排放或固定因子。 |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice Concrete Washout, EPA-833-F-11-006 February 2012, PDF pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 区别截留洗水固体与环境释放；不是本地法律批准，不假定排放。 |
| ghg-allocation-2011 | official_guidance | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard 2011, chapter 9 printed p.63 / PDF p.65, Tables 9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅历史分配顺序；须真实因果驱动和完整共享资产负担账。 |
