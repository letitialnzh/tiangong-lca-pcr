---
pcr_id: pcr.manual-non-loadbearing-fired-clay-brick-partition-demolition-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 人工非承重烧结黏土砖隔墙拆除服务

## 1. 范围与适用性

本 PCR 适用于对经勘查的室内裸露烧结黏土砖及水泥基砂浆非承重隔墙进行受控手工拆除与清场。提供的功能是完成拆除。每项作业均以实际批准的工序、通行与作业条件、隔离区域、楼板荷载、管线隔离和危害排查结果为依据。结构或承重墙、机械倒塌式拆除、危险物质治理、装饰面层剥除、替代墙体施工和场外废物处理不属于本类别。勘查或现场情况与范围不符时应停工，不得将不相容作业并入参考输出。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.manual-non-loadbearing-fired-clay-brick-partition-demolition-services |
| classification_refs | cpc:3.0:54310；比拆除服务范围更窄 |
| covered_products | 完成指定非承重隔墙的人工拆除并清场交付 |
| excluded_products | 整栋或结构拆除；机械倒塌；危害治理；墙体施工；独立回收加工 |
| representative_product | 拆除并清场验收的一平方米砖隔墙净立面面积 |
| production_route | 批准的开工接口；受控手工拆除；碎料受控转移；按实际接收路线分流；清理；检查与整改；签署交付 |
| market_state | 现场完成并交付的拆除服务，材料在声明的收集节点具备托管记录 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收完成的指定室内隔墙拆除 |
| How much | 1 m2 净墙体立面面积，仅计一次 |
| How well | 声明厚度全部拆除；保留结构稳定；收集区域清理完毕；未关闭的检查缺陷面积不计入验收量 |
| How long or cycle | 一次有记录的作业，包括整改关闭和签署交付；不设建筑使用寿命 |
| reference_flow_link | `accepted_demolition` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 按净面积验收的非承重砖隔墙拆除服务 |
| 参考流属性 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 地点与报告日期；墙体几何和厚度；砖及砂浆身份；裸露表面状态；非承重勘查；管线隔离和危害排查；批准的手工作业顺序；通行及楼板限制；实际抑尘措施；验收净拆除面积；材料去向；收集节点；运输及处理负担归属 |


## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `net_area` | 参考产品 | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 在一个墙体平面内测量已拆立面多边形，扣除未拆洞口和保留面积，不将另一侧表面或厚度重复计为面积。厚度单独记录。cp_area 核对勘查及签署完工记录；未完成或拒收面积不属于验收面积。 |
| `material_mass` | 拆出材料及废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用扣皮测量或可追溯接收重量并声明水分及污染基准；不得通过假设墙体密度将面积或体积转为质量。 |
| `native_energy` | 电力 | Energy | kWh | 保持计量或供应商能源记录的原始单位；换算前保留转换证据。具体交换必须核实电力流属性、支持身份及供应身份。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 客户既有裸露砖/砂浆隔墙，已经勘查确认为非承重、完成隔离及危害排查，方法和通行条件获批准 |
| starting_condition_role | 实体存量和托管接口，不是新购砖输入，也不自动构成传入废物流 |
| product_classification_scope | cpc:3.0:54310 中范围较窄的隔墙拆除完成服务 |
| recursive_input_rule | 同一墙体的分包拆除属于另一服务责任方；明确划分责任及数量，禁止总包与分包重复计量。 |
| upstream_dataset_requirement | 为供应的耗材、水、电及有界资源服务链接相容的上游数据集。既有墙体制造/使用负担在本拆除接口之外；整栋建筑模型需要这些负担时由原责任方表征。 |
| disclosure | 声明存量所有权、先前勘查/治理边界、作业期、出料收集节点、工具/通行/到场服务覆盖、资本排除、废物运输/处理责任方及未计量清单。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `ready_interface` | 拆除 | 手工作业前必须具备实际有资质勘查、方法和隔离证据。以 HSE 筹划指引及 OSHA 砌体稳定/荷载原则为技术背景，另外声明适用的当地要求。通用自上而下指令不能替代批准的实际作业顺序。 | hse-demolition; osha-masonry-removal |
| `removal_gate` | 拆除 | 独立拆除责任终止于保留结构稳定、区域清场验收以及材料在场内收集节点分别记录。现场筛分/分流服务于这一节点；场外破碎回收不是内含生产节点。 |  |
| `stock_ledger` | 拆除 | 在托管台账记录既有墙体几何及材料。核对拆出质量、剩余存量、输出产品/废物及实际表征排放；不得虚构购买既有墙体的交换，也不得在实际拆除处置决定之前将其认作废物。 |  |
| `resources` | 拆除 | 实际使用时纳入可归属手工具/通行/到场服务、抑尘水/抽吸电力、消耗防护及清理材料、受控碎料转移、清理和整改。有界供应商服务承担其声明的资本覆盖；另行披露任何排除，不得编造工具寿命。 |  |
| `sharing` | 拆除 | 以共享资产/服务 id 关联本拆除节点及所有其他消费作业或报告期。记录覆盖范围、各期总量、作业使用量及分配驱动；先直接计量，再仅分配实际共享的剩余负担。 |  |
| `exit_owner` | 拆除 | 在各自实际节点记录固体废物、废水和空气释放。场外运输/处理不纳入本现场服务清单，但必须声明其数据集责任方及转移证据；不自动给予替代原生生产或回收抵扣。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际消耗的防护及清理用品 (`consumed_supplies`)

过程／待建立交换的方向／类型：`demolition` / `inputs` / `product`.

适用于实际消耗的袋、保护膜、滤材及清理物质的条件性总卡；具体数据集按已识别材料/配方拆分。数量范围证据需求：逐项记录发出、退回、剩余及消耗量；不设通用耗材系数。

- 采集对象：实际消耗的防护及清理用品
- 流属性/单位：Mass / kg
- 数量规则：按具体材料计量消耗量，完好退回和期末存量仅核算一次
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

#### 采集要求：可归属的有界手工具通行及现场资源服务 (`bounded_resource_service`)

过程／待建立交换的方向／类型：`demolition` / `inputs` / `product`.

适用于实际供应商工具、通行设备、容器及适用到场服务的条件性总卡；保留供应商原始单位并拆分具体服务；小时仅表达计时使用。数量范围证据需求：取得实际覆盖、使用日志、期间、共享消费者及驱动证据；不编造设备寿命。

- 采集对象：可归属的有界手工具通行及现场资源服务
- 流属性/单位：Duration / h
- 数量规则：每项实际供应商资源的可归属原始服务数量；确按时间计费时用 h 记录
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`

#### 采集要求：实际获准再使用的拆出砌体 (`reusable_removed_material`)

过程／待建立交换的方向／类型：`demolition` / `outputs` / `product`.

仅适用于在有记录的场内收集/交付节点获准作为再使用产品的材料，不含未建模回收加工。后续接收方验收是产品状态证据，不纳入运输及处理。明确材料、状态、托管和验收；外观完整不足以证明可再使用。数量范围证据需求：称量实际验收批次并保留接收方质量证据；不默认再使用比例或替代抵扣。

- 采集对象：实际获准再使用的拆出砌体
- 流属性/单位：Mass / kg
- 数量规则：按材料及去向记录实际扣皮验收产品质量，不包括拒收或状态未定批次
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

#### 采集要求：拆出的烧结黏土砖和水泥基砂浆废物 (`masonry_waste`)

过程／待建立交换的方向／类型：`demolition` / `outputs` / `waste`.

记录收集节点的实际混合砌体废物；按证据分开监管类别及污染批次。数量范围证据需求：接收重量与实测墙体存量/剩余量建立质量闭合；不得以密度、面积或假定回收率作质量因子。

- 采集对象：拆出的烧结黏土砖和水泥基砂浆废物
- 流属性/单位：Mass / kg
- 数量规则：实测外送砌体废物，区别于验收再使用产品、保留存量及捕集或排放颗粒
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

#### 采集要求：实际废耗材及捕集干残余物 (`supplies_waste`)

过程／待建立交换的方向／类型：`demolition` / `outputs` / `waste`.

适用于实际废袋、保护膜、滤材和捕集粉尘废物节点的条件性总卡。可用容器/部件根据托管记录回到供应商存量，不归入此卡。数量范围证据需求：逐类称量已识别废物流，区分收集粉尘与未收集空气释放并记录跨期存量。

- 采集对象：实际废耗材及捕集干残余物
- 流属性/单位：Mass / kg
- 数量规则：按材料及去向记录实际扣皮废物质量；可用退回不得二次扣减
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_exits`

#### 采集要求：实际表征的物质或颗粒空气释放 (`characterized_air_release`)

过程／待建立交换的方向／类型：`demolition` / `outputs` / `elementary`.

适用于实际报告物种或粒径类别及接收空气环境的条件性总卡；不编造通用粉尘 UUID 或二氧化硅含量。数量范围证据需求：代表性测量或经验证的作业特定释放估计，含控制效率及不确定性。暴露浓度不等于排放总质量；未测量不等于零。

- 采集对象：实际表征的物质或颗粒空气释放
- 流属性/单位：Mass / kg
- 数量规则：逐项记录实际物质/颗粒类别向声明空气环境的表征排放质量，不含捕集废物
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| demolition | 人工隔墙拆除与清场 | required | 仅在声明的开工接口得到证明后适用 | 独立拆除；负责存量托管、碎料清场、本地整改回路及出料收集节点 | 1 m2 验收净拆除面积 |

单一节点包括工作面核查、实际工程批准的手工顺序、受控碎料移动和签署清场。检查失败返回同一节点：保留所有资源并重复检查，面积不得重复计量。拆出砌体未获再使用验收时，按身份确认的废物出界，或作为隔离存量待确定去向。此过程图不构成安全作业方法认证。

### 过程：人工隔墙拆除与清场 (`demolition`)

#### 输入

##### 产品流

###### 供应的抑尘或清理用水 (`dust_cleanup_water`)

仅记录实际供应水，并声明水源和用途；直接自然取水须另建经核实的基本流输入。数量范围证据需求：取得作业水量测量、控制方法及重复作业分散程度；没有通用洒水率依据。

- 选定流：供应的抑尘或清理用水
- 流属性/单位：Mass / kg
- 数量规则：实际抑尘及清理供应水的可归属计量值；有证据的未使用须与缺失数据区分
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`



###### 实际抽吸与充电用电 (`site_electricity`)

纳入实际抽吸及可归属工具或服务充电；人工拆除不代表零用电。数量范围证据需求：取得电表或经核实供应商能耗记录、运行时间和设备状态；不默认将铭牌功率转为耗电。

- 选定流：实际抽吸与充电用电
- 流属性/单位：Energy / kWh
- 数量规则：可归属本作业的计量或供应商记录用电，不含资源服务已覆盖的电力
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_resources`



##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 按净面积验收的非承重砖隔墙拆除服务 (`accepted_demolition`)

真实参考输出是完成拆除并清场验收，包括整改关闭。数量范围决定：1 m2 为归一化定义，不是产率、回收比例或性能区间；保留实际验收面积测量不确定性。

- 选定流：按净面积验收的非承重砖隔墙拆除服务
- 流属性/单位：Area / m2
- 数量规则：1 m2
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_area`



##### 废物流

###### 实际收集的清理废水 (`cleanup_wastewater`)

有条件的收集废液出界；明确固体含量、去向及处理责任方。直接排放须另以表征后的基本流表达，不得改名为本废物流。数量范围证据需求：实测水/固体平衡及收集记录；不假设全部供水成为废水或蒸发。

- 选定流：实际收集的清理废水
- 流属性/单位：Mass / kg
- 数量规则：按声明的固体/水分基准计量收集废水质量，与干残余物分开
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`



##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `service_owner` | accepted_demolition | 拆除和整改负担归入验收拆除服务。未关闭缺陷留在同一本地回路；重复作业不得创建另一验收输出，也不得删除失败尝试的资源。 |  |
| `material_exits` | 拆出材料 | 声明每批出料的所有权及法律/产品状态。在本服务边界模型中拆除负担留在拆除服务；再使用材料单独报告而不抵扣原生生产。后续系统若需联产品分配，应声明经审查的边界/方法，不得暗中覆盖本规则。 |  |
| `shared_resources` | bounded_resource_service; site_electricity | 识别每项共享供应商服务、所有消费作业/节点及相关服务期间。优先直接活动记录；仅按有记录的因果驱动分配实测剩余服务总量并保持消费者合计守恒。说明驱动、覆盖及不确定性，不得将服务费用与其中已含的电力/资本重复分配。 |  |
| `returns` | consumed_supplies; supplies_waste | 可用包装、容器和未使用用品按实际存量/托管记录退回或留作期末存量。发出、消耗、退回及保留数量仅记录一次；退回不能同时是废物，也不能二次净扣减。已耗污染物品按实际废物路线处理。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_area | demolition | 验收拆除面积及初始存量 | 勘查及签署交付 | job_id; wall_id; geometry; openings; retained_area; thickness; brick_mortar_identity; survey_release; method_id; isolation_clearance; hazard_clearance; accepted_area; rework_events; handover_date | 在一个声明的立面测量多边形，扣除洞口和保留部分，核对实际拆除厚度及签署验收面积。记录尺寸、仪器容差和整改关闭。所有作业数量归属同一验收净面积后再记录为每参考流。 | m2 | 逐墙及最终交付 | 完整作业及整改到场 | 指定墙体及收集区域 | per reference flow | 勘查/尺寸记录；批准方法；签署检查；容差及面积核对 |
| cp_resources | demolition | 电力耗材及有界资源服务 | 电表发退料记录及供应商日志 | job_id; resource_id; material_identity; provider; service_coverage; period_id; other_consumers; issued; consumed; returned; closing_stock; meter_readings; native_unit; direct_use; shared_total; driver_total; job_driver | 采用电表差值或核实供应量；逐材料追溯发出/消耗/退回/存量。共享服务列明所有消费者及期间，从共享池扣除已直接归属量，剩余按有记录的因果使用驱动分配。可归属作业量除以 cp_area 验收净面积后记录为每参考流。 | kg; kWh; h 或核实的原始服务单位 | 每次资源事件及服务期间关闭 | 完整作业及所有贡献共享服务期间 | 声明场地及实际供应商服务边界 | per reference flow | 校准电表/秤；供应覆盖；完整消费者台账；分配合计等于池总量；与服务内含能源不重叠 |
| cp_water | demolition | 供水及收集废水 | 水表供应及收集记录 | job_id; source; supplied_mass; collected_wastewater_mass; suspended_solids; remaining_water; moisture_basis; meter_unit; conversion_evidence; receiver; transfer_id | 分别计量供水及收集废液；保留原始读数，仅必要时采用经验证转换。核对碎料含水、排出、蒸发或余水，不假定拆分比例。可归属量除以验收净面积。 | kg | 每次供水/收集事件 | 完整作业及最终清理 | 工作面至实际收集节点 | per reference flow | 仪表校准；收集重量；水分/固体基准；未解释水量差及采样不确定性 |
| cp_exits | demolition | 拆出砌体再使用废物及耗材废物 | 托管转移及称重 | job_id; lot_id; transfer_id; material; status; tare; gross_mass; moisture; contamination; receiver; acceptance; retained_stock; transport_owner; treatment_owner; usable_return | 称重或使用可追溯接收重量，每批仅分类一次并保留验收/去向证据。再使用拒收批次返回拆除存量后按实际废物/保留路线处理；防止产品/废物双重分类。实际输出质量除以验收净面积。 | kg | 每批出料及期末盘点 | 首次拆除至最终收集节点核对 | 声明场内收集节点及有记录的接收方 | per reference flow | 秤可追溯性；唯一转移 id；验收产品质量；废物类别；期末存量及质量核对 |
| cp_emissions | demolition | 表征空气释放 | 测量或经验证估计档案 | job_id; substance; particle_class; air_compartment; sampling_duration; control_state; emitted_mass; estimation_method; captured_mass; uncertainty; missing_coverage | 采用代表性排放测量或经验证的作业特定总释放方法并记录实际控制状态。保留物种/粒径基准及介质；无可靠质量计算不得将工人暴露浓度转换为总释放。排除实测捕集废物，将归属排放质量除以验收净面积。 | kg | 每个代表性作业/控制状态及整项作业估计 | 拆除及清理，包括整改 | 实际工作面接收空气环境 | per reference flow | 方法验证；监测覆盖；测量不确定性；未覆盖物种/阶段 |

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `area_normalization` | 所有清单行 | 可归属作业交换量除以实测验收净拆除面积（m2），记录为每参考流。各不重叠验收墙体多边形仅合计一次；记录不确定性，分母为零或未确定时拒绝归一化。不隐含面积到质量转换。 | cp_area; 节点专属数量协议 | 每参考流交换数量 |  |
| `shared_attribution` | bounded_resource_service; site_electricity | 先用作业直接计量。仅将共享池剩余部分按同期间全部消费者的作业因果使用份额分配；核对分配合计与剩余池相等。分配后应用 area_normalization。 | cp_resources; cp_area | 每参考流可归属资源量 |  |
| `custody_closure` | reusable_removed_material; masonry_waste; supplies_waste; cleanup_wastewater; characterized_air_release | 在相容质量/水分基准上，将拆除存量和添加耗材/水与验收再使用出料、废物、实际排放及余存量比较。保留不确定或未测项；不得以平衡差推断缺失空气释放或强制假零。 | cp_area; cp_resources; cp_water; cp_exits; cp_emissions | 材料/水闭合及未解释差值 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| dq_scope | demolition | 证明非承重裸露砖/砂浆墙、管线隔离、危害排查及批准手工方法；遇矛盾条件停工。 | 勘查；工程/方法批准；当地开工记录 |
| dq_quantity | 所有清单行 | 采用同一验收面积分母；披露仪器误差、跨期存量、水分及未完成测量。未使用与缺失数量分开记录。 | cp_area 及所有链接协议 |
| dq_time | 所有清单行 | 以有日期的资源、转移和完工事件覆盖实际作业及整改到场；披露缺口，不以零代替。 | 完整作业/事件台账 |
| dq_identity | 所有清单行 | 每项实际交换必须经详情证据解析为相容具体流、属性及单位。条件性总卡需实际前景身份；支持缺口保持明示。 | 身份档案及实际材料/供应商/介质记录 |
| dq_ranges | 所有清单行 | 取得证据后以观测作业分布或可靠技术特定证据替代缺失数量范围。在解决前保留证据需求；不规定通用水、电、粉尘、密度或回收系数。 | 逐卡证据需求；含不确定性的测量 |
| dq_gate | accepted_demolition; 材料出界 | 验收服务/产品数量中排除检查失败/整改未关闭面积及去向未定批次。关闭整改或披露输出不完整。 | 签署交付及托管验收记录 |


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_release` | demolition | 依据开工证据核实范围及实际批准的顺序/限制。结构、危险或未确定墙体不能通过本类别门槛。 | hse-demolition; osha-masonry-removal |
| `area_once` | accepted_demolition | 要求 1 m2 参考及核实的 Area 支持；核对验收净立面、洞口、厚度、墙体另一侧不重复以及全部整改。验收面积缺失/为零阻止归一化。 |  |
| `rework_gate` | demolition | 在单一节点核对初次作业、检查失败、重复清理/拆除和最终验收。排除未解决/拒收面积；保留失败尝试负担。 |  |
| `exit_closure` | 材料出界 | 核实唯一材料/转移 id、产品验收与废物状态、余存量及已表征空气/水拆分。缺失接收状态不能成为再使用产品或回收抵扣。 |  |
| `shared_conservation` | bounded_resource_service; site_electricity | 核实实际共享消费者/期间、因果驱动证据、覆盖及剩余池守恒；拒绝与供应商服务已含的能源/资本重叠。 |  |
| `identity_coverage` | 所有清单行 | 最终数据集交换前必须具备核实的具体身份、属性及单位。即使结构检查通过，未解决的总卡/UUID/支持身份和数量范围证据缺口仍应报告为覆盖限制。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完成手工非承重砖隔墙拆除的场址特定前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配声明墙体、方法、场地和收集节点的建筑改造/拆除模型；下游 process 及 lifecyclemodel 投影 |
| excluded_use | 结构拆除；危害治理；新墙制造；机械倒塌；通用拆除基准；自动回收或替代生产抵扣 |
| required_metadata | 墙体尺寸/厚度/材料；一次计量净面积；勘查/方法放行；实际手工具/控制系统；报告日期；供应商及共享消费者；存量/废物所有权；收集及处理节点 |
| required_quality_disclosure | 面积/质量不确定性；空气/水覆盖缺口；身份及 Energy/Duration 支持缺口；未解决数量范围证据；本地整改负担；既有墙体和资本服务排除 |
| update_trigger | 墙体组成或厚度改变；方法/控制/通行变化；新供应商/服务覆盖；勘查/危害改变；材料去向变化；测量或验收节点修订 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| hse-demolition | official_guidance | https://www.hse.gov.uk/construction/safetytopics/demolition.htm | 有资质勘查/方法、结构/管线/危害及随工序变化的稳定/碎料控制筹划背景；不是通用国家法律规定 |
| osha-masonry-removal | standard | OSHA 29 CFR 1926.854，墙体、砌体及烟囱拆除；https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.854 | 砌体楼板荷载及余墙稳定限制的技术背景；采用实际当地要求及批准方法 |
| un-cpc3-notes-2025 | official_guidance | 联合国统计司，CPC 第3.0版解释说明，2025年6月30日，PDF 第288页；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 拆除服务分类范围；不提供清单因子 |
