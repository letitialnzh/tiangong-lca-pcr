---
pcr_id: pcr.existing-ferrous-foundry-coreless-induction-melting-plant-integrated-reconstruction-and-commissioning-services
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 既有黑色金属铸造厂无芯感应熔炼装置综合改建与调试服务

## 1. 范围与适用性

本PCR适用于既有黑色金属铸造厂无芯感应熔炼装置完成的综合改建与调试项目。其保留状态基线及实际首炉衬与热试验验收要求，使其区别于新建且仅冷态测试的专用资产。包括合同范围内的基础、炉坑、熔炼平台及通道改动，以及实际炉体、供电/线圈/控制、液压、加料、冷却和烟气捕集系统的集成。输出须完成经批准的启动前检查、所需炉衬安装/烘干/烧结、受监督的黑色金属试炉、整改复试及业主/承包商签署移交。这些活动构成一个集成责任；仅在真实独立交接有证据时增设节点。`inductotherm-installation-retrofit-services`; `inductotherm-coreless-steel-2013`; `electroheat-ferrous-foundry-commissioning`; `hongteng-induction-installation-2026`。

排除全新铸造厂、普通工业建筑、仅有色金属或仅高炉/冲天炉/电弧炉装置、单独供货的炉机、独立安装/换衬/日常维护、仅冷态安装以及移交后正常商业熔炼或铸造。能力、炉数、炉衬化学组成、冷却介质、炉次时间、试验温度、能耗/收得率、排放和资产寿命均由项目决定；供应商实例不构成默认值。验收不提供通用操作规程，也不自动证明安全、排放合规或全寿命性能。`unsd-cpc3-industrial-plants-2025`; `hse-foundry-furnace-fd2-2022`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.existing-ferrous-foundry-coreless-induction-melting-plant-integrated-reconstruction-and-commissioning-services` |
| classification_refs | CPC 3.0 54269; 较窄方法子集，仅作为分类背景 |
| covered_products | 具有实际炉衬与热试验验收的保留装置土建及工艺接口综合改建服务 |
| excluded_products | 排除全新铸造厂、普通工业建筑、仅有色金属或仅高炉/冲天炉/电弧炉装置、单独供货的炉机、独立安装/换衬/日常维护、仅冷态安装以及移交后正常商业熔炼或铸造。能力、炉数、炉衬化学组成、冷却介质、炉次时间、试验温度、能耗/收得率、排放和资产寿命均由项目决定；供应商实例不构成默认值。验收不提供通用操作规程，也不自动证明安全、排放合规或全寿命性能。`unsd-cpc3-industrial-plants-2025`; `hse-foundry-furnace-fd2-2022`。 |
| representative_product | 既有黑色金属铸造厂无芯感应熔炼装置改建调试验收服务 |
| production_route | 保留状态调查及隔离; 实际拆除/土建改动; 综合安装; 递进冷态检查; 所需炉衬投用; 受监督热试验; 缺陷关闭及签署移交 |
| market_state | 既有装置上已完成并验收的场址特定综合施工服务，非一吨金属或采购炉机 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 既有黑色金属铸造厂无芯感应熔炼装置改建调试验收服务 |
| How much | 1个完整验收改建项目 |
| How well | 经批准的项目特定土建及综合冷热验收档案、缺陷关闭、业主/承包商签署移交 |
| How long or cycle | 从保留调查，经实际拆除/土建、集成、首炉衬和冷热试验、整改至移交；关联全部报告期间，不设标准时长 |
| reference_flow_link | `accepted_service` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| product_flow | 既有黑色金属铸造厂无芯感应熔炼装置改建调试验收服务 |
| flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| unit_group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | item |
| required_qualifiers | 黑色金属种类; 保留与更换设备清单; 土建基础炉坑与熔炼平台范围; 炉数与配置; 作为描述的额定能力; 实际供电冷却液压加料及排烟接口; 首炉衬投用要求; 冷热态验收准则及授权与适用性; 调试及报告期间; 合同责任界限; 签署验收的改建项目ID |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `count_reference` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N为cp_acceptance所载唯一且完整验收的改建项目ID正计数。协调合同装置范围仅计一次；炉数、阶段、MW、炉次和金属吨数是限定信息或活动量。 |
| `native_and_mass` | 原生供应及实物流出 | 实际原生属性；仅有证据的独立质量视图使用质量 | 实际原生单位 | 保持供应及匹配可用退料的原生数量/面积/长度/体积/质量单位。需要独立质量视图时，采用实际SKU净质量或密度，并记录状态、含水率、温度、temperature_unit、单位换算与证据；不得与同一原生实物量相加。 |
| `utilities_and_species` | 实际公用介质及基本流 | 实际核实的原生属性；物种质量 | 实际原生单位; kg | 实际电量与热燃料分表；最终创建交换前核实实际能量及气/水原生支持。不以低位/高位热值或数量替代电能。物种释放须有物质与介质及匹配实测质量或适用因子/组成/去向证据。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 经调查的保留厂房、设备、公用设施、既有炉衬和金属炉底余料，以及批准的改建包与责任界限 |
| starting_condition_role | 历史基线存量和承接场址条件；非新采购，也非避免新资产抵扣 |
| product_classification_scope | 工业土木工程内较窄的黑色金属无芯感应保留装置综合改建子集 |
| recursive_input_rule | 独立验收的同类分包改建作为上游服务，明确无重叠范围及实物完成结果。展开其资源或使用完整上游数据集一次；不得递归重计同一最终项目。 |
| upstream_dataset_requirement | 实际供应/服务商/运输/临时/试验/备用资源要求完整上游覆盖，含场外工作。声明已含制造、运行、维护和寿命终结范围；最终完成前补足一次。 |
| disclosure | 披露保留及变更清单、土建接口、验收准则的授权/采用依据、阶段及期间、期初/期末库存、实物流出、服务商范围、可用金属归属和不确定性。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `retained_and_civil` | 整个改建项目 | 包括必要隔离、历史设备/炉衬拆除、实际基础/炉坑/平台工作、全部新装或维修集成，以及验收前所需首炉衬/热试验资源。保留历史资产和炉底余料存量与当期采购分开。 | inductotherm-installation-retrofit-services; inductotherm-coreless-steel-2013 |
| `acceptance_gate` | accepted_service | 须有适用的土建/支撑检查、安装包清单、电气/接地/保护/联锁/急停、冷却/液压、排烟/捕集指示及采用的调试控制检查；所需炉衬处理和受监督熔炼/出炉/停机结果；缺陷关闭、图纸、运维资料、培训及业主/承包商签署验收。记录实际准则与授权，不得虚构。 | electroheat-ferrous-foundry-commissioning; hongteng-induction-installation-2026; hse-foundry-furnace-fd2-2022 |
| `coverage_owner` | 全部资源 | 直接/服务商/租赁/货运/临时/试验/备用或连续性保障事件各设唯一责任方。价格、工时或机时本身不是实物完成服务。使用匹配且生命周期完整的服务商单位，或采集遗漏实物负担。范围缺失阻止最终数据。 |  |
| `stock_and_heat` | 材料及热试验 | 按炉次与事件跟踪首批炉料、采购、保留炉底余料、内部回炉金属/样品/浇冒口、出炉验收金属、渣、粉尘、收集残余物和期末金属。内部循环为转移，非新采购或重复输出。未知不平衡须调查及记录不确定性；不得用差额推断空气排放或燃烧量。 |  |
| `secondary_and_period` | 二次炉料及共享资产 | 声明实际二次来源、回收交接、承接负担或有据截断及前系统归属。列明调查、拆除/土建、安装、炉衬、冷热试验、整改和移交期间，以及关联采购、资产、输出、更换和终止。永久交付装置组件按实际采购承担一次完整上游，不按未来寿命/试验时长分配。共享驱动分配仅用于实际支持用临时/服务商资产。不得任设寿命、避免生产抵扣或重复历史负担。 |  |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：实际安装组件及施工/炉衬耗材 (`installed_supplies`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `inputs` / `product`.

按SKU和原生单位展开实际炉壳/线圈、供电控制、液压/加料/冷却/排烟组件、混凝土/钢材/锚件/灌浆、线缆/管材、炉衬及准备耗材。包括所需首炉衬及失败/更换安装资源；安装活动不是额外采购。新永久交付炉体/供电/冷却/排烟及土建组件按实际供应承担一次完整上游负担，不按试验时长或未来生产寿命摊薄。

- 采集对象：实际安装组件及施工/炉衬耗材
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：采用所述原生库存规则：含出口总投入模式为S/N，净消耗模式为(S-usable_return)/N，按SKU/原生单位匹配；两种视图均保留废物的上游负担。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock`
- 来源：inductotherm-coreless-steel-2013; hongteng-induction-installation-2026

数量范围证据需求：采集实际永久设备BOM、土建/炉衬SKU原生量、库存/退回状态及失败安装耗用；材料投入强度区间须有独立可比改建记录。

#### 采集要求：实际外部黑色金属试炉炉料及添加物 (`trial_charge`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `inputs` / `product`.

按品级、来源和前系统处理展开调试门槛上的实际铁/钢废料、原生炉料及添加物。保留炉底余料和内部回炉金属/样品/浇冒口为实测基线/转移存量，非新收货。无通用配比、化学组成或收得率。

- 采集对象：实际外部黑色金属试炉炉料及添加物
- 流属性/单位：质量 / kg
- 数量规则：对当期外部炉料应用所述原生库存规则：含出口总投入为S/N，净消耗为(S-usable_return)/N，其中usable_return仅指相同输入SKU/原生状态实际未耗用向外退回。出炉/已加工试验金属不得冲减炉料采购。通过所述实际炉次台账核对单独的承接炉底余料和内部转移；无质量差额排放抵扣。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hot`
- 来源：electroheat-ferrous-foundry-commissioning

数量范围证据需求：逐个验收或失败试验采集实测入炉量、品级/含量、冷料库存和炉底余料转移。区间须有金属类别、炉衬及试验目的独立可比证据，不能取供应商额定能力或假定收得率。

#### 采集要求：实际供应燃料及热调试介质 (`fuel_supply`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `inputs` / `product`.

仅展开施工、烘干或辅助设备实际采用的燃料/热介质供应，并记录燃料身份与状态。供应不同于实际燃烧。分别记录未用退回、未燃收集废物、非收集损失及结转。

- 采集对象：实际供应燃料及热调试介质
- 流属性/单位：实际原生属性 / 实际燃料原生单位
- 数量规则：采用所述原生库存规则的S/N含出口总投入或(S-usable_return)/N净消耗；所述实际燃料去向台账独立确定实际燃烧。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`

数量范围证据需求：采集实际燃料身份/原生库存、实测燃烧或完整互斥去向、损失调查及状态换算；燃烧区间须有独立可比设备任务及炉衬/试验条件。

#### 采集要求：实际供应水及液态运行介质 (`process_water`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `inputs` / `product`.

按身份与状态展开实际购入水、冷却初充/补水、液压液、清洗剂及处理产品。分别计量初充、补充、回收与结转。不预设去离子水化学组成、直流水量或耗水因子。

- 采集对象：实际供应水及液态运行介质
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：应用所述原生库存规则：S/N含出口总投入或(S-usable_return)/N净消耗，回收期末量保留于closing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock`

数量范围证据需求：采集实际水/液体产品状态、初充/补充/回收期末及向外退回量；区间须有可比实际冷却回路、炉衬工作和试验时长，不用通用淡水因子。

#### 采集要求：装置施工或试验实际供应气体 (`process_gases`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `inputs` / `product`.

按物种/混合物、组成、压力/温度基准及上游范围条件展开实际采购保护气、切割气、工艺气或压缩气。不得因炉型名称推断气体。若有实际大气抽取，归入environmental_intakes。

- 采集对象：装置施工或试验实际供应气体
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：在同一有据原生气体状态下应用所述原生库存规则的S/N含出口总投入或(S-usable_return)/N净消耗；内部循环非外部供应。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock`

数量范围证据需求：采集实际气体物种/混合物及组成、压力/温度和原生单位计量、供应/退回状态及换算证据；无芯炉名称不能推出气体需求区间。

#### 采集要求：实际外部完成的施工及调试服务 (`provider_services`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `inputs` / `product`.

按实际实物完成结果和责任条件展开独立土建、电气、专业炉衬、测试、吊装、废物处理及场外服务。服务商包须披露制造/能源/耗材/运输/资产覆盖。

- 采集对象：实际外部完成的施工及调试服务
- 流属性/单位：实际核实的服务属性 / 服务商实物原生单位
- 数量规则：完整实际服务商服务 = 实物完成服务数量/N，并匹配完整上游单位；遗漏范围展开一次，排除已直接计入资源。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_provider`

数量范围证据需求：采集实际实物完成服务单位及完整上游/直接重叠矩阵；服务区间须有独立可比责任界限，非价格或无范围工时。

#### 采集要求：归属共享临时或试验资产服务 (`shared_assets`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `inputs` / `product`.

识别跨项目/期间使用的实际共享起重机、工装、临时泵/冷却/排烟、仪表和试验设备。跨全部用户覆盖制造、维护、更换和寿命终结；排除已完整含于服务商的资产。

- 采集对象：归属共享临时或试验资产服务
- 流属性/单位：实际资产等效数量或生命周期完整服务属性 / 匹配原生单位
- 数量规则：采用所述支持资产驱动规则：asset_equivalent=(job_driver/life_driver)/N，或生命周期完整的原生服务数量=job_driver/N。仅选择一种匹配负担视图且归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`

数量范围证据需求：采集全部用户兼容的实际项目/全寿命驱动、观测历史及有据剩余期、维护/更换/终止/寿命终结；不假定寿命或利用率区间。

#### 采集要求：实际归属货运服务 (`freight`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `inputs` / `product`.

展开上游尚未覆盖的实际设备/材料/炉料/残余物运输。采用实际载荷、分段、路线及共载分担；空返通过服务商范围或单独实际车辆服务记录，不虚构载货吨公里。

- 采集对象：实际归属货运服务
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则：实际货运工作 = sum(load_kg*distance_km*attribution_share)/N，单位kg*km；保留空返及服务商覆盖。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_freight`

数量范围证据需求：采集实际净载荷、距离单位及路线分段、共载归属和空返/服务商覆盖；货运校验区间须有独立可比路线样本。

#### 采集要求：实际直接环境水或气体取入 (`environmental_intakes`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `inputs` / `elementary`.

若实际存在直接取水或大气/工艺气体资源跨界，必须展开为来源介质与物质/资源明确核实的交换。保留实测原生数量、状态及换算。购入水/气和内部循环不列此处。确认未发生须有范围证据。

- 采集对象：实际直接环境水或气体取入
- 流属性/单位：实际核实的资源属性 / 实际原生单位
- 数量规则：实际原生环境交换 = 按资源及来源介质的实际归属直接取入/N，不重复购入供应。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_environment`

数量范围证据需求：采集每个实际来源介质/资源及实测原生取入量，附气体压力/温度或水表状态及不确定性；确认未发生或设定取入区间须有实际范围证据。

#### 采集要求：实际当期未用供应可用退回 (`usable_supply_returns`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `outputs` / `product`.

此处仅列当期供应实际可用向外退回，记录SKU、状态、接收方与转移。期末库存、已加工试验金属、废物和历史拆出设备为不同角色。仅未改变且未耗用的匹配输入SKU/原生供应可冲减当期供应。

- 采集对象：实际当期未用供应可用退回
- 流属性/单位：匹配实际原生属性 / 匹配原生单位
- 数量规则：含出口总投入模式将usable_return/N作为实物流出；净消耗模式已从供应扣除一次，仅保留退料台账，不再额外负抵扣或重复交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_stock`

数量范围证据需求：采集与输入供应匹配、接收方确认的未变未用SKU/原生状态实际退回量。已加工试验金属和回收历史设备不能建立供货退回率。

#### 采集要求：实际可用历史设备向外移交 (`historic_asset_exports`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `outputs` / `product`.

展开实际被接收并继续在外部使用的历史设备/组件，记录净原生量、状态、接收方与转移。区分保留资产、废料/废物、当期退料及更换采购。

- 采集对象：实际可用历史设备向外移交
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：实际实物流出 = 实际验收的历史可用资产数量/N；不负计新采购或自动替代抵扣。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`

数量范围证据需求：采集实际历史资产状态、原生净量及接收验收；流出区间须有独立回用记录，不假定转售或替代价值。

#### 采集要求：实际验收可用调试金属向外移交 (`trial_metal_exports`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `outputs` / `product`.

展开接收方实际接收的可用出炉/凝固试验金属或样品，记录品级、状态、净质量、炉次与转移。保留炉底余料、内部重熔试验金属及废物不是可用向外输出。归属前判定试验属于必要非商业调试还是有意安排的商业性联产。

- 采集对象：实际验收可用调试金属向外移交
- 流属性/单位：质量 / kg
- 数量规则：实际实物流出 = 实际可用调试金属export_kg/N；应用hot_attribution，将全部必要非商业试验负担保留在服务，不自动抵扣。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_hot`

数量范围证据需求：采集实际出炉/样品质量、金属含量/品级/状态、接收方及炉次/转移ID，以及非商业或明确商业目的。不从炉料质量或炉容推断输出/收得率区间。

#### 采集要求：实际向外部接收方输送电能 (`electricity_exports`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `outputs` / `product`.

按来源、原生单位、接收方及电表条件展开实际实测外送电能。内部循环或设备间转移非向外输出。总输出与总输入分列，不净扣或授予未来节能抵扣。

- 采集对象：实际向外部接收方输送电能
- 流属性/单位：实际电能 / 电表原生能量单位
- 数量规则：electric_export = 实际分来源总外送能量/N；保留接收方及实际归属，不负计输入。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`

数量范围证据需求：采集实际来源/接收方总输出电表及外部边界证据。不假定输出量或退回抵扣区间。

#### 采集要求：实际收集的施工及热试验废物 (`contained_wastes`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `outputs` / `waste`.

必须按实际材料/状态/危险性与去向展开历史炉衬/残渣、失败组件、耐火废物、炉渣、捕集粉尘/滤材、未接收金属、废液和包装。渣、粉尘和收集液为已收集废物，其总质量非空气/水释放。每个拒收事件关联返工、回收、降级或处置。

- 采集对象：实际收集的施工及热试验废物
- 流属性/单位：实际原生废物属性 / 实际原生单位
- 数量规则：实际实物流出 = 实际收集废物数量/N，保留上游损失负担；实际处理覆盖关联一次，不预设回收抵扣。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue`

数量范围证据需求：采集各实际渣/尘/炉衬/液体/组件废物原生总量、用于平衡的金属含量、捕集状态、危险性及去向。任何废物比例须有独立可比证据；粉尘危险性不等于排放量。

#### 采集要求：向接收环境的实际直接水排放 (`water_outfalls`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `outputs` / `elementary`.

必须按接收介质与状态展开实际排口水量，独立于购入供应和送处理的收集废水。记录实际数量、循环、蒸发及保留水，不假设全部取水等于耗水或排水。污染物单列species_releases。

- 采集对象：向接收环境的实际直接水排放
- 流属性/单位：体积 / m3
- 数量规则：实际原生环境交换 = 实际实测直接释放water_m3/N；整水量与污染物视图不可相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_environment`

数量范围证据需求：采集实际接收介质及实测排口水量、循环/蒸发/保留/收集废水覆盖。不从购入或取入水量推出排放比例。

#### 采集要求：按接收介质的实际物种释放 (`species_releases`)

过程／待建立交换的方向／类型：`integrated_reconstruction` / `outputs` / `elementary`.

仅在物质或粒径基准及接收介质明确时，必须展开实际炉体/炉衬/炉料/燃料或液体释放。采用实测质量、匹配活动物种因子或实测整介质释放与有据组成及去向。HSE危险物清单和接触限值提示控制问题，不构成清单因子。捕集粉尘不是未捕集排放。若实际气体基本流以原生体积计量，必须另展开原生气体交换，记录实际量/单位、参考压力/温度及接收环境分室；不强迫换成物种kg，也不将原生整气与质量/物种视图相加。整介质体积转物种质量须有实际密度/单位/状态/来源和压力/温度证据。

- 采集对象：按接收介质的实际物种释放
- 流属性/单位：质量 / kg
- 数量规则：实际物种质量 = measured_mass/N，或activity*matched_species_factor/N，或whole_release*composition*fate/N，单位及基准须匹配。完整因子不再乘组成/去向；不将整介质与物种视图相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_environment`

数量范围证据需求：采集实际物质/粒径基准与介质、实测质量或匹配物种因子活动，或整介质组成/去向及来源单位。不得从危险性/接触/SDS清单或未解释金属差额推出排放区间。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_reconstruction` | 保留装置综合改建及热调试 | required | 实际合同综合土建及工艺接口改建并需要热验收 | 通过实际土建、炉衬及试验门槛的装配集成责任；返工循环保留此处直至真实独立交接 | accepted_service |

### 过程：保留装置综合改建及热调试 (`integrated_reconstruction`)

#### 输入

##### 产品流

###### 改建调试实际购入电能 (`electricity`)

按来源分别记录电能总输入、向外总输出及实际现场发电。计量安装工具、泵、冷却/排烟循环、炉衬处理及所有试验/复试，包括归属待机和损耗，并记录实际实物驱动及单位。实际现场发电燃料、资产和释放均覆盖一次；不净扣或授予未来节能抵扣。明确电压/电网/服务商及上游覆盖。核实电能支持；不设通用熔炼能耗因子。

- 选定流：改建调试实际购入电能
- 流属性/单位：实际电能 / 电表原生能量单位
- 数量规则：归属分来源总输入电能 = 按无重叠用户、阶段、实物驱动及期间核对后的分来源总输入电能/N；现场发电及总输出分别记录。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`

数量范围证据需求：采集分来源总输入/输出电表、实际现场发电、用户/阶段/循环/损耗覆盖及实物驱动/单位。能量区间须有独立可比范围及热试验数据，不能取供应商保密指标。

##### 基本流

#### 输出

##### 产品流

###### 既有黑色金属铸造厂无芯感应熔炼装置改建调试验收服务 (`accepted_service`)

指指定保留装置上一个实际完整验收的综合改建项目。仅机械完工、未关闭缺陷或单次成功炉次均不构成本移交。

- 选定流：既有黑色金属铸造厂无芯感应熔炼装置改建调试验收服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：electroheat-ferrous-foundry-commissioning; hongteng-induction-installation-2026

数量范围证据需求：精确1 item是验收服务的归一化，非经验收得率或不同能力等价证明；N计实际验收ID。

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `hot_attribution` | 服务与可用金属 | 此处唯一预期产品为改建服务；可用历史资产及必要试验金属为实物流出。有意开展的商业金属生产在单独边界及归属获得论证前排除。全部必要非商业调试、首炉衬、失败试验、待机支持、整改和复试负担归验收改建服务。历史资产及可用金属实物流出保持透明，不自动转出负担或授予避免产品抵扣。若任何试验是有意安排的商业性联产，先单列生产边界、完整预期产出及交接，再于最终数据前批准项目特定且有因果依据的拆分/归属，附原始驱动、份额及敏感性；不默认商业金属免费或虚设零份额。 |  |
| `stock_view` | 新供应及退回 | 每个SKU与范围声明一致的含出口总投入或净消耗视图。S=attributed_opening+external_net_receipts-carried_closing；期末含回收期末量。S/N为含出口总投入，(S-usable_return)/N为净消耗。期初与期末为库存观测，非互斥去向。内部安装/领用/回炉非另一次收货；向外未用退回仅减供应一次。废物/损失保留供应负担；历史资产/炉底余料为单独承接存量，不负计采购。 |  |
| `shared_and_period` | 共享资产与期间 | 采用完整制造+维护+更换+寿命终结负担及跨全部消费项目/节点/期间的兼容job_driver/life_driver。life_driver须有观测寿命，或观测历史加有据剩余期、更换、终止及寿命终结，并附来源、不确定性、敏感性与更新。选择asset_equivalent=(job_driver/life_driver)/N，或生命周期完整原生service=job_driver/N并匹配单位负担；不得合并视图或重复归一化。关联阶段、库存结转及更换；寿命/剩余期/终止或用户覆盖未决阻止最终完成。 |  |
| `secondary_and_reject` | 二次及拒收状态 | 外部二次炉料或回收输入须记录来源与回收交接、当期运输/处理，以及承接负担或有据前系统截断。保留炉底余料/内部重熔承接已记录既有负担，不新计采购。失败炉衬、不合格炉次、组件和样品须关联实际返工、再用/降级、回收或丢弃；保留重复资源负担，任何未决拒收不得计为验收服务或可用金属。无通用再生成分或替代默认值。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | integrated_reconstruction | 整个验收项目及实际门槛 | acceptance_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; scope_register; retained_equipment; replaced_equipment; civil_foundation_pit_deck_scope; metal_family; furnace_configuration; rated_capacity; capacity_unit; interface_register; authority; criteria_id; applicability_basis; cold_check_results; lining_requirement; lining_cycle_record; heat_ids; hot_tap_shutdown_results; defect_id; defect_closure; drawings_id; om_record; training_record; owner_signature; contractor_signature; accepted_date; N | 核对批准的改建合同、基线调查及签署门槛档案；记录所有尝试的实际准则/结果和缺陷。 计数N个唯一完整验收项目ID；排除重复炉次、测试阶段及未决拒收；每ID一个参考流。 N仅取cp_acceptance最终唯一accepted_intervention_ids/reference_gate_id；阶段或炉次不增加参考计数。 | item | 每项目及门槛事件 | 从保留调查至签署移交全部实际阶段/期间，含失败/重复事件 | 指定装置改建及归属场外/服务商范围 | 每参考流 | 签署授权/适用性、可追溯冷热结果及缺陷关闭证据 |
| `cp_stock` | integrated_reconstruction | 新供应及未用向外退回 | stock_ledger | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; sku; material_identity; material_state; native_property; native_unit; attributed_opening; gross_receipts; tare_receipts; external_net_receipts; carried_closing; recovered_closing; usable_return; return_receiver; return_transfer_id; internal_issue; installed_quantity; waste_quantity; loss_quantity; measurement_unit; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; pressure; pressure_unit; return_view; scope_coverage; installed_or_temporary; lifecycle_coverage; uncertainty | 在同一原生单位下使用校准数量/称重/仪表、收退货凭据及期末实盘；按SKU和状态核对。 每参考流应用stock_native一次；保留所有未退废物/损失供应负担，回收期末量含一次。 N仅取cp_acceptance最终唯一accepted_intervention_ids/reference_gate_id；阶段或炉次不增加参考计数。 | 实际原生单位；仅独立有据质量视图用kg | 每收退事件及期间期初/期末 | 从保留调查至签署移交全部实际阶段/期间，含失败/重复事件 | 指定装置改建及归属场外/服务商范围 | 每参考流 | 签署库存核对、校准、状态/换算证据及差异调查 |
| `cp_hot` | integrated_reconstruction | 外部试炉炉料、炉底余料、内部循环及可用金属 | heat_ledger | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; heat_id; metal_grade; charge_sku; origin; secondary_status; recovery_handoff; inherited_burden; cutoff_decision; current_external_opening; charge_native_property; charge_native_unit; gross_receipts; tare_receipts; external_net_receipts; current_external_closing; recovered_closing; usable_return; return_receiver; return_transfer_id; inherited_heel_opening; heel_closing; charge_to_heat_kg; charge_to_heat_unit; cold_stock_opening; cold_stock_closing; cold_to_heat_transfer_id; heel_transfer_id; internal_transfer_id; internal_recharge_kg; sample_kg; tapped_kg; export_kg; receiver; output_grade; output_state; output_transfer_id; balance_basis; balance_basis_unit; metal_content; metal_content_unit; metal_content_source; slag_gross_quantity; slag_native_unit; slag_metal_content; slag_content_basis; slag_content_source; dust_gross_quantity; dust_native_unit; dust_metal_content; dust_content_basis; dust_content_source; actual_lining_transfer; lining_transfer_unit; actual_flux_addition; flux_unit; actual_gas_uptake; gas_uptake_unit; gas_uptake_source; slag_kg; captured_dust_kg; contained_metal_waste_kg; measured_species_release_kg; unaccounted_difference; mass_unit; measurement_basis; calibration; purpose; commercial_boundary; intended_outputs; attribution_method; raw_driver; driver_unit; output_share; evidence; uncertainty; sensitivity | 按炉次关联实测入炉量、冷料/炉底余料转移、出炉/样品/外移及残余记录。对当期外部炉料SKU/原生状态，将current_external_opening对应stock_native的attributed_opening，current_external_closing（含recovered_closing）对应carried_closing；承接炉底余料保持独立。记录失败/重复炉次及目的。 以stock_native及hot_attribution核对heat_ledger；外部输入和实际export_kg/N计一次；内部循环作为转移抵消，不计采购。 N仅取cp_acceptance最终唯一accepted_intervention_ids/reference_gate_id；阶段或炉次不增加参考计数。 | kg | 每炉次及关联转移；调试期初/期末 | 从保留调查至签署移交全部实际阶段/期间，含失败/重复事件 | 指定装置改建及归属场外/服务商范围 | 每参考流 | 称重记录、金属状态/品级证据、接收验收、存量差异调查及明确归属批准 |
| `cp_energy` | integrated_reconstruction | 实测电能 | meter_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; meter_id; source_id; receiver; consumer_id; provider; gross_import; gross_export; onsite_generation; onsite_fuel_event; onsite_asset_id; onsite_release_id; physical_driver; driver_unit; construction_energy; lining_energy; hot_energy; retest_energy; circulation_energy; loss_energy; voltage; voltage_unit; native_property; native_unit; reading_start; reading_end; meter_factor; conversion_factor; conversion_unit; conversion_source; attributable_share; other_consumers; coverage_start; coverage_end; idle_energy; trial_id; provider_included_resources; calibration; uncertainty | 读取校准分表或核对总表及互斥用户/期间；保留每个炉衬、炉次和复试事件。 对原始无重叠来源/用户事件记录应用utility_meter一次；结果已为每参考流，不再除N。不加服务商已含电量。 N仅取cp_acceptance最终唯一accepted_intervention_ids/reference_gate_id；阶段或炉次不增加参考计数。 | 电表原生电能单位 | 每计量区间及事件 | 从保留调查至签署移交全部实际阶段/期间，含失败/重复事件 | 指定装置改建及归属场外/服务商范围 | 每参考流 | 表计校准、账单/分表核对及实际电能属性核实 |
| `cp_fuel` | integrated_reconstruction | 燃料供应及燃烧去向 | fuel_ledger | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; fuel_identity; fuel_state; native_unit; attributed_opening; gross_receipts; tare_receipts; external_net_receipts; carried_closing; recovered_closing; usable_return; measured_burn; burn_meter_id; nonburned_waste; uncontained_loss; loss_investigation; total_spill_audit; recovered_to_closing; fate_coverage; fate_overlap_check; measurement_unit; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; material_state; moisture; moisture_basis; temperature; temperature_unit; pressure; pressure_unit; uncertainty | 将实际供应库存与实测燃烧分开核对。无法直接计量燃烧时，审核完整互斥的原生单位去向台账并调查未知损失。 stock_native确定上游供应；fuel_fates确定实际燃烧，不以未经核实差额推定，也不重复溢漏/回收。 N仅取cp_acceptance最终唯一accepted_intervention_ids/reference_gate_id；阶段或炉次不增加参考计数。 | 实际燃料原生单位 | 每补充/燃烧/损失事件及期间 | 从保留调查至签署移交全部实际阶段/期间，含失败/重复事件 | 指定装置改建及归属场外/服务商范围 | 每参考流 | 燃料表或完整去向证明、密度/状态换算、不确定性及调查记录 |
| `cp_provider` | integrated_reconstruction | 外部完成服务及范围 | provider_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; provider_id; service_identity; physical_completed_result; service_quantity; native_property; native_unit; acceptance_id; responsibility_limit; manufacture_scope; energy_scope; material_scope; labor_scope; asset_scope; transport_scope; maintenance_scope; replacement_scope; eol_scope; missing_scope; direct_overlap; upstream_dataset; unit_match; evidence; uncertainty | 获取服务商实物完成和完整范围清单/数据集；对照直接台账逐项比较遗漏/重叠资源。 每参考流provider_complete；遗漏资源补一次，不将价格或无范围工时换为数量。 N仅取cp_acceptance最终唯一accepted_intervention_ids/reference_gate_id；阶段或炉次不增加参考计数。 | 服务商实物原生单位 | 每完成服务包 | 从保留调查至签署移交全部实际阶段/期间，含失败/重复事件 | 指定装置改建及归属场外/服务商范围 | 每参考流 | 签署完工、服务商范围矩阵及匹配上游边界/单位 |
| `cp_asset` | integrated_reconstruction | 共享临时/试验资产及全部用户 | lifecycle_driver_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; asset_identity; temporary_or_provider_support; permanent_delivered_exclusion; consumers_all_jobs_nodes_periods; service_start; service_end; job_driver; driver_unit; life_driver; life_driver_unit; observed_history; observed_life; evidenced_remainder; remainder_source; manufacture_burden; maintenance_burden; replacement_events; replacement_burden; termination_event; eol_burden; lifecycle_dataset; manufacture_source; maintenance_source; replacement_source; termination_source; eol_source; history_source; evidence_source; lifecycle_unit; selected_view; provider_inclusion; uncertainty; sensitivity; update_trigger | 采用资产清单和全寿命兼容使用历史及有据剩余期、维护、更换和寿命终结；列明全部用户。 每参考流shared_driver，采用一种生命周期负担视图且归一化一次。 N仅取cp_acceptance最终唯一accepted_intervention_ids/reference_gate_id；阶段或炉次不增加参考计数。 | 实际驱动单位或资产等效item | 每使用、维护、更换及终止事件 | 完整制造、全部消费项目/节点/期间、维护、更换、终止及寿命终结；另关联实际项目/事件窗口 | 指定装置改建及归属场外/服务商范围 | 每参考流 | 全寿命覆盖、驱动单位等价、有来源剩余期及敏感性/更新证明 |
| `cp_freight` | integrated_reconstruction | 实际货运工作及空返覆盖 | transport_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; shipment_id; leg_id; carrier; load; load_unit; tare; net_load; load_kg; load_conversion; load_conversion_source; distance; distance_unit; distance_km; distance_conversion; distance_source; attribution_share; shared_load; empty_return; empty_return_unit; upstream_inclusion; provider_coverage; responsibility; uncertainty | 核对实际运输质量、路线分段、承运凭据及服务商边界与共载归属。 每参考流freight_work，各段一次；披露实际空车服务覆盖，不虚构载荷。 N仅取cp_acceptance最终唯一accepted_intervention_ids/reference_gate_id；阶段或炉次不增加参考计数。 | kg*km | 每批运输及分段 | 从保留调查至签署移交全部实际阶段/期间，含失败/重复事件 | 指定装置改建及归属场外/服务商范围 | 每参考流 | 运单、路线距离证据及承运商上游/空返范围 |
| `cp_residue` | integrated_reconstruction | 可用历史资产及收集废物 | outlet_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; outlet_id; origin_event; historical_or_current; material_identity; material_state; native_property; native_unit; gross_quantity; tare; net_quantity; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; receiver; transfer_id; useful_acceptance; waste_classification; hazard_evidence; treatment_route; treatment_coverage; reject_id; rework_transfer_id; recovery_or_disposal; uncertainty | 计量实际流出及接收凭据，区分历史可用资产、退料和废物；将拒收关联产生事件及实际去向。 按状态及目的地对原始net_quantity应用physical_outlet一次；其结果已为每参考流，不再除N。匹配处理范围，不重复服务商负担。 N仅取cp_acceptance最终唯一accepted_intervention_ids/reference_gate_id；阶段或炉次不增加参考计数。 | 实际流出原生单位 | 每拆除/拒收/转移 | 从保留调查至签署移交全部实际阶段/期间，含失败/重复事件 | 指定装置改建及归属场外/服务商范围 | 每参考流 | 接收验收或废物联单、校准、危险性/状态证据及处理链 |
| `cp_environment` | integrated_reconstruction | 实际资源取入、水排口及物种释放 | environment_record | site_id; job_id; intervention_id; reference_gate_id; accepted_intervention_ids; asset_id; campaign_id; batch_id; event_id; phase_id; period_id; exchange_id; resource_or_substance; particle_basis; flow_direction; source_medium; receiving_medium; location; measurement_start; measurement_end; native_property; native_unit; measured_intake; measured_water_outfall; recirculation; evaporation; retained_water; contained_wastewater; measured_mass; mass_unit; activity; activity_unit; species_factor; factor_unit; factor_scope; factor_source; factor_complete; whole_release; whole_release_unit; native_gas_release; native_gas_unit; gas_reference_temperature; gas_reference_temperature_unit; gas_reference_pressure; gas_reference_pressure_unit; native_gas_compartment; density; density_unit; density_state; density_source; moisture; moisture_basis; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; conversion_factor; conversion_unit; conversion_source; capture_state; calibration; detection_limit; uncertainty | 采用实际校准资源/排口计量及物种监测或有效匹配因子。明确接收介质与捕集去向；调查未知，不将SDS或危险性解释为数量。 每参考流environment_native及species_mass；测量/因子/组成视图互斥且不重复收集废物。 N仅取cp_acceptance最终唯一accepted_intervention_ids/reference_gate_id；阶段或炉次不增加参考计数。 | 实际原生单位；物种kg | 每释放/取入事件及监测区间 | 从保留调查至签署移交全部实际阶段/期间，含失败/重复事件 | 指定装置改建及归属场外/服务商范围 | 每参考流 | 介质/物质证据、校准/检出限、匹配活动因子/组成/去向来源及不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `stock_native` | installed_supplies; trial_charge; fuel_supply; process_water; process_gases; usable_supply_returns | external_net_receipts=gross_receipts-tare_receipts; S=attributed_opening+external_net_receipts-carried_closing; gross_input=S/N; consumed_input=(S-usable_return)/N。recovered_closing含于carried_closing；return_view选择一种表达式，不得两者并用。 | cp_stock; cp_hot; cp_fuel; N | 每参考流实际原生单位供应；匹配未用向外退回台账 |  |
| `heat_ledger` | trial_charge; trial_metal_exports; contained_wastes | 逐实际炉次采用实测charge_to_heat及关联冷料库存/炉底余料/内部转移量；外部收货不自动等于入炉量。各股原生总量保持独立。采用有据匹配的元素/金属含量基准，并记录炉料/金属/渣/尘实际组成、单位和来源；或采用包含实际添加物、炉衬转移及有据反应气体吸收的完整整流质量基准。不得以金属炉料kg直接平衡含氧化物/夹带炉衬的炉渣总kg。配对转移及期初/期末库存；调查unaccounted_difference，不据此推断排放或氧化。 | cp_hot; cp_stock; cp_residue; cp_environment; N | 可审计炉次存量/去向闭合；每参考流外部炉料及可用外移 |  |
| `utility_meter` | electricity; electricity_exports | utility_meter=sum(分来源gross_import*conversion_factor*attributable_share)/N，与来源表差、onsite_generation、实际施工/炉衬/热试/复试/循环/损耗实物驱动及gross_export核对；electric_export=gross_export/N，作为实际接收方独立产品流出。不以输出净扣输入；现场发电燃料/资产/释放覆盖一次。 | cp_energy; N | 每参考流实际归属原生电能 |  |
| `fuel_fates` | fuel_supply; species_releases | 采用measured_burn，或在同一匹配原生基准核实opening+net_receipts=closing+usable_return+burn+nonburned_waste+uncontained_loss，去向须完整互斥并调查未知。recovered_to_closing已在closing；total_spill_audit不可相加。仅核实燃烧量可支持匹配燃烧因子。 | cp_fuel; cp_environment; N | 实际燃烧及互斥燃料去向，独立于上游燃料供应 |  |
| `provider_complete` | provider_services | service_quantity/N，须有physical_completed_result、匹配native_unit及完整上游范围；missing_scope补一次并去除direct_overlap。 | cp_provider; N | 每参考流生命周期完整的实际服务商服务 |  |
| `shared_driver` | shared_assets | asset_equivalent=(job_driver/life_driver)/N，或service_quantity=job_driver/N并匹配生命周期完整原生服务负担。life_driver包括全部用户及观测寿命，或历史加有据剩余/更换/终止/寿命终结。选择一种视图。 | cp_asset; N | 每参考流一份归属生命周期负担 |  |
| `freight_work` | freight | freight_work=sum(load_kg*distance_km*attribution_share)/N；保留实际载荷/距离换算及分段/服务商覆盖。 | cp_freight; N | 每参考流kg*km及单独覆盖实际空车服务 |  |
| `physical_outlet` | historic_asset_exports; trial_metal_exports; contained_wastes | physical_outlet=net_quantity/N或export_kg/N，以实际匹配流出台账为据；无避免产品抵扣。 | cp_residue; cp_hot; N | 按原生单位、状态及接收方的实际实物流出 |  |
| `environment_native` | environmental_intakes; water_outfalls | environment_native=实际归属measured_intake/N或measured_water_outfall/N，按资源、方向及介质分别计算；保留水平衡证据，不加内部循环。 | cp_environment; N | 每参考流实际直接环境原生交换 |  |
| `species_mass` | species_releases | species_mass=measured_mass/N，或activity*species_factor/N，或whole_release*composition*fate/N，先作匹配单位/基准换算。采用一种有效路径；factor_complete时禁止再乘组成/去向；整介质与物种是不可相加视图。 | cp_environment; cp_fuel; N | 每参考流物种kg及实际接收介质 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `gate_trace` | 参考与阶段 | 每个N条目均有同一保留范围、实际土建及热态验收门槛档案、项目特定授权/准则及期间关联。缺失土建范围、炉衬要求、炉次结果或签署移交阻止最终数据。 | cp_acceptance签署记录 |
| `quantities` | 所有流及换算 | 保留每项换算的原始操作数、原生单位、实际SKU/状态/含水率/温度/压力及来源。区间或来源实例不能替代实测。报告不确定性、检出限及核对差异。 | 节点所属协议及校准记录 |
| `complete_coverage` | 直接及上游范围 | 核对全部服务商/资产/期间和收退/库存/去向，并明确唯一责任方。上游、资产寿命、更换、终止、实际二次来源或商业归属缺失阻止最终完成。 | 范围矩阵、资产证据及库存/炉次核对 |
| `identity_and_ranges` | 实际展开交换 | 最终过程/生命周期模型发布前核实每个实际具体身份及原生属性/单位组；SKU/服务商/物种总类须实际展开。以后任何经验区间须有独立可比证据并披露适用性；此处不设数值默认。 | 具体数据集交换证据及独立来源区间 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_gate` | accepted_service | N>0且验收ID唯一，实际土建/炉衬/热试验门槛完整，限定信息准确及1 item；不按炉数/炉次/能力计数，不以仅冷态替代。 |  |
| `stock_heat_fates` | 库存及输出 | 检查SKU原生总额/净消耗视图、含回收的期末量、一次匹配向外退回、历史/新增区分、炉底余料/内部循环、炉次质量闭合、可用外移的接收方/状态及独立渣/捕集尘/收集废物。调查未知；无差额燃烧/排放或自动抵扣。 |  |
| `burden_completeness` | 服务商、资产及期间 | 直接/服务商/场外/租赁/货运/试验/备用/临时公用设施须唯一责任方及完整单位/边界；全部共享用户、完整资产生命周期及有来源剩余期；期间/更换/终止关联且不重复归一化。覆盖缺失即不完整。 |  |
| `actual_environment` | 实际环境交换 | 实际购入和直接环境水/气角色必须分别展开。检查实测取入/排口、物质/介质/物种基准、实际燃烧或完整去向证明、因子/组成/去向匹配及不可相加整介质视图；危险性/接触清单不是排放数量。 |  |
| `output_attribution` | 服务、金属、历史资产及拒收 | 必要非商业试验负担全部保留服务；任何有意安排的商业性联产在最终数据前须单独边界、完整预期产出及有据原始驱动份额。核实二次来源/前负担及实际返工/流出路径。拒收不得计入验收或默认为免费产品。 |  |
| `identity_projection` | 实际展开数据包 | 每个最终交换必须核实具体UUID/类型/方向/状态/原生单位及支持。投影与双语有序ID/语义须一致。缺失实际SKU/服务商/物种或授权证据均阻止最终数据，不因自动检查而免除。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 场址特定验收综合改建调试服务前景数据包 |
| downstream_use | 兼容实际项目的secondary_dataset; background_dataset，以及下游过程/生命周期模型投影 |
| allowed_use | 具有实际土建、首炉衬/热态验收门槛及匹配限定信息的保留黑色金属无芯感应改建范围 |
| excluded_use | 全新铸造厂或炉机制造、仅冷态安装、正常金属生产、未来节能/避免设备或泛化安全/排放声明 |
| required_metadata | 项目/场址ID、保留/更换/土建及接口清单、炉/金属/配置/能力描述、授权/准则、阶段及报告期间、N、库存视图、服务商/资产及可用输出归属 |
| required_quality_disclosure | 门槛及实物覆盖、不确定性及差异、原始库存/炉次/去向/换算证据、二次处理、服务商及生命周期缺口、实际身份与环境方法证据 |
| update_trigger | 保留范围、土建/接口包、金属/炉料或炉衬路线、准则/授权、热试验目的、供应商/资产寿命、库存或环境证据及重要数据缺口变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-industrial-plants-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类范围：工业土建施工/修理/改动包括铸造厂，与普通工业建筑分开；非清单配方。 |
| inductotherm-installation-retrofit-services | handbook | https://inductoheat.eu/wp-content/uploads/sites/29/2019/05/Inductotherm-Group-Brochure-Optimieren.pdf | 历史一手手册支持观察到的土建至调试综合改造/重建服务；非当前能力、项目配方或量化因子。 |
| inductotherm-coreless-steel-2013 | literature | https://inductothermgroup.com/wp-content/uploads/2019/05/The-Application-of-the-Coreless-Induction-Furnace-in-Steel-Melting-A-1.pdf | 一手技术论文支持实际炉体/基础/平台/供电/控制/冷却/排烟接口；布局及数值实例非默认。 |
| electroheat-ferrous-foundry-commissioning | extension_guidance | https://electroheatinduction.com/installation-of-two-5-ton-steel-and-cast-iron-induction-furnaces-in-the-great-lakes-usa/ | 定性供应商铸造厂案例支持安装接口、启动前检查、受监督试炉及移交。客户匿名、运行指标保密限制核实；无炉数/能力/能耗/收得率默认。 |
| hongteng-induction-installation-2026 | extension_guidance | https://www.smelting-furnace.com/induction-furnace-installation-guide/ | 一手供应商指南支持项目采用指令下的责任接口及递进冷态/首炉/移交记录；非通用标准或运行授权。 |
| hse-foundry-furnace-fd2-2022 | official_guidance | https://www.hse.gov.uk/pubns/guidance/fd2.pdf | 英国指南提示任务/炉料特定烟气控制、捕集指示、测试及清洁证据。须声明辖区与适用性；危险性、限值和防护设备非排放数量或全球阈值。 |
