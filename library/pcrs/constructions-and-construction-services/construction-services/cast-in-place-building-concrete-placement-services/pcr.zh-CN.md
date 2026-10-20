---
pcr_id: pcr.constructions-and-construction-services.construction-services.cast-in-place-building-concrete-placement-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 现浇建筑混凝土浇筑、饰面与养护服务

## 1. 范围与适用性

本PCR覆盖从准备工作面接收新拌混凝土到就位工程验收的窄建筑混凝土浇筑工程包，包括实际浇筑、振实、普通饰面、养护、检验、正常返工及场内清理。模板钢筋为单独母工程包负责的已检起始条件，其负荷须保留于整项目模型。本PCR不指定混凝土配方、强度、养护时间、损失率或建筑寿命，实际合同与验收规范确定这些限定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.cast-in-place-building-concrete-placement-services |
| classification_refs | CPC 3.0 54540；仅覆盖较窄浇筑工程包，不覆盖整个混凝土服务叶节点。 |
| covered_products | 现浇建筑构件承包浇筑、振实、普通表面饰面、养护与验收服务。 |
| excluded_products | 预拌混凝土制造；预制件制造及安装；模板制作安装及钢筋工程；基础工程；道路、桥梁、海工混凝土；专用涂装；整栋建筑。 |
| representative_product | 一个声明的建筑楼板或墙体浇筑批次，附指定混合料、几何、饰面和验收条件。 |
| production_route | 接收新拌混凝土→浇筑振实→饰面→保护养护→检查验收。 |
| market_state | 承包交接时已验收的安装施工服务，不假定寿命期服务等价。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象 (`What`) | 已验收现浇建筑混凝土浇筑服务 |
| 数量 (`How much`) | 1 m3验收净就位体积 |
| 质量要求 (`How well`) | 声明构件、混合料/强度/暴露规范、几何、饰面、养护和验收证据。 |
| 持续时间或周期 (`How long or cycle`) | 一个标识浇筑批次及其实际养护验收期间，不含未来维修周期。 |
| reference_flow_link | `accepted_concrete_placement_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收现浇建筑混凝土浇筑服务 |
| 参考流属性 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 建筑构件；场址/日期；混合料及指定龄期强度；暴露等级；验收净几何；饰面规范；泵送方式；养护方式及时间；验收门；模板钢筋责任；供应方和交货边界；退料废物去向；共享资产和研究资本政策。 |

每项必需限定均须在数据包声明；服务验收体积不代表新拌投入或内部转移等于一立方米。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| accepted_volume | 参考产品 | Volume | m3 | 采用验收净几何体积，排除空洞和未验收/拒收工程；验收记录关联cp_curing，不得替换成交付新拌体积。 |
| fresh_density | fresh_concrete; returned_fresh_concrete | Volume | m3 | 仅有质量时以同批新拌混凝土实测密度相除，保留采样和含水/含气状态，不设通用密度。 |
| wet_waste | placement_wash_slurry; placement_concrete_waste; finishing_residues; curing_removed_materials | Mass | kg | 保留干湿基准及换算密度或固含量，湿浆和其分离固体不得重叠。 |
| fuel_mass | placement_diesel | Mass | kg | 保留柴油实测质量，体积换算须有声明温度下供应商密度，能量换算须有低位热值记录。 |
| energy_units | placement_electricity; finishing_electricity; curing_electricity | Energy | kWh | 燃料质量和电量分开保留；需要时按3.6将kWh换算MJ，燃料质量换能量须有低位热值记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可达建筑工作面；测定几何及已由负责上游工程包验收的模板、钢筋、预埋件；新拌混凝土在场址接收。 |
| starting_condition_role | 声明供应状态，不代表生产无负荷；本PCR仅负责浇筑、饰面与养护。 |
| product_classification_scope | 窄于CPC 3.0 54540，属于施工服务而非混凝土产品或建筑资产。 |
| recursive_input_rule | 分包提供同类服务时选其上游服务数据集或拆分活动一次，不无限递归、不两者重复计。 |
| upstream_dataset_requirement | 关联新拌混凝土生产及交付数据集和负责模板钢筋的母工程包；按匹配交接门关联实际燃料、电、水、材料、设备和下游废物服务。 |
| disclosure | 披露截断任务、交货/洗浆责任、排除模板钢筋及资本政策；整项目模型须在其他包纳入这些任务，本服务不是整栋建筑结果。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| service_gate | 所有过程 | 纳入指定验收前实际浇筑、振实、饰面、养护保护、检查、正常修整与清理；后续结构修复需另定范围。 | ufgs-cast-in-place-2019 |
| reaction_boundary | curing | 水化改变饰面混凝土中的胶凝材料/水组成；区分留存硬化材料、未反应组分、蒸发、移除试件及拒收物，不假定化学路径、反应产率或碳化抵扣。 | epa-concrete-washout-2012 |
| washout_gate | placement | 合同归属时纳入场内溜槽/泵/工具清洗，区分供应商场外洗罐；收集洗水，标识实际回收/处理交接及核实直接释放。 | epa-concrete-washout-2012 |
| shared_assets | 所有过程 | 列举每台泵、发电机、电表、养护设施和洗浆容器、全部使用节点/批次及服务日期；设备资本和进退场政策与运行能源分开记录。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：归属浇筑设备服务 (`placement_plant_service`)

过程／待建立交换的方向／类型：`placement` / `inputs` / `product`.

按声明研究政策纳入泵、振捣与洗浆设施资本或外购服务的条件伞形卡，排除已单记的运行能源。

- 采集对象：归属浇筑设备服务
- 流属性/单位: Time / h
- 数量规则: 采集归属设备服务小时；实际货运在placement_mobilization_transport单独量化，数据生产前展开实际设备服务交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 尚待核实的可选筛查提示：暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 10
  - 单位: h
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 采集要求：归属设备进退场货运服务 (`placement_mobilization_transport`)

过程／待建立交换的方向／类型：`placement` / `inputs` / `product`.

本工程包负责实际场外泵具、工具及养护设备进退场时的条件货运交换，设备小时不是吨公里。

- 采集对象：归属设备进退场货运服务
- 流属性/单位: Transport service / t*km
- 数量规则: 按每次运输实际载荷吨数乘路线公里计算，依承运证据归属空返及合载运输，或采用有完整记录车辆服务模型；不得重复直接燃料或已含运输租赁。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_placement`

- 尚待核实的可选筛查提示：暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: t*km
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 采集要求：退回供应商的未用新拌混凝土 (`returned_fresh_concrete`)

过程／待建立交换的方向／类型：`placement` / `outputs` / `product`.

同一退料不得再作为废混凝土；记录采购结算但不虚构避免生产抵扣。

- 采集对象：退回供应商的未用新拌混凝土
- 流属性/单位: Volume / m3
- 数量规则: 记录实际退料体积及供应商接收或废物认定；仅在仍可用且接收方接受时按产品退料。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 尚待核实的可选筛查提示：暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 采集要求：其他实测浇筑燃烧空气排放物种 (`placement_other_air_emissions`)

过程／待建立交换的方向／类型：`placement` / `outputs` / `elementary`.

条件伞形卡仅纳入有证据的CO、氮氧化物物种、硫物种或颗粒物，不得以通用污染物UUID代表全部物种。

- 采集对象：其他实测浇筑燃烧空气排放物种
- 流属性/单位: Mass / kg
- 数量规则: 按设备排放证据展开实际报告物质，保留NOx报告基准及颗粒粒径；未知不等于零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 尚待核实的可选筛查提示：暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 采集要求：浇筑洗浆实际向水或土壤释放的物质 (`placement_washout_releases`)

过程／待建立交换的方向／类型：`placement` / `outputs` / `elementary`.

条件性总括卡，仅用于经核实的浇筑责任范围内溜槽、泵或工具洗浆直接释放。选择具体基本流前，依据事件证据确定每种实际物质、溶解态/颗粒态报告基准及接收水体或土壤子介质。交给责任方处理的收集浆液仍归placement_wash_slurry；浆液总量、pH及处理交接量均不等于污染物质量。不假定普遍排放或普遍不存在。

- 采集对象：浇筑洗浆实际向水或土壤释放的物质
- 流属性/单位: Mass / kg
- 数量规则: 依据实测释放数量及相容的物质浓度计算逐物质释放质量；收集、处理和直接释放份额须互斥。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_placement`

- 尚待核实的可选筛查提示：逐种实际物质的暂定宽泛筛选估算，不是发生释放的证据、默认数量或合规限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 采集要求：指定饰面与修整耗材 (`finishing_consumables`)

过程／待建立交换的方向／类型：`finishing` / `inputs` / `product`.

条件伞形卡按声明工程包纳入实际磨料、砂浆及硬化剂，不假定配方或强制使用化学硬化剂。

- 采集对象：指定饰面与修整耗材
- 流属性/单位: Mass / kg
- 数量规则: 计量常规饰面及允许的小修整实际用品，投影交换前展开产品身份及配方。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing`

- 尚待核实的可选筛查提示：暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 采集要求：饰面残渣与拒收修整材料 (`finishing_residues`)

过程／待建立交换的方向／类型：`finishing` / `outputs` / `waste`.

未收集打磨粉尘须按物质及粒径记录基本空气排放，不能藏入废物质量。

- 采集对象：饰面残渣与拒收修整材料
- 流属性/单位: Mass / kg
- 数量规则: 按成分、状态及去向称量收集残渣和缺陷拆除物，归属原始浇筑批次。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing`

- 尚待核实的可选筛查提示：暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 500
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 采集要求：实际饰面物质空气释放 (`finishing_actual_air_releases`)

过程／待建立交换的方向／类型：`finishing` / `outputs` / `elementary`.

条件伞形卡按实际饰面用品组分及操作展开物种；打磨须记录粉尘物质及粒径，挥发须有实际用品化学信息，不能以通用VOC代替。

- 采集对象：实际饰面物质空气释放
- 流属性/单位: Mass / kg
- 数量规则: 按实际饰面事件测量或经审查因子展开空气物种及粒径；未知不等于零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing`

- 尚待核实的可选筛查提示：暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 5
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 采集要求：实际养护保护材料 (`curing_materials`)

过程／待建立交换的方向／类型：`curing` / `inputs` / `product`.

条件伞形卡不是固定材料，纯水或带模养护不得虚配养护剂。

- 采集对象：实际养护保护材料
- 流属性/单位: Mass / kg
- 数量规则: 计量实际养护剂、薄膜或湿覆盖材料用量，声明化学组成、周转次数及留存或移除比例。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_curing`

- 尚待核实的可选筛查提示：暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 30
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 采集要求：移除养护材料与拒收硬化混凝土 (`curing_removed_materials`)

过程／待建立交换的方向／类型：`curing` / `outputs` / `waste`.

伞形废物角色须展开真实不同材料交换，无接收方证据不得因声称回收而抵扣。

- 采集对象：移除养护材料与拒收硬化混凝土
- 流属性/单位: Mass / kg
- 数量规则: 按材料及去向分别计量移除覆盖物、试件与拒收混凝土；保留返工归属，不将拒收体积算作验收服务。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_curing`

- 尚待核实的可选筛查提示：暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 采集要求：养护实际物质环境释放 (`curing_actual_releases`)

过程／待建立交换的方向／类型：`curing` / `outputs` / `elementary`.

条件伞形卡须按物质及空气、水、土壤介质展开；送处理的洗浆水仍是废物，不自动作为直接排放。

- 采集对象：养护实际物质环境释放
- 流属性/单位: Mass / kg
- 数量规则: 对蒸发、涂剂组分或未收集释放标识实际物质、接收介质及实测或审查因子基准，仅有肯定证据时记录零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_curing`

- 尚待核实的可选筛查提示：暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| placement | 新拌混凝土浇筑振实 | required | 正常路线 | 新拌可流动混合料转为振实设计几何，交饰面，负责泵清理和浇筑拒收物。 | 每参考流 |
| finishing | 成型混凝土表面饰面 | required | 正常路线 | 振实母体转为指定表面，交养护，关联饰面修整及残渣。 | 每参考流 |
| curing | 水化养护检验验收 | required | 正常路线 | 饰面投入中的胶凝材料与水水化到硬化验收状态，保留留存/未反应组分及损失出口。 | 每参考流 |

生产模式为标识现场浇筑批次及关联饰面/养护期间，记录pour_id、delivery_id、event_id、transfer_id和asset_id。启动、泵送、振捣、表面作业、养护保护、检验及清理使用同一批次台账。就位材料交接是状态账而非独立交易产品，最终输出为验收服务。未验收或被替换几何不得作为验收输出。

### 过程：新拌混凝土浇筑振实 （`placement`）

#### 输入

##### 产品流

###### 用于浇筑的交付新拌混凝土 （`fresh_concrete`）

新拌混合料是外购上游产品，已包含胶凝材料与拌合水。其数量不得固定为每参考服务1 m3。

- 选定流: 用于浇筑的交付新拌混凝土
- 流属性/单位: Volume / m3
- 数量规则: 按交货单及密度支持的出料体积计量接收的新拌混凝土；退料和损失分别保留。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 浇筑设备柴油 （`placement_diesel`）

仅计直接消耗燃料；外购泵送服务若已含能源清单则不得重复计入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 绑定模式: `fixed`
- 流属性/单位: Mass / kg
- 数量规则: 计量泵、移动设备和发电机归属柴油消耗；能量换算时保留低位热值。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 20
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 浇筑设备供电 （`placement_electricity`）

电量与燃料关联到设备及浇筑批次。

- 选定流: 浇筑设备供电
- 流属性/单位: Energy / kWh
- 数量规则: 计量泵及振捣器用电网电量；自发电内部记录，不再重复采购上游电力。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 50
  - 单位: kWh
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 浇筑设备清洗供水 （`placement_wash_water`）

技术系统供水不同于直接从环境取水。

- 选定流: 浇筑设备清洗供水
- 流属性/单位: Volume / m3
- 数量规则: 计量设备及溜槽清洗新增供水，区分循环洗水和降雨。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 饰面前已振实就位混凝土 （`placed_concrete_transfer`）

这是内部材料状态交接，不是参考服务，也不是另一项外购产品。

- 选定流: 饰面前已振实就位混凝土
- 流属性/单位: Volume / m3
- 数量规则: 计量交给饰面的实体就位体积，以transfer_id配对饰面投入并保留尚未验收体积。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 浇筑废弃混凝土 （`placement_concrete_waste`）

废物路线始于交给声明废物接收方；运输及处理负荷需关联下游数据集。

- 选定流: 浇筑废弃混凝土
- 流属性/单位: Mass / kg
- 数量规则: 按实际湿态或硬化状态及去向称量溢洒、泵内残留和拒收料。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1000
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 收集的混凝土清洗废水与浆液 （`placement_wash_slurry`）

洗浆物默认按废物转移；只有核实直接排放时才按环境排放处理，包含收集且不得默认废水是基本流。

- 选定流: 收集的混凝土清洗废水与浆液
- 流属性/单位: Mass / kg
- 数量规则: 称量外运浆液或测量体积及实测密度；标识液固分离并排除已单称固体。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 1500
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 浇筑燃烧向空气排放的化石二氧化碳 （`placement_fossil_co2`）

直接燃烧空气排放区别于上游燃料生产排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式: `fixed`
- 流属性/单位: Mass / kg
- 数量规则: 由归属燃料碳记录或经审查指定燃烧因子确定化石CO2；不得脱离所选方法假定完全氧化。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集计算 (`calculated_from_collection`)
- 采集协议: `cp_placement`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kg
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程：成型混凝土表面饰面 （`finishing`）

#### 输入

##### 产品流

###### 饰面前已振实就位混凝土 （`finishing_concrete_feed`）

母体材料已具规定形状，饰面改变表面状态。

- 选定流: 饰面前已振实就位混凝土
- 流属性/单位: Volume / m3
- 数量规则: 接收placed_concrete_transfer实测体积，transfer_id、状态与体积一致，不另加上游负荷。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 饰面设备供电 （`finishing_electricity`）

手工饰面可实测无设备电耗，缺记录不能证明为零。

- 选定流: 饰面设备供电
- 流属性/单位: Energy / kWh
- 数量规则: 计量抹光与饰面工具归属电量；共享发电机燃料仅在负责节点计入。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 30
  - 单位: kWh
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 养护验收前已饰面就位混凝土 （`finished_concrete_transfer`）

饰面状态是中间状态，服务须养护和检查后才确认验收。

- 选定流: 养护验收前已饰面就位混凝土
- 流属性/单位: Volume / m3
- 数量规则: 计量交给养护的饰面体积并附transfer_id，最终验收前保留返工与拆除材料记录。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_finishing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

### 过程：水化养护检验验收 （`curing`）

#### 输入

##### 产品流

###### 养护验收前已饰面就位混凝土 （`curing_concrete_feed`）

投入中的胶凝材料与拌合水继续水化；骨料是物理组成，不虚构其为反应物。

- 选定流: 养护验收前已饰面就位混凝土
- 流属性/单位: Volume / m3
- 数量规则: 按相同transfer_id及实测体积接收finished_concrete_transfer。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_curing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0.8
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 混凝土养护供水 （`curing_water`）

记录实际湿养护方式和持续时间；水提供湿度条件并可参与持续水化，不设假定产率。

- 选定流: 混凝土养护供水
- 流属性/单位: Volume / m3
- 数量规则: 计量额外外供养护水，区分已内含拌合水、回流水和收集雨水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_curing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 2
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 养护及验收供电 （`curing_electricity`）

共享场址供电按分表计量或有功率及利用率证据的设备时间归属。

- 选定流: 养护及验收供电
- 流属性/单位: Energy / kWh
- 数量规则: 在声明养护期内计量加热、冷却和检验归属电量，其他实际燃料另列具体交换。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_curing`

- 数量范围: 暂定宽泛筛选估算，须用独立审查证据替换，不是默认或允许限值
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 0
  - 上限: 100
  - 单位: kWh
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收现浇建筑混凝土浇筑服务 （`accepted_concrete_placement_service`）

服务包括声明构件的浇筑、振实、饰面、养护和验收；分母是验收净就位几何体积，不是混凝土制造或建筑资产产品。

- 选定流: 已验收现浇建筑混凝土浇筑服务
- 流属性/单位: Volume / m3
- 数量规则: 1 m3
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集计算 (`calculated_from_collection`)
- 采集协议: `cp_curing`

- 数量范围: 验收体积除以同一验收体积的参考归一化恒等关系，不是产率因子
  - 范围角色: QA 校验 (`qa_guardrail`)
  - 下限: 1
  - 上限: 1
  - 单位: m3
  - 基准: 每参考流
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 采集计算 (`calculated_from_collection`)

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| retain_rework | 所有过程 | 失败检验、拒收浇筑及正常返工负荷保留于原始验收服务批次；以事件id追踪浇筑→饰面、饰面→养护返工及回浇筑替换；最终验收几何仅计一次。 |  |
| run_attribution | 所有过程 | 以标识浇筑批次及养护期为生产批次；按事件关联实测活动归属开机、换批和清理；共享事件仅一负责人且全部使用者份额之和为一。 |  |
| shared_energy | 所有过程 | 优先分表；缺分表时按记录运行时间、额定/实测功率和利用率估计节点份额并披露不确定性，同次发电不得电网电和发电燃料重复计。 |  |
| no_automatic_credit | returned_fresh_concrete; waste outputs | 按接收方接收及法律状态记录产品退料或废物出境；不自动抵扣混凝土生产或回收，后果抵扣须另有声明研究方法。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_placement | placement | 该节点全部清单行 | 事件台账、计量及验收 | pour_id；delivery_id；event_id；transfer_id；asset_id；运行时间；实测或额定功率；利用率；使用者份额；燃料碳含量/方法；化石碳质量分数及分母；碳氧化为CO2的比例；所选燃烧因子值/单位/来源及适用性；因子不确定性；燃料密度/温度/低位热值；接收新拌体积；实测密度；柴油；电量；水；设备小时；dispatch_id；承运方；载荷吨数；路线公里；空返活动；进退场责任/份额；退料体积；废物/浆液质量；排放物种及介质；洗浆直接释放事件及接收子介质；释放液体体积或质量；实测物质浓度、采样时间及单位；收集/处理分流；存量变化 | 核对签署事件记录、校准仪表、供应商单据、实测几何/密度、检验及接收单，区分实测、估算及不存在证据。 | m3; kg; kWh; h; t; km; t*km | 每事件/班次；养护连续记录 | 完整浇筑至养护验收期 | 声明单一场址及节点 | 每参考流 | 签单、校准、几何与检验及质量平衡证据 |
| cp_finishing | finishing | 该节点全部清单行 | 事件台账、计量及验收 | pour_id；event_id；transfer_id；asset_id；运行时间；实测或额定功率；利用率；使用者份额；投入及饰面体积；表面规范；电量；耗材；残渣；实际排放物质/空气子介质/粒径；返工事件 | 核对签署事件记录、校准仪表、供应商单据、实测几何/密度、检验及接收单，区分实测、估算及不存在证据。 | m3; kg; kWh; h; t; km; t*km | 每事件/班次；养护连续记录 | 完整浇筑至养护验收期 | 声明单一场址及节点 | 每参考流 | 签单、校准、几何与检验及质量平衡证据 |
| cp_curing | curing | 该节点全部清单行 | 事件台账、计量及验收 | pour_id；event_id；transfer_id；asset_id；运行时间；实测或额定功率；利用率；使用者份额；投入体积；验收净体积；尺寸；空洞；养护始末；水；材料；电量；检验；验收；拒收物；实际物质/介质释放 | 核对签署事件记录、校准仪表、供应商单据、实测几何/密度、检验及接收单，区分实测、估算及不存在证据。 | m3; kg; kWh; h; t; km; t*km | 每事件/班次；养护连续记录 | 完整浇筑至养护验收期 | 声明单一场址及节点 | 每参考流 | 签单、校准、几何与检验及质量平衡证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_service | 所有清单行 | 将归属事件数量除以同组浇筑批次验收净就位体积，按每参考流报告；归一化前保留内部实体转移。 | 归属事件数量; 验收净体积; cp_placement; cp_finishing; cp_curing | 每参考流数量 |  |
| receipt_reconcile | fresh_concrete; returned_fresh_concrete; placement_concrete_waste | 在一致新拌状态基准上平衡接收新拌体积、就位体积、供应商退料、取样、溢洒/泵残留及存量变化；无证据不得新拌体积等同硬化体积。 | 交货单; 实测密度; 转移台账; 退料/废物接收单; cp_placement | 平衡及残差解释 |  |
| mobilization_activity | placement_mobilization_transport | 逐载货路段计算载荷吨数×实际公里，乘记录的使用者份额并加总，再按normalize_service归一化。保留承运方空返覆盖证据，不得以空载质量为零抹去空返负荷。使用车辆服务模型时，记录相容的t*km换算及参数；承运或租赁数据集已含返程/燃料不得重复加入。 | cp_placement; dispatch_id; 载荷吨数; 路线公里; 使用者份额; 承运空返覆盖; 模型及单位换算证据 | 归一化前同组浇筑的归属运输t*km |  |
| fossil_carbon_emission | placement_fossil_co2 | 选择一种有记录的方法：m_CO2 = m_fuel × w_fossil_C × f_oxidized_to_CO2 × 44/12，其中w_fossil_C为每kg实际燃料中的化石碳kg，f为这些化石碳以CO2排出的比例；或将相容燃料活动量乘以有明确单位、经审查的CO2因子。保留实测燃料、混合组成、方法/因子来源、适用性及不确定性；两种方法不得相加，两个比例均不得默认1。同组浇筑总量计算后再按normalize_service归一化。 | cp_placement; 燃料质量或相容能量活动量; 化石碳分数及基准; 氧化为CO2比例; 因子值/单位/来源; 不确定性 | 归一化前同组浇筑的化石CO2 kg |  |
| washout_release_mass | placement_washout_releases | 逐项核实直接释放事件及物质，将单位换算相容后计算释放体积×浓度（例如m3×kg/m3），或液体释放质量×实测kg物质/kg液体分数。保留实际接收子介质、采样及溶解态/总量基准；仅有pH不能确定物质质量。收集/处理/直接释放各部分只平衡一次，再按normalize_service归一化；组成缺失是明确缺口，不是零。 | cp_placement; 释放事件; 体积或液体质量; 浓度及单位; 物质及接收子介质; 采样证据; 收集/处理分流 | 归一化前同组浇筑向实际水或土壤子介质释放的逐物质kg |  |
| shared_share | 所有清单行 | 按记录使用者份额分配共享实测事件数量，全部使用者份额之和为1且事件责任唯一。 | event_id; asset_id; 使用节点/批次; 实测活动; cp_placement; cp_finishing; cp_curing | 归属事件数量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| gate_traceability | 参考产品 | 验收证据须匹配构件、浇筑、规范、养护方式及净体积；未验收数量排除在分母外。 | 签署验收；实测尺寸；检验记录 |
| inventory_completeness | 所有清单行 | 条件存在、不存在证据与缺失标志分开记录；发布数据集前将伞形卡展开为具体交换及物种。 | 采购记录；设备日志；SDS；废物记录 |
| time_coverage | 所有过程 | 覆盖完整浇筑及关联养护、检验、清理和返工，包括停机及天气保护负荷；记录排除项及计量校准。 | 批次台账；养护日记；校准证书 |
| provisional_ranges | 所有清单行 | 暂定推理估算范围只是宽泛审查提示，不是默认值或合规限值；用独立审查证据替换，不以同批最大值自证。 | 独立参考数据；不确定性披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| final_acceptance | accepted_concrete_placement_service | 要求1 m3参考定义、准确参考行链接、实际验收几何和指定验收证据，输出保持服务。 |  |
| transfer_pair | placed_concrete_transfer; finishing_concrete_feed; finished_concrete_transfer; curing_concrete_feed | 以transfer_id、状态和实测量配对内部交接，禁止重复上游产品及固定1 m3内部投料。 |  |
| loss_and_waste | 所有过程 | 解释交付与就位差异、保留水及存量变化；各退料、残渣、浆液和拒收物按接收方/状态及返工路径仅平衡一次。 | epa-concrete-washout-2012 |
| shared_and_runs | 所有过程 | 检查浇筑/批次/事件id、换批责任、全部共享资产使用者和份额；总量不得重复能源、资本、进退场与清理。 |  |
| washout_release_route | placement_washout_releases; placement_wash_slurry | 每项已核实直接释放须有事件物质、接收水/土壤子介质及浓度/数量证据；归属placement及cp_placement，与交给责任方的浆液和养护释放区分。平衡各去向且不重复；组成或发生情况未明确时保留覆盖不完整，不填零。 | epa-concrete-washout-2012 |
| actual_identity | 所有清单行 | 最终数据集交换须有已核实具体流/属性/单位身份，未解析语义卡及通用物种不是可发布交换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景施工服务数据包及flow/process/lifecyclemodel投影。 |
| downstream_use | 声明建筑工程包模型的secondary_dataset；background_dataset。 |
| allowed_use | 匹配构件、规范、浇筑路线和验收门并关联上下游工程包。 |
| excluded_use | 未经审查不得用于预拌制造、整栋建筑足迹、寿命功能比较、道路/桥梁/海工混凝土或更广混凝土服务覆盖。 |
| required_metadata | 场址/地域；日期及批次；验收构件几何；混合料/强度/龄期/暴露；饰面；养护期；设备；供应门；排除责任；资本/运输/废物政策。 |
| required_quality_disclosure | 计量覆盖、缺失事件、估算份额、范围来源、身份缺口、干湿换算及平衡残差。 |
| update_trigger | 混合料、设备、养护/饰面规范、验收条件、供应边界、计量证据或身份核实实质变化。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ufgs-cast-in-place-2019 | standard | USACE/NAVFAC/AFCEC UFGS 03 30 00, February 2019, Change 10 August 2025; https://www.wbdg.org/FFC/DOD/UFGS/UFGS%2003%2030%2000.pdf | 浇筑、饰面、养护及现场验收职责；实际项目规范控制，不作为通用消耗因子。 |
| epa-concrete-washout-2012 | official_guidance | US EPA, EPA 833-F-11-006, February 2012; https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 水化说明及洗浆分离、收集与去向责任，不假设回收率。 |
| unsd-cpc21-concrete-services | official_guidance | UNSD CPC 2.1 54540 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/54540 | 仅辅助分类解释，不声称是CPC 3.0解释或定量来源。 |
