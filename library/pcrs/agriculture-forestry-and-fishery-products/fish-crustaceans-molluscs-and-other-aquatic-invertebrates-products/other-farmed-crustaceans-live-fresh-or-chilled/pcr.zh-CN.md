---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-farmed-crustaceans-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他养殖甲壳类，活、鲜或冷藏

## 1. 范围与适用性

本方法仅覆盖整只带壳动物作为活、鲜或冷藏参考产品；不覆盖切尾/去头、去壳、取肉或纯肉参考产品，也不设尾部质量的例外参考基准。CPC 子类还包含不带壳形态，因此本 PCR 是较窄的方法子集，分类关系为 narrower，而非 exact。

本 PCR 用于构建其他养殖甲壳类活、鲜或冷藏产品前景数据包，适用于没有更具体养殖甲壳类 PCR 的情况。它覆盖声明的亲本、幼体、后期幼体、幼体、苗种、供应方种群，由报告运营方控制时的孵化和苗种培育，池塘、池槽、网箱、围栏、流水槽、循环水、咸淡水、海水、淡水、综合养殖或其他声明养殖系统，养成或育肥、收获、分级、活体暂养、冷藏、包装和在声明边界的放行。

覆盖产品包括除养殖蟹、龙虾、挪威海螯虾、岩龙虾和其他海螯虾、冷水虾和对虾、其他养殖虾和对虾以外的养殖甲壳类，产品状态为活、鲜或冷藏，并仍为未加工初级产品。排除产品包括野生甲壳类、野捕后仅暂养或冷藏的产品、已有更具体规范 PCR 的所有产品、冷冻、干制、盐渍、盐水浸渍、熟制、罐装、去壳、取肉、预制、保藏、观赏、作为单独投入销售的苗种，以及作为单独产品建模的壳或加工残余物。

这是兜底 PCR。合规数据集必须说明物种或物种组，以及为什么不适用更具体的养殖甲壳类 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-farmed-crustaceans-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04392`, `Other farmed crustaceans, live, fresh or chilled`；mapping_type: narrower；整只带壳方法子集 |
| covered_products | 仅整只带壳参考产品：未被更具体规范 PCR 覆盖，并以活、鲜或冷藏状态从声明养殖、苗种培育、养成或育肥系统销售的养殖甲壳类 |
| excluded_products | 切尾/去头、去壳/取肉及纯肉参考产品；养殖蟹；养殖龙虾；养殖挪威海螯虾；养殖岩龙虾和海螯虾；有具体 PCR 的养殖虾和对虾；野生甲壳类；冷冻、干制、盐渍、盐水浸渍、熟制、罐装、去壳、取肉、预制、保藏、观赏或苗种产品；作为单独产品的壳、蜕壳、死亡、废水和残余物 |
| representative_product | 整只带壳动物：在声明物种或物种组、养殖路线、市场规格、产品形态、暂养条件和边界下的活体或冷藏其他养殖甲壳类 |
| production_route | 亲本、幼体、后期幼体、幼体、苗种或供应方种群投入，受控孵化或苗种培育，养成或育肥管理，收获，分级，活体暂养或冷藏，包装和声明边界放行 |
| market_state | 已声明物种、兜底理由、苗种或亲本来源、养殖系统、产品基准、规格等级、暂养条件、包装状态和边界的活、鲜或冷藏养殖甲壳类 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 整只带壳的作为活、鲜或冷藏市场产品的其他养殖甲壳类 |
| How much | 1 kg |
| How well | 声明物种或物种组、养殖证明、兜底理由、养殖系统、活/鲜/冷藏状态、整只带壳产品基准、规格等级、收获和暂养条件以及边界 |
| How long or cycle | 一个养殖生产批次、育肥批次、收获批次或报告期，并归一化至可销售产品产出 |
| reference_flow_link | `declared_gate_reference` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| 参考产品流 | 养殖甲壳类商品动物在声明最终物理交接门的验收产品 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种或物种组；兜底理由；亲本、幼体、后期幼体、幼体、苗种、供应方或育肥种群来源；养殖系统；养殖证明或受控管理期；产品状态；整只带壳的活、鲜或冷藏产品基准，并保留实际整只软壳/蜕壳/育肥动物状态；规格等级或每 kg 尾数；水分、沥水或不含冰基准；地理位置和声明边界；暂养或冷藏时长；饲料制度；水源、盐度和水交换；健康、生物安全、许可、认证和未解决的 Tiangong UUID 替代项 |

所选 Tiangong 参考流是显示名称较宽的 CPC 04392 候选身份。当 Tiangong 提供精确的 `Other farmed crustaceans, live, fresh or chilled` 流时，应替换它，同时保留本 PCR 身份。

质量是主要参考基准。计数、篮、箱、桶、活体池、池塘、网箱或规格等级记录只有在保留净质量、每 kg 尾数或平均个体质量、产品形态以及抽样或皮重方法时，才可使用。

声明一个实际最终物理交接点gate_release及其唯一产品状态、形态、物种和验收条件。包装输出及可选交付输出只是此前的实测内部交接；若交付位于参考门之后则不纳入，若参考门之前确有交付则保留实际交付记录，不能默认为旁路。只有declared_gate_reference是最终参考输出。Q是同批/匹配报告群体在该门用经校准秤实测的正验收净动物质量，排除包装皮重、游离水/冰及拒收，但保留声明动物形态中的原生组织/壳/水分。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明活、鲜或冷藏产品形态下的其他养殖甲壳类 kg。 |
| `fallback_identity_check` | all datasets | PCR selection evidence | declared records | 数据集元数据必须说明为什么不适用更具体的养殖甲壳类 PCR，并保留物种或物种组身份以便未来映射。 |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | 数据集记录必须证明受控养殖、养成、苗种培育或育肥活动，而不是仅野捕后活体暂养、冷藏、分级或发运。 |
| `product_form_mass_basis` | 整只带壳活、鲜、冷藏或沥水产品记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 独立实测整只动物净质量，保留其自身外骨骼/贝壳和组织，排除游离水/冰和包装皮重。整只软壳或新近蜕壳甲壳动物仍是其实际整只动物，不是壳共产品。保留沥水/温度及同批实际状态，只有实测同批沥水证据才可换算；尾部、去壳或纯肉质量均不是允许的参考基准。 |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 基于尾数的记录必须包括每 kg 尾数或平均个体质量、规格等级、抽样方法和产品形态，然后才能归一化到 kg 参考产品。 |
| `life_stage_identity` | broodstock, eggs, larvae, post-larvae, juveniles, seed, molted animals, and transferred stock | Mass or count | kg, item, or life-stage count | 生命阶段记录必须保留物种、生命阶段、供应方或孵化场、批次、尾数、可测质量、健康状态和转运日期。 |
| `feed_mass_basis` | formulated feed, fresh bait, live feed, mollusc meat, trash fish, and supplementary feed | Mass | kg | 饲料记录必须说明湿基、干基、投喂原样、活饵或配合饲料基准。只有在有实测水分、供应方数据或保留养殖配方时才可在不同基准之间换算。 |
| `water_salinity_and_volume` | hatchery, nursery, grow-out, fattening, live holding, washing, chilling, and wastewater | Salinity, mass, or volume | ppt, kg, or m3 | 保留受控水量、盐度、水交换、补水、循环和排放基准。 |
| `energy_fuel_chemical_and_packaging_basis` | pumps, aeration, oxygenation, water exchange, filtration, lighting, chilling, live holding, boats, vehicles, chemicals, packaging, and ice | Energy, fuel, mass, volume, or item | kWh, MJ, L, kg, m3, or item | 在归一化到参考流前记录电力、燃料、氧气、化学品、包装、冰和能源载体原始单位。 |

## 5. 系统边界

默认边界覆盖前景控制的其他养殖甲壳类生产，直到声明的养殖场、收获、包装场、发运或交付边界：

1. 亲本、卵、幼体、后期幼体、幼体、苗种或供应方种群来源，包括由报告运营方控制的现场孵化和苗种培育，或由其他孵化场、采集者、捕捞者或养殖场供应时的外购种群披露。
2. 孵化、苗种培育、养成或育肥管理，包括投放、饲料、水取用和交换、曝气、增氧、过滤、盐度控制、健康管理、生物安全、相关蜕壳管理、死亡和直接控制的维护。
3. 收获、分级、清洗、活体暂养、冷藏、包装和声明边界放行。
4. 当参考流是超过养殖场、收获、发运或包装场边界的交付产品时，包括交付到声明边界。

资本品和长期基础设施只有在声明数据包范围要求时才纳入。购买苗种、幼体、幼体、饲料、包装、冰、氧气、电力、燃料、化学品和运输服务需要上游数据集，除非同一运营方控制并在前景包中报告其生产。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_broodstock_larval_post_larval_juvenile_seed_or_supplier_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04392`, `Other farmed crustaceans, live, fresh or chilled` |
| recursive_input_rule | 用于生产市场产品的养殖甲壳类亲本、幼体、后期幼体、幼体、苗种、蜕壳动物或育肥种群，作为声明生物起始条件记录，并披露供应方、孵化场、养殖场、生命阶段、来源和健康信息，而不是递归记录为成品参考产品输出 |
| upstream_dataset_requirement | 亲本、孵化、苗种、幼体、蜕壳种群、育肥种群、饲料或供应方数据集，或记录来源、物种、批次、尾数或质量、生命阶段、健康或生物安全状态、转运许可和认证或许可证据的文件 |
| disclosure | 披露物种或物种组、兜底理由、养殖系统、生物起始条件、养殖生产证据、投放密度、饲料制度、水源、盐度和水交换、曝气或增氧、健康处理、蜕壳和死亡记录、收获和暂养条件、产品形态、包装状态、声明边界以及未解决的 Tiangong UUID 替代项 |

## 6. 过程清单结构

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| hatchery_nursery_and_stocking | 孵化、苗种培育和投放 | required | 必须声明生物起始条件；由报告运营方控制的现场孵化和苗种培育行纳入 | foreground/upstream bridge | 每 1 kg 参考流 |
| growout_and_fattening_husbandry | 养成和育肥管理 | required |  | foreground production | 每 1 kg 参考流 |
| harvest_live_holding_chilling_and_packout | 收获、活体暂养、冷藏和包装出货 | required |  | foreground conditioning and gate release | 每 1 kg 参考流 |
| delivery_to_declared_gate | 交付到声明边界 | conditional | 当参考流是超过养殖场、收获、发运或包装场边界的交付产品时纳入 | foreground transport | 每 1 kg 参考流 |
| gate_release | 声明最终物理交接和验收 | required | 每份数据包只有一个实际声明的最终门；选择真实包装直达或经交付路线 | 唯一最终参考责任 | 每 1 kg 参考流 |

### 过程： 孵化、苗种培育和投放 (`hatchery_nursery_and_stocking`)

#### 输入

##### 产品流

###### 独立交换：本节点购入电力 (`electricity_hatchery_nursery_and_stocking`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：本节点购入电力
- 流属性/单位：Energy / kWh
- 数量规则：按本节点独立电表或有证据的共享份额记录实际kWh，先归属再除以同一Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_hatchery_nursery_and_stocking`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_electricity_hatchery_nursery_and_stocking
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b` (`oxygen_hatchery_nursery_and_stocking`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：只记录实际购入气态氧kg；气体体积须保留实测温度、压力、纯度和密度换算，不预设气体用量；先归属再除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_hatchery_nursery_and_stocking`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_oxygen_hatchery_nursery_and_stocking
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


#### 输入

##### 产品流

##### 废物流

#### 输出

##### 产品流

### 过程： 养成和育肥管理 (`growout_and_fattening_husbandry`)

#### 输入

##### 产品流

###### 独立交换：本节点购入电力 (`electricity_growout_and_fattening_husbandry`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：本节点购入电力
- 流属性/单位：Energy / kWh
- 数量规则：按本节点独立电表或有证据的共享份额记录实际kWh，先归属再除以同一Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_growout_and_fattening_husbandry`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_electricity_growout_and_fattening_husbandry
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816` (`diesel_growout_and_fattening_husbandry`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：仅记录实际柴油kg；若原始L用同批实测/供应密度及温度基准换算，保留因子和不确定性；先归属再除以Q。独立记录实际燃烧各物质排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_growout_and_fattening_husbandry`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_diesel_growout_and_fattening_husbandry
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b` (`oxygen_growout_and_fattening_husbandry`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：只记录实际购入气态氧kg；气体体积须保留实测温度、压力、纯度和密度换算，不预设气体用量；先归属再除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_growout_and_fattening_husbandry`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_oxygen_growout_and_fattening_husbandry
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


#### 输入

##### 产品流

##### 废物流

#### 输出

##### 产品流

###### 独立交换：养殖甲壳类商品动物活体养成生物量 (`harvest_size_farmed_crustacean_biomass`)

真实内部动物产品交接，单独保留实际物种、形态、活/鲜/冷藏状态和来源/接收节点；不是最终参考输出。

- 选定流：养殖甲壳类商品动物活体养成生物量
- 流属性/单位：Mass / kg
- 数量规则：保留本节点实测或独立有证据计算的实际净动物质量q、产品状态、同批损失和转移编号；先归属再除以最终gate_release正验收净质量Q。该内部量不得固定为1kg，也不与最终验收量强制相等。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_product_packout_records_growout_and_fattening_husbandry`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_harvest_size_farmed_crustacean_biomass
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程： 收获、活体暂养、冷藏和包装出货 (`harvest_live_holding_chilling_and_packout`)

#### 输入

##### 产品流

###### 独立交换：养殖甲壳类商品动物实测输入批次 (`animal_input_harvest_live_holding_chilling_and_packout`)

只记录与真实上游输出配对的一项具体动物产品交接；实际物种、形态、状态和数量须一致，保留损失及继承负担。


- 选定流：养殖甲壳类商品动物实测输入批次
- 流属性/单位：Mass / kg
- 数量规则：将真实上游动物输出按转移编号、物种、形态、状态、时间和实测净质量配对，保留实际损失；归属后除以Q，不固定为1kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_harvest_live_holding_chilling_and_packout`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_animal_input_harvest_live_holding_chilling_and_packout
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：本节点购入电力 (`electricity_harvest_live_holding_chilling_and_packout`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：本节点购入电力
- 流属性/单位：Energy / kWh
- 数量规则：按本节点独立电表或有证据的共享份额记录实际kWh，先归属再除以同一Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_harvest_live_holding_chilling_and_packout`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_electricity_harvest_live_holding_chilling_and_packout
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816` (`diesel_harvest_live_holding_chilling_and_packout`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：仅记录实际柴油kg；若原始L用同批实测/供应密度及温度基准换算，保留因子和不确定性；先归属再除以Q。独立记录实际燃烧各物质排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_harvest_live_holding_chilling_and_packout`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_diesel_harvest_live_holding_chilling_and_packout
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b` (`oxygen_harvest_live_holding_chilling_and_packout`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：只记录实际购入气态氧kg；气体体积须保留实测温度、压力、纯度和密度换算，不预设气体用量；先归属再除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_harvest_live_holding_chilling_and_packout`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_oxygen_harvest_live_holding_chilling_and_packout
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：本节点新购入冰 (`ice_harvest_live_holding_chilling_and_packout`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：本节点新购入冰
- 流属性/单位：Mass / kg
- 数量规则：实测本节点新购冰量，内部剩冰交接单独配对，不重复采购；自产冰由实际水、电、资产和排放记录支持；先归属再除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_harvest_live_holding_chilling_and_packout`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_ice_harvest_live_holding_chilling_and_packout
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


#### 输入

##### 产品流

##### 废物流

#### 输出

##### 产品流

###### 独立交换：养殖甲壳类商品动物在实际产品状态及交接点的商品批次 (`marketable_live_fresh_or_chilled_other_farmed_crustacean`)

真实内部动物产品交接，单独保留实际物种、形态、活/鲜/冷藏状态和来源/接收节点；不是最终参考输出。

- 选定流：养殖甲壳类商品动物在实际产品状态及交接点的商品批次
- 流属性/单位：Mass / kg
- 数量规则：保留本节点实测或独立有证据计算的实际净动物质量q、产品状态、同批损失和转移编号；先归属再除以最终gate_release正验收净质量Q。该内部量不得固定为1kg，也不与最终验收量强制相等。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_product_packout_records_harvest_live_holding_chilling_and_packout`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_marketable_live_fresh_or_chilled_other_farmed_crustacean
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程： 交付到声明边界 (`delivery_to_declared_gate`)

#### 输入

##### 产品流

###### 独立交换：养殖甲壳类商品动物实测输入批次 (`animal_input_delivery_to_declared_gate`)

只记录与真实上游输出配对的一项具体动物产品交接；实际物种、形态、状态和数量须一致，保留损失及继承负担。


- 选定流：养殖甲壳类商品动物实测输入批次
- 流属性/单位：Mass / kg
- 数量规则：将真实上游动物输出按转移编号、物种、形态、状态、时间和实测净质量配对，保留实际损失；归属后除以Q，不固定为1kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_delivery_to_declared_gate`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_animal_input_delivery_to_declared_gate
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：本节点购入电力 (`electricity_delivery_to_declared_gate`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：本节点购入电力
- 流属性/单位：Energy / kWh
- 数量规则：按本节点独立电表或有证据的共享份额记录实际kWh，先归属再除以同一Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_delivery_to_declared_gate`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_electricity_delivery_to_declared_gate
  - 单位：kWh
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816` (`diesel_delivery_to_declared_gate`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：仅记录实际柴油kg；若原始L用同批实测/供应密度及温度基准换算，保留因子和不确定性；先归属再除以Q。独立记录实际燃烧各物质排放。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_delivery_to_declared_gate`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_diesel_delivery_to_declared_gate
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b` (`oxygen_delivery_to_declared_gate`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：氧气 `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`
- 流属性/单位：Mass / kg
- 数量规则：只记录实际购入气态氧kg；气体体积须保留实测温度、压力、纯度和密度换算，不预设气体用量；先归属再除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_delivery_to_declared_gate`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_oxygen_delivery_to_declared_gate
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 独立交换：本节点新购入冰 (`ice_delivery_to_declared_gate`)

仅在本节点实际使用且未由完整供应服务覆盖时记录；不据本候选卡推定发生。各卡独立采集自身数量、供应/活动范围和范围证据，未知不能置零；完整服务已含组成不得重复。

- 选定流：本节点新购入冰
- 流属性/单位：Mass / kg
- 数量规则：实测本节点新购冰量，内部剩冰交接单独配对，不重复采购；自产冰由实际水、电、资产和排放记录支持；先归属再除以Q。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_delivery_to_declared_gate`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_ice_delivery_to_declared_gate
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）


#### 输入

##### 产品流

#### 输出

##### 产品流

###### 独立交换：养殖甲壳类商品动物在实际产品状态及交接点的商品批次 (`delivered_other_farmed_crustacean_at_declared_gate`)

真实内部动物产品交接，单独保留实际物种、形态、活/鲜/冷藏状态和来源/接收节点；不是最终参考输出。

- 选定流：养殖甲壳类商品动物在实际产品状态及交接点的商品批次
- 流属性/单位：Mass / kg
- 数量规则：保留本节点实测或独立有证据计算的实际净动物质量q、产品状态、同批损失和转移编号；先归属再除以最终gate_release正验收净质量Q。该内部量不得固定为1kg，也不与最终验收量强制相等。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_records`
- 数量范围：未确立的独立数量不确定性；不是默认值或截断限值
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：0
  - 上限：U_delivered_other_farmed_crustacean_at_declared_gate
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：声明最终物理交接（`gate_release`）

#### 输入

##### 产品流

###### 独立交换：养殖甲壳类商品动物最终交接门到货批次 (`gate_arriving_product`)

将实际包装直达路径或已发生的参考门前交付路径配对一次；不得同时输入两条路径。验收拒收和交接损失单列并由gate_release承担；未知门、状态或数量会阻断完成。

- 选定流：养殖甲壳类商品动物最终交接门到货批次
- 流属性/单位：Mass / kg
- 数量规则：独立记录验收前实际到货净动物质量q及与上游输出的配对；归属后除以Q，不固定为1kg。
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

#### 输出

##### 产品流

###### 独立交换：养殖甲壳类商品动物在声明最终物理交接门的验收产品 (`declared_gate_reference`)

声明一个实际最终物理交接点gate_release及其唯一产品状态、形态、物种和验收条件。包装输出及可选交付输出只是此前的实测内部交接；若交付位于参考门之后则不纳入，若参考门之前确有交付则保留实际交付记录，不能默认为旁路。只有declared_gate_reference是最终参考输出。Q是同批/匹配报告群体在该门用经校准秤实测的正验收净动物质量，排除包装皮重、游离水/冰及拒收，但保留声明动物形态中的原生组织/壳/水分。

- 选定流：养殖甲壳类商品动物在声明最终物理交接门的验收产品
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_gate_release`
- 数量范围：同批正验收净质量Q/Q归一化恒等式
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源： `pcr-gate-accounting-method`

- 来源： `pcr-gate-accounting-method`


## 7. 分配与共产品处理

| allocation_id | Applies to | Rule | Required data | Source |
| --- | --- | --- | --- | --- |
| `single_reference_product_default` | marketable live, fresh, or chilled other farmed crustacean output | 除非壳、蜕壳、死亡、残余物或加工输出被有意回收为共产品，否则将声明参考产品作为唯一参考产品。 | 可销售质量、剔除质量、回收共产品质量、目的地，以及声明共产品时的收入或物理关系 | `mass-balance-identity` |
| `fallback_scope_priority` | all datasets | 如果该物种或产品状态存在更具体的规范养殖甲壳类 PCR，则使用该 PCR 而不是本兜底类别。 | 物种、路线、产品状态、分类映射和 PCR 选择说明 | `mass-balance-identity` |
| `shared_system_allocation` | multi-species, multi-lot, polyculture, or shared-service farms | 共享种群、饲料、水、电力、燃料、氧气、化学品、包装和基础设施，应先按直接计量、批次日志、生物量-时间、池塘-时间、网箱-时间、包装件数或其他声明物理驱动因子分配，再使用经济分配。 | 计量表、服务日志、池塘或网箱占用、生物量-时间、收获质量和分配驱动因子 | `asc-farm-standard-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records` | `hatchery_nursery_and_stocking` | biological stock, life stage, accepted stocking | hatchery log, supplier invoice, permit, transfer log, stocking log, mortality log | species, n.e.c. justification, supplier, life stage, count, mean mass, total mass, transfer route, stocking date, pond/cage/tank, accepted count, accepted mass, transfer mortality; 实际节点id、实际物种/状态/产品形态、原生数量q、最终gate_release同批正验收净质量Q、原始批次/每1000kg记录、转移/损失/期初期末库存 | 批次记录与养殖单元库存核对；仅采集本节点的实际记录，保留原始单位和批次/每1000kg基准；先按第7节归属，再除以同一Q。 | kg, item, date, permit id | 每次投放事件 | 完整报告期或生产周期 | hatchery, supplier, transfer route, pond, cage, tank, or farm site | 每 1 kg 参考流 | 供应方文件、许可、转运日志、养殖单元库存、死亡记录和负责人签字 |
| `cp_hatchery_nursery_input_records` | `hatchery_nursery_and_stocking` | feed, live feed, water, energy, chemicals, nursery materials | feed invoice, live-feed log, water meter, electricity meter, chemical log, nursery log | feed type, supplier, mass, basis, water, salinity, electricity, oxygen, chemical, life stage, batch, culture unit; 实际节点id、实际物种/状态/产品形态、原生数量q、最终gate_release同批正验收净质量Q、原始批次/每1000kg记录、转移/损失/期初期末库存 | 发票、计量表、孵化日志和供应方声明；仅采集本节点的实际记录，保留原始单位和批次/每1000kg基准；先按第7节归属，再除以同一Q。 | kg, m3, kWh, L, dose, item, date | 每个批次和每月核对 | 孵化和苗种培育期 | hatchery, nursery, tank, pond, or supplier | 每 1 kg 参考流 | 发票、日志、计量读数、供应方规格和操作员复核 |
| `cp_growout_husbandry_records` | `growout_and_fattening_husbandry` | stock, feed, bait, water, energy, fuel, chemicals, husbandry inputs | farm log, feed log, water meter, fuel invoice, electricity meter, chemical log, treatment record | stocked biomass, feed, bait, water, salinity, electricity, fuel, oxygen, chemical, treatment, culture unit, dates; 实际节点id、实际物种/状态/产品形态、原生数量q、最终gate_release同批正验收净质量Q、原始批次/每1000kg记录、转移/损失/期初期末库存 | 养殖日志、计量表、发票和处理记录；仅采集本节点的实际记录，保留原始单位和批次/每1000kg基准；先按第7节归属，再除以同一Q。 | kg, m3, kWh, L, MJ, dose, item | 每个批次和每月核对 | 完整养成或育肥周期 | pond, cage, tank, raceway, RAS, or farm site | 每 1 kg 参考流 | 养殖日志、发票、计量读数、分配工作表和主管复核 |
| `cp_harvest_product_packout_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | harvest biomass, product form, packaging, marketable output | harvest log, grading sheet, live-holding log, temperature log, packout record, sales note | harvest date, species, culture unit, live mass, product form, count, size grade, chilled or live state, packaging, ice, rejected mass, marketable mass, destination; 实际节点id、实际物种/状态/产品形态、原生数量q、最终gate_release同批正验收净质量Q、原始批次/每1000kg记录、转移/损失/期初期末库存 | 校准秤、分级记录、温度日志、销售记录和包装场核对；仅采集本节点的实际记录，保留原始单位和批次/每1000kg基准；先按第7节归属，再除以同一Q。 | kg, item, grade, date | 每次收获和包装批次 | 完整报告期或周期 | harvest site, live-holding unit, packhouse, or dispatch gate | 每 1 kg 参考流 | 秤校准、收获单、包装记录、发运记录和销售核对 |
| `cp_harvest_product_packout_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | harvest biomass, product form, packaging, marketable output | harvest log, grading sheet, live-holding log, temperature log, packout record, sales note | harvest date, species, culture unit, live mass, product form, count, size grade, chilled or live state, packaging, ice, rejected mass, marketable mass, destination; 实际节点id、实际物种/状态/产品形态、原生数量q、最终gate_release同批正验收净质量Q、原始批次/每1000kg记录、转移/损失/期初期末库存 | 校准秤、分级记录、温度日志、销售记录和包装场核对；仅采集本节点的实际记录，保留原始单位和批次/每1000kg基准；先按第7节归属，再除以同一Q。 | kg, item, grade, date | 每次收获和包装批次 | 完整报告期或周期 | harvest site, live-holding unit, packhouse, or dispatch gate | 每 1 kg 参考流 | 秤校准、收获单、包装记录、发运记录和销售核对 |
| `cp_mortality_residue_and_discharge_records_hatchery_nursery_and_stocking` | `hatchery_nursery_and_stocking` | mortalities, molts, shells, sludge, wastewater, escapes, packaging waste | mortality log, residue log, discharge record, waste ticket, escape report | date, species, count, mass, cause, culture unit, fate, disposal route, recovery route, receiving environment; 实际节点id、实际物种/状态/产品形态、原生数量q、最终gate_release同批正验收净质量Q、原始批次/每1000kg记录、转移/损失/期初期末库存 | 养殖记录、事故报告、废物票据和排放记录；仅采集本节点的实际记录，保留原始单位和批次/每1000kg基准；先按第7节归属，再除以同一Q。 | kg, m3, item, date | 每次事件和每月核对 | 完整报告期或周期 | culture unit, hatchery, harvest area, packhouse, or waste route | 每 1 kg 参考流 | 死亡日志、废物转运单、排放文件、事故记录和主管复核 |
| `cp_mortality_residue_and_discharge_records_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | mortalities, molts, shells, sludge, wastewater, escapes, packaging waste | mortality log, residue log, discharge record, waste ticket, escape report | date, species, count, mass, cause, culture unit, fate, disposal route, recovery route, receiving environment; 实际节点id、实际物种/状态/产品形态、原生数量q、最终gate_release同批正验收净质量Q、原始批次/每1000kg记录、转移/损失/期初期末库存 | 养殖记录、事故报告、废物票据和排放记录；仅采集本节点的实际记录，保留原始单位和批次/每1000kg基准；先按第7节归属，再除以同一Q。 | kg, m3, item, date | 每次事件和每月核对 | 完整报告期或周期 | culture unit, hatchery, harvest area, packhouse, or waste route | 每 1 kg 参考流 | 死亡日志、废物转运单、排放文件、事故记录和主管复核 |
| `cp_mortality_residue_and_discharge_records_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | mortalities, molts, shells, sludge, wastewater, escapes, packaging waste | mortality log, residue log, discharge record, waste ticket, escape report | date, species, count, mass, cause, culture unit, fate, disposal route, recovery route, receiving environment; 实际节点id、实际物种/状态/产品形态、原生数量q、最终gate_release同批正验收净质量Q、原始批次/每1000kg记录、转移/损失/期初期末库存 | 养殖记录、事故报告、废物票据和排放记录；仅采集本节点的实际记录，保留原始单位和批次/每1000kg基准；先按第7节归属，再除以同一Q。 | kg, m3, item, date | 每次事件和每月核对 | 完整报告期或周期 | culture unit, hatchery, harvest area, packhouse, or waste route | 每 1 kg 参考流 | 死亡日志、废物转运单、排放文件、事故记录和主管复核 |
| `cp_mortality_residue_and_discharge_records_delivery_to_declared_gate` | `delivery_to_declared_gate` | mortalities, molts, shells, sludge, wastewater, escapes, packaging waste | mortality log, residue log, discharge record, waste ticket, escape report | date, species, count, mass, cause, culture unit, fate, disposal route, recovery route, receiving environment; 实际节点id、实际物种/状态/产品形态、原生数量q、最终gate_release同批正验收净质量Q、原始批次/每1000kg记录、转移/损失/期初期末库存 | 养殖记录、事故报告、废物票据和排放记录；仅采集本节点的实际记录，保留原始单位和批次/每1000kg基准；先按第7节归属，再除以同一Q。 | kg, m3, item, date | 每次事件和每月核对 | 完整报告期或周期 | culture unit, hatchery, harvest area, packhouse, or waste route | 每 1 kg 参考流 | 死亡日志、废物转运单、排放文件、事故记录和主管复核 |
| `cp_delivery_records` | `delivery_to_declared_gate` | delivered product, transport energy, live or chilled delivery condition | delivery note, transport invoice, fuel record, route plan, temperature or live-holding log | origin, destination, distance, mode, load mass, fuel, electricity, ice, oxygen, temperature, live-holding duration, return logistics; 实际节点id、实际物种/状态/产品形态、原生数量q、最终gate_release同批正验收净质量Q、原始批次/每1000kg记录、转移/损失/期初期末库存 | 承运文件、车辆日志、计量记录和发运核对；仅采集本节点的实际记录，保留原始单位和批次/每1000kg基准；先按第7节归属，再除以同一Q。 | kg, km, tonne-km, L, kWh, h, deg C | 每条交付路线 | 声明范围内的交付期间 | delivery route, vehicle, vessel, or carrier | 每 1 kg 参考流 | 承运发票、路线记录、温度日志和发运签字 |
| `cp_atomic_hatchery_nursery_and_stocking` | `hatchery_nursery_and_stocking` | 本节点独立能源、氧气、冰和动物交接 | 实际仪表、发票、校准称量及库存记录 | 节点/批次/物种/状态；实际每种原生数量q及单位；电表/供应/纯度/密度/温压；实际活动与服务包含范围；各物质排放；原始批次/每1000kg记录；同批Q；去向/损失/库存；独立范围证据 | 分别计量/称量本节点各具体交换并保留原始基准；共享服务和资产先一次归属；未知用量或活动保留缺口，不能假定零 | kg; kWh; actual native units | 每次事件及实际仪表期间 | 完整实际批次/期间，含失败、清理和库存 | `hatchery_nursery_and_stocking` | 每 1 kg 参考流 | 校准/原始证据、独立范围、供应与去向及服务覆盖 |
| `cp_atomic_growout_and_fattening_husbandry` | `growout_and_fattening_husbandry` | 本节点独立能源、氧气、冰和动物交接 | 实际仪表、发票、校准称量及库存记录 | 节点/批次/物种/状态；实际每种原生数量q及单位；电表/供应/纯度/密度/温压；实际活动与服务包含范围；各物质排放；原始批次/每1000kg记录；同批Q；去向/损失/库存；独立范围证据 | 分别计量/称量本节点各具体交换并保留原始基准；共享服务和资产先一次归属；未知用量或活动保留缺口，不能假定零 | kg; kWh; actual native units | 每次事件及实际仪表期间 | 完整实际批次/期间，含失败、清理和库存 | `growout_and_fattening_husbandry` | 每 1 kg 参考流 | 校准/原始证据、独立范围、供应与去向及服务覆盖 |
| `cp_atomic_harvest_live_holding_chilling_and_packout` | `harvest_live_holding_chilling_and_packout` | 本节点独立能源、氧气、冰和动物交接 | 实际仪表、发票、校准称量及库存记录 | 节点/批次/物种/状态；实际每种原生数量q及单位；电表/供应/纯度/密度/温压；实际活动与服务包含范围；各物质排放；原始批次/每1000kg记录；同批Q；去向/损失/库存；独立范围证据 | 分别计量/称量本节点各具体交换并保留原始基准；共享服务和资产先一次归属；未知用量或活动保留缺口，不能假定零 | kg; kWh; actual native units | 每次事件及实际仪表期间 | 完整实际批次/期间，含失败、清理和库存 | `harvest_live_holding_chilling_and_packout` | 每 1 kg 参考流 | 校准/原始证据、独立范围、供应与去向及服务覆盖 |
| `cp_atomic_delivery_to_declared_gate` | `delivery_to_declared_gate` | 本节点独立能源、氧气、冰和动物交接 | 实际仪表、发票、校准称量及库存记录 | 节点/批次/物种/状态；实际每种原生数量q及单位；电表/供应/纯度/密度/温压；实际活动与服务包含范围；各物质排放；原始批次/每1000kg记录；同批Q；去向/损失/库存；独立范围证据 | 分别计量/称量本节点各具体交换并保留原始基准；共享服务和资产先一次归属；未知用量或活动保留缺口，不能假定零 | kg; kWh; actual native units | 每次事件及实际仪表期间 | 完整实际批次/期间，含失败、清理和库存 | `delivery_to_declared_gate` | 每 1 kg 参考流 | 校准/原始证据、独立范围、供应与去向及服务覆盖 |
| `cp_gate_release` | `gate_release` | 唯一最终验收、到货、拒收和损失 | 经校准称重、物理交接和验收记录 | 实际声明门/接收者/日期；唯一上游路线/转移；实际物种/生命阶段/形态/状态；到货质量；毛重/皮重/游离水冰/拒收；正验收净质量Q；去向/损失/库存；归属群体 | 在同一实际最终门使用经校准秤独立称量；核对实际产品状态及原生动物组成，排除皮重、游离水/冰和拒收；完整保留验收损失及去向 | kg | 每次实际交接 | 完整同批/匹配报告群体 | gate_release | 每 1 kg 参考流 | 签署交接/验收、校准和独立扣除/损失记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | 归一化交换=可归属原生数量q/Q；Q仅为gate_release同批正验收净动物质量；保留原始批次/每1000kg、单位及产品形态基准，并应用same_gate_normalization的显式换算。 | q; Q; `cp_gate_release`; own-node records | native unit per kg reference flow | `pcr-gate-accounting-method` |
| `stock_acceptance_balance` | stocking and transfer | accepted stocked biomass = source stock mass + transferred-in mass - transfer mortalities - rejected stock - documented transfer losses | source stock, transfers, mortalities, rejects, transfer loss | accepted stocked biomass | `mass-balance-identity` |
| `growth_and_survival_balance` | grow-out and fattening | harvest-size biomass = stocked biomass + biological growth - mortalities - escapes - rejects，并与收获记录校验 | stocked biomass, feed, mortalities, escapes, harvest records | harvest-size biomass and survival disclosure | `asc-farm-standard-2025` |
| `product_form_yield` | harvested and packed product | 在同一声明产品形态基准下，将独立实测采收动物净投入、期初/期末库存及有证据的物理质量变化，与后续产品、其他预期输出、拒收及实际动物损失核对。每项数量只有一个去向且只计一次。 冰、游离水及包装皮重仅从实际包含它们的毛重中扣除，不得从动物净质量中再扣。最终验收产品净质量须在实际最终门独立确定，不从已净量或已验收量反复扣减推算。 | harvest mass, rejected mass, product-form records, packout records | marketable live, fresh, or chilled mass | `codex-cxc-52-2003` |
| `delivery_tonne_kilometres` | delivered reference product | 按每段实际路线，将实际承运本货批的货载质量（吨）乘该段距离（km），再按匹配最终参考产品的实际产量归一化。货载包含实际随行的载体水、冰和包装，不等于参考产品净质量。共载时使用有因果依据的质量、占用体积或其他已说明分配键。记录空返、冷却、增氧和暂养服务的覆盖；不得把空返的零货载视为零运输负荷。若以实测燃料和直接排放建模，不得重复叠加已覆盖同一负荷的运输服务。 | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |

| `same_gate_normalization` | all inventory rows | 记录原始每批次实际可归属原生数量q及最终同批正验收净动物质量Q；每1kg交换=q/Q；每1000kg交换=1000×q/Q；若原始记录已是每1000kg数量q_1000，则每1kg=q_1000/1000，须证明其分母与同一Q/产品形态/群体一致。内部数量、生命阶段收率和库存单独实测，不固定为最终1kg。 | q; Q; cp_gate_release; own-node records | 自身原生单位/每1kg参考流及原始基准 | `pcr-gate-accounting-method` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and biological stock | 必须明确物种或物种组、兜底理由、养殖状态、生物起始条件、养殖路线、产品形态和声明边界。 | 参考流元数据、投放记录、PCR 选择说明、收获记录以及销售或发运记录 |
| `dq_mass_balance` | stock, feed, mortality, harvest, and packout | 投放、生长、死亡、逃逸、蜕壳或壳残余、收获、剔除和可销售产品记录必须在声明容差内核对；无法解释的差异需要披露。 | 质量平衡工作表、称重单、养殖单元记录、包装记录和主管复核 |
| `dq_feed_and_water_basis` | feed, bait, water, and chemicals | 必须明确饲料和饵料基准、水盐度和交换、处理化学品以及排放路线。 | 发票、饲料声明、养殖日志、水质日志、处理记录和排放记录 |
| `dq_temporal_coverage` | all foreground rows | 数据必须覆盖完整生产、养成、育肥和最终处理期，或披露部分周期、部分批次或代理覆盖。 | 报告日历、批次记录、收获记录和覆盖声明 |
| `dq_boundary_disclosure` | all datasets | 数据集必须披露上游种群、饲料、水、包装、交付、资本品和基础设施是前景、链接上游数据集，还是按范围排除。 | 数据集边界声明、供应方记录、上游数据集链接和范围声明 |
| `collect_biological_stock_input` | `hatchery_nursery_and_stocking` | 逐项调查本范围内实际物质/物种、生命阶段、形态、状态、来源和去向，并建立独立原子卡。按真实来源/去向确定最终方向与产品/废物/基本流类型；本采集范围不提供通用UUID或混合总量。每项独立保留原生数量/单位、采集或计算证据、范围/不确定性证据、归属及除以同一最终Q的归一化。不得将集合总量、共同范围或某一成员UUID复制给其他成员。所有实际主要饲料、投入、废物、排放及内部交接均为必填责任；未知不是零。原生批次/每1000kg记录须保留并按q/Q及1000×q/Q显式换算。跨物质/单位的共同筛选数值不构成子流范围；生命阶段/生物生长不同的质量比也不是统一0..1存活率。 采集职责：生物种群投入 . 此行记录在声明的过程和系统边界内选定的交换。 <br> - 流属性/单位：带生命阶段的质量或尾数 / kg、item 或 stage count <br> - 数量规则：计量尾数、可测质量、生命阶段以及进入孵化、苗种培育、养成或育肥的接受数量 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1,000 kg 可销售参考产品 <br> - 基准类型：过程输出（`process_output`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_biological_stocking_records` <br> - 来源：`asc-farm-standard-2025` | 本节点原始记录、独立身份、计量、去向及范围证据 |
| `collect_hatchery_and_nursery_inputs` | `hatchery_nursery_and_stocking` | 逐项调查本范围内实际物质/物种、生命阶段、形态、状态、来源和去向，并建立独立原子卡。按真实来源/去向确定最终方向与产品/废物/基本流类型；本采集范围不提供通用UUID或混合总量。每项独立保留原生数量/单位、采集或计算证据、范围/不确定性证据、归属及除以同一最终Q的归一化。不得将集合总量、共同范围或某一成员UUID复制给其他成员。所有实际主要饲料、投入、废物、排放及内部交接均为必填责任；未知不是零。原生批次/每1000kg记录须保留并按q/Q及1000×q/Q显式换算。跨物质/单位的共同筛选数值不构成子流范围；生命阶段/生物生长不同的质量比也不是统一0..1存活率。 采集职责：孵化和苗种培育投入 . 此行记录在声明的过程和系统边界内选定的交换。 <br> - 流属性/单位：质量、体积、能量或计数 / kg、g、L、m3、kWh、dose 或 item <br> - 数量规则：按批次、生命阶段和基准计量孵化饲料、活饵、水、电力、氧气、化学品和苗种培育材料 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每个孵化或苗种培育批次，并在归一化后每 1,000 kg 可销售参考产品 <br> - 基准类型：过程输出（`process_output`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_hatchery_nursery_input_records` <br> - 来源：`asc-feed-standard-2026`, `asc-farm-standard-2025` | 本节点原始记录、独立身份、计量、去向及范围证据 |
| `collect_hatchery_mortalities_molts_sludge_and_residue` | `hatchery_nursery_and_stocking` | 逐项调查本范围内实际物质/物种、生命阶段、形态、状态、来源和去向，并建立独立原子卡。按真实来源/去向确定最终方向与产品/废物/基本流类型；本采集范围不提供通用UUID或混合总量。每项独立保留原生数量/单位、采集或计算证据、范围/不确定性证据、归属及除以同一最终Q的归一化。不得将集合总量、共同范围或某一成员UUID复制给其他成员。所有实际主要饲料、投入、废物、排放及内部交接均为必填责任；未知不是零。原生批次/每1000kg记录须保留并按q/Q及1000×q/Q显式换算。跨物质/单位的共同筛选数值不构成子流范围；生命阶段/生物生长不同的质量比也不是统一0..1存活率。 采集职责：孵化死亡、蜕壳、污泥和残余物 . 此行记录在声明的过程和系统边界内选定的交换。 <br> - 流属性/单位：质量或尾数 / kg 或 item <br> - 数量规则：计量死亡尾数、残余物质量、污泥、剔除种群和处置或回收路线 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每个孵化或苗种培育批次，并在归一化后每 1,000 kg 可销售参考产品 <br> - 基准类型：过程输出（`process_output`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_mortality_residue_and_discharge_records_hatchery_nursery_and_stocking` | 本节点原始记录、独立身份、计量、去向及范围证据 |
| `collect_accepted_stock_for_growout_or_fattening` | `hatchery_nursery_and_stocking` | 逐项调查本范围内实际物质/物种、生命阶段、形态、状态、来源和去向，并建立独立原子卡。按真实来源/去向确定最终方向与产品/废物/基本流类型；本采集范围不提供通用UUID或混合总量。每项独立保留原生数量/单位、采集或计算证据、范围/不确定性证据、归属及除以同一最终Q的归一化。不得将集合总量、共同范围或某一成员UUID复制给其他成员。所有实际主要饲料、投入、废物、排放及内部交接均为必填责任；未知不是零。原生批次/每1000kg记录须保留并按q/Q及1000×q/Q显式换算。跨物质/单位的共同筛选数值不构成子流范围；生命阶段/生物生长不同的质量比也不是统一0..1存活率。 采集职责：进入养成或育肥的已接受种群 . 此行记录在声明的过程和系统边界内选定的交换。 <br> - 流属性/单位：质量或尾数 / kg 或 item <br> - 数量规则：接收、孵化、苗种培育、分级、驯化和转运损失后的已接受种群计算值 <br> - 数值来源模式：计算值（`calculated_value`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：进入养成或育肥的已接受种群 <br> - 基准类型：过程输出（`process_output`） <br> - 证据类型：由采集记录计算（`calculated_from_collection`） <br> - 采集协议：`cp_biological_stocking_records` | 本节点原始记录、独立身份、计量、去向及范围证据 |
| `collect_growout_feed_water_energy_and_husbandry_inputs` | `growout_and_fattening_husbandry` | 逐项调查本范围内实际物质/物种、生命阶段、形态、状态、来源和去向，并建立独立原子卡。按真实来源/去向确定最终方向与产品/废物/基本流类型；本采集范围不提供通用UUID或混合总量。每项独立保留原生数量/单位、采集或计算证据、范围/不确定性证据、归属及除以同一最终Q的归一化。不得将集合总量、共同范围或某一成员UUID复制给其他成员。所有实际主要饲料、投入、废物、排放及内部交接均为必填责任；未知不是零。原生批次/每1000kg记录须保留并按q/Q及1000×q/Q显式换算。跨物质/单位的共同筛选数值不构成子流范围；生命阶段/生物生长不同的质量比也不是统一0..1存活率。 采集职责：养成饲料、水、能源和管理投入 . 此行记录在声明的过程和系统边界内选定的交换。 <br> - 流属性/单位：质量、体积、能量、燃料或件数 / kg、m3、kWh、L、MJ、dose 或 item <br> - 数量规则：按批次和养殖单元计量投放生物量、饲料、饵料、水、能源、燃料、氧气、化学品、养殖材料和场址服务投入 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每个养成或育肥批次，并在归一化后每 1,000 kg 可销售参考产品 <br> - 基准类型：过程输出（`process_output`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_growout_husbandry_records` <br> - 来源：`asc-feed-standard-2026`, `asc-farm-standard-2025` | 本节点原始记录、独立身份、计量、去向及范围证据 |
| `collect_mortalities_molts_shells_sludge_discharge_and_escapes` | `growout_and_fattening_husbandry` | 逐项调查本范围内实际物质/物种、生命阶段、形态、状态、来源和去向，并建立独立原子卡。按真实来源/去向确定最终方向与产品/废物/基本流类型；本采集范围不提供通用UUID或混合总量。每项独立保留原生数量/单位、采集或计算证据、范围/不确定性证据、归属及除以同一最终Q的归一化。不得将集合总量、共同范围或某一成员UUID复制给其他成员。所有实际主要饲料、投入、废物、排放及内部交接均为必填责任；未知不是零。原生批次/每1000kg记录须保留并按q/Q及1000×q/Q显式换算。跨物质/单位的共同筛选数值不构成子流范围；生命阶段/生物生长不同的质量比也不是统一0..1存活率。 采集职责：死亡、蜕壳、壳、污泥、排放和逃逸 . 此行记录在声明的过程和系统边界内选定的交换。 <br> - 流属性/单位：质量、体积或尾数 / kg、m3 或 item <br> - 数量规则：计量死亡尾数、蜕壳或壳质量、污泥、废水、相关逃逸、处置路线、回收路线和受纳环境 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每个养成或育肥批次，并在归一化后每 1,000 kg 可销售参考产品 <br> - 基准类型：过程输出（`process_output`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_mortality_residue_and_discharge_records_growout_and_fattening_husbandry` <br> - 来源：`asc-farm-standard-2025` | 本节点原始记录、独立身份、计量、去向及范围证据 |
| `collect_harvested_crustaceans_and_final_handling_inputs` | `harvest_live_holding_chilling_and_packout` | 逐项调查本范围内实际物质/物种、生命阶段、形态、状态、来源和去向，并建立独立原子卡。按真实来源/去向确定最终方向与产品/废物/基本流类型；本采集范围不提供通用UUID或混合总量。每项独立保留原生数量/单位、采集或计算证据、范围/不确定性证据、归属及除以同一最终Q的归一化。不得将集合总量、共同范围或某一成员UUID复制给其他成员。所有实际主要饲料、投入、废物、排放及内部交接均为必填责任；未知不是零。原生批次/每1000kg记录须保留并按q/Q及1000×q/Q显式换算。跨物质/单位的共同筛选数值不构成子流范围；生命阶段/生物生长不同的质量比也不是统一0..1存活率。 采集职责：收获甲壳类和最终处理投入 . 此行记录在声明的过程和系统边界内选定的交换。 <br> - 流属性/单位：质量、体积、能量或件数 / kg、m3、kWh 或 item <br> - 数量规则：计量收获生物量、包装、冰、清洗、活体暂养氧气、电力、制冷剂服务和发运准备数量 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1,000 kg 可销售参考产品 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_harvest_product_packout_records_harvest_live_holding_chilling_and_packout` <br> - 来源：`codex-cxc-52-2003`, `asc-farm-standard-2025` | 本节点原始记录、独立身份、计量、去向及范围证据 |
| `collect_handling_rejects_mortalities_shell_wastewater_and_packaging_waste` | `harvest_live_holding_chilling_and_packout` | 逐项调查本范围内实际物质/物种、生命阶段、形态、状态、来源和去向，并建立独立原子卡。按真实来源/去向确定最终方向与产品/废物/基本流类型；本采集范围不提供通用UUID或混合总量。每项独立保留原生数量/单位、采集或计算证据、范围/不确定性证据、归属及除以同一最终Q的归一化。不得将集合总量、共同范围或某一成员UUID复制给其他成员。所有实际主要饲料、投入、废物、排放及内部交接均为必填责任；未知不是零。原生批次/每1000kg记录须保留并按q/Q及1000×q/Q显式换算。跨物质/单位的共同筛选数值不构成子流范围；生命阶段/生物生长不同的质量比也不是统一0..1存活率。 采集职责：处理剔除物、死亡、壳、废水和包装废物 . 此行记录在声明的过程和系统边界内选定的交换。 <br> - 流属性/单位：质量或体积 / kg 或 m3 <br> - 数量规则：计量剔除产品、处理损失、死亡、壳或蜕壳残余物、废水、包装废物、处置路线、回收路线和受纳环境 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：场址特定（`site_specific`） <br> - 归一化基准：每 1,000 kg 可销售参考产品 <br> - 基准类型：参考流（`reference_flow`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_mortality_residue_and_discharge_records_harvest_live_holding_chilling_and_packout` | 本节点原始记录、独立身份、计量、去向及范围证据 |
| `collect_delivery_fuel_and_live_or_chilled_delivery_support` | `delivery_to_declared_gate` | 逐项调查本范围内实际物质/物种、生命阶段、形态、状态、来源和去向，并建立独立原子卡。按真实来源/去向确定最终方向与产品/废物/基本流类型；本采集范围不提供通用UUID或混合总量。每项独立保留原生数量/单位、采集或计算证据、范围/不确定性证据、归属及除以同一最终Q的归一化。不得将集合总量、共同范围或某一成员UUID复制给其他成员。所有实际主要饲料、投入、废物、排放及内部交接均为必填责任；未知不是零。原生批次/每1000kg记录须保留并按q/Q及1000×q/Q显式换算。跨物质/单位的共同筛选数值不构成子流范围；生命阶段/生物生长不同的质量比也不是统一0..1存活率。 采集职责：交付燃料和活体或冷藏交付支持 . 此行记录在声明的过程和系统边界内选定的交换。 <br> - 流属性/单位：燃料、能量、质量、体积或运输服务 / L、MJ、kWh、kg、m3 或 tonne-km <br> - 数量规则：仅当声明参考流交付超过养殖场、收获、发运或包装场边界时纳入；记录距离、方式、装载率、活体或冷藏条件和相关返程物流 <br> - 数值来源模式：前景记录（`foreground_record`） <br> - 适用范围：路线特定（`route_specific`） <br> - 归一化基准：每 1,000 kg 已交付参考产品或 tonne-km <br> - 基准类型：运输服务（`transport_service`） <br> - 证据类型：采集记录（`collected_record`） <br> - 采集协议：`cp_delivery_records` | 本节点原始记录、独立身份、计量、去向及范围证据 |
| `collect_gate_rejects` | `gate_release` | 每项实际验收拒收、死亡、包装/水冰交接、损失、服务、燃料、资产及排放分别明确身份、数量、单位、证据、范围、按Q归一化和去向，并补充独立原子卡。拒收不是自动废物，也不能无负担删除。 | cp_gate_release；实际去向和资源记录 |
| `dq_final_gate_balances` | 所有节点和报告期间 | 原始批次、每1000kg记录、生命阶段收率、期初/期末库存及失败事件完整保留；先一次归属，再用同一实际最终门Q归一化。外部取水、供应水产品、内部循环和实际返排水分别计量；不得重复扣减循环水。净营养物增量/滞留只是独立平衡诊断，不自动生成负基本流或避免负荷。实际运输载荷包含随行水、冰及包装；空返仍以实际燃料/车辆服务和明确分配计入。完整服务与其覆盖的材料、能源、资产、废物和直接排放不重计。 | 本节点记录、同批水/动物/物质平衡、服务范围、实际载荷和活动 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | 适用数据包及实际交换 | 数据集完成前须核实一个与实际物种、养殖来源、生命阶段、产品状态/形态、属性和最终物理交接门相符的UUID。类别名相同不证明状态和门一致；不得用活体农场门流替代冷藏交付产品，或用卸港捕获物流替代受控养殖产品。 | |
| `val_fallback_scope` | 适用数据包及实际交换 | 数据集说明为什么没有更具体的养殖甲壳类 PCR 适用。 | |
| `val_farmed_proof` | 适用数据包及实际交换 | 数据集具有超过野捕和捕后处理的受控养殖、苗种培育、养成或育肥证据。 | |
| `val_product_state` | 适用数据包及实际交换 | 产品状态为活、鲜或冷藏，并排除冷冻、干制、盐渍、盐水浸渍、预制、保藏、观赏或加工产品。 | |
| `val_mass_basis` | 适用数据包及实际交换 | 产品质量基准声明为活、鲜、冷藏、沥水、不含冰、整只、软壳、蜕壳或其他已说明基准。 | |
| `val_structured_sync` | 适用数据包及实际交换 | 编辑后从双语 Markdown 重新生成 `structured.yaml`。 | |
| `val_unique_gate_atomic_completion` | 适用数据包及实际交换 | 只有一个实际gate_release及一个declared_gate_reference最终输出；同批Q、实际产品形态/状态、门、配对内部实测量及全部适用采集义务必须一致。每项实际交换都有独立原子卡、数量/原生单位、采集/计算及Range/不确定性证据、归一化、真实去向和已验证UUID时，最终数据包才可完成和通过验证。未知身份、活动、门、数量、范围或去向均阻断完成，不能置零或默认为旁路；检查器通过不证明真实数据已完整。 | |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_form_scope` | 市场规格产品交接及最终参考 | 市场规格动物交接及最终参考产品须保留实际整只带壳形态。切尾/去头、去壳/取肉或纯肉最终参考不在本方法范围内。实测收率或第8节补采完成声明均不能扩大该边界。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 其他活、鲜或冷藏养殖甲壳类的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`; 在保留养殖记录时作为 process 或 lifecyclemodel 构建的前景参考 |
| allowed_use | 仅整只带壳方法：对声明的其他养殖甲壳类活、鲜或冷藏产品，在养殖场、收获、发运、包装场或交付边界进行 LCA 建模 |
| excluded_use | 本方法范围外的切尾、去壳/取肉或纯肉参考产品；已被更具体甲壳类 PCR 覆盖的产品；野生甲壳类；冷冻、干制、熏制、盐渍、盐水浸渍、熟制、罐装、去壳、取肉、预制、保藏、观赏、苗种、壳、蜕壳、死亡、废水或残余物产品；没有单独审查方法的生态系统服务声明 |
| required_metadata | canonical PCR id；CPC 3.0 代码；物种或物种组；兜底理由；养殖状态；生物起始条件；养殖系统；投放日期和生物量；产品形态；规格等级；活/鲜/冷藏状态；饲料和水基准；死亡和排放披露；收获和暂养条件；包装状态；声明边界；地理位置；报告期；数据所有者；未解决 UUID 替代项 |
| required_quality_disclosure | 候选参考流说明、兜底 PCR 理由、养殖生产证据、质量平衡闭合、饲料和水基准、时间覆盖、分配基准、上游数据集链接、缺失前景记录、代理行，以及仅用于 QA 筛选的推理估算范围 |
| update_trigger | Tiangong 中新增精确 CPC 04392 产品、物种特定甲壳类、幼体、幼体、饲料、饵料、水、氧气、化学品、蜕壳、壳、死亡、残余物、包装、冰、制冷剂或交付服务流身份；关于饲料转化、成活率、燃料、水交换、化学品、包装或冷藏范围的经审查定量证据；新增可替代本兜底的具体 PCR；Codex、ASC、FAO 或法律要求更新；分类映射变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | 活、鲜、冷藏甲壳类处理、卫生、运输和产品状态背景 |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council, ASC Farm Standard v1.0.1, 2025, https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf | 养殖场管理、可追溯性、死亡、逃逸、健康、福利和环境披露 |
| `asc-feed-standard-2026` | standard | Aquaculture Stewardship Council, ASC Feed Standard v1.2 update, https://asc-aqua.org/producers/get-certified-feed-mill/asc-feed-standard-v1-2-update/ | 饲料供应方和成分披露背景 |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs plus biological growth minus mortalities, escapes, rejects, and losses under declared product basis | 归一化、分配、种群平衡、得率和交付计算 |
| `pcr-gate-accounting-method` | method_factor | 本PCR第3—9节声明的前瞻交接门、独立计量和批次归一化方法；不是外部实证数据 | 唯一最终Q/Q参考、实测内部量、q/Q与1000×q/Q转换及逐流完成要求 |
