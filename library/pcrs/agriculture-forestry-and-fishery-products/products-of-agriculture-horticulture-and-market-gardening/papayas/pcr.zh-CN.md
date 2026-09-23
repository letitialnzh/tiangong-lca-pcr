---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.papayas
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 木瓜

## 1. 范围与适用性

本 PCR 覆盖在露地或保护地管理种植中生产，并在声明的农场交接点或第一包装场交接点交付的新鲜整果木瓜。边界从声明的生产周期开始，包含种植材料接收、作物建立、作物管理、灌溉、养分和土壤改良剂使用、植保、采收、可选的场内分选或清洗，以及在声明交接点前发生的初级包装。适用于整果鲜木瓜；品种、大小、等级、成熟度和生产路线差异应在前景数据包中披露。

本 PCR 不包含种植材料、肥料、土壤改良剂、植保产品、燃料、电力、包装、运输、储存、零售、消费者使用、木瓜浆或果汁加工，以及声明交接点之后的废物处理。上述活动跨越边界时作为上游或下游数据集表示。木瓜种子或幼苗不作为木瓜果实产出处理。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.papayas |
| classification_refs | CPC 3.0:01317 |
| covered_products | 管理种植获得的新鲜整果木瓜，包括加工前在农场或第一包装场呈现的产品 |
| excluded_products | 干制、冷冻、罐装、打浆、榨汁、发酵或其他加工木瓜；木瓜种植材料；作为独立产品销售的木瓜废弃物 |
| representative_product | 在声明农场或第一包装场交接点的可销售新鲜整果木瓜 |
| production_route | 露地或保护地种植，随后采收，并可进行初级分选、清洗、冷却和包装 |
| market_state | 在声明交接点的新鲜整果可销售产品；品种、等级、成熟度和包装状态为必需限定信息 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明农场或第一包装场交接点交付的可销售新鲜整果木瓜 |
| How much | 1 kg 可销售新鲜整果木瓜 |
| How well | 符合声明品种或产品身份、成熟度、等级、大小、修整、清洗、冷却和包装限定信息的整果 |
| How long or cycle | 一个声明的生产周期和采收批次；所有采收批次应关联同一田块或保护地单元及声明交接点 |
| reference_flow_link | 声明交接点的新鲜整果木瓜；产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 农场或第一包装场交接点的新鲜整果木瓜 `5f8859fd-4690-4c28-afbe-c4846a84da32` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 木瓜身份和品种；生产国家或地区；露地或保护地路线；田块或保护地单元标识；周期和采收日期；种植面积；灌溉来源和方法；养分及土壤改良剂产品和养分基准；植保方案；采收质量；可销售等级和成熟度；拒收物和残余物去向；清洗；冷却；包装；声明交接点 |
| 绑定模式 | 参考产品流保持未映射 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 采收果实和交接点产出 | Mass | kg | 将采收总质量、可销售木瓜、降级或拒收果、修剪物和田间残余物作为不同数量记录。 |
| `area_and_cycle_normalization` | 建立和作物管理 | Area and mass | ha and kg | 在将投入和产出归一化到可销售产品前，记录每个田块或保护地单元、种植面积、周期日期和采收批次。 |
| `nutrient_equivalent_basis` | 肥料和土壤改良剂投入 | Product mass and nutrient mass | kg product, kg N, kg P2O5, or kg K2O | 记录实际产品和声明养分浓度；保留模型采用产品质量还是养分当量的基准。 |
| `irrigation_volume` | 灌溉和取水 | Volume | m3 | 区分水源取水量和输送到作物的水量；模型化降水时另行记录降水。 |
| `multiple_harvest_reconciliation` | 多次采收 | Mass | kg | 只有在采收批次关联到同一田块或保护地单元、周期、品种、等级和声明交接点后，才汇总采收批次。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已准备的生产田块或保护地单元接收木瓜种子或幼苗材料，并披露此前土地利用和建立前作业 |
| starting_condition_role | 声明木瓜生产周期的开始 |
| product_classification_scope | CPC 3.0:01317 的新鲜整果木瓜，直至声明的农场或第一包装场交接点 |
| recursive_input_rule | 外购木瓜种子或幼苗作为上游产品投入只关联一次；不在本 PCR 内重新创建额外的木瓜果实周期。 |
| upstream_dataset_requirement | 使用与种子或幼苗、肥料和改良剂、植保产品、灌溉水、能源、包装、运输和废物处理相容的上游数据集，只要这些活动在声明交接点前使用。 |
| disclosure | 声明品种或产品身份、地理范围、路线、田块或保护地面积、周期日期、灌溉来源和方法、养分基准、植保方案、采收批次、等级和成熟度、清洗、冷却、包装、拒收物去向、残余物去向和交接点。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 作物建立和作物管理 | 纳入从声明起始条件到所代表采收批次的投入和直接种植交换，并将其分配到同一声明周期的可销售产出。 | `fao-papaya-production-guidance` |
| `boundary_declared_gate` | 采收和交接点处理 | 终止于声明的农场或第一包装场交接点；只有在该交接前发生时，才纳入分选、修整、清洗、冷却和初级包装。 | `codex-cxc-53-2003` |
| `boundary_soil_emissions` | 管理土壤和残余物 | 对氮肥、改良剂和返还残余物氮使用一个声明的方法，并避免重复计算上游或投入造成的排放。 | `ipcc-2019-managed-soils` |
| `boundary_residue_fate` | 田间残余物和拒收物 | 按去向记录田间残余物和采后拒收物；未说明去向的拒收物或残余物不是共产品。 | `fao-papaya-production-guidance` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `papaya_crop_establishment` | 木瓜作物建立 | required | 每个所代表的作物周期 | 前景建立 | 种植面积、种植材料数量和周期 |
| `papaya_crop_management` | 木瓜作物管理 | required | 每个所代表的作物周期 | 前景管理型生物生产 | 田块或保护地周期和可销售产出 |
| `papaya_harvest` | 木瓜采收和田间处理 | required | 每个所代表的采收批次 | 前景采收和田间分流 | 采收总量、可销售产出、拒收物和残余物 |
| `papaya_gate_preparation` | 木瓜交接点准备和交付 | conditional | 仅在声明交接点前发生分选、清洗、冷却或初级包装时 | 前景交接点处理 | 1,000 kg 可销售新鲜木瓜 |

### 过程：木瓜作物建立（`papaya_crop_establishment`）

#### 输入

##### 产品流

###### 木瓜种植材料（`papaya_planting_material`）

记录进入声明田块或保护地单元的种子、幼苗或嫁接种植材料。识别材料类型，不要将其作为可销售木瓜果实产出。

- 选定流：木瓜种子或幼苗种植材料
- 流属性/单位：Number of items or mass / seedling or kg
- 数量规则：按品种、田块或保护地单元和周期计数或称量种植材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个种植公顷或保护地单元，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_establishment_records`
- 来源：`fao-papaya-production-guidance`

###### 农业养分与肥料投入（`papaya_crop_establishment_agricultural_nutrient_inputs`）

本过程使用的全部矿质肥料、有机肥料和含养分改良剂统一记录在此卡。保留每种实际产品的身份、数量、配方、养分组成、施用事件和分配关系；复合产品不得重复计数。

- 选定流：农业养分与肥料供应
- 流属性/单位：产品数量和养分含量 / 视情况采用 kg 产品、m3 产品、kg N、kg P2O5 和 kg K2O
- 绑定模式：`parameterized`
- Flow Set：`flow-set.agricultural-nutrient-supply`
- Flow Set version：`0.3.0`
- 数量规则：每种实际产品仅采集一次数量并保留其组成；计算声明的 N、P 或 P2O5、K 或 K2O 数量，不重复计算复合或有机产品；生成前景数据时展开记录，并将每个输出的产品交换解析到一个经核实 UUID。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-papaya-production-guidance`
- 数量范围：暂定建立期养分筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：600
  - 单位：kg product/ha or protected-unit cycle
  - 基准：等待产品发票、土壤测试和养分声明前的宽泛筛选区间
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 木瓜生产土地占用（`papaya_land_occupation`）

记录声明木瓜周期的耕作面积和占用时间；区分生产性土地的年度化占用与土地转化。

- 选定流：农业土地占用
- 流属性/单位：Area-time / m2*year
- 数量规则：种植面积乘以该周期在一年中的占用比例。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_papaya_establishment_records`
- 来源：`fao-papaya-production-guidance`

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：木瓜作物管理（`papaya_crop_management`）

#### 输入

##### 产品流

###### 作物周期灌溉水（`papaya_irrigation_water`）

按来源和灌溉技术记录输送给作物的水；除非研究明确将降水作为取水量模型化，否则排除降水。

- 选定流：灌溉水
- 流属性/单位：Volume / m3
- 绑定：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`irrigation-water`
- 数量规则：按田块或保护地单元和周期计量或记录输送的灌溉水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-irrigation-drainage-paper-56`
- 数量范围：暂定灌溉筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20,000
  - 单位：m3/ha or protected-unit cycle
  - 基准：取决于气候、土壤、品种、作物年龄和灌溉技术的宽泛区间
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作物周期移动机械燃料（`papaya_mobile_fuel`）

记录拖拉机、水泵、喷雾器、割草机和其他移动或田间机械使用且跨越种植边界的燃料。

- 选定流：移动机械燃料
- 流属性/单位：Energy or mass / MJ or kg fuel
- 绑定：`parameterized`
- Flow Set：`flow-set.energy-supply`
- Flow Set version：`0.2.0`
- Flow Set group：`mobile-machinery-fuel`
- 数量规则：根据计量、发票或设备日志分配到木瓜田块或保护地单元。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-papaya-production-guidance`

###### 植保产品（`papaya_crop_protection`）

只记录实际施用的植保产品，并保留有效成分、制剂、施用量和目标处理信息。产品身份在获得审查确认前保持证据缺口。

- 选定流：木瓜植保产品
- 流属性/单位：Mass / kg product or kg active ingredient
- 数量规则：按施用事件记录产品质量和声明的有效成分质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-papaya-production-guidance`

##### 废物流

##### 基本流

###### 作物生产取水（`papaya_water_withdrawal`）

当水源取水量与输送给作物的水量不同时，记录水源取水，并披露水源类型以及回流或损失处理。

- 选定流：水资源取水
- 流属性/单位：Volume / m3
- 数量规则：记录水源取水计量或有文件支持的取水体积，并与灌溉输送量核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_input_records`
- 来源：`fao-irrigation-drainage-paper-56`

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 管理土壤氮排放（`papaya_soil_nitrogen_emissions`）

根据声明的肥料、改良剂和返还残余物氮基准，使用一个声明的方法计算直接和间接管理土壤氮排放。

- 选定流：管理土壤氮排放
- 流属性/单位：Mass / kg N or kg N2O-N
- 数量规则：对有记录的氮投入和保留残余物基准应用声明的方法因子；不得重复计算上游数据集已提供的排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_papaya_input_records`
- 来源：`ipcc-2019-managed-soils`

### 过程：木瓜采收和田间处理（`papaya_harvest`）

#### 输入

##### 产品流

###### 采收容器或田间周转箱（`papaya_harvest_containers`）

记录进入采收作业的可重复使用或一次性采收容器，并区分可重复使用的服务周期和消耗的包装材料。

- 选定流：采收容器或周转箱功能
- 流属性/单位：Mass or item-service / kg or container-use
- 绑定：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`pallet-and-crate-packaging`
- 数量规则：计数容器使用次数；消耗性容器跨越边界时记录其材料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收批次，再按每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_harvest_records`
- 来源：`codex-cxc-53-2003`

##### 废物流

###### 采收拒收物（`papaya_harvest_rejects`）

记录采收或田间分选中拒收的果实，并说明其留在田间、堆肥、饲喂、进入其他产品路线或送往废物处理的去向。

- 选定流：木瓜采收拒收物
- 流属性/单位：Mass / kg wet fruit
- 数量规则：按批次和去向称量或核算拒收果；没有文件化接收路线时不得将其作为共产品给予信用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收批次，再按每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_harvest_records`
- 来源：`fao-papaya-production-guidance`

##### 基本流

###### 田间残余物（`papaya_field_residue`）

记录留在田间或从田间移出的不可销售植株材料和果实残余物，并披露其去向和处理。

- 选定流：木瓜田间残余物
- 流属性/单位：Mass / kg dry matter or wet biomass
- 数量规则：按称量、文件化生物量采样估计，或根据田块和周期的采收及可销售质量平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个作物周期，再按每 1,000 kg 可销售产出
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_papaya_harvest_records`
- 来源：`fao-papaya-production-guidance`

#### 输出

##### 产品流

###### 采收木瓜总量（`papaya_gross_harvest`）

记录分级、拒收、修整、清洗、冷却或初级包装前的新鲜木瓜采收总量。

- 选定流：新鲜整果木瓜，采收总量
- 流属性/单位：Mass / kg
- 数量规则：在田间或采收站入口对每个采收批次称量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个采收批次，再按每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_harvest_records`
- 来源：`fao-papaya-production-guidance`

##### 废物流

##### 基本流

### 过程：木瓜交接点准备和交付（`papaya_gate_preparation`）

#### 输入

##### 产品流

###### 进入交接点准备的采收木瓜总量（`papaya_gate_input`）

当交接点前发生准备时，将进入分选、清洗、冷却或初级包装的采收批次与采收过程产出核对。

- 选定流：新鲜整果木瓜，采收总量
- 流属性/单位：Mass / kg
- 数量规则：将接收称量与来源采收批次和声明交接点核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个交接点准备批次，再按每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_gate_records`
- 来源：`codex-cxc-53-2003`

###### 条件性交接点清洗水（`papaya_washing_water`）

仅在声明交接点前清洗木瓜时记录用水，并包含用水处理或排放去向。

- 选定流：木瓜清洗用工艺水
- 流属性/单位：Volume / m3
- 绑定：`parameterized`
- Flow Set：`flow-set.water-use`
- Flow Set version：`0.2.0`
- Flow Set group：`process-water`
- 数量规则：记录进入清洗作业的计量水量或批次水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 在声明交接点前清洗的可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_gate_records`
- 来源：`codex-cxc-53-2003`

###### 条件性初级包装（`papaya_primary_packaging`）

仅记录声明交接点前使用的初级包装，包括材料、质量、重复使用周期和包装损失。

- 选定流：新鲜木瓜初级包装功能
- 流属性/单位：Mass or item-service / kg or package-use
- 绑定：`parameterized`
- Flow Set：`flow-set.packaging-function`
- Flow Set version：`0.2.0`
- Flow Set group：`carton-and-box-packaging`
- 数量规则：按可销售产出批次计数包装，并记录消耗材料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 在声明交接点前包装的可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_gate_records`
- 来源：`codex-cxc-53-2003`

##### 废物流

###### 交接点准备废水或清洗损失（`papaya_gate_wastewater`）

记录声明交接点前产生的废水或清洗相关产品损失，并关联处理或排放路线。

- 选定流：木瓜交接点准备废水或清洗损失
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：从交接点准备批次平衡中计量或核算废水和清洗损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 在声明交接点前清洗的可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_papaya_gate_records`
- 来源：`codex-cxc-53-2003`

##### 基本流

#### 输出

##### 产品流

###### 声明交接点的新鲜整果木瓜（`papaya_marketable_output`）

记录经过声明的分级、可选清洗、冷却和初级包装后的可销售产出。

- 选定流：农场或第一包装场交接点的新鲜整果木瓜＼
- 流属性/单位：Mass / kg
- 数量规则：按声明交接点的等级、成熟度和呈现状态汇总合格批次质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 可销售产出的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_papaya_gate_records`
- 来源：`codex-cxc-53-2003`

##### 废物流

###### 交接点拒收物和包装损失（`papaya_gate_rejects`）

记录声明交接点前被降级的果实、修整物、受损果实和包装损失，并说明各自去向。

- 选定流：木瓜交接点拒收物和包装损失
- 流属性/单位：Mass / kg wet fruit or kg packaging
- 数量规则：按每个交接点准备批次核对接收质量、合格产出、拒收物和实测过程损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_papaya_gate_records`
- 来源：`codex-cxc-53-2003`

##### 基本流

## 7. 分配与共产品处理

- `allocation_marketable_output`：使用可销售质量作为主要产出基准，将作物周期投入和直接种植交换分配给可销售新鲜木瓜。`source_ids`：`iso-14044-2006`。
- `allocation_rejects`：除非文件化接收路线产生单独规定的共产品，否则将田间和交接点拒收物作为废物处理。本 PCR 不提供避免产品信用。`source_ids`：`iso-14044-2006`、`fao-papaya-production-guidance`。
- `allocation_reusable_containers`：按记录的服务周期对可重复使用采收容器和周转箱建模，将其生产负荷分摊到记录的使用次数，并将消耗性包装作为独立投入保留。`source_ids`：`iso-14044-2006`、`codex-cxc-53-2003`。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_papaya_establishment_records` | `papaya_crop_establishment` | planting material and occupied area | field establishment record | cultivar; material type; supplier; quantity; field or protected-unit id; planted area; cycle start | supplier record, planting log, and area register | seedling, kg, ha | each cycle | full declared crop cycle | each represented field or protected unit | reconcile planted quantity and area to the same cycle | purchase record, planting log, and field map |
| `cp_papaya_input_records` | `papaya_crop_management` | water, fuel, nutrient products, crop protection, and emissions basis | input and application record | product; formulation; nutrient or active ingredient; quantity; source; application date; irrigation meter; fuel meter; field id | invoice review, meter reading, application log, and source register | kg product, kg nutrient, m3, MJ, kg fuel | each application or meter period | full declared cycle | each represented field or protected unit | sum applications and meter periods after field and cycle reconciliation | invoices, meters, calibration checks, and application records |
| `cp_papaya_harvest_records` | `papaya_harvest` | containers, harvest, rejects, and residue | harvest lot and residue record | lot id; date; field id; gross mass; grade; reject mass; residue mass; container use; destination | calibrated scale, lot sheet, container log, and residue estimate | kg and container-use | each harvest lot | full harvest campaign | each harvest lot | aggregate only lots sharing field, cycle, cultivar, grade, and gate | scale check, lot reconciliation, and destination evidence |
| `cp_papaya_gate_records` | `papaya_gate_preparation` | receiving, washing, packaging, output, and gate rejects | packing or gate batch record | batch id; received mass; wash water; wash loss; packaging type and mass; cooling; accepted mass; reject mass; destination; gate | batch sheet, water meter, packaging issue record, and scale | kg, m3, package-use | each gate batch | full period before declared hand-off | each declared farm or first packing-site gate | reconcile batch input to accepted output and separately identified losses | scale and meter checks, packaging records, and destination records |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_marketable_normalization` | all processes | 将每项采集数量归一化到声明交接点的合格木瓜质量：`quantity / marketable_gate_mass`。 | field, cycle, lot, and gate records | quantity per kg or 1,000 kg marketable papaya | `iso-14044-2006` |
| `calc_nutrient_equivalent` | fertilizer and soil amendments | `product_mass × declared nutrient fraction`；分别保留产品质量和养分当量结果。 | product invoice, formulation, and declared N/P2O5/K2O fraction | product mass and nutrient mass | `fao-papaya-production-guidance` |
| `calc_soil_nitrogen_emissions` | managed soil emissions | 对有记录的氮投入和返还残余物氮应用一个选定的 IPCC 兼容因子方法，不重复计算上游排放。 | nutrient records, residue basis, method factor | declared soil-emission flows | `ipcc-2019-managed-soils` |
| `calc_mass_balance` | harvest and gate preparation | `gross harvested mass = marketable output + rejects + residue or process loss`，文件化库存变化另行显示。 | harvest lots, gate batches, reject and residue records | reconciled mass-balance check | `codex-cxc-53-2003` |
| `calc_reusable_container_burden` | harvest containers and crates | 用容器生产负荷除以文件化服务周期，并将本次使用份额分配到所代表的木瓜产出。 | container mass, material, expected or observed service cycles | container burden per declared output | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all product and input flows | 声明品种、材料或产品身份、田块或保护地单元、交接点，以及没有固定或参数化绑定时的身份证据记录。 | source records, labels, invoices, and dataset metadata |
| `quality_measurement` | mass, water, fuel, nutrient, and packaging rows | 尽可能使用经过校准的秤或计量表；否则记录估计方法、换算因子和不确定性。 | calibration record, meter log, or estimation worksheet |
| `quality_temporal` | all processes | 覆盖完整声明生产周期和采收批次，并披露缺失期间或替代记录。 | cycle calendar, lot register, and data-quality note |
| `quality_completeness` | inventory and emissions | 将田间投入、采收、合格产出、拒收物、残余物、水、养分基准和包装与声明交接点核对。 | mass balance, application log, and gate batch reconciliation |
| `quality_disclosure` | dataset package | 在数据集元数据中保留所有必需限定信息、边界决定、分配选择、Flow Set 绑定和身份证据缺口覆盖。 | dataset metadata and PCR conformance checklist |

## 9. 校验规则

- `validation_identity`：数据集必须识别木瓜品种或产品类别、田块或保护地单元、生产路线、周期、声明交接点以及所有证据缺口的投入或产出身份。`source_ids`：`fao-papaya-production-guidance`。
- `validation_mass_balance`：每个采收和交接点批次中，采收或接收总质量必须与可销售产出、拒收物、残余物、废水或清洗损失、包装损失和披露的库存变化相符。`source_ids`：`codex-cxc-53-2003`。
- `validation_normalization`：每个归一化库存值必须使用同一声明的可销售交接点质量，不得混用农场交接点和第一包装场产出。`source_ids`：`iso-14044-2006`。
- `validation_nutrient_emissions`：养分当量投入和管理土壤排放必须声明其基准，并使用一种不重复计算的方法。`source_ids`：`ipcc-2019-managed-soils`。
- `validation_temporal`：数据集必须覆盖所代表的生产周期和采收批次，或明确披露缺失记录和替代记录。`source_ids`：`fao-papaya-production-guidance`。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 新鲜整果木瓜的前景农业生产数据集 |
| downstream_use | 农场到交接点 LCA 的二级数据集；当声明交接点和限定信息匹配时，可作为产品系统模型的背景数据集输入 |
| allowed_use | 当品种、地理范围、路线、周期、交接点、可销售产出和库存完整性相容时，用于新鲜整果木瓜的比较或归因建模 |
| excluded_use | 加工木瓜产品；通用水果替代；声明交接点之外的运输、零售、消费者或终端处理声明；未报告拒收物或残余物去向的数据集 |
| required_metadata | 木瓜身份和品种、地理范围、路线、田块或保护地单元、周期日期、面积、灌溉来源、养分和植保基准、采收和等级、清洗、冷却、包装、拒收物和残余物去向、声明交接点、参考质量、Flow Set 绑定和身份证据缺口覆盖 |
| required_quality_disclosure | 计量基准、采集期间、完整性、质量平衡结果、分配规则、暂定范围、数据替代、不确定性和证据缺口 UUID 或流身份 |
| update_trigger | 种植路线、灌溉系统、养分或植保方案、采收或交接点处理、包装、产品定义、方法因子或身份映射发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-papaya-production-guidance` | extension_guidance | FAO 热带水果生产的作物生产和良好农业实践指导 | 生产路线分解、种植、作物管理、采收记录、残余物处理和数据采集 |
| `fao-irrigation-drainage-paper-56` | handbook | FAO Irrigation and drainage paper 56, *Crop evapotranspiration* | 灌溉计量和输水量区分 |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement to the 2006 IPCC Guidelines，管理土壤和氮排放 | 管理土壤氮计算和非重复规则 |
| `codex-cxc-53-2003` | official_guidance | Codex Alimentarius CXC 53-2003，鲜食水果和蔬菜卫生操作规范 | 采收、清洗、包装、卫生、批次核对和交接点处理 |
| `iso-14044-2006` | standard | ISO 14044:2006，环境管理—生命周期评价—要求和指南 | 归一化、分配、可重复使用容器处理和校验原则 |
