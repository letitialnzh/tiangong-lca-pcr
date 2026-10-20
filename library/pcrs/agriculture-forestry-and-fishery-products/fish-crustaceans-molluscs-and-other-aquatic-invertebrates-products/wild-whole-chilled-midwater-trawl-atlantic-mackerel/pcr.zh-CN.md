---
pcr_id: pcr.wild-whole-chilled-midwater-trawl-atlantic-mackerel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 野生单船中层拖网整条冷藏大西洋鲭鱼

## 1. 范围与适用性

本 PCR 覆盖美国西北大西洋 Scomber scombrus 单船中层拖网的选定路线，产品为在首个捕捞者实物接收者处交付的整条未去内脏、从未冻结冷藏鱼。本规则用于前景采集及下游投影，不构成法规、食品安全或种群状态合规证明。分类叶节点覆盖范围大于本路线。

NOAA 支持物种、地理渔业及中层拖网捕捞；Seafish 支持单船中层拖网机制、偶捕及可能触底；Torry 第 66 号说明作为历史英国技术指导支持整条未去内脏处理及冰或冷却海水机制，不能证明当前美国路线比例或数值保藏限值。必须提供实际路线、保藏配置及接收者证据。排除双船或底拖网、围网、手钓、其他物种、养殖、去内脏、去头、冻结、熟制及加工保藏参考产品。不默认独立普遍清洗或初级加工工序。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.wild-whole-chilled-midwater-trawl-atlantic-mackerel |
| classification_refs | CPC 3.0 04261 |
| covered_products | Scomber scombrus；美国西北大西洋单船中层拖网选定整条未去内脏从未冻结冷藏批次 |
| excluded_products | 其他物种、地理或路线；双船或底拖网；围网；手钓；养殖；活体、去内脏、去头、冻结、熟制或进一步加工参考产品 |
| representative_product | 由指明首个实物接收者验收的整条未去内脏冷藏大西洋鲭鱼 |
| production_route | 单船中层拖网 → 整鱼分选 → 实际冰或冷却海水冷却及暂存 → 条件性呈现或散装绕行 → 首次实物接收 |
| market_state | 生鲜整条未去内脏从未冻结冷藏；披露实际散装或箱筐呈现 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 首个捕捞者实物接收者处验收的整条未去内脏从未冻结冷藏 Scomber scombrus 净质量 |
| How much | 1 kg；A 为同一选定批次的正值验收鱼净质量 |
| How well | 物种、整条未去内脏从未冻结冷藏状态及接收者验收记录；声明实际等级、保藏及包装，不编造温度或安全标准 |
| How long or cycle | 航次、网次、批次日期及报告期间；离港、无收获搜寻或拖曳、处理、清洁、暂存、卸货及接收者验收；资产安装、更换及退役期间 |
| reference_flow_link | `accepted_mackerel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 首个捕捞者实物接收者验收的整条未去内脏从未冻结冷藏大西洋鲭鱼 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | Scomber scombrus；野生；美国西北大西洋海域及种群；单船中层拖网路线及实际触底与偶捕证据；航次、网次、批次及报告日期；整条未去内脏且带头；生鲜；从未冻结；冷藏；实际冰或冷却海水配置；实际散装或箱筐呈现及可重复使用包装归属；首个捕捞者实物接收者名称、地点、交接及验收时间；验收鱼净质量及游离冰水和皮重排除；等级及去向；预期输出集合、分配及资产服务边界 |

前景数据包必须声明各项限定信息。散装及包装批次保留同一整鱼参考状态；接收者验收是唯一最终输出。内部转移须计量，不固定为一千克。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用接收者验收整鱼净质量 A，包含头与内脏，排除游离冰水及皮重；用经校准秤及有记录的沥水和皮重程序称重，或采用 cp_receipt 中可追溯对应接收者重量。 |
| `native_instances` | 第8节要求补充的具体清单交换 | 实际经核实实例流属性 | 原生单位 | 实例化零、一或多个交换；保留各自原生单位及独立 U_instance。仅凭有记录的密度、单件质量或物理换算转换数量、体积或能源；不得混合不同量纲求和。 |
| `transfer_mass` | 内部鱼转移 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对应交接编号，记录实际鱼净质量、物种、状态、批次、时间及去向；分别核对损失及加入量。生态资源移除及弃捕死亡是独立指标，不是鱼体等质量恒等式。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指明西北大西洋捕捞海域的野生种群；离港时已配备船舶及实际燃料、渔具、保藏和资产记录 |
| starting_condition_role | 前景捕捞起点；自然种群不是外购养殖鱼投入 |
| product_classification_scope | 选定 Scomber scombrus 路线仅为外部分类型叶节点的较窄部分 |
| recursive_input_rule | 内部鱼转移仅配对，不重复加载捕捞负担；外购同类别鱼须有独立明确上游数据集，且不属于本选定捕捞者路线，除非另行治理 |
| upstream_dataset_requirement | 实际燃料、冰、材料、电力、服务、渔具及资本背景数据集，声明地理、供应商、技术、年份和范围；完整服务与直接组成归属互斥 |
| disclosure | 捕捞及偶发影响；保藏及包装配置；首次实物门；包含失败作业的全部航次和期间；资产寿命、更换、使用节点；输出分配；未解决身份、范围及遗漏活动 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | 捕捞至接收 | 纳入航行、搜寻、拖曳、起网、整鱼分选、实际冷却和暂存、清洁、条件性呈现、卸货及首次实物验收前捕捞者承担的交接。捕捞独立于自然生产及保藏：它将野生鱼移为捕获物状态；不得编造养殖投入或初级加工。 | `noaa-atlantic-mackerel`; `seafish-pelagic-trawl`; `torry-mackerel-handling` |
| boundary_handoffs | sort/chill/pack/receipt | 逐项列明选定产品、其他物种、等级、销售去向、降级销售、拒收物及废物，并记录各自交接。实际散装冷却海水交接时 chilled_mackerel 直接进入 receipt，包装鱼经 pack；配置未知时阻止选择，不得重复最终输出。 | `noaa-atlantic-mackerel`; `seafish-pelagic-trawl`; `torry-mackerel-handling` |
| boundary_burdens | 全部节点及共享资产 | 每项燃料、电力、清洁、制冷剂、船舶、渔具、舱室、泵、岸基资产及服务只设一个归属；列明 capture、sort、chill、pack、receipt 使用者及使用期间。外购完整服务若已含燃料、资本及直接排放，则排除这些组成；否则完整采集组成。已核算燃料、设备及排放的船上发电作为内部转移。 | `accepted-lot-normalization` |
| boundary_impacts | 捕捞及全部实际直接排放 | 记录偶捕及存活死亡去向、海上弃捕、遗失渔具及偶发触底，不推断零生态影响。生物量处置承担实际上游及处理负担，不自动产生生态或替代抵扣。直接水污染物须有实测或建模物质、基准及介质，不规定通用排水因子。 | `noaa-atlantic-mackerel`; `seafish-pelagic-trawl` |

## 6. 过程清单结构

生产模式为航次、网次、批次作业，并按时间记录冷藏及接收批次。节点代表责任划分，不假定严格时间分离：实际分选与冷却可交错进行。追踪交接及负担归属，不编造重复操作。

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `capture` | 单船中层拖网捕捞 | required | 必需；离港、航行、搜寻、拖曳和起网止于捕获物交接；卸鱼仅归 receipt | 野生资源捕获，捕获物交至分选；包含船舶航行 | 每 1 kg 参考流 |
| `sort` | 整鱼捕获物按物种及去向分选 | required | 必需；实际分选可与加冰交错；保留交接时间 | 整条捕获鲭鱼进入选定冷藏批次；区分其他销售状态及拒收物 | 每 1 kg 参考流 |
| `chill` | 整条未去内脏鱼冷却及船上暂存 | required | 必需；实际冰、冷却海水或有记录的组合配置 | 选定整条从未冻结鲭鱼冷却后交至包装呈现或散装接收 | 每 1 kg 参考流 |
| `pack` | 箱或筐包装呈现 | conditional | 条件性；首次实物接收前实际使用箱或筐呈现 | 整条冷藏鱼装箱或呈现，鱼体状态不变；散装路线绕过此节点 | 每 1 kg 参考流 |
| `receipt` | 捕捞者交接及首次实物验收 | required | 必需；首个实物接收者验收整条冷藏鱼 | 卸货、交接及验收，止于指明接收者，早于加工或配送 | 每 1 kg 参考流 |

除最终 A/A 恒等式外，全部 0..U_row 或 0..U_instance 范围均为暂定且证据未解决的包络，不是经验范围、默认数量或硬性校验限值。定稿前须根据实际记录及不确定性取得正的有限上限。汇总卡范围分别适用于每个具体原生单位实例。条件性零须证明活动不存在，不能表示数据缺失。

### 过程：单船中层拖网捕捞 (`capture`)

#### 输入

##### 产品流

###### 供应捕捞船舶的船用柴油 (`capture_fuel`)

记录实际船用柴油组成、供应商与交付门、油舱变化，以及航行、搜寻、拖曳、起网和无收获作业分配燃料；排除由 chill 独立归属的冷藏燃料。

- 选定流：供应捕捞船舶的船用柴油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture 取得每 1 kg 参考流的实际归属 capture_fuel。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_capture`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_capture_fuel
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

不默认独立交换；任何实际跨界须在本节点协议下识别、分类及采集。

##### 基本流

#### 输出

##### 产品流

###### 交至分选的整条未去内脏捕获大西洋鲭鱼 (`caught_mackerel`)

计量由网囊或甲板交至分选的物种特定整条鲭鱼，排除游离海水和冰，保留网次与批次交接；该内部质量须独立于最终验收质量计量。

- 选定流：交至分选的整条未去内脏捕获大西洋鲭鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture 取得每 1 kg 参考流的实际归属 caught_mackerel。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_capture`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_caught_mackerel
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 实际直接化石二氧化碳向大气排放 (`capture_co2`)

由 capture 归属的直接化石燃烧发生时纳入：采用实测燃料组成或有来源因子、氧化假设及燃料记录计算实际化石 CO2，或测量排放；排除已含于外购完整服务或背景记录以及其他节点中的化石 CO2。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定 (`fixed`)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_capture 取得每 1 kg 参考流的实际归属 capture_co2。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_capture`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_capture_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

### 过程：整鱼捕获物按物种及去向分选 (`sort`)

#### 输入

##### 产品流

###### 分选接收的整条捕获大西洋鲭鱼 (`sort_mackerel`)

使用对应 caught_mackerel 交接编号，并独立核查毛重、皮重、海水扣除及物种身份；内部转移不得重复加载上游负担。

- 选定流：分选接收的整条捕获大西洋鲭鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_sort 取得每 1 kg 参考流的实际归属 sort_mackerel。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_sort`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_sort_mackerel
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

不默认独立交换；任何实际跨界须在本节点协议下识别、分类及采集。

##### 基本流

不默认独立交换；任何实际跨界须在本节点协议下识别、分类及采集。

#### 输出

##### 产品流

###### 进入冷却的选定整条未去内脏大西洋鲭鱼 (`selected_mackerel`)

计量交至 chill 的选定整条从未冻结鲭鱼；声明实际质量或去向等级及时间，不引入去内脏、去头或普遍清洗工序。

- 选定流：进入冷却的选定整条未去内脏大西洋鲭鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_sort 取得每 1 kg 参考流的实际归属 selected_mackerel。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_sort`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_selected_mackerel
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 实际直接化石二氧化碳向大气排放 (`sort_co2`)

由 sort 归属的直接化石燃烧发生时纳入：采用实测燃料组成或有来源因子、氧化假设及燃料记录计算实际化石 CO2，或测量排放；排除已含于外购完整服务或背景记录以及其他节点中的化石 CO2。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定 (`fixed`)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_sort 取得每 1 kg 参考流的实际归属 sort_co2。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_sort`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_sort_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

### 过程：整条未去内脏鱼冷却及船上暂存 (`chill`)

#### 输入

##### 产品流

###### 进入冷却的选定整条未去内脏大西洋鲭鱼 (`chill_mackerel`)

按交接编号对应 selected_mackerel，保留实际分选与冷却交错顺序，各项投入只归属一次。

- 选定流：进入冷却的选定整条未去内脏大西洋鲭鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_chill 取得每 1 kg 参考流的实际归属 chill_mackerel。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_chill`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_chill_mackerel
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 为整鱼冷却交付的外购捕捞渔业用冰 (`purchased_ice`)

实际外购冰时纳入；记录供应商、制冰范围及交付质量。使用已归属用水、燃料或电力和设备在船上制冰属于内部转移，不再叠加外购冰背景负担。

- 选定流：冰 `084c628e-9639-41fc-90f1-ee60dd12e9c6`
- 绑定模式：固定 (`fixed`)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_chill 取得每 1 kg 参考流的实际归属 purchased_ice。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_chill`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_purchased_ice
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

不默认独立交换；任何实际跨界须在本节点协议下识别、分类及采集。

##### 基本流

###### 实际冷却海水系统抽取的海水 (`chill_seawater`)

直接抽取海水时纳入：计量补充及更换水量，不将循环流量计为抽水量；指明海洋来源，回流水单独记录。外购水作为 chill_resources 中的技术圈实例记录。

直接计量海水质量；若由计量体积换算，必须使用同温度、盐度条件下有证据的密度并保留原始体积、密度及不确定性。不得将内部循环量再次作为新取水扣除，也不得用处理产品水身份替代天然海水资源。

- 选定流：海水 `172a3db9-6556-11dd-ad8b-0800200c9a66`
- 绑定模式：固定 (`fixed`)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_chill 取得每 1 kg 参考流的实际归属 chill_seawater。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_chill`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_chill_seawater
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

#### 输出

##### 产品流

###### 交至包装呈现或散装交接的整条未去内脏从未冻结冷藏大西洋鲭鱼 (`chilled_mackerel`)

计量整条冷藏鱼，扣除游离冰水。实际箱筐批次进入 pack；散装冷却海水批次以独立交接编号和实测数量绕过 pack 进入 receipt。此为内部输出，不是最终参考交换。

- 选定流：交至包装呈现或散装交接的整条未去内脏从未冻结冷藏大西洋鲭鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_chill 取得每 1 kg 参考流的实际归属 chilled_mackerel。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_chill`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_chilled_mackerel
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 实际直接化石二氧化碳向大气排放 (`chill_co2`)

由 chill 归属的直接化石燃烧发生时纳入：采用实测燃料组成或有来源因子、氧化假设及燃料记录计算实际化石 CO2，或测量排放；排除已含于外购完整服务或背景记录以及其他节点中的化石 CO2。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定 (`fixed`)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_chill 取得每 1 kg 参考流的实际归属 chill_co2。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_chill`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_chill_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

### 过程：箱或筐包装呈现 (`pack`)

#### 输入

##### 产品流

###### 进入包装呈现的整条冷藏大西洋鲭鱼 (`pack_mackerel`)

仅实际包装批次进入；对应 chilled_mackerel 交接，将鱼净质量与包装质量区分。

- 选定流：进入包装呈现的整条冷藏大西洋鲭鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 取得每 1 kg 参考流的实际归属 pack_mackerel。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_pack`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_pack_mackerel
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

不默认独立交换；任何实际跨界须在本节点协议下识别、分类及采集。

##### 基本流

不默认独立交换；任何实际跨界须在本节点协议下识别、分类及采集。

#### 输出

##### 产品流

###### 实际呈现状态下交接的整条未去内脏冷藏大西洋鲭鱼 (`presented_mackerel`)

鱼净质量与包装组成分开；交至 receipt 时指明实际接收者及批次，接收者验收后的配送排除。

- 选定流：实际呈现状态下交接的整条未去内脏冷藏大西洋鲭鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 取得每 1 kg 参考流的实际归属 presented_mackerel。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_pack`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_presented_mackerel
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

###### 实际直接化石二氧化碳向大气排放 (`pack_co2`)

由 pack 归属的直接化石燃烧发生时纳入：采用实测燃料组成或有来源因子、氧化假设及燃料记录计算实际化石 CO2，或测量排放；排除已含于外购完整服务或背景记录以及其他节点中的化石 CO2。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定 (`fixed`)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_pack 取得每 1 kg 参考流的实际归属 pack_co2。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_pack`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_pack_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

### 过程：捕捞者交接及首次实物验收 (`receipt`)

#### 输入

##### 产品流

###### 由散装或包装交接接收的整条冷藏大西洋鲭鱼 (`receipt_mackerel`)

实际散装绕行批次对应 chilled_mackerel，实际包装批次对应 presented_mackerel，同一鱼体不得同时对应两者。纳入卸货、交接及首次实物接收前任何由捕捞者承担的运输。

- 选定流：由散装或包装交接接收的整条冷藏大西洋鲭鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_receipt 取得每 1 kg 参考流的实际归属 receipt_mackerel。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_receipt`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_receipt_mackerel
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

不默认独立交换；任何实际跨界须在本节点协议下识别、分类及采集。

##### 基本流

不默认独立交换；任何实际跨界须在本节点协议下识别、分类及采集。

#### 输出

##### 产品流

###### 首个捕捞者实物接收者验收的整条未去内脏从未冻结冷藏大西洋鲭鱼 (`accepted_mackerel`)

最终参考产品：实际验收整鱼净质量，包含头与内脏，排除游离冰水及皮重；记录去内脏、冻结、批发配送或零售前的首个实物接收者及验收事件。

- 选定流：首个捕捞者实物接收者验收的整条未去内脏从未冻结冷藏大西洋鲭鱼
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_receipt`
- 来源：`accepted-lot-normalization`

- 数量范围：同批次参考归一化恒等式 A/A
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：方法公式 (`method_formula`)
  - 来源：`accepted-lot-normalization`

##### 废物流

##### 基本流

###### 实际直接化石二氧化碳向大气排放 (`receipt_co2`)

由 receipt 归属的直接化石燃烧发生时纳入：采用实测燃料组成或有来源因子、氧化假设及燃料记录计算实际化石 CO2，或测量排放；排除已含于外购完整服务或背景记录以及其他节点中的化石 CO2。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：固定 (`fixed`)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由 cp_receipt 取得每 1 kg 参考流的实际归属 receipt_co2。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_receipt`
- 来源：`accepted-lot-normalization`

- 数量范围：暂定未解决包络；须有实际记录
  - 范围角色：不确定性范围 (`uncertainty_range`)
  - 下限：0
  - 上限：U_receipt_co2
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流 (`reference_flow`)
  - 证据类型：推理估算 (`reasoned_estimate`)

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | 全部输出集合 | 首先细分并直接归属网次、节点、批次特定活动。识别全部预期物种、等级、状态、去向、分流及实物交接，包含共享上游作业的冻结或其他非参考产品；纳入其实测质量，不将其视为参考产品。 | `accepted-lot-normalization` |
| allocation_trip | 剩余不可分航次捕捞负担 | 对剩余联合捕捞或航行作业，采用共同首个分流点的完整留存预期产品相对质量，排除水、冰及皮重后，作为须披露的物理载荷代理。在同批次 A 归一化前应用份额；不得向弃捕分配以抹去负担。声明质量为何代表本航次共享作业，并进行一致物种或等级收入分配敏感性比较；若质量不适合作为因果代理，保留审查阻断项并提供有证据的航次特定替代方法，不得默默选择。 | `accepted-lot-normalization` |
| allocation_assets | 跨节点及期间共享船舶、渔具、冷藏及岸基资产服务 | 以使用节点计量，或发动机、泵运转小时及实测负荷，归属观察到的燃料电力；剩余共享资产服务依据有记录的服务小时、实际使用寿命、更换及终止损失归属。将安装、维修、清洁、闲置及失败航次纳入声明期间池，再向全部预期产出批次分配，不得将每项资产完整负担重复分给每个航次。列明使用节点和期间，证明份额仅一次汇总至池总量；重要时检验负荷或时间替代方案。 | `accepted-lot-normalization` |
| allocation_losses | 拒收、退货、弃捕及包装再用 | 可售降级品及其他预期产品保留上游分配负担，废物不属于预期产品。将拒收、死亡及弃捕管理负担保留在预期生产中，并计实际处理处置，不给予未经证明的避免抵扣。可重复使用包装服务由一个归属者核算制造、实际周转清洁、损失及终末处理，披露返程运输。 | `accepted-lot-normalization` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_capture` | `capture` | 全部实际节点卡及具体实例 | 称重、活动、交接、供应商及排放记录 | 航次、网次、批次；节点、事件及交接编号；时间；报告期间；物种、状态、等级及去向；验收鱼净质量 A 链接；实际交换数量、流属性及原生单位；供应商及交付门；资产服务范围归属；计量、负荷及运转小时；完整服务排除项；物质介质及有因子来源的实测建模排放；拒收、弃捕及存活死亡生物量；不确定性及上限证据；种群海域；渔具网板；离港、搜寻、拖曳、起网及失败航次；油舱期初期末与交付；观察员、偶捕及触底证据；船舶渔具更换和寿命 | 核对经校准称重、计量、日志、交付发票、交接和验收记录；保留实际实例组成及供应商、活动确未发生的证据（未知或漏记不算零）、活动分配及排放方法。各单位分别处理，不自动采用因子或数量默认值。将归属量分至同一验收批次后除以正值验收鱼净质量 A；最终验收鱼输出为 A/A；保留各实例单位。 | kg 鱼；各实际原生单位分别处理 | 每网次、批次、事件；计量区间及资产服务更新 | 全部航次及暂存、清洁、闲置和失败期间；投用、更换及退役 | 实际船舶及 capture 交接场所；指明接收者 | 每 1 kg 参考流 | 秤和计量校准、发票、对应交接、航次观察员日志、资产归属寿命台账、因子来源、核对及不确定性 |
| `cp_sort` | `sort` | 全部实际节点卡及具体实例 | 称重、活动、交接、供应商及排放记录 | 航次、网次、批次；节点、事件及交接编号；时间；报告期间；物种、状态、等级及去向；验收鱼净质量 A 链接；实际交换数量、流属性及原生单位；供应商及交付门；资产服务范围归属；计量、负荷及运转小时；完整服务排除项；物质介质及有因子来源的实测建模排放；拒收、弃捕及存活死亡生物量；不确定性及上限证据 | 核对经校准称重、计量、日志、交付发票、交接和验收记录；保留实际实例组成及供应商、活动确未发生的证据（未知或漏记不算零）、活动分配及排放方法。各单位分别处理，不自动采用因子或数量默认值。将归属量分至同一验收批次后除以正值验收鱼净质量 A；最终验收鱼输出为 A/A；保留各实例单位。 | kg 鱼；各实际原生单位分别处理 | 每网次、批次、事件；计量区间及资产服务更新 | 全部航次及暂存、清洁、闲置和失败期间；投用、更换及退役 | 实际船舶及 sort 交接场所；指明接收者 | 每 1 kg 参考流 | 秤和计量校准、发票、对应交接、航次观察员日志、资产归属寿命台账、因子来源、核对及不确定性 |
| `cp_chill` | `chill` | 全部实际节点卡及具体实例 | 称重、活动、交接、供应商及排放记录 | 航次、网次、批次；节点、事件及交接编号；时间；报告期间；物种、状态、等级及去向；验收鱼净质量 A 链接；实际交换数量、流属性及原生单位；供应商及交付门；资产服务范围归属；计量、负荷及运转小时；完整服务排除项；物质介质及有因子来源的实测建模排放；拒收、弃捕及存活死亡生物量；不确定性及上限证据；实际冰或冷却海水配置；外购或船上制冰；抽水、补充、更换及循环量区分；暂存时间；制冷剂种类与泄漏；废水去向 | 核对经校准称重、计量、日志、交付发票、交接和验收记录；保留实际实例组成及供应商、活动确未发生的证据（未知或漏记不算零）、活动分配及排放方法。各单位分别处理，不自动采用因子或数量默认值。将归属量分至同一验收批次后除以正值验收鱼净质量 A；最终验收鱼输出为 A/A；保留各实例单位。 | kg 鱼；各实际原生单位分别处理 | 每网次、批次、事件；计量区间及资产服务更新 | 全部航次及暂存、清洁、闲置和失败期间；投用、更换及退役 | 实际船舶及 chill 交接场所；指明接收者 | 每 1 kg 参考流 | 秤和计量校准、发票、对应交接、航次观察员日志、资产归属寿命台账、因子来源、核对及不确定性 |
| `cp_pack` | `pack` | 全部实际节点卡及具体实例 | 称重、活动、交接、供应商及排放记录 | 航次、网次、批次；节点、事件及交接编号；时间；报告期间；物种、状态、等级及去向；验收鱼净质量 A 链接；实际交换数量、流属性及原生单位；供应商及交付门；资产服务范围归属；计量、负荷及运转小时；完整服务排除项；物质介质及有因子来源的实测建模排放；拒收、弃捕及存活死亡生物量；不确定性及上限证据；启用或绕行；箱筐内衬组成及皮重；可重复使用存量、周转、清洁及返程归属 | 核对经校准称重、计量、日志、交付发票、交接和验收记录；保留实际实例组成及供应商、活动确未发生的证据（未知或漏记不算零）、活动分配及排放方法。各单位分别处理，不自动采用因子或数量默认值。将归属量分至同一验收批次后除以正值验收鱼净质量 A；最终验收鱼输出为 A/A；保留各实例单位。 | kg 鱼；各实际原生单位分别处理 | 每网次、批次、事件；计量区间及资产服务更新 | 全部航次及暂存、清洁、闲置和失败期间；投用、更换及退役 | 实际船舶及 pack 交接场所；指明接收者 | 每 1 kg 参考流 | 秤和计量校准、发票、对应交接、航次观察员日志、资产归属寿命台账、因子来源、核对及不确定性 |
| `cp_receipt` | `receipt` | 全部实际节点卡及具体实例 | 称重、活动、交接、供应商及排放记录 | 航次、网次、批次；节点、事件及交接编号；时间；报告期间；物种、状态、等级及去向；验收鱼净质量 A 链接；实际交换数量、流属性及原生单位；供应商及交付门；资产服务范围归属；计量、负荷及运转小时；完整服务排除项；物质介质及有因子来源的实测建模排放；拒收、弃捕及存活死亡生物量；不确定性及上限证据；首个实物接收者名称地点；散装或包装交接；经校准毛重、皮重、沥水及验收净质量 A；验收或拒收事件 | 核对经校准称重、计量、日志、交付发票、交接和验收记录；保留实际实例组成及供应商、活动确未发生的证据（未知或漏记不算零）、活动分配及排放方法。各单位分别处理，不自动采用因子或数量默认值。将归属量分至同一验收批次后除以正值验收鱼净质量 A；最终验收鱼输出为 A/A；保留各实例单位。 对 A，按有记录程序排除游离冰水并扣皮重，以经校准秤称量验收整条未去内脏鱼；核实同一批次、物种、状态及首次实物验收记录。 | kg 鱼；各实际原生单位分别处理 | 每网次、批次、事件；计量区间及资产服务更新 | 全部航次及暂存、清洁、闲置和失败期间；投用、更换及退役 | 实际船舶及 receipt 交接场所；指明接收者 | 每 1 kg 参考流 | 秤和计量校准、发票、对应交接、航次观察员日志、资产归属寿命台账、因子来源、核对及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `lot_normalization` | 所有清单行 | 保留未分配物理台账，将实际物料转移量除以同批次正值验收鱼净质量 A。只在单独的归属视图中对真正共享的 LCA 负担应用有证据的分配份额，然后除以 A；不得缩放物种特定的实际鱼体转移量或用分配闭合质量。最终参考输出 A/A = 1 kg。保留各分子原生单位，仅汇总相容实例。 | cp_capture; cp_sort; cp_chill; cp_pack; cp_receipt; A | 每 1 kg 参考流的原生交换数量及单独的未分配物理台账 | `accepted-lot-normalization` |
| `direct_releases` | 全部直接 CO2 及其他排放卡 | 采用实际实测排放，或活动乘以明确因子，因子须匹配物质、介质、燃料组成及单位；记录氧化、减排、泄漏及不确定性。仅对节点归属的直接排放应用 lot_normalization，排除外购完整服务覆盖部分。 | 节点特定协议；实测排放或活动及外部有来源因子 | 每参考流物质介质特定排放 | `accepted-lot-normalization` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 全部交换 | 最终交换发布前核实具体身份、流属性、单位、供应商及门；条件性服务材料排放卡须有实际实例。候选未解决身份不是固定匹配。 | 供应商组成、范围及经核实详细支持记录 |
| `quality_completeness` | 全部节点期间输出记录 | 采用同一验收批次分母；采集每个启用节点及绕行证据、失败闲置作业、等级物种去向、废物处理及资产更换；保留完整服务与组成排除项。 | 交接、输出、资产和归属台账及核对 |
| `quality_quantities` | 全部非参考范围及排放 | 用实际观察或建模边界及不确定性解决 U_row/U_instance；记录因子来源和适用性。定性路线来源不能支持燃料、冰或排放数值范围。不得编造零值、冰比例、保质期、安全阈值或种群状态。 | 采集协议、原始记录、适用因子来源及敏感性 |
| `collect_capture_resources` | `capture`; 输入; 产品流: 实际捕捞材料、资产及原生单位服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：实际渔网、网板、绳索更换、润滑剂、船舶资产份额、清洁投入、岸基服务或外购电力须逐项实例化，保留各自身份、流属性及原生单位。完整服务与组成清单互斥；更换与寿命记录包含非生产期间。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_capture 取得每 1 kg 参考流的实际归属 capture_resources。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_capture`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_capture`; `accepted-lot-normalization` |
| `collect_wild_stock_removal` | `capture`; 输入; 基本流: 按物种及去向记录的实际野生生物量移除 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 依据网次及观察员记录，记录物种、种群或海域、存活状态及死亡估计方法的生态资源移除；鲭鱼及偶捕类群须分别实例化。不得将移除或弃捕死亡等同于验收参考质量，也不得编造通用鱼类 UUID。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_capture 取得每 1 kg 参考流的实际归属 wild_stock_removal。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_capture`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：kg 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_capture`; `accepted-lot-normalization` |
| `collect_capture_other_products` | `capture`; 输出; 产品流: 实际交接的其他留存预期捕获产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 条件性：逐项列明其他物种或非参考鲭鱼去向中拟销售产品、状态及首个下游交接。不得把混合捕获物改称参考鲭鱼；后续分选记录对应同一交接，不得重复记为销售。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_capture 取得每 1 kg 参考流的实际归属 capture_other_products。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_capture`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：kg 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_capture`; `accepted-lot-normalization` |
| `collect_capture_discard_waste` | `capture`; 输出; 废物流: 按去向区分的弃捕生物量及实际捕捞废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 条件性：区分留存送处理废物、按物种及存活状态区分的海上弃捕、遗失渔具及含油废物；资源移除和海上弃捕去向是同一事件的关联生态记录，不是两个独立资源移除交换；记录各自去向及原生数量。海上弃捕不得自动视为基本污染排放或替代抵扣；另行披露偶发触底及保护物种相互作用。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_capture 取得每 1 kg 参考流的实际归属 capture_discard_waste。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_capture`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_capture`; `accepted-lot-normalization` |
| `collect_capture_other_releases` | `capture`; 输出; 基本流: 按物质及接收介质记录的其他实际直接排放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：将 capture 归属的实际燃烧污染物（包含实际生物源 CO2）、制冷剂泄漏、含油排水或清洁及水中污染物逐项实例化；保留物质及形态、质量或原生基准、空气水土环境介质、方法及因子来源。明确排除 capture_co2 中化石 CO2、其他节点及完整服务已覆盖排放；未表征生物量或水不得作为污染物 UUID。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_capture 取得每 1 kg 参考流的实际归属 capture_other_releases。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_capture`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_capture`; `accepted-lot-normalization` |
| `collect_sort_other_catch` | `sort`; 输入; 产品流: 实际进入物种分选的其他留存捕获物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 条件性：仅当其他留存物种或非参考整条鲭鱼实际进入本分选节点时，对应 capture_other_products 交接，按物种、状态、去向及实际质量分别记录。直接交至其他去向的留存产品绕过此输入。对应分选转移不是第二次销售或重复捕捞负担。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得每 1 kg 参考流的实际归属 sort_other_catch。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_sort`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：kg 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`; `accepted-lot-normalization` |
| `collect_sort_resources` | `sort`; 输入; 产品流: 实际节点能源、材料、资产及原生单位服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：将 sort 实际使用的外购电力、直接燃料、润滑剂、清洁材料、设备份额或完整服务逐项实例化，分别声明身份、流属性和原生单位；明确组成或完整服务归属；已计燃料、设备及排放的船上发电作为内部转移。纳入闲置、清洁、失败作业及全部实际使用期间。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_sort 取得每 1 kg 参考流的实际归属 sort_resources。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_sort`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`; `accepted-lot-normalization` |
| `collect_sort_other_products` | `sort`; 输出; 产品流: 分选后的其他预期物种、等级及去向产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 条件性：每个留存预期产品须按物种、整鱼或加工状态、商业去向及交接实例化；降级销售仍为产品，超出本 PCR 的路线止于分流点。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得每 1 kg 参考流的实际归属 sort_other_products。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_sort`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：kg 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`; `accepted-lot-normalization` |
| `collect_sort_rejects` | `sort`; 输出; 废物流: 送至实际废物去向的分选拒收物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 条件性：记录生物量、原因、留存或丢弃状态及处理处置去向；将拒收物、其他产品及选定产品与输入的物种特定质量核对，不强制野生资源移除量等于鱼体质量。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_sort 取得每 1 kg 参考流的实际归属 sort_rejects。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_sort`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_sort_rejects 单位：kg 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`; `accepted-lot-normalization` |
| `collect_sort_other_releases` | `sort`; 输出; 基本流: 按物质及接收介质记录的其他实际直接排放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：将 sort 归属的实际燃烧污染物（包含实际生物源 CO2）、制冷剂泄漏、含油排水或清洁及水中污染物逐项实例化；保留物质及形态、质量或原生基准、空气水土环境介质、方法及因子来源。明确排除 sort_co2 中化石 CO2、其他节点及完整服务已覆盖排放；未表征生物量或水不得作为污染物 UUID。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_sort 取得每 1 kg 参考流的实际归属 sort_other_releases。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_sort`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_sort`; `accepted-lot-normalization` |
| `collect_chill_resources` | `chill`; 输入; 产品流: 实际节点能源、材料、资产及原生单位服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：将 chill 实际使用的外购电力、直接燃料、润滑剂、清洁材料、设备份额或完整服务逐项实例化，分别声明身份、流属性和原生单位；明确组成或完整服务归属；已计燃料、设备及排放的船上发电作为内部转移。纳入闲置、清洁、失败作业及全部实际使用期间。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_chill 取得每 1 kg 参考流的实际归属 chill_resources。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_chill`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_chill`; `accepted-lot-normalization` |
| `collect_chill_diverted_products` | `chill`; 输出; 产品流: 冷却或暂存期间转向的预期鱼产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 条件性：每个实际可售等级或非参考去向须记录物种、鱼体状态及交接，并保留此前负担份额。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_chill 取得每 1 kg 参考流的实际归属 chill_diverted_products。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_chill`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：kg 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_chill`; `accepted-lot-normalization` |
| `collect_chill_waste` | `chill`; 输出; 废物流: 冷却生物量拒收物及送处理水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 条件性：拒收生物量、废冷却海水、融冰水或清洁水仅在实际送往处理处置时，按废物去向及原生数量实例化。直接排放时，载体水仅作为 cp_chill 下水量平衡记录，不产生额外废物交换或处理负担；在 chill_other_releases 中核算实际实测或建模污染物，避免重复。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_chill 取得每 1 kg 参考流的实际归属 chill_waste。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_chill`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_chill`; `accepted-lot-normalization` |
| `collect_chill_other_releases` | `chill`; 输出; 基本流: 按物质及接收介质记录的其他实际直接排放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：将 chill 归属的实际燃烧污染物（包含实际生物源 CO2）、制冷剂泄漏、含油排水或清洁及水中污染物逐项实例化；保留物质及形态、质量或原生基准、空气水土环境介质、方法及因子来源。明确排除 chill_co2 中化石 CO2、其他节点及完整服务已覆盖排放；未表征生物量或水不得作为污染物 UUID。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_chill 取得每 1 kg 参考流的实际归属 chill_other_releases。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_chill`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_chill`; `accepted-lot-normalization` |
| `collect_pack_materials` | `pack`; 输入; 产品流: 实际箱、筐、内衬及呈现材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：按实际材料及其原生单位逐项实例化。区分一次性与可重复使用物品，记录皮重、周转次数、损失、更换、清洁及返程运输归属；不默认箱体材料或重复使用次数。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_pack 取得每 1 kg 参考流的实际归属 pack_materials。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_pack`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_pack`; `accepted-lot-normalization` |
| `collect_pack_resources` | `pack`; 输入; 产品流: 实际节点能源、材料、资产及原生单位服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：将 pack 实际使用的外购电力、直接燃料、润滑剂、清洁材料、设备份额或完整服务逐项实例化，分别声明身份、流属性和原生单位；明确组成或完整服务归属；已计燃料、设备及排放的船上发电作为内部转移。纳入闲置、清洁、失败作业及全部实际使用期间。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_pack 取得每 1 kg 参考流的实际归属 pack_resources。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_pack`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_pack`; `accepted-lot-normalization` |
| `collect_pack_waste` | `pack`; 输出; 废物流: 呈现拒收物及包装废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 条件性：区分鱼类拒收物、破损包装、内衬及清洁废水，各自按去向和原生单位实例化；记录仍在循环中的可重复使用材料，不将每次周转视为新生产。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_pack 取得每 1 kg 参考流的实际归属 pack_waste。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_pack`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_pack`; `accepted-lot-normalization` |
| `collect_pack_other_releases` | `pack`; 输出; 基本流: 按物质及接收介质记录的其他实际直接排放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：将 pack 归属的实际燃烧污染物（包含实际生物源 CO2）、制冷剂泄漏、含油排水或清洁及水中污染物逐项实例化；保留物质及形态、质量或原生基准、空气水土环境介质、方法及因子来源。明确排除 pack_co2 中化石 CO2、其他节点及完整服务已覆盖排放；未表征生物量或水不得作为污染物 UUID。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_pack 取得每 1 kg 参考流的实际归属 pack_other_releases。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_pack`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_pack`; `accepted-lot-normalization` |
| `collect_receipt_resources` | `receipt`; 输入; 产品流: 实际节点能源、材料、资产及原生单位服务 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：将 receipt 实际使用的外购电力、直接燃料、润滑剂、清洁材料、设备份额或完整服务逐项实例化，分别声明身份、流属性和原生单位；明确组成或完整服务归属；已计燃料、设备及排放的船上发电作为内部转移。纳入闲置、清洁、失败作业及全部实际使用期间。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_receipt 取得每 1 kg 参考流的实际归属 receipt_resources。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_receipt`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_receipt`; `accepted-lot-normalization` |
| `collect_receipt_diverted_products` | `receipt`; 输出; 产品流: 首次接收时转向的其他可售产品 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 条件性：逐项列明实际等级、状态、去向交接及验收数量，将非参考预期产品与拒收废物区分。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; 数量规则: 由 cp_receipt 取得每 1 kg 参考流的实际归属 receipt_diverted_products。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_receipt`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：kg 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_receipt`; `accepted-lot-normalization` |
| `collect_receipt_rejects` | `receipt`; 输出; 废物流: 首个接收者生物量及交接废物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 条件性：计量被拒收整鱼、破损包装或废水、原因及去向。拒收或退回鱼体保留其门前负担；验收后的后续退货单独披露，不产生第二个参考产品。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_receipt 取得每 1 kg 参考流的实际归属 receipt_rejects。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_receipt`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_receipt`; `accepted-lot-normalization` |
| `collect_receipt_other_releases` | `receipt`; 输出; 基本流: 按物质及接收介质记录的其他实际直接排放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 采集义务：将 receipt 归属的实际燃烧污染物（包含实际生物源 CO2）、制冷剂泄漏、含油排水或清洁及水中污染物逐项实例化；保留物质及形态、质量或原生基准、空气水土环境介质、方法及因子来源。明确排除 receipt_co2 中化石 CO2、其他节点及完整服务已覆盖排放；未表征生物量或水不得作为污染物 UUID。 流属性/单位: 实际实例流属性 / 每个实际实例的原生单位; 数量规则: 由 cp_receipt 取得每 1 kg 参考流的实际归属 receipt_other_releases。; 数值来源模式: 计算值 (`calculated_value`); 适用范围: 场址特定 (`site_specific`); 归一化基准: 每 1 kg 参考流; 基准类型: 参考流 (`reference_flow`); 证据类型: 由采集计算 (`calculated_from_collection`); 采集协议: `cp_receipt`; 来源: `accepted-lot-normalization` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：暂定未解决包络；须有实际记录 范围角色：不确定性范围 (`uncertainty_range`) 下限：0 上限：U_instance 单位：每个实际实例的原生单位 基准：每 1 kg 参考流 基准类型：参考流 (`reference_flow`) 证据类型：推理估算 (`reasoned_estimate`) | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_receipt`; `accepted-lot-normalization` |
| `transport_cargo_scope` | 任何适用的门前运输、返程与共享运输服务 | 按实际运输服务原生单位采集货载与距离；货载包括实际同行的水、冰与容器，不以净动物/鱼体参考质量替代。记录装载、空返与零产出期间的实际燃料/服务负担及其归属。完整运输服务与自有燃料、电力、资产和直接释放范围互斥；保留返程与复用容器责任。 | 实际货载、距离、行程、容器与供应商服务范围记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_scope | 参考产品及路线 | 要求全部限定信息及物种、海域、单船中层拖网、整条未去内脏从未冻结冷藏状态及实际首次实物验收证明；拒绝超范围参考状态或未知保藏包装配置。 | `noaa-atlantic-mackerel`; `seafish-pelagic-trawl`; `torry-mackerel-handling` |
| validation_balance | 全部转移及输出 | 核查实际内部质量及对应交接；逐项列明全部预期等级、物种、去向、拒收及废物。每批次仅一个 accepted_mackerel 最终交换；散装绕行不得同时计 pack。不得强制生态资源移除或弃捕死亡等于验收鱼体质量。 | `accepted-lot-normalization` |
| validation_ownership | 全部节点、服务、直接排放及期间 | 核实每项共享负担的唯一归属和完整使用节点及期间、完整服务排除项、资产更换寿命、失败闲置作业及全部实际燃烧泄漏排放。直接 CO2 卡与其他排放实例必须互斥；全部排放物质、接收介质及因子须有证据。 | `accepted-lot-normalization` |
| validation_limits | 候选身份数量及自动检查 | 未解决 UUID、支持身份、实际原生单位实例、U 上限或分配证据必须披露，并在要求时阻断最终交换或数据集主张。结构检查通过不能证明身份、当前实践、数值范围或完整环境表征。 | `accepted-lot-normalization` |
| `validate_atomic_completion` | 所有适用采集义务与具体清单交换 | 必须逐一落实第8节每项适用采集义务的具体物理/化学交换及其独立数量、原生单位、组成/状态、范围依据或明确的不确定性证据、原始记录、归一化、实际去向/接收环境及兼容的核实 UUID。未落实任何适用项则最终数据包不完整且验证失败；未知不等于零。集合总量不得复制给各项，完整服务与自有燃料/电力/直接释放不得重复。内部转移不固定为最终1 kg。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 前景捕捞数据包至 process/lifecyclemodel 投影，之后用于交付门匹配的下游供应建模 |
| allowed_use | 物种、海域、路线、状态及门明确，交换具体、数量实际且分配经审查 |
| excluded_use | 通用中上层鱼、其他渔具物种、养殖、冻结去内脏参考产品、零售产品、安全法规或零生态认证 |
| required_metadata | 全部必需限定信息、航次网次批次期间、交接输出台账、节点归属、供应商范围、资产再用寿命、分配及经核实具体身份支持 |
| required_quality_disclosure | 时间地理供应商适配、不确定性及因子基准、缺失活动身份范围、偶发生态影响、失败作业、分配敏感性及已执行跳过检查 |
| update_trigger | 物种渔具海域接收者、保藏或包装变化；供应商能源排放资产方法变化；新增前景或影响证据；未解决证据闭环 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `noaa-atlantic-mackerel` | official_guidance | NOAA Fisheries, Atlantic Mackerel (Scomber scombrus), updated 2026-10-01; https://www.fisheries.noaa.gov/species/atlantic-mackerel ; retrieved 2026-10-12 | 物种、美国西北大西洋渔业、中层拖网及偶捕；非数量因子或种群安全主张 |
| `seafish-pelagic-trawl` | handbook | Seafish, Fishing gear database: Pelagic trawl; https://www.seafish.org/responsible-sourcing/fishing-gear-database/gear/pelagic-trawl/ ; retrieved 2026-10-12 | 单船拖网机制及可能偶发触底偶捕；非路线特定数量数据集 |
| `torry-mackerel-handling` | official_guidance | J. N. Keay, MAFF Torry Research Station, Handling and Processing Mackerel, Torry Advisory Note 66 (revised), FAO archive; https://www.fao.org/4/x5938e/x5938e01.htm ; retrieved 2026-10-12 | 仅历史英国整条未去内脏冷却、冰及冷却海水机制；非当前美国比例、固定阈值、安全限值或数值范围 |
| `accepted-lot-normalization` | method_factor | 本 PCR 第 4、7、8 节；声明的前景采集、归属及同批次归一化方法 | 实际记录归属、A/A 参考恒等式、原生单位归一化及归属；非经验数量或排放因子 |
