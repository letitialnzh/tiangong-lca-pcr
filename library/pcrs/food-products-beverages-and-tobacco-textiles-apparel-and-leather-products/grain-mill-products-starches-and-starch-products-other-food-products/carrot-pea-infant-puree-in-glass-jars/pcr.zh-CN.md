---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.carrot-pea-infant-puree-in-glass-jars
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 玻璃罐装胡萝卜豌豆婴幼儿泥状辅食

## 1. 范围与适用性

本 PCR 覆盖一个具体代表复合食品：以米粉、食品级菜籽油及水调配、装入密封玻璃罐的细腻胡萝卜豌豆婴幼儿泥状辅食。选定制造路线从鲜胡萝卜及脱荚绿豌豆开始，蒸煮并机械均质配料，灌装封口后采用罐内淋水式热处理，随后冷却及放行。仅适用于工厂文件确认的低酸配方及该路线。HiPP GB4082 证明真实产品类别及配料组合；Steriflow 单独证明可行的玻璃罐杀菌釜路线。两者不构成通用配方，也不证明 HiPP 的实际工厂路线。（`hipp-carrot-pea`、`steriflow-baby-retort`、`codex-canning`）

CPC 23991 的范围更宽。肉、水果、坚果、乳制备品，干婴幼儿谷物食品，其他淀粉或麦芽制备品，其他复合配方，冷冻或冷藏泥状食品、软袋、无菌灌装及酸化路线仍未覆盖。现有水果/坚果泥 PCR 不覆盖此蔬菜谷物复合食品。本规则用于制造数据，不构成喂养建议、营养等效声明或食品安全批准。

CXS 73-1981（修订至2023）第1节区分断奶期辅食与 CXS 72 婴儿配方、CXS 74 加工谷类食品；第3.2节将即食辅食描述为均匀或粉碎形态。此稿取细腻泥状即食蔬菜复合辅食，不覆盖乳配方或干谷物产品。工厂仍须确定实际标准适用性，不因含米粉便声称该食品符合加工谷类标准。仅取得官方代理页的英文文本提取，未取得该 PDF 字节及视觉核验；不采用其中定量配方、工艺或安全合规默认值。（`codex-baby-food-2023`）

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.carrot-pea-infant-puree-in-glass-jars |
| classification_refs | CPC 3.0: 23991; narrower |
| covered_products | 声明的米粉、菜籽油、水配方胡萝卜豌豆罐装辅食；仅选定低酸罐内热处理路线 |
| excluded_products | 第1节列明的其他配方、产品及路线 |
| representative_product | 密封玻璃罐装细腻胡萝卜豌豆婴幼儿泥状辅食 |
| production_route | 鲜蔬菜预处理；间接蒸汽蒸煮；调配和机械均质；灌装密封；淋水式罐内热处理；冷却放行 |
| market_state | 出厂时未开封、常温储存的罐装产品；声明实际标签储存条件及保质期 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂门口制造声明的细腻复合婴幼儿泥状辅食 |
| How much | 1 kg 合格食品净质量，排除全部包装质量 |
| How well | 声明配方、含水率、质地测试、净灌装量、完整封口、工厂放行及市场规格；不假定不同配方营养服务等效 |
| How long or cycle | 一个制造批次至工厂放行；记录实际保质期，PCR 不设默认值；消费排除 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 密封玻璃罐装胡萝卜豌豆婴幼儿泥状辅食 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 配方及配料状态；低酸分类证据及 pH/水分活度方法；含水率及质地方法；间接加热及均质设备类型；杀菌釜技术及获授权热处理规程编号；罐及盖规格；净灌装量；工厂放行准则；实际保质期及储存条件；场址及地理位置；报告期；电力供应地域、电压、用户端消费或发电侧供应边界及供应商数据；清洗配方；起始条件及未纳入阶段 |

必需限定信息应写入数据集元数据、过程说明、参考流备注或等效字段；缺失时适用性不完整。空成品 UUID 表示身份待解决，不允许替用一般预制饭菜流。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用放行后合格食品净质量，排除罐、盖、标签及纸箱。在 cp_packing_retort 下用经校准的总质量减皮重称量法实测净灌装量。 |
| wet_mass | 所有质量清单行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留湿质量及实际配料/试剂浓度；体积质量换算需要声明温度下实测密度。不得隐含将湿食品换算为干物质。 |
| energy_basis | site_electricity; cook_heat; retort_heat; clean_heat | 各行核实的能量属性 | MJ | 记录电量以 3.6 MJ/kWh 换算为 MJ；蒸汽热用实测焓差及蒸汽质量计量。保留公开净/总热值属性及能量单位组；该属性不表示食品热量服务。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收收获后的鲜胡萝卜及脱荚鲜豌豆；接收米粉、油、供应自来水、送达蒸汽热及成品包装 |
| starting_condition_role | foreground_start |
| product_classification_scope | 仅具体胡萝卜豌豆婴幼儿复合食品；不覆盖23991全范围 |
| recursive_input_rule | 购入同类别泥状食品属于上游输入，不能证明鲜蔬菜路线适用。扩展范围前记录供应商状态、上游数据集并声明不同起始条件。内部返工是循环，不是另一项购入输入。 |
| upstream_dataset_requirement | 扩展生命周期模型需链接种植、磨粉、食用油加工、公用工程供应、包装制造、进厂运输及场外废物处理；披露缺失链接 |
| disclosure | 仅前景厂内边界；披露供应输入状态、低酸路线证据、公用工程、清洗、厂内储存、废物去向、截断及缺口 |

| rule_id | 规则 | 来源 |
| --- | --- | --- |
| boundary_manufacturing | 纳入四个过程组及可归属启动、换线、清洗、不合格品与放行前储存。区分预处理、热负荷、混合/均质、封口、杀菌釜循环及冷却记录。（`steriflow-baby-retort`） | steriflow-baby-retort |
| boundary_utilities | 选定路线接收蒸汽热及供应水；锅炉产汽、水资源取用及场外处理为上游/下游链接。场址自有前景锅炉、取水或处理时，需增加单独过程及实测原子交换后才能声称扩大范围。不得为购入热量编造燃烧排放。 | codex-canning |
| boundary_downstream | 排除出厂运输、零售、家庭加热、喂养及包装生命周期终点。不得将此前景数据集称为完整从摇篮到工厂门口。 | hipp-carrot-pea |

## 6. 过程清单结构

所有行采用同一个分母：放行后 1 kg 合格净参考食品。中间量表示实现该最终输出所需物料，不是每种中间品均为一千克。按批次匹配内部转移，并在汇总边界抵消。每个必需过程都要检查，即使某个条件交换不存在。每种实际使用化学品、制冷剂、包装组件、独立残余物及实测排放均另列原子行；分别记录证实不存在和未计量的流。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| preparation | 蔬菜接收与预处理 | required | 选定路线 | 前景制造 | 每 1 kg 参考流 |
| pureeing | 蒸煮、调配与均质 | required | 选定路线 | 前景制造 | 每 1 kg 参考流 |
| packing_retort | 灌装、密封、罐内热处理、冷却与装箱 | required | 选定路线 | 前景制造 | 每 1 kg 参考流 |
| cleaning_power | 场址用电与生产线清洗 | required | 选定路线 | 前景制造 | 每 1 kg 参考流 |

### 过程：蔬菜接收与预处理（`preparation`）

#### 输入

##### 产品流

###### 胡萝卜（`carrot_in`）

接收鲜胡萝卜；分选、清洗、修整及切分前称重。种植及进厂运输属于上游。

- 选定流：胡萝卜 `050a9dc0-7d9a-49da-9ad3-1892d880cdc7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_preparation 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 绿豌豆（`pea_in`）

接收已脱荚的鲜绿豌豆；记录可食种子质量，不使用豆荚或田间立株质量。冷冻或干豌豆需要另一条路线。

- 选定流：绿豌豆 `b0d5d264-fa1a-4230-8bf8-423b8125d8a7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_preparation 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 自来水（`wash_water`）

记录清洗所用新供自来水，与配料水分开。水质适用性由工厂文件说明。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_preparation 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation`
- 来源：`foreground-records`; `steriflow-baby-retort`

#### 输出

##### 产品流

###### 清洗修整后的胡萝卜块（`prepared_carrot`）

称量送至蒸煮的预处理胡萝卜流；记录含水率和损失，不假定得率。

- 选定流：清洗修整后的胡萝卜块
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_preparation 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 清洗后的脱荚绿豌豆（`prepared_pea`）

称量送至蒸煮的豌豆流。

- 选定流：清洗后的脱荚绿豌豆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_preparation 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation`
- 来源：`foreground-records`; `steriflow-baby-retort`

##### 废物流

###### 废弃胡萝卜皮（`carrot_trim`）

发生去皮时，记录送场外处理的湿胡萝卜皮；分选剔除物另列交换。

- 选定流：废弃胡萝卜皮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_preparation 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 送处理的胡萝卜与豌豆清洗废水（`wash_effluent`）

记录单一收集的清洗废水流及处理去向、固形物和化学需氧量；它不是排入环境的水基本流。

- 选定流：送处理的胡萝卜与豌豆清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_preparation 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation`
- 来源：`foreground-records`; `steriflow-baby-retort`

### 过程：蒸煮、调配与均质（`pureeing`）

#### 输入

##### 产品流

###### 清洗修整后的胡萝卜块（`carrot_transfer`）

按批次、状态及质量匹配预处理输出；内部转移不再次计入上游负荷。

- 选定流：清洗修整后的胡萝卜块
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_pureeing 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pureeing`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 清洗后的脱荚绿豌豆（`pea_transfer`）

匹配预处理输出；排除豆荚。

- 选定流：清洗后的脱荚绿豌豆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_pureeing 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pureeing`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 婴幼儿泥状辅食配料用米粉（`rice_flour`）

使用实际食品级米粉批次及规格；不根据数据库名称推定符合婴幼儿谷物标准。

- 选定流：婴幼儿泥状辅食配料用米粉
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_pureeing 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pureeing`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 食品级菜籽油（`rapeseed_oil`）

记录实际菜籽油等级及精炼状态；本行不包括芥子油或合成用途调质油。

- 选定流：食品级菜籽油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_pureeing 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pureeing`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 自来水（`recipe_water`）

称量配方加入水，排除清洗水及间接供热蒸汽。直接凝结加入产品的水作为配料水仅计一次。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_pureeing 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pureeing`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 蒸汽工艺热（`cook_heat`）

选定间接蒸汽加热路线中，用蒸汽计量和实测供回焓记录送达的热能。保留身份的能量属性，不替换为质量。

- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_pureeing 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pureeing`
- 来源：`foreground-records`; `steriflow-baby-retort`

#### 输出

##### 产品流

###### 灌装前胡萝卜豌豆婴幼儿泥状辅食（`bulk_puree`）

记录蒸煮、调配及机械均质输出；筛分或脱气仅在实际实施时记录。本规则不规定压力、时间或温度。

- 选定流：灌装前胡萝卜豌豆婴幼儿泥状辅食
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_pureeing 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pureeing`
- 来源：`foreground-records`; `steriflow-baby-retort`

##### 废物流

###### 废弃胡萝卜豌豆婴幼儿泥状辅食（`puree_loss`）

称量不可回收配方损失，与可回用内部返工及包装损失分开。

- 选定流：废弃胡萝卜豌豆婴幼儿泥状辅食
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_pureeing 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pureeing`
- 来源：`foreground-records`; `steriflow-baby-retort`

##### 基本流

###### 水蒸气（`vapour`）

仅纳入已观察到的即时蒸发排放，介质为空气、子介质未特指；采用实测尾气湿度与气流量，或独立闭合的水平衡。不得把所有未解释质量损失归为蒸发。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_pureeing 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pureeing`
- 来源：`foreground-records`; `steriflow-baby-retort`

### 过程：灌装、密封、罐内热处理、冷却与装箱（`packing_retort`）

#### 输入

##### 产品流

###### 灌装前胡萝卜豌豆婴幼儿泥状辅食（`puree_transfer`）

匹配制泥散装输出；记录转移食品净量，不包括容器。

- 选定流：灌装前胡萝卜豌豆婴幼儿泥状辅食
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_packing_retort 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 玻璃瓶罐（`glass_jar`）

实测实际灌装规格空玻璃罐质量及数量，包括可归属破损量。另行记录食品接触适用性。

- 选定流：玻璃瓶罐 `eca48ea8-ab83-444f-98b2-15ab82570c80`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_packing_retort 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 涂漆钢制真空旋开式罐盖（`steel_lid`）

记录购入的完整钢罐盖，包括内衬和涂层；食品输出排除其质量。供应商组件数据用于上游建模。

- 选定流：涂漆钢制真空旋开式罐盖
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_packing_retort 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 纸质标签（`paper_label`）

按实测质量记录购入成品纸标签；购入标签未包含胶黏剂时另列胶黏剂。

- 选定流：纸质标签 `7b25a54f-baa6-4593-9670-4240a3315eed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_packing_retort 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 瓦楞纸板（`shipping_board`）

仅在实际瓦楞纸板为 C、E 或 F 型、纤维含量至少 80% 且含再生材料时采用此身份；称量纸箱并记录包装规格。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_packing_retort 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 蒸汽工艺热（`retort_heat`）

记录供给淋水式杀菌釜及冷却操作的蒸汽热，不重复计算循环水或热。

- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_packing_retort 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 自来水（`retort_water`）

记录冷却回路及杀菌釜新水补充；区分总循环量与净投入。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_packing_retort 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

#### 输出

##### 产品流

###### 密封玻璃罐装胡萝卜豌豆婴幼儿泥状辅食（`reference_product`）

仅以工厂放行记录支持的声明配方、细腻质地、完整封口及市场状态放行。输出按食品净质量计；包装仍为单独输入。

- 选定流：密封玻璃罐装胡萝卜豌豆婴幼儿泥状辅食
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

##### 废物流

###### 不合格罐中的废弃胡萝卜豌豆婴幼儿泥状辅食（`packing_reject`）

称量从不合格罐中分离的食品；玻璃及钢废物另列，不把未打开整罐总质量当作食品废物。

- 选定流：不合格罐中的废弃胡萝卜豌豆婴幼儿泥状辅食
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_packing_retort 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 废弃玻璃罐碎片（`glass_breakage`）

记录送场外的破损玻璃；分离附着食品质量，并说明存在的危险污染。

- 选定流：废弃玻璃罐碎片
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_packing_retort 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 送处理的杀菌釜冷却水排污（`retort_effluent`）

记录送处理的收集排污流；说明组成及任何单独的未污染回水。

- 选定流：送处理的杀菌釜冷却水排污
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_packing_retort 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packing_retort`
- 来源：`foreground-records`; `steriflow-baby-retort`

### 过程：场址用电与生产线清洗（`cleaning_power`）

#### 输入

##### 产品流

###### 交流电（`site_electricity`）

UUID 50657322-939c-4829-a87b-47c093bfa6a7 仅用于匹配的 CN（中国）用户端、低于 1 kV 的电网平均消费组合供电。公开原件的 locationOfSupply 为 CN；此流及任何关联供应过程均不能作为全球默认。其他供应地域、电压或发电侧供电情形，使用前须重新核实适用身份及供应商数据。该身份条件不限制产品方法的地理适用范围。分表记录预处理、泵送、均质、灌装、杀菌釜循环、冷却、清洗及厂内储存用电。不得在这些过程重复计入相同电量。

- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_cleaning_power 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_power`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 自来水（`clean_water`）

记录设备及生产线清洗新水；与配料水、蔬菜清洗水和冷却水分开。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_cleaning_power 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_power`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 氢氧化钠溶液，50%（`naoh50`）

条件项：仅当实际购入清洗试剂为 50% 氢氧化钠溶液时纳入。计量厂内稀释前溶液质量；其他清洗剂需要单列原子行及身份。

- 选定流：氢氧化钠溶液，50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_cleaning_power 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_power`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 蒸汽工艺热（`clean_heat`）

条件项：实际使用时记录清洗新增蒸汽热；排除已计入蒸煮及杀菌釜的热量。

- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_cleaning_power 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_power`
- 来源：`foreground-records`; `steriflow-baby-retort`

#### 输出

##### 废物流

###### 送处理的废氢氧化钠清洗液（`clean_effluent`）

碱洗条件项：将废稀释清洗液作为单一废水流收集；记录实际浓度及去向，不使用购入时 50% 浓度。物理上独立的其他清洗流分开记录。

- 选定流：送处理的废氢氧化钠清洗液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_cleaning_power 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_power`
- 来源：`foreground-records`; `steriflow-baby-retort`

###### 生产线末段冲洗废水（`clean_rinse_effluent`）

记录末段冲洗实际收集并送处理的稀释废水，与已单列的废碱清洗液分开；若工厂合并收集，采用一个实际混合废水交换并删除重复行。测量质量、污染负荷及去向。

- 选定流：送处理的生产线末段冲洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_cleaning_power 实测每 1 kg 参考流的可归属交换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_power`
- 来源：`foreground-records`; `codex-canning`

## 7. 分配与共产品处理

| rule_id | 规则 | 来源 |
| --- | --- | --- |
| allocation_direct | 优先分离批次并直接计量逐阶段公用工程。共用杀菌釜、蒸煮或清洗负荷采用实测可归属能量/时间/装载记录，说明因果基准，包括换线及不合格品。无法支持拆分时披露并审查分配；不得编造行业系数。 | foreground-records |
| allocation_rework | 可回用内部泥料作为可追踪循环；净新投入计入各交换分子及汇总清单；归一化分母仅为合格食品净输出质量（kg）。保留失败批次及返工的全部负担，最终合格食品只计一次。不合格批次保留生产负荷。废物不自动获得避免产品信用。出售胡萝卜皮共产品需单独产品状态、实测湿/干质量及经明确审查的分配基准。 | foreground-records |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_preparation | preparation | 本过程各独立交换 | 批次及计量记录 | 批次编号；时间；配方；流身份及状态；原数量/单位；皮重；表计读数；合格食品净质量；不合格质量；分配基准 | 校准接收及转移称量；水表；单独收集皮料及废水 | kg; MJ | 每批及可归属循环 | 有代表性的报告期，包括启动及不合格品 | 声明工厂及生产线 | 每 1 kg 参考流 | 校准；批次关联；封口及放行记录；表计核对 |
| cp_pureeing | pureeing | 本过程各独立交换 | 批次及计量记录 | 批次编号；时间；配方；流身份及状态；原数量/单位；皮重；表计读数；合格食品净质量；不合格质量；分配基准 | 配料及散装称量；蒸汽计量及供回焓；蒸煮及均质日志；存在排放时实测 | kg; MJ | 每批及可归属循环 | 有代表性的报告期，包括启动及不合格品 | 声明工厂及生产线 | 每 1 kg 参考流 | 校准；批次关联；封口及放行记录；表计核对 |
| cp_packing_retort | packing_retort | 本过程各独立交换 | 批次及计量记录 | 批次编号；时间；配方；流身份及状态；原数量/单位；皮重；表计读数；合格食品净质量；不合格质量；分配基准 | 校准总质量减皮重净灌装抽样并关联合格罐数；包装称量；杀菌釜热/水表；获授权规程及放行记录 | kg; MJ | 每批及可归属循环 | 有代表性的报告期，包括启动及不合格品 | 声明工厂及生产线 | 每 1 kg 参考流 | 校准；批次关联；封口及放行记录；表计核对 |
| cp_cleaning_power | cleaning_power | 本过程各独立交换 | 批次及计量记录 | 批次编号；时间；配方；流身份及状态；原数量/单位；皮重；表计读数；合格食品净质量；不合格质量；分配基准 | 电力分表；稀释前清洗剂称量；水表；废清洗液收集；清洗及储存日志 | kg; MJ | 每批及可归属循环 | 有代表性的报告期，包括启动及不合格品 | 声明工厂及生产线 | 每 1 kg 参考流 | 校准；批次关联；封口及放行记录；表计核对 |

保留罐数及实测净灌装量分布；合格食品净质量为合格灌装净量之和，排除样品及不合格食品。仅有总包装计数不能建立分母。记录含水率、pH、水分活度、质地方法、杀菌釜装载、规程偏差、冷却及封口检查，作为适用性和质量证据，不取代工厂工艺主管权限。

各协议还应保留专用原始字段：预处理记录剔除/去皮质量及供排水；制泥记录配料秤、含水率、转移库存、供回蒸汽压力/温度/比焓，以及适用时尾气流量和入口/出口绝对湿度；包装热处理记录罐数、单罐皮重及净灌装抽样分布、封口状态、循环装载、蒸汽及水表、冷却补水/排污；用电清洗记录逐阶段分表读数、购入试剂浓度、稀释水、回用量、废清洗液与末段冲洗废水、归属时间及批次。体积转质量需记录温度及实测密度；能量单位组保留 MJ 与 kWh 的确定性换算。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalization | 所有清单行 | 将各可归属批次交换除以同一报告期合格食品净质量（kg）。各结果按每 1 kg 参考流报告；保留分子单位。 | 可归属数量；合格食品净质量；cp_packing_retort；过程协议 | 归一化独立交换 | foreground-records |
| electricity_conversion | site_electricity | 表计 kWh 乘以 3.6 得到 MJ，再按批次归一化。 | kWh; cp_cleaning_power | MJ | foreground-records |
| steam_heat | cook_heat; retort_heat; clean_heat | 热能为实测蒸汽质量乘以实测供回比焓差；批次归一化前汇总可归属循环。声明压力、温度、凝结水回流及表计边界；不设默认焓。 | 蒸汽质量；供回焓；循环编号 | MJ | foreground-records |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_traceability | 所有清单行 | 每个数量关联相同配方、场址、批次及放行报告期。区分实测零、不存在、未计量及代理值。不根据营销文字推定配方比例。 | foreground-records |
| dq_balance | preparation; pureeing; packing_retort | 核对食品投入、保留水分、中间库存、食品净输出、蒸发及分离废物；报告未解释残差及场址特定不确定性。供水需与配料保留、回水及废水核对，不假定供水等于排放。 | foreground-records |
| dq_schedule | packing_retort | 保留工厂获授权的产品/容器特定规程及偏差/放行证据。历史 Codex 仅为方法背景，不证明当前法律合规；PCR 不提供热处理规程或安全批准。 | codex-canning |
| dq_uuid | 带UUID行 | 绑定实际数据前确认物理状态、化学性质、电压、浓度、环境介质及参考属性。条件不同则保留身份未解决，不扩大公开身份。 | foreground-records |

## 9. 校验规则

| rule_id | 规则 | 来源 |
| --- | --- | --- |
| validate_scope | 检查全部必需限定信息、具体配方类别及鲜蔬菜/低酸罐内热处理路线。缺失路线或放行证据时适用性不确定，不算批准。 | steriflow-baby-retort; codex-canning |
| validate_electricity_identity | 将 site_electricity 绑定至 UUID 50657322-939c-4829-a87b-47c093bfa6a7 前，依据实际供应商记录核对 CN 供应地域、低于 1 kV 电压及用户端电网平均消费组合供电。其他地域、电压或发电侧边界须采用另行核实的适用流身份及供应商数据；此流及其供应过程均非全球默认。保留实际参考属性及能量单位链，实测 kWh 按 3.6 MJ/kWh 换算。 | foreground-records |
| validate_quantity | 检查正的合格食品净量分母、校准净灌装量、湿质量及能量单位一致性、内部转移匹配以及公用工程/返工不重复计量。拒绝将包装质量纳入1kg食品参考流。 | foreground-records |
| validate_completeness | 逐过程及原子交换对照实际工厂记录，包括条件清洗及蒸发。报告已检查、跳过、不存在及未计量交换、平衡残差及上游缺失链接。身份及科学审查待解决不构成方法学或食品安全批准。 | foreground-records |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明产品及路线的制造贡献；扩展模型须披露上游及下游链接 |
| excluded_use | 23991全类平均；婴幼儿膳食或健康比较；安全批准；无链接的完整摇篮至工厂门口声明 |
| required_metadata | 全部参考限定信息；食品净量基准；批次计数；输入状态；路线及放行标识；分配；废物去向；地理及报告期；流身份缺口 |
| required_quality_disclosure | 实测覆盖；校准及不确定性；平衡残差；代理值；上游缺失链接；历史来源限制 |
| update_trigger | 配方、输入保藏状态、包装、公用工程供应、杀菌釜技术、获授权规程或放行准则变化；身份或证据解决 |

## 11. 数据源

| 来源id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025, printed p111 (PDF p111),23991;21399 exclusion p84. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类背景；不声称全类覆盖 |
| hipp-carrot-pea | official_guidance | HiPP, Carrots & Peas GB4082, Ingredients and Storage sections, https://www.hipp.co.uk/shop/baby-foods/jars/carrots-and-peas | 仅制造商产品身份、配料组合及未开封常温状态；页面快照2026-10-06；不推定配方系数或工厂路线 |
| steriflow-baby-retort | handbook | Steriflow, Baby food sterilization in the food industry,12September2024, “Baby Food: Sterilization Process” and “Different Stages of Sterilization”, https://www.steriflow.com/en/baby-food-sterilization-in-the-food-industry/ | 设备制造商的预处理、灌装、封口、淋水式罐内热处理及冷却路线证据；不采用节能、安全保证或数字规程 |
| codex-canning | official_guidance | FAO/WHO,CAC/RCP23-1979, revised1989/1993, editorial2011, §§4.4,5.2,7.4,7.5,7.6,8; printed/PDF p20 §7.5. https://www.fao.org/input/download/standards/24/CXP_023e.pdf | 历史低酸罐藏方法背景；需要实际产品/容器规程及工厂主管权限；不构成当前婴幼儿特定监管批准 |
| foreground-records | dataset | 要求的后续场址记录：批次配方、校准称量、公用工程表计、热处理规程及放行记录、清洗日志及废物联单；本PCR未附工厂数据集 | 数据生产前采集，作为计量、算术归一化、分配、平衡及不确定性依据 |
| codex-baby-food-2023 | standard | FAO/WHO, CXS 73-1981, amended2023, §§1,3.2, physical/printed p3; https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B73-1981%252FCXS_073e.pdf | 仅断奶辅食范围及均匀/粉碎形态；只有官方文本提取，PDF字节及视觉核验不可取得；不构成食品安全批准 |
