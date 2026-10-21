---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-mussels-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 养殖贻贝，活、鲜或冷藏

## 1. 范围与适用性

本方法仅覆盖整只带壳动物作为活、鲜或冷藏参考产品。鲜/冷藏去壳或纯组织参考产品不在当前过程方法范围内，不能仅靠第8节补采义务纳入；分类关系为 narrower。这是方法覆盖限制，不意味着生鲜去壳必然属于其他预制或保藏加工产品。

本 PCR 用于指导构建以活、鲜或冷藏状态投放市场的养殖贻贝前景数据包。范围覆盖苗种或稚贝供应、由报告主体控制时的育苗和中间培育、绳索、网套、延绳、筏架、木桩、架、盘、底播单元或其他声明水产养殖系统中的养成、采收、清洗、分级、必要时暂养或净化、活体暂养、冷藏、包装以及至声明边界的放行。

排除产品包括野生采捕贻贝；冷冻、烟熏、干制、盐腌、盐水浸泡、熟制、罐装或其他加工保藏贻贝；作为水产养殖投入销售的贻贝苗种或稚贝；作为非食品产品销售的贻贝壳或壳料；以及牡蛎、扇贝、蛤、鸟蛤、赤贝、鲍鱼或其他已有单独 PCR 的贝类类别。

本 PCR 面向前景数据集生产。除非前景研究中声明了单独经审查的方法和有来源支撑的数量，否则不得为过滤、水体营养盐去除、碳储存或栖息地影响授予生态系统服务抵扣。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-mussels-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04432`, `Farmed mussels, live, fresh or chilled`；mapping_type: narrower；整只带壳方法子集 |
| covered_products | 仅整只带壳参考产品：由水产养殖系统生产、以活、鲜或冷藏状态销售的养殖贻贝，包括声明的 Mytilus、Perna、Choromytilus、Aulacomya 或相近贻贝类群 |
| excluded_products | 鲜/冷藏去壳或纯组织参考产品；野生采捕贻贝；冷冻、烟熏、干制、盐腌、盐水浸泡、熟制、罐装、加工或保藏贻贝；作为苗种销售的贻贝稚贝；非食品贝壳产品；牡蛎、扇贝、蛤、鸟蛤、赤贝、鲍鱼和其他已有单独 PCR 的贝类类别 |
| representative_product | 整只带壳动物：达到声明市场规格和产品形态的带壳活体或冷藏养殖贻贝 |
| production_route | 稚贝或苗种供应、相关中间培育、声明悬挂式、木桩、筏架、底播、架、盘或综合系统中的养成管理、采收、清洗、分级、必要时净化或暂养、活体暂养或冷藏、包装和声明边界放行 |
| market_state | 声明物种、养殖系统、采收区、规格或计数等级、净化状态、包装状态、温度或暂养条件和边界的活、鲜或冷藏带壳产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 整只带壳的作为活、鲜或冷藏市场产品的养殖贻贝 |
| How much | 1 kg |
| How well | 声明物种或物种组、活/鲜/冷藏状态、整只带壳产品基准、规格或计数等级、采收区、净化或暂养状态以及养殖系统 |
| How long or cycle | 归一化到市场化产品输出的一个生产批次、采收批次或报告期 |
| reference_flow_link | `declared_gate_reference` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 养殖贻贝在声明最终物理交接门的验收产品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或物种组；养殖系统；稚贝或苗种来源；养成场址或养殖单元；采收区分类或许可状态；产品状态；整只带壳产品基准；规格或计数等级；净化或暂养状态；含水或沥水基准；地理范围和声明边界；暂养或冷藏时长；包装状态；许可或认证状态 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少这些限定信息的数据包视为参考流定义不完整。

质量是主要参考基准。计数、袋、网袋、篮、箱、绳索、网套、簇或体积记录仅可在保留个体数、实际净质量和抽样或皮重方法时使用，以便前景数据包归一化为 kg 参考产品。

每份数据包声明一个实际最终物理交接门gate_release、一个实际物种/形态/状态和验收条件。包装及参考门前实际交付是中间实测交接；只选一条真实到门路径，未知交付状态不能默认旁路。Q是同批/匹配报告群体在该门经校准称量的正验收净动物质量，排除包装皮重、游离水/冰及拒收，保留声明动物形态中的原生壳/组织/水分。只有declared_gate_reference最终输出归一化为1kg，所有此前数量独立实测。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须以声明活、鲜或冷藏产品形态下的 kg 养殖贻贝表示。 |
| `product_state_and_shell_basis` | 整只带壳活、鲜、冷藏、清洗、去足丝或沥水记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 独立实测实际状态的整只带壳动物净质量，保留自身贝壳和组织。以同批证据记录实际清洗、去足丝、净化和沥水损失，排除包装/游离水/冰。去壳或纯组织质量不是参考选项，也不能由整只动物数量推定。 |
| `count_to_mass_conversion` | 苗种、投放、采收、分级、销售、袋、网袋、箱、簇和计数等级记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 基于计数或容器的记录必须包含净质量、平均个体质量或每 kg 个数、容器皮重、规格等级和抽样方法，之后才可归一化为 kg 产品。 |
| `spat_lot_identity` | 人工育苗稚贝、纳入养殖控制的野外采集稚贝、中间培育苗和转入苗批次 | Mass or count | kg and item | 稚贝和苗种记录必须保留供应商、育苗场或采集区、物种、批次、数量、平均规格或质量、转移日期、健康或转运许可，以及死亡或剔除记录。 |
| `no_external_feed_default` | 养成管理 | Mass | kg | 只有在完整节点/期间记录、采购/库存/投喂或施用核对及管理记录正面证明没有有意投饲、施肥、池塘增肥或补充藻类时，该实际养成投入才可为0。缺失或未记载不证明不存在；自有孵化/育苗和亲本阶段食物另行完整记录。实际施用时分别记录产品、数量、用途及证据。 |
| `water_volume_or_mass` | 育苗、中间培育、净化、暂养、活体暂养、清洗、冷藏和废水 | Mass or volume | kg or m3 | 仅记录由前景控制的泵送、供应、计量、处理、循环或排放水。开放悬挂、筏架、木桩、底播或架式系统中的环境海水交换属于边界条件，不作为工艺用水投入。 |
| `culture_area_time` | 延绳、筏架、木桩、架、盘、底播区或其他养成区域 | Area-time | ha-year or m2-day | 当需要用于放养密度、栖息地披露或共享场址分配时，记录许可或占用养殖面积和有效养殖时长。 |
| `gear_and_socking_material_basis` | 绳索、网套、延绳、浮子、浮标、锚、木桩、架、盘、夹具、扎带和可复用器具 | Mass or item count | kg or item | 器具记录必须保留材料类型、件数、质量、布设期、使用寿命、回收、复用、回收利用、处置或遗失去向，然后才可分配到参考流。 |
| `energy_and_fuel_inventory` | 泵送、曝气、育苗、中间培育、船舶、车辆、清洗、净化、冷藏、活体暂养和交付能源 | Energy or fuel quantity | kWh, MJ, L, or kg | 在归一化到参考流之前记录原始电力、燃料或能源载体单位。不要重复计算已包含在采购投入中的供应商运输。 |
| `packaging_and_ice_basis` | 袋、网袋、箱、标签、内衬、冰、凝胶冰袋、托盘和可复用容器 | Mass or item count | kg or item | 包装和冰记录必须保留材料类型、件数、皮重或填充质量、复用率和去向，然后才能换算为每 kg 参考产品。 |

关键产品属性作为质量参考流的前景限定信息记录：

| 属性 | 常用单位 | 必需处理 |
| --- | --- | --- |
| 物种或物种组 | 学名和通用名 | 所有数据集必填 |
| 养殖系统 | 绳索、网套、延绳、筏架、木桩、架、盘、底播、综合水产养殖系统或声明变体 | 用于边界、面积、器具、水和分配解释，必填 |
| 产品状态 | 活、鲜、冷藏、清洗、去足丝、净化、暂养、吐沙或声明变体 | 用于 Codex 风格产品和贮存解释，必填 |
| 规格或计数等级 | 每 kg 个数、壳长、等级、袋规格、网袋规格或市场等级 | 使用计数、等级或容器记录时必填 |
| 净化状态 | 来自批准区域直接采收、净化、暂养、吐沙或不适用 | 用于产品质量、暂养和用水解释，必填 |

## 5. 系统边界

默认边界覆盖前景可控的养殖贻贝生产至声明养殖场、采收区、发运中心、包装场或交付边界：

1. 稚贝或苗种来源；当报告主体控制育苗和中间培育时纳入场内育苗和中间培育活动；外购稚贝和纳入声明养殖控制的野外采集稚贝时披露供应育苗场、采集者或中间培育来源。
2. 养成管理，包括养殖单元准备、稚贝采集或投放、装套或重新装套、疏苗、必要时海上分级、器具布设和回收、防污和防捕食管理、受控水体移动、死亡量以及直接控制的维护。
3. 当这些操作在参考产品离开前景边界之前完成时，纳入采收、清洗、分级、必要时去足丝、净化、暂养、吐沙、活体暂养、冷藏、包装和声明边界放行。
4. 当参考流为送达产品而非养殖场门、采收区、发运中心或包装场门产品时，纳入至声明边界的交付。

资本品、长寿命基础设施和长期栖息地改变仅在声明的数据包范围要求时纳入。稚贝、苗种、器具、包装、冰、电力、燃料和其他采购投入需要上游数据集，除非同一运营者控制并在前景包中报告其生产。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | declared_spat_or_seed_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | 当前 CPC 3.0 产品类别 `04432`, `Farmed mussels, live, fresh or chilled` |
| recursive_input_rule | 用于生产商品产品的养殖贻贝稚贝、苗种或中间培育苗，记录为带供应商、育苗场、采集区、中间培育或转移披露的声明苗种起点，不递归作为成品参考产品输出追溯 |
| upstream_dataset_requirement | 稚贝或苗种供应商数据集、场内育苗记录，或记录来源、物种、批次、质量或数量、规格、健康或转运许可、认证或许可证据的文件 |
| disclosure | 披露物种或物种组、养殖系统、稚贝或苗种来源、养成场址或养殖单元、放养密度、养成时长、净化或暂养状态、受控系统水源和排放路径、死亡和剔除量、器具使用和遗失、采收和暂养条件、产品状态、包装状态、声明边界以及未解析的 Tiangong UUID 替代项 |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| spat_supply_hatchery_and_nursery | 稚贝供应、育苗与中间培育 | required | 必须声明稚贝、苗种或幼体来源；当报告主体控制场内育苗和中间培育时纳入相应行 | 最终门前的实际过程职责 | 每 1 kg 参考流 |
| growout_husbandry | 养成管理 | required |  | 最终门前的实际过程职责 | 每 1 kg 参考流 |
| harvest_washing_depuration_and_packout | 采收、清洗、净化与包装出货 | required |  | 最终门前的实际过程职责 | 每 1 kg 参考流 |
| delivery_to_declared_gate | 至声明边界交付 | conditional | 当参考流为超出养殖场、采收区、发运中心或包装场门的送达产品时纳入 | 最终门前的实际过程职责 | 每 1 kg 参考流 |
| gate_release | 声明最终物理交接和验收 | required | 每份数据包一个实际最终门及真实路线 | 唯一最终参考 | 每 1 kg 参考流 |

### 过程：稚贝供应、育苗与中间培育（`spat_supply_hatchery_and_nursery`）

#### 输入

##### 产品流

###### 独立交换：本节点实际活体贻贝稚贝苗种 (`spat_seed_or_nursery_stock_input`)

本行记录进入声明生产路径的外购人工稚贝、已纳入养殖控制的野外采集稚贝、转入中间培育苗或内部生产苗。 净活体质量kg是本卡原生量；只数、壳长/等级和同批代表性个体质量作为辅助证据。分别声明实际物种、苗种来源/阶段、供应技术和门；不将全类苗种绑定为悬挂延绳养殖场端身份，内部转移不自动继承外部供应UUID。苗期生长下的质量比不等于只数存活率。

- 选定流：本节点实际活体贻贝稚贝苗种
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spat_stocking_records_spat_supply_hatchery_and_nursery`
- 来源：`fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_spat_seed_or_nursery_stock_input
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：本节点实际购入电力 (`hatchery_nursery_electricity`)

本行覆盖场内育苗或中间培育中泵、曝气、过滤、藻类培养、照明、控温、附着系统和水处理用电。

- 选定流：本节点实际购入电力
- 流属性/单位：Energy / kWh
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records_spat_supply_hatchery_and_nursery`
- 来源：`fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_hatchery_nursery_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交换：本节点实际活体贻贝稚贝苗种 (`accepted_spat_or_seed_for_growout`)

本输出将可用稚贝、苗种或中间培育苗带入养成过程。 净活体质量kg是本卡原生量；只数、壳长/等级和同批代表性个体质量作为辅助证据。分别声明实际物种、苗种来源/阶段、供应技术和门；不将全类苗种绑定为悬挂延绳养殖场端身份，内部转移不自动继承外部供应UUID。苗期生长下的质量比不等于只数存活率。

- 选定流：本节点实际活体贻贝稚贝苗种
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_spat_stocking_records_spat_supply_hatchery_and_nursery`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_accepted_spat_or_seed_for_growout
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：养成管理（`growout_husbandry`）

#### 输入

##### 产品流

###### 独立交换：本节点实际活体贻贝稚贝苗种 (`accepted_spat_or_seed_transfer_to_growout`)

本行将可用稚贝或苗种转入声明养成区域或养殖单元。 净活体质量kg是本卡原生量；只数、壳长/等级和同批代表性个体质量作为辅助证据。分别声明实际物种、苗种来源/阶段、供应技术和门；不将全类苗种绑定为悬挂延绳养殖场端身份，内部转移不自动继承外部供应UUID。苗期生长下的质量比不等于只数存活率。

- 选定流：本节点实际活体贻贝稚贝苗种
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_spat_stocking_records_growout_husbandry`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_accepted_spat_or_seed_transfer_to_growout
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：本节点实际购入电力 (`growout_electricity`)

本行覆盖泵、传感器、照明、养殖场分级、液压设备、与养成相连的陆上暂养或其他直接控制养成操作用电。被动开放水域养殖无动力养成操作时，记录为零或带理由的不适用。

- 选定流：本节点实际购入电力
- 流属性/单位：Energy / kWh
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records_growout_husbandry`
- 来源：`asc-farm-standard-2025`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816` (`growout_fuel_and_workboat_energy`)

本行覆盖作业船、拖拉机、叉车、发电机、养殖场车辆、采收支持、器具维护或直接控制维护活动使用的柴油或其他燃料。 仅记录实际柴油物料及其未由完整服务覆盖的使用；不同燃料/电力另立卡，原MJ、L或吨公里记录不能改标签当成kg。L转kg需同批燃料实测/供应密度及温度证据；MJ换算还需热值、基准和因子证据。完整运输服务和其已含燃料、资产、直接排放不得重计。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records_growout_husbandry`
- 来源：`asc-farm-standard-2025`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_growout_fuel_and_workboat_energy
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交换：养殖贻贝活体采收规格生物量 (`harvest_size_farmed_mussels`)

本行记录最终清洗、分级、净化、暂养、活体暂养、冷藏或包装损失之前的养成输出。 分别记录真实物种、形态、活/鲜/冷藏状态、等级、接收方和交接点；该节点是实际中间产出，不是最终参考输出。允许拒收、损失、持留、分级或配送前后数量不同，不推定其收率为1或以参考子集质量约束全部可销售降级产出。

- 选定流：养殖贻贝活体采收规格生物量
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_depuration_and_product_records_growout_husbandry`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_harvest_size_farmed_mussels
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：采收、清洗、净化与包装出货（`harvest_washing_depuration_and_packout`）

#### 输入

##### 产品流

###### 独立交换：养殖贻贝实际物种、形态及状态的动物批次 (`harvested_mussels_input_to_packout`)

本行将采收规格贻贝转入清洗、分级、去足丝、净化、暂养、活体暂养、冷藏和包装出货。 分别记录真实物种、形态、活/鲜/冷藏状态、等级、接收方和交接点；该节点是实际中间产出，不是最终参考输出。允许拒收、损失、持留、分级或配送前后数量不同，不推定其收率为1或以参考子集质量约束全部可销售降级产出。

- 选定流：养殖贻贝实际物种、形态及状态的动物批次
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_depuration_and_product_records_harvest_washing_depuration_and_packout`
- 来源：`codex-cxs-292-2008`, `fao-bivalve-depuration-2008`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_harvested_mussels_input_to_packout
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：本节点实际购入电力 (`packout_electricity`)

本行覆盖泵、净化系统、紫外或水处理、活体暂养、冷藏、分级设备、称重、清洗和包装用电。

- 选定流：本节点实际购入电力
- 流属性/单位：Energy / kWh
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records_harvest_washing_depuration_and_packout`
- 来源：`fao-bivalve-depuration-2008`, `asc-farm-standard-2025`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_packout_electricity
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交换：养殖贻贝实际物种、形态及状态的动物批次 (`marketable_farmed_mussel_reference_product`)

本行是实际中间动物产品交接，不是最终参考输出。只有 gate_release 的 declared_gate_reference 才是最终验收参考产品。分别记录真实物种、形态、活/鲜/冷藏状态、等级、接收方和交接点。允许拒收、损失、持留、分级或配送前后数量不同，不推定其收率为1或以参考子集质量约束全部可销售降级产出。

- 选定流：养殖贻贝实际物种、形态及状态的动物批次
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_depuration_and_product_records_harvest_washing_depuration_and_packout`
- 来源：`codex-cxs-292-2008`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_marketable_farmed_mussel_reference_product
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：养殖贻贝实际独立可销售降级产品 (`saleable_offgrade_mussel_coproduct`)

仅当降级活、鲜或冷藏贻贝仍作为同一产品族的单独等级销售时使用本行。 分别记录真实物种、形态、活/鲜/冷藏状态、等级、接收方和交接点；该节点是实际中间产出，不是最终参考输出。允许拒收、损失、持留、分级或配送前后数量不同，不推定其收率为1或以参考子集质量约束全部可销售降级产出。

- 选定流：养殖贻贝实际独立可销售降级产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_depuration_and_product_records_harvest_washing_depuration_and_packout`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_saleable_offgrade_mussel_coproduct
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：实际参考门前交付（`delivery_to_declared_gate`）

#### 输入

##### 产品流

###### 独立交换：养殖贻贝实际物种、形态及状态的动物批次 (`product_transferred_to_controlled_delivery`)

当声明参考流是在报告主体控制下交付至养殖场、采收区、发运中心或包装场门以外的产品时使用本行。 分别记录真实物种、形态、活/鲜/冷藏状态、等级、接收方和交接点；该节点是实际中间产出，不是最终参考输出。允许拒收、损失、持留、分级或配送前后数量不同，不推定其收率为1或以参考子集质量约束全部可销售降级产出。

- 选定流：养殖贻贝实际物种、形态及状态的动物批次
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_and_route_records`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_product_transferred_to_controlled_delivery
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816` (`controlled_delivery_fuel_or_transport_service`)

本行记录至声明边界的直接受控交付燃料、冷藏车辆能源、船舶燃料或运输服务。 仅记录实际柴油物料及其未由完整服务覆盖的使用；不同燃料/电力另立卡，原MJ、L或吨公里记录不能改标签当成kg。L转kg需同批燃料实测/供应密度及温度证据；MJ换算还需热值、基准和因子证据。完整运输服务和其已含燃料、资产、直接排放不得重计。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_and_route_records`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_controlled_delivery_fuel_or_transport_service
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交换：养殖贻贝实际物种、形态及状态的动物批次 (`delivered_farmed_mussels`)

仅当声明边界超出养殖场、采收区、发运中心或包装场门时使用本输出。 分别记录真实物种、形态、活/鲜/冷藏状态、等级、接收方和交接点；该节点是实际中间产出，不是最终参考输出。允许拒收、损失、持留、分级或配送前后数量不同，不推定其收率为1或以参考子集质量约束全部可销售降级产出。

- 选定流：养殖贻贝实际物种、形态及状态的动物批次
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：保留本节点独立计量/有证据计算的原生数量q、同批转移、损失与库存；按第7节归属后除以同一最终门正验收净质量Q。保留原始批次/每1000kg及阶段分母，阶段记录用实测产出S恢复原数量；不得把内部量固定为1kg或等同最终Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_and_route_records`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivered_farmed_mussels
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：声明最终物理交接（`gate_release`）

#### 输入

##### 产品流

###### 独立交换：养殖贻贝最终门实际到货批次 (`gate_arriving_product`)

每份数据包声明一个实际最终物理交接门gate_release、一个实际物种/形态/状态和验收条件。包装及参考门前实际交付是中间实测交接；只选一条真实到门路径，未知交付状态不能默认旁路。Q是同批/匹配报告群体在该门经校准称量的正验收净动物质量，排除包装皮重、游离水/冰及拒收，保留声明动物形态中的原生壳/组织/水分。只有declared_gate_reference最终输出归一化为1kg，所有此前数量独立实测。

- 选定流：养殖贻贝最终门实际到货批次
- 流属性/单位：Mass / kg
- 数量规则：独立记录验收前实际到货净动物质量q并与真实包装或交付输出配对；按归属量除以Q，保留拒收、损失和库存，不固定为1kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_release`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_gate_arriving_product
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 独立交换：养殖贻贝在声明最终物理交接门的验收产品 (`declared_gate_reference`)

每份数据包声明一个实际最终物理交接门gate_release、一个实际物种/形态/状态和验收条件。包装及参考门前实际交付是中间实测交接；只选一条真实到门路径，未知交付状态不能默认旁路。Q是同批/匹配报告群体在该门经校准称量的正验收净动物质量，排除包装皮重、游离水/冰及拒收，保留声明动物形态中的原生壳/组织/水分。只有declared_gate_reference最终输出归一化为1kg，所有此前数量独立实测。

- 选定流：养殖贻贝在声明最终物理交接门的验收产品
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate_release`
- 数量范围：同批正验收净质量Q/Q恒等式；非收率
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`pcr-gate-accounting-method`

##### 废物流

##### 基本流


## 7. 分配与共产品处理

如果批次记录能够按养殖区域、养殖单元、物种、采收批次、规格等级、产品形态、净化路径或去向分割负荷，应避免分配。在应用分配前，应先按实测质量区分活、鲜、冷藏、规格等级、降级和交付产品。

当一个前景批次在 CPC 04432 内产生多个可销售等级时，除非记录了经审查的市场价值规则，否则按声明产品质量分配共享稚贝、器具、养成、采收、清洗、净化、暂养、冷藏、包装和交付负荷。贝壳、死亡、废水、污泥、沉积物、生物污损残留、废弃器具以及破损或死亡产品属于废物或处理输出，除非其以单独产品数据集和参考流销售。

如果同一场址在同一区域、筏架、绳索系统、木桩区、架、底播区或船舶路线中养殖多个物种或其他水产产品，应按直接计量的养殖单元服务量、面积-时间、生物量-时间或产品质量依次优先分配共享记录。除非单独经审查的生态系统服务方法在范围内且未重复计入被抵扣服务，否则不得将过滤、营养盐去除、碳储存或栖息地服务抵扣分配给参考产品。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_spat_stocking_records_spat_supply_hatchery_and_nursery` | `spat_supply_hatchery_and_nursery` | spat, seed, nursery stock input and accepted stock output | hatchery transfer, spat collection record, supplier invoice, stocking log, movement or health certificate | species; batch id; supplier, hatchery, nursery, or collection area; count; mean size; mean mass where available; total mass; size grade; health or movement status; transfer date；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | supplier records, hatchery logs, collection permits, stocking count, sampling and weighing；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | item, shell length, and kg | each spat receipt, spat collection, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, collection area, and grow-out unit | 每 1 kg 参考流 | signed transfer records, permit or collection evidence, sampling sheet, weighing record, health or movement document |
| `cp_spat_stocking_records_growout_husbandry` | `growout_husbandry` | spat, seed, nursery stock input and accepted stock output | hatchery transfer, spat collection record, supplier invoice, stocking log, movement or health certificate | species; batch id; supplier, hatchery, nursery, or collection area; count; mean size; mean mass where available; total mass; size grade; health or movement status; transfer date；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | supplier records, hatchery logs, collection permits, stocking count, sampling and weighing；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | item, shell length, and kg | each spat receipt, spat collection, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, collection area, and grow-out unit | 每 1 kg 参考流 | signed transfer records, permit or collection evidence, sampling sheet, weighing record, health or movement document |
| `cp_hatchery_nursery_records` | `spat_supply_hatchery_and_nursery` | on-site hatchery and nursery microalgae, culture media, settlement substrate, collectors, and seed-production inputs | hatchery log, algal culture log, substrate issue record, collector deployment record, supplier invoice | input type; quantity; concentration where relevant; batch id; purpose; date; settlement or nursery unit；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | hatchery batch records, supplier documents, metering, weighing, or inventory issue；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kg, L, item, or concentration unit | each batch or reporting period | seed-production or nursery period linked to market batch | on-site hatchery, larval room, settlement unit, collector line, or nursery | 每 1 kg 参考流 | hatchery batch sheet, supplier invoice, inventory log, production reconciliation |
| `cp_culture_gear_and_area_records` | `growout_husbandry` | culture area, ropes, socks, longlines, floats, buoys, anchors, poles, rafts, racks, trays, and shared-site allocation | lease record, farm map, gear issue log, service-life record, maintenance record | culture area; coordinates or plot id; gear type; material; item count; mass; service life; deployment date; retrieval date; loss or reuse fate；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | lease documents, GIS map, farm log, gear inventory, weighing, maintenance record；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | ha, m2, item, kg, ha-year, or m2-day | deployment event, retrieval event, or reporting period | grow-out period and shared-site allocation period | licensed area, raft, line, pole field, rack, tray, bottom plot, or vessel-supported area | 每 1 kg 参考流 | permit or lease, gear inventory, maintenance log, retrieval record |
| `cp_feed_fertilizer_and_chemical_records` | `growout_husbandry` | intentional feed, fertilizer, supplemental algae, pond enrichment, predator-control chemicals, disinfectants, or other material applications | application log, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; application area; date; legal or certification status；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | farm application log, supplier invoice, chemical inventory, permit report；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kg, L, or active ingredient unit | each application | grow-out, pond, or treatment period | grow-out area, pond, treatment unit, or storage area | 每 1 kg 参考流 | application record, invoice, permit or certification evidence, inventory reconciliation |
| `cp_water_quality_and_discharge_records_spat_supply_hatchery_and_nursery` | `spat_supply_hatchery_and_nursery` | water intake, pumped seawater, depuration water, live holding water, water-quality monitoring, wastewater, sludge, and discharge | meter readings, pump logs, depuration records, water-quality tests, discharge permits | intake volume; make-up water; recirculated volume; discharge volume; sludge mass; water source; discharge route; treatment; salinity; temperature; microbial or biotoxin monitoring where relevant；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | meter, pump runtime calculation, depuration log, water-quality testing, permit report, or water management log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | m3, kg, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, grow-out, depuration, relaying, live holding, packhouse, and discharge point | 每 1 kg 参考流 | meter calibration, depuration log, laboratory result, permit report, water-quality monitoring record |
| `cp_water_quality_and_discharge_records_growout_husbandry` | `growout_husbandry` | water intake, pumped seawater, depuration water, live holding water, water-quality monitoring, wastewater, sludge, and discharge | meter readings, pump logs, depuration records, water-quality tests, discharge permits | intake volume; make-up water; recirculated volume; discharge volume; sludge mass; water source; discharge route; treatment; salinity; temperature; microbial or biotoxin monitoring where relevant；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | meter, pump runtime calculation, depuration log, water-quality testing, permit report, or water management log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | m3, kg, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, grow-out, depuration, relaying, live holding, packhouse, and discharge point | 每 1 kg 参考流 | meter calibration, depuration log, laboratory result, permit report, water-quality monitoring record |
| `cp_water_quality_and_discharge_records_harvest_washing_depuration_and_packout` | `harvest_washing_depuration_and_packout` | water intake, pumped seawater, depuration water, live holding water, water-quality monitoring, wastewater, sludge, and discharge | meter readings, pump logs, depuration records, water-quality tests, discharge permits | intake volume; make-up water; recirculated volume; discharge volume; sludge mass; water source; discharge route; treatment; salinity; temperature; microbial or biotoxin monitoring where relevant；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | meter, pump runtime calculation, depuration log, water-quality testing, permit report, or water management log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | m3, kg, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, grow-out, depuration, relaying, live holding, packhouse, and discharge point | 每 1 kg 参考流 | meter calibration, depuration log, laboratory result, permit report, water-quality monitoring record |
| `cp_energy_and_fuel_records_spat_supply_hatchery_and_nursery` | `spat_supply_hatchery_and_nursery` | electricity, diesel, vessel fuel, vehicle fuel, generator fuel, refrigerated vehicle energy, and farm equipment energy | utility bill, submeter, fuel purchase, tank drawdown, vessel log, tractor log, equipment log | electricity use; fuel type; quantity; meter id; process allocation; operating hours; route; vessel or equipment; distance; process purpose；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | utility bill, submeter, fuel invoice, tank gauge, vehicle or vessel log, equipment runtime；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kWh, MJ, L, kg, or tonne-km | monthly, each trip, work event, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, grow-out unit, depuration centre, live holding area, packhouse, route, vessel, vehicle, or equipment | 每 1 kg 参考流 | utility bill, submeter records, fuel invoice, odometer, vessel log, equipment log, allocation worksheet |
| `cp_energy_and_fuel_records_growout_husbandry` | `growout_husbandry` | electricity, diesel, vessel fuel, vehicle fuel, generator fuel, refrigerated vehicle energy, and farm equipment energy | utility bill, submeter, fuel purchase, tank drawdown, vessel log, tractor log, equipment log | electricity use; fuel type; quantity; meter id; process allocation; operating hours; route; vessel or equipment; distance; process purpose；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | utility bill, submeter, fuel invoice, tank gauge, vehicle or vessel log, equipment runtime；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kWh, MJ, L, kg, or tonne-km | monthly, each trip, work event, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, grow-out unit, depuration centre, live holding area, packhouse, route, vessel, vehicle, or equipment | 每 1 kg 参考流 | utility bill, submeter records, fuel invoice, odometer, vessel log, equipment log, allocation worksheet |
| `cp_energy_and_fuel_records_harvest_washing_depuration_and_packout` | `harvest_washing_depuration_and_packout` | electricity, diesel, vessel fuel, vehicle fuel, generator fuel, refrigerated vehicle energy, and farm equipment energy | utility bill, submeter, fuel purchase, tank drawdown, vessel log, tractor log, equipment log | electricity use; fuel type; quantity; meter id; process allocation; operating hours; route; vessel or equipment; distance; process purpose；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | utility bill, submeter, fuel invoice, tank gauge, vehicle or vessel log, equipment runtime；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kWh, MJ, L, kg, or tonne-km | monthly, each trip, work event, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, grow-out unit, depuration centre, live holding area, packhouse, route, vessel, vehicle, or equipment | 每 1 kg 参考流 | utility bill, submeter records, fuel invoice, odometer, vessel log, equipment log, allocation worksheet |
| `cp_energy_and_fuel_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | electricity, diesel, vessel fuel, vehicle fuel, generator fuel, refrigerated vehicle energy, and farm equipment energy | utility bill, submeter, fuel purchase, tank drawdown, vessel log, tractor log, equipment log | electricity use; fuel type; quantity; meter id; process allocation; operating hours; route; vessel or equipment; distance; process purpose；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | utility bill, submeter, fuel invoice, tank gauge, vehicle or vessel log, equipment runtime；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kWh, MJ, L, kg, or tonne-km | monthly, each trip, work event, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, grow-out unit, depuration centre, live holding area, packhouse, route, vessel, vehicle, or equipment | 每 1 kg 参考流 | utility bill, submeter records, fuel invoice, odometer, vessel log, equipment log, allocation worksheet |
| `cp_mortality_residue_and_gear_records_spat_supply_hatchery_and_nursery` | `spat_supply_hatchery_and_nursery` | mortalities, shells, residues, rejects, biofouling, discarded or lost gear, and delivery losses | mortality log, reject sheet, waste manifest, gear loss record, recovery record | count; mass; reason; fate; date; culture unit; shell, organic residue, sediment, foreign matter, or gear category；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | farm log, packhouse reject record, weighing, waste contractor record, retrieval log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | item and kg | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, grow-out unit, packhouse, waste handling route, or delivery route | 每 1 kg 参考流 | signed waste record, farm mortality log, gear retrieval record, mass balance |
| `cp_mortality_residue_and_gear_records_growout_husbandry` | `growout_husbandry` | mortalities, shells, residues, rejects, biofouling, discarded or lost gear, and delivery losses | mortality log, reject sheet, waste manifest, gear loss record, recovery record | count; mass; reason; fate; date; culture unit; shell, organic residue, sediment, foreign matter, or gear category；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | farm log, packhouse reject record, weighing, waste contractor record, retrieval log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | item and kg | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, grow-out unit, packhouse, waste handling route, or delivery route | 每 1 kg 参考流 | signed waste record, farm mortality log, gear retrieval record, mass balance |
| `cp_mortality_residue_and_gear_records_harvest_washing_depuration_and_packout` | `harvest_washing_depuration_and_packout` | mortalities, shells, residues, rejects, biofouling, discarded or lost gear, and delivery losses | mortality log, reject sheet, waste manifest, gear loss record, recovery record | count; mass; reason; fate; date; culture unit; shell, organic residue, sediment, foreign matter, or gear category；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | farm log, packhouse reject record, weighing, waste contractor record, retrieval log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | item and kg | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, grow-out unit, packhouse, waste handling route, or delivery route | 每 1 kg 参考流 | signed waste record, farm mortality log, gear retrieval record, mass balance |
| `cp_mortality_residue_and_gear_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | mortalities, shells, residues, rejects, biofouling, discarded or lost gear, and delivery losses | mortality log, reject sheet, waste manifest, gear loss record, recovery record | count; mass; reason; fate; date; culture unit; shell, organic residue, sediment, foreign matter, or gear category；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | farm log, packhouse reject record, weighing, waste contractor record, retrieval log；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | item and kg | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, grow-out unit, packhouse, waste handling route, or delivery route | 每 1 kg 参考流 | signed waste record, farm mortality log, gear retrieval record, mass balance |
| `cp_harvest_depuration_and_product_records_growout_husbandry` | `growout_husbandry` | harvest-size product, marketable reference product, off-grade product, depuration release, and product state | harvest log, grading sheet, depuration release record, sales invoice, dispatch record, pack-out record | harvest date; culture unit; species; product state; whole shell-on basis; purification status; grade; count; mass; destination；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | harvest weighing, grader records, depuration or dispatch records, packhouse records, invoice；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kg and item | each harvest, depuration release, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest area, depuration or dispatch centre, packhouse, and declared gate | 每 1 kg 参考流 | calibrated scale record, sales invoice, dispatch record, batch reconciliation |
| `cp_harvest_depuration_and_product_records_harvest_washing_depuration_and_packout` | `harvest_washing_depuration_and_packout` | harvest-size product, marketable reference product, off-grade product, depuration release, and product state | harvest log, grading sheet, depuration release record, sales invoice, dispatch record, pack-out record | harvest date; culture unit; species; product state; whole shell-on basis; purification status; grade; count; mass; destination；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 ；实测包装/暂养期初期末库存；有日期的收获接收与向后转移记录；分开的可销售降级品、拒收和其他动物损失质量；有独立证据的有符号动物净质量变化；物种、批次、产品状态、完整动物净称量基准及库存负担结转 | harvest weighing, grader records, depuration or dispatch records, packhouse records, invoice；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 ；按同一期间及可追溯批次，以完整带壳动物净质量核对，独立称量库存及各去向；跨期结转库存及其累计负担，不作新增收获。实际有符号的生物/动物体内水分质量变化，必须有独立测量或有记录的物料平衡方法及不确定性，不得以差额倒填。 | kg and item | each harvest, depuration release, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest area, depuration or dispatch centre, packhouse, and declared gate | 每 1 kg 参考流 | calibrated scale record, sales invoice, dispatch record, batch reconciliation |
| `cp_packaging_and_ice_records` | `harvest_washing_depuration_and_packout` | sacks, mesh bags, boxes, liners, labels, ice, gel packs, pallets, and reusable containers | packaging issue log, ice production or purchase record, purchase invoice, bill of materials | packaging item; material; item count; tare mass; capacity; reuse rate; ice or gel pack mass; destination；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | warehouse issue record, bill of materials, supplier invoice, weighing；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kg and item | each pack-out batch or reporting period | pack-out and delivery preparation period | packhouse and dispatch area | 每 1 kg 参考流 | supplier specification, packaging issue sheet, ice record, scale record |
| `cp_delivery_and_route_records` | `delivery_to_declared_gate` | controlled delivery load, fuel, transport service, rejects, and delivered product | delivery log, vehicle or vessel log, fuel record, dispatch note, receiving note | delivered mass; route; distance; vehicle or vessel; fuel; refrigeration or ice service; rejects; delivery date; receiving gate；真实节点、原始批次/每1000kg/阶段基准、各自原生数量q及单位、阶段产出S、最终门同批正验收净质量Q、库存/损失/去向、独立范围证据 | dispatch record, GPS or route log, fuel invoice, receiving record；仅采集本节点实际事件；保留原始分母，阶段基准须以独立实测S恢复原数量后按Q归一化；不得默认阶段产出等于Q。 | kg, L, MJ, tonne-km, and item | each controlled delivery route | delivery period linked to production batch | controlled delivery route and declared gate | 每 1 kg 参考流 | delivery manifest, receiving note, fuel record, route evidence |
| `cp_actual_delivery` | `delivery_to_declared_gate` | 实际参考门前交付及损失 | 原始计量、称重、库存和物理交接记录 | 节点/批次/实际物种/状态/形态；每项原生数量q/单位；原始批次/每1000kg/阶段S；同批正Q；真实路线/接收者/时间；毛重/皮重/水冰/拒收；损失/库存/去向；实际载荷/距离/空返；服务范围；独立范围/换算证据 | 仅计量本节点各项实际交换；产品独立经校准称重并与发送方配对，验收Q在同一实际最终门独立测量；保留原始分母及所有去向，不重复扣除拒收 | kg; kWh; m3; actual native units | 每次事件及仪表期间 | 完整实际批次/期间，含失败、清理、库存及资产服务 | `delivery_to_declared_gate` | 每 1 kg 参考流 | 校准、原始记录、实际来源/去向、服务范围、独立范围/换算证据 |
| `cp_gate_release` | `gate_release` | 唯一最终验收、拒收及损失 | 原始计量、称重、库存和物理交接记录 | 节点/批次/实际物种/状态/形态；每项原生数量q/单位；原始批次/每1000kg/阶段S；同批正Q；真实路线/接收者/时间；毛重/皮重/水冰/拒收；损失/库存/去向；实际载荷/距离/空返；服务范围；独立范围/换算证据 | 仅计量本节点各项实际交换；产品独立经校准称重并与发送方配对，验收Q在同一实际最终门独立测量；保留原始分母及所有去向，不重复扣除拒收 | kg; kWh; m3; actual native units | 每次事件及仪表期间 | 完整实际批次/期间，含失败、清理、库存及资产服务 | `gate_release` | 每 1 kg 参考流 | 校准、原始记录、实际来源/去向、服务范围、独立范围/换算证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all foreground rows | 实际可归属原生数量q除以同批实际最终门正验收净质量Q。保留原始批次、每1000kg及阶段S基准，并应用same_gate_normalization的显式换算；Q不等于默认包装或配送产出。 | q; Q; cp_gate_release; own-node records | native unit per 1 kg reference flow | `pcr-gate-accounting-method` |
| `calculate_spat_acceptance_and_survival` | spat_supply_hatchery_and_nursery and growout_husbandry | accepted_spat_or_seed = received_or_collected_spat - rejected_spat; survival_to_harvest = harvested_count / accepted_spat_count when count records are available. Retain count-to-mass conversion separately. | received spat; collected spat; rejected spat; stocked count; harvested count; mortality count | accepted spat or seed, survival indicator, and QA check | `mass-balance-identity` |
| `calculate_area_time_intensity` | growout_husbandry | area_time = active_culture_area * active_culture_duration; allocate shared area by culture-unit records, biomass-time, or product mass as declared. | culture area; active days; allocation basis; product mass | ha-year or m2-day per reference product | `mass-balance-identity` |
| `apply_no_external_feed_default` | growout_husbandry | 只有在完整节点/期间记录、采购/库存/投喂或施用核对及管理记录正面证明没有有意投饲、施肥、池塘增肥或补充藻类时，该实际养成投入才可为0。缺失或未记载不证明不存在；自有孵化/育苗和亲本阶段食物另行完整记录。实际施用时分别记录产品、数量、用途及证据。 | feed records; enrichment records; farm declaration | feed or enrichment applicability flag and material amount | `asc-farm-standard-2025` |
| `reconcile_packout_mass` | harvest_washing_depuration_and_packout | opening_packout_stock + harvested_input_mass + evidenced_net_animal_mass_change = measured_packout_onward_mass + offgrade_saleable_mass + reject_mass + measured_local_animal_loss + closing_packout_stock. | opening_packout_stock; harvested_input_mass; evidenced_net_animal_mass_change; measured_packout_onward_mass; offgrade_saleable_mass; reject_mass; measured_local_animal_loss; closing_packout_stock | pack-out mass balance | `mass-balance-identity` |
| `calculate_controlled_discharge` | water intake and discharge rows | 优先使用外排边界的实测排水量。缺少计量时，只有在全部重要项有证据的同一时段完整水量平衡下，才可按外部进水和进入受控系统的降水，扣除蒸发、随产品/废物外带水、其他外部移出水及储水变化来估算外排量。内部循环回用不跨越系统外边界，在两侧抵消，不能再次从进水扣除。质量/体积换算须有实际温度、盐度及密度依据；缺项或负的闭合残差不得直接当作排放、吸收或零值。受控排水与不受控环境海水交换分开。 | intake; discharge; recirculated volume; retained water; removed water | controlled discharge volume by process | `mass-balance-identity` |
| `calculate_packaging_and_ice_mass` | packaging and ice rows | material_mass = item_count * tare_or_supplier_mass, adjusted for reuse allocation where applicable. | item count; tare mass; supplier mass; reuse rate; ice mass | kg packaging or ice per reference product | `mass-balance-identity` |
| `calculate_delivery_transport_service` | delivery_to_declared_gate | 按每段实际路线，将实际承运本货批的货载质量（吨）乘该段距离（km），再按匹配最终参考产品的实际产量归一化。货载包含实际随行的载体水、冰和包装，不等于参考产品净质量。共载时使用有因果依据的质量、占用体积或其他已说明分配键。记录空返、冷却、增氧和暂养服务的覆盖；不得把空返的零货载视为零运输负荷。若以实测燃料和直接排放建模，不得重复叠加已覆盖同一负荷的运输服务。 | delivered mass; controlled distance; route | tonne-kilometres | `mass-balance-identity` |
| `same_gate_normalization` | all inventory rows | 实测可归属原生数量q除以同批最终门正验收净动物质量Q，得到每1kg交换。每1000kg=1000×q/Q；仅同一Q/形态/群体的原每1000kg量才可准确/1000。若原单位为每阶段输出S，先乘以独立实测S恢复分子，再除Q；原生数量、阶段收率、损失/库存和计量换算均保留。只有最终Q/Q=1，内部输出不固定为1。 | q; stage S; Q; cp_gate_release; own-node records | native unit per 1 kg reference flow | `pcr-gate-accounting-method` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_scope` | all datasets | 声明 CPC 代码、物种或物种组、养殖系统、稚贝或苗种来源、采收区、产品状态、净化状态、地理范围和声明边界。 | 数据集元数据、投放记录、采收记录、产品说明、许可、认证或转运证据 |
| `mass_basis_consistency` | reference product, spat, harvest, pack-out, rejects, packaging, and ice | 区分带壳、活、鲜、冷藏、沥水、清洗、湿、干、计数、容器和净质量基准，除非有实测换算证据。 | 称量记录、产品规格、每 kg 个数记录、容器皮重、沥水或含水证据 |
| `no_feed_and_material_disclosure` | grow-out rows | 声明是否使用外部饲料、施肥、池塘增肥、补充藻类、防捕食化学品、消毒剂或其他养成物料投入。无饲料必须是明确前景声明，不是省略记录。 | 养殖场声明、施用记录、化学品库存、认证审核、供应商记录 |
| `water_and_purification_disclosure` | hatchery, grow-out, depuration, relaying, washing, and live holding | 区分环境开放水体交换与受控取水、处理、循环、净化、活体暂养和排放。 | 水表、泵日志、净化记录、实验室结果、许可报告 |
| `mortality_residue_and_gear_completeness` | spat, grow-out, pack-out, and delivery rows | 按批次或报告期记录死亡、剔除、贝壳、沉积物、生物污损残留、废弃或遗失器具及其去向。 | 死亡日志、剔除单、废物联单、器具回收记录、回收记录 |
| `allocation_transparency` | multi-species, multi-grade, or shared-site systems | 作为二级或背景数据集发布前，说明分割或分配基准。 | 分配工作表、等级质量记录、面积-时间记录、养殖单元记录 |
| `temporal_representativeness` | all foreground rows | 覆盖完整生产批次、采收批次、净化周期、交付路线或代表性报告期；披露部分周期数据集。 | 生产日历、投放和采收日期、净化记录、交付记录、报告期记录 |
| `dq_atomic_completion` | 全部过程和补充清单义务 | 以下是必填的逐实际身份采集义务，而非交换、默认投入或排放。每个实际物质、产品、废物流、排放物及受纳介质须分别建卡、独立计量，并保留实际单位、原始批次/阶段产量、最终交接点参考产量、归属/分配及范围/不确定性证据。由原始总量按同批最终产量归一化；仅有阶段归一化数据时，须保留阶段实测产量以恢复原始量，不能假定阶段产量等于最终量。不把集合总量、混合单位范围、默认估计或一个 UUID 复制给子流；未知不等于零。购入物料是产品输入，直接取用自然资源才是基本输入；死亡/处理废物、直接释放及可用共产品按实际去向分别确定方向和类型。 | 逐流覆盖台账、计量/采样、分配、原始/最终产量、身份和去向记录 |
| `dq_complete_hatchery_nursery_culture_inputs` | `spat_supply_hatchery_and_nursery`; 场内育苗或中间培育培养投入 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：仅当报告主体控制使用微藻、培养基、附着基、采苗器或类似育苗投入的育苗、幼体、附着或中间培育操作时使用本行。 ; 流属性/单位：Mass, volume, or item count / kg, L, or item ; 数量规则：按批次和用途计量的育苗或中间培育投入数量 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每个苗种或稚贝批次，并在归一化后折算到每 1,000 kg 市场化参考产品 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_hatchery_nursery_records` ; 来源：`fao-hatchery-culture-bivalves-2004`, `fao-mediterranean-mussel-factsheet` ; 数量范围：推理性筛查估计，仅作诊断，不是默认、实证上限或完成阈值 ; 下限：0 ; 上限：500 ; 单位：kg or L hatchery input/1,000 kg marketable product ; 基准：场内育苗投入相对原始市场化阶段产量的初筛估计；kg 与 L 不能混合相加 ; 证据类型：推理估计（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_hatchery_nursery_water` | `spat_supply_hatchery_and_nursery`; 育苗和中间培育用水 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行覆盖场内育苗和中间培育使用的计量海水、淡水、工艺用水、补充水或循环系统置换水。 ; 流属性/单位：Mass or volume / kg or m3 ; 数量规则：实测取水、补充水、处理水或循环置换水量 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每个苗种或稚贝批次，并在归一化后折算到每 1,000 kg 市场化参考产品 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_water_quality_and_discharge_records_spat_supply_hatchery_and_nursery` ; 来源：`fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025` ; 数量范围：推理性筛查估计，仅作诊断，不是默认、实证上限或完成阈值 ; 下限：0 ; 上限：2000 ; 单位：m3/1,000 kg marketable product ; 基准：场内育苗供水相对原始市场化阶段产量的初筛估计 ; 证据类型：推理估计（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_hatchery_mortalities_settlement_residue_and_rejected_spat` | `spat_supply_hatchery_and_nursery`; 育苗死亡、附着残留和剔除稚贝 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录场内育苗或中间培育产生的卵、幼体、稚贝、附着基残留、有机残留、壳碎片以及剔除或死亡苗种。 ; 流属性/单位：Mass or count / kg or item ; 数量规则：实测或估算死亡数量、残留质量、剔除苗种以及处置或回收路径 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每个苗种或稚贝批次，并在归一化后折算到每 1,000 kg 市场化参考产品 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_mortality_residue_and_gear_records_spat_supply_hatchery_and_nursery` ; 数量范围：推理性筛查估计，仅作诊断，不是默认、实证上限或完成阈值 ; 下限：0 ; 上限：1 ; 单位：kg residue/kg accepted spat or seed ; 基准：育苗残留或死亡质量相对同阶段合格苗种质量的初筛估计 ; 证据类型：推理估计（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_growout_ropes_socks_floats_anchors_and_culture_gear` | `growout_husbandry`; 养成绳索、网套、浮子、锚和养殖器具 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录用于养殖单元准备、支撑、固定、防捕食、防污管理或采收通行而跨越前景边界的器具和材料。 ; 流属性/单位：Mass or item count / kg or item ; 数量规则：声明生产期内实测领用、布设、遗失、更换、回收或消耗的材料；可复用器具必须保留使用寿命和分配基准 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：技术特定（`technology_specific`） ; 归一化基准：每 1,000 kg 采收规格产品输出，或按生产期分配的器具服务量 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_culture_gear_and_area_records` ; 来源：`fao-mediterranean-mussel-factsheet`, `asc-farm-standard-2025` ; 数量范围：推理性筛查估计，仅作诊断，不是默认、实证上限或完成阈值 ; 下限：0 ; 上限：500 ; 单位：kg material/1,000 kg marketable product ; 基准：绳、网袋、浮子、锚、桩、架、盘等实际器材相对原始市场化阶段产量的初筛估计 ; 证据类型：推理估计（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_intentional_feed_fertilizer_or_algal_input` | `growout_husbandry`; 有意投喂、施肥或藻类投入 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：仅当贻贝养成有意使用饲料、施肥、池塘增肥、补充藻类或类似物料投入时使用本行。仅完整报告期内有意施用不存在的肯定证据可支持不适用；缺失记录不是零，场内育苗或亲本饲养仍须独立采集。 ; 流属性/单位：Mass or volume / kg, L, or active ingredient unit ; 数量规则：实测产品量、必要时的有效成分、施用目的和许可状态 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：按养成区域、批次，并在归一化后折算到每 1,000 kg 市场化产品 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_feed_fertilizer_and_chemical_records` ; 来源：`asc-farm-standard-2025` ; 数量范围：推理性筛查估计，仅作诊断，不是默认、实证上限或完成阈值 ; 下限：0 ; 上限：1000 ; 单位：kg or L input/1,000 kg marketable product ; 基准：实际路线的有意饲料、肥料、藻类或化学品相对原始市场化阶段产量的初筛估计；kg 与 L 不可混加 ; 证据类型：推理估计（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_growout_mortalities_shell_residue_biofouling_and_predator_damaged_mussels` | `growout_husbandry`; 养成死亡、壳残留、生物污损和捕食损伤贻贝 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录养成期间去除的死亡、脱落贻贝、破壳、捕食损伤个体、生物污损残留、分选损失和有机残留。 ; 流属性/单位：Mass or count / kg or item ; 数量规则：实测死亡数量、死亡质量、壳残留、生物污损残留以及处置、堆肥、回收或回投路径 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：按养成批次，并在归一化后折算到每 1,000 kg 市场化输出 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_mortality_residue_and_gear_records_growout_husbandry` ; 来源：`asc-farm-standard-2025` ; 数量范围：推理性筛查估计，仅作诊断，不是默认、实证上限或完成阈值 ; 下限：0 ; 上限：2 ; 单位：kg mortality or residue/kg marketable product ; 基准：养成死亡及残留质量相对原始市场化阶段产量的初筛估计 ; 证据类型：推理估计（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_recovered_or_lost_growout_gear_waste` | `growout_husbandry`; 回收或遗失的养成器具废物 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录废弃绳索、网套、网具、浮子、浮标、锚、木桩、夹具、扎带、破损器具和有记录的器具遗失。 ; 流属性/单位：Mass or item count / kg or item ; 数量规则：实测废弃、回收、循环利用、复用、处置或遗失器具材料及其去向 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每 1,000 kg 采收规格产品输出 ; 基准类型：过程输出（`process_output`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_mortality_residue_and_gear_records_growout_husbandry` ; 来源：`asc-farm-standard-2025` ; 数量范围：推理性筛查估计，仅作诊断，不是默认、实证上限或完成阈值 ; 下限：0 ; 上限：500 ; 单位：kg gear waste/1,000 kg marketable product ; 基准：丢弃或遗失的实际器材相对原始市场化阶段产量的初筛估计 ; 证据类型：推理估计（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_marine_area_occupation` | `growout_husbandry`; 海域占用 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：当选定 LCA 模型要求面积-时间或栖息地占用流时，本行记录许可或占用养殖面积和时长。 ; 流属性/单位：Area-time / ha-year or m2-day ; 数量规则：根据有效养殖面积和养殖时长计算，并披露共享场址分配 ; 数值来源模式：计算值（`calculated_value`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每 1,000 kg 采收规格产品输出 ; 基准类型：过程输出（`process_output`） ; 证据类型：由采集记录计算（`calculated_from_collection`） ; 采集协议：`cp_culture_gear_and_area_records` ; 来源：`fao-mediterranean-mussel-factsheet`, `asc-farm-standard-2025` | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_washing_depuration_relaying_and_live_holding_water` | `harvest_washing_depuration_and_packout`; 清洗、净化、暂养和活体暂养用水 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录采后使用的水、海水、融冰水或活体暂养系统用水。 ; 流属性/单位：Mass or volume / kg or m3 ; 数量规则：清洗、吐沙、净化、暂养支持、活体暂养、冷藏和清洁用水实测量 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每 1,000 kg 参考产品 ; 基准类型：参考流（`reference_flow`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_water_quality_and_discharge_records_harvest_washing_depuration_and_packout` ; 来源：`fao-bivalve-depuration-2008`, `who-fao-growing-area-guidance-2018` ; 数量范围：推理性筛查估计，仅作诊断，不是默认、实证上限或完成阈值 ; 下限：0 ; 上限：5000 ; 单位：m3/1,000 kg reference product ; 基准：清洗、净化、转养、暂养及冷却用水相对原始参考产量的初筛估计 ; 证据类型：推理估计（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_packaging_ice_and_dispatch_materials` | `harvest_washing_depuration_and_packout`; 包装、冰和发运材料 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录随产品跨越前景边界或用于活体/冷藏发运的袋、网袋、箱、内衬、保温容器、标签、托盘、扎带、冰、凝胶冰袋和可复用包装。 ; 流属性/单位：Mass or item count / kg or item ; 数量规则：实测包装件数和材料质量；计数记录需包含容量、皮重、冰质量和复用率 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：产品特定（`product_specific`） ; 归一化基准：每 1,000 kg 参考产品 ; 基准类型：参考流（`reference_flow`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_packaging_and_ice_records` ; 来源：`codex-cxs-292-2008` ; 数量范围：推理性筛查估计，仅作诊断，不是默认、实证上限或完成阈值 ; 下限：0 ; 上限：1000 ; 单位：kg packaging or ice/1,000 kg reference product ; 基准：包装或冷却物料相对原始参考产量的初筛估计；包装和冰分别实测 ; 证据类型：推理估计（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_offgrade_damaged_dead_or_broken_mussels_packout` | `harvest_washing_depuration_and_packout`; 包装出货中的降级、损伤、死亡或破损贻贝 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录清洗、净化、分级或包装期间移除的非市场化贻贝、包装死亡、破壳、分选剔除、异物、沉积物和残留。 ; 流属性/单位：Mass or count / kg or item ; 数量规则：按去向和原因实测剔除质量或数量 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每 1,000 kg 参考产品 ; 基准类型：参考流（`reference_flow`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_mortality_residue_and_gear_records_harvest_washing_depuration_and_packout` ; 来源：`codex-cxs-292-2008`, `fao-bivalve-depuration-2008` ; 同阶段动物材料拒收比例诊断：仅对相同物理状态且不含新增水、包装、沉积物或异物的实际进料动物质量，才有 0 <= r <= 1。该关系不限制混合残留或每最终 Q 的数量；须独立采集各实际流的范围证据。 | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_packout_wastewater_and_sludge` | `harvest_washing_depuration_and_packout`; 包装出货废水和污泥 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录采后操作排出的清洁、清洗、净化、暂养支持、冷藏或活体暂养用水和污泥。 ; 流属性/单位：Volume or mass / m3 or kg ; 数量规则：实测或计算排放体积、污泥质量和处理路径 ; 数值来源模式：计算值（`calculated_value`） ; 适用范围：场址特定（`site_specific`） ; 归一化基准：每 1,000 kg 参考产品 ; 基准类型：参考流（`reference_flow`） ; 证据类型：由采集记录计算（`calculated_from_collection`） ; 采集协议：`cp_water_quality_and_discharge_records_harvest_washing_depuration_and_packout` ; 来源：`fao-bivalve-depuration-2008`, `who-fao-growing-area-guidance-2018` ; 数量范围：推理性筛查估计，仅作诊断，不是默认、实证上限或完成阈值 ; 下限：0 ; 上限：5000 ; 单位：m3 wastewater or kg sludge/1,000 kg reference product ; 基准：清洗、净化、清洁、暂养及冷却的实际废水或污泥相对原始参考产量的初筛估计；m3 与 kg 不可混加 ; 证据类型：推理估计（`reasoned_estimate`） | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_complete_delivery_rejects_or_mortalities` | `delivery_to_declared_gate`; 交付剔除或死亡 | 为每个实际组成流分别履行以下采集责任；类别筛查界限不作为子流默认或自动截断：本行记录受控交付期间的产品死亡、包装损坏、容器泄漏或被拒收产品。 ; 流属性/单位：Mass or count / kg or item ; 数量规则：按原因和去向实测交付剔除质量或数量 ; 数值来源模式：前景记录（`foreground_record`） ; 适用范围：路径特定（`route_specific`） ; 归一化基准：每 1,000 kg 送达参考产品 ; 基准类型：参考流（`reference_flow`） ; 证据类型：采集记录（`collected_record`） ; 采集协议：`cp_delivery_and_route_records` ; 同阶段动物材料拒收比例诊断：仅对相同物理状态且不含新增水、包装、沉积物或异物的实际进料动物质量，才有 0 <= r <= 1。该关系不限制混合残留或每最终 Q 的数量；须独立采集各实际流的范围证据。 | 实际记录、独立身份与数量及范围/不确定性依据 |
| `dq_range_spat_seed_or_nursery_stock_input` | `spat_supply_hatchery_and_nursery`; `spat_seed_or_nursery_stock_input` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：暂定稚贝或苗种投入筛选估计 ;   - 范围角色：默认估计（`default_estimate`） ;   - 下限：0.001 ;   - 上限：2 ;   - 单位：kg spat or seed live mass/kg marketable product ;   - 基准：相对市场化输出的宽泛首轮稚贝或苗种质量投入 ;   - 基准类型：过程输出（`process_output`） ;   - 证据类型：推理估算（`reasoned_estimate`） ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_hatchery_nursery_electricity` | `spat_supply_hatchery_and_nursery`; `hatchery_nursery_electricity` | 独立采集本流自身范围/不确定性证据。推理筛查背景：下限 0，上限 5000，原单位 kWh/1,000 kg marketable product，原基准为场内育苗用电相对原始市场化阶段产量。这些数值不是实证、实际流默认、最终Q归一化范围或强制截断；每个实际流需独立证据。保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000，否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量换算另需实测密度、温压或热值及不确定性证据，不能把MJ、L或tonne-km改标签成kg。原始比例若为同状态实测生物量子集/可用总量，0..1仅用于该原始诊断，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_accepted_spat_or_seed_for_growout` | `spat_supply_hatchery_and_nursery`; `accepted_spat_or_seed_for_growout` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断：不设跨苗期生长的质量存活率上限、包装输入/最终输出的统一上限或内部量1..1恒等式。分别实测阶段S、实际损失/库存和最终Q；只有真正最终门Q/Q才是1。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_accepted_spat_or_seed_transfer_to_growout` | `growout_husbandry`; `accepted_spat_or_seed_transfer_to_growout` | 独立采集本流自身范围/不确定性证据。推理筛查背景：下限 0.001，上限 2，原单位 kg accepted spat or seed/kg marketable product，原基准为实际合格苗种质量相对原始市场化阶段产量。这些数值不是实证、实际流默认、最终Q归一化范围或强制截断；每个实际流需独立证据。保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000，否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量换算另需实测密度、温压或热值及不确定性证据，不能把MJ、L或tonne-km改标签成kg。原始比例若为同状态实测生物量子集/可用总量，0..1仅用于该原始诊断，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_growout_electricity` | `growout_husbandry`; `growout_electricity` | 独立采集本流自身范围/不确定性证据。推理筛查背景：下限 0，上限 10000，原单位 kWh/1,000 kg marketable product，原基准为被动开放水域及有动力支持系统的实际用电相对原始市场化阶段产量。这些数值不是实证、实际流默认、最终Q归一化范围或强制截断；每个实际流需独立证据。保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000，否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量换算另需实测密度、温压或热值及不确定性证据，不能把MJ、L或tonne-km改标签成kg。原始比例若为同状态实测生物量子集/可用总量，0..1仅用于该原始诊断，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_growout_fuel_and_workboat_energy` | `growout_husbandry`; `growout_fuel_and_workboat_energy` | 独立采集本流自身范围/不确定性证据。推理筛查背景：下限 0，上限 1000，原单位 L diesel-equivalent/1,000 kg marketable product，原基准为直接控制燃料使用相对原始市场化阶段产量；L柴油当量不是实际柴油kg。这些数值不是实证、实际流默认、最终Q归一化范围或强制截断；每个实际流需独立证据。保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000，否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量换算另需实测密度、温压或热值及不确定性证据，不能把MJ、L或tonne-km改标签成kg。原始比例若为同状态实测生物量子集/可用总量，0..1仅用于该原始诊断，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_harvest_size_farmed_mussels` | `growout_husbandry`; `harvest_size_farmed_mussels` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断： ; - 数量范围：养成采收质量平衡 QA 校验 ;   - 范围角色：QA 校验（`qa_guardrail`） ;   - 下限：0 ;   - 上限：1 ;   - 单位：kg/kg total live biomass before harvest adjustment ;   - 基准：声明批次中可得生物量的采收市场规格比例 ;   - 基准类型：过程输出（`process_output`） ;   - 证据类型：方法公式（`method_formula`） ;   - 来源：`mass-balance-identity` ;  ;  保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000。否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量转换另需密度/温压/热值证据，不能换标签。原始比例若为同状态实测生物量子集/可用总量，0..1仅适用于该原始诊断比例，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_harvested_mussels_input_to_packout` | `harvest_washing_depuration_and_packout`; `harvested_mussels_input_to_packout` | 独立采集本流自身范围/不确定性证据。不设包装输入/最终输出的统一上限或内部量1..1恒等式。分别实测阶段S、实际损失/库存和最终Q；只有真正最终门Q/Q才是1。保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000，否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量换算另需实测密度、温压或热值及不确定性证据，不能把MJ、L或tonne-km改标签成kg。原始比例若为同状态实测生物量子集/可用总量，0..1仅用于该原始诊断，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_packout_electricity` | `harvest_washing_depuration_and_packout`; `packout_electricity` | 独立采集本流自身范围/不确定性证据。推理筛查背景：下限 0，上限 10000，原单位 kWh/1,000 kg reference product，原基准为采收、清洗、净化、暂养、冷却和包装用电相对原始参考产量。这些数值不是实证、实际流默认、最终Q归一化范围或强制截断；每个实际流需独立证据。保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000，否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量换算另需实测密度、温压或热值及不确定性证据，不能把MJ、L或tonne-km改标签成kg。原始比例若为同状态实测生物量子集/可用总量，0..1仅用于该原始诊断，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_marketable_farmed_mussel_reference_product` | `harvest_washing_depuration_and_packout`; `marketable_farmed_mussel_reference_product` | 独立采集本流自身范围/不确定性证据。下列按声明基准表达的推理筛选背景不是最终Q归一化范围或强制截断：不设跨苗期生长的质量存活率上限、包装输入/最终输出的统一上限或内部量1..1恒等式。分别实测阶段S、实际损失/库存和最终Q；只有真正最终门Q/Q才是1。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_saleable_offgrade_mussel_coproduct` | `harvest_washing_depuration_and_packout`; `saleable_offgrade_mussel_coproduct` | 独立采集本流自身范围/不确定性证据。推理筛查背景：下限 0，上限 1，原单位 kg off-grade saleable product/kg reference product，原基准为可售降级产品质量相对原始参考产品质量；不是物理上限。这些数值不是实证、实际流默认、最终Q归一化范围或强制截断；每个实际流需独立证据。保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000，否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量换算另需实测密度、温压或热值及不确定性证据，不能把MJ、L或tonne-km改标签成kg。原始比例若为同状态实测生物量子集/可用总量，0..1仅用于该原始诊断，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_product_transferred_to_controlled_delivery` | `delivery_to_declared_gate`; `product_transferred_to_controlled_delivery` | 独立采集本流自身范围/不确定性证据。不设包装输入/最终输出的统一上限或内部量1..1恒等式。分别实测阶段S、实际损失/库存和最终Q；只有真正最终门Q/Q才是1。保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000，否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量换算另需实测密度、温压或热值及不确定性证据，不能把MJ、L或tonne-km改标签成kg。原始比例若为同状态实测生物量子集/可用总量，0..1仅用于该原始诊断，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_controlled_delivery_fuel_or_transport_service` | `delivery_to_declared_gate`; `controlled_delivery_fuel_or_transport_service` | 独立采集本流自身范围/不确定性证据。推理筛查背景：下限 0，上限 1000，原单位 tonne-km/1,000 kg delivered reference product，原基准为受控运输服务相对原始送达参考产量；tonne-km不是柴油kg。这些数值不是实证、实际流默认、最终Q归一化范围或强制截断；每个实际流需独立证据。保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000，否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量换算另需实测密度、温压或热值及不确定性证据，不能把MJ、L或tonne-km改标签成kg。原始比例若为同状态实测生物量子集/可用总量，0..1仅用于该原始诊断，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_range_delivered_farmed_mussels` | `delivery_to_declared_gate`; `delivered_farmed_mussels` | 独立采集本流自身范围/不确定性证据。不设包装输入/最终输出的统一上限或内部量1..1恒等式。分别实测阶段S、实际损失/库存和最终Q；只有真正最终门Q/Q才是1。保留原始分母S及单位；仅在原每1000kg确属同一最终Q/形态/群体时才准确除以1000，否则以原始数量或实测S恢复分子后按Q换算。体积/燃料能量换算另需实测密度、温压或热值及不确定性证据，不能把MJ、L或tonne-km改标签成kg。原始比例若为同状态实测生物量子集/可用总量，0..1仅用于该原始诊断，不是每Q交换上限。 | 同批原始记录、阶段产出和独立范围/换算证据 |
| `dq_stage_coverage` | `spat_supply_hatchery_and_nursery` | 实际自有孵化/育苗中的亲本、卵、幼虫、定居/附着苗及各生长阶段，以及每种实际微藻/饲料/培养基/材料/水/药剂/资产/废物/排放都要独立采集并补卡。幼体/苗种卡不能覆盖亲本或所有生命阶段；保留供应/祖代、实际受控生产、期初/期末/失败批次及下一代/转移负担，不能因养成滤食或无有意投饲漏掉自有孵化/育苗食物和亲本资源。 | 本节点阶段台账、独立数量/单位/范围、原始来源和去向 |
| `dq_actual_delivery_completion` | `delivery_to_declared_gate`; `gate_release` | 实际参考门前每条物流、完整服务或自有燃料/电力/资产/冷却/补水冰/气体、各物质排放、损失/拒收及水/包装/货物去向分别建立独立卡。运输载荷含实际随行水、冰和包装；空返虽无货载仍计实际燃料/车辆服务及明确分配。完整服务与其已含组成不重计。实际最终门验收正Q、状态、接收者/时间及唯一到门路径必须独立证明；未知不默认旁路。 | 路线/服务范围、实际载荷、仪表和校准称量、物理接收/验收及去向 |
| `dq_actual_water_and_emissions` | all nodes | 外部自然取水、供应水产品、内部循环及实际返排水分别计量，内部循环不再从外部取水重复扣减。生成废水/固体废物为实际输出；直接释放按各物质/化学基准和真实介质分别输出，不能作资源输入。净营养物差额/滞留仅用于独立平衡诊断，不自动成为负基本流或避免负荷。原废水来源和处理状态须相容，不能套用任意处理阶段UUID。 | 实际水/物质平衡、来源/去向、处理范围和物质因子/采样证据 |
| `dq_actual_amount_modes_and_form` | 全部实际卡及产品形态 | 根据实际方法填写数量证据模式：直接计量用foreground_record/collected_record，计算量用calculated_value/calculated_from_collection并保留实测输入、公式、因子/单位/来源和不确定性；候选模板不替代实际记录。所有参考产品须保持整只带壳，活体参考还须存活。去壳肉或纯组织参考产品均不在本方法范围内，即使已测收率也不能纳入；不得用其质量替代整只动物Q，或通过补采义务扩大范围。 | 原始计量或计算证据、同批实际状态/形态、测量及物理去向 |
| `dq_packout_mass_closure` | `harvest_washing_depuration_and_packout` | 按同一报告期、可追溯批次/物种及声明的完整动物产品形态执行 reconcile_packout_mass。期初期末库存必须实测，不得采用默认值；跨期结转其累计负担。向后转移产品、可销售降级品、拒收品和其他动物损失必须互斥：已计入拒收品的死亡或损失不得再次扣除。evidenced_net_animal_mass_change 是有独立证据的有符号动物物理质量变化，不是无法解释的差额，也不是重复计入的接收或损失。游离承载水、冰和包装另立台账，排除于动物净称量之外，不得又把其排水作为动物损失扣除。仅有证据证明期初期末库存均为零且无额外动物质量变化时，才可使用简化的零库存公式；未知不得当零。 | 有日期的动物净称量、期初期末库存台账、互斥去向、独立物理变化证据及负担结转记录 |

## 9. 验证规则

前景数据包仅在满足以下条件时符合本 PCR：

- 参考产品归一化为声明活、鲜或冷藏产品形态下的 1 kg 养殖贻贝；
- 声明物种或物种组、养殖系统、稚贝或苗种来源、采收区、产品状态、整只带壳产品基准、规格或计数等级、净化或暂养状态、地理范围、声明边界、暂养时长和包装状态；
- 稚贝或苗种投入、养殖面积或器具、能源、燃料、受控用水、死亡或残留、采收、包装出货、包装以及相关交付均存在，或明确标记为不适用并给出理由；
- 计数、袋、网袋、箱、绳索、网套、簇或体积记录包含实际净质量、皮重、每 kg 个数、平均规格或其他透明 kg 换算；
- 养成记录明确说明是否使用外部饲料、有意施肥、池塘增肥、补充藻类、防捕食化学品或消毒剂；
- 水记录区分泵送、供应、处理、净化、活体暂养和排放水与环境开放水体交换；
- 包装出货质量平衡能够核对采收投入、参考产品、可销售降级产品、剔除以及暂养或沥水损失；
- 同场址多物种、共享区域、共享器具或多等级分配在数据集作为背景或二级数据集使用前完成记录；
- 任何过滤、营养盐去除、碳储存或栖息地服务主张均排除在产品清单之外，除非声明了单独经审查的方法和有来源支撑的数量。

最终数据包验证须逐项回读 `dq_atomic_completion` 和每一 `dq_complete_` 要求：所有适用义务均已落实为具有独立数量、单位、来源、归一化、范围/不确定性、去向和核实 UUID 的具体交换。仅在有证据不存在时才可标记 not_applicable；未知身份、缺失数量、未识别去向或未落实的义务均阻断最终数据包完成。PCR 的静态检查通过不等于这项验证通过。

最终数据包只有一个真实gate_release及一个declared_gate_reference。每项实际交换及每项适用dq_complete_/dq_stage_/dq_actual_/dq_range_义务均须落实为独立原子卡、自身数量/原生单位、实际采集/计算及范围/不确定性证据、同一最终Q归一化、去向和已验证UUID。未知身份、活动/路线/门、数量、范围证据或去向阻断完成及验证，不能置零、默认旁路或仅披露后忽略。PCR静态检查通过不证明真实数据包完整。

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_form_scope` | 市场规格产品交接及最终参考 | 市场规格动物交接及最终参考产品须保留实际整只带壳形态。生鲜去壳或纯组织最终参考不在本方法范围内。实测收率或第8节补采完成声明均不能扩大该边界。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可发布为 `secondary_dataset` 或 `background_dataset` 的前景生产包 |
| downstream_use | 作为养殖贻贝投入用于海产品加工、餐饮、零售、冷链、活体海产品流通或区域食品产品生命周期模型 |
| allowed_use | 仅整只带壳方法：具有声明物种、养殖系统、产品状态、采收区、净化状态、边界和质量披露的养殖贻贝活、鲜或冷藏数据集 |
| excluded_use | 本方法范围外的生鲜去壳/纯组织参考产品；野生采捕、冷冻/烟熏/干制/盐腌/盐水浸泡/加工贻贝、通用贝类数据集、牡蛎、扇贝、蛤、鸟蛤、赤贝、鲍鱼、作为苗种销售的稚贝、贝壳产品数据集，以及缺少物种、养殖系统或产品状态披露的数据集 |
| required_metadata | canonical PCR id; CPC code; species or species group; culture system; spat or seed source; harvest area; product state; whole shell-on basis; size or count grade; purification or depuration status; geography; declared gate; holding or chilling duration; packaging state; data period; allocation basis |
| required_quality_disclosure | missing UUIDs; unresolved mussel product, spat, shell residue, gear, habitat, seawater, discharge, or depuration treatment flow identities; no-feed declaration; water and purification records; gear loss records; mortality completeness; pack-out mass balance; partial-cycle or proxy data use |
| update_trigger | 当 CPC 映射变化，Tiangong 贻贝、稚贝、壳残留、水、排放、器具或栖息地流身份更新，Codex、FAO、ASC 或同等水产养殖与卫生指导变化，或经审查前景数据集提供更好的来源支撑范围时修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-292-2008` | standard | <https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ru/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B292-2008%252FCXS_292e.pdf> | 活体和生食双壳贝产品定义、活体产品处理、标签、净含量声明、净化背景、卫生和质量因素 |
| `fao-hatchery-culture-bivalves-2004` | handbook | <https://openknowledge.fao.org/handle/20.500.14283/y5720e> | 双壳贝育苗、幼体、附着、中间培育、苗种生产、用水和培养投入过程背景 |
| `fao-bivalve-depuration-2008` | handbook | <https://www.fao.org/4/i0201e/i0201e.pdf> | 净化中心运行、过程控制、水处理、采后活体暂养和 HACCP 导向的净化背景 |
| `who-fao-growing-area-guidance-2018` | official_guidance | <https://www.who.int/publications/i/item/9789241514750> | 养殖区监测、卫生计划背景、采收区分类以及 Codex 要求与双壳贝生产控制之间的联系 |
| `fao-mediterranean-mussel-factsheet` | official_guidance | <https://www.fao.org/fishery/culturedspecies/mytilus_galloprovincialis/en> | 地中海贻贝式系统的筏架、绳索、采苗器和养成路径背景 |
| `asc-farm-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | 当前 ASC 养成场址范围、运营过程边界、追溯、水、能源、健康、法律、器具和环境数据要求 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for spat acceptance, grow-out, pack-out, discharge, delivery, and reference-flow normalization. | QA 校验、存活、得率、包装出货核对、包装换算、交付服务计算和归一化规则 |
| `pcr-gate-accounting-method` | method_factor | 本PCR第3—9节声明的前瞻最终门、独立阶段计量和归一化方法；不是外部经验范围 | 唯一最终Q/Q、原生q/Q、原始批次/每1000kg/阶段S换算及逐流完成要求 |
