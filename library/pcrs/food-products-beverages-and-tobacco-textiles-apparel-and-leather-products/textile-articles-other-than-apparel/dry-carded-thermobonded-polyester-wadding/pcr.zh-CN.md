---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-carded-thermobonded-polyester-wadding
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 干法梳理热粘合聚酯絮胎


## 1. 范围与适用性

本方法适用于外购原生 PET 短纤与已识别的 PET 芯/共聚酯皮低熔点粘结纤维，经干法开松、混配、梳理、交叉铺网、电热风热粘合，以及冷却、检验、分切和卷片包装制成的高蓬松聚酯缓冲絮胎。代表用途是家具或床品的未制成制品缓冲层，尚未装入消费制品。

CPC 27991 比本方法宽。长度不超过 5 mm 的短绒、作为商品的纺织粉尘、棉结、棉或毛絮胎、医用絮胎，以及树脂粘合、针刺、湿法成网、气流成网、再生纤维和燃料加热路线均不覆盖。供应规范须确认絮胎身份；分类为非织造布或毡的材料，即使设备相似，也须采用相应方法。不声称覆盖整个分类叶。来源：`un-cpc3-notes-2025`、`gulf-wadding-route`; `parishudh-wadding-routes`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-carded-thermobonded-polyester-wadding |
| classification_refs | CPC 3.0: 27991; 狭义语义子集；不构成已接受映射 |
| covered_products | 未制成制品的原生 PET/共聚酯热粘合缓冲絮胎卷与片 |
| excluded_products | 短绒、粉尘商品、棉结、医用絮胎、非织造布、毡、绗缝或层压制品、松散填充物及第 1 节排除路线 |
| representative_product | 组成按质量声明、尺寸经实测的无面层高蓬松缓冲絮胎卷 |
| production_route | 外购已加工短纤 → 干法开松混配 → 梳理交叉铺网 → 电热风粘合 → 冷却 → 分切放行包装 |
| market_state | 厂门已验收絮胎净质量，明确调湿状态；包装单列 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应符合声明采购规范的缓冲絮胎 |
| How much | 1 千克已验收絮胎净质量 |
| How well | 声明组成、规定压力下蓬松度/厚度、面密度、幅宽、粘合完整性和约定质量验收；不假定保温值或合规批准 |
| How long or cycle | 一批厂门生产；不声称寿命或等效缓冲服务 |
| reference_flow_link | finished_wadding |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 热粘合聚酯絮胎 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 絮胎身份；PET/粘结纤维芯皮组成与质量分数；原生含量；来料加工态与油剂；切断长度；细度；卷曲；截面；电加热路线；面密度；幅宽；厚度和测试压力；调湿/含水率；粘合验收；包装配置与皮重；地域；实际供电电压；产线；报告期 |

参考产品名称与成品输出行一致。产品 UUID 缺失不免除物理身份或质量记录。质量仅为制造比较基准，不证明等效热功能或缓冲功能。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished_wadding | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准称量的已验收絮胎净质量，不含任何包装、卷芯或不合格品；清单基准为每 1 kg 参考流。 |
| `mass_state` | pet_staple; binder_fibre; captured_fibre; particulate_air; ldpe_film; paper_core; finished_wadding; wadding_trim | Mass | kg | 记录来料、调湿与干质量状态；平衡前用实测含水测试核对。不把水分损失当 PET 损失。 |
| `energy_property` | prepare_electricity; bond_electricity; finish_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开参考属性与能量单位组；实测 kWh 乘以 3.6 得 MJ。不得把身份改为质量。 |
| `roll_mass` | finished_wadding | Mass | kg | 用实际卷芯/包装皮重称量净卷质量。采用面积记录时实测匹配面密度，以面积 m2 × 面密度 g/m2 / 1000 得 kg；记录幅宽长度和取样。不设默认面密度或卷重。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 转化厂接收外购已切断、卷曲、供应商油剂处理的原生 PET 短纤与指定低熔点双组分短纤 |
| starting_condition_role | 上游产品；前景始于接收，不始于聚合物或纤维合成 |
| product_classification_scope | CPC 27991 中缓冲絮胎子集；须有供应商与分类证据 |
| recursive_input_rule | 外购已粘合絮胎不属本完整成网路线。后续转化数据集仅关联一次该投入并建模增量操作。内部纤维网转移在同一场址关联。 |
| upstream_dataset_requirement | 关联真实纤维、粘结纤维、电力和包装供应数据集，匹配组成、来源和地域；披露代理 |
| disclosure | 厂门、产线、纤维处理、烘箱热源、库存返工、辅助电表、排放、废物去向、包装、分配及遗漏 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all processes | 纳入接收搬运、干法开松混配、梳理铺网、电热粘合、冷却、质量放行、分切卷绕、包装及可归属除尘公用设施直至厂门。此为厂门到厂门制造；声称摇篮到厂门前须关联上游清单。 | `gulf-wadding-route`; `parishudh-wadding-routes` |
| `boundary_exclusions` | upstream and downstream | 不含石油开采、PET/共聚酯制造、纤维挤出牵伸切断、农业、下游家具装配/绗缝、配送、使用与处置。披露设备基础设施排除。纤维来源与来料油剂仍为上游限定。 | `un-cpc3-notes-2025` |
| `boundary_actual_auxiliaries` | all processes | 湿洗、染色和树脂施加不属本路线。不预设工艺用水、废水或燃烧排放。真实可归属调湿、冷却补水、润滑或清洁交换须各以具体原子行和采集证据记录；区分供水、资源取用与废水。缺失数据不是零。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `prepare` | 开松混配梳理与交叉铺网 | required | 声明的干法梳理路线 | 关联前景阶段 | 每 1 kg 参考流 |
| `bond` | 电热风粘合与冷却 | required | 声明低熔点粘结纤维路线 | 关联前景阶段 | 每 1 kg 参考流 |
| `finish` | 检验分切卷绕与包装 | required | 已验收絮胎放行；压辊平整仅实际存在时 | 关联前景阶段 | 每 1 kg 参考流 |

这些阶段组成同一连通场址清单。按批次和实测转移质量追踪阶段间未粘合纤维网与粘合絮胎，核对两端与内部返工，不作第二笔外部投入或重复上游负荷。保留各操作及电表，不平均未知路线。

### 过程：开松混配梳理与交叉铺网 (`prepare`)

各纤维喂入独立记录，混配开松后梳理铺网。吸风与压缩机电力按实际供给边界归属。

#### 输入

##### 产品流

###### 涤纶短纤维 (`pet_staple`)

仅原生 PET 纺织短纤，来料已切断、卷曲并完成供应商油剂处理；本行不含粘结纤维。记录长度、细度、卷曲、截面、供应商油剂及来料含水率；此身份不涵盖再生纤维。

- 选定流：涤纶短纤维 `03377e13-45a0-4774-9cc8-37c8c60523f2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可归属交换数量除以同期已验收絮胎净质量 kg；采用 cp_material。保留所声明分子单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### PET 芯共聚酯皮低熔点双组分短纤维 (`binder_fibre`)

本限定路线所需。核对实际芯皮聚合物、质量比、切断长度和供应商油剂；以净称量领料和退料建立配方，不设默认粘结比例。其他粘结聚合物须另作范围判断。

- 选定流：PET 芯共聚酯皮低熔点双组分短纤维
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可归属交换数量除以同期已验收絮胎净质量 kg；采用 cp_material。保留所声明分子单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`gulf-wadding-route`; `parishudh-wadding-routes`

###### 交流电 (`prepare_electricity`)

此 UUID 仅用于中国电网平均消费组合、到用户且电压低于 1 kV 的供电。分别记录开包、混配、喂入、梳理、交叉铺网、吸风和可归属压缩空气生产电量，核对共享电表。其他地域或电压须另行核定身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：实测可归属交换数量除以同期已验收絮胎净质量 kg；采用 cp_energy。保留所声明分子单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 废物流

###### 捕集的 PET 与共聚酯纤维粉尘 (`captured_fibre`)

仅捕集粉尘外送处理时适用。扣容器皮重称量捕集混合纤维，记录组成、污染和去向。厂内回用是内部转移，不是外送废物或避免产品。

- 选定流：捕集的 PET 与共聚酯纤维粉尘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可归属交换数量除以同期已验收絮胎净质量 kg；采用 cp_waste。保留所声明分子单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 颗粒物，粒径未特指 (`particulate_air`)

仅实际测得排至空气、子环境未特指且未测粒径分级的颗粒物释放时适用。数量为治理后释放量，不是捕集纤维、水中悬浮物或默认排放。已知粒径或子环境时拆分并核定匹配身份，不再把同一质量重复报为未分级颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可归属交换数量除以同期已验收絮胎净质量 kg；采用 cp_air。保留所声明分子单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_air`
- 来源：

### 过程：电热风粘合与冷却 (`bond`)

记录烘箱加热风量、冷却及纤维网转移。来源支持热激活，不支持通用温度、停留时间或燃料选择。

#### 输入

##### 产品流

###### 交流电 (`bond_electricity`)

仅中国用户端低于 1 kV 电网平均供电。分别计量电热风加热、风机及冷却电量；保留实际烘箱设置、停留时间、产量、启动和空转记录。本 PCR 仅含电加热；燃料燃烧或外购热烘箱须另建路线清单。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：实测可归属交换数量除以同期已验收絮胎净质量 kg；采用 cp_energy。保留所声明分子单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

### 过程：检验分切卷绕与包装 (`finish`)

记录实测尺寸、厚度测试压力和已验收批次。仅实际操作时纳入平整；保留每项不合格品与包装组件。

#### 输入

##### 产品流

###### 交流电 (`finish_electricity`)

仅中国电网平均用户端低于 1 kV 供电。计量分切、卷绕、压缩、检验设备与包覆电量；纳入实际可选平整或压辊驱动，不设通用压力或能耗。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：实测可归属交换数量除以同期已验收絮胎净质量 kg；采用 cp_energy。保留所声明分子单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 低密度聚乙烯薄膜（PE-LD） (`ldpe_film`)

实际采用 LDPE 卷材保护膜时适用。记录净膜领用质量减未用退回，参考产品净质量不含膜。存在其他膜、标签、带和托盘时须各设一条原子行。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可归属交换数量除以同期已验收絮胎净质量 kg；采用 cp_packaging。保留所声明分子单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

###### 纸板卷绕芯 (`paper_core`)

供应卷绕芯时适用。称量实际纸芯，记录组成和实际复用退回记录；不假定寿命，不把卷材毛质量当产品质量。

- 选定流：圆纸筒 `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可归属交换数量除以同期已验收絮胎净质量 kg；采用 cp_packaging。保留所声明分子单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

#### 输出

##### 产品流

###### 热粘合聚酯絮胎 (`finished_wadding`)

已验收未制成制品的缓冲用絮胎卷或片，无面层、绗缝、层压、树脂浸胶或追加湿整理。净质量不含包装与不合格品。披露组成、面密度、幅宽、规定压力下厚度和验收规范。

- 选定流：热粘合聚酯絮胎
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output`
- 来源：

##### 废物流

###### PET 与共聚酯絮胎边角料 (`wadding_trim`)

边角料或不合格絮胎外送时适用。粘合边料与捕集松散粉尘分开。实测组成并记录处理去向；内部退回只在物料账中计一次。出售的降级絮胎是独立产品，不自动视为废物。

- 选定流：PET 与共聚酯絮胎边角料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测可归属交换数量除以同期已验收絮胎净质量 kg；采用 cp_waste。保留所声明分子单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | all processes | 先分割批次与电表。共享电力、吸风与压缩机服务采用与消耗有可验证关系的实测阶段运行时间/负载或交付服务，并核对全厂总量。无法测得该关系时，记录其他物理基准与敏感性；不虚构通用因子。前景 cp_energy 协议持有依据。 |  |
| `allocation_rework` | material ledger | 内部边料回用与返工只计一次，不给予避免原生纤维抵扣。外送废物记录去向。存在可售降级絮胎时分别实测净质量/规范，直接归属可分离操作；未能分割的共同负荷须有书面物理关系，或经论证的经济替代，保留真实价格数量和敏感性记录。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | prepare | pet_staple; binder_fibre | 批次称量与库存账 | 批次；领用 kg；退回 kg；期初期末库存；纤维聚合物；原生状态；油剂；含水率；长度；细度；卷曲；芯皮比 | 经校准秤和供应商规范；各喂入独立实测并核对库存变化。 | kg | 各批次/电表时段或代表性排放测试 | 实际声明报告期，含启动、空转及不合格品 | 声明的连通絮胎产线及分配场址辅助设施 | 每 1 kg 参考流 | 校准；原始账；批次身份；核对；适用时的不确定性和检出限 |
| `cp_energy` | prepare; bond; finish | electricity | 分表与运行日志 | 阶段；电表；起止 kWh；地域；电压；运行时间；负载；烘箱加热/风机 kWh；压缩机分配；停机 | 读取经校准阶段电表；以真实实测驱动量归属共享服务并核对总量；kWh 乘 3.6 得 MJ。 | MJ | 各批次/电表时段或代表性排放测试 | 实际声明报告期，含启动、空转及不合格品 | 声明的连通絮胎产线及分配场址辅助设施 | 每 1 kg 参考流 | 校准；原始账；批次身份；核对；适用时的不确定性和检出限 |
| `cp_output` | finish | finished_wadding | 净称量与质量放行 | 批次；毛质量 kg；实际卷芯/膜皮重 kg；净验收 kg；不合格 kg；含水率；面密度；幅宽；长度；厚度；压力；粘合完整性；组成 | 经校准秤称量验收絮胎并扣实际包装皮重；保留匹配调湿、批次试验与采购方验收。 | kg | 各批次/电表时段或代表性排放测试 | 实际声明报告期，含启动、空转及不合格品 | 声明的连通絮胎产线及分配场址辅助设施 | 每 1 kg 参考流 | 校准；原始账；批次身份；核对；适用时的不确定性和检出限 |
| `cp_waste` | prepare; finish | captured_fibre; wadding_trim | 分流称量与去向记录 | 阶段；流；毛质量 kg；皮重 kg；干/调湿基准；组成；污染；内部退回；外送 kg；去向 | 各分流独立称量；内部转移与外送残余物分开核对；保留处理接收记录。 | kg | 各批次/电表时段或代表性排放测试 | 实际声明报告期，含启动、空转及不合格品 | 声明的连通絮胎产线及分配场址辅助设施 | 每 1 kg 参考流 | 校准；原始账；批次身份；核对；适用时的不确定性和检出限 |
| `cp_air` | prepare | particulate_air | 条件性释放监测 | 来源；治理；浓度；排气体积；持续时间；粒径分级；空气子环境；检出限；捕集 kg | 实测释放颗粒物浓度与匹配干态/标态排气体积，一致相乘得到 kg。涵盖代表工况及无组织释放评估。不以捕集粉尘替代，不把未测释放设为零。 | kg | 各批次/电表时段或代表性排放测试 | 实际声明报告期，含启动、空转及不合格品 | 声明的连通絮胎产线及分配场址辅助设施 | 每 1 kg 参考流 | 校准；原始账；批次身份；核对；适用时的不确定性和检出限 |
| `cp_packaging` | finish | ldpe_film; paper_core | 组件领退与皮重 | 组件；组成；数量；称量净 kg；未用退回；实际复用退回；损失；发运配置 | 各真实包装组件独立称量并核对净领用及有记录的复用。数量记录须有实测组件质量；不假设寿命。 | kg | 各批次/电表时段或代表性排放测试 | 实际声明报告期，含启动、空转及不合格品 | 声明的连通絮胎产线及分配场址辅助设施 | 每 1 kg 参考流 | 校准；原始账；批次身份；核对；适用时的不确定性和检出限 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | 各同期可归属净交换除以 cp_output 的验收絮胎净质量 kg，保留分子单位。成品输出为 1 千克。 | net exchange; accepted net kg; cp_output | 交换单位每 1 kg 参考流 |  |
| `calc_balance` | material ledger | 在一致含水基准下，以外部纤维/粘结纤维投入加库存减少，对比验收产品、各外送残余物、实际排放与库存增加；报告并调查差额，不设假定损耗因子。内部转移抵消。 | cp_material; cp_output; cp_waste; cp_air; stock | 质量平衡与差额 |  |
| `calc_electricity` | prepare_electricity; bond_electricity; finish_electricity | 归一化前将实测可归属 kWh 乘以 3.6 换为 MJ；核对阶段，避免吸风重复计算。 | cp_energy | MJ 每 1 kg 参考流 |  |
| `calc_air_release` | particulate_air | 以同期一致的实测浓度及排气体积得到释放 kg，涵盖运行持续时间；披露外推和检出限。再以 cp_output 归一化。 | cp_air; cp_output | kg 每 1 kg 参考流 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | all rows | 核对聚合物、物理状态、供应油剂、质量基准与选定流精确条件，保留官方本地化名。空 UUID 是身份缺口，不是缺失交换。 | 供应证明与流身份文件 |
| `quality_representative` | all processes | 使用实际期间、产品规范、产线、烘箱类型和产率；报告全部运行、不合格品及停机覆盖与不确定性。不设默认配方、温度、能耗、废物因子或健康批准。 | 生产账；校准；实际运行日志 |
| `quality_completeness` | site boundary | 筛查每项真实辅助、包装组件与释放；适用时增具体行。披露遗漏及影响评价覆盖，尤其未分级颗粒物；不把缺失数据设为零。 | 场址调查与平衡/覆盖核对表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | 须证明产品为絮胎而非毡/非织造布/医用/制成制品，声明原生与粘结组成、电热路线及每项参考限定。拒绝用于未评估路线。 | `un-cpc3-notes-2025` |
| `validate_measurement` | all inventory rows | 须有匹配分母、实测净质量、关联采集协议、实际皮重、能量属性保留与显式换算；核对全部阶段总量和平衡差额。缺失实测应判不确定。 |  |
| `validate_release` | waste and elementary rows | 核对流型、实际存在、接受介质、子环境、粒径及去向。捕集粉尘是废物，空气释放是基本流。不借用水、土壤或燃烧身份表示纤维释放，不把未分级颗粒物等同 PM2.5。 |  |
| `validate_claims` | dataset use | 声明身份缺口、遗漏操作、计量覆盖与上游关联限制。候选数据集或结构检查不建立科学批准、发表或完整摇篮到厂门覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景厂门到厂门絮胎转化数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 适用性与质量评估后的声明絮胎供应，用于床品或家具装配 |
| excluded_use | 全 CPC 覆盖；替代纤维生产；医用或健康合规；热服务等效；未关联上游的摇篮到厂门声明 |
| required_metadata | 全部参考限定；厂门；期间；产线；供应来源；供电电压/地域；配方；含水率；验收；分配；库存返工；包装；废物去向 |
| required_quality_disclosure | 实测覆盖、校准、取样不确定性、物料能量核对、缺失身份、代理、排除、基本流表征缺口与上游关联 |
| update_trigger | 聚合物混配、原生状态、粘结纤维、来料油剂、热源、产线、质量规范或供应商/地域变化；更新真实测量 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-notes-2025` | official_guidance | UNSD，CPC 3.0 解释说明，2025 年 6 月 30 日，印刷/PDF 第 129 页，27991；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | HS 56.01 分类边界与医用排除；不是生产参数 |
| `gulf-wadding-route` | handbook | Gulf Fiber，产品页，热粘合聚酯絮胎，“The route to WAD”；https://www.gulffiber.co/products | 制造商路线示例：梳理、低熔点粘结纤维、热风粘合、冷却和转化。不采用性能、合规或数值参数；电热源为本 PCR 范围，不是来源声称。 |
| `parishudh-wadding-routes` | handbook | Parishudh Fibres，Polywadding & Polyfill；https://parishudhfibres.com/products/polywadding-polyfill/ | 独立制造商区分低熔点热粘合、化学及机械粘合。不采用粘结比例或认证声称。 |
