---
pcr_id: pcr.constructions-and-construction-services.constructions.railway-infrastructure-delivery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 铁路基础设施交付

## 1. 范围与适用性

适用于实际完成的铁路基础设施：长途和通勤铁路路基、街道有轨电车、地下/高架快速轨道基础设施、电气化结构、轨道控制/安全系统及缆索铁路/缆车固定系统。以项目定义的实体交付单元评价其实际施工和验收，更新交付须明确保留资产。本方法针对实体，不是施工服务、铁路运输服务、车辆制造 PCR 或一包建材。

核心前景从记录的场址起始状态及声明接收门处的供货材料/设备开始，止于文件化验收及约定场地恢复。上游制造、进场运输、施工废物处理和测试车辆使用为单独连接的贡献，明确覆盖情况。默认排除正常客货运营、后续维护/更换及最终拆除；扩展研究加入时单独描述。不能由本前景声称完整 cradle-to-gate 或全寿命覆盖。CPC 桥梁/高架桥结构和隧道壳体是另行分类资产，安装其上/内的轨道系统可在明确接口下纳入。站房与车辆分别评价。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.railway-infrastructure-delivery |
| classification_refs | CPC 3.0 53212 — Railways |
| covered_products | 实际交付的上述铁路基础设施及完整约定缆索系统 |
| excluded_products | 运输/施工服务；独立建材和车辆生产；桥/隧道壳体与站房独立交付；交付后运营维护拆除 |
| representative_product | 明确起止链程、实测线路/轨道长度与数量、轨距、道床和系统配置的一个验收铁路基础设施单元 |
| production_route | 实际土方/排水；有砟或无砟轨道；钢轨安装；条件性供电、控制和缆索安装；测试与交付 |
| market_state | 现场完成、记录验收的实体；声明部分交付的接口与保留资产 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供声明场址和配置内的铁路路基、线路或铁路附属系统实体 |
| How much | 1 个实测界定且验收的交付单元；同时披露线路长度、各轨道长度和数量；缆索系统披露斜长与高差 |
| How well | 以实际合同、竣工图、轨道几何/系统测试和验收证据确认功能及完整性；不设通用速度、载荷或容量 |
| How long or cycle | 本项目实际施工至验收交付的一个周期；无默认运营寿命 |
| reference_flow_link | reference_railway |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成铁路基础设施交付单元 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 场址/国家；起始状态；新建或更新；交付合同/验收日期和配置标识；起止链程及实测路线长度、轨道数量与各轨长度；轨距、断面、坡度；有砟/无砟/嵌入轨或索道类型；实际载荷/速度/容量条件与证据；电压/控制功能；永久和临时工程清单；保留资产和桥/隧道/站房接口；测试/车辆范围；实测工程量和生命周期覆盖 |

item 是公开 Item(s) 数量单位的显示别名。一个单元为精确定义并验收的完整交付，不是任意施工阶段。长度、轨道数量或系统完整性不同的交付不能只因各为一个单元而比较。必需限定信息须在数据包出现；缺失几何、配置或验收即参考不完整。不杜撰每公里质量、资产总质量或服务寿命。仅在可追溯质量/实物范围证据建立关系后加入数量到质量身份连接，保留公开流属性。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| delivery_count | reference_railway | 物品数量 | item | 1 件对应 cp_delivery 确认的一个完整声明交付单元；所有清单行采用每声明的参考流基准。 |
| geometry | reference_railway | 实测几何 | m | cp_delivery 采集竣工链程、各轨长度/数量、坡度、断面及配置；路线公里不等于轨道公里，不能据造价换算质量。 |
| material_state | 以质量为主属性的物料及废物清单行 | 质量 | kg | 按实际供货/废物状态计质量；干湿状态、部件内含范围和证书线密度均须 cp_materials/cp_waste 支持；m3 转 kg 须同批次实际密度，不设通用密度。 本质量规则不替代能量、体积或件数交换的原生 MJ、m3 或 item 属性与单位。对这些行进行辅助质量核对时，须单独关联原交换并采用实际匹配状态的证据。 |
| energy_units | electricity_lv, electricity_mv, test_power | 净热值 | MJ | 保留公开净热值属性及能量单位组；kWh × 3.6 = MJ；柴油质量不是 MJ，热值须批次实测/证书支持。 |
| water_identity | mains_water, river_water, drain_return, washout | 体积 | m3 | 供水、河流资源取水、河流排水及收集冲洗液分别计量；净取水不能代替各总交换。 |

身份支持：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` → 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`（kg）；净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` → 能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`（MJ）；体积 `93a60a56-a3c8-22da-a746-0800200c9a66` → 体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`（m3）。它们是同一交付分母下不同的分子属性。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实测场址基线及各材料/设备接收门；保留既有路基、设备和已完成桥/隧道壳体明示 |
| starting_condition_role | user_defined_foreground_boundary |
| product_classification_scope | CPC 3.0 53212; physical railway infrastructure |
| recursive_input_rule | 输入视为明确供货状态的上游产品，不递归默认为已包含全部制造；链接匹配数据集时核对门、单位和组件范围 |
| upstream_dataset_requirement | 建材及设备制造数据集分别匹配真实规格；运输逐载荷/方式/距离；废物运输及处理分别连接；缺失贡献留待补充并披露 |
| disclosure | 报告现场施工至交付、分别连接的制造/运输/处置及未覆盖项；不得默认完整 cradle-to-gate 或全寿命 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_work_packages | foreground_system_boundary | 研究实际纳入的前期拆除/清场、污染土修复、爆破、隧道和桥梁施工须独立工程包与专门清单。按真实设计和实际供货状态计入地基处理、防水、土工布、涂层、街道路面、围栏与恢复；示例卡不是通用完整工程量表。每个新增实际交换建立一条具体原子行、协议与分母；缺乏支持的工程保持显式不完整。交付后实际维护/更新和报废拆除是具有日期、活动及去向的独立后续阶段，不乘以猜测寿命。`rics-wlca-2024`、`cpc3-notes-2025`。 | cpc3-notes-2025, rics-wlca-2024 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| earthwork | 路基土方与排水 | conditional | 交付内实际路基施工或土方工程 | foreground | 每声明的参考流 |
| ballasted | 有砟道床与轨枕铺设 | conditional | 实际有砟轨道 | foreground | 每声明的参考流 |
| slab | 无砟轨道施工 | conditional | 实际无砟或嵌入式有轨电车轨道 | foreground | 每声明的参考流 |
| rail_install | 钢轨固定、连接及调整 | conditional | 实际安装钢轨轨道 | foreground | 每声明的参考流 |
| civil_support | 局部现浇支承工程 | conditional | 实际排水、轨道板、电气化或缆索系统支承混凝土 | foreground | 每声明的参考流 |
| electrification | 电气化结构与设备安装 | conditional | 实际交付电气化范围 | foreground | 每声明的参考流 |
| control | 控制与安全系统安装 | conditional | 实际控制或安全系统交付 | foreground | 每声明的参考流 |
| cable_system | 缆索铁路或缆车固定系统安装 | conditional | 实际缆索铁路或缆车交付 | foreground | 每声明的参考流 |
| site_operation | 共用现场公用工程及施工残余物 | required | 实际施工支持，逐任务声明零或缺失 | foreground | 每声明的参考流 |
| handover | 交付检验与移交 | required | 每个声明交付单元 | foreground | 每声明的参考流 |

### 过程：路基土方与排水 （`earthwork`）

表土剥离/堆存；矿质土开挖、运输、复用和压实；安装排水。按任务记录挖掘机、推土机、运输车、压路机和水泵。外购土及外运废物跨界，内部挖填不跨界。

#### 输入

##### 产品流

###### 铁路路堤用外购未污染矿质填土 （`fill`）

仅在场外土壤进入声明的土方工程时适用；记录含水率和压实状态。场内移用土为内部转移。

- 选定流：铁路路堤用外购未污染矿质填土
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

###### 预制混凝土铁路排水管 （`drain_pipe`）

实际排水设计采用混凝土管时，记录内径、配筋、接头、长度及供货记录的单位质量。

- 选定流：预制混凝土铁路排水管
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送处置的未污染开挖矿质土 （`soil_waste`）

仅记录外运并认定为废物的土；记录组成、含水率及接收去向。场内保留土或可复用出售土不得作为该废物。

- 选定流：送处置的未污染开挖矿质土
- 流属性/单位：质量 / kg
- 数量规则：采用实际地磅外运量；核对开挖、复用、外购、库存和外运。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`hs2-phase2a-2017`

##### 基本流

###### 施工降水排入河流的水 （`drain_return`）

仅适用于实际排入淡水地表水的排放；声明受纳水体、处理和采样。悬浮物及溶解物须各自采用实测原子行，不能假设为清水排放。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量排水体积，与取水及收集的液体废物分开报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`hs2-phase2a-2017`

### 过程：有砟道床与轨枕铺设 （`ballasted`）

铺设压实底砟和道砟，吊装/铺设轨枕，安装钢轨后最终捣固及调整。花岗岩行仅在实际指定花岗岩时适用。木或钢轨枕须专用材料行及防腐处理。

#### 输入

##### 产品流

###### 花岗岩碎石底砟集料 （`subballast`）

仅用于花岗岩底砟层；级配、含水率、压实厚度和铺设记录与道砟分开。其他岩性须采用独立原子行。

- 选定流：花岗岩碎石底砟集料
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase1-2013`

###### 花岗岩碎石轨道道砟 （`ballast`）

有砟轨道且实际使用花岗岩道砟时适用；记录道砟等级和铺设断面。其他验收石料单独记录。

- 选定流：花岗岩碎石轨道道砟
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase1-2013`

###### 预应力混凝土铁路轨枕 （`sleeper`）

安装混凝土轨枕时记录类型、承轨台配置、供应方单件质量和数量；轨枕数据集已含的上游混凝土与钢材不再重复加入。

- 选定流：预应力混凝土铁路轨枕
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase1-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：无砟轨道施工 （`slab`）

施工实际结合基层及预制或现浇板，调整承轨结构，按需灌浆。记录起重机、混凝土泵、整饰及养护。不得向有砟轨道强加无砟路线。存在的街道路面与树脂嵌固须各自明确行。

#### 输入

##### 产品流

###### 水泥结合粒料轨道基层混合料 （`bound_layer`）

仅计铺设前实际供应的水泥结合混合料；记录含水率、配合比证书及铺设几何。现场拌制时改用集料、水泥和水的独立行，绝不同时加入两种清单。

- 选定流：水泥结合粒料轨道基层混合料
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

###### 预制钢筋混凝土铁路轨道板 （`track_slab`）

预制轨道板路线适用；记录配筋、预埋承轨部件、尺寸、供应方质量和安装板数量。现浇板路线改用混凝土/钢筋行。

- 选定流：预制钢筋混凝土铁路轨道板
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

###### 水泥基轨道板灌浆料 （`grout`）

仅在实际灌浆时适用；记录供货湿态或干态和实际批次证书。未包含的现场添加水另列输入。

- 选定流：水泥基轨道板灌浆料
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：钢轨固定、连接及调整 （`rail_install`）

安装钢轨、各扣件部件和轨下垫板；道岔单独记录。按实际闪光焊、铝热焊或机械接头进行应力调整及连接，不假定焊接耗材。实际耗材、焊渣和烟尘物种逐项加入，记录焊接电力与钢轨打磨活动。

#### 输入

##### 产品流

###### 成品钢制铁路钢轨 （`rails`）

钢轮轨道适用；记录断面、牌号、轨长、接头及安装轨道长度。钢轨质量来自可追溯供货质量，或实际证书线密度和实测长度。

- 选定流：成品钢制铁路钢轨
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase1-2013`, `hs2-phase2a-2017`

###### 钢制钢轨扣件弹条 （`clip`）

仅计实际钢制弹条及其供货质量；轨下垫板和螺栓为独立交换。

- 选定流：钢制钢轨扣件弹条
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase1-2013`

###### 弹性体轨下垫板 （`pad`）

安装时声明聚合物配方、单件质量、承轨台数量和配置。

- 选定流：弹性体轨下垫板
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase1-2013`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：局部现浇支承工程 （`civil_support`）

仅为实际工程包浇筑混凝土和安装钢筋。按不同材料与复用台账记录模板、养护、接头及基础开挖，不跨系统复制支柱或轨道尺寸。

#### 输入

##### 产品流

###### 浇筑前的预拌混凝土 （`concrete`）

实际现浇轨道板、排水或支柱/驱动基础适用；不同强度等级和批次配合比逐行分开。外购预制构件内混凝土不得重复计量。

- 选定流：浇筑前的预拌混凝土
- 流属性/单位：体积 / m3
- 数量规则：采用验收拌合/供货体积扣除退货，核对浇筑尺寸；不设默认配合比。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase1-2013`, `hs2-phase2a-2017`

###### 钢筋，钢制建筑材料 （`rebar`）

仅在实际为 C≤0.2% 热轧低合金钢筋、供应方厂端交付时采用该身份，后续运输单列。其他牌号须采用独立行和身份。

- 选定流：钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：电气化结构与设备安装 （`electrification`）

在实际基础上吊装固定支柱，展放张紧接触导线，仅在范围内安装牵引变压器/开关设备。第三轨供电改用专门导电轨/绝缘件行。设备制造与运营牵引能耗分开。

#### 输入

##### 产品流

###### 加工成品钢制接触网支柱 （`mast`）

交付含架空接触网时，记录支柱类型、涂层、高度、基础和吊装。普通钢材不能代表完整支柱。

- 选定流：加工成品钢制接触网支柱
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

###### 铜合金铁路接触线 （`contact_wire`）

使用时识别实际合金、断面、证书线密度和安装长度。纯铜线不假定等同实际耐磨合金接触线。

- 选定流：铜合金铁路接触线
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

###### 完整铁路牵引变压器 （`transformer`）

投运范围含变压器时，保留实际额定值、电压、冷却系统和制造商边界；其制造属于独立上游设备数据集。

- 选定流：完整铁路牵引变压器
- 流属性/单位：物品数量 / item
- 数量规则：统计本次交付实际消耗的可归属台数，包括验收前损坏、报废并被替换的台数。核对总收货加可归属期初库存，减经核实退回或转移及期末可复用库存；设备位号和安装验收台数另行保留。不按容量推定默认质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：控制与安全系统安装 （`control`）

铺设各电缆/管槽，按位号安装机柜及各信号/传感器，配置并测试实际接口。安装的光纤、转辙机与通信天线须独立行。

#### 输入

##### 产品流

###### 绝缘铜芯铁路控制电缆 （`control_cable`）

记录实际电压、护套、导体截面和实测长度/质量；动力和光纤回路单列。

- 选定流：绝缘铜芯铁路控制电缆
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

###### 完整铁路联锁控制机柜 （`control_cabinet`）

安装时记录硬件/软件范围、机柜标识、接口功能和验收测试；不得替代为一般机车子系统。

- 选定流：完整铁路联锁控制机柜
- 流属性/单位：物品数量 / item
- 数量规则：统计声明交付边界内实际消耗的可归属机柜，包含验收前失效、损坏并被替换的机柜。按cp_materials核对收货、退回或转移及库存变化；安装验收件数另作配置证据保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`hs2-phase2a-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：缆索铁路或缆车固定系统安装 （`cable_system`）

记录实际固定导向结构/支柱/锚固、牵引绳展放/接头、绳轮、驱动安装与测试。架空索道不继承轨枕或道砟。采用实际制造商安装说明与竣工工程量；Zugerberg 为历史更新实例，不是通用配方、质量或寿命。车辆仅在约定完整交付系统包含时作为上游设备计入。

#### 输入

##### 产品流

###### 成品钢制索道牵引钢丝绳 （`haul_rope`）

仅实际安装牵引绳时适用；记录结构、涂层、直径、安装长度、接头和供应方线密度。轨道更新不意味着更换钢丝绳。

- 选定流：成品钢制索道牵引钢丝绳
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`doppelmayr-zugerberg-2023`

###### 完整钢制索道绳轮 （`sheave`）

仅在交付或更换时计入；记录是否含轴承和衬垫，避免重复。

- 选定流：完整钢制索道绳轮
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`doppelmayr-zugerberg-2023`

###### 完整电动索道驱动单元 （`cable_drive`）

仅安装/更换驱动时计入；记录电机、齿轮箱、制动、供电和驱动系统边界。检修耗材采用独立行而非新的完整驱动。

- 选定流：完整电动索道驱动单元
- 流属性/单位：物品数量 / item
- 数量规则：统计全部实际消耗的可归属完整驱动单元，包含验收前被拒收或失效且被替换的单元，扣除经核实退回、转移及剩余可复用库存。实测安装配置和验收台数另行保留；检修耗材仍为独立交换。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`doppelmayr-zugerberg-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：共用现场公用工程及施工残余物 （`site_operation`）

将全部机械、发电机、抽水、运输、焊接、营地和施工测试支持一次归属有关任务。在本过程保留共用总量，不在各安装过程重复加入。外购公用工程、直接资源、废物和排放分别记录。

#### 输入

##### 产品流

###### 柴油 （`diesel`）

仅计实际施工机械、场内运输和发电机柴油；记录牌号、化石/生物份额、消耗及设备任务。该通用物料身份不提供热值或排放因子。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：计量领用量扣除退回与油箱库存增加；体积转质量须实际批次密度与温度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`rics-wlca-2024`

###### 交流电 （`electricity_lv`）

该 UUID 仅适用于实际接入证据支持的中国用户端 <1 kV 电网平均电力。记录施工、焊接、抽水、营地和测试分表；排除交付后运营牵引用电。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 / MJ
- 数量规则：采用归属电表读数，kWh 按 3.6 换算为 MJ；现场发电燃料单列，不将其输出重复作为外购电网电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`rics-wlca-2024`

###### 交流电 （`electricity_mv`）

该 UUID 仅适用于中国用户端 1–35 kV 电网平均电力。不得再次加入同一已计中压进线下游的低压供电。其他地区或电压须采用匹配原子行。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：采用独立接入电表的归属读数，kWh 按 3.6 换算为 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`rics-wlca-2024`

###### 润滑油 （`lubricant`）

此 UUID 仅适用于实际批次已证实匹配的全合成聚α-烯烃（PAO）润滑油、全合成工艺及厂门生产混合供货。记录牌号、基础油组成、供应工艺与门端、更换量及库存；石油来源或通用名称本身不能证明匹配。矿物油、其他基础油配方、润滑脂、液压液和生物降解油须分别核对身份；如完整名称字段与供应证据无法协调，保留该批次身份待核实，不使用此 UUID 代替。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：质量 / kg
- 数量规则：记录归属交付的供货量扣除退货与库存变化；分开记录安装量和施工损耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials`
- 来源：`rics-wlca-2024`

###### 铁路施工场地供应的处理自来水 （`mains_water`）

用于抑尘、养护、清洗或营地时，按用途分开计量实际供水；不得把供应方取水重复作为场地直接资源取水。

- 选定流：铁路施工场地供应的处理自来水
- 流属性/单位：体积 / m3
- 数量规则：采用实测交付水体积；不设每轨道长度默认用水量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`rics-wlca-2024`

##### 废物流

##### 基本流

###### 河水 （`river_water`）

仅场地为施工直接从河流取水时适用；记录国家、河流和实际取水量。该身份为来自水的可更新物质资源，不是自来水、地下水或废水。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：体积 / m3
- 数量规则：河流总取水量与排水和复用水分别计量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`rics-wlca-2024`

#### 输出

##### 产品流

##### 废物流

###### 送回收的钢轨安装切头废料 （`steel_offcut`）

实际分拣钢轨切头跨越场地废物出口时计入；记录牌号和接收回收者，不假定避免生产钢材的抵扣。

- 选定流：送回收的钢轨安装切头废料
- 流属性/单位：质量 / kg
- 数量规则：采用称重外运量，核对钢轨收货、安装、退回和切头质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`rics-wlca-2024`

###### 硬化混凝土施工废料 （`concrete_waste`）

仅计分拣的硬化混凝土；退回鲜混凝土、污泥和拆除旧轨道为独立物流。

- 选定流：硬化混凝土施工废料
- 流属性/单位：质量 / kg
- 数量规则：称量实际外运量；记录是否含钢筋及废物去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`rics-wlca-2024`

###### 送处理的收集混凝土冲洗液 （`washout`）

仅计送处理的收集冲洗液；测定组成与接收者。它是废物转移，不是向河流直接排放水。

- 选定流：送处理的收集混凝土冲洗液
- 流属性/单位：体积 / m3
- 数量规则：采用流量或储罐测量收集冲洗液；复用和留存储罐库存单列。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`rics-wlca-2024`

###### 聚乙烯包装膜废物 （`film_waste`）

拆除进场铁路部件包装时，记录分拣聚乙烯膜及去向。实际存在的纸和钢包装仍须独立行。

- 选定流：聚乙烯包装膜废物
- 流属性/单位：质量 / kg
- 数量规则：称量分拣聚乙烯膜外运量，不混入其他聚合物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`rics-wlca-2024`

##### 基本流

###### 二氧化碳（化石源） （`co2`）

仅计有记录的现场化石燃烧即时向空气排放的化石 CO₂，空气子介质未指定。生物 CO₂ 与土地变化排放分开，更具体释放条件须匹配身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用实测，或由实际消耗化石燃料、实测碳含量和氧化比例及可追溯方法推导；不设通用默认因子。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`rics-wlca-2024`

###### 一氧化氮 （`no`）

仅计实际燃烧测量/模型明确物种的一氧化氮，即时空气释放且子介质未指定。以 NO₂ 当量报告的总 NOx 不能确定本行 NO 量。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用分物种排放实测，或场址特定记录因子与实际设备活动；不假定必然发生或物种比例。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`rics-wlca-2024`

###### 即时向空气排放的二氧化氮 （`no2`）

仅计实际明确的 NO₂，CAS 10102-44-0；不是 NO、亚硝酸根、氮气或 N₂O。缺失物种分辨数据保持未知，不记零。所选身份仅用于即时空气排放且子介质未指定；已知城市、高烟囱或其他释放条件须采用对应身份。原件中不一致的四氧化二氮同义词不支持把N₂O₄数量当作NO₂。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用分物种排放测量或经验证的场址特定模型，记录释放条件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`rics-wlca-2024`

###### 颗粒物 (PM10) （`pm10`）

仅计实测/模型确定跨越场地边界的 PM10 即时空气释放，子介质未指定。开挖/运输扬尘和柴油尾气须分开归属活动；不同时加入重叠粒径份额或总悬浮颗粒。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：采用实际活动、控制措施和场址特定采样/模型基准；无通用施工因子。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emissions`
- 来源：`rics-wlca-2024`

### 过程：交付检验与移交 （`handover`）

测量几何与实际安装配置，检查完整性并执行项目要求的静态/联动测试。记录验收文件、缺陷整改、临设撤除和场地恢复。仅采用本交付实际要求的测试，不默认纳入全部 HS2 测试阶段。

#### 输入

##### 产品流

###### 铁路交付测试供应电力 （`test_power`）

仅计未含在施工电表内的独立计量测试电力；声明来源与电压。调试牵引仅在声明交付测试内计入，商业运营排除。

- 选定流：铁路交付测试供应电力
- 流属性/单位：净热值 / MJ
- 数量规则：记录实际测试电表读数，防止与 electricity_lv/electricity_mv 重复。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`hs2-phase2a-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成铁路基础设施交付单元 （`reference_railway`）

一个按声明链程/场址及实际完成配置验收的实体资产单元；不是一吨材料或施工服务。

- 选定流：已完成铁路基础设施交付单元
- 流属性/单位：物品数量 / item
- 数量规则：1 件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery`
- 来源：`cpc3-notes-2025`, `hs2-phase2a-2017`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_task_attribution | all inventory rows | 通过供货单、分表、设备任务小时和废物票据直接归属实际交付以避免分配。保留共用现场总量及核对的归属台账。不能直接归属的共用输入须记录实测因果活动（如实际抽水小时或运输载荷）和所有交付的完整分母；不得按造价或任意等分分配铁路工程。验收前损耗与返工归交付单元。场内挖填复用不是共产品；实际可复用外售物为单独产品，明确质量、去向及负担分配，不是负废物。不自动采用避免生产抵扣。`rics-wlca-2024`。 | rics-wlca-2024 |
| allocation_asset_conservation | all inventory rows | 纳入的施工设备制造及可复用临时构件为独立上游贡献。cp_equipment 记录每个实体资产、有证据的全寿命活动或实际累计使用、历史分配和本项目归属活动。项目份额须介于零和一，跨项目/期间/复用累计份额不得超过一，不在每个项目重置完整制造负担。总活动/使用历史未知须明确审查及敏感性披露，不杜撰寿命或复用次数。本交付安装的永久构件实际供货负担只计一次。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | handover | reference_railway | acceptance_record | 合同边界；场址；配置；链程；实测路线和各轨道长度/数量；轨距；断面；系统范围；验收状态 | 核对竣工测量、合同清单、设备标识、测试和签署验收记录；确认一个交付单元 | item | 每次交付 | 实际施工起点至验收，包括返工 | 声明场址和交付单元 | 每声明的参考流 | 原始票据、校准、竣工测量、批次证书与范围核对 |
| cp_materials | all foreground processes | each supplied material/component | delivery_record | row_id；工程包；批次；供货状态；组成；质量/体积/件数；证书密度或线密度；退货；库存；安装量；损耗；设备位号；失效及替换件数；可归属期初期末库存；经核实退回及转移 | 逐行核对供货票据、校准称量/批次证书及实测安装几何；不同牌号/状态分开；输入件数=可归属总收货+期初库存−经核实退回或转移−期末可复用库存。纳入验收前失效或返工消耗的设备；安装验收件数及实际废物分别核对，不抵消投入制造负担。 | kg; m3; item | 逐批次 | 实际施工起点至验收，包括返工 | 声明场址和交付单元 | 每声明的参考流 | 原始票据、校准、竣工测量、批次证书与范围核对 |
| cp_energy | site_operation; handover | each fuel and electricity connection | meter_record | row_id；设备；任务；时间；读数；燃料批次密度/化石份额；地区；电压；分表；退回/库存变化 | 核对校准电表/油表、领退记录与设备任务日志；焊接、压实、抽水、吊装、运输与测试分别归属 | kg; MJ | 每班及测试 | 实际施工起点至验收，包括返工 | 声明场址和交付单元 | 每声明的参考流 | 原始票据、校准、竣工测量、批次证书与范围核对 |
| cp_water | earthwork; site_operation | mains_water; river_water; drain_return; washout | water_record | row_id；来源；受纳体；量；时间；用途；取水/排水门；处理；液体组成；储罐库存；复用 | 各流独立校准流量计或实测储罐体积；核对采样、去向和取水/排水记录 | m3 | 每日及外运 | 实际施工起点至验收，包括返工 | 声明场址和交付单元 | 每声明的参考流 | 原始票据、校准、竣工测量、批次证书与范围核对 |
| cp_waste | earthwork; site_operation | 按质量计量的分类废物流；不包括由cp_water采集的体积型washout | dispatch_record | row_id；来源工序；分类；组成；含水率；称重；去向；接收者；返用；库存 | 逐质量型物流核对校准地磅票与合法接收记录；危险物、旧拆除料和新施工废料分开。收集washout按cp_water保留实测体积/m3，不强制纳入本kg台账；另行分离的固体作为独立实测质量流，不与外运液体所含固体重复计入。 | kg | 每次外运 | 实际施工起点至验收，包括返工 | 声明场址和交付单元 | 每声明的参考流 | 原始票据、校准、竣工测量、批次证书与范围核对 |
| cp_emissions | site_operation | co2; no; no2; pm10; additional actual species | emission_record | row_id；物种/CAS；介质/子介质；即时/长期；活动；方法；因子来源；浓度；流率；持续时间；控制；不确定性 | 采用现场代表性采样或可追溯场址/设备模型与实际活动；记录未测项，禁止把总 NOx 强拆为 NO/NO₂ | kg | 按事件/代表性工况 | 实际施工起点至验收，包括返工 | 声明场址和交付单元 | 每声明的参考流 | 原始票据、校准、竣工测量、批次证书与范围核对 |
| cp_equipment | all foreground processes | equipment and reusable temporary component burdens | asset_ledger | 资产标识；制造负担边界；累计活动/使用证据；项目活动；历史与本次份额；剩余份额；临设处置 | 核对同一资产跨项目活动台账及供应方证据，独立检查累计份额不超过一；未知值标记审查 | item; h | 每次使用/交付 | 实际施工起点至验收，包括返工 | 声明场址和交付单元 | 每声明的参考流 | 原始票据、校准、竣工测量、批次证书与范围核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| same_delivery | all inventory rows | 各交换汇总同一声明交付单元的归属记录；仅归一到每声明的参考流，保留分子原单位，不使用每公斤或任意长度分母。 | cp_delivery; cp_materials; cp_energy; cp_water; cp_waste; cp_emissions | 每声明的参考流的交换数量 |  |
| delivered_count | reference_railway | 一个完整验收交付 = 1 件；拒收或未完成单元不能计作参考产出。 | cp_delivery | reference_railway | hs2-phase2a-2017 |
| conversion_records | all inventory rows | 质量/体积/线密度/浓度/能量换算采用第4节及实际同批次记录；保留公式、输入、单位、不确定性与来源；不自动创造缺失关系。 | cp_materials; cp_energy; cp_water; cp_emissions | 可追溯转换的原单位数量 |  |
| shared_asset_share | all inventory rows | 采用第7节的实测因果活动和资产台账归属；跨项目累计制造份额≤1；分母未知保持审查。 | cp_equipment; cp_delivery | 本交付归属负担及覆盖披露 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | 核对物质/组成、状态、工艺、地理、电压、环境介质、主属性、单位及中文官方名称；缺失身份不能声称已解析 | 供货证书、公共身份与原始前景记录 |
| completeness | all foreground processes | 逐工程包核对所有实际材料、设备、能耗、临设、物流、损耗、废物、环境释放与测试；区分不存在、未测与排除 | 竣工工程量表及缺口台账 |
| time_site | all inventory rows | 用实际施工和验收日期、同场址工程包、真实能源/供应方代表性；历史资料仅定性实例 | 票据时间、场址、数据集覆盖 |
| uncertainty | all inventory rows | 每个测量、换算、分配和背景链接记录不确定性/局限；不以无数据替换为零或行业默认 | 校准、采样设计、证书及敏感性分析 |
| environment | site_operation; earthwork | 施工噪声、振动、生态和土地扰动保留现场环境证据；dB 不是可直接相加的物质交换或声能，无有效流属性关系时单独报告 | 实际监测、时间/位置及现场环境计划 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_delivery | all inventory rows | 确认参考产品名等于 reference_railway；参考量为 1 item；cp_delivery 的实测几何、配置、验收与所有清单分母一致。 |  |
| validate_route | all inventory rows | 依据实际工程判定条件性过程；有砟/无砟、架空/第三轨、钢轮/缆索须与供货和工序一致，不为检查便利缩小类别。 | hs2-phase1-2013, hs2-phase2a-2017 |
| validate_balance | all inventory rows | 核对土方开挖/复用/进口/外运/库存与安装材料/损耗；同一设备/构件和电表累计份额守恒且不重复。 |  |
| validate_emissions | all inventory rows | 基础流须实测或场址适用模型，并与真实物种、化石/生物及介质相符；NO、NO₂、N₂O、扬尘粒径、资源水和废液不能互换。 |  |
| validate_coverage | all inventory rows | 缺失工序/身份/测量/背景链接及不支持换算须显式标记不完整；机器检查通过不代表科学或工程验收批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 场址特定铁路基础设施施工至交付前景数据包 |
| downstream_use | 供明确配置/几何的铁路实体比较或链接独立上下游数据集 |
| allowed_use | 实际界定交付的现场清单；已匹配制造、运输、处置和测试贡献的明确扩展 |
| excluded_use | 默认全寿命/完整 cradle-to-gate；运输服务；未经界定的每公里结果；默认寿命、负担抵扣或合规批准 |
| required_metadata | PCR版本；参考限定信息；实际合同/竣工/验收；工序/路线；工程量；来源/单位；分配；背景门；时空范围 |
| required_quality_disclosure | 缺失身份/测量/工序；独立背景覆盖；不确定性；科学审查状态；旧资料限用；实际维护/拆除是否覆盖 |
| update_trigger | 交付边界、设计/几何、设备/轨道路线、能源来源、施工方法、测试、供应方或背景数据改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用于 |
| --- | --- | --- | --- |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, p.279 (53212 and adjacent bridge/tunnel scope). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于工程实体身份，不是 LCA 边界、工程设计或数值依据。 |
| hs2-phase1-2013 | official_guidance | HS2 Ltd, Phase One Environmental Statement Volume 1, November 2013, pp.111–112, §6.22. https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/259491/Volume_1_Introduction_to_the_Environmental_Statement_and_the_Proposed_Scheme.pdf | 仅为历史有砟/无砟定性工序；不采用轨道尺寸、载荷、数量或当前合规假定。 |
| hs2-phase2a-2017 | official_guidance | HS2 Ltd, Phase 2a Environmental Statement Volume 1, July 2017, p.87 §6.11.5–8; pp.106–109 §§6.24–6.28. https://assets.publishing.service.gov.uk/media/5a82aed6ed915d74e62371a8/E8_Volume_1_WEB.pdf | 历史土方、无砟、供电、控制及调试实例；拟议方案不是实际前景记录或通用轨道选择。 |
| doppelmayr-zugerberg-2023 | literature | Doppelmayr/Garaventa, Zugerberg funicular undergoes eco-friendly refurbishment, 18 January 2023, p.1. https://www.doppelmayr.com/wp-content/uploads/2023/01/2023_01_MM_80-FUL_Zugerberg-Bahn_EN.pdf | 制造商历史项目实例，用于区分轨道/设备及临时材料索道运输。其数量、长度、容量与历史不是类别默认；其他索道须本身安装证据。 |
| rics-wlca-2024 | standard | RICS, Whole life carbon assessment for the built environment, 2nd ed. September 2023, version 3 August 2024, printed p.80 §5.1.4. https://www.rics.org/content/dam/ricsglobal/documents/standards/Whole_life_carbon_assessment_PS_Sept23.pdf. | 定性分开施工活动、临设及废物。碳核算指南不证明完整多影响 LCI 或排放因子；不采用通用比例或持续时间。 |
