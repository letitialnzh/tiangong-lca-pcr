---
pcr_id: pcr.constructions-and-construction-services.constructions.outdoor-sport-and-recreation-facilities
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 户外运动与休闲设施

## 1. 范围与适用性

本 PCR 覆盖一项具有明确功能、经书面验收的户外运动或休闲设施建设：户外运动场地或跑道、高尔夫球场、海滩或游艇码头休闲设施、公共公园或花园，以及动物园或植物园。采集数据前须声明设施类别、合同占地范围、构件清单和验收试验。草坪球场、码头泊位与花园不可套用同一材料清单。室内运动设施、独立验收的建筑或交通工程、单独销售的设备及移交后的运营养护不属于本建设产品。[unsd-cpc3-notes; epa-parks-guide]

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.outdoor-sport-and-recreation-facilities |
| classification_refs | CPC 3.0 53270；映射接受另行管理。 |
| covered_products | 一个已声明建设合同内经接受的户外运动或休闲设施。 |
| excluded_products | 室内运动设施；独立验收的建筑、道路或公用设施；单独构件销售；常规运营及维护。 |
| representative_product | 一项已验收、命名明确，并披露面积、安装清单和性能关口的设施。 |
| production_route | 勘测与移除；土方和基层成形；按路线集成构件；有条件的独立表面或景观收尾；检查、整改及签署移交。 |
| market_state | 已建设并验收的户外资产，不是入场人次或运动小时数。 |

母活动 `integrate_assets` 有不同的主要设施类别路线：运动表面及排水、景观公园/花园/动物园用地及步道，或高尔夫/海滩/码头休闲构件。混合场址可划分互不重叠的子区域。路线差异改变材料类别、收尾工序、试验和计量；人工草坪填料、种植区或浮码头绝非通用投入。仅选择有设计证据的构件和试验。[unsd-cpc3-notes; epa-parks-guide; epa-gi-install]

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已建设、具明确类别及范围的户外运动或休闲设施。 |
| How much | 一项签署验收的设施；另行报告 m2 开发面积及路线特定容量。 |
| How well | 合同规定的表面、排水、通行、结构、种植或泊位检查合格，缺陷关闭。 |
| How long or cycle | 一个建设项目至移交；设计寿命作为元数据披露。 |
| reference_flow_link | `accept_facility` 的 `accepted_facility` 输出。 |

| Field | Value |
| --- | --- |
| Reference amount | 1 accepted facility |
| Reference product flow | 经接受的户外运动或休闲设施；UUID 未解析 |
| Reference flow property | Count；UUID 未解析 |
| Reference unit group | Count；UUID 未解析 |
| Reference unit | facility |
| Required qualifiers | 设施类别；场址；合同占地；安装清单；设计用途/容量；路线试验；验收日期 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `facility_count` | 参考产品 | Count，UUID 未解析 | facility | 已签署的合同资产计一次；子区域是属性而非额外产品。 |
| `area_partition` | 开发占地 | Area | m2 | 计量不重叠子区域；区分场址、建设表面及种植面积。 |
| `earth_state` | 挖方与填方 | Volume and density | m3; kg/m3 | 转换质量前区分原状、松散和压实状态。 |
| `carrier_separation` | 建设能源 | Carrier-specific energy or mass | kWh; MJ; kg | 电力与燃料分列，披露转换系数。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 合同开工前完成勘测的户外场址、原有植被/土壤及公用设施或岸线接口。 |
| starting_condition_role | 物理基线；既有可用资产不作为免费新建产出。 |
| product_classification_scope | 一项经接受的户外运动/休闲设施；独立验收的建筑、道路和公用设施另作产品。 |
| recursive_input_rule | 购入的同类完整设施模块从供应方交付点进入并带上游数据集，不重复建立整项设施材料清单。 |
| upstream_dataset_requirement | 与规格和地区相符的建设材料、能源、运输和废物处理；实际路线涉及的植物、铺面或海事构件。 |
| disclosure | 类别、占地划分、安装清单、原地面、挖填方、收尾路线、试验、共享工程、拒收路径及 UUID 缺口。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `construction_gate` | 整体设施 | 包含合同内准备、建设、移交前培植/试验和缺陷关闭；排除移交后的养护。 | `unsd-cpc3-notes`; `epa-gi-install` |
| `removal_gate` | `prepare_site` | 来源为原有土壤、植被或建成材料；分开记录场内复用与外运。已验收场地移交成形工序。 | `site-mass-balance` |
| `forming_gate` | `form_base` | 已准备场地与填料/结构材料形成经检查的基层或硬质支撑；不合格部分回到修复。 | `site-mass-balance` |
| `integration_gate` | `integrate_assets` | 接收合格基层及单独识别的路线构件；安装检查后再收尾或验收。 | `unsd-cpc3-notes` |
| `finish_gate` | `finish_surface` | 如有规定，对既有母资产做表面、防护或种植收尾；拒收面积/残余单列。 | `epa-gi-install` |
| `family_delta` | `integrate_assets`; `finish_surface` | 声明类别特有的材料、收尾与试验差异；混合路线的共享工程只分摊一次。 | `unsd-cpc3-notes`; `epa-parks-guide` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_site` | 场地移除与准备 | required | 勘测基线至经检查的已准备场地。 | 移除/保护土壤、植被和建成材料；安排复用和外运。 | 勘测与移除单据。 |
| `form_base` | 土方与基层成形 | required | 已准备场地至经检查的成形地面/基层。 | 形成标高、排水和结构支撑；修复拒收项。 | 竣工面积、体积与测试。 |
| `integrate_assets` | 设施构件集成 | required | 合格基层至可测试的已安装设施。 | 连接路线特有的表面、通行、排水、种植系统或海事装置。 | 构件清单与质检。 |
| `finish_surface` | 表面或景观收尾 | conditional | 集成后明确规定独立的最终铺面、防护或种植。 | 对母资产实施收尾并检查。 | 收尾面积与拒收项。 |
| `accept_facility` | 最终测试与移交 | required | 已安装/收尾工程至签署验收。 | 测试所选类别、关闭缺陷并计一项资产。 | 证书及竣工清单。 |

### 过程： 场地移除与准备 (`prepare_site`)

#### 输入

##### 产品流

###### 移除能源 (`removal_energy`)

自营清理和开挖的燃料或电力；排除已包含在总包服务中的能源。

- 选定流： 按实际类型确定的场地移除能源载体
- 流属性/单位： Carrier-specific energy or mass / kWh, MJ or kg
- 绑定模式： 参数化（`parameterized`）
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- 数量规则： 按任务及载体计量，并核对分包范围。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_site`
- 数量范围： 移除能源分配覆盖率
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of documented unbundled site energy
  - 基准： 分配的移除能源除以记录的未打包场地能源
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备场地 (`prepared_ground`)

已检查清理并移交 `form_base` 的场地，不是另一项可销售设施。

- 选定流： 已准备并勘测的建设场地
- 流属性/单位： Area / m2
- 数量规则： 汇总不重叠且验收的准备子区域。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_site`
- 数量范围： 已准备面积完成率
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of specified preparation area
  - 基准： 合格准备面积除以规定准备面积
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 废物流

###### 外运场地材料 (`exported_site_material`)

越过项目边界的开挖土、植被或拆除材料；内部复用仍为内部状态。

- 选定流： 按组成及去向划分的移除场地材料
- 流属性/单位： Mass / kg
- 数量规则： 平衡移除量、复用量、库存变化和外运量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_site`
- 数量范围： 外运份额
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of removed mass
  - 基准： 按材料类型计算外运质量除以移除质量
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 基本流

### 过程： 土方与基层成形 (`form_base`)

#### 输入

##### 产品流

###### 接收已准备场地 (`received_prepared_ground`)

从 `prepare_site` 内部移交；不可再次购买或计入同一场地准备。

- 选定流： 已准备并勘测的建设场地
- 流属性/单位： Area / m2
- 数量规则： 匹配上游已检查面积。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_site`
- 数量范围： 已准备场地移交匹配
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： received/handed-off area
  - 基准： 接收面积除以上游合格准备面积
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

###### 基层与排水材料 (`base_materials`)

按设计使用填料、骨料、混凝土、土工织物及排水构件；运动、景观和海事路线清单不同。

- 选定流： 按规格划分的基层、结构与排水材料
- 流属性/单位： Mass / kg
- 数量规则： 按材料核对交付、安装、退回及拒收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_base`
- 数量范围： 安装份额
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of delivered material mass
  - 基准： 合格安装质量除以交付质量
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格基层 (`inspected_base`)

按竣工记录形成的标高、支撑及排水基层，移交 `integrate_assets`。

- 选定流： 经检查的设施基层与排水成形区域
- 流属性/单位： Area / m2
- 数量规则： 计量不重叠的合格基层面积并披露结构。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_base`
- 数量范围： 基层完成率
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of specified formed area
  - 基准： 合格基层面积除以规定基层面积
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 废物流

###### 拒收基层材料 (`base_rejects`)

退出边界并去退回、回收或处置的不合格成形材料；修复部分留在 `form_base`。

- 选定流： 拒收基层材料 by type and destination
- 流属性/单位： Mass / kg
- 数量规则： 修复和退回核对后仅计算边界退出量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_base`
- 数量范围： 拒收份额
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of delivered base-material mass
  - 基准： 退出边界的拒收质量除以交付基层材料质量
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 基本流

### 过程： 设施构件集成 (`integrate_assets`)

#### 输入

##### 产品流

###### 接收合格基层 (`received_base`)

合格基层内部移交；成形负担仍属于 `form_base`。

- 选定流： 经检查的设施基层与排水成形区域
- 流属性/单位： Area / m2
- 数量规则： 匹配上游合格基层面积及结构。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_base`
- 数量范围： 基层移交匹配
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： received/handed-off area
  - 基准： 接收基层面积除以上游合格基层面积
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

###### 路线特定构件 (`facility_components`)

按实际情况拆分运动表面系统、公园步道、游客设施、种植支撑、海滩设施或码头泊位硬件；不是通用清单。

- 选定流： 按材料及功能划分的户外设施构件
- 流属性/单位： Mass or count / kg or item
- 数量规则： 按规格核对交付与合格安装量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_components`
- 数量范围： 合格构件份额
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of delivered components
  - 基准： 按构件计算的合格安装量除以交付量
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已安装资产 (`installed_asset`)

在合格基层上连接并检查构件后形成的设施；随后进入有条件收尾或最终验收。

- 选定流： 最终收尾及验收前的已安装户外设施
- 流属性/单位： Area / m2
- 数量规则： 结合构件清单记录不重叠的安装面积。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_components`
- 数量范围： 已安装面积完成率
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of specified installed area
  - 基准： 经检查安装面积除以规定设施面积
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 废物流

###### 拒收构件 (`integration_rejects`)

退出边界的损坏或不合格构件；修复及重检在 `integrate_assets` 内循环。

- 选定流： 按材料及去向划分的拒收设施构件
- 流属性/单位： Mass / kg
- 数量规则： 平衡缺陷、修复、供应商退回、回收与处置。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_components`
- 数量范围： 集成拒收份额
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of delivered component mass
  - 基准： 退出边界的拒收质量除以相关交付构件质量
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 基本流

### 过程： 表面或景观收尾 (`finish_surface`)

#### 输入

##### 产品流

###### 接收已安装资产 (`received_installed_asset`)

仅在独立收尾时接收适用的母资产面积；其他区域直接进入验收。

- 选定流： 最终收尾及验收前的已安装户外设施
- 流属性/单位： Area / m2
- 数量规则： 测量需独立收尾的路线面积。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish`
- 数量范围： 适用收尾份额
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of installed area
  - 基准： 接收收尾面积除以已安装总面积
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

###### 收尾或种植投入 (`finish_inputs`)

仅按路线纳入明确规定的草坪/铺面、防护材料、土壤改良剂、植物或海事收尾材料；保留材料特定质量或数量。

- 选定流： 按规格划分的最终表面或种植材料
- 流属性/单位： Mass or count / kg or item
- 数量规则： 按项目核对交付、安装、退回和拒收。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_finish`
- 数量范围： 合格收尾投入份额
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of delivered finish material
  - 基准： 按材料计算的合格安装量除以交付量
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格收尾 (`accepted_finish`)

经检查的最终表面或种植面积移交 `accept_facility`；仅纳入合同范围内的移交前培植。

- 选定流： 已收尾并检查的户外设施面积
- 流属性/单位： Area / m2
- 数量规则： 汇总合格收尾面积，不重复计修复面积。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish`
- 数量范围： 收尾完成率
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of specified finish area
  - 基准： 合格收尾面积除以规定收尾面积
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 废物流

###### 收尾拒收物 (`finish_rejects`)

送去注明的复用、回收或处理路径的不合格收尾或种植材料；修复负担留在本工序。

- 选定流： 按类型及去向划分的拒收收尾材料
- 流属性/单位： Mass / kg
- 数量规则： 修复及退回核对后计实际退出量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_finish`
- 数量范围： 收尾拒收份额
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 0
  - 上限： 1
  - 单位： fraction of delivered finish-material mass
  - 基准： 退出边界的拒收收尾质量除以交付收尾材料质量
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 基本流

### 过程： 最终测试与移交 (`accept_facility`)

#### 输入

##### 产品流

###### 已安装及收尾工程 (`received_completed_work`)

直接接收未收尾安装面积，并另外接收质检后的收尾面积；划分后不重复接收。

- 选定流： 按不重叠面积划分的已完成户外设施工程
- 流属性/单位： Area / m2
- 数量规则： 未收尾安装面积与合格收尾面积只相加一次。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_acceptance`
- 数量范围： 已完成工程覆盖率
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： received/accepted project area
  - 基准： 接收的不重叠工程面积除以验收项目面积
  - 基准类型： 过程输出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已接受户外设施 (`accepted_facility`)

完成路线特定试验、缺陷关闭和签署移交的合同运动或休闲资产。

- 选定流： 按已声明类别划分的经接受户外运动或休闲设施
- 流属性/单位： Count / facility
- 数量规则： 每个参考流恰好计一项签署验收的设施。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每项经接受的设施
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 依据采集计算（`calculated_from_collection`）
- 采集协议： `cp_acceptance`
- 数量范围： 参考数量
  - 范围角色： QA 校验（`qa_guardrail`）
  - 下限： 1
  - 上限： 1
  - 单位： facility/reference flow
  - 基准： 已签署的验收设施数量
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `site-mass-balance`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `single_asset` | 合格产出 | 将建设负担归于一项签署验收的资产；入场和后续养护不是共产品。 | `unsd-cpc3-notes` |
| `mixed_family` | 混合场址 | 按竣工量划分可测子区域；真正共享工程按工程驱动因素或计量使用量分配一次。 | `site-mass-balance` |
| `reuse_and_spoil` | 场地材料 | 内部挖方复用保留移除负担；外运记录去向，不设无依据的替代产品抵扣。 | `site-mass-balance` |
| `rework_retention` | 拒收工程 | 不合格基层、构件或收尾回到产出节点；修复负担留在该节点，不形成额外合格产出。 | `site-mass-balance` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_site` | `prepare_site` | 移除、能源、场地、弃料 | 勘测及单据 | 基线；材料；挖方；密度；复用；外运；去向；载体；数量 | 勘测、计量、地磅及发票 | m2; m3; kg; kWh; MJ | 区域/车次/班次 | 项目期 | 合同场址 | 平衡移除质量及合格面积 | 勘测、单据、计量 |
| `cp_base` | `form_base` | 基层、排水、拒收 | 交付及竣工记录 | 规格；交付；铺设；退回；拒收；基层面积；测试 | 票据、图纸及质检 | kg; m2; m3 | 批次/区段 | 项目期 | 成形面积 | 核对交付及合格状态 | 票据及测试 |
| `cp_components` | `integrate_assets` | 构件、资产、拒收 | 清单及检查 | 类别；构件；交付；安装；退回；拒收；面积；测试 | 清单、安装日志及质检 | kg; item; m2 | 构件/子区域 | 项目期 | 已安装设施 | 平衡各构件并划分面积 | 发票、竣工图、质检 |
| `cp_finish` | `finish_surface` | 收尾、植物、拒收 | 交付及检查 | 收尾类型；材料；交付；合格；拒收；面积；培植测试 | 票据、勘测及质检 | kg; item; m2 | 批次/子区域 | 至收尾签认 | 收尾区域 | 平衡面积及材料 | 票据、质检 |
| `cp_acceptance` | `accept_facility` | 已完成工程及资产 | 签署证书 | 类别；占地；清单；测试；缺陷；关闭；验收日期 | 竣工记录及签署移交 | facility; m2 | 移交时 | 至验收 | 合同资产 | 划分工程并计一项资产 | 签署证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `site_balance` | `prepare_site` | 移除质量 = 场内复用 + 外运 + 库存变化，使用实测状态密度。 | 勘测、密度、票据 | 场地材料路径 | `site-mass-balance` |
| `material_balance` | 成形、集成、收尾 | 交付 = 合格安装 + 供应商退回 + 边界退出拒收 + 库存变化；修复不是新增交付。 | 票据、质检、退回 | 材料及拒收流 | `site-mass-balance` |
| `area_partition_calc` | 安装至验收 | 验收面积 = 未收尾安装面积 + 合格收尾面积，二者不得重叠。 | 竣工记录、收尾质检 | 验收面积 | `site-mass-balance` |
| `facility_count_calc` | `accept_facility` | 路线试验及缺陷关闭签认后，仅计一项资产。 | 测试、证书 | 参考产品 | `site-mass-balance` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `family_trace` | 所有节点 | 声明类别、构件清单、占地划分和移交关口。 | 合同图、竣工图、证书 |
| `material_trace` | 移除、成形及收尾 | 保留来源条件、计量状态、材料等级、拒收/复用去向及质检。 | 勘测、票据、检查 |
| `route_trace` | 替代路线 | 解释适用的运动、景观、海滩或海事投入及测试；未出现的构件不入清单。 | 设计及验收规格 |
| `identity_gap` | 未解析流 | 最终交换前核实准确流、属性及单位组 UUID。 | 平台详情审核 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_check` | 参考产品 | 核实户外类别及签署验收；排除室内设施、独立交付资产和运营。 | `unsd-cpc3-notes` |
| `family_check` | `integrate_assets` | 各类别须有实际清单、收尾及测试；不得通用套入草坪、种植或码头材料。 | `unsd-cpc3-notes`; `epa-parks-guide` |
| `handoff_check` | 所有节点 | 匹配内部移交、不重叠面积及材料平衡；共享工程仅计一次。 | `site-mass-balance` |
| `finish_check` | `finish_surface` | 启用时记录母资产、投入、合格收尾和拒收路径；否则已安装资产直送验收。 | `epa-gi-install` |
| `reject_check` | 所有节点 | 返工留在产出节点；废物退出须有去向，且不可变成合格产出。 | `site-mass-balance` |
| `range_role` | 所有流卡 | QA 比率是相容性测试，而非通用建设强度。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 经接受的户外运动或休闲资产建设前景数据包。 |
| downstream_use | 仅在类别、场址、构件和关口可比时用作二级/背景建设数据。 |
| allowed_use | 已披露占地、材料、路线和验收的建设阶段建模。 |
| excluded_use | 室内设施、独立建筑/交通资产、构件销售、移交后的使用或养护。 |
| required_metadata | 场址、年份、类别、占地划分、路线构件、材料状态、设计用途/容量、测试和验收。 |
| required_quality_disclosure | 共享工程分配、挖填方平衡、收尾选择、缺陷/返工及 UUID 缺口。 |
| update_trigger | 类别、设计、合同边界、验收数量、路线或身份发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-notes` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | Asset-family scope and indoor exclusion. |
| `epa-parks-guide` | official_guidance | US EPA, Green Infrastructure in Parks: A Guide to Collaboration, Funding, and Community Engagement, EPA 841-R-16-112, https://www.epa.gov/nps/green-infrastructure-parks-guide | Park-specific component distinctions. |
| `epa-gi-install` | official_guidance | US EPA, Green Infrastructure Installation, Operation, and Maintenance, https://www.epa.gov/green-infrastructure/green-infrastructure-installation-operation-and-maintenance | Installation, inspection and operation separation where green infrastructure is present. |
| `site-mass-balance` | method_factor | Conservation-of-material and non-overlapping-area identities applied to measured project surveys, tickets and acceptance records. | Material balance, shared-work partition and QA formulas. |
