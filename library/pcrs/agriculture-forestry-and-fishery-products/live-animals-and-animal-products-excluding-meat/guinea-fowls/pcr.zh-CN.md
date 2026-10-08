---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.guinea-fowls
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 活珍珠鸡

## 1. 范围与适用性

本 PCR 覆盖活体家养珍珠鸡，包括生产者孵化场的雏珍珠鸡及生产农场门较大日龄活鸟。应记录实际日龄／类别、只数、抽样活重、禽群、路线及交付门。鸡、珍珠鸡肉、屠宰、作为参考产品的带壳蛋及交付门后处理均排除。代孵母鸡或外包孵化属于采购前序阶段，不能无证据地写成农场自有孵化。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.guinea-fowls` |
| classification_refs | CPC 3.0 `02155`，珍珠鸡 |
| covered_products | 生产者孵化场门的活雏珍珠鸡；生产农场门较大日龄活珍珠鸡 |
| excluded_products | 作为参考产品的珍珠鸡蛋；死禽；肉、胴体及屠宰制品 |
| representative_product | 声明生产者交付门的某一活珍珠鸡路线 |
| production_route | 一体化时纳入种禽供蛋与孵化／雏禽选择；或采购雏禽后育雏／生长及活体捕捉 |
| market_state | 活体、未加工；声明日龄、交付门和状态 |

受管理生物生产是上层活动。孵化场与饲养路线的起始生物对象分别是种蛋和雏禽，过程拓扑、能源／饲料类别、只数平衡及校验也不同。对同一只鸟，两条最终参考路线互斥；一体化阶段可作为内部转移共存。自由放养与舍饲可以在同一禽群共存；实际饲料来源、用水、舍饲能源、捕食／死亡和粪污沉积记录决定路线差异，不能套用通用默认值。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产者孵化场或农场门的活珍珠鸡 |
| How much | 实测净活重 1 kg |
| How well | 活体可售；按日龄／类别提供雏禽或较大日龄鸟的只数与抽样质量 |
| How long or cycle | 孵化批次或饲养群，关联种禽、替换和共用资产期间 |
| reference_flow_link | `reference_product_handover` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 生产者孵化场或农场门活珍珠鸡，声明路线及日龄 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Numida meleagris；孵化场雏禽或较大日龄农场鸟；交付门；日龄／类别；只数；活重样本；禽群；死亡；种禽／雏禽来源；适用时性别；自由放养或舍饲方式 |

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

农场门产品 UUID 不能代替同时覆盖孵化场与农场门的宽口径参考流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `m_live` | 可售活鸟 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按日龄／类别及交付门以计数乘代表性抽样活重；保留称重单核对。 |
| `m_eggs` | 种蛋及孵化结果 | 枚数与质量 | 枚、kg | 区分合格、淘汰、孵出、无活力及转移枚数；仅以抽样蛋重换算。 |
| `m_feed` | 饲料 | 原样及干物质质量 | kg | 分别记录实测含水率、放养／牧草估算和采购饲料。 |
| `m_manure` | 粪污排放 | 指定污染物质量 | kg CH4、N2O 或 NH3 | 区分污染物、空气介质、沉积／贮存途径、期间及方法层级。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

孵化路线从带有上游种禽负荷的合格珍珠鸡种蛋开始，纳入孵化、出雏／选择、损失处理及雏禽发货。种禽一体化时，单列其禽群年度饲料、水、舍饲、产蛋、淘汰及粪污；此时不能再叠加外购蛋负荷。较大日龄路线从带供应商或内部孵化负荷的雏禽开始，纳入育雏／生长、饲料、供应水、舍饲、健康管理、死亡、垫料／粪污及农场交付时独立的活体捕捉。捕捉有别于生长，因为站立禽群在此被计数、称重并分为可售活鸟和捕捉损失。屠宰、肉加工及交付门后货运不在范围内。独立转移的种蛋、淘汰种禽及可用粪肥需要明确目标产出分类；未出售淘汰品和死亡为废物。按消费节点与服务期间一次性分摊共用孵化器、禽舍、供热及供水设备。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 孵化场接收的种蛋或饲养农场接收的雏禽；仅在一体化时包括期初种禽群 |
| starting_condition_role | 带前序负荷的采购或内部转移生物起始存量 |
| product_classification_scope | CPC 3.0 `02155`，活珍珠鸡 |
| recursive_input_rule | 同类活雏禽投入保留前序负荷，不再算作第二笔最终销售 |
| upstream_dataset_requirement | 种蛋／雏禽、饲料、能源、水、垫料、健康物资和外部处理的来源数据集，或披露缺口 |
| disclosure | 生产者交付门、雏禽／较大日龄路线、只数／质量、种禽及禽群期间、放养／舍饲份额、死亡、损失、粪污去向、分配及未解析 UUID |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_product` | 最终活体产出 | 纳入已声明生产者孵化场或农场门的活 Numida meleagris，不纳入肉或蛋。 | `unsd-cpc-2025`; `fao-poultry-species` |
| `b_hatch` | 孵化场 | 纳入合格蛋、孵化、孵化结局及活雏发货；非自营的代孵／外包孵化作为上游负荷。 | `fao-small-poultry` |
| `b_growth` | 较大日龄活鸟 | 纳入接收雏禽、实际放养／舍饲管理、饲喂、水、健康、粪污／死亡及活体捕捉。 | `fao-small-poultry`; `fao-guinea-field-study`; `ipcc-livestock-2019` |
| `b_exclude` | 生产者交付门 | 排除屠宰、肉加工及交付门后的运输。 | `fao-leap-poultry-2016` |
| `reference_handover_linkage` | 实际参考产品边界 | reference_handover 是来源行已经表示的同一实际生产者交付，不得延长交付门，或增加加工、捕获、储存、运输、服务及资本负担。单位过程投影保留实际运作的阶段参考；交付记录可以是最终前景数据包的边界接口，而非虚构独立操作。选择一个实际且限定完整的路线／产出分层，将匹配来源及输入追溯为内部移交，仅暴露一次合格参考产品。若来源已经在本交付门结束，应拆分其已有交付核算职责，不能再次计数。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `breeder` | 一体化珍珠鸡种禽群 | conditional | 企业自营种禽阶段 | 生物繁殖与禽群年度分摊 | 每种禽期间合格蛋及出售淘汰种禽 |
| `hatchery` | 孵化和雏禽选择 | conditional | 生产者孵出雏禽或经营一体化前序 | 受管理发育及出雏采收 | 每孵化批次可售活雏禽 |
| `growout` | 雏禽育雏和生长 | conditional | 较大日龄活鸟最终路线 | 受管理生物生长及粪污 | 按日龄／群批次站立禽群 |
| `capture` | 活体捕捉及农场发货 | conditional | 较大日龄活鸟最终路线 | 独立采收及最终交付 | 可售只数及活重 |
| `reference_handover` | 实际生产者参考产品交付 | required | 每个前景数据包选择一个实际路线、状态及生产者交付门 | 同一实际边界交付只记录一次；为关联／核算职责，不增加处理或流通 | 声明交付门的 1 kg 合格产品 |

### 过程：一体化珍珠鸡种禽群（`breeder`）

#### 输入

##### 产品流

###### 种禽饲料及牧草（`breeder_feed`）

按种禽类别和期间记录采购饲料及受管理牧草，区分干物质。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：发放配方及有记录方法的牧草摄入 原始采集分母类型：process_output。

- 选定流：珍珠鸡种禽饲料及牧草
- 流属性/单位：Mass / kg 干物质
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：暂定种禽饲料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 干物质/kg 合格蛋
  - 基准：宽泛首轮检查，后以禽群记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种禽供应水（`breeder_water`）

记录实际饮水及饲养用水；功能分组由用途记录决定。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：按用途计量或报告的供应水 原始采集分母类型：process_output。

- 选定流：珍珠鸡种禽供应水
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
  - 单位：m3/kg 合格蛋
  - 基准：宽泛首轮检查，按用途记录确定组别
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种禽舍能源（`breeder_energy`）

记录受管理种禽舍实际照明和供热载体，按期间分摊共用仪表。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：仪表计量或有证据的容量时间分摊 原始采集分母类型：process_output。

- 选定流：珍珠鸡种禽舍供应能源
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
  - 单位：kWh 等效/kg 合格蛋
  - 基准：宽泛初始筛查，非默认因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 选出的种蛋（`breeder_eggs`）

符合申报孵化接收标准的蛋只向孵化场转移一次；独立出售的蛋是共产品。

分母与范围要求：每种禽期间

原始数量及计算要求：合格蛋枚数乘抽样质量 原始采集分母类型：process_output。

- 选定流：新鲜珍珠鸡种蛋
- 流属性/单位：Mass / kg，并记枚数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：种蛋接收只数平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：合格蛋/采集蛋
  - 基准：合格蛋不超过总采集蛋
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`count-balance-identity`

###### 独立出售的淘汰种禽（`breeder_culls`）

只有在生产农场门独立转移的活体淘汰种禽才是目标共产品。

分母与范围要求：每种禽期间

原始数量及计算要求：转移活鸟只数乘抽样活重 原始采集分母类型：process_output。

- 选定流：农场门活体淘汰珍珠鸡种禽
- 流属性/单位：Mass / kg，并记只数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：种禽淘汰只数约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：上市活体淘汰禽/期初及新增种禽
  - 基准：有新增记录后，上市淘汰数仍不能超过可用禽群
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`count-balance-identity`

###### 作为可用产品出口的种禽粪肥（`breeder_manure_export`）

只有可用粪肥独立称重并转移时才作为条件性目标产出；未出售垫料仍为废物。

分母与范围要求：每种禽期间

原始数量及计算要求：独立转移湿质量，保留水分和去向 原始采集分母类型：process_output。

- 选定流：农场交付的可用种禽粪肥
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：暂定出口粪肥筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 合格蛋
  - 基准：宽泛初始筛查，须有独立转移证据
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 种禽淘汰蛋（`breeder_rejects`）

记录不合格／破损蛋及其去向，不能作为合格孵化投入。

分母与范围要求：每种禽期间

原始数量及计算要求：淘汰枚数乘抽样质量或直接称量 原始采集分母类型：process_output。

- 选定流：淘汰珍珠鸡蛋
- 流属性/单位：Mass / kg，并记枚数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：淘汰蛋只数平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：淘汰蛋/采集蛋
  - 基准：淘汰蛋不超过总采集蛋
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`count-balance-identity`

###### 种禽死亡及粪污残余（`breeder_residues`）

按物料和处理去向记录死亡种禽及清出垫料／粪污；独立出售可用粪肥为另一个产出。

分母与范围要求：每种禽期间

原始数量及计算要求：称量残余并按死亡只数换算尸体质量 原始采集分母类型：process_output。

- 选定流：种禽尸体及垫料／粪污残余
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder`
- 数量范围：暂定种禽残余筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 合格蛋
  - 基准：宽泛暂定筛查，区分实际粪肥销售
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 种禽粪污甲烷至空气（`breeder_ch4`）

仅计算已识别种禽粪污贮存的生物源 CH4，而非燃料燃烧。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：分途径挥发性固体及相容 CH4 因子 原始采集分母类型：process_output。

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
- 数量范围：暂定种禽 CH4 审查界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg CH4/kg 合格蛋
  - 基准：宽泛初始筛查，非排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种禽粪污氧化亚氮至空气（`breeder_n2o`）

仅按种禽粪污途径计算直接 N2O，与生长禽群的粪污分开。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：期间排泄氮及粪污管理因子计算 原始采集分母类型：process_output。

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
- 数量范围：暂定 N2O 审查界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/kg 合格蛋
  - 基准：宽泛初始筛查，非排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 种禽粪污氨至空气（`breeder_nh3`）

仅在相容的氮挥发途径和期间下记录 NH3 至空气。

分母与范围要求：每 kg 合格种蛋

原始数量及计算要求：粪污氮及分途径挥发计算 原始采集分母类型：process_output。

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
- 数量范围：暂定种禽 NH3 审查界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg NH3/kg 合格蛋
  - 基准：宽泛初始筛查，非排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：孵化和雏禽选择（`hatchery`）

#### 输入

##### 产品流

###### 接收的种蛋（`hatching_eggs`）

外购或内部转移的合格珍珠鸡蛋只带入一次完整种禽负荷。

分母与范围要求：每 kg 孵化场门可售活雏禽

原始数量及计算要求：合格接收枚数乘抽样蛋重 原始采集分母类型：process_output。

- 选定流：孵化场接收的新鲜珍珠鸡种蛋
- 流属性/单位：Mass / kg，并记枚数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_hatchery`
- 数量范围：暂定种蛋投入筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 可售雏禽
  - 基准：宽泛初始筛查，后以孵化台账替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 孵化能源（`incubation_energy`）

对生产者控制的蛋储存、孵化及出雏，按实际电力和燃料载体计量。

分母与范围要求：每 kg 孵化场门可售活雏禽

原始数量及计算要求：仪表读数及有证据的共用服务份额 原始采集分母类型：process_output。

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
  - 单位：kWh 等效/kg 可售雏禽
  - 基准：宽泛初始筛查，非默认因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 孵化场门可售雏珍珠鸡（`hatchery_keets`）

在生产者孵化场发货时计数并抽样称重健康活雏禽，而非套用后续农场门身份。

分母与范围要求：每孵化批次，然后归一化至 1 kg 最终雏禽路线产品

原始数量及计算要求：可售雏禽只数乘代表性活重 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：生产者孵化场门活雏珍珠鸡
- 流属性/单位：Mass / kg，并记只数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_hatchery`
- 数量范围：孵化只数约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：可售雏禽/枚合格种蛋
  - 基准：每枚合格种蛋至多一只可售雏禽
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`count-balance-identity`

##### 废物流

###### 孵化损失（`hatch_losses`）

按实际去向区分未孵出蛋、蛋壳和不合格／死亡雏禽；本卡不含上市活鸟。

分母与范围要求：每孵化批次

原始数量及计算要求：称量或以只数换算残余质量 原始采集分母类型：process_output。

- 选定流：珍珠鸡孵化残余及损失
- 流属性/单位：Mass / kg，并记只数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_hatchery`
- 数量范围：暂定孵化损失筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 合格种蛋和孵化生物量
  - 基准：暂定物料比例，核查详细去向平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：雏禽育雏和生长（`growout`）

#### 输入

##### 产品流

###### 饲养接收雏禽（`received_keets`）

保留供应商或内部孵化场身份、日龄、只数、质量及上游负荷；不记为第二次雏禽最终销售。

分母与范围要求：每 kg 农场门可售活珍珠鸡

原始数量及计算要求：接收只数乘抽样活重 原始采集分母类型：process_output。

- 选定流：饲养场接收的活雏珍珠鸡
- 流属性/单位：Mass / kg，并记只数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 数量范围：暂定雏禽投入筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 农场门活鸟
  - 基准：宽泛初始筛查，后以接收记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 生长饲料及牧草（`growout_feed`）

区分采购配方与实测或有据估算的自由放养采食，记录水分和禽鸟阶段。

分母与范围要求：每 kg 农场门可售活珍珠鸡

原始数量及计算要求：发放饲料减退料，加声明方法得出的牧草摄入 原始采集分母类型：process_output。

- 选定流：珍珠鸡生长饲料及牧草
- 流属性/单位：Mass / kg 干物质
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 数量范围：暂定饲料转化筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 干物质/kg 可售活鸟
  - 基准：宽泛初始筛查，非物种默认因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 生长供应水（`growout_water`）

按用途记录供应的饮水及清洁用水；降水不是自动购入的产品流。

分母与范围要求：每 kg 农场门可售活珍珠鸡

原始数量及计算要求：按功能计量或记录供应水 原始采集分母类型：process_output。

- 选定流：珍珠鸡饲养供应水
- 流属性/单位：Volume / m3
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 数量范围：暂定供应水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：m3/kg 可售活鸟
  - 基准：宽泛初始筛查，按记录确定功能
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 舍饲能源（`growout_energy`）

仅对实际受控设施纳入供暖、育雏、通风和照明载体，并分摊共用计量。

分母与范围要求：每 kg 农场门可售活珍珠鸡

原始数量及计算要求：计量或分摊的载体用量 原始采集分母类型：process_output。

- 选定流：育雏及生长能源载体
- 流属性/单位：Energy / kWh、MJ 或燃料原单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 数量范围：暂定舍饲能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh 等效/kg 可售活鸟
  - 基准：宽泛初始筛查，非路线默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 捕捉前站立禽群（`standing_flock`）

活禽群是生长过程的内部交接，不是第二笔农场门产品销售。

分母与范围要求：每生长群批次

原始数量及计算要求：站立只数乘抽样活重 原始采集分母类型：process_output。

- 选定流：站立活珍珠鸡群
- 流属性/单位：Mass / kg，并记只数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 数量范围：存活只数约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：站立鸟/接收雏禽
  - 基准：核对新增、死亡和转移
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`count-balance-identity`

###### 作为可用产品出口的生长粪肥（`growout_manure_export`）

只有可用粪肥独立称重并离开农场时才作为条件性目标产出，不能同时记为废物。

分母与范围要求：每生长群批次

原始数量及计算要求：称重出口并记录水分、接收方及交付门 原始采集分母类型：process_output。

- 选定流：农场交付的可用珍珠鸡生长粪肥
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 数量范围：暂定出口粪肥筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 可售活鸟
  - 基准：宽泛初始筛查，须有独立转移证据
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 死亡及垫料（`growout_residues`）

按物质和去向区分死亡鸟与清出垫料／粪污；外售可用粪肥须有转移证据才能成为共产品。

分母与范围要求：每生长群批次

原始数量及计算要求：称量残余及死亡只数乘抽样质量 原始采集分母类型：process_output。

- 选定流：珍珠鸡死亡及垫料／粪污残余
- 流属性/单位：Mass / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_growout`
- 数量范围：暂定残余筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg/kg 可售活鸟
  - 基准：宽泛首轮检查，区分出售粪肥
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 生长粪污甲烷至空气（`growout_ch4`）

仅对有记录的生长粪污贮存计算生物源 CH4，不假定所有路线相同。

分母与范围要求：每 kg 农场门可售活珍珠鸡

原始数量及计算要求：分途径挥发性固体及相容 CH4 因子计算 原始采集分母类型：process_output。

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
- 数量范围：暂定 CH4 审查界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg CH4/kg 可售活鸟
  - 基准：宽泛初始筛查，非排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粪污氧化亚氮至空气（`growout_n2o`）

按实际禽群氮数据，针对不重叠的垫料贮存或放养沉积途径计算直接 N2O。

分母与范围要求：每 kg 农场门可售活珍珠鸡

原始数量及计算要求：分途径排泄氮与因子计算 原始采集分母类型：process_output。

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
- 数量范围：暂定 N2O 审查界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/kg 可售活鸟
  - 基准：宽泛初始筛查，非排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 生长粪污氨至空气（`growout_nh3`）

只有已建模的垫料或放养途径具备相容的挥发基准时才记录 NH3 至空气。

分母与范围要求：每 kg 农场门可售活珍珠鸡

原始数量及计算要求：分途径氮及 NH3 挥发计算 原始采集分母类型：process_output。

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
- 数量范围：暂定 NH3 审查界限
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg NH3/kg 可售活鸟
  - 基准：宽泛初始筛查，非排放因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：活体捕捉及农场发货（`capture`）

#### 输入

##### 产品流

###### 接收站立禽群（`capture_flock`）

将受管理站立禽群及其既有负荷只投入捕捉过程一次。

分母与范围要求：每农场门捕捉批次

原始数量及计算要求：计数禽群并抽样活重 原始采集分母类型：process_output。

- 选定流：进入捕捉的站立珍珠鸡群
- 流属性/单位：Mass / kg，并记只数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_capture`
- 数量范围：捕捉只数平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：被捕鸟/站立鸟
  - 基准：捕捉结果比例不得超过站立禽群
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`count-balance-identity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门活珍珠鸡（`farm_live_guinea_fowl`）

仅在生产农场门发货的未加工可售活禽使用这一经核实的精确身份。

分母与范围要求：每捕捉批次，然后归一化至 1 kg 最终农场路线产品

原始数量及计算要求：可售只数乘代表性活重 原始采集分母类型：process_output。

生产者交付关联：仅当本状态／交付门专属行被选为实际路线的最终来源时，才向 reference_handover_input 提供同一批实际合格产品。此时它是内部交付记录，不是第二次对外参考产品销售；否则保留原有中间移交角色。保留确切身份及原有路线条件，只选实际最终来源，不汇总所有连续移交；匹配同批次及相容的物种／状态／交付门证据。较窄固定身份的交付门或物种不得扩大。交付接口不增加加工、运输、产率假设或重复处理负担。

- 选定流：农场门生产混合的活体未加工珍珠鸡 `cf28b5aa-56c1-46b7-9ec5-b91d3daaf2d3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_capture`
- 数量范围：可售捕捉只数约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：可售鸟/站立鸟
  - 基准：可售只数不超过站立只数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`count-balance-identity`

##### 废物流

###### 捕捉淘汰和损失（`capture_losses`）

记录捕捉后受伤、死亡或其他不可售鸟及去向；不得使用最终产品 UUID。

分母与范围要求：每捕捉批次

原始数量及计算要求：观察的淘汰只数乘抽样质量或直接称量 原始采集分母类型：process_output。

- 选定流：珍珠鸡活体捕捉淘汰及损失
- 流属性/单位：Mass / kg，并记只数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_capture`
- 数量范围：捕捉损失只数约束
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：淘汰鸟/站立鸟
  - 基准：捕捉淘汰占站立禽群比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`count-balance-identity`

##### 基本流

### Process: 实际生产者参考产品交付（`reference_handover`）

从实际交付批次实例化一个前景参考，声明全部必需限定项。类别可以覆盖不同状态及生产者交付门，但每个数据包只有一个声明物种／状态／交付门／等级分层，以及一个实测合格参考产出分母。不得汇总不相容状态，也不得以质量相同推定服务等价。路线专属来源行与 reference_handover 描述同一实际边界事件；关联内部移交不是另一次销售，也不是新增实体操作。

#### 输入

##### 产品流

###### 生产者孵化场或农场门活珍珠鸡，声明路线及日龄（实际生产者交付关联） (`reference_handover_input`)

本输入在原有路线条件下匹配 `hatchery_keets`, `farm_live_guinea_fowl` 所表示的合格产品。它是来源至交付的内部关联，不是新购同类别产品，也不是额外生产；匹配来源与输入在数据包边界抵消。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`hatchery_keets`, `farm_live_guinea_fowl`

必需产品实例限定项：Numida meleagris；孵化场雏禽或较大日龄农场鸟；交付门；日龄／类别；只数；活重样本；禽群；死亡；种禽／雏禽来源；适用时性别；自由放养或舍饲方式

- 选定流：生产者孵化场或农场门活珍珠鸡，声明路线及日龄（实际生产者交付关联）
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

###### 生产者孵化场或农场门活珍珠鸡，声明路线及日龄 (`reference_product_handover`)

本卡为声明生产者边界的实际合格参考产品，依 cp_reference_handover 测量；它是唯一对外参考产出。依据真实批次实例化身份，不套用广义固定 UUID。

实际路线／状态／交付门由前景交付证据确定，保留全部必需限定项；使用同一实际合格批次的最终来源，不汇总所有连续阶段移交。固定来源身份仅适用于其确切物种／状态／交付门；其他覆盖路线使用相容的未绑定来源角色，在创建最终数据集前解析真实前景交换。

选定来源／接口行：`hatchery_keets`, `farm_live_guinea_fowl`

必需产品实例限定项：Numida meleagris；孵化场雏禽或较大日龄农场鸟；交付门；日龄／类别；只数；活重样本；禽群；死亡；种禽／雏禽来源；适用时性别；自由放养或舍饲方式

- 选定流：生产者孵化场或农场门活珍珠鸡，声明路线及日龄
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
| `a_output_set` | 种禽、孵化及生长 | 确认种禽交付的合格蛋、孵化场门可售雏禽、农场门较大日龄活禽；只有实际出售的淘汰种禽或粪肥才是独立目标产出。淘汰、死亡、蛋壳和未售垫料属于废物或损失。 | `fao-small-poultry`; `fao-leap-poultry-2016` |
| `a_method` | 真正独立的共产品 | 优先采用已证明的物理因果关系；否则声明期间特定的质量或经济分配，以产出证据支持并披露敏感性。一体化转移的蛋／雏禽不再同时算作最终销售。 | `fao-leap-poultry-2016` |
| `a_period` | 种禽、孵化及生长阶段 | 将种禽替换、产蛋、孵化批次、雏禽群、淘汰和共用资产关联至实际期间。核对期初／期末存栏及死亡，跨期间只分配一次。 | `fao-leap-poultry-2016` |
| `a_shared` | 孵化器、禽舍、供热、仪表及供水设备 | 列出种禽、孵化和生长各消费节点及服务期间；按仪表或有据的容量时间分配，各份额合计为一份原始账单。 | `fao-leap-poultry-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_breeder` | `breeder` | 饲料、水、能源、蛋、淘汰种禽、粪肥及淘汰 | 种禽台账 | 期初／期末禽群；饲料；水／能源仪表；蛋枚数／质量；淘汰原因；淘汰种禽；粪肥出口／去向；期间 | 饲养日志、仪表、计数及秤；原始汇总要求：按期间汇总；蛋、淘汰种禽及出口粪肥只核对一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只、枚、kg、m3、kWh | 每日／期间 | 完整种禽期间 | 一体化种禽场 | 每参考流 | 签署的禽群、蛋及转移平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_breeder_manure` | `breeder` | 种禽 CH4、N2O、NH3 | 种禽粪污记录 | 鸟-期间；挥发性固体；排泄氮；贮存／放养沉积份额；因子层级 | 粪污／农场日志及分途径方法；原始汇总要求：每条途径排放只计算一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、比例 | 期间 | 完整种禽及粪污期间 | 一体化种禽场 | 每参考流 | 因子及途径证据；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_hatchery` | `hatchery` | 蛋、能源、雏禽、损失 | 孵化批次 | 蛋来源／枚数／质量；入孵；能源仪表；孵出／淘汰／损失只数；雏禽抽样重 | 接收、孵化及发货日志；原始汇总要求：只数平衡及只数×抽样质量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 枚、只、kg、kWh | 每批次 | 接收至孵化场门 | 生产者孵化场 | 每参考流 | 签署的孵化平衡及仪表读数；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_growout` | `growout` | 雏禽、饲料、水、能源、站立禽群、粪肥出口及残余 | 生长群 | 雏禽来源／只数／质量；配方／水分；牧草方法；水／能源；死亡；垫料／粪污质量、出口及去向；存栏 | 接收单、每日日志、秤和仪表；原始汇总要求：核对存栏；按路线／期间汇总投入并区分出口粪肥。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只、kg、m3、kWh | 每日／群 | 完整育雏／生长期间 | 生产农场 | 每参考流 | 发票、秤及存栏平衡；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure` | `growout` | 生长 CH4、N2O、NH3 | 粪污途径 | 鸟-期间、挥发性固体、排泄氮、贮存与放养份额、因子层级 | 农场日志及分途径计算；原始汇总要求：建模不重叠的直接途径。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg、比例 | 群／期间 | 完整粪污期间 | 生产农场 | 每参考流 | 因子及去向日志；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_capture` | `capture` | 站立、可售和损失活鸟 | 农场发货 | 站立／可售／淘汰只数、抽样重量、日龄、发货时间及交付门 | 直接计数及抽样称重；原始汇总要求：只数×抽样质量，仅一项最终发货。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | 只、kg | 每发货 | 捕捉至农场门 | 生产农场 | 每参考流 | 称重及签署交付单；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_reference_handover` | `reference_handover` | 合格产品及匹配的内部来源移交 | 生产者交付台账 | lot_id, species, state, grade, route_id, gate, period, accepted_quantity, native_unit, source_row_id, source_lot_id, allocation_link | 在同一实际交付门测量合格净产品，将列出的状态／交付门专属来源行及关联输入与唯一实际产出核对。拒收、库存变化及其他销售单独记录；不假设新增处理或运输。 | kg；原生来源数量 | 每次实际交付 | 匹配来源及交付期间 | 仅声明生产者交付门 | 每参考流 | 可追溯验收记录、同批来源至产出台账、校准数量方法及归一化计算表 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_live_mass` | 最终活鸟 | 按日龄／类别和路线的可售只数×代表性平均活重 | 只数及抽样重量 | kg 活珍珠鸡 | `count-balance-identity` |
| `c_hatch` | 孵化批次 | 合格蛋＝可售雏禽＋不合格雏禽＋未孵出蛋＋已记录其他结局，按枚／只数核对 | 接收及孵化日志 | 孵化产率与损失平衡 | `count-balance-identity` |
| `c_cohort` | 生长 | 期初雏禽＋接收－死亡－最终转移＝期末只数，其他转移单列 | 群台账 | 只数平衡 | `count-balance-identity` |
| `c_manure` | 直接 CH4、N2O、NH3 | 采用声明的不重叠粪污挥发性固体及氮途径和相容因子层级 | 鸟-期间、挥发性固体、排泄氮、途径份额 | kg CH4、N2O 和 NH3 至空气 | `ipcc-livestock-2019` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_identity` | 参考流 | 物种、日龄／类别、活体状态、生产者交付门、只数和质量明确 | 发货及抽样记录 |
| `q_predecessor` | 蛋及雏禽 | 来源及前序负荷可追踪；外包或代孵不算自营 | 供应商数据集及接收单 |
| `q_stock` | 种禽及生长 | 按期间核对期初存栏、孵出、接收、死亡、淘汰、转移及期末存栏 | 签署的禽群台账 |
| `q_route` | 放养或舍饲 | 记录实际模式、牧草方法、舍饲能源、死亡及粪污沉积／贮存，而非假定 | 群／地块／禽舍日志 |
| `q_outputs` | 共产品及废物 | 记录独立上市蛋／淘汰种禽／粪肥及各淘汰物料去向 | 销售及处理转移单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_gate` | 参考流及最终产出 | 拒绝交付门不明的孵化场／农场混合；不得把农场门固定 UUID 用于孵化场雏禽。 | `unsd-cpc-2025` |
| `v_egg` | 一体化种禽及孵化场 | 核对种蛋接收、孵化、淘汰及损失；每枚合格蛋至多一只可售雏禽。 | `count-balance-identity` |
| `v_stock` | 生长及捕捉 | 以只数／质量证据核对雏禽接收、死亡、站立禽群、捕捉损失及可售发货。 | `count-balance-identity` |
| `v_deltas` | 放养／舍饲路线 | 对每项声明路线检查实际饲料、水、舍饲能源、放养沉积及死亡证据；不得导入路线默认值。 | `fao-guinea-field-study` |
| `v_attribution` | 目标产出、期间及共用资产 | 要求实际产出交付门、声明分配基准、种禽／孵化／禽群期间和单一共用资产账单；禁止内部雏禽重复负荷。 | `fao-leap-poultry-2016` |
| `v_emission` | 粪污 CH4、N2O 和 NH3 | 使用各固定身份前确认精确物质、空气介质、不重叠贮存／放养途径、因子层级及期间。 | `ipcc-livestock-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 生产者门活珍珠鸡前景数据包 |
| downstream_use | process 和 lifecyclemodel 的 secondary_dataset 与 background_dataset |
| allowed_use | 已声明孵化场雏禽或较大日龄农场活鸟路线，并记录只数、质量和前序负荷 |
| excluded_use | 肉、屠宰、作为参考流的蛋、交付门不明的混合或将外包孵化写成自营 |
| required_metadata | 生产者、物种、交付门、日龄／类别、只数、抽样质量、禽群／批次、前序、放养／舍饲模式、死亡、粪污和共用期间 |
| required_quality_disclosure | 覆盖率、抽样、前序缺口、共产品分配、粪污方法、未绑定参考／雏禽及 待确认流身份 解析 |
| update_trigger | 路线、前序来源、品种／禽群系统、死亡、舍饲、粪污、共产品或重要数据缺口改变 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | [UN CPC 3.0 解释说明](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 物种／产品分类 |
| `fao-poultry-species` | official_guidance | [FAO 家禽物种](https://www.fao.org/poultry-production-products/production/poultry-species/) | 珍珠鸡生物身份 |
| `fao-small-poultry` | extension_guidance | [FAO 小规模家禽生产](https://www.fao.org/4/y5169e/y5169e03.htm) | 蛋、雏禽及小农路线角色 |
| `fao-guinea-field-study` | literature | [FAO AGRIS 珍珠鸡田间研究](https://agris.fao.org/search/en/providers/122397/records/67484ec07625988a371a0b9c) | 条件性放养／舍饲及死亡证据 |
| `fao-leap-poultry-2016` | official_guidance | [FAO LEAP 家禽供应链指南](https://openknowledge.fao.org/handle/20.500.14283/i6421en) | 边界、产出及期间分配 |
| `ipcc-livestock-2019` | method_factor | [IPCC 2019 修订版第四卷第十章](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf) | 粪污 CH4 和 N2O 途径；NH3 途径披露 |
| `count-balance-identity` | method_factor | 声明交付门的禽鸟及蛋只数守恒 | 只数及转移校验 |
