---
pcr_id: pcr.constructions-and-construction-services.constructions.long-distance-pipelines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 长距离管道

## 1. 范围与适用性

本 PCR 覆盖经交付验收的长距离陆上、地下或海底管道，可输送石油产品、天然气、水或其他已声明介质；仅在同一工程交付范围内纳入直接相关的泵站。资产边界止于施工、压力试验及签署交付，不包含此后的管道运输服务。排除城市配气配水管网、非管道输水构筑物、单独交付的线路或泵站及运营。须声明介质、走向、管材规格、敷设路线与泵站范围。[unsd-cpc3-53241; phmsa-pipeline-construction]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.long-distance-pipelines |
| classification_refs | CPC 3.0 53241，长距离管道；映射接受另行决定。 |
| covered_products | 验收的长距离输送管道，以及工程范围内的一体化泵站构筑物。 |
| excluded_products | 本地配送主管、渡槽、独立泵站工程及管道运输服务。 |
| representative_product | 一个符合规格且通过验收的长距离管道工程。 |
| production_route | 路权准备与开沟、布管焊接、现场防腐、敷设回填或穿越、压力试验、恢复与交付。 |
| market_state | 签署交付时已安装的土木资产。 |

父活动 `line_install` 接收经检查的涂覆管段与已准备路线。开挖、非开挖穿越和海底敷设分别改变开挖弃土、敷设服务、试验记录及验证要求。不同已建区段可并存这些路线，但同一里程不得重复选取；逐段记录实际工法。[phmsa-pipeline-construction; ferc-pipeline-construction]

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 含已声明一体化泵站的建成长期输送管道资产。 |
| How much | 一个验收工程；另报已验收里程与安装管材质量。 |
| How well | 焊接、防腐、压力、路线及现场恢复均通过验收。 |
| How long or cycle | 从施工至签署交付的一个工程；设计寿命作为元数据。 |
| reference_flow_link | `line_install` 的 `accepted_pipeline`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 个验收管道工程 |
| Reference product flow | 建成长距离管道；UUID 未解析 |
| Reference flow property | Count；UUID 未解析 |
| Reference unit group | Count；UUID 未解析 |
| Reference unit | pipeline project |
| Required qualifiers | 输送介质；路线与地理位置；里程；直径、壁厚和材料；防腐体系；压力等级；分段敷设工法；纳入的泵站；验收日期 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `project_count` | 参考产出 | Count，UUID 未解析 | project | 已签署验收的工程仅计一次，保留路线长度便于比较。 |
| `pipe_balance` | 管材与管件 | 质量 | kg | 按规格核对交付、安装、退回和拒收质量。 |
| `route_volume` | 路线 | 长度与原状体积 | km and m3 | 按实测里程和原状开挖体积计量，不以松方运输体积替代。 |
| `water_balance` | 压力试验 | 体积 | m3 | 逐试验区段核对进水、回用、处理、排放和余水。 |
| `energy_carrier` | 施工设备 | 分能源载体能量或质量 | kWh, MJ or kg | 不得同时重复计入发电机燃料与其所发电力。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 施工前已勘测的路线及既有地表或海床。 |
| starting_condition_role | 物理基线，并非零负担的已安装基础设施。 |
| product_classification_scope | 一项验收的输送资产；独立泵站工程须外部关联，不能默默纳入。 |
| recursive_input_rule | 采购管材与服务从供应商交付点进入；完整管道不得作为未拆解材料递归输入。 |
| upstream_dataset_requirement | 关联匹配路线的管材、防腐、能源、运输、水及废物管理数据集。 |
| disclosure | 分段工法、土壤或海床状态、弃土回用与去向、泵站范围、试验介质、共享设备及验收签字。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | 整体资产 | 包含路权、连接、防腐、敷设、压力试验、必要返修及恢复至签署交付；排除后续运输运营。 | `phmsa-pipeline-construction`; `unsd-cpc3-53241` |
| `earthwork_handoff` | `corridor_earthwork` | 独立计量从已勘测地层移出的材料；向敷设传递合格路线，并区分回填回用与外运弃土。 | `phmsa-pipeline-construction` |
| `assembly_finish_handoff` | `pipe_assembly`, `joint_coating` | 已检验连接管段传至防腐，合格防腐管段传至敷设；焊接或涂层缺陷须返修或有明确去向。 | `phmsa-pipeline-construction` |
| `segment_routes` | `line_install` | 分别记录开挖、非开挖及海底工法清单，同一验收里程只计一次。 | `phmsa-pipeline-construction`; `ferc-pipeline-construction` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `corridor_earthwork` | 路权准备与移除 | required | 从已勘测路线至合格准备路线。 | 独立清理、整平并移除沟槽或穿越材料；区分可回填料与外运弃土。 | 已勘测面积与开挖体积。 |
| `pipe_assembly` | 布管与连接 | required | 从交付部件至已检验连接管段。 | 用焊接与检验整合管节、弯头及管件，返修或拒收不合格接头。 | 安装管材质量与接头数。 |
| `joint_coating` | 现场接头防护 | required | 从已检验连接管段至合格涂覆管段。 | 施涂并检验现场防腐，修补缺陷并处置残余物。 | 合格防腐面积与接头数。 |
| `line_install` | 敷设、试验与交付 | required | 从准备路线及涂覆管段至签署验收。 | 敷设、回填或穿越、试验、返修、恢复并交付一条管线。 | 已验收里程与一个工程。 |

### 过程：路权准备与移除（`corridor_earthwork`）

#### 输入

##### 产品流

###### 路权设备能源（`corridor_energy`）

自有前景设备用于清理、整平与开挖时计量实际燃料与电力；不重复计入承包服务内含燃料。

- 选定流：按实际燃料或电力区分的能源载体
- 流属性/单位：按能源载体的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：将实测使用分配至 `corridor_earthwork`，核对发电机燃料与发电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_corridor`
- 数量范围：暂定能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/project
  - 基准：含转换说明的全部已声明能源载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 路权开挖服务（`earthwork_service`）

仅在单独外包时记录，不得同时把同一承包商设备作为自有前景设备重复计入。

- 选定流：实际清理与开挖工法的建设服务
- 流属性/单位：已声明服务属性 / 已声明单位
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- 数量规则：将外包范围与实测面积及开挖量核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_corridor`
- 数量范围：暂定服务筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：declared service units/project
  - 基准：宽泛初筛，非设计工程量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格准备路线（`prepared_route`）

向敷设过程的实测内部交接，并非另一项可售资产。

- 选定流：合格准备路权或穿越路线
- 流属性/单位：长度 / km
- 数量规则：累加不重叠的合格竣工里程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_corridor`
- 数量范围：路线长度筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：km/project
  - 基准：验收竣工路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 外运开挖弃土（`exported_spoil`）

回用土留在前景回填平衡内，仅记录跨边界运往目的地的移出材料。

- 选定流：按材料与去向区分的开挖土石
- 流属性/单位：质量 / kg
- 数量规则：用实测密度核对开挖、回填、库存与外运。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_corridor`
- 数量范围：弃土外运筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000000
  - 单位：kg/project
  - 基准：仅外运质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：布管与连接（`pipe_assembly`）

#### 输入

##### 产品流

###### 连接设备能源（`assembly_energy`）

自有前景设备用于弯管、焊接与检验时计量实际燃料与电力；不重复计入承包服务内含燃料。

- 选定流：按实际燃料或电力区分的能源载体
- 流属性/单位：按能源载体的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：将实测使用分配至 `pipe_assembly`，核对发电机燃料与发电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joints`
- 数量范围：暂定能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/project
  - 基准：含转换说明的全部已声明能源载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 管节与管件（`pipe_components`）

按规格列出管节、弯头、阀门及管件；仅在工程范围内记录一体化泵站部件。

- 选定流：按材料及规格区分的管节与管件
- 流属性/单位：质量 / kg
- 数量规则：核对交付、安装、退回和拒收质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：部件质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000000
  - 单位：kg/project
  - 基准：交付的指定部件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外包连接与检验服务（`joining_service`）

仅在弯管、焊接或无损检测单独外包时记录，不得与自有设备或其他承包服务重叠。

- 选定流：按实际工法区分的管材连接与检验服务
- 流属性/单位：服务量 / 已声明单位
- 数量规则：核对发票、合格接头台账和返修工作。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joints`
- 数量范围：连接服务筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：declared service units/project
  - 基准：外包连接与检验工作
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已检验连接管段（`joined_string`）

仅在焊缝检验通过后作为内部产出交给现场防腐。

- 选定流：已检验连接管段
- 流属性/单位：长度 / km
- 数量规则：返修复验后仅计一次合格连接里程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_joints`
- 数量范围：连接长度筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：km/project
  - 基准：已检验合格长度
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拒收管材切除段（`rejected_pipe`）

不合格接头返修；不可修复切除段转向有记录的回收或处置，不得计入合格产出。

- 选定流：按材料及去向区分的拒收管材和焊口切除段
- 流属性/单位：质量 / kg
- 数量规则：记录返修决策后离开过程的材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_joints`
- 数量范围：拒收质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/project
  - 基准：返修后外运切除段
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：现场接头防护（`joint_coating`）

#### 输入

##### 产品流

###### 防腐设备能源（`coating_energy`）

自有前景设备用于表面准备、施涂与检验时计量实际燃料与电力；不重复计入承包服务内含燃料。

- 选定流：按实际燃料或电力区分的能源载体
- 流属性/单位：按能源载体的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：将实测使用分配至 `joint_coating`，核对发电机燃料与发电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating`
- 数量范围：暂定能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/project
  - 基准：含转换说明的全部已声明能源载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收已检验连接管段（`joined_string_input`）

接收 `pipe_assembly` 的已检验内部产出，不重复计入上游负担。

- 选定流：已检验连接管段
- 流属性/单位：长度 / km
- 数量规则：等于进入现场防腐的合格连接长度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_joints`
- 数量范围：连接管段交接筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：km/project
  - 基准：匹配 `joined_string` 输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 防腐及修补材料（`coating_material`）

对已检验连接管段施涂；在原始记录中区分底漆、包覆层、防腐料和修补料。

- 选定流：按配方区分的现场接头防腐材料
- 流属性/单位：质量 / kg
- 数量规则：核对采购、施涂、退回和弃置质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating`
- 数量范围：防腐材料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/project
  - 基准：施涂及弃置的现场材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外包现场防腐服务（`coating_service`）

由承包商承担时记录单独施涂、检验或返修服务，并避免与自有设备能源重复。

- 选定流：按工法区分的现场接头防腐与检验服务
- 流属性/单位：服务量 / 已声明单位
- 数量规则：核对合同范围、合格接头面积与返修日志。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating`
- 数量范围：防腐服务筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：declared service units/project
  - 基准：外包现场防腐与检验
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格涂覆管段（`coated_string`）

仅将涂层检验合格管段交给敷设；缺陷部位返回表面修补。

- 选定流：合格涂覆管段
- 流属性/单位：长度 / km
- 数量规则：与合格连接长度核对防腐检验结果。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_coating`
- 数量范围：涂覆长度筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：km/project
  - 基准：防腐检验合格长度
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 防腐残余物（`coating_residue`）

包装、未用防腐料及清除的缺陷涂层按材料送至有记录的回收或处置。

- 选定流：按材料和去向区分的现场防腐残余物
- 流属性/单位：质量 / kg
- 数量规则：从收集残余物中扣除可用退回库存。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating`
- 数量范围：残余物质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/project
  - 基准：返修后跨边界残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

仅在记录明确防腐排放的具体物质、数量和受纳环境后添加相应基本流；泛称 VOC 不构成精确流身份。

### 过程：敷设、试验与交付（`line_install`）

#### 输入

##### 产品流

###### 敷设设备能源（`install_energy`）

自有前景设备用于下沟、穿越、回填及恢复时计量实际燃料与电力；不重复计入承包服务内含燃料。

- 选定流：按实际燃料或电力区分的能源载体
- 流属性/单位：按能源载体的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：将实测使用分配至 `line_install`，核对发电机燃料与发电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 数量范围：暂定能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/project
  - 基准：含转换说明的全部已声明能源载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收准备路线（`prepared_route_input`）

接收 `corridor_earthwork` 的实测内部产出，不重复计入开挖负担。

- 选定流：合格准备路权或穿越路线
- 流属性/单位：长度 / km
- 数量规则：匹配不重叠的 `prepared_route` 输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_corridor`
- 数量范围：准备路线交接筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：km/project
  - 基准：匹配 `prepared_route` 输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收涂覆管段（`coated_string_input`）

仅接收 `joint_coating` 的合格涂覆管段，不额外引入采购管材负担。

- 选定流：合格涂覆管段
- 流属性/单位：长度 / km
- 数量规则：匹配 `coated_string` 输出及合格敷设里程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_coating`
- 数量范围：涂覆管段交接筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000
  - 单位：km/project
  - 基准：匹配 `coated_string` 输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 敷设与穿越服务（`installation_service`）

按区段记录承包商下沟、钻越或海底敷设，不重复计入自有设备投入。

- 选定流：按实际路线区分的敷设服务
- 流属性/单位：服务量 / 已声明单位
- 数量规则：核对服务账单与不重叠的竣工里程。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 数量范围：敷设服务筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：declared service units/project
  - 基准：不重复自有设备的路线服务
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 压力试验用水（`test_water`）

按试验区段记录水源；若批准使用空气或气体，须记录实际介质及替代路线说明。

- 选定流：水压试验供水
- 流属性/单位：体积 / m3
- 数量规则：计量取水及区段间转移。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_test`
- 数量范围：试压用水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：m3/project
  - 基准：扣除有记录回用的取水量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收长距离管道（`accepted_pipeline`）

通过压力试验、缺陷修复、现场恢复及签字交付后形成唯一最终资产。

- 选定流：建成长距离管道资产
- 流属性/单位：Count / pipeline project
- 数量规则：按路线及泵站限定条件记录一个验收工程。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_test`
- 数量范围：验收工程计数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：project/project
  - 基准：一个已签署工程参考
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`phmsa-pipeline-construction`

##### 废物流

###### 试压废水（`spent_test_water`）

按适用情况记录转送或处理的试验水；基本排放必须明确物质及受纳环境。

- 选定流：按去向区分的试压废水
- 流属性/单位：体积 / m3
- 数量规则：平衡取水、回用、处理、排放及余水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收管道工程
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_test`
- 数量范围：废水量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：m3/project
  - 基准：扣除有记录回用后的废水体积
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | 整体工程 | 验收管道仅计一次；准备路线、连接管段及涂覆管段均为内部交接，而非联产品。 | `phmsa-pipeline-construction` |
| `shared_plant` | 设备与泵站 | 共享设备和临时工程按实测使用、分段里程或已披露因果驱动分配；自有燃料与承包服务不可双计。 | `ferc-pipeline-construction` |
| `reject_burden` | 焊接和防腐拒收 | 返修负担留在产生过程；外运废料或残余物须有去向，不预设冲减合格产出。 | `phmsa-pipeline-construction` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_corridor` | `corridor_earthwork` | 服务、能源、路线、弃土 | 勘测、合同、燃料与运输日志 | 里程、面积、开挖、密度、回用、外运、去向、载体、能源量、发电机状态 | 勘测、水表与票据核对 | km, m2, m3, kg, MJ, kWh | 每区段 | 施工期 | 全路线 | 合计验收里程并平衡材料和能源 | 已签署勘测、计量表与称重票据 |
| `cp_components` | `pipe_assembly` | 管材与管件 | 交付台账 | 等级、直径、壁厚、质量、安装、退回、拒收 | 扫描并核对证书 | kg | 每批交付 | 施工期 | 全部区段 | 按规格平衡 | 钢厂证书与竣工台账 |
| `cp_joints` | `pipe_assembly` | 能源、服务、连接管段与拒收 | 焊接、燃料与检验日志 | 接头编号、里程、服务量、载体、能源量、发电机状态、检验、返修、切除质量 | 接头检验与计量台账 | km, kg, MJ, kWh, declared unit | 每接头 | 施工期 | 所有接头 | 复验后仅计一次合格产出并核对能源 | 无损检测、计量表与返修报告 |
| `cp_coating` | `joint_coating` | 能源、服务、防腐、管段、残余物 | 防腐、燃料与检验日志 | 批次、施涂、退回、残余、接头编号、服务量、载体、能源量、发电机状态、返修 | 批次、计量与检漏试验核对 | kg, km, MJ, kWh, declared unit | 每接头 | 施工期 | 所有涂覆接头 | 合计合格长度、能源与残余物 | 批次表、计量表与试验报告 |
| `cp_install` | `line_install` | 能源与敷设服务 | 竣工、燃料与合同日志 | 里程、工法、服务量、载体、能源量、发电机状态、恢复 | 勘测、计量与票据核对 | km, MJ, kWh, declared unit | 每区段 | 施工期 | 全路线 | 不重叠合格区段与能源 | 竣工图、计量表及签字 |
| `cp_test` | `line_install` | 用水、废水、验收资产 | 试验交付日志 | 区段、介质、取水、回用、排放、处理、结果、签字 | 水表与试验报告 | m3, project | 每试验区段 | 试验至交付 | 所有区段 | 平衡水量并只计一个工程 | 压力曲线与交付证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `route_sum` | 管线 | 合计不重叠的合格竣工里程，同一里程的替代工法互斥。 | 里程与工法 | 合格 km | `phmsa-pipeline-construction` |
| `material_balance` | 管材与弃土 | 交付=安装+退回+拒收；开挖=回用+外运+余存，先完成单位转换。 | 勘测、交付及运输票据 | 核对后 kg 或 m3 | `phmsa-pipeline-construction` |
| `hydrotest_balance` | 试验介质 | 进水+转入=转出+排放+处理+余存，逐区段计算。 | 水表与转移日志 | 废水 m3 | `phmsa-pipeline-construction` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route` | 管线 | 每段合格里程都有唯一工法、管材规格和试验处置。 | 竣工与试验台账 |
| `dq_rework` | 焊缝及防腐 | 每项失败检验须关联返修复验、回收或处置；未解决缺陷阻断验收。 | 缺陷日志 |
| `dq_balances` | 管材、弃土与水 | 发布前调查无法解释的平衡差额。 | 平衡表 |
| `dq_identity` | 具体交换 | 确认实际流 UUID 及属性/单位支持行；Flow Set 不等于已完成身份解析。 | 平台详情记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_check` | 参考产出 | 若焊接、防腐、压力、恢复及签字交付记录未覆盖声明范围，不得输出验收管线。 | `phmsa-pipeline-construction` |
| `route_check` | 替代路线 | 验证里程不重叠，且具备工法特定的开挖与敷设记录。 | `ferc-pipeline-construction` |
| `reject_check` | 失败接头与防腐 | 必须有返修复验、回收或处置；不合格材料不得进入验收产出。 | `phmsa-pipeline-construction` |
| `scope_check` | 资产 | 不得将运输服务或本地配送主管当作建设资产参考流。 | `unsd-cpc3-53241` |

## 10. 发布数据集档案

| Field | Value |
| --- | --- |
| dataset_role | 一个验收长距离管道的前景建设数据包。 |
| downstream_use | 用于资产建设的 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 声明介质、长度、材料、工法及泵站范围后的路线匹配基础设施建模。 |
| excluded_use | 管道运输运营、本地配送及不合条件的项目比较。 |
| required_metadata | 地理、路线、里程、介质、管材规格、分段工法、泵站范围、试验与交付日期。 |
| required_quality_disclosure | 材料与水量平衡、共享设备、拒收路线、未解析身份及暂定范围。 |
| update_trigger | 路线、直径、材料或泵站范围变更，试验修订或取得已验证流身份。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-53241` | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品范围与排除。 |
| `phmsa-pipeline-construction` | official_guidance | https://www.phmsa.dot.gov/technical-resources/pipeline/pipeline-construction/phases-pipeline-construction-overview | 施工、试验、返修及恢复顺序。 |
| `ferc-pipeline-construction` | official_guidance | https://www.ferc.gov/interstate-natural-gas-facility-my-land-what-do-i-need-know | 敷设及压力试验关口。 |
