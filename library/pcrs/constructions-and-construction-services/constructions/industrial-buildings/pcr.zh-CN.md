---
pcr_id: pcr.constructions-and-construction-services.constructions.industrial-buildings
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 工业建筑物

## 1. 范围与适用性

本规则适用于现场完工并交付的工厂、车间、普通生产或装配建筑及农业建筑。包括地基、主体、围护、固定建筑系统、调试、供应运输、施工及废物。预制构件是投入。普通仓库须先与 CPC 53122 核对分类。排除采矿、电厂、化工及特殊制造设施、生产或租户设备、运营、维护与未来拆除。后续生命周期情景须单独声明。`src_unsd_53121`；`src_ec_levels`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.industrial-buildings |
| classification_refs | CPC 3.0 53121 工业建筑物；分类映射另需接受决定 |
| covered_products | 普通工业厂房、车间及农业建筑，包括建筑一体化筒仓 |
| excluded_products | 待按 CPC 53122 判断的普通仓库；采矿、电力、化工及特殊制造设施；独立生产设备 |
| representative_product | 具有基础、主体、围护和固定系统的一栋已完工厂房 |
| production_route | 场地与基础；构件运输；主体围护装配；固定系统；调试交付 |
| market_state | 已建成且可按声明工业或农业用途使用 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 现场交付的完整工业建筑 |
| How much | 实测总建筑面积 1 m2，另报告整栋总面积 |
| How well | 结构、围护和固定系统通过声明用途的验收 |
| How long or cycle | 从开工至交付的一个工程；寿命属于后续研究元数据 |
| reference_flow_link | `building_completion` 的 `industrial_building_handover` 输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 整栋建筑归一化后的 1 m2 总建筑面积 |
| 参考产品流 | 现场交付的工业建筑（UUID 未解析） |
| 参考流属性 | 面积（UUID 未解析） |
| 参考单位组 | 面积单位组（UUID 未解析） |
| 参考单位 | m2 |
| 必需限定信息 | 用途；工业或农业功能；位置；面积口径；主体围护；固定系统；验收日期和证据；排除项 |

Biopile facility 候选 UUID 与普通工业建筑的产品和路线不符，拒绝绑定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_floor_area` | 参考输出 | 面积 | m2 | 用竣工图采用统一披露的总建筑面积口径，核对整栋面积后归一化。 |
| `measure_materials` | 材料及废料 | 质量或附密度的体积 | kg 或 m3 | 分别保存交付、安装、退回和报废量。 |
| `measure_energy` | 施工及测试能源 | 能量或载体数量 | kWh、L 或 kg | 逐载体保留表计或票据单位及换算因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 记录施工前场地状态及先前拆除或修复。 |
| starting_condition_role | 建筑工程起始条件。 |
| product_classification_scope | 一栋普通工业或农业建筑；普通仓库和特殊设施另行核对。 |
| recursive_input_rule | 既有或预制构件按投入状态计入一次，不递归作为完整建筑输出。 |
| upstream_dataset_requirement | 材料、构件、公用设施及运输投入须有相容的供应方、地域和生产交付节点。 |
| disclosure | 场地、构件、临时工程、共享设施、再用、预制、运输、排除项及验收。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | 所有节点 | 纳入供应运输、现场施工、废料及验收前调试；全生命周期扩展另行标识。 | `src_ec_levels`; `src_ec_gwp` |
| `boundary_function` | 建筑 | 纳入基础、主体、围护和固定系统；排除生产设备及独立土木工程。 | `src_unsd_53121` |
| `boundary_secondary` | 再生投入 | 声明来源、回收交接及上游数据集的负担继承或截断方式；既有负担只计一次。 | `src_iso_21930` |
| `boundary_shared` | 共享设施 | 列出使用节点及工程期间；实测使用量分配一次，无表计则披露物理代理。 | `src_ec_levels` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ground_foundation` | 土方与基础 | required | 合同包含场地与基础 | 合格基础及材料废料账 | 整栋和每 m2 |
| `frame_envelope` | 主体与围护装配 | required | 安装主体围护 | 多构件连接成合格外壳 | 整栋和每 m2 |
| `building_completion` | 固定系统与交付 | required | 合同包含系统及验收 | 合格完整建筑 | 整栋和每 m2 |

### 过程：土方与基础（`ground_foundation`）

#### 输入

##### 产品流

###### 基础产品（`foundation_products`）

按实际等级与供应商记录混凝土、钢筋和其他基础产品；最终交换拆分不同身份。
- 选定流：基础混凝土及钢筋（UUID 未解析）
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：将交付、安装及报废量与竣工基础清单核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`src_ec_levels`
- 数量范围：暂定基础材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：每 m2 交付质量的宽泛初筛，以工程设计及现场记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 土方能源（`ground_energy`）

记录土方、排水和基础浇筑的燃料与电力。
- 选定流：土方能源载体
- 流属性/单位：能量或载体数量 / kWh、L 或 kg
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：逐载体读取表计或票据，共享机械只分配一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_operations`
- 数量范围：暂定土方能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh/m2
  - 基准：每 m2 等效能耗的宽泛初筛，须以载体换算和实绩替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
##### 基本流
#### 输出
##### 产品流

###### 合格基础（`foundation_accepted`）

验收基础转入主体施工，是中间状态而非另一栋建筑。
- 选定流：验收基础中间体（UUID 未解析）
- 流属性/单位：面积 / m2
- 数量规则：只记录一次验收基础清单及工程面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：暂定合格基础面积筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：m2/m2
  - 基准：合格基础占地与总建筑面积之比，以工程设计替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 土方废料（`ground_rejects`）

挖出物及废料按再用、回收或处置去向记录，内部返工仍关联本节点。
- 选定流：挖出物与基础废料（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：称量或用实测体积及密度换算；场内再用只扣减一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`src_ec_levels`
- 数量范围：暂定土方废料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/m2
  - 基准：每 m2 挖出及废料质量的宽泛初筛，以实测体积密度替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：主体与围护装配（`frame_envelope`）

#### 输入
##### 产品流

###### 主体及围护构件（`frame_components`）

按设计记录钢、木、混凝土、饰面、玻璃和保温材料；分别记录再生来源与交接点。
- 选定流：主体与围护构件（UUID 未解析）
- 流属性/单位：质量和尺寸 / kg 与 m2
- 数量规则：按材料和构件核对交付与竣工安装量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`src_ec_levels`
- 数量范围：暂定主体材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：每 m2 综合交付质量的宽泛初筛，以竣工分类量替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 构件货运（`component_freight`）

供应商至工地的实际运输记录方式、载重、路程和计费返程。
- 选定流：进场货运服务
- 流属性/单位：运输周转量 / 吨公里
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.transport-service`
- Flow Set version：`0.2.0`
- 数量规则：按路段方式汇总载货吨数乘路程并披露返程处理。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_transport`
- 数量范围：暂定构件货运筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：tonne-km/m2
  - 基准：每 m2 运输周转量的宽泛初筛，以实际路段载重替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 装配能源（`assembly_energy`）

纳入吊机、焊接和安装的载体需求；共享设备按实测用量分配。
- 选定流：装配能源载体
- 流属性/单位：能量或载体数量 / kWh、L 或 kg
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：逐载体记录现场消耗与共享设备工时。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_operations`
- 数量范围：暂定装配能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh/m2
  - 基准：每 m2 能源等效量的宽泛初筛，以载体实绩替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
##### 基本流
#### 输出
##### 产品流

###### 合格外壳（`shell_accepted`）

仅验收的主体和围护进入竣工阶段；不合格装配件应返工或退出。
- 选定流：合格围护外壳中间体（UUID 未解析）
- 流属性/单位：面积 / m2
- 数量规则：核对合格构件清单、面积与竣工图。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：暂定合格外壳面积筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：m2/m2
  - 基准：合格外壳占地与总建筑面积之比，以工程设计替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 装配废料（`assembly_rejects`）

不合格构件和边角料按材料进入返工、回收或处置，不重复计作合格输出。
- 选定流：不合格构件与边角料（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：核对投入、安装、返工及对外退出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`src_ec_levels`
- 数量范围：暂定装配废料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：每 m2 废料质量的宽泛初筛，以物料平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：固定系统与交付（`building_completion`）

#### 输入
##### 产品流

###### 固定建筑系统（`integrated_systems`）

按合同纳入建筑电力、供水、通风、消防和固定通行系统，排除生产线及租户设备。
- 选定流：固定建筑系统构件（UUID 未解析）
- 流属性/单位：质量或件数 / kg 或 item
- 数量规则：核对竣工系统清单、采购及安装量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定固定系统材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：每 m2 交付材料质量的宽泛初筛，以系统清单替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调试用水（`commission_water`）

记录交付前冲洗与测试用水，无涉水测试时为零。
- 选定流：调试供水
- 流属性/单位：质量 / kg
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：记录供应体积并扣除已核实回用量，再按记录的密度换算质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_operations`
- 数量范围：暂定调试用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：kg/m2
  - 基准：每 m2 测试用水质量的宽泛初筛，表计体积须按记录密度换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调试能源（`commission_energy`）

纳入验收前测试的实测能源，排除有证据的交付后运营。
- 选定流：调试能源载体
- 流属性/单位：能量或载体数量 / kWh、L 或 kg
- 绑定模式：参数化（`parameterized`）
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：逐载体记录测试期间的实际消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_operations`
- 数量范围：暂定调试能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kWh/m2
  - 基准：每 m2 测试能耗的宽泛初筛，以载体表计替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流
##### 基本流
#### 输出
##### 产品流

###### 已完工工业建筑（`industrial_building_handover`）

一栋建筑在签署验收后交付，参考 UUID 尚未解析。
- 选定流：现场交付的完整工业建筑（UUID 未解析）
- 流属性/单位：面积 / m2
- 数量规则：合格总建筑面积只计一次，保留总量并归一化为 1 m2。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：参考面积归一化检查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：m2/m2
  - 基准：每 1 m2 参考流对应的归一化验收面积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集后计算（`calculated_from_collection`）

##### 废物流

###### 调试废料（`commission_rejects`）

故障部件和测试废料返工或送有记录的处理，修复件须复验。
- 选定流：调试不合格部件和废料（UUID 未解析）
- 流属性/单位：质量 / kg
- 数量规则：记录故障、返工、回收和处置，避免替换采购重复计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m2 完工总建筑面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 数量范围：暂定调试废料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/m2
  - 基准：每 m2 废料质量的宽泛初筛，以故障及废料日志替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

- `allocate_shared`：先按建筑与节点拆分；按表计、设备工时或实测面积在工程期间向全部使用者分配临时工程、机械及公用设施，总份额只形成一笔负担。
- `allocate_secondary`：保留再生投入的来源及回收交接点，只采用一套上游负担继承或截断方式。本系统运输加工另计一次，不重复给出收益。`src_iso_21930`。
- `allocate_rework`：返工保留原节点负担，新增返工投入只计一次；复验合格才进入建筑输出。无核实用途和交接的废料不是共产品。
- `allocate_multiple_buildings`：分别计量独立交付建筑，按实际使用量或披露的物理因子分配共享工程；不同用途不可无说明地合并。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | `ground_foundation`; `frame_envelope`; `building_completion` | 交付和安装产品 | 竣工清单及票据 | material; grade; supplier; mass_or_volume; density; installed_quantity; recycled_origin; handoff | 核对工程量清单及安装日志 | kg; m3; item | 每次交付 | 整个工程 | 各建筑/供应商 | 按材料节点汇总并保留废料 | 票据、图纸、声明 |
| `cp_site_operations` | 三节点 | 燃料、电、水、机械 | 表计和设备日志 | carrier; quantity; equipment_hours; water_m3; node; period | 关联表计票据与节点 | kWh; L; kg; m3; h | 每计量期/班次 | 施工至交付 | 工地 | 按载体节点汇总，共享只分配一次 | 表计、发票、日志 |
| `cp_transport` | `frame_envelope` | 进场货运 | 运单 | product; mode; load_t; leg_km; return | 核对起点及交付 | t; km; tonne-km | 每段运输 | 整个工程 | 供应商至工地 | 逐段汇总吨公里 | 运单、路线 |
| `cp_waste` | 三节点 | 废料和退出 | 过磅单及拒收日志 | node; material; mass; rework; reuse; recovery; disposal; destination | 核对平衡与处理收据 | kg | 每次拒收/运出 | 整个工程 | 工地 | 每条退出只计一次 | 过磅单、处理收据 |
| `cp_acceptance` | 三节点 | 验收状态 | 检验交接和图纸 | foundation_acceptance; shell_acceptance; systems_tests; date; floor_area_m2 | 签字验收及面积计量 | m2; date | 每里程碑 | 至交付 | 一栋建筑 | 合格面积只计一次 | 签字单、竣工图 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area` | 所有节点 | 工程总量除以合格总建筑面积，保存总量。 | area; quantity | 每 m2 数量 | `src_ec_levels` |
| `calc_material_balance` | 每种材料 | 交付量等于安装、报废、退回及库存变化之和，场内再用只计一次。 | delivery; install; reject; return; stock | 平衡物料账 | `src_ec_levels` |
| `calc_freight` | 进场货运 | 各路段方式汇总载货吨数乘实际单程公里，披露返程。 | load_t; leg_km; mode | tonne-km | `src_ec_gwp` |
| `calc_shared` | 共享设施 | 工程期间按实测用量分配一次，总份额为一。 | asset total; node use; period | 节点负担 | `src_ec_levels` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 建筑 | 核实用途、分类排除、面积口径和验收节点。 | 用途说明、图纸、交付单 |
| `quality_quantity` | 清单 | 保存原始记录、单位、换算、缺失期间和供应商覆盖。 | 票据、表计、工程量清单 |
| `quality_rework` | 所有节点 | 核对合格、报废和返工材料，不重复计输出。 | 检验和返工日志 |
| `quality_shared` | 共享设施 | 列出使用者、期间和分配指标，总份额等于总量。 | 设备日志和分配表 |
| `quality_uuid` | 最终交换 | 逐一解析未覆盖身份的 UUID、属性及单位。 | 平台详情回读 |

## 9. 校验规则

- `validate_scope`：核实用途、CPC 53121 边界、仓库分类、固定系统；排除特殊设施和生产设备。
- `validate_handover`：要求结构、围护、系统签字验收及实测总建筑面积，排除交付后运营。
- `validate_inventory`：按节点核对产品、运输、能源、水和废料，平衡交付、安装、拒收及验收。
- `validate_rework`：每种废料有返工、回收或处置路径，复验合格后才计为输出。
- `validate_secondary`：记录再生来源、回收交接及一套负担方式，禁止既有与当前负担重复。
- `validate_shared`：记录共享资产使用者及工程期间，负担只分配一次。
- `validate_uuid`：参考、材料及废物流核实类型、交付节点、属性和单位前不绑定；Biopile facility 不是普通工业建筑。
- `validate_flow_sets`：采用所列能源、水及运输 Flow Set 版本，最终交换须解析为核实的具体 UUID。
- `validate_range`：不设通用材料强度数值范围；按设计、工程量清单和实测记录核查并解释异常。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一栋工业或农业建筑交付时的前景施工数据集 |
| downstream_use | `secondary_dataset`；经身份及代表性复核后可作为 `background_dataset` |
| allowed_use | 用途、结构、地域、面积口径、系统及交付节点相符的施工阶段建模 |
| excluded_use | 无单独情景的全生命周期断言；特殊土木工程、生产设备及无关仓库 |
| required_metadata | 场址、用途、主体、围护、基础、面积口径与总量、供应商、系统、日期、调试、共享工程、再生投入、废料返工及排除项 |
| required_quality_disclosure | 原始数据覆盖、换算、未解析 UUID、来源地域、物料平衡、废料去向、共享分配及未纳入工程 |
| update_trigger | 核实的参考 UUID；边界、交付节点、定量证据、Flow Set 版本或分配方法变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `src_unsd_53121` | official_guidance | UNSD CPC 2.1 53121 说明，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53121 | 产品边界；本地 CPC 3.0 leaf 仍为分类依据 |
| `src_ec_levels` | official_guidance | 欧盟委员会 Level(s) 案例，https://green-forum.ec.europa.eu/green-business/levels/elearning-and-case-studies/levels-case-studies_en | 竣工面积、工程量清单及施工废料 |
| `src_ec_gwp` | official_guidance | 欧盟委员会建筑全球变暖潜势，https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings/energy-performance-buildings-directive/global-warming-potential-buildings_en | 施工、使用和终端阶段区别 |
| `src_iso_21930` | standard | ISO 21930:2017，https://www.iso.org/standard/61694.html | 建筑产品服务的通用 EPD 框架，无产品专属数量因子 |
