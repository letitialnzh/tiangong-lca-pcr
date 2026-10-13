---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.fluting-paper-including-straw-and-semi-chemical
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 外供未漂白阔叶木NSSC浆制瓦楞芯纸

## 1. 范围与适用性

本PCR覆盖起楞前未漂白单层芯纸卷的限定供浆造纸路线。全部外供纤维为原生阔叶木亚硫酸钠NSSC浆，须披露实际树种、蒸煮/回收路线及水分。允许同牌号厂内损纸内回用。工厂采集自身配方与排放；不得假定不同纤维或浆法共享数量。[jrc-pulp-paper-bref-2015; valmet-nssc; fefco-paper-production]

制浆由经鉴定上游数据提供，不从摇篮到厂门核算中删除。本路线外购蒸汽、电网电及管网处理水。BREF图4.2及Heinola描述的是一体化厂，包含额外纸板裁边浆流；该历史案例仅支持工艺理解，不作为本纯原生供浆前景的配方。所有实际湿部制剂与处理条件须披露。不设默认水分、收率、药剂投加、排放因子或CMT/SCT阈值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.fluting-paper-including-straw-and-semi-chemical |
| classification_refs | CPC 3.0 32134; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 采用外供浆制造的单层未漂白阔叶木NSSC瓦楞芯纸卷；允许同牌号内回用损纸 |
| excluded_products | 草浆/非木浆芯纸；回收纤维芯纸；CTMP/TMP/硫酸盐浆配浆；涂布或表面施胶芯纸；箱板纸；成品瓦楞纸板和纸箱；一体化制浆前景 |
| representative_product | 起楞前的一卷合格净未涂布NSSC芯纸；不规定工厂配方或生产者平均值 |
| production_route | 外供亚硫酸钠/碳酸盐阔叶木NSSC浆 → 碎解、筛选、精磨和配浆 → 条件性实际湿部干强/助留/消泡投加 → 流送、成形、压榨、蒸汽烘缸干燥 → 分切、复卷和交付；水/纤维回收及实际废水处理 |
| market_state | 造纸厂门口未经转换的净可售纸卷，处于起楞之前；卷芯与包装另列清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供作瓦楞纸板芯层、起楞前的净合格芯纸 |
| How much | 1 千克 |
| How well | 未漂白单层阔叶木NSSC纸卷，声明实际定量、厚度、水分、配浆/药剂状态及采购方压缩试验要求 |
| How long or cycle | 同一报告周期产量归一化至参考流；不声称纸箱寿命 |
| reference_flow_link | `fluting_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 瓦楞纸，包括表面未涂料的半化学瓦楞纸 `823c2026-8c74-4f63-b775-88abe4098204` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 原生阔叶木树种/来源；亚硫酸钠NSSC路线及回收系统；上游供方；供浆固含量及参考基准；单层未涂布/无表面或疏水施胶；实际药剂制剂；定量；厚度；水分/检测基准；卷形；CMT/SCT方法及采购方目标；扣除卷芯/包装的净质量；场址；周期；公用工程及废水路线 |

必需限定信息须在数据集元数据或等效产品/过程说明中具备；缺失时适用性不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | fluting_output | Mass | kg | 采用最终分切/复卷后的实测声明水分净合格纸质量。扣除卷芯、包装、不合格品及内回用损纸。 |
| reference_denominator | all inventory rows | Mass | kg | 全部行及链接协议采用每1千克参考流、同一报告周期；湿/干平衡另行保留。 |
| pulp_basis | nssc_pulp | Mass | kg | 按实测固含量及上游声明的参考干度核对到货湿浆、绝干物及供方风干/其他基准；浆流记录不规定统一干度。 |
| steam_quantity | drying_steam | Gross calorific value | MJ | 实测蒸汽／返回质量、压力、温度及焓用于独立物理账；只有取得供方净热与参考 MJ 的 k_bg 后才换算热背景，不默认 k_bg=1。 |
| emission_bases | cod_water, bod_water, tn_water, tp_water, ww_n2o, ww_ammonia | Mass | kg | 保留COD/BOD千克需氧当量、TN千克N和TP千克P，以及N₂O/NH₃分子质量；元素基实验报告须记录换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原生阔叶木亚硫酸钠NSSC浆交付造纸输入边界，记录湿/干基准及供应链 |
| starting_condition_role | 上游中间供浆；不豁免制浆负荷 |
| product_classification_scope | 仅为CPC 32134的指定NSSC子集，处于起楞之前；不等同整叶范围 |
| recursive_input_rule | 自产湿/干损纸和白水回收纤维为内循环；不予抵扣且不计可售产量。外购成品芯纸或外部回收纸不属于本路线。 |
| upstream_dataset_requirement | 必须链接路线特定的浆背景，含阔叶木来源、NSSC药剂/解纤、实际废液回收、排放及交付；链接数量基准兼容的实际电网、蒸汽、水、药剂、包装和废物处理供方 |
| disclosure | 场址、周期、牌号、浆来源/路线、水分、造纸及处理范围、公用工程交付/返回定义、内循环、截断、分配和缺口；一体化工厂复用前须另行鉴定上游制浆模块 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | papermaking | 纳入接收/碎解、筛选、精磨、配浆/药剂制备、成形、压榨、干燥、通风、水/纤维回收、分切/复卷和交付。聚合为一个造纸单元以保留单一产品输出；各阶段独立计量及未分配实物链接仍须保留。 | jrc-pulp-paper-bref-2015; fefco-paper-production |
| boundary_upstream | pulp supply | 本项为供浆造纸，非一体化NSSC工厂清单。不得移植Heinola数量或把其一体化厂声称为非一体化厂。经鉴定的上游浆模块覆盖蒸煮、解纤、洗涤及实际回收路线；缺失负荷须披露并阻止完整摇篮到厂门使用。 | jrc-pulp-paper-bref-2015; valmet-nssc |
| boundary_utilities | utility supply | 本路线外购电网电、管网处理水及干燥蒸汽。厂内燃料锅炉、热电联产或自备取水须另行鉴定过程及原子流；不得遗漏后仍宣称本路线完整。匹配蒸汽压力及供方热量/返回基准，不自动抵扣冷凝水。 | jrc-pulp-paper-bref-2015 |
| boundary_treatment | effluent treatment | 存在厂内处理时纳入；raw_effluent_out与raw_effluent_in为同量内部链接。厂外处理时，实例模型不包含厂内处理模块，且须链接接收方特定处理数据集；最终排放归处理单元，不得两处重复计入。 | jrc-pulp-paper-bref-2015 |
| boundary_exclusions | downstream conversion | 终点为可售、未转换的芯纸卷。起楞调质、起楞、与面纸胶合、纸板裁切和纸箱转换属于另一下游产品系统。资本与维护覆盖按声明的研究要求执行；本稿未列的实际经常性物料或排放须另行记录原子行后方可声称完整。 | fefco-paper-production; jrc-pulp-paper-bref-2015 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| nssc_papermaking | 外供NSSC浆至成品芯纸卷 | required | 在声明供浆路线内 | 前景；同一单元内各阶段独立计量 | 每 1 kg 参考流 |
| effluent_treatment | 实际厂内废水处理 | conditional | 存在厂内澄清/生物处理；否则须厂外接收方数据 | 前景处理；匹配内部转移 | 每 1 kg 参考流 |

造纸阶段账保留接收/碎解 → 精磨/流送 → 成形/压榨 → 干燥 → 分切/复卷/包装，内部白水、同牌号损纸、纤维及冷凝水链接两端同量。这些是nssc_papermaking内部实物平衡，不是额外可售参考产品输出。药剂行仅在所列制剂实际使用时适用；不使用须有依据。实例中其他实际制剂、维护材料或排放须分别补充原子行后方可称完整。

### 过程：NSSC造纸及纸卷交付（`nssc_papermaking`）

#### 输入

##### 产品流

###### 纸浆 （`nssc_pulp`）

外供原生阔叶木浆，采用亚硫酸钠/碳酸盐NSSC蒸煮、机械解纤、洗涤和精磨。广义原生木浆身份仅用于该较窄路线。采集到货湿质量、固含量及供应方参考基准；不得以硫酸盐浆、CTMP、草浆或回收浆替代。

- 选定流：纸浆 `6752b268-93a1-4dca-b098-3f3afa7eaddf`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`jrc-pulp-paper-bref-2015`; `fefco-paper-production`

###### 交流电 （`paper_electricity`）

仅用于已核实的1–35千伏厂区供电接点电网平均交流电。分表计量造纸用电并保留归属的厂内变压损耗；链接实际国家/年份背景，不采用通用排放因子。 来源流声明 CN；物理电压标识不证明地区／时间供电适配。实际工厂不同时须重评标识及供方。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200c9a66`
- 单位组UUID：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`jrc-pulp-paper-bref-2015`

###### 蒸汽供热 (`drying_steam`)

外购工业锅炉蒸汽热用于纸张干燥及实际淀粉蒸煮。该物理热流未规定压力；须测交付压力、温度、干度、供汽质量、冷凝水返回及供方量基准。总热值属性不证明交付净焓，也不提供通用千克到兆焦换算。保留供汽／返回的物理质量账，明确 k_bg 后才使用供方参考 MJ；不采用来源中的基准需热量。

- 选定流：蒸汽供热 `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- 流属性/单位：Gross calorific value / MJ
- 流属性UUID：`93a60a56-a3c8-14da-a746-0800200c9a66`
- 单位组UUID：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：供方参考总热值 MJ 除以同周期净合格纸 kg；实际 k_bg 与净焓换算及供汽／返回物理质量另行保留。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`jrc-pulp-paper-bref-2015`

###### 自来水 （`makeup_water`）

仅为管网处理后的自来水。计量新鲜造纸补水，与ww_makeup_water分开，不将内循环白水计入外购量。自备原水取水需另行核实资源流和处理清单后方可适用。 来源完整名称限定香港水处理厂生产；须实际供方及地区适配，否则重评该流。次要属性中的筛查密度不是本厂实测值。

- 选定流：自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：Volume / m3
- 流属性UUID：`93a60a56-a3c8-22da-a746-0800200c9a66`
- 单位组UUID：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

###### 玉米淀粉 （`dry_strength_starch`）

条件行：湿部实际使用未改性玉米淀粉增强干强度。采集到货粉体质量、水分及蒸煮损失。不得把数据库制备浓度移植为本厂配方；改性淀粉或表面施胶须另行审查流与适用范围。

- 选定流：玉米淀粉 `982918a4-54b1-4792-9ee5-2f3155d4e929`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

###### 阳离子聚丙烯酰胺 （`retention_pam`）

条件行：阳离子聚丙烯酰胺助留剂。记录供应方牌号、离子类型、干聚合物比例和载体；分别保留到货制剂质量及干聚合物质量，不得把溶液数量链接干聚合物背景；不得以阴离子PAM或聚胺替代。使用基准兼容的背景计入全部交付制剂，不遗漏载体。

- 选定流：阳离子聚丙烯酰胺 `ccf600a4-35af-45d6-95b3-cb58590a579f`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

###### 聚二甲基硅氧烷水性消泡乳液 （`defoamer_pdms`）

条件行：实际使用的PDMS水性消泡乳液，须采集组成、交付质量及固含量。纯有机硅、二氧化硅和有机硅胶黏剂并非该乳液；尚未确定精确UUID。其他消泡化学体系须另设行。

- 选定流：聚二甲基硅氧烷水性消泡乳液
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

###### 圆纸筒 （`reel_core`）

条件行：纸板卷芯实际随合格纸卷交付。单独称量卷芯并从净纸产量中扣除；声明供应方结构及后续处理。 记录实际纸板纤维组成及制造路线。重复使用的负担分配不得缩减实际交付、返回或丢弃纸芯的物理质量。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

###### 未涂布印刷书写纸和包装纸 (`kraft_wrapping`)

仅实际未漂白无涂布牛皮卷筒包装纸适用，排除涂布、复合及已加工纸袋／箱。完整名称包含包装纸，但来源图文用纸分类存在待澄清的元数据不一致。仅在实际牛皮纸牌号、纤维组成、涂层状态、质量及供方背景有记录时采用这一宽泛物理标识；UUID 不证明牛皮纸生产负担。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

###### 聚乙烯薄膜 （`pe_wrapping`）

条件行：实际随纸卷交付的聚乙烯薄膜，CAS 9002-88-4。核实PE树脂子类、薄膜牌号及供应方；原记录分类误指箱包，仅有条件保留物理身份，元数据澄清仍待完成。 整膜背景须包含实际添加剂等完整包装配方；仅树脂组分背景不能代表整膜。来源提到 PET 为比较描述，不是所选 PE 聚合物。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

#### 输出

##### 产品流

###### 瓦楞纸，包括表面未涂料的半化学瓦楞纸 （`fluting_output`）

唯一参考产品输出：合格单层未漂白阔叶木NSSC瓦楞芯纸卷，未涂布，不采用表面施胶机或湿部疏水施胶。广义瓦楞原纸流包含该子集，但不授权草浆或回收纤维配方。最终分切复卷后称量，扣除卷芯及运输包装。

- 选定流：瓦楞纸，包括表面未涂料的半化学瓦楞纸 `823c2026-8c74-4f63-b775-88abe4098204`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：`jrc-pulp-paper-bref-2015`; `fefco-paper-production`

###### 返回供汽方的冷凝水 （`condensate_return`）

条件行：跨边界返回供汽方的实测液态冷凝水。记录质量、温度及返回压力，匹配供方返回约定。厂内冷凝水循环为内部链接，不是再次外购公用工程或自动抵扣。

- 选定流：返回供汽方的冷凝水
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 来源：`jrc-pulp-paper-bref-2015`

##### 废物流

###### 固体废物 (`screen_reject`)

实际独立外送的湿 NSSC 纤维／木片筛渣。宽泛固废标识可容纳湿残渣，但不决定其组成、危险属性或处理路线。测完整湿质量、水分／干固体、纤维和污染物并核实接收方；内部再磨料仍为内部物理循环，不记外送废物。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals`
- 来源：`jrc-pulp-paper-bref-2015`

###### 废纸（未指定） （`discarded_broke`）

仅记录实际外送或弃置的同牌号未涂布损纸。内回用湿/干损纸保留在实物纤维账，不跨聚合前景边界；外送须记录组成、水分及接收方。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals`
- 来源：`jrc-pulp-paper-bref-2015`

###### 粉尘 （`collected_dust`）

实际收集并外送为固体废物的纸纤维粉尘。记录助剂污染、水分及接收方；回碎解粉尘为内部循环。不得同时计入空气外排。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals`
- 来源：`jrc-pulp-paper-bref-2015`

###### 废液 (`raw_effluent_out`)

实际工艺排水、清洗及备浆形成的 NSSC 造纸混合废水，作为一股真实液相流。按实测 V 与 rho_eff(T,组成) 得到完整混合物质量千克，另保留污染负荷用体积及实测水质量分数。有厂内处理时，与 raw_effluent_in 的质量、体积、组成及周期完全相等，内部连接不加处置负担；厂外处理须接收方专用处理数据并排除厂内最终排放行。宽泛废液分类不是法定危险属性判定。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测完整废液质量 V × rho_eff(T,组成) 除以同周期净合格纸 kg；转移两端相等。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-pulp-paper-bref-2015`

##### 基本流

###### 颗粒物 (PM2.5) （`cutting_pm25`）

分切/复卷实际经过收集/控制后进入室外空气的PM2.5纸尘，包含核实的逸散损失。采用实测互斥粒径组，不重复计入嵌套PM10、总粉尘、已收集固体粉尘或内循环纸尘。不设默认分切排放因子。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-pulp-paper-bref-2015`

###### 颗粒物 (PM2.5 - PM10) （`cutting_pm25_10`）

分切/复卷实际经过收集/控制后进入室外空气的PM2.5–10纸尘，包含核实的逸散损失。采用实测互斥粒径组，不重复计入嵌套PM10、总粉尘、已收集固体粉尘或内循环纸尘。不设默认分切排放因子。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-pulp-paper-bref-2015`

###### 颗粒物（> PM10） （`cutting_pm_over10`）

分切/复卷实际经过收集/控制后进入室外空气的PM>10纸尘，包含核实的逸散损失。采用实测互斥粒径组，不重复计入嵌套PM10、总粉尘、已收集固体粉尘或内循环纸尘。不设默认分切排放因子。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-pulp-paper-bref-2015`

###### 水蒸气 （`drying_water_vapour`）

实际干燥排气中进入室外空气的水蒸气。依据实测浆/纸水分和水平衡并核对排气确定；与供汽/冷凝返回及液态排水区分。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：`jrc-pulp-paper-bref-2015`

### 过程：厂内废水处理（`effluent_treatment`）

#### 输入

##### 产品流

###### 交流电 （`ww_electricity`）

同一已核实1–35千伏电网供电中归属于废水处理及污泥脱水的部分。核对处理分表、厂内损耗与厂区总表；paper_electricity须扣除该部分。 来源流声明 CN；处理用电须相同实际供电资格核验，独立计量且不重复厂区损耗。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200c9a66`
- 单位组UUID：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

###### 自来水 （`ww_makeup_water`）

条件行：厂内处理药剂制备及清洗单独使用的管网处理自来水。与makeup_water独立计量；排除废水转移、回用过程水及已计入造纸的供水。 来源完整名称限定香港水处理厂生产；须实际供方及地区适配，否则重评该流。处理补水与药剂夹带水分别核算。

- 选定流：自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：Volume / m3
- 流属性UUID：`93a60a56-a3c8-22da-a746-0800200c9a66`
- 单位组UUID：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

###### 熟石灰 （`ww_lime`）

条件行：调节pH实际使用的工业级熟石灰，CAS 1305-62-0，以到货干粉基准计量。核实水化生产路线、纯度及水分；不得直接用生石灰质量或未经制剂核对的石灰乳质量。

- 选定流：熟石灰 `0ef11ca4-62b6-4a66-b5d9-76d6539ec86e`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

###### 三氯化铁 （`ww_ferric_chloride`）

条件纳入真实FeCl3混凝剂，CAS7705-08-0；FeCl2/聚合氯化铁为不同身份。所选源为无水结晶FeCl3，仅真实相容独立供货固体可作为该厂投入；记录到货质量、含量、水分及真实现场溶解水/公用工程一次。外购水溶液为一项完整供货，使用前须有具体兼容溶液卡/供方，涵盖真实供方制造、稀释/配制、助剂、水及交付，或有文件支持的完整供方过程重建。重建中FeCl3及水为供方过程组分需求和分析账，不是额外纸厂采购；保留整湿溶液质量/库存、实际浓度及供方参考换算。仅有效固体换算不足以覆盖已配溶液制造。源有机化学分类冲突仍为元数据债务。

- 选定流：三氯化铁 `d29463c7-fbbf-4811-b122-a651f205d603`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

###### 阳离子聚丙烯酰胺 （`ww_pam`）

条件纳入实际供货、用于澄清/脱水的阳离子聚丙烯酰胺，SDS/牌号、完整供货质量/状态、有效固体、助剂/水及供方湿干参考均与retention_pam分开核实。已配外购溶液/制剂为一项对外供货并涵盖真实供方配制/制造/交付，内含组分仅作分析。使用纯聚合物背景作有文件支持的供方过程重建时，全部实际载体/助剂/配制/公用工程/损失/交付负荷计一次，不仅建组分生产。真实独立采购用于现场混合的化学品/水仍单列。共享UUID不重复一项供货，也不令两用途用量相同。

- 选定流：阳离子聚丙烯酰胺 `ccf600a4-35af-45d6-95b3-cb58590a579f`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_inputs`
- 来源：`jrc-pulp-paper-bref-2015`

##### 废物流

###### 废液 (`raw_effluent_in`)

厂内处理实际接收的完整废水混合物，与 raw_effluent_out 的实测质量、体积、密度、水分、组成及报告周期完全相同。千克由 V 乘 rho_eff(T,组成) 计算；保留未分配的等量物理转移，连接本身不重复计处理负担。不得以纯水或直接环境排放替代混合物；厂外处理时不实例化此厂内模块。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：实测完整废液质量 V × rho_eff(T,组成) 除以同周期净合格纸 kg；转移两端相等。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-pulp-paper-bref-2015`

#### 输出

##### 废物流

###### 造纸污泥 （`primary_sludge`）

实际外送的一次造纸污泥：纤维/细料、混凝形成固体及水，须测组成与干物质。广义造纸污泥身份以该组成及接收方验收为条件；不暗示通用处理路线。

- 选定流：造纸污泥 `b48b29ab-4ead-4413-9adb-07631cd7af09`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sludge`
- 来源：`jrc-pulp-paper-bref-2015`

###### 造纸污泥 （`biological_sludge`）

脱水后外送的剩余生物造纸污泥，记录生物质、助剂、水分和危险特性。与一次污泥分开；共享广义身份并不确立相同处理负荷。

- 选定流：造纸污泥 `b48b29ab-4ead-4413-9adb-07631cd7af09`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sludge`
- 来源：`jrc-pulp-paper-bref-2015`

##### 基本流

###### 水 （`water_discharge`）

仅表示实际处理出水进入已核实淡水受纳体时的水组分，不是整股混合物或取水。用 V_eff × rho_eff(T,组成) × 实测水质量分数得到水质量，再除 rho_water(T) 得到此体积参考流。另保留 V_eff 用于同期污染负荷计算。不默认 1000 kg/m3、纯水或与完整出水体积相等；低固体近似须记录依据和不确定性。其他受纳体须另选标识。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：Volume / m3
- 流属性UUID：`93a60a56-a3c8-22da-a746-0800200c9a66`
- 单位组UUID：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-pulp-paper-bref-2015`

###### chemical oxygen demand（直读未提供中文名称） （`cod_water`）

排入淡水的COD以需氧当量质量计量，声明检测方法及流量加权浓度。直读未提供中文baseName，保留英文名称。不得用该总量指标隐藏已知高影响单一化学物质。

- 选定流：chemical oxygen demand（直读未提供中文名称） `08a91e70-3ddc-11dd-97ed-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-pulp-paper-bref-2015`

###### 生物需氧量 （`bod_water`）

排入淡水的实测需氧量质量，声明检测周期、温度和是否抑制硝化。COD和BOD是重叠分析指标，不得相加为实物污染物质量或对同一需氧负荷重复计入影响。

- 选定流：生物需氧量 `08a91e70-3ddc-11dd-97de-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-pulp-paper-bref-2015`

###### 排入淡水的悬浮物 （`tss_water`）

根据实际实验室方法、样品及同期排水流量计算的淡水悬浮物负荷。不以数据库的水体未特指身份代理淡水。已单独表示的颗粒组分不得重复计入。

- 选定流：排入淡水的悬浮物
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-pulp-paper-bref-2015`

###### 总氮（不含N₂） （`tn_water`）

以千克N表示排入淡水的总结合氮，排除N₂；检测方法覆盖有机氮时计入有机氮。不得把仅无机氮结果标为总氮。若掌握单一氮物种，逐项记录并核对余项，不得将总氮与同一物种重复相加。

- 选定流：总氮（不含N₂） `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-pulp-paper-bref-2015`

###### 总磷 （`tp_water`）

以千克P表示排入淡水的总磷，不是磷酸根或磷酸铵质量。已知单一磷物种须另核身份并核对，不与总量指标重复计入。

- 选定流：总磷 `f9df3107-6b59-4067-b920-3c61cf3630c7`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`jrc-pulp-paper-bref-2015`

###### 二氧化碳（生物源） （`ww_co2_bio`）

厂内废水处理实际排向室外空气的生物源CO₂，核实纤维/淀粉碳来源及实测或可追溯处理碳平衡。即使气候指标排除该项也保留LCI交换；不得把所有去除COD均换为CO₂。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_gases`
- 来源：`jrc-pulp-paper-bref-2015`

###### 二氧化碳（化石源） （`ww_co2_fossil`）

条件行：已核实化石碳组分在处理过程中向室外空气释放的化石源CO₂。按组成及碳证据与生物碳分开；不得假定化石碳不存在或等于全部助剂投加量。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_gases`
- 来源：`jrc-pulp-paper-bref-2015`

###### 甲烷 (生物源) （`ww_ch4`）

条件行：实际厌氧处理/贮存区向室外空气释放的生物源甲烷。分别计量捕集、氧化和未捕集气体；不采用通用COD转甲烷系数或默认排放。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_gases`
- 来源：`jrc-pulp-paper-bref-2015`

###### 甲烷 (化石源) （`ww_ch4_fossil`）

条件行：已核实化石碳组分产生并排入室外空气的甲烷；依据处理气体和碳证据与生物源甲烷分开。未知来源比例保持未决，不计为零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_gases`
- 来源：`jrc-pulp-paper-bref-2015`

###### 一氧化二氮 （`ww_n2o`）

条件行：实际氮转化向室外空气释放的N₂O分子质量。采用监测或附不确定性及氮平衡的场址模型；不得混淆N₂O-N与分子质量，且不纳入NOx。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_gases`
- 来源：`jrc-pulp-paper-bref-2015`

###### 氨 （`ww_ammonia`）

条件行：实际处理过程中排入室外空气的氨分子质量。按排放边界监测确定；NH₃-N须按有据可查的分子量换算，不得与溶解态总氮混淆。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 流属性UUID：`93a60a56-a3c8-11da-a746-0800200b9a66`
- 单位组UUID：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：每参考流的采集交换数量；采用链接协议及同期净合格纸分母。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_ww_gases`
- 来源：`jrc-pulp-paper-bref-2015`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared production burdens | 先分离计量造纸、公用工程与处理；分配前考察细分或系统扩展。其次采用有因果依据的物理关系；经济分配仅为披露的后备，须说明理由、同期价格及敏感性。不规定固定份额。 | ec-pef-2021-multifunctionality |
| allocation_physical | physical and burden accounts | 未分配的纤维、水、碳及能量平衡须与归属环境负荷账分开。保留共产品实测实物输出和同量内部链接；不得以分配份额机械乘实物输出。归属负荷仅分配一次，并核对剩余份额总和及不确定性。 | ec-pef-2021-multifunctionality; jrc-pulp-paper-bref-2015 |
| allocation_residuals | broke and sludge | 内回用损纸/白水回收不是共产品。按实际品质、法定/接收方验收及去向判定废物或共产品；售价不确立替代关系。没有选定系统模型及基准兼容的接收方证据，不予回收或蒸汽返回抵扣。 | ec-pef-2021-multifunctionality |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | nssc_papermaking | 合格芯纸 | 采集记录 | 牌号；纸卷编号；净纸千克；卷芯/包装皮重；水分；定量；厚度；CMT/SCT检测方法；报告周期 | 最终分切复卷后以校准秤称量；保留皮重及合格/不合格批记录；按实际检测协议测水分及采购方品质。 | kg | 逐卷及代表性牌号/水分批 | 同一报告周期，覆盖实际牌号生产及运行变更 | 声明工厂及路线；处理接收方另行识别 | 每 1 kg 参考流 | 校准；可追溯凭据；方法；代表性取样；平衡；不确定性 |
| cp_inputs | nssc_papermaking | 浆及每种实际药剂/水/包装 | 采集记录 | 供方；投入牌号/路线；质量或体积；固含量/水分；制剂/载体；槽/库存变化；周期；计量器编号；背景参考基准 | 称量交付，核对期初/期末库存及阶段投加记录，计量新鲜管网水；每种药剂独立交换。检查供浆方NSSC/回收链。 | kg; m3 | 连续计量；逐次交付及逐批 | 同一报告周期，覆盖实际牌号生产及运行变更 | 声明工厂及路线；处理接收方另行识别 | 每 1 kg 参考流 | 校准；可追溯凭据；方法；代表性取样；平衡；不确定性 |
| cp_utilities | nssc_papermaking | 蒸汽及电力 | 采集记录 | 阶段千瓦时；厂区千瓦时；电压；损耗；蒸汽千克；交付压力/温度；蒸汽品质；冷凝水千克/温度/压力；供方净热定义；周期; 供方 k_bg；成对焓基准和热损失；供方参考 MJ | 核对校准厂区及阶段表，包含备浆、干燥和精整；测成对供汽/返回条件；热背景链接前取得供方定义。 | kWh; kg; MJ; pressure; temperature | 连续并在生产周期核查 | 同一报告周期，覆盖实际牌号生产及运行变更 | 声明工厂及路线；处理接收方另行识别 | 每 1 kg 参考流 | 校准；可追溯凭据；方法；代表性取样；平衡；不确定性 |
| cp_residuals | nssc_papermaking | 筛渣；外送损纸；收集粉尘 | 采集记录 | 独立流编号；湿质量；干物质；纤维；助剂/污染；回用或外送；接收方；处理；周期 | 分别称量外送流并取样测组成；另记内部湿/干损纸及粉尘返工。不得合并筛渣、废纸和粉尘。 | kg | 逐次外送及代表性批 | 同一报告周期，覆盖实际牌号生产及运行变更 | 声明工厂及路线；处理接收方另行识别 | 每 1 kg 参考流 | 校准；可追溯凭据；方法；代表性取样；平衡；不确定性 |
| cp_air | nssc_papermaking | 分切纸尘；干燥水蒸气 | 采集记录 | 源点；运行小时；排气流量；温度/压力；湿干基准；粒径浓度；收集器固体；逸散估算方法；湿度；周期 | 检测实际分切/复卷控制后的排气和逸散；使用互斥空气动力粒径、同期排气条件和干燥水平衡。记录有据非发生，不假定零。 | kg; gas volume; concentration | 代表性稳定工况，并含开停机及变更 | 同一报告周期，覆盖实际牌号生产及运行变更 | 声明工厂及路线；处理接收方另行识别 | 每 1 kg 参考流 | 校准；可追溯凭据；方法；代表性取样；平衡；不确定性 |
| cp_effluent | effluent_treatment | 内部转移及最终水/污染物 | 采集记录 | 进/出水体积；同期样品浓度；COD方法；BOD周期；TSS方法；TN有机/无机范围；TP以P计；受纳体；不确定性；周期; rho_eff(T,组成)；水质量分数；rho_water(T)；完整混合物千克；水组分体积 | 在同期采用校准流量计及流量加权代表性采样；保留分析方法、检出限和受纳水体证据。原废水转移两端保留相同记录；厂外转移采用接收方记录。 | m3; mg/L; kg | 连续流量；代表性日混合样及事件样 | 同一报告周期，覆盖实际牌号生产及运行变更 | 声明工厂及路线；处理接收方另行识别 | 每 1 kg 参考流 | 校准；可追溯凭据；方法；代表性取样；平衡；不确定性 |
| cp_ww_inputs | effluent_treatment | 处理电力及每种药剂 | 采集记录 | 处理千瓦时；独立自来水立方米；药剂身份；牌号；湿投加量；固含量/纯度；库存；载体；周期；上游参考基准 | 将处理电力/新水与造纸供给分开。计量投加并逐真实完整药剂/配方采购按兼容湿干参考核对库存和投加，并保留实际供方制造/配制/交付一次；内含组分仅作组成平衡。真实独立原料及现场混合/稀释公用工程分别记录。有文件支持的供方过程重建保留完整供货数量及全部组分/配制/公用工程/损失负荷，不重复纸厂投入。 | kWh; m3; kg | 连续电量；逐次投加/逐批 | 同一报告周期，覆盖实际牌号生产及运行变更 | 声明工厂及路线；处理接收方另行识别 | 每 1 kg 参考流 | 校准；可追溯凭据；方法；代表性取样；平衡；不确定性 |
| cp_sludge | effluent_treatment | 一次及剩余生物污泥 | 采集记录 | 流名称；湿千克；固含量；生物质/纤维；混凝剂；污染/危险特性；接收方；处理；周期 | 交付时分别称量并测代表性组成/干物质；按处理记录核对初沉和剩余生物污泥。 | kg | 逐次外送及代表性取样 | 同一报告周期，覆盖实际牌号生产及运行变更 | 声明工厂及路线；处理接收方另行识别 | 每 1 kg 参考流 | 校准；可追溯凭据；方法；代表性取样；平衡；不确定性 |
| cp_ww_gases | effluent_treatment | 每种处理气体排放 | 采集记录 | 气体物种；气量；浓度；湿干温压；捕集/氧化/逸散量；化石/生物碳；溶解/污泥碳；氮转化；分子基准；不确定性；周期 | 监测实际处理/贮存相关气体外排，或使用有实测输入、换算依据及不确定性的可追溯场址碳/氮模型。保留来源拆分并指出未知物种，不设通用正排放因子。 | kg | 代表性处理周期，含异常/贮存事件 | 同一报告周期，覆盖实际牌号生产及运行变更 | 声明工厂及路线；处理接收方另行识别 | 每 1 kg 参考流 | 校准；可追溯凭据；方法；代表性取样；平衡；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 每一流用归属报告周期的交换总量除以同周期净合格纸产量（千克）；结果以每1千克参考流表示。不以设计产能为分母或简单平均逐日强度。 | period exchange quantity; same-period net paper kg | exchange per 1 kg reference flow | jrc-pulp-paper-bref-2015 |
| dry_matter_reconciliation | nssc_pulp, fluting_output, screen_reject, primary_sludge, biological_sludge | 干物质为实测湿质量乘实测固含量。供方风干/绝干基准换算须有其参考干度定义；另核携带水。净参考输出仍为声明水分下的实际合格纸质量。 | wet mass; measured solids; supplier basis | separate wet/dry and carried-water records | jrc-pulp-paper-bref-2015 |
| electricity_conversion | paper_electricity, ww_electricity | 实测千瓦时乘3.6换为MJ；保留平台Net calorific value属性名，但不把电力当燃料。归属损耗对照厂区供电表仅核计一次。 | meter kWh; site loss reconciliation | MJ |  |
| water_pollutant_load | cod_water, bod_water, tss_water, tn_water, tp_water | 匹配采样时段内，浓度（毫克/升）乘对应流量（立方米）再除1000得千克；先累计时段负荷，再除同期净合格纸千克。保留需氧/N/P/固体分析基准及检出限。 | matching concentration; effluent volume; net paper kg | kg per 1 kg reference flow | jrc-pulp-paper-bref-2015 |
| steam_basis_reconciliation | drying_steam, condensate_return | 在同一参考状态下，以实际供汽焓流减返回焓流及按供方边界未交付的热损失得到 H_net；损失只计一次。q_heat=H_net×k_bg/P，P 为净合格纸 kg，k_bg 为实测／供方明确的参考 GCV MJ 每净交付 MJ 换算。未知 k_bg 则热背景链接未完成，不用燃料热值比、默认1或来源基准填补。供汽／冷凝水 kg 另列，已扣返回热不得再给冷凝水热信用。 | steam and condensate records; supplier basis; k_bg; P | provider-reference MJ per 1 kg reference flow; separate physical mass ledger | jrc-pulp-paper-bref-2015 |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_route | nssc_pulp | 核实实际纤维树种、原生属性、亚硫酸钠NSSC及回收系统；相近强度或CPC标签不够。 | 供方记录及路线特定上游数据 |
| quality_balance | all inventory rows | 采用完整周期总量、库存变化和阶段记录，匹配湿/干数量定义，保留实测不确定性与差额核对；不虚构平衡流。 | cp_output及全部适用协议；jrc-pulp-paper-bref-2015 |
| quality_gap | all inventory rows | 独立披露精确身份及背景缺口、全部额外实际药剂/物种及取样缺失；未知不等于不存在。 | 供方/实验室记录、过程图及完整性账 |

raw_effluent_out/in 两端保留相同 V、rho_eff(T,组成)、水质量分数和 kg=V×rho_eff。water_discharge 水组分体积为 V_eff×rho_eff×x_water/rho_water(T)，完整出水 V_eff 仍用于污染物浓度换算。采集实际密度、温度、取样基准及不确定性，不默认密度或纯水近似。

依据实际采购、使用和废弃记录检查成形网、压榨毛毯、切纸刀、润滑、清洗及维护耗材；每种实际材料须独立原子流并核验供方／接收方，不虚构寿命质量，不合并真实物流。

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | dataset applicability | 核实原生阔叶木亚硫酸钠NSSC纤维及声明的精整/公用工程路线。不同纤维/浆法须独立核实配方、排放覆盖和上游数据；牌号标签不证明等价。 | jrc-pulp-paper-bref-2015; valmet-nssc |
| validate_denominator | all inventory rows | 恰好一个参考输出为1千克净合格纸。全部交换数量和协议聚合采用同一参考；纸卷/卷芯毛质量、设计产能、内回用损纸及湿浆吨数不得替代净合格纸质量。 | jrc-pulp-paper-bref-2015 |
| validate_utilities | background linking | 确认电网供电电压/损耗边界、供水路线及蒸汽压力、饱和状态、返回和数量基准。身份UUID及参考属性本身不确立背景兼容；供方定义未决阻止完整数据集链接。 | jrc-pulp-paper-bref-2015 |
| validate_balance | physical links and accounts | 核对湿/干纤维、药剂、产品水分、水、污泥、空气损失、碳及能量。raw_effluent转移两端同量；内回收不计外购或外排。按实测不确定性披露平衡差额，不设虚构统一容差。 | jrc-pulp-paper-bref-2015 |
| validate_emissions | elementary exchanges | 核实受纳介质、物种、化石/生物来源及分子/元素/需氧基准。采用互斥PM粒径，另保留收集固体粉尘。COD/BOD和营养盐总量为分析指标，不是可叠加污染物质量；不得隐藏已知物种或重复计负荷。LCI保留生物源CO₂。 | jrc-pulp-paper-bref-2015 |
| validate_gaps | completeness | 空UUID、未计量交换、未知物种、缺失供方及无支持换算均显式保留。零值须有实测或有据非发生记录；缺失不是零。已编写PCR指导采集，不证明工厂LCI已完成或已获科学批准。 | jrc-pulp-paper-bref-2015 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 基于完整证据完成前景生产后，作为路线与牌号匹配的瓦楞纸板模型芯纸投入 |
| allowed_use | 上游及公用工程/处理链接已核实的声明未涂布原生阔叶木NSSC纸卷 |
| excluded_use | CPC 32134全类平均；草浆/回收浆/CTMP/硫酸盐浆替代；成品纸板/纸箱输出；通用配方；不完整摇篮到厂门LCI |
| required_metadata | 限定信息、报告/场址/技术范围、未分配实物图及归属负荷账、供方、数量基准、方法、边界、分配及更新日期 |
| required_quality_disclosure | 不确定性、时间代表性、全部UUID/供方/物种缺口、替代、遗漏范围、平衡及实测/模型数量；不声称方法已审核 |
| update_trigger | 纤维/浆法/回收变化；配方或施胶变化；公用工程供方/压力变化；处理/受纳体变化；产品规范或重要计量变化 |

## 11. 数据源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| jrc-pulp-paper-bref-2015 | official_guidance | JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board (2015). https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 2.2.2.1.4–1.5（净产量与水负荷监测，PDF第86–88页）；4.1.1.5及图4.2（NSSC，PDF第413–414页）；7.1.1–4、7.1.10–11及箱纸板说明（PDF第698、700、702–704、708、715页）。仅支持工艺及计量方法，不采用历史数量或BAT-AEL默认值。 |
| fefco-paper-production | official_guidance | FEFCO, Paper production process. https://www.fefco.org/lca/dscription-of-production-system/paper-production | 原生与回收芯纸区别、NSSC/造纸顺序、单层芯纸、复卷及起楞前交付。典型一体化厂说明不证明本前景包含制浆，也不证明外购浆厂典型。读取于2026-10-12。 |
| valmet-nssc | literature | Valmet, NSSC pulping. https://www.valmet.com/pulp/mechanical-pulping/nssc-pulping/ | 制造商工艺说明支持阔叶木亚硫酸盐/碳酸盐浸渍、蒸煮、精磨/洗涤及芯纸适用性。其运行时间、温度和能耗不作为通用配方或系数。读取于2026-10-12。 |
| ec-pef-2021-multifunctionality | official_guidance | European Commission, Recommendation (EU) 2021/2279, Annex I section 4.5, PDF pp63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 仅采用一般分配层级；不声称完整PEF符合性，不设默认份额。 |
