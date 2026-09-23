---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-cereals-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他未列名谷物籽粒

## 1. 范围与适用性

本 PCR 用于构建 CPC 3.0 `01199`“其他未列名谷物”项下栽培谷物籽粒的前景数据包，适用于没有被具名 CPC 谷物叶节点及其专用 PCR 覆盖的谷物。该类别是分类学上的剩余项，因此数据集必须说明生物学作物、在结果有影响时说明品种、预期用途和实物市场状态。

默认边界从播种用种子和作物建立开始，经过田间作业、收获、初级干燥、清理、分级，至声明的初级调制门的调质籽粒交付。若有实测数据，数据集可以把较早的农场门交接作为中间过程产出，但参考产出仍为调质谷物交付门。食品、饲料、工业和特色谷物用途均须声明用途和质量状态后才能纳入。

本 PCR 排除已有专用 PCR 的具名谷物类别，包括荞麦、金丝雀种子、福尼奥米、小米、藜麦、小黑麦、黑麦、高粱、小麦、大麦、燕麦、水稻、玉米，以及具有更窄适用 PCR 的其他作物。还排除播种用种子、全株饲草、干草、青贮、面粉、麦芽、淀粉、酒精、预制食品、饲料制造、零售包装、消费者使用及声明交付门之后的运输。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-cereals-n-e-c |
| classification_refs | CPC 3.0 `01199`，其他未列名谷物 |
| covered_products | 不属于具名谷物叶节点、属于剩余类别的调质谷物籽粒，在声明的初级调制门交付 |
| excluded_products | 有专用 PCR 的具名谷物类别；播种用种子；饲草和全株产品；碾磨、制麦、发酵、预制或零售产品 |
| representative_product | 已识别的其他谷物籽粒，经初级调制调质后在声明交付门交付 |
| production_route | 一年生或多年生谷物建立、田间生产、收获、初级调制和声明交付门交接 |
| market_state | 散装或包装调质籽粒，并声明作物身份、用途、水分基准、等级、地理范围、作物年度和交付门 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | CPC 01199 剩余类别中、在声明初级调制门的已识别调质谷物籽粒 |
| How much | 1 kg |
| How well | 生物学作物及在结果有影响时的品种；用途；原样或干物质水分基准；等级或质量描述；调质和清理状态；地理范围；作物年度；声明交付门 |
| How long or cycle | 一个声明的作物周期和收获年度；当交付门位于储存之后时单独声明储存时长 |
| reference_flow_link | 下方的参考数量和已核实平台产品流；所选身份受限于初级调制门的调质籽粒 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Tempered cereal grain `5e3cbce3-96fb-4754-87e1-ad67d2ea86f3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 绑定模式 | fixed |
| 必需限定信息 | 作物身份及在结果有影响时的品种；CPC 01199 剩余类别；用途；水分基准；等级或质量描述；调质/清理/干燥状态；地理范围；作物年度；初级调制门；散装或包装状态 |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明全部必需限定信息。若某具名谷物已有更窄 PCR，应转用该 PCR。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考籽粒 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所选交付门报告 1 kg 已识别籽粒，并说明质量是原样质量还是水分归一化质量。 |
| `moisture_basis` | 收获和调制籽粒 | 质量和水分含量 | kg 和 percent | 记录原样质量和实测水分；若使用干物质换算，保留实测水分和公式。 |
| `nutrient_input_basis` | 肥料和氮排放 | 质量 | kg 产品和 kg 养分 | 分别保留商品肥料质量以及 N、P2O5、K2O 含量；氮排放计算使用 kg N。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 或 kg | 区分水源取水、输送灌溉水、田间消耗和排放，不得合并为一个数量。 |
| `energy_inventory` | 田间和调制能源 | 质量、体积或能量 | L、kg、MJ 或 kWh | 在归一化到籽粒产出前记录能源载体、作业、期间和换算基准。 |
| `output_reconciliation` | 收获和调制产出 | 质量 | kg | 在共同水分基准上核对合格籽粒、筛下物、残余物、拒收物和实测损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | seed_for_sowing_input_and_declared_other_cereal_crop_cycle |
| starting_condition_role | crop_establishment_condition |
| product_classification_scope | CPC 3.0 `01199` 剩余类别中的调质其他谷物籽粒；须声明生物学身份，且不能由更窄的具名谷物 PCR 覆盖 |
| recursive_input_rule | 同类别籽粒作为播种用种子时，记录为有作物身份、批次、处理、来源和数量的上游播种投入；不得无说明地视为参考产品 |
| upstream_dataset_requirement | 上游种子、肥料、作物保护、能源、水、运输和废物处理投入须使用已识别数据集或供应商原始记录 |
| disclosure | 声明生物学作物身份、在结果有影响时的品种、作物周期、地理范围、作物年度、用途、种子来源、肥料和作物保护实践、灌溉状态、水分基准、收获和调制路线、调质状态、初级调制门、质量状态及每个非参考产出的去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_production` | 田间生产 | 纳入播种用种子、土地占用、土壤准备、播种或定植、养分投入、适用时的灌溉、作物保护、田间作业以及收获前直接田间排放。 | `ipcc-2019-managed-soils-n2o`; `fao-crop-evapotranspiration-56` |
| `boundary_harvest` | 收获和交接 | 当这些活动属于前景数据包时，纳入收获、脱粒或联合收割、田边收集以及至声明农场或初级调制交接点的交付。 | `fao-grain-postharvest-systems-1998` |
| `boundary_primary_conditioning` | 初级调制 | 纳入初级干燥、清理、分级、调质和拒收物处理至声明参考门。 | `fao-grain-postharvest-systems-1998` |
| `boundary_downstream_exclusion` | 下游加工 | 排除碾磨、制麦、淀粉或酒精转化、食品或饲料制造、零售和消费者使用；作为下游数据集建模。 | `iso-14044-2006` |
| `boundary_input_completeness` | 所有路线 | 对种子、N/P/K 及有机养分、灌溉、作物保护、土地、田间及收获能源、调制能源、直接排放、残余物、拒收物和损失进行量化或说明为零/排除。 | `ipcc-2019-managed-soils-n2o`; `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `other_cereal_crop_production` | 其他谷物田间生产 | required |  | foreground | 收获籽粒及相关田间残余物 |
| `other_cereal_harvest_delivery` | 收获和农场门交付 | required |  | foreground | 交付到选定交接点的收获籽粒 |
| `other_cereal_primary_conditioning` | 初级干燥、清理、调质和分级 | required | 生成调质参考流所必需 | foreground | 调制门的合格调质籽粒 |
| `other_cereal_storage_gate` | 储存和声明交付门交接 | conditional | 储存或包装改变声明交付门时纳入 | foreground | 选定交付门的籽粒 |

### 过程：其他谷物田间生产（`other_cereal_crop_production`）

#### 输入

##### 产品流

###### 声明作物的播种用种子（`seed_for_sowing_input`）

记录作物专用播种种子作为上游产品投入，并保留批次身份和处理信息。种子身份须根据作物和供应商记录选择核实流，当前不强行固定。

- 选定流：作物专用播种用种子
- 流属性/单位：Mass / kg
- 数量规则：按田块和批次计量种子质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_input_records`
- 数量范围：暂定播种量筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：5
  - 上限：350
  - 单位：kg 种子 / ha
  - 基准：等待作物特定记录前的宽泛作物建立播种量范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`other_cereal_crop_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：
- 数量范围：暂定氮投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg N / 1,000 kg 籽粒
  - 基准：等待作物和地区特定记录前的宽泛田间投入校验范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定磷投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg P2O5 / 1,000 kg 籽粒
  - 基准：等待作物和地区特定记录前的宽泛田间投入校验范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定钾投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg K2O / 1,000 kg 籽粒
  - 基准：等待作物和地区特定记录前的宽泛田间投入校验范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定有机投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10,000
  - 单位：kg 产品 / 1,000 kg 籽粒
  - 基准：等待场址记录前的宽泛改良剂范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物灌溉供水（`irrigation_water_input`）

将输送灌溉水与水源取水和田间消耗分开记录。雨养作物可以在有证据时将灌溉明确记录为零。

- 选定流：灌溉水
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`irrigation-water`
- 流属性/单位：Volume / m3
- 数量规则：按水源和田块计量输送灌溉水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 数量范围：暂定灌溉水筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3,000
  - 单位：m3 / 1,000 kg 籽粒
  - 基准：等待场址记录前的宽泛输送灌溉水范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物保护产品投入（`crop_protection_input`）

根据供应商或施用记录，按制剂产品或活性物质记录每种作物保护产品。不得用通用农药 UUID 替换具体产品身份。

- 选定流：作物保护产品
- 流属性/单位：Mass / kg
- 数量规则：按施用记录计量制剂产品或活性物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 数量范围：暂定作物保护筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg 制剂产品 / 1,000 kg 籽粒
  - 基准：等待产品和田间记录前的宽泛施用量范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田间机械燃料（`field_machinery_fuel`）

在换算至声明产出基准前，按田间作业、机械和作物批次记录燃料。

- 选定流：移动机械燃料
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`mobile-machinery-fuel`
- 流属性/单位：Mass or energy / kg or MJ
- 数量规则：按田间作业计量燃料，并保留载体和原始单位
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 数量范围：暂定田间燃料筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：180
  - 单位：L / 1,000 kg 籽粒
  - 基准：等待机械记录前的宽泛田间作业燃料范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

不假定存在废物输入。只有在记录了来源和跨越前景边界时，才记录再利用有机物、回用水和废物衍生投入。

##### 基本流

当土地占用和资源取用属于前景数据包时，将其作为基本流交换记录。其身份和单位仍须服从最终过程数据集契约。

#### 输出

##### 产品流

###### 可收获其他谷物籽粒（`harvested_grain_output`）

分别记录收获籽粒总量和合格部分；合格部分进入收获过程并最终定义参考产出。

- 选定流：其他谷物籽粒，收获后未加工
- 流属性/单位：Mass / kg
- 数量规则：计量收获籽粒质量并记录水分和质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 数量范围：暂定收获产量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：300
  - 上限：15,000
  - 单位：kg 籽粒 / ha
  - 基准：等待已识别作物和地区记录前的宽泛产量校验范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

在收获过程中记录返田残余物、移出田间的秸秆或茎秆、损坏籽粒和未收获损失，并分别记录去向。

##### 基本流

根据采集的养分和残余物记录计算直接田间排放，并分配至下述接收环境介质。

### 过程：收获和农场门交付（`other_cereal_harvest_delivery`）

#### 输入

##### 产品流

###### 来自田间生产的收获籽粒（`harvested_grain_input`）

在相同水分基准下将计量的收获产出转入交接过程，不得无说明地替换为具名谷物流。

- 选定流：其他谷物籽粒，收获后未加工
- 流属性/单位：Mass / kg
- 数量规则：计量从田间生产节点接收的籽粒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 数量范围：暂定收获至交接投入估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.95
  - 上限：1.20
  - 单位：kg 籽粒投入 / kg 合格籽粒
  - 基准：等待批次记录前的宽泛收获质量产出范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收获机械燃料（`harvest_fuel_input`）

当属于声明边界时，记录联合收割、脱粒、机上干燥和田边收集能源。

- 选定流：移动机械燃料
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`mobile-machinery-fuel`
- 流属性/单位：Mass or energy / kg or MJ
- 数量规则：按机械和收获批次计量收获燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_energy_records`
- 数量范围：暂定收获燃料筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：L / 1,000 kg 籽粒
  - 基准：等待机械记录前的宽泛收获作业燃料范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

将收获损失和移出的残余物作为有独立去向的废物或副产品流分别记录。

##### 基本流

除收获记录中说明的交换外，交接过程不假定有基本流输入。

#### 输出

##### 产品流

###### 交付至声明农场门的籽粒（`farm_gate_grain_output`）

当不包含调制或储存过程时，声明农场门的合格籽粒是暂定参考产出。

- 选定流：其他谷物籽粒，收获后未加工
- 流属性/单位：Mass / kg
- 数量规则：计量交接点合格籽粒并记录水分和质量限定信息
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：定量参考产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_output_records`
- 数量范围：暂定合格籽粒产出校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.5
  - 上限：1.0
  - 单位：kg 合格籽粒 / kg 收获籽粒
  - 基准：收获筛选后的合格籽粒比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 残余物、损坏籽粒和收获损失（`harvest_residue_and_loss`）

分别记录返田残余物、移出田间残余物、损坏籽粒和未计量损失及其去向。

- 选定流：收获残余物或损失流
- 流属性/单位：Mass / kg
- 数量规则：在共同水分基准上计量流质量或计算质量差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_loss_records`
- 数量范围：暂定残余物和损失筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,000
  - 单位：kg 干基或原样流 / 1,000 kg 合格籽粒
  - 基准：等待实测去向记录前的宽泛残余物和损失范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 贯穿收获环节的直接田间排放（`direct_field_emissions`）

直接排放根据养分、残余物和能源记录计算，不纳入籽粒质量平衡。

- 选定流：一种已识别的氮、磷或燃烧排放进入一个有证据的接收介质；按物质和区室分别生成前景交换
- 流属性/单位：Mass / kg 物质
- 数量规则：根据采集投入和选定方法因子计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_activity_records`
- 数量范围：暂定直接排放筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg 物质 / 1,000 kg 合格籽粒
  - 基准：等待按物质分别计算前的宽泛综合排放校验范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：初级干燥、清理和分级（`other_cereal_primary_conditioning`）

#### 输入

##### 产品流

###### 进入初级调制的收获籽粒（`conditioning_grain_input`）

当干燥、清理或分级属于声明交付门时纳入。调制前记录投入水分和质量。

- 选定流：其他谷物籽粒，收获后未加工
- 流属性/单位：Mass / kg
- 数量规则：称量调制线投入并测定水分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调制门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_records`
- 数量范围：暂定调制投入筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.95
  - 上限：1.20
  - 单位：kg 投入籽粒 / kg 合格籽粒
  - 基准：水分校正前的宽泛质量产出校验范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调制用电（`conditioning_electricity_input`）

按批次或作业期记录干燥机、清理机、输送机、风机和分级设备用电。

- 选定流：电力供应
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`electricity-supply`
- 流属性/单位：Energy / kWh
- 数量规则：按计量或账单将用电分配至调制批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 调制门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 数量范围：暂定调制用电筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kWh / 1,000 kg 合格籽粒
  - 基准：清理、输送和分级的宽泛首轮能源范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调制热量或燃料（`conditioning_heat_input`）

当选择干燥时记录干燥机热载体和数量；在前景记录中区分燃料和供应热量。

- 选定流：外购工艺热或固定燃料
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`purchased-process-heat`
- 流属性/单位：Energy / MJ
- 数量规则：计量热量或燃料，并换算为供应工艺热
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 调制门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
- 数量范围：暂定干燥热量筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,500
  - 单位：MJ / 1,000 kg 合格籽粒
  - 基准：等待去除水分和设备记录前的宽泛干燥热量范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

将筛下物、粉尘、损坏籽粒和拒收流分别记录，并记录实测水分和去向。

##### 基本流

干燥和燃烧排放根据确认的能源记录和声明因子计算。

#### 输出

##### 产品流

###### 调制后合格调质籽粒（`conditioned_grain_output`）

调制后的合格调质籽粒是声明初级调制门的参考产出。

- 选定流：Tempered cereal grain `5e3cbce3-96fb-4754-87e1-ad67d2ea86f3`
- 绑定模式：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：称量调制后合格批次产出并记录水分和等级
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：定量参考产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioned_output_records`
- 数量范围：暂定调制产出率筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.80
  - 上限：1.00
  - 单位：kg 合格籽粒 / kg 调制投入
  - 基准：水分和拒收物核对后的合格产出比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 筛下物、粉尘和调制拒收物（`conditioning_rejects`）

记录每个移出流及去向；除非有明确返工决定，否则不得将拒收物分配给合格籽粒。

- 选定流：谷物筛下物、粉尘或拒收籽粒
- 流属性/单位：Mass / kg
- 数量规则：在共同水分基准上称量流质量或计算质量差额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 调制后合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_reject_records`
- 数量范围：暂定调制拒收筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg 拒收物 / kg 调制投入
  - 基准：等待批次记录前的宽泛筛下物和拒收比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

干燥、粉尘和燃烧排放报告至前景过程数据集所选接收环境介质。

### 过程：储存和声明交付门交接（`other_cereal_storage_gate`）

#### 输入

##### 产品流

###### 进入声明储存或包装的籽粒（`storage_grain_input`）

当储存或包装属于声明交付门时，记录期初库存、水分、质量和批次身份。

- 选定流：前一交付门的其他谷物籽粒
- 流属性/单位：Mass / kg
- 数量规则：称量批次投入并记录期初水分和质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_inventory_records`
- 数量范围：暂定储存投入质量估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.95
  - 上限：1.20
  - 单位：kg 籽粒投入 / kg 合格籽粒
  - 基准：等待批次核对前的宽泛储存投入范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 储存用电（`storage_electricity_input`）

按批次或储存期间记录风机、输送机、通风和其他储存用电。

- 选定流：电力供应
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set 版本：`0.2.0`
- Flow Set 分组：`electricity-supply`
- 流属性/单位：Energy / kWh
- 数量规则：按计量或账单根据批次和时长分配储存用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_energy_records`
- 数量范围：暂定储存能源筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kWh / 1,000 kg 籽粒
  - 基准：等待批次记录前的宽泛储存和通风能源范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

记录储存损失、腐败和损坏产品，并记录时长、水分、质量和去向。

##### 基本流

除已有记录的储存资源交换外，不假定存在基本流输入。

#### 输出

##### 产品流

###### 声明参考交付门的调质籽粒（`declared_gate_grain_output`）

当储存或包装位于初级调制门之后时，最终合格调质批次是参考产出。

- 选定流：Tempered cereal grain `5e3cbce3-96fb-4754-87e1-ad67d2ea86f3`
- 绑定模式：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：称量合格产出并记录水分、质量、包装状态和储存时长
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：定量参考产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_gate_output_records`
- 数量范围：暂定储存产出率估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.90
  - 上限：1.00
  - 单位：kg 合格籽粒 / kg 储存籽粒
  - 基准：等待批次记录前的宽泛储存质量产出范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 储存损失或腐败（`storage_loss`）

将质量损失和去向与合格籽粒分开记录。

- 选定流：储存损失或腐败的谷物籽粒
- 流属性/单位：Mass / kg
- 数量规则：在共同水分基准上用期初质量 + 投入 - 合格产出 - 有记录转移量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 声明交付门的合格籽粒
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_inventory_records`
- 数量范围：暂定储存损失筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg 损失 / kg 储存籽粒
  - 基准：等待库存记录前的宽泛储存损失校验范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

当熏蒸、能源或废物处理跨越前景边界时，报告储存相关排放。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 田间、收获、调制和储存 | 当田块、机械、批次或储存记录支持独立过程节点时，首先通过细分操作避免分配。 | `iso-14044-2006` |
| `allocation_grain_and_residue` | 合格籽粒和移出残余物 | 按声明去向处理返田残余物。当移出残余物或副产品与不可分过程共同产生时，采用明确声明的物理或经济分配并披露敏感性。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_screenings_and_rejects` | 筛下物、损坏籽粒和储存损失 | 将合格籽粒、筛下物、拒收物和损失作为有去向的独立流记录。没有记录返工或分配决定时，不得把拒收物分配给参考产出。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_substitution` | 残余物或副产品利用 | 只有在声明被替代产品、市场、路线和证据时才应用替代法；不得从通用残余物名称推断替代信用。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_input_records` | `other_cereal_crop_production` | seed for sowing | seed lot and receiving record | crop; cultivar; supplier; lot; treatment; mass; moisture; date; field | calibrated scale, invoice, supplier record, or farm log | kg | per seed lot | crop cycle | field or farm | sum by field and crop lot | scale calibration, invoice, supplier record |
| `cp_nutrient_input_records` | `other_cereal_crop_production` | N, P, K, and organic nutrients | purchase and application record | product; nutrient; product mass; nutrient content; date; field; method | invoice, nutrient analysis, application log, or applicator record | kg product and kg nutrient | per application | crop cycle | field or farm | sum by product and nutrient, then normalize to output | invoice, analysis, application log |
| `cp_irrigation_records` | `other_cereal_crop_production` | irrigation and withdrawal | meter or pumping record | source; meter; readings; volume; pumping energy; date; field | calibrated meter, pump log, invoice, or irrigation record | m3, kg, and energy unit | event or period | irrigation season | field and source | distinguish withdrawal, delivery, and consumption before summing | meter calibration, readings, invoice |
| `cp_crop_protection_records` | `other_cereal_crop_production` | crop protection | application record | product; active substance; formulation; mass; date; field; method | spray log, label, invoice, or applicator record | kg product or active substance | per application | crop cycle | field or farm | sum by product or active substance and normalize to output | label, log, applicator record |
| `cp_field_energy_records` | `other_cereal_crop_production` | field fuel and electricity | field-operation record | operation; machine; carrier; quantity; field; date | fuel log, invoice, telematics, or meter | L, kg, MJ, or kWh | per operation | crop cycle | field or farm | sum by operation and normalize to selected gate output | invoice, machine log, telematics |
| `cp_harvest_output_records` | `other_cereal_crop_production` | harvested and accepted grain | harvest record | field; date; gross grain; accepted grain; moisture; grade; residue; loss | calibrated scale, harvest ticket, moisture test, and dispatch record | kg and percent | harvest event | crop year | field and farm | reconcile gross, accepted, residue, and loss on common basis | scale calibration, ticket, moisture test |
| `cp_harvest_energy_records` | `other_cereal_harvest_delivery` | harvest fuel | machine or contractor record | machine; carrier; quantity; harvested mass; date; period | invoice, fuel log, telematics, or meter | L, kg, MJ, or kWh | event or period | crop cycle | field to hand-off | allocate by recorded harvested mass and operation | invoice, telematics, meter |
| `cp_residue_and_loss_records` | `other_cereal_harvest_delivery` | residue, damaged grain, and loss | residue/fate record | stream; mass; moisture; fate; destination; field; date | scale ticket, field log, transfer, sale, or disposal record | kg | event or campaign | crop cycle | field and hand-off | sum by stream and fate; do not merge with accepted grain | scale ticket, fate record, field log |
| `cp_emission_activity_records` | `other_cereal_harvest_delivery` | direct emissions activity data | nutrient, residue, and energy ledger | N input; residue; fuel; factor tier; receiving compartment; period | linked activity records and method calculation sheet | kg N, kg residue, L, MJ, or kWh | crop cycle or operation | crop year | field and hand-off | preserve factor selection and compartment in calculation output | linked records, factor declaration |
| `cp_conditioning_input_records` | `other_cereal_primary_conditioning` | conditioning input | line or batch record | batch; input mass; moisture; grade; date; source lot | calibrated scale and quality test | kg and percent | per batch | conditioning campaign | facility and line | sum batches and retain input identity | scale calibration, quality test |
| `cp_conditioning_energy_records` | `other_cereal_primary_conditioning` | electricity and heat | facility energy record | line; carrier; quantity; batch; period; input/output mass | meter, bill, equipment log, or fuel record | kWh, MJ, L, or kg | batch or campaign | conditioning campaign | facility and line | allocate to batch and normalize to accepted output | meter, bill, equipment log |
| `cp_conditioning_reject_records` | `other_cereal_primary_conditioning` | screenings, dust, and rejects | reject/fate record | batch; stream; mass; moisture; quality; fate | calibrated scale, reject log, dust record, or transfer record | kg and percent | batch or campaign | conditioning campaign | facility and line | reconcile input, accepted output, rejects, dust, and loss | scale, reject log, fate record |
| `cp_conditioned_output_records` | `other_cereal_primary_conditioning` | accepted conditioned grain | output and quality record | batch; mass; moisture; grade; cleaning status; gate | calibrated scale and quality test | kg and percent | per batch | conditioning campaign | facility and gate | sum accepted batches at declared basis | scale, quality test, dispatch record |
| `cp_storage_inventory_records` | `other_cereal_storage_gate` | storage input and loss | inventory reconciliation | lot; opening; closing; moisture; duration; losses; transfers; fate | inventory record, scale, storage log, or dispatch record | kg, percent, days | lot or period | declared storage duration | storage site | reconcile each lot on a common moisture basis | inventory record, scale, log |
| `cp_storage_energy_records` | `other_cereal_storage_gate` | storage electricity | meter or utility record | lot; carrier; quantity; date; duration; allocation basis | meter, bill, or equipment log | kWh or MJ | lot or period | storage duration | storage site | allocate by lot mass and duration unless dedicated meter exists | meter, bill, log |
| `cp_declared_gate_output_records` | `other_cereal_storage_gate` | final accepted grain | gate or dispatch record | lot; gate; date; mass; moisture; grade; packaging state | scale, weighbridge, quality record, and dispatch ticket | kg and percent | shipment or gate event | declared gate period | declared gate | sum accepted lots and preserve gate identity | scale, quality, dispatch record |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_output` | all foreground flows | 记录流数量 / 所选交付门的合格籽粒质量 * 1 kg 参考数量 | 适用协议记录和声明交付门产出 | 每 kg 参考籽粒的数量 | `mass-balance-identity` |
| `convert_moisture_basis` | 籽粒和残余物核对 | 干物质质量 = 原样质量 * (1 - 水分比例)；保留原样质量和实测水分 | 收获、调制、储存和残余物记录 | 共同比较质量基准 | `mass-balance-identity` |
| `calculate_nutrient_amounts` | 肥料投入 | 商品产品质量 * 声明养分比例；分别保留产品质量和养分质量 | `cp_nutrient_input_records` | kg N、kg P2O5 和 kg K2O 投入 | `mass-balance-identity` |
| `calculate_irrigation_withdrawal` | 灌溉 | 分别计算并报告按水源计量的取水量、输送量和有记录的消耗量 | `cp_irrigation_records`; 声明交付门产出 | 每参考产出的水量 | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_emissions` | 田间养分排放 | 对计入的养分投入使用所选 IPCC 层级和因子，适用时将 N2O-N 换算为 N2O，并披露因子和环境介质 | `cp_nutrient_input_records`; `cp_emission_activity_records` | 每参考产出的直接排放 | `ipcc-2019-managed-soils-n2o` |
| `reconcile_harvest_outputs` | 田间和收获 | 在共同水分基准上，合格籽粒 + 移出残余物 + 返田残余物 + 实测损失 = 收获产出；解释差额 | `cp_harvest_output_records`; `cp_residue_and_loss_records` | 收获质量平衡 | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | 初级调制 | 在共同水分基准上，合格籽粒 + 筛下物 + 粉尘 + 拒收物 + 实测损失 = 调制投入；解释差额 | `cp_conditioning_input_records`; `cp_conditioning_reject_records`; `cp_conditioned_output_records` | 调制产出率和损失 | `mass-balance-identity` |
| `allocate_storage_energy` | 储存 | 除非专用计量支持直接分配，否则根据批次质量和声明时长分配储存能源 | `cp_storage_energy_records`; `cp_storage_inventory_records` | 每参考产出的储存能源 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_residual_cereal_identity` | 产品身份 | 声明生物学作物及在结果有影响时的品种，并确认产品属于 CPC 01199 剩余项，而非已有专用 PCR 的具名谷物叶节点。 | 产品元数据、作物记录、合同或分类审查 |
| `dq_gate_and_moisture` | 参考流和产出 | 记录所选交付门、原样质量、水分基准，并记录每个核对流的干物质换算。 | 称量、水分测试、交付记录和计算记录 |
| `dq_temporal_coverage` | 田间生产和收获 | 覆盖声明作物周期和收获年度，并披露单年度、多年度平均或情景状态。 | 有日期的农场、收获和投入记录 |
| `dq_input_completeness` | 田间和调制 | 对种子、养分、灌溉、作物保护、土地、田间能源、收获能源、调制能源和直接排放进行量化或说明为零/排除。 | 台账、发票、日志、计量器和方法声明 |
| `dq_output_fate` | 残余物、拒收物和损失 | 记录每个非参考产出的质量基准、边界交叉、目的地和去向；未解决的重要去向会阻止最终确定。 | 称量、田间日志、处置、转移或销售记录 |
| `dq_quality_descriptor` | 籽粒状态 | 记录用途、水分、等级、清理状态和与所选交付门有关的其他质量描述，不自行设定通用接收限值。 | 质量测试、买方规格或现场记录 |
| `dq_uuid_identity` | 身份引用 | 核实每个固定 UUID 和接收环境介质；前景数据生成时将参数化 Flow Set 行解析为具体 UUID，不支持的身份保持未映射。 | 身份记录和审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_residual_category` | 产品身份 | 确认生物学作物已声明、属于 CPC 01199，且不是已有更具体 PCR 的具名谷物；适用时转用更窄 PCR。 | `iso-14044-2006` |
| `validation_reference_flow` | 参考流 | 确认在声明交付门上以 1 kg 质量为基准，并具备作物身份、用途、水分基准、质量状态、地理范围、作物年度和交付门限定信息。 | `mass-balance-identity` |
| `validation_process_completeness` | 过程图和清单 | 确认包含田间生产和收获，并根据声明交付门纳入或明确排除调制及储存。 | `fao-grain-postharvest-systems-1998` |
| `validation_nutrient_and_emission_accounting` | 养分和排放 | 确认商品肥料质量与养分质量分开，因子选择已声明，N2O-N 换算透明，相关氮路径已处理。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | 灌溉 | 确认取水、输送、消耗和排放相互区分，且水量没有重复计算。 | `fao-crop-evapotranspiration-56` |
| `validation_moisture_and_mass_balance` | 产出 | 确认收获、调制、储存、残余物、拒收物和损失的核对使用共同水分基准，且每个流都有去向。 | `mass-balance-identity` |
| `validation_allocation` | 共产品和残余物 | 确认首先考虑细分；声明任何分配方法；替代法具有证据支持的被替代产品；重要时报告敏感性。 | `iso-14044-2006` |
| `validation_uuid_review` | 身份引用 | 确认固定身份和接收环境介质；创建最终 TIDAS 交换前，为每个参数化 Flow Set 行解析具体 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当声明的生物学身份、剩余分类、用途、交付门、地理范围、年度、水分、质量状态和路线与数据集元数据一致时，用于下游谷物、食品、饲料、工业或 LCA 数据构建 |
| excluded_use | 有专用 PCR 的具名谷物；播种用种子；饲草；面粉、麦芽、淀粉、酒精、预制食品、饲料制造、零售、消费者使用；交付门不兼容或重要物料去向未解决的数据集 |
| required_metadata | 参考流；生物学作物和品种；CPC 01199 剩余项状态；用途；地理范围；作物周期和年度；种子来源；灌溉；养分和作物保护记录；水分基准；质量描述；收获和调制路线；声明交付门；残余物、拒收物和损失去向；分配；数据质量声明 |
| required_quality_disclosure | 原始记录覆盖；时间和地理代表性；水分和质量平衡处理；养分和排放因子；身份覆盖和未映射流披露；遗漏投入；分配和敏感性；模块清单结果 |
| update_trigger | 作物身份、分类范围、路线、交付门、水分或质量表达、施肥或作物保护实践、灌溉、收获或调制技术、储存时长、因子来源、UUID 绑定或证据状态发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-grain-postharvest-systems-1998` | official_guidance | FAO, *Agricultural engineering in development — Grain and post-harvest systems*, <https://www.fao.org/4/t0522e/T0522E03.htm> | 收获、干燥、清理、储存、损失和初级调制过程分解 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, *Crop evapotranspiration*, <https://www.fao.org/4/X0490E/X0490E00.htm> | 灌溉数据采集以及取水、输送和消耗的区分 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, <https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤 N2O 方法选择、活动数据和因子披露 |
| `iso-14044-2006` | standard | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, <https://www.iso.org/standard/38498.html> | 分配层级、系统边界、清单和质量披露 |
| `mass-balance-identity` | method_factor | 应用于 PCR 计算的质量守恒计算恒等式。 | 收获、调制、储存、水分换算和产出核对 |
