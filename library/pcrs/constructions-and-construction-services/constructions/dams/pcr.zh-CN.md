---
pcr_id: pcr.constructions-and-construction-services.constructions.dams
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 大坝

## 1. 范围与适用性

本 PCR 覆盖特定场址交付的坝体，以及直接承担坝体功能的基础、防渗、溢洪与泄水构筑物。声明常态混凝土、碾压混凝土、土石坝或组合坝分段。纳入必要的导流、基础处理、填筑或浇筑、测试及签署移交；不纳入单独交付的电站、灌溉网络、普通防洪渠道及后续水库运营。[usbr-design-standards; usbr-dam-project]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.dams |
| classification_refs | CPC 3.0 53233，大坝；映射接受另行决定。 |
| covered_products | 验收的坝体及其整体基础、防渗、溢洪与泄水构筑物。 |
| excluded_products | 独立发电设施、灌溉网络、普通防洪渠道及水库运营。 |
| representative_product | 一座在特定场址验收、功能和几何参数已声明的大坝。 |
| production_route | 导流和基础准备，随后混凝土浇筑或土石料分层压实，附属水工结构集成及测试。 |
| market_state | 签署移交时的现场已建成土木资产。 |

混凝土坝和土石坝是父节点 `dam_build` 内的替代路线；组合坝应分别报告各分段。混凝土路线需要配比、浇筑及接缝记录；土石路线需要借料、填筑层、反滤与压实记录。[usbr-design-standards]

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已建成的坝体及声明纳入的整体附属构筑物。 |
| How much | 一座已验收大坝；坝顶长度、高度和结构体积另行披露。 |
| How well | 设计功能、基础、结构、防渗和水工测试合格。 |
| How long or cycle | 一个施工项目至签署移交；设计寿命为元数据。 |
| reference_flow_link | `dam_build` 的 `accepted_dam`。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 座已验收大坝 |
| Reference product flow | 已建成大坝；UUID 待确认 |
| Reference flow property | 数量；UUID 待确认 |
| Reference unit group | 数量；UUID 待确认 |
| Reference unit | dam |
| Required qualifiers | 场址；河流与功能；坝型；坝顶长度和坝高；结构体积；路线分段；纳入的溢洪道与泄水设施；基础处理；验收日期 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `dam_count` | 参考产品 | 数量，UUID 待确认 | dam | 仅计签署验收的结构；披露几何参数以便比较。 |
| `materials_mass` | 安装及拒收材料 | 质量或体积 | kg 或 m3 | 用实测密度换算体积，并核对交付、安装、退回和拒收。 |
| `excavation_volume` | 基础和借料 | 体积 | m3 | 区分原位测量体积与松方运输体积。 |
| `construction_energy` | 施工机械 | 各载体能量或质量 | kWh、MJ 或 kg | 记录能量载体，避免发电机燃料及其发电量重复计算。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 导流前测量的河段、基础地层、现有设施及借料区。 |
| starting_condition_role | 物理基线，而非零负担的坝体投入。 |
| product_classification_scope | 一座已验收大坝；其他单独交付设施在外部关联。 |
| recursive_input_rule | 购入构件在供应商交付节点进入；不能把整座大坝不经分析地作为递归原料。 |
| upstream_dataset_requirement | 按实际路线连接混凝土、水泥、骨料、填料、钢材、能源、运输和处置数据集。 |
| disclosure | 几何参数、施工路线、借料及弃渣来源去向、导流、共用机械、材料截断、测试和身份空缺。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `handover_gate` | 整体资产 | 纳入必要导流、基础、结构施工、整体水工设施及测试，截止签署移交；排除后续蓄水、发电和维护。 | `usbr-design-standards`; `usbr-dam-project` |
| `foundation_handoff` | 两个节点 | 只有已验收的处理后基础移交 `dam_build`；挖出物及不合格施工另有去向。 | `usbr-design-standards` |
| `route_segments` | 坝体 | 区分混凝土和土石分段的清单及质检，但组合坝只计一次。 | `usbr-design-standards` |
| `shared_temporary_works` | 导流和机械 | 记录所有者、使用节点和服务期；共用负担只分配一次。 | `usbr-design-standards` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `site_foundation` | 导流与基础准备 | required | 从已测量河床至已验收基础。 | 独立清除不适用地层，安排弃渣，处理基础，将失败施工返回返工。 | 测量开挖量和已验收基础面积。 |
| `dam_build` | 坝体及整体附属结构集成 | required | 从已验收基础至签署移交。 | 集成浇筑混凝土或压实填料、反滤和水工结构；安排拒收材料去向。 | 一座已验收大坝及测量的分段。 |

### 过程：导流与基础准备（`site_foundation`）

#### 输入

##### 产品流

###### 基础开挖服务（`foundation_service`）

仅在施工机械能源未作为自有前景消耗重复报告时计入分包服务。

- 选定流：按实际方法区分的基础开挖服务
- 流属性/单位：合同服务量 / 声明单位
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.construction-service`
- Flow Set version: `0.2.0`
- Flow Set group: `earthwork-and-excavation`
- 数量规则：核对分包范围、开挖体积和业主提供的能源。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_site_works`
- 数量范围：暂定工作量筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：declared service units/dam
  - 基准：宽泛首轮筛查，非设计工程量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 基础与导流材料（`foundation_materials`）

记录实际安装或消耗的灌浆、截水及围堰材料；临时工程回用须有声明的移交。

- 选定流：按规格区分的基础处理与临时导流材料
- 流属性/单位：质量 / kg
- 数量规则：核对交付、安装或消耗量、回用与拒收质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定基础材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000000
  - 单位：kg/dam
  - 基准：已安装或消耗的材料；宽泛暂定上界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 基础施工能源（`foundation_energy`）

按实际柴油、电力及其他能源载体分开记录。

- 选定流：开挖、导流和排水所用能源载体
- 流属性/单位：各载体能量或质量 / kWh、MJ 或 kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按载体计量或核对机械燃料消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：MJ-equivalent/dam
  - 基准：所有声明载体并采用有记录的换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收的处理后基础（`prepared_foundation`）

作为内部交接进入 `dam_build`，不是第二座可销售大坝。

- 选定流：已验收的大坝处理后基础
- 流属性/单位：面积 / m2
- 数量规则：测量已验收面积，并按对应位置移交结构施工。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_site_works`
- 数量范围：基础面积筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000
  - 单位：m2/dam
  - 基准：测量验收面积；暂定上界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 开挖弃渣（`spoil_export`）

记录材料类型和去向；验收后在场内回用的材料不是外运弃渣。

- 选定流：送往场外管理的开挖土石
- 流属性/单位：质量 / kg
- 数量规则：发运称重或原位测量体积乘实测密度，扣除内部回用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_spoil`
- 数量范围：弃渣比例恒等校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of excavated mass
  - 基准：外运质量除以开挖质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：坝体及整体附属结构集成（`dam_build`）

#### 输入

##### 产品流

###### 处理后基础移交（`foundation_handoff`）

从 `site_foundation` 内部转入已测量且验收的基础；不得再次采购或重复计入上游负担。

- 选定流：来自 `site_foundation` 的已验收处理后基础
- 流属性/单位：面积 / m2
- 数量规则：按面积和位置与已验收基础输出匹配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_site_works`
- 数量范围：基础移交匹配
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：input/output accepted-area ratio
  - 基准：相同位置的投入与产出面积匹配
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 混凝土路线材料（`concrete_materials`）

仅用于混凝土或碾压混凝土分段；区分胶凝材料、骨料、外加剂、钢材及商品混凝土，避免重复计算。

- 选定流：按规格区分的已安装混凝土路线材料
- 流属性/单位：质量 / kg
- 数量规则：核对配比、交付、已浇筑体积、退回和拒收。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：工艺特定（`technology_specific`）
- 归一化基准：每座已验收大坝，仅混凝土分段
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定混凝土材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000000
  - 单位：kg/dam
  - 基准：声明体积和配比；宽泛暂定上界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 土石路线材料（`embankment_materials`）

仅用于土石分段；区分心墙、坝壳、反滤、排水、护坡和借料来源。

- 选定流：按规格区分的已安装土、石和反滤材料
- 流属性/单位：质量 / kg
- 数量规则：核对借料、交付、验收压实体积和拒收。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：工艺特定（`technology_specific`）
- 归一化基准：每座已验收大坝，仅土石分段
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定土石材料筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000000
  - 单位：kg/dam
  - 基准：测量几何参数和实测密度；宽泛暂定上界
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 施工用水（`construction_water`）

仅包括拌合、养护、抑尘及压实用水；不包括水库蓄水。

- 选定流：施工过程用水
- 流属性/单位：体积 / m3
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 数量规则：按水源和用途计量；转移量只核对一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 数量范围：暂定施工用水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100000000
  - 单位：m3/dam
  - 基准：仅施工取水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 填筑浇筑能源（`placement_energy`）

按实际载体分别报告拌合、运输、浇筑、压实、泵送及测试。

- 选定流：坝体施工能源载体
- 流属性/单位：各载体能量或质量 / kWh、MJ 或 kg
- Binding: Parameterized (`parameterized`)
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：计量或核对燃料凭证与实际机械消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 数量范围：暂定填筑浇筑能源筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000000000
  - 单位：MJ-equivalent/dam
  - 基准：所有声明载体并采用有记录的换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整体水工构件（`hydraulic_components`）

仅包括合同明确纳入的溢洪、泄水、闸门及防渗构件；另行交付的水道在外部关联。

- 选定流：按项目区分的已安装整体水工构件
- 流属性/单位：质量或数量 / kg 或 item
- 数量规则：核对竣工工程量、交付及拒收物项。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 数量范围：暂定构件筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000000000
  - 单位：kg-equivalent/dam
  - 基准：纳入的物项按记录的单位质量换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收大坝（`accepted_dam`）

仅在结构、防渗和水工测试合格且签署移交后计入。

- 选定流：已建成且验收的大坝；UUID 待确认
- 流属性/单位：数量 / dam；UUID 待确认
- 数量规则：最终移交后计一座验收大坝；不包括拒收施工。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_acceptance`
- 数量范围：参考产出恒等关系
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：dam/dam
  - 基准：每座参考资产对应一座验收资产
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 拒收施工材料（`rejected_material`）

记录发生节点及返工、回收或处置去向；不得计为验收坝体。

- 选定流：按实际去向区分的拒收混凝土、填料或构件
- 流属性/单位：质量 / kg
- 数量规则：核对拒收单、返工回流和外运残余，避免重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每座已验收大坝
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials`
- 数量范围：拒收材料比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：fraction of delivered mass
  - 基准：按材料类型计算拒收质量除以交付质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `one_dam_output` | 资产 | 组合坝或单一路线坝只计一次；供水、防洪和发电多功能使用阶段需另行论证研究。 | `usbr-design-standards` |
| `shared_diversion` | 导流、泵及机械 | 依据计量小时、工作量或披露的工程代理量分配给各节点，保留服务期和用户，且只计一次。 | `usbr-design-standards` |
| `rework_residual` | 拒收材料 | 返工返回产生节点；回收抵扣须遵循披露的研究约定，拒收不得进入验收产出。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site_works` | `site_foundation` | 导流、开挖、基础 | 测量和分包日志 | 面积、原位体积、工作范围、验收 | 测量和工程师签认 | m2, m3, service unit | 每工作包 | 开工至基础验收 | 场址 | 汇总验收工作包，分开返工 | 测量和验收记录 |
| `cp_spoil` | `site_foundation` | 弃渣 | 发运和去向凭证 | 类型、来源、质量、密度、回用、去向 | 凭证和密度核对 | kg, m3 | 每车次 | 开挖期 | 场址和去向 | 外运质量只汇总一次 | 凭证和接收单 |
| `cp_materials` | both nodes | 基础、导流、施工材料和拒收 | 交付、配比、借料、填筑浇筑及质检台账 | 物项、分段、交付、安装、密度、拒收、去向 | 批次与分层记录、竣工测量 | kg, m3, item | 每批或每层 | 施工至完工 | 所有分段 | 核对安装、退回和拒收 | 批次、压实和混凝土测试 |
| `cp_water` | `dam_build` | 施工用水 | 计量日志 | 水源、读数、用途、转移 | 水表读数 | m3 | 每月和主要用途 | 施工期 | 场址取水点 | 按用途汇总取水 | 校准水表和许可 |
| `cp_energy` | both nodes | 燃料和电力 | 计量、发票及运行日志 | 载体、用量、设备、节点、时数 | 计量和燃料核对 | kWh, MJ, kg | 每月 | 有效施工期 | 场址及共用机械 | 按实际使用分配，只换算一次 | 计量和凭证 |
| `cp_acceptance` | `dam_build` | 参考产出 | 验收档案 | 类型、几何、测试、缺陷、日期 | 工程师签署验收 | dam, m, m3 | 最终及复测 | 完工关口 | 整座大坝 | 验收后才计一座 | 签署证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `spoil_mass` | 开挖 | 外运质量 = 发运称重，或原位体积乘实测密度，再扣除有记录的场内回用。 | 测量、凭证、密度、回用 | kg 外运/dam | `mass-balance-identity` |
| `placed_material` | 分段 | 已安装质量 = 验收体积乘实测密度；与交付和拒收核对。 | 竣工体积、密度、交付 | kg 安装/分段 | `mass-balance-identity` |
| `carrier_energy` | 施工机械 | 每种载体采用声明的系数换算；不得把发电量与发电机燃料相加。 | 计量载体、换算、分配 | MJ 当量/dam | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_evidence` | 结构 | 识别混凝土、土石或组合坝各分段及适用质检制度。 | 竣工图、配比和压实记录 |
| `mass_reconciliation` | 开挖和施工 | 解释交付、弃渣、返工及拒收之间未匹配的数量。 | 签署核对表 |
| `acceptance_evidence` | 参考产出 | 保留几何、结构、防渗和水工测试及移交。 | 验收档案 |
| `identity_disclosure` | 未绑定流 | 平台明细确认前保留语义规格。 | 供应商规格 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_acceptance` | 产出 | 如缺签署移交、几何、路线或整体设施范围，拒绝一座大坝产出。 | `usbr-design-standards` |
| `foundation_link` | 过程图 | 已验收基础须连接实际坝体分段；外运弃渣须有去向。 | `usbr-design-standards` |
| `route_checks` | 材料 | 混凝土检查配比和浇筑；土石检查借料、分层和压实；组合坝两者均需。 | `usbr-design-standards` |
| `shared_and_rework` | 场址负担 | 标记临时工程重复计量、拒收去向缺失或拒收计入验收。 | `mass-balance-identity` |
| `identity_gate` | 最终交换 | 生成平台交换前须精确确认流、属性和单位组 UUID 明细。 | `usbr-design-standards` |

## 10. 已发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 场址特定的已建成土木资产前景包；方法经评审前仍为候选。 |
| downstream_use | 几何、路线和关口匹配时作为二次或背景建设数据。 |
| allowed_use | 声明的已验收坝体及整体水工结构建设阶段核算。 |
| excluded_use | 发电、水库运营、灌溉服务或缺少限定条件的比较。 |
| required_metadata | 场址、年份、坝型、几何、分段、溢洪泄水范围、借料弃渣、能源及验收。 |
| required_quality_disclosure | 数量和密度方法、共用工程分配、未解决 UUID、范围证据层级及截断。 |
| update_trigger | 设计、路线、竣工工程量、验收、范围或确认身份发生变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usbr-design-standards` | official_guidance | 美国垦务局 Reclamation Design Standards，https://www.usbr.gov/tsc/techreferences/designstandards-datacollectionguides/designstandards.html | 坝体路线、基础、防渗、导流及水工结构。 |
| `usbr-dam-project` | official_guidance | 美国垦务局大坝工程说明，https://www.usbr.gov/projects/index.php?id=383 | 基础截水、借料、填筑浇筑及灌浆路线示例。 |
| `mass-balance-identity` | method_factor | 将物质守恒恒等式用于测量和称重的前景记录。 | 数量核对和 0–1 比例校验。 |
