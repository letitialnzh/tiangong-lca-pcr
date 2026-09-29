---
pcr_id: pcr.constructions-and-construction-services.constructions.harbours-waterways-and-related-facilities
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 港口、航道及相关设施

## 1. 范围与适用性

本 PCR 适用于经现场验收的港口或可航水道工程资产：航道或港池、码头、栈桥、突堤、船坞、防波堤、船闸及合同内的相关港工设施。工程可含航道成形分支、港工结构分支或两者；必须报告实际合同组成，不得把不同功能资产视为可互换产出。不包括船舶、货物装卸与港口运营服务、普通输水渠道、水坝、灌溉及防洪工程和单独承包的建筑物。仅当疏浚新建或改良所声明的航运资产时才纳入本 PCR；交付后的例行维护疏浚不属于建设交付边界。[unsd-cpc-53232; pianc-navigation-infrastructure-2014]

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.harbours-waterways-and-related-facilities |
| classification_refs | CPC 3.0 53232，港口、航道及相关设施。 |
| covered_products | 验收的航道与港池、泊位、码头、栈桥、突堤、船坞、防波堤、船闸及合同内港工设施。 |
| excluded_products | 船舶、港口运营、例行维护疏浚、普通输水渠道、水坝、灌溉及防洪工程和单独计量的建筑物。 |
| representative_product | 一个具有唯一标识、已验收的港航土木工程资产或有界合同段。 |
| production_route | 按条件进行新建疏浚和疏浚物安置、港工基础与结构安装，随后检验验收。 |
| market_state | 指定现场已安装并验收的土木工程设施；运营服务不是产出。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一个声明的航运或港口土木工程资产或有界合同段。 |
| How much | 1 个验收资产或合同段；另报告适用的竣工航道长度、疏浚体积、泊位长度、结构尺寸及工程量清单。 |
| How well | 满足合同几何、通航净空、结构与环境验收要求。 |
| How long or cycle | 从新建或资本改良工程开始至签署交付的一份合同；使用寿命属于单独的情景元数据。 |
| reference_flow_link | `inspection_handover` 的 `accepted_marine_asset`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 个验收资产或合同段 |
| Reference product flow | 验收的港口、航道或相关港工设施；UUID 未解析 |
| Reference flow property | 件数；UUID 未解析 |
| Reference unit group | 件数；UUID 未解析 |
| Reference unit | item |
| Required qualifiers | 资产类型与航运功能；工程和合同段标识；地点及水体；竣工几何与疏浚基准面；疏浚物去向；结构规格；所含接口；验收测试及交付日期。 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `asset_count` | 参考产品 | 件数，UUID 未解析 | item | 每个验收的有界资产或合同段只计一次；不能因为都按件计量就把不同资产视为等价。 |
| `dredged_volume` | 新建疏浚 | 体积 | m3 | 使用统一基准面的疏浚前后测量得到原位挖方量；区分松散运输体积和干沉积物质量。 |
| `structure_quantity` | 建造工程 | 质量、体积或长度 | kg、m3 或 m | 用有据可查的密度或尺寸将清单量换算成安装量；保留材料身份。 |
| `energy_transport` | 设备和运输 | 能量、燃料质量或质量×距离 | kWh、MJ、kg 或 t·km | 各载能品种和运输方式分开；采用实际运输质量和载货距离。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 开工前测量的水深、岸线和海床、既有结构、沉积物质量及合同设计基线。 |
| starting_condition_role | 新建挖方和安装的物理基线，而不是零负担的完工设施。 |
| product_classification_scope | 一个验收的港口、航道或相关港工资产或有界合同段。 |
| recursive_input_rule | 采购的港工部件和服务在供应门进入；完工港航资产不得隐含地作为原料再次投入。 |
| upstream_dataset_requirement | 将材料、能源、水、运输、施工服务及处置或有益利用处理连接到相容的上游数据集。 |
| disclosure | 声明分支选择、开工状态、包含资产、设计与验收门、沉积物质量及去向、共用作业和缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `new_work_gate` | 整体资产 | 纳入有记录的新建或资本改良直至工程签署交付；排除港口运营、船舶活动和后续维护疏浚。 | `pianc-navigation-infrastructure-2014`; `usace-montauk-harbor` |
| `sediment_route` | 航道成形 | 对每批挖出的沉积物记录测量来源、质量、运输以及获批的处置或有益利用交接；不得预设其为可出售产品。 | `usace-montauk-harbor`; `imo-dredged-material-assessment` |
| `structure_interface` | 港工结构 | 纳入基础、材料及范围内安装；单独承包的建筑和设备仅通过关联数据集体现。 | `pianc-navigation-infrastructure-2014` |
| `branch_handoff` | 两条分支 | 成形或已测试结构交接属于中间产出；仅指定的验收资产为参考产品。 | `pianc-navigation-infrastructure-2014` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `navigation_formation` | 航道成形与沉积物去向 | conditional | 新建航道、港池或通道几何需要疏浚。 | 独立移除源床沉积物并交付获批安置；测量成形几何。 | 原位 m3、沉积物质量及目的地记录。 |
| `marine_structure` | 港工基础与结构安装 | conditional | 合同包含码头、栈桥、突堤、船坞、防波堤、船闸或整体结构。 | 安装经计量材料并测试结构。 | 安装工程量及验收尺寸。 |
| `inspection_handover` | 综合检查与交付 | required | 所有纳入分支均达到工程验收。 | 核对竣工几何、材料和沉积物记录；交付一个所声明资产。 | 签署验收的资产或合同段。 |

### 过程：航道成形与沉积物去向（`navigation_formation`）

#### 输入

##### 产品流

###### 疏浚设备能源（`dredging_energy`）

按载能品种记录直接控制的燃料和电力，不重复计入已包含在外包疏浚服务中的能源。

- 选定流：按记录载能品种区分的疏浚设备能源
- 流属性/单位：能量或燃料质量 / kWh、MJ 或 kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：仅核对新建疏浚的船舶和设备记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：工程能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kWh-equivalent/item
  - 基准：宽泛暂定筛查；以工程设备及疏浚量记录替代
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 疏浚物安置运输（`sediment_transport`）

仅纳入单独计量、通往获批安置或有益利用交接点的运输，依实际方式和质量距离记录。

- 选定流：按实际方式区分的货运服务
- 流属性/单位：质量×距离 / t·km
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.transport-service`
- Flow Set version: `0.2.0`
- 数量规则：逐批汇总运输吨数×载货距离。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_sediment`
- 数量范围：疏浚物运输工作量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：t·km/item
  - 基准：宽泛暂定筛查；逐批质量与路线记录优先
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 测量验收的航道成形（`surveyed_formation`）

竣工航道或港池达到几何测试门，但不另计一个最终资产。

- 选定流：测量合格的可航航道或港池成形；UUID 未解析
- 流属性/单位：件数 / item
- 数量规则：计一个测量合格的成形；另报原位挖方量及竣工可航几何。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sediment`
- 数量范围：成形交接完整性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：formation/item
  - 基准：每个声明的条件性成形分支至多一次交接
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送往获批处置的疏浚物（`disposal_sediment`）

仅将送往获批处置的批次记为废物；有益利用批次须另行记录产品交接，不能自动抵扣。

- 选定流：送处置的疏浚沉积物；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：逐份安置凭证核对湿质量及干质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sediment`
- 来源：`usace-montauk-harbor`; `imo-dredged-material-assessment`
- 数量范围：处置沉积物质量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000000
  - 单位：kg/item
  - 基准：暂定工程规模筛查；与测量体积、密度及有益利用批次核对
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：港工基础与结构安装（`marine_structure`）

#### 输入

##### 产品流

###### 安装的港工材料（`marine_materials`）

依据工程量清单将混凝土、钢材、护岸石、桩及其他材料分别作为具体交换记录；不预设通用材料 UUID。

- 选定流：按规格区分的安装材料；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：按材料类别核对交付、安装、退回及报废质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：安装材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000000
  - 单位：kg/item
  - 基准：暂定工程规模筛查；以竣工清单为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 外包港工安装服务（`marine_installation_service`）

仅在打桩、沉箱安放或结构安装作为独立作业包采购时纳入；不得再把服务内含设备能源当作直接能源重复计入。

- 选定流：按合同作业包区分的港工安装服务；UUID 未解析
- 流属性/单位：合同服务量 / 声明单位
- 数量规则：记录工单认证的安装服务量和单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_installation_service`
- 数量范围：安装服务完整性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：declared service unit/item
  - 基准：暂定工程规模筛查；以认证工单为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 港工施工能源（`structure_energy`）

按实际载能品种记录直接控制的安装设备，不重复计入分包方能源。

- 选定流：按记录载能品种区分的港工施工能源
- 流属性/单位：能量或燃料质量 / kWh、MJ 或 kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按安装作业包核对设备燃料与电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：结构施工能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kWh-equivalent/item
  - 基准：宽泛暂定筛查；以实际设备用量为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 测试合格的港工结构（`tested_structure`）

仅将合规的安装结构交接给最终验收；另报适用的泊位长度、体积或件数。

- 选定流：测试合格的码头、栈桥、船坞、防波堤或船闸；UUID 未解析
- 流属性/单位：件数 / item
- 数量规则：每个分支合规结构或有界合同段计一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：结构交接完整性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：structure/item
  - 基准：每个声明的条件性结构分支至多一次交接
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 拒收的施工材料（`rejected_material`）

不合格或废弃的安装材料在实际处理交接点记录，不算作安装质量。

- 选定流：按物质区分的拒收港工材料；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：合计称量拒收批次，不包括同节点内获批再利用的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：拒收材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000000
  - 单位：kg/item
  - 基准：暂定筛查；以工程材料平衡为准
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：综合检查与交付（`inspection_handover`）

#### 输入

##### 产品流

###### 航道成形交接（`formation_handoff`）

选择航道分支时，将测量合格的成形一次性交至综合验收；不重复计入上游疏浚负担。

- 选定流：测量合格的可航航道或港池成形；UUID 未解析
- 流属性/单位：件数 / item
- 数量规则：与 `surveyed_formation` 件数产出和验收竣工几何相符。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：成形转移完整性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：formation/item
  - 基准：选择航道分支时转移一次，否则为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 港工结构交接（`structure_handoff`）

选择结构分支时，将已测试结构一次性交至综合验收；不重复计入上游安装负担。

- 选定流：测试合格的码头、栈桥、船坞、防波堤或船闸；UUID 未解析
- 流属性/单位：件数 / item
- 数量规则：与 `tested_structure` 产出和结构测试记录相符。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：结构转移完整性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：structure/item
  - 基准：选择结构分支时转移一次，否则为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收的港口或航道资产（`accepted_marine_asset`）

所有纳入分支的几何、结构、沉积物及环境记录通过合同验收门后，仅交付一个所声明资产。

- 选定流：验收的港口、航道或相关港工设施；UUID 未解析
- 流属性/单位：件数 / item
- 数量规则：按签署验收的资产或有界合同段计数，不计中间交接。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 数量范围：验收资产件数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：item/item
  - 基准：一个有界验收参考资产
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sediment_fate` | 疏浚批次 | 依实测质量及实际获批去向分类。仅在独立合格接收方及交接有证据时认定有益利用产品；否则保留废物处理负担。 | `usace-montauk-harbor`; `imo-dredged-material-assessment` |
| `shared_work` | 共用设备和临时工程 | 按作业包、工时、实测工程量或声明的因果驱动分配共用活动；每项负担只计一次。 | `pianc-navigation-infrastructure-2014` |
| `no_double_asset` | 分支产出 | 中间航道成形和已测试结构属于内部交接，不自动与最终资产共同作为联产品计数。 | `pianc-navigation-infrastructure-2014` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_sediment` | `navigation_formation` | 疏浚量、批次及运输 | 测量、取样、装载及签收记录 | 来源格网；前后测量；基准面；原位 m3；干湿质量；质量类别；目的地；路线 km | 测量并逐批核对安置凭证 | m3、kg、km | 每次测量和装载 | 新建疏浚期 | 工程河段与安置点 | 按来源及去向汇总；按方式计算 t·km | 测量基准、检测和签收 |
| `cp_energy` | `navigation_formation`; `marine_structure` | 直接设备能源 | 表计、加油及设备记录 | 载能品种；表计；体积或质量；作业包；日期 | 按分支核对并排除分包重叠 | kWh、MJ 或 kg | 每班或每次交付 | 施工期 | 范围内工程 | 按分支及载能品种汇总 | 读数和发票 |
| `cp_materials` | `marine_structure` | 安装及拒收材料 | 清单、交付和废物记录 | 类别；规格；密度；交付；安装；退回；拒收 | 称量或计量并核对 | kg 或 m3 | 每批 | 安装期 | 范围内结构 | 按类别汇总；按记录密度换算 | 签署清单和凭证 |
| `cp_installation_service` | `marine_structure` | 外包专项安装 | 认证工单 | 任务；供应商；服务量与单位；设备包含范围；日期 | 将认证作业与安装结构核对 | 声明服务单位 | 每个作业包 | 安装期 | 范围内结构 | 按不重叠任务及单位汇总 | 签署证书及分包范围 |
| `cp_acceptance` | `inspection_handover` | 分支及最终验收 | 竣工、测试和交付记录 | 合同段；分支；尺寸；测试；缺陷；日期 | 工程师签署 | item、m 或 m3 | 每个交接门 | 合同完成 | 指定合同段 | 验收合同段仅计一次 | 签署验收和测量 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_in_situ_volume` | 航道成形 | 在共同基准面下对合同范围内疏浚前后床面差进行积分。 | 测量格网和基准面 | 原位 m3 | `usace-montauk-harbor` |
| `calc_sediment_tkm` | 安置运输 | 每批按已声明质量基准的吨数×载货距离求和；不可隐含混合干湿基准。 | 装载质量、方式、距离 | 分方式 t·km | `usace-montauk-harbor` |
| `calc_material_balance` | 结构材料 | 交付=安装+退回+拒收+库存变化，在声明不确定度内。 | 交付、竣工、退回及废物记录 | 分材料 kg | `pianc-navigation-infrastructure-2014` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_design_gate` | 参考资产 | 区分新建与维护并声明设计、合同段、分支和验收。 | 合同及交付文件 |
| `quality_sediment` | 疏浚物 | 核对测量体积、质量类别、质量及每个去向。 | 测量、样品及签收 |
| `quality_identity` | 所有交换流 | 以角色、类型、属性、单位及场景核实具体 UUID；无证据的 UUID 留空。 | 流详情与支持行证据 |
| `quality_reconciliation` | 材料与能源 | 核对设备、供应商和处置记录，披露截断与不确定度。 | 表计、发票与材料平衡 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 参考资产 | 若未列部件工程量而混合不同设施，或把交付后运营作为建设，则拒绝数据集。 | `unsd-cpc-53232`; `pianc-navigation-infrastructure-2014` |
| `validate_branch` | 过程图 | `navigation_formation` 与 `marine_structure` 至少选择一个；每个所选分支均须向 `inspection_handover` 提供一条对应的输入交接。 | `pianc-navigation-infrastructure-2014` |
| `validate_sediment` | 航道成形 | 纳入疏浚时必须有共同基准面测量、沉积物质量及完整安置台账；不能假定所有批次均为产品。 | `usace-montauk-harbor`; `imo-dredged-material-assessment` |
| `validate_structure` | 港工结构 | 纳入结构时应将安装及拒收材料与竣工资产核对；已测试结构仍属中间交接。 | `pianc-navigation-infrastructure-2014` |
| `validate_identity` | 每条流 | 最终具体过程交换须有已核实 UUID；暂定 Flow Set 覆盖并非交换 UUID。 | `pianc-navigation-infrastructure-2014` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 工程特定前景建设数据包，可供经审查的次级或背景建设数据使用。 |
| downstream_use | 针对所声明港工资产、分支与工程交付门的过程及生命周期模型投影。 |
| allowed_use | 仅在设施功能、设计几何、疏浚物去向、场址及覆盖范围一致时比较工程。 |
| excluded_use | 不经重新建模，不可用于一般港口运营、航运、例行维护疏浚或其他设施类型。 |
| required_metadata | 场址及水体；合同段；设计与竣工尺寸；分支；基线；沉积物质量及去向；材料与能源；交付。 |
| required_quality_disclosure | 覆盖度、测量基准面、换算、材料平衡、UUID 缺口、监测、不确定度及截断。 |
| update_trigger | 设计、几何、沉积物目的地、源状态、安装路线、交付门、Flow Set 或流身份改变。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-53232` | official_guidance | 联合国统计司 CPC 2.1 53232 详细说明，https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53232 | 资产示例及边界；映射以仓库 CPC 3.0 标签为准。 |
| `pianc-navigation-infrastructure-2014` | official_guidance | PIANC，Initial Assessment of Environmental Effects of Navigation and Infrastructure Projects，https://www.pianc.org/publication/initial-assessment-of-environmental-effects-of-navigation-and-infrastructure-projects/ | 新建疏浚、港航结构及路线边界。 |
| `usace-montauk-harbor` | official_guidance | 美国陆军工程兵团，Lake Montauk Harbor navigation improvement project，https://www.nan.usace.army.mil/Missions/Civil-Works/Projects-in-New-York/Lake-Montauk-Harbor/ | 航道加深、疏浚量及安置去向。 |
| `imo-dredged-material-assessment` | official_guidance | 国际海事组织，Waste Assessment Guidance for Dredged Material，https://www.imo.org/en/ourwork/environment/pages/wag-default.aspx | 沉积物质量及受控处置判断。 |
