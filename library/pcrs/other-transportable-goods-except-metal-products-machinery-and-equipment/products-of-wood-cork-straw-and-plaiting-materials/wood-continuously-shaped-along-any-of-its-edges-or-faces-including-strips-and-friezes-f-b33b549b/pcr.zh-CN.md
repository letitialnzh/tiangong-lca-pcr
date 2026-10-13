---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-continuously-shaped-along-any-of-its-edges-or-faces-including-strips-and-friezes-f-b33b549b
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 非胶合连续成型竹条

## 1. 范围与适用性

本方法覆盖来自单根竹秆的独立、未组装竹条，其纵向边/面具有刻意加工的连续榫、槽、企口、圆线或其他声明截形。仅平面矩形刨光、粗劈、竹秆或无连续截形成品板不适用。选用前核对截面图、照片、物料组成、生产记录和销售说明。“实体竹地板”等市场名称不能证明无胶合构造。来源：`un-cpc3-2025`、`inbar-industrial-bamboo-2015`、`yu-bamboo-flooring-2019`。

前景从接收干燥非胶合竹条坯料开始，纳入机械连续成型/修边、砂光及集尘，条件性纳入已核实的无溶剂紫外线聚氨酯涂饰、检验和包装。本文不规定厂内湿处理、热改性、干燥或燃烧路线。交付坯料须携带适配的采伐、竹条制备、处理及干燥上游证据；单纯门到门清单不能称为摇篮到大门。

排除所有胶合或工程竹坯，包括平行竹条层积、交叉层竹胶合板、贴面板、竹束重组/压密品、已组装拼花地板、安装和结构构件。INBAR区分竹条层积、纤维压密及展平；Yu等描述UF胶合层积地板和酚醛重组地板，板材制造与开槽/涂饰为不同阶段。这些来源不能裁定某一胶合型材的分类。不得套用其施胶率、得率、密度、热量、寿命、燃烧假设或负碳结论。胶黏剂使用或工程竹进料触发独立适用性裁定，不能当作本非胶合路线的可选行。表面涂饰不授权层积胶合。来源：`un-cpc3-2025`、`inbar-industrial-bamboo-2015`、`yu-bamboo-flooring-2019`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-continuously-shaped-along-any-of-its-edges-or-faces-including-strips-and-friezes-f-b33b549b |
| classification_refs | CPC 3.0 31212; narrower; 范围及已接受决定见 `classifications/mappings/cpc-3.0-to-pcr.yaml` 和其引用的 ADR |
| covered_products | 来自单根竹秆、非胶合、未组装的连续成型竹条；有据涂饰或未涂饰状态 |
| excluded_products | 胶合/工程竹、竹胶合板、已组装地板、仅刨光坯材、未加工竹秆及未审查的其他涂饰路线 |
| representative_product | 一根具有声明连续截形的非胶合竹线条 |
| production_route | 接收干竹条→连续成型/砂光/集尘→条件性紫外线聚氨酯涂饰→检验/包装 |
| market_state | 未组装成品竹条，工厂大门状态；不声称使用寿命等效 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应供后续使用的非胶合连续成型竹条 |
| How much | 1千克声明含水及涂饰状态的合格成品净质量 |
| How well | 已核实的连续截形、尺寸/公差、竹种、等级及无胶黏剂/组装构造 |
| How long or cycle | 一个工厂大门生产批组；不假定安装或使用时长 |
| reference_flow_link | `profile_reference` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 竹材，沿其任何边缘或表面连续成型的木材（包括镶木地板的条和楣，未组装，以及珠子和模子）。 `0fe2e549-0389-46bd-b0e0-a5cd53585138` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 竹种；单根竹秆非胶合构造；连续截形图；尺寸/公差；等级；含水率及干湿基准；涂饰化学组成/状态；非组装地板；坯料上游处理/干燥；工厂/时期；电压/电网组合；净参考质量排除包装 |

这是声明的生产数量，不是地板或已安装构件的经核验功能等效单位。限定信息须写入数据集元数据或等效说明；缺失使适用性不完整。通用产品UUID保留其原标签，本文将其限定为有据非胶合竹条。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `profile_reference` | 质量 | kg | 称量合格成品竹条净质量，包含保留涂层及实测水分，排除全部运输包装；采用cp_reference。所有清单行使用相同末端产品千克分母。 |
| `moisture_basis` | 竹材行 | 质量 | kg | 成对测量未涂饰竹材试样湿质量及烘干质量；干基含水率u =（湿质量 - 干质量）/ 干质量，无量纲。记录取样和恒重干燥方法。涂饰试样须区分涂层固体；不得把化石涂层碳计为竹碳。Wood Handbook公式仅作为计量定义，不是竹材属性默认值。 |
| `solid_volume` | 竹材行 | 质量/实体体积 | kg | 质量 = 实测材料实体体积 × 同含水/涂饰状态成对实测密度。测量真实截形，排除凹槽/空隙；外包络、堆积体积和名义木材密度不能替代。适用时可保留精确体积参考流并采用本经核验换算。 |
| `electric_energy` | shaping_electricity; coating_electricity; pack_electricity | 能量 | MJ | 记录计量千瓦时，采用1千瓦时 = 3.6兆焦换算；保留原读数及供电条件。不得叠加总表与其分表量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 连续成型场址接收的干燥非胶合单根竹秆竹条坯料 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0 31212的子集；实际截形/构造优先于销售标签 |
| recursive_input_rule | 同类别已成型进料单独定量为外购或内部转移，声明状态及来源；不递归重建此前成型生产，也不重复计入回用废料 |
| upstream_dataset_requirement | 适配的竹采伐/运输/竹条制备/处理/干燥、电力、磨料、涂料、包装及外部废物处理；保留供应方边界和分配 |
| disclosure | 声明上游缺失范围；不含厂内干燥/锅炉/施胶或安装/使用/末期。不得把未纳入的供热当作上游零排放 |

### 边界规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_identity` | 应用指导前须有单根竹秆、非胶合连续成型及未组装市场形态的实物证据；拒绝层积/重组进料和已组装地板。 | `un-cpc3-2025`; `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019` |
| `boundary_complete` | 纳入搬运、成型、砂光、集尘、可选适配紫外线聚氨酯涂饰和包装及实际损耗。来源清单不替代现场数据。上游热处理及任何残余燃烧须保留完整独立供应方清单，含生物源CO2；温室气体核算惯例不得删去LCI流。 | `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019` |

## 6. 过程清单结构

连续成型、条件性涂饰及包装组成一个一体前景单元，只设一个末端产品输出。保留分阶段电表及质量账，相同含水/涂饰状态的实物交接量须相等；这些交接是内部观察，不是额外产品输出。保留未分配实物过程图及独立的归属环境负荷账。实物批组总量仅以相同末端合格产品净千克数归一化一次；分配份额不能改变内部转移或共产品实物产出。归属前须用原始记录闭合竹干物质、水、涂层固体、能量及生物/化石碳平衡。同一材料不能同时销售、弃置和计为内部燃料。本文不提供工厂具体数量或通用范围。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| profile_production | 连续成型、条件性涂饰及包装一体单元 | required | 接收干燥非胶合竹条；涂饰仅在单独证明时纳入 | foreground | profile_reference |

### 过程：连续成型、涂饰及包装一体前景单元 (`profile_production`)

#### 输入

##### 产品流

###### 干燥非胶合单根竹秆竹条坯料 (`bamboo_blank`)

接收来自单根竹秆的干燥、未浸渍竹条，无胶黏剂和层积层。核对上游干燥/处理历史及试样含水率；不纳入青竹秆加工。

- 选定流: 干燥非胶合单根竹秆竹条坯料
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019`

###### 交流电 (`shaping_electricity`)

分别计量连续成型、修边、砂光及集尘；本UUID仅用于用户侧低于1千伏的电网平均交流电。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 / 兆焦
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `yu-bamboo-flooring-2019`

###### 砂纸 (`abrasive_paper`)

仅在使用纸基砂光耗材时记录，保留砂带基材、粒度和更换记录；布基砂带须用独立流。

- 选定流: 砂纸 `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_material`
- 来源: `yu-bamboo-flooring-2019`

###### 竹材用无溶剂紫外线固化聚氨酯涂料 (`polyurethane_coating`)

仅为经证明适配单根竹条的无溶剂紫外线聚氨酯涂饰；称量供应配方，记录固体份/组成，独立供应的固化剂或清洗剂须另建精确原子行。

- 选定流: 竹材用无溶剂紫外线固化聚氨酯涂料
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_coating`
- 来源: `yu-bamboo-flooring-2019`

###### 交流电 (`coating_electricity`)

仅为涂布、紫外线固化和抽风用电，适用相同的用户侧低于1千伏电网条件，不与成型计量总量重叠。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 / 兆焦
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `yu-bamboo-flooring-2019`

###### 聚乙烯薄膜 (`pe_film`)

仅在使用聚乙烯包装薄膜时记录，称量净消耗，保留聚合物和收缩工序记录；本行不含泡沫及其他聚合物。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pack`
- 来源: `yu-bamboo-flooring-2019`

###### 瓦楞纸板包装箱 (`carton`)

仅在使用成品瓦楞纸板箱时记录，保留纤维组成及空箱净质量，排除薄膜和缓冲物。

- 选定流: 瓦楞纸板包装箱
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pack`
- 来源: `yu-bamboo-flooring-2019`

###### 交流电 (`pack_electricity`)

仅为同一低于1千伏电网条件下的检验及适用的电热收缩包装；燃料式收缩或干燥须独立论证路线。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 / 兆焦
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `yu-bamboo-flooring-2019`

#### 输出

##### 产品流

###### 非胶合竹刨花共产品 (`bamboo_shavings`)

仅记录作为有据共产品销售的洁净、单独称量刨花，保留绝干质量、买方和价值；送处置的材料应另记废物。

- 选定流: 非胶合竹刨花共产品
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residue`
- 来源: `inbar-industrial-bamboo-2015`

###### 竹材，沿其任何边缘或表面连续成型的木材（包括镶木地板的条和楣，未组装，以及珠子和模子）。 (`profile_reference`)

末端合格连续成型非胶合竹条，未组装销售，具有声明的含水和涂饰状态，参考质量排除包装。

- 选定流: 竹材，沿其任何边缘或表面连续成型的木材（包括镶木地板的条和楣，未组装，以及珠子和模子）。 `0fe2e549-0389-46bd-b0e0-a5cd53585138`
- 流属性/单位: 质量 / 千克
- 数量规则: 1 千克
- 数值来源模式: 固定值（`fixed_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_reference`
- 来源: `un-cpc3-2025`; `yu-bamboo-flooring-2019`

##### 废物流

###### 未处理非胶合竹边角料废物 (`bamboo_offcuts`)

仅为单独称量并送外部处理的非胶合未处理边角料，不含胶合/浸渍废料。

- 选定流: 未处理非胶合竹边角料废物
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residue`
- 来源: `yu-bamboo-flooring-2019`

###### 收集的非胶合竹砂光粉尘废物 (`collected_dust`)

仅为送外部处理的收集竹砂光粉尘，不得当作空气排放或重复计作刨花。

- 选定流: 收集的非胶合竹砂光粉尘废物
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residue`
- 来源: `yu-bamboo-flooring-2019`

###### 竹砂光废砂纸 (`spent_abrasive`)

仅为废弃纸基磨料；平衡中区分附着竹粉质量，不得重复计入收集粉尘。

- 选定流: 竹砂光废砂纸
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residue`
- 来源: `yu-bamboo-flooring-2019`

###### 未固化紫外线聚氨酯涂料废物 (`coating_waste`)

仅为送处理的未使用、未固化紫外线聚氨酯涂料；若有已固化固体废料须另记，不与本交换合并。

- 选定流: 未固化紫外线聚氨酯涂料废物
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_residue`
- 来源: `yu-bamboo-flooring-2019`

##### 基本流

###### 颗粒物 (PM2.5) (`shaping_pm25`)

仅记录治理后实际排入室外空气的这一互不重叠粒径段，采用cp_air实测；累计PM10/总悬浮颗粒物须先进行有据差分，本文不规定木材行业因子。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `yu-bamboo-flooring-2019`

###### 颗粒物 (PM2.5 - PM10) (`shaping_pm25_10`)

仅记录治理后实际排入室外空气的这一互不重叠粒径段，采用cp_air实测；累计PM10/总悬浮颗粒物须先进行有据差分，本文不规定木材行业因子。

- 选定流: 颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `yu-bamboo-flooring-2019`

###### 颗粒物（> PM10） (`shaping_pm_gt10`)

仅记录治理后实际排入室外空气的这一互不重叠粒径段，采用cp_air实测；累计PM10/总悬浮颗粒物须先进行有据差分，本文不规定木材行业因子。

- 选定流: 颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `yu-bamboo-flooring-2019`

###### 甲醛 (`coating_formaldehyde`)

仅为前景涂布/固化中经化学确认并排入室外空气的甲醛，实测出口浓度、气量和时长；不假定含甲醛胶黏剂，产品舱室限值不是工厂排放因子。

- 选定流: 甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位: 质量 / 千克
- 数量规则: 将所选生产批组该交换的未分配实物总量除以相同末端合格产品净千克数；保留原总量、去向和成对交接记录。归属份额不得改变这一实物量；不适用时须证明不存在。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `yu-bamboo-flooring-2019`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocation_avoid` | 先区分可实测直接归属的电力/材料及产品批组；仅在与共同计量核对后采用产线/分表或有据因果运行时长划分。不得借用针叶锯材分配份额。 | `yu-bamboo-flooring-2019` |
| `allocation_coproduct` | 记录刨花是可售共产品还是废物，并保留去向、绝干质量及价值。共同负荷不能因果区分时，声称完整产品LCI前须完成有据分配裁定及敏感性分析；不规定自动质量或经济份额。刨花实物及内部交接保持原量。 | `inbar-industrial-bamboo-2015` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | profile_production | profile_reference | scale | 批组；竹种；构造；连续截形；末端合格净质量；含水；涂层固体；包装皮重；不合格品 | 经校准秤称量合格成品竹条并排除包装；试样含水与恒重干称成对，保留证明无胶合/组装的截形图/物料单 | kg | 每批；运行期电表及代表性测试 | 同一声明生产期，覆盖全部班次、状态及不合格品 | 所选场址和对应产品批组；上游供应商单独追溯 | 每 1 kg 参考流 | 校准；原记录；图/规格；去向闭合；不确定性及检出限 |
| cp_material | profile_production | material exchanges | weighing | 批次；行；工序；来向/去向；毛/皮/净质量；处理；含水；实体体积；成对密度；不合格品；共同交接编号 | 使用校准秤称量批次流；检验基材及实物截形；密度采用成对试样/真实实体截面；不经分配核对交接两端 | kg | 每批；运行期电表及代表性测试 | 同一声明生产期，覆盖全部班次、状态及不合格品 | 所选场址和对应产品批组；上游供应商单独追溯 | 每 1 kg 参考流 | 校准；原记录；图/规格；去向闭合；不确定性及检出限 |
| cp_energy | profile_production | electricity | meter | 表号；工序；起止千瓦时；电压；供电组合；待机；集尘/紫外线/收缩时长；总/分表范围 | 读取经校验工序/公用工程电表，含集尘及固化；核对总/分表量和批组路线 | MJ | 每批；运行期电表及代表性测试 | 同一声明生产期，覆盖全部班次、状态及不合格品 | 所选场址和对应产品批组；上游供应商单独追溯 | 每 1 kg 参考流 | 校准；原记录；图/规格；去向闭合；不确定性及检出限 |
| cp_coating | profile_production | polyurethane_coating | weighing | 涂料编号；安全数据表；化学组成；无溶剂紫外线证明；固体份；毛/皮重；领用/退回/保留/废物质量；固化；物种筛查 | 称量实际配方及退回物；用供应商规格及试制/验收确认适配单根竹条；实测保留干涂层，不假定购入量全部附着 | kg | 每批；运行期电表及代表性测试 | 同一声明生产期，覆盖全部班次、状态及不合格品 | 所选场址和对应产品批组；上游供应商单独追溯 | 每 1 kg 参考流 | 校准；原记录；图/规格；去向闭合；不确定性及检出限 |
| cp_residue | profile_production | residues | weighing | 行；工序；毛/皮/净重；竹干物质；涂层固体；含水；售价；接收方；废物状态；附着粉尘；去向 | 区分边角料、刨花、收集砂粉、废砂纸及未固化涂料；称量并核对转移联单/发票和粉尘路线重叠 | kg | 每批；运行期电表及代表性测试 | 同一声明生产期，覆盖全部班次、状态及不合格品 | 所选场址和对应产品批组；上游供应商单独追溯 | 每 1 kg 参考流 | 校准；原记录；图/规格；去向闭合；不确定性及检出限 |
| cp_air | profile_production | air emissions | measurement | 物种；介质；出口；气量；浓度；检出限；空白；时长；治理状态；无组织范围；累计总悬浮颗粒物/PM10/PM2.5；方法；水分 | 实际运行条件下进行代表性校准出口取样并评估无组织排放；保留化学特定甲醛及粒径段；产品舱室限值和影响评分不得替代排放质量 | kg | 每批；运行期电表及代表性测试 | 同一声明生产期，覆盖全部班次、状态及不合格品 | 所选场址和对应产品批组；上游供应商单独追溯 | 每 1 kg 参考流 | 校准；原记录；图/规格；去向闭合；不确定性及检出限 |
| cp_pack | profile_production | pe_film; carton | weighing | 材料编号；聚合物；纤维组成；单位质量；领用/退回；实际废品；随货包装质量；发货 | 分别称量空箱和薄膜净质量，核对库存/发货；包装不计入参考产品质量 | kg | 每批；运行期电表及代表性测试 | 同一声明生产期，覆盖全部班次、状态及不合格品 | 所选场址和对应产品批组；上游供应商单独追溯 | 每 1 kg 参考流 | 校准；原记录；图/规格；去向闭合；不确定性及检出限 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `physical_normalization` | 所有清单行 | 各未分配批组交换总量除以相同末端合格产品净千克。匹配交接总量相等；profile_reference = 1千克。保留原总量。 | cp_reference; cp_material; cp_energy; cp_coating; cp_residue; cp_air; cp_pack | 每 1 kg 参考流实物量 | `yu-bamboo-flooring-2019` |
| `bamboo_dry_mass` | 竹材行 | 竹绝干质量 = 未涂饰竹湿质量 /（1 + 实测干基含水率）；涂饰材料先排除实测涂层固体并独立确定水量。不得假定全部成品质量为生物源干物质。 | cp_material; cp_reference; cp_coating | 竹干物质及水账 | `usda-wood-handbook-2021` |
| `air_mass` | shaping_pm25; shaping_pm25_10; shaping_pm_gt10; coating_formaldehyde | 经空白/水分/单位校正后，浓度 × 对应运行期气体体积得到物种质量。可比累计测量中：中间段 = PM10 - PM2.5；粗粒段 = 总悬浮颗粒物 - PM10。须有非负相容总量及传播不确定性；不相容或不完整取样为未决，不得作零。不得再叠加累计PM10或总悬浮颗粒物。 | cp_air; cp_reference | 每 1 kg 参考流互不重叠物种排放 | `yu-bamboo-flooring-2019` |
| `balance_and_attribution` | 所有清单行 | 按竹干物质、水及涂层固体核对原始过程输入、保留产品、独立残余、空气排放及库存变化；按测量不确定性调查余差。先匹配内部边，再按实测因果归属或明确审查的分配裁定建立独立负荷账；实物产品/共产品/转移不乘负荷份额。依据实测组成分列竹生物源碳与涂层化石碳；不得仅凭质量声称储碳信用。 | cp_material; cp_reference; cp_coating; cp_residue; cp_air; cp_energy | 闭合实物账及独立归属LCI | `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019` |
| complete_period_normalization | 所有清单行 | 每项既有工期、批次或批量数量规则及关联采集协议均采用同声明产品、等级、路线、配置、场址和参考状态的单一有记录完整统计期汇总组。验收批次措辞仅限定分母；原生单位原始分子记录保留全部可归属启动、停机、整批失败或零产出批次、废品、在制品和返工。返工参考产品仅在最终验收时计一次。各可归属交换在匹配汇总组内求和，仅除一次同组严格正值、采用声明分母单位的验收参考产品数量，再按声明参考数量缩放。不得平均批次比率、丢弃失败批次、混合无关产品/时期或改变分子原生单位。整个匹配汇总组无验收产出时保留未归一化绝对清单并要求审查，不生成归一化结果或虚构产量。库存/退回及实物交接账与负荷分配独立保留；分配不得删去已经发生的失败/返工活动。 | 全部关联原始采集协议；验收参考产品汇总组；库存及返工链接 | 各原生交换单位每声明参考数量；零产出汇总组保持未归一化 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_identity` | 所有清单行 | 匹配物理角色/状态、Tiangong类型、完整路线限定、参考属性/单位及排放介质；身份缺失不授权近似UUID。 | 流原件和产品规格 |
| `quality_complete` | 全部过程 | 筛查现场物料单、许可、清洗、润滑、保留水分、涂饰排放物种及废物。额外发现交换须建立具体独立行、计量和身份审查后才能完整使用数据集。区分零、不存在、检出限以下和未知；量化上游覆盖缺失。 | cp_material；cp_coating；cp_residue；cp_air；供应方证据 |
| `quality_variability` | 全部协议 | 覆盖实际班次和代表性批次、含水/涂饰及治理状态；报告时期、地域、样本量、电表核对、不确定性及局限。不规定文献行业范围或默认竹密度。 | 原记录及校准 |

## 9. 验证规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_scope` | 存在胶黏剂/层积/竹束压密基材、已组装地板、缺失连续截形或单根竹秆状态未经证明时，适用性失败。以实际购销证据核对批组路线；状态标签不能确立产品边界。 | `un-cpc3-2025`; `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019` |
| `validate_inventory` | 要求每行一个原子交换、内部链接相等、唯一末端分母、有据条件性不存在及无粉尘/残余重复计算。实物量与归属负荷分开。身份未决、上游清单缺失、平衡未闭合或分配无依据，均使数据集不完整。 | `yu-bamboo-flooring-2019` |
| `validate_air_carbon` | 空气UUID采用排入室外空气、未指定子介质和千克质量；细化现场介质须匹配直接身份。拒绝累计粒径重叠和产品测试限值替代。不删除上游生物源CO2或授予通用负碳信用；按实际材料组成区分生物/化石碳。 | `inbar-industrial-bamboo-2015`; `yu-bamboo-flooring-2019` |

## 10. 发布数据集说明

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 有据本非胶合型材的工厂大门供应；仅在核实后连接适配上游链 |
| excluded_use | 通用竹板/层积/重组/地板LCI、安装使用服务比较、自动CPC全覆盖及未经核验储碳/末期收益 |
| required_metadata | 全部参考限定；过程图；原批组基准；上游边界；选定流/属性/单位；条件路线；共产品/废物状态；负荷归属裁定 |
| required_quality_disclosure | 实测/不存在/未知的区分；身份缺口；缺失范围；不确定划分/空气平衡；取样/时期/地域；无行业配方默认值 |
| update_trigger | 竹构造/截形、处理、涂料化学组成、计量、治理、供应边界、去向、分配或流身份变化 |

## 11. 数据来源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | UNSD，《CPC 3.0解释说明》，2025年6月30日，印刷页137、141、143；31212、31450、31626。[原件](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | 连续成型/未组装分类边界；标签不能证明工程路线适用性 |
| `inbar-industrial-bamboo-2015` | official_guidance | Vogtländer和van der Lugt，INBAR技术报告35，第二版，2015年，第4、15–20页。[TU Delft保存原件](https://repository.tudelft.nl/file/File_877d4812-8c8d-446e-a048-5c14cb9994b9) | 区分竹条层积、压密和展平，分清碳边界。MOSO特定案例：不采纳配方/密度/得率/碳信用默认值 |
| `yu-bamboo-flooring-2019` | literature | Yu、Zeng、Zhang及Wang（2019），竹层积地板与竹重组地板环境影响的生命周期评价，BioResources 14(4)，9132–9145；图1及9135–9138页。[出版方全文](https://bioresources.cnr.ncsu.edu/resources/environmental-impact-of-bamboo-laminated-flooring-and-bamboo-scrimber-flooring-investigated-via-life-cycle-assessment/) | 定性区分刨光/制板/开槽/涂饰/包装；聚氨酯、砂纸、聚乙烯膜和箱体仅提示需现场证明。浙江/四川三厂、2005–2009年。工程路线数据、借用木材燃烧排放、甲醛限值估算及总悬浮颗粒物遗漏均不采作实体竹条实际清单 |
| `usda-wood-handbook-2021` | handbook | USDA林产品实验室，《Wood Handbook》，FPL-GTR-282（2021），第4章4–1及4–11页。[原件](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | 仅采用干基含水及质量/实体体积定义并作用于实测竹试样；不转移木材树种密度、干燥制度或针叶调查值 |
