---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.chemical-wood-pulp-dissolving-grades
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 桉木溶解浆——镁基酸性亚硫酸盐、ECF、干燥打包浆板

## 1. 范围与适用性
本制造PCR适用于原生去皮桉木木片，经镁基酸性亚硫酸盐蒸煮、洗选、溶解级纯化和ECF漂白、干燥打包为再生纤维素纺织用途的商品浆板。须声明桉树物种或实测物种混合、蒸煮酸基、游离和结合SO2、阶段序列及买方特定质量规格。蒸煮路线未确定时不能使用本方法。钙、钠或铵基、预水解硫酸盐、烧碱、机械、再生或非木浆、TCF漂白及湿浆交付不属本限定子集。
与造纸级浆的功能区别在于受控纤维素纯度和溶解性能，包括α-纤维素、残余半纤维素或木质素、黏度或聚合度、灰分或金属和反应性。仅凭白度不能确定溶解级。采用真实买方限值和测试结果；本PCR不设通用纯度、得率、药耗、能耗或排放默认值。BREF 4.1.1.3区分纺织溶解浆、造纸级浆及高黏度化学特种浆。历史生产者描述支持可行的亚硫酸盐和PHK独立路线，不是当前厂配方。[eu-pulp-bref-2015; sappi-pulp-2015]
## 2. 产品类别识别
| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.chemical-wood-pulp-dissolving-grades |
| classification_refs | CPC 3.0 32111; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 桉木镁基酸性亚硫酸盐ECF溶解级干燥浆板，打包交付，纺织用途 |
| excluded_products | 造纸级浆；其他木种和蒸煮基或路线；TCF；湿浆；再生或非木浆；纤维纺丝；高黏度化学特种浆 |
| representative_product | 具有批次质量证书的原生桉木再生纤维素纺织用溶解浆板 |
| production_route | 去皮桉木木片→镁基酸性亚硫酸盐蒸煮→洗选→碱抽提与已声明ECF漂白→干燥打包；镁和硫化学回收、能量及污水处理纳入 |
| market_state | 厂门干燥打包浆板；含水率实测；包装另计 |

## 3. 参考流
| 字段 | 值 |
| --- | --- |
| What | 合格溶解浆，供再生纤维素纺织生产使用 |
| How much | 1 kg绝干验收浆固形物 |
| How well | 实测达到声明的买方纯度、黏度和溶解适用性规格 |
| How long or cycle | 声明生产期间的一个交付批次；不声称下游耐用寿命 |
| reference_flow_link | pulp_out |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 化学木浆 `fa2fd2c0-9559-4e7f-bd48-282fe6f1a0f7` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 桉木物种及比例；原生去皮；镁基酸性亚硫酸盐；游离和结合SO2及蒸煮程序；ECF阶段与供药或发生路线；买方用途和实测质量；干燥浆板打包；批次净湿质量、干比例、采样与测试；绝干分母；回收及能源边界；污水处理和受体；数据期间、地域、上游数据质量基准 |

数据集元数据或等效产品和过程文件须声明全部限定信息。广义UUID包含木浆子集且无相反路线限制，但不能认证等级、木源、含水率或供应过程。1 kg绝干参考是建模基准，不表示交付湿浆1 kg全为干物质。验收总干固形物可能包含非挥发溶解固体，不自动等于纯α-纤维素；组成和买方纯度另行检测。
## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| dry_basis | pulp_out | Mass | kg | 由cp_pulp实测各批次净湿质量及干比例，计算D = Σ(m_lot × d_lot)，排除包装；所有清单分母为1 kg同一期间验收绝干浆。ISO 638-1:2022公开范围适用于固态浆样，不证明销售批次取样或销售质量；cp_pulp另定义批次采样、拒收及库存核对。 |
| moisture_basis | wood, pulp_out, sludge | Mass | kg | 湿基w = 水质量/湿净质量；d = 1-w。干基u = 水质量/干质量时，d = 1/(1+u)。声明测定基准，不能混用百分数与分数；木料和浆分别实测。 |
| chemical_basis | naoh, h2o2, clo2, chlorate, acid | Mass | kg | 溶液采购质量与有效物质质量分开；有效质量 = 溶液质量×实测质量分数。ClO2物种质量与按Cl2氧化当量报告的有效氯不是同量；原始报告必须注明定义。 |
| energy_basis | electricity_in, electricity_out, heat_out, gas | Energy or Volume | MJ or m3 | 电力kWh乘3.6为MJ；天然气m3须匹配状态。净交付热按蒸汽送出焓流减冷凝返回和明确责任的损耗；MJ属性或蒸汽质量不能证明热基准相容。 |
| water_species_basis | cod, nwater, pwater, aox, nox, n2o | Mass | kg | COD按O2，氮按N，磷按P；AOX保留实际卤素定义。NOx核验是否按NO2当量；N2O与N2O-N区分。不把污染物指标当作干有机物。 |
| final_water_quantity | water_out | Volume | m3 | 数量上water_out表示实际液态H2O组分体积，不自动等于混合废水总体积。最终排口/旁路混合液体积保留用于cp_effluent污染负荷。各时段最终液质量来自实测质量或匹配混合液体积及真实代表性混合液密度；用独立验证的水质量比例确定H2O质量，再以对应兼容的水组分密度/状态/参考约定换为原生H2O体积。不默认水比例1、密度1000kg/m3或组分体积可相加。水比例/密度/数量约定未知时，与受纳身份一并在LCIA前保持未决。 |

## 5. 系统边界
### 边界概化
| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已交付厂门的去皮桉木木片；购入化学品与公用工程 |
| starting_condition_role | 前景制造起点；上游负荷不得视为零 |
| product_classification_scope | CPC 3.0 32111的上述narrower子集 |
| recursive_input_rule | 同类返浆或重处理在统一实物账追踪；内部返料不生成新的上游浆生产。外购溶解浆另链接经限定的供应数据，且不冒充木片起始路线。 |
| upstream_dataset_requirement | 木片须覆盖林业、采伐、去皮削片和实际入厂运输；化学品、外购能源和外部废物处理须有地域、路线、含量、单位和边界匹配的非零背景。 |
| disclosure | 前景为统一厂级制造单元；披露共享设备及其他浆种、冷凝和冷却循环、发生器、回收、供能及污水处理；公开任何上游或外部处理缺口。 |

纳入木片处理、蒸煮、洗选、热碱抽提和已声明ECF阶段、厂内化学品发生、终筛、压榨干燥打包、废液蒸发汽提、MgO/SO2回收与蒸煮酸制备、联产及辅助燃烧、水处理、废水收集处理和残余物处理。排除下游溶解纺丝、买方使用及终结和新增生物炼制产品。销售木质素磺酸盐、乙醇、乙酸或糠醛须有经审查的范围扩展和独立原子产品与过程证据；厂内燃烧有机物不能称为已售联产品。[eu-pulp-bref-2015 §§4.1.1.3, 4.1.2–4.1.5; epa-chemical-pulp-1990 §10.2.3]
分配前保留按阶段解析的干固形物、水、碳、Mg及S实物平衡。浆在纤维线、纯化和干燥间内部交接；稀废液到蒸发或回收，回收化学品返回蒸煮，冷凝液和漂白滤液按真实路径进入回收或处理。每条内部链接两端数量和状态一致。不能自动将富钠漂白废水返回镁回收。溶出木料有机物依据干有机固形物、TOC或碳证据实测，并分别追踪回收燃料、经批准的产品、出水、污泥及空气释放；COD不能替代其质量。[eu-pulp-bref-2015 §§4.1.3–4.1.5]
本声明前景包含污水处理。剩余最终排放只排放一次；原漂白液或冷凝液负荷是内部处理入口，不是另一项环境排放。显式记录旁路和外部处理。不得把污水处理背景与同一厂内处理投入或排放重复组合。场址燃烧和释放证据优先于旧AP-42示例；辅助木质残余物锅炉采用独立EPA锅炉源筛查，并须验证现场方法，不能套用硫酸盐回收或锯材粉尘因子。[eu-pulp-bref-2015 §§4.1.3.4, 4.2.2; epa-chemical-pulp-1990 §§10.2.2–10.2.3]
## 6. 过程清单结构
### 过程图
| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| mill | 一体化镁基亚硫酸盐溶解浆制造 | required | 上述限定路线 | 前景统一单元，保留阶段计量 | 1 kg验收绝干浆 |

实物阶段图：木片接收→蒸煮洗选→碱纯化与已声明ECF→终筛压榨干燥打包。并行分支：废液→蒸发化学回收及联产→酸液循环和内部公用工程；滤液或冷凝液→分流污水处理→最终排口和污泥。统一厂级单元避免干燥或包装重复产生木浆定量参考，且不隐去已知身份。以下每行均为一个外部交换；内部阶段转移保留可计量实物账，不另列外部交换。
### 过程：一体化溶解浆厂（`mill`）
#### 输入
##### 产品流
###### 木片（`wood`）
仅限去皮原生桉木木片。实测树种、湿净质量、干物质比例、污染状态和木片体积。UUID不定义实积或松散堆积体积；背景链接前须记录堆积方式、实测质量/体积关系和供应方参考体积定义。
- 选定流: 木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位: 体积 / m3
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 硫磺，不包括升华的硫磺、沉淀的硫磺和胶质的硫磺（`sulfur`）
实际使用时计入硫磺燃烧炉的新鲜元素硫；排除升华、沉淀及胶质形态。不把内部回收硫当作新鲜购入。
- 选定流: 硫磺，不包括升华的硫磺、沉淀的硫磺和胶质的硫磺 `9ba64dfc-e051-4f47-a478-cb1d0bda0c3a`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 蒸煮酸补充用液态二氧化硫（`so2input`）
条件性外购液态SO2，与燃烧炉生成和回收SO2区分；核验相态、含量和供应方。带有基本流说明的产品候选仍未解决。
- 选定流: 蒸煮酸补充用液态二氧化硫
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 氧化镁（`mgo`）
补充用工业MgO粉体，声明反应活性与纯度；排除药用配制品。新鲜补充量与回收MgO分别称量。广义身份不证明反应活性或供应方数据。
- 选定流: 氧化镁 `49a9ba0a-7192-4e1d-8d10-8706ea407442`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 氢氧化钠（30%）（`naoh`）
仅在证书确认浓度时使用30%氢氧化钠水溶液采购身份。碱抽提分别记录溶液质量和有效NaOH，不把有效质量当溶液质量。其他浓度须采用兼容身份。
- 选定流: 氢氧化钠（30%） `47926319-2558-4b19-bbab-0ff264fca360`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 二氧化氯（`clo2`）
仅用于外部供应ClO2：报告kg ClO2并实测溶液浓度和载水。厂内发生时，ClO2产用只记内部账，清单计入外部前驱物；不得同时计入上游ClO2及其前驱物。
- 选定流: 二氧化氯 `6b2c2edb-25ce-4fc0-8a0a-8e4d0e7e1878`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 过氧化氢（30%）（`h2o2`）
实际使用并经证书确认的30%过氧化氢水溶液；数量为溶液质量。身份浓度不是药耗。不同采购浓度须采用兼容身份。
- 选定流: 过氧化氢（30%） `b21960ac-f3c4-4f00-ba92-527ca1dd5d12`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 漂白用工业气态氧（`oxygen`）
仅在已声明氧阶段实际使用工业气态氧时条件纳入。官方源名为oxygen/氧气，工厂门低温空气分离生产；核实真实供方路线、纯度、牌号、压力/状态、边界、时期及原生气体质量kg参考量。流量表体积换算须实测兼容状态/组成/密度，不假定常态密度。实物供货定位不证明正的阶段用量或供方背景。
- 选定流: 氧气 `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 氯酸钠（`chlorate`）
条件性厂内ClO2发生用外购NaClO3前驱物；实测采购物质或溶液基准和含量。不规定特定ClO2发生配方。
- 选定流: 氯酸钠 `763dbb4e-a338-4348-b2a8-bf07b6bf7b47`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 硫酸（`acid`）
条件性使用身份限定浓度93%至98%的工业硫酸；按实际阶段报告溶液质量和实测含量。稀释水和有效酸应核对且不重复计算。
- 选定流: 硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 甲醇（市场平均）（`methanol`）
仅当声明的ClO2发生器实际使用时计入外购甲醇。选择真实上游生产组合；此采购流不是木料在冷凝液中生成的甲醇。
- 选定流: 甲醇（市场平均） `adbc8430-7937-4ade-b7a5-cb1797dda661`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 交流电（`electricity_in`）
仅用于已核验的1–35 kV用户端电网平均电力。毛购入量与厂内发电、自用和外送分别记录；1 kWh = 3.6 MJ。匹配地域、电压和损耗边界，不能仅匹配UUID。 原始地区CN、1–35kV消费组合交付用户。核实真实供方/地区/年份、电压、电网/损耗边界及MJ参考量；物理交流电不是全球背景，也不是本厂外送发电身份。
- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 / MJ
- 数量规则: 根据cp_energy同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_energy
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 气态天然气（`gas`）
条件性辅助燃烧用管输气态天然气。计量温度、绝对压力、湿干组成及压缩因子须与供方或背景m3对应。次级质量系数不是实测气体密度。
- 选定流: 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 体积 / m3
- 数量规则: 根据cp_energy同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_energy
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 自来水（`water_in`）
仅在实际使用时计入外供处理自来水。自取河水另列基本资源流；循环水不计新鲜购入。 原始供货地区HK、香港水处理厂边界。核实真实供方/流域、处理路线、地区/年份、交付损耗及体积m3参考量兼容性；条件性自来水实物身份不建立全球供方背景。非基准1000 kg/m3筛查描述不是真实实测密度。
- 选定流: 自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位: 体积 / m3
- 数量规则: 根据cp_water同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_water
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 浆包牛皮纸包装纸（`wrap`）
一项真实未涂布牛皮浆包包装纸张，其称量排除在验收浆质量之外。官方广义源名包含印刷、书写和包装纸，明确未涂布制造且未硬限纤维生产路线；核实实际纸张形态、未涂布状态、纤维组成、定量、添加物、供方边界/年份及质量kg基准。源CPC32129表示不含机械木浆的印刷书写纸，须源方针对实际牛皮包装纸澄清分类；不声称全部元数据已验证，不将分类当作工厂配方。已成形纸袋及涂布/混合包装仍不兼容。
- 选定流: 未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 浆包聚丙烯打包带（`strap`）
条件性实际PP带，记录供方材质和形态；绳、纤维、树脂切片和扎带是不同产品。不得把钢带默换为PP。
- 选定流: 浆包聚丙烯打包带
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_material同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_material
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

##### 基本流
###### 河水（`water_resource`）
实际存在时计入可再生水资源中的自取河水；记录流域、国家和取水点。外购自来水不能重复计算其背景已包含的取水。
- 选定流: 河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位: 体积 / m3
- 数量规则: 根据cp_water同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_water
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

#### 输出
##### 产品流
###### 化学木浆（`pulp_out`）
1 千克验收绝干浆固形物，排除包装纸和打包带；另行披露实物交付湿质量与含水率。该广义木浆身份限定为桉木溶解级、镁基酸性亚硫酸盐、ECF及干燥打包浆板；身份本身不证明纯度或背景绝干质量基准相容。
- 选定流: 化学木浆 `fa2fd2c0-9559-4e7f-bd48-282fe6f1a0f7`
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_pulp
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 亚硫酸盐废液联产净外送电力（`electricity_out`）
条件性真实外送，扣除自用和相应交付损耗；毛外送与购入独立报告。电网平均、光伏、秸秆及无关案例电力不是此发电路线。
- 选定流: 亚硫酸盐废液联产净外送电力
- 流属性/单位: 净热值 / MJ
- 数量规则: 根据cp_energy同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_energy
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 亚硫酸盐废液净外送可用蒸汽热量（`heat_out`）
仅在真实从亚硫酸盐废液回收/联产向具名工业制造接收方交付一项净可用蒸汽热时条件纳入。官方制造用热能为工厂门GLO、热载体未指定的产品流，未硬限供热燃料，原生净热值/MJ。该属性属于源量值元数据，不自动等于交付焓：实测蒸汽/返回冷凝液质量、压力、温度、干度和一致焓参考；只扣交付表计尚未包含的损耗。链接前须显式核验供方/接收方边界、时期、真实回收燃料及净热参考量兼容性；不假定效率、热值或替代抵扣。总热值供热及kg蒸汽身份仍不是兼容替代品。
- 选定流: 制造用热能 `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- 流属性/单位: 净热值 / MJ
- 数量规则: 根据cp_energy同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_energy
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

##### 废物流
###### 外运亚硫酸盐浆筛选渣（`reject`）
一项实际独立外运的桉木节块/纤维亚硫酸盐筛选固体拒料，按外运状态称量并实测干比例。官方固体废物注释明确覆盖工业弃置固体，未限制处理路线。记录阶段、形态、残留蒸煮化学品、有机/无机组成、含水率、C/Mg/S、污染、合法废物状态、具名接纳方及供方处理/参考量兼容性；不据此确定通用处置背景。内部重蒸或燃烧拒料仍属内部账，不列外运废物，不替换为食品渣或液态废液。
- 选定流: 固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_waste同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_waste
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 脱水制浆废水处理污泥（`sludge`）
一项实际独立外运的脱水制浆厂初沉/生物混合污泥，按收集状态称量并实测含水率。官方固体废物明确包含污水处理污泥，未限制处理路线。记录初沉/生物来源及混配、固态形态、真实有机物/矿物、C/Mg/S、残余药剂/污染物、干组分、合法废物状态及具名接纳方；链接背景前核实供方处理及外运状态质量kg参考基准。不假定混合比例或市政处理；回流活性污泥为内部账，排放PM和溶解废水另列。
- 选定流: 固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_waste同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_waste
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 木质残余物辅助锅炉底灰（`ash`）
条件性一项真实声明木质残余物辅助锅炉外运底灰；官方灰分源名未硬限煤灰/飞灰或处理。实测外运质量、含水率、真实燃料混合、矿物/未燃碳及污染组成、收集位置、合法状态和接纳方/供方处理/质量基准。飞灰、回收MgO及化学回收排污分别识别；广义灰分定位不提供燃烧因子、假定组成、危废状态或默认处置。
- 选定流: 灰分 `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_waste同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_waste
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 镁基亚硫酸盐回收系统排污固体（`recovery_purge`）
一项实际独立外运的镁基亚硫酸盐化学回收未回收含Mg/S固体排污。官方固体废物覆盖工业弃置固体，未硬限处理；限定真实阶段/形态、化学物种及Mg/S、有机物/碳、含水率、pH/污染、合法状态、具名接纳方和供方处理/外运质量基准。返回酸液制备的回收MgO为内部循环，不是废物或副产品。本排污不是木锅炉灰、液态废液或虚构的MgO替代抵扣。
- 选定流: 固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_waste同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_waste
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

##### 基本流
###### 排入受纳地表水的液态水（`water_out`）
包含的污水处理后实测最终液态排水，独立识别旁路且仅计一次。官方水，CAS7732-18-5，为水体未指定介质的基本排放流，原生体积m3；不是开采资源或水蒸气。该暂定介质定位不确定真实受纳水体：记录具名淡水或海水受纳体、位置、排放路线及温度，LCIA前核实或替换为兼容的具体水体介质身份。不得将已知淡水/海水放宽为未指定，不重复污染负荷，不由排水体积推断蒸发量。 数量上water_out表示实际液态H2O组分体积，不自动等于混合废水总体积。最终排口/旁路混合液体积保留用于cp_effluent污染负荷。各时段最终液质量来自实测质量或匹配混合液体积及真实代表性混合液密度；用独立验证的水质量比例确定H2O质量，再以对应兼容的水组分密度/状态/参考约定换为原生H2O体积。不默认水比例1、密度1000kg/m3或组分体积可相加。水比例/密度/数量约定未知时，与受纳身份一并在LCIA前保持未决。
- 选定流: 水 `a3876d9b-a3e8-4680-861a-4e08642f1392`
- 流属性/单位: 体积 / m3
- 数量规则: 按cp_water实测最终H2O组分质量及兼容水组分密度/状态/参考取得原生V_water；同期原生m3仅除以D一次。匹配排口/旁路混合液体积留作cp_effluent污染负荷。数量兼容未知保持未决，不置零。 条件性流无发生时须有筛查证据。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_water
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 水蒸气（`water_evap`）
干燥或冷却向室外空气排出的净水蒸气，实际位置未记录时子介质未特指；区分木片原带水、反应水和新鲜水消耗。
- 选定流: 水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_water同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_water
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 二氧化碳（生物源）（`co2bio`）
实际废液回收、残余物燃烧或污水处理的木源CO2；即使气候核算口径不计入，也保留在LCI。不得在厂门边界凭空加入林业吸收抵扣。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 二氧化碳（化石源）（`co2fossil`）
实际辅助燃料和化石化学品碳产生的化石CO2，与生物CO2分别记录。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 二氧化硫（`so2`）
实测蒸煮、喷放槽、蒸发、硫磺燃烧和回收或辅助烟囱捕集后的SO2；不是合计SOx。回收效率实测，不套用历史AP-42默认值。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 氮氧化物（`nox`）
实际燃烧NOx，排除N2O。UUID质量/kg不证明NO2当量或物种质量求和；监测、清单和LCIA定义一致仍是前提。不得重复列入其NO和NO2组成。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 一氧化碳（生物源）（`cobio`）
实际不完全燃烧的生物源CO；混合燃料实测CO须有碳来源和燃烧证据才能拆分。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 一氧化碳（化石源）（`cofossil`）
实际燃烧化石源CO，须有证据与生物源CO拆分。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 甲烷 (生物源)（`ch4`）
条件性污水处理或木料不完全燃烧生物甲烷；核对实测捕集、火炬和剩余排放。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 甲烷 (化石源)（`ch4fossil`）
条件性燃料泄漏或不完全燃烧化石甲烷，与生物甲烷行分开。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 一氧化二氮（`n2o`）
条件性燃烧和生物污水处理N2O；必要时明确换算后报告物种质量，不以N2O-N直接代入。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 颗粒物 (PM2.5)（`pm25`）
实际PM2.5质量；记录粒径切割基准、可过滤或可冷凝区分和控制设备。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 颗粒物 (PM2.5 - PM10)（`pm10`）
实际互斥PM2.5–PM10粒径段，不是累积PM10；仅从可比配对测量作差。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 颗粒物（> PM10）（`pmover`）
实际互斥大于PM10粒径段；与其余两段核对，不再叠加累积总粉尘。 介质为室外空气未特指；记录源位置，子介质明确后重新匹配。
- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_air同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_air
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990; epa-wood-boiler-2022

###### 化学需氧量（`cod`）
最终处理出水COD按氧当量质量报告，不是干溶出有机物质量。不得将同一物质的COD、BOD和TOC作为独立质量污染物相加。 介质为排入水体未特指；披露实际受体，已知淡水或海水时重新匹配。
- 选定流: 化学需氧量 `08a91e70-3ddc-11dd-97ef-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_effluent同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_effluent
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### 总氮（不含N₂）（`nwater`）
最终排口总氮按N实测，排除N2；物种排放不得与该合计重复。 介质为排入水体未特指；披露实际受体，已知淡水或海水时重新匹配。
- 选定流: 总氮（不含N₂） `3624d70d-4e4b-4927-9b84-b40e26c58e6d`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_effluent同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_effluent
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### phosphorus, total（`pwater`）
最终排口总磷按P；不能以合计指标隐去重要物种或重复计数。 介质为排入水体未特指；披露实际受体，已知淡水或海水时重新匹配。
天工平台未提供中文名；保留原始英文显示名，说明用途为总磷，不虚构平台正式中文名。
- 选定流: phosphorus, total `46854df3-e13d-4a5a-9e11-6319f1f8347e`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_effluent同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_effluent
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

###### adsorbable organic halogen compounds（`aox`）
最终排口AOX须保留实验室卤素质量约定；定量使用前核对流和LCIA合计定义。ECF不证明AOX为零；尽可能单列高影响物种。 介质为排入水体未特指；披露实际受体，已知淡水或海水时重新匹配。
天工平台未提供中文名；保留原始英文显示名，说明用途为可吸附有机卤素，不虚构平台正式中文名。
- 选定流: adsorbable organic halogen compounds `fe0acd60-3ddc-11dd-aaa2-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 根据cp_effluent同期间实测外部数量除以D。条件性流无发生时须有筛查证据，缺失量不置零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 1 kg 参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: cp_effluent
- 来源: eu-pulp-bref-2015; epa-chemical-pulp-1990

## 7. 分配与共产品处理
首先按可实测的因果使用细分阶段计量和共享服务。实物质量、水、碳、Mg/S及能量账与分配后环境负荷账分别保留。内部回收化学品、燃料废液和工艺蒸汽是循环，不是已售联产品；减少采购后不能再叠加避免采购抵扣。只有具有真实接收方、验收交付和一致净基准的电力或可用热量才是联产品；分配后仍保留其全量实物输出。
不可分的共享负荷首先论证与目标一致的物理因果关系。不能论证时，用期间、货币和可售产出价格可比的公开经济分配，并分析替代方法敏感性。份额为产品销售收入除以真实联合产品收入总额，各份额之和为一。份额只用于联合环境负荷，不能用于实物联产品输出或内部链接数量。浆kg与能量MJ之间的质量份额无效。同一外送能源不能同时采用分配和替代抵扣。这些是PCR建模要求，不声称BREF规定LCA分配公式。[eu-pulp-bref-2015 §4.1.4支持实物回收和能源区分]
## 8. 前景数据采集、计算与质量规则
### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pulp | mill | 验收浆及绝干分母 | 批次质量及检测 | 批次；物种；蒸煮酸基；ECF阶段；买方规格；质量测试；净湿质量m_lot；代表样干比例d_lot；包装皮重；拒收批次；期初期末库存 | 经校准净称重排除包装纸及打包带；按书面场址分层计划覆盖浆包位置和批次，密封水分样，多次烘干至恒重并保存实验室方法及校准。适用固态浆干物质法前核验非水挥发物；销售批次采样另行验证。质量证书不全批次不得作为验收浆。 | kg; fraction | 每个验收批次及水分变化事件 | 覆盖声明生产期间及启停和异常 | 同一厂、同一桉木和声明路线；其他浆种须细分 | 每 1 kg 参考流 | 校准、采样计划、原始湿干称量、平行样变异、质量证书和库存核对 |
| cp_material | mill | 外部木料、化学品和包装 | 物料账 | 采购库存退货；供方；物质及形态；浓度；湿干质量；树种；木片体积；堆积方式；密度协议；真实阶段；内部循环 | 称量或计量真实外部消耗，期初库存加接收减期末库存及退料；阶段投药与新鲜采购分别记录。配对实测木片湿干质量和体积，保留供方参考基准证明。 | kg; m3; fraction | 每次交付及批次 | 覆盖声明生产期间及启停和异常 | 同一厂、同一桉木和声明路线；其他浆种须细分 | 每 1 kg 参考流 | 供方检测、秤表校准、库存单据和阶段物料平衡 |
| cp_energy | mill | 购入、发电、自用、外送和燃料 | 能量账 | 表号；电压；购入发电自用外送kWh；天然气体积T/P/Z及湿干组成；蒸汽冷凝液质量P/T干度焓；损耗；接收界面 | 独立校准表和燃料记录与生产时间配对。核对联产燃料或回收有机物能量、锅炉发电机效率、自用和独立购入外送。书面核验背景气体体积及热基准；未核实蒸汽身份不能用于净供热。 | kWh; MJ; m3; kg | 连续计量、每日核对 | 覆盖声明生产期间及启停和异常 | 同一厂、同一桉木和声明路线；其他浆种须细分 | 每 1 kg 参考流 | 能量图、供方约定、校准和焓平衡 |
| cp_water | mill | 取水供水返回和蒸发 | 水账 | 水源流域；自来水；新鲜补充；循环；木料水；反应水；最终液态排水/旁路及具名淡水/海水受纳体/位置；蒸发；浆及污泥带水；库存变化; 各时段最终混合液质量/体积及代表性混合液密度；独立验证水比例；对应H2O组分密度/状态/参考；选定流/LCIA数量约定 | 独立取排水表、浆木料污泥水分测定及干燥冷却平衡；说明蒸发实测或平衡推算和不确定性。需要时按现场温度密度核对液体体积质量。 数量上water_out表示实际液态H2O组分体积，不自动等于混合废水总体积。最终排口/旁路混合液体积保留用于cp_effluent污染负荷。各时段最终液质量来自实测质量或匹配混合液体积及真实代表性混合液密度；用独立验证的水质量比例确定H2O质量，再以对应兼容的水组分密度/状态/参考约定换为原生H2O体积。不默认水比例1、密度1000kg/m3或组分体积可相加。水比例/密度/数量约定未知时，与受纳身份一并在LCIA前保持未决。 | m3; kg | 连续计量及同期间每日总量 | 覆盖声明生产期间及启停和异常 | 同一厂、同一桉木和声明路线；其他浆种须细分 | 每 1 kg 参考流 | 水图、校准及平衡不确定性 |
| cp_air | mill | 每种物种及互斥颗粒物粒径段 | 释放监测 | 源；燃料碳来源；烟囱逸散；物种；浓度；气量；时间；温压；水分氧含量约定；检出限；控制；颗粒切割；NOx定义 | 用实测物种浓度与相容气体体积流量按释放时间积分，涵盖启停异常；一致校正稀释、氧和湿干口径。现场碳平衡核对后可支持CO2。逐源筛查新增有机物或金属；未知是缺口，不是零。 | kg; mg/m3; m3; time | 可用时连续监测，否则采用书面代表性测量计划 | 覆盖声明生产期间及启停和异常 | 同一厂、同一桉木和声明路线；其他浆种须细分 | 每 1 kg 参考流 | 监测方法、原始信号、校准、检出限、运行覆盖和C/Mg/S平衡 |
| cp_effluent | mill | 最终排口污染物与内部处理负荷 | 水质账 | 流位置；入口出口旁路；流量；采样时间；COD按O2；TN按N；TP按P；AOX定义；溶出固体或TOC；污泥；处理路线 | 最终排口按流量比例混合采样，并配对同期间校准排水量。漂白滤液和冷凝液在处理入口分别采样，入口量用于处理或有机物平衡，不重复列环境排放。保留物种、实验室方法和检出限。 | mg/L; m3; kg | 连续流量、每运行日混合样并记录测量覆盖 | 覆盖声明生产期间及启停和异常 | 同一厂、同一桉木和声明路线；其他浆种须细分 | 每 1 kg 参考流 | 实验室QA、样品链、流量表、处理图和旁路核对 |
| cp_waste | mill | 每个外运废物流 | 废物交接单 | 废物身份；阶段与固态形态；湿质量；干比例；实测组分/有机碳/Mg/S/污染；内部循环；合法废物状态；接纳方；处理及供方参考基准；转移日期 | 各独立废物流按校准称重和代表性固形物或组成检测记录；核对循环与外运数量，核验接收方真实处理。 | kg; fraction | 每次交接 | 覆盖声明生产期间及启停和异常 | 同一厂、同一桉木和声明路线；其他浆种须细分 | 每 1 kg 参考流 | 地磅票、检测、废物转移单和接收验收 |

### 计算规则
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| dry_output | pulp_out | D = Σ(m_lot × d_lot)；m_lot排除包装；d_lot为实测干比例；拒收不合格批次。 | m_lot; d_lot; cp_pulp | D，kg验收绝干浆 | iso-solid-dry-matter-2022 |
| normalize_period | all inventory rows | 期间交换 = 实际外部数量之和 / D；保留分子单位；参考输出为1 kg验收绝干浆。不得无绝干产量权重平均每日强度。 | period exchange totals; D; cp_pulp | 每 1 kg 参考流的交换 |  |
| dry_wet_conversion | wood, pulp_out, sludge | 干质量 = 净湿质量 × (1-w)；干质量 = 净湿质量 / (1+u)；w和u分别为湿基及干基含水分数。仅在显式使用BREF来源约定时ADt为90%固形物：1 ADt = 900 kg干固形物，不是实测交付水分。 | net wet mass; w or u; cp_material; cp_pulp; cp_waste | kg dry solids | eu-pulp-bref-2015; iso-solid-dry-matter-2022 |
| effluent_load | cod, nwater, pwater, aox | 负荷kg = Σ(C_j mg/L × V_j m3) / 1000，采样期间配对；再按D归一。保留污染物当量约定，实测旁路只加一次。 | C_j; V_j; D; cp_effluent | kg指标/每 1 kg 参考流 | eu-pulp-bref-2015 |
| physical_balance | mill | 对守恒C、Mg和S分别：外部输入+期初库存 = 外部输出+期末库存；反应改变物种/相态但不得产生元素平衡抵消项。干固形物和水账另记录实测或独立证据支持的物种/相态转化，包括氧摄入与反应水；抵消等量内部链接。报告未解释残差及测量不确定性，不以虚构校正排放修补。 | stage ledgers; composition; stocks; cp_material; cp_water; cp_air; cp_effluent | 分配前实物平衡 | eu-pulp-bref-2015 |
| export_heat | heat_out | 交付热MJ = (Σ蒸汽质量×交付比焓 - Σ返回冷凝液质量×返回比焓 - 已声明交付损耗) / 1000；焓为kJ/kg且损耗量为kJ；只扣交付计量尚未反映的损耗，不重复扣减。采用同一状态、参考约定并显式核验供方净热参考量；净热值/MJ元数据本身不证明对应关系。不得以燃料热或锅炉毛热替代。 | cp_energy; steam/condensate metering; enthalpy convention | 同期未归一净交付热量 MJ；随后由 normalize_period 按 D 仅归一一次 | eu-pulp-bref-2015 |
| final_water_component | water_out | M_liquid_i为实测最终液质量或V_bulk_i × 实测rho_liquid_i；M_water_i = M_liquid_i × 独立验证水比例_i；V_water = sum(M_water_i / 兼容rho_water_i)。原生V_water/D仅一次；V_bulk留作污染负荷体积。各量同区间/状态/参考，未知保持未决。 | cp_water; cp_effluent; water fraction; compatible density; D | 每1kg验收绝干浆原生H2O组分m3 |  |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | 每行一个物理交换；已选UUID不证明数值和背景相容。未知UUID或数量保持具体缺口；新增化学品、营养盐、VOC和废物必须逐流补充。 | Supplier/product evidence; flow record; site ledger |
| purity | pulp_out | 买方规格、适用测试及实测α-纤维素、黏度、残余半纤维素木质素、灰分金属和溶解性能；不得由白度或分类名称推定合格。 | Lot CoA and cp_pulp |
| scope | mill | 注明时期地域树种酸基ECF序列；共享其他产品按计量细分，异常、库存、拒收和返浆不得遗漏。 | Plant diagram, production log and meters |
| source_limits | mill | 不得迁移历史或单厂药耗、回收率、得率和排放范围。官方公开标准范围不等于已经读取完整标准或完成销售批次合规。 | eu-pulp-bref-2015; sappi-pulp-2015; iso-solid-dry-matter-2022 |
| missing_not_zero | all inventory rows | 记录条件性缺席证据、检出限和覆盖；不以检索结果推断排放发生，也不以未知或未监测推断为零。 | cp_air; cp_effluent; cp_waste |

## 9. 校验规则
树种、蒸煮酸基、漂白路线、交付形态或用途质量缺失或不相容时拒绝适用。只设一个pulp_out定量参考；双语采用1 kg干固形物及同一D、行、单位、限定信息和聚合。木片和浆含水率分别核验；包装毛质量、风干贸易质量或未换算湿质量不能作为绝干分母。
先核对实物固形物、水、C/Mg/S及能量账，再核对分配账。内部链接两端须一致。核对新鲜及回收化学品、溶出有机物、漂白钠和冷凝液真实去向。核验联产毛发电、自用、购入外送及热量返回；实物产出不乘分配份额。分配份额之和须为一且只用于分配的共享负荷。
核对最终处理出水只记一次、旁路、污泥水分、接收方处理和遗漏污染物物种。没有路线特定证据时不得将硫酸盐或锯材排放因子用于亚硫酸盐回收或辅助锅炉。拒绝重叠粒径合计、NOx/NO/NO2重复、化石生物混淆、生物CO2删除及指标或物种基准替代。气体体积、木片体积、NOx、AOX、热量或供方浆质量约定未知时，相应定量链接不能视为完整。
## 10. 发布数据集画像
| 字段 | 值 |
| --- | --- |
| dataset_role | manufacturing_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明子路线的纺织溶解浆制造；外部链接完整后用于上游背景 |
| excluded_use | 整个CPC32111代表值、造纸级、其他木料酸基或PHK、湿浆、TCF、高黏度化学特种浆、下游纤维或使用寿命 |
| required_metadata | 全部参考限定信息、D、阶段物料水碳Mg/S与能量图、回收废水路线、分配基准及接收方、上游链接 |
| required_quality_disclosure | 实测覆盖、不确定性、未解决身份与数量基准、未知排放、供应或处理缺口；不能声称完整数据集或方法已审核 |
| update_trigger | 木料、蒸煮、漂白或发生器、纯度目标、含水率基准、能源回收、受体或处理、供应方基准变化 |

## 11. 数据源

| source_id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-pulp-bref-2015` | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 等级、蒸煮、回收、废水和绝干或风干基准的定性方法；排除案例数量。 |
| `epa-chemical-pulp-1990` | official_guidance | https://www.epa.gov/sites/default/files/2020-10/documents/c10s02.pdf | 酸性亚硫酸盐工艺和排放源筛查；不设历史默认因子。 |
| `sappi-pulp-2015` | literature | https://cdn-s3.sappi.com/s3fs-public/2015-Sappi-Group-Sustainability-Report.pdf | 历史生产者路线和木料背景，不是当前配方或数量默认值。 |
| `iso-solid-dry-matter-2022` | standard | https://www.iso.org/standard/83614.html | 官方公开固态浆干物质范围及排除项；未读取完整标准。 |
| `epa-wood-boiler-2022` | official_guidance | https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf | 1.6.1–1.6.3：制浆厂木质残余物辅助锅炉源与物种筛查；不用于废液回收锅炉，不套用数值。 |

### eu-pulp-bref-2015

- 来源类型: official_guidance
- 标题: European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015), DOI 10.2791/370629
- 参考: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf
- 适用范围与限制: 4.1.1.3（印刷p372）、4.1.2–4.1.5（pp376–385）、4.2.2及术语表（p840）：等级、化学回收、废水分流及绝干或风干基准的定性规则。单厂示例、造纸级ECF配方及BAT范围不作为通用溶解浆药耗或排放默认值。

### epa-chemical-pulp-1990

- 来源类型: official_guidance
- 标题: US EPA, AP-42 Section 10.2 Chemical Wood Pulping (September 1990; reformatted January 1995)
- 参考: https://www.epa.gov/sites/default/files/2020-10/documents/c10s02.pdf
- 适用范围与限制: 10.2.3 pp10.2-4、10.2-13–14：酸性亚硫酸盐蒸煮、Mg/S回收及SO2源筛查；历史因子不是现代场址默认值。10.2.2明确将锅炉因子路由到第1章。

### sappi-pulp-2015

- 来源类型: literature
- 标题: Sappi Group Sustainability Report 2015
- 参考: https://cdn-s3.sappi.com/s3fs-public/2015-Sappi-Group-Sustainability-Report.pdf
- 适用范围与限制: 印刷pp41、50、116（PDF pp42、51、117）：生产者亚硫酸盐与PHK区分、桉木纤维素原料和区域ECF或氧漂白。它是历史技术证据，不是所选厂当前配方。图中的重亚硫酸盐化学式有误；化学定义改依据BREF和EPA。

### iso-solid-dry-matter-2022

- 来源类型: standard
- 标题: ISO 638-1:2022, official public scope: Paper, board, pulps and cellulosic nanomaterials — Determination of dry matter content by oven-drying — Part 1: Materials in solid form
- 参考: https://www.iso.org/standard/83614.html
- 适用范围与限制: 官方公开范围，2022第2版：固态浆干物质及非水挥发物限制。排除湿浆及销售批次质量；总干物质可能含溶解固体。未读取付费完整标准；本PCR独立声明的前景批次协议须由数据生产者验证。

### epa-wood-boiler-2022

US EPA AP-42 1.6，2022年3月，原件pp1.6-1–2。木质残余物锅炉燃料状态、颗粒物、NOx、CO、CO2、CH4和N2O的工况及监测范围。回收废液锅炉另用制浆来源。原件温度、湿度、转化率及因子不是本PCR默认值；其温室气体统计口径不改变本PCR生物源CO2的LCI记录。
