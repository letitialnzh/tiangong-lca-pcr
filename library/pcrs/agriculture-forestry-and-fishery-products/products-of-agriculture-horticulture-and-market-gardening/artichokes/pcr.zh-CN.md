---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.artichokes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
translation_status: aligned
---

# 洋蓟

## 1. 范围与适用性

本 PCR 涵盖鲜、未加工洋蓟花蕾的商业生产，从田间或设施栽培建植开始，经植株群体管理、灌溉、养分和植保投入、采收、分级、可选清洗或冷却、初级包装，至声明农场或包装场节点交接。声明生产路线和作物周期归属时，可用于一年生直播或移栽作物，以及多年生根冠或分株种植。排除洋蓟种子、根冠和苗圃生产、成熟开放的花朵、罐藏、冷冻、干燥、腌渍或熟制洋蓟、零售、消费者储存及食用。包装、清洗、冷却和购买的运输服务仅在声明交接节点前发生时纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.artichokes |
| classification_refs | CPC 3.0:01216 洋蓟；映射关系：exact |
| covered_products | 在声明农场或包装场节点交付的鲜、未加工洋蓟花蕾 |
| excluded_products | 洋蓟种子和种植材料、开放花朵、罐藏、冷冻、干燥、腌渍、熟制或其他加工洋蓟，以及下游零售或食用 |
| representative_product | 符合声明尺寸、成熟度、坚实度、修整、清洁度和等级要求的可销售鲜洋蓟花蕾 |
| production_route | 直播、移栽、根冠或分株建植；受管理的营养生长；灌溉、养分、杂草和害虫管理；花蕾采收；分级；可选清洗、冷却和初级包装 |
| market_state | 农场或包装场节点的鲜、未加工洋蓟花蕾，采用散装、成束、周转箱、纸箱或其他声明初级包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场或包装场节点的可销售鲜洋蓟花蕾 |
| How much | 1,000 kg |
| How well | 鲜、未加工，声明物种或品种组、花蕾成熟度、尺寸或等级、茎长、清洁度、修整、清洗和冷却状态及包装状态 |
| How long or cycle | 声明的一个一年生作物周期，或多年生植株群体的一个生产年度，包括归属于该周期的全部采收轮次 |
| reference_flow_link | fresh_artichokes_gate_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | Artichokes, production mix, at farm gate `5e964a73-63a6-458b-a013-9785e776c3b6` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产地理位置；一年生或多年生路线；栽培品种或品种组；种子、移栽苗、根冠或分株建植；种植或再生日期；采收日期和轮次；声明交接节点；花蕾尺寸、成熟度、坚实度和等级；茎和修整状态；灌溉水源和方法；养分基准；植保方案；清洗和冷却状态；包装状态；残余物和拒收物去向 |


构建前景数据包时，`Required qualifiers` 所列信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_artichoke_mass` | 可销售花蕾和采收记录 | 质量 | kg | 将花蕾总采收量、可销售鲜花蕾、不可销售花蕾、修整物、土壤或异物及田间残余物作为独立数量测量或计算。 |
| `crop_cycle_normalization` | 田间、设施栽培和多年生植株群体记录 | 面积和质量 | ha 和 kg | 按田块、种植畦、设施单元或多年生植株群体记录投入和采收，并归一化至同一声明作物周期或生产年度的可销售产出。 |
| `nutrient_product_basis` | 肥料、粪肥、堆肥和其他养分投入 | 产品及声明养分的质量 | kg 产品、kg N、kg P2O5 或 kg K2O | 保留购买产品质量，仅根据有记录的标签、供应商规格、养分计划或实验室结果换算至养分基准。 |
| `water_volume_basis` | 灌溉和采后清洗水 | 体积 | m3 | 使用计量记录或有文件支持的水量平衡，分别记录输送的作物灌溉水和采后清洗水。 |
| `perennial_stand_attribution` | 多年生洋蓟植株群体 | 面积时间和质量 | ha*a 和 kg | 将回剪、休眠、再生和采收投入归属于声明生产年度；披露植株群体年龄及建植负荷处理方式。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收洋蓟种子、移栽苗、根冠或分株材料的已整备种植畦或设施栽培单元，并披露先前土地用途及排除的基础设施工程 |
| starting_condition_role | 声明的一年生作物周期或多年生生产年度核算的起点 |
| product_classification_scope | CPC 3.0:01216 鲜洋蓟，至声明农场或包装场交接节点 |
| recursive_input_rule | 购买的洋蓟种子、移栽苗、根冠或分株材料作为上游产品投入仅链接一次；其自身生产不在本 PCR 范围内，除非提供独立上游数据集。 |
| upstream_dataset_requirement | 使用种植材料、肥料和改良剂、植保产品、灌溉水、能源、包装及购买的运输或处理服务时，须提供相应上游数据集。 |
| disclosure | 声明地理位置、一年生或多年生路线、植株群体年龄、建植材料、作物日期或生产年度、灌溉水源和方法、养分基准、植保方案、采收轮次、产量和拒收物核对、清洗和冷却、包装、残余物去向及交接地点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和植株群体管理 | 纳入产生声明鲜洋蓟产出的整畦、建植或多年生再生、作物管理、作物周期投入和采收准备；披露先前土地用途，排除无关基础设施建设。 | `ucanr-artichoke-production-1997`; `ucanr-artichoke-cultural-tips-2026` |
| `boundary_gate_conditioning` | 采收和初级调理 | 前景系统止于声明农场或包装场交接节点；在该节点之前发生的切割、分级、修整、清洗、冷却和初级包装均纳入。 | `ucanr-artichoke-cultural-tips-2026` |
| `boundary_soil_nitrogen` | 肥料、作物残余物和受管理土壤 | 使用一种声明方法及已记录的养分投入和残余物去向，估计适用的直接和间接氮排放；避免重复计算同一氮路径。 | `ipcc-2019-refinement-nitrogen` |
| `boundary_residue_fate` | 田间残余物、拒收物和修整物 | 分别记录还田、堆肥、饲料利用、处理或处置；没有证据证明生产性用途的材料仍作为残余物或废物流。 | `ucanr-artichoke-weed-management-2005`; `ucanr-artichoke-cultural-tips-2026` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | 纳入状态 | inclusion_condition | 建模角色 | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 洋蓟作物建植 | required | 每次所代表的播种、移栽、根冠种植或分株建植 | 前景作物建植 | 建成的田块、种植畦、设施单元或多年生植株群体 |
| `crop_management` | 洋蓟植株群体管理 | required | 每个所代表的一年生作物周期或多年生生产年度 | 前景受管理生物生产 | 管理面积及作物周期或生产年度采收 |
| `harvest_and_gate_preparation` | 洋蓟采收和交接准备 | required | 每个所代表的采收生产周期及声明交接节点 | 前景采收、调理、包装和交接 | 1,000 kg 可销售鲜洋蓟 |

### 过程：洋蓟作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 流：洋蓟种子、根冠、分株或移栽材料（`planting_material_input`）

记录进入声明田块或设施单元的种植材料，识别其为种子、移栽苗、根冠或分株材料。

- 选定流：洋蓟种子、根冠、分株或移栽材料
- 流属性/单位：有活力单位数量或质量 / seed、plant、crown、division 或 kg
- 数量规则：记录购买批次数量，以及各田块、种植畦、设施单元或多年生植株群体中种植的有活力数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 归属于同一作物周期或生产年度的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`
- 数量范围：种植材料数量筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,500
  - 上限：3,000
  - 单位：有活力植株、根冠或分株数量/ha
  - 基准：待场址记录替换的一年生或多年生建植宽泛筛选
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 农业养分与肥料投入（`crop_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 按实际采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 数量规则：每种实际产品仅采集一次数量并保留组成，计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个生成的产品交换解析到一个经核实的 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 归属于同一作物周期或生产年度的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`; `shinohara-artichoke-irrigation-nitrogen-2011`
- 数量范围：建植有机改良剂筛选
  - 范围角色：典型范围（`typical_range`）
  - 下限：0
  - 上限：15000
  - 单位：kg 产品/ha
  - 基准：种植前施入的堆肥或粪肥；以田间记录替换
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ucanr-artichoke-cultural-tips-2026`

- 数量范围：建植氮投入筛选
  - 范围角色：典型范围（`typical_range`）
  - 下限：0
  - 上限：80
  - 单位：kg N/ha
  - 基准：鲜洋蓟作物的种植前或种植时施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ucanr-artichoke-cultural-tips-2026`

- 数量范围：依土壤检测确定的磷投入筛选
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：125
  - 单位：kg P2O5/ha
  - 基准：待土壤检测和养分计划记录支持的建植期施用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 流：建植灌溉水（`establishment_irrigation_water`）

将整畦、根冠或移栽建植及植株群体早期建立的供水与后续作物灌溉分开记录。

- 选定流：灌溉水
- 流属性/单位：体积 / m3
- 数量规则：按田块、种植畦、设施单元或植株群体计量建植灌溉量，或采用水量平衡估计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 归属于同一作物周期或生产年度的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`ucanr-artichoke-production-1997`
- 数量范围：建植灌溉筛选
  - 范围角色：典型范围（`typical_range`）
  - 下限：200
  - 上限：600
  - 单位：m3/ha
  - 基准：冠层充分形成前建植期输送的灌溉水
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ucanr-artichoke-production-1997`

###### 流：建植移动机械燃料（`establishment_machinery_fuel`）

田间机械跨越前景边界时，记录整畦、播种、移栽、根冠放置或其他建植作业所用燃料。

- 选定流：移动机械燃料
- 流属性/单位：能量或质量 / MJ 或 kg
- 数量规则：采用燃料日志或设备活动估计，并分配至所代表的田块或植株群体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 归属于同一作物周期或生产年度的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`ucanr-artichoke-production-1997`
- 数量范围：建植燃料筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：50
  - 上限：600
  - 单位：MJ/ha
  - 基准：整畦和种植作业
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 流：洋蓟生产面积占用（`establishment_land_occupation`）

记录建植及声明作物周期或多年生生产年度占用的田间或设施面积及所代表时长。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / m2*a
- 数量规则：声明生产面积乘以所代表作物周期或生产年度时长。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_records`
- 来源：`ucanr-artichoke-production-1997`
- 数量范围：生产面积筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：10
  - 单位：ha，每 1,000 kg 可销售产出
  - 基准：待田间和采收记录支持的宽泛场址产量筛选
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 流：建成的洋蓟植株群体（`established_artichoke_stand`）

记录从建植交接至管理的一年生作物或多年生植株群体状态，不计为可销售洋蓟产出。

- 选定流：建成的洋蓟作物或多年生植株群体
- 流属性/单位：面积或数量 / ha 或有活力植株数量
- 数量规则：记录建植损失后仍处于生产中的面积或植株群体数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 归属于同一作物周期或生产年度的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_records`
- 数量范围：建成植株群体筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：85
  - 上限：100
  - 单位：占种植面积的百分比
  - 基准：建植后保留的植株群体
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流


###### 流：废弃种植材料（`discarded_planting_material`）

记录建植时未种植且有独立去向的废弃种植材料。

- 选定流：废弃洋蓟种植材料
- 流属性/单位：质量或数量 / kg 或有活力单位数量
- 数量规则：称量或计数废弃材料，与已种植材料分开记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 归属于同一作物周期或生产年度的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 数量范围：建植废弃筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：占购买种植材料的百分比
  - 基准：有记录的批次损失、损伤及种植核对
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）


##### 基本流

### 过程：洋蓟植株群体管理（`crop_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 按实际采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 数量规则：每种实际产品仅采集一次数量并保留组成，计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个生成的产品交换解析到一个经核实的 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`; `shinohara-artichoke-irrigation-nitrogen-2011`
- 数量范围：作物周期氮投入筛选
  - 范围角色：典型范围（`typical_range`）
  - 下限：0
  - 上限：180
  - 单位：kg N/ha
  - 基准：生长季及作物总氮施用筛选
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`shinohara-artichoke-irrigation-nitrogen-2011`

- 数量范围：生长季磷投入筛选
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：125
  - 单位：kg P2O5/ha
  - 基准：依土壤检测确定的生长季改良剂投入
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

- 数量范围：作物周期钾投入筛选
  - 范围角色：典型范围（`typical_range`）
  - 下限：0
  - 上限：450
  - 单位：kg K2O/ha
  - 基准：待土壤检测和农场记录支持的作物养分施用筛选
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`shinohara-artichoke-irrigation-nitrogen-2011`

###### 流：植株群体管理期灌溉水（`crop_irrigation_water`）

记录营养生长、花蕾发育、多年生再生及任何声明活跃生产期的灌溉事件。

- 选定流：灌溉水
- 流属性/单位：体积 / m3
- 数量规则：按田块、种植畦、设施单元或植株群体汇总计量或有水量平衡记录支持的灌溉供水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`ucanr-artichoke-production-1997`; `shinohara-artichoke-irrigation-nitrogen-2011`
- 数量范围：作物周期灌溉筛选
  - 范围角色：典型范围（`typical_range`）
  - 下限：1860
  - 上限：2480
  - 单位：m3/ha/year
  - 基准：所引加利福尼亚生产情境下的年度洋蓟生产灌溉；按当地降雨和路线调整
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`ucanr-artichoke-production-1997`

###### 流：植保产品（`crop_protection_input`）

按产品、有效成分、施用日期、对象和处理面积记录除草剂、杀虫剂、杀菌剂或其他植保产品。

- 选定流：植保产品
- 流属性/单位：质量 / kg 产品或 kg 有效成分
- 数量规则：按田块或植株群体保留供应商发票、处理日志和施用率；产品量和有效成分量分开记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`ucanr-artichoke-weed-management-2005`
- 数量范围：植保数量筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg 产品/ha
  - 基准：待施用记录及当地标签要求支持的宽泛产品用量筛选
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 流：植株群体管理期移动机械燃料（`crop_machinery_fuel`）

记录归属于声明周期或生产年度的耕作、除草、回剪、沟渠维护、水肥一体化支持和其他田间作业燃料。

- 选定流：移动机械燃料
- 流属性/单位：能量或质量 / MJ 或 kg
- 数量规则：按面积、运行小时或田间记录分配的燃料日志或设备活动估计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`ucanr-artichoke-weed-management-2005`
- 数量范围：植株群体管理燃料筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：200
  - 上限：1000
  - 单位：MJ/ha
  - 基准：耕作、除草、回剪和其他田间作业
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 流：灌溉和植株群体管理用电（`crop_electricity_input`）

抽水、水肥一体化、设施栽培或其他边界内植株群体管理设备用电跨越前景边界时，记录其电量。

- 选定流：中压电力或适用供电
- 流属性/单位：能量 / kWh
- 数量规则：使用计量记录，或按抽水小时、流量、面积或处理量分配电力，并披露分配基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`ucanr-artichoke-production-1997`
- 数量范围：植株群体管理用电筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kWh/ha
  - 基准：待计量记录支持的抽水及设施栽培设备用电
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 流：受管理洋蓟生产面积占用（`management_land_occupation`）

记录受主动管理的作物或多年生植株群体面积时间；若建植和管理用同一连续土地使用记录表示，不得重复计算面积。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / m2*a
- 数量规则：用管理面积乘以所代表活跃生产时长计算，并与建植土地占用核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_field_records`
- 来源：`ucanr-artichoke-production-1997`

#### 输出

##### 产品流

###### 流：可采收洋蓟花蕾（`harvest_ready_buds`）

记录从受管理生产交接至采收的成熟但未切下花蕾，包括采收轮次或日期及交接产品所用成熟度或等级状态。

- 选定流：可采收洋蓟花蕾
- 流属性/单位：质量 / kg 湿花蕾
- 数量规则：按田块、轮次和采收日期测量或计算可采收花蕾质量，再分出可销售产出和拒收物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_reconciliation`
- 来源：`ucanr-artichoke-cultural-tips-2026`

##### 废物流

###### 流：回剪或衰老产生的洋蓟作物残余物（`field_crop_residue`）

记录回剪物、衰老叶片、茎及其他田间残余物，识别还田、堆肥、移出或处置去向。

- 选定流：洋蓟作物残余物
- 流属性/单位：质量 / kg 湿残余物
- 数量规则：核对采前生物量、回剪或衰老记录、采收花蕾质量及残余物去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_reconciliation`
- 来源：`ucanr-artichoke-weed-management-2005`; `ucanr-artichoke-cultural-tips-2026`

###### 流：不可销售洋蓟花头和田间损失（`unmarketable_heads`）

记录因成熟度、损伤、尺寸、病害、霜冻或其他田间原因被拒收的花蕾，并与作物残余物分开记录去向。

- 选定流：不可销售洋蓟花头和田间损失
- 流属性/单位：质量 / kg 湿物料
- 数量规则：按采收轮次称量或计算拒收花头及田间损失，再与总采收量及可销售花蕾核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_reconciliation`
- 来源：`ucanr-artichoke-cultural-tips-2026`
- 数量范围：田间拒收筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：占总采收花蕾质量的百分比
  - 基准：待批次记录支持的质量和采收损失核对
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 流：受管理土壤直接氧化亚氮排放（`direct_n2o_air_output`）

根据适用氮投入及声明土壤、气候和方法参数，估计土壤直接氧化亚氮排放。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：质量 / kg N2O
- 数量规则：对适用氮投入应用选定的 IPCC 兼容因子，并在数据集中记录该因子及气候或土壤方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-refinement-nitrogen`
- 数量范围：直接氧化亚氮 QA 筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg N2O/ha
  - 基准：依方法确定的受管理土壤筛选范围；用声明因子计算替换
  - 基准类型：氮投入（`n_input`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 流：田间损失进入淡水的硝酸盐（`nitrate_freshwater_output`）

根据适用氮盈余及声明场址或方法因子计算硝酸盐损失，不得仅依据购买肥料量推断硝酸盐损失。

- 选定流：硝酸盐，排入淡水
- 流属性/单位：质量 / kg NO3-
- 数量规则：根据适用氮盈余和选定场址或方法因子计算，并记录氮路径及接收环境区室。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-refinement-nitrogen`

###### 流：受管理养分投入产生的氨排放（`ammonia_air_output`）

仅对选定方法覆盖且有施用条件记录的养分和土壤路径估计氨排放。

- 选定流：氨，排入空气
- 流属性/单位：质量 / kg NH3
- 数量规则：对适用肥料或改良剂投入应用声明方法因子，并披露施用和混入土壤的条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-refinement-nitrogen`

### 过程：洋蓟采收和交接准备（`harvest_and_gate_preparation`）

#### 输入

##### 产品流

###### 流：接收用于调理的可采收洋蓟花蕾（`conditioning_bud_input`）

记录在声明交接节点前接收用于切割、分级、修整、清洗、冷却或初级包装的可采收花蕾。

- 选定流：可采收洋蓟花蕾
- 流属性/单位：质量 / kg 湿花蕾
- 数量规则：将接收花蕾质量与田间采收单及调理批次记录核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`

###### 流：清洗或调理用水（`conditioning_water_input`）

仅在声明交接节点之前发生时，记录清洗、喷雾或其他初级调理用水。

- 选定流：工艺用水
- 流属性/单位：体积 / m3
- 数量规则：采用计量表、批次记录或调理线有记录的分配，并与田间灌溉分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`
- 数量范围：调理用水筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：3
  - 单位：m3，每 1,000 kg 交接输出
  - 基准：声明交接节点前的可选清洗或调理
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 流：冷却和初级包装用电（`conditioning_electricity_input`）

设备位于声明前景边界内时，记录冷却、清洗泵、分级和初级包装用电。

- 选定流：中压电力或适用供电
- 流属性/单位：能量 / kWh
- 数量规则：按处理量、运行时长或设备记录将计量电量分配至所代表的调理批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_energy_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`
- 数量范围：调理用电筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：25
  - 单位：kWh，每 1,000 kg 交接输出
  - 基准：可选冷却、抽水、分级和初级包装能源
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 流：可重复使用的周转箱或托盘包装（`primary_packaging_input`）

仅在周转箱、托盘、纸箱或其他初级包装属于声明交接状态时记录，保留材料、单位质量、重复使用和损失信息。

- 选定流：托盘和周转箱包装
- 流属性/单位：质量 / kg 包装材料
- 数量规则：统计包装件数，乘以有记录的单位质量，并核算重复使用次数或包装损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`
- 数量范围：初级包装筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg 包装材料，每 1,000 kg 交接输出
  - 基准：声明包装形式和重复使用实践
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 流：声明交接节点的鲜洋蓟（`fresh_artichokes_gate_output`）

记录农场或包装场交接节点符合声明等级和产品状态限定信息的可销售鲜洋蓟花蕾。

- 选定流：声明交接节点的鲜洋蓟
- 流属性/单位：质量 / kg

原参考状态单位注释：质量 / kg 湿洋蓟

原始输出测量与核对：采用最终称量及批次记录，将全部前景投入和损失归一化至 1,000 kg 该交接输出。

- 数量规则：1000 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：1,000 kg 声明交接节点的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_output_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`

##### 废物流



###### 流：清洗水和调理废水（`conditioning_wastewater`）

将离开调理过程的废水或用过的清洗水作为独立废物流记录，并记录处理、排放或回用。

- 选定流：洋蓟清洗水和废水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：根据批次水量平衡记录排放或回用数量；不得将产品保留水分计为废水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_postharvest_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`


###### 流：修整物和调理拒收物（`conditioning_rejects`）

记录分级和调理中移除的修整物、受损、患病、过熟或其他拒收材料，以及其去向。

- 选定流：洋蓟修整物和调理拒收物
- 流属性/单位：质量 / kg 湿物料
- 数量规则：按批次称量拒收物，并与接收花蕾及可销售交接输出核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`
- 数量范围：调理拒收筛选
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：占接收花蕾质量的百分比
  - 基准：分级、修整和质量损失核对
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）


###### 流：最终交接拒收物和搬运损失（`final_gate_rejects`）

记录调理后或发货时拒收的材料，其去向须与已记录的田间残余物和调理拒收物分开。

- 选定流：最终洋蓟拒收物和搬运损失
- 流属性/单位：质量 / kg 湿物料
- 数量规则：在发货批次中核对接收材料、交接输出、最终拒收物及实测搬运损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 声明交接节点的可销售鲜洋蓟。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gate_output_records`
- 来源：`ucanr-artichoke-cultural-tips-2026`

##### 基本流

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_single_crop_cycle` | 共用田块、种植畦、设施单元或多年生植株群体 | 根据记录的面积、植株群体、日期和可销售产出，将作物周期或生产年度投入归属于洋蓟；没有其他作物或年度自身记录时，不得分配至其他作物或年度。 | `ucanr-artichoke-production-1997` |
| `allocation_perennial_stand` | 多年生洋蓟建植、回剪、休眠和再生 | 披露植株群体年龄，并按有记录的归属规则在声明生产年度间分配建植或共用植株群体负荷；不得不加说明地将全部建植负荷归至一个采收年度。 | `ucanr-artichoke-cultural-tips-2026` |
| `allocation_residue_fate` | 作物残余物、田间损失、拒收物和修整物 | 仅在有接收方、数量和预期用途记录时才给予残余物或拒收物副产品抵扣；否则保留洋蓟生产负荷并报告去向。 | `ucanr-artichoke-weed-management-2005` |

## 8. 前景数据采集、计算与质量规则

在各采集协议中保留场址、批次、周期和阶段的原始数量及分母。先核对库存、损失、水分及副产品归属，再归一化：归一化交换量 = 应归属原始交换量 × 声明参考数量 / 同一边界和计量基准的合格交接产品数量。归一化前先完成多年生建植和共用作业归属。不得将内部转移量设为最终参考数量。“每声明的参考流”指第 3 节的数量、单位和产品状态；数据包必须声明实际路线及交接节点。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | 种植材料和建植投入 | 种植材料发票、批次记录及建植日志 | 批次；材料类型；有活力数量；田块或种植畦；日期；产品质量；养分改良剂 | 保留供应商记录及田间建植记录；原始汇总与归属：按生产周期求和，归一化至可销售产出 | seed、plant、crown、division、kg 产品、kg 养分 | 每个建植生产周期及每次施用 | 完整所代表作物周期或生产年度 | 每个田块、种植畦、设施单元或多年生植株群体 | 每声明的参考流 | 供应商批次追溯、施用记录及植株群体核对 |
| `cp_irrigation_records` | `crop_establishment`; `crop_management` | 作物灌溉 | 计量表、泵、控制器或水量平衡记录 | 水源；计量起止读数；事件日期；面积；方法；降雨调整 | 计量读数或有记录的水量平衡计算；原始汇总与归属：按周期、年度和水源汇总灌溉供水 | m3 | 每次事件或计量期间 | 完整所代表作物周期或生产年度 | 每个田块、种植畦、设施单元或植株群体 | 每声明的参考流 | 校准计量表或有记录的平衡计算输入 |
| `cp_field_energy_records` | `crop_establishment`; `crop_management` | 移动机械燃料和田间用电 | 燃料发票、设备活动日志及电表 | 燃料或电力；设备；作业；田块；日期；分配基准 | 供应商记录加设备或计量日志；原始汇总与归属：按面积、小时、流量或处理量分配共用作业 | L、kg、MJ 或 kWh | 每次加油、作业或计量期间 | 完整所代表作物周期或生产年度 | 每个洋蓟生产单元 | 每声明的参考流 | 发票、设备日志、计量记录及分配计算 |
| `cp_nutrient_records` | `crop_establishment`; `crop_management` | 养分投入和氮基准 | 养分计划、供应商发票及施用日志 | 产品；养分浓度；日期；面积；数量；方法；土壤检测 | 将产品记录与田间施用记录核对；原始汇总与归属：按周期或年度及声明养分基准汇总养分质量 | kg 产品和 kg 养分 | 每次施用 | 完整所代表作物周期或生产年度 | 每个洋蓟生产单元 | 每声明的参考流 | 土壤检测、标签或供应商规格及施用日志 |
| `cp_crop_protection_records` | `crop_management` | 植保产品 | 处理日志和供应商记录 | 产品；有效成分；施用率；面积；日期；对象；设备 | 记录每次施用及产品批次；原始汇总与归属：按产品、有效成分及周期或年度求和 | kg 产品或 kg 有效成分 | 每次施用 | 完整所代表作物周期或生产年度 | 每个洋蓟生产单元 | 每声明的参考流 | 施用日志和产品标签 |
| `cp_field_records` | `crop_establishment`; `crop_management` | 土地占用、面积及植株群体归属 | 田块、种植畦、设施单元或多年生植株群体登记 | 面积；单元；土地用途；作物日期；植株群体年龄；种植畦标识；保护设施 | 根据生产登记核实面积、日期和植株群体年龄；原始汇总与归属：计算面积时间，并按声明规则分配共用植株群体负荷 | ha、m2、天和年 | 每个作物周期或生产年度 | 完整所代表周期或年度 | 每个洋蓟田块、种植畦、设施单元或植株群体 | 每声明的参考流 | 田块图、登记、日期及植株群体证据 |
| `cp_harvest_reconciliation` | `crop_management`; `harvest_and_gate_preparation` | 采收、田间残余物及田间损失 | 采收单、称量记录及残余物或损失记录 | 田块；轮次；日期；总质量；可销售质量；残余物；损失；去向 | 每次采收称量或采用有记录的批次核对；原始汇总与归属：核对总采收、可销售花蕾、拒收物、残余物及损失 | kg 湿物料 | 每轮采收或每批次 | 完整所代表采收生产周期 | 每个洋蓟田块、种植畦或植株群体 | 每声明的参考流 | 称量记录、批次单及去向记录 |
| `cp_postharvest_records` | `harvest_and_gate_preparation` | 清洗、废水、拒收物和包装 | 调理批次及公用工程记录 | 接收质量；清洗水；排放；修整物；包装；批次；日期；去向 | 批次记录加计量及包装分配；原始汇总与归属：按批次汇总，归一化至可销售交接输出 | kg、m3、kWh 及包装单位 | 每批次或计量期间 | 完整所代表采收生产周期 | 每条准备线或每个包装场 | 每声明的参考流 | 计量记录、批次表及废物或处理收据 |
| `cp_postharvest_energy_records` | `harvest_and_gate_preparation` | 冷却、分级、清洗和包装用电 | 电表及设备处理量记录 | 计量期间；生产线；kWh；处理量；冷却时长；批次 | 按处理量或运行时长分配计量电量；原始汇总与归属：按处理量分配共用电力，并与批次输出核对 | kWh | 每个计量期间或批次 | 完整所代表采收生产周期 | 每条边界内准备线 | 每声明的参考流 | 计量数据和分配计算 |
| `cp_packaging_records` | `harvest_and_gate_preparation` | 初级包装 | 包装规格、物料清单及数量记录 | 材料；单位质量；件数；重复使用状态；批次；输出质量 | 包装件数和规格核对；原始汇总与归属：汇总每交接输出的包装材料，并披露重复使用 | kg 材料及件数 | 每个包装批或生产批 | 完整所代表采收生产周期 | 每条准备线 | 每声明的参考流 | 供应商规格、数量表及重复使用声明 |
| `cp_gate_output_records` | `harvest_and_gate_preparation` | 可销售产出和最终拒收物 | 发货称量、批次记录及拒收记录 | 批次；日期；交接节点；包装后质量；等级；拒收物；去向；交接状态 | 最终称量和批次核对；原始汇总与归属：汇总可销售产出及最终拒收流，归一化至 1,000 kg | kg 湿洋蓟 | 每个发货批次 | 完整所代表采收生产周期 | 声明交接节点 | 每声明的参考流 | 校准秤或批次记录及等级记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_nutrient_mass` | 肥料、粪肥、堆肥和改良剂行 | 产品质量乘以有记录的养分分数；保留原产品质量及养分基准。 | 产品发票；养分浓度；施用记录 | 按周期或年度记录的 kg N、kg P2O5 或 kg K2O | `ucanr-artichoke-cultural-tips-2026` |
| `calc_crop_cycle_normalization` | 全部作物周期和生产年度投入 | 作物周期或生产年度数量除以可销售鲜洋蓟质量，再乘以 1,000 kg。 | 投入记录；可销售交接输出 | 每 1,000 kg 产出的归一化数量 |  |
| `calc_perennial_attribution` | 多年生植株群体建植、回剪和再生 | 按有记录的植株群体年龄或生产年度归属规则分配共用投入，再将各年度与其可销售产出核对。 | 植株群体登记；日期；投入记录；年度产出 | 生产年度数量 | `ucanr-artichoke-cultural-tips-2026` |
| `calc_area_time` | 土地占用 | 生产面积乘以所代表作物周期或生产年度时长；披露设施面积的处理方式。 | 面积登记；作物或生产日期 | 面积时间数量 | `ucanr-artichoke-production-1997` |
| `calc_nitrogen_emission` | 土壤直接氧化亚氮和氨排放 | 对适用养分投入和声明土壤或气候方法应用选定 IPCC 兼容因子，并在数据集中记录因子。 | 养分记录；方法选择；土壤或气候参数 | 排放的 kg N2O 或 kg NH3 | `ipcc-2019-refinement-nitrogen` |
| `calc_nitrate_loss` | 硝酸盐进入淡水 | 根据适用氮盈余及选定场址或方法因子计算；不得仅依据购买量推断损失。 | 养分记录；盈余计算；因子 | 排放的 kg NO3- | `ipcc-2019-refinement-nitrogen` |
| `calc_gate_mass_balance` | 采收和交接准备 | 在测量不确定度内，接收花蕾质量等于可销售交接输出加田间或调理拒收物、残余物、废水相关固体及有记录的搬运损失。 | 采收单；调理记录；发货及拒收记录 | 核对后的质量平衡 | `ucanr-artichoke-cultural-tips-2026` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_identity` | 全部流和产品记录 | 声明洋蓟形态、品种组、一年生或多年生路线、适用时的植株群体年龄、交接节点、花蕾成熟度和等级、清洗或冷却状态及包装状态；需要时，在构建前景数据集时解析平台身份。 | 批次记录、产品描述及参考流限定信息 |
| `quality_measurement` | 投入和输出 | 优先使用校准计量表、秤、供应商发票、养分计划及施用日志；无法直接测量时，记录估计和分配方法。 | 计量校准、称量记录、发票或计算表 |
| `quality_temporal` | 作物周期或生产年度清单 | 覆盖所代表的完整建植、活跃管理、适用时的回剪或休眠、采收生产周期及交接准备期间。 | 建植日期、施用日志、灌溉记录、采收单及发货记录 |
| `quality_completeness` | 作物周期或生产年度平衡 | 核对种植材料、养分、灌溉、能源、植保、总花蕾、可销售产出、残余物、拒收物、废水和包装流。 | 作物周期或生产年度投入及质量核对 |
| `quality_disclosure` | 数据集元数据 | 披露一年生或多年生路线、植株群体年龄、灌溉水源、养分基准、植保产品、采收轮次、清洗、冷却、包装及残余物或拒收物去向。 | 数据集元数据和支持记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | 参考流和交接输出 | 声明参考输出必须是声明交接节点的可销售鲜洋蓟花蕾，质量单位为 kg；开放花朵、冷冻、罐藏、熟制或零售产品不在本 PCR 范围内。 | `ucanr-artichoke-cultural-tips-2026` |
| `validate_crop_cycle_dates` | 建植、管理、采收和交接准备 | 建植、施用、灌溉、回剪或休眠、采收轮次、调理和交接输出必须发生于声明作物周期或生产年度内，或明确归属于该周期或年度。 | `ucanr-artichoke-production-1997`; `ucanr-artichoke-cultural-tips-2026` |
| `validate_nutrient_basis` | 养分投入和排放 | 须有产品质量、养分浓度、养分基准及排放计算方法，且内部一致；不得将产品质量和养分质量视为同一交换重复计入。 | `ucanr-artichoke-cultural-tips-2026`; `ipcc-2019-refinement-nitrogen` |
| `validate_mass_balance` | 采收和交接准备 | 在声明测量不确定度内，总采收及接收质量须与可销售产出、拒收物、残余物、废水相关固体及损失核对。 | `ucanr-artichoke-cultural-tips-2026` |
| `validate_flow_identity_resolution` | 参数化行 | 按具体流 UUID、物理状态、属性和单位核实每项实际交换；无法确认时保留明确未解决身份。 |  |
| `validate_qualifiers` | 参考流和数据集元数据 | 必需限定信息须齐全，包括一年生或多年生路线、适用时的植株群体年龄、花蕾成熟度和等级、采收轮次、交接节点、清洗、冷却、包装及残余物或拒收物去向。 | `ucanr-artichoke-cultural-tips-2026` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场或包装场交接节点鲜洋蓟的前景农业生产数据集 |
| downstream_use | 鲜洋蓟产品系统使用 secondary_dataset；仅当提供方明确发布具有规定元数据、代表区域或市场平均的数据集时使用 background_dataset |
| allowed_use | 在声明地理位置和产品状态内，用于产品比较研究、作物周期或生产年度清单建模、农场或包装场改进及声明鲜洋蓟供应链评估 |
| excluded_use | 罐藏、冷冻、干燥、腌渍、熟制、零售、食用、种子生产或未限定蔬菜替代；不得在未披露情景时跨一年生和多年生路线外推 |
| required_metadata | 产品形态；品种组；一年生或多年生路线；植株群体年龄；地理位置；日期或生产年度；采收轮次；交接节点；产量；灌溉水源和数量；养分基准；植保方案；清洗和冷却；包装；残余物及拒收物去向 |
| required_quality_disclosure | 时间覆盖、场址范围、实测与计算值区分、植株群体归属和分配规则、质量平衡结果、平台身份解析状态，以及全部须由前景记录替换的暂定估计 |
| update_trigger | 作物路线、植株群体年龄、灌溉方法、养分方案、植保方案、采收形式、清洗或冷却线、包装形式、交接节点定义变化，或影响重要数量及边界规则的证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ucanr-artichoke-production-1997` | literature | University of California Agriculture and Natural Resources, *Artichoke Production in California*, ANR Publication 7221, https://my.ucanr.edu/repository/a/?a=54030 | 生产路线、多年生和一年生管理、灌溉及田间边界背景 |
| `ucanr-artichoke-cultural-tips-2026` | official_guidance | UC Statewide IPM Program, *Cultural Tips for Growing Artichoke*, https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-artichoke/ | 建植、养分实践、灌溉原则、采收成熟度、产品限定信息及交接前调理背景 |
| `ucanr-artichoke-weed-management-2005` | official_guidance | UC Statewide IPM Program, *Agriculture: Artichoke Pest Management Guidelines — Integrated Weed Management*, https://ipm.ucanr.edu/agriculture/artichoke/integrated-weed-management/ | 一年生和多年生植株群体管理、杂草防控、回剪、残余物及植保背景 |
| `shinohara-artichoke-irrigation-nitrogen-2011` | literature | Shinohara, Agehara, Yoo, and Leskovar, *Irrigation and Nitrogen Management of Artichoke: Yield, Head Quality, and Phenolic Content*, HortScience 46(3), 377–386, https://doi.org/10.21273/HORTSCI.46.3.377 | 灌溉和氮处理范围及产量与质量关系 |
| `ipcc-2019-refinement-nitrogen` | method_factor | IPCC, *2019 Refinement to the 2006 IPCC Guidelines for National Greenhouse Gas Inventories*, https://www.ipcc.ch/report/2019-refinement-to-the-2006-ipcc-guidelines-for-national-greenhouse-gas-inventories/ | 受管理土壤氮排放方法及计算规则 |
