---
pcr_id: "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other"
language: "zh-CN"
status: candidate
sync_with: "pcr.en-US.md"
content_maturity: authored_methodology
translation_status: aligned
---
# 农场门非种用玉米谷物
## 1. 范围与适用性
本 PCR 用于构建 CPC 3.0 `01122` 对应的非种用玉米谷物前景数据包，范围从田间种植、收获到声明的农场门。默认门点为农场门；数据包也可以声明初级加工门点，但仅可纳入交付谷物所需的有界首次调理，例如脱粒、干燥、清理或分级。
食用、饲用和工业用途由数据包声明，它们不形成不同的 PCR 身份。灌溉或雨养、生产体系、品种或杂交种、耕作路线以及初级调理路线，只有在其身份和证据被声明时才纳入。
玉米种子、青贮或饲草玉米、作为蔬菜销售的甜玉米或嫩玉米、食品或饲料制造、淀粉或乙醇转化、碾磨、配方、零售包装、分销、消费和后续储存默认排除。下游过程只有在声明产品状态、水分基准、等级和门点后才能将本 PCR 作为投入使用。
## 2. 产品类别识别
| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.maize-corn-other` |
| classification_refs | CPC 3.0 `01122`，`Maize (corn), other` |
| covered_products | 来自声明种植路线、在农场门或声明初级加工门交付的非种用玉米谷物 |
| excluded_products | 玉米种子；饲草或青贮玉米；作为蔬菜销售的甜玉米或嫩玉米；碾磨、熟制、发酵、配方、淀粉、乙醇、饲料或其他下游玉米产品 |
| representative_product | 具有水分基准、等级、用途路线和门点声明的商品级散装非种用玉米谷物 |
| production_route | 管理型一年生玉米种植、收获与收集，以及门点前可选的初级调理 |
| market_state | 在门点按收到状态交付的食用、饲用或工业谷物路线；不包括下游食品或饲料加工 |
## 3. 参考流
| 字段 | 值 |
| --- | --- |
| What | 声明农场门或初级加工门的非种用玉米谷物 |
| How much | 1 kg 净合格谷物 |
| How well | 品种或杂交种、用途路线、水分基准、等级、杂质或扣杂规则、生产体系、地理位置、灌溉状态和门点 |
| How long or cycle | 一个声明的作季和收获年份 |
| reference_flow_link | 见下方参考数量和产品流 |
| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 玉米 `f6cb6f61-5681-4f57-a44a-785ff0336a9b` |
| 参考流属性 | 质量 |
| 参考单位组 | 质量单位组 |
| 参考单位 | kg |
| 必需限定信息 | 用途路线；品种或杂交种；谷物状态；水分基准；等级和杂质规则；地理位置；作季和收获年份；灌溉或雨养状态；生产体系；声明门点；包装或散装状态 |
| 绑定 | `fixed` |
参考数量是声明门点的净合格非种用玉米谷物。皮重、杂质、扣杂、调理去除的水分、拒收谷物和残余物必须单独报告，不能默认为参考产出的一部分。
## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 | kg | 参考流应表示声明门点的净合格非种用玉米谷物，并排除容器皮重。 |
| `moisture_basis` | 谷物产出和去除水分 | 质量和含水率 | kg 和声明的质量分数 | 记录收到状态质量和水分基准。转换到另一水分基准时必须使用实测或声明的水分和明确计算，不提供通用水分因子。 |
| `yield_basis` | 收获和归一化投入 | 质量和面积 | kg 和 ha | 归一化前，对同一作季记录收获谷物、合格谷物、非商品谷物、残余物、损失和耕作面积。 |
| `fertilizer_n_basis` | 肥料和土壤排放 | 质量 | kg 产品和 kg N | 分开记录配方产品质量和养分质量；氮排放计算使用声明的 kg N 投入。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 或 kg | 声明水源，并区分取水、送达灌溉水、消耗水以及单独报告的水指标。 |
| `energy_inventory` | 燃料、电力和干燥 | 质量、体积或能量 | L、kg、MJ 或 kWh | 保留能源载体、计量单位、换算基准、作业环节，以及数值属于田间还是调理作业。 |
| `land_basis` | 土地占用和作物生产 | 面积-时间 | ha·season 或声明的面积-时间单位 | 记录耕作面积和声明的作季占用基准；土地占用不得替代土地转化。 |
## 5. 系统边界
默认前景边界包括作为已识别投入的播种材料、整地和播种、施肥和土壤改良、适用时的灌溉、作物保护、田间机械和能源、管理土壤排放、收获、声明路线中的脱粒或收集以及田间到门点的处理。只有当声明门点位于该操作之后时，才纳入可选初级调理。种子、肥料、作物保护产品、供水、燃料、电力、机械服务和处理服务的上游生产使用代表性背景数据集。食品、饲料、工业转化和下游分销不在默认边界内。
### 边界规则
| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_to_gate` | 前景系统 | 纳入提供声明非种用玉米谷物所需的田间生产、收获、收集和门点交付处理；除非明确属于前景数据包，否则购入投入按上游数据集处理。 | `fao-maize-harvest-postharvest-2023`; `ipcc-2019-cropland` |
| `boundary_gate_definition` | 参考产品 | 默认使用农场门。只有在明确记录脱粒、干燥、清理、分级及其损失，且不包含后续食品、饲料、淀粉、乙醇或其他制造时，才允许使用初级加工门。 | `fao-maize-drying-handling`; `mass-balance-identity` |
| `boundary_primary_conditioning` | 可选调理 | 将首次调理作为独立的条件节点，记录其能源、水、拒收物、水分变化和交接；不得从 CPC 标题推断调理路线。 | `fao-maize-drying-handling` |
| `boundary_input_completeness` | 作物生产 | 对播种材料、养分投入、作物保护、灌溉、田间能源、土地、管理土壤排放和残余物去向提供数值、合理零值或有记录的排除。 | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_output_separation` | 全部产出 | 按实测质量和去向区分合格谷物、非商品谷物、主动回收的共产品、田间残余物、调理拒收物、去除水分和未解释损失。 | `mass-balance-identity`; `fao-maize-drying-handling` |
### 边界概化
| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一年生非种用玉米作物的播种种子批次 |
| starting_condition_role | 作物生产投入和身份条件 |
| product_classification_scope | CPC 3.0 `01122` 对应的非种用玉米谷物；排除玉米种子 `01121` 和饲草或青贮玉米 `01911` |
| recursive_input_rule | 播种种子作为单独声明投入记录，不计入参考谷物。任何进入前景路线的同类别玉米谷物都按来源和用途单独识别，不与当季产出合并。 |
| upstream_dataset_requirement | 种子、肥料、改良剂、作物保护产品、灌溉供水、燃料、电力、机械服务、适用时的包装以及废物处理服务需要代表性上游数据集或有记录的排除。 |
| disclosure | 品种或杂交种、用途路线、田块和地理位置、作季、生产体系、灌溉、播种材料、门点、谷物状态、水分基准、等级、杂质规则、合格产出、残余物和拒收物去向以及分配决定 |
## 6. 过程清单结构
### 过程图
| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| field_maize_production | 田间玉米生产 | required |  | 前景 | 按合格谷物产出归一化的作季生产 |
| maize_harvest_and_collection | 玉米收获与收集 | required |  | 前景 | 声明门点之前的收获和收集谷物 |
| primary_maize_conditioning | 玉米初级调理 | conditional | 在声明门点前发生脱粒、干燥、清理、分级或等效首次调理时纳入 | 前景 | 声明调理交接后的合格谷物 |
### 过程：田间玉米生产（`field_maize_production`）
#### 输入
##### 产品流
###### 播种种子批次（`source_planting_seed_lot`）
播种种子批次是已声明的作物投入，不是参考产品。记录其身份、处理状态、质量基准和来源，但不得将其作为 CPC 01121 的种子产出。
- 选定流：玉米种子 `23f01fdc-33b5-4cc9-bd0f-b0cb39d7daa6`
- 流属性/单位：质量 / kg
- 绑定：`fixed`
- 数量规则：声明作物面积使用的播种种子批次实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_seed_lot_records`
- 来源：`fao-maize-harvest-postharvest-2023`
- 数量范围：暂定播种投入筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：kg 播种种子/1,000 kg 合格谷物
  - 基准：宽泛首轮筛选区间，不是默认作物用量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 农业养分与肥料投入（`field_maize_production_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`; `ipcc-2019-cropland`
- 数量范围：暂定养分投入筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：500
  - 单位：kg 配方投入/1,000 kg 合格谷物
  - 基准：宽泛首轮筛选区间；产品和养分记录仍为必需
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 供应的灌溉水（`irrigation_water_supplied`）
记录输送至作物的计量或有证据支持的灌溉水。经证实的雨养路线可以在附带证据时记录为零。
- 选定流：供应至田间的灌溉水
- 流属性/单位：体积或质量 / m3 或 kg
- 绑定：`parameterized`
- 数量规则：按水源记录计量或有证据的送达灌溉水；仅经证实的雨养生产可为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`ipcc-2019-cropland`
- 数量范围：暂定灌溉筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：m3/1,000 kg 合格谷物
  - 基准：宽泛首轮筛选区间，不是地理或作物默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 作物保护投入（`crop_protection_inputs`）
记录除草、害虫或病害控制使用的配方产品和活性物质，并记录施用日期、田块和产品身份。
 - 选定流：命名的作物保护产品或活性物质
- 流属性/单位：质量 / kg 产品或活性物质
- 数量规则：按命名产品和活性物质记录实测施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
- 来源：`fao-maize-harvest-postharvest-2023`
- 数量范围：暂定作物保护筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg 产品/1,000 kg 合格谷物
  - 基准：宽泛首轮筛选区间，实际施用记录为必需
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 田间能源和机械服务（`field_energy_and_machinery_services`）
记录田间作业和灌溉泵送使用的燃料、电力、承包机械及其他能源载体。
- 选定流：田间燃料、电力和机械服务投入
- 流属性/单位：质量、体积或能量 / L、kg、MJ 或 kWh
- 绑定：`parameterized`
- 数量规则：按田间作业记录实测或供应方记录的能源量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
- 来源：`ipcc-2019-cropland`
- 数量范围：暂定田间能源筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：L 柴油当量/1,000 kg 合格谷物
  - 基准：宽泛首轮筛选区间，不是燃料因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
##### 废物流
只有当废物衍生改良剂或返回材料带有来源、质量和负担处理声明并跨越田间边界时才记录。不得将其默认为肥料投入。
##### 基本流
###### 耕作土地占用（`cultivated_land_occupation`）
在研究范围需要时，将耕作面积和作季占用作为土地使用基本流记录。
- 选定流：适用于声明土地类别的耕作土地占用基本流
- 流属性/单位：面积-时间 / ha·season
- 数量规则：耕作面积乘以声明的作季占用基准
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_output_records`
- 来源：`ipcc-2019-cropland`
- 数量范围：土地占用 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：ha·season/1,000 kg 合格谷物
  - 基准：按合格产出归一化的非负面积-时间
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
###### 管理土壤取水（`managed_soil_water_withdrawal`）
当包含灌溉时按水源记录基本流取水，避免将供应灌溉水与环境取水重复计算。
- 选定流：从声明水源取出的水
- 流属性/单位：体积或质量 / m3 或 kg
- 数量规则：根据灌溉记录和声明的系统损失计算水源特定取水量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`ipcc-2019-cropland`
- 数量范围：取水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：m3/1,000 kg 合格谷物
  - 基准：非负水源特定取水筛选，不是水足迹默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
#### 输出
##### 产品流
###### 收获玉米谷物（`harvested_maize_grain`）
收获玉米谷物是进入门点或可选调理过程的作物产出。必须实测其收到状态质量、水分、杂质和等级状态。
- 选定流：玉米 `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：质量 / kg
- 绑定：`fixed`
- 数量规则：纳入初级调理前的收获谷物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`fao-maize-harvest-postharvest-2023`
- 数量范围：收获产出身份
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 收获谷物
  - 基准：过程定量参考产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
###### 主动回收的玉米秸秆（`intentionally_recovered_corn_straw`）
只有在不含玉米芯的秸秆或茎秆部分被主动收集或转移且有明确去向时，才作为产品产出记录。下面的固定流只适用于已明确识别的玉米秸秆部分；玉米穗轴和其他生物质必须单独记录。
- 选定流：玉米秸秆 `10041d22-3cea-4f73-b597-3c75f8bf3883`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200c9a66` / kg 收到状态，必要时加干物质
- 绑定：`fixed`
- 数量规则：按去向实测玉米秸秆质量；没有主动回收时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`fao-maize-harvest-postharvest-2023`
- 数量范围：暂定玉米秸秆回收筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg 玉米秸秆/kg 合格谷物
  - 基准：宽泛首轮比例筛选，实际去向证据为必需
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 主动回收的玉米穗轴（`intentionally_recovered_corn_cobs`）
玉米穗轴被主动收集或转移且有明确去向时，作为独立的产品产出记录。不能使用玉米秸秆身份代替玉米穗轴；在创建最终交换前，必须声明具体穗轴身份和门点。
- 选定流：玉米穗轴 / 玉米芯
- 流属性/单位：质量 / kg 收到状态，必要时加干物质
- 数量规则：按去向实测玉米穗轴质量；没有主动回收时为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`fao-maize-harvest-postharvest-2023`
- 数量范围：暂定玉米穗轴回收筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg 玉米穗轴/kg 合格谷物
  - 基准：宽泛首轮比例筛选，实际去向证据为必需
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
##### 废物流
**田间残余物和非商品作物材料（`field_residues_and_non_marketable_crop_material`）**
按去向记录未回收玉米芯、秸秆、受损谷物及其他作物材料，包括留田、还田、放牧、露天焚烧、处置或转移至其他系统。
- 选定流：按声明去向的玉米残余物、受损谷物或农业废物
- 流属性/单位：质量 / kg 收到状态，必要时加干物质
- 数量规则：在收获材料平衡后按去向实测或计算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_output_records`
- 来源：`ipcc-2019-cropland`; `mass-balance-identity`
- 数量范围：残余物和损失平衡区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 非参考产出/kg 收获谷物
  - 基准：按去向处理前的非负质量平衡比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
##### 基本流
###### 管理土壤直接氮排放（`direct_managed_soil_nitrogen_emissions`）
根据声明养分投入和选定的 IPCC 方法层级计算直接氮排放，保留氮投入、排放物种、因子来源和换算过程。
- 选定流：一种实测或按方法计算的氮物种进入一个已声明接收介质；N2O、NH3、硝酸盐及其他有依据的物种分别生成前景交换
- 流属性/单位：质量 / kg 排放物质；kg N 仅作为计算基准，并换算为物种质量
- 数量规则：根据采集的养分投入、土壤和气候背景、管理信息及选定方法层级计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：氮投入（`n_input`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_nutrient_input_records`
- 来源：`ipcc-2019-managed-soils-n2o`
- 数量范围：氮路径 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 排放氮/kg 施用氮
  - 基准：宽泛平衡筛选，具体因子和物种仍由方法确定
  - 基准类型：氮投入（`n_input`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`ipcc-2019-managed-soils-n2o`; `mass-balance-identity`
###### 田间燃料化石二氧化碳（`fossil_carbon_dioxide_from_field_fuel`）
根据记录的田间燃料、声明的燃料身份和因子来源计算直接化石二氧化碳。
- 选定流：田间燃料产生的化石二氧化碳排入空气
- 流属性/单位：质量 / kg
- 数量规则：按作业记录燃料量乘以声明的燃烧因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_energy_records`
- 来源：`mass-balance-identity`
- 数量范围：燃料排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg CO2/kg 燃料碳清单
  - 基准：声明燃料计算的平衡校验，不是排放因子
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
### 过程：玉米收获与收集（`maize_harvest_and_collection`）
#### 输入
##### 产品流
###### 接收的收获谷物（`harvested_grain_received`）
收获节点接收来自田间生产的实测谷物，并保留声明的收获状态、杂质和水分信息。
- 选定流：玉米 `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：质量 / kg
- 绑定：`fixed`
- 数量规则：收获或收集作业接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`fao-maize-harvest-postharvest-2023`
- 数量范围：收获接收平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 接收质量/kg 收获谷物
  - 基准：接收质量应与田间收获记录平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
##### 废物流
默认不要求废物投入。来自其他系统的材料必须带有来源、状态和负担处理声明，不得作为无限定废物投入。
##### 基本流
只有在收获作业单独计量或建模且属于声明收获边界时，才记录收获直接排放；田间能源排放不得重复计入。
#### 输出
##### 产品流
###### 送至门点或调理的谷物（`grain_delivered_to_gate_or_conditioning`）
这是收集后的谷物交接。当不含初级调理时，它是参考产出；否则是条件调理节点的投入。
- 选定流：玉米 `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：质量 / kg
- 绑定：`fixed`
- 数量规则：转移至声明门点或调理作业的净谷物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
- 来源：`fao-maize-harvest-postharvest-2023`
- 数量范围：收获交接平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 交接质量/kg 收获谷物
  - 基准：交接质量与接收收获及去向平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
##### 废物流
**收获拒收物和田间损失（`harvest_rejects_and_field_losses`）**
记录离开收获边界的受损、掉落、腐败或拒收材料，并声明去向以及负担是否保留或转移。
- 选定流：按去向的收获拒收物或农业损失
- 流属性/单位：质量 / kg
- 数量规则：与收获接收和合格交接平衡的实测或计算拒收质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_land_and_output_records`
- 来源：`mass-balance-identity`
- 数量范围：收获损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 拒收物/kg 收获谷物
  - 基准：宽泛平衡区间，不是损失默认值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
##### 基本流
只有在属于声明收获边界且未包含在田间能源记录中的情况下，才记录收获作业直接排放。
### 过程：玉米初级调理（`primary_maize_conditioning`）
#### 输入
##### 产品流
###### 进入初级调理的谷物（`grain_entering_primary_conditioning`）
当声明门点位于首次调理之后时，本条件节点接收谷物。数据包必须说明是否包括脱粒、干燥、清理或分级。
- 选定流：玉米 `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：质量 / kg，带声明水分基准
- 绑定：`fixed`
- 数量规则：调理边界的接收谷物质量和水分实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格调理玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_records`
- 来源：`fao-maize-drying-handling`
- 数量范围：调理投入平衡
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 接收谷物/kg 合格调理谷物
  - 基准：投入和产出必须结合水分和拒收物平衡
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
###### 调理能源（`conditioning_energy`）
仅在作业属于声明门点时记录干燥燃料、电力和其他能源载体。
- 选定流：干燥燃料、电力和调理能源投入
- 流属性/单位：质量、体积或能量 / kg、L、MJ 或 kWh
- 绑定：`parameterized`
- 数量规则：按批次或实用记录计量调理投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格调理玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_records`
- 来源：`fao-maize-drying-handling`
- 数量范围：暂定调理投入筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：声明投入单位/1,000 kg 合格调理谷物
  - 基准：宽泛首轮筛选区间，不提供默认能耗因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 调理用水（`conditioning_water`）
仅在作业属于声明门点时记录清洗和调理用水，并将供应水与水源取水区分。
- 选定流：清洗和调理用水
- 流属性/单位：体积或质量 / m3 或 kg
- 绑定：`parameterized`
- 数量规则：按批次或实用记录计量调理用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格调理玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input_records`
- 来源：`fao-maize-drying-handling`
- 数量范围：暂定调理用水筛选区间
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：声明用水单位/1,000 kg 合格调理谷物
  - 基准：宽泛首轮筛选区间，不提供默认用水因子
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
##### 废物流
默认不要求废物投入。回收的二次材料必须有来源和负担处理决定。
##### 基本流
只有在包含调理作业且存在相应投入记录时，才记录调理取水和直接燃烧排放。
#### 输出
##### 产品流
###### 声明门点的合格玉米谷物（`accepted_maize_grain_at_declared_gate`）
合格玉米谷物是可选调理节点后的参考产出，并带有水分、等级、杂质规则和门点元数据。
- 选定流：玉米 `f6cb6f61-5681-4f57-a44a-785ff0336a9b`
- 流属性/单位：质量 / kg
- 绑定：`fixed`
- 数量规则：纳入调理后的净合格谷物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：定量参考
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_output_records`
- 来源：`fao-maize-drying-handling`; `mass-balance-identity`
- 数量范围：参考产出身份
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：声明门点调理后的定量参考产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
##### 废物流
**调理拒收物和去除水分（`conditioning_rejects_and_removed_moisture`）**
单独记录扣杂、筛下物、破碎或拒收谷物、去除水分和清理残余物，并给出实测质量或明确水分计算以及去向。
- 选定流：按去向的调理拒收物、去除水分、筛下物或清理残余物
- 流属性/单位：质量 / kg 收到状态或声明干物质
- 数量规则：根据投入-产出平衡和水分记录实测或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格调理玉米谷物
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_output_records`
- 来源：`fao-maize-drying-handling`; `mass-balance-identity`
- 数量范围：调理平衡区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 非参考产出/kg 调理投入
  - 基准：宽泛质量和水分平衡区间
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`
##### 基本流
###### 调理粉尘和直接燃料排放（`conditioning_dust_and_direct_fuel_emissions`）
仅在有调理作业记录和接收环境身份支持时记录粉尘或直接燃烧排放。
- 选定流：按接收环境的调理粉尘和化石燃烧排放
- 流属性/单位：质量 / kg
- 数量规则：根据调理记录和声明因子实测、供应方记录或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格调理玉米谷物
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_input_records`
- 来源：`fao-maize-drying-handling`; `mass-balance-identity`
- 数量范围：调理排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg 排放/kg 相关投入
  - 基准：平衡筛选，不提供通用排放因子
  - 基准类型：燃料清单（`fuel_inventory`）
  - 证据类型：推理估算（`reasoned_estimate`）
## 7. 分配与共产品处理
### 分配规则
| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 田间和调理过程 | 优先通过过程细分或分开采集谷物、主动回收残余物、拒收物和按去向处理的记录来避免分配。 | `iso-14044-2006` |
| `allocation_grain_and_recovered_residue` | 谷物和主动回收残余物共产品 | 无法细分时，使用由代表性产品属性或价值支持的声明分配方法，记录选择，并对具有实质差异的其他合理方法进行敏感性分析。 | `iso-14044-2006` |
| `allocation_residue_fate` | 田间残余物和拒收物 | 区分残余物收集、还田、放牧、焚烧、处置和转移。只有在声明去向、功能、市场和替代证据时才可计入被替代产品收益。 | `ipcc-2019-cropland`; `iso-14044-2006` |
| `allocation_moisture_conditioning` | 初级调理 | 使用各产出的实测质量和水分变化分配调理负担；不得将去除水分分配为合格谷物。 | `fao-maize-drying-handling`; `mass-balance-identity` |
## 8. 前景数据采集、计算与质量规则
### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot_records` | `field_maize_production` | source planting-seed lot | 种子和投入记录 | 品种或杂交种；批次；处理；供应方；质量；播种日期；田块；来源状态 | 发票、种子标签、田间日志 | kg、日期、田块 | 每次播种 | 完整作季 | 田块或生产单元 | 按田块汇总并按合格谷物归一化 | 批次标签、发票、田间日志 |
| `cp_nutrient_input_records` | `field_maize_production` | fertilizer and soil amendments | 采购和施用记录 | 产品；配方；养分含量；质量；日期；田块；施用方式 | 发票、标签、施用日志 | kg 产品、kg 养分、日期 | 每次施用 | 完整作季 | 田块和生产单元 | 按投入和田块汇总，保留养分质量 | 发票、标签、施用记录 |
| `cp_irrigation_records` | `field_maize_production` | irrigation and withdrawal | 计量或水源记录 | 水源；计量器；读数；体积；日期；田块；泵能耗 | 校准计量器、泵日志、供应方记录 | m3、kg、kWh | 每次或每月 | 作季灌溉部分 | 田块和水源 | 按水源汇总并按合格谷物归一化 | 校准、读数、水源记录 |
| `cp_crop_protection_records` | `field_maize_production` | crop protection | 施用记录 | 产品；活性物质；剂量；面积；日期；田块；目标 | 标签和施用日志 | kg 产品、kg 活性物质、ha | 每次施用 | 完整作季 | 田块 | 按产品和活性物质汇总 | 标签、施用日志 |
| `cp_field_energy_records` | `field_maize_production` | field energy and machinery | 燃料、电力或服务记录 | 作业；载体；数量；机器或供应方；日期；田块 | 燃料日志、计量器、发票、承包商记录 | L、kg、MJ、kWh、服务单位 | 每次作业或结算周期 | 完整作季 | 田块或生产单元 | 归入田间作业并避免重复 | 计量器、发票、日志 |
| `cp_land_and_output_records` | `field_maize_production` | land, harvest, grain, residue, and loss | 田块和收获记录 | 面积；日期；收获谷物；合格谷物；水分；等级；残余物；拒收物；损失；去向 | 校准秤、田块图、发运和去向记录 | ha、kg、水分分数、日期 | 收获和核对 | 完整作季 | 田块和门点 | 归一化前核对所有产出 | 秤校准、田块图、票据、去向记录 |
| `cp_conditioning_input_records` | `primary_maize_conditioning` | conditioning energy and water | 批次和公用工程记录 | 批次；接收质量；水分；作业；载体；数量；用水；日期 | 批次单、计量器、发票 | kg、水分分数、L、m3、MJ、kWh | 批次或公用工程周期 | 声明的调理范围 | 调理设施 | 按批次汇总并按合格谷物归一化 | 批次单、计量器、发票 |
| `cp_conditioning_output_records` | `primary_maize_conditioning` | accepted grain and rejects | 批次产出和质量记录 | 投入质量；产出质量；水分；等级；扣杂；筛下物；去除水分；去向；门点 | 校准秤、水分测试、质量记录 | kg、水分分数、日期 | 批次 | 声明的调理范围 | 调理设施和门点 | 核对投入、合格产出、拒收物和水分 | 校准、水分测试、发运和去向记录 |
### 计算规则
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_accepted_grain` | all foreground rows | 将实测或计算的行数量除以同一声明门点和基准的净合格谷物 | 产出和投入记录 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `convert_moisture_basis` | grain and conditioning rows | 仅根据收到状态质量和声明水分使用明确质量-水分方程换算，并保留原始值和换算值 | `cp_land_and_output_records`; `cp_conditioning_output_records` | 声明水分基准的质量 | `mass-balance-identity`; `fao-maize-drying-handling` |
| `calculate_managed_soil_emissions` | nitrogen emissions | 对采集的养分投入和声明的土壤、气候及管理背景使用选定 IPCC 方法层级，并披露因子和物种换算 | `cp_nutrient_input_records`; declared method factors | 物种特定排放 | `ipcc-2019-managed-soils-n2o` |
| `calculate_land_occupation` | land occupation | 耕作面积乘以声明作季占用基准，再按合格谷物归一化 | `cp_land_and_output_records` | 每参考产品的面积-时间 | `ipcc-2019-cropland`; `mass-balance-identity` |
| `reconcile_field_outputs` | field production | 合格谷物、回收残余物、拒收物、田间残余物和未解释损失应在声明容差内与收获记录平衡 | `cp_land_and_output_records` | 产出质量平衡和未解释比例 | `mass-balance-identity` |
| `reconcile_conditioning_outputs` | primary conditioning | 接收谷物质量和含水量应与合格谷物、拒收物、去除水分及有记录损失平衡 | `cp_conditioning_input_records`; `cp_conditioning_output_records` | 调理质量和水分平衡 | `mass-balance-identity`; `fao-maize-drying-handling` |
| `apply_co_product_allocation` | grain and intentionally recovered residue | 仅在产出身份和去向有记录后使用声明的细分、质量、经济或其他合理方法，并执行敏感性分析 | output records; allocation decision | 按产出的分配负担 | `iso-14044-2006` |
### 数据质量要求
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and field | 声明品种或杂交种、用途路线、地理位置、作季、生产体系、灌溉、门点、谷物状态、水分基准、等级、杂质规则和包装或散装状态。 | 数据集元数据、田间记录、质量和门点记录 |
| `dq_temporal_coverage` | crop production | 覆盖完整声明作季和收获年份；聚合数据集应披露贡献作季和权重。 | 有日期的田间、投入、收获和发运记录 |
| `dq_input_completeness` | crop and conditioning inputs | 对种子、养分投入、作物保护、灌溉、田间能源、调理能源和用水、土地及处理提供数量或合理零值/排除。 | 台账、标签、计量器、日志、发票、过程记录 |
| `dq_moisture_and_grade` | grain output | 保留采样方法、水分结果、等级、扣杂或杂质、拒收质量和归一化使用的换算基准。 | 校准秤、水分测试、质量记录 |
| `dq_mass_balance` | all outputs | 核对田间和调理产出，包括合格谷物、残余物、拒收物、去除水分和未解释损失，并记录容差和校准。 | 秤记录、批次单、计算工作簿 |
| `dq_method_identity` | UUID-bearing rows and factors | 核实每个 Tiangong 流、属性和单位组身份，并将外部因子与身份证据分开。 | 已审身份记录、来源因子、方法说明 |
| `dq_allocation_and_fate` | co-products and residues | 报告多个有意产出时，记录去向、负担处理、分配方法、替代证据和敏感性。 | 发运、去向、分配和敏感性记录 |
## 9. 校验规则
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | 发布前确认一个 1 kg 净合格非种用玉米谷物参考流、全部必需限定信息，以及已审的 Tiangong 产品、属性和单位组身份。 | `mass-balance-identity` |
| `validation_scope` | boundary | 确认玉米种子、饲草或青贮路线，以及下游食品、饲料、淀粉、乙醇、碾磨和分销活动均被排除，除非使用另有声明的独立数据集边界。 | `fao-maize-harvest-postharvest-2023`; `fao-maize-drying-handling` |
| `validation_process_map` | process inventory | 确认田间生产和收获存在；只有在条件、交接、投入、产出和门点明确时才纳入初级调理。 | `fao-maize-drying-handling` |
| `validation_mass_balance` | outputs | 确认收获谷物、合格谷物、残余物、拒收物、去除水分和损失在声明容差内平衡，并为每个非参考产出指定去向。 | `mass-balance-identity` |
| `validation_moisture` | grain and conditioning | 确认保留收到状态质量、水分基准、等级、扣杂和换算方程；不得使用未记录的默认水分因子。 | `fao-maize-drying-handling`; `mass-balance-identity` |
| `validation_nitrogen` | fertilizer and emissions | 确认产品质量、养分质量、选定 IPCC 层级、因子来源、物种、单位和换算已声明，且不是由 module 提供。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water_and_energy` | water and energy | 确认水源、载体、单位、作业、计量或记录，以及上游和前景处理明确，且供应水或燃料未重复计算。 | `ipcc-2019-cropland`; `mass-balance-identity` |
| `validation_allocation` | multiple outputs | 确认主动回收残余物共产品与废物已区分，分配决定明确，并在分配重要时测试另一种合理方法。 | `iso-14044-2006` |
| `validation_identity_review` | all bound flow rows | 当流绑定缺失，或绑定与方向、流类型、属性、单位组、地理位置或门点不匹配时，拒绝最终化。 | `mass-balance-identity` |
| `validation_data_quality` | data package | 确认每个必需类别都有采集值、带输入的计算值、合理零值或有记录的排除，并披露开放审核项。 | `fao-maize-harvest-postharvest-2023`; `ipcc-2019-cropland` |
## 10. 发布数据集画像
| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与声明品种或杂交种、用途路线、地理位置、生产体系、灌溉、作季、水分基准、等级及农场门或初级加工门一致的非种用玉米谷物 |
| excluded_use | 玉米种子；饲草或青贮玉米；作为蔬菜的甜玉米或嫩玉米；食品、饲料、淀粉、乙醇、碾磨、配方、零售、分销、消费或无限定储存数据集 |
| required_metadata | 已审参考流身份；品种或杂交种；用途路线；地理位置；田块和作季；种子投入状态；生产体系；灌溉；门点；谷物状态；水分和等级；合格产出；残余物和拒收物去向；分配；来源和协议覆盖 |
| required_quality_disclosure | 作季；田块和供应方覆盖；原始记录覆盖；质量平衡容差；秤和水分校准；养分和排放方法；水源；能源载体；门点；排除项；分配和敏感性；身份覆盖和未映射流披露 |
| update_trigger | 门点、谷物状态、水分约定、等级规则、生产路线、灌溉、养分或作物保护实践、调理技术、产出去向、分配方法或代表性发生实质变化 |
## 11. 数据源
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-maize-harvest-postharvest-2023` | official_guidance | FAO，《Maize harvesting and post-harvesting handling》，<https://www.fao.org/family-farming/detail/en/c/1619514/> | 田间到收获及首次收获后过程分解、处理和损失问题 |
| `fao-maize-drying-handling` | official_guidance | FAO，《Agricultural engineering in development: Grain and post-harvest systems》，<https://www.fao.org/4/t0522e/T0522E03.htm> | 初级干燥、水分、脱粒、调理和门点区分 |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 5 Cropland，<https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | 耕地管理、残余物处理、土地和作物管理方法背景 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11，<https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤氮排放计算和因子选择 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级、数据质量和敏感性要求 |
| `mass-balance-identity` | method_factor | 将质量守恒作为作物收获、调理、拒收物、水分和参考流核对的 PCR 计算恒等式。 | 产出核对、归一化和 QA 校验范围 |
