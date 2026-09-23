---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.asparagus
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 芦笋

## 1. 范围与适用性

本 PCR 覆盖多年生芦笋园建植、年度田间管理、采收、分级、修整、可选清洗与包装，直至新鲜未加工芦笋在农场门交付。建植负荷应与同一芦笋园的生产年份关联。苗圃种植材料商品生产、加工芦笋、农场门后的分销零售、烹饪和消费不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.asparagus |
| classification_refs | CPC 3.0:01211 Asparagus |
| covered_products | 农场门交付的新鲜未加工绿、白或紫色芦笋嫩茎 |
| excluded_products | 芦笋种子、作为种植材料销售的根冠或移栽苗，以及罐藏、冷冻、腌制、干燥、熟制或其他加工芦笋 |
| representative_product | 按声明市场要求修整并分级的商品新鲜芦笋嫩茎 |
| production_route | 多年生芦笋园建植、年度受控生产、重复采收和农场门准备 |
| market_state | 农场门新鲜未加工农产品，散装或使用声明的一次包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门商品新鲜芦笋嫩茎 |
| How much | 1,000 kg |
| How well | 新鲜、未加工，并符合声明的等级、颜色、尺寸、修整和缺陷标准 |
| How long or cycle | 一个声明采收年，建植负荷按声明的芦笋园生产寿命归属 |
| reference_flow_link | `asparagus_farm_gate_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Asparagus `3a8d74d8-77a2-4242-b9d3-c0d1b2141b81` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 农场门交付；生产地理范围；生产年份和园龄；颜色路线（绿色/白色/紫色）；采收期；等级与尺寸标准；修整状态；是否清洗；包装状态 |
| 绑定模式 | `fixed` |
| 流集 |  |
| 流集版本 |  |
| 流集分组 |  |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收和农场门芦笋 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分开记录采收毛重、商品鲜重、拒收鲜重和干残体质量。 |
| `area_normalization` | 建植和田间年度记录 | 面积和质量 | ha 和 kg | 先按田块和年份记录，再按同一芦笋园同一年份的商品产量归一化。 |
| `nutrient_basis` | 肥料投入 | 质量 | kg N、kg P2O5 或 kg K2O | 仅使用有文件证明的养分浓度换算产品质量，并保留各养分计量基准。 |
| `planting_material_count` | 根冠和移栽苗 | 件数 | plant | 记录成活种植单元；无文件化换算时不得从株数推算质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收根冠或移栽苗的已整备农田，并披露先前土地利用和排除的种植前作业 |
| starting_condition_role | 多年生芦笋园建植及生产寿命归属的起点 |
| product_classification_scope | CPC 3.0:01211 新鲜芦笋至农场门交付 |
| recursive_input_rule | 外购芦笋种植材料作为独立上游产品投入连接一次，不在本 PCR 内重新构建其生产。 |
| upstream_dataset_requirement | 使用时须连接种植材料、肥料、土壤改良剂、植保产品、灌溉水、能源和包装的上游数据集。 |
| disclosure | 披露先前土地利用、建植年、园龄、生产寿命假设、灌溉系统、养分基准、残体去向、采收与分级方法、清洗、预冷和包装。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_stand` | 建植和生产年份 | 纳入建植和所代表生产年份；按声明园龄寿命和产量归属建植负荷，不得重复计入补植。 | `osu-asparagus-production`; `uc-asparagus-production` |
| `boundary_farm_gate` | 采收和处理 | 边界终止于商品新鲜芦笋在农场门交付；交付前发生的分级、修整、清洗、预冷和包装须纳入。 | `penn-state-asparagus-production`; `umn-asparagus-harvest` |
| `boundary_field_emissions` | 受控土壤和残体 | 使用一个声明方法纳入适用的直接和间接氮排放及还田残体氮，避免重复计算。 | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | 茎叶和拒收物 | 区分还田、饲料、堆肥、处理、生产性利用和处置；去向不明的残体不得视为共产品。 | `umn-asparagus-harvest`; `ipcc-2019-managed-soils` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stand_establishment` | 多年生芦笋园建植 | required | 每个建植芦笋园一次 | 前景建植 | 建成生产面积 |
| `annual_field_management` | 芦笋年度田间管理 | required | 每个代表的生产年份 | 前景受控生物生产 | 管理公顷年和待采嫩茎质量 |
| `harvest_and_farm_gate_preparation` | 采收和农场门准备 | required | 每个代表的采收年份 | 前景采收、分级和交付 | 1,000 kg 商品新鲜芦笋 |

### 过程：多年生芦笋园建植（`stand_establishment`）

#### 输入

##### 产品流

###### 芦笋根冠或移栽苗（`planting_material_input`）

按类型和田块记录进入农田的成活根冠或移栽苗。

- 选定流：Asparagus crowns or transplants
- 流属性/单位：Number of items / plant
- 数量规则：按类型和田块计数成活种植单元。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每建植公顷；使用同一芦笋园寿命期产量换算为每 1,000 kg 商品芦笋
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`osu-asparagus-production`; `penn-state-asparagus-production`
- 数量范围：有来源的种植密度
  - 范围角色：典型范围（`typical_range`）
  - 下限：14800
  - 上限：34600
  - 单位：plants/ha
  - 基准：每建植公顷的成活种植单元
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`osu-asparagus-production`; `penn-state-asparagus-production`

###### 农业养分与肥料投入（`stand_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每建植公顷；使用同一芦笋园寿命期产量换算为每 1,000 kg 商品芦笋
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`osu-asparagus-production`; `uc-ipm-asparagus-fertilization`
- 数量范围：建植氮投入筛查范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：34
  - 上限：224
  - 单位：kg N/ha
  - 基准：建植年田块
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`osu-asparagus-production`; `uc-ipm-asparagus-fertilization`

- 数量范围：土壤测试相关磷投入范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：0
  - 上限：224
  - 单位：kg P2O5/ha
  - 基准：建植田块
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`osu-asparagus-production`

- 数量范围：暂定建植钾筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：300
  - 单位：kg K2O/ha
  - 基准：等待土壤测试和施用记录的宽泛首轮建植田块范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 建植灌溉水（`establishment_irrigation_water`）

建植灌溉与降水和年度灌溉分开记录。

- 选定流：Irrigation water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：按田块和水源计量供水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每建植公顷
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_establishment_records`
- 来源：`uc-ipm-asparagus-irrigation`
- 数量范围：暂定建植灌溉筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：15240
  - 单位：m3/ha established
  - 基准：等待田间计量记录的宽泛首轮建植用水范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 建成的生产性芦笋园（`established_stand_output`）

该内部交接记录验收后的生产面积，不是参考产品。

- 选定流：Established productive asparagus stand
- 流属性/单位：Area / ha
- 数量规则：扣除失败植株并核对补植后的验收面积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每次建植活动
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_establishment_records`
- 来源：`osu-asparagus-production`

##### 废物流

##### 基本流

### 过程：芦笋年度田间管理（`annual_field_management`）

#### 输入

##### 产品流

###### 农业养分与肥料投入（`annual_field_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每管理公顷年；使用同一田块年产量换算为每 1,000 kg 商品芦笋
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_year_records`
- 来源：`osu-asparagus-production`; `uc-ipm-asparagus-fertilization`
- 数量范围：生产园年度氮投入范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：78
  - 上限：168
  - 单位：kg N/ha-year
  - 基准：生产田块年
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`osu-asparagus-production`; `uc-ipm-asparagus-fertilization`

- 数量范围：暂定年度磷筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：300
  - 单位：kg P2O5/ha-year
  - 基准：等待土壤测试和施用记录的宽泛首轮生产田块年范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

- 数量范围：暂定年度钾筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：500
  - 单位：kg K2O/ha-year
  - 基准：等待土壤测试和施用记录的宽泛首轮生产田块年范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 年度灌溉水（`annual_irrigation_water`）

供水量与降水分开记录，并声明水源和灌溉技术。

- 选定流：Irrigation water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`irrigation-water`
- 数量规则：按田块年计量灌溉供水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每管理公顷年；使用同一田块年产量换算为每 1,000 kg 商品芦笋
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_year_records`
- 来源：`uc-ipm-asparagus-irrigation`
- 数量范围：区域年度灌溉范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：4570
  - 上限：15240
  - 单位：m3/ha-year
  - 基准：有记录产区的年度灌溉量
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`uc-ipm-asparagus-irrigation`

###### 外购田间电力（`field_electricity_input`）

灌溉和田间作业电力与水量和燃料分开记录。

- 选定流：Purchased electricity
- 流属性/单位：Energy / kWh
- 绑定模式：`parameterized`
- 流集：`flow-set.energy-supply`
- 流集版本：`0.2.0`
- 流集分组：`electricity-supply`
- 数量规则：按田块年计量或分配电力，避免重复计算抽水用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每管理公顷年；使用同一田块年产量换算为每 1,000 kg 商品芦笋
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_year_records`
- 来源：
- 数量范围：暂定电力筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：kWh/ha-year
  - 基准：取决于扬程和机械化水平的宽泛初筛范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 田间待采芦笋嫩茎（`harvest_ready_spears_output`）

该内部交接是采收前的新鲜嫩茎质量，尚不是农场门商品。

- 选定流：Harvest-ready asparagus spears in field
- 流属性/单位：Mass / kg fresh spears
- 数量规则：采收毛重加单独测得的田间损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每管理公顷年；使用同一田块年产量换算为每 1,000 kg 商品芦笋
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_records`
- 来源：`osu-asparagus-production`; `uc-small-farms-asparagus`
- 数量范围：生产年份产量筛查范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：560
  - 上限：4480
  - 单位：kg fresh spears/ha-year
  - 基准：早期至成熟生产年份
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`osu-asparagus-production`; `uc-small-farms-asparagus`

##### 废物流

###### 衰老茎叶和芦笋田间残体（`fern_residue_output`）

按去向记录残体质量，区分还田、移除、焚烧、堆肥和其他处理。

- 选定流：Senesced asparagus fern and field residue
- 流属性/单位：Mass / kg dry matter
- 数量规则：按去向计量或估算干物质和氮含量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每管理公顷年
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_year_records`
- 来源：`umn-asparagus-harvest`; `ipcc-2019-managed-soils`
- 数量范围：暂定茎叶残体筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：15000
  - 单位：kg dry matter/ha-year
  - 基准：等待干物质和去向记录的宽泛首轮衰老生物量范围
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 受控土壤直接氧化亚氮（`direct_n2o_air_output`）

合成氮、有机氮和还田残体氮产生的直接 N2O 作为独立大气输出计算。

- 选定流：Nitrous oxide to ambient air
- 流属性/单位：Mass / kg N2O
- 数量规则：采用声明适用的 IPCC 或地区方法并保留 N2O-N 至 N2O 换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1,000 kg 商品芦笋；氮投入仅作为计算驱动因素
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_field_year_records`
- 来源：`ipcc-2019-managed-soils`
- 数量范围：受控土壤 N2O 的方法筛查区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg N2O/ha-year
  - 基准：等待场址氮活动数据和因子选择的非负首轮区间
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：采收和农场门准备（`harvest_and_farm_gate_preparation`）

#### 输入

##### 产品流

###### 待采芦笋嫩茎（`harvest_ready_spears_input`）

使用同一田块年的内部交接量并与产品和损失核对。

- 选定流：Harvest-ready asparagus spears in field
- 流属性/单位：Mass / kg fresh spears
- 数量规则：损失发生前等于对应的 `harvest_ready_spears_output`。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每次采收活动
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_records`
- 来源：`osu-asparagus-production`; `umn-asparagus-harvest`

###### 清洗水（`washing_water_input`）

仅在农场门交付前清洗时纳入补充水。

- 选定流：Washing water
- 流属性/单位：Volume / m3
- 绑定模式：`parameterized`
- 流集：`flow-set.water-use`
- 流集版本：`0.2.0`
- 流集分组：`process-water`
- 数量规则：计量补充水和循环水并保留废水关联。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品芦笋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 来源：
- 数量范围：暂定清洗水筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：m3/1,000 kg marketable asparagus
  - 基准：等待处理计量记录的宽泛首轮补充水和循环水范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 一次包装（`primary_packaging_input`）

按材料记录随产品交付的柔性绑带、套袋和袋；刚性托盘和周转箱单独记录。

- 选定流：Flexible primary packaging for fresh asparagus
- 流属性/单位：Mass / kg packaging
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`flexible-packaging`
- 数量规则：计量用于交付产品的包装，并单独识别可回用包装。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 商品芦笋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 来源：`penn-state-asparagus-production`
- 数量范围：暂定柔性包装筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg/1,000 kg marketable asparagus
  - 基准：等待材料记录的宽泛首轮柔性包装用量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 刚性一次包装（`rigid_packaging_input`）

按材料和回用周转次数记录随产品交付的刚性托盘和周转箱。

- 选定流：Rigid primary packaging for fresh asparagus
- 流属性/单位：Mass / kg packaging
- 绑定模式：`parameterized`
- 流集：`flow-set.packaging-function`
- 流集版本：`0.2.0`
- 流集分组：`rigid-container-packaging`
- 数量规则：计量用于交付产品的包装，并单独记录可回用容器的周转次数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 商品芦笋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 来源：`penn-state-asparagus-production`
- 数量范围：暂定刚性包装筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg/1,000 kg marketable asparagus
  - 基准：等待材料和周转记录的宽泛首轮刚性包装用量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 农场门商品新鲜芦笋（`asparagus_farm_gate_output`）

该输出是按声明农场门交付的经修整、分级、新鲜、未加工芦笋。

- 选定流：Asparagus `3a8d74d8-77a2-4242-b9d3-c0d1b2141b81`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式：`fixed`
- 数量规则：扣除采收、修整和拒收损失后的核验秤重质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 农场门商品新鲜芦笋
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_handling_records`
- 来源：`penn-state-asparagus-production`; `osu-asparagus-production`

##### 废物流

###### 拒收和修整芦笋（`rejected_asparagus_output`）

按物理状态和去向记录拒收嫩茎与修整物。

- 选定流：Rejected and trimmed fresh asparagus material
- 流属性/单位：Mass / kg fresh material
- 数量规则：计量拒收和修整质量并声明还田、饲料、堆肥、处理或处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 商品芦笋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_handling_records`
- 来源：`osu-asparagus-production`
- 数量范围：暂定拒收筛查范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：300
  - 单位：kg/1,000 kg marketable asparagus
  - 基准：等待等级和修整记录的宽泛初筛范围
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_establishment_over_life` | 芦笋园建植 | 按实际代表的生产年份和商品产量归属建植负荷；披露寿命、失败面积、补植和提前终止，不得重复计算。 | `osu-asparagus-production`; `uc-asparagus-production` |
| `allocation_market_and_rejects` | 采收准备 | 将嫩茎投入与商品芦笋、拒收物和修整物核对；除非有产品规格、买方、数量和去向证明，否则拒收物按废物处理。 | `osu-asparagus-production` |
| `allocation_secondary_output` | 价值化残体 | 对有意供应的次级产品报告数量和交接，并采用明确论证的分配或替代方法；不得默认采用经济价值或避免负荷。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_establishment_records` | `stand_establishment` | 种植材料、养分、水和验收面积 | 田间、采购、施用和计量记录 | field_id; date; planting_material_type; units_planted; failed_units; product_mass; nutrient_concentration; irrigation_volume; established_area | 将采购与施用记录核对到各建植田块 | plant; kg; m3; ha | 每次作业 | 完整建植活动 | 每个代表田块 | 按田块汇总并保留失败和补植 | 发票、标签、仪表、田块图和验收记录 |
| `cp_field_year_records` | `annual_field_management` | 养分、水、电力、残体和排放活动 | 田块年度日志、发票、仪表和施用记录 | field_id; year; stand_age; area; product_identity; product_mass; nutrient_concentration; irrigation_volume; electricity; residue_mass; dry_matter; residue_nitrogen; destination | 将全部记录核对至同一田块年 | ha; kg; kg nutrient; m3; kWh | 每次事件及年度结束 | 含采后茎叶管理的全年 | 每个代表生产田块 | 先按田块年汇总再按参考流归一化 | 发票、标签、分析、仪表和去向记录 |
| `cp_harvest_records` | `harvest_and_farm_gate_preparation` | 待采与采收毛重嫩茎 | 采收日志和秤重记录 | field_id; harvest_date; harvest_pass; gross_mass; field_loss; harvest_method; area | 每个采收批次关联田块和日期 | kg; ha | 每次采收 | 完整采收期 | 每个代表田块 | 按田块年汇总，归一化前不混合园龄 | 校准秤和采收票据 |
| `cp_handling_records` | `harvest_and_farm_gate_preparation` | 水、包装、商品输出和拒收物 | 批次、秤重、仪表、包装和废物记录 | lot_id; source_field; gross_input; wash_water; packaging_material; packaging_mass; marketable_mass; grade; colour; trim_state; reject_mass; reject_reason; destination | 保持至交付的批次质量和公用工程核对 | kg; m3 | 每批或班次 | 完整采收包装期 | 每条代表处理线 | 聚合前核对投入、产品、拒收和质量变化 | 校准秤、仪表、等级检验和去向凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_establishment_attribution` | 建植 | 建植量除以同一芦笋园归属的寿命期商品产量，并用实际生产年替换预期年。 | 建植量；批次；生产寿命假设；年度产量 | 每 kg 商品芦笋建植负荷 | `osu-asparagus-production`; `uc-asparagus-production` |
| `calc_nutrient_equivalent` | 肥料投入 | 产品质量乘以有文件证明的养分质量分数，得到 kg N、P2O5 或 K2O。 | 产品质量；养分浓度；面积 | 养分当量投入 | `uc-ipm-asparagus-fertilization`; `osu-asparagus-production` |
| `calc_field_normalization` | 年度投入 | 完整田块年数量除以对应田块年的商品产量。 | 田块年数量；商品质量 | 每 1,000 kg 参考产品数量 |  |
| `calc_product_balance` | 采收和处理 | 采收毛重加减实测质量变化等于商品产品加拒收物和修整物。 | 毛重、商品、拒收、修整和质量变化记录 | 核对后的输出量 |  |
| `calc_managed_soil_emissions` | 受控土壤氮排放 | 对合成氮、有机氮和还田残体氮采用声明适用的 IPCC 或地区公式，保留换算并避免重复计算。 | 氮活动数据；因子；气候和管理限定 | 直接和间接氮排放 | `ipcc-2019-managed-soils` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留农场门状态、颜色路线、等级、尺寸、修整、清洗、包装、地理范围、年份和园龄。 | 批次规格和田间记录 |
| `dq_period_linkage` | 建植和年度管理 | 每个田块年关联一个建植批次，并披露补植、废弃、生产年和终止。 | 田块图、种植记录和生产历史 |
| `dq_mass_balance` | 采收和处理 | 核对待采、采收毛重、商品、拒收和修整质量并解释差异。 | 校准秤和批次记录 |
| `dq_input_completeness` | 全部前景投入 | 对每个田块或批次保留养分基准、灌溉水源、电力覆盖、包装材料和残体去向。 | 发票、标签、仪表和日志 |
| `dq_method_transparency` | 计算 | 记录方法版本、因子、生产寿命分母、排除项和暂定估算替换情况。 | 计算文件和审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考产品 | 使用已核验 Asparagus UUID、质量流属性、质量单位组、kg 和全部必需限定信息。 |  |
| `validation_handoffs` | 过程图 | 将建植关联至各田块年，并使待采输出在损失前等于采收投入。 |  |
| `validation_mass_balance` | 采收和处理 | 在声明不确定度内将商品输出、拒收物、修整物和质量变化与采收毛重核对。 |  |
| `validation_nutrients_emissions` | 年度管理 | 区分 N、P2O5 和 K2O，记录排放因子，并防止还田残体氮重复计算。 | `ipcc-2019-managed-soils` |
| `validation_parameterized_flows` | 参数化流 | 发布最终过程数据集前，将每个 Flow Set 解析为兼容的具体 UUID。 |  |
| `validation_unmapped_flows` | 未映射流 | 种植材料、内部芦笋园和嫩茎状态、茎叶残体及拒收物保持显式覆盖要求，直至提供精确兼容身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门新鲜芦笋前景农业生产数据集 |
| downstream_use | 经审查发布后的 `secondary_dataset`；`background_dataset` |
| allowed_use | 地理范围、园龄、产品状态和路线兼容的新鲜芦笋生产与供应链研究 |
| excluded_use | 苗圃种植材料、加工芦笋、农场后分销或忽略多年生建植的比较 |
| required_metadata | 地理范围；田块面积；建植批次；园龄；年份；生产寿命假设；颜色路线；采收和等级；灌溉；养分基准；残体去向；清洗；预冷；包装；农场门交付 |
| required_quality_disclosure | 一手数据覆盖；秤与仪表质量；寿命归属；质量平衡；数据缺口；暂定范围；排放方法；Flow Set 解析；未映射身份 |
| update_trigger | 已核验身份、经审查定量证据、产品规格、寿命归属或受控土壤方法发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `osu-asparagus-production` | extension_guidance | Oklahoma State University Extension, Asparagus Production, HLA-6018, https://extension.okstate.edu/fact-sheets/asparagus-production | 园龄、建植、密度、养分、采收、产量和拒收状态 |
| `uc-ipm-asparagus-irrigation` | extension_guidance | University of California Statewide IPM Program, Asparagus: Irrigation, https://ipm.ucanr.edu/agriculture/asparagus/irrigation/ | 灌溉系统和年度供水范围 |
| `uc-ipm-asparagus-fertilization` | extension_guidance | University of California Statewide IPM Program, Asparagus: Fertilization, UC ANR Publication 3435, https://ipm.ucanr.edu/agriculture/asparagus/fertilization/ | 建植和维持养分范围 |
| `uc-asparagus-production` | extension_guidance | University of California ANR, Asparagus Production in California, Publication 7234, https://anrcatalog.ucanr.edu/pdf/7234.pdf | 多年生生产路线和建植边界 |
| `uc-small-farms-asparagus` | extension_guidance | University of California Small Farms Network, Asparagus, https://ucanr.edu/program/uc-small-farms-network/asparagus | 各生产年份产量变化 |
| `penn-state-asparagus-production` | extension_guidance | Penn State Extension, Asparagus Production, https://extension.psu.edu/asparagus-production | 鲜销状态、种植密度、等级和包装 |
| `umn-asparagus-harvest` | extension_guidance | University of Minnesota Extension, Harvesting Asparagus, https://extension.umn.edu/agriculture/specialty-crops/vegetable-farming/harvesting-asparagus | 采收边界和采后茎叶管理 |
| `ipcc-2019-managed-soils` | official_guidance | IPCC, 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 受控土壤氮排放和残体氮 |
