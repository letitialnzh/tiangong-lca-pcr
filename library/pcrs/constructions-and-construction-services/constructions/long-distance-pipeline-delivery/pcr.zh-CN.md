---
pcr_id: pcr.constructions-and-construction-services.constructions.long-distance-pipeline-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 长距离管线施工交付

## 1. 范围与适用性

本 PCR 规范按地理边界定义、输送石油产品、气、水或其他产品的实体长距离管线的施工与验收交付，覆盖地上、地下及海底路线，并纳入泵站等类似相关结构。城市燃气或供水配水干线不适用（un-cpc3-2025，印刷及 PDF 第 280 页）。分类坐标只支持范围判断，不构成身份创建理由。本对象是已安装土木实体，不是建材包、管材制造、施工服务或输送运营。

采用业主定义的完整交付系统，或接口及与干线关系明确的独立验收相关站场。单独承包区段只有在接口可独立试验且实际验收、所有附属工程完整时才适用；不得把完整项目缩为简单管材或删去站场与穿越。代表性钢管路线不排除水、其他管材、非开挖及海底适用性。真实路线涉及其他耗材、涂层、管件、支撑钢、海底锚固、湿开挖或站场辅助设施时，须补充原子交换与项目证据，方可宣称完整。

前景始于有记录的施工前场地、保留资产状态及真实供货接口，止于安装完成、整改、验收试验、交付所含恢复及实体交付。供应方制造及其运输是单独链接的上游模块；日常运营、输送产品、交付后泵送或压缩用能、维护、更新及最终拆除属于单独阶段。本施工周期不预设寿命、每公里管质量、能力、耗油率、损耗率、配比或批准。FERC 2013/2017 文件用于明确年代的燃气项目施工与数据实践，不代表全球现行监管合规；PHMSA 试验说明针对气和危险液体，水及其他产品采用真实验收规范。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.long-distance-pipeline-delivery |
| classification_refs | CPC 3.0 53241，仅作范围背景，不创建已接受映射 |
| covered_products | 石油、气、水或其他产品用完整验收长距离地上、地下及海底管线系统；明确识别的相关泵站、压气站及阀室结构 |
| excluded_products | 城市及当地配水配气干线；单独交付水处理厂、非管线渡槽及通航工程；已制造管材与构件；施工服务；运营输送服务 |
| representative_product | 一个配置完整的验收管线交付单元，具备线路实测及声明的附属站场与穿越接口 |
| production_route | 真实物流与场地准备、外供管材连接防护、明挖或非开挖或海底安装、适用站场土建和设备安装、压力与状态处理试验、恢复及交付 |
| market_state | 声明场地已安装、检查且实际验收的实体工程，无日常输送产品输出 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付实际接口之间完整安装的管线通道及声明的相关结构，在记录的验收条件下具备声明的输送功能 |
| How much | 一个完整验收交付单元。含线路的单元实测真实安装中心线长度、每种内径壁厚及断面、埋深支撑海底几何与穿越；每个纳入站场实测其布局、基础及设备配置。真实独立的站场单独交付声明干线接口及真实站场几何工况；不纳入的线路或站场属性以范围证据明确标记 not_applicable，不杜撰。声明真实水力流量与压力条件。这些限定同一实体，不作为其他分母。 |
| How well | 真实材料牌号、内衬涂层接头系统、设计与运行介质限定、试验介质、压力温度、保压泄漏准则及对应地域规范的试验检查记录，不作通用合规结论 |
| How long or cycle | 一个有记录的施工至验收周期，包含真实返工与复验；后续服役时间不属于本参考，生命周期扩展时须另有证据 |
| reference_flow_link | `finished_pipeline` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收完整长距离管线交付单元 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | 件 |
| 必需限定信息 | 资产与场址编号及国家；输送产品；起止接口及相关站场范围；实体类型及各限定的适用性；适用竣工长度、内径、壁厚及几何测量；管材、牌号、内衬、涂层、接头状态；地上地下海底及穿越工法；真实能力及压力温度条件；支撑、埋设与防护；安装设备及站场配置；施工前及保留状态；供应方接口；试验、检查、返修、恢复记录及验收日期；边界与完整性排除 |

“件”是公开 Item(s) 的显示别名，计数一个配置完整的土木交付单元，不意味着不同长度、能力或配置等价。不得用造价、输送吨数或已制造管材质量替代本参考。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | 物品数量 | 件 | 输出是同一完整验收工程的 1 件，采用 cp_delivery 核验。所有清单及采集汇总均按每声明的参考流；不杜撰每项目或每公里质量。 |
| measured_physical_basis | 所有清单行 | 质量；体积；长度；净热值；物品数量 | kg；m3；m；MJ；item | 保留每项直读参考属性与单位组。称量同批净质量，在记录温度压力下计量体积，测量电缆与管材长度及几何。体积或长度转质量须有精确状态的独立实测密度或线质量，不改写公开属性为质量，也不采用默认密度。 reference_count及cp_delivery下的一件完整验收管线实体采用物品数量/item。所列属性单位分别适用于对应交换；辅助物量不替代参考输出件数。 |
| electricity_units | cn_lv_power; cn_mv_power | 净热值 | MJ | 公开电力保留净热值及能量单位组。按定义恒等式 1 kWh = 3.6 MJ 转换电表读数，并声明真实用户端电压接口。 |
| asset_share_basis | timber_mat; crawler_excavator; pipelay_vessel | 质量 | kg | 在 cp_assets 采集真实同配置资产净质量及有独立依据的无量纲制造份额。寿命或累计活动未知须明确审查，不得每项目重置完整制造负担。 |

| 属性 | UUID | 单位组 | 参考单位 |
| --- | --- | --- | --- |
| 质量 | 93a60a56-a3c8-11da-a746-0800200b9a66 | 93a60a57-a4c8-11da-a746-0800200c9a66 | kg |
| 体积 | 93a60a56-a3c8-22da-a746-0800200c9a66 | 93a60a57-a3c8-12da-a746-0800200c9a66 | m3 |
| 净热值 | 93a60a56-a3c8-11da-a746-0800200c9a66 | 93a60a57-a3c8-11da-a746-0800200c9a66 | MJ |
| 长度 | 838aaa23-0117-11db-92e3-0800200c9a66 | 838aaa22-0117-11db-92e3-0800200c9a66 | m |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 施工前有记录的场地、既有保留管线与站场及接口，以及真实供应方门口材料总成交付状态 |
| starting_condition_role | foreground_start |
| product_classification_scope | 完整长距离管线实体交付及明确相关结构，排除当地配水配气 |
| recursive_input_rule | 保留管线站场是初始存量，不是新参考输出。外购同类别验收工程只在其自身交付边界链接一次，不递归重建为现场管材制造。 |
| upstream_dataset_requirement | 核实供货产品状态、路线地域时期、主属性、运输接口与模块覆盖，分别链接材料、设备、公用工程及实际废物管理数据，不自动宣称完整上游覆盖。 |
| disclosure | 前景施工至实际验收，逐项披露链接的上游模块与缺口，不由施工核算宣称完整 cradle-to-gate 或全寿命覆盖。 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| b_complete_delivery | 纳入真实进场、线路与作业带准备、表土分离、沟槽或支撑、收管布管弯管、连接与无损检测、适用涂层修补、下沟或铺设锚固、回填、站场土建及设备安装、试验复验、连头、交付要求的恢复与清场。共享公用工程及排放记录按任务标记且只计一次。 | ferc-construction-2017; ferc-upland-2013; saipem-subsea |
| b_routes | 从真实设计与竣工记录确定明挖、定向钻、隧道、地上支撑、海底及站场要求。纳入真实水控制、钻浆管理、铺管与辅助船、开沟防护及登陆段。缺失材料或过程须先补充原子行才能提供完整项目数据；条件性行不能删去实际范围。 | ferc-wetland-2013; saipem-subsea; un-cpc3-2025 |
| b_supplied_state | 外供管材、涂层及总成制造与现场连接防护运输安装分开。供应方厂内试验在上游，真实施工试验在前景。现场加工拌合单列投入过程，不重复内含钢、混凝土、水或涂层成分。 | ferc-construction-2017; nwpipe-steel-water-2019; phmsa-hydrotest |
| b_consumed_inputs | 对每项外供材料或总成投入，施工安装适用条件限定用途，不将投入限于成功安装量。各原生单位按可归属总收货+期初库存−经核实退回或转移−期末可复用库存计量；包括验收前撒漏、损坏、拒收后实际消耗及替换。经核实退回和可复用结存不计入消耗投入，但相关可归属搬运、运输或返工仍保留。安装验收量与废物分别核对，不抵消已消耗投入的制造负担。可复用临时资产仍按资产分摊规则计守恒的制造份额。 |  |
| b_stages | 纳入施工实际需要的既有障碍与临建拆除，不假称是未来最终拆除。交付后输送运营、日常泵送压缩、维护更新及最终拆除不纳入，须以真实活动、时间及去向证据另行扩展。 | ferc-construction-2017; phmsa-hydrotest |
| b_environment | 直接水资源输入、外购技术圈水、送去处理废水及基本流排放是不同接口。仅在具体物质介质和真实发生有证据时计排放。噪声、振动、土地生态、水体扰动与降排水是需调查的影响背景，缺少适用定量流是明确覆盖缺口，不是零影响。 | ferc-construction-2017; ferc-wetland-2013; ferc-upland-2013 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| logistics | 施工物流 | required | 所有未由已核实供应数据覆盖的真实材料、设备及废物运输 | foreground_process | 每声明的参考流 |
| earthworks | 线路准备、开挖与垫层 | conditional | 实际地上或地下场地准备、明挖、支撑或场地拆除 | foreground_process | 每声明的参考流 |
| pipe_installation | 收管、连接、防护与安装 | conditional | 声明交付包含管线区段，实施真实焊接、熔接或密封圈路线 | foreground_process | 每声明的参考流 |
| crossings | 非开挖与水体穿越 | conditional | 实际定向钻、顶钻、隧道或水体穿越及其记录工法 | foreground_process | 每声明的参考流 |
| offshore | 海底铺管与防护 | conditional | 实际海底路线，记录 S/J/卷管法、辅助船、埋设防护及登陆段 | foreground_process | 每声明的参考流 |
| station | 相关泵站、压气站与阀室施工 | conditional | 声明附属站场或独立验收相关站场，按实际土建、设备、控制范围 | foreground_process | 每声明的参考流 |
| commissioning | 压力试验、状态处理与连头 | required | 所有真实验收试验、清理、返修复验与连头，具体水或气介质条件纳入 | foreground_process | 每声明的参考流 |
| restoration | 回填、恢复与清场 | conditional | 真实施工扰动、临建拆除及交付要求的恢复 | foreground_process | 每声明的参考流 |
| assets | 重复使用施工资产制造归属 | conditional | 真实纳入且制造份额有依据并守恒的重复使用资产 | foreground_process | 每声明的参考流 |
| site_support | 分任务设备运行、用水及现场排放 | required | 所有纳入任务，每项交换须真实发生且身份适用 | foreground_process | 每声明的参考流 |
| handover | 最终检查与完整交付 | required | 所有声明实体工程与验收接口 | reference_process | 每声明的参考流 |

每种材料只在真实路线适用时纳入。设备任务台账覆盖挖掘、起重、弯管、焊接、泵送、试验、钻进、铺管船定位及站场施工。site_support 按任务归属公用工程与排放，不重复同一量；assets 只计有依据的制造份额，运行耗用分开。其他实际添加剂、燃料、涂料及废物须先补精确行。

### 过程：施工物流（`logistics`）

所有未由已核实供应数据覆盖的真实材料、设备及废物运输。

#### 输入

##### 产品流

###### 柴油（`transport_diesel`）

仅纳入单独记录的公路运输与进场实际燃用柴油。通用燃料身份未限定牌号、密度、热值、炼制路线与供应方，必须声明真实供应方及成分。记录真实距离、载荷、空返与耗油；不再叠加包含同一燃料的运输服务。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_logistics`
- 来源：`ferc-construction-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：线路准备、开挖与垫层（`earthworks`）

实际地上或地下场地准备、明挖、支撑或场地拆除。

#### 输入

##### 产品流

###### 管线垫层用级配天然砂（`bedding_sand`）

仅用于实际外购天然砂垫层，记录级配、含水状态、污染状态与供应方边界。回用开挖砂是可追踪的内部转移，不另计为外购砂。

- 选定流：管线垫层用级配天然砂
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 运出场外的未污染开挖矿质底土（`mineral_spoil`）

仅记录扣除场内回用后进入有记录场外管理的分离矿质底土。排除表土、植被、混凝土与污染土；实际存在时另立原子行。废物处理按真实去向另行链接。

- 选定流：运出场外的未污染开挖矿质底土
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ferc-upland-2013`

##### 基本流

### 过程：收管、连接、防护与安装（`pipe_installation`）

声明交付包含管线区段，实施真实焊接、熔接或密封圈路线。

#### 输入

##### 产品流

###### 用于石油或天然气管道的钢制焊接管材（`oilgas_welded_pipe`）

仅用于匹配公开工厂门口身份的实际已制造石油或天然气焊接钢管，记录钢级、管径、壁厚、长度以及供货涂层与内衬。本 UUID 不代表水管、无缝管或已安装管线。管厂制造与厂内水压试验留在上游。

- 选定流：用于石油或天然气管道的钢制焊接管材 `e505f1de-c307-4319-a6b6-371b34e7b1ed`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

###### 已制造的焊接钢制输水管（`water_steel_pipe`）

仅用于真实输水钢管，记录实际工厂内衬、涂层及接头加工状态，不能以限定油气用途的身份替代。

- 选定流：已制造的焊接钢制输水管
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`nwpipe-steel-water-2019`

###### 已制造的无缝钢制输送管（`seamless_pipe`）

仅用于真实无缝输送管，保留热加工或冷加工路线、钢级、尺寸与交付防护。

- 选定流：已制造的无缝钢制输送管
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

###### 已制造的聚乙烯压力管（`pe_pressure_pipe`）

仅用于实际聚乙烯压力管，记录树脂标识、压力等级、SDR与尺寸、适用时的饮用水要求及项目熔接方法，不预设 PE 牌号。

- 选定流：已制造的聚乙烯压力管
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`un-cpc3-2025`

###### 已制造的球墨铸铁压力管（`ductile_pressure_pipe`）

仅用于实际球墨铸铁压力管，记录接头、内衬、涂层与压力级别，不以灰铁铸造原料替代。

- 选定流：已制造的球墨铸铁压力管
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`un-cpc3-2025`

###### 预应力钢筒混凝土压力管（`pccp`）

仅用于尺寸、钢筒、预应力与内衬状态有记录的完整外供 PCCP，不再把其内含水泥、钢丝与钢筒重复作为现场外购投入。

- 选定流：预应力钢筒混凝土压力管
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`un-cpc3-2025`

###### 药芯焊丝（`flux_wire`）

仅用于与公开原件及真实项目焊接工艺一致的全位置单道自保护碳钢药芯焊丝。其他焊条、焊丝、焊剂或保护气路线须另立行，不能用本 UUID 代替。记录耗丝量及不合格焊缝、返修。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

###### 实心碳钢焊丝（`solid_weld_wire`）

仅用于成分及焊接工艺有记录的现场接头实心碳钢焊丝；公开 Solid Wire 为建筑电导线，不能用于本行。

- 选定流：实心碳钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

###### 配方型熔结环氧粉末涂料（`fbe_powder`）

仅用于配方、固体含量与批次有记录的现场 FBE 粉末，原料 DGEBA 树脂不等于外供配方粉末。不重复计入管材已内含的工厂涂层，采集涂层检验及修补用量。

- 选定流：配方型熔结环氧粉末涂料
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

###### 已制造的聚乙烯热收缩管线接头套（`heatshrink_sleeve`）

仅用于声明内含胶黏剂的真实 PE 热收缩接头套，不等于 PE 薄膜、袋或树脂；实际另供底漆须另立材料行。

- 选定流：已制造的聚乙烯热收缩管线接头套
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`nwpipe-steel-water-2019`

###### 已制造的 EPDM 管接头密封圈（`epdm_gasket`）

仅用于橡胶配方及尺寸有记录的实际 EPDM 管接头密封圈，其他弹性体与钢制法兰连接是不同路线。

- 选定流：已制造的 EPDM 管接头密封圈
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`nwpipe-steel-water-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 未涂覆钢管切割边角料（`pipe_steel_offcut`）

仅用于现场切割分离的裸钢边角料，带涂层管废料须另立状态特定行。记录称量及去向，不预设回收收益。

- 选定流：未涂覆钢管切割边角料
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ferc-construction-2017`

##### 基本流

### 过程：非开挖与水体穿越（`crossings`）

实际定向钻、顶钻、隧道或水体穿越及其记录工法。

#### 输入

##### 产品流

###### 干态钠基膨润土钻进粉（`dry_bentonite`）

仅用于非开挖施工实际外供的干态钠基膨润土。配浆水及每种真实另供添加剂单列；外供配方钻井液是需声明成分与接口的替代路线，不再重复计入内含干粉。

- 选定流：干态钠基膨润土钻进粉
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-wetland-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分离矿质钻屑（`drill_cuttings`）

仅用于定向钻或顶钻产生的真实分离矿质钻屑，记录地质、残留流体与含水状态及污染检测；其他弃土与废浆分开。

- 选定流：分离矿质钻屑
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ferc-wetland-2013`

###### 废弃水基膨润土钻进浆液（`spent_bentonite_slurry`）

仅用于实际送去处理的废膨润土浆液，记录固体比例与添加剂。内部循环另行追踪；环境逸浆须按具体物质及接收介质补充基本流与事故记录。

- 选定流：废弃水基膨润土钻进浆液
- 流属性/单位：体积 / m3
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ferc-wetland-2013`

##### 基本流

### 过程：海底铺管与防护（`offshore`）

实际海底路线，记录 S/J/卷管法、辅助船、埋设防护及登陆段。

#### 输入

##### 产品流

###### 供应铺管船的船用轻柴油（`marine_gasoil`）

仅用于按加油与发动机、任务日志归属的真实铺管施工船船用轻柴油；渔船燃烧柴油身份不适用。其他实际船用燃料须另立精确行。

- 选定流：供应铺管船的船用轻柴油
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`saipem-subsea`

###### 预制混凝土管线配重块（`ballast_concrete`）

仅用于实际外供完整混凝土配重块，管材内含的工厂混凝土配重涂层不计入本行，记录块体几何、质量及安装。

- 选定流：预制混凝土管线配重块
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`saipem-subsea`

###### 已制造的锌合金牺牲管线阳极（`zinc_anode`）

仅用于合金与质量有记录的真实锌合金牺牲阳极安装；铝阳极及外加电流系统须补充不同的真实交换与连接记录。

- 选定流：已制造的锌合金牺牲管线阳极
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`saipem-subsea`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：相关泵站、压气站与阀室施工（`station`）

声明附属站场或独立验收相关站场，按实际土建、设备、控制范围。

#### 输入

##### 产品流

###### 站场基础用外供新拌预拌混凝土（`fresh_concrete`）

仅用于配比、强度级别、含水状态与密度有记录的真实交付新拌预拌混凝土。泵送、浇筑、振捣、养护与洗涤留在现场。现浇混凝土身份已描述现场搅拌浇筑，不能充作外购混合料。实际现场拌合须单列水泥、各级骨料、水及外加剂。

- 选定流：站场基础用外供新拌预拌混凝土
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

###### 钢筋，钢制建筑材料（`lowalloy_rebar`）

仅用于碳含量不大于 0.2%、匹配公开工厂门口规格的真实热轧低合金钢筋，须有钢厂证书与称量领用质量；其他碳钢或合金级别使用另一精确行。

- 选定流：钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

###### 非合金碳钢钢筋（`carbon_rebar`）

仅用于真实非合金碳钢钢筋，记录牌号与交付状态；没有匹配证据不能用低合金 C≤0.2% 身份或仅限风电场的钢筋记录。

- 选定流：非合金碳钢钢筋
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

###### 泵（`liquid_pump`）

用于长距离相关泵站实际供入的完整工厂外供液体泵，按b_consumed_inputs纳入可归属的验收前损坏及替换消耗；安装验收泵另记。记录介质、型号、工况、壳体与叶轮、供货总成及实测净质量；声明驱动是否内含，避免重复另计电机。本行不是运营泵送电力。

- 选定流：泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`un-cpc3-2025`

###### 已制造的天然气压缩机成套设备（`gas_compressor`）

仅用于相关站场实际外供天然气压缩机成套设备，声明内含驱动、辅助撬、密封、压力工况及净质量。站场土建、安装、交付前调试及后续压缩机运营分开。

- 选定流：已制造的天然气压缩机成套设备
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

###### 钢制阀门（`steel_valve`）

仅用于匹配外购送达工厂接口的实际钢制隔离阀，记录阀型、通径、压力级别、执行器内含状态及净质量；供应方至场地运输与安装另行实测。其他合金或阀体材料需不同身份。

- 选定流：钢制阀门 `3cb88a81-618f-4fa5-814e-46399b121622`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

###### 低压电缆（`lv_cable`）

仅用于匹配中国工厂门口 GB/T 12706.1-2020 规格、电压不超过 1000 V 且导体、截面、绝缘护套与安装长度有记录的真实电缆。保留长度属性，不改为质量；内含铜与聚合物不再另列外购投入。其他地域、电压或规格须另核身份。

- 选定流：低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位：长度 / m
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-construction-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 混凝土设备碱性洗涤废水（`concrete_washwater`）

仅用于真实单独收集并送去处理的混凝土设备洗涤废水，记录 pH、悬浮物、体积与去向；不是直接淡水排放，也不是电解锰洗涤废水。

- 选定流：混凝土设备碱性洗涤废水
- 流属性/单位：体积 / m3
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`ferc-upland-2013`

##### 基本流

### 过程：压力试验、状态处理与连头（`commissioning`）

所有真实验收试验、清理、返修复验与连头，具体水或气介质条件纳入。

#### 输入

##### 产品流

###### 管线吹扫用压缩气态氮（`nitrogen_purge`）

仅用于项目实际规定的氮气吹扫、干燥或惰化，记录真实纯度、压力温度、交付质量与方法，不能强制用于每条水或液体管线。中国工厂 Volume 身份缺少本行压缩状态基准，灌装惰化是不同过程。

- 选定流：管线吹扫用压缩气态氮
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_testing`
- 来源：`phmsa-hydrotest`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送去处理的废管线水压试验水（`test_wastewater`）

仅用于跨越技术圈处理接口的实际试验后水，记录初始来源、添加剂、污染分析、回用量与去向。循环水不重计；直接排放另列基本流。

- 选定流：送去处理的废管线水压试验水
- 流属性/单位：体积 / m3
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_testing`
- 来源：`phmsa-hydrotest`；`ferc-wetland-2013`

##### 基本流

###### 直接排至淡水的水（`freshwater_discharge`）

仅用于水物质向已识别淡水接收体的真实计量直接排放。存在前景处理时，计量处理后的实际排放；没有处理时，仍须保留真实直接排放。污染物按分析结果追加精确基本流。本行不是送入下水道或处理设施的废水、海水排放、取水或耗水，不能由本行推定无害。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_testing`
- 来源：`ferc-wetland-2013`

###### 甲烷 (化石源)（`fossil_methane_vent`）

仅用于真实交付前已识别化石甲烷向外部空气未特指子介质的即时放空或泄漏。由实测气量及成分确定甲烷质量，不等于天然气总量，不包括已燃烧甲烷，也不是日常运营排放或施工必然排放。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ferc-construction-2017`

###### 二氮（`nitrogen_release`）

仅用于声明交付前氮气吹扫任务实际向外部空气未特指子介质即时放空的实测分子氮（CAS 7727-37-9）。核对交付、残留及回收氮量；本行不是 NO、NO2 或 N2O，也不由氮输入推成必然排放。

- 选定流：二氮 `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`phmsa-hydrotest`

### 过程：回填、恢复与清场（`restoration`）

真实施工扰动、临建拆除及交付要求的恢复。

#### 输入

##### 产品流

###### 未污染外购表土（`topsoil`）

仅用于最终恢复实际外购表土，记录来源、土壤状态、数量及回用；原场地剥离、储存与回铺表土是内部存量，不得产生第二次生产负担。

- 选定流：未污染外购表土
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`ferc-upland-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：重复使用施工资产制造归属（`assets`）

真实纳入且制造份额有依据并守恒的重复使用资产。

#### 输入

##### 产品流

###### 已制造的硬木施工通行垫板（`timber_mat`）

仅用于施工核算实际纳入的可重复使用硬木通行垫板。记录同配置净质量、含水状态、累计真实使用与守恒的制造归属份额；通用木料不能识别完整垫板。

- 选定流：已制造的硬木施工通行垫板
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assets`
- 来源：`ferc-wetland-2013`

###### 已制造的柴油履带挖掘机（`crawler_excavator`）

仅用于真实纳入的设备制造归属，采用实测同配置净质量、有依据的累计实际活动及份额。拆解回收挖掘机身份及默认 10 L/h 不能作为施工设备制造依据；真实运行燃料归 site_support。

- 选定流：已制造的柴油履带挖掘机
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assets`
- 来源：`ferc-construction-2017`

###### 已制造的铺管施工船（`pipelay_vessel`）

仅用于具有可追溯空船配置质量及有依据的累计施工活动的真实船舶制造归属份额。运行燃料计入 offshore，不得每项目重置完整制造负担。

- 选定流：已制造的铺管施工船
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assets`
- 来源：`saipem-subsea`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：分任务设备运行、用水及现场排放（`site_support`）

所有纳入任务，每项交换须真实发生且身份适用。

#### 输入

##### 产品流

###### 柴油（`site_diesel`）

仅计量用于真实开挖、弯管、焊接发电机、起重、泵、站场土建、试验与恢复设备的外供及燃用柴油，每批燃料仅归属一次。通用公开身份未限定牌号、炼制路线与供应方；真实化石或生物比例须采集，不能推定。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`ferc-construction-2017`

###### 交流电（`cn_lv_power`）

仅用于实际中国施工用户电表处小于 1 kV 的电网平均用户端供电，核对地域、年份、供方与交付电压。保留公开净热值属性与能量单位组，其他地域或发电机输出须另核身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 / MJ
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`ferc-construction-2017`

###### 交流电（`cn_mv_power`）

仅用于匹配施工交付接口、来源地域与年份的实际中国 1–35 kV 电网平均用户端供电，不以低压身份替代，也不重加用户供电数据已含的发电输电损耗。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`ferc-construction-2017`

###### 工艺用水（`treated_process_water`）

仅用于现场拌合、抑尘、冷却、养护或水压试验实际外供的已处理技术圈水，各用途分别计量。保留公开质量/kg，体积换算须实测批次温度下密度。通用身份不预设处理或上游覆盖；原河水与地下水取用另列，外购水不重复计取水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ferc-construction-2017`；`ferc-wetland-2013`

##### 废物流

##### 基本流

###### 河水（`river_withdrawal`）

仅用于前景真实直接河水资源取用，不是外购已处理水。保留体积/m3、取水坐标与国家、日期、许可及真实回水与去向。缺水影响解释必须采用真实过程地点，取水不等于耗水。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 / m3
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ferc-wetland-2013`

###### 地下水（`groundwater_withdrawal`）

仅用于真实直接进入施工边界的地下水资源取用，包括立即旁路送去排出的降排水。按来源地点分别计量总抽取量及各真实回水去向，不能因不耗用就删掉抽取。旁路降排水不作已处理供水或净耗水；不重复外购水背景内含取水。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：体积 / m3
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ferc-construction-2017`

#### 输出

##### 产品流

##### 废物流

###### 送去处理的地下水降排废水（`dewatering_wastewater`）

仅用于化学成分、体积、污染与去向有记录、送入技术圈处理接收方的真实施工地下水降排水。同一量不再作为直接环境回水，真实处理输出归正确处理边界。

- 选定流：送去处理的地下水降排废水
- 流属性/单位：体积 / m3
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ferc-construction-2017`

##### 基本流

###### 二氧化碳（化石源）（`fossil_co2`）

仅用于所纳入现场、运输或船舶燃料燃烧向外部空气未特指子介质即时排放的有证据化石二氧化碳。采用实测化石碳平衡或来源适用因子；燃料存在本身不提供排放数量。生物碳、上游排放与土地变化碳分开。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ferc-construction-2017`

###### 一氧化氮（`molecular_no`）

仅用于真实纳入活动向外部空气未特指子介质即时排放的实测或专门建模分子 NO，须有 NO 形态及适用设备、燃料、治理证据。以 NO2 计的 NOx、NO2、亚硝酸根及 N2O 不能代替 NO。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ferc-construction-2017`

###### 二氧化氮（`molecular_no2`）

仅用于真实分子 NO2（CAS 10102-44-0）向外部空气未特指子介质即时排放，不得把以 NO2 当量计的 NOx 或数据库 N2O4 同义词重解释为实测分子 NO2。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ferc-construction-2017`

###### 颗粒物 (PM2.5 - PM10)（`pm_2_5_10`）

仅用于真实尾气、土方或切割活动向外部空气释放的有证据 2.5–10 微米粒级，排除室内职业暴露与捕集粉尘。未消除重叠不能同时叠加总 PM10。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ferc-construction-2017`

###### 小于 2.5 微米的空气排放颗粒物（`pm_under_2_5`）

仅用于有证据向外部空气未特指子介质排放的完整小于 2.5 微米粒级；0.2–2.5 微米部分粒级、乡村或烟囱限定身份以及煤烟混合物不代表完整粒级，不推定粒径分布。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ferc-construction-2017`

###### 颗粒物，粒径未特指（`unsized_dust`）

仅用于粒径确实未给出的真实场外扬尘释放。公开身份明确不把历史熟料案例因子或化学组成强加于本用途。数量来自适用现场证据，不与重叠的已分级颗粒量相加。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 / kg
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`ferc-construction-2017`

###### 直接回排淡水的液态地下水降排水（`dewatering_freshwater_return`）

仅用于施工降排水经过适用前景处理后向已识别淡水接收体真实计量回排的液态水。核对地下水总抽取量，不假定零耗水、清洁排放或输入输出相等。分别分析释放污染物并补精确物质行；送去处理废水与回排海水土壤须不同的行。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：采用所列采集协议的实测、核对后归属数量；按每声明的参考流汇总；不设置默认值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`ferc-construction-2017`；`ferc-wetland-2013`

### 过程：最终检查与完整交付（`handover`）

所有声明实体工程与验收接口。

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收完整长距离管线交付单元（`finished_pipeline`）

一个完整竣工验收管线系统，或明确识别、独立交付的相关站场，覆盖声明的所有附属工程与试验。管材包、施工服务、未验收区段或选取的简单子任务不是本输出。

- 选定流：已验收完整长距离管线交付单元
- 流属性/单位：物品数量 / 件
- 数量规则：1 件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`un-cpc3-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| a_direct | 按单元、区段、站场和施工任务分别计量直接归属。共享设备、用水与物流先分表或活动拆分，以真实负载活动分配并守恒总量；不得由造价、默认长度或设计载荷任意分配。 | ferc-construction-2017 |
| a_stock | 同场回用土、水与钻浆是内部转移，保留平衡但不每次重记外部采购取水。材料制造和下游废物处理分开，不由废料标签自动给予替代收益。 | ferc-wetland-2013; ferc-upland-2013 |
| a_reuse | 资产或构件制造采用真实配置净质量和有依据的无量纲受益份额，每项份额在 [0,1] 且跨所有项目、期间、重复使用累计不超过 1。记录真实活动分母和证据；未知寿命或受益关系明确审查，不每项目重计完整制造。 | ferc-construction-2017 |
| a_product | 参考输出仅为声明完整实体。保留既有资产及移交设备不得作为新制造共产品；存在真实独立交付共产品时先拆分工序和计量，再提出有物理证据的分配并审查。 | un-cpc3-2025 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | handover | finished_pipeline | 验收与竣工台账 | 资产场址接口编号；国家；介质；真实适用线路长度内径壁厚路线压力工况；纳入站场几何与设备 BOM；not_applicable 范围证据；试验介质准则结果；焊缝涂层检查；返工；恢复；完整验收数量 | 采用可追溯竣工几何与校准仪器测量，核对合同范围及 BOM、签署验收及试验记录；计输出前核验完整交付状态。 | item | 每次交付与修正 | 完整真实施工至验收 | 同一声明单元及接口 | 每声明的参考流 | 测量校准文件；验收检查记录 |
| cp_materials | pipe_installation; earthworks; crossings; offshore; station; restoration | each supplied atomic material/assembly | 到货、领退料、存量及供方记录 | row_id；批次牌号规格；材料配方内衬涂层；供方国家接口；领退料存量；实测净质量长度体积；温度；密度线质量；站场总成内含 ；期初期末可复用库存；经核实转移；验收前损坏拒收替换；分别记录消耗与安装验收量 | 采用校准秤或可追溯批次证书称量交付领用净量，将初末存量与退料核对安装几何及真实 BOM；只在同批同态下实测密度线质量，排除包装皮重及完整外供总成中已内含项目。  按b_consumed_inputs采用逐行原生单位：可归属总收货+期初库存−经核实退回或转移−期末可复用库存；纳入实际消耗的损失与替换，安装验收及废物分别核对。 | kg; m; m3 | 每次到货领用退回 | 施工返工所有批次 | 同一单元，按任务站场区段标记 | 每声明的参考流 | 称量票；钢厂证书；配方；真实 BOM 存量核对 |
| cp_logistics | logistics | transport_diesel | 车辆与托运台账 | 车辆任务；起终点；真实距离；载荷；空返；柴油牌号化石比例；供油燃用量；初末油存量；供方运输覆盖 | 使用燃料表、加油与发运记录，核对装载量及纳入的去回程，不假设扣除距离。若使用链接运输服务数据替代燃料，声明精确活动并剔除本核算中其内含燃料与排放。 | kg; km | 每趟运输与加油 | 所有真实施工交付及废物运输 | 单元特定线路台账 | 每声明的参考流 | 燃料表校准；发运与行车日志；供应边界 |
| cp_energy | site_support; offshore | each fuel or delivered-voltage electricity | 电表、燃料及设备任务日志 | row_id；电表电压；国家年份供方；任务设备；初末读数；真实作业怠速小时；燃料量牌号化石比例；密度；热值证据；船舶加油任务；归属份额 | 读取校准用户表、称量领油或可追溯加油记录，分别核对现场发电与船舶任务。共享量按真实分表任务需求或有依据活动归属，守恒完整期间数量。kWh 以 3.6 转 MJ；质量转燃料能量须真实适用低位热值，不假设流次要属性。 | kg; kWh; MJ | 每班、领油及计量期间 | 整个场地船舶施工及复验 | 声明单元任务及另列共享受益者 | 每声明的参考流 | 表校准；燃料证书；时间任务及守恒归属台账 |
| cp_water | site_support | treated_process_water; river_withdrawal; groundwater_withdrawal; dewatering_freshwater_return; dewatering_wastewater | 供水、取水、使用、循环及降排水计量 | 来源类型国家地点；处理接口；用途任务；质量体积温度密度；取用；循环；排出；存量；降排水；许可 | 计量每项真实外部来源与去向。称量以质量参考的处理水，或以同态实测密度换算体积。内部循环不每次重新作为外部投入；另保留地下水降排水旁路量及接收接口。 | kg; m3 | 每次取用使用排出 | 全部施工包括水压试验 | 同一单元、明确水体及供方 | 每声明的参考流 | 校准表；水平衡；真实来源质量及许可 |
| cp_testing | commissioning | nitrogen_purge; test_wastewater; freshwater_discharge | 试验介质与调试台账 | 试验区段接口；介质；压力温度保压泄漏规范；泵压机活动；来源介质纯度状态；交付与回收质量体积；水添加剂；回用；排放去向及分析；返修复验 | 使用真实项目规范和校准压力温度流量与气体积计量，保留试验结果、泄漏修补及重复次数。体积换算氮质量须适用状态成分密度证据，不把未指定压缩体积等同标准体积。送去处理废水与直接排放分开，各分析物质分别计量。 | kg; m3; pressure/temperature/time | 每次试验返修复验及状态处理 | 仅真实施工后交付前试验 | 同一管线单元与接收接口 | 每声明的参考流 | 校准；试验检查与化学分析；真实批准文件，不是 PCR 合规 |
| cp_waste | earthworks; pipe_installation; crossings; station | each segregated waste | 废物称量、成分及去向台账 | row_id；来源任务；物质材料状态；净质量体积含水固体；污染；现场回用；储存；真实运输处理排放去向 | 采用校准秤表和代表性状态成分分析计量分离流，核对产生、回用、存量及真实外送量。处理运输模块须匹配真实去向，不能由通用回收或填埋标签推定。 | kg; m3 | 每次转移与存量记录 | 所有真实施工及返工 | 同一单元与真实去向 | 每声明的参考流 | 称量票；实验分析；废物运输处理接收票据 |
| cp_assets | assets | each reusable asset manufacture share | 资产序列配置及累计受益者台账 | 资产编号配置；实测净质量；制造边界；项目真实活动；先后受益者；有依据总寿命活动或实际累计分配基准；无量纲份额；不确定性 | 采用校准同配置净质量称量或可追溯制造商称重记录，排除运输包装。保留总制造分配活动与真实项目份额依据，跨所有项目、期间与重复使用追踪累计份额，总和不超过 1。未知寿命活动是审查缺口，不每项目重置完整制造负担。 | kg; dimensionless share; actual activity unit | 每次资产使用及累计台账更新 | 施工项目及有记录跨项目受益范围 | 资产序列绑定本单元及其他受益者 | 每声明的参考流 | 称量记录；有依据寿命活动；累计守恒份额台账 |
| cp_air | site_support; commissioning | each elementary air emission | 物质粒级介质与活动测量记录 | row_id；设备任务日期；真实物质 CAS；化石生物组分；外部介质子介质时间；治理；实测释放或适用因子来源；活动基准；气成分；颗粒粒级；不确定性；受体噪声振动测量 | 采用校准排放形态测量或明确有依据、匹配设备燃料治理的因子及真实活动，记录因子来源基准，不把 NOx 当量改写为分子 NO 或 NO2。燃料碳平衡分化石生物碳；吹扫放空按实测成分状态并扣已燃部分。外部扬尘、捕集粉尘和工作场所测量分开。独立建立适用定量流及评价方法前，噪声振动保留为实测受体事件背景。 | kg; separate noise dB/time/context | 每段真实活动与测量 | 所有纳入的施工交付前释放 | 同一单元及真实外部接收介质 | 每声明的参考流 | 校准；物质粒级燃料分析；适用模型因子；不确定性及未覆盖影响 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_reference | finished_pipeline | 仅在同一完整单元全部接口、实体工程与所需试验实际验收后记录 1 件，不按购入管长推算验收数。 | cp_delivery | 每声明的参考流参考输出 | un-cpc3-2025 |
| calc_stock | all material and waste rows | 每声明的参考流按批次核对期初、到货、期末、退料、安装、废物与内部回用；同一物质状态守恒并记录返工，不能将所有投入质量设为建筑参考质量。  对外供投入应用b_consumed_inputs，包括验收前实际消耗的损失与替换；不得把安装验收量当作投入量。 | cp_materials; cp_waste | 每声明的参考流各物质的净归属量 | ferc-construction-2017 |
| calc_utilities | transport_diesel; site_diesel; marine_gasoil; cn_lv_power; cn_mv_power | 每声明的参考流汇总实测归属量；电量 kWh 乘 3.6 得 MJ。体积转燃料质量采用实测同态密度；转能量采用有依据实际低位热值。共享任务份额总和不得超过对应计量期总量。 | cp_energy; cp_logistics | 每声明的参考流 kg 或 MJ | ferc-construction-2017 |
| calc_water | treated_process_water; river_withdrawal; groundwater_withdrawal; dewatering_freshwater_return; dewatering_wastewater; test_wastewater; freshwater_discharge | 每声明的参考流逐来源核对外部取用、供水、储存、实际回用与外部去向。质量参考水的体积换算用同态实测密度；取水、耗水、送处理废水与直接排放分别记录，内部循环不作为重复外部取水。 | cp_water; cp_testing | 每声明的参考流分别 kg 或 m3 | ferc-wetland-2013 |
| calc_emission | all elementary air emission rows | 每声明的参考流采用实测物质释放量，或明确记录适用因子乘真实活动及单位。化石 CO2 采用实测化石碳氧化量乘分子质量比 44/12；不默认全化石或全氧化，不以 NOx 当量、总 PM 或排放因子代替真实物质粒级。 | cp_air | 每声明的参考流物质特定 kg | ferc-construction-2017 |
| calc_assets | timber_mat; crawler_excavator; pipelay_vessel | 每声明的参考流制造归属量 = 同配置实测净质量 × 有依据的无量纲制造份额。跨所有受益项目和重复使用累计份额不超过 1；未知活动分母或寿命保留审查，不给默认份额。 | cp_assets | 每声明的参考流归属制造 kg | ferc-construction-2017 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_entity | all inventory rows | 同一实际接口、工程配置和完整交付状态必须与几何及测试证据一致；实际纳入的管线及站场工程不得省略，部分交付明确标记不完整。 | cp_delivery; cp_materials |
| dq_measure | all inventory rows | 保留校准、单位、批次、温压、密度及配方证据；同批净量、返工复验、存量和归属平衡可追溯；不填默认配比损耗能耗。 | cp_materials; cp_energy; cp_water; cp_testing |
| dq_environment | all elementary rows | 明确物质、化石生物来源、介质子介质、粒级和即时性；保留未覆盖物质及方法不确定性。噪声振动按真实受体位置、频率时间与仪器记录，不能强转质量或由无身份宣称零影响。 | cp_air; cp_water |
| dq_scope | whole dataset | 披露材料制造、运输、现场施工、运行维护、最终拆除的分别覆盖和缺口；历史指导不等于现行法律；供货状态与项目规格需要实际证据。 | module coverage register; actual specifications |
| dq_uuid | all UUID-bearing rows | 逐一核对公开身份的主属性与限定，匹配官方中文名。缺失身份是审查缺口，不能强配后宣称可发布。 | direct identity and supplier evidence |
| dq_assets | assets | 实际制造份额及累计受益基准须独立审查；未知生命周期活动的制造完整性不能声称已满足。 | cp_assets |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| v_complete | 所有必需及实际适用条件工序、完整参考交付、双语 row_id 与 rule_id、正确基准和协议必须齐全；实际适用的线路站场实测几何或测试信息缺失则数据不完整；真实不纳入的实体属性须有 not_applicable 范围证据。 | un-cpc3-2025 |
| v_boundary | 核对外供与现场状态、上游与施工以及交付前后阶段分界，防止重复内含材料、公用工程、运输燃料、排放与内部循环。 | ferc-construction-2017; ferc-wetland-2013 |
| v_identity | 每条采用身份须符合公开物质、路线、地域、电压、主属性、单位及环境介质限制；空 UUID 精确行保留审查，不可假称完整流身份。 | ferc-construction-2017 |
| v_tests | 核对真实介质温压、试验段、记录及返修复验，厂内试验不替代现场验收；成功试验不由本 PCR 证明绝对无缺陷或法规批准。 | phmsa-hydrotest |
| v_balance | 实测材料、能源、水、废物与共享活动守恒；各资产累计制造份额不大于 1。未知寿命、活动或关系须披露审查，不用默认值填平。 | ferc-construction-2017 |
| v_emissions | 仅量化有适用证据的实际物质和介质；NO、NO2、NOx 当量、颗粒粒级、化石生物碳和液态水、废水、资源水不互换；无依据数量保留未知。 | ferc-construction-2017 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实体施工交付前景数据集 |
| downstream_use | secondary_dataset; background_dataset，在范围与身份适用且独立审查后 |
| allowed_use | 同配置、同接口、同地域时期及实际路线的长距离管线交付建模；清楚分阶段的下游生命周期扩展 |
| excluded_use | 通用每公里排放因子；城市配水配气干线；管材生产；施工服务；输送运营或全寿命结果；自动合规或批准 |
| required_metadata | 全部参考限定；地理时间；竣工工程量配置；试验及验收；供货状态；真实工序设备；因子与单位来源；材料运输上游链接；制造份额；内部回用与去向 |
| required_quality_disclosure | 候选方法审查状态；空身份与补充行；上游模块覆盖；计量、适用因子与分配不确定性；未覆盖运行维护拆除及噪声生态影响；历史来源限制 |
| update_trigger | 真实材料、介质、管径长度壁厚、站场、工法、供方电压地域、验收规范或实际活动变化，以及经审查新证据或流身份 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.280. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 实体、相关站场及城市配水配气排除；只支持分类边界 |
| ferc-construction-2017 | official_guidance | FERC, Guidance Manual for Environmental Report Preparation, Volume I, February 2017: §4.1.3.1 pp.4-28–4-32 (PDF58–62); §4.1.3.2/4.1.4 p.4-33 (PDF63); §4.2.2 pp.4-45–4-46 (PDF75–76); §4.2.2.4 pp.4-48–4-49 (PDF78–79); §4.9.1–4.9.2. https://www.ferc.gov/sites/default/files/2020-04/guidance-manual-volume-1.pdf | 天然气项目工序、站场施工运营分界、穿越、取排水及空气噪声数据需求；历史美国范围，不提供通用数值或现行法律批准 |
| ferc-upland-2013 | official_guidance | FERC, Upland Erosion Control, Revegetation, and Maintenance Plan, May 2013: III.E p.5 (PDF7), IV.B/IV.F pp.8–11 (PDF10–13), V pp.12–16 (PDF14–18). https://www.ferc.gov/sites/default/files/2020-04/upland-erosion-control-revegetation-maintenance-plan.pdf | 历史天然气工程表土、残余物及恢复工序；不设默认期限播种或侵蚀数值 |
| ferc-wetland-2013 | official_guidance | FERC, Wetland and Waterbody Construction and Mitigation Procedures, May 2013, §VII pp.19–20 (PDF21–22), official GovInfo preserved copy. https://www.govinfo.gov/content/pkg/GOVPUB-E2-PURL-gpo83806/pdf/GOVPUB-E2-PURL-gpo83806.pdf | 测试水取排水原件页面核对；历史天然气工程范围，不把水体距离及流率设为全球限制，保存副本不证明现行政策 |
| phmsa-hydrotest | official_guidance | PHMSA, Fact Sheet: Hydrostatic Pressure Testing, Overview and Hydrostatic Testing; displayed Date of Revision 12012011. https://primis.phmsa.dot.gov/stakeholder-comms/factsheets/fshydrostatictesting/ | 施工后与运行期测试区分、介质、加压、返修复验；旧版气与危险液体范围，不采统一压力时长或无缺陷保证 |
| saipem-subsea | handbook | Saipem, Subsea pipelines: offshore in deep waters, Deep water pipelines section, undated manufacturer page. https://www.saipem.com/en/solutions-energy-transition/offshore/subsea-pipelines | 海上油气 S-Lay/J-Lay 路线存在性；不是所有海底管线工法或燃料配比，其他工法由真实项目证据补齐 |
| nwpipe-steel-water-2019 | handbook | Northwest Pipe Company, Engineered Steel Water Pipe brochure, July 2019, PDF p.1 (unpaginated folded brochure), Suggested Specification of Steel Pipe for Water Transmission; joint/supply/inspection paragraphs. https://www.nwpipe.com/app/uploads/2020/08/NWP-Engineered-Steel-Water-Pipe-Brochure-July-2019.pdf | 历史制造商输水钢管供货、接头、内衬涂层与检验状态；实际水项目规格另核，不当作所有材质或最新规范 |
