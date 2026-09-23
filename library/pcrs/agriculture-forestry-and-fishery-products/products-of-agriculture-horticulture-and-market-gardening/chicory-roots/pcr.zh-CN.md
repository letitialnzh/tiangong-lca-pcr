---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chicory-roots
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 菊苣根

## 1. 范围与适用性

本 PCR 适用于农场门交付的鲜、未加工栽培菊苣（*Cichorium intybus* L.）根，包括建植、田间管理、起挖、去叶/修整、去土、分级和交付。强制栽培菊苣芽球、叶用或饲用菊苣、种子、供强制栽培贮藏的根，以及切片、干燥、烘焙或提取产品不在范围内。强制栽培、烘焙、咖啡替代品制造和菊粉提取属于下游。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chicory-roots |
| classification_refs | CPC 3.0: 01691 菊苣根 |
| covered_products | 起挖、修整、去土和分级后的鲜栽培菊苣主根 |
| excluded_products | 强制栽培芽球；叶用或饲用菊苣；种子；干燥、切片或烘焙根；咖啡替代品；菊粉及其他提取物 |
| representative_product | 符合声明等级、交付含水与洁净状态的可销售鲜菊苣根 |
| production_route | 受控田间生产、起挖、初级整理与分级；直播/移栽和人工/机械起挖为须声明的替代路线 |
| market_state | 农场门鲜、未加工农产品 |

受控生产父活动为 `field_production`。直播与移栽可用于不同批次，但同一田块批次只能选择其一；两者的种植材料记录和根形可能不同。人工和机械起挖同样需分批记录，因为设备能源、损失和带土量可能不同。每项路线差异均须由当前记录支持。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门交付的可销售鲜、未加工菊苣根 |
| How much | 1 kg net mass |
| How well | 符合等级，并声明品种/用途路线、建植路线、起挖方式、修整约定、洁净与含水状态 |
| How long or cycle | 一个作物周期，不含贮藏，并纳入截至农场门交付的全部可归属操作 |
| reference_flow_link | `grading_farm_gate` 的 `accepted_chicory_roots` |

| 字段 | 值 |
| --- | --- |
| 参考量 | 1 kg |
| 参考产品流 | 菊苣根 `8691795b-78fb-4573-9e09-d4957c166bb4` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或商品类型；根用途路线；建植路线；收获日期与起挖方式；等级；修整与附着土约定；交付含水状态；地域；目的地 |
| 绑定模式 | `fixed` |

## 4. 测量与单位规则

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格根 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量修整、去土和分级后的交付净根质量；排除容器、游离土、叶部和拒收物。 |
| `area_to_mass` | 田间记录 | 质量与面积 | kg 和 ha | 用同一批次面积和经核对的合格产量归一化作物周期记录；披露含水状态与换算。 |
| `internal_mass_state` | 过程转移 | 质量 | kg | 在同一声明湿质量状态下核对转移，并分别记录叶部、土、降级根、拒收物和损失。 |

## 5. 系统边界

前景边界始于种植材料和可归属于本作物的田间投入，止于合格根在农场门交付。种植材料、养分产品、植保产品、能源、供水和外部处理使用上游数据集。强制栽培及后续加工排除在外。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一个作物周期内接收菊苣种子或移栽苗的已准备田地 |
| starting_condition_role | 前景入口；纳入可归属于本作物的整地并披露继承土壤条件 |
| product_classification_scope | 对应 CPC 3.0 01691 的鲜未加工菊苣根 |
| recursive_input_rule | 外购菊苣根作为上游产品投入，不递归表示为本参考产出的生产 |
| upstream_dataset_requirement | 种植材料、养分、植保、能源、水和外部处理的代表性上游数据集 |
| disclosure | 品种/用途路线、田块与日期、前茬、地域、建植、灌溉、起挖、修整、去土、等级去向及农场门状态 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_cycle` | `field_production` | 纳入可归属本作物的整地、建植、养分与植保施用、灌溉及直至可收获状态的田间操作。 | `umn-forcing-chicories-2023`; `omafra-root-chicory` |
| `boundary_lifting` | `root_lifting` | 起挖将生物根从田间移出且有独立能源、损失和带土记录，故须单独建模。 | `umn-forcing-chicories-2023` |
| `boundary_conditioning` | `primary_conditioning` | 纳入去叶/修整和农场级去土；仅在交付前实际进行时纳入清洗。 | `umn-forcing-chicories-2023`; `ucd-witloof-chicory` |
| `boundary_grading` | `grading_farm_gate` | 记录合格、降级和拒收状态及其各自去向；仅合格根为参考产出。 | `umn-forcing-chicories-2023` |
| `boundary_downstream` | downstream | 排除强制栽培、为强制栽培而贮藏、芽球生产、切片、干燥、烘焙和提取。 | `umn-forcing-chicories-2023`; `ucd-witloof-chicory` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 包含性 | 包含条件 | 作用 | 定量基准 |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 受控生物田间生产 | 必需 | 一个批次/周期，采用批次模式；声明直播或移栽路线差异 | 生产待收获根；分类全部管理投入 | ha 和 kg 待收获根 |
| `root_lifting` | 根起挖与收获 | 必需 | 声明人工或机械替代技术路线差异 | 独立于生产收获根并转入整理 | kg 进入起挖的根 |
| `primary_conditioning` | 初级整理：修整与去土 | 必需 | 仅农场实际清洗时 | 将已起挖根转为整理后根；分离叶部、土和废水 | kg 已起挖根 |
| `grading_farm_gate` | 分级与交付 | 必需 | 声明每个等级/去向 | 分离合格、降级和拒收根 | kg prepared roots |

所有操作按批次和作物周期索引。共享机械、清洁和换线负荷按实测用量、时间、面积或质量仅归属一次。在算出路线特定产量与损失前，替代路线批次须保持分离。

### 过程：受控田间生产 (`field_production`)

#### 投入

##### 产品流

###### 种植材料 (`planting_material`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 菊苣种子或移栽苗
- 数量规则： 记录实际种子或移栽苗质量及建植路线。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： 每公顷每作物周期
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_inputs`
- 来源： `umn-forcing-chicories-2023`
- 数量范围： 暂定种植材料质量筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0.1
  - 上限： 2000
  - 单位： kg/ha
  - 基准： 每公顷；宽泛覆盖种子与移栽路线
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 合并农业养分供应 (`nutrient_supply`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 全部矿质肥料、有机肥料及含养分改良剂
- 绑定模式： `parameterized`
- Flow Set： `flow-set.agricultural-nutrient-supply`
- Flow Set version： `0.3.0`
- 数量规则： 按身份、养分含量和湿/干质量分别记录每种实际产品；这是本过程唯一养分供应卡。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷每作物周期
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_inputs`
- 来源： `omafra-root-chicory`; `cwalina-root-chicory-n-2022`
- 数量范围： 暂定养分产品总质量筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 50000
  - 单位： kg/ha
  - 基准： 每公顷施用产品总和，含湿态有机产品
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 植保产品 (`crop_protection`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 植保和田间处理产品
- 数量规则： 记录每种制剂产品、已知有效成分、用途和处理面积。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷每作物周期
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_inputs`
- 数量范围： 暂定制剂产品质量筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg/ha
  - 基准： 每公顷施用制剂产品总量
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 灌溉水 (`irrigation_water`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 灌溉水
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则： 计量或计算总供水量并识别水源与系统。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷每作物周期
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_irrigation`
- 来源： `omafra-root-chicory`; `usu-chicory-garden`
- 数量范围： 暂定灌溉筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 10000
  - 单位： m3/ha
  - 基准： 每公顷作物周期总灌溉量
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 田间能源 (`field_energy`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 田间机械与水泵使用的能源载体
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： 按操作记录每种能源载体；排除下游已记录的起挖能源。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每公顷每作物周期
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy`
- 数量范围： 暂定田间能源筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 30000
  - 单位： MJ/ha
  - 基准： 每公顷购入终端能源
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 待收获根 (`harvest_ready_roots`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 土中待收获菊苣根
- 数量规则： 在统一湿质量基准上由已起挖根、抽样田间损失和残余物计算。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷每作物周期
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_mass_balance`
- 来源： `cwalina-root-chicory-n-2022`
- 数量范围： 鲜根产量 QA 校验范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 5
  - 上限： 100
  - 单位： Mg/ha
  - 基准： 每公顷待收获鲜根质量
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 外部来源（`external_source`）
  - 来源： `cwalina-root-chicory-n-2022`

##### 废物流

###### 田间残余物与损失 (`field_residues`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 留田叶部、未收获生物质和根
- 数量规则： 通过代表性抽样估算，并声明留田、移除或处理。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 待收获根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_mass_balance`
- 数量范围： 暂定残余物比例
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 2
  - 单位： kg/kg harvest-ready roots
  - 基准： 每 kg 待收获根对应湿残余物与损失
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 田间直接排放 (`direct_field_emissions`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 田间投入导致排入空气、水或土壤的确切物质
- 数量规则： 用已识别方法分别计算每种物质和环境介质；不得创建汇总基本流交换。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每公顷每作物周期
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_field_emissions`
- 来源： `ipcc-2019-refinement-volume4`
- 数量范围： 暂定完整性筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 500
  - 单位： kg/ha
  - 基准： 报告质量之和仅用于筛查；交换仍按物质和环境介质区分
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

### 过程：根起挖与收获 (`root_lifting`)

#### 投入

##### 产品流

###### 待收获根 entering lifting (`roots_to_lifting`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 土中待收获菊苣根
- 数量规则： 使用同批次经核对的 `harvest_ready_roots` 产出。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 进入起挖的根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_mass_balance`
- 数量范围： 内部转移恒等范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg roots entering lifting
  - 基准： 同批次上游产出与下游投入相等
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

###### 起挖能源 (`lifting_energy`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 人工辅助或机械起挖及田间转运使用的能源载体
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： 按起挖事件记录实际载体；排除已归属的田间能源。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 进入起挖的根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy`
- 来源： `umn-forcing-chicories-2023`
- 数量范围： 暂定起挖能源筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 5
  - 单位： MJ/kg roots entering lifting
  - 基准： 起挖及田间转运购入终端能源
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 已起挖根 (`lifted_roots`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 带附着土和叶部的已起挖菊苣根
- 数量规则： 称量整理过程接收的流。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 进入起挖的根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_balance`
- 数量范围： 已起挖根平衡范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg roots entering lifting
  - 基准： 每 kg 待收获根对应已起挖流
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 废物流

###### 起挖损失 (`lifting_losses`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 未回收或受损根及夹带物
- 数量规则： 由田间抽样估算并声明留田或移除。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 进入起挖的根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_mass_balance`
- 数量范围： 暂定起挖损失比例
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.5
  - 单位： kg/kg roots entering lifting
  - 基准： loss 每 kg 进入起挖的根
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

### 过程：修整与去土 (`primary_conditioning`)

#### 投入

##### 产品流

###### 已起挖根 entering conditioning (`roots_to_conditioning`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 带附着土和叶部的已起挖菊苣根
- 数量规则： 使用同批次实测 `lifted_roots`。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 已起挖根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_conditioning`
- 数量范围： 内部转移恒等范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg lifted roots
  - 基准： 同批次起挖产出与整理投入相等
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

###### 初级整理用水 (`conditioning_water`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 去土和可选清洗使用的工艺水
- 绑定模式: Parameterized (`parameterized`)
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 数量规则： 计量总进水量与回用量；未清洗时数量为零。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 已起挖根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_conditioning`
- 数量范围： 暂定初级整理用水筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： L/kg lifted roots
  - 基准： 每 kg 已起挖根的总进水量
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 初级整理能源 (`conditioning_energy`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 修整、去土和可选清洗使用的能源载体
- 绑定模式： `parameterized`
- Flow Set： `flow-set.energy-supply`
- Flow Set version： `0.2.0`
- 数量规则： 按已索引运行记录每种实际能源载体及其实测或分配用量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 已起挖根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_conditioning`
- 数量范围： 暂定初级整理能源筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 5
  - 单位： MJ/kg lifted roots
  - 基准： 每 kg 已起挖根的购入终端能源
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 整理后根 (`prepared_roots`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 经修整和去土的鲜菊苣根
- 数量规则： 在分级交接点称量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 已起挖根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_conditioning`
- 数量范围： 整理后根平衡范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg lifted roots
  - 基准： 每 kg 已起挖根对应整理后根
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 废物流

###### 整理残余物与废水 (`conditioning_residues`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 叶部、修整物、土壤、腐损根块和废水
- 数量规则： 分别计量各种材料（含排水），并声明回用、利用、处理或处置去向。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 已起挖根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_conditioning`
- 数量范围： 暂定残余物总质量筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 21
  - 单位： kg/kg lifted roots
  - 基准： 每 kg 已起挖根对应全部分离固体与排水
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

### 过程：分级与交付 (`grading_farm_gate`)

#### 投入

##### 产品流

###### 整理后根 entering grading (`roots_to_grading`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 经修整和去土的鲜菊苣根
- 数量规则： 使用同批次和运行的 `prepared_roots`。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 整理后根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading`
- 数量范围： 内部转移恒等范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg prepared roots
  - 基准： 同批次整理产出与分级投入相等
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 合格鲜菊苣根 (`accepted_chicory_roots`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 菊苣根 `8691795b-78fb-4573-9e09-d4957c166bb4`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式： `fixed`
- 数量规则： 计量交付时符合声明等级的净质量；此为参考产出。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 1 kg 参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading`
- 数量范围： 参考产出恒等范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： 每 1 kg 参考产品
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `reference-flow-identity`

###### 降级根 (`downgraded_roots`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 送往已声明低等级或加工目的地的鲜根
- 数量规则： 称量仍为产品但不符合参考等级的根；记录去向并从合格产出中排除。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 整理后根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading`
- 数量范围： 降级量平衡范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg prepared roots
  - 基准： 每 kg 整理后根对应降级产品
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 废物流

###### 分级拒收根 (`grading_rejects`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 退出产品用途的规格外、受损或腐败根
- 数量规则： 称量并声明重新分级、返回整理、回收、饲用、处理或处置；每个返工循环仅计一次。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 整理后根
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading`
- 数量范围： 拒收量平衡范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg prepared roots
  - 基准： 每 kg 整理后根对应拒收物
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all nodes | 优先按批次和运行细分并直接测量。 | `iso-14044-2006` |
| `allocation_grades` | accepted and downgraded roots | 分别报告质量；若两者均有价值且无法细分，应声明研究采用的分配方法并提供未分配清单。不得将降级根计入合格根。 | `iso-14044-2006` |
| `allocation_residues` | tops, soil, losses and rejects | 除非有文件证明产品功能和去向可支持分配，否则负荷保留在产生节点。 | `iso-14044-2006` |
| `allocation_runs_rework` | shared runs and rework | 共享负荷按实测用量、时间、面积或质量仅分配一次；返回材料保留既有负荷且只增加返工负荷。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_production` | planting, each nutrient and crop-protection product | invoice/application/field records | lot; route; product; nutrient/active content; wet/dry basis; quantity; area; date | Reconcile stock and applications; generate concrete nutrient exchanges separately under the sole nutrient card | kg, kg active, ha | each operation | full cycle | field lot | Sum by product and normalize by area then accepted yield | invoice; label; applicator record |
| `cp_irrigation` | `field_production` | irrigation | meter/pump records | source; readings or flow/runtime; area; reuse | Meter or calibrated flow × runtime | m3, ha | each event | full cycle | field lot | Sum gross delivery; subtract only documented reuse | calibration; irrigation log |
| `cp_energy` | all processes | energy by operation | fuel/meter/machine logs | carrier; quantity; operation; runtime; area/mass; lot/run | Meter or reconcile fuel; assign shared use once | L, kg, kWh, MJ | each operation | full cycle through hand-off | lot/run | Retain carrier exchange; normalize by causal driver | invoice; meter; equipment log |
| `cp_mass_balance` | field and lifting | roots, residues, losses, transfers | scale/sampling records | lot; gross/tare/net; moisture; tops; soil; loss; time | Calibrated weighing and representative sampling | kg, ha | each lot/handoff | harvest through lifting | field lot | Reconcile inputs, outputs, residues and losses | calibration; sampling plan |
| `cp_field_emissions` | `field_production` | exact emissions | calculation record | nutrient form/N; application; soil/climate; substance; compartment; method | Apply named method to collected records | kg substance, kg N | each application/calculation | full cycle | field lot | Sum by substance and compartment | inputs; method; audit trail |
| `cp_conditioning` | `primary_conditioning` | utilities, roots, residues, wastewater | meter/scale/run log | run/lot; roots; water; energy; tops; soil; wastewater; destinations | Meter utilities and weigh material states | kg, L, kWh | each run | all included runs | site/run | Reconcile solids and water separately | calibration; run sheet; receipt |
| `cp_grading` | `grading_farm_gate` | accepted, downgraded, rejected, reworked | grade/dispatch log | run/lot; grade; each output mass; destination; rework; date | Calibrated weighing by output state | kg | each run/dispatch | all included runs | site/run | Reconcile prepared input and outputs; count rework once | calibration; grade; dispatch |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_normalization` | field flows | amount per kg accepted roots = crop-cycle amount / accepted mass from the same area | amount; area; accepted mass | normalized exchange | `mass-balance-identity` |
| `calc_process_balance` | each hand-off | input mass = products + residues/rejects + measured loss on one mass state | calibrated masses; samples | closure difference | `mass-balance-identity` |
| `calc_direct_emissions` | field emissions | Apply the declared current method separately by substance and compartment | input and field records | kg substance by compartment | `ipcc-2019-refinement-volume4` |
| `calc_shared_energy` | shared equipment | consumption × causal share; shares sum to 1 | energy; time/area/mass | assigned energy | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 将品种/用途、等级、修整、洁净和含水状态关联到每一批质量。 | grade, lot and dispatch records |
| `dq_coverage` | inventory | 覆盖一个完整作物周期及所有贡献的起挖、整理和分级运行。 | dated field/run logs |
| `dq_measurement` | mass, water, energy | 使用校准仪器，或记录计算、抽样与不确定性。 | calibration and sampling records |
| `dq_route` | alternatives | 在完成路线特定投入、产量和损失计算前保持建植与起挖路线分离。 | route-indexed records |
| `dq_completeness` | nutrients and outputs | 在一张卡下采集实际养分产品，并无重复地核算合格、降级、拒收、残余物和损失状态。 | input ledger; balance report |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | 确认 UUID、1 kg 净质量、鲜未加工根状态和限定信息；拒绝芽球、叶、烘焙根或提取物数据集。 | `ucd-witloof-chicory`; `umn-forcing-chicories-2023` |
| `validate_topology` | process graph | 要求田间、起挖、整理和分级交接；清洗为条件过程，强制栽培及后续加工不得出现。 | `umn-forcing-chicories-2023` |
| `validate_route_delta` | alternatives | 要求父过程、批次级路线及种植、能源、损失或整理记录变化的证据；同一批次不得混合互斥路线。 | `umn-forcing-chicories-2023` |
| `validate_nutrients` | field inputs | 每个过程最多一张养分产品卡，且仅绑定 `flow-set.agricultural-nutrient-supply@0.3.0`；生成交换须保留实际产品。 | `omafra-root-chicory` |
| `validate_mass_balance` | hand-offs | 在同一状态核对投入与产品、残余物/拒收物及损失；调查无法解释的平衡差。 | `mass-balance-identity` |
| `validate_reject_routing` | grade/rework | 为每个降级或拒收状态指定去向；返回材料仅增加增量负荷，并须重新通过等级后方可成为合格产出。 | `mass-balance-identity` |
| `validate_run_attribution` | shared operations | 验证批次/运行索引且份额之和为 1，确保清洁、能源与返工仅计一次。 | `mass-balance-identity` |
| `validate_ranges` | inventory | 每张流卡须恰有一个完整数量范围；范围外数值须复核，但不得替代有依据的前景值。 | `mass-balance-identity` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门鲜未加工菊苣根前景生产数据集 |
| downstream_use | `secondary_dataset`；具有代表性时可作 `background_dataset` |
| allowed_use | 鲜根及自行添加农场后过程的强制栽培、食品、饲料或配料系统 LCA |
| excluded_use | 不得直接代表强制芽球、叶用菊苣、烘焙菊苣、咖啡替代品、提取物、种子或加工根 |
| 必需_metadata | 地域；批次/周期；品种/用途；建植与起挖路线；产量；灌溉；养分台账；整理；等级去向；含水状态；年份 |
| 必需_quality_disclosure | 原始数据占比；代表性；平衡闭合；路线分离；不确定性；超出范围的处理 |
| update_trigger | 路线、技术、灌溉/养分、产量、整理、等级、拒收去向、地域或数据时效发生实质变化 |

## 11. 数据来源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `umn-forcing-chicories-2023` | extension_guidance | University of Minnesota Extension (2023), “Forcing Chicories,” https://blog-fruit-vegetable-ipm.extension.umn.edu/2023/01/forcing-chicories-opportunity-for.html | 建植、起挖、修整及强制栽培区分 |
| `ucd-witloof-chicory` | official_guidance | USDA/UC Davis, “Chicory (Belgian Endive or Witloof Chicory),” https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo87416/pdf/GOVPUB-A-PURL-gpo87416.pdf | 根/芽球身份及强制栽培排除 |
| `omafra-root-chicory` | official_guidance | Ontario Ministry of Agriculture, “Specialty Cropportunities — Root Chicory,” https://www.omafra.gov.on.ca/CropOp/en/indus_misc/pharm/chic.html | 田间、灌溉与养分背景 |
| `usu-chicory-garden` | extension_guidance | Utah State University Extension, “How to Grow Chicory in Your Garden,” https://extension.usu.edu/yardandgarden/research/chicory-in-the-garden | 灌溉与作物管理背景 |
| `cwalina-root-chicory-n-2022` | literature | Cwalina-Ambroziak et al. (2022), doi:10.24326/asphc.2022.5.8 | 根产量校验范围与氮响应差异 |
| `ipcc-2019-refinement-volume4` | method_factor | IPCC 2019 Refinement, Volume 4 | 受管土壤排放方法身份 |
| `iso-14044-2006` | standard | ISO 14044:2006 | 分配层级 |
| `mass-balance-identity` | method_factor | Conservation of mass on declared states | 转移、平衡与共享归属 |
| `reference-flow-identity` | method_factor | PCR reference-flow normalization identity | 精确参考产出 |
