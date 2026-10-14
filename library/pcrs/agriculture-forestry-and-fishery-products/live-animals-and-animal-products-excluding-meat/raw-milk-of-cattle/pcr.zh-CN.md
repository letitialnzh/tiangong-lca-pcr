---
schema_version: 1
pcr_id: pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-cattle
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 牛生乳

## 1. 范围与适用性

本 PCR 适用于家养牛生产、以冷藏且未经加工状态从奶牛场交付的生乳。它支持代表一个完整且具有
代表性的奶牛场运行期、截至农场门的前景数据包。模型覆盖报告牛群整体、饲料与垫料供应、适用时
由农场直接管理的饲料生产、肠道发酵、粪污管理、挤奶、冷却和场内储存。

本 PCR 不包括水牛、绵羊、山羊、骆驼及其他动物的生乳；经分离、标准化、巴氏杀菌、灭菌、均质、
浓缩、干燥、发酵、调味或其他加工的乳；农场门后的运输；乳品加工；包装；分销；零售；使用和生命
终结。具体数据包应声明养牛生产系统、地理范围、报告期、牛群结构、乳成分、农场门状态，以及饲料
生产和投入品运输属于前景过程还是通过上游数据集连接。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-cattle |
| classification_refs | CPC 3.0：02211 Raw milk of cattle（exact） |
| covered_products | 牛的全脂生乳，包括热处理或乳品加工前、可销售的冷藏农场乳 |
| excluded_products | 非牛物种生乳；经分离、标准化、巴氏杀菌、灭菌、均质、浓缩、干燥、发酵、调味或其他加工的乳；完全在农场内部消耗且不作为产品交付的乳 |
| representative_product | 已冷藏、可离开场内储奶设施的牛全脂生乳 |
| production_route | 奶牛群管理、饲料供应、粪污管理、挤奶、冷却及场内储存至农场门 |
| market_state | 农场门处未经加工的液态生乳，通常已冷藏，并以实测脂肪和真蛋白含量声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可离开奶牛场的牛生乳 |
| How much | 农场门 1 kg 实际可销售牛生乳，注明实测脂肪和真蛋白含量 |
| How well | 符合所声明农场门规格的牛全脂生乳，具有实测物理质量、脂肪含量、真蛋白含量、温度和可销售状态 |
| How long or cycle | 一个具有代表性的报告年度，或覆盖季节变化和稳定牛群生产周期的其他声明期间 |
| reference_flow_link | `raw_cattle_milk` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 鲜牛奶 `aa8aebbb-724a-417b-8372-2dccd499ce71` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 牛物种；生乳且未经加工；农场门地理范围；生产系统；报告期；农场门温度；物理乳质量；脂肪百分比；真蛋白百分比；计算所得 FPCM 质量；可销售乳状态 |

构建前景数据包时，`必需限定信息` 中列出的内容必须在数据集元数据、过程说明、参考流备注、产品说明
或等效字段中声明。缺少必需限定信息时，参考流定义不完整。

参考流和全部清单量均以农场门 1 kg 实际可销售牛生乳为基准。脂肪和蛋白校正乳（FPCM，校正至 4.0% 脂肪和 3.3% 真蛋白）作为单独报告的比较基准。保留实测物理质量和成分，通过 `calc_fpcm_reporting` 在两种基准间换算同一分配后结果；不得假定 1 kg 实际生乳等于 1 kg FPCM。本 PCR 采用物理质量清单基准供下游材料投入使用，并保留 IDF FPCM 基准用于比较报告；这一选择不表示已符合 IDF 的全部报告要求。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考实际生乳流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以 kg 记录实际可销售生乳质量，并按 1 kg 实际生乳归一化；只有体积记录时，须采用适用于所代表乳和温度的实测密度。使用实测成分单独报告 FPCM。 |
| `milk_composition` | 乳脂肪和真蛋白 | 质量分数 | 质量百分比 | 对同一乳质量和报告期采用有代表性的实测脂肪和真蛋白百分比；没有披露且有依据的换算时，不得用粗蛋白替代真蛋白。 |
| `dry_matter_basis` | 饲料摄入和垫料 | Mass | kg 干物质 | 原始记录中保留饲喂态质量和干物质比例，再计算 kg 干物质；无法换算的饲料数量必须披露。 |
| `liveweight_basis` | 离开农场的动物 | Mass | kg 活重 | 使用动物离场时的活重或有文件依据的换算；没有换算依据时，不得把胴体质量当作活重。 |
| `gas_mass_basis` | 直接气体排放 | Mass | kg 物质 | 在影响评价前分别记录每种排放物质；不得把 CO2 当量作为基本流质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_farm_gate` | 截至农场门的产品系统 | 纳入奶牛群维持和补充、饲料与垫料供应、肠道发酵、粪污收集/储存/处理、直接管理的饲料生产、投入能源和水、挤奶、清洗、冷却、制冷剂损失以及场内生乳储存，直至乳可离开农场。 | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `boundary_whole_herd` | 报告牛群 | 表征泌乳牛、干奶牛、后备牛、犊牛、淘汰牛、死亡、牛群库存变化及支撑报告乳产出的动物流动；其他牛群类别分担负荷时，不得只建模泌乳牛。 | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `boundary_upstream_inputs` | 外购投入 | 将外购饲料、垫料、后备牛、燃料、电力、肥料、植保产品、清洗剂、制冷剂及其他物料投入连接到地理和技术适宜的上游数据集。 | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `boundary_feed_land` | 饲料生产与土地 | 纳入直接管理的饲料作物和牧草投入、产量、土壤排放、灌溉及相关土地利用变化处理；对外部供应饲料，保留来源和组成记录并连接上游负荷，且不得在农场内重复计算。 | `idf-dairy-carbon-footprint-2022`; `fao-leap-animal-feed-2016` |
| `boundary_direct_emissions` | 牛、粪污和管理土壤 | 采用适用于所声明地区、动物类别、生产力、日粮、气候和粪污系统的方法与因子计算肠道 CH4、粪污管理 CH4 和 N2O 及相关管理土壤排放；保留活动数据和因子来源。 | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `boundary_exclusions` | 下游生命周期阶段 | 排除农场门后的运输、乳品加工、包装、分销、零售、消费和生命终结；任何研究特定扩展必须与 PCR 结果分开披露。 | `idf-dairy-carbon-footprint-2022` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告期开始时，报告牛群、管理土地和生产资产均在役的奶牛生产系统；通过期间记录和年化计算表征牛群补充负荷和库存变化。 |
| starting_condition_role | 为生物连续的奶牛系统建立可复现的农场核算条件，同时不把期初牛群视为无负荷。 |
| product_classification_scope | CPC 3.0 代码 02211 覆盖的牛生乳；其他动物乳及加工乳制品不在本类别内。 |
| recursive_input_rule | 农场自产并内部使用的牛生乳（包括饲喂犊牛的乳）记录为内部使用并从可销售农场门产出中扣除，不连接为上游生乳数据集。外购牛生乳是独立产品投入，必须连接上游数据集，且不得与产出净额处理。 |
| upstream_dataset_requirement | 每一项跨越边界的外购饲料、动物、能源载体、物料和外部服务都需要有代表性的上游数据集，或明确记录数据缺口；对重要投入优先采用供应商特定数据。 |
| disclosure | 声明农场地理范围、生产系统、报告期、牛群类别与库存变化、乳销售和内部使用、乳成分、饲料来源、粪污系统、土地管理、分配因子、排除过程、数据缺口及任何非稳态运行变化。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `herd_and_feed_management` | 牛群、饲喂、牛舍和动物管理 | required | 始终纳入 | 前景牛群运行与肠道排放基础 | 每 1 kg 农场门实际可销售生乳 |
| `manure_management` | 粪污收集、储存、处理和输出 | required | 始终纳入 | 前景粪污路线与直接排放基础 | 每 1 kg 农场门实际可销售生乳 |
| `on_farm_feed_production` | 直接管理的饲料作物和牧草生产 | conditional | 报告农场边界内管理饲料作物或牧草时纳入，否则把饲料连接到上游 | 前景饲料和管理土壤清单 | 每 1 kg 农场门实际可销售生乳 |
| `milking_cooling_storage` | 挤奶、清洗、冷却和场内储存 | required | 始终纳入 | 可销售生乳的前景交付 | 每 1 kg 农场门实际可销售生乳 |

### 过程：牛群、饲喂、牛舍和动物管理（`herd_and_feed_management`）

#### 输入

##### 产品流

###### 玉米青贮饲料 (`feed_ration_silage`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

记录所代表牛群消耗的粗饲料、精饲料、副产物饲料、矿物质和添加剂数量，以及来源、动物类别、
饲喂态质量和干物质比例。

- 选定流：玉米青贮饲料
- 流属性 / 单位：质量 / kg 干物质
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_records`

###### 干牧草 (`feed_ration_hay`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

记录所代表牛群消耗的粗饲料、精饲料、副产物饲料、矿物质和添加剂数量，以及来源、动物类别、
饲喂态质量和干物质比例。

- 选定流：干牧草
- 流属性 / 单位：质量 / kg 干物质
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_records`

###### 工艺用水 (`herd_resources_water`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

记录饮水、通风、照明、饲喂设备、泵送及其他牛群运行所用的水、电力和燃料；具体数据包中保持
各供应流相互独立。

- 选定流：工艺用水
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd_resource_records`

###### 设备供电点的电力 (`herd_resources_electricity`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

记录饮水、通风、照明、饲喂设备、泵送及其他牛群运行所用的水、电力和燃料；具体数据包中保持
各供应流相互独立。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd_resource_records`

###### 柴油 (`herd_resources_diesel`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

记录饮水、通风、照明、饲喂设备、泵送及其他牛群运行所用的水、电力和燃料；具体数据包中保持
各供应流相互独立。

- 选定流：柴油
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd_resource_records`

###### 进入牛群的后备牛（`replacement_cattle`）

外购或转入的后备牛与所代表牛群内部出生的动物分开记录。

- 选定流：路线特定的活奶牛
- 流属性/单位：Mass / kg 活重
- 数量规则：根据动物流动和体重记录计算进入牛群的活重。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 离开奶牛场的活牛（`live_cattle_sales`）

按动物类别和活重记录离开农场的犊牛、淘汰牛、后备牛和其他活牛。

- 选定流：路线特定的活牛
- 流属性/单位：Mass / kg 活重
- 数量规则：根据动物流动和体重记录计算离场活重总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_records`

###### 转入粪污管理的粪污（`manure_internal`）

记录内部转入各储存或处理路线的粪污，包括垫料和稀释水。

- 选定流：牛粪污，内部转移
- 流属性/单位：Mass / kg
- 数量规则：按路线根据排泄、垫料和采集的稀释水记录计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 数量范围：暂定内部粪污质量平衡 QA 筛查范围（由 FPCM 筛查范围换算）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100 * k_period
  - 单位：kg/kg 实际可销售生乳
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 需要处理的死亡动物（`animal_mortalities`）

按类别、质量和处理路线记录农场边界内死亡的动物。

- 选定流：路线特定的动物死亡废物
- 流属性/单位：Mass / kg
- 数量规则：汇总记录的死亡质量并按农场门实际可销售乳质量归一化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_herd_records`
- 数量范围：死亡质量平衡 QA 筛查范围（由 FPCM 筛查范围换算）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1 * k_period
  - 单位：kg/kg 实际可销售生乳
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到空气的肠道甲烷（`enteric_methane`）

适用计算方法见 `calc_enteric_ch4`；保留其活动数据、因子来源和计算记录。

采用一致的活动、生产力、日粮和地区特定方法参数，计算每个被代表牛类别的肠道发酵 CH4。

- 选定流：Methane to air
- 流属性/单位：Mass / kg CH4
- 数量规则：按动物活动数据及适用肠道排放方法和因子计算报告期 CH4；将分配后的物质质量除以同期间农场门实际可销售乳质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_herd_records`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定肠道 CH4 QA 筛查范围（由 FPCM 筛查范围换算）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1 * k_period
  - 单位：kg CH4/kg 实际可销售生乳
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：粪污收集、储存、处理和输出（`manure_management`）

#### 输入

##### 产品流

###### 从所代表牛群接收的粪污（`manure_received`）

保持粪污数量、挥发性固体、氮、垫料、稀释、储存、处理和去向记录与牛群内部输出一致。

- 选定流：牛粪污，内部转移
- 流属性/单位：Mass / kg
- 数量规则：按路线拆分后等于 `manure_internal`；内部转移在汇总产品系统中抵消。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 输出粪污或回收产品（`exported_manure`）

记录离开农场的粪污、消化残渣、堆肥、分离固体、回收养分或能源产品，并声明其属于残余物、
共产品还是废物。

- 选定流：路线特定的粪污或回收产品
- 流属性/单位：Mass / kg
- 数量规则：按产品和去向采用实测发运数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manure_records`
- 数量范围：暂定输出粪污 QA 筛查范围（由 FPCM 筛查范围换算）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100 * k_period
  - 单位：kg/kg 实际可销售生乳
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 送往废物处理或处置的粪污（`manure_waste`）

记录被分类并按废物管理的粪污、去向，以及仍归属于奶牛系统的处理负荷。

- 选定流：路线特定的粪污废物
- 流属性/单位：Mass / kg
- 数量规则：按去向采用实测或质量平衡所得废物数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 数量范围：粪污路线质量平衡 QA 筛查范围（由 FPCM 筛查范围换算）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100 * k_period
  - 单位：kg/kg 实际可销售生乳
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放到空气的粪污管理甲烷（`manure_methane`）

适用计算方法见 `calc_manure_ch4`；保留其活动数据、因子来源和计算记录。

按动物类别、挥发性固体、管理系统、气候和甲烷转换计算粪污 CH4。

- 选定流：Methane to air
- 流属性/单位：Mass / kg CH4
- 数量规则：按挥发性固体、产甲烷潜力、路线比例、转换因子及适用回收或氧化计算报告期粪污 CH4；将分配后的物质质量除以同期间农场门实际可销售乳质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定粪污 CH4 QA 筛查范围（由 FPCM 筛查范围换算）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1 * k_period
  - 单位：kg CH4/kg 实际可销售生乳
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排放到空气的粪污管理氧化亚氮（`manure_nitrous_oxide`）

适用计算方法见 `calc_manure_n2o`；保留其活动数据、因子来源和计算记录。

计算直接和适用的间接 N2O，避免与田间施用排放重复计算。

- 选定流：Nitrous oxide to air
- 流属性/单位：Mass / kg N2O
- 数量规则：按氮排泄、路线比例和适用排放因子计算报告期粪污直接及间接 N2O；需要时将 N2O-N 按 44/28 换算为 N2O，再将分配后的 N2O 质量除以同期间农场门实际可销售乳质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`ipcc-2019-livestock-manure`
- 数量范围：暂定粪污 N2O QA 筛查范围（由 FPCM 筛查范围换算）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2 * k_period
  - 单位：kg N2O/kg 实际可销售生乳
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 排放到空气的粪污管理氨损失（`manure_ammonia`）

以与粪污氮平衡和间接 N2O 计算一致的方式记录或计算 NH3。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg NH3
- 数量规则：对采集的粪污氮和管理系统记录应用所声明的地区方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_manure_records`
- 来源：`fao-leap-nutrient-flows-2018`
- 数量范围：暂定氨 QA 筛查范围（由 FPCM 筛查范围换算）
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1 * k_period
  - 单位：kg NH3/kg 实际可销售生乳
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：直接管理的饲料作物和牧草生产（`on_farm_feed_production`）

#### 输入

##### 产品流

###### 玉米种子 (`feed_crop_inputs_seed`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

在具体数据包中分别记录种子、肥料及其养分含量、施用粪肥、植保产品、燃料、电力、灌溉水和
外包田间作业。

- 选定流：玉米种子
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_on_farm_feed_records`

###### 尿素肥料 (`feed_crop_inputs_urea`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

在具体数据包中分别记录种子、肥料及其养分含量、施用粪肥、植保产品、燃料、电力、灌溉水和
外包田间作业。

- 选定流：尿素肥料
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_on_farm_feed_records`

###### 柴油 (`feed_crop_inputs_diesel`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

在具体数据包中分别记录种子、肥料及其养分含量、施用粪肥、植保产品、燃料、电力、灌溉水和
外包田间作业。

- 选定流：柴油
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_on_farm_feed_records`

###### 工艺用水 (`feed_crop_inputs_water`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

在具体数据包中分别记录种子、肥料及其养分含量、施用粪肥、植保产品、燃料、电力、灌溉水和
外包田间作业。

- 选定流：工艺用水
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_on_farm_feed_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 玉米青贮饲料 (`on_farm_feed_output_silage`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

记录转入牛群饲喂的可用作物、牧草、粗饲料或青贮饲料干物质。

- 选定流：玉米青贮饲料
- 流属性 / 单位：质量 / kg 干物质
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_on_farm_feed_records`

###### 干牧草 (`on_farm_feed_output_hay`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

记录转入牛群饲喂的可用作物、牧草、粗饲料或青贮饲料干物质。

- 选定流：干牧草
- 流属性 / 单位：质量 / kg 干物质
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_on_farm_feed_records`

##### 废物流

##### 基本流

###### 氧化亚氮排入空气 (`feed_land_nitrogen_losses_n2o`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

在具体数据包中分别计算排放到空气的 N2O，并记录或计算排放到空气的 NH3 和排放到水体的硝酸盐；
各项应与氮投入、作物吸收、放牧和粪污路线一致。

- 选定流：氧化亚氮排入空气
- 流属性 / 单位：质量 / kg N2O
- 数量规则：仅核算本卡物质：依据相容活动量、适用方法和接收隔室计算，按需要将氮基准换算为本物质质量；再按同期间产出和原分配规则归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_on_farm_feed_records`
- 来源：`ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`

###### 氨排入空气 (`feed_land_nitrogen_losses_nh3`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

在具体数据包中分别计算排放到空气的 N2O，并记录或计算排放到空气的 NH3 和排放到水体的硝酸盐；
各项应与氮投入、作物吸收、放牧和粪污路线一致。

- 选定流：氨排入空气
- 流属性 / 单位：质量 / kg NH3
- 数量规则：仅核算本卡物质：依据相容活动量、适用方法和接收隔室计算，按需要将氮基准换算为本物质质量；再按同期间产出和原分配规则归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_on_farm_feed_records`
- 来源：`ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`

###### 硝酸根排入水体 (`feed_land_nitrogen_losses_nitrate`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

在具体数据包中分别计算排放到空气的 N2O，并记录或计算排放到空气的 NH3 和排放到水体的硝酸盐；
各项应与氮投入、作物吸收、放牧和粪污路线一致。

- 选定流：硝酸根排入水体
- 流属性 / 单位：质量 / kg NO3
- 数量规则：仅核算本卡物质：依据相容活动量、适用方法和接收隔室计算，按需要将氮基准换算为本物质质量；再按同期间产出和原分配规则归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_on_farm_feed_records`
- 来源：`ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018`

### 过程：挤奶、清洗、冷却和场内储存（`milking_cooling_storage`）

#### 输入

##### 产品流

###### 设备供电点的电力 (`milking_resources_electricity`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

分别记录电力、燃料、水、洗涤剂、消毒剂和制冷剂补充量。把挤奶、冷却和储奶资源直接归属于乳。

- 选定流：设备供电点的电力
- 流属性 / 单位：能源 / kWh
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milking_records`

###### 工艺用水 (`milking_resources_water`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

分别记录电力、燃料、水、洗涤剂、消毒剂和制冷剂补充量。把挤奶、冷却和储奶资源直接归属于乳。

- 选定流：工艺用水
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milking_records`

###### 氢氧化钠清洗溶液 (`milking_resources_naoh`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

分别记录电力、燃料、水、洗涤剂、消毒剂和制冷剂补充量。把挤奶、冷却和储奶资源直接归属于乳。

- 选定流：氢氧化钠清洗溶液
- 流属性 / 单位：质量 / kg 溶液
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milking_records`
- 来源：`fao-milking-cleaning`

###### R134a 制冷剂 (`milking_resources_r134a`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

分别记录电力、燃料、水、洗涤剂、消毒剂和制冷剂补充量。把挤奶、冷却和储奶资源直接归属于乳。

- 选定流：R134a 制冷剂
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milking_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门牛生乳（`raw_cattle_milk`）

最终产品是可离开场内储奶设施的可销售牛全脂生乳。保留物理质量和实测成分，清单按实际乳质量归一化，并单独报告 FPCM 换算结果。

- 选定流：鲜牛奶 `aa8aebbb-724a-417b-8372-2dccd499ce71`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_milk_output_records`
- 来源：`idf-dairy-carbon-footprint-2022`
- 数量范围：参考物理乳产出一致性
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 实际可销售生乳
  - 基准：每 1 kg 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集后计算（`calculated_from_collection`）

##### 废物流

###### 乳场清洗废水 (`milking_wastes_wastewater`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

按处理路线记录废水，并把拒收或废弃乳与内部饲喂动物的乳分开记录。

- 选定流：乳场清洗废水
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milk_output_records`

###### 废弃生牛乳 (`milking_wastes_milk_waste`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

按处理路线记录废水，并把拒收或废弃乳与内部饲喂动物的乳分开记录。

- 选定流：废弃生牛乳
- 流属性 / 单位：质量 / kg
- 数量规则：按原采集协议分别计量本卡身份的实际用量或产生量，保留原始组成、状态和单位，按同期间产出和原分配规则归一化；不得重复分摊原集合总量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milk_output_records`

##### 基本流

###### 1,1,1,2-四氟乙烷排入空气 (`refrigerant_leakage_r134a_air`)

仅在本过程实际使用或产生该具体身份时启用；此卡不是默认配方或推荐投入。按原采集协议保留该身份的原始量、组成、状态和实际用途，单独归属到声明参考流。其他实际材料须另建具体身份卡；不能把未列出材料的量填在此卡，也不能把缺失记录记成零。原集合卡的范围不适用于单项，不继承为本卡默认量。

按物种记录从乳冷却设备释放的制冷剂；不得以 CO2 当量代替质量排放。

- 选定流：1,1,1,2-四氟乙烷排入空气
- 流属性 / 单位：质量 / kg
- 数量规则：仅核算本卡物质：依据相容活动量、适用方法和接收隔室计算，按需要将氮基准换算为本物质质量；再按同期间产出和原分配规则归一化。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_milking_records`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 可分离的农场活动和产出 | 分配前先细分可直接归属的活动。把挤奶、乳冷却和储奶负荷全部直接归属于乳；单独核算的动物饲养或输出作物/能源活动不得进入奶牛共享分配池。 | `idf-dairy-carbon-footprint-2022` |
| `allocation_milk_live_animals` | 乳与活牛之间的奶牛群共享负荷 | 应用 IDF 2022 生物物理净能法：`AF_milk = (NE_L × M_FPCM) / ((NE_L × M_FPCM) + Σ(NE_G,i × M_liveweight,i))`；采用同一期间的 FPCM 和活重销售量，在可用时采用动物类别特定的生长净能，并披露所有因子。剩余比例分配给活动物。 | `idf-dairy-carbon-footprint-2022` |
| `allocation_manure` | 离开农场的粪污 | 明确分类粪污。边界处基本无价值的粪污作为残余物采用截断；作为共产品时采用已披露的经济分配；作为废物时，其处理负荷归属于奶牛系统且不得给予替代产品抵扣。 | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `allocation_internal_flows` | 内部乳、饲料和粪污转移 | 只有在保留内部产品流数量和特征后才能抵消。内部饲喂犊牛的生乳减少可销售产出；内部生产的饲料和粪污不得重复承担上游负荷。 | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_herd_records` | `herd_and_feed_management` | 牛群结构、流动、活重、死亡和肠道参数 | 动物登记和牛群生产记录 | animal_class; head_count; entry_date; exit_date; exit_reason; live_weight; body_weight; milk_yield; feed_digestibility; gross_energy_intake | 农场登记、校准秤或有文件依据的体重估算及牛群系统导出；原始记录核对：核对期初存栏 + 出生 + 购入 - 销售 - 转出 - 死亡 = 期末存栏；汇总动物日。再按 calc_inventory_normalization 归一化可归属的报告期数量；保留未归一化原始记录。 | 头；kg 活重；kg 乳；MJ/头/日 | 连续记录事件，按月汇总 | 至少一个有代表性的 12 个月期间；不稳定时采用更长平均期 | 所有支撑报告乳产出的牛 | 每 1 kg 参考流 | 登记核对、秤校准或方法、事件缺失日志和系统导出 |
| `cp_feed_records` | `herd_and_feed_management` | 日粮和垫料 | 采购、混料、库存、放牧和实验室记录 | material_id; origin; animal_class; as_fed_mass; dry_matter_fraction; opening_stock; closing_stock; feed_waste; bedding_mass | 地磅、发票、混料日志、饲料分析、放牧估算和库存核对；原始记录核对：投入 + 期初库存 - 期末库存 - 损失；换算为干物质并按农场门实际可销售乳质量归一化。再按 calc_inventory_normalization 归一化可归属的报告期数量；保留未归一化原始记录。 | kg 饲喂态；kg 干物质；干物质百分比 | 按批或每日，按月汇总 | 与乳和牛群相同的代表期 | 被代表牛群使用的全部饲料和垫料 | 每 1 kg 参考流 | 校准、发票、实验室证书和核对差异 |
| `cp_herd_resource_records` | `herd_and_feed_management` | 牛群用水和牛舍能源 | 计量、发票和设备运行记录 | meter_id; carrier; opening_reading; closing_reading; invoice_quantity; equipment_hours; allocation_driver | 优先分表；否则以物理分配核对场址总量；原始记录核对：核对仪表和发票；保留不同载体。再按 calc_inventory_normalization 归一化可归属的报告期数量；保留未归一化原始记录。 | kg 水；kWh；MJ；kg 或 L 燃料 | 每月 | 与乳相同的代表期 | 牛群牛舍和服务区域，不含单独计量的挤奶负荷 | 每 1 kg 参考流 | 仪表校准、发票、换算因子和分配工作表 |
| `cp_manure_records` | `manure_management` | 粪污数量、组成、路线、处理、输出和排放 | 粪污管理和养分平衡记录 | animal_class; volatile_solids; nitrogen_excretion; bedding; dilution_water; management_system; climate; storage_duration; treatment; exported_mass; destination | 记录、工程平衡、粪污分析、储存测量和方法计算；原始记录核对：核对产生、储存、处理、施用、输出和处置量；按路线计算。再按 calc_inventory_normalization 归一化可归属的报告期数量；保留未归一化原始记录。 | kg 粪污；kg 挥发性固体；kg N；日；kg 产品 | 按事件或批次，按月汇总 | 与牛群和乳相同期间 | 所有被代表牛群类别的每条粪污路线 | 每 1 kg 参考流 | 采样、实验室结果、储存尺寸、收据、平衡闭合和因子溯源 |
| `cp_on_farm_feed_records` | `on_farm_feed_production` | 管理作物和牧草的投入、产出、土地和养分损失 | 田间作业、收获、放牧和土地记录 | field_id; crop_or_pasture; area; seed; fertilizer; nutrient_content; manure_applied; crop_protection; fuel; electricity; irrigation; yield; dry_matter; residue; grazing_days; previous_land_use | 田间日志、发票、校准施用记录、产量测量、放牧记录和空间证据；原始记录核对：将田间投入分配至收获或采食干物质；保留作物、田块和年份。再按 calc_inventory_normalization 归一化可归属的报告期数量；保留未归一化原始记录。 | ha；kg；kg 养分；MJ；kWh；kg 水；kg 干物质 | 每次作业和收获 | 向乳报告期供应饲料的作物年度 | 全部直接管理饲料土地和已纳入外包作业 | 每 1 kg 参考流 | 完整性、校准、发票、干物质检测、产量核对和土地证据 |
| `cp_milking_records` | `milking_cooling_storage` | 挤奶、清洗、冷却、储存、水、能源、化学品和制冷剂 | 计量、加药、维修和清洗周期记录 | electricity; fuel; water; cleaning_agent; dose; cleaning_cycles; refrigerant_type; refrigerant_added; tank_temperature | 分表、发票、加药日志、控制器、维修记录和水平衡；原始记录核对：把实测挤奶/冷却负荷直接归属于乳，并与场址总量核对。再按 calc_inventory_normalization 归一化可归属的报告期数量；保留未归一化原始记录。 | kWh；MJ；kg 水；kg 化学品；kg 制冷剂；°C | 每日或按批，按月核对 | 与乳产出相同期间 | 所有挤奶厅、乳房、冷却和场内储存 | 每 1 kg 参考流 | 校准、发票、加药检查、维修证书、温度日志和平衡闭合 |
| `cp_milk_output_records` | `milking_cooling_storage` | 物理乳、成分、内部使用、拒收乳、废水和可销售产出 | 储奶罐、处理商收据、实验室、去向和水平衡记录 | milk_mass; milk_volume; density; fat_percent; true_protein_percent; temperature; saleable_mass; calf_feed_mass; rejected_mass; wastewater; destination; timestamp | 校准储奶罐或称重记录，并连接实验室成分、处理商收据和水平衡；原始记录核对：核对产乳 = 可销售 + 内部使用 + 拒收 + 库存变化；按批或期间计算 FPCM。再按 calc_inventory_normalization 归一化可归属的报告期数量；保留未归一化原始记录。 | kg；L；kg/L；质量百分比；°C | 每次取乳或批次；代表性成分检测 | 与牛群和资源记录相同期间并覆盖季节性 | 全部产乳、每个去向及相关废水 | 每 1 kg 参考流 | 储奶罐校准、实验室 QA、收据、密度方法和质量平衡闭合 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_fpcm` | 物理牛生乳 | `FPCM (kg) = milk mass (kg) × [0.1226 × fat% + 0.0776 × true protein% + 0.2534]`；成分值以百分比代入，在最有代表性的批次或期间粒度计算并求和后再归一化。百分数应代入 4.0 这类数值，而非 0.04 这类小数。比较结果仅汇总与实际可销售乳分母对应的可销售批次；内部使用和拒收乳须单独保留。 | milk_mass; fat_percent; true_protein_percent | kg FPCM | `idf-dairy-carbon-footprint-2022` |
| `calc_saleable_milk_balance` | 乳的各去向 | `total physical milk produced = saleable farm-gate milk + internal milk use + rejected milk + closing inventory - opening inventory`；调查无法解释的差额，只对可销售产出归一化。 | total_milk; saleable_milk; internal_use; rejected_milk; opening_inventory; closing_inventory | 核对后的 kg 物理乳和 kg FPCM | `mass-balance-identity`; `idf-dairy-carbon-footprint-2022` |
| `calc_milk_allocation` | 奶牛群共享负荷 | `AF_milk = (NE_L × M_FPCM) / ((NE_L × M_FPCM) + Σ(NE_G,i × M_liveweight,i))`；`AF_live_animals = 1 - AF_milk`。采用 IDF 动物类别特定净能值或有依据的数值，并先直接归属可分离活动。 | M_FPCM; animal_class; M_liveweight_i; NE_L; NE_G_i; directly_attributable_burdens | 已披露的分配因子和分配后共享清单 | `idf-dairy-carbon-footprint-2022` |
| `calc_enteric_ch4` | enteric_methane | 采用适当的 IPCC 2019 Refinement 层级。具备总能摄入、甲烷转换、动物类别、生产力和日粮数据时优先 Tier 2；否则采用许可且最具代表性的因子并披露局限。 | animal_days; animal_class; gross_energy_intake or emission_factor; methane_conversion_factor; productivity; diet | 肠道发酵 kg CH4 | `ipcc-2019-livestock-manure` |
| `calc_manure_ch4` | manure_methane | 根据动物数量、挥发性固体排泄、最大产甲烷能力、管理系统比例、甲烷转换及适用的回收或氧化项计算粪污 CH4。 | animal_days; volatile_solids; manure_system_fraction; B0; MCF; recovery; oxidation | 粪污管理 kg CH4 | `ipcc-2019-livestock-manure` |
| `calc_manure_n2o` | manure_nitrous_oxide | 根据氮排泄和管理系统比例计算直接和间接 N2O；使挥发和淋失氮与 NH3、硝酸盐及管理土壤计算一致。 | nitrogen_excretion; manure_system_fraction; direct_EF; volatilization_fraction; leaching_fraction; indirect_EF | 粪污管理 kg N2O | `ipcc-2019-livestock-manure`; `fao-leap-nutrient-flows-2018` |
| `calc_inventory_normalization` | 所有清单行 | 按已声明分配规则归属报告期数量并核对内部转移后，以实测农场门实际可销售乳质量为分母归一化。内部转移行保留用于单元过程平衡，仅在系统汇总时抵消；保留总量、期间和分配因子。分母必须大于零，并排除内部使用和拒收乳。 | reporting_period_amount; saleable_physical_milk_mass; internal_flow_flag; allocation_factor | 每 1 kg 实际可销售生乳的清单量 | `mass-balance-identity`; `idf-dairy-carbon-footprint-2022` |
| `calc_fpcm_reporting` | 单独的比较结果及暂定 QA 筛查范围 | `k_period = saleable_FPCM / saleable_physical_milk_mass`；`result_per_kg_FPCM = result_per_kg_physical_milk / k_period`。两种结果须采用相同可销售批次、期间、系统边界和分配后分子。saleable_FPCM 按各批质量乘以其成分校正系数后求和，或使用等价的质量加权成分计算；不得使用批次百分数的简单平均。两种质量和 k_period 必须大于零。原每 FPCM 的 QA 区间 [L, U] 换算为实际乳质量基准时，采用 [L × k_period, U × k_period]；其仍是暂定筛查范围，不能作为默认清单值。报告换算不得再次分配。 | saleable_FPCM; saleable_physical_milk_mass; result_per_kg_physical_milk | k_period; result_per_kg_FPCM; 实际乳质量 QA 界限 | `idf-dairy-carbon-footprint-2022`; `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和分类 | 确认牛物种、生乳/未加工状态、CPC 02211 范围、参考流 UUID、农场门位置和可销售状态。 | 产品规格、乳收据、分类记录和 TianGong 身份确认 |
| `dq_temporal` | 所有前景记录 | 采用共同且具有代表性的至少 12 个月期间，除非更短期间已证明覆盖季节性；披露牛群扩张、收缩、中断、干旱或其他非稳态情况。 | 带日期的牛群、乳、饲料、资源、田间和粪污记录及代表性声明 |
| `dq_completeness` | 农场平衡 | 核对乳去向、动物流动、饲料库存、水和能源总量、粪污路线及氮流；量化缺失覆盖，不得默默遗漏重要牛群类别或粪污路线。 | 核对工作表、闭合差异、缺失数据日志和纠正措施 |
| `dq_measurement` | 计量、称重和实验室数据 | 保留设备身份、校准或验证、采样方法、实验室方法、密度换算和估算层级。 | 校准证书、实验室 QA、采样记录、发票和估算理由 |
| `dq_geography_technology` | 上游数据集和排放方法 | 匹配地理、生产系统、饲料来源、电力、燃料、气候、粪污系统和动物生产力；披露代理。 | 数据集元数据、供应商信息、因子溯源和代理理由 |
| `dq_consistency` | 分配和直接排放计算 | 在 FPCM、活重产出、肠道排放、粪污排放和分配中采用同一总体和期间；把直接归属负荷排除在共享分配池外。 | 计算工作簿、因子版本、来源和独立公式检查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 当参考产品不是牛乳、加工超过场内冷却/储存的生乳状态、缺少所声明农场门或未采用已确认参考流身份时，校验失败。 | `idf-dairy-carbon-footprint-2022` |
| `validate_reference_flow` | 功能单位和参考流 | 当实际乳质量、脂肪百分比、真蛋白百分比、可销售状态或恰好归一化为 1 kg 实际可销售生乳任一缺失或不一致时，校验失败。关联的最终产品输出必须恰好为 1 kg 实际生乳。 | `idf-dairy-carbon-footprint-2022` |
| `validate_fpcm_reporting` | 成分校正比较和 QA | 当成分或可销售批次与实际乳分母不匹配、把百分数作为小数代入、k_period 缺失或非正数、把实际乳质量结果乘以而非除以 k_period、重复分配，或把实际乳与 FPCM 结果当作可互换结果时，校验失败。须在参考质量一致性检查之外单独核对这些公式及其证据。 | `idf-dairy-carbon-footprint-2022`; `mass-balance-identity` |
| `validate_period_herd` | 时间和牛群覆盖 | 当牛群类别、动物流动、乳产出、饲料、粪污和资源记录未采用同一代表期，或期初与期末牛群库存无法核对时，校验失败。 | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `validate_boundary` | 边界完整性 | 当重要饲料供应、直接管理的饲料生产、肠道排放、粪污路线、管理土壤排放、挤奶、冷却、水、能源或乳损失被遗漏且没有适用性理由和数据缺口披露时，校验失败。 | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `validate_emissions` | 直接排放 | 当肠道或粪污方法缺少所选方法所需的地区、牛类别、生产力、日粮或饲料能量基础、粪污系统、气候、因子来源或计算层级时，校验失败。 | `ipcc-2019-livestock-manure` |
| `validate_allocation` | 共产品和残余物 | 当直接可归属活动被分配、活动物产出被遗漏、IDF 净能分配输入或因子缺失、粪污分类未声明，或分配比例在数值容差内不等于一时，校验失败。 | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |
| `validate_internal_flows` | 内部乳、饲料和粪污 | 当内部流在核对前被遗漏、同时作为外购和自产重复计算，或未抵消而留在汇总清单中时，校验失败。 | `mass-balance-identity` |
| `validate_quality_disclosure` | 数据集发布准备度 | 当数据包缺少地理、生产系统、期间、牛群结构、乳成分、饲料来源、粪污系统、分配、来源/因子版本、代理披露、重要 QA 范围例外或重要数据缺口时，校验失败。 | `idf-dairy-carbon-footprint-2022`; `fao-leap-large-ruminants-2016` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 归一化为农场门 1 kg 实际可销售生乳的牛生乳前景生产数据包；单独报告 FPCM 比较结果 |
| downstream_use | 当范围和质量兼容时，可发布为用于乳品加工、食品、农业及比较供应链模型的 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 归因型农场门清单、所声明农场系统内热点分析、下游模型中的供应商特定或代表性生乳投入，以及采用相同功能单位和分配方法的情景比较 |
| excluded_use | 直接消费者或营养声明；加工乳表征；非牛乳；后果型市场变化声明；边界、分配、地理、期间或数据质量不兼容的跨研究排名；把暂定 QA 范围作为默认清单使用 |
| required_metadata | PCR id 和版本状态；CPC 参考；地理；农场生产系统；报告期；牛群类别和库存变化；生乳和 FPCM 产出；脂肪和真蛋白含量；农场门温度；饲料来源；粪污系统；土地管理；分配方法和因子；Tiangong 身份；来源和因子版本 |
| required_quality_disclosure | 按清单组的初级数据覆盖；计量和校准证据；时间、地理和技术代表性；质量/能量/氮平衡闭合；代理和缺失数据；排放层级和因子；分配敏感性；暂定 QA 范围例外 |
| update_trigger | 当乳成分、牛群生产力或结构、饲料系统、粪污管理、农场能源供应、土地管理、地理、报告期、分配方法、参考身份或重要来源/因子发生足以影响代表性的变化时，重新计算并发布 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `idf-dairy-carbon-footprint-2022` | standard | International Dairy Federation (2022), *The IDF global Carbon Footprint standard for the dairy sector*, Bulletin 520/2022, DOI: 10.56169/FKRK7166, https://shop.fil-idf.org/products/the-idf-global-carbon-footprint-standard-for-the-dairy-sector（访问日期 2026-07-24） | FPCM 比较报告基准和公式、从摇篮到农场门清单、数据质量、乳/活动物分配、粪污处理、直接归属和报告 |
| `fao-leap-large-ruminants-2016` | official_guidance | FAO LEAP Partnership (2016), *Environmental performance of large ruminant supply chains: Guidelines for assessment*, ISBN 978-92-5-109523-2, https://openknowledge.fao.org/handle/20.500.14283/i6494en（访问日期 2026-07-24） | 大型反刍动物过程边界、全牛群覆盖、饲料和粪污处理及分配层级 |
| `fao-leap-animal-feed-2016` | official_guidance | FAO LEAP Partnership (2016), *Environmental performance of animal feeds supply chains: Guidelines for assessment*, https://www.fao.org/partnerships/leap/resources/publications/en（访问日期 2026-07-24） | 饲料来源、上游饲料数据集、直接管理饲料生产和土地相关清单 |
| `fao-leap-nutrient-flows-2018` | official_guidance | FAO LEAP Partnership (2018), *Nutrient flows and associated environmental impacts in livestock supply chains: Guidelines for quantitative assessment*, https://openknowledge.fao.org/handle/20.500.14283/ca1328en（访问日期 2026-07-24） | 粪污和管理土地氮平衡、氨、硝酸盐及养分流一致性 |
| `ipcc-2019-livestock-manure` | method_factor | IPCC (2019), *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 4, Chapter 10: Emissions from Livestock and Manure Management, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch10_Livestock.pdf（访问日期 2026-07-24） | 肠道 CH4、粪污 CH4、粪污 N2O、动物类别、活动数据、层级和因子选择 |
| `ilcd-units-of-mass` | standard | European Commission Joint Research Centre, ILCD reference unit group *Units of mass*, UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, https://eplca.jrc.ec.europa.eu/LCDN/downloads/ILCD_Format_1.1_Documentation/ILCD_UnitGroupDataSet.html（访问日期 2026-07-24） | 参考单位组身份和 kg 参考单位 |
| `mass-balance-identity` | method_factor | 对乳、饲料、牛群和粪污核对应用质量守恒恒等式 | 内部流抵消、乳去向平衡和 QA 边界 |
| `fao-milking-cleaning` | official_guidance | FAO Milking, milk production hygiene and udder health; cleaning-agent context, actual concentration and quantities from site records, https://www.fao.org/4/t0218e/T0218E03.htm | 条件性身份依据；实际场址用量和适用性须单独核实 |
