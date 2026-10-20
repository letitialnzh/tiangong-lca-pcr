---
pcr_id: pcr.constructions-and-construction-services.construction-services.existing-multi-dwelling-building-prefabricated-envelope-heat-pump-heat-recovery-ventilation-and-rooftop-photovoltaic-integrated-energy-retrofit-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: reviewed
sync_with: pcr.en-US.md
---

# 既有多户住宅预制围护、热泵、热回收通风与屋顶光伏综合节能改造服务

## 1. 范围与适用性

本类别是对已指明、保留且至少三户的既有公寓进行联合验收的综合节能改造干预。工厂预制保温立面窗及屋面，与热泵供暖热水、热回收通风、屋顶光伏共同构成范围；产出是既有建筑的已完成服务，不是新制造建筑或未来节能承诺。记录实际在住撤离、保留更换服务及胜任者的项目专用设计。

本类别不用于新建重建、扩面积加层增户、孤立立面屋面暖通光伏供应维护、未安装模块或后续能源运行。调查选择拆除接口、完整上游整包、真实供应商资源、调试复测缺陷关闭均属干预。历史 Annex50/Hameln 证据说明路线，不提供通用目标或年运行结果。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.existing-multi-dwelling-building-prefabricated-envelope-heat-pump-heat-recovery-ventilation-and-rooftop-photovoltaic-integrated-energy-retrofit-services |
| classification_refs | CPC:3.0:54112 (narrower) |
| covered_products | 联合验收的既有公寓整栋预制围护热泵热回收通风屋顶光伏综合改造 |
| excluded_products | 新整栋建筑；重建扩建；增户加层；孤立工种设备；后续运行 |
| representative_product | 已完成验收的既有多户住宅综合节能改造服务 |
| production_route | 调查设计 → 选择拆除 → 预制整包交货现场集成 → 综合测试复测缺陷关闭 → 整栋改造签署移交 |
| market_state | 保留结构上已安装联合验收的建筑改造服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成验收的既有多户住宅综合节能改造服务 |
| How much | 1 item |
| How well | 全部指定综合改造完成；满足实际批准结构围护热湿防火设备接口标准及规定调试测试，缺陷关闭，并适用业主主管方签收 |
| How long or cycle | 实际项目从调查设计至最终联合移交；报告各阶段期间及全部尝试，不按未来运行能源寿命归一化 |
| reference_flow_link | `accepted_retrofit` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成验收的既有多户住宅综合节能改造服务 |
| reference_flow_property | 数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | item |
| required_qualifiers | 唯一既有物理建筑 ID; 至少三户及实际户数; 保留结构及在住撤离状态; 实测面积及约定; 保留更换表; 实际预制立面窗屋面整包规格; 热泵通风光伏安装配置; 实际批准项目目标及司法辖区; 调查兼容证据; 总测试能源来源及计量边界; 制冷剂物种预充补充归宿; 事件阶段期间覆盖; 测试复测缺陷关闭; 最终签收日期 |

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| `m_reference` | accepted_retrofit | 数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 一参考单位是一栋物理建筑的完整验收改造。N>0 按唯一 ID 计，至少三户且不增户；面积户数配置仅为可比性限定，不作分母或等价输出数量。 |
| `m_native` | all inventory rows | 实际物理属性 | 实际原生单位 | 保留实际数量面积长度体积质量供应及匹配退回单位。独立质量换算须 SKU、物态、含水基准、密度值单位、温度值单位及来源和不确定性。质量核对与原生物理视图不可叠加。实际电能时间供应商单位须独立核实支持，不得替用低高位热值或数量。 |
| `m_fates` | fuel_species; refrigerant_releases; support_releases; installation_releases; preparation_releases | 质量 | kg | 使用实际物种与接收介质。实测物种质量、适配活动物种因子、实际整流体释放乘有据成分归宿三者择适用者。完整物种因子已含其声明基准，不得再次乘成分归宿；整流体核对不可叠加。 |
| `count_unit_alias` | 存在时的计数交换 | Count | item | 本 PCR 的显示别名 item 表示已核实的物品数量单位组参考单位 Item(s)，系数为 1。具体数据集须保留实际参考单位身份；此书写别名不建立质量、面积或服务之间的等价关系。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已指明合格既有保留公寓、实际几何结构居住服务调查及批准综合改造设计；识别历史资产及实际接口 |
| starting_condition_role | existing_asset_intervention_start |
| product_classification_scope | CPC:3.0:54112; narrower integrated retrofit subset |
| recursive_input_rule | 同类分包服务仅以有界实际完成上游服务及物理原生数量完整范围进入；其投入不含本前景项目，并解决节点资源重叠 |
| upstream_dataset_requirement | 每外购整包服务完整覆盖适用制造材料能源运输资产服务交付损失废物终结；缺口明确采集 |
| disclosure | 保留基线、全部阶段期间、实际设计测试门、供应商资产覆盖、库存约定、实际制冷剂总电力归宿、排除及不确定性 |

### 边界规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_start` | prepare | 始于已指明的至少三户合格既有公寓，具备实际结构居住服务调查及批准改造设计。保留基线制造与后续运行在本干预外；实际扰动拆除增量作业在内。 | `iea-annex50-design-guide-2011`; `iea-annex50-factsheet-2014`; `energiesprong-hameln-completed-2021` |
| `b_integrated` | integrate | 服务承担已安装围护锚固、气候水湿防火连续性及热泵供暖热水、通风分配、屋顶光伏、电气保护控制兼容。工厂整包及有界供应商保留完整上游覆盖；已含 BOM 与预充物不得重购。 | `iea-annex50-design-guide-2011`; `iea-annex50-factsheet-2014`; `energiesprong-hameln-completed-2021` |
| `b_periods` | all inventory rows | 按实际事件、阶段、报告期间索引调查设计、选择拆除、安装、调试复测及最终验收。记录全部相关期间期初期末库存及资产维护更换终止；未来运行能源制冷剂或避免影响情景不得进入施工参考。 |  |
| `b_support` | support | prepare、integrate、accept 共用起重脚手架平台工具检测仪及临时热水电，须有唯一资产供应商事件责任方及覆盖所有消费者的完整寿命服务边界。直接及供应商支付运输测试临供备件仅计一次；披露实际资源覆盖、不确定性及缺口。 |  |
| `b_excluded` | accepted_retrofit | 排除新楼重建、扩建增户加层、单独立面屋面暖通维护及未安装模块。历史示范的性能阈值、寿命、面板尺寸、户数或传感器数量不作通用规定。施工验收不能证明年运行净零。 | `iea-annex50-design-guide-2011`; `iea-annex50-factsheet-2014`; `energiesprong-hameln-completed-2021` |
| `boundary_atomic_completion` | 所有过程 | 本节的采集要求是必须执行的采集与适用性指令，不是聚合清单交换。完成前景数据集前，必须为每一种实际产品、废物流、物质及环境子区室建立独立原子流卡／交换。保留全部实际事件、上游负荷、退回及原生单位；所链接公式应按每个兼容身份分别执行。环境资源提取记为输入，环境释放记为输出。不得相加不同原生单位、用一个 UUID 代表整个采集池、将缺记录解释为零，或与已有具体卡重复计入。保留宿主的文件性接口仅传递状态，不形成新采购资产。适用成员未明确或未有证据证明不存在时，定量清单仍不完整；非强制筛查提示不能补造数量或化学组成。 |  |

### 条件性清单补全要求

以下标识符表示采集池或文件性状态台账。一个池可能有零个、一个或多个实际成员。须依据真实记录判断适用性，并为每个成员保留原有数量方法和采集协议；只有兼容的数量才能共同核对。下列原有可选筛查区间仅作为暂定复核提示，不得强加于不同材料或混合采集池。

#### 采集要求：项目调查与综合改造设计服务 (`survey_design`)

过程／待建立交换的方向／类型：`prepare` / `inputs` / `product`.

调查已指明的保留建筑、几何、基础墙体屋面承载、热桥、潮湿、现有气流路径、防火分区与服务保留更换表。制造前记录住户安排和项目批准的专用目标。

- 采集对象：项目调查与综合改造设计服务
- 流属性/单位：实际原生服务属性 / 实际原生单位
- 数量规则：按经核实的原生单位记录实际完成的调查设计交付物及供应商完整资源与上游范围；归属本项目的数量只除以 N 一次。费用或工时均不自动等于一项服务。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare`

范围证据需求：实际调查设计交付量、供应商原生成果及覆盖依赖建筑几何状态和在住施工安排；须签署范围与一手物理成果，不用费用工时换项数。现有历史路线证据未建立可迁移数值区间；通过 cp_prepare 保留实际观测及不确定性。

#### 采集要求：实际拆除并移交再用的历史部件 (`historic_reusable`)

过程／待建立交换的方向／类型：`prepare` / `outputs` / `product`.

保留建筑是既有起始资产。历史窗、锅炉、屋面等只在实际拆除移交时出界；保留结构不作为新制造投入。

- 采集对象：实际拆除并移交再用的历史部件
- 流属性/单位：实际原生数量、面积、长度、体积或质量 / 对应原生单位
- 数量规则：逐项记录实际可用的拆回部件、原生数量及去向，再除以 N；不得抵扣新材料采购，不自动获得避免生产信用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare`

范围证据需求：实际拆除可用部件逐 SKU 接收方的数量品质依赖保留更换表；须实测原生移交及接收，不预设回收率。现有历史路线证据未建立可迁移数值区间；通过 cp_prepare 保留实际观测及不确定性。

#### 采集要求：拆除历史材料及危险内容物的实际处置移交 (`historic_waste`)

过程／待建立交换的方向／类型：`prepare` / `outputs` / `waste`.

仅在实际存在时归属残渣及石棉、铅等危险发现，包括封控与合格处置；不得预设成分或零扰动。旧制冷剂在 integrate/cp_refrigerant 中仅记账一次。拆相应旧暖通设备前须完成实际规定的隔离、冷媒回收及回路记录交接；记账节点不得倒置物理时序或安全准入。逐事件资源唯一责任方，避免重复旧流体废物。

- 采集对象：拆除历史材料及危险内容物的实际处置移交
- 流属性/单位：质量 / kg
- 数量规则：按材料、危险性、干湿状态和去向称量实际分类历史废物，保留处理及转运证据，每股流仅按 N 归一化一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepare`

范围证据需求：历史分类废物质量危险成分处理依赖调查及实际拆除；须称重票及合格接收记录，不用单位面积拆除因子。现有历史路线证据未建立可迁移数值区间；通过 cp_prepare 保留实际观测及不确定性。

#### 采集要求：按实际物种和接收介质计量的准备作业排放 (`preparation_releases`)

过程／待建立交换的方向／类型：`prepare` / `outputs` / `elementary`.

记录开拆造成的实际粉尘等释放，与封装残渣分开。泛称粉尘或危险物的标签不能提供物种 UUID 或排放量。

- 采集对象：按实际物种和接收介质计量的准备作业排放
- 流属性/单位：质量 / kg
- 数量规则：按实测质量或适配活动因子记录每种实际污染物或粒径及空气、水、土壤接收区室，再除以 N；成分不明属于数据缺口。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_prepare`

范围证据需求：实际释放物种粒径及接收介质质量依赖具体开拆事件；须实测或适用事件因子及不确定性，不用泛称粉尘百分比。现有历史路线证据未建立可迁移数值区间；通过 cp_prepare 保留实际观测及不确定性。

#### 采集要求：单独供应的计数安装部件 (`loose_count`)

过程／待建立交换的方向／类型：`integrate` / `inputs` / `product`.

识别实际需要的锚固、泛水、气密防候防火接口、分配、电气保护、控制及连接件。数量、长度、体积、质量是独立台账，不是同一采购的可叠加视图。

- 采集对象：单独供应的计数安装部件
- 流属性/单位：数量 / item
- 数量规则：仅对所有整包及供应商范围以外的实际追加部件，按 SKU 原生单位计算 S/N；废弃和失败安装保留在 S 内，不得以安装活动替代外部供应。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际单供支承控制连接件数依赖整包未覆盖竣工材料表；须原生 SKU 库存及匹配退回，不重计整包已含件。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

#### 采集要求：单独供应的管线及线性接缝材料 (`loose_length`)

过程／待建立交换的方向／类型：`integrate` / `inputs` / `product`.

识别实际需要的锚固、泛水、气密防候防火接口、分配、电气保护、控制及连接件。数量、长度、体积、质量是独立台账，不是同一采购的可叠加视图。

- 采集对象：单独供应的管线及线性接缝材料
- 流属性/单位：长度 / m
- 数量规则：仅对所有整包及供应商范围以外的实际追加部件，按 SKU 原生单位计算 S/N；废弃和失败安装保留在 S 内，不得以安装活动替代外部供应。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际单供管线接缝长度及边角废物依赖实测走线；须原生实测供应退回及内部裁切记录，不只用安装米数。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

#### 采集要求：单独供应的按体积计量安装材料 (`loose_volume`)

过程／待建立交换的方向／类型：`integrate` / `inputs` / `product`.

识别实际需要的锚固、泛水、气密防候防火接口、分配、电气保护、控制及连接件。数量、长度、体积、质量是独立台账，不是同一采购的可叠加视图。

- 采集对象：单独供应的按体积计量安装材料
- 流属性/单位：体积 / m3
- 数量规则：仅对所有整包及供应商范围以外的实际追加部件，按 SKU 原生单位计算 S/N；废弃和失败安装保留在 S 内，不得以安装活动替代外部供应。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际按体积材料物态可用退回依赖实际 SKU 包装安装；须原生收货库存，仅有理由独立换算时取得密度含水温度。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

#### 采集要求：单独供应的按质量计量紧固件密封料及材料 (`loose_mass`)

过程／待建立交换的方向／类型：`integrate` / `inputs` / `product`.

识别实际需要的锚固、泛水、气密防候防火接口、分配、电气保护、控制及连接件。数量、长度、体积、质量是独立台账，不是同一采购的可叠加视图。

- 采集对象：单独供应的按质量计量紧固件密封料及材料
- 流属性/单位：质量 / kg
- 数量规则：仅对所有整包及供应商范围以外的实际追加部件，按 SKU 原生单位计算 S/N；废弃和失败安装保留在 S 内，不得以安装活动替代外部供应。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际单供紧固密封材料质量皮重固化残余依赖未覆盖 SKU 范围；须库存归宿实测，不用每立面通用千克规则。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

#### 采集要求：实际单独供应的现场制冷剂 (`field_refrigerant`)

过程／待建立交换的方向／类型：`integrate` / `inputs` / `product`.

记录实际设备回路 ID、制冷剂规格及工厂充注量、钢瓶期初期末、外购与可用退回、实测转充及回收量。不设默认泄漏率或未来使用期补充量。

- 采集对象：实际单独供应的现场制冷剂
- 流属性/单位：质量 / kg
- 数量规则：仅对现场补充或更换按实际物种混合物库存台账计算 S/N；工厂预充物留在设备投入内，不再次采购。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：实际现场补充更换质量依赖指定回路充注记录；须钢瓶扣皮库存转充，不重购工厂预充，不设泄漏比例。现有历史路线证据未建立可迁移数值区间；通过 cp_refrigerant 保留实际观测及不确定性。

#### 采集要求：新整包及安装材料的可用外退 (`installation_returns`)

过程／待建立交换的方向／类型：`integrate` / `outputs` / `product`.

本集合按不同原生单位实例化，不强迫整包或液体转成质量；内部重发及返回返工件是转移，不是新采购。

- 采集对象：新整包及安装材料的可用外退
- 流属性/单位：实际原生数量、面积、长度、体积或质量 / 对应原生单位
- 数量规则：按精确匹配的投入 SKU、单位、状态及所有权记录实际可用外退。采用总供应加本出口，或仅消耗供应减一次本退回，二者选一；期末库存不等于退回。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际逐匹配 SKU 原生单位状态的可用外退量依赖接收认可；须转移收据，不用通用退回率，不将期末当退回。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

#### 采集要求：回收可用制冷剂向指定接收方移交 (`recovered_refrigerant`)

过程／待建立交换的方向／类型：`integrate` / `outputs` / `product`.

区分历史封存充注物与新补充物来源；只有实际可用状态及接收方证据支持时，封存回收物才属于产品。

- 采集对象：回收可用制冷剂向指定接收方移交
- 流属性/单位：质量 / kg
- 数量规则：计量每股实际回收制冷剂混合物的移交质量、品质、接收方及原回路，再除以 N；不得抵扣原生制冷剂。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：实际可用回收质量品质及历史新来源依赖专用回路回收接收证据；须钢瓶皮重接收，不设通用回收效率。现有历史路线证据未建立可迁移数值区间；通过 cp_refrigerant 保留实际观测及不确定性。

#### 采集要求：封存废制冷剂送实际处理 (`contained_refrigerant_waste`)

过程／待建立交换的方向／类型：`integrate` / `outputs` / `waste`.

包括实际历史及新流体废物并区分来源；泛称制冷剂混合物不是基本排放。

- 采集对象：封存废制冷剂送实际处理
- 流属性/单位：质量 / kg
- 数量规则：按扣皮后的实际封存不可再用流体质量、成分及处理去向计量，与可用回收和失控释放分开，再按 N 归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：实际封存不可用制冷剂质量成分去向依赖处理移交；须扣皮封存处理记录，与可用回收失控释放分开。现有历史路线证据未建立可迁移数值区间；通过 cp_refrigerant 保留实际观测及不确定性。

#### 采集要求：新安装报废件包装及残余送处理 (`installation_waste`)

过程／待建立交换的方向／类型：`integrate` / `outputs` / `waste`.

将 integrate 不合格安装连回其产生尝试和返工事件；原地修复不得虚造废物出口。本卡不含封存废制冷剂。

- 采集对象：新安装报废件包装及残余送处理
- 流属性/单位：质量 / kg
- 数量规则：称量分类后的未退回报废件、受损模块、边角料、包装、未用固化料及实际去向，再除以 N，并保留上游供应负荷。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际未退安装报废包装边角质量返工出口依赖每次失败尝试；须分类重量处理收据，不设通用模块损失率。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

#### 采集要求：实际制冷剂物种向记录接收介质释放 (`refrigerant_releases`)

过程／待建立交换的方向／类型：`integrate` / `outputs` / `elementary`.

整流体损失是不可叠加的核对视图，不额外建立基本交换；SDS 危害陈述及工厂预充量不能证明释放。

- 采集对象：实际制冷剂物种向记录接收介质释放
- 流属性/单位：质量 / kg
- 数量规则：每一实际物种与接收介质采用实测物种质量、有效适配活动量乘物种因子，或实测整流体释放量乘有据质量成分与归宿比例，再按 N 归一化；完整物种因子不得再次乘成分归宿。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_refrigerant`

范围证据需求：实际制冷剂物种接收介质质量须事件实测或适配活动因子，或实测整流体损失及有据混合物归宿；须上述操作数，不用默认泄漏率。现有历史路线证据未建立可迁移数值区间；通过 cp_refrigerant 保留实际观测及不确定性。

#### 采集要求：制冷剂以外的实际安装物种释放 (`installation_releases`)

过程／待建立交换的方向／类型：`integrate` / `outputs` / `elementary`.

不得把外购整份密封料、回收流体或封存残余当排放。排放物种质量与不可叠加的母流体核对记录分开。

- 采集对象：制冷剂以外的实际安装物种释放
- 流属性/单位：质量 / kg
- 数量规则：按实测质量或有效适配活动因子、成分、归宿记录每种实际密封料清洗剂成分或颗粒释放及接收介质，再按 N 归一化。不设默认 VOC 比例。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packages`

范围证据需求：实际非制冷剂成分颗粒释放依赖所用配方事件归宿；须物种介质实测或有效因子成分归宿，不以 SDS 危害限值作排放率。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

#### 采集要求：实际完成的有界专业作业与临时服务 (`provider_work`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

仅归属一次实际在住建筑临时供暖热水、保护及吊装脚手架安装检测服务。发票费用或工时不能单独转成数量；供应商付费燃料和测试不是免费资源。

- 采集对象：实际完成的有界专业作业与临时服务
- 流属性/单位：实际原生服务属性 / 实际原生单位
- 数量规则：逐供应商记录实际物理完成成果、原生单位及已含制造材料能源运输资产废物的完整范围，再计算数量/N。逐项采集未覆盖资源；范围缺失阻断最终数据集。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：实际供应商物理完成服务量未覆盖资源依赖签署范围；须一手原生成果完整资源记录，不用费用工时等价。现有历史路线证据未建立可迁移数值区间；通过 cp_provider 保留实际观测及不确定性。

#### 采集要求：整包设备退回废物的实际货运服务 (`freight`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

包括实际交货、设备进退场、可用外退及废物运输；对共载按物理依据分配，空载段在服务数据集或明确车辆活动中覆盖，不为其虚造正货重。

- 采集对象：整包设备退回废物的实际货运服务
- 流属性/单位：质量*距离 / kg*km
- 数量规则：逐运输段求归属实际 load_kg 乘 distance_km 之和，再除以 N；保留方式、载荷、路线、空返覆盖及上游运输范围。整包或供应商数据已含路段不得重复。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_freight`

范围证据需求：实际 kg*km 空返覆盖依赖逐实测载荷路线方式及共载分配；须逐段载荷距离及服务范围，不设通用运距。现有历史路线证据未建立可迁移数值区间；通过 cp_freight 保留实际观测及不确定性。

#### 采集要求：实际驱动单位的完整生命周期共享资产服务 (`asset_native_service`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

只有核实实际服务身份、单位支持及完整每小时负荷时才可用小时。仅含运行燃料的租赁因子未覆盖资产生命周期；须补齐缺口或保持数据集不完整。

- 采集对象：实际驱动单位的完整生命周期共享资产服务
- 流属性/单位：实际原生服务属性 / 实际原生驱动单位
- 数量规则：仅在经核实的供应商每兼容驱动单位完整生命周期负荷存在时，以相同原生单位记录 job_driver/N；负荷分母为相同驱动单位，并已包含全寿命制造、维护、更换及终结。不得再次除 full_life_driver，也不得再用 asset_equivalent。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

范围证据需求：实际项目驱动及相同原生驱动单位完整负荷须供应商寿命范围支持；须全部消费者历史剩余分母证据，不将小时费用转数量。现有历史路线证据未建立可迁移数值区间；通过 cp_assets 保留实际观测及不确定性。

#### 采集要求：归属施工作业的实际外供燃料 (`fuel_supply`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

包括已覆盖服务范围以外的实际发电机、加热器、移动机械及供应商设备。供应量保留未退回废弃及失控损失；不得推定所有不明缺量都已燃烧。

- 采集对象：归属施工作业的实际外供燃料
- 流属性/单位：实际原生质量或体积 / kg 或 m3
- 数量规则：按实际燃料规格记录上游燃料 S/N；按实际 SKU 保留原生质量或体积供应；仅独立必要换算才需配套密度状态温度及单位证据。外购燃料必须与实测燃烧活动分开。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`

范围证据需求：实际原生燃料供应归宿依赖扣皮库存设备记录；须实测燃烧或审计完整互斥归宿，必要时密度状态温度，不以余额推燃烧。现有历史路线证据未建立可迁移数值区间；通过 cp_fuel 保留实际观测及不确定性。

#### 采集要求：实际临时备件保护料与测试耗材 (`support_materials`)

过程／待建立交换的方向／类型：`support` / `inputs` / `product`.

使用独立原生台账；只有需要独立质量视图时才使用有据密度、物态、含水率及温度，不得把质量视图叠加到原生供应。

- 采集对象：实际临时备件保护料与测试耗材
- 流属性/单位：实际原生数量、面积、长度、体积或质量 / 对应原生单位
- 数量规则：按 SKU 原生单位记录实际追加临时库存 S/N，包括真实测试清洗流体及备件更换；排除已在整包、资产或供应商完整范围内的项目。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supportstock`

范围证据需求：实际临时保护备件测试流体原生数量依赖供应商资产未覆盖范围及 SKU 库存；须实际收货期末退回更换事件证据，不设通用测试耗材率。现有历史路线证据未建立可迁移数值区间；通过 cp_supportstock 保留实际观测及不确定性。

#### 采集要求：实际可用临时材料及未燃燃料外退 (`support_returns`)

过程／待建立交换的方向／类型：`support` / `outputs` / `product`.

与 cp_fuel 核对燃料退回 ID，不建立第二次物理移交；未用物品或燃料不产生避免生产信用。

- 采集对象：实际可用临时材料及未燃燃料外退
- 流属性/单位：实际原生数量、面积、长度、体积或质量 / 对应原生单位
- 数量规则：逐项记录匹配 SKU、燃料规格、原生单位和接收凭证的实际可用外退；总量带出口或仅消耗量减一次，选其一。期末库存及内部回收不是外退。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supportstock`

范围证据需求：实际可用临时燃料外退须匹配原生 SKU 规格接收证据；须真实转移 ID 并核对 cp_fuel，不设默认退回率。现有历史路线证据未建立可迁移数值区间；通过 cp_supportstock 保留实际观测及不确定性。

#### 采集要求：实际临时耗材包装及未燃燃料废物 (`support_waste`)

过程／待建立交换的方向／类型：`support` / `outputs` / `waste`.

回收后留在期末的泄漏物属于期末库存，不能再算废物。封存、回收、处置及失控排放是同一事件下的独立归宿。

- 采集对象：实际临时耗材包装及未燃燃料废物
- 流属性/单位：质量 / kg
- 数量规则：记录实际分类废物质量、状态、来源、处理及运输，包括未燃燃料废物；每一数量仅除以 N 一次。不重复安装废物、封存制冷剂或废水。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supportstock`

范围证据需求：实际临耗包装未燃燃料废物质量处理依赖分类事件归宿；须重量接收方范围，排除回收期末库存及已归属废物。现有历史路线证据未建立可迁移数值区间；通过 cp_supportstock 保留实际观测及不确定性。

#### 采集要求：实际测试冲洗清洁及临时废水移交 (`wastewater`)

过程／待建立交换的方向／类型：`support` / `outputs` / `waste`.

整股废水体积是废物流，不是附加污染物质量，也不能抵减供水。保留系统循环水只有实际跨界才算排放。

- 采集对象：实际测试冲洗清洁及临时废水移交
- 流属性/单位：体积 / m3
- 数量规则：按品质、接收处理及污染计量实际废水，计算数量/N；处理移交与直接入水基本物种分开。外购处理服务未含的真实药剂资源须保留。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：实际冲洗测试清洗废水体积品质接收方依赖事件实测保留循环；须实测排水处理范围，不将供水等同废水。现有历史路线证据未建立可迁移数值区间；通过 cp_water 保留实际观测及不确定性。

#### 采集要求：实际燃烧物种向其接收介质排放 (`fuel_species`)

过程／待建立交换的方向／类型：`support` / `outputs` / `elementary`.

退回、未燃废弃、失控损失及结存与燃烧互斥。总泄漏仅供核对；完整物种因子不得再次乘成分归宿。

- 采集对象：实际燃烧物种向其接收介质排放
- 流属性/单位：质量 / kg
- 数量规则：采用实测燃烧量，或经审计完整且互斥的原生单位归宿并保留不确定性及未知损失调查，再乘适配实际燃料设备的物种因子，或采用实测物种质量；按 N 归一化。不得以余额推定燃烧。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`

范围证据需求：实际燃烧物种质量须实测燃烧或审计完整互斥归宿及实际燃料设备因子，或物种实测；须原始因子单位基准未知损失调查，不假定燃烧比例。现有历史路线证据未建立可迁移数值区间；通过 cp_fuel 保留实际观测及不确定性。

#### 采集要求：实际失控辅助流体或粉尘物种释放 (`support_releases`)

过程／待建立交换的方向／类型：`support` / `outputs` / `elementary`.

仅在实际释放时记录燃料泄漏、清洗剂、测试流体或粉尘；不得从安全说明虚构物种，不得把回收泄漏物列为基本释放。燃烧及制冷剂另卡记录。

- 采集对象：实际失控辅助流体或粉尘物种释放
- 流属性/单位：质量 / kg
- 数量规则：采用实测物种质量、有效适配活动物种因子，或实测整流体释放量乘有据物种质量成分及接收介质归宿，仅除 N 一次。整流体仅为不可叠加核对。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_supportstock`

范围证据需求：实际失控辅助流体粉尘物种接收介质质量须事件实测或有效适配因子成分归宿证据；须真实释放量与回收封存期末分开，不用危害声明。现有历史路线证据未建立可迁移数值区间；通过 cp_supportstock 保留实际观测及不确定性。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | 既有建筑调查与独立选择性拆除 | required | 始终纳入；实际拆除按保留更换表，无拆除项目须明确为零。 | 保留建筑起始状态、调查设计、可独立核算选择拆除及实际来源至可用接收方或合格废物处理移交；有记录的危害清除将保留结构释放给 integrate。本责任在集成前结束，不以最终改造验收为终点，不承担废物处理。 | 每参考流 |
| `integrate` | 预制围护与建筑设备集成 | required | 始终纳入；实际物品台账确定各角色零、一或多个具体交换。 | 将保温立面窗及屋面、热泵热水、热回收通风、屋顶光伏、分配、电气保护及控制与保留结构集成；返工循环在此保留至合格。 | 每参考流 |
| `support` | 项目归属物流临时公用工程及共享资源 | required | 始终纳入；仅记录实际发生资源及逐项有据不存在角色。 | 对 prepare、integrate、accept 中的直接供应商租赁货运、脚手架吊装工具、燃料、总测试电水及归宿设唯一责任方。 | 每参考流 |
| `accept` | 综合调试缺陷关闭与移交 | required | 始终纳入；N 按实际完整物理联合验收计。LCA 数量身份范围缺口阻断数据包定稿，不倒推物理已验收建筑为未验收。 | 实际规定气密通风平衡、热泵水力、电气光伏保护控制测试及业主签收；失败测试返回 integrate，support 资源保留在分子。 | 每参考流 |

### 过程：既有建筑调查与独立选择性拆除 (`prepare`)

保留建筑起始状态、调查设计、可独立核算选择拆除及实际来源至可用接收方或合格废物处理移交；有记录的危害清除将保留结构释放给 integrate。本责任在集成前结束，不以最终改造验收为终点，不承担废物处理。

#### 输入
##### 产品流

#### 输出
##### 产品流

##### 废物流

##### 基本流

### 过程：预制围护与建筑设备集成 (`integrate`)

将保温立面窗及屋面、热泵热水、热回收通风、屋顶光伏、分配、电气保护及控制与保留结构集成；返工循环在此保留至合格。

#### 输入
##### 产品流

###### 工厂预制保温立面与窗整包 (`prefab_facade`)

采用实际供应商生产门、规格、安装配置与整包完整上游范围。SKU 以另一原生单位供应时须实例化该实际单位并核实支持，不得强制换成本卡代表单位。

- 选定流：工厂预制保温立面与窗整包
- 流属性/单位：面积 / m2
- 数量规则：对所供工厂预制保温立面与窗整包按声明原生单位使用实际 SKU 库存台账，仅计算 S/N 一次。声明已含窗、保温、风管、电缆、涂层、支承、控制和预充物；已覆盖成分不得重复采购。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际立面窗整包供应退回面积、开口约定、整包成分安装报废依赖实测立面及实际 SKU；须扣皮原生交货库存退回缺陷记录。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

###### 工厂预制保温屋面整包 (`prefab_roof`)

采用实际供应商生产门、规格、安装配置与整包完整上游范围。SKU 以另一原生单位供应时须实例化该实际单位并核实支持，不得强制换成本卡代表单位。

- 选定流：工厂预制保温屋面整包
- 流属性/单位：面积 / m2
- 数量规则：对所供工厂预制保温屋面整包按声明原生单位使用实际 SKU 库存台账，仅计算 S/N 一次。声明已含窗、保温、风管、电缆、涂层、支承、控制和预充物；已覆盖成分不得重复采购。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际预制屋面供应退回面积及安装净面积搭接约定依赖实测屋面几何实际 SKU；须整包交货库存废物返工证据，不以屋面面积倍增服务。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

###### 工厂成套热泵供暖与热水设备 (`heat_pump`)

采用实际供应商生产门、规格、安装配置与整包完整上游范围。SKU 以另一原生单位供应时须实例化该实际单位并核实支持，不得强制换成本卡代表单位。

- 选定流：工厂成套热泵供暖与热水设备
- 流属性/单位：数量 / item
- 数量规则：对所供工厂成套热泵供暖与热水设备按声明原生单位使用实际 SKU 库存台账，仅计算 S/N 一次。声明已含窗、保温、风管、电缆、涂层、支承、控制和预充物；已覆盖成分不得重复采购。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际热泵热水设备数量配置及内含工厂制冷剂依赖批准设计；须设备 ID、完整整包范围及外部库存，不用每户通用热泵台数。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

###### 工厂成套热回收通风设备 (`hrv`)

采用实际供应商生产门、规格、安装配置与整包完整上游范围。SKU 以另一原生单位供应时须实例化该实际单位并核实支持，不得强制换成本卡代表单位。

- 选定流：工厂成套热回收通风设备
- 流属性/单位：数量 / item
- 数量规则：对所供工厂成套热回收通风设备按声明原生单位使用实际 SKU 库存台账，仅计算 S/N 一次。声明已含窗、保温、风管、电缆、涂层、支承、控制和预充物；已覆盖成分不得重复采购。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际热回收通风设备数量额定配置及所含风管控制边界依赖通风平衡设计；须实际设备整包 ID 及调试范围，不用通用换气或每户数量。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

###### 工厂成套屋顶光伏及变换设备 (`pv_equipment`)

采用实际供应商生产门、规格、安装配置与整包完整上游范围。SKU 以另一原生单位供应时须实例化该实际单位并核实支持，不得强制换成本卡代表单位。

- 选定流：工厂成套屋顶光伏及变换设备
- 流属性/单位：数量 / item
- 数量规则：对所供工厂成套屋顶光伏及变换设备按声明原生单位使用实际 SKU 库存台账，仅计算 S/N 一次。声明已含窗、保温、风管、电缆、涂层、支承、控制和预充物；已覆盖成分不得重复采购。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packages`

范围证据需求：实际光伏逆变保护整包数量及内含面积容量依赖屋面承载电气设计；须实际设备 ID 与整包台账，不将 kWp 或年 kWh 换服务数量。现有历史路线证据未建立可迁移数值区间；通过 cp_packages 保留实际观测及不确定性。

#### 输出
##### 产品流

##### 废物流

##### 基本流

### 过程：项目归属物流临时公用工程及共享资源 (`support`)

对 prepare、integrate、accept 中的直接供应商租赁货运、脚手架吊装工具、燃料、总测试电水及归宿设唯一责任方。

#### 输入
##### 产品流

###### 归属的共享临时资产当量 (`asset_equivalent`)

每台起重机、脚手架、平台、工具、检测仪或临时设备在本视图与 asset_native_service 中选一，不可同时使用。全寿命采用已观察完整寿命，或已观察历史加有据剩余使用、更换、终止及终结，并保留不确定性、敏感性和更新；不得虚造寿命。

- 选定流：归属的共享临时资产当量
- 流属性/单位：数量 / item
- 数量规则：仅当投入是每一资产的完整生命周期负荷时，采用 (job_driver/full_life_driver)/N item；两个驱动量使用同一物理单位。包括所有项目节点期间的制造、维护、更换及终结。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`

范围证据需求：资产当量比例依赖全部消费者同单位项目全寿命驱动记录及已观察有据寿命；须制造维护更换终止终结及不确定性敏感性，不设默认寿命。现有历史路线证据未建立可迁移数值区间；通过 cp_assets 保留实际观测及不确定性。

###### 施工调试的总输入电力 (`electricity_import`)

以可核对计量边界分开电网输入、所用既有现场发电、测试负荷循环及损失。不得用外送或未来运行节能抵扣输入电力。

- 选定流：施工调试的总输入电力
- 流属性/单位：能量 / kWh
- 数量规则：按实际来源与时段计量临设工具、热泵通风水力光伏测试、失败及复测的总输入电量，再将归属 kWh 除以 N。独立核实实际电能支持；低高位热值不能替代。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：来源明确总测试临时输入 kWh、既有发电消耗循环损失须时段计量实际测试 ID 责任；须上述记录，不用净结算未来节能代理。现有历史路线证据未建立可迁移数值区间；通过 cp_power 保留实际观测及不确定性。

###### 实际临时及调试供水 (`water_supply`)

不得把保留水力系统存水当成新制水。按状态品质证据区分补水、回收水、结存和实际排放。

- 选定流：实际临时及调试供水
- 流属性/单位：体积 / m3
- 数量规则：按来源、等级及用途计量外部实际供水，包括冲洗测试清洁；循环为内部活动，不再次供水；数量/N 仅一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：实际外供保留水力存量循环依赖计量边界水等级；须事件读数库存回收证据，不假设每户用水。现有历史路线证据未建立可迁移数值区间；通过 cp_water 保留实际观测及不确定性。

#### 输出
##### 产品流

###### 实际边界上的调试总外送电力 (`electricity_export`)

屋顶光伏设备属于改造整包；本服务仅含移交前实际测试流。年发电量及后续住户需求属于单独运行情景。

- 选定流：实际边界上的调试总外送电力
- 流属性/单位：能量 / kWh
- 数量规则：按时段、来源、接收方计量实际调试外送电力，与输入、内部循环和既有发电基线分开；计算数量/N，声明处理，不自动获得替代信用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：实际调试总外送 kWh 接收方来源依赖时段计量及既有发电基线；须核对边界证据，不假定光伏容量意味发电或避免电网电。现有历史路线证据未建立可迁移数值区间；通过 cp_power 保留实际观测及不确定性。

##### 废物流

##### 基本流

### 过程：综合调试缺陷关闭与移交 (`accept`)

实际规定气密通风平衡、热泵水力、电气光伏保护控制测试及业主签收；失败测试返回 integrate，support 资源保留在分子。

#### 输出
##### 产品流

###### 已完成验收的既有多户住宅综合节能改造服务 (`accepted_retrofit`)

仅在围护热泵通风光伏接口联合最终验收、调试、规定测试复测及缺陷关闭后，计入 N>0 个唯一物理建筑改造 ID。住户、分段、面板、楼层、建筑面积、kWp、kWh 和测试尝试均非额外参考输出。

- 选定流：已完成验收的既有多户住宅综合节能改造服务
- 流属性/单位：数量 / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_accept`

范围证据需求：1 item 仅为参考归一化，不是观测产率区间；采集实际 N 唯一验收建筑 ID、完整安装配置签署门证据，排除未完成建筑及重复测试尝试。现有历史路线证据未建立可迁移数值区间；通过 cp_accept 保留实际观测及不确定性。

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_reference` | all inventory rows | 把成功失败尝试及准备的实际归属资源汇总进项目分子，再按 N 个唯一最终验收建筑改造 ID 仅除一次。复测住户面板共享阶段事件不得增加 N；缺最终验收不得抹去已发生负荷。 |  |
| `a_stock` | all inventory rows | 逐 SKU 原生单位采用 S = 归属期初库存 + 外部扣皮总收货 - 结转期末库存。明确选总量带出口或仅消耗量减一次实际匹配可用外退。内部领用安装不是供应；期末不是外退。未退废物损失保留上游负荷，历史拆除不得负采购。 |  |
| `a_assets` | asset_equivalent; asset_native_service | 一套资产台账覆盖所有消费者项目节点期间及制造维护更换终结。同单位实际 job_driver/full_life_driver 得资产当量 item，再 /N；或实际 job_driver/N 原生服务单位乘相同驱动单位完整生命周期负荷。不得合并视图、在服务视图再次除寿命或归一化两次。已观察寿命或历史加有据剩余更换终止终结须来源、不确定性、敏感性及更新条件。 |  |
| `a_rejects` | integrate | 将失败安装复测连到产生尝试和 integrate 至 integrate 返工循环。采用实际原地修复、可用外退、回收、降级或废物去向。返工增加真实资源但不重复采购或验收输出；未闭合缺陷不得计 N。 |  |
| `a_outlets` | all outputs | 记录可用历史回收、新外退及实际测试外送电的接收方与处理，与目标验收服务区分；不自动抵扣生产燃料能源处置或未来节能。再生含量投入须实际 SKU 覆盖，不从回收出口推定。 |  |

## 8. 前景数据采集计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_prepare` | `prepare` | 起始状态调查及历史拆除 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; survey_id; occupancy_state; dwelling_count; floor_area; floor_area_unit; floor_area_convention; structural_capacity_evidence; thermal_bridge_record; moisture_record; fire_interface_record; air_path_record; retained_replaced_schedule; hazardous_clearance; retained_structure_release_id; integration_recipient; design_target_id; provider_deliverable; native_quantity; native_unit; material_state; hazard; recipient; waste_mass; species; receiving_medium; species_mass; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; uncertainty; source_id | 以胜任者批准设计调查记录合格既有结构服务；按原生单位称量计量实际供应商交付物与拆除物，追踪再用处理接收方；实测物种释放或使用保留原操作数的有效适配因子。 聚合细则：按每参考流汇总归属实际数量；各项目量仅除 N 一次；历史基线不是新供应。 | 实际原生单位; kg | 每一实际事件库存区间及最终关闭 | 全部调查拆除安装测试复测验收期间 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 签署调查设计、校准记录、接收方危险处理证据及直接释放因子适用性。 |
| `cp_packages` | `integrate` | 整包及单供安装库存退回报废释放 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; sku; specification; unit; native_quantity; activity; activity_unit; opening_attributed; external_gross_receipts; container_tare; carried_closing; internal_issue; installed_activity; usable_outward_return; return_receipt; ledger_view; package_scope; precharge_included; provider_scope; reject_id; rework_event; destination; waste_mass; density; density_unit; material_state; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; species; receiving_medium; species_mass; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; uncertainty; source_id | 采用实际采购交货扣皮、期初期末库存、SKU 规格及竣工记录；追加散件前记清整包成分及已覆盖上游范围。每笔可用外退匹配投入，每笔报废返工出口连回尝试。仅在需要时采集实际物种介质及换算操作数。 聚合细则：每参考流逐 SKU 原生单位用 S/N，采用一种声明退回约定；不加总不可叠加视图，不归一化两次。 | item; m2; m; m3; kg | 每一实际事件库存区间及最终关闭 | 全部调查拆除安装测试复测验收期间 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 供应商生产门 BOM 范围、校准数量、退回接收凭证及报废归宿证据。 |
| `cp_refrigerant` | `integrate` | 回路专用制冷剂库存及互斥归宿 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; circuit_id; equipment_id; refrigerant_specification; historic_charge; factory_precharge; cylinder_id; cylinder_tare; opening_attributed; external_receipts; carried_closing; usable_return; topup_measured; circuit_closing; recovered_usable_mass; contained_waste_mass; whole_fluid_release_mass; species; receiving_medium; measured_species_mass; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; recipient; treatment_id; uncertainty; source_id | 称量钢瓶及实际转充并扣皮；区分历史充注、工厂预充设备及现场单供补充。相应 prepare 拆除前完成所需旧设备隔离回收及回路记录交接；本 integrate 台账保留真实事件阶段时间及唯一责任，不假定稍后才实际回收。逐回路事件关联保留量、可用回收、封存废物及实际释放；取得实际物种介质及实测因子成分归宿证据，不设默认泄漏。 聚合细则：每参考流现场库存 S/N，各独立实际归宿/N 仅一次；工厂预充在设备内，整流体核对不叠加物种。 | kg | 每一实际事件库存区间及最终关闭 | 全部调查拆除安装测试复测验收期间 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 校准秤、充注单、接收处理文件、混合物因子基准及不确定性。 |
| `cp_provider` | `support` | 供应商范围及原生成果 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; provider_id; contract_scope; native_result; native_quantity; native_unit; verified_service_id; verified_property_id; verified_unit_group_id; included_materials; included_energy; included_transport; included_assets; included_tests; included_waste; uncovered_resources; overlap_owner; allocation_driver; allocation_source; uncertainty; source_id | 取得供应商实际完成物理成果及完整生命周期上游范围的一手记录，逐直接供应商付费资源核对唯一责任；缺覆盖须采集，不得从费用工时推定。 聚合细则：每参考流归属实际物理服务数量/N 一次，或未覆盖单项资源记自身台账，不重叠。 | 核实的实际原生服务单位 | 每一实际事件库存区间及最终关闭 | 全部调查拆除安装测试复测验收期间 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 签署范围矩阵、物理完成、原生单位支持及缺口闭合。 |
| `cp_freight` | `support` | 实际运输段及空返 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; leg_id; shipment_id; mode; vehicle_id; load_kg; load_mass_unit; distance_km; distance_unit; empty_return_activity; empty_activity_unit; shared_load_driver; driver_unit; provider_scope; included_legs; uncovered_activity; upstream_dataset_scope; uncertainty; source_id | 保留实际载荷行程、路线及交货退回废物接收记录；核对完整运输上游与空返纳入，共载采用兼容物理分配。 聚合细则：每参考流求归属 load_kg*distance_km/N 一次；空段须服务明确覆盖或另记车辆活动，不虚构货运量。 | kg*km | 每一实际事件库存区间及最终关闭 | 全部调查拆除安装测试复测验收期间 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 称重载荷记录、实测路线、供应商范围、换算分配证据。 |
| `cp_assets` | `support` | 全部消费者临时资产生命周期及单一原生视图 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; asset_id; provider_id; consumer_jobs; consumer_nodes; consumer_periods; service_start; service_end; attribution_view; job_driver; driver_unit; full_life_driver; full_life_driver_unit; observed_history; evidenced_remaining_use; manufacture_scope; maintenance_events; replacement_events; termination_event; end_of_life_scope; lifecycle_burden; burden_unit; burden_denominator_unit; verified_service_id; verified_property_id; verified_unit_group_id; evidence_source; uncertainty; sensitivity; update_trigger | 从实际资产供应商记录建立全部消费者完整生命周期台账。落实已观察完整寿命或历史加有据剩余维护更换终止终结；用物理兼容驱动量并核实原生服务支持。逐资产仅选一个数量负荷视图。 聚合细则：每参考流资产当量=(job_driver/full_life_driver)/N 配每资产生命周期负荷，或原生服务=job_driver/N 配相同驱动单位完整负荷；不可合并或再次除。 | item 或核实的实际原生驱动单位 | 每一实际事件库存区间及最终关闭 | 全部消费者项目节点期间的资产完整寿命：已观察历史加有据剩余使用维护更换终止终结 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 完整制造维护更换终结覆盖、分母证据、不确定性敏感性及持续更新要求。 |
| `cp_power` | `support` | 临时及综合测试总电力 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; meter_id; source_id; recipient_id; electricity_origin; baseline_retained_generation; interval_start; interval_end; import_start; import_end; export_start; export_end; meter_multiplier; electricity_unit; circulation; test_load; loss; test_id; failed_test_id; retest_id; attribution_driver; attribution_unit; included_provider_scope; uncertainty; verification_record | 采用来源明确的输入外送计量，不用净结算。记录实际测试失败复测负荷、既有光伏发电机基线及内部循环损失边界；分开生产因子与供应商覆盖。独立核实实际电能属性单位支持。 聚合细则：每参考流实际归属总输入/N 及总外送/N 分开；无未来节能净扣，不重复内部循环。 | kWh | 每一实际事件库存区间及最终关闭 | 全部调查拆除安装测试复测验收期间 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 校准计量时段、电能核对、原生支持及来源供应商责任。 |
| `cp_water` | `support` | 供水水力存水及废水归宿 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; source_id; water_grade; meter_id; opening_contents; external_supply; natural_water_resource_id; natural_abstraction_quantity; natural_abstraction_unit; environment_discharge_quantity; environment_discharge_unit; receiving_water_medium; water_property_id; water_unit_group_id; closing_contents; circulation; recovered_quantity; discharge_quantity; quantity_unit; material_state; temperature; temperature_unit; quality_analysis; receiving_treatment; included_treatment_scope; direct_species; direct_medium; species_mass; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; uncertainty; evidence_id | 按实际事件计量外供水、保留回路存水、回收及废水去向，区分内部循环和品质。有直接释放时另取物种介质证据，不由供水推定排水。 聚合细则：每参考流各独立实际供水废水数量/N 仅一次，封存与直接释放边界分开。 | m3; 存在时实际物种 kg | 每一实际事件库存区间及最终关闭 | 全部调查拆除安装测试复测验收期间 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 校准读数、回路排水核对、处理接收及污染物质量记录。 |
| `cp_fuel` | `support` | 燃料供应实测燃烧及互斥归宿 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; fuel_specification; equipment_id; supplier_scope; native_unit; opening_attributed; external_receipts; tare; carried_closing; usable_return; nonburned_waste; uncontained_loss; total_spill_audit; recovered_closing; measured_burn; complete_fates_audit; unknown_loss_investigation; density; density_unit; density_source; conversion_value; conversion_unit; conversion_source; material_state; moisture; moisture_basis; temperature; temperature_unit; species; receiving_medium; measured_species_mass; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; uncertainty; evidence_id | 取得实际扣皮燃料库存及校准燃烧记录，或经审计完整互斥原生单位归宿；调查未知损失，不把余额叫燃烧。核对退回未燃废弃损失结存及实际设备燃料专用物种因子或实测。原生体积需要独立燃料废物活动质量视图时，须实测密度值单位来源、物态含水温度及 temperature_unit、换算值单位来源；此质量视图与原生台账不可叠加。 聚合细则：每参考流供应 S/N 一次，独立实际物种/N 一次；实测燃烧活动不是另一笔燃料采购，总泄漏核对不可叠加。 | kg 或实际原生燃料单位; 物种 kg | 每一实际事件库存区间及最终关闭 | 全部调查拆除安装测试复测验收期间 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 校准燃烧库存、完整归宿及未知损失审计、因子适用性和不确定性。 |
| `cp_supportstock` | `support` | 临时材料可用退回废物直接释放 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; sku; specification; unit; native_quantity; activity; activity_unit; opening_attributed; external_gross_receipts; container_tare; carried_closing; internal_issue; installed_activity; usable_outward_return; return_receipt; ledger_view; package_scope; precharge_included; provider_scope; reject_id; rework_event; destination; waste_mass; density; density_unit; material_state; moisture; moisture_basis; temperature; temperature_unit; conversion_factor; conversion_unit; conversion_source; species; receiving_medium; species_mass; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; uncertainty; source_id; whole_fluid_release_mass; recovered_closing; total_spill_audit; fuel_return_transfer_id | 核对实际库存原生收货、实际可用外退、备件测试清洗材料、封存废物及直接物种介质归宿。燃料外退未燃废物仅一次引用 cp_fuel 事件 ID；整流体与物种核对视图不可叠加。 聚合细则：每参考流采用一种退回约定计算 S/N，各独立实际废物释放/N 一次；不重复整包供应商资产覆盖。 | 实际原生单位; 物种 kg | 每一实际事件库存区间及最终关闭 | 全部调查拆除安装测试复测验收期间 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 扣皮库存、收货、处理去向及实际物种因子成分归宿证据。 |
| `cp_accept` | `accept` | 唯一最终建筑改造门 | foreground_record | project_id; site_id; building_id; process_id; campaign_id; event_id; phase_id; period_id; time_start; time_end; owner_id; transfer_id; accepted_building_ids; N; dwelling_count; floor_area; floor_area_unit; floor_area_convention; configuration; design_target_id; asbuilt_envelope; anchorage_record; weather_air_water_fire_interfaces; blowerdoor_required_result; airflow_balance; heatpump_hydronic_result; electrical_PV_protection_control_result; failed_test_ids; retest_ids; defect_closure; owner_signoff; authority_signoff_if_applicable; acceptance_date; evidence_id | 以完整综合范围、竣工接口、实际批准测试复测、缺陷关闭和签署移交核对唯一保留建筑 ID。一栋物理建筑的分段只算一个 ID；户数面积约定仅记录可比性。 聚合细则：N 个唯一最终验收物理建筑改造 ID；参考输出为 1 item；支持项目量仅除 N 一次。 | item | 每一实际事件库存区间及最终关闭 | 全部调查拆除安装测试复测验收期间 | 已指明项目场址建筑及归属供应商资产范围 | 每参考流 | 适用的业主主管方签收、竣工图、校准测试、缺陷与重复 ID 闭合。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_normalize` | all inventory rows | 汇总同流同单位同范围的实际归属项目量，含失败尝试，仅除 N 一次；最终服务为 1 item。已每参考的资产供应商数量不得再次归一化。 | actual job quantities; N; cp_accept | 每参考流交换数量 |  |
| `c_stock` | all stock-linked inventory rows | S = 归属期初 + 外部扣皮总收货 - 结转期末；声明总量带出口时用 S 及实际匹配退回出口；仅消耗量减同一可用外退一次。内部安装损失废弃不变成另一采购。 | opening; external receipts; tare; closing; usable outward return; ledger view | 一种退回约定下实际原生供应 |  |
| `c_species` | preparation_releases; refrigerant_releases; installation_releases; fuel_species; support_releases | 选择实测物种质量，或实际兼容活动量 * 有效物种因子，或实测整流体释放 * 有据质量成分 * 接收介质归宿。保留单位基准来源。完整物种因子不再乘成分归宿，流体核对不可叠加。 | measured species mass; actual activity; factor unit/basis/source; whole-fluid release; composition basis/source; fate basis/source | 一次归一化前各接收介质的物种质量 |  |
| `c_asset_views` | asset_equivalent; asset_native_service | 选择 asset_equivalent = (job_driver/full_life_driver)/N item 配每资产完整生命周期负荷，或 asset_native_service = job_driver/N 实际原生单位配相同驱动单位完整负荷。驱动单位须匹配，不合并视图，不额外除寿命或 N。 | job_driver; full_life_driver; driver units; burden denominator; attribution_view; N; cp_assets | 每参考流的一份资产贡献 |  |
| `c_freight` | freight | 将实际货运段的归属 load_kg * distance_km 求和后 /N；空返服务覆盖或车辆活动保持明确。仅以因子 1000 及声明输入单位将 t*km 换为 kg*km。 | load_kg; distance_km; empty-return coverage; actual allocation; N; cp_freight | 每参考流 kg*km 及空载活动覆盖 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope` | all inventory rows | 采用实际项目地域期间保留结构居住配置；仅比较范围户数面积约定相似者，不宣称不同建筑等价。 | 调查实际设计竣工及签署移交 |
| `dq_operands` | all protocols | 保留原操作数单位因子成分归宿基准来源、不确定性校准。逐事件唯一节点责任及转移期间关联；不重复原字段名，不隐藏净扣。 | 一手计量及审计来源范围矩阵 |
| `dq_gaps` | all inventory rows | 逐项记录不存在或计量覆盖；不得以通用零默认替代缺失供应商资产范围、物种、原生单位、范围证据。实际设计供应商制冷剂测试或资产寿命证据变化时更新。 | 完整性、不确定性敏感性及更新记录 |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_environment_water` | water_supply; wastewater; support_releases | 若实际发生直接自然取水或整股环境水体积直排，前景包必须增加独立计量的基本输入输出交换，使用经核实实际水资源接收介质身份及原生体积单位，保留各自事件责任方和原始数量。这不属于外购产品水或送处理废水。整水体积与实际溶解物种质量属于不同且不可叠加的物理物种视图；c_species/m_fates 仅约束指明的物种质量行，不得转换替代环境水体积。实际水资源身份单位支持缺失阻断数据包定稿，不改变物理验收。 |  |
| `v_identity` | all inventory rows | 最终交换须实际 SKU 服务物种去向及经核实具体流属性单位组。拒绝用出厂质量建筑流充当计数改造服务，拒绝未知原生供应商能源支持。逐项跟踪缺失身份；方法目标检查不能证明外部身份核实。 |  |
| `v_gate` | accepted_retrofit | 核对保留建筑调查兼容、实际设计及已安装锚固热湿防火气候接口；实际规定的气密风量平衡热泵水力及电气光伏保护控制测试复测、缺陷关闭及适用业主主管方签收。历史 PHPP2007 目标及年净零陈述不是默认移交测试。 | `iea-annex50-design-guide-2011`; `iea-annex50-factsheet-2014`; `energiesprong-hameln-completed-2021` |
| `v_stock_fates` | all inventory rows | 核对库存外部收货期末及匹配可用外退仅一次。核对工厂预充现场供应回路期末可用回收封存废物及实际物种释放，不重叠来源或质量视图。燃烧量须实测或有经审计完整互斥归宿及未知损失调查，不得余额燃烧。 |  |
| `v_power` | electricity_import; electricity_export | 须来源明确的总输入总外送、既有发电基线、测试循环负荷损失责任及计量核对。拒绝净扣和未来能源信用；施工移交不认证年运行。 |  |
| `v_assets` | support | 核查全部资产消费者节点项目期间、驱动单位、全寿命分母、已观察历史及有据剩余更换终止终结。核查资产当量原生服务互斥、供应商完整上游范围及分子/N 仅一次；缺生命周期范围或更换未明阻断定稿。 |  |
| `v_rework` | integrate; accept | 每一不合格项须产生节点事件及修复退回回收降级处置路径；失败尝试复测保留全部真实资源。不合格或部分调试建筑不得计 N，共享事件不得跨期间重复。 |  |
| `v_completeness` | all inventory rows | 缺失角色不默认零。须有据不存在或实际计量覆盖、来源适用性、供应商完整覆盖及物种归宿。保留实际范围不确定性；缺数值范围证据应披露而非虚构。重要计量验收资源身份缺口均阻断最终数据交付。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景综合建筑改造服务数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在匹配保留建筑配置验收范围内比较实际完成综合改造；本前景包下游过程生命周期模型投影 |
| excluded_use | 新楼制造、孤立工种、未安装设备、年净零运行保证、通用节能或未来避免影响信用 |
| required_metadata | 唯一既有物理建筑 ID; 至少三户及实际户数; 保留结构及在住撤离状态; 实测面积及约定; 保留更换表; 实际预制立面窗屋面整包规格; 热泵通风光伏安装配置; 实际批准项目目标及司法辖区; 调查兼容证据; 总测试能源来源及计量边界; 制冷剂物种预充补充归宿; 事件阶段期间覆盖; 测试复测缺陷关闭; 最终签收日期 |
| required_quality_disclosure | 身份支持缺口、范围排除、实际计量因子来源、库存原生单位退回视图、工厂供应商重复检查、资产完整寿命分配、总电力物种归宿、数值范围局限、不确定性敏感性完整性 |
| update_trigger | 保留状态设计、司法辖区规定验收测试、预制供应商 BOM 预充、制冷剂、供应商范围、实际发电测试边界、资产历史剩余更换终止或新实测范围证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-notes-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类：官方 CPC3.0 解释说明，2025年6月30日，印页282；54112 含多户建筑改造修缮，广于本改造子集。 |
| iea-annex50-design-guide-2011 | handbook | https://www.iea-ebc.org/Data/publications/EBC_Annex_50_Retrofit_Strategies_Design_Guide.pdf | 2011年3月指南：既有公寓整体预制改造；印页61–63气密承载调查、65–66项目目标、71起防火及气密接口。仅历史技术证据，不作现行法规或通用数值标准。 |
| iea-annex50-factsheet-2014 | official_guidance | https://www.iea-ebc.org/Data/publications/EBC_Annex_50_Factsheet.pdf | 2014年两页概况：既有公寓屋面立面暖通太阳能集成概念，以及孤立改造凝结过热风险；不提供定量默认值。 |
| energiesprong-hameln-completed-2021 | literature | https://www.energiesprong.org/news/serial-renovation-germanys-first-pilot-project-completed/ | 2021年3月4日一手完工记录：实际工厂立面窗保温通风电缆安装，配屋顶光伏热泵热回收通风。案例户数传感器数及年净零陈述不作服务参考量或施工验收保证。 |
