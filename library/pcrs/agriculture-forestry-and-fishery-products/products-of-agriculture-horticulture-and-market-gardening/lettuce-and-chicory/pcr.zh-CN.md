---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lettuce-and-chicory
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 待补充

## 1. 范围与适用性

本 PCR 覆盖莴苣和菊苣从种子或移栽建立、作物管理、收获、分级、可选清洗或冷却、初级包装，到指定农场或首个包装场所交接点的前景生产。只要声明生产路线和覆盖面积，露地与保护地种植均适用。覆盖作为鲜食产品销售的可销售莴苣或菊苣头、叶和叶菜束。种子生产、作为商品出售的育苗材料生产、加工或保藏产品、指定交接点之后的配送、零售、烹饪和消费均不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.lettuce-and-chicory |
| classification_refs | CPC 3.0:01214 Lettuce and chicory |
| covered_products | 在指定农场或首个包装场所交接点转移的新鲜、未加工莴苣和菊苣头、叶或叶菜束 |
| excluded_products | 作为种植材料出售的种子和移栽苗，以及加工、冷冻、干燥、发酵或烹饪产品和交接点后的配送 |
| representative_product | 经收获、分级并处于声明清洗状态的新鲜可销售莴苣或菊苣 |
| production_route | 种子或移栽建立、叶菜作物管理、收获、分级、可选清洗或冷却和农场交接 |
| market_state | 指定交接点的新鲜产品，散装或采用声明的初级包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 指定农场或首个包装场所交接点的可销售新鲜莴苣或菊苣 |
| How much | 1,000 kg |
| How well | 新鲜、未加工且可销售，并声明作物身份、品种或类型、头或叶状态、等级、修整状态和清洗状态 |
| How long or cycle | 一个声明的作物周期和收获批次，包括分配到可销售产出的全部建立与管理活动 |
| reference_flow_link | lettuce_chicory_farm_gate_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Lettuce and chicory `29988c8e-6b2f-4e7d-a24e-76ced274d2ce` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 作物身份（莴苣或菊苣）；品种或市场类型；生产地理范围；作物周期和生产年份；露地或保护地路线；头、叶或束状状态；等级和大小；修整状态；清洗状态；冷却；包装；声明的交接点 |
| 绑定模式 | `fixed` |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 收获产物和交接点产出 | Mass | kg | 将收获总质量、可销售产出、修剪物、拒收物和田间残余物作为不同数量记录。 |
| `area_and_cycle_normalization` | 作物建立和管理 | Area and mass | ha and kg | 在将投入和产出归一化到对应可销售产品之前，先记录每个田块或保护地单元及作物周期。 |
| `nutrient_equivalent_basis` | 肥料投入 | Mass | kg N, kg P2O5, or kg K2O | 记录产品质量和声明的养分浓度，并保留建模所用的养分当量基准。 |
| `irrigation_volume` | 灌溉和取水 | Volume | m3 | 计量或记录灌溉供水量，使其与降水分开，并区分水源取水量和作物获得的供水量。 |
| `multiple_harvest_reconciliation` | 多次收获 | Mass | kg | 只有在收获批次与同一田块或保护地单元、周期、等级和声明交接点关联后，才能汇总收获批次。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收种子或移栽材料的已整备田块、种植床或保护地单元，并披露先前土地利用和排除的建立前作业 |
| starting_condition_role | 声明的莴苣或菊苣作物周期的开始 |
| product_classification_scope | CPC 3.0:01214 下的新鲜莴苣和菊苣，直至指定农场或首个包装场所交接点 |
| recursive_input_rule | 外购莴苣或菊苣种子和移栽苗作为上游产品投入只链接一次，不在本 PCR 内重新创建另一个作物周期。 |
| upstream_dataset_requirement | 使用时，要求种子或移栽苗、肥料和改良剂、作物保护产品、灌溉水、能源、包装和废物处理的兼容上游数据集。 |
| disclosure | 声明作物身份和类型、品种、地理范围、周期日期、露地或保护地路线、面积、灌溉来源和方式、养分基准、作物保护方案、收获和等级、清洗、冷却、包装、拒收物去向及交接点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 作物建立和管理 | 纳入从建立到代表性收获批次的投入及直接田间或保护地种植排放，并将其分配到同一声明周期的可销售产出。 | `fao-vegetable-production-guidance` |
| `boundary_declared_gate` | 收获和处理 | 在指定农场或首个包装场所交接点结束；只有在交接前发生时，才纳入分级、修整、清洗、冷却和初级包装。 | `usda-leafy-greens-guidance` |
| `boundary_soil_emissions` | 管理土壤和残余物 | 对养分排放采用一种声明的方法，并避免重复计算肥料、改良剂和返田残余物中的氮。 | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | 田间残余物和拒收物 | 按去向记录田间残余物和收获后拒收物；未说明去向的拒收物或残余物不作为共产品。 | `fao-vegetable-production-guidance` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 莴苣和菊苣作物建立 | required | 每个代表性作物周期 | 前景建立 | 已建立公顷或保护地种植单元 |
| `crop_management` | 莴苣和菊苣作物管理 | required | 每个代表性作物周期 | 前景管理型生物生产 | 田块或保护地周期及作物产出 |
| `harvest_and_gate_handling` | 收获和交接点处理 | required | 每个代表性收获批次 | 前景收获、包装和交接 | 1,000 kg 可销售新鲜产出 |

### 过程：莴苣和菊苣作物建立（`crop_establishment`）

#### 输入

##### 产品流

###### 种子或移栽材料（`planting_material_input`）

记录进入指定田块或保护地单元的种子、穴盘苗或移栽苗。识别材料类型，避免将种植材料当作可销售莴苣或菊苣产出。

- 选定流：莴苣或菊苣种子、穴盘苗或移栽材料
- 流属性/单位：Number of items or mass / seed, plant, or kg
- 数量规则：按作物类型和田块或保护地单元计数或称量种植材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已建立公顷或保护地单元，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 数量范围：暂定种植材料筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：50
  - 单位：kg 种子或移栽材料/1,000 kg 可销售产出
  - 基准：待供应商和种植记录确认的首轮宽范围种植材料数量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 农业养分与肥料投入（`crop_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个已建立公顷或保护地单元，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：
- 数量范围：暂定建立期氮筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：250
  - 单位：kg N/ha 或保护地单元周期
  - 基准：待土壤测试和施用记录确认的首轮宽范围建立期投入
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定建立期磷筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：250
  - 单位：kg P2O5/ha 或保护地单元周期
  - 基准：待土壤测试和施用记录确认的首轮宽范围建立期投入
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定建立期钾筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：400
  - 单位：kg K2O/ha 或保护地单元周期
  - 基准：待土壤测试和施用记录确认的首轮宽范围建立期投入
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 莴苣和菊苣生产的土地占用（`land_occupation_input`）

记录声明作物周期和路线所占用的露地或保护地面积。

- 选定流：农业土地占用
- 流属性/单位：Area-time / m2*a
- 数量规则：记录占用面积和周期时长，并保留露地或保护地路线。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期和每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_establishment_records`
- 数量范围：土地面积筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：100
  - 上限：10,000
  - 单位：m2*a/1,000 kg 可销售产出
  - 基准：待田块和产量记录确认的首轮生产面积区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 已建立的莴苣或菊苣作物（`established_crop_output`）

该内部交接表示进入作物管理的已接受植株或面积，并与同一周期核对。

- 选定流：已建立的莴苣或菊苣作物
- 流属性/单位：Number of plants or area / plant or ha
- 数量规则：记录建立损失后的已接受植株或面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期和每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 数量范围：暂定已建立植株或面积筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：1,000
  - 上限：500,000
  - 单位：plants/ha 或保护地单元周期
  - 基准：待种植密度和验收记录确认的首轮宽范围已建立作物数量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 建立损失和废弃种植材料（`establishment_loss_output`）

当出苗失败、移栽苗死亡或废弃种植材料离开建立过程时，分别记录这些损失。

- 选定流：建立损失和废弃种植材料
- 流属性/单位：Mass / kg fresh material
- 数量规则：测量或估算损失，并声明返田、堆肥、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 数量范围：暂定建立损失筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：300
  - 单位：kg 新鲜材料/1,000 kg 可销售产出
  - 基准：待建立记录确认的首轮宽范围损失
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：莴苣和菊苣作物管理（`crop_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个田块或保护地单元周期和每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_management_records`
- 来源：
- 数量范围：暂定作物周期氮筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：500
  - 单位：kg N/ha 或保护地单元周期
  - 基准：待土壤测试和施用记录确认的首轮宽范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定作物周期磷筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：500
  - 单位：kg P2O5/ha 或保护地单元周期
  - 基准：待土壤测试和施用记录确认的首轮宽范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定作物周期钾筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：800
  - 单位：kg K2O/ha 或保护地单元周期
  - 基准：待土壤测试和施用记录确认的首轮宽范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物周期灌溉水（`crop_irrigation_water`）

按水源和灌溉技术记录作物获得的供水量，除非研究明确将其作为取水，否则排除降水。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 绑定：`parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `irrigation-water`
- 数量规则：按田块或保护地单元及作物周期计量或记录灌溉供水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个田块或保护地单元周期和每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_management_records`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：15,000
  - 单位：m3/ha 或保护地单元周期
  - 基准：取决于气候、土壤、作物路线和灌溉技术的首轮宽范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 田块和保护地单元用电（`crop_electricity_input`）

记录灌溉、通风、照明或其他作物管理用电，避免重复分配同一电表。

- 选定流：外购电力
- 流属性/单位：Energy / kWh
- 绑定：`parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set version: `0.2.0`
- Flow Set group: `electricity-supply`
- 数量规则：计量或将用电分配到代表性田块或保护地单元及周期。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每个田块或保护地单元周期和每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_management_records`
- 数量范围：暂定作物管理用电筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20,000
  - 单位：kWh/ha 或保护地单元周期
  - 基准：覆盖田间抽水和保护地设备的首轮宽范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物保护产品（`crop_protection_input`）

按有效成分或产品身份、施用率和处理面积记录作物保护产品。在兼容的固定身份得到确认前，身份仍作为明确的覆盖要求。

- 选定流：作物保护产品或有效成分
- 流属性/单位：Mass / kg product or kg active substance
- 数量规则：将采购、库存、施用量、处理面积和产品标签浓度与代表性周期核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个田块或保护地单元周期和每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_management_records`
- 数量范围：暂定作物保护筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg 产品/ha 或保护地单元周期
  - 基准：待产品和施用记录确认的首轮宽范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 灌溉水资源取水（`irrigation_withdrawal`）

当灌溉水源取水不包含在外购水产品投入中且对研究具有重要性时，记录该取水量。

- 选定流：灌溉用水资源取水
- 流属性/单位：Volume / m3
- 数量规则：记录水源取水，并在可测量时与灌溉供水及回流或损失核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个田块或保护地单元周期和每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_management_records`
- 数量范围：灌溉取水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15,000
  - 单位：m3/ha 或保护地单元周期
  - 基准：待水源计量记录确认的非负首轮区间
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 可收获的莴苣或菊苣（`harvest_ready_crop_output`）

记录最终分级和修整前的收获产品，并与田块或保护地单元周期及收获批次关联。

- 选定流：可收获的莴苣或菊苣
- 流属性/单位：Mass / kg fresh produce
- 数量规则：在交接点处理前核对总收获质量和已测量的田间损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个田块或保护地单元周期和每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_records`
- 数量范围：暂定收获产量筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：1,000
  - 上限：120,000
  - 单位：kg 新鲜产品/ha 或保护地单元周期
  - 基准：覆盖叶菜类型和路线的首轮宽范围产量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 田间残余物和未收获叶菜生物量（`field_residue_output`）

按干物质或鲜质量基准及去向记录叶片、根、未收获植株和其他作物残余物。

- 选定流：莴苣或菊苣田间残余物和未收获生物量
- 流属性/单位：Mass / kg fresh or dry matter
- 数量规则：测量或估算残余物，并声明翻埋、移除、饲料、堆肥、处理或处置去向。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个田块或保护地单元周期和每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_management_records`
- 数量范围：暂定田间残余物筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：30,000
  - 单位：kg 鲜生物量/ha 或保护地单元周期
  - 基准：待生物量和去向记录确认的首轮宽范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 管理土壤直接氧化亚氮（`direct_n2o_air_output`）

根据声明的氮投入和适用土壤或保护地栽培介质活动数据计算直接氧化亚氮。

- 选定流：氧化亚氮排入环境空气
- 流属性/单位：Mass / kg N2O
- 数量规则：采用声明的 IPCC 或可接受区域方法，保留 N2O-N 到 N2O 的换算，避免重复计算返田残余物氮。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1,000 kg 可销售产出；氮活动量仍是计算驱动量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_management_records`
- 数量范围：管理土壤氧化亚氮筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg N2O/ha 或保护地单元周期
  - 基准：待氮活动量和因子选择确认的非负首轮区间
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 释放到水体的硝酸盐（`nitrate_water_output`）

当排水、径流或排放记录及所选排放方法支持时，报告释放到水体的硝酸盐损失。

- 选定流：硝酸盐排入水体
- 流属性/单位：Mass / kg nitrate
- 数量规则：使用声明的方法计算或测量硝酸盐损失，并记录接收水体和迁移路径。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1,000 kg 可销售产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_crop_management_records`
- 数量范围：暂定硝酸盐损失筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg 硝酸盐/1,000 kg 可销售产出
  - 基准：待排水和养分平衡记录确认的非负首轮区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：收获和交接点处理（`harvest_and_gate_handling`）

#### 输入

##### 产品流

###### 可收获的莴苣或菊苣（`harvest_ready_crop_input`）

将作物管理交接物作为分级、修整、可选清洗或冷却及指定交接点的输入。

- 选定流：可收获的莴苣或菊苣
- 流属性/单位：Mass / kg fresh produce
- 数量规则：等于测量处理损失前对应的可收获产出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个收获批次和每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_records`
- 数量范围：暂定可收获投入筛选范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：1,000
  - 上限：120,000
  - 单位：kg 新鲜产品/ha 或保护地单元周期
  - 基准：覆盖叶菜类型和路线的首轮宽范围可收获投入区间
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗或冷却水（`handling_water_input`）

纳入指定交接点前使用的补充水，并在相关时分别记录循环水或排放。

- 选定流：清洗或冷却用工艺水
- 流属性/单位：Volume / m3
- 绑定：`parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set version: `0.2.0`
- Flow Set group: `process-water`
- 数量规则：计量补充水，并保留清洗或冷却排放的关联。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 数量范围：暂定处理用水筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：m3/1,000 kg 可销售产出
  - 基准：待生产线计量确认的首轮补充水区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级柔性包装（`flexible_packaging_input`）

按材料记录在声明交接点交付的袋、薄膜、套、带或其他柔性包装。

- 选定流：新鲜莴苣或菊苣柔性初级包装
- 流属性/单位：Mass / kg packaging
- 绑定：`parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `flexible-packaging`
- 数量规则：计量交付产品使用的包装，并单独识别可回收使用物品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 数量范围：暂定柔性包装筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg/1,000 kg 可销售产出
  - 基准：待材料和领用记录确认的首轮宽范围包装量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级刚性容器或周转箱（`rigid_packaging_input`）

记录托盘、纸箱、周转箱和其他刚性容器，包括回收周转和损失。

- 选定流：新鲜莴苣或菊苣刚性初级容器或周转箱
- 流属性/单位：Mass / kg packaging
- 绑定：`parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set version: `0.2.0`
- Flow Set group: `rigid-container-packaging`
- 数量规则：计量交付产品使用的容器，并分别记录可回收容器周转次数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 数量范围：暂定刚性包装筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：150
  - 单位：kg/1,000 kg 可销售产出
  - 基准：待材料和回收周转记录确认的首轮宽范围容器量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 清洗或分级废水（`handling_wastewater_output`）

当清洗或冷却发生在指定交接点前，记录离开处理过程的废水或受污染清洗水。

- 选定流：莴苣或菊苣处理废水
- 流属性/单位：Volume / m3
- 数量规则：计量排放，或由补充水、循环水、产品水分和保留损失计算，并声明处理路线。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_handling_records`
- 数量范围：暂定废水筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：m3/1,000 kg 可销售产出
  - 基准：待排放和处理记录确认的非负首轮区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 新鲜产品拒收物和修剪物（`reject_trim_output`）

按原因和去向记录拒收的菜头、叶、根和修剪物。除非有文件化的买方、产品规格、数量和去向证明其为共产品，否则按废物处理。

- 选定流：拒收和修剪的莴苣或菊苣材料
- 流属性/单位：Mass / kg fresh material
- 数量规则：测量拒收物和修剪物质量，并声明返田、饲料、堆肥、处理或处置去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 数量范围：暂定拒收和修剪筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：500
  - 单位：kg/1,000 kg 可销售产出
  - 基准：待批次记录确认的首轮分级和修剪区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 产品流

###### 指定交接点的新鲜可销售莴苣或菊苣（`lettuce_chicory_farm_gate_output`）

该参考产出是新鲜、未加工、经分级并在指定农场或首个包装场所交接点转移的莴苣或菊苣。

- 选定流：Lettuce and chicory `29988c8e-6b2f-4e7d-a24e-76ced274d2ce`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：扣除已测量田间、修整和拒收损失后的经核实称量质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 可销售新鲜产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_handling_records`
- 数量范围：暂定可销售产出核对范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：900
  - 上限：1,100
  - 单位：kg/1,000 kg 声明交接点产出
  - 基准：围绕声明参考数量的首轮宽范围称量和批次核对区间
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_cycle_inputs` | 作物建立和管理 | 将周期投入和直接排放分配给同一田块或保护地单元及声明周期的可销售产出；披露失败面积、补播和多次收获处理。 | `fao-vegetable-production-guidance` |
| `allocation_marketable_and_rejects` | 收获和处理 | 将可收获输入与可销售产出、拒收物、修剪物和测量质量变化核对；除非文件化的产品规格、买方、数量和去向证明其为共产品，否则拒收物按废物处理。 | `usda-leafy-greens-guidance` |
| `allocation_secondary_output` | 有意生产的次级产品 | 对文件化的次级产品报告数量和交接，并采用有依据的分配或替代方法；不假定默认的避免负荷或经济分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | 种植材料、面积、建立期养分和损失 | 种子或移栽苗采购、种植、田块图和验收记录 | field_or_unit_id; crop_type; cultivar; date; material_type; quantity; treated_area; accepted_area; failed_area; nutrient_product; product_mass; nutrient_concentration; loss_mass; loss_destination | 将种植和建立记录与每个田块或保护地单元核对 | seed; plant; kg; ha | 每次建立作业 | 完整建立窗口 | 每个代表性田块或保护地单元 | 按作物周期汇总并保留失败和补播 | 供应商发票、标签、田块图和验收记录 |
| `cp_crop_management_records` | `crop_management` | 养分、灌溉、用电、作物保护、取水、残余物和排放活动 | 施用、计量、灌溉、作物保护和田间日志记录 | field_or_unit_id; crop_type; cycle_id; area; date; product_identity; product_mass; nutrient_concentration; irrigation_volume; source_withdrawal; electricity; active_substance; treated_area; residue_mass; dry_matter; residue_destination; drainage; nitrate; method_version | 将全部活动记录与同一周期和路线核对 | kg; kg nutrient; m3; kWh; ha | 每次活动和周期结算 | 完整作物周期 | 每个代表性田块或保护地单元 | 按田块或单元周期汇总后再归一化产出 | 发票、标签、计量表、施用日志、分析和方法记录 |
| `cp_harvest_records` | `harvest_and_gate_handling` | 可收获产物和收获损失 | 收获票、批次日志和称量记录 | field_or_unit_id; cycle_id; lot_id; harvest_date; harvest_pass; gross_mass; field_loss; crop_type; grade; size; trim_state | 将每个收获批次与田块或保护地单元及周期关联 | kg; ha | 每个收获批次 | 完整收获批次 | 每个代表性田块或处理线 | 按周期汇总并保留作物类型和等级 | 校准称和收获票 |
| `cp_handling_records` | `harvest_and_gate_handling` | 水、包装、产出、废水、拒收物和修剪物 | 批次、称量、水表、包装、废水和去向记录 | lot_id; source_field_or_unit; crop_type; wash_water; cooling_water; packaging_material; packaging_mass; container_turns; marketable_mass; grade; trim_state; reject_mass; reject_reason; destination; wastewater_volume; gate_time | 在声明交接点保留批次质量和公用工程核对 | kg; m3; kWh; item | 每批次或班次 | 完整收获和包装期 | 每个代表性处理线 | 汇总前核对投入、产品、废水、拒收物、修剪物和包装 | 校准称、计量表、等级检验和去向收据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_equivalent` | 肥料投入 | 产品质量乘以有记录的养分比例，得到声明基准下的 kg N、P2O5 或 K2O。 | product mass; nutrient concentration | nutrient-equivalent input |  |
| `calc_cycle_normalization` | 作物周期投入和排放 | 将完整田块或保护地单元周期数量除以对应周期的可销售产出，再换算为每 1,000 kg 参考产品。 | cycle quantity; marketable output | normalized inventory amount |  |
| `calc_water_and_withdrawal` | 灌溉 | 将灌溉供水和水源取水分开保留；有计量时进行核对，并披露未计量损失。 | delivery meter; source meter; return or loss record | irrigation input and withdrawal | `fao-vegetable-production-guidance` |
| `calc_harvest_mass_balance` | 收获和交接点处理 | 总收获量加测量质量变化等于可销售产出、拒收物、修剪物、随废水损失和其他声明产出之和。 | gross mass; marketable mass; rejects; trims; water; mass change | reconciled output quantities | `usda-leafy-greens-guidance` |
| `calc_managed_soil_emissions` | 氮排放 | 对氮活动量应用声明的 IPCC 或可接受区域方程，保留 N2O-N 到 N2O 的换算且不重复计算。 | nitrogen activity; factors; soil or growing-medium qualifiers | direct and indirect nitrogen emissions | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留莴苣或菊苣身份、品种或市场类型、头或叶状态、等级、修整、清洗状态、包装、地理范围、周期和交接点。 | 产品规格、批次记录和交接声明 |
| `dq_cycle_linkage` | 建立和管理 | 将每项活动关联到一个田块或保护地单元及周期，并披露补播、失败面积、多次收获和路线变化。 | 田块图、周期登记和生产历史 |
| `dq_input_completeness` | 全部前景投入 | 保留养分基准、灌溉来源、能源覆盖、作物保护身份、包装材料及残余物或拒收物去向。 | 发票、标签、计量表、施用日志和去向收据 |
| `dq_mass_balance` | 收获和处理 | 在声明的不确定度内核对可收获输入、可销售产出、拒收物、修剪物、废水和测量质量变化。 | 校准称、计量表和批次核对 |
| `dq_method_transparency` | 计算和排放 | 记录方法版本、因子、归一化分母、排除项、暂定范围以及用审查证据替换估算的情况。 | 计算文件和审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考产品 | 在发布最终过程数据集前，解析兼容的莴苣或菊苣身份、质量属性、质量单位组、kg 和全部必需限定信息。 |  |
| `validation_cycle_handoffs` | 过程图 | 对每个代表性田块或保护地单元及周期，连接建立到作物管理，以及作物管理到收获处理。 |  |
| `validation_mass_balance` | 收获和处理 | 核对可收获输入、可销售产出、拒收物、修剪物、废水和其他声明损失。 |  |
| `validation_nutrient_and_emission_basis` | 管理投入和排放 | 保持 N、P2O5 和 K2O 的区分，记录排放因子和接收路径，避免返田残余物氮重复计算。 | `ipcc-2019-managed-soils` |
| `validation_parameterized_flows` | 参数化行 | 在发布最终过程数据集前，将每个 Flow Set 组解析为兼容的具体 UUID。 |  |
| `validation_unmapped_flows` | 未映射行 | 在获得兼容身份前，种子或移栽材料、作物保护产品、内部作物状态、拒收物及证据缺口的参考身份仍作为明确覆盖要求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 指定交接点新鲜莴苣和菊苣的前景农业生产数据集 |
| downstream_use | `secondary_dataset`；审查和发布后可作为 `background_dataset` |
| allowed_use | 作物身份、地理范围、路线、周期、产品状态和交接点兼容的新鲜莴苣或菊苣作物及供应链研究 |
| excluded_use | 种子或移栽苗生产、加工产品、交接点后的配送，或省略声明路线和作物周期条件的比较 |
| required_metadata | 作物身份；品种或市场类型；地理范围；面积；路线；周期日期；田块或保护地单元；灌溉；养分基准；作物保护；收获和等级；清洗或冷却；包装；残余物和拒收物去向；交接点 |
| required_quality_disclosure | 原始数据覆盖；称和计量表质量；周期关联；质量平衡；方法和因子版本；数据缺口；暂定范围；Flow Set 解析状态；未映射身份 |
| update_trigger | 经核实的产品或流身份、经审查的产量或投入证据、作物路线或产品规格变化、排放方法变化，或交接点做法变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-vegetable-production-guidance` | official_guidance | FAO, Good Agricultural Practices for greenhouse and field vegetable production, https://www.fao.org | 作物周期边界、田间记录、残余物处理和蔬菜生产路线 |
| `usda-leafy-greens-guidance` | official_guidance | U.S. FDA, Guidance for Industry: Guide to Minimize Microbial Food Safety Hazards of Fresh-cut Fruits and Vegetables, https://www.fda.gov | 新鲜叶菜处理、分级、清洗和声明交接点控制 |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | 管理土壤氮排放方法和 N2O 换算 |
