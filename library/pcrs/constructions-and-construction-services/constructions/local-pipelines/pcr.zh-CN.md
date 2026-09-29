---
pcr_id: pcr.constructions-and-construction-services.constructions.local-pipelines
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 本地管线

## 1. 范围与适用性

本 PCR 适用于新建并验收的本地燃气、饮用水、污水、热水或蒸汽管线区段。产品是签署试验及移交文件时的已安装土木资产，不是交付的管材、输送介质或后续配送服务。包括合同范围内本地主管及直接附属的阀门和井室。排除长距离输送管道、非管道渡槽、处理厂、独立交付的泵站或产能设施以及日常运营。应声明介质、设计压力或重力工况、长度、直径、管材、走向、敷设工法及验收条件。[unsd-cpc3-53251; epa-water-main-preparation; epa-sewer-evaluation]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.local-pipelines |
| classification_refs | CPC 3.0 53251，本地管线；映射接受另行决定。 |
| covered_products | 验收的本地燃气、饮用水、污水、热水和蒸汽管段及一体化管件、阀门和井室。 |
| excluded_products | 长距离管道、渡槽、处理厂、独立承包的泵站及配送运营服务。 |
| representative_product | 一个按规格建造且通过验收的本地管线合同。 |
| production_route | 勘测及准备走廊；开挖或非开挖敷设；连接管材与管件；铺设、防护和恢复；按介质试验、调理并签署移交。 |
| market_state | 已安装、经试验并验收的基础设施资产。 |

父活动 `line_install` 包含开挖和非开挖两种路线。开挖路线须记录开挖量、弃土及回填；非开挖路线须记录钻孔路径、钻井液或工作井。它们可存在于不同竣工区段，但同一里程互斥。管材及介质会改变连接、防护和验收记录，并不改变产品类别。逐里程记录工法，保留竣工图、试验报告及验收签字。[fhwa-utility-cuts; epa-water-main-preparation; epa-sewer-evaluation]

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 签署合同边界内建成的本地管线资产。 |
| How much | 一个验收合同；另报验收管长 m 和安装质量 kg。 |
| How well | 设计、接头、渗漏或压力、适用的卫生或污水检查、恢复及交付检查均合格。 |
| How long or cycle | 一个施工项目至签署验收；设计寿命作为元数据，不纳入运营负担。 |
| reference_flow_link | `line_install` 的 `accepted_local_line`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 个验收本地管线合同 |
| Reference product flow | 建成本地管线资产；UUID 未解析 |
| Reference flow property | Count；UUID 未解析 |
| Reference unit group | Count；UUID 未解析 |
| Reference unit | accepted contract |
| Required qualifiers | 输送介质；压力或重力工况；验收长度；直径与材料；位置；开挖及非开挖里程；试验与调理要求；一体化设施；验收日期 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `contract_count` | 参考产出 | Count，UUID 未解析 | contract | 每个签署验收的合同只计一次，另报长度便于比较。 |
| `pipe_reconciliation` | 管材与管件 | 质量 | kg | 按材料规格核对交付、安装、退回、拒收及留存库存的质量。 |
| `corridor_measurement` | 敷设路线 | 长度、面积及原状体积 | m, m2, m3 | 验收里程只计一次；开挖原状体积由勘测获得，不以松方运输体积替代。 |
| `test_water_balance` | 水压试验与冲洗 | 体积 | m3 | 按试验区段记录进水、回用、排放及余水；循环用水不重复作为新进水。 |
| `energy_balance` | 现场设备 | 分能源载体能量或质量 | kWh, MJ or kg | 核对外购电、发电机输出及燃料，避免重复计数。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 合同施工前已勘测的既有街道、地表或公用设施走廊。 |
| starting_condition_role | 物理基线；既有设施不等于零负担材料输入。 |
| product_classification_scope | 含已声明一体化结构的一个验收本地管线资产。 |
| recursive_input_rule | 采购的完整管节与施工服务从供应商交付点进入；整套验收本地管网不得未经拆解作为部件递归输入。 |
| upstream_dataset_requirement | 匹配材料、地区及技术的管材、管件、能源、运输、水、化学品与废物管理数据集。 |
| disclosure | 既有路面与土壤状态；分里程路线；开挖与弃土去向；材料与接头规格；试验水及排放；返修循环；一体化结构；验收证据。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | 整体资产 | 纳入准备、连接和敷设、试验、适用的消毒或污水检查、返修、恢复至交付；排除运营和输送介质。 | `unsd-cpc3-53251`; `epa-water-main-preparation`; `epa-sewer-evaluation` |
| `removal_handoff` | `corridor_removal` | 将从已勘测地表移出的材料独立计量，只把验收的准备路线交给敷设；区分回用回填料与外运弃土。 | `fhwa-utility-cuts` |
| `assembly_handoff` | `pipe_assembly` | 记录管段、弯头、管件、阀门、密封件及接头耗材；把已检验连接组件而非未检验库存交给敷设。缺陷接头返回组装或有明确回收/处置去向。 | `epa-water-main-preparation` |
| `route_delta` | `line_install` | 按里程区分开挖回填与非开挖钻孔、工作井及钻井液义务；同一已装区段不得重复计数。 | `fhwa-utility-cuts` |
| `acceptance_medium` | `line_install` | 实施适用于该管线的压力/渗漏试验；按需记录饮用水冲洗、消毒和水质试验或污水管线检查，不将这些步骤强加于所有介质。 | `epa-water-main-preparation`; `epa-sewer-evaluation` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `corridor_removal` | 走廊准备与材料移除 | required | 已勘测基线至验收准备路线。 | 独立于管材制造和敷设移除路面、土壤或钻孔材料；移交准备路线并处置弃土或残余物。 | 准备里程、已勘测原状体积及弃土质量。 |
| `pipe_assembly` | 管材及管件组装 | required | 交付部件至已检验连接组件。 | 连接管材、弯头、管件、阀门及密封件；仅在采购时计入单独开票的连接服务；检验接头，返修或处置拒收件。 | 安装部件质量及合格接头数。 |
| `line_install` | 敷设、试验及验收 | required | 准备路线及已检验组件至签署验收资产。 | 铺设与支承、回填或钻孔、压力/渗漏试验、按介质调理、恢复并交付。 | 验收长度及一个验收合同。 |

### 过程：走廊准备与材料移除（`corridor_removal`）

#### 输入

##### 产品流

###### 走廊施工设备能源（`corridor_energy`）

记录自有开挖或工作井设备按载体区分的能源；不与外购开挖服务内含能源重复。

- 选定流：实际燃料或电力载体
- 流属性/单位：按载体区分的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：汇总归属于本节点的实测或发票能源。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_corridor`
- 数量范围：暂定走廊能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/contract
  - 基准：每验收合同全部已声明载体转为 MJ 当量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购开挖服务（`excavation_service`）

仅在开挖被外包且不由自有前景设备代表时记录；以合同台账确定交换量。

- 选定流：土方与开挖施工服务
- 流属性/单位：兼容合同的服务属性 / 合同申报单位
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- 数量规则：记录分配到本合同的发票服务数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_corridor`
- 数量范围：暂定外购服务筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：contract-declared service unit/contract
  - 基准：每验收合同的外购开挖服务
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收准备路线（`prepared_alignment`）

已独立检验并交给 `line_install` 的走廊或钻孔路径，是工程内部中间产物，不是最终产品。

- 选定流：已准备的本地管线走廊；UUID 未解析
- 流属性/单位：长度 / m
- 数量规则：勘测验收准备里程，不重复计算重叠区段。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_corridor`
- 数量范围：暂定准备长度筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：m/contract
  - 基准：每合同验收的准备里程
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 外运开挖弃土（`exported_spoil`）

记录移出工程并送往明确去向的土壤、路面或钻孔残余；回用作回填的材料留在内部，不计为外运废物。

- 选定流：按材料和去向区分的开挖或钻孔弃土；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：称量外运材料，或按勘测体积、密度及已记录回用量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_corridor`
- 数量范围：暂定外运弃土筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/contract
  - 基准：扣除已记录内部回用后的外运弃土
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：管材及管件组装（`pipe_assembly`）

#### 输入

##### 产品流

###### 交付的管材与管件（`pipe_components`）

按规格采集管段、弯头、三通、阀门、接头、密封件及接头材料；不得以整条建成管网代替这些部件。

- 选定流：按材料和规格区分的管材及管件；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：交付质量减去退回未用库存，并与安装及拒收材料核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：暂定部件质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/contract
  - 基准：验收合同交付的管材与管件
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外包连接服务（`joining_service`）

仅在焊接、热熔或机械接头安装服务单独采购时记录，避免与自有劳务和能源重复计入。

- 选定流：按工法区分的外包管件连接服务；UUID 未解析
- 流属性/单位：兼容合同的服务属性 / 合同申报单位
- 数量规则：根据合同范围，把发票分配到已检验接头，包含返修。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：暂定连接服务筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：contract-declared service unit/contract
  - 基准：每验收合同单独采购的连接工作
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 连接用能源（`joining_energy`）

按实际技术记录焊接、热熔或机械接头设备能源。

- 选定流：实际连接能源载体
- 流属性/单位：按载体区分的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：把实测使用量分配到合格及拒收接头，包含返修。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：暂定连接能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/contract
  - 基准：每验收合同已声明的连接能源
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已检验连接管组件（`inspected_assembly`）

仅把通过检查的已连接管段及管件交给 `line_install`。

- 选定流：已检验本地管组件；UUID 未解析
- 流属性/单位：长度 / m
- 数量规则：量取合格连接长度，排除等待返修的拒收件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：暂定合格组件筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：m/contract
  - 基准：每合同已检验连接长度
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拒收接头与切边料（`assembly_rejects`）

不合格接头须有返回 `pipe_assembly` 的返修记录，或明确进入回收/处置；仅对最终跨边界移出量计数一次。

- 选定流：按去向区分的拒收管材与接头材料；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：核对拒收质量与返修、退库、回收及处置凭证。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：暂定拒收质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/contract
  - 基准：返修后最终离开组装节点的拒收质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：敷设、试验及验收（`line_install`）

#### 输入

##### 产品流

###### 接收准备路线（`alignment_received`）

接收 `corridor_removal` 移交的已验收长度；这是内部图连接，不是外购施工服务。

- 选定流：已准备的本地管线走廊；UUID 未解析
- 流属性/单位：长度 / m
- 数量规则：核对准备里程与安装里程，解释差额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install_test`
- 数量范围：暂定接收路线筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：m/contract
  - 基准：每合同接收的验收里程
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收已检验组件（`assembly_received`）

接收 `pipe_assembly` 的已检验组件，不得把未检验或拒收管段当作合格安装输入。

- 选定流：已检验本地管组件；UUID 未解析
- 流属性/单位：长度 / m
- 数量规则：核对接收、安装及退回未用的长度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install_test`
- 数量范围：暂定接收组件筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000
  - 单位：m/contract
  - 基准：每合同接收的已检验长度
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 敷设用能源（`installation_energy`）

记录铺设、压实、钻孔、试验和恢复设备的能源，并区分供应商服务内含负担。

- 选定流：实际敷设能源载体
- 流属性/单位：按载体区分的能量或质量 / kWh, MJ or kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按活动及路线里程分配电表或燃料记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install_test`
- 数量范围：暂定敷设能源筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/contract
  - 基准：每验收合同已声明的能源载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外购回填服务（`backfill_service`）

仅在回填压实服务与自有设备作业分开外购时记录。

- 选定流：回填与压实施工服务
- 流属性/单位：兼容合同的服务属性 / 合同申报单位
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `backfill-and-compaction`
- 数量规则：记录可归属开挖区段的发票服务数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install_test`
- 数量范围：暂定回填服务筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：contract-declared service unit/contract
  - 基准：每验收合同的外购回填服务
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 垫层与外购回填料（`bedding_backfill`）

将外购的颗粒垫层、管周填料和恢复材料，与现场开挖弃土回用量分开记录。

- 选定流：按规格区分的垫层与外购回填料；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：交付质量减未用退回量，并与实际铺设量核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install_test`
- 数量范围：暂定外购填料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/contract
  - 基准：验收合同外购的垫层与回填料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 非开挖钻井液（`drilling_fluid`）

仅用于钻孔或定向钻进区段；采集配方、新供应量、回收量和处置量，并与开挖垫层分开。

- 选定流：按实际配方区分的钻井液；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：非开挖区段领用的新材料减去未开封退回量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install_test`
- 来源：`fhwa-utility-cuts`
- 数量范围：暂定钻井液筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/contract
  - 基准：验收合同的新钻井液材料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 试验和冲洗用水（`test_water`）

记录适用的水压试验、冲洗或消毒进水；气压试验可能不需要水。使用体积记录，不绑定缺乏体积兼容证据的质量单位 Flow Set 组。

- 选定流：管线试验或冲洗供水；UUID 未解析
- 流属性/单位：体积 / m3
- 数量规则：计量外部进水；循环用水不再次计入新供水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install_test`
- 来源：`epa-water-main-preparation`
- 数量范围：暂定进水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：m3/contract
  - 基准：每验收合同新增的试验及冲洗水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饮用水管线消毒剂（`disinfectant`）

仅在饮用水管线要求消毒时记录；采集实际化学物质和浓度，不把饮用水处理强加于燃气、污水或供热线。

- 选定流：按物质及配方区分的消毒剂；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：核对交付、投加、退回及剩余化学品质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install_test`
- 来源：`epa-water-main-preparation`
- 数量范围：暂定消毒剂筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/contract
  - 基准：所需饮用水管线消毒领用的化学品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收本地管线（`accepted_local_line`）

只对已试验、恢复并签署验收的资产计数；返修循环和拒收长度不增加产出。

- 选定流：建成本地管线资产；UUID 未解析
- 流属性/单位：数量 / accepted contract
- 数量规则：签署验收后输出一个资产，另报验收长度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install_test`
- 来源：`unsd-cpc3-53251`
- 数量范围：验收数量核验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：accepted contract
  - 基准：已签署验收合同
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 试验与冲洗排水（`test_discharge`）

记录送往收集或处理的试验与冲洗水，并按需声明排放去向及余氯。

- 选定流：按去向区分的试验或冲洗废水；UUID 未解析
- 流属性/单位：体积 / m3
- 数量规则：进水加初始充水减回用、余水和已测损失；用处置记录核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收本地管线合同
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install_test`
- 来源：`epa-water-main-preparation`
- 数量范围：暂定试验排水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：m3/contract
  - 基准：每验收合同外运的试验与冲洗水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | 整体合同 | 验收管线是唯一预期产出；不得把施工负担分配给输送的燃气、水、污水或热。 | `unsd-cpc3-53251` |
| `shared_equipment` | 共享设备 | 按有记录的活动和里程，将实测时间、燃料或设备使用分配至本合同；披露剩余估计。 |  |
| `reject_burden` | `pipe_assembly`, `line_install` | 返修和失败试验负担保留在验收资产；只有物理记录明确的回收材料才可作为单独去向，拒收长度不计入验收产出。 | `epa-water-main-preparation`; `epa-sewer-evaluation` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_corridor` | `corridor_removal` | 能源、外购服务、准备里程、弃土 | 勘测、日志、发票、运输单 | 里程、工法、开挖区段、原状体积、燃料、电力、外包数量、弃土质量、回用、去向 | 竣工勘测与原始凭证 | m, m3, kg, kWh, MJ, service unit | 按区段和活动 | 全施工合同 | 所有开挖、钻孔及工作井区段 | 核对路线长度与材料移除；每合同汇总一次 | 勘测、设备日志、发票、地磅及去向凭证 |
| `cp_components` | `pipe_assembly` | 部件、连接服务、能源、合格接头、拒收件 | 材料台账与检查日志 | 管材/管件类型、交付/退回/安装/拒收 kg、连接服务发票、接头数、检查结果、返修、能源量 | 供应商发票、库存台账及接头试验 | kg, m, count, kWh or MJ, service unit | 按批次和接头 | 全施工合同 | 合同内全部管组件 | 核对库存与合格连接长度 | 材料证书、接头检查与拒收凭证 |
| `cp_install_test` | `line_install` | 内部交接、能源、服务、垫层、钻井液、水、消毒剂、验收资产、排水 | 竣工、电表、试验及验收记录 | 准备/接收/安装长度、工法、能源量、服务量、外购垫层 kg、钻井液 kg、化学品物质及 kg、进水/回用/排水 m3、试验类型/结果、消毒或污水检查、缺陷与返修、验收签字 | 竣工测量、电表、发票和签署试验 | m, count, kg, m3, kWh, MJ, service unit | 按路线区段和试验 | 全施工合同至交付 | 全部验收区段与失败试验循环 | 只计一次验收产出；核对材料、水和里程 | 试验报告、水表、排水凭证、水质结果及签署交付 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `spoil_mass` | `exported_spoil` | 外运质量 = 称量运输质量，或勘测原状体积 × 已记录体积密度 − 内部回用；解释不确定性。 | 开挖体积、密度、回用和运输单 | 按材料区分的外运弃土 kg |  |
| `component_balance` | `pipe_components`, `assembly_rejects` | 在已说明测量不确定度内，交付量 = 安装量 + 退回未用量 + 外移拒收量 + 留存库存。 | 材料台账及拒收记录 | 按材料规格的 kg |  |
| `water_balance` | `test_water`, `test_discharge` | 外部进水 + 初始充水 = 排水 + 余水 + 已测损失；内部回用不是第二次进水。 | 进水、回用、排水及余水体积 | 每试验区段 m3 | `epa-water-main-preparation` |
| `route_sum` | 验收长度 | 验收长度 = 按工法汇总不重叠的已签署竣工里程。 | 竣工里程及验收 | 验收 m | `fhwa-utility-cuts` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 具体流交换 | 每个最终 UUID 都须核实类型、属性、单位、范围与支持记录；Flow Set 不是最终 UUID。 | 平台详情及前景选择记录 |
| `dq_completion` | 整体合同 | 覆盖所有验收里程及试验/返修循环直到签署交付；披露缺失的供应商数据。 | 竣工图、验收、发票及缺口清单 |
| `dq_routes` | 开挖与非开挖区段 | 保留每段位置与工法，不重复计入工作井、钻孔或重叠开挖。 | 路线图及施工日志 |
| `dq_medium` | 试验与调理 | 按需保留介质特定的压力、渗漏、饮用水消毒或污水检查证据。 | 签署试验、实验室结果及检查报告 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `accepted_gate` | 参考产出 | 若无签署的竣工长度、适用的试验结果、场地恢复及业主验收，不得声明最终产出。 | `epa-water-main-preparation`; `epa-sewer-evaluation` |
| `handoff_match` | 过程图 | 准备路线与已检验组件的产出须有匹配的 `line_install` 接收卡；解释长度或材料差额。 |  |
| `route_evidence` | 路线差异 | 要求分里程的开挖或非开挖证据、不同开挖/钻孔残余及恢复记录；同一里程不得重复计数。 | `fhwa-utility-cuts` |
| `reject_resolution` | 缺陷 | 每个失败接头或试验均须记录返修、退回、回收或处置；未解决拒收件不得计入验收产出。 | `epa-water-main-preparation`; `epa-sewer-evaluation` |
| `water_balance_check` | 水压试验及冲洗 | 核对试验进水、回用、排水及余水；只有实际路线不用水时，试验水可记零。 | `epa-water-main-preparation` |

## 10. 已发布数据集档案

| Field | Value |
| --- | --- |
| dataset_role | 验收本地管线的施工阶段前景数据包。 |
| downstream_use | 审查后作为过程和生命周期模型组装中的 `secondary_dataset` 或 `background_dataset`。 |
| allowed_use | 匹配路线、介质、材料和地区的本地管线施工比较。 |
| excluded_use | 长距离输送、仅管材制造、处理设施及配送运营服务。 |
| required_metadata | 介质、工况、管材规格、验收长度、分里程敷设路线、一体化结构、试验程序、地点、日期及签署交付。 |
| required_quality_disclosure | 材料平衡、开挖体积、弃土去向、能源、水、缺陷、供应商数据及未解析 UUID 的覆盖和不确定性。 |
| update_trigger | 会改变模型边界或清单的材料、路线、介质、验收或数据源变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-53251` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, class 53251 Local pipelines, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品边界与排除项。 |
| `fhwa-utility-cuts` | official_guidance | US Federal Highway Administration, Manual for Controlling and Reducing Pavement Utility Cuts, https://www.fhwa.dot.gov/utilities/utilitycuts/manual.pdf | 开挖和非开挖路线区分及恢复。 |
| `epa-water-main-preparation` | official_guidance | US Environmental Protection Agency, New or Repaired Water Mains, https://www.epa.gov/sites/production/files/2015-09/documents/neworrepairedwatermains.pdf | 供水主管试验、冲洗、消毒和验收阶段。 |
| `epa-sewer-evaluation` | official_guidance | US Environmental Protection Agency, Prevention and Correction of Excessive Infiltration and Inflow into Sewer Systems, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100WH40.TXT | 污水管线渗漏/气压试验与检查验收。 |
