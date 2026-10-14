---
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 蜜蜂

## 1. 范围和适用性

本 PCR 用于构建活蜂前景数据包，产品在声明的蜂场、繁育场、蜂包生产者、蜂王生产者、暂养点或交付门以活体动物形式转移。适用对象包括蜜蜂和其他受管理蜂种，产品形态可以是蜂群、交尾群或小群、蜂包、带伴随工蜂的蜂王、子脾或类似活蜂单元。

排除产品包括天然蜂蜜、蜂蜡、蜂胶、蜂王浆、蜂毒、授粉服务、养蜂服务、蜂蜜提取设备、下游作物授粉，以及下游蜂蜜或蜂蜡生产；除非研究明确扩展范围并声明分配。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees` |
| classification_refs | CPC 3.0 `02196`, `Bees` |
| covered_products | 以蜂群、小群、蜂包、带伴随工蜂的蜂王、子脾或类似活蜂单元转移的活蜂 |
| excluded_products | honey; beeswax; propolis; royal jelly; bee venom; pollination service; beekeeping service; beekeeping equipment; downstream crop pollination; downstream honey or wax production |
| representative_product | 达到声明蜂群或蜂包状态及健康状态的活蜂 |
| production_route | 活蜂种群进入、蜂场建立、蜂群管理和饲喂、健康处理和蜂箱维护、活蜂包装与发运 |
| market_state | 活体动物，未加工，具有声明物种、生命阶段、蜂群角色组成、包装或蜂群单元、群势、健康状态和转移门 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明转移门的活蜂 |
| How much | 1 kg 活蜂质量 |
| How well | 声明物种、生命阶段、蜂群角色组成、蜂群或蜂包单元、蜂王状态、群势、健康状态，以及活蜂质量或数量换算 |
| How long or cycle | 一个声明的蜂群生产、分群、蜂王生产、蜂包生产或发运周期 |
| reference_flow_link | `declared_transferred_live_bees` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| Reference product flow | Bees `0be7ee1d-758e-458f-9dba-56d8c5298875` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; life stage; caste mix; colony, nucleus, package, queen, brood-frame, or other unit type; queen presence and status; colony strength or bee count basis; health or certification status; geography and declared gate; transport inclusion status |

构建前景数据包时，`Required qualifiers` 中列出的项目必须在数据集元数据、过程说明、参考流注释、产品描述或等效字段中声明。缺少这些限定信息会使该数据包的参考流定义不完整。

活蜂质量是主要参考流基础。蜂群数、蜂包数、蜂王数、子脾数或蜜蜂数量记录只有在提供有文件支持的活蜂质量换算时才能使用。

原始批次、群体、过程转移和联产品数量按原采集口径完整保留。对每个交换，先完成实际路线、期间及联产品归属，再以归属原始量 × 1 kg / 同边界同期最终合格产品质量换算为声明参考流。必须记录真实阶段产出、损失、收率和分配，不得把中间转移量固定为最终 1 kg，也不得以缺失数据假定无损失。

## 4. 测量和单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_live_bee_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live bee mass | 参考流必须表示为声明转移门的 kg 活蜂。 |
| `count_to_mass_conversion` | colony, package, queen, brood-frame, or bee-count records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live bee mass | 基于数量的活蜂记录必须包括实测质量，或按单元类型、蜂数或群势给出有文件支持的换算。 |
| `colony_strength_basis` | colony and nucleus units | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` and Mass | frames, seams, adult bee count, brood area, or kg live bee mass | 声明使用的群势指标，并保留必要信息以便在需要时换算到参考质量。 |
| `supplemental_feed_basis` | sugar syrup, candy, pollen substitute, and feed supplements | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg sugar, kg dry matter, or kg as-fed | 饲喂记录必须声明浓度、干物质、糖含量或原样基础。 |
| `treatment_active_ingredient_basis` | veterinary and pest-control treatments | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg active ingredient or product-specific unit | 处理记录必须识别产品、可用时的活性成分、剂量、处理蜂群数，以及与停用期或认证相关的信息。 |
| `energy_inventory` | electricity, fuel, refrigeration, holding, and dispatch energy | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ or kWh | 说明每个能源值是终端电力、燃料低位热值、制冷能源还是运输服务能源。 |

## 5. 系统边界

默认边界为到声明活蜂转移门的前景数据采集：

1. 当前景数据包包含活蜂种群、蜂王种群、小群或蜂包输入、蜂箱消耗品、饲料、水、药品、害虫防治产品、包装、笼具、燃料、电力和外购服务时纳入。
2. 纳入蜂场建立和蜂群管理：分群、育王、饲喂、检查、蜂箱维护、前景系统内移群，以及分蜂或损失管理。
3. 纳入蜂健康和害虫防治：监测、采样、处理、认证检查，以及疾病和害虫记录。
4. 当声明门包括活蜂包装、装笼、暂养、通风、温控、发运和交付时纳入。

蜂蜜提取、蜂蜡熬制、向作物提供的授粉服务和下游作物生产不属于默认边界。蜂箱和耐用设备只有在声明数据包范围纳入资本品，或替换材料作为消耗品跨越前景边界时才纳入。

本边界是一种数据生产抽象。声明亲本蜂群、购买蜂王、蜂包或小群为起始条件记录。同类别活蜂输入不在同一包内递归追踪为新的活蜂 PCR；应披露其身份、单元类型、质量或数量换算、来源和上游负荷处理。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | parent_colony_or_live_bee_stock_entry |
| starting_condition_role | live_bee_identity_and_reproduction_condition |
| product_classification_scope | 当前 CPC 3.0 产品类别 `02196`, `Bees` |
| recursive_input_rule | 会导致递归追踪的同一产品类别输入流记录为声明起始条件或购买活蜂种群，并披露其上游负荷处理 |
| upstream_dataset_requirement | 披露来源、单元类型、物种、生命阶段、蜂群角色组成、蜂王状态、健康状态、质量或数量换算、取得日期，以及上游活蜂负荷是纳入、排除还是以二级数据表示 |
| disclosure | 记录蜂场或繁育场边界、生产路线、群势基础、活蜂质量换算、健康或认证状态、饲喂基础、处理制度、死亡或逃逸去向、包装或笼具状态，以及声明门 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| live_bee_stock_entry | Live Bee Stock Entry | required |  | foreground | live bee stock entering the foreground system |
| colony_management_and_feeding | Colony Management and Feeding | required |  | foreground | maintained colony, nucleus, package, queen, or brood unit |
| health_treatment_and_hive_maintenance | Health Treatment and Hive Maintenance | required |  | foreground | treated and maintained live-bee unit |
| live_bee_packing_and_dispatch | Live Bee Packing and Dispatch | conditional | 当声明门包括装笼、蜂包组装、暂养、装载或交付时纳入 | foreground/downstream | live bees transferred at declared gate |

### 过程：活蜂种群进入（`live_bee_stock_entry`）

#### 输入

##### 产品流

###### 亲本蜂群或购买活蜂种群（`parent_colony_or_purchased_live_bee_stock`）

亲本蜂群、购买蜂王、蜂包、小群、子脾或类似活蜂种群作为活蜂起始条件记录。

- 选定流：Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- 流属性/单位：Mass / kg live bee mass
- 数量规则：按单元类型实测活蜂质量或有文件支持的数量到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个活蜂种群进入批次

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_bee_stock_entry_records`
- 来源：`fao-good-beekeeping-2019`, `woah-bee-diseases`
- 数量范围：暂定活蜂种群进入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg live bee input/kg live bee output
  - 基准：进入前景系统的活蜂种群质量宽泛首轮估算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 蜂箱部件用锯材 (`hive_consumables_for_stock_entry_wood`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

当巢框、巢础、笼具、饲喂罐、网片和短寿命蜂箱消耗品为了活蜂生产跨越前景边界时记录。

- 选定流：蜂箱部件用锯材
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个活蜂种群进入批次

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hive_material_and_packaging_records`
- 来源：`fao-bee-hive-materials`

###### 蜂蜡巢础 (`hive_consumables_for_stock_entry_wax`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

当巢框、巢础、笼具、饲喂罐、网片和短寿命蜂箱消耗品为了活蜂生产跨越前景边界时记录。

- 选定流：蜂蜡巢础
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个活蜂种群进入批次

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hive_material_and_packaging_records`
- 来源：`fao-bee-hive-materials`

###### 聚丙烯蜂王笼 (`hive_consumables_for_stock_entry_cage`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

当巢框、巢础、笼具、饲喂罐、网片和短寿命蜂箱消耗品为了活蜂生产跨越前景边界时记录。

- 选定流：聚丙烯蜂王笼
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个活蜂种群进入批次

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hive_material_and_packaging_records`
- 来源：`fao-bee-hive-materials`

##### 废物流

种群进入通常不需要废物输入。只有回收巢脾、用过笼具或其他回收材料作为输入跨越前景边界时才纳入。

##### 基本流

除非声明数据包纳入蜂场土地占用，否则通常不需要基本流输入。

#### 输出

##### 产品流

###### 接收并进入管理的活蜂种群（`accepted_live_bee_stock_for_management`）

接收的活蜂种群是进入蜂群管理和饲喂的活蜂输出。

- 选定流：Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- 流属性/单位：Mass / kg live bee mass
- 数量规则：种群进入检查后的接收活蜂质量或数量到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：stock entry process output

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_bee_stock_entry_records`
- 数量范围：接收活蜂种群身份
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg stock entry process output
  - 基准：接收活蜂种群过程输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 死亡蜜蜂生物质 (`rejected_or_dead_bees_at_stock_entry_dead_bees`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

死亡蜜蜂、拒收蜂王、失败蜂包或被判定不合格的种群，应记录质量或数量换算及去向。

- 选定流：死亡蜜蜂生物质
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个活蜂种群进入批次

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_escape_and_reject_records`
- 来源：`fao-good-beekeeping-2019`

##### 基本流

只有当场址记录显示种群进入操作产生实质直接排放时，才记录直接场址排放。

### 过程：蜂群管理和饲喂（`colony_management_and_feeding`）

#### 输入

##### 产品流

###### 管理中的活蜂种群（`live_bee_stock_under_management`）

管理中的活蜂种群是为转移而维持、分群、换王或育成的已接收种群。

- 选定流：Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- 流属性/单位：Mass / kg live bee mass
- 数量规则：按蜂群、蜂包、蜂王、小群或子脾单元实测质量或有文件支持的数量到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个受管理活蜂单元

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_bee_colony_management_records`
- 数量范围：管理中活蜂种群核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg managed live bee/kg live bee output
  - 基准：保留、分群或准备出售的活蜂质量宽泛首轮估算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 葡萄糖饲料 (`supplemental_sugar_feed_glucose`)

仅在实际路线和现场记录证明该身份适用时启用；不是必用投入、默认配方、用药或剂量建议。供应商制剂须记录配方与浓度，制剂实物量与活性成分量不得重复。其他实际身份必须单独列卡，缺少记录不得视为零。

糖浆、糖饼、糖膏、干糖和类似补充碳水饲料按产品质量和糖浓度记录。

- 选定流：葡萄糖饲料
- 流属性 / 单位：质量 / kg
- 数量规则：仅采集本身份的实际数量，保留供应商组成、状态、单位及使用记录，按原过程归属和参考流口径换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个管理蜂群、蜂包、育王批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_and_water_records`
- 来源：`fao-good-beekeeping-2019`

###### 蔗糖饲喂溶液 (`supplemental_sugar_feed_sucrose_solution`)

仅在实际路线和现场记录证明该身份适用时启用；不是必用投入、默认配方、用药或剂量建议。供应商制剂须记录配方与浓度，制剂实物量与活性成分量不得重复。其他实际身份必须单独列卡，缺少记录不得视为零。

糖浆、糖饼、糖膏、干糖和类似补充碳水饲料按产品质量和糖浓度记录。

- 选定流：蔗糖饲喂溶液
- 流属性 / 单位：质量 / kg 溶液
- 数量规则：仅采集本身份的实际数量，保留供应商组成、状态、单位及使用记录，按原过程归属和参考流口径换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个管理蜂群、蜂包、育王批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_and_water_records`
- 来源：`fao-good-beekeeping-2019`

###### 蛋白饲料和补充料（`protein_feed_and_supplements`）

使用花粉替代物、花粉饼、蛋白补充料、矿物或维生素补充料时记录。

- 选定流：Prepared fermentable feed `b25e209d-4bef-4a2f-8fad-46e4d7de3d76`
- 流属性/单位：Mass / kg as-fed and kg dry matter where available
- 数量规则：实测饲喂量和声明组成
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始采集或过程口径：每个管理蜂群、批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_and_water_records`
- 数量范围：暂定蛋白补充料筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg feed/kg live bee output
  - 基准：分配给活蜂生产的蛋白补充料宽泛首轮估算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 饲喂和处理用水（`water_for_feeding_and_handling`）

用于配制饲料、维持蜜蜂、清洁设备或暂养支持的水，应按水源和用途记录。

- 选定流：Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- 流属性/单位：Mass or volume / kg, L, or m3
- 数量规则：实测用水或配制饲料中的水分计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个管理蜂群、批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_and_water_records`
- 数量范围：暂定用水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：m3/kg live bee output
  - 基准：饲料配制、处理和暂养用水宽泛首轮估算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 设备供电点的电力 (`apiary_energy_and_movement_fuel_electricity`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

用于蜂场巡查、搬运、饲喂、通风、短距离移群、制冷和暂养的电力和燃料按能源载体记录。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个管理蜂群、批次、路线或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_movement_records`

###### 柴油 (`apiary_energy_and_movement_fuel_diesel`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

用于蜂场巡查、搬运、饲喂、通风、短距离移群、制冷和暂养的电力和燃料按能源载体记录。

- 选定流：柴油
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个管理蜂群、批次、路线或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_movement_records`

##### 废物流

蜂群管理通常不需要废物输入。只有回收饲料、旧包装或其他回收材料作为输入跨越前景边界时才纳入。

##### 基本流

###### 活蜂管理取水（`water_withdrawal_for_live_bee_management`）

当报告基本水流时，取水量从饲料配制、清洁和暂养用水记录计算。

- 选定流：water `419682fe-60fb-4b43-be89-bf2824b51104`
- 流属性/单位：Mass / kg
- 数量规则：由水源和数量记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_feed_and_water_records`
- 数量范围：暂定取水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1000
  - 单位：kg water/kg live bee output
  - 基准：活蜂管理取水宽泛首轮估算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 管理后的活蜂单元（`managed_live_bee_unit`）

管理后的活蜂单元是准备进入健康处理、维护或发运的蜂群、小群、蜂包、蜂王批次或子脾单元。

- 选定流：Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- 流属性/单位：Mass / kg live bee mass
- 数量规则：实测质量或有文件支持的数量到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：colony management process output

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_bee_colony_management_records`
- 数量范围：管理后活蜂输出身份
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg colony management process output
  - 基准：管理后活蜂过程输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 死亡蜜蜂生物质 (`dead_bees_failed_queens_and_swarm_loss_dead_bees`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

死蜂、失败蜂王、非商品蜂群、分蜂损失和逃逸损失应记录质量或数量换算及去向。

- 选定流：死亡蜜蜂生物质
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个管理蜂群、批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_escape_and_reject_records`
- 来源：`fao-good-beekeeping-2019`, `woah-bee-diseases`

##### 基本流

###### 蜂场能源化石二氧化碳（`fossil_carbon_dioxide_from_apiary_energy`）

仅核算前景直接燃烧的化石 CO2。

- 选定流：carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：仅用前景直接运营设备的实际化石燃料量和相容燃烧因子计算本卡 CO2；排除外购电力发电排放和已由委外运输服务覆盖的排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
原始采集或过程口径：per fuel inventory

- 归一化基准：每声明的参考流
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_movement_records`
- 数量范围：暂定蜂场能源化石 CO2 筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg CO2/kg live bee output
  - 基准：蜂场能源和移群燃料化石 CO2 宽泛首轮估算
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：健康处理和蜂箱维护（`health_treatment_and_hive_maintenance`）

#### 输入

##### 产品流

###### 甲酸处理制剂 (`veterinary_and_pest_control_treatments_formic_acid`)

仅在实际路线和现场记录证明该身份适用时启用；不是必用投入、默认配方、用药或剂量建议。供应商制剂须记录配方与浓度，制剂实物量与活性成分量不得重复。其他实际身份必须单独列卡，缺少记录不得视为零。

蜂药、瓦螨或害虫处理、消毒剂、卫生化学品和其他健康投入在施用或对认证有实质影响时记录。

- 选定流：甲酸处理制剂
- 流属性 / 单位：质量 / kg 制剂
- 数量规则：仅采集本身份的实际数量，保留供应商组成、状态、单位及使用记录，按原过程归属和参考流口径换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始采集或过程口径：每个处理蜂群、批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_and_health_records`
- 来源：`fao-good-beekeeping-2019`, `woah-varroosis-code`；`codex-organic-beekeeping`

###### 草酸处理制剂 (`veterinary_and_pest_control_treatments_oxalic_acid`)

仅在实际路线和现场记录证明该身份适用时启用；不是必用投入、默认配方、用药或剂量建议。供应商制剂须记录配方与浓度，制剂实物量与活性成分量不得重复。其他实际身份必须单独列卡，缺少记录不得视为零。

蜂药、瓦螨或害虫处理、消毒剂、卫生化学品和其他健康投入在施用或对认证有实质影响时记录。

- 选定流：草酸处理制剂
- 流属性 / 单位：质量 / kg 制剂
- 数量规则：仅采集本身份的实际数量，保留供应商组成、状态、单位及使用记录，按原过程归属和参考流口径换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始采集或过程口径：每个处理蜂群、批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_and_health_records`
- 来源：`fao-good-beekeeping-2019`, `woah-varroosis-code`；`codex-organic-beekeeping`

###### 蜂箱部件用锯材 (`hive_repair_and_maintenance_materials_wood`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

替换巢框、巢础、笼具、网片、紧固件、油漆、清洁材料和其他短寿命材料在使用时记录。

- 选定流：蜂箱部件用锯材
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个维护蜂群、批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hive_material_and_packaging_records`
- 来源：`fao-bee-hive-materials`

###### 蜂蜡巢础 (`hive_repair_and_maintenance_materials_wax`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

替换巢框、巢础、笼具、网片、紧固件、油漆、清洁材料和其他短寿命材料在使用时记录。

- 选定流：蜂蜡巢础
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个维护蜂群、批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hive_material_and_packaging_records`
- 来源：`fao-bee-hive-materials`

###### 钢丝 (`hive_repair_and_maintenance_materials_steel`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

替换巢框、巢础、笼具、网片、紧固件、油漆、清洁材料和其他短寿命材料在使用时记录。

- 选定流：钢丝
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个维护蜂群、批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hive_material_and_packaging_records`
- 来源：`fao-bee-hive-materials`

##### 废物流

健康处理和蜂箱维护通常不需要废物输入。

##### 基本流

只有当处理方法、产品标签或场址记录支持排放流时，才纳入处理施用的直接排放。

#### 输出

##### 产品流

###### 待发运健康活蜂单元（`healthy_live_bee_unit_for_dispatch`）

待发运健康活蜂单元是经过处理或检查的活蜂产品输出。

- 选定流：Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- 流属性/单位：Mass / kg live bee mass
- 数量规则：检查或处理后的实测质量或有文件支持的数量到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：health treatment process output

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_health_inspection_and_certification_records`
- 数量范围：健康活蜂输出身份
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg health treatment process output
  - 基准：处理或检查后活蜂过程输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 废弃蜂蜡巢脾 (`treatment_residues_and_condemned_bee_material_wax_waste`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

处理包装、污染巢脾、判废蜜蜂、病蜂群和拒收蜂箱材料应记录质量和去向。

- 选定流：废弃蜂蜡巢脾
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个处理蜂群、批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_residue_and_waste_records`
- 来源：`fao-good-beekeeping-2019`, `woah-bee-diseases`

###### 废弃木质蜂箱部件 (`treatment_residues_and_condemned_bee_material_wood_waste`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

处理包装、污染巢脾、判废蜜蜂、病蜂群和拒收蜂箱材料应记录质量和去向。

- 选定流：废弃木质蜂箱部件
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个处理蜂群、批次或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_residue_and_waste_records`
- 来源：`fao-good-beekeeping-2019`, `woah-bee-diseases`

##### 基本流

只有当产品特定处理方法、测量记录或经审查排放因子支持时，才声明产品特定直接排放。

### 过程：活蜂包装和发运（`live_bee_packing_and_dispatch`）

#### 输入

##### 产品流

###### 进入包装的活蜂单元（`live_bee_unit_entering_pack_out`）

当装笼、蜂包组装、蜂王发运、暂养、装载或交付位于声明门以内时，记录进入包装的活蜂。

- 选定流：Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- 流属性/单位：Mass / kg live bee mass
- 数量规则：进入包装时的实测质量或数量到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：pack-out input

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_bee_packing_dispatch_records`
- 数量范围：包装活蜂输入核对
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1.5
  - 单位：kg/kg dispatched live bee output
  - 基准：进入包装的活蜂质量相对于发运输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 聚丙烯蜂王笼 (`live_bee_packaging_and_holding_materials_cage`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

笼具、蜂包盒、网片、罐、蜂王笼、标签、运输饲料、吸收材料和其他发运材料按件数和可用质量记录。

- 选定流：聚丙烯蜂王笼
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个蜂包、蜂王发运、蜂群发运或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hive_material_and_packaging_records`
- 来源：`fao-bee-hive-materials`

###### 蜂箱部件用锯材 (`live_bee_packaging_and_holding_materials_wood`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

笼具、蜂包盒、网片、罐、蜂王笼、标签、运输饲料、吸收材料和其他发运材料按件数和可用质量记录。

- 选定流：蜂箱部件用锯材
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每个蜂包、蜂王发运、蜂群发运或 kg 活蜂输出

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hive_material_and_packaging_records`
- 来源：`fao-bee-hive-materials`

###### 设备供电点的电力 (`dispatch_energy_and_transport_service_electricity`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

当声明门包括相关活动时，记录电力、通风、制冷、燃料和路线特定运输服务。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始采集或过程口径：每发运 kg 活蜂质量

- 归一化基准：每声明的参考流
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_energy_and_transport_records`

###### 柴油 (`dispatch_energy_and_transport_service_diesel`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

当声明门包括相关活动时，记录电力、通风、制冷、燃料和路线特定运输服务。

- 选定流：柴油
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始采集或过程口径：每发运 kg 活蜂质量

- 归一化基准：每声明的参考流
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_energy_and_transport_records`

###### 公路货运服务（`dispatch_energy_and_transport_service_road_freight`）

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

当声明门包括相关活动时，记录电力、通风、制冷、燃料和路线特定运输服务。

- 选定流：公路货运服务
- 流属性 / 单位：运输量 / t km
- 数量规则：实测燃料、电力、承运人发票、路线距离或 tonne-km
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始采集或过程口径：每发运 kg 活蜂质量

- 归一化基准：每声明的参考流
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_energy_and_transport_records`

仅适用于实际委外的公路运输，保留活体质量、距离、车辆类型、装载率及服务边界。同一承运环节不得同时计入本服务及其燃料、电力和直接排放。

##### 废物流

通常不需要废物输入。

##### 基本流

当燃料在前景系统内燃烧时，纳入发运直接燃烧排放。

#### 输出

##### 产品流

###### 声明转移活蜂（`declared_transferred_live_bees`）

参考单位 kg 表示交接时活体净质量，排除包装、笼具及附带材料；头数或蜂群数须保留同类活体的实测质量换算。

声明转移活蜂是在声明门的参考产品输出。

- 选定流：Bees `0be7ee1d-758e-458f-9dba-56d8c5298875`
- 流属性 / 单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：PCR reference output

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_live_bee_packing_dispatch_records`
- 数量范围：活蜂参考输出身份
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg PCR reference output
  - 基准：活蜂参考输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 死亡蜜蜂生物质 (`dispatch_mortalities_and_returned_packaging_dead_bees`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

暂养或发运期间死蜂、失败发运、退回笼具、饲喂罐和包装废物应记录质量和去向。

- 选定流：死亡蜜蜂生物质
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每发运 kg 活蜂质量

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_mortality_and_packaging_waste_records`

###### 废弃木质蜂箱部件 (`dispatch_mortalities_and_returned_packaging_wood_waste`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

暂养或发运期间死蜂、失败发运、退回笼具、饲喂罐和包装废物应记录质量和去向。

- 选定流：废弃木质蜂箱部件
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始采集或过程口径：每发运 kg 活蜂质量

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_mortality_and_packaging_waste_records`

##### 基本流

###### 发运能源化石二氧化碳（`fossil_carbon_dioxide_from_dispatch_energy`）

发运能源化石二氧化碳根据燃料和能源记录计算。

- 选定流：carbon dioxide (fossil), emissions to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：仅用前景直接运营设备的实际化石燃料量和相容燃烧因子计算本卡 CO2；排除外购电力发电排放和已由委外运输服务覆盖的排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
原始采集或过程口径：per dispatch energy inventory

- 归一化基准：每声明的参考流
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch_energy_and_transport_records`
- 数量范围：暂定发运化石 CO2 筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg CO2/kg dispatched live bee mass
  - 基准：发运能源和路线燃料化石 CO2 宽泛首轮估算
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配和共产品处理

当唯一产品输出是转移的活蜂，且死蜂或包装残余物作为具有声明处理方式的废物处理时，不需要分配。如果蜂蜜、蜂蜡、蜂胶、蜂王浆、蜂毒、授粉服务、育王服务、蜂箱产品或其他共产品在前景边界内被计入信用，则发布前必须声明分配。

优先层级：

1. 当记录能区分活蜂生产与蜂蜜提取、蜂蜡熬制、授粉服务或其他共产品路线时，优先进行过程细分。
2. 只有在有文件支持因果物理关系时使用物理分配，例如蜂产品流的质量或授粉服务的蜂群使用时间。
3. 当物理分配不具备可辩护性且有市场价值时，使用经济分配。
4. 系统扩展或替代仅作为附加情景报告，并披露被替代产品、地理范围和避免负荷数据集。

## 8. 前景数据采集、计算和质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_live_bee_stock_entry_records | live_bee_stock_entry | parent colony or purchased live bee stock | purchase, split, queen, package, nucleus, brood-frame, or receiving record | source; species; unit type; queen status; life stage; caste mix; colony strength; bee count or mass; health status; acquisition date; upstream burden treatment | receiving record, breeder certificate, health certificate, scale record, colony inspection, or count-to-mass conversion；原活动量汇总：将单元记录换算为活蜂质量，并核对接收、拒收、死亡或逃逸蜜蜂 | kg live bee mass, colony, nucleus, package, queen, frame, or head | per stock entry or batch | production cycle | apiary, breeder, or stock-entry lot | 每声明的参考流 | scale record, receiving record, health certificate, inspection record |
| cp_live_bee_colony_management_records | colony_management_and_feeding | managed live bee stock | colony inspection, split, queen rearing, package production, or apiary management record | colony id; unit type; queen status; brood stage; adult bee estimate; frame or seam count; date; management action | apiary log, inspection record, production batch record, or breeder log；原活动量汇总：按单元类型和质量换算核对活蜂进入、分群、损失和输出 | colony, frame, seam, head, or kg live bee mass | inspection, batch, week, month, or production cycle | production cycle | apiary, breeder yard, queen yard, or package production unit | 每声明的参考流 | apiary log, inspection sheet, breeder record |
| cp_feed_and_water_records | colony_management_and_feeding | supplemental feed and water | feed issue, syrup preparation, water, or feeding record | feed type; sugar concentration; dry matter or as-fed basis; product mass; water quantity; treated colonies; date | feed log, invoice, syrup mixing sheet, meter, or tank record；原活动量汇总：必要时换算为 kg 糖或干物质，并按蜂群、批次或活蜂输出分配 | kg, L, m3, kg dry matter, kg sugar | per feeding event, batch, or reporting period | production cycle | apiary, feed room, or production batch | 每声明的参考流 | invoice, feed log, mixing sheet, meter record |
| cp_energy_and_movement_records | colony_management_and_feeding | apiary energy and movement fuel | electricity, fuel, equipment, or movement record | carrier; quantity; route; operation; colonies served; period; allocation method | utility bill, fuel invoice, route log, equipment log, or telematics；原活动量汇总：换算为 MJ 或 kWh，并按有文件支持的基础分配到活蜂生产 | kWh, MJ, L, kg fuel, km, or tonne-km | operation, route, month, or cycle | production cycle | apiary, route, holding room, or production site | 每声明的参考流 | invoice, meter record, fuel log, route record |
| cp_treatment_and_health_records | health_treatment_and_hive_maintenance | veterinary and pest-control treatments | treatment, pest monitoring, medicine, or certification record | product; active ingredient; dose; treated colony count; date; target pest or disease; certification relevance | treatment log, veterinary record, product label, laboratory result, health certificate, or inspection record；原活动量汇总：汇总活性成分或产品用量，并归一化到处理单元和活蜂输出 | kg, L, dose, strip, item, or product-specific unit | per treatment or inspection event | production cycle | apiary, colony, queen yard, or package lot | 每声明的参考流 | treatment log, product label, inspection result, health certificate |
| cp_hive_material_and_packaging_records | live_bee_stock_entry; health_treatment_and_hive_maintenance; live_bee_packing_and_dispatch | hive consumables and packaging | material purchase, cage, frame, comb, package, or dispatch material record | material type; mass; item count; capacity; reuse status; batch or shipment | inventory issue record, packing log, invoice, or unit mass specification；原活动量汇总：汇总材料质量和件数；只有在范围内时按声明再用或折旧规则分配可重复使用材料 | kg or item | per batch, shipment, replacement, or reporting period | production cycle or dispatch period | apiary, shop, packing room, or shipment | 每声明的参考流 | invoice, packing log, inventory record |
| cp_health_inspection_and_certification_records | health_treatment_and_hive_maintenance | healthy live bee unit for dispatch | inspection, certification, or release record | species; unit type; queen status; colony strength; disease or pest status; treatment status; release date | apiary inspection, veterinary certificate, lab result, or dispatch approval；原活动量汇总：识别接收的活蜂单元并换算到参考质量 | kg live bee mass, colony, package, queen, or frame | per inspection, lot, or shipment | dispatch cycle | apiary, breeder, or dispatch lot | 每声明的参考流 | certificate, inspection record, laboratory result |
| cp_treatment_residue_and_waste_records | health_treatment_and_hive_maintenance | treatment residues and condemned bee material | residue, contaminated comb, condemned colony, or disposal record | waste type; mass; treatment product; colony or batch; fate | scale record, disposal ticket, treatment log, or inspection record；原活动量汇总：按去向汇总残余物和判废材料质量 | kg | per event or reporting period | production cycle | apiary, treatment area, or waste route | 每声明的参考流 | disposal ticket, treatment log, inspection record |
| cp_live_bee_packing_dispatch_records | live_bee_packing_and_dispatch | declared transferred live bees | package, queen cage, colony, nucleus, brood frame, or shipment record | unit type; unit count; bee count or mass; queen status; shipment id; gate; date; receiver; health status | packing log, scale record, shipping document, certificate, or count-to-mass conversion；原活动量汇总：将蜂包或蜂群记录换算为 kg 活蜂质量并核对发运输出 | kg live bee mass, package, colony, queen, frame, or head | per shipment or batch | dispatch period | packing room, apiary, holding room, or route | 每声明的参考流 | packing log, scale record, dispatch note, health certificate |
| cp_dispatch_energy_and_transport_records | live_bee_packing_and_dispatch | dispatch energy and transport | holding, ventilation, cooling, carrier, fuel, or route record | route; distance; vehicle; energy; fuel; carrier invoice; shipment mass; holding duration | carrier invoice, route log, fuel log, utility meter, or dispatch record；原活动量汇总：将路线特定能源归一化到发运 kg 活蜂质量 | kWh, MJ, L fuel, km, tonne-km | per shipment or dispatch period | dispatch period | holding room, loading area, route, or declared gate | 每声明的参考流 | carrier invoice, route record, fuel or energy record |
| cp_mortality_escape_and_reject_records | live_bee_stock_entry; colony_management_and_feeding | mortality, rejected bees, and swarm loss | dead bee, failed queen, rejected stock, swarm, escape, or non-marketable colony record | unit id; event date; unit type; estimated mass or count; cause where available; fate | apiary log, inspection record, disposal record, or count-to-mass estimate；原活动量汇总：将事件记录换算为质量，按去向汇总，并归一化到活蜂输出 | kg live bee mass, head, colony, queen, or package | per event or reporting period | production cycle | apiary, breeder yard, holding room, or shipment | 每声明的参考流 | apiary log, inspection record, disposal record |
| cp_dispatch_mortality_and_packaging_waste_records | live_bee_packing_and_dispatch | dispatch mortalities and returned packaging | shipment loss, returned package, cage, feed can, or waste record | shipment id; dead bee count or mass; returned material; waste mass; fate | receiving claim, return record, scale ticket, or waste contractor record；原活动量汇总：按去向汇总发运死亡和包装废物 | kg or item | per shipment or return | dispatch period | route, receiver, packing room, or waste route | 每声明的参考流 | claim record, return log, disposal ticket |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_live_bee_mass_output | reference product | kg transferred live bee mass / PCR reference amount | cp_live_bee_packing_dispatch_records | kg live bees per reference output | `mass-balance-identity` |
| convert_count_to_live_bee_mass | colony, package, queen, brood-frame, or bee-count records | 使用有文件支持的质量、单元换算或群势基础，将基于数量的单元换算为 kg 活蜂质量 | cp_live_bee_stock_entry_records; cp_live_bee_colony_management_records; cp_live_bee_packing_dispatch_records | kg live bee mass by unit type | `fao-good-beekeeping-2019` |
| normalize_supplemental_feed | supplemental feed | 将糖浆、糖饼、干糖、花粉替代物和蛋白饲料换算为声明的糖、干物质或原样基础，并按蜂群、批次或活蜂输出分配 | cp_feed_and_water_records | kg feed per reference output | `fao-good-beekeeping-2019` |
| calculate_apiary_energy_co2 | apiary energy fossil CO2 | 仅核算前景直接运营设备的化石燃料燃烧 CO2，再按合格产出归一化；外购电力及委外运输排放由相应上游数据承担，不得重复 | cp_energy_and_movement_records | kg fossil CO2 per reference output |  |
| calculate_dispatch_energy_co2 | dispatch energy fossil CO2 | 仅核算前景直接运营设备的化石燃料燃烧 CO2，再按合格产出归一化；外购电力及委外运输排放由相应上游数据承担，不得重复 | cp_dispatch_energy_and_transport_records | kg fossil CO2 per reference output |  |
| allocate_colony_coproducts | co-products | 当前景边界内计入蜂蜜、蜂蜡、授粉服务、育王服务或其他共产品时，进行过程细分或分配 | cp_live_bee_colony_management_records; co-product records | allocation factors or subdivision rule | `fao-leap-guidelines` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_live_bee_identity | live bee identity | 参考流和主要活蜂批次必须声明物种、单元类型、生命阶段、蜂群角色组成、蜂王状态、群势或蜂数基础、健康状态、地理范围和声明门。 | inspection record, breeder certificate, health certificate, dispatch record |
| dq_mass_conversion | count and colony records | 蜂群、蜂包、蜂王和巢框记录必须包括实测质量或有文件支持的 kg 活蜂质量换算。 | scale record, unit conversion note, colony-strength record |
| dq_feed_basis | supplemental feed | 饲料记录必须保留饲料类型、浓度、干物质或糖基础、处理蜂群数和时间段。 | invoice, feed log, syrup mixing sheet |
| dq_health_status | disease and pest status | 活蜂转移时必须记录健康、害虫监测、处理、检查、认证和拒收状态。 | treatment log, inspection result, laboratory result, health certificate |
| dq_temporal_coverage | production cycle | 前景记录应覆盖声明的蜂群、蜂包、蜂王或发运生产周期；使用年度化蜂场记录时必须披露分配方法。 | apiary log, stock entry record, dispatch record |
| dq_completeness | material flows | 必须处理活蜂种群、饲料、使用时的水、处理投入、短寿命蜂箱或包装材料、能源和移群、死亡、拒收和发运废物，或以理由明确排除。 | collection protocol checklist and data quality review |

## 9. 验证规则

使用本 PCR 发布前景数据包前，检查：

- 参考流以 kg 活蜂表示，并包括物种、单元类型、蜂王状态、群势或蜂数基础、健康状态、地理范围和声明门
- 活蜂产品不得与蜂蜜、蜂蜡、授粉服务、养蜂服务或设备混淆
- 声明亲本蜂群、购买蜂王、蜂包、小群、子脾和同类别活蜂输入的起始条件处理
- 记录数量到质量换算和群势基础
- 处理补充饲料、使用时的水、处理投入、蜂箱消耗品、包装、能源以及移群或发运运输
- 疾病、害虫、处理、检查、认证、拒收种群、死亡以及分蜂或逃逸损失具有声明记录和去向
- 当蜂蜜、蜂蜡、授粉服务、育王服务或其他输出被计入信用时，声明共产品处理
- 超出暂定筛选范围的值包含来源说明、修正数据或方法理由

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当活蜂限定信息、地理范围、生产路线和声明门与数据集元数据匹配时，用于下游活蜂供应链、蜂场投入、育王或蜂包生产、蜂群补充、授粉服务模型输入或受管理蜜蜂清单建模 |
| excluded_use | honey, wax, propolis, royal jelly, venom, pollination service, beekeeping service, equipment manufacture, and downstream crop pollination unless separately modelled |
| required_metadata | reference flow; geography; production cycle; species; unit type; life stage; caste mix; queen status; colony strength or bee-count basis; live-bee mass conversion; health status; treatment status; declared gate; transport inclusion; collection protocol coverage; DQR |
| required_quality_disclosure | record coverage, allocation choices, starting-condition treatment, count-to-mass conversion, calculation rules, measurement devices or primary records, unresolved omissions, and data quality scores |
| update_trigger | species, unit type, production route, geography, feed basis, treatment regime, disease or certification status, packaging route, declared gate, transport inclusion, collection protocol coverage, or data quality score 发生实质变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-beekeeping-2019` | official_guidance | <https://openknowledge.fao.org/handle/20.500.14283/ca4271en> | 良好养蜂实践、蜂健康、管理记录、疾病控制和生产边界背景 |
| `woah-bee-diseases` | official_guidance | <https://www.woah.org/en/disease/diseases-of-bees/> | 蜜蜂列名疾病、健康状态、检查和认证背景 |
| `woah-varroosis-code` | official_guidance | <https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/2024/en_chapitre_varroa_spp.htm> | 与瓦螨相关的活蜂、蜂王、幼虫、蛹和子脾健康建议背景 |
| `oregon-honeybee-colony-evaluation` | extension_guidance | <https://extension.oregonstate.edu/catalog/pnw-623-evaluating-honey-bee-colonies-pollination> | 群势和受管理蜜蜂蜂群评估背景 |
| `fao-leap-guidelines` | official_guidance | <https://www.fao.org/partnerships/leap/resources/publications/fao-leap-guidelines/en> | 畜牧和动物供应链 LCA 边界、数据质量和分配背景 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for live-bee output, stock reconciliation, and process reference outputs. | 参考输出和活蜂质量平衡检查的 QA 校验 |
| `fao-bee-hive-materials` | official_guidance | FAO Beekeeping and sustainable livelihoods; hive and wax material identity context, https://www.fao.org/4/y5110e/y5110e0e.htm | 条件性身份依据；实际场址用量和适用性须单独核实 |
| `codex-organic-beekeeping` | official_guidance | Codex organically produced foods, beekeeping provisions; conditional treatment identities, no dose or prescription, https://www.fao.org/docrep/pdf/010/a1385e/a1385e00.pdf | 条件性身份依据；实际场址用量和适用性须单独核实 |
