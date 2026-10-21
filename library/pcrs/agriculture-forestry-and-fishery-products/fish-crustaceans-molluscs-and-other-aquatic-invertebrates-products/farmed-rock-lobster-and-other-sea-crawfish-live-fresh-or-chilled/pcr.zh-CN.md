---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-rock-lobster-and-other-sea-crawfish-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 养殖岩龙虾和其他海螯虾，活、鲜或冷藏

## 1. 范围和适用性

本 PCR 用于指导 CPC 3.0 `04322` 中养殖岩龙虾和其他海螯虾的前景数据包构建，产品状态为活、鲜或冷藏。适用范围包括 Palinurus spp.、Panulirus spp.、Jasus spp. 以及其他岩龙虾或海螯虾类群，只要报告方控制孵化、育苗、眼幼体或稚体接收、养成、海笼、池塘、池槽、牧场化、活养、冷藏、包装或交付活动。

覆盖产品包括来自养殖路线、以整只或声明产品基准销售的岩龙虾和海螯虾，可带壳或去壳，状态为活、鲜或冷藏。默认路线覆盖生物起始存量来源、受控孵化或育苗、养成管理、采收、分级、活养或冷藏、包装，以及在声明门点放行。

排除产品包括野生岩龙虾和其他海螯虾、Homarus 龙虾、挪威海螯虾、螃蟹、虾、对虾、不属于本 CPC 类别的淡水螯虾、冷冻、干制、盐渍、盐水浸泡、熟制、罐藏、仅肉制品、预制或保藏产品，作为单独投入销售的苗种，以及作为单独产品建模的壳、蜕壳或加工残渣。

由于商业化刺龙虾和岩龙虾养殖往往依赖区域特定的眼幼体、稚体、孵化或养成供应链，合规数据集必须证明受控养殖活动。仅有野生捕捞后活养、冷藏、分级或发运的系统不属于本 PCR。

仅暂养、运输、保鲜、包装或转售不能构成养殖生产；须有受控生物生长、繁育或育肥的实际活动证据。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-rock-lobster-and-other-sea-crawfish-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04322`, `Farmed rock lobster and other sea crawfish, live, fresh or chilled`; narrower |
| covered_products | 来自声明养殖、孵化、育苗、养成、海笼、池塘、池槽、牧场化或增殖系统的 Palinurus spp.、Panulirus spp.、Jasus spp. 以及其他岩龙虾或海螯虾，状态为活、鲜或冷藏 |
| excluded_products | 野生岩龙虾和海螯虾；Homarus 龙虾；挪威海螯虾；不属于 CPC `04322` 的螃蟹、虾、对虾和淡水螯虾；冷冻、干制、盐渍、盐水浸泡、熟制、罐藏、仅肉制品、预制或保藏产品；作为单独产品销售的苗种或稚体；作为单独产品的壳、蜕壳和残渣 |
| representative_product | 达到声明上市规格和声明产品形态的活或冷藏养殖岩龙虾或海螯虾 |
| production_route | 生物起始存量来源、受控孵化或育苗、养成管理、采收、分级、活养或冷藏、包装和声明门点放行 |
| market_state | 活、鲜或冷藏岩龙虾或海螯虾，并声明物种、存量来源、养殖系统、规格等级、产品基准、活养或冷藏状态、包装状态和门点 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 作为活、鲜或冷藏市场产品的养殖岩龙虾和其他海螯虾 |
| How much | 1 kg |
| How well | 声明物种或类群、养殖证明、养殖系统、活/鲜/冷藏状态、整只或声明产品基准、规格等级、采收和活养条件以及门点 |
| How long or cycle | 一个养殖生产批次、养成批次、采收批次或报告期，并归一化到可销售产品输出 |
| reference_flow_link | `qualified_product_gate_release` |

| Field | Value |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 声明最终门实际状态的养殖岩龙虾或海螯虾产品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或类群；眼幼体、后期幼体、稚体、亲体、孵化场、采集者或养成存量来源；养殖系统；养殖证明或受控养殖期；产品状态；整只、活、鲜、冷藏、明确声明的尾部产品或声明产品基准；规格等级、头胸甲长、个体质量或每 kg 只数；适用时的带壳或去壳基准；水分或沥水基准；地理位置和声明门点；活养或冷藏时长；投喂制度或天然饵料声明；水温、盐度和换水；健康、生物安全、许可或认证状态 |

构建前景数据包时，`Required qualifiers` 中的项目必须在数据集元数据、过程注释、参考流说明、产品描述或等效数据包字段中声明。缺少必需限定信息会使该数据包的参考流定义不完整。

质量是主要参考基准。只数、周转箱、活鱼箱、笼、池、池槽、眼幼体、稚体、规格等级、头胸甲长或个体质量记录，只有在保留净质量、每 kg 只数或平均个体质量、产品形态、抽样方法和皮重方法时才能使用。

声明一个实际最终门、实际产品形态/状态和正值合格净交付质量。若纳入 delivery_to_declared_gate，则先完成实际交付、损失和验收再放行；否则从包装阶段实际交接。不得任选更早分母、固定内部产量、把两路相加或默认交付状态；未纳入后续运输须明确记录。保留全部前阶段实际收率、原始批次及每1000kg口径，通过明确换算统一为每1kg最终参考。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `final_gate_normalization` | 所有清单行 | 实际交换的原生属性 | 每1kg最终参考的原生单位 | 原始批次/事件量先按实际所有权与分配归属，再除以 declared_gate_release 的正值验收合格净kg；同边界每1000kg最终产品值除以1000。阶段产出分母须通过实测批次流转和收率转换，禁止直接当最终分母；鱼/动物生物批次不是机器M。 |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明活、鲜或冷藏产品形态下的 kg 养殖岩龙虾或海螯虾。 |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | 数据集记录必须证明受控养殖生产，而不是仅有野生捕捞后的活养、冷藏、分级或发运。 |
| `product_form_mass_basis` | whole, live, fresh, chilled, tailed, drained, or packed records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品质量必须说明活体整只质量、冷藏整只质量、沥水质量、特殊声明的尾部质量或其他合同声明基准。只有具备实测得率证据时才能转换。 |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 只数记录在归一化前必须包括每 kg 只数或平均个体质量、头胸甲长或规格等级、抽样方法和产品形态。 |
| `life_stage_identity` | broodstock, pueruli, postlarvae, juveniles, and transferred stock | Mass or count | kg, item, puerulus count, postlarval count, or juvenile count | 生命阶段记录必须保留类群、生命阶段、供应方或孵化场、批次、只数、可计量时的质量、发育阶段、健康状态和转移日期。 |
| `feed_mass_basis` | live feed, trash fish, mussel, formulated feed, supplements, and natural-feed claims | Mass, count, or service basis | kg, g, item, or cage-day | 饲料记录必须说明湿基、干基、投喂基准、活饵、配合饲料或天然饵料基准。声明天然饵料养成系统时，必须证明未添加饲料并保留养成服务基准。 |
| `water_temperature_salinity_and_volume` | hatchery, nursery, grow-out, live holding, washing, chilling, and wastewater | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | 保留受控水量、水温、盐度、换水、循环、补水和排放基准。若能耗依赖冷却或加热，必须声明温控条件。 |
| `energy_and_fuel_inventory` | pumps, aeration, oxygenation, chilling, heating, filtration, lighting, vessels, vehicles, and delivery | Energy or fuel quantity | kWh, MJ, L, or kg | 在归一化到参考流前保留电力、燃料、氧气或能源载体原始单位。 |
| `chemical_and_health_treatment_basis` | disinfectants, probiotics, medicines, water-treatment chemicals, oxygen, anesthetic, and salt | Mass, volume, or active ingredient | kg, L, g active ingredient, or m3 gas | 记录产品用量、适用时的有效成分、处理目的、诊断或健康计划链接、法律状态以及对上市资格的影响。 |
| `packaging_and_ice_basis` | crates, boxes, bags, liners, bands, labels, insulated containers, ice, gel packs, oxygenated bags, and pallets | Mass or item count | kg or item | 包装、冰、活运包装和容器在归一化前必须保留材料类型、件数、皮重或填充质量、重复使用率和目的地。 |

关键产品属性作为前景限定信息与质量参考流一并记录：

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species or taxon | scientific and common name | 所有数据集必需 |
| Culture system | hatchery, nursery, pond, tank, RAS, sea cage, suspended cage, ranching area, enhancement area, or declared variant | 用于边界、水、饲料、死亡和排放解释 |
| Biological starting condition | broodstock, hatchery seed, pueruli, postlarvae, juveniles, wild-collected seed, supplier stock, or grow-out transfer | 用于区分养殖生产和野生捕捞 |
| Product form | live whole, fresh whole, chilled whole, shell-on, shell-off, tail-only if exceptionally declared, or declared variant | 用于质量基准解释 |
| Size grade | count per kg, mean individual mass, carapace length, sex, maturity class, or market grade | 使用只数或等级记录时必需 |

## 5. 系统边界

默认边界覆盖受前景控制的养殖岩龙虾和海螯虾生产，直到声明农场、孵化场、采收、包装场、发运或交付门点：

1. 亲体、孵化苗、眼幼体、后期幼体、稚体或养成存量来源，包括报告方控制的现场孵化和育苗活动；若由其他孵化场、渔民、采集者或养殖场供应，则披露采购或采集存量。
2. 孵化、育苗、养成、笼养、池塘、池槽、RAS、牧场化或增殖管理，包括投放、饲料或天然饵料管理、取水和换水、曝气、充氧、过滤、温控、盐度控制、庇护结构、健康管理、生物安全、死亡、蜕壳和直接受控维护。
3. 采收、分级、清洗、活养、冷藏、包装和声明门点放行。
4. 当参考流是交付产品而不是农场、采收、发运或包装场门点产品时，纳入到声明门点的交付。

资本品和长期基础设施仅在声明数据包范围要求时纳入。外购饲料、活饵、生物存量、笼具、网具、庇护结构、包装、冰、氧气、电力、燃料和化学品需要上游数据集，除非同一运营方控制并在前景包中报告其生产。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_broodstock_hatchery_seed_puerulus_postlarval_juvenile_or_growout_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04322`, `Farmed rock lobster and other sea crawfish, live, fresh or chilled` |
| recursive_input_rule | 用于生产市场产品的养殖岩龙虾亲体、孵化苗、眼幼体、后期幼体、稚体或养成存量，应记录为带有供应方、孵化场、采集者、养殖场、生命阶段、来源和健康披露的生物起始条件，而不是递归作为成品参考产品输出 |
| upstream_dataset_requirement | 亲体、孵化、眼幼体、后期幼体、稚体、养成存量或供应方数据集，或记录来源、物种、批次、只数或质量、生命阶段、健康或生物安全状态、转移许可和认证或许可证据 |
| disclosure | 披露物种或类群、养殖系统、生物起始条件、养殖生产证据、放养密度或笼数、投喂制度或天然饵料声明、水源、水温、盐度和换水、曝气或充氧、健康处理、死亡和蜕壳记录、采收和活养条件、产品形态、包装状态、声明门点以及未解决的 Tiangong UUID 替代 |

## 6. 过程清单结构

### Process Map

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| biological_stock_hatchery_nursery_and_stocking | Biological Stock, Hatchery, Nursery, and Stocking | required | 必须声明生物起始条件；现场孵化和育苗由报告方控制时纳入 | foreground/upstream bridge | 进入养成的可存活眼幼体、后期幼体、稚体或投放岩龙虾 |
| growout_and_husbandry | Grow-out and Husbandry | required | 纳入池塘、池槽、RAS、笼、海笼、牧场化、增殖或声明养成系统 | foreground production | 最终处理前的采收规格岩龙虾或海螯虾 |
| harvest_live_holding_chilling_and_packout | Harvest, Live Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | 声明的可销售活、鲜或冷藏岩龙虾或海螯虾 |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | 当参考流为农场、采收、发运或包装场之外的交付产品时纳入 | foreground transport | 声明门点交付产品 |
| declared_gate_release | 声明最终门验收与放行 | required | 每个合格批次；先完成实际纳入的可选交付 | 唯一最终参考、实际状态和拒收；无虚构重复作业 | 最终验收合格净质量1千克 |

### Process: 生物存量、孵化、育苗和投放 (`biological_stock_hatchery_nursery_and_stocking`)

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 活岩龙虾亲体 (`stock_broodstock`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活岩龙虾亲体
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### 活岩龙虾透明幼体 (`stock_pueruli`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活岩龙虾透明幼体
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### 活岩龙虾后期幼体 (`stock_postlarvae`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活岩龙虾后期幼体
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### 活岩龙虾幼虾 (`stock_juveniles`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：活岩龙虾幼虾
- 流属性/单位：Mass / kg
- 数量规则：按实际物种和本生命阶段独立计量可测净湿质量；计数须配合同阶段代表性实测重量和不确定性，不能使用通用每尾/每卵重量；保留来源、阶段所有权及上游负荷；按最终门合格净质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### 声明供应方和电压的电力 (`biological_stock_hatchery_nursery_and_stocking_electricity`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明供应方和电压的电力
- 流属性/单位：Net calorific value / kWh
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### 柴油 (`biological_stock_hatchery_nursery_and_stocking_diesel`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### 声明来源和处理状态的外供液态水 (`biological_stock_hatchery_nursery_and_stocking_supplied_water`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明来源和处理状态的外供液态水
- 流属性/单位：Mass / kg
- 数量规则：仅本项外供水独立实测质量；体积计量须有实际温度/盐度/密度。自然取水与内部循环另记，不将循环量再从外部取水扣减或重复增加供应负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

###### 氧气 (`biological_stock_hatchery_nursery_and_stocking_gaseous_oxygen`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：仅实际外购气态氧独立计量质量，记录纯度、压力、温度和交付状态；不把空气曝气、溶解氧监测或制氧设备用电当成购买氧气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 按实际物种和生命阶段交接的活养殖岩龙虾或海螯虾存量 (`accepted_stock_transfer`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：按实际物种和生命阶段交接的活养殖岩龙虾或海螯虾存量
- 流属性/单位：Mass / kg
- 数量规则：同物种、生命阶段和批次的实测可接受净湿生物量与辅助计数；记录所有孵化/培育增长、转运、死亡、拒收与源/接收交接号。按最终合格净交付质量归一化，不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

##### 废物流

##### 基本流

###### 二氧化碳（化石），排放到空气，未指定 (`biological_stock_hatchery_nursery_and_stocking_fossil_co2`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：仅本节点实有柴油燃烧的化石二氧化碳，按实测燃料及独立适用碳含量/氧化率或排放因子证据计算，或直接测量；不得用通用因子或供应链排放替代；按最终门净参考质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking`

### Process: 养成和养殖管理 (`growout_and_husbandry`)

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

###### 养成接收的实际物种与生命阶段活养殖岩龙虾或海螯虾存量 (`stock_received_for_growout`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：养成接收的实际物种与生命阶段活养殖岩龙虾或海螯虾存量
- 流属性/单位：Mass / kg
- 数量规则：独立实测本单元接收的净湿生物量，按物种、生命阶段、批次和交接号核对 accepted_stock_transfer 或真实外购来源及上游负荷；按最终合格净交付质量归一化，内部量不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_husbandry`

###### 声明供应方和电压的电力 (`growout_and_husbandry_electricity`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明供应方和电压的电力
- 流属性/单位：Net calorific value / kWh
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_husbandry`

###### 柴油 (`growout_and_husbandry_diesel`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_husbandry`

###### 声明来源和处理状态的外供液态水 (`growout_and_husbandry_supplied_water`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明来源和处理状态的外供液态水
- 流属性/单位：Mass / kg
- 数量规则：仅本项外供水独立实测质量；体积计量须有实际温度/盐度/密度。自然取水与内部循环另记，不将循环量再从外部取水扣减或重复增加供应负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_husbandry`

###### 氧气 (`growout_and_husbandry_gaseous_oxygen`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：仅实际外购气态氧独立计量质量，记录纯度、压力、温度和交付状态；不把空气曝气、溶解氧监测或制氧设备用电当成购买氧气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_husbandry`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收获前活体养殖岩龙虾或海螯虾动物净质量 (`harvest_size_farmed_rock_lobster_and_sea_crawfish`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：收获前活体养殖岩龙虾或海螯虾动物净质量
- 流属性/单位：Mass / kg
- 数量规则：按相同批次、物种、实际生命阶段/产品状态和交接号实测净动物质量，记录计数、增长、损失与去向；按唯一最终门合格净质量归一化，内部量不固定为1千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_husbandry`

##### 废物流

##### 基本流

###### 二氧化碳（化石），排放到空气，未指定 (`growout_and_husbandry_fossil_co2`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：仅本节点实有柴油燃烧的化石二氧化碳，按实测燃料及独立适用碳含量/氧化率或排放因子证据计算，或直接测量；不得用通用因子或供应链排放替代；按最终门净参考质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_growout_and_husbandry`

### Process: 采收、活养、冷藏和包装（`harvest_live_holding_chilling_and_packout`）

各交换以实际批次、阶段、物种、状态和交接事件记录；最终分母只在 declared_gate_release 定义。已生成废物和排放属于输出。完整集合采集责任见第8节，未知不等于零。

#### 输入

##### 产品流

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

###### 柴油 (`harvest_live_holding_chilling_and_packout_diesel`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
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

###### 最终处理接收的收获养殖岩龙虾或海螯虾净动物质量 (`harvest_stock_receipt`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：最终处理接收的收获养殖岩龙虾或海螯虾净动物质量
- 流属性/单位：Mass / kg
- 数量规则：本项独立实测量按最终合格净交付质量归一化；保留原生单位和实际密度、组成或能量转换证据。
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

###### 实际状态养殖岩龙虾或海螯虾动物净质量（最终门前实测交接） (`marketable_farmed_rock_lobster_and_sea_crawfish_reference_product`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：实际状态养殖岩龙虾或海螯虾动物净质量（最终门前实测交接）
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

###### 二氧化碳（化石），排放到空气，未指定 (`harvest_live_holding_chilling_and_packout_fossil_co2`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：仅本节点实有柴油燃烧的化石二氧化碳，按实测燃料及独立适用碳含量/氧化率或排放因子证据计算，或直接测量；不得用通用因子或供应链排放替代；按最终门净参考质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_harvest_live_holding_chilling_and_packout`

### Process: 交付至声明门点（`delivery_to_declared_gate`）

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

###### 声明来源和处理状态的外供液态水 (`delivery_to_declared_gate_supplied_water`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明来源和处理状态的外供液态水
- 流属性/单位：Mass / kg
- 数量规则：仅本项外供水独立实测质量；体积计量须有实际温度/盐度/密度。自然取水与内部循环另记，不将循环量再从外部取水扣减或重复增加供应负荷。
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

###### 装载进入受控交付的实际状态养殖岩龙虾或海螯虾产品 (`delivery_product_receipt`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：装载进入受控交付的实际状态养殖岩龙虾或海螯虾产品
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

###### 实际状态养殖岩龙虾或海螯虾动物净质量（最终门前实测交接） (`delivered_farmed_rock_lobster_and_sea_crawfish`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：实际状态养殖岩龙虾或海螯虾动物净质量（最终门前实测交接）
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

###### 声明最终门接收的实际状态养殖岩龙虾或海螯虾产品 (`qualified_product_gate_receipt`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明最终门接收的实际状态养殖岩龙虾或海螯虾产品
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

###### 声明最终门实际状态的养殖岩龙虾或海螯虾产品 (`qualified_product_gate_release`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：声明最终门实际状态的养殖岩龙虾或海螯虾产品
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_gate_acceptance`

##### 废物流

###### 最终验收拒收的养殖岩龙虾或海螯虾动物体 (`final_gate_animal_rejects`)

仅当实际发生且本节点拥有该交换时采集。每项供应/物质/状态分别识别，独立实测其数量，不能复制集合总量或范围。保持原始批次/阶段记录，并按 calc_final_gate_normalization 转至唯一最终门分母；未知不等于零。

- 选定流：最终验收拒收的养殖岩龙虾或海螯虾动物体
- 流属性/单位：Mass / kg
- 数量规则：实际最终验收拒收且送实证处置去向的动物净质量；保留上游负荷并按合格最终净交付质量归一化，未知不得填零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_gate_acceptance`

##### 基本流

## 7. 分配和共产品处理

应尽可能通过分别采集批次、池塘、池槽、笼、孵化、育苗、活养和包装记录来避免分配。同一前景系统生产多个可销售物种、规格等级、苗种、稚体、市场产品、壳、蜕壳或其他产品时，按以下层级处理：

1. 当记录可识别独立养殖单元、批次、物种、规格等级或处理批次时，使用物理拆分。
2. 当资源使用由实测生物量、只数、笼具占用、摄食量、水量、活养时长、吨公里或活养服务驱动时，使用因果物理分配。
3. 只有当物理拆分和因果物理分配不可行时，才使用经济分配；必须披露价格、期间、市场和敏感性。
4. 死亡、剔除物、蜕壳、废水、污泥和废包装默认作为废物流；只有在带有市场价值并作为可销售共产品离开系统时，才作为共产品处理。

野生岩龙虾、Homarus 龙虾、挪威海螯虾、不属于本 CPC 类别的淡水螯虾，以及加工甲壳类产品必须分离到各自 PCR 类别，或作为共产品进行明确分类披露。

采用 GHG Protocol Product Standard 第9章的分配层级作为本PCR的显式方法选择：优先细分；其后使用可证实的因果物理关系；不适用时使用有证据的经济关系。不得仅因易测而默认质量分配。物理台账保留全部未分配数量，LCA视图独立标注并仅分配一次；各输出/节点份额总和为1，不用分配修补物理差额，内部转移不产生销售或替代信用。来源：`ghg-product-allocation`。

## 8. 前景数据采集、计算和质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records_biological_stock_hatchery_nursery_and_stocking` | `biological_stock_hatchery_nursery_and_stocking` | biological starting stock, accepted stock, stocking, transfers | hatchery logs, supplier invoices, collection records, movement permits, batch records | species, life stage, source, batch id, count, mass where available, mean size, health status, movement date, accepted count, rejected count；原始采集口径与原聚合责任：按物种、生命阶段和批次汇总验收存量和损失后归一化到参考产品 | 从孵化、育苗、供应方、采集者、投放和转移记录采集 | kg, item, puerulus count, postlarval count, juvenile count | 每批次或每次转移 | 完整生产批次或报告期 | 进入声明生产路线的所有生物存量 | 每 1 kg 参考流 | supplier document, hatchery log, collector record, health certificate, movement permit, count or weighing record；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_feed_records_biological_stock_hatchery_nursery_and_stocking` | `biological_stock_hatchery_nursery_and_stocking` | feed, bait, live feed, natural-feed claim | feed invoices, recipes, feeding logs, cage or pond records | feed type, supplier, batch, wet/dry/as-fed basis, live-feed counts, quantity, feeding date, target life stage, zero-added-feed evidence where claimed；原始采集口径与原聚合责任：按饲料类型和基准汇总；仅用实测水分或供应商数据转换 | 从发票、孵化配方、投喂日志和养成记录采集 | kg, g, L, item, cage-day, pond-day, tank-day | 每次投喂或批次汇总 | 完整生产批次或报告期 | 纳入生产单元的所有饲料和天然饵料证据 | 每 1 kg 参考流 | invoice, recipe, feed log, natural-feed system record, mass or count measurement；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_feed_records_growout_and_husbandry` | `growout_and_husbandry` | feed, bait, live feed, natural-feed claim | feed invoices, recipes, feeding logs, cage or pond records | feed type, supplier, batch, wet/dry/as-fed basis, live-feed counts, quantity, feeding date, target life stage, zero-added-feed evidence where claimed；原始采集口径与原聚合责任：按饲料类型和基准汇总；仅用实测水分或供应商数据转换 | 从发票、孵化配方、投喂日志和养成记录采集 | kg, g, L, item, cage-day, pond-day, tank-day | 每次投喂或批次汇总 | 完整生产批次或报告期 | 纳入生产单元的所有饲料和天然饵料证据 | 每 1 kg 参考流 | invoice, recipe, feed log, natural-feed system record, mass or count measurement；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_water_energy_and_fuel_records_biological_stock_hatchery_nursery_and_stocking` | `biological_stock_hatchery_nursery_and_stocking` | water, temperature, salinity, discharge, electricity, fuel, oxygenation, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, energy invoices, fuel receipts, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, energy carrier, quantity, equipment or process, effluent volume, nutrient or solids concentration, escape count；原始采集口径与原聚合责任：将取水、排放、能源、燃料和计算负荷归一化到参考产品；保留盐度和温度基准 | 从仪表、监测日志、实验室测试、发票、设备日志和事件记录采集 | m3, kg, deg C, ppt, mg/L, kg load, kWh, MJ, L, item | 至少每批次，以及排放或逃逸事件发生时 | 完整生产批次或报告期 | 所有受控水、能源、燃料和直接释放系统 | 每 1 kg 参考流 | meter records, monitoring sheets, lab reports, invoice, fuel receipt, incident report；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_water_energy_and_fuel_records_growout_and_husbandry` | `growout_and_husbandry` | water, temperature, salinity, discharge, electricity, fuel, oxygenation, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, energy invoices, fuel receipts, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, energy carrier, quantity, equipment or process, effluent volume, nutrient or solids concentration, escape count；原始采集口径与原聚合责任：将取水、排放、能源、燃料和计算负荷归一化到参考产品；保留盐度和温度基准 | 从仪表、监测日志、实验室测试、发票、设备日志和事件记录采集 | m3, kg, deg C, ppt, mg/L, kg load, kWh, MJ, L, item | 至少每批次，以及排放或逃逸事件发生时 | 完整生产批次或报告期 | 所有受控水、能源、燃料和直接释放系统 | 每 1 kg 参考流 | meter records, monitoring sheets, lab reports, invoice, fuel receipt, incident report；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_water_energy_and_fuel_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | water, temperature, salinity, discharge, electricity, fuel, oxygenation, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, energy invoices, fuel receipts, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, energy carrier, quantity, equipment or process, effluent volume, nutrient or solids concentration, escape count；原始采集口径与原聚合责任：将取水、排放、能源、燃料和计算负荷归一化到参考产品；保留盐度和温度基准 | 从仪表、监测日志、实验室测试、发票、设备日志和事件记录采集 | m3, kg, deg C, ppt, mg/L, kg load, kWh, MJ, L, item | 至少每批次，以及排放或逃逸事件发生时 | 完整生产批次或报告期 | 所有受控水、能源、燃料和直接释放系统 | 每 1 kg 参考流 | meter records, monitoring sheets, lab reports, invoice, fuel receipt, incident report；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_water_energy_and_fuel_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | water, temperature, salinity, discharge, electricity, fuel, oxygenation, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, energy invoices, fuel receipts, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, energy carrier, quantity, equipment or process, effluent volume, nutrient or solids concentration, escape count；原始采集口径与原聚合责任：将取水、排放、能源、燃料和计算负荷归一化到参考产品；保留盐度和温度基准 | 从仪表、监测日志、实验室测试、发票、设备日志和事件记录采集 | m3, kg, deg C, ppt, mg/L, kg load, kWh, MJ, L, item | 至少每批次，以及排放或逃逸事件发生时 | 完整生产批次或报告期 | 所有受控水、能源、燃料和直接释放系统 | 每 1 kg 参考流 | meter records, monitoring sheets, lab reports, invoice, fuel receipt, incident report；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_treatment_biosecurity_and_health_records_growout_and_husbandry` | `growout_and_husbandry` | health, disinfectant, treatment, biosecurity | treatment logs, veterinary records, chemical invoices, health plans | product name, active ingredient, dose, quantity, target unit, diagnosis or reason, legal status, date, withdrawal or harvest eligibility；原始采集口径与原聚合责任：按产品和有效成分汇总，并保留事件目的和法律状态 | 从处理记录、处方、健康计划和发票采集 | kg, L, g active ingredient, m3 gas | 每次处理事件 | 完整生产批次或报告期 | 所有纳入养殖单元和活养系统 | 每 1 kg 参考流 | treatment log, health plan, veterinary record, invoice；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_molt_residue_and_sludge_records_biological_stock_hatchery_nursery_and_stocking` | `biological_stock_hatchery_nursery_and_stocking` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date；原始采集口径与原聚合责任：按残渣类型和去向汇总；计算相对验收或可销售质量的损失比例 | 从死亡、清洗、分级和废物记录采集 | kg, item, m3 | 每次事件或批次汇总 | 完整生产批次或报告期 | 所有纳入生产和处理单元 | 每 1 kg 参考流 | mortality log, waste note, weighing record, disposal certificate；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_molt_residue_and_sludge_records_growout_and_husbandry` | `growout_and_husbandry` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date；原始采集口径与原聚合责任：按残渣类型和去向汇总；计算相对验收或可销售质量的损失比例 | 从死亡、清洗、分级和废物记录采集 | kg, item, m3 | 每次事件或批次汇总 | 完整生产批次或报告期 | 所有纳入生产和处理单元 | 每 1 kg 参考流 | mortality log, waste note, weighing record, disposal certificate；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date；原始采集口径与原聚合责任：按残渣类型和去向汇总；计算相对验收或可销售质量的损失比例 | 从死亡、清洗、分级和废物记录采集 | kg, item, m3 | 每次事件或批次汇总 | 完整生产批次或报告期 | 所有纳入生产和处理单元 | 每 1 kg 参考流 | mortality log, waste note, weighing record, disposal certificate；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_mortality_molt_residue_and_sludge_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date；原始采集口径与原聚合责任：按残渣类型和去向汇总；计算相对验收或可销售质量的损失比例 | 从死亡、清洗、分级和废物记录采集 | kg, item, m3 | 每次事件或批次汇总 | 完整生产批次或报告期 | 所有纳入生产和处理单元 | 每 1 kg 参考流 | mortality log, waste note, weighing record, disposal certificate；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_harvest_and_product_mass_records_growout_and_husbandry` | `growout_and_husbandry` | harvest-size output, reference product, product grade | harvest records, grading logs, sales records, packing records | harvest date, species, count, net mass, size grade, product state, mortality, culls, packed mass, gate；原始采集口径与原聚合责任：归一化前核对采收、包装、剔除和交付质量 | 从采收称重、分级、包装和销售记录采集 | kg, item, count per kg | 每次采收或包装批次 | 完整生产批次或报告期 | 参考流包括的所有产品批次 | 每 1 kg 参考流 | scale ticket, packing record, sales note, batch reconciliation；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | harvest-size output, reference product, product grade | harvest records, grading logs, sales records, packing records | harvest date, species, count, net mass, size grade, product state, mortality, culls, packed mass, gate；原始采集口径与原聚合责任：归一化前核对采收、包装、剔除和交付质量 | 从采收称重、分级、包装和销售记录采集 | kg, item, count per kg | 每次采收或包装批次 | 完整生产批次或报告期 | 参考流包括的所有产品批次 | 每 1 kg 参考流 | scale ticket, packing record, sales note, batch reconciliation；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_packaging_live_holding_and_chilling_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | packaging, holding water, ice, oxygen, live transport preparation | packaging inventory, live tank logs, ice logs, oxygen logs | material type, item count, mass, reuse rate, water volume, oxygen quantity, ice mass, holding duration；原始采集口径与原聚合责任：按产品批次质量、活养时长或直接领用记录分摊 | 从库存、活养箱日志和包装记录采集 | kg, item, m3, L, m3 gas, hour | 每个包装批次 | 完整生产批次或报告期 | 所有最终处理和包装活动 | 每 1 kg 参考流 | inventory issue, live tank log, weighing record, oxygen invoice；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_delivery_and_route_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | delivery transport and route losses | delivery log, vehicle record, fuel receipt, customer receipt | origin, destination, distance, product mass, vehicle or service, fuel, electricity, ice, oxygen, delivery condition, loss count or mass；原始采集口径与原聚合责任：计算吨公里或直接路线清单，并归一化到交付质量 | 从交付、车辆、货运和签收记录采集 | km, tonne-km, L, kg, kWh, item | 每条交付路线 | 报告期内交付 | 纳入声明门点的所有交付路线 | 每 1 kg 参考流 | route log, fuel receipt, freight invoice, delivery receipt；保留原始批次、阶段、每1000kg和原生单位记录；依 calc_final_gate_normalization 显式转换，禁止伪装为每台机器采集。 |
| `cp_atomic_inventory_biological_stock_hatchery_nursery_and_stocking` | `biological_stock_hatchery_nursery_and_stocking` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_atomic_inventory_growout_and_husbandry` | `growout_and_husbandry` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_atomic_inventory_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_atomic_inventory_delivery_to_declared_gate` | `delivery_to_declared_gate` | 本节点每项实际原子交换 | 独立称重/计量、批次/交接、发票、库存和监测/因子证据 | 实际物种/生命阶段/状态；批次、事件、交接号和时期；每项具体物质/供应方/电压/组成；独立原始数量和原生单位；温度/盐度/密度；计数及同阶段代表性净重；饲料/活体增长与库存；燃料碳含量、发动机、独立因子/测试；气氧纯度/压力；废物去向、接收介质、排放物质；分配；最终合格净kg；原始每1000kg及阶段口径 | 校准秤/仪表独立计量每项实际交换，核对同批次/阶段的原始协议、发票、实际状态、流转、损失、去向和实证因子；按calc_final_gate_normalization显式换算且保留原值 | 逐项原生单位，kg、kWh等 | 每项事件及配对批次/时期 | 本节点真实完整阶段和匹配报告期 | 仅本节点及其真实分配份额 | 每 1 kg 参考流 | 校准、原始节点协议、发票、组成/密度、代表性称重、因子/监测和逐流核对 |
| `cp_final_gate_acceptance` | `declared_gate_release` | 唯一最终门接收、验收拒收与参考放行 | 校准称重、批次与买方验收记录 | 所选门和路线；纳入/未纳入delivery证据；配对交接号；物种、状态、形态、批次、时期；到门动物净量；包装、水冰、皮重；拒收、损失、处置；最终合格净kg；资源所有者 | 使用校准秤和同批次交接/验收记录核对真实到门、拒收和最终合格净量；排除自由水、冰和包装；按实际产品形态保留测定收率和不确定性 | kg | 每批次最终交付 | 相同批次和报告期，含纳入交付时间 | 唯一声明最终门 | 每 1 kg 参考流 | 校准、称重、买方验收、状态/路线与拒收处置证据 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_product_mass` | reference product | Q 为按 cp_final_gate_acceptance 在 declared_gate_release 独立实测的同批次、同实际产品状态的正值验收动物净质量。从毛重起算时，仅扣除该次称量实际包含的实测皮重、游离水/冰、拒收或损失，且只扣一次。不得从已经验收的净质量再次扣除拒收或死亡。较早包装、交付、其他预期输出、损失及库存另行核对，不以中间合格质量代替最终 Q。 | `cp_harvest_and_product_mass_records_growout_and_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout`; `cp_packaging_live_holding_and_chilling_records_harvest_live_holding_chilling_and_packout`; `cp_delivery_and_route_records_delivery_to_declared_gate` when delivery is included; `cp_final_gate_acceptance` | kg reference product |  |
| `calc_count_to_mass` | count-based records | mass = count x measured mean individual mass, 或 count / measured count per kg；保留抽样方法和等级 | `cp_biological_stocking_records_biological_stock_hatchery_nursery_and_stocking`; `cp_harvest_and_product_mass_records_growout_and_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | kg equivalent mass |  |
| `calc_stock_acceptance_and_survival` | biological stock and grow-out | 验收或存活比例 = 同一生命阶段和批次的验收或存活只数/生物量除以输入只数/生物量 | `cp_biological_stocking_records_biological_stock_hatchery_nursery_and_stocking`; `cp_mortality_molt_residue_and_sludge_records_biological_stock_hatchery_nursery_and_stocking`; `cp_mortality_molt_residue_and_sludge_records_growout_and_husbandry`; `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout`; `cp_mortality_molt_residue_and_sludge_records_delivery_to_declared_gate`; `cp_harvest_and_product_mass_records_growout_and_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | accepted stock, survival, loss, and residue indicators | `qld-spiny-lobster-aquaculture-2009`; `fisheries-puerulus-2026` |
| `calc_waterborne_load` | discharge and direct releases | 逐物质和实际受纳介质，以匹配时段的实测外排水量和代表性浓度计算外排物质总质量，保留单位换算、检测限及采样不确定性。不同物质或介质分别建卡；背景/进水浓度及净变化另行披露，不得将负的净平衡直接作为负排放或吸收信用。 | `cp_water_energy_and_fuel_records_biological_stock_hatchery_nursery_and_stocking`; `cp_water_energy_and_fuel_records_growout_and_husbandry`; `cp_water_energy_and_fuel_records_harvest_live_holding_chilling_and_packout`; `cp_water_energy_and_fuel_records_delivery_to_declared_gate` | kg nutrient, solids, treatment residue, or other load | `asc-farm-standard-2025` |
| `calc_energy_allocation` | shared energy systems | 优先用直接仪表；否则按设备小时、批次时长、水量、笼具占用或产品质量分摊，并披露所选分摊键 | `cp_water_energy_and_fuel_records_biological_stock_hatchery_nursery_and_stocking`; `cp_water_energy_and_fuel_records_growout_and_husbandry`; `cp_water_energy_and_fuel_records_harvest_live_holding_chilling_and_packout`; `cp_water_energy_and_fuel_records_delivery_to_declared_gate`; `cp_harvest_and_product_mass_records_growout_and_husbandry`; `cp_harvest_and_product_mass_records_harvest_live_holding_chilling_and_packout` | kWh, MJ, or fuel per reference flow | `asc-farm-standard-2025` |
| `calc_delivery_transport_service` | delivery | 按每段实际路线，将实际承运本货批的货载质量（吨）乘该段距离（km），再按匹配最终参考产品的实际产量归一化。货载包含实际随行的载体水、冰和包装，不等于参考产品净质量。共载时使用有因果依据的质量、占用体积或其他已说明分配键。记录空返、冷却、增氧和暂养服务的覆盖；不得把空返的零货载视为零运输负荷。若以实测燃料和直接排放建模，不得重复叠加已覆盖同一负荷的运输服务。 | `cp_delivery_and_route_records_delivery_to_declared_gate` | tonne-km or direct delivery inventory per reference flow |  |
| `calc_final_gate_normalization` | 所有清单行 | 对同边界、同实际状态的每1000kg最终合格产品值除以1000；原始批次或事件量先确定实际所有者和一次性分配，再除以 cp_final_gate_acceptance 的正值最终合格净kg。阶段、收获或包装分母必须通过同批次实测流转及收率映射转换，并保留原值与转换审计轨迹；内部动物与运输载水/冰/包装不是1kg固定投入。 | 原始批次及阶段记录；实测收率与流转；一次性分配；cp_final_gate_acceptance | 每1kg最终参考的原生交换量；原值与换算记录 | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_and_category_identity` | all datasets | 数据集必须识别物种或类群，并证明参考产品属于 CPC `04322`，而不是野生岩龙虾、Homarus 龙虾、挪威海螯虾或加工甲壳类类别。 | species records, classification mapping, product description, sales record |
| `dq_farmed_proof` | all datasets | 数据集必须通过孵化、育苗、养成、笼、池塘、池槽、牧场化或增殖记录证明受控养殖生产。 | stocking log, hatchery record, grow-out record, permit, production plan |
| `dq_mass_balance` | biological stock, harvest, reference product | 生物投入、死亡、剔除、残渣、采收、包装和交付产品记录必须在批次或报告期层面核对。 | batch reconciliation, scale tickets, mortality logs, packing records |
| `dq_water_and_energy_completeness` | water, discharge, energy, fuel | 水、水温、盐度、排放、电力、燃料、充氧和温控记录必须覆盖范围内全部前景过程。 | meter logs, invoices, monitoring records, allocation worksheet |
| `dq_treatment_and_biosecurity_traceability` | health and treatment inputs | 处理剂、消毒剂、麻醉剂、氧气、盐和水质投入必须保留目的、适用时的有效成分、法律状态和上市资格影响。 | treatment log, health plan, veterinary record |
| `dq_live_product_handling` | final product and delivery | 活养、冷藏、包装、交付时长以及死亡或拒收必须可追溯到最终产品批次。 | live tank log, pack-out record, delivery receipt |
| `dq_unresolved_uuid_disclosure` | any row with site-specific flow selection | 任何空白或通用流身份都必须在评审发布前披露，并在可用时替换为选定 Tiangong UUID。 | manifest review metadata, UUID review record |
| `dq_inventory_completion` | 所有具体交换及最终门 | 所有实际交换逐项落实，含所选路线完整水、能源、饲料、处理、包装、服务、资本/替换/清洁及去向；具体已列水电柴油氧气冰卡按实际使用独立计量，未知其他物质须补独立卡。独立Range证据和UUID缺口保留并阻止最终完整性，不得把未知填零。 | 逐流覆盖台账、原始记录、独立范围和身份核实 |
| `dq_complete_biological_stock_input` | `biological_stock_hatchery_nursery_and_stocking`; inputs; product | 按“亲体、孵化苗、眼幼体、后期幼体或稚体”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：本行记录进入声明养殖路线的外购、采集或内部生产生物存量。 流属性/单位： Mass or count with life stage / kg, item, puerulus count, postlarval count, or juvenile count 数量规则： 进入孵化、育苗、养成、牧场化或笼养的实测只数、可计量质量、生命阶段和验收数量 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per 1,000 kg marketable reference product 基准类型： Process output (`process_output`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_biological_stocking_records_biological_stock_hatchery_nursery_and_stocking` 来源： `fao-panulirus-homarus-factsheet`, `qld-spiny-lobster-aquaculture-2009`, `fisheries-puerulus-2026`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_hatchery_nursery_feed` | `biological_stock_hatchery_nursery_and_stocking`; inputs; product | 按“孵化和育苗饲料”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：本行覆盖活饵、丰年虫、鱼类、贻贝、配合开口料、亲体饲料以及类似孵化或育苗饲料。 流属性/单位： Mass, volume, or count / kg, g, L, cyst count, or item 数量规则： 按批次、生命阶段和基准计量饲料或活饵用量 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization 基准类型： Process output (`process_output`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_feed_records_biological_stock_hatchery_nursery_and_stocking` 来源： `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_hatchery_nursery_water_and_energy` | `biological_stock_hatchery_nursery_and_stocking`; inputs; product | 按“孵化和育苗用水与能源”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：本行覆盖现场孵化和育苗中的受控海水、半咸水、过程水、循环补水、电力、燃料、曝气、充氧、过滤和温控。 流属性/单位： Mass, volume, energy, or fuel quantity / kg, m3, kWh, MJ, L, or kg 数量规则： 实测取水、补水、电力、燃料、充氧、冷却、加热或分摊设备服务，并保留水温和盐度基准 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization 基准类型： Process output (`process_output`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_water_energy_and_fuel_records_biological_stock_hatchery_nursery_and_stocking` 来源： `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_hatchery_mortalities_molts_sludge_and_rejected_stock` | `biological_stock_hatchery_nursery_and_stocking`; outputs; waste | 按“孵化死亡、蜕壳、污泥和拒收存量”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Mass or count / kg or item 数量规则： 实测死亡只数、残渣质量、污泥、拒收存量以及处置或回收路线 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization 基准类型： Process output (`process_output`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_mortality_molt_residue_and_sludge_records_biological_stock_hatchery_nursery_and_stocking` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_accepted_pueruli_postlarvae_or_juveniles_for_growout` | `biological_stock_hatchery_nursery_and_stocking`; outputs; product | 按“进入养成的验收眼幼体、后期幼体或稚体”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Mass or count with mean size / kg, item, puerulus count, postlarval count, or juvenile count 数量规则： 接收、孵化、育苗、分级、暂养和转移损失后的验收存量 数值来源模式： Calculated value (`calculated_value`) 适用范围： Site-specific (`site_specific`) 归一化基准： accepted stock entering grow-out or ranching 基准类型： Process output (`process_output`) 证据类型： Calculated from collection (`calculated_from_collection`) 采集协议： `cp_biological_stocking_records_biological_stock_hatchery_nursery_and_stocking` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_growout_feed_bait_natural_feed_and_supplements` | `growout_and_husbandry`; inputs; product | 按“养成饲料、饵料、天然饵料支持和补充物”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Mass or service basis / kg, g, item, cage-day, pond-day, or tank-day 数量规则： 按批次计量饲料或饵料用量；若声明零添加饲料，必须记录笼、池、池槽、投放和暴露条件 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per grow-out batch and per 1,000 kg marketable reference product after normalization 基准类型： Process output (`process_output`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_feed_records_growout_and_husbandry` 来源： `fao-panulirus-homarus-factsheet`, `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_growout_water_cage_service_electricity_and_fuel` | `growout_and_husbandry`; inputs; product | 按“养成用水、笼具服务、电力和燃料”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Mass, volume, energy, fuel quantity, or service basis / kg, m3, kWh, MJ, L, cage-day, pond-day, or tank-day 数量规则： 实测取水、换水、笼具服务、船只作业、泵送、曝气、充氧、过滤、燃料和分摊设备服务，并保留水温、盐度和养殖单元 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per grow-out batch and per 1,000 kg marketable reference product after normalization 基准类型： Process output (`process_output`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_water_energy_and_fuel_records_growout_and_husbandry` 来源： `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_health_biosecurity_and_water_treatment_inputs` | `growout_and_husbandry`; inputs; product | 按“健康、生物安全和水处理投入”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Mass, volume, active ingredient, or gas volume / kg, L, g active ingredient, or m3 数量规则： 实测产品用量、适用时的有效成分、处理原因、法律状态和上市资格影响 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per treatment event and per 1,000 kg marketable reference product after normalization 基准类型： Process output (`process_output`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_treatment_biosecurity_and_health_records_growout_and_husbandry` 来源： `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_growout_mortalities_molts_shells_sludge_and_residues` | `growout_and_husbandry`; outputs; waste | 按“养成死亡、蜕壳、壳、污泥和残渣”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Mass or count / kg or item 数量规则： 实测死亡只数、残渣质量、移除的生物污损、污泥、剔除物以及处置或回收路线 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per grow-out batch and per 1,000 kg marketable reference product after normalization 基准类型： Process output (`process_output`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_mortality_molt_residue_and_sludge_records_growout_and_husbandry` 来源： `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_direct_waterborne_emissions_and_escapes` | `growout_and_husbandry`; outputs; elementary | 按“直接水体排放和逃逸”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Mass, count, or concentration-load / kg, g, item, or kg nutrient 数量规则： 根据水质记录、排水量、处理记录、已知逃逸只数和质量平衡检查实测或计算负荷 数值来源模式： Calculated value (`calculated_value`) 适用范围： Site-specific (`site_specific`) 归一化基准： per 1,000 kg marketable reference product 基准类型： Process output (`process_output`) 证据类型： Calculated from collection (`calculated_from_collection`) 采集协议： `cp_water_energy_and_fuel_records_growout_and_husbandry` 来源： `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_holding_water_ice_oxygen_and_packaging` | `harvest_live_holding_chilling_and_packout`; inputs; product | 按“活养水、冰、氧气和包装”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Mass, volume, gas volume, or item count / kg, m3, L, m3 gas, or item 数量规则： 实测材料、水、冰、氧气和包装用量，并保留重复使用率、皮重和产品基准 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per 1,000 kg marketable reference product 基准类型： Reference flow (`reference_flow`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_packaging_live_holding_and_chilling_records_harvest_live_holding_chilling_and_packout` 来源： `codex-cxc-52-2003`, `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_live_holding_chilling_and_packout_energy` | `harvest_live_holding_chilling_and_packout`; inputs; product | 按“活养、冷藏和包装能源”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Energy or fuel quantity / kWh, MJ, L, or kg 数量规则： 用于活养、冷藏和包装的实测电力、燃料采购或分摊能源记录 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per 1,000 kg marketable reference product 基准类型： Reference flow (`reference_flow`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_water_energy_and_fuel_records_harvest_live_holding_chilling_and_packout` 来源： `asc-farm-standard-2025` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_packout_rejects_mortalities_wastewater_and_used_packaging` | `harvest_live_holding_chilling_and_packout`; outputs; waste | 按“包装剔除、死亡、废水和使用后包装”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Mass, volume, or count / kg, m3, or item 数量规则： 实测剔除质量或只数、废水量、使用后包装质量以及处置或回收路线 数值来源模式： Foreground record (`foreground_record`) 适用范围： Site-specific (`site_specific`) 归一化基准： per 1,000 kg marketable reference product 基准类型： Reference flow (`reference_flow`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_mortality_molt_residue_and_sludge_records_harvest_live_holding_chilling_and_packout` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_delivery_fuel_energy_and_live_transport_supplies` | `delivery_to_declared_gate`; inputs; product | 按“交付燃料、电力、制冷服务和活运补给”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Fuel, energy, mass, volume, or transport service / L, kg, kWh, MJ, m3, or tonne-km 数量规则： 路线特定的实测燃料、能源、运输服务或补给用量，并保留距离、装载率、活运条件和分配基准 数值来源模式： Foreground record (`foreground_record`) 适用范围： Route-specific (`route_specific`) 归一化基准： per delivered 1,000 kg reference product or tonne-km where transport is modelled as service 基准类型： Transport service (`transport_service`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_delivery_and_route_records_delivery_to_declared_gate` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |
| `dq_complete_delivery_mortalities_rejected_product_and_transport_residue` | `delivery_to_declared_gate`; outputs; waste | 按“交付死亡、拒收产品和运输残渣”采集责任逐项采集实际交换，必须保留下列真实原始数量、批次/阶段、原生单位、去向、采集及范围证据责任：此行记录在声明的过程和系统边界内选定的交换。 流属性/单位： Mass, volume, or count / kg, m3, or item 数量规则： 实测交付损失、死亡只数、拒收质量、残渣数量和处置或回收路线 数值来源模式： Foreground record (`foreground_record`) 适用范围： Route-specific (`route_specific`) 归一化基准： per delivered 1,000 kg reference product 基准类型： Transport service (`transport_service`) 证据类型： Collected record (`collected_record`) 采集协议： `cp_delivery_and_route_records_delivery_to_declared_gate` 所有实有物质、燃料、材料、废物、排放和服务分别形成具体身份卡及独立计量。生成废物和排放为输出，不是投入；逃逸生物与死亡/污泥分别记录。实测每1000kg/阶段及批次口径须按 calc_final_gate_normalization 明确转换至唯一最终门。不得继承集合UUID、总量或Range；集合范围不是各子项允许范围。每项实际子交换的独立Range证据、数量、去向或UUID未落实时，最终数据包不完整并校验失败；未知不等于零。 | 对应节点独立采集协议、原始记录、逐流覆盖台账与身份/去向证据 |

## 9. 验证规则

| Rule id | Severity | Rule |
| --- | --- | --- |
| `val_reference_flow_uuid` | error | 按实际物种、生命阶段、产品形态/状态及最终门独立核实参考身份；分类标签或卸港活体UUID不能自动用于农场、包装或交付门，旧集合UUID不授予任何绑定。 |
| `val_reference_unit` | error | 参考量必须以 kg 表示，并使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 和 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`。 |
| `val_farmed_not_wild` | error | 仅基于野生捕捞、野生卸港或捕捞后活养而无受控养殖生产的数据集不合规。 |
| `val_adjacent_categories` | error | Homarus 龙虾、挪威海螯虾、野生岩龙虾、冷冻、干制、盐渍、盐水浸泡、熟制、罐藏或其他加工甲壳类产品不得作为主参考产品报告在本 PCR 下。 |
| `val_required_qualifiers` | error | 必须提供物种或类群、养殖系统、生物起始条件、产品状态、规格或只数基准、声明门点和养殖证明。 |
| `val_collection_protocol_coverage` | error | 每个 `foreground_record` 或 `calculated_value` 前景清单行必须链接采集协议或计算规则。 |
| `val_mass_balance` | warning | 生物存量、死亡、残渣、采收、包装、剔除和交付质量应核对；无法解释的不平衡必须披露。 |
| `val_range_review` | warning | 推理估算范围是候选 QA 筛查，评审或发布使用前必须替换或说明。 |
| `val_final_gate_completion` | error | 核对唯一 declared_gate_release 参考输出1千克、正值最终验收净kg分母、实际纳入或旁路delivery以及所有独立实测内部转移、拒收与损失。核查每项dq_complete责任的实际子交换、原生单位、归一化、独立Range证据、UUID、去向和不重复归属；任一缺失使最终数据包不完整且失败。 |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 养殖岩龙虾和其他海螯虾前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset when reviewed and geographically representative |
| allowed_use | 对声明门点的活、鲜或冷藏养殖岩龙虾和其他海螯虾进行 LCA 建模，并披露生产路线、产品状态和质量限定信息 |
| excluded_use | 野生岩龙虾和海螯虾；Homarus 龙虾；挪威海螯虾；冷冻、干制、盐渍、盐水浸泡、熟制、罐藏、仅肉制品、预制或保藏甲壳类产品；仅苗种生产；无单独建模的壳、蜕壳或残渣共产品 |
| required_metadata | canonical PCR id; CPC code; species or taxon group; culture system; biological starting condition; farmed production evidence; product form; size grade; mass basis; water temperature and salinity basis; feed regime or natural-feed claim; health and treatment disclosure; packaging state; declared gate; geography; reporting period; allocation method; unresolved UUID substitutions |
| required_quality_disclosure | 生物存量、饲料、水、能源、健康处理、死亡、残渣、产品质量、包装、交付和分配记录的来源与完整性；推理估算范围使用；缺失 Tiangong UUID；对默认边界的偏离 |
| update_trigger | 当 Tiangong 流身份、CPC 映射、已评审岩龙虾养殖证据、来源支撑范围或生产路线发生实质变化时更新 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-panulirus-homarus-factsheet` | official_guidance | FAO Fisheries and Aquaculture. Cultured Aquatic Species Information Programme: Panulirus homarus. https://www.fao.org/fishery/culturedspecies/panulirus_homarus/en | 物种范围、刺龙虾养殖路线、苗种、养成和产品身份背景 |
| `qld-spiny-lobster-aquaculture-2009` | literature | Jones, C. et al. Spiny lobster aquaculture development in Indonesia, Vietnam and Australia. Queensland Department of Primary Industries and Fisheries. https://era.dpi.qld.gov.au/id/eprint/2291/1/pr145-main_report-web-final.pdf | 眼幼体和稚体供应、育苗、养成系统、饲料、笼具和生产路线证据 |
| `fisheries-puerulus-2026` | literature | Sustainability of Puerulus Fisheries Supporting Spiny Lobster Aquaculture in Southeast Asia. Fishes 2026. https://www.mdpi.com/2410-3888/11/3/182 | 野外采集眼幼体依赖、苗种来源披露以及渔业-养殖接口风险 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius. Code of Practice for Fish and Fishery Products, CXC 52-2003. https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | 处理、卫生、活/鲜/冷藏水产品范围、贮存、运输和零售处理背景 |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council. ASC Farm Standard, ASC-STD-001, Version 1.0.1, 2025. https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf | 水产养殖数据质量、环境管理、水质、能源、饲料、健康、福利、逃逸、生物固体和认证相关采集规则 |
| `mass-balance-identity` | method_factor | 本PCR最终门归一化与分阶段实测质量核对的算术定义。 | 统一最终分母、批次/阶段/每1000kg显式换算；不提供生物收率或密度经验数值 |
| `ghg-product-allocation` | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard，第9章，https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf （2026-10-16核读第60–70印刷页） | 本PCR显式采用的细分、因果物理及经济分配层级；不提供养殖绩效、实际份额或非GHG影响评价结论 |
