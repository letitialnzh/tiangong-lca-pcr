---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-raw-vegetable-materials-n-e-c
language: zh-CN
status: scaffold
sync_with: pcr.en-US.md
---

# 其他未列明的植物原材料

## 1. 范围与适用性

本 PCR 仅用于一个明确命名的原始植物材料和一条完整、可追溯的产品路线。允许的实例包括：(a) 通过受控发酵并回收的指定菌丝蛋白；(b) 经栽培、起收并可选首次整理的指定魔芋块茎；(c) 从已声明种源采集并可选脱取、清理、分级或稳定化的指定林木种子或含种子种球。一个数据包必须只选择其中一条路线，且不得将菌丝蛋白、魔芋块茎、林木种子或种球合并、平均或互作代理。

交付点必须在“收获/采集的原始材料”或“首次整理后的同一材料”中二选一。菌丝蛋白路线的发酵和回收均在边界内；魔芋路线不得包含食品加工、淀粉/葡甘露聚糖提取或零售包装；林木种子路线不得包含育苗、造林和木材生产。对种球作为参考产品的情况，不得同时将其所含种子作为第二参考产品。

受控发酵、农田栽培以及多年生种源管理具有不同拓扑、投入类别、周期和验证要求，属于互斥的替代生产路线。批式或连续发酵必须按生产批次或连续运行期记录；魔芋按田块和作物周期记录；林木种源按种源、结实年份和采集批次记录。

## 2. 产品类别标识

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-raw-vegetable-materials-n-e-c |
| classification_refs | CPC 3.0:01990 |
| covered_products | 一个明确命名的菌丝蛋白、魔芋块茎、林木种子或含种子种球，并处于声明的原始采收态或首次整理态 |
| excluded_products | 不同材料或路线的混合平均；下游食品加工或提取物；育苗、造林、木材产品；未声明树种或种源的通用种子；零售包装产品 |
| representative_product | 一项具名材料，具有声明的物种/菌株、组成或生活力、水分、等级、批次及交付点 |
| production_route | 互斥选择：发酵→回收/稳定化；魔芋栽培→起收/首次整理；林木种源管理→种子/种球采集→脱取/首次整理 |
| market_state | 散装原始或首次整理的植物材料，不含下游制成品 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 选定互斥路线和交付点的一项具名原始植物材料 |
| How much | 1 kg 净产品；林木种子批次可补充粒数或种球数 |
| How well | 声明物种或菌株、材料部位/形态、组成或生活力、水分、纯度/等级、批次、种源（如适用）和稳定化状态 |
| How long or cycle | 菌丝蛋白为一个生产批次或连续运行期；魔芋为一个作物周期；林木种子为一个结实年份和采集批次，并纳入声明的多年期种源负担 |
| reference_flow_link | 下表参考流对象；类别层级 UUID 保持未解析 |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 选定交付点的具名原始植物材料（UUID 未解析） |
| Reference flow property | 质量（UUID 未解析） |
| Reference unit group | 质量单位组（UUID 未解析） |
| Reference unit | kg |
| Required qualifiers | 路线；物种或菌株；产品形态；批次/田块/种源；交付点；水分；固形物或纯度/生活力；等级；处理状态；地域和时间 |

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 所有参考产品 | 质量，具体属性 UUID 待产品确定后核实 | kg | 使用净质量；水分、固形物或纯度必须与质量同时记录，禁止在未测水分时换算干基。 |
| route_state | 路线中间体和产出 | 质量及路线特定状态属性 | kg，并保留原始状态单位 | 菌丝蛋白保留固形物/组成；魔芋保留鲜态、水分和损伤等级；林木种子保留水分、纯度、发芽率或生活力及补充数量。 |
| water_volume | 工艺、灌溉和清洗水 | 体积，或经声明密度换算的质量 | m3 | 按来源和用途分开计量；降雨不得作为购买水流。 |
| transport_service | 场址间运输 | 质量距离 | t·km | 以净载货质量乘载货距离计算，并防止与自有车辆燃料重复计算。 |
| tree_seed_count | 林木种子或种球批次 | 补充数量 | 粒或个 | 数量仅作为质量参考流的补充质量指标，不得替代 1 kg 参考量。 |

## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 菌丝蛋白从已计量培养基投入开始；魔芋从声明的田块前态及繁殖材料投入开始；林木种子从声明的种源和相关结实年份开始。 |
| starting_condition_role | 选定路线的原料生产者、种植者或种源/采集责任方 |
| product_classification_scope | 一个 CPC 3.0 01990 具名产品实例；三类代表材料不得合并 |
| recursive_input_rule | 同类别的内部中间体仅在相邻过程间一次传递；不得同时作为外购上游数据集和本系统重复产出。 |
| upstream_dataset_requirement | 对外购培养基组分、繁殖材料、水、能源、运输和处理服务使用已核实上游数据集；Flow Set 只定义参数化范围，不自动选择具体流。 |
| disclosure | 声明产品和路线、场址、时间、批次/田块/种源、原始与交付状态、处理步骤、所有产出与废弃去向，以及期间、共产品和共享设施归属。 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| route_exclusivity | 完整数据包 | 只允许一条路线。菌丝蛋白、魔芋和林木种子/种球不得同包、平均或互作代理。 | unsd-cpc-3-0-01990 |
| route_handoffs | 所有过程节点 | 记录每个节点的进入状态、离开状态、责任场址和去向；内部中间体必须在相邻节点质量匹配。 |  |
| first_conditioning_limit | 回收与首次整理 | 仅纳入达到首次声明交付点所必需的回收、清理、脱取、分级、干燥或稳定化；排除后续制造和包装。 | mycoprotein-production-review-2019; fao-forest-seed-handling-1985 |
| periods_and_assets | 多年种源和共享设备 | 将种源管理和共享设施负担关联到明确服务期、消费者节点和产出，且只归属一次。 | fao-forest-seed-handling-1985 |
| reject_route | 不合格、返工和废弃物 | 每项不合格状态必须声明为返工、降级、回收、处理或处置；返回上游的物料不得再次计为新投入。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fungal_fermentation | 受控真菌生物量发酵 | conditional | 仅在明确的菌丝蛋白路线中必需；植物和林木种子路线不得包含。 | 批式或连续发酵的受控生物生产 | 按生产批次转入回收工序的净湿真菌生物量 |
| fungal_recovery | 菌丝蛋白回收与首次稳定化 | conditional | 仅当选定产品是在回收或首次稳定化交付点的菌丝蛋白时必需。 | 材料处理与稳定化 | 按生产批次的净合格菌丝蛋白产出 |
| konjac_cultivation | 魔芋繁殖材料投入与栽培 | conditional | 仅在明确的魔芋块茎路线中必需。 | 受控作物生产 | 按田块和作物周期计量的待收获魔芋块茎 |
| konjac_harvest_conditioning | 魔芋起收与首次整理 | conditional | 魔芋路线必需；清洗、干燥或稳定化仅在选定交付点之前实际发生时纳入。 | 收获与初级整理 | 声明鲜态或稳定化状态的净合格块茎 |
| tree_seed_source_management | 林木种源管理 | conditional | 仅在林木种子路线包含受管理母树林、种子园或已识别母树时纳入。 | 跨期受控生物生产 | 按种源和年份声明的可采种球或种子产量 |
| tree_seed_collection | 林木种子或种球采集 | conditional | 仅在林木种子路线中必需；须明确直接采种还是采集含种子的种球或果实。 | 收获与采集 | 按种源和采集批次计量的净采集种子或含种子物料 |
| tree_seed_conditioning | 林木种子脱取与首次整理 | conditional | 当种球、果实或原始种子在选定交付点前进行干燥、开裂、脱取、清理、分级或稳定化时纳入。 | 初级整理、分级与稳定化 | 净合格林木种子或声明的含种子种球产品 |

### 过程: 受控真菌生物量发酵 (`fungal_fermentation`)

本过程必须按具体产品、生产批次、场址和交付点记录，不得跨三条路线合并投入或产出。

#### 投入

##### 产品流

###### 可发酵碳源 (`fermentation_feedstock`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明的碳水化合物原料
- 流属性/单位: kg
- 数量规则: 计量并投加到指定生产批次的干基原料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg 选定交付点菌丝蛋白
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fermentation_run`
- 来源: `mycoprotein-production-review-2019`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.5
  - 上限: 8
  - 单位: kg/kg mycoprotein
  - 基准: Per kg accepted mycoprotein; broad run-screening interval
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 发酵培养基中的氮源、矿物质和工艺助剂 (`fermentation_medium`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 生产批次特定的发酵培养基组分
- 流属性/单位: kg
- 数量规则: 逐项记录培养基组分及浓度；该工业培养基不得作为农业肥料卡处理
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每 1 kg 选定交付点菌丝蛋白
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fermentation_run`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.001
  - 上限: 2
  - 单位: kg/kg mycoprotein
  - 基准: Per kg accepted mycoprotein; broad run-screening interval
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 发酵及清洗用水 (`fermentation_water`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 供应至发酵工序的工艺水
- 流属性/单位: m3
- 绑定: parameterized
- Flow Set: flow-set.water-use
- Flow Set 版本: 0.2.0
- 数量规则: 按生产批次计量，并在记录允许时区分配料水与清洗水
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 先按发酵批次，再归一到每 1 kg 菌丝蛋白
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fermentation_run`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.001
  - 上限: 0.2
  - 单位: m3/kg mycoprotein
  - 基准: Per kg accepted mycoprotein; broad screening interval
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 发酵能源载体及公用工程 (`fermentation_energy`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 实际供应的电力、热力和燃料
- 流属性/单位: carrier-specific
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set 版本: 0.2.0
- 数量规则: 计量曝气、搅拌、灭菌和控制系统的各类能源消耗
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 先按发酵批次，再归一到每 1 kg 菌丝蛋白
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fermentation_run`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.1
  - 上限: 200
  - 单位: MJ-eq/kg mycoprotein
  - 基准: Carrier-specific values converted only for QA; preserve native exchanges
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

#### 产出

##### 产品流

###### 转入回收工序的湿真菌生物量 (`wet_fungal_biomass`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 路线特定的湿真菌生物量
- 流属性/单位: kg
- 数量规则: 按生产批次计量转移质量及固形物含量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个发酵生产批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fermentation_run`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 1
  - 上限: 20
  - 单位: kg/kg mycoprotein
  - 基准: Wet intermediate per kg accepted output
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 送处理的废发酵液 (`spent_fermentation_broth`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 废发酵液
- 流属性/单位: kg
- 数量规则: 计量排放量并扣除已回收的真菌生物量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个发酵生产批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fermentation_run`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 50
  - 单位: kg/kg mycoprotein
  - 基准: Per kg accepted output; broad screening interval
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 发酵生物源二氧化碳 (`fermentation_biogenic_co2`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 排放至空气的生物源二氧化碳
- 流属性/单位: kg
- 数量规则: 根据尾气监测或碳平衡计算；不得采用化石碳因子
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个发酵生产批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_fermentation_run`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 20
  - 单位: kg CO2/kg mycoprotein
  - 基准: Per kg accepted output; carbon-balance QA range
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 菌丝蛋白回收与首次稳定化 (`fungal_recovery`)

本过程必须按具体产品、生产批次、场址和交付点记录，不得跨三条路线合并投入或产出。

#### 投入

##### 产品流

###### 来自发酵的湿真菌生物量 (`wet_biomass_input`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 对应的湿真菌生物量中间产品
- 流属性/单位: kg
- 数量规则: 按批次关联的回收投入质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个回收生产批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fungal_recovery`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 1
  - 上限: 20
  - 单位: kg/kg mycoprotein
  - 基准: Wet biomass input per kg accepted output
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 回收及洗涤用水 (`recovery_water`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 供应至回收工序的工艺水
- 流属性/单位: m3
- 绑定: parameterized
- Flow Set: flow-set.water-use
- Flow Set 版本: 0.2.0
- 数量规则: 计量洗涤、冷却或分离用水
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个回收生产批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fungal_recovery`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.2
  - 单位: m3/kg mycoprotein
  - 基准: Per kg accepted output
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 回收与稳定化能源 (`recovery_energy`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 实际供应的电力、热力和燃料
- 流属性/单位: carrier-specific
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set 版本: 0.2.0
- 数量规则: 计量分离、热处理和冷却的能源消耗
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每个回收生产批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fungal_recovery`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.1
  - 上限: 100
  - 单位: MJ-eq/kg mycoprotein
  - 基准: Per kg accepted output; preserve native carrier records
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 废水处理服务 (`wastewater_treatment_fungal`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 实际废水处理服务
- 流属性/单位: m3
- 绑定: parameterized
- Flow Set: flow-set.waste-treatment-service
- Flow Set 版本: 0.2.0
- 数量规则: 记录处理体积及处理路线，且仅计一次
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个回收生产批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fungal_recovery`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.2
  - 单位: m3/kg mycoprotein
  - 基准: Per kg accepted output
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

#### 产出

##### 产品流

###### 预期产出：声明状态的参考菌丝蛋白 (`mycoprotein_product`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明交付点的指定菌丝蛋白产品
- 流属性/单位: kg
- 数量规则: 记录净合格质量、固形物、水分和稳定化状态
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fungal_recovery`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: Reference product identity check
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 其他预期回收的真菌产品 (`fungal_coproduct`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 回收批次中声明的共产品
- 流属性/单位: kg
- 数量规则: 按交付点分别计量每种预期产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个回收生产批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fungal_recovery`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: kg/kg mycoprotein
  - 基准: Per kg reference output
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 回收残次物及不合格生物量 (`fungal_rejects`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明的废弃真菌物料
- 流属性/单位: kg
- 数量规则: 计量废弃质量并记录返工、处理或处置路径
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个回收生产批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fungal_recovery`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: kg/kg mycoprotein
  - 基准: Per kg accepted output
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 回收废水 (`fungal_wastewater`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 离开回收工序的废水
- 流属性/单位: m3
- 数量规则: 外部处理前计量排放体积
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个回收生产批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_fungal_recovery`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.2
  - 单位: m3/kg mycoprotein
  - 基准: Per kg accepted output
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

### 过程: 魔芋繁殖材料投入与栽培 (`konjac_cultivation`)

本过程必须按具体产品、生产批次、场址和交付点记录，不得跨三条路线合并投入或产出。

#### 投入

##### 产品流

###### 魔芋种芋或其他繁殖材料 (`konjac_propagules`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明的魔芋繁殖材料
- 流属性/单位: kg
- 数量规则: 按批次和田块计量种植材料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 先按作物周期，再归一到每 1 kg 块茎
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_field`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.001
  - 上限: 2
  - 单位: kg/kg tuber
  - 基准: Propagation material per kg accepted tuber
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 合并肥料及养分改良剂 (`konjac_nutrients`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 实际使用的肥料和养分供应产品
- 流属性/单位: product-specific
- 绑定: parameterized
- Flow Set: flow-set.agricultural-nutrient-supply
- Flow Set 版本: 0.3.0
- 数量规则: 在此单一卡中逐项记录矿质肥、有机肥及改良剂产品和养分组成
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 先按田块和作物周期，再归一到每 1 kg 块茎
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_field`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 2
  - 单位: kg product/kg tuber
  - 基准: Combined nutrient products per kg accepted tuber
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 灌溉用水 (`konjac_irrigation`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 供应至魔芋田的灌溉水
- 流属性/单位: m3
- 绑定: parameterized
- Flow Set: flow-set.water-use
- Flow Set 版本: 0.2.0
- Flow Set 分组: irrigation-water
- 数量规则: 按水源、田块和作物期计量取水量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 先按每公顷和作物周期，再归一到每 1 kg 块茎
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_field`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 15000
  - 单位: m3/ha·crop-cycle
  - 基准: Per hectare and declared crop cycle
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 栽培能源载体 (`konjac_energy`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 栽培中实际使用的电力和燃料
- 流属性/单位: carrier-specific
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set 版本: 0.2.0
- 数量规则: 按田间作业计量燃料和电力
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 先按田块和作物周期，再归一到每 1 kg 块茎
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_field`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 20
  - 单位: MJ-eq/kg tuber
  - 基准: Per kg accepted tuber; preserve native carriers
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

#### 产出

##### 产品流

###### 待收获魔芋块茎 (`harvest_ready_konjac`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 达到田间成熟度的指定魔芋块茎
- 流属性/单位: kg
- 数量规则: 计量或核算转入收获工序的块茎质量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个田块和作物周期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_konjac_field`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 100
  - 上限: 100000
  - 单位: kg/ha·crop-cycle
  - 基准: Field yield screening range
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 移出田块的魔芋田间残余物 (`konjac_field_residue`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明的移出田间作物残余物
- 流属性/单位: kg
- 数量规则: 计量移出残余物；留在土壤中的材料不得作为废物流输出
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个田块和作物周期
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_field`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: kg/kg tuber
  - 基准: Removed residue per kg accepted tuber
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 土壤直接氧化亚氮排放 (`konjac_soil_n2o`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 受控土壤排放至空气的氧化亚氮
- 流属性/单位: kg N2O
- 数量规则: 根据场址证据或声明的 IPCC 方法及已记录氮投入计算
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个田块和作物周期
- 基准类型: 氮投入 (`n_input`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_konjac_field`
- 来源: `ipcc-2019-managed-soils`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.05
  - 单位: kg N2O-N/kg N applied
  - 基准: Direct-emission-factor QA range
  - 基准类型: 氮投入 (`n_input`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程: 魔芋起收与首次整理 (`konjac_harvest_conditioning`)

本过程必须按具体产品、生产批次、场址和交付点记录，不得跨三条路线合并投入或产出。

#### 投入

##### 产品流

###### 来自田间的待收获魔芋块茎 (`konjac_field_batch`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 对应的待收获魔芋批次
- 流属性/单位: kg
- 数量规则: 按批次关联进入起收和整理的质量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个收获批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_harvest`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 1
  - 上限: 3
  - 单位: kg/kg accepted tuber
  - 基准: Incoming field batch per kg accepted output
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 魔芋清洗用水 (`konjac_conditioning_water`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 发生清洗时供应的工艺水
- 流属性/单位: m3
- 绑定: parameterized
- Flow Set: flow-set.water-use
- Flow Set 版本: 0.2.0
- 数量规则: 计量清洗水；未清洗时记录为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个收获或整理批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_harvest`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.1
  - 单位: m3/kg accepted tuber
  - 基准: Per kg accepted tuber
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 收获与整理能源 (`konjac_conditioning_energy`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 起收、清理和稳定化实际使用的能源载体
- 流属性/单位: carrier-specific
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set 版本: 0.2.0
- 数量规则: 按作业计量能源载体消耗
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每个收获或整理批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_harvest`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 30
  - 单位: MJ-eq/kg accepted tuber
  - 基准: Per kg accepted tuber; preserve native carriers
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

#### 产出

##### 产品流

###### 声明交付点的合格魔芋块茎 (`konjac_tuber_product`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 指定的魔芋块茎产品
- 流属性/单位: kg
- 数量规则: 记录净合格质量、水分、损伤等级和整理状态
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_harvest`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: Reference product identity check
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 可销售低等级魔芋块茎 (`konjac_lower_grade`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明的低等级块茎产品
- 流属性/单位: kg
- 数量规则: 单独计量并记录去向
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个收获批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_harvest`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg accepted tuber
  - 基准: Per kg reference output
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 废弃块茎、泥土及移除残余物 (`konjac_rejects`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 收获与整理过程声明的废弃物料
- 流属性/单位: kg
- 数量规则: 分别计量各废弃类别及其再利用、处理或处置去向
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个收获批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_konjac_harvest`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 2
  - 单位: kg/kg accepted tuber
  - 基准: Per kg accepted tuber
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

### 过程: 林木种源管理 (`tree_seed_source_management`)

本过程必须按具体产品、生产批次、场址和交付点记录，不得跨三条路线合并投入或产出。

#### 投入

##### 产品流

###### 种源管理能源 (`seed_source_energy`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 母树林或种子园管理实际使用的电力和燃料
- 流属性/单位: carrier-specific
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set 版本: 0.2.0
- 数量规则: 计量修剪、通行和种源管理的能源消耗
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 先按种源和结实年份，再归一到合格种子产出
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_source`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 100
  - 单位: MJ-eq/kg accepted seed
  - 基准: Per kg accepted seed; preserve native carriers
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

#### 产出

##### 产品流

###### 可采集的含种子产物 (`collectable_seed_crop`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明种源上的成熟种子或含种子种球
- 流属性/单位: kg
- 数量规则: 按种源、树种和结实年份估测或计量
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个种源和结实年份
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_tree_seed_source`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 100000
  - 单位: kg/source-year
  - 基准: Source-specific crop estimate
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

### 过程: 林木种子或种球采集 (`tree_seed_collection`)

本过程必须按具体产品、生产批次、场址和交付点记录，不得跨三条路线合并投入或产出。

#### 投入

##### 产品流

###### 种源处成熟种子产物 (`collectable_seed_input`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 对应的成熟种子或含种子产物
- 流属性/单位: kg
- 数量规则: 按种源和年份关联进入采集的物料
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个采集批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_collection`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 1
  - 上限: 10
  - 单位: kg/kg collected material
  - 基准: Available crop per kg collected material
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 采集能源载体 (`seed_collection_energy`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 采集实际使用的电力和燃料
- 流属性/单位: carrier-specific
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set 版本: 0.2.0
- 数量规则: 按采集批次和方法计量能源消耗
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每个采集批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_collection`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 100
  - 单位: MJ-eq/kg collected material
  - 基准: Per kg collected material; preserve native carriers
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

#### 产出

##### 产品流

###### 采集的种子、种球或含种子果实 (`collected_seed_material`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 指定的已采集林木繁殖材料
- 流属性/单位: kg
- 数量规则: 计量净采集质量，并可补充粒数或种球数
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个采集批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_collection`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 1
  - 上限: 100
  - 单位: kg/kg accepted seed product
  - 基准: Collected material per kg final accepted seed product
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 采集过程中移除的伴随生物质 (`collection_incidental_biomass`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明的枝条、种鳞或果实伴随物料
- 流属性/单位: kg
- 数量规则: 计量离开种源的物料；留在现场的物料不得作为废物流输出
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个采集批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_collection`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 20
  - 单位: kg/kg collected material
  - 基准: Per kg collected material
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

### 过程: 林木种子脱取与首次整理 (`tree_seed_conditioning`)

本过程必须按具体产品、生产批次、场址和交付点记录，不得跨三条路线合并投入或产出。

#### 投入

##### 产品流

###### 采集的原始含种子物料 (`raw_seed_material`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 对应的已采集种子、种球或果实
- 流属性/单位: kg
- 数量规则: 按批次关联投入质量及补充数量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个整理批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_conditioning`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 1
  - 上限: 100
  - 单位: kg/kg accepted product
  - 基准: Raw material per kg accepted seed or cone product
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 种子清洗或整理用水 (`seed_conditioning_water`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明路线实际用水时供应的工艺水
- 流属性/单位: m3
- 绑定: parameterized
- Flow Set: flow-set.water-use
- Flow Set 版本: 0.2.0
- 数量规则: 计量用水量；仅干式整理时记录为零
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个整理批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_conditioning`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.1
  - 单位: m3/kg accepted product
  - 基准: Per kg accepted product
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 种子脱取与整理能源 (`seed_conditioning_energy`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 实际供应的电力、热力和燃料
- 流属性/单位: carrier-specific
- 绑定: parameterized
- Flow Set: flow-set.energy-supply
- Flow Set 版本: 0.2.0
- 数量规则: 计量种球开裂、干燥、脱取、清理和分级的能源消耗
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每个整理批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_conditioning`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 500
  - 单位: MJ-eq/kg accepted product
  - 基准: Per kg accepted product; preserve native carriers
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 采集点至整理场的运输服务 (`seed_transport_service`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 实际货物运输服务
- 流属性/单位: t·km
- 绑定: parameterized
- Flow Set: flow-set.transport-service
- Flow Set 版本: 0.2.0
- 数量规则: 根据净运输质量和载货距离计算；同一场址内部转移时省略
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 路线特定 (`route_specific`)
- 归一化基准: 每个整理批次
- 基准类型: 运输服务 (`transport_service`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_tree_seed_conditioning`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 100
  - 单位: t·km/kg accepted product
  - 基准: Per kg accepted product
  - 基准类型: 运输服务 (`transport_service`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。

#### 产出

##### 产品流

###### 合格林木种子或含种子种球产品 (`forest_tree_seed_product`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明交付点的指定林木繁殖材料
- 流属性/单位: kg
- 数量规则: 记录净合格质量、树种、种源、纯度、发芽率或生活力、水分和批次数量
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_conditioning`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 1
  - 上限: 1
  - 单位: kg
  - 基准: Reference product identity check
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 其他预期种子等级 (`tree_seed_lower_grade`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明的低等级或替代等级种子
- 流属性/单位: kg
- 数量规则: 分别计量每个预期等级及其去向
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 每个整理批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_conditioning`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: kg/kg reference seed product
  - 基准: Per kg reference output
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 空粒种子、种鳞、果实残余及废弃物 (`seed_conditioning_rejects`)

本卡仅在所选具体路线和记录条件满足时实例化，并保持批次或场址关联。

- 选定流: 声明的整理废弃物
- 流属性/单位: kg
- 数量规则: 分别计量各废弃类别及去向，包括任何返工循环
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每个整理批次
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_tree_seed_conditioning`

- 数量范围: 暂定筛选与核查范围；在评审前用具体产品、场址、技术和交付点证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 100
  - 单位: kg/kg accepted product
  - 基准: Per kg accepted product
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

本路线未定义该类流；若实际记录显示该流，须先补充语义卡及范围后再纳入。



## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| physical_separation_first | 所有路线 | 优先按批次、田块、种源、计量表或设备运行记录直接划分投入和产出；只有无法直接划分的共享负担才进入分配。 | iso-14044-2006 |
| intended_output_attribution | 多产出过程 | 列出所有预期产品及交付点。若存在独立经济功能，按适用研究规则选择并披露质量、物理因果或经济分配及敏感性；残余物或废物不得伪装为共产品。 | iso-14044-2006 |
| run_period_attribution | 发酵批次、作物周期和结实年份 | 批次清洗和转换损耗归入相关批次；魔芋多年繁殖材料和林木种源/共享设施按记录的服务期和产出归属，禁止跨期重复。 |  |
| rework_burden | 返工和降级产品 | 返工保留已发生负担，只增加实际返工投入；降级产品仅在离开系统且具独立功能时作为预期产出处理。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_fermentation_run | fungal_fermentation | fermentation_feedstock; fermentation_medium; fermentation_water; fermentation_energy; wet_fungal_biomass; spent_fermentation_broth; fermentation_biogenic_co2 | 计量、台账、批次或场址记录 | 产品/物料标识、批次/场址、时间、数量、单位、状态、去向、计量装置 | 从原始记录逐条采集并保留可追溯链接 | 原始单位并记录换算 | 每批次、每批采集或每作物期；至少年度汇总 | 覆盖形成参考产品的完整代表期 | 单一场址或按场址分别记录 | 先按批次/场址核对质量平衡，再归一到参考流 | 仪表/磅单/发票/批记录、校准状态、缺失数据说明 |
| cp_fungal_recovery | fungal_recovery | wet_biomass_input; recovery_water; recovery_energy; wastewater_treatment_fungal; mycoprotein_product; fungal_coproduct; fungal_rejects; fungal_wastewater | 计量、台账、批次或场址记录 | 产品/物料标识、批次/场址、时间、数量、单位、状态、去向、计量装置 | 从原始记录逐条采集并保留可追溯链接 | 原始单位并记录换算 | 每批次、每批采集或每作物期；至少年度汇总 | 覆盖形成参考产品的完整代表期 | 单一场址或按场址分别记录 | 先按批次/场址核对质量平衡，再归一到参考流 | 仪表/磅单/发票/批记录、校准状态、缺失数据说明 |
| cp_konjac_field | konjac_cultivation | konjac_propagules; konjac_nutrients; konjac_irrigation; konjac_energy; harvest_ready_konjac; konjac_field_residue; konjac_soil_n2o | 计量、台账、批次或场址记录 | 产品/物料标识、批次/场址、时间、数量、单位、状态、去向、计量装置 | 从原始记录逐条采集并保留可追溯链接 | 原始单位并记录换算 | 每批次、每批采集或每作物期；至少年度汇总 | 覆盖形成参考产品的完整代表期 | 单一场址或按场址分别记录 | 先按批次/场址核对质量平衡，再归一到参考流 | 仪表/磅单/发票/批记录、校准状态、缺失数据说明 |
| cp_konjac_harvest | konjac_harvest_conditioning | konjac_field_batch; konjac_conditioning_water; konjac_conditioning_energy; konjac_tuber_product; konjac_lower_grade; konjac_rejects | 计量、台账、批次或场址记录 | 产品/物料标识、批次/场址、时间、数量、单位、状态、去向、计量装置 | 从原始记录逐条采集并保留可追溯链接 | 原始单位并记录换算 | 每批次、每批采集或每作物期；至少年度汇总 | 覆盖形成参考产品的完整代表期 | 单一场址或按场址分别记录 | 先按批次/场址核对质量平衡，再归一到参考流 | 仪表/磅单/发票/批记录、校准状态、缺失数据说明 |
| cp_tree_seed_source | tree_seed_source_management | seed_source_energy; collectable_seed_crop | 计量、台账、批次或场址记录 | 产品/物料标识、批次/场址、时间、数量、单位、状态、去向、计量装置 | 从原始记录逐条采集并保留可追溯链接 | 原始单位并记录换算 | 每批次、每批采集或每作物期；至少年度汇总 | 覆盖形成参考产品的完整代表期 | 单一场址或按场址分别记录 | 先按批次/场址核对质量平衡，再归一到参考流 | 仪表/磅单/发票/批记录、校准状态、缺失数据说明 |
| cp_tree_seed_collection | tree_seed_collection | collectable_seed_input; seed_collection_energy; collected_seed_material; collection_incidental_biomass | 计量、台账、批次或场址记录 | 产品/物料标识、批次/场址、时间、数量、单位、状态、去向、计量装置 | 从原始记录逐条采集并保留可追溯链接 | 原始单位并记录换算 | 每批次、每批采集或每作物期；至少年度汇总 | 覆盖形成参考产品的完整代表期 | 单一场址或按场址分别记录 | 先按批次/场址核对质量平衡，再归一到参考流 | 仪表/磅单/发票/批记录、校准状态、缺失数据说明 |
| cp_tree_seed_conditioning | tree_seed_conditioning | raw_seed_material; seed_conditioning_water; seed_conditioning_energy; seed_transport_service; forest_tree_seed_product; tree_seed_lower_grade; seed_conditioning_rejects | 计量、台账、批次或场址记录 | 产品/物料标识、批次/场址、时间、数量、单位、状态、去向、计量装置 | 从原始记录逐条采集并保留可追溯链接 | 原始单位并记录换算 | 每批次、每批采集或每作物期；至少年度汇总 | 覆盖形成参考产品的完整代表期 | 单一场址或按场址分别记录 | 先按批次/场址核对质量平衡，再归一到参考流 | 仪表/磅单/发票/批记录、校准状态、缺失数据说明 |


### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_to_reference | 所有流 | 经批次或场址质量平衡后的流量 ÷ 同一边界的净合格参考产品质量 | 原始流量、净合格产出 | 每 1 kg 参考产品的交换量 |  |
| fermentation_carbon_balance | 发酵路线 | 输入碳 = 产品碳 + 共产品碳 + 废液碳 + 生物源 CO2-C + 未解释差额 | 原料组成、产出组成、废液和尾气数据 | 碳平衡及生物源 CO2 | mycoprotein-production-review-2019 |
| soil_n2o | 魔芋栽培 | 依据所选 IPCC 层级，将矿质氮、有机氮和适用残余氮分别乘相应直接排放因子，并进行 N2O-N 到 N2O 换算 | 氮投入、残余物处理、场址因子 | 直接土壤 N2O | ipcc-2019-managed-soils |
| transport_tkm | 场址间运输 | 净运输质量(t) × 载货距离(km) | 质量、距离、路线 | t·km |  |
| tree_seed_yield | 林木种子整理 | 净合格种子质量 ÷ 原始采集物料质量；按树种、种源和结实年份分别计算 | 原始物料、合格种子和各废弃类别质量 | 脱取/整理产率和质量平衡 | fao-forest-seed-handling-1985 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_traceability | 参考产品和中间体 | 产品物种/菌株、形态、状态、批次以及场址/田块/种源可追溯；相邻过程的中间体标识一致。 | 批记录、田块记录、采集标签、检验报告 |
| temporal_coverage | 生产期 | 覆盖形成参考产品的完整批次、作物期或结实年份；季节性和异常期单独说明。 | 时间戳记录和生产日历 |
| completeness | 投入产出 | 所有流卡均有实测值或有理由的零值；质量平衡差额及缺失数据替代方法必须量化。 | 质量平衡、缺失数据清单 |
| instrument_quality | 计量和检验 | 保留仪表标识、校准/核查状态、取样方法、检出限和单位换算。 | 校准证书、实验室或现场记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| one_route_one_product | 产品标识和过程图 | 恰好选择一项具名产品和一条路线；不得出现另一互斥路线的过程卡。 | unsd-cpc-3-0-01990 |
| range_review | 所有流卡 | 每张卡必须有范围；候选阶段的 reasoned_estimate 仅作筛选，成为 reviewed/active 前须由产品、场址、技术和交付点证据替换或确认。 |  |
| mass_reconciliation | 各过程节点 | 按批次、田块或采集批次核对投入、中间体、合格品、共产品、残次品、废物和水分变化；未解释差额必须披露。 |  |
| parameterized_binding | Flow Set 卡 | 根据前景记录将参数化卡展开为已核实具体流，并保留 Flow Set 版本和选择证据；不得同时写入固定 UUID。 |  |
| nutrient_consolidation | 魔芋栽培 | 该过程最多一张合并养分卡，且仅使用 flow-set.agricultural-nutrient-supply v0.3.0 set-level；发酵培养基和林木种源管理不得误作农业肥料卡。 |  |
| output_and_reject_paths | 多产出和废弃状态 | 每项预期产品、不合格品、返工、残余物和废物均有唯一交付或处置路径；参考产品不得在两个交付点重复。 |  |
| period_and_shared_asset | 跨期和共享设施 | 服务期、消费者节点、归属方法和证据齐全，替换或终止事件已记录，且同一负担未重复。 |  |

## 10. 发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | 一项具名原始植物材料路线的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当具体产品、路线、交付点、地域、时间和质量状态与使用场景匹配时，用于过程或生命周期模型。 |
| excluded_use | 类别平均、跨路线代理、未核实的下游加工替代，以及未解析具体流的自动发布。 |
| required_metadata | 产品和路线；物种/菌株；批次/田块/种源；交付点；水分和质量指标；地域和时间；技术；产量；分配；Flow Set 展开证据；缺失数据。 |
| required_quality_disclosure | 覆盖期、代表性、质量平衡、仪表与校准、替代数据、未解析 UUID、reasoned_estimate 范围和敏感性。 |
| update_trigger | 产品、路线、交付点、技术、来源、产率、分配、Flow Set 版本或关键范围发生实质变化。 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-3-0-01990 | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes, subclass 01990 | 类别边界和代表产品 |
| mycoprotein-production-review-2019 | literature | Finnigan et al. (2019), Mycoprotein: the future of nutritious nonmeat protein, Current Opinion in Food Science 28, 7-13, DOI 10.1016/j.cofs.2019.02.010 | 菌丝蛋白发酵、回收和产品状态的过程分解 |
| fao-forest-seed-handling-1985 | handbook | FAO Forestry Paper 20/2, A Guide to Forest Seed Handling, 1985 | 种源、采集、种球/果实处理、脱取、清理、分级、储前稳定化和种子质量 |
| ipcc-2019-managed-soils | method_factor | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11 | 魔芋栽培土壤直接 N2O 计算 |
| iso-14044-2006 | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | 避免分配、分配层级和披露 |
