---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.taro
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 农场门芋头鲜球茎与子球茎

## 1. 范围与适用性

本 PCR 适用于农场门交付的新鲜、未加工 *Colocasia esculenta* 芋头主球茎与子球茎，包括营养繁殖材料定植、旱作或水作田间管理、挖收、田间修整、可选清洗和分级。范围不包括 *Xanthosoma* 亚乎地/新芋、其他天南星科块茎、以叶片为参考产品的生产、芋头加工、愈伤、长期贮藏以及下游包装或运输。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.taro |
| classification_refs | CPC 3.0: 01550 Taro |
| covered_products | 新鲜食用 *Colocasia esculenta* 主球茎和子球茎，包括已声明的 dasheen 与 eddoe 市场类型 |
| excluded_products | *Xanthosoma* 亚乎地/新芋；巨型芋；以芋叶为参考产品；煮制、干燥、磨粉、去皮或其他加工芋头 |
| representative_product | 符合所声明等级的完整、健全芋头鲜球茎或子球茎 |
| production_route | 受管理的旱作或水作栽培、挖收、田间整理与分级；每个数据集声明水分管理路线 |
| market_state | 农场门散装新鲜未加工农产品，并声明清洗状态和附土容许度 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门验收的完整芋头鲜球茎或子球茎 |
| How much | 净鲜重 1,000 kg |
| How well | 声明品种/类型、主球茎/子球茎类别、等级、损伤容许度、附土容许度和清洗状态 |
| How long or cycle | 一个已识别作物周期及其关联收获批与农场门批次 |
| reference_flow_link | `taro_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Taro `e510909a-6352-44e7-b616-336d7fd10549` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | *Colocasia esculenta* 身份；品种/类型；主球茎/子球茎类别；旱作/水作路线；鲜重基准；等级；清洗状态；农场门地点；作物周期和批次标识 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `net_fresh_mass` | 芋头物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用相应节点的净鲜重，排除容器和松散土壤，并报告清洗状态。 |
| `field_area` | 生产和收获 | Area | ha | 分别记录种植面积和收获面积，并在归一化前关联田块、收获批与农场门批。 |
| `nutrient_basis` | 养分 | Mass of nutrient | kg N, kg P2O5, kg K2O | 记录肥料产品质量和养分含量，不得混用元素态与氧化物计量口径。 |
| `water_route` | 水 | Volume | m3 | 将管理供水与有效降雨分开，并披露水作淹水期。 |
| `gate_balance` | 整理 | Mass | kg | 核对接收量 = 验收量 + 降级量 + 拒收量 + 杂物 + 已解释差额。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已整备土地以及可供定植、已声明健康状态的球茎、子球茎、吸芽、带顶部种茎或驯化苗。 |
| starting_condition_role | 作物周期从繁殖材料和管理投入进入田块时开始；外购投入关联上游数据集。 |
| product_classification_scope | 完整新鲜 *Colocasia esculenta* 主球茎和子球茎，不依赖分类代码。 |
| recursive_input_rule | 自留芋头繁殖材料仅从已识别前一批次或苗圃转移一次，不创建指向参考产品的自循环。 |
| upstream_dataset_requirement | 将繁殖材料、改良剂、肥料、植保品、燃料、能源和供应水关联至兼容上游数据集，并披露未解析身份。 |
| disclosure | 声明品种/类型、繁殖材料形态与来源、旱作/水作路线、作物周期、收获方式、整理步骤、等级状态、共产品和拒收去向。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `fresh_farm_gate` | 输出边界 | 截止于可在农场门发运的验收完整鲜球茎/子球茎；排除愈伤、长期贮藏、加工、零售包装和下游运输。 | `fao-edible-aroids`; `uf-ifas-root-crops` |
| `route_separation` | 栽培 | 将旱作与水作作为同一受管理生产父节点下的替代路线；无代表性份额记录时不得平均水和田间排放。 | `fao-qdp-taro`; `icar-water-2022` |
| `harvest_handoff` | 挖收 | 区分田间成熟作物与挖收球茎，在整理前记录损伤、未挖收物和残体。 | `fao-edible-aroids` |
| `conditioning_handoff` | 修整和清洗 | 建立整理节点并记录用水、杂物、废水、拒收物和整备后产物；清洗为条件路线。 | `uf-ifas-root-crops` |
| `grade_destinations` | 分级 | 声明验收、可食降级与拒收状态及去向；拒收物不得进入参考输出。 | `fao-edible-aroids` |
| `single_cycle_attribution` | 时间 | 将记录归入一个作物周期；声明农场门边界内无储存跨期。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `field` | 芋头定植与受管理生产 | 必选 | 始终 | 包含旱作/水作路线差异的受管理生物生产与田间成熟作物交接 | 每 ha 作物周期 |
| `harvest` | 主球茎和子球茎挖收 | 必选 | 始终 | 移出食用地下器官并识别残体和损失 | 每 ha 收获田块 |
| `condition` | 初级处理与分级 | 必选 | 始终；清洗投入为条件项 | 修整、可选清洗、分级并交付验收鲜芋 | 每 1,000 kg 验收输出 |

### 过程：芋头定植与受管理生产（`field`）

#### 输入

##### 产品流

###### 营养繁殖材料（`planting_material`）

健康营养繁殖材料在定植时进入受管理田块。

- 选定流：Taro planting material
- 流属性/单位：Mass / kg
- 数量规则：计量种植鲜质量，并分别记录繁殖材料形态与数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 一个作物周期内完成定植的芋田
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_cycle`
- 来源：`tnau-taro-guide`; `fao-qdp-taro`
- 数量范围：区域繁殖材料示例
  - 范围角色：典型范围（`typical_range`）
  - 下限：700
  - 上限：1200
  - 单位：kg/ha
  - 基准：每 ha 一个作物周期内完成定植的繁殖材料鲜质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`tnau-taro-guide`; `tnau-colocasia-lecture`

###### 农业养分与肥料投入（`field_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 一个作物周期内受管理田块
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_cycle`
- 来源：`tnau-taro-guide`; `icar-taro-bulletin`; `fao-qdp-taro`
- 数量范围：施用状态养分产品总质量筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30000
  - 单位：kg product/ha
  - 基准：每 ha 一个作物周期内受管理田块的施用状态产品总质量；养分分析结果另行保留
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`tnau-taro-guide`; `icar-taro-bulletin`; `fao-qdp-taro`

###### 管理灌溉水（`irrigation_water`）

仅在经营者供水时，管理灌溉水才跨越田间边界。

- 选定流：Irrigation water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：计量或计算管理供水量，不含降雨
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 ha 一个作物周期内受管理田块；雨养路线可为零
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_cycle`
- 来源：`icar-water-2022`; `fao-qdp-taro`
- 数量范围：旱作水量预算 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：6280
  - 单位：m3/ha
  - 基准：每 ha 作物周期管理灌溉；引用上限是包含有效降雨的总需水量比较值
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`icar-water-2022`

###### 田间燃料（`field_fuel`）

栽培和水分管理设备使用的燃料进入田间边界。

- 选定流：Field machinery fuel
- 流属性/单位：Volume / L
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：燃料票据或设备小时乘以实测耗用率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 ha 一个作物周期内受管理田块
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_cycle`
- 数量范围：暂定田间燃料筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：300
  - 单位：L/ha
  - 基准：每 ha 一个作物周期内受管理田块的宽泛可替换估计
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 田间成熟芋头作物（`standing_crop`）

受管理生产节点将可收获田间作物交给挖收节点。

- 选定流：Mature standing taro crop
- 流属性/单位：Mass / kg
- 数量规则：收获量加归属该田块的抽样未挖收与损伤质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 一个作物周期内收获田块
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_lot`
- 来源：`fao-edible-aroids`; `icar-water-2022`
- 数量范围：已报告芋头产量情境
  - 范围角色：典型范围（`typical_range`）
  - 下限：4000
  - 上限：21080
  - 单位：kg/ha
  - 基准：引用情境中每 ha 作物周期可收获鲜球茎/子球茎质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-edible-aroids`; `icar-water-2022`

##### 废物流

##### 基本流

###### 土壤直接氧化亚氮（`direct_soil_n2o`）

按氮投入记录和声明方法计算受管理土壤直接 N2O。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg N2O-N
- 数量规则：适用氮投入量乘以选定直接排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：田间周期内每 kg 适用氮投入
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_field_cycle`
- 来源：`ipcc-2019-soils`
- 数量范围：IPCC 汇总 EF1 不确定性区间
  - 范围角色：允许范围（`allowed_range`）
  - 下限：0.002
  - 上限：0.018
  - 单位：kg N2O-N/kg N input
  - 基准：汇总 Tier 1 方法下每 kg 适用氮投入的直接 N2O-N
  - 基准类型：氮投入（`n_input`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`ipcc-2019-soils`

### 过程：主球茎和子球茎挖收（`harvest`）

#### 输入

##### 产品流

###### 接收田间成熟作物（`standing_crop_input`）

挖收节点按相同计量基准接收田块特定成熟作物。

- 选定流：Mature standing taro crop
- 流属性/单位：Mass / kg
- 数量规则：等于关联 `standing_crop` 输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 一个作物周期内收获田块
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_lot`
- 数量范围：田间成熟作物关联范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：4000
  - 上限：21080
  - 单位：kg/ha
  - 基准：每 ha 作物周期关联鲜球茎/子球茎质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-edible-aroids`; `icar-water-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 挖收鲜球茎和子球茎（`harvested_corms`）

挖收鲜球茎和子球茎离开收获节点进入农场门整理。

- 选定流：Lifted fresh taro corms and cormels
- 流属性/单位：Mass / kg
- 数量规则：修整或清洗前校准计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 ha 收获田块
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot`
- 来源：`fao-edible-aroids`
- 数量范围：已报告鲜芋收获情境
  - 范围角色：典型范围（`typical_range`）
  - 下限：4000
  - 上限：21080
  - 单位：kg/ha
  - 基准：每 ha 收获田块挖收鲜球茎/子球茎质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-edible-aroids`; `icar-water-2022`

##### 废物流

###### 田间残体与收获损失（`harvest_loss`）

附带植物材料以及未挖收或损伤球茎组织与有意输出分开记录。

- 选定流：Taro residues and harvest loss
- 流属性/单位：Mass / kg
- 数量规则：按去向计量或抽样叶、叶柄、根和不可销售/未挖收球茎组织
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 田间成熟球茎/子球茎质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_lot`
- 来源：`fao-edible-aroids`
- 数量范围：暂定残体与损失筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg/t
  - 基准：每 1,000 kg 田间成熟球茎/子球茎的湿残体与收获损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：田间整理与分级（`condition`）

#### 输入

##### 产品流

###### 接收挖收芋头（`harvested_corms_input`）

整理节点在修整或分级前接收并称量每个关联收获批。

- 选定流：Lifted fresh taro corms and cormels
- 流属性/单位：Mass / kg
- 数量规则：与收获批关联的校准接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 农场门验收芋头
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_lot`
- 数量范围：暂定接收质量平衡筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1400
  - 单位：kg/t
  - 基准：每 1,000 kg 验收输出对应的挖收鲜芋接收量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗水（`wash_water`）

仅在声明整理路线包含清洗时纳入清洗水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：计量清洗水；干刷或未清洗路线为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 农场门验收芋头
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_lot`
- 数量范围：暂定清洗水筛查
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：3000
  - 单位：kg/t
  - 基准：每 1,000 kg 验收输出的清洗水；未启用清洗时为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门验收芋头（`taro_gate_output`）

分级分离后的验收完整鲜芋为有意输出和参考产品。

- 选定流：Taro `e510909a-6352-44e7-b616-336d7fd10549`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：验收芋头净鲜重固定参考数量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 农场门验收芋头
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：参考流恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1000
  - 上限：1000
  - 单位：kg/t
  - 基准：每 1,000 kg 参考输出的验收鲜芋
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 可食降级芋头（`downgraded_taro`）

可食低等级芋头作为单独有意输出，通过声明的非参考市场去向离开。

- 选定流：Downgraded fresh taro
- 流属性/单位：Mass / kg
- 数量规则：按去向计量降级鲜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收挖收芋头
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_lot`
- 数量范围：暂定降级筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/t
  - 基准：每 1,000 kg 接收挖收芋头的可食降级量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 整理拒收物与杂物（`conditioning_rejects`）

拒收球茎、附土和修整杂物通过声明的退回、回收或处置路径离开。

- 选定流：Rejected taro, removed soil and trimming debris
- 流属性/单位：Mass / kg
- 数量规则：按原因和去向计量分离质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 接收挖收芋头
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_lot`
- 来源：`fao-edible-aroids`
- 数量范围：暂定拒收与杂物筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：300
  - 单位：kg/t
  - 基准：每 1,000 kg 接收挖收芋头的拒收芋头、土壤和修整杂物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗废水（`wash_wastewater`）

仅在清洗发生时产生废水，并与供应水核对。

- 选定流：Taro washing wastewater
- 流属性/单位：Mass / kg
- 数量规则：计量排放量或水量平衡；未清洗时为零
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 农场门验收芋头
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_lot`
- 数量范围：暂定废水筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg/t
  - 基准：每 1,000 kg 验收输出的废水；未启用清洗时为零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `subdivide_routes` | 旱作和水作生产 | 在分配前细分水分管理路线，不得掩盖不同淹水、灌溉或排放特征。 | `iso-14044` |
| `intended_outputs` | 销售叶片、繁殖材料或其他有意输出 | 逐一记录身份和去向；优先细分，否则采用有文件支持的因果物理关系，或同期农场门经济份额并作敏感性分析。 | `iso-14044` |
| `grade_outputs` | 验收与可食降级芋头 | 分别保留质量、等级、去向和收入；在可行细分后再分配共享负荷。 | `iso-14044` |
| `reject_routing` | 拒收或退回材料 | 在声明边界退出前保留先前负荷；退回上游受管理田块时明确关联回路，否则记录回收或处置，不采用未经验证的替代信用。 | `iso-14044` |

## 8. 前景数据采集、计算与质量规则

范围是来源情境示例或宽泛暂定 QA 筛查；交换量由前景记录决定。未启用清洗或灌溉时，相应范围不施加用量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle` | `field` | 定植、养分、水、燃料和排放 | 田间台账、票据、仪表、方法工作表 | field_id, cycle_id, route, area_ha, propagule_type, propagule_kg, input_kg, nutrient_fraction, water_m3, rainfall_mm, flooding_days, fuel_L, N_input_kg, emission_factor | 核对日期化施用、票据和仪表，保留路线和养分口径 | mixed | 每次作业 | 完整作物周期 | 每田块/路线 | 按田块周期与路线求和；养分和排放仅计算一次 | 票据、仪表、作业日志、因子引用 |
| `cp_harvest_lot` | `harvest` | 田间成熟作物、挖收产物、残体和损失 | 收获票据和抽样地块 | field_id, cycle_id, lot_id, area_ha, lifted_kg, unlifted_kg, damaged_kg, residue_kg | 校准秤与代表性地块 | kg, ha | 每次收获 | 周期内全部收获 | 每田块/批次 | 农场门关联前核对田间成熟、挖收和损失状态 | 校准和抽样设计 |
| `cp_conditioning_lot` | `condition` | 接收、水、等级和拒收 | 接收、用水、分级和发运票据 | lot_id, harvest_lot, received_kg, water_kg, accepted_kg, downgraded_kg, rejected_kg, wastewater_kg, debris_kg, destination | 校准秤和水表；带时间戳等级记录 | kg | 每批 | 接收到发运 | 每农场门批次 | 核对全部输入/输出状态；仅聚合相同等级/路线 | 校准、票据、拒收原因、去向 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_normalization` | 全部交换 | 每 1,000 kg 参考交换 = 已分配周期或批次交换量 / 验收鲜质量 × 1,000。 | 关联周期、批次、验收质量和分配份额 | 参考归一化交换 | `mass-balance-identity` |
| `nutrient_conversion` | 肥料养分 | 养分 kg = 产品 kg × 声明养分分数，保留 N、P2O5 与 K2O 口径。 | 票据、分析和施用记录 | 每周期养分 kg |  |
| `direct_n2o` | 受管理土壤 | N2O-N = 适用 N × 所选 EF1；使用 N2O 质量流时 N2O = N2O-N × 44/28。 | 氮、路线和因子 | kg N2O-N 与 N2O | `ipcc-2019-soils` |
| `harvest_balance` | 收获 | 田间成熟球茎质量 = 挖收量 + 抽样未挖收和损伤量；披露抽样不确定性。 | 田间与收获记录 | 田间成熟量和损失 | `mass-balance-identity` |
| `gate_reconciliation` | 整理 | 差额 = 接收 − 验收 − 降级 − 拒收/杂物；废水另与清洗供水核对。 | 整理记录 | 批次差额 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `botanical_identity` | 参考产品 | 确认 *Colocasia esculenta*，并与 *Xanthosoma* 及其他天南星科作物区分。 | 品种/供应商记录或检查 |
| `route_identity` | 田间 | 声明旱作或水作路线，并分别记录淹水日数、灌溉和降雨。 | 田间与用水记录 |
| `lot_traceability` | 产品流 | 通过全部等级和拒收状态关联田块、周期、收获批和整理批。 | 关联票据 |
| `mass_completeness` | 收获/整理 | 解释差额，并量化损失、杂物和拒收量及去向。 | 秤量与抽样证据 |
| `range_context` | 范围 | 保留来源地理与技术情境；范围仅用于 QA，并以经审查证据替换暂定估计。 | QA 工作表和来源复核 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference_identity` | 参考流 | 要求已核实通用 Taro 产品流、Mass 和 kg 以及新鲜农场门状态；拒绝地区品牌流或加工产品替代。 |  |
| `route_validation` | 田间 | 每个田块周期声明旱作或水作路线，或提供有文件支持的份额；按路线校验水与排放处理。 | `fao-qdp-taro`; `icar-water-2022` |
| `range_validation` | 全部流卡 | 检查角色、界限、单位、分母、基准类型、证据和来源；暂定范围仅为可替换筛查。 |  |
| `harvest_validation` | 挖收 | 核对田间成熟作物、挖收球茎、损失与残体，并要求各状态有去向。 | `fao-edible-aroids` |
| `grade_validation` | 整理 | 核对接收、验收、降级、拒收/杂物与差额；拒收物不得计入验收输出。 | `mass-balance-identity` |
| `coproduct_validation` | 非参考有意输出 | 对销售叶片、繁殖材料或其他输出要求身份、质量、去向和分配方法。 | `iso-14044` |
| `reject_path_validation` | 降级/拒收材料 | 将降级、退回、回收或处置路径关联至产生节点且不得重复计入信用。 | `iso-14044` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门完整芋头鲜球茎/子球茎前景生产数据集 |
| downstream_use | 经审查后作为过程或生命周期模型组装中的 `secondary_dataset`、`background_dataset` |
| allowed_use | 已声明 *Colocasia esculenta* 身份、地理、作物周期、旱作/水作路线、等级和整理状态 |
| excluded_use | 其他天南星科作物；以叶片为参考产品；加工芋头；愈伤、长期贮藏、零售包装或未声明路线 |
| required_metadata | 植物学身份、品种/类型、主球茎/子球茎类别、周期标识、繁殖材料来源、路线、日期、清洗状态、等级、验收质量、共产品和分配 |
| required_quality_disclosure | 计量覆盖、水量平衡、养分口径、排放方法、质量平衡、拒收路径、暂定范围、抽样与分配不确定性 |
| update_trigger | 品种/类型、水分路线、繁殖体系、收获/整理技术、等级、共产品处理、排放方法或证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-edible-aroids` | `official_guidance` | https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Edible_aroids.pdf | 身份、生育期、区域产量、挖收与处理 |
| `fao-qdp-taro` | `official_guidance` | https://www.fao.org/4/i1195e/i1195e00.pdf | 繁殖材料、田间管理、养分与灌溉 |
| `tnau-taro-guide` | `extension_guidance` | https://www.agritech.tnau.ac.in/pdf/HORTICULTURE.pdf | 区域种植、改良剂与肥料示例 |
| `tnau-colocasia-lecture` | `extension_guidance` | https://eagri.org/eagri50/HORT281/lec25.html | 区域繁殖材料数量 |
| `icar-taro-bulletin` | `handbook` | https://www.ctcri.org/public/publications/2025-01/3.taro_.pdf | 区域养分与改良剂示例 |
| `icar-water-2022` | `literature` | https://agris.fao.org/search/en/records/67598e52c7a957febdfc0df2 | 旱作需水量与子球茎产量 |
| `uf-ifas-root-crops` | `extension_guidance` | https://ask.ifas.ufl.edu/publication/CV300 | 路线身份、挖收、清洗与分级 |
| `ipcc-2019-soils` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 受管理土壤 N2O 方法与 EF1 范围 |
| `iso-14044` | `standard` | ISO 14044:2006, https://www.iso.org/standard/38498.html | 分配层级 |
| `mass-balance-identity` | `method_factor` | 关联前景节点的质量守恒 | 归一化与核对 |
