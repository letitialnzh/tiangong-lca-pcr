---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peaches-and-nectarines
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 桃和油桃

## 1. 范围与适用性

本 PCR 适用于结果期果园生产的桃和油桃（Prunus persica），产品在声明的农场交接点或首次市场交接点以新鲜、可销售水果状态交付。

范围包括果园管理、灌溉、养分和作物保护投入、修剪与疏果、采收、田间处理，以及交接点前的场内分选、冷却和包装。默认排除苗木生产、果园建园、交接点后运输、零售、消费者使用和终端处理；加工、干制、罐藏、冷冻、榨汁或其他转化水果也排除。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.peaches-and-nectarines |
| classification_refs | CPC 3.0 01345 — Peaches and nectarines |
| covered_products | 果园生产的散装或包装鲜桃和鲜油桃，在声明首次市场交接点交付 |
| excluded_products | 苗木；除非年化的果园建园；加工水果；下游配送、零售、消费者使用和终端处理 |
| representative_product | 1 kg 净可销售鲜桃或鲜油桃，声明物种、品种、成熟度/质量等级、生产体系、地理位置和收获年份 |
| production_route | 受管理的多年生果园生产 → 采收与田间处理 → 可选场内分选、冷却和包装 |
| market_state | 声明交接点的新鲜、可销售采收水果；包装不计入产品质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明的农场交接点或首次市场交接点的 1 kg 净可销售鲜桃或鲜油桃 |
| How much | 1 kg 净产品输出；不包括次品、田间损失、过程拒收物和包装 |
| How well | 声明物种、品种、新鲜状态、采收成熟度、质量/市场等级、生产体系和产品状态 |
| How long or cycle | 一个声明作物周期和收获季；披露报告期、果园树龄和年化约定 |
| reference_flow_link | 语义参考产品如下；本草稿中/未映射 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 可销售鲜桃或鲜油桃（语义候选；） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | species; cultivar; fresh market state; harvest maturity; quality or market grade; production system; production geography; harvest year or crop cycle; declared hand-off; net product-mass basis; on-site sorting/cooling/packing status |
| 绑定模式 | 省略：参考产品保持未映射，直到前景身份解析完成 |

构建前景数据包时，所有必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | 按净可销售水果质量归一化，不包括容器、次品和废物水果。 |
| `water_volume` | irrigation and washing water | Volume | m3 | 将计量或有记录依据的水量统一为 m3。 |
| `nutrient_basis` | fertilizer and amendments | Product mass and nutrient basis | kg product; kg N/P/K | 记录实际产品和声明或实测养分基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 准备开展声明作物周期的结果期果园区块 |
| starting_condition_role | 固定年度前景边界；已有果园资本和此前建园默认排除，除非声明年化情景 |
| product_classification_scope | 从果园生产到声明交接点的栽培鲜桃和鲜油桃 |
| recursive_input_rule | 不递归建模同类别采收水果；独立包装路线购买采收水果时记录上游水果数据集 |
| upstream_dataset_requirement | 外购投入使用关联背景或二级数据集，并解析身份和地理位置 |
| disclosure | 声明果园树龄、结果面积、物种/品种、灌溉水源、生产体系、作物周期、产量、损失去向和场内处理 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_condition` | orchard production | 从结果期果园作物周期开始；建园和苗木默认排除，除非年化并披露。 | `source_ucanr_peach_nectarine_cultural`; `source_iso_14044` |
| `boundary_management_and_harvest` | orchard and harvest | 纳入作物管理、灌溉、养分和作物保护、修剪/疏果、采收和田间处理。 | `source_ucanr_peach_nectarine_cultural`; `source_ucanr_peach_fertilizer` |
| `boundary_optional_packhouse` | on-site conditioning | 交接点前发生时纳入场内分选、冷却和包装，否则披露为下游。 | `source_usda_ams_fresh_fruit_grades` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `orchard_management` | 结果期果园管理 | required | 每个声明作物周期 | 受管理的生物生产 | 每作物周期/每 1 kg 净输出 |
| `harvest_field_handling` | 采收与田间处理 | required | 声明输出的所有采收水果 | 移除成熟水果并转移状态 | 每项采收作业/每 1 kg 净输出 |
| `onsite_sort_cool_pack` | 场内分选、冷却和包装 | conditional | 交接点前实施时 | 处理并呈现市场水果 | 每设施运行/每 1 kg 净输出 |

### 过程：结果期果园管理 (`orchard_management`)

#### 输入

##### 产品流

###### 灌溉水 (`orchard_irrigation_water`)

供给灌溉水作为产品投入跨越果园边界，并与直接环境取水区分。

- 选定流: 用于作物生产的灌溉供水（语义候选；）
- 流属性/单位: Volume / m3
- 绑定模式: `parameterized`
- 流集: `flow-set.water-use`
- 流集版本: `0.2.0`
- 流集分组: `irrigation-water`
- 数量规则: 按作物周期分配的计量或供应商记录水量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_orchard_inputs`
- 来源: `source_ucanr_peach_nectarine_cultural`
- 数量范围: 暂定灌溉筛选范围
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 50
  - 上限: 600
  - 单位: m3
  - 基准: 每 1,000 kg 净可销售水果输出
  - 基准类型: 过程输出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 农业养分与肥料投入（`orchard_management_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售水果输出
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_inputs`
- 来源：`source_ucanr_peach_fertilizer`

###### 果园机械燃料 (`orchard_machinery_fuel`)

记录拖拉机、喷雾机、割草机或其他移动果园机械在场内消耗的燃料。

- 选定流: 果园作业移动机械燃料（语义候选；）
- 流属性/单位: Fuel energy or mass/volume / MJ, L, or kg
- 绑定模式: `parameterized`
- 流集: `flow-set.energy-supply`
- 流集版本: `0.2.0`
- 流集分组: `mobile-machinery-fuel`
- 数量规则: 按作物周期分配的燃料领用记录或设备日志
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_orchard_inputs`
- 来源: `source_ucanr_nectarine_ipm`

##### 废物流

##### 基本流

###### 果园土地占用 (`orchard_land_occupation`)

记录果园面积和占用时间，并将其分配到声明作物周期。

- 选定流: 结果期果园土地占用（语义候选；）
- 流属性/单位: Area-time / m2*a
- 数量规则: 果园面积乘以占用时间并分配到作物周期
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_orchard_inputs`
- 来源: `source_ucanr_peach_nectarine_cultural`

#### 输出

##### 产品流

###### 达到采收成熟度的水果 (`fruit_at_harvest_maturity`)

达到声明采收成熟度的水果作为可采收毛作物离开果园管理过程。

- 选定流: 达到采收成熟度的桃或油桃，毛作物输出（语义候选；）
- 流属性/单位: Mass / kg
- 数量规则: 来自果园和采收记录的毛作物质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 来源: `source_usda_ams_fresh_fruit_grades`; `source_ucanr_peach_nectarine_cultural`

##### 废物流

###### 果园残余物和去除水果 (`orchard_residues`)

修剪木、疏果和其他残余物作为废物或单独声明的回收流记录。

- 选定流: 果园修剪、疏果和作物残余物（语义候选；）
- 流属性/单位: Mass / kg wet or fresh mass
- 数量规则: 按作物周期和去向称量或记录残余物质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_orchard_inputs`
- 来源: `source_ucanr_peach_nectarine_cultural`

##### 基本流


### 过程：采收与田间处理 (`harvest_field_handling`)

#### 输入

##### 产品流

###### 可采收水果 (`harvestable_fruit`)

达到声明采收成熟度的毛水果在扣除损失前进入采收与田间处理。

- 选定流: 用于采收的达到成熟度的桃或油桃（语义候选；）
- 流属性/单位: Mass / kg
- 数量规则: 可供采收作业使用的毛水果质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 来源: `source_ucanr_peach_nectarine_cultural`

###### 采收机械燃料 (`harvest_machinery_fuel`)

记录交接点前采收机械或田间运输设备消耗的燃料。

- 选定流: 采收和田间处理移动机械燃料（语义候选；）
- 流属性/单位: Fuel energy or mass/volume / MJ, L, or kg
- 绑定模式: `parameterized`
- 流集: `flow-set.energy-supply`
- 流集版本: `0.2.0`
- 流集分组: `mobile-machinery-fuel`
- 数量规则: 按采收作业分配的燃料日志或领用记录
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 来源: `source_ucanr_peach_nectarine_cultural`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 送往处理的采收水果 (`harvested_fruit`)

采收收集的水果作为毛采收水果离开并进入下一个声明过程。

- 选定流: 用于处理的毛采收桃或油桃（语义候选；）
- 流属性/单位: Mass / kg
- 数量规则: 称量的毛采收质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 来源: `source_ucanr_peach_nectarine_cultural`

##### 废物流

###### 采收损失和受损水果 (`harvest_losses`)

采收期间掉落、受损、腐败或未采集的水果作为废物记录并注明去向。

- 选定流: 桃或油桃采收损失和受损水果（语义候选；）
- 流属性/单位: Mass / kg
- 数量规则: 按称量、计数换算或有记录依据的采收损失估算
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_records`
- 来源: `source_ucanr_peach_nectarine_cultural`

##### 基本流


### 过程：场内分选、冷却和包装 (`onsite_sort_cool_pack`)

#### 输入

##### 产品流

###### 用于处理的毛采收水果 (`gross_fruit_to_packhouse`)

当交接点前纳入分选、冷却或包装时，毛采收水果进入本条件性过程。

- 选定流: 用于场内处理的毛采收桃或油桃（语义候选；）
- 流属性/单位: Mass / kg
- 数量规则: 纳入设施或包装线接收的质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packhouse_records`
- 来源: `source_usda_ams_fresh_fruit_grades`

###### 冷却和包装用电 (`packhouse_electricity`)

记录边界内冷却、分选线、照明和包装设备用电。

- 选定流: 场内水果处理和包装的电力供应（语义候选；）
- 流属性/单位: Energy / kWh
- 绑定模式: `parameterized`
- 流集: `flow-set.energy-supply`
- 流集版本: `0.2.0`
- 流集分组: `electricity-supply`
- 数量规则: 设施电表记录或有记录依据的吞吐量分配
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packhouse_records`
- 来源: `source_usda_ams_fresh_fruit_grades`

###### 清洗或工艺用水，条件性 (`packhouse_process_water`)

仅当清洗或湿法处理在交接点前发生时记录用水。

- 选定流: 场内水果处理工艺用水（语义候选；）
- 流属性/单位: Volume / m3
- 绑定模式: `parameterized`
- 流集: `flow-set.water-use`
- 流集版本: `0.2.0`
- 流集分组: `process-water`
- 数量规则: 按纳入运行分配的计量或供应商记录水量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packhouse_records`
- 来源: `source_usda_ams_fresh_fruit_grades`

###### 初级包装材料，条件性 (`primary_packaging_materials`)

当初级容器或包装构成交接点新鲜水果市场状态时记录。

- 选定流: 鲜桃和鲜油桃的初级包装功能（语义候选；）
- 流属性/单位: Packaging mass or service / kg or item
- 绑定模式: `parameterized`
- 流集: `flow-set.packaging-function`
- 流集版本: `0.2.0`
- 流集分组: `rigid-container-packaging`
- 数量规则: 分配至纳入产品的实际材料质量或容器数量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packhouse_records`
- 来源: `source_iso_14044`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交接点的净可销售鲜果 (`marketable_fresh_fruit`)

通过声明成熟度和市场质量筛选的水果作为 PCR 参考产品离开；包装和拒收物不计入。

- 选定流: 声明首次市场交接点的可销售鲜桃或鲜油桃（语义候选；）
- 流属性/单位: Mass / kg
- 数量规则: 纳入分选和处理后的净称量产品质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packhouse_records`
- 来源: `source_usda_ams_fresh_fruit_grades`

##### 废物流

###### 分选拒收物和包装损失 (`packhouse_rejects`)

分选、冷却或包装中拒收的水果作为废物记录并注明下游去向。

- 选定流: 桃或油桃分选拒收物和场内包装损失（语义候选；）
- 流属性/单位: Mass / kg
- 数量规则: 按设施运行和去向称量或记录拒收质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 净可销售水果输出
- 基准类型: 过程输出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packhouse_records`
- 来源: `source_usda_ams_fresh_fruit_grades`; `source_iso_14044`

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | separable blocks, species, cultivars, or runs | 记录允许时分别测量桃和油桃活动以避免分配。 | `source_iso_14044` |
| `allocation_shared_crop_output` | jointly managed outputs | 无法细分时按有记录依据的净可销售质量分配，并披露组合、基准和敏感性。 | `source_iso_14044` |
| `allocation_residue_route` | culls, residues, and diverted fruit | 无单独产品交接依据时将次品和残余物作为废物，不自动施加避免负荷信用。 | `source_iso_14044` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_orchard_inputs` | `orchard_management` | orchard inputs, land, water, residues | invoices, meters, spray logs, field records | block_id; species; cultivar; area; irrigation; electricity; fuel; fertilizer and nutrient basis; crop protection; residues | Collect primary records and reconcile to block and cycle | kg; L; m3; kWh; MJ; m2 | Each application or meter period | Complete crop cycle and harvest year | Each block or documented aggregation | Sum by block and cycle; disclose shared-record allocation | invoices; meters; logs; area records |
| `cp_harvest_records` | `harvest_field_handling` | gross harvest, fuel, losses | harvest tickets, weighbridge, bin and fuel logs | block_id; harvest date; species; cultivar; gross mass; fuel; damaged fruit; destination | Weigh and reconcile to receiving and loss records | kg; L; MJ | Each lot or shift | Harvest window in crop cycle | Block, crew, or contractor | Sum by lot and retain assumptions | weigh tickets; fuel receipts; supervisor approval |
| `cp_packhouse_records` | `onsite_sort_cool_pack` | conditioning, packaging, rejects, net output | facility meters, run sheets, pack-out reports | run_id; incoming mass; net mass; species; cultivar; grade; electricity; water; package mass/count; rejects | Collect facility records and reconcile mass balance | kg; kWh; m3; item | Each run or operating day | Declared inclusion period and harvest season | Included facility or line | Sum by run and allocate shared services by throughput or mass | meters; QA records; waste receipts |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_marketable_output` | harvest and packing | Net marketable output = gross fruit − losses − rejects − declared diversions; do not subtract transferred streams twice. | gross fruit; losses; rejects | kg net marketable fruit | `source_usda_ams_fresh_fruit_grades`; `source_iso_14044` |
| `calc_crop_cycle_normalization` | all flows | Crop-cycle amount / kg net marketable output for the same declared scope. | crop-cycle amount; net output | amount per kg reference flow | `source_iso_14044` |
| `calc_nutrient_basis` | fertilizer and amendments | Convert actual products using label, analysis, or supplier certificate; retain product and nutrient masses. | product mass; concentration | kg product and kg N/P/K | `source_ucanr_peach_fertilizer` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_qualifiers` | reference product and cycle records | 声明物种、品种、生产体系、地理位置、收获年份、成熟度/质量等级、交接点和场内处理状态。 | metadata; product description; grade records |
| `dq_mass_balance` | harvest and packing | 核对毛水果、可销售产品、损失、拒收物和转移物，调查未解释差异。 | weigh tickets; pack-out; waste receipts |
| `dq_temporal_and_site_coverage` | orchard and facility aggregation | 覆盖完整作物周期并识别所有贡献区块或设施，披露缺失范围。 | crop calendar; block register; run list |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_qualifiers` | reference flow and metadata | 缺少必需限定信息、声明交接点或净产品质量基准的数据集应拒绝。 | `source_usda_ams_fresh_fruit_grades` |
| `validation_crop_cycle_completeness` | orchard and harvest | 检查投入、采收批次、可销售输出和已知损失具有相同时间和场址范围。 | `source_ucanr_peach_nectarine_cultural`; `source_iso_14044` |
| `validation_water_exclusivity` | irrigation water | 同一水量不得同时作为供给灌溉水和直接环境取水计入。 | `source_iso_14044` |
| `validation_product_mass_balance` | harvest and conditioning | 要求毛水果到净可销售输出、损失和拒收物的质量平衡。 | `source_iso_14044` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 主要前景作物生产数据集；审查后可作为二级数据集发布 |
| downstream_use | 支持声明交接点鲜桃和鲜油桃的过程与生命周期模型构建 |
| allowed_use | 限定信息、边界、地理位置、作物周期和质量相容时用于果园和采收比较 |
| excluded_use | 加工水果、零售或消费者足迹、交接点后运输或不同产品状态 |
| required_metadata | species; cultivar; production system; geography; orchard age; area; harvest year/cycle; hand-off; grade; net mass; loss routes |
| required_quality_disclosure | 场址和期间覆盖；实测与估算投入；产量/损失核对；养分基准；分配；排除项 |
| update_trigger | 新作物周期证据、生产或灌溉变化、市场状态约定变化、新因子指导或边界/身份不一致 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `source_usda_ams_fresh_fruit_grades` | official_guidance | USDA AMS, Nectarines Grades and Standards, https://www.ams.usda.gov/grades-standards/nectarines-grades-and-standards | 新鲜市场状态、成熟度和质量等级限定信息 |
| `source_ucanr_peach_nectarine_cultural` | extension_guidance | UC IPM, Cultural Tips for Growing Peach and Nectarine, https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-peach-and-nectarine/ | 果园、灌溉、修剪、疏果、采收、卫生和过程分解 |
| `source_ucanr_peach_fertilizer` | extension_guidance | UC IPM, Fertilizer Applications — Peach, https://ipm.ucanr.edu/agriculture/peach/fertilizer-applications/ | 养分投入采集和分次施用审查 |
| `source_ucanr_nectarine_ipm` | extension_guidance | UC IPM, Pest Management Guidelines — Nectarine, https://ipm.ucanr.edu/pdf/pmg/pmgnectarine.pdf | 作物保护和杂草管理纳入及披露 |
| `source_iso_14044` | standard | ISO 14044:2006, https://www.iso.org/standard/38498.html | 边界、分配、数据质量和质量平衡规则 |
