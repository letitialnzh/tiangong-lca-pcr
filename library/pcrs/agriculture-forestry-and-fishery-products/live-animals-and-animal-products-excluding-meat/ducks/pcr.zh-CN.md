---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.ducks
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 鸭

## 1. 范围与适用性

本 PCR 依据 CPC 3.0 说明涵盖 *Anas* 属（主要为 *A. platyrhynchos*）的家鸭活体，包括孵化场交付的活鸭雏和养殖场交付的较大活鸭。非 *Anas* 禽类没有独立分类证据时不自动纳入本细类。每个前景包只选择一个最终交付点。参考量为实测活重，必须披露只数、年龄/类别、品种/用途及交付点。排除屠宰、肉类、加工蛋、屠宰后羽毛及下游运输。自营种鸭、孵化和育成阶段纳入清单；采购的前序产品仅承载一次上游负荷。鱼/稻/湿地综合养殖属于条件性路线，不是鸭生产的普遍路线。来源：`un-cpc-3-2025`、`fao-small-poultry-2004`、`fao-duck-fish-integration`、`fao-leap-poultry-2016`。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.ducks |
| classification_refs | CPC 3.0 02154 鸭 |
| covered_products | 生产者孵化场或养殖场交付的 *Anas* 属家鸭活体（主要为 *A. platyrhynchos*）。 |
| excluded_products | 屠宰鸭、鸭肉、作为参考产品的蛋、屠宰后羽毛及下游配送。 |
| representative_product | 在一个声明的生产者交付点交付的 1 kg 家鸭活体。 |
| production_route | 自营时纳入种鸭/种蛋与孵化、自营时纳入育雏/育成，随后独立捕捉交付。孵化场与养殖场最终路线互斥。鱼/稻/湿地综合管理是受控生物生产主体的条件性变化路线。 |
| market_state | 声明年龄/类别及交付点的活体、未加工鸭。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 在一个生产者交付点、声明年龄/类别的家鸭活体。 |
| How much | 1 kg 实测活重，另记录实测只数与 kg/只。 |
| How well | 活体、未加工；售出活禽产出不含死亡鸭。 |
| How long or cycle | 实际孵化或育成批次，以及归属的种鸭期间。 |
| reference_flow_link | `live_duck_final` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 声明生产者交付点的家鸭活体；宽口径质量参考 UUID 未解析 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | *Anas* 属物种身份；品种/用途；年龄/类别；只数；实测活重；孵化场或养殖场交付点；地点；生产期间；综合养殖状态 |

平台现有以只计数的大规模生态养殖场鸭流不匹配此以质量计量、涵盖两个交付点的参考流。最终数据集须另行核实具体参考身份。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `duck_live_mass` | 最终交付 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在生产者交付前称量活禽批次；排除死亡鸭和包装。 |
| `duck_count_conversion` | 计数记录 | 质量与只数 | kg; head | 用实测活禽 kg 除以活禽只数；不得以按只计数的 UUID 替代质量参考。 |
| `feed_basis` | 饲料记录 | 原样质量与含水状态 | kg | 保留饲料状态并按一致基准汇总。 |
| `carrier_basis` | 能源记录 | 载体特定属性 | 供应单位 | 归一化前保留实际载体、单位及有据可查的换算。 |
| `inventory_reference_normalization` | 所有清单行 | 实际流属性 | 每参考流的交换单位 | 下方清单和采集汇总字段表示每个声明参考流的最终数量。保留全部原始采集记录、原分母限定信息、路线及期间分层、单位换算和分配要求。对每项流，先依原有规则取得以其自身分子单位表示的可归属数量，再除以同一范围的实测合格参考产出数量，并乘以声明参考数量。不得混合物种、状态、交付门或不相容路线；内部移交及共享负担只计一次。合格产出分母缺失、为零或不可追溯时，属于阻断性数据质量问题。暂定 QA 范围仍使用其明确声明的基准，不能视为换算因子或生产默认值。 这些数量是最终前景数据包的贡献量，不替代阶段定量参考或阶段原生单位过程数据集；阶段记录单独保留。归一化数量 = 可归属原始数量 × 声明参考数量 / 实测合格最终参考产出数量。归一化恰执行一次。 |
| `stage_throughput_linkage` | 阶段记录及最终数据包贡献 | 实际流属性及其原始基准 | 保留原生分子及阶段分母单位 | 保留原始批次、事件、群组、期间及阶段分母与单位。使用实测阶段数量 Q_stage 和有依据的归属关系重建可归属分子 A，再作最终归一化。若报告数量 a_B 对应明确阶段基准 B_stage（例如 1000 kg），则 A = a_B × Q_stage / B_stage。若 r_stage 已是交换单位／阶段单位的单位强度，则改用 A = r_stage × Q_stage，不再次除以 B_stage。可归属原始总量直接使用。最终贡献 = A × 声明参考数量 / 实测合格最终产出。明确换算相容单位，每项归属／分配份额恰应用一次；不得将基准数量下的报告用量或单位强度当成原始总量。阶段移交、损失、拒收、库存、共享服务及分配必须关联同一实际路线、期间和最终产出分层。1000 kg 基准仍明确保留 1000 kg。不得假设单位产率、鲜干质量相同、个体质量相同、剂量质量等价或交付门可互换。关联缺失、单位换算无依据、分母为零或分配不可追溯时，阻断数据包生产。阶段原生数据集保留自身阶段参考；数据包贡献为单独投影。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 首个自营阶段接收的采购或内部种蛋/鸭雏/种鸭，以及饲料、水和能源。 |
| starting_condition_role | 带有上游来源的生物起始投入。 |
| product_classification_scope | CPC 3.0 02154 活鸭；蛋、肉、稻米和鱼均为独立产品。 |
| recursive_input_rule | 采购活鸭仅承载一次前序负荷；内部转移关联生产节点，不再作为外部鸭产品重新导入。 |
| upstream_dataset_requirement | 为采购种蛋/鸭雏、饲料、水、能源、垫料等供应产品附上可追溯的上游数据集。 |
| disclosure | 声明路线、交付点、品种/用途、年龄、只数、质量、期间、饲养/水管理、粪污去向、死亡、独立销售产出及共享/综合经营边界。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `one_final_gate` | 全部路线 | 仅选择一个最终孵化场或养殖场生产者交付；后续育成的内部鸭雏不能同时计为最终售出产出。 | `fao-leap-poultry-2016` |
| `capture_independent` | 最终捕捉 | 将捕捉、称重、装载与生物生产分开，因为该节点确定售出活禽与损失状态及最终交付点。 | `fao-leap-poultry-2016` |
| `integrated_delta` | 鱼/稻/湿地路线 | 只有当前企业证据支持时才纳入变化的水、饲料、粪污途径及独立转出的鱼/稻米。 | `fao-duck-fish-integration` |
| `period_linkage` | 种鸭与育成 | 将产蛋期间、孵化/育成批次、替换与淘汰事件仅一次关联到受益产出。 | `fao-leap-poultry-2016` |

综合养殖路线与普通育成共用受控鸭生产主体，但会改变清单类别（田间/湿地水、觅食、粪污去向以及可能的鱼/稻米交付）、计算边界和产出归属验证。农场记录必须识别各项变化类别。同一企业可并存综合与非综合批次，但每批只选择有证据支持的路线；互斥水/粪污分配不得叠加。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `breeder_flock` | 种鸭群与产蛋 | `conditional` | 仅在自营种鸭与产蛋阶段时纳入；否则采购种蛋或鸭雏承载上游负荷。 | 跨产蛋期的受控生物生产。 | 每个种鸭期及转出的孵化蛋。 |
| `incubation` | 种蛋孵化与鸭雏生产 | `conditional` | 仅在自营孵化时纳入；否则采购鸭雏进入育成。 | 受控孵化生产和活鸭雏交接。 | 每个孵化批次及鸭雏产出。 |
| `duck_rearing` | 育雏与育成 | `conditional` | 养殖场门交付较大活鸭时纳入；直接销售孵化场鸭雏时不纳入。 | 受控生物生产主体，综合养殖为条件性变化路线。 | 每个育成批次及活禽质量。 |
| `live_capture` | 活鸭捕捉、称重与交付 | `required` | 在唯一选定的孵化场或养殖场最终生产者交付点。 | 独立捕捉及计量后的最终交付。 | 每 1 kg 最终活鸭。 |

### 过程：种鸭群与产蛋 (`breeder_flock`)

#### 输入

##### 产品流

###### 种鸭饲料 (`breeder_feed`)

记录归属期间种鸭群实际消耗的饲料类型和原样质量。

分母与范围要求：每个种鸭期及转出种蛋

原始数量及计算要求：领料加期初减期末库存及退回饲料。 原始采集分母类型：process_output。

- 选定流：种鸭饲料；供应商身份未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_inputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 转出种蛋
  - 基准：每个种鸭期及转出种蛋
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 种鸭舍用水 (`breeder_water`)

记录该自营节点供应的饮用和服务用水；具体用水组别由前景用途记录决定。

分母与范围要求：每个种鸭期及转出种蛋

原始数量及计算要求：计量归属该种鸭期的用水。 原始采集分母类型：process_output。

- 选定流：按实际用途区分的种鸭舍供应水
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_inputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 转出种蛋
  - 基准：每个种鸭期及转出种蛋
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 种鸭阶段能源 (`breeder_energy`)

按实际能源载体记录电力和燃料，避免共用表计重复计入。

分母与范围要求：每个种鸭期及转出种蛋

原始数量及计算要求：分载体计量或发票数量。 原始采集分母类型：process_output。

- 选定流：种鸭舍能源载体
- 流属性/单位：载体特定 / 供应单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_inputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：MJ/kg 转出种蛋
  - 基准：每个种鸭期及转出种蛋
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转出孵化种蛋 (`breeder_eggs`)

称重并计数销售或内部送孵的种蛋；内部负荷仅转移一次。

分母与范围要求：每个种鸭产蛋期

原始数量及计算要求：逐批实测种蛋质量和数量。 原始采集分母类型：process_output。

- 选定流：鸭孵化种蛋；UUID 未解析
- 流属性/单位：质量 / kg；另计个数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_outputs`
- 数量范围：质量守恒校验区间
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg/kg 收集蛋质量
  - 基准：每个种鸭产蛋期
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

###### 其他销售的种鸭阶段产出 (`breeder_coproducts`)

仅在食用蛋或淘汰活种鸭独立销售时分别记录其交付点。

分母与范围要求：每个种鸭产蛋期

原始数量及计算要求：计量每项独立转出的产出。 原始采集分母类型：process_output。

- 选定流：销售蛋或淘汰活鸭；具体身份未解析
- 流属性/单位：质量 / kg；另计数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_outputs`
- 数量范围：质量守恒校验区间
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg/kg 对应实测产出
  - 基准：每个种鸭产蛋期
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

###### 独立销售的种鸭粪肥 (`breeder_manure_export`)

仅在种鸭粪肥作为产品独立转出且有销售或交付凭证时记录。

分母与范围要求：每个种鸭产蛋期及转出种蛋

原始数量及计算要求：按种鸭期间称重并记录独立交付。 原始采集分母类型：process_output。

- 选定流：种鸭粪肥产品；具体 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_outputs`
- 数量范围：暂定粪污数量筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 转出种蛋
  - 基准：每个种鸭产蛋期及转出种蛋
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 种鸭死亡与废弃蛋 (`breeder_losses`)

将死亡鸭与不可销售蛋从产品中分出并记录去向。

分母与范围要求：每个种鸭产蛋期

原始数量及计算要求：称重或据实测数量与平均质量计算。 原始采集分母类型：process_output。

- 选定流：生物废物；具体身份未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_outputs`
- 数量范围：质量守恒校验区间
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg/kg 相关实测禽蛋质量
  - 基准：每个种鸭产蛋期
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

###### 未售种鸭粪污 (`breeder_manure_residue`)

记录未作为产品独立转出的种鸭粪污及其处理去向。

分母与范围要求：每个种鸭产蛋期及转出种蛋

原始数量及计算要求：按种鸭期间称重并记录处理去向。 原始采集分母类型：process_output。

- 选定流：种鸭粪污废物；具体 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_outputs`
- 数量范围：暂定粪污数量筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 转出种蛋
  - 基准：每个种鸭产蛋期及转出种蛋
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 受管理粪污向空气排放的生物源甲烷 (`breeder_ch4_air`)

仅用于已识别向空气排放生物源 CH4 的粪污贮存/处理途径；UUID 是身份，不是排放因子。

分母与范围要求：每个种鸭产蛋期及转出种蛋

原始数量及计算要求：依据实测挥发性固体、粪污管理系统与适用 CH4 方法因子计算。 原始采集分母类型：process_output。

- 选定流：生物源甲烷，向空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_manure_emissions`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定物质专属排放筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg 物质/kg 转出种蛋
  - 基准：每个种鸭产蛋期及转出种蛋
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 受管理粪污向空气排放的氧化亚氮 (`breeder_n2o_air`)

仅用于已识别向空气释放 N2O 的粪污氮途径；不得混用直接与间接途径因子。

分母与范围要求：每个种鸭产蛋期及转出种蛋

原始数量及计算要求：依据实测粪污氮、管理途径与适用 N2O 方法因子计算。 原始采集分母类型：process_output。

- 选定流：氧化亚氮，向空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_manure_emissions`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定物质专属排放筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg 物质/kg 转出种蛋
  - 基准：每个种鸭产蛋期及转出种蛋
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 受管理粪污向空气排放的氨 (`breeder_nh3_air`)

仅用于有独立证据证明的粪污/鸭舍途径 NH3 向空气挥发；不得从 IPCC CH4/N2O 因子推定其数量。

分母与范围要求：每个种鸭产蛋期及转出种蛋

原始数量及计算要求：该途径的实测 NH3，或有独立文件支持的相容因子计算。 原始采集分母类型：process_output。

- 选定流：氨，向空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_breeder_manure_emissions`
- 数量范围：暂定物质专属排放筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg 物质/kg 转出种蛋
  - 基准：每个种鸭产蛋期及转出种蛋
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

### 过程：种蛋孵化与鸭雏生产 (`incubation`)

#### 输入

##### 产品流

###### 进入孵化的种蛋 (`incubation_eggs`)

追踪采购或内部种鸭蛋及其仅计一次的前序负荷。

分母与范围要求：每个孵化批次

原始数量及计算要求：实测批次投入质量和数量。 原始采集分母类型：process_output。

- 选定流：鸭孵化种蛋；UUID 未解析
- 流属性/单位：质量 / kg；另计数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_incubation_batch`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 孵出活鸭雏
  - 基准：每个孵化批次
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 孵化能源 (`incubation_energy`)

按实际载体与批次归属孵化设备能源。

分母与范围要求：每 kg 活鸭雏产出

原始数量及计算要求：批次计量或发票能源量。 原始采集分母类型：process_output。

- 选定流：孵化场能源载体
- 流属性/单位：载体特定 / 供应单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_incubation_batch`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：MJ/kg 活鸭雏
  - 基准：每 kg 活鸭雏产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 孵化场用水 (`incubation_water`)

记录供应的过程与清洁用水；在前景交换数据中拆分实际用途。

分母与范围要求：每 kg 活鸭雏产出

原始数量及计算要求：计量归属孵化批次的水量。 原始采集分母类型：process_output。

- 选定流：孵化场过程用水
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_incubation_batch`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 活鸭雏
  - 基准：每 kg 活鸭雏产出
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 活鸭雏 (`hatched_ducklings`)

称重计数活鸭雏；选择内部转育成或最终孵化场销售，不得同时作为两项最终产出。

分母与范围要求：每个孵化批次

原始数量及计算要求：实测活鸭雏批次质量与数量。 原始采集分母类型：process_output。

- 选定流：孵化场门活鸭雏；UUID 未解析
- 流属性/单位：质量 / kg；另计数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_incubation_batch`
- 数量范围：质量守恒校验区间
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg/kg 全部称重孵化产出
  - 基准：每个孵化批次
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

##### 废物流

###### 未孵蛋与孵化损失 (`hatchery_losses`)

按实际处置流记录未孵蛋、蛋壳和死亡鸭雏。

分母与范围要求：每个孵化批次

原始数量及计算要求：称重或由批次数量和观测质量计算。 原始采集分母类型：process_output。

- 选定流：孵化生物废物；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_incubation_batch`
- 数量范围：质量守恒校验区间
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg/kg 相关称重孵化物料
  - 基准：每个孵化批次
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

##### 基本流

### 过程：育雏与育成 (`duck_rearing`)

#### 输入

##### 产品流

###### 育成初始鸭雏 (`rearing_ducklings`)

记录进入育成的采购或内部活鸭雏，前序负荷只计一次。

分母与范围要求：每个育成批次

原始数量及计算要求：实测初始活禽质量与数量。 原始采集分母类型：process_output。

- 选定流：进入育成的活鸭雏；UUID 未解析
- 流属性/单位：质量 / kg；另计数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing_batch`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg 最终活鸭
  - 基准：每个育成批次
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 育成饲料 (`rearing_feed`)

纳入实际消耗的采购或自产饲料；综合养殖采食不是零负荷。

分母与范围要求：每 kg 最终活鸭

原始数量及计算要求：期初库存加交付减期末库存及退回。 原始采集分母类型：reference_flow。

- 选定流：按类型来源区分的鸭饲料；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing_inputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：50
  - 单位：kg/kg 最终活鸭
  - 基准：每 kg 最终活鸭
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 育成用水 (`rearing_water`)

按实际记录区分饮水、清洁水和综合养殖田间用水；在这些功能确定前暂不指定组别。

分母与范围要求：每 kg 最终活鸭

原始数量及计算要求：计量归属鸭育成的水量。 原始采集分母类型：reference_flow。

- 选定流：按实际用途区分的育成供应水
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing_inputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：kg/kg 最终活鸭
  - 基准：每 kg 最终活鸭
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 育成能源 (`rearing_energy`)

按实际载体记录育雏保温、通风、水泵和设备能源。

分母与范围要求：每 kg 最终活鸭

原始数量及计算要求：按批次计量或分配载体能源。 原始采集分母类型：reference_flow。

- 选定流：育成能源载体
- 流属性/单位：载体特定 / 供应单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing_inputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：1000
  - 单位：MJ/kg 最终活鸭
  - 基准：每 kg 最终活鸭
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 育成活鸭 (`reared_live_ducks`)

计数并称重从生物育成转向捕捉的活鸭。

分母与范围要求：每个育成批次

原始数量及计算要求：实测转向捕捉的活禽质量和只数。 原始采集分母类型：process_output。

- 选定流：交付前的育成活鸭；UUID 未解析
- 流属性/单位：质量 / kg；另计数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing_batch`
- 数量范围：质量守恒校验区间
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg/kg 称重禽类产出
  - 基准：每个育成批次
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

###### 独立转出的育成副产品 (`rearing_coproducts`)

仅在真实综合经营中分别记录有意销售的粪肥、稻米或鱼及其交付点。

分母与范围要求：每个育成批次及副产品交付

原始数量及计算要求：实测每项独立转出的产品。 原始采集分母类型：process_output。

- 选定流：独立转出副产品；具体 UUID 未解析
- 流属性/单位：产品特定 / 实测单位
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`route_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing_outputs`
- 数量范围：质量守恒校验区间
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg/kg 对应实测产出
  - 基准：每个育成批次及副产品交付
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

##### 废物流

###### 死亡鸭与未售粪污 (`rearing_residues`)

按去向分类死亡鸭、垫料和未作为产品有意转出的粪污。

分母与范围要求：每个育成批次

原始数量及计算要求：称重清运物或根据日志和类别实测均质量计算。 原始采集分母类型：process_output。

- 选定流：生物残余物/废物；具体 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_rearing_outputs`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：100
  - 单位：kg/kg 最终活鸭
  - 基准：每个育成批次
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

###### 受管理粪污向空气排放的生物源甲烷 (`rearing_ch4_air`)

仅用于已识别向空气排放生物源 CH4 的粪污贮存/处理途径；UUID 是身份，不是排放因子。

分母与范围要求：每 kg 最终活鸭

原始数量及计算要求：依据实测挥发性固体、粪污管理系统与适用 CH4 方法因子计算。 原始采集分母类型：reference_flow。

- 选定流：生物源甲烷，向空气 `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_emissions`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定物质专属排放筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg 物质/kg 最终活鸭
  - 基准：每 kg 最终活鸭
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 受管理粪污向空气排放的氧化亚氮 (`rearing_n2o_air`)

仅用于已识别向空气释放 N2O 的粪污氮途径；不得混用直接与间接途径因子。

分母与范围要求：每 kg 最终活鸭

原始数量及计算要求：依据实测粪污氮、管理途径与适用 N2O 方法因子计算。 原始采集分母类型：reference_flow。

- 选定流：氧化亚氮，向空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_emissions`
- 来源：`ipcc-livestock-2019`
- 数量范围：暂定物质专属排放筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg 物质/kg 最终活鸭
  - 基准：每 kg 最终活鸭
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 受管理粪污向空气排放的氨 (`rearing_nh3_air`)

仅用于有独立证据证明的粪污/鸭舍途径 NH3 向空气挥发；不得从 IPCC CH4/N2O 因子推定其数量。

分母与范围要求：每 kg 最终活鸭

原始数量及计算要求：该途径的实测 NH3，或有独立文件支持的相容因子计算。 原始采集分母类型：reference_flow。

- 选定流：氨，向空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定：固定（`fixed`）
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_emissions`
- 数量范围：暂定物质专属排放筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg 物质/kg 最终活鸭
  - 基准：每 kg 最终活鸭
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：活鸭捕捉、称重与交付 (`live_capture`)

#### 输入

##### 产品流

###### 待最终捕捉的活鸭 (`capture_ducks`)

只从一个前序节点接收活鸭；内部转移的前序负荷仅计一次。

分母与范围要求：每个最终生产者交付批次

原始数量及计算要求：实测待交付的活禽质量和只数。 原始采集分母类型：process_output。

- 选定流：选定前序交付点的活鸭；UUID 未解析
- 流属性/单位：质量 / kg；另计数
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_capture`
- 数量范围：暂定筛选区间
  - 范围角色：`default_estimate`
  - 下限：0
  - 上限：10
  - 单位：kg/kg 售出活鸭
  - 基准：每个最终生产者交付批次
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 生产者交付点最终活鸭 (`live_duck_final`)

只记录一个选定的孵化场或养殖场活鸭批次；排除死亡鸭和下游运输。

参考产出的原始记录：1 kg 实测最终活鸭；记录只数与交付点。 保留实测合格批次数量及全部必需限定项。下方数量是归一化参考交换，并不表示实际批次只有一个单位。

分母与范围要求：每参考流

- 选定流： 声明生产者交付点的家鸭活体；宽口径质量参考 UUID 未解析
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_capture`
- 数量范围：质量守恒校验区间
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考活鸭
  - 基准：每 1 kg 最终活鸭
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

##### 废物流

###### 捕捉死亡与剔除 (`capture_losses`)

单独记录呈送和最终售出活禽称重之间损失的鸭。

分母与范围要求：每个最终生产者交付批次

原始数量及计算要求：以死亡和剔除日志核对呈送减售出质量。 原始采集分母类型：process_output。

- 选定流：捕捉废物；UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：依 inventory_reference_normalization 与 stage_throughput_linkage，使用已匹配原始记录计算可归属的最终数据包交换量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_live_capture`
- 数量范围：质量守恒校验区间
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：1
  - 单位：kg/kg 呈送活鸭
  - 基准：每个最终生产者交付批次
  - 基准类型：`process_output`
  - 证据类型：`method_formula`
  - 来源：`mass-balance-identity`

##### 基本流

## 7. 分配与副产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_census` | 所有阶段 | 仅在实际转出时列举孵化种蛋、销售食用蛋、淘汰活种鸭、销售鸭雏、销售成年鸭及外运粪肥/稻米/鱼，并记录各自交付。死亡鸭和未售粪污属于残余物或废物，不是副产品。 | `fao-leap-poultry-2016` |
| `allocation_precedence` | 多产出节点 | 优先按产出细分实测活动；不可分的联合产出采用可辩护的物理因果分配，否则按同期经济价值分配并披露期间和敏感性。不得默认给予替代抵扣。 | `fao-leap-poultry-2016` |
| `period_allocation` | 种鸭、孵化、育成 | 将饲料、资产、产出和替换/淘汰事件归属实际期间/批次；跨期负荷依实测服务或有据吞吐量仅分配一次。 | `fao-leap-poultry-2016` |
| `shared_assets` | 鸭舍、孵化器、水泵及表计 | 列出各消费节点与服务期间；按表计或有据时间/吞吐量拆分共享服务，分配份额须与总记录核对且不得重复计入。 | `fao-leap-poultry-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_breeder_inputs` | `breeder_flock` | 饲料、水、能源 | 台账、表计和发票 | 期间；鸭群；饲料类型/库存；水；能源载体；数量 | 将领料与表计归入产蛋期；原始汇总要求：每期仅归属一份实测量。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; kWh; MJ | 每次领料/抄表 | 完整种鸭期 | 种鸭单元 | 每参考流 | 台账、发票、表计；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_breeder_outputs` | `breeder_flock` | 蛋、淘汰鸭、损失与粪污 | 收集/处置台账 | 期间；蛋数量/质量；去向；淘汰鸭；死亡；粪污质量/去向 | 计数称重批次及粪污转出/处置物；原始汇总要求：按交付区分产品与废物。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; 只 | 每批 | 完整种鸭期 | 种鸭单元 | 每参考流 | 秤、销售与处置凭证；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_breeder_manure_emissions` | `breeder_flock` | 种鸭粪污物质专属排放 | 粪污、氮及 NH3 测量记录 | 种鸭期间；粪污；挥发性固体；氮；鸭舍/贮存途径；CH4/N2O 因子；独立 NH3 测量 | 按实际种鸭粪污系统计算 CH4/N2O；NH3 仅依据独立测量或另有来源的方法报告；原始汇总要求：每份粪污的途径仅归属一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 物质 | 每个种鸭期 | 完整粪污期 | 种鸭单元/粪污节点 | 每参考流 | 分析、因子计算表、NH3 记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_incubation_batch` | `incubation` | 种蛋、服务、鸭雏、损失 | 批次表及表计 | 批次；蛋数量/质量/来源；鸭雏；损失；能源；水 | 按批次关联投入、产出及服务；原始汇总要求：共享服务仅分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; 只; kWh; MJ | 每批 | 完整孵化期 | 孵化场 | 每参考流 | 批次表、秤、表计；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_rearing_batch` | `duck_rearing` | 起始/终末鸭 | 移动/称重台账 | 批次；年龄；只数；起始/终末质量 | 每次交接计数称重；原始汇总要求：核对禽类移动。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; 只 | 每次移动 | 完整育成期 | 鸭群 | 每参考流 | 秤、登记表；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_rearing_inputs` | `duck_rearing` | 饲料、水、能源 | 台账和表计 | 批次；库存；饲料；水；载体；表计 | 核对实际消耗；原始汇总要求：共享服务仅分配一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; kWh; MJ | 每次交付/抄表 | 完整育成期 | 鸭群与共享设施 | 每参考流 | 发票、表计；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_rearing_outputs` | `duck_rearing` | 副产品、粪污、死亡 | 销售/清运记录 | 批次；产品；质量；去向；死亡 | 称重产出或废物清运；原始汇总要求：按实际交付分类。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; 只 | 每次移动 | 完整育成期 | 鸭群/综合经营单元 | 每参考流 | 销售、清运凭证；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_manure_emissions` | `duck_rearing` | 育成粪污物质专属排放 | 粪污、氮及 NH3 测量记录 | 批次；粪污；挥发性固体；氮；鸭舍/贮存途径；CH4/N2O 因子；独立 NH3 测量 | 按实际育成粪污系统计算 CH4/N2O；NH3 仅依据独立测量或另有来源的方法报告；原始汇总要求：每份粪污的途径仅归属一次。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg 物质 | 每批 | 粪污管理期间 | 鸭群/粪污节点 | 每参考流 | 分析、因子计算表、NH3 记录；可追溯分子、合格参考产出分母及归一化计算表 |
| `cp_live_capture` | `live_capture` | 呈送/售出/损失鸭 | 交付点称重表 | 批次；交付点；年龄；只数；呈送/售出/损失质量 | 在最终交付点称重计数；原始汇总要求：将售出活鸭归一到 1 kg。执行原有路线、期间、换算及分配规则；保留原始总量及同一范围的实测合格参考产出分母。最终归一化恰执行一次，不得对已归一化数量再次除以分母。 | kg; 只 | 每批 | 捕捉至交付 | 选定交付点 | 每参考流 | 秤、交付单；可追溯分子、合格参考产出分母及归一化计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `feed_consumed` | 种鸭/育成饲料 | 期初库存 + 交付 − 期末库存 − 退回。 | 库存；交付；退回 | 消耗 kg | `mass-balance-identity` |
| `count_to_mass` | 活禽 | 实测批次活重 kg ÷ 实测活禽只数；不采用统一 kg/只。 | 质量；只数 | 实测 kg/只 | `mass-balance-identity` |
| `capture_balance` | 最终交付 | 呈送活重 = 售出活重 + 已核算损失，允许记录的称重不确定度。 | 秤；清运记录 | 最终活鸭及损失 kg | `mass-balance-identity` |
| `manure_species` | 种鸭和育成直接排放 | 按实际粪污途径与适当方法分别计算 CH4 和 N2O；流身份不是排放因子。 | 粪污；挥发性固体；氮；途径；因子 | CH4 和 N2O 分别计 kg | `ipcc-livestock-2019` |
| `nh3_observation` | 种鸭和育成 NH3 | 使用独立实测 NH3 或另有文件支持的相容因子；不得从 CH4/N2O 因子推算 NH3。 | NH3 测量或独立因子 | kg NH3 |  |
| `shared_sum` | 共享资产 | 节点-期间分配量之和在已记录的表计不确定度内等于实测总量。 | 表计；受益方使用量 | 已分配服务量 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 最终活鸭批次 | 记录 *Anas* 属物种、品种/用途、年龄/类别、活禽只数、实测质量和准确交付点。 | 交付记录和称重单 |
| `dq_route` | 全部节点 | 说明自营阶段、采购或内部前序产品及综合养殖状态。 | 企业流程图与供应商关联 |
| `dq_completeness` | 投入、损失、产出 | 在完整期间核对库存、表计、死亡、粪污和全部产出去向；披露缺口。 | 台账、发票、凭证 |
| `dq_attribution` | 共享与多产出 | 归档因果/经济价值、服务期间、分配份额和敏感性。 | 分配计算表 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_gate` | 参考流 | 选择一个生产者交付点和实测售出活重；按只计数的生态养殖场 UUID 不得替代宽口径 1 kg 参考流。 | `un-cpc-3-2025` |
| `validate_balance` | 全部节点 | 核对种蛋、鸭、饲料、捕捉及内部转移记录；禽类或上游负荷不得重复出现。 | `mass-balance-identity` |
| `validate_outputs` | 联合产出 | 核实蛋、淘汰鸭、粪污、鱼或稻米是否独立交付；否则维持内部、残余物或废物分类。 | `fao-leap-poultry-2016` |
| `validate_periods` | 跨期 | 将替换/淘汰和每个种鸭/育成期间仅一次关联到受益批次。 | `fao-leap-poultry-2016` |
| `validate_shared` | 共享设施 | 列出全部受益方和期间；分配份额须与记录服务总量一致且不得重复。 | `fao-leap-poultry-2016` |
| `validate_integrated` | 综合路线 | 水/饲料/粪污途径变化或鱼/稻米副产品入模前必须取得实际农场证据。 | `fao-duck-fish-integration` |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 一个孵化场或养殖场交付活鸭批次的前景包。 |
| downstream_use | 审核后可作为 `secondary_dataset` 或 `background_dataset`，并支持 process/lifecyclemodel 投影。 |
| allowed_use | 已声明且含实测质量、只数、年龄、期间、投入、损失和共同产出的活鸭路线。 |
| excluded_use | 鸭肉/屠宰、蛋参考产品、笼统家禽、未声明交付点或普遍综合养殖假设。 |
| required_metadata | 交付点、地点、品种/用途、年龄/类别、只数/质量、路线、期间、饲养/水管理、上游关联和已核实具体流身份。 |
| required_quality_disclosure | 饲料/水/能源覆盖、死亡、粪污途径、物质专属排放、共享分配、副产物处理及未解析证据。 |
| update_trigger | 路线/交付点、产品用途、综合边界、粪污系统、分配方法或已核实流身份发生变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 活鸭分类边界。 |
| `fao-small-poultry-2004` | `official_guidance` | https://www.fao.org/4/y5169e/y5169e03.htm | 家禽与鸭路线背景。 |
| `fao-duck-fish-integration` | `official_guidance` | https://www.fao.org/fishery/static/FAO_Training/FAO_Training/General/x6709e/x6709e07.htm | 条件性鸭鱼综合养殖路线。 |
| `fao-leap-poultry-2016` | `official_guidance` | https://openknowledge.fao.org/handle/20.500.14283/i6421en | 家禽 LCA 边界、分配与质量。 |
| `ipcc-livestock-2019` | `method_factor` | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf | 畜禽/粪污排放方法。 |
| `mass-balance-identity` | `method_factor` | 实测质量/数量/服务总量守恒 | QA 与计算恒等式，并非鸭经验因子。 |
