---
pcr_id: pcr.constructions-and-construction-services.construction-services.mechanical-soil-excavation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未污染土壤机械开挖服务

## 1. 范围与适用性

本PCR适用于承包方在已清场、可进入施工场址对已查明的未污染土壤实施机械开挖。包括挖掘、几何修整，以及仅在合同申报范围内的装载或场内转移。开挖几何验收且移出土壤交给申报堆场或车辆责任方时服务结束。排除岩石爆破、污染土修复、初始场地清理、填筑压实、基础施工、支护工程及交接后的场外土壤运输和处理。需要降水、支护或其他临时工程时，申报关联且单独量化的工作包，披露其归属并在全项目汇总中纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.mechanical-soil-excavation-services |
| classification_refs | cpc:3.0:54330 |
| covered_products | 申报场址交接门处的常规未污染土机械开挖服务 |
| excluded_products | 土壤商品；完整建造资产；岩石爆破；修复；清场；填筑；基础；交接后场外运输 |
| representative_product | 未污染土壤机械开挖服务 |
| production_route | 工作批/班次机械挖掘与修整、申报装载/场内转移、检查及交接 |
| market_state | 按原状开挖体积计量的已验收施工服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象 (`What`) | 未污染土壤机械开挖服务 |
| 数量 (`How much`) | 1 m3已验收原状开挖空腔 |
| 质量要求 (`How well`) | 申报几何/容差及土类；按项目规格签署验收 |
| 持续时间或周期 (`How long or cycle`) | 一次完成的开挖与交接事件；不含建筑寿命或重复开挖周期 |
| reference_flow_link | `accepted_excavation_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收机械土方开挖服务 |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 场址与期间；土类及污染表征；开挖深度及几何/容差；测量与验收方法；机械及燃料路线；装载/场内转移责任及距离；交接责任方；土壤再用/废物去向；降水/支护归属 |

前景数据包须保留限定信息；物理体积是本服务的活动计量，不表示松散开挖土具有相同体积。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `reference_volume` | reference product | 体积 | m3 | 采用验收原状体积；保留设计修订及测量边界，排除未授权超挖，每个验收空腔仅计一次。 |
| `soil_volume_state` | reusable_soil_handover; waste_soil_handover | 质量 | kg | 区分原状、松散及压实状态；质量/体积或含水换算须使用实测且相容的密度、含水率与状态，不假定通用膨胀系数；见`fhwa-earthwork-representation-2025`。 |
| `emission_basis` | engine_species_air; soil_dust_pm25_air; soil_dust_coarse_air | 质量 | kg | 保留化学物种、NOx报告基准及空气动力学粒径；包含细粒的PM10与PM2.5不得同时作为可加总量。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已测量、清场、可进入且原生土污染状况已查明无污染、设计已批准的场址 |
| starting_condition_role | 初始工地状态，不是购入原生土投入，也不表示全项目零负荷 |
| product_classification_scope | CPC54330内较窄的机械土开挖服务，不覆盖全部土方服务 |
| recursive_input_rule | 同类分包服务作为披露边界的上游服务投入；按实际责任划分，避免重复开挖输出及运行负荷 |
| upstream_dataset_requirement | 关联具有技术、地域、期间及边界相容性的燃料、电力、水、机械使用及进退场供应数据集；母项目另行关联清场、支护及下游土壤去向 |
| disclosure | 申报每个排除工作包的责任方、初始土壤/状态、实际接收方及土壤去向；缺失记录保留为缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_service` | excavate | 采集挖掘、修整、怠速/返工能源及申报装载/场内移动，直至验收与材料交接；移除责任独立于后续填筑、处理及基础生产。 | `fhwa-fp24-original-position` |
| `boundary_material` | excavate | 原生土属于来源条件；建立再用土、废物、留存库存及土尘的实物流转台账；不得构造任意购入土投入，也不得将材料交接等同于服务参考。 |  |
| `boundary_shared` | excavate | 纳入归属机械使用、进退场及共享支持；对共享挖掘机、装载机、运输机械、供水及进退场行程，列出本节点及全部其他使用工作包/节点和服务期间；每事件保留一个归属方。 |  |
| `boundary_emissions` | excavate | 纳入交接前实际直接尾气及分作业土尘；径流及维护废物须有实际组成与去向，不得因未测量而认定无排放。 | `epa-ap42-construction-dust`; `epa-nonroad-exhaust` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：不含运行能源的开挖机械使用 (`plant_use`)

过程／待建立交换的方向／类型：`excavate` / `inputs` / `product`.

记录挖掘机、装载机及场内运输机械的台时；关联的上游机械使用数据集须披露机械制造及维护覆盖，并排除单独采集的运行能源。

- 采集对象：不含运行能源的开挖机械使用
- 流属性/单位：时间 / h
- 数量规则：按资产采集生产、怠速及返工台时；保留全部应归属台时。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_plant`
- 尚待核实的可选筛查提示：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0.001
  - 上限：2
  - 单位：h
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 采集要求：开挖机械进退场运输 (`plant_mobilization`)

过程／待建立交换的方向／类型：`excavate` / `inputs` / `product`.

机械自身的运输服务，包括申报承担的返程及空驶责任；移出土壤的场外运输是另一项服务，在交接门之后排除。

- 采集对象：开挖机械进退场运输
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931`; kg*km单位 `3620148f-c5db-48ce-9065-a10092089aca` / t*km
- 数量规则：采集运输机械质量及载货距离；供应商计入的空驶仅归属一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mobilization`
- 尚待核实的可选筛查提示：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：t*km
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 采集要求：实际维护废物及收集污水 (`maintenance_and_runoff_waste`)

过程／待建立交换的方向／类型：`excavate` / `outputs` / `waste`.

按实际发生情况分别建立废润滑油、过滤器、污染吸附物或本服务包产生的收集含泥水的具体交换；各自记录组成及处理去向，不隐含通用废物流UUID。

- 采集对象：实际维护废物及收集污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：分别计量各项实际废物，并确认上游机械使用服务是否已承担处理。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 尚待核实的可选筛查提示：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 采集要求：排入空气的实际发动机污染物种 (`engine_species_air`)

过程／待建立交换的方向／类型：`excavate` / `outputs` / `elementary`.

条件性总括卡：将报告的一氧化碳、一氧化氮、二氧化氮或二氧化硫等物质分别解析为向室外空气的排放。报告为NOx按NO2当量时保留其基准，不虚构NO/NO2拆分；缺少物种构成属于数据缺口。尾气颗粒物须保留实际粒径组分，并与土尘区分。

- 采集对象：排入空气的实际发动机污染物种
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：对每个实际物种或报告基准，使用发动机类别、年限、负荷、控制装置及运行时间记录，按适用且有文件依据的排放方法计算。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-nonroad-exhaust`
- 尚待核实的可选筛查提示：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `excavate` | 机械土开挖与验收 | required | 每个纳入开挖工作批 | 独立移除服务，包括申报内部移动及返工回路 | `accepted_excavation_service` |

生产模式为按场址、几何及班次索引的离散工作批，不是连续商品工厂。几何/标高不合格在excavate内纠正；额外挖掘、怠速及重复倒运保留为验收批负荷。未授权超挖不进入验收体积。不符合预期再用要求的土壤在相同转移编号下由reusable_soil_handover改记waste_soil_handover。清洗维护事件及共享作业转移保留资产、班次与归属关联。

### 过程：机械土开挖与验收（`excavate`）

#### 输入

##### 产品流

###### 开挖机械用柴油（`excavation_diesel`）

仅当使用化石柴油动力设备时发生：交付挖掘机及申报范围内装载、场内转移机械的化石柴油；生物柴油混合物须单列并保留组成。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采集发油量，扣除退油及油箱库存增加量；按机械作业记录归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 动力设备电力（`excavation_electricity`）

仅在本服务包使用电动挖掘机、泵或其他设备时发生；区分电网与发电机供电，发电燃料及直接尾气只能有一个归属方。

- 选定流：动力设备电力
- 流属性/单位：能量 / kWh
- 数量规则：计量实际归属电量，排除已计入购入服务的电量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 抑尘供水（`dust_water`）

仅计向开挖及申报场内移动区域施用的外供抑尘水；直接取水须另设实际基本资源流，不得虚构水源。

- 选定流：抑尘供水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：计量交付量或罐体积并扣除未使用退回量；区分蒸发、土壤滞留与收集径流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`fhwa-fp24-dust-water`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.5
  - 单位：m3
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收机械土方开挖服务（`accepted_excavation_service`）

完成测量确定的设计开挖几何形状，并将移出土壤交给申报下一责任方的施工服务；输出是针对1 m3原状土完成的服务，而不是出售1 m3土壤。

验收批总量除以同一验收批总量得到服务归一化恒等结果1；1 m3是申报约定，不是观察到的批次大小。

- 选定流：已验收机械土方开挖服务
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：1 m3
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`fhwa-fp24-original-position`
- 数量范围：精确申报服务归一化
  - 范围角色：`allowed_range`
  - 下限：1
  - 上限：1
  - 单位：m3
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`calculated_from_collection`

###### 确认再利用的未污染开挖土（`reusable_soil_handover`）

具有接收方、规格及再利用去向记录时，按松散土实际交接；它是区别于收费开挖服务的材料核算输出，同一土壤不得同时计为废物。

- 选定流：确认再利用的未污染开挖土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：称量移交再用土；保留含水基准，并与开挖量、库存及其他去向核对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_soil`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 作为废物交接的开挖土（`waste_soil_handover`）

仅计依法交给废物责任方的未污染多余或不适用土；施工中发现污染须重新审查范围，不得默默纳入本PCR。

- 选定流：作为废物交接的开挖土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：称量废物交接并记录类别、转移编号及去向，不预设固定废土比例。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_soil`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 现场燃烧排入空气的化石二氧化碳（`fossil_co2_air`）

仅计开挖责任范围内耗油设备直接向室外空气排放的化石二氧化碳；使用混合燃料时须单列生物源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由归属化石燃料消耗量和有文件依据的燃料碳/氧化方法或适用发动机排放模型计算；保留因子单位及来源。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-nonroad-exhaust`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 排入空气的粒径不大于2.5微米土尘（`soil_dust_pm25_air`）

仅计挖掘、倒运及申报场内行驶过程中向室外空气释放的空气动力学粒径不大于2.5微米矿物土尘，排除发动机尾气和交接后的活动。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用实测排放或适用分作业扬尘模型，采集实际含水率、粉土含量、作业量、风及控制记录；不得在无粒径比例依据时将TSP转为PM2.5。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-ap42-construction-dust`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 排入空气的粒径大于2.5且不大于10微米土尘（`soil_dust_coarse_air`）

仅计向室外空气排放的粗粒矿物扬尘，与细粒组分互斥。方法报告包含细粒的PM10时，须有配对且有依据的细粒估计才能相减；否则保留报告基准并避免重复计数。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按与细土尘相同的活动边界及控制假设采集或模拟实际粗粒组分。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-ap42-construction-dust`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

暂定范围是宽泛作者筛选辅助，不是实测值，也不是允许默认填零。条件性行按实际记录判定发生与否，未知不是零。超过暂定范围须调查及审查证据，不得删去真实结果。总括卡范围逐项用于具体交换，不是通用可加总量。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | excavate | 优先按工作包与实测活动细分；无法分表的共享燃料、水或机械期间，按有记录的物理台时/负荷或交付水量分配事件，列出全部使用方并保证份额和为一；合同金额不是默认物理驱动。 |  |
| `allocation_mobilization` | plant_mobilization; plant_use | 按有记录服务期间台时，将各机械行程及共享支持期间仅一次分配至实际使用节点及任务；供应商机械数据集含燃料、运输或维护时，关联前须与单独卡核对。 |  |
| `allocation_rework` | excavate | 几何不合格纠正、重复搬运及怠速负荷保留在验收工作批；不得将不合格作业遍数另计为验收服务。单独授权设计变更须记录其新验收边界。 |  |
| `allocation_soil` | reusable_soil_handover; waste_soil_handover | 本较窄服务包的采购目的是开挖服务；移出土壤是伴随实物交接，不自动成为获抵扣共产品。开挖负荷保留于服务，不给予替代填料/处置抵扣。有证据证明独立销售土壤共产品时，使用前须专门审查并披露替代分配，不得默默转移负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `excavate` | 验收服务 | 测量与验收文件 | 工作包编号；批次编号；原始及完工测量；设计边界；验收体积；排除量；日期；批准人 | 测量开挖前后表面或采用可追溯断面；核对批准几何与签署验收，排除未授权超挖及重复作业。 | m3 | 每验收批 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 测量控制；设计修订；签署验收 |
| `cp_energy` | `excavate` | 燃料与电力 | 燃料与电表台账 | 资产；燃料类型；表读数；发料；退料；库存；运行/怠速/返工时间；全部消耗工作包；期间 | 采用校准仪表和交付库存核对；按实测活动分割共享设备期间，并明确发电机归属。 | kg; kWh | 每班及每次交付 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 仪表校准；发票；资产时间核对 |
| `cp_plant` | `excavate` | 机械使用 | 资产台时登记 | 资产；型号；班次；生产/怠速/返工台时；全部使用方；共享维护覆盖；上游数据集 | 按工作包及期间记录每台机械，核对可用台时及供应商覆盖；识别其他场址使用方。 | h | 每班 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 资产日志；供应商边界；分配台账 |
| `cp_mobilization` | `excavate` | 机械运输 | 调度与质量记录 | 行程编号；机械质量；距离；重载/空载段；全部使用方；归属期间；供应商边界 | 核对调度、路线及质量记录；按服务期间有记录的机械台时将同一行程分配给实际使用方。 | t*km | 每行程 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 调度证据；路线轨迹；使用方台账 |
| `cp_water` | `excavate` | 抑尘 | 供水与施用日志 | 水源；计量/罐体积；退回；区域；班次；施用；径流收集；其他使用方 | 计量实际外供水量，仅归属开挖相关施用；记录天气及水进入土壤、空气或收集废物的去向。 | m3 | 每交付及班次 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 仪表检查；交付单；施用日志 |
| `cp_soil` | `excavate` | 土壤交接 | 土方流转台账 | 批次；转移编号；测量原状体积；松散体积；湿质量；含水率；密度；再用/废物状态；接收方；去向；期初期末库存 | 称量交接，体积换算时记录含水率及密度；核对全部去向及留存库存；每次转移只分类一次。 | kg; m3 | 每转移及批次结算 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 地磅校准；接收凭证；密度/含水率试验 |
| `cp_waste` | `excavate` | 维护废物及收集径流 | 废物登记 | 事件编号；资产；实际物质；组成；质量；含水率；产生班次；责任方；处理；上游归属 | 称量或使用可追溯废物转移记录；拆分每种不同废物并排除已归属上游服务的数量。 | kg | 每事件 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 废物单据；组成；归属核对 |
| `cp_emissions` | `excavate` | 直接排放 | 活动与因子文件 | 资产/活动；燃料；负荷；时间；发动机类别；污染物/物种；因子数值/单位/来源；受纳空气；土壤含水率/粉土；气象；控制；不确定性 | 将测量或适用模型关联至相同班次及工作包；保留物种与粒径基准，记录全部单位及适用限制。 | kg; method-specific activity units | 每班及模型条件变化时 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 方法适用性；因子来源；测量质量；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | 将各归属批次总量除以相同验收原状体积，以每参考流表示；保留原始单位及验收体积记录。 | attributable lot amount; accepted volume; cp_acceptance | exchange per reference flow |  |
| `soil_reconcile` | reusable_soil_handover; waste_soil_handover | 用全部交接、留存库存变化及损失的干质量当量核对移出干土；记录密度/含水率及不确定性，不强制松散体积等于原状体积。 | cp_soil; cp_emissions | physical movement reconciliation |  |
| `transport_activity` | plant_mobilization | 载货运输量按机械吨数乘路线公里计算；保留关联供应商服务的空驶处理及有记录归属份额。 | cp_mobilization | attributable transport service |  |
| `direct_emissions` | fossil_co2_air; engine_species_air; soil_dust_pm25_air; soil_dust_coarse_air | 对归属活动采用有文件依据且适用的测量/模型方法；在数据集证据中保留完整方程、因子单位、物种/粒径基准及控制假设，不规定通用因子。 | cp_emissions; cp_energy; cp_soil | direct emission by substance and receiving medium | `epa-ap42-construction-dust`; `epa-nonroad-exhaust` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_lot` | excavate | 所有记录采用一致批次/场址/期间及验收边界，包括不合格作业及未发生证明。 | 签署验收及班次/事件台账 |
| `quality_identity` | all inventory rows | 最终过程发布前将各实际交换解析为已核实具体流、属性及单位；记录未决身份及总括/物种缺口。 | 身份核实及单位支持 |
| `quality_ranges` | all inventory rows | 以现场记录及审查证据替换暂定筛选估计；披露估计方法、缺失及不确定性。 | 记录完整性及独立审查参考证据 |
| `quality_upstream` | excavate | 披露各供应商数据集边界及排除相邻工作包责任方，避免全项目负荷缺口。 | 供应商声明及母项目边界台账 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | accepted_excavation_service | 要求与参考关联的唯一验收服务输出、1 m3原状基准及全部限定信息；土质量或松散体积均不能替代服务。 |  |
| `validate_transfers` | excavate | 每个土转移编号及去向仅核对一次，保留库存变化及损失，并检查含水/状态换算；同一实物土的再用和废物去向互斥。 |  |
| `validate_mode_rework` | excavate | 检查全部投入、输出、切换、清洗及维护的批次/班次关联；保留返工燃料/台时，同时排除重复验收体积及未授权超挖。 |  |
| `validate_shared` | excavate | 检查全部使用方及期间、物理归属份额及事件唯一归属；核对机械服务、运输、燃料及维护边界，防止重复计数。 |  |
| `validate_emissions` | excavate | 要求污染物种/报告基准、受纳空气、适用活动/模型及互不重叠粒径组分；缺失数据不得以零或通用固定身份替代。 | `epa-ap42-construction-dust`; `epa-nonroad-exhaust` |
| `validate_completion` | all inventory rows | 要求节点专属采集关联、单位、双语规则/卡对齐及当前投影；超范围须调查，未决身份及不支持换算须明确不完整覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景承包方开挖服务数据包 |
| downstream_use | 施工process及lifecyclemodel投影，并关联母工作包 |
| allowed_use | 几何、场址及交接相容的申报未污染土机械开挖 |
| excluded_use | 通用全部土方/建筑数据集；土壤制造；修复/爆破；无依据寿命或避免处置声称 |
| required_metadata | 必需参考限定信息；工作批；测量/验收；全部责任工作包；全部上游边界；路线及土壤去向 |
| required_quality_disclosure | 实测/估计份额；暂定范围；未决UUID/支持项；排放物种；缺失土记录；不确定性；已执行/跳过校验 |
| update_trigger | 土类/污染、设备、电力/燃料路线、交接、范围、测量方法、证据或上游覆盖变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fhwa-fp24-original-position` | official_guidance | FHWA FP-24 (2024), sections 109 and 204.15–204.16; https://highways.dot.gov/sites/fhwa.dot.gov/files/FP-24.pdf | 原状计量及验收接口；类比适用于本较窄服务，不采纳全部道路工作项 |
| `fhwa-fp24-dust-water` | official_guidance | FHWA FP-24 (2024), section 158; https://highways.dot.gov/sites/fhwa.dot.gov/files/FP-24.pdf | 条件性抑尘水责任及交付体积计量 |
| `epa-ap42-construction-dust` | official_guidance | US EPA AP-42 13.2.3 Heavy Construction Operations; https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | 分作业扬尘驱动及粒径报告限制；不采纳通用因子 |
| `epa-nonroad-exhaust` | official_guidance | US EPA Nonroad Engines and Air Pollution, EPA420-F-94-003 (1994); https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1009Z11.TXT | 非道路燃烧排放类别，不提供数量因子或物种拆分 |
| `fhwa-earthwork-representation-2025` | official_guidance | FHWA CFLHD Earthwork Representation: Grading Summaries and Mass Haul Diagrams (cover April 2025), pages 2–7; https://highways.fhwa.dot.gov/federal-lands/design/tools/cfl/earthwork-representation-guide.pdf | 土方状态、土工依据、流转与测量接口；不采用固定膨胀数值 |
