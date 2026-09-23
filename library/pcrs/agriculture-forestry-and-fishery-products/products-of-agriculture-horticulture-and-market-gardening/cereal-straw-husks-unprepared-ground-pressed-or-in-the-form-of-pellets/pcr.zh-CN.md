---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cereal-straw-husks-unprepared-ground-pressed-or-in-the-form-of-pellets
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 谷物秸秆和谷壳，未加工、磨碎、压制或制成颗粒

## 1. 范围与适用性

本 PCR 覆盖谷物生产分离出的谷物秸秆和谷壳，可为未加工、切碎、磨碎、压制、打捆、压块或颗粒状态。参考产品为工厂门饲料级物料；必须声明谷物种类、秸秆或谷壳、物理形态、含水率及基准、等级和路线。化学或生物处理、青贮、完整配合饲料、非谷物残余物及燃料专用产品不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cereal-straw-husks-unprepared-ground-pressed-or-in-the-form-of-pellets` |
| classification_refs | `cpc:3.0:01913` (`0 > 01 > 019 > 0191 > 01913`) |
| covered_products | 未加工或经物理切碎、磨碎、压制、打捆、压块或制粒的谷物秸秆或谷壳 |
| excluded_products | 化学处理秸秆；青贮料；完整饲料；非谷物残余物；燃料专用产品；未声明混合物 |
| representative_product | 工厂门饲料级谷物秸秆 |
| production_route | 来源分离与收集、进厂运输、分级与稳定化、可选粒度减小、可选成形 |
| market_state | 松散、打捆、切碎、磨碎、压制、压块或颗粒；声明含水率和谷物来源 |

母路线为谷物分离后的物理收集与制备。未加工物料跳过粒度减小与成形；磨碎物料采用粒度减小；压制或颗粒物料采用成形。同一设施可并存多条路线，但数量必须分开。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 饲料级谷物秸秆，或明确声明的范围内谷壳变体 |
| How much | 工厂门按接收状态计 1,000 kg |
| How well | 记录谷物来源、秸秆/谷壳、形态、含水率及基准、等级、污染状态和路线 |
| How long or cycle | 截止工厂交接的一个批次或连续报告期 |
| reference_flow_link | `reference_straw_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Straw `b1dd1313-1bc0-4baf-8cfb-50e8ea2a307c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | `gate=Production mix, at plant`; `route=feed-grade`; 谷物；秸秆/谷壳；物理形态；含水率及基准；等级；地理；制备路线 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对同一批次报告接收状态质量 1,000 kg 及实测含水率。 |
| `dry_matter` | 所有物料状态 | Mass | kg dry matter | 干物质 = 接收状态质量 ×（1 − 水分质量分数）。 |
| `form_partition` | 路线产出 | Mass | kg | 不重叠地划分未加工、磨碎、压制和颗粒状态。 |
| `lot_balance` | 各节点 | Mass | kg | 核对进料、合格产出、降级、返工、废物、粉尘和水分变化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 谷粒和残余物已分离，秸秆或谷壳在有记录的来源交接点可供收集。 |
| starting_condition_role | 谷物生产系统的次生共产品交接 |
| product_classification_scope | CPC 3.0 `01913` |
| recursive_input_rule | 已购入的 CPC 01913 物料按实际入料状态记录一次，先前制备负担由上游数据集提供。 |
| upstream_dataset_requirement | 谷物种类、分离交接点、谷粒/秸秆归属、水分基准及继承负担 |
| disclosure | 负担继承或截断；来源；路线；水分变化；等级；去向 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `secondary_origin` | 来源物料 | 次生状态必须有谷物分离交接记录；该标签本身不允许零负担。 | `iso-14044-2006` |
| `physical_route` | 范围内产品 | 实际发生时纳入物理收集、干燥或通风、切碎、磨碎、压制、制粒、冷却及储存；排除化学提质和完整饲料混配。 | `fao-crop-residue-machinery-2002`; `fao-crop-residue-upgrading-2002` |
| `moisture_state` | 每个交接点 | 水分与质量采用相同取样基准，并分开记录加水、蒸发和干物质损失。 | `fao-feed-good-practices-2010` |
| `destinations` | 产出 | 区分合格、降级、其他用途、返工和废物状态。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `source_collection` | 来源交接、收集与进厂运输 | `required` | Always | 在谷物分离后接收二次材料并送达接收设施 | kg source material received |
| `grading_stabilization` | 接收、分级与稳定化 | `required` | Always | 初级处理区分合格、降级与拒收状态，并在需要时稳定化 | kg accepted material |
| `size_reduction` | 切碎或磨碎 | `conditional` | Chopped, ground, pressed or pelletized route when performed | 替代技术路线改变粒度并回收细料 | kg size-reduced output |
| `forming` | 压制、压块或制粒 | `conditional` | Pressed, wafered or pelletized route | 批次模式或连续运行将已制备物料转化为声明的成形状态 | kg formed output |
| `storage_loadout` | 储存与工厂门交接 | `required` | Always | 保持选定状态并交付参考产品 | 1,000 kg reference product |

收集节点在谷物收获后接收残余物并建立当前系统交接。分级形成合格、降级和拒收状态。稳定化将可用物料带到明确的稳定交接状态。粒度减小改变粒度；成形将几何形态转为压制、压块或颗粒产品。各节点按批次或连续期间编号；清洁和换线投入只分配一次。

### 过程：来源交接、收集与进厂运输（`source_collection`）

#### 输入

##### 产品流

###### 来源交接的谷物秸秆或谷壳（`source_residue_input`）

记录谷物分离后的特定谷物副产品；它不是已确认的工厂门参考流。

- 选定流: Cereal straw or husk at grain-separation hand-off
- 流属性/单位: Mass / kg
- 数量规则: Measured as-received source mass by cereal and lot
- 数值来源模式: `foreground_record`
- 适用范围: `product_specific`
- 归一化基准: per 1,000 kg reference product
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_source_lot`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 1000
  - 上限: 2500
  - 单位: kg/1,000 kg reference product
  - 基准: per 1,000 kg reference product
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 收集机械能源供应（`collection_energy`）

记录收集、打捆和装载残余物所用燃料、电力或承包机械能源。

- 选定流: Collection machinery energy supply
- 流属性/单位: Energy / MJ
- 绑定模式: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: Measured carrier quantity converted to delivered energy
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准: per 1,000 kg reference product
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1500
  - 单位: MJ/1,000 kg reference product
  - 基准: per 1,000 kg reference product
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 从来源地到工厂的公路货运（`inbound_transport`）

记录装载质量及来源地至工厂的实际距离。

- 选定流: Road freight transport service
- 流属性/单位: Mass*distance / t*km
- 绑定模式: `parameterized`
- Flow Set: `flow-set.transport-service`
- Flow Set 版本: `0.2.0`
- Flow Set 分组: `road-freight-transport`
- 数量规则: Loaded tonnes multiplied by actual loaded-route kilometres
- 数值来源模式: `calculated_value`
- 适用范围: `route_specific`
- 归一化基准: per 1,000 kg reference product
- 基准类型: `transport_service`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_transport`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: t*km/1,000 kg reference product
  - 基准: per 1,000 kg reference product
  - 基准类型: `transport_service`
  - 证据类型: `reasoned_estimate`


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 收集的原始秸秆或谷壳（`collected_raw_output`）

在接收时保留谷物种类、秸秆/谷壳及含水率身份。

- 选定流: Collected raw cereal straw or husk
- 流属性/单位: Mass / kg
- 数量规则: Plant receipt net of vehicle tare
- 数值来源模式: `foreground_record`
- 适用范围: `product_specific`
- 归一化基准: per collection lot
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_source_lot`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 500
  - 上限: 2500
  - 单位: kg/lot normalized to 1,000 kg reference product
  - 基准: per collection lot
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 废物流

###### 田间及搬运损失（`collection_loss`）

仅计入声明来源交接之后的损失。

- 选定流: Cereal-residue collection loss
- 流属性/单位: Mass / kg
- 数量规则: Source mass minus received mass on a common dry-matter basis
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per 1,000 kg reference product
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_source_lot`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg dry matter/1,000 kg reference product
  - 基准: per 1,000 kg reference product
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`


##### 基本流

### 过程：接收、分级与稳定化（`grading_stabilization`）

#### 输入

##### 产品流

###### 收集原料内部转移（`raw_transfer_input`）

不增加上游负担的内部转移。

- 选定流: Collected raw cereal straw or husk
- 流属性/单位: Mass / kg
- 数量规则: Equal to linked collected output entering this lot
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: per receiving lot
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_source_lot`
- 来源: `mass-balance-identity`
- 数量范围: 定量校验范围
  - 范围角色: `allowed_range`
  - 下限: 0
  - 上限: 2500
  - 单位: kg/lot normalized to 1,000 kg reference product
  - 基准: per receiving lot
  - 基准类型: `process_output`
  - 证据类型: `method_formula`
  - 来源: `mass-balance-identity`

###### 接收与稳定化能源（`receiving_energy`）

按能源载体记录输送、筛分、通风或干燥能源。

- 选定流: Receiving and stabilization energy supply
- 流属性/单位: Energy / MJ
- 绑定模式: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: Metered or invoiced energy assigned to the receiving lot
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准: per kg accepted stabilized output
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 5
  - 单位: MJ/kg accepted stabilized output
  - 基准: per kg accepted stabilized output
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 稳定化或清洁工艺水（`receiving_water`）

将供应水与入料水分分开。

- 选定流: Process water
- 流属性/单位: Volume / m3
- 绑定模式: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 分组: `process-water`
- 数量规则: Metered supplied water; zero when inactive
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1,000 kg accepted stabilized output
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water_moisture`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 2
  - 单位: m3/1,000 kg accepted stabilized output
  - 基准: per 1,000 kg accepted stabilized output
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 预期产出：合格稳定物料（`accepted_material_output`）

该预期产品产出是未加工路线的产出或后续加工的进料。

- 选定流: Accepted cereal straw or husk
- 流属性/单位: Mass / kg
- 数量规则: Weighed accepted output after grading
- 数值来源模式: `foreground_record`
- 适用范围: `product_specific`
- 归一化基准: per receiving lot
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_grading`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 300
  - 上限: 2500
  - 单位: kg/lot normalized to 1,000 kg reference product
  - 基准: per receiving lot
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 预期产出：降级共产品（`downgraded_output`）

将该预期共产品产出与合格饲料级物料分开。

- 选定流: Downgraded cereal straw or husk
- 流属性/单位: Mass / kg
- 数量规则: Weighed quantity routed to a lower grade or alternate use
- 数值来源模式: `foreground_record`
- 适用范围: `product_specific`
- 归一化基准: per receiving lot
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_grading`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg/lot normalized to 1,000 kg reference product
  - 基准: per receiving lot
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 废物流

###### 接收拒收物（`receiving_reject`）

声明处理或处置去向。

- 选定流: Rejected cereal residue
- 流属性/单位: Mass / kg
- 数量规则: Weighed unusable material leaving receiving
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per receiving lot
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_grading`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1000
  - 单位: kg/lot normalized to 1,000 kg reference product
  - 基准: per receiving lot
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 基本流

###### 稳定化过程中蒸发的水（`stabilization_water_loss`）

使用已核实的未指定空气区室水蒸气基本流；不得将干物质损失报告为水。

- 选定流: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: Mass / kg
- 绑定模式: `fixed`
- 数量规则: Inlet moisture minus outlet moisture, net of supplied water and discharge
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: per kg accepted output
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_water_moisture`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1
  - 单位: kg water/kg accepted output
  - 基准: per kg accepted output
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

### 过程：切碎或磨碎（`size_reduction`）

#### 输入

##### 产品流

###### 进入粒度减小的合格物料转移（`size_reduction_feed`）

按相同水分基准进行内部转移。

- 选定流: Accepted cereal straw or husk
- 流属性/单位: Mass / kg
- 数量规则: Linked accepted output entering the run
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: per run
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_run_balance`
- 来源: `mass-balance-identity`
- 数量范围: 定量校验范围
  - 范围角色: `allowed_range`
  - 下限: 0
  - 上限: 2500
  - 单位: kg/run normalized to 1,000 kg reference product
  - 基准: per run
  - 基准类型: `process_output`
  - 证据类型: `method_formula`
  - 来源: `mass-balance-identity`

###### 粒度减小能源（`size_reduction_energy`）

在前景记录中保留实际能源载体。

- 选定流: Size-reduction energy supply
- 流属性/单位: Energy / MJ
- 绑定模式: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: Metered energy assigned to cutting, milling, conveying and dust collection
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准: per kg size-reduced output
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 5
  - 单位: MJ/kg size-reduced output
  - 基准: per kg size-reduced output
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 切碎或磨碎物料（`size_reduced_output`）

记录粒度方法及处理后状态。

- 选定流: Chopped or ground cereal straw or husk
- 流属性/单位: Mass / kg
- 数量规则: Weighed conforming output
- 数值来源模式: `foreground_record`
- 适用范围: `product_specific`
- 归一化基准: per 1,000 kg run feed
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_run_balance`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 500
  - 上限: 1200
  - 单位: kg/1,000 kg run feed
  - 基准: per 1,000 kg run feed
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 返回工序的捕集细料（`size_reduction_rework`）

将返回细料排除在可售产出之外。

- 选定流: Captured cereal-residue fines for rework
- 流属性/单位: Mass / kg
- 数量规则: Weighed fines returned once to an identified run
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1,000 kg run feed
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_rework`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 200
  - 单位: kg/1,000 kg run feed
  - 基准: per 1,000 kg run feed
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 废物流


##### 基本流

###### 粒度减小的未捕集颗粒物（`size_reduction_dust`）

使用已核实的未指定空气区室、未指定粒径颗粒物基本流。

- 选定流: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位: Mass / kg
- 绑定模式: `fixed`
- 数量规则: Measured uncaptured particulate; disclose any measured size fraction as supporting detail
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per kg size-reduced output
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_run_balance`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 0.05
  - 单位: kg/kg size-reduced output
  - 基准: per kg size-reduced output
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

### 过程：压制、压块或制粒（`forming`）

#### 输入

##### 产品流

###### 进入成形的已制备物料转移（`forming_feed`）

声明成形前状态与含水率。

- 选定流: Prepared cereal straw or husk for forming
- 流属性/单位: Mass / kg
- 数量规则: Linked size-reduced output entering the forming run
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: per forming run
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_run_balance`
- 来源: `mass-balance-identity`
- 数量范围: 定量校验范围
  - 范围角色: `allowed_range`
  - 下限: 0
  - 上限: 1500
  - 单位: kg/run normalized to 1,000 kg reference product
  - 基准: per forming run
  - 基准类型: `process_output`
  - 证据类型: `method_formula`
  - 来源: `mass-balance-identity`

###### 成形电力与机械能源（`forming_energy`）

按批次或连续报告期分配。

- 选定流: Forming energy supply
- 流属性/单位: Energy / MJ
- 绑定模式: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: Metered energy for pressing, pelletizing, cooling and screening
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准: per kg formed output
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: MJ/kg formed output
  - 基准: per kg formed output
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 成形用蒸汽或外购工艺热（`forming_heat`）

将这一独立计量的调质服务与机械能源分开。

- 选定流: Steam or purchased process heat
- 流属性/单位: Energy / MJ
- 绑定模式: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: Metered steam energy or purchased heat; zero when inactive
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准: per kg formed output
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 10
  - 单位: MJ/kg formed output
  - 基准: per kg formed output
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 成形添加水（`forming_water`）

区分添加水和进料自身水分。

- 选定流: Process water
- 流属性/单位: Volume / m3
- 绑定模式: `parameterized`
- Flow Set: `flow-set.water-use`
- Flow Set 版本: `0.2.0`
- Flow Set 分组: `process-water`
- 数量规则: Metered water added for moisture conditioning
- 数值来源模式: `foreground_record`
- 适用范围: `technology_specific`
- 归一化基准: per 1,000 kg formed output
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_water_moisture`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 1
  - 单位: m3/1,000 kg formed output
  - 基准: per 1,000 kg formed output
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 压制、压块或颗粒物料（`formed_output`）

记录形状、尺寸、冷却状态及含水率。

- 选定流: Pressed, wafered or pelletized cereal straw or husk
- 流属性/单位: Mass / kg
- 数量规则: Weighed conforming output after cooling and screening
- 数值来源模式: `foreground_record`
- 适用范围: `product_specific`
- 归一化基准: per 1,000 kg forming feed
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_run_balance`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 500
  - 上限: 1200
  - 单位: kg/1,000 kg forming feed
  - 基准: per 1,000 kg forming feed
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`

###### 返回返工的成形细料（`forming_rework`）

每个返回回路仅计一次。

- 选定流: Cereal-residue forming fines for rework
- 流属性/单位: Mass / kg
- 数量规则: Weighed fines returned to one named run
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1,000 kg forming feed
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_rework`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 300
  - 单位: kg/1,000 kg forming feed
  - 基准: per 1,000 kg forming feed
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 废物流

###### 成形拒收物（`forming_reject`）

声明降级、回收或处置去向。

- 选定流: Rejected formed cereal residue
- 流属性/单位: Mass / kg
- 数量规则: Weighed off-spec material leaving the rework loop
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per 1,000 kg forming feed
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_rework`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 300
  - 单位: kg/1,000 kg forming feed
  - 基准: per 1,000 kg forming feed
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 基本流

### 过程：储存与工厂门交接（`storage_loadout`）

#### 输入

##### 产品流

###### 路线选定产品转移（`storage_feed`）

不重叠地选择合格未加工、粒度减小或成形物料。

- 选定流: Route-selected cereal straw or husk
- 流属性/单位: Mass / kg
- 数量规则: Linked output of exactly one selected upstream route
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: per storage lot
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_storage`
- 来源: `mass-balance-identity`
- 数量范围: 定量校验范围
  - 范围角色: `allowed_range`
  - 下限: 0
  - 上限: 1500
  - 单位: kg/lot normalized to 1,000 kg reference product
  - 基准: per storage lot
  - 基准类型: `process_output`
  - 证据类型: `method_formula`
  - 来源: `mass-balance-identity`

###### 储存与装运能源（`storage_energy`）

将能源一次性分配给储存批次或期间。

- 选定流: Storage and loadout energy supply
- 流属性/单位: Energy / MJ
- 绑定模式: `parameterized`
- Flow Set: `flow-set.energy-supply`
- Flow Set 版本: `0.2.0`
- 数量规则: Metered energy for ventilation, conveying, weighing and loadout
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per kg reference product
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 3
  - 单位: MJ/kg reference product
  - 基准: per kg reference product
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`

###### 袋装产品柔性包装（`packaging_input`）

仅在实际使用时计入袋、衬里或薄膜。

- 选定流: Flexible packaging
- 流属性/单位: Mass / kg
- 绑定模式: `parameterized`
- Flow Set: `flow-set.packaging-function`
- Flow Set 版本: `0.2.0`
- Flow Set 分组: `flexible-packaging`
- 数量规则: Net packaging mass issued; zero for bulk or unpackaged bales
- 数值来源模式: `foreground_record`
- 适用范围: `route_specific`
- 归一化基准: per 1,000 kg reference product
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_storage`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 100
  - 单位: kg/1,000 kg reference product
  - 基准: per 1,000 kg reference product
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`


##### 废物流


##### 基本流


#### 输出

##### 产品流

###### 工厂门饲料级秸秆（`reference_straw_output`）

仅交付符合声明谷物种类、物料状态、含水率和饲料级路线的产品。

- 选定流: Straw `b1dd1313-1bc0-4baf-8cfb-50e8ea2a307c`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 绑定模式: `fixed`
- 数量规则: Fixed reference amount of accepted product
- 数值来源模式: `fixed_value`
- 适用范围: `generic`
- 归一化基准: per 1,000 kg reference product
- 基准类型: `reference_flow`
- 证据类型: `identity_reference`
- 来源: `mass-balance-identity`
- 数量范围: 定量校验范围
  - 范围角色: `allowed_range`
  - 下限: 1000
  - 上限: 1000
  - 单位: kg
  - 基准: one reference flow
  - 基准类型: `reference_flow`
  - 证据类型: `method_formula`
  - 来源: `mass-balance-identity`

###### 储存降级物料（`storage_downgrade`）

将其去向与参考产出分开。

- 选定流: Downgraded stored cereal straw or husk
- 流属性/单位: Mass / kg
- 数量规则: Weighed quantity routed out of reference-grade stock
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per storage lot
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_storage`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg/lot normalized to 1,000 kg reference product
  - 基准: per storage lot
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 废物流

###### 储存与清理废物（`storage_waste`）

声明处理去向。

- 选定流: Cereal-residue storage waste
- 流属性/单位: Mass / kg
- 数量规则: Weighed spoiled material and sweepings leaving storage
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per storage lot
- 基准类型: `process_output`
- 证据类型: `collected_record`
- 采集协议: `cp_storage`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 500
  - 单位: kg/lot normalized to 1,000 kg reference product
  - 基准: per storage lot
  - 基准类型: `process_output`
  - 证据类型: `reasoned_estimate`


##### 基本流

###### 储存未捕集颗粒物（`storage_dust`）

使用已核实的未指定空气区室、未指定粒径颗粒物基本流。

- 选定流: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位: Mass / kg
- 绑定模式: `fixed`
- 数量规则: Measured uncaptured particulate; disclose any measured size fraction as supporting detail
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: per kg reference product
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_storage`
- 数量范围: 定量校验范围
  - 范围角色: `qa_guardrail`
  - 下限: 0
  - 上限: 0.02
  - 单位: kg/kg reference product
  - 基准: per kg reference product
  - 基准类型: `reference_flow`
  - 证据类型: `reasoned_estimate`


## 7. 分配与共产品处理

在上游分离点列举谷粒、秸秆、谷壳及全部预期产品。优先采用上游谷物 PCR 或供应商分配；否则先检验细分，若仍有共同种植负担，则依 ISO 14044 一致采用并披露物理或经济分配。仅当适用研究规则明确要求时才允许零负担截断。前景路线按实测批次平衡处理合格、降级和废物状态。返工保留在产生节点内，每项拒收量只能有一个返工、降级、回收或处置路径。按共同干物质基准核对来源、内部转移和最终交接，避免双计。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_lot` | `source_collection` | 来源与接收质量 | 地磅与来源记录 | 谷物；秸秆/谷壳；质量；水分；日期 | 校准称量与配对取样 | kg；分数 | 每车 | 完整期间 | 全部来源 | 水分核对后求和 | 校准与样品链 |
| `cp_transport` | `source_collection` | 进厂运输 | 发运记录 | 质量；起点；终点；距离；车辆 | 发票与路线日志 | t；km；t*km | 每车 | 完整期间 | 全部路线 | 求和装载 t*km | 发运记录 |
| `cp_energy` | 所有适用节点 | 能源投入 | 仪表、发票及设备日志 | 载体；数量；节点；批次；分配键 | 优先直接计量 | 载体单位；MJ | 每批或每月 | 代表年份 | 全部节点 | 换算并一次分配 | 仪表或发票 |
| `cp_water_moisture` | 分级与成形 | 水和水分 | 仪表与实验记录 | 供水；进出质量；水分方法；时间 | 仪表与配对样品 | m3；kg；分数 | 每批 | 完整期间 | 适用节点 | 分开核算加水与去水 | 仪表与测试记录 |
| `cp_grading` | `grading_stabilization` | 等级去向 | 分级与发运记录 | 标准；质量；等级；去向；水分 | 批次分级与称量 | kg | 每批 | 完整期间 | 接收场址 | 求和互斥状态 | 签字分级记录 |
| `cp_run_balance` | 粒度减小与成形 | 运行平衡 | 生产日志 | 批次；进料；产出；细料；拒收；粉尘；水分 | 关联运行核对 | kg | 每批/期间 | 完整期间 | 各生产线 | 内部返工仅抵消一次 | 生产日志 |
| `cp_rework` | 粒度减小与成形 | 返工与拒收 | 转移票据 | 产生批次；接收批次；质量；状态；路线 | 标记转移记录 | kg | 每次移动 | 完整期间 | 各生产线 | 返回与出界各计一次 | 转移票据 |
| `cp_storage` | `storage_loadout` | 储存与发运 | 库存与发运记录 | 批次；状态；进料；产出；包装；粉尘 | 库存核对 | kg | 每次发运/每月 | 完整期间 | 全部仓储 | 按批次和路线核对 | 库存记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_matter` | 物料状态 | 干物质 = 接收状态质量 ×（1 − 水分分数） | 配对质量与水分 | kg dry matter | `mass-balance-identity` |
| `calc_transport` | 进厂运输 | t*km = 装载吨数 × 装载路线公里数 | 质量与距离 | t*km | `mass-balance-identity` |
| `calc_node_balance` | 各节点 | 进料干物质 = 合格 + 降级 + 拒收 + 未捕集损失；内部返工抵消 | 关联记录 | 残差与完整性标记 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 各批次 | 记录谷物、秸秆/谷壳、形态、等级和污染判定。 | 批次与分级记录 |
| `dq_moisture` | 各交接点 | 声明水分方法、取样时间及湿基/干基。 | 测试记录 |
| `dq_route` | 可选节点 | 证明活动路线；未活动节点输入与输出为零。 | 生产日志 |
| `dq_mode` | 批次/连续期间 | 将仪表、清洁和换线关联至一个批次或期间。 | 仪表与运行日志 |
| `dq_completeness` | 各节点 | 核对全部产出状态且不双计。 | 质量平衡结果 |
| `dq_attribution` | 次生来源 | 记录上游产出集合以及分配、继承或截断。 | 供应商数据集 |

## 9. 校验规则

1. 必须声明谷物、秸秆/谷壳、形态、含水率及基准、等级、路线和工厂门。
2. 固定饲料级 Straw 流仅用于声明的工厂门产品，不得用于化学处理、完整饲料或燃料专用干物质。
3. 未加工路线跳过粒度减小和成形；磨碎路线采用粒度减小；压制或颗粒路线采用成形；未活动节点数量为零。
4. 各节点声明前后状态、服务角色、损失、拒收与交接；每项预期产出只有一个去向。
5. 次生来源需要证据和明确的继承、分配或截断决定，且不得重复负担。
6. 返工关联产生与接收批次，拒收物不得计入合格产出。
7. 共享批次或连续期间投入只分配一次。
8. 湿质量与干物质平衡将水分变化与干物质损失分开。
9. 参数化产品投入在前景生成时解析为已核实 UUID。内部转移、产出、废物与基本流不绑定 Flow Set。
10. recovered-material set 不适用，因为当前分组覆盖再生金属与纸纤维而非谷物残余物。养分、施工和废物处理 set 对该物理路线同样不适用。
11. 每张定量卡恰有一个 Range，且 EN、ZH、structured 字段一致。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 谷物残余物收集与物理制备前景数据集 |
| downstream_use | 二级或背景供应数据集 |
| allowed_use | 谷物、物料身份、形态、水分、等级、路线、地理和归属相匹配的研究 |
| excluded_use | 化学处理、青贮、完整饲料、非谷物残余物、未声明混合物或燃料专用产品 |
| required_metadata | 谷物；秸秆/谷壳；来源；交接；形态；水分；等级；路线；模式；地理；分配；去向 |
| required_quality_disclosure | 平衡残差；覆盖；方法；来源归属；分配敏感性；未解析身份；暂定范围 |
| update_trigger | 谷物、等级、状态、技术、水分方法、归属、去向或 Flow Set 版本变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-crop-residue-machinery-2002` | official_guidance | FAO，饲料用作物残余物机械与设备第 6 章，https://www.fao.org/4/y1936e/y1936e0a.htm | 收集、运输、磨碎与成形路线分解 |
| `fao-crop-residue-upgrading-2002` | official_guidance | FAO，作物残余物组成、营养价值与提质第 2 章，https://www.fao.org/4/y1936e/y1936e06.htm | 物理路线与完整饲料排除 |
| `fao-feed-good-practices-2010` | official_guidance | FAO 与 IFIF，《饲料工业良好实践手册》，2010，https://www.fao.org/4/i1379e/i1379e04.pdf | 水分、搬运及储存控制 |
| `iso-14044-2006` | standard | ISO 14044:2006，环境管理—生命周期评价—要求与指南 | 共产品归属与披露 |
| `mass-balance-identity` | method_factor | 对配对质量与水分记录应用质量守恒 | 换算与平衡计算 |
