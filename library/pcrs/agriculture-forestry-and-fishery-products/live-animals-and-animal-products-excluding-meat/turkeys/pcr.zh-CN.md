---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.turkeys
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 活火鸡

## 1. 范围与适用性

本 PCR 适用于生产者孵化场或饲养／种用农场门交付的活火鸡。一日龄雏火鸡与较大日龄活火鸡为互斥的最终产品路线。须申报只数、抽样活重、日龄／类别、适用时性别、群批次及转移状态。火鸡肉、屠宰、门后货运和作为参考产品独立出售的种蛋不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.turkeys` |
| classification_refs | CPC 3.0 `02152`，活火鸡 |
| covered_products | 生产者孵化场门一日龄活雏火鸡；生产者农场门较大日龄活火鸡 |
| excluded_products | 鸡、独立出售的火鸡种蛋、屠宰火鸡和火鸡肉 |
| representative_product | 声明生产者交付门及日龄类别的活火鸡 |
| production_route | 自产或外购种蛋→孵化场雏火鸡；或外购／内部转移雏火鸡→饲养→捕捉 |
| market_state | 活体、未加工；声明日龄、交付门、只数及活重 |

受管理生物生产是上层活动。孵化路线以蛋为起点，生长路线以雏火鸡为起点；过程拓扑、投入、产率公式及校验不同。纵向一体化生产者可经营两个阶段，但内部雏火鸡转移只入账一次，不能将同一只鸟记为两次最终销售。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产者孵化场门或农场门的活火鸡 |
| How much | 净活重 1 kg |
| How well | 可售活鸟；申报物种、日龄／类别、只数及抽样质量 |
| How long or cycle | 孵化批次或饲养群，并关联种禽和共用资产期间 |
| reference_flow_link | `reference_product_handover` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 孵化场或农场门活火鸡，日龄类别须申报 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 火鸡物种；一日龄或较大日龄路线；孵化场／农场门；只数；抽样活重；日龄／类别；群批次；来源；适用时性别；死亡；转移状态 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

两个已核实的路线输出 UUID 均不能代表宽口径参考流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `m_live_mass` | 最终活鸟 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按日龄／类别以可售只数乘抽样活重，并与称重单核对。 |
| `m_eggs` | 种蛋 | 只数和质量 | 枚、kg | 分别保留接收、孵出、淘汰及未孵出只数，以抽样蛋重换算。 |
| `m_feed` | 饲料 | 原样质量与干物质 | kg | 用观测含水率换算，保留饲料来源。 |
| `m_emissions` | 大气排放 | 污染物质量 | kg | 区分物质、受纳介质、粪污途径及因子层级。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

孵化路线以承担上游负荷的种蛋开始，包括孵化、出雏、挑选及孵化场门交付。只有未同时计入外购蛋负荷时，企业自有种禽群才作为上游供蛋节点。较大日龄路线以承担既有孵化负荷的雏火鸡开始，包括饲料、水、舍饲、垫料／粪污、健康管理、生长及独立捕捉至农场门。捕捉是独立采收节点，因为站立禽群在此变成已计数、称重并交付的可售活鸟，而非继续生长或屠宰。淘汰、死亡及未出售垫料为损失或废物。只有实际独立转移时，出售的粪肥、种蛋及淘汰种禽才为目标共产品。孵化器、建筑、能源计量及设备在消费节点及期间之间只分摊一次。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 孵化场接收的合格种蛋或饲养场接收的活雏火鸡；如自产种蛋还需期初种禽群 |
| starting_condition_role | 带既有负荷的上游生物存量或采购中间品，不是另一笔最终活火鸡销售 |
| product_classification_scope | CPC 3.0 `02152` 活火鸡 |
| recursive_input_rule | 同类活雏火鸡投入保留前段负荷；内部转移不是独立最终产出 |
| upstream_dataset_requirement | 种蛋／雏火鸡、饲料、能源、水、垫料及处理服务的供应证据或披露缺口 |
| disclosure | 路线、交付门、日龄／类别、批次、存栏变化、死亡、淘汰、粪污去向、共用资产分摊及未解析身份 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_routes` | 全部活鸟 | 选定孵化场一日龄或农场较大日龄最终交付门；前序阶段只转移一次。 | `unsd-cpc-2025`; `fao-leap-poultry-2016` |
| `b_hatchery` | 雏火鸡 | 纳入合格种蛋、孵化、出雏、损失及孵化场发货。 | `fao-leap-poultry-2016` |
| `b_rearing` | 较大日龄活鸟 | 纳入接收雏火鸡、饲料、水、舍饲、粪污、死亡及活体捕捉。 | `fao-leap-poultry-2016`; `ipcc-livestock-2019` |
| `b_exclusion` | 生产者交付门 | 排除屠宰、肉类加工及门后货运；仅在边界内实际采购时纳入进场服务。 | `fao-leap-poultry-2016` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `breeder` | 一体化种禽供蛋 | 条件性 | 生产者自行经营种禽阶段 | 受管理繁殖及产蛋 | 每种禽期间合格种蛋 |
| `hatchery` | 孵化和出雏 | conditional | 一日龄最终路线或一体化前序 | 受管理胚胎发育与采收 | 每孵化批次可售雏火鸡 |
| `rearing` | 火鸡受管理生长 | conditional | 较大日龄活鸟路线 | 生物生长及粪污管理 | 每群批次站立活禽 |
| `catching` | 活体捕捉及农场交付 | conditional | 较大日龄活鸟路线 | 独立采收及最终发货 | 每捕捉批次可售活重 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

### 过程：一体化种禽供蛋（`breeder`）

#### 输入

##### 产品流

###### 种禽饲料和物资（`breeder_feed`）

按种禽期间记录饲料及饲养物资；形成数据集时分开实际物料种类。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：按种禽期间计量发放量 原始采集分母类型：process_output。

- 选定流：种禽饲料及饲养物资
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：暂定种禽投入完整性筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 合格种蛋
  - 基准：宽泛初始筛查，后以种禽记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种禽供应水（`breeder_water`）

按用途分别记录种禽饮水及清洁用水；功能分组由前景记录确定。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：按用途计量或记录水量 原始采集分母类型：process_output。

- 选定流：种禽群供应水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：暂定种禽用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：m3/kg 合格种蛋
  - 基准：宽泛初始筛查，后以用途记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种禽舍能源（`breeder_energy`）

按载体和种禽期间记录供暖、通风及照明。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：计量或因果分摊的载体用量 原始采集分母类型：process_output。

- 选定流：种禽舍供应能源
- 流属性/单位：Energy / kWh、MJ 或燃料原单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：暂定种禽能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh 等效/kg 合格种蛋
  - 基准：宽泛初始筛查，非默认因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格种蛋（`breeder_eggs`）

孵化用合格蛋只向孵化场转移一次；独立出售的蛋属于另一产品。

分母与范围要求：每种禽期间

原始数量及计算要求：合格蛋枚数乘抽样质量 原始采集分母类型：process_output。

- 选定流：新鲜火鸡种蛋
- 流属性/单位：Mass / kg，并记枚数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：合格蛋平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 总采集蛋
  - 基准：合格蛋占总采集蛋的质量比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 淘汰种蛋（`breeder_rejects`）

按原因及实际去向记录破损或不合格蛋，不把它们算作雏火鸡。

分母与范围要求：每种禽期间

原始数量及计算要求：称量淘汰蛋或以枚数乘抽样质量 原始采集分母类型：process_output。

- 选定流：淘汰火鸡蛋
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：淘汰蛋平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 总采集蛋
  - 基准：淘汰蛋占总采集蛋的质量比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

###### 种禽粪污甲烷排放至空气（`breeder_ch4`）

这里只计算已识别种禽粪污贮存途径的生物源 CH4。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：分途径挥发性固体与因子计算 原始采集分母类型：process_output。

- 选定流：Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定种禽 CH4 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg CH4/kg 合格种蛋
  - 基准：宽泛初始筛查，非排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种禽粪污氧化亚氮排放至空气（`breeder_n2o`）

种禽粪污氮途径与饲养禽群粪污途径分开核算。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：分途径氮与因子计算 原始采集分母类型：process_output。

- 选定流：Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定种禽 N2O 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/kg 合格种蛋
  - 基准：宽泛初始筛查，非排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种禽粪污氨排放至空气（`breeder_nh3`）

仅在已识别种禽粪污途径及相容因子基准下计算 NH3。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：分途径氮挥发计算 原始采集分母类型：process_output。

- 选定流：Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定种禽 NH3 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg NH3/kg 合格种蛋
  - 基准：宽泛初始筛查，非排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：孵化和出雏（`hatchery`）

#### 输入

##### 产品流

###### 接收种蛋（`hatching_eggs`）

供应商或一体化种禽阶段的负荷只能计入一次。

分母与范围要求：每 kg 可售雏火鸡活重

原始数量及计算要求：合格接收枚数和抽样质量 原始采集分母类型：process_output。

- 选定流：孵化场接收的新鲜火鸡种蛋
- 流属性/单位：Mass / kg，并记枚数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_hatchery`
- 数量范围：暂定种蛋接收筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 可售雏火鸡
  - 基准：宽泛初始筛查，后以孵化记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 孵化能源（`incubation_energy`）

记录实际电力及燃料载体，包括共用仪表分摊。

分母与范围要求：每 kg 可售雏火鸡

原始数量及计算要求：计量或分摊的载体用量 原始采集分母类型：process_output。

- 选定流：孵化能源载体
- 流属性/单位：Energy / kWh、MJ 或燃料原单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_hatchery`
- 数量范围：暂定孵化能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh 等效/kg 可售雏火鸡
  - 基准：宽泛初始筛查，非默认因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 孵化场清洁用水（`hatchery_water`）

仅在孵化场实际使用时纳入供应的过程清洁用水。

分母与范围要求：每 kg 可售雏火鸡

原始数量及计算要求：计量的供应水量 原始采集分母类型：process_output。

- 选定流：供应给孵化场的过程水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_hatchery`
- 数量范围：暂定用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：m3/kg 可售雏火鸡
  - 基准：宽泛初始筛查，后以仪表记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可售一日龄雏火鸡（`day_old_poults`）

在孵化场门清点并称量活的合格雏火鸡；转入内部饲养不是第二次最终销售。

分母与范围要求：每孵化批次，最终路线产品再归一化至 1 kg

原始数量及计算要求：合格只数乘抽样活重 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：孵化场门一日龄雏火鸡 `f836d3cf-2f72-4d00-900d-d6e748a8c6f2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_hatchery`
- 数量范围：出雏只数约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：只/枚合格种蛋
  - 基准：每枚合格种蛋最多一只可售雏火鸡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 孵化残余（`hatch_residues`）

按物质身份及处理去向区分未孵出蛋、蛋壳和不合格雏火鸡。

分母与范围要求：每孵化批次

原始数量及计算要求：按去向称量或以只数换算残余质量 原始采集分母类型：process_output。

- 选定流：孵化残余及不合格雏火鸡
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_hatchery`
- 数量范围：暂定残余筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 接收种蛋及孵化生物量
  - 基准：暂定残余比例，仍须逐项平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：火鸡受管理生长（`rearing`）

#### 输入

##### 产品流

###### 接收雏火鸡（`received_poults`）

记录外购或内部转移雏火鸡，并保留此前孵化场负荷。

分母与范围要求：每 kg 可售较大日龄活鸟

原始数量及计算要求：接收只数乘抽样活重 原始采集分母类型：process_output。

- 选定流：饲养用活雏火鸡
- 流属性/单位：Mass / kg，并记只数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing`
- 数量范围：暂定雏火鸡投入筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 可售较大日龄活鸟
  - 基准：宽泛初始筛查，后以群记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲养饲料（`rearing_feed`）

按生长阶段保留配方、来源、原样质量和干物质。

分母与范围要求：每 kg 可售较大日龄活鸟

原始数量及计算要求：发放饲料减计量退料，再按含水率换算 原始采集分母类型：process_output。

- 选定流：火鸡饲料及牧草
- 流属性/单位：Mass / kg 干物质
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing`
- 数量范围：暂定饲料转化筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 干物质/kg 活鸟
  - 基准：宽泛初始筛查，后以配方记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的饲养用水（`rearing_water`）

在记录中区分饮水与清洁用水；按实际用途决定具体功能分组。

分母与范围要求：每 kg 可售较大日龄活鸟

原始数量及计算要求：按用途计量或记录用水 原始采集分母类型：process_output。

- 选定流：火鸡饲养供应水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing`
- 数量范围：暂定用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：m3/kg 活鸟
  - 基准：宽泛初始筛查，后以用途记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 舍饲能源（`rearing_energy`）

按载体和群批次记录供暖、通风及照明的电力与燃料。

分母与范围要求：每 kg 可售较大日龄活鸟

原始数量及计算要求：计量或分摊的载体用量 原始采集分母类型：process_output。

- 选定流：火鸡舍饲能源
- 流属性/单位：Energy / kWh、MJ 或燃料原单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing`
- 数量范围：暂定舍饲能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh 等效/kg 活鸟
  - 基准：宽泛初始筛查，非默认因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 站立活禽群（`standing_flock`）

计数站立禽群并内部转移至捕捉，不视为第二次最终销售。

分母与范围要求：每饲养群批次

原始数量及计算要求：站立只数乘抽样活重 原始采集分母类型：process_output。

- 选定流：捕捉前站立活火鸡
- 流属性/单位：Mass / kg，并记只数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing`
- 数量范围：存活只数约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：只/只接收雏火鸡
  - 基准：站立禽只数比例，考虑已记录转移
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 死亡及清出垫料（`rearing_residues`）

按去向区分尸体及垫料／粪污；独立出售的粪肥需另作共产品决定。

分母与范围要求：每饲养群批次

原始数量及计算要求：称量物料及按只数换算尸体质量 原始采集分母类型：process_output。

- 选定流：火鸡死亡及清出垫料／粪污
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing`
- 数量范围：暂定残余筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 可售活鸟
  - 基准：宽泛初始筛查，区分出售粪肥
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 粪污甲烷排放至空气（`manure_ch4`）

仅对已识别的饲养粪污贮存途径计算生物源 CH4。

分母与范围要求：每 kg 可售较大日龄活鸟

原始数量及计算要求：分途径挥发性固体与因子计算 原始采集分母类型：process_output。

- 选定流：Methane, biogenic, to air `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定 CH4 筛查，非排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg CH4/kg 活鸟
  - 基准：宽泛初始筛查，后以分途径计算值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污氧化亚氮排放至空气（`manure_n2o`）

仅根据已识别的粪污氮途径及因子层级核算 N2O。

分母与范围要求：每 kg 可售较大日龄活鸟

原始数量及计算要求：分途径氮与排放因子计算 原始采集分母类型：process_output。

- 选定流：Nitrous oxide, to air `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定 N2O 筛查，非排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/kg 活鸟
  - 基准：宽泛初始筛查，后以分途径计算值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污氨排放至空气（`manure_nh3`）

只有采用相容的粪污途径计算时才记录挥发 NH3。

分母与范围要求：每 kg 可售较大日龄活鸟

原始数量及计算要求：分途径氮与挥发计算 原始采集分母类型：process_output。

- 选定流：Ammonia, to air `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定 NH3 筛查，非排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg NH3/kg 活鸟
  - 基准：宽泛初始筛查，后以分途径计算值替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：活体捕捉及农场交付（`catching`）

#### 输入

##### 产品流

###### 接收待捕禽群（`catching_flock`）

只接收一次带有饲养负荷的内部转移站立禽群。

分母与范围要求：每捕捉批次

原始数量及计算要求：站立只数及抽样活重 原始采集分母类型：process_output。

- 选定流：进入捕捉的站立活火鸡
- 流属性/单位：Mass / kg，并记只数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_catching`
- 数量范围：捕捉转移只数约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：只/只站立禽
  - 基准：捕捉只数比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门可售较大日龄活火鸡（`farm_live_turkeys`）

在屠宰或出场运输之前于农场门计数、称量活体未加工火鸡。

分母与范围要求：每捕捉批次，最终路线产品再归一化至 1 kg

原始数量及计算要求：可售只数乘抽样活重 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：农场门活体未加工火鸡 `b8c33c48-06d3-402e-9ef7-391ddec1761b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_catching`
- 数量范围：可售捕捉只数约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：只/只站立禽
  - 基准：可售只数占站立禽群比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 捕捉损失（`catching_losses`）

按实际去向记录捕捉后不合格或死亡火鸡。

分母与范围要求：每捕捉批次

原始数量及计算要求：观察的损失只数乘抽样质量或直接称量 原始采集分母类型：process_output。

- 选定流：不合格火鸡捕捉损失
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_catching`
- 数量范围：捕捉损失只数约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：只/只站立禽
  - 基准：不合格只数占站立禽群比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 孵化场或农场门活火鸡，日龄类别须申报（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `day_old_poults`, `farm_live_turkeys` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`day_old_poults`, `farm_live_turkeys`

必需产品实例限定项：火鸡物种；一日龄或较大日龄路线；孵化场／农场门；只数；抽样活重；日龄／类别；群批次；来源；适用时性别；死亡；转移状态

- 选定流：孵化场或农场门活火鸡，日龄类别须申报（实际生产者交付关联）
- 流属性 / 单位：质量 / kg
- 数量规则：使用与关联来源行核对的同批实测合格数量，仅对声明参考流归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 数据特异性：场址特异（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reference_handover`

- 数量范围：归一化后的确切身份核对，不是生产产率默认值
  - 范围角色：质量检查边界（`qa_guardrail`）
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - 基准：声明参考数量；输入与输出为同一交付台账中的同一实际合格产品
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 孵化场或农场门活火鸡，日龄类别须申报 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`day_old_poults`, `farm_live_turkeys`

必需产品实例限定项：火鸡物种；一日龄或较大日龄路线；孵化场／农场门；只数；抽样活重；日龄／类别；群批次；来源；适用时性别；死亡；转移状态

- 选定流：孵化场或农场门活火鸡，日龄类别须申报
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：计算值（`calculated_value`）
- 数据特异性：场址特异（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reference_handover`

- 数量范围：归一化后的确切身份核对，不是生产产率默认值
  - 范围角色：质量检查边界（`qa_guardrail`）
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - 基准：声明参考数量；输入与输出为同一交付台账中的同一实际合格产品
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_outputs` | 种禽、孵化和饲养 | 列出出售种蛋、雏火鸡、较大日龄鸟、淘汰种禽和外售粪肥及其交付门；淘汰蛋、蛋壳、死亡和未售垫料为损失／废物。 | `fao-leap-poultry-2016` |
| `a_allocation` | 独立共产品 | 优先采用有证据的物理因果关系，否则声明质量或经济分配基准，匹配期间产量／价格并披露敏感性。 | `fao-leap-poultry-2016` |
| `a_period` | 种禽年度和禽群 | 将投入、资产、存栏变化、死亡及产出关联至种禽年度、孵化批次和饲养群；替换种禽及淘汰种禽只分配一次。 | `fao-leap-poultry-2016` |
| `a_shared` | 共用建筑、孵化器和仪表 | 按实测使用或有证据的容量时间分配至全部消费节点／期间；各份额合计为原始一份负荷。 | `fao-leap-poultry-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_breeder` | `breeder` | 饲料、合格／淘汰蛋、存栏 | 种禽台账 | 存栏；饲料；蛋枚数／质量；淘汰；淘汰种禽；期间 | 农场日志及秤；原始汇总要求：按期间汇总，分配至合格蛋及上市共产品。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只、kg | 每日／期间 | 完整种禽期间 | 一体化种禽场 | 每参考流 | 签署的存栏／蛋平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_breeder_manure` | `breeder` | CH4、N2O、NH3 | 种禽粪污途径 | 禽群存栏；挥发性固体；排泄氮；途径份额；因子层级 | 粪污记录及分途径计算；原始汇总要求：每污染物及途径只计算一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、比例 | 种禽期间 | 完整种禽和粪污期间 | 一体化种禽场 | 每参考流 | 投入、因子及去向记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_hatchery` | `hatchery` | 种蛋、能源、雏禽、残余 | 孵化批次 | 接收；来源；入孵／出孵日；仪表；水；结果只数；抽样质量 | 日志、仪表及秤；原始汇总要求：按批次汇总，以样本换算只数。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 枚／只、kg、kWh、m3 | 每批次 | 孵化至出雏 | 生产者孵化场 | 每参考流 | 签署的孵化平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_rearing` | `rearing` | 雏禽、饲料、水、能源、站立禽群、残余 | 群台账 | 来源／只数；配方／水分；仪表；死亡；存栏；垫料去向 | 单据、仪表、日志及秤；原始汇总要求：按物料／期间汇总，共用使用只分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只、kg、m3、kWh | 每日／群 | 完整生长群 | 生产农场 | 每参考流 | 发票、仪表及存栏平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | `rearing` | CH4、N2O 和 NH3 | 粪污途径 | 挥发性固体；排泄氮；贮存／沉积；途径份额；因子层级 | 记录及相容 IPCC 计算；原始汇总要求：分别计算污染物与途径。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、比例 | 群／期间 | 完整粪污期间 | 生产农场 | 每参考流 | 因子及投入记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_catching` | `catching` | 站立、可售、损失 | 发货批次 | 站立／可售／损失只数；抽样质量；交付门；时间 | 发货清点及称重；原始汇总要求：只数×抽样质量，核对一项最终输出。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只、kg | 每发货 | 捕捉至农场门 | 生产农场 | 每参考流 | 称重单及签收；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_mass` | 活鸟 | 按日龄／类别只数×代表性抽样质量 | 只数、抽样重量、路线 | kg 活体产出 | `mass-balance-identity` |
| `c_hatch` | 孵化场 | 合格种蛋＝可售＋不合格＋未孵出＋已记录其他结局，按只数核对 | 孵化台账 | 孵化只数平衡 | `mass-balance-identity` |
| `c_cohort` | 饲养 | 期初＋接收－死亡－发货＝期末只数，内部转移单列 | 群台账 | 活体存栏平衡 | `mass-balance-identity` |
| `c_manure` | 排放 | 按不重叠粪污挥发性固体及氮途径和因子层级计算 CH4、N2O 与 NH3 | 挥发性固体、氮、途径份额、因子 | kg CH4、N2O 与 NH3 | `ipcc-livestock-2019` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_route` | 参考流及最终产出 | 明确一日龄／孵化场或较大日龄／农场路线及唯一最终交付门 | 发货及接收单 |
| `q_count_mass` | 鸟与蛋 | 保留只数、日龄／类别、样本量及抽样质量 | 秤及计数日志 |
| `q_predecessor` | 种蛋／雏禽 | 追踪采购或一体化先前负荷，不重复转移 | 供应商数据集或内部台账 |
| `q_period` | 种禽与共用资产 | 核对期初／期末存栏、死亡、服务期间与份额 | 期间台账 |
| `q_fate` | 废物与共产品 | 记录独立出售产出及每种残余去向 | 转移／处理记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_route` | 所有最终活鸟 | 拒绝日龄／交付门不明的混合；路线 UUID 必须匹配精确产出，宽参考保持未解析。 | `unsd-cpc-2025` |
| `v_hatch` | 孵化场 | 核对种蛋投入及全部孵化结局；每枚合格蛋最多一只可售雏禽。 | `mass-balance-identity` |
| `v_cohort` | 饲养／捕捉 | 核对雏禽接收、死亡、内部站立禽群转移、最终发货及活重。 | `mass-balance-identity` |
| `v_attribution` | 共产品及共用期间 | 要求全部目标产出交付门、分配基准、种禽／群期间；资产及内部鸟不得重复计负荷。 | `fao-leap-poultry-2016` |
| `v_manure` | 大气排放 | 检查物质、空气介质、不重叠粪污途径、因子层级及期间。 | `ipcc-livestock-2019` |
| `v_flow_identity` | 水和能源 | 待确认产品投入只按实际用水功能和能源载体解析到核实的具体 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产者门活火鸡前景数据集 |
| downstream_use | 用于 process 和 lifecyclemodel 的 secondary_dataset、background_dataset |
| allowed_use | 已声明路线、日龄、交付门及活体状态且前序负荷完整 |
| excluded_use | 火鸡肉、屠宰、未标识混合路线、独立出售种蛋或门后货运 |
| required_metadata | 路线、生产者、交付门、日龄／类别、只数、抽样重量、群批次、种禽期间、死亡、前序转移、共用资产 |
| required_quality_disclosure | 覆盖率、分配、抽样、前序阶段缺口、粪污因子及未解析身份 |
| update_trigger | 路线、供应商、出雏率、舍饲、粪污或产出组合改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | [CPC 3.0 解释说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 活火鸡类别 |
| `fao-leap-poultry-2016` | official_guidance | [FAO LEAP 禽类供应链指南](https://openknowledge.fao.org/handle/20.500.14283/i6421en) | 阶段边界、数据及分配 |
| `ipcc-livestock-2019` | method_factor | [IPCC 2019 修订版第四卷第十章](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 粪污排放 |
| `mass-balance-identity` | method_factor | 声明过程边界内的只数及质量守恒 | 存栏、蛋及捕捉平衡 |
