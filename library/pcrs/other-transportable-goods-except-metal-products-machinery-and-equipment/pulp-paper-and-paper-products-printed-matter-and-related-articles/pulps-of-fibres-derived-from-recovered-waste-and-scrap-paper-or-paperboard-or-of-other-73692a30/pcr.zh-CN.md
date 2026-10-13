---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.pulps-of-fibres-derived-from-recovered-waste-and-scrap-paper-or-paperboard-or-of-other-73692a30
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 水洗漂白脱墨回收纸市场浆

## 1. 范围与适用性

本PCR支持实际脱墨、水洗、过氧化物漂白、脱水和干燥至合格市场浆的回收纸制浆。排除非脱墨纸板配浆、原生秸秆/甘蔗渣/竹或其他非木植物浆、原生木浆、溶解浆、湿浆交付及下游造纸。这些路线的污染物去除、化学品和产品状态不同，不能共用平均清单。BREF第6章区分回收纤维工艺；两项Sustana原件印证漂白回收纤维及干湿交付边界的重要性，并不提供通用数量。

前景数据集必须写明真实纸料等级、脱墨技术、漂白配方、最终组成、公用工程来源和污水去向。示例油酸钠捕收剂仅在实际使用时纳入，不规定配方。其他实际化学品、营养剂、杀生剂、消泡剂、制冷剂、包装组件和污染物种均须各自增加一个具体交换，采用UUID时逐一直接核实。本最小清单不意味着遗漏、零数量或默认得率。所选公用工程为外购电网电力，加外购蒸汽热和/或可归属的天然气锅炉；热电联产、生物质/污泥燃烧及厌氧沼气能源系统需要独立证据扩展。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.pulps-of-fibres-derived-from-recovered-waste-and-scrap-paper-or-paperboard-or-of-other-73692a30 |
| classification_refs | CPC 3.0 32114; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 水洗、过氧化物漂白脱墨回收纸市场浆，具有合格干燥交付状态 |
| excluded_products | 非脱墨纸板浆；原生非木植物浆；原生木浆/溶解浆；湿浆；成品纸 |
| representative_product | 用于造纸的脱墨市场浆，实测组成和质量 |
| production_route | 碎浆 → 粗细筛选及净化 → 脱墨 → 水洗 → 过氧化物漂白 → 脱水 → 干燥包装 |
| market_state | 工厂门干燥市场浆；包装单独计量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 向下游造纸供应可用脱墨纤维 |
| How much | 1 千克参考流 |
| How well | 合格水洗漂白浆；实测纤维、水分、灰分、残余油墨、胶黏物、白度及声明等级规格 |
| How long or cycle | 一个实测生产交付统计期，不声称下游使用寿命 |
| reference_flow_link | finished_pulp |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 废纸浆 `35b4a2f9-d344-4cc9-85a1-8eb4039ef21c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 回收纸等级和来源；真实脱墨、水洗和过氧化物漂白；标称90%纸纤维/10%水分参考状态及实测纤维/灰分/其他杂质；供方组成容差和数量定义；等级质量；干燥；排除包装；场址和统计期；能源及处理路线；回收分配约定 |

缺失限定信息使数据集参考流不完整。UUID只证明实物产品候选，不是背景数据集或通用水分配方。只有证实组成及数量兼容后，才使用实测合格输出质量Q。不能在缺少实际干燥清单时把不兼容湿产品换算成虚构干产品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| measurement_output | finished_pulp | 质量 | kg | 采用经校准的秤称量合格交付纸浆净质量；排除包装和不合格库存。cp_product独立测定水分、绝干物质、灰分和真实纤维/非纤维组成。只有组成兼容的合格输出进入Q。 |
| measurement_basis | 所有清单行 | 声明的交换属性 | 各行声明单位 | 所有数量及协议按每1千克参考流。统计期总量经库存修正及可追溯归属后除以以kg计的Q；绝干纤维与干固体平衡须与交付质量分母分开。 |
| measurement_energy | purchased_heat; gas; electricity | 能量和体积 | MJ; m3 | 保留各自参考属性。电力使用净热值/MJ身份及电表换算；燃气使用与供方状态一致的体积/m3；蒸汽需核实供入减回流的净焓。不把净热值/总热值等同于可用热。 |
| measurement_emissions | 以 kg 表达的物种或指标基本流输出；不含 final_liquid_water | 物种或明确定义指标的质量 | kg | 记录介质/子介质、分析定义、化石/生物来源和报告单位；以N计、以P计及COD氧当量的kg保持区别。接受前解决NOx基准及颗粒物互斥粒径区间。 |
| measurement_final_water | final_liquid_water | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 原生交换采用实测最终 H2O 组分体积；质量、水分数及匹配密度是 final_water_component 的辅助换算与闭合证据，不以 kg 替代原生 m3。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 分类回收纸供应至浆厂，供应链活动仍须链接 |
| starting_condition_role | foreground entry interface |
| product_classification_scope | 仅CPC32114中本件界定的脱墨水洗漂白市场浆子集 |
| recursive_input_rule | 外购同类浆作为上游产品输入，不在本单元重复其完整生产；披露来源，避免循环重复计入 |
| upstream_dataset_requirement | 按明确回收约定纳入废纸收集、分拣、运输及保留的前循环负担，以及各项外购供应和真实外部残渣处理 |
| disclosure | 从摇篮到工厂门建模，分别披露前景与上游模块；回收处不自动截断，无证据不计避免负担 |

P1聚合备浆、浆干燥包装、可归属的天然气公用工程及厂内好氧处理。独立保留实物阶段图和实测交接：纸料→纸浆；碎浆/筛选渣→残渣处理；浮选/洗水固体→脱墨污泥；工艺水→循环或处理；最终浆→干燥包装。每条内部链接两端具有相同质量、组成及时间覆盖，核对库存变化。包装前同一产品交接不是第二个参考产品输出。外部污水处理只接收废物交换，其环境排放属于处理数据集。下游造纸、使用和纸产品最终回收不属于本前景边界。

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| P1 | 水洗漂白脱墨市场浆生产 | required | 所选脱墨、水洗、过氧化物漂白及干燥交付路线 | foreground | 1 千克参考流 |

### 过程：市场浆生产（`P1`）

#### 输入

##### 产品流

###### 废纸（`recovered_paper`）

实际接收的已分类回收纸：保留等级和来源比例、印刷及涂布状态、矿物填料、塑料、金属、胶黏物、水分和绝干纤维。只有测定组成的真实混合进料才可作为一个实物流；宽泛UUID不意味着上游零负担。

- 选定流：废纸 `55842481-6771-4f13-a54b-02354a7d88de`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_feed`
- 来源：`eu-pulp-paper-bref-2015`

###### 交流电（`electricity`）

计量碎浆、筛选、浮选、水洗、漂白、脱水、干燥辅机、包装和厂内处理所用的用户侧1–35千伏电网平均交流电；保留阶段分表。按3.6 MJ/kWh换算电表读数，不对电力再次套用燃料热值。 原始地区CN；核实真实供方/地区/年份、1–35kV用户边界、损耗及MJ参考量兼容性；实物交流电定位不是全球电网背景。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 来源：`eu-pulp-paper-bref-2015`

###### 外购蒸汽净交付工艺热（`purchased_heat`）

条件性一项实际外购蒸汽热输入。官方制造用热能为工厂门GLO、热载体未指定的产品流，原生净热值/MJ，未限定具体压力或燃料路线。原生属性不自动建立净可用焓。实测供方蒸汽及返回冷凝液质量、绝压/表压约定、温度、干度和一致焓参考；只扣交付计量尚未反映的损耗。链接背景前核实真实供方地区/年份、边界、生产路线及净热参考量。厂内燃气锅炉蒸汽不是第二项外购输入；固定压力kg蒸汽和总热值供热候选仍不兼容。

- 选定流：制造用热能 `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 来源：`eu-pulp-paper-bref-2015`

###### 气态天然气（`gas`）

仅用于厂内管输天然气工艺供热锅炉。保留体积/m3基准，记录表计和供方参考温度、压力、湿度、组成及压缩因子；背景链接前核对体积定义，另测热值。次级质量系数不能当作密度。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 来源：`epa-ap42-gas-2026`

###### 自来水（`fresh_water`）

在场址入口计量处理后自来水；循环洗水属于内部流，不得重复计作新鲜供水。若实际抽取原水，必须用经过核实的一个资源流及处理清单替换本供水接口，不能同时重复计入自来水。 原始供货为HK香港水处理厂；核实真实供方/流域、处理、地区/年份、交付边界及原生体积m3基准；次级1000kg/m3筛查描述不是真实密度。

- 选定流：自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`eu-pulp-paper-bref-2015`

###### 氢氧化钠溶液，50%（`alkali_solution`）

实际使用质量分数50%的氢氧化钠溶液时纳入；测定供入溶液质量和供方含量，不以纯NaOH质量替代。碎浆与过氧化物漂白的用量先分阶段计量再汇总；其他配方需要独立核实的原子流行。

- 选定流：氢氧化钠溶液，50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemicals`
- 来源：`eu-pulp-paper-bref-2015`

###### 过氧化氢溶液，50%（水溶液）（`peroxide_solution`）

所选过氧化物漂白路线记录实际质量分数50%的H2O2水溶液质量和含量。身份不带入原记录的棉织物处理用量。其他浓度或漂白化学品需要经过审查的独立行；不设默认正用量。 原件具有CN纺织厂用途背景，但供货路线为工厂门无机化学品；仅作为条件性50%水溶试剂实物定位，不将纺织背景当作浆厂背景。链接前核实实际工业牌号/稳定剂/配方、供方路线/地区/年份、完整溶液质量kg及交付边界。

- 选定流：过氧化氢溶液，50%（水溶液） `2ef759d9-dc11-4c3e-b61f-83222f3c60ff`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemicals`
- 来源：`eu-pulp-paper-bref-2015`

###### 脱墨用硅酸钠水溶液（`silicate_solution`）

实际使用时纳入。记录溶液质量、固形物比例及SiO2/Na2O模数。未经核实的高浓度或固体熔融路线记录不能替代水溶液质量；UUID保留未决。

- 选定流：脱墨用硅酸钠水溶液
- 流属性/单位：质量 / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemicals`
- 来源：`eu-pulp-paper-bref-2015`

###### 油酸钠浮选捕收剂（`flotation_soap`）

仅在实际使用单一油酸钠脱墨捕收剂时条件纳入。官方羧酸钠是广义羧酸的钠盐，处理路线为空、源无CAS；条件包含该具体化学物质，不是精确油酸钠含量或供方清单。须供方/SDS证明真实油酸根和钠阳离子、实际CAS143-19-1、供货形态、纯度/有效比例、伴随水/添加物及原生质量参考/边界/时期兼容性。实际化学CAS来自供方证据，不能声称在源原件中已验证CAS。保持完整供货质量与有效油酸钠/稀释水基准区别；不虚构纯度、剂量或制造，不静默替换其他羧酸钠、皂混合物、石蜡/锂矿捕收剂或非离子/SDS表活。真实配方为另一化学品时另列具体交换。

- 选定流：羧酸钠 `d1456413-4931-406b-95a1-c2c3193f38fe`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemicals`
- 来源：`eu-pulp-paper-bref-2015`

###### 聚乙烯薄膜（`pe_film`）

实际使用PE薄膜包浆时纳入。薄膜与纸浆分别称量，核实聚合物、供方及上游参考。原件CPC分类瑕疵在审查元数据披露；其他包装组件另列原子行。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemicals`
- 来源：`eu-pulp-paper-bref-2015`

###### 柴油货车运输分类回收纸（`inbound_freight`）

仅在上游供纸运输边界之外，条件纳入一项实际分类回收纸柴油货车公路货运服务。官方货物运输明确公路货运路线，原生质量*距离/kg*km，未硬限货物或特定案例。逐程记录真实载荷、距离、柴油车辆等级/排放标准、装载率、装载/空返归属、供方地区/年份及服务参考约定；不默认车型、距离或空返比例。F = sum(载荷kg × 实际km)，1 t*km = 1000 kg*km，兼容服务总量仅除以Q一次。不得在已含燃料的供方背景上叠加前景柴油。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- 数量规则：按cp_transport实测F = sum(载荷kg × 实际km)；吨公里先乘1000转原生kg*km再F/Q，仅归一一次，保留上游/空返兼容性。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_transport`
- 来源：`eu-pulp-paper-bref-2015`

#### 输出

##### 产品流

###### 废纸浆（`finished_pulp`）

唯一验收纸浆净输出位于工厂交付门，排除包装。UUID限定水洗、漂白、化学回收/脱墨浆，标称90%纸纤维及10%水分。核对实测水分、纤维、灰分及其他物料与供方背景定义；90%干物质不证明90%纤维。湿浆及不兼容组成不得静默换算为该交付状态。

- 选定流：废纸浆 `35b4a2f9-d344-4cc9-85a1-8eb4039ef21c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_product`
- 来源：`eu-pulp-paper-bref-2015`

##### 废物流

###### 回收纸脱墨碎浆筛选混合粗筛渣（`pulping_reject`）

一项实际独立收集并外运的回收纸脱墨碎浆/筛选混合粗筛渣。官方固体废物明确涵盖工业弃置固体，未硬限处理。实测外运湿质量、干物质、纤维素、塑料、金属、填料/灰分、油墨/胶黏物、碳、含水率及危险性；记录阶段/形态和具名合法接纳方/供方处理及原生质量参考兼容性。真实分离组分或不同接收方需另列行；内部回用纤维为内部链接。本流不是黑液、木边角料或清洁废纸，通用身份不提供组成或默认处置。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 来源：`eu-pulp-paper-bref-2015`

###### 造纸污泥（`deinking_sludge`）

脱墨浮选及洗水澄清污泥，与粗筛渣和生化污泥分开收集。宽泛造纸污泥UUID在本行仅表示此实测流；保留水分、灰分、纤维、油墨、危险组分、脱水状态及实际处理或再利用去向。

- 选定流：造纸污泥 `b48b29ab-4ead-4413-9adb-07631cd7af09`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 来源：`eu-pulp-paper-bref-2015`

###### 送外部处理的未处理脱墨制浆生产废水（`untreated_effluent`）

仅表示一项实际外送处理的未处理脱墨制浆液态生产废水。官方废液涵盖工业废水，未硬限处理路线，但原生参考为质量kg而非体积m3。按外送状态称量，或以实测各期间体积和代表性真实温度/组成下的密度kg/m3计算m = sum(V_i × rho_i)；保留校准、采样及不确定性，不采用纯水默认密度。记录纤维/填料/油墨、药剂/COD/TSS/N/P/物种和水比例、pH/污染、合法接纳方及处理/接口/数量基准。整项废水质量不是水质量或COD质量；实测体积留作接收负荷，水比例用于实物水平衡。厂内进水仍为内部记录；外部处理排放留在其数据集，不重复直接排水。源通用危害措辞不决定本流的实际法定危险分类。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按cp_water实测外送液质量或m = sum(V_i × 实测rho_i)；原生kg/Q仅归一一次，保留真实体积、水比例及接收处理基准；密度未知保持未决，不当1000kg/m3。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`eu-pulp-paper-bref-2015`

###### 造纸污泥（`primary_treatment_sludge`）

厂内初级污水处理时纳入：仅表示一个初沉澄清污泥实物流，单独称量湿质量并测定干固体、纤维、灰分、碳、危险组分及接收设施。宽泛造纸污泥身份在本行限定于该来源。

- 选定流：造纸污泥 `b48b29ab-4ead-4413-9adb-07631cd7af09`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 来源：`eu-pulp-paper-bat-2014`

###### 造纸污泥（`biological_treatment_sludge`）

厂内生物污水处理时纳入：仅表示一个剩余生化污泥实物流，独立称量并表征水分、干固体、有机碳、灰分、危险性及接收方。内部循环的回流活性污泥不能重复计入，也不能与脱墨或初沉污泥合并。

- 选定流：造纸污泥 `b48b29ab-4ead-4413-9adb-07631cd7af09`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 来源：`eu-pulp-paper-bat-2014`

###### 捕集回收纤维厂粉尘（`captured_dust`）

条件性一项来自有文件记录的搬运/干燥/包装收集点、实际独立捕集并外运的非金属回收纤维厂粉尘。官方粉尘为质量kg的工业集尘废物流，未限制处理；不证明正产尘或默认捕集率。称量集尘器/容器扣皮质量及库存，分别跟踪真实内部纤维回用与外运交接；检测水分、真实纤维/填料/油墨/胶黏物及矿物污染、生物/化石碳和危险性。核实实际材料家族、合法接纳方/供方处理及原生参考基准。捕集量不是排放PM或清洁木粉；独立收集/外运流须拆行，内部回用保留两端匹配阶段链接，不产生新产品或替代信用。无发生须有设备/过程筛查；捕集量未知保持缺口。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residues`
- 来源：`eu-pulp-paper-bat-2014`; `sustana-dry-bales-2024`


##### 基本流

###### 排入真实受纳体的最终处理后液态水（`final_liquid_water`）

仅在已纳入厂内处理后真实直接排水时，条件计入最终液态水组分；实测旁路另保留身份。官方水，CAS7732-18-5，是水体未指定介质的基本排放流，原生体积m3，不是资源或水蒸气。仅当方法尚未细分受纳体时允许该暂定实物定位；每个具体数据集必须查明具名受纳体/位置，已知淡水/海水时采用直接核实的专用身份，并与COD/TSS/N/P同一排口介质一致。外部污水处理为另一废物接口；互斥分支或实测真实分流防止重复排放。按称量或实测混合液体积×混合液密度确定最终液质量，再以实测水比例确定真实水组分质量，并用核验的对应水组分密度/状态/参考约定转换为原生水体积。混合废水总质量/体积和COD不是纯水数量。混合液排口体积留作污染负荷，保留方法/校准及换算/介质不确定性；水比例/密度/受纳体未知保持数据集缺口。

- 选定流：水 `a3876d9b-a3e8-4680-861a-4e08642f1392`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按cp_water实测最终水组分质量及兼容密度取得V_water；仅对真实直接排口或实测分流按原生V_water/Q归一一次，不以废水总质量或资源/蒸汽替代。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`eu-pulp-paper-bref-2015`; `eu-pulp-paper-bat-2014`


###### 水蒸气（`evaporated_water`）

干燥进入室外空气的水蒸气；将浆和残渣含水、凝结水、排水及储量变化纳入实测水平衡；内部蒸汽不能再加作一项蒸发损失。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`eu-pulp-paper-bref-2015`

###### 二氧化碳（生物源）（`co2_biogenic`）

厂内生化污水处理或其他已纳入生物碳释放实际产生的生物源CO2条件行。即使温室气体报告口径或表征权重为零，也在LCI保留；单独的总CO2表计不能证明碳来源。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`eu-pulp-paper-bat-2014`

###### 二氧化碳（化石源）（`co2_fossil`）

天然气锅炉化石CO2条件行，按现场燃料碳及实测氧化和输出核对进行测定或计算。纳入启停；上游电网排放留在供应数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 甲烷 (生物源)（`methane_biogenic`）

已纳入生物处理实际释放的甲烷条件行；区分收集气、燃烧气和逸散排放并测定来源。厌氧/沼气能源系统需单独有证据的扩展，不能仅凭COD推定甲烷排放。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`eu-pulp-paper-bat-2014`

###### 甲烷 (化石源)（`methane_fossil`）

厂内天然气锅炉未燃气或不完全燃烧甲烷条件行，保留化石来源及实测运行覆盖。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 一氧化二氮（`nitrous_oxide`）

已纳入燃气燃烧或生物处理实测N2O条件行，各阶段分别保留记录；不能并入NOx总量。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`; `eu-pulp-paper-bat-2014`

###### 一氧化碳（化石源）（`carbon_monoxide`）

厂内天然气燃烧化石CO条件行，采集治理后的真实烟囱排放质量，包括非稳态运行。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 二氧化硫（`sulfur_dioxide`）

天然气锅炉SO2条件行，使用物种特定监测或实测燃气硫平衡，不能用总SOx身份或室内空气记录代替。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 氮氧化物（`nox_air`）

燃气锅炉NOx汇总条件行，排除N2O。质量UUID不证明NO2当量：保留仪器报告基准、化学定义及背景/LCIA兼容性，兼容未决时不能接受定量结果。同一质量不得再加总NO和NO2。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`epa-ap42-gas-2026`

###### 颗粒物 (PM2.5)（`pm_fine`）

实际排放PM2.5条件行，不能用累积PM10代替。保留空气动力学截断及可过滤/可凝结测定定义；只有兼容的嵌套测量才可相减形成互斥粒径区间。 分别筛查真实废纸堆场/搬运、浆干燥/打包及已纳入燃气锅炉；只计治理后越过环境边界的颗粒，包括相关逸散。捕集粉尘和内部回用纤维分别计量，不加作空气PM；不移植成品纸切纸或新闻纸排放默认值。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`eu-pulp-paper-bref-2015`; `epa-ap42-gas-2026`; `eu-pulp-paper-bat-2014`

###### 颗粒物 (PM2.5 - PM10)（`pm_coarse`）

大于PM2.5且不超过PM10的实际排放条件行，是互斥区间而非累积PM10。粒径分布未知保持不完整，不能全部归为PM2.5。 分别筛查真实废纸堆场/搬运、浆干燥/打包及已纳入燃气锅炉；只计治理后越过环境边界的颗粒，包括相关逸散。捕集粉尘和内部回用纤维分别计量，不加作空气PM；不移植成品纸切纸或新闻纸排放默认值。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`eu-pulp-paper-bref-2015`; `eu-pulp-paper-bat-2014`

###### 颗粒物（> PM10）（`pm_over10`）

搬运或干燥产生大于PM10实际排放的条件行，不设默认正排放或移植木材粉尘系数。各粒径质量之和应等于定义兼容的实测总量，不得重叠。 分别筛查真实废纸堆场/搬运、浆干燥/打包及已纳入燃气锅炉；只计治理后越过环境边界的颗粒，包括相关逸散。捕集粉尘和内部回用纤维分别计量，不加作空气PM；不移植成品纸切纸或新闻纸排放默认值。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：`eu-pulp-paper-bref-2015`; `eu-pulp-paper-bat-2014`

###### 化学需氧量（`cod_water`）

仅用于厂内处理后直接排水。保留氧当量分析定义、流量加权负荷及受纳水体。COD是一个监测指标，不能掩盖已知有毒物种或当作实物组分质量与其相加。

- 选定流：化学需氧量 `08a91e70-3ddc-11dd-97ef-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_discharge`
- 来源：`eu-pulp-paper-bat-2014`

###### 悬浮物（未指定）（`suspended_solids`）

仅用于最终直接排水：按声明的重量法独立测定TSS及流量加权负荷。外送未处理废水负荷属于接收方表征，不是第二次直接环境排放。

- 选定流：悬浮物（未指定） `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_discharge`
- 来源：`eu-pulp-paper-bat-2014`

###### 总氮（不含N₂）（`nitrogen_water`）

仅用于最终直接排水：保留以N计的千克、不含N2的分析总氮及分别测得的物种。避免LCIA中汇总值与物种重复计入，不假设N2释放。

- 选定流：总氮（不含N₂） `3624d70d-4e4b-4927-9b84-b40e26c58e6d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_discharge`
- 来源：`eu-pulp-paper-bat-2014`

###### phosphorus, total（`phosphorus_water`）

仅用于最终直接排水：测定以P计的千克并保留受纳水体。天工未提供该未特指水体身份的中文名称，因此保留原始英文显示。总磷不能当成磷酸根离子质量，避免物种与指标重复计入。

- 选定流：phosphorus, total `46854df3-e13d-4a5a-9e11-6319f1f8347e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：统计期实测交换总量除以组成兼容的合格输出质量Q；保留本行特定条件。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_discharge`
- 来源：`eu-pulp-paper-bat-2014`

## 7. 分配与共产品处理

本件明确选择eu-pef-annex-2021第4.5节的处理层次：优先通过过程细分归属可分操作，考察带明确附加功能的可行系统扩展；否则论证相关的因果物理关系，物理因果无法证实时再论证经济关系。不能对富水污泥自动使用湿质量份额。记录分配系数、价格及期间、输出、共享过程和敏感性，区分废物处理与具有实证功能及接收市场的可销售联产品。

保留两个关联账本：（1）未分配的实物量及绝干纤维、干固体、水和碳平衡，包含完整联产品输出及两端相等的内部交接；（2）归属后的环境负担及信用。分配份额不能在实物上缩小联产品输出或内部链接数量。前景处理负担跟随真实接收方。回收纸输入并非自动零负担：记录收集、分拣、运输、前生命周期负担和信用分担、替代点质量及上游数据集约定。PEF的CFF是可选的项目特定约定，需声明参数，本件不强制默认采用。不能将避免生产信用与已包含该信用的背景数据集叠加；不允许无条件原生纤维替代或肥料/能源信用。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | P1 | 合格纸浆输出 | 前景测量与记录 | 批号；毛/皮/净质量Q；交付水分；干固体；灰分；纤维/非纤维组成；白度；尘埃/胶黏物；等级；供方容差 | 经校准地磅或浆包秤；采用声明并独立验证的方法进行代表性批次水分、绝干和灰分测试，保留干燥和灼烧条件及不确定性；记录纤维组成方法和不确定性；保存质量放行记录 | kg; fractions | 逐批及匹配统计期 | 完整匹配生产统计期，记录日期及闲置启停时段 | 仅合格验收干浆，核对期初期末库存和不合格品 | 每 1 kg 参考流 | 秤校准；取样代表性；实验室方法版本及报告；供方背景状态一致性 |
| cp_feed | P1 | 回收纸进料 | 前景测量与记录 | 供方；等级/来源质量比例；毛皮重；水分；干固体；纤维；灰分；塑料；金属；油墨/涂层/胶黏物；库存变化 | 逐车称重，按等级来源分层代表性分拣、组成及干物质测试，保留纤维和非纤维污染物分析定义 | kg; fractions | 逐车或批次，等级代表性取样 | 完整匹配生产统计期，记录日期及闲置启停时段 | 所选统计期全部验收进料及仓储核对 | 每 1 kg 参考流 | 等级票据；秤；取样设计；干物质及污染物实验室报告 |
| cp_utilities | P1 | 独立能源输入 | 前景测量与记录 | 阶段表计；供入/回流；燃气温压湿度组成及Z；供方参考体积；蒸汽质量温压干度及焓；输出Q；共享归属 | 经校准能源和流量表、供方数量定义及供回焓平衡，核对阶段与外购/自制能源，避免重复 | MJ; m3; kg; kWh | 连续或日总量，全部运行状态 | 完整匹配生产统计期，记录日期及闲置启停时段 | 所选路线及可归属厂内公用工程 | 每 1 kg 参考流 | 表计校准；供方定义；焓计算；归属和平衡残差 |
| cp_water | P1 | 供水、外送废液、最终液态排水及蒸发 | 前景测量与记录 | 新鲜进水；内部循环；处理前后流量；外送废水及最终排口液质量/体积、真实状态下混合液/水组分代表性密度、实测水比例及接收数量基准；凝结水；浆/污泥/渣含水；蒸发；储量；Q；接收方 | 经校准流量表和流含水测定，独立核对供排水和储量，测定蒸发或使用附不确定性界限的水平衡残差 | m3; kg | 连续或每日；逐批残渣 | 完整匹配生产统计期，记录日期及闲置启停时段 | 完整前景水循环及真实处理边界 | 每 1 kg 参考流 | 表计和取样；质量体积换算的实测密度；平衡不确定性 |
| cp_chemicals | P1 | 各化学品和PE薄膜 | 前景测量与记录 | 各化学品身份；溶液质量；有效比例；密度；硅酸钠模数；纯度；加药阶段；聚合物；薄膜质量；库存；Q | 校准投料秤或表，与进货库存核对；供方含量报告；区分供入溶液、有效成分和稀释水数量 | kg; fractions | 每次加药或批次，统计期库存总量 | 完整匹配生产统计期，记录日期及闲置启停时段 | 每个实际原子化学品及包装输入 | 每 1 kg 参考流 | 含量或SDS；聚合物薄膜核实；投料校准；不移植源配方 |
| cp_residues | P1 | 各独立残渣 | 前景测量与记录 | 来源阶段/集尘器；外运与内部回用；库存及皮重；湿干质量；纤维；灰分；碳；污染物；危险性；脱水；接收和处理；库存；Q | 各流校准称量和代表性干物质、组成及碳分析，核对运输及接收记录；不同污泥保持区别，真实分开发运时继续拆行 | kg; fractions | 逐批或发运，统计期核对 | 完整匹配生产统计期，记录日期及闲置启停时段 | 真实筛渣、脱墨污泥、厂内处理污泥及捕集粉尘 | 每 1 kg 参考流 | 废物票据；实验室报告；接收方许可或功能证据；平衡闭合 |
| cp_air | P1 | 空气基本流 | 前景测量与记录 | 来源阶段；物种；化石生物比例；气流；浓度；温压湿干及O2修正；时长；PM截断及可过滤可凝结；检出限；NOx数量基准；Q | 采用有效现场排放测试及治理后活动加权积分，保留运行覆盖和计算监测方法，不把AP42系数当现场测量 | kg; concentration; volume/time | 代表性现场测试及运行日志，完整统计期 | 完整匹配生产统计期，记录日期及闲置启停时段 | 仅已纳入前景的直接排放，含启停 | 每 1 kg 参考流 | 测试方法报告；校准；来源分析；NOx兼容；PM互斥性及不确定性 |
| cp_discharge | P1 | 水基本流 | 前景测量与记录 | 最终受纳体；流量；以O2计COD；TSS；以N计TN；以P计TP；物种；方法；检出限；进水背景；排水时段；Q | 最终排口流量比例复合样及认可或等效验证分析；BAT8/10及适用脚注指导覆盖；保留原始日期和匹配流量区间 | kg; mg/L; m3 | 连续流量；代表性日COD/TSS、周N/P，或有理由的等效覆盖 | 完整匹配生产统计期，记录日期及闲置启停时段 | 仅厂内处理后的最终直接排水，不是外部处理进水 | 每 1 kg 参考流 | 实验室方法；流量校准；受纳介质；检出和覆盖；指标物种重叠裁定 |
| cp_transport | P1 | 进料运输 | 前景测量与记录 | 载重；距离；车辆；载荷；装载率；空返；上游运输边界；Q | 可追溯载重票据及真实运输距离，以实测载荷kg乘km，或吨公里乘1000；明确空返模型并核对供方重复计算 | kg*km; t*km | 每程及完整统计期 | 完整匹配生产统计期，记录日期及闲置启停时段 | 供纸背景尚未包含的运输 | 每 1 kg 参考流 | 票据路线；车辆及归属证据 |

### 计算规则

| rule_id | Applies to | 公式或规则 | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalization | 所有清单行 | a = A / Q；A是以声明单位计的可归属实测统计期交换，Q是以kg计的组成兼容合格交付浆。负担分配前保留完整实物数量。 | A; Q; cp_product | 每1千克参考流交换 | eu-pulp-paper-bref-2015 |
| dry_material_balance | recovered_paper; finished_pulp; pulping_reject; deinking_sludge; primary_treatment_sludge; biological_treatment_sludge; captured_dust | D = W × (1 − w)；W为单独测定的湿质量，w为实测水质量比例。F = D × f，f为实测干基纤维比例，不能假设全部干固体都是纤维素。绝干纤维得率 = 合格输出F / 消耗进料F；干固体得率 = 合格输出D / 消耗进料D。纳入储存和不合格品变化。 | W; w; f; cp_feed; cp_product; cp_residues | 独立实物纤维和干固体平衡，无通用得率 | eu-pulp-paper-bref-2015 |
| water_load | cod_water; suspended_solids; nitrogen_water; phosphorus_water | L = sum(C_i × V_i × 0.001)，C_i为以mg/L计的兼容浓度，V_i为匹配时段m3体积；L为声明分析物种或指标的kg。只归一化一次L / Q，不能在缺少匹配流量时直接相加平均浓度。 | C_i; V_i; cp_discharge; Q | 每参考流最终直接排放负荷 | eu-pulp-paper-bat-2014 |
| physical_balances | P1 | 对守恒元素碳：实测输入 = 全部实物碳输出 + 库存变化；反应改变物种/相态，不产生元素碳抵消项。干固体和水账分别纳入独立实测或证据支持的转化及真实氧/反应水项；内部回用抵消。碳输出包括纤维、残渣、废水和各气体物种各自的元素碳比例。披露平衡残差及测量不确定性，不能编造CO2或得率强制闭合；分配负担账单独保留。 | cp_feed; cp_product; cp_water; cp_residues; cp_air | 未分配实物平衡及有解释的残差 | eu-pulp-paper-bref-2015 |
| liquid_waste_mass | untreated_effluent | 原生外送液质量m = sum(V_i m3 × 实测rho_i kg/m3)，或校准直接称量质量；m/Q仅归一一次。水质量 = m × 实测水比例；体积留作处理/指标负荷，不假定密度1000或全部废水都是水。 | cp_water; actualT/composition/density; Q | 原生kg/每1kg参考流 | eu-pulp-paper-bref-2015 |
| road_freight_quantity | inbound_freight | F = sum(载荷kg × 实际km)；1t*km =1000kg*km。原生服务量F/Q仅归一一次，保留真实装载/空返/供方边界约定，不重复燃料/运输。 | cp_transport; Q | 原生kg*km/每1kg参考流 | eu-pulp-paper-bref-2015 |
| purchased_net_heat | purchased_heat | 净MJ = (sum(交付蒸汽kg × 一致参考焓kJ/kg) - sum(返回冷凝液kg × 返回焓kJ/kg) - 交付计量尚未包含的损耗kJ)/1000；再按Q仅归一一次。显式核验供方净热与源NCV参考量对应；不默认热值/效率。 | cp_utilities; state/enthalpy/reference agreement; Q | 核验净MJ/每1kg参考流 | eu-pulp-paper-bref-2015 |
| final_water_component | final_liquid_water | M_liquid = sum(V_liquid_i × 实测rho_liquid_i)，或实测最终液质量；M_water = sum(M_liquid_i × 实测水比例_i)；V_water = sum(M_water_i / 兼容rho_water_i)。密度状态及水含量方法独立验证；原生V_water/Q仅一次。混合液V_liquid留作COD/TSS/N/P负荷；不假定全部废水都是水或默认密度1000。核对真实处理分支和受纳介质。 | cp_water; cp_discharge; water fraction; compatible density; Q | 实际水组分m3/每1kg参考流 | eu-pulp-paper-bref-2015 |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | Applies to | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | P1 | 确认实际路线和每个原子流，未决UUID保持具体命名交换，使完整身份链接主张无法成立，不能静默置零。 | 直接身份读取及供方现场证据 |
| quality_period | P1 | 输入输出、排放和库存变化匹配同一场址、等级及统计期；保留启停、不合格生产及数据缺口，不将非脱墨或非木路线平均到本参考。 | 全部采集协议 |
| quality_evidence | P1 | 使用真实前景数量；历史或生产者案例不构成通用投料、纤维得率、能水系数。报告检出限、替代、不确定性和缺失的流或数量兼容。 | eu-pulp-paper-bref-2015; epa-ap42-gas-2026 |
| quality_allocation | P1 | 完整实物流和阶段链接与负担分配并存，记录接收功能及回收输入约定并检查信用重复计算。 | eu-pef-annex-2021 |

## 9. 校验规则

拒绝缺少参考限定、实测合格输出Q、真实进料组成或绝干纤维及干固体得率基准的数据包。核对每个交换分母为1千克合格交付浆，以及每条内部交接两端数量。按阶段核实能源、燃气蒸汽供方数量定义及电压；蒸汽基准或NOx当量未决时保持待审。

核对粗筛渣、脱墨污泥、处理污泥和废水分别具有数量及接收方；最终直接水排放只适用于厂内处理路线。基本流身份必须对应真实介质/子介质及物种或分析指标。所列未特指室外空气/水介质不能替代已知特定受纳体，数据集需选择并直接读取匹配子介质。不得使用修正流。PM2.5、PM2.5–PM10和>PM10互斥，不能再叠加累积PM10或总粉尘行。LCI保留生物源CO2。即使报告COD/TN/TP，现场特定有毒物质仍需独立列行。缺少测量、身份、物种或适用流覆盖时保持不完整，披露已执行/跳过检查及原因。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground process dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 真实数据及链接审查后用于合格特定路线向造纸供浆 |
| excluded_use | 非脱墨/非木/溶解浆、湿浆交付、通用纤维配方、碳中和或EF合规主张 |
| required_metadata | 场址及期间；纸料组成等级；实测参考状态；阶段图；能源处理路线；分配约定；供方背景 |
| required_quality_disclosure | 校准和分析；平衡及得率；不确定性；缺失UUID；源元数据瑕疵；数量基准兼容；审查及覆盖状态 |
| update_trigger | 进料等级、油墨杂质、脱墨漂白、干燥交付、能源处理、供方身份或分配变化 |

## 11. 数据源

| Source id | Type | 参考 | 用途 |
| --- | --- | --- | --- |
| eu-pulp-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board BREF, 2015, Chapter 6, sections 6.1.2–6.2.2, printed pp. 550–564; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 回收纤维路线、水洗漂白、质量、残渣和水循环；历史工厂数量不作默认值。 |
| eu-pulp-paper-bat-2014 | official_guidance | Commission Implementing Decision 2014/687/EU, BAT 8, 10, 12–16 and RCF BAT 42–46; https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014D0687 | 水监测及分别记录的废物和处理。BAT排放水平不是配方或通用LCI系数，本件不认定法律适用性。 |
| eu-pef-annex-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I sections 4.4.8 and 4.5, PDF pp. 49, 63–64; https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 仅用于回收负担和信用披露及多功能性处理层次，不采用默认CFF系数或声称符合EF。 |
| epa-ap42-gas-2026 | official_guidance | US EPA AP-42, section 1.4 Natural Gas Combustion, header 10/26, sections 1.4.1–1.4.3; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | 天然气锅炉条件排放物种及现场测试限定；不采用排放系数、燃气热值或污泥/生物质燃烧系数。 |
| sustana-envirotouch | literature | Sustana official EnviroTouch product page, retrieved 2026-10-11; https://sustanasolutions.com/products/sustana-envirotouch/ | 单一生产者印证回收、无氯化合物漂白的市场纤维及灰分和胶黏物质量的重要性，不作为配方或通用得率。 |
| sustana-dry-bales-2024 | literature | Sustana, De Pere mill dry-bale equipment report, 1 May 2024; https://sustanasolutions.com/sustana-shares-with-paper360-the-de-pere-mill-optimization-for-production-of-dry-bales/ | 现场特定证据表明湿浆与干浆交付需要不同干燥边界，不采用水分或产能默认值。 |
