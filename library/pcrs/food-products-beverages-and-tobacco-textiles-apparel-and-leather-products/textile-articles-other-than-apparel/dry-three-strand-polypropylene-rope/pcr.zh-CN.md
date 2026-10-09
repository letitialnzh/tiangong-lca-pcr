---
status: candidate
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-three-strand-polypropylene-rope
language: zh-CN
sync_with: pcr.en-US.md
---

# 干法三股聚丙烯捻绳制造

## 1. 范围与适用性

本方法适用于外购已纺丝、拉伸、具明确组成的聚丙烯长丝纱，在厂内干法备纱、制股和三股合捻，随后机械裁切、检验并以绳卷出厂。代表产品为无厂内新增涂层的三股聚丙烯通用绳；尺寸、线密度、强度和捻距由真实订单及验收记录声明。供应商已加入的颜料、稳定剂和纺丝油剂仍属于来料组成及上游负担。

排除天然纤维、聚酯/尼龙/高模量纤维、聚丙烯与其他聚合物混纺、编织绳、网具、金属缆、电缆、吊索总成和后续使用。不覆盖原料聚合、纤维挤出拉伸、熔融切端、热定形、现场染色、清洗或新增化学涂层。实际存在这些工艺时须扩展边界并另列原子交换，不能宣称本清单已覆盖。官方 CPC 文件仅给出宽泛类别名称；该方法不代表整个 27310 已覆盖。制造商原件支持纱线制三股绳及捻合工艺；专用绝缘绳的额外涂层是排除路线的反证。见 deyuan-pp-rope、meera-pp-twisting、samson-coated-counterevidence 与 unsd-cpc-notes。

厂内备纱制股与将三根完成的绳股合捻为绳是不同阶段。外购已并捻的适用纱线可在上游复用现有人造长丝多股纱方法，但须声明实际加工态，不重复计入其已完成的准备阶段。现有网具方法将制绳作为上游且明确排除未制成网具的绳。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.dry-three-strand-polypropylene-rope |
| classification_refs | CPC 3.0 27310; narrower |
| covered_products | 外购聚丙烯长丝纱制造的无厂内新增涂层干法三股捻绳 |
| excluded_products | 编织绳；混纺绳；天然纤维绳；厂内挤出或染整路线；专用涂层绳；网具；金属和电缆 |
| representative_product | 配置与组成明确的通用三股聚丙烯绳卷 |
| production_route | 收纱和备纱 → 制股 → 三股合捻和收卷 → 机械裁切、检验、包装 |
| market_state | 已验收厂门绳卷，包装质量单列，非使用服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明组成与三股结构的合格聚丙烯绳 |
| How much | 1 kg 验收绳净质量 |
| How well | 明确直径、捻距、捻向、实测线密度、破断试验方法和结果、颜色及添加剂、来料状态；不自动赋予安全用途资格 |
| How long or cycle | 一次制造批次；不设使用寿命或重复使用次数 |
| reference_flow_link | `finished_rope_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 干法三股聚丙烯绳，验收净产品 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 聚丙烯及添加剂质量组成；纱线长丝形式及加工态；原生/再生比例；三股结构；捻向和捻距；直径；实测线密度；检验方法和验收状态；净质量扣除包装；场址和期间；染整/涂层排除声明 |

质量单位是制造归一化基准，不代表等长度、等破断力或等寿命服务。参考产品 UUID 未确认时保留空身份，并在 manifest 精确登记成品输出行；不得以通用塑料绳或农业捆扎绳替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 同一验收批的绳净质量使用校准秤称量；扣除可拆线盘、绑带及包装；所有清单行按每 1 kg 参考流归一化。 |
| linear_mass | 长度记录 | 质量与长度分别保留 | kg; m | 同时测量同一配置绳的净质量和长度，得到 kg/m；长度不能凭直径或聚合物密度换算质量。 |
| electricity_unit | strand_electricity; laying_electricity; packing_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开身份实际引用的净热值属性及能量单位组；电表 kWh 乘 3.6 换为 MJ，不改成质量属性。 |

净热值属性保留能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`，参考单位为 MJ。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 厂门外购已加工聚丙烯长丝纱，颜色和油剂状态已声明 |
| starting_condition_role | 上游准备完成的技术圈材料投入 |
| product_classification_scope | CPC 27310 内的一条窄制造路线 |
| recursive_input_rule | 外购绳股或半成品绳须声明已省略阶段和上游连接；不能将其作为原纱同时声称覆盖备纱制股。内部转移只连接一次。 |
| upstream_dataset_requirement | 按实际聚丙烯路线、纱线加工态、添加剂、再生比例、地域电网及包装连接适用上游数据；披露缺口 |
| disclosure | 仅制造厂门前景；聚合和纤维生产、来料外部运输、消费及报废另行建模，不能称完整 cradle-to-gate |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_stages | 制造工序 | 必须纳入收纱备纱、绳股加捻、三股合捻收卷、机械裁切检验和实际包装的直接交换。不得以设备采购耗能替代制造电表；工厂一体机可合并计量但须保留阶段责任及不重计证据。 | meera-pp-twisting; deyuan-pp-rope |
| boundary_extensions | 可选和排除工序 | 染色、涂层、热定形、熔切、清洗不作为本干法路线必需工序。发现实际工艺时扩展清单，并单列每种化学品、水、燃料、废水和实测排放；专用涂层绝缘绳不可直接使用此画像。 | samson-coated-counterevidence |
| boundary_direct_emissions | 基础流与技术圈交换 | 本基准清单不假定直接燃烧、取水、废水或粉尘排放，基础流为零项待场址完整性检查。电力供应排放归上游。存在释放时按实测物质、来源、介质及子介质新增原子基础流；收集的切余废料不是空气颗粒物。辅助压缩空气、清洁剂、润滑油等实际消耗须逐物质补充或说明有记录的缺省范围。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| strand_preparation | 收纱、备纱及绳股加捻 | required | 本声明路线的实际阶段；卡片条件项仅在发生时记录 | 前景制造 | 每 1 kg 参考流 |
| rope_laying | 三股合捻及收卷 | required | 本声明路线的实际阶段；卡片条件项仅在发生时记录 | 前景制造 | 每 1 kg 参考流 |
| inspection_packing | 裁切、检验、放行及绳卷包装 | required | 本声明路线的实际阶段；卡片条件项仅在发生时记录 | 前景制造 | 每 1 kg 参考流 |

### 过程：收纱、备纱及绳股加捻（`strand_preparation`）

#### 输入

##### 产品流

###### 丙纶长丝（`filament_yarn_input`）

接收已纺丝和拉伸的聚丙烯长丝纱，供应商声明颜色、添加剂、捻度和再生状态。该来料不是聚丙烯树脂或松散短纤。扣除退料并核对库存后记录纱线净消耗。

- 选定流：丙纶长丝 `26f0ce1c-fd85-402c-8993-4e843df4f762`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_material`
- 来源：`meera-pp-twisting`

###### 交流电（`strand_electricity`）

仅中国场址、用户边界电压小于 1 kV 的电网平均交流电供电可采用此公开身份。分表计量本工序及可归属的待机、换批和辅助驱动耗电；其他地域、电压或供电组合须保留具体电力行并另行核验身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_energy`
- 来源：`meera-pp-twisting`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干法加捻聚丙烯绳股（`strand_output`）

称量实际转入合捻的绳股；记录股内纱线根数、捻向和捻度。该中间品仅与 strand_input 连接一次，不是销售参考绳。

- 选定流：干法加捻聚丙烯绳股
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_transfer`
- 来源：`meera-pp-twisting`

##### 废物流

###### 聚丙烯长丝纱切余废料（`strand_pp_waste`）

仅记录备纱阶段分选的聚丙烯长丝纱切余物；称量实际移出的废料，包括调机不合格料。内部回用不作为输出废物。

- 选定流：聚丙烯长丝纱切余废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_waste`
- 来源：`meera-pp-twisting`

##### 基本流

### 过程：三股合捻及收卷（`rope_laying`）

#### 输入

##### 产品流

###### 干法加捻聚丙烯绳股（`strand_input`）

接收同一声明聚丙烯结构的三根绳股。与 strand_output 核对质量和批次；该内部连接不得再附加纱线生产数据集。

- 选定流：干法加捻聚丙烯绳股
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_transfer`
- 来源：`meera-pp-twisting`

###### 交流电（`laying_electricity`）

仅中国场址、用户边界电压小于 1 kV 的电网平均交流电供电可采用此公开身份。分表计量本工序及可归属的待机、换批和辅助驱动耗电；其他地域、电压或供电组合须保留具体电力行并另行核验身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_energy`
- 来源：`meera-pp-twisting`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未放行干法三股聚丙烯绳（`laid_rope_output`）

记录三股合捻和收卷后、最终检验前的绳净质量。实测绳捻距、直径和线密度；不假设捻缩系数。

- 选定流：未放行干法三股聚丙烯绳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_transfer`
- 来源：`meera-pp-twisting`

##### 废物流

###### 聚丙烯绳合捻切余废料（`laying_pp_waste`）

称量合捻阶段分选的聚丙烯绳废料；明确污染情况与外送去向。不得假设其已完成机械回收。

- 选定流：聚丙烯绳合捻切余废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_waste`
- 来源：`meera-pp-twisting`

##### 基本流

### 过程：裁切、检验、放行及绳卷包装（`inspection_packing`）

#### 输入

##### 产品流

###### 未放行干法三股聚丙烯绳（`laid_rope_input`）

连接 laid_rope_output，计入中间库存和返工。记录实际接受检验并裁切为销售长度的质量。

- 选定流：未放行干法三股聚丙烯绳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_transfer`
- 来源：`deyuan-pp-rope`

###### 交流电（`packing_electricity`）

仅中国场址、用户边界电压小于 1 kV 的电网平均交流电供电可采用此公开身份。分表计量本工序及可归属的待机、换批和辅助驱动耗电；其他地域、电压或供电组合须保留具体电力行并另行核验身份。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_energy`
- 来源：`deyuan-pp-rope`

###### 瓦楞纸板（`corrugated_board_input`）

条件项：绳卷实际采用瓦楞纸板包装时，单独记录此组件。本 UUID 仅适用于含再生材料且纤维含量至少 80% 的 C 型、E 型或 F 型瓦楞纸板，与公开原件限定一致。其他规格保持本原子行，另核验身份或留空 UUID。采集实际等级、再生比例、加工态和消耗质量；此投入不是组合包装选择器。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_pack`
- 来源：`deyuan-pp-rope`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干法三股聚丙烯绳，验收净产品（`finished_rope_output`）

完整验收绳卷，不含可拆线盘或运输包装。声明同一销售批的实测组成和配置；不合格绳和检测试样不计入验收产量。

- 选定流：干法三股聚丙烯绳，验收净产品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：固定值（`fixed_value`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_output`
- 来源：`deyuan-pp-rope`

##### 废物流

###### 聚丙烯绳检验裁切废料（`inspection_pp_waste`）

称量废弃聚丙烯绳，包括破坏性检测试样、绳端切余和未内部返工的拒收绳卷。外送去向与污染情况为必采字段。

- 选定流：聚丙烯绳检验裁切废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_waste`
- 来源：`deyuan-pp-rope`

###### 包装废弃物，纸板（`cardboard_waste`）

条件项：称量现场产生的纸板包装切余及不合格物；采集处置或回收去向，不设默认损耗比例或处理工艺。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：本行实测批次交换量除以同批验收绳净质量；保留实际计量单位及原始批次总量。
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_pack`
- 来源：`deyuan-pp-rope`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | 不同绳产品与共享设备 | 按 cp_energy 工序分表与生产订单直接归属，优先避免分配。不能按长度在不同线密度、捻度及机器设置间无条件分摊。仍共享的耗用采用同期实测运行时间与负载关系；质量分摊仅在有证据证明同工艺设置和耗用关系适用时采用，并报告敏感性。 |  |
| allocation_rework | 返工与废料 | 内部返工及绳股转移保留实际追加电耗，物料内循环在合并系统抵消，不重复计上游。外送废料与合格绳分别称量；不能因计划回收而自动给予替代收益。存在销售共产品须声明边界、分配依据和可复算数值。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | inspection_packing | 成品参考输出 | weighing | 批号；净质量；包装皮重；长度；直径；捻距；检验结果 | 使用校准秤称量同一验收批，扣除包装和线盘；长度计校准并抽样同配置线密度，保留称重和验收原始凭据 | kg; m | 每批 | 连续完整代表期间，记录具体起止日期及异常批次 | 所选场址及同配置绳批 | 每 1 kg 参考流 | 秤和长度计校准；批次放行和取样记录 |
| cp_material | strand_preparation | 来料纱线 | mass balance | 收料；退料；期初期末库存；净消耗；纱线组成和加工态 | 校准称重结合批次领退料台账，核对供应商加工态和组成声明 | kg | 每批并期间核对 | 与 cp_output 同期 | 备纱阶段 | 每 1 kg 参考流 | 供应商批号；称重；库存台账 |
| cp_transfer | all | 内部中间品 | weighing | 转移批号；绳股/绳净质量；期初期末库存；返工量 | 阶段出口与入口同批称重匹配；不得用绳长度代替绳股质量 | kg | 每次转移 | 与 cp_output 同期 | 制股到合捻到检验 | 每 1 kg 参考流 | 双端批号与库存及返工凭据 |
| cp_energy | all | 电力 | meter reading | 分表读数；电压；地域；运行和待机时间；订单；共享分配依据 | 分表计量或实测设备功率与运行时间，含归属待机与辅助负载；与厂总表核对，不取铭牌额定功率作实际功率 | kWh; MJ | 每班每批 | 与 cp_output 同期 | 三个制造阶段 | 每 1 kg 参考流 | 电表校准；供电电压和订单；分配记录 |
| cp_waste | all | 聚丙烯切余废料 | weighing | 工序；材质；污染；废料净质量；去向；返工回用 | 按阶段单独称量分选聚丙烯废料，排除包装，不将未识别废物混合入此行 | kg | 每批 | 与 cp_output 同期 | 各产生阶段 | 每 1 kg 参考流 | 秤校准；分选和交接凭据 |
| cp_pack | inspection_packing | 纸板输入和废纸板输出 | weighing | 纸板等级；再生比例；消耗；废料；发货包装质量 | 分别称量实际纸板投入、裁切废物及随货包装；不用采购整批质量代替实际消耗 | kg | 每批 | 与 cp_output 同期 | 绳卷包装 | 每 1 kg 参考流 | 包装称重；采购规格；交付核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | 所有清单行 | 各实际交换量除以同批已验收绳净质量，形成每 1 kg 参考流；成品输出为 1 千克。不得把投入纱线质量作为成品分母。 | cp_output; cp_material; cp_transfer; cp_energy; cp_waste; cp_pack | 每 1 kg 参考流的交换量 |  |
| convert_electricity | strand_electricity; laying_electricity; packing_electricity | 电表 kWh 乘 3.6 得 MJ，然后按同批验收绳净质量归一化。 | cp_energy; cp_output | MJ/kg | si-units |
| reconcile_mass | 纱线和中间品及废物 | 同一期间投入和期初库存等于验收输出、外送废料和期末库存，加已解释的测量残差；内部转移抵消，包装单独平衡。不得将未平衡质量自动变成粉尘或气体排放。 | cp_material; cp_transfer; cp_output; cp_waste; cp_pack | 批次质量平衡与残差 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_configuration | 绳与纱线 | 核对真实组成、加工态、长丝形式、颜色及油剂、捻距、直径、线密度、检验方法，不将不同配置混成等服务产品。 | cp_material; cp_output; deyuan-pp-rope |
| quality_coverage | 全部阶段 | 期间覆盖换批、调机、返工与拒收；报告起止日期、产量、计量覆盖、缺测、排除、分配及不确定性。不编造能耗、损耗或配方数值。 | cp_output; cp_energy; cp_waste |
| quality_identity | 公开身份 | 核对 UUID 类型、真实参考属性、单位组、工艺和供电限定；未确认身份保持具体原子行与空 UUID；供应商数据集不得重复计入厂内制股及合捻。 | cp_material; cp_energy |
| quality_releases | 场址环境完整性 | 核对是否实际发生燃烧、取水、清洗、泄漏、空气纤维颗粒物或废水释放。零基础流是本边界条件，不是全厂无环境排放声明；无法核对则标记完整性不足。 | cp_energy; cp_waste |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_rope_output | 检查 1 kg 验收净绳参考输出、全部必需限定、同批称重及包装皮重，双语名称和 row_id 一致；参考 UUID 空缺按候选身份缺口登记，不能声称全部身份已解决。 |  |
| validation_stage_links | strand_output; strand_input; laid_rope_output; laid_rope_input | 核对工序顺序、批次与数量，解释库存及返工差额；内部连接不重复加上游。购买绳股或半成品须披露被跳过的工序。 | meera-pp-twisting |
| validation_quantities | 所有清单行 | 每行按同批验收净质量归一化，电力保持净热值属性和 MJ 及 kWh 换算；逐行核对实际发生条件和收集凭据。数量应有限非负，参考产量须大于零；校验残差须与实测不确定度解释，无统一损耗阈值。 | si-units |
| validation_boundary | 场址和数据包 | 发现涂层、湿处理、挤出、热定形或熔切须声明边界扩展和新增流；核对实际基础流、水、废物及辅助投入覆盖。未核实范围标记 inconclusive，不把省略项当零；不将制造画像用于绝缘或吊装安全审批。 | samson-coated-counterevidence |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | manufacturing_foreground |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在声明组成、结构、场址、期间和边界下，用作三股聚丙烯绳制造模块，并明确连接上游 |
| excluded_use | 完整 cradle-to-gate 或使用寿命比较；全 CPC 覆盖；无配置的绳替代；绝缘、食品接触、吊装或健康合规批准 |
| required_metadata | 组成与添加剂；来料加工态；原生/再生比例；三股结构与捻向捻距；直径和实测线密度；净质量及包装；检验方法；场址期间；供应电压；上游连接；分配 |
| required_quality_disclosure | 身份空缺；科学审查状态；量测和期间覆盖；不确定性；未覆盖工艺；零基础流的场址核对；没有默认能耗或损耗范围 |
| update_trigger | 组成、加工态、工艺、染整、供电或产品配置改变；身份解决或科学审查有新证据 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc-notes | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, p. 128. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 27310 类别与相邻网具类别；无工艺专门解释 |
| deyuan-pp-rope | literature | Deyuan Marine, 3-Strand PP Rope, Product Introduction. https://www.deyuanmarine.com/3-Strand-PP-Rope-pd129282238.html | 聚丙烯长丝纱制三股绳的产品存在及结构；不采用宣传认证、性能和容差数值 |
| meera-pp-twisting | literature | Meera Industries, Twisted PP Yarn, Webbing & Rope Manufacturing, 4 December 2025, opening ecosystem and sections 2, 6. https://meeraind.com/resources/pp-yarn-webbing-rope-manufacturing-meera-twisting-solutions | 备纱、捻合、卷绕的定性分解；设备商说明不证明所有绳厂必需的工艺或耗用 |
| samson-coated-counterevidence | literature | Samson, LightSpeed-3, product description and dielectric selection instructions. https://www.samsonrope.com/utility/lightspeed-3 | 有新增涂层的绝缘聚丙烯绳作为未覆盖路线反证；不推广其寿命、密度和强度 |
| si-units | official_guidance | BIPM, SI Brochure, 9th edition V4.01 (June 2026), section 2.3.4/Table 4 (p. 133, PDF p. 23), section 4/Table 8 (p. 140, PDF p. 30), W = J/s and h = 3600 s. https://www.bipm.org/en/publications/si-brochure | kWh 到 MJ 的精确单位换算，非耗能因子 |

网页原件检索日期：2026-10-06。上述制造商原件仅支持定性路线和产品限定；本方法的实测、归一化与分配规则由前景采集协议落实，不设定默认物料配方、温度、能耗、净产量或寿命。
