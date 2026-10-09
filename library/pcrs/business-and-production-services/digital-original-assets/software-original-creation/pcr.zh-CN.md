---
pcr_id: pcr.business-and-production-services.digital-original-assets.software-original-creation
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 软件原件制作

## 1. 范围与适用性

本PCR覆盖已完成软件原件的制作：能够产生声明计算结果的指令，形成可识别、可作为知识产权保护和许可的原件资产。它覆盖系统及应用原件，包括游戏及开发工具，不限定编程语言，也不要求物理载体。参考对象为制作的原件，而非客户复制品。为他人按合同制作的软件不属于此类别。

不以没有软件原件产出的数据资产/数据库、一般研发成果、设计、品牌、特许资产、纯许可交易、包装复制品、软件下载或持续托管服务作为参考产品。活动边界包括真实原件开发周期及一次已验收原件交付；后续复制、网络发行及使用须另建数据集。来源：`un-cpc-software-originals`、`un-cpc-system-downloads`、`un-cpc-application-downloads`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.business-and-production-services.digital-original-assets.software-original-creation |
| classification_refs | CPC 3.0 83143 — Software originals |
| covered_products | 具有已识别功能及原件验收的系统/应用软件原件资产，包括游戏及开发工具 |
| excluded_products | 为他人制作的合同软件；纯数据资产；研发原件；复制品/下载；SaaS；纯许可服务 |
| representative_product | 一个固定、已验收、具有源代码及构建来源记录的软件原件版本 |
| production_route | 需求/架构 → 实现/集成 → 构建/验证 → 原件验收/保存；实际共享基础设施 |
| market_state | 可按声明条件复制/复用的原件资产；不假定未来复制品或用户数量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个具备声明计算功能及复用范围的已完成软件原件 |
| How much | 一个已验收原件资产，归档文件或平台构建数量不增加计数 |
| How well | 由原始验收记录定义实际版本特定功能/平台验收、完整性及完备性 |
| How long or cycle | 一个声明制作周期，从项目开始/基线至原件验收移交；不假定运行寿命 |
| reference_flow_link | `software_original_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的软件原件 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 资产/版本/哈希；系统/应用功能；平台及所含构建；验收/完备性要求；源代码及组件来源；首次/修订范围；复用/复制权及条件；制作期间；场址；供应商边界；设施归属；排除项 |

item/件为公开Item(s)的显示别名，保留物品数量属性及单位组。实际数据集须提供全部必需限定信息。不同原件不会仅因同为一件而功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_original_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 通过cp_original计数一个已完成原件；固定参考产出为1件。计数不等于用户、权利转让、文件或下载数量。 |
| `electricity_unit` | 电力交换 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开能量属性。计量kWh并按electricity_conversion换算MJ；不设GB到kWh因子。 |
| `hardware_mass` | 设备投入 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量实际配置特定设备净质量及其可归属上游制造份额。这不定义软件原件质量，也不改变件数参考。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 有记录的项目决定及实际源代码/组件基线；首次原件制作或明确界定的后续修订 |
| starting_condition_role | 将既有已完成原件及一般研究与当前原件实测制作期间分离 |
| product_classification_scope | 软件原件资产；排除为他人委托制作的软件及下载/复制品产出 |
| recursive_input_rule | 每个购入同类别原件按上游数据集及已记录复用份额计入一次；不在本前景递归重新开发其来源链 |
| upstream_dataset_requirement | 兼容的场址/电压电力、配置特定设备制造、购入原件/组件及实际供应商交付数据集；披露缺失边界 |
| disclosure | 原件身份；基线及制作日期；全部团队/场址/供应商范围；分配键；所含设备/冷却；排除的下游复制品及运行；未解决数据 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_original` | 原件制作 | 纳入项目可归属的需求、架构、实现、集成、构建、测试、返工、发布验收、源代码/制品保存及一次原件交付。纳入属于该验收原件的失败尝试。不假定特定语言、算法、训练步骤或部署架构。 | `un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1` |
| `boundary_separate_copies` | 下游活动 | 排除后续复制、公众下载、发行活动、客户安装、用户运行、订阅托管及验收后维护及移交后的持续归档存储。下游复制品模型可在明确复用群体分配下使用原件数据集，但不得向每次下载分摊整个原件负荷。初次原件移交须与持续下载/网络交付区分。 | `un-cpc-software-originals`; `un-cpc-system-downloads`; `un-cpc-application-downloads` |
| `boundary_primary` | 全部场址及供应商 | 在真实场址采集制作期使用的计算、存储及网络活动。将供应商原始记录展开为不重复的原子交换，或保留有已核验交付单位及声明边界的具体服务数据集。云服务账单或传输GB均不能证明电量。这是声明边界的软件原件制作前景数据集，并非完整从摇篮到大门声明；上游公用工程、设备制造及购入原件须链接兼容数据集。 | `gsf-sci-1-1` |
| `boundary_actual_exchanges` | 条件性公用工程及设备扩展 | 所列设备与冷却行仅在对应设备/公用工程实际存在时适用。对本卡未列的每个实际独立显示器、网络设备、耗材、燃料、冷却剂、废水或直接基本交换，另列具体行并明确属性、协议及供应商/环境介质。仅有实测发生或已证实物理来源时要求直接排放。外购电力影响属于上游，不得虚构现场CO2。未计量的实质遗漏应标记不完整，而不是零。 | `gsf-sci-1-1` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `requirements` | 需求与架构 | required | 声明的软件原件 | 原件制作前景 | 每声明的参考流 |
| `implementation` | 实现与集成 | required | 声明的软件原件 | 原件制作前景 | 每声明的参考流 |
| `verification` | 构建与验证 | required | 声明的软件原件 | 原件制作前景 | 每声明的参考流 |
| `mastering` | 原件验收与保存 | required | 声明的软件原件 | 原件制作前景 | 每声明的参考流 |
| `infrastructure` | 可归属的开发基础设施 | conditional | 设备及水处于声明的原始边界内，且未包含于供应商数据集 | 原件制作前景 | 每声明的参考流 |

### 过程：需求与架构（`requirements`）

需求保留实际架构决定；实现包含实际集成及重复工作；验证包含实际构建及验收测试活动；原件处理包含固定原件文件、来源、完整性检查、保存及一次移交。机器学习训练或其他专门工作仅在实际归属于本原件时纳入。不规定数值默认值。

#### 输入

##### 产品流

###### 其他实际供电地域或电压的交流电（`requirements_electricity_site`）

实际用户端供电地域或电压不满足下列两个中国公开身份时适用。声明实际地域、电压、供电组合及供应商边界，选择并直接核验对应身份。与低压及中压行按实际电表划分，不得重复计数；不以中国电力代替其他电网。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。保留实际地域、电压及设施附加电耗覆盖。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci-1-1`

###### 低压电力（`requirements_electricity_lv`）

仅用于实测中国用户端低于1千伏的电网供电。区分电表与时段；此身份不是全球或默认电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。披露共享电表归属及供应商附加设施电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### 中压电力（`requirements_electricity_mv`）

仅用于实测中国用户端1–35千伏电网供电。同一交付不得再以低压计入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。披露共享电表归属及供应商附加设施电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### 废物流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 基本流

本活动不假定直接基本交换。若原始记录证明实际排放或取用，须补列化学身份、环境介质、实测量及协议；上游电力排放保留于电力数据集。

#### 输出

##### 产品流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 废物流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 基本流

本活动不假定直接基本交换。若原始记录证明实际排放或取用，须补列化学身份、环境介质、实测量及协议；上游电力排放保留于电力数据集。

### 过程：实现与集成（`implementation`）

需求保留实际架构决定；实现包含实际集成及重复工作；验证包含实际构建及验收测试活动；原件处理包含固定原件文件、来源、完整性检查、保存及一次移交。机器学习训练或其他专门工作仅在实际归属于本原件时纳入。不规定数值默认值。

#### 输入

##### 产品流

###### 其他实际供电地域或电压的交流电（`implementation_electricity_site`）

实际用户端供电地域或电压不满足下列两个中国公开身份时适用。声明实际地域、电压、供电组合及供应商边界，选择并直接核验对应身份。与低压及中压行按实际电表划分，不得重复计数；不以中国电力代替其他电网。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。保留实际地域、电压及设施附加电耗覆盖。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci-1-1`

###### 低压电力（`implementation_electricity_lv`）

仅用于实测中国用户端低于1千伏的电网供电。区分电表与时段；此身份不是全球或默认电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。披露共享电表归属及供应商附加设施电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### 中压电力（`implementation_electricity_mv`）

仅用于实测中国用户端1–35千伏电网供电。同一交付不得再以低压计入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。披露共享电表归属及供应商附加设施电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### 购入原件组件（`prior_original_input`）

仅在购入独立完成的原件用于集成时适用；明确版本、功能、复用许可及上游归属。内部提交或免费访问本身不构成新的产品交换。

- 选定流：作为可复用组件使用的既有软件原件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：通过 cp_components 采集实际归属的原件组件数量，每声明的参考流；分别记录上游负荷分摊和安装复制品数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### 废物流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 基本流

本活动不假定直接基本交换。若原始记录证明实际排放或取用，须补列化学身份、环境介质、实测量及协议；上游电力排放保留于电力数据集。

#### 输出

##### 产品流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 废物流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 基本流

本活动不假定直接基本交换。若原始记录证明实际排放或取用，须补列化学身份、环境介质、实测量及协议；上游电力排放保留于电力数据集。

### 过程：构建与验证（`verification`）

需求保留实际架构决定；实现包含实际集成及重复工作；验证包含实际构建及验收测试活动；原件处理包含固定原件文件、来源、完整性检查、保存及一次移交。机器学习训练或其他专门工作仅在实际归属于本原件时纳入。不规定数值默认值。

#### 输入

##### 产品流

###### 其他实际供电地域或电压的交流电（`verification_electricity_site`）

实际用户端供电地域或电压不满足下列两个中国公开身份时适用。声明实际地域、电压、供电组合及供应商边界，选择并直接核验对应身份。与低压及中压行按实际电表划分，不得重复计数；不以中国电力代替其他电网。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。保留实际地域、电压及设施附加电耗覆盖。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci-1-1`

###### 低压电力（`verification_electricity_lv`）

仅用于实测中国用户端低于1千伏的电网供电。区分电表与时段；此身份不是全球或默认电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。披露共享电表归属及供应商附加设施电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### 中压电力（`verification_electricity_mv`）

仅用于实测中国用户端1–35千伏电网供电。同一交付不得再以低压计入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。披露共享电表归属及供应商附加设施电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### 外购测试交付（`external_test_report`）

仅在第三方针对本原件版本交付一次有界测试活动的报告时适用；不得同时计入该供应商活动的电力或设备。报告计数是服务交付数量，不是软件原件产出。

- 选定流：外部可执行软件测试报告交付
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：通过 cp_components 记录已交付验收的测试报告，每声明的参考流；供应商清单须披露活动覆盖范围和计数单位。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_components`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### 废物流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 基本流

本活动不假定直接基本交换。若原始记录证明实际排放或取用，须补列化学身份、环境介质、实测量及协议；上游电力排放保留于电力数据集。

#### 输出

##### 产品流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 废物流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 基本流

本活动不假定直接基本交换。若原始记录证明实际排放或取用，须补列化学身份、环境介质、实测量及协议；上游电力排放保留于电力数据集。

### 过程：原件验收与保存（`mastering`）

需求保留实际架构决定；实现包含实际集成及重复工作；验证包含实际构建及验收测试活动；原件处理包含固定原件文件、来源、完整性检查、保存及一次移交。机器学习训练或其他专门工作仅在实际归属于本原件时纳入。不规定数值默认值。

#### 输入

##### 产品流

###### 其他实际供电地域或电压的交流电（`mastering_electricity_site`）

实际用户端供电地域或电压不满足下列两个中国公开身份时适用。声明实际地域、电压、供电组合及供应商边界，选择并直接核验对应身份。与低压及中压行按实际电表划分，不得重复计数；不以中国电力代替其他电网。

- 选定流：交流电
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。保留实际地域、电压及设施附加电耗覆盖。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`gsf-sci-1-1`

###### 低压电力（`mastering_electricity_lv`）

仅用于实测中国用户端低于1千伏的电网供电。区分电表与时段；此身份不是全球或默认电力。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。披露共享电表归属及供应商附加设施电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### 中压电力（`mastering_electricity_mv`）

仅用于实测中国用户端1–35千伏电网供电。同一交付不得再以低压计入。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本活动实测可归属 kWh × 3.6 MJ/kWh；通过 cp_energy 采集。披露共享电表归属及供应商附加设施电耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### 废物流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 基本流

本活动不假定直接基本交换。若原始记录证明实际排放或取用，须补列化学身份、环境介质、实测量及协议；上游电力排放保留于电力数据集。

#### 输出

##### 产品流

###### 已完成原件资产（`software_original_output`）

一个已验收原件，具有固定发布身份、可执行功能及复制/复用条件；若验收范围将源代码归档与平台构建归为同一原件，则它们属于这一个原件。cp_original 核验已验收原件，而非下载事件或许可席位。

- 选定流：已完成的软件原件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 件
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_original`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### 废物流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 基本流

本活动不假定直接基本交换。若原始记录证明实际排放或取用，须补列化学身份、环境介质、实测量及协议；上游电力排放保留于电力数据集。

### 过程：可归属的开发基础设施（`infrastructure`）

需求保留实际架构决定；实现包含实际集成及重复工作；验证包含实际构建及验收测试活动；原件处理包含固定原件文件、来源、完整性检查、保存及一次移交。机器学习训练或其他专门工作仅在实际归属于本原件时纳入。不规定数值默认值。

#### 输入

##### 产品流

###### 便携式开发计算机制造份额（`portable_computer_share`）

仅用于实际净质量不超过10千克、且与公开身份及实测配置相符的便携式计算机；不得代替服务器或台式机。

- 选定流：重量不超过 10 千克的便携式自动数据处理机，如笔记本电脑、笔记本和次级笔记本电脑 `c4cb6070-944d-41be-a231-a0a2b9477174`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测设备净 kg × 项目预留时间 / 有证据的在用寿命 × 项目预留资源 / 设备总资源；通过 cp_hardware 采集。这是可归属设备投入，并非软件质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### 一体式开发计算机制造份额（`integrated_computer_share`）

仅用于与此身份相符、同一机壳包含中央处理及输入输出单元的实际计算机；单独供应的显示器/外设须另列清单行。

- 选定流：自动数据处理设备，在同一机壳内至少包括一个中央处理单元和一个输入输出单元，无论是否组合在一起 `3c41eabb-f2b2-4e96-b24d-3485673d505f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测设备净 kg × 项目预留时间 / 有证据的在用寿命 × 项目预留资源 / 设备总资源；通过 cp_hardware 采集。这是可归属设备投入，并非软件质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### 服务器制造份额（`server_computer_share`）

仅用于实际配置明确的机架式构建/测试服务器；明确CPU、内存、存储、所含机箱及上游制造。排除独立网络设备及与供应商隐含清单重复的部分。

- 选定流：机架式开发服务器计算机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测设备净 kg × 项目预留时间 / 有证据的在用寿命 × 项目预留资源 / 设备总资源；通过 cp_hardware 采集，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hardware`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

###### 外购冷却补充水（`cooling_tap_water`）

仅用于实际向开发设施冷却供应的经处理市政自来水，须匹配供应商水质/地点；不得代替河流水资源或未指定淡水。已计入供应商清单的水不得重复计入。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：通过 cp_water 计量交付水质量；若按体积计量，保留实测密度、状态及明确换算，每声明的参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### 废物流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 基本流

本活动不假定直接基本交换。若原始记录证明实际排放或取用，须补列化学身份、环境介质、实测量及协议；上游电力排放保留于电力数据集。

#### 输出

##### 产品流

本组不规定交换。实际实质交换须补列具体行及证据。

##### 废物流

###### 送往处理的冷却排污水（`cooling_blowdown`）

条件项：实际送往处理方的未经处理冷却塔排污水。记录盐分、添加剂、污染情况、实测质量及处理去向；该交换是技术圈废物，不是淡水资源基础流或假定直接排放。公开泛称不能确立实际产生工艺和未经处理状态，身份保持待确认。

- 选定流：送往处理的未经处理冷却塔排污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：通过 cp_water 计量外排排污水，每声明的参考流；与投入、蒸发及水库存变化核对，不假定固定比例。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：`un-cpc-software-originals`; `gsf-sci-1-1`; `nist-ssdf-1-1`

##### 基本流

本活动不假定直接基本交换。若原始记录证明实际排放或取用，须补列化学身份、环境介质、实测量及协议；上游电力排放保留于电力数据集。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | 活动及原件版本 | 在分配前分离可识别的项目/版本作业与电表。保留可归属于本原件的失败、分支和返工。共享平台工作采用实测可归属活动与声明复用范围，核对全部资源总量并报告剩余/未分配工作。不默认按收入、代码行数、下载量或用户数分摊。 | `gsf-sci-1-1` |
| `allocation_equipment` | 制造份额 | 采用设备特定净质量、可追溯上游制造、实测项目预留时段与资源份额。份额为预留时间除以有证据的在用寿命，再乘以预留资源除以可用总资源。不假定四年寿命、固定利用率或通用设备。披露不确定性，并避免再次计入供应商服务数据集已含的设备制造。 | `gsf-sci-1-1` |
| `allocation_original` | 联合及复用知识产出 | 一个原件可包含已记录的源代码归档与多个平台构建，但不得因此增加其计数。一个项目产生不同已验收原件时，需要前景支持的分配键及敏感性披露；否则保留联合产出数据集和未解决分配。既有原件/组件按声明上游份额计入一次；销售或复用权并非物理质量，也不构成避免负荷抵扣。 | `un-cpc-software-originals` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_original` | mastering | software_original_output | acceptance_record | 资产标识；版本；哈希；发布日期；功能；平台；源代码/制品清单；组件来源；验收决定；复用权；原件数量 | 根据固定仓库及制品清单核对原件验收；计数一个已完成原件，而非文件或复制品。记录首次制作与增量修订范围。 | item | 验收时 | 完整声明制作期间 | 全部参与团队/场址 | 每声明的参考流 | 验收签署；哈希；来源；权利记录 |
| `cp_energy` | requirements; implementation; verification; mastering | activity electricity | meter_record | 原件标识；过程标识；作业标识；电表标识；时段；场址；电压；kWh；预留资源；分配键；附加设施覆盖 | 使用校准分表记录或已核对供应商原始遥测。关联设计工作站、集成、构建/测试及验收/归档作业。独立于流量计量网络/存储设施能量；预留闲置及冷却电量只计入一次。 | kWh | 每电表时段/作业 | 完整制作期间，包含失败运行 | 每工作站/供应商/数据中心场址 | 每声明的参考流 | 校准；电表总量；作业日志；供应商边界；归属核对 |
| `cp_components` | implementation; verification | prior_original_input; external_test_report | supplier_record | 交付标识；组件/报告版本；原件标识；数量；验收；上游数据集；复用群体；覆盖范围 | 读取实际采购/复用及测试活动交付记录，核对验收及供应商清单边界；保留供应商原始单位和已审计归属。 | item | 每次交付 | 声明制作期间 | 实际供应商及项目 | 每声明的参考流 | 合同；版本；验收报告；上游清单及无重复检查 |
| `cp_hardware` | infrastructure | portable_computer_share; integrated_computer_share; server_computer_share | device_record | 设备标识；配置；设备净质量；称重记录；上游制造；预留时段；在用寿命；预留资源；资源总量 | 采用校准设备称重或同配置可追溯供应商净质量记录。保留观察到的安装/退役证据，或有明确依据的预计在用寿命及预留日志。按一致设备容量定义计算资源份额。 | kg | 每设备/配置及预留变化 | 制作期间；设备在用寿命证据 | 自有设备或独立展开的供应商设备 | 每声明的参考流 | 秤/供应商记录；配置；寿命依据；容量及预留核对 |
| `cp_water` | infrastructure | cooling_tap_water; cooling_blowdown | utility_record | 场址；系统；原件标识；投入水质量；排污水质量；体积计量时密度/状态；蒸发；库存；盐/添加剂；接收供应商 | 读取实际冷却供给/排水计量及供应商/密度证据。按同一核对后的冷却活动边界归属开发工作负荷；记录化学组成及实际水平衡，不假定排水或用水强度。 | kg | 每公用工程时段 | 完整适用制作期间 | 实际冷却设施 | 每声明的参考流 | 计量表；密度/状态证据；供水水质；处理去向；平衡残差 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_conversion` | 全部电力行 | MJ = 实测可归属 kWh × 3.6；保留kWh及电网/电压记录。单位换算前须独立计量/核对共享资源归属。 | cp_energy | MJ，每声明的参考流 | `gsf-sci-1-1` |
| `hardware_attribution` | portable_computer_share; integrated_computer_share; server_computer_share | 归属设备 kg = 实测设备净 kg ×（项目预留时间 / 有证据的在用寿命）×（项目预留资源 / 设备总资源）。采用一致时间单位、严格为正且有证据的在用寿命及容量，预留时间/资源份额须处于零至一之间；跨项目核对份额，总和不得超过可用资源。寿命或资源证据缺失时记录为未解决，不取默认值。 | cp_hardware | kg，每声明的参考流 | `gsf-sci-1-1` |
| `original_basis` | 所有清单行 | 将归属于一个已验收原件的交换直接记录为每声明的参考流。若群体包含不同原件，先按记录的分配拆分原始记录；不得平均不同原件并声称等价。全部阶段计数、交付及时段须对应同一原件。 | cp_original; cp_energy; cp_components; cp_hardware; cp_water | 声明的原件参考流 | `un-cpc-software-originals` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 参考原件 | 固定资产/版本、功能、平台构建、完整性、验收测试、组件来源、复用权及增量/首次制作范围。不设普遍代码长度、安全性或软件寿命阈值。 | cp_original及实际测试/权利证据 |
| `quality_coverage` | 全部阶段 | 覆盖完整声明项目期间的真实开发场址及外包作业。保留失败运行和返工。披露缺失数据、电表粒度、共享闲置分配、供应商覆盖及设施排除；数据缺口不是零。 | 作业/活动台账；电表；供应商清单 |
| `quality_representative` | 数据集复用 | 说明实际软件类型、开发模式、规模、测试工作量、工具、计算设备、地点及日期。一个版本的数据集不是行业平均，也不证明全部软件功能。功能或资源架构有实质变化时更新。 | 项目/版本画像及不确定性披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产出 | 要求一个已完成原件参考件，具有版本/哈希、声明功能/平台、验收证据、组件来源及复制/复用条件。参考名称须与 software_original_output 一致。拒绝以一项许可、收入单位、下载、用户年、GB、kg或委托开发服务替代。 | `un-cpc-software-originals`; `nist-ssdf-1-1` |
| `validate_measurement` | 每个清单行 | 核对每个交换属于同一原件、期间及声明参考流；审计能量换算、电表覆盖、设备份额及水平衡。核对电网国家、供电电压与每个电力UUID；替换不适用身份并保留实际实测交换。核实供应商边界，防止电力、设备、原件及服务投入重复。 | `gsf-sci-1-1` |
| `validate_completeness` | 数据集交付 | 适用流身份未解决、供应商清单缺失、共享资源关系未获支持或实质阶段缺失均禁止声称数据集完整。保留不确定性与排除项。测试证据定义所述验收质量；它不证明普遍安全、法规合规或方法学批准。 | `nist-ssdf-1-1` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一个已验收软件资产/版本的声明原件制作前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在明确兼容功能/版本范围及下游分配下作为原件开发投入复用；仅在等价原件功能和边界下比较 |
| excluded_use | 全生命周期软件服务；无复制品分配的每下载影响；普遍行业平均；委托定制开发；批准/安全/合规声明 |
| required_metadata | 参考限定信息；实际原始场址/期间；阶段覆盖；设备及供应商数据集；分配与复用群体；条件行；遗漏交换 |
| required_quality_disclosure | 实测/建模划分；电表及供应商覆盖；缺失数据及身份；在用寿命/资源份额不确定性；排除及平衡残差 |
| update_trigger | 新验收原件/版本范围实质变化；开发或设备/云架构变化；复用范围改变；供应商/计量证据修正 |

## 11. 数据源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-software-originals` | official_guidance | UNSD, CPC Version 3.0, subclass 83143, Explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/83143 | 原件资产身份及委托开发排除；分类不是清单因子 |
| `un-cpc-system-downloads` | official_guidance | UNSD, CPC Version 3.0, subclass 84341, Explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84341 | 区分可下载系统软件复制品 |
| `un-cpc-application-downloads` | official_guidance | UNSD, CPC Version 3.0, subclass 84342, Explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84342 | 区分可下载应用软件复制品 |
| `gsf-sci-1-1` | standard | Green Software Foundation, Software Carbon Intensity Specification 1.1.0, Energy; Embodied emissions; Software boundary. https://sci.greensoftware.foundation/ | 将设施识别、实测电力及设备时间/资源归属适用于声明制作周期；不作为SCI分数或默认负荷/寿命 |
| `nist-ssdf-1-1` | official_guidance | NIST SP 800-218, Secure Software Development Framework Version 1.1 (February 2022). https://doi.org/10.6028/NIST.SP.800-218 ; Table 1, PS.2/PS.3 (printed p.10, PDF p.19), PW.6/PW.8. | 发布完整性/来源及实际构建/测试/归档阶段证据；仅采用该推荐版本，不声明NIST认证或数值能耗 |
