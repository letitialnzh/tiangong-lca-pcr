---
pcr_id: pcr.business-and-production-services.design-assets.own-account-design-original
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 自行开发的设计原件

## 1. 范围与适用性

本 PCR 覆盖自行开发、拟出售或许可、作为可识别知识产权资产的原创工业产品、审美和图形设计概念（un-cpc3-design-originals）。覆盖实际创作周期，包括失败迭代、实际采用的实体模型及版本明确的原件包。资产是设计概念；纸张、文件和原型是载体或开发辅助手段。文件格式、登记、收入或许可次数不证明原创性或环境等效性。

排除以委托设计服务为最终产品的活动、科学研发原件、矿产勘探成果、可执行软件原件、独立数据、品牌或特许资产、文学艺术原件、数字复制或下载及广播节目。作为可复用设计概念的图形设计须区别于独立艺术作品。与设计一体的源文件和数据属于原件包；独立软件或数据产品须另定边界。混合科学研发和设计项目须用交付台账区分知识创造与设计概念开发，避免重复计入共享工作。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.design-assets.own-account-design-original |
| classification_refs | CPC 3.0 83920 |
| covered_products | 自行开发的原创工业、审美和图形设计概念资产 |
| excluded_products | 委托服务；研发、勘探、软件、数据、艺术、品牌、下载和广播产品 |
| representative_product | 自行开发的设计原件包 |
| production_route | 实际任务定义 → 概念与迭代 → 适用模型或印样 → 验证 → 版本明确的原件定稿；说明路线与资源 |
| market_state | 拟出售或许可的完整原件资产；实际记录权利和复用限制 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 创作一个已识别的可复用原创设计概念资产 |
| How much | 一个声明版本的完整原件包 |
| How well | 声明设计目标、产品或用途、技术或审美或图形规格、内容目录、原创依据、验证结果、未解决限制及权利；不推定安全或法律批准 |
| How long or cycle | 一个实际创作周期，至记录的定稿与首次移交截止点；不假定使用寿命或许可期限 |
| reference_flow_link | reference_product_original |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 自行开发的设计原件包 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | 件 |
| 必需限定信息 | 原件和项目标识；版本及包内容；自行开发状态；设计或用途类型及目标；拟出售或许可；实际生产路线；完整性与验证；质量限制；权利及复用限制；创作日期与截止点；地域与电压；共享资源及继承原件分配；上游完整性 |

必需限定信息须随数据集提供。一个原件包的计数是生产参考，不代表不同设计具有等效功能。下载、许可、文件数、字节、用户和价格不能换算成该参考量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | 件 | 件是公开 Item(s) 的倍率为1的显示别名；cp_original 记录一个完整版本。不赋予设计虚构物理质量。 |
| energy_unit | 电力行 | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | cp_energy 采集实测千瓦时；1千瓦时 = 3.6兆焦耳，保持同一供电接口。流量或预留时长本身不是实测电量。 |
| same_reference | 所有清单行 | 原件包数量 | 件 | 清单数量与采集汇总均为每声明的参考流。每个交换分子的单位保持其声明值；不将原件换算为千克或网络换算为千瓦时。 |

质量 `93a60a56-a3c8-11da-a746-0800200b9a66` 对应千克单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`; 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` 对应兆焦耳单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`.

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际自行开发设计项目起点；识别已有设计、工具、研究和设施 |
| starting_condition_role | 前景创作，明确连接上游供应 |
| product_classification_scope | CPC 3.0 83920 |
| recursive_input_rule | 复用原件一次记录其上游负担及受益台账；内部展开创作替代对应外购交换 |
| upstream_dataset_requirement | 实际供应材料状态、设备配置、地域或年份、服务商范围和废物处理；披露未知层级 |
| disclosure | 实际设计路线、失败迭代、自制或外购划分、存量、截止点、资源所有权及缺失清单；仅前景不等于完整摇篮到大门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| creation | 所有过程 | 纳入任务定义、概念开发、实体或数字迭代、验证、文件编制、版本归档和截止点前首次移交的归属负担。双钻模型支持分解，不是强制固定顺序或能耗配方。 | un-cpc3-design-originals; design-council-double-diamond |
| actual_routes | 开发与验证 | 依据实际项目记录建立路线到交换登记。聚乳酸和紫外印样行是条件实例，不是类别边界。实际机加工、其他聚合物、绘图介质、差旅、供热或制冷、水及清洁须展开为单独交换。工资及销售权利不是物理交换。 | design-council-double-diamond |
| later_use | 资产与复制品 | 分离被设计产品的后续制造、复制或下载、运行使用、长期托管、网络交付及许可管理。声明首次归档或传输范围；创作负担在原件台账中保留一次，不对每个复制品计入整份清单。 | un-cpc3-design-originals |
| providers | 自有与外部资源 | 自有能源和硬件分别采集。完整外购渲染、存储或验证服务替代其内含能源和设备行；记录范围明确的实际交付和服务商清单。缺失服务商层级阻断完整性。 | gsf-sci-1-1-0 |
| elementary | 直接排放 | 电子概念创作不默认发生直接基本流排放。筛查实际印样、模型、溶剂、制冷剂和燃料操作；对每种有证据物质注明来源、环境介质和状态。能源与硬件上游排放留在上游数据集。技术圈水和废物不是环境资源流。 | design-council-double-diamond |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| brief | 设计任务与目标 | required | 所有原件 | 前景创作 | 每声明的参考流 |
| development | 概念开发与迭代 | required | 所有原件；声明实体或数字路线 | 前景创作 | 每声明的参考流 |
| mockup | 实体模型制作 | conditional | 实际制作实体模型 | 前景创作 | 每声明的参考流 |
| proof | 紫外固化印样制作 | conditional | 实际内部制作紫外固化印样 | 前景创作 | 每声明的参考流 |
| verification | 设计验证 | required | 所有原件；声明实际内部或外包检查 | 前景创作 | 每声明的参考流 |
| mastering | 原件定稿与首次移交 | required | 所有原件 | 前景创作 | 每声明的参考流 |
| support | 共享设计基础设施 | conditional | 实际使用共享设备或设施 | 前景创作 | 每声明的参考流 |

### 过程：设计任务与目标（`brief`）

#### 输入

##### 产品流

###### 交流电（`brief_electricity`）

仅用于项目定义实际采用的中国电网平均用户端低于1千伏供电；其他地域或电压须另行核实对应行。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 采用 cp_energy 计量归属电量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `gsf-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：概念开发与迭代（`development`）

#### 输入

##### 产品流

###### 交流电（`development_electricity`）

仅限中国低于1千伏供电；覆盖实际草图、计算机辅助设计、图形编辑、渲染和迭代，包括被否决方案。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 采用 cp_energy 计量归属电量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `gsf-sci-1-1-0`

###### 无涂层无木纸（`sketch_paper`）

仅在草图或纸加工模型实际使用无涂层无木纸时纳入；涂布纸和外购印样服务须独立识别。

- 选定流: 无涂层无木纸 `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_material 实测纸张消耗。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `design-council-double-diamond`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废弃无涂层无木草图纸（`sketch_paper_waste`）

仅在废弃草图纸交给已记录接收方时纳入；披露涂层、污染、含水率和处理路线。

- 选定流: 废弃无涂层无木草图纸
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_material 称量外运纸张；不默认给予回收抵扣。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `design-council-double-diamond`

##### 基本流

### 过程：实体模型制作（`mockup`）

#### 输入

##### 产品流

###### 聚乳酸打印丝材（`pla_filament`）

仅在实际采用聚乳酸丝材打印模型时纳入。记录聚合物来源、牌号、颜料和添加剂、直径及供应商丝材加工清单；聚乳酸树脂不是丝材。

- 选定流: 聚乳酸打印丝材
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_material 实测丝材消耗，包括支撑和失败打印。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `design-council-double-diamond`

###### 交流电（`mockup_electricity`）

仅限模型生产实际采用的中国低于1千伏供电；计量包括该作业应归属的开机和待机。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 采用 cp_energy 计量归属电量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `gsf-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废弃聚乳酸模型和打印支撑（`pla_scrap`）

仅在丢弃时记录单一聚乳酸废物流。声明添加剂、接收方和处理；留存模型作为项目存量另行核对。

- 选定流: 废弃聚乳酸模型和打印支撑
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_material 称量外运聚乳酸废物。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `design-council-double-diamond`

##### 基本流

### 过程：紫外固化印样制作（`proof`）

#### 输入

##### 产品流

###### 油墨（`uv_ink`）

仅用于内部印样实际采用的紫外固化油墨；说明配方、颜色、固化路线及安全数据。不得用于普通喷墨墨水。固化实际能源和有依据的排放须另列。

- 选定流: 油墨 `7627af63-d2c2-4245-906f-023847c7739f`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_material 实测紫外固化油墨消耗。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `design-council-double-diamond`

###### 交流电（`proof_electricity`）

仅用于印样和紫外固化实际采用的中国电网平均用户端低于1千伏供电；不假定能源系数。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 采用 cp_energy 计量归属电量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `gsf-sci-1-1-0`

###### 无涂层无木纸（`proof_paper`）

仅在紫外固化印样实际采用该基材时纳入；核对供应商涂层和固化相容性；不得代替其他承印物。

- 选定流: 无涂层无木纸 `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_material 实测纸张消耗。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `design-council-double-diamond`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废弃紫外油墨印刷无木纸印样（`proof_waste`）

仅在实际丢弃时纳入；记录固化油墨组成、含水率、污染、接收方及废物分类。留存印样作为存量核对。

- 选定流: 废弃紫外油墨印刷无木纸印样
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_material 称量外运印样；不自动给予回收抵扣。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `design-council-double-diamond`

##### 基本流

### 过程：设计验证（`verification`）

记录针对声明设计目标的实际检查和验收；内部验证电力包含在开发电表台账中，标记归属本过程但不重复计入。外购尺寸检测是一项条件输入。

#### 输入

##### 产品流

###### 设计模型尺寸检测报告（`dimensional_report`）

仅在外购尺寸验证时纳入；一份范围明确的报告，说明对象、公差、方法和验收。其他外包工作须单独定义原子交付。

- 选定流: 设计模型尺寸检测报告
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则: 采用 cp_service 记录实际归属的验收报告数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_service`
- 来源: `design-council-double-diamond`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：原件定稿与首次移交（`mastering`）

#### 输入

##### 产品流

###### 交流电（`mastering_electricity`）

仅限定稿、完整性检查、版本归档和声明完成截止点前首次移交实际采用的中国低于1千伏供电。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 采用 cp_energy 计量归属电量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_energy`
- 来源: `gsf-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 自行开发的设计原件包（`reference_product_original`）

完整的原创设计概念资产；不按每份文件、许可交易、印刷复制品或下载计数。

- 选定流: 自行开发的设计原件包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / 件
- 数量规则: 1 件
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_original`
- 来源: `un-cpc3-design-originals`

##### 废物流

##### 基本流

### 过程：共享设计基础设施（`support`）

#### 输入

##### 产品流

###### 已组装的ADP系统单元（`design_computer`）

仅在项目实际使用已配置且未包装的系统单元时纳入。保留质量属性：称量指定设备，依据实际资源预留及有证据的设备使用期归属隐含清单。显示器和外设另列；必须连接匹配的硬件清单。

- 选定流: 已组装的ADP系统单元 `65153264-5c6b-406f-b113-7d5ad591591b`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 采用 cp_device 记录归属的实测硬件质量及分配证据；不假定寿命。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_device`
- 来源: `gsf-sci-1-1-0`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_project | 迭代与多个原件 | 优先将可直接追溯的作业和供应归属对应原件。保留支持最终设计的否决方案负担。独立交付原件根据实测因果作业或资源记录拆分，份额与总池核对。只有证明受益对象等效时可按数量分摊，不假定设计等同或按售价臆配。无输出的废弃项目须单独披露，不得默默移除。 | un-cpc3-design-originals; design-council-double-diamond |
| allocation_shared | 电力与基础设施 | 尽可能逐作业计量。共享供应使用记录的预留、运行和待机台账及实测负载归属，与设施电表核对。没有实测设备或服务商关系时，不将处理器时长、存储容量或传输容量换成电量。设备清单份额须依据实际预留时间和资源及有证据的设备使用期，并披露敏感性和残差。 | gsf-sci-1-1-0 |
| allocation_inherited | 复用设计与研究 | 识别既有原件及外购证据；保持来源到受益对象负担台账。新增版本工作与继承工作分开。复制品不是另一原件，不用无依据的终身复制数作为分母。留存原型存量、售出实体原型和废物转移须独立计量并界定下游边界；不自动给予替代产品抵扣。 | un-cpc3-design-originals |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_original | mastering | reference output | acceptance_record | 原件标识；项目；版本；内容目录；验收；权利；日期；自行开发状态 | 检查版本明确的母版、设计任务、验证结果和签署的完整性记录；完整原件包计数一次。 | 件 | 定稿及每个新版本 | 完整实际创作周期 | 全部项目场址和服务商 | 每声明的参考流 | 内容完整性；验收及权利证据 |
| cp_energy | brief; development; mockup; proof; mastering | electricity | meter_record | 电表标识；千瓦时；时间；场址；电压；阶段或作业；待机；份额；不确定性 | 读取校准的插座电表或分表及设施账单；核对作业记录和共享归属负载，包括截止点前实际支持性制冷和传输。分离服务商自有电力。 | kWh | 逐作业及计量间隔 | 完整创作周期 | 实际自有供电接口 | 每声明的参考流 | 校准；电表核对；分配台账 |
| cp_material | development; mockup; proof | material and separate waste rows | weighing_record | 行；批次；牌号；组成；质量；期初和期末存量；收货；废物去向 | 使用校准秤分别称量每种材料和独立废物流；依据草图、印样、留存模型、失败试验和接收票据核对消耗与存量。 | kg | 逐批次和废物外运 | 完整创作包括失败 | 声明的实际路线 | 每声明的参考流 | 秤校准；供应商牌号；存量平衡；接收证据 |
| cp_service | verification | purchased dimensional report | delivery_record | 报告标识；模型；方法；公差；检测日期；验收；服务商清单；内含资源 | 检查已验收尺寸报告和服务商清单；将其实际范围内工作归属声明原件，排除已内含能源。 | 件 | 每次交付 | 实际验证期 | 声明服务商和对象 | 每声明的参考流 | 验收；对象身份；服务商完整性 |
| cp_device | support | configured system unit | asset_record | 资产和配置标识；实测净质量；预留时长；容量份额；设备使用期证据；上游范围 | 称量已配置未包装设备或获取该配置可追溯的实测质量；依据项目日志和上游硬件清单核对设备预留和使用期记录。 | kg | 每项资产和项目间隔 | 实际项目与设备使用期 | 仅实际使用的指定配置设备 | 每声明的参考流 | 质量可追溯性；预留记录；使用期敏感性；独立外设 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calculate_energy | 所有电力行 | 将归属实测千瓦时乘以3.6，获得同一接口和原件基准下的兆焦耳。 | cp_energy; kWh | MJ | gsf-sci-1-1-0 |
| calculate_original_inventory | 所有清单行 | 汇总已归属一个声明原件的非重复交换数量。保持分子原单位；验收参考输出恰为1件。汇总前建立共享资源份额，并核对全部阶段总池。 | cp_original; stage records; attribution ledger | 每声明的参考流 | un-cpc3-design-originals; design-council-double-diamond; gsf-sci-1-1-0 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_original | 参考输出 | 绑定实际设计目标、原件和版本、完整性、验证限制和复用权利。不能仅按件数比较相关设计。 | cp_original; un-cpc3-design-originals |
| quality_route | 所有过程 | 将每条实际路线对应至原子供应、存量、废物及有依据直接排放；区分未发生、实测零和未知。不得因最终资产是数字形式而漏掉实体设计工作。 | cp_material; project route register; design-council-double-diamond |
| quality_time | 项目资源 | 使用完整实际日期、失败迭代和场址或服务商变化。量化缺失时段及代表性；无默认能耗、产率、配方或使用期。 | cp_energy; cp_original |
| quality_identity | 上游与选定流 | 匹配状态、物质、组成、供应路线、地域、参考属性和单位组；记录不确定性、设备分配敏感性和未解决身份。 | cp_device; supplier evidence; public identities |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_original | reference_product_original | 核验自行开发设计概念资产、一个完整版本及全部限定信息；拒绝将委托服务、研究成果、软件产品或每次许可或复制计为原件。 | un-cpc3-design-originals |
| validate_units | 所有清单行 | 要求链接协议、两种语言一致的每声明的参考流基准和可追溯分子单位。不得推定设计质量或流量到能源换算。 | gsf-sci-1-1-0 |
| validate_completeness | 实际设计路线 | 路线登记不完整、服务商层级未知、实体供应身份未解决或直接排放无依据，均阻断数据集完整性。条件行未发生须有发生性证据；不能因不购买可选报告而省略必需的内部设计验证。 | design-council-double-diamond |
| validate_attribution | 共享与继承资源 | 核对项目阶段总池、服务商与自有接口、资产分配和受益台账。拒绝重复原件负担、设备清单或电力以及无依据售价分配。 | un-cpc3-design-originals; gsf-sci-1-1-0 |
| validate_identity | 选定流 | 重新检查实际公开身份、参考属性和单位组；基本交换须匹配来源与环境子介质。空身份保留为明确候选缺口，解决前不得宣称完整可用数据集。 | un-cpc3-design-originals |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明原件创作清单，透明连接上游并保留复用台账；仅在目标、规格、权利和边界等效时比较 |
| excluded_use | 独立下载、软件运行、广播、研发或服务清单；缺少全部上游层级时宣称完整摇篮到大门；法律、安全或环境优越性批准 |
| required_metadata | 原件或项目标识；版本；设计类型与目标；自行开发范围；实际路线；权利；验收；地域；日期；单位；分配；截止点；上游身份 |
| required_quality_disclosure | 未知供应商或身份；缺失时段；遗漏路线；仪器不确定性；共享分配和继承负担敏感性；代表性限制 |
| update_trigger | 原件新版本，或路线、规格、服务商、设备分配、供电地域或边界变化；保留此前版本台账 |

## 11. 数据源

| Source id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-design-originals | official_guidance | UNSD, CPC Version 3.0, 83920 Design originals — https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/83920 | 解释注释：自行开发、拟出售或许可的工业、审美和图形概念资产；仅分类，无清单数值 |
| design-council-double-diamond | official_guidance | Design Council, The Double Diamond — https://www.designcouncil.org.uk/our-resources/the-double-diamond/ | 发现、定义、开发、交付及迭代测试，页面标题和过程图；仅过程框架，无强制工厂路线、配方或系数 |
| gsf-sci-1-1-0 | standard | Green Software Foundation, Software Carbon Intensity Specification 1.1.0 — https://sci.greensoftware.foundation/ | 能源、隐含排放及软件边界章节支持计算资源接口和实测分配；仅软件碳范围，不是完整多影响设计 PCR 或默认系数 |
