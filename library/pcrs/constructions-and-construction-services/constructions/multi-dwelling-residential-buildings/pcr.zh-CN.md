---
pcr_id: pcr.constructions-and-construction-services.constructions.multi-dwelling-residential-buildings
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 多户住宅建筑

## 1. 适用范围

本规则适用于在现场建成并有交付记录的单栋建筑：其中有三个及以上住宅单元，或属于学生宿舍、养老院等社区型居住建筑。范围包括基础、结构、围护、公用核心筒、走廊、电梯、固定建筑系统和声明纳入的固定装修。验收需要竣工工程量表、实测建筑总面积、所含系统的安装调试记录和签署的交付文件。仅交付毛坯壳体不符合本规则的完整建筑交付状态。运营、住户活动、后续更换和拆除分别作为下游生命周期情景。 [unsd-cpc-53112; ec-levels; ec-building-gwp]

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.multi-dwelling-residential-buildings |
| classification_refs | CPC 3.0:53112 |
| covered_products | 三户及以上住宅建筑；供老人、学生、工人及其他群体居住的社区型建筑 |
| excluded_products | 一户或两户住宅；非住宅建筑；单独销售的施工服务；独立预制构件；独立土木设施 |
| representative_product | 一栋已调试交付、含公共交通空间与固定设备系统的公寓楼 |
| production_route | 场地和基础施工、结构与围护装配、固定设备集成、表面装修、测试和交付；预制替代路线需提供构件与安装证据 |
| market_state | 在申报场址完成施工且于交付时可供声明的居住用途使用 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 申报场址已完成的多户住宅建筑 |
| How much | 一栋；另报建筑总面积 m2 作为强度分母 |
| How well | 至少三户或合格的社区居住建筑；所含公共和固定系统通过完工测试 |
| How long or cycle | 一个施工项目直至场址交付；运营与使用寿命属独立情景 |
| reference_flow_link | `finish_handover` 的验收产出；整栋仅计一次 |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 已完成的多户住宅建筑 |
| Reference flow property | 件数 |
| Reference unit group | 件数单位组 |
| Reference unit | 栋 |
| Required qualifiers | 场址；户数或社区居住类型；建筑总面积及口径；地下室和停车范围；公用核心筒与固定系统范围；建造路线；交付日期和验收证据 |

平台同名候选流是厂内制造品，属性为质量，与整栋现场交付建筑不匹配，故不绑定 UUID。面积仅用于强度报告，不能替代一栋建筑的参考身份。

## 4. 测量和单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `building_count` | 参考产出 | 件数 | 栋 | 仅计一栋已验收的完整建筑，不按户、楼层或构件计栋数。 |
| `gross_floor_area` | 强度 | 面积 | m2 | 声明竣工面积计量口径，并与验收图纸核对。 |
| `material_mass` | 材料和废物流卡 | 质量 | kg | 到货、安装和废弃单位不同则披露密度及换算。 |
| `site_energy` | 燃料与电力 | 能量 | kWh 或 MJ | 保留能源种类及有据可查的换算系数。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 开工前已测绘场地；既有拆除、污染和保留结构分别声明 |
| starting_condition_role | 本次前景施工的物理起点 |
| product_classification_scope | 一栋交付的住宅建筑，含交付资产内的公共空间和固定建筑系统 |
| recursive_input_rule | 另购同类完整建筑只有在被改造时才是上游产品；其住户单元不算新增整栋产出。 |
| upstream_dataset_requirement | 材料、构件、公用能源、货运、废物处理及外包施工服务须采用物理交付节点与地域相容的上游数据。 |
| disclosure | 提供竣工工程量、面积口径、公共空间、固定系统、临时工程、再生材料来源、废物去向及交付证据。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | 所有节点 | 纳入投入产品、运输、现场能源设备、安装、废物及调试，直至验收交付；使用及寿终另列情景。 | ec-building-gwp; ec-levels |
| `shared_elements` | 核心筒、走廊、电梯和中央系统 | 在整栋建筑中只计一次；仅在另行声明按户分析时，按所披露的驱动量分摊。 | ec-levels |
| `prefab_delta` | 装配 | 替代技术路线：有证据的预制路线用交付模块及安装替代对应现场工序；同一构件不可两路线同时计量。 | ec-levels |
| `finish_handoff` | 装修 | 装配好的主体及系统为上游状态；仅在装修、测试和缺陷处理完成后成为验收产出。 | ec-levels |
| `secondary_origin` | 二次材料 | 记录来源、回收交接和供应商交付节点；采用一致的上游负担规则，避免重复。 | ec-levels |
| `shared_assets` | 共用基础设施与临时工程 | 按记录用量或有据的驱动量，将共用塔吊、脚手架、模板和场地能源在消费节点、建筑及使用期间只分摊一次。 | ec-levels |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `site_foundation` | 场地和基础工程 | required | 除非合同明确排除已经验收的既有基础 | 开挖并形成检验合格的基础 | 每栋竣工现场记录 |
| `assembly_services` | 结构及设备集成 | required | 已建成结构、围护和固定系统 | 组合基础、结构、围护、公区、电梯及固定设备；替代技术路线的预制可替代对应现场装配 | 每栋构件表 |
| `finish_handover` | 表面装修、测试和交付 | required | 装修和系统调试验收完成 | 通过表面装修与测试将装配主体变为完整建筑 | 一份签署的交付记录 |

### 过程：场地和基础工程（`site_foundation`）

#### 输入

##### 产品流

###### 基础和土方材料（`foundation_materials`）

依据竣工清单将混凝土、钢筋、桩和实际其他材料展开为独立交换；适用时记录再生成分及供应商回收交付节点。

- 选定流：到场基础材料
- 流属性/单位：质量 / kg
- 数量规则：各产品安装量加已测损耗
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`ec-levels`
- 数量范围：暂定基础材料质量筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000000
  - 单位：kg
  - 基准：每栋完整建筑，伞形卡按材料拆分后；以产品证据替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

#### 输出

##### 产品流

###### 已验收的原位基础（`foundation_handoff`）

经检验的基础是装配过程内部的上游状态，不是另售建筑。

- 选定流：已验收的基础阶段
- 流属性/单位：工程阶段 / 阶段
- 数量规则：一个验收阶段；材料数量保留在材料记录中
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`ec-levels`
- 数量范围：暂定基础验收阶段数
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：stage
  - 基准：每栋验收且纳入新建基础的完整建筑
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 弃土和基础不合格物（`foundation_waste`）

按污染状况和去向区分弃土及基础不合格材料；现场再用为内部转移。

- 选定流：按材料和去向区分的基础废物
- 流属性/单位：质量 / kg
- 数量规则：地磅质量或以有据密度换算的测绘体积
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`ec-levels`
- 数量范围：暂定基础废物质量筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000000
  - 单位：kg
  - 基准：每栋完整建筑；以场址材料平衡替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：结构及设备集成（`assembly_services`）

#### 输入

##### 产品流

###### 进入装配的已验收基础（`foundation_stage_input`）

将 `site_foundation` 中同一检验合格的基础作为内部阶段投入转入装配，并非再购买一次基础。

- 选定流：已验收的基础阶段
- 流属性/单位：工程阶段 / stage
- 数量规则：转入一个已验收基础阶段，不重复计上游材料负担
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`ec-levels`
- 数量范围：暂定转入的基础阶段数
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：stage
  - 基准：每栋纳入新建基础的完整建筑
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 结构和围护构件（`structure_components`）

将实际混凝土、钢材、木材、砌体、玻璃、保温和预制模块分别展开。同一构件的供应商成品模块与现场制作路线互斥。

- 选定流：到场结构和围护构件
- 流属性/单位：质量、面积或件数 / kg、m2 或件
- 数量规则：各构件安装量加已记录的不合格量
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`ec-levels`
- 数量范围：暂定结构构件质量筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000000
  - 单位：kg
  - 基准：每栋完整建筑，伞形卡拆分后按合理依据换算面积或件数；以构件证据替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 固定建筑系统（`fixed_services`）

按实纳范围记录给排水、电力、供暖制冷、消防、电梯及中央系统；住户电器除非永久安装并声明，否则单列排除。

- 选定流：固定系统构件
- 流属性/单位：质量或件数 / kg 或件
- 数量规则：竣工验收的已安装设备与构件
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`ec-levels`
- 数量范围：暂定固定系统构件质量筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000000
  - 单位：kg
  - 基准：每栋完整建筑，件数转质量后；以竣工清单替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 现场施工能源（`site_energy_carriers`）

按能源载体及活动记录塔吊、工具及场地设施的电表和燃料；排除已在采购服务数据中计入的能源。

- 选定流：现场施工能源载体
- 流属性/单位：能量 / kWh 或 MJ
- Binding: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则：按载体换算计量和燃料日志
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_site_operations`
- 来源：`ec-building-gwp`
- 数量范围：暂定施工现场能源筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100000000
  - 单位：MJ
  - 基准：每栋完整建筑全部有记录载体；以计量能源替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

#### 输出

##### 产品流

###### 包含公区的装配主体（`assembled_parent`）

将检验合格的结构、围护、公共交通空间、电梯及固定系统作为一个上游状态交给装修过程。

- 选定流：装配完成的建筑上游状态
- 流属性/单位：工程阶段 / 阶段
- 数量规则：一个检验合格的主体阶段，并与工程量表核对
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`ec-levels`
- 数量范围：暂定装配主体阶段数
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：stage
  - 基准：每栋验收的完整建筑
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 装配不合格物和边角料（`assembly_rejects`）

在产生节点记录边角料和不合格构件，以及返工、回收或处置去向；改正的构件不形成第二次合格产出。

- 选定流：按材料和去向区分的装配不合格物
- 流属性/单位：质量 / kg
- 数量规则：实测不合格量扣除有记录的内部再用
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`ec-levels`
- 数量范围：暂定装配不合格物质量筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000000
  - 单位：kg
  - 基准：每栋完整建筑；以核对后的不合格记录替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：表面装修、测试和交付（`finish_handover`）

#### 输入

##### 产品流

###### 进入装修的装配主体（`assembled_parent_input`）

将 `assembly_services` 中已检验的结构、围护、公区及固定系统作为一个内部投入转入装修，不重复计其上游构件负担。

- 选定流：装配完成的建筑上游阶段
- 流属性/单位：工程阶段 / stage
- 数量规则：一个检验合格的主体阶段转入装修
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`ec-levels`
- 数量范围：暂定转入的主体阶段数
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：stage
  - 基准：每栋验收的完整建筑
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 装修材料（`finishing_materials`）

按实际规格记录涂料、密封胶、地墙面饰材和固定装修材料。此节点以装配主体作为内部投入。

- 选定流：已安装的装修产品
- 流属性/单位：质量或面积 / kg 或 m2
- 数量规则：各产品安装量加已记录损耗
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`ec-levels`
- 数量范围：暂定装修材料质量筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000000
  - 单位：kg
  - 基准：每栋完整建筑，伞形卡拆分后按合理依据换算面积；以产品证据替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

#### 输出

##### 产品流

###### 已完成的多户住宅建筑（`completed_building`）

只有公共空间、所含固定系统、缺陷整改和调试均经签署验收，才计完整建筑。

- 选定流：已完成的多户住宅建筑
- 流属性/单位：件数 / 栋
- 数量规则：签署交付时计一栋验收建筑
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`unsd-cpc-53112`
- 数量范围：暂定验收建筑计数核查
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：building
  - 基准：每栋验收的完整建筑
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 装修残余和不合格物（`finish_residues`）

按危险性和去向区分剩余饰材、污染包装和缺陷装修，并将整改链接至此节点。

- 选定流：按材料和去向区分的装修废物
- 流属性/单位：质量 / kg
- 数量规则：实测废物扣除有记录的内部再用
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每栋完整建筑
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`ec-levels`
- 数量范围：暂定装修残余质量筛查范围
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：10000000
  - 单位：kg
  - 基准：每栋完整建筑；以实测残余和废物转运记录替换
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `whole_building` | 整栋参考产出 | 核心筒、走廊、电梯和中央系统在验收建筑中只计一次；另行按户分析时按实测面积或合理服务驱动量分摊，并保留整栋总量。 | ec-levels |
| `shared_site_assets` | 塔吊、脚手架、模板及能源 | 记录每个消费节点、建筑及服务期间；优先按实测用量，或按有据的因果驱动量分配，各份额只计一次。 | ec-levels |
| `secondary_materials` | 回收构件 | 确定前次用途及回收交接，声明供应商节点的负担处理，排除已分配给前一产品的负担，不重复计回收。 | ec-levels |
| `reject_rework` | 不合格材料和施工 | 失败尝试的材料及能源留在产生节点，追踪整改和边界退出，不合格物不计入合格产出。 | ec-levels |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | `site_foundation`, `assembly_services`, `finish_handover` | 材料和构件 | 竣工清单及到货 | 规格、数量、单位、供应商节点、再生份额、安装节点、不合格物 | 发票、收货与竣工表核对 | kg、m2、件 | 每次到货或变更 | 整个施工期 | 整栋建筑 | 各产品安装加不合格减退货 | 签署的工程量和发票 |
| `cp_site_operations` | `assembly_services` | 现场能源 | 仪表及燃料日志 | 载体、读数、燃料、机时、工序、日期 | 场地日志核对 | kWh、MJ、h | 每班或计费期 | 整个施工期 | 场地和共用资产 | 每栋只分配一次有记录用量 | 仪表与油票 |
| `cp_waste` | `site_foundation`, `assembly_services`, `finish_handover` | 弃土和不合格物 | 转运与再用日志 | 节点、材料、危险性、数量、去向、再用 | 地磅及场地容器 | kg、m3 | 每次转运 | 整个施工期 | 全场地 | 按去向汇总对外退出，扣内部再用 | 签署的接收凭证 |
| `cp_acceptance` | `site_foundation`, `assembly_services`, `finish_handover` | 验收阶段和建筑 | 检查与交付 | 阶段验收、系统测试、缺陷、户数、建筑总面积、交付日期 | 图纸与签署证明 | 栋、m2、日期 | 各节点 | 直至交付 | 整栋建筑 | 验收建筑只计一次 | 签署的调试和交付文件 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `material_balance` | 材料流卡 | 到货减退货等于安装加废物加库存变动；解释差额。 | 到货、退货、安装、废物、库存 | 各材料核对后的数量 | ec-levels |
| `energy_total` | 现场能源 | 汇总归属本栋的载体能源，同时保留载体身份。 | 仪表、燃料、分摊驱动量 | 每栋各载体的 kWh 或 MJ | ec-building-gwp |
| `area_intensity` | 报告 | 整栋结果除以实测建筑总面积；保留每栋总量。 | 验收建筑、面积 | 每 m2 强度 | ec-levels |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 建筑 | 核实至少三户或合格的社区居住建筑、公共空间和固定系统范围。 | 签署的竣工图与验收 |
| `dq_reconciliation` | 材料和废物 | 按产品核对竣工、采购、退货、安装及废弃量。 | 清单、发票、废物凭证 |
| `dq_shared` | 共用资产 | 覆盖所有消费建筑、节点和服务期间，且无重复分配。 | 有日期的资产和能源记录 |
| `dq_handover` | 参考产出 | 所含系统测试通过、缺陷关闭后才计栋数。 | 签署的调试和交付文件 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 核实三户及以上或社区居住、一栋完整建筑、现场交付及实测面积；不可用厂内质量流代替。 | unsd-cpc-53112; ec-levels |
| `validate_inventory` | 流卡 | 将每个竣工构件归属唯一节点，核验主体及成品交接，追踪不合格物和废物去向。 | ec-levels |
| `validate_routes` | 预制替代 | 核实上游装配活动及变更的构件、安装和废物记录；同一构件的现场与预制路线不得重复。 | ec-levels |
| `validate_attribution` | 共用和再生投入 | 核查共用消费方和期间、再生材料来源与回收节点，以及无重复负担。 | ec-levels |

## 10. 发布数据集概况

| Field | Value |
| --- | --- |
| dataset_role | 一栋已完成多户住宅建筑的前景施工数据包 |
| downstream_use | `secondary_dataset`；仅当场址、范围及交付节点相容时作 `background_dataset` |
| allowed_use | 施工阶段建模和单列的生命周期扩展 |
| excluded_use | 直接充当运营全生命周期结果、未分摊的按户结果，或厂内产品质量 |
| required_metadata | 场址、交付日期、户数或住宿类型、面积口径、公区核心筒、固定系统、地下室停车、结构路线、供应商节点 |
| required_quality_disclosure | 缺失工程量、未计量现场能源、核对差额、共用分摊、未解析 UUID |
| update_trigger | 竣工范围、路线、设备验收、供应商节点或经核实产品身份变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-53112` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/53112 | 产品边界；以 CPC 2.1 注释解释 CPC 3.0 未改变的名称 |
| `ec-levels` | `official_guidance` | https://green-forum.ec.europa.eu/green-business/levels/elearning-and-case-studies/levels-case-studies_en | 竣工建筑描述、面积、工程量和废物证据渠道 |
| `ec-building-gwp` | `official_guidance` | https://energy.ec.europa.eu/topics/energy-efficiency/energy-performance-buildings/energy-performance-buildings-directive/global-warming-potential-buildings_en | 施工、使用与寿终阶段划分 |
