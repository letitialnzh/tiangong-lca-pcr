---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-tunas-skipjack-or-stripe-bellied-bonito-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 养殖金枪鱼、鲣鱼或扁舵鲣，活、鲜或冷藏

## 1. 范围与适用性

本 PCR 用于构建以活、鲜或冷藏状态上市的养殖金枪鱼、鲣鱼或扁舵鲣前景数据包。它覆盖全周期养殖中已声明的亲鱼、鱼卵、仔鱼、幼鱼或供应方鱼苗，也覆盖合法、可追溯地转入受控养殖或育肥的野外幼鱼或亚成鱼，以及网箱、网栏、池槽、离岸养殖或其他已声明养殖系统中的养殖管理、收获、分级、击昏、放血（如发生）、活体暂养、冷藏、包装和在声明边界的放行。

覆盖产品包括在数据集中能够证明受控养殖、牧场式养殖或育肥记录的养殖或养殖育肥金枪鱼、鲣鱼、扁舵鲣。排除产品包括仅捕捞、上岸、暂养、冷藏、分级或发运的野生金枪鱼、鲣鱼或扁舵鲣；冷冻金枪鱼产品；鱼片、鱼柳、鱼排、鱼肉、罐装、熟制、烟熏、干制、盐渍、预制或保藏产品；作为单独养殖投入销售的鱼苗；作为单独产品建模的鱼卵、鱼油、下脚料、死亡鱼和加工残余物。

捕获式养殖仅在报告数据集声明野外种群捕获或采购、转运、投放、实证受控生物养成或育肥期、饲料或饵料使用、死亡、逃逸和可销售产品产出时属于本 PCR。只有野捕和捕后处理的数据集应归入相应的野生产品 PCR。

类别边界必须以实际物种和养殖生产记录确认。仅暂养、运输、保鲜、包装或转售不能构成养殖生产；须有受控生物生长、繁育或育肥的实际活动证据。金枪鱼类别限定为已确认属于本叶类别的 Thunnus spp. 或 Katsuwonus pelamis，不能仅因“类金枪鱼”或鲭科名称而纳入邻类物种。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-tunas-skipjack-or-stripe-bellied-bonito-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04252`, `Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled`; narrower |
| covered_products | 来自声明孵化、苗种培育、网箱、网栏、池槽、离岸、捕获式养殖或其他受控养殖系统，并以活、鲜或冷藏状态销售的养殖、牧场式养殖或养殖育肥金枪鱼、鲣鱼、扁舵鲣 |
| excluded_products | 仅捕捞、上岸、暂养、冷藏、分级或发运的野生金枪鱼产品；冷冻金枪鱼；鱼片；鱼柳；鱼排；鱼肉；罐装、熟制、烟熏、干制、盐渍、预制或保藏产品；非金枪鱼类养殖鱼；观赏鱼；作为苗种销售的鱼苗；作为单独产品的鱼卵、鱼油、下脚料、死亡鱼、污泥或加工残余物 |
| representative_product | 在声明物种、养殖路线、市场规格、产品形态、暂养条件和边界下的活体或冷藏养殖金枪鱼、鲣鱼或扁舵鲣 |
| production_route | 存在时的孵化或供应方鱼苗路线，或捕获式野外幼鱼/亚成鱼捕获和转运路线，随后进行受控养殖或育肥、养殖管理、收获、活体暂养或冷藏、包装和声明边界放行 |
| market_state | 已声明物种、养殖路线、种苗来源、产品基准、规格等级、收获和暂养条件、包装状态和边界的活、鲜或冷藏金枪鱼类鱼产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为活、鲜或冷藏市场产品的养殖金枪鱼、鲣鱼或扁舵鲣 |
| How much | 1 kg |
| How well | 声明物种、养殖或养殖育肥证明、种苗来源、养殖路线、活/鲜/冷藏状态、整鱼或声明产品基准、规格等级、收获和暂养条件以及边界 |
| How long or cycle | 一个养殖批次、育肥周期、收获批次或报告期，并归一化至可销售产品产出 |
| reference_flow_link | `qualified_product_gate_release` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明最终门实际状态的养殖金枪鱼或鲣鱼产品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种及可获得时的学名；养殖、牧场式养殖或捕获式养殖证明；种苗来源为孵化场、供应方养殖场、野外幼鱼或野外亚成鱼；捕获式路线的捕获海域、许可、转运路线和投放日期；养殖系统；产品状态；整鱼、放血、去内脏、活、鲜、冷藏或声明产品基准；规格等级、长度或平均个体质量；水分、沥水或不含冰基准；地理位置和声明边界；暂养或冷藏时长；饲喂制度、鲜饵、配合饲料和饲料供应方披露；网箱、网栏、池槽或离岸场址；健康、福利、生物安全、许可、认证、死亡和逃逸状态 |

构建前景数据包时，`Required qualifiers` 中列出的项目必须在数据集元数据、过程说明、参考流注释、产品描述或等效字段中声明。缺少必需限定信息会使该数据包的参考流定义不完整。

质量是主要参考基准。计数、网箱、拖带、转运、箱、桶、活体暂养或规格等级记录只有在保留净质量、每 kg 尾数或平均个体质量、产品形态以及抽样或皮重方法时，才可用于归一化。

声明一个实际最终门、实际产品形态/状态和正值合格净交付质量。若纳入 delivery_to_declared_gate，则先完成实际交付、损失和验收再放行；否则从包装阶段实际交接。不得任选更早分母、固定内部产量、把两路相加或默认交付状态；未纳入后续运输须明确记录。保留全部前阶段实际收率、原始批次及每1000kg口径，通过明确换算统一为每1kg最终参考。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `final_gate_normalization` | 所有清单行 | 实际交换的原生属性 | 每1kg最终参考的原生单位 | 原始批次/事件量先按实际所有权与分配归属，再除以 declared_gate_release 的正值验收合格净kg；同边界每1000kg最终产品值除以1000。阶段产出分母须通过实测批次流转和收率转换，禁止直接当最终分母；鱼/动物生物批次不是机器M。 |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明活、鲜或冷藏产品形态下的养殖金枪鱼、鲣鱼或扁舵鲣 kg。 |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | 数据集记录必须证明前景养殖、牧场式养殖、实证受控生物养成或育肥期。仅野捕后暂养、冷藏、分级或发运不属于本 PCR。 |
| `capture_based_stock_origin` | capture-based aquaculture and tuna ranching | Stock capture, transfer, and stocking records | declared records | 捕获式路线必须保留来源渔业或供应方、捕获海域、许可、日期、规格或质量、转运损失、投放网箱或场址，以及种苗进入受控养殖的证据。 |
| `product_form_mass_basis` | whole, gutted, bled, live, fresh, chilled, drained, or iced records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品质量必须说明活体整鱼重、冷藏整鱼重、去内脏重、放血后重、沥水重、不含冰质量或其他合同声明基准。只有在有实测得率证据时才可换算。 |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and size-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 基于尾数的记录必须包括每 kg 尾数或平均个体质量、使用的长度或规格等级、抽样方法和产品形态，然后才能归一化到 kg 参考产品。 |
| `stock_lot_identity` | broodstock, eggs, larvae, juveniles, transferred wild fish, supplier fish, and stocked cages | Mass or count | kg, item, egg count, or life-stage count | 种苗记录必须保留物种、生命阶段、来源、捕获或供应证据、批次或 lot、尾数、可测质量、健康状态、转运日期和转运死亡。 |
| `feed_and_bait_mass_basis` | formulated feed, fresh bait, frozen bait, live feed, medicated feed, and supplementary feed | Mass | kg | 饲料和饵料记录必须说明干基、湿基、投喂原样、解冻、活体、药饵或声明基准。只有在有实测水分、供应方数据或保留规格时才可在不同基准之间换算。 |
| `water_temperature_salinity_and_volume` | hatchery, nursery, grow-out, live holding, washing, chilling, and discharge | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | 保留受控水量、水温、盐度、pH、溶解氧、循环、补水、水交换、排水和排放基准。开放海域环境水属于边界条件，除非在前景控制下被泵送、处理、交换或排放。 |
| `energy_fuel_and_vessel_inventory` | pumps, aeration, oxygenation, feeding equipment, live holding, chilling, harvest, towing, vessels, vehicles, and delivery | Energy or fuel quantity | kWh, MJ, L, or kg | 在归一化到参考流前记录电力、燃料、氧气或能源载体的原始单位。记录允许时，捕获式投放和养殖服务船舶燃料应分开。 |
| `chemical_health_and_welfare_treatment_basis` | oxygen, disinfectants, medicines, anesthetics, vaccines, probiotics, cleaning agents, and welfare treatments | Mass, volume, active ingredient, dose, or gas amount | kg, L, g active ingredient, dose, or m3 gas | 记录产品用量、适用时的活性成分或剂量、处理目的、诊断或健康计划链接、合法状态、停药或收获资格影响，以及处理生物量。 |
| `packaging_and_ice_basis` | boxes, bags, liners, insulated containers, labels, ice, gel packs, oxygenated live packs, and pallets | Mass or item count | kg or item | 包装、冰、含氧活体包装和容器必须在归一化前保留材料类型、件数、皮重或装填质量、重复使用率和目的地。 |

关键产品属性作为前景限定信息与质量参考流一并记录：

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species | scientific and common name | 所有数据集必填 |
| Aquaculture route | full-cycle hatchery route, supplier juvenile route, capture-based aquaculture, ranching, fattening, cage, net pen, tank, offshore, or declared variant | 边界、种苗来源、饲料、死亡、逃逸和分配解释所必需 |
| Biological starting condition | broodstock, eggs, larvae, hatchery juveniles, supplier juveniles, wild juveniles, wild subadults, or transferred fish | 区分养殖生产和野捕所必需 |
| Product form | live whole, fresh whole, chilled whole, bled, gutted, head-on gutted, or declared variant | 产品质量基准解释所必需 |
| Size grade | count per kg, mean individual mass, length, market grade, or harvest weight class | 使用计数或等级记录时必需 |

## 5. 系统边界

默认边界覆盖前景控制的金枪鱼类养殖生产，直到声明的养殖场、收获、包装场、发运或交付边界：

1. 全周期养殖中存在的亲鱼、鱼卵、仔鱼、幼鱼或供应方鱼种来源，或在养殖路线依赖野外种群时的捕获式野外幼鱼或亚成鱼捕获、采购、转运和投放。
2. 受控养殖、牧场式养殖或育肥管理，包括投放、鲜饵或配合饲料投喂、相关水体控制、网箱或网栏运行、船舶服务、相关曝气或增氧、健康管理、福利处理、防逃逸、死亡、残余物管理和直接控制的维护。
3. 收获、分级、击昏或放血（如发生）、清洗、活体暂养、冷藏、包装和声明边界放行。
4. 当参考流是超过养殖场、收获、发运或包装场边界的交付产品时，包括交付到声明边界。

资本品和长期基础设施只有在声明数据包范围要求时才纳入。购买幼鱼、捕获种群、饲料、饵料、包装、冰、氧气、电力、燃料、化学品、健康处理、网箱材料和船舶服务需要上游数据集，除非同一运营方控制并在前景包中报告其生产。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_hatchery_supplier_or_capture_based_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04252`, `Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled` |
| recursive_input_rule | 用于生产市场产品的养殖金枪鱼亲鱼、鱼卵、仔鱼、幼鱼或供应方鱼种，作为声明的生物起始条件记录，并披露供应方、孵化场、养殖场、来源、生命阶段、捕获式状态和健康信息，而不是递归记录为成品参考产品输出 |
| upstream_dataset_requirement | 孵化、供应方、幼鱼、捕获式投放、饲料、饵料或服务数据集，或记录来源、物种、批次、尾数或质量、生命阶段、捕获或供应许可、转运损失、健康或生物安全状态以及认证或许可证据的文件 |
| disclosure | 披露物种、养殖路线、生物起始条件、养殖生产证据、捕获式路线的捕获海域和许可、投放密度或生物量、网箱或池槽系统、饲料或饵料制度、饲料供应方和饲料基准、可获得时的海洋成分或饵料物种、受控水源和温度、相关溶解氧和盐度、船舶燃料和养殖服务、健康处理、福利处理、死亡和逃逸记录、收获和暂养条件、产品形态、包装状态、声明边界以及未解决的 Tiangong UUID 替代项 |

## 6. 过程清单结构

### Process Map

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| stock_capture_hatchery_transfer_and_stocking | 种群捕获、孵化、转运和投放 | required | 必须声明生物起始条件；使用捕获式种群时纳入捕获和转运；由报告运营方控制的现场孵化和苗种培育行纳入 | foreground/upstream bridge | 进入受控养殖或育肥的已接受幼鱼或投放金枪鱼 |
| growout_fattening_and_husbandry | 养成、育肥和养殖管理 | required |  | foreground production | 最终处理前的收获规格养殖金枪鱼类鱼 |
| harvest_live_holding_chilling_and_packout | 收获、活体暂养、冷藏和包装出货 | required |  | foreground conditioning and gate release | 声明的可销售活、鲜或冷藏产品 |
| delivery_to_declared_gate | 交付到声明边界 | conditional | 当参考流是超过养殖场、收获、发运或包装场边界的交付产品时纳入 | foreground transport | 声明边界处的已交付产品 |
| declared_gate_release | 声明最终门验收与放行 | required | 每个合格批次；先完成实际纳入的可选交付 | 唯一最终参考、实际状态和拒收；无虚构重复作业 | 最终验收合格净质量1千克 |

### Process: 种群捕获、孵化、转运和投放 (`stock_capture_hatchery_transfer_and_stocking`)

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 活金枪鱼亲鱼 (`stock_broodstock`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活金枪鱼亲鱼
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### 受精金枪鱼卵 (`stock_eggs`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：受精金枪鱼卵
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### 活金枪鱼仔鱼 (`stock_larvae`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活金枪鱼仔鱼
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### 活金枪鱼幼鱼 (`stock_juveniles`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活金枪鱼幼鱼
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### 用于实证养殖放养的野捕活亚成体金枪鱼 (`stock_subadults`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：用于实证养殖放养的野捕活亚成体金枪鱼
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### 柴油 (`stock_capture_hatchery_transfer_and_stocking_diesel`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### 声明来源和处理状态的外供液态水 (`stock_capture_hatchery_transfer_and_stocking_supplied_water`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明来源和处理状态的外供液态水
- 流属性/单位：Mass / kg
- 数量规则：仅本项外供水独立实测质量；体积计量须有实际温度/盐度/密度。自然取水与内部循环另记，不将循环量再从外部取水扣减或重复增加供应负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

###### 氧气 (`stock_capture_hatchery_transfer_and_stocking_gaseous_oxygen`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：仅实际外购气态氧独立计量质量，记录纯度、压力、温度和交付状态；不把空气曝气、溶解氧监测或制氧设备用电当成购买氧气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明物种与生命阶段的活金枪鱼类存量 (`accepted_stock_for_growout_or_fattening`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明物种与生命阶段的活金枪鱼类存量
- 流属性/单位：Mass / kg
- 数量规则：按相同批次、物种、实际生命阶段/产品状态和交接号实测净动物质量，记录计数、增长、损失与去向；按唯一最终门合格净质量归一化，内部量不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

##### 废物流

##### 基本流

###### 二氧化碳（化石），排放到空气，未指定 (`stock_capture_hatchery_transfer_and_stocking_fossil_co2`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：仅本节点实有柴油燃烧的化石二氧化碳，按实测燃料及独立适用碳含量/氧化率或排放因子证据计算，或直接测量；不得用通用因子或供应链排放替代；按最终门净参考质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking`

### Process: 养成、育肥和养殖管理 (`growout_fattening_and_husbandry`)

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 声明物种与生命阶段的活金枪鱼类存量 (`stocked_tuna_entering_growout_or_fattening`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明物种与生命阶段的活金枪鱼类存量
- 流属性/单位：Mass / kg
- 数量规则：按相同批次、物种、实际生命阶段/产品状态和交接号实测净动物质量，记录计数、增长、损失与去向；按唯一最终门合格净质量归一化，内部量不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_fattening_and_husbandry`

###### 声明供应方和电压的电力 (`growout_fattening_and_husbandry_electricity`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明供应方和电压的电力
- 流属性/单位：Net calorific value / kWh
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_fattening_and_husbandry`

###### 柴油 (`growout_fattening_and_husbandry_diesel`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_fattening_and_husbandry`

###### 声明来源和处理状态的外供液态水 (`growout_fattening_and_husbandry_supplied_water`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明来源和处理状态的外供液态水
- 流属性/单位：Mass / kg
- 数量规则：仅本项外供水独立实测质量；体积计量须有实际温度/盐度/密度。自然取水与内部循环另记，不将循环量再从外部取水扣减或重复增加供应负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_fattening_and_husbandry`

###### 氧气 (`growout_fattening_and_husbandry_gaseous_oxygen`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：仅实际外购气态氧独立计量质量，记录纯度、压力、温度和交付状态；不把空气曝气、溶解氧监测或制氧设备用电当成购买氧气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_fattening_and_husbandry`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收获前活体养殖金枪鱼或鲣鱼鱼体或动物净质量 (`harvest_size_farmed_tuna_biomass`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：收获前活体养殖金枪鱼或鲣鱼鱼体或动物净质量
- 流属性/单位：Mass / kg
- 数量规则：按相同批次、物种、实际生命阶段/产品状态和交接号实测净动物质量，记录计数、增长、损失与去向；按唯一最终门合格净质量归一化，内部量不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_fattening_and_husbandry`

##### 废物流

##### 基本流

###### 二氧化碳（化石），排放到空气，未指定 (`growout_fattening_and_husbandry_fossil_co2`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：仅本节点实有柴油燃烧的化石二氧化碳，按实测燃料及独立适用碳含量/氧化率或排放因子证据计算，或直接测量；不得用通用因子或供应链排放替代；按最终门净参考质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_fattening_and_husbandry`

### Process: 收获、活体暂养、冷藏和包装出货 (`harvest_live_holding_chilling_and_packout`)

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 实际状态养殖金枪鱼或鲣鱼鱼体或动物净质量（最终门前实测交接） (`harvested_tuna_entering_final_handling`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：实际状态养殖金枪鱼或鲣鱼鱼体或动物净质量（最终门前实测交接）
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

###### 实际状态养殖金枪鱼或鲣鱼鱼体或动物净质量（最终门前实测交接） (`marketable_live_fresh_or_chilled_farmed_tuna`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：实际状态养殖金枪鱼或鲣鱼鱼体或动物净质量（最终门前实测交接）
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

### Process: 交付到声明边界 (`delivery_to_declared_gate`)

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 声明供应方和电压的电力 (`delivery_to_declared_gate_electricity`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明供应方和电压的电力
- 流属性/单位：Net calorific value / kWh
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
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

###### 氧气 (`delivery_to_declared_gate_gaseous_oxygen`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：仅实际外购气态氧独立计量质量，记录纯度、压力、温度和交付状态；不把空气曝气、溶解氧监测或制氧设备用电当成购买氧气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_delivery_to_declared_gate`

###### 固态水冰 (`delivery_to_declared_gate_water_ice`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：固态水冰
- 流属性/单位：Mass / kg
- 数量规则：本项实际固态水冰独立实测质量，分清外购与自制。自制冰保留制冰水和能量，不再重复采购冰上游负荷；融冰、水体与运输实载分别核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_delivery_to_declared_gate`

###### 装载进入受控交付的实际状态养殖金枪鱼或鲣鱼产品 (`delivery_product_receipt`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：装载进入受控交付的实际状态养殖金枪鱼或鲣鱼产品
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

###### 实际状态养殖金枪鱼或鲣鱼鱼体或动物净质量（最终门前实测交接） (`delivered_farmed_tuna_at_declared_gate`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：实际状态养殖金枪鱼或鲣鱼鱼体或动物净质量（最终门前实测交接）
- 流属性/单位：Mass / kg
- 数量规则：按相同批次、物种、实际生命阶段/产品状态和交接号实测净动物质量，记录计数、增长、损失与去向；按唯一最终门合格净质量归一化，内部量不固定为1千克。
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

###### 声明最终门接收的实际状态养殖金枪鱼或鲣鱼产品 (`qualified_product_gate_receipt`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明最终门接收的实际状态养殖金枪鱼或鲣鱼产品
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

###### 声明最终门实际状态的养殖金枪鱼或鲣鱼产品 (`qualified_product_gate_release`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明最终门实际状态的养殖金枪鱼或鲣鱼产品
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_gate_acceptance`

##### 废物流

###### 最终验收拒收的养殖金枪鱼或鲣鱼动物体 (`final_gate_animal_rejects`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：最终验收拒收的养殖金枪鱼或鲣鱼动物体
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

| allocation_id | Applies to | Rule | Required data | Source |
| --- | --- | --- | --- | --- |
| `single_reference_product_default` | marketable live, fresh, or chilled farmed tuna output | 除非鱼卵、下脚料、死亡鱼、残余物或加工输出被有意回收为共产品，否则将声明参考产品作为唯一参考产品。 | 可销售质量、剔除质量、回收共产品质量、目的地，以及声明共产品时的收入或物理关系 | `mass-balance-identity` |
| `capture_based_stock_boundary` | capture-based aquaculture routes | 不得通过把野外种群捕获、转运损失或死亡排除在前景包之外来分摊掉这些负荷。除非声明经审查的上游野外种群数据集和分配规则，否则将其分配给养殖产品。 | 种群捕获或采购记录、转运损失、已接受投放生物量、丢弃或死亡种群和许可证据 | `fao-capture-based-aquaculture-guidelines-2011` |
| `shared_site_and_cage_allocation` | multi-species, multi-lot, or shared-service farms | 共享电力、船舶燃料、氧气、场址服务、网衣清洗和暂养基础设施，应先按实测计量、批次日志、生物量-时间、网箱-时间或其他声明物理驱动因子分配，再使用经济分配。 | 计量表、服务日志、网箱或池槽占用、生物量-时间、收获质量和分配驱动因子 | `asc-farm-standard-2025` |
| `packaging_and_delivery_allocation` | mixed-product packing or delivery | 包装、冰、活体暂养、制冷和交付负荷按实测产品质量、包装件数、托盘、行程、温控区域或 tonne-km 分配。 | 发运记录、包装件数、装载质量、距离、温度条件和返程物流 | `codex-cxc-52-2003` |

采用 GHG Protocol Product Standard 第9章的分配层级作为本PCR的显式方法选择：优先细分；其后使用可证实的因果物理关系；不适用时使用有证据的经济关系。不得仅因易测而默认质量分配。物理台账保留全部未分配数量，LCA视图独立标注并仅分配一次；各输出/节点份额总和为1，不用分配修补物理差额，内部转移不产生销售或替代信用。来源：`ghg-product-allocation`。

## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stock_origin_capture_transfer_and_stocking_records_stock_capture_hatchery_transfer_and_stocking` | `stock_capture_hatchery_transfer_and_stocking` | biological stock, capture-based stock, transfer, accepted stocking | hatchery record, supplier invoice, capture log, permit, transfer log, stocking log, mortality log | species, origin, capture area, permit, supplier, life stage, count, mean mass, total mass, transfer route, stocking date, cage or tank, accepted count, accepted mass, transfer mortality；原始采集口径与原聚合责任：来源种群加转入量减死亡和剔除量，与已接受投放生物量核对；归一化到可销售产出 | 批次记录与网箱或池槽库存核对 | kg, item, date, permit id | 每次投放事件 | 完整报告期或生产周期 | hatchery, supplier, capture vessel, transfer route, cage, tank, or farm site | 每 1 kg 参考流 | 供应方文件、许可、转运日志、网箱库存、死亡记录和负责人签字；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_stock_origin_capture_transfer_and_stocking_records_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | biological stock, capture-based stock, transfer, accepted stocking | hatchery record, supplier invoice, capture log, permit, transfer log, stocking log, mortality log | species, origin, capture area, permit, supplier, life stage, count, mean mass, total mass, transfer route, stocking date, cage or tank, accepted count, accepted mass, transfer mortality；原始采集口径与原聚合责任：来源种群加转入量减死亡和剔除量，与已接受投放生物量核对；归一化到可销售产出 | 批次记录与网箱或池槽库存核对 | kg, item, date, permit id | 每次投放事件 | 完整报告期或生产周期 | hatchery, supplier, capture vessel, transfer route, cage, tank, or farm site | 每 1 kg 参考流 | 供应方文件、许可、转运日志、网箱库存、死亡记录和负责人签字；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_feed_bait_and_feed_composition_records_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | feed, fresh bait, formulated feed, additives, feeding losses | feed invoice, feed log, bait purchase, bait species log, formulation sheet, feeding record | feed or bait type, supplier, species, mass, dry/wet/as-fed basis, moisture, feeding date, cage or lot, uneaten feed, additive or medication, marine ingredient disclosure；原始采集口径与原聚合责任：按批次和基准汇总饲料或饵料质量；只有在有水分或供应方证据时换算；归一化到可销售产出 | 称重单、供应方声明、投喂系统记录和养殖日志 | kg, %, dose, date | 每批饲料交付和投喂期 | 完整养成或育肥周期 | each cage, tank, site, and feed supplier | 每 1 kg 参考流 | 发票、饲料声明、投喂日志、配方表和库存核对；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_water_energy_vessel_cage_and_site_records_stock_capture_hatchery_transfer_and_stocking` | `stock_capture_hatchery_transfer_and_stocking` | water, oxygen, electricity, fuel, vessel service, cage materials, site service | meter log, fuel invoice, vessel log, oxygen log, cage maintenance log, net cleaning log, service invoice | electricity, fuel, oxygen, water, vessel hours, distance, cage, net, anchor, float, cleaning, maintenance, allocation driver, site and batch；原始采集口径与原聚合责任：共享记录按直接计量、作业日志、生物量-时间、网箱-时间或声明物理驱动因子分配 | 计量记录、发票、船舶日志和维护记录 | kWh, L, MJ, kg, m3, item, m, h, tonne-km | 每月和每次重大作业 | 完整报告期或周期 | farm site, vessel, cage, tank, hatchery, or delivery route | 每 1 kg 参考流 | 计量读数、发票、服务日志、分配工作表和相关校准记录；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_water_energy_vessel_cage_and_site_records_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | water, oxygen, electricity, fuel, vessel service, cage materials, site service | meter log, fuel invoice, vessel log, oxygen log, cage maintenance log, net cleaning log, service invoice | electricity, fuel, oxygen, water, vessel hours, distance, cage, net, anchor, float, cleaning, maintenance, allocation driver, site and batch；原始采集口径与原聚合责任：共享记录按直接计量、作业日志、生物量-时间、网箱-时间或声明物理驱动因子分配 | 计量记录、发票、船舶日志和维护记录 | kWh, L, MJ, kg, m3, item, m, h, tonne-km | 每月和每次重大作业 | 完整报告期或周期 | farm site, vessel, cage, tank, hatchery, or delivery route | 每 1 kg 参考流 | 计量读数、发票、服务日志、分配工作表和相关校准记录；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_residue_and_escape_records_stock_capture_hatchery_transfer_and_stocking` | `stock_capture_hatchery_transfer_and_stocking` | mortalities, rejected stock, residue, uneaten feed, sludge, escapes, wastewater | mortality log, escape report, residue log, wastewater record, disposal note | date, species, count, mass, cause, cage or tank, fate, disposal route, recovery route, escape count, corrective action, receiving environment；原始采集口径与原聚合责任：按去向汇总和分类；核对种群平衡和产品质量；归一化到参考输出 | 日常养殖记录、事故报告、废物票据和处理记录 | kg, item, m3, date | 每次事件和每月核对 | 完整报告期或周期 | cage, tank, transfer route, harvest area, packhouse, or waste route | 每 1 kg 参考流 | 死亡记录、废物转运单、逃逸事件文件、处理记录和主管复核；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_residue_and_escape_records_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | mortalities, rejected stock, residue, uneaten feed, sludge, escapes, wastewater | mortality log, escape report, residue log, wastewater record, disposal note | date, species, count, mass, cause, cage or tank, fate, disposal route, recovery route, escape count, corrective action, receiving environment；原始采集口径与原聚合责任：按去向汇总和分类；核对种群平衡和产品质量；归一化到参考输出 | 日常养殖记录、事故报告、废物票据和处理记录 | kg, item, m3, date | 每次事件和每月核对 | 完整报告期或周期 | cage, tank, transfer route, harvest area, packhouse, or waste route | 每 1 kg 参考流 | 死亡记录、废物转运单、逃逸事件文件、处理记录和主管复核；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_residue_and_escape_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | mortalities, rejected stock, residue, uneaten feed, sludge, escapes, wastewater | mortality log, escape report, residue log, wastewater record, disposal note | date, species, count, mass, cause, cage or tank, fate, disposal route, recovery route, escape count, corrective action, receiving environment；原始采集口径与原聚合责任：按去向汇总和分类；核对种群平衡和产品质量；归一化到参考输出 | 日常养殖记录、事故报告、废物票据和处理记录 | kg, item, m3, date | 每次事件和每月核对 | 完整报告期或周期 | cage, tank, transfer route, harvest area, packhouse, or waste route | 每 1 kg 参考流 | 死亡记录、废物转运单、逃逸事件文件、处理记录和主管复核；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_harvest_product_packout_records_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | harvest biomass, grading, product form, marketable output | harvest log, grading sheet, packout record, sales note, scale ticket | harvest date, species, cage or tank, live mass, product form, count, size grade, bleeding or gutting status, chilled or live state, rejected mass, marketable mass, destination；原始采集口径与原聚合责任：收获生物量加采购量减剔除和残余物，与可销售产出核对；全部流归一化到 1 kg 参考产品 | 校准秤、分级记录、销售记录和包装场核对 | kg, item, grade, date | 每次收获和包装批次 | 完整报告期或周期 | harvest site, live-holding unit, packhouse, or dispatch gate | 每 1 kg 参考流 | 秤校准、收获单、包装记录、发运记录和销售核对；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_harvest_product_packout_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | harvest biomass, grading, product form, marketable output | harvest log, grading sheet, packout record, sales note, scale ticket | harvest date, species, cage or tank, live mass, product form, count, size grade, bleeding or gutting status, chilled or live state, rejected mass, marketable mass, destination；原始采集口径与原聚合责任：收获生物量加采购量减剔除和残余物，与可销售产出核对；全部流归一化到 1 kg 参考产品 | 校准秤、分级记录、销售记录和包装场核对 | kg, item, grade, date | 每次收获和包装批次 | 完整报告期或周期 | harvest site, live-holding unit, packhouse, or dispatch gate | 每 1 kg 参考流 | 秤校准、收获单、包装记录、发运记录和销售核对；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_packaging_ice_chilling_and_dispatch_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | packaging, ice, live holding, chilling, washing, refrigerant service | packaging invoice, ice log, temperature log, water meter, oxygen log, refrigerant service record, dispatch sheet | packaging material, item count, tare, ice mass, oxygen, water, electricity, refrigerant service, temperature, holding time, lot, destination；原始采集口径与原聚合责任：按实测 lot、包装件数、产品质量、暂养时长或温控区域分配到产品批次 | 发票、计量表、温度记录和发运记录 | kg, item, m3, kWh, deg C, h | 每个包装批次和每月核对 | 收获、暂养、包装和发运期间 | packhouse, live-holding unit, cold room, dispatch gate | 每 1 kg 参考流 | 发票、温度日志、校准记录、发运单和操作员复核；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_delivery_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | delivered product, transport energy, live or chilled delivery condition | delivery note, transport invoice, fuel record, route plan, temperature or live-holding log | origin, destination, distance, mode, load mass, fuel, electricity, ice, oxygen, temperature, live-holding duration, return logistics；原始采集口径与原聚合责任：计算 tonne-km，并按装载质量、距离、温控区域和相关返程物流分配燃料或服务 | 承运文件、车辆日志、计量记录和发运核对 | kg, km, tonne-km, L, kWh, h, deg C | 每条交付路线 | 声明范围内的交付期间 | delivery route, vehicle, vessel, or carrier | 每 1 kg 参考流 | 承运发票、路线记录、温度日志和发运签字；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_atomic_inventory_stock_capture_hatchery_transfer_and_stocking` | `stock_capture_hatchery_transfer_and_stocking` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_atomic_inventory_growout_fattening_and_husbandry` | `growout_fattening_and_husbandry` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_atomic_inventory_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_atomic_inventory_delivery_to_declared_gate` | `delivery_to_declared_gate` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_final_gate_acceptance` | `declared_gate_release` | 唯一最终门接收、验收拒收与参考放行 | 校准称重、批次与买方验收记录 | 所选门和路线；纳入/未纳入delivery证据；配对交接号；物种、状态、形态、批次、时期；到门动物净量；包装、水冰、皮重；拒收、损失、处置；最终合格净kg；资源所有者 | 使用校准秤和同批次交接/验收记录核对真实到门、拒收和最终合格净量；排除自由水、冰和包装；按实际产品形态保留测定收率和不确定性 | kg | 每批次最终交付 | 相同批次和报告期，含纳入交付时间 | 唯一声明最终门 | 每 1 kg 参考流 | 校准、称重、买方验收、状态/路线与拒收处置证据 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = collected amount / marketable reference product mass，并保留单位和产品形态基准 | collected amount, marketable product mass, product basis | kg, kWh, L, item, m3, or tonne-km per kg reference product | `mass-balance-identity` |
| `stock_acceptance_balance` | stocking and transfer | accepted stocked biomass = source stock mass + transferred-in mass - transfer mortalities - rejected stock - documented transfer losses | source stock, transfers, mortalities, rejects, transfer loss | accepted stocked biomass | `fao-capture-based-aquaculture-guidelines-2011` |
| `growth_and_survival_balance` | grow-out and fattening | harvest-size biomass = stocked biomass + biological growth - mortalities - escapes - rejects，并与收获记录校验 | stocked biomass, feed or bait records, mortalities, escapes, harvest records | harvest-size biomass and survival disclosure | `fao-atlantic-bluefin-tuna-culture`, `asc-farm-standard-2025` |
| `feed_or_bait_conversion_disclosure` | feed and bait rows | feed or bait ratio = feed or bait mass on declared basis / live biomass gain or marketable output；没有换算证据时不得混用干基、湿基、活体或解冻基准 | feed or bait mass, moisture or basis, biomass gain, marketable output | declared feed or bait ratio and basis | `asc-feed-standard-2026`, `fao-capture-based-aquaculture-2008` |
| `product_form_yield` | harvested and packed product | 在同一声明产品形态基准下，将独立实测采收动物净投入、期初/期末库存及有证据的物理质量变化，与后续产品、其他预期输出、拒收及实际动物损失核对。每项数量只有一个去向且只计一次。 放血或去内脏仅在实际发生时改变动物质量，记录移出组织/体液的去向；起始动物质量已排除的部分不得再次扣除。 冰、游离水及包装皮重仅从实际包含它们的毛重中扣除，不得从动物净质量中再扣。最终验收产品净质量须在实际最终门独立确定，不从已净量或已验收量反复扣减推算。 | harvest mass, rejected mass, product-form records, packout records | marketable live, fresh, or chilled mass | `codex-cxc-52-2003` |
| `delivery_tonne_kilometres` | delivered reference product | 按每段实际路线，将实际承运本货批的货载质量（吨）乘该段距离（km），再按匹配最终参考产品的实际产量归一化。货载包含实际随行的载体水、冰和包装，不等于参考产品净质量。共载时使用有因果依据的质量、占用体积或其他已说明分配键。记录空返、冷却、增氧和暂养服务的覆盖；不得把空返的零货载视为零运输负荷。若以实测燃料和直接排放建模，不得重复叠加已覆盖同一负荷的运输服务。 | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |
| `calc_final_gate_normalization` | 所有清单行 | 对同边界、同实际状态的每1000kg最终合格产品值除以1000；原始批次或事件量先确定实际所有者和一次性分配，再除以 cp_final_gate_acceptance 的正值最终合格净kg。阶段、收获或包装分母必须通过同批次实测流转及收率映射转换，并保留原值与转换审计轨迹；内部动物与运输载水/冰/包装不是1kg固定投入。 | 原始批次及阶段记录；实测收率与流转；一次性分配；cp_final_gate_acceptance | 每1kg最终参考的原生交换量；原值与换算记录 | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and biological stock | 必须明确物种、产品类别、养殖或养殖育肥状态、种苗来源、捕获式状态、养殖路线、产品形态和声明边界。 | 参考流元数据、投放记录、许可、收获记录以及销售或发运记录 |
| `dq_capture_based_traceability` | capture-based aquaculture routes | 野外种群捕获或采购、许可、转运损失、投放事件、受控育肥期和收获产出必须可追溯并可核对。 | 捕获日志、供应方发票、转运许可、转运日志、网箱库存、死亡记录和收获记录 |
| `dq_mass_balance` | stock, feed, mortality, harvest, and packout | 投放、生长、死亡、逃逸、残余物、收获、剔除和可销售产品记录必须在声明容差内核对；无法解释的差异需要披露。 | 质量平衡工作表、称重单、网箱记录、包装记录和主管复核 |
| `dq_feed_bait_basis` | feed and bait records | 饲料和饵料基准必须区分配合饲料、鲜饵、冻饵、活饵、干物质、湿质量、解冻质量、药饵，以及可获得时的供应方物种或组成。 | 饲料发票、饵料物种日志、配方表、饲料声明和投喂记录 |
| `dq_temporal_coverage` | all foreground rows | 数据必须覆盖完整生产或育肥周期和最终处理期，或披露部分年度、部分批次或代理覆盖。 | 报告日历、批次记录、收获记录和覆盖声明 |
| `dq_boundary_disclosure` | all datasets | 数据集必须披露上游种群捕获、孵化生产、饲料、饵料、包装、交付、资本品和基础设施是前景、链接上游数据集，还是按范围排除。 | 数据集边界声明、供应方记录、上游数据集链接和范围声明 |
| `dq_inventory_completion` | 所有具体交换及最终门 | 所有实际交换逐项落实，含所选路线完整水、能源、饲料、处理、包装、服务、资本/替换/清洁及去向；具体已列水电柴油氧气冰卡按实际使用独立计量，未知其他物质须补独立卡。独立Range证据和UUID缺口保留并阻止最终完整性，不得把未知填零。 | 逐流覆盖台账、原始记录、独立范围和身份核实 |
| `dq_complete_biological_stock_input` | `stock_capture_hatchery_transfer_and_stocking`; inputs; product | 按“孵化、供应方或捕获幼鱼种群投入”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：本行记录进入声明养殖路线的购买、内部生产、转运或捕获式金枪鱼种群。 流属性/单位：带生命阶段的质量或尾数 / kg、item、egg count 或 stage count 数量规则：计量尾数、可测质量、生命阶段、接受数量、捕获或供应来源，以及进入孵化、养成或育肥的转运损失 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 可销售参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_stock_origin_capture_transfer_and_stocking_records_stock_capture_hatchery_transfer_and_stocking` 来源：`fao-atlantic-bluefin-tuna-culture`, `fao-capture-based-aquaculture-2008`, `fao-capture-based-aquaculture-guidelines-2011`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_transfer_water_oxygen_fuel_and_handling_inputs` | `stock_capture_hatchery_transfer_and_stocking`; inputs; product | 按“转运水、氧气、燃料和操作投入”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位：质量、体积、燃料或能量 / kg、m3、L、MJ 或 kWh 数量规则：按投放事件计量或分配水、氧气、船舶燃料、拖带、运输、麻醉剂、转运设备和操作投入 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每次投放事件，并在归一化后每 1,000 kg 可销售参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_stock_origin_capture_transfer_and_stocking_records_stock_capture_hatchery_transfer_and_stocking` 来源：`fao-capture-based-aquaculture-guidelines-2011`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_transfer_mortalities_and_rejected_stock` | `stock_capture_hatchery_transfer_and_stocking`; outputs; waste | 按“转运死亡和剔除种群”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位：质量或尾数 / kg 或 item 数量规则：计量死亡尾数、可获得时的死亡质量、剔除种群、残余物质量、处置路线和回收路线 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每次投放事件，并在归一化后每 1,000 kg 可销售参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_mortality_residue_and_escape_records_stock_capture_hatchery_transfer_and_stocking` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_feed_fresh_bait_and_feed_additives` | `growout_fattening_and_husbandry`; inputs; product | 按“饲料、鲜饵和饲料添加物”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位：质量、体积、活性成分或剂量 / kg、L、g active ingredient 或 dose 数量规则：计量配合饲料、鲜饵、冻饵、活饵、药饵、添加物、投喂损失以及供应方或饵料物种基准 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每个养成或育肥批次，并在归一化后每 1,000 kg 可销售参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_feed_bait_and_feed_composition_records_growout_fattening_and_husbandry` 来源：`fao-atlantic-bluefin-tuna-culture`, `fao-capture-based-aquaculture-2008`, `asc-feed-standard-2026`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_growout_water_energy_fuel_cage_materials_and_services` | `growout_fattening_and_husbandry`; inputs; product | 按“养成水、电力、燃料、网箱材料和服务”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位：质量、体积、能量、燃料、件数、长度或服务量 / kg、m3、kWh、L、MJ、item、m 或 service unit 数量规则：计量或分配受控水、电力、船舶燃料、网箱材料、网衣清洗、监测、增氧、养殖服务和维护投入 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每个养殖单元，并在归一化后每 1,000 kg 可销售参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_water_energy_vessel_cage_and_site_records_growout_fattening_and_husbandry` 来源：`fao-capture-based-aquaculture-guidelines-2011`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_mortalities_uneaten_feed_residues_and_escaped_fish` | `growout_fattening_and_husbandry`; outputs; waste | 按“死亡、未食饵料、残余物和逃逸鱼”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位：质量或尾数 / kg 或 item 数量规则：计量死亡尾数和质量、饲料残余、污泥或有机残余物、适用时的逃逸尾数、去向、处置路线、回收路线和受纳环境 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每个养成或育肥批次，并在归一化后每 1,000 kg 可销售参考产品 基准类型：过程输出（`process_output`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_mortality_residue_and_escape_records_growout_fattening_and_husbandry` 来源：`asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_chilling_packaging_water_electricity_and_ice_inputs` | `harvest_live_holding_chilling_and_packout`; inputs; product | 按“冷藏、包装、水、电力和冰投入”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位：质量、体积、能量或件数 / kg、m3、kWh 或 item 数量规则：计量包装、冰、冷藏、清洗、活体暂养氧气、电力、制冷剂服务和发运准备数量 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 可销售参考产品 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_packaging_ice_chilling_and_dispatch_records_harvest_live_holding_chilling_and_packout` 来源：`codex-cxc-52-2003`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_handling_rejects_bleed_water_packaging_waste_and_residues` | `harvest_live_holding_chilling_and_packout`; outputs; waste | 按“处理剔除物、放血水、包装废物和残余物”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位：质量或体积 / kg 或 m3 数量规则：计量剔除鱼、处理损失、放血水、废水、包装废物、残余物质量、处置路线、回收路线和受纳环境 数值来源模式：前景记录（`foreground_record`） 适用范围：场址特定（`site_specific`） 归一化基准：每 1,000 kg 可销售参考产品 基准类型：参考流（`reference_flow`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_mortality_residue_and_escape_records_harvest_live_holding_chilling_and_packout` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_delivery_fuel_electricity_refrigerant_and_packaging_support` | `delivery_to_declared_gate`; inputs; product | 按“交付燃料、电力、制冷服务和包装支持”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位：燃料、能量、质量或运输服务 / L、MJ、kWh、kg 或 tonne-km 数量规则：仅当声明参考流交付超过养殖场、收获、发运或包装场边界时纳入；记录距离、方式、装载率、温控、活体暂养条件和相关返程物流 数值来源模式：前景记录（`foreground_record`） 适用范围：路线特定（`route_specific`） 归一化基准：每 1,000 kg 已交付参考产品或 tonne-km 基准类型：运输服务（`transport_service`） 证据类型：采集记录（`collected_record`） 采集协议：`cp_delivery_records_delivery_to_declared_gate` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |

## 9. 验证规则

| rule_id | Rule | Severity | Failure message |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | error | 按实际物种、生命阶段、产品形态/状态及最终门独立核实参考身份；分类标签或卸港活体UUID不能自动用于农场、包装或交付门，旧集合UUID不授予任何绑定。 |
| `val_not_wild_only` | 数据集具有超过野捕和捕后处理的受控养殖、牧场式养殖或育肥证据。 | error | 仅野捕属于野生金枪鱼 PCR，不属于本养殖产品 PCR。 |
| `val_capture_based_stock_trace` | 捕获式路线包括捕获或供应来源、许可或合法证据、转运、投放、死亡和收获核对。 | error | 捕获式养殖路线缺少必需的种群可追溯证据。 |
| `val_mass_basis` | 产品质量基准声明为活、鲜、冷藏、去内脏、放血、沥水、不含冰或其他已说明产品基准。 | error | 产品质量基准缺失或不清晰。 |
| `val_feed_bait_basis` | 饲料或饵料行区分干、湿、鲜、冻、活、解冻、药饵或声明饲料基准。 | warning | 在比较或归一化投入前，应声明饲料或饵料基准。 |
| `val_required_qualifiers` | 必需限定信息出现在元数据或过程说明中。 | warning | 参考流限定信息不完整。 |
| `val_structured_sync` | 编辑后从双语 Markdown 重新生成 `structured.yaml`。 | error | 结构化投影与已编写 PCR Markdown 不同步。 |
| `val_final_gate_completion` | error | 核对唯一 declared_gate_release 参考输出1千克、正值最终验收净kg分母、实际纳入或旁路delivery以及所有独立实测内部转移、拒收与损失。核查每项dq_complete责任的实际子交换、原生单位、归一化、独立Range证据、UUID、去向和不重复归属；任一缺失使最终数据包不完整且失败。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 活、鲜或冷藏养殖金枪鱼、鲣鱼或扁舵鲣的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`; 在保留场址特定养殖记录时作为 process 或 lifecyclemodel 构建的前景参考 |
| allowed_use | 对声明为养殖或养殖育肥的金枪鱼类活、鲜或冷藏产品，在养殖场、收获、发运、包装场或交付边界进行 LCA 建模 |
| excluded_use | 仅捕捞和处理的野生金枪鱼；冷冻金枪鱼；加工金枪鱼；罐装金枪鱼；鱼片或鱼柳；非金枪鱼养殖鱼；观赏鱼；鱼苗；作为单独产品的鱼卵、鱼油、下脚料、死亡鱼、污泥或残余物；没有单独审查方法的生态系统服务信用 |
| required_metadata | canonical PCR id；CPC 3.0 代码；物种；种群来源；捕获式状态；养殖系统；投放日期和生物量；产品形态；规格等级；活/鲜/冷藏状态；饲料或饵料基准；死亡和逃逸披露；收获和暂养条件；包装状态；声明边界；地理位置；报告期；数据所有者；未解决 UUID 替代项 |
| required_quality_disclosure | 养殖生产证据、适用时的捕获式种群可追溯性、质量平衡闭合、饲料和饵料基准、时间覆盖、分配基准、上游数据集链接、缺失前景记录、代理行，以及仅用于 QA 筛选的推理估算范围 |
| update_trigger | Tiangong 中新增金枪鱼鱼卵、仔鱼、幼鱼、配合饲料、饵料物种、氧气、网箱材料、逃逸、残余物、冰或交付服务流身份；关于饲料转化、死亡、转运损失、燃料、网箱服务或冷藏范围的经审查定量证据；FAO、Codex、ASC 或法律要求更新；分类映射变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-atlantic-bluefin-tuna-culture` | official_guidance | FAO Cultured Aquatic Species Information Programme, Atlantic bluefin tuna (`Thunnus thynnus`) cultured species profile, https://www.fao.org/fishery/culturedspecies/thunnus_thynnus/en | 金枪鱼养殖路线、产品边界、种群和养殖管理背景 |
| `fao-capture-based-aquaculture-2008` | literature | FAO Fisheries Technical Paper No. 508, Capture-based aquaculture: global overview, including bluefin tuna chapter, https://openknowledge.fao.org/handle/20.500.14283/y5258e | 捕获式养殖过程分解、种群捕获和育肥背景 |
| `fao-capture-based-aquaculture-guidelines-2011` | official_guidance | FAO Technical Guidelines for Responsible Fisheries, Responsible use of wild fishery resources for capture-based aquaculture, https://www.fao.org/4/ba0059e/ba0059e.pdf | 捕获式边界、种群可追溯性、转运、许可和负责任使用披露 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | 活、鲜、冷藏鱼处理、卫生、产品状态和最终处理背景 |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council, ASC Farm Standard v1.0.1, 2025, https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf | 养殖场管理、可追溯性、死亡、逃逸、健康、福利和环境披露 |
| `asc-feed-standard-2026` | standard | Aquaculture Stewardship Council, ASC Feed Standard v1.2 update, https://asc-aqua.org/producers/get-certified-feed-mill/asc-feed-standard-v1-2-update/ | 饲料供应方和成分披露背景 |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs plus growth or transformation minus losses under declared product basis | 归一化、分配、种群平衡、得率和交付计算 |
| `ghg-product-allocation` | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard，第9章，https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf （2026-10-16核读第60–70印刷页） | 本PCR显式采用的细分、因果物理及经济分配层级；不提供养殖绩效、实际份额或非GHG影响评价结论 |
