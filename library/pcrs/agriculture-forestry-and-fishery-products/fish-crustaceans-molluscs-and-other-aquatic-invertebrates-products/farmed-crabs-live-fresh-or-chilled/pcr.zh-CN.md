---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-crabs-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 养殖蟹，活、鲜或冷藏

## 1. 范围与适用性

本 PCR 用于构建 CPC 3.0 `04312` 类别下养殖蟹的前景数据包，产品上市状态为活、鲜或冷藏。适用范围包括蟹类水产养殖路线中的亲蟹或苗种来源、育苗、暂养、养成、由报告主体控制投喂和管理周期的育肥、收获、分级、活体暂养、冷藏、包装，以及在声明门点放行。

覆盖系统可包括池塘、围栏、网箱、单体盒、循环水养殖系统、池槽、咸淡水系统、依法许可的红树林边缘系统、多养种混养，以及声明的一体化养殖系统。不适用产品包括野捕蟹、捕捞后仅暂养或分级的野生蟹、冷冻、干制、盐渍、盐水浸渍、熟制、罐装、拆肉、蟹黄单独产品、调制或保藏蟹产品、作为单独养殖投入出售的蟹苗，以及作为单独产品建模的蟹壳或加工残余物。

合规数据集必须提供由前景主体控制的养殖、育肥、育苗或养成记录。野捕后仅进行活体暂养、冷藏、分级或发运的活动不属于本 PCR，应归入相应野生蟹类别。

仅暂养、运输、保鲜、包装或转售不能构成养殖生产；须有受控生物生长、繁育或育肥的实际活动证据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-crabs-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04312`, `Farmed crabs, live, fresh or chilled`; narrower |
| covered_products | 来自声明水产养殖、育苗、养成或育肥系统，并以活、鲜或冷藏状态销售的养殖蟹 |
| excluded_products | 野捕蟹；捕捞后仅暂养、冷藏、分级或发运的野生蟹；冷冻、干制、盐渍、盐水浸渍、熟制、罐装、拆肉、蟹黄单独产品、调制或保藏蟹产品；作为苗种出售的蟹苗；作为单独产品的蟹壳、蜕壳和残余物 |
| representative_product | 达到声明商品规格和声明产品形态的活体或冷藏养殖蟹 |
| production_route | 亲蟹或苗种供应、受报告主体控制的育苗或暂养、养成或育肥管理、收获、分级、活体暂养或冷藏、包装，以及声明门点放行 |
| market_state | 活、鲜或冷藏蟹，并声明物种、苗种或亲蟹来源、养殖系统、规格等级、整只或声明产品基准、暂养或冷藏条件、包装状态和门点 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为活、鲜或冷藏商品的养殖蟹 |
| How much | 1 kg |
| How well | 声明物种或物种组、养殖证据、养殖系统、活/鲜/冷藏状态、整只或声明产品基准、规格等级、收获和暂养条件，以及门点 |
| How long or cycle | 归一化至适销产品输出的一个养殖生产批次、育肥批次、收获批次或报告期 |
| reference_flow_link | `qualified_product_gate_release` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明最终门实际状态的养殖螃蟹产品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | species or species group; broodstock, megalopa, juvenile, soft-shell, fattening, or stocked-crab source; culture system; farmed proof or controlled husbandry period; product state; whole, live, fresh, chilled, soft-shell, fattened, or declared product basis; size grade or count per kg; sex or maturity class when commercially material; moisture or drainage basis; geography and declared gate; holding or chilling duration; feed regime; water salinity and exchange; health, biosecurity, permit, or certification status |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

质量是主要参考基准。按只数、篮、箱、桶、活体暂养槽或规格等级记录的数据，只有在保留净质量、每 kg 只数或平均个体质量、产品形态、抽样或皮重方法时，才可用于归一化。

声明一个实际最终门、实际产品形态/状态和正值合格净交付质量。若纳入 delivery_to_declared_gate，则先完成实际交付、损失和验收再放行；否则从包装阶段实际交接。不得任选更早分母、固定内部产量、把两路相加或默认交付状态；未纳入后续运输须明确记录。保留全部前阶段实际收率、原始批次及每1000kg口径，通过明确换算统一为每1kg最终参考。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `final_gate_normalization` | 所有清单行 | 实际交换的原生属性 | 每1kg最终参考的原生单位 | 原始批次/事件量先按实际所有权与分配归属，再除以 declared_gate_release 的正值验收合格净kg；同边界每1000kg最终产品值除以1000。阶段产出分母须通过实测批次流转和收率转换，禁止直接当最终分母；鱼/动物生物批次不是机器M。 |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明活、鲜或冷藏产品形态下的 kg 养殖蟹。 |
| `farmed_production_evidence` | 全部数据集 | 记录身份和生产证据 | 声明记录 | 数据集记录必须证明受控水产养殖、养成、暂养或育肥活动，而不是野捕后仅暂养、冷藏、分级或发运。 |
| `product_form_mass_basis` | 整只、软壳、育肥、活、鲜或冷藏记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品质量必须声明活体整只质量、冷藏整只质量、软壳蟹产品质量、育肥蟹质量、沥干质量或其他合同声明基准。不同基准之间只能用实测得率证据转换。 |
| `count_to_mass_conversion` | 投苗、死亡、分级、收获、销售和按只数规格记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按只数记录的数据在归一化至 kg 参考产品前，必须包含每 kg 只数或平均个体质量、规格等级、抽样方法和产品形态。 |
| `life_stage_identity` | 亲蟹、卵、幼体、大眼幼体、幼蟹、软壳蟹和转移存量 | 质量或只数 | kg、item 或阶段只数 | 生命阶段记录必须保留物种、生命阶段、供应商或育苗场、批次、只数、可测质量、健康状态和转移日期。 |
| `feed_mass_basis` | 杂鱼、贝肉、配合饲料、活饵和补充饲料 | 质量 | kg | 饲料记录必须声明湿基、干基、投喂基、活饵或配合饲料基准。不同基准之间只能用实测水分、供应商数据或保留的养殖配方转换。 |
| `water_salinity_and_volume` | 育苗、暂养、养成、育肥、活体暂养、清洗、冷藏和废水 | 盐度、质量或体积 | ppt、kg 或 m3 | 保留受控用水体积、盐度、换水量、补水量、循环水和排放基准。 |
| `energy_and_fuel_inventory` | 水泵、曝气、增氧、换水、过滤、照明、冷藏、活体暂养、收获、船舶、车辆和配送 | 能源或燃料数量 | kWh、MJ、L 或 kg | 在归一化至参考流之前，记录原始电力、燃料、氧气或能源载体单位。 |
| `chemical_and_health_treatment_basis` | 消毒剂、益生菌、药物、石灰、水处理化学品、氧气和盐 | 质量、体积或有效成分 | kg、L、g active ingredient 或 m3 gas | 记录产品数量、适用时的有效成分、处理目的、诊断或健康计划链接、合法状态和上市合格性影响。 |
| `packaging_and_ice_basis` | 篮、箱、袋、内衬、标签、保温容器、冰、冰袋、充氧袋和托盘 | 质量或件数 | kg 或 item | 包装、冰、活体包装和容器必须保留材料类型、件数、皮重或装填质量、重复使用率和目的地，再进行归一化。 |

## 5. 系统边界

默认边界覆盖由前景主体控制的养殖蟹生产，直至声明的养殖场、收获、包装场、发运或配送门点：

1. 亲蟹、卵、幼体、大眼幼体、幼蟹、蟹苗、软壳蟹或育肥存量来源；当报告主体控制时，包括现场育苗和暂养；若由其他育苗场、捕捞者、收集者或养殖场供应，则需披露购入存量。
2. 育苗、暂养、养成和育肥管理，包括投苗、投喂、进水和换水、曝气、增氧、过滤、盐度控制、健康管理、生物安全、蜕壳管理、死亡和直接受控维护。
3. 收获、分级、清洗、活体暂养、冷藏、包装和声明门点放行。
4. 当参考流是超出养殖场、收获、发运或包装场门点的交付产品时，包括至声明门点的配送。

资本品和长寿命基础设施仅在声明数据包范围要求时纳入。外购饲料、蟹苗、大眼幼体、幼蟹、包装、冰、氧气、电力、燃料和化学品需要上游数据集，除非同一主体控制并在前景数据包中报告其生产。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | declared_broodstock_larval_megalopa_juvenile_seed_crab_or_fattening_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | 当前 CPC 3.0 产品类别 `04312`, `Farmed crabs, live, fresh or chilled` |
| recursive_input_rule | 用于生产商品蟹的养殖亲蟹、幼体、大眼幼体、幼蟹、蟹苗、软壳蟹或育肥存量，作为声明的生物起始条件记录，并披露供应商、育苗场、养殖场、生命阶段、来源和健康信息，不递归建模为成品参考产品输出 |
| upstream_dataset_requirement | 亲蟹、育苗、苗种、幼蟹、软壳蟹、育肥存量或供应商数据集；或记录来源、物种、批次、只数或质量、生命阶段、健康或生物安全状态、移动许可，以及认证或许可证明 |
| disclosure | 披露物种、养殖系统、生物起始条件、养殖生产证据、放养密度、投喂制度、水源、盐度和换水、曝气或增氧、健康处理、蜕壳和死亡记录、收获和暂养条件、产品形态、包装状态、声明门点，以及未解析的 Tiangong UUID 替代项 |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| broodstock_hatchery_nursery_and_stocking | 亲蟹、育苗、暂养与投苗 | required | 必须声明生物起始条件；当报告主体控制现场育苗和暂养时纳入相关行 | 前景/上游桥接 | 进入养成或育肥的可用蟹苗、大眼幼体、幼蟹或投放蟹 |
| growout_and_fattening_husbandry | 养成与育肥管理 | required |  | 前景生产 | 最终处理前的收获规格蟹 |
| harvest_live_holding_chilling_and_packout | 收获、活体暂养、冷藏与包装 | required |  | 前景整理和门点放行 | 声明的适销活、鲜或冷藏蟹 |
| delivery_to_declared_gate | 至声明门点的配送 | conditional | 当参考流为超过养殖场、收获、发运或包装场门点的交付产品时纳入 | 前景运输 | 声明门点的交付产品 |
| declared_gate_release | 声明最终门验收与放行 | required | 每个合格批次；先完成实际纳入的可选交付 | 唯一最终参考、实际状态和拒收；无虚构重复作业 | 最终验收合格净质量1千克 |

### 过程：亲蟹、育苗、暂养与投苗（`broodstock_hatchery_nursery_and_stocking`）

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 活亲蟹 (`stock_broodstock`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活亲蟹
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### 活蟹幼体 (`stock_larvae`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活蟹幼体
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### 活大眼幼体蟹 (`stock_megalopae`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活大眼幼体蟹
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### 活幼蟹 (`stock_juveniles`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活幼蟹
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### 用于实证育肥的活蟹 (`stock_fattening_stock`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：用于实证育肥的活蟹
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### 声明供应方和电压的电力 (`broodstock_hatchery_nursery_and_stocking_electricity`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明供应方和电压的电力
- 流属性/单位：Net calorific value / kWh
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### 声明来源和处理状态的外供液态水 (`broodstock_hatchery_nursery_and_stocking_supplied_water`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明来源和处理状态的外供液态水
- 流属性/单位：Mass / kg
- 数量规则：仅本项外供水独立实测质量；体积计量须有实际温度/盐度/密度。自然取水与内部循环另记，不将循环量再从外部取水扣减或重复增加供应负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

###### 氧气 (`broodstock_hatchery_nursery_and_stocking_gaseous_oxygen`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：仅实际外购气态氧独立计量质量，记录纯度、压力、温度和交付状态；不把空气曝气、溶解氧监测或制氧设备用电当成购买氧气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 按实际物种和生命阶段交接的活养殖螃蟹存量 (`accepted_stock_transfer`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：按实际物种和生命阶段交接的活养殖螃蟹存量
- 流属性/单位：Mass / kg
- 数量规则：同物种、生命阶段和批次的实测可接受净湿生物量与辅助计数；记录所有孵化/培育增长、转运、死亡、拒收与源/接收交接号。按最终合格净交付质量归一化，不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking`

##### 废物流

##### 基本流

### 过程：养成与育肥管理（`growout_and_fattening_husbandry`）

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 养成接收的实际物种与生命阶段活养殖螃蟹存量 (`stock_received_for_growout`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：养成接收的实际物种与生命阶段活养殖螃蟹存量
- 流属性/单位：Mass / kg
- 数量规则：独立实测本单元接收的净湿生物量，按物种、生命阶段、批次和交接号核对 accepted_stock_transfer 或真实外购来源及上游负荷；按最终合格净交付质量归一化，内部量不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_fattening_husbandry`

###### 声明供应方和电压的电力 (`growout_and_fattening_husbandry_electricity`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明供应方和电压的电力
- 流属性/单位：Net calorific value / kWh
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_fattening_husbandry`

###### 柴油 (`growout_and_fattening_husbandry_diesel`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_fattening_husbandry`

###### 声明来源和处理状态的外供液态水 (`growout_and_fattening_husbandry_supplied_water`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明来源和处理状态的外供液态水
- 流属性/单位：Mass / kg
- 数量规则：仅本项外供水独立实测质量；体积计量须有实际温度/盐度/密度。自然取水与内部循环另记，不将循环量再从外部取水扣减或重复增加供应负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_fattening_husbandry`

###### 氧气 (`growout_and_fattening_husbandry_gaseous_oxygen`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：仅实际外购气态氧独立计量质量，记录纯度、压力、温度和交付状态；不把空气曝气、溶解氧监测或制氧设备用电当成购买氧气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_fattening_husbandry`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收获前活体养殖螃蟹动物净质量 (`harvest_size_farmed_crabs_before_final_handling`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：收获前活体养殖螃蟹动物净质量
- 流属性/单位：Mass / kg
- 数量规则：按相同批次、物种、实际生命阶段/产品状态和交接号实测净动物质量，记录计数、增长、损失与去向；按唯一最终门合格净质量归一化，内部量不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_fattening_husbandry`

##### 废物流

##### 基本流

###### 二氧化碳（化石），排放到空气，未指定 (`growout_and_fattening_husbandry_fossil_co2`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：仅本节点实有柴油燃烧的化石二氧化碳，按实测燃料及独立适用碳含量/氧化率或排放因子证据计算，或直接测量；不得用通用因子或供应链排放替代；按最终门净参考质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_fattening_husbandry`

### 过程：收获、活体暂养、冷藏与包装（`harvest_live_holding_chilling_and_packout`）

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 实际状态养殖螃蟹动物净质量（最终门前实测交接） (`harvest_size_crabs_received_for_final_handling`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：实际状态养殖螃蟹动物净质量（最终门前实测交接）
- 流属性/单位：Mass / kg
- 数量规则：按相同批次、物种、实际生命阶段/产品状态和交接号实测净动物质量，记录计数、增长、损失与去向；按唯一最终门合格净质量归一化，内部量不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

###### 声明供应方和电压的电力 (`harvest_live_holding_chilling_and_packout_electricity`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明供应方和电压的电力
- 流属性/单位：Net calorific value / kWh
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

###### 声明来源和处理状态的外供液态水 (`harvest_live_holding_chilling_and_packout_supplied_water`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明来源和处理状态的外供液态水
- 流属性/单位：Mass / kg
- 数量规则：仅本项外供水独立实测质量；体积计量须有实际温度/盐度/密度。自然取水与内部循环另记，不将循环量再从外部取水扣减或重复增加供应负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

###### 氧气 (`harvest_live_holding_chilling_and_packout_gaseous_oxygen`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：仅实际外购气态氧独立计量质量，记录纯度、压力、温度和交付状态；不把空气曝气、溶解氧监测或制氧设备用电当成购买氧气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

###### 固态水冰 (`harvest_live_holding_chilling_and_packout_water_ice`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：固态水冰
- 流属性/单位：Mass / kg
- 数量规则：本项实际固态水冰独立实测质量，分清外购与自制。自制冰保留制冰水和能量，不再重复采购冰上游负荷；融冰、水体与运输实载分别核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际状态养殖螃蟹动物净质量（最终门前实测交接） (`marketable_farmed_crabs_live_fresh_or_chilled`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：实际状态养殖螃蟹动物净质量（最终门前实测交接）
- 流属性/单位：Mass / kg
- 数量规则：按相同批次、物种、实际生命阶段/产品状态和交接号实测净动物质量，记录计数、增长、损失与去向；按唯一最终门合格净质量归一化，内部量不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

###### 实际状态养殖螃蟹动物净质量（最终门前实测交接） (`offgrade_saleable_crabs`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：实际状态养殖螃蟹动物净质量（最终门前实测交接）
- 流属性/单位：Mass / kg
- 数量规则：按相同批次、物种、实际生命阶段/产品状态和交接号实测净动物质量，记录计数、增长、损失与去向；按唯一最终门合格净质量归一化，内部量不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

##### 废物流

##### 基本流

### 过程：至声明门点的配送（`delivery_to_declared_gate`）

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 按实际状态装载进入受控配送的养殖蟹产品（`product_transferred_to_controlled_delivery`）

本卡是来自 marketable_farmed_crabs_live_fresh_or_chilled 的实际装载接收，按批次、物种、状态、转移编号和装载时间配对。它发生在配送损失之前，既不是到货量，也不是最终验收参考量 Q。载体水、冰和包装另行记录。

- 选定流：按实际状态装载进入受控配送的养殖蟹产品
- 流属性/单位：Mass / kg
- 数量规则：独立实测实际装载动物净质量，匹配包装转出交接，保留实际状态、只数及成对记录。该实际装载量除以同一正值最终门验收动物净质量；不得以到货量、验收产出或固定 1 千克替代装载量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_delivery_to_declared_gate`

###### 柴油 (`delivery_to_declared_gate_diesel`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_delivery_to_declared_gate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 配送完成时按实际状态实测交接的养殖蟹动物净质量（`delivered_farmed_crabs`）

本卡为实际纳入配送完成后独立实测的到货动物质量。装载、到货、实际途中损失和任何库存只核对一次，到货转移与 qualified_product_gate_receipt 配对。最终门拒收和验收参考量 Q 另行确定，不能默认等于到货量。

- 选定流：配送完成时按实际状态实测交接的养殖蟹动物净质量
- 流属性/单位：Mass / kg
- 数量规则：独立实测实际到货动物净质量，保留成对装载记录、实际途中损失及去向。该实际到货量除以同一正值最终门验收动物净质量；不得假定装载量、到货量与验收产出相等。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_delivery_to_declared_gate`

##### 废物流

##### 基本流

###### 二氧化碳（化石），排放到空气，未指定 (`delivery_to_declared_gate_fossil_co2`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：仅本节点实有柴油燃烧的化石二氧化碳，按实测燃料及独立适用碳含量/氧化率或排放因子证据计算，或直接测量；不得用通用因子或供应链排放替代；按最终门净参考质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_delivery_to_declared_gate`

### 过程：声明最终门的验收与放行（`declared_gate_release`）

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 声明最终门接收的实际状态养殖螃蟹产品 (`qualified_product_gate_receipt`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明最终门接收的实际状态养殖螃蟹产品
- 流属性/单位：Mass / kg
- 数量规则：仅接收实际选定的包装完成量或已纳入受控交付后的到门量之一，按实测净动物质量、同批次状态和交接号计量；保留拒收和损失，内部输入不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_gate_acceptance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明最终门实际状态的养殖螃蟹产品 (`qualified_product_gate_release`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明最终门实际状态的养殖螃蟹产品
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_gate_acceptance`

##### 废物流

###### 最终验收拒收的养殖螃蟹动物体 (`final_gate_animal_rejects`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：最终验收拒收的养殖螃蟹动物体
- 流属性/单位：Mass / kg
- 数量规则：实际最终验收拒收且送实证处置去向的动物净质量；保留上游负荷并按合格最终净交付质量归一化，未知不得填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_gate_acceptance`

##### 基本流

## 7. 分配与共产品处理

当批次记录能够按物种、育苗批次、暂养单元、养成单元、育肥单元、收获批次、规格等级、性别或成熟度、产品形态、活/鲜/冷藏状态或目的地划分负荷时，应避免分配。在应用分配前，应先按实测质量区分活、鲜、冷藏、软壳、育肥、非目标等级和配送产品。

当同一前景批次在 CPC 04312 内产生多个可销售等级时，先拆分直接可归属活动。剩余共同负荷使用有证据的因果物理关系；仅在支持该关系时才可用产品质量。否则使用可比实际门点收入，并披露价格时期和敏感性；两类关系均无证据时保持分配未解决。蟹壳、蜕壳、死亡、废水、污泥、残饵、包装淘汰品和死蟹为废物或处理输出，除非它们以单独产品数据集和参考流销售。

若同一场址在同一池塘、围栏、网箱、单体盒、循环水系统、池槽、车辆、船舶或包装路线中生产多个物种或产品，共享电力、水、饲料制备、增氧、过滤、劳务服务和维护记录应依次优先按实测子过程用量、养殖单元、生物量-时间、面积-时间或产品质量分配。所选分配基准必须披露。

采用 GHG Protocol Product Standard 第9章的分配层级作为本PCR的显式方法选择：优先细分；其后使用可证实的因果物理关系；不适用时使用有证据的经济关系。不得仅因易测而默认质量分配。物理台账保留全部未分配数量，LCA视图独立标注并仅分配一次；各输出/节点份额总和为1，不用分配修补物理差额，内部转移不产生销售或替代信用。来源：`ghg-product-allocation`。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | broodstock, larvae, megalopae, juveniles, seed crabs, soft-shell crabs, stocked crabs, and accepted transfer output | hatchery transfer, supplier invoice, fisher or collector declaration where legally allowed, stocking log, health certificate, batch sheet | species; batch id; life stage; supplier, hatchery, collector, or farm; count; mean size; mean mass where measurable; total mass; sex or maturity class where relevant; health status; biosecurity status; transfer date；原始采集口径与原聚合责任：sum accepted counts and masses by batch; calculate mean size, survival, and transfer losses before harvest normalization | supplier records, hatchery logs, transfer documents, stocking count, sampling and weighing | item, stage count, carapace width, and kg | each receipt, hatchery batch, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, grow-out unit, pond, pen, cage, box, tank, or RAS module | 每 1 kg 参考流 | signed transfer records, sampling sheet, weighing record, health certificate, permit, or certification evidence；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_biological_stocking_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | broodstock, larvae, megalopae, juveniles, seed crabs, soft-shell crabs, stocked crabs, and accepted transfer output | hatchery transfer, supplier invoice, fisher or collector declaration where legally allowed, stocking log, health certificate, batch sheet | species; batch id; life stage; supplier, hatchery, collector, or farm; count; mean size; mean mass where measurable; total mass; sex or maturity class where relevant; health status; biosecurity status; transfer date；原始采集口径与原聚合责任：sum accepted counts and masses by batch; calculate mean size, survival, and transfer losses before harvest normalization | supplier records, hatchery logs, transfer documents, stocking count, sampling and weighing | item, stage count, carapace width, and kg | each receipt, hatchery batch, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, grow-out unit, pond, pen, cage, box, tank, or RAS module | 每 1 kg 参考流 | signed transfer records, sampling sheet, weighing record, health certificate, permit, or certification evidence；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_feed_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | live feed, formulated feed, trash fish, mollusc meat, broodstock feed, starter feed, and supplementary feed | feed issue log, supplier invoice, feed formulation, farm recipe, leftover record | feed product; feed type; wet/dry/as-fed basis; quantity issued; leftovers; feed source; marine ingredient fraction where relevant; batch id；原始采集口径与原聚合责任：normalize net feed supplied to accepted stock, harvest-size output, and reference product; retain wet/dry/live-feed conversion basis | feed inventory, supplier declarations, farm recipe, feeding logs | kg, g, L, item, or cyst count | each feed issue or batch summary | hatchery, nursery, grow-out, or fattening period | hatchery, nursery, pond, pen, cage, box, tank, or RAS module | 每 1 kg 参考流 | feed purchase records, supplier formulation, farm recipe, stock movement logs；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_feed_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | live feed, formulated feed, trash fish, mollusc meat, broodstock feed, starter feed, and supplementary feed | feed issue log, supplier invoice, feed formulation, farm recipe, leftover record | feed product; feed type; wet/dry/as-fed basis; quantity issued; leftovers; feed source; marine ingredient fraction where relevant; batch id；原始采集口径与原聚合责任：normalize net feed supplied to accepted stock, harvest-size output, and reference product; retain wet/dry/live-feed conversion basis | feed inventory, supplier declarations, farm recipe, feeding logs | kg, g, L, item, or cyst count | each feed issue or batch summary | hatchery, nursery, grow-out, or fattening period | hatchery, nursery, pond, pen, cage, box, tank, or RAS module | 每 1 kg 参考流 | feed purchase records, supplier formulation, farm recipe, stock movement logs；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_water_salinity_and_discharge_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | controlled water intake, salinity, exchange, recirculation, live holding water, wastewater, and discharge | meter readings, pump logs, sensor records, water-quality tests, discharge permits | intake volume; make-up water; exchanged volume; recirculated volume; discharge volume; salinity; dissolved oxygen; water source; discharge route; treatment；原始采集口径与原聚合责任：reconcile intake, exchange, recirculation, discharge, and retained water; normalize controlled water to process output and reference flow | meter, pump runtime calculation, sensor log, permit report, water management log | m3, kg, ppt, kg O2, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, nursery, grow-out, fattening unit, live holding, packhouse, and discharge point | 每 1 kg 参考流 | meter calibration, sensor records, permit report, water-quality monitoring record；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_water_salinity_and_discharge_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | controlled water intake, salinity, exchange, recirculation, live holding water, wastewater, and discharge | meter readings, pump logs, sensor records, water-quality tests, discharge permits | intake volume; make-up water; exchanged volume; recirculated volume; discharge volume; salinity; dissolved oxygen; water source; discharge route; treatment；原始采集口径与原聚合责任：reconcile intake, exchange, recirculation, discharge, and retained water; normalize controlled water to process output and reference flow | meter, pump runtime calculation, sensor log, permit report, water management log | m3, kg, ppt, kg O2, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, nursery, grow-out, fattening unit, live holding, packhouse, and discharge point | 每 1 kg 参考流 | meter calibration, sensor records, permit report, water-quality monitoring record；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_water_salinity_and_discharge_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | controlled water intake, salinity, exchange, recirculation, live holding water, wastewater, and discharge | meter readings, pump logs, sensor records, water-quality tests, discharge permits | intake volume; make-up water; exchanged volume; recirculated volume; discharge volume; salinity; dissolved oxygen; water source; discharge route; treatment；原始采集口径与原聚合责任：reconcile intake, exchange, recirculation, discharge, and retained water; normalize controlled water to process output and reference flow | meter, pump runtime calculation, sensor log, permit report, water management log | m3, kg, ppt, kg O2, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, nursery, grow-out, fattening unit, live holding, packhouse, and discharge point | 每 1 kg 参考流 | meter calibration, sensor records, permit report, water-quality monitoring record；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_energy_and_fuel_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | electricity, fuel, aeration, pumping, oxygen generation, filtration, chilling, and non-fuel energy | meter reading, utility bill, fuel invoice, tank drawdown, submeter, equipment log | electricity use; fuel type; meter id; process allocation; operating hours; temperature-control service; vessel or pump use；原始采集口径与原聚合责任：allocate by metered subprocess first, then operating hours, water volume, biomass-time, or product mass | utility bill, submeter, runtime allocation, equipment log, fuel invoice | kWh, MJ, L, or kg | monthly, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, nursery, grow-out unit, live holding area, packhouse, or directly controlled route | 每 1 kg 参考流 | utility bill, submeter records, fuel invoice, equipment log, allocation worksheet；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_energy_and_fuel_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | electricity, fuel, aeration, pumping, oxygen generation, filtration, chilling, and non-fuel energy | meter reading, utility bill, fuel invoice, tank drawdown, submeter, equipment log | electricity use; fuel type; meter id; process allocation; operating hours; temperature-control service; vessel or pump use；原始采集口径与原聚合责任：allocate by metered subprocess first, then operating hours, water volume, biomass-time, or product mass | utility bill, submeter, runtime allocation, equipment log, fuel invoice | kWh, MJ, L, or kg | monthly, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, nursery, grow-out unit, live holding area, packhouse, or directly controlled route | 每 1 kg 参考流 | utility bill, submeter records, fuel invoice, equipment log, allocation worksheet；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_energy_and_fuel_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | electricity, fuel, aeration, pumping, oxygen generation, filtration, chilling, and non-fuel energy | meter reading, utility bill, fuel invoice, tank drawdown, submeter, equipment log | electricity use; fuel type; meter id; process allocation; operating hours; temperature-control service; vessel or pump use；原始采集口径与原聚合责任：allocate by metered subprocess first, then operating hours, water volume, biomass-time, or product mass | utility bill, submeter, runtime allocation, equipment log, fuel invoice | kWh, MJ, L, or kg | monthly, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, nursery, grow-out unit, live holding area, packhouse, or directly controlled route | 每 1 kg 参考流 | utility bill, submeter records, fuel invoice, equipment log, allocation worksheet；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_health_treatment_and_chemical_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | disinfectants, medicines, probiotics, salt, lime, oxygen, water-treatment chemicals, and health treatments | treatment log, veterinary or health plan, diagnosis record, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; diagnosis or purpose; treatment area; date; withdrawal or eligibility status；原始采集口径与原聚合责任：normalize applied product or active ingredient to process output and reference product; retain non-eligible product segregation | farm application log, health plan, supplier invoice, chemical inventory, permit report | kg, L, g active ingredient, or m3 gas | each application or treatment period | hatchery, nursery, grow-out, fattening, live holding, or pack-out period | treatment unit, pond, pen, cage, box, tank, RAS, storage area, or packhouse | 每 1 kg 参考流 | application record, diagnosis record, health plan, invoice, permit or certification evidence；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_health_treatment_and_chemical_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | disinfectants, medicines, probiotics, salt, lime, oxygen, water-treatment chemicals, and health treatments | treatment log, veterinary or health plan, diagnosis record, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; diagnosis or purpose; treatment area; date; withdrawal or eligibility status；原始采集口径与原聚合责任：normalize applied product or active ingredient to process output and reference product; retain non-eligible product segregation | farm application log, health plan, supplier invoice, chemical inventory, permit report | kg, L, g active ingredient, or m3 gas | each application or treatment period | hatchery, nursery, grow-out, fattening, live holding, or pack-out period | treatment unit, pond, pen, cage, box, tank, RAS, storage area, or packhouse | 每 1 kg 参考流 | application record, diagnosis record, health plan, invoice, permit or certification evidence；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_health_treatment_and_chemical_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | disinfectants, medicines, probiotics, salt, lime, oxygen, water-treatment chemicals, and health treatments | treatment log, veterinary or health plan, diagnosis record, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; diagnosis or purpose; treatment area; date; withdrawal or eligibility status；原始采集口径与原聚合责任：normalize applied product or active ingredient to process output and reference product; retain non-eligible product segregation | farm application log, health plan, supplier invoice, chemical inventory, permit report | kg, L, g active ingredient, or m3 gas | each application or treatment period | hatchery, nursery, grow-out, fattening, live holding, or pack-out period | treatment unit, pond, pen, cage, box, tank, RAS, storage area, or packhouse | 每 1 kg 参考流 | application record, diagnosis record, health plan, invoice, permit or certification evidence；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_molt_residue_and_sludge_records_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | mortalities, molts, shells, feed residue, sludge, rejects, wastewater, and delivery losses | mortality log, molting log, sludge record, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell, molt, sludge, feed residue, wastewater, or reject category；原始采集口径与原聚合责任：sum by fate and normalize to process output and reference product | farm log, hatchery log, packhouse reject record, weighing, waste contractor record | item, kg, and m3 | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, nursery, grow-out unit, packhouse, waste handling route, or delivery route | 每 1 kg 参考流 | signed waste record, mortality log, molting log, sludge record, reject sheet, mass balance；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_molt_residue_and_sludge_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | mortalities, molts, shells, feed residue, sludge, rejects, wastewater, and delivery losses | mortality log, molting log, sludge record, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell, molt, sludge, feed residue, wastewater, or reject category；原始采集口径与原聚合责任：sum by fate and normalize to process output and reference product | farm log, hatchery log, packhouse reject record, weighing, waste contractor record | item, kg, and m3 | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, nursery, grow-out unit, packhouse, waste handling route, or delivery route | 每 1 kg 参考流 | signed waste record, mortality log, molting log, sludge record, reject sheet, mass balance；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | mortalities, molts, shells, feed residue, sludge, rejects, wastewater, and delivery losses | mortality log, molting log, sludge record, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell, molt, sludge, feed residue, wastewater, or reject category；原始采集口径与原聚合责任：sum by fate and normalize to process output and reference product | farm log, hatchery log, packhouse reject record, weighing, waste contractor record | item, kg, and m3 | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, nursery, grow-out unit, packhouse, waste handling route, or delivery route | 每 1 kg 参考流 | signed waste record, mortality log, molting log, sludge record, reject sheet, mass balance；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_molt_residue_and_sludge_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | mortalities, molts, shells, feed residue, sludge, rejects, wastewater, and delivery losses | mortality log, molting log, sludge record, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell, molt, sludge, feed residue, wastewater, or reject category；原始采集口径与原聚合责任：sum by fate and normalize to process output and reference product | farm log, hatchery log, packhouse reject record, weighing, waste contractor record | item, kg, and m3 | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, nursery, grow-out unit, packhouse, waste handling route, or delivery route | 每 1 kg 参考流 | signed waste record, mortality log, molting log, sludge record, reject sheet, mass balance；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_harvest_and_product_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | harvest-size product, marketable reference product, off-grade product, and product state | harvest log, grading sheet, sales invoice, dispatch record, pack-out record | harvest date; culture unit; species; product state; whole or declared basis; grade; count; sex or maturity class; mass; destination；原始采集口径与原聚合责任：reconcile harvested input, marketable output, off-grade product, rejects, holding losses, and reference product | harvest weighing, grader records, live holding records, packhouse records, invoice | kg and item | each harvest, holding, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest unit, live holding area, packhouse, and declared gate | 每 1 kg 参考流 | calibrated scale record, sales invoice, dispatch record, batch reconciliation；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_harvest_and_product_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | harvest-size product, marketable reference product, off-grade product, and product state | harvest log, grading sheet, sales invoice, dispatch record, pack-out record | 批次/物种/实际状态/产品形态基准；采收日期和养殖单元；独立称量的采收净来料；包装期初/期末库存；独立称量的转出净量和成对转移编号；非目标等级产品；互斥的拒收/本地死亡/组织损失及去向；有证据动物物理质量变化；毛重/皮重/游离水/冰及沥出水分账；实际配送/最终门关联 | 采用经校准、扣皮及明确沥水条件的称量，匹配采收、库存、分级和包装交接记录，按 reconcile_packout_mass 核对本地动物台账；按 cp_final_gate_acceptance 独立保留接收/验收记录，不以最终 Q 替代实测本地输出 | kg and item | each harvest, holding, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest unit, live holding area, packhouse, and declared gate | 每 1 kg 参考流 | calibrated scale record, sales invoice, dispatch record, batch reconciliation；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_packaging_ice_oxygen_and_energy_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | boxes, baskets, bags, liners, labels, ice, gel packs, oxygenated packs, pallets, reusable containers, and pack-out energy | packaging issue log, ice production or purchase record, oxygen pack record, purchase invoice, bill of materials, energy meter | packaging item; material; item count; tare mass; capacity; reuse rate; ice or gel pack mass; oxygen pack; destination; energy use；原始采集口径与原聚合责任：convert count to mass using tare or supplier data; allocate reusable packaging; normalize to reference product | warehouse issue record, bill of materials, supplier invoice, weighing, submeter | kg, item, and kWh | each pack-out batch or reporting period | pack-out and delivery preparation period | packhouse and dispatch area | 每 1 kg 参考流 | supplier specification, packaging issue sheet, ice record, scale record；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_delivery_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | diesel, vessel fuel, vehicle fuel, generator fuel, delivery service, delivered product, and delivery losses | fuel purchase, tank drawdown, vessel log, vehicle log, delivery log, dispatch note, receiving note | fuel type; quantity; route; vehicle or vessel; distance; load; live-holding or refrigeration service; delivery date; rejects; receiving gate；原始采集口径与原聚合责任：normalize fuel or tonne-km to product mass; calculate delivery losses; avoid double counting supplier-delivered inputs | fuel invoice, tank gauge, vehicle or vessel log, GPS or route log, receiving record | L, kg, MJ, tonne-km, and kg product | each trip, work event, delivery route, or reporting period | delivery period | directly controlled routes, vessels, vehicles, equipment, and declared gate | 每 1 kg 参考流 | fuel invoice, odometer, vessel log, delivery manifest, receiving note；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_atomic_inventory_broodstock_hatchery_nursery_and_stocking` | `broodstock_hatchery_nursery_and_stocking` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_atomic_inventory_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_atomic_inventory_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_atomic_inventory_delivery_to_declared_gate` | `delivery_to_declared_gate` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_final_gate_acceptance` | `declared_gate_release` | 唯一最终门接收、验收拒收与参考放行 | 校准称重、批次与买方验收记录 | 所选门和路线；纳入/未纳入delivery证据；配对交接号；物种、状态、形态、批次、时期；到门动物净量；包装、水冰、皮重；拒收、损失、处置；最终合格净kg；资源所有者 | 使用校准秤和同批次交接/验收记录核对真实到门、拒收和最终合格净量；排除自由水、冰和包装；按实际产品形态保留测定收率和不确定性 | kg | 每批次最终交付 | 相同批次和报告期，含纳入交付时间 | 唯一声明最终门 | 每 1 kg 参考流 | 校准、称重、买方验收、状态/路线与拒收处置证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all foreground rows | normalized_amount = measured_or_calculated_amount / marketable_reference_product_mass. Preserve raw records and product-form basis. | measured amount; marketable_reference_product_mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calculate_stock_acceptance_and_survival` | broodstock_hatchery_nursery_and_stocking and growout_and_fattening_husbandry | accepted_stock = received_or_produced_stock - rejected_stock; survival_to_harvest = harvested_count / stocked_count when count records are available. Retain count-to-mass conversion separately. | received stock; produced megalopae; rejected stock; stocked count; harvested count; mortality count | accepted stock, survival indicator, and QA check | `mass-balance-identity` |
| `calculate_feed_conversion_indicator` | growout_and_fattening_husbandry | feed_conversion_indicator = net_feed_mass / harvest_size_product_mass on the declared feed mass basis. Do not compare wet, dry, trash-fish, mollusc-meat, and as-fed records without conversion evidence. | feed_mass; feed basis; harvest_size_product_mass | feed mass per kg harvest-size crab | `asc-feed-standard-2025` |
| `calculate_controlled_discharge` | water intake and discharge rows | 优先使用外排边界的实测排水量。缺少计量时，只有在全部重要项有证据的同一时段完整水量平衡下，才可按外部进水和进入受控系统的降水，扣除蒸发、随产品/废物外带水、其他外部移出水及储水变化来估算外排量。内部循环回用不跨越系统外边界，在两侧抵消，不能再次从进水扣除。质量/体积换算须有实际温度、盐度及密度依据；缺项或负的闭合残差不得直接当作排放、吸收或零值。受控排水与不受控环境海水交换分开。 | intake; discharge; recirculated volume; retained water; sludge water | controlled discharge volume by process | `mass-balance-identity` |
| `reconcile_packout_mass` | harvest_live_holding_chilling_and_packout | harvested_input_mass + opening_packout_stock + evidenced_net_animal_mass_change = measured_packout_onward_mass + offgrade_saleable_mass + reject_mass + measured_local_animal_loss + closing_packout_stock，采用同一声明动物/产品形态质量基准。measured_packout_onward_mass 在实际处理转出交接点独立计量，不是最终门验收量 Q。各去向互斥，每项本地拒收、死亡或组织损失只计一次；物理动物质量变化须单独有证据。带符号净变化项仅涵盖有证据且尚未在其他来料、库存、输出、拒收或本地损失项中表示的增减；同一变化不能计入两项。未解释差额不得作为允许的调整项。游离水、冰、沥出水和包装另设物料台账，仅从实际包含它们的毛重中扣除。后续配送和最终验收按各自实际责任另行核对，再按 calc_final_gate_normalization 将各实际数量除以正值最终验收 Q；不得把下游损失移入包装阶段，或假定转出量等于 Q。 | harvested_input_mass; opening_packout_stock; evidenced_net_animal_mass_change; measured_packout_onward_mass; offgrade_mass; reject_mass; measured_local_animal_loss; closing_packout_stock; cp_harvest_and_product_records_harvest_live_holding_chilling_and_packout; cp_atomic_inventory_harvest_live_holding_chilling_and_packout; cp_final_gate_acceptance | 独立核对的本地包装动物质量平衡及单独的最终门分母 | `mass-balance-identity` |
| `calculate_packaging_and_ice_mass` | packaging, ice, oxygen, and reusable container rows | material_mass = item_count * tare_or_supplier_mass, adjusted for reuse allocation where applicable. | item count; tare mass; supplier mass; reuse rate; ice mass | kg packaging, ice, oxygen, or container service per reference product | `mass-balance-identity` |
| `calculate_delivery_transport_service` | delivery_to_declared_gate | 按每段实际路线，将实际承运本货批的货载质量（吨）乘该段距离（km），再按匹配最终参考产品的实际产量归一化。货载包含实际随行的载体水、冰和包装，不等于参考产品净质量。共载时使用有因果依据的质量、占用体积或其他已说明分配键。记录空返、冷却、增氧和暂养服务的覆盖；不得把空返的零货载视为零运输负荷。若以实测燃料和直接排放建模，不得重复叠加已覆盖同一负荷的运输服务。 | delivered mass; controlled distance; route | tonne-kilometres | `mass-balance-identity` |
| `calc_final_gate_normalization` | 所有清单行 | 对同边界、同实际状态的每1000kg最终合格产品值除以1000；原始批次或事件量先确定实际所有者和一次性分配，再除以 cp_final_gate_acceptance 的正值最终合格净kg。阶段、收获或包装分母必须通过同批次实测流转及收率映射转换，并保留原值与转换审计轨迹；内部动物与运输载水/冰/包装不是1kg固定投入。 | 原始批次及阶段记录；实测收率与流转；一次性分配；cp_final_gate_acceptance | 每1kg最终参考的原生交换量；原值与换算记录 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_scope` | all datasets | Declare CPC code, species, farmed production evidence, biological starting condition, culture system, product state, geography, and declared gate. | dataset metadata, stocking records, hatchery records, product description, permit, certification, or movement evidence |
| `mass_basis_consistency` | reference product, stock, harvest, pack-out, rejects, feed, packaging, and ice | Keep whole, soft-shell, fattened, live, fresh, chilled, drained, wet, dry, trash-fish, count, container, and net mass bases separate unless measured conversion evidence exists. | scale records, product specifications, count per kg records, container tare, moisture or drainage evidence |
| `feed_and_health_disclosure` | hatchery, nursery, grow-out, and fattening rows | Retain feed type, feed basis, feed recipe, supplier formulation, health treatments, medicine eligibility, and biosecurity records where applicable. | feed logs, supplier data, farm recipe, health plan, treatment logs |
| `water_salinity_and_discharge_disclosure` | hatchery, nursery, grow-out, fattening, live holding, and pack-out | Distinguish controlled intake, exchange, recirculation, oxygenation, salinity, live holding, cleaning, and discharge. | water meters, sensor logs, oxygen logs, pump logs, discharge permits, monitoring reports |
| `mortality_molt_residue_and_sludge_completeness` | stock, grow-out, fattening, pack-out, and delivery rows | Record mortalities, molts, shells, feed residue, sludge, rejects, and fate by batch or reporting period. | mortality log, molting log, reject sheet, sludge record, waste manifest, recovery record |
| `allocation_transparency` | multi-species, multi-grade, or shared-system operations | State the partitioning or allocation basis before publishing a secondary or background dataset. | allocation worksheet, grade mass records, pond records, cage records, RAS module records, route logs |
| `temporal_representativeness` | all foreground rows | Cover a complete aquaculture production batch, fattening batch, harvest lot, holding period, delivery route, or representative reporting period; disclose partial-cycle or pilot-scale datasets. | production calendar, stocking and harvest dates, hatchery records, delivery records, reporting-period records |
| `dq_inventory_completion` | 所有具体交换及最终门 | 所有实际交换逐项落实，含所选路线完整水、能源、饲料、处理、包装、服务、资本/替换/清洁及去向；具体已列水电柴油氧气冰卡按实际使用独立计量，未知其他物质须补独立卡。独立Range证据和UUID缺口保留并阻止最终完整性，不得把未知填零。 | 逐流覆盖台账、原始记录、独立范围和身份核实 |
| `dq_complete_biological_stock_input` | `broodstock_hatchery_nursery_and_stocking`; inputs; product | 按“亲蟹、幼体、大眼幼体、幼蟹、蟹苗或育肥存量”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录进入声明养殖路线的外购或内部生产生物存量。 流属性/单位：Mass or count with life stage / kg, item, or stage count 数量规则：按批次记录进入育苗、暂养、养成或育肥的实测只数、可测质量、生命阶段和接收数量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 适销参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_biological_stocking_records_broodstock_hatchery_nursery_and_stocking` 来源：`fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_hatchery_nursery_or_stocking_feed` | `broodstock_hatchery_nursery_and_stocking`; inputs; product | 按“育苗、暂养或投苗饲料”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行覆盖活饵、Artemia、贝肉、杂鱼、配合开口料、亲蟹饲料以及类似育苗或暂养饲料。 流属性/单位：Mass, volume, or count / kg, g, L, cyst count, or item 数量规则：按批次、生命阶段和基准记录实测饲料或活饵数量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每个育苗、暂养或投苗批次，并在归一化后折算至每 1,000 kg 适销参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_feed_records_broodstock_hatchery_nursery_and_stocking` 来源：`fao-mud-crab-aquaculture-2011`, `asc-feed-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_hatchery_nursery_water` | `broodstock_hatchery_nursery_and_stocking`; inputs; product | 按“育苗和暂养用水”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行覆盖现场育苗和暂养使用的受控海水、淡水、咸淡水、工艺水、补水和循环水补充水。 流属性/单位：Mass or volume / kg or m3 数量规则：记录实测进水、补水、处理水或循环水补充量，并保留盐度基准 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每个育苗或暂养批次，并在归一化后折算至每 1,000 kg 适销参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_water_salinity_and_discharge_records_broodstock_hatchery_nursery_and_stocking` 来源：`fao-mud-crab-aquaculture-2011`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_hatchery_nursery_electricity` | `broodstock_hatchery_nursery_and_stocking`; inputs; product | 按“育苗和暂养用电”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行覆盖现场育苗或暂养中水泵、曝气、增氧、过滤、照明、冷却或加热、紫外或其他水处理，以及活饵培养用电。 流属性/单位：Energy / kWh 数量规则：育苗和暂养操作的计量电力或分摊电力记录 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每个育苗或暂养批次，并在归一化后折算至每 1,000 kg 适销参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_energy_and_fuel_records_broodstock_hatchery_nursery_and_stocking` 来源：`asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_hatchery_mortalities_molts_sludge_and_culture_residue` | `broodstock_hatchery_nursery_and_stocking`; outputs; waste | 按“育苗死亡、蜕壳、污泥和养殖残余物”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录现场育苗或暂养中的亲蟹死亡、幼体、大眼幼体、蟹苗淘汰、蜕壳、蟹壳、残饵、污泥、生物滤池固体和淘汰存量。 流属性/单位：Mass or count / kg or item 数量规则：记录实测死亡只数、残余物质量、污泥、淘汰存量，以及处置或回收路径 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每个育苗或暂养批次，并在归一化后折算至每 1,000 kg 适销参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_mortality_molt_residue_and_sludge_records_broodstock_hatchery_nursery_and_stocking` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_accepted_seed_crabs_or_juveniles_for_growout` | `broodstock_hatchery_nursery_and_stocking`; outputs; product | 按“进入养成的接收蟹苗或幼蟹”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该输出将可用蟹苗、大眼幼体、幼蟹或投放蟹带入养成或育肥。 流属性/单位：Mass or count with mean size / kg, item, or stage count 数量规则：根据接收、暂养、分级、驯化和转移损失计算接收存量 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：进入养成或育肥的接收存量 基准类型：过程输出（`process_output`） 证据类型：由采集记录计算（`calculated_from_collection`） 采集协议：`cp_biological_stocking_records_broodstock_hatchery_nursery_and_stocking` 来源：`mass-balance-identity` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_accepted_stocked_crabs_entering_culture_units` | `growout_and_fattening_husbandry`; inputs; product | 按“进入养殖单元的接收投放蟹”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录进入养成或育肥单元的接收蟹苗、幼蟹、软壳蟹或育肥存量。 流属性/单位：Mass or count / kg or item 数量规则：按养殖单元记录进入的实测接收只数和质量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每个养殖单元和每 1,000 kg 适销参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_biological_stocking_records_growout_and_fattening_husbandry` 来源：`fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_growout_and_fattening_feed` | `growout_and_fattening_husbandry`; inputs; product | 按“养成和育肥饲料”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录养成或育肥单元投喂的配合饲料、杂鱼、贝肉、混合农场饲料和补充饲料。 流属性/单位：Mass / kg 数量规则：记录实测净投喂量，并保留湿基、干基、投喂基、杂鱼、贝肉或配合饲料基准 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 收获规格蟹输出 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_feed_records_growout_and_fattening_husbandry` 来源：`fao-mud-crab-aquaculture-2011`, `asc-feed-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_growout_water_exchange_and_makeup_water` | `growout_and_fattening_husbandry`; inputs; product | 按“养成换水和补水”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录受控咸淡水、海水、淡水、补水、池塘换水、池槽换水或循环水补充水。 流属性/单位：Mass or volume / kg or m3 数量规则：记录实测进水、补水、换水、循环水补充，或按泵运行计算的水量，并保留盐度和水源 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 收获规格蟹输出 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_water_salinity_and_discharge_records_growout_and_fattening_husbandry` 来源：`fao-mud-crab-aquaculture-2011`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_growout_electricity_and_fuel` | `growout_and_fattening_husbandry`; inputs; product | 按“养成用电和燃料”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录水泵、曝气、增氧、换水、船舶、照明、场区运行和备用发电直接控制的电力和燃料。 流属性/单位：Energy or fuel quantity / kWh, MJ, L, or kg 数量规则：养成和育肥操作的实测电力、燃料或分摊能源记录 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 收获规格蟹输出 基准类型：燃料清单（`fuel_inventory`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_energy_and_fuel_records_growout_and_fattening_husbandry` 来源：`asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_health_treatments_chemicals_salt_lime_and_oxygen` | `growout_and_fattening_husbandry`; inputs; product | 按“健康处理、水处理化学品、盐、石灰和氧气”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录药物、消毒剂、益生菌、水处理化学品、盐、石灰、氧气和类似处理投入。 流属性/单位：Mass, volume, active ingredient, or gas volume / kg, L, g active ingredient, or m3 gas 数量规则：按处理事件、目的、适用时的有效成分和养殖单元记录实测施用量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每个养殖单元和每 1,000 kg 收获规格蟹输出 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_health_treatment_and_chemical_records_growout_and_fattening_husbandry` 来源：`asc-farm-standard-2025`, `fao-mud-crab-aquaculture-2011` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_growout_mortalities_molts_shells_sludge_and_feed_residue` | `growout_and_fattening_husbandry`; outputs; waste | 按“养成死亡、蜕壳、蟹壳、污泥和残饵”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录死蟹、可计量的同类相食损失、蜕壳、蟹壳、残饵、池塘污泥、生物滤池固体和有机残余物。 流属性/单位：Mass or count / kg or item 数量规则：按死亡和残余物的只数、质量、原因、去向和养殖单元记录 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 收获规格蟹输出 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_mortality_molt_residue_and_sludge_records_growout_and_fattening_husbandry` 来源：`fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_controlled_growout_water_discharge` | `growout_and_fattening_husbandry`; outputs; elementary | 按“养成受控排水”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：当池塘、池槽、网箱、围栏、循环水系统或暂养单元排水作为基本水体释放离开前景系统时，使用该行记录。 流属性/单位：Volume or mass / m3 or kg 数量规则：按实测排水，或由进水、换水、循环水、滞留水和污泥带水记录计算排水 数值来源模式：计算值（`calculated_value`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 收获规格蟹输出 基准类型：过程输出（`process_output`） 证据类型：由采集记录计算（`calculated_from_collection`） 采集协议：`cp_water_salinity_and_discharge_records_growout_and_fattening_husbandry` 来源：`asc-farm-standard-2025`, `mass-balance-identity` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_live_holding_washing_and_chilling_water` | `harvest_live_holding_chilling_and_packout`; inputs; product | 按“活体暂养、清洗和冷藏用水”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录最终处理使用的受控活体暂养水、清洗水、冷却水、海水、咸淡水、淡水或冰融水。 流属性/单位：Mass or volume / kg or m3 数量规则：按暂养、清洗、冷藏或清洁活动记录实测或计算用水 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 适销参考产品 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_water_salinity_and_discharge_records_harvest_live_holding_chilling_and_packout` 来源：`codex-cxc-52-2003`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_packout_energy_ice_oxygen_and_packaging` | `harvest_live_holding_chilling_and_packout`; inputs; product | 按“包装用能、冰、氧气和包装材料”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录准备用于销售蟹产品的电力、燃料、冰、氧气、篮、箱、袋、内衬、标签、保温容器、冰袋、托盘和可重复使用容器服务。 流属性/单位：Energy, mass, or item count / kWh, kg, or item 数量规则：记录实测包装用能、包装材料、氧气和冰；只有在有皮重或供应商规格时才将件数转换为质量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 适销参考产品 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_packaging_ice_oxygen_and_energy_records_harvest_live_holding_chilling_and_packout` 来源：`codex-cxc-52-2003`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_packout_rejects_dead_crabs_shells_and_wastewater` | `harvest_live_holding_chilling_and_packout`; outputs; waste | 按“包装淘汰品、死蟹、蟹壳和废水”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录最终处理中的死蟹、破损产品、淘汰等级、蟹壳、绑扎物、包装废物、废水和清洁残余物。 流属性/单位：Mass or volume / kg or m3 数量规则：记录实测淘汰品质量、废水体积、包装废物，以及处置或回收路径 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 适销参考产品 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout` 来源：`codex-cxc-52-2003`, `mass-balance-identity` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_controlled_delivery_fuel_or_transport_service` | `delivery_to_declared_gate`; inputs; product | 按“受控配送燃料或运输服务”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录至声明门点的直接受控配送燃料、冷藏车辆能源、船舶燃料或运输服务。 流属性/单位：Fuel quantity or transport service / L, kg, MJ, or tonne-km 数量规则：按交付质量、距离、车辆、船舶、制冷、活体暂养和路线记录实测燃料或计算 tonne-km 数值来源模式：前景记录（`foreground_record`） 适用范围：路线特定（`route_specific`） 归一化基准：每 1,000 kg 交付参考产品 基准类型：运输服务（`transport_service`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_delivery_records_delivery_to_declared_gate` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_delivery_rejects_or_mortalities` | `delivery_to_declared_gate`; outputs; waste | 按“配送淘汰品或死亡”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：该行记录受控配送期间的产品死亡、包装损坏、活体容器泄漏、退货或温控失效损失。 流属性/单位：Mass or count / kg or item 数量规则：按原因和去向记录实测配送淘汰质量或只数 数值来源模式：前景记录（`foreground_record`） 适用范围：路线特定（`route_specific`） 归一化基准：每 1,000 kg 交付参考产品 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_delivery_records_delivery_to_declared_gate` 来源：`mass-balance-identity` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |

## 9. 校验规则


| 规则编号 | 严重性 | 规则 |
| --- | --- | --- |
| `val_crab_requirement_01` | error | 参考产品归一化为 1 kg 声明活、鲜或冷藏产品形态下的养殖蟹； |
| `val_crab_requirement_02` | error | 声明物种、生物起始条件、养殖生产证据、养殖系统、产品状态、产品形态、规格等级、地理位置、声明门点、暂养时长和包装状态； |
| `val_crab_requirement_03` | error | 数据集区分养殖养成、育苗或育肥与野捕，不得将本 PCR 用于野捕后仅贮存、活体暂养、冷藏、分级或发运的情形； |
| `val_crab_requirement_04` | error | 亲蟹、幼体、大眼幼体、幼蟹、蟹苗、投放蟹、饲料、受控用水、电力、燃料、健康处理或化学品使用、死亡、蜕壳或残余物、收获、包装、包装材料，以及适用时的配送均已记录，或以理由明确标记为不适用； |
| `val_crab_requirement_05` | error | 按只数、篮、箱、池槽、桶或规格等级记录的数据包含实际净质量、每 kg 只数或平均质量、阶段、产品形态、适用时的皮重和抽样方法； |
| `val_crab_requirement_06` | error | 水记录区分受控进水、换水、循环水、增氧、盐度、排放和活体暂养用水； |
| `val_crab_requirement_07` | error | 饲料记录区分配合饲料、杂鱼、贝类饲料、活饵、湿基、干基和投喂基； |
| `val_crab_requirement_08` | error | 以同一产品形态基准核对本地采收来料、期初/期末库存、独立实测包装转出动物质量、可销售非目标等级产品、拒收和实际本地损失，保留有证据物理质量变化且不重复去向。纳入的配送和最终验收须独立核对；其损失不是包装损失，仅正值最终验收净质量 Q 可作归一化分母，不能假定它等于包装转出量。 |
| `val_crab_requirement_09` | error | 同场址多物种、共享池塘、共享围栏、共享网箱、共享单体盒、共享循环水系统、共享包装场或多等级分配，在数据集作为背景或二级数据集使用前已记录。 |
| `val_final_gate_completion` | error | 核对唯一 declared_gate_release 参考输出1千克、正值最终验收净kg分母、实际纳入或旁路delivery以及所有独立实测内部转移、拒收与损失。核查每项dq_complete责任的实际子交换、原生单位、归一化、独立Range证据、UUID、去向和不重复归属；任一缺失使最终数据包不完整且失败。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经评审后可作为 `secondary_dataset` 或 `background_dataset` 发布的前景生产包 |
| downstream_use | 作为养殖蟹输入，用于海产品加工、餐饮、零售、冷链、活鲜配送或区域食品产品生命周期模型 |
| allowed_use | 具有声明养殖生产证据、物种、养殖系统、产品状态、门点和质量披露的养殖蟹活、鲜或冷藏数据集 |
| excluded_use | 野捕蟹数据集、捕捞后仅暂养或冷藏的野生蟹、冷冻/干制/盐渍/盐水浸渍/熟制/罐装/拆肉/调制产品、作为苗种出售的蟹苗、蟹壳残余物数据集，以及缺少养殖生产或养殖系统披露的数据集 |
| required_metadata | canonical PCR id; CPC code; species; biological starting condition; farmed production evidence; culture system; product state; whole or declared basis; size grade or count per kg; sex or maturity class where material; geography; declared gate; holding or chilling duration; feed regime; water salinity and exchange basis; packaging state; data period; allocation basis |
| required_quality_disclosure | missing UUIDs; unresolved crab seed, shell, molt, mortality, wastewater, ice, and site-specific treatment flow identities; feed wet/dry/trash-fish conversion; water salinity and discharge records; health treatment eligibility; mortality and molt completeness; pack-out mass balance; partial-cycle, pilot-scale, or proxy data use |
| update_trigger | 当 CPC 映射变化、Tiangong 蟹、苗种、饲料、氧气、水、排放、污泥、蟹壳、包装或处理流身份更新，ASC、Codex、FAO、SEAFDEC 或等效水产养殖和海产品处理指南变化，或经评审前景数据集提供更好的有源范围时修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | <https://www.fao.org/input/download/standards/10273/CXP_052e.pdf> | 鱼类和水产品处理、冷藏水产品、温度控制、损伤预防、水产养殖和海产品卫生背景 |
| `fao-mud-crab-aquaculture-2011` | handbook | <https://www.fao.org/4/ba0110e/ba0110e.pdf> | 泥蟹生物学、育苗、暂养、养成、疾病控制、收获、加工、包装和上市准备过程分解，用作蟹类特定养殖指南 |
| `seafdec-mud-crab-growout-2017` | extension_guidance | <https://repository.seafdec.org.ph/bitstream/handle/10862/3181/3181-GenodepaJG2017.pdf> | 泥蟹养成系统、池塘、围栏、网箱、育肥背景、同类相食和成活管理，以及收获处理指南 |
| `asc-farm-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | 当前 ASC 养殖场层面关于场址范围、可追溯性、水、电、健康、法律、环境和饲料相关披露的要求 |
| `asc-feed-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/04/ASC-STD-002-ASC-Feed-Standard-V1.1-May-2025.pdf> | 水产饲料供应商、原料、可追溯性和饲料披露背景 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for stock acceptance, survival, grow-out, discharge, pack-out, packaging, delivery, and reference-flow normalization. | QA 校验、成活、饲料转化、得率、包装质量平衡、包装换算、配送服务计算和归一化规则 |
| `ghg-product-allocation` | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard，第9章，https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf （2026-10-16核读第60–70印刷页） | 本PCR显式采用的细分、因果物理及经济分配层级；不提供养殖绩效、实际份额或非GHG影响评价结论 |
