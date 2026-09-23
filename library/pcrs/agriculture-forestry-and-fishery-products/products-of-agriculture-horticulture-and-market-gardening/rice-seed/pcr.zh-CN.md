---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-seed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---
# 水稻播种种子
## 1. 适用范围
本 PCR 用于构建播种用水稻种子的前景数据包，覆盖种子繁育或受控制种、田间管理、收获、干燥、清理、分级、质量检测、可选包衣或处理、包装、储存以及到声明种子门点的交付。
适用对象包括在声明种子等级和质量基准的前提下生产的认证种子、基础种子、登记种子、农户留种或同类播种种子批次。碾米用稻谷、糙米或精米、食用或饲用稻谷、作为独立产品销售的稻草，以及没有水稻种子产品输出的种子加工服务不在本 PCR 范围内。
本 PCR 是数据集生产规则，不提供产品数量、排放因子、UUID 或通用种子质量数值。具体数据集必须将每个参数化 Flow Set 行解析为已核实的平台交换，并提供批次、质量、门点、地理位置和报告期证据。
## 2. 产品类别识别
| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.rice-seed` |
| classification_refs | CPC 3.0 `01131`，`Rice, seed` |
| covered_products | 用于播种的水稻种子，包括认证种子、基础种子、登记种子、农户留种或同类种子批次 |
| excluded_products | 碾米用稻谷；糙米或精米；食用或饲用稻谷；作为独立产品销售的稻草；没有水稻种子产品输出的种子加工服务 |
| representative_product | 在声明含水率基准和种子门点交付的清理、分级并完成质量检测的水稻播种种子 |
| production_route | 水稻种子繁育或受控制种，随后进行收获、调理、可选处理、包装、储存和交付 |
| market_state | 声明种子等级、品种或杂交组合、含水率基准、物理纯度、发芽率、处理状态、包装状态、地理位置和门点的播种种子 |
## 3. 参考流
| 字段 | 值 |
| --- | --- |
| What | 用于播种的清洁水稻种子 |
| How much | 1 kg |
| How well | 声明种子等级、品种或杂交组合、含水率基准、物理纯度、发芽率、处理状态和包装状态 |
| How long or cycle | 一个声明的种子生产作季；若储存包含在门点内，另行声明储存时长 |
| reference_flow_link | 见下方参考数量和已核实的平台产品流 |
| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 水稻种子 `14c42414-b19b-47c4-863f-1b86b50ff6bf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200b9a66` |
| Reference unit | kg |
| Required qualifiers | 种子等级或认证等级；水稻品种或杂交组合；含水率基准；物理纯度；发芽率；处理状态；地理位置；作季和年份；声明的种子门点；包装状态 |
| 绑定 | `fixed` |
参考数量是声明门点的净合格水稻种子输出。袋子皮重、杂质、筛下物、拒收种子、调理过程中去除的水分、储存损失和其他残余物必须单独报告，不得悄然并入参考输出。最终前景过程发布交换前，必须保留已核实的平台 UUID。
## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流应表示声明门点、声明含水率基准下的合格水稻播种种子净质量。 |
| `seed_count_conversion` | 种子数量记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 只有记录千粒重或其他透明的质量换算时，才可使用粒数数据。 |
| `moisture_basis` | 收获和调理种子 | 质量和声明的含水率分数 | kg 和 percent | 记录接收状态和参考状态的含水率基准；在基准之间归一化时必须明确计算水分质量。 |
| `nutrient_basis` | 养分投入和土壤排放 | 质量和养分含量 | kg product 和 kg nutrient | 分别记录配方产品质量和养分质量；氮排放计算使用 kg N，而不是肥料产品质量。 |
| `water_basis` | 灌溉和取水 | 体积或质量 | m3 或 kg | 区分水源取水、送达灌溉水、消耗量和水足迹结果。 |
| `energy_inventory` | 田间、泵送、干燥、调理和储存能源 | 能量或载能体质量 | kWh、MJ、L 或 kg | 保留能源载体、单位、换算基准、作业环节和地理位置。 |
| `packaging_quantity` | 包装投入 | 质量、面积或件数 | kg、m2 或 item | 记录包装材料数量以及与参考输出对账所需的包装容量或件数。 |
种子质量属性是前景描述，不替代流身份。数据集必须记录含水率、物理纯度、发芽率、在重要时的活力、处理状态所采用的标准、检测方法、取样基准和批次覆盖范围。
## 5. 系统边界
默认前景边界从声明的来源种子批次或制种起始条件开始，止于声明种子门点的水稻种子。边界包括整地、播种或移栽、养分管理、适用时的灌溉、作物保护、田间作业、收获、门点包含时的田间至设施转运、干燥、清理、分级、质量检测、处理、包装、储存，以及门点为交付种子时的交付。
外购养分产品、能源载体、包装、处理材料和处理服务的上游生产由链接的背景数据表示，并在前景包中披露。用于种子调理的稻谷是产品投入，必须与最终播种种子输出保持区分。碾米、消费者使用、下游水稻种植、零售以及食用或饲用加工不在默认边界内。
### 边界规则
| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_seed_production` | 田间和种子设施路线 | 仅将来源种子或声明的起始条件、田间生产、收获、调理、质量检测、处理、包装、储存和到声明门点的交付纳入边界。 | `irri-rice-seed-quality`; `fao-rice-postharvest` |
| `boundary_input_completeness` | 所有前景路线 | 对养分投入、灌溉、作物保护、土地、田间能源、泵送、干燥、调理能源、包装、储存和直接排放给出采集值、合理为零或书面排除。 | `ipcc-2019-cropland`; `ipcc-2019-managed-soils-n2o` |
| `boundary_quality_separation` | 水稻种子输出 | 按实测质量和声明去向分别记录合格种子、可用副产品、筛下物、拒收种子、破碎粒、粉尘、储存损失和其他残余物。 | `fao-rice-postharvest`; `mass-balance-identity` |
| `boundary_moisture_reconciliation` | 收获和调理 | 在一个声明的含水率基准上核对收获输入和调理输出，并披露干燥去除的水分。 | `fao-rice-postharvest`; `mass-balance-identity` |
### 边界概化
| 字段 | 值 |
| --- | --- |
| declared_starting_condition | source_seed_lot_or_declared_seed_production_start |
| starting_condition_role | seed_identity_and_propagation_condition |
| product_classification_scope | 当前 CPC 3.0 产品类别 `01131`，`Rice, seed` |
| recursive_input_rule | 会导致递归追踪的同类种子投入记录为带有批次身份、来源和用途的声明来源种子批次，不递归展开种子 PCR |
| upstream_dataset_requirement | 外购材料使用代表性上游数据集，并在前景包中披露 Flow Set 解析结果 |
| disclosure | 记录来源种子批次、品种或杂交组合、种子等级、位置、作季年份、生产系统、灌溉状态、含水率基准、质量检测、处理、门点、包装、输出、残余物去向和报告期 |
## 6. 过程清单结构
### 过程图
| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| rice_seed_multiplication | 水稻种子繁育 | required | 纳入田间或受控种子生产 | 前景 | 收获的水稻种子作物 |
| rice_seed_conditioning | 水稻种子调理与处理 | required | 纳入声明门点前的干燥、清理、分级、检测、处理和包装 | 前景 | 合格水稻种子输出 |
| rice_seed_storage_and_delivery | 水稻种子储存与交付 | conditional | 当储存或交付属于声明门点或显著改变产品状态时纳入 | 前景 | 交付的水稻种子输出 |
### 过程：水稻种子繁育（`rice_seed_multiplication`）
#### 输入
##### 产品流
###### 用于繁育的来源种子批次（`source_seed_lot`）
来源种子批次作为繁育投入记录，承载品种、等级、来源、处理状态和批次身份。同类产品输入不递归展开。
- 选定流：水稻种子 `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：来源批次实测质量或透明的播种率换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的水稻种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_source_seed_lot`
- 数量范围：来源种子暂定筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：0.2
  - 单位：kg/kg 收获的水稻种子作物
  - 基准：每 kg 收获种子作物的首轮来源种子质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
###### 农业养分与肥料投入（`rice_seed_multiplication_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的水稻种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_records`
- 来源：
- 数量范围：Provisional mineral nutrient screening estimate
  - 范围角色：Default estimate (`default_estimate`)
  - 下限：0
  - 上限：0.6
  - 单位：kg product/kg harvested rice seed crop
  - 基准：broad first-pass formulated nutrient product mass
  - 基准类型：Process output (`process_output`)
  - 证据类型：Reasoned estimate (`reasoned_estimate`)

###### 灌溉供水（`irrigation_water`）
送达田间的灌溉水与水源取水和消耗量分开记录。
- 选定流：供应到水稻生产田的灌溉水
- 绑定：`parameterized`
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：计量或计算的送达灌溉水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的水稻种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
###### 田间能源和机械作业（`field_energy`）
整地、播种、田间管理、收获和田间转运使用的燃料或实测机械能通过能源供应功能表示。
- 选定流：田间机械能源供应
- 绑定：`parameterized`
- 流属性/单位：Energy or carrier mass / MJ, kWh, L, or kg
- 数量规则：按作业记录的田间燃料或机械能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的水稻种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_field_energy_records`
###### 作物保护材料（`crop_protection_material`）
只有活性成分或配方产品跨越前景边界时，才将作物保护产品作为材料投入记录。
 - 选定流：水稻种子生产用作物保护材料
- 流属性/单位：Mass / kg
- 数量规则：按施用记录的配方产品或活性成分质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 收获的水稻种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_crop_protection_records`
###### 灌溉泵送电力（`irrigation_pumping_electricity`）
灌溉水的泵送或输送电力与水流分开记录。
- 选定流：灌溉泵送用外购电力
- 绑定：`parameterized`
- 流属性/单位：Energy / kWh or MJ
- 数量规则：泵站计量电力或由泵送记录计算的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的水稻种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_irrigation_records`
##### 废物流
默认不设置废物投入。只有在来源、处理和用途均已声明时，才记录回收或废物衍生的改良投入；其养分功能仍使用农业养分供应坐标。
##### 基本流
###### 土地占用或转化（`land_occupation`）
土地占用或转化作为水稻种子生产面积和持续时间对应的自然资源交互记录。
- 选定流：支持水稻种子生产的土地占用或转化
- 流属性/单位：Area-time / ha year or declared platform unit
- 数量规则：田地面积和作季时长实测；土地转化与占用分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作季并按每 kg 参考输出
- 基准类型：作季（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
###### 水资源取水（`water_withdrawal`）
按水源记录水资源取水，并与送达灌溉水对账。
- 选定流：水稻种子灌溉取用的水资源
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：水源计量取水，不与输送损失或消耗量合并
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的水稻种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_irrigation_records`
- 来源：`fao-crop-evapotranspiration-56`
#### 输出
##### 产品流
###### 收获的水稻种子作物（`harvested_rice_seed_crop`）
离开田间路线、进入调理过程的收获水稻种子作物是中间产品输出。完成声明的调理和质量边界前，不是最终参考流。
- 选定流：用于调理的收获水稻种子作物
- 流属性/单位：Mass / kg
- 数量规则：按声明接收含水率基准的收获质量实测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获的水稻种子作物
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_land_and_output_records`
##### 废物流
只有当田间残余物或非种子生物质跨越田间边界并具有声明去向时，才记录为废物或产品输出。没有合适的 Flow Set 时，不强行设置废物绑定。
##### 基本流
###### 土壤直接氧化亚氮排放（`direct_soil_n2o`）
根据声明的氮投入和所选排放方法计算土壤直接氧化亚氮。
- 选定流：水稻土壤管理产生的氧化亚氮空气排放
- 流属性/单位：Mass / kg N2O
- 数量规则：将选定 IPCC 层级或场址方法应用于声明的氮投入和条件
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每 kg 参考输出
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2019-managed-soils-n2o`
###### 氨排放（`ammonia_emission`）
当所选氮方法和前景证据支持时，记录氨排放。
- 选定流：水稻生产产生的空气氨排放
- 流属性/单位：Mass / kg NH3
- 数量规则：使用声明氮投入的场址或区域氮排放方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考输出
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2019-managed-soils-n2o`
###### 水体硝酸盐排放（`nitrate_emission`）
当田间证据或选定区域方法支持水体排放路径时，记录硝酸盐损失。
- 选定流：水稻生产产生的水体硝酸盐排放
- 流属性/单位：Mass / kg nitrate
- 数量规则：使用声明氮投入和水分条件的场址或区域淋失方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考输出
- 基准类型：氮投入（`n_input`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ipcc-2019-managed-soils-n2o`
### 过程：水稻种子调理与处理（`rice_seed_conditioning`）
#### 输入
##### 产品流
###### 用于调理的收获水稻种子作物（`conditioning_seed_crop_input`）
调理投入是进入干燥、清理、分级、检测和处理路线的收获水稻种子作物实测量。
 - 选定流：用于调理的收获水稻种子作物 14c42414-b19b-47c4-863f-1b86b50ff6bf
- 流属性/单位：Mass / kg
- 数量规则：接收质量和含水率基准实测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格水稻种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_input`
- 来源：`fao-rice-postharvest`
###### 调理电力（`conditioning_electricity`）
按作业记录干燥风机、清理、分级、检测、处理和包装所用电力；可计量时按作业区分。
- 选定流：调理用电力供应
- 绑定：`parameterized`
- 流属性/单位：Energy / kWh or MJ
- 数量规则：按调理作业计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格水稻种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
###### 干燥热或能源载体（`drying_heat`）
采用直接热源时，干燥热或提供热量的能源载体与电力分开记录。
- 选定流：干燥热或工艺能源供应
- 绑定：`parameterized`
- 流属性/单位：Energy or carrier mass / MJ, kWh, L, or kg
- 数量规则：干燥能源实测或有文件支持的载能体换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格水稻种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_energy_records`
###### 种子处理材料（`seed_treatment_material`）
只有当处理属于声明市场状态且产品或活性成分跨越边界时，才记录种子处理材料。
 - 选定流：种子处理材料
- 流属性/单位：Mass / kg
- 数量规则：按处理种子质量记录配方产品或活性成分施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 处理后水稻种子输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_seed_treatment_records`
###### 一次包装（`primary_packaging`）
容纳和保护声明水稻种子输出的包装通过包装功能表示。
- 选定流：水稻种子一次包装
- 绑定：`parameterized`
- 流属性/单位：Mass, area, or item / kg, m2, or item
- 数量规则：包装材料和包装数量或容量实测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 包装水稻种子
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
##### 废物流
默认不设置调理废物投入。回收包装或其他废物衍生材料须先声明来源和处理后才能纳入。
##### 基本流
调理直接资源和排放仅在其跨越设施边界且未由田间过程表示时记录。
#### 输出
##### 产品流
###### 合格播种用水稻种子（`accepted_rice_seed_output`）
满足声明等级和质量限定信息的合格水稻种子，是本 PCR 的唯一参考产品角色。
- 选定流：水稻种子 `14c42414-b19b-47c4-863f-1b86b50ff6bf`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：声明含水率基准下的合格种子净质量实测
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：PCR 参考输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_accepted_seed_output`
- 来源：`irri-rice-seed-quality`
##### 废物流
筛下物、拒收种子、破碎粒、包装废物和不合格批次必须作为废物输出记录实测质量和声明去向。不得对这些废物输出套用产品投入 Flow Set 或设置 binding；废物记录由 `cp_reject_and_screening_records` 和 `cp_packaging_waste_records` 管理。
##### 基本流
###### 调理粉尘排放（`conditioning_dust`）
清理、分级或处理产生的空气粉尘，在具有实质性或由所选方法要求时，通过环境排放功能表示。
- 选定流：水稻种子调理产生的空气粉尘或颗粒物排放
- 流属性/单位：Mass / kg
- 数量规则：按声明路线实测或计算粉尘释放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格水稻种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_emissions`
### 过程：水稻种子储存与交付（`rice_seed_storage_and_delivery`）
#### 输入
##### 产品流
###### 储存电力（`storage_electricity`）
当冷却、通风、维持干燥或其他储存能源属于声明门点时纳入储存电力。
- 选定流：储存用电力供应
- 绑定：`parameterized`
- 流属性/单位：Energy / kWh or MJ
- 数量规则：声明储存期间的储存电力计量或分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 交付水稻种子输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
##### 废物流
储存损失或降级批次必须作为废物输出记录质量、含水率对账和声明去向。不得对该废物输出套用产品投入 Flow Set 或设置 binding。
##### 基本流
储存过程默认不增加基本流。只有基本流跨越声明储存边界且未由能源或材料流表示时才增加资源或排放行。
## 7. 分配与联产品处理
| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoidance` | 田间、调理和储存过程 | 在记录允许时，先通过细分种子繁育、调理、处理、包装、储存、拒收批次处理和残余物管理来避免分配。 | `iso-14044-2006` |
| `allocation_output_completeness` | 水稻种子和非参考输出 | 在选择分配方法前，列出合格种子、有意销售的联产品、拒收种子、筛下物、损失、残余物和废物去向。 | `iso-14044-2006`; `mass-balance-identity` |
| `allocation_method_selection` | 共享负荷 | 仍需分配时，声明选定的物理或经济关系、数据期间和敏感性；不得使用 module 提供的默认产品数量。 | `iso-14044-2006` |
| `allocation_seed_quality` | 种子等级和质量 | 除非有文件支持的物理或经济关系，不得仅按种子质量声明分配；合格种子和不合格去向必须可追溯。 | `irri-rice-seed-quality`; `iso-14044-2006` |
## 8. 前景数据采集、计算与质量规则
### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_seed_lot` | `rice_seed_multiplication` | 来源种子批次 | 批次和播种记录 | 批次号；品种或杂交组合；种子等级；供应商；处理；质量；播种日期；田块 | 批次证书、发票和播种日志 | kg 和声明属性 | 每批次和作季 | 完整作季 | 田块或种子农场 | 按批次求和并关联播种面积 | 批次证书和校准秤 |
| `cp_nutrient_records` | `rice_seed_multiplication` | 养分和土壤改良投入 | 投入台账 | 产品；养分含量；质量；田块；日期；供应商；施用方法 | 发票、施用日志和田间记录 | kg product 和 kg nutrient | 每次施用 | 作季 | 田块或地块 | 按产品和养分求和 | 发票和施用记录 |
| `cp_irrigation_records` | `rice_seed_multiplication` | 送达灌溉和取水 | 计量或泵送记录 | 水源；水表；读数；体积；泵送能耗；日期；田块 | 校准水表、泵送日志或发票 | m3、kg 和能源单位 | 每次或每期 | 灌溉季 | 田块和水源 | 区分取水、送达、消耗和损失 | 水表校准和读数 |
| `cp_field_energy_records` | `rice_seed_multiplication` | 田间能源 | 机械或燃料记录 | 作业；载能体；数量；设备；田块；日期 | 燃料台账、机械记录或实测作业 | L、kg、MJ 或 kWh | 每次作业 | 作季 | 田块和机械组 | 按作业和载能体求和 | 燃料发票或机械记录 |
| `cp_crop_protection_records` | `rice_seed_multiplication` | 作物保护 | 施用记录 | 产品；活性成分；施用率；面积；日期；田块；天气条件 | 施用日志和产品标签 | kg product、kg active ingredient 或声明单位 | 每次施用 | 作季 | 田块或地块 | 按产品和活性成分求和 | 施用日志和标签 |
| `cp_land_and_output_records` | `rice_seed_multiplication` | 土地、收获和田间输出 | 田块和收获记录 | 面积；时长；作季年份；收获质量；含水率；残余物；去向 | 田块登记、地磅和水分记录 | ha、day、kg 和 percent | 每块和每次收获 | 作季 | 田块或地块 | 核对面积、时长、收获量和去向 | 田块登记和称量记录 |
| `cp_conditioning_input` | `rice_seed_conditioning` | 接收种子作物 | 接收记录 | 批次；期初质量；含水率；来源田块；日期；转运 | 接收称量和水分检测 | kg 和 percent | 每批次 | 调理季 | 设施和批次 | 统一含水率基准后按批次求和 | 称量和检测记录 |
| `cp_conditioning_energy_records` | `rice_seed_conditioning` | 电力和干燥热 | 公用事业和燃料记录 | 作业；载能体；电表；数量；日期；批次或期间 | 电表、发票和批次日志 | kWh、MJ、L 或 kg | 每批次或期间 | 调理季 | 设施和产线 | 仅使用声明的分摊驱动 | 电表和发票 |
| `cp_seed_treatment_records` | `rice_seed_conditioning` | 处理材料 | 处理批次记录 | 产品；活性成分；施用率；处理质量；批次；日期 | 批次单和产品记录 | kg product 和 kg treated seed | 每批次 | 调理季 | 设施和批次 | 按处理产品和输出求和 | 批次单和标签 |
| `cp_packaging_records` | `rice_seed_conditioning` | 包装 | 包装台账 | 材料；规格；件数；质量；容量；批次；日期 | 领料记录和称量 | kg、m2 或 item | 每批次或期间 | 调理季 | 设施 | 按材料和包装状态求和 | 库存记录和称量 |
| `cp_accepted_seed_output` | `rice_seed_conditioning` | 参考输出 | 质量和发运记录 | 批次；合格质量；含水率；纯度；发芽率；处理；包装；门点 | 质量证书、称量和发运记录 | kg 和声明质量单位 | 每批次 | 声明报告期 | 设施和目标门点 | 质量放行后的合格输出求和 | 证书和校准秤 |
| `cp_reject_and_screening_records` | `rice_seed_conditioning` | 筛下物和拒收物 | 筛分和处置记录 | 批次；材料；质量；含水率；去向；去向类型 | 筛分日志和处置记录 | kg 和声明去向 | 每批次 | 调理季 | 设施 | 按去向和材料求和 | 称量和处置记录 |
| `cp_packaging_waste_records` | `rice_seed_conditioning` | 包装废物 | 废物日志 | 材料；质量；来源；去向；日期 | 废物日志和转移记录 | kg | 每批次或期间 | 调理季 | 设施 | 按材料和去向求和 | 废物转移记录 |
| `cp_conditioning_emissions` | `rice_seed_conditioning` | 粉尘和直接排放 | 排放记录 | 来源；物质；数量；方法；日期；产线 | 实测排放或书面计算 | kg | 每批次或期间 | 调理季 | 设施 | 按排放路径求和 | 监测记录或方法表 |
| `cp_storage_records` | `rice_seed_storage_and_delivery` | 储存能源和损失 | 储存和发运记录 | 期初质量；期末质量；含水率；储存天数；能源；损失；门点 | 库存、计量、水分和发运记录 | kg、percent、day 和 kWh 或 MJ | 每批次或期间 | 声明储存期 | 设施和目标门点 | 核对转运、含水率、合格输出和损失 | 称量、电表和发运记录 |
### 计算规则
| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_reference_output` | 合格水稻种子 | 以声明含水率和门点计量质量放行后的合格净质量 | `cp_accepted_seed_output` | kg 参考输出 | `mass-balance-identity` |
| `convert_moisture_basis` | 收获和调理 | 干物质 = 湿质量 ×（1 − 含水率分数）；目标基准质量 = 干物质 /（1 − 目标含水率分数） | `cp_conditioning_input`; `cp_accepted_seed_output` | 统一含水率基准下的质量 | `mass-balance-identity`; `fao-rice-postharvest` |
| `calculate_water_withdrawal` | 灌溉 | 按水源计量取水除以参考输出归一化；另行报告送达量和消耗量 | `cp_irrigation_records`; `cp_accepted_seed_output` | 每 kg 参考输出的 kg 或 m3 水 | `fao-crop-evapotranspiration-56` |
| `calculate_direct_soil_n2o` | 田间氮 | 应用选定 IPCC 或区域方法，并在需要时将 N2O-N 换算为 N2O | `cp_nutrient_records`; 声明的方法因子 | 每 kg 参考输出的 kg N2O | `ipcc-2019-managed-soils-n2o` |
| `calculate_energy_normalization` | 田间、调理和储存能源 | 按过程和载能体合计能源记录，按合格参考输出归一化，不与水或材料数量合并 | 能源协议；`cp_accepted_seed_output` | 每 kg 参考输出的 MJ 或 kWh | `mass-balance-identity` |
| `calculate_output_fates` | 田间、调理和储存 | 统一含水率基准下，合格种子 + 有意联产品 + 拒收物 + 损失 + 声明残余物 = 实测输入，并在声明容差内核对 | 输出和输入协议 | 输出对账和未解释差额 | `mass-balance-identity`; `fao-rice-postharvest` |
### 数据质量要求
| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考输出和批次 | 声明水稻品种或杂交组合、种子等级、批次身份、地理位置、作季年份、门点、含水率基准、处理状态和质量检测基准。 | 批次证书、田间记录、质量证书、发运记录 |
| `dq_flow_resolution` | 所有参数化行 | 最终 TIDAS 交换发布前，将每个参数化 Flow Set 行解析为已核实的平台 UUID，并保留所选 group 和项目上下文。 | 最终交换记录和 Flow Set 选择记录 |
| `dq_input_completeness` | 田间和调理清单 | 对来源种子、养分、灌溉、作物保护、土地、田间能源、泵送、干燥、调理、包装、储存和直接排放给出数量、合理为零或书面排除。 | 台账、日志、计量、发票和方法声明 |
| `dq_moisture_and_mass` | 收获和调理 | 使用校准的质量和水分记录，在统一基准上核对接收、干燥、合格、拒收和损失材料。 | 称量校准、水分检测和对账 |
| `dq_representativeness` | 数据集画像 | 披露时间、地理、品种、生产系统、技术和设施覆盖，并解释与声明路线的偏差。 | 抽样方案和元数据 |
| `dq_quality_evidence` | 种子质量 | 保存纯度、发芽率、含水率和处理状态的检测方法、样本量、批次覆盖、实验室或检验人身份和放行决定。 | 质量证书和检测记录 |
## 9. 验证规则
| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_reference_binding` | 参考产品 | 确认参考产品使用已核实的平台 UUID 和声明种子门点限定信息；最终交换必须保留该 UUID。 | `mass-balance-identity` |
| `validation_binding_coordinates` | 所有绑定行 | 确认每个绑定行只使用 `fixed` 或 `parameterized`；每个 fixed 行包含已核实 UUID，每个参数化行包含已存在的 Flow Set id、版本以及兼容的 group 或坐标。 |  |
| `validation_flow_coordinates` | 所有清单行 | 确认方向和流类型与结构坐标一致：材料、养分、水、能源和包装为产品输入；产品输出为产品输出；资源取用为基本流输入；环境排放为基本流输出。 |  |
| `validation_quality_identity` | 参考输出 | 确认种子等级、批次、品种或杂交组合、含水率基准、纯度、发芽率、处理、地理位置、作季年份和门点齐全。 | `irri-rice-seed-quality` |
| `validation_moisture_and_mass_balance` | 收获、调理和储存 | 确认统一基准的质量对账，以及合格种子、联产品、拒收物、残余物、粉尘和储存损失的声明去向。 | `fao-rice-postharvest`; `mass-balance-identity` |
| `validation_nutrient_and_emissions` | 养分和田间排放 | 确认产品养分质量与 kg nutrient 区分，并声明氮排放方法、单位换算和受纳环境。 | `ipcc-2019-managed-soils-n2o` |
| `validation_water` | 灌溉和取水 | 确认取水、送达灌溉、消耗和水足迹指标区分且不重复计算。 | `fao-crop-evapotranspiration-56` |
| `validation_allocation` | 共享负荷和输出 | 确认先考虑过程细分，输出去向完整，分配方法已声明，并在重要时报告敏感性。 | `iso-14044-2006` |
## 10. 发布数据集画像
| 字段 | 值 |
| --- | --- |
| dataset_role | 带有外购投入和服务背景链接的前景二级数据集 |
| downstream_use | 构建水稻种子供应过程和生命周期模型；在共同参考流下比较声明的水稻种子路线 |
| allowed_use | 与声明等级、品种或杂交组合、地理位置、作季、质量基准、处理状态、门点和包装状态一致的播种水稻种子 |
| excluded_use | 碾米用稻谷；糙米或精米；食用或饲用稻谷；下游水稻种植；门点、含水率、质量状态不兼容或输出损失未解释的数据集 |
| required_metadata | 参考 Flow Set 解析；种子等级；批次和品种或杂交组合；地理位置；作季年份；生产系统；灌溉；养分和作物保护记录；土地；能源；含水率基准；纯度；发芽率；处理；包装；门点；输出去向；分配；数据质量披露 |
| required_quality_disclosure | 原始记录覆盖；时间和地理代表性；称量和水分校准；参数化 Flow Set 解析；养分和排放方法；水源；能源载体；门点；排除项；分配；敏感性；module 清单结果 |
| update_trigger | 种子等级、品种或杂交组合、门点、含水率约定、质量标准、生产路线、灌溉、养分或作物保护做法、调理技术、储存时长、包装、输出去向、Flow Set 契约或证据状态发生实质变化 |
## 11. 数据源
| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `irri-rice-seed-quality` | official_guidance | International Rice Research Institute, Rice Knowledge Bank, seed quality guidance, <https://www.knowledgebank.irri.org/step-by-step-production/pre-planting/seed-quality> | 种子等级、纯度、发芽率、批次质量和放行证据 |
| `fao-rice-postharvest` | official_guidance | FAO, Agricultural engineering in development: post-harvest systems, <https://www.fao.org/4/t0522e/T0522E03.htm> | 干燥、清理、处理、含水率、损失和调理过程分解 |
| `fao-crop-evapotranspiration-56` | official_guidance | FAO Irrigation and drainage paper 56，*Crop evapotranspiration*，<https://www.fao.org/4/X0490E/X0490E00.htm> | 灌溉数据采集及水量区分 |
| `ipcc-2019-cropland` | method_factor | IPCC 2019 Refinement，Volume 4，Chapter 5 Cropland，<https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch05_Cropland.pdf> | 耕地管理、残余物、土地和生产方法背景 |
| `ipcc-2019-managed-soils-n2o` | method_factor | IPCC 2019 Refinement，Volume 4，Chapter 11，<https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf> | 管理土壤氮排放方法和因子选择 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 分配层级、数据质量和敏感性要求 |
| `mass-balance-identity` | method_factor | 应用于 PCR 计算身份的质量守恒 | 含水率换算、输出对账和 QA 校验范围 |
