---
pcr_id: pcr.constructions-and-construction-services.constructions.sewage-and-water-treatment-plant-delivery
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 污水及水处理厂与污水系统施工交付

## 1. 范围与适用性

本PCR覆盖污水系统、污水处置／处理厂及水处理／净化厂的施工及真实验收交付。交付物含声明的土建构筑物、固定水力／工艺／机电安装及实际调试，不是建筑服务发票、一包建材、一个过滤器或按m3计的运营处理服务。CPC3.0 53253仅作类别背景。完整新厂或完整独立交付扩建／重建阶段须声明既有资产及外部管线接口。

污水系统按分类含义明确保留；CPC排除独立长距离供水管线及地方水／污水干管，不能将其施工暗中吸收。具体数据集须记录污水系统井室、输送／处置构筑物及处理厂连接哪些实际属于验收交付。干管／系统边界不清时须审查。常规澄清过滤、初级或化学强化污水、生物／MBR、回用及淡化均按实际路线，而非相互全部必需。未列实际路线须补齐原子清单及证据后才能声称类别完整覆盖。

默认结果为现场施工至交付。材料设备制造、运输、安装、实际后期维护／更新以及拆除／去向是不同阶段。上游仅按声明门端链接，不重复计内含材料。不提供配比、损耗、现场能耗、几何、能力、寿命、合规批准或全寿命结果默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.constructions.sewage-and-water-treatment-plant-delivery |
| classification_refs | CPC 3.0 53253 — Sewage and water treatment plants |
| covered_products | 已验收污水系统实体；污水处置／处理厂；水处理／净化厂；具有明确接口的完整交付新建或重建阶段 |
| excluded_products | 单独交付长距离水管／地方水或污水干管；单独过滤设备制造；纯建筑／工程服务或运营处理服务；将建筑外壳宣称为完整处理厂 |
| representative_product | 一项完整现场建造处理实体，具有实际声明土建及工艺实装范围、功能验收测试及实测几何 |
| production_route | 实际地基／土建→固定工艺机电安装→水／机械／功能试验→验收交付；按路线选择构筑物和处理单元 |
| market_state | 在声明场址实装，按明确验收阶段及接口完整；不假定未来远期能力 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一项实际已验收、注明处理／处置／净化功能的污水系统或处理厂施工实体 |
| How much | 一项完整交付实体；适用时按真实验收进水水质／负荷及测试条件声明实测m3/day能力，并声明实测池容、建筑面积及污水系统长度／管径 |
| How well | 竣工配置及交付完整性；声明条件下真实水密、水力／工艺、机械电气控制及水质测试结果，披露残留缺陷 |
| How long or cycle | 一次实际施工至交付活动，记录调试日期及测试时长；不假定运营寿命 |
| reference_flow_link | accepted_entity |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收污水或水处理厂或污水系统实体 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | 件 |
| 必需限定信息 | 场址／国家及坐标；实体或独立验收阶段标识；完整新旧资产接口；污水系统／干管区别；处理及进水类型／盐度；交付土建／结构／建筑／管路范围；实装系列及设备／滤料表；实测占地／建筑面积、池体有效／总体积、污水系统长度／管径；真实能力及进水／测试条件；验收日期及试运行时长；排除／上游链接及资本设备覆盖；水／废物／排放去向 |

件表示公开Item(s)数量单位。按同一实体实有配置记录限定信息：无处理池／滤料的污水系统或无污水管网的处理厂，只有界面／竣工证据支持才可填not_applicable；适用但未测仍属缺口。按实际适用的处理、输送或处置功能开展测试，不虚构池体、滤料或能力。两实体均产出一件不代表可以比较。只有完整同实体物料／总成实测范围及有据换算后才可重新评估质量参考身份，本PCR不提供该质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 1 件是一项实际完整验收的声明厂／系统实体或完整交付扩建阶段。件为公开Item(s)的显示别名；实际几何及处理／输送／处置工况是实有配置的适用限定信息；没有的字段须有据not_applicable。它们不是默认乘数或全寿命产出。 |
| `physical_quantities` | all inventory rows | Declared original property | kg; m3; m; item; MJ; tkm | 保留实际干湿／物料／总成范围；体积转质量须同批密度及状态。Mass计量的泵按件采集须同配置实测净质量。不能猜全厂质量或强制1kg参考。 单位逐行对应原属性：质量/kg、体积/m3、长度/m、物品数量/item、energy_units下的能量/MJ及cp_transport下的货物运输（质量×距离）/tkm。保留实测能量换算和真实货运活动；所列单位按量纲分别适用，不是同时施加的要求。 |
| `energy_units` | diesel; cn_lv_electricity; cn_mv_electricity; other_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 公开主属性仍为Net calorific value及能量单位组。电力MJ=记录kWh×3.6，来自核实单位定义；燃料MJ=实际kg×批次净热值(MJ/kg)。不能把能量改为kg或混淆高低位热值。 |
| `water_physical_state` | river_intake; groundwater_intake; sea_intake; freshwater_discharge; marine_water_discharge | Original Volume or Mass | m3; kg | 河／地下水及淡水排放保留Volume。海水资源保留Mass，必要时用实测体积×同盐度／温度下有依据密度，并保留双台账。供水、资源取用、技术圈出水及实际基础释放是不同跨界。 |
| `nonadditive_qualifiers` | reference product; acceptance tests | Measured function and geometry | m; m2; m3; m3/day | 分列池体／建筑／网络范围，注明占地与建筑面积、有效与总体积、水力工况及测试时长。不能相加不同维度，或从面积、造价、人口、默认寿命推断处理功能。 |

核实公开支持关系：Mass→质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`、kg；Volume→体积单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`、m3；Net calorific value→能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`、MJ；Length→长度单位组 `838aaa22-0117-11db-92e3-0800200c9a66`、m。以各流原件主属性为准，这些关系不构成产品身份批准。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 施工前真实既有场址及资产；购入材料设备的明确供应门端及真实场地入口／运输接口 |
| starting_condition_role | foreground_entry_gate |
| product_classification_scope | 污水系统、污水处置及水处理／净化土木实体；单列排除干管／长距离水管接口 |
| recursive_input_rule | 购入同类别完整处理模块／既有厂作为注明验收边界的上游资产／供应输入；不能已含供应商又递归重建制造。保留既有厂不作为新整厂产出 |
| upstream_dataset_requirement | 匹配供应门端、地域、真实技术／物料状态及总成内含内容。材料制造与现场拌制／安装分开；单个供应UUID不能证明上游LCI完整 |
| disclosure | 场址／阶段几何及功能；既有资产使用及拆移；实际路线及试运行门端；上游／运输／资本覆盖；后期运行、维护／更新及拆除排除或显式分列；不声称全寿命 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `construction_delivery` | dataset | 采集实际现场施工及交付前调试至签署完整交付。上游材料／设备制造和运输分别有供应门端；现场数据不能自动称完整cradle-to-gate或全寿命，缺失上游链接须披露。 | `wsd-shatin-project`; `dsd-shek-wu-hui-project`; `dsd-sewage-overview-2017` |
| `route_completeness` | all inventory rows | 选流前建立真实竣工系列及土建包台账。污水系统、污水处置、常规净化、生物／MBR及淡化／回用不能缩为建筑外壳或一个过滤器。示例未含的真实原子交换须补齐，包括非混凝土结构、污水管／井室、管件、阀门、接缝、焊材、滤料、药剂及实际废物；缺身份不能删除必需单元。 | `un-cpc-treatment-2025`; `wsd-water-treatment`; `dsd-shek-wu-hui-project`; `wsd-desalination` |
| `test_operation_gate` | commission | 明确实际试验日期、系列／工况及验收约定，包含修复／重试、滤料初装及首次填装。既有厂持续商业运行及交付后服务须另建模。DBO施工须与实际维护／更新／拆除及去向分开，不假定寿命或更换频率。 | `dsd-sewage-overview-2017`; `wsd-desalination` |
| `water_release_gate` | utilities; commission | 分列供水、直接取水、降水、内部回用、洗浆收集、外部处理和直接排放。直接释放须有实际化学物质、介质及测量／模型证据。施工噪声／振动、土地扰动、异味及未测组分须评估披露；不能从监测浓度或dB编造默认排放质量。直接海排须分别用海洋相容身份记录水及实际组分。 | `epa-concrete-washout-2012`; `epd-shek-wu-hui-2007`; `wsd-desalination` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| ground | 场地形成及临时支护 | required | 按交付系统实际清场、开挖、回填、垫层及排水；即使示例卡未涵盖也须保留全部施工包数量。 | foreground | 每声明的参考流 |
| civil | 基础、持水构筑物及配套建筑 | conditional | 按实际设计纳入钢筋、模板、混凝土浇筑／振实／养护、接缝和水密性；非混凝土结构另列材料。包含厂界内实际道路／厂房外壳，不限一个池体。 | foreground | 每声明的参考流 |
| installation | 厂内管路、固定设备及滤料初装 | conditional | 实际声明处理路线及污水系统接口、固定水力／工艺／机电、滤料初装、电气控制连接；设备示例为条件性，非全部必需。 | foreground | 每声明的参考流 |
| utilities | 现场设备运行、施工水及直接排放 | required | 按施工包归属实际燃料、供水／直接取水、电力、复用设备及有依据排放，包含清洗及缺陷修复。 | foreground | 每声明的参考流 |
| commission | 水试验、路线特定调试及交付试运行 | required | 实际几何、水密性、机械、电气控制及功能验收试验；仅发生时计测试水、药剂、污水或RO试运行。隔离既有厂持续运行及交付后服务。 | foreground | 每声明的参考流 |
| transport | 材料交付及外运废物运输 | conditional | 实际公路运输段须界面完整；其他实际运输方式另核原子服务行。 | foreground | 每声明的参考流 |
| handover | 验收记录及完整实体交付 | required | 签署的竣工范围、场址及实测几何、设备清单与功能测试记录；仅一项完整厂／系统或完整交付阶段。 | reference_product | 每声明的参考流 |

### 过程：场地形成及临时支护 (`ground`)

#### 输入

##### 产品流

###### 基础垫层用碎石 (`subbase`)

仅记录实际外购、注明级配的碎石；核对收料、垫层实装和余料。场内开挖料回用属于内部转移，不再计外购投入。

- 选定流：基础垫层用碎石
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epd-shek-wu-hui-2007`

###### 可重复使用钢板桩 (`temporary_sheet_pile`)

实际采用临时支护时纳入；采集桩型、质量、打设／拔除及使用台账。制造等价质量仅为有依据的归属份额，另保留实际打设质量。

- 选定流：可重复使用钢板桩
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temporary`
- 来源：`epd-shek-wu-hui-2007`

#### 输出

##### 废物流

###### 场外输出的开挖矿物土 (`excavated_soil`)

仅记录实际外运的土；保留污染测试、湿质量、含水率和利用／处置去向。发生开挖岩石或污染污泥时另列具体交换。

- 选定流：场外输出的开挖矿物土
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epd-shek-wu-hui-2007`

### 过程：基础、持水构筑物及配套建筑 (`civil`)

#### 输入

##### 产品流

###### 新拌预拌水硬性水泥混凝土 (`ready_mix`)

仅实际外购预拌路线用于基础、持水池、井室或建筑时纳入；记录配合比、暴露／强度规定、新拌密度和浇筑位置。同一批不同时计完整预拌负担及另购水泥／骨料负担。

- 选定流：新拌预拌水硬性水泥混凝土
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`usace-concrete-1994`; `epd-shek-wu-hui-2007`

###### 现场混凝土拌制用硅酸盐水泥粉 (`batch_cement`)

仅实际现场拌制路线中单独购入的硅酸盐水泥；逐批计量并核对余料及废拌料，不设配比或水泥用量默认值。

- 选定流：现场混凝土拌制用硅酸盐水泥粉
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`usace-concrete-1994`; `epa-concrete-washout-2012`

###### 砂子 0/2 (`batch_sand`)

仅实际未干燥、0/2级配、湿／干采石场生产的天然细骨料；保留实测批次含水率及原湿质量基准。其他级配或已干燥砂须另核身份。

- 选定流：砂子 0/2 `4f1a182d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epa-concrete-washout-2012`

###### 现场混凝土拌制用粗碎石骨料 (`batch_stone`)

仅实际现场拌制时纳入；逐批记录矿物组成、粒径级配和干湿基准，不规定配比。

- 选定流：现场混凝土拌制用粗碎石骨料
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epa-concrete-washout-2012`

###### 钢筋，钢制建筑材料 (`reinforcing_bar`)

仅适用于碳含量 C≤0.2% 的热轧低合金钢筋，并匹配公开原件材质条件、合金钢条分类及工厂轧制路线。记录牌号、直径、钢筋表及实际下料／弯曲／实装质量；非合金及其他类型另核身份。

- 选定流：钢筋，钢制建筑材料 `43050e3b-42be-465c-a021-17f606484151`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`usace-concrete-1994`

###### 注明木种及覆膜的可重复使用胶合板模板 (`formwork_panel`)

仅实际胶合板模板；实际体积由实测厚度及面积确定，通过累计守恒的复用台账归属制造负担，不重复计更换购入及同一份额。

- 选定流：注明木种及覆膜的可重复使用胶合板模板
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temporary`
- 来源：`usace-concrete-1994`

###### PVC止水带 (`waterstop`)

仅实际设计采用PVC接缝止水带时纳入；记录截面、配方、交付长度和实测单位长度质量。其他弹性体止水带是不同产品。

- 选定流：PVC止水带
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`usace-concrete-1994`

###### 环氧树脂池体衬里配方产品 (`epoxy_lining`)

仅实际衬里设计采用时纳入；树脂及固化剂若分别跨界交付须分别列行，采集实配比、施工质量和固化记录，不规定每个池体必须有衬里。

- 选定流：环氧树脂池体衬里配方产品
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`epd-shek-wu-hui-2007`

#### 输出

##### 废物流

###### 废弃硬化水硬性水泥混凝土 (`concrete_waste`)

仅分离出的硬化边角或废混凝土；区别退回的湿预拌料及钢筋，记录实际接收路线。

- 选定流：废弃硬化水硬性水泥混凝土
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epa-concrete-washout-2012`

###### 送回收的热轧合金钢筋切余料 (`steel_offcut`)

实际分选切余料；与购入及实装钢筋核对，不自动给予避免生产抵扣。

- 选定流：送回收的热轧合金钢筋切余料
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`usace-concrete-1994`

###### 收集的碱性混凝土洗浆液 (`washout_water`)

实际冲洗溜槽／泵／模板时纳入；记录所收集液体组成及实际回用／外运。属于技术圈废物，不能当水资源取用或自动环境排放；干洗浆固体另列。

- 选定流：收集的碱性混凝土洗浆液
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`epa-concrete-washout-2012`

###### 分离的硬化混凝土洗浆固体 (`washout_solids`)

仅分离出的固体，记录含水率、状态及去向；若整浆外运，不能再次计其中相同固体。

- 选定流：分离的硬化混凝土洗浆固体
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`epa-concrete-washout-2012`

### 过程：厂内管路、固定设备及滤料初装 (`installation`)

以下输入按归属交付的实际净消耗量记录，包括安装或验收前损坏、拒收后报废及替换投入；不能只取最终实装量。通过 cp_install 核对总收货、期初库存、已核实退回/转出及期末可用库存，并将安装验收配置和废物去向另列。

#### 输入

##### 产品流

###### 钢管和空心型材 (`steel_pipe`)

仅适用与公开路线匹配的工厂生产焊接圆形钢管；必须记录实际直径、壁厚、合金、防腐和介质相容性。涂层／管件仅有明确证据时才包含在计量总成内。

- 选定流：钢管和空心型材 `370d14a6-55f3-4fdd-90b2-84751125ff00`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`epd-shek-wu-hui-2007`

###### 注明内衬的球墨铸铁压力管 (`ductile_pipe`)

实际管路设计采用时纳入；记录交付门端、接口、压力等级和实装几何。铸铁管件不能代替管身身份。

- 选定流：注明内衬的球墨铸铁压力管
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`epd-shek-wu-hui-2007`

###### 预制钢筋混凝土污水管 (`concrete_sewer_pipe`)

实际属于声明处置系统交付的污水系统工程时纳入；核对管径、接口漏水测试及排除的独立干管界面。

- 选定流：预制钢筋混凝土污水管
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`un-cpc-treatment-2025`; `epd-shek-wu-hui-2007`

###### 泵 (`pump`)

归属本项目实际消耗的液体泵厂门总成，包括安装前损坏报废及替换件；记录工况、介质、材质、电机是否内含、数量及实测总成净质量，保留公开Mass属性。仅未内含电机时才另计电机。

- 选定流：泵 `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`wsd-shatin-project`; `dsd-sewage-overview-2017`

###### 污水机械格栅总成 (`screen`)

实际污水预处理使用时纳入，记录栅隙、能力、结构及驱动内含范围，不设通用格栅数量。

- 选定流：污水机械格栅总成
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`dsd-sewage-overview-2017`

###### 澄清池污泥刮泥机总成 (`scraper`)

实际沉淀／气浮设计使用时纳入；记录池体接口和实装总成，不重复计完整澄清池。

- 选定流：澄清池污泥刮泥机总成
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`wsd-water-treatment`; `dsd-shek-wu-hui-project`

###### 污水曝气鼓风机总成 (`blower`)

仅实际生物或其他曝气工艺使用时纳入；记录流量／压力测试条件及电机／控制范围。风扇加热器或压缩空气流不等于鼓风机总成。

- 选定流：污水曝气鼓风机总成
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`dsd-shek-wu-hui-project`; `dsd-sewage-overview-2017`

###### 弹性体膜微孔曝气器 (`diffuser`)

实际安装该曝气器时纳入；按工程记录注明膜聚合物、有效面积、支架和工况。

- 选定流：弹性体膜微孔曝气器
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`dsd-shek-wu-hui-project`

###### 聚合物膜生物反应器膜盒 (`mbr_cassette`)

仅实际MBR路线；记录聚合物、孔径／截留定义、膜面积、膜盒框架和交付完整性，不以离子交换膜替代。

- 选定流：聚合物膜生物反应器膜盒
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`dsd-shek-wu-hui-project`

###### 反渗透膜压力容器模块 (`ro_module`)

仅实际淡化或回用反渗透设计；记录膜化学组成、有效面积、压力容器内含范围及压力／温度／盐度测试基准。

- 选定流：反渗透膜压力容器模块
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`wsd-desalination`

###### 注明级配的洗净石英滤砂 (`filter_sand`)

仅实际颗粒滤床初装；采集级配、清洁状态、含水率、床深和装填质量。玻璃原料硅砂不能证明过滤级供应。

- 选定流：注明级配的洗净石英滤砂
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`wsd-water-treatment`

###### 分级无烟煤滤料 (`filter_anthracite`)

仅实际滤料初装，不是燃料燃烧。洗煤厂煤产品须另核级配及后续滤料制备后才可用于本行。

- 选定流：分级无烟煤滤料
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`wsd-water-treatment`

###### 颗粒活性炭滤料 (`gac_medium`)

仅实际吸附床初装；记录前驱体、活化、级配、含水率及净装填质量。完整活性炭装置不能代替散装滤料。颗粒吸附床区别于粉末活性炭投加；EPA技术资料不规定床尺寸或通用路线。

- 选定流：颗粒活性炭滤料
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`epa-gac-treatment`

###### 紫外水消毒反应器总成 (`uv_unit`)

仅实际紫外路线；记录灯管／反应器／镇流器内含范围、实装通道及测试流量／紫外透光率，含氯消毒剂不能代替紫外设备。

- 选定流：紫外水消毒反应器总成
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`dsd-sewage-overview-2017`

###### 污水污泥脱水压滤机总成 (`sludge_press`)

实际污泥处理采用时纳入；记录内含进料泵、滤板／滤带、框架及验收工况，离心机须另列行。

- 选定流：污水污泥脱水压滤机总成
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`dsd-sewage-overview-2017`; `wsd-shatin-project`

###### 液体药剂计量泵撬装总成 (`dosing_unit`)

仅实际加药撬；记录药剂相容性及罐／泵／控制内含范围。另计液体泵须在该总成范围外。

- 选定流：液体药剂计量泵撬装总成
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`wsd-water-treatment`

###### 电动机控制开关柜总成 (`switchboard`)

实际固定控制／配电柜；记录电压、回路、外壳和实装完整性。仅未内含时才另计柜内铜。

- 选定流：电动机控制开关柜总成
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`wsd-shatin-project`

###### 低压电缆 (`cable`)

仅实际中国厂门、符合GB/T 12706.1-2020且电压、导体、绝缘、护套及芯数匹配的电缆。保留公开Length属性，实测安装长度及切余量，不能改写为Mass。电缆本体不含敷设、运行损耗及报废。

- 选定流：低压电缆 `49101b44-20cc-46a0-adfb-af07e4cc8908`
- 流属性/单位：Length / m
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`wsd-shatin-project`

###### 玻璃纤维增强聚合物池盖板 (`frp_cover`)

仅实际池盖设计采用时纳入；记录树脂、增强材料、截面、紧固件及实装质量，钢盖另列。

- 选定流：玻璃纤维增强聚合物池盖板
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_install`
- 来源：`epd-shek-wu-hui-2007`

#### 输出

##### 废物流

###### 废弃设备包装LDPE薄膜 (`ldpe_wrap`)

仅实际确认聚合物类型的废包装膜，其他包装塑料、木箱、金属打包带分别列行。

- 选定流：废弃设备包装LDPE薄膜
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：`wsd-shatin-project`

### 过程：现场设备运行、施工水及直接排放 (`utilities`)

#### 输入

##### 产品流

###### 柴油 (`diesel`)

仅实际符合公开蒸馏／精炼生产混合门端的供应，另关联真实交付。记录燃料牌号、生物／化石比例及批次净热值；用实称燃料及实测／供应商支持的低位热值换算MJ，不猜密度或热值。按施工包归属，不再把自备发电计为另一外购电力。

- 选定流：柴油 `fbd79004-188c-47a4-900b-96005d994690`
- 流属性/单位：Net calorific value / MJ
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`epd-shek-wu-hui-2007`

###### 交流电 (`cn_lv_electricity`)

仅实际中国用户端、低于1kV且与公开身份匹配的供电。保留地域、电压及电表覆盖，仅计施工及交付前调试。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value / MJ
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`wsd-shatin-project`

###### 交流电 (`cn_mv_electricity`)

仅实际中国用户端、1–35kV且与公开身份匹配的供电；区别低压供电，不重复计变压器两侧电表。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value / MJ
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`wsd-shatin-project`

###### 声明场址或电压不匹配的用户端交流电 (`other_electricity`)

上述两个中国身份未覆盖的地域／电压须另核用户端身份，不能以废物焚烧发电组合代替通用供电。

- 选定流：声明场址或电压不匹配的用户端交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`wsd-shatin-project`

###### 自来水 (`hk_tap_water`)

仅实际香港水处理厂门端的处理水生产／供应，且须另核厂门到施工现场的真实供水／运输链接。不能用于通用现场自来水，也不能把次要1000kg/m3筛查属性当密度。同一水量不与通用供水行重复。

- 选定流：自来水 `3a8411b6-e476-4f98-9d77-0d492661a07f`
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`wsd-shatin-project`

###### 声明现场入口的外购施工水 (`other_supplied_water`)

用于养护、拌制、抑尘、清洗或测试，且地域／门端不由香港身份确定的实际供水。记录水源、水质及用途，不把内部回用再计为跨界。

- 选定流：声明现场入口的外购施工水
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`epa-concrete-washout-2012`; `epd-shek-wu-hui-2007`

###### 液压挖掘机制造负担份额 (`excavator_manufacture`)

仅在声明资本设备覆盖中实际使用的重复利用挖掘机；按同一完整实物资产的累计实际／有依据全寿命活动确定无量纲份额，燃料另计。分母未知时披露未解决资本情景，不得每工程重置全部制造负担。

- 选定流：液压挖掘机制造负担份额
- 流属性/单位：Number of items / 件
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_temporary`
- 来源：`epd-shek-wu-hui-2007`

##### 基本流

###### 河水 (`river_intake`)

仅本前景在施工／调试中直接取用河水；记录国家、取水点和流量表。不是外购水、雨水、水库供水或缺水等级替代流。

- 选定流：河水 `805a7346-1664-4483-afe3-4b224be5e361`
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`epd-shek-wu-hui-2007`

###### 地下水 (`groundwater_intake`)

仅实际直接地下水抽取，包括降水，记录含水层、场址及去向。降水量不能自动等于耗水量，应分列排放及储存。

- 选定流：地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`epd-shek-wu-hui-2007`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅有依据的实际化石CO2向空气未指定子介质释放，范围限声明工程。用气体监测或燃料碳含量／氧化记录，燃料购入本身不是排放因子，生物源部分另列。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`epd-shek-wu-hui-2007`

###### 一氧化氮 (`nitrogen_monoxide`)

仅独立分物种的分子NO，CAS10102-43-9，实际即时排放至空气未指定子介质；以NO2当量报告的NOx不是该分子质量。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`epd-shek-wu-hui-2007`

###### 二氧化氮 (`nitrogen_dioxide`)

仅独立分物种的分子NO2，CAS10102-44-0，实际即时排放至空气未指定子介质；不能把NOx-as-NO2或N2O4同义词当作分子NO2证据。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`epd-shek-wu-hui-2007`

###### 颗粒物 (PM10) (`construction_pm10`)

仅独立证据支持的实际即时PM10向城市近地空气释放，与公开介质匹配。环境TSP浓度及捕集尘不是排放质量，不能与其他PM10介质行或另计PM2.5总量重叠。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91c0-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`epd-shek-wu-hui-2007`

###### 颗粒物 (PM10) (`construction_pm10_nonurban`)

仅实际即时PM10向非城市空气或高烟囱释放，须精确匹配公开组合介质及记录的场址／释放。城市近地释放另列；不设默认扬尘因子或浓度转质量捷径。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91c1-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`epd-shek-wu-hui-2007`

###### 颗粒物 (PM10) (`construction_pm10_unspecified`)

仅有证据的实际即时PM10，且所选受纳空气子介质显式未指定并披露；不能用该身份代替已知城市／非城市／高烟囱介质。每项实际释放在三条PM10行中互斥。

- 选定流：颗粒物 (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`epd-shek-wu-hui-2007`

### 过程：水试验、路线特定调试及交付试运行 (`commission`)

#### 输入

##### 产品流

###### 原水 (`reservoir_feed`)

仅实际水处理调试在厂内接收的水库地表原水；不是直接地下／河水资源或含盐进水，须记录来源和实测原水水质。

- 选定流：原水 `3c57c819-16f7-44b0-b1cd-da324f4c2dac`
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`wsd-water-treatment`

###### 注明浓度的硫酸铝水溶液混凝剂 (`alum_solution`)

仅实际调试投药；硫酸铝区别于钾明矾及干盐，采集溶液质量、水合盐定义及证书浓度，不设剂量默认值。

- 选定流：注明浓度的硫酸铝水溶液混凝剂
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`wsd-water-treatment`

###### 注明浓度的次氯酸钠水溶液消毒剂 (`hypochlorite_solution`)

仅实际测试消毒，须含脱氯记录及去向。分别记录溶液质量、有效氯及NaOCl定义；公开纯度≥10%候选不能提供本溶液基准换算。

- 选定流：注明浓度的次氯酸钠水溶液消毒剂
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`wsd-water-treatment`; `dsd-sewage-overview-2017`

###### 测试水脱氯用亚硫酸氢钠水溶液 (`bisulfite_solution`)

仅有记录的NaHSO3溶液使用，记录浓度、投加和余氯结果。EPA历史湿天气污水资料支持该化学选项，不代表必需施工测试路线、剂量或现行排放批准；实际测试水用途须工程记录。亚硫酸钠、焦亚硫酸钠及硫氢化钠不能无真实化学及另有依据换算而替代。

- 选定流：测试水脱氯用亚硫酸氢钠水溶液
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`epa-dechlorination-history-2003`

##### 废物流

###### 未处理市政污水进水 (`municipal_influent`)

仅交付前试运行在厂入口接收的实际未处理市政污水；记录盐度、进水负荷及试运行日期。仅工业废液及接种污泥是不同身份，不以污水处理服务产出代替厂实体交付。

- 选定流：未处理市政污水进水 `41eb8873-6852-40fe-8b5d-b792fe4d4754`
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`dsd-shek-wu-hui-project`; `dsd-sewage-overview-2017`

##### 基本流

###### 海水 (`sea_intake`)

仅声明淡化调试路线中实际直接海水取用。保留公开Mass/kg：实测海水质量，或用计量体积乘同实测盐度／温度下有依据的密度；另保留原始m3台账，不设密度默认值。外购含盐水是技术圈供应，不是本资源。

- 选定流：海水 `172a3db9-6556-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`wsd-desalination`

#### 输出

##### 废物流

###### 送外部污水处理的调试出水 (`trial_effluent`)

仅实际外送液体，记录组成、状态及接收设施；不是直接入河／入海排放。整液转移含其中组分，不再计前景基础排放。

- 选定流：送外部污水处理的调试出水
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`dsd-sewage-overview-2017`

###### 脱水污水调试污泥 (`trial_sludge`)

仅污水启动期实际外运固体；记录湿质量、干固体、调理药剂及去向。水处理混凝污泥及回流活性污泥是不同状态。

- 选定流：脱水污水调试污泥
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`dsd-sewage-overview-2017`

###### 水处理调试混凝污泥 (`water_sludge`)

仅实际水处理澄清污泥；记录药剂配方、含水率及固体平衡，不设默认残渣率。

- 选定流：水处理调试混凝污泥
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`wsd-water-treatment`

###### 送外部处理的反渗透调试浓水 (`ro_concentrate`)

仅实际收集浓水外送；记录盐度、各添加物及去向。直接海排应另列环境交换，不能用海水资源身份作产出。

- 选定流：送外部处理的反渗透调试浓水
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`wsd-desalination`

##### 基本流

###### 水 (`freshwater_discharge`)

仅实际液态水直接排入淡水受体，CAS7732-18-5。实际组分排放和受纳子介质须分别计量；该身份不是供水、资源抽取、水蒸气、入管网外送或海洋排放。

- 选定流：水 `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- 流属性/单位：Volume / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`epd-shek-wu-hui-2007`; `epa-concrete-washout-2012`

###### 甲烷 (生物源) (`methane_biogenic`)

仅实际生物／厌氧调试中有依据的生物源甲烷向空气未指定子介质释放，CAS74-82-8；保留碳源及气体捕集记录，不因施工就默认有污水甲烷排放。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`dsd-sewage-overview-2017`

###### 一氧化二氮 (`nitrous_oxide`)

仅独立实测生物启动N2O向城市近地空气的排放，CAS10024-97-2，与该公开介质匹配。其他受纳空气地点须另核身份；NO和NO2是不同分子。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release`
- 来源：`dsd-sewage-overview-2017`

###### 直接排入海洋的液态水 (`marine_water_discharge`)

仅试运行中实际计量的直接海洋液态水排放，须记录盐度和排口。实际组分排放另列；不能用淡水Water UUID。

- 选定流：水 `631ecf13-0e51-4e35-8235-c6f80c60d72c`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_trial`
- 来源：`wsd-desalination`

### 过程：材料交付及外运废物运输 (`transport`)

#### 输入

##### 产品流

###### 声明车辆及货批的公路货运服务 (`road_freight`)

仅其他供应商数据未包含的实际送货／外运段；记录载质量、路径距离、空返及燃料基准。若前景自计燃料与排放，同一段不能再计含燃料货运服务。

- 选定流：声明车辆及货批的公路货运服务
- 流属性/单位：Mass*distance / tkm
- 数量规则：依据所链接采集协议记录本原子交换的真实归属量；转换及守恒条件见第4、7、8节。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_transport`
- 来源：`wsd-shatin-project`; `epd-shek-wu-hui-2007`

### 过程：验收记录及完整实体交付 (`handover`)

#### 输出

##### 产品流

###### 已验收污水或水处理厂或污水系统实体 (`accepted_entity`)

仅一项实际完整验收的实体，明确厂／系统接口。分期扩建应报告完整交付的新建／改造阶段及既有资产接口，不能报告未建的远期全厂。未成功测试及修复仍计施工活动。

- 选定流：已验收污水或水处理厂或污水系统实体
- 流属性/单位：Number of items / 件
- 数量规则：1 件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance`
- 来源：`un-cpc-treatment-2025`; `wsd-shatin-project`; `dsd-shek-wu-hui-project`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `separate_work` | all inventory rows | 优先分表及追溯实际施工包、交付阶段、既有运行和共交付，避免分配。兼污水处理及再生水供应的厂仍是一项施工实体，除非有分别完整验收交付物。无服务情景证据不能按未来全寿命水量分配。 |  |
| `causal_shared_activity` | shared work packages | 不可分的共用施工须用cp_acceptance、cp_energy及cp_transport记录受益者及因果物理驱动。各份额非负且该活动各受益者之和为一，负担只归属一次。仅证明与具体活动的因果关系时才用面积／能力，不能用货币替代。 |  |
| `reusable_asset_conservation` | temporary_sheet_pile; formwork_panel; excavator_manufacture | 同一资产的制造等价交换=有记录实物资产量×归属无量纲份额。跨工程、期间及重复使用的累计份额不得大于一。分母／寿命／活动必须有依据；未知时保留资本设备未解决情景，不能每项目重置完整负担。现场燃料、实际维护及更换是分列实测活动。 |  |
| `waste_no_default_credit` | waste outputs | 记录真实退料、回收余料及外运废物状态和去向。不自动给予避免生产、回收能量或污泥抵扣；下游扩展须记录供应边界及分配法，并与施工结果分开。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | handover | accepted_entity；完整系统配置 | acceptance_record | 场址；资产／阶段标识；验收数量；坐标；边界；池体尺寸及体积；建筑面积／占地；污水系统长度／管径；实装系列清单；额定／验收能力及实测测试时长；水质；签署验收日期 | 测量竣工几何，核对同一交付的图纸、设备台账及签署验收／性能测试。仅填实有配置；没有的池体／建筑／滤料／管网字段须界面证据支持not_applicable，适用但未测保留缺口。按适用情况测试真实处理、输送或处置功能，不能仅用造价或几何推算能力。 | item; m; m2; m3; m3/day | 每个交付阶段 | 完整施工至验收交付 | 声明完整处理厂或污水系统 | 每声明的参考流 | 测量记录；签署测试报告；范围／缺陷台账 |
| `cp_material` | ground; civil | 分列外购及实装材料 | delivery_and_batch_record | 施工包；材料及状态；牌号；批次；收料／退回／实装／余料数量；干湿基准；密度试验；实配比；来源门端 | 使用经校准称重单及拌制／浇筑记录；体积转质量仅用同物料批次密度、级配／含水率及实际几何；核对钢筋表及实装数量。 | kg; m3; m | 每批拌料／收料 | 声明施工全过程 | 现场及供应门端 | 每声明的参考流 | 校准；供应商证书；竣工数量；库存平衡 |
| `cp_install` | installation | 单项固定总成、管材或滤料 | installation_record | 总成标识；技术；工况；供应门端；材质／配方；尺寸；同配置实测净质量或长度；总收货及期初库存；已核实退回／转出；期末可用库存；净消耗和另列实装验收件数；损坏／拒收报废及替换关联；滤料初装；电机／框架／电缆内含范围；验收 | 核对收货、库存、退回／转移、设备／物料清单、验收及废物票据，以总收货加期初库存、减已核实退回／转出及期末可用库存取得归属净消耗量，包含失败替换件；实装数量另列。按件转质量使用同配置称重／可追溯净质量，不猜全厂质量；已核实退回且未消耗的设备不计投入。 | kg; m; item | 每个总成／批次 | 全部交付安装及交付前更换 | 交付安装边界 | 每声明的参考流 | 供应范围；称重；安装检查；测试记录 |
| `cp_temporary` | ground; civil; utilities | 复用临时资产及资本设备 | asset_activity_ledger | 资产标识；同配置；制造覆盖；实际质量／体积／数量；工程活动；累计寿命活动证据；前后已归属份额；修复；凭据；未知分母 | 分列现场实际实物与归属制造等价量。以使用活动台账及有依据的寿命／使用分母分摊，逐资产跨工程核对，不能重置。体积计模板须实测面积／厚度。 | kg; m3; item | 每资产及使用期间 | 完整工程及累计资产台账 | 共用同一实物资产的全部工程 | 每声明的参考流 | 资产记录；实际活动；有依据分母；累计份额审计 |
| `cp_energy` | utilities | 每项电源及燃料批次 | meter_and_fuel_record | 来源；地域；电压；电表起止；施工包；燃料牌号及来源；称重质量或计量体积；温度／密度；低位热值；自备发电输出；既有厂运行表 | 分表计施工及试运转；核对油箱平衡及有依据净热值。若体积计油，先用批次实测密度。共用公用工程按实际因果活动归属，不以电价代替。 | MJ; kWh; kg; m3 | 每班及抄表期间 | 仅施工及交付前试运行 | 用户端供应及实际设备 | 每声明的参考流 | 校准仪表；燃料证书；台账；隔离既有运行 |
| `cp_water` | civil; utilities | 按来源分列施工水、降水及洗浆 | water_balance_record | 水源及取水／供水门端；逐批用途；期初末储存；取水；外购；回用；外运；直接受体；液量；湿固体；盐度／温度／密度 | 计量每项跨界，区别内部回用并核对库存及混凝土／土中实际保留水。记录降水及洗浆去向，不能假定全部耗水或入河。 | m3; kg | 每次使用／排水及每日平衡 | 所有施工用水活动 | 现场、水源及实际接收界面 | 每声明的参考流 | 校准；供水单；取样；收集及去向记录 |
| `cp_waste` | ground; civil; installation | 每记录一种分选废物及去向 | waste_transfer_record | 材料／状态；来源施工包；称重单；含水率；污染性；外运量；承运者；接收路线；供应商退料；内部回用 | 实际出场逐项计量分离废物；核对收料、实装及余料。同一部分不能同时计整浆及分离固体。 | kg; m3 | 每次转移 | 全部施工及交付前返工 | 实际出场及接收端 | 每声明的参考流 | 称重单；交接链；组成及接收记录 |
| `cp_release` | utilities; commission | 每项分子或粒级明确的外部释放 | emission_measurement_record | 来源／设备；活动期间；化学物质／CAS；化石／生物源；受纳介质；样品浓度；气流量或通量面积／时间；捕集；空白；不确定性；若用因子则记录因子及条件 | 使用现场通量／排口／发动机测试或有独立依据的活动特定模型／因子，保留单位、条件及控制效率。未测／遗漏排放作为缺口而非零。环境尘及噪声读数不能改标为排放质量。 | kg | 每个实际排放／测试期间 | 仅声明施工及试验活动 | 实际来源及外部受体 | 每声明的参考流 | 仪器质控；物种区分；方法条件；不确定性；覆盖台账 |
| `cp_trial` | commission | 路线特定测试水、药剂及污水 | trial_and_sampling_record | 试运行门端日期；调试系列；测试工况／时长；进水体积／水质／负荷；药剂配方／浓度／质量；存留水；出水排口水量及各组分；污泥干湿质量；RO盐度／温度／密度及浓水去向 | 记录实际测试、失败及重试；配对进出水表和实验室证书。调试起止独立于商业运行。体积×浓度换算须同步取样及真实分子基准。 | m3; kg; m3/day | 每次测试及取样排放 | 有记录的交付前试运行期间 | 实际测试系列及接收门端 | 每声明的参考流 | 测试协议；校准仪表；药剂证书；实验室报告；去向台账 |
| `cp_transport` | transport | 单货批及运输段 | shipment_record | 货品／状态；来源／目的门端；实测载质量；真实距离；方式／车辆；返程载货；承运边界是否含燃料和空返 | 核对货单及实际路线台账，逐段用货物吨数乘km算tkm，仅计其他供应边界未含运输段。 | tkm | 每货批／段 | 全部实际施工交付及外运 | 实际货运门端 | 每声明的参考流 | 承运记录；路径证据；供应／燃料不重叠计量 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `project_basis` | all inventory rows | 一项声明完整交付按全部施工／测试活动合计各归属交换，扣有据退回并核对库存，按每声明的参考流报告。多个独立验收实体须分别有匹配清单，不能把较大厂任意等分为若干件。 | event quantities; return and stock ledger; cp_acceptance | attributed exchange per declared reference flow |  |
| `physical_mass_conversion` | material and installation quantities | 物料kg=实际净消耗m3×同物料批次密度kg/m3，或实际净消耗件数×同配置可追溯总成净质量kg/件。净消耗按 cp_material 或 cp_install 的收货、期初库存、退回／转移和期末可用库存核对，包括安装／验收前损坏、拒收后报废及替换投入；实装验收件数另列，不作为全部制造投入的乘数。保留原始量、条件及不确定性，不设通用混凝土、海水或全厂密度／质量。 | cp_material; cp_install; cp_trial; geometry; measured density | kg per declared reference flow |  |
| `energy_conversion` | utilities | 电力MJ=kWh×3.6；燃料MJ=实际燃料kg×批次净热值MJ/kg。燃料体积台账先以同批实测密度转kg，保留公开能量属性，避免重复计自备发电产出。 | cp_energy; verified unit definitions; fuel certificates | MJ per declared reference flow |  |
| `trial_constituent_mass` | direct liquid emissions | 每种实际组分排放kg=实际排口同步排放m3×实测浓度kg/m3，按相关期间积分。按SI定义mg/L乘0.001为kg/m3。须明确物种、受体及整液／组分核算；NOx当量或COD不是分子NO2或一种化学品。 | cp_trial; sampled molecular concentrations; outlet volume | each evidenced constituent kg per declared reference flow |  |
| `asset_share` | temporary manufacturing burden | 每个同配置资产归属制造量=实物净量×有据活动份额，全部使用份额之和≤1。未知寿命分母不能置一，须独立披露资本敏感性／审查缺口。 | cp_temporary; actual physical quantities; cumulative share ledger | manufacturing-equivalent kg, m3 or item per declared reference flow |  |
| `water_and_material_balance` | construction and trials | 核对期初储存+实际进入水／物料=期末储存+实装／存留+外送废物／产品+实际环境释放，实测／估计损失另披露。内部转移抵消；生物反应用组分质量平衡，不编造体积损失。 | cp_material; cp_water; cp_trial; cp_waste | reconciled physical ledgers and disclosed residuals |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `complete_delivery` | reference product | 实际边界、功能、竣工几何及验收须匹配；局部土建外壳、设备货批或仅调试服务不是完整验收厂。完整独立交付扩建范围须显式报告。 | cp_acceptance；竣工图；真实测试／验收 |
| `inventory_coverage` | all processes | 核对全部施工包、路线单元及实际交换；未发生、未测和遗漏是不同状态。明确各实际前景组分、资产接口及供应链接，不能因UUID未解决而删过程。 | 范围台账；物料表；计量及废物平衡 |
| `route_state_identity` | UUID-bearing rows | 匹配原件名称、化学／物理状态、牌号、地域、供应门端、路线、主属性及单位。中文选定流须等于公开中文baseName，不能通过分类矛盾或误导同义词强配泛名。 | 身份直读记录及供应／场址规格 |
| `source_limits` | method and data | 香港案例仅支持记录中的配置与接口。1994／2003／2007／2012／2017／2018历史材料仅为历史定性事实，不是当前法规批准或默认工程量、寿命、排放。PCR要求真实工程证据。 | 来源定位及真实工程记录 |
| `coverage_uncertainty` | dataset | 保留仪表校准、取样代表性、换算／资产分母证据、平衡残差、缺失流、资本假设和未链接上游数据。技术施工结果可能不足以完成影响评价。 | 校准；质量／覆盖台账；不确定性 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_reference` | reference product | 必须恰一项accepted_entity产出、1件且名称与声明参考产品完全相同；全部行／协议按每声明的参考流。要求真实场址、验收阶段、适用实测几何及处理／输送／处置功能测试。没有的配置字段须核查有据not_applicable；适用但未测不能通过完整性。不得编造寿命或按kg厂实体。 |  |
| `v_route` | all processes | 全厂声明缺实际土建、工艺机电实装、水力／接口或试验交付工作应拒绝；未发生单元须有不适用理由，每个发生且未列交换须扩展原子行。独立长距离水管／地方水或污水干管另分类。 | `un-cpc-treatment-2025` |
| `v_identity` | all inventory rows | 物种、介质、状态、浓度、牌号、主属性或门端不匹配应拒绝；保留精确未解决行及披露。accepted_entity候选参考UUID缺口登记不能证明方法批准或供应链接可用。 |  |
| `v_water_emissions` | utilities; commission | 核对淡／咸水取用、供水、降水、外送、储存、直接受体及各实测排放，避免重复；密度／物种／流量证据缺失保留未解决。环境TSP／噪声不能通过分子排放检查。 | `epa-concrete-washout-2012`; `epd-shek-wu-hui-2007` |
| `v_allocation` | shared construction and reusable assets | 核实因果受益者、非负守恒共享份额及同资产跨所有工程／期间的累计制造份额≤1。寿命／活动须真实有据，未知负担保留审查，不能每项目重置。 |  |
| `v_dataset_claim` | dataset | 报告已接纳输入、已查及未查施工包、身份／数据缺口和仅施工生命周期覆盖。数值一致性不能证明科学审查、当地合规、上游cradle-to-gate链接完整或全寿命批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明完整污水／水处理或污水系统实体的施工至交付，须真实路线、几何及测试工况；可按已核供应接口关联上游；仅功能及范围实际匹配时比较 |
| excluded_use | 默认全寿命或按m3运营处理结果；局部外壳／设备冒充全厂；未建远期能力；猜质量／寿命／配比；自动环境合规或科学批准 |
| required_metadata | 全部参考限定信息；施工／试运行日期；真实场址及竣工台账；处理路线及既有阶段接口；供应／运输门端；实际材料／设备／水／能量计量；资本／共享分配守恒台账 |
| required_quality_disclosure | 身份及未測交换缺口；不支持换算；资本分母不确定性；路线特定土建／工艺／机电覆盖；上游未链接负担；噪声／土地／异味及实际释放证据；后续生命周期排除 |
| update_trigger | 交付功能、几何、能力测试条件、处理技术、分期边界、供应门端、实际清单、资本假设或身份／来源证据改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-treatment-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed/PDF p.281, subclass 53253. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 分类含污水系统及各处理厂，排除长距离水管及地方水／污水干管；不是施工配方。 |
| wsd-shatin-project | official_guidance | Hong Kong WSD, In-situ Reprovisioning of Sha Tin Water Treatment Works – South Works – Advance Works and Main Works, Project section. https://www.wsd.gov.hk/en/core-businesses/major-infrastructure-projects/in-situ-reprovisioning-of-sha-tin-water-treatment/index.html | 工程特定场地形成、配套建筑、残余物管理、泵及处理单元；不将案例能力、造价或工期当默认值。 |
| dsd-shek-wu-hui-project | official_guidance | Hong Kong DSD, PWP 4406DS, Shek Wu Hui sewage treatment works – further expansion phase 1A, Project Scope. https://www.dsd.gov.hk/EN/Our_Projects/All_Projects/4406DS%20.html | 实际生物反应池／终沉池改为MBR及土建机电接口，不要求所有厂采用MBR。 |
| wsd-water-treatment | official_guidance | Hong Kong WSD, Water Treatment in Hong Kong, March 2018, PDF pp.1–3; publication date on p.3. https://www.wsd.gov.hk/filemanager/en/share/pdf/water_treat_a.pdf | 历史记录中的可选澄清／过滤路线、无烟煤／砂滤料及药剂使用；粉末活性炭投加不能作为颗粒活性炭床的证据。仅香港定性支持，无通用配方／剂量。 |
| wsd-desalination | official_guidance | Hong Kong WSD, Desalination, Principle of Reverse Osmosis and Tseung Kwan O Desalination Plant Project sections. https://www.wsd.gov.hk/en/core-businesses/water-resources/desalination/index.html | RO淡化厂及设计／施工／运营区别，不采用造价、能力或回收率默认值。 |
| epd-shek-wu-hui-2007 | official_guidance | Hong Kong EPD, Shek Wu Hui STW Further Expansion Phase 1 Environmental Monitoring and Audit Report, December 2007, Future Key Issues; sections 2.1 and 6.1. https://www.epd.gov.hk/eia/files/applications/en/pp_484/aep_2476/progress/action_16199/emar200712dc200501/html/emar200712dc200501.htm | 历史土方／支护／管路／FRP盖及水密测试案例；TSP及噪声监测区别，不作当前法定限值或排放因子。 |
| dsd-sewage-overview-2017 | official_guidance | Hong Kong DSD, Sustainability Report 2016–17, Overview of Sewage Treatment and Sewerage System, HATS and San Wai STW subsections. https://www.dsd.gov.hk/Documents/SustainabilityReports/1617/en/overview_of_sewage_treatment.html | 历史处理／调试、泵／污泥及紫外路线；DBO施工后运行独立，不将合同年限当寿命。 |
| usace-concrete-1994 | handbook | USACE EM 1110-2-2000, Standard Practice for Concrete for Civil Works Structures, 1 February 1994, section 7-6, printed pp.7-6–7-7 / PDF pp.68–69. https://www.publications.usace.army.mil/Portals/76/Publications/EngineerManuals/EM_1110-2-2000.pdf | 仅历史混凝土准备、模板、浇筑设备、接缝及养护；不采用原件数值设计、配比、压力或尺寸规定。 |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice: Concrete Washout, EPA-833-F-11-006, February 2012, PDF pp.1–2. https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | 历史洗浆液／固体收集及可能环境去向；不默认排放、污染物量、回收率或法规批准。 |
| epa-gac-treatment | official_guidance | US EPA, Overview of Drinking Water Treatment Technologies, Granular activated carbon section. https://www.epa.gov/sdwa/overview-drinking-water-treatment-technologies | 颗粒活性炭吸附滤料及压力容器／重力池配置；实际前驱体、初装量及施工布置须工程证据。不采用去除率、造价、床尺寸或负荷默认值。 |
| epa-dechlorination-history-2003 | official_guidance | US EPA, Managing Urban Watershed Pathogen Contamination, EPA/600/R-03/111, September 2003, section 3.2.5.1, printed p.3-8 / PDF p.92; section 3.2.6.3, printed p.3-20 / PDF p.104. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1009F8P.TXT | 历史湿天气污水使用亚硫酸氢钠溶液脱氯，仅支持化学选项。实际施工试验水及用量须工程记录；不采用数值剂量、造价、性能或现行法规陈述。 |
