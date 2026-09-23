---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mate-leaves
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 声明初级加工门的马黛叶

## 1. 适用范围

本 PCR 覆盖 *Ilex paraguariensis* 马黛叶从人工管理的多年生植株、叶及细枝采收到鲜料接收、sapeco 短时热处理、干燥、实际发生的粗碎、分级及干品在声明初级加工门交付。参考产品为干燥、未混配的叶料，须声明叶枝组成、含水率、处理路线和交付门。采收鲜料是中间状态，不得以其质量替代干品参考量。产品类别与 CPC 01630 马黛叶及其对应的 HS 0903 Maté 相符。

陈化、精细研磨、混配、调味、提取、饮料、零售包装及消费者冲泡均属后续工序。野生采集仍属马黛叶产品类别，但本版的人工管理路线不提供该路线的前景模型；用于野生采集时须另行评审和建模。*Camellia sinensis* 茶为不同产品。FAO、IARC 和马黛价值链研究支持对来源、采收、sapeco、干燥及后续处理进行区分。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.mate-leaves |
| classification_refs | CPC 3.0: 01630 马黛叶；对应 HS 0903 Maté |
| covered_products | 初级加工后、干燥且未混配的 *Ilex paraguariensis* 叶料，含声明比例的细枝 |
| excluded_products | *Camellia sinensis* 茶、其他草本叶、马黛提取物、饮料、调味或混配产品及零售制品 |
| representative_product | 陈化、精细研磨、混配和包装之前的干燥粗制马黛叶 |
| production_route | 管理植株、周期性采收、鲜料接收、sapeco、干燥、可选粗碎、分级和初级加工门 |
| market_state | 声明初级加工门的干燥未混配叶料，注明含水率、等级、叶枝比例和路线 |

## 3. 参考流

### 功能单位

| Field | Value |
| --- | --- |
| What | 声明交付门的干燥初级加工 *Ilex paraguariensis* 马黛叶 |
| How much | 干燥交付状态下净重 1 kg |
| How well | 声明物种、叶枝比例、含水率、等级、sapeco 和干燥路线；不含混配及零售包装 |
| How long or cycle | 一个加工批次，关联采收年度；建植与补植归属所代表的生产年度 |
| reference_flow_link | 马黛叶；精确天工产品流 UUID 尚未确认 |

### 参考流对象

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 马黛叶 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | *Ilex paraguariensis*；场址和作物年度；采收与干燥批次；sapeco 燃料及加热路线；干燥方式；干品含水率；叶枝比例；等级；混配前初级加工门 |

精确的平台参考 UUID 尚未确认。不得以普通茶、鲜叶或品牌饮料 UUID 替代；转为 active 或 published 前必须核实相容产品流。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | 鲜料、热处理料、干料、分级和拒收状态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每次状态交接记录净质量和含水率，皮重及包装单列。 |
| `measurement_02` | 干燥及物料平衡 | 质量和湿基含水率 | kg；百分比 | 根据配对批次质量与含水率比较干物质，计算蒸发水，不用通用鲜干转化率。 |
| `measurement_03` | 多年生植株 | 面积及期间 | ha；year；ha·year | 建植、补植、修剪、采收与土地占用关联地块、阶段和生产年度。 |
| `measurement_04` | 肥料与植保 | 产品及养分或有效成分质量 | kg 产品；kg 物质 | 配方产品质量与养分、有效成分含量分开记录。 |
| `measurement_05` | 燃料、电力、灌溉和运输 | 原供给单位 | L；kg；MJ；kWh；m3；t·km | 保留仪表或发票单位，仅使用有记录的密度、热值和单位换算。 |

## 5. 系统边界

前景从人工管理的马黛植株及可归属建植、补植开始，纳入管理投入、田间排放、独立采收、田间至干燥设施运输、鲜料接收与初分选、sapeco、干燥、可选粗碎、干品分级、短期存放和交付。苗木、肥料、植保产品、能源、水及外部运输、处理服务须连接边界外上游数据集。边界止于陈化、精细研磨、混配、调味、零售包装和分销之前。

植株管理形成可采叶料；切割采收是有独立计量和鲜料交接的事件。初整理从采集料中剔除异物和受损料。Sapeco 以准备好的鲜料为输入、热处理料为输出；干燥以热处理料为输入、稳定干料为输出，记录失水和热投入。最终分级把合格、降级和拒收料分别交给明确去向。多批次、场址或年度共用的车辆、锅炉、干燥机和建筑负担仅归属一次。

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 声明阶段与报告年度起点的人工管理植株及全部参与供料地块 |
| starting_condition_role | 多年生可采马黛叶料的生物生产来源 |
| product_classification_scope | CPC 3.0: 01630 马黛叶；干燥初级加工 *Ilex paraguariensis* 参考状态 |
| recursive_input_rule | 外购同类鲜或干马黛叶保留为独立上游批次，不在接收批次重复展开其种植及加工负担 |
| upstream_dataset_requirement | 边界外苗木、养分、植保、燃料、电力、水、运输及处理服务的已核实数据集 |
| disclosure | 全部场址、植株阶段、采收年度及批次、各阶段质量与含水率、叶枝比例、sapeco 与干燥路线、燃料与电力、等级去向、共用服务归属、交付门和排除项 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | 管理植株与采收 | 纳入所代表植株的管理、实际投入、直接田间排放和单独计量的采收；建植及补植仅归属所代表生产年度。 | `fao-yerba-mate-forest-products`; `chifarelli-2024-yerba-mate-lca` |
| `boundary_02` | sapeco 与干燥 | 纳入至干燥交付门前的热处理及干燥燃料、电力、物料转移、失水、排放和拒收；各物料状态分别记录。 | `iarc-mate-processing`; `chifarelli-2024-yerba-mate-lca` |
| `boundary_03` | 下游门 | 声明门内是否粗碎；陈化、精细研磨、混配及包装仅在另报新产出及交付门时纳入。 | `iarc-mate-processing` |
| `boundary_04` | 多场址与共用资产 | 列出全部供料地块与干燥设施，核对转移，并按有证据的驱动量与服务期间归属共用负担一次。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `mate_stand_management` | 马黛植株管理 | required | 每个栽培批次或已确定的上游种植数据集 | 多年生生物生产 | 场址年度及每 1 kg 干品 |
| `mate_harvest` | 叶及细枝采收 | required | 每批 | 独立采集及鲜料交接 | kg 采集鲜料 |
| `mate_first_conditioning` | 鲜料接收与初分选 | required | 每批 | 原料至准备料交接 | kg 接收及准备鲜料 |
| `mate_sapeco` | Sapeco 热处理 | required | 每条初级加工路线 | 物料处理 | kg 准备料及热处理料 |
| `mate_drying` | 干燥与稳定化 | required | 每个干品参考批次 | 保藏与稳定化 | kg 热处理投入及干品产出 |
| `mate_grade_gate` | 粗碎、分级与交付 | required | 每个合格干品批次；粗碎仅在实际发生时纳入 | 合格、降级、拒收料交接 | 1 kg 合格干品 |

### 过程：马黛植株管理（`mate_stand_management`）

#### 投入

##### 产品流

###### 植株管理物料（`mate_management_inputs`）

按地块和阶段记录实际苗木、养分、植保产品、灌溉供水、燃料及电力；数据集构建时应将具体交换逐项分类。

- 选定流：场址特定管理产品；UUID 未确认
- 流属性/单位：Mass、Volume 或 Energy / kg、m3、L 或 kWh
- 数量规则：有日期的采购、施用及仪表记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每场址年度及每 1 kg 合格干马黛叶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mate_site_year`

##### 废物流

不预设废物投入；再生有机改良物须有独立身份和实际进入记录。

##### 基本流

直接取水按来源与环境介质单列，不与购买供水混同。

#### 产出

##### 产品流

###### 可采马黛叶料（`mate_harvestable_foliage`）

将可采植株状态交至独立切割节点；未采生长量不作为销售联产品。

- 选定流：植株上的 *Ilex paraguariensis* 叶料；内部状态，UUID 未确认
- 流属性/单位：Mass / kg
- 数量规则：由采收事件及田间残余记录估算移除量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每采收批次
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_mate_harvest_lot`

##### 废物流

田间留存或移出的修剪物记录去向，不预设联产品抵扣。

##### 基本流

仅依据活动记录和适用方法按物质及接收介质计算田间排放。

### 过程：叶及细枝采收（`mate_harvest`）

#### 投入

##### 产品流

###### 采收来源及服务（`mate_harvest_service`）

连接已确定植株地块，实际使用时记录切割燃料和外包采收服务。

- 选定流：可采叶料及已识别能源或服务；UUID 未确认
- 流属性/单位：Mass 或 Energy / kg、L 或 kWh
- 数量规则：事件质量、燃料和服务记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每采收批次
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_harvest_lot`

##### 废物流

不预设废物投入。

##### 基本流

边界内燃烧燃料时记录设备直接排放。

#### 产出

##### 产品流

###### 采集鲜叶料（`mate_collected_foliage`）

称量鲜料，声明叶、细枝和粗木比例，且仅一次交至初级整理。

- 选定流：采集的鲜马黛叶料；UUID 未确认
- 流属性/单位：Mass / kg
- 数量规则：采收净重及组成样本
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每采收批次
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_harvest_lot`

##### 废物流

田间留存切割物和偶发物料与预期采集料分开记录。

##### 基本流

不预设通用排放量。

### 过程：鲜料接收与初分选（`mate_first_conditioning`）

#### 投入

##### 产品流

###### 接收鲜叶料（`mate_fresh_receipt`）

每采收批次仅对应一次接收，记录皮重、场内搬运和实际处理能耗。

- 选定流：接收的鲜马黛叶料；UUID 未确认
- 流属性/单位：Mass / kg
- 数量规则：关联采收批次的接收净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收批次
- 基准类型：过程投入（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_processing_lot`

##### 废物流

不预设废物投入。

##### 基本流

仅当实际初级整理用水时记录取水。

#### 产出

##### 产品流

###### 准备好的鲜叶料（`mate_prepared_foliage`）

去除异物和明显受损料，将合格鲜叶料交给 sapeco。

- 选定流：准备好的鲜马黛叶料；UUID 未确认
- 流属性/单位：Mass / kg
- 数量规则：实测准备料质量与组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_processing_lot`

##### 废物流

粗木、受损叶和异物作为不同拒收料记录去向。

##### 基本流

实际产生粉尘或废水时记录物质及接收介质。

### 过程：Sapeco 热处理（`mate_sapeco`）

#### 投入

##### 产品流

###### 鲜叶料及热量供给（`mate_sapeco_inputs`）

接收准备好的鲜叶料，记录实际燃料、热源、电力和批次或生产线服务时间。

- 选定流：准备料及已指定燃料或电力；UUID 未确认
- 流属性/单位：Mass 或 Energy / kg、L、MJ 或 kWh
- 数量规则：批次质量和计量或发票能源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 sapeco 批次
- 基准类型：过程投入（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_processing_lot`

##### 废物流

不预设废物投入。

##### 基本流

仅在清单方法要求时记录直接取用的燃烧空气或水。

#### 产出

##### 产品流

###### 热处理马黛叶料（`mate_sapeco_output`）

将仍有水分的热处理料交至干燥，记录质量与含水率；它不是干品参考产出。

- 选定流：sapeco 热处理马黛叶料；UUID 未确认
- 流属性/单位：Mass / kg
- 数量规则：热处理后称重与含水率样本
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 sapeco 批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_processing_lot`

##### 废物流

烧焦或不合格叶料单列，交给返工、降级、回收或废物出口。

##### 基本流

按有证据的方法记录指定的直接燃烧大气排放，以及灰渣或废水去向。

### 过程：干燥与稳定化（`mate_drying`）

#### 投入

##### 产品流

###### 热处理叶料及干燥服务（`mate_drying_inputs`）

记录可用热处理投入和实际热量、燃料、电力及共用干燥机服务。

- 选定流：sapeco 热处理叶料及已指定干燥能源；UUID 未确认
- 流属性/单位：Mass 或 Energy / kg、MJ、L 或 kWh
- 数量规则：配对投入质量与干燥能源表计
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程投入（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_processing_lot`

##### 废物流

不预设废物投入。

##### 基本流

仅在实际干燥服务用水时记录直接取水。

#### 产出

##### 产品流

###### 稳定干叶料（`mate_dried_foliage`）

带实测最终含水率交至粗碎或分级；蒸发水在质量平衡中单列。

- 选定流：干燥初级加工马黛叶料；UUID 未确认
- 流属性/单位：Mass / kg
- 数量规则：干品净重和湿基含水率样本
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每干燥批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_processing_lot`

##### 废物流

烧焦、霉变或其他拒收干料及其去向分别记录。

##### 基本流

仅在所选清单方法相关时记录水蒸气和指定的干燥直接排放。

### 过程：粗碎、分级与交付（`mate_grade_gate`）

#### 投入

##### 产品流

###### 干叶料与分级服务（`mate_grading_inputs`）

干料仅接收一次，记录可选粗碎、共用分级机或仓库的实际能耗。

- 选定流：干马黛叶料及有记录的服务；UUID 未确认
- 流属性/单位：Mass 或 Energy / kg 或 kWh
- 数量规则：投入质量、运行时间与表计记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分级批次
- 基准类型：过程投入（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_processing_lot`

##### 废物流

退回的不合格料是可追踪返工投入，并非第二次采收。

##### 基本流

不预设基本流投入。

#### 产出

##### 产品流

###### 合格干马黛叶（`mate_accepted_dry`）

在声明交付门交付合格干燥未混配叶料。单独出售的细枝或低等级产出须有自身质量与交接。

- 选定流：干马黛叶；精确 UUID 未确认
- 流属性/单位：Mass / kg
- 数量规则：交付门合格净重及实测含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 合格干马黛叶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_processing_lot`

###### 降级或预期细枝等级（`mate_downgraded_grade`）

仅在有买家、规格、质量和单独交接时视为独立预期产品；否则归为残余或废物。

- 选定流：有记录的低等级或细枝马黛料；UUID 未确认
- 流属性/单位：Mass / kg
- 数量规则：单独交付净重
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分级批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_processing_lot`

##### 废物流

###### 拒收及不合格料（`mate_grade_rejects`）

明确粉尘、木质残余、烧焦或霉变材料，把每一返工环或边界出口关联本分级节点。

- 选定流：已识别的马黛拒收料；UUID 未确认
- 流属性/单位：Mass / kg
- 数量规则：按原因及返工、回收或处理去向称量拒收料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每分级批次
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mate_processing_lot`

##### 基本流

粉尘排放仅在物质及接收介质明确时记录。

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | 预期产出 | 列举合格干叶及每项独立销售的细枝或低等级产品，各自只有一个交付；残余与拒收不自动成为联产品。 | `chifarelli-2024-yerba-mate-lca` |
| `allocation_02` | 多项预期产品 | 优先实测细分；若不可分，声明适用项目的物理或其他分配方法及理由，不预设通用比例。 | `iso-14044-2006` |
| `allocation_03` | 多年生阶段 | 建植、未投产、生产、补植及终止事件关联所代表年度与产出；声明服务年限且每项事件仅归属一次。 | `iso-14044-2006` |
| `allocation_04` | 共用场址及资产 | 用有记录的时间、吞吐量或其他有证据的物理驱动量，将车辆、sapeco 热系统、干燥机、分级机及仓储仅归属一次。 | `iso-14044-2006` |
| `allocation_05` | 拒收与返工 | 负担随生产批次保留至销售、回收、处理或处置有记录；返工不能形成第二次合格产出或重复能源投入。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mate_site_year` | `mate_stand_management` | 多年生投入与排放 | 田间台账及仪表 | 地块、阶段、年份、面积、种植、肥料、植保、灌溉、燃料、电力、共用驱动量 | 有日期田间记录、发票和校准仪表 | ha；year；kg；m3；L；kWh | 每事件或每月 | 所代表完整年度及可归属建植期 | 每个供料地块 | 先按场址年度汇总，再按产出跨场址加权 | 地图、发票、校准和活动记录 |
| `cp_mate_harvest_lot` | `mate_harvest` | 移除、采集及残余 | 采收批次 | 地块、日期、采集质量、叶枝比例、田间残余、切割燃料、接收关联 | 田间记录及净重秤 | kg；L | 每次采收 | 全采收季 | 每个供料区块 | 一次关联接收批次 | 秤单及可追溯批次记录 |
| `cp_mate_processing_lot` | `mate_first_conditioning`; `mate_sapeco`; `mate_drying`; `mate_grade_gate` | 各物料状态、能源、等级、拒收及交付门 | 加工及交付批次 | 输入批次、皮重、逐阶段质量和含水率、各燃料、电力、干燥时间、等级、返工、拒收及买家 | 配对秤、含水率样本、仪表及交付记录 | kg；百分比；MJ；L；kWh；h | 每批次及每次返工 | 完整加工期间 | 每个纳入设施 | 逐阶段核对，再跨场址按质量加权 | 秤与含水率校准、燃料发票、仪表及去向收据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_01` | 干物质 | 干物质 kg = 实收 kg ×（1 − 湿基含水率）；比较配对阶段平衡并单列蒸发水 | 批次质量及含水率 | 阶段干物质平衡 | `iarc-mate-processing` |
| `calculation_02` | 合格产出 | 在一致基准下，鲜料投入 = 合格干品 + 预期联产品 + 拒收 + 实测失水 + 其他实测损失 + 待调查差额 | 各阶段秤重、组成及含水率 | 已核对加工批次 | `chifarelli-2024-yerba-mate-lca` |
| `calculation_03` | 多场址归一化 | 场址和过程归属负担之和除以合格干品参考质量之和，保留各场址分子及分母 | 场址年度、批次及交付记录 | 每 1 kg 干马黛叶数量 | `iso-14044-2006` |
| `calculation_04` | 期间与共用服务 | 事件负担 × 已记录期间及服务驱动分摊份额；所有接收方份额之和为一 | 事件、期间、资产及接收方记录 | 每批次可归属负担 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | 参考身份 | active 或 published 使用前核实与干马黛叶相容的精确产品流 UUID。 | 已确认天工流记录及产品规格 |
| `quality_02` | 场址及期间 | 列出全部供料地块、干燥设施、阶段和作物年度，说明地域与时间代表性及排除单位。 | 场址登记、田间地图及纳入决定 |
| `quality_03` | 质量及等级 | 保留鲜料、热处理料、干料和交付料配对质量及含水率，追溯预期等级、拒收和返工。 | 秤、含水率和去向记录 |
| `quality_04` | 热量及共用资产 | 指明 sapeco 与干燥燃料、能量仪表、共用使用者、服务期间及归属驱动量。 | 仪表、燃料和设备记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | 身份及交付门 | 合格参考产品是干燥未混配的 *Ilex paraguariensis* 叶料，须声明含水率、叶枝比例、处理路线和初级加工门；active 使用须有精确 UUID。 | `fao-yerba-mate-forest-products`; `iarc-mate-processing` |
| `validation_02` | 阶段与场址 | 每个场址年度、种植或补植事件及加工设施须恰好一次关联所代表阶段、采收批次及产出期间。 | `iso-14044-2006` |
| `validation_03` | 物料平衡 | 用实测含水率核对鲜料、准备料、热处理料、干料、合格料、降级料、拒收料及损失，调查未解释差额。 | `chifarelli-2024-yerba-mate-lca` |
| `validation_04` | 联产品与返工 | 单独销售的细枝或低等级料须有质量、买家及分配决定；拒收料须有返工或出口，不得重复计入合格料。 | `iso-14044-2006` |
| `validation_05` | 共用服务 | 列出车辆、热系统、干燥机、分级机及仓库的使用者与服务期间；归属份额之和为一。 | `iso-14044-2006` |
| `validation_06` | 边界扩展 | 陈化、精细研磨、混配及零售包装若另行报告，须有不同产出状态和边界，不得复用初级加工参考量。 | `iarc-mate-processing` |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 栽培、干燥且初级加工的马黛叶前景数据包 |
| downstream_use | 经评审与身份核实后作为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 与所代表场址、年份、叶枝组成及路线相符的干燥未混配 *Ilex paraguariensis* 初级加工门 |
| excluded_use | 鲜叶、茶、混配或调味马黛叶、饮料、提取物，以及未单独建模的陈化或零售包装产品 |
| required_metadata | PCR id 及版本；精确产品 UUID；场址与阶段；采收及加工批次；各状态含水率；加热及干燥路线；等级与联产品决定；交付门 |
| required_quality_disclosure | 原始数据占比、场址覆盖、仪表及样本质量、质量差额、共用资产方法、排放方法、上游数据集及未解决流 |
| update_trigger | 产品状态、交付门、物种、场址组合、加热或干燥路线、分级规格、联产品处理或已评审 UUID 改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-01630` | official_guidance | UNSD，CPC 3.0 类 0163 马黛叶，https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/0163 ；CPC 2.1 子类 01630 对应 HS 090300，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/01630 | 分类及市场状态范围 |
| `fao-yerba-mate-forest-products` | official_guidance | FAO，*Non-Wood Forest Products from Temperate Broad-Leaved Trees*，第 4 章，https://www.fao.org/4/Y4351E/y4351e08.htm | 物种、种植园与林地来源、采叶与加工 |
| `chifarelli-2024-yerba-mate-lca` | literature | Chifarelli 等，*Carbon Footprint of Yerba Mate (Ilex paraguariensis) Value Chain in Misiones Province (Argentina)*，Sustainability 2024，16，10127，https://www.mdpi.com/2071-1050/16/22/10127 | 阶段拆分、栽培、采收、加工及活动数据采集 |
| `iarc-mate-processing` | official_guidance | IARC，*Drinking Coffee, Mate, and Very Hot Beverages*，马黛加工章节，https://publications.iarc.who.int/_publications/media/download/5606/1d2030b4b02d9c682ccf2a55d0bf7c871405fc2b.pdf | sapeco、干燥与下游状态区别 |
| `iso-14044-2006` | standard | ISO 14044:2006，环境管理——生命周期评价——要求与指南 | 边界、细分、分配及数据质量 |
