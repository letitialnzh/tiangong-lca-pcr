---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-tropical-and-subtropical-fruits-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他未列名热带和亚热带水果

## 1. 范围与适用性

本 PCR 适用于未被更具体 CPC 水果类别覆盖的新鲜完整热带和亚热带水果。范围从声明的作物周期或果园建立开始，覆盖至声明的农场交付状态；可覆盖一年生作物和多年生生产。必须声明实际水果、已知时的品种或种、路线、成熟度、等级和农场交付状态。

本 PCR 不包括在有专门 PCR 或下游数据集时的香蕉、芭蕉、椰枣、无花果、鳄梨、芒果、番石榴、山竹、柑橘、葡萄、坚果、加工水果、零售配送和消费者使用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-tropical-and-subtropical-fruits-n-e-c |
| classification_refs | CPC 3.0:01319 |
| covered_products | 未被更具体 CPC 水果类别覆盖的新鲜完整热带和亚热带水果 |
| excluded_products | 专门水果类别；干制、罐藏、冷冻、榨汁、发酵、零售包装和消费者就绪产品 |
| representative_product | 声明农场交付点的新鲜完整其他热带或亚热带水果 |
| production_route | 一年生作物或多年生果园/藤本生产，随后采收和可选农场分拣或包装 |
| market_state | 新鲜、完整、农场交付点接收的产品，并声明成熟度和等级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场交付点接收的新鲜完整其他热带或亚热带水果 |
| How much | 1 kg 接收产品 |
| How well | 实际水果身份、已知时的品种或种、成熟度、等级、含水状态和农场交付质量 |
| How long or cycle | 一个声明的作物周期或生产年度；多年生建立期和结果期必须披露 |
| reference_flow_link | `reference_flow_other_tropical_subtropical_fruit` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 农场交付点的新鲜完整其他热带和亚热带水果 `37b99ed4-6904-421e-8d23-11fe386da258` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际水果身份；已知时的品种或种；一年生或多年生路线；地区；作物周期或果园年度基准；成熟度和等级；农场交付状态；接收产量；共产品和淘汰水果去向 |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和产品输出归一化 | 质量＼ | kg | 将清单归一化为农场交付点接收的新鲜完整水果 1 kg。 |
| `nutrient_product_and_basis` | 肥料和土壤改良剂投入 | 产品质量和养分基准 | kg 产品；kg N、P2O5 或 K2O | 记录实际产品和数量，保留产品分析并计算养分质量，不替换产品质量。 |
| `perennial_time_basis` | 多年生建立期和结果生产 | 面积-时间和作物周期记录 | ha 年；kg 接收水果 | 依据披露的结果年限和接收产量分配建立期和非结果期投入。 |
| `water_measurement_basis` | 灌溉和取水 | 体积 | m3 | 优先使用计量记录；否则记录当地水量平衡并区分施用灌溉和水源取水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 管理土地或已建立作物/果园进入声明作物周期；若纳入建立期，则从种植材料和场地准备记录开始 |
| starting_condition_role | 前景农业生产起点；土地历史和建立期分配必须披露 |
| product_classification_scope | CPC 3.0:01319 剩余新鲜热带和亚热带水果家族，每个数据集声明实际水果身份 |
| recursive_input_rule | 仅当同类别种植材料跨越前景边界时记录；自繁材料应披露来源和分配，避免递归产品替代 |
| upstream_dataset_requirement | 对非前景作业的外购种植材料、肥料、植保、能源、包装和运输使用上游数据集 |
| disclosure | 声明一年生/多年生路线、建立期是否纳入、结果年限、作物周期或果园年度基准、接收产量、交付状态及残余物/淘汰物去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start_condition` | 所有过程 | 从声明的作物周期或果园建立状态开始，纳入至接收农场交付水果的前景投入和排放；不纳入零售、消费者使用和下游加工。 | `fao-good-agricultural-practices`, `codex-fresh-fruits-vegetables-cxc-53` |
| `boundary_route_disclosure` | 一年生和多年生路线 | 声明建立期、非结果年、嫁接或更新；没有分配规则时不得混合一年生和多年生时间基准。 | `fao-good-agricultural-practices` |
| `boundary_recursive_input` | 种植材料 | 按实际跨界节点记录外购或转移材料；自繁材料必须有来源和分配证据。 | `fao-good-agricultural-practices` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p01319_establishment` | 作物或果园建立 | 条件性 | 当种植、嫁接、建株或场地准备对声明生产期有贡献时纳入。 | 建立期和时间基准节点 | 按声明面积并分配接收产量 |
| `p01319_cultivation` | 作物和果园栽培 | 必需 | 纳入声明作物周期或结果年度内的田间/果园管理。 | 管理生物生产节点 | 按作物周期/果园年度并归一化至 1 kg 接收水果 |
| `p01319_harvest_farm_gate` | 采收和农场交付处理 | 必需 | 纳入采收、场内分拣、临时保护和可选农场包装。 | 采收和交付节点 | 按采收和接收产品质量 |

### 过程：作物或果园建立（`p01319_establishment`）

#### 输入

##### 产品流

###### 供应的种植或嫁接材料（`planting_material_input`）
记录进入建立期的外购、转移或苗圃来源植株、插条、种子、砧木或嫁接材料，并声明自繁材料和亲本分配。

- 选定流：声明路线的种植或嫁接材料
- 流属性/单位：质量或件数 / kg 或 item
- 数量规则：按面积、地块和建立年份记录材料；保留件数到质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每建立面积并分配至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01319_establishment_records`
- 来源：`fao-good-agricultural-practices`

###### 农业养分与肥料投入（`p01319_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每建立面积并分配至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01319_establishment_records`
- 来源：`fao-good-agricultural-practices`; `ipcc-2019-refinement-agriculture`

##### 废物流

###### 送往声明去向的建立期残余物（`establishment_residue_waste`）
记录离开过程的移除植被、失败植株、砧木残余物和其他建立期生物质；保留为覆盖物或堆肥时必须说明去向。

- 选定流：建立期生物质残余物至声明去向
- 流属性/单位：质量 / kg 原样或 kg 干物质
- 数量规则：按面积和事件实测或计算残余物质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每建立面积并分配至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01319_establishment_records`
- 来源：`fao-good-agricultural-practices`

##### 基本流

###### 作物或果园土地占用（`establishment_land_occupation`）
记录建立期占用的面积和时间，多年生系统包括非结果期。

- 选定流：热带或亚热带水果生产的土地占用
- 流属性/单位：面积-时间 / m2*a 或 ha year
- 数量规则：面积乘以声明占用时间并分配至接收产量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每建立面积并分配至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01319_establishment_records`
- 来源：`fao-good-agricultural-practices`

#### 输出

##### 产品流

###### 转入栽培的已建立作物或果园能力（`established_production_capacity`）
仅当建立期与栽培分开时记录内部交接，不得作为可销售产品计数。

- 选定流：已建立的作物或果园生产能力
- 流属性/单位：面积或作物周期能力 / ha 或 crop cycle
- 数量规则：记录建立完成和生产期分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：关联声明作物周期或果园年度产量
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01319_establishment_records`
- 来源：`fao-good-agricultural-practices`

##### 废物流
##### 基本流

### 过程：作物和果园栽培（`p01319_cultivation`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`p01319_cultivation_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期或果园年度并归一化至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01319_cultivation_records`
- 来源：`fao-good-agricultural-practices`; `ipcc-2019-refinement-agriculture`
- 数量范围：暂定养分 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：600
  - 单位：kg product/ha/year
  - 基准：声明周期或年度内的全部施用产品
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`cultivation_irrigation_input`）
仅在灌溉水跨越前景边界时记录；雨养生产以水量平衡依据记录零灌溉。

- 选定流：灌溉水供应
- 流属性/单位：体积 / m3
- 绑定模式：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按地块和年度使用水表、灌溉计划或当地水量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期或果园年度并归一化至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01319_cultivation_records`
- 来源：`fao-good-agricultural-practices`
- 数量范围：暂定灌溉 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15000
  - 单位：m3/ha/year
  - 基准：一个声明生产年度的施用灌溉水
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的能源和移动机械燃料（`cultivation_energy_input`）
记录抽水和栽培管理使用的电力、柴油、汽油或承包活动；若上游已包含则不得重复计数。

- 选定流：电力供应和农业移动机械燃料
- 流属性/单位：能量或载能体质量 / kWh、L 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：使用计量、发票、燃料记录或承包商活动并转换基准，避免重复计数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期或果园年度并归一化至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01319_cultivation_records`
- 来源：`fao-good-agricultural-practices`

###### 供应的作物保护产品（`cultivation_crop_protection_input`）
按产品、已知时的有效成分、施用事件和处理面积记录每种植保配方。

- 选定流：热带或亚热带水果生产的作物保护配方
- 流属性/单位：配方质量 / kg
- 数量规则：按产品和事件汇总实测配方质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每作物周期或果园年度并归一化至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01319_cultivation_records`
- 来源：`fao-good-agricultural-practices`

##### 废物流
##### 基本流

###### 灌溉取水（`cultivation_water_withdrawal`）
当水源和数量可知时，将水源取水与施用灌溉分开记录。

- 选定流：水果生产的水资源取水
- 流属性/单位：体积 / m3
- 数量规则：使用水源计量或水量平衡，避免重复表示已计入的灌溉
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期或果园年度并归一化至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01319_cultivation_records`
- 来源：`fao-good-agricultural-practices`

#### 输出

##### 产品流

###### 从作物或果园采收的新鲜水果（`harvested_fruit_output`）
在分拣前按实际身份、成熟度和等级记录全部采收水果。

- 选定流：采收的新鲜完整其他热带或亚热带水果
- 流属性/单位：质量 / kg
- 数量规则：分拣前称量采收批次并保留身份和等级
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每作物周期或果园年度并归一化至 1 kg 接收水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01319_harvest_records`
- 来源：`codex-fresh-fruits-vegetables-cxc-53`

##### 废物流

###### 送往声明去向的田间和作物残余物（`field_residue_waste`）
记录离开田间或果园的修剪物、落果、移除植物部分和其他残余物，并声明其去向。

- 选定流：作物残余物至声明的废物、再利用或处理去向
- 流属性/单位：质量 / kg 原样或 kg 干物质
- 数量规则：按地块和年度实测或计算残余物质量及去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期或果园年度并归一化至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01319_cultivation_records`
- 来源：`fao-good-agricultural-practices`、`ipcc-2019-refinement-agriculture`

##### 基本流

###### 土壤和作物保护排放（`cultivation_emission_outputs`）
依据养分和植保投入记录以及所选因子方法计算相关空气和土壤排放。

- 选定流：栽培产生的农业空气和土壤排放
- 流属性/单位：物质质量 / kg N2O、NH3、硝酸盐或其他声明物质
- 数量规则：由投入记录计算并保留物质、环境介质和因子基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每作物周期或果园年度并归一化至 1 kg 接收水果
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_01319_cultivation_records`
- 来源：`ipcc-2019-refinement-agriculture`

### 过程：采收和农场交付处理（`p01319_harvest_farm_gate`）

#### 输入

##### 产品流

###### 采收能源和承包采收服务（`harvest_energy_input`）
记录尚未在栽培阶段计入的采收燃料、电力和承包设备活动。

- 选定流：电力供应和农业移动机械燃料
- 流属性/单位：能量或载能体质量 / kWh、L 或 kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- 数量规则：使用日志、计量、发票、燃料记录或承包活动，并分配到采收和接收质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每采收批次并归一化至 1 kg 接收水果
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01319_harvest_records`
- 来源：`fao-good-agricultural-practices`

###### 农场交付包装和保护材料（`farm_gate_packaging_input`）
记录农场交付前使用的周转箱、筐、内衬、标签和其他材料；可重复使用包装需要使用寿命证据。

- 选定流：农场交付包装功能
- 流属性/单位：包装材料质量 / kg
- 绑定模式：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- 数量规则：按材料称量或发票记录，并按声明使用次数分配可重复使用物品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每采收批次并归一化至 1 kg 接收水果
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_01319_harvest_records`
- 来源：`codex-fresh-fruits-vegetables-cxc-53`

##### 废物流

###### 送往声明去向的分拣或淘汰水果（`sorted_reject_waste`）
记录分拣阶段淘汰的水果并声明堆肥、饲料、转加工、处置或其他去向；淘汰水果不得计入参考产品。

- 选定流：淘汰新鲜水果至声明去向
- 流属性/单位：质量 / kg
- 数量规则：称量淘汰批次并保留原因和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每采收批次并归一化至 1 kg 接收水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01319_harvest_records`
- 来源：`codex-fresh-fruits-vegetables-cxc-53`

##### 基本流
#### 输出

##### 产品流

###### 农场交付点接收的新鲜水果（`accepted_farm_gate_fruit_output`）
记录农场交付点转移的接收完整水果，并声明实际身份、成熟度、等级和质量。这是本 PCR 的参考产品语义流；在获得兼容核验身份前，其平台 UUID 保持证据缺口。

- 选定流：农场交付点的新鲜完整其他热带和亚热带水果＼
- 流属性/单位：质量 / kg
- 数量规则：分拣后称量接收批次，并与采收质量及淘汰批次核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 接收农场交付水果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_01319_harvest_records`
- 来源：`codex-fresh-fruits-vegetables-cxc-53`

##### 废物流
##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_accepted_rejected` | 采收、接收和淘汰水果 | 按实测质量区分接收产品、淘汰物和共产品；除非明确为接收共产品，否则不得将淘汰水果分配到参考产品。 | `iso-14044-allocation`, `codex-fresh-fruits-vegetables-cxc-53` |
| `allocation_perennial_establishment` | 多年生建立期和结果年 | 按披露的结果年限、树龄和接收产量分配共用建立投入。 | `iso-14044-allocation`, `fao-good-agricultural-practices` |
| `allocation_multiple_fruit_products` | 共用田间、果园、灌溉和机械记录 | 默认按实测接收质量分配；采用其他物理因果规则时必须说明。 | `iso-14044-allocation` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_01319_establishment_records` | `p01319_establishment` | planting, nutrient, residue, land | 苗圃记录、田间日志、面积图 | 身份；件数/质量；面积；日期；残余物；去向 | 发票、田间日志和面积核对 | kg、item、ha、year | 每次事件和建立年度 | 完整建立期 | 每地块 | 与面积及分配产量核对 | 签字记录、地图、发票和分配说明 |
| `cp_01319_cultivation_records` | `p01319_cultivation` | nutrient, irrigation, energy, protection, residues, emissions | 发票、施用日志、计量、水量平衡 | 产品；分析；数量；日期；地块；水源；能源；有效成分；去向 | 发票、计量、日志和因子计算 | kg、m3、kWh、L、物质质量 | 每次事件；周期/年度汇总 | 完整声明生产期 | 每地块/场址 | 汇总事件并归一化至接收产量 | 标签、校准、操作日志和因子引用 |
| `cp_01319_harvest_records` | `p01319_harvest_farm_gate` | harvest, packaging, rejected, accepted fruit | 采收票、称量、包装日志、去向记录 | 身份；批次；采收；接收；淘汰；等级；成熟度；包装；能源；去向 | 批次称量和交付核对 | kg、kWh、L、item | 每批次和采收季 | 完整采收季 | 每批次/交付点 | 采收 = 接收 + 淘汰 + 其他去向 | 校准秤、批次票、等级和去向证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_01319_reference_normalization` | 所有过程 | `normalized amount = declared process amount / accepted farm-gate fruit mass` | 过程数量；接收质量 | 每 kg 接收水果的数量 | `iso-14044-allocation` |
| `calc_01319_nutrient_basis` | 养分和改良剂投入 | `nutrient mass = product mass × declared nutrient fraction`；保留产品和养分结果 | 产品质量；标签或分析 | kg 产品和养分基准 | `fao-good-agricultural-practices` |
| `calc_01319_perennial_allocation` | 建立期和多年生生产 | 按披露结果年限和接收产量分配共用建立量，并保留源数据 | 建立量；结果年限；产量 | 每 kg 水果的分配量 | `iso-14044-allocation` |
| `calc_01319_mass_reconciliation` | 采收和交付处理 | `harvested mass = accepted mass + rejected mass + declared other destination mass` | 批次称量；去向 | 核对后的数量 | `codex-fresh-fruits-vegetables-cxc-53` |
| `calc_01319_emission_factor` | 栽培排放 | 将声明因子应用于养分/植保基准并保留物质、介质、因子和不确定性 | 投入基准；因子；介质 | 基本流排放 | `ipcc-2019-refinement-agriculture` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_01319_identity` | 产品和材料投入 | 声明实际水果、路线、等级和已知时的材料身份必须保持明确。 | 产品说明、发票、标签 |
| `dq_01319_temporal` | 作物周期和果园年度 | 覆盖完整声明周期或年度，并披露缺失事件、异常天气和非结果期。 | 季节日志、植株登记、例外说明 |
| `dq_01319_mass_balance` | 采收、接收、淘汰和共产品 | 核对批次质量并记录超出场址 QA 容差的差异。 | 称量、批次票、去向记录 |
| `dq_01319_water_energy` | 水和能源 | 优先使用计量和发票；估算时说明计算基准、水源、载能体和避免重复计数控制。 | 计量、发票、水量平衡、燃料日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_01319_reference_qualifiers` | 参考产品 | 缺少实际水果、路线、农场交付状态、成熟度/等级或接收产品基准时拒绝数据包；平台是后续身份事项，不得改变产品语义。 | `codex-fresh-fruits-vegetables-cxc-53` |
| `validation_01319_cycle_completeness` | 过程图和协议 | 检查建立、栽培和采收是否纳入或有理由排除，并检查一年生/多年生时间基准一致。 | `fao-good-agricultural-practices` |
| `validation_01319_mass_balance` | 采收和废物行 | 归一化到 1 kg 接收水果前，检查采收、接收、淘汰和其他去向。 | `codex-fresh-fruits-vegetables-cxc-53` |
| `validation_01319_allocation_disclosure` | 共用投入和共产品 | 检查共用记录、建立期分配、共产品和淘汰去向是否声明分配基准。 | `iso-14044-allocation` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜完整其他热带和亚热带水果的前景农业生产数据集 |
| downstream_use | 作为农场交付水果建模的 `secondary_dataset`；完成区域代表性和身份审查后才可作为 `background_dataset` |
| allowed_use | 作物周期、果园年度、农场交付比较、热点筛查和保留声明水果身份与限定信息的下游研究 |
| excluded_use | 零售/消费者足迹、没有新增加工清单的加工水果、无关水果类别替代，以及缺少接收产品或路线基准的数据集 |
| required_metadata | 实际水果身份；已知时的品种/种；地区；路线；生产期；建立期纳入情况；接收产量；等级/成熟度；水源；养分基准；淘汰去向；参考产品限定信息 |
| required_quality_disclosure | 时间覆盖、场址范围、实测/计算值、分配基准、因子来源、不确定性、身份证据缺口和省略过程 |
| update_trigger | 获得核验参考流身份、Flow Set taxonomy 变化、路线或分配方法实质变化、新区域证据或农场交付质量定义修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-good-agricultural-practices` | official_guidance | FAO 良好农业实践指南 | 建立、养分、水、植保和记录 |
| `ipcc-2019-refinement-agriculture` | method_factor | IPCC 2019 改进版农业排放因子方法 | 土壤和残余物排放计算 |
| `codex-fresh-fruits-vegetables-cxc-53` | official_guidance | Codex CXC 53 新鲜水果和蔬菜卫生操作规范 | 采收、处理、批次和质量 |
| `iso-14044-allocation` | standard | ISO 14044 生命周期分配和边界披露原则 | 分配和边界规则 |
