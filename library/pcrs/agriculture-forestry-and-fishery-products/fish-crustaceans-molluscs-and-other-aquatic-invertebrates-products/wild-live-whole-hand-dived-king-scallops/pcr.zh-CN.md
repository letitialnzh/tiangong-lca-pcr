---
pcr_id: pcr.wild-live-whole-hand-dived-king-scallops
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 野生潜水手采活体整只大扇贝

## 1. 范围与适用性

本方法涵盖潜水者从天然海床手采的野生 Pecten maximus，在有意净化前采捕者首次实物验收门以活体原壳整只交付。声明门是方法学子集，不声称每个商业经营者均在此门销售。涵盖实际可归属采捕者采集及门前处理责任；需要未来处理的买方也可接收原料活体产品。

排除其他扇贝、拖耙/拖网/电采、养殖或转移养成、首次交付前采捕者有意净化或卫生转养、观赏用途、去壳肌肉/仅卵、死亡/冷冻/熟制/保藏产出。不声称生态无害、认证、即食状态、合法资格或通用规格、深度、温度、季节、保质期。来源支持定性路线存在，不支持数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.wild-live-whole-hand-dived-king-scallops |
| classification_refs | CPC 3.0 04441; narrower |
| covered_products | 有意净化前采捕者首次验收的野生潜水手采活体原壳整只 Pecten maximus |
| excluded_products | 其他物种或渔具；养殖/转养；门前有意净化；去壳、死亡、冷冻、熟制、观赏或保藏产品 |
| representative_product | Pecten maximus，大扇贝，活体原壳整只 |
| production_route | 父活动 dive_capture：使用实际采集袋及有记录支持的 SCUBA 或水面供气装具手采；实际条件处理与首次实物交接 |
| market_state | 活体原壳整只食品链原料产品；不是即食或已净化状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 采捕者首次交付验收的潜水手采活体整只大扇贝 |
| How much | 1 千克验收活体整只动物净质量 |
| How well | 声明物种、活体/原壳状态、外表清理状态、接收者验收及实际用途 |
| How long or cycle | 声明潜次/航次/批次及完整可归属支持/返程/待机期间；独立关联跨报告期活体/包装/气体/燃料库存及资产服务阶段 |
| reference_flow_link | `first_handover_accepted_reference` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 采捕者首次交付验收的潜水手采活体整只大扇贝 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种; 野生天然床; 实际手采潜水装具; 潜次/航次/批次及报告期; 活体/原壳整只; 清理/皮重状态; 实际事件图; 实物接收者/门/时间; 食品链用途; 门前无有意净化/卫生转养/养成; 状态维护目的; 质量验收证据; 库存/资产/服务所含; 当地处理适用证据另列; 所选参考批次/产品/等级池及互不重叠的其他最终产出 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用经校准验收活体原壳整只动物净质量；保留毛重、容器/游离水/泥沙/外部生物皮重和清理状态。含固有壳及体内水。不默认肉到整只或数量到质量换算。 |
| `native_quantity` | 所有清单行 | 实际获支持属性 | 实际原生单位 | 保留服务原生单位及气体压力/温度/组成条件；气瓶水容积不是消耗气体体积。数量、体积或能量换算须有独立实测因子及不确定性。仅电能 kWh 至 MJ 用 3.6；不将服务换成质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 天然海床野生活体 Pecten maximus 及实际采捕者准备/进出；无管理养殖阶段 |
| starting_condition_role | 实测自然采捕背景，不是外购零负荷动物 |
| product_classification_scope | CPC 3.0 04441 内更窄的潜水手采活体整只 Pecten maximus 子集 |
| recursive_input_rule | 配对内部转移保留一次；外购同类别或转移养成动物不属于此采捕范围 |
| upstream_dataset_requirement | 匹配实际供应商/门/技术/地域的供应及完整本前景直接运营采捕/支持资产，不重复供应商已含负荷 |
| disclosure | 采捕地点/期间/装具；实际门/接收者；激活/作业图；活体状态/清理/质量；库存/服务所含；缺失目的、身份、数量、去向及分配证据 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_natural` | capture_context | 以有证据的天然海床野生 Pecten maximus 及实际采捕准备、进出、潜水、采集、支持和可归属返程/待机责任开始。不推定管理养成、饲料或养殖阶段，也不声称自然生长无影响。 | `lochfyne-live-scallops` |
| `boundary_gate` | reference_product | 终点为有意净化、卫生转养或管理养成前，食品链接收者对采捕者首次交付活体原壳整只动物的有证实物验收。首次交付前有意净化的采捕路线不属于本窄范围；不能删除其负荷或改称其较晚门为本门。排除买方后续配送、去壳、烹煮、冷冻及处理。 | `fao-bivalve-depuration-2008` |
| `boundary_purpose` | live_hold | 外表冲洗及短时非净化状态维护不证明净化。采集实际目的、时长、条件及接收者；浸泡或水槽目的不明时不能确认边界。原料转交或净化均不证明即食适用或所有危害均被去除。 | `fao-bivalve-depuration-2008` |
| `boundary_events` | process_graph | 节点代表责任，不是强制时间流水线。采捕及首次验收必需；其他节点仅按实际独立事件激活。记录实际顺序、作业编号、重复、重叠及跳过，以及每次转移的发送者/接收者/状态/质量/时间和包装/水联系。不能因事件服务两种功能而双重归属。 |  |
| `boundary_config` | dive_capture | 父活动为 dive_capture。SCUBA 与水面供气是有证据的替代实现，不证明某供应商实际装具。记录实际装具、呼吸气库存/条件、充装/压缩机/服务所含内容及资产/支持消耗。每实际组成/作业的替代成本互斥，除非有据混合装具确实使用两者；不增加重复产品接口、不假定屏气、不替换氧气身份、不提供安全处方。 | `hse-shellfish-diving-2021` |
| `boundary_fullperiod` | producer_duties | 即使动物在海上交付，也纳入完整可归属采捕者出程、返程、待机、无产出采集、维护、清洁、支持及资产服务期。排除买方配送不等于排除采捕者返程。记录包装、活体、水、燃料及气体期初/期末库存、更换、终止及门后已归属采捕者责任和期间归属。 |  |
| `boundary_recursive` | upstream_supply | 同类别外购或转养动物不属于本采捕范围，不能当成无负荷野生移出。内部转移保留保管及继承负荷而不再采购。外部服务/材料需要与实际门、技术、地域及所含内容匹配的上游清单；缺失供应商清单须披露，不能设为零。 |  |
| `boundary_operating_responsibility` | 全部直接资源及排放 | own/owned、自有/自营表示本前景直接运营或控制并承担燃料/资源消费责任，不以设备法律产权为筛选条件。租赁或借用但自营的设备也纳入；供应方综合服务已含的组成不得重复直接计入。此定义适用于燃料、燃烧、水、压缩及资产/服务记录，一个事件只有一个责任方。 |  |

## 6. 过程清单结构

本稿“自有/自营/owned”表示本前景直接运营或控制并承担燃料、资源或压缩责任，不以设备法律产权为筛选条件；租赁或借用但自营供油的设备同样纳入。供应方综合服务已包含的组成不得再直接重复计入。

### 过程图

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `dive_capture` | 野生潜水手采 | required | 全部纳入批次；实证的手采潜水装具 | 从天然海床至采得活体整只动物；包括实际船舶往返、采集袋、回收及支持。采捕移出野生生物，不是管理养成或首次清洗。 | 每 1 kg 参考流 |
| `first_cleaning` | 首次外表清理 | conditional | 实际发生独立的交付前清洗、冲洗或去杂事件 | 采得的原始活体整只动物转为外表清理后的活体整只动物；去除物单独称量或透明估算。这不是肠道净化或去壳。 | 每 1 kg 参考流 |
| `grade_sort` | 独立等级及去向分选 | conditional | 独立责任将动物分为两种或以上声明的质量或去向状态 | 记录每种来料状态及全部等级、去向、活体降级、拒收和接收者。仅采捕时初筛或最终验收不额外激活分选节点。 | 每 1 kg 参考流 |
| `live_hold` | 短时活体状态维护 | conditional | 交付前实际发生有界活体状态干预或非净化目的湿暂存 | 干预前活体整只动物至下一实际交接时仍为活体整只动物；记录时长、条件、用水和损失。不承诺保质期或卫生改善。 | 每 1 kg 参考流 |
| `presentation` | 最终保护性呈现 | conditional | 交付前实际发生独立的装载、保护或标签呈现责任 | 此前处理的活体整只动物至实际包装呈现中的相同活体整只动物。记录包装材质、可复用库存、损失及接收者；本节点不是买方配送。 | 每 1 kg 参考流 |
| `first_handover` | 采捕者首次实物交接与验收 | required | 每参考批次均须有有意净化前的首次实物接收验收证据 | 从实际前序状态至食品链验收的活体原壳整只 Pecten maximus；验收同时记录未接收动物及去向。接收者可能需要后续净化；这不是即食认证。 | 每 1 kg 参考流 |

每个激活节点拥有实际资源、服务、包装、生物/水平衡及去向责任。条件概括卡展开为本节点有据具体交换，不代表所有行都非零。完整物理吞吐与分配清单并存：动物/水/包装/气体/燃料期初和期末库存、收发、实际损失、吸收/渗出/生物沉积及不确定残差。动物湿质量差须有状态/皮重/水证据；壳钙化、吸收或呼吸不产生默认碳抵扣。来源特异生态效应需独立合理指标，不能用化石 CO2 代理。

生产模式为实际潜次/航次采集批次，以节点/作业及报告期索引，不假定连续生产。将准备、采集、初筛、清理、装具变化及实际换批关联到真实事件，保留失败/零产出航次。区分跨期期初/末活体和包装库存与生产产出；不提供固定运行时长或复用次数。

有据技术差异仅附着于 dive_capture：实际气瓶装具记录充装、气瓶库存/补充及运输接口；实际水面供气记录水面气体/压缩机/管线服务接口，包括任何另有记录的备用气瓶库存。对每个实际使用组成独立采集归属、原生体积条件及服务所含。这些替代改变清单/数据/归属问题，不改变被采动物接口，也不提供默认效率。供应商页面没有标明其呼吸装具。

### 过程：野生潜水手采（`dive_capture`）

从天然海床至采得活体整只动物；包括实际船舶往返、采集袋、回收及支持。采捕移出野生生物，不是管理养成或首次清洗。

#### 输入

##### 产品流

###### 实际交付电力（`dive_capture_electricity`）

记录实际供应者、电网或地点、电压及仪表或服务归属；保留原始电量 kWh 并独立追溯换算至 MJ，不假定发电组合。

- 选定流：电力
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` ; 能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dive_capture`

- 数量范围：dive_capture_electricity 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_dive_capture_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

###### 进入本前景直接运营呼吸气压缩的实际环境空气（`dive_capture_compressor_air`）

仅用于本前景运营压缩：独立于外购压缩气体记录组成及实测吸入体积条件。供应方承担运营责任的充装不计本站环境吸入，也不将前景自压气体再次计为外购呼吸气体。

- 选定流：进入本前景直接运营呼吸气压缩的实际环境空气
- 流属性/单位：气体体积 / m3
- 数量规则：按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dive_capture`

- 数量范围：dive_capture_compressor_air 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_dive_capture_compressor_air
  - 单位：m3
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

#### 输出

##### 产品流

###### 转至实际下一作业批次的活体整只大扇贝（`dive_capture_live_transfer`）

计量本事件后实际保留的活体整只 Pecten maximus，含固有壳和体内水；配对实际下一作业编号、状态及质量。这不是独立最终销售，也不是后续作业固定 1 千克投入。

- 选定流：转至实际下一作业批次的活体整只大扇贝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dive_capture`

- 数量范围：dive_capture_live_transfer 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_dive_capture_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

###### 化石源二氧化碳至未细分空气（`dive_capture_fossil_co2`）

仅计本前景直接运营/控制并承担燃料消费责任的实际化石燃料燃烧，包括租借自营设备；采用有据燃料碳或氧化记录或实测排放，独立处理生物源比例。动物呼吸、供应商服务已含尾气及排水均不属于本身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_dive_capture`

- 数量范围：dive_capture_fossil_co2 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_dive_capture_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：首次外表清理（`first_cleaning`）

采得的原始活体整只动物转为外表清理后的活体整只动物；去除物单独称量或透明估算。这不是肠道净化或去壳。

#### 输入

##### 产品流

###### 内部活体整只动物接收（`first_cleaning_animal_receipt`）

计量实际前序批次、物种、活体状态、壳状态、清理状态、批次质量和配对转移编号。继承负荷一次；此接收不是新的采购，不固定为最终一千克。

- 选定流：处理接收点的整只活体大扇贝（Pecten maximus）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_first_cleaning`

- 数量范围：first_cleaning_animal_receipt 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_first_cleaning_animal_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际交付电力（`first_cleaning_electricity`）

记录实际供应者、电网或地点、电压及仪表或服务归属；保留原始电量 kWh 并独立追溯换算至 MJ，不假定发电组合。

- 选定流：电力
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` ; 能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_first_cleaning`

- 数量范围：first_cleaning_electricity 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_first_cleaning_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转至实际下一作业批次的活体整只大扇贝（`first_cleaning_live_transfer`）

计量本事件后实际保留的活体整只 Pecten maximus，含固有壳和体内水；配对实际下一作业编号、状态及质量。这不是独立最终销售，也不是后续作业固定 1 千克投入。

- 选定流：转至实际下一作业批次的活体整只大扇贝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_first_cleaning`

- 数量范围：first_cleaning_live_transfer 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_first_cleaning_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

###### 化石源二氧化碳至未细分空气（`first_cleaning_fossil_co2`）

仅计本前景直接运营/控制并承担燃料消费责任的实际化石燃料燃烧，包括租借自营设备；采用有据燃料碳或氧化记录或实测排放，独立处理生物源比例。动物呼吸、供应商服务已含尾气及排水均不属于本身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_first_cleaning`

- 数量范围：first_cleaning_fossil_co2 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_first_cleaning_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：独立等级及去向分选（`grade_sort`）

记录每种来料状态及全部等级、去向、活体降级、拒收和接收者。仅采捕时初筛或最终验收不额外激活分选节点。

#### 输入

##### 产品流

###### 内部活体整只动物接收（`grade_sort_animal_receipt`）

计量实际前序批次、物种、活体状态、壳状态、清理状态、批次质量和配对转移编号。继承负荷一次；此接收不是新的采购，不固定为最终一千克。

- 选定流：处理接收点的整只活体大扇贝（Pecten maximus）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_sort`

- 数量范围：grade_sort_animal_receipt 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_grade_sort_animal_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际交付电力（`grade_sort_electricity`）

记录实际供应者、电网或地点、电压及仪表或服务归属；保留原始电量 kWh 并独立追溯换算至 MJ，不假定发电组合。

- 选定流：电力
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` ; 能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_sort`

- 数量范围：grade_sort_electricity 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_grade_sort_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转至实际下一作业批次的活体整只大扇贝（`grade_sort_live_transfer`）

计量本事件后实际保留的活体整只 Pecten maximus，含固有壳和体内水；配对实际下一作业编号、状态及质量。这不是独立最终销售，也不是后续作业固定 1 千克投入。

- 选定流：转至实际下一作业批次的活体整只大扇贝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_sort`

- 数量范围：grade_sort_live_transfer 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_grade_sort_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

###### 化石源二氧化碳至未细分空气（`grade_sort_fossil_co2`）

仅计本前景直接运营/控制并承担燃料消费责任的实际化石燃料燃烧，包括租借自营设备；采用有据燃料碳或氧化记录或实测排放，独立处理生物源比例。动物呼吸、供应商服务已含尾气及排水均不属于本身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grade_sort`

- 数量范围：grade_sort_fossil_co2 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_grade_sort_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：短时活体状态维护（`live_hold`）

干预前活体整只动物至下一实际交接时仍为活体整只动物；记录时长、条件、用水和损失。不承诺保质期或卫生改善。

#### 输入

##### 产品流

###### 内部活体整只动物接收（`live_hold_animal_receipt`）

计量实际前序批次、物种、活体状态、壳状态、清理状态、批次质量和配对转移编号。继承负荷一次；此接收不是新的采购，不固定为最终一千克。

- 选定流：处理接收点的整只活体大扇贝（Pecten maximus）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_live_hold`

- 数量范围：live_hold_animal_receipt 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_live_hold_animal_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际交付电力（`live_hold_electricity`）

记录实际供应者、电网或地点、电压及仪表或服务归属；保留原始电量 kWh 并独立追溯换算至 MJ，不假定发电组合。

- 选定流：电力
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` ; 能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_live_hold`

- 数量范围：live_hold_electricity 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_live_hold_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转至实际下一作业批次的活体整只大扇贝（`live_hold_live_transfer`）

计量本事件后实际保留的活体整只 Pecten maximus，含固有壳和体内水；配对实际下一作业编号、状态及质量。这不是独立最终销售，也不是后续作业固定 1 千克投入。

- 选定流：转至实际下一作业批次的活体整只大扇贝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_live_hold`

- 数量范围：live_hold_live_transfer 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_live_hold_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

###### 化石源二氧化碳至未细分空气（`live_hold_fossil_co2`）

仅计本前景直接运营/控制并承担燃料消费责任的实际化石燃料燃烧，包括租借自营设备；采用有据燃料碳或氧化记录或实测排放，独立处理生物源比例。动物呼吸、供应商服务已含尾气及排水均不属于本身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_live_hold`

- 数量范围：live_hold_fossil_co2 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_live_hold_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：最终保护性呈现（`presentation`）

此前处理的活体整只动物至实际包装呈现中的相同活体整只动物。记录包装材质、可复用库存、损失及接收者；本节点不是买方配送。

#### 输入

##### 产品流

###### 内部活体整只动物接收（`presentation_animal_receipt`）

计量实际前序批次、物种、活体状态、壳状态、清理状态、批次质量和配对转移编号。继承负荷一次；此接收不是新的采购，不固定为最终一千克。

- 选定流：处理接收点的整只活体大扇贝（Pecten maximus）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_presentation`

- 数量范围：presentation_animal_receipt 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_presentation_animal_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际交付电力（`presentation_electricity`）

记录实际供应者、电网或地点、电压及仪表或服务归属；保留原始电量 kWh 并独立追溯换算至 MJ，不假定发电组合。

- 选定流：电力
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` ; 能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_presentation`

- 数量范围：presentation_electricity 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_presentation_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转至实际下一作业批次的活体整只大扇贝（`presentation_live_transfer`）

计量本事件后实际保留的活体整只 Pecten maximus，含固有壳和体内水；配对实际下一作业编号、状态及质量。这不是独立最终销售，也不是后续作业固定 1 千克投入。

- 选定流：转至实际下一作业批次的活体整只大扇贝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_presentation`

- 数量范围：presentation_live_transfer 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_presentation_live_transfer
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

###### 化石源二氧化碳至未细分空气（`presentation_fossil_co2`）

仅计本前景直接运营/控制并承担燃料消费责任的实际化石燃料燃烧，包括租借自营设备；采用有据燃料碳或氧化记录或实测排放，独立处理生物源比例。动物呼吸、供应商服务已含尾气及排水均不属于本身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_presentation`

- 数量范围：presentation_fossil_co2 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_presentation_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

### 过程：采捕者首次实物交接与验收（`first_handover`）

从实际前序状态至食品链验收的活体原壳整只 Pecten maximus；验收同时记录未接收动物及去向。接收者可能需要后续净化；这不是即食认证。

#### 输入

##### 产品流

###### 内部活体整只动物接收（`first_handover_animal_receipt`）

计量实际前序批次、物种、活体状态、壳状态、清理状态、批次质量和配对转移编号。继承负荷一次；此接收不是新的采购，不固定为最终一千克。

- 选定流：处理接收点的整只活体大扇贝（Pecten maximus）
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_first_handover`

- 数量范围：first_handover_animal_receipt 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_first_handover_animal_receipt
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际交付电力（`first_handover_electricity`）

记录实际供应者、电网或地点、电压及仪表或服务归属；保留原始电量 kWh 并独立追溯换算至 MJ，不假定发电组合。

- 选定流：电力
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` ; 能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_first_handover`

- 数量范围：first_handover_electricity 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_first_handover_electricity
  - 单位：MJ
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 采捕者首次交付验收的潜水手采活体整只大扇贝（`first_handover_accepted_reference`）

Pecten maximus 为活体原壳整只，有意净化前由食品链接收者验收；动物净质量排除可分离承载水、泥沙、外部附着生物和容器。

- 选定流：采捕者首次交付验收的潜水手采活体整只大扇贝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_first_handover`

- 数量范围：仅参考归一化恒等式
  - 范围角色：`qa_guardrail`
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 参考流；不是收率或验收限值
  - 基准类型：`reference_flow`
  - 证据类型：`method_formula`
  - 来源：`reference-normalization-identity`

##### 废物流

##### 基本流

###### 化石源二氧化碳至未细分空气（`first_handover_fossil_co2`）

仅计本前景直接运营/控制并承担燃料消费责任的实际化石燃料燃烧，包括租借自营设备；采用有据燃料碳或氧化记录或实测排放，独立处理生物源比例。动物呼吸、供应商服务已含尾气及排水均不属于本身份。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。
- 数值来源模式：`foreground_record`
- 适用范围：`technology_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_first_handover`

- 数量范围：first_handover_fossil_co2 的独立上限筛查证据未决
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：U_first_handover_fossil_co2
  - 单位：kg
  - 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_owner` | shared_events | 先以实测因果细分将每个实物资源/服务/资产事件一次归属到使用节点及期间；完整物理账与 LCA 加权数量独立保存。同一事件份额之和须等于实际整体；重叠职责和库存移动不重复该事件。 |  |
| `allocation_outputs` | intended_products | 列明全部实际预期物种、等级及去向产出的实物数量、状态、接收者和首次外运。先以有据细分避免共产品分配；仍不可分时要求合理因果物理关系，否则采用有据经济替代并记录价格/时间/状态和敏感性。不默认湿质量或价格分配；拒收/释放/废弃物不自动是预期产品。 |  |
| `allocation_later` | successive_splits | 真正较晚的预期产出分流，分配剩余携带上游负荷池及真正共用的后续负荷；保留此前已分到外部的份额而不再次分配。较晚识别的产品不能免费获得采捕。转移或生命状态改变本身不是再次分配。 |  |
| `allocation_period` | stocks_assets | 采用实际资产/服务使用者及有据寿命/服务期、更换及终止记录；不用通用船舶寿命、气瓶充装次数或袋复用因子。活体/产品/包装库存及继承负荷跨期结转一次，记录分配驱动及敏感性，无法归属的残余保留为缺口而不删除。 |  |
| `allocation_zero` | zero_output | 在有据报告边界内核对失败或零验收批次，并在实际产出/期间中合理归属；不除以零、不静默剔除、不把负荷强设为零、不虚构验收活体质量。保留活体库存不是验收产出。 |  |
| `allocation_service` | provider_inclusions | 为每项实际本前景直接运营或外购服务选定声明的表示方式。供应商已含的气体压缩、燃料、电力、船舶、设备或排放不再作为直接前景项计入。本前景运营压缩记录实际空气吸入、气体库存和能耗；外购气体保留自身交付/所含边界。不自动给予避免处置或生物固碳抵扣。 |  |

每只动物在每个作业中仅属于一个互不重叠的实物群。声明所选参考批次/产品/等级池，将其他独立预期最终产出与该池区分。仍属于同一参考池的等级只是内部细分，不是额外共产品或新增最终验收千克；在所选首次门每只最终验收动物只计一次。若独立销售等级分别建模，记录其互不重叠验收质量及分配决策。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_dive_capture` | `dive_capture` | dive_capture 的每项实际交换及库存/事件平衡 | 称重/仪表/库存/服务/潜次/验收及接收者记录 | 节点/作业/批次/航次/潜次/时间；物种/活体状态/原壳/清理/皮重；毛重/验收净质量；实际装具/气体组成/压力/温度/充装/返还；资源/原生数量/供应者/所含；期初/末库存；包装身份/复用；转移编号/发送者/接收者/状态/质量；全部等级/预期产出/拒收/损失/去向/介质；资产使用者/服务期/更换/终止；分配份额；独立范围证据及不确定性 | 使用经校准秤称量；核对节点/作业实物库存及配对转移；采用实际仪表、供应者所含记录及接收者证据。独立核对气体体积条件。先确定事件归属，再说明独立共产品分配。 | kg; MJ; m3; native service unit | 每事件/作业及库存期初/末；期间/服务核对 | 完整声明批次及可归属进出/返程/待机/支持期间、跨期结转及服务寿命 | 实际采捕及首次交接系统；不静默混合场址 | 每 1 kg 参考流 | 校准/皮重测试；日志/发票/验收；配对转移及库存闭合；实际装具/组成记录；供应者/接收者证据；分配及不确定性审核 |
| `cp_first_cleaning` | `first_cleaning` | first_cleaning 的每项实际交换及库存/事件平衡 | 称重/仪表/库存/服务/潜次/验收及接收者记录 | 节点/作业/批次/航次/潜次/时间；物种/活体状态/原壳/清理/皮重；毛重/验收净质量；实际装具/气体组成/压力/温度/充装/返还；资源/原生数量/供应者/所含；期初/末库存；包装身份/复用；转移编号/发送者/接收者/状态/质量；全部等级/预期产出/拒收/损失/去向/介质；资产使用者/服务期/更换/终止；分配份额；独立范围证据及不确定性 | 使用经校准秤称量；核对节点/作业实物库存及配对转移；采用实际仪表、供应者所含记录及接收者证据。独立核对气体体积条件。先确定事件归属，再说明独立共产品分配。 | kg; MJ; m3; native service unit | 每事件/作业及库存期初/末；期间/服务核对 | 完整声明批次及可归属进出/返程/待机/支持期间、跨期结转及服务寿命 | 实际采捕及首次交接系统；不静默混合场址 | 每 1 kg 参考流 | 校准/皮重测试；日志/发票/验收；配对转移及库存闭合；实际装具/组成记录；供应者/接收者证据；分配及不确定性审核 |
| `cp_grade_sort` | `grade_sort` | grade_sort 的每项实际交换及库存/事件平衡 | 称重/仪表/库存/服务/潜次/验收及接收者记录 | 节点/作业/批次/航次/潜次/时间；物种/活体状态/原壳/清理/皮重；毛重/验收净质量；实际装具/气体组成/压力/温度/充装/返还；资源/原生数量/供应者/所含；期初/末库存；包装身份/复用；转移编号/发送者/接收者/状态/质量；全部等级/预期产出/拒收/损失/去向/介质；资产使用者/服务期/更换/终止；分配份额；独立范围证据及不确定性 | 使用经校准秤称量；核对节点/作业实物库存及配对转移；采用实际仪表、供应者所含记录及接收者证据。独立核对气体体积条件。先确定事件归属，再说明独立共产品分配。 | kg; MJ; m3; native service unit | 每事件/作业及库存期初/末；期间/服务核对 | 完整声明批次及可归属进出/返程/待机/支持期间、跨期结转及服务寿命 | 实际采捕及首次交接系统；不静默混合场址 | 每 1 kg 参考流 | 校准/皮重测试；日志/发票/验收；配对转移及库存闭合；实际装具/组成记录；供应者/接收者证据；分配及不确定性审核 |
| `cp_live_hold` | `live_hold` | live_hold 的每项实际交换及库存/事件平衡 | 称重/仪表/库存/服务/潜次/验收及接收者记录 | 实际干/湿维持目的及责任、开始/结束/持续时长、温度/盐度/水体/通风/供气及原生气量条件、干预与生命状态前后记录；节点/作业/批次/航次/潜次/时间；物种/活体状态/原壳/清理/皮重；毛重/验收净质量；实际装具/气体组成/压力/温度/充装/返还；资源/原生数量/供应者/所含；期初/末库存；包装身份/复用；转移编号/发送者/接收者/状态/质量；全部等级/预期产出/拒收/损失/去向/介质；资产使用者/服务期/更换/终止；分配份额；独立范围证据及不确定性 | 使用经校准秤称量；核对节点/作业实物库存及配对转移；采用实际仪表、供应者所含记录及接收者证据。独立核对气体体积条件。先确定事件归属，再说明独立共产品分配。 以实际操作及接收者记录核对维持目的、条件和时段；浸泡/净化目的不明时阻断范围确认，不默认有供气或默认无净化。 | kg; MJ; m3; native service unit | 每事件/作业及库存期初/末；期间/服务核对 | 完整声明批次及可归属进出/返程/待机/支持期间、跨期结转及服务寿命 | 实际采捕及首次交接系统；不静默混合场址 | 每 1 kg 参考流 | 校准/皮重测试；日志/发票/验收；配对转移及库存闭合；实际装具/组成记录；供应者/接收者证据；分配及不确定性审核 |
| `cp_presentation` | `presentation` | presentation 的每项实际交换及库存/事件平衡 | 称重/仪表/库存/服务/潜次/验收及接收者记录 | 节点/作业/批次/航次/潜次/时间；物种/活体状态/原壳/清理/皮重；毛重/验收净质量；实际装具/气体组成/压力/温度/充装/返还；资源/原生数量/供应者/所含；期初/末库存；包装身份/复用；转移编号/发送者/接收者/状态/质量；全部等级/预期产出/拒收/损失/去向/介质；资产使用者/服务期/更换/终止；分配份额；独立范围证据及不确定性 | 使用经校准秤称量；核对节点/作业实物库存及配对转移；采用实际仪表、供应者所含记录及接收者证据。独立核对气体体积条件。先确定事件归属，再说明独立共产品分配。 | kg; MJ; m3; native service unit | 每事件/作业及库存期初/末；期间/服务核对 | 完整声明批次及可归属进出/返程/待机/支持期间、跨期结转及服务寿命 | 实际采捕及首次交接系统；不静默混合场址 | 每 1 kg 参考流 | 校准/皮重测试；日志/发票/验收；配对转移及库存闭合；实际装具/组成记录；供应者/接收者证据；分配及不确定性审核 |
| `cp_first_handover` | `first_handover` | first_handover 的每项实际交换及库存/事件平衡 | 称重/仪表/库存/服务/潜次/验收及接收者记录 | 节点/作业/批次/航次/潜次/时间；物种/活体状态/原壳/清理/皮重；毛重/验收净质量；实际装具/气体组成/压力/温度/充装/返还；资源/原生数量/供应者/所含；期初/末库存；包装身份/复用；转移编号/发送者/接收者/状态/质量；全部等级/预期产出/拒收/损失/去向/介质；资产使用者/服务期/更换/终止；分配份额；独立范围证据及不确定性 | 使用经校准秤称量；核对节点/作业实物库存及配对转移；采用实际仪表、供应者所含记录及接收者证据。独立核对气体体积条件。先确定事件归属，再说明独立共产品分配。 | kg; MJ; m3; native service unit | 每事件/作业及库存期初/末；期间/服务核对 | 完整声明批次及可归属进出/返程/待机/支持期间、跨期结转及服务寿命 | 实际采捕及首次交接系统；不静默混合场址 | 每 1 kg 参考流 | 校准/皮重测试；日志/发票/验收；配对转移及库存闭合；实际装具/组成记录；供应者/接收者证据；分配及不确定性审核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_reference` | 所有清单行 | 对正值验收活体参考净质量，将独立归属后的节点数量除以同一验收质量（kg）；保留原始实物数量、原生单位、归属及上游结转。零产出批次在合理期间/产出处理未解决前不作除法。 | 实际节点协议；验收活体净质量；归属及独立产出分配 | 每 1 kg 参考流实际清单及完整物理账 |  |
| `calculate_electricity` | 电力行 | 1 kWh = 3.6 MJ | 实际仪表/供应商电量 | MJ |  |
| `calculate_balance` | 每激活节点及库存期间 | 用期初库存加实际接收/采捕移出，核对实际转移、最终验收、独立预期产出、受控废物、未受控去向、适用时吸收/渗出/呼吸及期末库存。保留介质/状态特异不确定残差，不虚构生长或重复记水。 | 实际实物记录及配对转移 | 披露物理核对及缺口 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | actual exchanges | 分别核实实际物种/状态/供应者/门/技术/介质及属性/单位；可变服务/材料/去向卡须展开为具体交换，不能猜 UUID。 | 详情记录、支持身份及实际前景背景 |
| `quality_complete` | lots and periods | 保留失败/零产出期、完整采捕者返程/支持责任、全部激活节点资源/包装/去向、更换/终止及库存结转。不静默排除或无据多场址平均。 | 事件图、服务边界、核对库存及归属审核 |
| `quality_ranges` | all quantities | U_<row_id> 上限需要独立代表性记录/外部证据及实际原生单位支持；不单从目标批次导出筛查、不裁剪离群、不声称文献区间。保留测量不确定性及来源适用性。 | 范围证据、实测及不确定性的独立审查 |
| `collect_dive_capture_fuel` | `dive_capture`; 输入; 产品流: 实际直接消耗的燃烧燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 记录可归属发动机、车辆或设备的确切燃料、供应门、实测库存或仪表平衡及化石/生物源比例。排除供应商服务已含燃料，不能假定手工作业无燃料。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `technology_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_fuel 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_fuel 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_services_assets` | `dive_capture`; 输入; 产品流: 实际作业服务及资产使用 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 将每项实际外购服务或可归属船舶、进出物流、潜水支持、维护或设备服务分别按原生单位解析。记录所含边界、使用节点及服务期；供应商已包含的组成不能再直接计入。 流属性/单位: 服务量 / native service unit; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `route_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_services_assets 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_services_assets 单位：native service unit 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_materials` | `dive_capture`; 输入; 产品流: 实际消耗的作业及状态维护材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按身份及用途分别解析实际润滑剂、清洁耗材、过滤材料、保护材料或其他所需耗材；仅计实际节点使用，不虚构处理或默认活体加冰。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_materials 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_materials 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_packages_in` | `dive_capture`; 输入; 产品流: 实际接收的袋、容器及保护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 区分新外购包装、配对内部接收与可复用库存领用、材质质量及复用状态；即使跳过最终呈现，采集袋和中间容器也归实际责任节点。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_packages_in 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_packages_in 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_supplied_water` | `dive_capture`; 输入; 产品流: 实际水质的外部供应水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录实际采购或供应的海水、淡水或其他水、食品接触用途、接收门及质量；不替换为工业用水身份，不将内部循环重复当成新供水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_supplied_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_supplied_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_breathing_gas` | `dive_capture`; 输入; 产品流: 实际供应的潜水呼吸混合气 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 外购供应与配对内部充气接收须独立标识；本前景运营压缩产生的气体不是另一次采购。采集实际混合组成、交付或压缩边界、气瓶或水面供气装具、充装/消耗/返还库存、压力、温度和体积条件。计量气体体积不是气瓶水容积，不采用通用 Nm3 换算；工业氧气不是身份匹配。 流属性/单位: 气体体积 / m3; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `technology_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_breathing_gas 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_breathing_gas 单位：m3 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_internal_water_receipt` | `dive_capture`; 输入; 产品流: 实际内部可用水接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一前景节点/轮次或单独建模的库存责任接收可用承载水/循环水时记录来处、接收者、配对编号、时间、组成、质量及期初期末库存；配对发送端水转出并继承原有上游负荷一次。不在外供水或取水卡重复记同一水，不计为预期共产品或动物净质量。同节点循环或库存移动保留子账，不新增边界交换；无实际内部接收时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_dive_capture 获取实际 dive_capture_internal_water_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_dive_capture_internal_water_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_wild_removal` | `dive_capture`; 输入; 基本流: 从天然环境移出的野生水生生物 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录实际移出的目标及伴生物种、活死状态、自然来源与质量基准。这不是外购扇贝、养殖苗种或整个海床种群；再捕或释放生物须配对去向记录。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_wild_removal 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_wild_removal 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_abstracted_water` | `dive_capture`; 输入; 基本流: 实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 当本节点拥有取水责任时，按自然来源及去向记录实测取水；区分补充水、循环水和转移水。潜水动物周围的环境海水不自动作为计量取水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_abstracted_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_abstracted_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_biological_uptake` | `dive_capture`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_dive_capture 获取实际 dive_capture_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_dive_capture_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_other_intended` | `dive_capture`; 输出; 产品流: 按物种、等级及去向区分的其他独立预期产出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录有证据的实际独立预期销售或去向产品，包括不同等级或物种。每个接收者及数量只列一次；不自动将拒收、释放生物或残留物当成共产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_other_intended 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_other_intended 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_packages_out` | `dive_capture`; 输出; 产品流: 随附或返还的可复用包装及容器 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按配对编号及材质质量追踪随动物转交包装、独立返还与可复用库存去向；同一包装收发不是重复外部消耗，也不加入动物参考质量。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_packages_out 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_packages_out 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_internal_water_transfer` | `dive_capture`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_dive_capture 获取实际 dive_capture_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_dive_capture_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_animal_waste` | `dive_capture`; 输出; 废物流: 送往实际接收者的受控非产品动物物料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按活死状态及接收者区分死亡或拒收动物、破碎动物壳/组织及受控生物固体。仅实际废物外运属本卡；留存库存或释放生物须另作库存或环境记录。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_animal_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_animal_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_other_waste` | `dive_capture`; 输出; 废物流: 其他受控废弃固体及材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录分离泥沙、外部附着生物、使用后耗材、包装及设备废物和实际处理接收者；外部附着物不自动算入动物质量或销售产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_other_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_other_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_wastewater` | `dive_capture`; 输出; 废物流: 交给处理接收者的受控废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 计量交给技术系统接收者的受控清洗/暂存/清洁废水、实际盐度或固体及归属；其溶解组分不再同时作为直接基本流，除非有独立释放。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_wastewater 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_wastewater 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_gas_fate` | `dive_capture`; 输出; 基本流: 按组分及介质记录的实际潜水和压缩气体释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 核对呼吸气库存消耗、泄漏/放空及返还，不假定全部供应气体均排放，不将呼吸虚构为化石燃烧 CO2。按可辩护原生体积或质量换算分别解析实际组分及水/空气接收介质。 流属性/单位: 气体体积 / m3; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `technology_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_gas_fate 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_gas_fate 单位：m3 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_other_air` | `dive_capture`; 输出; 基本流: 其他实际物质特异性空气释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质及空气子介质分别解析实际燃烧组分、颗粒粒级、制冷剂或生物空气释放。不用笼统污染物组 UUID，不假定排放因子或固碳抵扣。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_other_air 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_other_air 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_dive_capture_other_environment` | `dive_capture`; 输出; 基本流: 实际非空气环境释放或生物去向 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按接收介质、状态及时间区分未受控活/死生物返放、动物/外部固体、渗出物、生物沉积物、水以及实际物质特异性海水、淡水或土壤释放。留存库存不是外运；不采用负采捕量、笼统化石碳身份或自动表征因子。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_dive_capture` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_dive_capture` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：dive_capture_other_environment 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_dive_capture_other_environment 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_dive_capture`;  |
| `collect_first_cleaning_fuel` | `first_cleaning`; 输入; 产品流: 实际直接消耗的燃烧燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 记录可归属发动机、车辆或设备的确切燃料、供应门、实测库存或仪表平衡及化石/生物源比例。排除供应商服务已含燃料，不能假定手工作业无燃料。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `technology_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_fuel 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_fuel 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_services_assets` | `first_cleaning`; 输入; 产品流: 实际作业服务及资产使用 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 将每项实际外购服务或可归属船舶、进出物流、潜水支持、维护或设备服务分别按原生单位解析。记录所含边界、使用节点及服务期；供应商已包含的组成不能再直接计入。 流属性/单位: 服务量 / native service unit; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `route_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_services_assets 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_services_assets 单位：native service unit 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_materials` | `first_cleaning`; 输入; 产品流: 实际消耗的作业及状态维护材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按身份及用途分别解析实际润滑剂、清洁耗材、过滤材料、保护材料或其他所需耗材；仅计实际节点使用，不虚构处理或默认活体加冰。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_materials 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_materials 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_packages_in` | `first_cleaning`; 输入; 产品流: 实际接收的袋、容器及保护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 区分新外购包装、配对内部接收与可复用库存领用、材质质量及复用状态；即使跳过最终呈现，采集袋和中间容器也归实际责任节点。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_packages_in 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_packages_in 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_supplied_water` | `first_cleaning`; 输入; 产品流: 实际水质的外部供应水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录实际采购或供应的海水、淡水或其他水、食品接触用途、接收门及质量；不替换为工业用水身份，不将内部循环重复当成新供水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_supplied_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_supplied_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_internal_water_receipt` | `first_cleaning`; 输入; 产品流: 实际内部可用水接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一前景节点/轮次或单独建模的库存责任接收可用承载水/循环水时记录来处、接收者、配对编号、时间、组成、质量及期初期末库存；配对发送端水转出并继承原有上游负荷一次。不在外供水或取水卡重复记同一水，不计为预期共产品或动物净质量。同节点循环或库存移动保留子账，不新增边界交换；无实际内部接收时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_first_cleaning 获取实际 first_cleaning_internal_water_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_first_cleaning_internal_water_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_abstracted_water` | `first_cleaning`; 输入; 基本流: 实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 当本节点拥有取水责任时，按自然来源及去向记录实测取水；区分补充水、循环水和转移水。潜水动物周围的环境海水不自动作为计量取水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_abstracted_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_abstracted_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_biological_uptake` | `first_cleaning`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_first_cleaning 获取实际 first_cleaning_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_first_cleaning_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_other_intended` | `first_cleaning`; 输出; 产品流: 按物种、等级及去向区分的其他独立预期产出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录有证据的实际独立预期销售或去向产品，包括不同等级或物种。每个接收者及数量只列一次；不自动将拒收、释放生物或残留物当成共产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_other_intended 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_other_intended 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_packages_out` | `first_cleaning`; 输出; 产品流: 随附或返还的可复用包装及容器 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按配对编号及材质质量追踪随动物转交包装、独立返还与可复用库存去向；同一包装收发不是重复外部消耗，也不加入动物参考质量。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_packages_out 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_packages_out 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_internal_water_transfer` | `first_cleaning`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_first_cleaning 获取实际 first_cleaning_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_first_cleaning_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_animal_waste` | `first_cleaning`; 输出; 废物流: 送往实际接收者的受控非产品动物物料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按活死状态及接收者区分死亡或拒收动物、破碎动物壳/组织及受控生物固体。仅实际废物外运属本卡；留存库存或释放生物须另作库存或环境记录。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_animal_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_animal_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_other_waste` | `first_cleaning`; 输出; 废物流: 其他受控废弃固体及材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录分离泥沙、外部附着生物、使用后耗材、包装及设备废物和实际处理接收者；外部附着物不自动算入动物质量或销售产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_other_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_other_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_wastewater` | `first_cleaning`; 输出; 废物流: 交给处理接收者的受控废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 计量交给技术系统接收者的受控清洗/暂存/清洁废水、实际盐度或固体及归属；其溶解组分不再同时作为直接基本流，除非有独立释放。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_wastewater 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_wastewater 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_other_air` | `first_cleaning`; 输出; 基本流: 其他实际物质特异性空气释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质及空气子介质分别解析实际燃烧组分、颗粒粒级、制冷剂或生物空气释放。不用笼统污染物组 UUID，不假定排放因子或固碳抵扣。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_other_air 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_other_air 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_first_cleaning_other_environment` | `first_cleaning`; 输出; 基本流: 实际非空气环境释放或生物去向 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按接收介质、状态及时间区分未受控活/死生物返放、动物/外部固体、渗出物、生物沉积物、水以及实际物质特异性海水、淡水或土壤释放。留存库存不是外运；不采用负采捕量、笼统化石碳身份或自动表征因子。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_cleaning` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_cleaning` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_cleaning_other_environment 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_cleaning_other_environment 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_cleaning`;  |
| `collect_grade_sort_fuel` | `grade_sort`; 输入; 产品流: 实际直接消耗的燃烧燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 记录可归属发动机、车辆或设备的确切燃料、供应门、实测库存或仪表平衡及化石/生物源比例。排除供应商服务已含燃料，不能假定手工作业无燃料。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `technology_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_fuel 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_fuel 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_services_assets` | `grade_sort`; 输入; 产品流: 实际作业服务及资产使用 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 将每项实际外购服务或可归属船舶、进出物流、潜水支持、维护或设备服务分别按原生单位解析。记录所含边界、使用节点及服务期；供应商已包含的组成不能再直接计入。 流属性/单位: 服务量 / native service unit; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `route_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_services_assets 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_services_assets 单位：native service unit 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_materials` | `grade_sort`; 输入; 产品流: 实际消耗的作业及状态维护材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按身份及用途分别解析实际润滑剂、清洁耗材、过滤材料、保护材料或其他所需耗材；仅计实际节点使用，不虚构处理或默认活体加冰。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_materials 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_materials 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_packages_in` | `grade_sort`; 输入; 产品流: 实际接收的袋、容器及保护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 区分新外购包装、配对内部接收与可复用库存领用、材质质量及复用状态；即使跳过最终呈现，采集袋和中间容器也归实际责任节点。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_packages_in 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_packages_in 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_supplied_water` | `grade_sort`; 输入; 产品流: 实际水质的外部供应水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录实际采购或供应的海水、淡水或其他水、食品接触用途、接收门及质量；不替换为工业用水身份，不将内部循环重复当成新供水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_supplied_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_supplied_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_internal_water_receipt` | `grade_sort`; 输入; 产品流: 实际内部可用水接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一前景节点/轮次或单独建模的库存责任接收可用承载水/循环水时记录来处、接收者、配对编号、时间、组成、质量及期初期末库存；配对发送端水转出并继承原有上游负荷一次。不在外供水或取水卡重复记同一水，不计为预期共产品或动物净质量。同节点循环或库存移动保留子账，不新增边界交换；无实际内部接收时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_grade_sort 获取实际 grade_sort_internal_water_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_grade_sort_internal_water_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_abstracted_water` | `grade_sort`; 输入; 基本流: 实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 当本节点拥有取水责任时，按自然来源及去向记录实测取水；区分补充水、循环水和转移水。潜水动物周围的环境海水不自动作为计量取水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_abstracted_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_abstracted_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_biological_uptake` | `grade_sort`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_grade_sort 获取实际 grade_sort_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_grade_sort_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_other_intended` | `grade_sort`; 输出; 产品流: 按物种、等级及去向区分的其他独立预期产出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录有证据的实际独立预期销售或去向产品，包括不同等级或物种。每个接收者及数量只列一次；不自动将拒收、释放生物或残留物当成共产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_other_intended 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_other_intended 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_packages_out` | `grade_sort`; 输出; 产品流: 随附或返还的可复用包装及容器 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按配对编号及材质质量追踪随动物转交包装、独立返还与可复用库存去向；同一包装收发不是重复外部消耗，也不加入动物参考质量。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_packages_out 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_packages_out 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_internal_water_transfer` | `grade_sort`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_grade_sort 获取实际 grade_sort_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_grade_sort_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_animal_waste` | `grade_sort`; 输出; 废物流: 送往实际接收者的受控非产品动物物料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按活死状态及接收者区分死亡或拒收动物、破碎动物壳/组织及受控生物固体。仅实际废物外运属本卡；留存库存或释放生物须另作库存或环境记录。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_animal_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_animal_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_other_waste` | `grade_sort`; 输出; 废物流: 其他受控废弃固体及材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录分离泥沙、外部附着生物、使用后耗材、包装及设备废物和实际处理接收者；外部附着物不自动算入动物质量或销售产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_other_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_other_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_wastewater` | `grade_sort`; 输出; 废物流: 交给处理接收者的受控废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 计量交给技术系统接收者的受控清洗/暂存/清洁废水、实际盐度或固体及归属；其溶解组分不再同时作为直接基本流，除非有独立释放。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_wastewater 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_wastewater 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_other_air` | `grade_sort`; 输出; 基本流: 其他实际物质特异性空气释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质及空气子介质分别解析实际燃烧组分、颗粒粒级、制冷剂或生物空气释放。不用笼统污染物组 UUID，不假定排放因子或固碳抵扣。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_other_air 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_other_air 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_grade_sort_other_environment` | `grade_sort`; 输出; 基本流: 实际非空气环境释放或生物去向 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按接收介质、状态及时间区分未受控活/死生物返放、动物/外部固体、渗出物、生物沉积物、水以及实际物质特异性海水、淡水或土壤释放。留存库存不是外运；不采用负采捕量、笼统化石碳身份或自动表征因子。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_grade_sort` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_grade_sort` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：grade_sort_other_environment 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_grade_sort_other_environment 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_grade_sort`;  |
| `collect_live_hold_fuel` | `live_hold`; 输入; 产品流: 实际直接消耗的燃烧燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 记录可归属发动机、车辆或设备的确切燃料、供应门、实测库存或仪表平衡及化石/生物源比例。排除供应商服务已含燃料，不能假定手工作业无燃料。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `technology_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_fuel 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_fuel 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_services_assets` | `live_hold`; 输入; 产品流: 实际作业服务及资产使用 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 将每项实际外购服务或可归属船舶、进出物流、潜水支持、维护或设备服务分别按原生单位解析。记录所含边界、使用节点及服务期；供应商已包含的组成不能再直接计入。 流属性/单位: 服务量 / native service unit; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `route_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_services_assets 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_services_assets 单位：native service unit 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_materials` | `live_hold`; 输入; 产品流: 实际消耗的作业及状态维护材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按身份及用途分别解析实际润滑剂、清洁耗材、过滤材料、保护材料或其他所需耗材；仅计实际节点使用，不虚构处理或默认活体加冰。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_materials 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_materials 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_packages_in` | `live_hold`; 输入; 产品流: 实际接收的袋、容器及保护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 区分新外购包装、配对内部接收与可复用库存领用、材质质量及复用状态；即使跳过最终呈现，采集袋和中间容器也归实际责任节点。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_packages_in 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_packages_in 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_supplied_water` | `live_hold`; 输入; 产品流: 实际水质的外部供应水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录实际采购或供应的海水、淡水或其他水、食品接触用途、接收门及质量；不替换为工业用水身份，不将内部循环重复当成新供水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_supplied_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_supplied_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_internal_water_receipt` | `live_hold`; 输入; 产品流: 实际内部可用水接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一前景节点/轮次或单独建模的库存责任接收可用承载水/循环水时记录来处、接收者、配对编号、时间、组成、质量及期初期末库存；配对发送端水转出并继承原有上游负荷一次。不在外供水或取水卡重复记同一水，不计为预期共产品或动物净质量。同节点循环或库存移动保留子账，不新增边界交换；无实际内部接收时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_live_hold 获取实际 live_hold_internal_water_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_live_hold_internal_water_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_gas_supply` | `live_hold`; 输入; 产品流: 实际供应的活体维持混合气 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际由本前景直接承担供气责任、用于非净化活体维持时，记录空气/氧或其他气体的实际组成、供方、交付门、温压/体积基准、原生单位、充入/消耗/返还及库存。与潜水呼吸气分别记录；不默认供氧、剂量、工业氧身份或加冰。供方服务已含气体不再重复计产品；气体支持身份须独立核实。 流属性/单位: 实际气体数量属性 / actual native gas unit; 数量规则: 由 cp_live_hold 获取实际 live_hold_gas_supply 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_live_hold_gas_supply 单位: actual native gas unit 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_abstracted_water` | `live_hold`; 输入; 基本流: 实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 当本节点拥有取水责任时，按自然来源及去向记录实测取水；区分补充水、循环水和转移水。潜水动物周围的环境海水不自动作为计量取水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_abstracted_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_abstracted_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_biological_uptake` | `live_hold`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_live_hold 获取实际 live_hold_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_live_hold_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_other_intended` | `live_hold`; 输出; 产品流: 按物种、等级及去向区分的其他独立预期产出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录有证据的实际独立预期销售或去向产品，包括不同等级或物种。每个接收者及数量只列一次；不自动将拒收、释放生物或残留物当成共产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_other_intended 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_other_intended 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_packages_out` | `live_hold`; 输出; 产品流: 随附或返还的可复用包装及容器 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按配对编号及材质质量追踪随动物转交包装、独立返还与可复用库存去向；同一包装收发不是重复外部消耗，也不加入动物参考质量。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_packages_out 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_packages_out 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_internal_water_transfer` | `live_hold`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_live_hold 获取实际 live_hold_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_live_hold_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_animal_waste` | `live_hold`; 输出; 废物流: 送往实际接收者的受控非产品动物物料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按活死状态及接收者区分死亡或拒收动物、破碎动物壳/组织及受控生物固体。仅实际废物外运属本卡；留存库存或释放生物须另作库存或环境记录。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_animal_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_animal_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_other_waste` | `live_hold`; 输出; 废物流: 其他受控废弃固体及材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录分离泥沙、外部附着生物、使用后耗材、包装及设备废物和实际处理接收者；外部附着物不自动算入动物质量或销售产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_other_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_other_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_wastewater` | `live_hold`; 输出; 废物流: 交给处理接收者的受控废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 计量交给技术系统接收者的受控清洗/暂存/清洁废水、实际盐度或固体及归属；其溶解组分不再同时作为直接基本流，除非有独立释放。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_wastewater 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_wastewater 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_other_air` | `live_hold`; 输出; 基本流: 其他实际物质特异性空气释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质及空气子介质分别解析实际燃烧组分、颗粒粒级、制冷剂或生物空气释放。不用笼统污染物组 UUID，不假定排放因子或固碳抵扣。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_other_air 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_other_air 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_live_hold_other_environment` | `live_hold`; 输出; 基本流: 实际非空气环境释放或生物去向 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按接收介质、状态及时间区分未受控活/死生物返放、动物/外部固体、渗出物、生物沉积物、水以及实际物质特异性海水、淡水或土壤释放。留存库存不是外运；不采用负采捕量、笼统化石碳身份或自动表征因子。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_live_hold` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_live_hold` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：live_hold_other_environment 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_live_hold_other_environment 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_live_hold`;  |
| `collect_presentation_fuel` | `presentation`; 输入; 产品流: 实际直接消耗的燃烧燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 记录可归属发动机、车辆或设备的确切燃料、供应门、实测库存或仪表平衡及化石/生物源比例。排除供应商服务已含燃料，不能假定手工作业无燃料。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `technology_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_fuel 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_fuel 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_services_assets` | `presentation`; 输入; 产品流: 实际作业服务及资产使用 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 将每项实际外购服务或可归属船舶、进出物流、潜水支持、维护或设备服务分别按原生单位解析。记录所含边界、使用节点及服务期；供应商已包含的组成不能再直接计入。 流属性/单位: 服务量 / native service unit; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `route_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_services_assets 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_services_assets 单位：native service unit 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_materials` | `presentation`; 输入; 产品流: 实际消耗的作业及状态维护材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按身份及用途分别解析实际润滑剂、清洁耗材、过滤材料、保护材料或其他所需耗材；仅计实际节点使用，不虚构处理或默认活体加冰。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_materials 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_materials 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_packages_in` | `presentation`; 输入; 产品流: 实际接收的袋、容器及保护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 区分新外购包装、配对内部接收与可复用库存领用、材质质量及复用状态；即使跳过最终呈现，采集袋和中间容器也归实际责任节点。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_packages_in 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_packages_in 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_supplied_water` | `presentation`; 输入; 产品流: 实际水质的外部供应水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录实际采购或供应的海水、淡水或其他水、食品接触用途、接收门及质量；不替换为工业用水身份，不将内部循环重复当成新供水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_supplied_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_supplied_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_internal_water_receipt` | `presentation`; 输入; 产品流: 实际内部可用水接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一前景节点/轮次或单独建模的库存责任接收可用承载水/循环水时记录来处、接收者、配对编号、时间、组成、质量及期初期末库存；配对发送端水转出并继承原有上游负荷一次。不在外供水或取水卡重复记同一水，不计为预期共产品或动物净质量。同节点循环或库存移动保留子账，不新增边界交换；无实际内部接收时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_presentation 获取实际 presentation_internal_water_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_presentation_internal_water_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_abstracted_water` | `presentation`; 输入; 基本流: 实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 当本节点拥有取水责任时，按自然来源及去向记录实测取水；区分补充水、循环水和转移水。潜水动物周围的环境海水不自动作为计量取水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_abstracted_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_abstracted_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_biological_uptake` | `presentation`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_presentation 获取实际 presentation_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_presentation_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_other_intended` | `presentation`; 输出; 产品流: 按物种、等级及去向区分的其他独立预期产出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录有证据的实际独立预期销售或去向产品，包括不同等级或物种。每个接收者及数量只列一次；不自动将拒收、释放生物或残留物当成共产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_other_intended 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_other_intended 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_packages_out` | `presentation`; 输出; 产品流: 随附或返还的可复用包装及容器 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按配对编号及材质质量追踪随动物转交包装、独立返还与可复用库存去向；同一包装收发不是重复外部消耗，也不加入动物参考质量。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_packages_out 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_packages_out 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_internal_water_transfer` | `presentation`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_presentation 获取实际 presentation_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_presentation_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_animal_waste` | `presentation`; 输出; 废物流: 送往实际接收者的受控非产品动物物料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按活死状态及接收者区分死亡或拒收动物、破碎动物壳/组织及受控生物固体。仅实际废物外运属本卡；留存库存或释放生物须另作库存或环境记录。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_animal_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_animal_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_other_waste` | `presentation`; 输出; 废物流: 其他受控废弃固体及材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录分离泥沙、外部附着生物、使用后耗材、包装及设备废物和实际处理接收者；外部附着物不自动算入动物质量或销售产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_other_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_other_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_wastewater` | `presentation`; 输出; 废物流: 交给处理接收者的受控废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 计量交给技术系统接收者的受控清洗/暂存/清洁废水、实际盐度或固体及归属；其溶解组分不再同时作为直接基本流，除非有独立释放。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_wastewater 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_wastewater 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_other_air` | `presentation`; 输出; 基本流: 其他实际物质特异性空气释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质及空气子介质分别解析实际燃烧组分、颗粒粒级、制冷剂或生物空气释放。不用笼统污染物组 UUID，不假定排放因子或固碳抵扣。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_other_air 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_other_air 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_presentation_other_environment` | `presentation`; 输出; 基本流: 实际非空气环境释放或生物去向 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按接收介质、状态及时间区分未受控活/死生物返放、动物/外部固体、渗出物、生物沉积物、水以及实际物质特异性海水、淡水或土壤释放。留存库存不是外运；不采用负采捕量、笼统化石碳身份或自动表征因子。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_presentation` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_presentation` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：presentation_other_environment 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_presentation_other_environment 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_presentation`;  |
| `collect_first_handover_fuel` | `first_handover`; 输入; 产品流: 实际直接消耗的燃烧燃料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 记录可归属发动机、车辆或设备的确切燃料、供应门、实测库存或仪表平衡及化石/生物源比例。排除供应商服务已含燃料，不能假定手工作业无燃料。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `technology_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_fuel 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_fuel 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_services_assets` | `first_handover`; 输入; 产品流: 实际作业服务及资产使用 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 将每项实际外购服务或可归属船舶、进出物流、潜水支持、维护或设备服务分别按原生单位解析。记录所含边界、使用节点及服务期；供应商已包含的组成不能再直接计入。 流属性/单位: 服务量 / native service unit; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `route_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_services_assets 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_services_assets 单位：native service unit 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_materials` | `first_handover`; 输入; 产品流: 实际消耗的作业及状态维护材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按身份及用途分别解析实际润滑剂、清洁耗材、过滤材料、保护材料或其他所需耗材；仅计实际节点使用，不虚构处理或默认活体加冰。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_materials 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_materials 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_packages_in` | `first_handover`; 输入; 产品流: 实际接收的袋、容器及保护包装 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 区分新外购包装、配对内部接收与可复用库存领用、材质质量及复用状态；即使跳过最终呈现，采集袋和中间容器也归实际责任节点。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_packages_in 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_packages_in 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_supplied_water` | `first_handover`; 输入; 产品流: 实际水质的外部供应水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录实际采购或供应的海水、淡水或其他水、食品接触用途、接收门及质量；不替换为工业用水身份，不将内部循环重复当成新供水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_supplied_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_supplied_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_internal_water_receipt` | `first_handover`; 输入; 产品流: 实际内部可用水接收 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际从另一前景节点/轮次或单独建模的库存责任接收可用承载水/循环水时记录来处、接收者、配对编号、时间、组成、质量及期初期末库存；配对发送端水转出并继承原有上游负荷一次。不在外供水或取水卡重复记同一水，不计为预期共产品或动物净质量。同节点循环或库存移动保留子账，不新增边界交换；无实际内部接收时不得虚构。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_first_handover 获取实际 first_handover_internal_water_receipt 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_first_handover_internal_water_receipt 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_abstracted_water` | `first_handover`; 输入; 基本流: 实际直接取水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 当本节点拥有取水责任时，按自然来源及去向记录实测取水；区分补充水、循环水和转移水。潜水动物周围的环境海水不自动作为计量取水。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_abstracted_water 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_abstracted_water 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_biological_uptake` | `first_handover`; 输入; 基本流: 实际活体动物的环境物质摄取 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅从周围天然空气/水体跨入前景系统边界的实际物质才是基本流输入；按来源介质、动物生命状态及有证据质量拆分氧、水或其他物质。相关时记录实质摄取及未解残差，不默认摄取因子、生长或固碳抵扣。动物从已供应气体/水或循环物料的吸收属于内部生物子账，不是再次环境输入；排除已计于采捕/接收、外供气体、供水或直接取水的同一物质。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_first_handover 获取实际 first_handover_biological_uptake 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_first_handover_biological_uptake 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_other_intended` | `first_handover`; 输出; 产品流: 按物种、等级及去向区分的其他独立预期产出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅记录有证据的实际独立预期销售或去向产品，包括不同等级或物种。每个接收者及数量只列一次；不自动将拒收、释放生物或残留物当成共产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_other_intended 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_other_intended 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_packages_out` | `first_handover`; 输出; 产品流: 随附或返还的可复用包装及容器 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按配对编号及材质质量追踪随动物转交包装、独立返还与可复用库存去向；同一包装收发不是重复外部消耗，也不加入动物参考质量。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_packages_out 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_packages_out 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_internal_water_transfer` | `first_handover`; 输出; 产品流: 实际内部可用水转出 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 仅实际向另一前景节点/轮次或单独建模库存责任转移可用承载水/循环水时，记录发送者、接收者、配对编号、时间、组成/盐度、实际可用状态/目的、质量及期初期末库存。与接收端水接收卡配对，原有上游负荷只结转一次。这不是新增外供/取水、预期共产品、最终动物质量、废水或直接环境释放。同节点循环/库存移动仅留子账，不新增边界交换；没有实际转移时不得虚构。转移记录本身不证明卫生适用性。 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` ; Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 由 cp_first_handover 获取实际 first_handover_internal_water_transfer 逐物质数量，保留完整未加权实物/库存子账；按唯一节点/期间归属及独立产出决定，以正验收参考净质量归一化，不把内部转移当成新供应。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围: 未解的独立代表性筛查证据；非数值默认或批次自身最大值 范围角色: `qa_guardrail` 下限: 0 上限: U_first_handover_internal_water_transfer 单位: kg 基准: 每 1 kg 参考流 基准类型: `reference_flow` 证据类型: `reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_animal_waste` | `first_handover`; 输出; 废物流: 送往实际接收者的受控非产品动物物料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按活死状态及接收者区分死亡或拒收动物、破碎动物壳/组织及受控生物固体。仅实际废物外运属本卡；留存库存或释放生物须另作库存或环境记录。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_animal_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_animal_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_other_waste` | `first_handover`; 输出; 废物流: 其他受控废弃固体及材料 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 分别记录分离泥沙、外部附着生物、使用后耗材、包装及设备废物和实际处理接收者；外部附着物不自动算入动物质量或销售产品。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_other_waste 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_other_waste 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_wastewater` | `first_handover`; 输出; 废物流: 交给处理接收者的受控废水 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 计量交给技术系统接收者的受控清洗/暂存/清洁废水、实际盐度或固体及归属；其溶解组分不再同时作为直接基本流，除非有独立释放。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_wastewater 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_wastewater 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_other_air` | `first_handover`; 输出; 基本流: 其他实际物质特异性空气释放 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按物质及空气子介质分别解析实际燃烧组分、颗粒粒级、制冷剂或生物空气释放。不用笼统污染物组 UUID，不假定排放因子或固碳抵扣。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_other_air 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_other_air 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `collect_first_handover_other_environment` | `first_handover`; 输出; 基本流: 实际非空气环境释放或生物去向 | 逐实际物理或化学流补充独立清单交换；逐项确定身份、流类型、组成/状态、原生属性与单位、供应商或接收环境/去向，并按下述采集责任保留实际未分配数量、原始记录和归一化。不得使用本义务作为集合交换、假定数量为零，或将集合总量、范围或 UUID 复制给各项。 按接收介质、状态及时间区分未受控活/死生物返放、动物/外部固体、渗出物、生物沉积物、水以及实际物质特异性海水、淡水或土壤释放。留存库存不是外运；不采用负采捕量、笼统化石碳身份或自动表征因子。 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` ; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; 数量规则: 按 `cp_first_handover` 获得每 1 kg 参考流的实际可归属数量；保留完整未加权物理吞吐及事件/期间归属。; 数值来源模式: `foreground_record`; 适用范围: `site_specific`; 归一化基准: 每 1 kg 参考流; 基准类型: `reference_flow`; 证据类型: `collected_record`; 采集协议: `cp_first_handover` 范围证据采集责任（不是已成立的区间，不能复制给各具体交换）：数量范围：first_handover_other_environment 的独立上限筛查证据未决 范围角色：`qa_guardrail` 下限：0 上限：U_first_handover_other_environment 单位：kg 基准：每 1 kg 参考流；未决的独立代表性筛查，不是默认值/目标批次最大值/裁剪 基准类型：`reference_flow` 证据类型：`reasoned_estimate` | 原始实测/活动、组成、交接/去向、供应商范围及独立范围证据；`cp_first_handover`;  |
| `transport_cargo_scope` | 任何适用的门前运输、返程与共享运输服务 | 按实际运输服务原生单位采集货载与距离；货载包括实际同行的水、冰与容器，不以净动物/鱼体参考质量替代。记录装载、空返与零产出期间的实际燃料/服务负担及其归属。完整运输服务与自有燃料、电力、资产和直接释放范围互斥；保留返程与复用容器责任。 | 实际货载、距离、行程、容器与供应商服务范围记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference_product | 核实 Pecten maximus 野生天然海床潜水手采来源、活体原壳整只、食品链用途接收者、首次实物验收及门前无有意净化/卫生转养/管理养成。排除拖耙/拖网/电采、其他扇贝、养殖、观赏、去壳肌肉/仅卵、死亡冷藏、冷冻或熟制产出。 |  |
| `validate_graph` | all_nodes | 匹配实际激活节点与作业顺序、两种或以上状态的独立分选、动物/水/包装配对转移、节点协议及实物库存平衡。跳过、重叠或重复事件不能产生重复参考交换或负荷。 |  |
| `validate_units` | all_inventory | 要求经校准验收活体净质量、皮重/清理状态、确切分母及有据数量/体积/能量换算。壳和体内水属于参考动物；游离水/泥沙/外部附着生物/包装不属于。仅湿质量差不能证明死亡、生长、肉率或生物碳。 |  |
| `validate_config` | dive_capture | 核实实际 SCUBA/水面供气装具及组成归属、混合组成、气瓶/充装/返还库存、体积条件及压缩机/服务证据。不计无证同时替代消耗，不规定纯氧。本清单规则不提供作业安全或合法性保证。 |  |
| `validate_fates` | all_outputs | 区分全部预期产出状态、活体释放、死亡/拒收动物、残留物、进入技术系统的废水与物质/介质特异直接环境释放；识别库存/不确定性和实际接收者。核实化石 CO2 仅来自本前景直接运营化石燃烧至空气；不替换为呼吸/工业氧，不暗示无影响采捕。 |  |
| `validate_ranges` | all_cards | 每项数量均有声明证据、节点协议和范围。U_<row_id> 表示缺失独立支持且有代表性的筛查上限，绝非数值默认值、目标批次最大值、允许区间或裁剪规则。取得独立支持并核查真实离群而不删除；最终参考流的 1..1 仅是归一化。 |  |
| `validate_burdens` | attribution | 核对唯一事件归属、独立共产品分配、较晚分流剩余上游池、全部生产/支持/返程/待机期间、服务所含、更换/终止及零产出处理。物理吞吐与 LCA 加权数量均须可追溯。 |  |
| `validate_evidence` | dataset_readiness | 在最终交换前独立解析每项实际具体流、属性及单位组；宽泛条件卡可展开为零/一个/多个真实交换。数量缺口或身份未决不会因结构校验变成已核实。边界/装具或接收者证据缺失时不能完成数据集。 |  |
| `validate_atomic_completion` | 所有适用采集义务与具体清单交换 | 必须逐一落实第8节每项适用采集义务的具体物理/化学交换及其独立数量、原生单位、组成/状态、范围依据或明确的不确定性证据、原始记录、归一化、实际去向/接收环境及兼容的核实 UUID。未落实任何适用项则最终数据包不完整且验证失败；未知不等于零。集合总量不得复制给各项，完整服务与自有燃料/电力/直接释放不得重复。内部转移不固定为最终1 kg。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅在具体交换/数量/边界/分配证据齐全后，用于兼容的野生潜水手采活体整只 Pecten maximus 有据采捕者首次门 |
| excluded_use | 替代整个 CPC 叶；养殖/其他渔具/物种；已净化/较晚门；肉/卵/冷冻/熟制/死亡状态；安全/法律/生态认证或未核实最终 UUID |
| required_metadata | 全部必需限定、完整作业/期间/库存图、原生单位/装具/服务所含、供应者/接收者、参考质量/皮重及分配决策 |
| required_quality_disclosure | 代表性、实际实测/计算/建模数量、身份/支持/范围缺口、未决平衡/去向及敏感性；不是结构检查认证 |
| update_trigger | 物种、采捕渔具/装具、门或处理目的、供应商/服务范围、库存/资产期、分配、数量证据或实际流身份变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes (2025), printed pp.50 and 78; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; retrieved 2026-10-10 | 仅用于野生扇贝叶及相邻养殖/加工边界；不提供物种/渔具/数量默认值。 |
| lochfyne-live-scallops | literature | Loch Fyne Langoustines, Live Whole King Scallops; https://lochfyne-langoustines.com/live-whole-king-scallops/ ; retrieved 2026-10-10 | 第一方证据支持 Pecten maximus、野生活体整只潜水手采及采集袋；不是通用等级、保质期、认证或装具声明。 |
| hse-shellfish-diving-2021 | official_guidance | HSE, Commercial shellfish diving in inshore water, revised 11/21, p.8 sections42–46; https://www.hse.gov.uk/regulating-major-hazards/assets/docs/scallop.pdf ; retrieved 2026-10-10 | 仅用于定性 SCUBA/水面供气替代及呼吸气/设备接口；不是定量安全处方或法律建议。 |
| fao-bivalve-depuration-2008 | official_guidance | Lee, Lovatelli and Ababouch, FAO Fisheries Technical Paper 511 (2008), abstract and pre-depuration considerations; https://www.fao.org/4/i0201e/i0201e00.htm ; retrieved 2026-10-10 | 区分有意净化与外表清理/非净化暂存；仅定性门前处理，不提供通用卫生保证或数值边界。 |
| reference-normalization-identity | method_factor | 本 PCR 第 3 节及 calculate_reference：同一验收活体净质量归一化至 1 kg。 | 仅 1..1 参考归一化恒等式，不是经验收率或质量阈值。 |
