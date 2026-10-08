---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.geese
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鹅

## 1. 范围与适用性

本 PCR 覆盖在生产者孵化场或养殖场交付的*雁属*家鹅，包括雏鹅及较大日龄活鹅。鹅肉、死鹅、作为参考产品的鹅蛋、屠宰和下游运输均不在范围内。种鹅、孵化和养殖过程仅在实际运行时纳入；外购雏鹅或鹅蛋的上游负担只计一次。鹅蛋、从活鹅有意采集的羽绒、淘汰鹅和外运粪肥，仅在有独立交付证据时成为输出。记录种属、品种、日龄、用途、质量、数量、路线和交付门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.geese` |
| classification_refs | CPC 3.0 `02153`, Geese |
| covered_products | 活的家鹅，包括孵化场交付雏鹅和生产农场交付的较大日龄鹅 |
| excluded_products | 鹅肉、死鹅、作为参考产品的带壳鹅蛋、其他家禽、下游屠宰及加工 |
| representative_product | 在声明的生产者交付门按活重计量的家鹅 |
| production_route | 实际运行时纳入种鹅产蛋及孵化；生产农场活鹅时纳入育雏与养殖；活鹅捕捉和交付独立计列。放牧/牧草和圈舍养殖属于受管理生物生产的替代路线；有证据时分别改变饲料、土地、能源与粪污记录。同一批次的孵化场雏鹅交付与农场较大日龄鹅交付互斥。 |
| market_state | 活体、未经加工，声明日龄/类别和用途 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 对象 | 生产孵化场或农场门口的活家鹅 |
| 数量 | 1 kg 实测活重，并披露只数与平均单只质量 |
| 品质 | 活体且未经加工，记录种属/品种、日龄/类别及用途 |
| 时间或周期 | 声明鹅群、孵化批次或养殖周期；分别追溯种鹅与共享资产服务期间 |
| reference_flow_link | `live_geese_handover` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生产者交付的活家鹅 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必要限定条件 | 种属/品种；日龄/类别；雏鹅或较大日龄鹅；用途；只数；实测质量；孵化场或农场门；地点；周期 |

已核实的 CPC 02153 数据库候选按只数计量且交付门为工厂，不能代表本按质量计量的宽口径生产者交付参考流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `live_mass` | 参考及转移的活鹅 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对每批或各日龄/类别代表个体称重，以核对后的只数乘实测平均质量；排除死鹅。 |
| `bird_count` | 鹅群流转 | Count | birds | 核对期初、接收/孵化、销售、死亡与期末只数；未经称重不得将只数直接等同 kg。 |
| `egg_mass_count` | Eggs | Mass and count | kg; eggs | 记录鹅蛋用途与去向，并称量交接批次。 |
| `period_index` | 种鹅及共享资产 | 服务时间 | 天或周期 | 在归一化前，将每项投入、产出、更新和资产使用关联至实际服务期间。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 第一个运行节点的期初活鹅群、种鹅蛋或外购雏鹅，并声明来源、日龄、质量、数量及承继负担 |
| starting_condition_role | 前景起始存栏或上游产品投入，不得默认零负担 |
| product_classification_scope | CPC 3.0 `02153`, 活家鹅 |
| recursive_input_rule | 从其他生产者接收活鹅时，仅使用一个相应上游数据集；不得递归重复生产同一阶段或将内部转移计作新的最终产出。 |
| upstream_dataset_requirement | 饲料、外购鹅蛋/雏鹅、燃料、电力、水及服务均需匹配上游流身份和数据集。 |
| disclosure | 披露最终交付门、运行节点、放牧或圈养路线、种鹅及资产期间、产出去向、死亡和粪污路径。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_live` | 所有路线 | 仅纳入实际运行的种鹅、孵化、育雏/养殖与独立活鹅捕捉，截止生产者交付；排除屠宰和下游配送。 | `un-cpc-2025`; `fao-goose-production`; `fao-leap-poultry-2016` |
| `boundary_gate` | 孵化场或农场路线 | 孵化场雏鹅与农场较大日龄鹅是互斥的最终交付门；内部由孵化转入养殖的累积负担只传递一次。 | `fao-goose-production`; `fao-leap-poultry-2016` |
| `boundary_manure` | 圈舍或牧场 | 记录实际贮存、放牧、外运及处理去向与路径特定排放；不得假定通用粪污路径。 | `ipcc-livestock-2019` |
| `boundary_shared` | 共享基础设施 | 识别跨节点或期间共享的孵化器、圈舍、水/能源系统和捕捉设备，并对每项实测负担只归属一次。 | `fao-leap-poultry-2016` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量基准 |
| --- | --- | --- | --- | --- | --- |
| `breeder` | 管理种鹅群并收集鹅蛋 | conditional | 运营种鹅群时纳入；否则使用外购鹅蛋数据集 | 按季节期间管理孵化鹅蛋的生物生产 | 每 kg 合格孵化鹅蛋 |
| `hatchery` | 孵化合格鹅蛋并产出雏鹅 | conditional | 运营孵化场时纳入，包括仅以雏鹅交付的路线 | 受管理的孵化、鹅蛋交接与孵化损失 | 每 kg 产出活雏鹅 |
| `rearing` | 育雏并养殖活鹅 | conditional | 农场交付较大日龄鹅路线 | 受管理的生物生产，按放牧/牧草或圈养路线调整清单 | 每 kg 离开养殖的活鹅 |
| `live_handover` | 捕捉并交付活鹅 | required | 选定的孵化场或农场最终交付路线 | 对已生产活鹅独立捕捉，不含屠宰或下游运输 | 每 kg 合格交付活鹅 |

种鹅季节、孵化批次和养殖周期分别建立时间索引与交接点。种鹅蛋转入孵化只承接一次种鹅负担；对外购鹅蛋，相应数量以供应商上游数据替代种鹅节点。活鹅捕捉独立于生产，因为它在交付门计量最终合格活鹅与捕捉损失，不重复计算种鹅、孵化或养殖负担。

### 过程：管理种鹅群并收集鹅蛋 (`breeder`)

#### 输入

##### 产品流

###### 种鹅饲料与外购牧草 (`breeder_feed`)

仅纳入跨边界的实测饲料；放牧牧草及相关土地管理须另有证据。

分母与范围要求：每 kg 合格孵化鹅蛋

原始数量及计算要求：交付量减库存变化及记录的饲料损失 原始采集分母类型：process_output。

- 选定流： 种鹅饲料与外购牧草 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_feed`
- 数量范围： 暂定饲料完整性筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 合格孵化鹅蛋
  - 基准： 每 kg 合格孵化鹅蛋
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 种鹅供水 (`breeder_water`)

按用途计量供给的饮水和清洁用水；牧场降雨不属于该产品交换。

分母与范围要求：每 kg 合格孵化鹅蛋

原始数量及计算要求：计量的净供水量 原始采集分母类型：process_output。

- 选定流： 供给水 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_utilities`
- 数量范围： 暂定用水对账筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg/kg 合格孵化鹅蛋
  - 基准： 每 kg 合格孵化鹅蛋
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转交孵化场的合格种鹅蛋 (`hatching_eggs`)

在种鹅场至孵化场或客户交接点计数、称量合格带壳鹅蛋；另记非孵化销售蛋与淘汰蛋。

分母与范围要求：每 kg 合格孵化鹅蛋

原始数量及计算要求：称重的合格孵化鹅蛋 原始采集分母类型：process_output。

- 选定流： 孵化用鹅蛋 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_birds_eggs`
- 数量范围： 合格鹅蛋产出归一化
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg 合格孵化鹅蛋
  - 基准： 每 kg 合格孵化鹅蛋
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `fao-leap-poultry-2016`

###### 独立销售的非孵化鹅蛋 (`sold_eggs`)

仅在另有用途的实际销售时，按称重批次记录；没有销售证据的淘汰蛋属废物。

分母与范围要求：每 kg 合格孵化鹅蛋

原始数量及计算要求：独立销售鹅蛋的称重质量 原始采集分母类型：process_output。

- 选定流： 其他带壳鹅蛋 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_birds_eggs`
- 数量范围： 暂定销售鹅蛋完整性筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 合格孵化鹅蛋
  - 基准： 每 kg 合格孵化鹅蛋
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 作为产品外运的可用种鹅粪肥 (`breeder_manure_export`)

仅纳入称重并有意交付使用的种鹅粪肥；留在牧场的粪污不属于该产品产出。

分母与范围要求：每 kg 合格孵化鹅蛋

原始数量及计算要求：称重并交付接收方的可用粪肥 原始采集分母类型：process_output。

- 选定流： 外运种鹅粪肥（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 数量范围： 暂定种鹅粪肥外运筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 合格孵化鹅蛋
  - 基准： 每 kg 合格孵化鹅蛋
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 淘汰蛋与死亡种鹅 (`breeder_losses`)

按实测质量、只数和处置去向记录淘汰蛋及种鹅死亡；不得凭假设把损失变为联产品。

分母与范围要求：每 kg 合格孵化鹅蛋

原始数量及计算要求：按去向记录的残余物和死亡质量 原始采集分母类型：process_output。

- 选定流： 送往处理的种鹅阶段残余物 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 数量范围： 暂定种鹅损失筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 合格孵化鹅蛋
  - 基准： 每 kg 合格孵化鹅蛋
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 送往处理的种鹅粪污 (`breeder_manure_waste`)

按质量与去向记录离开种鹅节点、进入处置或处理的粪污；排除已作为产品外运的可用粪肥和留在牧场的粪污。

分母与范围要求：每 kg 合格孵化鹅蛋

原始数量及计算要求：实测送往处理的粪污质量 原始采集分母类型：process_output。

- 选定流： 送往处理的种鹅粪污（UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 数量范围： 暂定种鹅粪污废物筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 合格孵化鹅蛋
  - 基准： 每 kg 合格孵化鹅蛋
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 种鹅粪污生物源甲烷排入空气 (`breeder_manure_ch4_air`)

仅对有记录的种鹅圈舍、贮存或放牧粪污路径及所选 IPCC 输入计算。

分母与范围要求：每 kg 合格孵化鹅蛋

原始数量及计算要求：依据种鹅粪污活动数据按路径特定 IPCC 方法计算 原始采集分母类型：process_output。

- 选定流： 生物源甲烷，排入空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位： Mass / kg
- 绑定： 固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 来源： `ipcc-livestock-2019`
- 数量范围： 暂定非负种鹅粪污生物源甲烷排入空气筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 合格孵化鹅蛋
  - 基准： 每 kg 合格孵化鹅蛋
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 种鹅粪污氧化亚氮排入空气 (`breeder_manure_n2o_air`)

仅对有证据的种鹅粪污路径采用相应直接或间接 N2O 方法输入；防止放牧土壤排放重复。

分母与范围要求：每 kg 合格孵化鹅蛋

原始数量及计算要求：依据采集粪污活动数据按路径特定 IPCC N2O 方法计算 原始采集分母类型：process_output。

- 选定流： 氧化亚氮，排入空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位： Mass / kg
- 绑定： 固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 来源： `ipcc-livestock-2019`
- 数量范围： 暂定非负种鹅粪污氧化亚氮排入空气筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 合格孵化鹅蛋
  - 基准： 每 kg 合格孵化鹅蛋
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 种鹅粪污氨排入空气 (`breeder_manure_nh3_air`)

仅在有种鹅粪污氨实测排放或另经审查的路径因子时纳入；UUID 仅标识身份而非排放因子。

分母与范围要求：每 kg 合格孵化鹅蛋

原始数量及计算要求：实测氨释放量；否则建模前须有经审查的路径方法 原始采集分母类型：process_output。

- 选定流： 氨，排入空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位： Mass / kg
- 绑定： 固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 数量范围： 暂定非负种鹅粪污氨排入空气筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 合格孵化鹅蛋
  - 基准： 每 kg 合格孵化鹅蛋
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：孵化合格鹅蛋并产出雏鹅 (`hatchery`)

#### 输入

##### 产品流

###### 进入孵化的种鹅蛋 (`incubated_eggs`)

称量并计数入孵鹅蛋，区分内部种鹅蛋转入与外购蛋，仅关联一次上游负担。

分母与范围要求：每 kg 产出活雏鹅

原始数量及计算要求：实际入孵鹅蛋称重质量 原始采集分母类型：process_output。

- 选定流： 孵化用鹅蛋 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_birds_eggs`
- 数量范围： 暂定孵化蛋投入筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： kg/kg 活雏鹅
  - 基准： 每 kg 产出活雏鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 孵化能源 (`incubator_energy`)

按实际能源载体和期间记录电力及燃料计量值，包括分配后的共享设施份额。

分母与范围要求：每 kg 产出活雏鹅

原始数量及计算要求：按载体计量的消耗量 原始采集分母类型：process_output。

- 选定流： 孵化能源 carrier （UUID 未解析）
- 流属性/单位： Energy / kWh or MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_utilities`
- 数量范围： 暂定孵化能源对账筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kWh/kg 活雏鹅
  - 基准： 每 kg 产出活雏鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 内部转移或出售的活雏鹅 (`goslings`)

计数和称量存活雏鹅；披露内部转养殖或孵化场销售，不得二者均作为最终产出。

分母与范围要求：每 kg 产出活雏鹅

原始数量及计算要求：实测活重及核对后的只数 原始采集分母类型：process_output。

- 选定流： 孵化场门口的活雏鹅 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_birds_eggs`
- 数量范围： 雏鹅产出归一化
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg 活雏鹅 produced
  - 基准： 每 kg 产出活雏鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `fao-leap-poultry-2016`

##### 废物流

###### 蛋壳、未孵化蛋与死亡雏鹅 (`hatch_residues`)

记录实测孵化残余物、死亡及实际处理去向，并与种鹅淘汰物分开。

分母与范围要求：每 kg 产出活雏鹅

原始数量及计算要求：按去向记录的残余物和死亡质量 原始采集分母类型：process_output。

- 选定流： 送往处理的孵化残余物 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 数量范围： 暂定孵化残余物筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 活雏鹅
  - 基准： 每 kg 产出活雏鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

### 过程：育雏与养殖活鹅 (`rearing`)

#### 输入

##### 产品流

###### 进入养殖的活雏鹅 (`rearing_goslings`)

以单次上游负担记录内部孵化转入或外购雏鹅的质量、只数、日龄和来源。

分母与范围要求：每 kg 离开养殖过程的活鹅

原始数量及计算要求：实测接收质量 原始采集分母类型：process_output。

- 选定流： 进入农场的活雏鹅 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_birds_eggs`
- 数量范围： 暂定投入质量筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kg/kg 离开养殖的活鹅
  - 基准： 每 kg 离开养殖过程的活鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 生长鹅的外购饲料与牧草 (`rearing_feed`)

分别记录饲料组成、外购质量、损失和放牧采食，以反映实际放牧或圈养系统。

分母与范围要求：每 kg 离开养殖过程的活鹅

原始数量及计算要求：交付饲料减库存变化及记录损失 原始采集分母类型：process_output。

- 选定流： 鹅饲料与外购牧草 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_feed`
- 数量范围： 暂定饲料完整性筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 离开养殖的活鹅
  - 基准： 每 kg 离开养殖过程的活鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 养殖供水 (`rearing_water`)

按实际供应和用途记录饮用及清洁用水；离网或未经处理水源另行说明。

分母与范围要求：每 kg 离开养殖过程的活鹅

原始数量及计算要求：向养殖过程供给的计量水量 原始采集分母类型：process_output。

- 选定流： 供给的工艺用水 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_utilities`
- 数量范围： 暂定用水完整性筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kg/kg 离开养殖的活鹅
  - 基准： 每 kg 离开养殖过程的活鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 育雏与圈舍能源 (`rearing_energy`)

按载体记录实际使用的热、电和燃料；放牧与圈养路线分别保留实际记录。

分母与范围要求：每 kg 离开养殖过程的活鹅

原始数量及计算要求：计量或发票记录的载体消耗量 原始采集分母类型：process_output。

- 选定流： 养殖能源载体 （UUID 未解析）
- 流属性/单位： Energy / kWh or MJ
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_utilities`
- 数量范围： 暂定能源完整性筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1000
  - 单位： kWh/kg 离开养殖的活鹅
  - 基准： 每 kg 离开养殖过程的活鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 待捕捉的活鹅 (`grown_geese`)

称量并计数生长活鹅；另行分类以活鹅出售的种鹅淘汰鹅。

分母与范围要求：每 kg 离开养殖过程的活鹅

原始数量及计算要求：进入捕捉过程的实测活重 原始采集分母类型：process_output。

- 选定流： 养殖出口的活家鹅 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_birds_eggs`
- 数量范围： 养殖产出归一化
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg 离开养殖的活鹅
  - 基准： 每 kg 离开养殖过程的活鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `fao-leap-poultry-2016`

###### 有意作为产品外运的粪肥 (`exported_manure`)

仅纳入实测且交付其他使用者的可用粪肥；否则保留实际场内或废物处理路径。

分母与范围要求：每 kg 离开养殖过程的活鹅

原始数量及计算要求：外运可售粪肥称重质量 原始采集分母类型：process_output。

- 选定流： 外运鹅粪肥 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 数量范围： 暂定粪肥外运筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 离开养殖的活鹅
  - 基准： 每 kg 离开养殖过程的活鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

###### 送往处理的死鹅与粪污 (`rearing_residues`)

按类别、质量、日期和去向记录死鹅及弃置粪肥；留在牧场的粪污不属外运废物。

分母与范围要求：每 kg 离开养殖过程的活鹅

原始数量及计算要求：按去向称重或记录的损失 原始采集分母类型：process_output。

- 选定流： 送往处理的养殖残余物 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 数量范围： 暂定残余物完整性筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 离开养殖的活鹅
  - 基准： 每 kg 离开养殖过程的活鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 实际粪污管理产生的对空气甲烷 (`manure_ch4_air`)

仅按记录的贮存或放牧路径及 IPCC 方法输入推算；不规定通用排放因子。

分母与范围要求：每 kg 离开养殖过程的活鹅

原始数量及计算要求：根据采集的粪污活动数据与所选路径因子计算 原始采集分母类型：process_output。

- 选定流： 生物源甲烷，排入空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位： Mass / kg
- 绑定： 固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 来源： `ipcc-livestock-2019`
- 数量范围： 暂定非负排放筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 离开养殖的活鹅
  - 基准： 每 kg 离开养殖过程的活鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 养殖粪污氧化亚氮排入空气 (`manure_n2o_air`)

依据有证据的养殖粪污管理和直接或间接 N2O 方法输入计算，排除种鹅及重复的放牧土壤份额。

分母与范围要求：每 kg 离开养殖的活鹅

原始数量及计算要求：依据养殖粪污活动数据按路径特定 IPCC N2O 方法计算 原始采集分母类型：process_output。

- 选定流： 氧化亚氮，排入空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位： Mass / kg
- 绑定： 固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 来源： `ipcc-livestock-2019`
- 数量范围： 暂定非负养殖粪污氧化亚氮排入空气筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 离开养殖的活鹅
  - 基准： 每 kg 离开养殖的活鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 养殖粪污氨排入空气 (`manure_nh3_air`)

仅纳入实测氨或单独审查的路径估算；不得借用 N2O 或 CH4 排放因子。

分母与范围要求：每 kg 离开养殖的活鹅

原始数量及计算要求：实测氨释放量；否则建模前须有经审查的路径方法 原始采集分母类型：process_output。

- 选定流： 氨，排入空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位： Mass / kg
- 绑定： 固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 数量范围： 暂定非负养殖粪污氨排入空气筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 100
  - 单位： kg/kg 离开养殖的活鹅
  - 基准： 每 kg 离开养殖的活鹅
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：捕捉并交付活鹅 (`live_handover`)

#### 输入

##### 产品流

###### 进入捕捉的活鹅 (`live_birds_to_catch`)

一个最终批次的投入为孵化场雏鹅或农场活鹅之一；先前负担仅转移一次。

分母与范围要求：每 kg 已交付的合格活鹅

原始数量及计算要求：核对后的只数乘实测平均活重 原始采集分母类型：reference_flow。

- 选定流： 进入生产者捕捉过程的活鹅 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_birds_eggs`
- 数量范围： 暂定捕捉质量平衡筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 10
  - 单位： kg/kg 合格活鹅
  - 基准： 每 kg 已交付的合格活鹅
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 向买方交付的合格活鹅 (`live_geese_handover`)

在实际生产孵化场或农场门口测量合格活重，并披露只数和类别。

参考产出的原始记录：实测合格活重 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 生产者交付的活家鹅
- 流属性/单位： Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_birds_eggs`
- 数量范围： 参考质量归一化
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg 参考产品
  - 基准： 每 kg 参考产品的合格活重
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `fao-leap-poultry-2016`

##### 废物流

###### 捕捉期间死亡或淘汰的鹅 (`capture_losses`)

按只数、质量和去向记录未售出的死亡或受伤鹅；可销售活淘汰鹅在独立交付时仍是产品。

分母与范围要求：每 kg 已交付的合格活鹅

原始数量及计算要求：按去向实测未售鹅的质量 原始采集分母类型：reference_flow。

- 选定流： 送往处理的捕捉损失 （UUID 未解析）
- 流属性/单位： Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议： `cp_losses_manure`
- 数量范围： 暂定捕捉损失筛查
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 10
  - 单位： kg/kg 合格活鹅
  - 基准： 每 kg 已交付的合格活鹅
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 所有路线 | 首先依据各自记录细分种鹅、孵化、养殖与捕捉过程；可直接归属的负担不再分配。 | `fao-leap-poultry-2016` |
| `allocation_outputs` | 鹅蛋、活鹅、独立采集的羽绒和外运粪肥 | 列出每一有意产出与交接点。不能细分时依据记录的物理因果关系分配；若无可辩护的物理关系，则用同期经济价值并披露价格与敏感性。残余物和处置废物若无独立用途及交付证据，不得获得产品抵扣。 | `fao-leap-poultry-2016` |
| `allocation_periods` | 种鹅及群体周期 | 将种鹅建立、产蛋季、孵化批次、养殖周期、更新和淘汰关联至受益群体；不得把同一负担重复归至内部转移和最终销售。 | `fao-goose-production`; `fao-leap-poultry-2016` |
| `allocation_shared` | 共享圈舍、孵化器与公用工程 | 按计量用量、容量天数或有记录的运行时间，把一项实测负担归至使用节点与服务期间，并保存分配键及份额。 | `fao-leap-poultry-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | 记录类型 | 原始字段 | 采集方法 | unit | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed` | `breeder`, `rearing` | 饲料与放牧 | 发票、库存和放牧记录 | 期初/期末饲料库存、交付量、牧草来源、放牧面积和天数、鹅群只数 | 地磅、饲料台账和放牧日志；原始汇总要求：交付量减库存变化和记录损失。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；鹅日；ha 日 | 每次交付和周期 | 完整种鹅或养殖群 | 所有圈舍和牧场 | 每参考流 | 发票、秤及牧场记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_utilities` | `breeder`, `hatchery`, `rearing` | 水与能源 | 仪表和燃料记录 | 期初/期末读数、能源载体、用量、节点和期间 | 仪表读数或发票；共享用量按记录的键分配；原始汇总要求：读数差、单位换算、只分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 水；kWh；MJ | 每个计量期间 | 所有运行节点和季节 | 所有仪表 | 每参考流 | 仪表图像和发票；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_birds_eggs` | all | 鹅蛋、活鹅与转移 | 鹅蛋批次与鹅群台账 | 按用途分类的鹅蛋只数/质量、孵化结果、期初/接收/销售/死亡鹅只数、抽样体重和交付门 | 每批称重计数并核对转移；原始汇总要求：只数平衡及类别特定平均质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; eggs; birds | 每批或每次流转 | 完整报告周期 | 所有生产者交付门 | 每参考流 | 批次表与校准秤；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_losses_manure` | all | 死亡、残余物与粪污路径 | 处置、粪污和排放监测日志 | 死亡质量/只数、鹅蛋残余物、粪污贮存/放牧/外运质量、去向、挥发性固体；若报告 NH3 则含实测量 | 称重或抽样，保留去向及排放监测记录；原始汇总要求：按来源与去向核对，仅用有依据的方法计算路径排放。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg；鹅日 | 每事件及期间 | 每个运行阶段 | 所有圈舍、牧场与处理场所 | 每参考流 | 收据、粪污分析、田间及监测日志；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_live_mass` | 活鹅转移 | 活重＝核对后只数×同日龄/类别实测平均质量；整批称重时直接使用实测值 | 只数、抽样体重与秤 | kg live mass and kg/bird | `fao-leap-poultry-2016` |
| `calc_stock` | 鹅群记录 | 期初＋接收＋孵化−销售−死亡−其他移出＝期末只数 | 鹅群流转记录 | 只数核对 | `fao-leap-poultry-2016` |
| `calc_eggs` | 种鹅产出 | 收集鹅蛋＝合格孵化蛋＋销售蛋＋淘汰蛋＋库存变化，按质量和只数核对 | 鹅蛋批次记录 | 核对后的鹅蛋产出 | `fao-goose-production` |
| `calc_manure` | 粪污路径 | 依据实际路径、采集活动数据及所选 IPCC 方法输入计算 CH4 和 N2O；NH3 仅在有实测或另经审查的路径因子时报告。流 UUID 不是因子。 | 粪污去向、鹅群数量、挥发性固体、管理期间及任何 NH3 监测值 | 路径特定排放 | `ipcc-livestock-2019` |
| `calc_shared` | 共享服务 | 按计量用量或记录的容量天数，将总服务量一次性分给各使用节点/期间 | 资产使用、使用者与期间 | 节点负担 | `fao-leap-poultry-2016` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 最终与内部转移的活鹅 | 逐批保留种属、日龄/类别、用途、质量、只数、状况与交付门。 | 鹅群及销售记录 |
| `dq_period` | 种鹅、孵化与养殖 | 将投入、产出、淘汰、更新和资产关联实际期间，披露不完整季节。 | 带日期的群体/资产记录 |
| `dq_complete` | 饲料、公用工程、损失与粪污 | 纳入所有运行节点和去向；记录遗漏及仪表覆盖。 | 核对表及场址图 |
| `dq_routes` | 放牧与圈养 | 用场址记录证明实际饲料、土地、粪污与公用工程差异，而非只用路线标签。 | 牧场、圈舍与粪污记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 最终产出 | 若缺少实测 kg、核对后只数、日龄/类别或单一声明的孵化场/农场生产者门，拒绝参考流；不得把按只数计量的 at-plant 候选用作质量参考流。 | `un-cpc-2025` |
| `validate_route` | Process map | 每个运行节点及放牧/圈养清单差异均需证据；同一内部批次不得同时计为孵化场与农场最终产出。 | `fao-goose-production`; `fao-leap-poultry-2016` |
| `validate_outputs` | 联产品与损失 | 按交接点核对活鹅、鹅蛋、任何独立采集羽绒、外运粪肥、死亡与残余物；记录明确分配并防止重复产出。 | `fao-leap-poultry-2016` |
| `validate_period` | 期间与共享资产 | 核实种鹅/资产服务时间、更新、淘汰、使用节点及归属键加总，避免重复负担。 | `fao-leap-poultry-2016` |
| `validate_manure` | 粪污路径 | 排放计算前核实实际去向与所选 IPCC 输入。 | `ipcc-livestock-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 活家鹅生产者门前景数据包 |
| downstream_use | 经审查后供过程和生命周期模型组装的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 在具体流身份匹配后，适用于有证据的孵化场雏鹅或农场较大日龄鹅路线 |
| excluded_use | 鹅肉、屠宰、鹅蛋作为参考产品、未经称重的只数转质量推断，或把候选 UUID 当作已证实身份 |
| required_metadata | 种属/品种、日龄/类别、只数、kg、用途、交付门、场址、期间、路线节点、饲料/放牧、粪污、产出分配及共享资产键 |
| required_quality_disclosure | 质量/只数核对、记录与期间缺口、暂定 Range 越界及未解析 UUID |
| update_trigger | 交付门、路线、粪污管理、CPC 边界、UUID 证据或已审查方法变更 |

## 11. 数据来源

| 来源 ID | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-2025` | `official_guidance` | [UN CPC 3.0 explanatory notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | Live goose category and meat exclusion |
| `fao-goose-production` | `handbook` | [FAO Goose Production](https://www.fao.org/4/y4359e/y4359e00.htm) | Breeder, hatching, brooding and growth route |
| `fao-leap-poultry-2016` | `official_guidance` | [FAO LEAP poultry supply-chain guidance](https://openknowledge.fao.org/handle/20.500.14283/i6421en) | Boundary, inventory, allocation and data quality |
| `ipcc-livestock-2019` | `method_factor` | [2019 IPCC refinement, Vol. 4 Ch. 10](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 粪污路径 calculation method |
