---
pcr_id: pcr.constructions-and-construction-services.constructions.water-supply-aqueduct-and-nonpipeline-conduit-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 供水渡槽与非管道输水渠实体的施工交付

## 1. 范围与适用性

本PCR适用于经实际施工与验收交付、有明确地理边界的完整供水渡槽、明渠、槽渠、覆盖式输水渠或非管道地下输水工程。输出是土木工程实体，不是施工服务或一包材料。适用性取决于供水目的、结构、路线及业主界定的接口，分类码本身不创设身份。联合国说明排除灌溉、防洪工程和当地、长距离管道（un-cpc3-2025，印刷第279–280页）。LADWP实际供水系统具有明渠、覆盖输水廊道和隧洞，其中管道部分单独排除（ladwp-wip-2024，第10页）。

纳入完整声明的新建或完整重建渠段及整体基础、支撑墩、衬砌、顶盖、过渡段、接缝和控制设施。不得将高架、覆盖或地下工程缩小为最容易的衬层材料。排除灌溉、防洪、通航渠道、独立交付水坝与水库、公路铁路桥隧、水处理厂、管道构件及施工服务。整体输水隧洞仍属范围；无关交通、矿业隧道不属范围。混合用途或管道与非管道混合项目须先明确资产接口及分列工程量。施工数据集止于交付；后续输水、运行泵送、维护、更新及最终拆除是独立阶段，不虚构寿命。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.water-supply-aqueduct-and-nonpipeline-conduit-delivery |
| classification_refs | CPC 3.0 53231 |
| covered_products | 供水用途完整渡槽、明渠、槽渠、覆盖廊道和非管道地下输水实体及整体附属结构 |
| excluded_products | 灌溉防洪、通航渠道、管道、独立坝库、交通桥隧、处理厂、建材设备、施工服务 |
| representative_product | 一项有明确接口、实测几何与水力条件的完整验收输水工程 |
| production_route | 实际土方、土衬、混凝土、膜、砌筑、槽身架设或地下开挖衬砌；整体接缝控制；试验整改交付 |
| market_state | 现场安装并完成验收的土木实体；非水量输出 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在明确进出口及水力条件下提供供水输送通道，评价施工交付 |
| How much | 一项完整验收工程；声明实测桩号长度、断面宽高、坡度、渠底盖板支撑尺寸、实际输水能力及测试水头。它们限定同一工程，不是替代分母。 |
| How well | 按实际合同规格、结构衬砌与接缝配置、供水用途、渗漏及水力验收记录限定，不预设载荷、强度或批准 |
| How long or cycle | 一次实际施工至完整验收周期；不规定运行寿命，不等同某年输水服务 |
| reference_flow_link | `finished_conduit` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收交付的完整非管道供水渡槽或输水渠工程 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | 件 |
| 必需限定信息 | 场址资产编号；供水用途；工程接口与边界；实测长度断面坡度与体积；结构衬砌支撑盖板与接缝；水力能力及水头测试条件；组件清单；供货状态；开工与验收日期及证据；起始状态；阶段排除 |

“件”与公开单位组的Item(s)相同，表示一项完整配置工程；不得将不同几何或功能工程视为等效。必需限定信息须在数据包中声明，不完整交付不能冒充完整输出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | 物品数量 | 件 | 参考输出为同一完整验收工程1件；采用cp_delivery。全部清单及采集归一化基准为每声明的参考流。不假设每米或每项质量。 |
| actual_quantities | 所有清单行 | 质量；体积；能量；质量距离；物品数量 | kg; m3; MJ; kg*km; item | 保留每个已核身份的主属性和单位。质量称重，几何体积实测；面积、长度或体积转质量须同批状态下实测单位面积质量或密度。不得采用1000kg/m3作为默认密度。 逐交换匹配属性：质量/kg、体积/m3、能量/MJ、质量距离/kg*km；完整渠道交付物及按件核算的挖掘机制造份额采用物品数量/item。辅助物量记录不替代原生件数交换；设备寿命或总活动量未知时仍须审查。 |
| electricity_conversion | electricity_cn_lv | 净热值 | MJ | 电表kWh按1 kWh = 3.6 MJ转换；保留公开净热值属性，不改为质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 记录开工前场址、保留旧实体、进口接口及实际供货门端材料状态 |
| starting_condition_role | foreground_start |
| product_classification_scope | 完整供水非管道输水工程；分类仅作范围线索 |
| recursive_input_rule | 保留既有渠体为起始存量，非新产出；另购同类工程须独立上游边界，不递归重复本输出 |
| upstream_dataset_requirement | 另行核实并链接材料、设备、公用工程的路线、地域、属性及生产运输边界；供应门端数据不证明全部上游覆盖 |
| disclosure | 施工前景至验收，链接上游模块另报完整性；不是无条件全生命周期或完整cradle-to-gate结果 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| b_build | 纳入实际场地准备、挖填、支护、地基、衬砌、盖板、槽身架设、整体控制、养护、试验整改清理以及实际临时工程。按任务记录设备与公用工程一次，地下路线不得漏掉真实支护与出渣。 | usbr-construction; ladwp-wip-2024 |
| b_supplied | 区分供应构件混合物制造、运送和现场安装。现场实际拌合、预制、加工须另建真实原子投入；不得同时计混合物及已包含组分。非施工实体的上游材料生产不默认并入。 | usbr-construction; epa-washout-2012 |
| b_consumed_inputs | 对每项外供材料或总成投入，施工安装适用条件限定用途，不将投入限于成功安装量。各原生单位按可归属总收货+期初库存−经核实退回或转移−期末可复用库存计量；包括验收前撒漏、损坏、拒收后实际消耗及替换。经核实退回和可复用结存不计入消耗投入，但相关可归属搬运、运输或返工仍保留。安装验收量与废物分别核对，不抵消已消耗投入的制造负担。可复用临时资产仍按资产分摊规则计守恒的制造份额。 |  |
| b_stages | 后续运行输水泵送、维护更新及最终拆除排除；开工前实际旧设施拆除归场地准备。披露土地水文生态、噪声及交通扰动评价缺口，不宣称零影响；运营供水资源不能混为施工用水。 | ladwp-wip-2024; un-cpc3-2025 |
| b_complete_route | 条件行不是范围删减许可。实际其他聚合物、金属木槽、预应力、锚杆、钢拱架、爆破、现场拌合、涂层或控制设备须补原子行、原始工法、采集与身份核实后方可声称该项目完整。 | usbr-construction; usbr-canals-2017 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| earthworks | 场地准备、开挖与成形 | conditional | 实际清理、开挖、填筑、基础或旧障碍拆除 | foreground_process | 每声明的参考流 |
| earth_lining | 压实土衬砌 | conditional | 实际压实黏土衬砌 | foreground_process | 每声明的参考流 |
| concrete | 混凝土渠道、盖板与支撑施工 | conditional | 实际混凝土渠底、边墙、盖板、墩或基础 | foreground_process | 每声明的参考流 |
| membrane | 膜衬砌与锚固 | conditional | 实际土工膜系统 | foreground_process | 每声明的参考流 |
| masonry | 砌筑输水渠施工 | conditional | 实际砌筑路线 | foreground_process | 每声明的参考流 |
| flume | 槽身安装与高架渡槽架设 | conditional | 实际预制或钢渡槽及支撑 | foreground_process | 每声明的参考流 |
| underground | 非管道地下输水通道开挖与衬砌 | conditional | 实际输水隧洞或廊道；非交通隧道或管道 | foreground_process | 每声明的参考流 |
| joints_controls | 接缝与整体水力控制安装 | conditional | 实际接缝、止水或整体控制 | foreground_process | 每声明的参考流 |
| support | 机械作业、水控制与现场公用工程 | required | 全部实际施工任务；各交换按实际发生纳入 | foreground_process | 每声明的参考流 |
| assets | 可复用模板与施工设备制造归属 | conditional | 实际纳入的可复用资产；有记录的共同制造基准 | foreground_process | 每声明的参考流 |
| transport | 施工物流与废物运输 | conditional | 实际移动且未在供货或现场作业中另计 | foreground_process | 每声明的参考流 |
| handover | 试验、整改、清理与完整验收 | required | 全部工程至完整交付；整改投入归原任务 | reference_process | 每声明的参考流 |

所有条件工序按竣工结构与实际施工记录选择，不规定默认工艺。土方设备、压实机、吊装机、泵、混凝土振捣及隧洞掘进通风设备采用实际设备账，能水与排放集中在support按任务归属一次。试验、整改所耗材料归对应原工序。模板与设备制造归assets，运行耗用归support。

### 过程：场地准备、开挖与成形（`earthworks`）

实际清理、开挖、填筑、基础或旧障碍拆除。

#### 输入

##### 产品流

###### 用于堤渠填筑的选定未污染矿质土（`fill_soil`）

仅用于实际外购的合格填土；测量开挖、压实及含水状态。内部挖填转移属于内部流转，不重复记为外购投入。

- 选定流：用于堤渠填筑的选定未污染矿质土
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

#### 输出

##### 废物流

###### 剩余未污染开挖矿质土（`spoil_soil`）

仅记录实际作为废物转出的余土；记录检测、干湿基准和去向，与回用土分开。

- 选定流：剩余未污染开挖矿质土
- 流属性/单位：质量 / kg
- 数量规则：使用cp_waste采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`usbr-construction`

###### 剩余开挖岩石（`spoil_rock`）

实际岩石开挖或隧洞石渣作为废物转出时记录，不与土壤或钻进泥浆合并。

- 选定流：剩余开挖岩石
- 流属性/单位：质量 / kg
- 数量规则：使用cp_waste采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`usbr-construction`

### 过程：压实土衬砌（`earth_lining`）

实际压实黏土衬砌。

#### 输入

##### 产品流

###### 渠道衬砌用选定可压实黏土（`lining_clay`）

仅适用于实际压实黏土衬砌；记录矿物组成、含水率、取土来源及铺设几何，不预设黏土比例或渗漏削减量。

- 选定流：渠道衬砌用选定可压实黏土
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

#### 输出

### 过程：混凝土渠道、盖板与支撑施工（`concrete`）

实际混凝土渠底、边墙、盖板、墩或基础。

#### 输入

##### 产品流

###### 运抵渠道浇筑点的新拌混凝土（`fresh_concrete`）

用于实际渠底、边墙、盖板、墩或基础的新拌混凝土；用实测批次密度核对供货单与浇筑几何。供应混凝土不是完工渠道。实际现场拌合须按批次记录另建水泥、每种集料、水和外加剂投入，不再次计入外购混合料。

- 选定流：运抵渠道浇筑点的新拌混凝土
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

###### 钢筋，钢制建筑材料（`rebar`）

仅采用符合供货状态的实际低合金热轧钢筋，C≤0.2%，须有材质证明。无筋衬砌不强制设置钢筋。其他牌号或加工状态须另核身份；切断、弯曲和废钢归现场工序。

- 选定流：钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

###### 碎石，16/32粒级（`stone_drain`）

用于本工程排水或垫层实际供入的16/32粒级碎石；按b_consumed_inputs纳入可归属撒漏及验收前替换消耗，安装量另记。不能替代其他混凝土集料级配。

- 选定流：碎石，16/32粒级 `4f197bee-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

#### 输出

##### 废物流

###### 硬化废混凝土（`concrete_waste`）

实际硬化余料或不合格混凝土，与新拌退料、泥浆和钢筋分开；按废物转移记录，不自动给予回收效益。

- 选定流：硬化废混凝土
- 流属性/单位：质量 / kg
- 数量规则：使用cp_waste采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`epa-washout-2012`

###### 钢筋切割余料（`steel_offcut`）

仅记录实际钢筋余料；按转出凭据区分交易次生产品与废物，改变流类型须有已核身份依据。

- 选定流：钢筋切割余料
- 流属性/单位：质量 / kg
- 数量规则：使用cp_waste采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`usbr-construction`

### 过程：膜衬砌与锚固（`membrane`）

实际土工膜系统。

#### 输入

##### 产品流

###### 渠道用HDPE土工膜衬层（`hdpe_liner`）

仅实际HDPE衬层；记录厚度、密度或称重质量、焊缝、搭接和损耗。黏土、PVC及其他聚合物是不同路线，须采用各自流卡。

- 选定流：渠道用HDPE土工膜衬层
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

###### 聚丙烯土工织物（`pp_geotextile`）

仅用于安装衬层系统中实际规定的聚丙烯保护土工织物，采用实测单位面积质量及铺设、接收面积。

- 选定流：聚丙烯土工织物
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

#### 输出

### 过程：砌筑输水渠施工（`masonry`）

实际砌筑路线。

#### 输入

##### 产品流

###### 天然石材砌块（`stone_block`）

仅实际砌筑输水渠或防护工程；记录石种、尺寸、供货质量与安装部位。

- 选定流：天然石材砌块
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

###### 新拌硅酸盐水泥砌筑砂浆（`mortar`）

仅实际供应的水泥基砂浆；记录配比与来源。现场拌合砂浆须分列实测水泥、砂和水，不能与供应砂浆重复计入。

- 选定流：新拌硅酸盐水泥砌筑砂浆
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

#### 输出

### 过程：槽身安装与高架渡槽架设（`flume`）

实际预制或钢渡槽及支撑。

#### 输入

##### 产品流

###### 预制混凝土输水槽（`precast_trough`）

用于本工程实际供入且配置和质量经实测的槽身构件；按b_consumed_inputs纳入验收前损坏或消耗的可归属构件，安装验收量另记。供应商界定的内嵌钢筋只计一次，不能采用通用墙板代替。

- 选定流：预制混凝土输水槽
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

###### 成形钢制输水槽（`steel_trough`）

仅实际钢渡槽路线；记录供货表面处理、安装、支撑、接缝及吊装工序，原钢材不等于成形槽体。

- 选定流：成形钢制输水槽
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

#### 输出

### 过程：非管道地下输水通道开挖与衬砌（`underground`）

实际输水隧洞或廊道；非交通隧道或管道。

#### 输入

##### 产品流

###### 新拌喷射混凝土（`shotcrete`）

仅非管道输水隧洞实际喷射混凝土支护或衬砌；按本工程原始工法记录供货状态、回弹、支护体系和喷层厚度，不套用其他项目洞体几何。

- 选定流：新拌喷射混凝土
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

###### 预制混凝土隧洞衬砌管片（`lining_segment`）

仅实际分块结构衬砌，不作为输水管道；记录环形几何、内嵌钢筋、密封垫及供应商范围，避免已包含构件重复。

- 选定流：预制混凝土隧洞衬砌管片
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

###### 隧洞水泥基回填灌浆料（`cement_grout`）

仅实际供应的灌浆料；记录实测组成和注浆资料。现场配制须分列各组分、外加剂、拌合及泵送；不预设压力、配比或注浆体积。

- 选定流：隧洞水泥基回填灌浆料
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

#### 输出

##### 废物流

###### 废水基膨润土钻进泥浆（`bentonite_slurry`）

仅经核实的膨润土泥浆隧洞或钻进方法实际产生时记录；记录固含量、添加物、污染及处理。实际爆破、锚杆、钢拱架或其他支护须补齐原子行后才能声称项目完整。

- 选定流：废水基膨润土钻进泥浆
- 流属性/单位：质量 / kg
- 数量规则：使用cp_waste采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：`usbr-construction`

### 过程：接缝与整体水力控制安装（`joints_controls`）

实际接缝、止水或整体控制。

#### 输入

##### 产品流

###### EPDM橡胶止水带（`epdm_waterstop`）

仅实际接缝处安装的成品EPDM止水带；原生橡胶不是成品止水带。其他接缝材料须另核身份。

- 选定流：EPDM橡胶止水带
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

###### 成形钢制渠道控制闸门（`steel_gate`）

仅实际整体渠道控制闸门，记录供货尺寸、涂层和启闭机范围。未打包的实际安装执行器和传感器须分列核实构件。独立水坝不属本输出。

- 选定流：成形钢制渠道控制闸门
- 流属性/单位：质量 / kg
- 数量规则：使用cp_material采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`usbr-construction`

#### 输出

### 过程：机械作业、水控制与现场公用工程（`support`）

全部实际施工任务；各交换按实际发生纳入。

#### 输入

##### 产品流

###### 施工设备用柴油（`diesel`）

公开柴油身份未特指牌号、配方、密度、热值、炼制及供应地域；须按真实来源声明，不将其当燃烧数据集。用于有记录的挖掘机、压路机、泵、起重机或其他机械的实际消耗；油料收发存与质量或实测密度核对。燃烧排放另记，上游柴油数据集不得重复包含本次燃烧。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：使用cp_utilities采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`usbr-construction`

###### 交流电（`electricity_cn_lv`）

仅中国实际用户端低于1kV的电网平均供电，须有场址与电压证据。保留公开净热值参考属性；电表千瓦时用1 kWh = 3.6 MJ换算。其他地域、电压或发电方式须采用其他身份，不能为了匹配本行把项目限定为中国。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 / MJ
- 数量规则：使用cp_utilities采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`usbr-construction`

###### 供应施工现场的交流电（`electricity_other`）

用于中国低压行未覆盖的实际供电；记录地域、电压、供货边界及后续核实公开身份的主属性，不同时重复计入。

- 选定流：供应施工现场的交流电
- 流属性/单位：能量 / MJ
- 数量规则：使用cp_utilities采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`usbr-construction`

###### 供应施工的自来水（`supplied_water`）

仅实际公用供水用于养护、清洗、抑尘或试充水；逐任务分表，排除已在外购混合物中的水。香港处理厂门端水不是通用现场身份，不预设密度。

- 选定流：供应施工的自来水
- 流属性/单位：体积 / m3
- 数量规则：使用cp_water采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`usbr-construction`

##### 基本流

###### 施工直接取用的河水（`river_withdrawal`）

公开河水流属于水中可再生物质资源，主属性为体积，非外购水或废水；按原件要求在单元过程位置保留真实取水国家以适用国家特定表征。仅实际施工或试验直接取河水，不包括未来输送水量；核对流域、计量取水、许可资料及实际返还。外购水与资源取水不得重复。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 / m3
- 数量规则：使用cp_water采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`usbr-construction`

#### 输出

##### 废物流

###### 含矿物悬浮固体的施工降排水液（`drainage_liquid`）

实际基坑或隧洞降排水送处理时记录；记录溶解物、固体及去向。属于液体废物转移，不自动作为排入淡水的基础流；纯粹改道河流不是消耗性取水。

- 选定流：含矿物悬浮固体的施工降排水液
- 流属性/单位：体积 / m3
- 数量规则：使用cp_water采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`usbr-construction`

###### 含水泥基悬浮固体的混凝土洗槽废水（`washout_water`）

实际收集并送处理的洗槽废水，与回收硬化混凝土分开。不预设pH、金属浓度或必然外排。场外搅拌筒清洗归实际操作方边界。

- 选定流：含水泥基悬浮固体的混凝土洗槽废水
- 流属性/单位：体积 / m3
- 数量规则：使用cp_water采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`epa-washout-2012`

##### 基本流

###### 二氧化碳（化石源）（`co2_fossil`）

仅有依据的化石燃料燃烧即时空气排放，空气子介质未特指；有更精细地点时须记录。采用实测或有出处的设备、燃料特定因子与氧化基准。生物碳及土地利用变化分开。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：使用cp_emissions采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`usbr-construction`

###### 一氧化氮（`no_air`）

仅单独实测或有依据的一氧化氮即时空气排放，空气子介质未特指。以NO2计的总NOx因子不能在无核实物种拆分时填入本NO质量行。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：使用cp_emissions采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`usbr-construction`

###### 排入空气的二氧化氮（`no2_air`）

仅实际设备或场址单独实测，或按有来源的分物种因子计算的分子NO2（CAS 10102-44-0），即时排入未指定子介质的空气。以NO2当量报告的聚合NOx不等于分子NO2实测。一氧化氮、氧化亚氮、氮、亚硝酸盐和N2O4属于不同交换；公开N2O4同义词不改变该分子身份。其他介质或长期排放须另核身份。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：使用cp_emissions采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`usbr-construction`

###### 颗粒物 (PM10)（`pm10_air`）

仅有依据的土方搬运或尾气向未特指空气排放的实际PM10质量；记录实测或模型的源区分和控制效率。不把总尘或PM2.5质量直接复制为PM10，不假设每个任务都产尘。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：使用cp_emissions采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`usbr-construction`

###### 排入淡水地表水体的水（`water_release`）

仅处理或试排后实际直接排入淡水的水，记录许可或披露、接收水体及污染物浓度。每种已量化化学物质须分列基础流，不用通用废水身份或无依据污染物。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：使用cp_water采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`usbr-construction`

### 过程：可复用模板与施工设备制造归属（`assets`）

实际纳入的可复用资产；有记录的共同制造基准。

#### 输入

##### 产品流

###### 胶合板（`plywood`）

仅实际单板胶合压制的胶合板模板；测量板体积并记录跨全部项目及重复使用的制造负担份额，同批物理板材累计份额不超过一。不向每项目重置完整制造负担。

- 选定流：胶合板 `8b239d58-5fc2-40a5-8003-33f4082bc995`
- 流属性/单位：体积 / m3
- 数量规则：使用cp_assets采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`usbr-construction`

###### 完整液压挖掘机制造负担份额（`excavator_share`）

仅实际可识别挖掘机按有依据的活动或寿命基准归属的制造负担，跨项目累计份额守恒。运行柴油另行计量。总活动或寿命未知时保留审查缺口，不采用默认寿命。纳入实际起重机、TBM或其他设备时须各设流卡。

- 选定流：完整液压挖掘机制造负担份额
- 流属性/单位：物品数量 / 件
- 数量规则：使用cp_assets采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`usbr-construction`

#### 输出

### 过程：施工物流与废物运输（`transport`）

实际移动且未在供货或现场作业中另计。

#### 输入

##### 产品流

###### 施工投入与废物的公路货运（`road_freight`）

按行程和物质记录实际载质量、路线距离；有证据才纳入可归属空返。核查上游供货是否已含运送；专用现场运输柴油不能再重复作为货运服务。

- 选定流：施工投入与废物的公路货运
- 流属性/单位：质量*距离 / kg*km
- 数量规则：使用cp_transport采集并归属该完整工程的实际交换数量；保留任务、批次、原物理单位及适用条件。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`
- 来源：`usbr-construction`

#### 输出

### 过程：试验、整改、清理与完整验收（`handover`）

全部工程至完整交付；整改投入归原任务。

#### 输入

#### 输出

##### 产品流

###### 验收交付的完整非管道供水渡槽或输水渠工程（`finished_conduit`）

仅记录完成实际验收检查的同一完整配置工程实体；须记录实测几何、进出口、结构体系、水力条件及排除的相邻资产。

- 选定流：验收交付的完整非管道供水渡槽或输水渠工程
- 流属性/单位：物品数量 / 件
- 数量规则：1 件
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`un-cpc3-2025`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| a_task | 优先逐工程逐任务分表和分包实物账以避免分配。不可避免的共享公用工程仅按实测设备小时、泵送或其他有物理因果依据活动分配；列出全部受益工程与份额和，未知关系须审查，不能以造价作默认。 | |
| a_asset | 同一物理设备或复用构件的制造归属份额跨项目、期间与重复使用累计不超过一。按有依据的总实际活动和本工程活动计算无量纲份额，乘实测物理数量、质量或体积。未知寿命或累计活动须显式审查；运行负担按实际耗用另记。 | |
| a_waste | 开挖土岩回用属于内部转移，废物按实际去向；废钢混凝土不自动给予替代效益。交易共产品须证明其状态与独立用途，单独声明所选分配或系统扩展方法及因子出处，不以处置费制造产出。 | epa-washout-2012 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | all applicable construction processes | material | delivery_and_placement | 批次；材料状态；来源门端；验收接收量；退货；安装几何；换算所需实测密度；废物 ；期初期末可复用库存；经核实转移；验收前损坏拒收替换；分别记录消耗与安装验收量 |称量接收与退回量，供货单与实测安装尺寸核对；仅采用同状态同批次实际检测密度。记录供应商内含构件范围。 汇总细节：按每声明的参考流汇总可归属实物交换  按b_consumed_inputs采用逐行原生单位：可归属总收货+期初库存−经核实退回或转移−期末可复用库存；纳入实际消耗的损失与替换，安装验收及废物分别核对。 | kg | 每任务、批次、行程或验收事件 | 实际开工至完整验收，包括整改 | 同一明确工程边界，分包亦纳入 | 每声明的参考流 | 校准凭据、原始账、试验报告、版本和交接记录 |
| cp_utilities | support | energy | meter_and_fuel_ledger | 设备编号；任务；小时；收货；期初期末库存；燃料密度；电压；供电地域；表读数 |读取经校准任务表计与油料账；核对分包记录；保留实际燃料属性与计量能量单位。 汇总细节：按每声明的参考流汇总可归属使用量，各任务只计一次 | kg; MJ | 每任务、批次、行程或验收事件 | 实际开工至完整验收，包括整改 | 同一明确工程边界，分包亦纳入 | 每声明的参考流 | 校准凭据、原始账、试验报告、版本和交接记录 |
| cp_water | support | water | meter_and_transfer | 来源；流域；供应或取水体积；养护试验使用；降排水；洗槽；循环；受体；浓度；排水许可 |分别计量供水、河水取用、降排水、洗槽及实际外排；内部回用记为内部转移。分开处理废物转移与实测直接环境排放。 汇总细节：按每声明的参考流汇总各独立水交换；不得静默净额抵销取水与返还 | m3 | 每任务、批次、行程或验收事件 | 实际开工至完整验收，包括整改 | 同一明确工程边界，分包亦纳入 | 每声明的参考流 | 校准凭据、原始账、试验报告、版本和交接记录 |
| cp_waste | all applicable construction processes | waste | weighbridge_transfer | row_id；任务；组成；干湿状态；含水率；质量；接收方；处理或回用证据 |使用经校准秤或地磅转移记录；检测组成与含水率并核对现场物料平衡；不假设回收。 汇总细节：按每声明的参考流汇总每项废物流 | kg | 每任务、批次、行程或验收事件 | 实际开工至完整验收，包括整改 | 同一明确工程边界，分包亦纳入 | 每声明的参考流 | 校准凭据、原始账、试验报告、版本和交接记录 |
| cp_emissions | support | elementary_emission | measurement_or_supported_factor | 物质；CAS；源设备或任务；空气子介质；样本或因子；燃料活动；化学基准；控制；不确定性 |实测指定物种，或保留公开原始设备、燃料特定因子及其原条件和活动记录。缺少因子或物种拆分为评价缺口，不等于零。 汇总细节：按每声明的参考流汇总有依据的各物种排放 | kg | 每任务、批次、行程或验收事件 | 实际开工至完整验收，包括整改 | 同一明确工程边界，分包亦纳入 | 每声明的参考流 | 校准凭据、原始账、试验报告、版本和交接记录 |
| cp_assets | assets | reusable_asset | asset_share_ledger | 物理资产编号；配置；实测数量体积质量；制造数据集；有依据累计活动；项目活动；既往份额；剩余份额 |实测板材或识别实际设备并建立跨项目账；须有寿命或活动分母与归属证据。分母未知时须先审查，不能产出资产负担结果。 汇总细节：按每声明的参考流归属制造份额；同一资产累计份额≤1 | item; m3; kg | 每任务、批次、行程或验收事件 | 实际开工至完整验收，包括整改 | 同一明确工程边界，分包亦纳入 | 每声明的参考流 | 校准凭据、原始账、试验报告、版本和交接记录 |
| cp_transport | transport | transport | trip_ledger | 行程；物质；载质量；实际路线千米；供货是否含运输；空返归属 |核对地磅、发货及路线账；分开各运输段，检查供货数据集避免重复运送。 汇总细节：按每声明的参考流汇总可归属运输活动 | kg*km | 每任务、批次、行程或验收事件 | 实际开工至完整验收，包括整改 | 同一明确工程边界，分包亦纳入 | 每声明的参考流 | 校准凭据、原始账、试验报告、版本和交接记录 |
| cp_delivery | handover | reference_product | survey_and_acceptance | 资产场址编号；起止桩号；进出口；实测长度；断面；坡度；底板盖板支撑尺寸；流量与水头条件；安装控制；验收试验；不符合项；日期 |竣工测量和完整资产清单与实际尺寸、结构、接缝渗漏及水力验收证据、业主交接核对；不假设批准。 汇总细节：每声明的参考流为一项完整验收配置工程 | item | 每任务、批次、行程或验收事件 | 实际开工至完整验收，包括整改 | 同一明确工程边界，分包亦纳入 | 每声明的参考流 | 校准凭据、原始账、试验报告、版本和交接记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| inventory_aggregation | 所有清单行 | 同一完整工程按任务汇总实际可归属交换，保持每声明的参考流；收货、退货、余料和安装量分别核对，不将内部转移当外部交换。  对外供投入应用b_consumed_inputs，包括验收前实际消耗的损失与替换；不得把安装验收量当作投入量。 | cp_material; cp_utilities; cp_water; cp_waste; cp_delivery | 同基准的逐行数量 | usbr-construction |
| physical_conversion | 所有清单行 | 实测体积×同批状态实测密度=质量；实测面积×同批单位面积质量=质量。保留源值、状态、换算因子及不确定性，不用供应记录的次要筛查比值作通用密度。 | measured volume/area; tested density/areal mass; cp_material | 原属性下的实际数量 | |
| energy_meter | electricity_cn_lv | 电表kWh × 3.6 = MJ，计入同工程用户端消耗一次。 | meter kWh; cp_utilities | MJ |  |
| transport_activity | road_freight | 各可归属行程载质量kg × 实际距离km求和；原件若用t*km则1 t*km = 1000 kg*km。 | trip mass; km; cp_transport | kg*km |  |
| asset_attribution | plywood; excavator_share | 制造等效物理量=实测同配置物理量×无量纲本工程活动份额；全部期间项目累计份额≤1，保存剩余余额；分母无依据不能计算。 | physical quantity; project activity; supported total activity; prior shares; cp_assets | 该工程制造份额，原物理单位 | |
| emission_evidence | co2_fossil; no_air; no2_air; pm10_air | 实测指定物种质量，或实际匹配活动×有出处的物种因子；保留燃料、技术、控制、化学基准及介质条件。聚合NOx不自动拆分；缺口不是零。 | measurement or primary factor; activity; cp_emissions | kg |  |
| water_balance | supplied_water; river_withdrawal; drainage_liquid; washout_water; water_release | 分别核对供应、直接取水、含水产品、循环、废水移交和实测外排；降排水是独立进入及转出的地下水，不强行等同施工取水。浓度×相符液体量只用于已核物种且单位一致。 | meters; samples; receivers; cp_water | 分列水交换及已核物种量 | epa-washout-2012 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_configuration | finished_conduit | 同一资产接口、实测几何、结构与水力条件，明确测试及不符合项。不能仅凭长度判定不同项目等效。 | cp_delivery; ladwp-wip-2024 |
| dq_sources | 所有清单行 | 使用实际工程批次、全周期、全部分包记录。材料牌号、衬层、供货状态、地区、电压、介质和公开属性一致。 | cp_material; cp_utilities; cp_water |
| dq_completeness | 所有工序 | 完整工程量表与工序、逐行清单、临时工程及废物对账。缺失工序、范围、UUID、因子与无代表性样本须显式披露，不能当零。 | cp_delivery; cp_waste |
| dq_ranges | 所有数量 | 不设通用配比、能耗、损耗、寿命、几何或每项质量范围。实测因子与不确定性由本工程证据提供；未来跨项目基准须独立且边界相容证据。 | cp_material; cp_delivery |
| dq_environment | support | 逐一确认直接排放物质、空气子介质与排水受体；未覆盖噪声、生态、土地水文影响须披露，不能虚构为质量流。 | cp_emissions; cp_water |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| v_reference | 拒绝以混合建材、施工服务、部分衬层或未验收工序替代同一完整参考工程。核对1件、实测几何水力条件与finished_conduit一致；缺少限定不构成合格数据包。 | un-cpc3-2025; ladwp-wip-2024 |
| v_route | 按竣工工法核对所有必要工序及适用条件；现场实际制造混合物、爆破或特殊支护缺少分列交换时，不得声称完整。混合用途先核类别与接口。 | usbr-construction |
| v_identity | 每个UUID核对公开物质状态、路线、地域、介质、参考属性与单位。NO、NO2、N2O不得互换，废水移交不等于资源水或环境水排放；无匹配保留具体空身份及审查。 | epa-washout-2012 |
| v_balance | 工程量、收发存、废物与水账、能量、运输边界及资产累计份额核对；双计、单位不符、默认密度寿命或无依据因子须修正。缺少实测数据的候选方法通过结构检查不证明项目性能或科学批准。 | usbr-canals-2017; usbr-construction |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 用作边界配置匹配的供水输水工程施工模块，保留原限定 |
| allowed_use | 相同供水功能、结构几何、水力条件与施工阶段内的建模；实际链接上游模块须声明完整性 |
| excluded_use | 仅按长度比较不同容量或配置工程；运营水供应、灌溉防洪、管道、全部生命周期或未支持寿命比较 |
| required_metadata | 全部参考限定、实测工程量、工法、供货接口、任务分包、测试交付记录、供电供水条件与阶段边界 |
| required_quality_disclosure | 缺失交换身份、工序或因子、上游完整性、样本代表性、不确定性、共享分配与资产份额、范围警告和未测环境影响 |
| update_trigger | 竣工配置、供水条件、路线、供货地域门端、工法、验收、排放因子或边界变化 |

## 11. 数据源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed pp. 279–280. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 供水非管道实体与相邻分类边界；非制造或工程量因子 |
| ladwp-wip-2024 | official_guidance | LADWP, Water Infrastructure Plan 2024-25, p. 10. https://www.ladwp.com/sites/default/files/2025-01/2024_BOOKLETS_WIP_Digital%20Final.pdf | 实际供水系统的明渠、覆盖输水渠与隧洞及独立运维；只作配置与阶段证据，不复制里程、寿命或维护计划 |
| usbr-construction | official_guidance | USBR, Crow Irrigation Project – Construction Activity Descriptions, Structures (Flumes; Replacing/Rehabilitating) and Canals (Cleaning/Shaping; Lining). https://www.usbr.gov/gp/nepa/cip/activity_descriptions.html | 仅迁移土方、成形、压实、混凝土槽和高架支撑、膜衬工序。原项目灌溉用途不纳入本类别，无成本、尺寸、排放或设备率默认 |
| usbr-canals-2017 | official_guidance | USBR, Canal Operation and Maintenance: Concrete Lining and Structures, November 2017, printed p. 3 (construction/curing), p. 10 (support/voids), Section 5.8 Shotcrete (printed p. 22). https://www.usbr.gov/assetmanagement/docs/Canal_Concrete.pdf | 混凝土铺筑、养护及支撑状态；只采用定性物理工序，灌溉运维资料不构成供水全寿命，历史温度强度及配比不作为本项目强约束 |
| epa-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice: Concrete Washout, EPA 833-F-11-006, February 2012, pp. 1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 历史定性洗槽液体与固体、收集及转移边界；不复制pH、金属浓度或现行合规批准 |
