---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-green-leguminous-vegetables
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 其他绿色豆科蔬菜

## 1. 范围与适用性

本 PCR 指导归属于 CPC 01249 的鲜、完整、未成熟绿色豆科蔬菜前景数据包构建。涵盖露地或设施栽培的可销售豆荚或青嫩种子，包括声明分类和产品事实符合该 CPC 叶级类别时的鲜鹰嘴豆、扁豆和瓜尔豆。路线可采用单次采收或多次采摘，并可包括声明交接节点前的分选、清洗、冷却、初级包装及其他调理。

排除 CPC 01241 绿色菜豆、CPC 01242 青豌豆和 CPC 01243 绿色蚕豆及马豆，即使其生产路线相似。干燥或成熟豆类、种子生产、芽菜、加工、罐藏、冷冻、腌制、发酵、干燥、熟制、切分、预制、零售、消费者储存和使用不在默认范围内。苗圃生产、耐用基础设施、机械制造、土地利用变化及交接节点后运输，除非单独归属并披露，否则排除。次品、田间残余物、清洗水、废水、包装废物和其他损失须保留在前景核算中，直至记录去向或交接。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-green-leguminous-vegetables` |
| classification_refs | CPC 3.0 `01249`，其他绿色豆科蔬菜；映射关系：exact |
| covered_products | 归属于 CPC 01249 的鲜、完整、未成熟豆科蔬菜豆荚或青嫩种子，符合声明物种、成熟度、等级、水分和包装状态 |
| excluded_products | CPC 01241 绿色菜豆；CPC 01242 青豌豆；CPC 01243 绿色蚕豆和马豆；干燥或成熟豆类；种子、芽菜、加工、保藏、冷冻、干燥、熟制、切分、预制、零售和消费产品；资本品；土地利用变化；交接节点后服务 |
| representative_product | 符合声明物种或品种组、成熟度、尺寸、颜色、嫩度、缺陷容许限和等级的可销售鲜其他绿色豆科蔬菜 |
| production_route | 直播或移栽栽培、整畦、灌溉、养分或改良剂管理、植保、一次或多次未成熟期采收、可选分选、清洗、冷却、初级包装及声明节点交接 |
| market_state | 声明农场或包装场交接节点的鲜、完整、未加工绿色豆科蔬菜，采用散装或声明初级包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明农场或包装场交接节点归属于 CPC 01249 的可销售鲜、完整、未成熟绿色豆科蔬菜 |
| How much | 1,000 kg |
| How well | 鲜、完整、可食用未成熟豆荚或青嫩种子，声明物种或品种组、生产地理位置、成熟度、尺寸、颜色、嫩度、等级、缺陷容许限、水分状态及包装状态 |
| How long or cycle | 声明的一个作物周期和完整采收生产周期；归一化前核对归属于同一次种植的全部采摘轮次 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1000 |
| 参考产品流 | Other green leguminous vegetables, fresh, whole, at farm gate or pack-house gate `<>` |
| 参考流属性 | 质量 `<93a60a56-a3c8-11da-a746-0800200b9a66>` |
| 参考单位组 | 质量单位组 `<93a60a57-a4c8-11da-a746-0800200c9a66>` |
| 参考单位 | kg |
| 必需限定信息 | 物种或品种组；CPC 归属及对绿色菜豆和青豌豆的排除核查；生产地理位置；露地或设施路线；直播或移栽路线；种植和采收日期；采摘轮次；成熟度、尺寸、颜色、嫩度、等级和缺陷标准；灌溉或雨养状态；实际施用的肥料或土壤改良剂产品及有记录的养分基准；植保方案；清洗、冷却和包装状态；残余物、次品、拒收物和废水去向；声明交接节点 |

绑定模式：`fixed`

在主代理核实兼容平台流之前，参考产品身份仍是待满足的语义要求。不得仅为填充身份字段而替换为相近的绿色菜豆或青豌豆流。必需参考属性为质量，参考单位为 kg；主代理在过程图完成后解析 UUID 支持对象。

构建前景数据包时，`Required qualifiers` 所列信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息时，该数据包的参考流定义不完整。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_green_legume_mass` | 可销售产品、降级产品、拒收物、残余物和损失 | 质量 | kg | 分别称量可销售、降级、拒收、田间损失、搬运损失及残余物流，并在换算至 1,000 kg 参考输出前核对。 |
| `crop_cycle_normalization` | 田间和设施栽培记录 | 面积和质量 | ha 和 kg | 按田块、种植畦或设施单元记录投入及采摘轮次，归一化至同一声明作物周期的可销售产出。 |
| `fertilizer_product_and_nutrient_basis` | 肥料和土壤改良剂投入 | 产品和养分质量 | kg 产品及声明养分单位 | 实际施用时记录产品名、产品质量、适用时的干物质，以及有记录的 N、P、K 或其他养分基准。不得要求未使用的产品类别，不得重复计算复合产品。 |
| `water_delivery_basis` | 灌溉、水肥一体化载水、清洗及水源取水 | 体积 | m3 | 分别记录作物灌溉、水肥一体化载水、采后清洗水和自然资源取水，披露计量或水量平衡基准。 |
| `area_time_basis` | 露地种植畦和设施单元 | 面积时间 | ha*a | 记录占用生产面积及作物占用期间；纳入耐用结构和设备时须单独归属。 |
| `harvest_grade_reconciliation` | 重复采收、分级和包装 | 质量和声明等级 | kg 和声明分数 | 保留各采摘轮次、总采收质量、合格质量、降级产品、拒收物和损失，以便重现声明等级及可销售产出。 |
| `postharvest_mass_change` | 清洗、冷却、分级和包装 | 质量和水分 | kg 和声明分数 | 将实测除土、吸水、冷却损失、皮重和包装损失与采收作物质量分开保留。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 为声明其他绿色豆科蔬菜作物周期接收种子或种植材料的已整备田畦或设施栽培单元，并披露先前土地用途及排除的基础设施工程 |
| starting_condition_role | 声明作物周期和前景投入核算的起点 |
| product_classification_scope | CPC 3.0 `01249`，其他绿色豆科蔬菜，至声明农场或包装场交接节点 |
| recursive_input_rule | 按接收交接状态记录种子、移栽苗或其他种植材料并链接上游数据集，不在本 PCR 内重新构建其自身生产。 |
| upstream_dataset_requirement | 种植材料、肥料和土壤改良剂、植保产品、供水、燃料、电力、包装、购买的运输及废物处理服务跨越边界时，使用相应上游数据集。 |
| disclosure | 声明物种或品种组、CPC 边界核查、地理位置、路线、种植密度、作物周期日期、灌溉水源和方法、肥料或土壤改良剂产品及养分基准、植保方案、采摘轮次、可销售和降级产出、残余物、清洗和冷却、包装、废物去向及声明交接节点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 建植和栽培 | 纳入归属于声明作物周期的整畦、种植、作物管理、灌溉、肥料或土壤改良剂、植保及作物直接排放；披露先前土地用途，排除无关基础设施建设。 | `fao-good-agricultural-practices` |
| `boundary_cpc_exclusion` | 产品身份和参考流 | 确认所代表产品属于 CPC 01249，且不是 CPC 01241 绿色菜豆或 CPC 01242 青豌豆。通过产品事实和审查解决歧义，不得为消除歧义而改变产品边界。 | `fao-good-agricultural-practices`; `iso-14044-2006` |
| `boundary_repeated_picking` | 采收轮次 | 将同一次种植的各采摘轮次归属于同一作物周期，归一化前核对可销售产品、降级产品、拒收物、田间损失和残余物。 | `codex-fresh-produce-hygiene`; `iso-14044-2006` |
| `boundary_gate_conditioning` | 分选、清洗、冷却、包装及交接节点前运输 | 默认前景边界止于声明农场或包装场交接节点；调理及交接节点前运输仅在该节点之前发生时纳入。 | `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling` |
| `boundary_residue_fate` | 作物残余物、次品、废水和包装废物 | 对各流记录还田、堆肥、饲料利用、处理、运输、回收或处置。没有接收方、预期用途、质量及交接记录时，不得分配副产品抵扣。 | `iso-14044-2006`; `codex-fresh-produce-hygiene` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | 纳入状态 | inclusion_condition | 建模角色 | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_establishment` | 其他绿色豆科蔬菜作物建植 | required | 每次所代表播种、种植、种植畦或设施栽培单元 | 前景作物建植 | 种植面积、种植材料及作物周期日期 |
| `crop_management` | 其他绿色豆科蔬菜作物管理 | required | 每个所代表作物周期 | 前景受管理生物生产 | 管理面积、水、肥料或改良剂、植保及完整采收生产周期 |
| `harvest_and_field_sorting` | 采收和田间分选 | required | 每个所代表采收生产周期 | 前景采收和初次分级 | 1,000 kg 可销售鲜产出及经核对的采收流 |
| `conditioning_and_dispatch` | 调理和发货 | conditional | 声明交接节点之前发生清洗、冷却、包装、储存或运输时 | 前景调理和交接 | 1,000 kg 声明交接节点的可销售产品 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：其他绿色豆科蔬菜作物建植（`crop_establishment`）

#### 输入

##### 产品流

###### 种子或种植材料（`planting_material_input`）

记录进入各声明田畦或设施单元的种子、移栽苗或其他种植材料，识别物种或品种组、供应商批次、种植日期和种植面积。

- 选定流：绿色豆科蔬菜生产所用种子、移栽苗或其他种植材料
- 流属性/单位：质量或有活力数量 / kg、seed、plant 或声明数量单位
- 数量规则：按田块、种植畦或设施单元记录供应商批次数量及种植的有活力种子或种植材料数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：种植材料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：25
  - 单位：kg 种子或声明种植材料，每 1,000 kg 产出
  - 基准：声明种植面积及作物周期产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 建植灌溉水（`establishment_irrigation_water`）

按水源和生产单元记录整畦、出苗或移栽建植用水；除非水量平衡方法明确纳入，否则不记录降雨。

- 选定流：输送至作物的灌溉水
- 流属性/单位：体积 / m3
- 数量规则：汇总建植期计量或有水量平衡记录支持的供水，保留水源和施用方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：建植灌溉筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：350
  - 单位：m3/ha
  - 基准：从播种或移栽至植株群体均匀建立的建植期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 绿色豆科蔬菜生产面积占用（`crop_land_occupation`）

记录声明种植生产周期内田畦或设施单元占用的生产面积和时间。

- 选定流：农业土地占用
- 流属性/单位：面积时间 / ha*a
- 数量规则：用声明生产面积乘以作物占用时长，说明设施结构是排除还是单独归属。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_area_cycle_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：面积产出筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：1.0
  - 单位：ha，每 1,000 kg 产出
  - 基准：声明作物面积及可销售作物周期产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：其他绿色豆科蔬菜作物管理（`crop_management`）

#### 输入

##### 产品流

###### 生产灌溉水（`production_irrigation_water`）

记录建植后输送的灌溉水和水肥一体化载水，区分水源、施用方法和循环水。

- 选定流：输送至作物的灌溉水
- 流属性/单位：体积 / m3
- 数量规则：汇总从建植至最终采摘的田块、种植畦或设施单元计量读数及有记录的水量平衡估计。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：作物灌溉筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5,000
  - 单位：m3/ha
  - 基准：完整声明作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 农业养分与肥料投入（`crop_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 按实际采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 数量规则：每种实际产品仅采集一次数量并保留组成，计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个生成的产品交换解析到一个经核实的 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：养分和改良剂筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10,000
  - 单位：kg 产品/ha
  - 基准：完整作物周期及实际产品记录
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 植保产品（`crop_protection_input`）

记录每种施用的植保产品，保留产品名、有效成分、配方、施用率、方法、日期和处理面积。综合病虫害管理记录可证明未进行处理。

- 选定流：实际施用的植保产品
- 流属性/单位：产品或有效成分质量 / kg
- 数量规则：对完整作物周期核对施用日志、产品标签、库存变动和处理面积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-good-agricultural-practices`; `codex-fresh-produce-hygiene`
- 数量范围：植保筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：350
  - 单位：kg 产品/ha
  - 基准：完整作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 移动机械燃料（`mobile_machinery_fuel`）

记录耕作、喷施、灌溉支持和作物管理作业所用柴油、汽油或其他燃料。

- 选定流：移动机械燃料
- 流属性/单位：能量或燃料质量 / MJ 或 kg
- 数量规则：汇总归属于作物周期的燃料收据、油罐记录或机械小时计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：移动机械燃料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,800
  - 单位：MJ/ha
  - 基准：作物周期内的田间机械作业
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 灌溉和作物管理用电（`management_electricity_input`）

记录声明交接节点前抽水、水肥一体化、设施单元运行、照明和其他设备用电。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 数量规则：汇总设备计量或发票，并按面积时间、运行时间、供水量或其他声明物理基准分配共用服务。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：管理用电筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：400
  - 单位：kWh，每 1,000 kg 产出
  - 基准：灌溉抽水及边界内作物管理设备
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 水资源取用（`water_resource_withdrawal`）

将灌溉或水肥一体化取用的天然水资源与供水分开记录，并报告水源及回流或耗水基准。

- 选定流：水资源取用
- 流属性/单位：体积 / m3
- 数量规则：将水源计量或许可记录与作物供水核对，披露回流水或耗水计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
- 数量范围：取水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：7,000
  - 单位：m3/ha
  - 基准：作物周期天然水资源取用
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

##### 废物流


###### 受管理生产的作物残余物（`crop_residue_management_output`）

记录最终采摘后的叶、茎、根、豆荚和其他残余物，分别记录还田、堆肥、饲料利用、处理或处置数量和去向。

- 选定流：绿色豆科蔬菜生产的作物残余物
- 流属性/单位：质量 / kg 湿残余物
- 数量规则：按田块或设施单元称量或计算残余物，记录接收去向；未收集田间残余物仍须作为声明残余物流保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_fate_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：作物残余物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：300
  - 上限：12,000
  - 单位：kg 湿残余物/ha
  - 基准：声明去向之前的作物周期残余物质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）


##### 基本流

###### 氧化亚氮排入空气（`nitrous_oxide_emission`）

记录或计算归属于有记录养分投入、改良剂和残余物路径的直接及间接氧化亚氮排放，保留方法和接收介质。

- 选定流：氧化亚氮排入环境空气
- 流属性/单位：质量 / kg N2O
- 数量规则：对养分投入、改良剂、残余物去向及环境因子应用一种声明排放方法，避免重复计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：氧化亚氮筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg N2O/ha
  - 基准：进行养分管理的作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 氨排入空气（`ammonia_emission`）

声明方法及施用记录支持相应路径时，记录或计算肥料或有机改良剂施用产生的氨排放。

- 选定流：氨排入环境空气
- 流属性/单位：质量 / kg NH3
- 数量规则：对有记录的氮形态、施用时间及环境条件应用声明氮排放方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：氨筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg NH3/ha
  - 基准：进行养分管理的作物周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 硝酸盐排入水体（`nitrate_to_water`）

养分投入、土壤、排水及接收介质信息支持相应路径时，记录或计算进入水体的硝酸盐损失。

- 选定流：硝酸盐排入水体
- 流属性/单位：质量 / kg 硝酸盐
- 数量规则：对养分投入及排水或淋溶证据应用声明氮损失方法。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：硝酸盐损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：150
  - 单位：kg 硝酸盐/ha
  - 基准：进行养分管理的作物周期及有记录的排水路径
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 磷酸盐排入水体（`phosphate_to_water`）

养分施用、径流或排水、土壤条件及接收介质信息支持相应路径时，记录或计算进入水体的磷酸盐损失。

- 选定流：磷酸盐排入水体
- 流属性/单位：质量 / kg 磷酸盐
- 数量规则：对养分投入及有记录的径流、排水或侵蚀应用声明磷损失方法，不得赋予无证据支持的默认排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_nutrient_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：磷酸盐损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg 磷酸盐/ha
  - 基准：进行磷管理的作物周期及有记录的径流或排水路径
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：采收和田间分选（`harvest_and_field_sorting`）

#### 输入

##### 产品流

###### 采收容器和田间搬运材料（`harvest_container_input`）

记录采收使用的可重复或一次性箱筐、周转箱、内衬和其他搬运材料，保留重复使用次数及更换记录。

- 选定流：采收容器或田间搬运材料
- 流属性/单位：质量 / kg 材料或声明容器数量单位
- 数量规则：记录材料类型、皮重、使用次数、更换数量及对作物生产周期的分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_handling_records`
- 来源：`codex-fresh-produce-hygiene`
- 数量范围：采收搬运材料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：80
  - 单位：kg 材料，每 1,000 kg 产出
  - 基准：采收生产周期及声明重复使用周期
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 采收机械燃料（`harvest_machinery_fuel`）

记录初次分选或声明交接节点之前采收机械和田间运输使用的燃料。

- 选定流：移动机械燃料
- 流属性/单位：能量或燃料质量 / MJ 或 kg
- 数量规则：汇总分配至采收生产周期的燃料收据、油罐记录或机械小时计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：采收燃料筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：800
  - 单位：MJ，每 1,000 kg 产出
  - 基准：采收及初次田间搬运生产周期
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 采收田间损失（`harvest_field_loss`）

记录未纳入降级产品的未采收可食产品，或采摘和初次搬运中损失的产品，并说明方法及去向。

- 选定流：田间或初次搬运中损失的采收绿色豆科蔬菜产品
- 流属性/单位：质量 / kg 鲜产品
- 数量规则：根据田间计数、抽样或质量平衡估计，并与可销售产出及收集次品分开。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`iso-14044-2006`
- 数量范围：田间损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,500
  - 单位：kg 鲜产品，每 1,000 kg 可销售产出
  - 基准：完整采收生产周期
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 采收和田间分选的可销售鲜产品（`marketable_product_output`）

记录确定等级后的可销售产品。声明交接节点为田间或农场时，该输出是作物周期归一化输出。

- 选定流：可销售其他绿色豆科蔬菜，鲜且完整
- 流属性/单位：质量 / kg

原参考状态单位注释：质量 / kg 鲜产品

原始输出测量与核对：确定等级后按采摘轮次称量合格产品，归一化前汇总整个采收生产周期数量。

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`codex-fresh-produce-hygiene`
- 数量范围：可销售产量筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：60,000
  - 单位：kg 可销售产品/ha
  - 基准：完整声明作物周期和采收生产周期
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流


###### 降级或拒收采收产品（`downgraded_product_output`）

记录未达到声明可销售等级的采收豆荚或青嫩种子，包括原因及去向；不得不加说明地将降级材料纳入参考输出。

- 选定流：降级或拒收绿色豆科蔬菜产品
- 流属性/单位：质量 / kg 鲜产品
- 数量规则：按采摘轮次称量总采收、合格、降级及拒收产品，记录饲料、堆肥、处置或其他去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_grade_records`
- 来源：`codex-fresh-produce-hygiene`; `iso-14044-2006`
- 数量范围：降级产品筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2,000
  - 单位：kg 降级产品，每 1,000 kg 可销售产出
  - 基准：完整采收生产周期
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）


###### 离开田间分选的作物残余物（`crop_residue_output`）

记录采收或田间分选中移除的叶、茎、根、豆荚及其他生物质，以及接收去向和任何有记录的用途。

- 选定流：采收和田间分选的作物残余物
- 流属性/单位：质量 / kg 湿残余物
- 数量规则：称量或计算移除残余物，并记录还田、堆肥、饲料利用、处理或处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_fate_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：采收残余物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10,000
  - 单位：kg 湿残余物/ha
  - 基准：声明去向前的采收生产周期残余物质量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

### 过程：调理和发货（`conditioning_and_dispatch`）

#### 输入

##### 产品流

###### 清洗水（`washing_water_input`）

声明交接节点前进行清洗时，记录除土和去异物用水。与灌溉及水源取水分开，并披露循环和排放处理。

- 选定流：鲜农产品清洗工艺用水
- 流属性/单位：体积 / m3
- 数量规则：汇总清洗水计量或批次记录，披露循环、处理及排放管理。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`codex-fresh-produce-hygiene`; `fao-fresh-produce-handling`
- 数量范围：清洗水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3，每 1,000 kg 产出
  - 基准：鲜完整绿色豆科蔬菜交接节点前清洗
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 冷却和包装用电（`postharvest_electricity_input`）

声明交接节点前发生时，记录冷却、冷库、分选线、照明和包装设备用电。

- 选定流：电力供应
- 流属性/单位：能量 / kWh
- 数量规则：汇总设备计量或发票，并按处理量、冷库占用时间、面积时间或其他声明物理基准分配共用服务。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_energy_records`
- 来源：`fao-fresh-produce-handling`
- 数量范围：调理用电筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kWh，每 1,000 kg 产出
  - 基准：声明的交接节点前冷却、分选和包装路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 初级包装和标签（`primary_packaging_input`）

记录声明交接节点前实际使用的初级包装、标签、内衬及其他材料。产品类别不规定包装类型；根据实际记录识别材料及可重复使用容器的周转次数。

- 选定流：鲜农产品初级包装材料
- 流属性/单位：质量 / kg 材料
- 数量规则：记录材料类型、质量、已知时的再生含量、可重复使用容器周转次数、损失及对声明产出的分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-fresh-produce-hygiene`
- 数量范围：初级包装筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：120
  - 单位：kg 包装材料，每 1,000 kg 产出
  - 基准：实际声明的交接节点前包装路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 交接节点前公路货运（`pre_gate_road_transport`）

生产单元或田间收集点至包装场或交接节点的运输位于声明边界之前时，记录该运输及距离、载荷、车辆和分配基准。

- 选定流：公路货运服务
- 流属性/单位：运输功 / tkm
- 数量规则：根据质量、距离、车辆或服务记录及声明分配基准计算运输功；不纳入交接节点后运输。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_transport_records`
- 来源：`fao-fresh-produce-handling`
- 数量范围：交接节点前运输筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：500
  - 单位：tkm，每 1,000 kg 产出
  - 基准：声明的生产至交接节点路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 声明交接节点的可销售产品（`marketable_gate_output`）

记录在纳入的调理和包装之后，于声明农场或包装场交接的最终可销售鲜产品。未纳入调理时，将该数量与 `marketable_product_output` 核对。

- 选定流：声明交接节点的可销售其他绿色豆科蔬菜，鲜且完整
- 流属性/单位：质量 / kg

原参考状态单位注释：质量 / kg 鲜产品

原始输出测量与核对：在声明交接节点称量最终合格产出，并与总采收、田间分选、调理损失和包装皮重核对。

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_grade_records`
- 来源：`codex-fresh-produce-hygiene`
- 数量范围：交接输出质量核对区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1,000
  - 上限：1,000
  - 单位：kg 可销售产品，每 1,000 kg 参考输出
  - 基准：纳入调理后的声明交接输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流




###### 调理降级产品（`conditioning_reject_output`）

记录田间分选后在清洗、冷却、分级或包装中移除的产品及其声明去向。

- 选定流：降级或拒收鲜绿色豆科蔬菜产品
- 流属性/单位：质量 / kg 鲜产品
- 数量规则：按批次称量或估计调理拒收物，并与采收分级记录和最终可销售产出核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_grade_records`
- 来源：`codex-fresh-produce-hygiene`; `iso-14044-2006`
- 数量范围：调理拒收筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1,000
  - 单位：kg 产品，每 1,000 kg 可销售产出
  - 基准：声明清洗、冷却、分级和包装路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）


###### 包装和搬运废物（`packaging_waste_output`）

记录声明交接节点前产生的受损、废弃或未回收包装和搬运材料，按材料及去向分开。

- 选定流：包装或搬运废物
- 流属性/单位：质量 / kg 废物
- 数量规则：核对包装领用、随产品保留、返回重复使用、回收、处理和处置数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-fresh-produce-hygiene`; `iso-14044-2006`
- 数量范围：包装废物筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kg 废物，每 1,000 kg 产出
  - 基准：交接节点前包装作业
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）


###### 清洗水和调理废水（`conditioning_wastewater_output`）

记录离开交接节点前过程的清洗水及调理废水，包括处理、排放去向及任何循环回路。

- 选定流：鲜农产品调理废水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：核对进水、循环、蒸发、保留水分、处理及排放记录；只有证据支持时才使用特定接收介质的基本流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1,000 kg 可销售鲜产出。

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postharvest_records`
- 来源：`codex-fresh-produce-hygiene`
- 数量范围：调理废水筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：12
  - 单位：m3，每 1,000 kg 产出
  - 基准：声明的交接节点前清洗和调理路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）


##### 基本流


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：Other green leguminous vegetables, fresh, whole, at farm gate or pack-house gate `<>`
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：Other green leguminous vegetables, fresh, whole, at farm gate or pack-house gate `<>`
- 流属性 / 单位：质量 / kg
- 数量规则：1000 kg
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_shared_field_services` | 共用田间、灌溉、设施单元和包装服务 | 按面积时间、运行时间、供水量、处理量或其他有记录的物理关系，在产品类别或作物周期间分配共用服务。仅在物理关系无法代表共用服务时使用经济分配，并披露价格基准。 | `iso-14044-2006` |
| `allocation_marketable_and_off_grade` | 可销售产品、降级产品、拒收物和残余物 | 可销售产品作为参考输出。降级产品、次品、残余物和废物按实际去向分别记录。没有接收方、预期用途、质量及交接记录时，不得对饲料、堆肥、回收或其他用途给予抵扣。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_reusable_containers` | 可重复使用的周转箱、箱筐、托盘和内衬 | 按有记录的周转次数或服务质量分配可重复使用容器的制造和更换，再将清洗、损失及寿命终结记录归属于实际路线。 | `iso-14044-2006`; `codex-fresh-produce-hygiene` |

## 8. 前景数据采集、计算与质量规则

在各采集协议中保留场址、批次、周期和阶段的原始数量及分母。先核对库存、损失、水分及副产品归属，再归一化：归一化交换量 = 应归属原始交换量 × 声明参考数量 / 同一边界和计量基准的合格交接产品数量。归一化前先完成多年生建植和共用作业归属。不得将内部转移量设为最终参考数量。“每声明的参考流”指第 3 节的数量、单位和产品状态；数据包必须声明实际路线及交接节点。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `crop_establishment` | 种植材料和建植 | 种子或移栽苗批次记录 | 物种或品种；供应商批次；数量；活力或植株数量；田块或设施单元；种植日期；种植面积 | 供应商记录加田间日志；原始汇总与归属：按作物周期求和，归一化至可销售产出 | kg、数量、ha | 每次种植 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 批次记录、种植日志、面积记录 |
| `cp_area_cycle_records` | `crop_establishment` | 占用面积和作物周期 | 田块或设施单元登记 | 面积；单元；先前土地用途披露；占用日期；基础设施分配说明 | 田块登记和地图或设施单元记录；原始汇总与归属：按单元计算面积时间，并与产出核对 | ha、日期 | 每个作物周期 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 受控面积记录 |
| `cp_irrigation_records` | `crop_establishment` 和 `crop_management` | 灌溉、水肥一体化和取水 | 计量、许可或水量平衡记录 | 水源；计量起止读数；方法；作物阶段；循环；回流水 | 计量读数或有记录的水量平衡；原始汇总与归属：按水源和作物阶段求和，再归一化 | m3 | 每次事件或月度 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 计量控制、许可或平衡核查 |
| `cp_nutrient_records` | `crop_management` | 肥料、改良剂和养分损失计算 | 施用和产品记录 | 产品；批次；质量；干物质；养分组成；日期；方法；处理面积；土壤或养分计划；损失方法输入 | 发票、施用日志、规格和计划；原始汇总与归属：按实际产品和养分基准汇总，不得重复计入 | kg 产品、kg 养分、ha | 每次施用 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 规格、施用日志、计划、方法核查 |
| `cp_crop_protection_records` | `crop_management` | 植保产品 | 处理日志 | 产品；有效成分；配方；剂量；日期；方法；处理面积；采前安全间隔 | 处理日志和产品记录；原始汇总与归属：按有效成分和路线汇总 | kg 产品、ha、日期 | 每次处理 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 标签、日志、操作人员或合规记录 |
| `cp_energy_records` | `crop_management` 和 `harvest_and_field_sorting` | 燃料和管理用电 | 燃料、机械小时、计量或发票记录 | 燃料类型；数量；设备；小时；田块或单元；电表；分配基准 | 收据、油罐记录、机械日志或计量表；原始汇总与归属：按声明物理基准分配共用服务 | MJ、kg、kWh | 每次交易或月度 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 收据、计量表、机械日志、分配核查 |
| `cp_residue_fate_records` | `crop_management` 和 `harvest_and_field_sorting` | 作物残余物和次品去向 | 残余物或接收方记录 | 流；质量；湿基或干基；收集点；接收方；用途；运输；处理或处置 | 称量、抽样及接收方记录；原始汇总与归属：按去向求和，未收集田间残余物单独保留 | kg、日期 | 每次采收或去向事件 | 完整作物周期 | 每个所代表生产单元 | 每声明的参考流 | 称重单、接收方或处理记录 |
| `cp_harvest_grade_records` | `harvest_and_field_sorting` | 总采收、等级、损失及可销售产出 | 采摘和分级记录 | 采摘日期；总质量；合格质量；降级质量；拒收质量；损失估计；等级标准；水分或温度 | 称量记录和等级日志；原始汇总与归属：归一化前核对全部采摘轮次 | kg、日期、声明分数 | 每轮采摘 | 完整采收生产周期 | 每个所代表生产单元 | 每声明的参考流 | 校准秤、等级表、批次记录 |
| `cp_harvest_handling_records` | `harvest_and_field_sorting` | 箱筐、周转箱和田间材料 | 容器领用和返还记录 | 材料；皮重；件数；重复使用周转次数；损失；清洗；分配质量 | 库存和返还日志；原始汇总与归属：按周转次数或质量分配重复使用服务 | kg、数量、周转次数 | 每个生产周期 | 完整采收生产周期 | 每个所代表生产单元 | 每声明的参考流 | 库存日志、清洗记录、更换发票 |
| `cp_postharvest_records` | `conditioning_and_dispatch` | 清洗和废水 | 清洗批次、计量或处理记录 | 进水；循环；批次；土壤负荷；处理；排放；保留水分 | 计量表、批次日志和处理记录；原始汇总与归属：核对投入、回用、处理和排放 | m3、kg、日期 | 每批次 | 完整声明交接期间 | 每个调理设施 | 每声明的参考流 | 计量表、水质或处理记录 |
| `cp_postharvest_energy_records` | `conditioning_and_dispatch` | 冷却、冷藏、分选和包装用电 | 计量或设备记录 | 设备；时间；温度路线；kWh；处理量；分配基准 | 计量或发票加设备日志；原始汇总与归属：按处理量、时间或物理基准分配共用能源 | kWh、h、kg | 每批次或月度 | 完整声明交接期间 | 每个调理设施 | 每声明的参考流 | 计量表、温度日志、处理量记录 |
| `cp_packaging_records` | `conditioning_and_dispatch` | 包装和包装废物 | 包装领用、返还和废物记录 | 材料；质量；再生含量；重复使用周转次数；受损数量；处置或回收去向 | 发票、物料平衡和废物记录；原始汇总与归属：核对领用、保留、返还及废弃包装 | kg、数量 | 每批次或月度 | 完整声明交接期间 | 每个调理设施 | 每声明的参考流 | 发票、库存记录、废物转移单 |
| `cp_transport_records` | `conditioning_and_dispatch` | 交接节点前运输 | 货运或路线记录 | 起点；终点；距离；载荷；车辆；服务；返程；交接节点 | 货运记录、路线日志或承运方记录；原始汇总与归属：计算运输功，并按质量分配共用运输 | tkm、kg、km | 每次运输 | 完整声明交接期间 | 每条所代表路线 | 每声明的参考流 | 运单、路线记录、承运方声明 |
| `cp_postharvest_grade_records` | `conditioning_and_dispatch` | 最终合格产出和调理拒收物 | 包装场批次和分级记录 | 接收质量；清洗后质量；冷却后质量；包装后质量；合格质量；拒收质量；皮重；温度；等级 | 称量及批次或等级记录；原始汇总与归属：核对接收和最终交接质量 | kg、日期、温度 | 每批次 | 完整声明交接期间 | 每个调理设施 | 每声明的参考流 | 校准秤、批次记录、等级日志 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 每 1,000 kg 数量 = 记录数量 * 1,000 / 最终可销售交接总质量 kg | 记录数量；最终可销售交接质量 | 归一化行数量 | `mass-balance-identity` |
| `calc_nutrient_equivalent` | 肥料和土壤改良剂投入 | 养分质量 = 产品质量 * 有记录的养分分数；分别保留产品质量及各声明养分基准 | 产品质量；供应商规格、计划或实验室结果 | 按实际产品角色记录的养分质量 | `fao-good-agricultural-practices` |
| `calc_area_time` | 占用生产面积 | 面积时间 = 声明面积 ha * 占用时间（年） | 面积；占用日期 | ha*a | `fao-good-agricultural-practices` |
| `calc_water_withdrawal` | 资源取用 | 核对水源取水、供水、回流水及有记录的耗水 | 水源计量；输送水；回流水 | 取水及披露的耗水 | `fao-crop-evapotranspiration-56` |
| `calc_direct_and_indirect_n2o` | 氧化亚氮排入空气 | 对养分投入、改良剂、残余物去向及路径因子应用一种声明的 IPCC 兼容方法；不得组合重叠方法 | 养分记录；残余物记录；方法因子 | 按接收介质记录的 kg N2O | `ipcc-2019-managed-soils-n2o` |
| `calc_transport_work` | 交接节点前公路货运 | 运输功 tkm = 载荷（吨） * 声明路线 km；按有记录的质量基准分配共用运输 | 载荷；距离；服务记录；分配基准 | tkm | `fao-fresh-produce-handling` |
| `calc_reusable_container_service` | 可重复使用的采收和包装材料 | 按有记录的周转次数或服务质量分配制造和更换，再加上清洗及损失记录 | 容器质量；周转次数；服务质量；清洗和损失 | 分配后的包装投入和废物 | `iso-14044-2006` |
| `calc_mass_reconciliation` | 采收、调理和交接输出 | 在测量不确定度内，总采收 = 可销售 + 降级 + 拒收 + 田间损失 + 过程损失 + 留存或移除残余物；调查未解释差额 | 采摘；等级；损失；残余物记录 | 核对后的作物周期质量平衡 | `mass-balance-identity`; `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_product_identity` | 参考产品及全部产品流 | 核实物种或品种组、CPC 01249 归属、成熟度、产品状态及对 CPC 01241 和 01242 的排除核查。 | 产品规格、分类审查及批次记录 |
| `quality_scale_and_meter` | 质量、水、能源和包装行 | 使用受控秤和计量表，记录读数日期；无法直接测量时保留估计基准。 | 校准或控制记录、计量日志、发票或有记录的估计 |
| `quality_temporal_coverage` | 全部作物周期行 | 覆盖完整声明种植和采收生产周期，披露缺失期间、异常天气及路线条件变化。 | 田间日志、采摘记录及缺口说明 |
| `quality_completeness_reconciliation` | 投入、产品、废物、残余物和损失 | 核对作物周期投入及全部采收和交接输出，解释任何重要未解释差额。 | 质量平衡工作表及审查签署 |
| `quality_emission_method` | 环境排放 | 说明选定方法、因子、接收介质和假设；避免直接、间接及残余物路径重复计入。 | 计算表和方法引用 |
| `quality_fate_and_disclosure` | 残余物、次品、废水、包装和运输 | 为每个非可销售流或废物流保留接收方、去向、处理、用途及交接证据。 | 接收方声明、转移单、处理记录或声明田间去向 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_cpc_scope` | PCR 身份和数据集元数据 | 确认产品属于 CPC 01249，且不是 CPC 01241 绿色菜豆或 CPC 01242 青豌豆；保留物种或品种及产品状态证据。 | `iso-14044-2006` |
| `validate_reference_mass` | 参考流和输出 | 要求以质量属性和 kg 单位表示 1,000 kg 可销售产出，并完整声明作物周期和交接节点。 | `mass-balance-identity` |
| `validate_crop_cycle_completeness` | 过程图和清单 | 每个所代表作物周期须包含建植、管理和采收过程；声明交接节点包含调理及发货活动时，须纳入相应过程。 | `fao-good-agricultural-practices`; `codex-fresh-produce-hygiene` |
| `validate_nutrient_product_basis` | 肥料和土壤改良剂投入 | 要求实际产品身份、产品质量、养分或改良剂基准及施用日期齐全，复合产品不得重复计入。 | `fao-good-agricultural-practices` |
| `validate_water_and_energy_separation` | 灌溉、取水、清洗、冷却、燃料和电力 | 将供水、自然资源取水、清洗水、燃料和电力作为独立行保留，并声明计量或计算基准。 | `fao-crop-evapotranspiration-56`; `fao-fresh-produce-handling` |
| `validate_output_reconciliation` | 可销售、降级、拒收、残余物、废水和包装行 | 核对采摘轮次、田间分选、调理及最终交接输出；调查未解释差额，披露全部声明去向。 | `mass-balance-identity`; `iso-14044-2006` |
| `validate_emission_pathway` | 直接和间接排放 | 将排放行视为计算值之前，须有接收介质、计算方法、有记录的养分或残余物投入及路径证据。 | `ipcc-2019-managed-soils-n2o` |
| `validate_gate_and_transport` | 调理和交接节点前运输 | 确认数据集纳入的清洗、冷却、包装、储存和运输发生于声明交接节点前，排除交接节点后服务。 | `codex-fresh-produce-hygiene`; `fao-fresh-produce-handling` |
| `validate_qualifiers` | 参考流和数据集元数据 | 参考流表中须包含全部类别限定信息，包括物种或品种、成熟度、等级、路线、日期、水、养分、植保、去向及交接节点信息。 | `codex-fresh-produce-hygiene` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 归属于 CPC 01249 的鲜、完整、未成熟绿色豆科蔬菜前景农业生产数据集 |
| downstream_use | 声明交接节点及限定信息匹配时，可用作农业产品系统的次级数据集，以及与背景数据链接的前景节点。 |
| allowed_use | 用于鲜 CPC 01249 产品的比较建模，披露物种或品种、路线、作物周期、采收生产周期、交接节点、投入、输出等级及残余物或废物去向。 |
| excluded_use | 绿色菜豆或青豌豆、干豆类、加工或保藏产品、未明确的混合豆类类别、零售或消费者生命周期声明，以及质量平衡或交接条件存在证据缺口的数据集。 |
| required_metadata | CPC 归属；物种或品种组；地理位置；田间或设施路线；种植和采收日期；采摘轮次；参考交接节点；产品状态和等级；灌溉和水源；实际肥料或改良剂产品及养分基准；植保；能源；包装和运输；最终质量核对；全部废物或残余物去向。 |
| required_quality_disclosure | 时间覆盖、场址范围、实测或估计状态、计量表和秤控制、分配基准、排放方法、缺失数据、不确定性，以及每项重要投入和输出的证据。 |
| update_trigger | CPC 边界解释、产品状态、生产路线、交接节点、作物管理实践、包装路线或排放方法变化，或影响重要投入、输出、分配或校验规则的证据变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-fresh-produce-hygiene` | standard | Codex Alimentarius, CXC 53-2003, Code of Hygienic Practice for Fresh Fruits and Vegetables, FAO/WHO: https://workspace.fao.org/sites/codex/Standards/CXC%2B53-2003/CXC_053e.pdf | 鲜农产品卫生、采收、清洗、包装及数据披露 |
| `fao-good-agricultural-practices` | official_guidance | FAO, Production practices to increase yield, quality and safety of fruits and vegetables: https://www.fao.org/family-farming/detail/en/c/1682483/ | 作物建植、作物管理、养分记录及边界披露 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56, Crop evapotranspiration: https://www.fao.org/4/X0490E/X0490E00.htm | 灌溉、水量平衡及取水测量 |
| `fao-fresh-produce-handling` | handbook | FAO, Manual for the preparation and sale of fruits and vegetables: https://www.fao.org/4/y4893e/y4893e0a.htm | 调理、冷却、包装、运输及采后记录 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11, N2O Emissions from Managed Soils and CO2 Emissions from Lime and Urea Application: https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 直接和间接农业排放计算 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配、副产品处理、完整性及校验原则 |
| `mass-balance-identity` | method_factor | Conservation and reconciliation of declared mass inputs, outputs, losses, and residues | 归一化和质量平衡检查 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
