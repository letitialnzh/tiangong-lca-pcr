---
pcr_id: pcr.constructions-and-construction-services.constructions.irrigation-and-flood-control-waterworks
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 灌溉与防洪水工设施

## 1. 范围与适用性

覆盖在特定场址验收的灌溉渠道、排洪渠道、堤防、排水或防洪构筑物及其整体控制与防护构件。包括测量、必要导流、开挖、成形、衬砌或堤身施工、安装、测试和签署移交。排除供水输送工程、大坝、航运工程、独立管线、农业灌溉、应急运行和后续维护。独立验收的资产分别报告。[unsd-cpc3-notes; usbr-canal-linings; usace-levee-manual]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.irrigation-and-flood-control-waterworks |
| classification_refs | CPC 3.0 53234，灌溉与防洪水工设施；映射接受另行决定。 |
| covered_products | 已验收灌溉渠道和构筑物，或防洪渠道、堤防及整体工程。 |
| excluded_products | 供水渠道、大坝、航道、独立管线、农业生产、运行和维护。 |
| representative_product | 特定场址和桩号内，功能明确的一项已验收灌溉或防洪水工资产。 |
| production_route | 测量与开挖；采用路线特定衬砌或压实填料形成渠道/堤防；集成控制、排水和防护；测试并移交。 |
| market_state | 签署施工验收时的现场土木资产。 |

父活动 `form_waterwork` 存在衬砌灌溉渠与土堤等替代路线。前者需衬砌面积、材料和接缝证据；后者需借料、填筑层、密度、边坡和排水证据。它们可以在分别计量的区段并存，但不能视为性能等同；逐区段记录清单、计量和验收差异。[usbr-canal-linings; usace-levee-manual]

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已建成且功能明确的灌溉或防洪水工资产及整体构件。 |
| How much | 一项现场已验收资产；另报功能长度、成形体积及衬砌或防护面积。 |
| How well | 竣工几何、压实或衬砌、排水/控制功能和验收测试符合项目规格。 |
| How long or cycle | 一个施工项目至签署移交；设计寿命另作元数据。 |
| reference_flow_link | `waterwork_handover` 的 `accepted_waterwork`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 项已验收灌溉或防洪水工资产 |
| Reference product flow | 已验收灌溉或防洪水工资产；UUID 待确认 |
| Reference flow property | 数量；UUID 待确认 |
| Reference unit group | 数量；UUID 待确认 |
| Reference unit | waterwork |
| Required qualifiers | 场址；功能；设计流量或防护目标；起止桩号；验收长度；渠道或堤防几何；衬砌/堤身类型；整体控制构件；路线区段；验收日期 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `asset_count` | 参考产品 | 数量，UUID 待确认 | waterwork | 只计已验收资产，并报告长度和功能。 |
| `survey_volume` | 开挖与填料 | 原位或压实体积 | m3 | 区分原位、松方和压实体积，以相应密度换算。 |
| `liner_area` | 衬砌渠道 | 已安装面积 | m2 | 核对设计、安装、拒收和修复面积。 |
| `energy_carrier` | 现场机械 | 各载体能量或质量 | kWh、MJ 或 kg | 分开燃料和购入电力，避免双计。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 施工前声明桩号的地面、既有渠道或堤防、水道、植被及通道测量状态。 |
| starting_condition_role | 物理基线，非零负担的成品资产。 |
| product_classification_scope | 一项已验收灌溉或防洪资产；独立验收的大坝、供水和航运工程分开。 |
| recursive_input_rule | 购入同类区段于供应商移交处进入，并带自身数据集。 |
| upstream_dataset_requirement | 视路线关联填料、骨料、水泥、混凝土、衬砌、土工布、钢材、能源、运输和处置数据。 |
| disclosure | 功能、桩号、路线、导流、挖填与再用、借料/弃渣去向、共用机械、测试、排除项及身份空缺。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | 整体资产 | 纳入临时工程、土方、成形、整体控制/防护、测试和整改至签署验收；排除后续运行。 | `usbr-canal-linings`; `usace-levee-manual` |
| `removal_handoff` | `site_earthworks` | 测量移除材料的来源；仅移交已验收基面；区分内部再用和外运弃渣。 | `usbr-canal-linings`; `usace-levee-manual` |
| `forming_handoff` | `form_waterwork` | 只移交已验收成形区段；不合格填筑层、衬砌和几何返回返工或离界。 | `usbr-canal-linings`; `usace-levee-manual` |
| `route_delta` | `form_waterwork` | 声明衬砌渠和土堤区段以及不同的材料、设备、几何和 QA 记录。 | `usbr-canal-linings`; `usace-levee-manual` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `site_earthworks` | 测量、导流与资源移除 | required | 既有地面/渠道至已验收基面。 | 成形前独立移除材料，分流可再用挖方和弃渣。 | 原位挖方和验收基面。 |
| `form_waterwork` | 渠道或堤身成形 | required | 已验收基面至成形区段。 | 用填料、衬砌和防护材料形成几何并返工不合格部分。 | 成形长度、压实体积、衬砌面积。 |
| `waterwork_handover` | 整体控制与最终验收 | required | 成形区段至签署验收。 | 集成必要闸门、排水和防护；测试并修复失败施工。 | 一项已验收资产和区段。 |

### 过程：测量、导流与资源移除（`site_earthworks`）

#### 输入

##### 产品流

###### 开挖与土方服务（`earthwork_service`）

只计未与业主机械重复的分包范围。

- 选定流：按实际范围确定的开挖与土方施工服务
- 流属性/单位：合同服务量 / 声明单位
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- 数量规则：核对合同、测量及业主机械。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_earthworks`
- 数量范围：暂定服务量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：declared service units/waterwork
  - 基准：宽泛初筛，非合同工程量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 临时导流材料（`diversion_materials`）

仅记录实际安装或消耗的围堰、排水与临时防护材料，并记录跨项目再用及拆除后的恢复。

- 选定流：按规格确定的临时导流与排水施工材料
- 流属性/单位：质量 / kg
- 数量规则：按路线核对交付、安装、拆除、再用与弃置材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_earthworks`
- 数量范围：暂定临时材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg/waterwork
  - 基准：路线特定临时工程的宽泛筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 土方机械能源（`earthwork_energy`）

计挖掘、场内运输和排水的燃料或电力。

- 选定流：按实际载体确定的现场机械能源
- 流属性/单位：各载体能量或质量 / kWh、MJ 或 kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：计量实际载体，扣除分包所含范围。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定土方能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/waterwork
  - 基准：披露载体及换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收准备基面（`prepared_formation`）

测量后移交 `form_waterwork`，并非第二项销售资产。

- 选定流：声明桩号的已验收准备基面
- 流属性/单位：长度与面积 / m 和 m2
- 数量规则：将测量桩号及验收与成形输入匹配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_earthworks`
- 数量范围：基面完工比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of design chainage
  - 基准：验收桩号除以设计桩号
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 外运开挖弃渣（`exported_spoil`）

现场验收再用保留在挖填平衡，不计外运。

- 选定流：运至场外的开挖土壤或不适用材料
- 流属性/单位：质量 / kg
- 数量规则：扣除再用后按地磅或密度确定外运质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_earthworks`
- 数量范围：弃渣比例恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of removed mass
  - 基准：外运质量除以移除质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：渠道或堤身成形（`form_waterwork`）

#### 输入

##### 产品流

###### 准备基面移交（`formation_handoff`）

来自 `site_earthworks` 的内部验收基面。

- 选定流：来自 `site_earthworks` 的已验收准备基面
- 流属性/单位：长度与面积 / m 和 m2
- 数量规则：与上游面积和桩号匹配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_earthworks`
- 数量范围：基面移交恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：matched formation handoffs
  - 基准：每项验收基面输出对应一项输入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 填料、衬砌与防护材料（`forming_materials`）

按路线记录借料填料、衬砌、土工布和防侵蚀材料，不假定全部使用。

- 选定流：按规格确定的路线特定填料、衬砌和防护产品
- 流属性/单位：质量 / kg
- 数量规则：逐材料核对交付、安装、再用、退回和拒收。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每项已验收水工资产和路线区段
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定成形材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000000
  - 单位：kg/waterwork
  - 基准：宽泛路线筛查，非设计工程量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 成形机械能源（`forming_energy`）

分开压实、浇筑、混合和衬砌设备的载体。

- 选定流：按实际载体确定的现场机械能源
- 流属性/单位：各载体能量或质量 / kWh、MJ 或 kg
- 绑定：参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：计量设备用能并按实测使用量分摊共用机械。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定成形能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/waterwork
  - 基准：实测载体和有据换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收成形区段（`formed_segment`）

已验收几何及压实填筑或衬砌移交 `waterwork_handover`。

- 选定流：已验收的成形灌溉或防洪区段
- 流属性/单位：长度 / m
- 数量规则：验收桩号仅加总一次，另披露体积和衬砌面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_forming_acceptance`
- 数量范围：成形完工比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of design segment length
  - 基准：已验收成形长度除以设计长度
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 拒收成形材料（`forming_rejects`）

不合格填筑层或衬砌可在本节点返工、退回、回收或弃置；此处只计越界输出。

- 选定流：离开场址的拒收填料、衬砌或防护材料
- 流属性/单位：质量 / kg
- 数量规则：记录失败与修复，仅未返工的越界输出计废物。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 数量范围：拒收比例恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of delivered forming mass
  - 基准：越界拒收质量除以交付材料质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：整体控制与最终验收（`waterwork_handover`）

集成角色包括已验收成形区段、符合规格的控制和排水构件，以及项目工程记录中的现场安装人工/设备。后者仅在未由其他节点覆盖时作为前景能源或合同施工服务报告，不虚构安装性能值。组装后的状态是签署验收的资产，并非未经测试的构件。

#### 输入

##### 产品流

###### 成形区段移交（`formed_handoff`）

接收已验收区段，不重复购买资产。

- 选定流：来自 `form_waterwork` 的已验收成形区段
- 流属性/单位：长度 / m
- 数量规则：桩号及区段类型与成形输出匹配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_forming_acceptance`
- 数量范围：区段移交恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：matched segment handoffs
  - 基准：每项验收成形输出对应一项输入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 整体控制与排水构件（`control_components`）

只计此资产所需闸门、涵洞、排水、反滤和防护；独立验收结构排除。

- 选定流：按规格确定的整体水工控制与排水构件
- 流属性/单位：质量或数量 / kg 或 item
- 数量规则：核对交付、安装、退回和拒收构件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 数量范围：暂定构件筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg-equivalent/waterwork
  - 基准：宽泛筛查；仅按数量计的构件须另行换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收灌溉或防洪水工资产（`accepted_waterwork`）

功能、几何及材料 QA 通过后签署移交；拒收桩号排除。

- 选定流：声明场址的已验收灌溉或防洪水工资产
- 流属性/单位：数量 / waterwork
- 数量规则：一项资产计一次，并附桩号及路线区段登记。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_final_acceptance`
- 数量范围：验收恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：accepted waterwork/reference flow
  - 基准：声明门槛下签署验收的资产数量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 集成时拒收构件（`integration_rejects`）

失效构件在本节点修复或替换；此处只计退回、回收或弃置的越界输出。

- 选定流：离开施工边界的整体构件拒收物
- 流属性/单位：质量 / kg
- 数量规则：核对失效、修复、替换和越界输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每项已验收水工资产
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_components`
- 数量范围：集成拒收比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of delivered component mass
  - 基准：越界拒收质量除以交付构件质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | 已验收输出 | 将路线施工归属资产及区段；不假定挖出材料获得抵扣。 | `mass-balance-identity` |
| `cut_fill_balance` | 土壤和借料 | 再用挖方留在内部并保留负担；外运、回收和购入填料分别记录。 | `mass-balance-identity` |
| `shared_plant` | 导流与设备 | 共用机械及通道按实测使用或有据工程驱动项只分摊一次。 | `usace-levee-manual` |
| `reject_retention` | 失败施工 | 返工负担归产生节点；失败区段不计验收，无未经证实的回收抵扣。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_earthworks` | `site_earthworks` | 测量、服务、导流材料、挖方、弃渣 | 测量与票据 | 桩号；挖方；密度；再用；处置；合同；临时材料交付、安装与拆除 | 测量、地磅、合同和交付票据 | m；m3；kg | 区段/车次 | 项目 | 声明桩号 | 核对挖方、再用、外运、临时材料和库存 | 测量、密度、票据 |
| `cp_energy` | `site_earthworks`; `form_waterwork` | 机械能源 | 计量与燃料日志 | 载体；数量；设备；工时；份额 | 计量、发票、日志 | kWh；MJ；kg | 班次/月 | 项目 | 场址及共用设备 | 按载体汇总并归属一次 | 计量、发票、分摊 |
| `cp_materials` | `form_waterwork` | 填料、衬砌、防护、拒收 | 材料与检查 | 规格；交付；安装；密度；修复；拒收 | 票据、测量、测试 | kg；m3；m2 | 批次/区段 | 项目 | 路线区段 | 核对交付、验收安装和越界输出 | 票据、压实、衬砌测试 |
| `cp_forming_acceptance` | `form_waterwork`; `waterwork_handover` | 区段移交 | 验收登记 | 桩号；路线；几何；体积；衬砌；返工 | 测量、签核 | m；m3；m2 | 区段 | 项目 | 声明桩号 | 加总不重叠验收桩号 | 竣工测量、QA |
| `cp_components` | `waterwork_handover` | 控制与拒收 | 材料与检查 | 构件；交付；安装；失效；修复；退回 | 交付、检查 | kg；item | 构件 | 项目 | 已验收资产 | 核对安装与越界 | 票据、检查 |
| `cp_final_acceptance` | `waterwork_handover` | 验收输出 | 移交证书 | 资产 ID；功能；桩号；测试；排除；日期 | 签署证书 | waterwork；m | 移交 | 项目 | 资产 | 只计验收资产 | 证书、测试 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cut_reconciliation` | `site_earthworks` | 移除质量 = 再用 + 外运 + 库存变化，采用对应状态密度。 | 测量、密度、票据 | 挖方及弃渣 | `mass-balance-identity` |
| `installed_reconciliation` | `form_waterwork` | 交付 = 验收安装 + 退回 + 拒收 + 库存变化；返工不算新投入。 | 票据、测量、检查 | 材料及拒收 | `mass-balance-identity` |
| `accepted_chainage` | `waterwork_handover` | 不重叠的验收桩号只计一次，几何另存。 | 区段和移交登记 | 资产及长度 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_trace` | 所有节点 | 识别功能、桩号、路线、规格和门槛。 | 竣工图、QA 登记 |
| `material_balance` | 挖方、填料、衬砌、控制 | 展示状态换算、再用、拒收、库存和去向。 | 测量、密度、票据 |
| `identity_gap` | 未解析流 | UUID、属性及单位组确认前不得发布具体过程交换。 | 平台身份复核 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_gate` | 参考产品 | 确认功能、场址、桩号和签署验收；排除供水、大坝、航运及运行。 | `unsd-cpc3-notes` |
| `route_records` | `form_waterwork` | 衬砌渠需衬砌/接缝证据；堤防需借料、填筑层、几何和排水证据；混合路线核对区段。 | `usbr-canal-linings`; `usace-levee-manual` |
| `handoff_match` | 所有节点 | 基面及成形区段的输出/输入桩号匹配且无双计。 | `mass-balance-identity` |
| `reject_path` | 成形与集成 | 修复返回产生节点；越界输出有去向且不计验收。 | `mass-balance-identity` |
| `range_evidence` | 所有卡片 | 暂定范围仅作 QA 提示，非设计量或默认清单。 |  |

## 10. 已发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 已验收水工资产的场址特定前景施工包。 |
| downstream_use | 仅功能、几何、路线及门槛匹配时用于次级或背景施工数据。 |
| allowed_use | 声明资产及整体构件的施工阶段建模。 |
| excluded_use | 供水运行、洪水应急、大坝、航运及未经功能归一化比较。 |
| required_metadata | 场址、年份、功能、设计目标、桩号、几何、路线、挖填、衬砌、构件、能源、测试、移交。 |
| required_quality_disclosure | 换算、挖填平衡、共用分摊、暂定范围、截断及身份空缺。 |
| update_trigger | 范围、路线、竣工量、验收或已确认身份变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | 联合国统计司，CPC 3.0 解释说明，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 范围和供水工程排除。 |
| `usbr-canal-linings` | official_guidance | 美国垦务局，Linings for Irrigation Canals，https://www.usbr.gov/tsc/techreferences/mands/mands-pdfs/LngIrCnl.pdf | 渠道衬砌替代路线。 |
| `usace-levee-manual` | official_guidance | 美国陆军工程兵团，EM 1110-2-1913，Design and Construction of Levees，https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-2-1913.pdf | 堤防土方、压实及 QA。 |
| `mass-balance-identity` | method_factor | 前景测量与称量记录的物料守恒恒等式。 | 挖填、材料、拒收和移交核对。 |
